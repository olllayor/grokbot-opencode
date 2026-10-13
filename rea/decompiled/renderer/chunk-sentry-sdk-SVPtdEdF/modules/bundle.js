import { kH as dsn } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./index.eager-vendor-Qbf9YA6n.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "0ad0ec86-5d98-4417-8e9d-88b601d5cbf3";
            e._sentryDebugIdIdentifier = "sentry-dbid-0ad0ec86-5d98-4417-8e9d-88b601d5cbf3";
        }
    } catch (e) {}
})();
const m = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const g = globalThis;
const version = "10.17.0";
function _t() {
    yt(g);
    return g;
}
function yt(t) {
    const e = t.__SENTRY__ = t.__SENTRY__ || {};
    e.version = e.version || version;
    return e[version] = e[version] || {};
}
function J(t, e, n = g) {
    const r = n.__SENTRY__ = n.__SENTRY__ || {};
    const s = r[version] = r[version] || {};
    return s[t] || (s[t] = e());
}
const rr = [
    "debug",
    "info",
    "warn",
    "error",
    "log",
    "assert",
    "trace"
];
const sr = "Sentry Logger ";
const pt = {};
function q(t) {
    if (!("console" in g)) {
        return t();
    }
    const g_console = g.console;
    const n = {};
    const r = Object.keys(pt);
    r.forEach((s)=>{
        const o = pt[s];
        n[s] = g_console[s];
        g_console[s] = o;
    });
    try {
        return t();
    } finally{
        r.forEach((s)=>{
            g_console[s] = n[s];
        });
    }
}
function enable() {
    Xt().enabled = true;
}
function disable() {
    Xt().enabled = false;
}
function isEnabled() {
    return Xt().enabled;
}
function log(...t) {
    Kt("log", ...t);
}
function warn(...t) {
    Kt("warn", ...t);
}
function ur(...t) {
    Kt("error", ...t);
}
function Kt(t, ...e) {
    if (m && isEnabled()) {
        q(()=>{
            g.console[t](`${sr}[${t}]:`, ...e);
        });
    }
}
function Xt() {
    if (m) {
        return J("loggerSettings", ()=>({
                enabled: false
            }));
    }
    return {
        enabled: false
    };
}
const p = {
    enable,
    disable,
    isEnabled,
    log,
    warn,
    error: ur
};
const on = 50;
const D = "?";
const de = /\(error: (.*)\)/;
const le = /captureMessage|captureException/;
function an(...t) {
    const e = t.sort((n, r)=>n[0] - r[0]).map((n)=>n[1]);
    return (n, r = 0, s = 0)=>{
        const o = [];
        const i = n.split(`
`);
        for(let a = r; a < i.length; a++){
            let c = i[a];
            if (c.length > 1024) {
                c = c.slice(0, 1024);
            }
            const u = de.test(c) ? c.replace(de, "$1") : c;
            if (!u.match(/\S*Error: /)) {
                for (const f of e){
                    const d = f(u);
                    if (d) {
                        o.push(d);
                        break;
                    }
                }
                if (o.length >= on + s) {
                    break;
                }
            }
        }
        return cn(o.slice(s));
    };
}
function fr(t) {
    if (Array.isArray(t)) {
        return an(...t);
    }
    return t;
}
function cn(t) {
    if (!t.length) {
        return [];
    }
    const e = Array.from(t);
    if (/sentryWrapped/.test(nt(e).function || "")) {
        e.pop();
    }
    e.reverse();
    if (le.test(nt(e).function || "")) {
        e.pop();
        if (le.test(nt(e).function || "")) {
            e.pop();
        }
    }
    return e.slice(0, on).map((n)=>({
            ...n,
            filename: n.filename || nt(e).filename,
            function: n.function || D
        }));
}
function nt(t) {
    return t[t.length - 1] || {};
}
const wt = "<anonymous>";
function A(t) {
    try {
        if (!t || typeof t !== "function") {
            return wt;
        }
        return t.name || wt;
    } catch  {
        return wt;
    }
}
function pe({ exception }) {
    if (exception) {
        const n = [];
        try {
            exception.values.forEach((r)=>{
                if (r.stacktrace.frames) {
                    n.push(...r.stacktrace.frames);
                }
            });
            return n;
        } catch  {
            return;
        }
    }
}
const ut = {};
const he = {};
function U(t, e) {
    ut[t] = ut[t] || [];
    ut[t].push(e);
}
function j(t, e) {
    if (!he[t]) {
        he[t] = true;
        try {
            e();
        } catch (error) {
            if (m) {
                p.error(`Error while instrumenting ${t}`, error);
            }
        }
    }
}
function v(t, e) {
    const n = t && ut[t];
    if (n) {
        for (const r of n){
            try {
                r(e);
            } catch (error) {
                if (m) {
                    p.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${A(r)}
Error:`, error);
                }
            }
        }
    }
}
let Rt = null;
function dr(t) {
    const e = "error";
    U(e, t);
    j(e, lr);
}
function lr() {
    Rt = g.onerror;
    g.onerror = function(msg, e, line, column, s) {
        v("error", {
            column,
            error: s,
            line,
            msg,
            url: e
        });
        if (Rt) {
            return Rt.apply(this, arguments);
        }
        return false;
    };
    g.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let kt = null;
function pr(t) {
    const e = "unhandledrejection";
    U(e, t);
    j(e, hr);
}
function hr() {
    kt = g.onunhandledrejection;
    g.onunhandledrejection = function(t) {
        v("unhandledrejection", t);
        if (kt) {
            return kt.apply(this, arguments);
        }
        return true;
    };
    g.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
const toString = Object.prototype.toString;
function Vt(t) {
    switch(toString.call(t)){
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
        case "[object WebAssembly.Exception]":
            return true;
        default:
            return C(t, Error);
    }
}
function Y(t, e) {
    return toString.call(t) === `[object ${e}]`;
}
function fn(t) {
    return Y(t, "ErrorEvent");
}
function me(t) {
    return Y(t, "DOMError");
}
function mr(t) {
    return Y(t, "DOMException");
}
function x(t) {
    return Y(t, "String");
}
function Jt(t) {
    return typeof t === "object" && t !== null && "__sentry_template_string__" in t && "__sentry_template_values__" in t;
}
function Zt(t) {
    return t === null || Jt(t) || typeof t !== "object" && typeof t !== "function";
}
function K(t) {
    return Y(t, "Object");
}
function Et(t) {
    return typeof Event !== "undefined" && C(t, Event);
}
function gr(t) {
    return typeof Element !== "undefined" && C(t, Element);
}
function _r(t) {
    return Y(t, "RegExp");
}
function Z(t) {
    return !!(t?.then && typeof t.then === "function");
}
function yr(t) {
    return K(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t;
}
function C(t, e) {
    try {
        return t instanceof e;
    } catch  {
        return false;
    }
}
function dn(t) {
    return !!(typeof t === "object" && t !== null && (t.__isVue || t._isVue));
}
function Er(t) {
    return typeof Request !== "undefined" && C(t, Request);
}
const Qt = g;
const Sr = 80;
function ln(t, e = {}) {
    if (!t) {
        return "<unknown>";
    }
    try {
        let n = t;
        const r = 5;
        const s = [];
        let o = 0;
        let i = 0;
        const a = " > ";
        const c = a.length;
        let u;
        const f = Array.isArray(e) ? e : e.keyAttrs;
        const d = !Array.isArray(e) && e.maxStringLength || Sr;
        while(n && o++ < r && (u = br(n, f), !(u === "html" || o > 1 && i + s.length * c + u.length >= d))){
            s.push(u);
            i += u.length;
            n = n.parentNode;
        }
        return s.reverse().join(a);
    } catch  {
        return "<unknown>";
    }
}
function br(t, e) {
    const n = t;
    const r = [];
    if (!n?.tagName) {
        return "";
    }
    if (Qt.HTMLElement && n instanceof HTMLElement && n.dataset) {
        if (n.dataset.sentryComponent) {
            return n.dataset.sentryComponent;
        }
        if (n.dataset.sentryElement) {
            return n.dataset.sentryElement;
        }
    }
    r.push(n.tagName.toLowerCase());
    const s = e?.length ? e.filter((i)=>n.getAttribute(i)).map((i)=>[
            i,
            n.getAttribute(i)
        ]) : null;
    if (s?.length) {
        s.forEach((i)=>{
            r.push(`[${i[0]}="${i[1]}"]`);
        });
    } else {
        if (n.id) {
            r.push(`#${n.id}`);
        }
        const i = n.className;
        if (i && x(i)) {
            const a = i.split(/\s+/);
            for (const c of a){
                r.push(`.${c}`);
            }
        }
    }
    const o = [
        "aria-label",
        "type",
        "name",
        "title",
        "alt"
    ];
    for (const i of o){
        const a = n.getAttribute(i);
        if (a) {
            r.push(`[${i}="${a}"]`);
        }
    }
    return r.join("");
}
function te() {
    try {
        return Qt.document.location.href;
    } catch  {
        return "";
    }
}
function Ir(t) {
    if (!Qt.HTMLElement) {
        return null;
    }
    let e = t;
    const n = 5;
    for(let r = 0; r < n; r++){
        if (!e) {
            return null;
        }
        if (e instanceof HTMLElement) {
            if (e.dataset.sentryComponent) {
                return e.dataset.sentryComponent;
            }
            if (e.dataset.sentryElement) {
                return e.dataset.sentryElement;
            }
        }
        e = e.parentNode;
    }
    return null;
}
function ht(t, e = 0) {
    if (typeof t !== "string" || e === 0 || t.length <= e) {
        return t;
    }
    return `${t.slice(0, e)}...`;
}
function ge(t, e) {
    if (!Array.isArray(t)) {
        return "";
    }
    const n = [];
    for (const s of t){
        try {
            if (dn(s)) {
                n.push("[VueViewModel]");
            } else {
                n.push(String(s));
            }
        } catch  {
            n.push("[value cannot be serialized]");
        }
    }
    return n.join(e);
}
function ft(t, e, n = false) {
    if (x(t)) {
        if (_r(e)) {
            return e.test(t);
        }
        if (x(e)) {
            if (n) {
                return t === e;
            }
            return t.includes(e);
        }
        return false;
    }
    return false;
}
function St(t, e = [], n = false) {
    return e.some((r)=>ft(t, r, n));
}
function I(t, e, n) {
    if (!(e in t)) {
        return;
    }
    const r = t[e];
    if (typeof r !== "function") {
        return;
    }
    const s = n(r);
    if (typeof s === "function") {
        pn(s, r);
    }
    try {
        t[e] = s;
    } catch  {
        if (m) {
            p.log(`Failed to replace method "${e}" in object`, t);
        }
    }
}
function $(t, e, value) {
    try {
        Object.defineProperty(t, e, {
            value,
            writable: true,
            configurable: true
        });
    } catch  {
        if (m) {
            p.log(`Failed to add non-enumerable property "${e}" to object`, t);
        }
    }
}
function pn(t, e) {
    try {
        const n = e.prototype || {};
        t.prototype = e.prototype = n;
        $(t, "__sentry_original__", e);
    } catch  {}
}
function ee(t) {
    return t.__sentry_original__;
}
function hn(t) {
    if (Vt(t)) {
        return {
            message: t.message,
            name: t.name,
            stack: t.stack,
            ...ye(t)
        };
    }
    if (Et(t)) {
        const e = {
            type: t.type,
            target: _e(t.target),
            currentTarget: _e(t.currentTarget),
            ...ye(t)
        };
        if (typeof CustomEvent !== "undefined" && C(t, CustomEvent)) {
            e.detail = t.detail;
        }
        return e;
    } else {
        return t;
    }
}
function _e(t) {
    try {
        if (gr(t)) {
            return ln(t);
        }
        return Object.prototype.toString.call(t);
    } catch  {
        return "<unknown>";
    }
}
function ye(t) {
    if (typeof t === "object" && t !== null) {
        const e = {};
        for(const n in t){
            if (Object.prototype.hasOwnProperty.call(t, n)) {
                e[n] = t[n];
            }
        }
        return e;
    } else {
        return {};
    }
}
function Tr(t, e = 40) {
    const n = Object.keys(hn(t));
    n.sort();
    const r = n[0];
    if (!r) {
        return "[object has no keys]";
    }
    if (r.length >= e) {
        return ht(r, e);
    }
    for(let s = n.length; s > 0; s--){
        const o = n.slice(0, s).join(", ");
        if (!(o.length > e)) {
            if (s === n.length) {
                return o;
            }
            return ht(o, e);
        }
    }
    return "";
}
function vr() {
    const t = g;
    return t.crypto || t.msCrypto;
}
function T(t = vr()) {
    let e = ()=>Math.random() * 16;
    try {
        if (t?.randomUUID) {
            return t.randomUUID().replace(/-/g, "");
        }
        if (t?.getRandomValues) {
            e = ()=>{
                const n = new Uint8Array(1);
                t.getRandomValues(n);
                return n[0];
            };
        }
    } catch  {}
    return `10000000100040008000${100000000000}`.replace(/[018]/g, (n)=>(n ^ (e() & 15) >> n / 4).toString(16));
}
function mn(t) {
    return t.exception?.values?.[0];
}
function L(t) {
    const { message, event_id } = t;
    if (message) {
        return message;
    }
    const r = mn(t);
    if (r) {
        if (r.type && r.value) {
            return `${r.type}: ${r.value}`;
        }
        return r.type || r.value || event_id || "<unknown>";
    }
    return event_id || "<unknown>";
}
function Pt(t, e, n) {
    const r = t.exception = t.exception || {};
    const s = r.values = r.values || [];
    const o = s[0] = s[0] || {};
    if (!o.value) {
        o.value = e || "";
    }
    if (!o.type) {
        o.type = "Error";
    }
}
function B(t, e) {
    const n = mn(t);
    if (!n) {
        return;
    }
    const r = {
        type: "generic",
        handled: true
    };
    const n_mechanism = n.mechanism;
    n.mechanism = {
        ...r,
        ...n_mechanism,
        ...e
    };
    if (e && "data" in e) {
        const o = {
            ...n_mechanism?.data,
            ...e.data
        };
        n.mechanism.data = o;
    }
}
function Ee(t) {
    if (wr(t)) {
        return true;
    }
    try {
        $(t, "__sentry_captured__", true);
    } catch  {}
    return false;
}
function wr(t) {
    try {
        return t.__sentry_captured__;
    } catch  {}
}
const gn = 1000;
function Q() {
    return Date.now() / gn;
}
function Rr() {
    const { performance } = g;
    if (!performance?.now || !performance.timeOrigin) {
        return Q;
    }
    const performance_timeOrigin = performance.timeOrigin;
    return ()=>(performance_timeOrigin + performance.now()) / gn;
}
let Se;
function O() {
    return (Se ??= Rr())();
}
function kr(t) {
    const e = O();
    const n = {
        sid: T(),
        init: true,
        timestamp: e,
        started: e,
        duration: 0,
        status: "ok",
        errors: 0,
        ignoreDuration: false,
        toJSON: ()=>xr(n)
    };
    if (t) {
        H(n, t);
    }
    return n;
}
function H(t, e = {}) {
    e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), !t.did && !e.did && (t.did = e.user.id || e.user.email || e.user.username));
    t.timestamp = e.timestamp || O();
    if (e.abnormal_mechanism) {
        t.abnormal_mechanism = e.abnormal_mechanism;
    }
    if (e.ignoreDuration) {
        t.ignoreDuration = e.ignoreDuration;
    }
    if (e.sid) {
        t.sid = e.sid.length === 32 ? e.sid : T();
    }
    if (e.init !== undefined) {
        t.init = e.init;
    }
    if (!t.did && e.did) {
        t.did = `${e.did}`;
    }
    if (typeof e.started === "number") {
        t.started = e.started;
    }
    if (t.ignoreDuration) {
        t.duration = undefined;
    } else if (typeof e.duration === "number") {
        t.duration = e.duration;
    } else {
        const n = t.timestamp - t.started;
        t.duration = n >= 0 ? n : 0;
    }
    if (e.release) {
        t.release = e.release;
    }
    if (e.environment) {
        t.environment = e.environment;
    }
    if (!t.ipAddress && e.ipAddress) {
        t.ipAddress = e.ipAddress;
    }
    if (!t.userAgent && e.userAgent) {
        t.userAgent = e.userAgent;
    }
    if (typeof e.errors === "number") {
        t.errors = e.errors;
    }
    if (e.status) {
        t.status = e.status;
    }
}
function Nr(t, e) {
    let n = {};
    if (t.status === "ok") {
        n = {
            status: "exited"
        };
    }
    H(t, n);
}
function xr(t) {
    return {
        sid: `${t.sid}`,
        init: t.init,
        started: new Date(t.started * 1000).toISOString(),
        timestamp: new Date(t.timestamp * 1000).toISOString(),
        status: t.status,
        errors: t.errors,
        did: typeof t.did === "number" || typeof t.did === "string" ? `${t.did}` : undefined,
        duration: t.duration,
        abnormal_mechanism: t.abnormal_mechanism,
        attrs: {
            release: t.release,
            environment: t.environment,
            ip_address: t.ipAddress,
            user_agent: t.userAgent
        }
    };
}
function tt(t, e, n = 2) {
    if (!e || typeof e !== "object" || n <= 0) {
        return e;
    }
    if (t && Object.keys(e).length === 0) {
        return t;
    }
    const r = {
        ...t
    };
    for(const s in e){
        if (Object.prototype.hasOwnProperty.call(e, s)) {
            r[s] = tt(r[s], e[s], n - 1);
        }
    }
    return r;
}
function be() {
    return T();
}
function _n() {
    return T().substring(16);
}
const Lt = "_sentrySpan";
function Ie(t, e) {
    if (e) {
        $(t, Lt, e);
    } else {
        delete t[Lt];
    }
}
function Te(t) {
    return t[Lt];
}
const Or = 100;
class k {
    constructor(){
        this._notifyingListeners = false;
        this._scopeListeners = [];
        this._eventProcessors = [];
        this._breadcrumbs = [];
        this._attachments = [];
        this._user = {};
        this._tags = {};
        this._extra = {};
        this._contexts = {};
        this._sdkProcessingMetadata = {};
        this._propagationContext = {
            traceId: be(),
            sampleRand: Math.random()
        };
    }
    clone() {
        const e = new k;
        e._breadcrumbs = [
            ...this._breadcrumbs
        ];
        e._tags = {
            ...this._tags
        };
        e._extra = {
            ...this._extra
        };
        e._contexts = {
            ...this._contexts
        };
        if (this._contexts.flags) {
            e._contexts.flags = {
                values: [
                    ...this._contexts.flags.values
                ]
            };
        }
        e._user = this._user;
        e._level = this._level;
        e._session = this._session;
        e._transactionName = this._transactionName;
        e._fingerprint = this._fingerprint;
        e._eventProcessors = [
            ...this._eventProcessors
        ];
        e._attachments = [
            ...this._attachments
        ];
        e._sdkProcessingMetadata = {
            ...this._sdkProcessingMetadata
        };
        e._propagationContext = {
            ...this._propagationContext
        };
        e._client = this._client;
        e._lastEventId = this._lastEventId;
        Ie(e, Te(this));
        return e;
    }
    setClient(e) {
        this._client = e;
    }
    setLastEventId(e) {
        this._lastEventId = e;
    }
    getClient() {
        return this._client;
    }
    lastEventId() {
        return this._lastEventId;
    }
    addScopeListener(e) {
        this._scopeListeners.push(e);
    }
    addEventProcessor(e) {
        this._eventProcessors.push(e);
        return this;
    }
    setUser(user) {
        this._user = user || {
            email: undefined,
            id: undefined,
            ip_address: undefined,
            username: undefined
        };
        if (this._session) {
            H(this._session, {
                user
            });
        }
        this._notifyScopeListeners();
        return this;
    }
    getUser() {
        return this._user;
    }
    setTags(e) {
        this._tags = {
            ...this._tags,
            ...e
        };
        this._notifyScopeListeners();
        return this;
    }
    setTag(e, n) {
        this._tags = {
            ...this._tags,
            [e]: n
        };
        this._notifyScopeListeners();
        return this;
    }
    setExtras(e) {
        this._extra = {
            ...this._extra,
            ...e
        };
        this._notifyScopeListeners();
        return this;
    }
    setExtra(e, n) {
        this._extra = {
            ...this._extra,
            [e]: n
        };
        this._notifyScopeListeners();
        return this;
    }
    setFingerprint(e) {
        this._fingerprint = e;
        this._notifyScopeListeners();
        return this;
    }
    setLevel(e) {
        this._level = e;
        this._notifyScopeListeners();
        return this;
    }
    setTransactionName(e) {
        this._transactionName = e;
        this._notifyScopeListeners();
        return this;
    }
    setContext(e, n) {
        if (n === null) {
            delete this._contexts[e];
        } else {
            this._contexts[e] = n;
        }
        this._notifyScopeListeners();
        return this;
    }
    setSession(e) {
        if (e) {
            this._session = e;
        } else {
            delete this._session;
        }
        this._notifyScopeListeners();
        return this;
    }
    getSession() {
        return this._session;
    }
    update(e) {
        if (!e) {
            return this;
        }
        const n = typeof e === "function" ? e(this) : e;
        const r = n instanceof k ? n.getScopeData() : K(n) ? e : undefined;
        const { tags, extra, user, contexts, level, fingerprint = [], propagationContext } = r || {};
        this._tags = {
            ...this._tags,
            ...tags
        };
        this._extra = {
            ...this._extra,
            ...extra
        };
        this._contexts = {
            ...this._contexts,
            ...contexts
        };
        if (user && Object.keys(user).length) {
            this._user = user;
        }
        if (level) {
            this._level = level;
        }
        if (fingerprint.length) {
            this._fingerprint = fingerprint;
        }
        if (propagationContext) {
            this._propagationContext = propagationContext;
        }
        return this;
    }
    clear() {
        this._breadcrumbs = [];
        this._tags = {};
        this._extra = {};
        this._user = {};
        this._contexts = {};
        this._level = undefined;
        this._transactionName = undefined;
        this._fingerprint = undefined;
        this._session = undefined;
        Ie(this, undefined);
        this._attachments = [];
        this.setPropagationContext({
            traceId: be(),
            sampleRand: Math.random()
        });
        this._notifyScopeListeners();
        return this;
    }
    addBreadcrumb(e, n) {
        const r = typeof n === "number" ? n : Or;
        if (r <= 0) {
            return this;
        }
        const s = {
            timestamp: Q(),
            ...e,
            message: e.message ? ht(e.message, 2048) : e.message
        };
        this._breadcrumbs.push(s);
        if (this._breadcrumbs.length > r) {
            this._breadcrumbs = this._breadcrumbs.slice(-r);
            this._client?.recordDroppedEvent("buffer_overflow", "log_item");
        }
        this._notifyScopeListeners();
        return this;
    }
    getLastBreadcrumb() {
        return this._breadcrumbs[this._breadcrumbs.length - 1];
    }
    clearBreadcrumbs() {
        this._breadcrumbs = [];
        this._notifyScopeListeners();
        return this;
    }
    addAttachment(e) {
        this._attachments.push(e);
        return this;
    }
    clearAttachments() {
        this._attachments = [];
        return this;
    }
    getScopeData() {
        return {
            breadcrumbs: this._breadcrumbs,
            attachments: this._attachments,
            contexts: this._contexts,
            tags: this._tags,
            extra: this._extra,
            user: this._user,
            level: this._level,
            fingerprint: this._fingerprint || [],
            eventProcessors: this._eventProcessors,
            propagationContext: this._propagationContext,
            sdkProcessingMetadata: this._sdkProcessingMetadata,
            transactionName: this._transactionName,
            span: Te(this)
        };
    }
    setSDKProcessingMetadata(e) {
        this._sdkProcessingMetadata = tt(this._sdkProcessingMetadata, e, 2);
        return this;
    }
    setPropagationContext(e) {
        this._propagationContext = e;
        return this;
    }
    getPropagationContext() {
        return this._propagationContext;
    }
    captureException(e, n) {
        const r = n?.event_id || T();
        if (!this._client) {
            if (m) {
                p.warn("No client configured on scope - will not capture exception!");
            }
            return r;
        }
        const s = new Error("Sentry syntheticException");
        this._client.captureException(e, {
            originalException: e,
            syntheticException: s,
            ...n,
            event_id: r
        }, this);
        return r;
    }
    captureMessage(e, n, r) {
        const s = r?.event_id || T();
        if (!this._client) {
            if (m) {
                p.warn("No client configured on scope - will not capture message!");
            }
            return s;
        }
        const o = new Error(e);
        this._client.captureMessage(e, n, {
            originalException: e,
            syntheticException: o,
            ...r,
            event_id: s
        }, this);
        return s;
    }
    captureEvent(e, n) {
        const r = n?.event_id || T();
        if (this._client) {
            this._client.captureEvent(e, {
                ...n,
                event_id: r
            }, this);
            return r;
        }
        if (m) {
            p.warn("No client configured on scope - will not capture event!");
        }
        return r;
    }
    _notifyScopeListeners() {
        if (!this._notifyingListeners) {
            this._notifyingListeners = true;
            this._scopeListeners.forEach((e)=>{
                e(this);
            });
            this._notifyingListeners = false;
        }
    }
}
function Dr() {
    return J("defaultCurrentScope", ()=>new k);
}
function Ar() {
    return J("defaultIsolationScope", ()=>new k);
}
class Cr {
    constructor(e, n){
        let r;
        if (e) {
            r = e;
        } else {
            r = new k;
        }
        let s;
        if (n) {
            s = n;
        } else {
            s = new k;
        }
        this._stack = [
            {
                scope: r
            }
        ];
        this._isolationScope = s;
    }
    withScope(e) {
        const n = this._pushScope();
        let r;
        try {
            r = e(n);
        } catch (error) {
            this._popScope();
            throw error;
        }
        if (Z(r)) {
            return r.then((s)=>{
                this._popScope();
                return s;
            }, (s)=>{
                this._popScope();
                throw s;
            });
        }
        this._popScope();
        return r;
    }
    getClient() {
        return this.getStackTop().client;
    }
    getScope() {
        return this.getStackTop().scope;
    }
    getIsolationScope() {
        return this._isolationScope;
    }
    getStackTop() {
        return this._stack[this._stack.length - 1];
    }
    _pushScope() {
        const e = this.getScope().clone();
        this._stack.push({
            client: this.getClient(),
            scope: e
        });
        return e;
    }
    _popScope() {
        if (this._stack.length <= 1) {
            return false;
        }
        return !!this._stack.pop();
    }
}
function G() {
    const t = _t();
    const e = yt(t);
    return e.stack = e.stack || new Cr(Dr(), Ar());
}
function withScope(t) {
    return G().withScope(t);
}
function withSetScope(t, e) {
    const n = G();
    return n.withScope(()=>{
        n.getStackTop().scope = t;
        return e(t);
    });
}
function withIsolationScope(t) {
    return G().withScope(()=>t(G().getIsolationScope()));
}
function Mr() {
    return {
        withIsolationScope,
        withScope,
        withSetScope,
        withSetIsolationScope: (t, e)=>withIsolationScope(e),
        getCurrentScope: ()=>G().getScope(),
        getIsolationScope: ()=>G().getIsolationScope()
    };
}
function ne(t) {
    const e = yt(t);
    if (e.acs) {
        return e.acs;
    }
    return Mr();
}
function w() {
    const t = _t();
    return ne(t).getCurrentScope();
}
function P() {
    const t = _t();
    return ne(t).getIsolationScope();
}
function re() {
    return J("globalScope", ()=>new k);
}
function withScope_1(...t) {
    const e = _t();
    const n = ne(e);
    if (t.length === 2) {
        const [r, s] = t;
        if (r) {
            return n.withSetScope(r, s);
        }
        return n.withScope(s);
    }
    return n.withScope(t[0]);
}
function E() {
    return w().getClient();
}
function $r(t) {
    const e = t.getPropagationContext();
    const { traceId, parentSpanId, propagationSpanId } = e;
    const o = {
        trace_id: traceId,
        span_id: propagationSpanId || _n()
    };
    if (parentSpanId) {
        o.parent_span_id = parentSpanId;
    }
    return o;
}
const Fr = "sentry.source";
const Ur = "sentry.sample_rate";
const jr = "sentry.previous_trace_sample_rate";
const Br = "sentry.op";
const Hr = "sentry.origin";
const En = "sentry.profile_id";
const Sn = "sentry.exclusive_time";
const Gr = 0;
const Wr = 1;
const qr = "_sentryScope";
const Yr = "_sentryIsolationScope";
function zr(t) {
    if (t) {
        if (typeof t === "object" && "deref" in t && typeof t.deref === "function") {
            try {
                return t.deref();
            } catch  {
                return;
            }
        }
        return t;
    }
}
function bn(t) {
    const e = t;
    return {
        scope: e[qr],
        isolationScope: zr(e[Yr])
    };
}
const Kr = "sentry-";
const Xr = /^sentry-/;
function Vr(t) {
    const e = Jr(t);
    if (!e) {
        return;
    }
    const n = Object.entries(e).reduce((acc, [s, o])=>{
        if (s.match(Xr)) {
            const i = s.slice(Kr.length);
            acc[i] = o;
        }
        return acc;
    }, {});
    if (Object.keys(n).length > 0) {
        return n;
    }
}
function Jr(t) {
    if (!(!t || !x(t) && !Array.isArray(t))) {
        if (Array.isArray(t)) {
            return t.reduce((acc, item)=>{
                const r = we(item);
                Object.entries(r).forEach(([s, o])=>{
                    acc[s] = o;
                });
                return acc;
            }, {});
        }
        return we(t);
    }
}
function we(t) {
    return t.split(",").map((e)=>e.split("=").map((n)=>{
            try {
                return decodeURIComponent(n.trim());
            } catch  {
                return;
            }
        })).reduce((acc, [n, r])=>{
        if (n && r) {
            acc[n] = r;
        }
        return acc;
    }, {});
}
const Zr = /^o(\d+)\./;
const Qr = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function ts(protocol) {
    return protocol === "http" || protocol === "https";
}
function bt({ host, path, pass, port, projectId, protocol, publicKey }, e = false) {
    return `${protocol}://${publicKey}${e && pass ? `:${pass}` : ""}@${host}${port ? `:${port}` : ""}/${path && `${path}/`}${projectId}`;
}
function es(dsn) {
    const e = Qr.exec(dsn);
    if (!e) {
        q(()=>{
            console.error(`Invalid Sentry Dsn: ${dsn}`);
        });
        return;
    }
    const [protocol, publicKey, pass = "", host = "", port = "", a = ""] = e.slice(1);
    let path = "";
    let projectId = a;
    const f = projectId.split("/");
    if (f.length > 1) {
        path = f.slice(0, -1).join("/");
        projectId = f.pop();
    }
    if (projectId) {
        const d = projectId.match(/^\d+/);
        if (d) {
            projectId = d[0];
        }
    }
    return In({
        host,
        pass,
        path,
        projectId,
        port,
        protocol,
        publicKey
    });
}
function In(t) {
    return {
        protocol: t.protocol,
        publicKey: t.publicKey || "",
        pass: t.pass || "",
        host: t.host,
        port: t.port || "",
        path: t.path || "",
        projectId: t.projectId
    };
}
function ns(t) {
    if (!m) {
        return true;
    }
    const { port, projectId, protocol } = t;
    if ([
        "protocol",
        "publicKey",
        "host",
        "projectId"
    ].find((i)=>{
        if (t[i]) {
            return false;
        }
        p.error(`Invalid Sentry Dsn: ${i} missing`);
        return true;
    })) {
        return false;
    }
    if (projectId.match(/^\d+$/)) {
        if (ts(protocol)) {
            if (port && isNaN(parseInt(port, 10))) {
                p.error(`Invalid Sentry Dsn: Invalid port ${port}`);
                return false;
            }
            return true;
        }
        p.error(`Invalid Sentry Dsn: Invalid protocol ${protocol}`);
        return false;
    }
    p.error(`Invalid Sentry Dsn: Invalid projectId ${projectId}`);
    return false;
}
function rs(host) {
    return host.match(Zr)?.[1];
}
function ss(t) {
    const e = t.getOptions();
    const { host } = t.getDsn() || {};
    let r;
    if (e.orgId) {
        r = String(e.orgId);
    } else if (host) {
        r = rs(host);
    }
    return r;
}
function os(dsn) {
    const e = typeof dsn === "string" ? es(dsn) : In(dsn);
    if (!(!e || !ns(e))) {
        return e;
    }
}
function is(sampleRate) {
    if (typeof sampleRate === "boolean") {
        return Number(sampleRate);
    }
    const e = typeof sampleRate === "string" ? parseFloat(sampleRate) : sampleRate;
    if (!(typeof e !== "number" || isNaN(e) || e < 0 || e > 1)) {
        return e;
    }
}
const Tn = 1;
let Re = false;
function as(span) {
    const { spanId, traceId, isRemote } = span.spanContext();
    const s = isRemote ? spanId : se(span).parent_span_id;
    const scope = bn(span).scope;
    const span_id = isRemote ? scope?.getPropagationContext().propagationSpanId || _n() : spanId;
    return {
        parent_span_id: s,
        span_id,
        trace_id: traceId
    };
}
function cs(links) {
    if (links && links.length > 0) {
        return links.map(({ context: { spanId, traceId, traceFlags, ...rest }, attributes })=>({
                span_id: spanId,
                trace_id: traceId,
                sampled: traceFlags === Tn,
                attributes,
                ...rest
            }));
    }
}
function ke(t) {
    if (typeof t === "number") {
        return Ne(t);
    }
    if (Array.isArray(t)) {
        return t[0] + t[1] / 1000000000;
    }
    if (t instanceof Date) {
        return Ne(t.getTime());
    }
    return O();
}
function Ne(t) {
    if (t > 9999999999) {
        return t / 1000;
    }
    return t;
}
function se(t) {
    if (fs(t)) {
        return t.getSpanJSON();
    }
    const { spanId, traceId } = t.spanContext();
    if (us(t)) {
        const { attributes, startTime, name, endTime, status, links } = t;
        const u = "parentSpanId" in t ? t.parentSpanId : "parentSpanContext" in t ? t.parentSpanContext?.spanId : undefined;
        return {
            span_id: spanId,
            trace_id: traceId,
            data: attributes,
            description: name,
            parent_span_id: u,
            start_timestamp: ke(startTime),
            timestamp: ke(endTime) || undefined,
            status: ls(status),
            op: attributes[Br],
            origin: attributes[Hr],
            links: cs(links)
        };
    }
    return {
        span_id: spanId,
        trace_id: traceId,
        start_timestamp: 0,
        data: {}
    };
}
function us(t) {
    const e = t;
    return !!e.attributes && !!e.startTime && !!e.name && !!e.endTime && !!e.status;
}
function fs(t) {
    return typeof t.getSpanJSON === "function";
}
function ds(t) {
    const { traceFlags } = t.spanContext();
    return traceFlags === Tn;
}
function ls(status) {
    if (!(!status || status.code === Gr)) {
        if (status.code === Wr) {
            return "ok";
        }
        return status.message || "unknown_error";
    }
}
const ps = "_sentryRootSpan";
function vn(t) {
    return t[ps] || t;
}
function xe() {
    if (!Re) {
        q(()=>{
            console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.");
        });
        Re = true;
    }
}
function hs(t) {
    if (typeof __SENTRY_TRACING__ === "boolean" && !__SENTRY_TRACING__) {
        return false;
    }
    const e = E()?.getOptions();
    return !!e && (e.tracesSampleRate != null || !!e.tracesSampler);
}
function Oe(t) {
    p.log(`Ignoring span ${t.op} - ${t.description} because it matches \`ignoreSpans\`.`);
}
function De(t, ignoreSpans) {
    if (!ignoreSpans?.length || !t.description) {
        return false;
    }
    for (const n of ignoreSpans){
        if (gs(n)) {
            if (ft(t.description, n)) {
                if (m) {
                    Oe(t);
                }
                return true;
            }
            continue;
        }
        if (!n.name && !n.op) {
            continue;
        }
        const r = n.name ? ft(t.description, n.name) : true;
        const s = n.op ? t.op && ft(t.op, n.op) : true;
        if (r && s) {
            if (m) {
                Oe(t);
            }
            return true;
        }
    }
    return false;
}
function ms(t, { parent_span_id, span_id }) {
    if (parent_span_id) {
        for (const s of t){
            if (s.parent_span_id === span_id) {
                s.parent_span_id = parent_span_id;
            }
        }
    }
}
function gs(t) {
    return typeof t === "string" || t instanceof RegExp;
}
const oe = "production";
const _s = "_frozenDsc";
function wn(trace_id, e) {
    const n = e.getOptions();
    const { publicKey } = e.getDsn() || {};
    const s = {
        environment: n.environment || oe,
        release: n.release,
        public_key: publicKey,
        trace_id,
        org_id: ss(e)
    };
    e.emit("createDsc", s);
    return s;
}
function ys(t, e) {
    const n = e.getPropagationContext();
    return n.dsc || wn(n.traceId, t);
}
function Es(span) {
    const e = E();
    if (!e) {
        return {};
    }
    const n = vn(span);
    const r = se(n);
    const r_data = r.data;
    const traceState = n.spanContext().traceState;
    const i = traceState?.get("sentry.sample_rate") ?? r_data[Ur] ?? r_data[jr];
    function a(_) {
        if (typeof i === "number" || typeof i === "string") {
            _.sample_rate = `${i}`;
        }
        return _;
    }
    const c = n[_s];
    if (c) {
        return a(c);
    }
    const u = traceState?.get("sentry.dsc");
    const f = u && Vr(u);
    if (f) {
        return a(f);
    }
    const d = wn(span.spanContext().traceId, e);
    const h = r_data[Fr];
    const r_description = r.description;
    if (h !== "url" && r_description) {
        d.transaction = r_description;
    }
    if (hs()) {
        d.sampled = String(ds(n));
        d.sample_rand = traceState?.get("sentry.sample_rand") ?? bn(n).scope?.getPropagationContext().sampleRand.toString();
    }
    a(d);
    e.emit("createDsc", d, n);
    return d;
}
function R(t, e = 100, n = Infinity) {
    try {
        return Mt("", t, e, n);
    } catch (error) {
        return {
            ERROR: `**non-serializable** (${error})`
        };
    }
}
function Rn(t, e = 3, n = 100 * 1024) {
    const r = R(t, e);
    if (Ts(r) > n) {
        return Rn(t, e - 1, n);
    }
    return r;
}
function Mt(t, e, n = Infinity, r = Infinity, s = vs()) {
    const [o, i] = s;
    if (e == null || [
        "boolean",
        "string"
    ].includes(typeof e) || typeof e === "number" && Number.isFinite(e)) {
        return e;
    }
    const a = Ss(t, e);
    if (!a.startsWith("[object ")) {
        return a;
    }
    if (e.__sentry_skip_normalization__) {
        return e;
    }
    const c = typeof e.__sentry_override_normalization_depth__ === "number" ? e.__sentry_override_normalization_depth__ : n;
    if (c === 0) {
        return a.replace("object ", "");
    }
    if (o(e)) {
        return "[Circular ~]";
    }
    const u = e;
    if (u && typeof u.toJSON === "function") {
        try {
            const l = u.toJSON();
            return Mt("", l, c - 1, r, s);
        } catch  {}
    }
    const f = Array.isArray(e) ? [] : {};
    let d = 0;
    const h = hn(e);
    for(const l in h){
        if (!Object.prototype.hasOwnProperty.call(h, l)) {
            continue;
        }
        if (d >= r) {
            f[l] = "[MaxProperties ~]";
            break;
        }
        const _ = h[l];
        f[l] = Mt(l, _, c - 1, r, s);
        d++;
    }
    i(e);
    return f;
}
function Ss(t, e) {
    try {
        if (t === "domain" && e && typeof e === "object" && e._events) {
            return "[Domain]";
        }
        if (t === "domainEmitter") {
            return "[DomainEmitter]";
        }
        if (typeof global !== "undefined" && e === global) {
            return "[Global]";
        }
        if (typeof window !== "undefined" && e === window) {
            return "[Window]";
        }
        if (typeof document !== "undefined" && e === document) {
            return "[Document]";
        }
        if (dn(e)) {
            return "[VueViewModel]";
        }
        if (yr(e)) {
            return "[SyntheticEvent]";
        }
        if (typeof e === "number" && !Number.isFinite(e)) {
            return `[${e}]`;
        }
        if (typeof e === "function") {
            return `[Function: ${A(e)}]`;
        }
        if (typeof e === "symbol") {
            return `[${String(e)}]`;
        }
        if (typeof e === "bigint") {
            return `[BigInt: ${String(e)}]`;
        }
        const n = bs(e);
        if (/^HTML(\w*)Element$/.test(n)) {
            return `[HTMLElement: ${n}]`;
        }
        return `[object ${n}]`;
    } catch (error) {
        return `**non-serializable** (${error})`;
    }
}
function bs(t) {
    const e = Object.getPrototypeOf(t);
    if (e?.constructor) {
        return e.constructor.name;
    }
    return "null prototype";
}
function Is(t) {
    return ~-encodeURI(t).split(/%..|./).length;
}
function Ts(t) {
    return Is(JSON.stringify(t));
}
function vs() {
    const t = new WeakSet;
    function e(r) {
        if (t.has(r)) {
            return true;
        }
        t.add(r);
        return false;
    }
    function n(r) {
        t.delete(r);
    }
    return [
        e,
        n
    ];
}
function et(t, e = []) {
    return [
        t,
        e
    ];
}
function ws([n, r], e) {
    return [
        n,
        [
            ...r,
            e
        ]
    ];
}
function Ae([, n], e) {
    for (const r of n){
        const s = r[0].type;
        if (e(r, s)) {
            return true;
        }
    }
    return false;
}
function $t(t) {
    const e = yt(g);
    if (e.encodePolyfill) {
        return e.encodePolyfill(t);
    }
    return new TextEncoder().encode(t);
}
function Rs([e, n]) {
    let r = JSON.stringify(e);
    function s(o) {
        if (typeof r === "string") {
            r = typeof o === "string" ? r + o : [
                $t(r),
                o
            ];
        } else {
            r.push(typeof o === "string" ? $t(o) : o);
        }
    }
    for (const o of n){
        const [i, a] = o;
        s(`
${JSON.stringify(i)}
`);
        if (typeof a === "string" || a instanceof Uint8Array) {
            s(a);
        } else {
            let c;
            try {
                c = JSON.stringify(a);
            } catch  {
                c = JSON.stringify(R(a));
            }
            s(c);
        }
    }
    if (typeof r === "string") {
        return r;
    }
    return ks(r);
}
function ks(t) {
    const e = t.reduce((acc, item)=>acc + item.length, 0);
    const n = new Uint8Array(e);
    let r = 0;
    for (const s of t){
        n.set(s, r);
        r += s.length;
    }
    return n;
}
function Ns(t) {
    const e = typeof t.data === "string" ? $t(t.data) : t.data;
    return [
        {
            type: "attachment",
            length: e.length,
            filename: t.filename,
            content_type: t.contentType,
            attachment_type: t.attachmentType
        },
        e
    ];
}
const xs = {
    session: "session",
    sessions: "session",
    attachment: "attachment",
    transaction: "transaction",
    event: "error",
    client_report: "internal",
    user_report: "default",
    profile: "profile",
    profile_chunk: "profile",
    replay_event: "replay",
    replay_recording: "replay",
    check_in: "monitor",
    feedback: "feedback",
    span: "span",
    raw_security: "security",
    log: "log_item"
};
function Ce(t) {
    return xs[t];
}
function kn(_metadata) {
    if (!_metadata?.sdk) {
        return;
    }
    const { name, version } = _metadata.sdk;
    return {
        name,
        version
    };
}
function Os(t, e, tunnel, r) {
    const trace = t.sdkProcessingMetadata?.dynamicSamplingContext;
    return {
        event_id: t.event_id,
        sent_at: new Date().toISOString(),
        ...e && {
            sdk: e
        },
        ...!!tunnel && r && {
            dsn: bt(r)
        },
        ...trace && {
            trace
        }
    };
}
function Ds(t, e) {
    if (!e) {
        return t;
    }
    const n = t.sdk || {};
    t.sdk = {
        ...n,
        name: n.name || e.name,
        version: n.version || e.version,
        integrations: [
            ...t.sdk?.integrations || [],
            ...e.integrations || []
        ],
        packages: [
            ...t.sdk?.packages || [],
            ...e.packages || []
        ],
        settings: t.sdk?.settings || e.settings ? {
            ...t.sdk?.settings,
            ...e.settings
        } : undefined
    };
    return t;
}
function As(t, e, _metadata, tunnel) {
    const s = kn(_metadata);
    const o = {
        sent_at: new Date().toISOString(),
        ...s && {
            sdk: s
        },
        ...!!tunnel && e && {
            dsn: bt(e)
        }
    };
    const i = "aggregates" in t ? [
        {
            type: "sessions"
        },
        t
    ] : [
        {
            type: "session"
        },
        t.toJSON()
    ];
    return et(o, [
        i
    ]);
}
function Cs(t, e, _metadata, tunnel) {
    const s = kn(_metadata);
    const type = t.type && t.type !== "replay_event" ? t.type : "event";
    Ds(t, _metadata?.sdk);
    const i = Os(t, s, tunnel, e);
    delete t.sdkProcessingMetadata;
    return et(i, [
        [
            {
                type
            },
            t
        ]
    ]);
}
const Nt = 0;
const Pe = 1;
const Le = 2;
function It(t) {
    return new X((e)=>{
        e(t);
    });
}
function ie(t) {
    return new X((e, n)=>{
        n(t);
    });
}
class X {
    constructor(e){
        this._state = Nt;
        this._handlers = [];
        this._runExecutor(e);
    }
    then(e, n) {
        return new X((r, s)=>{
            this._handlers.push([
                false,
                (o)=>{
                    if (!e) {
                        r(o);
                    } else {
                        try {
                            r(e(o));
                        } catch (error) {
                            s(error);
                        }
                    }
                },
                (o)=>{
                    if (!n) {
                        s(o);
                    } else {
                        try {
                            r(n(o));
                        } catch (error) {
                            s(error);
                        }
                    }
                }
            ]);
            this._executeHandlers();
        });
    }
    catch(e) {
        return this.then((n)=>n, e);
    }
    finally(e) {
        return new X((n, r)=>{
            let s;
            let o;
            return this.then((i)=>{
                o = false;
                s = i;
                if (e) {
                    e();
                }
            }, (i)=>{
                o = true;
                s = i;
                if (e) {
                    e();
                }
            }).then(()=>{
                if (o) {
                    r(s);
                    return;
                }
                n(s);
            });
        });
    }
    _executeHandlers() {
        if (this._state === Nt) {
            return;
        }
        const e = this._handlers.slice();
        this._handlers = [];
        e.forEach((n)=>{
            if (!n[0]) {
                if (this._state === Pe) {
                    n[1](this._value);
                }
                if (this._state === Le) {
                    n[2](this._value);
                }
                n[0] = true;
            }
        });
    }
    _runExecutor(e) {
        const n = (o, i)=>{
            if (this._state === Nt) {
                if (Z(i)) {
                    i.then(r, s);
                    return;
                }
                this._state = o;
                this._value = i;
                this._executeHandlers();
            }
        };
        const r = (o)=>{
            n(Pe, o);
        };
        const s = (o)=>{
            n(Le, o);
        };
        try {
            e(r, s);
        } catch (error) {
            s(error);
        }
    }
}
function Ps(t, e, n, r = 0) {
    try {
        const s = Ft(e, n, t, r);
        if (Z(s)) {
            return s;
        }
        return It(s);
    } catch (error) {
        return ie(error);
    }
}
function Ft(t, e, n, r) {
    const s = n[r];
    if (!t || !s) {
        return t;
    }
    const o = s({
        ...t
    }, e);
    if (m && o === null) {
        p.log(`Event processor "${s.id || "?"}" dropped event`);
    }
    if (Z(o)) {
        return o.then((i)=>Ft(i, e, n, r + 1));
    }
    return Ft(o, e, n, r + 1);
}
function Ls(t, e) {
    const { fingerprint, span, breadcrumbs, sdkProcessingMetadata } = e;
    Ms(t, e);
    if (span) {
        Us(t, span);
    }
    js(t, fingerprint);
    $s(t, breadcrumbs);
    Fs(t, sdkProcessingMetadata);
}
function mt(t, { extra, tags, user, contexts, level, sdkProcessingMetadata, breadcrumbs, fingerprint, eventProcessors, attachments, propagationContext, transactionName, span }) {
    rt(t, "extra", extra);
    rt(t, "tags", tags);
    rt(t, "user", user);
    rt(t, "contexts", contexts);
    t.sdkProcessingMetadata = tt(t.sdkProcessingMetadata, sdkProcessingMetadata, 2);
    if (level) {
        t.level = level;
    }
    if (transactionName) {
        t.transactionName = transactionName;
    }
    if (span) {
        t.span = span;
    }
    if (breadcrumbs.length) {
        t.breadcrumbs = [
            ...t.breadcrumbs,
            ...breadcrumbs
        ];
    }
    if (fingerprint.length) {
        t.fingerprint = [
            ...t.fingerprint,
            ...fingerprint
        ];
    }
    if (eventProcessors.length) {
        t.eventProcessors = [
            ...t.eventProcessors,
            ...eventProcessors
        ];
    }
    if (attachments.length) {
        t.attachments = [
            ...t.attachments,
            ...attachments
        ];
    }
    t.propagationContext = {
        ...t.propagationContext,
        ...propagationContext
    };
}
function rt(t, e, n) {
    t[e] = tt(t[e], n, 1);
}
function Ms(t, { extra, tags, user, contexts, level, transactionName }) {
    if (Object.keys(extra).length) {
        t.extra = {
            ...extra,
            ...t.extra
        };
    }
    if (Object.keys(tags).length) {
        t.tags = {
            ...tags,
            ...t.tags
        };
    }
    if (Object.keys(user).length) {
        t.user = {
            ...user,
            ...t.user
        };
    }
    if (Object.keys(contexts).length) {
        t.contexts = {
            ...contexts,
            ...t.contexts
        };
    }
    if (level) {
        t.level = level;
    }
    if (transactionName && t.type !== "transaction") {
        t.transaction = transactionName;
    }
}
function $s(t, breadcrumbs) {
    const n = [
        ...t.breadcrumbs || [],
        ...breadcrumbs
    ];
    t.breadcrumbs = n.length ? n : undefined;
}
function Fs(t, sdkProcessingMetadata) {
    t.sdkProcessingMetadata = {
        ...t.sdkProcessingMetadata,
        ...sdkProcessingMetadata
    };
}
function Us(t, span) {
    t.contexts = {
        trace: as(span),
        ...t.contexts
    };
    t.sdkProcessingMetadata = {
        dynamicSamplingContext: Es(span),
        ...t.sdkProcessingMetadata
    };
    const n = vn(span);
    const description = se(n).description;
    if (description && !t.transaction && t.type === "transaction") {
        t.transaction = description;
    }
}
function js(t, fingerprint) {
    t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [
        t.fingerprint
    ] : [];
    if (fingerprint) {
        t.fingerprint = t.fingerprint.concat(fingerprint);
    }
    t.fingerprint.length || delete t.fingerprint;
}
let st;
let Me;
let ot;
function Bs(stackParser) {
    const g__sentryDebugIds = g._sentryDebugIds;
    if (!g__sentryDebugIds) {
        return {};
    }
    const n = Object.keys(g__sentryDebugIds);
    if (!(ot && n.length === Me)) {
        Me = n.length;
        ot = n.reduce((acc, item)=>{
            if (!st) {
                st = {};
            }
            const o = st[item];
            if (o) {
                acc[o[0]] = o[1];
            } else {
                const i = stackParser(item);
                for(let a = i.length - 1; a >= 0; a--){
                    const u = i[a]?.filename;
                    const f = g__sentryDebugIds[item];
                    if (u && f) {
                        acc[u] = f;
                        st[item] = [
                            u,
                            f
                        ];
                        break;
                    }
                }
            }
            return acc;
        }, {});
    }
    return ot;
}
function Hs(t, e, n, r, s, o) {
    const { normalizeDepth = 3, normalizeMaxBreadth = 1000 } = t;
    const c = {
        ...e,
        event_id: e.event_id || n.event_id || T(),
        timestamp: e.timestamp || Q()
    };
    const u = n.integrations || t.integrations.map((S)=>S.name);
    Gs(c, t);
    Ys(c, u);
    if (s) {
        s.emit("applyFrameMetadata", e);
    }
    if (e.type === undefined) {
        Ws(c, t.stackParser);
    }
    const f = Ks(r, n.captureContext);
    if (n.mechanism) {
        B(c, n.mechanism);
    }
    const d = s ? s.getEventProcessors() : [];
    const h = re().getScopeData();
    if (o) {
        const S = o.getScopeData();
        mt(h, S);
    }
    if (f) {
        const S = f.getScopeData();
        mt(h, S);
    }
    const l = [
        ...n.attachments || [],
        ...h.attachments
    ];
    if (l.length) {
        n.attachments = l;
    }
    Ls(c, h);
    const _ = [
        ...d,
        ...h.eventProcessors
    ];
    return Ps(_, c, n).then((S)=>{
        if (S) {
            qs(S);
        }
        if (typeof normalizeDepth === "number" && normalizeDepth > 0) {
            return zs(S, normalizeDepth, normalizeMaxBreadth);
        }
        return S;
    });
}
function Gs(t, { environment, release, dist, maxValueLength = 250 }) {
    t.environment = t.environment || environment || oe;
    if (!t.release && release) {
        t.release = release;
    }
    if (!t.dist && dist) {
        t.dist = dist;
    }
    const t_request = t.request;
    if (t_request?.url) {
        t_request.url = ht(t_request.url, maxValueLength);
    }
}
function Ws(t, stackParser) {
    const n = Bs(stackParser);
    t.exception?.values?.forEach((r)=>{
        r.stacktrace?.frames?.forEach((s)=>{
            if (s.filename) {
                s.debug_id = n[s.filename];
            }
        });
    });
}
function qs(t) {
    const e = {};
    t.exception?.values?.forEach((r)=>{
        r.stacktrace?.frames?.forEach((s)=>{
            s.debug_id && (s.abs_path ? e[s.abs_path] = s.debug_id : s.filename && (e[s.filename] = s.debug_id), delete s.debug_id);
        });
    });
    if (Object.keys(e).length === 0) {
        return;
    }
    t.debug_meta = t.debug_meta || {};
    t.debug_meta.images = t.debug_meta.images || [];
    const images = t.debug_meta.images;
    Object.entries(e).forEach(([code_file, debug_id])=>{
        images.push({
            type: "sourcemap",
            code_file,
            debug_id
        });
    });
}
function Ys(t, e) {
    if (e.length > 0) {
        t.sdk = t.sdk || {};
        t.sdk.integrations = [
            ...t.sdk.integrations || [],
            ...e
        ];
    }
}
function zs(t, normalizeDepth, normalizeMaxBreadth) {
    if (!t) {
        return null;
    }
    const r = {
        ...t,
        ...t.breadcrumbs && {
            breadcrumbs: t.breadcrumbs.map((s)=>({
                    ...s,
                    ...s.data && {
                        data: R(s.data, normalizeDepth, normalizeMaxBreadth)
                    }
                }))
        },
        ...t.user && {
            user: R(t.user, normalizeDepth, normalizeMaxBreadth)
        },
        ...t.contexts && {
            contexts: R(t.contexts, normalizeDepth, normalizeMaxBreadth)
        },
        ...t.extra && {
            extra: R(t.extra, normalizeDepth, normalizeMaxBreadth)
        }
    };
    if (t.contexts?.trace && r.contexts) {
        r.contexts.trace = t.contexts.trace;
        if (t.contexts.trace.data) {
            r.contexts.trace.data = R(t.contexts.trace.data, normalizeDepth, normalizeMaxBreadth);
        }
    }
    if (t.spans) {
        r.spans = t.spans.map((s)=>({
                ...s,
                ...s.data && {
                    data: R(s.data, normalizeDepth, normalizeMaxBreadth)
                }
            }));
    }
    if (t.contexts?.flags && r.contexts) {
        r.contexts.flags = R(t.contexts.flags, 3, normalizeMaxBreadth);
    }
    return r;
}
function Ks(t, captureContext) {
    if (!captureContext) {
        return t;
    }
    const n = t ? t.clone() : new k;
    n.update(captureContext);
    return n;
}
function Xs(t) {
    if (t) {
        if (Vs(t)) {
            return {
                captureContext: t
            };
        }
        if (Zs(t)) {
            return {
                captureContext: t
            };
        }
        return t;
    }
}
function Vs(t) {
    return t instanceof k || typeof t === "function";
}
const Js = [
    "user",
    "level",
    "extra",
    "contexts",
    "tags",
    "fingerprint",
    "propagationContext"
];
function Zs(t) {
    return Object.keys(t).some((e)=>Js.includes(e));
}
function captureException(t, e) {
    return w().captureException(t, Xs(e));
}
function captureMessage(t, e) {
    const n = typeof e === "string" ? e : undefined;
    const r = typeof e !== "string" ? {
        captureContext: e
    } : undefined;
    return w().captureMessage(t, n, r);
}
function xn(t, e) {
    return w().captureEvent(t, e);
}
function setTag(t, e) {
    P().setTag(t, e);
}
function $e(t) {
    const e = P();
    const n = w();
    const { userAgent } = g.navigator || {};
    const s = kr({
        user: n.getUser() || e.getUser(),
        ...userAgent && {
            userAgent
        },
        ...t
    });
    const o = e.getSession();
    if (o?.status === "ok") {
        H(o, {
            status: "exited"
        });
    }
    On();
    e.setSession(s);
    return s;
}
function On() {
    const t = P();
    const n = w().getSession() || t.getSession();
    if (n) {
        Nr(n);
    }
    Dn();
    t.setSession();
}
function Dn() {
    const t = P();
    const e = E();
    const n = t.getSession();
    if (n && e) {
        e.captureSession(n);
    }
}
function Fe(t = false) {
    if (t) {
        On();
        return;
    }
    Dn();
}
const sentry_version = "7";
function no(t) {
    const e = t.protocol ? `${t.protocol}:` : "";
    const n = t.port ? `:${t.port}` : "";
    return `${e}//${t.host}${n}${t.path ? `/${t.path}` : ""}/api/`;
}
function ro(t) {
    return `${no(t)}${t.projectId}/envelope/`;
}
function so(t, e) {
    const n = {
        sentry_version
    };
    if (t.publicKey) {
        n.sentry_key = t.publicKey;
    }
    if (e) {
        n.sentry_client = `${e.name}/${e.version}`;
    }
    return new URLSearchParams(n).toString();
}
function oo(t, tunnel, n) {
    return tunnel || `${ro(t)}?${so(t, n)}`;
}
const Ue = [];
function io(t) {
    const e = {};
    t.forEach((n)=>{
        const { name } = n;
        const s = e[name];
        if (!(s && !s.isDefaultInstance && n.isDefaultInstance)) {
            e[name] = n;
        }
    });
    return Object.values(e);
}
function ao(t) {
    const e = t.defaultIntegrations || [];
    const t_integrations = t.integrations;
    e.forEach((s)=>{
        s.isDefaultInstance = true;
    });
    let r;
    if (Array.isArray(t_integrations)) {
        r = [
            ...e,
            ...t_integrations
        ];
    } else if (typeof t_integrations === "function") {
        const s = t_integrations(e);
        r = Array.isArray(s) ? s : [
            s
        ];
    } else {
        r = e;
    }
    return io(r);
}
function co(t, integrations) {
    const n = {};
    integrations.forEach((r)=>{
        if (r) {
            An(t, r, n);
        }
    });
    return n;
}
function je(t, e) {
    for (const n of e){
        if (n?.afterAllSetup) {
            n.afterAllSetup(t);
        }
    }
}
function An(t, e, n) {
    if (n[e.name]) {
        if (m) {
            p.log(`Integration skipped because it was already installed: ${e.name}`);
        }
        return;
    }
    n[e.name] = e;
    if (Ue.indexOf(e.name) === -1 && typeof e.setupOnce === "function") {
        e.setupOnce();
        Ue.push(e.name);
    }
    if (e.setup && typeof e.setup === "function") {
        e.setup(t);
    }
    if (typeof e.preprocessEvent === "function") {
        const r = e.preprocessEvent.bind(e);
        t.on("preprocessEvent", (s, o)=>r(s, o, t));
    }
    if (typeof e.processEvent === "function") {
        const r = e.processEvent.bind(e);
        const s = Object.assign((o, i)=>r(o, i, t), {
            id: e.name
        });
        t.addEventProcessor(s);
    }
    if (m) {
        p.log(`Integration installed: ${e.name}`);
    }
}
function uo(discarded_events, dsn_1, n) {
    const r = [
        {
            type: "client_report"
        },
        {
            timestamp: Q(),
            discarded_events
        }
    ];
    return et(dsn_1 ? {
        dsn: dsn_1
    } : {}, [
        r
    ]);
}
function Cn(t) {
    const e = [];
    if (t.message) {
        e.push(t.message);
    }
    try {
        const n = t.exception.values[t.exception.values.length - 1];
        if (n?.value) {
            e.push(n.value);
            if (n.type) {
                e.push(`${n.type}: ${n.value}`);
            }
        }
    } catch  {}
    return e;
}
function fo(t) {
    const { trace_id, parent_span_id, span_id, status, origin, data, op } = t.contexts?.trace ?? {};
    return {
        data: data ?? {},
        description: t.transaction,
        op,
        parent_span_id,
        span_id: span_id ?? "",
        start_timestamp: t.start_timestamp ?? 0,
        status,
        timestamp: t.timestamp,
        trace_id: trace_id ?? "",
        origin,
        profile_id: data?.[En],
        exclusive_time: data?.[Sn],
        measurements: t.measurements,
        is_segment: true
    };
}
function lo(t) {
    return {
        type: "transaction",
        timestamp: t.timestamp,
        start_timestamp: t.start_timestamp,
        transaction: t.description,
        contexts: {
            trace: {
                trace_id: t.trace_id,
                span_id: t.span_id,
                parent_span_id: t.parent_span_id,
                op: t.op,
                status: t.status,
                origin: t.origin,
                data: {
                    ...t.data,
                    ...t.profile_id && {
                        [En]: t.profile_id
                    },
                    ...t.exclusive_time && {
                        [Sn]: t.exclusive_time
                    }
                }
            }
        },
        measurements: t.measurements
    };
}
const Be = "Not capturing exception because it's already been captured.";
const He = "Discarded session because of missing or non-string release";
const SYMBOL_SENTRY_INTERNAL_ERROR = Symbol.for("SentryInternalError");
const SYMBOL_SENTRY_DO_NOT_SEND_EVENT_ERROR = Symbol.for("SentryDoNotSendEventError");
function dt(t) {
    return {
        message: t,
        [SYMBOL_SENTRY_INTERNAL_ERROR]: true
    };
}
function xt(t) {
    return {
        message: t,
        [SYMBOL_SENTRY_DO_NOT_SEND_EVENT_ERROR]: true
    };
}
function Ge(t) {
    return !!t && typeof t === "object" && SYMBOL_SENTRY_INTERNAL_ERROR in t;
}
function We(t) {
    return !!t && typeof t === "object" && SYMBOL_SENTRY_DO_NOT_SEND_EVENT_ERROR in t;
}
class po {
    constructor(e){
        this._options = e;
        this._integrations = {};
        this._numProcessing = 0;
        this._outcomes = {};
        this._hooks = {};
        this._eventProcessors = [];
        if (e.dsn) {
            this._dsn = os(e.dsn);
        } else if (m) {
            p.warn("No DSN provided, client will not send events.");
        }
        if (this._dsn) {
            const n = oo(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : undefined);
            this._transport = e.transport({
                tunnel: this._options.tunnel,
                recordDroppedEvent: this.recordDroppedEvent.bind(this),
                ...e.transportOptions,
                url: n
            });
        }
    }
    captureException(e, n, r) {
        const s = T();
        if (Ee(e)) {
            if (m) {
                p.log(Be);
            }
            return s;
        }
        const o = {
            event_id: s,
            ...n
        };
        this._process(this.eventFromException(e, o).then((i)=>this._captureEvent(i, o, r)));
        return o.event_id;
    }
    captureMessage(e, n, r, s) {
        const o = {
            event_id: T(),
            ...r
        };
        const i = Jt(e) ? e : String(e);
        const a = Zt(e) ? this.eventFromMessage(i, n, o) : this.eventFromException(e, o);
        this._process(a.then((c)=>this._captureEvent(c, o, s)));
        return o.event_id;
    }
    captureEvent(e, n, r) {
        const s = T();
        if (n?.originalException && Ee(n.originalException)) {
            if (m) {
                p.log(Be);
            }
            return s;
        }
        const o = {
            event_id: s,
            ...n
        };
        const i = e.sdkProcessingMetadata || {};
        const { capturedSpanScope, capturedSpanIsolationScope } = i;
        this._process(this._captureEvent(e, o, capturedSpanScope || r, capturedSpanIsolationScope));
        return o.event_id;
    }
    captureSession(e) {
        this.sendSession(e);
        H(e, {
            init: false
        });
    }
    getDsn() {
        return this._dsn;
    }
    getOptions() {
        return this._options;
    }
    getSdkMetadata() {
        return this._options._metadata;
    }
    getTransport() {
        return this._transport;
    }
    async flush(e) {
        const _transport = this._transport;
        if (!_transport) {
            return true;
        }
        this.emit("flush");
        const r = await this._isClientDoneProcessing(e);
        const s = await _transport.flush(e);
        return r && s;
    }
    async close(e) {
        const n = await this.flush(e);
        this.getOptions().enabled = false;
        this.emit("close");
        return n;
    }
    getEventProcessors() {
        return this._eventProcessors;
    }
    addEventProcessor(e) {
        this._eventProcessors.push(e);
    }
    init() {
        if (this._isEnabled() || this._options.integrations.some(({ name })=>name.startsWith("Spotlight"))) {
            this._setupIntegrations();
        }
    }
    getIntegrationByName(e) {
        return this._integrations[e];
    }
    addIntegration(e) {
        const n = this._integrations[e.name];
        An(this, e, this._integrations);
        if (!n) {
            je(this, [
                e
            ]);
        }
    }
    sendEvent(e, n = {}) {
        this.emit("beforeSendEvent", e, n);
        let r = Cs(e, this._dsn, this._options._metadata, this._options.tunnel);
        for (const s of n.attachments || []){
            r = ws(r, Ns(s));
        }
        this.sendEnvelope(r).then((s)=>this.emit("afterSendEvent", e, s));
    }
    sendSession(e) {
        const { release, environment = oe } = this._options;
        if ("aggregates" in e) {
            const o = e.attrs || {};
            if (!o.release && !release) {
                if (m) {
                    p.warn(He);
                }
                return;
            }
            o.release = o.release || release;
            o.environment = o.environment || environment;
            e.attrs = o;
        } else {
            if (!e.release && !release) {
                if (m) {
                    p.warn(He);
                }
                return;
            }
            e.release = e.release || release;
            e.environment = e.environment || environment;
        }
        this.emit("beforeSendSession", e);
        const s = As(e, this._dsn, this._options._metadata, this._options.tunnel);
        this.sendEnvelope(s);
    }
    recordDroppedEvent(e, n, r = 1) {
        if (this._options.sendClientReports) {
            const s = `${e}:${n}`;
            if (m) {
                p.log(`Recording outcome: "${s}"${r > 1 ? ` (${r} times)` : ""}`);
            }
            this._outcomes[s] = (this._outcomes[s] || 0) + r;
        }
    }
    on(e, n) {
        const r = this._hooks[e] = this._hooks[e] || new Set;
        const s = (...o)=>n(...o);
        r.add(s);
        return ()=>{
            r.delete(s);
        };
    }
    emit(e, ...n) {
        const r = this._hooks[e];
        if (r) {
            r.forEach((s)=>s(...n));
        }
    }
    async sendEnvelope(e) {
        this.emit("beforeEnvelope", e);
        if (this._isEnabled() && this._transport) {
            try {
                return await this._transport.send(e);
            } catch (error) {
                if (m) {
                    p.error("Error while sending envelope:", error);
                }
                return {};
            }
        }
        if (m) {
            p.error("Transport disabled");
        }
        return {};
    }
    _setupIntegrations() {
        const { integrations } = this._options;
        this._integrations = co(this, integrations);
        je(this, integrations);
    }
    _updateSessionFromEvent(e, n) {
        let r = n.level === "fatal";
        let s = false;
        const o = n.exception?.values;
        if (o) {
            s = true;
            for (const c of o){
                if (c.mechanism?.handled === false) {
                    r = true;
                    break;
                }
            }
        }
        const i = e.status === "ok";
        if (i && e.errors === 0 || i && r) {
            H(e, {
                ...r && {
                    status: "crashed"
                },
                errors: e.errors || Number(s || r)
            });
            this.captureSession(e);
        }
    }
    async _isClientDoneProcessing(e) {
        let n = 0;
        while(!e || n < e){
            await new Promise((resolve)=>setTimeout(resolve, 1));
            if (!this._numProcessing) {
                return true;
            }
            n++;
        }
        return false;
    }
    _isEnabled() {
        return this.getOptions().enabled !== false && this._transport !== undefined;
    }
    _prepareEvent(e, n, r, s) {
        const o = this.getOptions();
        const i = Object.keys(this._integrations);
        if (!n.integrations && i?.length) {
            n.integrations = i;
        }
        this.emit("preprocessEvent", e, n);
        if (!e.type) {
            s.setLastEventId(e.event_id || n.event_id);
        }
        return Hs(o, e, n, r, this, s).then((a)=>{
            if (a === null) {
                return a;
            }
            this.emit("postprocessEvent", a, n);
            a.contexts = {
                trace: $r(r),
                ...a.contexts
            };
            const dynamicSamplingContext = ys(this, r);
            a.sdkProcessingMetadata = {
                dynamicSamplingContext,
                ...a.sdkProcessingMetadata
            };
            return a;
        });
    }
    _captureEvent(e, n = {}, r = w(), s = P()) {
        if (m && Ut(e)) {
            p.log(`Captured error event \`${Cn(e)[0] || "<unknown>"}\``);
        }
        return this._processEvent(e, n, r, s).then((o)=>o.event_id, (o)=>{
            m && (We(o) ? p.log(o.message) : Ge(o) ? p.warn(o.message) : p.warn(o));
        });
    }
    _processEvent(e, n, r, s) {
        const o = this.getOptions();
        const { sampleRate } = o;
        const a = Mn(e);
        const c = Ut(e);
        const u = e.type || "error";
        const f = `before send for type \`${u}\``;
        const d = typeof sampleRate === "undefined" ? undefined : is(sampleRate);
        if (c && typeof d === "number" && Math.random() > d) {
            this.recordDroppedEvent("sample_rate", "error");
            return ie(xt(`Discarding event because it's not included in the random sample (sampling rate = ${sampleRate})`));
        }
        const h = u === "replay_event" ? "replay" : u;
        return this._prepareEvent(e, n, r, s).then((l)=>{
            if (l === null) {
                this.recordDroppedEvent("event_processor", h);
                throw xt("An event processor returned `null`, will not send event.");
            }
            if (n.data && n.data.__sentry__ === true) {
                return l;
            }
            const N = mo(this, o, l, n);
            return ho(N, f);
        }).then((l)=>{
            if (l === null) {
                this.recordDroppedEvent("before_send", h);
                if (a) {
                    const vt = 1 + (e.spans || []).length;
                    this.recordDroppedEvent("before_send", "span", vt);
                }
                throw xt(`${f} returned \`null\`, will not send event.`);
            }
            const _ = r.getSession() || s.getSession();
            if (c && _) {
                this._updateSessionFromEvent(_, l);
            }
            if (a) {
                const S = l.sdkProcessingMetadata?.spanCountBeforeProcessing || 0;
                const vt = l.spans ? l.spans.length : 0;
                const fe = S - vt;
                if (fe > 0) {
                    this.recordDroppedEvent("before_send", "span", fe);
                }
            }
            const l_transaction_info = l.transaction_info;
            if (a && l_transaction_info && l.transaction !== e.transaction) {
                const S = "custom";
                l.transaction_info = {
                    ...l_transaction_info,
                    source: S
                };
            }
            this.sendEvent(l, n);
            return l;
        }).then(null, (l)=>{
            throw We(l) || Ge(l) ? l : (this.captureException(l, {
                mechanism: {
                    handled: false,
                    type: "internal"
                },
                data: {
                    __sentry__: true
                },
                originalException: l
            }), dt(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${l}`));
        });
    }
    _process(e) {
        this._numProcessing++;
        e.then((n)=>{
            this._numProcessing--;
            return n;
        }, (n)=>{
            this._numProcessing--;
            return n;
        });
    }
    _clearOutcomes() {
        const _outcomes = this._outcomes;
        this._outcomes = {};
        return Object.entries(_outcomes).map(([n, quantity])=>{
            const [reason, category] = n.split(":");
            return {
                reason,
                category,
                quantity
            };
        });
    }
    _flushOutcomes() {
        if (m) {
            p.log("Flushing outcomes...");
        }
        const e = this._clearOutcomes();
        if (e.length === 0) {
            if (m) {
                p.log("No outcomes to send");
            }
            return;
        }
        if (!this._dsn) {
            if (m) {
                p.log("No dsn provided, will not send outcomes");
            }
            return;
        }
        if (m) {
            p.log("Sending outcomes:", e);
        }
        const n = uo(e, this._options.tunnel && bt(this._dsn));
        this.sendEnvelope(n);
    }
}
function ho(t, e) {
    const n = `${e} must return \`null\` or a valid event.`;
    if (Z(t)) {
        return t.then((r)=>{
            if (!K(r) && r !== null) {
                throw dt(n);
            }
            return r;
        }, (r)=>{
            throw dt(`${e} rejected with ${r}`);
        });
    }
    if (!K(t) && t !== null) {
        throw dt(n);
    }
    return t;
}
function mo(t, { beforeSend, beforeSendTransaction, beforeSendSpan, ignoreSpans }, n, r) {
    let c = n;
    if (Ut(c) && beforeSend) {
        return beforeSend(c, r);
    }
    if (Mn(c)) {
        if (beforeSendSpan || ignoreSpans) {
            const u = fo(c);
            if (ignoreSpans?.length && De(u, ignoreSpans)) {
                return null;
            }
            if (beforeSendSpan) {
                const f = beforeSendSpan(u);
                if (f) {
                    c = tt(n, lo(f));
                } else {
                    xe();
                }
            }
            if (c.spans) {
                const f = [];
                const d = c.spans;
                for (const l of d){
                    if (ignoreSpans?.length && De(l, ignoreSpans)) {
                        ms(d, l);
                        continue;
                    }
                    if (beforeSendSpan) {
                        const _ = beforeSendSpan(l);
                        if (_) {
                            f.push(_);
                        } else {
                            xe();
                            f.push(l);
                        }
                    } else {
                        f.push(l);
                    }
                }
                const h = c.spans.length - f.length;
                if (h) {
                    t.recordDroppedEvent("before_send", "span", h);
                }
                c.spans = f;
            }
        }
        if (beforeSendTransaction) {
            if (c.spans) {
                const spanCountBeforeProcessing = c.spans.length;
                c.sdkProcessingMetadata = {
                    ...n.sdkProcessingMetadata,
                    spanCountBeforeProcessing
                };
            }
            return beforeSendTransaction(c, r);
        }
    }
    return c;
}
function Ut(t) {
    return t.type === undefined;
}
function Mn(t) {
    return t.type === "transaction";
}
function go(items) {
    return [
        {
            type: "log",
            item_count: items.length,
            content_type: "application/vnd.sentry.items.log+json"
        },
        {
            items
        }
    ];
}
function _o(t, _metadata, tunnel, r) {
    const s = {};
    if (_metadata?.sdk) {
        s.sdk = {
            name: _metadata.sdk.name,
            version: _metadata.sdk.version
        };
    }
    if (tunnel && r) {
        s.dsn = bt(r);
    }
    return et(s, [
        go(t)
    ]);
}
function Ot(t, e) {
    const n = yo(t) ?? [];
    if (n.length === 0) {
        return;
    }
    const r = t.getOptions();
    const s = _o(n, r._metadata, r.tunnel, t.getDsn());
    $n().set(t, []);
    t.emit("flushLogs");
    t.sendEnvelope(s);
}
function yo(t) {
    return $n().get(t);
}
function $n() {
    return J("clientToLogBufferMap", ()=>new WeakMap);
}
function Eo(t, e) {
    e.debug === true && (m ? p.enable() : q(()=>{
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
    }));
    w().update(e.initialScope);
    const r = new t(e);
    So(r);
    r.init();
    return r;
}
function So(t) {
    w().setClient(t);
}
const SYMBOL_SENTRY_BUFFER_FULL_ERROR = Symbol.for("SentryBufferFullError");
function bo(t = 100) {
    const e = new Set;
    function n() {
        return e.size < t;
    }
    function r(i) {
        e.delete(i);
    }
    function add(i) {
        if (!n()) {
            return ie(SYMBOL_SENTRY_BUFFER_FULL_ERROR);
        }
        const a = i();
        e.add(a);
        a.then(()=>r(a), ()=>r(a));
        return a;
    }
    function drain(i) {
        if (!e.size) {
            return It(true);
        }
        const a = Promise.allSettled(Array.from(e)).then(()=>true);
        if (!i) {
            return a;
        }
        const c = [
            a,
            new Promise((resolve)=>setTimeout(()=>resolve(false), i))
        ];
        return Promise.race(c);
    }
    return {
        get $ () {
            return Array.from(e);
        },
        add,
        drain
    };
}
const Io = 60 * 1000;
function To(t, e = Date.now()) {
    const n = parseInt(`${t}`, 10);
    if (!isNaN(n)) {
        return n * 1000;
    }
    const r = Date.parse(`${t}`);
    if (isNaN(r)) {
        return Io;
    }
    return r - e;
}
function vo(t, e) {
    return t[e] || t.all || 0;
}
function wo(t, e, n = Date.now()) {
    return vo(t, e) > n;
}
function Ro(t, { statusCode, headers }, r = Date.now()) {
    const s = {
        ...t
    };
    const o = headers?.["x-sentry-rate-limits"];
    const i = headers?.["retry-after"];
    if (o) {
        for (const a of o.trim().split(",")){
            const [c, u, , , f] = a.split(":", 5);
            const d = parseInt(c, 10);
            const h = (isNaN(d) ? 60 : d) * 1000;
            if (!u) {
                s.all = r + h;
            } else {
                for (const l of u.split(";")){
                    if (l === "metric_bucket") {
                        if (!f || f.split(";").includes("custom")) {
                            s[l] = r + h;
                        }
                    } else {
                        s[l] = r + h;
                    }
                }
            }
        }
    } else {
        if (i) {
            s.all = r + To(i, r);
        } else if (statusCode === 429) {
            s.all = r + 60 * 1000;
        }
    }
    return s;
}
const ko = 64;
function Un(t, e, n = bo(t.bufferSize || ko)) {
    let r = {};
    const flush = (i)=>n.drain(i);
    function send(i) {
        const a = [];
        Ae(i, (d, h)=>{
            const l = Ce(h);
            if (wo(r, l)) {
                t.recordDroppedEvent("ratelimit_backoff", l);
            } else {
                a.push(d);
            }
        });
        if (a.length === 0) {
            return Promise.resolve({});
        }
        const c = et(i[0], a);
        const u = (d)=>{
            Ae(c, (h, l)=>{
                t.recordDroppedEvent(d, Ce(l));
            });
        };
        const f = ()=>e({
                body: Rs(c)
            }).then((d)=>{
                if (d.statusCode !== undefined && (d.statusCode < 200 || d.statusCode >= 300) && m) {
                    p.warn(`Sentry responded with status code ${d.statusCode} to sent event.`);
                }
                r = Ro(r, d);
                return d;
            }, (d)=>{
                u("network_error");
                if (m) {
                    p.error("Encountered error running transport request:", d);
                }
                throw d;
            });
        return n.add(f).then((d)=>d, (d)=>{
            if (d === SYMBOL_SENTRY_BUFFER_FULL_ERROR) {
                if (m) {
                    p.error("Skipped sending event because buffer is full.");
                }
                u("queue_overflow");
                return Promise.resolve({});
            }
            throw d;
        });
    }
    return {
        send,
        flush
    };
}
function Dt(t) {
    if (!t) {
        return {};
    }
    const e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!e) {
        return {};
    }
    const search = e[6] || "";
    const hash = e[8] || "";
    return {
        host: e[4],
        path: e[5],
        protocol: e[2],
        search,
        hash,
        relative: e[5] + search + hash
    };
}
function No(t) {
    "aggregates" in t ? t.attrs?.ip_address === undefined && (t.attrs = {
        ...t.attrs,
        ip_address: "{{auto}}"
    }) : t.ipAddress === undefined && (t.ipAddress = "{{auto}}");
}
function xo(t, e, n = [
    e
], r = "npm") {
    const s = t._metadata || {};
    if (!s.sdk) {
        s.sdk = {
            name: `sentry.javascript.${e}`,
            packages: n.map((o)=>({
                    name: `${r}:@sentry/${o}`,
                    version
                })),
            version
        };
    }
    t._metadata = s;
}
const Oo = 100;
function F(t, e) {
    const n = E();
    const r = P();
    if (!n) {
        return;
    }
    const { beforeBreadcrumb = null, maxBreadcrumbs = Oo } = n.getOptions();
    if (maxBreadcrumbs <= 0) {
        return;
    }
    const a = {
        timestamp: Q(),
        ...t
    };
    const c = beforeBreadcrumb ? q(()=>beforeBreadcrumb(a, e)) : a;
    if (c !== null) {
        if (n.emit) {
            n.emit("beforeAddBreadcrumb", c, e);
        }
        r.addBreadcrumb(c, maxBreadcrumbs);
    }
}
let qe;
const Do = "FunctionToString";
const Ye = new WeakMap;
const Ao = ()=>({
        name: Do,
        setupOnce () {
            qe = Function.prototype.toString;
            try {
                Function.prototype.toString = function(...t) {
                    const e = ee(this);
                    const n = Ye.has(E()) && e !== undefined ? e : this;
                    return qe.apply(n, t);
                };
            } catch  {}
        },
        setup (t) {
            Ye.set(t, true);
        }
    });
const jn = Ao;
const Co = [
    /^Script error\.?$/,
    /^Javascript error: Script error\.? on line 0$/,
    /^ResizeObserver loop completed with undelivered notifications.$/,
    /^Cannot redefine property: googletag$/,
    /^Can't find variable: gmo$/,
    /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/,
    `can't redefine non-configurable property "solana"`,
    "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)",
    "Can't find variable: _AutofillCallbackHandler",
    /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/,
    /^Java exception was raised during method invocation$/
];
const Po = "EventFilters";
const Bn = (t = {})=>{
    let e;
    return {
        name: Po,
        setup (n) {
            const r = n.getOptions();
            e = ze(t, r);
        },
        processEvent (n, r, s) {
            if (!e) {
                const o = s.getOptions();
                e = ze(t, o);
            }
            if (Mo(n, e)) {
                return null;
            }
            return n;
        }
    };
};
const Lo = (t = {})=>({
        ...Bn(t),
        name: "InboundFilters"
    });
function ze(t = {}, e = {}) {
    return {
        allowUrls: [
            ...t.allowUrls || [],
            ...e.allowUrls || []
        ],
        denyUrls: [
            ...t.denyUrls || [],
            ...e.denyUrls || []
        ],
        ignoreErrors: [
            ...t.ignoreErrors || [],
            ...e.ignoreErrors || [],
            ...t.disableErrorDefaults ? [] : Co
        ],
        ignoreTransactions: [
            ...t.ignoreTransactions || [],
            ...e.ignoreTransactions || []
        ]
    };
}
function Mo(t, e) {
    if (t.type) {
        if (t.type === "transaction" && Fo(t, e.ignoreTransactions)) {
            if (m) {
                p.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${L(t)}`);
            }
            return true;
        }
    } else {
        if ($o(t, e.ignoreErrors)) {
            if (m) {
                p.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${L(t)}`);
            }
            return true;
        }
        if (Ho(t)) {
            if (m) {
                p.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${L(t)}`);
            }
            return true;
        }
        if (Uo(t, e.denyUrls)) {
            if (m) {
                p.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${L(t)}.
Url: ${gt(t)}`);
            }
            return true;
        }
        if (!jo(t, e.allowUrls)) {
            if (m) {
                p.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${L(t)}.
Url: ${gt(t)}`);
            }
            return true;
        }
    }
    return false;
}
function $o(t, ignoreErrors) {
    if (ignoreErrors?.length) {
        return Cn(t).some((n)=>St(n, ignoreErrors));
    }
    return false;
}
function Fo(t, ignoreTransactions) {
    if (!ignoreTransactions?.length) {
        return false;
    }
    const t_transaction = t.transaction;
    if (t_transaction) {
        return St(t_transaction, ignoreTransactions);
    }
    return false;
}
function Uo(t, denyUrls) {
    if (!denyUrls?.length) {
        return false;
    }
    const n = gt(t);
    if (n) {
        return St(n, denyUrls);
    }
    return false;
}
function jo(t, allowUrls) {
    if (!allowUrls?.length) {
        return true;
    }
    const n = gt(t);
    if (n) {
        return St(n, allowUrls);
    }
    return true;
}
function Bo(t = []) {
    for(let e = t.length - 1; e >= 0; e--){
        const n = t[e];
        if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]") {
            return n.filename || null;
        }
    }
    return null;
}
function gt(t) {
    try {
        const n = [
            ...t.exception?.values ?? []
        ].reverse().find((r)=>r.mechanism?.parent_id === undefined && r.stacktrace?.frames?.length)?.stacktrace?.frames;
        if (n) {
            return Bo(n);
        }
        return null;
    } catch  {
        if (m) {
            p.error(`Cannot extract url for event ${L(t)}`);
        }
        return null;
    }
}
function Ho(t) {
    if (t.exception?.values?.length) {
        return !t.message && !t.exception.values.some((e)=>e.stacktrace || e.type && e.type !== "Error" || e.value);
    }
    return false;
}
function Go(t, stackParser, n, r, s, o) {
    if (!s.exception?.values || !o || !C(o.originalException, Error)) {
        return;
    }
    const i = s.exception.values.length > 0 ? s.exception.values[s.exception.values.length - 1] : undefined;
    if (i) {
        s.exception.values = jt(t, stackParser, r, o.originalException, n, s.exception.values, i, 0);
    }
}
function jt(t, e, n, r, s, o, i, a) {
    if (o.length >= n + 1) {
        return o;
    }
    let c = [
        ...o
    ];
    if (C(r[s], Error)) {
        Ke(i, a);
        const u = t(e, r[s]);
        const f = c.length;
        Xe(u, s, f, a);
        c = jt(t, e, n, r[s], s, [
            u,
            ...c
        ], u, f);
    }
    if (Array.isArray(r.errors)) {
        r.errors.forEach((u, f)=>{
            if (C(u, Error)) {
                Ke(i, a);
                const d = t(e, u);
                const h = c.length;
                Xe(d, `errors[${f}]`, h, a);
                c = jt(t, e, n, u, s, [
                    d,
                    ...c
                ], d, h);
            }
        });
    }
    return c;
}
function Ke(t, e) {
    t.mechanism = {
        handled: true,
        type: "auto.core.linked_errors",
        ...t.mechanism,
        ...t.type === "AggregateError" && {
            is_exception_group: true
        },
        exception_id: e
    };
}
function Xe(t, e, n, parent_id) {
    t.mechanism = {
        handled: true,
        ...t.mechanism,
        type: "chained",
        source: e,
        exception_id: n,
        parent_id
    };
}
function Wo(t) {
    const e = "console";
    U(e, t);
    j(e, qo);
}
function qo() {
    if ("console" in g) {
        rr.forEach((level)=>{
            if (level in g.console) {
                I(g.console, level, (e)=>{
                    pt[level] = e;
                    return (...n)=>{
                        v("console", {
                            args: n,
                            level
                        });
                        pt[level]?.apply(g.console, n);
                    };
                });
            }
        });
    }
}
function Yo(level) {
    if (level === "warn") {
        return "warning";
    }
    if ([
        "fatal",
        "error",
        "warning",
        "log",
        "info",
        "debug"
    ].includes(level)) {
        return level;
    }
    return "log";
}
const zo = "Dedupe";
const Ko = ()=>{
    let t;
    return {
        name: zo,
        processEvent (e) {
            if (e.type) {
                return e;
            }
            try {
                if (Xo(e, t)) {
                    if (m) {
                        p.warn("Event dropped due to being a duplicate of previously captured event.");
                    }
                    return null;
                }
            } catch  {}
            return t = e;
        }
    };
};
const Hn = Ko;
function Xo(t, e) {
    if (e) {
        return !!(Vo(t, e) || Jo(t, e));
    }
    return false;
}
function Vo(t, e) {
    const t_message = t.message;
    const e_message = e.message;
    return !(!t_message && !e_message || t_message && !e_message || !t_message && e_message || t_message !== e_message || !Wn(t, e) || !Gn(t, e));
}
function Jo(t, e) {
    const n = Ve(e);
    const r = Ve(t);
    return !(!n || !r || n.type !== r.type || n.value !== r.value || !Wn(t, e) || !Gn(t, e));
}
function Gn(t, e) {
    let n = pe(t);
    let r = pe(e);
    if (!n && !r) {
        return true;
    }
    if (n && !r || !n && r || (n = n, r = r, r.length !== n.length)) {
        return false;
    }
    for(let s = 0; s < r.length; s++){
        const o = r[s];
        const i = n[s];
        if (o.filename !== i.filename || o.lineno !== i.lineno || o.colno !== i.colno || o.function !== i.function) {
            return false;
        }
    }
    return true;
}
function Wn({ fingerprint }, e) {
    let e_fingerprint = e.fingerprint;
    if (!fingerprint && !e_fingerprint) {
        return true;
    }
    if (fingerprint && !e_fingerprint || !fingerprint && e_fingerprint) {
        return false;
    }
    fingerprint = fingerprint;
    e_fingerprint = e_fingerprint;
    try {
        return fingerprint.join("") === e_fingerprint.join("");
    } catch  {
        return false;
    }
}
function Ve(t) {
    return t.exception?.values?.[0];
}
function qn(status_code) {
    if (status_code !== undefined) {
        if (status_code >= 400 && status_code < 500) {
            return "warning";
        }
        if (status_code >= 500) {
            return "error";
        }
        return undefined;
    }
}
const V = g;
function Zo() {
    return "history" in V && !!V.history;
}
function Qo() {
    if (!("fetch" in V)) {
        return false;
    }
    try {
        new Headers;
        new Request("http://www.example.com");
        new Response;
        return true;
    } catch  {
        return false;
    }
}
function Bt(t) {
    return t && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString());
}
function ti() {
    if (typeof EdgeRuntime === "string") {
        return true;
    }
    if (!Qo()) {
        return false;
    }
    if (Bt(V.fetch)) {
        return true;
    }
    let t = false;
    const V_document = V.document;
    if (V_document && typeof V_document.createElement === "function") {
        try {
            const n = V_document.createElement("iframe");
            n.hidden = true;
            V_document.head.appendChild(n);
            if (n.contentWindow?.fetch) {
                t = Bt(n.contentWindow.fetch);
            }
            V_document.head.removeChild(n);
        } catch (error) {
            if (m) {
                p.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", error);
            }
        }
    }
    return t;
}
function ei(t, e) {
    const n = "fetch";
    U(n, t);
    j(n, ()=>ni(undefined, e));
}
function ni(t, e = false) {
    if (!(e && !ti())) {
        I(g, "fetch", (n)=>(...r)=>{
                const virtualError = new Error;
                const { method, url } = ri(r);
                const a = {
                    args: r,
                    fetchData: {
                        method,
                        url
                    },
                    startTimestamp: O() * 1000,
                    virtualError,
                    headers: si(r)
                };
                v("fetch", {
                    ...a
                });
                return n.apply(g, r).then(async (c)=>{
                    v("fetch", {
                        ...a,
                        endTimestamp: O() * 1000,
                        response: c
                    });
                    return c;
                }, (c)=>{
                    v("fetch", {
                        ...a,
                        endTimestamp: O() * 1000,
                        error: c
                    });
                    if (Vt(c) && c.stack === undefined) {
                        c.stack = virtualError.stack;
                        $(c, "framesToPop", 1);
                    }
                    if (c instanceof TypeError && (c.message === "Failed to fetch" || c.message === "Load failed" || c.message === "NetworkError when attempting to fetch resource.")) {
                        try {
                            const u = new URL(a.fetchData.url);
                            c.message = `${c.message} (${u.host})`;
                        } catch  {}
                    }
                    throw c;
                });
            });
    }
}
function Ht(t, e) {
    return !!t && typeof t === "object" && !!t[e];
}
function Je(t) {
    if (typeof t === "string") {
        return t;
    }
    if (t) {
        if (Ht(t, "url")) {
            return t.url;
        }
        if (t.toString) {
            return t.toString();
        }
        return "";
    }
    return "";
}
function ri(t) {
    if (t.length === 0) {
        return {
            method: "GET",
            url: ""
        };
    }
    if (t.length === 2) {
        const [n, r] = t;
        return {
            url: Je(n),
            method: Ht(r, "method") ? String(r.method).toUpperCase() : "GET"
        };
    }
    const e = t[0];
    return {
        url: Je(e),
        method: Ht(e, "method") ? String(e.method).toUpperCase() : "GET"
    };
}
function si([e, n]) {
    try {
        if (typeof n === "object" && n !== null && "headers" in n && n.headers) {
            return new Headers(n.headers);
        }
        if (Er(e)) {
            return new Headers(e.headers);
        }
    } catch  {}
}
function oi() {
    return "npm";
}
function ii(t, e = false) {
    return !(e || t && !t.startsWith("/") && !t.match(/^[A-Z]:/) && !t.startsWith(".") && !t.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//)) && t !== undefined && !t.includes("node_modules/");
}
function ai(t) {
    const e = /^\s*[-]{4,}$/;
    const n = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
    const r = /at (?:async )?(.+?) \(data:(.*?),/;
    return (s)=>{
        const o = s.match(r);
        if (o) {
            return {
                filename: `<data:${o[2]}>`,
                function: o[1]
            };
        }
        const i = s.match(n);
        if (i) {
            let a;
            let c;
            let u;
            let f;
            let d;
            if (i[1]) {
                u = i[1];
                let _ = u.lastIndexOf(".");
                u[_ - 1] === "." && _--;
                if (_ > 0) {
                    a = u.slice(0, _);
                    c = u.slice(_ + 1);
                    const N = a.indexOf(".Module");
                    if (N > 0) {
                        u = u.slice(N + 1);
                        a = a.slice(0, N);
                    }
                }
                f = undefined;
            }
            if (c) {
                f = a;
                d = c;
            }
            if (c === "<anonymous>") {
                d = undefined;
                u = undefined;
            }
            if (u === undefined) {
                d = d || D;
                u = f ? `${f}.${d}` : d;
            }
            let h = i[2]?.startsWith("file://") ? i[2].slice(7) : i[2];
            const l = i[5] === "native";
            if (h?.match(/\/[A-Z]:/)) {
                h = h.slice(1);
            }
            if (!h && i[5] && !l) {
                h = i[5];
            }
            return {
                filename: h ? decodeURI(h) : undefined,
                module: t ? t(h) : undefined,
                function: u,
                lineno: Ze(i[3]),
                colno: Ze(i[4]),
                in_app: ii(h || "", l)
            };
        }
        if (s.match(e)) {
            return {
                filename: s
            };
        }
    };
}
function ci(t) {
    return [
        90,
        ai(t)
    ];
}
function Ze(t) {
    return parseInt(t || "", 10) || undefined;
}
const Qe = {
    Classic: 1,
    1: "Classic",
    Protocol: 2,
    2: "Protocol",
    Both: 3,
    3: "Both"
};
function ui(namespace) {
    return {
        createUrl: (e)=>`${namespace}://${e}/sentry_key`,
        urlMatches (e, n) {
            return e.startsWith(this.createUrl(n));
        },
        createKey: (e)=>`${namespace}.${e}`,
        namespace
    };
}
const fi = "sentry-electron-renderer-id";
function di(ipcNamespace) {
    const e = ui(ipcNamespace);
    if (window.__SENTRY_IPC__?.[e.namespace]) {
        return window.__SENTRY_IPC__[e.namespace];
    }
    {
        p.log("IPC was not configured in preload script, falling back to custom protocol and fetch");
        const n = window.__SENTRY_RENDERER_ID__ = T();
        const r = {
            [fi]: n
        };
        return {
            sendRendererStart: ()=>{
                fetch(e.createUrl("start"), {
                    method: "POST",
                    body: "",
                    headers: r
                }).catch(()=>{
                    console.error(`Sentry SDK failed to establish connection with the Electron main process.
  - Ensure you have initialized the SDK in the main process
  - If your renderers use custom sessions, be sure to set 'getSessions' in the main process options
  - If you are bundling your main process code and using Electron < v5, you'll need to manually configure a preload script`);
                });
            },
            sendScope: (s)=>{
                fetch(e.createUrl("scope"), {
                    method: "POST",
                    body: s,
                    headers: r
                }).catch(()=>{});
            },
            sendEnvelope: (s)=>{
                fetch(e.createUrl("envelope"), {
                    method: "POST",
                    body: s,
                    headers: r
                }).catch(()=>{});
            },
            sendStatus: (status)=>{
                fetch(e.createUrl("status"), {
                    method: "POST",
                    body: JSON.stringify({
                        status
                    }),
                    headers: r
                }).catch(()=>{});
            },
            sendStructuredLog: (s)=>{
                fetch(e.createUrl("structured-log"), {
                    method: "POST",
                    body: JSON.stringify(s),
                    headers: r
                }).catch(()=>{});
            }
        };
    }
}
let it;
function Yn(t = E()) {
    if (!t) {
        throw new Error("Could not find client, make sure to call Sentry.init before getIPC");
    }
    if (!it) {
        it = new WeakMap;
    }
    const e = it.get(t);
    if (e) {
        return e;
    }
    const ipcNamespace = t.getOptions().ipcNamespace;
    const r = di(ipcNamespace);
    it.set(t, r);
    r.sendRendererStart();
    return r;
}
const y = g;
let Gt = 0;
function zn() {
    return Gt > 0;
}
function li() {
    Gt++;
    setTimeout(()=>{
        Gt--;
    });
}
function W(t, e = {}) {
    function n(s) {
        return typeof s === "function";
    }
    if (!n(t)) {
        return t;
    }
    try {
        const s = t.__sentry_wrapped__;
        if (s) {
            if (typeof s === "function") {
                return s;
            }
            return t;
        }
        if (ee(t)) {
            return t;
        }
    } catch  {
        return t;
    }
    const r = function(...s) {
        try {
            const o = s.map((i)=>W(i, e));
            return t.apply(this, o);
        } catch (error) {
            li();
            withScope_1((i)=>{
                i.addEventProcessor((a)=>{
                    if (e.mechanism) {
                        Pt(a, undefined);
                        B(a, e.mechanism);
                    }
                    a.extra = {
                        ...a.extra,
                        arguments: s
                    };
                    return a;
                });
                captureException(error);
            });
            throw error;
        }
    };
    try {
        for(const s in t){
            if (Object.prototype.hasOwnProperty.call(t, s)) {
                r[s] = t[s];
            }
        }
    } catch  {}
    pn(r, t);
    $(t, "__sentry_wrapped__", r);
    try {
        if (Object.getOwnPropertyDescriptor(r, "name").configurable) {
            Object.defineProperty(r, "name", {
                get () {
                    return t.name;
                }
            });
        }
    } catch  {}
    return r;
}
function pi() {
    const t = te();
    const { referrer } = y.document || {};
    const { userAgent } = y.navigator || {};
    const r = {
        ...referrer && {
            Referer: referrer
        },
        ...userAgent && {
            "User-Agent": userAgent
        }
    };
    return {
        url: t,
        headers: r
    };
}
function ae(t, e) {
    const n = ce(t, e);
    const r = {
        type: yi(e),
        value: Ei(e)
    };
    if (n.length) {
        r.stacktrace = {
            frames: n
        };
    }
    if (r.type === undefined && r.value === "") {
        r.value = "Unrecoverable error caught";
    }
    return r;
}
function hi(t, e, n, isUnhandledRejection) {
    const o = E()?.getOptions().normalizeDepth;
    const i = vi(e);
    const extra = {
        __serialized__: Rn(e, o)
    };
    if (i) {
        return {
            exception: {
                values: [
                    ae(t, i)
                ]
            },
            extra
        };
    }
    const c = {
        exception: {
            values: [
                {
                    type: Et(e) ? e.constructor.name : isUnhandledRejection ? "UnhandledRejection" : "Error",
                    value: Ii(e, {
                        isUnhandledRejection
                    })
                }
            ]
        },
        extra
    };
    if (n) {
        const u = ce(t, n);
        if (u.length) {
            c.exception.values[0].stacktrace = {
                frames: u
            };
        }
    }
    return c;
}
function At(t, e) {
    return {
        exception: {
            values: [
                ae(t, e)
            ]
        }
    };
}
function ce(t, e) {
    const n = e.stacktrace || e.stack || "";
    const r = gi(e);
    const s = _i(e);
    try {
        return t(n, r, s);
    } catch  {}
    return [];
}
const mi = /Minified React error #\d+;/i;
function gi(t) {
    if (t && mi.test(t.message)) {
        return 1;
    }
    return 0;
}
function _i(t) {
    if (typeof t.framesToPop === "number") {
        return t.framesToPop;
    }
    return 0;
}
function Kn(t) {
    if (typeof WebAssembly !== "undefined" && typeof WebAssembly.Exception !== "undefined") {
        return t instanceof WebAssembly.Exception;
    }
    return false;
}
function yi(t) {
    const e = t?.name;
    if (!e && Kn(t)) {
        if (t.message && Array.isArray(t.message) && t.message.length == 2) {
            return t.message[0];
        }
        return "WebAssembly.Exception";
    }
    return e;
}
function Ei(t) {
    const e = t?.message;
    if (Kn(t)) {
        if (Array.isArray(t.message) && t.message.length == 2) {
            return t.message[1];
        }
        return "wasm exception";
    }
    if (e) {
        if (e.error && typeof e.error.message === "string") {
            return e.error.message;
        }
        return e;
    }
    return "No error message";
}
function Si(stackParser, e, n, attachStacktrace) {
    const s = n?.syntheticException || undefined;
    const o = ue(stackParser, e, s, attachStacktrace);
    B(o);
    o.level = "error";
    if (n?.event_id) {
        o.event_id = n.event_id;
    }
    return It(o);
}
function bi(stackParser, e, n = "info", r, attachStacktrace) {
    const o = r?.syntheticException || undefined;
    const i = Wt(stackParser, e, o, attachStacktrace);
    i.level = n;
    if (r?.event_id) {
        i.event_id = r.event_id;
    }
    return It(i);
}
function ue(stackParser, e, n, attachStacktrace, s) {
    let o;
    if (fn(e) && e.error) {
        return At(stackParser, e.error);
    }
    if (me(e) || mr(e)) {
        const i = e;
        if ("stack" in e) {
            o = At(stackParser, e);
        } else {
            const a = i.name || (me(i) ? "DOMError" : "DOMException");
            const c = i.message ? `${a}: ${i.message}` : a;
            o = Wt(stackParser, c, n, attachStacktrace);
            Pt(o, c);
        }
        if ("code" in i) {
            o.tags = {
                ...o.tags,
                "DOMException.code": `${i.code}`
            };
        }
        return o;
    }
    if (Vt(e)) {
        return At(stackParser, e);
    }
    if (K(e) || Et(e)) {
        o = hi(stackParser, e, n, s);
        B(o, {
            synthetic: true
        });
        return o;
    }
    o = Wt(stackParser, e, n, attachStacktrace);
    Pt(o, `${e}`);
    B(o, {
        synthetic: true
    });
    return o;
}
function Wt(t, e, n, r) {
    const s = {};
    if (r && n) {
        const o = ce(t, n);
        if (o.length) {
            s.exception = {
                values: [
                    {
                        value: e,
                        stacktrace: {
                            frames: o
                        }
                    }
                ]
            };
        }
        B(s, {
            synthetic: true
        });
    }
    if (Jt(e)) {
        const { __sentry_template_string__, __sentry_template_values__ } = e;
        s.logentry = {
            message: __sentry_template_string__,
            params: __sentry_template_values__
        };
        return s;
    }
    s.message = e;
    return s;
}
function Ii(t, { isUnhandledRejection }) {
    const n = Tr(t);
    const r = isUnhandledRejection ? "promise rejection" : "exception";
    if (fn(t)) {
        return `Event \`ErrorEvent\` captured as ${r} with message \`${t.message}\``;
    }
    if (Et(t)) {
        return `Event \`${Ti(t)}\` (type=${t.type}) captured as ${r}`;
    }
    return `Object captured as ${r} with keys: ${n}`;
}
function Ti(t) {
    try {
        const e = Object.getPrototypeOf(t);
        if (e) {
            return e.constructor.name;
        }
        return undefined;
    } catch  {}
}
function vi(t) {
    for(const e in t){
        if (Object.prototype.hasOwnProperty.call(t, e)) {
            const n = t[e];
            if (n instanceof Error) {
                return n;
            }
        }
    }
}
const wi = 5000;
class Ri extends po {
    constructor(e){
        const n = ki(e);
        const r = y.SENTRY_SDK_SOURCE || oi();
        xo(n, "browser", [
            "browser"
        ], r);
        if (n._metadata?.sdk) {
            n._metadata.sdk.settings = {
                infer_ip: n.sendDefaultPii ? "auto" : "never",
                ...n._metadata.sdk.settings
            };
        }
        super(n);
        const { sendDefaultPii, sendClientReports, enableLogs } = this._options;
        if (y.document && (sendClientReports || enableLogs)) {
            y.document.addEventListener("visibilitychange", ()=>{
                y.document.visibilityState === "hidden" && (sendClientReports && this._flushOutcomes(), enableLogs && Ot(this));
            });
        }
        if (enableLogs) {
            this.on("flush", ()=>{
                Ot(this);
            });
            this.on("afterCaptureLog", ()=>{
                if (this._logFlushIdleTimeout) {
                    clearTimeout(this._logFlushIdleTimeout);
                }
                this._logFlushIdleTimeout = setTimeout(()=>{
                    Ot(this);
                }, wi);
            });
        }
        if (sendDefaultPii) {
            this.on("beforeSendSession", No);
        }
    }
    eventFromException(e, n) {
        return Si(this._options.stackParser, e, n, this._options.attachStacktrace);
    }
    eventFromMessage(e, n = "info", r) {
        return bi(this._options.stackParser, e, n, r, this._options.attachStacktrace);
    }
    _prepareEvent(e, n, r, s) {
        e.platform = e.platform || "javascript";
        return super._prepareEvent(e, n, r, s);
    }
}
function ki(t) {
    return {
        release: typeof __SENTRY_RELEASE__ === "string" ? __SENTRY_RELEASE__ : y.SENTRY_RELEASE?.id,
        sendClientReports: true,
        parentSpanIsAlwaysRootSpan: true,
        ...t
    };
}
const Ni = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const b = g;
const xi = 1000;
let tn;
let qt;
let Yt;
function Oi(t) {
    U("dom", t);
    j("dom", Di);
}
function Di() {
    if (!b.document) {
        return;
    }
    const t = v.bind(null, "dom");
    const e = en(t, true);
    b.document.addEventListener("click", e, false);
    b.document.addEventListener("keypress", e, false);
    [
        "EventTarget",
        "Node"
    ].forEach((n)=>{
        const s = b[n]?.prototype;
        if (s?.hasOwnProperty?.("addEventListener")) {
            I(s, "addEventListener", (o)=>function(i, a, c) {
                    if (i === "click" || i == "keypress") {
                        try {
                            const u = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {};
                            const f = u[i] = u[i] || {
                                refCount: 0
                            };
                            if (!f.handler) {
                                const d = en(t);
                                f.handler = d;
                                o.call(this, i, d, c);
                            }
                            f.refCount++;
                        } catch  {}
                    }
                    return o.call(this, i, a, c);
                });
            I(s, "removeEventListener", (o)=>function(i, a, c) {
                    if (i === "click" || i == "keypress") {
                        try {
                            const u = this.__sentry_instrumentation_handlers__ || {};
                            const f = u[i];
                            f && (f.refCount--, f.refCount <= 0 && (o.call(this, i, f.handler, c), f.handler = undefined, delete u[i]), Object.keys(u).length === 0 && delete this.__sentry_instrumentation_handlers__);
                        } catch  {}
                    }
                    return o.call(this, i, a, c);
                });
        }
    });
}
function Ai(t) {
    if (t.type !== qt) {
        return false;
    }
    try {
        if (!t.target || t.target._sentryId !== Yt) {
            return false;
        }
    } catch  {}
    return true;
}
function Ci(type, e) {
    if (type !== "keypress") {
        return false;
    }
    if (e?.tagName) {
        return !(e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable);
    }
    return true;
}
function en(t, global = false) {
    return (n)=>{
        if (!n || n._sentryCaptured) {
            return;
        }
        const r = Pi(n);
        if (Ci(n.type, r)) {
            return;
        }
        $(n, "_sentryCaptured", true);
        if (r && !r._sentryId) {
            $(r, "_sentryId", T());
        }
        const s = n.type === "keypress" ? "input" : n.type;
        if (!Ai(n)) {
            t({
                event: n,
                name: s,
                global
            });
            qt = n.type;
            Yt = r ? r._sentryId : undefined;
        }
        clearTimeout(tn);
        tn = b.setTimeout(()=>{
            Yt = undefined;
            qt = undefined;
        }, xi);
    };
}
function Pi(t) {
    try {
        return t.target;
    } catch  {
        return null;
    }
}
let at;
function Xn(t) {
    const e = "history";
    U(e, t);
    j(e, Li);
}
function Li() {
    b.addEventListener("popstate", ()=>{
        const href = b.location.href;
        const n = at;
        at = href;
        if (n === href) {
            return;
        }
        v("history", {
            from: n,
            to: href
        });
    });
    if (!Zo()) {
        return;
    }
    function t(e) {
        return function(...n) {
            const r = n.length > 2 ? n[2] : undefined;
            if (r) {
                const s = at;
                const o = Mi(String(r));
                at = o;
                if (s === o) {
                    return e.apply(this, n);
                }
                v("history", {
                    from: s,
                    to: o
                });
            }
            return e.apply(this, n);
        };
    }
    I(b.history, "pushState", t);
    I(b.history, "replaceState", t);
}
function Mi(t) {
    try {
        return new URL(t, b.location.origin).toString();
    } catch  {
        return t;
    }
}
const lt = {};
function $i(t) {
    const e = lt[t];
    if (e) {
        return e;
    }
    let n = b[t];
    if (Bt(n)) {
        return lt[t] = n.bind(b);
    }
    const b_document = b.document;
    if (b_document && typeof b_document.createElement === "function") {
        try {
            const s = b_document.createElement("iframe");
            s.hidden = true;
            b_document.head.appendChild(s);
            const o = s.contentWindow;
            if (o?.[t]) {
                n = o[t];
            }
            b_document.head.removeChild(s);
        } catch (error) {
            if (Ni) {
                p.warn(`Could not create sandbox iframe for ${t} check, bailing to window.${t}: `, error);
            }
        }
    }
    return n && (lt[t] = n.bind(b));
}
function Fi(t) {
    lt[t] = undefined;
}
const z = "__sentry_xhr_v3__";
function Ui(t) {
    U("xhr", t);
    j("xhr", ji);
}
function ji() {
    if (!b.XMLHttpRequest) {
        return;
    }
    const XMLHttpRequest_prototype = XMLHttpRequest.prototype;
    XMLHttpRequest_prototype.open = new Proxy(XMLHttpRequest_prototype.open, {
        apply (e, n, r) {
            const virtualError = new Error;
            const startTimestamp = O() * 1000;
            const method = x(r[0]) ? r[0].toUpperCase() : undefined;
            const a = Bi(r[1]);
            if (!method || !a) {
                return e.apply(n, r);
            }
            n[z] = {
                method,
                url: a,
                request_headers: {}
            };
            if (method === "POST" && a.match(/sentry_key/)) {
                n.__sentry_own_request__ = true;
            }
            const c = ()=>{
                const u = n[z];
                if (u && n.readyState === 4) {
                    try {
                        u.status_code = n.status;
                    } catch  {}
                    const f = {
                        endTimestamp: O() * 1000,
                        startTimestamp,
                        xhr: n,
                        virtualError
                    };
                    v("xhr", f);
                }
            };
            if ("onreadystatechange" in n && typeof n.onreadystatechange === "function") {
                n.onreadystatechange = new Proxy(n.onreadystatechange, {
                    apply (u, f, d) {
                        c();
                        return u.apply(f, d);
                    }
                });
            } else {
                n.addEventListener("readystatechange", c);
            }
            n.setRequestHeader = new Proxy(n.setRequestHeader, {
                apply (u, f, d) {
                    const [h, l] = d;
                    const _ = f[z];
                    if (_ && x(h) && x(l)) {
                        _.request_headers[h.toLowerCase()] = l;
                    }
                    return u.apply(f, d);
                }
            });
            return e.apply(n, r);
        }
    });
    XMLHttpRequest_prototype.send = new Proxy(XMLHttpRequest_prototype.send, {
        apply (e, n, r) {
            const s = n[z];
            if (!s) {
                return e.apply(n, r);
            }
            if (r[0] !== undefined) {
                s.body = r[0];
            }
            const o = {
                startTimestamp: O() * 1000,
                xhr: n
            };
            v("xhr", o);
            return e.apply(n, r);
        }
    });
}
function Bi(t) {
    if (x(t)) {
        return t;
    }
    try {
        return t.toString();
    } catch  {}
}
function Hi(t, e = $i("fetch")) {
    let n = 0;
    let r = 0;
    async function s(o) {
        const length = o.body.length;
        n += length;
        r++;
        const a = {
            body: o.body,
            method: "POST",
            referrerPolicy: "strict-origin",
            headers: t.headers,
            keepalive: n <= 60000 && r < 15,
            ...t.fetchOptions
        };
        try {
            const c = await e(t.url, a);
            return {
                statusCode: c.status,
                headers: {
                    "x-sentry-rate-limits": c.headers.get("X-Sentry-Rate-Limits"),
                    "retry-after": c.headers.get("Retry-After")
                }
            };
        } catch (error) {
            Fi("fetch");
            throw error;
        } finally{
            n -= length;
            r--;
        }
    }
    return Un(t, s);
}
const Gi = 30;
const Wi = 50;
function zt(t, e, n, r) {
    const s = {
        filename: t,
        function: e === "<anonymous>" ? D : e,
        in_app: true
    };
    if (n !== undefined) {
        s.lineno = n;
    }
    if (r !== undefined) {
        s.colno = r;
    }
    return s;
}
const qi = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;
const Yi = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
const zi = /\((\S*)(?::(\d+))(?::(\d+))\)/;
const Ki = /at (.+?) ?\(data:(.+?),/;
const Xi = (t)=>{
    const e = t.match(Ki);
    if (e) {
        return {
            filename: `<data:${e[2]}>`,
            function: e[1]
        };
    }
    const n = qi.exec(t);
    if (n) {
        const [, s, o, i] = n;
        return zt(s, D, +o, +i);
    }
    const r = Yi.exec(t);
    if (r) {
        if (r[2] && r[2].indexOf("eval") === 0) {
            const a = zi.exec(r[2]);
            if (a) {
                r[2] = a[1];
                r[3] = a[2];
                r[4] = a[3];
            }
        }
        const [o, i] = Jn(r[1] || D, r[2]);
        return zt(i, o, r[3] ? +r[3] : undefined, r[4] ? +r[4] : undefined);
    }
};
const Vn = [
    Gi,
    Xi
];
const Vi = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
const Ji = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
const Zi = (t)=>{
    const e = Vi.exec(t);
    if (e) {
        if (e[3] && e[3].indexOf(" > eval") > -1) {
            const o = Ji.exec(e[3]);
            if (o) {
                e[1] = e[1] || "eval";
                e[3] = o[1];
                e[4] = o[2];
                e[5] = "";
            }
        }
        let r = e[3];
        let s = e[1] || D;
        [s, r] = Jn(s, r);
        return zt(r, s, e[4] ? +e[4] : undefined, e[5] ? +e[5] : undefined);
    }
};
const Qi = [
    Wi,
    Zi
];
const ta = [
    Vn,
    Qi
];
const ea = an(...ta);
const Jn = (t, e)=>{
    const n = t.indexOf("safari-extension") !== -1;
    const r = t.indexOf("safari-web-extension") !== -1;
    if (n || r) {
        return [
            t.indexOf("@") !== -1 ? t.split("@")[0] : D,
            n ? `safari-extension:${e}` : `safari-web-extension:${e}`
        ];
    }
    return [
        t,
        e
    ];
};
const Tt = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const ct = 1024;
const na = "Breadcrumbs";
const ra = (t = {})=>{
    const e = {
        console: true,
        dom: true,
        fetch: true,
        history: true,
        sentry: true,
        xhr: true,
        ...t
    };
    return {
        name: na,
        setup (n) {
            if (e.console) {
                Wo(aa(n));
            }
            if (e.dom) {
                Oi(ia(n, e.dom));
            }
            if (e.xhr) {
                Ui(ca(n));
            }
            if (e.fetch) {
                ei(ua(n));
            }
            if (e.history) {
                Xn(fa(n));
            }
            if (e.sentry) {
                n.on("beforeSendEvent", oa(n));
            }
        }
    };
};
const sa = ra;
function oa(t) {
    return (n)=>{
        if (E() === t) {
            F({
                category: `sentry.${n.type === "transaction" ? "transaction" : "event"}`,
                event_id: n.event_id,
                level: n.level,
                message: L(n)
            }, {
                event: n
            });
        }
    };
}
function ia(t, dom) {
    return (r)=>{
        if (E() !== t) {
            return;
        }
        let s;
        let o;
        let keyAttrs = typeof dom === "object" ? dom.serializeAttribute : undefined;
        let maxStringLength = typeof dom === "object" && typeof dom.maxStringLength === "number" ? dom.maxStringLength : undefined;
        if (maxStringLength && maxStringLength > ct) {
            if (Tt) {
                p.warn(`\`dom.maxStringLength\` cannot exceed ${ct}, but a value of ${maxStringLength} was configured. Sentry will use ${ct} instead.`);
            }
            maxStringLength = ct;
        }
        if (typeof keyAttrs === "string") {
            keyAttrs = [
                keyAttrs
            ];
        }
        try {
            const u = r.event;
            const f = da(u) ? u.target : u;
            s = ln(f, {
                keyAttrs,
                maxStringLength
            });
            o = Ir(f);
        } catch  {
            s = "<unknown>";
        }
        if (s.length === 0) {
            return;
        }
        const c = {
            category: `ui.${r.name}`,
            message: s
        };
        if (o) {
            c.data = {
                "ui.component_name": o
            };
        }
        F(c, {
            event: r.event,
            name: r.name,
            global: r.global
        });
    };
}
function aa(t) {
    return (n)=>{
        if (E() !== t) {
            return;
        }
        const r = {
            category: "console",
            data: {
                arguments: n.args,
                logger: "console"
            },
            level: Yo(n.level),
            message: ge(n.args, " ")
        };
        if (n.level === "assert") {
            if (n.args[0] === false) {
                r.message = `Assertion failed: ${ge(n.args.slice(1), " ") || "console.assert"}`;
                r.data.arguments = n.args.slice(1);
            } else {
                return;
            }
        }
        F(r, {
            input: n.args,
            level: n.level
        });
    };
}
function ca(t) {
    return (n)=>{
        if (E() !== t) {
            return;
        }
        const { startTimestamp, endTimestamp } = n;
        const o = n.xhr[z];
        if (!startTimestamp || !endTimestamp || !o) {
            return;
        }
        const { method, url, status_code, body } = o;
        const f = {
            method,
            url,
            status_code
        };
        const d = {
            xhr: n.xhr,
            input: body,
            startTimestamp,
            endTimestamp
        };
        const h = {
            category: "xhr",
            data: f,
            type: "http",
            level: qn(status_code)
        };
        t.emit("beforeOutgoingRequestBreadcrumb", h, d);
        F(h, d);
    };
}
function ua(t) {
    return (n)=>{
        if (E() !== t) {
            return;
        }
        const { startTimestamp, endTimestamp } = n;
        if (endTimestamp && !(n.fetchData.url.match(/sentry_key/) && n.fetchData.method === "POST")) {
            n.fetchData.method;
            n.fetchData.url;
            if (n.error) {
                const o = n.fetchData;
                const i = {
                    data: n.error,
                    input: n.args,
                    startTimestamp,
                    endTimestamp
                };
                const a = {
                    category: "fetch",
                    data: o,
                    level: "error",
                    type: "http"
                };
                t.emit("beforeOutgoingRequestBreadcrumb", a, i);
                F(a, i);
            } else {
                const o = n.response;
                const i = {
                    ...n.fetchData,
                    status_code: o?.status
                };
                n.fetchData.request_body_size;
                n.fetchData.response_body_size;
                o?.status;
                const a = {
                    input: n.args,
                    response: o,
                    startTimestamp,
                    endTimestamp
                };
                const c = {
                    category: "fetch",
                    data: i,
                    type: "http",
                    level: qn(i.status_code)
                };
                t.emit("beforeOutgoingRequestBreadcrumb", c, a);
                F(c, a);
            }
        }
    };
}
function fa(t) {
    return (n)=>{
        if (E() !== t) {
            return;
        }
        let n_from = n.from;
        let s = n.to;
        const o = Dt(y.location.href);
        let i = n_from ? Dt(n_from) : undefined;
        const a = Dt(s);
        if (!i?.path) {
            i = o;
        }
        if (o.protocol === a.protocol && o.host === a.host) {
            s = a.relative;
        }
        if (o.protocol === i.protocol && o.host === i.host) {
            n_from = i.relative;
        }
        F({
            category: "navigation",
            data: {
                from: n_from,
                to: s
            }
        });
    };
}
function da(t) {
    return !!t && !!t.target;
}
const la = [
    "EventTarget",
    "Window",
    "Node",
    "ApplicationCache",
    "AudioTrackList",
    "BroadcastChannel",
    "ChannelMergerNode",
    "CryptoOperation",
    "EventSource",
    "FileReader",
    "HTMLUnknownElement",
    "IDBDatabase",
    "IDBRequest",
    "IDBTransaction",
    "KeyOperation",
    "MediaController",
    "MessagePort",
    "ModalWindow",
    "Notification",
    "SVGElementInstance",
    "Screen",
    "SharedWorker",
    "TextTrack",
    "TextTrackCue",
    "TextTrackList",
    "WebSocket",
    "WebSocketWorker",
    "Worker",
    "XMLHttpRequest",
    "XMLHttpRequestEventTarget",
    "XMLHttpRequestUpload"
];
const pa = "BrowserApiErrors";
const ha = (t = {})=>{
    const e = {
        XMLHttpRequest: true,
        eventTarget: true,
        requestAnimationFrame: true,
        setInterval: true,
        setTimeout: true,
        unregisterOriginalCallbacks: false,
        ...t
    };
    return {
        name: pa,
        setupOnce () {
            if (e.setTimeout) {
                I(y, "setTimeout", nn);
            }
            if (e.setInterval) {
                I(y, "setInterval", nn);
            }
            if (e.requestAnimationFrame) {
                I(y, "requestAnimationFrame", ga);
            }
            if (e.XMLHttpRequest && "XMLHttpRequest" in y) {
                I(XMLHttpRequest.prototype, "send", _a);
            }
            const e_eventTarget = e.eventTarget;
            if (e_eventTarget) {
                (Array.isArray(e_eventTarget) ? e_eventTarget : la).forEach((s)=>ya(s, e));
            }
        }
    };
};
const ma = ha;
function nn(t) {
    return function(...e) {
        const n = e[0];
        e[0] = W(n, {
            mechanism: {
                handled: false,
                type: `auto.browser.browserapierrors.${A(t)}`
            }
        });
        return t.apply(this, e);
    };
}
function ga(t) {
    return function(e) {
        return t.apply(this, [
            W(e, {
                mechanism: {
                    data: {
                        handler: A(t)
                    },
                    handled: false,
                    type: "auto.browser.browserapierrors.requestAnimationFrame"
                }
            })
        ]);
    };
}
function _a(t) {
    return function(...e) {
        const n = this;
        [
            "onload",
            "onerror",
            "onprogress",
            "onreadystatechange"
        ].forEach((s)=>{
            if (s in n && typeof n[s] === "function") {
                I(n, s, (o)=>{
                    const i = {
                        mechanism: {
                            data: {
                                handler: A(o)
                            },
                            handled: false,
                            type: `auto.browser.browserapierrors.xhr.${s}`
                        }
                    };
                    const a = ee(o);
                    if (a) {
                        i.mechanism.data.handler = A(a);
                    }
                    return W(o, i);
                });
            }
        });
        return t.apply(this, e);
    };
}
function ya(target, e) {
    const r = y[target]?.prototype;
    if (r?.hasOwnProperty?.("addEventListener")) {
        I(r, "addEventListener", (s)=>function(o, i, a) {
                try {
                    if (Ea(i)) {
                        i.handleEvent = W(i.handleEvent, {
                            mechanism: {
                                data: {
                                    handler: A(i),
                                    target
                                },
                                handled: false,
                                type: "auto.browser.browserapierrors.handleEvent"
                            }
                        });
                    }
                } catch  {}
                if (e.unregisterOriginalCallbacks) {
                    Sa(this, o, i);
                }
                return s.apply(this, [
                    o,
                    W(i, {
                        mechanism: {
                            data: {
                                handler: A(i),
                                target
                            },
                            handled: false,
                            type: "auto.browser.browserapierrors.addEventListener"
                        }
                    }),
                    a
                ]);
            });
        I(r, "removeEventListener", (s)=>function(o, i, a) {
                try {
                    const c = i.__sentry_wrapped__;
                    if (c) {
                        s.call(this, o, c, a);
                    }
                } catch  {}
                return s.call(this, o, i, a);
            });
    }
}
function Ea(t) {
    return typeof t.handleEvent === "function";
}
function Sa(t, e, n) {
    if (t && typeof t === "object" && "removeEventListener" in t && typeof t.removeEventListener === "function") {
        t.removeEventListener(e, n);
    }
}
const ba = ()=>({
        name: "BrowserSession",
        setupOnce () {
            if (typeof y.document === "undefined") {
                if (Tt) {
                    p.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
                }
                return;
            }
            $e({
                ignoreDuration: true
            });
            Fe();
            Xn(({ from, to })=>{
                if (from !== undefined && from !== to) {
                    $e({
                        ignoreDuration: true
                    });
                    Fe();
                }
            });
        }
    });
const Ia = "GlobalHandlers";
const Ta = (t = {})=>{
    const e = {
        onerror: true,
        onunhandledrejection: true,
        ...t
    };
    return {
        name: Ia,
        setupOnce () {
            Error.stackTraceLimit = 50;
        },
        setup (n) {
            if (e.onerror) {
                va(n);
                rn("onerror");
            }
            if (e.onunhandledrejection) {
                wa(n);
                rn("onunhandledrejection");
            }
        }
    };
};
const Zn = Ta;
function va(t) {
    dr((e)=>{
        const { stackParser, attachStacktrace } = Qn();
        if (E() !== t || zn()) {
            return;
        }
        const { msg, url, line, column, error } = e;
        const u = Na(ue(stackParser, error || msg, undefined, attachStacktrace, false), url, line, column);
        u.level = "error";
        xn(u, {
            originalException: error,
            mechanism: {
                handled: false,
                type: "auto.browser.global_handlers.onerror"
            }
        });
    });
}
function wa(t) {
    pr((e)=>{
        const { stackParser, attachStacktrace } = Qn();
        if (E() !== t || zn()) {
            return;
        }
        const s = Ra(e);
        const o = Zt(s) ? ka(s) : ue(stackParser, s, undefined, attachStacktrace, true);
        o.level = "error";
        xn(o, {
            originalException: s,
            mechanism: {
                handled: false,
                type: "auto.browser.global_handlers.onunhandledrejection"
            }
        });
    });
}
function Ra(t) {
    if (Zt(t)) {
        return t;
    }
    try {
        if ("reason" in t) {
            return t.reason;
        }
        if ("detail" in t && "reason" in t.detail) {
            return t.detail.reason;
        }
    } catch  {}
    return t;
}
function ka(t) {
    return {
        exception: {
            values: [
                {
                    type: "UnhandledRejection",
                    value: `Non-Error promise rejection captured with value: ${String(t)}`
                }
            ]
        }
    };
}
function Na(t, url, line, column) {
    const s = t.exception = t.exception || {};
    const o = s.values = s.values || [];
    const i = o[0] = o[0] || {};
    const a = i.stacktrace = i.stacktrace || {};
    const c = a.frames = a.frames || [];
    const colno = column;
    const lineno = line;
    const d = xa(url) ?? te();
    if (c.length === 0) {
        c.push({
            colno,
            filename: d,
            function: D,
            in_app: true,
            lineno
        });
    }
    return t;
}
function rn(t) {
    if (Tt) {
        p.log(`Global Handler attached: ${t}`);
    }
}
function Qn() {
    return E()?.getOptions() || {
        stackParser: ()=>[],
        attachStacktrace: false
    };
}
function xa(url) {
    if (!(!x(url) || url.length === 0)) {
        if (url.startsWith("data:")) {
            const e = url.match(/^data:([^;]+)/);
            const n = e ? e[1] : "text/javascript";
            const r = url.includes("base64,");
            return `<data:${n}${r ? ",base64" : ""}>`;
        }
        return url.slice(0, 1024);
    }
}
const Oa = ()=>({
        name: "HttpContext",
        preprocessEvent (t) {
            if (!y.navigator && !y.location && !y.document) {
                return;
            }
            const e = pi();
            const n = {
                ...e.headers,
                ...t.request?.headers
            };
            t.request = {
                ...e,
                ...t.request,
                headers: n
            };
        }
    });
const Da = "cause";
const Aa = 5;
const Ca = "LinkedErrors";
const Pa = (t = {})=>{
    const e = t.limit || Aa;
    const n = t.key || Da;
    return {
        name: Ca,
        preprocessEvent (r, s, o) {
            const i = o.getOptions();
            Go(ae, i.stackParser, n, e, r, s);
        }
    };
};
const tr = Pa;
function La() {
    if (Ma()) {
        if (Tt) {
            q(()=>{
                console.error("[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/");
            });
        }
        return true;
    }
    return false;
}
function Ma() {
    if (typeof y.window === "undefined") {
        return false;
    }
    const t = y;
    if (t.nw || !(t.chrome || t.browser)?.runtime?.id) {
        return false;
    }
    const n = te();
    const r = [
        "chrome-extension",
        "moz-extension",
        "ms-browser-extension",
        "safari-web-extension"
    ];
    return !(y === y.top && r.some((o)=>n.startsWith(`${o}://`)));
}
function er(t) {
    return [
        Lo(),
        jn(),
        ma(),
        sa(),
        Zn(),
        tr(),
        Hn(),
        Oa(),
        ba()
    ];
}
function $a(t = {}) {
    const e = !t.skipBrowserExtensionCheck && La();
    const n = {
        ...t,
        enabled: e ? false : t.enabled,
        stackParser: fr(t.stackParser || ea),
        integrations: ao({
            integrations: t.integrations,
            defaultIntegrations: t.defaultIntegrations ?? er()
        }),
        transport: t.transport || Hi
    };
    return Eo(Ri, n);
}
function Ct() {
    const t = re().getScopeData();
    const e = P().getScopeData();
    const n = w().getScopeData();
    mt(t, e);
    mt(t, n);
    t.eventProcessors = [];
    return t;
}
function Fa(t) {
    P().addScopeListener((e)=>{
        const n = Ct();
        t(n, e);
    });
    w().addScopeListener((e)=>{
        const n = Ct();
        t(n, e);
    });
    re().addScopeListener((e)=>{
        const n = Ct();
        t(n, e);
    });
}
const Ua = ()=>({
        name: "ScopeToMain",
        setup (t) {
            const e = Yn(t);
            Fa((n, r)=>{
                e.sendScope(JSON.stringify(R(n, 20, 2000)));
                r.clearBreadcrumbs();
                r.clearAttachments();
            });
        }
    });
function ja(t) {
    let e;
    return Un(t, async (n)=>{
        if (!e) {
            e = Yn();
        }
        e.sendEnvelope(n.body);
        return {
            statusCode: 200
        };
    });
}
const Ba = 50;
const [, Ha] = Vn;
const [, Ga] = ci();
const Wa = (t, e = 0)=>{
    const n = [];
    for (const r of t.split(`
`).slice(e)){
        const s = Ha(r);
        const o = Ga(r);
        if (s && o?.in_app !== false) {
            n.push(s);
        } else if (o) {
            o.module === undefined && delete o.module;
            n.push(o);
        }
        if (n.length >= Ba) {
            break;
        }
    }
    return cn(n);
};
function qa(t) {
    return [
        ...er().filter((e)=>e.name !== "BrowserSession"),
        Ua()
    ];
}
function Ya(t = {}, e = $a) {
    if (window?.__SENTRY__RENDERER_INIT__) {
        p.warn(`The browser SDK has already been initialized.
If init has been called in the preload and contextIsolation is disabled, is not required to call init in the renderer`);
        return;
    }
    window.__SENTRY__RENDERER_INIT__ = true;
    t.sendClientReports = false;
    if (t.defaultIntegrations === undefined) {
        t.defaultIntegrations = qa();
    }
    if (t.stackParser === undefined) {
        t.stackParser = Wa;
    }
    if (t.ipcNamespace === undefined) {
        t.ipcNamespace = "sentry-ipc";
    }
    if (t.dsn === undefined) {
        t.dsn = "https://12345@dummy.dsn/12345";
    }
    if (t.transport === undefined) {
        t.transport = ja;
    }
    delete t.initialScope;
    e(t);
}
export function initSandSentrySdk() {
    Ya({
        dsn,
        defaultIntegrations: false,
        integrations: [
            Bn(),
            jn(),
            tr(),
            Hn(),
            Zn()
        ]
    });
    return {
        captureException,
        captureMessage,
        setTag,
        withScope: withScope_1
    };
}
