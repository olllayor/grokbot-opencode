declare var File: any;
declare var MessageChannel: any;
declare var TextEncoder: any;
declare var URL: any;
declare var console: any;
declare var global: any;
declare var key: any;
declare var process: any;
declare var require: any;
declare var self: any;
declare var window: any;
"use strict";

!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "17911aa0-baf4-463a-92a0-bf4aab38d9fc", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-17911aa0-baf4-463a-92a0-bf4aab38d9fc");
  } catch (e: any) {}
} as any)();
"use strict";
var ne: any = (require as any)("electron");
var Fn: any = ["ready", "failed", "stuck", "aborted"];
var Su: any = {
  none: 0,
  equal: (1 as any) / (2 as any),
  full: 1
};
var Kn: string = "__duneReliability",
  nn: string = "dune:reliability-report";
function jn(this: any, e: any, n: any): any {
  let o: any = {
    report: (i: any): any => {
      ((n as any).send as any)(nn, i);
    }
  };
  ((e as any).exposeInMainWorld as any)(Kn, o);
}
function B(this: any, e: any): any {
  return (typeof e as any) == ("object" as any) && (e as any) !== (null as any) && !((Array as any).isArray as any)(e);
}
var op: any = (1024 as any) * (1024 as any);
var Bi: number = 864e5,
  Lp: any = (30 as any) * (Bi as any);
var Mp: any = [...Fn, "pending"];
var nm: any = (256 as any) * (1024 as any);
var Vi: any = /^[a-z0-9]+-[0-9]+$/;
function Wn(this: any, e: any): any {
  return ((Vi as any).test as any)(e);
}
var Gi: any = (2 as any) ** (32 as any);
function Yn(this: any, e: any): any {
  return ((Number as any).isInteger as any)(e) && (e as any) >= (0 as any) && (e as any) < (Gi as any);
}
var tn: number = 2,
  $n: any = ["click", "keydown", "pointerdown", "wheel", "input"],
  qn: any = ["open", "close"],
  Xn: any = ["overlay", "workspace", "shell"],
  zn: any = ["button", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "tab", "checkbox", "radio", "switch", "slider", "textbox", "searchbox", "combobox", "listbox", "treeitem", "gridcell", "row", "dialog", "alertdialog", "log", "region", "status"],
  Jn: any = ["immediate", "user-blocking", "normal", "idle"],
  Zn: any = ["mount", "update"],
  Qn: any = ["layout", "passive"],
  et: any = ["view", "layout"],
  nt: any = ["transition", "restore"],
  tt: any = ["default", "transition"],
  rn: any = ["quiet", "cap", "superseded"],
  rt: any = ["presented", ...rn];
var ot: string = "__duneRenderTraceSampleRate";
function at(this: any, e: any): any {
  return (typeof e as any) == ("number" as any) && (e as any) > (0 as any) && (e as any) <= (1 as any);
}
var it: string = "--dune-render-trace-sample-rate=",
  Fi: any = ((Object as any).freeze as any)({
    sampled: !1,
    sampleRate: 0,
    additionalArguments: ((Object as any).freeze as any)([])
  });
function st(this: any, e: any): any {
  let n: any = ((e as any).find as any)((i: any): any => ((i as any).startsWith as any)(it));
  if ((n as any) === (void 0 as any)) return null;
  let o: any = (Number as any)(((n as any).slice as any)((it as any).length));
  return (at as any)(o) ? o : null;
}
var Hi: any = ["dune_session_id", "dune_app", "app_version", "app_built_at", "track", "platform", "arch", "dune_install_id", "dune_row_id"],
  Nm: any = new (Set as any)(["dune_signal", "dune_reason", ...Hi]);
var Km: any = (BigInt as any)(127),
  jm: any = (BigInt as any)(7),
  Wm: any = new (TextEncoder as any)();
var Jm: any = (BigInt as any)(1e3);
var Wi: any = (Symbol as any)("redirect"),
  dt: any = class {
    [key: string]: any;
    constructor(n: any, o: any) {
      (this as any).link = n;
      (this as any).history = o;
    }
    link: any;
    history: any;
    [Wi](): any {
      return "redirect";
    }
  };
var lt: any = ((Object as any).freeze as any)({
    workspace: ((Object as any).freeze as any)({
      idPrefix: "view"
    }),
    overlay: ((Object as any).freeze as any)({
      idPrefix: "overlay"
    })
  }),
  eS: any = ((Object as any).freeze as any)({
    text: "",
    value: void 0
  });
var H: any = (e: any): any => (typeof e as any) == ("string" as any),
  on: any = (e: any): any => (typeof e as any) == ("boolean" as any),
  k: any = (e: any): any => (typeof e as any) == ("number" as any) && ((Number as any).isFinite as any)(e),
  M: any = (e: any): any => (typeof e as any) == ("number" as any) && ((Number as any).isInteger as any)(e) && (e as any) >= (0 as any),
  ct: any = (e: any): any => (typeof e as any) == ("string" as any) && (Wn as any)(e),
  an: any = (e: any): any => (typeof e as any) == ("number" as any) && (Yn as any)(e),
  Yi: any = (e: any): any => (e as any) === (tn as any),
  Pe: any = (e: any): any => (k as any)(e) && (e as any) >= (0 as any),
  $i: any = (e: any): any => (k as any)(e) && (e as any) > (0 as any) && (e as any) <= (1 as any);
function V(this: any, e: any): any {
  let n: any = new (Set as any)(e);
  return (o: any): any => (typeof o as any) == ("string" as any) && ((n as any).has as any)(o);
}
function ut(this: any, e: any): any {
  return (n: any): any => (n as any) === (null as any) || (e as any)(n);
}
function we(this: any, e: any): any {
  return (n: any): any => ((Array as any).isArray as any)(n) && ((n as any).every as any)(e);
}
function fe(this: any, e: any, n: any, o: any = {}): any {
  if (!(B as any)(e)) return !1;
  for (let i of ((Object as any).keys as any)(e)) if (!((Object as any).hasOwn as any)(n, i) && !((Object as any).hasOwn as any)(o, i)) return !1;
  for (let [i, d] of ((Object as any).entries as any)(n)) if (!(d as any)((e as any)[i])) return !1;
  for (let [i, d] of ((Object as any).entries as any)(o)) if (((e as any)[i] as any) !== (void 0 as any) && !(d as any)((e as any)[i])) return !1;
  return !0;
}
function sn(this: any, e: any, n: any = {}): any {
  return (o: any): any => {
    if (!(B as any)(o) || (typeof (o as any).kind as any) != ("string" as any)) return !1;
    let i: any = ((Object as any).hasOwn as any)(e, (o as any).kind) ? (e as any)[(o as any).kind] : void 0,
      d: any = ((Object as any).hasOwn as any)(n, (o as any).kind) ? (n as any)[(o as any).kind] : void 0;
    return (i as any) != (null as any) && (fe as any)(o, {
      kind: H,
      ...i
    }, d);
  };
}
var pt: any = (V as any)(((Object as any).keys as any)(lt)),
  qi: any = /^(view|overlay):[a-z0-9-]+(\/[a-z0-9-]+)*$/,
  Xi: any = (e: any): any => !(B as any)(e) || (typeof (e as any).entrypointId as any) != ("string" as any) || !(fe as any)(e, {
    surface: (V as any)(Xn),
    entrypointId: H
  }) ? !1 : ((e as any).surface as any) === ("shell" as any) ? ((e as any).entrypointId as any) === ("" as any) : ((qi as any).test as any)((e as any).entrypointId),
  zi: any = (sn as any)({
    navigation: {
      action: (V as any)(qn),
      surface: pt,
      entrypointId: H,
      startMs: k
    },
    selection: {
      startMs: k
    },
    interaction: {
      event: (V as any)($n),
      startMs: k
    }
  }, {
    navigation: {
      absorbedInputs: M
    },
    interaction: {
      route: Xi,
      target: (e: any): any => (fe as any)(e, {
        component: an
      }, {
        role: (V as any)(zn)
      })
    }
  }),
  Ji: any = (sn as any)({
    render: {
      component: an,
      phase: (V as any)(Zn),
      compiled: on,
      baseMs: k
    },
    commit: {
      priority: (V as any)(Jn)
    },
    effects: {
      boundary: H,
      passiveMs: k
    },
    "component-effects": {
      component: an,
      phase: (V as any)(Qn)
    }
  }),
  Zi: any = (sn as any)({
    settle: {
      entrypointId: H,
      chunk: (V as any)(et),
      cached: on
    },
    presented: {
      ticket: M,
      entrypointId: H,
      surface: pt,
      commitClass: (V as any)(nt)
    },
    publish: {
      store: H,
      commit: (V as any)(tt),
      version: M,
      listeners: M
    },
    rpc: {
      edge: H,
      method: H,
      ok: on,
      failureCode: (ut as any)(H)
    },
    event: {
      event: H,
      interactionId: M,
      inputDelayMs: k,
      processingMs: k
    },
    "long-animation-frame": {
      blockingMs: k,
      renderMs: k,
      styleAndLayoutMs: k,
      scripts: M
    }
  }),
  mt: any = (e: any): any => (fe as any)(e, {
    id: M,
    parent: (ut as any)(M),
    startMs: k,
    durationMs: k,
    selfMs: k,
    detail: Ji
  }),
  St: any = (e: any): any => (fe as any)(e, {
    startMs: k,
    durationMs: k,
    detail: Zi
  }),
  yt: any = {
    version: Yi,
    lastCommitMs: Pe,
    commitCount: M,
    renderSelfMs: Pe,
    sampleRate: $i
  },
  sS: any = {
    ...yt,
    id: ct,
    root: zi,
    endMs: k,
    closedBy: (V as any)(rn),
    spans: (we as any)(mt),
    folded: M,
    dropped: M
  },
  dS: any = {
    ticket: M,
    measures: (we as any)(St),
    presentedMs: Pe,
    dismissedMs: Pe
  },
  lS: any = {
    ...yt,
    id: ct,
    startMs: k,
    endMs: k,
    closedBy: (V as any)(rt),
    spans: (we as any)(mt),
    measures: (we as any)(St),
    folded: M,
    dropped: M
  };
function ft(this: any): any {
  (es as any)();
}
function es(this: any): any {
  let e: any = (st as any)((process as any).argv);
  (e as any) !== (null as any) && (((ne as any).contextBridge as any).exposeInMainWorld as any)(ot, e);
}
function _t(this: any): any {
  (jn as any)((ne as any).contextBridge, (ne as any).ipcRenderer);
}
function gt(this: any, e: any): any {
  return {
    invoke: (n: any, o: any): any => ((e as any).invoke as any)(n, o),
    on: (n: any, o: any): any => {
      let i: any = (d: any, E: any): any => {
        (o as any)(E);
      };
      return ((e as any).on as any)(n, i), (): any => {
        ((e as any).off as any)(n, i);
      };
    }
  };
}
function dn(this: any, e: any): any {
  return (e as any) != (null as any) ? (gt as any)((e as any).ipcRenderer) : (gt as any)((ne as any).ipcRenderer);
}
function ns(this: any, e: any): any {
  return (e as any) === (null as any) ? "null" : ((Array as any).isArray as any)(e) ? "array" : typeof e;
}
function z(this: any, e: any, n: any, o: any): any {
  return {
    ok: !1,
    path: e,
    expected: n,
    received: (ns as any)(o)
  };
}
function ts(this: any, e: any): any {
  return ((e as any).optional as any) === (!0 as any);
}
function K(this: any, e: any, n: any): any {
  return {
    expects: e,
    check: n,
    "~standard": {
      version: 1,
      vendor: "dune",
      validate: (o: any): any => {
        let i: any = (n as any)(o, []);
        return (i as any).ok ? {
          value: (i as any).value
        } : {
          issues: [{
            message: `must be ${(i as any).expected}, got ${(i as any).received}`,
            path: (i as any).path
          }]
        };
      }
    }
  };
}
function rs(this: any, e: any, n: any, o: any): any {
  if (!(B as any)(n)) return (z as any)(o, "object", n);
  let i: any = [];
  for (let [d, E] of ((Object as any).entries as any)(e)) {
    let O: any = ((Object as any).hasOwn as any)(n, d) ? (n as any)[d] : void 0;
    if ((O as any) === (void 0 as any) && (ts as any)(E)) continue;
    let b: any = ((E as any).check as any)(O, [...o, d]);
    if (!(b as any).ok) return b;
    ((i as any).push as any)([d, (b as any).value]);
  }
  return {
    ok: !0,
    value: ((Object as any).fromEntries as any)(i)
  };
}
function s(this: any): any {
  return (K as any)("string", (e: any, n: any): any => (typeof e as any) == ("string" as any) ? {
    ok: !0,
    value: e
  } : (z as any)(n, "string", e));
}
function P(this: any): any {
  return (K as any)("number", (e: any, n: any): any => (typeof e as any) != ("number" as any) ? (z as any)(n, "number", e) : ((Number as any).isFinite as any)(e) ? {
    ok: !0,
    value: e
  } : {
    ok: !1,
    path: n,
    expected: "number",
    received: "non-finite number"
  });
}
function y(this: any): any {
  return (K as any)("boolean", (e: any, n: any): any => (typeof e as any) == ("boolean" as any) ? {
    ok: !0,
    value: e
  } : (z as any)(n, "boolean", e));
}
function p(this: any, e: any): any {
  let n: any = ((JSON as any).stringify as any)(e);
  return (K as any)(n, (o: any, i: any): any => (o as any) === (e as any) ? {
    ok: !0,
    value: e
  } : (z as any)(i, n, o));
}
function c(this: any, e: any): any {
  return {
    ...e,
    optional: !0
  };
}
function W(this: any, e: any): any {
  let n: any = `${(e as any).expects} | null`;
  return (K as any)(n, (o: any, i: any): any => {
    if ((o as any) === (null as any)) return {
      ok: !0,
      value: null
    };
    let d: any = ((e as any).check as any)(o, i);
    return (d as any).ok || (((d as any).path as any).length as any) !== ((i as any).length as any) ? d : {
      ok: !1,
      path: i,
      expected: n,
      received: (d as any).received
    };
  });
}
function I(this: any, ...e: any): any {
  let n: any = (([...new (Set as any)(((e as any).map as any)((o: any): any => (o as any).expects))] as any).join as any)(" | ");
  return (K as any)(n, (o: any, i: any): any => {
    for (let d of e) {
      let E: any = ((d as any).check as any)(o, i);
      if ((E as any).ok) return E;
    }
    return (z as any)(i, n, o);
  });
}
function R(this: any, e: any): any {
  return (K as any)(`array of ${(e as any).expects}`, (n: any, o: any): any => {
    if (!((Array as any).isArray as any)(n)) return (z as any)(o, "array", n);
    let i: any = n,
      d: any = [];
    for (let [E, O] of ((i as any).entries as any)()) {
      let b: any = ((e as any).check as any)(O, [...o, E]);
      if (!(b as any).ok) return b;
      ((d as any).push as any)((b as any).value);
    }
    return {
      ok: !0,
      value: d
    };
  });
}
function m(this: any, e: any): any {
  return (K as any)("object", (n: any, o: any): any => (rs as any)(e, n, o));
}
function se(this: any, e: any): any {
  let n: any = `record of ${(e as any).expects}`;
  return (K as any)(n, (o: any, i: any): any => {
    if (!(B as any)(o)) return (z as any)(i, "object", o);
    let d: any = [];
    for (let [E, O] of ((Object as any).entries as any)(o)) {
      let b: any = ((e as any).check as any)(O, i);
      if (!(b as any).ok) return {
        ok: !1,
        path: i,
        expected: n,
        received: (b as any).received
      };
      ((d as any).push as any)([E, (b as any).value]);
    }
    return {
      ok: !0,
      value: ((Object as any).fromEntries as any)(d)
    };
  });
}
function De(this: any): any {
  return (K as any)("Uint8Array", (e: any, n: any): any => e instanceof Uint8Array ? {
    ok: !0,
    value: e
  } : (z as any)(n, "Uint8Array", e));
}
function ln(this: any): any {
  return (K as any)("unknown", (e: any): any => ({
    ok: !0,
    value: e
  }));
}
function ae(this: any): any {
  return {};
}
function os(this: any, e: any): any {
  let n: any = (e as any)["~standard"];
  return (typeof n as any) == ("object" as any) && (n as any) !== (null as any) && ((n as any).version as any) === (1 as any) && (typeof (n as any).validate as any) == ("function" as any);
}
var Le: any = class extends (Error as any) {
  declare name: any;
  [key: string]: any;
  constructor(n: any) {
    super(`rpcMethod().args: field "${n}" is not an rpc field validator; pass rpc* combinators or one Standard Schema v1 value.`), (this as any).name = "RpcMethodDeclarationError";
  }
};
function r(this: any): any {
  return {
    noArgs: {
      schema: null
    },
    args: (e: any): any => {
      if ((os as any)(e)) return {
        schema: e
      };
      for (let [n, o] of ((Object as any).entries as any)(e)) if ((typeof o?.check as any) != ("function" as any)) throw new (Le as any)(n);
      return {
        schema: (m as any)(e)
      };
    }
  };
}
function _e(this: any, e: any, n: any): any {
  return ((Object as any).freeze as any)({
    kind: "rpc-edge",
    edge: e,
    methods: (n as any).methods,
    hasEvents: ((n as any).events as any) != (null as any)
  });
}
var as: string = "__DUNE_DEVTOOLS_HOOK__";
function is(this: any, e: any): any {
  return (B as any)(e) && ((e as any).version as any) === (1 as any) && (typeof (e as any).register as any) == ("function" as any);
}
function Et(this: any, e: any = globalThis): any {
  let n: any = (B as any)(e) ? (e as any)[as] : void 0;
  return (is as any)(n) ? n : null;
}
var ht: string = "edge/unknown-method",
  cn: string = "edge/transport-failed";
var Rt: string = "edge/handler-failed";
var J: any = class extends (Error as any) {
  declare name: any;
  [key: string]: any;
  code: any;
  detail: any;
  constructor(n: any) {
    super(`${(n as any).code}: ${(n as any).detail}`), (this as any).name = "EdgeCallFailure", (this as any).code = (n as any).code, (this as any).detail = (n as any).detail;
  }
};
function At(this: any, e: any): any {
  return (typeof e as any) != ("object" as any) || (e as any) == (null as any) || !("ok" in e) ? !1 : (typeof (e as any).ok as any) == ("boolean" as any);
}
function ss(this: any, e: any, n: any): any {
  return `dune-rpc:${e}:m:${n}`;
}
function Tt(this: any, e: any, n: any): any {
  return `dune-rpc:${e}:e:${n}`;
}
function ds(this: any, e: any): any {
  return `dune-rpc:${e}:probe`;
}
var Ty: any = (m as any)({});
function Me(this: any, e: any, n: any, o: any = {}): any {
  let i: any = {},
    d: any = (o as any).measures ?? null,
    E: any = async (C: any, v: any): Promise<any> => {
      let x: any = v instanceof Error ? (v as any).message : (String as any)(v),
        U: any;
      try {
        U = await ((n as any).invoke as any)((ds as any)((e as any).edge), C);
      } catch {
        return new (J as any)({
          code: cn,
          detail: x
        });
      }
      return (At as any)(U) && !(U as any).ok && (((U as any).failure as any).code as any) === (ht as any) ? new (J as any)((U as any).failure) : new (J as any)({
        code: cn,
        detail: x
      });
    },
    O: any = async (C: any, v: any): Promise<any> => {
      let x: any;
      try {
        x = await ((n as any).invoke as any)((ss as any)((e as any).edge, C), v);
      } catch (U: any) {
        throw await (E as any)(C, U);
      }
      if (!(At as any)(x)) throw new (J as any)({
        code: Rt,
        detail: "The edge replied outside its envelope."
      });
      if ((x as any).ok) return (x as any).value;
      throw new (J as any)((x as any).failure);
    },
    b: any = (C: any, v: any): any => {
      if ((d as any) == (null as any)) return (O as any)(C, v);
      let x: any = ((d as any).now as any)(),
        U: any = (oe: any, Mi: any): any => {
          ((d as any).record as any)({
            startMs: x,
            durationMs: (((d as any).now as any)() as any) - (x as any),
            detail: {
              kind: "rpc",
              edge: (e as any).edge,
              method: C,
              ok: oe,
              failureCode: Mi
            }
          });
        };
      return (((O as any)(C, v) as any).then as any)((oe: any): any => ((U as any)(!0, null), oe), (oe: any): any => {
        throw (U as any)(!1, oe instanceof J ? (oe as any).code : null), oe;
      });
    };
  for (let [C, {
    schema: v
  }] of ((Object as any).entries as any)((e as any).methods)) (i as any)[C] = (v as any) === (null as any) ? (): any => (b as any)(C, {}) : (x: any): any => (b as any)(C, x);
  return (e as any).hasEvents && ((i as any).subscribe = (C: any): any => {
    let v: any = [];
    for (let [x, U] of ((Object as any).entries as any)(C)) (U as any) != (null as any) && ((v as any).push as any)(((n as any).on as any)((Tt as any)((e as any).edge, x), U));
    return (): any => {
      for (let x of v) (x as any)();
    };
  }), (Et as any)()?.register({
    kind: "rpc-edge",
    role: "bridge",
    declaration: e,
    trust: []
  }), i;
}
var D: any = (require as any)("electron");
function l(this: any, e: any): any {
  return (typeof e as any) == ("object" as any) && (e as any) !== (null as any) && !((Array as any).isArray as any)(e);
}
function bt(this: any, e: any): any {
  let n: any;
  try {
    n = ((JSON as any).parse as any)(e);
  } catch {
    n = void 0;
  }
  return n;
}
function Ee(this: any, e: any): any {
  if ((e as any) === (null as any)) return !0;
  switch (typeof e) {
    case "string":
    case "boolean":
      return !0;
    case "number":
      return ((Number as any).isFinite as any)(e);
    case "object":
      return ((Array as any).isArray as any)(e) ? ((e as any).every as any)(Ee) : (l as any)(e) && ((((Object as any).values as any)(e) as any).every as any)(Ee);
    default:
      return !1;
  }
}
function un(this: any, e: any): any {
  return (e as any) === ("darwin" as any) || (e as any) === ("linux" as any);
}
function Ct(this: any, e: any, n: any): any {
  return (un as any)(e) ? n : void 0;
}
function kt(this: any, e: any, n: any): any {
  return (un as any)(e) ? n : void 0;
}
var It: string = "sand:main-edge-served";
var Ot: string = "sand:network-online";
var Nt: string = "sand:renderer-alive";
var xt: string = "sand:renderer-boot-gate-landed";
var ls: string = "data:image/svg+xml",
  cs: any = (64 as any) * (1024 as any);
function pn(this: any, e: any): any {
  return (typeof e as any) == ("string" as any) && ((e as any).startsWith as any)(ls) && ((e as any).length as any) <= (cs as any);
}
var mn: number = 64;
function us(this: any, e: any): any {
  return (typeof e as any) == ("object" as any) && (e as any) !== (null as any) && "agentId" in e && "name" in e && "markSvgDataUrl" in e && (typeof (e as any).agentId as any) == ("string" as any) && (((((e as any).agentId as any).trim as any)() as any).length as any) > (0 as any) && (typeof (e as any).name as any) == ("string" as any) && (((((e as any).name as any).trim as any)() as any).length as any) > (0 as any) && (pn as any)((e as any).markSvgDataUrl);
}
function Pt(this: any, e: any): any {
  return ((Array as any).isArray as any)(e) && ((e as any).length as any) <= (mn as any) && ((e as any).every as any)(us);
}
var Sn: number = 640;
function wt(this: any, e: any): any {
  return (typeof e as any) == ("number" as any) && ((Number as any).isInteger as any)(e) && (e as any) >= (0 as any) && (e as any) <= (Sn as any);
}
var ve: number = 16384;
function Dt(this: any, e: any): any {
  return (typeof e as any) == ("number" as any) && ((Number as any).isInteger as any)(e) && (((Math as any).abs as any)(e) as any) <= (ve as any);
}
var yn: number = 64;
function Lt(this: any, e: any): any {
  return (typeof e as any) == ("string" as any) && ((((e as any).trim as any)() as any).length as any) > (0 as any) && ((e as any).length as any) <= (yn as any);
}
function Ae(this: any, e: any, n: any): any {
  let o: any = ((Object as any).getOwnPropertyDescriptor as any)(e, n);
  return (o as any) !== (void 0 as any) && "value" in o ? (o as any).value : void 0;
}
function gn(this: any, e: any): any {
  return (typeof e as any) == ("number" as any) && ((Number as any).isInteger as any)(e) && (e as any) >= (0 as any);
}
function Mt(this: any, e: any): any {
  if ((typeof e as any) != ("object" as any) || (e as any) === (null as any)) return null;
  try {
    let n: any = ((Object as any).getPrototypeOf as any)(e);
    if ((n as any) !== ((Object as any).prototype as any) && (n as any) !== (null as any)) return null;
    let o: any = (Ae as any)(e, "usedBytes"),
      i: any = (Ae as any)(e, "limitBytes"),
      d: any = (Ae as any)(e, "loadedAgents"),
      E: any = (Ae as any)(e, "loadedTranscriptEntries"),
      O: any = (Ae as any)(e, "idleMinutesLast15m");
    return (typeof o as any) != ("number" as any) || !((Number as any).isFinite as any)(o) || (o as any) < (0 as any) || (typeof i as any) != ("number" as any) || !((Number as any).isFinite as any)(i) || (i as any) <= (0 as any) ? null : {
      ...{
        usedBytes: (o as any) === (0 as any) ? 0 : o,
        limitBytes: i
      },
      ...((gn as any)(d) ? {
        loadedAgents: d
      } : {}),
      ...((gn as any)(E) ? {
        loadedTranscriptEntries: E
      } : {}),
      ...((gn as any)(O) ? {
        idleMinutesLast15m: O
      } : {})
    };
  } catch {
    return null;
  }
}
function vt(this: any, e: any, n: any): any {
  return (typeof n as any) == ("string" as any) && ((Object as any).hasOwn as any)(e, n);
}
function _n(this: any, e: any): any {
  return (e as any) === (null as any) ? "null" : ((Array as any).isArray as any)(e) ? "array" : typeof e;
}
function Ut(this: any, e: any, n: any): any {
  return (Bt as any)(e, (o: any, i: any): any => {
    let d: any = (n as any)(o);
    return (d as any).ok ? d : {
      ok: !1,
      path: i,
      expected: e,
      received: (_n as any)(o)
    };
  });
}
function Bt(this: any, e: any, n: any): any {
  return {
    expects: e,
    check: n,
    "~standard": {
      version: 1,
      vendor: "sand",
      validate: (o: any): any => {
        let i: any = (n as any)(o, []);
        return (i as any).ok ? {
          value: (i as any).value
        } : {
          issues: [{
            message: `must be ${(i as any).expected}, got ${(i as any).received}`,
            path: (i as any).path
          }]
        };
      }
    }
  };
}
function f(this: any, e: any, n: any): any {
  return (Ut as any)(e, (o: any): any => (n as any)(o) ? {
    ok: !0,
    value: o
  } : {
    ok: !1
  });
}
function te(this: any, e: any, n: any): any {
  return (Ut as any)(e, (o: any): any => {
    let i: any = (n as any)(o);
    return (i as any).success ? {
      ok: !0,
      value: (i as any).data
    } : {
      ok: !1
    };
  });
}
var fn: any = (64 as any) * (1024 as any);
function ps(this: any, e: any): any {
  if (((e as any).length as any) > (fn as any) || ((((new (TextEncoder as any)() as any).encode as any)(e) as any).byteLength as any) > (fn as any)) return `string over ${fn} bytes`;
  if (((((e as any).trim as any)() as any).length as any) === (0 as any)) return null;
  let n: any = (bt as any)(e);
  return (l as any)(n) ? null : (n as any) === (void 0 as any) ? "malformed JSON" : `JSON ${(_n as any)(n)}`;
}
var yg: any = (Bt as any)("JSON object string", (e: any, n: any): any => {
    let o: any = (d: any): any => ({
      ok: !1,
      path: n,
      expected: "JSON object string",
      received: d
    });
    if ((typeof e as any) != ("string" as any)) return (o as any)((_n as any)(e));
    let i: any = (ps as any)(e);
    return (i as any) === (null as any) ? {
      ok: !0,
      value: e
    } : (o as any)(i);
  }),
  g: any = (f as any)("non-empty string", (e: any): any => (typeof e as any) == ("string" as any) && ((e as any).length as any) > (0 as any)),
  u: any = (f as any)("non-blank string", (e: any): any => (typeof e as any) == ("string" as any) && ((((e as any).trim as any)() as any).length as any) > (0 as any)),
  gg: any = (f as any)(`non-blank string of at most ${yn} characters`, Lt),
  Ue: any = (te as any)("non-empty string", (e: any): any => {
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
function En(this: any, e: any, n: any): any {
  return (f as any)(e, (o: any): any => ((n as any).some as any)((i: any): any => (i as any) === (o as any)));
}
function A(this: any, e: any, n: any): any {
  return (te as any)("telemetry report", (o: any): any => {
    if (!(l as any)(o) || !(e as any)(o)) return {
      success: !1
    };
    let i: any = (typeof n as any) == ("function" as any) ? (n as any)(o) : n,
      d: any = {};
    for (let E of ((Object as any).keys as any)(i)) (vt as any)(i, E) && ((Object as any).hasOwn as any)(o, E) && ((d as any)[E] = (o as any)[E]);
    return (e as any)(d) ? {
      success: !0,
      data: d
    } : {
      success: !1
    };
  });
}
var Vt: any = (te as any)("heap metrics report", (e: any): any => {
  let n: any = (Mt as any)(e);
  return (n as any) === (null as any) ? {
    success: !1
  } : {
    success: !0,
    data: n
  };
});
var ms: any = (f as any)("svg data url", pn),
  Ss: any = (f as any)(`at most ${mn} mount targets`, Pt),
  ys: any = (f as any)(`integer from 0 to ${Sn}`, wt),
  Gt: any = (f as any)(`integer from -${ve} to ${ve}`, Dt),
  Ft: any = (_e as any)("desktop-mount", {
    methods: {
      mount: (((r as any)() as any).args as any)({
        agentId: u,
        name: u,
        markSvgDataUrl: ms
      }),
      unmount: ((r as any)() as any).noArgs,
      offerChoices: (((r as any)() as any).args as any)({
        choices: Ss
      }),
      read: ((r as any)() as any).noArgs,
      readChoices: ((r as any)() as any).noArgs,
      submitPrompt: (((r as any)() as any).args as any)({
        prompt: Ue
      }),
      switchTo: (((r as any)() as any).args as any)({
        agentId: u
      }),
      reachForMenu: (((r as any)() as any).args as any)({
        heightPx: ys
      }),
      movePanel: (((r as any)() as any).args as any)({
        dx: Gt,
        dy: Gt
      }),
      endPanelMove: ((r as any)() as any).noArgs
    },
    events: (ae as any)(),
    failureCodes: (ae as any)()
  });
var Ht: any = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-57][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var An: string = "user";
var gs: string = "automation";
var bg: any = ((100 as any) * (1024 as any) as any) * (1024 as any);
var Be: string = "/cursor/stores";
var Ve: string = "canvases";
var Kt: any = `${Be}/${An}/${Ve}`,
  jt: any = `${Be}/${gs}/${Ve}`;
var Es: any = `${Be}/${An}`;
function hn(this: any, e: any): any {
  let n: any = ((((e as any).trim as any)() as any).toLowerCase as any)();
  return ((Ht as any).test as any)(n) ? {
    ok: !0,
    value: n
  } : {
    ok: !1
  };
}
var Wt: any = ["image/png", "image/jpeg", "image/webp"];
var $g: any = ((Wt as any).join as any)(",");
function Rn(this: any, e: any): any {
  return ((Wt as any).some as any)((n: any): any => (n as any) === (e as any));
}
function Yt(this: any, e: any): any {
  return (Rn as any)((e as any).contentType) ? ((e as any).byteLength as any) <= (0 as any) ? "empty" : ((e as any).byteLength as any) > (2097152 as any) ? "too-large" : null : "unsupported-type";
}
var As: any = /^\d{6}$/;
function $t(this: any, e: any): any {
  return (typeof e as any) == ("string" as any) && ((As as any).test as any)(e);
}
var qt: any = ["requestLimitIncrease"];
var hs: number = 2147483647;
function Xt(this: any, e: any): any {
  return (l as any)(e) ? ((e as any).mode as any) === ("none" as any) || ((e as any).mode as any) === ("unlimited" as any) ? !0 : ((e as any).mode as any) === ("fixed" as any) && (typeof (e as any).limitDollars as any) == ("number" as any) && ((Number as any).isInteger as any)((e as any).limitDollars) && ((e as any).limitDollars as any) > (0 as any) && ((e as any).limitDollars as any) < (hs as any) : !1;
}
var Rs: string = "startOnDemandPaymentMethodSetup";
var tf: any = new (Set as any)([...qt, Rs]);
var zt: any = ["github", "gitlab", "bitbucket", "azure-devops"];
var Jt: any = /^[A-Za-z0-9_-]{21}$/;
var Ts: any = /^[a-z0-9][a-z0-9-]{2,63}$/;
function Zt(this: any, e: any): any {
  return ((Ts as any).test as any)(e);
}
function he(this: any, e: any): any {
  if (((e as any).length as any) === (0 as any)) return !1;
  try {
    return new ((Intl as any).DateTimeFormat as any)("en-US", {
      timeZone: e
    }), !0;
  } catch {
    return !1;
  }
}
var bs: any = ["unspecified", "scheduled", "claimed", "running", "waiting-for-image", "completed", "missed", "failed", "cancelled"],
  Cs: any = /^(?:[01]\d|2[0-3]):[0-5]\d$/,
  Tf: any = new (Set as any)(bs);
function Qt(this: any, e: any): any {
  return (e as any) == (null as any) || (typeof e as any) != ("object" as any) || ((Array as any).isArray as any)(e) ? !1 : "localTime" in e && (typeof (e as any).localTime as any) == ("string" as any) && ((Cs as any).test as any)((e as any).localTime) && "timeZone" in e && (typeof (e as any).timeZone as any) == ("string" as any) && (he as any)((e as any).timeZone) && "recurring" in e && (typeof (e as any).recurring as any) == ("boolean" as any);
}
function er(this: any, e: any): any {
  return (e as any) != (null as any) && (typeof e as any) == ("object" as any) && !((Array as any).isArray as any)(e) && "dismissTerminalOutcome" in e && (typeof (e as any).dismissTerminalOutcome as any) == ("boolean" as any);
}
var ks: any = ["system", "light", "dark"];
function nr(this: any, e: any): any {
  return (typeof e as any) == ("string" as any) && ((ks as any).includes as any)(e);
}
var Is: any = ["ping-1-open-blip", "ping-2-tick", "ping-3-double-tick", "ping-4-chime-a", "ping-5-chime-b"];
function Os(this: any, e: any): any {
  return (typeof e as any) == ("string" as any) && ((Is as any).some as any)((n: any): any => (n as any) === (e as any));
}
function tr(this: any, e: any): any {
  return (typeof e as any) != ("object" as any) || (e as any) == (null as any) || ((Array as any).isArray as any)(e) || !("sound" in e) || !(Os as any)((e as any).sound) ? !1 : "playSound" in e && (typeof (e as any).playSound as any) == ("boolean" as any);
}
var Ns: any = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
  xs: string = "general",
  rr: any = {
    kind: "absent"
  },
  or: any = {
    kind: "rejects-the-report"
  };
function Ge(this: any, e: any, n: any): any {
  if ((e as any) == (null as any)) return rr;
  if ((typeof e as any) != ("string" as any)) return or;
  let o: any = ((e as any).trim as any)();
  return ((o as any).length as any) === (0 as any) ? rr : ((o as any).length as any) > (n as any) ? or : {
    kind: "present",
    value: o
  };
}
function Ps(this: any, e: any): any {
  if ((typeof e as any) != ("object" as any) || (e as any) == (null as any)) return null;
  let n: any = (Ge as any)("callId" in e ? (e as any).callId : void 0, 128);
  if (((n as any).kind as any) !== ("present" as any)) return null;
  let o: any = "rating" in e ? (e as any).rating : void 0;
  if ((o as any) !== ("up" as any) && (o as any) !== ("down" as any)) return null;
  let i: any = (Ge as any)("requestId" in e ? (e as any).requestId : void 0, 128);
  if (((i as any).kind as any) === ("rejects-the-report" as any)) return null;
  let d: any = (Ge as any)("realtimeConversationId" in e ? (e as any).realtimeConversationId : void 0, 128);
  return ((d as any).kind as any) === ("rejects-the-report" as any) ? null : {
    callId: (n as any).value,
    rating: o,
    ...(((i as any).kind as any) === ("present" as any) ? {
      requestId: (i as any).value
    } : {}),
    ...(((d as any).kind as any) === ("present" as any) ? {
      realtimeConversationId: (d as any).value
    } : {})
  };
}
function ar(this: any, e: any): any {
  if ((typeof e as any) != ("object" as any) || (e as any) == (null as any) || !("message" in e) || (typeof (e as any).message as any) != ("string" as any)) return null;
  let n: any = (((e as any).message as any).trim as any)();
  if (((n as any).length as any) === (0 as any) || ((n as any).length as any) > (1e4 as any) || !("accountSlot" in e) || (typeof (e as any).accountSlot as any) != ("string" as any)) return null;
  let o: any = (((e as any).accountSlot as any).trim as any)();
  if (((o as any).length as any) === (0 as any) || ((o as any).length as any) > (512 as any) || !("submissionId" in e) || (typeof (e as any).submissionId as any) != ("string" as any) || !((Ns as any).test as any)((e as any).submissionId)) return null;
  let i: any = (e as any).submissionId,
    d: any = (Ge as any)("conversationId" in e ? (e as any).conversationId : void 0, 512);
  if (((d as any).kind as any) === ("rejects-the-report" as any)) return null;
  let E: any = {
      accountSlot: o,
      message: n,
      submissionId: i,
      ...(((d as any).kind as any) === ("present" as any) ? {
        conversationId: (d as any).value
      } : {})
    },
    O: any = ("kind" in e ? (e as any).kind : void 0) ?? xs;
  if ((O as any) === ("voice-call" as any)) {
    let C: any = (Ps as any)("voiceCall" in e ? (e as any).voiceCall : void 0);
    return (C as any) === (null as any) ? null : {
      ...E,
      kind: "voice-call",
      voiceCall: C
    };
  }
  if ((O as any) !== ("general" as any)) return null;
  let b: any;
  if ("wantsResponse" in e && ((e as any).wantsResponse as any) !== (void 0 as any) && ((e as any).wantsResponse as any) !== (null as any)) {
    if ((typeof (e as any).wantsResponse as any) != ("boolean" as any)) return null;
    b = (e as any).wantsResponse;
  }
  return {
    ...E,
    kind: "general",
    ...((b as any) === (void 0 as any) ? {} : {
      wantsResponse: b
    })
  };
}
var ws: any = [{
    tag: "en",
    endonym: "English",
    englishName: "English",
    direction: "ltr"
  }, {
    tag: "hi",
    endonym: "\u0939\u093F\u0928\u094D\u0926\u0940",
    englishName: "Hindi",
    direction: "ltr"
  }, {
    tag: "zh-CN",
    endonym: "\u7B80\u4F53\u4E2D\u6587",
    englishName: "Simplified Chinese",
    direction: "ltr"
  }, {
    tag: "zh-TW",
    endonym: "\u7E41\u9AD4\u4E2D\u6587",
    englishName: "Traditional Chinese",
    direction: "ltr"
  }, {
    tag: "pl",
    endonym: "Polski",
    englishName: "Polish",
    direction: "ltr"
  }, {
    tag: "es",
    endonym: "Espa\xF1ol",
    englishName: "Spanish",
    direction: "ltr"
  }, {
    tag: "pt",
    endonym: "Portugu\xEAs",
    englishName: "Portuguese",
    direction: "ltr"
  }, {
    tag: "ja",
    endonym: "\u65E5\u672C\u8A9E",
    englishName: "Japanese",
    direction: "ltr"
  }, {
    tag: "fr",
    endonym: "Fran\xE7ais",
    englishName: "French",
    direction: "ltr"
  }, {
    tag: "ko",
    endonym: "\uD55C\uAD6D\uC5B4",
    englishName: "Korean",
    direction: "ltr"
  }, {
    tag: "de",
    endonym: "Deutsch",
    englishName: "German",
    direction: "ltr"
  }, {
    tag: "ru",
    endonym: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
    englishName: "Russian",
    direction: "ltr"
  }, {
    tag: "tr",
    endonym: "T\xFCrk\xE7e",
    englishName: "Turkish",
    direction: "ltr"
  }, {
    tag: "ar",
    endonym: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
    englishName: "Arabic",
    direction: "rtl"
  }, {
    tag: "it",
    endonym: "Italiano",
    englishName: "Italian",
    direction: "ltr"
  }, {
    tag: "sv",
    endonym: "Svenska",
    englishName: "Swedish",
    direction: "ltr"
  }, {
    tag: "uk",
    endonym: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",
    englishName: "Ukrainian",
    direction: "ltr"
  }, {
    tag: "nl",
    endonym: "Nederlands",
    englishName: "Dutch",
    direction: "ltr"
  }, {
    tag: "el",
    endonym: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC",
    englishName: "Greek",
    direction: "ltr"
  }, {
    tag: "af",
    endonym: "Afrikaans",
    englishName: "Afrikaans",
    direction: "ltr"
  }, {
    tag: "he",
    endonym: "\u05E2\u05D1\u05E8\u05D9\u05EA",
    englishName: "Hebrew",
    direction: "rtl"
  }, {
    tag: "vi",
    endonym: "Ti\u1EBFng Vi\u1EC7t",
    englishName: "Vietnamese",
    direction: "ltr"
  }, {
    tag: "id",
    endonym: "Bahasa Indonesia",
    englishName: "Indonesian",
    direction: "ltr"
  }, {
    tag: "ur",
    endonym: "\u0627\u0631\u062F\u0648",
    englishName: "Urdu",
    direction: "rtl"
  }, {
    tag: "th",
    endonym: "\u0E44\u0E17\u0E22",
    englishName: "Thai",
    direction: "ltr"
  }, {
    tag: "bn",
    endonym: "\u09AC\u09BE\u0982\u09B2\u09BE",
    englishName: "Bengali",
    direction: "ltr"
  }, {
    tag: "cs",
    endonym: "\u010Ce\u0161tina",
    englishName: "Czech",
    direction: "ltr"
  }, {
    tag: "hu",
    endonym: "Magyar",
    englishName: "Hungarian",
    direction: "ltr"
  }, {
    tag: "nb",
    endonym: "Norsk bokm\xE5l",
    englishName: "Norwegian Bokm\xE5l",
    direction: "ltr"
  }, {
    tag: "da",
    endonym: "Dansk",
    englishName: "Danish",
    direction: "ltr"
  }, {
    tag: "fi",
    endonym: "Suomi",
    englishName: "Finnish",
    direction: "ltr"
  }],
  Ds: any = ((ws as any).map as any)((e: any): any => (e as any).tag);
var Ls: any = ["system", ...Ds];
function ir(this: any, e: any): any {
  return (typeof e as any) == ("string" as any) && ((Ls as any).includes as any)(e);
}
function Ms(this: any, e: any): any {
  if ((typeof e as any) != ("string" as any)) return null;
  let n: any = ((/^tile-([1-9]\d{1,3})$/ as any).exec as any)(e);
  if ((n as any) == (null as any)) return null;
  let o: any = (Number as any)((n as any)[1]);
  return (o as any) >= (16 as any) && (o as any) <= (1024 as any) ? o : null;
}
function vs(this: any, e: any): any {
  return ((Ms as any)(e) as any) != (null as any);
}
function sr(this: any, e: any): any {
  return (e as any) === ("preview" as any) || (e as any) === ("original" as any) || (vs as any)(e);
}
var Tn: number = 1500;
function dr(this: any, e: any): any {
  let n: any = ((e as any).trim as any)();
  return ((n as any).length as any) === (0 as any) ? "empty" : ((n as any).length as any) > (Tn as any) ? "too-long" : "ok";
}
var He: string = "voice";
var o_: any = `${He}:`;
var bn: any = {
  auto: "Auto-detect",
  en: "English",
  "ar-EG": "Arabic (Egypt)",
  "ar-SA": "Arabic (Saudi Arabia)",
  "ar-AE": "Arabic (United Arab Emirates)",
  bn: "Bengali",
  ca: "Catalan",
  zh: "Chinese (Simplified)",
  da: "Danish",
  nl: "Dutch",
  fi: "Finnish",
  fr: "French",
  de: "German",
  hi: "Hindi",
  hu: "Hungarian",
  id: "Indonesian",
  it: "Italian",
  ja: "Japanese",
  ko: "Korean",
  pl: "Polish",
  "pt-BR": "Portuguese (Brazil)",
  "pt-PT": "Portuguese (Portugal)",
  ru: "Russian",
  "es-MX": "Spanish (Mexico)",
  "es-ES": "Spanish (Spain)",
  sv: "Swedish",
  th: "Thai",
  tr: "Turkish",
  vi: "Vietnamese"
};
function Us(this: any, e: any): any {
  return (e as any) !== (void 0 as any) && ((Object as any).hasOwn as any)(bn, e);
}
var s_: any = ((((((Object as any).keys as any)(bn) as any).filter as any)(Us) as any).map as any)((e: any): any => ({
  id: e,
  label: (bn as any)[e]
}));
var re: number = 2e3,
  y_: any = `The task was not sent: request exceeds ${re} characters. Reformulate it within the limit while preserving every constraint, especially prohibitions and approval requirements. Do not drop constraints or split the task into executable pieces. Ask the caller to clarify if it cannot fit safely.`;
var ie: string = "end_the_call",
  T: string = "send_task",
  Q: string = "recall_text_messages",
  Z: string = "search_conversations",
  G: string = "stay_silent",
  Bs: any = [ie, T, Q, Z, G];
function Ke(this: any, e: any): any {
  return ((Bs as any).some as any)((n: any): any => (n as any) === (e as any));
}
var N: string = "work_landed",
  Y: string = "work_overheard",
  Cn: string = "user_message";
var Vs: number = 6;
var lr: any = ["this-chat", "earlier", "everything"],
  cr: any = ["say-no-record", "send-task"],
  kn: any = `the shared history between you and this caller: this chat, earlier chats, and earlier phone calls with them. Earlier calls are first-class here \u2014 what you two said on a prior call lives in this record, not in the chat window. "you" is what you said or sent, "them" is what they typed or said. Nobody else is in it: not their other agents, not other people, not Slack, mail, or any other app. Word from any of those is a ${T} job, never a search of this record.`,
  In: any = `Use it for a fact from before this call that the last few messages of this chat may not hold \u2014 especially anything from an earlier phone call with them. When they ask what you said on a prior call, when you spoke, on the phone, or "last call", search here (prefer scope "earlier" or "everything") and answer from those hits as something you already know together. Lead with the fact; say when only if they ask, or if it changes the answer. The chat window alone will miss earlier calls. When a later result corrects an earlier one, the newest wins. When two results both fit what they asked, ask which they mean before answering. When nothing comes back, say nothing about what the record holds or lacks; ${T} it and answer from what lands. Never invent one. Something they told you on this call beats anything the record says.`,
  On: any = `the written chat between you and this caller: "you" is what you sent them, "them" is what they typed to you. Nobody else writes in it, and nothing anyone else sent them is in it: not their other agents, not other people, not Slack, mail, or any other app. Word from any of those is a ${T} job, never a read of this chat.`,
  je: any = `If the answer might already be in the written chat, call ${Q}. Do not guess it, do not say you do not know, and do not ${T} for it until you have read that chat.`,
  Gs: any = `If the answer might already be in the written chat you have not read this call, ${Q} first.`,
  Fs: any = {
    recall: {
      ifUnread: Gs,
      when: je,
      textOnly: "Written recall contains text, not sign-in cards.",
      sendTaskFirst: `${Q} first when it might already be in this written chat`
    },
    search: {
      ifUnread: `If the answer is not in the recent lines and might be in this chat or an earlier call, ${Z} for the subject.`,
      when: `If the answer is not in the recent lines and might be in this chat or an earlier call, call ${Z}. Do not guess it, do not say you do not know, and do not ${T} until you have searched.`,
      textOnly: "Search and the recent lines are text, not pictures or sign-in cards.",
      sendTaskFirst: `${Z} first when it might already be in this chat or an earlier call and is not in the recent lines`
    }
  };
var L: any = class {
  [key: string]: any;
  static sendTask(n: any = "recall"): any {
    let o: any = ((Fs as any)[n] as any).sendTaskFirst;
    return `Send a job that needs their computer, files, web, browser, or mail and chat they send. That call is a receipt, never the answer, and never the quick path. Speak a short beat on this response that names the job in how you talk, then call this. Never start that beat with a confirmation. Never say you are calling this tool. The outcome lands later as a ${N} entry. Do not use this for a take, a recap of this call, a quiz from words already on the line, a story, a joke, talk they asked you to do yourself, a fact already on the line, or a name or value they just spoke on this call \u2014 answer from that speech instead. If the useful answer needs a fact you do not have about their world, ${o}; use this only when it is not there.`;
  }
  static sendTaskRequest(): any {
    return `The job itself: what to do or find out, and what to come back with. Not the caller's sentence. Add their exact words only where the wording itself is part of the job. Maximum ${re} characters; preserve every constraint, prohibition, and approval requirement. Overlong requests are rejected, never truncated.`;
  }
  static recallTextMessages(): any {
    return `Read ${On} Oldest first. ${je} Say nothing about calling this.`;
  }
  static searchConversations(n: any = kn): any {
    return `Search ${n} ${In} Each hit says where and roughly when it was said, who said it, and the words, with a line before and after. At most ${Vs} hits come back, best first; "more" means the record holds others, so search again with different words if the answer is not among them. Say nothing about calling this.`;
  }
  static searchConversationsQuery(): any {
    return "A few words naming the fact you want: the thing, the name, the number, the place. Not the caller's whole sentence.";
  }
  static searchConversationsScope(): any {
    return 'Where to look: "this-chat" for this conversation only, "earlier" for earlier chats and calls only, "everything" for all of it. Leave it out to search everything.';
  }
  static searchConversationsId(): any {
    return "The id of a hit you already have. Pass it to read that message in full.";
  }
  static searchConversationsFrom(): any {
    return "First day to look in, YYYY-MM-DD. Same as to for one day. Leave it out when the question is not about a day.";
  }
  static searchConversationsTo(): any {
    return "Last day to look in, YYYY-MM-DD, inclusive.";
  }
  static searchConversationsIfMissing(): any {
    return '"send-task" when the caller asked you to retrieve a prior call or word from another person, agent, Slack, mail, the web, or another app; "say-no-record" when only the caller could supply the missing fact. Decide before seeing results.';
  }
  static staySilent(): any {
    return `Say nothing this turn. This is only for a last-landed ${N} or ${Y} entry, when speaking would give them nothing new. Never use it when they just talked to you. Never on the unpaid turn after ${T}. Never on a ${N} outcome they have not heard. Never on the same turn as spoken words. The caller hears nothing. Say nothing about calling this.`;
  }
  static endTheCall(): any {
    return `Hang up and end this call. Use it only when the caller says a parting greeting like "all done", "bye", "thanks, that's all", "stop", "go away", "shut up", "stop listening", "leave me alone", "goodbye", or "hang up". An unclear pause, a task still open, "ok" in the middle of work, or a "stop" that cancels that work is not a hang-up. ALWAYS say your goodbye out loud first, including when hanging up is the last step of something else they asked for: the line drops the moment you call this, so nothing after it is heard. Never call it while they are still asking for something.`;
  }
};
var Nn: any = [{
    type: "function",
    name: T,
    description: ((L as any).sendTask as any)(),
    parameters: {
      type: "object",
      properties: {
        request: {
          type: "string",
          description: ((L as any).sendTaskRequest as any)()
        }
      },
      required: ["request"]
    }
  }, {
    type: "function",
    name: Q,
    description: ((L as any).recallTextMessages as any)(),
    parameters: {
      type: "object",
      properties: {}
    }
  }, {
    type: "function",
    name: G,
    description: ((L as any).staySilent as any)(),
    parameters: {
      type: "object",
      properties: {}
    }
  }, {
    type: "function",
    name: ie,
    description: ((L as any).endTheCall as any)(),
    parameters: {
      type: "object",
      properties: {}
    }
  }],
  Hs: any = [{
    type: "function",
    name: Z,
    description: ((L as any).searchConversations as any)(),
    parameters: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: ((L as any).searchConversationsQuery as any)()
        },
        scope: {
          type: "string",
          description: ((L as any).searchConversationsScope as any)(),
          enum: lr
        },
        id: {
          type: "string",
          description: ((L as any).searchConversationsId as any)()
        },
        from: {
          type: "string",
          description: ((L as any).searchConversationsFrom as any)()
        },
        to: {
          type: "string",
          description: ((L as any).searchConversationsTo as any)()
        },
        if_missing: {
          type: "string",
          description: ((L as any).searchConversationsIfMissing as any)(),
          enum: cr
        }
      },
      required: ["query", "if_missing"]
    }
  }],
  Re: any = class {
    [key: string]: any;
    static all(): any {
      return Nn;
    }
    static of(n: any): any {
      return ((Nn as any).filter as any)((o: any): any => ((n as any).includes as any)((o as any).name));
    }
    static descriptor(n: any): any {
      let o: any = (([...Nn, ...Hs] as any).find as any)((i: any): any => ((i as any).name as any) === (n as any));
      if ((o as any) === (void 0 as any)) throw new (Error as any)(`VoiceCallSessionTools.descriptor: ${n} is not a voice tool`);
      return o;
    }
    static worded(n: any, o: any): any {
      let i: any = (Ke as any)((n as any).name) ? (o as any)[(n as any).name] : void 0;
      if ((i as any) === (void 0 as any) || ((i as any).description as any) === (void 0 as any) && ((i as any).parameters as any) === (void 0 as any)) return n;
      let d: any = new (Map as any)(((Object as any).entries as any)((i as any).parameters ?? {})),
        E: any = ((Object as any).fromEntries as any)(((((Object as any).entries as any)(((n as any).parameters as any).properties) as any).map as any)(([O, b]: any): any => {
          let C: any = ((d as any).get as any)(O);
          return [O, (C as any) === (void 0 as any) ? b : {
            ...b,
            description: C
          }];
        }));
      return {
        ...n,
        description: (i as any).description ?? (n as any).description,
        parameters: {
          ...(n as any).parameters,
          properties: E
        }
      };
    }
    static registers(n: any, o: any): any {
      return ((o as any).some as any)((i: any): any => ((i as any).name as any) === (n as any));
    }
  };
var de: any = class e {
  [key: string]: any;
  static of(n: any): any {
    return ((e as any).KNOWN as any)[(n as any).name] ?? {
      line: `- ${(n as any).name}: ${(n as any).description}`,
      inFlight: [],
      receipt: null
    };
  }
  static searchLine(n: any): any {
    return `- ${Z}: search ${n} ${In} Speak what you found as something you know, never as a search, a lookup, or a record you consulted.`;
  }
  static lines(n: any, o: any): any {
    return ((n as any).map as any)((i: any): any => ((Ke as any)((i as any).name) ? (o as any)[(i as any).name]?.line : void 0) ?? (((e as any).of as any)(i) as any).line);
  }
  static inFlight(n: any): any {
    return ((n as any).flatMap as any)((o: any): any => (((e as any).of as any)(o) as any).inFlight);
  }
  static receipt(n: any): any {
    return ((n as any).flatMap as any)((o: any): any => {
      let i: any = (((e as any).of as any)(o) as any).receipt;
      return (i as any) === (null as any) ? [] : [i];
    });
  }
  static KNOWN: any = {
    [T]: {
      line: `- ${T}: speak a short beat that names the job in how you talk, then send it. Never start that beat with a confirmation. Never say you are calling the tool. Work that needs their computer, files, web, browser, or mail and chat they send goes through it; do not refuse it. That call is a receipt, never the outcome, and never the quick path. The outcome lands later, on its own, as a ${N} entry.`,
      inFlight: [],
      receipt: null
    },
    [Q]: {
      line: `- ${Q}: read ${On} ${je}`,
      inFlight: [],
      receipt: null
    },
    [Z]: {
      line: ((e as any).searchLine as any)(kn),
      inFlight: [],
      receipt: null
    },
    [G]: {
      line: `- ${G}: say nothing this turn, only when the last landed entry is ${N} or ${Y} and there is nothing new to say. Never when they just talked to you. Never on the unpaid turn after ${T}. Never on a ${N} outcome they have not heard.`,
      inFlight: [`Never ${G} on a turn they talked to you, even if a ${N} entry just landed.`, `${G} only when they have said nothing since your last line and the last thing that landed is a ${N} or ${Y} entry and speaking would give them nothing new.`, `Never ${G} on the same turn as spoken words.`],
      receipt: `Do not ${G}.`
    },
    [ie]: {
      line: `- ${ie}: hang up only on a parting greeting. Say your goodbye first; the line drops the moment you call it.`,
      inFlight: [],
      receipt: null
    }
  };
};
var ur: string = "what happens now: the job you are taking and what it is about, where the work stands and when you will say more, or the answer if you already have it. A confirmation on its own \u2014 okay, got it, sure, will do \u2014 is not a reply.",
  le: any = class e {
    [key: string]: any;
    static QUIET_WINDOW_SECONDS: any = 30;
    static ackLines(): any {
      return ["When a tool call will be quick, say nothing and invoke it."];
    }
    static receiptLines(): any {
      return [`${T} is never the quick path. Speak a short beat on this response that names the job in how you talk, then call it. Never start that beat with a confirmation. Never say you are calling the tool. Checking or fetching is not that beat.`, `A real errand that has to loop may ask the one or two things you would otherwise guess at; call ${T} anyway, and what they answer reaches the same job.`];
    }
    static voiceLoopLines(n: any = []): any {
      return ["Starting something owes one short spoken beat on that same response before the tool, in your own words about the job. Never start that beat with a confirmation. Never say you are calling the tool, and it never needs saying twice.", `If ${T} left this response silent, keep talking on the next turn: a question, a suggestion, or a beat already on this call. Do not fill that beat with a start-status or silence.`, `If they talked to you, speak. A take, a recap, a story, a joke, small talk they asked for is done now; do not ask what kind first, do not ${T} it, and do not hold it for the errand.`, `Never re-announce you are still working within about ${(e as any).QUIET_WINDOW_SECONDS} seconds of your last line.`, "Speak again for the outcome, a real step, a problem they need to hear, or anything they just said to you.", "A work update that only repeats a start you already named is not a turn.", "Never chase or poll the work; it reports back on its own.", "An empty tool result is not news. Do not announce quiet or that nothing came in.", ...((de as any).inFlight as any)(n)];
    }
    static replyLines(): any {
      return [`When they spoke last, tell them ${ur}`];
    }
    static continueLines(n: any): any {
      return ["After you answer, keep the call going with one natural question, the way a person would: a follow-up, a suggestion, or whatever comes next.", "It does not have to be about the last line.", ...n];
    }
    static noInventedWorkLines(): any {
      return ["A follow-up is not invented work. Do not invent work, inbox items, or product facts that no tool and no real context on this call returned."];
    }
    static interruptedLines(): any {
      return ["When they talk over you, stop and listen; they heard only the start.", "If they have moved on, answer them; if they still want it, pick up where they cut you off without restarting the sentence."];
    }
    static queuedBehindCurrentWork(): any {
      return "This request is waiting behind work already on the call. It has not started. Say that in your own words, in one short line. Do not read this note out.";
    }
    static receiptTurnOwed(n: any = []): any {
      return ((["The job is under way. Keep talking with a natural question or a suggestion. Do not announce that you started.", ...((de as any).receipt as any)(n)] as any).join as any)(" ");
    }
    static theyJustSpoke(): any {
      return (Te as any).theyJustSpoke;
    }
    static newsOwed(): any {
      return (Te as any).newsOwed;
    }
    static staySilentPlan({
      theyJustTalked: n,
      newsOwed: o,
      receiptOwed: i,
      alreadySpokeThisTurn: d = !1
    }: any): any {
      return n ? {
        kind: "spoken",
        error: (Te as any).theyJustSpoke
      } : d ? {
        kind: "silent"
      } : o ? {
        kind: "spoken",
        error: (Te as any).newsOwed
      } : i ? {
        kind: "spoken",
        error: (Te as any).receiptOwed
      } : {
        kind: "silent"
      };
    }
  },
  Te: any = ((Object as any).freeze as any)({
    theyJustSpoke: `They just spoke to you and have heard nothing back. Answer out loud, and tell them ${ur} Do not stay_silent.`,
    newsOwed: "Work of yours just landed and they have not heard it. Say what it means out loud now.",
    receiptOwed: ((le as any).receiptTurnOwed as any)(((Re as any).of as any)([G]))
  });
var Ks: any = {
  workSurfaces: "Files, the web, the browser, mail, chat, and their computer",
  dictation: {
    use: "quiz from that",
    notSent: "a deck"
  },
  factScope: "their world",
  missingFactMove: "try: send the job",
  inventedThings: "a screen, a page",
  narratedRead: "a page",
  inventedFiller: "inbox items or product incidents",
  sending: [`When they want something done or looked up that is not already on this call, call ${T}. The request is the job itself: what to do or find out, and what to come back with. Carry every explicit limit into the request, including lookup-only and anything they said not to do. Never their sentence with the question trimmed off. Keep their exact words only where the wording is part of the job \u2014 a name, a phrase to search for, a message to send \u2014 and say what to do with them. Never a recap of the chat.`],
  underWay: [`A change to a job already under way, stopping it included, is that same errand, changed: send the change through ${T}, and your one line says what the job is now, or that it is being stopped. Nothing new was started, so never say it was.`],
  notInChat: (e: any): any => [`${(e as any).textOnly} If they ask whether a sign-in card reached them, ${T} to verify it; a promise to provide a card is not evidence that it reached them.`, `When they ask for word from anyone else, their other agents included, the chat does not hold it: ${T} for it.`],
  speaking: [`A ${N} entry is the only work to speak. Never speak a ${Y} entry.`],
  landing: [],
  noInventedWork: ((le as any).noInventedWorkLines as any)(),
  tools: {}
};
var cE: any = `${He}:<call>`;
var be: any = class {
    [key: string]: any;
    static frame({
      topic: n,
      eventId: o,
      texts: i,
      atMs: d
    }: any): any {
      return {
        type: "async_update.add",
        event_id: o,
        async_update: {
          topic: n,
          payload: ((i as any).map as any)((E: any): any => ({
            message: {
              type: "text",
              content: E
            },
            timestampMs: d
          }))
        }
      };
    }
  },
  We: any = class e {
    [key: string]: any;
    static TOPIC: any = Cn;
    static CHAR_LIMIT: any = re;
    static EVENT_ID_PREFIX: any = "written-turn";
    static eventId(n: any): any {
      return `${(e as any).EVENT_ID_PREFIX}-${n}`;
    }
    static rides(n: any): any {
      return (n as any) === ("async-update" as any);
    }
    static frame({
      entryId: n,
      text: o,
      atMs: i
    }: any): any {
      return ((be as any).frame as any)({
        topic: (e as any).TOPIC,
        eventId: ((e as any).eventId as any)(n),
        texts: [((o as any).slice as any)(0, (e as any).CHAR_LIMIT)],
        atMs: i
      });
    }
  };
function $(this: any, e: any, n: any): any {
  return (n as any) === ("absent" as any) || (n as any) === ("unrecognized" as any) ? n : ((e as any).find as any)((o: any): any => (o as any) === (n as any)) ?? "unrecognized";
}
var xn: any = ["not_configured", "unsupported_model", "rejected", "unreachable", "malformed_response"],
  Pn: any = ["429", "401", "403", "503"],
  pr: string = "voice_mint_",
  WE: any = (((): any => {
    let e: any = new (Map as any)();
    for (let n of xn) {
      ((e as any).set as any)(`${pr}${n}`, {
        reason: n,
        http: "absent"
      });
      for (let o of Pn) ((e as any).set as any)(`${pr}${n}_${o}`, {
        reason: n,
        http: o
      });
    }
    return e;
  }) as any)();
var Ye: any = class e {
  [key: string]: any;
  static EVENT_ID_PREFIX: any = "response_cancel.";
  static frame(n: any): any {
    return {
      type: "response.cancel",
      event_id: `${(e as any).EVENT_ID_PREFIX}${n}`
    };
  }
};
var Ws: any = {
    ack: N,
    progress: N,
    outcome: N,
    overheard: Y
  },
  Ys: string = "{}",
  Ce: any = class e {
    [key: string]: any;
    static SEEDED_TOOL: any = N;
    static OVERHEARD_TOOL: any = Y;
    static CALL_ID_PREFIX: any = "seeded-nudge";
    static callId(n: any): any {
      return `${(e as any).CALL_ID_PREFIX}-${n}`;
    }
    static seededTool(n: any): any {
      return (Ws as any)[n];
    }
    static progressNote({
      kind: n,
      texts: o,
      atMs: i
    }: any): any {
      let d: any = ((((new (Date as any)(i) as any).toISOString as any)() as any).replace as any)(/\.\d{3}Z$/, "Z");
      return (n as any) === ("overheard" as any) ? {
        status: "in progress",
        steps: o,
        at: d
      } : {
        status: "landed",
        updates: o,
        at: d
      };
    }
    static isNudgeKind(n: any): any {
      return (n as any) === ("ack" as any) || (n as any) === ("progress" as any) || (n as any) === ("outcome" as any) || (n as any) === ("overheard" as any);
    }
    static SPOKEN_KINDS: any = ["progress", "outcome"];
    static OVERHEARD_CHAR_LIMIT: any = re;
    static earnsASpokenTurn({
      kind: n
    }: any): any {
      return (((e as any).SPOKEN_KINDS as any).includes as any)(n);
    }
    static delivery(n: any, o: any): any {
      return ((e as any).earnsASpokenTurn as any)(n) ? (o as any) === ("async-update" as any) ? "orchestrated" : "asked" : "filed";
    }
    static frames(n: any, o: any): any {
      return (((e as any).delivery as any)(n, o) as any) === ("orchestrated" as any) ? [((be as any).frame as any)({
        topic: N,
        eventId: (n as any).callId,
        texts: (n as any).texts,
        atMs: (n as any).atMs
      })] : ((e as any).pair as any)(n);
    }
    static pair({
      callId: n,
      kind: o,
      texts: i,
      atMs: d
    }: any): any {
      return [{
        type: "conversation.item.create",
        item: {
          type: "function_call",
          name: ((e as any).seededTool as any)(o),
          call_id: n,
          arguments: Ys
        }
      }, {
        type: "conversation.item.create",
        item: {
          type: "function_call_output",
          call_id: n,
          output: ((JSON as any).stringify as any)(((e as any).progressNote as any)({
            kind: o,
            texts: i,
            atMs: d
          }))
        }
      }];
    }
  };
var mr: any = ["invalid_request_error", "server_error", "authentication_error", "rate_limit_error"],
  Sr: any = ["internal_error", "async_not_enabled", "invalid_request_error", "missing_tool_call_results"],
  yr: any = ["async_update_add", "response_cancel"],
  gr: any = ["1008", "1006", "1011", "1000"],
  fr: any = ["connecting", "live"],
  aA: any = [[`${(We as any).EVENT_ID_PREFIX}-`, "async_update_add"], [`${(Ce as any).CALL_ID_PREFIX}-`, "async_update_add"], [(Ye as any).EVENT_ID_PREFIX, "response_cancel"]];
var _r: any = ["sent", "sent_after_wait", "carried_by_live_response", "folded", "dropped_line_dead", "dropped_caller_holds", "dropped_caller_barged_in", "dropped_answered_live", "dropped_superseded", "dropped_call_closed"],
  Er: any = ["outcome", "greeting", "steer", "bare"];
function ce(this: any, e: any): any {
  return (typeof e as any) == ("number" as any) && ((Number as any).isSafeInteger as any)(e) && (e as any) >= (0 as any);
}
function $s(this: any, e: any): any {
  return ($ as any)(fr, e);
}
function qs(this: any, e: any): any {
  return (e as any) === (!0 as any) ? !0 : (e as any) === (!1 as any) ? !1 : "absent";
}
function j(this: any, e: any, n: any): any {
  return n in e ? (e as any)[n] : void 0;
}
function Xs(this: any, e: any): any {
  return ((j as any)(e, "fault_class") as any) !== (void 0 as any) || ((j as any)(e, "fault_code") as any) !== (void 0 as any) || ((j as any)(e, "fault_about") as any) !== (void 0 as any);
}
function $e(this: any, e: any, n: any): any {
  let o: any = (j as any)(e, "fault_stage");
  return !n && (o as any) === (void 0 as any) ? {} : {
    fault_stage: ($s as any)(o)
  };
}
function zs(this: any, e: any): any {
  if ((typeof e as any) != ("object" as any) || (e as any) === (null as any) || ((Array as any).isArray as any)(e) || !("call_id" in e) || (typeof (e as any).call_id as any) != ("string" as any) || (((e as any).call_id as any).length as any) !== (41 as any) || !((/^call-[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i as any).test as any)((e as any).call_id) || !("telemetry_version" in e) || ((e as any).telemetry_version as any) !== ("1" as any) || !("phase" in e)) return;
  let n: any = {
    call_id: (e as any).call_id,
    telemetry_version: (e as any).telemetry_version
  };
  switch ((e as any).phase) {
    case "started":
      return {
        ...n,
        phase: (e as any).phase
      };
    case "connected":
      return !("elapsed_ms" in e) || !(ce as any)((e as any).elapsed_ms) ? void 0 : {
        ...n,
        phase: (e as any).phase,
        elapsed_ms: (e as any).elapsed_ms
      };
    case "usage":
      return !("active_ms" in e) || !(ce as any)((e as any).active_ms) || !("sequence" in e) || !(ce as any)((e as any).sequence) ? void 0 : {
        ...n,
        phase: (e as any).phase,
        active_ms: (e as any).active_ms,
        sequence: (e as any).sequence
      };
    case "first_audio":
      return !("trigger" in e) || ((e as any).trigger as any) !== ("call_start" as any) && ((e as any).trigger as any) !== ("user_speech" as any) || !("ttfa_ms" in e) || !(ce as any)((e as any).ttfa_ms) ? void 0 : {
        ...n,
        phase: (e as any).phase,
        trigger: (e as any).trigger,
        ttfa_ms: (e as any).ttfa_ms
      };
    case "ui_opened":
      return !("surface" in e) || ((e as any).surface as any) !== ("full_menu" as any) && ((e as any).surface as any) !== ("transcript" as any) ? void 0 : {
        ...n,
        phase: (e as any).phase,
        surface: (e as any).surface
      };
    case "ended":
      return !("outcome" in e) || ((e as any).outcome as any) !== ("hung_up" as any) && ((e as any).outcome as any) !== ("disconnected" as any) && ((e as any).outcome as any) !== ("failed" as any) && ((e as any).outcome as any) !== ("reset" as any) || !("connected" in e) || (typeof (e as any).connected as any) != ("boolean" as any) || !("duration_ms" in e) || !(ce as any)((e as any).duration_ms) || !("elapsed_ms" in e) || !(ce as any)((e as any).elapsed_ms) || ((e as any).duration_ms as any) > ((e as any).elapsed_ms as any) || !(e as any).connected && ((e as any).duration_ms as any) !== (0 as any) ? void 0 : {
        ...n,
        phase: (e as any).phase,
        outcome: (e as any).outcome,
        connected: (e as any).connected,
        duration_ms: (e as any).duration_ms,
        elapsed_ms: (e as any).elapsed_ms
      };
    case "fault":
      {
        if (!("fault_kind" in e)) return;
        if (((e as any).fault_kind as any) === ("tool" as any) || ((e as any).fault_kind as any) === ("relay" as any)) return {
          ...n,
          phase: (e as any).phase,
          fault_kind: (e as any).fault_kind,
          ...($e as any)(e, !1)
        };
        if (((e as any).fault_kind as any) === ("mint" as any)) return {
          ...n,
          phase: (e as any).phase,
          fault_kind: "mint",
          fault_reason: ($ as any)(xn, (j as any)(e, "fault_reason")),
          fault_http: ($ as any)(Pn, (j as any)(e, "fault_http")),
          ...($e as any)(e, !0)
        };
        if (((e as any).fault_kind as any) === ("socket" as any)) return {
          ...n,
          phase: (e as any).phase,
          fault_kind: "socket",
          fault_close: ($ as any)(gr, (j as any)(e, "fault_close")),
          fault_clean: (qs as any)((j as any)(e, "fault_clean")),
          ...($e as any)(e, !0)
        };
        if (((e as any).fault_kind as any) !== ("protocol" as any)) return;
        let o: any = {
          ...n,
          phase: (e as any).phase,
          fault_kind: (e as any).fault_kind
        };
        return (Xs as any)(e) ? {
          ...o,
          fault_class: ($ as any)(mr, (j as any)(e, "fault_class")),
          fault_code: ($ as any)(Sr, (j as any)(e, "fault_code")),
          fault_about: ($ as any)(yr, (j as any)(e, "fault_about")),
          ...($e as any)(e, !1)
        } : o;
      }
    default:
      return;
  }
}
function Ar(this: any, e: any): any {
  let n: any = (zs as any)(e);
  if ((n as any) === (void 0 as any) || (typeof e as any) != ("object" as any) || (e as any) === (null as any) || ((n as any).phase as any) === ("fault" as any) && ((n as any).fault_kind as any) === ("protocol" as any) && !("fault_class" in n)) return !1;
  let o: any = {
    ...e
  };
  return ((((Object as any).keys as any)(o) as any).length as any) === ((((Object as any).keys as any)(n) as any).length as any) && ((((Object as any).entries as any)(n) as any).every as any)(([i, d]: any): any => ((Object as any).hasOwn as any)(o, i) && ((o as any)[i] as any) === (d as any));
}
var Js: any = ["unspecified", "none", "teamPrivacyMode", "teamSetupRequired", "teamAccessRequired", "notOffered", "freeTrialAvailable", "paywallIndividual", "paywallTeamMember", "paywallTeamAdmin"],
  Zs: string = "https://cursor.com/bot/onboarding",
  KA: any = `${Zs}?step=share_data`;
var Qs: any = new (Set as any)(Js);
function hr(this: any, e: any): any {
  return (typeof e as any) == ("string" as any) && ((Qs as any).has as any)(e);
}
var wn: any = ["message", "tool-call", "send-message", "user-attachment", "notice", "event", "feedback", "voice-call", "mcp-app"];
var Rr: any = ["ready", "superseded", "failed"],
  Tr: any = ["entered", "retry", "recovered", "waking"],
  br: any = ["started", "recovered", "exhausted", "refused"],
  Cr: any = ["waking", "first_load_retry"],
  kr: any = ["retry", "recover", "reset", "relaunch"],
  Ir: any = ["update", "reset", "recover", "reconnecting"],
  Or: any = ["taking-longer", "unreachable"],
  Nr: any = ["shown", "keep_waiting", "retry"],
  xr: any = ["roster", "transcript"],
  Pr: any = ["covered", "superseded", "abandoned"],
  wr: any = ["dispatched", "retired", "parked", "failed"],
  Dr: any = ["queued", "prepared", "dispatching", "accepted-awaiting-echo"],
  Lr: any = ["install", "delta", "older-page"],
  Mr: any = wn,
  vr: any = ["window-installed", "seed-in-flight", "server-tail"],
  Ur: any = ["shadow-compare", "store-first", "server-tail"],
  Br: any = ["blob", "omitted", "none"],
  Vr: any = ["entered", "recovered"],
  Gr: any = ["wrong_account_suspected", "seat_revoked", "plan_expired", "no_plan", "unknown"];
var Fr: any = ["setup", "recreate"],
  Hr: any = ["ready", "failed", "connectivity", "abandoned"],
  Kr: any = ["cold_create", "first_connect", "manual_update", "manual_reset", "auto_update", "remote_reset", "reconnect"],
  jr: any = ["begin", "heartbeat", "end", "stage_transition"],
  Wr: any = ["foreground", "background"],
  Yr: any = ["acked", "failed", "timeout", "queued_offline"],
  $r: any = ["landed", "timeout"],
  qr: any = ["preview", "interactive"],
  Xr: any = ["navigate", "dom_ready", "load_fail", "rfb_connect", "rfb_disconnect", "reconnect", "focus"],
  zr: any = ["vnc", "composer", "pending"],
  Jr: any = ["preview", "handoff", "teach"],
  Dn: any = ["success", "cancelled", "error"],
  Zr: any = ["action_required", "bot_block", "pipeline", "agent"],
  Qr: any = ["user_form", "none"],
  eo: any = ["assistant_text", "send_message", "tool_call"],
  no: any = ["rendered", "timeout", "switched"],
  to: any = ["turn_ended", "switched", "superseded", "timeout"],
  ro: any = ["footer_pill", "account_menu", "palette", "settings", "blocker"],
  oo: any = ["shown", "clicked", "confirmed", "canceled", "refused_superseded"],
  ao: any = ["check", "progress", "ready", "error", "disabled"],
  io: any = ["clicked", "opened", "load_failed"],
  so: any = ["document", "canvas"],
  lo: any = ["chat_card", "chat_link", "library"],
  co: any = ["pointer", "focus", "key"],
  uo: any = ["shown", "dismissed", "get_more_usage"],
  po: any = ["pin", "unpin", "move_to_section", "move_to_new_section", "mark_read", "mark_unread", "rename", "copy_link", "copy_conversation_id", "show_full_conversation", "show_async_tasks", "hide_from_sidebar", "unhide_from_sidebar", "delete", "replace_main_agent"],
  mo: any = ["context_menu"],
  So: any = ["shell", "onboarding", "sign-in"],
  yo: any = ["veto-seen", "veto-roster", "fresh", "fail-open-probes", "fail-open-deadline"],
  go: any = ["seen-probe", "agent-probe", "deadline"],
  fo: any = ["meet", "computer-demo", "jobs", "role", "tools", "create", "hand-off"],
  _o: any = ["forward", "back"],
  Eo: any = ["failed", "recovered"],
  Ao: any = ["tick-failed", "run-failed"],
  ho: any = ["app", "chat_screen", "info_pane", "transcript_row", "mermaid", "other"],
  ue: any = {
    nonceMismatch: "SAND-E0703",
    capabilityUnavailable: "SAND-E0704",
    hostRejected: "SAND-E0705",
    superseded: "SAND-E0706",
    ackExpired: "SAND-E0707"
  },
  ed: any = ["bot-templates.deleted-shares", "client-meta.account-slot", "cloud-agents.infos", "composer-drafts", "host-settings.onboarding", "roster.agent-avatars", "roster.last-roster", "selection.last-agent", "send-journal", "sidebar.last-sections", "transcript.replicas", "ui-agent-refs", "ui-layout", "usage-warning.dismissal", "other"],
  nd: any = new (Set as any)(ed);
function Ro(this: any, e: any): any {
  return (typeof e as any) == ("string" as any) && ((nd as any).has as any)(e);
}
var To: any = [...wn, "unknown-kind"],
  bo: any = ["connecting_started", "mint_ok", "mint_failed", "socket_open", "socket_error", "socket_close", "session_created", "mic_granted", "mic_denied", "mic_timeout", "audible", "connecting_stuck", "connecting_abandoned"],
  Co: any = ["account-slot", "ui-state", "voice-settings", "cloud-agent-open-target", "cloud-agent-infos", "sidebar-sections", "last-selection", "last-roster", "transcript-replicas", "composer-drafts", "send-journal", "bot-templates"],
  ko: any = ["failed", "stuck"],
  Io: any = ["settled", "cap", "ceiling"],
  Oo: any = ["ok", "absent", "failed"],
  No: any = ["hover", "card", "row"],
  xo: any = ["cursor", "github", "gitlab", "azure", "slack", "notion", "public-web", "none"],
  Po: any = ["fresh", "stale", "negative", "none"],
  wo: any = ["content", "empty", "unavailable", "failed", "closed_before_settle"];
var Do: string = "box",
  Lo: string = "temporal";
var td: number = 20,
  fh: any = (td as any) - (1 as any);
function Ln(this: any, e: any, n: any): any {
  let o: any = new (Set as any)(e);
  return (i: any): any => {
    if ((i as any) !== (void 0 as any)) return ((o as any).has as any)(i) ? i : n;
  };
}
var rd: any = ["Canceled", "Unknown", "InvalidArgument", "DeadlineExceeded", "NotFound", "AlreadyExists", "PermissionDenied", "ResourceExhausted", "FailedPrecondition", "Aborted", "OutOfRange", "Unimplemented", "Internal", "Unavailable", "DataLoss", "Unauthenticated"],
  od: string = "Other",
  Ah: any = (Ln as any)(rd, od),
  qe: any = ["ECONNREFUSED", "ECONNRESET", "ECONNABORTED", "ETIMEDOUT", "EPIPE", "ENETRESET", "ENETDOWN", "ENETUNREACH", "EHOSTUNREACH", "EHOSTDOWN", "EAI_AGAIN", "ENOTFOUND", "EADDRINUSE", "EACCES", "EPERM", "ENOENT", "ENOSPC", "EDQUOT", "EROFS", "EBUSY", "EMFILE", "EIO"],
  Mn: string = "E_OTHER",
  hh: any = (Ln as any)(qe, Mn),
  Mo: any = ["Error", "TypeError", "AbortError", "DeadlineExceededError", "ConnectError"],
  ad: any = ["client-paused", "away-park", "present-park", "dev-induced-offline", "network-return", "unknown", "cold_create", "first_connect", "manual_update", "manual_reset", "auto_update", "remote_reset", "reconnect", ...Mo, ...((Mo as any).flatMap as any)((e: any): any => ((qe as any).map as any)((n: any): any => `${e}/${n}`))],
  Rh: any = (Ln as any)(ad, "unknown");
var vo: any = ["none", "single", "double"];
var vn: any = {
  headerName: "x-automation-failure-hint",
  values: {
    ANYSPHERE_REPO_MODEL_BLOCKED: "ANYSPHERE_REPO_MODEL_BLOCKED",
    BRANCH_NOT_FOUND: "BRANCH_NOT_FOUND",
    CLOUD_AGENTS_DISABLED: "CLOUD_AGENTS_DISABLED",
    CLOUD_AGENT_PLAN_RESTRICTED: "CLOUD_AGENT_PLAN_RESTRICTED",
    CLOUD_AGENT_STORAGE_DISABLED: "CLOUD_AGENT_STORAGE_DISABLED",
    CONCURRENT_LIMIT_EXCEEDED: "CONCURRENT_LIMIT_EXCEEDED",
    DUAL_MODEL_FIELDS: "DUAL_MODEL_FIELDS",
    ENVIRONMENT_ACCESS_DENIED: "ENVIRONMENT_ACCESS_DENIED",
    ENVIRONMENT_PIN_INVALID: "ENVIRONMENT_PIN_INVALID",
    ENVIRONMENT_REPO_REVERSE_MIRRORED: "ENVIRONMENT_REPO_REVERSE_MIRRORED",
    ENVIRONMENT_SETUP_SOURCE_RESTRICTED: "ENVIRONMENT_SETUP_SOURCE_RESTRICTED",
    FORCE_VM_BACKEND_NOT_ALLOWED: "FORCE_VM_BACKEND_NOT_ALLOWED",
    FREE_OWNER_CLOUD_AGENT_DENIED: "FREE_OWNER_CLOUD_AGENT_DENIED",
    INLINE_MCP_CONFIG_INVALID: "INLINE_MCP_CONFIG_INVALID",
    INLINE_MCP_CONFIG_POLICY_DENIED: "INLINE_MCP_CONFIG_POLICY_DENIED",
    INVALID_TEAM_ID: "INVALID_TEAM_ID",
    MODEL_BLOCKED: "MODEL_BLOCKED",
    MULTI_MODEL_DISABLED: "MULTI_MODEL_DISABLED",
    MULTI_REPO_ENVIRONMENT_INVALID: "MULTI_REPO_ENVIRONMENT_INVALID",
    MULTI_REPO_LIMIT_EXCEEDED: "MULTI_REPO_LIMIT_EXCEEDED",
    NAMED_AGENT_SINGLE_SESSION: "NAMED_AGENT_SINGLE_SESSION",
    NO_REPO_AGENTS_DISABLED: "NO_REPO_AGENTS_DISABLED",
    PAYLOAD_TOO_LARGE: "PAYLOAD_TOO_LARGE",
    PRIVATE_WORKERS_DISABLED: "PRIVATE_WORKERS_DISABLED",
    REMOTE_CONTROL_DISABLED: "REMOTE_CONTROL_DISABLED",
    REPO_ACCESS_DENIED: "REPO_ACCESS_DENIED",
    REPO_CONFIG_INVALID: "REPO_CONFIG_INVALID",
    REPO_EMPTY: "REPO_EMPTY",
    SAND_BOX_BLOCKED: "SAND_BOX_BLOCKED",
    SAND_CLIENT_UPDATE_REQUIRED: "SAND_CLIENT_UPDATE_REQUIRED",
    SCM_INSTALLATION_DENIED: "SCM_INSTALLATION_DENIED",
    SCM_NOT_CONNECTED: "SCM_NOT_CONNECTED",
    SERVICE_ACCOUNT_TEAM_CONTEXT_MISSING: "SERVICE_ACCOUNT_TEAM_CONTEXT_MISSING",
    SERVICE_RATE_LIMIT_EXCEEDED: "SERVICE_RATE_LIMIT_EXCEEDED",
    SYNTHESIS_NOT_ENABLED: "SYNTHESIS_NOT_ENABLED",
    TEAM_CLOUD_AGENT_ACCESS_DENIED: "TEAM_CLOUD_AGENT_ACCESS_DENIED",
    TEAM_INACTIVE: "TEAM_INACTIVE",
    TEAM_PRIVACY_MODE_UNCONFIGURED: "TEAM_PRIVACY_MODE_UNCONFIGURED",
    UNAUTHENTICATED_REPO_ACCESS: "UNAUTHENTICATED_REPO_ACCESS",
    USAGE_LIMIT_EXCEEDED: "USAGE_LIMIT_EXCEEDED",
    USER_BLOCKED: "USER_BLOCKED"
  }
};
var Uo: any = ["ok", "refused", "timeout", "http_5xx", "dns", "no_storage", "access_denied", "box_blocked", "network", "pod_hibernated"];
var wh: any = ((vn as any).values as any).CLOUD_AGENT_STORAGE_DISABLED;
var Dh: any = ((vn as any).values as any).SAND_BOX_BLOCKED;
var Bo: any = ["loopback", "pod_proxy", "unknown"],
  Vo: any = ["dev4", "us8"],
  Go: any = ["resolved", "not_found", "temporary_failure", "timeout", "error"],
  Fo: any = ["system_path_failure", "independent_path_failure", "endpoint_failure", "cursorvm_failure", "general_dns_failure", "resolved_before_probe", "inconclusive"],
  Ho: any = ["not_found", "temporary_failure", "unknown"];
var Ko: any = ["private", "team", "public", "unknown"];
var Fh: any = (8 as any) * (1024 as any);
var sd: any = {
    ".avif": "image/avif",
    ".bmp": "image/bmp",
    ".gif": "image/gif",
    ".ico": "image/x-icon",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".webp": "image/webp"
  },
  dd: any = {
    ".heic": "image/heic",
    ".heif": "image/heif"
  },
  jo: any = {
    ...sd,
    ...dd
  };
var Wo: any = {
  ".m4v": "video/mp4",
  ".mov": "video/quicktime",
  ".mp4": "video/mp4",
  ".ogv": "video/ogg",
  ".webm": "video/webm"
};
var Yo: any = {
  ".aac": "audio/aac",
  ".flac": "audio/flac",
  ".m4a": "audio/mp4",
  ".mp3": "audio/mpeg",
  ".oga": "audio/ogg",
  ".ogg": "audio/ogg",
  ".opus": "audio/ogg",
  ".wav": "audio/wav",
  ".weba": "audio/webm"
};
var $o: any = ["image", "video", "audio", "pdf", "markdown", "html", "text", "json", "table", "docx", "unknown"],
  zh: any = new (Set as any)(((((Object as any).keys as any)(jo) as any).map as any)((e: any): any => ((e as any).slice as any)(1))),
  Jh: any = new (Set as any)(((((Object as any).keys as any)(Wo) as any).map as any)((e: any): any => ((e as any).slice as any)(1))),
  Zh: any = new (Set as any)(((((Object as any).keys as any)(Yo) as any).map as any)((e: any): any => ((e as any).slice as any)(1)));
var qo: any = /^[0-9A-Za-z.+-]{1,64}$/;
function Xo(this: any, e: any): any {
  return (e as any) === ("stable" as any) || (e as any) === ("nightly" as any) || (e as any) === ("dogfood" as any);
}
var ld: string = "tool_serve",
  cd: string = "relay",
  zo: any = [ld, cd],
  Jo: any = ["nudge", "recall", "hangup", "silent", "unknown"];
var Zo: string = "memo";
var ud: string = "[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}",
  pd: any = new (RegExp as any)(`^${Zo}-${ud}$`, "i"),
  md: any = ((Zo as any).length as any) + (37 as any);
function pe(this: any, e: any): any {
  return (typeof e as any) == ("number" as any) && ((Number as any).isSafeInteger as any)(e) && (e as any) >= (0 as any);
}
function Sd(this: any, e: any): any {
  if ((typeof e as any) != ("object" as any) || (e as any) === (null as any) || ((Array as any).isArray as any)(e) || !("memo_id" in e) || (typeof (e as any).memo_id as any) != ("string" as any) || (((e as any).memo_id as any).length as any) !== (md as any) || !((pd as any).test as any)((e as any).memo_id) || !("telemetry_version" in e) || ((e as any).telemetry_version as any) !== ("1" as any) || !("phase" in e)) return;
  let n: any = {
    memo_id: (e as any).memo_id,
    telemetry_version: (e as any).telemetry_version
  };
  switch ((e as any).phase) {
    case "offered":
      return {
        ...n,
        phase: (e as any).phase
      };
    case "started":
      return !("attempt" in e) || !(pe as any)((e as any).attempt) || ((e as any).attempt as any) < (1 as any) || !("warmth" in e) || ((e as any).warmth as any) !== ("cold" as any) && ((e as any).warmth as any) !== ("warming" as any) && ((e as any).warmth as any) !== ("ready" as any) ? void 0 : {
        ...n,
        phase: (e as any).phase,
        attempt: (e as any).attempt,
        warmth: (e as any).warmth
      };
    case "first_audio":
      return !("ttfa_ms" in e) || !(pe as any)((e as any).ttfa_ms) ? void 0 : {
        ...n,
        phase: (e as any).phase,
        ttfa_ms: (e as any).ttfa_ms
      };
    case "seek":
      return !("sequence" in e) || !(pe as any)((e as any).sequence) || ((e as any).sequence as any) < (1 as any) ? void 0 : {
        ...n,
        phase: (e as any).phase,
        sequence: (e as any).sequence
      };
    case "transcript":
      return !("action" in e) || ((e as any).action as any) !== ("expanded" as any) && ((e as any).action as any) !== ("collapsed" as any) ? void 0 : {
        ...n,
        phase: (e as any).phase,
        action: (e as any).action
      };
    case "ended":
      return !("outcome" in e) || ((e as any).outcome as any) !== ("completed" as any) && ((e as any).outcome as any) !== ("stopped" as any) && ((e as any).outcome as any) !== ("preempted" as any) && ((e as any).outcome as any) !== ("navigated" as any) && ((e as any).outcome as any) !== ("gate_off" as any) && ((e as any).outcome as any) !== ("superseded" as any) && ((e as any).outcome as any) !== ("failed" as any) && ((e as any).outcome as any) !== ("not_entitled" as any) && ((e as any).outcome as any) !== ("disposed" as any) || !("heard_audio" in e) || (typeof (e as any).heard_audio as any) != ("boolean" as any) || !("listened_ms" in e) || !(pe as any)((e as any).listened_ms) || !("audio_ms" in e) || !(pe as any)((e as any).audio_ms) || ((e as any).listened_ms as any) > ((e as any).audio_ms as any) || !("elapsed_ms" in e) || !(pe as any)((e as any).elapsed_ms) ? void 0 : {
        ...n,
        phase: (e as any).phase,
        outcome: (e as any).outcome,
        heard_audio: (e as any).heard_audio,
        listened_ms: (e as any).listened_ms,
        audio_ms: (e as any).audio_ms,
        elapsed_ms: (e as any).elapsed_ms
      };
    case "fault":
      return !("fault_kind" in e) || ((e as any).fault_kind as any) !== ("synthesis" as any) && ((e as any).fault_kind as any) !== ("playback" as any) && ((e as any).fault_kind as any) !== ("prefetch" as any) && ((e as any).fault_kind as any) !== ("empty_text" as any) && ((e as any).fault_kind as any) !== ("dictation_active" as any) && ((e as any).fault_kind as any) !== ("call_active" as any) && ((e as any).fault_kind as any) !== ("not_entitled" as any) ? void 0 : {
        ...n,
        phase: (e as any).phase,
        fault_kind: (e as any).fault_kind
      };
    default:
      return;
  }
}
function Qo(this: any, e: any): any {
  let n: any = (Sd as any)(e);
  return (n as any) !== (void 0 as any) && (typeof e as any) == ("object" as any) && (e as any) !== (null as any) && ((((Object as any).keys as any)(e) as any).length as any) === ((((Object as any).keys as any)(n) as any).length as any) && ((((Object as any).keys as any)(n) as any).every as any)((o: any): any => ((Object as any).hasOwn as any)(e, o));
}
var yd: any = ["engineering", "design", "marketing", "customer-support", "product", "ops-finance", "recruiting-people", "sales", "productivity"],
  gd: any = new (Set as any)(yd);
function ea(this: any, e: any): any {
  return ((gd as any).has as any)(e);
}
var Un: any = ["workspace", "slack", "notion", "salesforce", "microsoft-365", "linkedin", "zoom", "github", "cursor", "jira", "figma", "hubspot", "canva", "trello", "monday", "clickup", "intercom", "zendesk", "box", "dropbox", "docusign", "calendly", "loom", "outreach", "salesloft", "apollo", "clay", "zoominfo", "nooks", "stripe", "shopify", "quickbooks", "netsuite", "ramp", "workday", "rippling", "ashby", "greenhouse", "vercel", "tableau", "hex", "amplitude", "mixpanel", "snowflake", "databricks", "mailchimp"],
  fd: any = new (Set as any)(Un);
function na(this: any, e: any): any {
  return ((fd as any).has as any)(e);
}
var _d: any = ["fatal", "error", "warning", "log", "info", "debug"];
var Ed: any = /^<REDACTED: [A-Za-z ,-]+>$/,
  Ad: any = /^[A-Za-z0-9._:@-]+$/;
var SR: any = new (Set as any)(_d);
function hd(this: any, e: any, n: any = 128): any {
  if (!((typeof e as any) != ("string" as any) || ((e as any).length as any) === (0 as any) || ((e as any).length as any) > (n as any))) return ((Ad as any).test as any)(e) ? e : void 0;
}
function Rd(this: any, e: any): any {
  let n: any = (hd as any)(e);
  if ((n as any) !== (void 0 as any)) return ((bd as any)(n) as any) === (n as any) ? n : void 0;
}
function Xe(this: any, e: any): any {
  return ((Rd as any)(e) as any) !== (void 0 as any);
}
var Td: any = [{
  label: "Google API Key",
  regex: /AIza[A-Za-z0-9_\\\-]{35}/
}, {
  label: "Slack Token",
  regex: /xox[pbar]\-[A-Za-z0-9]/
}, {
  label: "GitHub Token",
  regex: /(gh[psuro]_[a-zA-Z0-9]{36}|github_pat_[a-zA-Z0-9]{22}_[a-zA-Z0-9]{59})/
}, {
  label: "Generic Secret",
  regex: /(key|token|sig|secret|signature|password|passwd|pwd|android:value)[^a-zA-Z0-9]/i
}, {
  label: "CLI Credentials",
  regex: /((login|psexec|(certutil|psexec)\.exe).{1,50}(\s-u(ser(name)?)?\s+.{3,100})?\s-(admin|user|vm|root)?p(ass(word)?)?\s+["']?[^$\-\/\s]|(^|[\s\r\n\\])net(\.exe)?.{1,5}(user\s+|share\s+\/user:| user -? secrets ? set) \s + [^ $\s \/])/
}, {
  label: "Microsoft Entra ID",
  regex: /eyJ(?:0eXAiOiJKV1Qi|hbGci|[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_]+\.)/
}, {
  label: "Email",
  regex: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/
}];
function bd(this: any, e: any): any {
  if (!e || ((Ed as any).test as any)(e)) return e;
  for (let {
    label: n,
    regex: o
  } of Td) if (((o as any).test as any)(e)) return `<REDACTED: ${n}>`;
  return e;
}
var ta: any = ["chat", "agent-exchange"],
  ra: any = ["install", "cards", "boundary", "edge", "prepend", "live"],
  ze: any = ["entry:message", "entry:send-message", "entry:event", "entry:notice", "entry:feedback", "entry:voice-call", "entry:user-attachment", "entry:spend-initiation", "entry:other", "timestamp", "unread-divider", "attachment-group", "agent-comm-group", "routine-event-group", "cloud-agent-group", "other"],
  fR: any = new (Set as any)(ze);
var oa: any = ["Error", "TypeError", "RangeError", "ReferenceError", "SyntaxError", "EvalError", "URIError", "AggregateError", "SandInvariantViolation", "other"];
function S(this: any, e: any): any {
  return (typeof e as any) == ("number" as any) && ((Number as any).isFinite as any)(e) && (e as any) >= (0 as any);
}
function w(this: any, e: any): any {
  return (e as any) === (void 0 as any) || (S as any)(e);
}
function _(this: any, e: any): any {
  return (e as any) === (void 0 as any) || (typeof e as any) == ("string" as any);
}
function q(this: any, e: any): any {
  return (e as any) === (void 0 as any) || (typeof e as any) == ("boolean" as any);
}
function Se(this: any, e: any): any {
  return (typeof e as any) == ("number" as any) && ((Number as any).isInteger as any)(e) && (e as any) >= (1 as any);
}
function ee(this: any, e: any): any {
  return (typeof e as any) == ("number" as any) && ((Number as any).isInteger as any)(e) && (e as any) >= (0 as any);
}
function aa(this: any, e: any, n: any): any {
  return (typeof e as any) == ("string" as any) && ((e as any).length as any) > (0 as any) && ((e as any).length as any) <= (n as any);
}
var Cd: any = new (Set as any)(Rr),
  la: any = {
    durationMs: !0,
    openRpcMs: !0,
    queueMs: !0,
    renderMs: !0,
    cold: !0,
    stale: !0,
    boxState: !0,
    outcome: !0
  };
function ca(this: any, e: any): any {
  return (l as any)(e) ? (S as any)((e as any).durationMs) && (w as any)((e as any).openRpcMs) && (w as any)((e as any).queueMs) && (w as any)((e as any).renderMs) && (typeof (e as any).cold as any) == ("boolean" as any) && (q as any)((e as any).stale) && (typeof (e as any).boxState as any) == ("string" as any) && (typeof (e as any).outcome as any) == ("string" as any) && ((Cd as any).has as any)((e as any).outcome) : !1;
}
var kd: any = new (Set as any)(Vr),
  Id: any = new (Set as any)(Gr),
  ua: any = {
    edge: !0,
    cause: !0,
    accessReason: !0,
    msBlocked: !0
  };
function pa(this: any, e: any): any {
  return (l as any)(e) ? (typeof (e as any).edge as any) == ("string" as any) && ((kd as any).has as any)((e as any).edge) && (typeof (e as any).cause as any) == ("string" as any) && ((Id as any).has as any)((e as any).cause) && (hr as any)((e as any).accessReason) && (w as any)((e as any).msBlocked) : !1;
}
var Od: any = new (Set as any)(Tr),
  Nd: any = new (Set as any)(br),
  xd: any = new (Set as any)(Cr),
  ma: any = {
    phase: !0,
    isManual: !0,
    errorClass: !0,
    msSinceLastReachedMs: !0,
    outcome: !0,
    reason: !0,
    durationMs: !0,
    heldMs: !0
  };
function Sa(this: any, e: any): any {
  return (l as any)(e) ? (typeof (e as any).phase as any) == ("string" as any) && ((Od as any).has as any)((e as any).phase) && (typeof (e as any).isManual as any) == ("boolean" as any) && (_ as any)((e as any).errorClass) && (w as any)((e as any).msSinceLastReachedMs) && (((e as any).outcome as any) === (void 0 as any) || (typeof (e as any).outcome as any) == ("string" as any) && ((Nd as any).has as any)((e as any).outcome)) && (((e as any).reason as any) === (void 0 as any) || (typeof (e as any).reason as any) == ("string" as any) && ((xd as any).has as any)((e as any).reason)) && (w as any)((e as any).durationMs) && (w as any)((e as any).heldMs) : !1;
}
var Pd: any = new (Set as any)(kr),
  wd: any = /^[a-z0-9_]{1,64}$/i,
  ya: any = {
    action: !0,
    failureClass: !0,
    consecutiveIdentical: !0
  };
function ga(this: any, e: any): any {
  return (l as any)(e) ? (typeof (e as any).action as any) == ("string" as any) && ((Pd as any).has as any)((e as any).action) && (typeof (e as any).failureClass as any) == ("string" as any) && ((wd as any).test as any)((e as any).failureClass) && (Se as any)((e as any).consecutiveIdentical) : !1;
}
var Dd: any = new (Set as any)(Ir),
  Ld: any = new (Set as any)(Or),
  Md: any = new (Set as any)(Nr),
  vd: any = {
    escalation: {
      kind: !0,
      action: !0,
      escalation: !0,
      rebuildKind: !0,
      elapsedMs: !0
    },
    pending_stall: {
      kind: !0,
      rebuildKind: !0,
      hasAck: !0,
      streamAttached: !0,
      elapsedMs: !0
    }
  },
  fa: any = (e: any): any => (vd as any)[(e as any).kind];
function _a(this: any, e: any): any {
  return !(l as any)(e) || (typeof (e as any).rebuildKind as any) != ("string" as any) || !((Dd as any).has as any)((e as any).rebuildKind) || !(S as any)((e as any).elapsedMs) ? !1 : ((e as any).kind as any) === ("escalation" as any) ? (typeof (e as any).action as any) == ("string" as any) && ((Md as any).has as any)((e as any).action) && (typeof (e as any).escalation as any) == ("string" as any) && ((Ld as any).has as any)((e as any).escalation) : ((e as any).kind as any) === ("pending_stall" as any) ? (typeof (e as any).hasAck as any) == ("boolean" as any) && (typeof (e as any).streamAttached as any) == ("boolean" as any) : !1;
}
var Ud: any = new (Set as any)(xr),
  Bd: any = new (Set as any)(Pr),
  Vd: any = new (Set as any)(wr),
  Gd: any = new (Set as any)(Dr),
  Fd: any = new (Set as any)(Ur),
  Hd: any = new (Set as any)(vr),
  Kd: any = new (Set as any)(Lr),
  jd: any = new (Set as any)([Do, Lo]),
  Wd: any = new (Set as any)(Mr);
function Yd(this: any, e: any): any {
  return (l as any)(e) ? (S as any)((e as any).gatewayEntries) && (S as any)((e as any).storeEntries) && (S as any)((e as any).matched) && (S as any)((e as any).mismatched) && (S as any)((e as any).missing) && (S as any)((e as any).extra) && (S as any)((e as any).staleTail) && (typeof (e as any).readReason as any) == ("string" as any) && ((Fd as any).has as any)((e as any).readReason) && (typeof (e as any).painted as any) == ("boolean" as any) : !1;
}
var $d: any = {
    replica_resync: {
      kind: !0,
      replica: !0,
      outcome: !0,
      attempts: !0,
      durationMs: !0,
      bufferOverflowed: !0,
      epochChanged: !0
    },
    send_journal_restore: {
      kind: !0,
      outcome: !0,
      phase: !0,
      ageMs: !0,
      recordCount: !0
    },
    transcript_store_parity: {
      kind: !0,
      agentId: !0,
      readReason: !0,
      painted: !0,
      gatewayEntries: !0,
      storeEntries: !0,
      matched: !0,
      mismatched: !0,
      missing: !0,
      extra: !0,
      staleTail: !0
    },
    transcript_store_first_skip: {
      kind: !0,
      agentId: !0,
      skipReason: !0
    },
    transcript_window_rows_hidden: {
      kind: !0,
      agentId: !0,
      reason: !0,
      harness: !0,
      rowKind: !0,
      hiddenRows: !0,
      twinIds: !0
    }
  },
  Ea: any = (e: any): any => ($d as any)[(e as any).kind];
function Aa(this: any, e: any): any {
  return (l as any)(e) ? ((e as any).kind as any) === ("replica_resync" as any) ? (typeof (e as any).replica as any) == ("string" as any) && ((Ud as any).has as any)((e as any).replica) && (typeof (e as any).outcome as any) == ("string" as any) && ((Bd as any).has as any)((e as any).outcome) && (S as any)((e as any).attempts) && (S as any)((e as any).durationMs) && (typeof (e as any).bufferOverflowed as any) == ("boolean" as any) && (typeof (e as any).epochChanged as any) == ("boolean" as any) : ((e as any).kind as any) === ("send_journal_restore" as any) ? (typeof (e as any).outcome as any) == ("string" as any) && ((Vd as any).has as any)((e as any).outcome) && (typeof (e as any).phase as any) == ("string" as any) && ((Gd as any).has as any)((e as any).phase) && (S as any)((e as any).ageMs) && (S as any)((e as any).recordCount) : ((e as any).kind as any) === ("transcript_store_parity" as any) ? (typeof (e as any).agentId as any) == ("string" as any) && (((e as any).agentId as any).length as any) > (0 as any) && (Yd as any)(e) : ((e as any).kind as any) === ("transcript_store_first_skip" as any) ? (typeof (e as any).agentId as any) == ("string" as any) && (((e as any).agentId as any).length as any) > (0 as any) && (typeof (e as any).skipReason as any) == ("string" as any) && ((Hd as any).has as any)((e as any).skipReason) : ((e as any).kind as any) === ("transcript_window_rows_hidden" as any) ? (typeof (e as any).agentId as any) == ("string" as any) && (((e as any).agentId as any).length as any) > (0 as any) && (typeof (e as any).reason as any) == ("string" as any) && ((Kd as any).has as any)((e as any).reason) && (typeof (e as any).harness as any) == ("string" as any) && ((jd as any).has as any)((e as any).harness) && (typeof (e as any).rowKind as any) == ("string" as any) && ((Wd as any).has as any)((e as any).rowKind) && (S as any)((e as any).hiddenRows) && (S as any)((e as any).twinIds) : !1 : !1;
}
var qd: any = new (Set as any)(Fr),
  Xd: any = new (Set as any)(jr),
  zd: any = new (Set as any)(Kr),
  Jd: any = new (Set as any)(Hr),
  Zd: any = new (Set as any)(Wr);
function ke(this: any, e: any, n: any): any {
  return (e as any) === (void 0 as any) || (typeof e as any) == ("string" as any) && ((n as any).has as any)(e);
}
var ha: any = {
  event: !0,
  phase: !0,
  trigger: !0,
  outcome: !0,
  operationId: !0,
  kind: !0,
  surface: !0,
  stage: !0,
  migrationPhase: !0,
  fromStage: !0,
  stageElapsedMs: !0
};
function Ra(this: any, e: any): any {
  return (l as any)(e) ? (typeof (e as any).event as any) == ("string" as any) && ((qd as any).has as any)((e as any).event) && (typeof (e as any).phase as any) == ("string" as any) && ((Xd as any).has as any)((e as any).phase) && (ke as any)((e as any).trigger, zd) && (ke as any)((e as any).outcome, Jd) && (_ as any)((e as any).operationId) && (_ as any)((e as any).kind) && (ke as any)((e as any).surface, Zd) && (_ as any)((e as any).stage) && (_ as any)((e as any).migrationPhase) && (_ as any)((e as any).fromStage) && (w as any)((e as any).stageElapsedMs) : !1;
}
var Ta: any = {
  durationMs: !0,
  commitMs: !0,
  attachmentCount: !0,
  isFork: !0,
  traceId: !0,
  spanId: !0,
  conversationId: !0
};
function ba(this: any, e: any): any {
  return (l as any)(e) ? (S as any)((e as any).durationMs) && (w as any)((e as any).commitMs) && (S as any)((e as any).attachmentCount) && (typeof (e as any).isFork as any) == ("boolean" as any) && (_ as any)((e as any).traceId) && (_ as any)((e as any).spanId) && (_ as any)((e as any).conversationId) : !1;
}
var Qd: any = new (Set as any)(Yr),
  Ca: any = {
    ackMs: !0,
    outcome: !0,
    enterEpochMs: !0,
    traceparent: !0,
    traceId: !0,
    spanId: !0,
    clientNonce: !0,
    conversationId: !0,
    isFork: !0,
    attachmentCount: !0,
    commitOffsetMs: !0,
    commitMs: !0,
    clientOnlineAtTimeout: !0,
    didReachDeadline: !0
  };
function ka(this: any, e: any): any {
  return (l as any)(e) ? (S as any)((e as any).ackMs) && (typeof (e as any).outcome as any) == ("string" as any) && ((Qd as any).has as any)((e as any).outcome) && (S as any)((e as any).enterEpochMs) && (_ as any)((e as any).traceparent) && (_ as any)((e as any).traceId) && (_ as any)((e as any).spanId) && (_ as any)((e as any).clientNonce) && (_ as any)((e as any).conversationId) && (typeof (e as any).isFork as any) == ("boolean" as any) && (S as any)((e as any).attachmentCount) && (w as any)((e as any).commitOffsetMs) && (w as any)((e as any).commitMs) && (q as any)((e as any).clientOnlineAtTimeout) && (q as any)((e as any).didReachDeadline) : !1;
}
var el: any = /^[0-9A-Za-z._-]{1,64}$/;
function Je(this: any, e: any): any {
  return (e as any) === (void 0 as any) || (typeof e as any) == ("string" as any) && ((el as any).test as any)(e);
}
var Ia: any = {
  clientNonce: !0,
  conversationId: !0,
  enterEpochMs: !0,
  isFork: !0,
  attachmentCount: !0,
  hasMessageText: !0,
  traceId: !0,
  spanId: !0
};
function Oa(this: any, e: any): any {
  return (l as any)(e) ? (typeof (e as any).clientNonce as any) == ("string" as any) && (((e as any).clientNonce as any).length as any) > (0 as any) && (typeof (e as any).conversationId as any) == ("string" as any) && (S as any)((e as any).enterEpochMs) && (typeof (e as any).isFork as any) == ("boolean" as any) && (S as any)((e as any).attachmentCount) && (typeof (e as any).hasMessageText as any) == ("boolean" as any) && (_ as any)((e as any).traceId) && (_ as any)((e as any).spanId) : !1;
}
var nl: any = new (Set as any)(Dn),
  tl: any = new (Set as any)(Zr),
  rl: any = new (Set as any)(Qr),
  Na: any = {
    outcome: !0,
    errorType: !0,
    errorCode: !0,
    registryCode: !0,
    errorDomain: !0,
    errorRetryable: !0,
    siteBlockFamily: !0,
    siteBlockConfidence: !0,
    userAction: !0,
    settleBasis: !0,
    reconnected: !0,
    durationMs: !0,
    clientNonce: !0,
    conversationId: !0,
    isFork: !0,
    traceId: !0,
    spanId: !0
  };
function xa(this: any, e: any): any {
  return (l as any)(e) ? (typeof (e as any).outcome as any) == ("string" as any) && ((nl as any).has as any)((e as any).outcome) && (((e as any).errorType as any) === (void 0 as any) || (typeof (e as any).errorType as any) == ("string" as any) && ((tl as any).has as any)((e as any).errorType)) && (Je as any)((e as any).errorCode) && (Je as any)((e as any).registryCode) && (Je as any)((e as any).errorDomain) && (q as any)((e as any).errorRetryable) && (Je as any)((e as any).siteBlockFamily) && (((e as any).siteBlockConfidence as any) === (void 0 as any) || ((e as any).siteBlockConfidence as any) === ("high" as any) || ((e as any).siteBlockConfidence as any) === ("low" as any)) && (typeof (e as any).userAction as any) == ("string" as any) && ((rl as any).has as any)((e as any).userAction) && (((e as any).settleBasis as any) === ("host" as any) || ((e as any).settleBasis as any) === ("client" as any)) && (typeof (e as any).reconnected as any) == ("boolean" as any) && (S as any)((e as any).durationMs) && (typeof (e as any).clientNonce as any) == ("string" as any) && (((e as any).clientNonce as any).length as any) > (0 as any) && (typeof (e as any).conversationId as any) == ("string" as any) && (typeof (e as any).isFork as any) == ("boolean" as any) && (_ as any)((e as any).traceId) && (_ as any)((e as any).spanId) : !1;
}
var ol: any = new (Set as any)($r),
  Pa: any = {
    ackMs: !0,
    outcome: !0,
    conversationId: !0,
    emoji: !0
  };
function wa(this: any, e: any): any {
  return (l as any)(e) ? (S as any)((e as any).ackMs) && (typeof (e as any).outcome as any) == ("string" as any) && ((ol as any).has as any)((e as any).outcome) && (aa as any)((e as any).conversationId, 256) && (aa as any)((e as any).emoji, 64) : !1;
}
var al: any = new (Set as any)(qr),
  il: any = new (Set as any)(Xr),
  sl: any = new (Set as any)(zr),
  Da: any = {
    surface: !0,
    phase: !0,
    vncHost: !0,
    display: !0,
    durationMs: !0,
    sinceOpenMs: !0,
    failCode: !0,
    clean: !0,
    focusOwner: !0,
    focusLanded: !0
  };
function La(this: any, e: any): any {
  return (l as any)(e) ? (typeof (e as any).surface as any) == ("string" as any) && ((al as any).has as any)((e as any).surface) && (typeof (e as any).phase as any) == ("string" as any) && ((il as any).has as any)((e as any).phase) && (_ as any)((e as any).vncHost) && (_ as any)((e as any).display) && (w as any)((e as any).durationMs) && (w as any)((e as any).sinceOpenMs) && (_ as any)((e as any).failCode) && (q as any)((e as any).clean) && (ke as any)((e as any).focusOwner, sl) && (q as any)((e as any).focusLanded) : !1;
}
var dl: any = new (Set as any)(Jr),
  Ma: any = {
    trigger: !0,
    hadVncUrl: !0,
    monitorFocused: !0
  };
function va(this: any, e: any): any {
  return (l as any)(e) ? (typeof (e as any).trigger as any) == ("string" as any) && ((dl as any).has as any)((e as any).trigger) && (typeof (e as any).hadVncUrl as any) == ("boolean" as any) && (typeof (e as any).monitorFocused as any) == ("boolean" as any) : !1;
}
var ll: any = new (Set as any)(no),
  cl: any = new (Set as any)(to),
  ul: any = new (Set as any)(eo),
  Ua: any = {
    ttfrMs: !0,
    outcome: !0,
    chunkType: !0,
    enterEpochMs: !0,
    traceparent: !0,
    traceId: !0,
    spanId: !0,
    clientNonce: !0,
    conversationId: !0,
    isFork: !0
  };
function Ba(this: any, e: any): any {
  return (l as any)(e) ? (S as any)((e as any).ttfrMs) && (typeof (e as any).outcome as any) == ("string" as any) && ((ll as any).has as any)((e as any).outcome) && (ke as any)((e as any).chunkType, ul) && (S as any)((e as any).enterEpochMs) && (_ as any)((e as any).traceparent) && (_ as any)((e as any).traceId) && (_ as any)((e as any).spanId) && (_ as any)((e as any).clientNonce) && (_ as any)((e as any).conversationId) && (typeof (e as any).isFork as any) == ("boolean" as any) : !1;
}
var Va: any = {
  outcome: !0,
  chunkCount: !0,
  maxGapMs: !0,
  stalledMs: !0,
  stallCount: !0,
  streamMs: !0,
  traceId: !0,
  spanId: !0,
  clientNonce: !0,
  conversationId: !0,
  isFork: !0
};
function Ga(this: any, e: any): any {
  return (l as any)(e) ? (typeof (e as any).outcome as any) == ("string" as any) && ((cl as any).has as any)((e as any).outcome) && (S as any)((e as any).chunkCount) && (S as any)((e as any).maxGapMs) && (S as any)((e as any).stalledMs) && (S as any)((e as any).stallCount) && (S as any)((e as any).streamMs) && (_ as any)((e as any).traceId) && (_ as any)((e as any).spanId) && (_ as any)((e as any).clientNonce) && (_ as any)((e as any).conversationId) && (typeof (e as any).isFork as any) == ("boolean" as any) : !1;
}
var pl: any = new (Set as any)(ro),
  ml: any = new (Set as any)(oo),
  Sl: any = new (Set as any)(ao),
  Fa: any = {
    surface: !0,
    action: !0,
    kind: !0,
    targetVersion: !0
  };
function Ha(this: any, e: any): any {
  return (l as any)(e) ? (typeof (e as any).surface as any) == ("string" as any) && ((pl as any).has as any)((e as any).surface) && (typeof (e as any).action as any) == ("string" as any) && ((ml as any).has as any)((e as any).action) && (typeof (e as any).kind as any) == ("string" as any) && ((Sl as any).has as any)((e as any).kind) && (((e as any).targetVersion as any) === (void 0 as any) || (typeof (e as any).targetVersion as any) == ("string" as any) && ((qo as any).test as any)((e as any).targetVersion)) : !1;
}
var yl: any = new (Set as any)(uo),
  gl: any = new (Set as any)(vo),
  Ka: any = {
    action: !0,
    thresholdPercent: !0,
    policy: !0
  };
function ja(this: any, e: any): any {
  return (l as any)(e) ? (typeof (e as any).action as any) == ("string" as any) && ((yl as any).has as any)((e as any).action) && (typeof (e as any).thresholdPercent as any) == ("number" as any) && ((Number as any).isFinite as any)((e as any).thresholdPercent) && ((e as any).thresholdPercent as any) > (0 as any) && ((e as any).thresholdPercent as any) < (100 as any) && (typeof (e as any).policy as any) == ("string" as any) && ((gl as any).has as any)((e as any).policy) : !1;
}
var fl: any = new (Set as any)($o),
  _l: any = new (Set as any)(io),
  Wa: any = {
    stage: !0,
    agentId: !0,
    bcId: !0,
    kind: !0
  };
function Ya(this: any, e: any): any {
  return (l as any)(e) ? (typeof (e as any).stage as any) == ("string" as any) && ((_l as any).has as any)((e as any).stage) && (Xe as any)((e as any).agentId) && (Xe as any)((e as any).bcId) && (typeof (e as any).kind as any) == ("string" as any) && ((fl as any).has as any)((e as any).kind) : !1;
}
var El: any = new (Set as any)(so),
  Al: any = new (Set as any)(co),
  Bn: any = new (Set as any)(lo),
  hl: any = new (Set as any)(Ko),
  Rl: any = {
    opened: {
      action: !0,
      artifactType: !0,
      surface: !0,
      inGroupChat: !0,
      ageMinutes: !0
    },
    edit_attempted: {
      action: !0,
      artifactType: !0,
      surface: !0,
      inGroupChat: !0,
      canEdit: !0,
      trigger: !0
    },
    edit_saved: {
      action: !0,
      artifactType: !0,
      surface: !0,
      inGroupChat: !0
    },
    link_copied: {
      action: !0,
      artifactType: !0,
      visibility: !0
    }
  },
  $a: any = (e: any): any => (Rl as any)[(e as any).action];
function qa(this: any, e: any): any {
  if (!(l as any)(e) || (typeof (e as any).artifactType as any) != ("string" as any) || !((El as any).has as any)((e as any).artifactType)) return !1;
  switch ((e as any).action) {
    case "opened":
      return (typeof (e as any).surface as any) == ("string" as any) && ((Bn as any).has as any)((e as any).surface) && (typeof (e as any).inGroupChat as any) == ("boolean" as any) && (((e as any).ageMinutes as any) === (null as any) || (typeof (e as any).ageMinutes as any) == ("number" as any) && ((Number as any).isInteger as any)((e as any).ageMinutes) && ((e as any).ageMinutes as any) >= (0 as any));
    case "edit_attempted":
      return ((e as any).artifactType as any) === ("document" as any) && (typeof (e as any).surface as any) == ("string" as any) && ((Bn as any).has as any)((e as any).surface) && (typeof (e as any).inGroupChat as any) == ("boolean" as any) && (typeof (e as any).canEdit as any) == ("boolean" as any) && (typeof (e as any).trigger as any) == ("string" as any) && ((Al as any).has as any)((e as any).trigger);
    case "edit_saved":
      return ((e as any).artifactType as any) === ("document" as any) && (typeof (e as any).surface as any) == ("string" as any) && ((Bn as any).has as any)((e as any).surface) && (typeof (e as any).inGroupChat as any) == ("boolean" as any);
    case "link_copied":
      return (typeof (e as any).visibility as any) == ("string" as any) && ((hl as any).has as any)((e as any).visibility);
    default:
      return !1;
  }
}
var Tl: any = new (Set as any)(po),
  bl: any = new (Set as any)(mo),
  Xa: any = {
    action: !0,
    entrypoint: !0
  };
function za(this: any, e: any): any {
  return (l as any)(e) ? (typeof (e as any).action as any) == ("string" as any) && ((Tl as any).has as any)((e as any).action) && (typeof (e as any).entrypoint as any) == ("string" as any) && ((bl as any).has as any)((e as any).entrypoint) : !1;
}
var Cl: any = new (Set as any)(So),
  kl: any = new (Set as any)(yo),
  Il: any = new (Set as any)(go);
function Ja(this: any, e: any): any {
  return (typeof (e as any).gate as any) == ("string" as any) ? "gate" : (typeof (e as any).stall as any) == ("string" as any) ? "stall" : "consult";
}
var Ol: any = {
    gate: {
      gate: !0
    },
    stall: {
      stall: !0,
      signedIn: !0
    },
    consult: {
      consult: !0
    }
  },
  Za: any = (e: any): any => (Ol as any)[(Ja as any)(e)];
function Qa(this: any, e: any): any {
  if (!(l as any)(e)) return !1;
  switch ((Ja as any)(e)) {
    case "gate":
      return (typeof (e as any).gate as any) == ("string" as any) && ((Cl as any).has as any)((e as any).gate);
    case "stall":
      return (typeof (e as any).stall as any) == ("string" as any) && ((Il as any).has as any)((e as any).stall) && (((e as any).signedIn as any) === (null as any) || (typeof (e as any).signedIn as any) == ("boolean" as any));
    case "consult":
      return (typeof (e as any).consult as any) == ("string" as any) && ((kl as any).has as any)((e as any).consult);
  }
}
var Nl: any = new (Set as any)(fo),
  xl: any = new (Set as any)(_o),
  Pl: number = 16,
  ei: any = {
    step: !0,
    stepIndex: !0,
    direction: !0
  };
function ni(this: any, e: any): any {
  return (l as any)(e) ? (typeof (e as any).step as any) == ("string" as any) && ((Nl as any).has as any)((e as any).step) && (typeof (e as any).stepIndex as any) == ("number" as any) && ((Number as any).isInteger as any)((e as any).stepIndex) && ((e as any).stepIndex as any) >= (0 as any) && ((e as any).stepIndex as any) <= (Pl as any) && (typeof (e as any).direction as any) == ("string" as any) && ((xl as any).has as any)((e as any).direction) : !1;
}
var ti: any = {
  role: !0,
  tools: !0
};
function ri(this: any, e: any): any {
  return !(l as any)(e) || !((Array as any).isArray as any)((e as any).tools) || (((e as any).tools as any).length as any) > ((Un as any).length as any) ? !1 : (((e as any).role as any) === (void 0 as any) || (typeof (e as any).role as any) == ("string" as any) && (ea as any)((e as any).role)) && (((e as any).tools as any).every as any)((n: any): any => (typeof n as any) == ("string" as any) && (na as any)(n));
}
var wl: any = /^[0-9A-Za-z._/:|-]{1,64}$/,
  Dl: any = /^[0-9A-Za-z._-]{1,128}$/,
  Ll: any = new (Set as any)(Eo),
  Ml: any = new (Set as any)(Ao),
  vl: any = new (Set as any)(ho),
  Ul: any = new (Set as any)([(ue as any).nonceMismatch, (ue as any).capabilityUnavailable, (ue as any).hostRejected]),
  Bl: any = new (Set as any)([...qe, Mn]),
  Vl: any = new (Set as any)(To),
  Gl: any = new (Set as any)(["transcript"]),
  Fl: any = new (Set as any)(ta),
  Hl: any = new (Set as any)(ra),
  Kl: any = new (Set as any)(ze),
  jl: any = (ze as any).length,
  Wl: any = new (Set as any)(oa),
  Yl: any = new (Set as any)(bo),
  $l: any = new (Set as any)(zo),
  ql: any = new (Set as any)(Jo),
  Xl: any = new (Set as any)(_r),
  zl: any = new (Set as any)(Er),
  Jl: any = new (Set as any)(ko),
  Zl: any = new (Set as any)([...Co, "none"]),
  Ql: any = new (Set as any)(Io),
  ec: any = new (Set as any)(Oo),
  nc: any = new (Set as any)(No),
  tc: any = new (Set as any)(xo),
  rc: any = new (Set as any)(Po),
  oc: any = new (Set as any)(wo),
  ac: number = 256;
function F(this: any, e: any): any {
  return (typeof e as any) == ("string" as any) && ((wl as any).test as any)(e);
}
function me(this: any, e: any): any {
  return (e as any) === (void 0 as any) || (F as any)(e);
}
function oi(this: any, e: any): any {
  return (e as any) === (void 0 as any) || (typeof e as any) == ("string" as any) && ((Dl as any).test as any)(e);
}
function ia(this: any, e: any, n: any): any {
  return (l as any)(e) && ((e as any).code as any) === (n as any);
}
function sa(this: any, e: any): any {
  if (!(l as any)(e) || ((e as any).code as any) !== ("SAND-E0701" as any)) return !1;
  let n: any = (e as any).errno;
  return (n as any) === (void 0 as any) || (typeof n as any) == ("string" as any) && ((Bl as any).has as any)(n);
}
function ic(this: any, e: any): any {
  return (l as any)(e) ? (F as any)((e as any).domain) && (F as any)((e as any).operation) && (typeof (e as any).state as any) == ("string" as any) && ((Ll as any).has as any)((e as any).state) && (F as any)((e as any).failureCode) && (F as any)((e as any).boundary) && (me as any)((e as any).retryOwner) && (me as any)((e as any).transportKind) && (w as any)((e as any).failedMs) : !1;
}
function sc(this: any, e: any): any {
  return (l as any)(e) ? (typeof (e as any).boundary as any) == ("string" as any) && ((vl as any).has as any)((e as any).boundary) && (F as any)((e as any).errorClass) && (Se as any)((e as any).occurrence) : !1;
}
function dc(this: any, e: any): any {
  return !(l as any)(e) || !(S as any)((e as any).queuedMs) || !(S as any)((e as any).queueDepth) ? !1 : ((e as any).outcome as any) === ("delivered" as any) ? ((e as any).cause as any) === (void 0 as any) : ((e as any).outcome as any) === ("superseded" as any) ? ((e as any).cause as any) === ((ue as any).superseded as any) : ((e as any).outcome as any) === ("expired" as any) ? ((e as any).cause as any) === ((ue as any).ackExpired as any) : ((e as any).outcome as any) === ("flush_failed" as any) && (typeof (e as any).cause as any) == ("string" as any) && ((Ul as any).has as any)((e as any).cause);
}
function lc(this: any, e: any): any {
  return (l as any)(e) ? (((e as any).serverName as any) === (void 0 as any) || (typeof (e as any).serverName as any) == ("string" as any) && (((e as any).serverName as any).length as any) <= (ac as any)) && (me as any)((e as any).serverId) : !1;
}
function cc(this: any, e: any): any {
  return !(l as any)(e) || !(Ro as any)((e as any).slice) || !(w as any)((e as any).bytes) ? !1 : ((e as any).op as any) === ("writeback" as any) ? ((e as any).outcome as any) === ("ok" as any) && ((e as any).error as any) === (void 0 as any) && ((e as any).bytes as any) === (void 0 as any) : ((e as any).op as any) === ("load" as any) ? ((e as any).outcome as any) === ("ok" as any) ? ((e as any).error as any) === (void 0 as any) : ((e as any).outcome as any) === ("corrupt" as any) ? (ia as any)((e as any).error, "SAND-E0700") : ((e as any).outcome as any) === ("io_error" as any) && (sa as any)((e as any).error) : ((e as any).op as any) !== ("persist" as any) ? !1 : ((e as any).outcome as any) === ("quota" as any) ? (ia as any)((e as any).error, "SAND-E0702") : ((e as any).outcome as any) === ("io_error" as any) && (sa as any)((e as any).error);
}
function uc(this: any, e: any): any {
  return (l as any)(e) ? (typeof (e as any).entryKind as any) == ("string" as any) && ((Vl as any).has as any)((e as any).entryKind) && (Se as any)((e as any).occurrence) : !1;
}
function pc(this: any, e: any): any {
  return (l as any)(e) && ((((Object as any).keys as any)(e) as any).length as any) === (3 as any) && (((e as any).accountSlot as any) === (null as any) || (typeof (e as any).accountSlot as any) == ("string" as any) && (((e as any).accountSlot as any).length as any) > (0 as any) && (((e as any).accountSlot as any).length as any) <= (512 as any)) && (Ar as any)((e as any).event);
}
function mc(this: any, e: any): any {
  return (l as any)(e) ? (typeof (e as any).phase as any) == ("string" as any) && ((Yl as any).has as any)((e as any).phase) && (F as any)((e as any).callId) && (oi as any)((e as any).realtimeConversationId) && (S as any)((e as any).elapsedMs) && (me as any)((e as any).errorClass) && (w as any)((e as any).closeCode) && (q as any)((e as any).closeClean) && (q as any)((e as any).socketOpen) && (q as any)((e as any).sessionCreated) && (q as any)((e as any).micReady) && (w as any)((e as any).beat) : !1;
}
function Sc(this: any, e: any): any {
  return (l as any)(e) ? (typeof (e as any).fault as any) == ("string" as any) && (($l as any).has as any)((e as any).fault) && (typeof (e as any).tool as any) == ("string" as any) && ((ql as any).has as any)((e as any).tool) && (F as any)((e as any).callId) && (oi as any)((e as any).realtimeConversationId) && (F as any)((e as any).errorClass) && (me as any)((e as any).failureCode) : !1;
}
function yc(this: any, e: any): any {
  return (l as any)(e) ? (typeof (e as any).settlement as any) == ("string" as any) && ((Xl as any).has as any)((e as any).settlement) && (typeof (e as any).carries as any) == ("string" as any) && ((zl as any).has as any)((e as any).carries) && (F as any)((e as any).callId) : !1;
}
function gc(this: any, e: any): any {
  return (l as any)(e) && ((((Object as any).keys as any)(e) as any).length as any) === (3 as any) && (((e as any).accountSlot as any) === (null as any) || (typeof (e as any).accountSlot as any) == ("string" as any) && (((e as any).accountSlot as any).length as any) > (0 as any) && (((e as any).accountSlot as any).length as any) <= (512 as any)) && (Qo as any)((e as any).event);
}
function da(this: any, e: any, n: any): any {
  return !(ee as any)(n) || (n as any) > (jl as any) ? !1 : (n as any) === (0 as any) ? (e as any) === (void 0 as any) : (typeof e as any) == ("string" as any) && ((Kl as any).has as any)(e);
}
function fc(this: any, e: any): any {
  return (l as any)(e) ? (typeof (e as any).surface as any) == ("string" as any) && ((Fl as any).has as any)((e as any).surface) && (typeof (e as any).reason as any) == ("string" as any) && ((Hl as any).has as any)((e as any).reason) && (ee as any)((e as any).removedRows) && (ee as any)((e as any).insertedRows) && (((e as any).removedRows as any) + ((e as any).insertedRows as any) as any) > (0 as any) && (da as any)((e as any).removedKind, (e as any).removedKindCount) && (da as any)((e as any).insertedKind, (e as any).insertedKindCount) && (ee as any)((e as any).rowsBefore) && (ee as any)((e as any).rowsAfter) && (Se as any)((e as any).occurrence) : !1;
}
function _c(this: any, e: any): any {
  return (l as any)(e) ? (typeof (e as any).pane as any) == ("string" as any) && ((Gl as any).has as any)((e as any).pane) && (typeof (e as any).errorClass as any) == ("string" as any) && ((Wl as any).has as any)((e as any).errorClass) && (Se as any)((e as any).occurrence) : !1;
}
function Ec(this: any, e: any): any {
  return (l as any)(e) && (F as any)((e as any).policyName) && (typeof (e as any).reason as any) == ("string" as any) && ((Ml as any).has as any)((e as any).reason) && (F as any)((e as any).errorClass);
}
function Ac(this: any, e: any): any {
  return (l as any)(e) ? (typeof (e as any).outcome as any) == ("string" as any) && ((Jl as any).has as any)((e as any).outcome) && (typeof (e as any).stage as any) == ("string" as any) && ((Zl as any).has as any)((e as any).stage) && (me as any)((e as any).errorClass) && (Se as any)((e as any).generation) && (S as any)((e as any).elapsedMs) : !1;
}
function hc(this: any, e: any): any {
  return (l as any)(e) ? ((((Object as any).keys as any)(e) as any).length as any) === (6 as any) && (typeof (e as any).reason as any) == ("string" as any) && ((Ql as any).has as any)((e as any).reason) && (S as any)((e as any).heldMs) && (ee as any)((e as any).unsettledBodies) && (ee as any)((e as any).unsettledPlaceholders) && (ee as any)((e as any).cloudAgentCards) : !1;
}
function Rc(this: any, e: any): any {
  return (l as any)(e) ? ((((Object as any).keys as any)(e) as any).length as any) === (4 as any) && (typeof (e as any).outcome as any) == ("string" as any) && ((ec as any).has as any)((e as any).outcome) && (S as any)((e as any).durationMs) && (typeof (e as any).seeded as any) == ("boolean" as any) : !1;
}
function Ze(this: any, e: any, n: any): any {
  return (typeof n as any) == ("string" as any) && ((e as any).has as any)(n);
}
function Tc(this: any, e: any): any {
  return (l as any)(e) ? ((((Object as any).keys as any)(e) as any).length as any) === (7 as any) && (Ze as any)(nc, (e as any).surface) && (Ze as any)(tc, (e as any).hostClass) && (Ze as any)(rc, (e as any).heldAtOpen) && (Ze as any)(oc, (e as any).outcome) && (S as any)((e as any).waitMs) && (ee as any)((e as any).urlBytes) : !1;
}
var bc: any = {
    client_resource: {
      kind: !0,
      domain: !0,
      operation: !0,
      state: !0,
      failureCode: !0,
      boundary: !0,
      retryOwner: !0,
      transportKind: !0,
      failedMs: !0
    },
    policy_stopped: {
      kind: !0,
      policyName: !0,
      reason: !0,
      errorClass: !0
    },
    renderer_boundary_caught: {
      kind: !0,
      boundary: !0,
      errorClass: !0,
      occurrence: !0
    },
    send_queued_flush: {
      kind: !0,
      queuedMs: !0,
      queueDepth: !0,
      outcome: !0,
      cause: !0
    },
    client_persistence: {
      kind: !0,
      op: !0,
      outcome: !0,
      slice: !0,
      bytes: !0,
      error: !0
    },
    connector_auth_clicked: {
      kind: !0,
      serverName: !0,
      serverId: !0
    },
    unclaimed_card_key: {
      kind: !0,
      entryKind: !0,
      occurrence: !0
    },
    pane_boundary: {
      kind: !0,
      pane: !0,
      errorClass: !0,
      occurrence: !0
    },
    transcript_paint_rows_changed: {
      kind: !0,
      surface: !0,
      reason: !0,
      removedRows: !0,
      insertedRows: !0,
      removedKind: !0,
      removedKindCount: !0,
      insertedKind: !0,
      insertedKindCount: !0,
      rowsBefore: !0,
      rowsAfter: !0,
      occurrence: !0
    },
    voice_call: {
      kind: !0,
      accountSlot: !0,
      event: !0
    },
    voice_call_connect: {
      kind: !0,
      phase: !0,
      callId: !0,
      realtimeConversationId: !0,
      elapsedMs: !0,
      errorClass: !0,
      closeCode: !0,
      closeClean: !0,
      socketOpen: !0,
      sessionCreated: !0,
      micReady: !0,
      beat: !0
    },
    voice_call_fault: {
      kind: !0,
      fault: !0,
      tool: !0,
      callId: !0,
      realtimeConversationId: !0,
      errorClass: !0,
      failureCode: !0
    },
    voice_call_delivery: {
      kind: !0,
      settlement: !0,
      carries: !0,
      callId: !0
    },
    voice_memo: {
      kind: !0,
      accountSlot: !0,
      event: !0
    },
    client_restore: {
      kind: !0,
      outcome: !0,
      stage: !0,
      errorClass: !0,
      generation: !0,
      elapsedMs: !0
    },
    transcript_first_layout: {
      kind: !0,
      reason: !0,
      heldMs: !0,
      unsettledBodies: !0,
      unsettledPlaceholders: !0,
      cloudAgentCards: !0
    },
    cloud_agent_info_read: {
      kind: !0,
      outcome: !0,
      durationMs: !0,
      seeded: !0
    },
    chip_first_content: {
      kind: !0,
      surface: !0,
      hostClass: !0,
      heldAtOpen: !0,
      outcome: !0,
      waitMs: !0,
      urlBytes: !0
    }
  },
  ai: any = (e: any): any => (bc as any)[(e as any).kind];
function ii(this: any, e: any): any {
  return (l as any)(e) ? ((e as any).kind as any) === ("client_resource" as any) ? (ic as any)(e) : ((e as any).kind as any) === ("policy_stopped" as any) ? (Ec as any)(e) : ((e as any).kind as any) === ("renderer_boundary_caught" as any) ? (sc as any)(e) : ((e as any).kind as any) === ("send_queued_flush" as any) ? (dc as any)(e) : ((e as any).kind as any) === ("client_persistence" as any) ? (cc as any)(e) : ((e as any).kind as any) === ("connector_auth_clicked" as any) ? (lc as any)(e) : ((e as any).kind as any) === ("unclaimed_card_key" as any) ? (uc as any)(e) : ((e as any).kind as any) === ("pane_boundary" as any) ? (_c as any)(e) : ((e as any).kind as any) === ("transcript_paint_rows_changed" as any) ? (fc as any)(e) : ((e as any).kind as any) === ("voice_call" as any) ? (pc as any)(e) : ((e as any).kind as any) === ("voice_call_connect" as any) ? (mc as any)(e) : ((e as any).kind as any) === ("voice_call_fault" as any) ? (Sc as any)(e) : ((e as any).kind as any) === ("voice_call_delivery" as any) ? (yc as any)(e) : ((e as any).kind as any) === ("voice_memo" as any) ? (gc as any)(e) : ((e as any).kind as any) === ("client_restore" as any) ? (Ac as any)(e) : ((e as any).kind as any) === ("transcript_first_layout" as any) ? (hc as any)(e) : ((e as any).kind as any) === ("cloud_agent_info_read" as any) ? (Rc as any)(e) : ((e as any).kind as any) === ("chip_first_content" as any) ? (Tc as any)(e) : !1 : !1;
}
var si: any = {
  agentId: !0
};
function di(this: any, e: any): any {
  return (l as any)(e) ? ((e as any).agentId as any) === (null as any) || (Xe as any)((e as any).agentId) : !1;
}
var BR: any = new (Set as any)(Br);
var VR: any = new (Set as any)(Uo),
  GR: any = new (Set as any)(Bo),
  FR: any = new (Set as any)(Vo),
  HR: any = new (Set as any)(Go),
  KR: any = new (Set as any)(Fo),
  jR: any = new (Set as any)(Ho);
var Qe: string = "/grok-bot/passkey/",
  qR: any = (5 as any) * (6e4 as any);
var Cc: any = /^[A-Za-z0-9._-]+$/;
function li(this: any, e: any): any {
  if (!((e as any).startsWith as any)(Qe)) return !1;
  let n: any = ((((e as any).slice as any)((Qe as any).length) as any).split as any)("/");
  return (((n as any).at as any)(-1) as any) === ("" as any) && ((n as any).pop as any)(), ((n as any).length as any) === (0 as any) || !((n as any).every as any)((o: any): any => ((Cc as any).test as any)(o) && (o as any) !== ("." as any) && (o as any) !== (".." as any)) ? !1 : ((new (URL as any)(e, "https://ceremony.invalid") as any).pathname as any) === (e as any);
}
var kc: any = ["always", "ask", "never"];
function ci(this: any, e: any): any {
  return (typeof e as any) == ("string" as any) && ((kc as any).includes as any)(e);
}
var Ic: any = ["run-command", "send-input", "read-file", "list-directory", "write-file", "read-ai-tool-setup", "read-messages", "send-imessage"];
function Ie(this: any, e: any): any {
  return (typeof e as any) == ("string" as any) && ((Ic as any).includes as any)(e);
}
var Vn: any = ["spend-initiation", "error"],
  iT: any = new (Set as any)(Vn);
var Oc: any = ["tool-call", "user-attachment", "mcp-app", ...Vn],
  fT: any = new (Set as any)(Oc);
function ui(this: any, e: any): any {
  return (typeof e as any) == ("number" as any) && ((Number as any).isFinite as any)(e) && (e as any) >= (0 as any);
}
var Nc: any = ["open-failed", "load-failed", "shadow-compare", "store-first", "server-tail"];
function pi(this: any, e: any): any {
  if ((typeof e as any) != ("object" as any) || (e as any) == (null as any)) return !1;
  let n: any = e;
  return (typeof (n as any).agentId as any) == ("string" as any) && (((n as any).agentId as any).length as any) > (0 as any) && ((Number as any).isInteger as any)((n as any).limit) && ((n as any).limit as any) > (0 as any) && (((n as any).sessionId as any) === (void 0 as any) || (typeof (n as any).sessionId as any) == ("string" as any)) && (((n as any).unreadBoundaryAt as any) === (void 0 as any) || (ui as any)((n as any).unreadBoundaryAt)) && ((Nc as any).includes as any)((n as any).reason);
}
var xc: any = new (Set as any)(["post_connect"]);
function Oe(this: any, e: any): any {
  return (typeof e as any) == ("number" as any) && ((Number as any).isFinite as any)(e) && (e as any) >= (0 as any);
}
var mi: any = {
  phase: !0,
  stallMs: !0,
  keys: !0,
  clicks: !0,
  moves: !0,
  inBytes: !0
};
function Si(this: any, e: any): any {
  return (l as any)(e) ? (typeof (e as any).phase as any) == ("string" as any) && ((xc as any).has as any)((e as any).phase) && (Oe as any)((e as any).stallMs) && (Oe as any)((e as any).keys) && (Oe as any)((e as any).clicks) && (Oe as any)((e as any).moves) && (Oe as any)((e as any).inBytes) : !1;
}
var ye: any = {
    enabled: (y as any)()
  },
  wc: any = (f as any)("JSON value", Ee),
  Dc: any = (f as any)("IANA time zone", (e: any): any => (typeof e as any) == ("string" as any) && (he as any)(e)),
  Lc: any = (f as any)(`relative path under ${Qe}`, (e: any): any => (typeof e as any) == ("string" as any) && (li as any)(e)),
  Mc: any = (f as any)(`${6}-digit enrollment code`, $t),
  en: any = (c as any)((R as any)((s as any)())),
  vc: any = (m as any)({
    connectDomains: en,
    resourceDomains: en,
    frameDomains: en,
    baseUriDomains: en
  }),
  yi: any = (R as any)((m as any)({
    path: u,
    content: (s as any)()
  })),
  Uc: any = (I as any)((m as any)({
    accountUuid: g,
    vaultName: g,
    accountUrl: (c as any)((s as any)()),
    accountEmail: (c as any)((s as any)()),
    connectionId: (c as any)(g)
  }), (m as any)({
    serviceAccountToken: g,
    connectionId: (c as any)(g)
  })),
  gi: any = (c as any)((I as any)((p as any)("box"), (p as any)("temporal"))),
  Bc: any = (te as any)("non-empty audio bytes", (e: any): any => {
    let n: any = null;
    return e instanceof Uint8Array ? n = e : e instanceof ArrayBuffer && (n = new (Uint8Array as any)(e)), (n as any) == (null as any) || ((n as any).length as any) === (0 as any) ? {
      success: !1
    } : {
      success: !0,
      data: n
    };
  }),
  Vc: any = (te as any)("profile photo: PNG, JPEG, or WebP bytes of at most 2 MB", (e: any): any => {
    if (!(l as any)(e)) return {
      success: !1
    };
    let {
      contentType: n,
      bytes: o
    }: any = e;
    return (typeof n as any) != ("string" as any) || !(Rn as any)(n) || !(o instanceof Uint8Array) || ((Yt as any)({
      contentType: n,
      byteLength: (o as any).byteLength
    }) as any) !== (null as any) ? {
      success: !1
    } : {
      success: !0,
      data: {
        contentType: n,
        bytes: o
      }
    };
  }),
  Gc: any = (f as any)(`non-blank text of at most ${Tn} characters`, (e: any): any => (typeof e as any) == ("string" as any) && ((dr as any)(e) as any) === ("ok" as any)),
  fi: any = (f as any)("computer upgrade schedule args (local time, IANA time zone)", Qt),
  Fc: any = (te as any)("feedback report", (e: any): any => {
    let n: any = (ar as any)(e);
    return (n as any) === (null as any) ? {
      success: !1
    } : {
      success: !0,
      data: n
    };
  }),
  Hc: any = (f as any)("caller name: string, null, or absent", (e: any): any => (e as any) == (null as any) || (typeof e as any) == ("string" as any)),
  _i: any = (I as any)((m as any)({
    kind: (p as any)("store"),
    storeId: (s as any)(),
    canvasId: (s as any)()
  }), (m as any)({
    kind: (p as any)("active-user-store"),
    canvasId: (s as any)()
  })),
  Kc: any = (I as any)((p as any)("private"), (p as any)("team-view")),
  Ne: any = (m as any)({
    storeId: (s as any)(),
    documentId: (s as any)()
  }),
  jc: any = (I as any)((p as any)("private"), (p as any)("team-view")),
  Ei: any = (te as any)("canvas id (bare UUID)", (e: any): any => {
    if ((typeof e as any) != ("string" as any)) return {
      success: !1
    };
    let n: any = (hn as any)(e);
    return (n as any).ok ? {
      success: !0,
      data: (n as any).value
    } : {
      success: !1
    };
  }),
  Wc: any = (I as any)((m as any)({
    kind: (p as any)("canvas"),
    storeId: g,
    canvasId: Ei
  }), (m as any)({
    kind: (p as any)("active-user-store-canvas"),
    canvasId: Ei
  }), (m as any)({
    kind: (p as any)("document"),
    storeId: g,
    documentId: (f as any)("document id", (e: any): any => (typeof e as any) == ("string" as any) && (Zt as any)(e))
  })),
  Ai: any = (I as any)((m as any)({
    kind: (p as any)("backend")
  }), (m as any)({
    kind: (p as any)("package"),
    loop: (I as any)((p as any)("box"), (p as any)("temporal")),
    hasStaySilent: (y as any)(),
    hasOverheard: (y as any)()
  })),
  hi: any = (_e as any)("main", {
    methods: {
      openExternal: (((r as any)() as any).args as any)({
        url: (s as any)()
      }),
      getCanvasShare: (((r as any)() as any).args as any)({
        locator: _i
      }),
      setCanvasVisibility: (((r as any)() as any).args as any)({
        locator: _i,
        visibility: Kc
      }),
      getDocument: (((r as any)() as any).args as any)({
        locator: Ne,
        groupChatId: (c as any)(g)
      }),
      getDocumentEditRight: (((r as any)() as any).args as any)({
        locator: Ne
      }),
      saveDocument: (((r as any)() as any).args as any)({
        locator: Ne,
        source: (s as any)()
      }),
      resolveLibraryPages: (((r as any)() as any).args as any)({
        refs: (R as any)(Wc),
        includeDocuments: (y as any)()
      }),
      listLibraryDocs: (((r as any)() as any).args as any)({
        agentId: g
      }),
      setDocumentVisibility: (((r as any)() as any).args as any)({
        locator: Ne,
        visibility: jc
      }),
      getDocumentAssets: (((r as any)() as any).args as any)({
        locator: Ne,
        names: (R as any)((s as any)()),
        groupChatId: (c as any)(g)
      }),
      submitFeedback: (((r as any)() as any).args as any)(Fc),
      getWindowState: ((r as any)() as any).noArgs,
      minimizeWindow: ((r as any)() as any).noArgs,
      focusWindow: ((r as any)() as any).noArgs,
      toggleMaximizeWindow: ((r as any)() as any).noArgs,
      closeWindow: ((r as any)() as any).noArgs,
      resizeWindowWidth: (((r as any)() as any).args as any)({
        deltaWidth: (P as any)()
      }),
      setTitleBarOverlayTone: (((r as any)() as any).args as any)({
        isOverlayTone: (y as any)()
      }),
      setViewingAgent: (((r as any)() as any).args as any)({
        agentId: (W as any)((s as any)())
      }),
      setComposingAgent: (((r as any)() as any).args as any)({
        agentId: (s as any)(),
        composing: (y as any)()
      }),
      setComputerViewOpen: (((r as any)() as any).args as any)({
        isOpen: (y as any)()
      }),
      getThemeState: ((r as any)() as any).noArgs,
      setThemePreference: (((r as any)() as any).args as any)({
        preference: (f as any)("theme preference", nr)
      }),
      getBotColorInChatEnabled: ((r as any)() as any).noArgs,
      setBotColorInChatEnabled: (((r as any)() as any).args as any)(ye),
      getHardwareAcceleration: ((r as any)() as any).noArgs,
      setHardwareAccelerationEnabled: (((r as any)() as any).args as any)(ye),
      getSpellCheckEnabled: ((r as any)() as any).noArgs,
      setSpellCheckEnabled: (((r as any)() as any).args as any)(ye),
      getDesktopNotificationPreferences: ((r as any)() as any).noArgs,
      setDesktopNotificationPreferences: (((r as any)() as any).args as any)({
        preferences: (f as any)("notification-preferences", tr)
      }),
      relaunchDesktop: ((r as any)() as any).noArgs,
      getLanguageState: ((r as any)() as any).noArgs,
      setLanguagePreference: (((r as any)() as any).args as any)({
        preference: (f as any)("language preference", ir)
      }),
      getEgressTunnelEnabled: ((r as any)() as any).noArgs,
      setEgressTunnelEnabled: (((r as any)() as any).args as any)(ye),
      getEgressTunnelStatus: ((r as any)() as any).noArgs,
      claimEgressTunnel: ((r as any)() as any).noArgs,
      getWebauthnProxyEnabled: ((r as any)() as any).noArgs,
      setWebauthnProxyEnabled: (((r as any)() as any).args as any)(ye),
      runNetworkDiagnostics: ((r as any)() as any).noArgs,
      getUpdateStatus: ((r as any)() as any).noArgs,
      checkForUpdates: ((r as any)() as any).noArgs,
      setUpdateTrack: (((r as any)() as any).args as any)({
        track: (W as any)((f as any)("update track", Xo))
      }),
      quitAndInstallUpdate: (((r as any)() as any).args as any)({
        expectedVersion: (s as any)()
      }),
      setAutoUpdateWhenIdle: (((r as any)() as any).args as any)(ye),
      getBoxMigrationStatus: ((r as any)() as any).noArgs,
      getBoxHostPhase: ((r as any)() as any).noArgs,
      markDeepLinksReady: ((r as any)() as any).noArgs,
      getOnboardingSeen: ((r as any)() as any).noArgs,
      setOnboardingSeen: (((r as any)() as any).args as any)({
        seen: (y as any)()
      }),
      getTimeZone: ((r as any)() as any).noArgs,
      setTimeZoneOverride: (((r as any)() as any).args as any)({
        timeZone: (W as any)(Dc)
      }),
      getAutoReviewInstructions: ((r as any)() as any).noArgs,
      setAutoReviewInstructions: (((r as any)() as any).args as any)({
        instructions: (m as any)({
          isEnabled: (y as any)(),
          allowInstructions: (R as any)((s as any)()),
          blockInstructions: (R as any)((s as any)())
        })
      }),
      getLocalToolPermission: ((r as any)() as any).noArgs,
      getMessagesAppIcon: ((r as any)() as any).noArgs,
      getTeamMemberPolicy: ((r as any)() as any).noArgs,
      setLocalToolPermission: (((r as any)() as any).args as any)({
        permission: (f as any)("local tool permission", ci),
        machineId: (c as any)(u)
      }),
      recordLocalToolApproval: (((r as any)() as any).args as any)({
        approvalId: g,
        action: (f as any)("local tool action", Ie),
        target: (s as any)(),
        machineId: (c as any)((s as any)())
      }),
      clearLocalToolApprovals: ((r as any)() as any).noArgs,
      recordLocalToolStandingGrant: (((r as any)() as any).args as any)({
        action: (f as any)("local tool action", Ie),
        recipient: g,
        machineId: (c as any)((s as any)())
      }),
      getLocalToolActionGrant: (((r as any)() as any).args as any)({
        action: (f as any)("local tool action", Ie)
      }),
      setLocalToolActionGrant: (((r as any)() as any).args as any)({
        action: (f as any)("local tool action", Ie),
        granted: (y as any)()
      }),
      pickAvatarSource: ((r as any)() as any).noArgs,
      pickAvatarFile: ((r as any)() as any).noArgs,
      generateAgentAvatarImage: (((r as any)() as any).args as any)({
        description: (s as any)()
      }),
      resolveAttachmentMedia: (((r as any)() as any).args as any)({
        source: (s as any)(),
        inline: (c as any)((y as any)()),
        rendition: (c as any)((f as any)("image rendition", sr)),
        inRoom: (c as any)((y as any)()),
        preview: (c as any)((De as any)())
      }),
      readAttachmentText: (((r as any)() as any).args as any)({
        path: (s as any)(),
        agentId: (c as any)((s as any)())
      }),
      readAttachmentBytes: (((r as any)() as any).args as any)({
        path: (s as any)(),
        maxBytes: (c as any)((P as any)()),
        agentId: (c as any)((s as any)())
      }),
      stageAttachmentBytes: (((r as any)() as any).args as any)({
        filename: (s as any)(),
        bytes: (De as any)()
      }),
      stageAttachmentPath: (((r as any)() as any).args as any)({
        filename: (s as any)(),
        sourcePath: (s as any)()
      }),
      downloadAttachment: (((r as any)() as any).args as any)({
        path: (s as any)(),
        suggestedName: (c as any)((s as any)())
      }),
      commitStagedAttachments: (((r as any)() as any).args as any)({
        agentId: g,
        paths: (R as any)((s as any)()),
        filenames: (R as any)((s as any)())
      }),
      discardStagedAttachment: (((r as any)() as any).args as any)({
        path: (s as any)()
      }),
      precaptionStagedAttachment: (((r as any)() as any).args as any)({
        path: (s as any)(),
        agentId: (s as any)(),
        draftText: (s as any)(),
        priorUserMessages: (R as any)((s as any)())
      }),
      forceRecreateComputer: ((r as any)() as any).noArgs,
      updateComputer: (((r as any)() as any).args as any)({
        id: (s as any)(),
        requestId: g,
        acknowledgeTerminalUpgradeSchedule: (c as any)((y as any)())
      }),
      getComputerUpgradeSchedule: ((r as any)() as any).noArgs,
      scheduleComputerUpgrade: (((r as any)() as any).args as any)(fi),
      rescheduleComputerUpgrade: (((r as any)() as any).args as any)(fi),
      cancelComputerUpgrade: (((r as any)() as any).args as any)((f as any)("computer upgrade cancellation args", er)),
      forceReconnectGateway: ((r as any)() as any).noArgs,
      getExperimentsSnapshot: ((r as any)() as any).noArgs,
      exposeFeatureGate: (((r as any)() as any).args as any)({
        name: (s as any)()
      }),
      peekUsageWarningAssignment: ((r as any)() as any).noArgs,
      exposeUsageWarningExperiment: (((r as any)() as any).args as any)({
        percentUsed: (P as any)()
      }),
      logComposerTriggerExperimentExposure: (((r as any)() as any).args as any)({
        trigger: (p as any)("at")
      }),
      logGroupChatDiscouragementExperimentExposure: ((r as any)() as any).noArgs,
      logOnboardingJobRoleExperimentExposure: ((r as any)() as any).noArgs,
      logOnboardingRoleUseCaseBotsExperimentExposure: ((r as any)() as any).noArgs,
      applyFeatureFlagOverride: (((r as any)() as any).args as any)({
        command: (I as any)((m as any)({
          kind: (p as any)("set"),
          name: (s as any)(),
          value: (y as any)()
        }), (m as any)({
          kind: (p as any)("clear"),
          name: (s as any)()
        }), (m as any)({
          kind: (p as any)("clear-all")
        }), (m as any)({
          kind: (p as any)("set-all-bundled")
        }))
      }),
      refreshFeatureFlags: ((r as any)() as any).noArgs,
      applyExperimentOverride: (((r as any)() as any).args as any)({
        command: (I as any)((m as any)({
          kind: (p as any)("set"),
          experiment: (s as any)(),
          param: (s as any)(),
          value: wc
        }), (m as any)({
          kind: (p as any)("clear"),
          experiment: (s as any)(),
          param: (s as any)()
        }), (m as any)({
          kind: (p as any)("clear-experiment"),
          experiment: (s as any)()
        }), (m as any)({
          kind: (p as any)("clear-all")
        }))
      }),
      startRpcTraceWindow: ((r as any)() as any).noArgs,
      readTranscriptStoreTail: (((r as any)() as any).args as any)((f as any)("transcript store read args (agent id, positive limit, reason)", pi)),
      getPublicBotTemplate: (((r as any)() as any).args as any)({
        shareId: (f as any)("share id", (e: any): any => (typeof e as any) == ("string" as any) && ((Jt as any).test as any)(e))
      }),
      listPublicBotMarketplace: ((r as any)() as any).noArgs,
      getGrokBotSlackInstallState: (((r as any)() as any).args as any)({
        agentId: u
      }),
      startGrokBotSlackConnect: (((r as any)() as any).args as any)({
        agentId: u
      }),
      installGrokBotSlackApp: (((r as any)() as any).args as any)({
        agentId: u,
        slackTeamId: (W as any)(u),
        replaceExistingApp: (c as any)((y as any)())
      }),
      reinstallGrokBotSlackApp: (((r as any)() as any).args as any)({
        agentId: u,
        automatic: (y as any)()
      }),
      uninstallGrokBotSlackApp: (((r as any)() as any).args as any)({
        agentId: u,
        forgetIfUnreachable: (c as any)((y as any)())
      }),
      listGrokBotTeamAgents: ((r as any)() as any).noArgs,
      listGrokBotAgentSessions: (((r as any)() as any).args as any)({
        agentId: u
      }),
      setGrokBotAgentVisibility: (((r as any)() as any).args as any)({
        agentId: u,
        visibility: (En as any)("Grok Bot agent visibility", ["owner", "team"])
      }),
      cloneGrokBotAgentToTeam: (((r as any)() as any).args as any)({
        agentId: u,
        offerEntryId: u
      }),
      setGrokBotAgentVoice: (((r as any)() as any).args as any)({
        agentId: u,
        voiceId: (c as any)((W as any)((s as any)())),
        voiceSpeed: (c as any)((P as any)()),
        voiceLanguage: (c as any)((s as any)())
      }),
      updateGrokBotAgent: (((r as any)() as any).args as any)({
        serverId: u,
        name: (c as any)((s as any)()),
        description: (c as any)((s as any)()),
        title: (c as any)((s as any)()),
        avatarShape: (c as any)((s as any)()),
        avatarColor: (c as any)((s as any)()),
        avatarPngBase64: (c as any)((W as any)((s as any)()))
      }),
      publishGrokBotAgent: (((r as any)() as any).args as any)({
        agentId: u
      }),
      unpublishGrokBotAgent: (((r as any)() as any).args as any)({
        agentId: u
      }),
      setGrokBotAgentSidebarHidden: (((r as any)() as any).args as any)({
        agentId: u,
        isHidden: (y as any)()
      }),
      addGrokBotRoomPeople: (((r as any)() as any).args as any)({
        agentId: u,
        userIds: (R as any)((P as any)())
      }),
      removeGrokBotRoomPeople: (((r as any)() as any).args as any)({
        agentId: u,
        userIds: (R as any)((P as any)())
      }),
      listGrokBotAgentManagers: (((r as any)() as any).args as any)({
        serverId: u
      }),
      addGrokBotAgentManager: (((r as any)() as any).args as any)({
        serverId: u,
        userId: (P as any)()
      }),
      removeGrokBotAgentManager: (((r as any)() as any).args as any)({
        serverId: u,
        userId: (P as any)()
      }),
      getGrokBotAgentPlugins: (((r as any)() as any).args as any)({
        agentId: u
      }),
      setGrokBotAgentPlugins: (((r as any)() as any).args as any)({
        agentId: u,
        plugins: (R as any)((I as any)((m as any)({
          kind: (p as any)("plugin"),
          pluginId: u
        }), (m as any)({
          kind: (p as any)("config-update"),
          pluginId: u,
          mcpConfigJson: u
        }), (m as any)({
          kind: (p as any)("inline"),
          name: u,
          displayName: (s as any)(),
          description: (s as any)(),
          mcpConfigJson: u
        })))
      }),
      setGrokBotAgentPluginVariables: (((r as any)() as any).args as any)({
        agentId: u,
        pluginId: u,
        variables: (se as any)((I as any)((s as any)(), (P as any)(), (y as any)()))
      }),
      addGrokBotAgentSkill: (((r as any)() as any).args as any)({
        agentId: u,
        name: (c as any)((s as any)()),
        description: (c as any)((s as any)()),
        content: u,
        files: (c as any)(yi)
      }),
      updateGrokBotAgentSkill: (((r as any)() as any).args as any)({
        agentId: u,
        name: u,
        description: (c as any)((s as any)()),
        content: u,
        files: (c as any)(yi)
      }),
      removeGrokBotAgentSkill: (((r as any)() as any).args as any)({
        agentId: u,
        name: u
      }),
      listGrokBotUserBotMemories: (((r as any)() as any).args as any)({
        agentId: u
      }),
      promoteGrokBotMemoriesToTeam: (((r as any)() as any).args as any)({
        agentId: u,
        factIds: (R as any)(u)
      }),
      listGrokBotEmailInboxes: ((r as any)() as any).noArgs,
      createGrokBotEmailInbox: (((r as any)() as any).args as any)({
        username: (s as any)(),
        displayName: (s as any)()
      }),
      listGrokBotSecrets: (((r as any)() as any).args as any)({
        serverId: u
      }),
      putGrokBotSecret: (((r as any)() as any).args as any)({
        serverId: u,
        name: u,
        description: (s as any)(),
        value: g
      }),
      deleteGrokBotSecret: (((r as any)() as any).args as any)({
        serverId: u,
        name: u
      }),
      carryUserSecretsToGrokBot: (((r as any)() as any).args as any)({
        serverId: u,
        names: (R as any)(u)
      }),
      getHostPinnedAgents: ((r as any)() as any).noArgs,
      setHostPinnedAgents: (((r as any)() as any).args as any)({
        pinnedAgentIds: (R as any)((s as any)())
      }),
      getHostSidebarSections: ((r as any)() as any).noArgs,
      setHostSidebarSections: (((r as any)() as any).args as any)({
        sections: (R as any)((m as any)({
          id: (s as any)(),
          name: (s as any)(),
          agentIds: (R as any)((s as any)())
        }))
      }),
      transcribeAudio: (((r as any)() as any).args as any)({
        audio: Bc,
        mimeType: (s as any)(),
        language: (c as any)((s as any)())
      }),
      synthesizeSpeech: (((r as any)() as any).args as any)({
        text: Gc,
        voiceId: (c as any)((s as any)())
      }),
      getCursorAuthStatus: ((r as any)() as any).noArgs,
      loginCursor: ((r as any)() as any).noArgs,
      getCursorLoginFlight: ((r as any)() as any).noArgs,
      cancelCursorLoginFlight: ((r as any)() as any).noArgs,
      logoutCursor: ((r as any)() as any).noArgs,
      listCursorAccounts: ((r as any)() as any).noArgs,
      addCursorAccount: ((r as any)() as any).noArgs,
      switchCursorAccount: (((r as any)() as any).args as any)({
        accountId: (s as any)()
      }),
      removeCursorAccount: (((r as any)() as any).args as any)({
        accountId: (s as any)()
      }),
      updateCursorAccountName: (((r as any)() as any).args as any)({
        name: (s as any)()
      }),
      getCursorAvatar: ((r as any)() as any).noArgs,
      updateCursorProfilePhoto: (((r as any)() as any).args as any)({
        photo: Vc
      }),
      getSandMachines: ((r as any)() as any).noArgs,
      updateSandMachineLabel: (((r as any)() as any).args as any)({
        machineId: (s as any)(),
        label: (s as any)()
      }),
      startPasskeyEnrollment: ((r as any)() as any).noArgs,
      verifyPasskeyEnrollmentCode: (((r as any)() as any).args as any)({
        code: Mc
      }),
      beginPasskeyRegistration: (((r as any)() as any).args as any)({
        enrollmentTicket: u
      }),
      listPasskeys: ((r as any)() as any).noArgs,
      revokePasskey: (((r as any)() as any).args as any)({
        credentialId: u
      }),
      getCursorSelectedTeam: ((r as any)() as any).noArgs,
      listCursorTeamMemberships: ((r as any)() as any).noArgs,
      listCursorTeamMembers: (((r as any)() as any).args as any)({
        teamId: (P as any)()
      }),
      ackCursorTeamFallback: (((r as any)() as any).args as any)({
        notice: (m as any)({
          fromTeamId: (P as any)(),
          fromTeamName: (W as any)((s as any)()),
          toTeam: (W as any)((m as any)({
            id: (P as any)(),
            name: (s as any)()
          }))
        })
      }),
      getCursorWeeklyUsage: ((r as any)() as any).noArgs,
      getCursorUsageSummary: ((r as any)() as any).noArgs,
      getCursorEnterpriseUsage: (((r as any)() as any).args as any)({
        teamId: (P as any)()
      }),
      getCursorUsageBreakdown: (((r as any)() as any).args as any)({
        includeCredits: (y as any)()
      }),
      getCursorPrReviewPreferences: ((r as any)() as any).noArgs,
      getCursorOriginPrStatus: (((r as any)() as any).args as any)({
        prUrl: (s as any)()
      }),
      getCursorPrivacyModeEnabled: ((r as any)() as any).noArgs,
      getSandAccess: ((r as any)() as any).noArgs,
      getSandAccessFresh: ((r as any)() as any).noArgs,
      getGrokBotTermsRecord: ((r as any)() as any).noArgs,
      markGrokBotTermsSeen: ((r as any)() as any).noArgs,
      clearGrokBotConnectorPreferences: ((r as any)() as any).noArgs,
      mintVoiceCallCredential: ((r as any)() as any).noArgs,
      mintXaiCommerceBearer: ((r as any)() as any).noArgs,
      voiceCallHarnessSession: (((r as any)() as any).args as any)({
        dial: Ai,
        args: (m as any)({
          agentId: (s as any)(),
          agentName: (s as any)(),
          userName: (c as any)(Hc),
          description: (c as any)((s as any)()),
          spokenLanguage: (c as any)((s as any)())
        })
      }),
      voiceCallHarnessTool: (((r as any)() as any).args as any)({
        dial: Ai,
        invocation: (m as any)({
          agentId: (s as any)(),
          callId: (s as any)(),
          name: (s as any)(),
          input: (ln as any)(),
          line: (m as any)({
            theyJustTalked: (y as any)(),
            newsOwed: (y as any)(),
            receiptOwed: (y as any)(),
            alreadySpokeThisTurn: (y as any)()
          })
        })
      }),
      invokeCursorDashboardAction: (((r as any)() as any).args as any)({
        action: (s as any)(),
        args: (se as any)((s as any)())
      }),
      cancelCursorSandTrial: ((r as any)() as any).noArgs,
      prepareCursorScmConnect: (((r as any)() as any).args as any)({
        provider: (En as any)("SCM connect provider", zt),
        forceOauth: (c as any)((y as any)())
      }),
      completeCursorScmConnect: (((r as any)() as any).args as any)({
        state: u,
        code: (c as any)((s as any)()),
        installationId: (c as any)((s as any)()),
        setupAction: (c as any)((s as any)()),
        error: (c as any)((s as any)())
      }),
      getCursorGithubRepoAccess: (((r as any)() as any).args as any)({
        repoSlug: u
      }),
      runPasskeyCeremony: (((r as any)() as any).args as any)({
        ceremonyId: u,
        path: Lc,
        token: u,
        challengeId: (c as any)(u)
      }),
      cancelPasskeyCeremony: (((r as any)() as any).args as any)({
        ceremonyId: u
      }),
      setCursorSpendLimit: (((r as any)() as any).args as any)((f as any)("spend limit update", Xt)),
      reportAgentLoad: (((r as any)() as any).args as any)((A as any)(ca, la)),
      reportAccessBlocked: (((r as any)() as any).args as any)((A as any)(pa, ua)),
      reportAgentsUnreachable: (((r as any)() as any).args as any)((A as any)(Sa, ma)),
      reportRecoveryAction: (((r as any)() as any).args as any)((A as any)(ga, ya)),
      reportRebuildLifecycle: (((r as any)() as any).args as any)((A as any)(_a, fa)),
      reportReconciliation: (((r as any)() as any).args as any)((A as any)(Aa, Ea)),
      reportBoxVisibility: (((r as any)() as any).args as any)((A as any)(Ra, ha)),
      reportSendLatency: (((r as any)() as any).args as any)((A as any)(ba, Ta)),
      reportSendAck: (((r as any)() as any).args as any)((A as any)(ka, Ca)),
      reportTurnClientStart: (((r as any)() as any).args as any)((A as any)(Oa, Ia)),
      reportTurnClientOutcome: (((r as any)() as any).args as any)((A as any)(xa, Na)),
      reportReactionAck: (((r as any)() as any).args as any)((A as any)(wa, Pa)),
      reportRenderTtfr: (((r as any)() as any).args as any)((A as any)(Ba, Ua)),
      reportRenderStream: (((r as any)() as any).args as any)((A as any)(Ga, Va)),
      reportVncSession: (((r as any)() as any).args as any)((A as any)(La, Da)),
      reportVncLiveness: (((r as any)() as any).args as any)((A as any)(Si, mi)),
      reportOpenComputer: (((r as any)() as any).args as any)((A as any)(va, Ma)),
      reportUpdatePrompt: (((r as any)() as any).args as any)((A as any)(Ha, Fa)),
      reportUsageWarning: (((r as any)() as any).args as any)((A as any)(ja, Ka)),
      reportSidebarAction: (((r as any)() as any).args as any)((A as any)(za, Xa)),
      reportArtifactEngagement: (((r as any)() as any).args as any)((A as any)(qa, $a)),
      reportCloudAgentArtifact: (((r as any)() as any).args as any)((A as any)(Ya, Wa)),
      reportSigninGate: (((r as any)() as any).args as any)((A as any)(Qa, Za)),
      reportOnboardingStep: (((r as any)() as any).args as any)((A as any)(ni, ei)),
      reportOnboardingCompleted: (((r as any)() as any).args as any)((A as any)(ri, ti)),
      reportClientFailure: (((r as any)() as any).args as any)((A as any)(ii, ai)),
      reportHeapMetrics: (((r as any)() as any).args as any)(Vt),
      noteSentryConversation: (((r as any)() as any).args as any)((A as any)(di, si)),
      openCloudAgent: (((r as any)() as any).args as any)({
        bcId: Ue,
        target: (c as any)((I as any)((p as any)("default"), (p as any)("web")))
      }),
      getLinkMetadata: (((r as any)() as any).args as any)({
        url: (s as any)(),
        image: (c as any)((I as any)((p as any)("card"), (p as any)("source")))
      }),
      stageMcpAppDocument: (((r as any)() as any).args as any)({
        html: (s as any)(),
        csp: (c as any)(vc)
      }),
      listSecrets: ((r as any)() as any).noArgs,
      readClientPersistence: (((r as any)() as any).args as any)({
        key: (s as any)()
      }),
      readManyClientPersistence: (((r as any)() as any).args as any)({
        include: (R as any)((s as any)()),
        exclude: (R as any)((s as any)())
      }),
      writeClientPersistence: (((r as any)() as any).args as any)({
        key: (s as any)(),
        value: (s as any)()
      }),
      removeClientPersistence: (((r as any)() as any).args as any)({
        key: (s as any)()
      }),
      listClientPersistenceKeys: (((r as any)() as any).args as any)({
        prefix: (s as any)()
      }),
      hasMigratedClientPersistence: ((r as any)() as any).noArgs,
      migrateClientPersistence: (((r as any)() as any).args as any)({
        entries: (R as any)((m as any)({
          key: (s as any)(),
          value: (s as any)()
        }))
      }),
      getCredentialsState: ((r as any)() as any).noArgs,
      syncCredentialProvider: ((r as any)() as any).noArgs,
      disconnectCredentialProvider: (((r as any)() as any).args as any)({
        connectionId: g
      }),
      disconnectScmConnection: (((r as any)() as any).args as any)({
        platform: g
      }),
      isSlackLinked: ((r as any)() as any).noArgs,
      getSlackLinkUrl: ((r as any)() as any).noArgs,
      approveCredentialRequest: (((r as any)() as any).args as any)({
        entryId: g,
        agentId: g,
        credentialId: g,
        connectionId: g,
        catalogRevision: g,
        targetSite: g,
        harness: gi
      }),
      denyCredentialRequest: (((r as any)() as any).args as any)({
        entryId: g,
        agentId: g,
        harness: gi
      }),
      detectCredentialMint: ((r as any)() as any).noArgs,
      startCredentialMint: (((r as any)() as any).args as any)(Uc),
      connectCredentialProviderOAuth: (((r as any)() as any).args as any)({
        connectionId: (c as any)(g)
      }),
      cancelCredentialProviderOAuth: ((r as any)() as any).noArgs,
      getMcpState: ((r as any)() as any).noArgs,
      getGrokBotAgentMcpServers: (((r as any)() as any).args as any)({
        agentId: (s as any)()
      }),
      getEffectivePlugins: ((r as any)() as any).noArgs,
      getMcpCatalog: ((r as any)() as any).noArgs,
      refreshMcpCatalog: ((r as any)() as any).noArgs,
      getMcpTeamPopularity: ((r as any)() as any).noArgs,
      getMcpPluginLogo: (((r as any)() as any).args as any)({
        url: (s as any)()
      }),
      installEntry: (((r as any)() as any).args as any)({
        entryId: (s as any)(),
        values: (c as any)((se as any)((I as any)((s as any)(), (P as any)(), (y as any)()))),
        hasTeamConfiguredVariables: (c as any)((y as any)())
      }),
      updatePluginInstall: (((r as any)() as any).args as any)({
        pluginId: (s as any)(),
        values: (se as any)((I as any)((s as any)(), (P as any)(), (y as any)()))
      }),
      removeMcpServer: (((r as any)() as any).args as any)({
        serverId: (s as any)()
      }),
      uninstallPlugin: (((r as any)() as any).args as any)({
        pluginId: (s as any)()
      }),
      reconcileUnpublishedPlugin: (((r as any)() as any).args as any)({
        pluginId: (s as any)()
      }),
      authenticateMcpServer: (((r as any)() as any).args as any)({
        serverId: (s as any)(),
        accountKey: (c as any)((s as any)()),
        trigger: (c as any)((p as any)("connector_card")),
        forceReauth: (c as any)((y as any)()),
        grokBotAgentId: (c as any)((s as any)())
      }),
      renameMcpAccount: (((r as any)() as any).args as any)({
        serverId: (s as any)(),
        accountKey: (s as any)(),
        newAccountKey: (s as any)()
      }),
      removeMcpAccount: (((r as any)() as any).args as any)({
        serverId: (s as any)(),
        accountKey: (s as any)()
      }),
      setMcpCustomInstructions: (((r as any)() as any).args as any)({
        serverId: (s as any)(),
        instructions: (s as any)()
      }),
      listMcpServerTools: (((r as any)() as any).args as any)({
        serverId: (s as any)(),
        demand: (c as any)((p as any)("background"))
      }),
      toggleMcpToolDisabled: (((r as any)() as any).args as any)({
        serverId: (s as any)(),
        toolName: (s as any)()
      }),
      getFinanceOverview: ((r as any)() as any).noArgs,
      deleteFinanceConnection: (((r as any)() as any).args as any)({
        connectionId: (s as any)()
      }),
      startFinanceLink: (((r as any)() as any).args as any)({
        repairLinkedBank: (c as any)((y as any)())
      }),
      attachProdBoxStatus: ((r as any)() as any).noArgs,
      setAttachProdBoxEnabled: (((r as any)() as any).args as any)({
        enabled: (y as any)(),
        isRestartMainApp: (c as any)((y as any)())
      }),
      checkMessagesPermissions: (((r as any)() as any).args as any)({
        prompt: (c as any)((I as any)((p as any)("automation"), (p as any)("fullDiskAccess"), (p as any)("contacts")))
      }),
      getCurrentMachineMessagesEnabled: ((r as any)() as any).noArgs,
      updateCurrentMachineMessagesEnabled: (((r as any)() as any).args as any)({
        messagesEnabled: (y as any)()
      }),
      listMessagesAllowedRecipients: ((r as any)() as any).noArgs,
      revokeMessagesAllowedRecipient: (((r as any)() as any).args as any)({
        recipient: g
      }),
      listChromeCookieAllowItems: ((r as any)() as any).noArgs,
      importChromeCookies: (((r as any)() as any).args as any)({
        cookies: (R as any)((m as any)({
          profileId: g,
          domain: g,
          name: g,
          path: g
        }))
      }),
      listCookieOriginGrants: ((r as any)() as any).noArgs,
      putCookieOriginGrants: (((r as any)() as any).args as any)({
        grants: (R as any)((m as any)({
          profileId: u,
          origin: u
        }))
      }),
      listMeetings: ((r as any)() as any).noArgs,
      meetingCensus: ((r as any)() as any).noArgs,
      leaveMeeting: (((r as any)() as any).args as any)({
        meetingId: g,
        host: (I as any)((p as any)("desktop"), (p as any)("server"))
      })
    },
    events: (ae as any)(),
    failureCodes: (ae as any)()
  });
function Ri(this: any, e: any): any {
  let n: any = null;
  return {
    bridge: {
      claim(o: any): any {
        return (n as any) != (null as any) ? null : (n = o, {
          request: (): any => {
            (n as any) === (o as any) && ((e as any).invokeRequest as any)();
          },
          release: (): any => {
            (n as any) === (o as any) && (n = null);
          }
        });
      }
    },
    deliver(o: any): any {
      n?.onPort(o);
    }
  };
}
function Ti(this: any, e: any): any {
  return {
    postMessage: (n: any): any => {
      ((e as any).postMessage as any)(n);
    },
    close: (): any => {
      ((e as any).close as any)();
    },
    start: (): any => {
      ((e as any).start as any)();
    },
    addEventListener: (n: any, o: any): any => {
      if ((n as any) === ("message" as any)) {
        ((e as any).addEventListener as any)("message", (i: any): any => {
          (o as any)({
            data: (i as any).data
          });
        });
        return;
      }
      ((e as any).addEventListener as any)("close", (): any => {
        (o as any)({});
      });
    }
  };
}
function bi(this: any, e: any, n: any): any {
  return (e as any) === ("served" as any) ? ((Promise as any).resolve as any)() : new (Promise as any)((o: any): any => {
    (n as any)(o);
  });
}
function Ci(this: any, e: any, n: any): any {
  return {
    invoke: (o: any, i: any): any => ((e as any).then as any)((): any => ((n as any).invoke as any)(o, i)),
    on: (o: any, i: any): any => ((n as any).on as any)(o, i)
  };
}
function ki(this: any, e: any): any {
  return e instanceof Error ? (e as any).message : void 0;
}
function Ii(this: any, ...e: any): any {
  ((console as any).warn as any)("[sand-webview-preload]", ...e);
}
var Oi: string = "sand:render-trace-port";
function Ni(this: any, e: any, n: any = (): any => new (MessageChannel as any)()): any {
  let o: any = null;
  return {
    postMessage(i: any): any {
      if ((o as any) === (null as any)) {
        let d: any = (n as any)();
        ((e as any).postMessage as any)(Oi, null, [(d as any).port2]), o = (d as any).port1;
      }
      ((o as any).postMessage as any)(i);
    }
  };
}
async function xi(this: any, e: any, n: any, o: any): Promise<any> {
  let i: any = ((e as any).diskPathOf as any)(o);
  return (i as any) != (null as any) ? await ((e as any).stagePath as any)({
    filename: n,
    sourcePath: i
  }) : await ((e as any).stageBytes as any)(n, new (Uint8Array as any)(await ((o as any).arrayBuffer as any)()));
}
var X: any = (((D as any).ipcRenderer as any).sendSync as any)("sand:boot-snapshot-sync");
function Gn(this: any, e: any): any {
  return (typeof e as any) == ("boolean" as any) ? e : null;
}
var Yc: any = (X as any).experiments,
  $c: any = (X as any).rosterPhotos ?? null,
  qc: any = (X as any).theme,
  Xc: any = (X as any).language,
  zc: any = ((X as any).isAssistiveTechEnabled as any) === (!0 as any),
  Jc: any = ((X as any).isEgressTunnelEnabled as any) === (!0 as any),
  Zc: any = ((X as any).isWebauthnProxyEnabled as any) === (!0 as any),
  Qc: any = (Gn as any)((X as any).isBotColorInChatEnabled),
  eu: any = (X as any).egressTunnelStatus,
  Di: any = (Ci as any)((bi as any)((X as any).mainEdge, (e: any): any => {
    (((D as any).ipcRenderer as any).once as any)(It, e);
  }), (dn as any)()),
  Li: any = (Ri as any)({
    invokeRequest: (): any => {
      ((Di as any).invoke as any)("sand:coordinator-port-request", void 0);
    }
  }),
  t: any = (Me as any)(hi, Di),
  h: any = (e: any): any => {
    (Ii as any)("telemetry report ack failed", (ki as any)(e));
  },
  nu: any = (): any => ({
    reportTurnClientStart(e: any): any {
      ((((t as any).reportTurnClientStart as any)(e) as any).catch as any)(h);
    },
    reportTurnClientOutcome(e: any): any {
      ((((t as any).reportTurnClientOutcome as any)(e) as any).catch as any)(h);
    }
  }),
  tu: any = (((process as any).env as any).SAND_RESTART_EXIT_CODE as any) != (null as any) && ((((process as any).env as any).SAND_RESTART_EXIT_CODE as any).length as any) > (0 as any),
  ru: string = "api2.cursor.sh";
function ou(this: any): any {
  let e: any = ((process as any).env as any).SAND_BACKEND_URL ?? ((process as any).env as any).CURSOR_API_BASE_URL;
  return (e as any) == (null as any) || ((e as any).length as any) === (0 as any) ? !0 : ((URL as any).canParse as any)(e) && ((new (URL as any)(e) as any).host as any) === (ru as any);
}
var au: any = {
    async getStatus(): Promise<any> {
      return await ((t as any).attachProdBoxStatus as any)();
    },
    async setEnabled(e: any, n: any): Promise<any> {
      return await ((t as any).setAttachProdBoxEnabled as any)({
        enabled: e,
        isRestartMainApp: n?.isRestartMainApp
      });
    }
  },
  Pi: any = (Ct as any)((process as any).platform, {
    async listCookieAllowItems(): Promise<any> {
      return await ((t as any).listChromeCookieAllowItems as any)();
    },
    async import(e: any): Promise<any> {
      return await ((t as any).importChromeCookies as any)(e);
    }
  }),
  wi: any = (kt as any)((process as any).platform, {
    async list(): Promise<any> {
      return await ((t as any).listCookieOriginGrants as any)();
    },
    async put(e: any): Promise<any> {
      return await ((t as any).putCookieOriginGrants as any)(e);
    }
  }),
  iu: any = {
    diskPathOf: (e: any): any => e instanceof File && (((D as any).webUtils as any).getPathForFile as any)(e) || null,
    stagePath: (e: any): any => ((t as any).stageAttachmentPath as any)(e),
    stageBytes: (e: any, n: any): any => ((t as any).stageAttachmentBytes as any)({
      filename: e,
      bytes: n
    })
  },
  su: any = {
    async resolveAttachmentMedia(e: any, n: any, o: any, i: any): Promise<any> {
      return await ((t as any).resolveAttachmentMedia as any)({
        source: e,
        inline: n,
        rendition: o,
        inRoom: i?.inRoom,
        preview: i?.preview
      });
    },
    async readAttachmentText(e: any, n: any): Promise<any> {
      return await ((t as any).readAttachmentText as any)({
        path: e,
        agentId: n
      });
    },
    async readAttachmentBytes(e: any, n: any, o: any): Promise<any> {
      return await ((t as any).readAttachmentBytes as any)({
        path: e,
        maxBytes: n,
        agentId: o
      });
    },
    async downloadAttachment(e: any, n: any): Promise<any> {
      return await ((t as any).downloadAttachment as any)({
        path: e,
        suggestedName: n
      });
    },
    async getLinkMetadata(e: any, n: any): Promise<any> {
      return await ((t as any).getLinkMetadata as any)({
        url: e,
        image: n
      });
    },
    async stageMcpAppDocument(e: any): Promise<any> {
      return await ((t as any).stageMcpAppDocument as any)(e);
    },
    async openExternal(e: any): Promise<any> {
      await ((t as any).openExternal as any)({
        url: e
      });
    },
    async listMeetings(): Promise<any> {
      return await ((t as any).listMeetings as any)();
    },
    async meetingCensus(): Promise<any> {
      return await ((t as any).meetingCensus as any)();
    },
    onMeetingsChanged(e: any): any {
      return ((t as any).subscribe as any)({
        "meetings-changed": e
      });
    },
    async leaveMeeting(e: any): Promise<any> {
      await ((t as any).leaveMeeting as any)(e);
    },
    async getCanvasShare(e: any): Promise<any> {
      return await ((t as any).getCanvasShare as any)({
        locator: e
      });
    },
    async getDocument(e: any): Promise<any> {
      return await ((t as any).getDocument as any)(((e as any).groupChatId as any) === (void 0 as any) ? {
        locator: (e as any).locator
      } : {
        locator: (e as any).locator,
        groupChatId: (e as any).groupChatId
      });
    },
    async getDocumentEditRight(e: any): Promise<any> {
      return await ((t as any).getDocumentEditRight as any)({
        locator: e
      });
    },
    async saveDocument(e: any): Promise<any> {
      return await ((t as any).saveDocument as any)({
        locator: (e as any).locator,
        source: (e as any).source
      });
    },
    async resolveLibraryPages(e: any): Promise<any> {
      return await ((t as any).resolveLibraryPages as any)({
        refs: (e as any).refs,
        includeDocuments: (e as any).includeDocuments
      });
    },
    async listLibraryDocs(e: any): Promise<any> {
      return await ((t as any).listLibraryDocs as any)({
        agentId: (e as any).agentId
      });
    },
    async setDocumentVisibility(e: any, n: any): Promise<any> {
      return await ((t as any).setDocumentVisibility as any)({
        locator: e,
        visibility: n
      });
    },
    async getDocumentAssets(e: any): Promise<any> {
      return await ((t as any).getDocumentAssets as any)(((e as any).groupChatId as any) === (void 0 as any) ? {
        locator: (e as any).locator,
        names: (e as any).names
      } : {
        locator: (e as any).locator,
        names: (e as any).names,
        groupChatId: (e as any).groupChatId
      });
    },
    async setCanvasVisibility(e: any, n: any): Promise<any> {
      return await ((t as any).setCanvasVisibility as any)({
        locator: e,
        visibility: n
      });
    },
    async openCloudAgent(e: any, n: any): Promise<any> {
      await ((t as any).openCloudAgent as any)({
        bcId: e,
        target: n
      });
    },
    async checkMessagesPermissions(e: any): Promise<any> {
      return await ((t as any).checkMessagesPermissions as any)(e);
    },
    async getCurrentMachineMessagesEnabled(): Promise<any> {
      return await ((t as any).getCurrentMachineMessagesEnabled as any)();
    },
    async updateCurrentMachineMessagesEnabled(e: any): Promise<any> {
      return await ((t as any).updateCurrentMachineMessagesEnabled as any)({
        messagesEnabled: e
      });
    },
    async listMessagesAllowedRecipients(): Promise<any> {
      return await ((t as any).listMessagesAllowedRecipients as any)();
    },
    async revokeMessagesAllowedRecipient(e: any): Promise<any> {
      return await ((t as any).revokeMessagesAllowedRecipient as any)({
        recipient: e
      });
    },
    async stageAttachmentFile(e: any, n: any): Promise<any> {
      return await (xi as any)(iu, e, n);
    },
    async commitStagedAttachments(e: any): Promise<any> {
      return await ((t as any).commitStagedAttachments as any)(e);
    },
    async discardStagedAttachment(e: any): Promise<any> {
      await ((t as any).discardStagedAttachment as any)({
        path: e
      });
    },
    async precaptionStagedAttachment(e: any): Promise<any> {
      await ((t as any).precaptionStagedAttachment as any)(e);
    },
    mcp: {
      async list(): Promise<any> {
        return await ((t as any).getMcpState as any)();
      },
      async grokBotAgentServers(e: any): Promise<any> {
        return await ((t as any).getGrokBotAgentMcpServers as any)({
          agentId: e
        });
      },
      async effectivePlugins(): Promise<any> {
        return await ((t as any).getEffectivePlugins as any)();
      },
      async catalog(): Promise<any> {
        return await ((t as any).getMcpCatalog as any)();
      },
      async refreshCatalog(): Promise<any> {
        return await ((t as any).refreshMcpCatalog as any)();
      },
      async teamPopularity(): Promise<any> {
        return await ((t as any).getMcpTeamPopularity as any)();
      },
      async pluginLogo(e: any): Promise<any> {
        return await ((t as any).getMcpPluginLogo as any)({
          url: e
        });
      },
      async install(e: any): Promise<any> {
        return await ((t as any).installEntry as any)(e);
      },
      async updatePluginInstall(e: any): Promise<any> {
        return await ((t as any).updatePluginInstall as any)(e);
      },
      async remove(e: any): Promise<any> {
        return await ((t as any).removeMcpServer as any)({
          serverId: e
        });
      },
      async uninstallPlugin(e: any): Promise<any> {
        return await ((t as any).uninstallPlugin as any)({
          pluginId: e
        });
      },
      async reconcileUnpublishedPlugin(e: any): Promise<any> {
        return await ((t as any).reconcileUnpublishedPlugin as any)({
          pluginId: e
        });
      },
      async authenticate(e: any, n: any, o: any, i: any, d: any): Promise<any> {
        return await ((t as any).authenticateMcpServer as any)({
          serverId: e,
          ...((n as any) != (null as any) ? {
            accountKey: n
          } : {}),
          ...((o as any) != (null as any) ? {
            trigger: o
          } : {}),
          ...((i as any) != (null as any) ? {
            forceReauth: i
          } : {}),
          ...((d as any) != (null as any) ? {
            grokBotAgentId: d
          } : {})
        });
      },
      async renameAccount(e: any): Promise<any> {
        return await ((t as any).renameMcpAccount as any)(e);
      },
      async removeAccount(e: any): Promise<any> {
        return await ((t as any).removeMcpAccount as any)(e);
      },
      async setCustomInstructions(e: any): Promise<any> {
        return await ((t as any).setMcpCustomInstructions as any)(e);
      },
      async listServerTools(e: any, n: any): Promise<any> {
        return await ((t as any).listMcpServerTools as any)((n as any) === (void 0 as any) ? {
          serverId: e
        } : {
          serverId: e,
          demand: n
        });
      },
      async toggleToolDisabled(e: any): Promise<any> {
        return await ((t as any).toggleMcpToolDisabled as any)(e);
      },
      async financeOverview(): Promise<any> {
        return await ((t as any).getFinanceOverview as any)();
      },
      async deleteFinanceConnection(e: any): Promise<any> {
        await ((t as any).deleteFinanceConnection as any)({
          connectionId: e
        });
      },
      async startFinanceLink(e: any = {}): Promise<any> {
        return await ((t as any).startFinanceLink as any)(e);
      },
      onAuthCompleted(e: any): any {
        return ((t as any).subscribe as any)({
          "mcp-auth-completed": e
        });
      },
      onServersUpdated(e: any): any {
        return ((t as any).subscribe as any)({
          "mcp-servers-updated": e
        });
      }
    },
    async forceGatewayReconnect(): Promise<any> {
      await ((t as any).forceReconnectGateway as any)();
    },
    async runNetworkDiagnostics(): Promise<any> {
      return await ((t as any).runNetworkDiagnostics as any)();
    },
    async pickAvatarSource(): Promise<any> {
      return await ((t as any).pickAvatarSource as any)();
    },
    async pickAvatarFile(): Promise<any> {
      return await ((t as any).pickAvatarFile as any)();
    },
    async generateAgentAvatarImage(e: any): Promise<any> {
      return await ((t as any).generateAgentAvatarImage as any)({
        description: e
      });
    },
    onFocusAgent(e: any): any {
      return ((t as any).subscribe as any)({
        "focus-agent": e
      });
    },
    onDeepLink(e: any): any {
      return ((t as any).subscribe as any)({
        "deep-link": e
      });
    },
    async deepLinksReady(): Promise<any> {
      await ((t as any).markDeepLinksReady as any)();
    },
    noteRendererAlive(): any {
      (((D as any).ipcRenderer as any).send as any)(Nt);
    },
    noteBootGateLanded(): any {
      (((D as any).ipcRenderer as any).send as any)(xt);
    },
    async getBoxMigrationStatus(): Promise<any> {
      return await ((t as any).getBoxMigrationStatus as any)();
    },
    onBoxMigration(e: any): any {
      return ((t as any).subscribe as any)({
        "box-migration": e
      });
    },
    async getBoxHostPhase(): Promise<any> {
      return await ((t as any).getBoxHostPhase as any)();
    },
    onBoxHostPhase(e: any): any {
      return ((t as any).subscribe as any)({
        "box-host-phase": e
      });
    },
    onDevBoxRebuild(e: any): any {
      return ((t as any).subscribe as any)({
        "dev-box-rebuild": e
      });
    },
    onOpenFeedback(e: any): any {
      return ((t as any).subscribe as any)({
        "open-feedback": (): any => (e as any)()
      });
    },
    onOpenAbout(e: any): any {
      return ((t as any).subscribe as any)({
        "open-about": (): any => (e as any)()
      });
    },
    onOpenSettings(e: any): any {
      return ((t as any).subscribe as any)({
        "open-settings": (): any => (e as any)()
      });
    },
    onWindowFocus(e: any): any {
      return ((t as any).subscribe as any)({
        "window-focus": (): any => (e as any)()
      });
    },
    async submitFeedback(e: any): Promise<any> {
      return await ((t as any).submitFeedback as any)(e);
    },
    onWidgetGallery(e: any): any {
      return ((t as any).subscribe as any)({
        "widget-gallery": e
      });
    },
    onForceOnboarding(e: any): any {
      return ((t as any).subscribe as any)({
        "force-onboarding": (): any => (e as any)()
      });
    },
    async transcribeAudio(e: any, n: any, o: any): Promise<any> {
      return await ((t as any).transcribeAudio as any)({
        audio: e,
        mimeType: n,
        language: o
      });
    },
    async synthesizeSpeech({
      text: e,
      voiceId: n
    }: any): Promise<any> {
      return await ((t as any).synthesizeSpeech as any)({
        text: e,
        voiceId: n
      });
    },
    cursorAccount: {
      async getStatus(): Promise<any> {
        return await ((t as any).getCursorAuthStatus as any)();
      },
      async login(): Promise<any> {
        return await ((t as any).loginCursor as any)();
      },
      async addAccount(): Promise<any> {
        return await ((t as any).addCursorAccount as any)();
      },
      async listAccounts(): Promise<any> {
        return await ((t as any).listCursorAccounts as any)();
      },
      async switchAccount(e: any): Promise<any> {
        return await ((t as any).switchCursorAccount as any)({
          accountId: e
        });
      },
      async removeAccount(e: any): Promise<any> {
        return await ((t as any).removeCursorAccount as any)({
          accountId: e
        });
      },
      async getLoginFlight(): Promise<any> {
        return await ((t as any).getCursorLoginFlight as any)();
      },
      async cancelLoginFlight(): Promise<any> {
        return await ((t as any).cancelCursorLoginFlight as any)();
      },
      async logout(): Promise<any> {
        return await ((t as any).logoutCursor as any)();
      },
      async updateName(e: any): Promise<any> {
        return await ((t as any).updateCursorAccountName as any)({
          name: e
        });
      },
      async updateProfilePhoto(e: any): Promise<any> {
        return await ((t as any).updateCursorProfilePhoto as any)({
          photo: e
        });
      },
      async getAvatar(): Promise<any> {
        return await ((t as any).getCursorAvatar as any)();
      },
      async getMachines(): Promise<any> {
        return await ((t as any).getSandMachines as any)();
      },
      async updateMachineLabel(e: any): Promise<any> {
        return await ((t as any).updateSandMachineLabel as any)(e);
      },
      async getWeeklyUsage(): Promise<any> {
        return await ((t as any).getCursorWeeklyUsage as any)();
      },
      async getUsageSummary(): Promise<any> {
        return await ((t as any).getCursorUsageSummary as any)();
      },
      async listGrokBotEmailInboxes(): Promise<any> {
        return await ((t as any).listGrokBotEmailInboxes as any)();
      },
      async createGrokBotEmailInbox(e: any): Promise<any> {
        return await ((t as any).createGrokBotEmailInbox as any)(e);
      },
      async getEnterpriseUsage(e: any): Promise<any> {
        return await ((t as any).getCursorEnterpriseUsage as any)({
          teamId: e
        });
      },
      async getUsageBreakdown(e: any): Promise<any> {
        return await ((t as any).getCursorUsageBreakdown as any)({
          includeCredits: (e as any).includeCredits
        });
      },
      async getPrReviewPreferences(): Promise<any> {
        return await ((t as any).getCursorPrReviewPreferences as any)();
      },
      async getOriginPrStatus(e: any): Promise<any> {
        return await ((t as any).getCursorOriginPrStatus as any)({
          prUrl: e
        });
      },
      async getPrivacyModeEnabled(): Promise<any> {
        return await ((t as any).getCursorPrivacyModeEnabled as any)();
      },
      async getSandAccess(): Promise<any> {
        return await ((t as any).getSandAccess as any)();
      },
      async getSandAccessFresh(): Promise<any> {
        return await ((t as any).getSandAccessFresh as any)();
      },
      async getGrokBotTermsRecord(): Promise<any> {
        return await ((t as any).getGrokBotTermsRecord as any)();
      },
      async markGrokBotTermsSeen(): Promise<any> {
        return await ((t as any).markGrokBotTermsSeen as any)();
      },
      async clearGrokBotConnectorPreferences(): Promise<any> {
        return await ((t as any).clearGrokBotConnectorPreferences as any)();
      },
      async mintVoiceCallCredential(): Promise<any> {
        return await ((t as any).mintVoiceCallCredential as any)();
      },
      async mintXaiCommerceBearer(): Promise<any> {
        return await ((t as any).mintXaiCommerceBearer as any)();
      },
      async voiceCallHarnessSession(e: any): Promise<any> {
        return await ((t as any).voiceCallHarnessSession as any)(e);
      },
      async voiceCallHarnessTool(e: any): Promise<any> {
        return await ((t as any).voiceCallHarnessTool as any)(e);
      },
      async invokeDashboardAction(e: any): Promise<any> {
        return await ((t as any).invokeCursorDashboardAction as any)(e);
      },
      async cancelTrial(): Promise<any> {
        return await ((t as any).cancelCursorSandTrial as any)();
      },
      async setSpendLimit(e: any): Promise<any> {
        return await ((t as any).setCursorSpendLimit as any)(e);
      },
      async prepareScmConnect(e: any, n: any): Promise<any> {
        return await ((t as any).prepareCursorScmConnect as any)({
          provider: e,
          ...((n?.forceOauth as any) === (!0 as any) ? {
            forceOauth: !0
          } : {})
        });
      },
      async completeScmConnect(e: any): Promise<any> {
        return await ((t as any).completeCursorScmConnect as any)(e);
      },
      async getGithubRepoAccess(e: any): Promise<any> {
        return await ((t as any).getCursorGithubRepoAccess as any)({
          repoSlug: e
        });
      },
      onStatusChanged(e: any): any {
        return ((t as any).subscribe as any)({
          "cursor-auth-changed": e
        });
      },
      onLoginFlightChanged(e: any): any {
        return ((t as any).subscribe as any)({
          "cursor-login-flight-changed": e
        });
      },
      async getSelectedTeam(): Promise<any> {
        return await ((t as any).getCursorSelectedTeam as any)();
      },
      async listTeamMemberships(): Promise<any> {
        return await ((t as any).listCursorTeamMemberships as any)();
      },
      async listTeamMembers(e: any): Promise<any> {
        return await ((t as any).listCursorTeamMembers as any)({
          teamId: e
        });
      },
      async ackTeamFallback(e: any): Promise<any> {
        await ((t as any).ackCursorTeamFallback as any)({
          notice: e
        });
      },
      onSelectedTeamChanged(e: any): any {
        return ((t as any).subscribe as any)({
          "cursor-team-changed": e
        });
      }
    },
    passkey: {
      async startEnrollment(): Promise<any> {
        return await ((t as any).startPasskeyEnrollment as any)();
      },
      async verifyEnrollmentCode(e: any): Promise<any> {
        return await ((t as any).verifyPasskeyEnrollmentCode as any)({
          code: e
        });
      },
      async beginRegistration(e: any): Promise<any> {
        return await ((t as any).beginPasskeyRegistration as any)({
          enrollmentTicket: e
        });
      },
      async list(): Promise<any> {
        return await ((t as any).listPasskeys as any)();
      },
      async revoke(e: any): Promise<any> {
        await ((t as any).revokePasskey as any)({
          credentialId: e
        });
      }
    },
    experiments: {
      initialSnapshot: Yc,
      async getSnapshot(): Promise<any> {
        return await ((t as any).getExperimentsSnapshot as any)();
      },
      async exposeFeatureGate(e: any): Promise<any> {
        await ((t as any).exposeFeatureGate as any)({
          name: e
        });
      },
      async peekUsageWarningAssignment(): Promise<any> {
        return await ((t as any).peekUsageWarningAssignment as any)();
      },
      async exposeUsageWarningExperiment(e: any): Promise<any> {
        return await ((t as any).exposeUsageWarningExperiment as any)({
          percentUsed: e
        });
      },
      async logComposerTriggerExperimentExposure(e: any): Promise<any> {
        await ((t as any).logComposerTriggerExperimentExposure as any)({
          trigger: e
        });
      },
      async logGroupChatDiscouragementExperimentExposure(): Promise<any> {
        await ((t as any).logGroupChatDiscouragementExperimentExposure as any)();
      },
      async logOnboardingJobRoleExperimentExposure(): Promise<any> {
        await ((t as any).logOnboardingJobRoleExperimentExposure as any)();
      },
      async logOnboardingRoleUseCaseBotsExperimentExposure(): Promise<any> {
        await ((t as any).logOnboardingRoleUseCaseBotsExperimentExposure as any)();
      },
      async applyFeatureFlagOverride(e: any): Promise<any> {
        await ((t as any).applyFeatureFlagOverride as any)({
          command: e
        });
      },
      async refresh(): Promise<any> {
        await ((t as any).refreshFeatureFlags as any)();
      },
      async applyExperimentOverride(e: any): Promise<any> {
        await ((t as any).applyExperimentOverride as any)({
          command: e
        });
      },
      async startRpcTraceWindow(): Promise<any> {
        return ((await ((t as any).startRpcTraceWindow as any)()) as any) === (!0 as any);
      },
      onChanged(e: any): any {
        return ((t as any).subscribe as any)({
          "experiments-changed": e
        });
      }
    },
    platform: (process as any).platform,
    isDev: tu,
    usesProductionBackend: (ou as any)(),
    devVoiceHarness: (((process as any).env as any).SAND_VOICE_HARNESS as any) === ("backend" as any) ? "backend" : "package",
    async getWindowState(): Promise<any> {
      return await ((t as any).getWindowState as any)();
    },
    onWindowStateEvent(e: any): any {
      return ((t as any).subscribe as any)({
        "window-state": e
      });
    },
    onScrollGestureEvent(e: any): any {
      return ((t as any).subscribe as any)({
        "scroll-gesture": e
      });
    },
    onMouseHistoryNavigation(e: any): any {
      return ((t as any).subscribe as any)({
        "mouse-history-navigation": ({
          direction: n
        }: any): any => {
          ((n as any) === (-1 as any) || (n as any) === (1 as any)) && (e as any)(n);
        }
      });
    },
    getZoomFactor(): any {
      return (((D as any).webFrame as any).getZoomFactor as any)();
    },
    onZoomFactorEvent(e: any): any {
      return ((t as any).subscribe as any)({
        "zoom-factor-changed": ({
          factor: n
        }: any): any => (e as any)(n)
      });
    },
    onNotificationSound(e: any): any {
      return ((t as any).subscribe as any)({
        "notification-sound": (n: any): any => (e as any)((n as any).sound)
      });
    },
    assistiveTech: {
      initial: zc,
      onChanged(e: any): any {
        return ((t as any).subscribe as any)({
          "assistive-tech-changed": e
        });
      }
    },
    windowControls: {
      async minimize(): Promise<any> {
        await ((t as any).minimizeWindow as any)();
      },
      async focus(): Promise<any> {
        await ((t as any).focusWindow as any)();
      },
      async toggleMaximize(): Promise<any> {
        await ((t as any).toggleMaximizeWindow as any)();
      },
      async close(): Promise<any> {
        await ((t as any).closeWindow as any)();
      },
      async setTitleBarOverlayTone(e: any): Promise<any> {
        await ((t as any).setTitleBarOverlayTone as any)({
          isOverlayTone: e
        });
      },
      async setViewingAgent(e: any): Promise<any> {
        await ((t as any).setViewingAgent as any)({
          agentId: e
        });
      },
      async setComposingAgent(e: any, n: any): Promise<any> {
        await ((t as any).setComposingAgent as any)({
          agentId: e,
          composing: n
        });
      },
      async setComputerViewOpen(e: any): Promise<any> {
        await ((t as any).setComputerViewOpen as any)({
          isOpen: e
        });
      },
      async resizeWidth(e: any): Promise<any> {
        return await ((t as any).resizeWindowWidth as any)({
          deltaWidth: e
        });
      }
    },
    foreverBox: {
      async forceRecreate(): Promise<any> {
        return await ((t as any).forceRecreateComputer as any)();
      },
      async update(e: any): Promise<any> {
        return await ((t as any).updateComputer as any)(e);
      },
      upgradeSchedule: {
        async get(): Promise<any> {
          return await ((t as any).getComputerUpgradeSchedule as any)();
        },
        async schedule(e: any): Promise<any> {
          return await ((t as any).scheduleComputerUpgrade as any)(e);
        },
        async reschedule(e: any): Promise<any> {
          return await ((t as any).rescheduleComputerUpgrade as any)(e);
        },
        async cancel(e: any): Promise<any> {
          return await ((t as any).cancelComputerUpgrade as any)(e);
        }
      },
      onUpdateDispatched(e: any): any {
        return ((t as any).subscribe as any)({
          "update-computer-dispatched": e
        });
      },
      onDevBoxPullProgress(e: any): any {
        return ((t as any).subscribe as any)({
          "dev-box-pull-progress": e
        });
      },
      egressTunnel: {
        initial: Jc,
        async get(): Promise<any> {
          return ((await ((t as any).getEgressTunnelEnabled as any)()) as any) === (!0 as any);
        },
        async set(e: any): Promise<any> {
          return ((await ((t as any).setEgressTunnelEnabled as any)({
            enabled: e
          })) as any) === (!0 as any);
        },
        onChanged(e: any): any {
          return ((t as any).subscribe as any)({
            "egress-tunnel-changed": (n: any): any => {
              (e as any)((n as any) === (!0 as any));
            }
          });
        },
        initialStatus: eu,
        async getStatus(): Promise<any> {
          return await ((t as any).getEgressTunnelStatus as any)();
        },
        onStatusChanged(e: any): any {
          return ((t as any).subscribe as any)({
            "egress-tunnel-status-changed": e
          });
        },
        async claim(): Promise<any> {
          await ((t as any).claimEgressTunnel as any)();
        }
      },
      webauthnProxy: {
        initial: Zc,
        async get(): Promise<any> {
          return ((await ((t as any).getWebauthnProxyEnabled as any)()) as any) === (!0 as any);
        },
        async set(e: any): Promise<any> {
          return ((await ((t as any).setWebauthnProxyEnabled as any)({
            enabled: e
          })) as any) === (!0 as any);
        },
        onChanged(e: any): any {
          return ((t as any).subscribe as any)({
            "webauthn-proxy-changed": (n: any): any => {
              (e as any)((n as any) === (!0 as any));
            }
          });
        }
      }
    },
    onboarding: {
      async getSeen(): Promise<any> {
        return await ((t as any).getOnboardingSeen as any)();
      },
      async setSeen(e: any): Promise<any> {
        await ((t as any).setOnboardingSeen as any)({
          seen: e
        });
      },
      onSkip(e: any): any {
        return ((t as any).subscribe as any)({
          "skip-onboarding": (): any => (e as any)()
        });
      }
    },
    passkeyCeremony: {
      async run(e: any): Promise<any> {
        await ((t as any).runPasskeyCeremony as any)(e);
      },
      async cancel(e: any): Promise<any> {
        await ((t as any).cancelPasskeyCeremony as any)({
          ceremonyId: e
        });
      }
    },
    telemetry: {
      reportAgentLoad(e: any): any {
        ((((t as any).reportAgentLoad as any)(e) as any).catch as any)(h);
      },
      reportBoxVisibility(e: any): any {
        ((((t as any).reportBoxVisibility as any)(e) as any).catch as any)(h);
      },
      reportSendLatency(e: any): any {
        ((((t as any).reportSendLatency as any)(e) as any).catch as any)(h);
      },
      reportHeapMetrics(e: any): any {
        ((((t as any).reportHeapMetrics as any)(e) as any).catch as any)(h);
      },
      reportSendAck(e: any): any {
        ((((t as any).reportSendAck as any)(e) as any).catch as any)(h);
      },
      ...(nu as any)(),
      reportReactionAck(e: any): any {
        ((((t as any).reportReactionAck as any)(e) as any).catch as any)(h);
      },
      reportRenderTtfr(e: any): any {
        ((((t as any).reportRenderTtfr as any)(e) as any).catch as any)(h);
      },
      reportRenderStream(e: any): any {
        ((((t as any).reportRenderStream as any)(e) as any).catch as any)(h);
      },
      reportAgentsUnreachable(e: any): any {
        ((((t as any).reportAgentsUnreachable as any)(e) as any).catch as any)(h);
      },
      reportAccessBlocked(e: any): any {
        ((((t as any).reportAccessBlocked as any)(e) as any).catch as any)(h);
      },
      reportRecoveryAction(e: any): any {
        ((((t as any).reportRecoveryAction as any)(e) as any).catch as any)(h);
      },
      reportRebuildLifecycle(e: any): any {
        ((((t as any).reportRebuildLifecycle as any)(e) as any).catch as any)(h);
      },
      reportReconciliation(e: any): any {
        ((((t as any).reportReconciliation as any)(e) as any).catch as any)(h);
      },
      reportVncSession(e: any): any {
        ((((t as any).reportVncSession as any)(e) as any).catch as any)(h);
      },
      reportVncLiveness(e: any): any {
        ((((t as any).reportVncLiveness as any)(e) as any).catch as any)(h);
      },
      reportOpenComputer(e: any): any {
        ((((t as any).reportOpenComputer as any)(e) as any).catch as any)(h);
      },
      reportUpdatePrompt(e: any): any {
        ((((t as any).reportUpdatePrompt as any)(e) as any).catch as any)(h);
      },
      reportUsageWarning(e: any): any {
        ((((t as any).reportUsageWarning as any)(e) as any).catch as any)(h);
      },
      reportSidebarAction(e: any): any {
        ((((t as any).reportSidebarAction as any)(e) as any).catch as any)(h);
      },
      reportArtifactEngagement(e: any): any {
        ((((t as any).reportArtifactEngagement as any)(e) as any).catch as any)(h);
      },
      reportCloudAgentArtifact(e: any): any {
        ((((t as any).reportCloudAgentArtifact as any)(e) as any).catch as any)(h);
      },
      reportSigninGate(e: any): any {
        ((((t as any).reportSigninGate as any)(e) as any).catch as any)(h);
      },
      reportOnboardingStep(e: any): any {
        ((((t as any).reportOnboardingStep as any)(e) as any).catch as any)(h);
      },
      reportOnboardingCompleted(e: any): any {
        ((((t as any).reportOnboardingCompleted as any)(e) as any).catch as any)(h);
      },
      reportClientFailure(e: any): any {
        ((((t as any).reportClientFailure as any)(e) as any).catch as any)(h);
      },
      noteSentryConversation(e: any): any {
        ((((t as any).noteSentryConversation as any)(e) as any).catch as any)(h);
      }
    },
    timeZone: {
      async get(): Promise<any> {
        return await ((t as any).getTimeZone as any)();
      },
      async setOverride(e: any): Promise<any> {
        return await ((t as any).setTimeZoneOverride as any)({
          timeZone: e
        });
      }
    },
    hardwareAcceleration: {
      async get(): Promise<any> {
        return await ((t as any).getHardwareAcceleration as any)();
      },
      async setEnabled(e: any): Promise<any> {
        return await ((t as any).setHardwareAccelerationEnabled as any)({
          enabled: e
        });
      },
      async relaunch(): Promise<any> {
        await ((t as any).relaunchDesktop as any)();
      }
    },
    spellCheck: {
      async get(): Promise<any> {
        return await ((t as any).getSpellCheckEnabled as any)();
      },
      async setEnabled(e: any): Promise<any> {
        return await ((t as any).setSpellCheckEnabled as any)({
          enabled: e
        });
      }
    },
    notificationPreferences: {
      async get(): Promise<any> {
        return await ((t as any).getDesktopNotificationPreferences as any)();
      },
      async set(e: any): Promise<any> {
        return await ((t as any).setDesktopNotificationPreferences as any)({
          preferences: e
        });
      }
    },
    autoReviewInstructions: {
      async get(): Promise<any> {
        return await ((t as any).getAutoReviewInstructions as any)();
      },
      async set(e: any): Promise<any> {
        return await ((t as any).setAutoReviewInstructions as any)({
          instructions: e
        });
      }
    },
    teamPolicy: {
      async get(): Promise<any> {
        return await ((t as any).getTeamMemberPolicy as any)();
      },
      onChanged(e: any): any {
        return ((t as any).subscribe as any)({
          "team-member-policy-changed": e
        });
      }
    },
    localToolPermission: {
      async get(): Promise<any> {
        return await ((t as any).getLocalToolPermission as any)();
      },
      async set(e: any, n: any): Promise<any> {
        return await ((t as any).setLocalToolPermission as any)({
          permission: e,
          ...((n as any) !== (void 0 as any) ? {
            machineId: n
          } : {})
        });
      },
      async messagesAppIcon(): Promise<any> {
        return await ((t as any).getMessagesAppIcon as any)();
      },
      async recordApproval(e: any, n: any, o: any, i: any): Promise<any> {
        await ((t as any).recordLocalToolApproval as any)({
          approvalId: e,
          action: n,
          target: o,
          ...((i as any) !== (void 0 as any) ? {
            machineId: i
          } : {})
        });
      },
      async clearApprovals(): Promise<any> {
        await ((t as any).clearLocalToolApprovals as any)();
      },
      async recordStandingGrant(e: any): Promise<any> {
        return await ((t as any).recordLocalToolStandingGrant as any)({
          action: (e as any).action,
          recipient: (e as any).recipient,
          ...(((e as any).machineId as any) !== (void 0 as any) ? {
            machineId: (e as any).machineId
          } : {})
        });
      },
      async getActionGrant(e: any): Promise<any> {
        return await ((t as any).getLocalToolActionGrant as any)({
          action: e
        });
      },
      async setActionGrant(e: any, n: any): Promise<any> {
        return await ((t as any).setLocalToolActionGrant as any)({
          action: e,
          granted: n
        });
      }
    },
    theme: {
      initial: qc,
      async get(): Promise<any> {
        return await ((t as any).getThemeState as any)();
      },
      async set(e: any): Promise<any> {
        return await ((t as any).setThemePreference as any)({
          preference: e
        });
      },
      onChanged(e: any): any {
        return ((t as any).subscribe as any)({
          "theme-changed": e
        });
      }
    },
    botColorInChat: {
      initial: Qc,
      async get(): Promise<any> {
        return (Gn as any)(await ((t as any).getBotColorInChatEnabled as any)());
      },
      async set(e: any): Promise<any> {
        return (Gn as any)(await ((t as any).setBotColorInChatEnabled as any)({
          enabled: e
        }));
      }
    },
    language: {
      initial: Xc,
      async get(): Promise<any> {
        return await ((t as any).getLanguageState as any)();
      },
      async set(e: any): Promise<any> {
        return await ((t as any).setLanguagePreference as any)({
          preference: e
        });
      },
      onChanged(e: any): any {
        return ((t as any).subscribe as any)({
          "language-changed": e
        });
      }
    },
    secrets: {
      async list(): Promise<any> {
        return await ((t as any).listSecrets as any)();
      }
    },
    scmConnections: {
      async disconnect(e: any): Promise<any> {
        await ((t as any).disconnectScmConnection as any)({
          platform: e
        });
      },
      async isSlackLinked(): Promise<any> {
        return await ((t as any).isSlackLinked as any)();
      },
      async slackLinkUrl(): Promise<any> {
        return await ((t as any).getSlackLinkUrl as any)();
      }
    },
    credentials: {
      async state(): Promise<any> {
        return await ((t as any).getCredentialsState as any)();
      },
      async sync(): Promise<any> {
        await ((t as any).syncCredentialProvider as any)();
      },
      onChanged(e: any): any {
        return ((t as any).subscribe as any)({
          "credentials-changed": e
        });
      },
      async disconnect(e: any): Promise<any> {
        await ((t as any).disconnectCredentialProvider as any)({
          connectionId: e
        });
      },
      async approve(e: any): Promise<any> {
        return await ((t as any).approveCredentialRequest as any)(e);
      },
      async deny(e: any): Promise<any> {
        return await ((t as any).denyCredentialRequest as any)(e);
      },
      mint: {
        async detect(): Promise<any> {
          return await ((t as any).detectCredentialMint as any)();
        },
        async start(e: any): Promise<any> {
          return await ((t as any).startCredentialMint as any)(e);
        }
      },
      oauth: {
        async connect(e: any): Promise<any> {
          return await ((t as any).connectCredentialProviderOAuth as any)(e);
        },
        async cancel(): Promise<any> {
          await ((t as any).cancelCredentialProviderOAuth as any)();
        }
      }
    },
    agent: {
      initialRosterPhotoAccess: $c,
      async getPinnedAgents(): Promise<any> {
        return await ((t as any).getHostPinnedAgents as any)();
      },
      async setPinnedAgents(e: any): Promise<any> {
        return await ((t as any).setHostPinnedAgents as any)({
          pinnedAgentIds: e
        });
      },
      async getSidebarSections(): Promise<any> {
        return await ((t as any).getHostSidebarSections as any)();
      },
      async setSidebarSections(e: any): Promise<any> {
        return await ((t as any).setHostSidebarSections as any)({
          sections: e
        });
      },
      async readTranscriptStoreTail(e: any): Promise<any> {
        return await ((t as any).readTranscriptStoreTail as any)(e);
      },
      async getPublicBotTemplate(e: any): Promise<any> {
        return await ((t as any).getPublicBotTemplate as any)({
          shareId: e
        });
      },
      async listPublicBotMarketplace(): Promise<any> {
        return await ((t as any).listPublicBotMarketplace as any)();
      },
      async getGrokBotSlackInstallState(e: any): Promise<any> {
        return await ((t as any).getGrokBotSlackInstallState as any)({
          agentId: e
        });
      },
      async startGrokBotSlackConnect(e: any): Promise<any> {
        return await ((t as any).startGrokBotSlackConnect as any)({
          agentId: e
        });
      },
      async installGrokBotSlackApp(e: any, n: any, o: any): Promise<any> {
        return await ((t as any).installGrokBotSlackApp as any)({
          agentId: e,
          slackTeamId: n,
          replaceExistingApp: o
        });
      },
      async reinstallGrokBotSlackApp(e: any, n: any): Promise<any> {
        return await ((t as any).reinstallGrokBotSlackApp as any)({
          agentId: e,
          automatic: n
        });
      },
      async uninstallGrokBotSlackApp(e: any, n: any): Promise<any> {
        return await ((t as any).uninstallGrokBotSlackApp as any)({
          agentId: e,
          forgetIfUnreachable: n
        });
      },
      async listGrokBotTeamAgents(): Promise<any> {
        return await ((t as any).listGrokBotTeamAgents as any)();
      },
      async listGrokBotAgentSessions(e: any): Promise<any> {
        return await ((t as any).listGrokBotAgentSessions as any)({
          agentId: e
        });
      },
      async setGrokBotAgentVisibility(e: any, n: any): Promise<any> {
        return await ((t as any).setGrokBotAgentVisibility as any)({
          agentId: e,
          visibility: n
        });
      },
      async cloneGrokBotAgentToTeam(e: any): Promise<any> {
        return await ((t as any).cloneGrokBotAgentToTeam as any)(e);
      },
      async setGrokBotAgentVoice(e: any, n: any): Promise<any> {
        await ((t as any).setGrokBotAgentVoice as any)({
          agentId: e,
          ...(((n as any).voiceId as any) !== (void 0 as any) ? {
            voiceId: (n as any).voiceId
          } : {}),
          ...(((n as any).voiceSpeed as any) !== (void 0 as any) ? {
            voiceSpeed: (n as any).voiceSpeed
          } : {}),
          ...(((n as any).voiceLanguage as any) !== (void 0 as any) ? {
            voiceLanguage: (n as any).voiceLanguage
          } : {})
        });
      },
      async updateGrokBotAgent(e: any, n: any): Promise<any> {
        return await ((t as any).updateGrokBotAgent as any)({
          serverId: e,
          ...n
        });
      },
      async listGrokBotAgentManagers(e: any): Promise<any> {
        return await ((t as any).listGrokBotAgentManagers as any)({
          serverId: e
        });
      },
      async addGrokBotAgentManager(e: any, n: any): Promise<any> {
        await ((t as any).addGrokBotAgentManager as any)({
          serverId: e,
          userId: n
        });
      },
      async removeGrokBotAgentManager(e: any, n: any): Promise<any> {
        await ((t as any).removeGrokBotAgentManager as any)({
          serverId: e,
          userId: n
        });
      },
      async publishGrokBotAgent(e: any): Promise<any> {
        return await ((t as any).publishGrokBotAgent as any)({
          agentId: e
        });
      },
      async unpublishGrokBotAgent(e: any): Promise<any> {
        return await ((t as any).unpublishGrokBotAgent as any)({
          agentId: e
        });
      },
      async setGrokBotAgentSidebarHidden(e: any, n: any): Promise<any> {
        await ((t as any).setGrokBotAgentSidebarHidden as any)({
          agentId: e,
          isHidden: n
        });
      },
      async addGrokBotRoomPeople(e: any, n: any): Promise<any> {
        return await ((t as any).addGrokBotRoomPeople as any)({
          agentId: e,
          userIds: n
        });
      },
      async removeGrokBotRoomPeople(e: any, n: any): Promise<any> {
        return await ((t as any).removeGrokBotRoomPeople as any)({
          agentId: e,
          userIds: n
        });
      },
      async getGrokBotAgentPlugins(e: any): Promise<any> {
        return await ((t as any).getGrokBotAgentPlugins as any)({
          agentId: e
        });
      },
      async setGrokBotAgentPlugins(e: any, n: any): Promise<any> {
        return await ((t as any).setGrokBotAgentPlugins as any)({
          agentId: e,
          plugins: n
        });
      },
      async setGrokBotAgentPluginVariables(e: any, n: any, o: any): Promise<any> {
        return await ((t as any).setGrokBotAgentPluginVariables as any)({
          agentId: e,
          pluginId: n,
          variables: o
        });
      },
      async addGrokBotAgentSkill(e: any, n: any): Promise<any> {
        return await ((t as any).addGrokBotAgentSkill as any)({
          agentId: e,
          ...(((n as any).name as any) !== (void 0 as any) ? {
            name: (n as any).name
          } : {}),
          ...(((n as any).description as any) !== (void 0 as any) ? {
            description: (n as any).description
          } : {}),
          content: (n as any).content,
          ...(((n as any).files as any) !== (void 0 as any) ? {
            files: (n as any).files
          } : {})
        });
      },
      async updateGrokBotAgentSkill(e: any, n: any): Promise<any> {
        return await ((t as any).updateGrokBotAgentSkill as any)({
          agentId: e,
          name: (n as any).name,
          content: (n as any).content,
          ...(((n as any).description as any) !== (void 0 as any) ? {
            description: (n as any).description
          } : {}),
          ...(((n as any).files as any) !== (void 0 as any) ? {
            files: (n as any).files
          } : {})
        });
      },
      async removeGrokBotAgentSkill(e: any, n: any): Promise<any> {
        return await ((t as any).removeGrokBotAgentSkill as any)({
          agentId: e,
          name: n
        });
      },
      async listGrokBotUserBotMemories(e: any): Promise<any> {
        return await ((t as any).listGrokBotUserBotMemories as any)({
          agentId: e
        });
      },
      async promoteGrokBotMemoriesToTeam(e: any, n: any): Promise<any> {
        return await ((t as any).promoteGrokBotMemoriesToTeam as any)({
          agentId: e,
          factIds: n
        });
      },
      async listGrokBotSecrets(e: any): Promise<any> {
        return await ((t as any).listGrokBotSecrets as any)({
          serverId: e
        });
      },
      async putGrokBotSecret(e: any, n: any): Promise<any> {
        return await ((t as any).putGrokBotSecret as any)({
          serverId: e,
          ...n
        });
      },
      async deleteGrokBotSecret(e: any): Promise<any> {
        await ((t as any).deleteGrokBotSecret as any)(e);
      },
      async carryUserSecretsToGrokBot(e: any): Promise<any> {
        return await ((t as any).carryUserSecretsToGrokBot as any)(e);
      },
      clientPersistence: {
        async read(e: any): Promise<any> {
          return await ((t as any).readClientPersistence as any)({
            key: e
          });
        },
        async readMany(e: any): Promise<any> {
          return await ((t as any).readManyClientPersistence as any)(e);
        },
        async write(e: any, n: any): Promise<any> {
          await ((t as any).writeClientPersistence as any)({
            key: e,
            value: n
          });
        },
        async remove(e: any): Promise<any> {
          await ((t as any).removeClientPersistence as any)({
            key: e
          });
        },
        async listKeys(e: any): Promise<any> {
          return await ((t as any).listClientPersistenceKeys as any)({
            prefix: e
          });
        },
        async hasMigratedFromLocalStorage(): Promise<any> {
          return await ((t as any).hasMigratedClientPersistence as any)();
        },
        async migrateFromLocalStorage(e: any): Promise<any> {
          return await ((t as any).migrateClientPersistence as any)({
            entries: e
          });
        }
      }
    },
    update: {
      async getStatus(): Promise<any> {
        return await ((t as any).getUpdateStatus as any)();
      },
      async check(): Promise<any> {
        return await ((t as any).checkForUpdates as any)();
      },
      async setTrack(e: any): Promise<any> {
        return await ((t as any).setUpdateTrack as any)({
          track: e
        });
      },
      async quitAndInstall(e: any): Promise<any> {
        return await ((t as any).quitAndInstallUpdate as any)({
          expectedVersion: e
        });
      },
      async setAutoUpdateWhenIdle(e: any): Promise<any> {
        return await ((t as any).setAutoUpdateWhenIdle as any)({
          enabled: e
        });
      },
      onStatusEvent(e: any): any {
        return ((t as any).subscribe as any)({
          "update-status": e
        });
      }
    },
    ...((Pi as any) == (null as any) ? {} : {
      chromeCookies: Pi
    }),
    ...((wi as any) == (null as any) ? {} : {
      cookieOriginGrants: wi
    }),
    attachProdBox: au
  },
  du: any = (Li as any).bridge;
(((D as any).contextBridge as any).exposeInMainWorld as any)("desktop", su);
(_t as any)();
(((D as any).contextBridge as any).exposeInMainWorld as any)("coordinatorPort", du);
(((D as any).contextBridge as any).exposeInMainWorld as any)("sandRenderTrace", (Ni as any)((D as any).ipcRenderer));
(ft as any)();
(((D as any).contextBridge as any).exposeInMainWorld as any)("desktopMount", (Me as any)(Ft, (dn as any)()));
(((D as any).ipcRenderer as any).on as any)("sand:coordinator-port", (e: any): any => {
  let n: any = ((e as any).ports as any)[0];
  (n as any) != (null as any) && ((Li as any).deliver as any)((Ti as any)(n));
});
((window as any).addEventListener as any)("online", (): any => (((D as any).ipcRenderer as any).send as any)(Ot));
//# debugId=17911aa0-baf4-463a-92a0-bf4aab38d9fc
