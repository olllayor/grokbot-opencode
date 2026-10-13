import { j as j_1, c, aP, U as U_1, r as r_1, R, aN, p, f, s, o, aQ, d, aR, h, aS, b, u } from "./index.eager-vendor-Qbf9YA6n.js";
import { bn as bn_1, b8, b3, bf, b4, b5, bo, i, aY as Ws } from "./index.eager-platform-Dcfeegfw.js";
import { b7, bP, bA } from "./index.eager-app-Cj5f8Gby.js";
import { d9, W, cy as Gs, da as da_1, bx as Qs, db as Ys, bX as Js, p as Eo1 } from "./index-ZYxf-aBb.js";
import { N, g, E, d as d_1, o as o_1, m, j as j_2, P as P_1, a, b as b_1, D, c as c_2, T as T_1, A as A_1, y as y_1, B, F as F_1, S, C, G, H, J, K, L, O as O_1, u as u_2, t, Q, R as R_1, U as U_2, V as V_1, W as W_1, X as undo, Y as Y_1, n, Z, _, $, a0, a1 } from "./chunk-index-CPur7w6O.js";
import { r as r_2 } from "./chunk-get-file-icon-ZAkFyGfn.js";
import { T as T_2, g as g_1, s as s_1 } from "./chunk-ToggleIconButton-DDH2e1NR.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "70579bb3-bd47-4a78-8a49-32e380290e92";
            e._sentryDebugIdIdentifier = "sentry-dbid-70579bb3-bd47-4a78-8a49-32e380290e92";
        }
    } catch (e) {}
})();
function or(e, t) {
    let n = `codicon codicon-${e}`;
    if (t) {
        n += ` codicon-modifier-${t}`;
    }
    return n;
}
function Lr1Component(e) {
    Lr1Component.d = 4230312962;
    return <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...e}><path d="M4.75 2.25v5.5a3.25 3.25 0 0 0 6.5 0v-5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/><path d="M3.75 13.25h8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>;
}
const ar = /^[a-zA-Z]:[\\/]/;
const ur = /^file:/i;
const zo = /^[a-zA-Z][a-zA-Z0-9+.-]*:/;
function jo(e) {
    if (ur.test(e) || ar.test(e)) {
        return true;
    }
    return !zo.test(e);
}
function An(e) {
    if (e.startsWith("/") || e.startsWith("\\")) {
        return true;
    }
    return ar.test(e);
}
function Ao(e) {
    if (!e.includes("%")) {
        return e;
    }
    const t = e.trim();
    if (!t || !jo(t)) {
        return e;
    }
    try {
        const n = decodeURI(t);
        if (!ur.test(t) && !An(t) && An(n)) {
            return e;
        }
        return n;
    } catch  {
        return e;
    }
}
function Cr1Component({ pressed, ...rest }) {
    Cr1Component.d = 4127627457;
    return <T_2 {...rest} pressed={pressed} variant={pressed ? "secondary" : "ghost"}/>;
}
function No(locator, t, n) {
    const i = c.c(5);
    const r = n === undefined ? null : n;
    const s = b7();
    let o;
    if (i[0] !== r || i[1] !== locator || i[2] !== t || i[3] !== s.documentAssets) {
        o = s.documentAssets.stateFor(locator, t, r);
        i[0] = r;
        i[1] = locator;
        i[2] = t;
        i[3] = s.documentAssets;
        i[4] = o;
    } else {
        o = i[4];
    }
    return bP(o);
}
const It = {
    exports: {}
};
const Lt = {};
let Nn;
function Io() {
    if (Nn) {
        return Lt;
    }
    Nn = 1;
    const e = aP();
    function t(d, h) {
        return d === h && (d !== 0 || 1 / d === 1 / h) || d !== d && h !== h;
    }
    const n = typeof Object.is === "function" ? Object.is : t;
    const { useState, useEffect, useLayoutEffect, useDebugValue } = e;
    function useL(d, getSnapshot) {
        const p = getSnapshot();
        const f = useState({
            inst: {
                value: p,
                getSnapshot
            }
        });
        const inst = f[0].inst;
        const k = f[1];
        useLayoutEffect(()=>{
            inst.value = p;
            inst.getSnapshot = getSnapshot;
            if (a(inst)) {
                k({
                    inst
                });
            }
        }, [
            d,
            p,
            getSnapshot
        ]);
        useEffect(()=>{
            if (a(inst)) {
                k({
                    inst
                });
            }
            return d(()=>{
                if (a(inst)) {
                    k({
                        inst
                    });
                }
            });
        }, [
            d
        ]);
        useDebugValue(p);
        return p;
    }
    function a(d) {
        const d_getSnapshot = d.getSnapshot;
        d = d.value;
        try {
            const p = d_getSnapshot();
            return !n(d, p);
        } catch  {
            return true;
        }
    }
    function u(d, h) {
        return h();
    }
    const c = typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined" ? u : useL;
    Lt.useSyncExternalStore = e.useSyncExternalStore !== undefined ? e.useSyncExternalStore : c;
    return Lt;
}
let In;
function dr() {
    if (!In) {
        In = 1;
        It.exports = Io();
    }
    return It.exports;
}
const hr = dr();
const Pt = {
    exports: {}
};
const qt = {};
let Ln;
function Lo() {
    if (Ln) {
        return qt;
    }
    Ln = 1;
    const e = aP();
    const t = dr();
    function n(u, c) {
        return u === c && (u !== 0 || 1 / u === 1 / c) || u !== u && c !== c;
    }
    const i = typeof Object.is === "function" ? Object.is : n;
    const t_useSyncExternalStore = t.useSyncExternalStore;
    const { useRef, useEffect, useMemo, useDebugValue } = e;
    qt.useSyncExternalStoreWithSelector = (u, c, d, h, p)=>{
        let fRef = useRef(null);
        if (fRef.current === null) {
            var g = {
                hasValue: false,
                value: null
            };
            fRef.current = g;
        } else {
            g = fRef.current;
        }
        fRef = useMemo(()=>{
            function b($) {
                if (!w) {
                    w = true;
                    S = $;
                    $ = h($);
                    if (p !== undefined && g.hasValue) {
                        var E = g.value;
                        if (p(E, $)) {
                            return T = E;
                        }
                    }
                    return T = $;
                }
                E = T;
                if (i(S, $)) {
                    return E;
                }
                const L = h($);
                if (p !== undefined && p(E, L)) {
                    S = $;
                    return E;
                }
                S = $;
                return T = L;
            }
            var w = false;
            var S;
            var T;
            const M = d === undefined ? null : d;
            return [
                ()=>b(c()),
                M === null ? undefined : ()=>b(M())
            ];
        }, [
            c,
            d,
            h,
            p
        ]);
        const k = t_useSyncExternalStore(u, fRef[0], fRef[1]);
        useEffect(()=>{
            g.hasValue = true;
            g.value = k;
        }, [
            k
        ]);
        useDebugValue(k);
        return k;
    };
    return qt;
}
let Pn;
function Po() {
    if (!Pn) {
        Pn = 1;
        Pt.exports = Lo();
    }
    return Pt.exports;
}
const qo = Po();
const _o = (...e)=>(t)=>{
        e.forEach((n)=>{
            if (typeof n === "function") {
                n(t);
            } else if (n) {
                n.current = t;
            }
        });
    };
const Pr1Component = ({ contentComponent })=>{
    Reflect.set(Pr1Component, "d", 2907835745);
    const t = hr.useSyncExternalStore(contentComponent.subscribe, contentComponent.getSnapshot, contentComponent.getServerSnapshot);
    return <>{Object.values(t)}</>;
};
function Oo() {
    const e = new Set;
    let t = {};
    return {
        subscribe (n) {
            e.add(n);
            return ()=>{
                e.delete(n);
            };
        },
        getSnapshot () {
            return t;
        },
        getServerSnapshot () {
            return t;
        },
        setRenderer (n, i) {
            t = {
                ...t,
                [n]: aN.createPortal(i.reactElement, i.element, n)
            };
            e.forEach((r)=>r());
        },
        removeRenderer (n) {
            const i = {
                ...t
            };
            delete i[n];
            t = i;
            e.forEach((r)=>r());
        }
    };
}
class Do extends U_1.Component {
    constructor(e){
        var t;
        super(e);
        this.editorContentRef = U_1.createRef();
        this.initialized = false;
        this.state = {
            hasContentComponentInitialized: !!((t = e.editor) != null && t.contentComponent)
        };
    }
    componentDidMount() {
        this.init();
    }
    componentDidUpdate() {
        this.init();
    }
    init() {
        let e;
        const editor = this.props.editor;
        if (editor && !editor.isDestroyed && (e = editor.view.dom) != null && e.parentNode) {
            if (editor.contentComponent) {
                return;
            }
            const n = this.editorContentRef.current;
            n.append(...editor.view.dom.parentNode.childNodes);
            editor.setOptions({
                element: n
            });
            editor.contentComponent = Oo();
            if (!this.state.hasContentComponentInitialized) {
                this.unsubscribeToContentComponent = editor.contentComponent.subscribe(()=>{
                    this.setState((i)=>{
                        if (i.hasContentComponentInitialized) {
                            return i;
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
        let e;
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
                if (!((e = editor.view.dom) != null && e.parentNode)) {
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
        return <><div ref={_o(innerRef, this.editorContentRef)} {...rest}/>{editor?.contentComponent && <Pr1Component contentComponent={editor.contentComponent}/>}</>;
    }
}
var fr = r_1.forwardRef((e, innerRef)=>{
    Reflect.set(fr, "d", 2018557190);
    const n = U_1.useMemo(()=>Math.floor(Math.random() * 4294967295).toString(), [
        e.editor
    ]);
    return <Do key={n} innerRef={innerRef} {...e}/>;
});
const Ho = U_1.memo(fr);
const Bo = typeof window !== "undefined" ? r_1.useLayoutEffect : r_1.useEffect;
class Uo {
    constructor(e){
        this.transactionNumber = 0;
        this.lastTransactionNumber = 0;
        this.subscribers = new Set;
        this.editor = e;
        this.lastSnapshot = {
            editor: e,
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
    subscribe(e) {
        this.subscribers.add(e);
        return ()=>{
            this.subscribers.delete(e);
        };
    }
    watch(e) {
        this.editor = e;
        if (this.editor) {
            const t = ()=>{
                this.transactionNumber += 1;
                this.subscribers.forEach((i)=>i());
            };
            const n = this.editor;
            n.on("transaction", t);
            return ()=>{
                n.off("transaction", t);
            };
        }
    }
}
function useMr(e) {
    const [n] = r_1.useState(()=>new Uo(e.editor));
    const i = qo.useSyncExternalStoreWithSelector(n.subscribe, n.getSnapshot, n.getServerSnapshot, e.selector, e.equalityFn ?? d_1);
    Bo(()=>n.watch(e.editor), [
        e.editor,
        n
    ]);
    r_1.useDebugValue(i);
    return i;
}
const Fo = false;
const Vt = typeof window === "undefined";
const Wo = Vt || !!(typeof window !== "undefined" && window.next);
const Vo = class gr {
    constructor(t){
        this.editor = null;
        this.subscriptions = new Set;
        this.isComponentMounted = false;
        this.previousDeps = null;
        this.instanceId = "";
        this.options = t;
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
    setEditor(t) {
        this.editor = t;
        this.instanceId = Math.random().toString(36).slice(2, 9);
        this.subscriptions.forEach((n)=>n());
    }
    getInitialEditor() {
        if (this.options.current.immediatelyRender === undefined) {
            if (Vt || Wo) {
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
        const t = {
            ...this.options.current,
            onBeforeCreate: (...i)=>this.options.current.onBeforeCreate?.(...i),
            onBlur: (...i)=>this.options.current.onBlur?.(...i),
            onCreate: (...i)=>this.options.current.onCreate?.(...i),
            onDestroy: (...i)=>this.options.current.onDestroy?.(...i),
            onFocus: (...i)=>this.options.current.onFocus?.(...i),
            onSelectionUpdate: (...i)=>this.options.current.onSelectionUpdate?.(...i),
            onTransaction: (...i)=>this.options.current.onTransaction?.(...i),
            onUpdate: (...i)=>this.options.current.onUpdate?.(...i),
            onContentError: (...i)=>this.options.current.onContentError?.(...i),
            onDrop: (...i)=>this.options.current.onDrop?.(...i),
            onPaste: (...i)=>this.options.current.onPaste?.(...i),
            onDelete: (...i)=>this.options.current.onDelete?.(...i)
        };
        return new E(t);
    }
    getEditor() {
        return this.editor;
    }
    getServerSnapshot() {
        return null;
    }
    subscribe(t) {
        this.subscriptions.add(t);
        return ()=>{
            this.subscriptions.delete(t);
        };
    }
    static compareOptions(t, n) {
        return Object.keys(t).every((i)=>{
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
            ].includes(i)) {
                return true;
            }
            if (i === "extensions" && t.extensions && n.extensions) {
                if (t.extensions.length !== n.extensions.length) {
                    return false;
                }
                return t.extensions.every((r, s)=>r === n.extensions?.[s]);
            }
            return t[i] === n[i];
        });
    }
    onRender(t) {
        return ()=>{
            this.isComponentMounted = true;
            clearTimeout(this.scheduledDestructionTimeout);
            if (this.editor && !this.editor.isDestroyed && t.length === 0) {
                if (!gr.compareOptions(this.options.current, this.editor.options)) {
                    this.editor.setOptions({
                        ...this.options.current,
                        editable: this.editor.isEditable
                    });
                }
            } else {
                this.refreshEditorInstance(t);
            }
            return ()=>{
                this.isComponentMounted = false;
                this.scheduleDestroy();
            };
        };
    }
    refreshEditorInstance(t) {
        if (this.editor && !this.editor.isDestroyed) {
            if (this.previousDeps === null) {
                this.previousDeps = t;
                return;
            }
            if (this.previousDeps.length === t.length && this.previousDeps.every((i, r)=>i === t[r])) {
                return;
            }
        }
        if (this.editor && !this.editor.isDestroyed) {
            this.editor.destroy();
        }
        this.setEditor(this.createEditor());
        this.previousDeps = t;
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
function useKo(e = {}, t = []) {
    const nRef = r_1.useRef(e);
    nRef.current = e;
    const [i] = r_1.useState(()=>new Vo(nRef));
    const r = hr.useSyncExternalStore(i.subscribe, i.getEditor, i.getServerSnapshot);
    r_1.useDebugValue(r);
    r_1.useEffect(i.onRender(t));
    useMr({
        editor: r,
        selector: ({ transactionNumber })=>{
            if (e.shouldRerenderOnTransaction === false || e.shouldRerenderOnTransaction === undefined) {
                return null;
            }
            if (e.immediatelyRender && transactionNumber === 0) {
                return 0;
            }
            return transactionNumber + 1;
        }
    });
    return r;
}
const KrContext = r_1.createContext({
    editor: null
});
KrContext.Consumer;
const useBr = ()=>r_1.useContext(KrContext);
const YrContext = r_1.createContext({
    onDragStart: ()=>{},
    nodeViewContentChildren: undefined,
    nodeViewContentRef: ()=>{}
});
const useWr = ()=>r_1.useContext(YrContext);
function Hn1({ as = "div", ...rest }) {
    Reflect.set(Hn1, "d", 553884401);
    const { nodeViewContentRef, nodeViewContentChildren } = useWr();
    return j_1.jsx(as, {
        ...rest,
        ref: nodeViewContentRef,
        "data-node-view-content": "",
        style: {
            whiteSpace: "pre-wrap",
            ...rest.style
        },
        children: nodeViewContentChildren
    });
}
var Pn1 = U_1.forwardRef((e, ref)=>{
    Reflect.set(Pn1, "d", 1472435527);
    const { onDragStart } = useWr();
    const I = e.as || "div";
    return <I {...e} ref={ref} data-node-view-wrapper="" onDragStart={onDragStart} style={{
        whiteSpace: "normal",
        ...e.style
    }}/>;
});
function qn(e) {
    return !!(typeof e === "function" && e.prototype && e.prototype.isReactComponent);
}
function _n(e) {
    return !!(typeof e === "object" && e.$$typeof && (e.$$typeof.toString() === "Symbol(react.forward_ref)" || e.$$typeof.description === "react.forward_ref"));
}
function Xo(Component) {
    return !!(typeof Component === "object" && Component.$$typeof && (Component.$$typeof.toString() === "Symbol(react.memo)" || Component.$$typeof.description === "react.memo"));
}
function Go(Component) {
    if (qn(Component) || _n(Component)) {
        return true;
    }
    if (Xo(Component)) {
        const t = Component.type;
        if (t) {
            return qn(t) || _n(t);
        }
    }
    return false;
}
function Zo() {
    try {
        if (r_1.version) {
            return parseInt(r_1.version.split(".")[0], 10) >= 19;
        }
    } catch  {}
    return false;
}
class Qo {
    constructor(e, { editor, props = {}, as = "div", className = "" }){
        this.ref = null;
        this.id = Math.floor(Math.random() * 4294967295).toString();
        this.component = e;
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
        let e;
        const Component = this.component;
        const props = this.props;
        const editor = this.editor;
        const r = Zo();
        const s = Go(Component);
        const o = {
            ...props
        };
        o.ref && !(r || s) && delete o.ref;
        if (!o.ref && (r || s)) {
            o.ref = (l)=>{
                this.ref = l;
            };
        }
        this.reactElement = <Component {...o}/>;
        if (!((e = editor?.contentComponent) == null)) {
            e.setRenderer(this.id, this);
        }
    }
    updateProps(e = {}) {
        this.props = {
            ...this.props,
            ...e
        };
        this.render();
    }
    destroy() {
        let e;
        const editor = this.editor;
        if (!((e = editor?.contentComponent) == null)) {
            e.removeRenderer(this.id);
        }
        try {
            if (this.element && this.element.parentNode) {
                this.element.parentNode.removeChild(this.element);
            }
        } catch  {}
    }
    updateAttributes(e) {
        Object.keys(e).forEach((t)=>{
            this.element.setAttribute(t, e[t]);
        });
    }
}
U_1.createContext({
    markViewContentRef: ()=>{}
});
class Yo extends N {
    constructor(e, t, n){
        super(e, t, n);
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
            const i = this.dom.querySelector("[data-node-view-content]");
            if (!i) {
                return;
            }
            i.appendChild(this.contentDOMElement);
        }
    }
    mount() {
        const props = {
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
        const i = {
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
        const ReactNodeView = r_1.memo((a)=><YrContext.Provider value={i}><Component {...a}/></YrContext.Provider>);
        ReactNodeView.displayName = "ReactNodeView";
        let as_1 = this.node.isInline ? "span" : "div";
        if (this.options.as) {
            as_1 = this.options.as;
        }
        const { className = "" } = this.options;
        this.handleSelectionUpdate = this.handleSelectionUpdate.bind(this);
        this.renderer = new Qo(ReactNodeView, {
            editor: this.editor,
            props,
            as: as_1,
            className: `node-${this.node.type.name} ${className}`.trim()
        });
        this.editor.on("selectionUpdate", this.handleSelectionUpdate);
        this.updateElementAttributes();
    }
    get dom() {
        let e;
        if (this.renderer.element.firstElementChild && !((e = this.renderer.element.firstElementChild) != null && e.hasAttribute("data-node-view-wrapper"))) {
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
    update(e, t, innerDecorations) {
        const i = (r)=>{
            this.renderer.updateProps(r);
            if (typeof this.options.attrs === "function") {
                this.updateElementAttributes();
            }
        };
        if (e.type !== this.node.type) {
            return false;
        }
        if (typeof this.options.update === "function") {
            const oldNode = this.node;
            const oldDecorations = this.decorations;
            const oldInnerDecorations = this.innerDecorations;
            this.node = e;
            this.decorations = t;
            this.innerDecorations = innerDecorations;
            return this.options.update({
                oldNode,
                oldDecorations,
                newNode: e,
                newDecorations: t,
                oldInnerDecorations,
                innerDecorations,
                updateProps: ()=>i({
                        node: e,
                        decorations: t,
                        innerDecorations
                    })
            });
        }
        if (!(e === this.node && this.decorations === t && this.innerDecorations === innerDecorations)) {
            this.node = e;
            this.decorations = t;
            this.innerDecorations = innerDecorations;
            i({
                node: e,
                decorations: t,
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
            let e = {};
            if (typeof this.options.attrs === "function") {
                const t = this.editor.extensionManager.attributes;
                const HTMLAttributes = g(this.node, t);
                e = this.options.attrs({
                    node: this.node,
                    HTMLAttributes
                });
            } else {
                e = this.options.attrs;
            }
            this.renderer.updateAttributes(e);
        }
    }
}
function xr(e, t) {
    return (n)=>{
        if (n.editor.contentComponent) {
            return new Yo(e, n, t);
        }
        return {};
    };
}
const Jo = new Set([
    "javascript:",
    "vbscript:"
]);
const el = "https://safe-href.invalid/";
const tl = /^data:image\//i;
function On(e, protocol, n) {
    const i = protocol.toLowerCase();
    if (Jo.has(i)) {
        return true;
    }
    if (i !== "data:") {
        return false;
    }
    if (e === "href") {
        return true;
    }
    return !tl.test(n.trim());
}
function Pe(e, t = "href", n) {
    if (e == null || e.trim().length === 0) {
        return;
    }
    const i = n?.decode === false ? e : Ao(e);
    try {
        const r = new URL(i);
        if (On(t, r.protocol, i)) {
            return undefined;
        }
        return r.href;
    } catch  {
        try {
            const r = new URL(i, el);
            if (On(t, r.protocol, i)) {
                return;
            }
        } catch  {
            return;
        }
        return i;
    }
}
function Dn(e) {
    return "button" in e && "clientX" in e && "clientY" in e;
}
function nl(e) {
    return "key" in e;
}
function _t(target) {
    if (!target || typeof target !== "object" || !("nodeType" in target)) {
        return;
    }
    const t = target;
    if (t.nodeType === Node.ELEMENT_NODE) {
        return t;
    }
    return t.parentElement ?? undefined;
}
function il(e) {
    const t = e.getBoundingClientRect();
    return {
        x: t.left,
        y: t.bottom
    };
}
function Hn(e, anchor) {
    const n = Pe(e);
    if (n) {
        return {
            href: n,
            anchor
        };
    }
}
function rl({ onLinkContextMenu, getHref, getLinkElement }) {
    let i;
    const r = (s)=>{
        if (s) {
            if (getLinkElement) {
                return getLinkElement(s);
            }
            return s;
        }
    };
    return {
        mousedown (s, o) {
            if (!Dn(o)) {
                return false;
            }
            const l = o.button === 0 && o.ctrlKey && bn_1();
            if (o.button !== 2 && !l) {
                i = undefined;
                return false;
            }
            const linkElement = r(_t(o.target));
            if (!linkElement || !onLinkContextMenu || !Pe(getHref(linkElement))) {
                return false;
            }
            i = {
                doc: s.state.doc,
                linkElement,
                selection: s.state.selection
            };
            o.preventDefault();
            return true;
        },
        contextmenu (s, o) {
            if (!Dn(o)) {
                return false;
            }
            const l = r(_t(o.target));
            const a = l ? getHref(l) : undefined;
            const u = a !== undefined ? Hn(a, {
                x: o.clientX,
                y: o.clientY
            }) : undefined;
            if (!onLinkContextMenu) {
                i = undefined;
                return false;
            }
            if (!u) {
                i = undefined;
                if (a !== undefined) {
                    o.preventDefault();
                    o.stopPropagation();
                    return true;
                }
                return false;
            }
            const c = i;
            i = undefined;
            if (c?.doc === s.state.doc && c.linkElement === l) {
                s.dispatch(s.state.tr.setSelection(c.selection));
            }
            o.preventDefault();
            o.stopPropagation();
            onLinkContextMenu(u);
            return true;
        },
        keydown (s, o) {
            if (!nl(o) || o.repeat) {
                return false;
            }
            const l = o.key === "ContextMenu";
            const a = o.key === "F10" && o.shiftKey;
            if (!l && !a || !onLinkContextMenu) {
                return false;
            }
            const u = r(_t(o.target));
            const c = u ? getHref(u) : undefined;
            if (!u || c === undefined) {
                return false;
            }
            o.preventDefault();
            o.stopPropagation();
            const d = Hn(c, il(u));
            if (d) {
                onLinkContextMenu(d);
            }
            return true;
        }
    };
}
const sl = {
    base: {
        k1xSpc: "ui-t0psk2",
        kMnn75: "ui-krqix3",
        kkrTdU: "ui-1ypdohk",
        k63SB2: "ui-ng2saa",
        kaIpWk: "ui-12oqio5",
        kUOVxO: "ui-1iyyiug",
        k8WAf4: "ui-j8oexa",
        kg3NbH: "ui-5k8d2m",
        keMLs9: "ui-yh5bb9",
        kPmA4f: "ui-19bzpp3",
        khDVqt: "ui-eaf4i8",
        kHjlTd: "ui-j0a0fe",
        kTgw9: "ui-13faqbe",
        "--markdown-inline-code-bg": "ui-xpcyif",
        "--markdown-inline-code-radius": "ui-htr15d",
        "--markdown-inline-code-padding-block": "ui-1kzln4z",
        "--markdown-inline-code-padding-inline": "ui-1sonb58",
        $$css: true
    }
};
const ol = {
    inlineChip: {
        khDVqt: "ui-uxw1ft",
        kHjlTd: "ui-1h4wwuj",
        kTgw9: "ui-1lldw8n",
        $$css: true
    }
};
const ll = {
    base: {
        k1ekBW: "ui-s2xxs2",
        kIyJzY: "ui-7pq1vu",
        kAMwcw: "ui-6tor67",
        $$css: true
    }
};
const Bn = {
    link: {
        kMwMTN: "ui-l1v4ol ui-16xb0gl",
        kGzVvX: "ui-yrwzsf",
        $$css: true
    },
    primary: {
        kMwMTN: "ui-1wd3ewq ui-1p8fkj",
        kGzVvX: "ui-1iuyybk",
        $$css: true
    }
};
const al = {
    slot: {
        k1xSpc: "ui-3nfvp2",
        kGNEyG: "ui-6s0dn4",
        kjj79g: "ui-l56j7k",
        kzqmXN: "ui-15vhz18",
        kZKoxP: "ui-lzyvqe",
        kXLuUW: "ui-14pnk2",
        k71WvV: "ui-8vfdiz",
        kfSwDN: "ui-87ps6o",
        $$css: true
    }
};
function ul(e) {
    if (e === "primary") {
        return Bn.primary;
    }
    return Bn.link;
}
function cl(e, t = false) {
    return [
        sl.base,
        ll.base,
        ul(e),
        t ? ol.inlineChip : null
    ];
}
function dl() {
    return al.slot;
}
const Be = {
    icon: {
        k1xSpc: "ui-1rg5ohu",
        kXLuUW: "ui-xymvpz",
        km5ZXQ: "ui-r0t2fk",
        $$css: true
    },
    cursorIcon: {
        k1xSpc: "ui-3nfvp2",
        kGNEyG: "ui-6s0dn4",
        kjj79g: "ui-l56j7k",
        kzqmXN: "ui-15vhz18",
        kZKoxP: "ui-lzyvqe",
        kXLuUW: "ui-xymvpz",
        km5ZXQ: "ui-r0t2fk",
        kVQacm: "ui-1rea2x4",
        k3aq6I: "ui-1m2fbaf",
        $$css: true
    },
    codicon: {
        kXLuUW: "ui-xymvpz",
        kpe85a: "ui-vipilk",
        k3aq6I: "ui-1n84xhb",
        $$css: true
    },
    showFileIcons: {
        k1xSpc: "ui-1rg5ohu",
        k4mN81: "ui-cwn45a",
        k9OqR7: "ui-advhij",
        k5vRlq: "ui-1f6s7ln",
        $$css: true
    },
    monacoIconLabel: {
        k1xSpc: "ui-1rg5ohu",
        kXLuUW: "ui-xymvpz",
        kzqmXN: "ui-rqk1uk",
        kZKoxP: "ui-1nb25p5",
        kLWn49: "ui-1ksnp83",
        kP1sEF: "ui-1fhgk32",
        $$css: true
    },
    inlineCodeSyntax: {
        kGuDYH: "ui-gxxoiu",
        kb6lSQ: "ui-12oo3zp",
        k33iCy: "ui-lshs6z",
        kzqmXN: "ui-nalus7",
        k1xSpc: "ui-t0psk2",
        $$css: true
    },
    inlineCodeText: {
        kMwMTN: "ui-l1v4ol",
        kkrTdU: "ui-1ypdohk",
        kMnn75: "ui-ujl8zx",
        kmVMDM: "ui-i2nhp4 ui-13iqwor",
        kcSHmL: "ui-g830sg",
        kMv6JI: "ui-jb2p0i",
        kGuDYH: "ui-1qlqyl8",
        k63SB2: "ui-1pd3egz",
        khDVqt: "ui-eaf4i8",
        kTgw9: "ui-1lldw8n",
        kHjlTd: "ui-j0a0fe",
        k33iCy: "ui-npuxes",
        kSiTet: "ui-1hc1fzr ui-1f2zl9v",
        $$css: true
    }
};
function hl() {
    return cl("link");
}
function pl() {
    return Be.icon;
}
function fl() {
    return Be.cursorIcon;
}
function ml() {
    return Be.codicon;
}
function gl() {
    return Be.showFileIcons;
}
function kl() {
    return Be.monacoIconLabel;
}
function bl() {
    return Be.inlineCodeSyntax;
}
function yl() {
    return Be.inlineCodeText;
}
function fn(e) {
    if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("mailto:") || e.startsWith("tel:")) {
        return false;
    }
    return !!(e.startsWith("file://") || e.startsWith("/") || e.startsWith("./") || e.startsWith("../") || /\.(ts|tsx|js|jsx|py|rs|go|java|c|cpp|h|hpp|css|scss|html|json|yaml|yml|toml|md|sql|proto|sh|bash|zsh)$/i.test(e) || e.includes("/") && !e.includes("://") || !e.includes("://") && !e.includes(" ") && /^[\w.-]+$/.test(e));
}
const Un = {
    anchor: {
        k1xSpc: "ui-t0psk2",
        kUOVxO: "ui-1iyyiug",
        k8WAf4: "ui-11jd7i5",
        kg3NbH: "ui-1bfovwe",
        kaIpWk: "ui-1e1y6u3",
        keMLs9: "ui-yh5bb9",
        kPmA4f: "ui-19bzpp3",
        kMwMTN: "ui-l1v4ol",
        kWkggS: "ui-jbqb8w ui-yrwzsf ui-wk1sgf",
        kGVxlE: "ui-23750h",
        kMeerF: "ui-1k57tk5",
        k3XXqK: "ui-1t137rt",
        kMnn75: "ui-krqix3 ui-1ubmc1d ui-1mqgifo",
        khDVqt: "ui-eaf4i8",
        kHjlTd: "ui-j0a0fe",
        kTgw9: "ui-13faqbe",
        k63SB2: "ui-1yl5bsf",
        kkrTdU: "ui-1ypdohk",
        k1ekBW: "ui-s2xxs2",
        kIyJzY: "ui-7pq1vu",
        kAMwcw: "ui-6tor67",
        "--markdown-inline-code-bg": "ui-xpcyif",
        "--markdown-inline-code-radius": "ui-htr15d",
        "--markdown-inline-code-padding-block": "ui-1kzln4z",
        "--markdown-inline-code-padding-inline": "ui-1sonb58",
        $$css: true
    },
    status: {
        kVAEAm: "ui-10l6tqk",
        kzqmXN: "ui-1i1rx1s",
        kZKoxP: "ui-jm9jq1",
        keoZOQ: "ui-1y332i5",
        k71WvV: "ui-jn30re",
        k1K539: "ui-1jyxor1",
        keTefX: "ui-1hb08if",
        kLKAdn: "ui-exx8yu",
        kwRFfy: "ui-yri2b",
        kGO01o: "ui-18d9i69",
        kZCmMZ: "ui-1c1uobl",
        kXHlph: "ui-6ikm8r",
        kORKVm: "ui-10wlt62",
        kMcinP: "ui-zpqnlu",
        khDVqt: "ui-uxw1ft",
        kEafiO: "ui-972fbf",
        ke9TFa: "ui-10w94by",
        kt9PQ7: "ui-1qhh985",
        k2ei4v: "ui-14e42zd",
        $$css: true
    }
};
const wl = 14;
const xl = (e)=>`${e / wl}em`;
const Fn = {
    "--icon-size": "1em",
    fontSize: xl(13)
};
const vl = b8({
    rootClass: "ui-citation-link",
    stylexStyles: hl()
});
function Kt(options, HTMLAttributes, n = false) {
    const i = typeof HTMLAttributes.href === "string" ? HTMLAttributes.href : undefined;
    const r = i && options.detectFilePaths ? options.isCitation?.(i, i) ?? fn(i) : false;
    return m(options.HTMLAttributes, n ? {
        ...HTMLAttributes,
        class: null,
        "data-citation": null
    } : HTMLAttributes, r && !n ? {
        class: vl.className,
        "data-citation": "true"
    } : {});
}
const vr = o_1.extend({
    name: "link",
    addOptions () {
        return {
            ...this.parent?.(),
            HTMLAttributes: {},
            detectFilePaths: true,
            protocols: [
                "http",
                "https",
                "mailto",
                "file"
            ],
            openOnClick: false
        };
    },
    addAttributes () {
        return {
            ...this.parent?.(),
            href: {
                default: null
            },
            target: {
                default: null
            },
            rel: {
                default: null
            },
            class: {
                default: null
            },
            "data-citation": {
                default: null
            }
        };
    },
    renderHTML ({ HTMLAttributes }) {
        return [
            "a",
            Kt(this.options, HTMLAttributes),
            0
        ];
    },
    addKeyboardShortcuts () {
        return {
            "Mod-k": ()=>this.editor.commands.toggleLink({
                    href: ""
                })
        };
    }
});
function Sl(icon, ownerDocument) {
    const n = ownerDocument.createElement("span");
    n.className = p(dl()).className ?? "";
    n.dataset.richLinkIcon = icon.name;
    n.setAttribute("aria-hidden", "true");
    const i = ownerDocument.createElement("i");
    i.className = p(d9("base", icon.color, undefined)).className ?? "";
    i.style.fontSize = Fn.fontSize;
    i.style.setProperty("--icon-size", Fn["--icon-size"]);
    i.style.setProperty("--cursor-icon-content", `"${b3(icon.name)}"`);
    i.dataset.iconName = icon.name;
    i.setAttribute("aria-hidden", "true");
    n.appendChild(i);
    return n;
}
function Cl(e, contentDOM, ownerDocument) {
    const i = p(Un.anchor).className?.split(/\s+/).filter(Boolean) ?? [];
    let r;
    let s;
    return (o)=>{
        if (!o) {
            r?.remove();
            r = undefined;
            s?.remove();
            s = undefined;
            e.classList.remove(...i);
            delete e.dataset.richLinkAnchor;
            e.removeAttribute("tabindex");
            delete contentDOM.dataset.richLinkLabel;
            return;
        }
        e.classList.add(...i);
        e.dataset.richLinkAnchor = "";
        e.tabIndex = 0;
        contentDOM.dataset.richLinkLabel = "";
        const l = Sl(o.icon, ownerDocument);
        if (r) {
            r.replaceWith(l);
        } else {
            e.insertBefore(l, contentDOM);
        }
        r = l;
        if (!o.statusLabel) {
            s?.remove();
            s = undefined;
            return;
        }
        if (!s) {
            s = ownerDocument.createElement("span");
            const a = p(Un.status);
            s.className = a.className ?? "";
            Object.assign(s.style, a.style);
            s.dataset.richLinkStatus = "";
            s.setAttribute("contenteditable", "false");
            s.setAttribute("aria-live", "polite");
            e.appendChild(s);
        }
        s.setAttribute("aria-label", o.statusLabel);
        s.textContent = `, ${o.statusLabel}`;
    };
}
const Tl = vr.extend({
    renderHTML ({ HTMLAttributes }) {
        const t = Pe(typeof HTMLAttributes.href === "string" ? HTMLAttributes.href : undefined);
        const n = t !== undefined && this.options.richLinkPresentationProvider.resolve(t) !== undefined;
        return [
            "a",
            Kt(this.options, HTMLAttributes, n),
            0
        ];
    },
    addMarkView () {
        const options = this.options;
        return ({ HTMLAttributes, view })=>{
            const ownerDocument = view.dom.ownerDocument;
            const r = ownerDocument.createElement("a");
            const s = Pe(typeof HTMLAttributes.href === "string" ? HTMLAttributes.href : undefined);
            const o = s === undefined ? undefined : options.richLinkPresentationProvider.resolve(s);
            const contentDOM = s === undefined ? r : ownerDocument.createElement("span");
            const a = s ? Cl(r, contentDOM, ownerDocument) : undefined;
            const u = contentDOM !== r;
            const c = (h)=>{
                if (h.key !== "Enter" || h.repeat) {
                    return;
                }
                h.preventDefault();
                h.stopPropagation();
                const p = Pe(r.getAttribute("href") ?? "");
                if (p !== undefined) {
                    if (options.onLinkClick) {
                        options.onLinkClick(p);
                        return;
                    }
                    if (options.onCitationClick && r.classList.contains("ui-citation-link")) {
                        options.onCitationClick(p);
                    }
                }
            };
            for (const [h, p] of Object.entries(Kt(options, HTMLAttributes, o !== undefined))){
                if (p != null) {
                    r.setAttribute(h, String(p));
                }
            }
            if (u) {
                r.appendChild(contentDOM);
                a?.(o);
            }
            const d = s ? options.richLinkPresentationProvider.subscribe?.(s, ()=>{
                const h = options.richLinkPresentationProvider.resolve(s);
                a?.(h);
            }) ?? (()=>{}) : ()=>{};
            r.addEventListener("keydown", c);
            return {
                dom: r,
                contentDOM,
                ignoreMutation: (h)=>h.type === "attributes" && (h.target === r || h.target === contentDOM) || u && h.target !== contentDOM && !contentDOM.contains(h.target),
                destroy: ()=>{
                    d();
                    r.removeEventListener("keydown", c);
                }
            };
        };
    }
});
const Wn = p(bl());
const Rl = b8({
    rootClass: "ui-inline-code-link-text",
    stylexStyles: yl()
});
const rt = new RegExp("(?<!\\\\)\\[([^\\]]+)\\]\\(((?:[^()]|\\([^)]*\\))+)\\)", "g");
function Vn(doc, options) {
    const n = [];
    const { onlyFilePaths = true, shouldLinkify, onLinkClick } = options;
    doc.descendants((o, l)=>{
        if (o.isText && o.marks.some((a)=>a.type.name === "code")) {
            const a = o.text || "";
            rt.lastIndex = 0;
            let u = rt.exec(a);
            while(u !== null){
                const [c, d, h] = u;
                const openBracketStart = l + u.index;
                let f = true;
                if (shouldLinkify) {
                    f = shouldLinkify(h, d);
                } else if (onlyFilePaths) {
                    f = fn(h);
                }
                if (!f) {
                    u = rt.exec(a);
                    continue;
                }
                const g = {
                    end: openBracketStart + c.length,
                    openBracketStart,
                    openBracketEnd: openBracketStart + 1,
                    textStart: openBracketStart + 1,
                    textEnd: openBracketStart + 1 + d.length,
                    closeBracketStart: openBracketStart + 1 + d.length,
                    closeBracketEnd: openBracketStart + 1 + d.length + 2,
                    closeParenStart: openBracketStart + c.length - 1,
                    closeParenEnd: openBracketStart + c.length
                };
                n.push(b_1.inline(g.openBracketStart, g.openBracketEnd, {
                    class: Wn.className
                }));
                n.push(b_1.inline(g.textStart, g.textEnd, {
                    class: Rl.className,
                    "data-href": h,
                    title: h
                }));
                n.push(b_1.inline(g.closeBracketStart, g.closeParenEnd, {
                    class: Wn.className
                }));
                u = rt.exec(a);
            }
        }
        return true;
    });
    return D.create(doc, n);
}
const Ml = j_2.create({
    name: "inlineCodeLink",
    addOptions () {
        return {
            onlyFilePaths: true,
            shouldLinkify: undefined,
            onLinkClick: undefined
        };
    },
    addProseMirrorPlugins () {
        const options = this.options;
        return [
            new P_1({
                key: new a("inlineCodeLink"),
                state: {
                    init (t, { doc }) {
                        return Vn(doc, options);
                    },
                    apply (t, n) {
                        if (t.docChanged) {
                            return Vn(t.doc, options);
                        }
                        return n;
                    }
                },
                props: {
                    decorations (t) {
                        return this.getState(t);
                    },
                    handleClick (t, n, i) {
                        const i_target = i.target;
                        if (i_target.classList.contains("ui-inline-code-link-text")) {
                            const s = i_target.getAttribute("data-href");
                            if (s && options.onLinkClick) {
                                i.preventDefault();
                                i.stopPropagation();
                                options.onLinkClick(s);
                                return true;
                            }
                        }
                        return false;
                    }
                }
            })
        ];
    }
});
const El = new a("citationLinkDecorations");
function $l(ownerDocument) {
    const t = ownerDocument.createElement("span");
    const n = p(pl());
    t.className = n.className ?? "";
    Object.assign(t.style, n.style);
    return t;
}
function zl(e, ownerDocument, preferred) {
    const i = ownerDocument.createElement("span");
    const r = p(fl());
    i.className = r.className ?? "";
    Object.assign(i.style, r.style);
    const filenameOrExt = e.replace(/^file:\/\//, "");
    const o = /[/\\]$/.test(filenameOrExt);
    let l = o ? "folder" : "file";
    let a = "outline";
    let u;
    if (!o) {
        const h = r_2({
            filenameOrExt,
            preferred
        });
        if (h.variant !== "seti") {
            l = h.iconName;
            a = h.style;
            u = h.color;
        } else {
            u = g_1(filenameOrExt).semanticColor;
        }
    }
    const c = ownerDocument.createElement("i");
    const d = b8({
        rootClass: "ui-icon",
        stylexStyles: d9(12, undefined, undefined),
        className: "cursor-icon"
    });
    c.className = d.className;
    Object.assign(c.style, d.style);
    c.style.fontSize = `${12 / 14}em`;
    c.style.setProperty("--icon-size", "1em");
    c.style.setProperty("--cursor-icon-content", `"${b3(l, a)}"`);
    if (u !== undefined) {
        c.style.color = s_1(u);
    }
    c.dataset.iconName = l;
    c.setAttribute("aria-hidden", "true");
    i.appendChild(c);
    return i;
}
function jl(e, ownerDocument) {
    const n = $l(ownerDocument);
    if (e.includes("folder-icon")) {
        const r = ownerDocument.createElement("span");
        const s = b8({
            rootClass: "ui-citation-link-codicon",
            stylexStyles: ml(),
            className: or("folder")
        });
        r.className = s.className;
        Object.assign(r.style, s.style);
        n.appendChild(r);
    } else {
        const r = ownerDocument.createElement("span");
        const s = b8({
            rootClass: "ui-citation-link-show-file-icons",
            stylexStyles: gl(),
            className: "show-file-icons"
        });
        r.className = s.className;
        Object.assign(r.style, s.style);
        const o = ownerDocument.createElement("span");
        const l = b8({
            rootClass: "ui-citation-link-monaco-icon-label",
            stylexStyles: kl(),
            className: [
                "monaco-icon-label",
                ...e
            ].join(" ")
        });
        o.className = l.className;
        Object.assign(o.style, l.style);
        r.appendChild(o);
        n.appendChild(r);
    }
    return n;
}
function Al(e) {
    return e === "/" || e === "\\";
}
function Nl(ownerDocument) {
    return ownerDocument.createElement("wbr");
}
function Kn(doc, t) {
    const n = [];
    const i = new Set;
    const { iconProvider, fileIconVariant, richLinkPresentationProvider, checkIsCitation } = t;
    const a = fileIconVariant !== undefined && fileIconVariant !== "seti";
    doc.descendants((u, c)=>{
        if (!u.isText) {
            return;
        }
        const d = u.marks.find((k)=>k.type.name === "link");
        if (!d) {
            return;
        }
        const h = typeof d.attrs.href === "string" ? d.attrs.href : undefined;
        if (!h) {
            return;
        }
        const p = Pe(h);
        if (p !== undefined && richLinkPresentationProvider?.resolve(p) !== undefined || !checkIsCitation(h, u.text ?? h)) {
            return;
        }
        if ((a || iconProvider) && !i.has(c)) {
            i.add(c);
            if (fileIconVariant !== undefined && fileIconVariant !== "seti") {
                n.push(b_1.widget(c, (k)=>zl(h, k.dom.ownerDocument, fileIconVariant), {
                    side: -1,
                    key: `citation-icon-${c}`,
                    marks: u.marks
                }));
            } else if (iconProvider) {
                const k = iconProvider(h);
                if (k.length > 0) {
                    n.push(b_1.widget(c, (b)=>jl(k, b.dom.ownerDocument), {
                        side: -1,
                        key: `citation-icon-${c}`,
                        marks: u.marks
                    }));
                }
            }
        }
        const g = u.text ?? "";
        for(let k = 0; k < g.length - 1; k++){
            if (Al(g[k])) {
                n.push(b_1.widget(c + k + 1, (b)=>Nl(b.dom.ownerDocument), {
                    side: 1,
                    key: `citation-break-${c}-${k}`,
                    marks: u.marks
                }));
            }
        }
    });
    return D.create(doc, n);
}
function Il({ iconProvider, fileIconVariant, richLinkPresentationProvider, isCitation, onCitationClick, onLinkClick, onLinkContextMenu }) {
    const checkIsCitation = isCitation ?? ((d)=>fn(d));
    const getLinkElement = (d)=>{
        if (!d.closest("[data-rte-prose-boundary]")) {
            return d.closest("a[href]") ?? undefined;
        }
    };
    const handleDOMEvents = rl({
        onLinkContextMenu,
        getHref: (d)=>d.closest("a[href]")?.getAttribute("href") ?? undefined,
        getLinkElement
    });
    return j_2.create({
        name: "citationLinkDecorations",
        addProseMirrorPlugins () {
            return [
                new P_1({
                    key: El,
                    state: {
                        init (d, { doc }) {
                            return Kn(doc, {
                                iconProvider,
                                fileIconVariant,
                                richLinkPresentationProvider,
                                checkIsCitation
                            });
                        },
                        apply (d, h) {
                            if (d.docChanged) {
                                return Kn(d.doc, {
                                    iconProvider,
                                    fileIconVariant,
                                    richLinkPresentationProvider,
                                    checkIsCitation
                                });
                            }
                            return h;
                        }
                    },
                    props: {
                        decorations (d) {
                            return this.getState(d);
                        },
                        handleClick (d, h, p) {
                            const p_target = p.target;
                            if (!p_target || !("nodeType" in p_target) || p_target.nodeType !== 1) {
                                return false;
                            }
                            const g = getLinkElement(p_target);
                            if (!g) {
                                return false;
                            }
                            const k = Pe(g.getAttribute("href") ?? "");
                            if (k === undefined) {
                                p.preventDefault();
                                p.stopPropagation();
                                return true;
                            }
                            if (onLinkClick) {
                                p.preventDefault();
                                p.stopPropagation();
                                onLinkClick(k);
                                return true;
                            }
                            if (onCitationClick && g.classList.contains("ui-citation-link")) {
                                p.preventDefault();
                                p.stopPropagation();
                                onCitationClick(k);
                                return true;
                            }
                            return false;
                        },
                        handleDOMEvents
                    }
                })
            ];
        }
    });
}
function Sr(e = {}) {
    Sr.d = 2819444002;
    const { detectFilePaths = true, detectLinksInCode = true, isCitation, onCitationClick, onLinkClick, onLinkContextMenu, iconProvider, fileIconVariant, richLinkPresentationProvider, openOnClick = false, protocols = [
        "http",
        "https",
        "mailto",
        "file"
    ] } = e;
    const h = {
        detectFilePaths,
        isCitation,
        openOnClick,
        protocols
    };
    const extensions = [
        richLinkPresentationProvider ? Tl.configure({
            ...h,
            onCitationClick,
            onLinkClick,
            richLinkPresentationProvider
        }) : vr.configure(h)
    ];
    if (detectLinksInCode) {
        extensions.push(Ml.configure({
            onlyFilePaths: detectFilePaths,
            shouldLinkify: isCitation,
            onLinkClick: onLinkClick ?? onCitationClick
        }));
    }
    if (iconProvider || fileIconVariant !== undefined && fileIconVariant !== "seti" || richLinkPresentationProvider || onCitationClick || onLinkClick || onLinkContextMenu) {
        extensions.push(Il({
            iconProvider,
            fileIconVariant,
            richLinkPresentationProvider,
            isCitation,
            onCitationClick,
            onLinkClick,
            onLinkContextMenu
        }));
    }
    return {
        name: "citationLink",
        extensions
    };
}
function Ll(language) {
    const t = (language ?? "").trim();
    const n = t.search(/\s/);
    if (n < 0) {
        return {
            kind: t,
            meta: ""
        };
    }
    return {
        kind: t.slice(0, n),
        meta: t.slice(n).trim()
    };
}
const Cr = r_1.memo(({ node, editor, extension })=>{
    Cr.d = 2786816236;
    const { renderers, showSourceToggle } = extension.options;
    const o = String(node.attrs.kind ?? "");
    const meta = String(node.attrs.meta ?? "");
    const node_textContent = node.textContent;
    const editor_isEditable = editor.isEditable;
    const [c, setC] = r_1.useState(false);
    const H = renderers[o];
    return <Pn1 data-rte-prose-boundary="" data-data-fence={o} className="ui-1n2onr6 ui-12oomfp ui-olhukv"><div contentEditable={false} className="ui-euugli">{H ? <H kind={o} meta={meta} source={node_textContent} editable={editor_isEditable}/> : <span className="ui-4b2ntj ui-1j6dyjg ui-1d3mw78">No renderer for `{o}`</span>}</div>{showSourceToggle ? <div contentEditable={false} className="ui-78zum5 ui-13a6bvl ui-1gslohp"><button type="button" aria-expanded={c} onClick={()=>setC((p)=>!p)} className="ui-jyslct ui-c342km ui-jbqb8w ui-4b2ntj ui-jb2p0i ui-1j6dyjg ui-1d3mw78 ui-exx8yu ui-1xpa7k ui-18d9i69 ui-1uhho1l ui-1ypdohk ui-7gh5u8">{c ? "Hide data" : editor_isEditable ? "Edit data" : "Show data"}</button></div> : null}<Hn1 {...{
        0: {
            className: "ui-1s85apg"
        },
        1: {
            className: "ui-1lliihq ui-1xmf6yo ui-hayvgc ui-tfojpt ui-1evy7pa ui-126k92a ui-1001c07 ui-15ne75x ui-19uwr1l ui-pd0smn ui-1lnot31 ui-15bsgld"
        }
    }[!!c << 0]}/></Pn1>;
});
function Xn(e, renderers) {
    const codeBlock = e.schema.nodes.codeBlock;
    if (!codeBlock) {
        return [];
    }
    const i = [];
    e.doc.descendants((r, pos)=>{
        if (r.type !== codeBlock) {
            return;
        }
        const { kind, meta } = Ll(r.attrs.language);
        if (kind in renderers) {
            i.push({
                pos,
                node: r,
                kind,
                meta
            });
        }
    });
    return i;
}
function Gn(e, t, n) {
    const dataFence = n.schema.nodes.dataFence;
    for(let r = t.length - 1; r >= 0; r--){
        const { pos, node, kind, meta } = t[r];
        const u = dataFence.create({
            kind,
            meta
        }, node.content.size > 0 ? node.content : undefined);
        e.replaceWith(pos, pos + node.nodeSize, u);
    }
    return e;
}
const Pl = c_2.create({
    name: "dataFence",
    group: "block",
    content: "text*",
    inline: false,
    code: true,
    marks: "",
    atom: false,
    defining: true,
    addOptions () {
        return {
            HTMLAttributes: {},
            renderers: {},
            showSourceToggle: true
        };
    },
    addAttributes () {
        return {
            kind: {
                default: "",
                parseHTML: (e)=>e.getAttribute("data-fence-kind") ?? "",
                renderHTML: (e)=>({
                        "data-fence-kind": e.kind
                    })
            },
            meta: {
                default: "",
                parseHTML: (e)=>e.getAttribute("data-fence-meta") ?? "",
                renderHTML: (e)=>({
                        "data-fence-meta": e.meta
                    })
            }
        };
    },
    renderMarkdown (e) {
        const t = e.content?.map((r)=>{
            if (r.type === "text") {
                return r.text;
            }
            return "";
        }).join("") ?? "";
        const n = e.attrs ?? {};
        return `\`\`\`${[
            n.kind ?? "",
            n.meta ?? ""
        ].filter(Boolean).join(" ")}
${t}
\`\`\`

`;
    },
    parseHTML () {
        return [
            {
                tag: "pre[data-fence-kind]",
                preserveWhitespace: "full"
            }
        ];
    },
    renderHTML ({ HTMLAttributes }) {
        return [
            "pre",
            m(this.options.HTMLAttributes, HTMLAttributes, {
                "data-type": "data-fence"
            }),
            [
                "code",
                {},
                0
            ]
        ];
    },
    addNodeView () {
        return xr(Cr, {
            ignoreMutation: ()=>true
        });
    },
    onCreate () {
        const { state } = this.editor;
        const t = Xn(state, this.options.renderers);
        if (t.length !== 0) {
            this.editor.view.dispatch(Gn(state.tr, t, state));
        }
    },
    addProseMirrorPlugins () {
        const renderers = this.options.renderers;
        return [
            new P_1({
                key: new a("dataFenceTransform"),
                appendTransaction (t, n, i) {
                    if (!t.some((s)=>s.docChanged)) {
                        return null;
                    }
                    const r = Xn(i, renderers);
                    if (r.length === 0) {
                        return null;
                    }
                    return Gn(i.tr, r, i);
                }
            })
        ];
    }
});
const Et = {
    ink: "var(--rte-page-ink, var(--cursor-text-primary))",
    inkTertiary: "var(--rte-page-ink-tertiary, var(--cursor-text-tertiary))",
    hairlineSubtle: "var(--rte-page-hairline-subtle, var(--cursor-stroke-tertiary))",
    fill: "var(--rte-page-fill, var(--cursor-bg-secondary))"
};
const ql = {
    k1xSpc: "ui-1rg5ohu",
    kaIpWk: "ui-1e6avla",
    kmuXW: "ui-2lah0s",
    $$css: true
};
const { ink, inkTertiary, hairlineSubtle, fill } = Et;
const Zn = [
    ink,
    inkTertiary,
    `color-mix(in srgb, ${inkTertiary} 45%, transparent)`,
    fill
];
const We = (e, t)=>`var(--rte-page-data-${e}, ${t})`;
const _l = 8;
const Ol = We("other", fill);
const vt = (e)=>{
    if (e < _l) {
        return We(String(e), Zn[Math.min(e, Zn.length - 1)]);
    }
    return Ol;
};
const St = (e)=>We("0", e);
const Dl = (e)=>We("rest", e);
const stroke = We("other", inkTertiary);
const fill_1 = We("area", "transparent");
const Qn = {
    success: `var(--rte-page-tone-success, ${bf["--cursor-text-success-primary"]})`,
    warning: `var(--rte-page-tone-warning, ${bf["--cursor-text-warning-primary"]})`,
    danger: `var(--rte-page-tone-danger, ${bf["--cursor-text-danger-primary"]})`
};
const y = {
    body1: {
        kGuDYH: "ui-if65rj",
        kLWn49: "ui-1fc57z9",
        kb6lSQ: "ui-12oo3zp",
        $$css: true
    },
    body2: {
        kGuDYH: "ui-4z9k3i",
        kLWn49: "ui-d4r4e8",
        kb6lSQ: "ui-1yppyca",
        $$css: true
    },
    label: {
        kGuDYH: "ui-fifm61",
        kLWn49: "ui-1d3mw78",
        kb6lSQ: "ui-12oo3zp",
        $$css: true
    },
    regular: {
        k63SB2: "ui-o1l8bm",
        $$css: true
    },
    medium: {
        k63SB2: "ui-k50ysn",
        $$css: true
    },
    ink: {
        kMwMTN: "ui-gv6h3j",
        $$css: true
    },
    inkSecondary: {
        kMwMTN: "ui-1g4d90q",
        $$css: true
    },
    inkTertiary: {
        kMwMTN: "ui-1rrbmv7",
        $$css: true
    },
    tabular: {
        kcqcaj: "ui-ss6m8b",
        $$css: true
    },
    right: {
        k9WMMc: "ui-1hr2gdg",
        $$css: true
    },
    nowrap: {
        khDVqt: "ui-uxw1ft",
        $$css: true
    },
    truncate: {
        kVQacm: "ui-b3r6kr",
        kg5iWk: "ui-lyipyv",
        khDVqt: "ui-uxw1ft",
        k7Eaqz: "ui-euugli",
        $$css: true
    },
    tone: (e)=>[
            {
                kMwMTN: e != null ? "ui-14rh7hd" : e,
                $$css: true
            },
            {
                "--x-color": e ?? undefined
            }
        ]
};
const Ne = {
    reset: {
        kogj98: "ui-1ghz6dp",
        kmVPX3: "ui-1717udv",
        $$css: true
    },
    failure: {
        kGuDYH: "ui-1j6dyjg",
        kLWn49: "ui-1d3mw78",
        kMwMTN: "ui-1rrbmv7",
        $$css: true
    },
    column: {
        k1xSpc: "ui-78zum5",
        kXwgrk: "ui-dt5ytf",
        $$css: true
    },
    dot: (e, t)=>[
            ql,
            {
                kzqmXN: e != null ? "ui-5lhr3w" : e,
                kZKoxP: e != null ? "ui-16ye13r" : e,
                kWkggS: t != null ? "ui-l8spv7" : t,
                $$css: true
            },
            {
                "--x-width": ((n)=>{
                    if (typeof n === "number") {
                        return `${n}px`;
                    }
                    return n ?? undefined;
                })(e),
                "--x-height": ((n)=>{
                    if (typeof n === "number") {
                        return `${n}px`;
                    }
                    return n ?? undefined;
                })(e),
                "--x-backgroundColor": t ?? undefined
            }
        ]
};
function RrComponent({ message }) {
    RrComponent.d = 785255364;
    return <div className="ui-1j6dyjg ui-1d3mw78 ui-1rrbmv7">Could not render: {message}</div>;
}
function Ul(source, t) {
    let n;
    try {
        n = JSON.parse(source);
    } catch (error) {
        return {
            ok: false,
            message: error instanceof Error ? error.message : "invalid JSON"
        };
    }
    if (t(n)) {
        return {
            ok: true,
            value: n
        };
    }
    return {
        ok: false,
        message: "the data does not fit this block"
    };
}
const q = (e)=>typeof e === "object" && e !== null && !Array.isArray(e);
const z = (e)=>typeof e === "string";
const Y = (e)=>typeof e === "number" && Number.isFinite(e);
const Xt = (e)=>typeof e === "boolean";
const U = (e, t)=>e === undefined || t(e);
const oe = (e, t)=>Array.isArray(e) && e.every(t);
const Fl = new Set([
    "http:",
    "https:",
    "mailto:"
]);
function Mr(href) {
    if (z(href)) {
        try {
            if (Fl.has(new URL(href).protocol)) {
                return href;
            }
            return undefined;
        } catch  {
            return;
        }
    }
}
function Er(src) {
    try {
        const t = new URL(src);
        return t.protocol === "https:" || t.protocol === "http:" || t.protocol === "data:";
    } catch  {
        return false;
    }
}
function Te(e, t) {
    return ({ source })=>{
        const r = Ul(source, e);
        if (r.ok) {
            return j_1.jsx(t, {
                data: r.value
            });
        }
        return <RrComponent message={r.message}/>;
    };
}
const Wl = {
    k1xSpc: "ui-1lliihq",
    kZKoxP: "ui-5yr21d",
    kaIpWk: "ui-1e6avla",
    kzqmXN: "ui-5lhr3w",
    $$css: true
};
const Vl = {
    k1xSpc: "ui-78zum5",
    kZKoxP: "ui-170jfvy",
    k7Eaqz: "ui-9041oi",
    kOIVth: "ui-12mrbbr",
    kVQacm: "ui-b3r6kr",
    kaIpWk: "ui-1cum3z5",
    kzqmXN: "ui-5lhr3w",
    $$css: true
};
const Kl = {
    k1xSpc: "ui-1lliihq",
    kZKoxP: "ui-5yr21d",
    kCS8Yb: "ui-1r8uery",
    $$css: true
};
const Xl = {
    k1xSpc: "ui-rvj5dj",
    kZKoxP: "ui-1h5wmu3",
    kGNEyG: "ui-pqajaz",
    kOIVth: "ui-167g77z",
    kumcoG: "ui-qketvx",
    $$css: true
};
const Gl = {
    kzqmXN: "ui-h8yej3",
    ks0D6T: "ui-6kucy2",
    kaIpWk: "ui-18zih8k",
    $$css: true
};
const Zl = {
    k1xSpc: "ui-1lliihq",
    kzqmXN: "ui-h8yej3",
    $$css: true
};
const Ql = `color-mix(in srgb, ${inkTertiary} 40%, transparent)`;
function $r(emphasis, t, n) {
    if (emphasis === undefined) {
        return St(n);
    }
    if (t === emphasis) {
        return St(ink);
    }
    return Dl(n);
}
const be = {
    shrink0: {
        kmuXW: "ui-2lah0s",
        $$css: true
    },
    fillBar: (e, t)=>[
            Wl,
            {
                kWkggS: t != null ? "ui-l8spv7" : t,
                $$css: true
            },
            {
                "--x-width": ((n)=>{
                    if (typeof n === "number") {
                        return `${n}px`;
                    }
                    return n ?? undefined;
                })(`${e}%`),
                "--x-backgroundColor": t ?? undefined
            }
        ],
    legendItem: {
        k1xSpc: "ui-78zum5",
        kGNEyG: "ui-6s0dn4",
        kOIVth: "ui-17d4w8g",
        $$css: true
    },
    stackedBar: (e)=>[
            Vl,
            {
                "--x-width": ((t)=>{
                    if (typeof t === "number") {
                        return `${t}px`;
                    }
                    return t ?? undefined;
                })(`${e}%`)
            }
        ],
    stackedPart: (e, t)=>[
            Kl,
            {
                kzQI83: e != null ? "ui-w36f2b" : e,
                kWkggS: t != null ? "ui-l8spv7" : t,
                $$css: true
            },
            {
                "--x-flexGrow": e ?? undefined,
                "--x-backgroundColor": t ?? undefined
            }
        ],
    columnsGrid: (e)=>[
            Xl,
            {
                "--x-gridTemplateColumns": `repeat(${e}, minmax(0, 1fr))` != null ? `repeat(${e}, minmax(0, 1fr))` : undefined
            }
        ],
    columnBar: (e, t)=>[
            Gl,
            {
                kZKoxP: e != null ? "ui-16ye13r" : e,
                kWkggS: t != null ? "ui-l8spv7" : t,
                $$css: true
            },
            {
                "--x-height": ((n)=>{
                    if (typeof n === "number") {
                        return `${n}px`;
                    }
                    return n ?? undefined;
                })(e),
                "--x-backgroundColor": t ?? undefined
            }
        ],
    svgBlock: (e)=>[
            Zl,
            {
                kOBAk4: e != null ? "ui-10y9f9r" : e,
                $$css: true
            },
            {
                "--x-aspectRatio": e ?? undefined
            }
        ],
    legendLine: {
        keoZOQ: "ui-1k70j0n",
        $$css: true
    },
    pieItem: {
        k1xSpc: "ui-78zum5",
        kGNEyG: "ui-6s0dn4",
        kOIVth: "ui-167g77z",
        $$css: true
    }
};
const Yl = (e)=>q(e) && z(e.label) && Y(e.value) && z(e.display) && U(e.meta, z);
const Jl = (e)=>q(e) && oe(e.bars, Yl) && U(e.emphasis, Y);
function ZrComponent({ data }) {
    ZrComponent.d = 912807218;
    const t = Math.max(...data.bars.map((n)=>n.value), 1);
    return <div className="ui-rvj5dj ui-1fg1xmc ui-6s0dn4 ui-tqikln ui-1b8z93w" data-document-block="bars">{data.bars.map((n, i)=>{
        const r = i === data.emphasis;
        return <div key={`${n.label}-${i}`} className="ui-jp7ctv"><span {...p(y.body2, y.regular, y.truncate, r ? y.ink : y.inkSecondary)}>{n.label}</span><span className="ui-1lliihq ui-ols6we ui-b3r6kr ui-1e6avla ui-1x50nob"><span {...p(be.fillBar(Math.max(n.value, 0) / t * 100, $r(data.emphasis, i, inkTertiary)))}/></span><span {...p(y.body2, y.regular, y.nowrap, y.right, y.tabular, y.ink)}>{n.display}{n.meta && <span {...p(y.label, y.inkTertiary)}> · {n.meta}</span>}</span></div>;
    })}</div>;
}
const ea = (e)=>q(e) && z(e.label) && oe(e.values, Y);
const ta = (e)=>q(e) && oe(e.series, z) && oe(e.bars, ea);
function JrComponent({ data }) {
    JrComponent.d = 961704966;
    const t = data.bars.map((i)=>i.values.reduce((acc, value)=>acc + value, 0));
    const n = Math.max(...t, 1);
    return <div data-document-block="stacked"><div className="ui-78zum5 ui-1a02dak ui-40hh3e ui-1r0jzty ui-od5an3">{data.series.map((i, r)=><span key={`${i}-${r}`} {...p(be.legendItem, y.label, y.regular, y.inkTertiary)}><span {...p(Ne.dot(6, vt(r)))}/>{i}</span>)}</div><div className="ui-rvj5dj ui-18k9tt1 ui-6s0dn4 ui-tqikln ui-1r0jzty">{data.bars.map((i, r)=><div key={`${i.label}-${r}`} className="ui-jp7ctv"><span {...p(y.body2, y.regular, y.truncate, y.right, y.inkSecondary)}>{i.label}</span><span className="ui-78zum5 ui-euugli ui-6s0dn4 ui-167g77z"><span {...p(be.stackedBar(t[r] / n * 88))}>{i.values.map((s, o)=>{
            if (s > 0) {
                return <span key={o} {...p(be.stackedPart(s, vt(o)))}/>;
            }
            return null;
        })}</span><span {...p(y.body2, y.regular, y.tabular, y.ink, be.shrink0)}>{t[r].toLocaleString("en-US")}</span></span></div>)}</div></div>;
}
const na = (e)=>q(e) && z(e.label) && Y(e.value) && z(e.display);
const ia = (e)=>q(e) && oe(e.points, na) && U(e.emphasis, Y);
function ArComponent({ data }) {
    ArComponent.d = 2410669111;
    const t = Math.max(...data.points.map((n)=>n.value), 1);
    return <div {...p(be.columnsGrid(Math.max(data.points.length, 1)))} data-document-block="columns">{data.points.map((n, i)=>{
        const r = i === data.emphasis;
        return <div key={`${n.label}-${i}`} className="ui-78zum5 ui-5yr21d ui-dt5ytf ui-6s0dn4 ui-13a6bvl ui-1jnr06f"><span {...p(y.label, y.tabular, r ? y.medium : y.regular, r ? y.ink : y.inkTertiary)}>{n.display}</span><span {...p(be.columnBar(Math.max(4, Math.max(n.value, 0) / t * 88), $r(data.emphasis, i, Ql)))}/><span {...p(y.label, r ? y.medium : y.regular, r ? y.ink : y.inkTertiary)}>{n.label}</span></div>;
    })}</div>;
}
const ra = (e)=>q(e) && z(e.label) && Y(e.value);
const sa = (e)=>q(e) && oe(e.points, ra) && U(e.ceiling, Y) && U(e.unit, z) && (e.secondary === undefined || q(e.secondary) && oe(e.secondary.values, Y) && U(e.secondary.label, z)) && (e.labels === undefined || oe(e.labels, z));
const x2 = 560;
const ot = 180;
const x1 = 52;
const oa = 22;
const Yn = 10;
function NrComponent({ data }) {
    NrComponent.d = 3425731434;
    const t = data.points.map((h)=>h.value);
    const n = data.ceiling && data.ceiling > 0 ? data.ceiling : Math.max(...t, ...data.secondary?.values ?? [], 1);
    const i = x2 - x1;
    const r = ot - oa - Yn;
    const s = data.points.length > 1 ? i / (data.points.length - 1) : 0;
    const o = (h)=>x1 + h * s;
    const l = (h)=>Yn + r - Math.min(Math.max(h, 0), n) / n * r;
    const a = (h)=>h.map((p, f)=>`${f === 0 ? "M" : "L"}${o(f).toFixed(1)} ${l(p).toFixed(1)}`).join(" ");
    const u = [
        0,
        n / 2,
        n
    ];
    const c = data.unit ? ` ${data.unit}` : "";
    const d = data.labels ?? (data.secondary?.label ? [
        "",
        data.secondary.label
    ] : undefined);
    return <div data-document-block="line"><svg viewBox={`0 0 ${x2} ${ot}`} {...p(be.svgBlock(`${x2} / ${ot}`))} role="img">{u.map((h)=><g key={h}><line x1={x1} x2={x2} y1={l(h)} y2={l(h)} stroke={hairlineSubtle} shapeRendering="crispEdges"/><text x={x1 - 8} y={l(h)} textAnchor="end" dominantBaseline="middle" fontSize={11} fill={inkTertiary}>{Math.round(h)}{c}</text></g>)}{t.length > 1 && <path d={`${a(t)} L${o(t.length - 1).toFixed(1)} ${l(0).toFixed(1)} L${o(0).toFixed(1)} ${l(0).toFixed(1)} Z`} fill={fill_1} stroke="none"/>}{data.secondary && <path d={a(data.secondary.values)} fill="none" stroke={stroke} strokeWidth={1.25} strokeDasharray="3 3" strokeLinejoin="round"/>}<path d={a(t)} fill="none" stroke={St(ink)} strokeWidth={1.5} strokeLinejoin="round" strokeLinecap="round"/>{t.map((h, p)=><circle key={p} cx={o(p)} cy={l(h)} r={2.25} fill={St(ink)}/>)}{data.points.map((h, p)=><text key={`${h.label}-${p}`} x={o(p)} y={ot - 4} textAnchor={p === 0 ? "start" : p === data.points.length - 1 ? "end" : "middle"} fontSize={11} fill={inkTertiary}>{h.label}</text>)}</svg>{d && <p {...p(Ne.reset, be.legendLine, y.label, y.regular, y.inkTertiary)}>{d[0] && `\u2014 ${d[0]}`}{d[1] && `   \u2504 ${d[1]}`}</p>}</div>;
}
const la = (e)=>q(e) && z(e.label) && Y(e.value);
const aa = (e)=>q(e) && oe(e.parts, la);
function IrComponent({ data }) {
    IrComponent.d = 1413575837;
    const t = data.parts.filter((o)=>o.value > 0);
    const n = t.reduce((acc, item)=>acc + item.value, 0) || 1;
    const r_3 = 44;
    const r = 2 * Math.PI * r_3;
    const s = t.reduce((acc, part)=>{
        const a = acc.length === 0 ? 0 : acc[acc.length - 1].offset + acc[acc.length - 1].part.value / n * r;
        const u = part.value / n * r;
        const dash = Math.max(0, u - (t.length > 1 ? 1.5 : 0));
        acc.push({
            part,
            dash,
            offset: a
        });
        return acc;
    }, []);
    return <div className="ui-78zum5 ui-6s0dn4 ui-1665zp3" data-document-block="pie"><svg viewBox="0 0 120 120" className="ui-ygnafs ui-1wkxgih ui-2lah0s ui-9tu13d" role="img" aria-label={t.map((o)=>`${o.value} ${o.label}`).join(", ")}><circle cx={60} cy={60} r={r_3} fill="none" stroke={fill} strokeWidth={24}/>{s.map(({ part, dash, offset }, u)=><circle key={`${part.label}-${u}`} cx={60} cy={60} r={r_3} fill="none" stroke={vt(u)} strokeWidth={24} strokeDasharray={`${dash} ${r - dash}`} strokeDashoffset={-offset}/>)}</svg><div className="ui-78zum5 ui-euugli ui-dt5ytf ui-17d4w8g">{t.map((o, l)=><span key={`${o.label}-${l}`} {...p(be.pieItem, y.body2, y.regular, y.inkSecondary)}><span {...p(Ne.dot(8, vt(l)))}/><span {...p(y.tabular, l === 0 && y.medium, l === 0 && y.ink)}>{o.value.toLocaleString("en-US")}</span><span>{o.label}</span><span {...p(y.tabular, y.inkTertiary)}>{Math.round(o.value / n * 100)}%</span></span>)}</div></div>;
}
const ua = {
    kVAEAm: "ui-1n2onr6",
    $$css: true
};
const ca = {
    kVAEAm: "ui-10l6tqk",
    kbCHJM: "ui-u96u03",
    kCIrl2: "ui-3m8u43",
    k1xSpc: "ui-78zum5",
    kGNEyG: "ui-6s0dn4",
    $$css: true
};
const da = {
    kmuXW: "ui-2lah0s",
    k9WMMc: "ui-1hr2gdg",
    khDVqt: "ui-uxw1ft",
    $$css: true
};
const ha = {
    kZKoxP: "ui-jm9jq1",
    kUk6DE: "ui-98rzlu",
    $$css: true
};
const pa = {
    kVAEAm: "ui-10l6tqk",
    k87sOh: "ui-13vifvy",
    krVfgx: "ui-1ey2m1c",
    $$css: true
};
const fa = {
    kVAEAm: "ui-10l6tqk",
    k1xSpc: "ui-78zum5",
    kOIVth: "ui-167g77z",
    kVQacm: "ui-b3r6kr",
    kaIpWk: "ui-1kogg8i",
    kmVPX3: "ui-fawy5m",
    $$css: true
};
const ma = {
    kzqmXN: "ui-fo62xy",
    kmuXW: "ui-2lah0s",
    kSGwAc: "ui-kh2ocl",
    kaIpWk: "ui-1cum3z5",
    $$css: true
};
const ga = {
    kVAEAm: "ui-10l6tqk",
    kCIrl2: "ui-3m8u43",
    k1xSpc: "ui-78zum5",
    kGNEyG: "ui-6s0dn4",
    k3aq6I: "ui-1cb1t30",
    $$css: true
};
const ka = {
    kmuXW: "ui-2lah0s",
    kE3dHu: "ui-163pfp",
    $$css: true
};
const V = {
    dayCanvas: (e)=>[
            ua,
            {
                kZKoxP: e != null ? "ui-16ye13r" : e,
                $$css: true
            },
            {
                "--x-height": ((t)=>{
                    if (typeof t === "number") {
                        return `${t}px`;
                    }
                    return t ?? undefined;
                })(e)
            }
        ],
    hourLine: (e, t)=>[
            ca,
            {
                k87sOh: e != null ? "ui-jbys53" : e,
                kZKoxP: t != null ? "ui-16ye13r" : t,
                $$css: true
            },
            {
                "--x-top": ((n)=>{
                    if (typeof n === "number") {
                        return `${n}px`;
                    }
                    return n ?? undefined;
                })(e),
                "--x-height": ((n)=>{
                    if (typeof n === "number") {
                        return `${n}px`;
                    }
                    return n ?? undefined;
                })(t)
            }
        ],
    hourLabel: (e, t)=>[
            da,
            {
                kzqmXN: e != null ? "ui-5lhr3w" : e,
                km5ZXQ: t != null ? "ui-vcn832" : t,
                $$css: true
            },
            {
                "--x-width": ((n)=>{
                    if (typeof n === "number") {
                        return `${n}px`;
                    }
                    return n ?? undefined;
                })(e),
                "--x-marginRight": ((n)=>{
                    if (typeof n === "number") {
                        return `${n}px`;
                    }
                    return n ?? undefined;
                })(t)
            }
        ],
    rule: (e)=>[
            ha,
            {
                kWkggS: e != null ? "ui-l8spv7" : e,
                $$css: true
            },
            {
                "--x-backgroundColor": e ?? undefined
            }
        ],
    eventsLayer: (e, t)=>[
            pa,
            {
                kbCHJM: e != null ? "ui-gq9j65" : e,
                kCIrl2: t != null ? "ui-7ok3n0" : t,
                $$css: true
            },
            {
                "--x-left": ((n)=>{
                    if (typeof n === "number") {
                        return `${n}px`;
                    }
                    return n ?? undefined;
                })(e),
                "--x-right": ((n)=>{
                    if (typeof n === "number") {
                        return `${n}px`;
                    }
                    return n ?? undefined;
                })(t)
            }
        ],
    event: (e, t, n, i)=>[
            fa,
            {
                k87sOh: e != null ? "ui-jbys53" : e,
                kZKoxP: t != null ? "ui-16ye13r" : t,
                kbCHJM: n != null ? "ui-gq9j65" : n,
                kzqmXN: i != null ? "ui-5lhr3w" : i,
                $$css: true
            },
            {
                "--x-top": ((r)=>{
                    if (typeof r === "number") {
                        return `${r}px`;
                    }
                    return r ?? undefined;
                })(e),
                "--x-height": ((r)=>{
                    if (typeof r === "number") {
                        return `${r}px`;
                    }
                    return r ?? undefined;
                })(t),
                "--x-left": ((r)=>{
                    if (typeof r === "number") {
                        return `${r}px`;
                    }
                    return r ?? undefined;
                })(n),
                "--x-width": ((r)=>{
                    if (typeof r === "number") {
                        return `${r}px`;
                    }
                    return r ?? undefined;
                })(i)
            }
        ],
    eventPlain: {
        kWkggS: "ui-96iioy",
        kMwMTN: "ui-1g4d90q",
        $$css: true
    },
    eventFlag: {
        kWkggS: "ui-1fpwj60",
        kMwMTN: "ui-kbann2",
        $$css: true
    },
    eventFree: {
        kMzoRj: "ui-mkeg23",
        ksu8eU: "ui-bsl7fq",
        kVAM5u: "ui-3a4ul3",
        kMwMTN: "ui-1rrbmv7",
        $$css: true
    },
    eventRule: (e)=>[
            ma,
            {
                kWkggS: e != null ? "ui-l8spv7" : e,
                $$css: true
            },
            {
                "--x-backgroundColor": e ?? undefined
            }
        ],
    eventTitle: {
        kLKAdn: "ui-4p5aij",
        $$css: true
    },
    eventTitleFree: {
        kE3dHu: "ui-11iknt3",
        $$css: true
    },
    mark: (e, t)=>[
            ga,
            {
                k87sOh: e != null ? "ui-jbys53" : e,
                kbCHJM: t != null ? "ui-gq9j65" : t,
                $$css: true
            },
            {
                "--x-top": ((n)=>{
                    if (typeof n === "number") {
                        return `${n}px`;
                    }
                    return n ?? undefined;
                })(e),
                "--x-left": ((n)=>{
                    if (typeof n === "number") {
                        return `${n}px`;
                    }
                    return n ?? undefined;
                })(t)
            }
        ],
    markLabel: (e)=>[
            ka,
            {
                kzqmXN: e != null ? "ui-5lhr3w" : e,
                $$css: true
            },
            {
                "--x-width": ((t)=>{
                    if (typeof t === "number") {
                        return `${t}px`;
                    }
                    return t ?? undefined;
                })(e)
            }
        ]
};
const ba = (e)=>q(e) && Y(e.start) && Y(e.end) && z(e.title) && U(e.flag, Xt) && U(e.free, Xt);
const ya = (e)=>q(e) && Y(e.start) && Y(e.end) && e.end > e.start && oe(e.events, ba) && (e.mark === undefined || q(e.mark) && Y(e.mark.at) && z(e.mark.label));
const Ot = 44;
const Gt = 53;
const Dt = Gt + 8;
const wa = 12;
const at = 9;
const Jn = 132;
function xa(events) {
    const t = events.map((l, a)=>a).sort((l, a)=>events[l].start - events[a].start);
    const n = events.map(()=>[
            0,
            1
        ]);
    let i = [];
    let r = -Infinity;
    const s = [];
    const o = ()=>{
        const l = Math.max(1, ...i.map((a)=>n[a][0] + 1));
        for (const a of i){
            n[a] = [
                n[a][0],
                l
            ];
        }
        i = [];
        s.length = 0;
    };
    for (const l of t){
        const a = events[l];
        if (a.start >= r) {
            o();
        }
        let u = s.findIndex((c)=>c <= a.start);
        if (u < 0) {
            u = s.length;
        }
        s[u] = a.end;
        n[l] = [
            u,
            1
        ];
        i.push(l);
        r = Math.max(r, a.end);
    }
    o();
    return n;
}
function va(e) {
    return `${e % 12 || 12} ${e < 12 || e === 24 ? "AM" : "PM"}`;
}
function LrComponent({ data }) {
    LrComponent.d = 2734696488;
    const t = Math.floor(data.start);
    const n = Math.ceil(data.end);
    const i = (o)=>at + (o - t) * Ot;
    const r = xa(data.events);
    const s = [];
    for(let o = t; o <= n; o += 1){
        s.push(o);
    }
    return <div className="ui-1jp4ehj ui-4pepcl ui-1x50nob ui-c7ga6q" data-document-block="day"><div {...p(V.dayCanvas((n - t) * Ot + at * 2))} role="img" aria-label="Calendar day">{s.map((o)=><div key={o} {...p(V.hourLine(i(o) - at, at * 2))}><span {...p(V.hourLabel(Gt, Dt - Gt), y.body2, y.regular, y.tabular, y.inkTertiary)}>{va(o)}</span><span {...p(V.rule(hairlineSubtle))}/></div>)}<div {...p(V.eventsLayer(Dt + wa, data.mark ? Jn : 0))}>{data.events.map((o, l)=>{
        const [a, u] = r[l];
        const c = Math.max(24, (o.end - o.start) * Ot - 3);
        return <div key={`${o.title}-${l}`} {...p(V.event(i(o.start) + 2, c, `calc(${a / u * 100}% + ${a ? 2 : 0}px)`, `calc(${100 / u}% - ${u > 1 ? 2 : 0}px)`), o.free ? V.eventFree : o.flag ? V.eventFlag : V.eventPlain)}>{!o.free && <span aria-hidden {...p(V.eventRule(o.flag ? bf["--cursor-bg-accent"] : `color-mix(in srgb, ${ink} 20%, transparent)`))}/>}<span {...p(y.label, y.medium, y.truncate, V.eventTitle, o.free && V.eventTitleFree)}>{o.title}</span></div>;
    })}</div>{data.mark && <div {...p(V.mark(i(data.mark.at), Dt - 3))}><span {...p(Ne.dot(6, ink))}/><span {...p(V.rule(ink))}/><span {...p(V.markLabel(Jn), y.label, y.medium, y.truncate, y.ink)}>{data.mark.label}</span></div>}</div></div>;
}
const Zt = {
    duration: {
        kVAEAm: "ui-10l6tqk",
        kCIrl2: "ui-19up5dg",
        krVfgx: "ui-qo3gd",
        kaIpWk: "ui-1kogg8i",
        kWkggS: "ui-8qq8ib",
        kg3NbH: "ui-1xijbu4",
        kMwMTN: "ui-fungia",
        $$css: true
    },
    caption: {
        keoZOQ: "ui-1k70j0n",
        $$css: true
    },
    linkNumber: {
        kzqmXN: "ui-smyaan",
        kmuXW: "ui-2lah0s",
        $$css: true
    }
};
const Sa = (e)=>q(e) && z(e.src) && z(e.alt) && z(e.duration) && U(e.href, z) && U(e.caption, z);
function PrComponent() {
    PrComponent.d = 2207799456;
    return <svg width={16} height={16} viewBox="0 0 16 16" aria-hidden><path d="M5 3.5v9l7-4.5z" fill="currentColor"/></svg>;
}
function QrComponent({ data }) {
    QrComponent.d = 2607487370;
    const t = Mr(data.href);
    const n = <>{Er(data.src) && <img src={data.src} alt={data.alt} className="ui-1lliihq ui-h8yej3 ui-5yr21d ui-l1xv1r" draggable={false}/>}<span className="ui-10l6tqk ui-13vifvy ui-3m8u43 ui-1ey2m1c ui-u96u03 ui-78zum5 ui-6s0dn4 ui-l56j7k"><span className="ui-78zum5 ui-187nhsf ui-n3w4p2 ui-6s0dn4 ui-l56j7k ui-1e6avla ui-a44r0r ui-fungia ui-1dmgsgi"><PrComponent/></span></span><span {...p(Zt.duration, y.label, y.medium, y.tabular)}>{data.duration}</span></>;
    return <figure className="ui-1ghz6dp" data-document-block="video">{t ? <a href={t} target="_blank" rel="noreferrer noopener" title={data.alt} className="ui-1n2onr6 ui-1lliihq ui-h8yej3 ui-b3r6kr ui-4pepcl ui-1x50nob ui-14w3kke ui-pi5jss ui-1heor9g ui-1hl2dhg">{n}</a> : <div className="ui-1n2onr6 ui-1lliihq ui-h8yej3 ui-b3r6kr ui-4pepcl ui-1x50nob ui-14w3kke ui-pi5jss ui-1heor9g ui-1hl2dhg">{n}</div>}{data.caption && <figcaption {...p(Zt.caption, y.label, y.regular, y.inkTertiary)}>{data.caption}</figcaption>}</figure>;
}
const Ca = (e)=>q(e) && (e.kind === "brand" && z(e.brand) || e.kind === "thumb" && z(e.src) || e.kind === "icon" && z(e.name));
const Ta = (e)=>q(e) && z(e.title) && z(e.site) && z(e.href) && U(e.date, z) && U(e.lead, Ca);
const Ra = (e)=>q(e) && oe(e.links, Ta) && U(e.numbered, Xt);
const Ma = {
    github: "G",
    figma: "F",
    notion: "N",
    slack: "S"
};
function RComponent({ lead }) {
    RComponent.d = 2774833382;
    return <span className="ui-78zum5 ui-1td3qas ui-10w6t97 ui-2lah0s ui-6s0dn4 ui-l56j7k ui-b3r6kr ui-ur7f20 ui-1x50nob ui-14w3kke">{lead.kind === "brand" && <span {...p(y.body2, y.medium, y.inkSecondary)}>{Ma[lead.brand] ?? "↗"}</span>}{lead.kind === "thumb" && Er(lead.src) && <img src={lead.src} alt="" className="ui-1lliihq ui-h8yej3 ui-5yr21d ui-l1xv1r" draggable={false}/>}{lead.kind === "icon" && <span {...p(y.body2, y.inkSecondary)}>↗</span>}</span>;
}
function OrComponent() {
    OrComponent.d = 4139237737;
    return <svg width={12} height={12} viewBox="0 0 12 12" aria-hidden><path d="M3.5 2.5h6v6M9.5 2.5l-7 7" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round"/></svg>;
}
function DrComponent({ data }) {
    DrComponent.d = 3443309232;
    return <div className="ui-78zum5 ui-dt5ytf ui-17d4w8g" data-document-block="links">{data.links.map((t, n)=>{
        const i = Mr(t.href);
        const r = <>{data.numbered && <span {...p(Zt.linkNumber, y.label, y.medium, y.tabular, y.inkTertiary)}>{n + 1}</span>}{t.lead && <RComponent lead={t.lead}/>}<span className="ui-euugli ui-98rzlu"><span {...p(Ne.column)}><span {...p(y.body1, y.regular, y.truncate, y.ink)}>{t.title}</span><span {...p(y.label, y.regular, y.truncate, y.inkTertiary)}>{t.site}{t.date && ` · ${t.date}`}</span></span></span><span className="ui-2lah0s ui-1rrbmv7"><OrComponent/></span></>;
        const s = {
            0: {
                className: "ui-78zum5 ui-6s0dn4 ui-883omv ui-1q4ynmn ui-4hv7ue ui-1y0btm7 ui-3a4ul3 ui-1vvogim ui-nuq7ks ui-f18ygs ui-1heor9g ui-1hl2dhg ui-1ypdohk ui-jbqb8w ui-1xgckil"
            },
            1: {
                className: "ui-78zum5 ui-6s0dn4 ui-883omv ui-1q4ynmn ui-4hv7ue ui-1y0btm7 ui-3a4ul3 ui-1vvogim ui-nuq7ks ui-1heor9g ui-1hl2dhg ui-1ypdohk ui-jbqb8w ui-1xgckil ui-163pfp"
            }
        }[!!(t.lead && !data.numbered) << 0];
        if (i) {
            return <a key={`${t.title}-${n}`} href={i} target="_blank" rel="noreferrer noopener" title={t.title} {...s}>{r}</a>;
        }
        return <span key={`${t.title}-${n}`} title={t.title} {...s}>{r}</span>;
    })}</div>;
}
const Ea = {
    k1xSpc: "ui-rvj5dj",
    $$css: true
};
const ut = {
    grid: (e)=>[
            Ea,
            {
                kumcoG: e != null ? "ui-qketvx" : e,
                $$css: true
            },
            {
                "--x-gridTemplateColumns": e ?? undefined
            }
        ],
    hairlineRow: {
        k1C7PZ: "ui-tqikln",
        kEafiO: "ui-t8cgyo",
        kPef9Z: "ui-13fuv20",
        kLZC3w: "ui-nhgcku",
        k8WAf4: "ui-p59q4u",
        $$css: true
    },
    rowMeta: {
        kLKAdn: "ui-1nn3v0j",
        kHjlTd: "ui-j0a0fe",
        $$css: true
    },
    rowDetail: {
        keoZOQ: "ui-r9ek0c",
        $$css: true
    }
};
const $a = (e)=>q(e) && z(e.title) && U(e.lead, z) && U(e.detail, z) && U(e.meta, z) && (e.status === undefined || q(e.status) && z(e.status.label));
const za = (e)=>q(e) && oe(e.rows, $a);
function HrComponent({ data }) {
    HrComponent.d = 4257907668;
    const t = data.rows.some((s)=>s.lead);
    const n = Math.max(...data.rows.map((s)=>s.lead?.length ?? 0)) > 2 ? 48 : 18;
    const i = "fit-content(40%)";
    const r = t ? `${n}px minmax(0, 1fr) ${i}` : `minmax(0, 1fr) ${i}`;
    return <div {...p(Ne.column)} data-document-block="rows">{data.rows.map((s, o)=><div key={`${s.title}-${o}`} {...p(ut.grid(r), ut.hairlineRow)}>{t && <span {...p(y.body1, y.regular, y.tabular, y.inkTertiary)}>{s.lead}</span>}<div className="ui-euugli"><p {...p(Ne.reset, y.body1, y.regular, y.ink)}>{s.title}{s.status && <span {...p(y.medium, s.status.tone && Qn[s.status.tone] ? y.tone(Qn[s.status.tone]) : y.inkTertiary)}> · {s.status.label}</span>}</p>{s.detail && <p {...p(Ne.reset, ut.rowDetail, y.body1, y.regular, y.inkSecondary)}>{s.detail}</p>}</div><span {...p(y.label, y.regular, y.right, y.inkTertiary, ut.rowMeta)}>{s.meta}</span></div>)}</div>;
}
function ja() {
    return {
        rows: Te(za, HrComponent),
        bars: Te(Jl, ZrComponent),
        stacked: Te(ta, JrComponent),
        columns: Te(ia, ArComponent),
        line: Te(sa, NrComponent),
        pie: Te(aa, IrComponent),
        day: Te(ya, LrComponent),
        video: Te(Sa, QrComponent),
        links: Te(Ra, DrComponent)
    };
}
function Br(e) {
    Br.d = 2939938924;
    return {
        name: "dataFence",
        extensions: [
            Pl.configure({
                renderers: e.renderers,
                showSourceToggle: e.showSourceToggle ?? true
            })
        ]
    };
}
const GnContext = r_1.createContext(null);
function useAa(e) {
    const t = r_1.useContext(GnContext);
    if (!t) {
        throw new Error(`${e} must be used within RichTextEditor`);
    }
    return t;
}
function UrComponent({ editor, isStreaming, editable, children }) {
    UrComponent.d = 1077662325;
    const r = r_1.useMemo(()=>({
            editor,
            isStreaming,
            editable
        }), [
        editor,
        isStreaming,
        editable
    ]);
    return <GnContext.Provider value={r}>{children}</GnContext.Provider>;
}
const Na = "ui-rich-text-editor__search-result ui-6chtzl";
const Ia = "ui-rich-text-editor__search-result ui-rich-text-editor__search-result--current ui-13eqifn";
const Ht = new RegExp("(?<!\\\\)\\[([^\\]]+)\\]\\(((?:[^()]|\\([^)]*\\))+)\\)", "g");
const Le = {
    query: "",
    total: 0,
    currentIndex: -1,
    current: 0
};
const se = new a("richTextSearch");
function La(text) {
    const t = [];
    let startOffset = 0;
    Ht.lastIndex = 0;
    let i = Ht.exec(text);
    while(i !== null){
        const [r, s] = i;
        if (i.index > startOffset) {
            t.push({
                text: text.slice(startOffset, i.index),
                startOffset
            });
        }
        t.push({
            text: s,
            startOffset: i.index + 1
        });
        startOffset = i.index + r.length;
        i = Ht.exec(text);
    }
    if (startOffset < text.length) {
        t.push({
            text: text.slice(startOffset),
            startOffset
        });
    }
    return t;
}
function ei(e, text, n, i) {
    const r = text.toLowerCase();
    let s = 0;
    while(true){
        const o = r.indexOf(i, s);
        if (o === -1) {
            break;
        }
        e.push({
            from: n + o,
            to: n + o + i.length
        });
        s = o + 1;
    }
}
function Pa(doc, t) {
    if (!t) {
        return [];
    }
    const n = [];
    const i = t.toLowerCase();
    doc.descendants((r, s)=>{
        if (!(!r.isText || !r.text)) {
            if (!r.text.includes("[") || !r.text.includes("](")) {
                ei(n, r.text, s, i);
                return;
            }
            for (const o of La(r.text)){
                ei(n, o.text, s + o.startOffset, i);
            }
        }
    });
    return n;
}
function Ze(state) {
    const t = se.getState(state);
    if (!t || !t.query) {
        return Le;
    }
    const length = t.matches.length;
    return {
        query: t.query,
        total: length,
        currentIndex: t.currentIndex,
        current: length > 0 ? t.currentIndex + 1 : 0
    };
}
function qa(state, t) {
    const n = Ze(state);
    if (n.query === t) {
        return n;
    }
    return {
        ...Le,
        query: t
    };
}
function Fr(doc, matches, n) {
    return D.create(doc, matches.map((i, r)=>b_1.inline(i.from, i.to, {
            class: r === n ? Ia : Na
        })));
}
function _a(e, matches) {
    if (matches.length === 0) {
        return -1;
    }
    if (e < 0) {
        return 0;
    }
    if (e >= matches.length) {
        return matches.length - 1;
    }
    return e;
}
function Ct(doc, t, n) {
    const matches = Pa(doc, t);
    const r = _a(n, matches);
    return {
        query: t,
        matches,
        currentIndex: r,
        decorations: Fr(doc, matches, r)
    };
}
function Wr(e, t) {
    const n = t.matches[t.currentIndex];
    if (!n) {
        return e;
    }
    const i = T_1.create(e.doc, n.from, n.to);
    return e.setSelection(i).scrollIntoView();
}
function ti(e) {
    return !!(e?.query && e.matches.length > 0);
}
function Oa(doc, t, n) {
    return {
        ...t,
        currentIndex: n,
        decorations: Fr(doc, t.matches, n)
    };
}
function ni(e, t, n, dispatch) {
    const r = Oa(e.doc, t, n);
    e.setMeta(se, {
        nextState: r
    });
    Wr(e, r);
    dispatch?.(e);
    return true;
}
function Da(e, t) {
    const n = e.getMeta(se);
    if (n?.nextState) {
        return n.nextState;
    }
    if (e.docChanged && t.query) {
        return Ct(e.doc, t.query, t.currentIndex);
    }
    return t;
}
function Ha() {
    return new P_1({
        key: se,
        state: {
            init: (e, t)=>Ct(t.doc, "", -1),
            apply: (e, t)=>Da(e, t)
        },
        props: {
            decorations (e) {
                return se.getState(e)?.decorations;
            }
        }
    });
}
const Ba = j_2.create({
    name: "richTextSearch",
    addProseMirrorPlugins () {
        return [
            Ha()
        ];
    },
    addCommands () {
        return {
            setRichTextSearchQuery: (e)=>({ tr, dispatch })=>{
                    const i = Ct(tr.doc, e, 0);
                    tr.setMeta(se, {
                        nextState: i
                    });
                    Wr(tr, i);
                    dispatch?.(tr);
                    return true;
                },
            selectNextRichTextSearchResult: ()=>({ state, tr, dispatch })=>{
                    const i = se.getState(state);
                    if (!ti(i)) {
                        return false;
                    }
                    const r = (i.currentIndex + 1) % i.matches.length;
                    return ni(tr, i, r, dispatch);
                },
            selectPreviousRichTextSearchResult: ()=>({ state, tr, dispatch })=>{
                    const i = se.getState(state);
                    if (!ti(i)) {
                        return false;
                    }
                    const r = (i.currentIndex - 1 + i.matches.length) % i.matches.length;
                    return ni(tr, i, r, dispatch);
                },
            clearRichTextSearchQuery: ()=>({ tr, dispatch })=>{
                    const nextState = Ct(tr.doc, "", -1);
                    tr.setMeta(se, {
                        nextState
                    });
                    dispatch?.(tr);
                    return true;
                }
        };
    }
});
let Qt;
let Yt;
if (typeof WeakMap !== "undefined") {
    let e = new WeakMap;
    Qt = (t)=>e.get(t);
    Yt = (t, n)=>{
        e.set(t, n);
        return n;
    };
} else {
    const e = [];
    let n = 0;
    Qt = (i)=>{
        for(let r = 0; r < e.length; r += 2){
            if (e[r] == i) {
                return e[r + 1];
            }
        }
    };
    Yt = (i, r)=>{
        if (n == 10) {
            n = 0;
        }
        e[n++] = i;
        return e[n++] = r;
    };
}
var P = class {
    constructor(e, t, n, i){
        this.width = e;
        this.height = t;
        this.map = n;
        this.problems = i;
    }
    findCell(e) {
        for(let t = 0; t < this.map.length; t++){
            const n = this.map[t];
            if (n != e) {
                continue;
            }
            const left = t % this.width;
            const top = t / this.width | 0;
            let right = left + 1;
            let bottom = top + 1;
            for(let l = 1; right < this.width && this.map[t + l] == n; l++){
                right++;
            }
            for(let l = 1; bottom < this.height && this.map[t + this.width * l] == n; l++){
                bottom++;
            }
            return {
                left,
                top,
                right,
                bottom
            };
        }
        throw new RangeError(`No cell with offset ${e} found`);
    }
    colCount(e) {
        for(let t = 0; t < this.map.length; t++){
            if (this.map[t] == e) {
                return t % this.width;
            }
        }
        throw new RangeError(`No cell with offset ${e} found`);
    }
    nextCell(e, t, n) {
        const { left, right, top, bottom } = this.findCell(e);
        if (t == "horiz") {
            if (n < 0 ? left == 0 : right == this.width) {
                return null;
            }
            return this.map[top * this.width + (n < 0 ? left - 1 : right)];
        }
        if (n < 0 ? top == 0 : bottom == this.height) {
            return null;
        }
        return this.map[left + this.width * (n < 0 ? top - 1 : bottom)];
    }
    rectBetween(e, t) {
        const { left, right, top, bottom } = this.findCell(e);
        const { left: left_1, right: right_1, top: top_1, bottom: bottom_1 } = this.findCell(t);
        return {
            left: Math.min(left, left_1),
            top: Math.min(top, top_1),
            right: Math.max(right, right_1),
            bottom: Math.max(bottom, bottom_1)
        };
    }
    cellsInRect(e) {
        const t = [];
        const n = {};
        for(let i = e.top; i < e.bottom; i++){
            for(let r = e.left; r < e.right; r++){
                const s = i * this.width + r;
                const o = this.map[s];
                if (!n[o]) {
                    n[o] = true;
                    if (!(r == e.left && r && this.map[s - 1] == o || i == e.top && i && this.map[s - this.width] == o)) {
                        t.push(o);
                    }
                }
            }
        }
        return t;
    }
    positionAt(e, t, n) {
        for(let i = 0, r = 0;; i++){
            const s = r + n.child(i).nodeSize;
            if (i == e) {
                let o = t + e * this.width;
                const l = (e + 1) * this.width;
                while(o < l && this.map[o] < r){
                    o++;
                }
                if (o == l) {
                    return s - 1;
                }
                return this.map[o];
            }
            r = s;
        }
    }
    static get(e) {
        return Qt(e) || Yt(e, Ua(e));
    }
};
function Ua(e) {
    if (e.type.spec.tableRole != "table") {
        throw new RangeError(`Not a table node: ${e.type.name}`);
    }
    const t = Fa(e);
    const e_childCount = e.childCount;
    const i = [];
    let r = 0;
    let s = null;
    const o = [];
    for(let u = 0, c = t * e_childCount; u < c; u++){
        i[u] = 0;
    }
    for(let u = 0, c = 0; u < e_childCount; u++){
        const d = e.child(u);
        c++;
        for(let f = 0;; f++){
            while(r < i.length && i[r] != 0){
                r++;
            }
            if (f == d.childCount) {
                break;
            }
            const g = d.child(f);
            const { colspan, rowspan, colwidth } = g.attrs;
            for(let S = 0; S < rowspan; S++){
                if (S + u >= e_childCount) {
                    (s || (s = [])).push({
                        type: "overlong_rowspan",
                        pos: c,
                        n: rowspan - S
                    });
                    break;
                }
                const T = r + S * t;
                for(let M = 0; M < colspan; M++){
                    if (i[T + M] == 0) {
                        i[T + M] = c;
                    } else {
                        (s || (s = [])).push({
                            type: "collision",
                            row: u,
                            pos: c,
                            n: colspan - M
                        });
                    }
                    const $ = colwidth && colwidth[M];
                    if ($) {
                        const E = (T + M) % t * 2;
                        const L = o[E];
                        if (L == null || L != $ && o[E + 1] == 1) {
                            o[E] = $;
                            o[E + 1] = 1;
                        } else {
                            L == $ && o[E + 1]++;
                        }
                    }
                }
            }
            r += colspan;
            c += g.nodeSize;
        }
        const h = (u + 1) * t;
        let n = 0;
        while(r < h){
            i[r++] == 0 && n++;
        }
        if (n) {
            (s || (s = [])).push({
                type: "missing",
                row: u,
                n
            });
        }
        c++;
    }
    if (t === 0 || e_childCount === 0) {
        (s || (s = [])).push({
            type: "zero_sized"
        });
    }
    const l = new P(t, e_childCount, i, s);
    let a = false;
    for(let u = 0; !a && u < o.length; u += 2){
        if (o[u] != null && o[u + 1] < e_childCount) {
            a = true;
        }
    }
    if (a) {
        Wa(l, o, e);
    }
    return l;
}
function Fa(e) {
    let t = -1;
    let n = false;
    for(let i = 0; i < e.childCount; i++){
        const r = e.child(i);
        let s = 0;
        if (n) {
            for(let o = 0; o < i; o++){
                const l = e.child(o);
                for(let a = 0; a < l.childCount; a++){
                    const u = l.child(a);
                    if (o + u.attrs.rowspan > i) {
                        s += u.attrs.colspan;
                    }
                }
            }
        }
        for(let o = 0; o < r.childCount; o++){
            const l = r.child(o);
            s += l.attrs.colspan;
            if (l.attrs.rowspan > 1) {
                n = true;
            }
        }
        if (t == -1) {
            t = s;
        } else if (t != s) {
            t = Math.max(t, s);
        }
    }
    return t;
}
function Wa(e, t, n) {
    if (!e.problems) {
        e.problems = [];
    }
    const i = {};
    for(let r = 0; r < e.map.length; r++){
        const s = e.map[r];
        if (i[s]) {
            continue;
        }
        i[s] = true;
        const o = n.nodeAt(s);
        if (!o) {
            throw new RangeError(`No cell with offset ${s} found`);
        }
        let l = null;
        const a = o.attrs;
        for(let u = 0; u < a.colspan; u++){
            const c = t[(r + u) % e.width * 2];
            if (c != null && (!a.colwidth || a.colwidth[u] != c)) {
                (l || (l = Va(a)))[u] = c;
            }
        }
        if (l) {
            e.problems.unshift({
                type: "colwidth mismatch",
                pos: s,
                colwidth: l
            });
        }
    }
}
function Va(e) {
    if (e.colwidth) {
        return e.colwidth.slice();
    }
    const t = [];
    for(let n = 0; n < e.colspan; n++){
        t.push(0);
    }
    return t;
}
function F(schema) {
    let tableNodeTypes = schema.cached.tableNodeTypes;
    if (!tableNodeTypes) {
        tableNodeTypes = schema.cached.tableNodeTypes = {};
        for(const n in schema.nodes){
            const i = schema.nodes[n];
            const r = i.spec.tableRole;
            if (r) {
                tableNodeTypes[r] = i;
            }
        }
    }
    return tableNodeTypes;
}
const je = new a("selectingCells");
function Ve(e) {
    for(let t = e.depth - 1; t > 0; t--){
        if (e.node(t).type.spec.tableRole == "row") {
            return e.node(0).resolve(e.before(t + 1));
        }
    }
    return null;
}
function Ka($from) {
    for(let t = $from.depth; t > 0; t--){
        const n = $from.node(t).type.spec.tableRole;
        if (n === "cell" || n === "header_cell") {
            return $from.node(t);
        }
    }
    return null;
}
function pe(e) {
    const $head = e.selection.$head;
    for(let n = $head.depth; n > 0; n--){
        if ($head.node(n).type.spec.tableRole == "row") {
            return true;
        }
    }
    return false;
}
function $t({ selection }) {
    if ("$anchorCell" in selection && selection.$anchorCell) {
        if (selection.$anchorCell.pos > selection.$headCell.pos) {
            return selection.$anchorCell;
        }
        return selection.$headCell;
    }
    if ("node" in selection && selection.node && selection.node.type.spec.tableRole == "cell") {
        return selection.$anchor;
    }
    const n = Ve(selection.$head) || Xa(selection.$head);
    if (n) {
        return n;
    }
    throw new RangeError(`No cell found around position ${selection.head}`);
}
function Xa($head) {
    for(let t = $head.nodeAfter, n = $head.pos; t; t = t.firstChild, n++){
        const i = t.type.spec.tableRole;
        if (i == "cell" || i == "header_cell") {
            return $head.doc.resolve(n);
        }
    }
    for(let t = $head.nodeBefore, n = $head.pos; t; t = t.lastChild, n--){
        const i = t.type.spec.tableRole;
        if (i == "cell" || i == "header_cell") {
            return $head.doc.resolve(n - t.nodeSize);
        }
    }
}
function Jt(e) {
    return e.parent.type.spec.tableRole == "row" && !!e.nodeAfter;
}
function Ga(e) {
    return e.node(0).resolve(e.pos + e.nodeAfter.nodeSize);
}
function kn(e, t) {
    return e.depth == t.depth && e.pos >= t.start(-1) && e.pos <= t.end(-1);
}
function Vr(e, t, n) {
    const i = e.node(-1);
    const r = P.get(i);
    const s = e.start(-1);
    const o = r.nextCell(e.pos - s, t, n);
    if (o == null) {
        return null;
    }
    return e.node(0).resolve(s + o);
}
function Oe(e, t, n = 1) {
    const i = {
        ...e,
        colspan: e.colspan - n
    };
    if (i.colwidth) {
        i.colwidth = i.colwidth.slice();
        i.colwidth.splice(t, n);
        if (!i.colwidth.some((r)=>r > 0)) {
            i.colwidth = null;
        }
    }
    return i;
}
function Kr(attrs, t, n = 1) {
    const i = {
        ...attrs,
        colspan: attrs.colspan + n
    };
    if (i.colwidth) {
        i.colwidth = i.colwidth.slice();
        for(let r = 0; r < n; r++){
            i.colwidth.splice(t, 0, 0);
        }
    }
    return i;
}
function Za(map, table, n) {
    const header_cell = F(table.type.schema).header_cell;
    for(let r = 0; r < map.height; r++){
        if (table.nodeAt(map.map[n + r * map.width]).type != header_cell) {
            return false;
        }
    }
    return true;
}
const I = class Re extends y_1 {
    constructor(t, n = t){
        const i = t.node(-1);
        const r = P.get(i);
        const s = t.start(-1);
        const o = r.rectBetween(t.pos - s, n.pos - s);
        const l = t.node(0);
        const a = r.cellsInRect(o).filter((c)=>c != n.pos - s);
        a.unshift(n.pos - s);
        const u = a.map((c)=>{
            const d = i.nodeAt(c);
            if (!d) {
                throw new RangeError(`No cell with offset ${c} found`);
            }
            const h = s + c + 1;
            return new B(l.resolve(h), l.resolve(h + d.content.size));
        });
        super(u[0].$from, u[0].$to, u);
        this.$anchorCell = t;
        this.$headCell = n;
    }
    map(t, n) {
        const i = t.resolve(n.map(this.$anchorCell.pos));
        const r = t.resolve(n.map(this.$headCell.pos));
        if (Jt(i) && Jt(r) && kn(i, r)) {
            const s = this.$anchorCell.node(-1) != i.node(-1);
            if (s && this.isRowSelection()) {
                return Re.rowSelection(i, r);
            }
            if (s && this.isColSelection()) {
                return Re.colSelection(i, r);
            }
            return new Re(i, r);
        }
        return T_1.between(i, r);
    }
    content() {
        const t = this.$anchorCell.node(-1);
        const n = P.get(t);
        const i = this.$anchorCell.start(-1);
        const r = n.rectBetween(this.$anchorCell.pos - i, this.$headCell.pos - i);
        const s = {};
        const o = [];
        for(let a = r.top; a < r.bottom; a++){
            const u = [];
            for(let c = a * n.width + r.left, d = r.left; d < r.right; d++, c++){
                const h = n.map[c];
                if (s[h]) {
                    continue;
                }
                s[h] = true;
                const p = n.findCell(h);
                let f = t.nodeAt(h);
                if (!f) {
                    throw new RangeError(`No cell with offset ${h} found`);
                }
                const g = r.left - p.left;
                const k = p.right - r.right;
                if (g > 0 || k > 0) {
                    let b = f.attrs;
                    if (g > 0) {
                        b = Oe(b, 0, g);
                    }
                    if (k > 0) {
                        b = Oe(b, b.colspan - k, k);
                    }
                    if (p.left < r.left) {
                        f = f.type.createAndFill(b);
                        if (!f) {
                            throw new RangeError(`Could not create cell with attrs ${JSON.stringify(b)}`);
                        }
                    } else {
                        f = f.type.create(b, f.content);
                    }
                }
                if (p.top < r.top || p.bottom > r.bottom) {
                    const b = {
                        ...f.attrs,
                        rowspan: Math.min(p.bottom, r.bottom) - Math.max(p.top, r.top)
                    };
                    if (p.top < r.top) {
                        f = f.type.createAndFill(b);
                    } else {
                        f = f.type.create(b, f.content);
                    }
                }
                u.push(f);
            }
            o.push(t.child(a).copy(F_1.from(u)));
        }
        const l = this.isColSelection() && this.isRowSelection() ? t : o;
        return new S(F_1.from(l), 1, 1);
    }
    replace(t, n = S.empty) {
        const length = t.steps.length;
        const ranges = this.ranges;
        for(let o = 0; o < ranges.length; o++){
            const { $from, $to } = ranges[o];
            const u = t.mapping.slice(length);
            t.replace(u.map($from.pos), u.map($to.pos), o ? S.empty : n);
        }
        const s = y_1.findFrom(t.doc.resolve(t.mapping.slice(length).map(this.to)), -1);
        if (s) {
            t.setSelection(s);
        }
    }
    replaceWith(t, n) {
        this.replace(t, new S(F_1.from(n), 0, 0));
    }
    forEachCell(t) {
        const n = this.$anchorCell.node(-1);
        const i = P.get(n);
        const r = this.$anchorCell.start(-1);
        const s = i.cellsInRect(i.rectBetween(this.$anchorCell.pos - r, this.$headCell.pos - r));
        for(let o = 0; o < s.length; o++){
            t(n.nodeAt(s[o]), r + s[o]);
        }
    }
    isColSelection() {
        const t = this.$anchorCell.index(-1);
        const n = this.$headCell.index(-1);
        if (Math.min(t, n) > 0) {
            return false;
        }
        const i = t + this.$anchorCell.nodeAfter.attrs.rowspan;
        const r = n + this.$headCell.nodeAfter.attrs.rowspan;
        return Math.max(i, r) == this.$headCell.node(-1).childCount;
    }
    static colSelection(t, n = t) {
        const i = t.node(-1);
        const r = P.get(i);
        const s = t.start(-1);
        const o = r.findCell(t.pos - s);
        const l = r.findCell(n.pos - s);
        const a = t.node(0);
        o.top <= l.top ? (o.top > 0 && (t = a.resolve(s + r.map[o.left])), l.bottom < r.height && (n = a.resolve(s + r.map[r.width * (r.height - 1) + l.right - 1]))) : (l.top > 0 && (n = a.resolve(s + r.map[l.left])), o.bottom < r.height && (t = a.resolve(s + r.map[r.width * (r.height - 1) + o.right - 1])));
        return new Re(t, n);
    }
    isRowSelection() {
        const t = this.$anchorCell.node(-1);
        const n = P.get(t);
        const i = this.$anchorCell.start(-1);
        const r = n.colCount(this.$anchorCell.pos - i);
        const s = n.colCount(this.$headCell.pos - i);
        if (Math.min(r, s) > 0) {
            return false;
        }
        const o = r + this.$anchorCell.nodeAfter.attrs.colspan;
        const l = s + this.$headCell.nodeAfter.attrs.colspan;
        return Math.max(o, l) == n.width;
    }
    eq(t) {
        return t instanceof Re && t.$anchorCell.pos == this.$anchorCell.pos && t.$headCell.pos == this.$headCell.pos;
    }
    static rowSelection(t, n = t) {
        const i = t.node(-1);
        const r = P.get(i);
        const s = t.start(-1);
        const o = r.findCell(t.pos - s);
        const l = r.findCell(n.pos - s);
        const a = t.node(0);
        o.left <= l.left ? (o.left > 0 && (t = a.resolve(s + r.map[o.top * r.width])), l.right < r.width && (n = a.resolve(s + r.map[r.width * (l.top + 1) - 1]))) : (l.left > 0 && (n = a.resolve(s + r.map[l.top * r.width])), o.right < r.width && (t = a.resolve(s + r.map[r.width * (o.top + 1) - 1])));
        return new Re(t, n);
    }
    toJSON() {
        return {
            type: "cell",
            anchor: this.$anchorCell.pos,
            head: this.$headCell.pos
        };
    }
    static fromJSON(t, n) {
        return new Re(t.resolve(n.anchor), t.resolve(n.head));
    }
    static create(t, n, i = n) {
        return new Re(t.resolve(n), t.resolve(i));
    }
    getBookmark() {
        return new Qa(this.$anchorCell.pos, this.$headCell.pos);
    }
};
I.prototype.visible = false;
y_1.jsonID("cell", I);
var Qa = class Xr {
    constructor(t, n){
        this.anchor = t;
        this.head = n;
    }
    map(t) {
        return new Xr(t.map(this.anchor), t.map(this.head));
    }
    resolve(t) {
        const n = t.resolve(this.anchor);
        const i = t.resolve(this.head);
        if (n.parent.type.spec.tableRole == "row" && i.parent.type.spec.tableRole == "row" && n.index() < n.parent.childCount && i.index() < i.parent.childCount && kn(n, i)) {
            return new I(n, i);
        }
        return y_1.near(i, 1);
    }
};
function decorations(e) {
    if (!(e.selection instanceof I)) {
        return null;
    }
    const t = [];
    e.selection.forEachCell((n, i)=>{
        t.push(b_1.node(i, i + n.nodeSize, {
            class: "selectedCell"
        }));
    });
    return D.create(e.doc, t);
}
function Ja({ $from, $to }) {
    if ($from.pos == $to.pos || $from.pos < $to.pos - 6) {
        return false;
    }
    let $from_pos = $from.pos;
    let $to_pos = $to.pos;
    let $from_depth = $from.depth;
    for(; $from_depth >= 0 && !($from.after($from_depth + 1) < $from.end($from_depth)); $from_depth--, $from_pos++);
    for(let s = $to.depth; s >= 0 && !($to.before(s + 1) > $to.start(s)); s--, $to_pos--);
    return $from_pos == $to_pos && /row|table/.test($from.node($from_depth).type.spec.tableRole);
}
function eu({ $from, $to }) {
    let n;
    let i;
    for(let r = $from.depth; r > 0; r--){
        const s = $from.node(r);
        if (s.type.spec.tableRole === "cell" || s.type.spec.tableRole === "header_cell") {
            n = s;
            break;
        }
    }
    for(let r = $to.depth; r > 0; r--){
        const s = $to.node(r);
        if (s.type.spec.tableRole === "cell" || s.type.spec.tableRole === "header_cell") {
            i = s;
            break;
        }
    }
    return n !== i && $to.parentOffset === 0;
}
function tu(e, t, allowTableNodeSelection) {
    const selection = (t || e).selection;
    const doc = (t || e).doc;
    let s;
    let o;
    if (selection instanceof C && (o = selection.node.type.spec.tableRole)) {
        if (o == "cell" || o == "header_cell") {
            s = I.create(doc, selection.from);
        } else if (o == "row") {
            const l = doc.resolve(selection.from + 1);
            s = I.rowSelection(l, l);
        } else if (!allowTableNodeSelection) {
            const l = P.get(selection.node);
            const a = selection.from + 1;
            const u = a + l.map[l.width * l.height - 1];
            s = I.create(doc, a + 1, u);
        }
    } else {
        if (selection instanceof T_1 && Ja(selection)) {
            s = T_1.create(doc, selection.from);
        } else if (selection instanceof T_1 && eu(selection)) {
            s = T_1.create(doc, selection.$from.start(), selection.$from.end());
        }
    }
    if (s) {
        (t || (t = e.tr)).setSelection(s);
    }
    return t;
}
const nu = new a("fix-tables");
function Gr(e, t, n, i) {
    const e_childCount = e.childCount;
    const t_childCount = t.childCount;
    e: for(let o = 0, l = 0; o < t_childCount; o++){
        const a = t.child(o);
        for(let u = l, c = Math.min(e_childCount, o + 3); u < c; u++){
            if (e.child(u) == a) {
                l = u + 1;
                n += a.nodeSize;
                continue e;
            }
        }
        i(a, n);
        if (l < e_childCount && e.child(l).sameMarkup(a)) {
            Gr(e.child(l), a, n + 1, i);
        } else {
            a.nodesBetween(0, a.content.size, i, n + 1);
        }
        n += a.nodeSize;
    }
}
function Zr(e, t) {
    let n;
    const i = (r, s)=>{
        if (r.type.spec.tableRole == "table") {
            n = iu(e, r, s, n);
        }
    };
    if (t) {
        if (t.doc != e.doc) {
            Gr(t.doc, e.doc, 0, i);
        }
    } else {
        e.doc.descendants(i);
    }
    return n;
}
function iu(e, t, n, i) {
    const r = P.get(t);
    if (!r.problems) {
        return i;
    }
    if (!i) {
        i = e.tr;
    }
    const s = [];
    for(let a = 0; a < r.height; a++){
        s.push(0);
    }
    for(let a = 0; a < r.problems.length; a++){
        const problem = r.problems[a];
        if (problem.type == "collision") {
            const c = t.nodeAt(problem.pos);
            if (!c) {
                continue;
            }
            const d = c.attrs;
            for(let h = 0; h < d.rowspan; h++){
                s[problem.row + h] += problem.n;
            }
            i.setNodeMarkup(i.mapping.map(n + 1 + problem.pos), null, Oe(d, d.colspan - problem.n, problem.n));
        } else if (problem.type == "missing") {
            s[problem.row] += problem.n;
        } else if (problem.type == "overlong_rowspan") {
            const c = t.nodeAt(problem.pos);
            if (!c) {
                continue;
            }
            i.setNodeMarkup(i.mapping.map(n + 1 + problem.pos), null, {
                ...c.attrs,
                rowspan: c.attrs.rowspan - problem.n
            });
        } else if (problem.type == "colwidth mismatch") {
            const c = t.nodeAt(problem.pos);
            if (!c) {
                continue;
            }
            i.setNodeMarkup(i.mapping.map(n + 1 + problem.pos), null, {
                ...c.attrs,
                colwidth: problem.colwidth
            });
        } else if (problem.type == "zero_sized") {
            const c = i.mapping.map(n);
            i.delete(c, c + t.nodeSize);
        }
    }
    let o;
    let l;
    for(let a = 0; a < s.length; a++){
        if (s[a]) {
            if (o == null) {
                o = a;
            }
            l = a;
        }
    }
    for(let a = 0, u = n + 1; a < r.height; a++){
        const c = t.child(a);
        const d = u + c.nodeSize;
        const h = s[a];
        if (h > 0) {
            let p = "cell";
            if (c.firstChild) {
                p = c.firstChild.type.spec.tableRole;
            }
            const f = [];
            for(let k = 0; k < h; k++){
                const b = F(e.schema)[p].createAndFill();
                if (b) {
                    f.push(b);
                }
            }
            const g = (a == 0 || o == a - 1) && l == a ? u + 1 : d - 1;
            i.insert(i.mapping.map(g), f);
        }
        u = d;
    }
    return i.setMeta(nu, {
        fixTables: true
    });
}
function ve(e) {
    const e_selection = e.selection;
    const n = $t(e);
    const i = n.node(-1);
    const tableStart = n.start(-1);
    const map = P.get(i);
    return {
        ...e_selection instanceof I ? map.rectBetween(e_selection.$anchorCell.pos - tableStart, e_selection.$headCell.pos - tableStart) : map.findCell(n.pos - tableStart),
        tableStart,
        map,
        table: i
    };
}
function Qr(e, { map, tableStart, table }, r) {
    let s = r > 0 ? -1 : 0;
    if (Za(map, table, r + s)) {
        s = r == 0 || r == map.width ? null : 0;
    }
    for(let o = 0; o < map.height; o++){
        const l = o * map.width + r;
        if (r > 0 && r < map.width && map.map[l - 1] == map.map[l]) {
            const a = map.map[l];
            const u = table.nodeAt(a);
            e.setNodeMarkup(e.mapping.map(tableStart + a), null, Kr(u.attrs, r - map.colCount(a)));
            o += u.attrs.rowspan - 1;
        } else {
            const a = s == null ? F(table.type.schema).cell : table.nodeAt(map.map[l + s]).type;
            const u = map.positionAt(o, r, table);
            e.insert(e.mapping.map(tableStart + u), a.createAndFill());
        }
    }
    return e;
}
function ru(state, dispatch) {
    if (!pe(state)) {
        return false;
    }
    if (dispatch) {
        const n = ve(state);
        dispatch(Qr(state.tr, n, n.left));
    }
    return true;
}
function su(state, dispatch) {
    if (!pe(state)) {
        return false;
    }
    if (dispatch) {
        const n = ve(state);
        dispatch(Qr(state.tr, n, n.right));
    }
    return true;
}
function ou(e, { map, table, tableStart }, r) {
    const length = e.mapping.maps.length;
    for(let o = 0; o < map.height;){
        const l = o * map.width + r;
        const a = map.map[l];
        const u = table.nodeAt(a);
        const c = u.attrs;
        if (r > 0 && map.map[l - 1] == a || r < map.width - 1 && map.map[l + 1] == a) {
            e.setNodeMarkup(e.mapping.slice(length).map(tableStart + a), null, Oe(c, r - map.colCount(a)));
        } else {
            const d = e.mapping.slice(length).map(tableStart + a);
            e.delete(d, d + u.nodeSize);
        }
        o += c.rowspan;
    }
}
function lu(state, dispatch) {
    if (!pe(state)) {
        return false;
    }
    if (dispatch) {
        const n = ve(state);
        const i = state.tr;
        if (n.left == 0 && n.right == n.map.width) {
            return false;
        }
        for(let r = n.right - 1; ou(i, n, r), r != n.left; r--){
            const s = n.tableStart ? i.doc.nodeAt(n.tableStart - 1) : i.doc;
            if (!s) {
                throw new RangeError("No table found");
            }
            n.table = s;
            n.map = P.get(s);
        }
        dispatch(i);
    }
    return true;
}
function au(map, table, n) {
    const header_cell = F(table.type.schema).header_cell;
    for(let s = 0; s < map.width; s++){
        if (table.nodeAt(map.map[s + n * map.width])?.type != header_cell) {
            return false;
        }
    }
    return true;
}
function Yr(e, { map, tableStart, table }, r) {
    let s = tableStart;
    for(let u = 0; u < r; u++){
        s += table.child(u).nodeSize;
    }
    const o = [];
    let l = r > 0 ? -1 : 0;
    if (au(map, table, r + l)) {
        l = r == 0 || r == map.height ? null : 0;
    }
    for(let u = 0, c = map.width * r; u < map.width; u++, c++){
        if (r > 0 && r < map.height && map.map[c] == map.map[c - map.width]) {
            const d = map.map[c];
            const h = table.nodeAt(d).attrs;
            e.setNodeMarkup(tableStart + d, null, {
                ...h,
                rowspan: h.rowspan + 1
            });
            u += h.colspan - 1;
        } else {
            const d = l == null ? F(table.type.schema).cell : table.nodeAt(map.map[c + l * map.width])?.type;
            const h = d?.createAndFill();
            if (h) {
                o.push(h);
            }
        }
    }
    e.insert(s, F(table.type.schema).row.create(null, o));
    return e;
}
function uu(state, dispatch) {
    if (!pe(state)) {
        return false;
    }
    if (dispatch) {
        const n = ve(state);
        dispatch(Yr(state.tr, n, n.top));
    }
    return true;
}
function cu(state, dispatch) {
    if (!pe(state)) {
        return false;
    }
    if (dispatch) {
        const n = ve(state);
        dispatch(Yr(state.tr, n, n.bottom));
    }
    return true;
}
function du(e, { map, table, tableStart }, r) {
    let s = 0;
    for(let u = 0; u < r; u++){
        s += table.child(u).nodeSize;
    }
    const o = s + table.child(r).nodeSize;
    const length = e.mapping.maps.length;
    e.delete(s + tableStart, o + tableStart);
    const a = new Set;
    for(let u = 0, c = r * map.width; u < map.width; u++, c++){
        const d = map.map[c];
        if (!a.has(d)) {
            a.add(d);
            if (r > 0 && d == map.map[c - map.width]) {
                const h = table.nodeAt(d).attrs;
                e.setNodeMarkup(e.mapping.slice(length).map(d + tableStart), null, {
                    ...h,
                    rowspan: h.rowspan - 1
                });
                u += h.colspan - 1;
            } else if (r < map.height && d == map.map[c + map.width]) {
                const h = table.nodeAt(d);
                const p = h.attrs;
                const f = h.type.create({
                    ...p,
                    rowspan: h.attrs.rowspan - 1
                }, h.content);
                const g = map.positionAt(r + 1, u, table);
                e.insert(e.mapping.slice(length).map(tableStart + g), f);
                u += p.colspan - 1;
            }
        }
    }
}
function hu(state, dispatch) {
    if (!pe(state)) {
        return false;
    }
    if (dispatch) {
        const n = ve(state);
        const i = state.tr;
        if (n.top == 0 && n.bottom == n.map.height) {
            return false;
        }
        for(let r = n.bottom - 1; du(i, n, r), r != n.top; r--){
            const s = n.tableStart ? i.doc.nodeAt(n.tableStart - 1) : i.doc;
            if (!s) {
                throw new RangeError("No table found");
            }
            n.table = s;
            n.map = P.get(n.table);
        }
        dispatch(i);
    }
    return true;
}
function ii({ content }) {
    return content.childCount == 1 && content.child(0).isTextblock && content.child(0).childCount == 0;
}
function pu({ width, height, map }, i) {
    let r = i.top * width + i.left;
    let s = r;
    let o = (i.bottom - 1) * width + i.left;
    let l = r + (i.right - i.left - 1);
    for(let a = i.top; a < i.bottom; a++){
        if (i.left > 0 && map[s] == map[s - 1] || i.right < width && map[l] == map[l + 1]) {
            return true;
        }
        s += width;
        l += width;
    }
    for(let a = i.left; a < i.right; a++){
        if (i.top > 0 && map[r] == map[r - width] || i.bottom < height && map[o] == map[o + width]) {
            return true;
        }
        r++;
        o++;
    }
    return false;
}
function ri(state, dispatch) {
    const e_selection = state.selection;
    if (!(e_selection instanceof I) || e_selection.$anchorCell.pos == e_selection.$headCell.pos) {
        return false;
    }
    const i = ve(state);
    const { map } = i;
    if (pu(map, i)) {
        return false;
    }
    if (dispatch) {
        const s = state.tr;
        const o = {};
        let l = F_1.empty;
        let a;
        let u;
        for(let c = i.top; c < i.bottom; c++){
            for(let d = i.left; d < i.right; d++){
                const h = map.map[c * map.width + d];
                const p = i.table.nodeAt(h);
                if (!(o[h] || !p)) {
                    o[h] = true;
                    if (a == null) {
                        a = h;
                        u = p;
                    } else {
                        if (!ii(p)) {
                            l = l.append(p.content);
                        }
                        const f = s.mapping.map(h + i.tableStart);
                        s.delete(f, f + p.nodeSize);
                    }
                }
            }
        }
        if (a == null || u == null) {
            return true;
        }
        s.setNodeMarkup(a + i.tableStart, null, {
            ...Kr(u.attrs, u.attrs.colspan, i.right - i.left - u.attrs.colspan),
            rowspan: i.bottom - i.top
        });
        if (l.size > 0) {
            const c = a + 1 + u.content.size;
            const d = ii(u) ? a + 1 : c;
            s.replaceWith(d + i.tableStart, c + i.tableStart, l);
        }
        s.setSelection(new I(s.doc.resolve(a + i.tableStart)));
        dispatch(s);
    }
    return true;
}
function si(state, dispatch) {
    const n = F(state.schema);
    return fu(({ node })=>n[node.type.spec.tableRole])(state, dispatch);
}
function fu(e) {
    return (t, n)=>{
        const t_selection = t.selection;
        let r;
        let s;
        if (t_selection instanceof I) {
            if (t_selection.$anchorCell.pos != t_selection.$headCell.pos) {
                return false;
            }
            r = t_selection.$anchorCell.nodeAfter;
            s = t_selection.$anchorCell.pos;
        } else {
            r = Ka(t_selection.$from);
            if (!r) {
                return false;
            }
            s = Ve(t_selection.$from)?.pos;
        }
        if (r == null || s == null || r.attrs.colspan == 1 && r.attrs.rowspan == 1) {
            return false;
        }
        if (n) {
            let l = r.attrs;
            const a = [];
            const u = l.colwidth;
            if (l.rowspan > 1) {
                l = {
                    ...l,
                    rowspan: 1
                };
            }
            if (l.colspan > 1) {
                l = {
                    ...l,
                    colspan: 1
                };
            }
            const c = ve(t);
            const d = t.tr;
            for(let p = 0; p < c.right - c.left; p++){
                a.push(u ? {
                    ...l,
                    colwidth: u && u[p] ? [
                        u[p]
                    ] : null
                } : l);
            }
            let h;
            for(let p = c.top; p < c.bottom; p++){
                let f = c.map.positionAt(p, c.left, c.table);
                if (p == c.top) {
                    f += r.nodeSize;
                }
                for(let col = c.left, k = 0; col < c.right; col++, k++){
                    if (!(col == c.left && p == c.top)) {
                        d.insert(h = d.mapping.map(f + c.tableStart, 1), e({
                            node: r,
                            row: p,
                            col
                        }).createAndFill(a[k]));
                    }
                }
            }
            d.setNodeMarkup(s, e({
                node: r,
                row: c.top,
                col: c.left
            }), a[0]);
            if (t_selection instanceof I) {
                d.setSelection(new I(d.doc.resolve(t_selection.$anchorCell.pos), h ? d.doc.resolve(h) : undefined));
            }
            n(d);
        }
        return true;
    };
}
function mu(e, t) {
    return (n, i)=>{
        if (!pe(n)) {
            return false;
        }
        const r = $t(n);
        if (r.nodeAfter.attrs[e] === t) {
            return false;
        }
        if (i) {
            const s = n.tr;
            if (n.selection instanceof I) {
                n.selection.forEachCell((o, l)=>{
                    if (o.attrs[e] !== t) {
                        s.setNodeMarkup(l, null, {
                            ...o.attrs,
                            [e]: t
                        });
                    }
                });
            } else {
                s.setNodeMarkup(r.pos, null, {
                    ...r.nodeAfter.attrs,
                    [e]: t
                });
            }
            i(s);
        }
        return true;
    };
}
function gu(e) {
    return (t, n)=>{
        if (!pe(t)) {
            return false;
        }
        if (n) {
            const i = F(t.schema);
            const r = ve(t);
            const s = t.tr;
            const o = r.map.cellsInRect(e == "column" ? {
                left: r.left,
                top: 0,
                right: r.right,
                bottom: r.map.height
            } : e == "row" ? {
                left: 0,
                top: r.top,
                right: r.map.width,
                bottom: r.bottom
            } : r);
            const l = o.map((a)=>r.table.nodeAt(a));
            for(let a = 0; a < o.length; a++){
                if (l[a].type == i.header_cell) {
                    s.setNodeMarkup(r.tableStart + o[a], i.cell, l[a].attrs);
                }
            }
            if (s.steps.length === 0) {
                for(let a = 0; a < o.length; a++){
                    s.setNodeMarkup(r.tableStart + o[a], i.header_cell, l[a].attrs);
                }
            }
            n(s);
        }
        return true;
    };
}
function oi(e, t, n) {
    const i = t.map.cellsInRect({
        left: 0,
        top: 0,
        right: e == "row" ? t.map.width : 1,
        bottom: e == "column" ? t.map.height : 1
    });
    for(let r = 0; r < i.length; r++){
        const s = t.table.nodeAt(i[r]);
        if (s && s.type !== n.header_cell) {
            return false;
        }
    }
    return true;
}
function et(e, t) {
    t = t || {
        useDeprecatedLogic: false
    };
    if (t.useDeprecatedLogic) {
        return gu(e);
    }
    return (n, i)=>{
        if (!pe(n)) {
            return false;
        }
        if (i) {
            const r = F(n.schema);
            const s = ve(n);
            const o = n.tr;
            const l = oi("row", s, r);
            const a = oi("column", s, r);
            const u = (e === "column" ? l : e === "row" && a) ? 1 : 0;
            const c = e == "column" ? {
                left: 0,
                top: u,
                right: 1,
                bottom: s.map.height
            } : e == "row" ? {
                left: u,
                top: 0,
                right: s.map.width,
                bottom: 1
            } : s;
            const d = e == "column" ? a ? r.cell : r.header_cell : e == "row" ? l ? r.cell : r.header_cell : r.cell;
            s.map.cellsInRect(c).forEach((h)=>{
                const p = h + s.tableStart;
                const f = o.doc.nodeAt(p);
                if (f) {
                    o.setNodeMarkup(p, d, f.attrs);
                }
            });
            i(o);
        }
        return true;
    };
}
et("row", {
    useDeprecatedLogic: true
});
et("column", {
    useDeprecatedLogic: true
});
const ku = et("cell", {
    useDeprecatedLogic: true
});
function bu(e, t) {
    if (t < 0) {
        const n = e.nodeBefore;
        if (n) {
            return e.pos - n.nodeSize;
        }
        for(let i = e.index(-1) - 1, r = e.before(); i >= 0; i--){
            const s = e.node(-1).child(i);
            const o = s.lastChild;
            if (o) {
                return r - 1 - o.nodeSize;
            }
            r -= s.nodeSize;
        }
    } else {
        if (e.index() < e.parent.childCount - 1) {
            return e.pos + e.nodeAfter.nodeSize;
        }
        const n = e.node(-1);
        for(let i = e.indexAfter(-1), r = e.after(); i < n.childCount; i++){
            const s = n.child(i);
            if (s.childCount) {
                return r + 1;
            }
            r += s.nodeSize;
        }
    }
    return null;
}
function li(e) {
    return (t, n)=>{
        if (!pe(t)) {
            return false;
        }
        const i = bu($t(t), e);
        if (i == null) {
            return false;
        }
        if (n) {
            const r = t.doc.resolve(i);
            n(t.tr.setSelection(T_1.between(r, Ga(r))).scrollIntoView());
        }
        return true;
    };
}
function yu(state, dispatch) {
    const $anchor = state.selection.$anchor;
    for(let i = $anchor.depth; i > 0; i--){
        if ($anchor.node(i).type.spec.tableRole == "table") {
            if (dispatch) {
                dispatch(state.tr.delete($anchor.before(i), $anchor.after(i)).scrollIntoView());
            }
            return true;
        }
    }
    return false;
}
function ct(e, t) {
    const e_selection = e.selection;
    if (!(e_selection instanceof I)) {
        return false;
    }
    if (t) {
        const i = e.tr;
        const r = F(e.schema).cell.createAndFill().content;
        e_selection.forEachCell((s, o)=>{
            if (!s.content.eq(r)) {
                i.replace(i.mapping.map(o + 1), i.mapping.map(o + s.nodeSize - 1), new S(r, 0, 0));
            }
        });
        if (i.docChanged) {
            t(i);
        }
    }
    return true;
}
function wu(e) {
    if (e.size === 0) {
        return null;
    }
    let { content, openStart, openEnd } = e;
    while(content.childCount == 1 && (openStart > 0 && openEnd > 0 || content.child(0).type.spec.tableRole == "table")){
        openStart--;
        openEnd--;
        content = content.child(0).content;
    }
    const r = content.child(0);
    const tableRole = r.type.spec.tableRole;
    const schema = r.type.schema;
    const l = [];
    if (tableRole == "row") {
        for(let a = 0; a < content.childCount; a++){
            let u = content.child(a).content;
            const c = a ? 0 : Math.max(0, openStart - 1);
            const d = a < content.childCount - 1 ? 0 : Math.max(0, openEnd - 1);
            if (c || d) {
                u = en(F(schema).row, new S(u, c, d)).content;
            }
            l.push(u);
        }
    } else if (tableRole == "cell" || tableRole == "header_cell") {
        l.push(openStart || openEnd ? en(F(schema).row, new S(content, openStart, openEnd)).content : content);
    } else {
        return null;
    }
    return xu(schema, l);
}
function xu(schema, rows) {
    const n = [];
    for(let r = 0; r < rows.length; r++){
        const row = rows[r];
        for(let o = row.childCount - 1; o >= 0; o--){
            const { rowspan, colspan } = row.child(o).attrs;
            for(let u = r; u < r + rowspan; u++){
                n[u] = (n[u] || 0) + colspan;
            }
        }
    }
    let width = 0;
    for(let r = 0; r < n.length; r++){
        width = Math.max(width, n[r]);
    }
    for(let r = 0; r < n.length; r++){
        if (r >= rows.length) {
            rows.push(F_1.empty);
        }
        if (n[r] < width) {
            const s = F(schema).cell.createAndFill();
            const o = [];
            for(let l = n[r]; l < width; l++){
                o.push(s);
            }
            rows[r] = rows[r].append(F_1.from(o));
        }
    }
    return {
        height: rows.length,
        width,
        rows
    };
}
function en(e, t) {
    const n = e.createAndFill();
    return new G(n).replace(0, n.content.size, t).doc;
}
function vu({ width, height, rows }, i, r) {
    if (width != i) {
        const s = [];
        const o = [];
        for(let l = 0; l < rows.length; l++){
            const row = rows[l];
            const u = [];
            for(let c = s[l] || 0, d = 0; c < i; d++){
                let h = row.child(d % row.childCount);
                if (c + h.attrs.colspan > i) {
                    h = h.type.createChecked(Oe(h.attrs, h.attrs.colspan, c + h.attrs.colspan - i), h.content);
                }
                u.push(h);
                c += h.attrs.colspan;
                for(let p = 1; p < h.attrs.rowspan; p++){
                    s[l + p] = (s[l + p] || 0) + h.attrs.colspan;
                }
            }
            o.push(F_1.from(u));
        }
        rows = o;
        width = i;
    }
    if (height != r) {
        const s = [];
        for(let o = 0, l = 0; o < r; o++, l++){
            const a = [];
            const u = rows[l % height];
            for(let c = 0; c < u.childCount; c++){
                let d = u.child(c);
                if (o + d.attrs.rowspan > r) {
                    d = d.type.create({
                        ...d.attrs,
                        rowspan: Math.max(1, r - d.attrs.rowspan)
                    }, d.content);
                }
                a.push(d);
            }
            s.push(F_1.from(a));
        }
        rows = s;
        height = r;
    }
    return {
        width,
        height,
        rows
    };
}
function Su(state_tr, t, n, i, r, s, o) {
    const schema = state_tr.doc.type.schema;
    const a = F(schema);
    let u;
    let c;
    if (r > t.width) {
        for(let d = 0, h = 0; d < t.height; d++){
            const p = n.child(d);
            h += p.nodeSize;
            const f = [];
            let g;
            if (p.lastChild == null || p.lastChild.type == a.cell) {
                g = u || (u = a.cell.createAndFill());
            } else {
                g = c || (c = a.header_cell.createAndFill());
            }
            for(let k = t.width; k < r; k++){
                f.push(g);
            }
            state_tr.insert(state_tr.mapping.slice(o).map(h - 1 + i), f);
        }
    }
    if (s > t.height) {
        const d = [];
        for(let f = 0, g = (t.height - 1) * t.width; f < Math.max(t.width, r); f++){
            const k = f >= t.width ? false : n.nodeAt(t.map[g + f]).type == a.header_cell;
            d.push(k ? c || (c = a.header_cell.createAndFill()) : u || (u = a.cell.createAndFill()));
        }
        const h = a.row.create(null, F_1.from(d));
        const p = [];
        for(let f = t.height; f < s; f++){
            p.push(h);
        }
        state_tr.insert(state_tr.mapping.slice(o).map(i + n.nodeSize - 2), p);
    }
    return !!(u || c);
}
function ai(state_tr, t, n, i, r, s, o, l) {
    if (o == 0 || o == t.height) {
        return false;
    }
    let a = false;
    for(let u = r; u < s; u++){
        const c = o * t.width + u;
        const d = t.map[c];
        if (t.map[c - t.width] == d) {
            a = true;
            const h = n.nodeAt(d);
            const { top, left } = t.findCell(d);
            state_tr.setNodeMarkup(state_tr.mapping.slice(l).map(d + i), null, {
                ...h.attrs,
                rowspan: o - top
            });
            state_tr.insert(state_tr.mapping.slice(l).map(t.positionAt(o, left, n)), h.type.createAndFill({
                ...h.attrs,
                rowspan: top + h.attrs.rowspan - o
            }));
            u += h.attrs.colspan - 1;
        }
    }
    return a;
}
function ui(state_tr, t, n, i, top, s, o, l) {
    if (o == 0 || o == t.width) {
        return false;
    }
    let a = false;
    for(let u = top; u < s; u++){
        const c = u * t.width + o;
        const d = t.map[c];
        if (t.map[c - 1] == d) {
            a = true;
            const h = n.nodeAt(d);
            const p = t.colCount(d);
            const f = state_tr.mapping.slice(l).map(d + i);
            state_tr.setNodeMarkup(f, null, Oe(h.attrs, o - p, h.attrs.colspan - (o - p)));
            state_tr.insert(f + h.nodeSize, h.type.createAndFill(Oe(h.attrs, 0, o - p)));
            u += h.attrs.rowspan - 1;
        }
    }
    return a;
}
function ci(state, dispatch, n, i, r) {
    let s = n ? state.doc.nodeAt(n - 1) : state.doc;
    if (!s) {
        throw new Error("No table found");
    }
    let o = P.get(s);
    const { top, left } = i;
    const u = left + r.width;
    const c = top + r.height;
    const state_tr = state.tr;
    let h = 0;
    function p() {
        s = n ? state_tr.doc.nodeAt(n - 1) : state_tr.doc;
        if (!s) {
            throw new Error("No table found");
        }
        o = P.get(s);
        h = state_tr.mapping.maps.length;
    }
    if (Su(state_tr, o, s, n, u, c, h)) {
        p();
    }
    if (ai(state_tr, o, s, n, left, u, top, h)) {
        p();
    }
    if (ai(state_tr, o, s, n, left, u, c, h)) {
        p();
    }
    if (ui(state_tr, o, s, n, top, c, left, h)) {
        p();
    }
    if (ui(state_tr, o, s, n, top, c, u, h)) {
        p();
    }
    for(let f = top; f < c; f++){
        const g = o.positionAt(f, left, s);
        const k = o.positionAt(f, u, s);
        state_tr.replace(state_tr.mapping.slice(h).map(g + n), state_tr.mapping.slice(h).map(k + n), new S(r.rows[f - top], 0, 0));
    }
    p();
    state_tr.setSelection(new I(state_tr.doc.resolve(n + o.positionAt(top, left, s)), state_tr.doc.resolve(n + o.positionAt(c - 1, u - 1, s))));
    dispatch(state_tr);
}
const handleKeyDown = A_1({
    ArrowLeft: dt("horiz", -1),
    ArrowRight: dt("horiz", 1),
    ArrowUp: dt("vert", -1),
    ArrowDown: dt("vert", 1),
    "Shift-ArrowLeft": ht("horiz", -1),
    "Shift-ArrowRight": ht("horiz", 1),
    "Shift-ArrowUp": ht("vert", -1),
    "Shift-ArrowDown": ht("vert", 1),
    Backspace: ct,
    "Mod-Backspace": ct,
    Delete: ct,
    "Mod-Delete": ct
});
function yt(e, t, n) {
    if (n.eq(e.selection)) {
        return false;
    }
    if (t) {
        t(e.tr.setSelection(n).scrollIntoView());
    }
    return true;
}
function dt(e, t) {
    return (n, i, r)=>{
        if (!r) {
            return false;
        }
        const n_selection = n.selection;
        if (n_selection instanceof I) {
            return yt(n, i, y_1.near(n_selection.$headCell, t));
        }
        if (e != "horiz" && !n_selection.empty) {
            return false;
        }
        const o = Jr(r, e, t);
        if (o == null) {
            return false;
        }
        if (e == "horiz") {
            return yt(n, i, y_1.near(n.doc.resolve(n_selection.head + t), t));
        }
        {
            const l = n.doc.resolve(o);
            const a = Vr(l, e, t);
            let u;
            if (a) {
                u = y_1.near(a, 1);
            } else if (t < 0) {
                u = y_1.near(n.doc.resolve(l.before(-1)), -1);
            } else {
                u = y_1.near(n.doc.resolve(l.after(-1)), 1);
            }
            return yt(n, i, u);
        }
    };
}
function ht(e, t) {
    return (n, i, r)=>{
        if (!r) {
            return false;
        }
        const n_selection = n.selection;
        let o;
        if (n_selection instanceof I) {
            o = n_selection;
        } else {
            const a = Jr(r, e, t);
            if (a == null) {
                return false;
            }
            o = new I(n.doc.resolve(a));
        }
        const l = Vr(o.$headCell, e, t);
        if (l) {
            return yt(n, i, new I(o.$anchorCell, l));
        }
        return false;
    };
}
function handleTripleClick(e, t) {
    const doc = e.state.doc;
    const i = Ve(doc.resolve(t));
    if (i) {
        e.dispatch(e.state.tr.setSelection(new I(i)));
        return true;
    }
    return false;
}
function handlePaste(e, t, n) {
    if (!pe(e.state)) {
        return false;
    }
    let i = wu(n);
    const selection = e.state.selection;
    if (selection instanceof I) {
        if (!i) {
            i = {
                width: 1,
                height: 1,
                rows: [
                    F_1.from(en(F(e.state.schema).cell, n))
                ]
            };
        }
        const s = selection.$anchorCell.node(-1);
        const o = selection.$anchorCell.start(-1);
        const l = P.get(s).rectBetween(selection.$anchorCell.pos - o, selection.$headCell.pos - o);
        i = vu(i, l.right - l.left, l.bottom - l.top);
        ci(e.state, e.dispatch, o, l, i);
        return true;
    } else if (i) {
        const s = $t(e.state);
        const o = s.start(-1);
        ci(e.state, e.dispatch, o, P.get(s.node(-1)).findCell(s.pos - o), i);
        return true;
    } else {
        return false;
    }
}
function mousedown(e, t) {
    if (t.ctrlKey || t.metaKey) {
        return;
    }
    const i = di(e, t.target);
    let r;
    if (t.shiftKey && e.state.selection instanceof I) {
        s(e.state.selection.$anchorCell, t);
        t.preventDefault();
    } else if (t.shiftKey && i && (r = Ve(e.state.selection.$anchor)) != null && Bt(e, t)?.pos != r.pos) {
        s(r, t);
        t.preventDefault();
    } else if (!i) {
        return;
    }
    function s(a, u) {
        let c = Bt(e, u);
        const d = je.getState(e.state) == null;
        if (!c || !kn(a, c)) {
            if (d) {
                c = a;
            } else {
                return;
            }
        }
        const h = new I(a, c);
        if (d || !e.state.selection.eq(h)) {
            const p = e.state.tr.setSelection(h);
            if (d) {
                p.setMeta(je, a.pos);
            }
            e.dispatch(p);
        }
    }
    function o() {
        e.root.removeEventListener("mouseup", o);
        e.root.removeEventListener("dragstart", o);
        e.root.removeEventListener("mousemove", l);
        if (je.getState(e.state) != null) {
            e.dispatch(e.state.tr.setMeta(je, -1));
        }
    }
    function l(a) {
        const u = a;
        const c = je.getState(e.state);
        let d;
        if (c != null) {
            d = e.state.doc.resolve(c);
        } else if (di(e, u.target) != i && (d = Bt(e, t), !d)) {
            return o();
        }
        if (d) {
            s(d, u);
        }
    }
    e.root.addEventListener("mouseup", o);
    e.root.addEventListener("dragstart", o);
    e.root.addEventListener("mousemove", l);
}
function Jr(e, t, n) {
    if (!(e.state.selection instanceof T_1)) {
        return null;
    }
    const { $head } = e.state.selection;
    for(let r = $head.depth - 1; r >= 0; r--){
        const s = $head.node(r);
        if ((n < 0 ? $head.index(r) : $head.indexAfter(r)) != (n < 0 ? 0 : s.childCount)) {
            return null;
        }
        if (s.type.spec.tableRole == "cell" || s.type.spec.tableRole == "header_cell") {
            const o = $head.before(r);
            const l = t == "vert" ? n > 0 ? "down" : "up" : n > 0 ? "right" : "left";
            if (e.endOfTextblock(l)) {
                return o;
            }
            return null;
        }
    }
    return null;
}
function di(e, t) {
    for(; t && t != e.dom; t = t.parentNode){
        if (t.nodeName == "TD" || t.nodeName == "TH") {
            return t;
        }
    }
    return null;
}
function Bt(e, t) {
    const n = e.posAtCoords({
        left: t.clientX,
        top: t.clientY
    });
    if (!n) {
        return null;
    }
    const i = n.inside >= 0 ? n.inside : n.pos;
    return Ve(e.state.doc.resolve(i));
}
class Eu {
    constructor(t, n){
        this.node = t;
        this.defaultCellMinWidth = n;
        this.dom = document.createElement("div");
        this.dom.className = "tableWrapper";
        this.table = this.dom.appendChild(document.createElement("table"));
        this.table.style.setProperty("--default-cell-min-width", `${n}px`);
        this.colgroup = this.table.appendChild(document.createElement("colgroup"));
        tn(t, this.colgroup, this.table, n);
        this.contentDOM = this.table.appendChild(document.createElement("tbody"));
    }
    update(t) {
        if (t.type != this.node.type) {
            return false;
        }
        this.node = t;
        tn(t, this.colgroup, this.table, this.defaultCellMinWidth);
        return true;
    }
    ignoreMutation(t) {
        return t.type == "attributes" && (t.target == this.table || this.colgroup.contains(t.target));
    }
}
function tn(e, t, n, i, r, s) {
    let o = 0;
    let l = true;
    let t_firstChild = t.firstChild;
    const e_firstChild = e.firstChild;
    if (e_firstChild) {
        for(let d = 0, h = 0; d < e_firstChild.childCount; d++){
            const { colspan, colwidth } = e_firstChild.child(d).attrs;
            for(let g = 0; g < colspan; g++, h++){
                const k = r == h ? s : colwidth && colwidth[g];
                const b = k ? `${k}px` : "";
                o += k || i;
                if (!k) {
                    l = false;
                }
                if (t_firstChild) {
                    if (t_firstChild.style.width != b) {
                        t_firstChild.style.width = b;
                    }
                    t_firstChild = t_firstChild.nextSibling;
                } else {
                    const w = document.createElement("col");
                    w.style.width = b;
                    t.appendChild(w);
                }
            }
        }
        while(t_firstChild){
            let c;
            const d = t_firstChild.nextSibling;
            if (!((c = t_firstChild.parentNode) === null || c === undefined)) {
                c.removeChild(t_firstChild);
            }
            t_firstChild = d;
        }
        if (l) {
            n.style.width = `${o}px`;
            n.style.minWidth = "";
        } else {
            n.style.width = "";
            n.style.minWidth = `${o}px`;
        }
    }
}
const te = new a("tableColumnResizing");
function $u({ handleWidth = 5, cellMinWidth = 25, defaultCellMinWidth = 100, View = Eu, lastColumnResizable = true } = {}) {
    const s = new P_1({
        key: te,
        state: {
            init (o, l) {
                const u = s.spec?.props?.nodeViews;
                const name = F(l.schema).table.name;
                if (View && u) {
                    u[name] = (d, h)=>new View(d, defaultCellMinWidth, h);
                }
                return new zu(-1, false);
            },
            apply (o, l) {
                return l.apply(o);
            }
        },
        props: {
            attributes: (o)=>{
                const l = te.getState(o);
                if (l && l.activeHandle > -1) {
                    return {
                        class: "resize-cursor"
                    };
                }
                return {};
            },
            handleDOMEvents: {
                mousemove: (o, l)=>{
                    ju(o, l, handleWidth, lastColumnResizable);
                },
                mouseleave: (o)=>{
                    Au(o);
                },
                mousedown: (o, l)=>{
                    Nu(o, l, cellMinWidth, defaultCellMinWidth);
                }
            },
            decorations: (o)=>{
                const l = te.getState(o);
                if (l && l.activeHandle > -1) {
                    return _u(o, l.activeHandle);
                }
            },
            nodeViews: {}
        }
    });
    return s;
}
var zu = class wt {
    constructor(t, n){
        this.activeHandle = t;
        this.dragging = n;
    }
    apply(t) {
        const n = this;
        const i = t.getMeta(te);
        if (i && i.setHandle != null) {
            return new wt(i.setHandle, false);
        }
        if (i && i.setDragging !== undefined) {
            return new wt(n.activeHandle, i.setDragging);
        }
        if (n.activeHandle > -1 && t.docChanged) {
            let r = t.mapping.map(n.activeHandle, -1);
            if (!Jt(t.doc.resolve(r))) {
                r = -1;
            }
            return new wt(r, n.dragging);
        }
        return n;
    }
};
function ju(e, t, handleWidth, lastColumnResizable) {
    if (!e.editable) {
        return;
    }
    const r = te.getState(e.state);
    if (r && !r.dragging) {
        const s = Lu(t.target);
        let o = -1;
        if (s) {
            const { left, right } = s.getBoundingClientRect();
            if (t.clientX - left <= handleWidth) {
                o = hi(e, t, "left", handleWidth);
            } else if (right - t.clientX <= handleWidth) {
                o = hi(e, t, "right", handleWidth);
            }
        }
        if (o != r.activeHandle) {
            if (!lastColumnResizable && o !== -1) {
                const l = e.state.doc.resolve(o);
                const a = l.node(-1);
                const u = P.get(a);
                const c = l.start(-1);
                if (u.colCount(l.pos - c) + l.nodeAfter.attrs.colspan - 1 == u.width - 1) {
                    return;
                }
            }
            es(e, o);
        }
    }
}
function Au(e) {
    if (!e.editable) {
        return;
    }
    const t = te.getState(e.state);
    if (t && t.activeHandle > -1 && !t.dragging) {
        es(e, -1);
    }
}
function Nu(e, t, cellMinWidth, defaultCellMinWidth) {
    if (!e.editable) {
        return false;
    }
    const s = e.dom.ownerDocument.defaultView ?? window;
    const o = te.getState(e.state);
    if (!o || o.activeHandle == -1 || o.dragging) {
        return false;
    }
    const l = e.state.doc.nodeAt(o.activeHandle);
    const startWidth = Iu(e, o.activeHandle, l.attrs);
    e.dispatch(e.state.tr.setMeta(te, {
        setDragging: {
            startX: t.clientX,
            startWidth
        }
    }));
    function u(d) {
        s.removeEventListener("mouseup", u);
        s.removeEventListener("mousemove", c);
        const h = te.getState(e.state);
        if (h?.dragging) {
            Pu(e, h.activeHandle, pi(h.dragging, d, cellMinWidth));
            e.dispatch(e.state.tr.setMeta(te, {
                setDragging: null
            }));
        }
    }
    function c(d) {
        if (!d.which) {
            return u(d);
        }
        const h = te.getState(e.state);
        if (h && h.dragging) {
            const p = pi(h.dragging, d, cellMinWidth);
            fi(e, h.activeHandle, p, defaultCellMinWidth);
        }
    }
    fi(e, o.activeHandle, startWidth, defaultCellMinWidth);
    s.addEventListener("mouseup", u);
    s.addEventListener("mousemove", c);
    t.preventDefault();
    return true;
}
function Iu(e, activeHandle, { colspan, colwidth }) {
    const r = colwidth && colwidth[colwidth.length - 1];
    if (r) {
        return r;
    }
    const s = e.domAtPos(activeHandle);
    let offsetWidth = s.node.childNodes[s.offset].offsetWidth;
    let l = colspan;
    if (colwidth) {
        for(let a = 0; a < colspan; a++){
            if (colwidth[a]) {
                offsetWidth -= colwidth[a];
                l--;
            }
        }
    }
    return offsetWidth / l;
}
function Lu(e) {
    while(e && e.nodeName != "TD" && e.nodeName != "TH"){
        e = e.classList && e.classList.contains("ProseMirror") ? null : e.parentNode;
    }
    return e;
}
function hi(e, t, n, handleWidth) {
    const r = n == "right" ? -handleWidth : handleWidth;
    const s = e.posAtCoords({
        left: t.clientX + r,
        top: t.clientY
    });
    if (!s) {
        return -1;
    }
    const { pos } = s;
    const l = Ve(e.state.doc.resolve(pos));
    if (!l) {
        return -1;
    }
    if (n == "right") {
        return l.pos;
    }
    const a = P.get(l.node(-1));
    const u = l.start(-1);
    const c = a.map.indexOf(l.pos - u);
    if (c % a.width == 0) {
        return -1;
    }
    return u + a.map[c - 1];
}
function pi(dragging, t, cellMinWidth) {
    const i = t.clientX - dragging.startX;
    return Math.max(cellMinWidth, dragging.startWidth + i);
}
function es(e, setHandle) {
    e.dispatch(e.state.tr.setMeta(te, {
        setHandle
    }));
}
function Pu(e, activeHandle, n) {
    const i = e.state.doc.resolve(activeHandle);
    const r = i.node(-1);
    const s = P.get(r);
    const o = i.start(-1);
    const l = s.colCount(i.pos - o) + i.nodeAfter.attrs.colspan - 1;
    const a = e.state.tr;
    for(let u = 0; u < s.height; u++){
        const c = u * s.width + l;
        if (u && s.map[c] == s.map[c - s.width]) {
            continue;
        }
        const d = s.map[c];
        const h = r.nodeAt(d).attrs;
        const p = h.colspan == 1 ? 0 : l - s.colCount(d);
        if (h.colwidth && h.colwidth[p] == n) {
            continue;
        }
        const f = h.colwidth ? h.colwidth.slice() : qu(h.colspan);
        f[p] = n;
        a.setNodeMarkup(o + d, null, {
            ...h,
            colwidth: f
        });
    }
    if (a.docChanged) {
        e.dispatch(a);
    }
}
function fi(e, activeHandle, n, defaultCellMinWidth) {
    const r = e.state.doc.resolve(activeHandle);
    const s = r.node(-1);
    const o = r.start(-1);
    const l = P.get(s).colCount(r.pos - o) + r.nodeAfter.attrs.colspan - 1;
    let node = e.domAtPos(r.start(-1)).node;
    while(node && node.nodeName != "TABLE"){
        node = node.parentNode;
    }
    if (node) {
        tn(s, node.firstChild, node, defaultCellMinWidth, l, n);
    }
}
function qu(colspan) {
    return Array(colspan).fill(0);
}
function _u(e, activeHandle) {
    const n = [];
    const i = e.doc.resolve(activeHandle);
    const r = i.node(-1);
    if (!r) {
        return D.empty;
    }
    const s = P.get(r);
    const o = i.start(-1);
    const l = s.colCount(i.pos - o) + i.nodeAfter.attrs.colspan - 1;
    for(let u = 0; u < s.height; u++){
        const c = l + u * s.width;
        if ((l == s.width - 1 || s.map[c] != s.map[c + 1]) && (u == 0 || s.map[c] != s.map[c - s.width])) {
            let a;
            const d = s.map[c];
            const h = o + d + r.nodeAt(d).nodeSize - 1;
            const p = document.createElement("div");
            p.className = "column-resize-handle";
            if (!((a = te.getState(e)) === null || a === undefined) && a.dragging) {
                n.push(b_1.node(o + d, o + d + r.nodeAt(d).nodeSize, {
                    class: "column-resize-dragging"
                }));
            }
            n.push(b_1.widget(h, p));
        }
    }
    return D.create(e.doc, n);
}
function Ou({ allowTableNodeSelection = false } = {}) {
    return new P_1({
        key: je,
        state: {
            init () {
                return null;
            },
            apply (t, n) {
                const i = t.getMeta(je);
                if (i != null) {
                    if (i == -1) {
                        return null;
                    }
                    return i;
                }
                if (n == null || !t.docChanged) {
                    return n;
                }
                const { deleted, pos } = t.mapping.mapResult(n);
                if (deleted) {
                    return null;
                }
                return pos;
            }
        },
        props: {
            decorations,
            handleDOMEvents: {
                mousedown
            },
            createSelectionBetween (t) {
                if (je.getState(t.state) != null) {
                    return t.state.selection;
                }
                return null;
            },
            handleTripleClick,
            handleKeyDown,
            handlePaste
        },
        appendTransaction (t, n, i) {
            return tu(i, Zr(i, n), allowTableNodeSelection);
        }
    });
}
const ts = c_2.create({
    name: "tableCell",
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    content: "block+",
    addAttributes () {
        return {
            colspan: {
                default: 1
            },
            rowspan: {
                default: 1
            },
            colwidth: {
                default: null,
                parseHTML: (e)=>{
                    const i = e.getAttribute("colwidth");
                    const r = i ? i.split(",").map((s)=>parseInt(s, 10)) : null;
                    if (!r) {
                        const s = e.closest("table")?.querySelectorAll("colgroup > col");
                        const o = Array.from(e.parentElement?.children || []).indexOf(e);
                        if (o && o > -1 && s && s[o]) {
                            const l = s[o].getAttribute("width");
                            if (l) {
                                return [
                                    parseInt(l, 10)
                                ];
                            }
                            return null;
                        }
                    }
                    return r;
                }
            }
        };
    },
    tableRole: "cell",
    isolating: true,
    parseHTML () {
        return [
            {
                tag: "td"
            }
        ];
    },
    renderHTML ({ HTMLAttributes }) {
        return [
            "td",
            m(this.options.HTMLAttributes, HTMLAttributes),
            0
        ];
    }
});
const ns = c_2.create({
    name: "tableHeader",
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    content: "block+",
    addAttributes () {
        return {
            colspan: {
                default: 1
            },
            rowspan: {
                default: 1
            },
            colwidth: {
                default: null,
                parseHTML: (e)=>{
                    const t = e.getAttribute("colwidth");
                    if (t) {
                        return t.split(",").map((i)=>parseInt(i, 10));
                    }
                    return null;
                }
            }
        };
    },
    tableRole: "header_cell",
    isolating: true,
    parseHTML () {
        return [
            {
                tag: "th"
            }
        ];
    },
    renderHTML ({ HTMLAttributes }) {
        return [
            "th",
            m(this.options.HTMLAttributes, HTMLAttributes),
            0
        ];
    }
});
const is = c_2.create({
    name: "tableRow",
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    content: "(tableCell | tableHeader)*",
    tableRole: "row",
    parseHTML () {
        return [
            {
                tag: "tr"
            }
        ];
    },
    renderHTML ({ HTMLAttributes }) {
        return [
            "tr",
            m(this.options.HTMLAttributes, HTMLAttributes),
            0
        ];
    }
});
function nn(e, t) {
    if (t) {
        return [
            "width",
            `${Math.max(t, e)}px`
        ];
    }
    return [
        "min-width",
        `${e}px`
    ];
}
function mi(e, colgroup, table, i, r, s) {
    let o;
    let l = 0;
    let a = true;
    let t_firstChild = colgroup.firstChild;
    const e_firstChild = e.firstChild;
    if (e_firstChild !== null) {
        for(let h = 0, p = 0; h < e_firstChild.childCount; h += 1){
            const { colspan, colwidth } = e_firstChild.child(h).attrs;
            for(let k = 0; k < colspan; k += 1, p += 1){
                const b = r === p ? s : colwidth && colwidth[k];
                const w = b ? `${b}px` : "";
                l += b || i;
                if (!b) {
                    a = false;
                }
                if (t_firstChild) {
                    if (t_firstChild.style.width !== w) {
                        const [S, T] = nn(i, b);
                        t_firstChild.style.setProperty(S, T);
                    }
                    t_firstChild = t_firstChild.nextSibling;
                } else {
                    const S = document.createElement("col");
                    const [T, M] = nn(i, b);
                    S.style.setProperty(T, M);
                    colgroup.appendChild(S);
                }
            }
        }
    }
    while(t_firstChild){
        const h = t_firstChild.nextSibling;
        if (!((o = t_firstChild.parentNode) == null)) {
            o.removeChild(t_firstChild);
        }
        t_firstChild = h;
    }
    const d = e.attrs.style && typeof e.attrs.style === "string" && /\bwidth\s*:/i.test(e.attrs.style);
    if (a && !d) {
        table.style.width = `${l}px`;
        table.style.minWidth = "";
    } else {
        table.style.width = "";
        table.style.minWidth = `${l}px`;
    }
}
class View {
    constructor(e, t){
        this.node = e;
        this.cellMinWidth = t;
        this.dom = document.createElement("div");
        this.dom.className = "tableWrapper";
        this.table = this.dom.appendChild(document.createElement("table"));
        if (e.attrs.style) {
            this.table.style.cssText = e.attrs.style;
        }
        this.colgroup = this.table.appendChild(document.createElement("colgroup"));
        mi(e, this.colgroup, this.table, t);
        this.contentDOM = this.table.appendChild(document.createElement("tbody"));
    }
    update(e) {
        if (e.type !== this.node.type) {
            return false;
        }
        this.node = e;
        mi(e, this.colgroup, this.table, this.cellMinWidth);
        return true;
    }
    ignoreMutation(e) {
        const e_target = e.target;
        const n = this.dom.contains(e_target);
        const i = this.contentDOM.contains(e_target);
        return !!(n && !i && (e.type === "attributes" || e.type === "childList" || e.type === "characterData"));
    }
}
function Hu(node, cellMinWidth, n, i) {
    let r = 0;
    let s = true;
    const o = [];
    const e_firstChild = node.firstChild;
    if (!e_firstChild) {
        return {};
    }
    for(let d = 0, h = 0; d < e_firstChild.childCount; d += 1){
        const { colspan, colwidth } = e_firstChild.child(d).attrs;
        for(let g = 0; g < colspan; g += 1, h += 1){
            const k = n === h ? i : colwidth && colwidth[g];
            r += k || cellMinWidth;
            if (!k) {
                s = false;
            }
            const [b, w] = nn(cellMinWidth, k);
            o.push([
                "col",
                {
                    style: `${b}: ${w}`
                }
            ]);
        }
    }
    const tableWidth = s ? `${r}px` : "";
    const tableMinWidth = s ? "" : `${r}px`;
    return {
        colgroup: [
            "colgroup",
            {},
            ...o
        ],
        tableWidth,
        tableMinWidth
    };
}
function gi(e, t) {
    return e.createAndFill();
}
function Bu(schema) {
    if (schema.cached.tableNodeTypes) {
        return schema.cached.tableNodeTypes;
    }
    const t = {};
    Object.keys(schema.nodes).forEach((n)=>{
        const i = schema.nodes[n];
        if (i.spec.tableRole) {
            t[i.spec.tableRole] = i;
        }
    });
    schema.cached.tableNodeTypes = t;
    return t;
}
function Uu(schema, rows, cols, withHeaderRow, r) {
    const s = Bu(schema);
    const o = [];
    const l = [];
    for(let u = 0; u < cols; u += 1){
        const c = gi(s.cell);
        if (c) {
            l.push(c);
        }
        if (withHeaderRow) {
            const d = gi(s.header_cell);
            if (d) {
                o.push(d);
            }
        }
    }
    const a = [];
    for(let u = 0; u < rows; u += 1){
        a.push(s.row.createChecked(null, withHeaderRow && u === 0 ? o : l));
    }
    return s.table.createChecked(null, a);
}
function Fu(selection) {
    return selection instanceof I;
}
const pt = ({ editor })=>{
    const { selection } = editor.state;
    if (!Fu(selection)) {
        return false;
    }
    let n = 0;
    const i = K(selection.ranges[0].$from, (s)=>s.type.name === "table");
    i?.node.descendants((s)=>{
        if (s.type.name === "table") {
            return false;
        }
        if ([
            "tableCell",
            "tableHeader"
        ].includes(s.type.name)) {
            n += 1;
        }
    });
    if (n === selection.ranges.length) {
        editor.commands.deleteTable();
        return true;
    }
    return false;
};
const Wu = "";
function Vu(e) {
    return (e || "").replace(/\s+/g, " ").trim();
}
function Ku(e, t, n = {}) {
    const r = n.cellLineSeparator ?? Wu;
    if (!e || !e.content || e.content.length === 0) {
        return "";
    }
    const s = [];
    e.content.forEach((f)=>{
        const g = [];
        if (f.content) {
            f.content.forEach((k)=>{
                let b = "";
                if (k.content && Array.isArray(k.content) && k.content.length > 1) {
                    b = k.content.map((M)=>t.renderChildren(M)).join(r);
                } else {
                    b = k.content ? t.renderChildren(k.content) : "";
                }
                const w = Vu(b);
                const isHeader = k.type === "tableHeader";
                g.push({
                    text: w,
                    isHeader
                });
            });
        }
        s.push(g);
    });
    const o = s.reduce((acc, item)=>Math.max(acc, item.length), 0);
    if (o === 0) {
        return "";
    }
    const l = new Array(o).fill(0);
    s.forEach((f)=>{
        for(let k = 0; k < o; k += 1){
            const w = (f[k]?.text || "").length;
            if (w > l[k]) {
                l[k] = w;
            }
            if (l[k] < 3) {
                l[k] = 3;
            }
        }
    });
    const a = (f, g)=>f + " ".repeat(Math.max(0, g - f.length));
    const u = s[0];
    const c = u.some((f)=>f.isHeader);
    let d = `
`;
    const h = new Array(o).fill(0).map((f, g)=>c && u[g] && u[g].text || "");
    d += `| ${h.map((f, g)=>a(f, l[g])).join(" | ")} |
`;
    d += `| ${l.map((f)=>"-".repeat(Math.max(3, f))).join(" | ")} |
`;
    (c ? s.slice(1) : s).forEach((f)=>{
        d += `| ${new Array(o).fill(0).map((g, k)=>a(f[k] && f[k].text || "", l[k])).join(" | ")} |
`;
    });
    return d;
}
const Xu = Ku;
const rs = c_2.create({
    name: "table",
    addOptions () {
        return {
            HTMLAttributes: {},
            resizable: false,
            renderWrapper: false,
            handleWidth: 5,
            cellMinWidth: 25,
            View,
            lastColumnResizable: true,
            allowTableNodeSelection: false
        };
    },
    content: "tableRow+",
    tableRole: "table",
    isolating: true,
    group: "block",
    parseHTML () {
        return [
            {
                tag: "table"
            }
        ];
    },
    renderHTML ({ node, HTMLAttributes }) {
        const { colgroup, tableWidth, tableMinWidth } = Hu(node, this.options.cellMinWidth);
        const HTMLAttributes_style = HTMLAttributes.style;
        function o() {
            return HTMLAttributes_style || (tableWidth ? `width: ${tableWidth}` : `min-width: ${tableMinWidth}`);
        }
        const l = [
            "table",
            m(this.options.HTMLAttributes, HTMLAttributes, {
                style: o()
            }),
            colgroup,
            [
                "tbody",
                0
            ]
        ];
        if (this.options.renderWrapper) {
            return [
                "div",
                {
                    class: "tableWrapper"
                },
                l
            ];
        }
        return l;
    },
    parseMarkdown: (e, t)=>{
        const n = [];
        if (e.header) {
            const i = [];
            e.header.forEach((r)=>{
                i.push(t.createNode("tableHeader", {}, [
                    {
                        type: "paragraph",
                        content: t.parseInline(r.tokens)
                    }
                ]));
            });
            n.push(t.createNode("tableRow", {}, i));
        }
        if (e.rows) {
            e.rows.forEach((i)=>{
                const r = [];
                i.forEach((s)=>{
                    r.push(t.createNode("tableCell", {}, [
                        {
                            type: "paragraph",
                            content: t.parseInline(s.tokens)
                        }
                    ]));
                });
                n.push(t.createNode("tableRow", {}, r));
            });
        }
        return t.createNode("table", undefined, n);
    },
    renderMarkdown: (e, t)=>Xu(e, t),
    addCommands () {
        return {
            insertTable: ({ rows = 3, cols = 3, withHeaderRow = true } = {})=>({ tr, dispatch, editor })=>{
                    const o = Uu(editor.schema, rows, cols, withHeaderRow);
                    if (dispatch) {
                        const l = tr.selection.from + 1;
                        tr.replaceSelectionWith(o).scrollIntoView().setSelection(T_1.near(tr.doc.resolve(l)));
                    }
                    return true;
                },
            addColumnBefore: ()=>({ state, dispatch })=>ru(state, dispatch),
            addColumnAfter: ()=>({ state, dispatch })=>su(state, dispatch),
            deleteColumn: ()=>({ state, dispatch })=>lu(state, dispatch),
            addRowBefore: ()=>({ state, dispatch })=>uu(state, dispatch),
            addRowAfter: ()=>({ state, dispatch })=>cu(state, dispatch),
            deleteRow: ()=>({ state, dispatch })=>hu(state, dispatch),
            deleteTable: ()=>({ state, dispatch })=>yu(state, dispatch),
            mergeCells: ()=>({ state, dispatch })=>ri(state, dispatch),
            splitCell: ()=>({ state, dispatch })=>si(state, dispatch),
            toggleHeaderColumn: ()=>({ state, dispatch })=>et("column")(state, dispatch),
            toggleHeaderRow: ()=>({ state, dispatch })=>et("row")(state, dispatch),
            toggleHeaderCell: ()=>({ state, dispatch })=>ku(state, dispatch),
            mergeOrSplit: ()=>({ state, dispatch })=>{
                    if (ri(state, dispatch)) {
                        return true;
                    }
                    return si(state, dispatch);
                },
            setCellAttribute: (e, t)=>({ state, dispatch })=>mu(e, t)(state, dispatch),
            goToNextCell: ()=>({ state, dispatch })=>li(1)(state, dispatch),
            goToPreviousCell: ()=>({ state, dispatch })=>li(-1)(state, dispatch),
            fixTables: ()=>({ state, dispatch })=>{
                    if (dispatch) {
                        Zr(state);
                    }
                    return true;
                },
            setCellSelection: (e)=>({ tr, dispatch })=>{
                    if (dispatch) {
                        const i = I.create(tr.doc, e.anchorCell, e.headCell);
                        tr.setSelection(i);
                    }
                    return true;
                }
        };
    },
    addKeyboardShortcuts () {
        return {
            Tab: ()=>{
                if (this.editor.commands.goToNextCell()) {
                    return true;
                }
                if (this.editor.can().addRowAfter()) {
                    return this.editor.chain().addRowAfter().goToNextCell().run();
                }
                return false;
            },
            "Shift-Tab": ()=>this.editor.commands.goToPreviousCell(),
            Backspace: pt,
            "Mod-Backspace": pt,
            Delete: pt,
            "Mod-Delete": pt
        };
    },
    addProseMirrorPlugins () {
        return [
            ...this.options.resizable && this.editor.isEditable ? [
                $u({
                    handleWidth: this.options.handleWidth,
                    cellMinWidth: this.options.cellMinWidth,
                    defaultCellMinWidth: this.options.cellMinWidth,
                    View: this.options.View,
                    lastColumnResizable: this.options.lastColumnResizable
                })
            ] : [],
            Ou({
                allowTableNodeSelection: this.options.allowTableNodeSelection
            })
        ];
    },
    extendNodeSchema (e) {
        const t = {
            name: e.name,
            options: e.options,
            storage: e.storage
        };
        return {
            tableRole: H(J(e, "tableRole", t))
        };
    }
});
j_2.create({
    name: "tableKit",
    addExtensions () {
        const e = [];
        if (this.options.table !== false) {
            e.push(rs.configure(this.options.table));
        }
        if (this.options.tableCell !== false) {
            e.push(ts.configure(this.options.tableCell));
        }
        if (this.options.tableHeader !== false) {
            e.push(ns.configure(this.options.tableHeader));
        }
        if (this.options.tableRow !== false) {
            e.push(is.configure(this.options.tableRow));
        }
        return e;
    }
});
const Gu = "data-rte-numeric";
const ki = String.raw`[+\-\u2212\u00b1~\u2248<>\u2264\u2265]?[$\u20ac\u00a3\u00a5\u20b9]?\d(?:[\d,.\s]*\d)?\s?(?:%|pp|pts?|bps|[kmbt]|bn|x|\u00d7|ms|s|h|[kmgt]b)?`;
const bi = String.raw`${ki}(?:(?:\s/\s|\s?[\u2013\u2014]\s?|-|\sto\s)${ki})?`;
const Zu = new RegExp(String.raw`^(?:${bi}|\(${bi}\))$`, "i");
const Qu = /^(?:|[-\u2013\u2014]|n\/?a)$/i;
function Yu(e) {
    return Zu.test(e.trim());
}
function Ju(e, t) {
    const n = [];
    const i = new Map;
    const e_firstChild = e.firstChild;
    const s = e_firstChild != null && e_firstChild.childCount > 0 && e_firstChild.firstChild?.type.spec.tableRole === "header_cell";
    const o = P.get(e);
    for (const l of new Set(o.map)){
        const a = e.nodeAt(l);
        const u = a?.type.spec.tableRole;
        if (a == null || u !== "cell" && u !== "header_cell") {
            continue;
        }
        const c = o.findCell(l);
        if (c.left === 0) {
            continue;
        }
        const d = t + 1 + l;
        n.push({
            column: c.left,
            from: d,
            to: d + a.nodeSize
        });
        const h = a.textContent.trim();
        if (!(s && c.top === 0) && !Qu.test(h) && c.right - c.left === 1) {
            const f = Yu(h);
            i.set(c.left, (i.get(c.left) ?? true) && f);
        }
    }
    return n.filter((l)=>i.get(l.column) === true).map((l)=>b_1.node(l.from, l.to, {
            [Gu]: ""
        }));
}
function yi(doc) {
    const t = [];
    doc.descendants((n, i)=>{
        if (n.type.spec.tableRole === "table") {
            t.push(...Ju(n, i));
            return false;
        }
        return !n.isTextblock;
    });
    return D.create(doc, t);
}
const wi = new a("tableNumericColumns");
const ec = j_2.create({
    name: "tableNumericColumns",
    addProseMirrorPlugins () {
        return [
            new P_1({
                key: wi,
                state: {
                    init: (e, t)=>yi(t.doc),
                    apply: (e, t)=>{
                        if (e.docChanged) {
                            return yi(e.doc);
                        }
                        return t;
                    }
                },
                props: {
                    decorations: (e)=>wi.getState(e)
                }
            })
        ];
    }
});
function ss(e = {}) {
    ss.d = 304674990;
    const { resizable = true, cellMinWidth = 50, renderWrapper = false } = e;
    return {
        name: "table",
        extensions: [
            rs.configure({
                resizable,
                cellMinWidth,
                renderWrapper
            }),
            is,
            ts,
            ns,
            ec
        ]
    };
}
const ft = {
    base: {
        kVAEAm: "ui-1n2onr6",
        kzqmXN: "ui-h8yej3",
        kMwMTN: "ui-1wd3ewq",
        "--rte-font-size-base": "ui-1w1eso6",
        "--rte-line-height-base": "ui-hdtk5b",
        "--rte-font-size-h1": "ui-1bhc0ou",
        "--rte-font-size-h2": "ui-1itbsr7",
        "--rte-font-size-h3": "ui-ghy081",
        "--rte-font-size-h4": "ui-hqdr8q",
        "--rte-font-size-h5": "ui-1ty28fo",
        "--rte-font-size-h6": "ui-1w5m0s8",
        "--rte-line-height-h1": "ui-oadu56",
        "--rte-line-height-h2": "ui-1o021r9",
        "--rte-line-height-h3": "ui-mcpvhx",
        "--rte-line-height-h4": "ui-js6t6n",
        "--rte-line-height-h5": "ui-jiowi",
        "--rte-line-height-h6": "ui-6aacbi",
        "--rte-font-size-code": "ui-a990yz",
        "--rte-font-size-code-block": "ui-9jqggs",
        "--rte-font-size-list-item": "ui-jiawnd",
        "--rte-line-height-list-item": "ui-w9ju1b",
        "--rte-list-margin-top": "ui-m7v9km",
        "--rte-list-item-margin-top": "ui-115xbxj",
        "--rte-list-item-margin-bottom": "ui-1g9yf9w",
        "--rte-paragraph-margin-bottom": "ui-eolgjz",
        "--rte-heading-font-weight": "ui-secn4v",
        "--rte-heading-color": "ui-aano1t",
        "--rte-subheading-color": "ui-1utlljm",
        "--rte-heading-margin-top-h1": "ui-86qoyq",
        "--rte-heading-margin-top-h2": "ui-1ef30xd",
        "--rte-heading-margin-top-h3": "ui-19agh20",
        "--rte-heading-margin-bottom": "ui-ihklm6",
        "--rte-h1-margin-bottom": "ui-1vzrd2y",
        "--rte-h1-letter-spacing": "ui-1ynt2lg",
        "--rte-dek-color": "ui-fp8i22",
        "--rte-dek-margin-bottom": "ui-16amqy3",
        "--rte-h2-letter-spacing": "ui-t1zvuz",
        "--rte-caption-font-size": "ui-micdo5",
        "--rte-caption-line-height": "ui-114c9xy",
        "--rte-caption-font-style": "ui-1u9jekc",
        "--rte-caption-color": "ui-h58vv2",
        "--rte-caption-margin-top": "ui-1dnqxze",
        "--rte-caption-margin-bottom": "ui-1owbbwr",
        "--rte-paragraph-to-block-margin-bottom": "ui-13sfjiy",
        "--rte-strong-font-weight": "ui-t7ww7l",
        "--rte-callout-lead-display": "ui-y440ki",
        "--rte-callout-lead-margin-bottom": "ui-5ofy61",
        "--rte-callout-lead-font-weight": "ui-1xrre0a",
        "--rte-callout-lead-gap-size": "ui-4tgpn6",
        "--rte-code-bg": "ui-fx8zqq",
        "--rte-code-radius": "ui-11iepba",
        "--rte-code-block-bg": "ui-1iuntum",
        "--rte-code-block-radius": "ui-1wg8ft5",
        "--rte-code-block-padding-block": "ui-rj2lrc",
        "--rte-code-block-padding-inline": "ui-l1l1yq",
        "--rte-code-block-margin": "ui-1nkw7mo",
        "--rte-blockquote-border-width": "ui-zvlj3r",
        "--rte-blockquote-border-color": "ui-bugxvm",
        "--rte-blockquote-bg": "ui-i596jy",
        "--rte-blockquote-radius": "ui-os6aul",
        "--rte-blockquote-padding-block": "ui-zsoaqv",
        "--rte-blockquote-padding-inline-start": "ui-oq8b5x",
        "--rte-blockquote-padding-inline-end": "ui-nqvpji",
        "--rte-blockquote-margin": "ui-yk64rs",
        "--rte-blockquote-margin-bottom": "ui-74o8tj",
        "--rte-blockquote-color": "ui-o0f14h",
        "--rte-hr-border-width": "ui-1lo978e",
        "--rte-hr-color": "ui-8ag93u",
        "--rte-hr-margin": "ui-1y1w0ad",
        "--rte-link-color": "ui-13eaeiu",
        "--rte-list-marker-color": "ui-1q732sw",
        "--rte-list-margin-bottom": "ui-5m3s1m",
        "--rte-list-padding-left": "ui-a4b4tv",
        "--rte-list-item-display": "ui-n5gxq7",
        "--rte-list-item-position": "ui-1icvv4u",
        "--rte-ul-marker-column": "ui-il564y",
        "--rte-ol-marker-column": "ui-u0m67",
        "--rte-ul-marker-content": "ui-1c63q9d",
        "--rte-ol-marker-content": "ui-175l5xb",
        "--rte-task-item-margin-top": "ui-5flpja",
        "--rte-task-item-padding-block": "ui-1ilzhr1",
        "--rte-task-item-gap": "ui-1sucfu2",
        "--rte-task-item-checkbox-column": "ui-1h1p6z5",
        "--rte-task-item-checked-color": "ui-arbqz2",
        "--rte-task-item-checked-text-decoration": "ui-gd0odc",
        "--rte-data-fence-margin-top": "ui-1c3x331",
        "--rte-data-fence-margin-bottom": "ui-9j3a8e",
        "--rte-table-margin-top": "ui-hojr4r",
        "--rte-table-margin-bottom": "ui-uc0rgs",
        "--rte-table-outer-border-width": "ui-1hgq0r",
        "--rte-table-cell-border-width": "ui-1ut2v2h",
        "--rte-table-cell-vertical-border-width": "ui-181wqoi",
        "--rte-table-border-color": "ui-1cnuk1o",
        "--rte-table-radius": "ui-43jacm",
        "--rte-table-cell-padding-block": "ui-1afcu91",
        "--rte-table-cell-padding-inline": "ui-i8lvfr",
        "--rte-table-cell-font-size": "ui-wtkfda",
        "--rte-table-cell-line-height": "ui-de6g7v",
        "--rte-table-cell-letter-spacing": "ui-d3x60f",
        "--rte-table-column-gap": "ui-1d26jgk",
        "--rte-table-label-column-width": "ui-15a32gx",
        "--rte-image-figure-display": "ui-mgkg8f",
        "--rte-image-width": "ui-1pwnziq",
        "--rte-image-fill": "ui-1wrewk2",
        "--rte-image-min-height": "ui-14lhgn4",
        "--rte-image-margin-block": "ui-10xyeyr",
        "--rte-image-radius": "ui-1bbfqq2",
        "--rte-image-aspect-ratio": "ui-1b6nzlw",
        "--rte-image-object-fit": "ui-prekti",
        "--rte-image-frame-shadow": "ui-1n6jre5",
        "--rte-image-paragraph-margin-bottom": "ui-167ma64",
        "--rte-image-paragraph-line-height": "ui-1a9wa2g",
        "--rte-image-separator-vertical-align": "ui-1oj09w1",
        "--rte-image-caption-display": "ui-andcla",
        "--rte-image-caption-color": "ui-1o0v34y",
        "--rte-image-caption-font-size": "ui-13w9d6",
        "--rte-image-caption-line-height": "ui-96vum1",
        "--rte-table-header-font-size": "ui-daq3i0",
        "--rte-table-header-line-height": "ui-18cuoxq",
        "--rte-table-header-letter-spacing": "ui-lfrx58",
        "--rte-table-header-font-weight": "ui-fxk72w",
        "--rte-table-header-color": "ui-e7kcba",
        "--rte-table-header-padding-block-start": "ui-1ibqvf5",
        "--rte-table-header-padding-block-end": "ui-1tj71g4",
        "--rte-table-first-column-color": "ui-nfjlw0",
        "--rte-table-cell-text-align": "ui-1oqava2",
        "--rte-table-first-column-text-align": "ui-poseew",
        "--rte-table-cell-font-variant-numeric": "ui-rm9j8t",
        "--rte-table-first-column-font-variant-numeric": "ui-rpekxg",
        kGuDYH: "ui-z96sre",
        kLWn49: "ui-1g1ztsh",
        $$css: true
    },
    document: {
        "--rte-font-size-base": "ui-1w1eso6",
        "--rte-line-height-base": "ui-jp5p2m",
        $$css: true
    },
    page: {
        "--rte-page-ink": "ui-1nd5qc0",
        "--rte-page-ink-secondary": "ui-er3cwv",
        "--rte-page-ink-tertiary": "ui-1hiq0dx",
        "--rte-page-hairline-subtle": "ui-4luwr2",
        "--rte-page-hairline": "ui-notllf",
        "--rte-page-fill": "ui-ehyebp",
        "--rte-font-size-base": "ui-xoki1e",
        "--rte-line-height-base": "ui-uh81vb",
        "--rte-font-size-h1": "ui-9o62l8",
        "--rte-line-height-h1": "ui-4ec5g1",
        "--rte-font-size-h2": "ui-1it3add",
        "--rte-line-height-h2": "ui-f9fkpd",
        "--rte-font-size-h3": "ui-1e7hzsh",
        "--rte-line-height-h3": "ui-xwek16",
        "--rte-font-size-h4": "ui-1u9jk7k",
        "--rte-line-height-h4": "ui-s5u5mb",
        "--rte-font-size-h5": "ui-a72smn",
        "--rte-line-height-h5": "ui-1v56h6h",
        "--rte-font-size-h6": "ui-rua3fw",
        "--rte-line-height-h6": "ui-k6f3y2",
        "--rte-heading-font-weight": "ui-90lhti",
        "--rte-heading-color": "ui-miwrei",
        "--rte-subheading-color": "ui-1go9j9f",
        "--rte-heading-margin-top-h1": "ui-xoj6fx",
        "--rte-heading-margin-top-h2": "ui-h0m0mz",
        "--rte-heading-margin-top-h3": "ui-1dcukmu",
        "--rte-heading-margin-bottom": "ui-15n0dht",
        "--rte-h1-margin-bottom": "ui-1dklggc",
        "--rte-h1-letter-spacing": "ui-h6bh75",
        "--rte-dek-color": "ui-1yj82vd",
        "--rte-dek-margin-bottom": "ui-1olox22",
        "--rte-h2-letter-spacing": "ui-qinbmi",
        "--rte-caption-font-size": "ui-1m2wgk4",
        "--rte-caption-line-height": "ui-lunu71",
        "--rte-caption-font-style": "ui-1dju7vn",
        "--rte-caption-color": "ui-1t24zqm",
        "--rte-caption-margin-top": "ui-1kmr24k",
        "--rte-caption-margin-bottom": "ui-9orbcj",
        "--rte-paragraph-to-block-margin-bottom": "ui-1y7qui0",
        "--rte-strong-font-weight": "ui-13j1nn4",
        "--rte-callout-lead-display": "ui-1m7xdus",
        "--rte-callout-lead-margin-bottom": "ui-1r46yu3",
        "--rte-callout-lead-font-weight": "ui-11xmo9t",
        "--rte-callout-lead-gap-size": "ui-16a72ag",
        "--rte-paragraph-margin-bottom": "ui-szjysd",
        "--rte-list-margin-top": "ui-46aqmn",
        "--rte-list-margin-bottom": "ui-44dbwb",
        "--rte-list-padding-left": "ui-1t77zs0",
        "--rte-list-item-display": "ui-1kh9ti8",
        "--rte-list-item-position": "ui-c8m3vh",
        "--rte-ul-marker-column": "ui-1sundbr",
        "--rte-ol-marker-column": "ui-1vp5yuk",
        "--rte-ul-marker-content": "ui-9nib8z",
        "--rte-ol-marker-content": "ui-ywm0sn",
        "--rte-list-item-margin-top": "ui-8dcys4",
        "--rte-list-item-margin-bottom": "ui-t3ep11",
        "--rte-list-marker-color": "ui-85jcvo",
        "--rte-task-item-margin-top": "ui-1j1xxy1",
        "--rte-task-item-padding-block": "ui-ycdf97",
        "--rte-task-item-gap": "ui-1xcrnkf",
        "--rte-task-item-checkbox-column": "ui-1s7rhee",
        "--rte-task-item-checked-color": "ui-44bj9e",
        "--rte-task-item-checked-text-decoration": "ui-hz1jhl",
        "--rte-data-fence-margin-top": "ui-1mnuld3",
        "--rte-data-fence-margin-bottom": "ui-1i3l2l8",
        "--rte-font-size-code": "ui-tvp03r",
        "--rte-font-size-code-block": "ui-bgjpk3",
        "--rte-code-bg": "ui-xyzy00",
        "--rte-code-radius": "ui-jvvp5r",
        "--rte-code-block-bg": "ui-s2e1sb",
        "--rte-code-block-radius": "ui-1yugq4q",
        "--rte-code-block-padding-block": "ui-o32sjy",
        "--rte-code-block-padding-inline": "ui-armm2d",
        "--rte-code-block-margin": "ui-13f5t8o",
        "--rte-blockquote-border-width": "ui-1paeolz",
        "--rte-blockquote-border-color": "ui-fyg15c",
        "--rte-blockquote-bg": "ui-1cc5uww",
        "--rte-blockquote-radius": "ui-1w96v1h",
        "--rte-blockquote-padding-block": "ui-15mkb9p",
        "--rte-blockquote-padding-inline-start": "ui-1tg0bah",
        "--rte-blockquote-padding-inline-end": "ui-1e9v866",
        "--rte-blockquote-margin": "ui-191gqlz",
        "--rte-blockquote-margin-bottom": "ui-n6tr",
        "--rte-blockquote-color": "ui-1c0666n",
        "--rte-hr-border-width": "ui-mrv2xs",
        "--rte-hr-color": "ui-jwtf52",
        "--rte-hr-margin": "ui-bywelc",
        "--rte-link-color": "ui-jia67t",
        "--rte-table-outer-border-width": "ui-1dp8xng",
        "--rte-table-cell-border-width": "ui-6m6cud",
        "--rte-table-cell-vertical-border-width": "ui-1493hrl",
        "--rte-table-border-color": "ui-1qbci49",
        "--rte-table-radius": "ui-2sloxf",
        "--rte-table-margin-top": "ui-1gc588t",
        "--rte-table-margin-bottom": "ui-k641w4",
        "--rte-table-cell-padding-block": "ui-1xsydit",
        "--rte-table-cell-padding-inline": "ui-e21f03",
        "--rte-table-cell-font-size": "ui-y3anil",
        "--rte-table-cell-line-height": "ui-jwu0v8",
        "--rte-table-cell-letter-spacing": "ui-dvxd9s",
        "--rte-table-column-gap": "ui-jk15aw",
        "--rte-table-label-column-width": "ui-1yg80d0",
        "--rte-table-header-font-size": "ui-1vsrzq1",
        "--rte-table-header-line-height": "ui-1y8apo3",
        "--rte-table-header-letter-spacing": "ui-1tsb33c",
        "--rte-table-header-font-weight": "ui-zmfzyj",
        "--rte-table-header-color": "ui-rprin5",
        "--rte-table-header-padding-block-start": "ui-y2ot5c",
        "--rte-table-header-padding-block-end": "ui-kdb36f",
        "--rte-table-first-column-color": "ui-1afjhil",
        "--rte-table-cell-text-align": "ui-ywnu60",
        "--rte-table-first-column-text-align": "ui-10kyqg3",
        "--rte-table-cell-font-variant-numeric": "ui-2j0v7k",
        "--rte-table-first-column-font-variant-numeric": "ui-2px16u",
        "--rte-table-numeric-cell-text-align": "ui-l7ulcp",
        "--rte-table-numeric-cell-font-variant-numeric": "ui-n11zpz",
        "--rte-image-figure-display": "ui-1e0sypj",
        "--rte-image-width": "ui-11j95a9",
        "--rte-image-fill": "ui-1lqfm5v",
        "--rte-image-min-height": "ui-1ma1xnv",
        "--rte-image-margin-block": "ui-10xyeyr",
        "--rte-image-radius": "ui-1jucy67",
        "--rte-image-aspect-ratio": "ui-1gw0dyu",
        "--rte-image-object-fit": "ui-15t5xgf",
        "--rte-image-frame-shadow": "ui-hopxl2",
        "--rte-image-paragraph-margin-bottom": "ui-vpbntd",
        "--rte-image-paragraph-line-height": "ui-djlhf2",
        "--rte-image-separator-vertical-align": "ui-1dr81jg",
        "--rte-image-caption-display": "ui-jr49e8",
        "--rte-image-caption-color": "ui-1p7qbwu",
        "--rte-image-caption-font-size": "ui-anfazv",
        "--rte-image-caption-line-height": "ui-130kr6z",
        kMv6JI: "ui-d2maka",
        kb6lSQ: "ui-12oo3zp",
        k3NDMp: "ui-1ry4ofp",
        k1RR6C: "ui-gtyy3a",
        kAjhW9: "ui-vdzlec",
        kJfPWh: "ui-1bpp6ep",
        kwBpgL: "ui-y2nyxj",
        kecawK: "ui-125bw76",
        k2esvM: "ui-13gwbee",
        kHKRhl: "ui-1w8d87i",
        k8PhF9: "ui-uh5cre",
        kWlo99: "ui-1qmrrlw",
        kkItTo: "ui-lqyfh6",
        k5j1gm: "ui-1kr9hjl",
        kePOt9: "ui-1jef3yv",
        kiRfyW: "ui-13wn1ou",
        k8tS1V: "ui-leqez2",
        k9AS6a: "ui-kk8g2n",
        kHOEBO: "ui-w8v8xe",
        kqPU8G: "ui-528nkn",
        kyG5zt: "ui-12eb4fp",
        k6H72Y: "ui-ujx92o",
        kFB87B: "ui-1a5drbi",
        kN15MO: "ui-1l5shbw",
        $$css: true
    },
    nonInteractive: {
        kkrTdU: "ui-t0e3qv",
        krczoA: "ui-1h83hj0",
        $$css: true
    }
};
const tc = {
    base: {
        kVAEAm: "ui-1n2onr6",
        kAzted: "ui-1xaadd7",
        kfSwDN: "ui-1hx0egp",
        kO7zv1: "ui-1rh3ycu",
        kVeWk8: "ui-1r93fqe",
        kLApEV: "ui-5tzr1x",
        ktt3ro: "ui-gvrez4",
        kpHEKb: "ui-kqkpty",
        kXCwPK: "ui-1d4ixsa",
        kQFoCL: "ui-18r89ij",
        kWgWch: "ui-1r55cr4",
        kf0CGi: "ui-mtx1lz",
        kil9wj: "ui-ostxn8",
        kp6Lxb: "ui-btkxa0",
        kDC0T2: "ui-5le2uw",
        kPgPuk: "ui-smcoow",
        kvM5tR: "ui-yckse1",
        kxbImd: "ui-14p742m",
        klRsSg: "ui-1wcq1u3",
        kOawZI: "ui-qm7f3l",
        kO9ttH: "ui-163ow5f",
        kFpTCV: "ui-9u4ceu",
        kmFXOs: "ui-2tpvjn",
        kSHc1H: "ui-x1jmxi",
        kTlv8Q: "ui-11yyi96",
        kMxHJu: "ui-ige6cy",
        kyy6iT: "ui-1y2j9yk",
        kYqbTH: "ui-qnfad",
        kF27cf: "ui-cou92t",
        khbeC: "ui-4iwnk7",
        ku3dej: "ui-1fkpc3v",
        kE2ud3: "ui-1qhqs7u",
        kmQpsa: "ui-ovlsqe",
        kxxBj0: "ui-9hbfot",
        kugjHy: "ui-1lvjfxx",
        kDiz93: "ui-pvczvn",
        kO0ygU: "ui-1u2ijzh",
        kEtJo1: "ui-pyqudn",
        kYCPxb: "ui-1kpws8s",
        kQLu0w: "ui-1v2ojf8",
        kZuvrB: "ui-1r1c2s1",
        ku34GP: "ui-u7lt4f",
        kDUgZ6: "ui-3hodj6",
        kWuGdX: "ui-1g59prk",
        kZ593g: "ui-m3dk90",
        kBemBT: "ui-1pki70a",
        k9EcxL: "ui-hdsbvp",
        kO2PpL: "ui-1ewaork",
        k9mdrT: "ui-1794u5q",
        kvE2Xz: "ui-7a4fex",
        kSKvQ4: "ui-4ezs9n",
        kfnnIQ: "ui-1mmfas",
        k74MV0: "ui-6mlfom",
        kbD7vp: "ui-1uah6o5",
        kGkPSh: "ui-1ysv2p4",
        kW0Jit: "ui-1xmj4q4",
        kFxSP6: "ui-b5qn3k",
        k8grnK: "ui-jre6g5",
        k4VRqg: "ui-1hhr5vn",
        kLUM6h: "ui-2mr0ar",
        kIVUAW: "ui-150t8v1",
        kGJB9h: "ui-zl6jo2",
        kZHU9v: "ui-bzfwq1",
        kUhJav: "ui-vrmnfb",
        k3oLYR: "ui-2k0ckb",
        k3NfZ: "ui-d4bhvz",
        kv9JdX: "ui-lzuolk",
        k8vc4C: "ui-g8wmm6",
        kJRwwC: "ui-1d57cbc",
        kbR9MY: "ui-1jfqr6z",
        kGeCJK: "ui-67fulm",
        kcqLf0: "ui-1oovvj4",
        k80kcD: "ui-ul7mzx",
        krxs2d: "ui-osr1dx",
        khkCK0: "ui-1fom552",
        kvqdOY: "ui-13jpfy5",
        kl30Zd: "ui-1og4rei",
        kkFpZg: "ui-10seblz",
        k2304h: "ui-kkiy45",
        kXc4A7: "ui-sfl86j",
        k8UYwm: "ui-1bbgc4z",
        kEksT3: "ui-1vuf1dt",
        k5TSCv: "ui-jqrjwb",
        ksnUjR: "ui-csk6ff",
        kWPg5n: "ui-9m9n62",
        k5HjYs: "ui-1ogoj5s",
        kyWvT6: "ui-42v8sf",
        kE2Frl: "ui-775r4b",
        kBxnSn: "ui-37b3g5",
        klNqPQ: "ui-1knlef1",
        ki7dGu: "ui-spaf5t",
        kHsCg1: "ui-16ab2sr",
        kLYOnq: "ui-8s6anh",
        klKkH3: "ui-1mm46sn",
        kVTE87: "ui-s8dlhk",
        k1kCzw: "ui-15w343f",
        k9d0Ky: "ui-1kxyro7",
        kyU8p7: "ui-lwmghi",
        kKZTbw: "ui-a3wqln",
        kWh5E4: "ui-njny09",
        kUz90h: "ui-1ssch16",
        kgSRJD: "ui-1xkur6j",
        kQnBbj: "ui-4or90v",
        kRZBvo: "ui-1m0y9pt",
        kwo0De: "ui-185znoo",
        kQUcRi: "ui-vowotf",
        ksjBOa: "ui-n8azvm",
        kNbRaD: "ui-1ahvc7m",
        k9UNVT: "ui-c2x3rw",
        kdbrXJ: "ui-drt2ws",
        kAMcqz: "ui-1mgjhb6",
        kUQ5jO: "ui-156iz84",
        kCfSEK: "ui-1626in2",
        kzsHTc: "ui-1h6d3sa",
        kCTMlV: "ui-1fkwl3l",
        k8NCZg: "ui-1l90lsa",
        kLtsGx: "ui-1ujwq14",
        kYsVMA: "ui-11tln50",
        kdyMcO: "ui-1zyajp",
        kn4sjs: "ui-ml98jx",
        kGfsWB: "ui-100nfci",
        kRCqyy: "ui-8sip80",
        kXwSpS: "ui-1ww8fh2",
        khlrYn: "ui-1k4e3u1",
        kYikhI: "ui-13u72bs",
        kitoy5: "ui-1tuiv50",
        kAoAzs: "ui-8590b0",
        kN6VYb: "ui-d8de3i",
        kfDItn: "ui-1nw1w8w",
        kohZ1G: "ui-1b55xvl",
        kPJ6cS: "ui-13gvc8r",
        kobuMT: "ui-4bjffg",
        kyIpZr: "ui-ke0cyv",
        kAw1EB: "ui-1frqnko",
        kAIr5N: "ui-156urir",
        k55JdA: "ui-19y6hls",
        knBRRz: "ui-1guqw6e",
        kcmJxs: "ui-60d9gn",
        kQD07F: "ui-pp2bu8",
        k427r7: "ui-1p6nim8",
        kIgK1O: "ui-9x05i0",
        kR9yEz: "ui-1dwrpt1",
        k5puGx: "ui-xtvz8n",
        kwevM7: "ui-spd053",
        kYrE2V: "ui-rghuh5",
        k1As4q: "ui-16nv3k5",
        kHCSnf: "ui-1nuq48n",
        kurM1R: "ui-1l52w94",
        k23Bhe: "ui-11gpycz",
        k9xWfi: "ui-hwycuw",
        k5kNfE: "ui-hug9iy",
        kysUJc: "ui-hody31",
        kR14b1: "ui-6pl2ab",
        kzQpzz: "ui-1h70bg4",
        kKseyN: "ui-1bkdzcx",
        kmijHb: "ui-otcoje",
        kpPYys: "ui-8lc8mh",
        ko9EfY: "ui-vj16oj",
        kKgB4e: "ui-znjbym",
        kzFVOJ: "ui-138hyj9",
        k8MMSr: "ui-18asrg4",
        kVCHq6: "ui-qjb7so",
        kmwtbp: "ui-1676k01",
        kUYSYK: "ui-565zpm",
        klWQFo: "ui-1humd08",
        kEGJQn: "ui-pfuulf",
        kfwnMw: "ui-1yezw1u",
        kNRACG: "ui-1gw6pdl",
        k5pTwd: "ui-1jtrguv",
        knsnsU: "ui-1m9fati",
        kz4enx: "ui-1rpyi6g",
        kJXu95: "ui-1hm90jn",
        kvIBL5: "ui-f1fcr6",
        kV1ziD: "ui-1ah13d9",
        kkalW2: "ui-1puz7zt",
        kdhriH: "ui-2zgjm",
        kSBC6J: "ui-m4rdma",
        kbKlEN: "ui-ca47hx",
        k7tgew: "ui-15a9ofu",
        kW6zHA: "ui-10s85h8",
        kONVdb: "ui-1izoytf",
        kdWeyX: "ui-1wsyhr8",
        k5E9uD: "ui-2iff6s",
        kCqNPo: "ui-12008y7",
        kcuEYb: "ui-zsoyaj",
        kiny5z: "ui-c77zco",
        kvNW0L: "ui-m18qhj",
        kJFUfF: "ui-1jn1bwd",
        kLTITk: "ui-1yuikeu",
        kWGHOp: "ui-1upal0d",
        kScwGe: "ui-93jyqv",
        kptwQY: "ui-ddqfc4",
        kn8cqR: "ui-7lhkba",
        kaRGMr: "ui-16mby7w",
        k7Zl3x: "ui-90mqnz",
        kX9RCE: "ui-meksgl",
        k8KXnz: "ui-dqg4cb",
        kOKGTB: "ui-lgxtzr",
        k4wLmN: "ui-1iesvd0",
        kPAW6h: "ui-c0i4bb",
        kSbivx: "ui-1pe802c",
        kN5Ne6: "ui-533myt",
        kIYuyN: "ui-j3lbx6",
        k1uGpX: "ui-11f6rrl",
        kSjgpj: "ui-19bqz0t",
        kXLQKv: "ui-1rb3ju6",
        kFjQU8: "ui-dlu5df",
        kyWUBC: "ui-xg5q2o",
        kYvg2z: "ui-cfsmtw",
        kT5M3V: "ui-1d3pqjc",
        k5BrEm: "ui-prs008",
        kwYrv2: "ui-1tvzkj",
        kQaNv6: "ui-5g1lnf",
        kRLL9n: "ui-mawbw4",
        krv7dP: "ui-x3f0k1",
        kgK3zs: "ui-104nu9q",
        kDUoiA: "ui-18lgrcb",
        kf8RFJ: "ui-11lhvzu",
        k2X42H: "ui-5gtke5",
        kptOsd: "ui-13t9uge",
        kHQNfD: "ui-9j44ht",
        k2CEd2: "ui-2ve76g",
        kEXsTK: "ui-9wuaob",
        k4pHzB: "ui-hxcdln",
        ko9fjD: "ui-1m7gbiw",
        kbhKqD: "ui-8glzhx",
        kuW0R6: "ui-1t61rui",
        kbEQDr: "ui-1315aoq",
        k6WIcR: "ui-qnyt4e",
        kf2t96: "ui-gamoet",
        k8qA9z: "ui-1yu9d4m",
        kxYkvn: "ui-z67ggg",
        kKzz2y: "ui-1ddr2lw",
        kFYVqi: "ui-6f0ste",
        kD8Y0j: "ui-1qz7zzm",
        ki8BWG: "ui-eqtalk",
        kTnwxd: "ui-12ty6i8",
        kSBpKf: "ui-1jtpj2w",
        krsjBk: "ui-16ba2iw",
        kYCwdL: "ui-r41iwn",
        kJuHSh: "ui-1gv4v5x",
        kAslpx: "ui-evc4wx",
        kC1EXy: "ui-1jzescb",
        kpHKrX: "ui-vnft78",
        k8fhxE: "ui-ty2glq",
        kRiST5: "ui-lhhzqy",
        kxaNRU: "ui-6bdm5h",
        kbiIDB: "ui-1l2uct6",
        kI7nlW: "ui-r715en",
        kFaY0j: "ui-ww2lco",
        kSMMq4: "ui-hvorre",
        kpCPar: "ui-1nhrwvm",
        kis2hx: "ui-qoz0ng",
        ktVrr0: "ui-up9952",
        kaj4Hh: "ui-122dkk1",
        kY7k3m: "ui-1le9rdw",
        kTyzzW: "ui-1ij6n4h",
        kpcmZd: "ui-1ed4f4r",
        kGcZmm: "ui-16iyhsx",
        kJeoLC: "ui-1ts9wjs",
        kPhO2y: "ui-yubvf0",
        kNCqBL: "ui-1nxk1s1",
        kKf6EL: "ui-179jv0q",
        kjH0EC: "ui-cxwk9u",
        kgU7L2: "ui-1al12tu",
        k8E5Cp: "ui-144c94f",
        kO1nNz: "ui-gm25iv",
        kyg1Yg: "ui-100239r",
        kU3MCs: "ui-lx2vd4",
        kNOLMd: "ui-fzpeez",
        k8uA6S: "ui-185278x",
        kQ8H66: "ui-1vb5b1b",
        kzr090: "ui-gkcnn5",
        keUeYG: "ui-1w3ae5x",
        kimhef: "ui-1boeof",
        kdNgpO: "ui-1qrkj96",
        kvf2Q7: "ui-3uhuml",
        k9brk5: "ui-eal660",
        kcCbVZ: "ui-1nrwl1g",
        kU1Q7F: "ui-r4d7jc",
        khIk0V: "ui-tbwnpm",
        kiwlGj: "ui-iyhro0",
        k5V15r: "ui-120vbo7",
        kv25JP: "ui-1pmzcyl",
        k9dF2G: "ui-k03tj9",
        kZXHHS: "ui-9j0ius",
        kUm8B6: "ui-12gw25k",
        kwBlFR: "ui-pus874",
        kzbfS8: "ui-dw0haa",
        kQlZJl: "ui-1yjeo3p",
        kjjyVm: "ui-ntgihz",
        kM3qw8: "ui-t4z08f",
        kjrNhu: "ui-1ynlo3j",
        k6ubzF: "ui-x5grgu",
        kv0GwT: "ui-16cvzho",
        kVqI3i: "ui-13uo978",
        kUF9MP: "ui-yi3gi3",
        kf6E84: "ui-19kf2t2",
        kz8zZX: "ui-u29755",
        kC9vly: "ui-8evzsd",
        khSQtu: "ui-1w7qy8n",
        kD59yM: "ui-oznros",
        kTCiVU: "ui-wgopyu",
        k9nXWJ: "ui-ss5iz6",
        kUg280: "ui-tzjvxb",
        kBqarS: "ui-b6aa93",
        k62WAZ: "ui-1wn08e9",
        kpBjUl: "ui-1ridbjw",
        kIkivi: "ui-55kzob",
        kgP8MP: "ui-18lswn8",
        kMpfmC: "ui-3zdv1",
        kVaCUT: "ui-t0m49v",
        kWpKW6: "ui-8m8pu1",
        kRMejj: "ui-1qm12i8",
        kz77Mq: "ui-1psp19d",
        k5XkB3: "ui-1khysz9",
        kYmk87: "ui-9hxe4g",
        k7DPZe: "ui-1yt1cpp",
        kwoA8i: "ui-1acshxv",
        kgDt15: "ui-1rfwfmb",
        k6DShn: "ui-t89x30",
        kSTiKC: "ui-18zgvij",
        kZEYUd: "ui-tym71y",
        k5wEBS: "ui-afabgv",
        kBwQjr: "ui-echx4t",
        k4bvey: "ui-szsqqp",
        kotfQD: "ui-1ip8vcx",
        ksvPMe: "ui-1b2g504",
        kaBORO: "ui-ikw2yi",
        kR8mwz: "ui-86g9zc",
        kcqXSU: "ui-oca3ad",
        k6fqBP: "ui-2f0u8y",
        k1nfJ4: "ui-1hrd52d",
        kKnX8Y: "ui-h1ucub",
        kfNgfJ: "ui-12qngst",
        kffCTV: "ui-1lsu4hc",
        kVANeB: "ui-qy9vlx",
        kYwqkq: "ui-fs33xg",
        kX9Upi: "ui-evwu85",
        kwQPUN: "ui-wrxhyn",
        kZaCMJ: "ui-19cedn7",
        kXYyqi: "ui-i3t73q",
        kTmqEE: "ui-1drdtfo",
        kfh3gr: "ui-2yzgll",
        kf0cIf: "ui-1mnon03",
        kYGzXR: "ui-1jhg7rx",
        k5j0RI: "ui-w185oe",
        kLaArY: "ui-14m485s",
        k2aOi2: "ui-ewqm0f",
        kflxFY: "ui-1vkwvo8",
        kFcs5c: "ui-hm4ci4",
        kFMxMF: "ui-1q9ylus",
        kxZvPv: "ui-1vuo48m",
        kLdosf: "ui-1mn1zov",
        kBjj2Q: "ui-znl347",
        knzQDE: "ui-iorat5",
        kC4eW8: "ui-1uubby3",
        ki6xrA: "ui-10kzyqe",
        kLq4vH: "ui-1fklu6x",
        kIz9Sd: "ui-1810i2z",
        k7mJBi: "ui-jwo3w8",
        k6IF85: "ui-1j2qchi",
        kARJeu: "ui-1p6ucw3",
        k1ruBd: "ui-135tdbh",
        kTDeHU: "ui-1k41zi",
        k3AlaN: "ui-1xi6i47",
        kXdrnk: "ui-hbopxd",
        kdu8dV: "ui-2wo46w",
        kKgdP0: "ui-1l2k7ee",
        k7skeA: "ui-xl8o5x",
        k1UoS6: "ui-1oualgv",
        kAnMsB: "ui-1hfg5n0",
        kzIkSg: "ui-1hdpdz0",
        k8W194: "ui-1jjdt1k",
        kJvQdl: "ui-18s2oi",
        knwVvI: "ui-1o6h758",
        ktetYC: "ui-d5qvbq",
        k9bMa2: "ui-38pg7q",
        ki8Tt5: "ui-1xdkzg1",
        kGkAqY: "ui-1y1vmg8",
        $$css: true
    }
};
const nc = {
    base: {
        kVAEAm: "ui-10l6tqk",
        k87sOh: "ui-13vifvy",
        kbCHJM: "ui-u96u03",
        kfzvcC: "ui-47corl",
        kMwMTN: "ui-4b2ntj",
        kfSwDN: "ui-87ps6o",
        kB7OPa: "ui-9f619",
        kzqmXN: "ui-h8yej3",
        kLKAdn: "ui-bfkjp0",
        kpe85a: "ui-1arjqg4",
        kGO01o: "ui-1e826z5",
        kE3dHu: "ui-fdsagq",
        $$css: true
    }
};
const ic = {
    base: {
        k1xSpc: "ui-1rg5ohu",
        kzqmXN: "ui-fo62xy",
        kZKoxP: "ui-1q3kd3q",
        kWkggS: "ui-mak4db",
        kKVMdj: "ui-l4nlbe ui-1aquc0h",
        k44tkh: "ui-1q3qbx4",
        kyAemX: "ui-dr7l65",
        ko0y90: "ui-a4qsjk",
        kXLuUW: "ui-1uuroth",
        koQZXg: "ui-gsvwom",
        $$css: true
    }
};
function rc(e) {
    return [
        ft.base,
        e.variant === "document" || e.variant === "page" ? ft.document : null,
        e.variant === "page" ? ft.page : null,
        e.interactive ? null : ft.nonInteractive
    ];
}
function sc() {
    return tc.base;
}
function oc() {
    return nc.base;
}
function lc() {
    return ic.base;
}
const xi = new a("documentRhythm");
function ac(node) {
    if (node.childCount === 0) {
        return false;
    }
    let t = true;
    node.forEach((n)=>{
        if (!n.isText || !n.marks.some((i)=>i.type.name === "italic")) {
            t = false;
        }
    });
    return t;
}
function os(e) {
    return e.type.name === "paragraph" && e.childCount === 1 && e.firstChild?.type.name === "image";
}
function uc(e) {
    if (e.type.name === "heading") {
        return false;
    }
    return e.type.name !== "paragraph" || os(e);
}
function cc({ firstChild }, offset) {
    if (firstChild === null || firstChild.type.name !== "paragraph" || firstChild.childCount < 2) {
        return null;
    }
    const i = firstChild.child(0);
    const r = firstChild.child(1);
    if (!i.isText || !i.marks.some((o)=>o.type.name === "bold") || !r.isText || r.marks.length > 0 || !r.text?.startsWith(" ")) {
        return null;
    }
    const s = offset + 2 + i.nodeSize;
    return b_1.inline(s, s + 1, {
        "data-rte-lead-gap": ""
    });
}
function vi(doc) {
    const t = [];
    doc.forEach((node, r)=>{
        t.push({
            node,
            offset: r
        });
    });
    const n = [];
    doc.descendants((i, r)=>{
        const start = i.attrs.start;
        if (i.type.name === "orderedList" && typeof start === "number" && start !== 1) {
            n.push(b_1.node(r, r + i.nodeSize, {
                style: `--rte-list-counter-start: ${start - 1}`
            }));
        }
    });
    t.forEach(({ node, offset }, s)=>{
        if (node.type.name === "blockquote") {
            const u = cc(node, offset);
            if (u !== null) {
                n.push(u);
            }
            return;
        }
        if (node.type.name !== "paragraph") {
            return;
        }
        const o = t[s - 1]?.node;
        const l = t[s + 1]?.node;
        const a = {};
        if (os(node)) {
            a["data-rte-figure"] = "";
        } else if (o !== undefined && o.type.name === "heading" && typeof o.attrs.level === "number" && o.attrs.level >= 2 && ac(node)) {
            a["data-rte-caption"] = "";
        }
        if (l !== undefined && uc(l) && a["data-rte-caption"] === undefined) {
            a["data-rte-before-block"] = "";
        }
        if (Object.keys(a).length > 0) {
            n.push(b_1.node(offset, offset + node.nodeSize, a));
        }
    });
    return D.create(doc, n);
}
const dc = j_2.create({
    name: "documentRhythm",
    addProseMirrorPlugins () {
        return [
            new P_1({
                key: xi,
                state: {
                    init: (e, t)=>vi(t.doc),
                    apply: (e, t)=>{
                        if (e.docChanged) {
                            return vi(e.doc);
                        }
                        return t;
                    }
                },
                props: {
                    decorations: (e)=>xi.getState(e) ?? null
                }
            })
        ];
    }
});
function hc(e) {
    e.preventDefault();
}
function Ls1Component({ initialHref, onSubmit, onCancel }) {
    Ls1Component.d = 2865343444;
    const [i, setI] = r_1.useState(initialHref);
    const sRef = r_1.useRef(null);
    const oRef = r_1.useRef(false);
    const l = ()=>{
        if (!oRef.current) {
            oRef.current = true;
            onSubmit(i);
        }
    };
    const a = (refocusEditor)=>{
        if (!oRef.current) {
            oRef.current = true;
            onCancel({
                refocusEditor
            });
        }
    };
    const onKeyDown = (d)=>{
        if (d.key === "Enter") {
            d.preventDefault();
            l();
        } else if (d.key === "Escape") {
            d.preventDefault();
            d.stopPropagation();
            a(true);
        }
    };
    const onBlur = (d)=>{
        if (!(d.relatedTarget instanceof Node && sRef.current?.contains(d.relatedTarget))) {
            a(false);
        }
    };
    return <div ref={sRef} className="ui-78zum5 ui-6s0dn4 ui-11twubx ui-mpze1h ui-xk0z11"><W name="link" size="sm" className="ui-2lah0s ui-1mh7f6w" aria-hidden/><input className="ui-jyslct ui-c342km ui-ng3xce ui-jbqb8w ui-1a2a7pz ui-1oysuqx ui-1wd3ewq ui-11wthnw ui-1ja60sm ui-jb2p0i ui-ltfok3" type="text" value={i} placeholder="Paste or type a link…" aria-label="Link URL" autoFocus onFocus={(d)=>d.currentTarget.select()} onChange={(d)=>setI(d.currentTarget.value)} onKeyDown={onKeyDown} onBlur={onBlur}/><Gs icon="check" size="md" iconSize="base" aria-label="Apply link" onPointerDown={hc} onClick={l} onBlur={onBlur}/></div>;
}
function pc(e, t) {
    const n = Math.min(e.top, t.top);
    const i = Math.max(e.bottom, t.bottom);
    const r = Math.min(e.left, t.left);
    const o = Math.max(e.right, t.right) - r;
    const l = i - n;
    const a = r;
    return new DOMRect(a, n, o, l);
}
class fc {
    constructor({ editor, element, view, updateDelay = 250, resizeDelay = 60, shouldShow, appendTo, getReferencedVirtualElement, options }){
        this.preventHide = false;
        this.isVisible = false;
        this.scrollTarget = window;
        this.floatingUIOptions = {
            strategy: "absolute",
            placement: "top",
            offset: 8,
            flip: {},
            shift: {},
            arrow: false,
            size: false,
            autoPlacement: false,
            hide: false,
            inline: false,
            onShow: undefined,
            onHide: undefined,
            onUpdate: undefined,
            onDestroy: undefined
        };
        this.shouldShow = ({ view, state, from, to })=>{
            const { doc, selection } = state;
            const { empty } = selection;
            const b = !doc.textBetween(from, to).length && L(state.selection);
            const w = this.element.contains(document.activeElement);
            return !(!(view.hasFocus() || w) || empty || b || !this.editor.isEditable);
        };
        this.mousedownHandler = ()=>{
            this.preventHide = true;
        };
        this.dragstartHandler = ()=>{
            this.hide();
        };
        this.resizeHandler = ()=>{
            if (this.resizeDebounceTimer) {
                clearTimeout(this.resizeDebounceTimer);
            }
            this.resizeDebounceTimer = window.setTimeout(()=>{
                this.updatePosition();
            }, this.resizeDelay);
        };
        this.focusHandler = ()=>{
            setTimeout(()=>this.update(this.editor.view));
        };
        this.blurHandler = ({ event })=>{
            var d;
            if (this.editor.isDestroyed) {
                this.destroy();
                return;
            }
            if (this.preventHide) {
                this.preventHide = false;
                return;
            }
            event?.relatedTarget && (d = this.element.parentNode) != null && d.contains(event.relatedTarget) || event?.relatedTarget !== this.editor.view.dom && this.hide();
        };
        this.handleDebouncedUpdate = (c, d)=>{
            const h = !d?.selection.eq(c.state.selection);
            const p = !d?.doc.eq(c.state.doc);
            if (!(!h && !p)) {
                if (this.updateDebounceTimer) {
                    clearTimeout(this.updateDebounceTimer);
                }
                this.updateDebounceTimer = window.setTimeout(()=>{
                    this.updateHandler(c, h, p, d);
                }, this.updateDelay);
            }
        };
        this.updateHandler = ({ composing }, d, h, p)=>{
            if (composing || !d && !h) {
                return;
            }
            if (!this.getShouldShow(p)) {
                this.hide();
                return;
            }
            this.updatePosition();
            this.show();
        };
        this.transactionHandler = ({ transaction })=>{
            if (transaction.getMeta("bubbleMenu") === "updatePosition") {
                this.updatePosition();
            }
        };
        this.editor = editor;
        this.element = element;
        this.view = view;
        this.updateDelay = updateDelay;
        this.resizeDelay = resizeDelay;
        this.appendTo = appendTo;
        this.scrollTarget = options?.scrollTarget ?? window;
        this.getReferencedVirtualElement = getReferencedVirtualElement;
        this.floatingUIOptions = {
            ...this.floatingUIOptions,
            ...options
        };
        this.element.tabIndex = 0;
        if (shouldShow) {
            this.shouldShow = shouldShow;
        }
        this.element.addEventListener("mousedown", this.mousedownHandler, {
            capture: true
        });
        this.view.dom.addEventListener("dragstart", this.dragstartHandler);
        this.editor.on("focus", this.focusHandler);
        this.editor.on("blur", this.blurHandler);
        this.editor.on("transaction", this.transactionHandler);
        window.addEventListener("resize", this.resizeHandler);
        this.scrollTarget.addEventListener("scroll", this.resizeHandler);
        this.update(view, view.state);
        if (this.getShouldShow()) {
            this.show();
            this.updatePosition();
        }
    }
    get middlewares() {
        const e = [];
        if (this.floatingUIOptions.flip) {
            e.push(f(typeof this.floatingUIOptions.flip !== "boolean" ? this.floatingUIOptions.flip : undefined));
        }
        if (this.floatingUIOptions.shift) {
            e.push(s(typeof this.floatingUIOptions.shift !== "boolean" ? this.floatingUIOptions.shift : undefined));
        }
        if (this.floatingUIOptions.offset) {
            e.push(o(typeof this.floatingUIOptions.offset !== "boolean" ? this.floatingUIOptions.offset : undefined));
        }
        if (this.floatingUIOptions.arrow) {
            e.push(aQ(this.floatingUIOptions.arrow));
        }
        if (this.floatingUIOptions.size) {
            e.push(d(typeof this.floatingUIOptions.size !== "boolean" ? this.floatingUIOptions.size : undefined));
        }
        if (this.floatingUIOptions.autoPlacement) {
            e.push(aR(typeof this.floatingUIOptions.autoPlacement !== "boolean" ? this.floatingUIOptions.autoPlacement : undefined));
        }
        if (this.floatingUIOptions.hide) {
            e.push(h(typeof this.floatingUIOptions.hide !== "boolean" ? this.floatingUIOptions.hide : undefined));
        }
        if (this.floatingUIOptions.inline) {
            e.push(aS(typeof this.floatingUIOptions.inline !== "boolean" ? this.floatingUIOptions.inline : undefined));
        }
        return e;
    }
    get virtualElement() {
        const { selection } = this.editor.state;
        const n = this.getReferencedVirtualElement?.();
        if (n) {
            return n;
        }
        const i = O_1(this.view, selection.from, selection.to);
        let r = {
            getBoundingClientRect: ()=>i,
            getClientRects: ()=>[
                    i
                ]
        };
        if (selection instanceof C) {
            let s = this.view.nodeDOM(selection.from);
            const o = s.dataset.nodeViewWrapper ? s : s.querySelector("[data-node-view-wrapper]");
            if (o) {
                s = o;
            }
            if (s) {
                r = {
                    getBoundingClientRect: ()=>s.getBoundingClientRect(),
                    getClientRects: ()=>[
                            s.getBoundingClientRect()
                        ]
                };
            }
        }
        if (selection instanceof I) {
            const { $anchorCell, $headCell } = selection;
            const l = $anchorCell ? $anchorCell.pos : $headCell.pos;
            const a = $headCell ? $headCell.pos : $anchorCell.pos;
            const u = this.view.nodeDOM(l);
            const c = this.view.nodeDOM(a);
            if (!u || !c) {
                return;
            }
            const d = u === c ? u.getBoundingClientRect() : pc(u.getBoundingClientRect(), c.getBoundingClientRect());
            r = {
                getBoundingClientRect: ()=>d,
                getClientRects: ()=>[
                        d
                    ]
            };
        }
        return r;
    }
    updatePosition() {
        const virtualElement = this.virtualElement;
        if (virtualElement) {
            b(virtualElement, this.element, {
                placement: this.floatingUIOptions.placement,
                strategy: this.floatingUIOptions.strategy,
                middleware: this.middlewares
            }).then(({ x, y, strategy })=>{
                this.element.style.width = "max-content";
                this.element.style.position = strategy;
                this.element.style.left = `${x}px`;
                this.element.style.top = `${y}px`;
                if (this.isVisible && this.floatingUIOptions.onUpdate) {
                    this.floatingUIOptions.onUpdate();
                }
            });
        }
    }
    update(e, t) {
        const { state } = e;
        const i = state.selection.from !== state.selection.to;
        if (this.updateDelay > 0 && i) {
            this.handleDebouncedUpdate(e, t);
            return;
        }
        const r = !t?.selection.eq(e.state.selection);
        const s = !t?.doc.eq(e.state.doc);
        this.updateHandler(e, r, s, t);
    }
    getShouldShow(e) {
        const { state } = this.view;
        const { selection } = state;
        const { ranges } = selection;
        const s = Math.min(...ranges.map((a)=>a.$from.pos));
        const o = Math.max(...ranges.map((a)=>a.$to.pos));
        return this.shouldShow?.({
            editor: this.editor,
            element: this.element,
            view: this.view,
            state,
            oldState: e,
            from: s,
            to: o
        }) || false;
    }
    show() {
        let e;
        if (this.isVisible) {
            return;
        }
        this.element.style.visibility = "visible";
        this.element.style.opacity = "1";
        const t = typeof this.appendTo === "function" ? this.appendTo() : this.appendTo;
        if (!((e = t ?? this.view.dom.parentElement) == null)) {
            e.appendChild(this.element);
        }
        if (this.floatingUIOptions.onShow) {
            this.floatingUIOptions.onShow();
        }
        this.isVisible = true;
    }
    hide() {
        if (this.isVisible) {
            this.element.style.visibility = "hidden";
            this.element.style.opacity = "0";
            this.element.remove();
            if (this.floatingUIOptions.onHide) {
                this.floatingUIOptions.onHide();
            }
            this.isVisible = false;
        }
    }
    destroy() {
        this.hide();
        this.element.removeEventListener("mousedown", this.mousedownHandler, {
            capture: true
        });
        this.view.dom.removeEventListener("dragstart", this.dragstartHandler);
        window.removeEventListener("resize", this.resizeHandler);
        this.scrollTarget.removeEventListener("scroll", this.resizeHandler);
        this.editor.off("focus", this.focusHandler);
        this.editor.off("blur", this.blurHandler);
        this.editor.off("transaction", this.transactionHandler);
        if (this.floatingUIOptions.onDestroy) {
            this.floatingUIOptions.onDestroy();
        }
    }
}
const as = (e)=>new P_1({
        key: typeof e.pluginKey === "string" ? new a(e.pluginKey) : e.pluginKey,
        view: (t)=>new fc({
                view: t,
                ...e
            })
    });
j_2.create({
    name: "bubbleMenu",
    addOptions () {
        return {
            element: null,
            pluginKey: "bubbleMenu",
            updateDelay: undefined,
            appendTo: undefined,
            shouldShow: null
        };
    },
    addProseMirrorPlugins () {
        if (this.options.element) {
            return [
                as({
                    pluginKey: this.options.pluginKey,
                    editor: this.editor,
                    element: this.options.element,
                    updateDelay: this.options.updateDelay,
                    options: this.options.options,
                    appendTo: this.options.appendTo,
                    getReferencedVirtualElement: this.options.getReferencedVirtualElement,
                    shouldShow: this.options.shouldShow
                })
            ];
        }
        return [];
    }
});
class mc {
    constructor({ editor, element, view, options, appendTo, shouldShow }){
        this.preventHide = false;
        this.isVisible = false;
        this.shouldShow = ({ view, state })=>{
            const { selection } = state;
            const { $anchor, empty } = selection;
            const d = $anchor.depth === 1;
            const h = $anchor.parent.isTextblock && !$anchor.parent.type.spec.code && !$anchor.parent.textContent && $anchor.parent.childCount === 0 && !this.getTextContent($anchor.parent);
            return !(!view.hasFocus() || !empty || !d || !h || !this.editor.isEditable);
        };
        this.floatingUIOptions = {
            strategy: "absolute",
            placement: "right",
            offset: 8,
            flip: {},
            shift: {},
            arrow: false,
            size: false,
            autoPlacement: false,
            hide: false,
            inline: false
        };
        this.updateHandler = ({ composing }, l, a, u)=>{
            if (composing || !l && !a) {
                return;
            }
            if (!this.getShouldShow(u)) {
                this.hide();
                return;
            }
            this.updatePosition();
            this.show();
        };
        this.mousedownHandler = ()=>{
            this.preventHide = true;
        };
        this.focusHandler = ()=>{
            setTimeout(()=>this.update(this.editor.view));
        };
        this.blurHandler = ({ event })=>{
            var l;
            if (this.preventHide) {
                this.preventHide = false;
                return;
            }
            event?.relatedTarget && (l = this.element.parentNode) != null && l.contains(event.relatedTarget) || event?.relatedTarget !== this.editor.view.dom && this.hide();
        };
        this.editor = editor;
        this.element = element;
        this.view = view;
        this.appendTo = appendTo;
        this.floatingUIOptions = {
            ...this.floatingUIOptions,
            ...options
        };
        this.element.tabIndex = 0;
        if (shouldShow) {
            this.shouldShow = shouldShow;
        }
        this.element.addEventListener("mousedown", this.mousedownHandler, {
            capture: true
        });
        this.editor.on("focus", this.focusHandler);
        this.editor.on("blur", this.blurHandler);
        this.update(view, view.state);
        if (this.getShouldShow()) {
            this.show();
            this.updatePosition();
        }
    }
    getTextContent(e) {
        return u_2(e, {
            textSerializers: t(this.editor.schema)
        });
    }
    get middlewares() {
        const e = [];
        if (this.floatingUIOptions.flip) {
            e.push(f(typeof this.floatingUIOptions.flip !== "boolean" ? this.floatingUIOptions.flip : undefined));
        }
        if (this.floatingUIOptions.shift) {
            e.push(s(typeof this.floatingUIOptions.shift !== "boolean" ? this.floatingUIOptions.shift : undefined));
        }
        if (this.floatingUIOptions.offset) {
            e.push(o(typeof this.floatingUIOptions.offset !== "boolean" ? this.floatingUIOptions.offset : undefined));
        }
        if (this.floatingUIOptions.arrow) {
            e.push(aQ(this.floatingUIOptions.arrow));
        }
        if (this.floatingUIOptions.size) {
            e.push(d(typeof this.floatingUIOptions.size !== "boolean" ? this.floatingUIOptions.size : undefined));
        }
        if (this.floatingUIOptions.autoPlacement) {
            e.push(aR(typeof this.floatingUIOptions.autoPlacement !== "boolean" ? this.floatingUIOptions.autoPlacement : undefined));
        }
        if (this.floatingUIOptions.hide) {
            e.push(h(typeof this.floatingUIOptions.hide !== "boolean" ? this.floatingUIOptions.hide : undefined));
        }
        if (this.floatingUIOptions.inline) {
            e.push(aS(typeof this.floatingUIOptions.inline !== "boolean" ? this.floatingUIOptions.inline : undefined));
        }
        return e;
    }
    getShouldShow(e) {
        const { state } = this.view;
        const { selection } = state;
        const { ranges } = selection;
        const s = Math.min(...ranges.map((a)=>a.$from.pos));
        const o = Math.max(...ranges.map((a)=>a.$to.pos));
        return this.shouldShow?.({
            editor: this.editor,
            view: this.view,
            state,
            oldState: e,
            from: s,
            to: o
        });
    }
    updatePosition() {
        const { selection } = this.editor.state;
        const t = O_1(this.view, selection.from, selection.to);
        b({
            getBoundingClientRect: ()=>t,
            getClientRects: ()=>[
                    t
                ]
        }, this.element, {
            placement: this.floatingUIOptions.placement,
            strategy: this.floatingUIOptions.strategy,
            middleware: this.middlewares
        }).then(({ x, y, strategy })=>{
            this.element.style.width = "max-content";
            this.element.style.position = strategy;
            this.element.style.left = `${x}px`;
            this.element.style.top = `${y}px`;
            if (this.isVisible && this.floatingUIOptions.onUpdate) {
                this.floatingUIOptions.onUpdate();
            }
        });
    }
    update(e, t) {
        const n = !t?.selection.eq(e.state.selection);
        const i = !t?.doc.eq(e.state.doc);
        this.updateHandler(e, n, i, t);
    }
    show() {
        let e;
        if (this.isVisible) {
            return;
        }
        this.element.style.visibility = "visible";
        this.element.style.opacity = "1";
        const t = typeof this.appendTo === "function" ? this.appendTo() : this.appendTo;
        if (!((e = t ?? this.view.dom.parentElement) == null)) {
            e.appendChild(this.element);
        }
        if (this.floatingUIOptions.onShow) {
            this.floatingUIOptions.onShow();
        }
        this.isVisible = true;
    }
    hide() {
        if (this.isVisible) {
            this.element.style.visibility = "hidden";
            this.element.style.opacity = "0";
            this.element.remove();
            if (this.floatingUIOptions.onHide) {
                this.floatingUIOptions.onHide();
            }
            this.isVisible = false;
        }
    }
    destroy() {
        this.hide();
        this.element.removeEventListener("mousedown", this.mousedownHandler, {
            capture: true
        });
        this.editor.off("focus", this.focusHandler);
        this.editor.off("blur", this.blurHandler);
        if (this.floatingUIOptions.onDestroy) {
            this.floatingUIOptions.onDestroy();
        }
    }
}
const us = (e)=>new P_1({
        key: typeof e.pluginKey === "string" ? new a(e.pluginKey) : e.pluginKey,
        view: (t)=>new mc({
                view: t,
                ...e
            })
    });
j_2.create({
    name: "floatingMenu",
    addOptions () {
        return {
            element: null,
            options: {},
            pluginKey: "floatingMenu",
            appendTo: undefined,
            shouldShow: null
        };
    },
    addProseMirrorPlugins () {
        if (this.options.element) {
            return [
                us({
                    pluginKey: this.options.pluginKey,
                    editor: this.editor,
                    element: this.options.element,
                    options: this.options.options,
                    appendTo: this.options.appendTo,
                    shouldShow: this.options.shouldShow
                })
            ];
        }
        return [];
    }
});
var Rn1 = U_1.forwardRef(({ pluginKey = "bubbleMenu", editor, updateDelay, resizeDelay, appendTo, shouldShow = null, getReferencedVirtualElement, options, children, ...rest }, c)=>{
    Reflect.set(Rn1, "d", 3141841717);
    const dRef = r_1.useRef(document.createElement("div"));
    if (typeof c === "function") {
        c(dRef.current);
    } else if (c) {
        c.current = dRef.current;
    }
    const { editor: editor_1 } = useBr();
    const p = editor || editor_1;
    const f = {
        updateDelay,
        resizeDelay,
        appendTo,
        pluginKey,
        shouldShow,
        getReferencedVirtualElement,
        options
    };
    const gRef = r_1.useRef(f);
    gRef.current = f;
    r_1.useEffect(()=>{
        if (p?.isDestroyed) {
            return;
        }
        if (!p) {
            console.warn("BubbleMenu component is not rendered inside of an editor component or does not have editor prop.");
            return;
        }
        const dRef_current = dRef.current;
        dRef_current.style.visibility = "hidden";
        dRef_current.style.position = "absolute";
        const b = as({
            ...gRef.current,
            editor: p,
            element: dRef_current
        });
        p.registerPlugin(b);
        const pluginKey = gRef.current.pluginKey;
        return ()=>{
            p.unregisterPlugin(pluginKey);
            window.requestAnimationFrame(()=>{
                if (dRef_current.parentNode) {
                    dRef_current.parentNode.removeChild(dRef_current);
                }
            });
        };
    }, [
        p
    ]);
    return R.createPortal(<div {...rest}>{children}</div>, dRef.current);
});
var gc = U_1.forwardRef(({ pluginKey = "floatingMenu", editor, appendTo, shouldShow = null, options, children, ...rest }, l)=>{
    Reflect.set(gc, "d", 1699181352);
    const aRef = r_1.useRef(document.createElement("div"));
    if (typeof l === "function") {
        l(aRef.current);
    } else if (l) {
        l.current = aRef.current;
    }
    const { editor: editor_1 } = useBr();
    r_1.useEffect(()=>{
        const aRef_current = aRef.current;
        aRef_current.style.visibility = "hidden";
        aRef_current.style.position = "absolute";
        if (editor?.isDestroyed || editor_1?.isDestroyed) {
            return;
        }
        const d = editor || editor_1;
        if (!d) {
            console.warn("FloatingMenu component is not rendered inside of an editor component or does not have editor prop.");
            return;
        }
        const h = us({
            editor: d,
            element: aRef_current,
            pluginKey,
            appendTo,
            shouldShow,
            options
        });
        d.registerPlugin(h);
        return ()=>{
            d.unregisterPlugin(pluginKey);
            window.requestAnimationFrame(()=>{
                if (aRef_current.parentNode) {
                    aRef_current.parentNode.removeChild(aRef_current);
                }
            });
        };
    }, [
        editor,
        editor_1,
        appendTo,
        pluginKey,
        shouldShow,
        options
    ]);
    return R.createPortal(<div {...rest}>{children}</div>, aRef.current);
});
const kc = "xs";
const O = {
    base: {
        kGNEyG: "ui-6s0dn4",
        kjj79g: "ui-l56j7k",
        kMwMTN: "ui-1heor9g",
        kXLuUW: "ui-xymvpz",
        kzqmXN: "ui-1oai4fc",
        kZKoxP: "ui-higkf7",
        k63SB2: "ui-etm3q0",
        keoZOQ: "ui-vj1r1n",
        km5ZXQ: "ui-1j59caj",
        k1K539: "ui-1av5923",
        koQZXg: "ui-1k4ukv9",
        "--icon-size": "ui-1ddsvy1",
        "--icon-weight": "ui-1q5xvfy",
        "--icon-margin": "ui-17igp9n",
        $$css: true
    },
    noPresetSize: {
        $$css: true
    },
    sizeXs: {
        kzqmXN: "ui-smyaan",
        kZKoxP: "ui-1kpxq89",
        $$css: true
    },
    sizeSm: {
        kzqmXN: "ui-6jxa94",
        kZKoxP: "ui-1v9usgg",
        $$css: true
    },
    sizeMd: {
        kzqmXN: "ui-1kky2od",
        kZKoxP: "ui-lup9mm",
        $$css: true
    },
    sizeLg: {
        kzqmXN: "ui-w4jnvo",
        kZKoxP: "ui-1qx5ct2",
        $$css: true
    },
    sizeXl: {
        kzqmXN: "ui-vy4d1p",
        kZKoxP: "ui-xk0z11",
        $$css: true
    },
    noColor: {
        $$css: true
    },
    colorPrimary: {
        kMwMTN: "ui-1nqczng",
        $$css: true
    },
    colorSecondary: {
        kMwMTN: "ui-1mh7f6w",
        $$css: true
    },
    colorTertiary: {
        kMwMTN: "ui-1lbmi28",
        $$css: true
    },
    colorQuaternary: {
        kMwMTN: "ui-1qh17o",
        $$css: true
    },
    colorCyan: {
        kMwMTN: "ui-1rbygr4",
        $$css: true
    },
    colorRed: {
        kMwMTN: "ui-ku4wcm",
        $$css: true
    },
    colorGreen: {
        kMwMTN: "ui-p6nzhx",
        $$css: true
    },
    colorYellow: {
        kMwMTN: "ui-1hn9r2r",
        $$css: true
    },
    noModifier: {
        $$css: true
    },
    modifierSpin: {
        kKVMdj: "ui-138fvbv",
        k44tkh: "ui-1q3qbx4",
        kyAemX: "ui-1esw782",
        ko0y90: "ui-a4qsjk",
        $$css: true
    },
    noModifierDisabled: {
        $$css: true
    },
    modifierHidden: {
        k33iCy: "ui-lshs6z",
        $$css: true
    }
};
function bc(e, color, modifier) {
    return [
        O.base,
        yc(e),
        wc(color),
        xc(modifier)
    ];
}
function yc(e) {
    if (typeof e === "number" || e.startsWith("var(")) {
        return O.noPresetSize;
    }
    switch(e){
        case "xs":
            return O.sizeXs;
        case "sm":
            return O.sizeSm;
        case "md":
            return O.sizeMd;
        case "lg":
            return O.sizeLg;
        case "xl":
            return O.sizeXl;
    }
}
function wc(color) {
    switch(color){
        case "primary":
            return O.colorPrimary;
        case "secondary":
            return O.colorSecondary;
        case "tertiary":
            return O.colorTertiary;
        case "quaternary":
            return O.colorQuaternary;
        case "cyan":
            return O.colorCyan;
        case "red":
            return O.colorRed;
        case "green":
            return O.colorGreen;
        case "yellow":
            return O.colorYellow;
        case undefined:
            return O.noColor;
    }
}
function xc(modifier) {
    switch(modifier){
        case "spin":
            return O.modifierSpin;
        case "disabled":
            return O.noModifierDisabled;
        case "hidden":
            return O.modifierHidden;
        case undefined:
            return O.noModifier;
    }
}
function Cs1Component({ name, modifier, size, glyphSize, color, className, title, "aria-label": aria_label, "aria-hidden": aria_hidden, ref }) {
    Cs1Component.d = 205909233;
    const c = b4();
    const d = or(name, modifier);
    let h;
    if (size != null) {
        h = size;
    } else if (c?.iconSize == null) {
        h = kc;
    } else if (typeof c.iconSize === "number") {
        h = c.iconSize;
    } else if (!da_1(c.iconSize)) {
        h = c.iconSize;
    } else {
        switch(c.iconSize){
            case "xs":
            case "sm":
            case "lg":
            case "xl":
                h = c.iconSize;
                break;
            case "base":
                h = "sm";
                break;
            case "2xl":
                h = "xl";
                break;
            default:
                h = c.iconSize;
        }
    }
    const p = typeof h === "number" || h.startsWith("var(");
    const style = {
        ...p ? {
            "--icon-size": typeof h === "number" ? `${h}px` : h
        } : {},
        ...glyphSize === undefined ? {} : {
            fontSize: `${glyphSize}px`
        }
    };
    const g = b8({
        rootClass: "ui-codicon",
        stylexStyles: bc(h, color, modifier),
        className: b5(d, className),
        style
    });
    return <i ref={ref} className={g.className} data-size={p ? undefined : h} data-color={color} style={g.style} title={title ?? aria_label} aria-hidden={aria_hidden ?? (aria_label ? undefined : true)}/>;
}
function Si(e, t) {
    let line = 1;
    let column = 1;
    for(let r = 0; r < e && r < t.length; r++){
        if (t[r] === `
`) {
            line++;
            column = 1;
        } else {
            column++;
        }
    }
    return {
        line,
        column
    };
}
function vc(e, from, n, i = "markdown") {
    const r = e.state.doc.textBetween(0, e.state.doc.content.size, `
`);
    const selectedText = e.state.doc.textBetween(from, n, " ");
    const o = Si(from, r);
    const l = Si(n, r);
    return {
        selectedText,
        fencedText: `\`\`\`${i}
${selectedText}
\`\`\``,
        range: {
            startLine: o.line,
            startColumn: o.column,
            endLine: l.line,
            endColumn: l.column
        }
    };
}
const updateDelay = 100;
const Sc = typeof navigator !== "undefined" && /Mac|iP(hone|[oa]d)/.test(navigator.platform);
function Cc(keybinding) {
    const t = keybinding.split(/-(?!$)/);
    let n = t[t.length - 1];
    if (n === "Space") {
        n = " ";
    }
    let i = false;
    let r = false;
    let s = false;
    let o = false;
    for (const l of t.slice(0, -1)){
        if (/^(cmd|meta|m)$/i.test(l)) {
            s = true;
        } else if (/^a(lt)?$/i.test(l)) {
            i = true;
        } else if (/^(c|ctrl|control)$/i.test(l)) {
            r = true;
        } else if (/^s(hift)?$/i.test(l)) {
            o = true;
        } else if (/^mod$/i.test(l)) {
            if (Sc) {
                s = true;
            } else {
                r = true;
            }
        } else {
            throw new Error(`Unrecognized modifier name: ${l}`);
        }
    }
    if (i) {
        n = `Alt-${n}`;
    }
    if (r) {
        n = `Ctrl-${n}`;
    }
    if (s) {
        n = `Meta-${n}`;
    }
    if (o) {
        n = `Shift-${n}`;
    }
    return n;
}
function Tc(e) {
    const { selection } = e.state;
    if (!(selection instanceof T_1)) {
        return null;
    }
    const { from, to } = selection;
    const { selectedText } = vc(e, from, to);
    return {
        selectedText,
        from,
        to,
        editor: e
    };
}
function ds(e) {
    const t = {
        key: e.key,
        label: e.label,
        shortcut: e.shortcut,
        execute: e.execute,
        group: e.group,
        isActive: e.isActive,
        disabled: e.disabled === true,
        hidden: e.hidden === true,
        keybinding: e.keybinding && !e.disabled ? {
            input: e.keybinding,
            canonical: Cc(e.keybinding)
        } : null,
        selectionBehavior: e.selectionBehavior
    };
    if (e.presentation === "icon-only") {
        return {
            ...t,
            presentation: "icon-only",
            icon: e.icon
        };
    }
    return {
        ...t,
        presentation: "default",
        icon: e.icon
    };
}
function Rc(e) {
    return e.map(({ onAction, ...rest })=>ds({
            ...rest,
            execute: (i)=>{
                const r = Tc(i);
                if (r) {
                    onAction(r);
                    return true;
                }
                return false;
            },
            selectionBehavior: "collapse"
        }));
}
function sn(e, editor, n) {
    if (e.disabled) {
        return false;
    }
    const { to } = editor.state.selection;
    let { anchor, head } = editor.state.selection;
    const o = ({ transaction })=>{
        anchor = transaction.mapping.map(anchor);
        head = transaction.mapping.map(head);
    };
    const l = e.selectionBehavior === "preserve";
    if (l) {
        editor.on("transaction", o);
    }
    let a;
    try {
        a = e.execute(editor);
    } finally{
        if (l) {
            editor.off("transaction", o);
        }
    }
    if (!a) {
        return false;
    }
    if (l) {
        const { doc } = editor.state;
        editor.view.dispatch(editor.state.tr.setSelection(T_1.between(doc.resolve(anchor), doc.resolve(head))));
    } else {
        if (n === "button") {
            editor.commands.setTextSelection(to);
        }
    }
    return true;
}
function Ti(editor) {
    const { anchor, head } = editor.state.selection;
    if (anchor === head) {
        return false;
    }
    const i = O_1(editor.view, anchor, anchor);
    return O_1(editor.view, head, head).top > i.top;
}
function Mc(e) {
    const t = new Map;
    for (const n of e){
        if (!n.keybinding) {
            continue;
        }
        const i = t.get(n.keybinding.canonical);
        if (i !== undefined) {
            throw new Error(`Selection tooltip actions "${i}" and "${n.key}" use duplicate keybinding "${n.keybinding.input}"`);
        }
        t.set(n.keybinding.canonical, n.key);
    }
}
function Ec(e) {
    return j_2.create({
        name: "selectionTooltipKeybindings",
        addProseMirrorPlugins () {
            const editor = this.editor;
            let n = null;
            let i = null;
            return [
                new P_1({
                    props: {
                        handleKeyDown (r, s) {
                            const o = e();
                            if (n !== o) {
                                const l = {};
                                for (const a of o){
                                    if (a.keybinding) {
                                        l[a.keybinding.input] = ()=>{
                                            const { selection } = editor.state;
                                            if (!(selection instanceof T_1) || selection.empty) {
                                                return false;
                                            }
                                            return sn(a, editor, "keyboard");
                                        };
                                    }
                                }
                                n = o;
                                i = A_1(l);
                            }
                            return i?.(r, s) ?? false;
                        }
                    }
                })
            ];
        }
    });
}
function $c(e) {
    return Ec(e);
}
function Ri(e) {
    e.preventDefault();
}
function Hs1Component({ action, editor }) {
    Hs1Component.d = 3379289252;
    const pressed = useMr({
        editor,
        selector: ({ editor })=>action.isActive?.(editor) ?? false
    });
    const i = action.disabled === true;
    if (action.presentation === "icon-only") {
        return <Qs content=<Ys title={action.label} shortcut={action.shortcut}/>><Cr1Component aria-label={action.label} disabled={i} icon={action.icon} onPointerDown={Ri} onPressedChange={()=>sn(action, editor, "button")} pressed={pressed} size="md" iconSize="base"/></Qs>;
    }
    const r = {
        0: {
            className: "ui-2lah0s ui-1mh7f6w"
        },
        1: {
            className: "ui-2lah0s ui-1nqczng"
        }
    }[!!pressed << 0];
    const s = {
        className: "ui-11wthnw ui-20ajya ui-1wd3ewq"
    };
    const o = {
        className: "ui-hayvgc ui-1wm8ruf ui-ss6m8b ui-4b2ntj ui-2lah0s"
    };
    return <button type="button" {...{
        0: {
            className: "ui-78zum5 ui-6s0dn4 ui-11twubx ui-jyslct ui-972fbf ui-1ejq31n ui-gfja2r ui-11pwa6s ui-1qhh985 ui-1sy0etr ui-yj58a3 ui-1b16gh4 ui-jbqb8w ui-1iuyybk ui-pb2eou ui-1ypdohk ui-ln7xf2 ui-1wd3ewq ui-493x5y ui-17v7654 ui-b6dno7 ui-1lfpczk ui-1043rbw ui-1qx5ct2 ui-uxw1ft ui-15406qy ui-4wkmsb ui-7pq1vu ui-6tor67 ui-1k57tk5 ui-784prv ui-1t137rt ui-9v5kkp ui-1uczgqu ui-1725o6r ui-1wfwxd8 ui-1bqaal"
        },
        2: {
            className: "ui-78zum5 ui-6s0dn4 ui-11twubx ui-jyslct ui-972fbf ui-1ejq31n ui-gfja2r ui-11pwa6s ui-1qhh985 ui-1sy0etr ui-yj58a3 ui-1b16gh4 ui-1ypdohk ui-ln7xf2 ui-1wd3ewq ui-493x5y ui-17v7654 ui-b6dno7 ui-1lfpczk ui-1043rbw ui-1qx5ct2 ui-uxw1ft ui-15406qy ui-4wkmsb ui-7pq1vu ui-6tor67 ui-1k57tk5 ui-784prv ui-1t137rt ui-9v5kkp ui-1uczgqu ui-1725o6r ui-1wfwxd8 ui-1bqaal ui-ri19xs"
        },
        1: {
            className: "ui-78zum5 ui-6s0dn4 ui-11twubx ui-jyslct ui-972fbf ui-1ejq31n ui-gfja2r ui-11pwa6s ui-1qhh985 ui-1sy0etr ui-yj58a3 ui-1b16gh4 ui-jbqb8w ui-1iuyybk ui-pb2eou ui-ln7xf2 ui-1wd3ewq ui-493x5y ui-17v7654 ui-b6dno7 ui-1lfpczk ui-1043rbw ui-1qx5ct2 ui-uxw1ft ui-15406qy ui-4wkmsb ui-7pq1vu ui-6tor67 ui-1k57tk5 ui-784prv ui-1t137rt ui-9v5kkp ui-1uczgqu ui-1725o6r ui-1wfwxd8 ui-1bqaal ui-byyjgo ui-1h6gzvc ui-47corl"
        },
        3: {
            className: "ui-78zum5 ui-6s0dn4 ui-11twubx ui-jyslct ui-972fbf ui-1ejq31n ui-gfja2r ui-11pwa6s ui-1qhh985 ui-1sy0etr ui-yj58a3 ui-1b16gh4 ui-ln7xf2 ui-1wd3ewq ui-493x5y ui-17v7654 ui-b6dno7 ui-1lfpczk ui-1043rbw ui-1qx5ct2 ui-uxw1ft ui-15406qy ui-4wkmsb ui-7pq1vu ui-6tor67 ui-1k57tk5 ui-784prv ui-1t137rt ui-9v5kkp ui-1uczgqu ui-1725o6r ui-1wfwxd8 ui-1bqaal ui-ri19xs ui-byyjgo ui-1h6gzvc ui-47corl"
        }
    }[!!pressed << 1 | !!i << 0]} disabled={i} aria-pressed={action.isActive ? pressed : undefined} onPointerDown={Ri} onClick={()=>sn(action, editor, "button")}>{action.icon && <Cs1Component name={action.icon} size="xs" {...r} aria-hidden/>}<span {...s}>{action.label}</span>{action.shortcut ? <span {...o}>{action.shortcut}</span> : null}</button>;
}
function On1Component({ visibleActions, ariaLabel, editor, direction, contentOverride }) {
    On1Component.d = 2804215457;
    return <fieldset {...{
        0: {
            className: "ui-78zum5 ui-6s0dn4 ui-137clkk ui-euugli ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b ui-1gyaoyw ui-178xt8z ui-13fuv20 ui-1ys8oop ui-s1s249 ui-32b0ac ui-1h48siu ui-so031l ui-1q0q8m5 ui-oll2yv ui-e0pwq ui-19ypqd9 ui-1jbi0el ui-1m7fhj7 ui-14cu5b6 ui-493x5y ui-14ndyrl ui-b6dno7 ui-1e7ydrk ui-87ps6o ui-979qle ui-11wthnw ui-1ja60sm ui-kebrot ui-1aquc0h ui-ykr0s4 ui-lzhlbq ui-1u6ievf"
        },
        1: {
            className: "ui-78zum5 ui-6s0dn4 ui-137clkk ui-euugli ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b ui-1gyaoyw ui-178xt8z ui-13fuv20 ui-1ys8oop ui-s1s249 ui-32b0ac ui-1h48siu ui-so031l ui-1q0q8m5 ui-oll2yv ui-e0pwq ui-19ypqd9 ui-1jbi0el ui-1m7fhj7 ui-14cu5b6 ui-493x5y ui-14ndyrl ui-b6dno7 ui-1e7ydrk ui-87ps6o ui-979qle ui-11wthnw ui-1ja60sm ui-hqbpk2 ui-1aquc0h ui-ykr0s4 ui-lzhlbq ui-1u6ievf"
        }
    }[(direction === "above") << 0]} aria-label={ariaLabel}>{contentOverride ?? visibleActions.map((action, o)=>{
        const l = visibleActions[o - 1]?.group;
        const a = o > 0 && action.group !== undefined && l !== undefined && action.group !== l;
        return <r_1.Fragment key={action.key}>{a && <span className="ui-kh2ocl ui-1i1rx1s ui-2lah0s ui-dpki88 ui-70c5fe ui-gefcol" aria-hidden/>}<Hs1Component action={action} editor={editor}/></r_1.Fragment>;
    })}</fieldset>;
}
function Ps1Component({ options, contentOverride }) {
    Ps1Component.d = 449837844;
    const { editor } = useAa("SelectionTooltip");
    const { actions, ariaLabel = "Text actions", shouldShow, offset = 8 } = options;
    const visibleActions = actions.filter((w)=>!w.hidden);
    const a = visibleActions.length > 0;
    const u = bo(shouldShow);
    const cRef = r_1.useRef(shouldShow);
    const [d, setD] = r_1.useState(0);
    r_1.useLayoutEffect(()=>{
        const cRef_current = cRef.current;
        cRef.current = shouldShow;
        if (cRef_current === shouldShow || !editor || !a) {
            return;
        }
        const { selection } = editor.state;
        if (!(selection instanceof T_1) || selection.empty) {
            return;
        }
        const T = {
            editor,
            from: selection.from,
            to: selection.to
        };
        const M = cRef_current?.(T) ?? true;
        const $ = shouldShow?.(T) ?? true;
        if (M !== $) {
            setD((E)=>E + 1);
        }
    }, [
        shouldShow,
        editor,
        a
    ]);
    const p = r_1.useCallback(({ editor, from, to })=>{
        if (!(editor.state.selection instanceof T_1) || from === to || !a) {
            return false;
        }
        if (u.current) {
            return u.current({
                editor,
                from,
                to
            });
        }
        return true;
    }, [
        a,
        u
    ]);
    const f = r_1.useCallback((w)=>{
        if (p(w)) {
            return !Ti(w.editor);
        }
        return false;
    }, [
        p
    ]);
    const g = r_1.useCallback((w)=>{
        if (p(w)) {
            return Ti(w.editor);
        }
        return false;
    }, [
        p
    ]);
    const getReferencedVirtualElement = r_1.useCallback(()=>{
        if (!editor) {
            return null;
        }
        const { head } = editor.state.selection;
        const S = O_1(editor.view, head, head);
        return {
            getBoundingClientRect: ()=>S,
            getClientRects: ()=>[
                    S
                ]
        };
    }, [
        editor
    ]);
    if (!editor) {
        return null;
    }
    const b = `${a}-${offset}-${d}`;
    return <><Rn1 key={`selectionTooltipAbove-${b}`} pluginKey="selectionTooltipAbove" editor={editor} updateDelay={updateDelay} shouldShow={f} getReferencedVirtualElement={getReferencedVirtualElement} options={{
        placement: "top",
        offset
    }}><On1Component visibleActions={visibleActions} ariaLabel={ariaLabel} editor={editor} direction="above" contentOverride={contentOverride}/></Rn1><Rn1 key={`selectionTooltipBelow-${b}`} pluginKey="selectionTooltipBelow" editor={editor} updateDelay={updateDelay} shouldShow={g} getReferencedVirtualElement={getReferencedVirtualElement} options={{
        placement: "bottom",
        offset
    }}><On1Component visibleActions={visibleActions} ariaLabel={ariaLabel} editor={editor} direction="below" contentOverride={contentOverride}/></Rn1></>;
}
function ln(e) {
    const link = e.schema.marks.link;
    if (!link) {
        return null;
    }
    const { selection } = e.state;
    if (!(selection instanceof T_1)) {
        return null;
    }
    let i = null;
    e.state.doc.nodesBetween(selection.from, selection.to, (r, s)=>{
        if (i !== null) {
            return false;
        }
        const o = r.marks.find((u)=>u.type === link);
        if (!o) {
            return true;
        }
        const l = Q(e.state.doc.resolve(s), link);
        const href = o.attrs.href;
        i = {
            from: l?.from ?? s,
            to: l?.to ?? s + r.nodeSize,
            href: typeof href === "string" ? href : ""
        };
        return false;
    });
    return i;
}
const ge = typeof navigator !== "undefined" && /Mac|iP(hone|[oa]d)/.test(navigator.platform) ? "⌘" : "Ctrl+";
const Ke = ge === "⌘";
const Mi = [
    {
        mark: "bold",
        group: "text",
        label: "Bold",
        icon: "text-b",
        shortcut: `${ge}B`,
        keybinding: "Mod-b",
        toggle: (e)=>e.chain().toggleBold().run()
    },
    {
        mark: "italic",
        group: "text",
        label: "Italic",
        icon: "text-italic",
        shortcut: `${ge}I`,
        keybinding: "Mod-i",
        toggle: (e)=>e.chain().toggleItalic().run()
    },
    {
        mark: "underline",
        group: "text",
        label: "Underline",
        icon: <Lr1Component/>,
        shortcut: `${ge}U`,
        keybinding: "Mod-u",
        toggle: (e)=>e.chain().toggleUnderline().run()
    },
    {
        mark: "strike",
        group: "text",
        label: "Strikethrough",
        icon: "text-strikethrough",
        shortcut: Ke ? "⇧⌘X" : `${ge}Shift+X`,
        keybinding: "Mod-Shift-x",
        toggle: (e)=>e.chain().toggleStrike().run()
    },
    {
        mark: "link",
        group: "insert",
        label: "Link",
        icon: "link",
        isActive: (e)=>ln(e) !== null
    },
    {
        mark: "orderedList",
        group: "insert",
        label: "Ordered list",
        icon: "list-ordered",
        shortcut: Ke ? "⇧⌘7" : `${ge}Shift+7`,
        toggle: (e)=>e.chain().toggleOrderedList().run()
    },
    {
        mark: "bulletList",
        group: "insert",
        label: "Bullet list",
        icon: "list-bullets",
        shortcut: Ke ? "⇧⌘8" : `${ge}Shift+8`,
        toggle: (e)=>e.chain().toggleBulletList().run()
    },
    {
        mark: "blockquote",
        group: "block",
        label: "Blockquote",
        icon: "quote",
        shortcut: Ke ? "⇧⌘B" : `${ge}Shift+B`,
        toggle: (e)=>e.chain().toggleBlockquote().run()
    },
    {
        mark: "code",
        group: "block",
        label: "Inline code",
        icon: "text-c",
        shortcut: `${ge}E`,
        toggle: (e)=>e.chain().toggleCode().run()
    },
    {
        mark: "codeBlock",
        group: "block",
        label: "Code block",
        icon: "code",
        shortcut: Ke ? "⌥⌘C" : `${ge}Alt+C`,
        toggle: (e)=>e.chain().toggleCodeBlock().run()
    }
];
function fs(e, onUserFormattingAction, n) {
    const i = ()=>{
        onUserFormattingAction?.();
    };
    e.on("beforeTransaction", i);
    try {
        return n();
    } finally{
        e.off("beforeTransaction", i);
    }
}
function zc(e, t, onUserFormattingAction) {
    if (t.isEditable) {
        return fs(t, onUserFormattingAction, ()=>e(t));
    }
    return false;
}
function jc({ actions, onUserFormattingAction, openLinkEditor }) {
    const i = actions ?? Mi.map((r)=>r.mark);
    return Mi.filter((r)=>i.includes(r.mark) && (r.mark !== "link" || openLinkEditor !== null)).map((r)=>{
        const r_toggle = r.toggle;
        return ds({
            key: `format-${r.mark}`,
            label: r.label,
            icon: r.icon,
            shortcut: r.shortcut,
            keybinding: r.keybinding,
            group: r.group,
            presentation: "icon-only",
            isActive: r.isActive ?? ((o)=>o.isActive(r.mark)),
            execute: (o)=>{
                if (r_toggle) {
                    return zc(r_toggle, o, onUserFormattingAction);
                }
                return o.isEditable && (openLinkEditor?.(o) ?? false);
            },
            selectionBehavior: "preserve"
        });
    });
}
function bn() {
    return {
        async: false,
        breaks: false,
        extensions: null,
        gfm: true,
        hooks: null,
        pedantic: false,
        renderer: null,
        silent: false,
        tokenizer: null,
        walkTokens: null
    };
}
let Ue = bn();
function ms(defaults) {
    Ue = defaults;
}
const Qe = {
    exec: ()=>null
};
function j(e, t = "") {
    let n = typeof e === "string" ? e : e.source;
    const i = {
        replace: (r, s)=>{
            let o = typeof s === "string" ? s : s.source;
            o = o.replace(other.caret, "$1");
            n = n.replace(r, o);
            return i;
        },
        getRegex: ()=>new RegExp(n, t)
    };
    return i;
}
var other = {
    codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
    outputLinkReplace: /\\([\[\]])/g,
    indentCodeCompensation: /^(\s+)(?:```)/,
    beginningSpace: /^\s+/,
    endingHash: /#$/,
    startingSpaceChar: /^ /,
    endingSpaceChar: / $/,
    nonSpaceChar: /[^ ]/,
    newLineCharGlobal: /\n/g,
    tabCharGlobal: /\t/g,
    multipleSpaceGlobal: /\s+/g,
    blankLine: /^[ \t]*$/,
    doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
    blockquoteStart: /^ {0,3}>/,
    blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
    blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
    listReplaceTabs: /^\t+/,
    listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
    listIsTask: /^\[[ xX]\] /,
    listReplaceTask: /^\[[ xX]\] +/,
    anyLine: /\n.*\n/,
    hrefBrackets: /^<(.*)>$/,
    tableDelimiter: /[:|]/,
    tableAlignChars: /^\||\| *$/g,
    tableRowBlankLine: /\n[ \t]*$/,
    tableAlignRight: /^ *-+: *$/,
    tableAlignCenter: /^ *:-+: *$/,
    tableAlignLeft: /^ *:-+ *$/,
    startATag: /^<a /i,
    endATag: /^<\/a>/i,
    startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
    endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
    startAngleBracket: /^</,
    endAngleBracket: />$/,
    pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
    unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
    escapeTest: /[&<>"']/,
    escapeReplace: /[&<>"']/g,
    escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
    escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
    unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
    caret: /(^|[^\[])\^/g,
    percentDecode: /%25/g,
    findPipe: /\|/g,
    splitPipe: / \|/,
    slashPipe: /\\\|/g,
    carriageReturn: /\r\n|\r/g,
    spaceLine: /^ +$/gm,
    notSpaceStart: /^\S*/,
    endingNewline: /\n$/,
    listItemRegex: (e)=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
    nextBulletRegex: (e)=>new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
    hrRegex: (e)=>new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
    fencesBeginRegex: (e)=>new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`),
    headingBeginRegex: (e)=>new RegExp(`^ {0,${Math.min(3, e - 1)}}#`),
    htmlBeginRegex: (e)=>new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i")
};
const newline = /^(?:[ \t]*(?:\n|$))+/;
const Nc = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
const fences = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
const hr_1 = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
const heading = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
const yn = /(?:[*+-]|\d{1,9}[.)])/;
const gs = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;
const lheading_1 = j(gs).replace(/bull/g, yn).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex();
const lheading = j(gs).replace(/bull/g, yn).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();
const wn = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
const qc = /^[^\n]+/;
const xn = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
const def = j(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", xn).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
const list = j(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, yn).getRegex();
const zt = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
const vn = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
const html = j("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", vn).replace("tag", zt).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
const paragraph = j(wn).replace("hr", hr_1).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", zt).getRegex();
const blockquote = j(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", paragraph).getRegex();
const Sn = {
    blockquote,
    code: Nc,
    def,
    fences,
    heading,
    hr: hr_1,
    html,
    lheading: lheading_1,
    list,
    newline,
    paragraph,
    table: Qe,
    text: qc
};
const Ei = j("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", hr_1).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", zt).getRegex();
const gfm = {
    ...Sn,
    lheading,
    table: Ei,
    paragraph: j(wn).replace("hr", hr_1).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Ei).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", zt).getRegex()
};
const Uc = {
    ...Sn,
    html: j(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", vn).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: Qe,
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: j(wn).replace("hr", hr_1).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", lheading_1).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
};
const escape = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
const Wc = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
const br = /^( {2,}|\\)\n(?!\s*$)/;
const Vc = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
const jt = /[\p{P}\p{S}]/u;
const Cn = /[\s\p{P}\p{S}]/u;
const ws = /[^\s\p{P}\p{S}]/u;
const punctuation = j(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Cn).getRegex();
const xs = /(?!~)[\p{P}\p{S}]/u;
const Xc = /(?!~)[\s\p{P}\p{S}]/u;
const Gc = /(?:[^\s\p{P}\p{S}]|~)/u;
const blockSkip = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g;
const vs = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/;
const Qc = j(vs, "u").replace(/punct/g, jt).getRegex();
const Yc = j(vs, "u").replace(/punct/g, xs).getRegex();
const Ss = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
const Jc = j(Ss, "gu").replace(/notPunctSpace/g, ws).replace(/punctSpace/g, Cn).replace(/punct/g, jt).getRegex();
const ed = j(Ss, "gu").replace(/notPunctSpace/g, Gc).replace(/punctSpace/g, Xc).replace(/punct/g, xs).getRegex();
const emStrongRDelimUnd = j("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, ws).replace(/punctSpace/g, Cn).replace(/punct/g, jt).getRegex();
const anyPunctuation = j(/\\(punct)/, "gu").replace(/punct/g, jt).getRegex();
var autolink = j(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
const rd = j(vn).replace("(?:-->|$)", "-->").getRegex();
const sd = j("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", rd).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
const Tt = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
const link = j(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", Tt).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
const reflink = j(/^!?\[(label)\]\[(ref)\]/).replace("label", Tt).replace("ref", xn).getRegex();
const nolink = j(/^!?\[(ref)\](?:\[\])?/).replace("ref", xn).getRegex();
const reflinkSearch = j("reflink|nolink(?!\\()", "g").replace("reflink", reflink).replace("nolink", nolink).getRegex();
const Tn = {
    _backpedal: Qe,
    anyPunctuation,
    autolink,
    blockSkip,
    br,
    code: Wc,
    del: Qe,
    emStrongLDelim: Qc,
    emStrongRDelimAst: Jc,
    emStrongRDelimUnd,
    escape,
    link,
    nolink,
    punctuation,
    reflink,
    reflinkSearch,
    tag: sd,
    text: Vc,
    url: Qe
};
const ad = {
    ...Tn,
    link: j(/^!?\[(label)\]\((.*?)\)/).replace("label", Tt).getRegex(),
    reflink: j(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Tt).getRegex()
};
const gfm_1 = {
    ...Tn,
    emStrongRDelimAst: ed,
    emStrongLDelim: Yc,
    url: j(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
    _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
};
const breaks = {
    ...gfm_1,
    br: j(br).replace("{2,}", "*").getRegex(),
    text: j(gfm_1.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
};
const block = {
    normal: Sn,
    gfm,
    pedantic: Uc
};
const inline = {
    normal: Tn,
    gfm: gfm_1,
    breaks,
    pedantic: ad
};
const cd = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
};
const $i = (e)=>cd[e];
function ke(e, t) {
    if (t) {
        if (other.escapeTest.test(e)) {
            return e.replace(other.escapeReplace, $i);
        }
    } else if (other.escapeTestNoEncode.test(e)) {
        return e.replace(other.escapeReplaceNoEncode, $i);
    }
    return e;
}
function zi(e) {
    try {
        e = encodeURI(e).replace(other.percentDecode, "%");
    } catch  {
        return null;
    }
    return e;
}
function ji(e, t) {
    const n = e.replace(other.findPipe, (s, o, l)=>{
        let a = false;
        let u = o;
        while(--u >= 0 && l[u] === "\\"){
            a = !a;
        }
        if (a) {
            return "|";
        }
        return " |";
    });
    const i = n.split(other.splitPipe);
    let r = 0;
    if (!i[0].trim()) {
        i.shift();
    }
    if (i.length > 0 && !i.at(-1)?.trim()) {
        i.pop();
    }
    if (t) {
        if (i.length > t) {
            i.splice(t);
        } else {
            while(i.length < t){
                i.push("");
            }
        }
    }
    for(; r < i.length; r++){
        i[r] = i[r].trim().replace(other.slashPipe, "|");
    }
    return i;
}
function Ge(e, t, n) {
    const e_length = e.length;
    if (e_length === 0) {
        return "";
    }
    let r = 0;
    while(r < e_length && e.charAt(e_length - r - 1) === t){
        r++;
    }
    return e.slice(0, e_length - r);
}
function dd(e, t) {
    if (e.indexOf(t[1]) === -1) {
        return -1;
    }
    let n = 0;
    for(let i = 0; i < e.length; i++){
        if (e[i] === "\\") {
            i++;
        } else if (e[i] === t[0]) {
            n++;
        } else if (e[i] === t[1] && (n--, n < 0)) {
            return i;
        }
    }
    if (n > 0) {
        return -2;
    }
    return -1;
}
function Ai(e, t, raw, lexer, rules) {
    const t_href = t.href;
    const o = t.title || null;
    const l = e[1].replace(rules.other.outputLinkReplace, "$1");
    lexer.state.inLink = true;
    const a = {
        type: e[0].charAt(0) === "!" ? "image" : "link",
        raw,
        href: t_href,
        title: o,
        text: l,
        tokens: lexer.inlineTokens(l)
    };
    lexer.state.inLink = false;
    return a;
}
function hd(e, t, rules) {
    const i = e.match(rules.other.indentCodeCompensation);
    if (i === null) {
        return t;
    }
    const r = i[1];
    return t.split(`
`).map((s)=>{
        const o = s.match(rules.other.beginningSpace);
        if (o === null) {
            return s;
        }
        const [l] = o;
        if (l.length >= r.length) {
            return s.slice(r.length);
        }
        return s;
    }).join(`
`);
}
class Rt {
    options;
    rules;
    lexer;
    constructor(e){
        this.options = e || Ue;
    }
    space(e) {
        const t = this.rules.block.newline.exec(e);
        if (t && t[0].length > 0) {
            return {
                type: "space",
                raw: t[0]
            };
        }
    }
    code(e) {
        const t = this.rules.block.code.exec(e);
        if (t) {
            const n = t[0].replace(this.rules.other.codeRemoveIndent, "");
            return {
                type: "code",
                raw: t[0],
                codeBlockStyle: "indented",
                text: this.options.pedantic ? n : Ge(n, `
`)
            };
        }
    }
    fences(e) {
        const t = this.rules.block.fences.exec(e);
        if (t) {
            const n = t[0];
            const i = hd(n, t[3] || "", this.rules);
            return {
                type: "code",
                raw: n,
                lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
                text: i
            };
        }
    }
    heading(e) {
        const t = this.rules.block.heading.exec(e);
        if (t) {
            let n = t[2].trim();
            if (this.rules.other.endingHash.test(n)) {
                const i = Ge(n, "#");
                if (this.options.pedantic || !i || this.rules.other.endingSpaceChar.test(i)) {
                    n = i.trim();
                }
            }
            return {
                type: "heading",
                raw: t[0],
                depth: t[1].length,
                text: n,
                tokens: this.lexer.inline(n)
            };
        }
    }
    hr(e) {
        const t = this.rules.block.hr.exec(e);
        if (t) {
            return {
                type: "hr",
                raw: Ge(t[0], `
`)
            };
        }
    }
    blockquote(e) {
        const t = this.rules.block.blockquote.exec(e);
        if (t) {
            let n = Ge(t[0], `
`).split(`
`);
            let i = "";
            let r = "";
            const s = [];
            while(n.length > 0){
                let o = false;
                const l = [];
                let a;
                for(a = 0; a < n.length; a++){
                    if (this.rules.other.blockquoteStart.test(n[a])) {
                        l.push(n[a]);
                        o = true;
                    } else if (!o) {
                        l.push(n[a]);
                    } else {
                        break;
                    }
                }
                n = n.slice(a);
                const u = l.join(`
`);
                const c = u.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
                i = i ? `${i}
${u}` : u;
                r = r ? `${r}
${c}` : c;
                const d = this.lexer.state.top;
                this.lexer.state.top = true;
                this.lexer.blockTokens(c, s, true);
                this.lexer.state.top = d;
                if (n.length === 0) {
                    break;
                }
                const h = s.at(-1);
                if (h?.type === "code") {
                    break;
                }
                if (h?.type === "blockquote") {
                    const p = h;
                    const f = p.raw + `
` + n.join(`
`);
                    const g = this.blockquote(f);
                    s[s.length - 1] = g;
                    i = i.substring(0, i.length - p.raw.length) + g.raw;
                    r = r.substring(0, r.length - p.text.length) + g.text;
                    break;
                } else if (h?.type === "list") {
                    const p = h;
                    const f = p.raw + `
` + n.join(`
`);
                    const g = this.list(f);
                    s[s.length - 1] = g;
                    i = i.substring(0, i.length - h.raw.length) + g.raw;
                    r = r.substring(0, r.length - p.raw.length) + g.raw;
                    n = f.substring(s.at(-1).raw.length).split(`
`);
                    continue;
                }
            }
            return {
                type: "blockquote",
                raw: i,
                tokens: s,
                text: r
            };
        }
    }
    list(e) {
        let t = this.rules.block.list.exec(e);
        if (t) {
            let n = t[1].trim();
            const ordered = n.length > 1;
            const r = {
                type: "list",
                raw: "",
                ordered,
                start: ordered ? +n.slice(0, -1) : "",
                loose: false,
                items: []
            };
            n = ordered ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`;
            if (this.options.pedantic) {
                n = ordered ? n : "[*+-]";
            }
            const s = this.rules.other.listItemRegex(n);
            let o = false;
            while(e){
                let a = false;
                let u = "";
                let c = "";
                if (!(t = s.exec(e)) || this.rules.block.hr.test(e)) {
                    break;
                }
                u = t[0];
                e = e.substring(u.length);
                let d = t[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (b)=>" ".repeat(3 * b.length));
                let h = e.split(`
`, 1)[0];
                let p = !d.trim();
                let f = 0;
                if (this.options.pedantic) {
                    f = 2;
                    c = d.trimStart();
                } else if (p) {
                    f = t[1].length + 1;
                } else {
                    f = t[2].search(this.rules.other.nonSpaceChar);
                    f = f > 4 ? 1 : f;
                    c = d.slice(f);
                    f += t[1].length;
                }
                if (p && this.rules.other.blankLine.test(h)) {
                    u += h + `
`;
                    e = e.substring(h.length + 1);
                    a = true;
                }
                if (!a) {
                    const b = this.rules.other.nextBulletRegex(f);
                    const w = this.rules.other.hrRegex(f);
                    const S = this.rules.other.fencesBeginRegex(f);
                    const T = this.rules.other.headingBeginRegex(f);
                    const M = this.rules.other.htmlBeginRegex(f);
                    while(e){
                        const $ = e.split(`
`, 1)[0];
                        let E;
                        h = $;
                        if (this.options.pedantic) {
                            h = h.replace(this.rules.other.listReplaceNesting, "  ");
                            E = h;
                        } else {
                            E = h.replace(this.rules.other.tabCharGlobal, "    ");
                        }
                        if (S.test(h) || T.test(h) || M.test(h) || b.test(h) || w.test(h)) {
                            break;
                        }
                        if (E.search(this.rules.other.nonSpaceChar) >= f || !h.trim()) {
                            c += `
` + E.slice(f);
                        } else {
                            if (p || d.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || S.test(d) || T.test(d) || w.test(d)) {
                                break;
                            }
                            c += `
` + h;
                        }
                        if (!p && !h.trim()) {
                            p = true;
                        }
                        u += $ + `
`;
                        e = e.substring($.length + 1);
                        d = E.slice(f);
                    }
                }
                r.loose || (o ? r.loose = true : this.rules.other.doubleBlankLine.test(u) && (o = true));
                let g = null;
                let k;
                if (this.options.gfm) {
                    g = this.rules.other.listIsTask.exec(c);
                    if (g) {
                        k = g[0] !== "[ ] ";
                        c = c.replace(this.rules.other.listReplaceTask, "");
                    }
                }
                r.items.push({
                    type: "list_item",
                    raw: u,
                    task: !!g,
                    checked: k,
                    loose: false,
                    text: c,
                    tokens: []
                });
                r.raw += u;
            }
            const l = r.items.at(-1);
            if (l) {
                l.raw = l.raw.trimEnd();
                l.text = l.text.trimEnd();
            } else {
                return;
            }
            r.raw = r.raw.trimEnd();
            for(let a = 0; a < r.items.length; a++){
                this.lexer.state.top = false;
                r.items[a].tokens = this.lexer.blockTokens(r.items[a].text, []);
                if (!r.loose) {
                    const u = r.items[a].tokens.filter((d)=>d.type === "space");
                    const c = u.length > 0 && u.some((d)=>this.rules.other.anyLine.test(d.raw));
                    r.loose = c;
                }
            }
            if (r.loose) {
                for(let a = 0; a < r.items.length; a++){
                    r.items[a].loose = true;
                }
            }
            return r;
        }
    }
    html(e) {
        const t = this.rules.block.html.exec(e);
        if (t) {
            return {
                type: "html",
                block: true,
                raw: t[0],
                pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
                text: t[0]
            };
        }
    }
    def(e) {
        const t = this.rules.block.def.exec(e);
        if (t) {
            const n = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " ");
            const href = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "";
            const r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
            return {
                type: "def",
                tag: n,
                raw: t[0],
                href,
                title: r
            };
        }
    }
    table(e) {
        const t = this.rules.block.table.exec(e);
        if (!t || !this.rules.other.tableDelimiter.test(t[2])) {
            return;
        }
        const n = ji(t[1]);
        const i = t[2].replace(this.rules.other.tableAlignChars, "").split("|");
        const r = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [];
        const s = {
            type: "table",
            raw: t[0],
            header: [],
            align: [],
            rows: []
        };
        if (n.length === i.length) {
            for (const o of i){
                if (this.rules.other.tableAlignRight.test(o)) {
                    s.align.push("right");
                } else if (this.rules.other.tableAlignCenter.test(o)) {
                    s.align.push("center");
                } else if (this.rules.other.tableAlignLeft.test(o)) {
                    s.align.push("left");
                } else {
                    s.align.push(null);
                }
            }
            for(let o = 0; o < n.length; o++){
                s.header.push({
                    text: n[o],
                    tokens: this.lexer.inline(n[o]),
                    header: true,
                    align: s.align[o]
                });
            }
            for (const o of r){
                s.rows.push(ji(o, s.header.length).map((l, a)=>({
                        text: l,
                        tokens: this.lexer.inline(l),
                        header: false,
                        align: s.align[a]
                    })));
            }
            return s;
        }
    }
    lheading(e) {
        const t = this.rules.block.lheading.exec(e);
        if (t) {
            return {
                type: "heading",
                raw: t[0],
                depth: t[2].charAt(0) === "=" ? 1 : 2,
                text: t[1],
                tokens: this.lexer.inline(t[1])
            };
        }
    }
    paragraph(e) {
        const t = this.rules.block.paragraph.exec(e);
        if (t) {
            const n = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
            return {
                type: "paragraph",
                raw: t[0],
                text: n,
                tokens: this.lexer.inline(n)
            };
        }
    }
    text(e) {
        const t = this.rules.block.text.exec(e);
        if (t) {
            return {
                type: "text",
                raw: t[0],
                text: t[0],
                tokens: this.lexer.inline(t[0])
            };
        }
    }
    escape(e) {
        const t = this.rules.inline.escape.exec(e);
        if (t) {
            return {
                type: "escape",
                raw: t[0],
                text: t[1]
            };
        }
    }
    tag(e) {
        const t = this.rules.inline.tag.exec(e);
        if (t) {
            if (!this.lexer.state.inLink && this.rules.other.startATag.test(t[0])) {
                this.lexer.state.inLink = true;
            } else if (this.lexer.state.inLink && this.rules.other.endATag.test(t[0])) {
                this.lexer.state.inLink = false;
            }
            if (!this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0])) {
                this.lexer.state.inRawBlock = true;
            } else if (this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0])) {
                this.lexer.state.inRawBlock = false;
            }
            return {
                type: "html",
                raw: t[0],
                inLink: this.lexer.state.inLink,
                inRawBlock: this.lexer.state.inRawBlock,
                block: false,
                text: t[0]
            };
        }
    }
    link(e) {
        const t = this.rules.inline.link.exec(e);
        if (t) {
            const n = t[2].trim();
            if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n)) {
                if (!this.rules.other.endAngleBracket.test(n)) {
                    return;
                }
                const s = Ge(n.slice(0, -1), "\\");
                if ((n.length - s.length) % 2 === 0) {
                    return;
                }
            } else {
                const s = dd(t[2], "()");
                if (s === -2) {
                    return;
                }
                if (s > -1) {
                    const l = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + s;
                    t[2] = t[2].substring(0, s);
                    t[0] = t[0].substring(0, l).trim();
                    t[3] = "";
                }
            }
            let i = t[2];
            let r = "";
            if (this.options.pedantic) {
                const s = this.rules.other.pedanticHrefTitle.exec(i);
                if (s) {
                    i = s[1];
                    r = s[3];
                }
            } else {
                r = t[3] ? t[3].slice(1, -1) : "";
            }
            i = i.trim();
            this.rules.other.startAngleBracket.test(i) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? i = i.slice(1) : i = i.slice(1, -1));
            return Ai(t, {
                href: i && i.replace(this.rules.inline.anyPunctuation, "$1"),
                title: r && r.replace(this.rules.inline.anyPunctuation, "$1")
            }, t[0], this.lexer, this.rules);
        }
    }
    reflink(e, t) {
        let n;
        if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
            const i = (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " ");
            const r = t[i.toLowerCase()];
            if (!r) {
                const s = n[0].charAt(0);
                return {
                    type: "text",
                    raw: s,
                    text: s
                };
            }
            return Ai(n, r, n[0], this.lexer, this.rules);
        }
    }
    emStrong(e, t, n = "") {
        let i = this.rules.inline.emStrongLDelim.exec(e);
        if (!i || i[3] && n.match(this.rules.other.unicodeAlphaNumeric)) {
            return;
        }
        if (!(i[1] || i[2] || "") || !n || this.rules.inline.punctuation.exec(n)) {
            const s = [
                ...i[0]
            ].length - 1;
            let o;
            let l;
            let a = s;
            let u = 0;
            const c = i[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
            c.lastIndex = 0;
            for(t = t.slice(-1 * e.length + s); (i = c.exec(t)) != null;){
                o = i[1] || i[2] || i[3] || i[4] || i[5] || i[6];
                if (!o) {
                    continue;
                }
                l = [
                    ...o
                ].length;
                if (i[3] || i[4]) {
                    a += l;
                    continue;
                } else if ((i[5] || i[6]) && s % 3 && !((s + l) % 3)) {
                    u += l;
                    continue;
                }
                a -= l;
                if (a > 0) {
                    continue;
                }
                l = Math.min(l, l + a + u);
                const d = [
                    ...i[0]
                ][0].length;
                const h = e.slice(0, s + i.index + d + l);
                if (Math.min(s, l) % 2) {
                    const f = h.slice(1, -1);
                    return {
                        type: "em",
                        raw: h,
                        text: f,
                        tokens: this.lexer.inlineTokens(f)
                    };
                }
                const p = h.slice(2, -2);
                return {
                    type: "strong",
                    raw: h,
                    text: p,
                    tokens: this.lexer.inlineTokens(p)
                };
            }
        }
    }
    codespan(e) {
        const t = this.rules.inline.code.exec(e);
        if (t) {
            let n = t[2].replace(this.rules.other.newLineCharGlobal, " ");
            const i = this.rules.other.nonSpaceChar.test(n);
            const r = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
            if (i && r) {
                n = n.substring(1, n.length - 1);
            }
            return {
                type: "codespan",
                raw: t[0],
                text: n
            };
        }
    }
    br(e) {
        const t = this.rules.inline.br.exec(e);
        if (t) {
            return {
                type: "br",
                raw: t[0]
            };
        }
    }
    del(e) {
        const t = this.rules.inline.del.exec(e);
        if (t) {
            return {
                type: "del",
                raw: t[0],
                text: t[2],
                tokens: this.lexer.inlineTokens(t[2])
            };
        }
    }
    autolink(e) {
        const t = this.rules.inline.autolink.exec(e);
        if (t) {
            let n;
            let i;
            if (t[2] === "@") {
                n = t[1];
                i = `mailto:${n}`;
            } else {
                n = t[1];
                i = n;
            }
            return {
                type: "link",
                raw: t[0],
                text: n,
                href: i,
                tokens: [
                    {
                        type: "text",
                        raw: n,
                        text: n
                    }
                ]
            };
        }
    }
    url(e) {
        let t;
        if (t = this.rules.inline.url.exec(e)) {
            let n;
            let i;
            if (t[2] === "@") {
                n = t[0];
                i = `mailto:${n}`;
            } else {
                let r;
                do {
                    r = t[0];
                    t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
                }while (r !== t[0])
                n = t[0];
                if (t[1] === "www.") {
                    i = `http://${t[0]}`;
                } else {
                    i = t[0];
                }
            }
            return {
                type: "link",
                raw: t[0],
                text: n,
                href: i,
                tokens: [
                    {
                        type: "text",
                        raw: n,
                        text: n
                    }
                ]
            };
        }
    }
    inlineText(e) {
        const t = this.rules.inline.text.exec(e);
        if (t) {
            const escaped = this.lexer.state.inRawBlock;
            return {
                type: "text",
                raw: t[0],
                text: t[0],
                escaped
            };
        }
    }
}
const Ee = class un {
    tokens;
    options;
    state;
    tokenizer;
    inlineQueue;
    constructor(t){
        this.tokens = [];
        this.tokens.links = Object.create(null);
        this.options = t || Ue;
        this.options.tokenizer = this.options.tokenizer || new Rt;
        this.tokenizer = this.options.tokenizer;
        this.tokenizer.options = this.options;
        this.tokenizer.lexer = this;
        this.inlineQueue = [];
        this.state = {
            inLink: false,
            inRawBlock: false,
            top: true
        };
        const n = {
            other,
            block: block.normal,
            inline: inline.normal
        };
        if (this.options.pedantic) {
            n.block = block.pedantic;
            n.inline = inline.pedantic;
        } else if (this.options.gfm) {
            n.block = block.gfm;
            if (this.options.breaks) {
                n.inline = inline.breaks;
            } else {
                n.inline = inline.gfm;
            }
        }
        this.tokenizer.rules = n;
    }
    static get rules() {
        return {
            block,
            inline
        };
    }
    static lex(t, n) {
        return new un(n).lex(t);
    }
    static lexInline(t, n) {
        return new un(n).inlineTokens(t);
    }
    lex(t) {
        t = t.replace(other.carriageReturn, `
`);
        this.blockTokens(t, this.tokens);
        for(let n = 0; n < this.inlineQueue.length; n++){
            const i = this.inlineQueue[n];
            this.inlineTokens(i.src, i.tokens);
        }
        this.inlineQueue = [];
        return this.tokens;
    }
    blockTokens(t, n = [], i = false) {
        for(this.options.pedantic && (t = t.replace(other.tabCharGlobal, "    ").replace(other.spaceLine, "")); t;){
            let r;
            if (this.options.extensions?.block?.some((o)=>{
                if (r = o.call({
                    lexer: this
                }, t, n)) {
                    t = t.substring(r.raw.length);
                    n.push(r);
                    return true;
                }
                return false;
            })) {
                continue;
            }
            if (r = this.tokenizer.space(t)) {
                t = t.substring(r.raw.length);
                const o = n.at(-1);
                if (r.raw.length === 1 && o !== undefined) {
                    o.raw += `
`;
                } else {
                    n.push(r);
                }
                continue;
            }
            if (r = this.tokenizer.code(t)) {
                t = t.substring(r.raw.length);
                const o = n.at(-1);
                if (o?.type === "paragraph" || o?.type === "text") {
                    o.raw += `
` + r.raw;
                    o.text += `
` + r.text;
                    this.inlineQueue.at(-1).src = o.text;
                } else {
                    n.push(r);
                }
                continue;
            }
            if (r = this.tokenizer.fences(t)) {
                t = t.substring(r.raw.length);
                n.push(r);
                continue;
            }
            if (r = this.tokenizer.heading(t)) {
                t = t.substring(r.raw.length);
                n.push(r);
                continue;
            }
            if (r = this.tokenizer.hr(t)) {
                t = t.substring(r.raw.length);
                n.push(r);
                continue;
            }
            if (r = this.tokenizer.blockquote(t)) {
                t = t.substring(r.raw.length);
                n.push(r);
                continue;
            }
            if (r = this.tokenizer.list(t)) {
                t = t.substring(r.raw.length);
                n.push(r);
                continue;
            }
            if (r = this.tokenizer.html(t)) {
                t = t.substring(r.raw.length);
                n.push(r);
                continue;
            }
            if (r = this.tokenizer.def(t)) {
                t = t.substring(r.raw.length);
                const o = n.at(-1);
                if (o?.type === "paragraph" || o?.type === "text") {
                    o.raw += `
` + r.raw;
                    o.text += `
` + r.raw;
                    this.inlineQueue.at(-1).src = o.text;
                } else if (!this.tokens.links[r.tag]) {
                    this.tokens.links[r.tag] = {
                        href: r.href,
                        title: r.title
                    };
                }
                continue;
            }
            if (r = this.tokenizer.table(t)) {
                t = t.substring(r.raw.length);
                n.push(r);
                continue;
            }
            if (r = this.tokenizer.lheading(t)) {
                t = t.substring(r.raw.length);
                n.push(r);
                continue;
            }
            let s = t;
            if (this.options.extensions?.startBlock) {
                let o = Infinity;
                const l = t.slice(1);
                let a;
                this.options.extensions.startBlock.forEach((u)=>{
                    a = u.call({
                        lexer: this
                    }, l);
                    if (typeof a === "number" && a >= 0) {
                        o = Math.min(o, a);
                    }
                });
                if (o < Infinity && o >= 0) {
                    s = t.substring(0, o + 1);
                }
            }
            if (this.state.top && (r = this.tokenizer.paragraph(s))) {
                const o = n.at(-1);
                if (i && o?.type === "paragraph") {
                    o.raw += `
` + r.raw;
                    o.text += `
` + r.text;
                    this.inlineQueue.pop();
                    this.inlineQueue.at(-1).src = o.text;
                } else {
                    n.push(r);
                }
                i = s.length !== t.length;
                t = t.substring(r.raw.length);
                continue;
            }
            if (r = this.tokenizer.text(t)) {
                t = t.substring(r.raw.length);
                const o = n.at(-1);
                if (o?.type === "text") {
                    o.raw += `
` + r.raw;
                    o.text += `
` + r.text;
                    this.inlineQueue.pop();
                    this.inlineQueue.at(-1).src = o.text;
                } else {
                    n.push(r);
                }
                continue;
            }
            if (t) {
                const o = `Infinite loop on byte: ${t.charCodeAt(0)}`;
                if (this.options.silent) {
                    console.error(o);
                    break;
                } else {
                    throw new Error(o);
                }
            }
        }
        this.state.top = true;
        return n;
    }
    inline(t, n = []) {
        this.inlineQueue.push({
            src: t,
            tokens: n
        });
        return n;
    }
    inlineTokens(t, n = []) {
        let i = t;
        let r = null;
        if (this.tokens.links) {
            const l = Object.keys(this.tokens.links);
            if (l.length > 0) {
                while((r = this.tokenizer.rules.inline.reflinkSearch.exec(i)) != null){
                    if (l.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1))) {
                        i = `${i.slice(0, r.index)}[${"a".repeat(r[0].length - 2)}]${i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex)}`;
                    }
                }
            }
        }
        while((r = this.tokenizer.rules.inline.anyPunctuation.exec(i)) != null){
            i = `${i.slice(0, r.index)}++${i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex)}`;
        }
        while((r = this.tokenizer.rules.inline.blockSkip.exec(i)) != null){
            i = `${i.slice(0, r.index)}[${"a".repeat(r[0].length - 2)}]${i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex)}`;
        }
        let s = false;
        let o = "";
        while(t){
            if (!s) {
                o = "";
            }
            s = false;
            let l;
            if (this.options.extensions?.inline?.some((u)=>{
                if (l = u.call({
                    lexer: this
                }, t, n)) {
                    t = t.substring(l.raw.length);
                    n.push(l);
                    return true;
                }
                return false;
            })) {
                continue;
            }
            if (l = this.tokenizer.escape(t)) {
                t = t.substring(l.raw.length);
                n.push(l);
                continue;
            }
            if (l = this.tokenizer.tag(t)) {
                t = t.substring(l.raw.length);
                n.push(l);
                continue;
            }
            if (l = this.tokenizer.link(t)) {
                t = t.substring(l.raw.length);
                n.push(l);
                continue;
            }
            if (l = this.tokenizer.reflink(t, this.tokens.links)) {
                t = t.substring(l.raw.length);
                const u = n.at(-1);
                if (l.type === "text" && u?.type === "text") {
                    u.raw += l.raw;
                    u.text += l.text;
                } else {
                    n.push(l);
                }
                continue;
            }
            if (l = this.tokenizer.emStrong(t, i, o)) {
                t = t.substring(l.raw.length);
                n.push(l);
                continue;
            }
            if (l = this.tokenizer.codespan(t)) {
                t = t.substring(l.raw.length);
                n.push(l);
                continue;
            }
            if (l = this.tokenizer.br(t)) {
                t = t.substring(l.raw.length);
                n.push(l);
                continue;
            }
            if (l = this.tokenizer.del(t)) {
                t = t.substring(l.raw.length);
                n.push(l);
                continue;
            }
            if (l = this.tokenizer.autolink(t)) {
                t = t.substring(l.raw.length);
                n.push(l);
                continue;
            }
            if (!this.state.inLink && (l = this.tokenizer.url(t))) {
                t = t.substring(l.raw.length);
                n.push(l);
                continue;
            }
            let a = t;
            if (this.options.extensions?.startInline) {
                let u = Infinity;
                const c = t.slice(1);
                let d;
                this.options.extensions.startInline.forEach((h)=>{
                    d = h.call({
                        lexer: this
                    }, c);
                    if (typeof d === "number" && d >= 0) {
                        u = Math.min(u, d);
                    }
                });
                if (u < Infinity && u >= 0) {
                    a = t.substring(0, u + 1);
                }
            }
            if (l = this.tokenizer.inlineText(a)) {
                t = t.substring(l.raw.length);
                if (l.raw.slice(-1) !== "_") {
                    o = l.raw.slice(-1);
                }
                s = true;
                const u = n.at(-1);
                if (u?.type === "text") {
                    u.raw += l.raw;
                    u.text += l.text;
                } else {
                    n.push(l);
                }
                continue;
            }
            if (t) {
                const u = `Infinite loop on byte: ${t.charCodeAt(0)}`;
                if (this.options.silent) {
                    console.error(u);
                    break;
                } else {
                    throw new Error(u);
                }
            }
        }
        return n;
    }
};
class Mt {
    options;
    parser;
    constructor(e){
        this.options = e || Ue;
    }
    space(e) {
        return "";
    }
    code({ text, lang, escaped }) {
        const i = (lang || "").match(other.notSpaceStart)?.[0];
        const r = text.replace(other.endingNewline, "") + `
`;
        if (i) {
            return `<pre><code class="language-${ke(i)}">${escaped ? r : ke(r, true)}${`</code></pre>
`}`;
        }
        return `<pre><code>${escaped ? r : ke(r, true)}${`</code></pre>
`}`;
    }
    blockquote({ tokens }) {
        return `<blockquote>
${this.parser.parse(tokens)}</blockquote>
`;
    }
    html({ text }) {
        return text;
    }
    heading({ tokens, depth }) {
        return `<h${depth}>${this.parser.parseInline(tokens)}</h${depth}>
`;
    }
    hr(e) {
        return `<hr>
`;
    }
    list(e) {
        const { ordered, start } = e;
        let i = "";
        for(let o = 0; o < e.items.length; o++){
            const item = e.items[o];
            i += this.listitem(item);
        }
        const r = ordered ? "ol" : "ul";
        const s = ordered && start !== 1 ? ` start="${start}"` : "";
        return `<${r}${s}${`>
`}${i}</${r}${`>
`}`;
    }
    listitem(e) {
        let t = "";
        if (e.task) {
            const n = this.checkbox({
                checked: !!e.checked
            });
            if (e.loose) {
                if (e.tokens[0]?.type === "paragraph") {
                    e.tokens[0].text = `${n} ${e.tokens[0].text}`;
                    if (e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && e.tokens[0].tokens[0].type === "text") {
                        e.tokens[0].tokens[0].text = `${n} ${ke(e.tokens[0].tokens[0].text)}`;
                        e.tokens[0].tokens[0].escaped = true;
                    }
                } else {
                    e.tokens.unshift({
                        type: "text",
                        raw: `${n} `,
                        text: `${n} `,
                        escaped: true
                    });
                }
            } else {
                t += `${n} `;
            }
        }
        t += this.parser.parse(e.tokens, !!e.loose);
        return `<li>${t}</li>
`;
    }
    checkbox({ checked }) {
        return `<input ${checked ? 'checked="" ' : ""}disabled="" type="checkbox">`;
    }
    paragraph({ tokens }) {
        return `<p>${this.parser.parseInline(tokens)}</p>
`;
    }
    table(e) {
        let t = "";
        let n = "";
        for(let r = 0; r < e.header.length; r++){
            n += this.tablecell(e.header[r]);
        }
        t += this.tablerow({
            text: n
        });
        let i = "";
        for(let r = 0; r < e.rows.length; r++){
            const row = e.rows[r];
            n = "";
            for(let o = 0; o < row.length; o++){
                n += this.tablecell(row[o]);
            }
            i += this.tablerow({
                text: n
            });
        }
        if (i) {
            i = `<tbody>${i}</tbody>`;
        }
        return `<table>
<thead>
` + t + `</thead>
` + i + `</table>
`;
    }
    tablerow({ text }) {
        return `<tr>
${text}</tr>
`;
    }
    tablecell(e) {
        const t = this.parser.parseInline(e.tokens);
        const n = e.header ? "th" : "td";
        return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
    }
    strong({ tokens }) {
        return `<strong>${this.parser.parseInline(tokens)}</strong>`;
    }
    em({ tokens }) {
        return `<em>${this.parser.parseInline(tokens)}</em>`;
    }
    codespan({ text }) {
        return `<code>${ke(text, true)}</code>`;
    }
    br(e) {
        return "<br>";
    }
    del({ tokens }) {
        return `<del>${this.parser.parseInline(tokens)}</del>`;
    }
    link({ href, title, tokens }) {
        const i = this.parser.parseInline(tokens);
        const r = zi(href);
        if (r === null) {
            return i;
        }
        href = r;
        let s = `<a href="${href}"`;
        if (title) {
            s += ` title="${ke(title)}"`;
        }
        s += `>${i}</a>`;
        return s;
    }
    image({ href, title, text, tokens }) {
        if (tokens) {
            text = this.parser.parseInline(tokens, this.parser.textRenderer);
        }
        const r = zi(href);
        if (r === null) {
            return ke(text);
        }
        href = r;
        let s = `<img src="${href}" alt="${text}"`;
        if (title) {
            s += ` title="${ke(title)}"`;
        }
        s += ">";
        return s;
    }
    text(e) {
        if ("tokens" in e && e.tokens) {
            return this.parser.parseInline(e.tokens);
        }
        if ("escaped" in e && e.escaped) {
            return e.text;
        }
        return ke(e.text);
    }
}
class Rn {
    strong({ text }) {
        return text;
    }
    em({ text }) {
        return text;
    }
    codespan({ text }) {
        return text;
    }
    del({ text }) {
        return text;
    }
    html({ text }) {
        return text;
    }
    text({ text }) {
        return text;
    }
    link({ text }) {
        return `${text}`;
    }
    image({ text }) {
        return `${text}`;
    }
    br() {
        return "";
    }
}
const $e = class cn {
    options;
    renderer;
    textRenderer;
    constructor(t){
        this.options = t || Ue;
        this.options.renderer = this.options.renderer || new Mt;
        this.renderer = this.options.renderer;
        this.renderer.options = this.options;
        this.renderer.parser = this;
        this.textRenderer = new Rn;
    }
    static parse(t, n) {
        return new cn(n).parse(t);
    }
    static parseInline(t, n) {
        return new cn(n).parseInline(t);
    }
    parse(t, n = true) {
        let i = "";
        for(let r = 0; r < t.length; r++){
            const s = t[r];
            if (this.options.extensions?.renderers?.[s.type]) {
                const l = s;
                const a = this.options.extensions.renderers[l.type].call({
                    parser: this
                }, l);
                if (a !== false || ![
                    "space",
                    "hr",
                    "heading",
                    "code",
                    "table",
                    "blockquote",
                    "list",
                    "html",
                    "paragraph",
                    "text"
                ].includes(l.type)) {
                    i += a || "";
                    continue;
                }
            }
            const o = s;
            switch(o.type){
                case "space":
                    {
                        i += this.renderer.space(o);
                        continue;
                    }
                case "hr":
                    {
                        i += this.renderer.hr(o);
                        continue;
                    }
                case "heading":
                    {
                        i += this.renderer.heading(o);
                        continue;
                    }
                case "code":
                    {
                        i += this.renderer.code(o);
                        continue;
                    }
                case "table":
                    {
                        i += this.renderer.table(o);
                        continue;
                    }
                case "blockquote":
                    {
                        i += this.renderer.blockquote(o);
                        continue;
                    }
                case "list":
                    {
                        i += this.renderer.list(o);
                        continue;
                    }
                case "html":
                    {
                        i += this.renderer.html(o);
                        continue;
                    }
                case "paragraph":
                    {
                        i += this.renderer.paragraph(o);
                        continue;
                    }
                case "text":
                    {
                        let l = o;
                        let a = this.renderer.text(l);
                        while(r + 1 < t.length && t[r + 1].type === "text"){
                            l = t[++r];
                            a += `
` + this.renderer.text(l);
                        }
                        if (n) {
                            i += this.renderer.paragraph({
                                type: "paragraph",
                                raw: a,
                                text: a,
                                tokens: [
                                    {
                                        type: "text",
                                        raw: a,
                                        text: a,
                                        escaped: true
                                    }
                                ]
                            });
                        } else {
                            i += a;
                        }
                        continue;
                    }
                default:
                    {
                        const l = `Token with "${o.type}" type was not found.`;
                        if (this.options.silent) {
                            console.error(l);
                            return "";
                        }
                        throw new Error(l);
                    }
            }
        }
        return i;
    }
    parseInline(t, n = this.renderer) {
        let i = "";
        for (const s of t){
            if (this.options.extensions?.renderers?.[s.type]) {
                const l = this.options.extensions.renderers[s.type].call({
                    parser: this
                }, s);
                if (l !== false || ![
                    "escape",
                    "html",
                    "link",
                    "image",
                    "strong",
                    "em",
                    "codespan",
                    "br",
                    "del",
                    "text"
                ].includes(s.type)) {
                    i += l || "";
                    continue;
                }
            }
            const o = s;
            switch(o.type){
                case "escape":
                    {
                        i += n.text(o);
                        break;
                    }
                case "html":
                    {
                        i += n.html(o);
                        break;
                    }
                case "link":
                    {
                        i += n.link(o);
                        break;
                    }
                case "image":
                    {
                        i += n.image(o);
                        break;
                    }
                case "strong":
                    {
                        i += n.strong(o);
                        break;
                    }
                case "em":
                    {
                        i += n.em(o);
                        break;
                    }
                case "codespan":
                    {
                        i += n.codespan(o);
                        break;
                    }
                case "br":
                    {
                        i += n.br(o);
                        break;
                    }
                case "del":
                    {
                        i += n.del(o);
                        break;
                    }
                case "text":
                    {
                        i += n.text(o);
                        break;
                    }
                default:
                    {
                        const l = `Token with "${o.type}" type was not found.`;
                        if (this.options.silent) {
                            console.error(l);
                            return "";
                        }
                        throw new Error(l);
                    }
            }
        }
        return i;
    }
};
class xt {
    options;
    block;
    constructor(e){
        this.options = e || Ue;
    }
    static passThroughHooks = new Set([
        "preprocess",
        "postprocess",
        "processAllTokens"
    ]);
    preprocess(e) {
        return e;
    }
    postprocess(e) {
        return e;
    }
    processAllTokens(e) {
        return e;
    }
    provideLexer() {
        if (this.block) {
            return Ee.lex;
        }
        return Ee.lexInline;
    }
    provideParser() {
        if (this.block) {
            return $e.parse;
        }
        return $e.parseInline;
    }
}
class pd {
    defaults = bn();
    options = this.setOptions;
    parse = this.parseMarkdown(true);
    parseInline = this.parseMarkdown(false);
    Parser = $e;
    Renderer = Mt;
    TextRenderer = Rn;
    Lexer = Ee;
    Tokenizer = Rt;
    Hooks = xt;
    constructor(...e){
        this.use(...e);
    }
    walkTokens(e, t) {
        let n = [];
        for (const i of e){
            n = n.concat(t.call(this, i));
            switch(i.type){
                case "table":
                    {
                        const r = i;
                        for (const s of r.header){
                            n = n.concat(this.walkTokens(s.tokens, t));
                        }
                        for (const s of r.rows){
                            for (const o of s){
                                n = n.concat(this.walkTokens(o.tokens, t));
                            }
                        }
                        break;
                    }
                case "list":
                    {
                        const r = i;
                        n = n.concat(this.walkTokens(r.items, t));
                        break;
                    }
                default:
                    {
                        const r = i;
                        if (this.defaults.extensions?.childTokens?.[r.type]) {
                            this.defaults.extensions.childTokens[r.type].forEach((s)=>{
                                const o = r[s].flat(Infinity);
                                n = n.concat(this.walkTokens(o, t));
                            });
                        } else if (r.tokens) {
                            n = n.concat(this.walkTokens(r.tokens, t));
                        }
                    }
            }
        }
        return n;
    }
    use(...e) {
        const t = this.defaults.extensions || {
            renderers: {},
            childTokens: {}
        };
        e.forEach((n)=>{
            const i = {
                ...n
            };
            i.async = this.defaults.async || i.async || false;
            if (n.extensions) {
                n.extensions.forEach((r)=>{
                    if (!r.name) {
                        throw new Error("extension name required");
                    }
                    if ("renderer" in r) {
                        const s = t.renderers[r.name];
                        if (s) {
                            t.renderers[r.name] = function(...o) {
                                let l = r.renderer.apply(this, o);
                                if (l === false) {
                                    l = s.apply(this, o);
                                }
                                return l;
                            };
                        } else {
                            t.renderers[r.name] = r.renderer;
                        }
                    }
                    if ("tokenizer" in r) {
                        if (!r.level || r.level !== "block" && r.level !== "inline") {
                            throw new Error("extension level must be 'block' or 'inline'");
                        }
                        const s = t[r.level];
                        if (s) {
                            s.unshift(r.tokenizer);
                        } else {
                            t[r.level] = [
                                r.tokenizer
                            ];
                        }
                        r.start && (r.level === "block" ? t.startBlock ? t.startBlock.push(r.start) : t.startBlock = [
                            r.start
                        ] : r.level === "inline" && (t.startInline ? t.startInline.push(r.start) : t.startInline = [
                            r.start
                        ]));
                    }
                    if ("childTokens" in r && r.childTokens) {
                        t.childTokens[r.name] = r.childTokens;
                    }
                });
                i.extensions = t;
            }
            if (n.renderer) {
                const r = this.defaults.renderer || new Mt(this.defaults);
                for(const s in n.renderer){
                    if (!(s in r)) {
                        throw new Error(`renderer '${s}' does not exist`);
                    }
                    if ([
                        "options",
                        "parser"
                    ].includes(s)) {
                        continue;
                    }
                    const o = s;
                    const l = n.renderer[o];
                    const a = r[o];
                    r[o] = (...u)=>{
                        let c = l.apply(r, u);
                        if (c === false) {
                            c = a.apply(r, u);
                        }
                        return c || "";
                    };
                }
                i.renderer = r;
            }
            if (n.tokenizer) {
                const r = this.defaults.tokenizer || new Rt(this.defaults);
                for(const s in n.tokenizer){
                    if (!(s in r)) {
                        throw new Error(`tokenizer '${s}' does not exist`);
                    }
                    if ([
                        "options",
                        "rules",
                        "lexer"
                    ].includes(s)) {
                        continue;
                    }
                    const o = s;
                    const l = n.tokenizer[o];
                    const a = r[o];
                    r[o] = (...u)=>{
                        let c = l.apply(r, u);
                        if (c === false) {
                            c = a.apply(r, u);
                        }
                        return c;
                    };
                }
                i.tokenizer = r;
            }
            if (n.hooks) {
                const r = this.defaults.hooks || new xt;
                for(const s in n.hooks){
                    if (!(s in r)) {
                        throw new Error(`hook '${s}' does not exist`);
                    }
                    if ([
                        "options",
                        "block"
                    ].includes(s)) {
                        continue;
                    }
                    const o = s;
                    const l = n.hooks[o];
                    const a = r[o];
                    if (xt.passThroughHooks.has(s)) {
                        r[o] = (u)=>{
                            if (this.defaults.async) {
                                return Promise.resolve(l.call(r, u)).then((d)=>a.call(r, d));
                            }
                            const c = l.call(r, u);
                            return a.call(r, c);
                        };
                    } else {
                        r[o] = (...u)=>{
                            let c = l.apply(r, u);
                            if (c === false) {
                                c = a.apply(r, u);
                            }
                            return c;
                        };
                    }
                }
                i.hooks = r;
            }
            if (n.walkTokens) {
                const r = this.defaults.walkTokens;
                const s = n.walkTokens;
                i.walkTokens = function(o) {
                    let l = [];
                    l.push(s.call(this, o));
                    if (r) {
                        l = l.concat(r.call(this, o));
                    }
                    return l;
                };
            }
            this.defaults = {
                ...this.defaults,
                ...i
            };
        });
        return this;
    }
    setOptions(e) {
        this.defaults = {
            ...this.defaults,
            ...e
        };
        return this;
    }
    lexer(e, t) {
        return Ee.lex(e, t ?? this.defaults);
    }
    parser(e, t) {
        return $e.parse(e, t ?? this.defaults);
    }
    parseMarkdown(e) {
        return (n, i)=>{
            const r = {
                ...i
            };
            const s = {
                ...this.defaults,
                ...r
            };
            const o = this.onError(!!s.silent, !!s.async);
            if (this.defaults.async === true && r.async === false) {
                return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
            }
            if (typeof n === "undefined" || n === null) {
                return o(new Error("marked(): input parameter is undefined or null"));
            }
            if (typeof n !== "string") {
                return o(new Error(`marked(): input parameter is of type ${Object.prototype.toString.call(n)}, string expected`));
            }
            if (s.hooks) {
                s.hooks.options = s;
                s.hooks.block = e;
            }
            const l = s.hooks ? s.hooks.provideLexer() : e ? Ee.lex : Ee.lexInline;
            const a = s.hooks ? s.hooks.provideParser() : e ? $e.parse : $e.parseInline;
            if (s.async) {
                return Promise.resolve(s.hooks ? s.hooks.preprocess(n) : n).then((u)=>l(u, s)).then((u)=>{
                    if (s.hooks) {
                        return s.hooks.processAllTokens(u);
                    }
                    return u;
                }).then((u)=>{
                    if (s.walkTokens) {
                        return Promise.all(this.walkTokens(u, s.walkTokens)).then(()=>u);
                    }
                    return u;
                }).then((u)=>a(u, s)).then((u)=>{
                    if (s.hooks) {
                        return s.hooks.postprocess(u);
                    }
                    return u;
                }).catch(o);
            }
            try {
                if (s.hooks) {
                    n = s.hooks.preprocess(n);
                }
                let u = l(n, s);
                if (s.hooks) {
                    u = s.hooks.processAllTokens(u);
                }
                if (s.walkTokens) {
                    this.walkTokens(u, s.walkTokens);
                }
                let c = a(u, s);
                if (s.hooks) {
                    c = s.hooks.postprocess(c);
                }
                return c;
            } catch (error) {
                return o(error);
            }
        };
    }
    onError(e, t) {
        return (n)=>{
            n.message += `
Please report this to https://github.com/markedjs/marked.`;
            if (e) {
                const i = `<p>An error occurred:</p><pre>${ke(`${n.message}`, true)}</pre>`;
                if (t) {
                    return Promise.resolve(i);
                }
                return i;
            }
            if (t) {
                return Promise.reject(n);
            }
            throw n;
        };
    }
}
const De = new pd;
function A(e, t) {
    return De.parse(e, t);
}
A.options = A.setOptions = (e)=>{
    De.setOptions(e);
    A.defaults = De.defaults;
    ms(A.defaults);
    return A;
};
A.getDefaults = bn;
A.defaults = Ue;
A.use = (...e)=>{
    De.use(...e);
    A.defaults = De.defaults;
    ms(A.defaults);
    return A;
};
A.walkTokens = (e, t)=>De.walkTokens(e, t);
A.parseInline = De.parseInline;
A.Parser = $e;
A.parser = $e.parse;
A.Renderer = Mt;
A.TextRenderer = Rn;
A.Lexer = Ee;
A.lexer = Ee.lex;
A.Tokenizer = Rt;
A.Hooks = xt;
A.parse = A;
A.options;
A.setOptions;
A.use;
A.walkTokens;
A.parseInline;
$e.parse;
Ee.lex;
function wrapInBlock(e, t) {
    const i = t.split(`
`).flatMap((r)=>[
            r,
            ""
        ]).map((r)=>`${e}${r}`).join(`
`);
    return i.slice(0, i.length - 1);
}
function md(e, t) {
    const n = [];
    Array.from(e.keys()).forEach((i)=>{
        if (!t.has(i)) {
            n.push(i);
        }
    });
    return n;
}
function gd(e, t) {
    const n = [];
    Array.from(t.entries()).forEach(([i, r])=>{
        if (!e.has(i)) {
            n.push({
                type: i,
                mark: r
            });
        }
    });
    return n;
}
function kd(e, t, n, i) {
    const r = !n;
    const s = n && n.type === "text" && (!n.marks || n.marks.length === 0);
    const o = n && n.type === "text" && n.marks && !i(t, new Map(n.marks.map((a)=>[
            a.type,
            a
        ])));
    const l = [];
    if (r || s || o) {
        if (n && n.type === "text" && n.marks) {
            const a = new Map(n.marks.map((u)=>[
                    u.type,
                    u
                ]));
            Array.from(e.keys()).forEach((u)=>{
                if (!a.has(u)) {
                    l.push(u);
                }
            });
        } else {
            if (r || s) {
                l.push(...Array.from(e.keys()));
            }
        }
    }
    return l;
}
function bd(e, t) {
    let n = "";
    Array.from(e.keys()).reverse().forEach((i)=>{
        const r = e.get(i);
        const s = t(i, r);
        if (s) {
            n = s + n;
        }
    });
    e.clear();
    return n;
}
function yd(e, t, n) {
    let i = "";
    Array.from(e.entries()).forEach(([r, s])=>{
        const o = n(r, s);
        if (o) {
            i += o;
        }
        t.set(r, s);
    });
    return i;
}
function Ut(e) {
    const n = (e.raw || e.text || "").match(/^(\s*)[-+*]\s+\[([ xX])\]\s+/);
    if (n) {
        return {
            isTask: true,
            checked: n[2].toLowerCase() === "x",
            indentLevel: n[1].length
        };
    }
    return {
        isTask: false,
        indentLevel: 0
    };
}
function gt(e, t) {
    if (typeof e !== "string") {
        return "json";
    }
    return t;
}
class wd {
    constructor(e){
        this.baseExtensions = [];
        this.extensions = [];
        this.lastParseResult = null;
        this.markedInstance = e?.marked ?? A;
        this.lexer = new this.markedInstance.Lexer;
        this.indentStyle = e?.indentation?.style ?? "space";
        this.indentSize = e?.indentation?.size ?? 2;
        this.baseExtensions = e?.extensions || [];
        if (e?.markedOptions && typeof this.markedInstance.setOptions === "function") {
            this.markedInstance.setOptions(e.markedOptions);
        }
        this.registry = new Map;
        this.nodeTypeRegistry = new Map;
        if (e?.extensions) {
            this.baseExtensions = e.extensions;
            U_2(e.extensions).forEach((l)=>this.registerExtension(l, false));
        }
        this.lexer = new this.markedInstance.Lexer;
    }
    get instance() {
        return this.markedInstance;
    }
    get indentCharacter() {
        if (this.indentStyle === "space") {
            return " ";
        }
        return "	";
    }
    get indentString() {
        return this.indentCharacter.repeat(this.indentSize);
    }
    hasMarked() {
        return !!this.markedInstance;
    }
    registerExtension(e, t = true) {
        this.extensions.push(e);
        const e_name = e.name;
        const tokenName = J(e, "markdownTokenName") || e_name;
        const parseMarkdown = J(e, "parseMarkdown");
        const renderMarkdown = J(e, "renderMarkdown");
        const tokenizer = J(e, "markdownTokenizer");
        const u = J(e, "markdownOptions") ?? null;
        const isIndenting = u?.indentsContent ?? false;
        const d = {
            tokenName,
            nodeName: e_name,
            parseMarkdown,
            renderMarkdown,
            isIndenting,
            tokenizer
        };
        if (tokenName && parseMarkdown) {
            const h = this.registry.get(tokenName) || [];
            h.push(d);
            this.registry.set(tokenName, h);
        }
        if (renderMarkdown) {
            const h = this.nodeTypeRegistry.get(e_name) || [];
            h.push(d);
            this.nodeTypeRegistry.set(e_name, h);
        }
        if (tokenizer && this.hasMarked()) {
            this.registerTokenizer(tokenizer);
            if (t) {
                this.lexer = new this.markedInstance.Lexer;
            }
        }
    }
    registerTokenizer(e) {
        if (!this.hasMarked()) {
            return;
        }
        const { name, start, level = "inline", tokenize } = e;
        const l = {
            inlineTokens: (c)=>this.lexer.inlineTokens(c),
            blockTokens: (c)=>this.lexer.blockTokens(c)
        };
        let start_1;
        if (start) {
            start_1 = typeof start === "function" ? start : (c)=>c.indexOf(start);
        } else {
            start_1 = (c)=>{
                const d = tokenize(c, [], l);
                if (d && d.raw) {
                    return c.indexOf(d.raw);
                }
                return -1;
            };
        }
        const u = {
            name,
            level,
            start: start_1,
            tokenizer: (c, d)=>{
                const h = tokenize(c, d, l);
                if (h && h.type) {
                    return {
                        ...h,
                        type: h.type || name,
                        raw: h.raw || "",
                        tokens: h.tokens || []
                    };
                }
            },
            childTokens: []
        };
        this.markedInstance.use({
            extensions: [
                u
            ]
        });
    }
    getHandlersForToken(e) {
        try {
            return this.registry.get(e) || [];
        } catch  {
            return [];
        }
    }
    getHandlerForToken(e) {
        const t = this.getHandlersForToken(e);
        if (t.length > 0) {
            return t[0];
        }
        const n = this.getHandlersForNodeType(e);
        if (n.length > 0) {
            return n[0];
        }
    }
    getHandlersForNodeType(e) {
        try {
            return this.nodeTypeRegistry.get(e) || [];
        } catch  {
            return [];
        }
    }
    serialize(e) {
        if (e) {
            if (Array.isArray(e)) {
                return this.renderNodes(e, e);
            }
            return this.renderNodes(e, e);
        }
        return "";
    }
    parse(e) {
        if (!this.hasMarked()) {
            throw new Error("No marked instance available for parsing");
        }
        const t = this.markedInstance.lexer(e);
        return {
            type: "doc",
            content: this.parseTokens(t)
        };
    }
    parseTokens(e) {
        return e.map((t)=>this.parseToken(t)).filter((t)=>t !== null).flatMap((t)=>{
            if (Array.isArray(t)) {
                return t;
            }
            return [
                t
            ];
        });
    }
    parseToken(e) {
        if (!e.type) {
            return null;
        }
        if (e.type === "list") {
            return this.parseListToken(e);
        }
        const t = this.getHandlersForToken(e.type);
        const n = this.createParseHelpers();
        if (t.find((r)=>{
            if (!r.parseMarkdown) {
                return false;
            }
            const s = r.parseMarkdown(e, n);
            const o = this.normalizeParseResult(s);
            if (o && (!Array.isArray(o) || o.length > 0)) {
                this.lastParseResult = o;
                return true;
            }
            return false;
        }) && this.lastParseResult) {
            const r = this.lastParseResult;
            this.lastParseResult = null;
            return r;
        }
        return this.parseFallbackToken(e);
    }
    parseListToken(e) {
        if (!e.items || e.items.length === 0) {
            return this.parseTokenWithHandlers(e);
        }
        const t = e.items.some((l)=>Ut(l).isTask);
        const n = e.items.some((l)=>!Ut(l).isTask);
        if (!t || !n || this.getHandlersForToken("taskList").length === 0) {
            return this.parseTokenWithHandlers(e);
        }
        const i = [];
        let items = [];
        let s = null;
        for(let l = 0; l < e.items.length; l += 1){
            const item = e.items[l];
            const { isTask, checked, indentLevel } = Ut(item);
            let h = item;
            if (isTask) {
                const g = (item.raw || item.text || "").split(`
`);
                const k = g[0].match(/^\s*[-+*]\s+\[([ xX])\]\s+(.*)$/);
                const b = k ? k[2] : "";
                let nestedTokens = [];
                if (g.length > 1 && g.slice(1).join(`
`).trim()) {
                    const T = g.slice(1);
                    const M = T.filter(($)=>$.trim());
                    if (M.length > 0) {
                        const $ = Math.min(...M.map((D)=>D.length - D.trimStart().length));
                        const L = T.map((D)=>{
                            if (D.trim()) {
                                return D.slice($);
                            }
                            return "";
                        }).join(`
`).trim();
                        if (L) {
                            nestedTokens = this.markedInstance.lexer(`${L}
`);
                        }
                    }
                }
                h = {
                    type: "taskItem",
                    raw: "",
                    mainContent: b,
                    indentLevel,
                    checked: checked ?? false,
                    text: b,
                    tokens: this.lexer.inlineTokens(b),
                    nestedTokens
                };
            }
            const p = isTask ? "taskList" : "list";
            if (s !== p) {
                if (items.length > 0) {
                    i.push({
                        type: s,
                        items
                    });
                }
                items = [
                    h
                ];
                s = p;
            } else {
                items.push(h);
            }
        }
        if (items.length > 0) {
            i.push({
                type: s,
                items
            });
        }
        const o = [];
        for(let l = 0; l < i.length; l += 1){
            const a = i[l];
            const u = {
                ...e,
                type: a.type,
                items: a.items
            };
            const c = this.parseToken(u);
            c && (Array.isArray(c) ? o.push(...c) : o.push(c));
        }
        if (o.length > 0) {
            return o;
        }
        return null;
    }
    parseTokenWithHandlers(e) {
        if (!e.type) {
            return null;
        }
        const t = this.getHandlersForToken(e.type);
        const n = this.createParseHelpers();
        if (t.find((r)=>{
            if (!r.parseMarkdown) {
                return false;
            }
            const s = r.parseMarkdown(e, n);
            const o = this.normalizeParseResult(s);
            if (o && (!Array.isArray(o) || o.length > 0)) {
                this.lastParseResult = o;
                return true;
            }
            return false;
        }) && this.lastParseResult) {
            const r = this.lastParseResult;
            this.lastParseResult = null;
            return r;
        }
        return this.parseFallbackToken(e);
    }
    createParseHelpers() {
        return {
            parseInline: (e)=>this.parseInlineTokens(e),
            parseChildren: (e)=>this.parseTokens(e),
            createTextNode: (e, t)=>({
                    type: "text",
                    text: e,
                    marks: t || undefined
                }),
            createNode: (type, t, n)=>{
                const i = {
                    type,
                    attrs: t || undefined,
                    content: n || undefined
                };
                (!t || Object.keys(t).length === 0) && delete i.attrs;
                return i;
            },
            applyMark: (e, content, n)=>({
                    mark: e,
                    content,
                    attrs: n && Object.keys(n).length > 0 ? n : undefined
                })
        };
    }
    escapeRegex(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    parseInlineTokens(e) {
        const s = [];
        for(let o = 0; o < e.length; o += 1){
            const l = e[o];
            if (l.type === "text") {
                s.push({
                    type: "text",
                    text: l.text || ""
                });
            } else if (l.type === "html") {
                const a = (l.raw ?? l.text ?? "").toString();
                const u = /^<\/[\s]*[\w-]+/i.test(a);
                const c = a.match(/^<[\s]*([\w-]+)(\s|>|\/|$)/i);
                if (!u && c && !/\/>$/.test(a)) {
                    const h = c[1];
                    const p = this.escapeRegex(h);
                    const f = new RegExp(`^<\\/\\s*${p}\\b`, "i");
                    let g = -1;
                    const k = [
                        a
                    ];
                    for(let b = o + 1; b < e.length; b += 1){
                        const w = e[b];
                        const S = (w.raw ?? w.text ?? "").toString();
                        k.push(S);
                        if (w.type === "html" && f.test(S)) {
                            g = b;
                            break;
                        }
                    }
                    if (g !== -1) {
                        const b = k.join("");
                        const w = {
                            type: "html",
                            raw: b,
                            text: b,
                            block: false
                        };
                        const S = this.parseHTMLToken(w);
                        if (S) {
                            const T = this.normalizeParseResult(S);
                            if (Array.isArray(T)) {
                                s.push(...T);
                            } else if (T) {
                                s.push(T);
                            }
                        }
                        o = g;
                        continue;
                    }
                }
                const d = this.parseHTMLToken(l);
                if (d) {
                    const h = this.normalizeParseResult(d);
                    if (Array.isArray(h)) {
                        s.push(...h);
                    } else if (h) {
                        s.push(h);
                    }
                }
            } else if (l.type) {
                const a = this.getHandlerForToken(l.type);
                if (a && a.parseMarkdown) {
                    const u = this.createParseHelpers();
                    const c = a.parseMarkdown(l, u);
                    if (this.isMarkResult(c)) {
                        const d = this.applyMarkToContent(c.mark, c.content, c.attrs);
                        s.push(...d);
                    } else {
                        const d = this.normalizeParseResult(c);
                        if (Array.isArray(d)) {
                            s.push(...d);
                        } else if (d) {
                            s.push(d);
                        }
                    }
                } else {
                    if (l.tokens) {
                        s.push(...this.parseInlineTokens(l.tokens));
                    }
                }
            }
        }
        return s;
    }
    applyMarkToContent(e, t, attrs) {
        return t.map((i)=>{
            if (i.type === "text") {
                const r = i.marks || [];
                const s = attrs ? {
                    type: e,
                    attrs
                } : {
                    type: e
                };
                return {
                    ...i,
                    marks: [
                        ...r,
                        s
                    ]
                };
            }
            return {
                ...i,
                content: i.content ? this.applyMarkToContent(e, i.content, attrs) : undefined
            };
        });
    }
    isMarkResult(e) {
        return e && typeof e === "object" && "mark" in e;
    }
    normalizeParseResult(e) {
        if (e) {
            if (this.isMarkResult(e)) {
                return e.content;
            }
            return e;
        }
        return null;
    }
    parseFallbackToken(e) {
        switch(e.type){
            case "paragraph":
                return {
                    type: "paragraph",
                    content: e.tokens ? this.parseInlineTokens(e.tokens) : []
                };
            case "heading":
                return {
                    type: "heading",
                    attrs: {
                        level: e.depth || 1
                    },
                    content: e.tokens ? this.parseInlineTokens(e.tokens) : []
                };
            case "text":
                return {
                    type: "text",
                    text: e.text || ""
                };
            case "html":
                return this.parseHTMLToken(e);
            case "space":
                return null;
            default:
                if (e.tokens) {
                    return this.parseTokens(e.tokens);
                }
                return null;
        }
    }
    parseHTMLToken(e) {
        const t = e.text || e.raw || "";
        if (!t.trim()) {
            return null;
        }
        try {
            const n = V_1(t, this.baseExtensions);
            if (n.type === "doc" && n.content) {
                if (e.block) {
                    return n.content;
                }
                if (n.content.length === 1 && n.content[0].type === "paragraph" && n.content[0].content) {
                    return n.content[0].content;
                }
                return n.content;
            }
            return n;
        } catch (error) {
            throw new Error(`Failed to parse HTML in markdown: ${error}`);
        }
    }
    renderNodeToMarkdown(e, t, index = 0, level = 0) {
        if (e.type === "text") {
            return e.text || "";
        }
        if (!e.type) {
            return "";
        }
        const s = this.getHandlerForToken(e.type);
        if (!s) {
            return "";
        }
        const o = {
            renderChildren: (u, c)=>{
                const d = s.isIndenting ? level + 1 : level;
                if (!Array.isArray(u) && u.content) {
                    return this.renderNodes(u.content, e, c || "", index, d);
                }
                return this.renderNodes(u, e, c || "", index, d);
            },
            indent: (u)=>this.indentString + u,
            wrapInBlock
        };
        const l = {
            index,
            level,
            parentType: t?.type,
            meta: {}
        };
        return s.renderMarkdown?.(e, o, l) || "";
    }
    renderNodes(e, t, n = "", i = 0, r = 0) {
        if (Array.isArray(e)) {
            return this.renderNodesWithMarkBoundaries(e, t, n, r);
        }
        if (e.type) {
            return this.renderNodeToMarkdown(e, t, i, r);
        }
        return "";
    }
    renderNodesWithMarkBoundaries(e, t, n = "", i = 0) {
        const r = [];
        const s = new Map;
        e.forEach((o, l)=>{
            const a = l < e.length - 1 ? e[l + 1] : null;
            if (o.type) {
                if (o.type === "text") {
                    let u = o.text || "";
                    const c = new Map((o.marks || []).map((k)=>[
                            k.type,
                            k
                        ]));
                    const d = md(s, c);
                    const h = gd(s, c);
                    d.forEach((k)=>{
                        const b = s.get(k);
                        const w = this.getMarkClosing(k, b);
                        if (w) {
                            u += w;
                        }
                        s.delete(k);
                    });
                    let p = "";
                    if (h.length > 0) {
                        const k = u.match(/^(\s+)/);
                        if (k) {
                            p = k[1];
                            u = u.slice(p.length);
                        }
                    }
                    h.forEach(({ type, mark })=>{
                        const w = this.getMarkOpening(type, mark);
                        if (w) {
                            u = w + u;
                        }
                        s.set(type, mark);
                    });
                    u = p + u;
                    const f = kd(s, c, a, this.markSetsEqual.bind(this));
                    let g = "";
                    if (f.length > 0) {
                        const k = u.match(/(\s+)$/);
                        if (k) {
                            g = k[1];
                            u = u.slice(0, -g.length);
                        }
                    }
                    f.forEach((k)=>{
                        const b = s.get(k);
                        const w = this.getMarkClosing(k, b);
                        if (w) {
                            u += w;
                        }
                        s.delete(k);
                    });
                    u += g;
                    r.push(u);
                } else {
                    const u = new Map(s);
                    const c = bd(s, this.getMarkClosing.bind(this));
                    const d = this.renderNodeToMarkdown(o, t, l, i);
                    const h = o.type === "hardBreak" ? "" : yd(u, s, this.getMarkOpening.bind(this));
                    r.push(c + d + h);
                }
            }
        });
        return r.join(n);
    }
    getMarkOpening(e, t) {
        const n = this.getHandlersForNodeType(e);
        const i = n.length > 0 ? n[0] : undefined;
        if (!i || !i.renderMarkdown) {
            return "";
        }
        const r = "\uE000__TIPTAP_MARKDOWN_PLACEHOLDER__\uE001";
        const s = {
            type: e,
            attrs: t.attrs || {},
            content: [
                {
                    type: "text",
                    text: r
                }
            ]
        };
        try {
            const o = i.renderMarkdown(s, {
                renderChildren: ()=>r,
                indent: (a)=>a,
                wrapInBlock: (a, u)=>a + u
            }, {
                index: 0,
                level: 0,
                parentType: "text",
                meta: {}
            });
            const l = o.indexOf(r);
            if (l >= 0) {
                return o.substring(0, l);
            }
            return "";
        } catch (error) {
            throw new Error(`Failed to get mark opening for ${e}: ${error}`);
        }
    }
    getMarkClosing(e, t) {
        const n = this.getHandlersForNodeType(e);
        const i = n.length > 0 ? n[0] : undefined;
        if (!i || !i.renderMarkdown) {
            return "";
        }
        const r = "\uE000__TIPTAP_MARKDOWN_PLACEHOLDER__\uE001";
        const s = {
            type: e,
            attrs: t.attrs || {},
            content: [
                {
                    type: "text",
                    text: r
                }
            ]
        };
        try {
            const o = i.renderMarkdown(s, {
                renderChildren: ()=>r,
                indent: (u)=>u,
                wrapInBlock: (u, c)=>u + c
            }, {
                index: 0,
                level: 0,
                parentType: "text",
                meta: {}
            });
            const l = o.indexOf(r);
            const a = l + r.length;
            if (l >= 0) {
                return o.substring(a);
            }
            return "";
        } catch (error) {
            throw new Error(`Failed to get mark closing for ${e}: ${error}`);
        }
    }
    markSetsEqual(e, t) {
        if (e.size !== t.size) {
            return false;
        }
        return Array.from(e.keys()).every((n)=>t.has(n));
    }
}
const Ni = wd;
const xd = j_2.create({
    name: "markdown",
    addOptions () {
        return {
            indentation: {
                style: "space",
                size: 2
            },
            marked: undefined,
            markedOptions: {}
        };
    },
    addCommands () {
        return {
            setContent: (e, t)=>{
                if (!t?.contentType) {
                    return R_1.setContent(e, t);
                }
                if (gt(e, t?.contentType) !== "markdown" || !this.editor.markdown) {
                    return R_1.setContent(e, t);
                }
                const i = this.editor.markdown.parse(e);
                return R_1.setContent(i, t);
            },
            insertContent: (e, t)=>{
                if (!t?.contentType) {
                    return R_1.insertContent(e, t);
                }
                if (gt(e, t?.contentType) !== "markdown" || !this.editor.markdown) {
                    return R_1.insertContent(e, t);
                }
                const i = this.editor.markdown.parse(e);
                return R_1.insertContent(i, t);
            },
            insertContentAt: (e, t, n)=>{
                if (!n?.contentType) {
                    return R_1.insertContentAt(e, t, n);
                }
                if (gt(t, n?.contentType) !== "markdown" || !this.editor.markdown) {
                    return R_1.insertContentAt(e, t, n);
                }
                const r = this.editor.markdown.parse(t);
                return R_1.insertContentAt(e, r, n);
            }
        };
    },
    addStorage () {
        return {
            manager: new Ni({
                indentation: this.options.indentation,
                marked: this.options.marked,
                markedOptions: this.options.markedOptions,
                extensions: []
            })
        };
    },
    onBeforeCreate () {
        if (this.editor.markdown) {
            console.error("[tiptap][markdown]: There is already a `markdown` property on the editor instance. This might lead to unexpected behavior.");
            return;
        }
        this.storage.manager = new Ni({
            indentation: this.options.indentation,
            marked: this.options.marked,
            markedOptions: this.options.markedOptions,
            extensions: this.editor.extensionManager.baseExtensions
        });
        this.editor.markdown = this.storage.manager;
        this.editor.getMarkdown = ()=>this.storage.manager.serialize(this.editor.getJSON());
        if (!this.editor.options.contentType || gt(this.editor.options.content, this.editor.options.contentType) !== "markdown") {
            return;
        }
        if (!this.editor.markdown) {
            throw new Error('[tiptap][markdown]: The `contentType` option is set to "markdown", but the Markdown extension is not added to the editor. Please add the Markdown extension to use this feature.');
        }
        if (this.editor.options.content === undefined || typeof this.editor.options.content !== "string") {
            throw new Error('[tiptap][markdown]: The `contentType` option is set to "markdown", but the initial content is not a string. Please provide the initial content as a markdown string.');
        }
        const t = this.editor.markdown.parse(this.editor.options.content);
        this.editor.options.content = t;
    }
});
function Ii(e) {
    return encodeURI(e.trim().toLowerCase().replace(/\s+/g, "-").replace(/[\][!/'"#$%&()*+,.:;<=>?@\\^{|}~`\u3002\uFF0C\u3001\uFF1B\uFF1A\uFF1F\uFF01\u2026\u2014·\u02C9¨\u2018\u2019\u201C\u201D\u3005\uFF5E\u2016\u2236\uFF02\uFF07\uFF40\uFF5C\u3003\u3014\u3015\u3008\u3009\u300A\u300B\u300C\u300D\u300E\u300F\uFF0E\u3016\u3017\u3010\u3011\uFF08\uFF09\uFF3B\uFF3D\uFF5B\uFF5D]/g, "").replace(/^-+/, "").replace(/-+$/, ""));
}
function Li(e) {
    try {
        return decodeURIComponent(e);
    } catch  {
        return e;
    }
}
function vd(doc, t) {
    const n = Li(t);
    const i = new Map;
    let r = null;
    doc.descendants((s, o)=>{
        if (r !== null) {
            return false;
        }
        if (s.type.name !== "heading") {
            return true;
        }
        let l = Ii(s.textContent);
        const a = i.get(l);
        if (a !== undefined) {
            i.set(l, a + 1);
            l = Ii(`${l}-${a + 1}`);
        } else {
            i.set(l, 0);
        }
        if (Li(l) === n) {
            r = o;
        }
        return true;
    });
    return r;
}
function Sd(e, t) {
    const t_target = t.target;
    const i = t_target.closest("a[href]")?.getAttribute("href") ?? t_target.closest("[data-href]")?.getAttribute("data-href");
    if (!i?.startsWith("#")) {
        return false;
    }
    const r = vd(e.state.doc, i.slice(1));
    if (r !== null) {
        const s = e.nodeDOM(r);
        if (s instanceof HTMLElement) {
            s.scrollIntoView({
                block: "start",
                inline: "nearest"
            });
        }
    }
    t.preventDefault();
    t.stopPropagation();
    return true;
}
const Ye = {
    sliceBudgetMs: 12,
    minSegmentChars: 0,
    maxSegmentChars: 8000,
    firstSegmentChars: 600
};
function Rs(e) {
    const t = new MessageChannel;
    t.port1.onmessage = ()=>{
        t.port1.onmessage = null;
        e();
    };
    t.port2.postMessage(0);
    return ()=>{
        t.port1.onmessage = null;
    };
}
function Ms() {
    if (typeof performance !== "undefined" && performance.now) {
        return performance.now();
    }
    return Date.now();
}
const Cd = /^#{1,6}(?:\s|$)/;
const Es = /^ {0,3}(?:```|~~~)/;
const Td = /^\$\$/;
const Pi = /\$\$[ \t]*$/;
const Rd = /^ {0,3}\[(?!\^)[^\]\n]+\]:[ \t]*(?:<[^>\n]*>|\S+)(?:[ \t]+(?:"[^"\n]*"|'[^'\n]*'|\([^)\n]*\)))?[ \t]*$/;
const Md = /^ {0,3}(?:[-*+]|\d{1,9}[.)])(?:[ \t]|$)/;
const Ed = /^ {0,3}>/;
const $d = /^(?: {4}|\t)/;
function $s(e) {
    const t = [];
    const n = e.split(`
`);
    let i = false;
    for (const r of n){
        if (Es.test(r)) {
            i = !i;
            continue;
        }
        if (!i && Rd.test(r)) {
            t.push(r);
        }
    }
    return t.join(`
`);
}
function zs(e, t = {}) {
    const n = t.minSegmentChars ?? Ye.minSegmentChars;
    const i = t.maxSegmentChars ?? Ye.maxSegmentChars;
    const r = t.firstSegmentChars ?? Ye.firstSegmentChars;
    const s = e.split(`
`);
    const o = [];
    let l = [];
    let a = 0;
    let u = false;
    let c = false;
    const d = ()=>{
        if (l.length > 0) {
            o.push(l.join(`
`));
            l = [];
            a = 0;
        }
    };
    for(let h = 0; h < s.length; h++){
        const p = s[h];
        if (c) {
            c = !Pi.test(p);
        } else if (Es.test(p)) {
            u = !u;
        } else if (!u && Td.test(p)) {
            c = p.trimEnd() === "$$" || !Pi.test(p);
        }
        const f = u || c;
        const g = o.length === 0 ? r : n;
        const k = !f && Cd.test(p) && a >= g;
        const b = !f && p.trim() === "" && a >= i && zd(s, h + 1);
        if ((k || b) && l.length > 0) {
            d();
        }
        l.push(p);
        a += p.length + 1;
    }
    d();
    if (o.length > 0) {
        return o;
    }
    return [
        e
    ];
}
function zd(e, t) {
    let n = t;
    while(n < e.length && e[n].trim() === ""){
        n++;
    }
    if (n >= e.length) {
        return false;
    }
    const i = e[n];
    return !Md.test(i) && !Ed.test(i) && !$d.test(i);
}
function js(e) {
    let t = 0;
    for (const n of e){
        const i = n.marks;
        if (i && i.length > 1 && i.some((r)=>r.type === "code")) {
            n.marks = i.filter((r)=>r.type === "code");
            t++;
        }
        if (n.content) {
            t += js(n.content);
        }
    }
    return t;
}
function jd({ schema }, t) {
    let i = 0;
    const r = (type)=>{
        if (!type) {
            return false;
        }
        const l = schema.nodes[type];
        if (l) {
            return l.isInline;
        }
        return false;
    };
    const s = (o)=>{
        if (!o.content) {
            return;
        }
        for (const c of o.content){
            s(c);
        }
        if (!(o.type ? schema.nodes[o.type] : undefined)?.inlineContent) {
            return;
        }
        let a = false;
        const u = [];
        for (const c of o.content){
            if (r(c.type)) {
                u.push(c);
            } else {
                a = true;
                for (const d of c.content ?? []){
                    if (r(d.type)) {
                        u.push(d);
                    }
                }
            }
        }
        if (a) {
            o.content = u;
            i++;
        }
    };
    for (const o of t){
        s(o);
    }
    return i;
}
function As(e, t, n) {
    const e_markdown = e.markdown;
    const r = n ? `${n}

${t}` : t;
    const o = e_markdown?.parse?.(r)?.content ?? [];
    js(o);
    jd(e, o);
    return o;
}
function Ad(e, t, n, i = {}) {
    const r = i.sliceBudgetMs ?? Ye.sliceBudgetMs;
    const s = i.runGuarded ?? ((T)=>T());
    const o = i.schedule ?? Rs;
    const l = i.now ?? Ms;
    const a = t.replace(/\r\n?/g, `
`);
    const u = $s(a);
    const c = zs(a, i);
    let d = 0;
    let h = false;
    let p = false;
    let isComplete = false;
    let g = null;
    const k = ()=>{
        if (!isComplete) {
            isComplete = true;
            g?.();
            g = null;
            n();
        }
    };
    const b = (T)=>{
        const M = As(e, T, u);
        if (M.length !== 0) {
            s(()=>{
                if (h) {
                    e.commands.insertContentAt(e.state.doc.content.size, M, {
                        updateSelection: false
                    });
                } else {
                    e.commands.setContent({
                        type: "doc",
                        content: M
                    }, {
                        emitUpdate: false
                    });
                    h = true;
                    e.commands.setTextSelection(0);
                }
            });
        }
    };
    const w = {
        cancel () {
            p = true;
            g?.();
            g = null;
        },
        flushRemaining () {
            if (!(isComplete || p)) {
                while(d < c.length){
                    b(c[d]);
                    d++;
                }
                k();
            }
        },
        get isComplete () {
            return isComplete;
        }
    };
    b(c[d]);
    d++;
    if (d >= c.length) {
        k();
        return w;
    }
    const S = ()=>{
        g = null;
        if (p || isComplete) {
            return;
        }
        const T = l();
        do {
            b(c[d]);
            d++;
        }while (d < c.length && l() - T < r)
        if (d >= c.length) {
            k();
            return;
        }
        g = o(S);
    };
    g = o(S);
    return w;
}
function Nd(e, t, n, i = {}) {
    const r = i.sliceBudgetMs ?? Ye.sliceBudgetMs;
    const s = i.runGuarded ?? ((w)=>w());
    const o = i.schedule ?? Rs;
    const l = i.now ?? Ms;
    let a = false;
    let isDone = false;
    let c = null;
    let d = false;
    let h = "";
    let p = [];
    let f = 0;
    const g = [];
    const k = ()=>{
        isDone = true;
        c?.();
        c = null;
        const w = g.flat();
        s(()=>{
            if (w.length > 0) {
                e.commands.setContent({
                    type: "doc",
                    content: w
                }, {
                    emitUpdate: false
                });
                e.commands.setTextSelection(0);
            } else {
                e.commands.clearContent();
            }
        });
        n();
    };
    const b = ()=>{
        c = null;
        if (a || isDone) {
            return;
        }
        const w = l();
        if (!d) {
            d = true;
            const S = t.replace(/\r\n?/g, `
`);
            h = $s(S);
            p = zs(S, i);
        }
        while(f < p.length && (g.push(As(e, p[f], h)), f++, !(l() - w >= r)));
        if (f >= p.length) {
            k();
            return;
        }
        c = o(b);
    };
    c = o(b);
    return {
        cancel () {
            a = true;
            c?.();
            c = null;
        },
        get isDone () {
            return isDone;
        }
    };
}
const Id = "data-editor-owns-history";
const qi = "cursor-editor-history-command";
const Ld = {
    undo,
    redo: W_1
};
function Pd(e) {
    const t = "detail" in e ? e.detail : undefined;
    if (typeof t !== "object" || t === null || !("command" in t)) {
        return;
    }
    const { command } = t;
    if (command === "undo" || command === "redo") {
        return command;
    }
}
const qd = new a("editorHistoryOwner");
const _d = j_2.create({
    name: "editorHistoryOwner",
    addProseMirrorPlugins () {
        const { editor } = this;
        return [
            new P_1({
                key: qd,
                props: {
                    attributes: ()=>{
                        if (editor.isEditable) {
                            return {
                                [Id]: "true"
                            };
                        }
                        return {};
                    }
                },
                view (t) {
                    const n = (i)=>{
                        const r = Pd(i);
                        if (!(r === undefined || !editor.isEditable)) {
                            i.preventDefault();
                            Ld[r](t.state, t.dispatch);
                        }
                    };
                    t.dom.addEventListener(qi, n);
                    return {
                        destroy () {
                            t.dom.removeEventListener(qi, n);
                        }
                    };
                }
            })
        ];
    }
});
function Od(e, t) {
    const { node } = e.domAtPos(t);
    (node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement)?.getBoundingClientRect();
}
function Dd(e, t) {
    const { from, to } = e.state.selection;
    const r = Math.min(from, to);
    const s = Math.max(from, to);
    Od(e, r);
    const o = e.coordsAtPos(r);
    const l = e.coordsAtPos(s);
    const a = Math.min(o.top, l.top);
    const u = Math.max(o.bottom, l.bottom);
    const c = t.getBoundingClientRect();
    const d = (a + u) / 2;
    const h = (c.top + c.bottom) / 2;
    const top = t.scrollTop + d - h;
    t.scrollTo({
        top,
        behavior: "auto"
    });
    return true;
}
function Hd(e) {
    return new P_1({
        view () {
            return {
                update (t, n) {
                    const e_current = e.current;
                    const r = se.getState(n);
                    const s = se.getState(t.state);
                    if (!e_current || !s || !s.query || s.currentIndex < 0 || !(r?.query !== s.query || r?.currentIndex !== s.currentIndex || r?.matches.length !== s.matches.length)) {
                        return;
                    }
                    const l = s.matches[s.currentIndex];
                    if (!(!l || t.state.selection.from !== l.from || t.state.selection.to !== l.to)) {
                        Dd(t, e_current);
                    }
                }
            };
        }
    });
}
function Bd(e) {
    return j_2.create({
        name: "richTextSearchSelectionScroll",
        addProseMirrorPlugins () {
            return [
                Hd(e)
            ];
        }
    });
}
function Ud(checked) {
    if (checked) {
        return "Completed task";
    }
    return "Incomplete task";
}
function Fd({ checked, node, options }) {
    return options.a11y?.checkboxLabel?.(node, checked) ?? Ud(checked);
}
function _i({ checked, editor, getPos, node }) {
    editor.chain().focus(undefined, {
        scrollIntoView: false
    }).command(({ tr })=>{
        const s = getPos();
        if (typeof s !== "number") {
            return false;
        }
        const o = tr.doc.nodeAt(s);
        if (!o || o.type !== node.type) {
            return false;
        }
        tr.setNodeMarkup(s, o.type, {
            ...o.attrs,
            checked
        });
        return true;
    }).run();
}
function NsComponent({ node, editor, getPos, HTMLAttributes, extension }) {
    NsComponent.d = 2656561771;
    const s = r_1.useContext(GnContext);
    const o = s?.editable ?? editor.isEditable;
    const l = s?.isStreaming ?? false;
    const a = node.attrs.checked === true;
    const extension_options = extension.options;
    const u_onReadOnlyChecked = extension_options.onReadOnlyChecked;
    const d = !o || !editor.isEditable;
    const disabled = l || d && !u_onReadOnlyChecked;
    const { class: _class, ...rest } = m(extension_options.HTMLAttributes ?? {}, HTMLAttributes);
    const { className, ...rest_1 } = {
        className: "ui-78zum5 ui-1cy8zhl ui-v9e958 ui-1nl2h8n ui-1ypfh14 ui-7zfrnh ui-t3ep11 ui-p3e60d"
    };
    const onCheckedChange = (w)=>{
        if (!disabled) {
            if (d) {
                if (u_onReadOnlyChecked?.(node, w) === false) {
                    return;
                }
                _i({
                    checked: w,
                    editor,
                    getPos,
                    node
                });
                return;
            }
            _i({
                checked: w,
                editor,
                getPos,
                node
            });
        }
    };
    return <Pn1 as="li" {...rest} {...rest_1} className={b5(_class, className)} data-type={extension.name} data-checked={a || undefined}><span className="ui-78zum5 ui-6s0dn4 ui-l56j7k ui-ri9wqg ui-g2ss61 ui-2lah0s" contentEditable={false}><Js checked={a} disabled={disabled} variant="primary" onMouseDown={(w)=>w.preventDefault()} onCheckedChange={onCheckedChange} aria-label={Fd({
        checked: a,
        node,
        options: extension_options
    })}/></span><Hn1 as="div" className="ui-98rzlu"/></Pn1>;
}
const className = "ui-14rikw8 ui-14l7nz5";
const Vd = Y_1.extend({
    addNodeView () {
        return xr(NsComponent, {
            className
        });
    }
});
function Is(e) {
    return e.replace(/\[`([^`]+)`\]\(([^)]+)\)/g, "`[$1]($2)`");
}
function Kd(e) {
    let t = e;
    t = t.replace(/(\*{1,3}|_{1,3}|~~)((?:[^`\n]|`[^`\n]+`)*?)`([^`\n]+?)\1`/g, "$1$2`$3`$1");
    t = t.replace(new RegExp("(?<![^\\s*_~])(\\+\\+)((?:[^`\\n]|`[^`\\n]+`)*?)`([^`\\n]+?)\\1`", "g"), "$1$2`$3`$1");
    t = t.replace(/(\*{1,3}|_{1,3}|~~)([^[\n]*)\[([^\]\n]*?)\1\]\(([^)\n]+)\)/g, "$1$2[$3]($4)$1");
    t = t.replace(new RegExp("(?<![^\\s*_~])(\\+\\+)([^[\\n]*)\\[([^\\]\\n]*?)\\1\\]\\(([^)\\n]+)\\)", "g"), "$1$2[$3]($4)$1");
    t = t.replace(/(\*{1,3}|_{1,3}|~~)([^!\n]*)!\[([^\]\n]*?)\1\]\(([^)\n]+)\)/g, "$1$2![$3]($4)$1");
    t = t.replace(new RegExp("(?<![^\\s*_~])(\\+\\+)([^!\\n]*)!\\[([^\\]\\n]*?)\\1\\]\\(([^)\\n]+)\\)", "g"), "$1$2![$3]($4)$1");
    return t;
}
const Xd = /&(?:(#\d+;)|(#x[0-9A-Fa-f]+;)|(\w+);?)/gi;
const Oi = 1114111;
function Ls(e) {
    return e.replace(Xd, (t, n, i, r)=>{
        if (n) {
            const s = parseInt(n.slice(1, -1), 10);
            if (s > Oi) {
                return t;
            }
            return String.fromCodePoint(s);
        }
        if (i) {
            const s = parseInt(i.slice(2, -1), 16);
            if (s > Oi) {
                return t;
            }
            return String.fromCodePoint(s);
        }
        if (r) {
            const s = r.toLowerCase();
            if (s === "lt") {
                return "<";
            }
            if (s === "gt") {
                return ">";
            }
            if (s === "amp") {
                return "&";
            }
            if (s === "nbsp") {
                return " ";
            }
            if (s === "quot") {
                return '"';
            }
            if (s === "apos") {
                return "'";
            }
        }
        return t;
    });
}
function Ft(e) {
    const t = Ls(e);
    return Is(t);
}
const Gd = /((?:^|\r?\n)[\t ]*[-+*][\t ]+\[[ xX]\][\t ]+[^\r\n]*)(?:\r?\n[\t ]*){2,}$/;
const Zd = /(^|[^~])~(?!~)/;
const Qd = j_2.create({
    name: "literalSingleTilde",
    markdownTokenizer: {
        name: "literalSingleTilde",
        level: "inline",
        start: (e)=>{
            const t = Zd.exec(e);
            if (t) {
                return t.index + t[1].length;
            }
            return -1;
        },
        tokenize: (e)=>{
            if (!(!e.startsWith("~") || e.startsWith("~~"))) {
                return {
                    type: "text",
                    raw: "~",
                    text: "~"
                };
            }
        }
    }
});
function Yd(e) {
    return e.replace(Gd, "$1");
}
function kt(e) {
    return Yd(Kd(e));
}
const Di = 131072;
function useJd({ initialMarkdown = "", extensions = [], plugins = [], editable = true, onMarkdownChange, debounceMs = 300, immediatelyRender, selectionScrollContainer, shouldRerenderOnTransaction = false, chunkedInitialRender = false, onInitialRenderComplete } = {}) {
    const d = r_1.useMemo(()=>plugins.flatMap((R)=>R.extensions ?? []), [
        plugins
    ]);
    const h = extensions.some((R)=>R.name === "paragraph");
    const pRef = r_1.useRef(null);
    const fRef = r_1.useRef(null);
    const gRef = r_1.useRef(null);
    const k = bo(onInitialRenderComplete);
    const bRef = r_1.useRef(null);
    const wRef = r_1.useRef(null);
    const SRef = r_1.useRef(initialMarkdown);
    const TRef = r_1.useRef(false);
    const MRef = r_1.useRef(null);
    const $RefRef = r_1.useRef(initialMarkdown.length > Di);
    const E = chunkedInitialRender || $RefRef.current;
    const L = bo(selectionScrollContainer);
    const D = r_1.useMemo(()=>Bd(L), [
        L
    ]);
    const editorProps = r_1.useMemo(()=>({
            handleClick (R, N, ee) {
                return Sd(R, ee);
            }
        }), []);
    const J = r_1.useCallback(()=>pRef.current !== null && !pRef.current.isComplete || fRef.current !== null || gRef.current !== null, []);
    const flushPendingMarkdownChange = r_1.useCallback(()=>{
        if (!wRef.current || !onMarkdownChange || !bRef.current || (clearTimeout(bRef.current), bRef.current = null, J())) {
            return;
        }
        const R = wRef.current.getMarkdown();
        if (MRef.current !== null && R === MRef.current) {
            return;
        }
        const N = kt(R);
        onMarkdownChange(N);
    }, [
        onMarkdownChange,
        J
    ]);
    const runGuarded = r_1.useCallback((R)=>{
        const TRef_current = TRef.current;
        TRef.current = true;
        try {
            R();
        } finally{
            TRef.current = TRef_current;
        }
    }, []);
    const v = useKo({
        extensions: [
            n.configure({
                link: false,
                ...h ? {
                    paragraph: false
                } : {}
            }),
            Z,
            Vd.configure({
                nested: true
            }),
            Qd,
            xd.configure({
                indentation: {
                    style: "space",
                    size: 2
                }
            }),
            Ba,
            D,
            _d,
            ...d,
            ...extensions
        ],
        content: E ? "" : Ft(initialMarkdown),
        contentType: "markdown",
        editable,
        editorProps,
        immediatelyRender,
        shouldRerenderOnTransaction,
        onUpdate: ({ editor, transaction })=>{
            if (TRef.current || !transaction.docChanged) {
                return;
            }
            fRef.current?.cancel();
            fRef.current = null;
            gRef.current = null;
            const pRef_current = pRef.current;
            if (pRef_current && !pRef_current.isComplete) {
                pRef_current.flushRemaining();
            }
            MRef.current = null;
            wRef.current = editor;
            if (onMarkdownChange) {
                if (bRef.current) {
                    clearTimeout(bRef.current);
                }
                bRef.current = setTimeout(()=>{
                    bRef.current = null;
                    if (J()) {
                        return;
                    }
                    const me = editor.getMarkdown();
                    if (MRef.current !== null && me === MRef.current) {
                        return;
                    }
                    const At = kt(me);
                    onMarkdownChange(At);
                }, debounceMs);
            }
        }
    });
    r_1.useEffect(()=>{
        if (v) {
            wRef.current = v;
            MRef.current = v.getMarkdown();
            for (const R of plugins){
                R.onInit?.(v);
            }
            return ()=>{
                if (wRef.current === v) {
                    wRef.current = null;
                }
                for (const R of plugins){
                    R.onDestroy?.(v);
                }
            };
        }
    }, [
        v,
        plugins
    ]);
    r_1.useEffect(()=>{
        if (v) {
            v.setEditable(editable);
            MRef.current = v.getMarkdown();
        }
    }, [
        v,
        editable
    ]);
    r_1.useLayoutEffect(()=>{
        if (!E || !v) {
            return;
        }
        const R = Ft(initialMarkdown);
        if (!R.trim()) {
            SRef.current = R;
            MRef.current = v.getMarkdown();
            k.current?.();
            return;
        }
        SRef.current = R;
        ce(v, R, ()=>{
            k.current?.();
        });
        return ()=>{
            W();
        };
    }, [
        v,
        E
    ]);
    r_1.useEffect(()=>()=>{
            if (bRef.current) {
                clearTimeout(bRef.current);
            }
            pRef.current?.cancel();
            fRef.current?.cancel();
            L.current = null;
        }, [
        L
    ]);
    const W = r_1.useCallback(()=>{
        gRef.current = null;
        fRef.current?.cancel();
        fRef.current = null;
        const pRef_current = pRef.current;
        if (pRef_current) {
            pRef.current = null;
            if (!pRef_current.isComplete) {
                pRef_current.cancel();
                TRef.current = false;
            }
        }
    }, []);
    const getMarkdown = r_1.useCallback(()=>{
        if (!v) {
            return "";
        }
        if (J()) {
            return kt(SRef.current);
        }
        const R = v.getMarkdown();
        return kt(R);
    }, [
        v,
        J
    ]);
    const B = r_1.useCallback(function R(N, ee) {
        fRef.current = Nd(N, ee, ()=>{
            fRef.current = null;
            MRef.current = N.getMarkdown();
            const gRef_current = gRef.current;
            gRef.current = null;
            if (gRef_current !== null) {
                R(N, gRef_current);
            }
        }, {
            runGuarded
        });
    }, [
        runGuarded
    ]);
    const ce = r_1.useCallback((R, N, ee)=>{
        pRef.current = Ad(R, N, ()=>{
            MRef.current = R.getMarkdown();
            const gRef_current = gRef.current;
            gRef.current = null;
            if (gRef_current !== null) {
                B(R, gRef_current);
            }
            ee?.();
        }, {
            runGuarded
        });
    }, [
        runGuarded,
        B
    ]);
    const re = r_1.useCallback((R, N)=>{
        if (pRef.current !== null && !pRef.current.isComplete || fRef.current !== null) {
            gRef.current = N;
            return;
        }
        B(R, N);
    }, [
        B
    ]);
    const G = r_1.useCallback((R, N)=>{
        SRef.current = N;
        if (bRef.current) {
            clearTimeout(bRef.current);
            bRef.current = null;
        }
        if (N.length > Di) {
            re(R, N);
            return;
        }
        W();
        TRef.current = true;
        R.commands.setContent(N, {
            contentType: "markdown"
        });
        R.commands.setTextSelection(0);
        MRef.current = R.getMarkdown();
        TRef.current = false;
    }, [
        W,
        re
    ]);
    const setMarkdown = r_1.useCallback((R)=>{
        if (v) {
            G(v, Ft(R));
        }
    }, [
        v,
        G
    ]);
    const appendMarkdown = r_1.useCallback((R)=>{
        if (!v) {
            return;
        }
        const N = Ls(R);
        SRef.current += N;
        G(v, Is(SRef.current));
    }, [
        v,
        G
    ]);
    const insertMarkdown = r_1.useCallback((R)=>{
        if (v) {
            v.commands.insertContent(R, {
                contentType: "markdown"
            });
        }
    }, [
        v
    ]);
    const resetAccumulator = r_1.useCallback(()=>{
        W();
        SRef.current = "";
    }, [
        W
    ]);
    return {
        editor: v,
        getMarkdown,
        flushPendingMarkdownChange,
        setMarkdown,
        appendMarkdown,
        insertMarkdown,
        resetAccumulator
    };
}
function eh(JRef) {
    return ()=>JRef.current;
}
function th(editor, from, n) {
    const i = se.getState(editor.state);
    const r = i?.matches[i.currentIndex];
    return r?.from === from && r.to === n;
}
function PsComponent({ variant = "default", initialMarkdown, markdown, onMarkdownChange, editable = true, isStreaming = false, placeholder, extensions, plugins, debounceMs = 300, immediatelyRender, className, contentClassName, style, selectionTooltip, formattingToolbar, selectionScrollContainer, chunkedInitialRender = false, onInitialRenderComplete, ref, ...rest }) {
    PsComponent.d = 4161802116;
    const MRef = r_1.useRef(true);
    const $RefRef = r_1.useRef(markdown);
    const interactive = editable && !isStreaming;
    const L = formattingToolbar?.actions ?? formattingToolbar?.marks;
    const onUserFormattingAction = formattingToolbar?.onUserFormattingAction;
    const X = formattingToolbar !== undefined && L?.length !== 0;
    const JRef = r_1.useRef([]);
    const Se = r_1.useMemo(()=>[
            $c(eh(JRef))
        ], []);
    r_1.useEffect(()=>()=>{
            JRef.current = [];
        }, []);
    const extensions_1 = r_1.useMemo(()=>[
            ...extensions ?? [],
            ...Se,
            ...variant === "page" ? [
                dc
            ] : []
        ], [
        extensions,
        Se,
        variant
    ]);
    const { editor, getMarkdown, flushPendingMarkdownChange, setMarkdown, appendMarkdown, insertMarkdown, resetAccumulator } = useJd({
        initialMarkdown,
        extensions: extensions_1,
        plugins,
        editable: editable && !isStreaming,
        onMarkdownChange,
        debounceMs,
        immediatelyRender,
        selectionScrollContainer,
        shouldRerenderOnTransaction: !!placeholder || !!selectionTooltip || X,
        chunkedInitialRender,
        onInitialRenderComplete
    });
    const [de, setDe] = r_1.useState(null);
    const fe = !!editor?.schema.marks.link;
    const nt = r_1.useCallback((_)=>{
        const { selection } = _.state;
        if (!(selection instanceof T_1) || selection.empty) {
            return false;
        }
        const it = ln(_);
        setDe({
            initialHref: it?.href ?? ""
        });
        return true;
    }, []);
    const R = r_1.useMemo(()=>{
        if (X) {
            return jc({
                actions: L,
                onUserFormattingAction,
                openLinkEditor: fe ? nt : null
            });
        }
        return [];
    }, [
        X,
        L,
        onUserFormattingAction,
        fe,
        nt
    ]);
    const N = r_1.useMemo(()=>[
            ...Rc(selectionTooltip?.actions ?? []),
            ...interactive ? R : []
        ], [
        R,
        interactive,
        selectionTooltip?.actions
    ]);
    Mc(N);
    JRef.current = N;
    const options = r_1.useMemo(()=>{
        if (!(!X && !selectionTooltip)) {
            return {
                ...selectionTooltip,
                ariaLabel: selectionTooltip?.ariaLabel ?? (interactive && X ? "Text formatting" : undefined),
                actions: N,
                shouldShow: X ? (_)=>!th(_.editor, _.from, _.to) && (selectionTooltip?.shouldShow?.(_) ?? true) : selectionTooltip?.shouldShow
            };
        }
    }, [
        X,
        interactive,
        N,
        selectionTooltip
    ]);
    r_1.useEffect(()=>{
        if (!interactive) {
            setDe(null);
        }
    }, [
        interactive
    ]);
    const contentOverride = interactive && de && editor ? <Ls1Component initialHref={de.initialHref} onSubmit={(_)=>{
        setDe(null);
        if (!editor.isEditable) {
            return;
        }
        const { selection } = editor.state;
        if (!(selection instanceof T_1) || selection.empty) {
            return;
        }
        const it = ln(editor);
        const Os = it?.from ?? selection.from;
        const zn = it?.to ?? selection.to;
        const jn = _.trim();
        editor.view.focus();
        fs(editor, onUserFormattingAction, ()=>{
            const Nt = editor.chain().setTextSelection({
                from: Os,
                to: zn
            });
            if (jn) {
                Nt.setLink({
                    href: jn
                });
            } else {
                Nt.unsetLink();
            }
            return Nt.setTextSelection(zn).run();
        });
    }} onCancel={({ refocusEditor })=>{
        setDe(null);
        if (refocusEditor) {
            editor.view.focus();
        }
    }}/> : null;
    r_1.useEffect(()=>{
        if (MRef.current) {
            MRef.current = false;
            return;
        }
        if (markdown !== undefined && markdown !== $RefRef.current) {
            $RefRef.current = markdown;
            setMarkdown(markdown);
        }
    }, [
        markdown,
        setMarkdown
    ]);
    r_1.useImperativeHandle(ref, ()=>({
            getMarkdown,
            flushPendingMarkdownChange,
            setMarkdown,
            appendMarkdown,
            insertMarkdown,
            resetAccumulator,
            editor,
            focus: ()=>editor?.commands.focus(),
            blur: ()=>editor?.commands.blur(),
            getCursorPosition: ()=>{
                if (!editor) {
                    return null;
                }
                const { from, to } = editor.state.selection;
                return {
                    from,
                    to
                };
            },
            setCursorPosition: (_, Z)=>{
                editor?.commands.setTextSelection({
                    from: _,
                    to: Z ?? _
                });
            },
            setSearchQuery: (_)=>{
                editor?.commands.setRichTextSearchQuery(_);
                if (editor) {
                    return qa(editor.state, _);
                }
                return Le;
            },
            selectNextSearchResult: ()=>{
                editor?.commands.selectNextRichTextSearchResult();
                if (editor) {
                    return Ze(editor.state);
                }
                return Le;
            },
            selectPreviousSearchResult: ()=>{
                editor?.commands.selectPreviousRichTextSearchResult();
                if (editor) {
                    return Ze(editor.state);
                }
                return Le;
            },
            clearSearchQuery: ()=>{
                editor?.commands.clearRichTextSearchQuery();
                if (editor) {
                    return Ze(editor.state);
                }
                return Le;
            },
            getSearchResult: ()=>{
                if (editor) {
                    return Ze(editor.state);
                }
                return Le;
            }
        }), [
        editor,
        getMarkdown,
        flushPendingMarkdownChange,
        setMarkdown,
        appendMarkdown,
        insertMarkdown,
        resetAccumulator
    ]);
    const AtComponent = ()=>{
        if (!placeholder || !(editor?.isEmpty ?? true)) {
            return null;
        }
        const Z = b8({
            rootClass: "ui-rich-text-editor__placeholder",
            stylexStyles: oc()
        });
        return <div className={Z.className} style={Z.style}>{typeof placeholder === "string" ? <span>{placeholder}</span> : placeholder}</div>;
    };
    const Mn = b8({
        rootClass: "ui-rich-text-editor",
        stylexStyles: rc({
            variant,
            interactive
        }),
        className,
        style
    });
    const En = b8({
        rootClass: "ui-rich-text-editor__content",
        stylexStyles: sc(),
        className: contentClassName
    });
    const $n = p(lc());
    return <UrComponent editor={editor} isStreaming={isStreaming} editable={editable}><div className={Mn.className} style={Mn.style} data-variant={variant} data-editable={interactive} data-streaming={isStreaming} {...rest}><div className={En.className} style={En.style}>{AtComponent()}<Ho editor={editor}/></div>{isStreaming && <div className={$n.className} style={$n.style}/>}{options ? <Ps1Component options={options} contentOverride={contentOverride}/> : null}</div></UrComponent>;
}
const find = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/;
const ih = c_2.create({
    name: "image",
    addOptions () {
        return {
            inline: false,
            allowBase64: false,
            HTMLAttributes: {},
            resize: false
        };
    },
    inline () {
        return this.options.inline;
    },
    group () {
        if (this.options.inline) {
            return "inline";
        }
        return "block";
    },
    draggable: true,
    addAttributes () {
        return {
            src: {
                default: null
            },
            alt: {
                default: null
            },
            title: {
                default: null
            },
            width: {
                default: null
            },
            height: {
                default: null
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: this.options.allowBase64 ? "img[src]" : 'img[src]:not([src^="data:"])'
            }
        ];
    },
    renderHTML ({ HTMLAttributes }) {
        return [
            "img",
            m(this.options.HTMLAttributes, HTMLAttributes)
        ];
    },
    parseMarkdown: (e, t)=>t.createNode("image", {
            src: e.href,
            title: e.title,
            alt: e.text
        }),
    renderMarkdown: (e)=>{
        const l = e.attrs?.src ?? "";
        const a = e.attrs?.alt ?? "";
        const u = e.attrs?.title ?? "";
        if (u) {
            return `![${a}](${l} "${u}")`;
        }
        return `![${a}](${l})`;
    },
    addNodeView () {
        if (!this.options.resize || !this.options.resize.enabled || typeof document === "undefined") {
            return null;
        }
        const { directions, minWidth, minHeight, alwaysPreserveAspectRatio } = this.options.resize;
        return ({ node, getPos, HTMLAttributes, editor })=>{
            const a = document.createElement("img");
            Object.entries(HTMLAttributes).forEach(([d, h])=>{
                if (h != null) {
                    switch(d){
                        case "width":
                        case "height":
                            break;
                        default:
                            a.setAttribute(d, h);
                            break;
                    }
                }
            });
            a.src = HTMLAttributes.src;
            const u = new $({
                element: a,
                editor,
                node,
                getPos,
                onResize: (d, h)=>{
                    a.style.width = `${d}px`;
                    a.style.height = `${h}px`;
                },
                onCommit: (width, height)=>{
                    const p = getPos();
                    if (p !== undefined) {
                        this.editor.chain().setNodeSelection(p).updateAttributes(this.name, {
                            width,
                            height
                        }).run();
                    }
                },
                onUpdate: (d, h, p)=>d.type === node.type,
                options: {
                    directions,
                    min: {
                        width: minWidth,
                        height: minHeight
                    },
                    preserveAspectRatio: alwaysPreserveAspectRatio === true
                }
            });
            const u_dom = u.dom;
            u_dom.style.visibility = "hidden";
            u_dom.style.pointerEvents = "none";
            a.onload = ()=>{
                u_dom.style.visibility = "";
                u_dom.style.pointerEvents = "";
            };
            return u;
        };
    },
    addCommands () {
        return {
            setImage: (attrs)=>({ commands })=>commands.insertContent({
                        type: this.name,
                        attrs
                    })
        };
    },
    addInputRules () {
        return [
            _({
                find,
                type: this.type,
                getAttributes: ([, , alt, n, i])=>({
                        src: n,
                        alt,
                        title: i
                    })
            })
        ];
    }
});
const rh = ih;
function sh(e, t = {}) {
    const n = a0.extend({
        parseMarkdown: (r, s)=>s.createNode("paragraph", undefined, s.parseInline(r.tokens ?? []))
    });
    const i = rh.extend({
        parseHTML () {
            const r = this.parent?.() ?? [];
            if (t.figure) {
                return [
                    {
                        tag: "span[data-rte-image]",
                        getAttrs: (s)=>{
                            const o = s.querySelector("img");
                            if (o === null) {
                                return false;
                            }
                            const l = s.querySelector("[data-rte-image-caption]")?.textContent?.trim();
                            const a = s.getAttribute("data-rte-image-src");
                            return {
                                src: a !== null && a.length > 0 ? a : o.getAttribute("src"),
                                alt: o.getAttribute("alt"),
                                title: l !== undefined && l.length > 0 ? l : o.getAttribute("title")
                            };
                        }
                    },
                    ...r
                ];
            }
            return r;
        },
        renderHTML ({ HTMLAttributes }) {
            const HTMLAttributes_src = HTMLAttributes.src;
            if (typeof HTMLAttributes_src !== "string") {
                return [
                    "img",
                    m(this.options.HTMLAttributes, HTMLAttributes)
                ];
            }
            const o = e(HTMLAttributes_src);
            const l = [
                "img",
                m(this.options.HTMLAttributes, HTMLAttributes, {
                    src: o
                })
            ];
            if (!t.figure) {
                return l;
            }
            const HTMLAttributes_title = HTMLAttributes.title;
            const u = typeof HTMLAttributes_title === "string" && HTMLAttributes_title.trim().length > 0 ? [
                [
                    "span",
                    {
                        "data-rte-image-caption": ""
                    },
                    HTMLAttributes_title
                ]
            ] : [];
            return [
                "span",
                {
                    "data-rte-image": "",
                    "data-rte-image-src": HTMLAttributes_src,
                    ...o.length === 0 ? {
                        "data-rte-image-blocked": ""
                    } : {}
                },
                l,
                ...u
            ];
        }
    }).configure({
        allowBase64: true,
        inline: true
    });
    return [
        n,
        i
    ];
}
const Hi = "asset:";
const oh = /^[a-z0-9](?:[a-z0-9_-]|\.(?!\.)){0,63}$/;
const lh = /!\[[^\]\n]*\]\(\s*<?asset:([^\s)>"']+)>?(?:\s+(?:"[^"\n]*"|'[^'\n]*'|\([^)\n]*\)))?\s*\)/gi;
function qs(e) {
    return oh.test(e);
}
function _s(e) {
    const t = e.trim();
    if (!t.toLowerCase().startsWith(Hi)) {
        return null;
    }
    const n = t.slice(Hi.length);
    if (qs(n)) {
        return n;
    }
    return null;
}
function ah(source) {
    const t = new Set;
    for (const n of source.matchAll(lh)){
        const i = n[1] ?? "";
        if (qs(i)) {
            t.add(i);
        }
    }
    return [
        ...t
    ];
}
function uh(e, t) {
    const n = _s(e);
    if (n === null) {
        return "";
    }
    return t?.get(n) ?? "";
}
const Bi = "data-rte-image-blocked";
const ch = "data-document-image";
function dh(e) {
    if (e.status === "ready") {
        return e.value;
    }
    if (e.status === "loading" || e.status === "failed") {
        return e.previous;
    }
}
function hh(e) {
    const src = e.attrs.src;
    if (typeof src === "string") {
        return src;
    }
    return "";
}
function ph(node) {
    const toDOM = node.type.spec.toDOM;
    const n = toDOM === undefined ? null : a1.renderSpec(document, toDOM(node)).dom;
    if (n instanceof HTMLElement) {
        return n;
    }
    const i = document.createElement("span");
    if (n !== null) {
        i.append(n);
    }
    return i;
}
function fh(e) {
    const alt = e.attrs.alt;
    if (typeof alt === "string") {
        return alt;
    }
    return "";
}
function mh(e, { alt, pending, resolved }) {
    if (pending) {
        e.removeAttribute("src");
        e.setAttribute("alt", "");
        e.setAttribute("aria-label", alt);
        e.setAttribute("aria-busy", "true");
        return;
    }
    e.setAttribute("src", resolved);
    e.setAttribute("alt", alt);
    e.removeAttribute("aria-label");
    e.removeAttribute("aria-busy");
}
function gh(e, t) {
    return e.type === t.type && e.attrs.src === t.attrs.src && e.attrs.alt === t.attrs.alt && e.attrs.title === t.attrs.title;
}
function kh(e) {
    const t = (o)=>uh(o, dh(e.get()));
    const n = (o)=>{
        if (_s(o) === null) {
            return false;
        }
        const status = e.get().status;
        return status === "loading" || status === "failed";
    };
    const [i, r] = sh(t, {
        figure: true
    });
    if (i === undefined || !(r instanceof c_2)) {
        return [];
    }
    const s = r.extend({
        addNodeView () {
            return ({ node })=>{
                const l = ph(node);
                l.setAttribute(ch, "");
                const a = l instanceof HTMLImageElement ? l : l.querySelector("img");
                let u = node;
                const c = ()=>{
                    const h = hh(u);
                    const resolved = t(h);
                    const pending = resolved.length === 0 && n(h);
                    if (a !== null) {
                        mh(a, {
                            alt: fh(u),
                            pending,
                            resolved
                        });
                    }
                    if (resolved.length === 0 && !pending) {
                        l.setAttribute(Bi, "");
                    } else {
                        l.removeAttribute(Bi);
                    }
                };
                c();
                const destroy = e.subscribe(c);
                return {
                    dom: l,
                    update: (h)=>{
                        if (gh(u, h)) {
                            u = h;
                            return true;
                        }
                        return false;
                    },
                    destroy
                };
            };
        }
    });
    return [
        i,
        s
    ];
}
const debounceMs = 2000;
const yh = /^(https?:|mailto:)/i;
export function DocumentPage(e) {
    DocumentPage.d = 347;
    const t = c.c(54);
    const { locator, source, editable, onChange, onEditAttempt, groupChatId } = e;
    const a = groupChatId === undefined ? null : groupChatId;
    const { _ } = u();
    const cRef = r_1.useRef(null);
    const d = bA();
    const h = b7();
    let p;
    let f;
    if (t[0] !== source) {
        p = ah(source);
        f = p.join("\0");
        t[0] = source;
        t[1] = p;
        t[2] = f;
    } else {
        p = t[1];
        f = t[2];
    }
    const g = f;
    let k;
    if (t[3] !== g || t[4] !== h.documentAssets || t[5] !== a || t[6] !== locator) {
        k = ()=>{
            h.documentAssets.load(locator, g.length === 0 ? [] : g.split("\0"), a);
            return vh;
        };
        t[3] = g;
        t[4] = h.documentAssets;
        t[5] = a;
        t[6] = locator;
        t[7] = k;
    } else {
        k = t[7];
    }
    i(k);
    let b;
    if (t[8] !== p || t[9] !== h.documentAssets || t[10] !== a || t[11] !== locator) {
        b = ()=>{
            h.documentAssets.load(locator, p, a);
        };
        t[8] = p;
        t[9] = h.documentAssets;
        t[10] = a;
        t[11] = locator;
        t[12] = b;
    } else {
        b = t[12];
    }
    const w = b;
    const S = No(locator, p, a);
    const T = p.length > 0 && S.status === "failed" && S.previous == null;
    let M;
    if (t[13] !== p || t[14] !== h.documentAssets || t[15] !== a || t[16] !== locator) {
        M = ()=>kh(h.documentAssets.stateFor(locator, p, a));
        t[13] = p;
        t[14] = h.documentAssets;
        t[15] = a;
        t[16] = locator;
        t[17] = M;
    } else {
        M = t[17];
    }
    const [$] = r_1.useState(M);
    let E;
    let L;
    if (t[18] === Symbol.for("react.memo_cache_sentinel")) {
        E = ss({
            renderWrapper: true
        });
        L = Br({
            renderers: ja(),
            showSourceToggle: false
        });
        t[18] = E;
        t[19] = L;
    } else {
        E = t[18];
        L = t[19];
    }
    let D;
    if (t[20] !== d) {
        D = Sr({
            isCitation,
            onLinkClick: (fe)=>{
                if (yh.test(fe)) {
                    d(fe);
                }
            }
        });
        t[20] = d;
        t[21] = D;
    } else {
        D = t[21];
    }
    let X;
    if (t[22] !== D) {
        X = [
            E,
            L,
            D
        ];
        t[22] = D;
        t[23] = X;
    } else {
        X = t[23];
    }
    const plugins = X;
    let Se;
    let ae;
    if (t[24] === Symbol.for("react.memo_cache_sentinel")) {
        Se = {
            className: "sand-h8yej3 sand-12h1iku"
        };
        ae = {
            className: "sand-h8yej3 sand-vsjeb6 sand-vueqy4 sand-68mnon sand-56sb6g sand-tzbcmk sand-9f619 sand-1ghb7gk sand-1elg40b sand-lll3jg sand-13wfu3b sand-1nxk12y sand-17gt61c sand-p9l8xt sand-1p66srj sand-fqvsgc sand-374583 sand-ieey5e sand-bb1fce sand-1xh5xg8 sand-jxi5e2 sand-wdltpj sand-1s09ip1 sand-1go8t9i sand-140n800 sand-1nvhxhd sand-1xc74un"
        };
        t[24] = Se;
        t[25] = ae;
    } else {
        Se = t[24];
        ae = t[25];
    }
    let onBlur;
    if (t[26] !== editable) {
        onBlur = (fe)=>{
            !editable || fe.currentTarget.contains(fe.relatedTarget) || cRef.current?.flushPendingMarkdownChange();
        };
        t[26] = editable;
        t[27] = onBlur;
    } else {
        onBlur = t[27];
    }
    let W;
    if (t[28] !== _ || t[29] !== T || t[30] !== w) {
        W = T ? <div className="sand-78zum5 sand-6s0dn4 sand-l56j7k sand-167g77z sand-1vvogim" role="alert"><Ws color="secondary" size="sm">{_({
            id: "NbpCpm"
        })}</Ws><Eo1 aria-label={_({
            id: "KDw4GX"
        })} icon="refresh" onClick={w} shape="circle" size="sm" variant="ghost"/></div> : null;
        t[28] = _;
        t[29] = T;
        t[30] = w;
        t[31] = W;
    } else {
        W = t[31];
    }
    let onFocus;
    let onKeyDown;
    let ce;
    if (t[32] !== onEditAttempt) {
        onFocus = ()=>onEditAttempt?.("focus");
        onKeyDown = ()=>onEditAttempt?.("key");
        ce = ()=>onEditAttempt?.("pointer");
        t[32] = onEditAttempt;
        t[33] = onFocus;
        t[34] = onKeyDown;
        t[35] = ce;
    } else {
        onFocus = t[33];
        onKeyDown = t[34];
        ce = t[35];
    }
    let re;
    if (t[36] !== editable || t[37] !== onChange) {
        re = editable && onChange != null ? {
            onMarkdownChange: onChange
        } : {};
        t[36] = editable;
        t[37] = onChange;
        t[38] = re;
    } else {
        re = t[38];
    }
    let G;
    if (t[39] !== editable || t[40] !== $ || t[41] !== plugins || t[42] !== source || t[43] !== re) {
        G = <PsComponent debounceMs={debounceMs} editable={editable} extensions={$} initialMarkdown={source} {...re} plugins={plugins} ref={cRef} variant="page"/>;
        t[39] = editable;
        t[40] = $;
        t[41] = plugins;
        t[42] = source;
        t[43] = re;
        t[44] = G;
    } else {
        G = t[44];
    }
    let de;
    if (t[45] !== onFocus || t[46] !== onKeyDown || t[47] !== ce || t[48] !== G) {
        de = <div data-document-body onFocus={onFocus} onKeyDown={onKeyDown} onPointerDown={ce}>{G}</div>;
        t[45] = onFocus;
        t[46] = onKeyDown;
        t[47] = ce;
        t[48] = G;
        t[49] = de;
    } else {
        de = t[49];
    }
    let he;
    if (t[50] !== onBlur || t[51] !== W || t[52] !== de) {
        he = <div {...Se}><div {...ae} dir="auto" spellCheck={false} onBlur={onBlur}>{W}{de}</div></div>;
        t[50] = onBlur;
        t[51] = W;
        t[52] = de;
        t[53] = he;
    } else {
        he = t[53];
    }
    return he;
}
function isCitation() {
    return false;
}
function vh() {}
