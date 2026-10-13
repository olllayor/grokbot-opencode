declare var TextEncoder: any;
declare var global: any;
declare var key: any;
declare var require: any;
declare var self: any;
declare var window: any;
"use strict";

!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "33657a25-09cc-4551-aa94-408abfc7fcc6", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-33657a25-09cc-4551-aa94-408abfc7fcc6");
  } catch (e: any) {}
} as any)();
"use strict";
var x: any = (require as any)("electron");
var z: any = ["ready", "failed", "stuck", "aborted"];
var On: any = {
  none: 0,
  equal: (1 as any) / (2 as any),
  full: 1
};
function y(this: any, e: any): any {
  return (typeof e as any) == ("object" as any) && (e as any) !== (null as any) && !((Array as any).isArray as any)(e);
}
var bt: any = (1024 as any) * (1024 as any);
var Ge: number = 864e5,
  Jt: any = (30 as any) * (Ge as any);
var Xt: any = [...z, "pending"];
var Rr: any = (256 as any) * (1024 as any);
var Ke: any = /^[a-z0-9]+-[0-9]+$/;
function X(this: any, e: any): any {
  return ((Ke as any).test as any)(e);
}
var $e: any = (2 as any) ** (32 as any);
function Q(this: any, e: any): any {
  return ((Number as any).isInteger as any)(e) && (e as any) >= (0 as any) && (e as any) < ($e as any);
}
var P: number = 2,
  Z: any = ["click", "keydown", "pointerdown", "wheel", "input"],
  ee: any = ["open", "close"],
  ne: any = ["overlay", "workspace", "shell"],
  te: any = ["button", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "tab", "checkbox", "radio", "switch", "slider", "textbox", "searchbox", "combobox", "listbox", "treeitem", "gridcell", "row", "dialog", "alertdialog", "log", "region", "status"],
  re: any = ["immediate", "user-blocking", "normal", "idle"],
  oe: any = ["mount", "update"],
  ie: any = ["layout", "passive"],
  ae: any = ["view", "layout"],
  se: any = ["transition", "restore"],
  de: any = ["default", "transition"],
  N: any = ["quiet", "cap", "superseded"],
  le: any = ["presented", ...N];
var We: any = ((Object as any).freeze as any)({
  sampled: !1,
  sampleRate: 0,
  additionalArguments: ((Object as any).freeze as any)([])
});
var qe: any = ["dune_session_id", "dune_app", "app_version", "app_built_at", "track", "platform", "arch", "dune_install_id", "dune_row_id"],
  Wr: any = new (Set as any)(["dune_signal", "dune_reason", ...qe]);
var ao: any = (BigInt as any)(127),
  so: any = (BigInt as any)(7),
  lo: any = new (TextEncoder as any)();
var mo: any = (BigInt as any)(1e3);
var Je: any = (Symbol as any)("redirect"),
  ce: any = class {
    [key: string]: any;
    constructor(n: any, t: any) {
      (this as any).link = n;
      (this as any).history = t;
    }
    link: any;
    history: any;
    [Je](): any {
      return "redirect";
    }
  };
var pe: any = ((Object as any).freeze as any)({
    workspace: ((Object as any).freeze as any)({
      idPrefix: "view"
    }),
    overlay: ((Object as any).freeze as any)({
      idPrefix: "overlay"
    })
  }),
  ko: any = ((Object as any).freeze as any)({
    text: "",
    value: void 0
  });
var m: any = (e: any): any => (typeof e as any) == ("string" as any),
  L: any = (e: any): any => (typeof e as any) == ("boolean" as any),
  a: any = (e: any): any => (typeof e as any) == ("number" as any) && ((Number as any).isFinite as any)(e),
  l: any = (e: any): any => (typeof e as any) == ("number" as any) && ((Number as any).isInteger as any)(e) && (e as any) >= (0 as any),
  ue: any = (e: any): any => (typeof e as any) == ("string" as any) && (X as any)(e),
  F: any = (e: any): any => (typeof e as any) == ("number" as any) && (Q as any)(e),
  Xe: any = (e: any): any => (e as any) === (P as any),
  w: any = (e: any): any => (a as any)(e) && (e as any) >= (0 as any),
  Qe: any = (e: any): any => (a as any)(e) && (e as any) > (0 as any) && (e as any) <= (1 as any);
function u(this: any, e: any): any {
  let n: any = new (Set as any)(e);
  return (t: any): any => (typeof t as any) == ("string" as any) && ((n as any).has as any)(t);
}
function ye(this: any, e: any): any {
  return (n: any): any => (n as any) === (null as any) || (e as any)(n);
}
function O(this: any, e: any): any {
  return (n: any): any => ((Array as any).isArray as any)(n) && ((n as any).every as any)(e);
}
function T(this: any, e: any, n: any, t: any = {}): any {
  if (!(y as any)(e)) return !1;
  for (let o of ((Object as any).keys as any)(e)) if (!((Object as any).hasOwn as any)(n, o) && !((Object as any).hasOwn as any)(t, o)) return !1;
  for (let [o, i] of ((Object as any).entries as any)(n)) if (!(i as any)((e as any)[o])) return !1;
  for (let [o, i] of ((Object as any).entries as any)(t)) if (((e as any)[o] as any) !== (void 0 as any) && !(i as any)((e as any)[o])) return !1;
  return !0;
}
function U(this: any, e: any, n: any = {}): any {
  return (t: any): any => {
    if (!(y as any)(t) || (typeof (t as any).kind as any) != ("string" as any)) return !1;
    let o: any = ((Object as any).hasOwn as any)(e, (t as any).kind) ? (e as any)[(t as any).kind] : void 0,
      i: any = ((Object as any).hasOwn as any)(n, (t as any).kind) ? (n as any)[(t as any).kind] : void 0;
    return (o as any) != (null as any) && (T as any)(t, {
      kind: m,
      ...o
    }, i);
  };
}
var fe: any = (u as any)(((Object as any).keys as any)(pe)),
  Ze: any = /^(view|overlay):[a-z0-9-]+(\/[a-z0-9-]+)*$/,
  en: any = (e: any): any => !(y as any)(e) || (typeof (e as any).entrypointId as any) != ("string" as any) || !(T as any)(e, {
    surface: (u as any)(ne),
    entrypointId: m
  }) ? !1 : ((e as any).surface as any) === ("shell" as any) ? ((e as any).entrypointId as any) === ("" as any) : ((Ze as any).test as any)((e as any).entrypointId),
  nn: any = (U as any)({
    navigation: {
      action: (u as any)(ee),
      surface: fe,
      entrypointId: m,
      startMs: a
    },
    selection: {
      startMs: a
    },
    interaction: {
      event: (u as any)(Z),
      startMs: a
    }
  }, {
    navigation: {
      absorbedInputs: l
    },
    interaction: {
      route: en,
      target: (e: any): any => (T as any)(e, {
        component: F
      }, {
        role: (u as any)(te)
      })
    }
  }),
  tn: any = (U as any)({
    render: {
      component: F,
      phase: (u as any)(oe),
      compiled: L,
      baseMs: a
    },
    commit: {
      priority: (u as any)(re)
    },
    effects: {
      boundary: m,
      passiveMs: a
    },
    "component-effects": {
      component: F,
      phase: (u as any)(ie)
    }
  }),
  rn: any = (U as any)({
    settle: {
      entrypointId: m,
      chunk: (u as any)(ae),
      cached: L
    },
    presented: {
      ticket: l,
      entrypointId: m,
      surface: fe,
      commitClass: (u as any)(se)
    },
    publish: {
      store: m,
      commit: (u as any)(de),
      version: l,
      listeners: l
    },
    rpc: {
      edge: m,
      method: m,
      ok: L,
      failureCode: (ye as any)(m)
    },
    event: {
      event: m,
      interactionId: l,
      inputDelayMs: a,
      processingMs: a
    },
    "long-animation-frame": {
      blockingMs: a,
      renderMs: a,
      styleAndLayoutMs: a,
      scripts: l
    }
  }),
  me: any = (e: any): any => (T as any)(e, {
    id: l,
    parent: (ye as any)(l),
    startMs: a,
    durationMs: a,
    selfMs: a,
    detail: tn
  }),
  ge: any = (e: any): any => (T as any)(e, {
    startMs: a,
    durationMs: a,
    detail: rn
  }),
  Re: any = {
    version: Xe,
    lastCommitMs: w,
    commitCount: l,
    renderSelfMs: w,
    sampleRate: Qe
  },
  _o: any = {
    ...Re,
    id: ue,
    root: nn,
    endMs: a,
    closedBy: (u as any)(N),
    spans: (O as any)(me),
    folded: l,
    dropped: l
  },
  vo: any = {
    ticket: l,
    measures: (O as any)(ge),
    presentedMs: w,
    dismissedMs: w
  },
  Mo: any = {
    ...Re,
    id: ue,
    startMs: a,
    endMs: a,
    closedBy: (u as any)(le),
    spans: (O as any)(me),
    measures: (O as any)(ge),
    folded: l,
    dropped: l
  };
function ke(this: any, e: any): any {
  return {
    invoke: (n: any, t: any): any => ((e as any).invoke as any)(n, t),
    on: (n: any, t: any): any => {
      let o: any = (i: any, g: any): any => {
        (t as any)(g);
      };
      return ((e as any).on as any)(n, o), (): any => {
        ((e as any).off as any)(n, o);
      };
    }
  };
}
function Ee(this: any, e: any): any {
  return (e as any) != (null as any) ? (ke as any)((e as any).ipcRenderer) : (ke as any)((x as any).ipcRenderer);
}
function an(this: any, e: any): any {
  return (e as any) === (null as any) ? "null" : ((Array as any).isArray as any)(e) ? "array" : typeof e;
}
function sn(this: any, e: any, n: any, t: any): any {
  return {
    ok: !1,
    path: e,
    expected: n,
    received: (an as any)(t)
  };
}
function dn(this: any, e: any): any {
  return ((e as any).optional as any) === (!0 as any);
}
function ln(this: any, e: any, n: any): any {
  return {
    expects: e,
    check: n,
    "~standard": {
      version: 1,
      vendor: "dune",
      validate: (t: any): any => {
        let o: any = (n as any)(t, []);
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
function cn(this: any, e: any, n: any, t: any): any {
  if (!(y as any)(n)) return (sn as any)(t, "object", n);
  let o: any = [];
  for (let [i, g] of ((Object as any).entries as any)(e)) {
    let k: any = ((Object as any).hasOwn as any)(n, i) ? (n as any)[i] : void 0;
    if ((k as any) === (void 0 as any) && (dn as any)(g)) continue;
    let b: any = ((g as any).check as any)(k, [...t, i]);
    if (!(b as any).ok) return b;
    ((o as any).push as any)([i, (b as any).value]);
  }
  return {
    ok: !0,
    value: ((Object as any).fromEntries as any)(o)
  };
}
function _(this: any, e: any): any {
  return (ln as any)("object", (n: any, t: any): any => (cn as any)(e, n, t));
}
function C(this: any): any {
  return {};
}
function pn(this: any, e: any): any {
  let n: any = (e as any)["~standard"];
  return (typeof n as any) == ("object" as any) && (n as any) !== (null as any) && ((n as any).version as any) === (1 as any) && (typeof (n as any).validate as any) == ("function" as any);
}
var D: any = class extends (Error as any) {
  declare name: any;
  [key: string]: any;
  constructor(n: any) {
    super(`rpcMethod().args: field "${n}" is not an rpc field validator; pass rpc* combinators or one Standard Schema v1 value.`), (this as any).name = "RpcMethodDeclarationError";
  }
};
function f(this: any): any {
  return {
    noArgs: {
      schema: null
    },
    args: (e: any): any => {
      if ((pn as any)(e)) return {
        schema: e
      };
      for (let [n, t] of ((Object as any).entries as any)(e)) if ((typeof t?.check as any) != ("function" as any)) throw new (D as any)(n);
      return {
        schema: (_ as any)(e)
      };
    }
  };
}
function j(this: any, e: any, n: any): any {
  return ((Object as any).freeze as any)({
    kind: "rpc-edge",
    edge: e,
    methods: (n as any).methods,
    hasEvents: ((n as any).events as any) != (null as any)
  });
}
var un: string = "__DUNE_DEVTOOLS_HOOK__";
function yn(this: any, e: any): any {
  return (y as any)(e) && ((e as any).version as any) === (1 as any) && (typeof (e as any).register as any) == ("function" as any);
}
function be(this: any, e: any = globalThis): any {
  let n: any = (y as any)(e) ? (e as any)[un] : void 0;
  return (yn as any)(n) ? n : null;
}
var he: string = "edge/unknown-method",
  B: string = "edge/transport-failed";
var Te: string = "edge/handler-failed";
var R: any = class extends (Error as any) {
  declare name: any;
  [key: string]: any;
  code: any;
  detail: any;
  constructor(n: any) {
    super(`${(n as any).code}: ${(n as any).detail}`), (this as any).name = "EdgeCallFailure", (this as any).code = (n as any).code, (this as any).detail = (n as any).detail;
  }
};
function Se(this: any, e: any): any {
  return (typeof e as any) != ("object" as any) || (e as any) == (null as any) || !("ok" in e) ? !1 : (typeof (e as any).ok as any) == ("boolean" as any);
}
function fn(this: any, e: any, n: any): any {
  return `dune-rpc:${e}:m:${n}`;
}
function xe(this: any, e: any, n: any): any {
  return `dune-rpc:${e}:e:${n}`;
}
function mn(this: any, e: any): any {
  return `dune-rpc:${e}:probe`;
}
var Ki: any = (_ as any)({});
function V(this: any, e: any, n: any, t: any = {}): any {
  let o: any = {},
    i: any = (t as any).measures ?? null,
    g: any = async (d: any, c: any): Promise<any> => {
      let s: any = c instanceof Error ? (c as any).message : (String as any)(c),
        p: any;
      try {
        p = await ((n as any).invoke as any)((mn as any)((e as any).edge), d);
      } catch {
        return new (R as any)({
          code: B,
          detail: s
        });
      }
      return (Se as any)(p) && !(p as any).ok && (((p as any).failure as any).code as any) === (he as any) ? new (R as any)((p as any).failure) : new (R as any)({
        code: B,
        detail: s
      });
    },
    k: any = async (d: any, c: any): Promise<any> => {
      let s: any;
      try {
        s = await ((n as any).invoke as any)((fn as any)((e as any).edge, d), c);
      } catch (p: any) {
        throw await (g as any)(d, p);
      }
      if (!(Se as any)(s)) throw new (R as any)({
        code: Te,
        detail: "The edge replied outside its envelope."
      });
      if ((s as any).ok) return (s as any).value;
      throw new (R as any)((s as any).failure);
    },
    b: any = (d: any, c: any): any => {
      if ((i as any) == (null as any)) return (k as any)(d, c);
      let s: any = ((i as any).now as any)(),
        p: any = (S: any, je: any): any => {
          ((i as any).record as any)({
            startMs: s,
            durationMs: (((i as any).now as any)() as any) - (s as any),
            detail: {
              kind: "rpc",
              edge: (e as any).edge,
              method: d,
              ok: S,
              failureCode: je
            }
          });
        };
      return (((k as any)(d, c) as any).then as any)((S: any): any => ((p as any)(!0, null), S), (S: any): any => {
        throw (p as any)(!1, S instanceof R ? (S as any).code : null), S;
      });
    };
  for (let [d, {
    schema: c
  }] of ((Object as any).entries as any)((e as any).methods)) (o as any)[d] = (c as any) === (null as any) ? (): any => (b as any)(d, {}) : (s: any): any => (b as any)(d, s);
  return (e as any).hasEvents && ((o as any).subscribe = (d: any): any => {
    let c: any = [];
    for (let [s, p] of ((Object as any).entries as any)(d)) (p as any) != (null as any) && ((c as any).push as any)(((n as any).on as any)((xe as any)((e as any).edge, s), p));
    return (): any => {
      for (let s of c) (s as any)();
    };
  }), (be as any)()?.register({
    kind: "rpc-edge",
    role: "bridge",
    declaration: e,
    trust: []
  }), o;
}
var Ue: any = (require as any)("electron");
var gn: string = "data:image/svg+xml",
  Rn: any = (64 as any) * (1024 as any);
function H(this: any, e: any): any {
  return (typeof e as any) == ("string" as any) && ((e as any).startsWith as any)(gn) && ((e as any).length as any) <= (Rn as any);
}
var G: number = 64;
function kn(this: any, e: any): any {
  return (typeof e as any) == ("object" as any) && (e as any) !== (null as any) && "agentId" in e && "name" in e && "markSvgDataUrl" in e && (typeof (e as any).agentId as any) == ("string" as any) && (((((e as any).agentId as any).trim as any)() as any).length as any) > (0 as any) && (typeof (e as any).name as any) == ("string" as any) && (((((e as any).name as any).trim as any)() as any).length as any) > (0 as any) && (H as any)((e as any).markSvgDataUrl);
}
function _e(this: any, e: any): any {
  return ((Array as any).isArray as any)(e) && ((e as any).length as any) <= (G as any) && ((e as any).every as any)(kn);
}
var K: number = 640;
function ve(this: any, e: any): any {
  return (typeof e as any) == ("number" as any) && ((Number as any).isInteger as any)(e) && (e as any) >= (0 as any) && (e as any) <= (K as any);
}
var I: number = 16384;
function Me(this: any, e: any): any {
  return (typeof e as any) == ("number" as any) && ((Number as any).isInteger as any)(e) && (((Math as any).abs as any)(e) as any) <= (I as any);
}
var $: number = 64;
function we(this: any, e: any): any {
  return (typeof e as any) == ("string" as any) && ((((e as any).trim as any)() as any).length as any) > (0 as any) && ((e as any).length as any) <= ($ as any);
}
function v(this: any, e: any, n: any): any {
  let t: any = ((Object as any).getOwnPropertyDescriptor as any)(e, n);
  return (t as any) !== (void 0 as any) && "value" in t ? (t as any).value : void 0;
}
function W(this: any, e: any): any {
  return (typeof e as any) == ("number" as any) && ((Number as any).isInteger as any)(e) && (e as any) >= (0 as any);
}
function Oe(this: any, e: any): any {
  if ((typeof e as any) != ("object" as any) || (e as any) === (null as any)) return null;
  try {
    let n: any = ((Object as any).getPrototypeOf as any)(e);
    if ((n as any) !== ((Object as any).prototype as any) && (n as any) !== (null as any)) return null;
    let t: any = (v as any)(e, "usedBytes"),
      o: any = (v as any)(e, "limitBytes"),
      i: any = (v as any)(e, "loadedAgents"),
      g: any = (v as any)(e, "loadedTranscriptEntries"),
      k: any = (v as any)(e, "idleMinutesLast15m");
    return (typeof t as any) != ("number" as any) || !((Number as any).isFinite as any)(t) || (t as any) < (0 as any) || (typeof o as any) != ("number" as any) || !((Number as any).isFinite as any)(o) || (o as any) <= (0 as any) ? null : {
      ...{
        usedBytes: (t as any) === (0 as any) ? 0 : t,
        limitBytes: o
      },
      ...((W as any)(i) ? {
        loadedAgents: i
      } : {}),
      ...((W as any)(g) ? {
        loadedTranscriptEntries: g
      } : {}),
      ...((W as any)(k) ? {
        idleMinutesLast15m: k
      } : {})
    };
  } catch {
    return null;
  }
}
function De(this: any, e: any): any {
  return (typeof e as any) == ("object" as any) && (e as any) !== (null as any) && !((Array as any).isArray as any)(e);
}
function Ce(this: any, e: any): any {
  let n: any;
  try {
    n = ((JSON as any).parse as any)(e);
  } catch {
    n = void 0;
  }
  return n;
}
function Y(this: any, e: any): any {
  return (e as any) === (null as any) ? "null" : ((Array as any).isArray as any)(e) ? "array" : typeof e;
}
function Ie(this: any, e: any, n: any): any {
  return (Ae as any)(e, (t: any, o: any): any => {
    let i: any = (n as any)(t);
    return (i as any).ok ? i : {
      ok: !1,
      path: o,
      expected: e,
      received: (Y as any)(t)
    };
  });
}
function Ae(this: any, e: any, n: any): any {
  return {
    expects: e,
    check: n,
    "~standard": {
      version: 1,
      vendor: "sand",
      validate: (t: any): any => {
        let o: any = (n as any)(t, []);
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
function E(this: any, e: any, n: any): any {
  return (Ie as any)(e, (t: any): any => (n as any)(t) ? {
    ok: !0,
    value: t
  } : {
    ok: !1
  });
}
function Pe(this: any, e: any, n: any): any {
  return (Ie as any)(e, (t: any): any => {
    let o: any = (n as any)(t);
    return (o as any).success ? {
      ok: !0,
      value: (o as any).data
    } : {
      ok: !1
    };
  });
}
var q: any = (64 as any) * (1024 as any);
function En(this: any, e: any): any {
  if (((e as any).length as any) > (q as any) || ((((new (TextEncoder as any)() as any).encode as any)(e) as any).byteLength as any) > (q as any)) return `string over ${q} bytes`;
  if (((((e as any).trim as any)() as any).length as any) === (0 as any)) return null;
  let n: any = (Ce as any)(e);
  return (De as any)(n) ? null : (n as any) === (void 0 as any) ? "malformed JSON" : `JSON ${(Y as any)(n)}`;
}
var Pa: any = (Ae as any)("JSON object string", (e: any, n: any): any => {
    let t: any = (i: any): any => ({
      ok: !1,
      path: n,
      expected: "JSON object string",
      received: i
    });
    if ((typeof e as any) != ("string" as any)) return (t as any)((Y as any)(e));
    let o: any = (En as any)(e);
    return (o as any) === (null as any) ? {
      ok: !0,
      value: e
    } : (t as any)(o);
  }),
  Na: any = (E as any)("non-empty string", (e: any): any => (typeof e as any) == ("string" as any) && ((e as any).length as any) > (0 as any)),
  A: any = (E as any)("non-blank string", (e: any): any => (typeof e as any) == ("string" as any) && ((((e as any).trim as any)() as any).length as any) > (0 as any)),
  La: any = (E as any)(`non-blank string of at most ${$} characters`, we),
  Ne: any = (Pe as any)("non-empty string", (e: any): any => {
    if ((typeof e as any) != ("string" as any)) return {
      success: !1
    };
    let n: any = ((e as any).trim as any)();
    return ((n as any).length as any) > (0 as any) ? {
      success: !0,
      data: n
    } : {
      success: !1
    };
  });
var Fa: any = (Pe as any)("heap metrics report", (e: any): any => {
  let n: any = (Oe as any)(e);
  return (n as any) === (null as any) ? {
    success: !1
  } : {
    success: !0,
    data: n
  };
});
var bn: any = (E as any)("svg data url", H),
  Sn: any = (E as any)(`at most ${G} mount targets`, _e),
  hn: any = (E as any)(`integer from 0 to ${K}`, ve),
  Le: any = (E as any)(`integer from -${I} to ${I}`, Me),
  Fe: any = (j as any)("desktop-mount", {
    methods: {
      mount: (((f as any)() as any).args as any)({
        agentId: A,
        name: A,
        markSvgDataUrl: bn
      }),
      unmount: ((f as any)() as any).noArgs,
      offerChoices: (((f as any)() as any).args as any)({
        choices: Sn
      }),
      read: ((f as any)() as any).noArgs,
      readChoices: ((f as any)() as any).noArgs,
      submitPrompt: (((f as any)() as any).args as any)({
        prompt: Ne
      }),
      switchTo: (((f as any)() as any).args as any)({
        agentId: A
      }),
      reachForMenu: (((f as any)() as any).args as any)({
        heightPx: hn
      }),
      movePanel: (((f as any)() as any).args as any)({
        dx: Le,
        dy: Le
      }),
      endPanelMove: ((f as any)() as any).noArgs
    },
    events: (C as any)(),
    failureCodes: (C as any)()
  });
var Tn: any = (V as any)(Fe, (Ee as any)());
(((Ue as any).contextBridge as any).exposeInMainWorld as any)("desktopMount", Tn);
//# debugId=33657a25-09cc-4551-aa94-408abfc7fcc6
