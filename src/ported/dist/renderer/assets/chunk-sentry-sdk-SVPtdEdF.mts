declare var CustomEvent: any;
declare var EdgeRuntime: any;
declare var Element: any;
declare var Event: any;
declare var HTMLElement: any;
declare var Headers: any;
declare var Request: any;
declare var Response: any;
declare var TextEncoder: any;
declare var URL: any;
declare var URLSearchParams: any;
declare var WebAssembly: any;
declare var XMLHttpRequest: any;
declare var __SENTRY_DEBUG__: any;
declare var __SENTRY_RELEASE__: any;
declare var __SENTRY_TRACING__: any;
declare var clearTimeout: any;
declare var console: any;
declare var document: any;
declare var fetch: any;
declare var global: any;
declare var key: any;
declare var self: any;
declare var setTimeout: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "0ad0ec86-5d98-4417-8e9d-88b601d5cbf3", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-0ad0ec86-5d98-4417-8e9d-88b601d5cbf3");
  } catch (e: any) {}
} as any)();
import { kH as nr } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./index.eager-vendor-Qbf9YA6n.js";
const m: any = (typeof __SENTRY_DEBUG__ as any) > ("u" as any) || __SENTRY_DEBUG__,
  g: any = globalThis,
  M: string = "10.17.0";
function _t(this: any): any {
  return (yt as any)(g), g;
}
function yt(this: any, t: any): any {
  const e: any = (t as any).__SENTRY__ = (t as any).__SENTRY__ || {};
  return (e as any).version = (e as any).version || M, (e as any)[M] = (e as any)[M] || {};
}
function J(this: any, t: any, e: any, n: any = g): any {
  const r: any = (n as any).__SENTRY__ = (n as any).__SENTRY__ || {},
    s: any = (r as any)[M] = (r as any)[M] || {};
  return (s as any)[t] || ((s as any)[t] = (e as any)());
}
const rr: any = ["debug", "info", "warn", "error", "log", "assert", "trace"],
  sr: string = "Sentry Logger ",
  pt: any = {};
function q(this: any, t: any): any {
  if (!("console" in g)) return (t as any)();
  const e: any = (g as any).console,
    n: any = {},
    r: any = ((Object as any).keys as any)(pt);
  ((r as any).forEach as any)((s: any): any => {
    const o: any = (pt as any)[s];
    (n as any)[s] = (e as any)[s], (e as any)[s] = o;
  });
  try {
    return (t as any)();
  } finally {
    ((r as any).forEach as any)((s: any): any => {
      (e as any)[s] = (n as any)[s];
    });
  }
}
function or(this: any): any {
  ((Xt as any)() as any).enabled = !0;
}
function ir(this: any): any {
  ((Xt as any)() as any).enabled = !1;
}
function sn(this: any): any {
  return ((Xt as any)() as any).enabled;
}
function ar(this: any, ...t: any): any {
  (Kt as any)("log", ...t);
}
function cr(this: any, ...t: any): any {
  (Kt as any)("warn", ...t);
}
function ur(this: any, ...t: any): any {
  (Kt as any)("error", ...t);
}
function Kt(this: any, t: any, ...e: any): any {
  m && (sn as any)() && (q as any)((): any => {
    (((g as any).console as any)[t] as any)(`${sr}[${t}]:`, ...e);
  });
}
function Xt(this: any): any {
  return m ? (J as any)("loggerSettings", (): any => ({
    enabled: !1
  })) : {
    enabled: !1
  };
}
const p: any = {
    enable: or,
    disable: ir,
    isEnabled: sn,
    log: ar,
    warn: cr,
    error: ur
  },
  on: number = 50,
  D: string = "?",
  de: any = /\(error: (.*)\)/,
  le: any = /captureMessage|captureException/;
function an(this: any, ...t: any): any {
  const e: any = ((((t as any).sort as any)((n: any, r: any): any => ((n as any)[0] as any) - ((r as any)[0] as any)) as any).map as any)((n: any): any => (n as any)[1]);
  return (n: any, r: any = 0, s: any = 0): any => {
    const o: any = [],
      i: any = ((n as any).split as any)(`
`);
    for (let a: any = r; (a as any) < ((i as any).length as any); a++) {
      let c: any = (i as any)[a];
      ((c as any).length as any) > (1024 as any) && (c = ((c as any).slice as any)(0, 1024));
      const u: any = ((de as any).test as any)(c) ? ((c as any).replace as any)(de, "$1") : c;
      if (!((u as any).match as any)(/\S*Error: /)) {
        for (const f of e) {
          const d: any = (f as any)(u);
          if (d) {
            ((o as any).push as any)(d);
            break;
          }
        }
        if (((o as any).length as any) >= ((on as any) + (s as any) as any)) break;
      }
    }
    return (cn as any)(((o as any).slice as any)(s));
  };
}
function fr(this: any, t: any): any {
  return ((Array as any).isArray as any)(t) ? (an as any)(...t) : t;
}
function cn(this: any, t: any): any {
  if (!(t as any).length) return [];
  const e: any = ((Array as any).from as any)(t);
  return ((/sentryWrapped/ as any).test as any)(((nt as any)(e) as any).function || "") && ((e as any).pop as any)(), ((e as any).reverse as any)(), ((le as any).test as any)(((nt as any)(e) as any).function || "") && (((e as any).pop as any)(), ((le as any).test as any)(((nt as any)(e) as any).function || "") && ((e as any).pop as any)()), ((((e as any).slice as any)(0, on) as any).map as any)((n: any): any => ({
    ...n,
    filename: (n as any).filename || ((nt as any)(e) as any).filename,
    function: (n as any).function || D
  }));
}
function nt(this: any, t: any): any {
  return (t as any)[((t as any).length as any) - (1 as any)] || {};
}
const wt: string = "<anonymous>";
function A(this: any, t: any): any {
  try {
    return !t || (typeof t as any) != ("function" as any) ? wt : (t as any).name || wt;
  } catch {
    return wt;
  }
}
function pe(this: any, t: any): any {
  const e: any = (t as any).exception;
  if (e) {
    const n: any = [];
    try {
      return (((e as any).values as any).forEach as any)((r: any): any => {
        ((r as any).stacktrace as any).frames && ((n as any).push as any)(...((r as any).stacktrace as any).frames);
      }), n;
    } catch {
      return;
    }
  }
}
const ut: any = {},
  he: any = {};
function U(this: any, t: any, e: any): any {
  (ut as any)[t] = (ut as any)[t] || [], (((ut as any)[t] as any).push as any)(e);
}
function j(this: any, t: any, e: any): any {
  if (!(he as any)[t]) {
    (he as any)[t] = !0;
    try {
      (e as any)();
    } catch (n: any) {
      m && ((p as any).error as any)(`Error while instrumenting ${t}`, n);
    }
  }
}
function v(this: any, t: any, e: any): any {
  const n: any = t && (ut as any)[t];
  if (n) for (const r of n) try {
    (r as any)(e);
  } catch (s: any) {
    m && ((p as any).error as any)(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${(A as any)(r)}
Error:`, s);
  }
}
let Rt: any = null;
function dr(this: any, t: any): any {
  const e: string = "error";
  (U as any)(e, t), (j as any)(e, lr);
}
function lr(this: any): any {
  Rt = (g as any).onerror, (g as any).onerror = function (this: any, t: any, e: any, n: any, r: any, s: any): any {
    return (v as any)("error", {
      column: r,
      error: s,
      line: n,
      msg: t,
      url: e
    }), Rt ? ((Rt as any).apply as any)(this, arguments) : !1;
  }, ((g as any).onerror as any).__SENTRY_INSTRUMENTED__ = !0;
}
let kt: any = null;
function pr(this: any, t: any): any {
  const e: string = "unhandledrejection";
  (U as any)(e, t), (j as any)(e, hr);
}
function hr(this: any): any {
  kt = (g as any).onunhandledrejection, (g as any).onunhandledrejection = function (this: any, t: any): any {
    return (v as any)("unhandledrejection", t), kt ? ((kt as any).apply as any)(this, arguments) : !0;
  }, ((g as any).onunhandledrejection as any).__SENTRY_INSTRUMENTED__ = !0;
}
const un: any = ((Object as any).prototype as any).toString;
function Vt(this: any, t: any): any {
  switch (((un as any).call as any)(t)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      return !0;
    default:
      return (C as any)(t, Error);
  }
}
function Y(this: any, t: any, e: any): any {
  return (((un as any).call as any)(t) as any) === (`[object ${e}]` as any);
}
function fn(this: any, t: any): any {
  return (Y as any)(t, "ErrorEvent");
}
function me(this: any, t: any): any {
  return (Y as any)(t, "DOMError");
}
function mr(this: any, t: any): any {
  return (Y as any)(t, "DOMException");
}
function x(this: any, t: any): any {
  return (Y as any)(t, "String");
}
function Jt(this: any, t: any): any {
  return (typeof t as any) == ("object" as any) && (t as any) !== (null as any) && "__sentry_template_string__" in t && "__sentry_template_values__" in t;
}
function Zt(this: any, t: any): any {
  return (t as any) === (null as any) || (Jt as any)(t) || (typeof t as any) != ("object" as any) && (typeof t as any) != ("function" as any);
}
function K(this: any, t: any): any {
  return (Y as any)(t, "Object");
}
function Et(this: any, t: any): any {
  return (typeof Event as any) < ("u" as any) && (C as any)(t, Event);
}
function gr(this: any, t: any): any {
  return (typeof Element as any) < ("u" as any) && (C as any)(t, Element);
}
function _r(this: any, t: any): any {
  return (Y as any)(t, "RegExp");
}
function Z(this: any, t: any): any {
  return !!(t?.then && (typeof (t as any).then as any) == ("function" as any));
}
function yr(this: any, t: any): any {
  return (K as any)(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t;
}
function C(this: any, t: any, e: any): any {
  try {
    return t instanceof e;
  } catch {
    return !1;
  }
}
function dn(this: any, t: any): any {
  return !!((typeof t as any) == ("object" as any) && (t as any) !== (null as any) && ((t as any).__isVue || (t as any)._isVue));
}
function Er(this: any, t: any): any {
  return (typeof Request as any) < ("u" as any) && (C as any)(t, Request);
}
const Qt: any = g,
  Sr: number = 80;
function ln(this: any, t: any, e: any = {}): any {
  if (!t) return "<unknown>";
  try {
    let n: any = t;
    const r: number = 5,
      s: any = [];
    let o: any = 0,
      i: any = 0;
    const a: string = " > ",
      c: any = (a as any).length;
    let u: any;
    const f: any = ((Array as any).isArray as any)(e) ? e : (e as any).keyAttrs,
      d: any = !((Array as any).isArray as any)(e) && (e as any).maxStringLength || Sr;
    for (; n && (o++ as any) < (r as any) && (u = (br as any)(n, f), !((u as any) === ("html" as any) || (o as any) > (1 as any) && (((i as any) + (((s as any).length as any) * (c as any) as any) as any) + ((u as any).length as any) as any) >= (d as any)));) ((s as any).push as any)(u), i += (u as any).length, n = (n as any).parentNode;
    return ((((s as any).reverse as any)() as any).join as any)(a);
  } catch {
    return "<unknown>";
  }
}
function br(this: any, t: any, e: any): any {
  const n: any = t,
    r: any = [];
  if (!n?.tagName) return "";
  if ((Qt as any).HTMLElement && n instanceof HTMLElement && (n as any).dataset) {
    if (((n as any).dataset as any).sentryComponent) return ((n as any).dataset as any).sentryComponent;
    if (((n as any).dataset as any).sentryElement) return ((n as any).dataset as any).sentryElement;
  }
  ((r as any).push as any)((((n as any).tagName as any).toLowerCase as any)());
  const s: any = e?.length ? ((((e as any).filter as any)((i: any): any => ((n as any).getAttribute as any)(i)) as any).map as any)((i: any): any => [i, ((n as any).getAttribute as any)(i)]) : null;
  if (s?.length) ((s as any).forEach as any)((i: any): any => {
    ((r as any).push as any)(`[${(i as any)[0]}="${(i as any)[1]}"]`);
  });else {
    (n as any).id && ((r as any).push as any)(`#${(n as any).id}`);
    const i: any = (n as any).className;
    if (i && (x as any)(i)) {
      const a: any = ((i as any).split as any)(/\s+/);
      for (const c of a) ((r as any).push as any)(`.${c}`);
    }
  }
  const o: any = ["aria-label", "type", "name", "title", "alt"];
  for (const i of o) {
    const a: any = ((n as any).getAttribute as any)(i);
    a && ((r as any).push as any)(`[${i}="${a}"]`);
  }
  return ((r as any).join as any)("");
}
function te(this: any): any {
  try {
    return (((Qt as any).document as any).location as any).href;
  } catch {
    return "";
  }
}
function Ir(this: any, t: any): any {
  if (!(Qt as any).HTMLElement) return null;
  let e: any = t;
  const n: number = 5;
  for (let r: any = 0; (r as any) < (n as any); r++) {
    if (!e) return null;
    if (e instanceof HTMLElement) {
      if (((e as any).dataset as any).sentryComponent) return ((e as any).dataset as any).sentryComponent;
      if (((e as any).dataset as any).sentryElement) return ((e as any).dataset as any).sentryElement;
    }
    e = (e as any).parentNode;
  }
  return null;
}
function ht(this: any, t: any, e: any = 0): any {
  return (typeof t as any) != ("string" as any) || (e as any) === (0 as any) || ((t as any).length as any) <= (e as any) ? t : `${((t as any).slice as any)(0, e)}...`;
}
function ge(this: any, t: any, e: any): any {
  if (!((Array as any).isArray as any)(t)) return "";
  const n: any = [];
  for (let r: any = 0; (r as any) < ((t as any).length as any); r++) {
    const s: any = (t as any)[r];
    try {
      (dn as any)(s) ? ((n as any).push as any)("[VueViewModel]") : ((n as any).push as any)((String as any)(s));
    } catch {
      ((n as any).push as any)("[value cannot be serialized]");
    }
  }
  return ((n as any).join as any)(e);
}
function ft(this: any, t: any, e: any, n: any = !1): any {
  return (x as any)(t) ? (_r as any)(e) ? ((e as any).test as any)(t) : (x as any)(e) ? n ? (t as any) === (e as any) : ((t as any).includes as any)(e) : !1 : !1;
}
function St(this: any, t: any, e: any = [], n: any = !1): any {
  return ((e as any).some as any)((r: any): any => (ft as any)(t, r, n));
}
function I(this: any, t: any, e: any, n: any): any {
  if (!(e in t)) return;
  const r: any = (t as any)[e];
  if ((typeof r as any) != ("function" as any)) return;
  const s: any = (n as any)(r);
  (typeof s as any) == ("function" as any) && (pn as any)(s, r);
  try {
    (t as any)[e] = s;
  } catch {
    m && ((p as any).log as any)(`Failed to replace method "${e}" in object`, t);
  }
}
function $(this: any, t: any, e: any, n: any): any {
  try {
    ((Object as any).defineProperty as any)(t, e, {
      value: n,
      writable: !0,
      configurable: !0
    });
  } catch {
    m && ((p as any).log as any)(`Failed to add non-enumerable property "${e}" to object`, t);
  }
}
function pn(this: any, t: any, e: any): any {
  try {
    const n: any = (e as any).prototype || {};
    (t as any).prototype = (e as any).prototype = n, ($ as any)(t, "__sentry_original__", e);
  } catch {}
}
function ee(this: any, t: any): any {
  return (t as any).__sentry_original__;
}
function hn(this: any, t: any): any {
  if ((Vt as any)(t)) return {
    message: (t as any).message,
    name: (t as any).name,
    stack: (t as any).stack,
    ...(ye as any)(t)
  };
  if ((Et as any)(t)) {
    const e: any = {
      type: (t as any).type,
      target: (_e as any)((t as any).target),
      currentTarget: (_e as any)((t as any).currentTarget),
      ...(ye as any)(t)
    };
    return (typeof CustomEvent as any) < ("u" as any) && (C as any)(t, CustomEvent) && ((e as any).detail = (t as any).detail), e;
  } else return t;
}
function _e(this: any, t: any): any {
  try {
    return (gr as any)(t) ? (ln as any)(t) : ((((Object as any).prototype as any).toString as any).call as any)(t);
  } catch {
    return "<unknown>";
  }
}
function ye(this: any, t: any): any {
  if ((typeof t as any) == ("object" as any) && (t as any) !== (null as any)) {
    const e: any = {};
    for (const n in t) ((((Object as any).prototype as any).hasOwnProperty as any).call as any)(t, n) && ((e as any)[n] = (t as any)[n]);
    return e;
  } else return {};
}
function Tr(this: any, t: any, e: any = 40): any {
  const n: any = ((Object as any).keys as any)((hn as any)(t));
  ((n as any).sort as any)();
  const r: any = (n as any)[0];
  if (!r) return "[object has no keys]";
  if (((r as any).length as any) >= (e as any)) return (ht as any)(r, e);
  for (let s: any = (n as any).length; (s as any) > (0 as any); s--) {
    const o: any = ((((n as any).slice as any)(0, s) as any).join as any)(", ");
    if (!(((o as any).length as any) > (e as any))) return (s as any) === ((n as any).length as any) ? o : (ht as any)(o, e);
  }
  return "";
}
function vr(this: any): any {
  const t: any = g;
  return (t as any).crypto || (t as any).msCrypto;
}
function T(this: any, t: any = (vr as any)()): any {
  let e: any = (): any => (((Math as any).random as any)() as any) * (16 as any);
  try {
    if (t?.randomUUID) return ((((t as any).randomUUID as any)() as any).replace as any)(/-/g, "");
    t?.getRandomValues && (e = (): any => {
      const n: any = new (Uint8Array as any)(1);
      return ((t as any).getRandomValues as any)(n), (n as any)[0];
    });
  } catch {}
  return ((("10000000100040008000" as any) + (1e11 as any) as any).replace as any)(/[018]/g, (n: any): any => ((((n as any) ^ (((((e as any)() as any) & (15 as any)) as any) >> ((n as any) / (4 as any) as any) as any)) as any).toString as any)(16));
}
function mn(this: any, t: any): any {
  return (t as any).exception?.values?.[0];
}
function L(this: any, t: any): any {
  const {
    message: e,
    event_id: n
  }: any = t;
  if (e) return e;
  const r: any = (mn as any)(t);
  return r ? (r as any).type && (r as any).value ? `${(r as any).type}: ${(r as any).value}` : (r as any).type || (r as any).value || n || "<unknown>" : n || "<unknown>";
}
function Pt(this: any, t: any, e: any, n: any): any {
  const r: any = (t as any).exception = (t as any).exception || {},
    s: any = (r as any).values = (r as any).values || [],
    o: any = (s as any)[0] = (s as any)[0] || {};
  (o as any).value || ((o as any).value = e || ""), (o as any).type || ((o as any).type = "Error");
}
function B(this: any, t: any, e: any): any {
  const n: any = (mn as any)(t);
  if (!n) return;
  const r: any = {
      type: "generic",
      handled: !0
    },
    s: any = (n as any).mechanism;
  if ((n as any).mechanism = {
    ...r,
    ...s,
    ...e
  }, e && "data" in e) {
    const o: any = {
      ...s?.data,
      ...(e as any).data
    };
    ((n as any).mechanism as any).data = o;
  }
}
function Ee(this: any, t: any): any {
  if ((wr as any)(t)) return !0;
  try {
    ($ as any)(t, "__sentry_captured__", !0);
  } catch {}
  return !1;
}
function wr(this: any, t: any): any {
  try {
    return (t as any).__sentry_captured__;
  } catch {}
}
const gn: number = 1e3;
function Q(this: any): any {
  return (((Date as any).now as any)() as any) / (gn as any);
}
function Rr(this: any): any {
  const {
    performance: t
  }: any = g;
  if (!t?.now || !(t as any).timeOrigin) return Q;
  const e: any = (t as any).timeOrigin;
  return (): any => ((e as any) + (((t as any).now as any)() as any) as any) / (gn as any);
}
let Se: any;
function O(this: any): any {
  return ((Se ?? (Se = (Rr as any)())) as any)();
}
function kr(this: any, t: any): any {
  const e: any = (O as any)(),
    n: any = {
      sid: (T as any)(),
      init: !0,
      timestamp: e,
      started: e,
      duration: 0,
      status: "ok",
      errors: 0,
      ignoreDuration: !1,
      toJSON: (): any => (xr as any)(n)
    };
  return t && (H as any)(n, t), n;
}
function H(this: any, t: any, e: any = {}): any {
  if ((e as any).user && (!(t as any).ipAddress && ((e as any).user as any).ip_address && ((t as any).ipAddress = ((e as any).user as any).ip_address), !(t as any).did && !(e as any).did && ((t as any).did = ((e as any).user as any).id || ((e as any).user as any).email || ((e as any).user as any).username)), (t as any).timestamp = (e as any).timestamp || (O as any)(), (e as any).abnormal_mechanism && ((t as any).abnormal_mechanism = (e as any).abnormal_mechanism), (e as any).ignoreDuration && ((t as any).ignoreDuration = (e as any).ignoreDuration), (e as any).sid && ((t as any).sid = (((e as any).sid as any).length as any) === (32 as any) ? (e as any).sid : (T as any)()), ((e as any).init as any) !== (void 0 as any) && ((t as any).init = (e as any).init), !(t as any).did && (e as any).did && ((t as any).did = `${(e as any).did}`), (typeof (e as any).started as any) == ("number" as any) && ((t as any).started = (e as any).started), (t as any).ignoreDuration) (t as any).duration = void 0;else if ((typeof (e as any).duration as any) == ("number" as any)) (t as any).duration = (e as any).duration;else {
    const n: any = ((t as any).timestamp as any) - ((t as any).started as any);
    (t as any).duration = (n as any) >= (0 as any) ? n : 0;
  }
  (e as any).release && ((t as any).release = (e as any).release), (e as any).environment && ((t as any).environment = (e as any).environment), !(t as any).ipAddress && (e as any).ipAddress && ((t as any).ipAddress = (e as any).ipAddress), !(t as any).userAgent && (e as any).userAgent && ((t as any).userAgent = (e as any).userAgent), (typeof (e as any).errors as any) == ("number" as any) && ((t as any).errors = (e as any).errors), (e as any).status && ((t as any).status = (e as any).status);
}
function Nr(this: any, t: any, e: any): any {
  let n: any = {};
  ((t as any).status as any) === ("ok" as any) && (n = {
    status: "exited"
  }), (H as any)(t, n);
}
function xr(this: any, t: any): any {
  return {
    sid: `${(t as any).sid}`,
    init: (t as any).init,
    started: ((new (Date as any)(((t as any).started as any) * (1e3 as any)) as any).toISOString as any)(),
    timestamp: ((new (Date as any)(((t as any).timestamp as any) * (1e3 as any)) as any).toISOString as any)(),
    status: (t as any).status,
    errors: (t as any).errors,
    did: (typeof (t as any).did as any) == ("number" as any) || (typeof (t as any).did as any) == ("string" as any) ? `${(t as any).did}` : void 0,
    duration: (t as any).duration,
    abnormal_mechanism: (t as any).abnormal_mechanism,
    attrs: {
      release: (t as any).release,
      environment: (t as any).environment,
      ip_address: (t as any).ipAddress,
      user_agent: (t as any).userAgent
    }
  };
}
function tt(this: any, t: any, e: any, n: any = 2): any {
  if (!e || (typeof e as any) != ("object" as any) || (n as any) <= (0 as any)) return e;
  if (t && ((((Object as any).keys as any)(e) as any).length as any) === (0 as any)) return t;
  const r: any = {
    ...t
  };
  for (const s in e) ((((Object as any).prototype as any).hasOwnProperty as any).call as any)(e, s) && ((r as any)[s] = (tt as any)((r as any)[s], (e as any)[s], (n as any) - (1 as any)));
  return r;
}
function be(this: any): any {
  return (T as any)();
}
function _n(this: any): any {
  return (((T as any)() as any).substring as any)(16);
}
const Lt: string = "_sentrySpan";
function Ie(this: any, t: any, e: any): any {
  e ? ($ as any)(t, Lt, e) : delete (t as any)[Lt];
}
function Te(this: any, t: any): any {
  return (t as any)[Lt];
}
const Or: number = 100;
class k {
  declare _session: any;
  declare _transactionName: any;
  declare _level: any;
  declare _fingerprint: any;
  declare _lastEventId: any;
  declare _client: any;
  declare _propagationContext: any;
  declare _sdkProcessingMetadata: any;
  declare _contexts: any;
  declare _extra: any;
  declare _tags: any;
  declare _user: any;
  declare _attachments: any;
  declare _breadcrumbs: any;
  declare _eventProcessors: any;
  declare _scopeListeners: any;
  declare _notifyingListeners: any;
  [key: string]: any;
  constructor() {
    (this as any)._notifyingListeners = !1, (this as any)._scopeListeners = [], (this as any)._eventProcessors = [], (this as any)._breadcrumbs = [], (this as any)._attachments = [], (this as any)._user = {}, (this as any)._tags = {}, (this as any)._extra = {}, (this as any)._contexts = {}, (this as any)._sdkProcessingMetadata = {}, (this as any)._propagationContext = {
      traceId: (be as any)(),
      sampleRand: ((Math as any).random as any)()
    };
  }
  clone(): any {
    const e: any = new (k as any)();
    return (e as any)._breadcrumbs = [...(this as any)._breadcrumbs], (e as any)._tags = {
      ...(this as any)._tags
    }, (e as any)._extra = {
      ...(this as any)._extra
    }, (e as any)._contexts = {
      ...(this as any)._contexts
    }, ((this as any)._contexts as any).flags && (((e as any)._contexts as any).flags = {
      values: [...(((this as any)._contexts as any).flags as any).values]
    }), (e as any)._user = (this as any)._user, (e as any)._level = (this as any)._level, (e as any)._session = (this as any)._session, (e as any)._transactionName = (this as any)._transactionName, (e as any)._fingerprint = (this as any)._fingerprint, (e as any)._eventProcessors = [...(this as any)._eventProcessors], (e as any)._attachments = [...(this as any)._attachments], (e as any)._sdkProcessingMetadata = {
      ...(this as any)._sdkProcessingMetadata
    }, (e as any)._propagationContext = {
      ...(this as any)._propagationContext
    }, (e as any)._client = (this as any)._client, (e as any)._lastEventId = (this as any)._lastEventId, (Ie as any)(e, (Te as any)(this)), e;
  }
  setClient(e: any): any {
    (this as any)._client = e;
  }
  setLastEventId(e: any): any {
    (this as any)._lastEventId = e;
  }
  getClient(): any {
    return (this as any)._client;
  }
  lastEventId(): any {
    return (this as any)._lastEventId;
  }
  addScopeListener(e: any): any {
    (((this as any)._scopeListeners as any).push as any)(e);
  }
  addEventProcessor(e: any): any {
    return (((this as any)._eventProcessors as any).push as any)(e), this;
  }
  setUser(e: any): any {
    return (this as any)._user = e || {
      email: void 0,
      id: void 0,
      ip_address: void 0,
      username: void 0
    }, (this as any)._session && (H as any)((this as any)._session, {
      user: e
    }), ((this as any)._notifyScopeListeners as any)(), this;
  }
  getUser(): any {
    return (this as any)._user;
  }
  setTags(e: any): any {
    return (this as any)._tags = {
      ...(this as any)._tags,
      ...e
    }, ((this as any)._notifyScopeListeners as any)(), this;
  }
  setTag(e: any, n: any): any {
    return (this as any)._tags = {
      ...(this as any)._tags,
      [e]: n
    }, ((this as any)._notifyScopeListeners as any)(), this;
  }
  setExtras(e: any): any {
    return (this as any)._extra = {
      ...(this as any)._extra,
      ...e
    }, ((this as any)._notifyScopeListeners as any)(), this;
  }
  setExtra(e: any, n: any): any {
    return (this as any)._extra = {
      ...(this as any)._extra,
      [e]: n
    }, ((this as any)._notifyScopeListeners as any)(), this;
  }
  setFingerprint(e: any): any {
    return (this as any)._fingerprint = e, ((this as any)._notifyScopeListeners as any)(), this;
  }
  setLevel(e: any): any {
    return (this as any)._level = e, ((this as any)._notifyScopeListeners as any)(), this;
  }
  setTransactionName(e: any): any {
    return (this as any)._transactionName = e, ((this as any)._notifyScopeListeners as any)(), this;
  }
  setContext(e: any, n: any): any {
    return (n as any) === (null as any) ? delete ((this as any)._contexts as any)[e] : ((this as any)._contexts as any)[e] = n, ((this as any)._notifyScopeListeners as any)(), this;
  }
  setSession(e: any): any {
    return e ? (this as any)._session = e : delete (this as any)._session, ((this as any)._notifyScopeListeners as any)(), this;
  }
  getSession(): any {
    return (this as any)._session;
  }
  update(e: any): any {
    if (!e) return this;
    const n: any = (typeof e as any) == ("function" as any) ? (e as any)(this) : e,
      r: any = n instanceof k ? ((n as any).getScopeData as any)() : (K as any)(n) ? e : void 0,
      {
        tags: s,
        extra: o,
        user: i,
        contexts: a,
        level: c,
        fingerprint: u = [],
        propagationContext: f
      }: any = r || {};
    return (this as any)._tags = {
      ...(this as any)._tags,
      ...s
    }, (this as any)._extra = {
      ...(this as any)._extra,
      ...o
    }, (this as any)._contexts = {
      ...(this as any)._contexts,
      ...a
    }, i && (((Object as any).keys as any)(i) as any).length && ((this as any)._user = i), c && ((this as any)._level = c), (u as any).length && ((this as any)._fingerprint = u), f && ((this as any)._propagationContext = f), this;
  }
  clear(): any {
    return (this as any)._breadcrumbs = [], (this as any)._tags = {}, (this as any)._extra = {}, (this as any)._user = {}, (this as any)._contexts = {}, (this as any)._level = void 0, (this as any)._transactionName = void 0, (this as any)._fingerprint = void 0, (this as any)._session = void 0, (Ie as any)(this, void 0), (this as any)._attachments = [], ((this as any).setPropagationContext as any)({
      traceId: (be as any)(),
      sampleRand: ((Math as any).random as any)()
    }), ((this as any)._notifyScopeListeners as any)(), this;
  }
  addBreadcrumb(e: any, n: any): any {
    const r: any = (typeof n as any) == ("number" as any) ? n : Or;
    if ((r as any) <= (0 as any)) return this;
    const s: any = {
      timestamp: (Q as any)(),
      ...e,
      message: (e as any).message ? (ht as any)((e as any).message, 2048) : (e as any).message
    };
    return (((this as any)._breadcrumbs as any).push as any)(s), (((this as any)._breadcrumbs as any).length as any) > (r as any) && ((this as any)._breadcrumbs = (((this as any)._breadcrumbs as any).slice as any)(-r), (this as any)._client?.recordDroppedEvent("buffer_overflow", "log_item")), ((this as any)._notifyScopeListeners as any)(), this;
  }
  getLastBreadcrumb(): any {
    return ((this as any)._breadcrumbs as any)[(((this as any)._breadcrumbs as any).length as any) - (1 as any)];
  }
  clearBreadcrumbs(): any {
    return (this as any)._breadcrumbs = [], ((this as any)._notifyScopeListeners as any)(), this;
  }
  addAttachment(e: any): any {
    return (((this as any)._attachments as any).push as any)(e), this;
  }
  clearAttachments(): any {
    return (this as any)._attachments = [], this;
  }
  getScopeData(): any {
    return {
      breadcrumbs: (this as any)._breadcrumbs,
      attachments: (this as any)._attachments,
      contexts: (this as any)._contexts,
      tags: (this as any)._tags,
      extra: (this as any)._extra,
      user: (this as any)._user,
      level: (this as any)._level,
      fingerprint: (this as any)._fingerprint || [],
      eventProcessors: (this as any)._eventProcessors,
      propagationContext: (this as any)._propagationContext,
      sdkProcessingMetadata: (this as any)._sdkProcessingMetadata,
      transactionName: (this as any)._transactionName,
      span: (Te as any)(this)
    };
  }
  setSDKProcessingMetadata(e: any): any {
    return (this as any)._sdkProcessingMetadata = (tt as any)((this as any)._sdkProcessingMetadata, e, 2), this;
  }
  setPropagationContext(e: any): any {
    return (this as any)._propagationContext = e, this;
  }
  getPropagationContext(): any {
    return (this as any)._propagationContext;
  }
  captureException(e: any, n: any): any {
    const r: any = n?.event_id || (T as any)();
    if (!(this as any)._client) return m && ((p as any).warn as any)("No client configured on scope - will not capture exception!"), r;
    const s: any = new (Error as any)("Sentry syntheticException");
    return (((this as any)._client as any).captureException as any)(e, {
      originalException: e,
      syntheticException: s,
      ...n,
      event_id: r
    }, this), r;
  }
  captureMessage(e: any, n: any, r: any): any {
    const s: any = r?.event_id || (T as any)();
    if (!(this as any)._client) return m && ((p as any).warn as any)("No client configured on scope - will not capture message!"), s;
    const o: any = new (Error as any)(e);
    return (((this as any)._client as any).captureMessage as any)(e, n, {
      originalException: e,
      syntheticException: o,
      ...r,
      event_id: s
    }, this), s;
  }
  captureEvent(e: any, n: any): any {
    const r: any = n?.event_id || (T as any)();
    return (this as any)._client ? ((((this as any)._client as any).captureEvent as any)(e, {
      ...n,
      event_id: r
    }, this), r) : (m && ((p as any).warn as any)("No client configured on scope - will not capture event!"), r);
  }
  _notifyScopeListeners(): any {
    (this as any)._notifyingListeners || ((this as any)._notifyingListeners = !0, (((this as any)._scopeListeners as any).forEach as any)((e: any): any => {
      (e as any)(this);
    }), (this as any)._notifyingListeners = !1);
  }
}
function Dr(this: any): any {
  return (J as any)("defaultCurrentScope", (): any => new (k as any)());
}
function Ar(this: any): any {
  return (J as any)("defaultIsolationScope", (): any => new (k as any)());
}
class Cr {
  declare _isolationScope: any;
  declare _stack: any;
  [key: string]: any;
  constructor(e: any, n: any) {
    let r: any;
    e ? r = e : r = new (k as any)();
    let s: any;
    n ? s = n : s = new (k as any)(), (this as any)._stack = [{
      scope: r
    }], (this as any)._isolationScope = s;
  }
  withScope(e: any): any {
    const n: any = ((this as any)._pushScope as any)();
    let r: any;
    try {
      r = (e as any)(n);
    } catch (s: any) {
      throw ((this as any)._popScope as any)(), s;
    }
    return (Z as any)(r) ? ((r as any).then as any)((s: any): any => (((this as any)._popScope as any)(), s), (s: any): any => {
      throw ((this as any)._popScope as any)(), s;
    }) : (((this as any)._popScope as any)(), r);
  }
  getClient(): any {
    return (((this as any).getStackTop as any)() as any).client;
  }
  getScope(): any {
    return (((this as any).getStackTop as any)() as any).scope;
  }
  getIsolationScope(): any {
    return (this as any)._isolationScope;
  }
  getStackTop(): any {
    return ((this as any)._stack as any)[(((this as any)._stack as any).length as any) - (1 as any)];
  }
  _pushScope(): any {
    const e: any = ((((this as any).getScope as any)() as any).clone as any)();
    return (((this as any)._stack as any).push as any)({
      client: ((this as any).getClient as any)(),
      scope: e
    }), e;
  }
  _popScope(): any {
    return (((this as any)._stack as any).length as any) <= (1 as any) ? !1 : !!(((this as any)._stack as any).pop as any)();
  }
}
function G(this: any): any {
  const t: any = (_t as any)(),
    e: any = (yt as any)(t);
  return (e as any).stack = (e as any).stack || new (Cr as any)((Dr as any)(), (Ar as any)());
}
function Pr(this: any, t: any): any {
  return (((G as any)() as any).withScope as any)(t);
}
function Lr(this: any, t: any, e: any): any {
  const n: any = (G as any)();
  return ((n as any).withScope as any)((): any => ((((n as any).getStackTop as any)() as any).scope = t, (e as any)(t)));
}
function ve(this: any, t: any): any {
  return (((G as any)() as any).withScope as any)((): any => (t as any)((((G as any)() as any).getIsolationScope as any)()));
}
function Mr(this: any): any {
  return {
    withIsolationScope: ve,
    withScope: Pr,
    withSetScope: Lr,
    withSetIsolationScope: (t: any, e: any): any => (ve as any)(e),
    getCurrentScope: (): any => (((G as any)() as any).getScope as any)(),
    getIsolationScope: (): any => (((G as any)() as any).getIsolationScope as any)()
  };
}
function ne(this: any, t: any): any {
  const e: any = (yt as any)(t);
  return (e as any).acs ? (e as any).acs : (Mr as any)();
}
function w(this: any): any {
  const t: any = (_t as any)();
  return (((ne as any)(t) as any).getCurrentScope as any)();
}
function P(this: any): any {
  const t: any = (_t as any)();
  return (((ne as any)(t) as any).getIsolationScope as any)();
}
function re(this: any): any {
  return (J as any)("globalScope", (): any => new (k as any)());
}
function yn(this: any, ...t: any): any {
  const e: any = (_t as any)(),
    n: any = (ne as any)(e);
  if (((t as any).length as any) === (2 as any)) {
    const [r, s]: any = t;
    return r ? ((n as any).withSetScope as any)(r, s) : ((n as any).withScope as any)(s);
  }
  return ((n as any).withScope as any)((t as any)[0]);
}
function E(this: any): any {
  return (((w as any)() as any).getClient as any)();
}
function $r(this: any, t: any): any {
  const e: any = ((t as any).getPropagationContext as any)(),
    {
      traceId: n,
      parentSpanId: r,
      propagationSpanId: s
    }: any = e,
    o: any = {
      trace_id: n,
      span_id: s || (_n as any)()
    };
  return r && ((o as any).parent_span_id = r), o;
}
const Fr: string = "sentry.source",
  Ur: string = "sentry.sample_rate",
  jr: string = "sentry.previous_trace_sample_rate",
  Br: string = "sentry.op",
  Hr: string = "sentry.origin",
  En: string = "sentry.profile_id",
  Sn: string = "sentry.exclusive_time",
  Gr: number = 0,
  Wr: number = 1,
  qr: string = "_sentryScope",
  Yr: string = "_sentryIsolationScope";
function zr(this: any, t: any): any {
  if (t) {
    if ((typeof t as any) == ("object" as any) && "deref" in t && (typeof (t as any).deref as any) == ("function" as any)) try {
      return ((t as any).deref as any)();
    } catch {
      return;
    }
    return t;
  }
}
function bn(this: any, t: any): any {
  const e: any = t;
  return {
    scope: (e as any)[qr],
    isolationScope: (zr as any)((e as any)[Yr])
  };
}
const Kr: string = "sentry-",
  Xr: any = /^sentry-/;
function Vr(this: any, t: any): any {
  const e: any = (Jr as any)(t);
  if (!e) return;
  const n: any = ((((Object as any).entries as any)(e) as any).reduce as any)((r: any, [s, o]: any): any => {
    if (((s as any).match as any)(Xr)) {
      const i: any = ((s as any).slice as any)((Kr as any).length);
      (r as any)[i] = o;
    }
    return r;
  }, {});
  if (((((Object as any).keys as any)(n) as any).length as any) > (0 as any)) return n;
}
function Jr(this: any, t: any): any {
  if (!(!t || !(x as any)(t) && !((Array as any).isArray as any)(t))) return ((Array as any).isArray as any)(t) ? ((t as any).reduce as any)((e: any, n: any): any => {
    const r: any = (we as any)(n);
    return ((((Object as any).entries as any)(r) as any).forEach as any)(([s, o]: any): any => {
      (e as any)[s] = o;
    }), e;
  }, {}) : (we as any)(t);
}
function we(this: any, t: any): any {
  return ((((((t as any).split as any)(",") as any).map as any)((e: any): any => ((((e as any).split as any)("=") as any).map as any)((n: any): any => {
    try {
      return (decodeURIComponent as any)(((n as any).trim as any)());
    } catch {
      return;
    }
  })) as any).reduce as any)((e: any, [n, r]: any): any => (n && r && ((e as any)[n] = r), e), {});
}
const Zr: any = /^o(\d+)\./,
  Qr: any = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function ts(this: any, t: any): any {
  return (t as any) === ("http" as any) || (t as any) === ("https" as any);
}
function bt(this: any, t: any, e: any = !1): any {
  const {
    host: n,
    path: r,
    pass: s,
    port: o,
    projectId: i,
    protocol: a,
    publicKey: c
  }: any = t;
  return `${a}://${c}${e && s ? `:${s}` : ""}@${n}${o ? `:${o}` : ""}/${r && `${r}/`}${i}`;
}
function es(this: any, t: any): any {
  const e: any = ((Qr as any).exec as any)(t);
  if (!e) {
    (q as any)((): any => {
      ((console as any).error as any)(`Invalid Sentry Dsn: ${t}`);
    });
    return;
  }
  const [n, r, s = "", o = "", i = "", a = ""]: any = ((e as any).slice as any)(1);
  let c: any = "",
    u: any = a;
  const f: any = ((u as any).split as any)("/");
  if (((f as any).length as any) > (1 as any) && (c = ((((f as any).slice as any)(0, -1) as any).join as any)("/"), u = ((f as any).pop as any)()), u) {
    const d: any = ((u as any).match as any)(/^\d+/);
    d && (u = (d as any)[0]);
  }
  return (In as any)({
    host: o,
    pass: s,
    path: c,
    projectId: u,
    port: i,
    protocol: n,
    publicKey: r
  });
}
function In(this: any, t: any): any {
  return {
    protocol: (t as any).protocol,
    publicKey: (t as any).publicKey || "",
    pass: (t as any).pass || "",
    host: (t as any).host,
    port: (t as any).port || "",
    path: (t as any).path || "",
    projectId: (t as any).projectId
  };
}
function ns(this: any, t: any): any {
  if (!m) return !0;
  const {
    port: e,
    projectId: n,
    protocol: r
  }: any = t;
  return ((["protocol", "publicKey", "host", "projectId"] as any).find as any)((i: any): any => (t as any)[i] ? !1 : (((p as any).error as any)(`Invalid Sentry Dsn: ${i} missing`), !0)) ? !1 : ((n as any).match as any)(/^\d+$/) ? (ts as any)(r) ? e && (isNaN as any)((parseInt as any)(e, 10)) ? (((p as any).error as any)(`Invalid Sentry Dsn: Invalid port ${e}`), !1) : !0 : (((p as any).error as any)(`Invalid Sentry Dsn: Invalid protocol ${r}`), !1) : (((p as any).error as any)(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1);
}
function rs(this: any, t: any): any {
  return ((t as any).match as any)(Zr)?.[1];
}
function ss(this: any, t: any): any {
  const e: any = ((t as any).getOptions as any)(),
    {
      host: n
    }: any = ((t as any).getDsn as any)() || {};
  let r: any;
  return (e as any).orgId ? r = (String as any)((e as any).orgId) : n && (r = (rs as any)(n)), r;
}
function os(this: any, t: any): any {
  const e: any = (typeof t as any) == ("string" as any) ? (es as any)(t) : (In as any)(t);
  if (!(!e || !(ns as any)(e))) return e;
}
function is(this: any, t: any): any {
  if ((typeof t as any) == ("boolean" as any)) return (Number as any)(t);
  const e: any = (typeof t as any) == ("string" as any) ? (parseFloat as any)(t) : t;
  if (!((typeof e as any) != ("number" as any) || (isNaN as any)(e) || (e as any) < (0 as any) || (e as any) > (1 as any))) return e;
}
const Tn: number = 1;
let Re: any = !1;
function as(this: any, t: any): any {
  const {
      spanId: e,
      traceId: n,
      isRemote: r
    }: any = ((t as any).spanContext as any)(),
    s: any = r ? e : ((se as any)(t) as any).parent_span_id,
    o: any = ((bn as any)(t) as any).scope,
    i: any = r ? o?.getPropagationContext().propagationSpanId || (_n as any)() : e;
  return {
    parent_span_id: s,
    span_id: i,
    trace_id: n
  };
}
function cs(this: any, t: any): any {
  if (t && ((t as any).length as any) > (0 as any)) return ((t as any).map as any)(({
    context: {
      spanId: e,
      traceId: n,
      traceFlags: r,
      ...s
    },
    attributes: o
  }: any): any => ({
    span_id: e,
    trace_id: n,
    sampled: (r as any) === (Tn as any),
    attributes: o,
    ...s
  }));
}
function ke(this: any, t: any): any {
  return (typeof t as any) == ("number" as any) ? (Ne as any)(t) : ((Array as any).isArray as any)(t) ? ((t as any)[0] as any) + (((t as any)[1] as any) / (1e9 as any) as any) : t instanceof Date ? (Ne as any)(((t as any).getTime as any)()) : (O as any)();
}
function Ne(this: any, t: any): any {
  return (t as any) > (9999999999 as any) ? (t as any) / (1e3 as any) : t;
}
function se(this: any, t: any): any {
  if ((fs as any)(t)) return ((t as any).getSpanJSON as any)();
  const {
    spanId: e,
    traceId: n
  }: any = ((t as any).spanContext as any)();
  if ((us as any)(t)) {
    const {
        attributes: r,
        startTime: s,
        name: o,
        endTime: i,
        status: a,
        links: c
      }: any = t,
      u: any = "parentSpanId" in t ? (t as any).parentSpanId : "parentSpanContext" in t ? (t as any).parentSpanContext?.spanId : void 0;
    return {
      span_id: e,
      trace_id: n,
      data: r,
      description: o,
      parent_span_id: u,
      start_timestamp: (ke as any)(s),
      timestamp: (ke as any)(i) || void 0,
      status: (ls as any)(a),
      op: (r as any)[Br],
      origin: (r as any)[Hr],
      links: (cs as any)(c)
    };
  }
  return {
    span_id: e,
    trace_id: n,
    start_timestamp: 0,
    data: {}
  };
}
function us(this: any, t: any): any {
  const e: any = t;
  return !!(e as any).attributes && !!(e as any).startTime && !!(e as any).name && !!(e as any).endTime && !!(e as any).status;
}
function fs(this: any, t: any): any {
  return (typeof (t as any).getSpanJSON as any) == ("function" as any);
}
function ds(this: any, t: any): any {
  const {
    traceFlags: e
  }: any = ((t as any).spanContext as any)();
  return (e as any) === (Tn as any);
}
function ls(this: any, t: any): any {
  if (!(!t || ((t as any).code as any) === (Gr as any))) return ((t as any).code as any) === (Wr as any) ? "ok" : (t as any).message || "unknown_error";
}
const ps: string = "_sentryRootSpan";
function vn(this: any, t: any): any {
  return (t as any)[ps] || t;
}
function xe(this: any): any {
  Re || ((q as any)((): any => {
    ((console as any).warn as any)("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.");
  }), Re = !0);
}
function hs(this: any, t: any): any {
  if ((typeof __SENTRY_TRACING__ as any) == ("boolean" as any) && !__SENTRY_TRACING__) return !1;
  const e: any = (E as any)()?.getOptions();
  return !!e && (((e as any).tracesSampleRate as any) != (null as any) || !!(e as any).tracesSampler);
}
function Oe(this: any, t: any): any {
  ((p as any).log as any)(`Ignoring span ${(t as any).op} - ${(t as any).description} because it matches \`ignoreSpans\`.`);
}
function De(this: any, t: any, e: any): any {
  if (!e?.length || !(t as any).description) return !1;
  for (const n of e) {
    if ((gs as any)(n)) {
      if ((ft as any)((t as any).description, n)) return m && (Oe as any)(t), !0;
      continue;
    }
    if (!(n as any).name && !(n as any).op) continue;
    const r: any = (n as any).name ? (ft as any)((t as any).description, (n as any).name) : !0,
      s: any = (n as any).op ? (t as any).op && (ft as any)((t as any).op, (n as any).op) : !0;
    if (r && s) return m && (Oe as any)(t), !0;
  }
  return !1;
}
function ms(this: any, t: any, e: any): any {
  const n: any = (e as any).parent_span_id,
    r: any = (e as any).span_id;
  if (n) for (const s of t) ((s as any).parent_span_id as any) === (r as any) && ((s as any).parent_span_id = n);
}
function gs(this: any, t: any): any {
  return (typeof t as any) == ("string" as any) || t instanceof RegExp;
}
const oe: string = "production",
  _s: string = "_frozenDsc";
function wn(this: any, t: any, e: any): any {
  const n: any = ((e as any).getOptions as any)(),
    {
      publicKey: r
    }: any = ((e as any).getDsn as any)() || {},
    s: any = {
      environment: (n as any).environment || oe,
      release: (n as any).release,
      public_key: r,
      trace_id: t,
      org_id: (ss as any)(e)
    };
  return ((e as any).emit as any)("createDsc", s), s;
}
function ys(this: any, t: any, e: any): any {
  const n: any = ((e as any).getPropagationContext as any)();
  return (n as any).dsc || (wn as any)((n as any).traceId, t);
}
function Es(this: any, t: any): any {
  const e: any = (E as any)();
  if (!e) return {};
  const n: any = (vn as any)(t),
    r: any = (se as any)(n),
    s: any = (r as any).data,
    o: any = (((n as any).spanContext as any)() as any).traceState,
    i: any = o?.get("sentry.sample_rate") ?? (s as any)[Ur] ?? (s as any)[jr];
  function a(this: any, _: any): any {
    return ((typeof i as any) == ("number" as any) || (typeof i as any) == ("string" as any)) && ((_ as any).sample_rate = `${i}`), _;
  }
  const c: any = (n as any)[_s];
  if (c) return (a as any)(c);
  const u: any = o?.get("sentry.dsc"),
    f: any = u && (Vr as any)(u);
  if (f) return (a as any)(f);
  const d: any = (wn as any)((((t as any).spanContext as any)() as any).traceId, e),
    h: any = (s as any)[Fr],
    l: any = (r as any).description;
  return (h as any) !== ("url" as any) && l && ((d as any).transaction = l), (hs as any)() && ((d as any).sampled = (String as any)((ds as any)(n)), (d as any).sample_rand = o?.get("sentry.sample_rand") ?? ((bn as any)(n) as any).scope?.getPropagationContext().sampleRand.toString()), (a as any)(d), ((e as any).emit as any)("createDsc", d, n), d;
}
function R(this: any, t: any, e: any = 100, n: any = (1 as any) / (0 as any)): any {
  try {
    return (Mt as any)("", t, e, n);
  } catch (r: any) {
    return {
      ERROR: `**non-serializable** (${r})`
    };
  }
}
function Rn(this: any, t: any, e: any = 3, n: any = (100 as any) * (1024 as any)): any {
  const r: any = (R as any)(t, e);
  return ((Ts as any)(r) as any) > (n as any) ? (Rn as any)(t, (e as any) - (1 as any), n) : r;
}
function Mt(this: any, t: any, e: any, n: any = (1 as any) / (0 as any), r: any = (1 as any) / (0 as any), s: any = (vs as any)()): any {
  const [o, i]: any = s;
  if ((e as any) == (null as any) || ((["boolean", "string"] as any).includes as any)(typeof e) || (typeof e as any) == ("number" as any) && ((Number as any).isFinite as any)(e)) return e;
  const a: any = (Ss as any)(t, e);
  if (!((a as any).startsWith as any)("[object ")) return a;
  if ((e as any).__sentry_skip_normalization__) return e;
  const c: any = (typeof (e as any).__sentry_override_normalization_depth__ as any) == ("number" as any) ? (e as any).__sentry_override_normalization_depth__ : n;
  if ((c as any) === (0 as any)) return ((a as any).replace as any)("object ", "");
  if ((o as any)(e)) return "[Circular ~]";
  const u: any = e;
  if (u && (typeof (u as any).toJSON as any) == ("function" as any)) try {
    const l: any = ((u as any).toJSON as any)();
    return (Mt as any)("", l, (c as any) - (1 as any), r, s);
  } catch {}
  const f: any = ((Array as any).isArray as any)(e) ? [] : {};
  let d: any = 0;
  const h: any = (hn as any)(e);
  for (const l in h) {
    if (!((((Object as any).prototype as any).hasOwnProperty as any).call as any)(h, l)) continue;
    if ((d as any) >= (r as any)) {
      (f as any)[l] = "[MaxProperties ~]";
      break;
    }
    const _: any = (h as any)[l];
    (f as any)[l] = (Mt as any)(l, _, (c as any) - (1 as any), r, s), d++;
  }
  return (i as any)(e), f;
}
function Ss(this: any, t: any, e: any): any {
  try {
    if ((t as any) === ("domain" as any) && e && (typeof e as any) == ("object" as any) && (e as any)._events) return "[Domain]";
    if ((t as any) === ("domainEmitter" as any)) return "[DomainEmitter]";
    if ((typeof global as any) < ("u" as any) && (e as any) === (global as any)) return "[Global]";
    if ((typeof window as any) < ("u" as any) && (e as any) === (window as any)) return "[Window]";
    if ((typeof document as any) < ("u" as any) && (e as any) === (document as any)) return "[Document]";
    if ((dn as any)(e)) return "[VueViewModel]";
    if ((yr as any)(e)) return "[SyntheticEvent]";
    if ((typeof e as any) == ("number" as any) && !((Number as any).isFinite as any)(e)) return `[${e}]`;
    if ((typeof e as any) == ("function" as any)) return `[Function: ${(A as any)(e)}]`;
    if ((typeof e as any) == ("symbol" as any)) return `[${(String as any)(e)}]`;
    if ((typeof e as any) == ("bigint" as any)) return `[BigInt: ${(String as any)(e)}]`;
    const n: any = (bs as any)(e);
    return ((/^HTML(\w*)Element$/ as any).test as any)(n) ? `[HTMLElement: ${n}]` : `[object ${n}]`;
  } catch (n: any) {
    return `**non-serializable** (${n})`;
  }
}
function bs(this: any, t: any): any {
  const e: any = ((Object as any).getPrototypeOf as any)(t);
  return e?.constructor ? ((e as any).constructor as any).name : "null prototype";
}
function Is(this: any, t: any): any {
  return ~-((((encodeURI as any)(t) as any).split as any)(/%..|./) as any).length;
}
function Ts(this: any, t: any): any {
  return (Is as any)(((JSON as any).stringify as any)(t));
}
function vs(this: any): any {
  const t: any = new (WeakSet as any)();
  function e(this: any, r: any): any {
    return ((t as any).has as any)(r) ? !0 : (((t as any).add as any)(r), !1);
  }
  function n(this: any, r: any): any {
    ((t as any).delete as any)(r);
  }
  return [e, n];
}
function et(this: any, t: any, e: any = []): any {
  return [t, e];
}
function ws(this: any, t: any, e: any): any {
  const [n, r]: any = t;
  return [n, [...r, e]];
}
function Ae(this: any, t: any, e: any): any {
  const n: any = (t as any)[1];
  for (const r of n) {
    const s: any = ((r as any)[0] as any).type;
    if ((e as any)(r, s)) return !0;
  }
  return !1;
}
function $t(this: any, t: any): any {
  const e: any = (yt as any)(g);
  return (e as any).encodePolyfill ? ((e as any).encodePolyfill as any)(t) : ((new (TextEncoder as any)() as any).encode as any)(t);
}
function Rs(this: any, t: any): any {
  const [e, n]: any = t;
  let r: any = ((JSON as any).stringify as any)(e);
  function s(this: any, o: any): any {
    (typeof r as any) == ("string" as any) ? r = (typeof o as any) == ("string" as any) ? (r as any) + (o as any) : [($t as any)(r), o] : ((r as any).push as any)((typeof o as any) == ("string" as any) ? ($t as any)(o) : o);
  }
  for (const o of n) {
    const [i, a]: any = o;
    if ((s as any)(`
${((JSON as any).stringify as any)(i)}
`), (typeof a as any) == ("string" as any) || a instanceof Uint8Array) (s as any)(a);else {
      let c: any;
      try {
        c = ((JSON as any).stringify as any)(a);
      } catch {
        c = ((JSON as any).stringify as any)((R as any)(a));
      }
      (s as any)(c);
    }
  }
  return (typeof r as any) == ("string" as any) ? r : (ks as any)(r);
}
function ks(this: any, t: any): any {
  const e: any = ((t as any).reduce as any)((s: any, o: any): any => (s as any) + ((o as any).length as any), 0),
    n: any = new (Uint8Array as any)(e);
  let r: any = 0;
  for (const s of t) ((n as any).set as any)(s, r), r += (s as any).length;
  return n;
}
function Ns(this: any, t: any): any {
  const e: any = (typeof (t as any).data as any) == ("string" as any) ? ($t as any)((t as any).data) : (t as any).data;
  return [{
    type: "attachment",
    length: (e as any).length,
    filename: (t as any).filename,
    content_type: (t as any).contentType,
    attachment_type: (t as any).attachmentType
  }, e];
}
const xs: any = {
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
function Ce(this: any, t: any): any {
  return (xs as any)[t];
}
function kn(this: any, t: any): any {
  if (!t?.sdk) return;
  const {
    name: e,
    version: n
  }: any = (t as any).sdk;
  return {
    name: e,
    version: n
  };
}
function Os(this: any, t: any, e: any, n: any, r: any): any {
  const s: any = (t as any).sdkProcessingMetadata?.dynamicSamplingContext;
  return {
    event_id: (t as any).event_id,
    sent_at: ((new (Date as any)() as any).toISOString as any)(),
    ...(e && {
      sdk: e
    }),
    ...(!!n && r && {
      dsn: (bt as any)(r)
    }),
    ...(s && {
      trace: s
    })
  };
}
function Ds(this: any, t: any, e: any): any {
  if (!e) return t;
  const n: any = (t as any).sdk || {};
  return (t as any).sdk = {
    ...n,
    name: (n as any).name || (e as any).name,
    version: (n as any).version || (e as any).version,
    integrations: [...((t as any).sdk?.integrations || []), ...((e as any).integrations || [])],
    packages: [...((t as any).sdk?.packages || []), ...((e as any).packages || [])],
    settings: (t as any).sdk?.settings || (e as any).settings ? {
      ...(t as any).sdk?.settings,
      ...(e as any).settings
    } : void 0
  }, t;
}
function As(this: any, t: any, e: any, n: any, r: any): any {
  const s: any = (kn as any)(n),
    o: any = {
      sent_at: ((new (Date as any)() as any).toISOString as any)(),
      ...(s && {
        sdk: s
      }),
      ...(!!r && e && {
        dsn: (bt as any)(e)
      })
    },
    i: any = "aggregates" in t ? [{
      type: "sessions"
    }, t] : [{
      type: "session"
    }, ((t as any).toJSON as any)()];
  return (et as any)(o, [i]);
}
function Cs(this: any, t: any, e: any, n: any, r: any): any {
  const s: any = (kn as any)(n),
    o: any = (t as any).type && ((t as any).type as any) !== ("replay_event" as any) ? (t as any).type : "event";
  (Ds as any)(t, n?.sdk);
  const i: any = (Os as any)(t, s, r, e);
  return delete (t as any).sdkProcessingMetadata, (et as any)(i, [[{
    type: o
  }, t]]);
}
const Nt: number = 0,
  Pe: number = 1,
  Le: number = 2;
function It(this: any, t: any): any {
  return new (X as any)((e: any): any => {
    (e as any)(t);
  });
}
function ie(this: any, t: any): any {
  return new (X as any)((e: any, n: any): any => {
    (n as any)(t);
  });
}
class X {
  declare _value: any;
  declare _handlers: any;
  declare _state: any;
  [key: string]: any;
  constructor(e: any) {
    (this as any)._state = Nt, (this as any)._handlers = [], ((this as any)._runExecutor as any)(e);
  }
  then(e: any, n: any): any {
    return new (X as any)((r: any, s: any): any => {
      (((this as any)._handlers as any).push as any)([!1, (o: any): any => {
        if (!e) (r as any)(o);else try {
          (r as any)((e as any)(o));
        } catch (i: any) {
          (s as any)(i);
        }
      }, (o: any): any => {
        if (!n) (s as any)(o);else try {
          (r as any)((n as any)(o));
        } catch (i: any) {
          (s as any)(i);
        }
      }]), ((this as any)._executeHandlers as any)();
    });
  }
  catch(e: any): any {
    return ((this as any).then as any)((n: any): any => n, e);
  }
  finally(e: any): any {
    return new (X as any)((n: any, r: any): any => {
      let s: any, o: any;
      return ((((this as any).then as any)((i: any): any => {
        o = !1, s = i, e && (e as any)();
      }, (i: any): any => {
        o = !0, s = i, e && (e as any)();
      }) as any).then as any)((): any => {
        if (o) {
          (r as any)(s);
          return;
        }
        (n as any)(s);
      });
    });
  }
  _executeHandlers(): any {
    if (((this as any)._state as any) === (Nt as any)) return;
    const e: any = (((this as any)._handlers as any).slice as any)();
    (this as any)._handlers = [], ((e as any).forEach as any)((n: any): any => {
      (n as any)[0] || (((this as any)._state as any) === (Pe as any) && ((n as any)[1] as any)((this as any)._value), ((this as any)._state as any) === (Le as any) && ((n as any)[2] as any)((this as any)._value), (n as any)[0] = !0);
    });
  }
  _runExecutor(e: any): any {
    const n: any = (o: any, i: any): any => {
        if (((this as any)._state as any) === (Nt as any)) {
          if ((Z as any)(i)) {
            ((i as any).then as any)(r, s);
            return;
          }
          (this as any)._state = o, (this as any)._value = i, ((this as any)._executeHandlers as any)();
        }
      },
      r: any = (o: any): any => {
        (n as any)(Pe, o);
      },
      s: any = (o: any): any => {
        (n as any)(Le, o);
      };
    try {
      (e as any)(r, s);
    } catch (o: any) {
      (s as any)(o);
    }
  }
}
function Ps(this: any, t: any, e: any, n: any, r: any = 0): any {
  try {
    const s: any = (Ft as any)(e, n, t, r);
    return (Z as any)(s) ? s : (It as any)(s);
  } catch (s: any) {
    return (ie as any)(s);
  }
}
function Ft(this: any, t: any, e: any, n: any, r: any): any {
  const s: any = (n as any)[r];
  if (!t || !s) return t;
  const o: any = (s as any)({
    ...t
  }, e);
  return m && (o as any) === (null as any) && ((p as any).log as any)(`Event processor "${(s as any).id || "?"}" dropped event`), (Z as any)(o) ? ((o as any).then as any)((i: any): any => (Ft as any)(i, e, n, (r as any) + (1 as any))) : (Ft as any)(o, e, n, (r as any) + (1 as any));
}
function Ls(this: any, t: any, e: any): any {
  const {
    fingerprint: n,
    span: r,
    breadcrumbs: s,
    sdkProcessingMetadata: o
  }: any = e;
  (Ms as any)(t, e), r && (Us as any)(t, r), (js as any)(t, n), ($s as any)(t, s), (Fs as any)(t, o);
}
function mt(this: any, t: any, e: any): any {
  const {
    extra: n,
    tags: r,
    user: s,
    contexts: o,
    level: i,
    sdkProcessingMetadata: a,
    breadcrumbs: c,
    fingerprint: u,
    eventProcessors: f,
    attachments: d,
    propagationContext: h,
    transactionName: l,
    span: _
  }: any = e;
  (rt as any)(t, "extra", n), (rt as any)(t, "tags", r), (rt as any)(t, "user", s), (rt as any)(t, "contexts", o), (t as any).sdkProcessingMetadata = (tt as any)((t as any).sdkProcessingMetadata, a, 2), i && ((t as any).level = i), l && ((t as any).transactionName = l), _ && ((t as any).span = _), (c as any).length && ((t as any).breadcrumbs = [...(t as any).breadcrumbs, ...c]), (u as any).length && ((t as any).fingerprint = [...(t as any).fingerprint, ...u]), (f as any).length && ((t as any).eventProcessors = [...(t as any).eventProcessors, ...f]), (d as any).length && ((t as any).attachments = [...(t as any).attachments, ...d]), (t as any).propagationContext = {
    ...(t as any).propagationContext,
    ...h
  };
}
function rt(this: any, t: any, e: any, n: any): any {
  (t as any)[e] = (tt as any)((t as any)[e], n, 1);
}
function Ms(this: any, t: any, e: any): any {
  const {
    extra: n,
    tags: r,
    user: s,
    contexts: o,
    level: i,
    transactionName: a
  }: any = e;
  (((Object as any).keys as any)(n) as any).length && ((t as any).extra = {
    ...n,
    ...(t as any).extra
  }), (((Object as any).keys as any)(r) as any).length && ((t as any).tags = {
    ...r,
    ...(t as any).tags
  }), (((Object as any).keys as any)(s) as any).length && ((t as any).user = {
    ...s,
    ...(t as any).user
  }), (((Object as any).keys as any)(o) as any).length && ((t as any).contexts = {
    ...o,
    ...(t as any).contexts
  }), i && ((t as any).level = i), a && ((t as any).type as any) !== ("transaction" as any) && ((t as any).transaction = a);
}
function $s(this: any, t: any, e: any): any {
  const n: any = [...((t as any).breadcrumbs || []), ...e];
  (t as any).breadcrumbs = (n as any).length ? n : void 0;
}
function Fs(this: any, t: any, e: any): any {
  (t as any).sdkProcessingMetadata = {
    ...(t as any).sdkProcessingMetadata,
    ...e
  };
}
function Us(this: any, t: any, e: any): any {
  (t as any).contexts = {
    trace: (as as any)(e),
    ...(t as any).contexts
  }, (t as any).sdkProcessingMetadata = {
    dynamicSamplingContext: (Es as any)(e),
    ...(t as any).sdkProcessingMetadata
  };
  const n: any = (vn as any)(e),
    r: any = ((se as any)(n) as any).description;
  r && !(t as any).transaction && ((t as any).type as any) === ("transaction" as any) && ((t as any).transaction = r);
}
function js(this: any, t: any, e: any): any {
  (t as any).fingerprint = (t as any).fingerprint ? ((Array as any).isArray as any)((t as any).fingerprint) ? (t as any).fingerprint : [(t as any).fingerprint] : [], e && ((t as any).fingerprint = (((t as any).fingerprint as any).concat as any)(e)), ((t as any).fingerprint as any).length || delete (t as any).fingerprint;
}
let st: any, Me: any, ot: any;
function Bs(this: any, t: any): any {
  const e: any = (g as any)._sentryDebugIds;
  if (!e) return {};
  const n: any = ((Object as any).keys as any)(e);
  return ot && ((n as any).length as any) === (Me as any) || (Me = (n as any).length, ot = ((n as any).reduce as any)((r: any, s: any): any => {
    st || (st = {});
    const o: any = (st as any)[s];
    if (o) (r as any)[(o as any)[0]] = (o as any)[1];else {
      const i: any = (t as any)(s);
      for (let a: any = ((i as any).length as any) - (1 as any); (a as any) >= (0 as any); a--) {
        const u: any = (i as any)[a]?.filename,
          f: any = (e as any)[s];
        if (u && f) {
          (r as any)[u] = f, (st as any)[s] = [u, f];
          break;
        }
      }
    }
    return r;
  }, {})), ot;
}
function Hs(this: any, t: any, e: any, n: any, r: any, s: any, o: any): any {
  const {
      normalizeDepth: i = 3,
      normalizeMaxBreadth: a = 1e3
    }: any = t,
    c: any = {
      ...e,
      event_id: (e as any).event_id || (n as any).event_id || (T as any)(),
      timestamp: (e as any).timestamp || (Q as any)()
    },
    u: any = (n as any).integrations || (((t as any).integrations as any).map as any)((S: any): any => (S as any).name);
  (Gs as any)(c, t), (Ys as any)(c, u), s && ((s as any).emit as any)("applyFrameMetadata", e), ((e as any).type as any) === (void 0 as any) && (Ws as any)(c, (t as any).stackParser);
  const f: any = (Ks as any)(r, (n as any).captureContext);
  (n as any).mechanism && (B as any)(c, (n as any).mechanism);
  const d: any = s ? ((s as any).getEventProcessors as any)() : [],
    h: any = (((re as any)() as any).getScopeData as any)();
  if (o) {
    const S: any = ((o as any).getScopeData as any)();
    (mt as any)(h, S);
  }
  if (f) {
    const S: any = ((f as any).getScopeData as any)();
    (mt as any)(h, S);
  }
  const l: any = [...((n as any).attachments || []), ...(h as any).attachments];
  (l as any).length && ((n as any).attachments = l), (Ls as any)(c, h);
  const _: any = [...d, ...(h as any).eventProcessors];
  return (((Ps as any)(_, c, n) as any).then as any)((S: any): any => (S && (qs as any)(S), (typeof i as any) == ("number" as any) && (i as any) > (0 as any) ? (zs as any)(S, i, a) : S));
}
function Gs(this: any, t: any, e: any): any {
  const {
    environment: n,
    release: r,
    dist: s,
    maxValueLength: o = 250
  }: any = e;
  (t as any).environment = (t as any).environment || n || oe, !(t as any).release && r && ((t as any).release = r), !(t as any).dist && s && ((t as any).dist = s);
  const i: any = (t as any).request;
  i?.url && ((i as any).url = (ht as any)((i as any).url, o));
}
function Ws(this: any, t: any, e: any): any {
  const n: any = (Bs as any)(e);
  (t as any).exception?.values?.forEach((r: any): any => {
    (r as any).stacktrace?.frames?.forEach((s: any): any => {
      (s as any).filename && ((s as any).debug_id = (n as any)[(s as any).filename]);
    });
  });
}
function qs(this: any, t: any): any {
  const e: any = {};
  if ((t as any).exception?.values?.forEach((r: any): any => {
    (r as any).stacktrace?.frames?.forEach((s: any): any => {
      (s as any).debug_id && ((s as any).abs_path ? (e as any)[(s as any).abs_path] = (s as any).debug_id : (s as any).filename && ((e as any)[(s as any).filename] = (s as any).debug_id), delete (s as any).debug_id);
    });
  }), ((((Object as any).keys as any)(e) as any).length as any) === (0 as any)) return;
  (t as any).debug_meta = (t as any).debug_meta || {}, ((t as any).debug_meta as any).images = ((t as any).debug_meta as any).images || [];
  const n: any = ((t as any).debug_meta as any).images;
  ((((Object as any).entries as any)(e) as any).forEach as any)(([r, s]: any): any => {
    ((n as any).push as any)({
      type: "sourcemap",
      code_file: r,
      debug_id: s
    });
  });
}
function Ys(this: any, t: any, e: any): any {
  ((e as any).length as any) > (0 as any) && ((t as any).sdk = (t as any).sdk || {}, ((t as any).sdk as any).integrations = [...(((t as any).sdk as any).integrations || []), ...e]);
}
function zs(this: any, t: any, e: any, n: any): any {
  if (!t) return null;
  const r: any = {
    ...t,
    ...((t as any).breadcrumbs && {
      breadcrumbs: (((t as any).breadcrumbs as any).map as any)((s: any): any => ({
        ...s,
        ...((s as any).data && {
          data: (R as any)((s as any).data, e, n)
        })
      }))
    }),
    ...((t as any).user && {
      user: (R as any)((t as any).user, e, n)
    }),
    ...((t as any).contexts && {
      contexts: (R as any)((t as any).contexts, e, n)
    }),
    ...((t as any).extra && {
      extra: (R as any)((t as any).extra, e, n)
    })
  };
  return (t as any).contexts?.trace && (r as any).contexts && (((r as any).contexts as any).trace = ((t as any).contexts as any).trace, (((t as any).contexts as any).trace as any).data && ((((r as any).contexts as any).trace as any).data = (R as any)((((t as any).contexts as any).trace as any).data, e, n))), (t as any).spans && ((r as any).spans = (((t as any).spans as any).map as any)((s: any): any => ({
    ...s,
    ...((s as any).data && {
      data: (R as any)((s as any).data, e, n)
    })
  }))), (t as any).contexts?.flags && (r as any).contexts && (((r as any).contexts as any).flags = (R as any)(((t as any).contexts as any).flags, 3, n)), r;
}
function Ks(this: any, t: any, e: any): any {
  if (!e) return t;
  const n: any = t ? ((t as any).clone as any)() : new (k as any)();
  return ((n as any).update as any)(e), n;
}
function Xs(this: any, t: any): any {
  if (t) return (Vs as any)(t) ? {
    captureContext: t
  } : (Zs as any)(t) ? {
    captureContext: t
  } : t;
}
function Vs(this: any, t: any): any {
  return t instanceof k || (typeof t as any) == ("function" as any);
}
const Js: any = ["user", "level", "extra", "contexts", "tags", "fingerprint", "propagationContext"];
function Zs(this: any, t: any): any {
  return ((((Object as any).keys as any)(t) as any).some as any)((e: any): any => ((Js as any).includes as any)(e));
}
function Nn(this: any, t: any, e: any): any {
  return (((w as any)() as any).captureException as any)(t, (Xs as any)(e));
}
function Qs(this: any, t: any, e: any): any {
  const n: any = (typeof e as any) == ("string" as any) ? e : void 0,
    r: any = (typeof e as any) != ("string" as any) ? {
      captureContext: e
    } : void 0;
  return (((w as any)() as any).captureMessage as any)(t, n, r);
}
function xn(this: any, t: any, e: any): any {
  return (((w as any)() as any).captureEvent as any)(t, e);
}
function to(this: any, t: any, e: any): any {
  (((P as any)() as any).setTag as any)(t, e);
}
function $e(this: any, t: any): any {
  const e: any = (P as any)(),
    n: any = (w as any)(),
    {
      userAgent: r
    }: any = (g as any).navigator || {},
    s: any = (kr as any)({
      user: ((n as any).getUser as any)() || ((e as any).getUser as any)(),
      ...(r && {
        userAgent: r
      }),
      ...t
    }),
    o: any = ((e as any).getSession as any)();
  return (o?.status as any) === ("ok" as any) && (H as any)(o, {
    status: "exited"
  }), (On as any)(), ((e as any).setSession as any)(s), s;
}
function On(this: any): any {
  const t: any = (P as any)(),
    n: any = (((w as any)() as any).getSession as any)() || ((t as any).getSession as any)();
  n && (Nr as any)(n), (Dn as any)(), ((t as any).setSession as any)();
}
function Dn(this: any): any {
  const t: any = (P as any)(),
    e: any = (E as any)(),
    n: any = ((t as any).getSession as any)();
  n && e && ((e as any).captureSession as any)(n);
}
function Fe(this: any, t: any = !1): any {
  if (t) {
    (On as any)();
    return;
  }
  (Dn as any)();
}
const eo: string = "7";
function no(this: any, t: any): any {
  const e: any = (t as any).protocol ? `${(t as any).protocol}:` : "",
    n: any = (t as any).port ? `:${(t as any).port}` : "";
  return `${e}//${(t as any).host}${n}${(t as any).path ? `/${(t as any).path}` : ""}/api/`;
}
function ro(this: any, t: any): any {
  return `${(no as any)(t)}${(t as any).projectId}/envelope/`;
}
function so(this: any, t: any, e: any): any {
  const n: any = {
    sentry_version: eo
  };
  return (t as any).publicKey && ((n as any).sentry_key = (t as any).publicKey), e && ((n as any).sentry_client = `${(e as any).name}/${(e as any).version}`), ((new (URLSearchParams as any)(n) as any).toString as any)();
}
function oo(this: any, t: any, e: any, n: any): any {
  return e || `${(ro as any)(t)}?${(so as any)(t, n)}`;
}
const Ue: any = [];
function io(this: any, t: any): any {
  const e: any = {};
  return ((t as any).forEach as any)((n: any): any => {
    const {
        name: r
      }: any = n,
      s: any = (e as any)[r];
    s && !(s as any).isDefaultInstance && (n as any).isDefaultInstance || ((e as any)[r] = n);
  }), ((Object as any).values as any)(e);
}
function ao(this: any, t: any): any {
  const e: any = (t as any).defaultIntegrations || [],
    n: any = (t as any).integrations;
  ((e as any).forEach as any)((s: any): any => {
    (s as any).isDefaultInstance = !0;
  });
  let r: any;
  if (((Array as any).isArray as any)(n)) r = [...e, ...n];else if ((typeof n as any) == ("function" as any)) {
    const s: any = (n as any)(e);
    r = ((Array as any).isArray as any)(s) ? s : [s];
  } else r = e;
  return (io as any)(r);
}
function co(this: any, t: any, e: any): any {
  const n: any = {};
  return ((e as any).forEach as any)((r: any): any => {
    r && (An as any)(t, r, n);
  }), n;
}
function je(this: any, t: any, e: any): any {
  for (const n of e) n?.afterAllSetup && ((n as any).afterAllSetup as any)(t);
}
function An(this: any, t: any, e: any, n: any): any {
  if ((n as any)[(e as any).name]) {
    m && ((p as any).log as any)(`Integration skipped because it was already installed: ${(e as any).name}`);
    return;
  }
  if ((n as any)[(e as any).name] = e, (((Ue as any).indexOf as any)((e as any).name) as any) === (-1 as any) && (typeof (e as any).setupOnce as any) == ("function" as any) && (((e as any).setupOnce as any)(), ((Ue as any).push as any)((e as any).name)), (e as any).setup && (typeof (e as any).setup as any) == ("function" as any) && ((e as any).setup as any)(t), (typeof (e as any).preprocessEvent as any) == ("function" as any)) {
    const r: any = (((e as any).preprocessEvent as any).bind as any)(e);
    ((t as any).on as any)("preprocessEvent", (s: any, o: any): any => (r as any)(s, o, t));
  }
  if ((typeof (e as any).processEvent as any) == ("function" as any)) {
    const r: any = (((e as any).processEvent as any).bind as any)(e),
      s: any = ((Object as any).assign as any)((o: any, i: any): any => (r as any)(o, i, t), {
        id: (e as any).name
      });
    ((t as any).addEventProcessor as any)(s);
  }
  m && ((p as any).log as any)(`Integration installed: ${(e as any).name}`);
}
function uo(this: any, t: any, e: any, n: any): any {
  const r: any = [{
    type: "client_report"
  }, {
    timestamp: (Q as any)(),
    discarded_events: t
  }];
  return (et as any)(e ? {
    dsn: e
  } : {}, [r]);
}
function Cn(this: any, t: any): any {
  const e: any = [];
  (t as any).message && ((e as any).push as any)((t as any).message);
  try {
    const n: any = (((t as any).exception as any).values as any)[((((t as any).exception as any).values as any).length as any) - (1 as any)];
    n?.value && (((e as any).push as any)((n as any).value), (n as any).type && ((e as any).push as any)(`${(n as any).type}: ${(n as any).value}`));
  } catch {}
  return e;
}
function fo(this: any, t: any): any {
  const {
    trace_id: e,
    parent_span_id: n,
    span_id: r,
    status: s,
    origin: o,
    data: i,
    op: a
  }: any = (t as any).contexts?.trace ?? {};
  return {
    data: i ?? {},
    description: (t as any).transaction,
    op: a,
    parent_span_id: n,
    span_id: r ?? "",
    start_timestamp: (t as any).start_timestamp ?? 0,
    status: s,
    timestamp: (t as any).timestamp,
    trace_id: e ?? "",
    origin: o,
    profile_id: i?.[En],
    exclusive_time: i?.[Sn],
    measurements: (t as any).measurements,
    is_segment: !0
  };
}
function lo(this: any, t: any): any {
  return {
    type: "transaction",
    timestamp: (t as any).timestamp,
    start_timestamp: (t as any).start_timestamp,
    transaction: (t as any).description,
    contexts: {
      trace: {
        trace_id: (t as any).trace_id,
        span_id: (t as any).span_id,
        parent_span_id: (t as any).parent_span_id,
        op: (t as any).op,
        status: (t as any).status,
        origin: (t as any).origin,
        data: {
          ...(t as any).data,
          ...((t as any).profile_id && {
            [En]: (t as any).profile_id
          }),
          ...((t as any).exclusive_time && {
            [Sn]: (t as any).exclusive_time
          })
        }
      }
    },
    measurements: (t as any).measurements
  };
}
const Be: string = "Not capturing exception because it's already been captured.",
  He: string = "Discarded session because of missing or non-string release",
  Pn: any = ((Symbol as any).for as any)("SentryInternalError"),
  Ln: any = ((Symbol as any).for as any)("SentryDoNotSendEventError");
function dt(this: any, t: any): any {
  return {
    message: t,
    [Pn]: !0
  };
}
function xt(this: any, t: any): any {
  return {
    message: t,
    [Ln]: !0
  };
}
function Ge(this: any, t: any): any {
  return !!t && (typeof t as any) == ("object" as any) && Pn in t;
}
function We(this: any, t: any): any {
  return !!t && (typeof t as any) == ("object" as any) && Ln in t;
}
class po {
  declare _transport: any;
  declare _dsn: any;
  declare _eventProcessors: any;
  declare _hooks: any;
  declare _outcomes: any;
  declare _numProcessing: any;
  declare _integrations: any;
  declare _options: any;
  [key: string]: any;
  constructor(e: any) {
    if ((this as any)._options = e, (this as any)._integrations = {}, (this as any)._numProcessing = 0, (this as any)._outcomes = {}, (this as any)._hooks = {}, (this as any)._eventProcessors = [], (e as any).dsn ? (this as any)._dsn = (os as any)((e as any).dsn) : m && ((p as any).warn as any)("No DSN provided, client will not send events."), (this as any)._dsn) {
      const n: any = (oo as any)((this as any)._dsn, (e as any).tunnel, (e as any)._metadata ? ((e as any)._metadata as any).sdk : void 0);
      (this as any)._transport = ((e as any).transport as any)({
        tunnel: ((this as any)._options as any).tunnel,
        recordDroppedEvent: (((this as any).recordDroppedEvent as any).bind as any)(this),
        ...(e as any).transportOptions,
        url: n
      });
    }
  }
  captureException(e: any, n: any, r: any): any {
    const s: any = (T as any)();
    if ((Ee as any)(e)) return m && ((p as any).log as any)(Be), s;
    const o: any = {
      event_id: s,
      ...n
    };
    return ((this as any)._process as any)(((((this as any).eventFromException as any)(e, o) as any).then as any)((i: any): any => ((this as any)._captureEvent as any)(i, o, r))), (o as any).event_id;
  }
  captureMessage(e: any, n: any, r: any, s: any): any {
    const o: any = {
        event_id: (T as any)(),
        ...r
      },
      i: any = (Jt as any)(e) ? e : (String as any)(e),
      a: any = (Zt as any)(e) ? ((this as any).eventFromMessage as any)(i, n, o) : ((this as any).eventFromException as any)(e, o);
    return ((this as any)._process as any)(((a as any).then as any)((c: any): any => ((this as any)._captureEvent as any)(c, o, s))), (o as any).event_id;
  }
  captureEvent(e: any, n: any, r: any): any {
    const s: any = (T as any)();
    if (n?.originalException && (Ee as any)((n as any).originalException)) return m && ((p as any).log as any)(Be), s;
    const o: any = {
        event_id: s,
        ...n
      },
      i: any = (e as any).sdkProcessingMetadata || {},
      a: any = (i as any).capturedSpanScope,
      c: any = (i as any).capturedSpanIsolationScope;
    return ((this as any)._process as any)(((this as any)._captureEvent as any)(e, o, a || r, c)), (o as any).event_id;
  }
  captureSession(e: any): any {
    ((this as any).sendSession as any)(e), (H as any)(e, {
      init: !1
    });
  }
  getDsn(): any {
    return (this as any)._dsn;
  }
  getOptions(): any {
    return (this as any)._options;
  }
  getSdkMetadata(): any {
    return ((this as any)._options as any)._metadata;
  }
  getTransport(): any {
    return (this as any)._transport;
  }
  async flush(e: any): Promise<any> {
    const n: any = (this as any)._transport;
    if (!n) return !0;
    ((this as any).emit as any)("flush");
    const r: any = await ((this as any)._isClientDoneProcessing as any)(e),
      s: any = await ((n as any).flush as any)(e);
    return r && s;
  }
  async close(e: any): Promise<any> {
    const n: any = await ((this as any).flush as any)(e);
    return (((this as any).getOptions as any)() as any).enabled = !1, ((this as any).emit as any)("close"), n;
  }
  getEventProcessors(): any {
    return (this as any)._eventProcessors;
  }
  addEventProcessor(e: any): any {
    (((this as any)._eventProcessors as any).push as any)(e);
  }
  init(): any {
    (((this as any)._isEnabled as any)() || ((((this as any)._options as any).integrations as any).some as any)(({
      name: e
    }: any): any => ((e as any).startsWith as any)("Spotlight"))) && ((this as any)._setupIntegrations as any)();
  }
  getIntegrationByName(e: any): any {
    return ((this as any)._integrations as any)[e];
  }
  addIntegration(e: any): any {
    const n: any = ((this as any)._integrations as any)[(e as any).name];
    (An as any)(this, e, (this as any)._integrations), n || (je as any)(this, [e]);
  }
  sendEvent(e: any, n: any = {}): any {
    ((this as any).emit as any)("beforeSendEvent", e, n);
    let r: any = (Cs as any)(e, (this as any)._dsn, ((this as any)._options as any)._metadata, ((this as any)._options as any).tunnel);
    for (const s of (n as any).attachments || []) r = (ws as any)(r, (Ns as any)(s));
    ((((this as any).sendEnvelope as any)(r) as any).then as any)((s: any): any => ((this as any).emit as any)("afterSendEvent", e, s));
  }
  sendSession(e: any): any {
    const {
      release: n,
      environment: r = oe
    }: any = (this as any)._options;
    if ("aggregates" in e) {
      const o: any = (e as any).attrs || {};
      if (!(o as any).release && !n) {
        m && ((p as any).warn as any)(He);
        return;
      }
      (o as any).release = (o as any).release || n, (o as any).environment = (o as any).environment || r, (e as any).attrs = o;
    } else {
      if (!(e as any).release && !n) {
        m && ((p as any).warn as any)(He);
        return;
      }
      (e as any).release = (e as any).release || n, (e as any).environment = (e as any).environment || r;
    }
    ((this as any).emit as any)("beforeSendSession", e);
    const s: any = (As as any)(e, (this as any)._dsn, ((this as any)._options as any)._metadata, ((this as any)._options as any).tunnel);
    ((this as any).sendEnvelope as any)(s);
  }
  recordDroppedEvent(e: any, n: any, r: any = 1): any {
    if (((this as any)._options as any).sendClientReports) {
      const s: any = `${e}:${n}`;
      m && ((p as any).log as any)(`Recording outcome: "${s}"${(r as any) > (1 as any) ? ` (${r} times)` : ""}`), ((this as any)._outcomes as any)[s] = ((((this as any)._outcomes as any)[s] || 0) as any) + (r as any);
    }
  }
  on(e: any, n: any): any {
    const r: any = ((this as any)._hooks as any)[e] = ((this as any)._hooks as any)[e] || new (Set as any)(),
      s: any = (...o: any): any => (n as any)(...o);
    return ((r as any).add as any)(s), (): any => {
      ((r as any).delete as any)(s);
    };
  }
  emit(e: any, ...n: any): any {
    const r: any = ((this as any)._hooks as any)[e];
    r && ((r as any).forEach as any)((s: any): any => (s as any)(...n));
  }
  async sendEnvelope(e: any): Promise<any> {
    if (((this as any).emit as any)("beforeEnvelope", e), ((this as any)._isEnabled as any)() && (this as any)._transport) try {
      return await (((this as any)._transport as any).send as any)(e);
    } catch (n: any) {
      return m && ((p as any).error as any)("Error while sending envelope:", n), {};
    }
    return m && ((p as any).error as any)("Transport disabled"), {};
  }
  _setupIntegrations(): any {
    const {
      integrations: e
    }: any = (this as any)._options;
    (this as any)._integrations = (co as any)(this, e), (je as any)(this, e);
  }
  _updateSessionFromEvent(e: any, n: any): any {
    let r: any = ((n as any).level as any) === ("fatal" as any),
      s: any = !1;
    const o: any = (n as any).exception?.values;
    if (o) {
      s = !0;
      for (const c of o) if (((c as any).mechanism?.handled as any) === (!1 as any)) {
        r = !0;
        break;
      }
    }
    const i: any = ((e as any).status as any) === ("ok" as any);
    (i && ((e as any).errors as any) === (0 as any) || i && r) && ((H as any)(e, {
      ...(r && {
        status: "crashed"
      }),
      errors: (e as any).errors || (Number as any)(s || r)
    }), ((this as any).captureSession as any)(e));
  }
  async _isClientDoneProcessing(e: any): Promise<any> {
    let n: any = 0;
    for (; !e || (n as any) < (e as any);) {
      if (await new (Promise as any)((r: any): any => (setTimeout as any)(r, 1)), !(this as any)._numProcessing) return !0;
      n++;
    }
    return !1;
  }
  _isEnabled(): any {
    return ((((this as any).getOptions as any)() as any).enabled as any) !== (!1 as any) && ((this as any)._transport as any) !== (void 0 as any);
  }
  _prepareEvent(e: any, n: any, r: any, s: any): any {
    const o: any = ((this as any).getOptions as any)(),
      i: any = ((Object as any).keys as any)((this as any)._integrations);
    return !(n as any).integrations && i?.length && ((n as any).integrations = i), ((this as any).emit as any)("preprocessEvent", e, n), (e as any).type || ((s as any).setLastEventId as any)((e as any).event_id || (n as any).event_id), (((Hs as any)(o, e, n, r, this, s) as any).then as any)((a: any): any => {
      if ((a as any) === (null as any)) return a;
      ((this as any).emit as any)("postprocessEvent", a, n), (a as any).contexts = {
        trace: ($r as any)(r),
        ...(a as any).contexts
      };
      const c: any = (ys as any)(this, r);
      return (a as any).sdkProcessingMetadata = {
        dynamicSamplingContext: c,
        ...(a as any).sdkProcessingMetadata
      }, a;
    });
  }
  _captureEvent(e: any, n: any = {}, r: any = (w as any)(), s: any = (P as any)()): any {
    return m && (Ut as any)(e) && ((p as any).log as any)(`Captured error event \`${((Cn as any)(e) as any)[0] || "<unknown>"}\``), ((((this as any)._processEvent as any)(e, n, r, s) as any).then as any)((o: any): any => (o as any).event_id, (o: any): any => {
      m && ((We as any)(o) ? ((p as any).log as any)((o as any).message) : (Ge as any)(o) ? ((p as any).warn as any)((o as any).message) : ((p as any).warn as any)(o));
    });
  }
  _processEvent(e: any, n: any, r: any, s: any): any {
    const o: any = ((this as any).getOptions as any)(),
      {
        sampleRate: i
      }: any = o,
      a: any = (Mn as any)(e),
      c: any = (Ut as any)(e),
      u: any = (e as any).type || "error",
      f: any = `before send for type \`${u}\``,
      d: any = (typeof i as any) > ("u" as any) ? void 0 : (is as any)(i);
    if (c && (typeof d as any) == ("number" as any) && (((Math as any).random as any)() as any) > (d as any)) return ((this as any).recordDroppedEvent as any)("sample_rate", "error"), (ie as any)((xt as any)(`Discarding event because it's not included in the random sample (sampling rate = ${i})`));
    const h: any = (u as any) === ("replay_event" as any) ? "replay" : u;
    return ((((((((this as any)._prepareEvent as any)(e, n, r, s) as any).then as any)((l: any): any => {
      if ((l as any) === (null as any)) throw ((this as any).recordDroppedEvent as any)("event_processor", h), (xt as any)("An event processor returned `null`, will not send event.");
      if ((n as any).data && (((n as any).data as any).__sentry__ as any) === (!0 as any)) return l;
      const N: any = (mo as any)(this, o, l, n);
      return (ho as any)(N, f);
    }) as any).then as any)((l: any): any => {
      if ((l as any) === (null as any)) {
        if (((this as any).recordDroppedEvent as any)("before_send", h), a) {
          const vt: any = (1 as any) + ((((e as any).spans || []) as any).length as any);
          ((this as any).recordDroppedEvent as any)("before_send", "span", vt);
        }
        throw (xt as any)(`${f} returned \`null\`, will not send event.`);
      }
      const _: any = ((r as any).getSession as any)() || ((s as any).getSession as any)();
      if (c && _ && ((this as any)._updateSessionFromEvent as any)(_, l), a) {
        const S: any = (l as any).sdkProcessingMetadata?.spanCountBeforeProcessing || 0,
          vt: any = (l as any).spans ? ((l as any).spans as any).length : 0,
          fe: any = (S as any) - (vt as any);
        (fe as any) > (0 as any) && ((this as any).recordDroppedEvent as any)("before_send", "span", fe);
      }
      const N: any = (l as any).transaction_info;
      if (a && N && ((l as any).transaction as any) !== ((e as any).transaction as any)) {
        const S: string = "custom";
        (l as any).transaction_info = {
          ...N,
          source: S
        };
      }
      return ((this as any).sendEvent as any)(l, n), l;
    }) as any).then as any)(null, (l: any): any => {
      throw (We as any)(l) || (Ge as any)(l) ? l : (((this as any).captureException as any)(l, {
        mechanism: {
          handled: !1,
          type: "internal"
        },
        data: {
          __sentry__: !0
        },
        originalException: l
      }), (dt as any)(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${l}`));
    });
  }
  _process(e: any): any {
    (this as any)._numProcessing++, ((e as any).then as any)((n: any): any => ((this as any)._numProcessing--, n), (n: any): any => ((this as any)._numProcessing--, n));
  }
  _clearOutcomes(): any {
    const e: any = (this as any)._outcomes;
    return (this as any)._outcomes = {}, ((((Object as any).entries as any)(e) as any).map as any)(([n, r]: any): any => {
      const [s, o]: any = ((n as any).split as any)(":");
      return {
        reason: s,
        category: o,
        quantity: r
      };
    });
  }
  _flushOutcomes(): any {
    m && ((p as any).log as any)("Flushing outcomes...");
    const e: any = ((this as any)._clearOutcomes as any)();
    if (((e as any).length as any) === (0 as any)) {
      m && ((p as any).log as any)("No outcomes to send");
      return;
    }
    if (!(this as any)._dsn) {
      m && ((p as any).log as any)("No dsn provided, will not send outcomes");
      return;
    }
    m && ((p as any).log as any)("Sending outcomes:", e);
    const n: any = (uo as any)(e, ((this as any)._options as any).tunnel && (bt as any)((this as any)._dsn));
    ((this as any).sendEnvelope as any)(n);
  }
}
function ho(this: any, t: any, e: any): any {
  const n: any = `${e} must return \`null\` or a valid event.`;
  if ((Z as any)(t)) return ((t as any).then as any)((r: any): any => {
    if (!(K as any)(r) && (r as any) !== (null as any)) throw (dt as any)(n);
    return r;
  }, (r: any): any => {
    throw (dt as any)(`${e} rejected with ${r}`);
  });
  if (!(K as any)(t) && (t as any) !== (null as any)) throw (dt as any)(n);
  return t;
}
function mo(this: any, t: any, e: any, n: any, r: any): any {
  const {
    beforeSend: s,
    beforeSendTransaction: o,
    beforeSendSpan: i,
    ignoreSpans: a
  }: any = e;
  let c: any = n;
  if ((Ut as any)(c) && s) return (s as any)(c, r);
  if ((Mn as any)(c)) {
    if (i || a) {
      const u: any = (fo as any)(c);
      if (a?.length && (De as any)(u, a)) return null;
      if (i) {
        const f: any = (i as any)(u);
        f ? c = (tt as any)(n, (lo as any)(f)) : (xe as any)();
      }
      if ((c as any).spans) {
        const f: any = [],
          d: any = (c as any).spans;
        for (const l of d) {
          if (a?.length && (De as any)(l, a)) {
            (ms as any)(d, l);
            continue;
          }
          if (i) {
            const _: any = (i as any)(l);
            _ ? ((f as any).push as any)(_) : ((xe as any)(), ((f as any).push as any)(l));
          } else ((f as any).push as any)(l);
        }
        const h: any = (((c as any).spans as any).length as any) - ((f as any).length as any);
        h && ((t as any).recordDroppedEvent as any)("before_send", "span", h), (c as any).spans = f;
      }
    }
    if (o) {
      if ((c as any).spans) {
        const u: any = ((c as any).spans as any).length;
        (c as any).sdkProcessingMetadata = {
          ...(n as any).sdkProcessingMetadata,
          spanCountBeforeProcessing: u
        };
      }
      return (o as any)(c, r);
    }
  }
  return c;
}
function Ut(this: any, t: any): any {
  return ((t as any).type as any) === (void 0 as any);
}
function Mn(this: any, t: any): any {
  return ((t as any).type as any) === ("transaction" as any);
}
function go(this: any, t: any): any {
  return [{
    type: "log",
    item_count: (t as any).length,
    content_type: "application/vnd.sentry.items.log+json"
  }, {
    items: t
  }];
}
function _o(this: any, t: any, e: any, n: any, r: any): any {
  const s: any = {};
  return e?.sdk && ((s as any).sdk = {
    name: ((e as any).sdk as any).name,
    version: ((e as any).sdk as any).version
  }), n && r && ((s as any).dsn = (bt as any)(r)), (et as any)(s, [(go as any)(t)]);
}
function Ot(this: any, t: any, e: any): any {
  const n: any = (yo as any)(t) ?? [];
  if (((n as any).length as any) === (0 as any)) return;
  const r: any = ((t as any).getOptions as any)(),
    s: any = (_o as any)(n, (r as any)._metadata, (r as any).tunnel, ((t as any).getDsn as any)());
  ((($n as any)() as any).set as any)(t, []), ((t as any).emit as any)("flushLogs"), ((t as any).sendEnvelope as any)(s);
}
function yo(this: any, t: any): any {
  return ((($n as any)() as any).get as any)(t);
}
function $n(this: any): any {
  return (J as any)("clientToLogBufferMap", (): any => new (WeakMap as any)());
}
function Eo(this: any, t: any, e: any): any {
  ((e as any).debug as any) === (!0 as any) && (m ? ((p as any).enable as any)() : (q as any)((): any => {
    ((console as any).warn as any)("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
  })), (((w as any)() as any).update as any)((e as any).initialScope);
  const r: any = new (t as any)(e);
  return (So as any)(r), ((r as any).init as any)(), r;
}
function So(this: any, t: any): any {
  (((w as any)() as any).setClient as any)(t);
}
const Fn: any = ((Symbol as any).for as any)("SentryBufferFullError");
function bo(this: any, t: any = 100): any {
  const e: any = new (Set as any)();
  function n(this: any): any {
    return ((e as any).size as any) < (t as any);
  }
  function r(this: any, i: any): any {
    ((e as any).delete as any)(i);
  }
  function s(this: any, i: any): any {
    if (!(n as any)()) return (ie as any)(Fn);
    const a: any = (i as any)();
    return ((e as any).add as any)(a), ((a as any).then as any)((): any => (r as any)(a), (): any => (r as any)(a)), a;
  }
  function o(this: any, i: any): any {
    if (!(e as any).size) return (It as any)(!0);
    const a: any = ((((Promise as any).allSettled as any)(((Array as any).from as any)(e)) as any).then as any)((): any => !0);
    if (!i) return a;
    const c: any = [a, new (Promise as any)((u: any): any => (setTimeout as any)((): any => (u as any)(!1), i))];
    return ((Promise as any).race as any)(c);
  }
  return {
    get $(): any {
      return ((Array as any).from as any)(e);
    },
    add: s,
    drain: o
  };
}
const Io: any = (60 as any) * (1e3 as any);
function To(this: any, t: any, e: any = ((Date as any).now as any)()): any {
  const n: any = (parseInt as any)(`${t}`, 10);
  if (!(isNaN as any)(n)) return (n as any) * (1e3 as any);
  const r: any = ((Date as any).parse as any)(`${t}`);
  return (isNaN as any)(r) ? Io : (r as any) - (e as any);
}
function vo(this: any, t: any, e: any): any {
  return (t as any)[e] || (t as any).all || 0;
}
function wo(this: any, t: any, e: any, n: any = ((Date as any).now as any)()): any {
  return ((vo as any)(t, e) as any) > (n as any);
}
function Ro(this: any, t: any, {
  statusCode: e,
  headers: n
}: any, r: any = ((Date as any).now as any)()): any {
  const s: any = {
      ...t
    },
    o: any = n?.["x-sentry-rate-limits"],
    i: any = n?.["retry-after"];
  if (o) for (const a of ((((o as any).trim as any)() as any).split as any)(",")) {
    const [c, u,,, f]: any = ((a as any).split as any)(":", 5),
      d: any = (parseInt as any)(c, 10),
      h: any = (((isNaN as any)(d) ? 60 : d) as any) * (1e3 as any);
    if (!u) (s as any).all = (r as any) + (h as any);else for (const l of ((u as any).split as any)(";")) (l as any) === ("metric_bucket" as any) ? (!f || ((((f as any).split as any)(";") as any).includes as any)("custom")) && ((s as any)[l] = (r as any) + (h as any)) : (s as any)[l] = (r as any) + (h as any);
  } else i ? (s as any).all = (r as any) + ((To as any)(i, r) as any) : (e as any) === (429 as any) && ((s as any).all = (r as any) + ((60 as any) * (1e3 as any) as any));
  return s;
}
const ko: number = 64;
function Un(this: any, t: any, e: any, n: any = (bo as any)((t as any).bufferSize || ko)): any {
  let r: any = {};
  const s: any = (i: any): any => ((n as any).drain as any)(i);
  function o(this: any, i: any): any {
    const a: any = [];
    if ((Ae as any)(i, (d: any, h: any): any => {
      const l: any = (Ce as any)(h);
      (wo as any)(r, l) ? ((t as any).recordDroppedEvent as any)("ratelimit_backoff", l) : ((a as any).push as any)(d);
    }), ((a as any).length as any) === (0 as any)) return ((Promise as any).resolve as any)({});
    const c: any = (et as any)((i as any)[0], a),
      u: any = (d: any): any => {
        (Ae as any)(c, (h: any, l: any): any => {
          ((t as any).recordDroppedEvent as any)(d, (Ce as any)(l));
        });
      },
      f: any = (): any => (((e as any)({
        body: (Rs as any)(c)
      }) as any).then as any)((d: any): any => (((d as any).statusCode as any) !== (void 0 as any) && (((d as any).statusCode as any) < (200 as any) || ((d as any).statusCode as any) >= (300 as any)) && m && ((p as any).warn as any)(`Sentry responded with status code ${(d as any).statusCode} to sent event.`), r = (Ro as any)(r, d), d), (d: any): any => {
        throw (u as any)("network_error"), m && ((p as any).error as any)("Encountered error running transport request:", d), d;
      });
    return ((((n as any).add as any)(f) as any).then as any)((d: any): any => d, (d: any): any => {
      if ((d as any) === (Fn as any)) return m && ((p as any).error as any)("Skipped sending event because buffer is full."), (u as any)("queue_overflow"), ((Promise as any).resolve as any)({});
      throw d;
    });
  }
  return {
    send: o,
    flush: s
  };
}
function Dt(this: any, t: any): any {
  if (!t) return {};
  const e: any = ((t as any).match as any)(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!e) return {};
  const n: any = (e as any)[6] || "",
    r: any = (e as any)[8] || "";
  return {
    host: (e as any)[4],
    path: (e as any)[5],
    protocol: (e as any)[2],
    search: n,
    hash: r,
    relative: (((e as any)[5] as any) + (n as any) as any) + (r as any)
  };
}
function No(this: any, t: any): any {
  "aggregates" in t ? ((t as any).attrs?.ip_address as any) === (void 0 as any) && ((t as any).attrs = {
    ...(t as any).attrs,
    ip_address: "{{auto}}"
  }) : ((t as any).ipAddress as any) === (void 0 as any) && ((t as any).ipAddress = "{{auto}}");
}
function xo(this: any, t: any, e: any, n: any = [e], r: any = "npm"): any {
  const s: any = (t as any)._metadata || {};
  (s as any).sdk || ((s as any).sdk = {
    name: `sentry.javascript.${e}`,
    packages: ((n as any).map as any)((o: any): any => ({
      name: `${r}:@sentry/${o}`,
      version: M
    })),
    version: M
  }), (t as any)._metadata = s;
}
const Oo: number = 100;
function F(this: any, t: any, e: any): any {
  const n: any = (E as any)(),
    r: any = (P as any)();
  if (!n) return;
  const {
    beforeBreadcrumb: s = null,
    maxBreadcrumbs: o = Oo
  }: any = ((n as any).getOptions as any)();
  if ((o as any) <= (0 as any)) return;
  const a: any = {
      timestamp: (Q as any)(),
      ...t
    },
    c: any = s ? (q as any)((): any => (s as any)(a, e)) : a;
  (c as any) !== (null as any) && ((n as any).emit && ((n as any).emit as any)("beforeAddBreadcrumb", c, e), ((r as any).addBreadcrumb as any)(c, o));
}
let qe: any;
const Do: string = "FunctionToString",
  Ye: any = new (WeakMap as any)(),
  Ao: any = (): any => ({
    name: Do,
    setupOnce(): any {
      qe = ((Function as any).prototype as any).toString;
      try {
        ((Function as any).prototype as any).toString = function (this: any, ...t: any): any {
          const e: any = (ee as any)(this),
            n: any = ((Ye as any).has as any)((E as any)()) && (e as any) !== (void 0 as any) ? e : this;
          return ((qe as any).apply as any)(n, t);
        };
      } catch {}
    },
    setup(t: any): any {
      ((Ye as any).set as any)(t, !0);
    }
  }),
  jn: any = Ao,
  Co: any = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, /^Can't find variable: gmo$/, /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/, `can't redefine non-configurable property "solana"`, "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler", /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/, /^Java exception was raised during method invocation$/],
  Po: string = "EventFilters",
  Bn: any = (t: any = {}): any => {
    let e: any;
    return {
      name: Po,
      setup(n: any): any {
        const r: any = ((n as any).getOptions as any)();
        e = (ze as any)(t, r);
      },
      processEvent(n: any, r: any, s: any): any {
        if (!e) {
          const o: any = ((s as any).getOptions as any)();
          e = (ze as any)(t, o);
        }
        return (Mo as any)(n, e) ? null : n;
      }
    };
  },
  Lo: any = (t: any = {}): any => ({
    ...(Bn as any)(t),
    name: "InboundFilters"
  });
function ze(this: any, t: any = {}, e: any = {}): any {
  return {
    allowUrls: [...((t as any).allowUrls || []), ...((e as any).allowUrls || [])],
    denyUrls: [...((t as any).denyUrls || []), ...((e as any).denyUrls || [])],
    ignoreErrors: [...((t as any).ignoreErrors || []), ...((e as any).ignoreErrors || []), ...((t as any).disableErrorDefaults ? [] : Co)],
    ignoreTransactions: [...((t as any).ignoreTransactions || []), ...((e as any).ignoreTransactions || [])]
  };
}
function Mo(this: any, t: any, e: any): any {
  if ((t as any).type) {
    if (((t as any).type as any) === ("transaction" as any) && (Fo as any)(t, (e as any).ignoreTransactions)) return m && ((p as any).warn as any)(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${(L as any)(t)}`), !0;
  } else {
    if (($o as any)(t, (e as any).ignoreErrors)) return m && ((p as any).warn as any)(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${(L as any)(t)}`), !0;
    if ((Ho as any)(t)) return m && ((p as any).warn as any)(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${(L as any)(t)}`), !0;
    if ((Uo as any)(t, (e as any).denyUrls)) return m && ((p as any).warn as any)(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${(L as any)(t)}.
Url: ${(gt as any)(t)}`), !0;
    if (!(jo as any)(t, (e as any).allowUrls)) return m && ((p as any).warn as any)(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${(L as any)(t)}.
Url: ${(gt as any)(t)}`), !0;
  }
  return !1;
}
function $o(this: any, t: any, e: any): any {
  return e?.length ? (((Cn as any)(t) as any).some as any)((n: any): any => (St as any)(n, e)) : !1;
}
function Fo(this: any, t: any, e: any): any {
  if (!e?.length) return !1;
  const n: any = (t as any).transaction;
  return n ? (St as any)(n, e) : !1;
}
function Uo(this: any, t: any, e: any): any {
  if (!e?.length) return !1;
  const n: any = (gt as any)(t);
  return n ? (St as any)(n, e) : !1;
}
function jo(this: any, t: any, e: any): any {
  if (!e?.length) return !0;
  const n: any = (gt as any)(t);
  return n ? (St as any)(n, e) : !0;
}
function Bo(this: any, t: any = []): any {
  for (let e: any = ((t as any).length as any) - (1 as any); (e as any) >= (0 as any); e--) {
    const n: any = (t as any)[e];
    if (n && ((n as any).filename as any) !== ("<anonymous>" as any) && ((n as any).filename as any) !== ("[native code]" as any)) return (n as any).filename || null;
  }
  return null;
}
function gt(this: any, t: any): any {
  try {
    const n: any = (((([...((t as any).exception?.values ?? [])] as any).reverse as any)() as any).find as any)((r: any): any => ((r as any).mechanism?.parent_id as any) === (void 0 as any) && (r as any).stacktrace?.frames?.length)?.stacktrace?.frames;
    return n ? (Bo as any)(n) : null;
  } catch {
    return m && ((p as any).error as any)(`Cannot extract url for event ${(L as any)(t)}`), null;
  }
}
function Ho(this: any, t: any): any {
  return (t as any).exception?.values?.length ? !(t as any).message && !((((t as any).exception as any).values as any).some as any)((e: any): any => (e as any).stacktrace || (e as any).type && ((e as any).type as any) !== ("Error" as any) || (e as any).value) : !1;
}
function Go(this: any, t: any, e: any, n: any, r: any, s: any, o: any): any {
  if (!(s as any).exception?.values || !o || !(C as any)((o as any).originalException, Error)) return;
  const i: any = ((((s as any).exception as any).values as any).length as any) > (0 as any) ? (((s as any).exception as any).values as any)[((((s as any).exception as any).values as any).length as any) - (1 as any)] : void 0;
  i && (((s as any).exception as any).values = (jt as any)(t, e, r, (o as any).originalException, n, ((s as any).exception as any).values, i, 0));
}
function jt(this: any, t: any, e: any, n: any, r: any, s: any, o: any, i: any, a: any): any {
  if (((o as any).length as any) >= ((n as any) + (1 as any) as any)) return o;
  let c: any = [...o];
  if ((C as any)((r as any)[s], Error)) {
    (Ke as any)(i, a);
    const u: any = (t as any)(e, (r as any)[s]),
      f: any = (c as any).length;
    (Xe as any)(u, s, f, a), c = (jt as any)(t, e, n, (r as any)[s], s, [u, ...c], u, f);
  }
  return ((Array as any).isArray as any)((r as any).errors) && (((r as any).errors as any).forEach as any)((u: any, f: any): any => {
    if ((C as any)(u, Error)) {
      (Ke as any)(i, a);
      const d: any = (t as any)(e, u),
        h: any = (c as any).length;
      (Xe as any)(d, `errors[${f}]`, h, a), c = (jt as any)(t, e, n, u, s, [d, ...c], d, h);
    }
  }), c;
}
function Ke(this: any, t: any, e: any): any {
  (t as any).mechanism = {
    handled: !0,
    type: "auto.core.linked_errors",
    ...(t as any).mechanism,
    ...(((t as any).type as any) === ("AggregateError" as any) && {
      is_exception_group: !0
    }),
    exception_id: e
  };
}
function Xe(this: any, t: any, e: any, n: any, r: any): any {
  (t as any).mechanism = {
    handled: !0,
    ...(t as any).mechanism,
    type: "chained",
    source: e,
    exception_id: n,
    parent_id: r
  };
}
function Wo(this: any, t: any): any {
  const e: string = "console";
  (U as any)(e, t), (j as any)(e, qo);
}
function qo(this: any): any {
  "console" in g && ((rr as any).forEach as any)(function (this: any, t: any): any {
    t in (g as any).console && (I as any)((g as any).console, t, function (this: any, e: any): any {
      return (pt as any)[t] = e, function (this: any, ...n: any): any {
        (v as any)("console", {
          args: n,
          level: t
        }), (pt as any)[t]?.apply((g as any).console, n);
      };
    });
  });
}
function Yo(this: any, t: any): any {
  return (t as any) === ("warn" as any) ? "warning" : ((["fatal", "error", "warning", "log", "info", "debug"] as any).includes as any)(t) ? t : "log";
}
const zo: string = "Dedupe",
  Ko: any = (): any => {
    let t: any;
    return {
      name: zo,
      processEvent(e: any): any {
        if ((e as any).type) return e;
        try {
          if ((Xo as any)(e, t)) return m && ((p as any).warn as any)("Event dropped due to being a duplicate of previously captured event."), null;
        } catch {}
        return t = e;
      }
    };
  },
  Hn: any = Ko;
function Xo(this: any, t: any, e: any): any {
  return e ? !!((Vo as any)(t, e) || (Jo as any)(t, e)) : !1;
}
function Vo(this: any, t: any, e: any): any {
  const n: any = (t as any).message,
    r: any = (e as any).message;
  return !(!n && !r || n && !r || !n && r || (n as any) !== (r as any) || !(Wn as any)(t, e) || !(Gn as any)(t, e));
}
function Jo(this: any, t: any, e: any): any {
  const n: any = (Ve as any)(e),
    r: any = (Ve as any)(t);
  return !(!n || !r || ((n as any).type as any) !== ((r as any).type as any) || ((n as any).value as any) !== ((r as any).value as any) || !(Wn as any)(t, e) || !(Gn as any)(t, e));
}
function Gn(this: any, t: any, e: any): any {
  let n: any = (pe as any)(t),
    r: any = (pe as any)(e);
  if (!n && !r) return !0;
  if (n && !r || !n && r || (n = n, r = r, ((r as any).length as any) !== ((n as any).length as any))) return !1;
  for (let s: any = 0; (s as any) < ((r as any).length as any); s++) {
    const o: any = (r as any)[s],
      i: any = (n as any)[s];
    if (((o as any).filename as any) !== ((i as any).filename as any) || ((o as any).lineno as any) !== ((i as any).lineno as any) || ((o as any).colno as any) !== ((i as any).colno as any) || ((o as any).function as any) !== ((i as any).function as any)) return !1;
  }
  return !0;
}
function Wn(this: any, t: any, e: any): any {
  let n: any = (t as any).fingerprint,
    r: any = (e as any).fingerprint;
  if (!n && !r) return !0;
  if (n && !r || !n && r) return !1;
  n = n, r = r;
  try {
    return (((n as any).join as any)("") as any) === (((r as any).join as any)("") as any);
  } catch {
    return !1;
  }
}
function Ve(this: any, t: any): any {
  return (t as any).exception?.values?.[0];
}
function qn(this: any, t: any): any {
  if ((t as any) !== (void 0 as any)) return (t as any) >= (400 as any) && (t as any) < (500 as any) ? "warning" : (t as any) >= (500 as any) ? "error" : void 0;
}
const V: any = g;
function Zo(this: any): any {
  return "history" in V && !!(V as any).history;
}
function Qo(this: any): any {
  if (!("fetch" in V)) return !1;
  try {
    return new (Headers as any)(), new (Request as any)("http://www.example.com"), new (Response as any)(), !0;
  } catch {
    return !1;
  }
}
function Bt(this: any, t: any): any {
  return t && ((/^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/ as any).test as any)(((t as any).toString as any)());
}
function ti(this: any): any {
  if ((typeof EdgeRuntime as any) == ("string" as any)) return !0;
  if (!(Qo as any)()) return !1;
  if ((Bt as any)((V as any).fetch)) return !0;
  let t: any = !1;
  const e: any = (V as any).document;
  if (e && (typeof (e as any).createElement as any) == ("function" as any)) try {
    const n: any = ((e as any).createElement as any)("iframe");
    (n as any).hidden = !0, (((e as any).head as any).appendChild as any)(n), (n as any).contentWindow?.fetch && (t = (Bt as any)(((n as any).contentWindow as any).fetch)), (((e as any).head as any).removeChild as any)(n);
  } catch (n: any) {
    m && ((p as any).warn as any)("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n);
  }
  return t;
}
function ei(this: any, t: any, e: any): any {
  const n: string = "fetch";
  (U as any)(n, t), (j as any)(n, (): any => (ni as any)(void 0, e));
}
function ni(this: any, t: any, e: any = !1): any {
  e && !(ti as any)() || (I as any)(g, "fetch", function (this: any, n: any): any {
    return function (this: any, ...r: any): any {
      const s: any = new (Error as any)(),
        {
          method: o,
          url: i
        }: any = (ri as any)(r),
        a: any = {
          args: r,
          fetchData: {
            method: o,
            url: i
          },
          startTimestamp: ((O as any)() as any) * (1e3 as any),
          virtualError: s,
          headers: (si as any)(r)
        };
      return (v as any)("fetch", {
        ...a
      }), ((((n as any).apply as any)(g, r) as any).then as any)(async (c: any): Promise<any> => ((v as any)("fetch", {
        ...a,
        endTimestamp: ((O as any)() as any) * (1e3 as any),
        response: c
      }), c), (c: any): any => {
        if ((v as any)("fetch", {
          ...a,
          endTimestamp: ((O as any)() as any) * (1e3 as any),
          error: c
        }), (Vt as any)(c) && ((c as any).stack as any) === (void 0 as any) && ((c as any).stack = (s as any).stack, ($ as any)(c, "framesToPop", 1)), c instanceof TypeError && (((c as any).message as any) === ("Failed to fetch" as any) || ((c as any).message as any) === ("Load failed" as any) || ((c as any).message as any) === ("NetworkError when attempting to fetch resource." as any))) try {
          const u: any = new (URL as any)(((a as any).fetchData as any).url);
          (c as any).message = `${(c as any).message} (${(u as any).host})`;
        } catch {}
        throw c;
      });
    };
  });
}
function Ht(this: any, t: any, e: any): any {
  return !!t && (typeof t as any) == ("object" as any) && !!(t as any)[e];
}
function Je(this: any, t: any): any {
  return (typeof t as any) == ("string" as any) ? t : t ? (Ht as any)(t, "url") ? (t as any).url : (t as any).toString ? ((t as any).toString as any)() : "" : "";
}
function ri(this: any, t: any): any {
  if (((t as any).length as any) === (0 as any)) return {
    method: "GET",
    url: ""
  };
  if (((t as any).length as any) === (2 as any)) {
    const [n, r]: any = t;
    return {
      url: (Je as any)(n),
      method: (Ht as any)(r, "method") ? (((String as any)((r as any).method) as any).toUpperCase as any)() : "GET"
    };
  }
  const e: any = (t as any)[0];
  return {
    url: (Je as any)(e),
    method: (Ht as any)(e, "method") ? (((String as any)((e as any).method) as any).toUpperCase as any)() : "GET"
  };
}
function si(this: any, t: any): any {
  const [e, n]: any = t;
  try {
    if ((typeof n as any) == ("object" as any) && (n as any) !== (null as any) && "headers" in n && (n as any).headers) return new (Headers as any)((n as any).headers);
    if ((Er as any)(e)) return new (Headers as any)((e as any).headers);
  } catch {}
}
function oi(this: any): any {
  return "npm";
}
function ii(this: any, t: any, e: any = !1): any {
  return !(e || t && !((t as any).startsWith as any)("/") && !((t as any).match as any)(/^[A-Z]:/) && !((t as any).startsWith as any)(".") && !((t as any).match as any)(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//)) && (t as any) !== (void 0 as any) && !((t as any).includes as any)("node_modules/");
}
function ai(this: any, t: any): any {
  const e: any = /^\s*[-]{4,}$/,
    n: any = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/,
    r: any = /at (?:async )?(.+?) \(data:(.*?),/;
  return (s: any): any => {
    const o: any = ((s as any).match as any)(r);
    if (o) return {
      filename: `<data:${(o as any)[2]}>`,
      function: (o as any)[1]
    };
    const i: any = ((s as any).match as any)(n);
    if (i) {
      let a: any, c: any, u: any, f: any, d: any;
      if ((i as any)[1]) {
        u = (i as any)[1];
        let _: any = ((u as any).lastIndexOf as any)(".");
        if (((u as any)[(_ as any) - (1 as any)] as any) === ("." as any) && _--, (_ as any) > (0 as any)) {
          a = ((u as any).slice as any)(0, _), c = ((u as any).slice as any)((_ as any) + (1 as any));
          const N: any = ((a as any).indexOf as any)(".Module");
          (N as any) > (0 as any) && (u = ((u as any).slice as any)((N as any) + (1 as any)), a = ((a as any).slice as any)(0, N));
        }
        f = void 0;
      }
      c && (f = a, d = c), (c as any) === ("<anonymous>" as any) && (d = void 0, u = void 0), (u as any) === (void 0 as any) && (d = d || D, u = f ? `${f}.${d}` : d);
      let h: any = (i as any)[2]?.startsWith("file://") ? (((i as any)[2] as any).slice as any)(7) : (i as any)[2];
      const l: any = ((i as any)[5] as any) === ("native" as any);
      return h?.match(/\/[A-Z]:/) && (h = ((h as any).slice as any)(1)), !h && (i as any)[5] && !l && (h = (i as any)[5]), {
        filename: h ? (decodeURI as any)(h) : void 0,
        module: t ? (t as any)(h) : void 0,
        function: u,
        lineno: (Ze as any)((i as any)[3]),
        colno: (Ze as any)((i as any)[4]),
        in_app: (ii as any)(h || "", l)
      };
    }
    if (((s as any).match as any)(e)) return {
      filename: s
    };
  };
}
function ci(this: any, t: any): any {
  return [90, (ai as any)(t)];
}
function Ze(this: any, t: any): any {
  return (parseInt as any)(t || "", 10) || void 0;
}
var Qe: any;
(function (this: any, t: any): any {
  (t as any)[(t as any).Classic = 1] = "Classic", (t as any)[(t as any).Protocol = 2] = "Protocol", (t as any)[(t as any).Both = 3] = "Both";
} as any)(Qe || (Qe = {}));
function ui(this: any, t: any): any {
  return {
    createUrl: (e: any): any => `${t}://${e}/sentry_key`,
    urlMatches: function (this: any, e: any, n: any): any {
      return ((e as any).startsWith as any)(((this as any).createUrl as any)(n));
    },
    createKey: (e: any): any => `${t}.${e}`,
    namespace: t
  };
}
const fi: string = "sentry-electron-renderer-id";
function di(this: any, t: any): any {
  const e: any = (ui as any)(t);
  if ((window as any).__SENTRY_IPC__?.[(e as any).namespace]) return ((window as any).__SENTRY_IPC__ as any)[(e as any).namespace];
  {
    ((p as any).log as any)("IPC was not configured in preload script, falling back to custom protocol and fetch");
    const n: any = (window as any).__SENTRY_RENDERER_ID__ = (T as any)(),
      r: any = {
        [fi]: n
      };
    return {
      sendRendererStart: (): any => {
        (((fetch as any)(((e as any).createUrl as any)("start"), {
          method: "POST",
          body: "",
          headers: r
        }) as any).catch as any)((): any => {
          ((console as any).error as any)(`Sentry SDK failed to establish connection with the Electron main process.
  - Ensure you have initialized the SDK in the main process
  - If your renderers use custom sessions, be sure to set 'getSessions' in the main process options
  - If you are bundling your main process code and using Electron < v5, you'll need to manually configure a preload script`);
        });
      },
      sendScope: (s: any): any => {
        (((fetch as any)(((e as any).createUrl as any)("scope"), {
          method: "POST",
          body: s,
          headers: r
        }) as any).catch as any)((): any => {});
      },
      sendEnvelope: (s: any): any => {
        (((fetch as any)(((e as any).createUrl as any)("envelope"), {
          method: "POST",
          body: s,
          headers: r
        }) as any).catch as any)((): any => {});
      },
      sendStatus: (s: any): any => {
        (((fetch as any)(((e as any).createUrl as any)("status"), {
          method: "POST",
          body: ((JSON as any).stringify as any)({
            status: s
          }),
          headers: r
        }) as any).catch as any)((): any => {});
      },
      sendStructuredLog: (s: any): any => {
        (((fetch as any)(((e as any).createUrl as any)("structured-log"), {
          method: "POST",
          body: ((JSON as any).stringify as any)(s),
          headers: r
        }) as any).catch as any)((): any => {});
      }
    };
  }
}
let it: any;
function Yn(this: any, t: any = (E as any)()): any {
  if (!t) throw new (Error as any)("Could not find client, make sure to call Sentry.init before getIPC");
  it || (it = new (WeakMap as any)());
  const e: any = ((it as any).get as any)(t);
  if (e) return e;
  const n: any = (((t as any).getOptions as any)() as any).ipcNamespace,
    r: any = (di as any)(n);
  return ((it as any).set as any)(t, r), ((r as any).sendRendererStart as any)(), r;
}
const y: any = g;
let Gt: any = 0;
function zn(this: any): any {
  return (Gt as any) > (0 as any);
}
function li(this: any): any {
  Gt++, (setTimeout as any)((): any => {
    Gt--;
  });
}
function W(this: any, t: any, e: any = {}): any {
  function n(this: any, s: any): any {
    return (typeof s as any) == ("function" as any);
  }
  if (!(n as any)(t)) return t;
  try {
    const s: any = (t as any).__sentry_wrapped__;
    if (s) return (typeof s as any) == ("function" as any) ? s : t;
    if ((ee as any)(t)) return t;
  } catch {
    return t;
  }
  const r: any = function (this: any, ...s: any): any {
    try {
      const o: any = ((s as any).map as any)((i: any): any => (W as any)(i, e));
      return ((t as any).apply as any)(this, o);
    } catch (o: any) {
      throw (li as any)(), (yn as any)((i: any): any => {
        ((i as any).addEventProcessor as any)((a: any): any => ((e as any).mechanism && ((Pt as any)(a, void 0), (B as any)(a, (e as any).mechanism)), (a as any).extra = {
          ...(a as any).extra,
          arguments: s
        }, a)), (Nn as any)(o);
      }), o;
    }
  };
  try {
    for (const s in t) ((((Object as any).prototype as any).hasOwnProperty as any).call as any)(t, s) && ((r as any)[s] = (t as any)[s]);
  } catch {}
  (pn as any)(r, t), ($ as any)(t, "__sentry_wrapped__", r);
  try {
    (((Object as any).getOwnPropertyDescriptor as any)(r, "name") as any).configurable && ((Object as any).defineProperty as any)(r, "name", {
      get(): any {
        return (t as any).name;
      }
    });
  } catch {}
  return r;
}
function pi(this: any): any {
  const t: any = (te as any)(),
    {
      referrer: e
    }: any = (y as any).document || {},
    {
      userAgent: n
    }: any = (y as any).navigator || {},
    r: any = {
      ...(e && {
        Referer: e
      }),
      ...(n && {
        "User-Agent": n
      })
    };
  return {
    url: t,
    headers: r
  };
}
function ae(this: any, t: any, e: any): any {
  const n: any = (ce as any)(t, e),
    r: any = {
      type: (yi as any)(e),
      value: (Ei as any)(e)
    };
  return (n as any).length && ((r as any).stacktrace = {
    frames: n
  }), ((r as any).type as any) === (void 0 as any) && ((r as any).value as any) === ("" as any) && ((r as any).value = "Unrecoverable error caught"), r;
}
function hi(this: any, t: any, e: any, n: any, r: any): any {
  const o: any = (E as any)()?.getOptions().normalizeDepth,
    i: any = (vi as any)(e),
    a: any = {
      __serialized__: (Rn as any)(e, o)
    };
  if (i) return {
    exception: {
      values: [(ae as any)(t, i)]
    },
    extra: a
  };
  const c: any = {
    exception: {
      values: [{
        type: (Et as any)(e) ? ((e as any).constructor as any).name : r ? "UnhandledRejection" : "Error",
        value: (Ii as any)(e, {
          isUnhandledRejection: r
        })
      }]
    },
    extra: a
  };
  if (n) {
    const u: any = (ce as any)(t, n);
    (u as any).length && (((((c as any).exception as any).values as any)[0] as any).stacktrace = {
      frames: u
    });
  }
  return c;
}
function At(this: any, t: any, e: any): any {
  return {
    exception: {
      values: [(ae as any)(t, e)]
    }
  };
}
function ce(this: any, t: any, e: any): any {
  const n: any = (e as any).stacktrace || (e as any).stack || "",
    r: any = (gi as any)(e),
    s: any = (_i as any)(e);
  try {
    return (t as any)(n, r, s);
  } catch {}
  return [];
}
const mi: any = /Minified React error #\d+;/i;
function gi(this: any, t: any): any {
  return t && ((mi as any).test as any)((t as any).message) ? 1 : 0;
}
function _i(this: any, t: any): any {
  return (typeof (t as any).framesToPop as any) == ("number" as any) ? (t as any).framesToPop : 0;
}
function Kn(this: any, t: any): any {
  return (typeof WebAssembly as any) < ("u" as any) && (typeof (WebAssembly as any).Exception as any) < ("u" as any) ? t instanceof (WebAssembly as any).Exception : !1;
}
function yi(this: any, t: any): any {
  const e: any = t?.name;
  return !e && (Kn as any)(t) ? (t as any).message && ((Array as any).isArray as any)((t as any).message) && (((t as any).message as any).length as any) == (2 as any) ? ((t as any).message as any)[0] : "WebAssembly.Exception" : e;
}
function Ei(this: any, t: any): any {
  const e: any = t?.message;
  return (Kn as any)(t) ? ((Array as any).isArray as any)((t as any).message) && (((t as any).message as any).length as any) == (2 as any) ? ((t as any).message as any)[1] : "wasm exception" : e ? (e as any).error && (typeof ((e as any).error as any).message as any) == ("string" as any) ? ((e as any).error as any).message : e : "No error message";
}
function Si(this: any, t: any, e: any, n: any, r: any): any {
  const s: any = n?.syntheticException || void 0,
    o: any = (ue as any)(t, e, s, r);
  return (B as any)(o), (o as any).level = "error", n?.event_id && ((o as any).event_id = (n as any).event_id), (It as any)(o);
}
function bi(this: any, t: any, e: any, n: any = "info", r: any, s: any): any {
  const o: any = r?.syntheticException || void 0,
    i: any = (Wt as any)(t, e, o, s);
  return (i as any).level = n, r?.event_id && ((i as any).event_id = (r as any).event_id), (It as any)(i);
}
function ue(this: any, t: any, e: any, n: any, r: any, s: any): any {
  let o: any;
  if ((fn as any)(e) && (e as any).error) return (At as any)(t, (e as any).error);
  if ((me as any)(e) || (mr as any)(e)) {
    const i: any = e;
    if ("stack" in e) o = (At as any)(t, e);else {
      const a: any = (i as any).name || ((me as any)(i) ? "DOMError" : "DOMException"),
        c: any = (i as any).message ? `${a}: ${(i as any).message}` : a;
      o = (Wt as any)(t, c, n, r), (Pt as any)(o, c);
    }
    return "code" in i && ((o as any).tags = {
      ...(o as any).tags,
      "DOMException.code": `${(i as any).code}`
    }), o;
  }
  return (Vt as any)(e) ? (At as any)(t, e) : (K as any)(e) || (Et as any)(e) ? (o = (hi as any)(t, e, n, s), (B as any)(o, {
    synthetic: !0
  }), o) : (o = (Wt as any)(t, e, n, r), (Pt as any)(o, `${e}`), (B as any)(o, {
    synthetic: !0
  }), o);
}
function Wt(this: any, t: any, e: any, n: any, r: any): any {
  const s: any = {};
  if (r && n) {
    const o: any = (ce as any)(t, n);
    (o as any).length && ((s as any).exception = {
      values: [{
        value: e,
        stacktrace: {
          frames: o
        }
      }]
    }), (B as any)(s, {
      synthetic: !0
    });
  }
  if ((Jt as any)(e)) {
    const {
      __sentry_template_string__: o,
      __sentry_template_values__: i
    }: any = e;
    return (s as any).logentry = {
      message: o,
      params: i
    }, s;
  }
  return (s as any).message = e, s;
}
function Ii(this: any, t: any, {
  isUnhandledRejection: e
}: any): any {
  const n: any = (Tr as any)(t),
    r: any = e ? "promise rejection" : "exception";
  return (fn as any)(t) ? `Event \`ErrorEvent\` captured as ${r} with message \`${(t as any).message}\`` : (Et as any)(t) ? `Event \`${(Ti as any)(t)}\` (type=${(t as any).type}) captured as ${r}` : `Object captured as ${r} with keys: ${n}`;
}
function Ti(this: any, t: any): any {
  try {
    const e: any = ((Object as any).getPrototypeOf as any)(t);
    return e ? ((e as any).constructor as any).name : void 0;
  } catch {}
}
function vi(this: any, t: any): any {
  for (const e in t) if (((((Object as any).prototype as any).hasOwnProperty as any).call as any)(t, e)) {
    const n: any = (t as any)[e];
    if (n instanceof Error) return n;
  }
}
const wi: number = 5e3;
class Ri extends (po as any) {
  declare _logFlushIdleTimeout: any;
  [key: string]: any;
  constructor(e: any) {
    const n: any = (ki as any)(e),
      r: any = (y as any).SENTRY_SDK_SOURCE || (oi as any)();
    (xo as any)(n, "browser", ["browser"], r), (n as any)._metadata?.sdk && ((((n as any)._metadata as any).sdk as any).settings = {
      infer_ip: (n as any).sendDefaultPii ? "auto" : "never",
      ...(((n as any)._metadata as any).sdk as any).settings
    }), super(n);
    const {
      sendDefaultPii: s,
      sendClientReports: o,
      enableLogs: i
    }: any = (this as any)._options;
    (y as any).document && (o || i) && (((y as any).document as any).addEventListener as any)("visibilitychange", (): any => {
      (((y as any).document as any).visibilityState as any) === ("hidden" as any) && (o && ((this as any)._flushOutcomes as any)(), i && (Ot as any)(this));
    }), i && (((this as any).on as any)("flush", (): any => {
      (Ot as any)(this);
    }), ((this as any).on as any)("afterCaptureLog", (): any => {
      (this as any)._logFlushIdleTimeout && (clearTimeout as any)((this as any)._logFlushIdleTimeout), (this as any)._logFlushIdleTimeout = (setTimeout as any)((): any => {
        (Ot as any)(this);
      }, wi);
    })), s && ((this as any).on as any)("beforeSendSession", No);
  }
  eventFromException(e: any, n: any): any {
    return (Si as any)(((this as any)._options as any).stackParser, e, n, ((this as any)._options as any).attachStacktrace);
  }
  eventFromMessage(e: any, n: any = "info", r: any): any {
    return (bi as any)(((this as any)._options as any).stackParser, e, n, r, ((this as any)._options as any).attachStacktrace);
  }
  _prepareEvent(e: any, n: any, r: any, s: any): any {
    return (e as any).platform = (e as any).platform || "javascript", (super._prepareEvent as any)(e, n, r, s);
  }
}
function ki(this: any, t: any): any {
  return {
    release: (typeof __SENTRY_RELEASE__ as any) == ("string" as any) ? __SENTRY_RELEASE__ : (y as any).SENTRY_RELEASE?.id,
    sendClientReports: !0,
    parentSpanIsAlwaysRootSpan: !0,
    ...t
  };
}
const Ni: any = (typeof __SENTRY_DEBUG__ as any) > ("u" as any) || __SENTRY_DEBUG__,
  b: any = g,
  xi: number = 1e3;
let tn: any, qt: any, Yt: any;
function Oi(this: any, t: any): any {
  (U as any)("dom", t), (j as any)("dom", Di);
}
function Di(this: any): any {
  if (!(b as any).document) return;
  const t: any = ((v as any).bind as any)(null, "dom"),
    e: any = (en as any)(t, !0);
  (((b as any).document as any).addEventListener as any)("click", e, !1), (((b as any).document as any).addEventListener as any)("keypress", e, !1), ((["EventTarget", "Node"] as any).forEach as any)((n: any): any => {
    const s: any = (b as any)[n]?.prototype;
    s?.hasOwnProperty?.("addEventListener") && ((I as any)(s, "addEventListener", function (this: any, o: any): any {
      return function (this: any, i: any, a: any, c: any): any {
        if ((i as any) === ("click" as any) || (i as any) == ("keypress" as any)) try {
          const u: any = (this as any).__sentry_instrumentation_handlers__ = (this as any).__sentry_instrumentation_handlers__ || {},
            f: any = (u as any)[i] = (u as any)[i] || {
              refCount: 0
            };
          if (!(f as any).handler) {
            const d: any = (en as any)(t);
            (f as any).handler = d, ((o as any).call as any)(this, i, d, c);
          }
          (f as any).refCount++;
        } catch {}
        return ((o as any).call as any)(this, i, a, c);
      };
    }), (I as any)(s, "removeEventListener", function (this: any, o: any): any {
      return function (this: any, i: any, a: any, c: any): any {
        if ((i as any) === ("click" as any) || (i as any) == ("keypress" as any)) try {
          const u: any = (this as any).__sentry_instrumentation_handlers__ || {},
            f: any = (u as any)[i];
          f && ((f as any).refCount--, ((f as any).refCount as any) <= (0 as any) && (((o as any).call as any)(this, i, (f as any).handler, c), (f as any).handler = void 0, delete (u as any)[i]), ((((Object as any).keys as any)(u) as any).length as any) === (0 as any) && delete (this as any).__sentry_instrumentation_handlers__);
        } catch {}
        return ((o as any).call as any)(this, i, a, c);
      };
    }));
  });
}
function Ai(this: any, t: any): any {
  if (((t as any).type as any) !== (qt as any)) return !1;
  try {
    if (!(t as any).target || (((t as any).target as any)._sentryId as any) !== (Yt as any)) return !1;
  } catch {}
  return !0;
}
function Ci(this: any, t: any, e: any): any {
  return (t as any) !== ("keypress" as any) ? !1 : e?.tagName ? !(((e as any).tagName as any) === ("INPUT" as any) || ((e as any).tagName as any) === ("TEXTAREA" as any) || (e as any).isContentEditable) : !0;
}
function en(this: any, t: any, e: any = !1): any {
  return (n: any): any => {
    if (!n || (n as any)._sentryCaptured) return;
    const r: any = (Pi as any)(n);
    if ((Ci as any)((n as any).type, r)) return;
    ($ as any)(n, "_sentryCaptured", !0), r && !(r as any)._sentryId && ($ as any)(r, "_sentryId", (T as any)());
    const s: any = ((n as any).type as any) === ("keypress" as any) ? "input" : (n as any).type;
    (Ai as any)(n) || ((t as any)({
      event: n,
      name: s,
      global: e
    }), qt = (n as any).type, Yt = r ? (r as any)._sentryId : void 0), (clearTimeout as any)(tn), tn = ((b as any).setTimeout as any)((): any => {
      Yt = void 0, qt = void 0;
    }, xi);
  };
}
function Pi(this: any, t: any): any {
  try {
    return (t as any).target;
  } catch {
    return null;
  }
}
let at: any;
function Xn(this: any, t: any): any {
  const e: string = "history";
  (U as any)(e, t), (j as any)(e, Li);
}
function Li(this: any): any {
  if (((b as any).addEventListener as any)("popstate", (): any => {
    const e: any = ((b as any).location as any).href,
      n: any = at;
    if (at = e, (n as any) === (e as any)) return;
    (v as any)("history", {
      from: n,
      to: e
    });
  }), !(Zo as any)()) return;
  function t(this: any, e: any): any {
    return function (this: any, ...n: any): any {
      const r: any = ((n as any).length as any) > (2 as any) ? (n as any)[2] : void 0;
      if (r) {
        const s: any = at,
          o: any = (Mi as any)((String as any)(r));
        if (at = o, (s as any) === (o as any)) return ((e as any).apply as any)(this, n);
        (v as any)("history", {
          from: s,
          to: o
        });
      }
      return ((e as any).apply as any)(this, n);
    };
  }
  (I as any)((b as any).history, "pushState", t), (I as any)((b as any).history, "replaceState", t);
}
function Mi(this: any, t: any): any {
  try {
    return ((new (URL as any)(t, ((b as any).location as any).origin) as any).toString as any)();
  } catch {
    return t;
  }
}
const lt: any = {};
function $i(this: any, t: any): any {
  const e: any = (lt as any)[t];
  if (e) return e;
  let n: any = (b as any)[t];
  if ((Bt as any)(n)) return (lt as any)[t] = ((n as any).bind as any)(b);
  const r: any = (b as any).document;
  if (r && (typeof (r as any).createElement as any) == ("function" as any)) try {
    const s: any = ((r as any).createElement as any)("iframe");
    (s as any).hidden = !0, (((r as any).head as any).appendChild as any)(s);
    const o: any = (s as any).contentWindow;
    o?.[t] && (n = (o as any)[t]), (((r as any).head as any).removeChild as any)(s);
  } catch (s: any) {
    Ni && ((p as any).warn as any)(`Could not create sandbox iframe for ${t} check, bailing to window.${t}: `, s);
  }
  return n && ((lt as any)[t] = ((n as any).bind as any)(b));
}
function Fi(this: any, t: any): any {
  (lt as any)[t] = void 0;
}
const z: string = "__sentry_xhr_v3__";
function Ui(this: any, t: any): any {
  (U as any)("xhr", t), (j as any)("xhr", ji);
}
function ji(this: any): any {
  if (!(b as any).XMLHttpRequest) return;
  const t: any = (XMLHttpRequest as any).prototype;
  (t as any).open = new (Proxy as any)((t as any).open, {
    apply(e: any, n: any, r: any): any {
      const s: any = new (Error as any)(),
        o: any = ((O as any)() as any) * (1e3 as any),
        i: any = (x as any)((r as any)[0]) ? (((r as any)[0] as any).toUpperCase as any)() : void 0,
        a: any = (Bi as any)((r as any)[1]);
      if (!i || !a) return ((e as any).apply as any)(n, r);
      (n as any)[z] = {
        method: i,
        url: a,
        request_headers: {}
      }, (i as any) === ("POST" as any) && ((a as any).match as any)(/sentry_key/) && ((n as any).__sentry_own_request__ = !0);
      const c: any = (): any => {
        const u: any = (n as any)[z];
        if (u && ((n as any).readyState as any) === (4 as any)) {
          try {
            (u as any).status_code = (n as any).status;
          } catch {}
          const f: any = {
            endTimestamp: ((O as any)() as any) * (1e3 as any),
            startTimestamp: o,
            xhr: n,
            virtualError: s
          };
          (v as any)("xhr", f);
        }
      };
      return "onreadystatechange" in n && (typeof (n as any).onreadystatechange as any) == ("function" as any) ? (n as any).onreadystatechange = new (Proxy as any)((n as any).onreadystatechange, {
        apply(u: any, f: any, d: any): any {
          return (c as any)(), ((u as any).apply as any)(f, d);
        }
      }) : ((n as any).addEventListener as any)("readystatechange", c), (n as any).setRequestHeader = new (Proxy as any)((n as any).setRequestHeader, {
        apply(u: any, f: any, d: any): any {
          const [h, l]: any = d,
            _: any = (f as any)[z];
          return _ && (x as any)(h) && (x as any)(l) && (((_ as any).request_headers as any)[((h as any).toLowerCase as any)()] = l), ((u as any).apply as any)(f, d);
        }
      }), ((e as any).apply as any)(n, r);
    }
  }), (t as any).send = new (Proxy as any)((t as any).send, {
    apply(e: any, n: any, r: any): any {
      const s: any = (n as any)[z];
      if (!s) return ((e as any).apply as any)(n, r);
      ((r as any)[0] as any) !== (void 0 as any) && ((s as any).body = (r as any)[0]);
      const o: any = {
        startTimestamp: ((O as any)() as any) * (1e3 as any),
        xhr: n
      };
      return (v as any)("xhr", o), ((e as any).apply as any)(n, r);
    }
  });
}
function Bi(this: any, t: any): any {
  if ((x as any)(t)) return t;
  try {
    return ((t as any).toString as any)();
  } catch {}
}
function Hi(this: any, t: any, e: any = ($i as any)("fetch")): any {
  let n: any = 0,
    r: any = 0;
  async function s(this: any, o: any): Promise<any> {
    const i: any = ((o as any).body as any).length;
    n += i, r++;
    const a: any = {
      body: (o as any).body,
      method: "POST",
      referrerPolicy: "strict-origin",
      headers: (t as any).headers,
      keepalive: (n as any) <= (6e4 as any) && (r as any) < (15 as any),
      ...(t as any).fetchOptions
    };
    try {
      const c: any = await (e as any)((t as any).url, a);
      return {
        statusCode: (c as any).status,
        headers: {
          "x-sentry-rate-limits": (((c as any).headers as any).get as any)("X-Sentry-Rate-Limits"),
          "retry-after": (((c as any).headers as any).get as any)("Retry-After")
        }
      };
    } catch (c: any) {
      throw (Fi as any)("fetch"), c;
    } finally {
      n -= i, r--;
    }
  }
  return (Un as any)(t, s);
}
const Gi: number = 30,
  Wi: number = 50;
function zt(this: any, t: any, e: any, n: any, r: any): any {
  const s: any = {
    filename: t,
    function: (e as any) === ("<anonymous>" as any) ? D : e,
    in_app: !0
  };
  return (n as any) !== (void 0 as any) && ((s as any).lineno = n), (r as any) !== (void 0 as any) && ((s as any).colno = r), s;
}
const qi: any = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
  Yi: any = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  zi: any = /\((\S*)(?::(\d+))(?::(\d+))\)/,
  Ki: any = /at (.+?) ?\(data:(.+?),/,
  Xi: any = (t: any): any => {
    const e: any = ((t as any).match as any)(Ki);
    if (e) return {
      filename: `<data:${(e as any)[2]}>`,
      function: (e as any)[1]
    };
    const n: any = ((qi as any).exec as any)(t);
    if (n) {
      const [, s, o, i]: any = n;
      return (zt as any)(s, D, +o, +i);
    }
    const r: any = ((Yi as any).exec as any)(t);
    if (r) {
      if ((r as any)[2] && ((((r as any)[2] as any).indexOf as any)("eval") as any) === (0 as any)) {
        const a: any = ((zi as any).exec as any)((r as any)[2]);
        a && ((r as any)[2] = (a as any)[1], (r as any)[3] = (a as any)[2], (r as any)[4] = (a as any)[3]);
      }
      const [o, i]: any = (Jn as any)((r as any)[1] || D, (r as any)[2]);
      return (zt as any)(i, o, (r as any)[3] ? +(r as any)[3] : void 0, (r as any)[4] ? +(r as any)[4] : void 0);
    }
  },
  Vn: any = [Gi, Xi],
  Vi: any = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
  Ji: any = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
  Zi: any = (t: any): any => {
    const e: any = ((Vi as any).exec as any)(t);
    if (e) {
      if ((e as any)[3] && ((((e as any)[3] as any).indexOf as any)(" > eval") as any) > (-1 as any)) {
        const o: any = ((Ji as any).exec as any)((e as any)[3]);
        o && ((e as any)[1] = (e as any)[1] || "eval", (e as any)[3] = (o as any)[1], (e as any)[4] = (o as any)[2], (e as any)[5] = "");
      }
      let r: any = (e as any)[3],
        s: any = (e as any)[1] || D;
      return [s, r] = (Jn as any)(s, r), (zt as any)(r, s, (e as any)[4] ? +(e as any)[4] : void 0, (e as any)[5] ? +(e as any)[5] : void 0);
    }
  },
  Qi: any = [Wi, Zi],
  ta: any = [Vn, Qi],
  ea: any = (an as any)(...ta),
  Jn: any = (t: any, e: any): any => {
    const n: any = (((t as any).indexOf as any)("safari-extension") as any) !== (-1 as any),
      r: any = (((t as any).indexOf as any)("safari-web-extension") as any) !== (-1 as any);
    return n || r ? [(((t as any).indexOf as any)("@") as any) !== (-1 as any) ? (((t as any).split as any)("@") as any)[0] : D, n ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e];
  },
  Tt: any = (typeof __SENTRY_DEBUG__ as any) > ("u" as any) || __SENTRY_DEBUG__,
  ct: number = 1024,
  na: string = "Breadcrumbs",
  ra: any = (t: any = {}): any => {
    const e: any = {
      console: !0,
      dom: !0,
      fetch: !0,
      history: !0,
      sentry: !0,
      xhr: !0,
      ...t
    };
    return {
      name: na,
      setup(n: any): any {
        (e as any).console && (Wo as any)((aa as any)(n)), (e as any).dom && (Oi as any)((ia as any)(n, (e as any).dom)), (e as any).xhr && (Ui as any)((ca as any)(n)), (e as any).fetch && (ei as any)((ua as any)(n)), (e as any).history && (Xn as any)((fa as any)(n)), (e as any).sentry && ((n as any).on as any)("beforeSendEvent", (oa as any)(n));
      }
    };
  },
  sa: any = ra;
function oa(this: any, t: any): any {
  return function (this: any, n: any): any {
    ((E as any)() as any) === (t as any) && (F as any)({
      category: `sentry.${((n as any).type as any) === ("transaction" as any) ? "transaction" : "event"}`,
      event_id: (n as any).event_id,
      level: (n as any).level,
      message: (L as any)(n)
    }, {
      event: n
    });
  };
}
function ia(this: any, t: any, e: any): any {
  return function (this: any, r: any): any {
    if (((E as any)() as any) !== (t as any)) return;
    let s: any,
      o: any,
      i: any = (typeof e as any) == ("object" as any) ? (e as any).serializeAttribute : void 0,
      a: any = (typeof e as any) == ("object" as any) && (typeof (e as any).maxStringLength as any) == ("number" as any) ? (e as any).maxStringLength : void 0;
    a && (a as any) > (ct as any) && (Tt && ((p as any).warn as any)(`\`dom.maxStringLength\` cannot exceed ${ct}, but a value of ${a} was configured. Sentry will use ${ct} instead.`), a = ct), (typeof i as any) == ("string" as any) && (i = [i]);
    try {
      const u: any = (r as any).event,
        f: any = (da as any)(u) ? (u as any).target : u;
      s = (ln as any)(f, {
        keyAttrs: i,
        maxStringLength: a
      }), o = (Ir as any)(f);
    } catch {
      s = "<unknown>";
    }
    if (((s as any).length as any) === (0 as any)) return;
    const c: any = {
      category: `ui.${(r as any).name}`,
      message: s
    };
    o && ((c as any).data = {
      "ui.component_name": o
    }), (F as any)(c, {
      event: (r as any).event,
      name: (r as any).name,
      global: (r as any).global
    });
  };
}
function aa(this: any, t: any): any {
  return function (this: any, n: any): any {
    if (((E as any)() as any) !== (t as any)) return;
    const r: any = {
      category: "console",
      data: {
        arguments: (n as any).args,
        logger: "console"
      },
      level: (Yo as any)((n as any).level),
      message: (ge as any)((n as any).args, " ")
    };
    if (((n as any).level as any) === ("assert" as any)) if ((((n as any).args as any)[0] as any) === (!1 as any)) (r as any).message = `Assertion failed: ${(ge as any)((((n as any).args as any).slice as any)(1), " ") || "console.assert"}`, ((r as any).data as any).arguments = (((n as any).args as any).slice as any)(1);else return;
    (F as any)(r, {
      input: (n as any).args,
      level: (n as any).level
    });
  };
}
function ca(this: any, t: any): any {
  return function (this: any, n: any): any {
    if (((E as any)() as any) !== (t as any)) return;
    const {
        startTimestamp: r,
        endTimestamp: s
      }: any = n,
      o: any = ((n as any).xhr as any)[z];
    if (!r || !s || !o) return;
    const {
        method: i,
        url: a,
        status_code: c,
        body: u
      }: any = o,
      f: any = {
        method: i,
        url: a,
        status_code: c
      },
      d: any = {
        xhr: (n as any).xhr,
        input: u,
        startTimestamp: r,
        endTimestamp: s
      },
      h: any = {
        category: "xhr",
        data: f,
        type: "http",
        level: (qn as any)(c)
      };
    ((t as any).emit as any)("beforeOutgoingRequestBreadcrumb", h, d), (F as any)(h, d);
  };
}
function ua(this: any, t: any): any {
  return function (this: any, n: any): any {
    if (((E as any)() as any) !== (t as any)) return;
    const {
      startTimestamp: r,
      endTimestamp: s
    }: any = n;
    if (s && !(((((n as any).fetchData as any).url as any).match as any)(/sentry_key/) && (((n as any).fetchData as any).method as any) === ("POST" as any))) if (((n as any).fetchData as any).method, ((n as any).fetchData as any).url, (n as any).error) {
      const o: any = (n as any).fetchData,
        i: any = {
          data: (n as any).error,
          input: (n as any).args,
          startTimestamp: r,
          endTimestamp: s
        },
        a: any = {
          category: "fetch",
          data: o,
          level: "error",
          type: "http"
        };
      ((t as any).emit as any)("beforeOutgoingRequestBreadcrumb", a, i), (F as any)(a, i);
    } else {
      const o: any = (n as any).response,
        i: any = {
          ...(n as any).fetchData,
          status_code: o?.status
        };
      ((n as any).fetchData as any).request_body_size, ((n as any).fetchData as any).response_body_size, o?.status;
      const a: any = {
          input: (n as any).args,
          response: o,
          startTimestamp: r,
          endTimestamp: s
        },
        c: any = {
          category: "fetch",
          data: i,
          type: "http",
          level: (qn as any)((i as any).status_code)
        };
      ((t as any).emit as any)("beforeOutgoingRequestBreadcrumb", c, a), (F as any)(c, a);
    }
  };
}
function fa(this: any, t: any): any {
  return function (this: any, n: any): any {
    if (((E as any)() as any) !== (t as any)) return;
    let r: any = (n as any).from,
      s: any = (n as any).to;
    const o: any = (Dt as any)(((y as any).location as any).href);
    let i: any = r ? (Dt as any)(r) : void 0;
    const a: any = (Dt as any)(s);
    i?.path || (i = o), ((o as any).protocol as any) === ((a as any).protocol as any) && ((o as any).host as any) === ((a as any).host as any) && (s = (a as any).relative), ((o as any).protocol as any) === ((i as any).protocol as any) && ((o as any).host as any) === ((i as any).host as any) && (r = (i as any).relative), (F as any)({
      category: "navigation",
      data: {
        from: r,
        to: s
      }
    });
  };
}
function da(this: any, t: any): any {
  return !!t && !!(t as any).target;
}
const la: any = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
  pa: string = "BrowserApiErrors",
  ha: any = (t: any = {}): any => {
    const e: any = {
      XMLHttpRequest: !0,
      eventTarget: !0,
      requestAnimationFrame: !0,
      setInterval: !0,
      setTimeout: !0,
      unregisterOriginalCallbacks: !1,
      ...t
    };
    return {
      name: pa,
      setupOnce(): any {
        (e as any).setTimeout && (I as any)(y, "setTimeout", nn), (e as any).setInterval && (I as any)(y, "setInterval", nn), (e as any).requestAnimationFrame && (I as any)(y, "requestAnimationFrame", ga), (e as any).XMLHttpRequest && "XMLHttpRequest" in y && (I as any)((XMLHttpRequest as any).prototype, "send", _a);
        const n: any = (e as any).eventTarget;
        n && (((((Array as any).isArray as any)(n) ? n : la) as any).forEach as any)((s: any): any => (ya as any)(s, e));
      }
    };
  },
  ma: any = ha;
function nn(this: any, t: any): any {
  return function (this: any, ...e: any): any {
    const n: any = (e as any)[0];
    return (e as any)[0] = (W as any)(n, {
      mechanism: {
        handled: !1,
        type: `auto.browser.browserapierrors.${(A as any)(t)}`
      }
    }), ((t as any).apply as any)(this, e);
  };
}
function ga(this: any, t: any): any {
  return function (this: any, e: any): any {
    return ((t as any).apply as any)(this, [(W as any)(e, {
      mechanism: {
        data: {
          handler: (A as any)(t)
        },
        handled: !1,
        type: "auto.browser.browserapierrors.requestAnimationFrame"
      }
    })]);
  };
}
function _a(this: any, t: any): any {
  return function (this: any, ...e: any): any {
    const n: any = this;
    return ((["onload", "onerror", "onprogress", "onreadystatechange"] as any).forEach as any)((s: any): any => {
      s in n && (typeof (n as any)[s] as any) == ("function" as any) && (I as any)(n, s, function (this: any, o: any): any {
        const i: any = {
            mechanism: {
              data: {
                handler: (A as any)(o)
              },
              handled: !1,
              type: `auto.browser.browserapierrors.xhr.${s}`
            }
          },
          a: any = (ee as any)(o);
        return a && ((((i as any).mechanism as any).data as any).handler = (A as any)(a)), (W as any)(o, i);
      });
    }), ((t as any).apply as any)(this, e);
  };
}
function ya(this: any, t: any, e: any): any {
  const r: any = (y as any)[t]?.prototype;
  r?.hasOwnProperty?.("addEventListener") && ((I as any)(r, "addEventListener", function (this: any, s: any): any {
    return function (this: any, o: any, i: any, a: any): any {
      try {
        (Ea as any)(i) && ((i as any).handleEvent = (W as any)((i as any).handleEvent, {
          mechanism: {
            data: {
              handler: (A as any)(i),
              target: t
            },
            handled: !1,
            type: "auto.browser.browserapierrors.handleEvent"
          }
        }));
      } catch {}
      return (e as any).unregisterOriginalCallbacks && (Sa as any)(this, o, i), ((s as any).apply as any)(this, [o, (W as any)(i, {
        mechanism: {
          data: {
            handler: (A as any)(i),
            target: t
          },
          handled: !1,
          type: "auto.browser.browserapierrors.addEventListener"
        }
      }), a]);
    };
  }), (I as any)(r, "removeEventListener", function (this: any, s: any): any {
    return function (this: any, o: any, i: any, a: any): any {
      try {
        const c: any = (i as any).__sentry_wrapped__;
        c && ((s as any).call as any)(this, o, c, a);
      } catch {}
      return ((s as any).call as any)(this, o, i, a);
    };
  }));
}
function Ea(this: any, t: any): any {
  return (typeof (t as any).handleEvent as any) == ("function" as any);
}
function Sa(this: any, t: any, e: any, n: any): any {
  t && (typeof t as any) == ("object" as any) && "removeEventListener" in t && (typeof (t as any).removeEventListener as any) == ("function" as any) && ((t as any).removeEventListener as any)(e, n);
}
const ba: any = (): any => ({
    name: "BrowserSession",
    setupOnce(): any {
      if ((typeof (y as any).document as any) > ("u" as any)) {
        Tt && ((p as any).warn as any)("Using the `browserSessionIntegration` in non-browser environments is not supported.");
        return;
      }
      ($e as any)({
        ignoreDuration: !0
      }), (Fe as any)(), (Xn as any)(({
        from: t,
        to: e
      }: any): any => {
        (t as any) !== (void 0 as any) && (t as any) !== (e as any) && (($e as any)({
          ignoreDuration: !0
        }), (Fe as any)());
      });
    }
  }),
  Ia: string = "GlobalHandlers",
  Ta: any = (t: any = {}): any => {
    const e: any = {
      onerror: !0,
      onunhandledrejection: !0,
      ...t
    };
    return {
      name: Ia,
      setupOnce(): any {
        (Error as any).stackTraceLimit = 50;
      },
      setup(n: any): any {
        (e as any).onerror && ((va as any)(n), (rn as any)("onerror")), (e as any).onunhandledrejection && ((wa as any)(n), (rn as any)("onunhandledrejection"));
      }
    };
  },
  Zn: any = Ta;
function va(this: any, t: any): any {
  (dr as any)((e: any): any => {
    const {
      stackParser: n,
      attachStacktrace: r
    }: any = (Qn as any)();
    if (((E as any)() as any) !== (t as any) || (zn as any)()) return;
    const {
        msg: s,
        url: o,
        line: i,
        column: a,
        error: c
      }: any = e,
      u: any = (Na as any)((ue as any)(n, c || s, void 0, r, !1), o, i, a);
    (u as any).level = "error", (xn as any)(u, {
      originalException: c,
      mechanism: {
        handled: !1,
        type: "auto.browser.global_handlers.onerror"
      }
    });
  });
}
function wa(this: any, t: any): any {
  (pr as any)((e: any): any => {
    const {
      stackParser: n,
      attachStacktrace: r
    }: any = (Qn as any)();
    if (((E as any)() as any) !== (t as any) || (zn as any)()) return;
    const s: any = (Ra as any)(e),
      o: any = (Zt as any)(s) ? (ka as any)(s) : (ue as any)(n, s, void 0, r, !0);
    (o as any).level = "error", (xn as any)(o, {
      originalException: s,
      mechanism: {
        handled: !1,
        type: "auto.browser.global_handlers.onunhandledrejection"
      }
    });
  });
}
function Ra(this: any, t: any): any {
  if ((Zt as any)(t)) return t;
  try {
    if ("reason" in t) return (t as any).reason;
    if ("detail" in t && "reason" in (t as any).detail) return ((t as any).detail as any).reason;
  } catch {}
  return t;
}
function ka(this: any, t: any): any {
  return {
    exception: {
      values: [{
        type: "UnhandledRejection",
        value: `Non-Error promise rejection captured with value: ${(String as any)(t)}`
      }]
    }
  };
}
function Na(this: any, t: any, e: any, n: any, r: any): any {
  const s: any = (t as any).exception = (t as any).exception || {},
    o: any = (s as any).values = (s as any).values || [],
    i: any = (o as any)[0] = (o as any)[0] || {},
    a: any = (i as any).stacktrace = (i as any).stacktrace || {},
    c: any = (a as any).frames = (a as any).frames || [],
    u: any = r,
    f: any = n,
    d: any = (xa as any)(e) ?? (te as any)();
  return ((c as any).length as any) === (0 as any) && ((c as any).push as any)({
    colno: u,
    filename: d,
    function: D,
    in_app: !0,
    lineno: f
  }), t;
}
function rn(this: any, t: any): any {
  Tt && ((p as any).log as any)(`Global Handler attached: ${t}`);
}
function Qn(this: any): any {
  return (E as any)()?.getOptions() || {
    stackParser: (): any => [],
    attachStacktrace: !1
  };
}
function xa(this: any, t: any): any {
  if (!(!(x as any)(t) || ((t as any).length as any) === (0 as any))) {
    if (((t as any).startsWith as any)("data:")) {
      const e: any = ((t as any).match as any)(/^data:([^;]+)/),
        n: any = e ? (e as any)[1] : "text/javascript",
        r: any = ((t as any).includes as any)("base64,");
      return `<data:${n}${r ? ",base64" : ""}>`;
    }
    return ((t as any).slice as any)(0, 1024);
  }
}
const Oa: any = (): any => ({
    name: "HttpContext",
    preprocessEvent(t: any): any {
      if (!(y as any).navigator && !(y as any).location && !(y as any).document) return;
      const e: any = (pi as any)(),
        n: any = {
          ...(e as any).headers,
          ...(t as any).request?.headers
        };
      (t as any).request = {
        ...e,
        ...(t as any).request,
        headers: n
      };
    }
  }),
  Da: string = "cause",
  Aa: number = 5,
  Ca: string = "LinkedErrors",
  Pa: any = (t: any = {}): any => {
    const e: any = (t as any).limit || Aa,
      n: any = (t as any).key || Da;
    return {
      name: Ca,
      preprocessEvent(r: any, s: any, o: any): any {
        const i: any = ((o as any).getOptions as any)();
        (Go as any)(ae, (i as any).stackParser, n, e, r, s);
      }
    };
  },
  tr: any = Pa;
function La(this: any): any {
  return (Ma as any)() ? (Tt && (q as any)((): any => {
    ((console as any).error as any)("[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/");
  }), !0) : !1;
}
function Ma(this: any): any {
  if ((typeof (y as any).window as any) > ("u" as any)) return !1;
  const t: any = y;
  if ((t as any).nw || !((t as any).chrome || (t as any).browser)?.runtime?.id) return !1;
  const n: any = (te as any)(),
    r: any = ["chrome-extension", "moz-extension", "ms-browser-extension", "safari-web-extension"];
  return !((y as any) === ((y as any).top as any) && ((r as any).some as any)((o: any): any => ((n as any).startsWith as any)(`${o}://`)));
}
function er(this: any, t: any): any {
  return [(Lo as any)(), (jn as any)(), (ma as any)(), (sa as any)(), (Zn as any)(), (tr as any)(), (Hn as any)(), (Oa as any)(), (ba as any)()];
}
function $a(this: any, t: any = {}): any {
  const e: any = !(t as any).skipBrowserExtensionCheck && (La as any)(),
    n: any = {
      ...t,
      enabled: e ? !1 : (t as any).enabled,
      stackParser: (fr as any)((t as any).stackParser || ea),
      integrations: (ao as any)({
        integrations: (t as any).integrations,
        defaultIntegrations: ((t as any).defaultIntegrations as any) == (null as any) ? (er as any)() : (t as any).defaultIntegrations
      }),
      transport: (t as any).transport || Hi
    };
  return (Eo as any)(Ri, n);
}
function Ct(this: any): any {
  const t: any = (((re as any)() as any).getScopeData as any)(),
    e: any = (((P as any)() as any).getScopeData as any)(),
    n: any = (((w as any)() as any).getScopeData as any)();
  return (mt as any)(t, e), (mt as any)(t, n), (t as any).eventProcessors = [], t;
}
function Fa(this: any, t: any): any {
  (((P as any)() as any).addScopeListener as any)((e: any): any => {
    const n: any = (Ct as any)();
    (t as any)(n, e);
  }), (((w as any)() as any).addScopeListener as any)((e: any): any => {
    const n: any = (Ct as any)();
    (t as any)(n, e);
  }), (((re as any)() as any).addScopeListener as any)((e: any): any => {
    const n: any = (Ct as any)();
    (t as any)(n, e);
  });
}
const Ua: any = (): any => ({
  name: "ScopeToMain",
  setup(t: any): any {
    const e: any = (Yn as any)(t);
    (Fa as any)((n: any, r: any): any => {
      ((e as any).sendScope as any)(((JSON as any).stringify as any)((R as any)(n, 20, 2e3))), ((r as any).clearBreadcrumbs as any)(), ((r as any).clearAttachments as any)();
    });
  }
});
function ja(this: any, t: any): any {
  let e: any;
  return (Un as any)(t, async (n: any): Promise<any> => (e || (e = (Yn as any)()), ((e as any).sendEnvelope as any)((n as any).body), {
    statusCode: 200
  }));
}
const Ba: number = 50,
  [, Ha]: any = Vn,
  [, Ga]: any = (ci as any)(),
  Wa: any = (t: any, e: any = 0): any => {
    const n: any = [];
    for (const r of ((((t as any).split as any)(`
`) as any).slice as any)(e)) {
      const s: any = (Ha as any)(r),
        o: any = (Ga as any)(r);
      if (s && (o?.in_app as any) !== (!1 as any) ? ((n as any).push as any)(s) : o && (((o as any).module as any) === (void 0 as any) && delete (o as any).module, ((n as any).push as any)(o)), ((n as any).length as any) >= (Ba as any)) break;
    }
    return (cn as any)(n);
  };
function qa(this: any, t: any): any {
  return [...(((er as any)() as any).filter as any)((e: any): any => ((e as any).name as any) !== ("BrowserSession" as any)), (Ua as any)()];
}
function Ya(this: any, t: any = {}, e: any = $a): any {
  if (window?.__SENTRY__RENDERER_INIT__) {
    ((p as any).warn as any)(`The browser SDK has already been initialized.
If init has been called in the preload and contextIsolation is disabled, is not required to call init in the renderer`);
    return;
  }
  (window as any).__SENTRY__RENDERER_INIT__ = !0, (t as any).sendClientReports = !1, ((t as any).defaultIntegrations as any) === (void 0 as any) && ((t as any).defaultIntegrations = (qa as any)()), ((t as any).stackParser as any) === (void 0 as any) && ((t as any).stackParser = Wa), ((t as any).ipcNamespace as any) === (void 0 as any) && ((t as any).ipcNamespace = "sentry-ipc"), ((t as any).dsn as any) === (void 0 as any) && ((t as any).dsn = "https://12345@dummy.dsn/12345"), ((t as any).transport as any) === (void 0 as any) && ((t as any).transport = ja), delete (t as any).initialScope, (e as any)(t);
}
function Ja(this: any): any {
  return (Ya as any)({
    dsn: nr,
    defaultIntegrations: !1,
    integrations: [(Bn as any)(), (jn as any)(), (tr as any)(), (Hn as any)(), (Zn as any)()]
  }), {
    captureException: Nn,
    captureMessage: Qs,
    setTag: to,
    withScope: yn
  };
}
export { Ja as initSandSentrySdk };
//# debugId=0ad0ec86-5d98-4417-8e9d-88b601d5cbf3
