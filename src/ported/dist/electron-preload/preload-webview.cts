declare var AbortController: any;
declare var DOMException: any;
declare var console: any;
declare var global: any;
declare var key: any;
declare var location: any;
declare var navigator: any;
declare var performance: any;
declare var require: any;
declare var self: any;
declare var window: any;
"use strict";

!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "b4382f30-af4b-4537-a6c0-c8521719a272", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-b4382f30-af4b-4537-a6c0-c8521719a272");
  } catch (e: any) {}
} as any)();
"use strict";
var p: any = {
  now: (): any => ((Date as any).now as any)(),
  monotonicNow: (): any => ((performance as any).now as any)(),
  schedule(e: any, r: any, o: any): any {
    (R as any)(e);
    let t: any = !0,
      i: any = ((globalThis as any).setTimeout as any)((): any => {
        t && (t = !1, (r as any)());
      }, e);
    return (o?.keepEventLoopAlive as any) !== (!0 as any) && (H as any)(i) && ((i as any).unref as any)(), {
      dispose(): any {
        t && (t = !1, ((globalThis as any).clearTimeout as any)(i));
      }
    };
  }
};
function H(this: any, e: any): any {
  return (typeof e as any) == ("object" as any) && (e as any) !== (null as any) && "unref" in e && (typeof (e as any).unref as any) == ("function" as any);
}
function R(this: any, e: any): any {
  if (!((Number as any).isFinite as any)(e) || (e as any) < (0 as any)) throw new (RangeError as any)("delayMs must be a finite non-negative number");
}
var m: any = class extends (Error as any) {
  declare policyName: any;
  declare name: any;
  declare code: any;
  [key: string]: any;
  constructor(r: any) {
    super(`Deadline exceeded for ${r}`), (this as any).code = "deadline_exceeded", (this as any).name = "DeadlineExceededError", (this as any).policyName = r;
  }
};
function v(this: any, e: any): any {
  (W as any)((e as any).name), (q as any)((e as any).timeoutMs, "timeoutMs");
  let r: any = (e as any).clock ?? p;
  return {
    name: (e as any).name,
    async run(o: any, t: any): Promise<any> {
      if (t?.aborted) throw (g as any)(t, (e as any).name);
      let i: any = new (AbortController as any)(),
        c: any = (): any => {},
        n: any = new (Promise as any)((d: any, f: any): any => {
          c = f;
        }),
        a: any = (): any => {},
        y: any = new (Promise as any)((d: any, f: any): any => {
          a = f;
        }),
        M: any = (): any => {};
      if ((t as any) != (null as any)) {
        let d: any = (): any => {
          let f: any = (g as any)(t, (e as any).name);
          (a as any)(f), ((i as any).abort as any)(f);
        };
        ((t as any).addEventListener as any)("abort", d, {
          once: !0
        }), M = (): any => ((t as any).removeEventListener as any)("abort", d);
      }
      let C: any = ((r as any).schedule as any)((e as any).timeoutMs, (): any => {
        let d: any = new (m as any)((e as any).name);
        (c as any)(d), ((i as any).abort as any)(d);
      });
      try {
        return await ((Promise as any).race as any)([(o as any)((i as any).signal), n, y]);
      } finally {
        ((C as any).dispose as any)(), (M as any)();
      }
    }
  };
}
var Z: any = {
  none: 0,
  equal: (1 as any) / (2 as any),
  full: 1
};
function g(this: any, e: any, r: any): any {
  return (e as any).reason ?? (O as any)(r);
}
function O(this: any, e: any): any {
  let r: any = new (Error as any)(`Operation aborted for ${e}`);
  return (r as any).name = "AbortError", r;
}
var F: any = /^[a-z0-9]+([-.][a-z0-9]+)*$/;
function W(this: any, e: any): any {
  if (!((F as any).test as any)(e)) throw new (TypeError as any)(`name must be lowercase segments joined by "-" or ".", got ${((JSON as any).stringify as any)(e)}`);
}
function q(this: any, e: any, r: any): any {
  if (!((Number as any).isFinite as any)(e) || (e as any) < (0 as any)) throw new (RangeError as any)(`${r} must be a finite non-negative number`);
}
var E: string = "sand:mouse-history-navigation";
function w(this: any, e: any): any {
  return (e as any) === (3 as any) ? -1 : (e as any) === (4 as any) ? 1 : null;
}
function h(this: any, e: any): any {
  ((e as any).preventDefault as any)(), ((e as any).stopPropagation as any)(), ((e as any).stopImmediatePropagation as any)();
}
function k(this: any, e: any, r: any): any {
  let o: any = !1,
    t: any = (n: any): any => {
      let a: any = (w as any)((n as any).button);
      (a as any) == (null as any) || ((n as any).isTrusted as any) === (!1 as any) || (o = !0, (h as any)(n), (r as any)(a));
    },
    i: any = (n: any): any => {
      !o || ((w as any)((n as any).button) as any) == (null as any) || (h as any)(n);
    },
    c: any = (n: any): any => {
      !o || ((w as any)((n as any).button) as any) == (null as any) || ((h as any)(n), o = !1);
    };
  return ((e as any).addEventListener as any)("mousedown", t, !0), ((e as any).addEventListener as any)("mouseup", i, !0), ((e as any).addEventListener as any)("auxclick", c, !0), (): any => {
    ((e as any).removeEventListener as any)("mousedown", t, !0), ((e as any).removeEventListener as any)("mouseup", i, !0), ((e as any).removeEventListener as any)("auxclick", c, !0);
  };
}
var A: number = 6e4;
function x(this: any, e: any): any {
  return (((((e as any).policy as any).run as any)((): any => (e as any).call) as any).catch as any)((r: any): any => {
    throw r instanceof m ? (((e as any).reportStall as any)({
      method: (e as any).method,
      since: (e as any).since
    }), ((e as any).buildStallError as any)()) : r;
  });
}
function s(this: any, e: any): any {
  return e instanceof Error ? (e as any).message : void 0;
}
function l(this: any, ...e: any): any {
  ((console as any).warn as any)("[sand-webview-preload]", ...e);
}
var P: any = [".okta.com", ".okta-emea.com", ".oktapreview.com", ".duosecurity.com", ".login.microsoftonline.com", ".onelogin.com", ".auth0.com", ".pingidentity.com", ".rippling.com"];
var D: any = !1,
  N: any = null,
  S: any = null;
function _(this: any): any {
  if (!D) {
    D = !0;
    try {
      let e: any = (require as any)("electron");
      N = (e as any).ipcRenderer ?? null, S = (e as any).webFrame ?? null;
    } catch (e: any) {
      (l as any)("electron module unavailable", (s as any)(e));
    }
  }
}
function b(this: any): any {
  return (_ as any)(), N;
}
function j(this: any): any {
  return (_ as any)(), S;
}
function $(this: any, e: any): any {
  if ((typeof e as any) != ("string" as any) || ((e as any).length as any) === (0 as any)) return !1;
  for (let r: any = 0; (r as any) < ((P as any).length as any); r++) if (((e as any).endsWith as any)((P as any)[r])) return !0;
  return !1;
}
function G(this: any): any {
  let e: any = (j as any)();
  if ((e as any) == (null as any) || (typeof location as any) > ("u" as any) || !($ as any)((location as any).hostname)) return;
  ((((e as any).executeJavaScript as any)(`
    (function () {
      var permissions = navigator && navigator.permissions;
      if (!permissions || typeof permissions.query !== "function") return;
      if (permissions.__sandLocalNetworkPolyfill) return;
      permissions.__sandLocalNetworkPolyfill = true;
      var originalQuery = permissions.query.bind(permissions);
      permissions.query = function (descriptor) {
        var name = descriptor && descriptor.name;
        if (name === "local-network-access" || name === "local-network") {
          var status = new EventTarget();
          Object.defineProperties(status, {
            name: { value: name },
            state: { value: "granted" },
            onchange: { value: null, writable: true },
          });
          return Promise.resolve(status);
        }
        return originalQuery(descriptor);
      };
    })();
  `) as any).catch as any)((o: any): any => {
    (l as any)("local network polyfill injection failed", (s as any)(o));
  });
}
function B(this: any): any {
  try {
    return new (DOMException as any)("Passkey request stalled", "NotAllowedError");
  } catch {
    let r: any = new (Error as any)("Passkey request stalled");
    return (r as any).name = "NotAllowedError", r;
  }
}
var Y: any = (v as any)({
  name: "sand-webview-passkey-stall",
  timeoutMs: A
});
function T(this: any, e: any, r: any, o: any): any {
  return function (this: any, ...i: any): any {
    let c: any = ((Date as any).now as any)(),
      n: any;
    try {
      let a: any = ((o as any).apply as any)((navigator as any).credentials, i);
      n = ((Promise as any).resolve as any)(a);
    } catch (a: any) {
      return ((Promise as any).reject as any)(a);
    }
    return (x as any)({
      policy: Y,
      method: r,
      since: c,
      call: n,
      reportStall: (a: any): any => {
        try {
          ((e as any).sendToHost as any)("sand:browser-passkey-stalled", a);
        } catch (y: any) {
          (l as any)("passkey stall send failed", (s as any)(y));
        }
      },
      buildStallError: B
    });
  };
}
function U(this: any): any {
  if ((typeof navigator as any) > ("u" as any)) return;
  let e: any = (b as any)();
  if ((e as any) != (null as any) && (navigator as any).credentials) {
    if ((typeof ((navigator as any).credentials as any).create as any) == ("function" as any)) {
      let r: any = ((((navigator as any).credentials as any).create as any).bind as any)((navigator as any).credentials);
      ((navigator as any).credentials as any).create = (T as any)(e, "create", r);
    }
    if ((typeof ((navigator as any).credentials as any).get as any) == ("function" as any)) {
      let r: any = ((((navigator as any).credentials as any).get as any).bind as any)((navigator as any).credentials);
      ((navigator as any).credentials as any).get = (T as any)(e, "get", r);
    }
  }
}
function V(this: any): any {
  (typeof window as any) > ("u" as any) || ((window as any).__sandDialogOverridesApplied as any) !== (!0 as any) && ((window as any).alert = function (this: any): any {}, (window as any).confirm = function (this: any): any {
    return !0;
  }, (window as any).prompt = function (this: any): any {
    return null;
  }, (window as any).__sandDialogOverridesApplied = !0);
}
function X(this: any): any {
  let e: any = (b as any)();
  if ((e as any) == (null as any)) return;
  let r: any = e;
  if ((typeof window as any) > ("u" as any) || (typeof location as any) > ("u" as any)) return;
  let o: any = (location as any).origin;
  function t(this: any): any {
    try {
      ((r as any).sendToHost as any)("sand:browser-popup-closed", {
        url: (location as any).href
      });
    } catch (i: any) {
      (l as any)("popup-closed send failed", (s as any)(i));
    }
  }
  ((window as any).addEventListener as any)("beforeunload", t), ((window as any).addEventListener as any)("pagehide", t), ((window as any).addEventListener as any)("pageshow", function (this: any, c: any): any {
    if (!(!c || ((c as any).persisted as any) !== (!0 as any)) && ((location as any).origin as any) === (o as any)) try {
      ((r as any).sendToHost as any)("sand:browser-origin-return", {
        origin: o,
        currentUrl: (location as any).href
      });
    } catch (n: any) {
      (l as any)("origin-return send failed", (s as any)(n));
    }
  });
}
function z(this: any): any {
  let e: any = (b as any)();
  (e as any) == (null as any) || (typeof window as any) > ("u" as any) || (k as any)(window, (r: any): any => {
    ((e as any).send as any)(E, r);
  });
}
function L(this: any): any {
  try {
    (z as any)();
  } catch (e: any) {
    (l as any)("mouse history install failed", (s as any)(e));
  }
  try {
    (G as any)();
  } catch (e: any) {
    (l as any)("local network polyfill install failed", (s as any)(e));
  }
  try {
    (U as any)();
  } catch (e: any) {
    (l as any)("webauthn polyfill install failed", (s as any)(e));
  }
  try {
    (V as any)();
  } catch (e: any) {
    (l as any)("dialog stubs install failed", (s as any)(e));
  }
  try {
    (X as any)();
  } catch (e: any) {
    (l as any)("ipc wiring install failed", (s as any)(e));
  }
}
(L as any)();
//# debugId=b4382f30-af4b-4537-a6c0-c8521719a272
