declare var AbortController: any;
declare var DOMException: any;
declare var HTMLTextAreaElement: any;
declare var MutationObserver: any;
declare var TextEncoder: any;
declare var URLSearchParams: any;
declare var console: any;
declare var document: any;
declare var global: any;
declare var installVncPreload: any;
declare var key: any;
declare var location: any;
declare var module: any;
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
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "bf05ff57-50f7-469e-9fa9-f1ff0acb31b6", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-bf05ff57-50f7-469e-9fa9-f1ff0acb31b6");
  } catch (e: any) {}
} as any)();
"use strict";
var J: any = (Object as any).defineProperty;
var Cn: any = (Object as any).getOwnPropertyDescriptor;
var In: any = (Object as any).getOwnPropertyNames;
var Mn: any = ((Object as any).prototype as any).hasOwnProperty;
var An: any = (e: any, n: any): any => (): any => (e && (n = (e as any)(e = 0)), n);
var Re: any = (e: any, n: any): any => {
    var r: any;
    for (r in n) (J as any)(e, r, {
      get: (n as any)[r],
      enumerable: !0
    });
  },
  On: any = (e: any, n: any, r: any, o: any): any => {
    if (n && (typeof n as any) == ("object" as any) || (typeof n as any) == ("function" as any)) for (let i of (In as any)(n)) !((Mn as any).call as any)(e, i) && (i as any) !== (r as any) && (J as any)(e, i, {
      get: (): any => (n as any)[i],
      enumerable: !(o = (Cn as any)(n, i)) || (o as any).enumerable
    });
    return e;
  };
var Dn: any = (e: any): any => (On as any)((J as any)({}, "__esModule", {
  value: !0
}), e);
var t: any = (An as any)((): any => {});
var Dt: any = {};
(Re as any)(Dt, {
  installVncPreload: (): any => wn
});
(module as any).exports = (Dn as any)(Dt);
(t as any)();
(t as any)();
var L: any = (require as any)("electron");
(t as any)();
var be: any = ["ready", "failed", "stuck", "aborted"];
(t as any)();
(t as any)();
var w: any = {
  now: (): any => ((Date as any).now as any)(),
  monotonicNow: (): any => ((performance as any).now as any)(),
  schedule(e: any, n: any, r: any): any {
    (Pn as any)(e);
    let o: any = !0,
      i: any = ((globalThis as any).setTimeout as any)((): any => {
        o && (o = !1, (n as any)());
      }, e);
    return (r?.keepEventLoopAlive as any) !== (!0 as any) && (Ln as any)(i) && ((i as any).unref as any)(), {
      dispose(): any {
        o && (o = !1, ((globalThis as any).clearTimeout as any)(i));
      }
    };
  }
};
function Ln(this: any, e: any): any {
  return (typeof e as any) == ("object" as any) && (e as any) !== (null as any) && "unref" in e && (typeof (e as any).unref as any) == ("function" as any);
}
function Pn(this: any, e: any): any {
  if (!((Number as any).isFinite as any)(e) || (e as any) < (0 as any)) throw new (RangeError as any)("delayMs must be a finite non-negative number");
}
(t as any)();
var Nn: any = (): any => {};
function Fn(this: any, e: any, n: any, r: any): any {
  return {
    policyName: e,
    reason: n,
    errorClass: r instanceof Error ? (r as any).name : typeof r
  };
}
var I: any = class extends (Error as any) {
  declare policyName: any;
  declare name: any;
  declare code: any;
  [key: string]: any;
  constructor(n: any) {
    super(`Deadline exceeded for ${n}`), (this as any).code = "deadline_exceeded", (this as any).name = "DeadlineExceededError", (this as any).policyName = n;
  }
};
function A(this: any, e: any): any {
  (Se as any)((e as any).name), (he as any)((e as any).timeoutMs, "timeoutMs");
  let n: any = (e as any).clock ?? w;
  return {
    name: (e as any).name,
    async run(r: any, o: any): Promise<any> {
      if (o?.aborted) throw (ke as any)(o, (e as any).name);
      let i: any = new (AbortController as any)(),
        s: any = (): any => {},
        f: any = new (Promise as any)((d: any, l: any): any => {
          s = l;
        }),
        u: any = (): any => {},
        c: any = new (Promise as any)((d: any, l: any): any => {
          u = l;
        }),
        m: any = (): any => {};
      if ((o as any) != (null as any)) {
        let d: any = (): any => {
          let l: any = (ke as any)(o, (e as any).name);
          (u as any)(l), ((i as any).abort as any)(l);
        };
        ((o as any).addEventListener as any)("abort", d, {
          once: !0
        }), m = (): any => ((o as any).removeEventListener as any)("abort", d);
      }
      let p: any = ((n as any).schedule as any)((e as any).timeoutMs, (): any => {
        let d: any = new (I as any)((e as any).name);
        (s as any)(d), ((i as any).abort as any)(d);
      });
      try {
        return await ((Promise as any).race as any)([(r as any)((i as any).signal), f, c]);
      } finally {
        ((p as any).dispose as any)(), (m as any)();
      }
    }
  };
}
function O(this: any, e: any): any {
  if ((Se as any)((e as any).name), (he as any)((e as any).intervalMs, "intervalMs"), ((e as any).intervalMs as any) === (0 as any)) throw new (RangeError as any)(`${(e as any).name}: intervalMs must be greater than 0`);
  let n: any = (e as any).clock ?? w,
    r: any = (e as any).report ?? Nn;
  return {
    name: (e as any).name,
    start(o: any, i: any): any {
      let s: any = (Vn as any)(),
        f: any = (): any => {},
        u: any = new (Promise as any)((E: any): any => {
          f = E;
        }),
        c: any = (): any => {},
        m: any = (E: any): any => ((s as any).dispose as any)() ? ((c as any)(), (f as any)(E), !0) : !1,
        p: any = (): any => {
          (m as any)({
            policyName: (e as any).name,
            reason: "disposed"
          });
        },
        d: any = (E: any): any => {
          (m as any)({
            policyName: (e as any).name,
            reason: "tick-failed",
            cause: E
          }) && (r as any)((Fn as any)((e as any).name, "tick-failed", E));
        },
        l: any = (): any => {
          if (((s as any).fired as any)(), (((s as any).current as any).state as any) === ("disposed" as any)) return;
          let E: any;
          try {
            E = (o as any)();
          } catch (C: any) {
            (d as any)(C);
            return;
          }
          ((E as any).then as any)((): any => {
            (((s as any).current as any).state as any) !== ("disposed" as any) && ((s as any).arm as any)(((n as any).schedule as any)((e as any).intervalMs, l));
          }, d);
        },
        R: any = {
          dispose: p,
          stopped: u
        };
      return i?.aborted ? ((p as any)(), R) : ((i as any) != (null as any) && (((i as any).addEventListener as any)("abort", p, {
        once: !0
      }), c = (): any => ((i as any).removeEventListener as any)("abort", p)), (e as any).leading ?? !0 ? (l as any)() : ((s as any).arm as any)(((n as any).schedule as any)((e as any).intervalMs, l)), R);
    }
  };
}
function Vn(this: any): any {
  let e: any = {
    state: "running"
  };
  return {
    get current(): any {
      return e;
    },
    arm(n: any): any {
      if (((e as any).state as any) === ("disposed" as any)) {
        ((n as any).dispose as any)();
        return;
      }
      ((e as any).state as any) === ("armed" as any) && (((e as any).handle as any).dispose as any)(), e = {
        state: "armed",
        handle: n
      };
    },
    fired(): any {
      ((e as any).state as any) === ("armed" as any) && (e = {
        state: "running"
      });
    },
    dispose(): any {
      return ((e as any).state as any) === ("disposed" as any) ? !1 : (((e as any).state as any) === ("armed" as any) && (((e as any).handle as any).dispose as any)(), e = {
        state: "disposed"
      }, !0);
    }
  };
}
var jt: any = {
  none: 0,
  equal: (1 as any) / (2 as any),
  full: 1
};
function ke(this: any, e: any, n: any): any {
  return (e as any).reason ?? (Bn as any)(n);
}
function Bn(this: any, e: any): any {
  let n: any = new (Error as any)(`Operation aborted for ${e}`);
  return (n as any).name = "AbortError", n;
}
var Un: any = /^[a-z0-9]+([-.][a-z0-9]+)*$/;
function Se(this: any, e: any): any {
  if (!((Un as any).test as any)(e)) throw new (TypeError as any)(`name must be lowercase segments joined by "-" or ".", got ${((JSON as any).stringify as any)(e)}`);
}
function he(this: any, e: any, n: any): any {
  if (!((Number as any).isFinite as any)(e) || (e as any) < (0 as any)) throw new (RangeError as any)(`${n} must be a finite non-negative number`);
}
(t as any)();
(t as any)();
(t as any)();
(t as any)();
(t as any)();
(t as any)();
(t as any)();
(t as any)();
(t as any)();
(t as any)();
(t as any)();
function S(this: any, e: any): any {
  return (typeof e as any) == ("object" as any) && (e as any) !== (null as any) && !((Array as any).isArray as any)(e);
}
var Or: any = (1024 as any) * (1024 as any);
(t as any)();
(t as any)();
(t as any)();
(t as any)();
(t as any)();
var Kn: number = 864e5,
  lo: any = (30 as any) * (Kn as any);
var co: any = [...be, "pending"];
(t as any)();
(t as any)();
(t as any)();
var Mo: any = (256 as any) * (1024 as any);
(t as any)();
(t as any)();
var Wn: any = /^[a-z0-9]+-[0-9]+$/;
function _e(this: any, e: any): any {
  return ((Wn as any).test as any)(e);
}
var Gn: any = (2 as any) ** (32 as any);
function ve(this: any, e: any): any {
  return ((Number as any).isInteger as any)(e) && (e as any) >= (0 as any) && (e as any) < (Gn as any);
}
var X: number = 2,
  Te: any = ["click", "keydown", "pointerdown", "wheel", "input"],
  xe: any = ["open", "close"],
  we: any = ["overlay", "workspace", "shell"],
  Ce: any = ["button", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "tab", "checkbox", "radio", "switch", "slider", "textbox", "searchbox", "combobox", "listbox", "treeitem", "gridcell", "row", "dialog", "alertdialog", "log", "region", "status"],
  Ie: any = ["immediate", "user-blocking", "normal", "idle"],
  Me: any = ["mount", "update"],
  Ae: any = ["layout", "passive"],
  Oe: any = ["view", "layout"],
  De: any = ["transition", "restore"],
  Le: any = ["default", "transition"],
  Q: any = ["quiet", "cap", "superseded"],
  Pe: any = ["presented", ...Q];
(t as any)();
(t as any)();
var $n: any = ((Object as any).freeze as any)({
  sampled: !1,
  sampleRate: 0,
  additionalArguments: ((Object as any).freeze as any)([])
});
(t as any)();
var Yn: any = ["dune_session_id", "dune_app", "app_version", "app_built_at", "track", "platform", "arch", "dune_install_id", "dune_row_id"],
  ii: any = new (Set as any)(["dune_signal", "dune_reason", ...Yn]);
(t as any)();
(t as any)();
(t as any)();
(t as any)();
(t as any)();
var bi: any = (BigInt as any)(127),
  ki: any = (BigInt as any)(7),
  Si: any = new (TextEncoder as any)();
var wi: any = (BigInt as any)(1e3);
(t as any)();
(t as any)();
(t as any)();
var Jn: any = (Symbol as any)("redirect"),
  Ne: any = class {
    [key: string]: any;
    constructor(n: any, r: any) {
      (this as any).link = n;
      (this as any).history = r;
    }
    link: any;
    history: any;
    [Jn](): any {
      return "redirect";
    }
  };
var Fe: any = ((Object as any).freeze as any)({
    workspace: ((Object as any).freeze as any)({
      idPrefix: "view"
    }),
    overlay: ((Object as any).freeze as any)({
      idPrefix: "overlay"
    })
  }),
  Mi: any = ((Object as any).freeze as any)({
    text: "",
    value: void 0
  });
var v: any = (e: any): any => (typeof e as any) == ("string" as any),
  Z: any = (e: any): any => (typeof e as any) == ("boolean" as any),
  g: any = (e: any): any => (typeof e as any) == ("number" as any) && ((Number as any).isFinite as any)(e),
  b: any = (e: any): any => (typeof e as any) == ("number" as any) && ((Number as any).isInteger as any)(e) && (e as any) >= (0 as any),
  Ve: any = (e: any): any => (typeof e as any) == ("string" as any) && (_e as any)(e),
  ee: any = (e: any): any => (typeof e as any) == ("number" as any) && (ve as any)(e),
  Xn: any = (e: any): any => (e as any) === (X as any),
  U: any = (e: any): any => (g as any)(e) && (e as any) >= (0 as any),
  Qn: any = (e: any): any => (g as any)(e) && (e as any) > (0 as any) && (e as any) <= (1 as any);
function k(this: any, e: any): any {
  let n: any = new (Set as any)(e);
  return (r: any): any => (typeof r as any) == ("string" as any) && ((n as any).has as any)(r);
}
function Be(this: any, e: any): any {
  return (n: any): any => (n as any) === (null as any) || (e as any)(n);
}
function H(this: any, e: any): any {
  return (n: any): any => ((Array as any).isArray as any)(n) && ((n as any).every as any)(e);
}
function D(this: any, e: any, n: any, r: any = {}): any {
  if (!(S as any)(e)) return !1;
  for (let o of ((Object as any).keys as any)(e)) if (!((Object as any).hasOwn as any)(n, o) && !((Object as any).hasOwn as any)(r, o)) return !1;
  for (let [o, i] of ((Object as any).entries as any)(n)) if (!(i as any)((e as any)[o])) return !1;
  for (let [o, i] of ((Object as any).entries as any)(r)) if (((e as any)[o] as any) !== (void 0 as any) && !(i as any)((e as any)[o])) return !1;
  return !0;
}
function ne(this: any, e: any, n: any = {}): any {
  return (r: any): any => {
    if (!(S as any)(r) || (typeof (r as any).kind as any) != ("string" as any)) return !1;
    let o: any = ((Object as any).hasOwn as any)(e, (r as any).kind) ? (e as any)[(r as any).kind] : void 0,
      i: any = ((Object as any).hasOwn as any)(n, (r as any).kind) ? (n as any)[(r as any).kind] : void 0;
    return (o as any) != (null as any) && (D as any)(r, {
      kind: v,
      ...o
    }, i);
  };
}
var Ue: any = (k as any)(((Object as any).keys as any)(Fe)),
  Zn: any = /^(view|overlay):[a-z0-9-]+(\/[a-z0-9-]+)*$/,
  et: any = (e: any): any => !(S as any)(e) || (typeof (e as any).entrypointId as any) != ("string" as any) || !(D as any)(e, {
    surface: (k as any)(we),
    entrypointId: v
  }) ? !1 : ((e as any).surface as any) === ("shell" as any) ? ((e as any).entrypointId as any) === ("" as any) : ((Zn as any).test as any)((e as any).entrypointId),
  nt: any = (ne as any)({
    navigation: {
      action: (k as any)(xe),
      surface: Ue,
      entrypointId: v,
      startMs: g
    },
    selection: {
      startMs: g
    },
    interaction: {
      event: (k as any)(Te),
      startMs: g
    }
  }, {
    navigation: {
      absorbedInputs: b
    },
    interaction: {
      route: et,
      target: (e: any): any => (D as any)(e, {
        component: ee
      }, {
        role: (k as any)(Ce)
      })
    }
  }),
  tt: any = (ne as any)({
    render: {
      component: ee,
      phase: (k as any)(Me),
      compiled: Z,
      baseMs: g
    },
    commit: {
      priority: (k as any)(Ie)
    },
    effects: {
      boundary: v,
      passiveMs: g
    },
    "component-effects": {
      component: ee,
      phase: (k as any)(Ae)
    }
  }),
  rt: any = (ne as any)({
    settle: {
      entrypointId: v,
      chunk: (k as any)(Oe),
      cached: Z
    },
    presented: {
      ticket: b,
      entrypointId: v,
      surface: Ue,
      commitClass: (k as any)(De)
    },
    publish: {
      store: v,
      commit: (k as any)(Le),
      version: b,
      listeners: b
    },
    rpc: {
      edge: v,
      method: v,
      ok: Z,
      failureCode: (Be as any)(v)
    },
    event: {
      event: v,
      interactionId: b,
      inputDelayMs: g,
      processingMs: g
    },
    "long-animation-frame": {
      blockingMs: g,
      renderMs: g,
      styleAndLayoutMs: g,
      scripts: b
    }
  }),
  He: any = (e: any): any => (D as any)(e, {
    id: b,
    parent: (Be as any)(b),
    startMs: g,
    durationMs: g,
    selfMs: g,
    detail: tt
  }),
  je: any = (e: any): any => (D as any)(e, {
    startMs: g,
    durationMs: g,
    detail: rt
  }),
  Ke: any = {
    version: Xn,
    lastCommitMs: U,
    commitCount: b,
    renderSelfMs: U,
    sampleRate: Qn
  },
  Fi: any = {
    ...Ke,
    id: Ve,
    root: nt,
    endMs: g,
    closedBy: (k as any)(Q),
    spans: (H as any)(He),
    folded: b,
    dropped: b
  },
  Vi: any = {
    ticket: b,
    measures: (H as any)(je),
    presentedMs: U,
    dismissedMs: U
  },
  Bi: any = {
    ...Ke,
    id: Ve,
    startMs: g,
    endMs: g,
    closedBy: (k as any)(Pe),
    spans: (H as any)(He),
    measures: (H as any)(je),
    folded: b,
    dropped: b
  };
function We(this: any, e: any): any {
  return {
    invoke: (n: any, r: any): any => ((e as any).invoke as any)(n, r),
    on: (n: any, r: any): any => {
      let o: any = (i: any, s: any): any => {
        (r as any)(s);
      };
      return ((e as any).on as any)(n, o), (): any => {
        ((e as any).off as any)(n, o);
      };
    }
  };
}
function Ge(this: any, e: any): any {
  return (e as any) != (null as any) ? (We as any)((e as any).ipcRenderer) : (We as any)((L as any).ipcRenderer);
}
(t as any)();
(t as any)();
(t as any)();
function it(this: any, e: any): any {
  return (e as any) === (null as any) ? "null" : ((Array as any).isArray as any)(e) ? "array" : typeof e;
}
function $e(this: any, e: any, n: any, r: any): any {
  return {
    ok: !1,
    path: e,
    expected: n,
    received: (it as any)(r)
  };
}
function at(this: any, e: any): any {
  return ((e as any).optional as any) === (!0 as any);
}
function Ye(this: any, e: any, n: any): any {
  return {
    expects: e,
    check: n,
    "~standard": {
      version: 1,
      vendor: "dune",
      validate: (r: any): any => {
        let o: any = (n as any)(r, []);
        return (o as any).ok ? {
          value: (o as any).value
        } : {
          issues: [{
            message: `must be ${(o as any).expected}, got ${(o as any).received}`,
            path: (o as any).path
          }]
        };
      }
    }
  };
}
function st(this: any, e: any, n: any, r: any): any {
  if (!(S as any)(n)) return ($e as any)(r, "object", n);
  let o: any = [];
  for (let [i, s] of ((Object as any).entries as any)(e)) {
    let f: any = ((Object as any).hasOwn as any)(n, i) ? (n as any)[i] : void 0;
    if ((f as any) === (void 0 as any) && (at as any)(s)) continue;
    let u: any = ((s as any).check as any)(f, [...r, i]);
    if (!(u as any).ok) return u;
    ((o as any).push as any)([i, (u as any).value]);
  }
  return {
    ok: !0,
    value: ((Object as any).fromEntries as any)(o)
  };
}
function te(this: any): any {
  return (Ye as any)("string", (e: any, n: any): any => (typeof e as any) == ("string" as any) ? {
    ok: !0,
    value: e
  } : ($e as any)(n, "string", e));
}
function P(this: any, e: any): any {
  return (Ye as any)("object", (n: any, r: any): any => (st as any)(e, n, r));
}
function dt(this: any, e: any): any {
  let n: any = (e as any)["~standard"];
  return (typeof n as any) == ("object" as any) && (n as any) !== (null as any) && ((n as any).version as any) === (1 as any) && (typeof (n as any).validate as any) == ("function" as any);
}
var j: any = class extends (Error as any) {
  declare name: any;
  [key: string]: any;
  constructor(n: any) {
    super(`rpcMethod().args: field "${n}" is not an rpc field validator; pass rpc* combinators or one Standard Schema v1 value.`), (this as any).name = "RpcMethodDeclarationError";
  }
};
function K(this: any): any {
  return {
    noArgs: {
      schema: null
    },
    args: (e: any): any => {
      if ((dt as any)(e)) return {
        schema: e
      };
      for (let [n, r] of ((Object as any).entries as any)(e)) if ((typeof r?.check as any) != ("function" as any)) throw new (j as any)(n);
      return {
        schema: (P as any)(e)
      };
    }
  };
}
function re(this: any, e: any, n: any): any {
  return ((Object as any).freeze as any)({
    kind: "rpc-edge",
    edge: e,
    methods: (n as any).methods,
    hasEvents: ((n as any).events as any) != (null as any)
  });
}
(t as any)();
(t as any)();
var lt: string = "__DUNE_DEVTOOLS_HOOK__";
function ct(this: any, e: any): any {
  return (S as any)(e) && ((e as any).version as any) === (1 as any) && (typeof (e as any).register as any) == ("function" as any);
}
function qe(this: any, e: any = globalThis): any {
  let n: any = (S as any)(e) ? (e as any)[lt] : void 0;
  return (ct as any)(n) ? n : null;
}
var Je: string = "edge/unknown-method",
  oe: string = "edge/transport-failed";
var Xe: string = "edge/handler-failed";
var T: any = class extends (Error as any) {
  declare name: any;
  [key: string]: any;
  code: any;
  detail: any;
  constructor(n: any) {
    super(`${(n as any).code}: ${(n as any).detail}`), (this as any).name = "EdgeCallFailure", (this as any).code = (n as any).code, (this as any).detail = (n as any).detail;
  }
};
function ze(this: any, e: any): any {
  return (typeof e as any) != ("object" as any) || (e as any) == (null as any) || !("ok" in e) ? !1 : (typeof (e as any).ok as any) == ("boolean" as any);
}
function ut(this: any, e: any, n: any): any {
  return `dune-rpc:${e}:m:${n}`;
}
function Qe(this: any, e: any, n: any): any {
  return `dune-rpc:${e}:e:${n}`;
}
function pt(this: any, e: any): any {
  return `dune-rpc:${e}:probe`;
}
var ts: any = (P as any)({});
function ie(this: any, e: any, n: any, r: any = {}): any {
  let o: any = {},
    i: any = (r as any).measures ?? null,
    s: any = async (c: any, m: any): Promise<any> => {
      let p: any = m instanceof Error ? (m as any).message : (String as any)(m),
        d: any;
      try {
        d = await ((n as any).invoke as any)((pt as any)((e as any).edge), c);
      } catch {
        return new (T as any)({
          code: oe,
          detail: p
        });
      }
      return (ze as any)(d) && !(d as any).ok && (((d as any).failure as any).code as any) === (Je as any) ? new (T as any)((d as any).failure) : new (T as any)({
        code: oe,
        detail: p
      });
    },
    f: any = async (c: any, m: any): Promise<any> => {
      let p: any;
      try {
        p = await ((n as any).invoke as any)((ut as any)((e as any).edge, c), m);
      } catch (d: any) {
        throw await (s as any)(c, d);
      }
      if (!(ze as any)(p)) throw new (T as any)({
        code: Xe,
        detail: "The edge replied outside its envelope."
      });
      if ((p as any).ok) return (p as any).value;
      throw new (T as any)((p as any).failure);
    },
    u: any = (c: any, m: any): any => {
      if ((i as any) == (null as any)) return (f as any)(c, m);
      let p: any = ((i as any).now as any)(),
        d: any = (l: any, R: any): any => {
          ((i as any).record as any)({
            startMs: p,
            durationMs: (((i as any).now as any)() as any) - (p as any),
            detail: {
              kind: "rpc",
              edge: (e as any).edge,
              method: c,
              ok: l,
              failureCode: R
            }
          });
        };
      return (((f as any)(c, m) as any).then as any)((l: any): any => ((d as any)(!0, null), l), (l: any): any => {
        throw (d as any)(!1, l instanceof T ? (l as any).code : null), l;
      });
    };
  for (let [c, {
    schema: m
  }] of ((Object as any).entries as any)((e as any).methods)) (o as any)[c] = (m as any) === (null as any) ? (): any => (u as any)(c, {}) : (p: any): any => (u as any)(c, p);
  return (e as any).hasEvents && ((o as any).subscribe = (c: any): any => {
    let m: any = [];
    for (let [p, d] of ((Object as any).entries as any)(c)) (d as any) != (null as any) && ((m as any).push as any)(((n as any).on as any)((Qe as any)((e as any).edge, p), d));
    return (): any => {
      for (let p of m) (p as any)();
    };
  }), (qe as any)()?.register({
    kind: "rpc-edge",
    role: "bridge",
    declaration: e,
    trust: []
  }), o;
}
(t as any)();
(t as any)();
(t as any)();
var ae: any = [{
    code: "KeyA",
    keysym: 97,
    forceShift: !1
  }, {
    code: "KeyC",
    keysym: 99,
    forceShift: !1
  }, {
    code: "KeyV",
    keysym: 118,
    forceShift: !0
  }, {
    code: "KeyX",
    keysym: 120,
    forceShift: !1
  }, {
    code: "KeyZ",
    keysym: 122,
    forceShift: !1
  }],
  W: number = 65507,
  G: number = 65505,
  se: any = [[65511, "MetaLeft"], [65512, "MetaRight"], [65513, "AltLeft"], [65514, "AltRight"], [65515, "SuperLeft"], [65516, "SuperRight"]];
function de(this: any): any {
  let e: any = "",
    n: any = "";
  return {
    shouldSendHostText(r: any): any {
      return ((r as any).length as any) > (0 as any) && (r as any) !== (e as any) && (r as any) !== (n as any);
    },
    commitHostText(r: any): any {
      e = r;
    },
    resolveVmText(r: any): any {
      return ((r as any).length as any) === (0 as any) || (r as any) === (e as any) || (r as any) === (n as any) ? null : (n = r, r);
    }
  };
}
(t as any)();
var Ze: any = (re as any)("box-vnc", {
  methods: {
    readClipboard: ((K as any)() as any).noArgs,
    writeClipboard: (((K as any)() as any).args as any)({
      text: (te as any)()
    })
  }
});
(t as any)();
var en: string = "sand:vnc-host-key";
(t as any)();
(t as any)();
function le(this: any, e: any): any {
  return (typeof e as any) == ("object" as any) && (e as any) !== (null as any) && !((Array as any).isArray as any)(e);
}
var nn: string = "sand:vnc-liveness",
  ce: number = 1e4,
  tn: number = 3;
(t as any)();
var ue: string = "sand:vnc-viewer-visible";
(t as any)();
function rn(this: any, e: any): any {
  return `
    import("./app/ui.js")
      .then(function (m) {
        var rfb = m && m.default && m.default.rfb;
        var text = ${((JSON as any).stringify as any)(e)};
        if (rfb && typeof rfb.clipboardPasteFrom === "function" && text) {
          rfb.clipboardPasteFrom(text);
          return true;
        }
        return false;
      })
      .catch(function () {
        return false;
      });
  `;
}
function on(this: any, e: any, n: any): any {
  return n && ((e as any).length as any) > (0 as any) ? e : null;
}
(t as any)();
(t as any)();
var pe: string = "__sandVncFrameStamp";
(t as any)();
var N: any = [{
  member: "keyEvent",
  modulePath: "./core/rfb.js"
}, {
  member: "QEMUExtendedKeyEvent",
  modulePath: "./core/rfb.js"
}, {
  member: "pointerEvent",
  modulePath: "./core/rfb.js"
}, {
  member: "_damage",
  modulePath: "./core/display.js"
}, {
  member: "_recvMessage",
  modulePath: "./core/websock.js"
}, {
  member: "fbUpdateRequest",
  modulePath: "./core/rfb.js"
}, {
  member: "flip",
  modulePath: "./core/display.js"
}];
var $: string = "__sandVncFrameHold";
function an(this: any, e: any): any {
  let n: any = (N as any)[5],
    r: any = (N as any)[6];
  return `
    (function () {
      if (window.${$}) return;
      var pace = ${((JSON as any).stringify as any)(e)};
      var hold = { isHeld: false, request: null, minIntervalMs: pace.minIntervalMs, pacedAt: -Infinity, receivedBytes: 0, unpacedLeft: 0, isPastFirstRequest: false, timer: null };
      var countedChannels = new WeakSet();
      function countReceivedBytes(sock) {
        var channel = sock && sock._websocket;
        if (!channel || typeof channel.onmessage !== "function" || countedChannels.has(channel)) return;
        countedChannels.add(channel);
        var receive = channel.onmessage;
        channel.onmessage = function (event) {
          hold.receivedBytes += (event.data && event.data.byteLength) || 0;
          return receive.apply(this, arguments);
        };
      }
      function flush() {
        var request = hold.request;
        if (hold.isHeld || request == null) return;
        var isIncremental = request.args[1] === true;
        var wait = isIncremental ? hold.pacedAt + hold.minIntervalMs - performance.now() : 0;
        var isUnpaced = wait > 0 && request.followsSmallUpdate && hold.unpacedLeft > 0;
        if (wait > 0 && !isUnpaced) {
          if (hold.timer == null) {
            hold.timer = setTimeout(function () {
              hold.timer = null;
              flush();
            }, Math.ceil(wait));
          }
          return;
        }
        clearTimeout(hold.timer);
        hold.timer = null;
        hold.request = null;
        if (isUnpaced) hold.unpacedLeft -= 1;
        else if (isIncremental) {
          if (hold.isPastFirstRequest) hold.pacedAt = performance.now();
          hold.isPastFirstRequest = true;
        }
        request.send.apply(request.messages, request.args);
      }
      hold.set = function (isHeld) {
        hold.isHeld = isHeld;
        if (isHeld) return;
        hold.pacedAt = -Infinity;
        flush();
      };
      window.${$} = hold;
      var paced = import(${((JSON as any).stringify as any)((n as any).modulePath)}).then(function (m) {
        var messages = m && m.default && m.default.messages;
        if (!messages || typeof messages.${(n as any).member} !== "function") {
          throw new Error("noVNC RFB lacks messages.${(n as any).member}");
        }
        var send = messages.${(n as any).member};
        messages.${(n as any).member} = function (sock, incremental) {
          if (incremental !== true) hold.isPastFirstRequest = false;
          countReceivedBytes(sock);
          var updateBytes = hold.receivedBytes;
          hold.receivedBytes = 0;
          if (updateBytes >= pace.largeUpdateBytes) hold.unpacedLeft = pace.smallUpdatesAfterLarge;
          hold.request = {
            send: send,
            messages: this,
            args: arguments,
            followsSmallUpdate: updateBytes < pace.smallUpdateBytes,
          };
          flush();
        };
      });
      var stamped = import(${((JSON as any).stringify as any)((r as any).modulePath)}).then(function (m) {
        var display = m && m.default && m.default.prototype;
        if (!display || typeof display.${(r as any).member} !== "function") {
          throw new Error("noVNC Display lacks prototype.${(r as any).member}");
        }
        var draw = display.${(r as any).member};
        display.${(r as any).member} = function () {
          window.${pe} = Math.random();
          return draw.apply(this, arguments);
        };
        window.${pe} = Math.random();
      });
      return Promise.all([paced, stamped]);
    })();
  `;
}
function sn(this: any, e: any): any {
  return `window.${$} && window.${$}.set(${e})`;
}
(t as any)();
var ft: string = "sandVncImeInput";
function dn(this: any): any {
  return `
    (function () {
      if (window.__sandVncImeFieldInstalled) return;
      window.__sandVncImeFieldInstalled = true;

      var FIELD_ID = ${((JSON as any).stringify as any)(ft)};
      var XK_RETURN = 65293;
      var ui = null;
      var keysyms = null;

      function liveRfb() {
        var rfb = ui && ui.rfb;
        return rfb && typeof rfb.sendKey === "function" ? rfb : null;
      }

      function keysymOf(codepoint) {
        if (codepoint === 0x0a || codepoint === 0x0d) return XK_RETURN;
        if (codepoint < 0x20) return null;
        return keysyms.lookup(codepoint);
      }

      function sendText(text) {
        var rfb = liveRfb();
        if (!rfb) return;
        var chars = Array.from(text);
        for (var i = 0; i < chars.length; i++) {
          var keysym = keysymOf(chars[i].codePointAt(0));
          if (keysym === null) continue;
          rfb.sendKey(keysym, null, true);
          rfb.sendKey(keysym, null, false);
        }
      }

      function isViewerCanvas(node) {
        return node instanceof HTMLCanvasElement && node.closest("#noVNC_container") !== null;
      }

      function hostImeOwnsPhysicalKey(e) {
        if (e.ctrlKey || e.metaKey) return false;
        if (e.key === "Shift" || e.key === "Alt") return false;
        return e.isComposing || e.keyCode === 229 || e.key === "Process" || e.key === "Dead";
      }

      function install(Keyboard) {
        var field = document.createElement("textarea");
        field.id = FIELD_ID;
        field.tabIndex = -1;
        field.setAttribute("aria-label", "Remote desktop keyboard input");
        field.setAttribute("autocapitalize", "off");
        field.setAttribute("autocomplete", "off");
        field.setAttribute("autocorrect", "off");
        field.setAttribute("spellcheck", "false");
        field.style.cssText =
          "position:fixed;left:0;top:0;width:1px;height:1px;margin:0;padding:0;border:0;" +
          "opacity:0;overflow:hidden;resize:none;pointer-events:none;";
        document.body.appendChild(field);

        field.addEventListener(
          "keydown",
          function (e) {
            if (!hostImeOwnsPhysicalKey(e)) return;
            if (e.key === "Tab") e.preventDefault();
            e.stopImmediatePropagation();
          },
          true,
        );

        var keyboard = new Keyboard(field);
        keyboard.onkeyevent = function (keysym, code, down) {
          var rfb = liveRfb();
          if (rfb) rfb.sendKey(keysym, code, down);
        };
        keyboard.grab();

        function moveCandidateWindowAnchorTo(e) {
          if (!isViewerCanvas(e.target)) return;
          field.style.left = e.clientX + "px";
          field.style.top = e.clientY + "px";
        }

        field.addEventListener("compositionend", function (e) {
          if (typeof e.data === "string") sendText(e.data);
          field.value = "";
        });
        field.addEventListener("beforeinput", function (e) {
          if (e.isComposing || e.inputType === "insertCompositionText") return;
          e.preventDefault();
          if (e.inputType === "insertText" && typeof e.data === "string") {
            sendText(e.data);
          } else if (e.inputType === "insertLineBreak" || e.inputType === "insertParagraph") {
            sendText("\\n");
          }
        });
        field.addEventListener("input", function (e) {
          if (!e.isComposing) field.value = "";
        });

        document.addEventListener(
          "focus",
          function (e) {
            if (isViewerCanvas(e.target)) field.focus({ preventScroll: true });
          },
          true,
        );
        document.addEventListener("mousedown", moveCandidateWindowAnchorTo, true);

        if (isViewerCanvas(document.activeElement)) field.focus({ preventScroll: true });
      }

      return Promise.all([
        import("./app/ui.js"),
        import("./core/input/keyboard.js"),
        import("./core/input/keysymdef.js"),
      ]).then(function (modules) {
        ui = modules[0] && modules[0].default;
        var Keyboard = modules[1] && modules[1].default;
        keysyms = modules[2] && modules[2].default;
        if (!ui || !keysyms || typeof Keyboard !== "function") {
          throw new Error("noVNC modules lack Keyboard, keysymdef, or UI");
        }
        if (document.body) {
          install(Keyboard);
        } else {
          document.addEventListener("DOMContentLoaded", function () { install(Keyboard); }, { once: true });
        }
      });
    })();
  `;
}
(t as any)();
var fe: string = "__sandVncLivenessBeacon";
function ln(this: any): any {
  let [e, n, r, o, i]: any = N;
  return `
    (function () {
      if (window.${fe}) return;
      var counters = { keys: 0, clicks: 0, moves: 0, drawOps: 0, inBytes: 0 };
      window.${fe} = counters;
      var PRIMARY_BUTTON_MASK_BITS = 0x07;
      var lastButtonMask = 0;
      import(${((JSON as any).stringify as any)((e as any).modulePath)}).then(function (m) {
        var messages = m.default.messages;
        var keyEvent = messages.${(e as any).member};
        messages.${(e as any).member} = function (sock, keysym, down) {
          if (down) counters.keys += 1;
          return keyEvent.apply(this, arguments);
        };
        if (typeof messages.${(n as any).member} === "function") {
          var qemuKeyEvent = messages.${(n as any).member};
          messages.${(n as any).member} = function (sock, keysym, down) {
            if (down) counters.keys += 1;
            return qemuKeyEvent.apply(this, arguments);
          };
        }
        var pointerEvent = messages.${(r as any).member};
        messages.${(r as any).member} = function (sock, x, y, mask) {
          if (mask & ~lastButtonMask & PRIMARY_BUTTON_MASK_BITS) counters.clicks += 1;
          else counters.moves += 1;
          lastButtonMask = mask;
          return pointerEvent.apply(this, arguments);
        };
      }).catch(function () {});
      import(${((JSON as any).stringify as any)((o as any).modulePath)}).then(function (m) {
        var damage = m.default.prototype.${(o as any).member};
        m.default.prototype.${(o as any).member} = function () {
          counters.drawOps += 1;
          return damage.apply(this, arguments);
        };
      }).catch(function () {});
      import(${((JSON as any).stringify as any)((i as any).modulePath)}).then(function (m) {
        var recvMessage = m.default.prototype.${(i as any).member};
        m.default.prototype.${(i as any).member} = function (e) {
          counters.inBytes += (e && e.data && e.data.byteLength) || 0;
          return recvMessage.apply(this, arguments);
        };
      }).catch(function () {});
    })();
  `;
}
function cn(this: any): any {
  return `JSON.stringify(window.${fe} || null)`;
}
function F(this: any, e: any): any {
  return (typeof e as any) == ("number" as any) && ((Number as any).isFinite as any)(e) && (e as any) >= (0 as any);
}
function un(this: any, e: any): any {
  if ((typeof e as any) != ("string" as any)) return null;
  let n: any = ((JSON as any).parse as any)(e);
  return !(le as any)(n) || !(F as any)((n as any).keys) || !(F as any)((n as any).clicks) || !(F as any)((n as any).moves) || !(F as any)((n as any).drawOps) || !(F as any)((n as any).inBytes) ? null : {
    keys: (n as any).keys,
    clicks: (n as any).clicks,
    moves: (n as any).moves,
    drawOps: (n as any).drawOps,
    inBytes: (n as any).inBytes
  };
}
function pn(this: any): any {
  let e: any = null,
    n: any = [],
    r: any = null,
    o: any = !1;
  function i(this: any): any {
    e = null, n = [], r = null, o = !1;
  }
  function s(this: any, u: any, c: any): any {
    (i as any)(), e = c, r = u;
  }
  function f(this: any, u: any, c: any): any {
    if ((e as any) == (null as any)) return (s as any)(u, c), null;
    let m: any = {
      atMs: u,
      keys: ((c as any).keys as any) - ((e as any).keys as any),
      clicks: ((c as any).clicks as any) - ((e as any).clicks as any),
      moves: ((c as any).moves as any) - ((e as any).moves as any),
      drawOps: ((c as any).drawOps as any) - ((e as any).drawOps as any),
      inBytes: ((c as any).inBytes as any) - ((e as any).inBytes as any)
    };
    if (((m as any).keys as any) < (0 as any) || ((m as any).clicks as any) < (0 as any) || ((m as any).moves as any) < (0 as any) || ((m as any).drawOps as any) < (0 as any) || ((m as any).inBytes as any) < (0 as any)) return (s as any)(u, c), null;
    e = c, ((n as any).push as any)(m);
    let p: any = (u as any) - (ce as any);
    if (n = ((n as any).filter as any)((y: any): any => ((y as any).atMs as any) > (p as any)), ((m as any).drawOps as any) > (0 as any) && (o = !1), o || (r as any) == (null as any) || ((u as any) - (r as any) as any) < (ce as any)) return null;
    let d: any = 0,
      l: any = 0,
      R: any = 0,
      E: any = 0,
      C: any = 0;
    for (let y of n) d += (y as any).keys, l += (y as any).clicks, R += (y as any).moves, E += (y as any).drawOps, C += (y as any).inBytes;
    if (((d as any) + (l as any) as any) < (tn as any) || (E as any) > (0 as any) || (C as any) > (0 as any)) return null;
    o = !0;
    let x: any = ((n as any).find as any)((y: any): any => (((y as any).keys as any) + ((y as any).clicks as any) as any) > (0 as any));
    return {
      phase: "post_connect",
      stallMs: (u as any) - ((x?.atMs ?? u) as any),
      keys: d,
      clicks: l,
      moves: R,
      inBytes: C
    };
  }
  return {
    sample: f,
    reset: i
  };
}
(t as any)();
function fn(this: any): any {
  let e: any = !1;
  return {
    isVisible: (): any => e,
    update(n: any): any {
      let r: any = (n as any) === (!0 as any),
        o: any = r && !e;
      return e = r, o;
    }
  };
}
var ge: any = {};
(Re as any)(ge, {
  getErrorMessage: (): any => h,
  getIpcRenderer: (): any => Y,
  getWebFrame: (): any => vn,
  installSandBrowserPreload: (): any => ht,
  logWarn: (): any => _
});
(t as any)();
(t as any)();
var mn: string = "sand:mouse-history-navigation";
function me(this: any, e: any): any {
  return (e as any) === (3 as any) ? -1 : (e as any) === (4 as any) ? 1 : null;
}
function ye(this: any, e: any): any {
  ((e as any).preventDefault as any)(), ((e as any).stopPropagation as any)(), ((e as any).stopImmediatePropagation as any)();
}
function yn(this: any, e: any, n: any): any {
  let r: any = !1,
    o: any = (f: any): any => {
      let u: any = (me as any)((f as any).button);
      (u as any) == (null as any) || ((f as any).isTrusted as any) === (!1 as any) || (r = !0, (ye as any)(f), (n as any)(u));
    },
    i: any = (f: any): any => {
      !r || ((me as any)((f as any).button) as any) == (null as any) || (ye as any)(f);
    },
    s: any = (f: any): any => {
      !r || ((me as any)((f as any).button) as any) == (null as any) || ((ye as any)(f), r = !1);
    };
  return ((e as any).addEventListener as any)("mousedown", o, !0), ((e as any).addEventListener as any)("mouseup", i, !0), ((e as any).addEventListener as any)("auxclick", s, !0), (): any => {
    ((e as any).removeEventListener as any)("mousedown", o, !0), ((e as any).removeEventListener as any)("mouseup", i, !0), ((e as any).removeEventListener as any)("auxclick", s, !0);
  };
}
(t as any)();
var gn: number = 6e4;
function En(this: any, e: any): any {
  return (((((e as any).policy as any).run as any)((): any => (e as any).call) as any).catch as any)((n: any): any => {
    throw n instanceof I ? (((e as any).reportStall as any)({
      method: (e as any).method,
      since: (e as any).since
    }), ((e as any).buildStallError as any)()) : n;
  });
}
(t as any)();
function h(this: any, e: any): any {
  return e instanceof Error ? (e as any).message : void 0;
}
function _(this: any, ...e: any): any {
  ((console as any).warn as any)("[sand-webview-preload]", ...e);
}
var Rn: any = [".okta.com", ".okta-emea.com", ".oktapreview.com", ".duosecurity.com", ".login.microsoftonline.com", ".onelogin.com", ".auth0.com", ".pingidentity.com", ".rippling.com"];
var bn: any = !1,
  Sn: any = null,
  hn: any = null;
function _n(this: any): any {
  if (!bn) {
    bn = !0;
    try {
      let e: any = (require as any)("electron");
      Sn = (e as any).ipcRenderer ?? null, hn = (e as any).webFrame ?? null;
    } catch (e: any) {
      (_ as any)("electron module unavailable", (h as any)(e));
    }
  }
}
function Y(this: any): any {
  return (_n as any)(), Sn;
}
function vn(this: any): any {
  return (_n as any)(), hn;
}
function mt(this: any, e: any): any {
  if ((typeof e as any) != ("string" as any) || ((e as any).length as any) === (0 as any)) return !1;
  for (let n: any = 0; (n as any) < ((Rn as any).length as any); n++) if (((e as any).endsWith as any)((Rn as any)[n])) return !0;
  return !1;
}
function yt(this: any): any {
  let e: any = (vn as any)();
  if ((e as any) == (null as any) || (typeof location as any) > ("u" as any) || !(mt as any)((location as any).hostname)) return;
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
  `) as any).catch as any)((r: any): any => {
    (_ as any)("local network polyfill injection failed", (h as any)(r));
  });
}
function gt(this: any): any {
  try {
    return new (DOMException as any)("Passkey request stalled", "NotAllowedError");
  } catch {
    let n: any = new (Error as any)("Passkey request stalled");
    return (n as any).name = "NotAllowedError", n;
  }
}
var Et: any = (A as any)({
  name: "sand-webview-passkey-stall",
  timeoutMs: gn
});
function kn(this: any, e: any, n: any, r: any): any {
  return function (this: any, ...i: any): any {
    let s: any = ((Date as any).now as any)(),
      f: any;
    try {
      let u: any = ((r as any).apply as any)((navigator as any).credentials, i);
      f = ((Promise as any).resolve as any)(u);
    } catch (u: any) {
      return ((Promise as any).reject as any)(u);
    }
    return (En as any)({
      policy: Et,
      method: n,
      since: s,
      call: f,
      reportStall: (u: any): any => {
        try {
          ((e as any).sendToHost as any)("sand:browser-passkey-stalled", u);
        } catch (c: any) {
          (_ as any)("passkey stall send failed", (h as any)(c));
        }
      },
      buildStallError: gt
    });
  };
}
function Rt(this: any): any {
  if ((typeof navigator as any) > ("u" as any)) return;
  let e: any = (Y as any)();
  if ((e as any) != (null as any) && (navigator as any).credentials) {
    if ((typeof ((navigator as any).credentials as any).create as any) == ("function" as any)) {
      let n: any = ((((navigator as any).credentials as any).create as any).bind as any)((navigator as any).credentials);
      ((navigator as any).credentials as any).create = (kn as any)(e, "create", n);
    }
    if ((typeof ((navigator as any).credentials as any).get as any) == ("function" as any)) {
      let n: any = ((((navigator as any).credentials as any).get as any).bind as any)((navigator as any).credentials);
      ((navigator as any).credentials as any).get = (kn as any)(e, "get", n);
    }
  }
}
function bt(this: any): any {
  (typeof window as any) > ("u" as any) || ((window as any).__sandDialogOverridesApplied as any) !== (!0 as any) && ((window as any).alert = function (this: any): any {}, (window as any).confirm = function (this: any): any {
    return !0;
  }, (window as any).prompt = function (this: any): any {
    return null;
  }, (window as any).__sandDialogOverridesApplied = !0);
}
function kt(this: any): any {
  let e: any = (Y as any)();
  if ((e as any) == (null as any)) return;
  let n: any = e;
  if ((typeof window as any) > ("u" as any) || (typeof location as any) > ("u" as any)) return;
  let r: any = (location as any).origin;
  function o(this: any): any {
    try {
      ((n as any).sendToHost as any)("sand:browser-popup-closed", {
        url: (location as any).href
      });
    } catch (i: any) {
      (_ as any)("popup-closed send failed", (h as any)(i));
    }
  }
  ((window as any).addEventListener as any)("beforeunload", o), ((window as any).addEventListener as any)("pagehide", o), ((window as any).addEventListener as any)("pageshow", function (this: any, s: any): any {
    if (!(!s || ((s as any).persisted as any) !== (!0 as any)) && ((location as any).origin as any) === (r as any)) try {
      ((n as any).sendToHost as any)("sand:browser-origin-return", {
        origin: r,
        currentUrl: (location as any).href
      });
    } catch (f: any) {
      (_ as any)("origin-return send failed", (h as any)(f));
    }
  });
}
function St(this: any): any {
  let e: any = (Y as any)();
  (e as any) == (null as any) || (typeof window as any) > ("u" as any) || (yn as any)(window, (n: any): any => {
    ((e as any).send as any)(mn, n);
  });
}
function ht(this: any): any {
  try {
    (St as any)();
  } catch (e: any) {
    (_ as any)("mouse history install failed", (h as any)(e));
  }
  try {
    (yt as any)();
  } catch (e: any) {
    (_ as any)("local network polyfill install failed", (h as any)(e));
  }
  try {
    (Rt as any)();
  } catch (e: any) {
    (_ as any)("webauthn polyfill install failed", (h as any)(e));
  }
  try {
    (bt as any)();
  } catch (e: any) {
    (_ as any)("dialog stubs install failed", (h as any)(e));
  }
  try {
    (kt as any)();
  } catch (e: any) {
    (_ as any)("ipc wiring install failed", (h as any)(e));
  }
}
function _t(this: any, e: any): any {
  let n: any = ((e as any).getIpcRenderer as any)();
  return (n as any) == (null as any) ? null : (ie as any)(Ze, (Ge as any)({
    ipcRenderer: n
  }));
}
var xn: any = {
    minIntervalMs: 500,
    largeUpdateBytes: (8 as any) * (1024 as any),
    smallUpdateBytes: 1024,
    smallUpdatesAfterLarge: 4
  },
  vt: any = {
    ...xn,
    minIntervalMs: 0
  };
function M(this: any): any {
  if ((typeof location as any) > ("u" as any) || !(((location as any).pathname as any).endsWith as any)("/vnc.html")) return !1;
  try {
    return (((new (URLSearchParams as any)((location as any).search) as any).get as any)("sandInteractive") as any) === ("1" as any);
  } catch {
    return !1;
  }
}
function Tn(this: any): any {
  if ((typeof document as any) > ("u" as any)) return null;
  let e: any = ((document as any).getElementById as any)("noVNC_clipboard_text");
  return e instanceof HTMLTextAreaElement ? e : null;
}
function Tt(this: any, {
  getErrorMessage: e,
  getWebFrame: n,
  logWarn: r
}: any): any {
  if ((typeof location as any) > ("u" as any) || !(((location as any).pathname as any).endsWith as any)("/vnc.html")) return;
  let o: any = `
    #noVNC_control_bar,
    #noVNC_control_bar_handle,
    #noVNC_control_bar_anchor,
    #noVNC_status,
    .noVNC_logo {
      display: none !important;
      pointer-events: none !important;
      visibility: hidden !important;
    }
    :root:not(.noVNC_loading):not(.noVNC_connecting):not(.noVNC_disconnecting):not(.noVNC_reconnecting) #noVNC_transition{display:none!important}
  `;
  try {
    (n as any)()?.insertCSS(o);
  } catch (s: any) {
    (r as any)("noVNC CSS injection failed", (e as any)(s));
  }
  function i(this: any): any {
    ((document as any).getElementById as any)("noVNC_control_bar")?.classList.remove("noVNC_open");
  }
  (typeof document as any) > ("u" as any) || ((i as any)(), ((document as any).addEventListener as any)("DOMContentLoaded", i, {
    once: !0
  }), ((window as any).addEventListener as any)("load", i, {
    once: !0
  }));
}
function xt(this: any, e: any): any {
  let {
      getErrorMessage: n,
      getIpcRenderer: r,
      getWebFrame: o,
      logWarn: i
    }: any = e,
    s: any = (r as any)(),
    f: any = (_t as any)(e);
  if ((s as any) == (null as any) || (f as any) == (null as any)) return;
  let u: any = f;
  if ((typeof window as any) > ("u" as any) || (typeof document as any) > ("u" as any) || !(M as any)()) return;
  let c: number = 500,
    m: number = 200,
    p: any = (de as any)(),
    d: any = 0,
    l: any = (fn as any)();
  ((s as any).on as any)(ue, (x: any, y: any): any => {
    ((l as any).update as any)(y) && (E as any)();
  });
  function R(this: any): any {
    if (!((l as any).isVisible as any)()) return;
    let x: any = (Tn as any)();
    if ((x as any) == (null as any)) return;
    let y: any = ((p as any).resolveVmText as any)((x as any).value);
    (y as any) != (null as any) && ((((u as any).writeClipboard as any)({
      text: y
    }) as any).catch as any)((V: any): any => {
      (i as any)("vnc clipboard write failed", (n as any)(V));
    });
  }
  function E(this: any): any {
    if (!((l as any).isVisible as any)()) return;
    let x: any = ((Date as any).now as any)();
    ((x as any) - (d as any) as any) < (m as any) || (d = x, ((((((u as any).readClipboard as any)() as any).then as any)((y: any): any => {
      if (!((p as any).shouldSendHostText as any)(y)) return;
      let V: any = (o as any)();
      V?.executeJavaScript((rn as any)(y)).then((q: any): any => {
        let z: any = (on as any)(y, (q as any) === (!0 as any));
        if ((z as any) == (null as any)) return;
        ((p as any).commitHostText as any)(z);
        let Ee: any = (Tn as any)();
        (Ee as any) != (null as any) && ((Ee as any).value = z);
      }).catch((q: any): any => {
        (i as any)("vnc clipboard paste failed", (n as any)(q));
      });
    }) as any).catch as any)((y: any): any => {
      (i as any)("vnc clipboard read failed", (n as any)(y));
    }));
  }
  let C: any = (((O as any)({
    name: "vnc-clipboard-mirror",
    intervalMs: c
  }) as any).start as any)(async (): Promise<any> => {
    (R as any)();
  });
  ((window as any).addEventListener as any)("focus", E), ((document as any).addEventListener as any)("mousedown", E, !0), ((document as any).addEventListener as any)("visibilitychange", (): any => {
    ((document as any).visibilityState as any) === ("visible" as any) && (E as any)();
  }), ((window as any).addEventListener as any)("pagehide", (): any => ((C as any).dispose as any)(), {
    once: !0
  });
}
function wt(this: any, {
  getErrorMessage: e,
  getIpcRenderer: n,
  logWarn: r
}: any): any {
  let o: any = (n as any)();
  if ((o as any) == (null as any) || (typeof document as any) > ("u" as any) || !(M as any)()) return;
  let i: any = new (Set as any)(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]);
  ((document as any).addEventListener as any)("keydown", (s: any): any => {
    if (((i as any).has as any)((s as any).key)) try {
      ((o as any).sendToHost as any)(en, (s as any).key);
    } catch (f: any) {
      (r as any)("vnc host key forward failed", (e as any)(f));
    }
  }, !0);
}
function Ct(this: any, {
  getErrorMessage: e,
  getIpcRenderer: n,
  logWarn: r
}: any): any {
  let o: any = (n as any)();
  if ((o as any) == (null as any)) return;
  let i: any = o;
  if ((typeof window as any) > ("u" as any) || (typeof document as any) > ("u" as any) || (typeof location as any) > ("u" as any) || !(((location as any).pathname as any).endsWith as any)("/vnc.html")) return;
  function s(this: any, l: any, R: any): any {
    try {
      ((i as any).sendToHost as any)("sand:vnc-session", ((JSON as any).stringify as any)({
        phase: l,
        clean: R
      }));
    } catch (E: any) {
      (r as any)("vnc session report failed", (e as any)(E));
    }
  }
  let f: any = 0,
    u: any = !1,
    c: any = null;
  function m(this: any): any {
    let l: any = ((document as any).documentElement as any).classList;
    return ((l as any).contains as any)("noVNC_connected") ? "connected" : ((l as any).contains as any)("noVNC_reconnecting") ? "reconnecting" : ((l as any).contains as any)("noVNC_connecting") ? "connecting" : ((l as any).contains as any)("noVNC_disconnecting") ? "disconnecting" : "disconnected";
  }
  function p(this: any): any {
    let l: any = (m as any)();
    (l as any) !== (c as any) && (c = l, (l as any) === ("connected" as any) ? (f += 1, (s as any)((f as any) > (1 as any) ? "reconnect" : "rfb_connect", !0), u = !0) : u && (l as any) !== ("connecting" as any) && ((s as any)("rfb_disconnect", (l as any) === ("disconnecting" as any)), u = !1));
  }
  function d(this: any): any {
    let l: any = new (MutationObserver as any)(p);
    ((l as any).observe as any)((document as any).documentElement, {
      attributes: !0,
      attributeFilter: ["class"]
    }), (p as any)(), ((window as any).addEventListener as any)("pagehide", (): any => ((l as any).disconnect as any)(), {
      once: !0
    });
  }
  ((document as any).documentElement as any) == (null as any) ? ((document as any).addEventListener as any)("DOMContentLoaded", (): any => (d as any)(), {
    once: !0
  }) : (d as any)();
}
function It(this: any, {
  getErrorMessage: e,
  getIpcRenderer: n,
  getWebFrame: r,
  logWarn: o
}: any): any {
  let i: any = (r as any)();
  if ((i as any) == (null as any)) return;
  let s: any = i;
  if ((typeof document as any) > ("u" as any) || !(((location as any).pathname as any).endsWith as any)("/vnc.html")) return;
  function f(this: any, p: any): any {
    ((((s as any).executeJavaScript as any)(p) as any).catch as any)((d: any): any => {
      (o as any)("vnc frame hold failed", (e as any)(d));
    });
  }
  let u: any = !0,
    c: any = !1;
  function m(this: any): any {
    let p: any = ((document as any).visibilityState as any) === ("hidden" as any) || !u;
    (p as any) !== (c as any) && (c = p, (f as any)((sn as any)(c)));
  }
  (f as any)((an as any)((M as any)() ? vt : xn)), (n as any)()?.on(ue, (p: any, d: any): any => {
    (typeof d as any) == ("boolean" as any) && (u = d, (m as any)());
  }), ((document as any).addEventListener as any)("visibilitychange", m), (m as any)();
}
function Mt(this: any, {
  getErrorMessage: e,
  getIpcRenderer: n,
  getWebFrame: r,
  logWarn: o
}: any): any {
  let i: any = (n as any)(),
    s: any = (r as any)();
  if ((i as any) == (null as any) || (s as any) == (null as any)) return;
  let f: any = i,
    u: any = s;
  if ((typeof window as any) > ("u" as any) || (typeof document as any) > ("u" as any) || !(M as any)()) return;
  ((((u as any).executeJavaScript as any)((ln as any)()) as any).catch as any)((d: any): any => {
    (o as any)("vnc liveness beacon install failed", (e as any)(d));
  });
  let c: any = (pn as any)(),
    m: any = (cn as any)(),
    p: any = (((O as any)({
      name: "vnc-liveness-sampler",
      intervalMs: 1e3
    }) as any).start as any)(async (): Promise<any> => {
      if (((document as any).documentElement?.classList.contains("noVNC_connected") as any) !== (!0 as any)) {
        ((c as any).reset as any)();
        return;
      }
      try {
        let d: any = await ((u as any).executeJavaScript as any)(m),
          l: any = (un as any)(d);
        if ((l as any) == (null as any)) return;
        let R: any = ((c as any).sample as any)(((performance as any).now as any)(), l);
        if ((R as any) == (null as any)) return;
        ((f as any).sendToHost as any)(nn, R);
      } catch (d: any) {
        (o as any)("vnc liveness sample failed", (e as any)(d));
      }
    });
  ((window as any).addEventListener as any)("pagehide", (): any => ((p as any).dispose as any)(), {
    once: !0
  });
}
function At(this: any, {
  getErrorMessage: e,
  getWebFrame: n,
  logWarn: r
}: any): any {
  let o: any = (n as any)();
  if ((o as any) == (null as any) || !(M as any)()) return;
  let i: any = `
    (function () {
      if (window.__sandVncMacKeysInstalled) return;
      if (!/Mac/i.test((navigator && navigator.platform) || "")) return;
      window.__sandVncMacKeysInstalled = true;

      var CHORDS = ${((JSON as any).stringify as any)(ae)};
      var HELD_MODIFIERS = ${((JSON as any).stringify as any)(se)};

      var ui = null;
      import("./app/ui.js")
        .then(function (m) { ui = m && m.default; })
        .catch(function () {});

      document.addEventListener("keydown", function (e) {
        if (!e.metaKey) return;
        var chord = CHORDS.find(function (entry) { return entry.code === e.code; });
        if (!chord) return;
        var rfb = ui && ui.rfb;
        if (!rfb || typeof rfb.sendKey !== "function") return;
        e.preventDefault();
        e.stopImmediatePropagation();
        // noVNC presses Meta/Alt down for Cmd, so release them first to avoid
        // sending Alt+Ctrl+key instead of a clean Ctrl+key.
        for (var i = 0; i < HELD_MODIFIERS.length; i++) {
          try { rfb.sendKey(HELD_MODIFIERS[i][0], HELD_MODIFIERS[i][1], false); } catch (_e) {}
        }
        var withShift = e.shiftKey || chord.forceShift;
        var chordKeysym = withShift ? chord.keysym - 0x20 : chord.keysym;
        rfb.sendKey(${W}, "ControlLeft", true);
        if (withShift) rfb.sendKey(${G}, "ShiftLeft", true);
        rfb.sendKey(chordKeysym, e.code, true);
        rfb.sendKey(chordKeysym, e.code, false);
        if (withShift) rfb.sendKey(${G}, "ShiftLeft", false);
        rfb.sendKey(${W}, "ControlLeft", false);
      }, true);
    })();
  `;
  ((((o as any).executeJavaScript as any)(i) as any).catch as any)((s: any): any => {
    (r as any)("vnc mac key mapping injection failed", (e as any)(s));
  });
}
function Ot(this: any, {
  getErrorMessage: e,
  getWebFrame: n,
  logWarn: r
}: any): any {
  let o: any = (n as any)();
  (o as any) != (null as any) && (M as any)() && ((((o as any).executeJavaScript as any)((dn as any)()) as any).catch as any)((i: any): any => {
    (r as any)("vnc ime field injection failed", (e as any)(i));
  });
}
function wn(this: any, e: any = ge): any {
  let {
    getErrorMessage: n,
    installSandBrowserPreload: r,
    logWarn: o
  }: any = e;
  (r as any)();
  try {
    (Tt as any)(e);
  } catch (i: any) {
    (o as any)("noVNC chrome hider install failed", (n as any)(i));
  }
  try {
    (xt as any)(e);
  } catch (i: any) {
    (o as any)("vnc clipboard bridge install failed", (n as any)(i));
  }
  try {
    (wt as any)(e);
  } catch (i: any) {
    (o as any)("vnc host key forwarder install failed", (n as any)(i));
  }
  try {
    (Ct as any)(e);
  } catch (i: any) {
    (o as any)("vnc rfb session reporter install failed", (n as any)(i));
  }
  try {
    (It as any)(e);
  } catch (i: any) {
    (o as any)("vnc frame hold install failed", (n as any)(i));
  }
  try {
    (At as any)(e);
  } catch (i: any) {
    (o as any)("vnc mac key mapping install failed", (n as any)(i));
  }
  try {
    (Ot as any)(e);
  } catch (i: any) {
    (o as any)("vnc ime field install failed", (n as any)(i));
  }
  try {
    (Mt as any)(e);
  } catch (i: any) {
    (o as any)("vnc liveness tripwire install failed", (n as any)(i));
  }
}
(wn as any)();
0 && ((module as any).exports = {
  installVncPreload
});
//# debugId=bf05ff57-50f7-469e-9fa9-f1ff0acb31b6
