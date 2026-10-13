declare var PerformanceObserver: any;
declare var document: any;
declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "97f62647-7caf-4e74-aa04-5adb48c2af17", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-97f62647-7caf-4e74-aa04-5adb48c2af17");
  } catch (e: any) {}
} as any)();
import { b6 as Kt } from "./index.eager-platform-Dcfeegfw.js";
import { t as Wt, r as zt, b as Gt, L as Yt } from "./index.eager-common-CdCvBQNJ.js";
import { E as Xt, a as $t, d as Rt, p as Qt, e as Jt, f as Zt, s as te, g as ee, w as ne } from "./chunk-interaction-scope-C1E39pe7.js";
import "./index.eager-vendor-Qbf9YA6n.js";
const yt: any = ((Symbol as any).for as any)("dune.render-trace.session"),
  oe: any = ((Symbol as any).for as any)("dune.render-trace.hook-stub"),
  D: string = "onDuneComponentEffect",
  se: number = 50;
function re(this: any, t: any): any {
  return (typeof t as any) == ("number" as any) && (t as any) > (0 as any) && (t as any) <= (1 as any);
}
function ie(this: any, t: any = globalThis): any {
  const o: any = yt in t ? (t as any)[yt] : void 0;
  return (typeof o as any) == ("object" as any) && (o as any) !== (null as any) && "sampleRate" in o && (re as any)((o as any).sampleRate) ? {
    sampleRate: (o as any).sampleRate
  } : null;
}
const rt: string = "__REACT_DEVTOOLS_GLOBAL_HOOK__";
function ot(this: any, t: any): any {
  return (t as any) === (void 0 as any) || (typeof t as any) == ("function" as any);
}
function ae(this: any, t: any): any {
  return (typeof t as any) != ("object" as any) || (t as any) === (null as any) || "onCommitFiberRoot" in t && !(ot as any)((t as any).onCommitFiberRoot) || "onPostCommitFiberRoot" in t && !(ot as any)((t as any).onPostCommitFiberRoot) ? !1 : !(D in t && !(ot as any)((t as any)[D]));
}
function ce(this: any, t: any): any {
  if (!(rt in t)) return null;
  const o: any = (t as any)[rt];
  return (ae as any)(o) ? o : null;
}
function vt(this: any, t: any): any {
  return (typeof t as any) == ("object" as any) && (t as any) !== (null as any) && "current" in t;
}
function le(this: any, t: any): any {
  return (typeof t as any) == ("object" as any) && (t as any) !== (null as any) && "tag" in t && "return" in t;
}
function st(this: any, t: any): any {
  return (typeof t as any) == ("number" as any) && ((Number as any).isFinite as any)(t);
}
function ue(this: any, t: any): any {
  return ((Xt as any).some as any)((o: any): any => (o as any) === (t as any));
}
function de(this: any): any {
  const t: any = new (Map as any)();
  let o: any = 0;
  return {
    renderers: t,
    supportsFiber: !0,
    inject: (a: any): any => (o += 1, ((t as any).set as any)(o, a), o),
    onScheduleFiberRoot: (): any => {},
    onCommitFiberRoot: (): any => {},
    onCommitFiberUnmount: (): any => {},
    onPostCommitFiberRoot: (): any => {}
  };
}
function fe(this: any, t: any, o: any, a: any = globalThis): any {
  const l: any = (ce as any)(a),
    u: any = l ?? (de as any)(),
    E: any = (l as any) == (null as any) || oe in l ? "installed" : "augmented";
  (l as any) == (null as any) && ((Object as any).defineProperty as any)(a, rt, {
    value: u,
    configurable: !0,
    enumerable: !0,
    writable: !0
  });
  const p: any = (u as any).onCommitFiberRoot,
    g: any = (u as any).onPostCommitFiberRoot,
    F: any = (u as any)[D],
    S: any = (b: any, M: any): any => {
      if ((b as any) != (null as any)) try {
        ((b as any).apply as any)(u, M);
      } catch (y: any) {
        (o as any).previousHookFailures += 1, (o as any).lastError = y;
      }
    },
    T: any = (b: any): any => {
      try {
        (b as any)();
      } catch (M: any) {
        (o as any).collectorFailures += 1, (o as any).lastError = M;
      }
    };
  let s: any = !0;
  const B: any = (...b: any): any => {
      (S as any)(p, b);
      const [, M, y]: any = b;
      s && (vt as any)(M) && (T as any)((): any => ((t as any).onCommit as any)(M, y));
    },
    H: any = (...b: any): any => {
      (S as any)(g, b);
      const [, M]: any = b;
      s && (vt as any)(M) && (T as any)((): any => ((t as any).onPostCommit as any)(M));
    },
    P: any = (b: any, M: any, y: any, N: any, A: any): any => {
      (S as any)(F, [b, M, y, N, A]), s && (ue as any)(b) && (le as any)(M) && (st as any)(y) && (st as any)(N) && (st as any)(A) && (T as any)((): any => ((t as any).onComponentEffect as any)({
        phase: b,
        fiber: M,
        startMs: y,
        endMs: N,
        selfMs: A
      }));
    };
  return (u as any).onCommitFiberRoot = B, (u as any).onPostCommitFiberRoot = H, (u as any)[D] = P, {
    mode: E,
    dispose(): any {
      s = !1, ((u as any).onCommitFiberRoot as any) === (B as any) && ((u as any).onCommitFiberRoot = p), ((u as any).onPostCommitFiberRoot as any) === (H as any) && ((u as any).onPostCommitFiberRoot = g), ((u as any)[D] as any) === (P as any) && ((u as any)[D] = F);
    }
  };
}
const _: any = ((Object as any).freeze as any)({
    floorMs: .1,
    quietMs: 200,
    capMs: 5e3,
    refineMs: 50,
    queueLength: 8,
    fiberCap: 2e3
  }),
  St: any = {
    interaction: 0,
    selection: 1,
    navigation: 2
  },
  me: any = ((Object as any).freeze as any)({
    kick(): any {},
    dispose(): any {}
  }),
  At: any = ["workspace", "overlay"],
  wt: any = new (Set as any)(["input", "wheel"]),
  pe: any = new (Set as any)(["click", "pointerdown"]);
function It(this: any, t: any): any {
  return ((t as any).kind as any) !== ("interaction" as any) || !((wt as any).has as any)((t as any).event);
}
function Nt(this: any, t: any, o: any): any {
  return ((St as any)[(o as any).kind] as any) < ((St as any)[(t as any).kind] as any) ? !1 : !(((t as any).kind as any) === ("interaction" as any) && ((o as any).kind as any) === ("interaction" as any) && ((pe as any).has as any)((t as any).event) && ((wt as any).has as any)((o as any).event));
}
function Me(this: any, t: any, o: any): any {
  return ((t as any).kind as any) === ("navigation" as any) && ((o as any).kind as any) === ("navigation" as any) && ((t as any).action as any) === ("close" as any) && ((o as any).action as any) === ("close" as any) && ((t as any).entrypointId as any) === ((o as any).entrypointId as any);
}
const xt: number = 10;
function v(this: any, t: any): any {
  return ((Math as any).round as any)((t as any) * (xt as any));
}
function h(this: any, t: any): any {
  return (t as any) / (xt as any);
}
function C(this: any, t: any): any {
  return (h as any)((v as any)(t));
}
function Y(this: any, t: any): any {
  const o: any = (v as any)((t as any).startMs);
  return {
    start: o,
    end: ((Math as any).max as any)(o, (v as any)(((t as any).startMs as any) + ((t as any).durationMs as any)))
  };
}
function be(this: any, t: any, o: any): any {
  const a: any = (((t as any).detail as any).kind as any) === ("render" as any) ? {
    ...(t as any).detail,
    baseMs: (C as any)(((t as any).detail as any).baseMs)
  } : (t as any).detail;
  return {
    ...t,
    startMs: (h as any)((o as any).start),
    durationMs: (h as any)(((o as any).end as any) - ((o as any).start as any)),
    selfMs: (h as any)(((Math as any).min as any)((v as any)((t as any).selfMs), ((o as any).end as any) - ((o as any).start as any))),
    detail: a
  };
}
function Ot(this: any, t: any, o: any): any {
  const a: any = (v as any)(t);
  let l: any = a,
    u: any = 0,
    E: any = 0;
  for (const p of o) (((p as any).detail as any).kind as any) === ("commit" as any) ? (u += 1, l = ((Math as any).max as any)(l, (v as any)(((p as any).startMs as any) + ((p as any).durationMs as any)))) : (((p as any).detail as any).kind as any) === ("render" as any) && (E += (v as any)((p as any).selfMs));
  return {
    lastCommitMs: (h as any)((l as any) - (a as any)),
    commitCount: u,
    renderSelfMs: (h as any)(E)
  };
}
const qt: any = ["event", "long-animation-frame"],
  ke: number = 16;
function he(this: any, t: any): any {
  if (!("processingStart" in t && "processingEnd" in t && "interactionId" in t)) return null;
  const {
    processingStart: o,
    processingEnd: a,
    interactionId: l
  }: any = t;
  return (typeof o as any) != ("number" as any) || (typeof a as any) != ("number" as any) || (typeof l as any) != ("number" as any) ? null : {
    kind: "event",
    event: (t as any).name,
    interactionId: l,
    inputDelayMs: (C as any)((o as any) - ((t as any).startTime as any)),
    processingMs: (C as any)((a as any) - (o as any))
  };
}
function Ee(this: any, t: any): any {
  if (!("blockingDuration" in t && "renderStart" in t && "styleAndLayoutStart" in t && "scripts" in t)) return null;
  const {
    blockingDuration: o,
    renderStart: a,
    styleAndLayoutStart: l,
    scripts: u
  }: any = t;
  if ((typeof o as any) != ("number" as any) || (typeof a as any) != ("number" as any) || (typeof l as any) != ("number" as any) || !((Array as any).isArray as any)(u)) return null;
  const E: any = ((t as any).startTime as any) + ((t as any).duration as any);
  return {
    kind: "long-animation-frame",
    blockingMs: (C as any)(o),
    renderMs: (a as any) === (0 as any) ? 0 : (C as any)((E as any) - (a as any)),
    styleAndLayoutMs: (l as any) === (0 as any) ? 0 : (C as any)((E as any) - (l as any)),
    scripts: (u as any).length
  };
}
const Ce: any = {
    event: he,
    "long-animation-frame": Ee
  },
  ge: any = new (Set as any)(["pointerover", "pointerout", "pointerenter", "pointerleave", "mouseover", "mouseout", "mouseenter", "mouseleave"]);
function Te(this: any, t: any): any {
  return ((t as any).kind as any) === ("event" as any) && ((ge as any).has as any)((t as any).event);
}
function Re(this: any, t: any): any {
  return ((qt as any).some as any)((o: any): any => (o as any) === (t as any));
}
function ye(this: any, t: any): any {
  return (t as any) === ("event" as any) ? {
    type: t,
    buffered: !0,
    durationThreshold: ke
  } : {
    type: t,
    buffered: !0
  };
}
function ve(this: any): any {
  return (typeof self as any) < ("u" as any) && (typeof (self as any).requestAnimationFrame as any) == ("function" as any);
}
function Se(this: any, t: any): any {
  switch (t) {
    case 1:
      return "immediate";
    case 2:
      return "user-blocking";
    case 5:
      return "idle";
    default:
      return "normal";
  }
}
function Ie(this: any, t: any, o: any): any {
  return ((t as any).kind as any) === ("navigation" as any) && ((o as any).kind as any) === ("navigation" as any) && ((t as any).action as any) === ((o as any).action as any) && ((t as any).surface as any) === ((o as any).surface as any) && ((t as any).entrypointId as any) === ((o as any).entrypointId as any);
}
function _t(this: any, t: any, o: any): any {
  return (o as any) == (null as any) || ((t as any).kind as any) !== ("navigation" as any) || ((t as any).action as any) !== ("open" as any) ? !1 : ((At as any).some as any)((a: any): any => {
    const l: any = ((o as any).surfaces as any)[a];
    return (a as any) === ((t as any).surface as any) && ((l as any).pending?.link.entrypointId as any) === ((t as any).entrypointId as any);
  });
}
function Ft(this: any, t: any, o: any, a: any, l: any): any {
  return {
    root: {
      kind: "navigation",
      action: "open",
      surface: t,
      entrypointId: o,
      startMs: a
    },
    ticket: l
  };
}
function Ne(this: any, t: any): any {
  const o: any = [],
    a: any = [],
    {
      startMs: l
    }: any = t;
  for (const u of At) {
    const E: any = (((t as any).previous as any).surfaces as any)[u],
      p: any = (((t as any).next as any).surfaces as any)[u];
    if (((p as any).pending as any) != (null as any) && ((p as any).pending as any) !== ((E as any).pending as any)) ((o as any).push as any)((Ft as any)(u, (((p as any).pending as any).link as any).entrypointId, l, ((p as any).pending as any).ticket));else if (((p as any).committed as any) !== ((E as any).committed as any)) if (((p as any).committed as any) != (null as any)) {
      const g: any = ((E as any).pending as any) != (null as any) && (Kt as any)(((E as any).pending as any).link, (p as any).committed) ? (E as any).pending : null;
      ((o as any).push as any)((Ft as any)(u, ((p as any).committed as any).entrypointId, l, g?.ticket ?? null)), (g as any) != (null as any) && ((a as any).push as any)({
        ticket: (g as any).ticket,
        entrypointId: ((p as any).committed as any).entrypointId,
        surface: u,
        commitClass: (t as any).commitClass,
        startMs: l
      });
    } else ((E as any).committed as any) != (null as any) && ((o as any).push as any)({
      root: {
        kind: "navigation",
        action: "close",
        surface: u,
        entrypointId: ((E as any).committed as any).entrypointId,
        startMs: l
      },
      ticket: null
    });
  }
  return {
    roots: o,
    presents: a
  };
}
function Oe(this: any, t: any, o: any): any {
  if (((t as any).kind as any) !== ("navigation" as any) || ((t as any).action as any) !== ("open" as any)) return null;
  const a: any = ((o as any).find as any)((l: any): any => (((l as any).detail as any).kind as any) === ("presented" as any) && (((l as any).detail as any).entrypointId as any) === ((t as any).entrypointId as any));
  return (a as any) == (null as any) ? null : (h as any)(((v as any)(((a as any).startMs as any) + ((a as any).durationMs as any)) as any) - ((v as any)((t as any).startMs) as any));
}
function _e(this: any, t: any): any {
  return ((t as any).kind as any) === ("transition" as any) ? "transition" : "restore";
}
function Fe(this: any, t: any): any {
  const o: any = (t as any).clock ?? zt,
    a: any = (t as any).floorMs ?? (_ as any).floorMs,
    l: any = (Wt as any)({
      name: "tracing.quiet",
      idleMs: (t as any).quietMs ?? (_ as any).quietMs,
      clock: o
    }),
    u: any = (Gt as any)({
      name: "tracing.cap",
      ttlMs: (t as any).capMs ?? (_ as any).capMs,
      clock: o
    }),
    E: any = (Yt as any)({
      name: "tracing.presented",
      clock: o,
      park: "hidden"
    }),
    p: any = ((((((Math as any).random as any)() as any).toString as any)(36) as any).slice as any)(2, 10) || "trace";
  let {
      sampling: g
    }: any = t,
    F: any = (t as any).sinks,
    S: any = !1,
    T: any = !1,
    s: any = null,
    B: any = 0,
    H: any = 0,
    P: any = 0,
    b: any = null,
    M: any = null,
    y: any = "none",
    N: any = null,
    A: any = null;
  const w: any = [],
    K: any = [],
    V: any = [],
    j: any = new (Map as any)();
  let O: any = null,
    X: any = !1;
  const x: any = new (Map as any)(),
    q: any = new (Map as any)(),
    it: any = [],
    $: any = {
      previousHookFailures: 0,
      collectorFailures: 0,
      lastError: null
    },
    m: any = {
      tracesClosed: 0,
      tracesExported: 0,
      tracesUnexported: 0,
      tracesWithoutCommits: 0,
      commits: 0,
      spans: 0,
      folded: 0,
      dropped: 0,
      absorbedCommits: 0,
      droppedTraces: 0,
      cappedCommits: 0,
      maxCommitFibers: 0,
      fibersVisited: 0,
      handlerMs: 0,
      droppedMeasures: 0,
      sinkFailures: 0
    },
    at: any = {
      navigation: 0,
      selection: 0,
      interaction: 0
    },
    W: any = (): any => (H += 1, (te as any)(H)),
    ct: any = (): any => (B += 1, (Qt as any)(`${p}-${B}`)),
    lt: any = (e: any, n: any): any => {
      for (const r of F) try {
        (n as any)(r, e);
      } catch (i: any) {
        (m as any).sinkFailures += 1, ($ as any).lastError = i;
      }
    },
    ut: any = (): any => {
      if (((F as any).length as any) !== (0 as any)) {
        if ((N as any) != (null as any)) {
          const e: any = N;
          N = null, (lt as any)(e, (n: any, r: any): any => (n as any).acceptBoot?.(r));
        }
        for (const e of ((w as any).splice as any)(0)) (lt as any)(e, (n: any, r: any): any => ((n as any).accept as any)(r));
      }
    },
    dt: any = (e: any): any => {
      (m as any).tracesClosed += 1, (m as any).spans += ((e as any).spans as any).length, (m as any).folded += (e as any).folded;
    },
    ft: any = (): any => {
      (m as any).tracesExported += 1, (ut as any)(), (g as any) != (null as any) && ((m as any).tracesExported as any) >= ((g as any).maxTraces as any) && (Tt as any)();
    },
    Lt: any = (e: any): any => {
      if (T) {
        (It as any)((e as any).root) && ((at as any)[((e as any).root as any).kind] += 1);
        return;
      }
      const n: any = {
        version: Rt,
        ...e,
        ...(Ot as any)(((e as any).root as any).startMs, (e as any).spans),
        sampleRate: g?.sampleRate ?? 1
      };
      if ((dt as any)(n), (g as any) != (null as any) && !(It as any)((n as any).root)) {
        (m as any).tracesUnexported += 1;
        return;
      }
      if ((g as any) != (null as any) && ((n as any).commitCount as any) === (0 as any)) {
        (m as any).tracesWithoutCommits += 1;
        return;
      }
      ((K as any).push as any)(n), ((K as any).length as any) > ((_ as any).queueLength as any) && ((K as any).shift as any)(), ((w as any).push as any)(n), ((w as any).length as any) > ((_ as any).queueLength as any) && (((w as any).shift as any)(), (m as any).droppedTraces += 1), (ft as any)();
    },
    Q: any = (e: any): any => {
      if (T) return;
      const n: any = {
        version: Rt,
        ...e,
        ...(Ot as any)((e as any).startMs, (e as any).spans),
        sampleRate: g?.sampleRate ?? 1
      };
      (dt as any)(n), A = n, N = n, (ft as any)();
    },
    mt: any = (e: any, n: any, r: any, i: any): any => {
      for (const c of ((n as any).values as any)()) {
        const d: any = (Y as any)({
          startMs: (c as any).startMs,
          durationMs: ((c as any).endMs as any) - ((c as any).startMs as any)
        });
        if (((c as any).selfMs as any) < (a as any)) {
          (e as any).folded += 1;
          continue;
        }
        (((e as any).spans as any).push as any)({
          id: (W as any)(),
          parent: i,
          startMs: (h as any)((d as any).start),
          durationMs: (h as any)(((d as any).end as any) - ((d as any).start as any)),
          selfMs: (h as any)(((Math as any).min as any)((v as any)((c as any).selfMs), ((d as any).end as any) - ((d as any).start as any))),
          detail: {
            kind: "component-effects",
            component: (c as any).component,
            phase: r
          }
        });
      }
      ((n as any).clear as any)();
    },
    J: any = (): any => {
      const e: any = O;
      (e as any) != (null as any) && (O = null, (mt as any)((e as any).trace, (e as any).drafts, "passive", (e as any).commit), (e as any).publish?.());
    },
    Dt: any = (e: any): any => {
      const n: any = ((e as any).phase as any) === ("layout" as any) ? s : O?.trace;
      if ((n as any) == (null as any)) return;
      const r: any = ((o as any).monotonicNow as any)(),
        i: any = ((e as any).phase as any) === ("layout" as any) ? j : O?.drafts,
        c: any = (ee as any)((e as any).fiber);
      if ((i as any) != (null as any) && (c as any) != (null as any)) {
        const d: any = ((i as any).get as any)((c as any).fiber);
        (d as any) != (null as any) ? ((d as any).startMs = ((Math as any).min as any)((d as any).startMs, (e as any).startMs), (d as any).endMs = ((Math as any).max as any)((d as any).endMs, (e as any).endMs), (d as any).selfMs += (e as any).selfMs) : ((i as any).size as any) < ((_ as any).fiberCap as any) ? ((i as any).set as any)((c as any).fiber, {
          component: (c as any).id,
          startMs: (e as any).startMs,
          endMs: (e as any).endMs,
          selfMs: (e as any).selfMs
        }) : (n as any).folded += 1;
      }
      (m as any).handlerMs += (((o as any).monotonicNow as any)() as any) - (r as any);
    },
    pt: any = (e: any = !1): any => {
      if ((!e || (O?.trace as any) !== (s as any)) && (J as any)(), (s as any) == (null as any)) return null;
      for (const [r, i] of q) ((r as any).dispose as any)(), (et as any)(i);
      ((q as any).clear as any)(), (m as any).droppedMeasures += (x as any).size, ((x as any).clear as any)();
      const n: any = s;
      return s = null, (((n as any).quiet as any).dispose as any)(), (((n as any).cap as any).dispose as any)(), n;
    },
    Mt: any = (e: any, n: any, r: any): any => ({
      id: (e as any).id,
      startMs: (n as any).startMs,
      endMs: (C as any)(((o as any).monotonicNow as any)()),
      closedBy: r,
      spans: (e as any).spans,
      measures: (e as any).measures,
      folded: (e as any).folded,
      dropped: (e as any).dropped
    }),
    Z: any = (e: any): any => {
      const n: any = (pt as any)((e as any) === ("superseded" as any));
      if ((n as any) == (null as any)) return;
      const {
        id: r,
        root: i,
        ticket: c,
        spans: d,
        measures: U,
        dropped: z
      }: any = n;
      if (((i as any).kind as any) === ("boot" as any)) {
        (Q as any)((Mt as any)(n, i, e));
        return;
      }
      const R: any = (C as any)(((o as any).monotonicNow as any)()),
        I: any = (Oe as any)(i, U),
        {
          dismissedMs: L
        }: any = n,
        f: any = (k: any): any => {
          const {
              folded: G
            }: any = n,
            Ut: any = {
              id: r,
              root: ((i as any).kind as any) === ("navigation" as any) ? {
                ...i,
                absorbedInputs: (n as any).absorbedInputs
              } : i,
              endMs: k,
              closedBy: e,
              spans: d,
              folded: G,
              dropped: z,
              measures: U,
              ...((c as any) == (null as any) ? {} : {
                ticket: c
              }),
              ...((I as any) == (null as any) ? {} : {
                presentedMs: I
              }),
              ...((L as any) == (null as any) ? {} : {
                dismissedMs: L
              })
            };
          (Lt as any)(Ut);
        };
      (O?.trace as any) === (n as any) ? (O as any).publish = (): any => (f as any)(((d as any).reduce as any)((k: any, G: any): any => ((Math as any).max as any)(k, (C as any)(((G as any).startMs as any) + ((G as any).durationMs as any))), R)) : (f as any)(R);
    },
    Bt: any = (): any => {
      (s as any) != (null as any) && (_t as any)((s as any).root, M) ? (((s as any).quiet as any).kick as any)() : (Z as any)("quiet");
    },
    Ht: any = (): any => {
      if ((s?.root.kind as any) !== ("boot" as any)) return;
      const e: any = (pt as any)();
      (e?.root.kind as any) === ("boot" as any) && (Q as any)((Mt as any)(e, (e as any).root, "presented"));
    },
    bt: any = (e: any, n: any): any => {
      s = {
        id: (ct as any)(),
        root: e,
        ticket: n,
        spans: [],
        measures: [],
        folded: 0,
        dropped: P,
        effectsByBoundary: new (Map as any)(),
        quiet: ((e as any).kind as any) === ("boot" as any) ? me : ((l as any).arm as any)(Bt),
        cap: ((u as any).arm as any)("trace", (): any => (Z as any)("cap")),
        presentedAtCommit: !1,
        absorbed: !1,
        absorbedInputs: 0,
        absorbedInput: null,
        dismissing: !1,
        dismissedMs: null
      }, P = 0;
    },
    tt: any = (e: any): any => {
      if ((s as any) == (null as any)) {
        (m as any).droppedMeasures += 1;
        return;
      }
      (((s as any).measures as any).push as any)({
        startMs: (C as any)((e as any).startMs),
        durationMs: (C as any)((e as any).durationMs),
        detail: (e as any).detail
      }), !(s as any).absorbed && !(Te as any)((e as any).detail) && (((s as any).quiet as any).kick as any)();
    },
    Vt: any = (e: any): any => {
      if (!(Re as any)((e as any).entryType)) return;
      const n: any = ((Ce as any)[(e as any).entryType] as any)(e);
      if ((n as any) != (null as any)) {
        if ((s as any) == (null as any) || ((C as any)(((e as any).startTime as any) + ((e as any).duration as any)) as any) < (((s as any).root as any).startMs as any)) {
          (m as any).droppedMeasures += 1;
          return;
        }
        (tt as any)({
          startMs: (e as any).startTime,
          durationMs: (e as any).duration,
          detail: n
        });
      }
    },
    et: any = (e: any): any => {
      const {
        startMs: n,
        ...r
      }: any = e;
      (tt as any)({
        startMs: n,
        durationMs: (((o as any).monotonicNow as any)() as any) - (n as any),
        detail: {
          kind: "presented",
          ...r
        }
      });
    },
    jt: any = (e: any): any => {
      if (!(ve as any)()) {
        (et as any)(e);
        return;
      }
      const n: any = ((E as any).arm as any)((): any => (((q as any).delete as any)(n), (et as any)(e), "done"));
      ((q as any).set as any)(n, e);
    },
    nt: any = (e: any): any => {
      if (S) return;
      const n: any = {
          ...(e as any).root,
          startMs: (C as any)(((e as any).root as any).startMs)
        },
        r: any = s;
      if ((r as any) != (null as any)) {
        const {
          root: i
        }: any = r;
        if (((i as any).kind as any) === ("boot" as any)) return;
        const c: any = (Ie as any)(i, n);
        if (c || (((n as any).startMs as any) - ((i as any).startMs as any) as any) <= ((_ as any).refineMs as any)) {
          (Nt as any)(i, n) && ((Me as any)(i, n) || ((r as any).dismissing = !1, (r as any).dismissedMs = null), (r as any).root = {
            ...n,
            startMs: ((Math as any).min as any)((i as any).startMs, (n as any).startMs)
          }, (r as any).ticket = (e as any).ticket ?? (r as any).ticket), c && ((r as any).absorbed = !1), (((r as any).quiet as any).kick as any)();
          return;
        }
        if (((i as any).kind as any) === ("navigation" as any) && ((n as any).kind as any) === ("interaction" as any)) {
          (r as any).absorbed = !0;
          const d: any = (r as any).absorbedInput;
          (d as any) != (null as any) && (((n as any).startMs as any) - ((d as any).startMs as any) as any) <= ((_ as any).refineMs as any) ? (Nt as any)(d, n) && ((r as any).absorbedInput = {
            ...n,
            startMs: ((Math as any).min as any)((d as any).startMs, (n as any).startMs)
          }) : ((r as any).absorbedInput = n, (r as any).absorbedInputs += 1);
          return;
        }
        if ((Z as any)("superseded"), S) return;
      }
      (bt as any)(n, (e as any).ticket);
    },
    kt: any = (fe as any)({
      onCommit: (e: any, n: any): any => {
        const r: any = ((o as any).monotonicNow as any)();
        if ((m as any).commits += 1, (J as any)(), (s as any) == (null as any) || (s as any).absorbed && !(_t as any)((s as any).root, M)) {
          (s as any) == (null as any) ? ((m as any).dropped += 1, P += 1) : (m as any).absorbedCommits += 1, X = (s as any) != (null as any), (V as any).length = 0, ((j as any).clear as any)();
          return;
        }
        X = !1;
        const i: any = (W as any)(),
          c: any = (ne as any)(e, {
            floorMs: a,
            fiberCap: (_ as any).fiberCap,
            parent: i,
            nextId: W
          });
        (m as any).fibersVisited += (c as any).fibersVisited, (m as any).maxCommitFibers = ((Math as any).max as any)((m as any).maxCommitFibers, (c as any).fibersVisited), (c as any).capped && ((m as any).cappedCommits += 1);
        const d: any = (v as any)(((o as any).monotonicNow as any)()),
          U: any = (((c as any).spans as any).map as any)((f: any): any => ({
            span: f,
            interval: (Y as any)(f)
          })),
          z: any = ((V as any).map as any)((f: any): any => ({
            effect: f,
            interval: (Y as any)({
              startMs: (f as any).commitMs,
              durationMs: (f as any).effectMs
            })
          }));
        (V as any).length = 0;
        let R: any = d,
          I: any = d,
          L: any = 0;
        for (const {
          span: f,
          interval: k
        } of U) R = ((Math as any).min as any)(R, (k as any).start), I = ((Math as any).max as any)(I, (k as any).end), ((f as any).parent as any) === (i as any) && (L += ((k as any).end as any) - ((k as any).start as any));
        for (const {
          interval: f
        } of z) R = ((Math as any).min as any)(R, (f as any).start), I = ((Math as any).max as any)(I, (f as any).end), L += ((f as any).end as any) - ((f as any).start as any);
        for (const f of ((j as any).values as any)()) {
          const k: any = (Y as any)({
            startMs: (f as any).startMs,
            durationMs: ((f as any).endMs as any) - ((f as any).startMs as any)
          });
          R = ((Math as any).min as any)(R, (k as any).start), I = ((Math as any).max as any)(I, (k as any).end);
        }
        (R as any) < ((v as any)(((s as any).root as any).startMs) as any) && ((s as any).root = {
          ...(s as any).root,
          startMs: (h as any)(R)
        }), (s as any).dismissing && ((s as any).dismissing = !1, (s as any).dismissedMs = (h as any)((I as any) - ((v as any)(((s as any).root as any).startMs) as any))), (((s as any).spans as any).push as any)({
          id: i,
          parent: null,
          startMs: (h as any)(R),
          durationMs: (h as any)((I as any) - (R as any)),
          selfMs: (h as any)(((Math as any).max as any)(0, ((I as any) - (R as any) as any) - (L as any))),
          detail: {
            kind: "commit",
            priority: (Se as any)(n)
          }
        });
        for (const {
          span: f,
          interval: k
        } of U) (((s as any).spans as any).push as any)((be as any)(f, k));
        (s as any).folded += (c as any).folded, (((s as any).effectsByBoundary as any).clear as any)();
        for (const {
          effect: f,
          interval: k
        } of z) (((s as any).effectsByBoundary as any).set as any)((f as any).boundary, ((s as any).spans as any).length), (((s as any).spans as any).push as any)({
          id: (W as any)(),
          parent: i,
          startMs: (h as any)((k as any).start),
          durationMs: (h as any)(((k as any).end as any) - ((k as any).start as any)),
          selfMs: (h as any)(((k as any).end as any) - ((k as any).start as any)),
          detail: {
            kind: "effects",
            boundary: (f as any).boundary,
            passiveMs: 0
          }
        });
        (mt as any)(s, j, "layout", i), O = {
          trace: s,
          commit: i,
          drafts: new (Map as any)(),
          publish: null
        }, (m as any).handlerMs += (((o as any).monotonicNow as any)() as any) - (r as any), (s as any).presentedAtCommit ? (Ht as any)() : (((s as any).quiet as any).kick as any)();
      },
      onPostCommit: (): any => {
        (J as any)(), (s?.absorbed as any) === (!1 as any) && (((s as any).quiet as any).kick as any)();
      },
      onComponentEffect: Dt
    }, $),
    ht: any = (($t as any).map as any)((e: any): any => ({
      event: e,
      listener: (r: any): any => {
        const i: any = (Jt as any)((r as any).target);
        (nt as any)({
          root: {
            kind: "interaction",
            event: e,
            startMs: (r as any).timeStamp,
            ...((M as any) == (null as any) ? {} : {
              route: (Zt as any)(M)
            }),
            ...((i as any) == (null as any) ? {} : {
              target: i
            })
          },
          ticket: null
        });
      }
    }));
  if ((typeof document as any) < ("u" as any)) for (const {
    event: e,
    listener: n
  } of ht) ((document as any).addEventListener as any)(e, n, {
    capture: !0,
    passive: !0
  });
  const Et: any = [];
  if ((typeof PerformanceObserver as any) < ("u" as any)) {
    const e: any = (PerformanceObserver as any).supportedEntryTypes;
    for (const n of qt) {
      if (!((e as any).includes as any)(n)) continue;
      const r: any = new (PerformanceObserver as any)((i: any): any => {
        for (const c of ((i as any).getEntries as any)()) (Vt as any)(c);
      });
      ((r as any).observe as any)((ye as any)(n)), ((Et as any).push as any)(r);
    }
  }
  const Ct: any = {
      now: (): any => ((o as any).monotonicNow as any)(),
      record: tt
    },
    gt: any = (e: any): any => {
      S || T || ((it as any).push as any)(((e as any).attach as any)(Ct));
    };
  ((t as any).measures as any) != (null as any) && (gt as any)((t as any).measures);
  const Tt: any = (): any => {
    if (!T) {
      T = !0, ((kt as any).dispose as any)();
      for (const e of ((it as any).splice as any)(0)) (e as any)();
      for (const e of Et) ((e as any).disconnect as any)();
      for (const e of ((q as any).keys as any)()) ((e as any).dispose as any)();
      ((q as any).clear as any)(), (V as any).length = 0, ((j as any).clear as any)(), O = null, ((x as any).clear as any)();
    }
  };
  return {
    recorder: Ct,
    attachMeasures: gt,
    disableSampling(): any {
      g = void 0;
    },
    setSinks(e: any): any {
      S || (F = e, (ut as any)());
    },
    noteSelection(): any {
      (nt as any)({
        root: {
          kind: "selection",
          startMs: ((o as any).monotonicNow as any)()
        },
        ticket: null
      });
    },
    noteBoot(e: any): any {
      if (S || T || (y as any) === ("recorded" as any)) return;
      const n: any = (C as any)((e as any).startMs);
      if (((e as any).presentedMs as any) == (null as any)) {
        (y as any) === ("none" as any) && (s as any) == (null as any) && ((bt as any)({
          kind: "boot",
          startMs: n
        }, null), y = "open");
        return;
      }
      (y as any) === ("none" as any) ? (Q as any)({
        id: (ct as any)(),
        startMs: n,
        endMs: (C as any)((e as any).presentedMs),
        closedBy: "presented",
        spans: [],
        measures: [],
        folded: 0,
        dropped: 0
      }) : (s?.root.kind as any) === ("boot" as any) && ((s as any).presentedAtCommit = !0), y = "recorded";
    },
    attachNavigation(e: any): any {
      if (S || T) return;
      b?.();
      let n: any = ((e as any).getCanonicalSnapshot as any)();
      M = n, b = ((e as any).subscribe as any)((r: any): any => {
        const i: any = ((e as any).getCanonicalSnapshot as any)();
        M = i;
        const c: any = (Ne as any)({
          previous: n,
          next: i,
          commitClass: (_e as any)(r),
          startMs: ((o as any).monotonicNow as any)()
        });
        for (const d of (c as any).roots) (nt as any)(d);
        if (!T) for (const d of (c as any).presents) ((x as any).set as any)((d as any).surface, d);
        n = i;
      });
    },
    noteBoundaryCommit(e: any, n: any): any {
      if (!(S || T)) {
        ((V as any).push as any)({
          boundary: e,
          ...n
        });
        for (const [r, i] of x) ((i as any).entrypointId as any) === (e as any) && (((x as any).delete as any)(r), (jt as any)(i));
      }
    },
    noteBoundaryPostCommit(e: any, n: any): any {
      const r: any = O?.trace ?? (X ? null : s);
      if ((r as any) == (null as any)) return;
      const i: any = (((r as any).effectsByBoundary as any).get as any)(e);
      if ((i as any) == (null as any)) return;
      const c: any = ((r as any).spans as any)[i];
      (c as any) == (null as any) || (((c as any).detail as any).kind as any) !== ("effects" as any) || (((r as any).spans as any)[i] = {
        ...c,
        detail: {
          ...(c as any).detail,
          passiveMs: (C as any)(n)
        }
      }, (((r as any).quiet as any).kick as any)());
    },
    noteBoundaryDismiss(e: any): any {
      if ((s as any) == (null as any) || ((s as any).dismissedMs as any) != (null as any)) return;
      const {
        root: n
      }: any = s;
      ((n as any).kind as any) !== ("navigation" as any) || ((n as any).action as any) !== ("close" as any) || ((n as any).entrypointId as any) === (e as any) && ((s as any).dismissing = !0);
    },
    stats(): any {
      return {
        hookMode: (kt as any).mode,
        detached: T,
        traces: [...K],
        boot: A,
        queued: ((w as any).length as any) + (((N as any) == (null as any) ? 0 : 1) as any),
        rootsAfterCap: {
          ...at
        },
        ...m,
        ...$
      };
    },
    dispose(): any {
      if (S = !0, (Tt as any)(), (s as any) != (null as any) && ((((s as any).quiet as any).dispose as any)(), (((s as any).cap as any).dispose as any)(), s = null), b?.(), b = null, (typeof document as any) < ("u" as any)) for (const {
        event: e,
        listener: n
      } of ht) ((document as any).removeEventListener as any)(e, n, {
        capture: !0
      });
      F = [], (w as any).length = 0, N = null;
    }
  };
}
var Pt: any = {
  maxTracesPerSession: 50
};
function Le(this: any, {
  host: t = globalThis,
  clock: o
}: any = {}): any {
  const a: any = (ie as any)(t);
  return (a as any) === (null as any) ? null : (Fe as any)({
    sinks: [],
    ...((o as any) === (void 0 as any) ? {} : {
      clock: o
    }),
    sampling: {
      sampleRate: (a as any).sampleRate,
      maxTraces: (typeof Pt as any) == ("object" as any) ? (Pt as any).maxTracesPerSession : se
    }
  });
}
export { Le as composeSessionRenderTracing };
//# debugId=97f62647-7caf-4e74-aa04-5adb48c2af17
