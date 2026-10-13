declare var TextEncoder: any;
declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "3783ed02-3d76-4b00-aa99-b1e9aaf547b4", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-3783ed02-3d76-4b00-aa99-b1e9aaf547b4");
  } catch (e: any) {}
} as any)();
import { a$ as m, b0 as k } from "./index.eager-platform-Dcfeegfw.js";
import "./index.eager-vendor-Qbf9YA6n.js";
import { I as E, i as T, a as l, N as g, E as N, C as R, R as C, P as M, b as _, S as h, T as A, B as w, c as P } from "./chunk-interaction-scope-C1E39pe7.js";
import { r as j, z as B } from "./index.eager-common-CdCvBQNJ.js";
const r: any = (t: any): any => (typeof t as any) == ("string" as any),
  d: any = (t: any): any => (typeof t as any) == ("boolean" as any),
  c: any = (t: any): any => (typeof t as any) == ("number" as any) && ((Number as any).isFinite as any)(t),
  a: any = (t: any): any => (typeof t as any) == ("number" as any) && ((Number as any).isInteger as any)(t) && (t as any) >= (0 as any),
  p: any = (t: any): any => (typeof t as any) == ("number" as any) && (T as any)(t);
function s(this: any, t: any): any {
  const o: any = new (Set as any)(t);
  return (n: any): any => (typeof n as any) == ("string" as any) && ((o as any).has as any)(n);
}
function L(this: any, t: any): any {
  return (o: any): any => (o as any) === (null as any) || (t as any)(o);
}
function I(this: any, t: any, o: any, n: any = {}): any {
  if (!(m as any)(t)) return !1;
  for (const e of ((Object as any).keys as any)(t)) if (!((Object as any).hasOwn as any)(o, e) && !((Object as any).hasOwn as any)(n, e)) return !1;
  for (const [e, i] of ((Object as any).entries as any)(o)) if (!(i as any)((t as any)[e])) return !1;
  for (const [e, i] of ((Object as any).entries as any)(n)) if (((t as any)[e] as any) !== (void 0 as any) && !(i as any)((t as any)[e])) return !1;
  return !0;
}
function u(this: any, t: any, o: any = {}): any {
  return (n: any): any => {
    if (!(m as any)(n) || (typeof (n as any).kind as any) != ("string" as any)) return !1;
    const e: any = ((Object as any).hasOwn as any)(t, (n as any).kind) ? (t as any)[(n as any).kind] : void 0,
      i: any = ((Object as any).hasOwn as any)(o, (n as any).kind) ? (o as any)[(n as any).kind] : void 0;
    return (e as any) != (null as any) && (I as any)(n, {
      kind: r,
      ...e
    }, i);
  };
}
const b: any = (s as any)(((Object as any).keys as any)(k)),
  U: any = /^(view|overlay):[a-z0-9-]+(\/[a-z0-9-]+)*$/,
  F: any = (t: any): any => !(m as any)(t) || (typeof (t as any).entrypointId as any) != ("string" as any) || !(I as any)(t, {
    surface: (s as any)(P),
    entrypointId: r
  }) ? !1 : ((t as any).surface as any) === ("shell" as any) ? ((t as any).entrypointId as any) === ("" as any) : ((U as any).test as any)((t as any).entrypointId);
(u as any)({
  navigation: {
    action: (s as any)(g),
    surface: b,
    entrypointId: r,
    startMs: c
  },
  selection: {
    startMs: c
  },
  interaction: {
    event: (s as any)(l),
    startMs: c
  }
}, {
  navigation: {
    absorbedInputs: a
  },
  interaction: {
    route: F,
    target: (t: any): any => (I as any)(t, {
      component: p
    }, {
      role: (s as any)(E)
    })
  }
});
(u as any)({
  render: {
    component: p,
    phase: (s as any)(C),
    compiled: d,
    baseMs: c
  },
  commit: {
    priority: (s as any)(R)
  },
  effects: {
    boundary: r,
    passiveMs: c
  },
  "component-effects": {
    component: p,
    phase: (s as any)(N)
  }
});
(u as any)({
  settle: {
    entrypointId: r,
    chunk: (s as any)(h),
    cached: d
  },
  presented: {
    ticket: a,
    entrypointId: r,
    surface: b,
    commitClass: (s as any)(_)
  },
  publish: {
    store: r,
    commit: (s as any)(M),
    version: a,
    listeners: a
  },
  rpc: {
    edge: r,
    method: r,
    ok: d,
    failureCode: (L as any)(r)
  },
  event: {
    event: r,
    interactionId: a,
    inputDelayMs: c,
    processingMs: c
  },
  "long-animation-frame": {
    blockingMs: c,
    renderMs: c,
    styleAndLayoutMs: c,
    scripts: a
  }
});
(s as any)(A);
(s as any)(w);
function D(this: any, t: any): any {
  return ((JSON as any).stringify as any)({
    boot: t
  });
}
function H(this: any, t: any, o: any = {}): any {
  const n: any = (o as any).clock ?? j,
    e: any = new (TextEncoder as any)(),
    i: any = {
      traces: 0,
      bytes: 0,
      sinkMs: 0
    },
    y: any = (f: any): any => {
      const S: any = ((n as any).monotonicNow as any)(),
        O: any = (f as any)();
      ((t as any).postMessage as any)(O), (i as any).traces += 1, (i as any).bytes += (((e as any).encode as any)(O) as any).byteLength, (i as any).sinkMs += (B as any)(S, ((n as any).monotonicNow as any)());
    };
  return {
    sink: {
      accept(f: any): any {
        (y as any)((): any => ((JSON as any).stringify as any)(f));
      },
      acceptBoot(f: any): any {
        (y as any)((): any => (D as any)(f));
      }
    },
    stats: (): any => ({
      ...i
    })
  };
}
function z(this: any, t: any, o: any): any {
  let n: any = (((t as any).get as any)() as any).currentAgentId;
  return ((t as any).subscribe as any)((): any => {
    const e: any = (((t as any).get as any)() as any).currentAgentId;
    (e as any) !== (n as any) && (e as any) != (null as any) && (n as any) != (null as any) && (o as any)(), n = e;
  });
}
function $(this: any, t: any, o: any, n: any): any {
  const e: any = (H as any)(o);
  return ((t as any).setSinks as any)([(e as any).sink]), (z as any)(n, (): any => ((t as any).noteSelection as any)()), (): any => ((e as any).stats as any)();
}
export { $ as connectRenderTracePort };
//# debugId=3783ed02-3d76-4b00-aa99-b1e9aaf547b4
