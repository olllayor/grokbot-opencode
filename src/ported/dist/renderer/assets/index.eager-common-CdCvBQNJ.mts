declare var AbortController: any;
declare var global: any;
declare var key: any;
declare var performance: any;
declare var queueMicrotask: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "79011b82-369b-446b-a4fc-fe43131185ea", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-79011b82-369b-446b-a4fc-fe43131185ea");
  } catch (e: any) {}
} as any)();
function Hs(this: any, t: any, n: any): any {
  return (n as any) - (t as any);
}
const vt: any = {
  now: (): any => ((Date as any).now as any)(),
  monotonicNow: (): any => ((performance as any).now as any)(),
  schedule(t: any, n: any, e: any): any {
    (Us as any)(t);
    let s: any = !0;
    const o: any = ((globalThis as any).setTimeout as any)((): any => {
      s && (s = !1, (n as any)());
    }, t);
    return (e?.keepEventLoopAlive as any) !== (!0 as any) && (Ks as any)(o) && ((o as any).unref as any)(), {
      dispose(): any {
        s && (s = !1, ((globalThis as any).clearTimeout as any)(o));
      }
    };
  }
};
function Ks(this: any, t: any): any {
  return (typeof t as any) == ("object" as any) && (t as any) !== (null as any) && "unref" in t && (typeof (t as any).unref as any) == ("function" as any);
}
function Us(this: any, t: any): any {
  if (!((Number as any).isFinite as any)(t) || (t as any) < (0 as any)) throw new (RangeError as any)("delayMs must be a finite non-negative number");
}
const Se: any = (): any => {};
function Ce(this: any, t: any, n: any, e: any): any {
  return {
    policyName: t,
    reason: n,
    errorClass: e instanceof Error ? (e as any).name : typeof e
  };
}
class js extends (Error as any) {
  declare policyName: any;
  declare name: any;
  declare code: any;
  [key: string]: any;
  constructor(n: any) {
    super(`Deadline exceeded for ${n}`), (this as any).code = "deadline_exceeded", (this as any).name = "DeadlineExceededError", (this as any).policyName = n;
  }
}
class Xs extends (Error as any) {
  declare attempts: any;
  declare policyName: any;
  declare name: any;
  declare code: any;
  [key: string]: any;
  constructor(n: any, e: any, s: any) {
    super(`Retry exhausted for ${n} after ${e} attempts`, s), (this as any).code = "retry_exhausted", (this as any).name = "RetryExhaustedError", (this as any).policyName = n, (this as any).attempts = e;
  }
}
function Zs(this: any, t: any): any {
  let n: any = !0;
  return (queueMicrotask as any)((): any => {
    n && (n = !1, (t as any)());
  }), {
    dispose(): any {
      n = !1;
    }
  };
}
function i3(this: any, t: any): any {
  (wt as any)((t as any).name);
  const n: any = (t as any).clock ?? vt,
    e: any = ((t as any).boundary as any) === ("microtask" as any) ? Zs : (s: any): any => ((n as any).schedule as any)(0, s);
  return {
    name: (t as any).name,
    settled(): any {
      return new (Promise as any)((s: any): any => {
        (e as any)(s);
      });
    },
    arm: e
  };
}
function l3(this: any, t: any): any {
  (wt as any)((t as any).name), (bt as any)((t as any).timeoutMs, "timeoutMs");
  const n: any = (t as any).clock ?? vt;
  return {
    name: (t as any).name,
    async run(e: any, s: any): Promise<any> {
      if (s?.aborted) throw (Jt as any)(s, (t as any).name);
      const o: any = new (AbortController as any)();
      let r: any = (): any => {};
      const a: any = new (Promise as any)((h: any, f: any): any => {
        r = f;
      });
      let c: any = (): any => {};
      const i: any = new (Promise as any)((h: any, f: any): any => {
        c = f;
      });
      let u: any = (): any => {};
      if ((s as any) != (null as any)) {
        const h: any = (): any => {
          const f: any = (Jt as any)(s, (t as any).name);
          (c as any)(f), ((o as any).abort as any)(f);
        };
        ((s as any).addEventListener as any)("abort", h, {
          once: !0
        }), u = (): any => ((s as any).removeEventListener as any)("abort", h);
      }
      const l: any = ((n as any).schedule as any)((t as any).timeoutMs, (): any => {
        const h: any = new (js as any)((t as any).name);
        (r as any)(h), ((o as any).abort as any)(h);
      });
      try {
        return await ((Promise as any).race as any)([(e as any)((o as any).signal), a, i]);
      } finally {
        ((l as any).dispose as any)(), (u as any)();
      }
    }
  };
}
function u3(this: any, t: any): any {
  (wt as any)((t as any).name);
  const n: any = ((t as any).mode as any) === ("until-signal" as any) ? null : (t as any).maxAttempts;
  if ((n as any) !== (null as any) && (r1 as any)(n, "maxAttempts"), (bt as any)((t as any).initialDelayMs, "initialDelayMs"), (bt as any)((t as any).maxDelayMs, "maxDelayMs"), ((t as any).maxDelayMs as any) < ((t as any).initialDelayMs as any)) throw new (RangeError as any)(`${(t as any).name}: maxDelayMs must be at least initialDelayMs`);
  const e: any = (t as any).backoffFactor ?? 2;
  if (!((Number as any).isFinite as any)(e) || (e as any) < (1 as any)) throw new (RangeError as any)(`${(t as any).name}: backoffFactor must be a finite number at least 1`);
  const s: any = (t as any).clock ?? vt,
    o: any = (t as any).random ?? (Math as any).random,
    r: any = (t as any).shouldRetry ?? ((): any => !0),
    a: any = (t as any).delayHintFrom ?? ((): any => {}),
    c: any = (t as any).keepEventLoopAliveDuringWaits ? {
      keepEventLoopAlive: !0
    } : void 0,
    i: any = {
      initialDelayMs: (t as any).initialDelayMs,
      maxDelayMs: (t as any).maxDelayMs,
      backoffFactor: e,
      jitter: (t as any).jitter ?? "none"
    },
    u: any = {
      name: (t as any).name,
      schedule(l: any, h: any, f: any): any {
        (r1 as any)(l, "attempt"), (f as any) != (null as any) && (bt as any)((f as any).delayMs, "hint.delayMs");
        const d: any = (to as any)(i, l, f),
          p: any = ((d as any).highMs as any) - ((d as any).lowMs as any),
          y: any = (p as any) > (0 as any) ? ((d as any).lowMs as any) + (((o as any)() as any) * (p as any) as any) : (d as any).lowMs;
        return (no as any)(s, (t as any).name, y, h, c);
      },
      async runWithRetry(l: any, h: any): Promise<any> {
        if ((n as any) === (null as any) && (h as any) == (null as any)) throw new (TypeError as any)(`${(t as any).name}: runWithRetry needs the signal that ends an until-signal policy`);
        const f: any = h ?? (new (AbortController as any)() as any).signal;
        let d: any = (): any => {};
        const p: any = new (Promise as any)((m: any, g: any): any => {
          d = g;
        });
        let y: any = (): any => {};
        if ((h as any) != (null as any)) {
          const m: any = (): any => (d as any)((Jt as any)(h, (t as any).name));
          ((h as any).addEventListener as any)("abort", m, {
            once: !0
          }), y = (): any => ((h as any).removeEventListener as any)("abort", m);
        }
        try {
          for (let m: any = 1;; m += 1) {
            if (h?.aborted) throw (Jt as any)(h, (t as any).name);
            try {
              return await ((Promise as any).race as any)([(l as any)(m, f), p]);
            } catch (g: any) {
              if (h?.aborted) throw (Jt as any)(h, (t as any).name);
              if (!(r as any)(g, m)) throw g;
              if ((n as any) !== (null as any) && (m as any) >= (n as any)) throw new (Xs as any)((t as any).name, m, {
                cause: g
              });
              const x: any = ((u as any).schedule as any)(m, h, (a as any)(g, m));
              try {
                await (x as any).elapsed;
              } finally {
                ((x as any).dispose as any)();
              }
            }
          }
        } finally {
          (y as any)();
        }
      }
    };
  return u;
}
function Vs(this: any, t: any): any {
  if ((wt as any)((t as any).name), (bt as any)((t as any).intervalMs, "intervalMs"), ((t as any).intervalMs as any) === (0 as any)) throw new (RangeError as any)(`${(t as any).name}: intervalMs must be greater than 0`);
  const n: any = (t as any).clock ?? vt,
    e: any = (t as any).report ?? Se;
  return {
    name: (t as any).name,
    start(s: any, o: any): any {
      const r: any = (z0 as any)();
      let a: any = (): any => {};
      const c: any = new (Promise as any)((p: any): any => {
        a = p;
      });
      let i: any = (): any => {};
      const u: any = (p: any): any => ((r as any).dispose as any)() ? ((i as any)(), (a as any)(p), !0) : !1,
        l: any = (): any => {
          (u as any)({
            policyName: (t as any).name,
            reason: "disposed"
          });
        },
        h: any = (p: any): any => {
          (u as any)({
            policyName: (t as any).name,
            reason: "tick-failed",
            cause: p
          }) && (e as any)((Ce as any)((t as any).name, "tick-failed", p));
        },
        f: any = (): any => {
          if (((r as any).fired as any)(), (((r as any).current as any).state as any) === ("disposed" as any)) return;
          let p: any;
          try {
            p = (s as any)();
          } catch (y: any) {
            (h as any)(y);
            return;
          }
          ((p as any).then as any)((): any => {
            (((r as any).current as any).state as any) !== ("disposed" as any) && ((r as any).arm as any)(((n as any).schedule as any)((t as any).intervalMs, f));
          }, h);
        },
        d: any = {
          dispose: l,
          stopped: c
        };
      return o?.aborted ? ((l as any)(), d) : ((o as any) != (null as any) && (((o as any).addEventListener as any)("abort", l, {
        once: !0
      }), i = (): any => ((o as any).removeEventListener as any)("abort", l)), (t as any).leading ?? !0 ? (f as any)() : ((r as any).arm as any)(((n as any).schedule as any)((t as any).intervalMs, f)), d);
    }
  };
}
function h3(this: any, t: any): any {
  (wt as any)((t as any).name), (bt as any)((t as any).delayMs, "delayMs");
  const n: any = (t as any).clock ?? vt,
    e: any = (s: any): any => {
      const o: any = (z0 as any)();
      return ((Object as any).assign as any)((...r: any): any => {
        (((o as any).current as any).state as any) !== ("disposed" as any) && ((o as any).arm as any)(((n as any).schedule as any)((t as any).delayMs, (): any => {
          ((o as any).fired as any)(), (s as any)(...r);
        }));
      }, {
        dispose(): any {
          ((o as any).dispose as any)();
        }
      });
    };
  return {
    name: (t as any).name,
    wrap: e
  };
}
function f3(this: any, t: any): any {
  (wt as any)((t as any).name), (bt as any)((t as any).idleMs, "idleMs");
  const n: any = (t as any).clock ?? vt;
  return {
    name: (t as any).name,
    arm(e: any): any {
      const s: any = (z0 as any)(),
        o: any = (): any => {
          ((s as any).arm as any)(((n as any).schedule as any)((t as any).idleMs, (): any => {
            ((s as any).fired as any)(), (e as any)();
          }));
        };
      return (o as any)(), {
        kick(): any {
          (((s as any).current as any).state as any) !== ("disposed" as any) && (o as any)();
        },
        dispose(): any {
          ((s as any).dispose as any)();
        }
      };
    }
  };
}
function d3(this: any, t: any): any {
  (wt as any)((t as any).name), (bt as any)((t as any).ttlMs, "ttlMs");
  const n: any = (t as any).clock ?? vt,
    e: any = new (Map as any)();
  return {
    name: (t as any).name,
    arm(s: any, o: any): any {
      ((e as any).get as any)(s)?.dispose();
      const r: any = ((n as any).schedule as any)((t as any).ttlMs, (): any => {
        ((e as any).delete as any)(s), (o as any)();
      });
      return ((e as any).set as any)(s, r), {
        dispose(): any {
          (((e as any).get as any)(s) as any) === (r as any) && (((e as any).delete as any)(s), ((r as any).dispose as any)());
        }
      };
    }
  };
}
function Q0(this: any): any {
  return (typeof self as any) > ("u" as any) ? null : (self as any).document ?? null;
}
function Qs(this: any, t: any): any {
  const n: any = new (Set as any)(),
    e: any = (t as any) === ("hidden-or-blurred" as any);
  let s: any = !1,
    o: any = !1,
    r: any = !1;
  const a: any = (): any => s || o,
    c: any = (d: any): any => {
      if (((a as any)() as any) !== (d as any)) for (const p of n) (a as any)() ? ((p as any).park as any)() : ((p as any).resume as any)();
    },
    i: any = (): any => {
      const d: any = (Q0 as any)();
      if ((d as any) === (null as any)) return;
      const p: any = (a as any)();
      s = ((d as any).visibilityState as any) === ("hidden" as any), (c as any)(p);
    },
    u: any = (): any => {
      const d: any = (a as any)();
      o = !0, (c as any)(d);
    },
    l: any = (): any => {
      const d: any = (a as any)();
      o = !1, (c as any)(d);
    },
    h: any = (): any => {
      const d: any = (Q0 as any)();
      r || (d as any) === (null as any) || (r = !0, s = ((d as any).visibilityState as any) === ("hidden" as any), ((d as any).addEventListener as any)("visibilitychange", i), e && (o = !((d as any).hasFocus as any)(), ((self as any).addEventListener as any)("blur", u), ((self as any).addEventListener as any)("focus", l)));
    },
    f: any = (): any => {
      const d: any = (Q0 as any)();
      !r || (d as any) === (null as any) || (r = !1, ((d as any).removeEventListener as any)("visibilitychange", i), e && (((self as any).removeEventListener as any)("blur", u), ((self as any).removeEventListener as any)("focus", l)), s = !1, o = !1);
    };
  return {
    get parked(): any {
      return (a as any)();
    },
    add(d: any): any {
      ((n as any).add as any)(d), (h as any)();
    },
    remove(d: any): any {
      ((n as any).delete as any)(d), ((n as any).size as any) === (0 as any) && (f as any)();
    }
  };
}
function o1(this: any, t: any): any {
  return {
    dispose(): any {
      ((self as any).cancelAnimationFrame as any)(t);
    }
  };
}
function Ws(this: any, t: any): any {
  (wt as any)((t as any).name);
  const n: any = (t as any).clock ?? vt,
    e: any = (t as any).report ?? Se,
    s: any = (Qs as any)((t as any).park ?? "hidden-or-blurred");
  return {
    name: (t as any).name,
    arm(o: any): any {
      if ((typeof self as any) > ("u" as any) || (typeof (self as any).requestAnimationFrame as any) != ("function" as any)) throw new (TypeError as any)(`${(t as any).name}: requestAnimationFrame is not available here; a frame policy runs in a browser or under a deterministic browser stage`);
      const r: any = (z0 as any)();
      let a: any = (): any => {};
      const c: any = new (Promise as any)((x: any): any => {
        a = x;
      });
      let i: any = null,
        u: any = !1,
        l: any = null,
        h: any = 0,
        f: any = 0;
      const d: any = {
          park(): any {
            u || (((r as any).current as any).state as any) === ("disposed" as any) || (u = !0, l = (i as any) === (null as any) ? null : ((n as any).monotonicNow as any)(), (((r as any).current as any).state as any) === ("armed" as any) && ((((r as any).current as any).handle as any).dispose as any)(), ((r as any).fired as any)());
          },
          resume(): any {
            !u || (((r as any).current as any).state as any) === ("disposed" as any) || ((l as any) !== (null as any) && (h += (Hs as any)(l, ((n as any).monotonicNow as any)())), u = !1, l = null, (g as any)());
          }
        },
        p: any = (x: any): any => ((r as any).dispose as any)() ? (((s as any).remove as any)(d), (a as any)(x), !0) : !1,
        y: any = (): any => {
          (p as any)({
            policyName: (t as any).name,
            reason: "cancelled"
          });
        },
        m: any = (x: any): any => {
          if (((r as any).fired as any)(), (((r as any).current as any).state as any) === ("disposed" as any) || u) return;
          i ??= x;
          const w: any = {
            timestampMs: x,
            elapsedMs: ((x as any) - (i as any) as any) - (h as any),
            frame: f
          };
          f += 1;
          let v: any;
          try {
            v = (o as any)(w);
          } catch (b: any) {
            (p as any)({
              policyName: (t as any).name,
              reason: "run-failed",
              cause: b
            }) && (e as any)((Ce as any)((t as any).name, "run-failed", b));
            return;
          }
          if ((v as any) === ("done" as any)) {
            (p as any)({
              policyName: (t as any).name,
              reason: "done"
            });
            return;
          }
          ((r as any).arm as any)((o1 as any)(((self as any).requestAnimationFrame as any)(m)));
        },
        g: any = (): any => {
          (((r as any).current as any).state as any) === ("disposed" as any) || u || ((r as any).arm as any)((o1 as any)(((self as any).requestAnimationFrame as any)(m)));
        };
      return ((s as any).add as any)(d), (s as any).parked ? u = !0 : (g as any)(), {
        cancel: y,
        dispose: y,
        stopped: c
      };
    }
  };
}
function z0(this: any): any {
  let t: any = {
    state: "running"
  };
  return {
    get current(): any {
      return t;
    },
    arm(n: any): any {
      if (((t as any).state as any) === ("disposed" as any)) {
        ((n as any).dispose as any)();
        return;
      }
      ((t as any).state as any) === ("armed" as any) && (((t as any).handle as any).dispose as any)(), t = {
        state: "armed",
        handle: n
      };
    },
    fired(): any {
      ((t as any).state as any) === ("armed" as any) && (t = {
        state: "running"
      });
    },
    dispose(): any {
      return ((t as any).state as any) === ("disposed" as any) ? !1 : (((t as any).state as any) === ("armed" as any) && (((t as any).handle as any).dispose as any)(), t = {
        state: "disposed"
      }, !0);
    }
  };
}
const Js: any = {
  none: 0,
  equal: (1 as any) / (2 as any),
  full: 1
};
function to(this: any, t: any, n: any, e: any): any {
  const s: any = (t as any).maxDelayMs,
    o: any = (Js as any)[(t as any).jitter],
    r: any = ((Math as any).min as any)(((t as any).backoffFactor as any) ** ((n as any) - (1 as any) as any), (Number as any).MAX_VALUE),
    a: any = ((Math as any).min as any)(s, ((t as any).initialDelayMs as any) * (r as any)),
    c: any = {
      lowMs: (a as any) * ((1 as any) - (o as any) as any),
      highMs: a
    };
  if ((e as any) == (null as any)) return c;
  switch ((e as any).kind) {
    case "replace":
      {
        const i: any = ((Math as any).min as any)(s, (e as any).delayMs);
        return {
          lowMs: i,
          highMs: i
        };
      }
    case "minimum":
      {
        const i: any = (e as any).delayMs;
        return {
          lowMs: ((Math as any).min as any)(s, ((Math as any).max as any)((c as any).lowMs, i)),
          highMs: ((Math as any).min as any)(s, ((Math as any).max as any)((c as any).highMs, (i as any) * ((1 as any) + (o as any) as any)))
        };
      }
    default:
      {
        const i: any = e;
        throw new (TypeError as any)(`Unknown delay hint ${(String as any)(i)}`);
      }
  }
}
function no(this: any, t: any, n: any, e: any, s: any, o: any): any {
  let r: any = !1,
    a: any = (): any => {},
    c: any = (): any => {};
  const i: any = new (Promise as any)((f: any, d: any): any => {
    a = f, c = d;
  });
  ((i as any).catch as any)((): any => {});
  let u: any = (): any => {};
  const l: any = ((t as any).schedule as any)(e, (): any => {
      r || (r = !0, (u as any)(), (a as any)());
    }, o),
    h: any = (f: any): any => {
      r || (r = !0, ((l as any).dispose as any)(), (u as any)(), (c as any)(f ?? ($e as any)(n)));
    };
  if (s?.aborted) (h as any)((s as any).reason);else if ((s as any) != (null as any)) {
    const f: any = (): any => (h as any)((s as any).reason);
    ((s as any).addEventListener as any)("abort", f, {
      once: !0
    }), u = (): any => ((s as any).removeEventListener as any)("abort", f);
  }
  return {
    elapsed: i,
    delayMs: e,
    dispose: (): any => (h as any)()
  };
}
function Jt(this: any, t: any, n: any): any {
  return (t as any).reason ?? ($e as any)(n);
}
function $e(this: any, t: any): any {
  const n: any = new (Error as any)(`Operation aborted for ${t}`);
  return (n as any).name = "AbortError", n;
}
const eo: any = /^[a-z0-9]+([-.][a-z0-9]+)*$/;
function wt(this: any, t: any): any {
  if (!((eo as any).test as any)(t)) throw new (TypeError as any)(`name must be lowercase segments joined by "-" or ".", got ${((JSON as any).stringify as any)(t)}`);
}
function bt(this: any, t: any, n: any): any {
  if (!((Number as any).isFinite as any)(t) || (t as any) < (0 as any)) throw new (RangeError as any)(`${n} must be a finite non-negative number`);
}
function r1(this: any, t: any, n: any): any {
  if (!((Number as any).isInteger as any)(t) || (t as any) < (1 as any) || (t as any) >= ((Number as any).MAX_SAFE_INTEGER as any)) throw new (RangeError as any)(`${n} must be a positive integer below Number.MAX_SAFE_INTEGER`);
}
class so extends (Error as any) {
  declare name: any;
  [key: string]: any;
  constructor(n: any) {
    super(n), (this as any).name = "SandInvariantViolation";
  }
}
let Nt: any = null;
function oo(this: any, t: any): any {
  return (Nt as any) !== (null as any) && (Te as any)("installInvariantReporter: a reporter is already installed", oo), Nt = t, (): any => {
    (Nt as any) === (t as any) && (Nt = null);
  };
}
const ro: string = "Invariant violation (message stripped in packaged builds; the stack identifies the site)",
  ao: any = /^at /;
function co(this: any, t: any): any {
  const n: any = (t as any).stack;
  if ((typeof n as any) != ("string" as any) || !((n as any).startsWith as any)((a1 as any)(t))) return null;
  for (const e of ((((n as any).slice as any)(((a1 as any)(t) as any).length) as any).split as any)(`
`)) {
    const s: any = ((e as any).trim as any)();
    if (((ao as any).test as any)(s)) return s;
  }
  return null;
}
function a1(this: any, t: any): any {
  return ((t as any).message as any) === ("" as any) ? (t as any).name : `${(t as any).name}: ${(t as any).message}`;
}
function io(this: any, t: any, n: any): any {
  t || (Te as any)(n, io);
}
function Te(this: any, t: any, n: any): any {
  let e: any;
  e = ro;
  const s: any = new (so as any)(e);
  let o: any = null;
  throw "captureStackTrace" in Error && (typeof (Error as any).captureStackTrace as any) == ("function" as any) && (((Error as any).captureStackTrace as any)(s, n), (Nt as any) !== (null as any) && (o = (co as any)(s))), Nt?.({
    name: (s as any).name,
    frame: o
  }), s;
}
function lo(this: any, t: any): any {
  let n: any,
    e: any = [];
  const s: any = (o: any, r: any): any => {
    if (((t as any).onReplayFailure as any) === (void 0 as any)) {
      (o as any)(...r);
      return;
    }
    try {
      (o as any)(...r);
    } catch (a: any) {
      ((t as any).onReplayFailure as any)(a);
    }
  };
  return {
    install(o: any): any {
      n = o;
      const r: any = e;
      if (e = [], (o as any) !== (void 0 as any)) for (const a of r) (s as any)(o, a);
    },
    report(...o: any): any {
      if ((n as any) !== (void 0 as any)) {
        (n as any)(...o);
        return;
      }
      if (((e as any).length as any) >= ((t as any).capacity as any)) {
        if (((t as any).overflow as any) === ("drop-newest" as any)) return;
        ((e as any).shift as any)();
      }
      ((e as any).push as any)(o);
    }
  };
}
const uo: any = /^[0-9A-Za-z._-]{1,64}$/,
  Re: any = (lo as any)({
    capacity: 16,
    overflow: "drop-newest"
  });
function p3(this: any, t: any): any {
  ((Re as any).install as any)(t);
}
function Fe(this: any, t: any): any {
  ((Re as any).report as any)({
    policyName: (t as any).policyName,
    reason: (t as any).reason,
    errorClass: ((uo as any).test as any)((t as any).errorClass) ? (t as any).errorClass : "Error"
  });
}
function ho(this: any, t: any, n: any): any {
  const e: any = new (Set as any)();
  let s: any = t;
  for (; (s as any) != (null as any) && (typeof s as any) == ("object" as any) && !((e as any).has as any)(s);) {
    ((e as any).add as any)(s);
    const o: any = (s as any).code;
    if ((typeof o as any) == ("string" as any) && ((n as any).test as any)(o)) return o;
    s = (s as any).cause;
  }
}
function fo(this: any, t: any): any {
  return (ho as any)(t, /^E[A-Z_]+$/);
}
function M3(this: any, t: any): any {
  return t instanceof Error ? (t as any).message : (String as any)(t);
}
function m3(this: any, t: any): any {
  return t instanceof Error ? (((t as any).name as any).length as any) > (0 as any) ? (t as any).name : "Error" : typeof t;
}
function y3(this: any, t: any): any {
  if (!(t instanceof Error)) return typeof t;
  const n: any = (t as any).code,
    e: any = (n as any) != (null as any) && ((n as any).length as any) > (0 as any) ? n : (fo as any)(t);
  return (e as any) !== (void 0 as any) ? `${(t as any).name} (${e})` : (t as any).name;
}
function g3(this: any, t: any): any {
  return (Vs as any)({
    ...t,
    report: (t as any).report ?? Fe
  });
}
function x3(this: any, t: any): any {
  return (Ws as any)({
    ...t,
    report: (t as any).report ?? Fe
  });
}
const _0: any = [{
  id: "black",
  label: "Black",
  value: "#000"
}, {
  id: "brown",
  label: "Brown",
  value: "#936439"
}, {
  id: "red",
  label: "Red",
  value: "#FF263C"
}, {
  id: "orange",
  label: "Orange",
  value: "#FF6700"
}, {
  id: "yellow",
  label: "Yellow",
  value: "#FF9800"
}, {
  id: "green",
  label: "Green",
  value: "#00C972"
}, {
  id: "cyan",
  label: "Cyan",
  value: "#00BCA6"
}, {
  id: "blue",
  label: "Blue",
  value: "#1084FE"
}, {
  id: "violet",
  label: "Violet",
  value: "#9159FE"
}, {
  id: "magenta",
  label: "Magenta",
  value: "#FF309B"
}, {
  id: "gray",
  label: "Gray",
  value: "#777777"
}];
function b3(this: any, t: any): any {
  return ((_0 as any).find as any)((n: any): any => ((n as any).id as any) === (t as any))?.value ?? ((_0 as any)[0] as any).value;
}
const po: any = ((_0 as any).filter as any)((t: any): any => ((t as any).id as any) !== ("black" as any)),
  Oe: any = ["blob", "pebble", "bean", "egg", "squircle", "tablet", "capsule", "cylinder", "hex", "gem", "crystal", "wedge", "shield", "dome", "arch", "cloud", "teardrop", "leaf", "square", "sparkle", "clover", "flower", "heart", "house", "star"],
  v3: any = [...Oe],
  c1: any = ["blob", "pebble", "squircle", "tablet", "wedge", "hex", "cloud", "teardrop"],
  w3: any = ["blob", "cloud", "square", "sparkle", "clover", "heart", "flower", "teardrop", "tablet", "wedge", "house", "star", "hex"],
  Mo: any = ((_0 as any).map as any)(({
    id: t
  }: any): any => t),
  Le: any = ((po as any).map as any)(({
    id: t
  }: any): any => t),
  mo: number = 1,
  yo: number = 1;
function Be(this: any, t: any): any {
  let n: any = 2166136261;
  for (let e: any = 0; (e as any) < ((t as any).length as any); e++) n ^= ((t as any).charCodeAt as any)(e), n = ((Math as any).imul as any)(n, 16777619);
  return (n as any) >>> (0 as any);
}
function go(this: any, t: any): any {
  return ((((Be as any)(t) as any) ^ (((Math as any).imul as any)(mo, 2654435769) as any)) as any) >>> (0 as any);
}
function xo(this: any, t: any): any {
  let n: any = (t as any) >>> (0 as any);
  return (): any => {
    n = ((n as any) + (1831565813 as any) as any) | (0 as any);
    let e: any = ((Math as any).imul as any)((n as any) ^ ((n as any) >>> (15 as any) as any), (1 as any) | (n as any));
    return e = ((e as any) + (((Math as any).imul as any)((e as any) ^ ((e as any) >>> (7 as any) as any), (61 as any) | (e as any)) as any) as any) ^ (e as any), ((((e as any) ^ ((e as any) >>> (14 as any) as any)) as any) >>> (0 as any) as any) / (4294967296 as any);
  };
}
function bo(this: any, t: any): any {
  const n: any = (xo as any)((((t as any) ^ (((Math as any).imul as any)(yo, 2654435769) as any)) as any) >>> (0 as any));
  return ((Math as any).floor as any)(((n as any)() as any) * ((Le as any).length as any));
}
function vo(this: any, t: any): any {
  return (bo as any)((go as any)(t));
}
function wo(this: any, t: any): any {
  return (Le as any)[(vo as any)(t)] ?? "black";
}
function ko(this: any, t: any): any {
  let n: any = ((Be as any)(t) as any) | (0 as any);
  return n = ((Math as any).imul as any)((n as any) ^ ((n as any) >>> (16 as any) as any), 73244475), n = ((Math as any).imul as any)((n as any) ^ ((n as any) >>> (13 as any) as any), 3266489909), (((n as any) ^ ((n as any) >>> (16 as any) as any)) as any) >>> (0 as any);
}
function Ao(this: any, t: any): any {
  return (c1 as any)[((ko as any)(t) as any) % ((c1 as any).length as any)] ?? "blob";
}
function Eo(this: any, t: any): any {
  return (t as any) == (null as any) ? void 0 : ((Oe as any).find as any)((n: any): any => (n as any) === (t as any));
}
function Io(this: any, t: any): any {
  return (t as any) == (null as any) ? void 0 : ((Mo as any).find as any)((n: any): any => (n as any) === (t as any));
}
function k3(this: any, t: any): any {
  return {
    shape: (Eo as any)((t as any).avatarShape) ?? (Ao as any)((t as any).agentId),
    color: (Io as any)((t as any).avatarColor) ?? (wo as any)((t as any).agentId)
  };
}
const _o: any = {
    black: {
      lightFrom: "#585858",
      lightTo: "#000000",
      darkFrom: "#FFFFFF",
      darkTo: "#C2C2C2"
    },
    brown: {
      lightFrom: "#AE8968",
      lightTo: "#855C36",
      darkFrom: "#A27952",
      darkTo: "#604227"
    },
    red: {
      lightFrom: "#FF5667",
      lightTo: "#E02135",
      darkFrom: "#FF3E51",
      darkTo: "#A21826"
    },
    orange: {
      lightFrom: "#FF8838",
      lightTo: "#E05B00",
      darkFrom: "#FF781C",
      darkTo: "#C24E00"
    },
    yellow: {
      lightFrom: "#FFAF38",
      lightTo: "#E08600",
      darkFrom: "#FFA31C",
      darkTo: "#C27400"
    },
    green: {
      lightFrom: "#1CCF82",
      lightTo: "#009957",
      darkFrom: "#00C972",
      darkTo: "#008048"
    },
    cyan: {
      lightFrom: "#58D3C5",
      lightTo: "#00A592",
      darkFrom: "#1CC3B0",
      darkTo: "#007769"
    },
    blue: {
      lightFrom: "#459FFE",
      lightTo: "#0E74E0",
      darkFrom: "#2A92FE",
      darkTo: "#0C64C1"
    },
    violet: {
      lightFrom: "#B792FE",
      lightTo: "#804EE0",
      darkFrom: "#9159FE",
      darkTo: "#5C39A1"
    },
    magenta: {
      lightFrom: "#FF77BE",
      lightTo: "#E02A88",
      darkFrom: "#FF47A6",
      darkTo: "#A21E62"
    },
    gray: {
      lightFrom: "#A6A6A6",
      lightTo: "#696969",
      darkFrom: "#B7B7B7",
      darkTo: "#777777"
    }
  },
  Po: number = 135;
function A3(this: any, t: any): any {
  const n: any = (_o as any)[t];
  return {
    from: `light-dark(${(n as any).lightFrom}, ${(n as any).darkFrom})`,
    to: `light-dark(${(n as any).lightTo}, ${(n as any).darkTo})`,
    angle: Po
  };
}
const Ne: any = {
  black: {
    light: "#000000",
    dark: "#FFFFFF"
  },
  brown: {
    light: "#A27952",
    dark: "#855C36"
  },
  red: {
    light: "#FF3E51",
    dark: "#E02135"
  },
  orange: {
    light: "#FF781C",
    dark: "#FF6700"
  },
  yellow: {
    light: "#FFAF38",
    dark: "#FF9800"
  },
  green: {
    light: "#00C972",
    dark: "#009957"
  },
  cyan: {
    light: "#1CC3B0",
    dark: "#00A592"
  },
  blue: {
    light: "#2A92FE",
    dark: "#0E74E0"
  },
  violet: {
    light: "#A97EFE",
    dark: "#804EE0"
  },
  magenta: {
    light: "#FF5EB1",
    dark: "#E02A88"
  },
  gray: {
    light: "#959595",
    dark: "#777777"
  }
};
function E3(this: any, t: any): any {
  const n: any = (Ne as any)[t];
  return `light-dark(${(n as any).light}, ${(n as any).dark})`;
}
function I3(this: any, t: any, n: any): any {
  return ((Ne as any)[t] as any)[n];
}
const b0: any = (t: any): any => ({
    x: t,
    v: 0,
    t
  }),
  v0: any = (t: any, n: any, e: any, s: any): any => {
    (t as any).v += (((((-2 as any) * (e as any) as any) * (n as any) as any) * ((t as any).v as any) as any) - (((n as any) * (n as any) as any) * (((t as any).x as any) - ((t as any).t as any) as any) as any) as any) * (s as any), (t as any).x += ((t as any).v as any) * (s as any), (!((Number as any).isFinite as any)((t as any).x) || !((Number as any).isFinite as any)((t as any).v)) && ((t as any).x = (t as any).t, (t as any).v = 0);
  },
  So: any = (1 as any) / (120 as any),
  De: any = (t: any): any => ((Math as any).max as any)(1, ((Math as any).ceil as any)((t as any) / (So as any))),
  C: any = (t: any, n: any, e: any): any => ((Math as any).min as any)(e, ((Math as any).max as any)(n, t)),
  P0: any = (t: any): any => (t as any) < (.5 as any) ? (((4 as any) * (t as any) as any) * (t as any) as any) * (t as any) : (1 as any) - ((((Math as any).pow as any)(((-2 as any) * (t as any) as any) + (2 as any), 3) as any) / (2 as any) as any),
  X: any = (t: any): any => (1 as any) - (((Math as any).pow as any)((1 as any) - (t as any), 3) as any),
  G0: any = (t: any): any => ((1 as any) + ((2.70158 as any) * (((Math as any).pow as any)((t as any) - (1 as any), 3) as any) as any) as any) + ((1.70158 as any) * (((Math as any).pow as any)((t as any) - (1 as any), 2) as any) as any),
  Co: any = (t: any): any => ((t as any) * (t as any) as any) * ((3 as any) - ((2 as any) * (t as any) as any) as any),
  zt: any = [.42, 0, .58, 1],
  $o: any = [.4, .06, .18, 1],
  To: number = .28,
  xn: number = .35,
  bn: number = .26,
  Ro: any = (4.25 as any) / (60 as any),
  Fo: any = (2 as any) / (60 as any),
  W0: number = 1.06;
function i1(this: any, t: any, n: any, e: any): any {
  const s: any = (1 as any) - (t as any);
  return ((((((3 as any) * (s as any) as any) * (s as any) as any) * (t as any) as any) * (n as any) as any) + (((((3 as any) * (s as any) as any) * (t as any) as any) * (t as any) as any) * (e as any) as any) as any) + (((t as any) * (t as any) as any) * (t as any) as any);
}
function Oo(this: any, t: any, n: any, e: any): any {
  const s: any = (1 as any) - (t as any);
  return (((((3 as any) * (s as any) as any) * (s as any) as any) * (n as any) as any) + ((((6 as any) * (s as any) as any) * (t as any) as any) * ((e as any) - (n as any) as any) as any) as any) + ((((3 as any) * (t as any) as any) * (t as any) as any) * ((1 as any) - (e as any) as any) as any);
}
function On(this: any, t: any, n: any): any {
  const [e, s, o, r]: any = n;
  let a: any = t;
  for (let c: any = 0; (c as any) < (8 as any); c++) {
    const i: any = ((i1 as any)(a, e, o) as any) - (t as any),
      u: any = (Oo as any)(a, e, o);
    if ((((Math as any).abs as any)(i) as any) < (1e-6 as any) || (((Math as any).abs as any)(u) as any) < (1e-6 as any)) break;
    a = ((Math as any).min as any)(1, ((Math as any).max as any)(0, (a as any) - ((i as any) / (u as any) as any)));
  }
  return (i1 as any)(a, s, r);
}
function S0(this: any, t: any): any {
  const n: any = ((Math as any).min as any)(1, ((Math as any).max as any)(0, t));
  return ((n as any) * (n as any) as any) * ((3 as any) - ((2 as any) * (n as any) as any) as any);
}
function J0(this: any, t: any, n: any): any {
  const s: any = ((Math as any).min as any)(.28, ((t ? Fo : Ro) as any) / (((Math as any).max as any)(n, .05) as any)),
    o: any = ((1 as any) - (s as any) as any) * (.42 as any);
  return {
    u1: o,
    u2: (o as any) + (s as any)
  };
}
function Lo(this: any, t: any): any {
  const n: any = ((Math as any).min as any)(1, ((Math as any).max as any)(0, t));
  if ((n as any) < (.7 as any)) {
    const e: any = (n as any) / (.7 as any);
    return ((1 as any) - (((1 as any) - (e as any) as any) * ((1 as any) - (e as any) as any) as any) as any) * (W0 as any);
  }
  return (W0 as any) + (((1 as any) - (W0 as any) as any) * ((S0 as any)(((n as any) - (.7 as any) as any) / (.3 as any)) as any) as any);
}
function Bo(this: any, t: any, {
  u1: n,
  u2: e
}: any): any {
  return (t as any) < (n as any) ? (S0 as any)((t as any) / (n as any)) : (t as any) <= (e as any) ? 1 : (1 as any) - ((S0 as any)(((t as any) - (e as any) as any) / (((Math as any).max as any)(1e-6, (1 as any) - (e as any)) as any)) as any);
}
const Pt: any = ((Math as any).PI as any) / (180 as any);
function vn(this: any, t: any, n: any): any {
  return [(((((t as any)[0] as any) * ((n as any)[0] as any) as any) - (((t as any)[1] as any) * ((n as any)[1] as any) as any) as any) - (((t as any)[2] as any) * ((n as any)[2] as any) as any) as any) - (((t as any)[3] as any) * ((n as any)[3] as any) as any), (((((t as any)[0] as any) * ((n as any)[1] as any) as any) + (((t as any)[1] as any) * ((n as any)[0] as any) as any) as any) + (((t as any)[2] as any) * ((n as any)[3] as any) as any) as any) - (((t as any)[3] as any) * ((n as any)[2] as any) as any), (((((t as any)[0] as any) * ((n as any)[2] as any) as any) - (((t as any)[1] as any) * ((n as any)[3] as any) as any) as any) + (((t as any)[2] as any) * ((n as any)[0] as any) as any) as any) + (((t as any)[3] as any) * ((n as any)[1] as any) as any), (((((t as any)[0] as any) * ((n as any)[3] as any) as any) + (((t as any)[1] as any) * ((n as any)[2] as any) as any) as any) - (((t as any)[2] as any) * ((n as any)[1] as any) as any) as any) + (((t as any)[3] as any) * ((n as any)[0] as any) as any)];
}
function w0(this: any, t: any, n: any): any {
  const e: any = ((Math as any).sin as any)((n as any) / (2 as any));
  return [((Math as any).cos as any)((n as any) / (2 as any)), ((t as any)[0] as any) * (e as any), ((t as any)[1] as any) * (e as any), ((t as any)[2] as any) * (e as any)];
}
function No(this: any, t: any): any {
  const n: any = ((Math as any).hypot as any)((t as any)[0], (t as any)[1], (t as any)[2], (t as any)[3]) || 1;
  return [((t as any)[0] as any) / (n as any), ((t as any)[1] as any) / (n as any), ((t as any)[2] as any) / (n as any), ((t as any)[3] as any) / (n as any)];
}
function Do(this: any, t: any, n: any): any {
  const e: any = (1 as any) + (((((t as any)[0] as any) * ((n as any)[0] as any) as any) + (((t as any)[1] as any) * ((n as any)[1] as any) as any) as any) + (((t as any)[2] as any) * ((n as any)[2] as any) as any) as any);
  return (No as any)([e, (((t as any)[1] as any) * ((n as any)[2] as any) as any) - (((t as any)[2] as any) * ((n as any)[1] as any) as any), (((t as any)[2] as any) * ((n as any)[0] as any) as any) - (((t as any)[0] as any) * ((n as any)[2] as any) as any), (((t as any)[0] as any) * ((n as any)[1] as any) as any) - (((t as any)[1] as any) * ((n as any)[0] as any) as any)]);
}
function Yt(this: any, t: any): any {
  const [n, e, s, o]: any = t;
  return [(1 as any) - ((2 as any) * (((s as any) * (s as any) as any) + ((o as any) * (o as any) as any) as any) as any), (2 as any) * (((e as any) * (s as any) as any) - ((n as any) * (o as any) as any) as any), (2 as any) * (((e as any) * (o as any) as any) + ((n as any) * (s as any) as any) as any), (2 as any) * (((e as any) * (s as any) as any) + ((n as any) * (o as any) as any) as any), (1 as any) - ((2 as any) * (((e as any) * (e as any) as any) + ((o as any) * (o as any) as any) as any) as any), (2 as any) * (((s as any) * (o as any) as any) - ((n as any) * (e as any) as any) as any), (2 as any) * (((e as any) * (o as any) as any) - ((n as any) * (s as any) as any) as any), (2 as any) * (((s as any) * (o as any) as any) + ((n as any) * (e as any) as any) as any), (1 as any) - ((2 as any) * (((e as any) * (e as any) as any) + ((s as any) * (s as any) as any) as any) as any)];
}
function qo(this: any, t: any, n: any, e: any): any {
  return (vn as any)((w0 as any)([0, 0, 1], e), (vn as any)((w0 as any)([0, 1, 0], n), (w0 as any)([1, 0, 0], t)));
}
function qe(this: any, t: any): any {
  const n: any = (t as any)[0],
    e: any = (t as any)[3],
    s: any = (t as any)[5],
    o: any = (t as any)[4],
    r: any = (t as any)[6],
    a: any = (t as any)[7],
    c: any = (t as any)[8],
    i: any = ((Math as any).max as any)(-1, ((Math as any).min as any)(1, -r)),
    u: any = ((Math as any).asin as any)(i);
  return (((Math as any).abs as any)(i) as any) > (.999999 as any) ? [((Math as any).atan2 as any)(-s, o), u, 0] : [((Math as any).atan2 as any)(a, c), u, ((Math as any).atan2 as any)(e, n)];
}
function zo(this: any, t: any): any {
  return (qe as any)((Yt as any)(t));
}
function ct(this: any, t: any, n: any): any {
  return [((((t as any)[0] as any) * ((n as any)[0] as any) as any) + (((t as any)[1] as any) * ((n as any)[1] as any) as any) as any) + (((t as any)[2] as any) * ((n as any)[2] as any) as any), ((((t as any)[3] as any) * ((n as any)[0] as any) as any) + (((t as any)[4] as any) * ((n as any)[1] as any) as any) as any) + (((t as any)[5] as any) * ((n as any)[2] as any) as any), ((((t as any)[6] as any) * ((n as any)[0] as any) as any) + (((t as any)[7] as any) * ((n as any)[1] as any) as any) as any) + (((t as any)[8] as any) * ((n as any)[2] as any) as any)];
}
const l1: number = .1305,
  Ln: any = [{
    A: [.01722, .45638, .88962],
    B: [.186, .20949, .95996],
    N: [.82924, .4906, -.26773]
  }, {
    A: [.48863, .67924, .54762],
    B: [.65674, .43195, .61815],
    N: [.60389, .18972, -.77416]
  }];
function C0(this: any, t: any): any {
  const n: any = ((Math as any).hypot as any)((t as any)[0], (t as any)[1], (t as any)[2]) || 1;
  return [((t as any)[0] as any) / (n as any), ((t as any)[1] as any) / (n as any), ((t as any)[2] as any) / (n as any)];
}
const Go: any = (((): any => {
    let t: any = [0, 0, 0];
    for (const {
      A: n,
      B: e
    } of Ln) {
      const s: any = (C0 as any)([((n as any)[0] as any) + ((e as any)[0] as any), ((n as any)[1] as any) + ((e as any)[1] as any), ((n as any)[2] as any) + ((e as any)[2] as any)]);
      t = [((t as any)[0] as any) + ((s as any)[0] as any), ((t as any)[1] as any) + ((s as any)[1] as any), ((t as any)[2] as any) + ((s as any)[2] as any)];
    }
    return (C0 as any)(t);
  }) as any)(),
  Xt: any = (((): any => {
    const t: any = (Do as any)(Go, [0, 0, 1]),
      n: any = (Yt as any)(t);
    let e: any = 0,
      s: any = 0;
    for (const {
      A: a,
      B: c
    } of Ln) {
      const i: any = (ct as any)(n, [((c as any)[0] as any) - ((a as any)[0] as any), ((c as any)[1] as any) - ((a as any)[1] as any), ((c as any)[2] as any) - ((a as any)[2] as any)]);
      e += (i as any)[0], s += (i as any)[1];
    }
    const o: any = ((Math as any).atan2 as any)(s, e),
      r: any = ((((((((Math as any).PI as any) / (2 as any) as any) - (o as any) as any) + (((Math as any).PI as any) / (2 as any) as any) as any) % ((Math as any).PI as any) as any) + ((Math as any).PI as any) as any) % ((Math as any).PI as any) as any) - (((Math as any).PI as any) / (2 as any) as any);
    return (vn as any)((w0 as any)([0, 0, 1], r), t);
  }) as any)(),
  Yo: any = (((): any => {
    const t: any = (Yt as any)(Xt);
    return ((Ln as any).map as any)(({
      A: n,
      B: e,
      N: s
    }: any): any => ({
      A: (ct as any)(t, n),
      B: (ct as any)(t, e),
      N: (ct as any)(t, s)
    }));
  }) as any)(),
  Ho: any = [(Xt as any)[0], -(Xt as any)[1], -(Xt as any)[2], -(Xt as any)[3]],
  ze: any = (((): any => {
    const t: any = ({
        A: s,
        B: o
      }: any): any => {
        const r: any = (C0 as any)([((s as any)[0] as any) + ((o as any)[0] as any), ((s as any)[1] as any) + ((o as any)[1] as any), ((s as any)[2] as any) + ((o as any)[2] as any)]),
          a: any = ((((o as any)[0] as any) * ((r as any)[0] as any) as any) + (((o as any)[1] as any) * ((r as any)[1] as any) as any) as any) + (((o as any)[2] as any) * ((r as any)[2] as any) as any);
        let c: any = (C0 as any)([((o as any)[0] as any) - ((a as any) * ((r as any)[0] as any) as any), ((o as any)[1] as any) - ((a as any) * ((r as any)[1] as any) as any), ((o as any)[2] as any) - ((a as any) * ((r as any)[2] as any) as any)]);
        ((c as any)[1] as any) < (0 as any) && (c = [-(c as any)[0], -(c as any)[1], -(c as any)[2]]);
        let i: any = [(((r as any)[1] as any) * ((c as any)[2] as any) as any) - (((r as any)[2] as any) * ((c as any)[1] as any) as any), (((r as any)[2] as any) * ((c as any)[0] as any) as any) - (((r as any)[0] as any) * ((c as any)[2] as any) as any), (((r as any)[0] as any) * ((c as any)[1] as any) as any) - (((r as any)[1] as any) * ((c as any)[0] as any) as any)];
        return (((i as any)[0] as any) * ((r as any)[0] as any) as any) < (0 as any) && (i = [-(i as any)[0], -(i as any)[1], -(i as any)[2]]), {
          M: r,
          T: c,
          C: i
        };
      },
      [n, e]: any = Yo;
    if ((n as any) == (null as any) || (e as any) == (null as any)) throw new (Error as any)("Motion Lab defines exactly two eye capsules");
    return [(t as any)(n), (t as any)(e)];
  }) as any)(),
  Ko: any = ["sphere", "cloud", "square", "sparkle", "clover", "heartChubby", "starFlower", "teardrop", "tablet", "wedge", "house", "star6", "pebble", "bean", "egg", "squircle", "capsule", "cylinder", "hex", "gem", "crystal", "shield", "dome", "arch", "leaf"],
  Uo: any = ["neutral", "happy", "surprised", "sad", "sleepy", "squinted", "calm", "inspecting", "confused"],
  Zt: number = .26,
  jo: number = 21,
  Xo: number = 18,
  Zo: any = new (Map as any)([["thinking", "sad"], ["strange", "inspecting"], ["angry", "neutral"], ["inspect", "inspecting"], ["squint", "squinted"], ["idle", "neutral"], ["smile", "happy"], ["sleep", "sleepy"]]),
  Vo: any = new (Set as any)(["sad", "happy", "confused", "squinted", "sleepy"]);
function l0(this: any, t: any, n: any): any {
  return [(t as any)[(n as any) * (6 as any)], (t as any)[((n as any) * (6 as any) as any) + (1 as any)]];
}
function u0(this: any, t: any, n: any, e: any): any {
  const s: any = e ? 4 : 2;
  return [((t as any)[(n as any) * (6 as any)] as any) + ((t as any)[((n as any) * (6 as any) as any) + (s as any)] as any), ((t as any)[((n as any) * (6 as any) as any) + (1 as any)] as any) + ((t as any)[(((n as any) * (6 as any) as any) + (s as any) as any) + (1 as any)] as any)];
}
function Ge(this: any, t: any): any {
  const n: any = ((jo as any) + (1 as any) as any) >> (1 as any),
    e: any = [],
    s: any = (o: any, r: any, a: any, c: any, i: any): any => {
      for (let u: any = i; (u as any) < (n as any); u++) {
        const l: any = (u as any) / ((n as any) - (1 as any) as any),
          h: any = (1 as any) - (l as any),
          f: any = ((h as any) * (h as any) as any) * (h as any),
          d: any = (((3 as any) * (h as any) as any) * (h as any) as any) * (l as any),
          p: any = (((3 as any) * (h as any) as any) * (l as any) as any) * (l as any),
          y: any = ((l as any) * (l as any) as any) * (l as any);
        ((e as any).push as any)([((((f as any) * ((o as any)[0] as any) as any) + ((d as any) * ((r as any)[0] as any) as any) as any) + ((p as any) * ((a as any)[0] as any) as any) as any) + ((y as any) * ((c as any)[0] as any) as any), ((((f as any) * ((o as any)[1] as any) as any) + ((d as any) * ((r as any)[1] as any) as any) as any) + ((p as any) * ((a as any)[1] as any) as any) as any) + ((y as any) * ((c as any)[1] as any) as any)]);
      }
    };
  return (s as any)((l0 as any)(t, 0), (u0 as any)(t, 0, !0), (u0 as any)(t, 1, !1), (l0 as any)(t, 1), 0), (s as any)((l0 as any)(t, 1), (u0 as any)(t, 1, !0), (u0 as any)(t, 2, !1), (l0 as any)(t, 2), 1), e;
}
function Qo(this: any, {
  p0: t,
  p1: n,
  p2: e,
  isArc: s
}: any): any {
  const [o, r]: any = t,
    [a, c]: any = n,
    [i, u]: any = e,
    l: any = ((new (Array as any)(Xo) as any).fill as any)(0),
    h: any = (g: any, x: any): any => {
      (l as any)[(g as any) * (6 as any)] = (x as any)[0], (l as any)[((g as any) * (6 as any) as any) + (1 as any)] = (x as any)[1];
    },
    f: any = (g: any, x: any): any => {
      (l as any)[((g as any) * (6 as any) as any) + (2 as any)] = ((x as any)[0] as any) - ((l as any)[(g as any) * (6 as any)] as any), (l as any)[((g as any) * (6 as any) as any) + (3 as any)] = ((x as any)[1] as any) - ((l as any)[((g as any) * (6 as any) as any) + (1 as any)] as any);
    },
    d: any = (g: any, x: any): any => {
      (l as any)[((g as any) * (6 as any) as any) + (4 as any)] = ((x as any)[0] as any) - ((l as any)[(g as any) * (6 as any)] as any), (l as any)[((g as any) * (6 as any) as any) + (5 as any)] = ((x as any)[1] as any) - ((l as any)[((g as any) * (6 as any) as any) + (1 as any)] as any);
    };
  if (s) {
    const g: any = (2 as any) * ((((o as any) * ((c as any) - (u as any) as any) as any) + ((a as any) * ((u as any) - (r as any) as any) as any) as any) + ((i as any) * ((r as any) - (c as any) as any) as any) as any);
    if ((((Math as any).abs as any)(g) as any) > (1e-9 as any)) {
      const w: any = ((o as any) * (o as any) as any) + ((r as any) * (r as any) as any),
        v: any = ((a as any) * (a as any) as any) + ((c as any) * (c as any) as any),
        b: any = ((i as any) * (i as any) as any) + ((u as any) * (u as any) as any),
        A: any = ((((w as any) * ((c as any) - (u as any) as any) as any) + ((v as any) * ((u as any) - (r as any) as any) as any) as any) + ((b as any) * ((r as any) - (c as any) as any) as any) as any) / (g as any),
        E: any = ((((w as any) * ((i as any) - (a as any) as any) as any) + ((v as any) * ((o as any) - (i as any) as any) as any) as any) + ((b as any) * ((a as any) - (o as any) as any) as any) as any) / (g as any),
        P: any = ((Math as any).hypot as any)((o as any) - (A as any), (r as any) - (E as any)),
        $: any = ((Math as any).atan2 as any)((r as any) - (E as any), (o as any) - (A as any)),
        D: any = ((Math as any).atan2 as any)((u as any) - (E as any), (i as any) - (A as any)),
        z: any = ((Math as any).atan2 as any)((c as any) - (E as any), (a as any) - (A as any)),
        B: any = ((Math as any).PI as any) * (2 as any),
        R: any = (((D as any) - ($ as any) as any) + (B as any) as any) % (B as any),
        H: any = ((((z as any) - ($ as any) as any) + (B as any) as any) % (B as any) as any) <= (R as any) ? R : (R as any) - (B as any),
        K: any = (N: any): any => [(A as any) + ((P as any) * (((Math as any).cos as any)(N) as any) as any), (E as any) + ((P as any) * (((Math as any).sin as any)(N) as any) as any)],
        U: any = (N: any): any => [-((Math as any).sin as any)(N), ((Math as any).cos as any)(N)],
        S: any = (H as any) / (2 as any),
        Y: any = (((4 as any) / (3 as any) as any) * (((Math as any).tan as any)((S as any) / (4 as any)) as any) as any) * (P as any),
        tt: any = [$, ($ as any) + (S as any), ($ as any) + (H as any)];
      for (let N: any = 0; (N as any) < (3 as any); N++) {
        const nt: any = (K as any)((tt as any)[N]),
          st: any = (U as any)((tt as any)[N]);
        (h as any)(N, nt), (N as any) > (0 as any) && (f as any)(N, [((nt as any)[0] as any) - ((Y as any) * ((st as any)[0] as any) as any), ((nt as any)[1] as any) - ((Y as any) * ((st as any)[1] as any) as any)]), (N as any) < (2 as any) && (d as any)(N, [((nt as any)[0] as any) + ((Y as any) * ((st as any)[0] as any) as any), ((nt as any)[1] as any) + ((Y as any) * ((st as any)[1] as any) as any)]);
      }
      return l;
    }
    const x: any = [((o as any) + (i as any) as any) / (2 as any), ((r as any) + (u as any) as any) / (2 as any)];
    return (h as any)(0, [o, r]), (h as any)(1, x), (h as any)(2, [i, u]), (d as any)(0, [(o as any) + ((((x as any)[0] as any) - (o as any) as any) / (3 as any) as any), (r as any) + ((((x as any)[1] as any) - (r as any) as any) / (3 as any) as any)]), (f as any)(1, [((x as any)[0] as any) - ((((x as any)[0] as any) - (o as any) as any) / (3 as any) as any), ((x as any)[1] as any) - ((((x as any)[1] as any) - (r as any) as any) / (3 as any) as any)]), (d as any)(1, [((x as any)[0] as any) + (((i as any) - ((x as any)[0] as any) as any) / (3 as any) as any), ((x as any)[1] as any) + (((u as any) - ((x as any)[1] as any) as any) / (3 as any) as any)]), (f as any)(2, [(i as any) - (((i as any) - ((x as any)[0] as any) as any) / (3 as any) as any), (u as any) - (((u as any) - ((x as any)[1] as any) as any) / (3 as any) as any)]), l;
  }
  const p: any = [((o as any) + (a as any) as any) / (2 as any), ((r as any) + (c as any) as any) / (2 as any)],
    y: any = [((a as any) + (i as any) as any) / (2 as any), ((c as any) + (u as any) as any) / (2 as any)],
    m: any = [(((p as any)[0] as any) + ((y as any)[0] as any) as any) / (2 as any), (((p as any)[1] as any) + ((y as any)[1] as any) as any) / (2 as any)];
  return (h as any)(0, [o, r]), (h as any)(1, m), (h as any)(2, [i, u]), (d as any)(0, [(o as any) + (((2 as any) / (3 as any) as any) * (((p as any)[0] as any) - (o as any) as any) as any), (r as any) + (((2 as any) / (3 as any) as any) * (((p as any)[1] as any) - (r as any) as any) as any)]), (f as any)(1, [((m as any)[0] as any) + (((2 as any) / (3 as any) as any) * (((p as any)[0] as any) - ((m as any)[0] as any) as any) as any), ((m as any)[1] as any) + (((2 as any) / (3 as any) as any) * (((p as any)[1] as any) - ((m as any)[1] as any) as any) as any)]), (d as any)(1, [((m as any)[0] as any) + (((2 as any) / (3 as any) as any) * (((y as any)[0] as any) - ((m as any)[0] as any) as any) as any), ((m as any)[1] as any) + (((2 as any) / (3 as any) as any) * (((y as any)[1] as any) - ((m as any)[1] as any) as any) as any)]), (f as any)(2, [(i as any) + (((2 as any) / (3 as any) as any) * (((y as any)[0] as any) - (i as any) as any) as any), (u as any) + (((2 as any) / (3 as any) as any) * (((y as any)[1] as any) - (u as any) as any) as any)]), l;
}
function t0(this: any, t: any, n: any, e: any, s: any, o: any): any {
  const r: any = (Qo as any)(s);
  return {
    off: t,
    tilt: n,
    wid: e,
    lidY: 1,
    oval: o,
    ovalMix: 0,
    pts: (Ge as any)(r),
    path: r,
    fillRing: null
  };
}
function Bn(this: any, t: any, n: any, e: any, s: any, o: any): any {
  const r: any = ((Math as any).max as any)(0, ((n as any) - (t as any) as any) / (2 as any)),
    a: any = ((e as any) * ((Math as any).PI as any) as any) / (180 as any),
    c: any = (((Math as any).sin as any)(a) as any) * (r as any),
    i: any = (((Math as any).cos as any)(a) as any) * (r as any);
  return (t0 as any)(s, o, (t as any) / (2 as any), {
    p0: [-c, -i],
    p1: [0, 0],
    p2: [c, i],
    isArc: !1
  }, [0, 0]);
}
function Ct(this: any, t: any, n: any, e: any, s: any): any {
  return (Bn as any)(t, n, e, [s, 0], 0);
}
function Wo(this: any, t: any, n: any, e: any): any {
  const s: any = {
    p0: [-t, 0],
    p1: [0, 0],
    p2: [t, 0],
    isArc: !1
  };
  return (t0 as any)([e, 0], 0, n, s, [t, n]);
}
function Mt(this: any, t: any): any {
  return [t, t];
}
const _t: any = {
  neutral: (Mt as any)((Ct as any)(Zt, .57, 0, 0)),
  happy: (Mt as any)((t0 as any)([.03, .03], 0, l1, {
    p0: [.16, -.04],
    p1: [0, .12],
    p2: [-.16, -.04],
    isArc: !0
  }, [0, 0])),
  surprised: (Mt as any)((Ct as any)(.42, .86, 0, .03)),
  inspecting: [(Ct as any)(.54, .54, 0, .04), (Ct as any)(.27, .27, 0, .04)],
  sad: (Mt as any)((Ct as any)(Zt, .5, -28, -.05)),
  sleepy: (Mt as any)((t0 as any)([.01, 0], 0, (Zt as any) / (2 as any), {
    p0: [-.11, .025],
    p1: [0, -.05],
    p2: [.11, .025],
    isArc: !1
  }, [0, 0])),
  squinted: (Mt as any)((Ct as any)(Zt, .5, 90, .01)),
  calm: (Mt as any)((Wo as any)(.296, .247, .05)),
  confused: (Mt as any)((t0 as any)([-.1, 0], 0, l1, {
    p0: [.01, .16],
    p1: [-.17, 0],
    p2: [.01, -.16],
    isArc: !1
  }, [0, 0]))
};
function Jo(this: any, t: any): any {
  return ((Uo as any).some as any)((n: any): any => (n as any) === (t as any));
}
function t2(this: any, t: any): any {
  const n: any = ((((t as any).trim as any)() as any).toLowerCase as any)(),
    e: any = ((Zo as any).get as any)(n) ?? n;
  return (Jo as any)(e) ? e : "neutral";
}
function s0(this: any, t: any): any {
  return ((Vo as any).has as any)(t);
}
function n2(this: any, t: any): any {
  return !(s0 as any)(t) && !(((_t as any)[t] as any).some as any)(ut);
}
function Z(this: any, t: any, n: any): any {
  return [(n as any)((t as any)[0], 0), (n as any)((t as any)[1], 1)];
}
function rt(this: any, t: any): any {
  return {
    ...t,
    ovalMix: 0
  };
}
function ut(this: any, t: any): any {
  return (((t as any).oval as any)[0] as any) > (1e-4 as any) && (((t as any).oval as any)[1] as any) > (1e-4 as any);
}
function $0(this: any, t: any): any {
  if ((ut as any)(t) || (((t as any).pts as any).length as any) < (3 as any)) return !1;
  const n: any = ((t as any).pts as any)[0],
    e: any = ((t as any).pts as any)[(((t as any).pts as any).length as any) - (1 as any)],
    s: any = ((e as any)[0] as any) - ((n as any)[0] as any),
    o: any = ((e as any)[1] as any) - ((n as any)[1] as any),
    r: any = ((s as any) * (s as any) as any) + ((o as any) * (o as any) as any);
  if ((r as any) < (1e-8 as any)) return !1;
  let a: any = 0;
  for (const c of (t as any).pts) {
    const i: any = (((((c as any)[0] as any) - ((n as any)[0] as any) as any) * (s as any) as any) + ((((c as any)[1] as any) - ((n as any)[1] as any) as any) * (o as any) as any) as any) / (r as any),
      u: any = ((n as any)[0] as any) + ((i as any) * (s as any) as any),
      l: any = ((n as any)[1] as any) + ((i as any) * (o as any) as any),
      h: any = ((Math as any).hypot as any)(((c as any)[0] as any) - (u as any), ((c as any)[1] as any) - (l as any));
    (h as any) > (a as any) && (a = h);
  }
  return (a as any) > (((Math as any).max as any)(.012, ((t as any).wid as any) * (.2 as any)) as any);
}
const e2: number = .03,
  s2: number = .6,
  o2: number = .42,
  r2: number = 20;
function Dt(this: any, t: any, n: any, e: any): any {
  return (t as any) + (((n as any) - (t as any) as any) * (e as any) as any);
}
function k0(this: any, t: any, n: any, e: any): any {
  return [(Dt as any)((t as any)[0], (n as any)[0], e), (Dt as any)((t as any)[1], (n as any)[1], e)];
}
function u1(this: any, t: any, n: any, e: any): any {
  if (((t as any).length as any) === (0 as any)) return [0, 0];
  if (((t as any).length as any) === (1 as any) || (e as any) <= (1 as any)) return (t as any)[0];
  const s: any = ((n as any) / ((e as any) - (1 as any) as any) as any) * (((t as any).length as any) - (1 as any) as any),
    o: any = ((Math as any).min as any)(((Math as any).floor as any)(s), ((t as any).length as any) - (2 as any));
  return (k0 as any)((t as any)[o], (t as any)[(o as any) + (1 as any)], (s as any) - (o as any));
}
function a2(this: any, t: any, n: any, e: any): any {
  const s: any = {
    off: (k0 as any)((t as any).off, (n as any).off, e),
    tilt: (Dt as any)((t as any).tilt, (n as any).tilt, e),
    wid: (Dt as any)((t as any).wid, (n as any).wid, e),
    lidY: (Dt as any)((t as any).lidY, (n as any).lidY, e),
    oval: (k0 as any)((t as any).oval, (n as any).oval, e),
    ovalMix: 0,
    fillRing: null
  };
  if ((t as any).path && (n as any).path && (((t as any).path as any).length as any) === (((n as any).path as any).length as any)) {
    const a: any = (n as any).path,
      c: any = (((t as any).path as any).map as any)((i: any, u: any): any => (Dt as any)(i, (a as any)[u], e));
    return {
      ...s,
      path: c,
      pts: (Ge as any)(c)
    };
  }
  const o: any = ((Math as any).max as any)(((t as any).pts as any).length, ((n as any).pts as any).length, 2),
    r: any = [];
  for (let a: any = 0; (a as any) < (o as any); a++) ((r as any).push as any)((k0 as any)((u1 as any)((t as any).pts, a, o), (u1 as any)((n as any).pts, a, o), e));
  return {
    ...s,
    path: null,
    pts: r
  };
}
function T0(this: any, t: any): any {
  if ((ut as any)(t)) {
    const [o, r]: any = (t as any).oval;
    return {
      cx: ((t as any).off as any)[0],
      cy: ((t as any).off as any)[1],
      ang: (o as any) >= (r as any) ? ((Math as any).PI as any) / (2 as any) : 0,
      halfLen: ((Math as any).max as any)(o, r),
      halfW: ((Math as any).min as any)(o, r)
    };
  }
  const n: any = (t as any).wid;
  if ((((t as any).pts as any).length as any) < (2 as any)) return {
    cx: ((t as any).off as any)[0],
    cy: ((t as any).off as any)[1],
    ang: (t as any).tilt,
    halfLen: n,
    halfW: n
  };
  const e: any = ((t as any).pts as any)[0],
    s: any = ((t as any).pts as any)[(((t as any).pts as any).length as any) - (1 as any)];
  return {
    cx: (((t as any).off as any)[0] as any) + ((((e as any)[0] as any) + ((s as any)[0] as any) as any) / (2 as any) as any),
    cy: (((t as any).off as any)[1] as any) + ((((e as any)[1] as any) + ((s as any)[1] as any) as any) / (2 as any) as any),
    ang: (((Math as any).atan2 as any)(((s as any)[0] as any) - ((e as any)[0] as any), ((s as any)[1] as any) - ((e as any)[1] as any)) as any) + ((t as any).tilt as any),
    halfLen: ((((Math as any).hypot as any)(((s as any)[0] as any) - ((e as any)[0] as any), ((s as any)[1] as any) - ((e as any)[1] as any)) as any) / (2 as any) as any) + (n as any),
    halfW: n
  };
}
function Ye(this: any, t: any, n: any): any {
  let e: any = ((n as any).ang as any) - ((t as any).ang as any);
  for (; (e as any) > (((Math as any).PI as any) / (2 as any) as any);) e -= (Math as any).PI;
  for (; (e as any) < ((-(Math as any).PI as any) / (2 as any) as any);) e += (Math as any).PI;
  return e;
}
function c2(this: any, t: any, n: any, e: any): any {
  const o: any = ((Math as any).max as any)(0, (t as any) - (n as any)),
    r: any = ((Math as any).max as any)(0, ((Math as any).min as any)(1, e)),
    a: any = [];
  for (let c: any = 0; (c as any) < (48 as any); c++) {
    const i: any = (((c as any) / (48 as any) as any) * ((Math as any).PI as any) as any) * (2 as any),
      u: any = ((Math as any).cos as any)(i),
      l: any = ((Math as any).sin as any)(i),
      h: any = (n as any) * (u as any),
      f: any = (t as any) * (l as any),
      d: any = (n as any) / (((Math as any).max as any)(((Math as any).abs as any)(u), 1e-6) as any);
    let p: any;
    if (((d as any) * (((Math as any).abs as any)(l) as any) as any) <= ((o as any) + (1e-6 as any) as any) && ((Number as any).isFinite as any)(d)) p = d;else {
      const x: any = ((((l as any) >= (0 as any) ? 1 : -1) as any) * (o as any) as any) * (l as any),
        w: any = ((Math as any).max as any)(0, (((x as any) * (x as any) as any) - ((o as any) * (o as any) as any) as any) + ((n as any) * (n as any) as any));
      p = (x as any) + (((Math as any).sqrt as any)(w) as any);
    }
    const y: any = (p as any) * (u as any),
      m: any = (p as any) * (l as any);
    ((a as any).push as any)([(y as any) + (((h as any) - (y as any) as any) * (r as any) as any), (m as any) + (((f as any) - (m as any) as any) * (r as any) as any)]);
  }
  return a;
}
function wn(this: any, t: any, n: any, e: any, s: any): any {
  return (Bn as any)(((Math as any).max as any)(t, 1e-4), ((Math as any).max as any)(n, t), 0, s, e);
}
function i2(this: any, t: any, n: any, e: any): any {
  if ((e as any) <= (1e-4 as any)) return (rt as any)(t);
  if ((e as any) >= (.995 as any)) return (rt as any)(n);
  const s: any = (T0 as any)(t),
    o: any = (T0 as any)(n),
    r: any = (Ye as any)(s, o),
    a: any = (ut as any)(n),
    c: any = a ? (1 as any) - (((1 as any) - (e as any) as any) ** (3 as any) as any) : ((e as any) * (e as any) as any) * (e as any),
    i: any = ((s as any).ang as any) + ((r as any) * (e as any) as any),
    u: any = ((Math as any).max as any)(((s as any).halfLen as any) + ((((o as any).halfLen as any) - ((s as any).halfLen as any) as any) * (e as any) as any), 1e-4),
    l: any = ((Math as any).max as any)(((s as any).halfW as any) + ((((o as any).halfW as any) - ((s as any).halfW as any) as any) * (e as any) as any), 1e-4),
    h: any = (ut as any)(t) ? 1 : 0,
    f: any = (h as any) + ((((a ? 1 : 0) as any) - (h as any) as any) * (c as any) as any),
    d: any = (wn as any)((2 as any) * (l as any), (2 as any) * (u as any), i, [((s as any).cx as any) + ((((o as any).cx as any) - ((s as any).cx as any) as any) * (e as any) as any), ((s as any).cy as any) + ((((o as any).cy as any) - ((s as any).cy as any) as any) * (e as any) as any)]),
    p: any = (f as any) > (1e-4 as any);
  return {
    ...d,
    oval: p ? [l, u] : (d as any).oval,
    ovalMix: p ? f : 0,
    fillRing: (c2 as any)(u, l, f)
  };
}
function l2(this: any, t: any, n: any, e: any): any {
  if ((e as any) >= ((1 as any) - (1e-4 as any) as any)) return (rt as any)(n);
  const s: any = (T0 as any)(t),
    o: any = (T0 as any)(n),
    r: any = ((s as any).ang as any) + (((Ye as any)(s, o) as any) * (e as any) as any),
    a: any = ((Math as any).max as any)(1e-4, ((s as any).halfW as any) + ((((o as any).halfW as any) - ((s as any).halfW as any) as any) * (e as any) as any)),
    c: any = ((((Math as any).max as any)(0, ((s as any).halfLen as any) - ((s as any).halfW as any)) as any) * ((1 as any) - (e as any) as any) as any) + ((((Math as any).max as any)(0, ((o as any).halfLen as any) - ((o as any).halfW as any)) as any) * (e as any) as any),
    i: any = [((s as any).cx as any) + ((((o as any).cx as any) - ((s as any).cx as any) as any) * (e as any) as any), ((s as any).cy as any) + ((((o as any).cy as any) - ((s as any).cy as any) as any) * (e as any) as any)];
  return (Bn as any)((2 as any) * (a as any), (2 as any) * ((c as any) + (a as any) as any), ((r as any) * (180 as any) as any) / ((Math as any).PI as any), i, 0);
}
function u2(this: any, t: any): any {
  const n: any = (ut as any)(t);
  if (!(((t as any).wid as any) > (0 as any)) && !n) return null;
  const e: any = (t as any).lidY,
    s: any = ((t as any).tilt as any) * ((180 as any) / ((Math as any).PI as any) as any);
  if (n) return {
    width: (2 as any) * (((t as any).oval as any)[0] as any),
    height: ((2 as any) * (((t as any).oval as any)[1] as any) as any) * (e as any),
    tilt: s,
    cx: ((t as any).off as any)[0],
    cy: ((t as any).off as any)[1]
  };
  if ((((t as any).pts as any).length as any) < (2 as any)) return null;
  const o: any = ((t as any).pts as any)[0],
    r: any = ((t as any).pts as any)[(((t as any).pts as any).length as any) - (1 as any)],
    a: any = ((r as any)[0] as any) - ((o as any)[0] as any),
    c: any = ((r as any)[1] as any) - ((o as any)[1] as any),
    i: any = ((Math as any).hypot as any)(a, c),
    u: any = (2 as any) * ((t as any).wid as any);
  return {
    width: u,
    height: ((i as any) + (u as any) as any) * (e as any),
    tilt: ((((Math as any).atan2 as any)(a, c) as any) * ((180 as any) / ((Math as any).PI as any) as any) as any) + (s as any),
    cx: (((t as any).off as any)[0] as any) + ((((o as any)[0] as any) + ((r as any)[0] as any) as any) / (2 as any) as any),
    cy: (((t as any).off as any)[1] as any) + (((((o as any)[1] as any) + ((r as any)[1] as any) as any) / (2 as any) as any) * (e as any) as any)
  };
}
function h2(this: any, t: any): any {
  const n: any = (u2 as any)(t);
  if ((n as any) == (null as any)) return {
    w: Zt,
    h: .57,
    cx: ((t as any).off as any)[0],
    cy: ((t as any).off as any)[1]
  };
  const e: any = (((n as any).tilt as any) * ((Math as any).PI as any) as any) / (180 as any),
    s: any = ((Math as any).abs as any)(((Math as any).cos as any)(e)),
    o: any = ((Math as any).abs as any)(((Math as any).sin as any)(e));
  return {
    w: (((n as any).width as any) * (s as any) as any) + (((n as any).height as any) * (o as any) as any),
    h: (((n as any).width as any) * (o as any) as any) + (((n as any).height as any) * (s as any) as any),
    cx: (n as any).cx,
    cy: (n as any).cy
  };
}
function f2(this: any, t: any, n: any, e: any, s: any): any {
  return (n as any) >= (t as any) ? (wn as any)(t, n, 0, [e, s]) : (wn as any)(n, t, ((Math as any).PI as any) / (2 as any), [e, s]);
}
function h1(this: any, t: any, n: any): any {
  if ((n as any) <= (0 as any)) return t;
  const e: any = ((Math as any).min as any)(1, n),
    s: any = (h2 as any)(t),
    o: any = ((Math as any).max as any)((s as any).w, 1e-4),
    r: any = ((Math as any).max as any)((s as any).h, o),
    a: any = (o as any) * (o2 as any);
  return (f2 as any)(o, (r as any) + (((a as any) - (r as any) as any) * (e as any) as any), (s as any).cx, (s as any).cy);
}
function d2(this: any, t: any): any {
  return {
    ...t,
    wid: 0,
    oval: [0, 0]
  };
}
function p2(this: any, t: any): any {
  let n: any, e: any;
  if ((ut as any)(t)) n = -((t as any).oval as any)[1], e = ((t as any).oval as any)[1];else {
    let s: any = 1e9,
      o: any = -1e9;
    for (const r of (t as any).pts) ((r as any)[1] as any) < (s as any) && (s = (r as any)[1]), ((r as any)[1] as any) > (o as any) && (o = (r as any)[1]);
    n = (s as any) - ((t as any).wid as any), e = (o as any) + ((t as any).wid as any);
  }
  return (n as any) + (((1 as any) - (s2 as any) as any) * ((e as any) - (n as any) as any) as any);
}
function M2(this: any, t: any): any {
  if ((((t as any).pts as any).length as any) < (2 as any)) return t;
  const n: any = ((t as any).pts as any)[0],
    e: any = ((t as any).pts as any)[(((t as any).pts as any).length as any) - (1 as any)],
    s: any = ((e as any)[0] as any) - ((n as any)[0] as any),
    o: any = ((e as any)[1] as any) - ((n as any)[1] as any);
  if ((((Math as any).abs as any)(o) as any) < (((Math as any).abs as any)(s) as any)) return t;
  const r: any = ((Math as any).atan2 as any)(s, o);
  if ((((Math as any).abs as any)(r) as any) < (1e-5 as any)) return t;
  const a: any = ((Math as any).cos as any)(r),
    c: any = ((Math as any).sin as any)(r);
  return {
    ...t,
    tilt: ((t as any).tilt as any) + (r as any),
    pts: (((t as any).pts as any).map as any)((i: any): any => [(((i as any)[0] as any) * (a as any) as any) - (((i as any)[1] as any) * (c as any) as any), (((i as any)[0] as any) * (c as any) as any) + (((i as any)[1] as any) * (a as any) as any)])
  };
}
function f1(this: any, t: any, n: any): any {
  if ((n as any) === (0 as any)) return t;
  const e: any = (M2 as any)(t),
    s: any = ((Math as any).max as any)(e2, (1 as any) - (n as any)),
    o: any = ((p2 as any)(e) as any) * ((1 as any) - (s as any) as any),
    r: any = ((Math as any).cos as any)(-(e as any).tilt),
    a: any = ((Math as any).sin as any)(-(e as any).tilt);
  return {
    ...e,
    off: [(((e as any).off as any)[0] as any) - ((a as any) * (o as any) as any), (((e as any).off as any)[1] as any) + ((r as any) * (o as any) as any)],
    lidY: ((e as any).lidY as any) * (s as any)
  };
}
function m2(this: any, t: any, n: any, e: any, s: any): any {
  if ((n as any) < (.001 as any)) return t;
  const o: any = (e as any).isFollowingTurn ? ((Math as any).min as any)(1, ((Math as any).max as any)(-1, (s as any) / (r2 as any))) : (e as any).bias,
    [r, a]: any = (_t as any).inspecting,
    c: any = ((Math as any).max as any)(1e-4, (r as any).wid),
    i: any = ((Math as any).max as any)(1e-4, (a as any).wid),
    u: any = ((1 as any) + (o as any) as any) / (2 as any),
    l: any = (h: any, f: any): any => {
      const d: any = (1 as any) + (((f as any) - (1 as any) as any) * (n as any) as any);
      return {
        ...(rt as any)(h),
        wid: ((h as any).wid as any) * (d as any),
        pts: (((h as any).pts as any).map as any)((p: any): any => [((p as any)[0] as any) * (d as any), ((p as any)[1] as any) * (d as any)])
      };
    };
  return [(l as any)((t as any)[0], ((Math as any).pow as any)((i as any) / (c as any), u)), (l as any)((t as any)[1], ((Math as any).pow as any)((c as any) / (i as any), u))];
}
function h0(this: any, t: any): any {
  return (t as any) === ("inspecting" as any) ? 1 : 0;
}
function y2(this: any, t: any, n: any, e: any): any {
  return !(((t as any).some as any)($0) || ((n as any).some as any)($0)) && (((t as any).some as any)(ut) || ((n as any).some as any)(ut)) ? "oval" : e ? "spine" : "stadium";
}
function d1(this: any, t: any): any {
  return (On as any)(((Math as any).min as any)(((Math as any).max as any)(((t as any).t as any) / ((t as any).dur as any), 0), 1), $o);
}
function g2(this: any): any {
  let t: any = "neutral",
    n: any = (Z as any)((_t as any).neutral, rt),
    e: any = null;
  const s: any = (): any => {
      if ((e as any) == (null as any)) return n;
      if (((e as any).kind as any) === ("blink" as any)) return (e as any).from;
      if (((e as any).kind as any) === ("morph" as any)) {
        const p: any = ((Math as any).max as any)(0, ((Math as any).min as any)(1, (d1 as any)(e))),
          {
            from: y,
            to: m,
            path: g
          }: any = e;
        return (g as any) === ("oval" as any) ? (Z as any)(y, (x: any, w: any): any => (i2 as any)(x, (m as any)[w], p)) : (g as any) === ("spine" as any) ? (Z as any)(y, (x: any, w: any): any => (a2 as any)(x, (m as any)[w], p)) : (Z as any)(y, (x: any, w: any): any => (l2 as any)(x, (m as any)[w], p));
      }
      const l: any = ((Math as any).min as any)(((e as any).t as any) / ((e as any).dur as any), 1),
        {
          u1: h,
          u2: f
        }: any = (J0 as any)(!1, (e as any).dur);
      if ((l as any) < (h as any)) return (Z as any)((e as any).from, (p: any): any => (f1 as any)(p, (S0 as any)((l as any) / (h as any))));
      if ((l as any) <= (f as any)) return (Z as any)((e as any).to, d2);
      const d: any = (Lo as any)(((l as any) - (f as any) as any) / (((Math as any).max as any)(1e-6, (1 as any) - (f as any)) as any));
      return (Z as any)((e as any).to, (p: any): any => (f1 as any)(p, (1 as any) - (d as any)));
    },
    o: any = (l: any): any => {
      const h: any = (Z as any)((s as any)(), rt),
        f: any = (_t as any)[l],
        d: any = ((h as any).some as any)($0) || ((f as any).some as any)($0) || (t as any) === ("sleepy" as any) || (l as any) === ("sleepy" as any);
      e = {
        kind: "morph",
        path: (y2 as any)(h, f, d),
        fromName: t,
        toName: l,
        from: h,
        to: f,
        t: 0,
        dur: To,
        isHeld: !1
      }, t = l;
    },
    r: any = (l: any): any => {
      e = {
        kind: "lidMorph",
        fromName: t,
        toName: l,
        from: (Z as any)((s as any)(), rt),
        to: (_t as any)[l],
        t: 0,
        dur: xn,
        isHeld: !1
      }, t = l;
    },
    a: any = (): any => {
      (e as any) != (null as any) && !(e as any).isHeld || (e = {
        kind: "blink",
        fromName: t,
        toName: t,
        from: (Z as any)(n, rt),
        to: (_t as any)[t],
        t: 0,
        dur: bn,
        isHeld: !1
      });
    },
    c: any = (l: any): any => {
      ((l as any).name as any) === (t as any) && ((e as any) == (null as any) || ((e as any).toName as any) === ((l as any).name as any)) || ((l as any).isThroughBlink && !(s0 as any)((l as any).name) && !(s0 as any)(t) ? (r as any)((l as any).name) : (o as any)((l as any).name));
    },
    i: any = (l: any, h: any): any => {
      (h as any) >= ((l as any).dur as any) ? (n = (Z as any)((l as any).to, rt), e = null) : e = (h as any) < (0 as any) ? null : {
        ...l,
        t: h
      };
    },
    u: any = (l: any): any => {
      (e as any) != (null as any) && (e = {
        ...e,
        isHeld: l
      });
    };
  return {
    get name(): any {
      return t;
    },
    get isMorphing(): any {
      return (e as any) != (null as any) && ((e as any).kind as any) !== ("blink" as any) && !(e as any).isHeld;
    },
    eyes: s,
    inspectWeight(): any {
      if ((e as any) == (null as any)) return (h0 as any)(t);
      if (((e as any).kind as any) === ("blink" as any)) return (h0 as any)((e as any).fromName);
      const l: any = (h0 as any)((e as any).fromName),
        h: any = (h0 as any)((e as any).toName);
      if (((e as any).kind as any) === ("morph" as any)) return (l as any) + (((h as any) - (l as any) as any) * ((d1 as any)(e) as any) as any);
      const f: any = ((Math as any).min as any)(((e as any).t as any) / ((e as any).dur as any), 1),
        {
          u1: d,
          u2: p
        }: any = (J0 as any)(!1, (e as any).dur);
      return (f as any) <= (d as any) ? l : (f as any) < (p as any) ? 0 : h;
    },
    blinkAmount(): any {
      if ((e?.kind as any) !== ("blink" as any) || (e as any).isHeld) return null;
      const l: any = ((Math as any).min as any)(((e as any).t as any) / ((e as any).dur as any), 1);
      return ((Math as any).min as any)(1, ((Math as any).max as any)(0, (Bo as any)(l, (J0 as any)(!0, (e as any).dur))));
    },
    morph: o,
    lidMorph: r,
    blink: a,
    play: c,
    step(l: any): any {
      (e as any) != (null as any) && !(e as any).isHeld && (i as any)(e, ((e as any).t as any) + (l as any));
    },
    release(): any {
      (u as any)(!1);
    },
    seek(l: any, h: any): any {
      t = "neutral", n = (Z as any)((_t as any).neutral, rt), e = null;
      let f: any = 0;
      const d: any = (p: any): any => {
        (e as any) != (null as any) && (i as any)(e, (p as any) - (f as any));
      };
      for (const p of l) {
        if (((p as any).t as any) > ((h as any) + (1e-9 as any) as any)) break;
        (d as any)((p as any).t), (c as any)(p), f = (p as any).t;
      }
      (d as any)(h), (u as any)(!0);
    }
  };
}
const _3: any = ["spin", "bounce", "nod"],
  x2: number = .9,
  b2: number = .4,
  v2: number = .62,
  w2: number = .3,
  k2: number = .5,
  A2: number = 16;
function He(this: any, {
  poke: t,
  turns: n
}: any): any {
  switch (t) {
    case "spin":
      return (x2 as any) + ((b2 as any) * ((n as any) - (1 as any) as any) as any);
    case "bounce":
      return v2;
    case "nod":
      return k2;
  }
}
function E2(this: any, t: any): any {
  let n: any = 0,
    e: any = 0,
    s: any = 0,
    o: any = 1,
    r: any = 1;
  for (const a of t) {
    const c: any = ((Math as any).min as any)(1, ((a as any).t as any) / ((He as any)(a) as any));
    switch ((a as any).poke) {
      case "spin":
        e += ((180 as any) * ((a as any).turns as any) as any) * ((1 as any) - (((Math as any).cos as any)(((Math as any).PI as any) * (c as any)) as any) as any);
        break;
      case "nod":
        n += (A2 as any) * ((f0 as any)(c, 0, 1) as any);
        break;
      case "bounce":
        {
          const i: any = ((f0 as any)(c, 0, .18) as any) + ((f0 as any)(c, .82, 1) as any),
            u: any = (f0 as any)(c, .18, .82);
          s += (w2 as any) * (((Math as any).sin as any)(((Math as any).PI as any) * ((C as any)(((c as any) - (.14 as any) as any) / (.72 as any), 0, 1) as any)) as any), o *= ((1 as any) + ((.08 as any) * (i as any) as any) as any) - ((.04 as any) * (u as any) as any), r *= ((1 as any) - ((.1 as any) * (i as any) as any) as any) + ((.06 as any) * (u as any) as any);
          break;
        }
    }
  }
  return {
    pitch: n,
    yaw: e,
    lift: s,
    squash: [o, r]
  };
}
function f0(this: any, t: any, n: any, e: any): any {
  return (t as any) <= (n as any) || (t as any) >= (e as any) ? 0 : (((Math as any).sin as any)((((Math as any).PI as any) * ((t as any) - (n as any) as any) as any) / ((e as any) - (n as any) as any)) as any) ** (2 as any);
}
const I2: number = .14,
  _2: number = .55,
  P2: any = {
    heartChubby: .6,
    wedge: .55
  },
  S2: number = 2;
function p1(this: any, t: any, n: any, e: any): any {
  const s: any = (t as any) !== ("sphere" as any),
    o: any = (P2 as any)[t] ?? 1;
  return {
    rx: ((-(s ? 19 : 14) as any) * (o as any) as any) * (e as any),
    ry: (((s ? 26 : 18) as any) * (o as any) as any) * (n as any),
    px: ((s ? .07 : .03) as any) * (n as any),
    py: ((s ? .055 : .024) as any) * (e as any)
  };
}
function P3(this: any, t: any, n: any, e: any = S2): any {
  const s: any = (((Math as any).max as any)((t as any).width, 1) as any) * (e as any),
    o: any = (r: any): any => ((Math as any).max as any)(-1, ((Math as any).min as any)(1, r));
  return [(o as any)((((n as any).x as any) - (((t as any).left as any) + (((t as any).width as any) / (2 as any) as any) as any) as any) / (s as any)), (o as any)((-(((n as any).y as any) - (((t as any).top as any) + (((t as any).height as any) / (2 as any) as any) as any)) as any) / (s as any))];
}
const C2: any = {
    thinking: "dots",
    orbit: "orbit",
    radar: "radar",
    progress: "progress",
    spawning: "gather",
    dictating: "wave",
    sending: "send",
    receiving: "receive",
    uploading: "dock",
    bouncing: "ball",
    writing: "pencil",
    alerting: "bang",
    "powering-down": "standby"
  },
  $2: any = (Math as any).PI,
  T2: number = .1,
  R2: number = 2654435769,
  F2: any = new (Set as any)(["progress", "spawning"]),
  O2: any = {
    progress: 2.5,
    spawning: 2
  },
  L2: number = 1.5;
function Nn(this: any, t: any): any {
  let n: any = (t as any) | (0 as any);
  return (): any => {
    n = ((n as any) + (1831565813 as any) as any) | (0 as any);
    let e: any = ((Math as any).imul as any)((n as any) ^ ((n as any) >>> (15 as any) as any), (n as any) | (1 as any));
    return e ^= (e as any) + (((Math as any).imul as any)((e as any) ^ ((e as any) >>> (7 as any) as any), (e as any) | (61 as any)) as any), ((((e as any) ^ ((e as any) >>> (14 as any) as any)) as any) >>> (0 as any) as any) / (4294967296 as any);
  };
}
function Dn(this: any, t: any): any {
  return (O2 as any)[t] ?? 2.5;
}
function B2(this: any, t: any = {}): any {
  const n: any = (t as any).isReducedMotion ?? !1,
    e: any = (Nn as any)((t as any).seed ?? R2),
    s: any = (b0 as any)(0),
    o: any = (b0 as any)(1),
    r: any = (b0 as any)(0);
  let a: any = null,
    c: any = null,
    i: any = null,
    u: any = null,
    l: any = !1,
    h: any = 0,
    f: any = 0,
    d: any = 1,
    p: any = !1,
    y: any = 0,
    m: any = 0,
    g: any = 0,
    x: any = 0,
    w: any = 0;
  const v: any = (): any => {
    const b: any = (a as any) == (null as any) ? null : (C2 as any)[a],
      A: any = g;
    (a as any) !== (c as any) && (c = a, (a as any) != (null as any) && (g = y, l = !1));
    let E: any = (b as any) != (null as any);
    (a as any) != (null as any) && ((F2 as any).has as any)(a) && (!l && ((y as any) - (g as any) as any) > ((Dn as any)(a) as any) ? (l = !0, h = y) : l && ((y as any) - (h as any) as any) > (L2 as any) && (l = !1, g = y), E = !l), (s as any).t = E ? 1 : 0, (b as any) != (null as any) && (b as any) !== (i as any) && ((i as any) != (null as any) && ((s as any).x as any) > (.02 as any) ? (u = i, x = m, w = A, (o as any).x = n ? 1 : 0) : (u = null, (o as any).x = 1), (o as any).v = 0, (o as any).t = 1, i = b, m = y), (b as any) == (null as any) && ((s as any).x as any) < (.004 as any) && (i = null, u = null), ((o as any).x as any) > (.996 as any) && (u = null), (E as any) !== (p as any) && (E && !n && (d = ((e as any)() as any) < (.5 as any) ? 1 : -1), n || (f += ($2 as any) * (d as any), (r as any).t = f), p = E);
  };
  return {
    get target(): any {
      return a;
    },
    set(b: any): any {
      a = b;
    },
    advance(b: any): any {
      const A: any = (b as any) > (0 as any) ? ((Math as any).min as any)(b, T2) : 0;
      y += A, (v as any)();
      const E: any = (De as any)(A),
        P: any = (A as any) / (E as any);
      for (let $: any = 0; ($ as any) < (E as any); $++) (v0 as any)(s, 14, 1, P), (v0 as any)(o, 11, 1, P), (v0 as any)(r, 14, 1, P);
      n && ((o as any).x = 1, (r as any).x = (r as any).t, (s as any).x = (s as any).t);
    },
    settle(): any {
      (v as any)();
      for (const b of [s, o, r]) (b as any).x = (b as any).t, (b as any).v = 0;
      (v as any)();
    },
    snapshot(): any {
      return {
        amount: (C as any)((s as any).x, 0, 1),
        spin: (r as any).x,
        kind: i,
        outgoing: u,
        swap: (C as any)((o as any).x, 0, 1),
        clock: {
          stateTime: (y as any) - (m as any),
          shotTime: (y as any) - (g as any)
        },
        outgoingClock: {
          stateTime: (y as any) - (x as any),
          shotTime: (y as any) - (w as any)
        },
        isReducedMotion: n,
        isSettled: (((Math as any).abs as any)(((s as any).x as any) - ((s as any).t as any)) as any) < (.001 as any) && (((Math as any).abs as any)(((r as any).t as any) - ((r as any).x as any)) as any) < (.01 as any) && ((o as any).x as any) > (.996 as any)
      };
    }
  };
}
const N2: any = new (Map as any)([["position", "position"], ["rotation", "rotation"], ["squash", "squash"], ["scale", "zoom"], ["lids", "lids"], ["expression", "expression"], ["pos", "position"], ["rot", "rotation"], ["scl", "squash"], ["zoom", "zoom"], ["expr", "expression"]]),
  D2: any = new (Map as any)([["blob", "sphere"], ["sphereWide", "sphere"], ["arch", "horseshoe"], ["spark", "sparkle"], ["star", "star6"], ["heart", "heartChubby"], ["hexagon", "hex"]]),
  q2: any = [.4, 0, .2, 1],
  c0: number = .6,
  Ke: any = (((): any => {
    const [t, n, e]: any = (zo as any)(Ho);
    return [(t as any) / (Pt as any), (n as any) / (Pt as any), (e as any) / (Pt as any)];
  }) as any)(),
  Ue: any = {
    duration: 10,
    body: null,
    squashAnchor: 0,
    restTime: 0,
    inspect: {},
    position: [],
    rotation: [],
    squash: [],
    zoom: [],
    lids: [],
    expression: []
  },
  M1: any = {
    ...Ue,
    rotation: [{
      t: 0,
      v: Ke,
      ease: zt
    }]
  };
function z2(this: any, t: any): any {
  return ((Ko as any).some as any)((n: any): any => (n as any) === (t as any));
}
function G2(this: any, t: any): any {
  const n: any = ((D2 as any).get as any)(t) ?? t;
  return (z2 as any)(n) ? n : "sphere";
}
function Y2(this: any, t: any): any {
  return (t as any) != (null as any) && ((t as any).length as any) === (4 as any);
}
function H2(this: any, {
  t,
  v: n,
  ease: e
}: any): any {
  return {
    t,
    v: (typeof n as any) == ("string" as any) ? [] : n,
    ease: (Y2 as any)(e) ? e : zt
  };
}
function K2(this: any, t: any): any {
  return [{
    t,
    v: [0],
    ease: zt
  }, {
    t: (t as any) + ((bn as any) * (.45 as any) as any),
    v: [1],
    ease: zt
  }, {
    t: (t as any) + (bn as any),
    v: [0],
    ease: zt
  }];
}
function U2(this: any, {
  inspect: t
}: any): any {
  const n: any = t?.bias;
  return {
    bias: (n as any) !== (void 0 as any) && ((Number as any).isFinite as any)(n) ? ((Math as any).min as any)(1, ((Math as any).max as any)(-1, n)) : void 0,
    isFollowingTurn: t?.follow
  };
}
function j2(this: any, t: any): any {
  const n: any = new (Map as any)();
  for (const [a, c] of ((Object as any).entries as any)((t as any).tracks)) {
    const i: any = ((N2 as any).get as any)(a);
    (i as any) !== (void 0 as any) && ((n as any).set as any)(i, c);
  }
  const e: any = (a: any): any => (((((n as any).get as any)(a) ?? []) as any).map as any)(H2),
    s: any = (e as any)("lids"),
    o: any = [];
  let r: any = !1;
  for (const a of ((n as any).get as any)("expression") ?? []) {
    if (((a as any).v as any) === ("blink" as any)) {
      r = !0, ((s as any).push as any)(...(K2 as any)((a as any).t));
      continue;
    }
    ((o as any).push as any)({
      t: (a as any).t,
      name: (typeof (a as any).v as any) == ("string" as any) ? (t2 as any)((a as any).v) : "neutral",
      isThroughBlink: ((a as any).cut as any) === (!1 as any)
    });
  }
  return r && ((s as any).sort as any)((a: any, c: any): any => ((a as any).t as any) - ((c as any).t as any)), {
    duration: (t as any).duration,
    body: (G2 as any)((t as any).body ?? "sphere"),
    squashAnchor: (t as any).squashAnchor ?? 0,
    restTime: (t as any).workArea ? ((t as any).workArea as any).start : 0,
    inspect: (U2 as any)(t),
    position: (e as any)("position"),
    rotation: (e as any)("rotation"),
    squash: (e as any)("squash"),
    zoom: (e as any)("zoom"),
    lids: s,
    expression: o
  };
}
function at(this: any, t: any, n: any): any {
  if (((t as any).length as any) === (0 as any)) return null;
  if ((n as any) <= (((t as any)[0] as any).t as any)) return ((t as any)[0] as any).v;
  const e: any = (t as any)[((t as any).length as any) - (1 as any)];
  if ((n as any) >= ((e as any).t as any)) return (e as any).v;
  let s: any = 0;
  for (; (s as any) < (((t as any).length as any) - (2 as any) as any) && (((t as any)[(s as any) + (1 as any)] as any).t as any) <= (n as any);) s++;
  const o: any = (t as any)[s],
    r: any = (t as any)[(s as any) + (1 as any)],
    a: any = ((n as any) - ((o as any).t as any) as any) / (((Math as any).max as any)(((r as any).t as any) - ((o as any).t as any), 1e-9) as any),
    c: any = (On as any)(a, (o as any).ease);
  return (((o as any).v as any).map as any)((i: any, u: any): any => (i as any) + (((((r as any).v as any)[u] as any) - (i as any) as any) * (c as any) as any));
}
function m1(this: any, t: any): any {
  const n: any = (t as any).restTime,
    e: any = (at as any)((t as any).rotation, n),
    s: any = (at as any)((t as any).position, n),
    o: any = (at as any)((t as any).squash, n),
    r: any = (at as any)((t as any).zoom, n),
    a: any = (at as any)((t as any).lids, n);
  let c: any = "neutral",
    i: any = !1;
  for (const u of (t as any).expression) i || (c = (u as any).name, i = !0), ((u as any).t as any) <= ((n as any) + (1e-9 as any) as any) && (c = (u as any).name);
  return {
    rot: e ? [(e as any)[0], (e as any)[1], (e as any)[2]] : [0, 0, 0],
    pos: s ? [(s as any)[0], (s as any)[1]] : [0, 0],
    scl: o ? [(o as any)[0], (o as any)[1]] : [1, 1],
    zoom: r ? (r as any)[0] : c0,
    lids: a ? ((Math as any).min as any)(1, ((Math as any).max as any)(0, (a as any)[0])) : 0,
    expr: c,
    squashAnchor: (t as any).squashAnchor
  };
}
function tn(this: any, t: any, n: any): any {
  return (t as any) + ((360 as any) * (((Math as any).round as any)(((n as any) - (t as any) as any) / (360 as any)) as any) as any);
}
function nn(this: any, t: any, n: any): any {
  return ((Math as any).abs as any)((((((t as any) - (n as any) as any) % (360 as any) as any) + (540 as any) as any) % (360 as any) as any) - (180 as any));
}
function X2(this: any, t: any, n: any): any {
  return ((nn as any)(((t as any).rot as any)[0], ((n as any).rot as any)[0]) as any) < (4 as any) && ((nn as any)(((t as any).rot as any)[1], ((n as any).rot as any)[1]) as any) < (4 as any) && ((nn as any)(((t as any).rot as any)[2], ((n as any).rot as any)[2]) as any) < (4 as any) && (((Math as any).abs as any)((((t as any).pos as any)[0] as any) - (((n as any).pos as any)[0] as any)) as any) < (.015 as any) && (((Math as any).abs as any)((((t as any).pos as any)[1] as any) - (((n as any).pos as any)[1] as any)) as any) < (.015 as any) && (((Math as any).abs as any)((((t as any).scl as any)[0] as any) - (((n as any).scl as any)[0] as any)) as any) < (.02 as any) && (((Math as any).abs as any)((((t as any).scl as any)[1] as any) - (((n as any).scl as any)[1] as any)) as any) < (.02 as any) && (((Math as any).abs as any)(((t as any).zoom as any) - ((n as any).zoom as any)) as any) < (.02 as any) && (((Math as any).abs as any)(((t as any).lids as any) - ((n as any).lids as any)) as any) < (.05 as any);
}
function Z2(this: any, t: any, n: any): any {
  const e: any = (o: any, r: any): any => [{
      t: 0,
      v: o,
      ease: q2
    }, {
      t: xn,
      v: r,
      ease: zt
    }],
    s: any = [(tn as any)(((n as any).rot as any)[0], ((t as any).rot as any)[0]), (tn as any)(((n as any).rot as any)[1], ((t as any).rot as any)[1]), (tn as any)(((n as any).rot as any)[2], ((t as any).rot as any)[2])];
  return {
    ...Ue,
    duration: xn,
    squashAnchor: (t as any).squashAnchor,
    position: (e as any)((t as any).pos, (n as any).pos),
    rotation: (e as any)((t as any).rot, s),
    squash: (e as any)((t as any).scl, (n as any).scl),
    zoom: (e as any)([(t as any).zoom], [(n as any).zoom]),
    lids: ((t as any).lids as any) === (0 as any) && ((n as any).lids as any) === (0 as any) ? [] : (e as any)([(t as any).lids], [(n as any).lids])
  };
}
const V2: any = {
    left: {
      rot: [0, -20, 0],
      pos: [-.1, 0]
    },
    right: {
      rot: [0, 20, 0],
      pos: [.1, 0]
    },
    up: {
      rot: [-20, 0, 0],
      pos: [0, .1]
    },
    down: {
      rot: [20, 0, 0],
      pos: [0, -.1]
    },
    center: {
      rot: [0, 0, 0],
      pos: [0, 0]
    }
  },
  Q2: any = [.42, 0, .58, 1],
  W2: number = .5,
  J2: number = .1,
  tr: number = 10,
  nr: number = 1e-4,
  er: number = .5,
  sr: number = .001,
  y1: string = "rest";
function en(this: any, t: any): any {
  return (360 as any) * (((Math as any).round as any)((t as any) / (360 as any)) as any);
}
function g1(this: any, t: any, n: any): any {
  let e: any = "neutral";
  for (const s of t) {
    if (((s as any).t as any) > ((n as any) + (1e-9 as any) as any)) break;
    e = (s as any).name;
  }
  return e;
}
function or(this: any, t: any = {}): any {
  const n: any = ((Math as any).min as any)(3, ((Math as any).max as any)(.2, (t as any).zoomMul || 1)),
    e: any = (g2 as any)();
  let s: any = (t as any).body ?? "sphere",
    o: any = ((t as any).body as any) !== (void 0 as any),
    r: any = [];
  const a: any = (b0 as any)(1),
    c: any = (B2 as any)();
  let i: any = null,
    u: any = Ke,
    l: any = [0, 0],
    h: any = [1, 1],
    f: any = 0,
    d: any = (c0 as any) * (n as any),
    p: any = {
      bias: -1,
      isFollowingTurn: !0
    },
    y: any = null,
    m: any = {
      isHeld: !1,
      isAlways: (t as any).isGazeAlways ?? !1,
      x: 0,
      y: 0,
      cx: 0,
      cy: 0,
      hold: 0
    },
    g: any = M1,
    x: any = 0,
    w: any = !1,
    v: any = !0,
    b: any = !1,
    A: any = null,
    E: any = null,
    P: any = null,
    $: any = 0,
    D: any = 0,
    z: any = null,
    B: any = null,
    R: any = !1,
    O: any = [];
  const H: any = (): any => {
      const k: any = (at as any)((g as any).position, x);
      l = k ? [(k as any)[0], (k as any)[1]] : [0, 0];
      const I: any = (at as any)((g as any).rotation, x);
      u = I ? [(I as any)[0], (I as any)[1], (I as any)[2]] : [0, 0, 0];
      const _: any = (at as any)((g as any).squash, x);
      h = _ ? [(_ as any)[0], (_ as any)[1]] : [1, 1];
      const G: any = (at as any)((g as any).zoom, x);
      G && (d = (((Math as any).min as any)(2.5, ((Math as any).max as any)(.25, (G as any)[0])) as any) * (n as any));
    },
    K: any = (k: any): any => {
      if (((((e as any).blinkAmount as any)() ?? (tt as any)()) as any) > (0 as any)) {
        B = k;
        return;
      }
      (k as any)(), (N as any)();
    },
    U: any = (k: any, I: any): any => {
      if ((z as any) == (null as any)) for (const _ of (g as any).expression) ((_ as any).t as any) <= (k as any) || ((_ as any).t as any) > (I as any) || (K as any)((): any => ((e as any).play as any)(_));
    },
    S: any = (k: any): any => {
      x = k, y = null, B = null, (H as any)(), ((e as any).seek as any)((g as any).expression, k), (z as any) != (null as any) && ((e as any).seek as any)([{
        t: 0,
        name: z,
        isThroughBlink: !1
      }], 0);
    },
    Y: any = (): any => {
      const k: any = (at as any)((g as any).lids, x);
      return k ? ((Math as any).min as any)(1, ((Math as any).max as any)(0, (k as any)[0])) : 0;
    },
    tt: any = (): any => R ? 0 : (Y as any)(),
    N: any = (): any => {
      !(n2 as any)((e as any).name) || (e as any).isMorphing ? R = !0 : R && ((Y as any)() as any) === (0 as any) && (R = !1);
    },
    nt: any = (): any => ({
      rot: u,
      pos: l,
      scl: h,
      zoom: (d as any) / (n as any),
      lids: (tt as any)(),
      expr: (e as any).name,
      squashAnchor: f
    }),
    st: any = (k: any): any => {
      w = !1, g = k, x = 0, f = (k as any).squashAnchor, ((k as any).body as any) != (null as any) && !o && (s = (k as any).body), p = {
        bias: ((k as any).inspect as any).bias ?? (p as any).bias,
        isFollowingTurn: ((k as any).inspect as any).isFollowingTurn ?? (p as any).isFollowingTurn
      };
    },
    At: any = (k: any): any => {
      if (E = null, (st as any)((k as any).clip), A = {
        clip: (k as any).clip,
        name: (k as any).name
      }, v = !0, !(k as any).isPlaying) {
        (S as any)(0), (k as any).isRest && (m = {
          ...m,
          hold: 0
        });
        return;
      }
      w = !0, ((k as any).phase as any) > (0 as any) && (S as any)(((k as any).phase as any) * (((k as any).clip as any).duration as any)), ((e as any).release as any)(), ((k as any).phase as any) <= (0 as any) && (U as any)(-1e-9, 0);
    },
    j0: any = (k: any): any => {
      const I: any = (nt as any)(),
        _: any = (m1 as any)((k as any).clip);
      E = k, (st as any)((Z2 as any)(I, _)), v = !1, w = !0, (z as any) == (null as any) && ((I as any).expr as any) !== ((_ as any).expr as any) && (K as any)((): any => ((e as any).morph as any)((_ as any).expr));
    },
    Os: any = (): any => (E as any) != (null as any) || (A as any) == (null as any) || (X2 as any)((nt as any)(), (m1 as any)((A as any).clip)) ? !1 : ((j0 as any)({
      ...A,
      isPlaying: !0,
      phase: 0,
      isRest: !1
    }), !0),
    Ls: any = (k: any): any => {
      const I: any = x;
      let _: any = (I as any) + (k as any);
      if ((_ as any) >= ((g as any).duration as any)) {
        if ((U as any)(I, (g as any).duration), v) {
          if (D += 1, (Os as any)()) return;
          _ = (_ as any) - ((g as any).duration as any), (_ as any) >= ((g as any).duration as any) && (_ = 0), (U as any)(-1e-9, _), x = _;
        } else x = (g as any).duration, w = !1, (E as any) != (null as any) && (At as any)(E);
      } else (U as any)(I, _), x = _;
      y = null, (H as any)();
    },
    X0: any = (k: any, I: any): any => {
      const _: any = (k as any) + (((I as any) - (k as any) as any) * (I2 as any) as any);
      return (((Math as any).abs as any)((I as any) - (_ as any)) as any) < (sr as any) ? I : _;
    },
    Bs: any = (): any => {
      if (b || !(m as any).isHeld && ((m as any).hold as any) === (0 as any) || (m = {
        ...m,
        cx: (X0 as any)((m as any).cx, (m as any).x),
        cy: (X0 as any)((m as any).cy, (m as any).y),
        hold: (X0 as any)((m as any).hold, (m as any).isHeld ? 1 : 0)
      }, w)) return;
      (H as any)();
      const k: any = (p1 as any)(s, (m as any).cx, (m as any).cy),
        {
          hold: I
        }: any = m;
      u = [((u as any)[0] as any) + ((((k as any).rx as any) - ((u as any)[0] as any) as any) * (I as any) as any), ((u as any)[1] as any) + ((((k as any).ry as any) - ((u as any)[1] as any) as any) * (I as any) as any), ((u as any)[2] as any) * ((1 as any) - (I as any) as any)], l = [((l as any)[0] as any) + ((((k as any).px as any) - ((l as any)[0] as any) as any) * (I as any) as any), ((l as any)[1] as any) + ((((k as any).py as any) - ((l as any)[1] as any) as any) * (I as any) as any)];
    },
    Ns: any = (k: any): any => {
      if ((y as any) == (null as any)) return;
      const I: any = ((y as any).t as any) + (k as any),
        _: any = ((Math as any).min as any)((I as any) / (W2 as any), 1),
        G: any = (On as any)(_, Q2),
        {
          fromRot: T,
          toRot: j,
          fromPos: pt,
          toPos: ot
        }: any = y;
      u = [((T as any)[0] as any) + ((((j as any)[0] as any) - ((T as any)[0] as any) as any) * (G as any) as any), ((T as any)[1] as any) + ((((j as any)[1] as any) - ((T as any)[1] as any) as any) * (G as any) as any), ((T as any)[2] as any) + ((((j as any)[2] as any) - ((T as any)[2] as any) as any) * (G as any) as any)], l = [((pt as any)[0] as any) + ((((ot as any)[0] as any) - ((pt as any)[0] as any) as any) * (G as any) as any), ((pt as any)[1] as any) + ((((ot as any)[1] as any) - ((pt as any)[1] as any) as any) * (G as any) as any)], (_ as any) >= (1 as any) ? (u = j, l = ot, y = null) : y = {
        ...y,
        t: I
      };
    },
    n1: any = (): any => {
      if (((r as any).length as any) === (0 as any)) return [{
        body: s,
        weight: 1
      }];
      const k: any = (P0 as any)((C as any)((a as any).x, 0, 1)),
        I: any = new (Map as any)();
      for (const T of r) ((I as any).set as any)((T as any).body, ((((I as any).get as any)((T as any).body) ?? 0) as any) + (((T as any).weight as any) * ((1 as any) - (k as any) as any) as any));
      ((I as any).set as any)(s, ((((I as any).get as any)(s) ?? 0) as any) + (k as any));
      const _: any = (([...I] as any).filter as any)(([, T]: any): any => (T as any) > (nr as any)),
        G: any = ((_ as any).reduce as any)((T: any, [, j]: any): any => (T as any) + (j as any), 0);
      return ((_ as any).map as any)(([T, j]: any): any => ({
        body: T,
        weight: (j as any) / (G as any)
      }));
    },
    Ds: any = (k: any): any => {
      (k as any) !== (s as any) && (r = (n1 as any)(), s = k, (a as any).x = 0, (a as any).v = 0, (a as any).t = 1);
    },
    qs: any = (k: any): any => {
      if (((r as any).length as any) === (0 as any)) return;
      const I: any = (De as any)(k);
      for (let _: any = 0; (_ as any) < (I as any); _++) (v0 as any)(a, tr, 1, (k as any) / (I as any));
      (((Math as any).abs as any)(((a as any).x as any) - (1 as any)) as any) < (.001 as any) && (((Math as any).abs as any)((a as any).v) as any) < (.01 as any) && ((a as any).x = 1, (a as any).v = 0, r = []);
    },
    zs: any = (): any => ((e as any).blinkAmount as any)() ?? (tt as any)(),
    Gs: any = (k: any, I: any): any => {
      const _: any = (m2 as any)(((e as any).eyes as any)(), I, p, k),
        G: any = (zs as any)();
      return (G as any) <= (1e-4 as any) ? _ : [(h1 as any)((_ as any)[0], G), (h1 as any)((_ as any)[1], G)];
    };
  return {
    get isPlaying(): any {
      return w;
    },
    get time(): any {
      return x;
    },
    get duration(): any {
      return (g as any).duration;
    },
    get loopCount(): any {
      return D;
    },
    get face(): any {
      return (e as any).name;
    },
    get isSettled(): any {
      const k: any = b || ((m as any).hold as any) === (((m as any).isHeld ? 1 : 0) as any) && (!(m as any).isHeld || ((m as any).cx as any) === ((m as any).x as any) && ((m as any).cy as any) === ((m as any).y as any));
      return !w && ((O as any).length as any) === (0 as any) && ((r as any).length as any) === (0 as any) && (y as any) == (null as any) && (B as any) == (null as any) && !(e as any).isMorphing && (((e as any).blinkAmount as any)() as any) == (null as any) && (((c as any).snapshot as any)() as any).isSettled && k;
    },
    load(k: any, {
      isPlaying: I = !0,
      transition: _ = "bridge",
      phase: G = 0
    }: any = {}): any {
      const T: any = (k as any).name || A?.name || "recipe",
        j: any = {
          clip: (j2 as any)(k),
          name: T,
          isPlaying: I,
          phase: ((C as any)(G, 0, 1) as any) % (1 as any),
          isRest: !1
        };
      (_ as any) === ("bridge" as any) && (A as any) != (null as any) && ((E as any) != (null as any) || ((A as any).name as any) !== (T as any)) ? (j0 as any)(j) : (At as any)(j);
    },
    play(): any {
      b = !1, w = !0;
    },
    pause(): any {
      b = !0, w = !1;
    },
    stop(): any {
      w = !1, (S as any)(0);
    },
    rest(): any {
      b = !1;
      const k: any = {
        clip: M1,
        name: y1,
        isPlaying: !1,
        phase: 0,
        isRest: !0
      };
      if ((E as any) == (null as any) && ((A as any) == (null as any) || ((A as any).name as any) === (y1 as any))) {
        (A as any) == (null as any) && (At as any)(k);
        return;
      }
      (j0 as any)(k);
    },
    seek: S,
    setBody(k: any, {
      isInstant: I = !1
    }: any = {}): any {
      if (o = !0, !I) {
        (Ds as any)(k);
        return;
      }
      s = k, r = [], (a as any).x = 1, (a as any).v = 0;
    },
    setMorph(k: any, {
      isInstant: I = !1
    }: any = {}): any {
      ((c as any).set as any)(k), I && ((c as any).settle as any)();
    },
    setExpression(k: any, {
      isThroughBlink: I = !1
    }: any = {}): any {
      (K as any)((): any => {
        I && !(s0 as any)(k) && !(s0 as any)((e as any).name) ? ((e as any).lidMorph as any)(k) : ((e as any).morph as any)(k);
      });
    },
    holdFace(k: any): any {
      (k as any) !== (z as any) && (z = k, (K as any)((): any => {
        const I: any = z ?? ((E as any) == (null as any) ? (g1 as any)((g as any).expression, x) : (g1 as any)(((E as any).clip as any).expression, 0));
        (I as any) !== ((e as any).name as any) && ((e as any).morph as any)(I);
      }));
    },
    poke(k: any, {
      turns: I = 1
    }: any = {}): any {
      O = [...O, {
        poke: k,
        t: 0,
        turns: ((Math as any).max as any)(1, ((Math as any).round as any)(I))
      }];
    },
    blink(): any {
      ((e as any).blink as any)();
    },
    setInspect({
      bias: k,
      isFollowingTurn: I
    }: any): any {
      p = {
        bias: (k as any) === (void 0 as any) ? (p as any).bias : ((Math as any).min as any)(1, ((Math as any).max as any)(-1, k)),
        isFollowingTurn: I ?? (p as any).isFollowingTurn
      };
    },
    setGaze(k: any): any {
      if ((k as any) == (null as any)) {
        m = {
          ...m,
          isHeld: !1
        };
        return;
      }
      const I: any = (C as any)((k as any)[0] || 0, -1, 1),
        _: any = (C as any)((k as any)[1] || 0, -1, 1);
      m = ((m as any).hold as any) === (0 as any) ? {
        ...m,
        isHeld: !0,
        x: I,
        y: _,
        cx: I,
        cy: _
      } : {
        ...m,
        isHeld: !0,
        x: I,
        y: _
      };
    },
    setGazeAlways(k: any): any {
      m = {
        ...m,
        isAlways: k
      };
    },
    look(k: any): any {
      const I: any = (V2 as any)[k];
      y = {
        t: 0,
        fromRot: u,
        toRot: (I as any).rot,
        fromPos: l,
        toPos: (I as any).pos
      };
    },
    setGlow(k: any): any {
      P = k;
    },
    advance(k: any): any {
      (Bs as any)();
      const I: any = ((Math as any).min as any)(k, J2),
        _: any = (1 as any) - ((((c as any).snapshot as any)() as any).amount as any);
      if (w && (Ls as any)((I as any) * (_ as any)), (Ns as any)(I), ((e as any).step as any)(I), (B as any) != (null as any) && ((((e as any).blinkAmount as any)() ?? (tt as any)()) as any) === (0 as any)) {
        const T: any = B;
        B = null, (T as any)();
      }
      (N as any)(), (qs as any)(I), O = ((((O as any).map as any)((T: any): any => ({
        ...T,
        t: ((T as any).t as any) + (I as any)
      })) as any).filter as any)((T: any): any => ((T as any).t as any) < ((He as any)(T) as any)), ((c as any).advance as any)(I);
      const G: any = ((c as any).snapshot as any)();
      ((G as any).amount as any) > (0 as any) || !(G as any).isSettled ? i ??= [(en as any)((u as any)[0]), (en as any)((u as any)[1]), (en as any)((u as any)[2])] : i = null, $ += k;
    },
    frame(): any {
      const k: any = (m as any).isAlways && w && !b ? (p1 as any)(s, (m as any).cx, (m as any).cy) : null,
        I: any = (_2 as any) * ((m as any).hold as any),
        _: any = (E2 as any)(O),
        G: any = [(((u as any)[0] as any) + ((k ? ((k as any).rx as any) * (I as any) : 0) as any) as any) + ((_ as any).pitch as any), (((u as any)[1] as any) + ((k ? ((k as any).ry as any) * (I as any) : 0) as any) as any) + ((_ as any).yaw as any), (u as any)[2]],
        T: any = [((l as any)[0] as any) + ((k ? ((k as any).px as any) * (I as any) : 0) as any), (((l as any)[1] as any) + ((k ? ((k as any).py as any) * (I as any) : 0) as any) as any) + ((_ as any).lift as any)],
        j: any = [((h as any)[0] as any) * (((_ as any).squash as any)[0] as any), ((h as any)[1] as any) * (((_ as any).squash as any)[1] as any)],
        pt: any = ((e as any).inspectWeight as any)(),
        ot: any = ((c as any).snapshot as any)(),
        Et: any = (1 as any) - ((ot as any).amount as any),
        Ys: any = (((ot as any).spin as any) % ((2 as any) * ((Math as any).PI as any) as any) as any) / (Pt as any),
        e1: any = i ?? [0, 0, 0],
        Z0: any = (V0: any): any => ((e1 as any)[V0] as any) + ((((G as any)[V0] as any) - ((e1 as any)[V0] as any) as any) * (Et as any) as any),
        s1: any = (Z0 as any)(1);
      return {
        body: s,
        quat: (qo as any)(((Z0 as any)(0) as any) * (Pt as any), ((s1 as any) + (Ys as any) as any) * (Pt as any), ((Z0 as any)(2) as any) * (Pt as any)),
        zoom: d,
        offset: (Et as any) === (1 as any) ? T : [((T as any)[0] as any) * (Et as any), ((T as any)[1] as any) * (Et as any)],
        squash: (Et as any) === (1 as any) ? j : [(1 as any) + ((((j as any)[0] as any) - (1 as any) as any) * (Et as any) as any), (1 as any) + ((((j as any)[1] as any) - (1 as any) as any) * (Et as any) as any)],
        squashAnchor: f,
        eyes: ((ot as any).amount as any) >= (er as any) ? null : (Gs as any)(s1, pt),
        glow: P && {
          ...P,
          midT: (.5 as any) + ((.5 as any) * (((Math as any).sin as any)((($ as any) * (1e3 as any) as any) / (860 as any)) as any) as any)
        },
        inspectWeight: pt,
        bodies: (n1 as any)(),
        morph: ((ot as any).kind as any) === (null as any) && (ot as any).isSettled ? null : ot
      };
    }
  };
}
const Y0: number = .92;
function qn(this: any, t: any): any {
  return (t as any) / (c0 as any);
}
function o0(this: any, t: any): any {
  const n: any = (e: any): any => ((((((Math as any).round as any)((((Math as any).min as any)(1, ((Math as any).max as any)(0, e)) as any) * (255 as any)) as any).toString as any)(16) as any).padStart as any)(2, "0");
  return `#${(n as any)((t as any)[0])}${(n as any)((t as any)[1])}${(n as any)((t as any)[2])}`;
}
function zn(this: any, t: any): any {
  return (t as any).inkPaint ?? (o0 as any)((t as any).ink);
}
function Gn(this: any, t: any): any {
  return (t as any).spotPaint ?? (o0 as any)((t as any).spot);
}
function Yn(this: any, t: any, n: any, e: any = t): any {
  return `<svg xmlns="http://www.w3.org/2000/svg" id="${n}" width="${e}" height="${e}" viewBox="0 0 ${t} ${t}">`;
}
const rr: any = [{
    name: "Blocked_A",
    duration: 2.12,
    body: "sphere",
    squashAnchor: 0,
    workArea: {
      start: 0,
      end: 2.1
    },
    inspect: {
      bias: -1,
      follow: !0
    },
    tracks: {
      position: [{
        t: 0,
        v: [0, 0],
        ease: [.7968976121829217, .023358873568246466, .25805236576790014, .9399472349279558]
      }, {
        t: .38639855209383034,
        v: [.020362603567309623, .0321716960933944],
        ease: [.7968976121829217, .023358873568246466, .25805236576790014, .9399472349279558]
      }, {
        t: .7460619029579755,
        v: [-.13200621755876568, .04928491306786316],
        ease: [.16206624605678288, .6573718201333453, .4776581771164943, .9890940068909632]
      }, {
        t: .8660990266653926,
        v: [-.0027221809712659807, .05083886406795958],
        ease: [.34720720728860055, -.008777460320222181, .2695010548130348, 1.02521711915982]
      }, {
        t: 1.0493565888199954,
        v: [-.12038936798795193, .04235181137057312],
        ease: [.2773807176656155, .29281356631792965, .35341088328075676, 1.0737667821535892]
      }, {
        t: 1.2986659810851888,
        v: [-.0027221809712659807, .05083886406795958],
        ease: [.34720720728860055, -.008777460320222181, .2695010548130348, 1.02521711915982]
      }, {
        t: 1.7569209127327317,
        v: [0, 0],
        ease: [.42, 0, .58, 1]
      }],
      rotation: [{
        t: 0,
        v: [0, 0, 0],
        ease: [.8199958981940145, -.1753438779653778, .35490544014951186, .958837837092147]
      }, {
        t: .38639855209383034,
        v: [6.596421550520286, 26.266588805679774, 6.122577979110701],
        ease: [.8199958981940145, -.1753438779653778, .35490544014951186, .958837837092147]
      }, {
        t: .7460619029579755,
        v: [4.03072349953808, -14.070821783965659, -8.088521350792867],
        ease: [.16206624605678288, .6573718201333453, .4776581771164943, .9890940068909632]
      }, {
        t: .8660990266653926,
        v: [10.306252195330941, 13.969026095064219, 7.524804229298955],
        ease: [.34720720728860055, -.008777460320222181, .2695010548130348, 1.02521711915982]
      }, {
        t: 1.0493565888199954,
        v: [8.006914468651756, -9.270764174998455, -8.505309845875193],
        ease: [.2773807176656155, .29281356631792965, .35341088328075676, 1.0737667821535892]
      }, {
        t: 1.2986659810851888,
        v: [10.306252195330941, 13.969026095064219, 7.524804229298955],
        ease: [.34720720728860055, -.008777460320222181, .2695010548130348, 1.02521711915982]
      }, {
        t: 1.7569209127327317,
        v: [0, 0, 0],
        ease: [.42, 0, .58, 1]
      }],
      scale: [{
        t: 0,
        v: [.6],
        ease: [.42, 0, .06944264684998447, .9679740678629829]
      }, {
        t: .38639855209383034,
        v: [.6],
        ease: [.42, 0, .06944264684998447, .9679740678629829]
      }, {
        t: 1.1494959879909783,
        v: [.5],
        ease: [.7910272291113791, -.026550296201944556, .19732842008291107, 1]
      }, {
        t: 1.900275655021834,
        v: [.6],
        ease: [.42, 0, .06944264684998447, .9679740678629829]
      }],
      expression: [{
        t: .46926065284592233,
        v: "confused",
        ease: [.42, 0, .58, 1]
      }, {
        t: 1.606008694397346,
        v: "neutral",
        ease: [.42, 0, .58, 1]
      }]
    }
  }, {
    name: "Blocked_B",
    duration: 3,
    body: "sphere",
    squashAnchor: 0,
    workArea: {
      start: 0,
      end: 3
    },
    inspect: {
      bias: -1,
      follow: !0
    },
    tracks: {
      position: [{
        t: 1.2593574149757256,
        v: [.004259404064870088, -.22320548763819217],
        ease: [.42, 0, .58, 1]
      }],
      rotation: [{
        t: 1.2593574149757256,
        v: [22.38040777312499, -.11374925549943268, -1.3254543924838493],
        ease: [.42, 0, .58, 1]
      }],
      expression: [{
        t: 0,
        v: "sad",
        ease: [.8458217358299596, .40487753378378377, .13769926619433198, .9154349662162162]
      }]
    }
  }, {
    name: "Blocked_C",
    duration: 1.4,
    body: "sphere",
    squashAnchor: 0,
    workArea: {
      start: 0,
      end: 1.3929879324776784
    },
    inspect: {
      bias: -1,
      follow: !0
    },
    tracks: {
      position: [{
        t: 0,
        v: [-.10159994888361161, .0005766171900318479],
        ease: [.42, 0, .58, 1]
      }, {
        t: .6816231863839288,
        v: [.06829453998737205, .0005766171900318479],
        ease: [.42, 0, .58, 1]
      }, {
        t: 1.3929879324776784,
        v: [-.10159994888361161, .0005766171900318479],
        ease: [.42, 0, .58, 1]
      }],
      rotation: [{
        t: 0,
        v: [22.100629997955743, -15.657630964434397, -4.681428255949899],
        ease: [.42, 0, .58, 1]
      }, {
        t: .6816231863839288,
        v: [21.919069173693785, 11.388653232575262, .7382242020910257],
        ease: [.42, 0, .58, 1]
      }, {
        t: 1.3929879324776784,
        v: [22.100629997955743, -15.657630964434397, -4.681428255949899],
        ease: [.42, 0, .58, 1]
      }],
      expression: [{
        t: 0,
        v: "sleepy",
        ease: [.8458217358299596, .40487753378378377, .13769926619433198, .9154349662162162]
      }]
    }
  }, {
    name: "Bodymoves_A",
    duration: 5,
    body: "clover",
    squashAnchor: 0,
    workArea: null,
    inspect: {
      bias: -1,
      follow: !0
    },
    tracks: {
      position: [{
        t: 0,
        v: [0, 0],
        ease: [.42, 0, .58, 1]
      }, {
        t: .3316869300911854,
        v: [-.1, 0],
        ease: [.42, 0, .58, 1]
      }, {
        t: .6673157294832825,
        v: [-.1, 0],
        ease: [.42, 0, .58, 1]
      }, {
        t: 1,
        v: [.1, 0],
        ease: [.42, 0, .58, 1]
      }, {
        t: 1.3356762917933132,
        v: [.1, 0],
        ease: [.42, 0, .58, 1]
      }, {
        t: 1.654302811550152,
        v: [0, .1],
        ease: [.42, 0, .58, 1]
      }, {
        t: 2,
        v: [0, .1],
        ease: [.42, 0, .58, 1]
      }, {
        t: 2.329549772036474,
        v: [0, -.1],
        ease: [.42, 0, .58, 1]
      }, {
        t: 2.667601683029453,
        v: [0, -.1],
        ease: [.42, 0, .58, 1]
      }, {
        t: 2.9985974754558207,
        v: [0, 0],
        ease: [.42, 0, .58, 1]
      }],
      rotation: [{
        t: 0,
        v: [0, 0, 0],
        ease: [.42, 0, .58, 1]
      }, {
        t: .3316869300911854,
        v: [0, -20, 0],
        ease: [.42, 0, .58, 1]
      }, {
        t: .6673157294832825,
        v: [0, -20, 0],
        ease: [.42, 0, .58, 1]
      }, {
        t: 1,
        v: [0, 20, 0],
        ease: [.42, 0, .58, 1]
      }, {
        t: 1.3356762917933132,
        v: [0, 20, 0],
        ease: [.42, 0, .58, 1]
      }, {
        t: 1.654302811550152,
        v: [-20, 0, 0],
        ease: [.42, 0, .58, 1]
      }, {
        t: 2,
        v: [-20, 0, 0],
        ease: [.42, 0, .58, 1]
      }, {
        t: 2.329549772036474,
        v: [20, 0, 0],
        ease: [.42, 0, .58, 1]
      }, {
        t: 2.667601683029453,
        v: [20, 0, 0],
        ease: [.42, 0, .58, 1]
      }, {
        t: 2.9985974754558207,
        v: [0, 0, 0],
        ease: [.7340521114106021, 0, .024581648697214575, 1]
      }, {
        t: 4.546161721267454,
        v: [0, 360, 0],
        ease: [.42, 0, .58, 1]
      }]
    }
  }, {
    name: "Done_A",
    duration: 3.7,
    body: "sphere",
    squashAnchor: -1,
    workArea: {
      start: .07228455190755256,
      end: 2.4415076840284984
    },
    inspect: {
      bias: -1,
      follow: !0
    },
    tracks: {
      expression: [{
        t: .5404427256792492,
        v: "happy",
        ease: [.9601942054655871, -.052470439189189255, .20804339574898786, .9135346283783784]
      }, {
        t: 1.1009640885188103,
        v: "neutral",
        ease: [.9601942054655871, -.052470439189189255, .20804339574898786, .9135346283783784]
      }],
      squash: [{
        t: .026170163234005256,
        v: [1, 1],
        ease: [.42, 0, .58, 1]
      }, {
        t: .1712334301051709,
        v: [1.095, .95],
        ease: [.42, 0, .58, 1]
      }, {
        t: .2519479897020158,
        v: [1, 1.1],
        ease: [.42, 0, .58, 1]
      }, {
        t: .5890803023663453,
        v: [1, 1],
        ease: [.42, 0, .58, 1]
      }, {
        t: .7128174264881666,
        v: [1, 1],
        ease: [.42, 0, .58, 1]
      }, {
        t: .7669564766634516,
        v: [1.095, .95],
        ease: [.42, 0, .58, 1]
      }, {
        t: .9897759640666083,
        v: [1, 1.05],
        ease: [.42, 0, .8951431517668547, .3407570422535186]
      }, {
        t: 1.2017846598233752,
        v: [1, 1],
        ease: [.31159929257512675, .38869681601739836, .58, 1]
      }, {
        t: 1.2442602578454727,
        v: [1.02, .95],
        ease: [.42, 0, 0, .9636255030181098]
      }, {
        t: 1.3707862721816209,
        v: [1, 1.05],
        ease: [.42, -.06206202263065829, .58, 1]
      }, {
        t: 1.5659785175305556,
        v: [1, 1.05],
        ease: [.42, -.06206202263065829, .58, 1]
      }, {
        t: 1.7225242861726335,
        v: [1, 1],
        ease: [.42, 0, .58, 1]
      }],
      rotation: [{
        t: .07894117002629274,
        v: [0, 0, 0],
        ease: [.42, 0, .58, 1]
      }, {
        t: .5890803023663453,
        v: [-30.114678799869385, -.3481515921755908, 14.22102163595976],
        ease: [.7300325174456456, -.12405425024558042, .3365835061031919, .8017889379937657]
      }, {
        t: 1.1421861305872043,
        v: [-22.577941336944804, 6.412920843838687, -21.655639323327193],
        ease: [.583298559499341, -.33760664743211344, .32045494511798944, 1.0963542960860653]
      }, {
        t: 1.9672542725679227,
        v: [-2.0781042925060573, 2.7701174100260233, -1.1097245079483975],
        ease: [.42, 0, .58, 1]
      }, {
        t: 2.265132022348826,
        v: [0, 0, 0],
        ease: [.42, 0, .58, 1]
      }],
      position: [{
        t: .21523060911481157,
        v: [0, 0],
        ease: [.26223486988161915, .6947245975855132, .19480556164846297, .9038661358145291]
      }, {
        t: .4114390589896057,
        v: [4251034064187152e-20, .2658889947011273],
        ease: [.6174717437059508, -.1285535110701914, .9558063166458642, 1.4558335539794296]
      }, {
        t: .7733546480351897,
        v: [0, .0027633019963448496],
        ease: [.09538195235865887, .5878716966122386, .07993556895591414, .9424688534678969]
      }, {
        t: .9897759640666083,
        v: [4251034064187152e-20, .2724621969461928],
        ease: [.8363729761758775, -.06230462217533443, .9982539187302559, 1.5]
      }, {
        t: 1.2463303718735304,
        v: [0, .004098894994698572],
        ease: [.0027852407545025976, .747585125427439, .2902850468489716, 1.075893533235889]
      }, {
        t: 1.4277545322137832,
        v: [4251034064187152e-20, .20927514060819213],
        ease: [.6418193857854623, .06919682671194852, .999114846102708, 1.0051682084254565]
      }, {
        t: 1.6154571730378309,
        v: [0, -.0012722231452485869],
        ease: [.1439324608778934, .5569463954729904, .40675790714828725, .8986649812795062]
      }, {
        t: 1.6919913573024103,
        v: [4251034064187152e-20, .12826705419287673],
        ease: [.7357127354801332, -.23608339420075217, .998983119560359, 1.0241908800770656]
      }, {
        t: 1.838861098534871,
        v: [0, -.00406003797139351],
        ease: [.16778668894268609, .5982980173372091, .2604597520439014, .8844972998628613]
      }, {
        t: 1.8667112801287638,
        v: [4251034064187152e-20, .07903432452816228],
        ease: [.4685028760838894, -.42953625372100485, .9202731953835559, .8525061773543536]
      }, {
        t: 1.9472873681398353,
        v: [0, -.006228275916527491],
        ease: [.0027852407545025976, 1.5, .48865476645304945, .9551260679225434]
      }]
    }
  }, {
    name: "Done_B",
    duration: 1.8,
    body: "sphere",
    squashAnchor: -1,
    workArea: null,
    inspect: {
      bias: -1,
      follow: !1
    },
    tracks: {
      expression: [{
        t: .1,
        v: "happy",
        ease: [.4, .22, .28, 1.34]
      }],
      squash: [{
        t: 0,
        v: [1, 1],
        ease: [.42, 0, .58, 1]
      }, {
        t: .24,
        v: [1.12, .88],
        ease: [.42, 0, .58, 1]
      }, {
        t: .46,
        v: [.93, 1.09],
        ease: [.42, 0, .58, 1]
      }, {
        t: .68,
        v: [1.04, .97],
        ease: [.42, 0, .58, 1]
      }, {
        t: .92,
        v: [1, 1],
        ease: [.42, 0, .58, 1]
      }]
    }
  }, {
    name: "Done_C",
    duration: 2,
    body: "sphere",
    squashAnchor: -1,
    workArea: null,
    inspect: {
      bias: -1,
      follow: !0
    },
    tracks: {
      expression: [{
        t: 0,
        v: "happy",
        ease: [.7416814271255061, .03220016891891886, .26459703947368424, 1.0216427364864864]
      }, {
        t: 1.1902334624750293,
        v: "neutral",
        ease: [.8458217358299596, .40487753378378377, .13769926619433198, .9154349662162162]
      }],
      position: [{
        t: 0,
        v: [0, 0],
        ease: [.42, 0, .4073342890672376, 1.018190339792799]
      }, {
        t: .3798103165938864,
        v: [-.1054748164006256, .1247799599228919],
        ease: [.6446428602987402, .013555142906648983, .26273657853993304, 1.0464437149441994]
      }, {
        t: .9426716022659842,
        v: [.10617803719053583, .1550632852223643],
        ease: [.8992655949641883, .06226468791954258, .6897429932929974, 1.0606800225733635]
      }, {
        t: 1.3822867688368345,
        v: [.011140244111415301, -.17250079856992764],
        ease: [.5369766709678977, .09639530999237222, .4242841447981972, .8655803895199093]
      }, {
        t: 1.5768176200981194,
        v: [.009657934584899294, .02418870866616249],
        ease: [.10285717371228631, .44298137016142797, .58, 1]
      }, {
        t: 1.7545755610844578,
        v: [.005569779366063913, -.08650009457623184],
        ease: [.11393164333435832, .20842906107559217, .58, 1]
      }, {
        t: 1.9557554786340765,
        v: [0, 0],
        ease: [.42, 0, .58, 1]
      }],
      rotation: [{
        t: 0,
        v: [0, 0, 0],
        ease: [.7521899922111783, 0, .29680419697434735, 1.2284132127170915]
      }, {
        t: .3798103165938864,
        v: [-31.25365067481446, -5.533499139447874, 13.746823539571478],
        ease: [.6650959278914218, .08187947429053509, .027403916739799694, 1.175374728587553]
      }, {
        t: .9426716022659842,
        v: [-30.6162399609899, 14.144576441037861, -12.73974221895198],
        ease: [.8992655949641883, .06226468791954258, .6897429932929974, 1.0606800225733635]
      }, {
        t: 1.3972576410224693,
        v: [19.356472882732792, .12303000388944017, -1.6697872707546177],
        ease: [.5369766709678977, .09639530999237222, .4242841447981972, .8655803895199093]
      }, {
        t: 1.5873362914457065,
        v: [-4.965245810760847, -1.410803032494741, -.08557034006007683],
        ease: [.10285717371228631, .44298137016142797, .58, 1]
      }, {
        t: 1.7574889536920633,
        v: [12.945220298267941, -.9549298574076148, -1.3541756721371099],
        ease: [.11393164333435832, .20842906107559217, .58, 1]
      }, {
        t: 1.9557554786340765,
        v: [0, 0, 0],
        ease: [.7521899922111783, 0, .29680419697434735, 1.2284132127170915]
      }]
    }
  }, {
    name: "Idle_A",
    duration: 6,
    body: "sphere",
    squashAnchor: 0,
    workArea: null,
    inspect: {
      bias: -1,
      follow: !0
    },
    tracks: {
      position: [{
        t: .4874467656537753,
        v: [0, 0],
        ease: [.39919726822734797, -.1380913825536936, .15951040179591214, 1]
      }, {
        t: 1.3832000000000173,
        v: [-.14647919001828796, .027266090496135924],
        ease: [.5825263567433967, .31017058172003364, .04617913732408452, 1.3610608114532912]
      }, {
        t: 1.77965296961326,
        v: [-.14647919001828796, .027266090496135924],
        ease: [.22005965712189499, .31017058172003364, .04617913732408452, .9652306378531971]
      }, {
        t: 2.75,
        v: [-.0745899946905787, -.16596550351011732],
        ease: [.7924378812353865, .08203268815009183, .20257664629337524, .5708768022766131]
      }, {
        t: 2.9261481353591154,
        v: [-.0745899946905787, -.16596550351011732],
        ease: [.9024115240536277, .09528443113772456, .31187154968454267, .9286115269461079]
      }, {
        t: 4.0795674814720835,
        v: [0, 0],
        ease: [.8772841365461845, .09396460316883949, 0, .9378491736838274]
      }, {
        t: 5.754212106241882,
        v: [0, 0],
        ease: [.42, 0, .58, 1]
      }],
      rotation: [{
        t: .4874467656537753,
        v: [0, 0, 0],
        ease: [.39919726822734797, -.1380913825536936, .15951040179591214, 1]
      }, {
        t: 1.3832000000000173,
        v: [-16.083597442672094, -32.69316873461356, -11.038560548848148],
        ease: [.5825263567433967, .31017058172003364, .04617913732408452, 1.3610608114532912]
      }, {
        t: 1.77965296961326,
        v: [-13.471262391203387, -31.664036845872012, -11.622988481798327],
        ease: [.22005965712189499, .31017058172003364, .04617913732408452, .9652306378531971]
      }, {
        t: 2.75,
        v: [10.37381753258554, 13.583422586232203, 10.666197221172675],
        ease: [.7924378812353865, .08203268815009183, .20257664629337524, .5708768022766131]
      }, {
        t: 2.9261481353591154,
        v: [22.819835891847944, 5.292311893891789, 5.163005094237094],
        ease: [1, -.5, .4051656151419559, .8872272583365959]
      }, {
        t: 4.0795674814720835,
        v: [-24.875244874578584, 31.812786832669843, 15.07444269105954],
        ease: [.8772841365461845, .09396460316883949, 0, .9378491736838274]
      }, {
        t: 5.754212106241882,
        v: [0, 360, 0],
        ease: [.9122920380277829, .038550560528246756, .4251612081579069, .8172019143128422]
      }],
      expression: [{
        t: 1.1628970994475138,
        v: "blink",
        ease: [.42, 0, .58, 1]
      }, {
        t: 4.00439785911593,
        v: "blink",
        ease: [.42, 0, .58, 1]
      }, {
        t: 5.643314779005485,
        v: "neutral",
        ease: [.42, 0, .58, 1]
      }]
    }
  }, {
    name: "Idle_B",
    duration: 4,
    body: "sphere",
    squashAnchor: 0,
    workArea: null,
    inspect: {
      bias: -1,
      follow: !0
    },
    tracks: {
      position: [{
        t: 1.6054821209465213,
        v: [0, 0],
        ease: [.42, 0, .58, 1]
      }],
      rotation: [{
        t: .9010370289220491,
        v: [0, 0, 0],
        ease: [.42, 0, .28927730966925536, .9624241226685105]
      }, {
        t: 1.6163686240140267,
        v: [.12032076750937498, -8.658512604326788, -2.5426418939710658],
        ease: [.8747812559101849, -.03625853912624016, .25467036702156304, .8980229024542974]
      }, {
        t: 2.4902049517966525,
        v: [.9659548057072269, 5.658900089349377, 1.7129240357574211],
        ease: [.6027205111294465, -.23084976154500042, .2902495275740431, .9815467952425966]
      }, {
        t: 3.45704978089402,
        v: [0, 0, 0],
        ease: [.42, 0, .58, 1]
      }],
      scale: [{
        t: 0,
        v: [.6],
        ease: [.6180446538332104, .0012432525890504465, .1839130507609582, .9358696746423821]
      }, {
        t: 1.6054821209465213,
        v: [.64],
        ease: [.8658706538170823, -.07995460153625837, .29979142380351903, 1.0195121615474219]
      }, {
        t: 3.841942375109553,
        v: [.6],
        ease: [.6180446538332104, .0012432525890504465, .1839130507609582, .9405530305724485]
      }],
      expression: [{
        t: 1.4811034202342213,
        v: "blink",
        ease: [.4, .22, .28, 1.34]
      }, {
        t: 3.45704978089402,
        v: "blink",
        ease: [.4, .22, .28, 1.34]
      }]
    }
  }, {
    name: "Idle_D",
    duration: 6,
    body: "sphere",
    squashAnchor: 0,
    workArea: null,
    inspect: {
      bias: -1,
      follow: !0
    },
    tracks: {
      rotation: [{
        t: 0,
        v: [-15.896271043294888, 33.29315635042974, 25.38480127460161],
        ease: [.6511065418455951, 0, .3268385117846959, 1]
      }, {
        t: .5867355510752692,
        v: [-34.32339609164593, 16.86196736106905, 15.137354734738835],
        ease: [.5996715199956071, 0, .24671113951908907, 1]
      }, {
        t: 1.0783308131720428,
        v: [-34.32339609164593, 16.86196736106905, 15.137354734738835],
        ease: [.5996715199956071, 0, .10657397408207336, 1]
      }, {
        t: 1.962638608870968,
        v: [-6.1682538522357975, 3.098853229789992, 14.349419848128031],
        ease: [.42, 0, .58, 1]
      }, {
        t: 2.671748991935484,
        v: [-6.1682538522357975, 3.098853229789992, 14.349419848128031],
        ease: [.42, 0, .2029056425485961, 1]
      }, {
        t: 3.914377520161291,
        v: [7.572938650100637, 40.386943374478015, 25.47389006919084],
        ease: [.42, 0, .58, 1]
      }, {
        t: 4.785706485215049,
        v: [7.572938650100637, 40.386943374478015, 25.47389006919084],
        ease: [.6315554130669547, 0, .21641299946004333, 1]
      }, {
        t: 5.632732694892469,
        v: [-15.896271043294888, 33.29315635042974, 25.38480127460161],
        ease: [.6511065418455951, 0, .3268385117846959, 1]
      }],
      expression: [{
        t: .5929099462365591,
        v: "blink",
        ease: [.4, .22, .28, 1.34]
      }, {
        t: 2.0691383064517033,
        v: "blink",
        ease: [.4, .22, .28, 1.34]
      }, {
        t: 2.3722908266129035,
        v: "blink",
        ease: [.4, .22, .28, 1.34]
      }, {
        t: 4.247479838709677,
        v: "blink",
        ease: [.4, .22, .28, 1.34]
      }]
    }
  }, {
    name: "Logo_A",
    duration: 4,
    body: "sphere",
    squashAnchor: 0,
    workArea: {
      start: 0,
      end: 2.0002578769692425
    },
    inspect: {
      bias: -1,
      follow: !0
    },
    tracks: {
      rotation: [{
        t: 0,
        v: [-15.896271043294888, 33.29315635042974, 25.38480127460161],
        ease: [.940308570092613, 0, .8322175812019608, .42841310531523513]
      }, {
        t: .9325431465191484,
        v: [-15.896271043294888, 290.3612956381275, 25.38480127460161],
        ease: [.08370250411471428, .7821860109261747, .1762354651162792, 1]
      }, {
        t: 1.9567938859714928,
        v: [-15.896271043294888, 393.29315635042974, 25.38480127460161],
        ease: [.42, 0, .58, 1]
      }]
    }
  }, {
    name: "Logo_B",
    duration: 4,
    body: "sphere",
    squashAnchor: 0,
    workArea: {
      start: 0,
      end: 3.1220695798949736
    },
    inspect: {
      bias: -1,
      follow: !0
    },
    tracks: {
      rotation: [{
        t: 0,
        v: [-15.896271043294888, 33.29315635042974, 25.38480127460161],
        ease: [.77323790487339, 0, .19818347223390587, .9476806070764106]
      }, {
        t: .7185100111661579,
        v: [-11.287778634690255, -33.00231519019303, -21.062449423926747],
        ease: [.2717748154604947, -.2636988609351958, .6005198984279181, .023491972600300434]
      }, {
        t: 1.141527569392348,
        v: [-11.399396607755296, -31.39663474186699, -19.937494120163255],
        ease: [.9137669521901326, .04016940837145343, .8322175812019608, .42841310531523513]
      }, {
        t: 2.074070715911496,
        v: [-15.896271043294888, 290.3612956381275, 25.38480127460161],
        ease: [.08370250411471428, .7821860109261747, .1762354651162792, 1]
      }, {
        t: 3.0983214553638407,
        v: [-15.896271043294888, 393.29315635042974, 25.38480127460161],
        ease: [.42, 0, .58, 1]
      }]
    }
  }, {
    name: "Marketing_A",
    duration: 4,
    body: "sphere",
    squashAnchor: 0,
    workArea: null,
    inspect: {
      bias: -1,
      follow: !0
    },
    tracks: {
      position: [{
        t: .6167064755838638,
        v: [0, 0],
        ease: [.5771393784786643, 0, .41654104823747684, 1]
      }, {
        t: 1.4190773177636233,
        v: [-.16387514369529332, 0],
        ease: [.42, 0, .58, 1]
      }, {
        t: 2.2684226822363764,
        v: [-.16387514369529332, .05904395257747427],
        ease: [.580719503710575, 0, 0, 1]
      }, {
        t: 3.1610281808035716,
        v: [0, 0],
        ease: [.5771393784786643, 0, .41654104823747684, 1]
      }],
      rotation: [{
        t: 0,
        v: [-15.896271043294888, 33.29315635042974, 25.38480127460161],
        ease: [.42, 0, .58, 1]
      }, {
        t: .6167064755838638,
        v: [-15.896271043294888, 33.29315635042974, 25.38480127460161],
        ease: [.8625910776088882, -.041613616273912, .25952275632662025, 1.049784301761229]
      }, {
        t: 1.4190773177636233,
        v: [-2.97589945531819, -26.234478989223906, -3.2544499064295738],
        ease: [.7818125791576046, .15346315752484826, .32687664998404986, 1.1173618829561318]
      }, {
        t: 2.2684226822363764,
        v: [-31.58476211869586, -3.710798107118315, 24.071416454447956],
        ease: [.36229770668640776, -.17418027527991467, .2875659277885649, 1.2452842602722636]
      }, {
        t: 2.7962446921443735,
        v: [-27.874087487241205, .739249290532289, 5.007074162025872],
        ease: [.42, .044881803684311196, .58, 1]
      }, {
        t: 3.2725893489030398,
        v: [-19.255583925594408, -17.414119894980235, -7.023063437300964],
        ease: [.49415439617951884, -.031041466813226757, .2907565775851124, 1]
      }, {
        t: 3.8435756138392856,
        v: [-19.353875077555468, 20.03044512007725, 19.013275491556097],
        ease: [.42, 0, .58, 1]
      }, {
        t: 3.9805733816964284,
        v: [-15.896271043294888, 33.29315635042974, 25.38480127460161],
        ease: [.42, 0, .58, 1]
      }],
      expression: [{
        t: .05960518973214285,
        v: "neutral",
        ease: [.7416814271255061, .03220016891891886, .26459703947368424, 1.0216427364864864]
      }, {
        t: 2.2434315286624202,
        v: "surprised",
        ease: [.7416814271255061, .03220016891891886, .26459703947368424, 1.0216427364864864]
      }]
    }
  }, {
    name: "Marketing_B",
    duration: 4,
    body: "sphere",
    squashAnchor: 0,
    workArea: null,
    inspect: {
      bias: -1,
      follow: !0
    },
    tracks: {
      rotation: [{
        t: 0,
        v: [-15.896271043294888, 33.29315635042974, 25.38480127460161],
        ease: [.42, 0, .58, 1]
      }, {
        t: .6167064755838638,
        v: [-15.896271043294888, 33.29315635042974, 25.38480127460161],
        ease: [.8625910776088882, -.041613616273912, .25952275632662025, 1.049784301761229]
      }, {
        t: 1.4190773177636233,
        v: [-2.97589945531819, -26.234478989223906, -3.2544499064295738],
        ease: [.7818125791576046, .15346315752484826, .32687664998404986, 1.1173618829561318]
      }, {
        t: 2.2684226822363764,
        v: [20.16565207199379, -20.644446669166673, 22.47273384376682],
        ease: [.36229770668640776, -.17418027527991467, .2875659277885649, 1.2452842602722636]
      }, {
        t: 3.2725893489030398,
        v: [-20.98869306129836, -21.248460672675545, -6.20573622722674],
        ease: [.49415439617951884, -.031041466813226757, .2907565775851124, 1]
      }, {
        t: 4,
        v: [-23.757982259034762, 24.83627384870201, 18.82083960330674],
        ease: [.42, 0, .58, 1]
      }],
      expression: [{
        t: 0,
        v: "neutral",
        ease: [.7416814271255061, .03220016891891886, .26459703947368424, 1.0216427364864864]
      }, {
        t: 1.4471868365180467,
        v: "calm",
        ease: [.7416814271255061, .03220016891891886, .26459703947368424, 1.0216427364864864]
      }]
    }
  }, {
    name: "Marketing_C",
    duration: 4,
    body: "sphere",
    squashAnchor: 0,
    workArea: null,
    inspect: {
      bias: -1,
      follow: !0
    },
    tracks: {
      rotation: [{
        t: 0,
        v: [-15.896271043294888, 33.29315635042974, 25.38480127460161],
        ease: [.42, 0, .58, 1]
      }, {
        t: .6167064755838638,
        v: [-15.896271043294888, 33.29315635042974, 25.38480127460161],
        ease: [.8625910776088882, -.041613616273912, .25952275632662025, 1.049784301761229]
      }, {
        t: 1.4190773177636233,
        v: [-2.97589945531819, -26.234478989223906, -3.2544499064295738],
        ease: [.7818125791576046, .15346315752484826, .32687664998404986, 1.1173618829561318]
      }, {
        t: 2.2684226822363764,
        v: [20.16565207199379, -20.644446669166673, 22.47273384376682],
        ease: [.36229770668640776, -.17418027527991467, .2875659277885649, 1.2452842602722636]
      }, {
        t: 3.2725893489030398,
        v: [-20.98869306129836, -21.248460672675545, -6.20573622722674],
        ease: [.49415439617951884, -.031041466813226757, .2907565775851124, 1]
      }, {
        t: 4,
        v: [-23.757982259034762, 24.83627384870201, 18.82083960330674],
        ease: [.42, 0, .58, 1]
      }],
      expression: [{
        t: 0,
        v: "neutral",
        ease: [.7416814271255061, .03220016891891886, .26459703947368424, 1.0216427364864864]
      }, {
        t: 1.4471868365180467,
        v: "calm",
        ease: [.7416814271255061, .03220016891891886, .26459703947368424, 1.0216427364864864]
      }]
    }
  }, {
    name: "Marketing_D",
    duration: 4,
    body: "sphere",
    squashAnchor: -1,
    workArea: null,
    inspect: {
      bias: -1,
      follow: !0
    },
    tracks: {
      expression: [{
        t: .05498053786270347,
        v: "neutral",
        ease: [.7416814271255061, .03220016891891886, .26459703947368424, 1.0216427364864864]
      }, {
        t: .7522248761500355,
        v: "happy",
        ease: [.7416814271255061, .03220016891891886, .26459703947368424, 1.0216427364864864]
      }, {
        t: 3.188380537862626,
        v: "neutral",
        ease: [.7416814271255061, .03220016891891886, .26459703947368424, 1.0216427364864864]
      }],
      squash: [{
        t: .6800000000000002,
        v: [1, 1],
        ease: [.42, 0, .58, 1]
      }, {
        t: .9199999999999999,
        v: [1.12, .88],
        ease: [.42, 0, .58, 1]
      }, {
        t: 1.1400000000000001,
        v: [.93, 1.09],
        ease: [.42, 0, .58, 1]
      }, {
        t: 1.3600000000000003,
        v: [1.04, .97],
        ease: [.42, 0, .58, 1]
      }, {
        t: 1.6,
        v: [1, 1],
        ease: [.42, 0, .58, 1]
      }],
      rotation: [{
        t: 0,
        v: [-6.345525006325851, 19.726304895345887, 7.225894380877916],
        ease: [.42, 0, .58, 1]
      }, {
        t: .68,
        v: [-6.345525006325851, 19.726304895345887, 7.225894380877916],
        ease: [.6287715517241379, 0, .1652870297805643, 1]
      }, {
        t: 1.80886178343963,
        v: [7.946317173704124, -27.372379409841862, -13.611633161590936],
        ease: [.5888217507250163, 0, 0, 1]
      }, {
        t: 3.406449044585987,
        v: [0, 0, 0],
        ease: [.42, 0, .58, 1]
      }, {
        t: 3.887429228591649,
        v: [-6.345525006325851, 19.726304895345887, 7.225894380877916],
        ease: [.42, 0, .58, 1]
      }]
    }
  }, {
    name: "Rotation_A",
    duration: 6,
    body: "cloud",
    squashAnchor: 0,
    workArea: null,
    inspect: {
      bias: -1,
      follow: !0
    },
    tracks: {
      rotation: [{
        t: 0,
        v: [2.3120950657104795, -34.698071961330996, 6.287220573778937],
        ease: [.001, .001, .999, .999]
      }, {
        t: 3.0420576880625374,
        v: [-15.896271043294888, 393.29315635042974, 25.38480127460161],
        ease: [.001, .001, .999, .999]
      }, {
        t: 5.685518927730484,
        v: [-26.2, 719.4, 25.38480127460161],
        ease: [.42, 0, .58, 1]
      }]
    }
  }, {
    name: "Rotation_B",
    duration: 10,
    body: "cloud",
    squashAnchor: 0,
    workArea: null,
    inspect: {
      bias: -1,
      follow: !0
    },
    tracks: {
      rotation: [{
        t: 0,
        v: [-5.86170199829258, -66.48579621643268, 11.013855401509232],
        ease: [.001, .001, .999, .999]
      }, {
        t: 10,
        v: [-5.86170199829258, 293.5142037835673, 11.013855401509232],
        ease: [.42, 0, .58, 1]
      }]
    }
  }, {
    name: "Rotation_C",
    duration: 4,
    body: "cloud",
    squashAnchor: 0,
    workArea: null,
    inspect: {
      bias: -1,
      follow: !0
    },
    tracks: {
      position: [{
        t: 0,
        v: [0, 0],
        ease: [.42, 0, .58, 1]
      }],
      rotation: [{
        t: 0,
        v: [-35, -28.5, 8.9],
        ease: [.001, .001, .999, .999]
      }, {
        t: 3.954889112903226,
        v: [30.3, -25.03032384031022, 25.838583124958074],
        ease: [.42, 0, .58, 1]
      }],
      expression: [{
        t: 2.02137936827957,
        v: "blink",
        ease: [.4, .22, .28, 1.34]
      }]
    }
  }, {
    name: "Streaming_A",
    duration: 2.6,
    body: "sphere",
    squashAnchor: 0,
    workArea: {
      start: 0,
      end: 2.593141413751879
    },
    inspect: {
      bias: -1,
      follow: !0
    },
    tracks: {
      rotation: [{
        t: 0,
        v: [-17.330877831673277, 2.263279637703984, 15.443629275983977],
        ease: [.7300325174456456, -.12405425024558042, .40585908939755444, 1.0050376870076922]
      }, {
        t: .3458182816671912,
        v: [9.638628832336948, 2.025895269795649, -1.2527648183630171],
        ease: [.4224707625763918, .0022972310598335997, .58, .9927354054381194]
      }, {
        t: .5813687143348092,
        v: [-15.366003917619995, -2.619836674995623, -2.16549892253304],
        ease: [.7322498965237162, -.011667049678267111, 0, .9141484219009502]
      }, {
        t: .8343818658890081,
        v: [4.338039365692767, .49348825557993187, -3.7087410402723067],
        ease: [.1580317356155577, -.07611268668891613, .32045494511798944, 1.0963542960860653]
      }, {
        t: 1.2183655201918815,
        v: [-.2793440526930908, 0, 0],
        ease: [.7202644919359068, 0, .414580660247694, .9498001208025284]
      }, {
        t: 1.6185917357603328,
        v: [-5.399115822872089, 14.530502605079048, 3.1285787766973128],
        ease: [.603730806420981, -.0304892240026259, .2700959962528573, .9305186654092706]
      }, {
        t: 2.0602042690217752,
        v: [-2.088336039091766, -10.814208972017363, -20.009405175503947],
        ease: [.48373539910046165, -.09542268080702558, .26548699703136136, 1]
      }, {
        t: 2.593141413751879,
        v: [-17.330877831673277, 2.263279637703984, 15.443629275983977],
        ease: [.7300325174456456, -.12405425024558042, .40585908939755444, 1.0050376870076922]
      }],
      position: [{
        t: .008051106963364502,
        v: [0, 0],
        ease: [.42, 0, .58, 1]
      }, {
        t: .34800758255567965,
        v: [0, -.09893530004977505],
        ease: [.42, 0, .58, 1]
      }, {
        t: .5873549334090005,
        v: [0, .04654750224419043],
        ease: [.42, 0, .58, 1]
      }, {
        t: .8343818658890081,
        v: [0, .004683687521738383],
        ease: [.42, 0, .58, 1]
      }, {
        t: 1.2183655201918815,
        v: [0, 0],
        ease: [.42, 0, .27743996350027533, .9367983894536062]
      }, {
        t: 1.6185917357603328,
        v: [.12655004394233813, 0],
        ease: [.603730806420981, -.0304892240026259, .2700959962528573, .9282552090918559]
      }, {
        t: 2.0602042690217752,
        v: [-.1362091399555723, 0],
        ease: [.48373539910046165, -.09542268080702558, .26548699703136136, 1]
      }, {
        t: 2.593141413751879,
        v: [0, 0],
        ease: [.42, 0, .58, 1]
      }]
    }
  }, {
    name: "Streaming_B",
    duration: 2.6,
    body: "sphere",
    squashAnchor: 0,
    workArea: {
      start: 0,
      end: 2.593141413751879
    },
    inspect: {
      bias: -1,
      follow: !0
    },
    tracks: {
      expression: [{
        t: .8343818658890081,
        v: "surprised",
        ease: [.8458217358299596, .40487753378378377, .13769926619433198, .9154349662162162],
        cut: !0
      }, {
        t: 2.1679160926807017,
        v: "neutral",
        ease: [.8458217358299596, .40487753378378377, .13769926619433198, .9154349662162162],
        cut: !0
      }],
      rotation: [{
        t: 0,
        v: [-15.896271043294888, 33.29315635042974, 25.38480127460161],
        ease: [.7300325174456456, -.12405425024558042, .40585908939755444, 1.0050376870076922]
      }, {
        t: .3458182816671912,
        v: [9.638628832336948, 2.025895269795649, -1.2527648183630171],
        ease: [.4224707625763918, .0022972310598335997, .58, .9927354054381194]
      }, {
        t: .8343818658890081,
        v: [-13.158704916519811, -16.90797681471658, -2.914418472822627],
        ease: [.1580317356155577, -.07611268668891613, .32045494511798944, 1.0963542960860653]
      }, {
        t: 1.2183655201918815,
        v: [3.3337098816649693, 21.543227556484112, 4.461698658684633],
        ease: [.7202644919359068, 0, .414580660247694, .9498001208025284]
      }, {
        t: 1.6185917357603328,
        v: [-5.399115822872089, 14.530502605079048, 3.1285787766973128],
        ease: [.603730806420981, -.0304892240026259, .2700959962528573, .9305186654092706]
      }, {
        t: 2.0602042690217752,
        v: [-2.088336039091766, -10.814208972017363, -20.009405175503947],
        ease: [.48373539910046165, -.09542268080702558, .26548699703136136, 1]
      }, {
        t: 2.593141413751879,
        v: [-15.896271043294888, 33.29315635042974, 25.38480127460161],
        ease: [.7300325174456456, -.12405425024558042, .40585908939755444, 1.0050376870076922]
      }],
      position: [{
        t: .008051106963364502,
        v: [0, 0],
        ease: [.42, 0, .58, 1]
      }, {
        t: .34800758255567965,
        v: [0, -.09893530004977505],
        ease: [.42, 0, .58, 1]
      }, {
        t: .8343818658890081,
        v: [0, .004683687521738383],
        ease: [.42, 0, .58, 1]
      }, {
        t: 1.36568364300849,
        v: [.12655004394233813, 0],
        ease: [.603730806420981, -.0304892240026259, .2700959962528573, .9282552090918559]
      }, {
        t: 2.0602042690217752,
        v: [-.1362091399555723, 0],
        ease: [.48373539910046165, -.09542268080702558, .26548699703136136, 1]
      }, {
        t: 2.593141413751879,
        v: [0, 0],
        ease: [.42, 0, .58, 1]
      }]
    }
  }, {
    name: "Streaming_C",
    duration: 2.4,
    body: "sphere",
    squashAnchor: 0,
    workArea: null,
    inspect: {
      bias: -1,
      follow: !0
    },
    tracks: {
      expression: [{
        t: .0930430477108114,
        v: "squinted",
        ease: [.9601942054655871, -.052470439189189255, .20804339574898786, .9135346283783784]
      }],
      rotation: [{
        t: .007536501544973762,
        v: [-30.114678799869385, -.3481515921755908, 10.657733527966457],
        ease: [.8069695446331039, .06068366162676136, .22176992691461772, 1.0529567094556063]
      }, {
        t: .6967011702649526,
        v: [-25.983934007381276, 7.767555485689494, -17.97884031792412],
        ease: [.6337438554404256, .03915919163464518, .24060607252134747, .9552013782917067]
      }, {
        t: 1.3,
        v: [-27.316297934452344, -1.3907007432867593, 11.301625700367927],
        ease: [.8069695446331039, .06068366162676136, .05967881944444445, .9976179673321233]
      }, {
        t: 2.3830582002457,
        v: [-30.114678799869385, 359.6518484078244, 10.657733527966457],
        ease: [.545887017284529, -.16488185903681707, .58, 1]
      }],
      position: [{
        t: .007536501544973762,
        v: [0, 0],
        ease: [.8069695446331039, .06068366162676136, .22176992691461772, 1.0529567094556063]
      }, {
        t: .6967011702649526,
        v: [.16304040871678732, .1060830475460072],
        ease: [.6337438554404256, .03915919163464518, .24060607252134747, .9552013782917067]
      }, {
        t: 1.3,
        v: [-.16109273893088566, .1112767252235085],
        ease: [.8069695446331039, .06068366162676136, .05967881944444445, .9976179673321233]
      }, {
        t: 2.3830582002457,
        v: [0, 0],
        ease: [.7622975213794354, -.39274360300976613, .22176992691461772, 1.0529567094556063]
      }]
    }
  }, {
    name: "Working_A",
    duration: 8,
    body: "sphere",
    squashAnchor: 0,
    workArea: null,
    inspect: {
      bias: -1,
      follow: !0
    },
    tracks: {
      position: [{
        t: .4874467656537753,
        v: [0, 0],
        ease: [.39919726822734797, -.1380913825536936, .15951040179591214, 1]
      }, {
        t: 1.3832000000000173,
        v: [-.14647919001828796, .027266090496135924],
        ease: [.5825263567433967, .31017058172003364, .04617913732408452, 1.3610608114532912]
      }, {
        t: 1.77965296961326,
        v: [-.14647919001828796, .027266090496135924],
        ease: [.22005965712189499, .31017058172003364, .04617913732408452, .9652306378531971]
      }, {
        t: 2.5961328343722427,
        v: [.06209379465135341, .0363636826260471],
        ease: [.6823010997778416, .03975119923438924, .58, .7462988396745895]
      }, {
        t: 3.066377943544433,
        v: [-.016487420591570615, .0804209848791122],
        ease: [.8034080182827295, -.08276325518488785, .6510110561346553, .8128258749805829]
      }, {
        t: 3.426085780646072,
        v: [-.008916270094194876, -.2135819760518346],
        ease: [.1744021985074266, -.5, .8865519014643501, -.2214168917492133]
      }, {
        t: 4.00439785911593,
        v: [-.0052248049102180776, -.12515593913381462],
        ease: [.023812816055625345, .31341394515796384, .0448947139696587, 1.0658309377957906]
      }, {
        t: 5.005029942257856,
        v: [0, 0],
        ease: [.42, 0, .58, 1]
      }, {
        t: 6.298778790534628,
        v: [.03813914798218992, -.019258402700427682],
        ease: [.576933472628317, .007827540903749368, .12610215878412523, .9598864308897559]
      }, {
        t: 6.952426906222622,
        v: [-.25, -.004137934943726919],
        ease: [.8326089284460128, -.06392110845094923, .3654460022570882, 1.0352901568389925]
      }, {
        t: 7.900964066608238,
        v: [0, 0],
        ease: [.39919726822734797, -.1380913825536936, .15951040179591214, 1]
      }],
      rotation: [{
        t: .4874467656537753,
        v: [0, 0, 0],
        ease: [.39919726822734797, -.1380913825536936, .15951040179591214, 1]
      }, {
        t: 1.3832000000000173,
        v: [-11.013174031248813, -20.059833580125414, -12.896783267756348],
        ease: [.5825263567433967, .31017058172003364, .04617913732408452, 1.3610608114532912]
      }, {
        t: 1.77965296961326,
        v: [-17.48975478197329, -18.703976724880516, -12.678205332257816],
        ease: [.22005965712189499, .31017058172003364, .04617913732408452, .9652306378531971]
      }, {
        t: 2.5961328343722427,
        v: [-14.554913391638532, 17.164836260093473, 9.376528927180779],
        ease: [.6823010997778416, .03975119923438924, .58, .9240336563778733]
      }, {
        t: 3.1796016343940767,
        v: [-24.586251970533304, .14133926125606477, -.7477216271856462],
        ease: [.8034080182827295, -.08276325518488785, .9143306014396848, .4851034680582119]
      }, {
        t: 3.4679142027965795,
        v: [-1.0943281912285556, -1.1346215368163393, -.7116952620126241],
        ease: [.12040927423864656, -.18872517040581954, .9481776569383256, -.20917925086224787]
      }, {
        t: 4.001861402631413,
        v: [-147.11069531984157, -.6757806869448113, -.4238857605398247],
        ease: [.03131913716814155, .8644907690193963, .0448947139696587, 1.0658309377957906]
      }, {
        t: 5.005029942257856,
        v: [-360, 0, 0],
        ease: [.7970933306500759, -.5, .24118105710043447, .7361553789450831]
      }, {
        t: 6.298778790534628,
        v: [-364.89323527138873, 18.626179650675688, -.2598233988596897],
        ease: [.576933472628317, .007827540903749368, .12610215878412523, .9742744867440337]
      }, {
        t: 6.952426906222622,
        v: [-366.80423922162356, -23.365336474310464, -3.339162411443921],
        ease: [.8326089284460128, -.06392110845094923, .3654460022570882, 1.0352901568389925]
      }, {
        t: 7.900964066608238,
        v: [-360, 0, 0],
        ease: [.42, 0, .58, 1]
      }],
      expression: [{
        t: 1.1672000000000002,
        v: "blink",
        ease: [.42, 0, .58, 1]
      }, {
        t: 1.77965296961326,
        v: "surprised",
        ease: [.7394673582995951, .10409628378378377, .6676682692307693, 1.5]
      }, {
        t: 5.643314779005485,
        v: "neutral",
        ease: [.42, 0, .58, 1]
      }, {
        t: 6.298778790534628,
        v: "strange",
        ease: [.9601942054655871, -.052470439189189255, .20804339574898786, .9135346283783784]
      }, {
        t: 7.3115338882283,
        v: "neutral",
        ease: [.7416814271255061, .03220016891891886, .26459703947368424, 1.0216427364864864]
      }]
    }
  }, {
    name: "Working_B",
    duration: 4.8,
    body: "sphere",
    squashAnchor: 0,
    workArea: {
      start: 0,
      end: 4.8
    },
    inspect: {
      bias: -1,
      follow: !0
    },
    tracks: {
      position: [{
        t: .17746730083234244,
        v: [0, 0],
        ease: [.807066718478605, .026672824415491948, .05397305674842967, 1.0519668384455731]
      }, {
        t: 1.4141067024830507,
        v: [-.1, -14911040730998862e-21],
        ease: [.7054694160272805, .15290809768637542, 0, .9011176996605331]
      }, {
        t: 2.75,
        v: [.1, -.0019533463357608513],
        ease: [.8240202817829232, -.24792725943516045, .2993925437700369, 1]
      }, {
        t: 4.7824019024970275,
        v: [0, 0],
        ease: [.42, 0, .07071724310528026, 1.3032158407916754]
      }],
      rotation: [{
        t: .17746730083234244,
        v: [0, 0, 0],
        ease: [.807066718478605, .026672824415491948, .05397305674842967, 1.0519668384455731]
      }, {
        t: 1.4141067024830507,
        v: [1.431495026310406, -16.140319998213133, -36.05175434586088],
        ease: [.7054694160272805, .15290809768637542, 0, .9507801322055007]
      }, {
        t: 2.75,
        v: [-3.793664340840882, 16.145026960161896, 23.111555762366347],
        ease: [.8145184258410576, .05868417745499387, .7187386211123404, .8220737938312388]
      }, {
        t: 3.300369915174868,
        v: [-.658471135071176, 32.094524718170625, 23.00284198348812],
        ease: [.9529378729987852, -.03412152368009878, .7143170242443122, .5254015949332431]
      }, {
        t: 3.896330300821882,
        v: [-.03018222484427137, -273.02901001946327, 5.757592653481982],
        ease: [.11270319506726437, .6690303636987784, .23166630377840014, .9738369897382892]
      }, {
        t: 4.7824019024970275,
        v: [-.02727988727869867, -360, 0],
        ease: [.42, 0, .58, 1]
      }],
      scale: [{
        t: .17779177760649373,
        v: [.6],
        ease: [.807066718478605, .026672824415491948, .05397305674842967, .9010023979880923]
      }, {
        t: 1.4141067024830507,
        v: [.4215844279727266],
        ease: [.758517646256336, -.08984960385218788, .3074500979615823, .9070651813931356]
      }, {
        t: 2.25,
        v: [.5281520264776418],
        ease: [1, .12529134929810246, .3851632150743237, .8426351606267645]
      }, {
        t: 2.9883359098579825,
        v: [.6153393854797824],
        ease: [.6185932743021068, -.26875053521000764, .341686978852472, 1]
      }, {
        t: 4.608223713420763,
        v: [.6],
        ease: [.807066718478605, .026672824415491948, .05397305674842967, 1.0519668384455731]
      }],
      expression: [{
        t: .7466486120839366,
        v: "inspect",
        ease: [.7416814271255061, .03220016891891886, .26459703947368424, 1.0216427364864864]
      }, {
        t: 2.556108799048751,
        v: "surprised",
        ease: [.7416814271255061, .03220016891891886, .26459703947368424, 1.0216427364864864]
      }, {
        t: 3.7592152199762188,
        v: "neutral",
        ease: [.7416814271255061, .03220016891891886, .26459703947368424, 1.0216427364864864]
      }]
    }
  }, {
    name: "Working_C",
    duration: 5,
    body: "sphere",
    squashAnchor: 0,
    workArea: null,
    inspect: {
      bias: -1,
      follow: !0
    },
    tracks: {
      position: [{
        t: .17491812227074233,
        v: [-.06835221071089878, -14911040730998862e-21],
        ease: [.48050979200063776, .06136202638923106, .999, 1.5]
      }, {
        t: 1.5108114197876916,
        v: [.032133292775302545, -.0019533463357608513],
        ease: [.001, .24090214653366723, .58, 1]
      }, {
        t: 1.7971520856616507,
        v: [-.06835221071089878, -14911040730998862e-21],
        ease: [.48050979200063776, .06136202638923106, .999, 1.5]
      }, {
        t: 3.1330453831785996,
        v: [.032133292775302545, -.0019533463357608513],
        ease: [.001, .24090214653366723, .58, 1]
      }, {
        t: 3.4083292556973226,
        v: [-.06835221071089878, -14911040730998862e-21],
        ease: [.48050979200063776, .06136202638923106, .999, 1.5]
      }, {
        t: 4.777367618612606,
        v: [.032133292775302545, -.0019533463357608513],
        ease: [.001, .24090214653366723, .58, 1]
      }, {
        t: 5,
        v: [-.06835221071089878, -14911040730998862e-21],
        ease: [.48050979200063776, .06136202638923106, .999, 1.5]
      }],
      rotation: [{
        t: .17491812227074233,
        v: [22.808320996747383, -5.474402376762305, -34.85465299871112],
        ease: [.48050979200063776, .06136202638923106, .9994333239875214, 1.5]
      }, {
        t: 1.5108114197876916,
        v: [25.82236401380847, 8.163455755358939, 36.34926880424543],
        ease: [0, .24090214653366723, .58, 1]
      }, {
        t: 1.7971520856616507,
        v: [22.808320996747383, -5.474402376762305, -34.85465299871112],
        ease: [.48050979200063776, .06136202638923106, .9994333239875214, 1.5]
      }, {
        t: 3.1330453831785996,
        v: [25.82236401380847, 8.163455755358939, 36.34926880424543],
        ease: [0, .24090214653366723, .58, 1]
      }, {
        t: 3.4083292556973226,
        v: [22.808320996747383, -5.474402376762305, -34.85465299871112],
        ease: [.48050979200063776, .06136202638923106, .9994333239875214, 1.5]
      }, {
        t: 4.777367618612606,
        v: [25.82236401380847, 8.163455755358939, 36.34926880424543],
        ease: [0, .24090214653366723, .58, 1]
      }, {
        t: 5,
        v: [22.808320996747383, -5.474402376762305, -34.85465299871112],
        ease: [.48050979200063776, .06136202638923106, .9994333239875214, 1.5]
      }],
      expression: [{
        t: 0,
        v: "surprised",
        ease: [.7416814271255061, .03220016891891886, .26459703947368424, 1.0216427364864864]
      }]
    }
  }, {
    name: "Working_D",
    duration: 5,
    body: "sphere",
    squashAnchor: 0,
    workArea: {
      start: 0,
      end: 5
    },
    inspect: {
      bias: -1,
      follow: !0
    },
    tracks: {
      position: [{
        t: 1.5264103096017296,
        v: [0, 0],
        ease: [.8183794558884002, 0, .42063048773799955, .8916191063669083]
      }, {
        t: 2.2538209606986896,
        v: [.13302558581350077, .08599672420051416],
        ease: [.7164816671975539, -.07059803322016199, .15856161687281733, 1]
      }, {
        t: 2.636972068926158,
        v: [0, 0],
        ease: [.42, 0, .58, 1]
      }],
      rotation: [{
        t: 0,
        v: [-2.97589945531819, -26.234478989223906, -3.2544499064295738],
        ease: [.7818125791576046, .15346315752484826, .32687664998404986, 1.1173618829561318]
      }, {
        t: .003820960698689868,
        v: [2.4615600363954893, -24.921015876700608, 2.790543200988768],
        ease: [.42, 0, .58, 1]
      }, {
        t: .5222436429350663,
        v: [20.16565207199379, -20.644446669166673, 22.47273384376682],
        ease: [.36229770668640776, -.17418027527991467, .2875659277885649, 1.2452842602722636]
      }, {
        t: 1.5264103096017296,
        v: [-20.98869306129836, -21.248460672675545, -6.20573622722674],
        ease: [.49415439617951884, -.031041466813226757, .2907565775851124, 1]
      }, {
        t: 2.2538209606986896,
        v: [-23.757982259034762, 24.83627384870201, 18.82083960330674],
        ease: [.42, 0, .58, 1]
      }, {
        t: 2.636972068926158,
        v: [8.316132781421524, -27.390741199393897, -9.531735566337252],
        ease: [.12247552635300568, -.002557518043474879, .7043012111749869, .5773041000961353]
      }, {
        t: 3.494456667932666,
        v: [6.3335276735657375, -.1762970079864843, .6565665872756274],
        ease: [.42, .5038392468370619, .58, 1]
      }, {
        t: 4.25382096069869,
        v: [8.1703683326745, 24.729657859977713, 10.395084291173474],
        ease: [.42, 0, .58, 1]
      }, {
        t: 4.971120960698738,
        v: [2.4615600363954893, -24.921015876700608, 2.790543200988768],
        ease: [.42, 0, .58, 1]
      }],
      expression: [{
        t: .003820960698689868,
        v: "calm",
        ease: [.7416814271255061, .03220016891891886, .26459703947368424, 1.0216427364864864]
      }]
    }
  }, {
    name: "Working_E",
    duration: 4,
    body: "sphere",
    squashAnchor: 0,
    workArea: null,
    inspect: {
      bias: -1,
      follow: !0
    },
    tracks: {
      position: [{
        t: .6167064755838638,
        v: [0, 0],
        ease: [.5771393784786643, 0, .41654104823747684, 1]
      }, {
        t: 1.4190773177636233,
        v: [-.16387514369529332, 0],
        ease: [.42, 0, .58, 1]
      }, {
        t: 2.2684226822363764,
        v: [-.16387514369529332, .05904395257747427],
        ease: [.580719503710575, 0, 0, 1]
      }, {
        t: 3.1610281808035716,
        v: [0, 0],
        ease: [.5771393784786643, 0, .41654104823747684, 1]
      }],
      rotation: [{
        t: 0,
        v: [-15.896271043294888, 33.29315635042974, 25.38480127460161],
        ease: [.42, 0, .58, 1]
      }, {
        t: .6167064755838638,
        v: [-15.896271043294888, 33.29315635042974, 25.38480127460161],
        ease: [.8625910776088882, -.041613616273912, .25952275632662025, 1.049784301761229]
      }, {
        t: 1.4190773177636233,
        v: [-2.97589945531819, -26.234478989223906, -3.2544499064295738],
        ease: [.7818125791576046, .15346315752484826, .32687664998404986, 1.1173618829561318]
      }, {
        t: 2.2684226822363764,
        v: [-31.58476211869586, -3.710798107118315, 24.071416454447956],
        ease: [.36229770668640776, -.17418027527991467, .2875659277885649, 1.2452842602722636]
      }, {
        t: 2.7962446921443735,
        v: [-27.874087487241205, .739249290532289, 5.007074162025872],
        ease: [.42, .044881803684311196, .58, 1]
      }, {
        t: 3.2725893489030398,
        v: [-19.255583925594408, -17.414119894980235, -7.023063437300964],
        ease: [.49415439617951884, -.031041466813226757, .2907565775851124, 1]
      }, {
        t: 3.8435756138392856,
        v: [-10.064416055441825, 12.982763466855692, 19.192265328801522],
        ease: [.42, 0, .58, 1]
      }, {
        t: 3.9805733816964284,
        v: [-15.896271043294888, 33.29315635042974, 25.38480127460161],
        ease: [.42, 0, .58, 1]
      }],
      expression: [{
        t: .05960518973214285,
        v: "neutral",
        ease: [.7416814271255061, .03220016891891886, .26459703947368424, 1.0216427364864864]
      }, {
        t: 2.2434315286624202,
        v: "surprised",
        ease: [.7416814271255061, .03220016891891886, .26459703947368424, 1.0216427364864864]
      }]
    }
  }, {
    name: "Working_F",
    duration: 5,
    body: "sphere",
    squashAnchor: 0,
    workArea: null,
    inspect: {
      bias: -1,
      follow: !0
    },
    tracks: {
      position: [{
        t: .4874467656537753,
        v: [0, 0],
        ease: [.6778358120868745, -.22439715100065685, .15951040179591214, 1]
      }, {
        t: 1.3832000000000173,
        v: [-.14647919001828796, .027266090496135924],
        ease: [.5825263567433967, .31017058172003364, .04617913732408452, 1.3610608114532912]
      }, {
        t: 1.77965296961326,
        v: [-.14647919001828796, .027266090496135924],
        ease: [.22005965712189499, .31017058172003364, .04617913732408452, .9652306378531971]
      }, {
        t: 2.5961328343722427,
        v: [.06209379465135341, .0363636826260471],
        ease: [.6823010997778416, .03975119923438924, .58, .7462988396745895]
      }, {
        t: 3.066377943544433,
        v: [-.016487420591570615, .0804209848791122],
        ease: [.8034080182827295, -.08276325518488785, .6510110561346553, .8128258749805829]
      }, {
        t: 3.426085780646072,
        v: [-.008916270094194876, -.2135819760518346],
        ease: [.1744021985074266, -.5, .8865519014643501, -.2214168917492133]
      }, {
        t: 4.00439785911593,
        v: [-.0052248049102180776, -.12515593913381462],
        ease: [.023812816055625345, .31341394515796384, .0448947139696587, 1.0658309377957906]
      }, {
        t: 4.893926749555462,
        v: [0, 0],
        ease: [.42, 0, .58, 1]
      }],
      rotation: [{
        t: .4874467656537753,
        v: [0, 0, 0],
        ease: [.6778358120868745, -.22439715100065685, .15951040179591214, 1]
      }, {
        t: 1.3832000000000173,
        v: [-11.013174031248813, -20.059833580125414, -12.896783267756348],
        ease: [.5825263567433967, .31017058172003364, .04617913732408452, 1.3610608114532912]
      }, {
        t: 1.77965296961326,
        v: [-17.48975478197329, -18.703976724880516, -12.678205332257816],
        ease: [.22005965712189499, .31017058172003364, .04617913732408452, .9652306378531971]
      }, {
        t: 2.5961328343722427,
        v: [-14.554913391638532, 17.164836260093473, 9.376528927180779],
        ease: [.6823010997778416, .03975119923438924, .58, .9240336563778733]
      }, {
        t: 3.1796016343940767,
        v: [-24.586251970533304, .14133926125606477, -.7477216271856462],
        ease: [.8034080182827295, -.08276325518488785, .9143306014396848, .4851034680582119]
      }, {
        t: 3.4679142027965795,
        v: [-1.0943281912285556, -1.1346215368163393, -.7116952620126241],
        ease: [.12040927423864656, -.18872517040581954, .9481776569383256, -.20917925086224787]
      }, {
        t: 4.001861402631413,
        v: [-147.11069531984157, -.6757806869448113, -.4238857605398247],
        ease: [.03131913716814155, .8644907690193963, .0448947139696587, 1.0658309377957906]
      }, {
        t: 4.893926749555462,
        v: [-360, 0, 0],
        ease: [.7970933306500759, -.5, .24118105710043447, .7361553789450831]
      }],
      expression: [{
        t: 1.8508295659644571,
        v: "surprised",
        ease: [.7394673582995951, .10409628378378377, .6676682692307693, 1.5]
      }, {
        t: 4.893926749555462,
        v: "neutral",
        ease: [.8458217358299596, .40487753378378377, .13769926619433198, .9154349662162162],
        cut: !0
      }],
      lids: [{
        t: 1.1672000000000002,
        v: [0],
        ease: [.42, 0, .58, 1]
      }, {
        t: 1.2797000000000003,
        v: [1],
        ease: [.42, 0, .58, 1]
      }, {
        t: 1.4172000000000002,
        v: [0],
        ease: [.42, 0, .58, 1]
      }]
    }
  }],
  ar: any = [{
    label: "Lifecycle",
    states: ["idle", "listening", "thinking", "streaming", "searching", "reading", "working", "coding", "running", "computing", "controlling", "waiting", "blocked", "finished", "failed", "sleeping", "waking"]
  }, {
    label: "Reactions",
    states: ["happy", "excited", "laughing", "proud", "curious", "playful", "shy", "surprised", "suspicious", "angry", "confused", "sad", "drowsy", "bored", "scared", "celebrate", "approving"]
  }, {
    label: "Morphs",
    states: ["orbit", "radar", "progress", "spawning", "loading", "dictating", "sending", "receiving", "uploading", "writing", "alerting", "bouncing", "powering-down"]
  }, {
    label: "Product",
    states: ["humming", "notifying", "dragging"]
  }, {
    label: "Brand",
    states: ["logo", "showcase", "turntable"]
  }];
((ar as any).flatMap as any)((t: any): any => (t as any).states);
const cr: number = 120,
  $t: any = {
    clips: ["Working_A", "Working_B", "Working_C", "Working_D", "Working_E", "Working_F"]
  },
  x1: any = {
    idle: {
      clips: ["Idle_B", "Idle_B", "Idle_D", "Idle_B", "Idle_A"],
      compactClips: ["Idle_B"]
    },
    listening: {
      clips: ["Idle_D"],
      face: "calm"
    },
    thinking: {
      clips: ["Idle_B"],
      morph: "thinking"
    },
    streaming: {
      clips: ["Streaming_A", "Streaming_B", "Streaming_C"]
    },
    searching: {
      clips: ["Idle_B"],
      morph: "radar"
    },
    reading: $t,
    working: $t,
    coding: $t,
    running: $t,
    computing: $t,
    controlling: $t,
    waiting: {
      clips: ["Idle_B"],
      morph: "orbit"
    },
    blocked: {
      clips: ["Blocked_A"],
      next: "drowsy",
      holdSeconds: cr
    },
    finished: {
      clips: ["Done_B", "Done_A"],
      face: "happy",
      next: "idle"
    },
    failed: {
      clips: ["Blocked_B"],
      next: "idle"
    },
    sleeping: {
      clips: ["Idle_B"],
      face: "sleepy"
    },
    waking: {
      clips: ["Idle_B"],
      face: "surprised",
      next: "idle",
      holdSeconds: 1.6
    },
    happy: {
      clips: ["Done_A"]
    },
    excited: {
      clips: ["Done_C"]
    },
    laughing: {
      clips: ["Done_B"]
    },
    proud: {
      clips: ["Marketing_B"]
    },
    curious: {
      clips: ["Working_B"],
      face: "inspecting"
    },
    playful: {
      clips: ["Bodymoves_A"]
    },
    shy: {
      clips: ["Idle_D"],
      face: "calm"
    },
    surprised: {
      clips: ["Idle_B"],
      face: "surprised"
    },
    suspicious: {
      clips: ["Idle_D"],
      face: "squinted"
    },
    angry: {
      clips: ["Blocked_A"],
      face: "squinted"
    },
    confused: {
      clips: ["Blocked_A"]
    },
    sad: {
      clips: ["Blocked_B"]
    },
    drowsy: {
      clips: ["Blocked_C"]
    },
    bored: {
      clips: ["Idle_B"],
      face: "sleepy"
    },
    scared: {
      clips: ["Idle_D"],
      face: "surprised"
    },
    celebrate: {
      clips: ["Rotation_A"],
      face: "happy"
    },
    approving: {
      clips: ["Rotation_C"],
      next: "idle"
    },
    orbit: {
      clips: ["Idle_B"],
      morph: "orbit"
    },
    radar: {
      clips: ["Idle_B"],
      morph: "radar"
    },
    progress: {
      clips: ["Idle_B"],
      morph: "progress"
    },
    spawning: {
      clips: ["Idle_B"],
      morph: "spawning"
    },
    loading: {
      clips: ["Idle_B"],
      morph: "progress"
    },
    dictating: {
      clips: ["Idle_B"],
      morph: "dictating"
    },
    sending: {
      clips: ["Idle_B"],
      morph: "sending"
    },
    receiving: {
      clips: ["Idle_B"],
      morph: "receiving"
    },
    uploading: {
      clips: ["Idle_B"],
      morph: "uploading"
    },
    writing: {
      clips: ["Idle_B"],
      morph: "writing"
    },
    alerting: {
      clips: ["Idle_B"],
      morph: "alerting"
    },
    bouncing: {
      clips: ["Idle_B"],
      morph: "bouncing"
    },
    "powering-down": {
      clips: ["Idle_B"],
      morph: "powering-down"
    },
    humming: {
      clips: ["Idle_B"],
      face: "calm"
    },
    notifying: {
      clips: ["Done_B"],
      face: "surprised"
    },
    dragging: {
      clips: ["Idle_B"],
      face: "surprised"
    },
    logo: {
      clips: ["Logo_A", "Logo_B"]
    },
    showcase: {
      clips: ["Marketing_A", "Marketing_B", "Marketing_C", "Marketing_D"]
    },
    turntable: {
      clips: ["Rotation_B"]
    }
  },
  ir: any = new (Map as any)(((rr as any).map as any)((t: any): any => [(t as any).name, t]));
function lr(this: any, t: any): any {
  const n: any = ((ir as any).get as any)(t);
  if ((n as any) == (null as any)) throw new (Error as any)(`No motion recipe named ${t}`);
  return n;
}
const ur: string = "surprised";
function hr(this: any, t: any, n: any, e: any): any {
  const s: any = [...t];
  for (let r: any = ((s as any).length as any) - (1 as any); (r as any) > (0 as any); r -= 1) (b1 as any)(s, r, ((Math as any).floor as any)(((n as any)() as any) * ((r as any) + (1 as any) as any)));
  const o: any = ((s as any).findIndex as any)((r: any): any => (r as any) !== (e as any));
  return (o as any) > (0 as any) && (b1 as any)(s, 0, o), s;
}
function b1(this: any, t: any, n: any, e: any): any {
  const s: any = (t as any)[n],
    o: any = (t as any)[e];
  (s as any) === (void 0 as any) || (o as any) === (void 0 as any) || ((t as any)[n] = o, (t as any)[e] = s);
}
function S3(this: any, t: any, n: any, e: any = {}): any {
  const s: any = (Nn as any)((e as any).seed ?? 1),
    o: any = new (Map as any)();
  let r: any = (e as any).isCompact ?? !1,
    a: any = (e as any).isResting ?? !1,
    c: any = !1,
    i: any = a,
    u: any = n,
    l: any = (x1 as any)[n],
    h: any = 0,
    f: any = 0,
    d: any = (t as any).loopCount,
    p: any = null;
  const y: any = (): any => r && ((l as any).compactClips as any) != (null as any) ? (l as any).compactClips : (l as any).clips,
    m: any = (): any => ((l as any).next as any) != (null as any) && ((l as any).holdSeconds as any) == (null as any),
    g: any = (): any => {
      const b: any = (y as any)(),
        A: any = ((o as any).get as any)(b) ?? [];
      return ((A as any).length as any) === (0 as any) && ((A as any).push as any)(...(hr as any)(b, s, p)), ((o as any).set as any)(b, A), ((A as any).shift as any)();
    },
    x: any = (): any => {
      const b: any = (m as any)() ? ((y as any)() as any)[f] : (g as any)();
      if (d = (t as any).loopCount, (b as any) === (void 0 as any) || (b as any) === (p as any)) return;
      const A: any = i || (m as any)();
      ((t as any).load as any)((lr as any)(b), {
        phase: A ? 0 : (e as any).firstPhase ?? (s as any)()
      }), i = !0, p = b, d = (t as any).loopCount;
    },
    w: any = (): any => {
      ((t as any).holdFace as any)((l as any).face ?? (c ? ur : null));
    },
    v: any = (b: any): any => {
      u = b, l = (x1 as any)[b], h = 0, f = 0, ((t as any).setMorph as any)((l as any).morph ?? null), (w as any)(), a || (x as any)();
    };
  return a && ((t as any).rest as any)(), (v as any)(n), {
    get state(): any {
      return u;
    },
    get clip(): any {
      return p;
    },
    setState(b: any): any {
      (b as any) !== (u as any) && (v as any)(b);
    },
    setCompact(b: any): any {
      r = b;
    },
    setEmphasis(b: any): any {
      (b as any) !== (c as any) && (c = b, (w as any)());
    },
    setResting(b: any): any {
      if ((b as any) !== (a as any)) {
        if (a = b, !a) {
          (x as any)();
          return;
        }
        ((t as any).rest as any)(), p = null;
      }
    },
    advance(b: any): any {
      if (a) return;
      h += b;
      const A: any = (l as any).next;
      if ((A as any) != (null as any) && ((l as any).holdSeconds as any) != (null as any) && (h as any) >= ((l as any).holdSeconds as any)) {
        (v as any)(A);
        return;
      }
      if (((t as any).loopCount as any) !== (d as any)) {
        if ((A as any) != (null as any) && ((l as any).holdSeconds as any) == (null as any) && (f += 1, (f as any) >= (((y as any)() as any).length as any))) {
          (v as any)(A);
          return;
        }
        (x as any)();
      }
    }
  };
}
const fr: number = .26,
  dr: number = .57,
  St: number = .64,
  v1: number = 11,
  pr: number = 18,
  R0: number = 48,
  w1: number = 10,
  k1: number = 64,
  A1: any = {
    on: !1,
    oval: !1,
    width: 0,
    height: 0,
    tilt: 0,
    cx: 0,
    cy: 0
  },
  Mr: any = {
    cloud: {
      width: .21294,
      height: .4668299999999999,
      gap: .47001600000000004,
      shiftY: .06999999999999999
    },
    square: {
      width: .2553258426966292,
      height: .559752808988764,
      gap: .529408,
      shiftY: .12
    },
    sparkle: {
      width: .18381999999999998,
      height: .40298999999999996,
      gap: .41215999999999997,
      shiftY: 0
    },
    clover: {
      width: .23296,
      height: .51072,
      gap: .559104,
      shiftY: -.020000000000000018
    },
    heartChubby: {
      width: .18657600000000002,
      height: .409032,
      gap: .44620799999999994,
      shiftY: .051999999999999935
    },
    starFlower: {
      width: .19292,
      height: .42294,
      gap: .38297600000000004,
      shiftY: .12
    },
    teardrop: {
      width: .20779200000000003,
      height: .455544,
      gap: .45260800000000007,
      shiftY: .18
    },
    tablet: {
      width: .2132,
      height: .4673999999999999,
      gap: .587776,
      shiftY: .01999999999999999
    },
    wedge: {
      width: .2132,
      height: .4673999999999999,
      gap: .46771199999999996,
      shiftY: .18
    },
    house: {
      width: .2295124,
      height: .5031617999999999,
      gap: .5125120000000001,
      shiftY: .18499534000463813
    },
    star6: {
      width: .184782,
      height: .44965988999999995,
      gap: .41913343999999997,
      shiftY: .12
    },
    pebble: {
      width: .23920000000000002,
      height: .5244,
      gap: .546304,
      shiftY: .12
    },
    bean: {
      width: .2028,
      height: .4446,
      gap: .4608,
      shiftY: .12
    },
    egg: {
      width: .23920000000000002,
      height: .5244,
      gap: .433664,
      shiftY: .11299906800092761
    },
    squircle: {
      width: .23920000000000002,
      height: .5244,
      gap: .5632,
      shiftY: .12
    },
    capsule: {
      width: .2106,
      height: .4617,
      gap: .36044800000000005,
      shiftY: .12
    },
    cylinder: {
      width: .23920000000000002,
      height: .5244,
      gap: .47872000000000003,
      shiftY: .12
    },
    hex: {
      width: .26,
      height: .57,
      gap: .64,
      shiftY: .12
    },
    gem: {
      width: .23920000000000002,
      height: .5244,
      gap: .501248,
      shiftY: .12
    },
    crystal: {
      width: .1612,
      height: .3534,
      gap: .3712,
      shiftY: .12
    },
    shield: {
      width: .26790400000000003,
      height: .5873280000000001,
      gap: .44492800000000005,
      shiftY: .12
    },
    dome: {
      width: .2132,
      height: .4673999999999999,
      gap: .47872000000000003,
      shiftY: .10599813600185524
    },
    arch: {
      width: .19240000000000002,
      height: .42179999999999995,
      gap: .44799999999999995,
      shiftY: .16
    },
    leaf: {
      width: .1872,
      height: .41039999999999993,
      gap: .44799999999999995,
      shiftY: .039999999999999994
    }
  };
function mr(this: any, t: any, n: any, e: any, s: any): any {
  const o: any = (Mr as any)[t],
    r: any = ((o as any).width as any) / (fr as any),
    a: any = ((o as any).height as any) / (dr as any),
    c: any = ((o as any).gap as any) / (St as any);
  if (((n as any).every as any)((f: any): any => (Hn as any)(f) && !(((f as any).fillRing as any) != (null as any) && (((f as any).fillRing as any).length as any) > (0 as any)))) return (yr as any)((_1 as any)((n as any)[0]), (_1 as any)((n as any)[1]), o, r, a, c, e, s);
  let u: any = (gr as any)(n, r, c, a, (o as any).shiftY),
    l: any = 1;
  if ((s as any) >= (.001 as any)) {
    const [f, d]: any = (je as any)(((Math as any).max as any)(0, (q as any)((St as any) * (c as any), St)), e, s);
    l *= f, ((u as any).length as any) >= (2 as any) && (u = [(I1 as any)((u as any)[0], f), (I1 as any)((u as any)[1], d)]);
  }
  const h: any = ((Math as any).max as any)(.08, ((Math as any).min as any)(1.25, l));
  return {
    loops: ((u as any).map as any)((f: any): any => ((f as any).map as any)((d: any): any => ({
      x: ((d as any).x as any) * (h as any),
      y: ((d as any).y as any) * (h as any)
    }))),
    shiftY: 0
  };
}
function yr(this: any, t: any, n: any, e: any, s: any, o: any, r: any, a: any, c: any): any {
  const i: any = (q as any)(((t as any).width as any) * (s as any)),
    u: any = (q as any)(((t as any).height as any) * (s as any)),
    l: any = (q as any)(((n as any).width as any) * (s as any)),
    h: any = (q as any)(((n as any).height as any) * (s as any));
  let f: any = ((Math as any).max as any)(0, (q as any)(((Math as any).min as any)(i, u))),
    d: any = ((Math as any).max as any)(0, (q as any)(((Math as any).max as any)(i, u))),
    p: any = ((Math as any).max as any)(0, (q as any)(((Math as any).min as any)(l, h))),
    y: any = ((Math as any).max as any)(0, (q as any)(((Math as any).max as any)(l, h)));
  const m: any = ((Math as any).max as any)(0, (q as any)((((St as any) + (((t as any).on ? (q as any)((t as any).cx) : 0) as any) as any) + (((n as any).on ? (q as any)((n as any).cx) : 0) as any) as any) * (r as any), (St as any) * (r as any)));
  if ((c as any) >= (.001 as any)) {
    const [x, w]: any = (je as any)(m, a, c);
    f *= x, d *= x, p *= w, y *= w;
  }
  const g: any = ((Math as any).max as any)(.05, ((Math as any).min as any)(1.8, m));
  return {
    loops: [(E1 as any)(-1, f, d, -(q as any)(((q as any)((t as any).tilt) as any) + (((i as any) >= (u as any) ? 0 : 90) as any)), g), (E1 as any)(1, p, y, (q as any)(((q as any)((n as any).tilt) as any) + (((l as any) >= (h as any) ? 0 : 90) as any)), g)],
    shiftY: (q as any)(((e as any).shiftY as any) + (((((q as any)((t as any).cy) as any) + ((q as any)((n as any).cy) as any) as any) / (2 as any) as any) * (o as any) as any), (e as any).shiftY)
  };
}
function E1(this: any, t: any, n: any, e: any, s: any, o: any): any {
  const r: any = (((Math as any).max as any)(.01, ((Math as any).min as any)(1, n)) as any) / (2 as any),
    a: any = (((Math as any).max as any)(.02, ((Math as any).min as any)(1.8, ((Math as any).max as any)(e, n))) as any) / (2 as any),
    c: any = ((-s as any) * ((Math as any).PI as any) as any) / (180 as any),
    i: any = ((Math as any).cos as any)(c),
    u: any = ((Math as any).sin as any)(c);
  return ((Array as any).from as any)({
    length: k1
  }, (l: any, h: any): any => {
    const f: any = (((2 as any) * ((Math as any).PI as any) as any) * (h as any) as any) / (k1 as any),
      d: any = ((t as any) * (a as any) as any) * (((Math as any).cos as any)(f) as any),
      p: any = (r as any) * (((Math as any).sin as any)(f) as any);
    return {
      x: (((d as any) * (i as any) as any) - ((p as any) * (u as any) as any) as any) + (((t as any) * (o as any) as any) / (2 as any) as any),
      y: ((d as any) * (u as any) as any) + ((p as any) * (i as any) as any)
    };
  });
}
function je(this: any, t: any, n: any, e: any): any {
  const s: any = ((Math as any).max as any)(.05, ((t || St) as any) / (2 as any)),
    o: any = ((n as any) * ((Math as any).PI as any) as any) / (180 as any),
    r: any = ((Math as any).cos as any)(s) || 1;
  return [(1 as any) + ((((((Math as any).max as any)(.18, ((Math as any).cos as any)((-s as any) - (o as any))) as any) / (r as any) as any) - (1 as any) as any) * (e as any) as any), (1 as any) + ((((((Math as any).max as any)(.18, ((Math as any).cos as any)((s as any) - (o as any))) as any) / (r as any) as any) - (1 as any) as any) * (e as any) as any)];
}
function I1(this: any, t: any, n: any): any {
  if (((t as any).length as any) === (0 as any) || (((Math as any).abs as any)((n as any) - (1 as any)) as any) < (1e-4 as any)) return t;
  let e: any = 0,
    s: any = 0;
  for (const o of t) e += (o as any).x, s += (o as any).y;
  return e /= (t as any).length, s /= (t as any).length, ((t as any).map as any)((o: any): any => ({
    x: (e as any) + ((((o as any).x as any) - (e as any) as any) * (n as any) as any),
    y: (s as any) + ((((o as any).y as any) - (s as any) as any) * (n as any) as any)
  }));
}
function _1(this: any, t: any): any {
  const n: any = (Hn as any)(t);
  if (!(((t as any).wid as any) > (0 as any)) && !n) return A1;
  const e: any = (t as any).lidY || 1,
    s: any = (((t as any).tilt || 0) as any) * ((180 as any) / ((Math as any).PI as any) as any);
  if (n) return {
    on: !0,
    oval: !0,
    width: (2 as any) * (((t as any).oval as any)[0] as any),
    height: ((2 as any) * (((t as any).oval as any)[1] as any) as any) * (e as any),
    tilt: s,
    cx: ((t as any).off as any)[0],
    cy: ((t as any).off as any)[1]
  };
  const o: any = (t as any).pts;
  if (((o as any).length as any) < (2 as any)) return {
    ...A1,
    cx: ((t as any).off as any)[0],
    cy: ((t as any).off as any)[1]
  };
  const r: any = (o as any)[0],
    a: any = (o as any)[((o as any).length as any) - (1 as any)],
    c: any = ((a as any)[0] as any) - ((r as any)[0] as any),
    i: any = ((a as any)[1] as any) - ((r as any)[1] as any),
    u: any = ((Math as any).hypot as any)(c, i),
    l: any = (2 as any) * ((t as any).wid as any);
  return {
    on: !0,
    oval: !1,
    width: l,
    height: ((u as any) + (l as any) as any) * (e as any),
    tilt: ((((Math as any).atan2 as any)(c, i) as any) * ((180 as any) / ((Math as any).PI as any) as any) as any) + (s as any),
    cx: (((t as any).off as any)[0] as any) + ((((r as any)[0] as any) + ((a as any)[0] as any) as any) / (2 as any) as any),
    cy: (((t as any).off as any)[1] as any) + (((((r as any)[1] as any) + ((a as any)[1] as any) as any) / (2 as any) as any) * (e as any) as any)
  };
}
function gr(this: any, t: any, n: any, e: any, s: any, o: any): any {
  const r: any = [],
    a: any = -((Math as any).sin as any)(o);
  return ((t as any).forEach as any)((c: any, i: any): any => {
    const u: any = (Hn as any)(c);
    if (!(((c as any).wid as any) > (0 as any)) && !u || !u && (((c as any).pts as any).length as any) < (2 as any)) return;
    const l: any = (i as any) === (0 as any) ? -1 : 1,
      h: any = (c as any).lidY || 1,
      f: any = ((Math as any).cos as any)((c as any).tilt || 0),
      d: any = ((Math as any).sin as any)((c as any).tilt || 0),
      p: any = (l as any) * ((((St as any) / (2 as any) as any) + ((q as any)(((c as any).off as any)[0]) as any) as any) * (e as any) as any),
      y: any = (a as any) + (((q as any)(((c as any).off as any)[1]) as any) * (s as any) as any),
      m: any = (w: any, v: any): any => {
        const b: any = ((w as any) * (f as any) as any) - ((v as any) * (d as any) as any),
          A: any = ((w as any) * (d as any) as any) + ((v as any) * (f as any) as any);
        return {
          x: (p as any) + (((l as any) * (b as any) as any) * (n as any) as any),
          y: (y as any) + (((A as any) * (n as any) as any) * (h as any) as any)
        };
      };
    if (((c as any).fillRing as any) != (null as any) && (((c as any).fillRing as any).length as any) >= (3 as any)) {
      const w: any = (q as any)(((c as any).off as any)[0]),
        v: any = (q as any)(((c as any).off as any)[1]);
      ((r as any).push as any)((((c as any).fillRing as any).map as any)(([b, A]: any): any => (m as any)((b as any) - (w as any), ((A as any) - (v as any) as any) * (h as any))));
      return;
    }
    if (u) {
      const w: any = [];
      for (let v: any = 0; (v as any) < (R0 as any); v++) {
        const b: any = (((2 as any) * ((Math as any).PI as any) as any) * (v as any) as any) / (R0 as any);
        ((w as any).push as any)((m as any)((((c as any).oval as any)[0] as any) * (((Math as any).cos as any)(b) as any), ((((c as any).oval as any)[1] as any) * (h as any) as any) * (((Math as any).sin as any)(b) as any)));
      }
      ((r as any).push as any)(w);
      return;
    }
    const g: any = ((c as any).wid as any) * (n as any),
      x: any = ((c as any).path as any) != (null as any) && (((c as any).path as any).length as any) === (pr as any) ? (br as any)((c as any).path, m, g) : (xr as any)((((c as any).pts as any).map as any)((w: any): any => (m as any)((w as any)[0], (w as any)[1])), g);
    ((x as any).length as any) > (0 as any) && ((r as any).push as any)(x);
  }), r;
}
function xr(this: any, t: any, n: any): any {
  const e: any = [];
  for (const u of t) {
    const l: any = ((e as any).at as any)(-1);
    ((l as any) == (null as any) || (((Math as any).hypot as any)(((u as any).x as any) - ((l as any).x as any), ((u as any).y as any) - ((l as any).y as any)) as any) > (1e-6 as any)) && ((e as any).push as any)(u);
  }
  if (((e as any).length as any) === (0 as any) || (n as any) <= (0 as any)) return [];
  const s: any = (Ze as any)(e, n);
  if ((s as any) != (null as any)) return s;
  const o: any = (e as any).length;
  if ((o as any) < (2 as any)) return [];
  const r: any = [],
    a: any = [];
  for (let u: any = 0; (u as any) < (o as any); u++) {
    const l: any = (e as any)[((Math as any).max as any)(0, (u as any) - (1 as any))],
      h: any = (e as any)[((Math as any).min as any)((o as any) - (1 as any), (u as any) + (1 as any))],
      f: any = ((Math as any).hypot as any)(((h as any).x as any) - ((l as any).x as any), ((h as any).y as any) - ((l as any).y as any)) || 1;
    let d: any = (-(((h as any).y as any) - ((l as any).y as any)) as any) / (f as any),
      p: any = (((h as any).x as any) - ((l as any).x as any) as any) / (f as any);
    (u as any) > (0 as any) && (((d as any) * ((r as any)[(u as any) - (1 as any)] as any) as any) + ((p as any) * ((a as any)[(u as any) - (1 as any)] as any) as any) as any) < (0 as any) && (d = -d, p = -p), ((r as any).push as any)(d), ((a as any).push as any)(p);
  }
  const c: any = ($1 as any)((((e as any)[1] as any).x as any) - (((e as any)[0] as any).x as any), (((e as any)[1] as any).y as any) - (((e as any)[0] as any).y as any)),
    i: any = ($1 as any)((((e as any)[(o as any) - (1 as any)] as any).x as any) - (((e as any)[(o as any) - (2 as any)] as any).x as any), (((e as any)[(o as any) - (1 as any)] as any).y as any) - (((e as any)[(o as any) - (2 as any)] as any).y as any));
  return (Xe as any)(e, r, a, n, c, i);
}
function br(this: any, t: any, n: any, e: any): any {
  if ((e as any) <= (0 as any)) return [];
  const s: any = [];
  for (let f: any = 0; (f as any) < (2 as any); f++) {
    const d: any = (S1 as any)(t, f),
      p: any = (C1 as any)(t, f, 4),
      y: any = (C1 as any)(t, (f as any) + (1 as any), 2),
      m: any = (S1 as any)(t, (f as any) + (1 as any));
    for (let g: any = (f as any) === (0 as any) ? 0 : 1; (g as any) < (v1 as any); g++) {
      const x: any = (g as any) / ((v1 as any) - (1 as any) as any),
        w: any = (vr as any)(d, p, y, m, x),
        v: any = (wr as any)(d, p, y, m, x),
        b: any = (n as any)((w as any)[0], (w as any)[1]),
        A: any = (n as any)(((w as any)[0] as any) + ((v as any)[0] as any), ((w as any)[1] as any) + ((v as any)[1] as any));
      ((s as any).push as any)({
        x: (b as any).x,
        y: (b as any).y,
        tx: ((A as any).x as any) - ((b as any).x as any),
        ty: ((A as any).y as any) - ((b as any).y as any)
      });
    }
  }
  const o: any = (Ze as any)(s, e);
  if ((o as any) != (null as any)) return o;
  const r: any = (s as any).length,
    a: any = [],
    c: any = [];
  for (let f: any = 0; (f as any) < (r as any); f++) {
    const d: any = ((Math as any).hypot as any)(((s as any)[f] as any).tx, ((s as any)[f] as any).ty) || 1;
    let p: any = (-((s as any)[f] as any).ty as any) / (d as any),
      y: any = (((s as any)[f] as any).tx as any) / (d as any);
    (f as any) > (0 as any) && (((p as any) * ((a as any)[(f as any) - (1 as any)] as any) as any) + ((y as any) * ((c as any)[(f as any) - (1 as any)] as any) as any) as any) < (0 as any) && (p = -p, y = -y), ((a as any).push as any)(p), ((c as any).push as any)(y);
  }
  const i: any = (s as any)[0],
    u: any = (s as any)[(r as any) - (1 as any)],
    l: any = ((Math as any).hypot as any)((i as any).tx, (i as any).ty) || 1,
    h: any = ((Math as any).hypot as any)((u as any).tx, (u as any).ty) || 1;
  return (Xe as any)(s, a, c, e, {
    x: ((i as any).tx as any) / (l as any),
    y: ((i as any).ty as any) / (l as any)
  }, {
    x: ((u as any).tx as any) / (h as any),
    y: ((u as any).ty as any) / (h as any)
  });
}
function Xe(this: any, t: any, n: any, e: any, s: any, o: any, r: any): any {
  const a: any = (t as any).length,
    c: any = ((t as any).map as any)((h: any, f: any): any => ({
      x: ((h as any).x as any) + (((n as any)[f] as any) * (s as any) as any),
      y: ((h as any).y as any) + (((e as any)[f] as any) * (s as any) as any)
    })),
    i: any = ((t as any).map as any)((h: any, f: any): any => ({
      x: ((h as any).x as any) - (((n as any)[f] as any) * (s as any) as any),
      y: ((h as any).y as any) - (((e as any)[f] as any) * (s as any) as any)
    })),
    u: any = {
      x: (((t as any)[0] as any).x as any) - (((o as any).x as any) * (s as any) as any),
      y: (((t as any)[0] as any).y as any) - (((o as any).y as any) * (s as any) as any)
    },
    l: any = {
      x: (((t as any)[(a as any) - (1 as any)] as any).x as any) + (((r as any).x as any) * (s as any) as any),
      y: (((t as any)[(a as any) - (1 as any)] as any).y as any) + (((r as any).y as any) * (s as any) as any)
    };
  return [...c, ...(P1 as any)((t as any)[(a as any) - (1 as any)], (c as any)[(a as any) - (1 as any)], l, s), ...(([...i] as any).reverse as any)(), ...(P1 as any)((t as any)[0], (i as any)[0], u, s)];
}
function P1(this: any, t: any, n: any, e: any, s: any): any {
  const o: any = [],
    r: any = ((Math as any).atan2 as any)(((n as any).y as any) - ((t as any).y as any), ((n as any).x as any) - ((t as any).x as any));
  let c: any = (((Math as any).atan2 as any)(((e as any).y as any) - ((t as any).y as any), ((e as any).x as any) - ((t as any).x as any)) as any) - (r as any);
  for (; (c as any) > ((Math as any).PI as any);) c -= (2 as any) * ((Math as any).PI as any);
  for (; (c as any) < (-(Math as any).PI as any);) c += (2 as any) * ((Math as any).PI as any);
  const i: any = (c as any) >= (0 as any) ? 1 : -1;
  for (let u: any = 1; (u as any) < (w1 as any); u++) {
    const l: any = (r as any) + (((i as any) * ((u as any) / (w1 as any) as any) as any) * ((Math as any).PI as any) as any);
    ((o as any).push as any)({
      x: ((t as any).x as any) + ((s as any) * (((Math as any).cos as any)(l) as any) as any),
      y: ((t as any).y as any) + ((s as any) * (((Math as any).sin as any)(l) as any) as any)
    });
  }
  return o;
}
function Ze(this: any, t: any, n: any): any {
  let e: any = 0,
    s: any = 0;
  for (const a of t) e += (a as any).x, s += (a as any).y;
  e /= (t as any).length, s /= (t as any).length;
  let o: any = 0;
  for (const a of t) o = ((Math as any).max as any)(o, ((Math as any).hypot as any)(((a as any).x as any) - (e as any), ((a as any).y as any) - (s as any)));
  if ((n as any) <= ((o as any) * (1.05 as any) as any)) return null;
  const r: any = [];
  for (let a: any = 0; (a as any) < (R0 as any); a++) {
    const c: any = (((2 as any) * ((Math as any).PI as any) as any) * (a as any) as any) / (R0 as any),
      i: any = ((Math as any).cos as any)(c),
      u: any = ((Math as any).sin as any)(c);
    let l: any = (-1 as any) / (0 as any),
      h: any = 0,
      f: any = 0;
    for (const d of t) {
      const p: any = (((d as any).x as any) * (i as any) as any) + (((d as any).y as any) * (u as any) as any);
      (p as any) > (l as any) && (l = p, h = (d as any).x, f = (d as any).y);
    }
    ((r as any).push as any)({
      x: (h as any) + ((i as any) * (n as any) as any),
      y: (f as any) + ((u as any) * (n as any) as any)
    });
  }
  return r;
}
function S1(this: any, t: any, n: any): any {
  return [(t as any)[(n as any) * (6 as any)], (t as any)[((n as any) * (6 as any) as any) + (1 as any)]];
}
function C1(this: any, t: any, n: any, e: any): any {
  return [((t as any)[(n as any) * (6 as any)] as any) + ((t as any)[((n as any) * (6 as any) as any) + (e as any)] as any), ((t as any)[((n as any) * (6 as any) as any) + (1 as any)] as any) + ((t as any)[(((n as any) * (6 as any) as any) + (e as any) as any) + (1 as any)] as any)];
}
function vr(this: any, t: any, n: any, e: any, s: any, o: any): any {
  const r: any = (1 as any) - (o as any);
  return [((((((r as any) * (r as any) as any) * (r as any) as any) * ((t as any)[0] as any) as any) + (((((3 as any) * (r as any) as any) * (r as any) as any) * (o as any) as any) * ((n as any)[0] as any) as any) as any) + (((((3 as any) * (r as any) as any) * (o as any) as any) * (o as any) as any) * ((e as any)[0] as any) as any) as any) + ((((o as any) * (o as any) as any) * (o as any) as any) * ((s as any)[0] as any) as any), ((((((r as any) * (r as any) as any) * (r as any) as any) * ((t as any)[1] as any) as any) + (((((3 as any) * (r as any) as any) * (r as any) as any) * (o as any) as any) * ((n as any)[1] as any) as any) as any) + (((((3 as any) * (r as any) as any) * (o as any) as any) * (o as any) as any) * ((e as any)[1] as any) as any) as any) + ((((o as any) * (o as any) as any) * (o as any) as any) * ((s as any)[1] as any) as any)];
}
function wr(this: any, t: any, n: any, e: any, s: any, o: any): any {
  const r: any = (1 as any) - (o as any);
  return [(((((3 as any) * (r as any) as any) * (r as any) as any) * (((n as any)[0] as any) - ((t as any)[0] as any) as any) as any) + ((((6 as any) * (r as any) as any) * (o as any) as any) * (((e as any)[0] as any) - ((n as any)[0] as any) as any) as any) as any) + ((((3 as any) * (o as any) as any) * (o as any) as any) * (((s as any)[0] as any) - ((e as any)[0] as any) as any) as any), (((((3 as any) * (r as any) as any) * (r as any) as any) * (((n as any)[1] as any) - ((t as any)[1] as any) as any) as any) + ((((6 as any) * (r as any) as any) * (o as any) as any) * (((e as any)[1] as any) - ((n as any)[1] as any) as any) as any) as any) + ((((3 as any) * (o as any) as any) * (o as any) as any) * (((s as any)[1] as any) - ((e as any)[1] as any) as any) as any)];
}
function $1(this: any, t: any, n: any): any {
  const e: any = ((Math as any).hypot as any)(t, n) || 1;
  return {
    x: (t as any) / (e as any),
    y: (n as any) / (e as any)
  };
}
function Hn(this: any, t: any): any {
  return (((t as any).oval as any)[0] as any) > (1e-4 as any) && (((t as any).oval as any)[1] as any) > (1e-4 as any);
}
function q(this: any, t: any, n: any = 0): any {
  return ((Number as any).isFinite as any)(t) ? t : n;
}
const M: number = 114.2705;
(((): any => {
  const t: any = [];
  for (let n: any = 0; (n as any) < (10 as any); n++) {
    const e: any = ((-(Math as any).PI as any) / (2 as any) as any) + (((n as any) * ((Math as any).PI as any) as any) / (5 as any) as any),
      s: any = ((n as any) % (2 as any) as any) === (0 as any) ? 1 : .42;
    ((t as any).push as any)(`${(((((Math as any).cos as any)(e) as any) * (s as any) as any).toFixed as any)(3)} ${(((((Math as any).sin as any)(e) as any) * (s as any) as any).toFixed as any)(3)}`);
  }
  return (("M" as any) + (((t as any).join as any)("L") as any) as any) + ("Z" as any);
}) as any)();
const kr: any = (t: any, n: any, e: any): any => ((t as any).map as any)(([s, o]: any, r: any): any => [(s as any) + (((((n as any)[r] as any)[0] as any) - (s as any) as any) * (e as any) as any), (o as any) + (((((n as any)[r] as any)[1] as any) - (o as any) as any) * (e as any) as any)]),
  Ve: number = 1e-10,
  Ar: any = (2 as any) ** (26 as any);
function Er(this: any, t: any): any {
  const n: any = (Ir as any)(t);
  if ((n as any) == (null as any)) return [];
  const e: any = (_r as any)(((n as any).map as any)((i: any): any => (t as any)[i])),
    [s, o, r, a]: any = n;
  let c: any = (([[s, o, r], [s, o, a], [s, r, a], [o, r, a]] as any).map as any)(([i, u, l]: any): any => {
    const h: any = (sn as any)(t, [i, u, l]);
    return ((T1 as any)(h, e) as any) > (0 as any) ? (sn as any)(t, [i, l, u]) : h;
  });
  return ((t as any).forEach as any)((i: any, u: any): any => {
    if (((n as any).includes as any)(u)) return;
    const l: any = ((c as any).map as any)((d: any): any => ((T1 as any)(d, i) as any) > (Ve as any));
    if (!((l as any).includes as any)(!0)) return;
    const h: any = new (Set as any)();
    ((c as any).forEach as any)((d: any, p: any): any => {
      if (!(l as any)[p]) for (let y: any = 0; (y as any) < (3 as any); y++) ((h as any).add as any)((R1 as any)(((d as any).corners as any)[y], ((d as any).corners as any)[((y as any) + (1 as any) as any) % (3 as any)]));
    });
    const f: any = [];
    ((c as any).forEach as any)((d: any, p: any): any => {
      if (!(l as any)[p]) {
        ((f as any).push as any)(d);
        return;
      }
      for (let y: any = 0; (y as any) < (3 as any); y++) {
        const m: any = ((d as any).corners as any)[y],
          g: any = ((d as any).corners as any)[((y as any) + (1 as any) as any) % (3 as any)];
        ((h as any).has as any)((R1 as any)(g, m)) && ((f as any).push as any)((sn as any)(t, [m, g, u]));
      }
    }), c = f;
  }), ((c as any).map as any)((i: any): any => (i as any).corners);
}
function Ir(this: any, t: any): any {
  if (((t as any).length as any) < (4 as any)) return null;
  let n: any = 0;
  ((t as any).forEach as any)((a: any, c: any): any => {
    ((a as any)[0] as any) < (((t as any)[n] as any)[0] as any) && (n = c);
  });
  const e: any = (on as any)(t, (a: any): any => (An as any)((lt as any)(a, (t as any)[n]))),
    s: any = (on as any)(t, (a: any): any => (An as any)((kn as any)((lt as any)((t as any)[e], (t as any)[n]), (lt as any)(a, (t as any)[n])))),
    o: any = (kn as any)((lt as any)((t as any)[e], (t as any)[n]), (lt as any)((t as any)[s], (t as any)[n])),
    r: any = (on as any)(t, (a: any): any => ((Math as any).abs as any)((F0 as any)(o, (lt as any)(a, (t as any)[n]))));
  return (((Math as any).abs as any)((F0 as any)(o, (lt as any)((t as any)[r], (t as any)[n]))) as any) < (Ve as any) ? null : [n, e, s, r];
}
function sn(this: any, t: any, n: any): any {
  const e: any = (t as any)[(n as any)[0]],
    s: any = (kn as any)((lt as any)((t as any)[(n as any)[1]], e), (lt as any)((t as any)[(n as any)[2]], e)),
    o: any = (An as any)(s) || 1,
    r: any = [((s as any)[0] as any) / (o as any), ((s as any)[1] as any) / (o as any), ((s as any)[2] as any) / (o as any)];
  return {
    corners: n,
    normal: r,
    offset: (F0 as any)(r, e)
  };
}
function T1(this: any, t: any, n: any): any {
  return ((F0 as any)((t as any).normal, n) as any) - ((t as any).offset as any);
}
function R1(this: any, t: any, n: any): any {
  return ((t as any) * (Ar as any) as any) + (n as any);
}
function on(this: any, t: any, n: any): any {
  let e: any = 0,
    s: any = (-1 as any) / (0 as any);
  return ((t as any).forEach as any)((o: any, r: any): any => {
    const a: any = (n as any)(o);
    (a as any) > (s as any) && (s = a, e = r);
  }), e;
}
function _r(this: any, t: any): any {
  const n: any = (t as any).length;
  return [(((t as any).reduce as any)((e: any, s: any): any => (e as any) + ((s as any)[0] as any), 0) as any) / (n as any), (((t as any).reduce as any)((e: any, s: any): any => (e as any) + ((s as any)[1] as any), 0) as any) / (n as any), (((t as any).reduce as any)((e: any, s: any): any => (e as any) + ((s as any)[2] as any), 0) as any) / (n as any)];
}
function lt(this: any, t: any, n: any): any {
  return [((t as any)[0] as any) - ((n as any)[0] as any), ((t as any)[1] as any) - ((n as any)[1] as any), ((t as any)[2] as any) - ((n as any)[2] as any)];
}
function kn(this: any, t: any, n: any): any {
  return [(((t as any)[1] as any) * ((n as any)[2] as any) as any) - (((t as any)[2] as any) * ((n as any)[1] as any) as any), (((t as any)[2] as any) * ((n as any)[0] as any) as any) - (((t as any)[0] as any) * ((n as any)[2] as any) as any), (((t as any)[0] as any) * ((n as any)[1] as any) as any) - (((t as any)[1] as any) * ((n as any)[0] as any) as any)];
}
function F0(this: any, t: any, n: any): any {
  return ((((t as any)[0] as any) * ((n as any)[0] as any) as any) + (((t as any)[1] as any) * ((n as any)[1] as any) as any) as any) + (((t as any)[2] as any) * ((n as any)[2] as any) as any);
}
function An(this: any, t: any): any {
  return ((Math as any).hypot as any)((t as any)[0], (t as any)[1], (t as any)[2]);
}
const it: any = ((Math as any).PI as any) * (2 as any),
  L: any = (t: any): any => (((Math as any).round as any)((t as any) * (100 as any)) as any) / (100 as any),
  Kn: any = (t: any, n: any, e: any): any => (t as any) < (n as any) ? n : (t as any) > (e as any) ? e : t;
class kt {
  [key: string]: any;
  d: any = "";
  move(n: any, e: any): any {
    return (this as any).d += `M${(L as any)(n)} ${(L as any)(e)}`, this;
  }
  line(n: any, e: any): any {
    return (this as any).d += `L${(L as any)(n)} ${(L as any)(e)}`, this;
  }
  curve(n: any, e: any, s: any, o: any, r: any, a: any): any {
    return (this as any).d += `C${(L as any)(n)} ${(L as any)(e)} ${(L as any)(s)} ${(L as any)(o)} ${(L as any)(r)} ${(L as any)(a)}`, this;
  }
  corner(n: any, e: any, s: any, o: any): any {
    const r: any = (l: any, h: any): any => {
        const f: any = ((l as any)[0] as any) - ((h as any)[0] as any),
          d: any = ((l as any)[1] as any) - ((h as any)[1] as any),
          p: any = ((Math as any).hypot as any)(f, d) || 1;
        return [(f as any) / (p as any), (d as any) / (p as any)];
      },
      a: any = (r as any)(n, e),
      c: any = (r as any)(s, e),
      i: any = [((e as any)[0] as any) + (((a as any)[0] as any) * (o as any) as any), ((e as any)[1] as any) + (((a as any)[1] as any) * (o as any) as any)],
      u: any = [((e as any)[0] as any) + (((c as any)[0] as any) * (o as any) as any), ((e as any)[1] as any) + (((c as any)[1] as any) * (o as any) as any)];
    return (this as any).d ? ((this as any).line as any)((i as any)[0], (i as any)[1]) : ((this as any).move as any)((i as any)[0], (i as any)[1]), (this as any).d += `Q${(L as any)((e as any)[0])} ${(L as any)((e as any)[1])} ${(L as any)((u as any)[0])} ${(L as any)((u as any)[1])}`, this;
  }
  arc(n: any, e: any, s: any, o: any, r: any, a: any): any {
    const c: any = ((Math as any).max as any)(1, ((Math as any).ceil as any)((((Math as any).abs as any)((a as any) - (r as any)) as any) / (((Math as any).PI as any) / (2 as any) as any))),
      i: any = ((a as any) - (r as any) as any) / (c as any),
      u: any = ((4 as any) / (3 as any) as any) * (((Math as any).tan as any)((i as any) / (4 as any)) as any);
    let l: any = r;
    for (let h: any = 0; (h as any) < (c as any); h++) {
      const f: any = (l as any) + (i as any),
        d: any = [(n as any) + ((s as any) * (((Math as any).cos as any)(l) as any) as any), (e as any) + ((o as any) * (((Math as any).sin as any)(l) as any) as any)],
        p: any = [(n as any) + ((s as any) * (((Math as any).cos as any)(f) as any) as any), (e as any) + ((o as any) * (((Math as any).sin as any)(f) as any) as any)];
      ((this as any).curve as any)(((d as any)[0] as any) - (((u as any) * (s as any) as any) * (((Math as any).sin as any)(l) as any) as any), ((d as any)[1] as any) + (((u as any) * (o as any) as any) * (((Math as any).cos as any)(l) as any) as any), ((p as any)[0] as any) + (((u as any) * (s as any) as any) * (((Math as any).sin as any)(f) as any) as any), ((p as any)[1] as any) - (((u as any) * (o as any) as any) * (((Math as any).cos as any)(f) as any) as any), (p as any)[0], (p as any)[1]), l = f;
    }
    return this;
  }
  close(): any {
    return ((this as any).d as any) + ("Z" as any);
  }
}
const Pr: any = (t: any): any => {
    const n: any = (t as any).length;
    let e: any = `M${(L as any)(((t as any)[0] as any)[0])} ${(L as any)(((t as any)[0] as any)[1])}`;
    for (let s: any = 0; (s as any) < (n as any); s++) {
      const o: any = (t as any)[(((s as any) - (1 as any) as any) + (n as any) as any) % (n as any)],
        r: any = (t as any)[s],
        a: any = (t as any)[((s as any) + (1 as any) as any) % (n as any)],
        c: any = (t as any)[((s as any) + (2 as any) as any) % (n as any)];
      e += `C${(L as any)(((r as any)[0] as any) + ((((a as any)[0] as any) - ((o as any)[0] as any) as any) / (6 as any) as any))} ${(L as any)(((r as any)[1] as any) + ((((a as any)[1] as any) - ((o as any)[1] as any) as any) / (6 as any) as any))} ${(L as any)(((a as any)[0] as any) - ((((c as any)[0] as any) - ((r as any)[0] as any) as any) / (6 as any) as any))} ${(L as any)(((a as any)[1] as any) - ((((c as any)[1] as any) - ((r as any)[1] as any) as any) / (6 as any) as any))} ${(L as any)((a as any)[0])} ${(L as any)((a as any)[1])}`;
    }
    return (e as any) + ("Z" as any);
  },
  Ht: any = (t: any, n: any = 128): any => {
    const e: any = [];
    for (let s: any = 0; (s as any) < (n as any); s++) ((e as any).push as any)((t as any)(((s as any) / (n as any) as any) * (it as any)));
    return (Pr as any)(e);
  },
  Un: any = (t: any, n: any): any => {
    const e: any = new (kt as any)(),
      s: any = (t as any).length;
    for (let o: any = 0; (o as any) < (s as any); o++) {
      const r: any = (typeof n as any) == ("number" as any) ? n : (n as any)[(o as any) % ((n as any).length as any)];
      ((e as any).corner as any)((t as any)[(((o as any) - (1 as any) as any) + (s as any) as any) % (s as any)], (t as any)[o], (t as any)[((o as any) + (1 as any) as any) % (s as any)], r);
    }
    return ((e as any).close as any)();
  },
  Qe: any = (t: any, n: any, e: any, s: any = 0): any => (Un as any)(((Array as any).from as any)({
    length: n
  }, (o: any, r: any): any => {
    const a: any = (s as any) + (((r as any) / (n as any) as any) * (it as any) as any);
    return [(M as any) + ((((Math as any).cos as any)(a) as any) * (t as any) as any), (M as any) + ((((Math as any).sin as any)(a) as any) * (t as any) as any)];
  }), e),
  We: any = (t: any, n: any = 160): any => (Ht as any)((e: any): any => {
    const s: any = ((Math as any).cos as any)(e),
      o: any = ((Math as any).sin as any)(e);
    let r: any = 0;
    for (const [a, c, i] of t) {
      const u: any = (a as any) - (M as any),
        l: any = (c as any) - (M as any),
        h: any = ((s as any) * (u as any) as any) + ((o as any) * (l as any) as any),
        f: any = (((h as any) * (h as any) as any) - (((u as any) * (u as any) as any) + ((l as any) * (l as any) as any) as any) as any) + ((i as any) * (i as any) as any);
      if ((f as any) <= (0 as any)) continue;
      const d: any = (h as any) + (((Math as any).sqrt as any)(f) as any);
      (d as any) > (r as any) && (r = d);
    }
    return [(M as any) + ((s as any) * (r as any) as any), (M as any) + ((o as any) * (r as any) as any)];
  }, n),
  F1: any = (t: any, n: any, e: any): any => (Ht as any)((s: any): any => {
    const o: any = ((Math as any).cos as any)(s),
      r: any = ((Math as any).sin as any)(s);
    return [(M as any) + (((((Math as any).sign as any)(o) as any) * (((Math as any).pow as any)(((Math as any).abs as any)(o), (2 as any) / (e as any)) as any) as any) * (t as any) as any), (M as any) + (((((Math as any).sign as any)(r) as any) * (((Math as any).pow as any)(((Math as any).abs as any)(r), (2 as any) / (e as any)) as any) as any) * (n as any) as any)];
  }),
  Sr: any = (t: any, n: any): any => ((((((((((((new (kt as any)() as any).move as any)(((M as any) - (t as any) as any) + (n as any), (M as any) - (n as any)) as any).line as any)(((M as any) + (t as any) as any) - (n as any), (M as any) - (n as any)) as any).arc as any)(((M as any) + (t as any) as any) - (n as any), M, n, n, (-(Math as any).PI as any) / (2 as any), ((Math as any).PI as any) / (2 as any)) as any).line as any)(((M as any) - (t as any) as any) + (n as any), (M as any) + (n as any)) as any).arc as any)(((M as any) - (t as any) as any) + (n as any), M, n, n, ((Math as any).PI as any) / (2 as any), (((Math as any).PI as any) * (3 as any) as any) / (2 as any)) as any).close as any)(),
  Cr: any = (t: any, n: any): any => ((((((((((((new (kt as any)() as any).move as any)((M as any) - (t as any), ((M as any) + (n as any) as any) - (t as any)) as any).line as any)((M as any) - (t as any), ((M as any) - (n as any) as any) + (t as any)) as any).arc as any)(M, ((M as any) - (n as any) as any) + (t as any), t, t, (Math as any).PI, it) as any).line as any)((M as any) + (t as any), ((M as any) + (n as any) as any) - (t as any)) as any).arc as any)(M, ((M as any) + (n as any) as any) - (t as any), t, t, 0, (Math as any).PI) as any).close as any)(),
  $r: any = (t: any, n: any, e: any): any => ((((((((((new (kt as any)() as any).move as any)((M as any) - (t as any), ((M as any) - (n as any) as any) + (e as any)) as any).arc as any)(M, ((M as any) - (n as any) as any) + (e as any), t, e, (Math as any).PI, it) as any).line as any)((M as any) + (t as any), ((M as any) + (n as any) as any) - (e as any)) as any).arc as any)(M, ((M as any) + (n as any) as any) - (e as any), t, e, 0, (Math as any).PI) as any).close as any)(),
  Tr: any = (t: any, n: any, e: any): any => {
    const s: any = (M as any) + (n as any);
    return ((((((((((((((new (kt as any)() as any).move as any)((M as any) - (t as any), (s as any) - (e as any)) as any).arc as any)(M, (s as any) - (e as any), t, ((2 as any) * (n as any) as any) - (e as any), (Math as any).PI, it) as any).line as any)((M as any) + (t as any), (s as any) - (e as any)) as any).curve as any)((M as any) + (t as any), s, (M as any) + (t as any), s, ((M as any) + (t as any) as any) - (e as any), s) as any).line as any)(((M as any) - (t as any) as any) + (e as any), s) as any).curve as any)((M as any) - (t as any), s, (M as any) - (t as any), s, (M as any) - (t as any), (s as any) - (e as any)) as any).close as any)();
  },
  Rr: any = (t: any, n: any, e: any): any => {
    const s: any = (M as any) + (n as any),
      o: any = ((M as any) - (n as any) as any) + (t as any);
    return ((((((((((((((new (kt as any)() as any).move as any)((M as any) - (t as any), o) as any).arc as any)(M, o, t, t, (Math as any).PI, it) as any).line as any)((M as any) + (t as any), (s as any) - (e as any)) as any).curve as any)((M as any) + (t as any), s, (M as any) + (t as any), s, ((M as any) + (t as any) as any) - (e as any), s) as any).line as any)(((M as any) - (t as any) as any) + (e as any), s) as any).curve as any)((M as any) - (t as any), s, (M as any) - (t as any), s, (M as any) - (t as any), (s as any) - (e as any)) as any).close as any)();
  },
  Fr: any = (t: any, n: any, e: any): any => {
    const s: any = (M as any) - (n as any),
      o: any = (M as any) + (n as any);
    return ((((((((((((new (kt as any)() as any).move as any)((M as any) - (t as any), (s as any) + (e as any)) as any).curve as any)((M as any) - (t as any), (s as any) - (2 as any), (M as any) - ((t as any) * (.5 as any) as any), (s as any) - (10 as any), M, (s as any) - (10 as any)) as any).curve as any)((M as any) + ((t as any) * (.5 as any) as any), (s as any) - (10 as any), (M as any) + (t as any), (s as any) - (2 as any), (M as any) + (t as any), (s as any) + (e as any)) as any).curve as any)((M as any) + (t as any), (M as any) + ((n as any) * (.42 as any) as any), (M as any) + ((t as any) * (.62 as any) as any), o, M, o) as any).curve as any)((M as any) - ((t as any) * (.62 as any) as any), o, (M as any) - (t as any), (M as any) + ((n as any) * (.42 as any) as any), (M as any) - (t as any), (s as any) + (e as any)) as any).close as any)();
  },
  Or: any = (t: any, n: any, e: any): any => (Ht as any)((s: any): any => {
    const o: any = ((Math as any).cos as any)(s),
      r: any = ((Math as any).sin as any)(s),
      a: any = ((1 as any) - (r as any) as any) / (2 as any);
    return [(M as any) + (((o as any) * (t as any) as any) * ((1 as any) - (((e as any) * (a as any) as any) * (a as any) as any) as any) as any), (M as any) + ((r as any) * (n as any) as any)];
  }),
  Lr: any = (t: any, n: any, e: any, s: any): any => {
    const o: any = (Kn as any)((t as any) / ((e as any) - (n as any) as any), -1, 1),
      r: any = ((Math as any).sqrt as any)((1 as any) - ((o as any) * (o as any) as any)),
      a: any = [(M as any) + ((t as any) * (r as any) as any), (e as any) - ((t as any) * (o as any) as any)],
      c: any = [(M as any) - ((t as any) * (r as any) as any), (e as any) - ((t as any) * (o as any) as any)],
      i: any = ((Math as any).atan2 as any)(((a as any)[1] as any) - (e as any), ((a as any)[0] as any) - (M as any));
    return ((((((((new (kt as any)() as any).corner as any)(a, [M, n], c, s) as any).line as any)((c as any)[0], (c as any)[1]) as any).arc as any)(M, e, t, t, ((Math as any).PI as any) - (i as any), i) as any).close as any)();
  },
  Br: any = (t: any, n: any): any => (Un as any)([[(M as any) - (t as any), (M as any) - (t as any)], [(M as any) + (t as any), (M as any) - (t as any)], [(M as any) + (t as any), (M as any) + (t as any)], [(M as any) - (t as any), (M as any) + (t as any)]], n),
  Nr: any = (t: any, n: any, e: any, s: any): any => (Un as any)([[(M as any) - (t as any), (M as any) + (n as any)], [(M as any) + (t as any), (M as any) + (n as any)], [(M as any) + (t as any), ((M as any) - (n as any) as any) + (e as any)], [M, (M as any) - (n as any)], [(M as any) - (t as any), ((M as any) - (n as any) as any) + (e as any)]], s),
  Dr: string = "M79.4511 11.5693C94.8767 -3.85636 119.887 -3.85622 135.312 11.5693C150.738 26.995 150.738 52.0049 135.312 67.4306L129.302 73.4404L129.303 73.4414L83.7724 118.972C81.8111 120.933 79.4309 122.22 76.9199 122.833C76.463 122.944 76.0018 123.034 75.538 123.101C74.1477 123.301 72.734 123.301 71.3437 123.101C70.8802 123.034 70.4194 122.944 69.9628 122.833C69.8486 122.805 69.7347 122.776 69.621 122.745C69.3938 122.684 69.1679 122.616 68.9433 122.544C67.4837 122.073 66.0831 121.367 64.8017 120.426C64.6047 120.281 64.4108 120.13 64.2197 119.975C63.837 119.662 63.466 119.328 63.1093 118.972L11.5693 67.4306C-3.85643 52.0049 -3.85642 26.995 11.5693 11.5693C26.995 -3.85643 52.0049 -3.85643 67.4306 11.5693L73.4404 17.579L79.4511 11.5693Z",
  qr: string = "M58.9438 9.25323C63.2492 -3.08441 80.6974 -3.08441 85.0027 9.25322L91.7612 28.6207C94.0136 35.0751 100.652 38.9078 107.368 37.6311L127.52 33.8004C140.357 31.3602 149.081 46.4708 140.549 56.3681L127.156 71.9049C122.692 77.0827 122.692 84.748 127.156 89.9258L140.549 105.463C149.081 115.36 140.357 130.471 127.52 128.03L107.368 124.2C100.652 122.923 94.0136 126.756 91.7612 133.21L85.0027 152.577C80.6974 164.915 63.2492 164.915 58.9438 152.577L52.1853 133.21C49.933 126.756 43.2946 122.923 36.5788 124.2L16.4268 128.03C3.58942 130.471 -5.1347 115.36 3.39733 105.463L16.7908 89.9258C21.2543 84.748 21.2543 77.0827 16.7908 71.9049L3.39734 56.3681C-5.13469 46.4708 3.58941 31.3602 16.4268 33.8004L36.5787 37.6311C43.2946 38.9078 49.933 35.0751 52.1853 28.6207L58.9438 9.25323Z",
  zr: string = "M93.9365 0.100586C98.4439 -0.387322 102.691 0.897134 106.341 4.03418C111.502 8.47087 114.842 16.0545 116.636 25.2725C118.36 34.1341 118.716 44.8177 117.701 56.4346L117.707 56.4375L117.706 56.4443C122.25 58.5638 126.519 60.8171 130.449 63.168C130.485 63.1891 130.52 63.2103 130.556 63.2314C131.25 63.6478 131.934 64.067 132.607 64.4893C132.68 64.5349 132.753 64.5813 132.825 64.627C133.074 64.7838 133.322 64.941 133.567 65.0986C133.692 65.1787 133.816 65.2596 133.94 65.3398C134.138 65.4676 134.335 65.5954 134.53 65.7236C134.653 65.8039 134.775 65.8844 134.896 65.9648C135.112 66.1073 135.325 66.2506 135.538 66.3936C135.625 66.4522 135.713 66.5106 135.8 66.5693C138.866 68.645 141.667 70.7792 144.163 72.9502C149.754 77.8126 153.981 83.0002 156.136 88.2578C156.159 88.3133 156.181 88.3693 156.203 88.4248C156.268 88.5868 156.332 88.749 156.393 88.9111C156.435 89.0226 156.475 89.1346 156.516 89.2461C156.541 89.3175 156.566 89.3895 156.591 89.4609C157.443 91.8917 157.839 94.3199 157.696 96.7109C157.522 99.7997 156.469 102.655 154.613 105.192C154.236 105.709 153.826 106.208 153.388 106.692C153.365 106.717 153.343 106.742 153.32 106.767C153.171 106.93 153.019 107.091 152.863 107.25C152.844 107.27 152.824 107.29 152.804 107.311C152.3 107.822 151.762 108.316 151.191 108.79C151.168 108.81 151.144 108.83 151.12 108.85C150.952 108.988 150.781 109.125 150.607 109.261C150.558 109.299 150.509 109.337 150.46 109.375C150.282 109.512 150.101 109.648 149.917 109.781C149.903 109.792 149.888 109.801 149.874 109.812C149.255 110.26 148.605 110.689 147.926 111.1C147.795 111.179 147.662 111.256 147.528 111.334C147.41 111.403 147.292 111.473 147.173 111.541C146.915 111.687 146.653 111.832 146.388 111.974C146.316 112.012 146.243 112.047 146.171 112.085C145.978 112.186 145.783 112.287 145.586 112.386C145.459 112.449 145.331 112.511 145.203 112.573C145.048 112.649 144.891 112.723 144.733 112.797C144.614 112.853 144.494 112.909 144.373 112.964C144.198 113.044 144.021 113.122 143.843 113.2C143.722 113.253 143.6 113.306 143.478 113.358C143.288 113.439 143.096 113.519 142.903 113.598C142.836 113.625 142.769 113.655 142.701 113.683C142.662 113.698 142.622 113.712 142.583 113.728C142.371 113.812 142.156 113.895 141.94 113.978C141.847 114.013 141.753 114.051 141.658 114.086C140.71 114.441 139.731 114.771 138.725 115.078C138.613 115.112 138.502 115.145 138.39 115.179C138.257 115.218 138.123 115.26 137.989 115.299C137.911 115.322 137.831 115.343 137.752 115.365C137.61 115.406 137.467 115.446 137.324 115.485C137.095 115.549 136.863 115.611 136.63 115.672C136.52 115.701 136.41 115.73 136.3 115.759C136.064 115.819 135.827 115.879 135.588 115.938C135.451 115.971 135.314 116.004 135.177 116.037C134.975 116.085 134.772 116.131 134.568 116.178C134.312 116.236 134.054 116.294 133.795 116.35C133.535 116.406 133.274 116.461 133.011 116.515C132.85 116.547 132.688 116.578 132.525 116.61C132.333 116.648 132.14 116.686 131.946 116.723C131.689 116.771 131.43 116.818 131.17 116.864C131.075 116.881 130.979 116.898 130.884 116.914C130.595 116.964 130.304 117.012 130.012 117.06C129.932 117.073 129.851 117.085 129.771 117.098C129.484 117.143 129.196 117.188 128.906 117.23C128.818 117.243 128.729 117.256 128.641 117.269C127.33 117.457 125.983 117.62 124.601 117.755C124.468 117.768 124.336 117.782 124.203 117.794C123.92 117.82 123.636 117.845 123.351 117.869C123.24 117.878 123.13 117.888 123.02 117.897C122.701 117.923 122.381 117.948 122.059 117.971C121.967 117.977 121.874 117.984 121.782 117.99C121.463 118.012 121.143 118.033 120.82 118.053C120.73 118.058 120.639 118.063 120.549 118.068C119.546 118.126 118.527 118.171 117.492 118.202C117.322 118.207 117.151 118.213 116.979 118.218C116.785 118.223 116.59 118.225 116.395 118.229C116.147 118.235 115.899 118.24 115.65 118.244C115.415 118.248 115.178 118.25 114.94 118.252C114.688 118.254 114.435 118.256 114.181 118.257C114.008 118.257 113.835 118.257 113.662 118.257C113.32 118.256 112.976 118.255 112.631 118.252C112.503 118.251 112.375 118.25 112.247 118.248C111.858 118.243 111.466 118.237 111.073 118.229C110.984 118.227 110.894 118.226 110.804 118.224C107.734 118.154 104.558 117.977 101.289 117.69C96.3593 128.261 90.7082 137.338 84.7832 144.151C78.6204 151.238 71.9357 156.137 65.2471 157.399C60.5179 158.292 56.1975 157.281 52.5381 154.604C48.9431 151.975 46.1246 147.845 44.0479 142.691C40.0321 132.725 38.5457 118.333 40.043 101.281C40.0382 101.279 40.0331 101.277 40.0283 101.274C39.6986 101.121 39.3711 100.965 39.0449 100.811C38.8351 100.711 38.6254 100.612 38.417 100.512C38.0794 100.35 37.7438 100.186 37.4102 100.023C37.2392 99.9399 37.0684 99.8563 36.8984 99.7725C36.5886 99.6196 36.2801 99.4663 35.9736 99.3125C35.7564 99.2034 35.5398 99.0939 35.3242 98.9844C34.9817 98.8104 34.6409 98.636 34.3027 98.4609C34.2424 98.4297 34.1823 98.3975 34.1221 98.3662C19.2858 90.6566 8.70839 81.8767 3.56055 73.3232C3.50461 73.2303 3.44926 73.137 3.39453 73.0439C3.37308 73.0075 3.35134 72.971 3.33008 72.9346C3.19352 72.7003 3.06142 72.4652 2.93262 72.2305C2.19429 70.8865 1.58552 69.5375 1.11816 68.1895C1.10444 68.1499 1.09161 68.1099 1.07813 68.0703C1.04009 67.9586 1.00191 67.847 0.96582 67.7354C0.954674 67.7009 0.943578 67.6663 0.932617 67.6318C0.823298 67.2877 0.723275 66.9435 0.632813 66.5996C-0.103732 63.8123 -0.218301 61.0433 0.402344 58.3643C1.34437 54.2986 3.89972 50.7745 7.875 47.9023C7.90661 47.8794 7.93796 47.8559 7.96973 47.833C8.12646 47.7208 8.2852 47.6092 8.44629 47.499C8.57825 47.4084 8.71216 47.3194 8.84668 47.2305C8.87052 47.2148 8.89404 47.1983 8.91797 47.1826C10.608 46.0723 12.497 45.0908 14.5547 44.2324C14.6355 44.1986 14.7165 44.1643 14.7979 44.1309C14.8508 44.1092 14.9038 44.087 14.957 44.0654L15.25 43.9482C15.3501 43.9084 15.4509 43.8694 15.5518 43.8301C15.6093 43.8078 15.6668 43.7848 15.7246 43.7627C23.7646 40.6682 34.1765 39.3165 45.6846 39.4756C45.8574 39.4779 46.0307 39.4814 46.2041 39.4844C46.4305 39.4884 46.6576 39.4909 46.8848 39.4961C47.3568 39.5065 47.8313 39.5207 48.3076 39.5361C48.4142 39.5397 48.5212 39.5441 48.6279 39.5479C51.1795 39.6366 53.791 39.7967 56.4512 40.0293C63.6811 24.5137 72.1655 12.7934 80.627 6.1709C85.0025 2.74635 89.5085 0.57999 93.9365 0.100586Z",
  Gr: any = (t: any, n: any): any => (We as any)([[(M as any) - (t as any), (M as any) - (t as any), n], [(M as any) + (t as any), (M as any) - (t as any), n], [(M as any) + (t as any), (M as any) + (t as any), n], [(M as any) - (t as any), (M as any) + (t as any), n]]),
  Yr: any = (t: any, n: any, e: any): any => (Ht as any)((s: any): any => {
    const o: any = ((Math as any).cos as any)(s),
      r: any = ((Math as any).sin as any)(s);
    return [(M as any) + ((((o as any) * (t as any) as any) * (((Math as any).pow as any)(((Math as any).max as any)((1 as any) - ((r as any) * (r as any) as any), 0), ((e as any) / (2 as any) as any) - (.5 as any)) as any) as any) * (1 as any) as any), (M as any) + ((r as any) * (n as any) as any)];
  }),
  Hr: any = (t: any, n: any, e: any, s: any): any => (Ht as any)((o: any): any => {
    const r: any = (c: any): any => {
        const i: any = ((Math as any).abs as any)(((((((o as any) - (c as any) as any) + ((Math as any).PI as any) as any) % (it as any) as any) + (it as any) as any) % (it as any) as any) - ((Math as any).PI as any));
        return ((Math as any).exp as any)((-((i as any) * (i as any)) as any) / (.4232 as any));
      },
      a: any = ((1 as any) - ((e as any) * ((r as any)(s) as any) as any) as any) + (((e as any) * (.34 as any) as any) * ((r as any)((s as any) + ((Math as any).PI as any)) as any) as any);
    return [(M as any) + (((((Math as any).cos as any)(o) as any) * (t as any) as any) * (a as any) as any), (M as any) + (((((Math as any).sin as any)(o) as any) * (n as any) as any) * (a as any) as any)];
  }),
  Kr: any = (t: any, n: any, e: any): any => (Ht as any)((s: any): any => {
    const o: any = (t as any) * ((1 as any) + ((n as any) * (((((Math as any).sin as any)(((s as any) * (2 as any) as any) + (e as any)) as any) * (.6 as any) as any) + ((((Math as any).sin as any)(((s as any) * (3 as any) as any) - (e as any)) as any) * (.4 as any) as any) as any) as any) as any);
    return [(M as any) + ((((Math as any).cos as any)(s) as any) * (o as any) as any), (M as any) + (((((Math as any).sin as any)(s) as any) * (o as any) as any) * (.98 as any) as any)];
  }),
  O0: any = (t: any, n: any = 4): any => {
    const e: any = ((t as any).match as any)(/[MLCQZmlcqz]|-?\d*\.?\d+(?:e[-+]?\d+)?/g) ?? [],
      s: any = [];
    let o: any = 0,
      r: any = "",
      a: any = 0,
      c: any = 0,
      i: any = 0,
      u: any = 0;
    const l: any = (): any => (parseFloat as any)((e as any)[o++]),
      h: any = (f: any, d: any): any => {
        const p: any = ((Math as any).max as any)(2, ((Math as any).ceil as any)((d as any) / (n as any)));
        for (let y: any = 1; (y as any) <= (p as any); y++) ((s as any).push as any)((f as any)((y as any) / (p as any)));
      };
    for (; (o as any) < ((e as any).length as any);) {
      if (((/[a-z]/i as any).test as any)((e as any)[o]) && (r = (((e as any)[o++] as any).toUpperCase as any)()), (r as any) === ("Z" as any)) {
        (((Math as any).hypot as any)((i as any) - (a as any), (u as any) - (c as any)) as any) > (.01 as any) && (h as any)((f: any): any => [(a as any) + (((i as any) - (a as any) as any) * (f as any) as any), (c as any) + (((u as any) - (c as any) as any) * (f as any) as any)], ((Math as any).hypot as any)((i as any) - (a as any), (u as any) - (c as any))), a = i, c = u;
        continue;
      }
      if ((o as any) >= ((e as any).length as any)) break;
      if ((r as any) === ("M" as any)) a = (l as any)(), c = (l as any)(), i = a, u = c, ((s as any).push as any)([a, c]), r = "L";else if ((r as any) === ("L" as any)) {
        const f: any = (l as any)(),
          d: any = (l as any)();
        (h as any)((p: any): any => [(a as any) + (((f as any) - (a as any) as any) * (p as any) as any), (c as any) + (((d as any) - (c as any) as any) * (p as any) as any)], ((Math as any).hypot as any)((f as any) - (a as any), (d as any) - (c as any))), a = f, c = d;
      } else if ((r as any) === ("Q" as any)) {
        const f: any = (l as any)(),
          d: any = (l as any)(),
          p: any = (l as any)(),
          y: any = (l as any)(),
          m: any = a,
          g: any = c;
        (h as any)((x: any): any => {
          const w: any = (1 as any) - (x as any);
          return [((((w as any) * (w as any) as any) * (m as any) as any) + ((((2 as any) * (w as any) as any) * (x as any) as any) * (f as any) as any) as any) + (((x as any) * (x as any) as any) * (p as any) as any), ((((w as any) * (w as any) as any) * (g as any) as any) + ((((2 as any) * (w as any) as any) * (x as any) as any) * (d as any) as any) as any) + (((x as any) * (x as any) as any) * (y as any) as any)];
        }, (((Math as any).hypot as any)((f as any) - (a as any), (d as any) - (c as any)) as any) + (((Math as any).hypot as any)((p as any) - (f as any), (y as any) - (d as any)) as any)), a = p, c = y;
      } else {
        const f: any = (l as any)(),
          d: any = (l as any)(),
          p: any = (l as any)(),
          y: any = (l as any)(),
          m: any = (l as any)(),
          g: any = (l as any)(),
          x: any = a,
          w: any = c;
        (h as any)((v: any): any => {
          const b: any = (1 as any) - (v as any);
          return [((((((b as any) * (b as any) as any) * (b as any) as any) * (x as any) as any) + (((((3 as any) * (b as any) as any) * (b as any) as any) * (v as any) as any) * (f as any) as any) as any) + (((((3 as any) * (b as any) as any) * (v as any) as any) * (v as any) as any) * (p as any) as any) as any) + ((((v as any) * (v as any) as any) * (v as any) as any) * (m as any) as any), ((((((b as any) * (b as any) as any) * (b as any) as any) * (w as any) as any) + (((((3 as any) * (b as any) as any) * (b as any) as any) * (v as any) as any) * (d as any) as any) as any) + (((((3 as any) * (b as any) as any) * (v as any) as any) * (v as any) as any) * (y as any) as any) as any) + ((((v as any) * (v as any) as any) * (v as any) as any) * (g as any) as any)];
        }, ((((Math as any).hypot as any)((f as any) - (a as any), (d as any) - (c as any)) as any) + (((Math as any).hypot as any)((p as any) - (f as any), (y as any) - (d as any)) as any) as any) + (((Math as any).hypot as any)((m as any) - (p as any), (g as any) - (y as any)) as any)), a = m, c = g;
      }
    }
    return s;
  },
  Ur: any = (t: any, n: any = 160): any => {
    let e: any = (1 as any) / (0 as any),
      s: any = (-1 as any) / (0 as any);
    for (const h of t) ((h as any)[1] as any) < (e as any) && (e = (h as any)[1]), ((h as any)[1] as any) > (s as any) && (s = (h as any)[1]);
    const o: any = (s as any) - (e as any),
      r: any = (h: any): any => (e as any) + (((o as any) * ((h as any) + (.5 as any) as any) as any) / (n as any) as any),
      a: any = new (Float64Array as any)(n),
      c: any = new (Float64Array as any)(n),
      i: any = new (Float64Array as any)(n),
      u: any = new (Float64Array as any)(n);
    for (let h: any = 0; (h as any) < (n as any); h++) {
      const f: any = (r as any)(h);
      let d: any = (-1 as any) / (0 as any),
        p: any = (1 as any) / (0 as any),
        y: any = (1 as any) / (0 as any),
        m: any = (-1 as any) / (0 as any);
      for (let g: any = 0; (g as any) < ((t as any).length as any); g++) {
        const x: any = (t as any)[g],
          w: any = (t as any)[((g as any) + (1 as any) as any) % ((t as any).length as any)];
        if ((((x as any)[1] as any) <= (f as any) as any) == (((w as any)[1] as any) <= (f as any) as any)) continue;
        const v: any = ((x as any)[0] as any) + (((((w as any)[0] as any) - ((x as any)[0] as any) as any) * ((f as any) - ((x as any)[1] as any) as any) as any) / (((w as any)[1] as any) - ((x as any)[1] as any) as any) as any);
        (v as any) <= (M as any) ? (v as any) > (d as any) && (d = v) : (v as any) < (p as any) && (p = v), (v as any) < (y as any) && (y = v), (v as any) > (m as any) && (m = v);
      }
      (a as any)[h] = ((Number as any).isFinite as any)(d) ? d : M, (c as any)[h] = ((Number as any).isFinite as any)(p) ? p : M, (i as any)[h] = ((Number as any).isFinite as any)(y) ? y : M, (u as any)[h] = ((Number as any).isFinite as any)(m) ? m : M;
    }
    const l: any = (h: any, f: any): any => (d: any): any => {
      const p: any = (Kn as any)(((((d as any) - (e as any) as any) / (o as any) as any) * (n as any) as any) - (.5 as any), 0, (n as any) - (1 as any)),
        y: any = ((Math as any).floor as any)(p),
        m: any = (p as any) - (y as any),
        g: any = ((Math as any).min as any)((y as any) + (1 as any), (n as any) - (1 as any));
      return [((h as any)[y] as any) + ((((h as any)[g] as any) - ((h as any)[y] as any) as any) * (m as any) as any), ((f as any)[y] as any) + ((((f as any)[g] as any) - ((f as any)[y] as any) as any) * (m as any) as any)];
    };
    return {
      top: e,
      bottom: s,
      spanAt: (l as any)(a, c),
      outerAt: (l as any)(i, u)
    };
  },
  O1: number = 96,
  jr: any = (t: any): any => ((Array as any).from as any)({
    length: O1
  }, (n: any, e: any): any => {
    const s: any = ((e as any) / (O1 as any) as any) * (it as any),
      o: any = ((Math as any).cos as any)(s),
      r: any = ((Math as any).sin as any)(s);
    let a: any = 0;
    for (let c: any = 0; (c as any) < ((t as any).length as any); c++) {
      const i: any = (t as any)[c],
        u: any = (t as any)[((c as any) + (1 as any) as any) % ((t as any).length as any)],
        l: any = ((i as any)[0] as any) - (M as any),
        h: any = ((i as any)[1] as any) - (M as any),
        f: any = ((u as any)[0] as any) - (M as any),
        d: any = ((u as any)[1] as any) - (M as any),
        p: any = (((f as any) - (l as any) as any) * (r as any) as any) - (((d as any) - (h as any) as any) * (o as any) as any);
      if ((((Math as any).abs as any)(p) as any) < (1e-9 as any)) continue;
      const y: any = (((l as any) * (r as any) as any) - ((h as any) * (o as any) as any) as any) / (-p as any);
      if ((y as any) < (0 as any) || (y as any) > (1 as any)) continue;
      const m: any = (((l as any) + (((f as any) - (l as any) as any) * (y as any) as any) as any) * (o as any) as any) + (((h as any) + (((d as any) - (h as any) as any) * (y as any) as any) as any) * (r as any) as any);
      (m as any) > (a as any) && (a = m);
    }
    return [(M as any) + ((o as any) * (a as any) as any), (M as any) + ((r as any) * (a as any) as any)];
  }),
  Xr: any = (t: any, n: any, e: any, s: any): any => {
    let o: any = 0;
    return ((t as any).replace as any)(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi, (r: any): any => {
      o ^= 1;
      const a: any = ((parseFloat as any)(r) as any) + ((o ? e : s) as any);
      return (String as any)((L as any)((M as any) + (((a as any) - (M as any) as any) * (n as any) as any)));
    });
  },
  Zr: number = 228.44,
  Vr: any = (t: any): any => {
    let n: any = (1 as any) / (0 as any),
      e: any = (-1 as any) / (0 as any),
      s: any = (1 as any) / (0 as any),
      o: any = (-1 as any) / (0 as any);
    for (const i of t) ((i as any)[0] as any) < (n as any) && (n = (i as any)[0]), ((i as any)[0] as any) > (e as any) && (e = (i as any)[0]), ((i as any)[1] as any) < (s as any) && (s = (i as any)[1]), ((i as any)[1] as any) > (o as any) && (o = (i as any)[1]);
    const r: any = (M as any) - (((n as any) + (e as any) as any) / (2 as any) as any),
      a: any = (M as any) - (((s as any) + (o as any) as any) / (2 as any) as any);
    return {
      k: (Kn as any)((Zr as any) / (((Math as any).max as any)((e as any) - (n as any), (o as any) - (s as any)) as any), .9, 1.35),
      dx: r,
      dy: a
    };
  },
  Qr: any = (t: any, n: any): any => {
    const {
      k: e,
      dx: s,
      dy: o
    }: any = (Vr as any)(n);
    return (((Math as any).abs as any)((e as any) - (1 as any)) as any) < (.005 as any) && (((Math as any).abs as any)(s) as any) < (.5 as any) && (((Math as any).abs as any)(o) as any) < (.5 as any) ? t : (Xr as any)(t, e, s, o);
  },
  jn: any = (t: any): any => {
    const n: any = (Qr as any)(t, (O0 as any)(t)),
      e: any = (O0 as any)(n),
      {
        top: s,
        bottom: o,
        spanAt: r,
        outerAt: a
      }: any = (Ur as any)(e);
    let c: any = 0;
    for (let i: any = s; (i as any) <= (o as any); i += 2) {
      const [u, l]: any = (a as any)(i);
      c = ((Math as any).max as any)(c, ((l as any) - (u as any) as any) / (2 as any));
    }
    return {
      path: n,
      ring: (jr as any)(e),
      top: (L as any)(s),
      bottom: (L as any)(o),
      spanAt: r,
      beltRadius: (L as any)(c)
    };
  },
  Wr: any = {
    pebble: (): any => (Kr as any)(108, .075, 1.1),
    bean: (): any => (Hr as any)(94, 112, .34, (Math as any).PI),
    egg: (): any => (Or as any)(98, 113, .22),
    squircle: (): any => (F1 as any)(107, 107, 3.2),
    square: (): any => (Br as any)(107, 28),
    tablet: (): any => (Sr as any)(114, 74),
    capsule: (): any => (Cr as any)(72, 113),
    cylinder: (): any => ($r as any)(94, 110, 48),
    hex: (): any => (Qe as any)(114, 6, 20, ((Math as any).PI as any) / (6 as any)),
    gem: (): any => (F1 as any)(112, 113, 1.5),
    shield: (): any => (Fr as any)(98, 108, 30),
    dome: (): any => (Tr as any)(114, 82, 26),
    arch: (): any => (Rr as any)(76, 113, 42),
    cloud: (): any => (We as any)([[(M as any) - (62 as any), (M as any) + (26 as any), 56], [(M as any) + (62 as any), (M as any) + (26 as any), 54], [M, (M as any) + (34 as any), 62], [(M as any) - (24 as any), (M as any) - (30 as any), 62], [(M as any) + (38 as any), (M as any) - (26 as any), 54]]),
    leaf: (): any => (Yr as any)(88, 113, 1.5),
    clover: (): any => (Gr as any)(38, 58),
    house: (): any => (Nr as any)(100, 110, 78, 29),
    heart: (): any => Dr,
    sparkle: (): any => zr,
    star6: (): any => qr
  },
  L1: any = new (Map as any)();
function i0(this: any, t: any): any {
  const n: any = ((L1 as any).get as any)(t);
  if ((n as any) != (null as any)) return n;
  const e: any = (jn as any)(((Wr as any)[t] as any)());
  return ((L1 as any).set as any)(t, e), e;
}
const Q: any = (t: any, n: any = 4): any => (O0 as any)(((i0 as any)(t) as any).path, n),
  B1: any = (t: any): any => (O0 as any)(t),
  Je: any = (t: any, n: any): any => (jn as any)((Lr as any)(t, (M as any) - (114 as any), (M as any) + (26 as any), n)),
  Jr: any = (t: any, n: any): any => (jn as any)((Qe as any)(130, 3, [n, t, t], (-(Math as any).PI as any) / (2 as any))),
  Gt: any = ((Math as any).PI as any) * (2 as any),
  ta: number = .36,
  na: number = .22,
  n0: number = 4,
  N1: number = 96,
  D1: number = 64,
  q1: number = 33,
  ea: number = 40,
  ts: number = .72,
  z1: number = 16,
  G1: number = 160,
  Tt: number = 180,
  rn: number = 64,
  d0: number = 1e-5,
  sa: any = {
    pebble: (): any => (Rt as any)(1.2167999999999999, "pebble"),
    bean: (): any => {
      const t: any = (la as any)("bean");
      return {
        size: 1.17,
        silhouette: {
          kind: "solid",
          samples: [],
          balls: t,
          isLoop: !1
        },
        seat: (es as any)("bean", t)
      };
    },
    egg: (): any => (Rt as any)(1.17, "egg"),
    squircle: (): any => ({
      size: 1.17,
      silhouette: (qt as any)((aa as any)("squircle", .28, .11)),
      seat: {
        kind: "front",
        faceZ: .28
      }
    }),
    tablet: (): any => {
      const {
          x0: t,
          x1: n,
          y0: e,
          y1: s
        }: any = (En as any)("tablet"),
        o: any = (((n as any) - (t as any) as any) / (2 as any) as any) / (M as any),
        r: any = (((s as any) - (e as any) as any) / (2 as any) as any) / (M as any),
        a: any = ((Math as any).max as any)(0, (o as any) - (r as any));
      return {
        size: 1.3922999999999999,
        silhouette: {
          kind: "solid",
          samples: [],
          balls: (X1 as any)("tablet", "x"),
          isLoop: !1
        },
        seat: {
          kind: "wrapX",
          wrapR: r,
          wrapX0: (-o as any) + (.02 as any),
          wrapX1: (o as any) - (.02 as any),
          radiusAtX: (c: any): any => {
            const i: any = (((Math as any).abs as any)(c) as any) - (a as any);
            return (i as any) <= (0 as any) ? r : ((Math as any).sqrt as any)(((Math as any).max as any)(0, ((r as any) * (r as any) as any) - ((i as any) * (i as any) as any)));
          }
        }
      };
    },
    capsule: (): any => {
      const t: any = (X1 as any)("capsule", "y"),
        {
          y0: n,
          y1: e
        }: any = (En as any)("capsule"),
        s: any = (-((e as any) - (M as any)) as any) / (M as any),
        o: any = (-((n as any) - (M as any)) as any) / (M as any),
        {
          hx: r,
          hz: a
        }: any = (ia as any)(t);
      return {
        size: 1.17,
        silhouette: {
          kind: "solid",
          samples: [],
          balls: t,
          isLoop: !1
        },
        seat: {
          kind: "wrap",
          wrapR: ((Math as any).max as any)(.35, ((r as any) + (a as any) as any) * (.5 as any)),
          wrapY0: s,
          wrapY1: o,
          eyeY: ((s as any) + (o as any) as any) * (.5 as any)
        }
      };
    },
    cylinder: (): any => (K1 as any)("cylinder", (t: any, n: any): any => ((n as any) + (t as any) as any) * (.5 as any)),
    hex: (): any => (Ft as any)(1.2519, (mt as any)((Q as any)("hex"))),
    gem: (): any => (Rt as any)(1.17, "gem"),
    crystal: (): any => ({
      size: 1.3805999999999998,
      silhouette: (qt as any)((ca as any)()),
      seat: {
        kind: "front",
        faceZ: (.64 as any) * ((((Math as any).sqrt as any)(3) as any) / (2 as any) as any)
      }
    }),
    wedge: (): any => {
      const t: any = (Jr as any)(60, 80),
        n: any = (B1 as any)((t as any).path),
        [e, s]: any = ((t as any).spanAt as any)(((t as any).top as any) + ((((t as any).bottom as any) - ((t as any).top as any) as any) * (.5 as any) as any)),
        o: any = (-(((t as any).top as any) - (M as any)) as any) / (M as any),
        r: any = (-(((t as any).bottom as any) - (M as any)) as any) / (M as any);
      return {
        size: 1.3590719999999998,
        silhouette: (qt as any)((In as any)(n)),
        seat: {
          kind: "wrap",
          wrapR: ((Math as any).max as any)(.2, (((s as any) - (e as any) as any) / (2 as any) as any) / (M as any)),
          wrapY0: r,
          wrapY1: o,
          eyeY: (o as any) + (((r as any) - (o as any) as any) * (.5 as any) as any),
          radiusAt: (_n as any)(n)
        }
      };
    },
    shield: (): any => (Rt as any)(1.17, "shield"),
    dome: (): any => (Rt as any)(1.17, "dome"),
    arch: (): any => (K1 as any)("arch", (t: any, n: any): any => (t as any) + (((n as any) - (t as any) as any) * (.42 as any) as any)),
    cloud: (): any => (U1 as any)(1.3455, (mt as any)((Q as any)("cloud", 1)), .72),
    teardrop: (): any => {
      const t: any = (Je as any)(88, 48),
        n: any = (B1 as any)((t as any).path),
        [e, s]: any = ((t as any).spanAt as any)(((t as any).top as any) + ((((t as any).bottom as any) - ((t as any).top as any) as any) * (.62 as any) as any)),
        o: any = (-(((t as any).bottom as any) - (M as any)) as any) / (M as any),
        r: any = (-(((t as any).top as any) - (M as any)) as any) / (M as any);
      return {
        size: 1.318122,
        silhouette: (qt as any)((In as any)(n)),
        seat: {
          kind: "wrap",
          wrapR: ((Math as any).max as any)(.2, (((s as any) - (e as any) as any) / (2 as any) as any) / (M as any)),
          wrapY0: o,
          wrapY1: r,
          eyeY: ((o as any) + (r as any) as any) * (.5 as any),
          radiusAt: (_n as any)(n)
        }
      };
    },
    leaf: (): any => (Rt as any)(1.17, "leaf"),
    square: (): any => (Ft as any)(1.0413, (mt as any)((Q as any)("square"))),
    starFlower: (): any => (Ft as any)(1.3922999999999999, (ha as any)()),
    sparkle: (): any => (Ft as any)(1.521, (mt as any)((Q as any)("sparkle"))),
    clover: (): any => (Ft as any)(1.0881, (mt as any)((Q as any)("clover"))),
    heartChubby: (): any => (U1 as any)(1.3571999999999997, (fa as any)(), .62),
    house: (): any => (Ft as any)(1.17, (mt as any)((Q as any)("house"))),
    star6: (): any => (ns as any)(1.4976, (mt as any)((Q as any)("star6")), .3, .18)
  },
  Y1: any = new (Map as any)();
let H1: any = null;
function H0(this: any, t: any): any {
  const n: any = ((Y1 as any).get as any)(t);
  if ((n as any) != (null as any)) return n;
  const e: any = ((sa as any)[t] as any)();
  return ((Y1 as any).set as any)(t, e), e;
}
function oa(this: any): any {
  return H1 ??= {
    size: 1.17,
    silhouette: {
      kind: "solid",
      samples: (mt as any)((Q as any)("bean")),
      balls: [],
      isLoop: !0
    },
    seat: null
  }, H1;
}
function qt(this: any, t: any): any {
  return {
    kind: "solid",
    samples: t,
    balls: [],
    isLoop: !1
  };
}
function Rt(this: any, t: any, n: any): any {
  return {
    size: t,
    silhouette: (qt as any)((os as any)(n)),
    seat: (es as any)(n, [])
  };
}
function K1(this: any, t: any, n: any): any {
  const e: any = (i0 as any)(t),
    s: any = (-(((e as any).top as any) - (M as any)) as any) / (M as any),
    o: any = (-(((e as any).bottom as any) - (M as any)) as any) / (M as any);
  return {
    size: 1.17,
    silhouette: (qt as any)((os as any)(t)),
    seat: {
      kind: "wrap",
      wrapR: ((e as any).beltRadius as any) / (M as any),
      wrapY0: o,
      wrapY1: s,
      eyeY: (n as any)(s, o),
      radiusAt: (rs as any)(t)
    }
  };
}
function Ft(this: any, t: any, n: any): any {
  return (ns as any)(t, n, ta, na);
}
function ns(this: any, t: any, n: any, e: any, s: any): any {
  return {
    size: t,
    silhouette: {
      kind: "extrusion",
      rings: (ua as any)(n, e, s)
    },
    seat: {
      kind: "front",
      faceZ: e
    }
  };
}
function U1(this: any, t: any, n: any, e: any): any {
  const s: any = (Ma as any)(n, e);
  return {
    size: t,
    silhouette: {
      kind: "loft",
      rings: (s as any).rings
    },
    seat: {
      kind: "loft",
      surfaceZ: (ma as any)(s)
    }
  };
}
function es(this: any, t: any, n: any): any {
  const e: any = (i0 as any)(t),
    s: any = (-(((e as any).bottom as any) - (M as any)) as any) / (M as any),
    o: any = (-(((e as any).top as any) - (M as any)) as any) / (M as any),
    r: any = (rs as any)(t),
    a: any = ((Math as any).min as any)((o as any) - (.02 as any), ((Math as any).max as any)((s as any) + (.02 as any), 0));
  return {
    kind: "wrap",
    wrapR: (r as any)(a),
    wrapY0: s,
    wrapY1: o,
    eyeY: a,
    radiusAt: r,
    puffAt: ((n as any).length as any) > (0 as any) ? (c: any, i: any): any => (ra as any)(n, c, i) : void 0
  };
}
function ra(this: any, t: any, n: any, e: any): any {
  let s: any = (t as any)[0],
    o: any = (-1 as any) / (0 as any),
    r: any = (1 as any) / (0 as any),
    a: any = !1;
  for (const c of t) {
    const i: any = ((Math as any).hypot as any)((n as any) - ((c as any)[0] as any), (e as any) - ((c as any)[1] as any));
    if ((i as any) < ((c as any)[3] as any)) {
      const u: any = ((c as any)[2] as any) + (((Math as any).sqrt as any)((((c as any)[3] as any) * ((c as any)[3] as any) as any) - ((i as any) * (i as any) as any)) as any);
      (!a || (u as any) > (o as any)) && (a = !0, o = u, s = c);
    } else !a && ((i as any) - ((c as any)[3] as any) as any) < (r as any) && (r = (i as any) - ((c as any)[3] as any), s = c);
  }
  return {
    x: (s as any)[0],
    y: (s as any)[1],
    z: (s as any)[2],
    r: (s as any)[3]
  };
}
function mt(this: any, t: any): any {
  return ((t as any).map as any)(([n, e]: any): any => ({
    x: ((n as any) - (M as any) as any) / (M as any),
    y: (-((e as any) - (M as any)) as any) / (M as any),
    z: 0
  }));
}
function En(this: any, t: any): any {
  let n: any = (1 as any) / (0 as any),
    e: any = (-1 as any) / (0 as any),
    s: any = (1 as any) / (0 as any),
    o: any = (-1 as any) / (0 as any);
  for (const [r, a] of ((i0 as any)(t) as any).ring) (r as any) < (n as any) && (n = r), (r as any) > (e as any) && (e = r), (a as any) < (s as any) && (s = a), (a as any) > (o as any) && (o = a);
  return {
    x0: n,
    x1: e,
    y0: s,
    y1: o
  };
}
function aa(this: any, t: any, n: any, e: any): any {
  const s: any = ((((i0 as any)(t) as any).ring as any).map as any)(([a, c]: any): any => ({
      x: ((a as any) - (M as any) as any) / (M as any),
      y: (-((c as any) - (M as any)) as any) / (M as any)
    })),
    o: any = (s as any).length,
    r: any = [];
  for (let a: any = 0; (a as any) < (o as any); a++) {
    const c: any = (s as any)[a],
      i: any = (s as any)[(((a as any) - (1 as any) as any) + (o as any) as any) % (o as any)],
      u: any = (s as any)[((a as any) + (1 as any) as any) % (o as any)];
    let l: any = ((u as any).y as any) - ((i as any).y as any),
      h: any = -(((u as any).x as any) - ((i as any).x as any));
    const f: any = ((Math as any).hypot as any)(l, h) || 1;
    l /= f, h /= f, (((l as any) * ((c as any).x as any) as any) + ((h as any) * ((c as any).y as any) as any) as any) < (0 as any) && (l = -l, h = -h);
    for (let d: any = 0; (d as any) <= (n0 as any); d++) {
      const p: any = ((d as any) / (n0 as any) as any) * (((Math as any).PI as any) / (2 as any) as any),
        y: any = (e as any) * ((1 as any) - (((Math as any).cos as any)(p) as any) as any),
        m: any = ((n as any) - (e as any) as any) + ((e as any) * (((Math as any).sin as any)(p) as any) as any);
      ((r as any).push as any)({
        x: ((c as any).x as any) - ((l as any) * (y as any) as any),
        y: ((c as any).y as any) - ((h as any) * (y as any) as any),
        z: m
      }), ((r as any).push as any)({
        x: ((c as any).x as any) - ((l as any) * (y as any) as any),
        y: ((c as any).y as any) - ((h as any) * (y as any) as any),
        z: -m
      });
    }
  }
  return r;
}
function ca(this: any): any {
  const o: number = 1.1600000000000001,
    r: any = [{
      x: 0,
      y: (o as any) - (.12 as any),
      z: 0
    }, {
      x: 0,
      y: (-o as any) + (.12 as any),
      z: 0
    }],
    a: any = (.54 as any) - ((.12 as any) * (.25 as any) as any),
    c: any = (.64 as any) - (.12 as any);
  for (const h of [-1, 1]) for (let f: any = 0; (f as any) < (6 as any); f++) {
    const d: any = ((f as any) / (6 as any) as any) * (Gt as any);
    ((r as any).push as any)({
      x: (c as any) * (((Math as any).cos as any)(d) as any),
      y: (h as any) * (a as any),
      z: (c as any) * (((Math as any).sin as any)(d) as any)
    });
  }
  const i: any = [],
    u: number = 8,
    l: number = 14;
  for (const h of r) for (let f: any = 0; (f as any) <= (u as any); f++) {
    const d: any = ((f as any) / (u as any) as any) * ((Math as any).PI as any),
      p: any = ((Math as any).sin as any)(d),
      y: any = (f as any) === (0 as any) || (f as any) === (u as any) ? 1 : l;
    for (let m: any = 0; (m as any) < (y as any); m++) {
      const g: any = ((m as any) / (y as any) as any) * (Gt as any);
      ((i as any).push as any)({
        x: ((h as any).x as any) + (((.12 as any) * (p as any) as any) * (((Math as any).sin as any)(g) as any) as any),
        y: ((h as any).y as any) + ((.12 as any) * (((Math as any).cos as any)(d) as any) as any),
        z: ((h as any).z as any) + (((.12 as any) * (p as any) as any) * (((Math as any).cos as any)(g) as any) as any)
      });
    }
  }
  return i;
}
function ss(this: any, t: any): any {
  const n: any = (t as any).length;
  let e: any = (1 as any) / (0 as any),
    s: any = (-1 as any) / (0 as any);
  for (const [, a] of t) (a as any) < (e as any) && (e = a), (a as any) > (s as any) && (s = a);
  e -= d0, s += d0;
  const o: any = (a: any): any => ((Math as any).min as any)((rn as any) - (1 as any), ((Math as any).floor as any)((((a as any) - (e as any) as any) / ((s as any) - (e as any) as any) as any) * (rn as any))),
    r: any = ((Array as any).from as any)({
      length: rn
    }, (): any => []);
  for (let a: any = 0; (a as any) < (n as any); a++) {
    const c: any = ((t as any)[a] as any)[1],
      i: any = ((t as any)[((a as any) + (1 as any) as any) % (n as any)] as any)[1],
      u: any = (o as any)((((Math as any).max as any)(c, i) as any) + (d0 as any));
    for (let l: any = (o as any)((((Math as any).min as any)(c, i) as any) - (d0 as any)); (l as any) <= (u as any); l++) (((r as any)[l] as any).push as any)(a);
  }
  return (a: any): any => {
    let c: any = (1 as any) / (0 as any),
      i: any = (-1 as any) / (0 as any);
    if (!((a as any) >= (e as any) && (a as any) <= (s as any))) return (i as any) - (c as any);
    for (const u of (r as any)[(o as any)(a)]) {
      const [l, h]: any = (t as any)[u],
        [f, d]: any = (t as any)[((u as any) + (1 as any) as any) % (n as any)];
      if ((((Math as any).abs as any)((d as any) - (h as any)) as any) < (1e-9 as any)) {
        (((Math as any).abs as any)((h as any) - (a as any)) as any) < (1e-6 as any) && (c = ((Math as any).min as any)(c, l, f), i = ((Math as any).max as any)(i, l, f));
        continue;
      }
      if ((h as any) <= (a as any) && (d as any) >= (a as any) || (d as any) <= (a as any) && (h as any) >= (a as any)) {
        const p: any = (l as any) + ((((f as any) - (l as any) as any) * ((a as any) - (h as any) as any) as any) / ((d as any) - (h as any) as any) as any);
        (p as any) < (c as any) && (c = p), (p as any) > (i as any) && (i = p);
      }
    }
    return (i as any) - (c as any);
  };
}
function os(this: any, t: any): any {
  return (In as any)((Q as any)(t));
}
function In(this: any, t: any): any {
  let n: any = (1 as any) / (0 as any),
    e: any = (-1 as any) / (0 as any);
  for (const [, d] of t) (d as any) < (n as any) && (n = d), (d as any) > (e as any) && (e = d);
  const s: any = [],
    o: any = (-((n as any) - (M as any)) as any) / (M as any),
    r: any = (-((e as any) - (M as any)) as any) / (M as any),
    a: any = (ss as any)(t),
    c: any = (d: any): any => {
      const p: any = (a as any)(d);
      return (p as any) < (0 as any) ? 0 : ((p as any) / (2 as any) as any) / (M as any);
    },
    i: any = (e as any) - (n as any),
    u: any = (d: any, p: any): any => {
      if (((c as any)(d) as any) >= (.06 as any)) return null;
      const y: any = (c as any)(d);
      let m: any = (i as any) * (.02 as any);
      for (let g: any = (i as any) / (512 as any); (g as any) <= ((i as any) * (.05 as any) as any); g += (i as any) / (512 as any)) if ((((Math as any).abs as any)(((c as any)((d as any) + ((p as any) * (g as any) as any)) as any) - (y as any)) as any) > (1e-4 as any)) {
        m = g;
        break;
      }
      return {
        yEdge: d,
        sign: p,
        dJoin: m,
        rJoin: (c as any)((d as any) + ((p as any) * (m as any) as any))
      };
    },
    l: any = (([(u as any)(n, 1), (u as any)(e, -1)] as any).filter as any)((d: any): any => (d as any) !== (null as any)),
    h: any = (d: any): any => {
      let p: any = (c as any)(d);
      for (const y of l) {
        const m: any = ((d as any) - ((y as any).yEdge as any) as any) * ((y as any).sign as any);
        (m as any) >= (0 as any) && (m as any) < ((y as any).dJoin as any) && (p = ((Math as any).min as any)(p, ((y as any).rJoin as any) * (((Math as any).sqrt as any)((m as any) / ((y as any).dJoin as any)) as any)));
      }
      return p;
    },
    f: any = (d: any, p: any): any => {
      const y: any = (h as any)(p);
      (y as any) < (.06 as any) ? ((s as any).push as any)({
        x: 0,
        y: d,
        z: 0
      }) : ((s as any).push as any)(...(j1 as any)(d, y));
    };
  (f as any)(o, n);
  for (let d: any = 1; (d as any) < ((N1 as any) - (1 as any) as any); d++) {
    const p: any = ((1 as any) - (((Math as any).cos as any)(((Math as any).PI as any) * ((d as any) / ((N1 as any) - (1 as any) as any) as any)) as any) as any) / (2 as any),
      y: any = (n as any) + (((e as any) - (n as any) as any) * (p as any) as any),
      m: any = (h as any)(y),
      g: any = (-((y as any) - (M as any)) as any) / (M as any);
    if ((m as any) < (1e-4 as any)) {
      ((s as any).push as any)({
        x: 0,
        y: g,
        z: 0
      });
      continue;
    }
    ((s as any).push as any)(...(j1 as any)(g, m));
  }
  return (f as any)(r, e), s;
}
function j1(this: any, t: any, n: any): any {
  const e: any = [];
  for (let s: any = 0; (s as any) < (D1 as any); s++) {
    const o: any = ((s as any) / (D1 as any) as any) * (Gt as any);
    ((e as any).push as any)({
      x: (n as any) * (((Math as any).sin as any)(o) as any),
      y: t,
      z: (n as any) * (((Math as any).cos as any)(o) as any)
    });
  }
  return e;
}
function rs(this: any, t: any): any {
  return (_n as any)((Q as any)(t));
}
function _n(this: any, t: any): any {
  const n: any = (ss as any)(t);
  let e: any = (1 as any) / (0 as any),
    s: any = (-1 as any) / (0 as any);
  for (const [, o] of t) (o as any) < (e as any) && (e = o), (o as any) > (s as any) && (s = o);
  return (o: any): any => {
    const r: any = ((Math as any).max as any)(e, ((Math as any).min as any)(s, (M as any) - ((o as any) * (M as any) as any)));
    return ((Math as any).max as any)(.02, (((n as any)(r) as any) / (2 as any) as any) / (M as any));
  };
}
function X1(this: any, t: any, n: any): any {
  const {
      x0: e,
      x1: s,
      y0: o,
      y1: r
    }: any = (En as any)(t),
    a: any = (((s as any) - (e as any) as any) / (2 as any) as any) / (M as any),
    c: any = (((r as any) - (o as any) as any) / (2 as any) as any) / (M as any),
    i: any = (n as any) === ("x" as any) ? c : a,
    u: any = ((Math as any).max as any)(0, (((n as any) === ("x" as any) ? a : c) as any) - (i as any)),
    l: any = -u,
    h: any = [];
  for (let f: any = 0; (f as any) < (q1 as any); f++) {
    const d: any = (l as any) + (((u as any) - (l as any) as any) * ((f as any) / ((q1 as any) - (1 as any) as any) as any) as any);
    ((h as any).push as any)((n as any) === ("x" as any) ? [d, 0, 0, i] : [0, d, 0, i]);
  }
  return h;
}
function ia(this: any, t: any): any {
  let n: any = .55,
    e: any = .35;
  for (const [s,, o, r] of t) n = ((Math as any).max as any)(n, (((Math as any).abs as any)(s) as any) + (r as any)), e = ((Math as any).max as any)(e, (((Math as any).abs as any)(o) as any) + (r as any));
  return {
    hx: n,
    hz: e
  };
}
function la(this: any, t: any): any {
  const n: any = (Q as any)(t);
  let e: any = (1 as any) / (0 as any),
    s: any = (-1 as any) / (0 as any),
    o: any = (1 as any) / (0 as any),
    r: any = (-1 as any) / (0 as any);
  for (const [l, h] of n) e = ((Math as any).min as any)(e, l), s = ((Math as any).max as any)(s, l), o = ((Math as any).min as any)(o, h), r = ((Math as any).max as any)(r, h);
  const a: any = (l: any, h: any): any => {
      let f: any = !1;
      const d: any = (n as any).length;
      for (let p: any = 0, y: any = (d as any) - (1 as any); (p as any) < (d as any); y = p++) {
        const [m, g]: any = (n as any)[p],
          [x, w]: any = (n as any)[y];
        ((g as any) > (h as any) as any) != ((w as any) > (h as any) as any) && (l as any) < ((m as any) + ((((x as any) - (m as any) as any) * ((h as any) - (g as any) as any) as any) / ((w as any) - (g as any) as any) as any) as any) && (f = !f);
      }
      return f;
    },
    c: any = (((Math as any).max as any)((s as any) - (e as any), (r as any) - (o as any)) as any) / (ea as any),
    i: any = [];
  for (let l: any = (o as any) + ((c as any) / (2 as any) as any); (l as any) < (r as any); l += c) for (let h: any = (e as any) + ((c as any) / (2 as any) as any); (h as any) < (s as any); h += c) {
    if (!(a as any)(h, l)) continue;
    let f: any = (1 as any) / (0 as any);
    for (const [p, y] of n) f = ((Math as any).min as any)(f, (((p as any) - (h as any) as any) ** (2 as any) as any) + (((y as any) - (l as any) as any) ** (2 as any) as any));
    const d: any = ((Math as any).sqrt as any)(f);
    (d as any) > (c as any) && ((i as any).push as any)({
      x: h,
      y: l,
      r: d
    });
  }
  ((i as any).sort as any)((l: any, h: any): any => ((h as any).r as any) - ((l as any).r as any));
  const u: any = [];
  for (const l of i) ((u as any).some as any)((h: any): any => ((((Math as any).hypot as any)(((l as any).x as any) - ((h as any).x as any), ((l as any).y as any) - ((h as any).y as any)) as any) + ((l as any).r as any) as any) <= (((h as any).r as any) + ((c as any) * (.25 as any) as any) as any)) || ((u as any).push as any)(l);
  return ((u as any).map as any)((l: any): any => [(((l as any).x as any) - (M as any) as any) / (M as any), (-(((l as any).y as any) - (M as any)) as any) / (M as any), 0, ((l as any).r as any) / (M as any)]);
}
function ua(this: any, t: any, n: any, e: any): any {
  let s: any = (1 as any) / (0 as any),
    o: any = (-1 as any) / (0 as any),
    r: any = (1 as any) / (0 as any),
    a: any = (-1 as any) / (0 as any);
  for (const f of t) s = ((Math as any).min as any)(s, (f as any).x), o = ((Math as any).max as any)(o, (f as any).x), r = ((Math as any).min as any)(r, (f as any).y), a = ((Math as any).max as any)(a, (f as any).y);
  const c: any = ((s as any) + (o as any) as any) / (2 as any),
    i: any = ((r as any) + (a as any) as any) / (2 as any),
    u: any = ((Math as any).max as any)(1e-4, ((Math as any).min as any)(((o as any) - (s as any) as any) / (2 as any), ((a as any) - (r as any) as any) / (2 as any))),
    l: any = (f: any, d: any): any => {
      const p: any = ((f as any) / (n0 as any) as any) * (((Math as any).PI as any) / (2 as any) as any),
        y: any = ((n as any) - (e as any) as any) + ((e as any) * (((Math as any).sin as any)(p) as any) as any);
      return {
        z: (d as any) < (0 as any) ? -y : y,
        scale: (1 as any) - (((e as any) / (u as any) as any) * ((1 as any) - (((Math as any).cos as any)(p) as any) as any) as any)
      };
    },
    h: any = [];
  for (let f: any = n0; (f as any) >= (0 as any); f--) ((h as any).push as any)((l as any)(f, -1));
  for (let f: any = 0; (f as any) <= (n0 as any); f++) ((h as any).push as any)((l as any)(f, 1));
  return ((h as any).map as any)(({
    z: f,
    scale: d
  }: any): any => ((t as any).map as any)((p: any): any => ({
    x: (c as any) + ((((p as any).x as any) - (c as any) as any) * (d as any) as any),
    y: (i as any) + ((((p as any).y as any) - (i as any) as any) * (d as any) as any),
    z: f
  })));
}
function ha(this: any): any {
  const s: any = [{
    x: 0,
    y: 0,
    r: .36
  }];
  for (let a: any = 0; (a as any) < (6 as any); a++) {
    const c: any = ((-(Math as any).PI as any) / (2 as any) as any) + (((a as any) * (Gt as any) as any) / (6 as any) as any);
    ((s as any).push as any)({
      x: (.58 as any) * (((Math as any).cos as any)(c) as any),
      y: (.58 as any) * (((Math as any).sin as any)(c) as any),
      r: .33
    });
  }
  const o: number = 240,
    r: any = [];
  for (let a: any = 0; (a as any) < (o as any); a++) {
    const c: any = ((a as any) / (o as any) as any) * (Gt as any),
      i: any = ((Math as any).cos as any)(c),
      u: any = ((Math as any).sin as any)(c);
    let l: any = 0,
      h: any = (.58 as any) + (.33 as any);
    for (let f: any = 0; (f as any) < (22 as any); f++) {
      const d: any = ((l as any) + (h as any) as any) / (2 as any),
        p: any = (d as any) * (i as any),
        y: any = (d as any) * (u as any);
      ((s as any).some as any)((m: any): any => ((((p as any) - ((m as any).x as any) as any) * ((p as any) - ((m as any).x as any) as any) as any) + (((y as any) - ((m as any).y as any) as any) * ((y as any) - ((m as any).y as any) as any) as any) as any) <= (((m as any).r as any) * ((m as any).r as any) as any)) ? l = d : h = d;
    }
    ((r as any).push as any)({
      x: (l as any) * (i as any),
      y: (l as any) * (u as any),
      z: 0
    });
  }
  return r;
}
function fa(this: any): any {
  const t: any = (((Q as any)("heart", 1) as any).map as any)(([f, d]: any): any => ({
    x: ((f as any) - (M as any) as any) / (M as any),
    y: (-((d as any) - (M as any)) as any) / (M as any)
  }));
  let n: any = (1 as any) / (0 as any),
    e: any = (-1 as any) / (0 as any),
    s: any = (1 as any) / (0 as any),
    o: any = (-1 as any) / (0 as any);
  for (const f of t) n = ((Math as any).min as any)(n, (f as any).x), e = ((Math as any).max as any)(e, (f as any).x), s = ((Math as any).min as any)(s, (f as any).y), o = ((Math as any).max as any)(o, (f as any).y);
  const r: any = ((n as any) + (e as any) as any) / (2 as any),
    a: any = ((s as any) + (o as any) as any) / (2 as any),
    c: any = ((o as any) - (s as any) as any) * (.13 as any),
    i: any = (f: any, d: any): any => ((pa as any)(t, f, d) as any) <= (c as any) || (da as any)(t, f, d),
    u: any = ((((Math as any).hypot as any)((e as any) - (r as any), (o as any) - (a as any)) as any) + (c as any) as any) + (.08 as any);
  let h: any = ((((Array as any).from as any)({
    length: 480
  }, (f: any, d: any): any => {
    const p: any = ((d as any) / (480 as any) as any) * (Gt as any),
      y: any = ((Math as any).cos as any)(p),
      m: any = ((Math as any).sin as any)(p);
    let g: any = 0,
      x: any = u;
    for (let w: any = 0; (w as any) < (24 as any); w++) {
      const v: any = ((g as any) + (x as any) as any) / (2 as any);
      (i as any)((r as any) + ((v as any) * (y as any) as any), (a as any) + ((v as any) * (m as any) as any)) ? g = v : x = v;
    }
    return {
      x: (r as any) + ((g as any) * (y as any) as any),
      y: (a as any) + ((g as any) * (m as any) as any)
    };
  }) as any).map as any)((f: any): any => ({
    x: (r as any) + ((((f as any).x as any) - (r as any) as any) * (.93 as any) as any),
    y: (a as any) + ((((f as any).y as any) - (a as any) as any) * (.88 as any) as any)
  }));
  for (let f: any = 0; (f as any) < (2 as any); f++) h = ((h as any).flatMap as any)((d: any, p: any): any => {
    const y: any = (h as any)[((p as any) + (1 as any) as any) % ((h as any).length as any)];
    return [{
      x: (((d as any).x as any) * (.75 as any) as any) + (((y as any).x as any) * (.25 as any) as any),
      y: (((d as any).y as any) * (.75 as any) as any) + (((y as any).y as any) * (.25 as any) as any)
    }, {
      x: (((d as any).x as any) * (.25 as any) as any) + (((y as any).x as any) * (.75 as any) as any),
      y: (((d as any).y as any) * (.25 as any) as any) + (((y as any).y as any) * (.75 as any) as any)
    }];
  });
  return h;
}
function da(this: any, t: any, n: any, e: any): any {
  let s: any = !1;
  for (let o: any = 0, r: any = ((t as any).length as any) - (1 as any); (o as any) < ((t as any).length as any); r = o++) {
    const a: any = (t as any)[o],
      c: any = (t as any)[r];
    (((a as any).y as any) > (e as any) as any) != (((c as any).y as any) > (e as any) as any) && (n as any) < ((((((c as any).x as any) - ((a as any).x as any) as any) * ((e as any) - ((a as any).y as any) as any) as any) / (((c as any).y as any) - ((a as any).y as any) as any) as any) + ((a as any).x as any) as any) && (s = !s);
  }
  return s;
}
function pa(this: any, t: any, n: any, e: any): any {
  let s: any = (1 as any) / (0 as any);
  for (let o: any = 0; (o as any) < ((t as any).length as any); o++) {
    const r: any = (t as any)[o],
      a: any = (t as any)[((o as any) + (1 as any) as any) % ((t as any).length as any)],
      c: any = ((a as any).x as any) - ((r as any).x as any),
      i: any = ((a as any).y as any) - ((r as any).y as any),
      u: any = ((c as any) * (c as any) as any) + ((i as any) * (i as any) as any) || 1,
      l: any = ((Math as any).max as any)(0, ((Math as any).min as any)(1, ((((n as any) - ((r as any).x as any) as any) * (c as any) as any) + (((e as any) - ((r as any).y as any) as any) * (i as any) as any) as any) / (u as any)));
    s = ((Math as any).min as any)(s, ((Math as any).hypot as any)((n as any) - (((r as any).x as any) + ((l as any) * (c as any) as any) as any), (e as any) - (((r as any).y as any) + ((l as any) * (i as any) as any) as any)));
  }
  return s;
}
function Ma(this: any, t: any, n: any): any {
  const e: any = ((t as any).length as any) / (G1 as any),
    s: any = (e as any) > (1 as any) ? ((Array as any).from as any)({
      length: G1
    }, (l: any, h: any): any => (t as any)[((Math as any).floor as any)((h as any) * (e as any))]) : t;
  let o: any = (1 as any) / (0 as any),
    r: any = (-1 as any) / (0 as any),
    a: any = (1 as any) / (0 as any),
    c: any = (-1 as any) / (0 as any);
  for (const l of s) o = ((Math as any).min as any)(o, (l as any).x), r = ((Math as any).max as any)(r, (l as any).x), a = ((Math as any).min as any)(a, (l as any).y), c = ((Math as any).max as any)(c, (l as any).y);
  const i: any = {
      x: ((o as any) + (r as any) as any) / (2 as any),
      y: ((a as any) + (c as any) as any) / (2 as any)
    },
    u: any = [];
  for (let l: any = 0; (l as any) <= (z1 as any); l++) {
    const h: any = ((-(Math as any).PI as any) / (2 as any) as any) + ((((Math as any).PI as any) * (l as any) as any) / (z1 as any) as any),
      f: any = ((Math as any).pow as any)(((Math as any).max as any)(0, ((Math as any).cos as any)(h)), ts),
      d: any = (n as any) * (((Math as any).sin as any)(h) as any);
    ((u as any).push as any)(((s as any).map as any)((p: any): any => ({
      x: ((i as any).x as any) + ((((p as any).x as any) - ((i as any).x as any) as any) * (f as any) as any),
      y: ((i as any).y as any) + ((((p as any).y as any) - ((i as any).y as any) as any) * (f as any) as any),
      z: d
    })));
  }
  return {
    rings: u,
    center: i,
    depth: n
  };
}
function ma(this: any, {
  rings: t,
  center: n,
  depth: e
}: any): any {
  const s: any = (t as any)[((Math as any).floor as any)(((t as any).length as any) / (2 as any))],
    o: any = new (Float64Array as any)(Tt);
  for (let a: any = 0; (a as any) < (Tt as any); a++) {
    const c: any = ((((a as any) + (.5 as any) as any) / (Tt as any) as any) * ((Math as any).PI as any) as any) * (2 as any),
      i: any = ((Math as any).cos as any)(c),
      u: any = ((Math as any).sin as any)(c);
    let l: any = 0;
    for (let h: any = 0; (h as any) < ((s as any).length as any); h++) {
      const f: any = (s as any)[h],
        d: any = (s as any)[((h as any) + (1 as any) as any) % ((s as any).length as any)],
        p: any = ((d as any).x as any) - ((f as any).x as any),
        y: any = ((d as any).y as any) - ((f as any).y as any),
        m: any = ((i as any) * (y as any) as any) - ((u as any) * (p as any) as any);
      if ((((Math as any).abs as any)(m) as any) < (1e-9 as any)) continue;
      const g: any = ((f as any).x as any) - ((n as any).x as any),
        x: any = ((f as any).y as any) - ((n as any).y as any),
        w: any = (((g as any) * (y as any) as any) - ((x as any) * (p as any) as any) as any) / (m as any),
        v: any = (((g as any) * (u as any) as any) - ((x as any) * (i as any) as any) as any) / (m as any);
      (w as any) > (l as any) && (v as any) >= (0 as any) && (v as any) <= (1 as any) && (l = w);
    }
    (o as any)[a] = l;
  }
  const r: any = (a: any, c: any): any => {
    const i: any = (a as any) - ((n as any).x as any),
      u: any = (c as any) - ((n as any).y as any),
      l: any = ((Math as any).hypot as any)(i, u);
    if ((l as any) < (1e-8 as any)) return 0;
    const f: any = ((((((Math as any).atan2 as any)(u, i) as any) + (((Math as any).PI as any) * (2 as any) as any) as any) % (((Math as any).PI as any) * (2 as any) as any) as any) / (((Math as any).PI as any) * (2 as any) as any) as any) * (Tt as any),
      d: any = (((Math as any).floor as any)(f) as any) % (Tt as any),
      p: any = (f as any) - (((Math as any).floor as any)(f) as any),
      y: any = (o as any)[d],
      m: any = (o as any)[((d as any) + (1 as any) as any) % (Tt as any)];
    return ((Math as any).min as any)(1, (l as any) / (((Math as any).max as any)(1e-8, ((y as any) * ((1 as any) - (p as any) as any) as any) + ((m as any) * (p as any) as any)) as any));
  };
  return (a: any, c: any): any => (e as any) * (((Math as any).sqrt as any)(((Math as any).max as any)(0, (1 as any) - (((Math as any).pow as any)((r as any)(a, c), (2 as any) / (ts as any)) as any))) as any);
}
const e0: any = ((Math as any).PI as any) * (2 as any),
  ya: number = .2,
  ga: number = .36,
  xa: number = 1.18,
  ba: number = 160,
  V: number = 480,
  va: any = (as as any)(ba),
  Z1: any = (as as any)(V),
  wa: number = 1.01,
  ka: number = 1e-5,
  Aa: number = .01,
  Ea: number = 8;
function as(this: any, t: any): any {
  return ((Array as any).from as any)({
    length: t
  }, (n: any, e: any): any => {
    const s: any = ((e as any) / (t as any) as any) * (e0 as any);
    return {
      x: ((Math as any).cos as any)(s),
      y: ((Math as any).sin as any)(s)
    };
  });
}
function Xn(this: any, t: any, n: any): any {
  return (((Math as any).max as any)(ya, (t as any).size) as any) * (((ga as any) * (n as any) as any) / (xa as any) as any);
}
function cs(this: any, t: any, n: any, e: any): any {
  return (((Pa as any)((t as any).silhouette, (is as any)(t, n, e)) as any).flatMap as any)(ls);
}
function Ia(this: any, t: any, n: any, e: any, s: any): any {
  return ((t as any).seat as any) == (null as any) ? [] : (((Ta as any)((t as any).seat, s, (is as any)(t, n, e)) as any).flatMap as any)(ls);
}
function is(this: any, t: any, n: any, e: any): any {
  const s: any = (e as any) / (2 as any),
    o: any = (Xn as any)(t, e),
    r: any = (_a as any)((((n as any).yaw as any) * ((Math as any).PI as any) as any) / (180 as any), (((n as any).pitch as any) * ((Math as any).PI as any) as any) / (180 as any), (((n as any).roll as any) * ((Math as any).PI as any) as any) / (180 as any));
  return {
    rotate: r,
    project: (a: any): any => {
      const c: any = (r as any)(a);
      return {
        x: (s as any) + ((o as any) * ((c as any).x as any) as any),
        y: (s as any) - ((o as any) * ((c as any).y as any) as any)
      };
    },
    origin: {
      x: s,
      y: s
    },
    radius: o
  };
}
function _a(this: any, t: any, n: any, e: any): any {
  const [s, o, r]: any = (an as any)(t),
    [a, c, i]: any = (an as any)(n),
    [u, l, h]: any = (an as any)(e);
  return ({
    x: f,
    y: d,
    z: p
  }: any): any => {
    const y: any = ((f as any) * (s as any) as any) + ((p as any) * (o as any) as any),
      m: any = ((d as any) * (s as any) as any) + ((d as any) * (r as any) as any),
      g: any = ((p as any) * (s as any) as any) - ((f as any) * (o as any) as any),
      x: any = ((y as any) * (a as any) as any) + ((y as any) * (i as any) as any),
      w: any = ((m as any) * (a as any) as any) - ((g as any) * (c as any) as any),
      v: any = ((g as any) * (a as any) as any) + ((m as any) * (c as any) as any);
    return {
      x: ((x as any) * (u as any) as any) - ((w as any) * (l as any) as any),
      y: ((w as any) * (u as any) as any) + ((x as any) * (l as any) as any),
      z: ((v as any) * (u as any) as any) + ((v as any) * (h as any) as any)
    };
  };
}
function an(this: any, t: any): any {
  const n: any = ((Math as any).cos as any)(t);
  return [n, ((Math as any).sin as any)(t), (1 as any) - (n as any)];
}
function ls(this: any, t: any): any {
  const [n]: any = t;
  if (((t as any).length as any) < (2 as any) || !((Number as any).isFinite as any)((n as any).x) || !((Number as any).isFinite as any)((n as any).y)) return [];
  const e: any = [];
  for (const s of t) ((Number as any).isFinite as any)((s as any).x) && ((Number as any).isFinite as any)((s as any).y) && ((e as any).push as any)((s as any).x, (s as any).y);
  return ((e as any).length as any) >= (6 as any) ? [e] : [];
}
function Pa(this: any, t: any, n: any): any {
  if (((t as any).kind as any) === ("loft" as any)) return [($a as any)((t as any).rings, n)];
  if (((t as any).kind as any) === ("solid" as any)) return [(Sa as any)(t, n)];
  const e: any = (((t as any).rings as any).map as any)((a: any): any => ((a as any).map as any)((n as any).project)),
    s: any = (e as any)[0],
    o: any = (e as any)[((e as any).length as any) - (1 as any)],
    r: any = [o, s];
  for (let a: any = 1; (a as any) < ((e as any).length as any); a++) {
    const c: any = (e as any)[(a as any) - (1 as any)],
      i: any = (e as any)[a];
    for (let u: any = 0; (u as any) < ((i as any).length as any); u++) {
      const l: any = ((u as any) + (1 as any) as any) % ((o as any).length as any);
      ((r as any).push as any)([(c as any)[u], (c as any)[l], (i as any)[l], (i as any)[u]]);
    }
  }
  return r;
}
function Sa(this: any, t: any, {
  project: n,
  origin: e,
  radius: s
}: any): any {
  const o: any = [];
  for (const i of (t as any).samples) {
    const u: any = (n as any)(i);
    ((Number as any).isFinite as any)((u as any).x) && ((Number as any).isFinite as any)((u as any).y) && ((o as any).push as any)(u);
  }
  if ((t as any).isLoop) return o;
  if ((((t as any).balls as any).length as any) === (0 as any)) return (cn as any)(o);
  const r: any = (((((t as any).balls as any).map as any)(([i, u, l, h]: any): any => ({
    ...(n as any)({
      x: i,
      y: u,
      z: l
    }),
    r: (h as any) * (s as any)
  })) as any).filter as any)((i: any): any => ((Number as any).isFinite as any)((i as any).x) && ((Number as any).isFinite as any)((i as any).y) && ((i as any).r as any) > (1e-6 as any));
  let a: any = (e as any).x,
    c: any = (e as any).y;
  if (((r as any).length as any) > (0 as any)) {
    a = 0, c = 0;
    for (const i of r) a += (i as any).x, c += (i as any).y;
    a /= (r as any).length, c /= (r as any).length;
  }
  for (const {
    x: i,
    y: u
  } of va) {
    let l: any = 0;
    for (const h of r) {
      const f: any = ((h as any).x as any) - (a as any),
        d: any = ((h as any).y as any) - (c as any),
        p: any = ((i as any) * (f as any) as any) + ((u as any) * (d as any) as any),
        y: any = (((p as any) * (p as any) as any) - (((f as any) * (f as any) as any) + ((d as any) * (d as any) as any) as any) as any) + (((h as any).r as any) * ((h as any).r as any) as any);
      if ((y as any) <= (0 as any)) continue;
      const m: any = (p as any) + (((Math as any).sqrt as any)(y) as any);
      (m as any) > (l as any) && (l = m);
    }
    (l as any) > (0 as any) && ((o as any).push as any)({
      x: (a as any) + ((i as any) * (l as any) as any),
      y: (c as any) + ((u as any) * (l as any) as any)
    });
  }
  if ((((t as any).samples as any).length as any) > (0 as any)) return (cn as any)(o);
  if (((o as any).length as any) >= (3 as any)) return o;
  for (const i of r) for (let u: any = 0; (u as any) < (48 as any); u++) {
    const l: any = ((u as any) / (48 as any) as any) * (e0 as any);
    ((o as any).push as any)({
      x: ((i as any).x as any) + (((i as any).r as any) * (((Math as any).cos as any)(l) as any) as any),
      y: ((i as any).y as any) + (((i as any).r as any) * (((Math as any).sin as any)(l) as any) as any)
    });
  }
  return ((o as any).length as any) >= (3 as any) ? (cn as any)(o) : o;
}
function cn(this: any, t: any): any {
  const n: any = (Ca as any)(((t as any).filter as any)((r: any): any => ((Number as any).isFinite as any)((r as any).x) && ((Number as any).isFinite as any)((r as any).y)));
  if (((n as any).length as any) < (3 as any)) return n;
  const e: any = (r: any, a: any, c: any): any => ((((a as any).x as any) - ((r as any).x as any) as any) * (((c as any).y as any) - ((r as any).y as any) as any) as any) - ((((a as any).y as any) - ((r as any).y as any) as any) * (((c as any).x as any) - ((r as any).x as any) as any) as any),
    s: any = [];
  for (const r of n) {
    for (; ((s as any).length as any) >= (2 as any) && ((e as any)((s as any)[((s as any).length as any) - (2 as any)], (s as any)[((s as any).length as any) - (1 as any)], r) as any) <= (0 as any);) ((s as any).pop as any)();
    ((s as any).push as any)(r);
  }
  const o: any = [];
  for (let r: any = ((n as any).length as any) - (1 as any); (r as any) >= (0 as any); r--) {
    const a: any = (n as any)[r];
    for (; ((o as any).length as any) >= (2 as any) && ((e as any)((o as any)[((o as any).length as any) - (2 as any)], (o as any)[((o as any).length as any) - (1 as any)], a) as any) <= (0 as any);) ((o as any).pop as any)();
    ((o as any).push as any)(a);
  }
  return ((s as any).pop as any)(), ((o as any).pop as any)(), [...s, ...o];
}
function Ca(this: any, t: any): any {
  let n: any = (1 as any) / (0 as any),
    e: any = (-1 as any) / (0 as any);
  for (const {
    x: u
  } of t) (u as any) < (n as any) && (n = u), (u as any) > (e as any) && (e = u);
  const s: any = ((Math as any).ceil as any)(((t as any).length as any) / (Ea as any)),
    o: any = (e as any) > (n as any) ? (s as any) / ((e as any) - (n as any) as any) : 0,
    r: any = (u: any): any => ((Math as any).min as any)((s as any) - (1 as any), ((Math as any).floor as any)(((u as any) - (n as any) as any) * (o as any))),
    a: any = new (Int32Array as any)((s as any) + (1 as any));
  for (const {
    x: u
  } of t) (a as any)[((r as any)(u) as any) + (1 as any)]++;
  for (let u: any = 0; (u as any) < (s as any); u++) (a as any)[(u as any) + (1 as any)] += (a as any)[u];
  const c: any = ((a as any).slice as any)(0, s),
    i: any = new (Array as any)((t as any).length);
  for (const u of t) (i as any)[(c as any)[(r as any)((u as any).x)]++] = u;
  for (let u: any = 0; (u as any) < (s as any); u++) for (let l: any = ((a as any)[u] as any) + (1 as any); (l as any) < ((a as any)[(u as any) + (1 as any)] as any); l++) {
    const h: any = (i as any)[l];
    let f: any = (l as any) - (1 as any);
    for (; (f as any) >= ((a as any)[u] as any) && ((((i as any)[f] as any).x as any) > ((h as any).x as any) || (((i as any)[f] as any).x as any) === ((h as any).x as any) && (((i as any)[f] as any).y as any) > ((h as any).y as any)); f--) (i as any)[(f as any) + (1 as any)] = (i as any)[f];
    (i as any)[(f as any) + (1 as any)] = h;
  }
  return i;
}
function $a(this: any, t: any, {
  project: n,
  origin: e
}: any): any {
  const s: any = ((t as any).map as any)((m: any): any => ((m as any).map as any)(n)),
    o: any = (m: any): any => {
      let g: any = 0,
        x: any = 0;
      for (const w of m) g += (w as any).x, x += (w as any).y;
      return {
        x: (g as any) / ((m as any).length as any),
        y: (x as any) / ((m as any).length as any)
      };
    },
    r: any = (o as any)((s as any)[0]),
    a: any = (o as any)((s as any)[((s as any).length as any) - (1 as any)]);
  if ((((Math as any).hypot as any)(((a as any).x as any) - ((r as any).x as any), ((a as any).y as any) - ((r as any).y as any)) as any) < (1e-4 as any)) {
    let m: any = (s as any)[0],
      g: any = 0;
    for (const x of s) {
      let w: any = 0;
      for (let v: any = 0; (v as any) < ((x as any).length as any); v++) {
        const b: any = (x as any)[v],
          A: any = (x as any)[((v as any) + (1 as any) as any) % ((x as any).length as any)];
        w += (((b as any).x as any) * ((A as any).y as any) as any) - (((A as any).x as any) * ((b as any).y as any) as any);
      }
      (((Math as any).abs as any)(w) as any) > (g as any) && (m = x, g = ((Math as any).abs as any)(w));
    }
    return m;
  }
  const c: any = ((s as any).map as any)((m: any): any => ((m as any).map as any)(({
      x: g,
      y: x
    }: any): any => (((g as any) - ((e as any).x as any) as any) * ((g as any) - ((e as any).x as any) as any) as any) + (((x as any) - ((e as any).y as any) as any) * ((x as any) - ((e as any).y as any) as any) as any))),
    i: any = ((c as any).map as any)((m: any): any => ((Math as any).max as any)(...m)),
    u: any = ((ka as any) * (((Math as any).max as any)(...i) as any) as any) + (Aa as any),
    l: any = (m: any, g: any): any => {
      const x: any = ((g as any) - (u as any) as any) / (wa as any);
      return (x as any) > (0 as any) && (m as any) < ((x as any) * (x as any) as any);
    },
    h: any = ((s as any).map as any)((m: any): any => ((m as any).map as any)((g: any): any => {
      const x: any = ((((Math as any).atan2 as any)(((g as any).y as any) - ((e as any).y as any), ((g as any).x as any) - ((e as any).x as any)) as any) + (e0 as any) as any) % (e0 as any);
      return (((Math as any).floor as any)(((x as any) / (e0 as any) as any) * (V as any)) as any) % (V as any);
    })),
    f: any = new (Float64Array as any)(V);
  let d: any = 0;
  const p: any = (m: any, g: any, x: any, w: any, v: any): any => {
      if ((l as any)(v, d)) return;
      let b: any = (w as any) - (x as any);
      (b as any) > ((V as any) / (2 as any) as any) ? b -= V : (b as any) < ((-V as any) / (2 as any) as any) && (b += V);
      const A: any = (b as any) < (0 as any) ? -1 : 1,
        E: any = ((Math as any).abs as any)(b);
      let P: any = (1 as any) / (0 as any);
      for (let R: any = -1; (R as any) <= ((E as any) + (1 as any) as any); R++) {
        const O: any = (((x as any) + ((A as any) * (R as any) as any) as any) + (V as any) as any) % (V as any);
        ((f as any)[O] as any) < (P as any) && (P = (f as any)[O]);
      }
      if ((l as any)(v, P)) return;
      const $: any = ((g as any).x as any) - ((m as any).x as any),
        D: any = ((g as any).y as any) - ((m as any).y as any),
        z: any = ((m as any).x as any) - ((e as any).x as any),
        B: any = ((m as any).y as any) - ((e as any).y as any);
      for (let R: any = -1; (R as any) <= ((E as any) + (1 as any) as any); R++) {
        const O: any = (((x as any) + ((A as any) * (R as any) as any) as any) + (V as any) as any) % (V as any),
          {
            x: H,
            y: K
          }: any = (Z1 as any)[O],
          U: any = ((H as any) * (D as any) as any) - ((K as any) * ($ as any) as any);
        if ((((Math as any).abs as any)(U) as any) < (1e-9 as any)) continue;
        const S: any = (((z as any) * (D as any) as any) - ((B as any) * ($ as any) as any) as any) / (U as any),
          Y: any = (((z as any) * (K as any) as any) - ((B as any) * (H as any) as any) as any) / (U as any);
        (S as any) > ((f as any)[O] as any) && (Y as any) >= (0 as any) && (Y as any) <= (1 as any) && ((f as any)[O] = S);
      }
    },
    y: any = ((((i as any).map as any)((m: any, g: any): any => g) as any).sort as any)((m: any, g: any): any => ((i as any)[g] as any) - ((i as any)[m] as any));
  for (const m of y) {
    const g: any = (s as any)[m];
    for (let x: any = 0; (x as any) < ((g as any).length as any); x++) {
      const w: any = ((x as any) + (1 as any) as any) % ((g as any).length as any);
      (p as any)((g as any)[x], (g as any)[w], ((h as any)[m] as any)[x], ((h as any)[m] as any)[w], ((Math as any).max as any)(((c as any)[m] as any)[x], ((c as any)[m] as any)[w]));
    }
    d = ((Math as any).min as any)(...f);
  }
  for (let m: any = 0; (m as any) < (((s as any).length as any) - (1 as any) as any); m++) {
    const g: any = (s as any)[m],
      x: any = (s as any)[(m as any) + (1 as any)];
    for (let w: any = 0; (w as any) < (((Math as any).min as any)((g as any).length, (x as any).length) as any); w++) (p as any)((g as any)[w], (x as any)[w], ((h as any)[m] as any)[w], ((h as any)[(m as any) + (1 as any)] as any)[w], ((Math as any).max as any)(((c as any)[m] as any)[w], ((c as any)[(m as any) + (1 as any)] as any)[w]));
  }
  return ((Z1 as any).flatMap as any)(({
    x: m,
    y: g
  }: any, x: any): any => ((f as any)[x] as any) > (0 as any) ? [{
    x: ((e as any).x as any) + ((m as any) * ((f as any)[x] as any) as any),
    y: ((e as any).y as any) + ((g as any) * ((f as any)[x] as any) as any)
  }] : []);
}
function Ta(this: any, t: any, n: any, e: any): any {
  switch ((t as any).kind) {
    case "front":
      return (Ra as any)((t as any).faceZ, n, e);
    case "loft":
      return (Fa as any)((t as any).surfaceZ, n, e);
    case "wrap":
      return (Oa as any)(t, n, e);
    case "wrapX":
      return (La as any)(t, n, e);
  }
}
function Ra(this: any, t: any, {
  loops: n,
  shiftY: e
}: any, s: any): any {
  if (!(((((s as any).rotate as any)({
    x: 0,
    y: 0,
    z: 1
  }) as any).z as any) > (.03 as any))) return [];
  const r: any = ((Math as any).sin as any)(e);
  return ((((n as any).filter as any)((a: any): any => ((a as any).length as any) >= (3 as any)) as any).map as any)((a: any): any => ((a as any).map as any)((c: any): any => ((s as any).project as any)({
    x: (c as any).x,
    y: ((c as any).y as any) - (r as any),
    z: t
  })));
}
function Fa(this: any, t: any, {
  loops: n,
  shiftY: e
}: any, {
  rotate: s,
  project: o
}: any): any {
  if (!((((s as any)({
    x: 0,
    y: 0,
    z: 1
  }) as any).z as any) >= (.05 as any))) return [];
  const a: any = ((Math as any).sin as any)(e),
    c: any = [];
  for (const i of n) {
    if (((i as any).length as any) < (3 as any)) continue;
    const u: any = ((i as any).map as any)((g: any): any => ({
      x: (g as any).x,
      y: ((g as any).y as any) - (a as any)
    }));
    let l: any = 0,
      h: any = 0;
    for (const g of u) l += (g as any).x, h += (g as any).y;
    l /= (u as any).length, h /= (u as any).length;
    const f: number = .004,
      d: any = (((t as any)((l as any) + (f as any), h) as any) - ((t as any)((l as any) - (f as any), h) as any) as any) / ((2 as any) * (f as any) as any),
      p: any = (((t as any)(l, (h as any) + (f as any)) as any) - ((t as any)(l, (h as any) - (f as any)) as any) as any) / ((2 as any) * (f as any) as any),
      y: any = ((Math as any).hypot as any)(d, p, 1);
    if ((((s as any)({
      x: (-d as any) / (y as any),
      y: (-p as any) / (y as any),
      z: (1 as any) / (y as any)
    }) as any).z as any) < (.12 as any)) continue;
    const m: any = (t as any)(l, h);
    ((c as any).push as any)(((u as any).map as any)((g: any): any => (o as any)({
      x: (g as any).x,
      y: (g as any).y,
      z: ((m as any) + ((((g as any).x as any) - (l as any) as any) * (d as any) as any) as any) + ((((g as any).y as any) - (h as any) as any) * (p as any) as any)
    })));
  }
  return c;
}
function Oa(this: any, t: any, {
  loops: n,
  shiftY: e
}: any, {
  rotate: s,
  project: o
}: any): any {
  const {
      wrapR: r,
      wrapY0: a,
      wrapY1: c,
      radiusAt: i,
      puffAt: u
    }: any = t,
    l: any = i ? .02 : .06,
    h: any = ((Math as any).min as any)((c as any) - (l as any), ((Math as any).max as any)((a as any) + (l as any), ((t as any).eyeY as any) - (e as any))),
    f: any = (v: any): any => ((Math as any).min as any)(c, ((Math as any).max as any)(a, v)),
    d: any = (v: any): any => {
      const b: any = [];
      for (const A of v) {
        const E: any = (f as any)((h as any) + ((A as any).y as any)),
          P: any = i ? (i as any)(E) : r,
          $: any = ((Math as any).max as any)(-2.6, ((Math as any).min as any)(2.6, ((A as any).x as any) / (((Math as any).max as any)(.12, P) as any)));
        let D: any = 0;
        i && (D = (-(((i as any)(((Math as any).min as any)(c, (E as any) + (.012 as any))) as any) - ((i as any)(((Math as any).max as any)(a, (E as any) - (.012 as any))) as any)) as any) / ((2 as any) * (.012 as any) as any)), (((s as any)({
          x: ((Math as any).sin as any)($),
          y: D,
          z: ((Math as any).cos as any)($)
        }) as any).z as any) >= (.05 as any) && ((b as any).push as any)((o as any)({
          x: (P as any) * (((Math as any).sin as any)($) as any),
          y: E,
          z: (P as any) * (((Math as any).cos as any)($) as any)
        }));
      }
      return b;
    },
    p: any = (v: any): any => {
      if (!u || ((v as any).length as any) === (0 as any)) return [];
      let b: any = 0,
        A: any = 0;
      for (const D of v) b += (D as any).x, A += (D as any).y;
      const E: any = (u as any)((b as any) / ((v as any).length as any), (f as any)((h as any) + ((A as any) / ((v as any).length as any) as any))),
        P: any = ((s as any)({
          x: 0,
          y: 0,
          z: 1
        }) as any).z,
        $: any = [];
      for (const D of v) {
        const z: any = ((D as any).x as any) - ((E as any).x as any),
          B: any = ((f as any)((h as any) + ((D as any).y as any)) as any) - ((E as any).y as any),
          R: any = ((Math as any).hypot as any)(z, B);
        let O: any = ((Math as any).min as any)((R as any) / ((E as any).r as any), ((Math as any).PI as any) - (.02 as any));
        const H: any = (R as any) > (1e-9 as any) ? (z as any) / (R as any) : 1,
          K: any = (R as any) > (1e-9 as any) ? (B as any) / (R as any) : 0,
          U: any = ((s as any)({
            x: H,
            y: K,
            z: 0
          }) as any).z,
          S: any = (N: any): any => ((U as any) * (((Math as any).sin as any)(N) as any) as any) + ((P as any) * (((Math as any).cos as any)(N) as any) as any);
        if (((S as any)(O) as any) < (.06 as any) && (P as any) > (.06 as any)) {
          let N: any = 0,
            nt: any = O;
          for (let st: any = 0; (st as any) < (20 as any); st++) {
            const At: any = ((N as any) + (nt as any) as any) / (2 as any);
            ((S as any)(At) as any) >= (.06 as any) ? N = At : nt = At;
          }
          O = N;
        }
        const Y: any = ((E as any).r as any) * (((Math as any).sin as any)(O) as any),
          tt: any = {
            x: (H as any) * (((Math as any).sin as any)(O) as any),
            y: (K as any) * (((Math as any).sin as any)(O) as any),
            z: ((Math as any).cos as any)(O)
          };
        (((s as any)(tt) as any).z as any) >= (.05 as any) && (($ as any).push as any)((o as any)({
          x: ((E as any).x as any) + ((H as any) * (Y as any) as any),
          y: ((E as any).y as any) + ((K as any) * (Y as any) as any),
          z: ((E as any).z as any) + (((E as any).r as any) * (((Math as any).cos as any)(O) as any) as any)
        }));
      }
      return $;
    };
  let y: any = (1 as any) / (0 as any),
    m: any = (-1 as any) / (0 as any);
  for (const v of n) for (const b of v) ((b as any).y as any) < (y as any) && (y = (b as any).y), ((b as any).y as any) > (m as any) && (m = (b as any).y);
  let g: any = 0;
  ((m as any) - (y as any) as any) <= ((c as any) - (a as any) as any) && (((h as any) + (y as any) as any) < (a as any) ? g = (a as any) - ((h as any) + (y as any) as any) : ((h as any) + (m as any) as any) > (c as any) && (g = (c as any) - ((h as any) + (m as any) as any)));
  const x: any = (g as any) === (0 as any) ? n : ((n as any).map as any)((v: any): any => ((v as any).map as any)((b: any): any => ({
      x: (b as any).x,
      y: ((b as any).y as any) + (g as any)
    }))),
    w: any = u ? p : d;
  return ((((x as any).map as any)(w) as any).filter as any)((v: any): any => ((v as any).length as any) > (2 as any));
}
function La(this: any, t: any, {
  loops: n,
  shiftY: e
}: any, {
  rotate: s,
  project: o
}: any): any {
  const {
      wrapR: r,
      wrapX0: a,
      wrapX1: c,
      radiusAtX: i
    }: any = t,
    u: any = ((Math as any).max as any)(-2.4, ((Math as any).min as any)(2.4, (-e as any) / (r as any)));
  let l: any = (1 as any) / (0 as any),
    h: any = (-1 as any) / (0 as any);
  for (const p of n) for (const y of p) ((y as any).x as any) < (l as any) && (l = (y as any).x), ((y as any).x as any) > (h as any) && (h = (y as any).x);
  let f: any = 0;
  return ((h as any) - (l as any) as any) <= ((c as any) - (a as any) as any) && ((l as any) < (a as any) ? f = (a as any) - (l as any) : (h as any) > (c as any) && (f = (c as any) - (h as any))), ((((((f as any) === (0 as any) ? n : ((n as any).map as any)((p: any): any => ((p as any).map as any)((y: any): any => ({
    x: ((y as any).x as any) + (f as any),
    y: (y as any).y
  })))) as any).map as any)((p: any): any => {
    const y: any = [];
    for (const m of p) {
      const g: any = ((Math as any).min as any)(c, ((Math as any).max as any)(a, (m as any).x)),
        x: any = (i as any)(g),
        w: any = (u as any) + (((Math as any).max as any)(-2.6, ((Math as any).min as any)(2.6, ((m as any).y as any) / (((Math as any).max as any)(.12, r) as any))) as any),
        v: number = .012,
        b: any = (-(((i as any)(((Math as any).min as any)(c, (g as any) + (v as any))) as any) - ((i as any)(((Math as any).max as any)(a, (g as any) - (v as any))) as any)) as any) / ((2 as any) * (v as any) as any);
      (((s as any)({
        x: b,
        y: ((Math as any).sin as any)(w),
        z: ((Math as any).cos as any)(w)
      }) as any).z as any) >= (.05 as any) && ((y as any).push as any)((o as any)({
        x: g,
        y: (x as any) * (((Math as any).sin as any)(w) as any),
        z: (x as any) * (((Math as any).cos as any)(w) as any)
      }));
    }
    return y;
  }) as any).filter as any)((p: any): any => ((p as any).length as any) > (2 as any));
}
const Ot: any = {
    kind: "extrusion",
    halfDepth: .36,
    bevel: .22
  },
  Ba: any = {
    cloud: {
      kind: "loft",
      depth: .72
    },
    square: Ot,
    sparkle: Ot,
    clover: Ot,
    heartChubby: {
      kind: "loft",
      depth: .62
    },
    starFlower: Ot,
    teardrop: {
      kind: "revolve"
    },
    tablet: {
      kind: "pill",
      axis: 0
    },
    wedge: {
      kind: "revolve"
    },
    house: Ot,
    star6: {
      kind: "extrusion",
      halfDepth: .3,
      bevel: .18
    },
    pebble: {
      kind: "revolve"
    },
    bean: {
      kind: "inscribedBalls"
    },
    egg: {
      kind: "revolve"
    },
    squircle: {
      kind: "roundedSlab",
      halfDepth: .28,
      edge: .11
    },
    capsule: {
      kind: "pill",
      axis: 1
    },
    cylinder: {
      kind: "revolve"
    },
    hex: Ot,
    gem: {
      kind: "revolve"
    },
    crystal: {
      kind: "crystal"
    },
    shield: {
      kind: "revolve"
    },
    dome: {
      kind: "revolve"
    },
    arch: {
      kind: "revolve"
    },
    leaf: {
      kind: "revolve"
    }
  },
  L0: any = ((Math as any).PI as any) * (2 as any),
  ln: number = 1024,
  Na: any = {
    yaw: 0,
    pitch: 0,
    roll: 0
  },
  un: number = 4,
  V1: number = 64,
  Q1: number = 96,
  W1: number = 4,
  Da: number = .72,
  J1: number = 16,
  te: number = 33,
  qa: number = 40,
  ne: number = 1e-9,
  ee: number = 1e-9,
  za: number = 1e-15,
  se: any = new (Map as any)();
function Ga(this: any, t: any): any {
  const n: any = ((se as any).get as any)(t);
  if ((n as any) != (null as any)) return n;
  const e: any = (Ya as any)(t, (Ba as any)[t]);
  return ((se as any).set as any)(t, e), e;
}
function Ya(this: any, t: any, n: any): any {
  if (((n as any).kind as any) === ("inscribedBalls" as any)) return {
    kind: "balls",
    balls: (Va as any)(((oe as any)((oa as any)()) as any)[0])
  };
  const e: any = (oe as any)((H0 as any)(t));
  switch ((n as any).kind) {
    case "extrusion":
      return (Ha as any)(e, (n as any).halfDepth, (n as any).bevel);
    case "revolve":
      return (Ka as any)((Vt as any)((e as any)[0]));
    case "roundedSlab":
      return (Ua as any)((Qa as any)((Vt as any)((e as any)[0])), (n as any).halfDepth, (n as any).edge);
    case "pill":
      return {
        kind: "balls",
        balls: (ja as any)((Vt as any)((e as any)[0]), (n as any).axis)
      };
    case "crystal":
      return (Xa as any)();
    case "loft":
      return (Za as any)((Vt as any)((e as any)[0]), (n as any).depth);
  }
}
function oe(this: any, t: any): any {
  const n: any = (Xn as any)(t, ln),
    e: any = (ln as any) / (2 as any);
  return (((cs as any)(t, Na, ln) as any).map as any)((s: any): any => ((s as any).map as any)((o: any, r: any): any => ((r as any) % (2 as any) as any) === (0 as any) ? ((o as any) - (e as any) as any) / (n as any) : ((e as any) - (o as any) as any) / (n as any)));
}
function Ha(this: any, t: any, n: any, e: any): any {
  const s: any = (((t as any)[0] as any).length as any) / (2 as any),
    o: any = ((Array as any).from as any)({
      length: s
    }, (b: any, A: any): any => {
      const E: any = (t as any)[((2 as any) + ((un as any) * (s as any) as any) as any) + (A as any)];
      return [(E as any)[0], (E as any)[1]];
    }),
    r: any = (ds as any)(o),
    {
      x0: a,
      x1: c,
      y0: i,
      y1: u
    }: any = (Zn as any)(r),
    l: any = ((a as any) + (c as any) as any) / (2 as any),
    h: any = ((i as any) + (u as any) as any) / (2 as any),
    f: any = ((Math as any).max as any)(1e-4, ((Math as any).min as any)(((c as any) - (a as any) as any) / (2 as any), ((u as any) - (i as any) as any) / (2 as any))),
    d: any = ((Math as any).min as any)((n as any) * (.8 as any), e),
    p: any = (b: any): any => {
      const A: any = ((b as any) / (un as any) as any) * (((Math as any).PI as any) / (2 as any) as any);
      return {
        z: ((n as any) - (d as any) as any) + ((d as any) * (((Math as any).sin as any)(A) as any) as any),
        scale: (1 as any) - (((d as any) / (f as any) as any) * ((1 as any) - (((Math as any).cos as any)(A) as any) as any) as any)
      };
    },
    y: any = ((Array as any).from as any)({
      length: (un as any) + (1 as any)
    }, (b: any, A: any): any => (p as any)(A)),
    g: any = (([...((((y as any).map as any)(({
      z: b,
      scale: A
    }: any): any => ({
      z: -b,
      scale: A
    })) as any).reverse as any)(), ...y] as any).map as any)(({
      z: b,
      scale: A
    }: any): any => ((r as any).map as any)(([E, P]: any): any => [(l as any) + (((E as any) - (l as any) as any) * (A as any) as any), (h as any) + (((P as any) - (h as any) as any) * (A as any) as any), b])),
    {
      vertices: x,
      faces: w
    }: any = (us as any)(g, !0),
    v: any = ((w as any).length as any) - (1 as any);
  return {
    kind: "mesh",
    vertices: x,
    faces: ((w as any).map as any)((b: any, A: any): any => ({
      corners: b,
      isBounding: (A as any) === (0 as any) || (A as any) === (v as any)
    }))
  };
}
function Ka(this: any, t: any): any {
  const n: any = new (Map as any)();
  for (const [c, i] of t) (c as any) > (-ne as any) && ((n as any).set as any)(i, ((Math as any).max as any)(((n as any).get as any)(i) ?? 0, c));
  const e: any = [],
    s: any = (c: any): any => (((e as any).push as any)(c) as any) - (1 as any),
    o: any = (((([...n] as any).sort as any)((c: any, i: any): any => ((i as any)[0] as any) - ((c as any)[0] as any)) as any).map as any)(([c, i]: any): any => (i as any) <= (ne as any) ? [(s as any)([0, c, 0])] : ((Array as any).from as any)({
      length: V1
    }, (u: any, l: any): any => {
      const h: any = ((l as any) / (V1 as any) as any) * (L0 as any);
      return (s as any)([(i as any) * (((Math as any).sin as any)(h) as any), c, (i as any) * (((Math as any).cos as any)(h) as any)]);
    })),
    r: any = (([(o as any)[0], (o as any)[((o as any).length as any) - (1 as any)]] as any).filter as any)((c: any): any => ((c as any).length as any) > (1 as any)),
    a: any = ((((o as any).slice as any)(1) as any).flatMap as any)((c: any, i: any): any => (Wa as any)((o as any)[i], c));
  return (Ja as any)(e, [...r, ...a]);
}
function Ua(this: any, t: any, n: any, e: any): any {
  const s: any = (t as any).length,
    o: any = ((t as any).map as any)((a: any, c: any): any => {
      const i: any = (t as any)[(((c as any) - (1 as any) as any) + (s as any) as any) % (s as any)],
        u: any = (t as any)[((c as any) + (1 as any) as any) % (s as any)];
      let l: any = ((u as any)[1] as any) - ((i as any)[1] as any),
        h: any = -(((u as any)[0] as any) - ((i as any)[0] as any));
      const f: any = ((Math as any).hypot as any)(l, h) || 1;
      return l /= f, h /= f, (((l as any) * ((a as any)[0] as any) as any) + ((h as any) * ((a as any)[1] as any) as any) as any) < (0 as any) ? [-l, -h] : [l, h];
    }),
    r: any = [];
  return ((t as any).forEach as any)(([a, c]: any, i: any): any => {
    for (let u: any = 0; (u as any) <= (W1 as any); u++) {
      const l: any = ((u as any) / (W1 as any) as any) * (((Math as any).PI as any) / (2 as any) as any),
        h: any = (e as any) * ((1 as any) - (((Math as any).cos as any)(l) as any) as any),
        f: any = ((n as any) - (e as any) as any) + ((e as any) * (((Math as any).sin as any)(l) as any) as any),
        d: any = (a as any) - ((((o as any)[i] as any)[0] as any) * (h as any) as any),
        p: any = (c as any) - ((((o as any)[i] as any)[1] as any) * (h as any) as any);
      ((r as any).push as any)([d, p, f], [d, p, -f]);
    }
  }), (hs as any)(r);
}
function ja(this: any, t: any, n: any): any {
  const e: any = ((Math as any).max as any)(...((t as any).map as any)((o: any): any => ((Math as any).abs as any)((o as any)[(1 as any) - (n as any)]))),
    s: any = (((Math as any).max as any)(...((t as any).map as any)((o: any): any => ((Math as any).abs as any)((o as any)[n]))) as any) - (e as any);
  return ((Array as any).from as any)({
    length: te
  }, (o: any, r: any): any => {
    const a: any = (-s as any) + (((2 as any) * (s as any) as any) * ((r as any) / ((te as any) - (1 as any) as any) as any) as any);
    return {
      center: (n as any) === (0 as any) ? [a, 0, 0] : [0, a, 0],
      radius: e
    };
  });
}
function Xa(this: any): any {
  const t: number = 1.1600000000000001,
    n: number = .12,
    e: any = [[0, (t as any) - (n as any), 0], [0, (-t as any) + (n as any), 0]],
    s: any = (.54 as any) - ((n as any) * (.25 as any) as any),
    o: any = (.64 as any) - (n as any);
  for (const a of [-1, 1]) for (let c: any = 0; (c as any) < (6 as any); c++) {
    const i: any = ((c as any) / (6 as any) as any) * (L0 as any);
    ((e as any).push as any)([(o as any) * (((Math as any).cos as any)(i) as any), (a as any) * (s as any), (o as any) * (((Math as any).sin as any)(i) as any)]);
  }
  const r: any = [];
  for (const [a, c, i] of e) for (let u: any = 0; (u as any) <= (8 as any); u++) {
    const l: any = ((u as any) / (8 as any) as any) * ((Math as any).PI as any),
      h: any = ((Math as any).sin as any)(l),
      f: any = (u as any) === (0 as any) || (u as any) === (8 as any) ? 1 : 14;
    for (let d: any = 0; (d as any) < (f as any); d++) {
      const p: any = ((d as any) / (f as any) as any) * (L0 as any);
      ((r as any).push as any)([(a as any) + (((n as any) * (h as any) as any) * (((Math as any).sin as any)(p) as any) as any), (c as any) + ((n as any) * (((Math as any).cos as any)(l) as any) as any), (i as any) + (((n as any) * (h as any) as any) * (((Math as any).cos as any)(p) as any) as any)]);
    }
  }
  return (hs as any)(r);
}
function Za(this: any, t: any, n: any): any {
  const e: any = (ds as any)(t),
    {
      x0: s,
      x1: o,
      y0: r,
      y1: a
    }: any = (Zn as any)(e),
    c: any = ((s as any) + (o as any) as any) / (2 as any),
    i: any = ((r as any) + (a as any) as any) / (2 as any),
    u: any = ((Array as any).from as any)({
      length: (J1 as any) + (1 as any)
    }, (f: any, d: any): any => {
      const p: any = ((-(Math as any).PI as any) / (2 as any) as any) + ((((Math as any).PI as any) * (d as any) as any) / (J1 as any) as any),
        y: any = ((Math as any).pow as any)(((Math as any).max as any)(0, ((Math as any).cos as any)(p)), Da),
        m: any = (n as any) * (((Math as any).sin as any)(p) as any);
      return ((e as any).map as any)(([g, x]: any): any => [(c as any) + (((g as any) - (c as any) as any) * (y as any) as any), (i as any) + (((x as any) - (i as any) as any) * (y as any) as any), m]);
    }),
    {
      vertices: l,
      faces: h
    }: any = (us as any)(u, !1);
  return {
    kind: "mesh",
    vertices: l,
    faces: ((h as any).map as any)((f: any): any => ({
      corners: f,
      isBounding: !1
    }))
  };
}
function Va(this: any, t: any): any {
  const n: any = (((Vt as any)(t) as any).map as any)(([l, h]: any): any => [(M as any) + ((M as any) * (l as any) as any), (M as any) - ((M as any) * (h as any) as any)]),
    {
      x0: e,
      x1: s,
      y0: o,
      y1: r
    }: any = (Zn as any)(n),
    a: any = (l: any, h: any): any => {
      let f: any = !1;
      for (let d: any = 0, p: any = ((n as any).length as any) - (1 as any); (d as any) < ((n as any).length as any); p = d++) {
        const [y, m]: any = (n as any)[d],
          [g, x]: any = (n as any)[p];
        ((m as any) > (h as any) as any) != ((x as any) > (h as any) as any) && (l as any) < ((y as any) + ((((g as any) - (y as any) as any) * ((h as any) - (m as any) as any) as any) / ((x as any) - (m as any) as any) as any) as any) && (f = !f);
      }
      return f;
    },
    c: any = (((Math as any).max as any)((s as any) - (e as any), (r as any) - (o as any)) as any) / (qa as any),
    i: any = [];
  for (let l: any = (o as any) + ((c as any) / (2 as any) as any); (l as any) < (r as any); l += c) for (let h: any = (e as any) + ((c as any) / (2 as any) as any); (h as any) < (s as any); h += c) {
    if (!(a as any)(h, l)) continue;
    let f: any = (1 as any) / (0 as any);
    for (const [p, y] of n) f = ((Math as any).min as any)(f, (((p as any) - (h as any) as any) ** (2 as any) as any) + (((y as any) - (l as any) as any) ** (2 as any) as any));
    const d: any = ((Math as any).sqrt as any)(f);
    (d as any) > (c as any) && ((i as any).push as any)({
      x: h,
      y: l,
      r: d
    });
  }
  ((i as any).sort as any)((l: any, h: any): any => ((h as any).r as any) - ((l as any).r as any));
  const u: any = [];
  for (const l of i) ((u as any).some as any)((h: any): any => ((((Math as any).hypot as any)(((l as any).x as any) - ((h as any).x as any), ((l as any).y as any) - ((h as any).y as any)) as any) + ((l as any).r as any) as any) <= (((h as any).r as any) + ((c as any) * (.25 as any) as any) as any)) || ((u as any).push as any)(l);
  return ((u as any).map as any)((l: any): any => ({
    center: [(((l as any).x as any) - (M as any) as any) / (M as any), (-(((l as any).y as any) - (M as any)) as any) / (M as any), 0],
    radius: ((l as any).r as any) / (M as any)
  }));
}
function Qa(this: any, t: any): any {
  return ((Array as any).from as any)({
    length: Q1
  }, (n: any, e: any): any => {
    const s: any = ((e as any) / (Q1 as any) as any) * (L0 as any),
      o: any = ((Math as any).cos as any)(s),
      r: any = -((Math as any).sin as any)(s);
    let a: any = 0;
    return ((t as any).forEach as any)((c: any, i: any): any => {
      const u: any = (t as any)[((i as any) + (1 as any) as any) % ((t as any).length as any)],
        l: any = ((u as any)[0] as any) - ((c as any)[0] as any),
        h: any = ((u as any)[1] as any) - ((c as any)[1] as any),
        f: any = ((o as any) * (h as any) as any) - ((r as any) * (l as any) as any);
      if ((((Math as any).abs as any)(f) as any) < (za as any)) return;
      const d: any = ((((c as any)[0] as any) * (h as any) as any) - (((c as any)[1] as any) * (l as any) as any) as any) / (f as any),
        p: any = ((((c as any)[0] as any) * (r as any) as any) - (((c as any)[1] as any) * (o as any) as any) as any) / (f as any);
      (d as any) > (a as any) && (p as any) >= (-ee as any) && (p as any) <= ((1 as any) + (ee as any) as any) && (a = d);
    }), [(o as any) * (a as any), (r as any) * (a as any)];
  });
}
function us(this: any, t: any, n: any): any {
  const e: any = ((t as any)[0] as any).length,
    s: any = ((t as any).flat as any)(),
    o: any = [],
    r: any = (a: any, c: any): any => ((a as any) * (e as any) as any) + ((c as any) % (e as any) as any);
  n && ((o as any).push as any)(((Array as any).from as any)({
    length: e
  }, (a: any, c: any): any => (r as any)(0, ((e as any) - (1 as any) as any) - (c as any))));
  for (let a: any = 1; (a as any) < ((t as any).length as any); a++) for (let c: any = 0; (c as any) < (e as any); c++) ((o as any).push as any)([(r as any)((a as any) - (1 as any), c), (r as any)((a as any) - (1 as any), (c as any) + (1 as any)), (r as any)(a, (c as any) + (1 as any)), (r as any)(a, c)]);
  return n && ((o as any).push as any)(((Array as any).from as any)({
    length: e
  }, (a: any, c: any): any => (r as any)(((t as any).length as any) - (1 as any), c))), {
    vertices: s,
    faces: o
  };
}
function hs(this: any, t: any): any {
  return {
    kind: "mesh",
    vertices: t,
    faces: (((Er as any)(t) as any).map as any)((n: any): any => ({
      corners: n,
      isBounding: !0
    }))
  };
}
function Wa(this: any, t: any, n: any): any {
  return ((t as any).length as any) === (1 as any) && ((n as any).length as any) === (1 as any) ? [] : ((t as any).length as any) === (1 as any) ? ((n as any).map as any)((e: any, s: any): any => [(t as any)[0], e, (n as any)[((s as any) + (1 as any) as any) % ((n as any).length as any)]]) : ((n as any).length as any) === (1 as any) ? ((t as any).map as any)((e: any, s: any): any => [e, (n as any)[0], (t as any)[((s as any) + (1 as any) as any) % ((t as any).length as any)]]) : ((t as any).map as any)((e: any, s: any): any => [e, (n as any)[s], (n as any)[((s as any) + (1 as any) as any) % ((n as any).length as any)], (t as any)[((s as any) + (1 as any) as any) % ((t as any).length as any)]]);
}
function Ja(this: any, t: any, n: any): any {
  const e: any = (t as any).length,
    s: any = [(((t as any).reduce as any)((r: any, a: any): any => (r as any) + ((a as any)[0] as any), 0) as any) / (e as any), (((t as any).reduce as any)((r: any, a: any): any => (r as any) + ((a as any)[1] as any), 0) as any) / (e as any), (((t as any).reduce as any)((r: any, a: any): any => (r as any) + ((a as any)[2] as any), 0) as any) / (e as any)],
    o: any = ((n as any).map as any)((r: any): any => {
      const [a, c, i]: any = (fs as any)(t, r),
        u: any = ((r as any).reduce as any)((f: any, d: any): any => [((f as any)[0] as any) + (((t as any)[d] as any)[0] as any), ((f as any)[1] as any) + (((t as any)[d] as any)[1] as any), ((f as any)[2] as any) + (((t as any)[d] as any)[2] as any)], [0, 0, 0]),
        l: any = (r as any).length;
      return {
        corners: ((((a as any) * ((((u as any)[0] as any) / (l as any) as any) - ((s as any)[0] as any) as any) as any) + ((c as any) * ((((u as any)[1] as any) / (l as any) as any) - ((s as any)[1] as any) as any) as any) as any) + ((i as any) * ((((u as any)[2] as any) / (l as any) as any) - ((s as any)[2] as any) as any) as any) as any) < (0 as any) ? (([...r] as any).reverse as any)() : r,
        isBounding: !0
      };
    });
  return {
    kind: "mesh",
    vertices: t,
    faces: o
  };
}
function fs(this: any, t: any, n: any): any {
  let e: any = 0,
    s: any = 0,
    o: any = 0;
  for (let r: any = 0; (r as any) < ((n as any).length as any); r++) {
    const a: any = (t as any)[(n as any)[r]],
      c: any = (t as any)[(n as any)[((r as any) + (1 as any) as any) % ((n as any).length as any)]];
    e += (((a as any)[1] as any) - ((c as any)[1] as any) as any) * (((a as any)[2] as any) + ((c as any)[2] as any) as any), s += (((a as any)[2] as any) - ((c as any)[2] as any) as any) * (((a as any)[0] as any) + ((c as any)[0] as any) as any), o += (((a as any)[0] as any) - ((c as any)[0] as any) as any) * (((a as any)[1] as any) + ((c as any)[1] as any) as any);
  }
  return [e, s, o];
}
function ds(this: any, t: any): any {
  let n: any = 0;
  return ((t as any).forEach as any)((e: any, s: any): any => {
    const o: any = (t as any)[((s as any) + (1 as any) as any) % ((t as any).length as any)];
    n += (((e as any)[0] as any) * ((o as any)[1] as any) as any) - (((o as any)[0] as any) * ((e as any)[1] as any) as any);
  }), (n as any) < (0 as any) ? (([...t] as any).reverse as any)() : t;
}
function Zn(this: any, t: any): any {
  let n: any = (1 as any) / (0 as any),
    e: any = (-1 as any) / (0 as any),
    s: any = (1 as any) / (0 as any),
    o: any = (-1 as any) / (0 as any);
  for (const [r, a] of t) n = ((Math as any).min as any)(n, r), e = ((Math as any).max as any)(e, r), s = ((Math as any).min as any)(s, a), o = ((Math as any).max as any)(o, a);
  return {
    x0: n,
    x1: e,
    y0: s,
    y1: o
  };
}
function Vt(this: any, t: any): any {
  return ((Array as any).from as any)({
    length: ((t as any).length as any) / (2 as any)
  }, (n: any, e: any): any => [(t as any)[(2 as any) * (e as any)], (t as any)[((2 as any) * (e as any) as any) + (1 as any)]]);
}
const Qt: number = 1024,
  re: any = (2 as any) ** (23 as any),
  tc: any = (2 as any) ** (25 as any),
  gt: any = (2 as any) ** (26 as any);
class K0 {
  [key: string]: any;
  xs: any = [];
  ys: any = [];
  #t: any = new (Map as any)();
  id(n: any, e: any): any {
    const s: any = (((n as any) + (re as any) as any) * (tc as any) as any) + ((e as any) + (re as any) as any);
    let o: any = ((this.#t as any).get as any)(s);
    return (o as any) == (null as any) && (o = ((this as any).xs as any).length, (((this as any).xs as any).push as any)(n), (((this as any).ys as any).push as any)(e), ((this.#t as any).set as any)(s, o)), o;
  }
}
function Vn(this: any, t: any): any {
  let n: any = "";
  for (const e of t) {
    n += `M${(xt as any)((e as any)[0])} ${(xt as any)((e as any)[1])}`;
    for (let s: any = 2; (s as any) < ((e as any).length as any); s += 2) n += ` ${(xt as any)((e as any)[s])} ${(xt as any)((e as any)[(s as any) + (1 as any)])}`;
    n += "Z";
  }
  return n;
}
function nc(this: any, t: any): any {
  const n: any = (ec as any)(t),
    e: any = (sc as any)(n);
  return (ic as any)((cc as any)((ac as any)(((n as any).flatMap as any)((s: any): any => (oc as any)(s, e)))));
}
function ec(this: any, t: any): any {
  const n: any = new (K0 as any)(),
    e: any = new (Map as any)(),
    s: any = [],
    o: any = [],
    r: any = (i: any): any => {
      const u: any = (uc as any)(i);
      if ((u as any) === (0 as any)) return;
      const l: any = ((i as any).length as any) / (2 as any);
      (o as any).length = 0;
      for (let h: any = 0; (h as any) < (l as any); h++) {
        const f: any = (u as any) > (0 as any) ? h : ((l as any) - (1 as any) as any) - (h as any);
        ((o as any).push as any)(((n as any).id as any)((i as any)[(2 as any) * (f as any)], (i as any)[((2 as any) * (f as any) as any) + (1 as any)]));
      }
      for (let h: any = 0; (h as any) < (l as any); h++) {
        const f: any = (o as any)[h],
          d: any = (o as any)[((h as any) + (1 as any) as any) % (l as any)];
        if ((f as any) === (d as any)) continue;
        const p: any = ((d as any) * (gt as any) as any) + (f as any),
          y: any = ((e as any).get as any)(p) ?? 0;
        (y as any) > (1 as any) ? ((e as any).set as any)(p, (y as any) - (1 as any)) : (y as any) === (1 as any) ? ((e as any).delete as any)(p) : ((e as any).set as any)(((f as any) * (gt as any) as any) + (d as any), ((((e as any).get as any)(((f as any) * (gt as any) as any) + (d as any)) ?? 0) as any) + (1 as any));
      }
    };
  for (const i of t) {
    (s as any).length = (i as any).length;
    for (let l: any = 0; (l as any) < ((i as any).length as any); l++) (s as any)[l] = ((Math as any).round as any)(((i as any)[l] as any) * (Qt as any));
    const u: any = ((s as any).length as any) === (8 as any) ? (lc as any)(s) : null;
    if ((u as any) == (null as any)) (r as any)(s);else for (const l of u) (r as any)(l);
  }
  const {
    xs: a,
    ys: c
  }: any = n;
  return (([...e] as any).map as any)(([i, u]: any): any => {
    const l: any = ((Math as any).floor as any)((i as any) / (gt as any)),
      h: any = (i as any) - ((l as any) * (gt as any) as any);
    return {
      ax: (a as any)[l],
      ay: (c as any)[l],
      bx: (a as any)[h],
      by: (c as any)[h],
      count: u
    };
  });
}
function sc(this: any, t: any): any {
  const n: any = new (K0 as any)();
  for (const r of t) ((n as any).id as any)((r as any).ax, (r as any).ay), ((n as any).id as any)((r as any).bx, (r as any).by);
  const e: any = ((((t as any).map as any)((r: any, a: any): any => a) as any).sort as any)((r: any, a: any): any => ((hn as any)((t as any)[r]) as any) - ((hn as any)((t as any)[a]) as any));
  ((e as any).forEach as any)((r: any, a: any): any => {
    const c: any = (t as any)[r],
      i: any = ((Math as any).max as any)((c as any).ax, (c as any).bx);
    for (let u: any = (a as any) + (1 as any); (u as any) < ((e as any).length as any); u++) {
      const l: any = (t as any)[(e as any)[u]];
      if (((hn as any)(l) as any) > (i as any)) break;
      if ((((Math as any).min as any)((l as any).ay, (l as any).by) as any) > (((Math as any).max as any)((c as any).ay, (c as any).by) as any) || (((Math as any).max as any)((l as any).ay, (l as any).by) as any) < (((Math as any).min as any)((c as any).ay, (c as any).by) as any)) continue;
      const h: any = ((Math as any).sign as any)((et as any)((c as any).ax, (c as any).ay, (c as any).bx, (c as any).by, (l as any).ax, (l as any).ay)),
        f: any = ((Math as any).sign as any)((et as any)((c as any).ax, (c as any).ay, (c as any).bx, (c as any).by, (l as any).bx, (l as any).by)),
        d: any = (et as any)((l as any).ax, (l as any).ay, (l as any).bx, (l as any).by, (c as any).ax, (c as any).ay),
        p: any = (et as any)((l as any).ax, (l as any).ay, (l as any).bx, (l as any).by, (c as any).bx, (c as any).by);
      if (((h as any) * (f as any) as any) >= (0 as any) || ((((Math as any).sign as any)(d) as any) * (((Math as any).sign as any)(p) as any) as any) >= (0 as any)) continue;
      const y: any = (d as any) / ((d as any) - (p as any) as any);
      ((n as any).id as any)(((Math as any).round as any)(((c as any).ax as any) + ((((c as any).bx as any) - ((c as any).ax as any) as any) * (y as any) as any)), ((Math as any).round as any)(((c as any).ay as any) + ((((c as any).by as any) - ((c as any).ay as any) as any) * (y as any) as any)));
    }
  });
  const {
    xs: s,
    ys: o
  }: any = n;
  return ((((s as any).map as any)((r: any, a: any): any => ({
    x: r,
    y: (o as any)[a]
  })) as any).sort as any)((r: any, a: any): any => ((r as any).x as any) - ((a as any).x as any));
}
function oc(this: any, t: any, n: any): any {
  const e: any = ((t as any).bx as any) - ((t as any).ax as any),
    s: any = ((t as any).by as any) - ((t as any).ay as any),
    o: any = (((Math as any).abs as any)(e) as any) + (((Math as any).abs as any)(s) as any),
    r: any = (((Math as any).min as any)((t as any).ay, (t as any).by) as any) - (.5 as any),
    a: any = (((Math as any).max as any)((t as any).ay, (t as any).by) as any) + (.5 as any),
    c: any = (((Math as any).max as any)((t as any).ax, (t as any).bx) as any) + (.5 as any),
    i: any = [];
  for (let l: any = (rc as any)(n, (((Math as any).min as any)((t as any).ax, (t as any).bx) as any) - (.5 as any)); (l as any) < ((n as any).length as any) && (((n as any)[l] as any).x as any) <= (c as any); l++) {
    const {
      x: h,
      y: f
    }: any = (n as any)[l];
    (f as any) < (r as any) || (f as any) > (a as any) || ((2 as any) * (((Math as any).abs as any)((et as any)((t as any).ax, (t as any).ay, (t as any).bx, (t as any).by, h, f)) as any) as any) > (o as any) || ((i as any).push as any)({
      t: ((((h as any) - ((t as any).ax as any) as any) * (e as any) as any) + (((f as any) - ((t as any).ay as any) as any) * (s as any) as any) as any) / (((e as any) * (e as any) as any) + ((s as any) * (s as any) as any) as any),
      x: h,
      y: f
    });
  }
  ((i as any).sort as any)((l: any, h: any): any => ((l as any).t as any) - ((h as any).t as any));
  const u: any = [];
  for (let l: any = 1; (l as any) < ((i as any).length as any); l++) {
    const h: any = (i as any)[(l as any) - (1 as any)],
      f: any = (i as any)[l];
    (((h as any).x as any) !== ((f as any).x as any) || ((h as any).y as any) !== ((f as any).y as any)) && ((u as any).push as any)({
      ax: (h as any).x,
      ay: (h as any).y,
      bx: (f as any).x,
      by: (f as any).y,
      count: (t as any).count
    });
  }
  return u;
}
function rc(this: any, t: any, n: any): any {
  let e: any = 0,
    s: any = (t as any).length;
  for (; (e as any) < (s as any);) {
    const o: any = ((e as any) + (s as any) as any) >> (1 as any);
    (((t as any)[o] as any).x as any) < (n as any) ? e = (o as any) + (1 as any) : s = o;
  }
  return e;
}
function ac(this: any, t: any): any {
  const n: any = new (K0 as any)(),
    e: any = new (Map as any)();
  for (const a of t) {
    const c: any = ((n as any).id as any)((a as any).ax, (a as any).ay),
      i: any = ((n as any).id as any)((a as any).bx, (a as any).by),
      u: any = ((((Math as any).min as any)(c, i) as any) * (gt as any) as any) + (((Math as any).max as any)(c, i) as any);
    ((e as any).set as any)(u, ((((e as any).get as any)(u) ?? 0) as any) + (((c as any) < (i as any) ? (a as any).count : -(a as any).count) as any));
  }
  const {
      xs: s,
      ys: o
    }: any = n,
    r: any = [];
  for (const [a, c] of e) {
    if ((c as any) === (0 as any)) continue;
    const i: any = ((Math as any).floor as any)((a as any) / (gt as any)),
      u: any = (a as any) - ((i as any) * (gt as any) as any);
    ((r as any).push as any)({
      ax: (s as any)[i],
      ay: (o as any)[i],
      bx: (s as any)[u],
      by: (o as any)[u],
      count: c
    });
  }
  return r;
}
function cc(this: any, t: any): any {
  const n: any = [];
  for (const e of t) {
    const s: any = ((e as any).ax as any) + ((e as any).bx as any),
      o: any = ((e as any).ay as any) + ((e as any).by as any);
    let r: any = 0;
    for (const u of t) {
      if ((u as any) === (e as any)) continue;
      const l: any = (2 as any) * ((u as any).ay as any),
        h: any = (2 as any) * ((u as any).by as any);
      (l as any) <= (o as any) ? (h as any) > (o as any) && ((et as any)((2 as any) * ((u as any).ax as any), l, (2 as any) * ((u as any).bx as any), h, s, o) as any) > (0 as any) && (r += (u as any).count) : (h as any) <= (o as any) && ((et as any)((2 as any) * ((u as any).ax as any), l, (2 as any) * ((u as any).bx as any), h, s, o) as any) < (0 as any) && (r -= (u as any).count);
    }
    const c: any = ((e as any).ay as any) < ((e as any).by as any) || ((e as any).ay as any) === ((e as any).by as any) && ((e as any).ax as any) > ((e as any).bx as any) ? (r as any) + ((e as any).count as any) : r,
      i: any = (c as any) - ((e as any).count as any);
    (((c as any) !== (0 as any)) as any) != (((i as any) !== (0 as any)) as any) && ((n as any).push as any)((c as any) !== (0 as any) ? {
      ...e,
      count: 1
    } : {
      ax: (e as any).bx,
      ay: (e as any).by,
      bx: (e as any).ax,
      by: (e as any).ay,
      count: 1
    });
  }
  return n;
}
function ic(this: any, t: any): any {
  const n: any = new (K0 as any)(),
    e: any = [];
  for (const a of t) {
    const c: any = ((n as any).id as any)((a as any).ax, (a as any).ay),
      i: any = ((n as any).id as any)((a as any).bx, (a as any).by);
    for (; ((e as any).length as any) <= (((Math as any).max as any)(c, i) as any);) ((e as any).push as any)([]);
    for (let u: any = 0; (u as any) < (((Math as any).abs as any)((a as any).count) as any); u++) ((a as any).count as any) > (0 as any) ? (((e as any)[c] as any).push as any)(i) : (((e as any)[i] as any).push as any)(c);
  }
  const {
    xs: s,
    ys: o
  }: any = n;
  let r: any = "";
  return ((e as any).forEach as any)((a: any, c: any): any => {
    for (; ((a as any).length as any) > (0 as any);) {
      r += `M${(xt as any)(((s as any)[c] as any) / (Qt as any))} ${(xt as any)(((o as any)[c] as any) / (Qt as any))}`;
      let i: any = ((a as any).pop as any)();
      for (; (i as any) != (null as any) && (i as any) !== (c as any);) r += ` ${(xt as any)(((s as any)[i] as any) / (Qt as any))} ${(xt as any)(((o as any)[i] as any) / (Qt as any))}`, i = (((e as any)[i] as any).pop as any)();
      r += "Z";
    }
  }), r;
}
function lc(this: any, t: any): any {
  const [n, e, s, o, r, a, c, i]: any = t,
    u: any = (ae as any)(n, e, s, o, r, a, c, i);
  if ((u as any) != (null as any)) return [[n, e, (u as any)[0], (u as any)[1], c, i], [(u as any)[0], (u as any)[1], s, o, r, a]];
  const l: any = (ae as any)(s, o, r, a, c, i, n, e);
  return (l as any) != (null as any) ? [[s, o, (l as any)[0], (l as any)[1], n, e], [(l as any)[0], (l as any)[1], r, a, c, i]] : null;
}
function ae(this: any, t: any, n: any, e: any, s: any, o: any, r: any, a: any, c: any): any {
  const i: any = ((Math as any).sign as any)((et as any)(t, n, e, s, o, r)),
    u: any = ((Math as any).sign as any)((et as any)(t, n, e, s, a, c)),
    l: any = (et as any)(o, r, a, c, t, n),
    h: any = (et as any)(o, r, a, c, e, s);
  if (!(((i as any) * (u as any) as any) < (0 as any) && ((((Math as any).sign as any)(l) as any) * (((Math as any).sign as any)(h) as any) as any) < (0 as any))) return null;
  const f: any = (l as any) / ((l as any) - (h as any) as any);
  return [((Math as any).round as any)((t as any) + (((e as any) - (t as any) as any) * (f as any) as any)), ((Math as any).round as any)((n as any) + (((s as any) - (n as any) as any) * (f as any) as any))];
}
function et(this: any, t: any, n: any, e: any, s: any, o: any, r: any): any {
  return (((e as any) - (t as any) as any) * ((r as any) - (n as any) as any) as any) - (((s as any) - (n as any) as any) * ((o as any) - (t as any) as any) as any);
}
function uc(this: any, t: any): any {
  let n: any = 0;
  for (let e: any = 0; (e as any) < ((t as any).length as any); e += 2) {
    const s: any = ((e as any) + (2 as any) as any) % ((t as any).length as any);
    n += (((t as any)[e] as any) * ((t as any)[(s as any) + (1 as any)] as any) as any) - (((t as any)[s] as any) * ((t as any)[(e as any) + (1 as any)] as any) as any);
  }
  return n;
}
function hn(this: any, t: any): any {
  return ((Math as any).min as any)((t as any).ax, (t as any).bx);
}
function xt(this: any, t: any): any {
  return (String as any)((((Math as any).round as any)((t as any) * (100 as any)) as any) / (100 as any));
}
const ce: any = ((Math as any).PI as any) / (6 as any),
  hc: number = 1.17,
  fn: any = -1.24,
  dn: number = .79,
  Kt: number = 3.24,
  Ut: number = 48,
  p0: number = 160,
  fc: number = .001,
  B0: number = .18,
  W: any = (bc as any)([-.5, .6, .62]),
  dc: any = [...(([0, 1, 2, 3, 4, 5] as any).map as any)((t: any): any => {
    const n: any = (t as any) * (ce as any);
    return {
      center: [0, 0, 0],
      a: [((Math as any).sin as any)(n), 0, ((Math as any).cos as any)(n)],
      b: [0, 1, 0],
      isEquator: !1
    };
  }), ...(([-2, -1, 0, 1, 2] as any).map as any)((t: any): any => {
    const n: any = (t as any) * (ce as any),
      e: any = ((Math as any).cos as any)(n);
    return {
      center: [0, ((Math as any).sin as any)(n), 0],
      a: [0, 0, e],
      b: [e, 0, 0],
      isEquator: (t as any) === (0 as any)
    };
  })];
let M0: any = null;
function pc(this: any, t: any, n: any): any {
  const e: any = (ct as any)(n, (t as any).center),
    s: any = (ct as any)(n, (t as any).a),
    o: any = (ct as any)(n, (t as any).b),
    r: any = ((Math as any).hypot as any)((s as any)[2], (o as any)[2]);
  let a: any = 0,
    c: any = (2 as any) * ((Math as any).PI as any);
  if ((r as any) > (((Math as any).abs as any)((e as any)[2]) as any)) {
    const i: any = ((Math as any).atan2 as any)((o as any)[2], (s as any)[2]),
      u: any = ((Math as any).acos as any)((-(e as any)[2] as any) / (r as any));
    a = (i as any) - (u as any), c = (i as any) + (u as any);
  } else if (((e as any)[2] as any) <= (0 as any)) return null;
  return {
    center: [(e as any)[0], (e as any)[1]],
    a: [(s as any)[0], (s as any)[1]],
    b: [(o as any)[0], (o as any)[1]],
    from: a,
    to: c
  };
}
function Mc(this: any, t: any, n: any): any {
  const e: any = ((Math as any).sqrt as any)(((Math as any).max as any)(0, ((1 as any) - ((t as any) * (t as any) as any) as any) - ((n as any) * (n as any) as any))),
    s: any = ((((W as any)[0] as any) * (t as any) as any) + (((W as any)[1] as any) * (n as any) as any) as any) + (((W as any)[2] as any) * (e as any) as any);
  return (B0 as any) + (((1 as any) - (B0 as any) as any) * (((Math as any).max as any)(0, s) as any) as any);
}
function mc(this: any): any {
  if ((M0 as any) !== (null as any)) return M0;
  const t: any = ((Math as any).hypot as any)((W as any)[0], (W as any)[1]),
    n: any = [((W as any)[0] as any) / (t as any), ((W as any)[1] as any) / (t as any)],
    e: any = {
      origin: [(fn as any) * ((W as any)[0] as any), (fn as any) * ((W as any)[1] as any)],
      axisX: [((dn as any) * (Kt as any) as any) * ((n as any)[0] as any), ((dn as any) * (Kt as any) as any) * ((n as any)[1] as any)],
      axisY: [(-Kt as any) * ((n as any)[1] as any), (Kt as any) * ((n as any)[0] as any)],
      focus: (((hc as any) - (fn as any) as any) * (t as any) as any) / ((dn as any) * (Kt as any) as any)
    };
  return M0 = {
    ...e,
    stops: (gc as any)(e)
  }, M0;
}
function yc(this: any, t: any, n: any, e: any): any {
  const s: any = (n as any) - (((t as any).origin as any)[0] as any),
    o: any = (e as any) - (((t as any).origin as any)[1] as any),
    r: any = (((s as any) * (((t as any).axisX as any)[0] as any) as any) + ((o as any) * (((t as any).axisX as any)[1] as any) as any) as any) / (((((t as any).axisX as any)[0] as any) ** (2 as any) as any) + ((((t as any).axisX as any)[1] as any) ** (2 as any) as any) as any),
    a: any = (((s as any) * (((t as any).axisY as any)[0] as any) as any) + ((o as any) * (((t as any).axisY as any)[1] as any) as any) as any) / (((((t as any).axisY as any)[0] as any) ** (2 as any) as any) + ((((t as any).axisY as any)[1] as any) ** (2 as any) as any) as any),
    c: any = (t as any).focus,
    i: any = ((c as any) * (c as any) as any) - (1 as any),
    u: any = ((2 as any) * (c as any) as any) * ((r as any) - (c as any) as any),
    l: any = (((r as any) - (c as any) as any) ** (2 as any) as any) + ((a as any) * (a as any) as any);
  return ((-u as any) - (((Math as any).sqrt as any)(((u as any) * (u as any) as any) - (((4 as any) * (i as any) as any) * (l as any) as any)) as any) as any) / ((2 as any) * (i as any) as any);
}
function gc(this: any, t: any): any {
  const n: any = (Ut as any) + (1 as any),
    e: any = new (Float64Array as any)(n),
    s: any = new (Float64Array as any)(n),
    o: any = new (Float64Array as any)(n);
  let r: any = 0;
  for (let i: any = 0; (i as any) < (p0 as any); i++) for (let u: any = 0; (u as any) < (p0 as any); u++) {
    const l: any = ((((i as any) + (.5 as any) as any) / (p0 as any) as any) * (2 as any) as any) - (1 as any),
      h: any = ((((u as any) + (.5 as any) as any) / (p0 as any) as any) * (2 as any) as any) - (1 as any);
    if ((((l as any) * (l as any) as any) + ((h as any) * (h as any) as any) as any) >= (1 as any)) continue;
    const f: any = (((Math as any).min as any)(1, (yc as any)(t, l, h)) as any) * (Ut as any),
      d: any = ((Math as any).min as any)((Ut as any) - (1 as any), ((Math as any).floor as any)(f)),
      p: any = (f as any) - (d as any),
      y: any = (Mc as any)(l, h);
    (e as any)[d] += ((1 as any) - (p as any) as any) ** (2 as any), (e as any)[(d as any) + (1 as any)] += (p as any) * (p as any), (s as any)[d] += ((1 as any) - (p as any) as any) * (p as any), (o as any)[d] += ((1 as any) - (p as any) as any) * (y as any), (o as any)[(d as any) + (1 as any)] += (p as any) * (y as any), r++;
  }
  const a: any = ((fc as any) * (r as any) as any) / (n as any);
  for (let i: any = 0; (i as any) < (Ut as any); i++) (e as any)[i] += a, (e as any)[(i as any) + (1 as any)] += a, (s as any)[i] -= a;
  const c: any = (xc as any)(e, s, o);
  return ((Array as any).from as any)(c, (i: any, u: any): any => ({
    offset: (u as any) / (Ut as any),
    shade: i
  }));
}
function xc(this: any, t: any, n: any, e: any): any {
  const s: any = (t as any).length,
    o: any = new (Float64Array as any)(s),
    r: any = new (Float64Array as any)(s);
  (o as any)[0] = ((n as any)[0] as any) / ((t as any)[0] as any), (r as any)[0] = ((e as any)[0] as any) / ((t as any)[0] as any);
  for (let c: any = 1; (c as any) < (s as any); c++) {
    const i: any = ((t as any)[c] as any) - (((n as any)[(c as any) - (1 as any)] as any) * ((o as any)[(c as any) - (1 as any)] as any) as any);
    (o as any)[c] = ((n as any)[c] as any) / (i as any), (r as any)[c] = (((e as any)[c] as any) - (((n as any)[(c as any) - (1 as any)] as any) * ((r as any)[(c as any) - (1 as any)] as any) as any) as any) / (i as any);
  }
  const a: any = new (Float64Array as any)(s);
  (a as any)[(s as any) - (1 as any)] = (r as any)[(s as any) - (1 as any)];
  for (let c: any = (s as any) - (2 as any); (c as any) >= (0 as any); c--) (a as any)[c] = ((r as any)[c] as any) - (((o as any)[c] as any) * ((a as any)[(c as any) + (1 as any)] as any) as any);
  return a;
}
function bc(this: any, t: any): any {
  const n: any = ((Math as any).hypot as any)((t as any)[0], (t as any)[1], (t as any)[2]);
  return [((t as any)[0] as any) / (n as any), ((t as any)[1] as any) / (n as any), ((t as any)[2] as any) / (n as any)];
}
const vc: number = .4,
  wc: number = 1e-9,
  m0: number = 6,
  A0: number = 24,
  Pn: number = .004,
  Lt: any = ((Math as any).PI as any) / (180 as any);
function kc(this: any, t: any, n: any, e: any, s: any): any {
  const o: any = (Ga as any)(t),
    r: any = (Ac as any)(n),
    a: any = (Xn as any)((H0 as any)(t), e),
    c: any = (e as any) / (2 as any),
    i: any = ((s as any).map as any)((f: any): any => (f as any) + (((1 as any) - (f as any) as any) * (vc as any) as any)),
    u: any = (f: any): any => {
      const d: any = ((((f as any)[0] as any) * ((W as any)[0] as any) as any) + (((f as any)[1] as any) * ((W as any)[1] as any) as any) as any) + (((f as any)[2] as any) * ((W as any)[2] as any) as any),
        p: any = (B0 as any) + (((1 as any) - (B0 as any) as any) * (((Math as any).max as any)(0, d) as any) as any);
      return (Cc as any)(((i as any).map as any)((y: any): any => (y as any) * (p as any)));
    },
    l: any = (f: any): any => [(c as any) + ((a as any) * ((f as any)[0] as any) as any), (c as any) - ((a as any) * ((f as any)[1] as any) as any)],
    h: any = ((o as any).kind as any) === ("mesh" as any) ? (Ec as any)(o, r, l, u) : (Ic as any)((o as any).balls, r, l, a, u);
  return {
    baseFill: (u as any)([0, 0, 1]),
    faces: h
  };
}
function Ac(this: any, t: any): any {
  const [n, e]: any = [((Math as any).cos as any)(((t as any).yaw as any) * (Lt as any)), ((Math as any).sin as any)(((t as any).yaw as any) * (Lt as any))],
    [s, o]: any = [((Math as any).cos as any)(((t as any).pitch as any) * (Lt as any)), ((Math as any).sin as any)(((t as any).pitch as any) * (Lt as any))],
    [r, a]: any = [((Math as any).cos as any)(((t as any).roll as any) * (Lt as any)), ((Math as any).sin as any)(((t as any).roll as any) * (Lt as any))];
  return ([c, i, u]: any): any => {
    const l: any = ((c as any) * (n as any) as any) + ((u as any) * (e as any) as any),
      h: any = ((u as any) * (n as any) as any) - ((c as any) * (e as any) as any),
      f: any = ((i as any) * (s as any) as any) - ((h as any) * (o as any) as any),
      d: any = ((i as any) * (o as any) as any) + ((h as any) * (s as any) as any);
    return [((l as any) * (r as any) as any) - ((f as any) * (a as any) as any), ((l as any) * (a as any) as any) + ((f as any) * (r as any) as any), d];
  };
}
function Ec(this: any, t: any, n: any, e: any, s: any): any {
  const o: any = (((t as any).vertices as any).map as any)(n),
    r: any = [],
    a: any = new (Map as any)();
  for (const c of (t as any).faces) {
    const [i, u, l]: any = (fs as any)(o, (c as any).corners),
      h: any = ((Math as any).hypot as any)(i, u, l);
    if ((h as any) === (0 as any) || (l as any) <= ((wc as any) * (h as any) as any)) continue;
    const f: any = (s as any)([(i as any) / (h as any), (u as any) / (h as any), (l as any) / (h as any)]),
      d: any = (((c as any).corners as any).flatMap as any)((y: any): any => (e as any)((o as any)[y]));
    if ((c as any).isBounding) {
      (ps as any)(a, f, d);
      continue;
    }
    const p: any = ((((c as any).corners as any).reduce as any)((y: any, m: any): any => (y as any) + (((o as any)[m] as any)[2] as any), 0) as any) / (((c as any).corners as any).length as any);
    ((r as any).push as any)({
      polygon: d,
      fill: f,
      depth: p
    });
  }
  return ((r as any).sort as any)((c: any, i: any): any => ((c as any).depth as any) - ((i as any).depth as any)), [...(_c as any)(r), ...(([...a] as any).map as any)(([c, i]: any): any => (Qn as any)(i, c))];
}
function Ic(this: any, t: any, n: any, e: any, s: any, o: any): any {
  const r: any = ((t as any).map as any)((i: any): any => ({
      center: (n as any)((i as any).center),
      radius: (i as any).radius
    })),
    a: any = ((((r as any).map as any)((i: any, u: any): any => u) as any).sort as any)((i: any, u: any): any => (((((r as any)[i] as any).center as any)[2] as any) + (((r as any)[i] as any).radius as any) as any) - (((((r as any)[u] as any).center as any)[2] as any) + (((r as any)[u] as any).radius as any) as any)),
    c: any = (Pn as any) / (s as any);
  return ((a as any).flatMap as any)((i: any): any => {
    const {
        center: u,
        radius: l
      }: any = (r as any)[i],
      h: any = ((r as any).filter as any)((m: any, g: any): any => (g as any) !== (i as any) && (((r as any)[g] as any).radius as any) > (c as any)),
      f: any = (m: any): any => ((h as any).some as any)((g: any): any => ((m as any).every as any)((x: any): any => ((Sc as any)(x, (g as any).center) as any) < ((((g as any).radius as any) - (c as any) as any) ** (2 as any) as any))),
      d: any = (m: any, g: any): any => [((u as any)[0] as any) + (((l as any) * (((Math as any).sin as any)(m) as any) as any) * (((Math as any).cos as any)(g) as any) as any), ((u as any)[1] as any) + (((l as any) * (((Math as any).sin as any)(m) as any) as any) * (((Math as any).sin as any)(g) as any) as any), ((u as any)[2] as any) + ((l as any) * (((Math as any).cos as any)(m) as any) as any)],
      p: any = (Pc as any)((l as any) * (s as any)),
      y: any = new (Map as any)();
    for (let m: any = 0; (m as any) < (m0 as any); m++) {
      const g: any = ((m as any) / (m0 as any) as any) * (((Math as any).PI as any) / (2 as any) as any),
        x: any = (((m as any) + (1 as any) as any) / (m0 as any) as any) * (((Math as any).PI as any) / (2 as any) as any),
        w: any = (m as any) === ((m0 as any) - (1 as any) as any) ? p : 1;
      for (let v: any = 0; (v as any) < (A0 as any); v++) {
        const b: any = (((v as any) / (A0 as any) as any) * (2 as any) as any) * ((Math as any).PI as any),
          A: any = ((((v as any) + (1 as any) as any) / (A0 as any) as any) * (2 as any) as any) * ((Math as any).PI as any),
          E: any = [...((m as any) === (0 as any) ? [(d as any)(0, 0)] : [(d as any)(g, b)]), ...((Array as any).from as any)({
            length: (w as any) + (1 as any)
          }, (z: any, B: any): any => (d as any)(x, (b as any) + ((((A as any) - (b as any) as any) * (B as any) as any) / (w as any) as any))), ...((m as any) === (0 as any) ? [] : [(d as any)(g, A)])];
        if ((f as any)(E)) continue;
        const P: any = ((g as any) + (x as any) as any) / (2 as any),
          $: any = ((b as any) + (A as any) as any) / (2 as any),
          D: any = (o as any)([(((Math as any).sin as any)(P) as any) * (((Math as any).cos as any)($) as any), (((Math as any).sin as any)(P) as any) * (((Math as any).sin as any)($) as any), ((Math as any).cos as any)(P)]);
        (ps as any)(y, D, ((E as any).flatMap as any)(e));
      }
    }
    return (([...y] as any).map as any)(([m, g]: any): any => (Qn as any)(g, m));
  });
}
function _c(this: any, t: any): any {
  const n: any = [];
  let e: any = 0;
  for (let s: any = 1; (s as any) <= ((t as any).length as any); s++) (s as any) < ((t as any).length as any) && (((t as any)[s] as any).fill as any) === (((t as any)[e] as any).fill as any) || (((n as any).push as any)((Qn as any)(((((t as any).slice as any)(e, s) as any).map as any)((o: any): any => (o as any).polygon), ((t as any)[e] as any).fill)), e = s);
  return n;
}
function ps(this: any, t: any, n: any, e: any): any {
  const s: any = ((t as any).get as any)(n);
  (s as any) == (null as any) ? ((t as any).set as any)(n, [e]) : ((s as any).push as any)(e);
}
function Qn(this: any, t: any, n: any): any {
  return {
    d: (Vn as any)(t),
    fill: n
  };
}
function Pc(this: any, t: any): any {
  if ((t as any) <= (Pn as any)) return 1;
  const n: any = (2 as any) * (((Math as any).acos as any)((1 as any) - ((Pn as any) / (t as any) as any)) as any);
  return ((Math as any).max as any)(1, ((Math as any).ceil as any)((((2 as any) * ((Math as any).PI as any) as any) / (A0 as any) as any) / (n as any)));
}
function Sc(this: any, t: any, n: any): any {
  return (((((t as any)[0] as any) - ((n as any)[0] as any) as any) ** (2 as any) as any) + ((((t as any)[1] as any) - ((n as any)[1] as any) as any) ** (2 as any) as any) as any) + ((((t as any)[2] as any) - ((n as any)[2] as any) as any) ** (2 as any) as any);
}
function Cc(this: any, t: any): any {
  const n: any = (e: any): any => ((((((Math as any).round as any)((((Math as any).min as any)(1, ((Math as any).max as any)(0, e)) as any) * (255 as any)) as any).toString as any)(16) as any).padStart as any)(2, "0");
  return `#${((((t as any).map as any)(n) as any).join as any)("")}`;
}
const Ms: number = 144,
  ms: any = (184 as any) / (256 as any),
  E0: any = (180 as any) / ((Math as any).PI as any),
  $c: number = 16e6,
  Tc: number = .6,
  Bt: any = new (Map as any)();
let pn: any = 0;
function Rc(this: any, t: any, n: any, e: any, s: any = {}): any {
  const o: any = ((Math as any).max as any)(8, ((Math as any).round as any)(((e as any) * ((t as any).zoom as any) as any) / (ms as any))),
    r: any = ((Math as any).max as any)(o, Ms),
    a: any = (ys as any)((t as any).quat, (gs as any)(e, (t as any).zoom)),
    {
      body: c,
      eyes: i
    }: any = (xs as any)((t as any).body, a, r, (t as any).eyes, (t as any).inspect),
    [u, l, h, f]: any = (bs as any)(t, e, o, r),
    d: any = `matrix(${(g0 as any)(u)} 0 0 ${(g0 as any)(l)} ${(g0 as any)(h)} ${(g0 as any)(f)})`,
    p: any = ((s as any).isProof as any) === (!0 as any) ? (kc as any)((t as any).body, a, r, (n as any).ink) : null;
  if (((t as any).glow as any) != (null as any)) {
    const g: any = (Nc as any)((t as any).glow, r);
    return {
      size: e,
      sprite: r,
      transform: d,
      body: c,
      bodyFill: g,
      eyes: [],
      eyeFill: null,
      proof: p
    };
  }
  const y: any = (n as any).cutout ? null : (Gn as any)(n),
    m: any = ((t as any).eyes as any) == (null as any) ? [] : i;
  return {
    size: e,
    sprite: r,
    transform: d,
    body: c,
    bodyFill: (zn as any)(n),
    eyes: m,
    eyeFill: y,
    proof: p
  };
}
function Fc(this: any, t: any, n: any): any {
  const e: any = ((Math as any).max as any)(8, ((Math as any).round as any)(((n as any) * ((t as any).zoom as any) as any) / (ms as any))),
    s: any = ((Math as any).max as any)(e, Ms),
    o: any = (ys as any)((t as any).quat, (gs as any)(n, (t as any).zoom)),
    {
      body: r,
      eyes: a
    }: any = (xs as any)((t as any).body, o, s, (t as any).eyes, (t as any).inspect),
    [c, i, u, l]: any = (bs as any)(t, n, e, s),
    h: any = ([f, d]: any): any => [((c as any) * (f as any) as any) + (u as any), ((i as any) * (d as any) as any) + (l as any)];
  return {
    center: [(((c as any) * (s as any) as any) / (2 as any) as any) + (u as any), (((i as any) * (s as any) as any) / (2 as any) as any) + (l as any)],
    radius: (((t as any).zoom as any) * (n as any) as any) / (2 as any),
    body: ((((r as any).flatMap as any)(ue) as any).map as any)((f: any): any => ((f as any).map as any)(h)),
    eyes: ((t as any).eyes as any) == (null as any) ? [] : ((((a as any).flatMap as any)(ue) as any).map as any)((f: any): any => ((f as any).map as any)(h))
  };
}
function Oc(this: any, t: any, n: any, e: any = (t as any).size): any {
  const s: any = (t as any).sprite,
    o: any = `${n}-body`,
    r: any = `maskUnits="userSpaceOnUse" x="0" y="0" width="${s}" height="${s}"`,
    a: any = (f: any): any => (((((t as any).eyes as any).map as any)((d: any): any => `<path d="${d}" fill="${f}"/>`) as any).join as any)(""),
    c: any = (((((t as any).body as any).map as any)((f: any): any => `<path d="${f}"/>`) as any).join as any)("");
  let i: any = `<g id="${o}">${c}</g>`,
    u: any = "",
    l: any = "";
  (((t as any).eyes as any).length as any) > (0 as any) && ((t as any).eyeFill as any) == (null as any) ? (i += `<mask id="${n}-holes" ${r}><rect width="${s}" height="${s}" fill="#fff"/>${(a as any)("#000")}</mask>`, u = ` mask="url(#${n}-holes)"`) : (((t as any).eyes as any).length as any) > (0 as any) && ((t as any).eyeFill as any) != (null as any) && (i += `<mask id="${n}-inside" ${r}><use href="#${o}" fill="#fff"/></mask>`, l = `<g mask="url(#${n}-inside)">${(a as any)((t as any).eyeFill)}</g>`);
  let h: any = "";
  if (((t as any).proof as any) != (null as any)) {
    i += `<clipPath id="${n}-solid">${c}</clipPath>`;
    const f: any = ((((((t as any).proof as any).faces as any).map as any)((d: any): any => `<path d="${(d as any).d}" fill="${(d as any).fill}"/>`) as any).join as any)("");
    h = `<g clip-path="url(#${n}-solid)"${u}><use href="#${o}" fill="${((t as any).proof as any).baseFill}"/>${f}</g>`;
  } else if ((typeof (t as any).bodyFill as any) == ("string" as any)) h = `<use href="#${o}" fill="${(t as any).bodyFill}"${u}/>`;else {
    const {
        cx: f,
        cy: d,
        r: p,
        stops: y
      }: any = (t as any).bodyFill,
      m: any = ((((y as any).map as any)((g: any): any => `<stop offset="${(g as any).offset}" stop-color="${(g as any).color}"/>`) as any).join as any)("");
    i += `<radialGradient id="${n}-glow" gradientUnits="userSpaceOnUse" cx="${f}" cy="${d}" r="${p}">${m}</radialGradient>`, h = `<use href="#${o}" fill="url(#${n}-glow)"${u}/>`;
  }
  return `${(Yn as any)((t as any).size, n, e)}<defs>${i}</defs><g transform="${(t as any).transform}">${h}${l}</g></svg>`;
}
function ys(this: any, t: any, n: any = 0): any {
  const e: any = (Yt as any)(t),
    [s, o, r]: any = (qe as any)(((e as any)[8] as any) >= (0 as any) ? e : [-(e as any)[0], (e as any)[1], -(e as any)[2], -(e as any)[3], (e as any)[4], -(e as any)[5], -(e as any)[6], (e as any)[7], -(e as any)[8]]),
    a: any = (c: any): any => (n as any) > (0 as any) ? (((Math as any).round as any)((c as any) / (n as any)) as any) * (n as any) : c;
  return {
    yaw: (ie as any)((a as any)((o as any) * (E0 as any))),
    pitch: (ie as any)((a as any)((s as any) * (E0 as any))),
    roll: (a as any)((r as any) * (E0 as any))
  };
}
function gs(this: any, t: any, n: any): any {
  const e: any = ((Tc as any) / (((Math as any).max as any)(((t as any) * (n as any) as any) / (2 as any), 1) as any) as any) * (E0 as any);
  return (2 as any) ** (((Math as any).floor as any)(((Math as any).log2 as any)(e)) as any);
}
function ie(this: any, t: any): any {
  const n: any = (((t as any) % (180 as any) as any) + (180 as any) as any) % (180 as any);
  return (((Math as any).abs as any)((n as any) - (90 as any)) as any) >= (.5 as any) ? t : (t as any) + (((n as any) <= (90 as any) ? (89.5 as any) - (n as any) : (90.5 as any) - (n as any)) as any);
}
function xs(this: any, t: any, n: any, e: any, s: any, o: any): any {
  const r: any = (s as any) == (null as any) ? [] : (Ia as any)((H0 as any)(t), n, e, (mr as any)(t, s, (n as any).yaw, o));
  return {
    body: (Lc as any)(t, n, e),
    eyes: ((r as any).map as any)((a: any): any => (Vn as any)([a]))
  };
}
function Lc(this: any, t: any, n: any, e: any): any {
  const s: any = `${t} ${e} ${(n as any).yaw} ${(n as any).pitch} ${(n as any).roll}`,
    o: any = ((Bt as any).get as any)(s);
  if ((o as any) != (null as any)) return ((Bt as any).delete as any)(s), ((Bt as any).set as any)(s, o), o;
  const r: any = (Bc as any)((cs as any)((H0 as any)(t), n, e));
  ((Bt as any).set as any)(s, r), pn += (le as any)(r);
  for (const [a, c] of Bt) {
    if ((pn as any) <= ($c as any)) break;
    ((Bt as any).delete as any)(a), pn -= (le as any)(c);
  }
  return r;
}
function le(this: any, t: any): any {
  return ((t as any).reduce as any)((n: any, e: any): any => (n as any) + ((e as any).length as any), 0);
}
function Bc(this: any, t: any): any {
  if (((t as any).length as any) === (1 as any)) return [(Vn as any)(t)];
  const n: any = (nc as any)(t);
  return (n as any) === ("" as any) ? [] : [n];
}
function bs(this: any, t: any, n: any, e: any, s: any): any {
  const o: any = (n as any) / (2 as any),
    r: any = (o as any) + (((((t as any).offset as any)[0] as any) * ((t as any).zoom as any) as any) * (o as any) as any),
    a: any = (o as any) - (((((t as any).offset as any)[1] as any) * ((t as any).zoom as any) as any) * (o as any) as any),
    c: any = (a as any) - ((((t as any).squashAnchor as any) * ((t as any).zoom as any) as any) * (o as any) as any),
    [i, u]: any = (t as any).squash,
    l: any = (e as any) / (s as any);
  return [(i as any) * (l as any), (u as any) * (l as any), (r as any) - (((i as any) * (e as any) as any) / (2 as any) as any), (c as any) + ((u as any) * (((a as any) - ((e as any) / (2 as any) as any) as any) - (c as any) as any) as any)];
}
function ue(this: any, t: any): any {
  const n: any = [];
  for (const e of ((t as any).split as any)("Z")) {
    const s: any = ((((((((((e as any).replace as any)("M", " ") as any).trim as any)() as any).split as any)(/\s+/) as any).filter as any)((r: any): any => (r as any) !== ("" as any)) as any).map as any)(Number);
    if (((s as any).length as any) < (6 as any)) continue;
    const o: any = [];
    for (let r: any = 0; ((r as any) + (1 as any) as any) < ((s as any).length as any); r += 2) ((o as any).push as any)([(s as any)[r], (s as any)[(r as any) + (1 as any)]]);
    ((n as any).push as any)(o);
  }
  return n;
}
function Nc(this: any, t: any, n: any): any {
  const e: any = (n as any) / (2 as any);
  return {
    cx: e,
    cy: e,
    r: e,
    stops: [{
      offset: 0,
      color: (y0 as any)((t as any).inner)
    }, {
      offset: (.42 as any) + (((t as any).midT as any) * (.16 as any) as any),
      color: (y0 as any)((t as any).mid)
    }, {
      offset: .93,
      color: (y0 as any)((t as any).rim)
    }, {
      offset: 1,
      color: (y0 as any)((t as any).rim)
    }]
  };
}
function y0(this: any, t: any): any {
  return `rgb(${((Math as any).round as any)(((t as any)[0] as any) * (255 as any))}, ${((Math as any).round as any)(((t as any)[1] as any) * (255 as any))}, ${((Math as any).round as any)(((t as any)[2] as any) * (255 as any))})`;
}
function g0(this: any, t: any): any {
  return (((Math as any).round as any)((t as any) * (1e6 as any)) as any) / (1e6 as any);
}
const J: any = ((Math as any).PI as any) * (2 as any),
  he: number = 1e-9,
  Dc: number = 1e-7,
  qc: number = 1e-7,
  yt: number = 720;
function zc(this: any, t: any): any {
  return ((Array as any).from as any)({
    length: t
  }, (n: any, e: any): any => ((e as any) / (t as any) as any) * (J as any));
}
function Gc(this: any, t: any, n: any): any {
  return ((t as any).flatMap as any)((e: any): any => ((e as any).map as any)(([s, o]: any): any => (N0 as any)(n, s, o)));
}
function Yc(this: any, t: any): any {
  const n: any = ((((t as any).flat as any)() as any).sort as any)((e: any, s: any): any => (e as any) - (s as any));
  return ((n as any).filter as any)((e: any, s: any): any => (s as any) === (0 as any) || ((e as any) - ((n as any)[(s as any) - (1 as any)] as any) as any) > (Dc as any));
}
function Hc(this: any, t: any, n: any, e: any): any {
  const s: any = (ti as any)(t, n),
    o: any = (ei as any)(((e as any).map as any)((r: any): any => (ni as any)(s, n, r)));
  return ((e as any).map as any)((r: any, a: any): any => [((n as any)[0] as any) + ((((Math as any).cos as any)(r) as any) * ((o as any)[a] as any) as any), ((n as any)[1] as any) + ((((Math as any).sin as any)(r) as any) * ((o as any)[a] as any) as any)]);
}
function Kc(this: any, t: any, n: any, e: any): any {
  const [s, o]: any = n;
  return ((Array as any).from as any)({
    length: e
  }, (r: any, a: any): any => {
    const c: any = ((a as any) / (e as any) as any) * (J as any),
      i: any = ((Math as any).cos as any)(c),
      u: any = ((Math as any).sin as any)(c),
      l: any = (s as any) === (0 as any) || (o as any) === (0 as any) ? 0 : (1 as any) / (((Math as any).hypot as any)((i as any) / (s as any), (u as any) / (o as any)) as any);
    return [((t as any)[0] as any) + ((i as any) * (l as any) as any), ((t as any)[1] as any) + ((u as any) * (l as any) as any)];
  });
}
function Uc(this: any, t: any, n: any, e: any): any {
  const s: any = ((((t as any).map as any)(([o, r]: any): any => ({
    angle: (N0 as any)(n, o, r),
    reach: ((Math as any).hypot as any)((o as any) - ((n as any)[0] as any), (r as any) - ((n as any)[1] as any))
  })) as any).sort as any)((o: any, r: any): any => ((o as any).angle as any) - ((r as any).angle as any));
  return ((e as any).map as any)((o: any): any => {
    const r: any = (si as any)(s, o);
    return [((n as any)[0] as any) + ((((Math as any).cos as any)(o) as any) * (r as any) as any), ((n as any)[1] as any) + ((((Math as any).sin as any)(o) as any) * (r as any) as any)];
  });
}
function jc(this: any, t: any): any {
  const n: any = ((Jc as any)(t) as any) < (0 as any) ? (([...t] as any).reverse as any)() : t,
    e: any = (oi as any)(n, (ws as any)(n)),
    s: any = (e as any) == (null as any) ? n : [(e as any).point, ...((n as any).slice as any)(((e as any).edge as any) + (1 as any)), ...((n as any).slice as any)(0, ((e as any).edge as any) + (1 as any))],
    o: any = [0];
  for (let a: any = 0; (a as any) < ((s as any).length as any); a++) {
    const [c, i]: any = (s as any)[a],
      [u, l]: any = (s as any)[((a as any) + (1 as any) as any) % ((s as any).length as any)];
    ((o as any).push as any)(((o as any)[a] as any) + (((Math as any).hypot as any)((u as any) - (c as any), (l as any) - (i as any)) as any));
  }
  const r: any = (o as any)[(s as any).length] ?? 0;
  return {
    points: s,
    stations: ((o as any).map as any)((a: any): any => (r as any) === (0 as any) ? 0 : (a as any) / (r as any))
  };
}
function Xc(this: any, {
  points: t,
  stations: n
}: any, e: any): any {
  if (((t as any).length as any) === (0 as any)) return [];
  let s: any = 0;
  return ((e as any).map as any)((o: any): any => {
    for (; (s as any) < (((t as any).length as any) - (1 as any) as any) && ((n as any)[(s as any) + (1 as any)] as any) < (o as any);) s++;
    const [r, a]: any = (t as any)[s],
      [c, i]: any = (t as any)[((s as any) + (1 as any) as any) % ((t as any).length as any)],
      u: any = ((n as any)[(s as any) + (1 as any)] as any) - ((n as any)[s] as any),
      l: any = (u as any) === (0 as any) ? 0 : ((o as any) - ((n as any)[s] as any) as any) / (u as any);
    return [(r as any) + (((c as any) - (r as any) as any) * (l as any) as any), (a as any) + (((i as any) - (a as any) as any) * (l as any) as any)];
  });
}
function Zc(this: any, t: any): any {
  return ((Array as any).from as any)({
    length: t
  }, (n: any, e: any): any => (e as any) / (t as any));
}
function Vc(this: any, t: any): any {
  const n: any = ((((((t as any).flat as any)() as any).filter as any)((e: any): any => (e as any) < (1 as any)) as any).sort as any)((e: any, s: any): any => (e as any) - (s as any));
  return ((n as any).filter as any)((e: any, s: any): any => (s as any) === (0 as any) || ((e as any) - ((n as any)[(s as any) - (1 as any)] as any) as any) > (qc as any));
}
function vs(this: any, t: any): any {
  const n: any = ((t as any).reduce as any)((s: any, o: any): any => (s as any) + ((o as any).weight as any), 0),
    [e]: any = t;
  return (e as any) == (null as any) || (n as any) === (0 as any) ? [] : (((e as any).outline as any).map as any)((s: any, o: any): any => {
    let r: any = 0,
      a: any = 0;
    for (const {
      outline: c,
      weight: i
    } of t) r += (((c as any)[o] as any)[0] as any) * (i as any), a += (((c as any)[o] as any)[1] as any) * (i as any);
    return [(r as any) / (n as any), (a as any) / (n as any)];
  });
}
function Qc(this: any, t: any, n: any, e: any): any {
  return ((t as any).map as any)(([s, o]: any, r: any): any => [(s as any) + (((((n as any)[r] as any)[0] as any) - (s as any) as any) * (e as any) as any), (o as any) + (((((n as any)[r] as any)[1] as any) - (o as any) as any) * (e as any) as any)]);
}
function Wc(this: any, t: any, n: any): any {
  return ((Array as any).from as any)({
    length: n
  }, (): any => [(t as any)[0], (t as any)[1]]);
}
function ws(this: any, t: any): any {
  if (((t as any).length as any) === (0 as any)) return [0, 0];
  let n: any = 0,
    e: any = 0;
  for (const [s, o] of t) n += s, e += o;
  return [(n as any) / ((t as any).length as any), (e as any) / ((t as any).length as any)];
}
function Sn(this: any, t: any): any {
  return ((t as any).length as any) === (0 as any) ? "" : `M${((((t as any).map as any)(([n, e]: any): any => `${(fe as any)(n)} ${(fe as any)(e)}`) as any).join as any)("L")}Z`;
}
function Jc(this: any, t: any): any {
  let n: any = 0;
  for (let e: any = 0; (e as any) < ((t as any).length as any); e++) {
    const [s, o]: any = (t as any)[e],
      [r, a]: any = (t as any)[((e as any) + (1 as any) as any) % ((t as any).length as any)];
    n += ((s as any) * (a as any) as any) - ((r as any) * (o as any) as any);
  }
  return (n as any) / (2 as any);
}
function ti(this: any, t: any, n: any): any {
  const e: any = ((Array as any).from as any)({
    length: yt
  }, (): any => []);
  for (const s of t) for (let o: any = 0; (o as any) < ((s as any).length as any); o++) {
    const r: any = (s as any)[o],
      a: any = (s as any)[((o as any) + (1 as any) as any) % ((s as any).length as any)],
      c: any = (N0 as any)(n, (r as any)[0], (r as any)[1]);
    let i: any = ((N0 as any)(n, (a as any)[0], (a as any)[1]) as any) - (c as any);
    (i as any) > ((Math as any).PI as any) && (i -= J), (i as any) < (-(Math as any).PI as any) && (i += J);
    const u: any = (((Math as any).floor as any)(((((i as any) < (0 as any) ? (c as any) + (i as any) : c) as any) / (J as any) as any) * (yt as any)) as any) - (1 as any),
      l: any = (((Math as any).floor as any)(((((i as any) < (0 as any) ? c : (c as any) + (i as any)) as any) / (J as any) as any) * (yt as any)) as any) + (1 as any);
    for (let h: any = u; (h as any) <= (l as any); h++) (((e as any)[(((h as any) % (yt as any) as any) + (yt as any) as any) % (yt as any)] as any).push as any)([r, a]);
  }
  return e;
}
function ni(this: any, t: any, [n, e]: any, s: any): any {
  const o: any = ((Math as any).cos as any)(s),
    r: any = ((Math as any).sin as any)(s);
  let a: any = (Number as any).NaN;
  for (const [[c, i], [u, l]] of (t as any)[(((Math as any).floor as any)(((s as any) / (J as any) as any) * (yt as any)) as any) % (yt as any)]) {
    const h: any = (u as any) - (c as any),
      f: any = (l as any) - (i as any),
      d: any = ((o as any) * (f as any) as any) - ((r as any) * (h as any) as any);
    if ((((Math as any).abs as any)(d) as any) < (1e-12 as any)) continue;
    const p: any = (c as any) - (n as any),
      y: any = (i as any) - (e as any),
      m: any = (((p as any) * (f as any) as any) - ((y as any) * (h as any) as any) as any) / (d as any),
      g: any = (((p as any) * (r as any) as any) - ((y as any) * (o as any) as any) as any) / (d as any);
    (m as any) >= (0 as any) && (g as any) >= (-he as any) && (g as any) <= ((1 as any) + (he as any) as any) && !((m as any) <= (a as any)) && (a = m);
  }
  return a;
}
function N0(this: any, t: any, n: any, e: any): any {
  const s: any = ((Math as any).atan2 as any)((e as any) - ((t as any)[1] as any), (n as any) - ((t as any)[0] as any));
  return (s as any) < (0 as any) ? (s as any) + (J as any) : s;
}
function ei(this: any, t: any): any {
  const n: any = (t as any).length,
    e: any = ((t as any).flatMap as any)((s: any, o: any): any => ((Number as any).isNaN as any)(s) ? [] : [o]);
  return ((e as any).length as any) === (0 as any) ? ((t as any).map as any)((): any => 0) : ((t as any).map as any)((s: any, o: any): any => {
    if (!((Number as any).isNaN as any)(s)) return s;
    const r: any = ((e as any).find as any)((i: any): any => (i as any) > (o as any)) ?? ((e as any)[0] as any) + (n as any),
      a: any = (((([...e] as any).reverse as any)() as any).find as any)((i: any): any => (i as any) < (o as any)) ?? ((((e as any).at as any)(-1) ?? 0) as any) - (n as any),
      c: any = ((o as any) - (a as any) as any) / ((r as any) - (a as any) as any);
    return (((t as any)[((a as any) + (n as any) as any) % (n as any)] as any) * ((1 as any) - (c as any) as any) as any) + (((t as any)[(r as any) % (n as any)] as any) * (c as any) as any);
  });
}
function si(this: any, t: any, n: any): any {
  const e: any = (t as any).length;
  if ((e as any) === (0 as any)) return 0;
  let s: any = ((t as any).findIndex as any)((i: any): any => ((i as any).angle as any) >= (n as any));
  (s as any) < (0 as any) && (s = 0);
  const o: any = (t as any)[s],
    r: any = (t as any)[(((s as any) - (1 as any) as any) + (e as any) as any) % (e as any)],
    a: any = ((((o as any).angle as any) - ((r as any).angle as any) as any) + (J as any) as any) % (J as any);
  if ((a as any) === (0 as any)) return (o as any).reach;
  const c: any = ((((n as any) - ((r as any).angle as any) as any) + (J as any) as any) % (J as any) as any) / (a as any);
  return ((r as any).reach as any) + ((((o as any).reach as any) - ((r as any).reach as any) as any) * (c as any) as any);
}
function oi(this: any, t: any, [n, e]: any): any {
  let s: any = null;
  for (let o: any = 0; (o as any) < ((t as any).length as any); o++) {
    const [r, a]: any = (t as any)[o],
      [c, i]: any = (t as any)[((o as any) + (1 as any) as any) % ((t as any).length as any)];
    if ((a as any) === (i as any) || (((a as any) - (e as any) as any) * ((i as any) - (e as any) as any) as any) > (0 as any)) continue;
    const u: any = (r as any) + ((((e as any) - (a as any) as any) / ((i as any) - (a as any) as any) as any) * ((c as any) - (r as any) as any) as any);
    (u as any) >= (n as any) && ((s as any) == (null as any) || (u as any) > (((s as any).point as any)[0] as any)) && (s = {
      edge: o,
      point: [u, e]
    });
  }
  return s;
}
function fe(this: any, t: any): any {
  return (String as any)((((Math as any).round as any)((t as any) * (100 as any)) as any) / (100 as any));
}
const ri: any = [1, 1];
function ai(this: any, t: any, n: any): any {
  const e: any = (t as any).length;
  let s: any = -1;
  for (let c: any = 0; (c as any) < (e as any) && (s as any) < (0 as any); c++) (((t as any)[c] as any)[2] as any) <= (0 as any) && (((t as any)[((c as any) + (1 as any) as any) % (e as any)] as any)[2] as any) > (0 as any) && (s = c);
  if ((s as any) < (0 as any)) return (e as any) === (0 as any) || (((t as any)[0] as any)[2] as any) <= (0 as any) ? null : ((t as any).map as any)(([c, i]: any): any => ({
    kind: "line",
    to: [c, i]
  }));
  const o: any = [];
  let r: any = [1, 0],
    a: any = null;
  for (let c: any = 0; (c as any) < (e as any); c++) {
    const i: any = (t as any)[((s as any) + (c as any) as any) % (e as any)],
      u: any = (t as any)[(((s as any) + (c as any) as any) + (1 as any) as any) % (e as any)],
      l: any = ((i as any)[2] as any) > (0 as any),
      h: any = ((u as any)[2] as any) > (0 as any);
    if (l && h) ((o as any).push as any)({
      kind: "line",
      to: [(u as any)[0], (u as any)[1]]
    });else if (l) a = (de as any)(i, u), ((o as any).push as any)({
      kind: "line",
      to: a
    });else if (h) {
      const f: any = (de as any)(i, u);
      (a as any) === (null as any) ? r = f : ((o as any).push as any)((pe as any)(a, f, n)), ((o as any).push as any)({
        kind: "line",
        to: [(u as any)[0], (u as any)[1]]
      });
    }
  }
  return (a as any) !== (null as any) && ((o as any).push as any)((pe as any)(a, r, n)), o;
}
function ci(this: any, t: any, n: any): any {
  const e: any = (li as any)(t, n),
    s: any = (e as any).length;
  if (((e as any).every as any)((i: any): any => (i as any).isInside)) return t;
  let o: any = -1;
  for (let i: any = 0; (i as any) < (s as any) && (o as any) < (0 as any); i++) ((e as any)[i] as any).isInside && !((e as any)[(((i as any) + (s as any) as any) - (1 as any) as any) % (s as any)] as any).isInside && (o = i);
  if ((o as any) < (0 as any)) {
    const i: any = ((e as any).reduce as any)((u: any, l: any): any => (u as any) + ((l as any).sweep as any), 0);
    return (((Math as any).abs as any)(i) as any) > ((Math as any).PI as any) ? (r0 as any)(n, ((Math as any).sign as any)(i)) : null;
  }
  const r: any = [];
  let a: any = null,
    c: any = 0;
  for (let i: any = 0; (i as any) < (s as any); i++) {
    const u: any = (e as any)[((o as any) + (i as any) as any) % (s as any)];
    (u as any).isInside ? ((a as any) !== (null as any) && ((r as any).push as any)({
      kind: "arc",
      to: (u as any).from,
      radii: n,
      sweep: c
    }), a = null, ((r as any).push as any)((u as any).segment)) : ((a as any) === (null as any) && (a = (u as any).from, c = 0), c += (u as any).sweep);
  }
  return (a as any) !== (null as any) && ((r as any).push as any)({
    kind: "arc",
    to: ((e as any)[o] as any).from,
    radii: n,
    sweep: c
  }), r;
}
function ii(this: any, t: any, n: any): any {
  const e: any = (c: any): any => ((c as any).kind as any) === ("arc" as any) && (((c as any).radii as any)[0] as any) === ((t as any)[0] as any) && (((c as any).radii as any)[1] as any) === ((t as any)[1] as any),
    s: any = [],
    o: any = [],
    r: any = [],
    a: any = [];
  for (const c of n) {
    const i: any = ((c as any).findIndex as any)(e);
    if ((i as any) < (0 as any)) {
      ((s as any).push as any)(c);
      continue;
    }
    let u: any = ((c as any)[i] as any).to,
      l: any = [],
      h: any = u;
    for (let f: any = 1; (f as any) <= ((c as any).length as any); f++) {
      const d: any = (c as any)[((i as any) + (f as any) as any) % ((c as any).length as any)];
      (e as any)(d) ? (((r as any).push as any)({
        from: h,
        sweep: (d as any).sweep
      }), ((a as any).push as any)(h, (d as any).to), ((l as any).length as any) > (0 as any) && ((o as any).push as any)((fi as any)(u, l)), l = [], u = (d as any).to) : ((l as any).push as any)(d), h = (d as any).to;
    }
  }
  return ((r as any).length as any) === (0 as any) ? [(r0 as any)(t, 1), ...s] : [...(Mi as any)([...o, ...(di as any)(t, r, a)]), ...s];
}
function r0(this: any, t: any, n: any): any {
  return [{
    kind: "arc",
    to: [-(t as any)[0], 0],
    radii: t,
    sweep: (n as any) * ((Math as any).PI as any)
  }, {
    kind: "arc",
    to: [(t as any)[0], 0],
    radii: t,
    sweep: (n as any) * ((Math as any).PI as any)
  }];
}
function ks(this: any, t: any, n: any): any {
  const e: any = ((Math as any).cos as any)(n),
    s: any = ((Math as any).sin as any)(n),
    o: any = (1 as any) / (((Math as any).sqrt as any)((((e as any) * (e as any) as any) / (((t as any)[0] as any) * ((t as any)[0] as any) as any) as any) + (((s as any) * (s as any) as any) / (((t as any)[1] as any) * ((t as any)[1] as any) as any) as any)) as any);
  return [(o as any) * (e as any), (o as any) * (s as any)];
}
function de(this: any, t: any, n: any): any {
  const e: any = ((t as any)[2] as any) / (((t as any)[2] as any) - ((n as any)[2] as any) as any),
    s: any = ((t as any)[0] as any) + ((((n as any)[0] as any) - ((t as any)[0] as any) as any) * (e as any) as any),
    o: any = ((t as any)[1] as any) + ((((n as any)[1] as any) - ((t as any)[1] as any) as any) * (e as any) as any),
    r: any = ((Math as any).sqrt as any)(((s as any) * (s as any) as any) + ((o as any) * (o as any) as any));
  return [(s as any) / (r as any), (o as any) / (r as any)];
}
function pe(this: any, t: any, n: any, e: any): any {
  const s: any = ((me as any)((((Math as any).atan2 as any)((n as any)[1], (n as any)[0]) as any) - (e as any)) as any) - ((me as any)((((Math as any).atan2 as any)((t as any)[1], (t as any)[0]) as any) - (e as any)) as any);
  return {
    kind: "arc",
    to: n,
    radii: ri,
    sweep: s
  };
}
function li(this: any, t: any, n: any): any {
  const e: any = (1 as any) / (((n as any)[0] as any) * ((n as any)[0] as any) as any),
    s: any = (1 as any) / (((n as any)[1] as any) * ((n as any)[1] as any) as any),
    o: any = (c: any): any => ((((e as any) * ((c as any)[0] as any) as any) * ((c as any)[0] as any) as any) + (((s as any) * ((c as any)[1] as any) as any) * ((c as any)[1] as any) as any) as any) - (1 as any),
    r: any = [];
  let a: any = ((t as any)[((t as any).length as any) - (1 as any)] as any).to;
  for (const c of t) {
    if (((c as any).kind as any) === ("line" as any)) {
      const i: any = (ui as any)(a, (c as any).to, e, s);
      let u: any = a;
      for (let l: any = 0; (l as any) <= ((i as any).length as any); l++) {
        const h: any = (l as any) === (0 as any) ? 0 : (i as any)[(l as any) - (1 as any)],
          f: any = (l as any) === ((i as any).length as any) ? 1 : (i as any)[l],
          d: any = (l as any) === ((i as any).length as any) ? (c as any).to : (Me as any)(a, (c as any).to, f);
        ((r as any).push as any)({
          from: u,
          segment: {
            kind: "line",
            to: d
          },
          sweep: ((Math as any).atan2 as any)((((u as any)[0] as any) * ((d as any)[1] as any) as any) - (((u as any)[1] as any) * ((d as any)[0] as any) as any), (((u as any)[0] as any) * ((d as any)[0] as any) as any) + (((u as any)[1] as any) * ((d as any)[1] as any) as any)),
          isInside: ((o as any)((Me as any)(a, (c as any).to, ((h as any) + (f as any) as any) / (2 as any))) as any) < (0 as any)
        }), u = d;
      }
    } else {
      const i: any = ((c as any).radii as any)[0],
        u: any = ((Math as any).atan2 as any)((a as any)[1], (a as any)[0]),
        l: any = (hi as any)(i, u, (c as any).sweep, e, s);
      let h: any = a;
      for (let f: any = 0; (f as any) <= ((l as any).length as any); f++) {
        const d: any = (f as any) === (0 as any) ? 0 : (l as any)[(f as any) - (1 as any)],
          p: any = (f as any) === ((l as any).length as any) ? 1 : (l as any)[f],
          y: any = (u as any) + (((c as any).sweep as any) * (p as any) as any),
          m: any = (f as any) === ((l as any).length as any) ? (c as any).to : [(i as any) * (((Math as any).cos as any)(y) as any), (i as any) * (((Math as any).sin as any)(y) as any)],
          g: any = (u as any) + ((((c as any).sweep as any) * ((d as any) + (p as any) as any) as any) / (2 as any) as any),
          x: any = ((c as any).sweep as any) * ((p as any) - (d as any) as any);
        ((r as any).push as any)({
          from: h,
          segment: {
            kind: "arc",
            to: m,
            radii: (c as any).radii,
            sweep: x
          },
          sweep: x,
          isInside: ((o as any)([(i as any) * (((Math as any).cos as any)(g) as any), (i as any) * (((Math as any).sin as any)(g) as any)]) as any) < (0 as any)
        }), h = m;
      }
    }
    a = (c as any).to;
  }
  return r;
}
function ui(this: any, t: any, n: any, e: any, s: any): any {
  const o: any = ((n as any)[0] as any) - ((t as any)[0] as any),
    r: any = ((n as any)[1] as any) - ((t as any)[1] as any),
    a: any = (((e as any) * (o as any) as any) * (o as any) as any) + (((s as any) * (r as any) as any) * (r as any) as any),
    c: any = (((e as any) * ((t as any)[0] as any) as any) * (o as any) as any) + (((s as any) * ((t as any)[1] as any) as any) * (r as any) as any),
    i: any = ((((e as any) * ((t as any)[0] as any) as any) * ((t as any)[0] as any) as any) + (((s as any) * ((t as any)[1] as any) as any) * ((t as any)[1] as any) as any) as any) - (1 as any),
    u: any = ((c as any) * (c as any) as any) - ((a as any) * (i as any) as any);
  if ((a as any) === (0 as any) || (u as any) <= (0 as any)) return [];
  const l: any = ((Math as any).sqrt as any)(u),
    h: any = -((c as any) + (((c as any) < (0 as any) ? -l : l) as any));
  return (((([(h as any) / (a as any), (i as any) / (h as any)] as any).filter as any)((f: any): any => (f as any) > (0 as any) && (f as any) < (1 as any)) as any).sort as any)((f: any, d: any): any => (f as any) - (d as any));
}
function hi(this: any, t: any, n: any, e: any, s: any, o: any): any {
  if ((s as any) === (o as any) || (e as any) === (0 as any)) return [];
  const r: any = (((1 as any) / ((t as any) * (t as any) as any) as any) - (o as any) as any) / ((s as any) - (o as any) as any);
  if (!((r as any) > (0 as any) && (r as any) < (1 as any))) return [];
  const a: any = ((Math as any).acos as any)(((Math as any).sqrt as any)(r)),
    c: any = [];
  for (const i of [a, -a, ((Math as any).PI as any) - (a as any), ((Math as any).PI as any) + (a as any)]) {
    const l: any = (((e as any) > (0 as any) ? (a0 as any)((i as any) - (n as any)) : (a0 as any)((n as any) - (i as any))) as any) / (((Math as any).abs as any)(e) as any);
    (l as any) > (0 as any) && (l as any) < (1 as any) && ((c as any).push as any)(l);
  }
  return ((c as any).sort as any)((i: any, u: any): any => (i as any) - (u as any));
}
function fi(this: any, t: any, n: any): any {
  const e: any = [t, ...((n as any).map as any)((o: any): any => (o as any).to)],
    s: any = ((((n as any).map as any)((o: any, r: any): any => ((o as any).kind as any) === ("line" as any) ? {
      kind: "line",
      to: (e as any)[r]
    } : {
      ...o,
      to: (e as any)[r],
      sweep: -(o as any).sweep
    }) as any).reverse as any)();
  return {
    from: (e as any)[((e as any).length as any) - (1 as any)],
    to: t,
    segments: s
  };
}
function di(this: any, t: any, n: any, e: any): any {
  const s: any = ((((e as any).map as any)((r: any): any => ({
      point: r,
      angle: (a0 as any)(((Math as any).atan2 as any)((r as any)[1], (r as any)[0]))
    })) as any).sort as any)((r: any, a: any): any => ((r as any).angle as any) - ((a as any).angle as any)),
    o: any = [];
  for (let r: any = 0; (r as any) < ((s as any).length as any); r++) {
    const a: any = (s as any)[r],
      c: any = (s as any)[((r as any) + (1 as any) as any) % ((s as any).length as any)],
      i: any = ((r as any) + (1 as any) as any) < ((s as any).length as any) ? ((c as any).angle as any) - ((a as any).angle as any) : (((c as any).angle as any) + ((2 as any) * ((Math as any).PI as any) as any) as any) - ((a as any).angle as any);
    if ((i as any) <= (0 as any)) continue;
    const u: any = ((a as any).angle as any) + ((i as any) / (2 as any) as any);
    (((n as any).reduce as any)((l: any, h: any): any => (l as any) + ((pi as any)(h, u) as any), 0) as any) === (0 as any) && ((o as any).push as any)({
      from: (a as any).point,
      to: (c as any).point,
      segments: [{
        kind: "arc",
        to: (c as any).point,
        radii: t,
        sweep: i
      }]
    });
  }
  return o;
}
function pi(this: any, t: any, n: any): any {
  const e: any = ((Math as any).atan2 as any)(((t as any).from as any)[1], ((t as any).from as any)[0]);
  return ((((t as any).sweep as any) > (0 as any) ? (a0 as any)((n as any) - (e as any)) : (a0 as any)((e as any) - (n as any))) as any) < (((Math as any).abs as any)((t as any).sweep) as any) ? ((Math as any).sign as any)((t as any).sweep) : 0;
}
function Mi(this: any, t: any): any {
  const n: any = (r: any): any => `${(r as any)[0]} ${(r as any)[1]}`,
    e: any = new (Map as any)();
  for (const r of t) {
    const a: any = ((e as any).get as any)((n as any)((r as any).from));
    (a as any) === (void 0 as any) ? ((e as any).set as any)((n as any)((r as any).from), [r]) : ((a as any).push as any)(r);
  }
  const s: any = new (Set as any)(),
    o: any = [];
  for (const r of t) {
    const a: any = [];
    let c: any = r;
    for (; (c as any) !== (void 0 as any) && !((s as any).has as any)(c);) ((s as any).add as any)(c), ((a as any).push as any)(...(c as any).segments), c = ((e as any).get as any)((n as any)((c as any).to))?.find((i: any): any => !((s as any).has as any)(i));
    ((a as any).length as any) > (0 as any) && ((o as any).push as any)(a);
  }
  return o;
}
function Me(this: any, t: any, n: any, e: any): any {
  return [((t as any)[0] as any) + ((((n as any)[0] as any) - ((t as any)[0] as any) as any) * (e as any) as any), ((t as any)[1] as any) + ((((n as any)[1] as any) - ((t as any)[1] as any) as any) * (e as any) as any)];
}
function me(this: any, t: any): any {
  return (t as any) - (((2 as any) * ((Math as any).PI as any) as any) * (((Math as any).round as any)((t as any) / ((2 as any) * ((Math as any).PI as any) as any)) as any) as any);
}
function a0(this: any, t: any): any {
  const n: any = (t as any) % ((2 as any) * ((Math as any).PI as any) as any);
  return (n as any) < (0 as any) ? (n as any) + ((2 as any) * ((Math as any).PI as any) as any) : n;
}
const mi: number = 60,
  yi: number = 256,
  gi: number = 24,
  xi: number = 2e4,
  bi: number = .2;
function vi(this: any, t: any, n: any, e: any): any {
  const s: any = {
      field: t,
      tolerance: e,
      root: ((e as any).deviation as any) * (.001 as any),
      reach: ((n as any).step as any) * (((Math as any).hypot as any)((n as any).nx, (n as any).ny) as any)
    },
    o: any = [];
  for (const r of (wi as any)(s, n)) {
    const a: any = (Ei as any)((ki as any)(s, r), e);
    ((a as any).length as any) >= (3 as any) && ((o as any).push as any)(a);
  }
  return o;
}
function wi(this: any, t: any, n: any): any {
  const {
      field: e
    }: any = t,
    {
      x0: s,
      y0: o,
      step: r,
      nx: a,
      ny: c
    }: any = n,
    i: any = (a as any) + (1 as any),
    u: any = new (Float64Array as any)((i as any) * ((c as any) + (1 as any) as any));
  for (let v: any = 0; (v as any) <= (c as any); v++) for (let b: any = 0; (b as any) <= (a as any); b++) (u as any)[((v as any) * (i as any) as any) + (b as any)] = (e as any)((s as any) + ((b as any) * (r as any) as any), (o as any) + ((v as any) * (r as any) as any));
  const l: any = ((2 as any) * (i as any) as any) * ((c as any) + (1 as any) as any),
    h: any = ((new (Int32Array as any)(l) as any).fill as any)(-1),
    f: any = new (Map as any)(),
    d: any = (v: any): any => {
      const b: any = ((f as any).get as any)(v);
      if ((b as any) !== (void 0 as any)) return b;
      const A: any = (v as any) >> (1 as any),
        E: any = (v as any) & (1 as any) ? (A as any) + (i as any) : (A as any) + (1 as any),
        P: any = (s as any) + (((A as any) % (i as any) as any) * (r as any) as any),
        $: any = (o as any) + ((((Math as any).floor as any)((A as any) / (i as any)) as any) * (r as any) as any),
        D: any = (s as any) + (((E as any) % (i as any) as any) * (r as any) as any),
        z: any = (o as any) + ((((Math as any).floor as any)((E as any) / (i as any)) as any) * (r as any) as any),
        B: any = (As as any)(t, P, $, (u as any)[A], D, z, (u as any)[E]),
        R: any = [(P as any) + (((D as any) - (P as any) as any) * (B as any) as any), ($ as any) + (((z as any) - ($ as any) as any) * (B as any) as any)];
      return ((f as any).set as any)(v, R), R;
    },
    p: any = [0, 0, 0, 0],
    y: any = [0, 0, 0, 0],
    m: any = [],
    g: any = [];
  for (let v: any = 0; (v as any) < (c as any); v++) for (let b: any = 0; (b as any) < (a as any); b++) {
    const A: any = ((v as any) * (i as any) as any) + (b as any);
    (p as any)[0] = A, (p as any)[1] = (A as any) + (1 as any), (p as any)[2] = ((A as any) + (1 as any) as any) + (i as any), (p as any)[3] = (A as any) + (i as any), (y as any)[0] = (2 as any) * (A as any), (y as any)[1] = ((2 as any) * ((A as any) + (1 as any) as any) as any) + (1 as any), (y as any)[2] = (2 as any) * ((A as any) + (i as any) as any), (y as any)[3] = ((2 as any) * (A as any) as any) + (1 as any), (m as any).length = 0, (g as any).length = 0;
    for (let E: any = 0; (E as any) < (4 as any); E++) {
      const P: any = ((u as any)[(p as any)[E]] as any) < (0 as any),
        $: any = ((u as any)[(p as any)[((E as any) + (1 as any) as any) & (3 as any)]] as any) < (0 as any);
      (P as any) !== ($ as any) && (((m as any).push as any)((y as any)[E]), ((g as any).push as any)(P));
    }
    if (((m as any).length as any) === (2 as any)) {
      const E: any = (g as any)[0] ? 0 : 1;
      (h as any)[(m as any)[E]] = (m as any)[(1 as any) - (E as any)];
    } else if (((m as any).length as any) === (4 as any)) {
      const E: any = ((e as any)((s as any) + (((b as any) + (.5 as any) as any) * (r as any) as any), (o as any) + (((v as any) + (.5 as any) as any) * (r as any) as any)) as any) < (0 as any);
      for (let P: any = 0; (P as any) < (4 as any); P++) (g as any)[P] && ((h as any)[(m as any)[P]] = (m as any)[((P as any) + ((E ? 1 : 3) as any) as any) & (3 as any)]);
    }
  }
  const x: any = [],
    w: any = new (Uint8Array as any)(l);
  for (let v: any = 0; (v as any) < (l as any); v++) {
    if (((h as any)[v] as any) < (0 as any) || (w as any)[v]) continue;
    const b: any = [];
    let A: any = v;
    for (; (A as any) >= (0 as any) && !(w as any)[A];) (w as any)[A] = 1, ((b as any).push as any)((d as any)(A)), A = (h as any)[A];
    (A as any) === (v as any) && ((x as any).push as any)(b);
  }
  return x;
}
function As(this: any, t: any, n: any, e: any, s: any, o: any, r: any, a: any): any {
  let c: any = 0,
    i: any = s,
    u: any = 1,
    l: any = a,
    h: any = 0,
    f: any = 0;
  for (let d: any = 0; (d as any) < (mi as any); d++) {
    f = (((c as any) * (l as any) as any) - ((u as any) * (i as any) as any) as any) / ((l as any) - (i as any) as any);
    const p: any = ((t as any).field as any)((n as any) + (((o as any) - (n as any) as any) * (f as any) as any), (e as any) + (((r as any) - (e as any) as any) * (f as any) as any));
    if ((((Math as any).abs as any)(p) as any) <= ((t as any).root as any) || ((u as any) - (c as any) as any) <= (1e-15 as any)) break;
    ((p as any) < (0 as any) as any) == ((l as any) < (0 as any) as any) ? (u = f, l = p, (h as any) === (-1 as any) && (i /= 2), h = -1) : (c = f, i = p, (h as any) === (1 as any) && (l /= 2), h = 1);
  }
  return f;
}
function ki(this: any, t: any, n: any): any {
  const e: any = [];
  for (let s: any = 0; (s as any) < ((n as any).length as any); s++) {
    const o: any = (n as any)[s],
      r: any = (n as any)[((s as any) + (1 as any) as any) % ((n as any).length as any)];
    ((o as any)[0] as any) === ((r as any)[0] as any) && ((o as any)[1] as any) === ((r as any)[1] as any) || (((e as any).push as any)(o), (Cn as any)(t, o, r, 0, e));
  }
  return e;
}
function Cn(this: any, t: any, n: any, e: any, s: any, o: any): any {
  const r: any = ((e as any)[0] as any) - ((n as any)[0] as any),
    a: any = ((e as any)[1] as any) - ((n as any)[1] as any),
    c: any = ((Math as any).sqrt as any)(((r as any) * (r as any) as any) + ((a as any) * (a as any) as any));
  if ((c as any) === (0 as any) || (s as any) >= (gi as any) || ((o as any).length as any) >= (xi as any)) return;
  const i: any = (((n as any)[0] as any) + ((e as any)[0] as any) as any) / (2 as any),
    u: any = (((n as any)[1] as any) + ((e as any)[1] as any) as any) / (2 as any),
    l: any = ((t as any).field as any)(i, u);
  if (!((Number as any).isFinite as any)(l)) return;
  const h: any = (l as any) > (0 as any) ? 1 : -1,
    f: any = ((-a as any) / (c as any) as any) * (h as any),
    d: any = ((r as any) / (c as any) as any) * (h as any),
    p: any = (Es as any)(t, i, u, l, f, d);
  if ((p as any) === (null as any) || (p as any) <= ((((t as any).tolerance as any).deviation as any) / (2 as any) as any) && (c as any) <= (((t as any).tolerance as any).edge as any)) return;
  const y: any = (l as any) > (0 as any) ? (Ai as any)(t, i, u, l, f, d, p) : [(i as any) + ((f as any) * (p as any) as any), (u as any) + ((d as any) * (p as any) as any)];
  (Cn as any)(t, n, y, (s as any) + (1 as any), o), ((o as any).push as any)(y), (Cn as any)(t, y, e, (s as any) + (1 as any), o);
}
function Ai(this: any, t: any, n: any, e: any, s: any, o: any, r: any, a: any): any {
  const c: any = [(n as any) + ((o as any) * (a as any) as any), (e as any) + ((r as any) * (a as any) as any)],
    i: any = (a as any) * (.001 as any),
    u: any = (((t as any).field as any)((n as any) + (i as any), e) as any) - (((t as any).field as any)((n as any) - (i as any), e) as any),
    l: any = (((t as any).field as any)(n, (e as any) + (i as any)) as any) - (((t as any).field as any)(n, (e as any) - (i as any)) as any),
    h: any = ((Math as any).sqrt as any)(((u as any) * (u as any) as any) + ((l as any) * (l as any) as any));
  if ((h as any) === (0 as any)) return c;
  const f: any = (((u as any) * (r as any) as any) - ((l as any) * (o as any) as any) as any) < (0 as any) ? -1 : 1,
    d: any = ((-l as any) / (h as any) as any) * (f as any),
    p: any = ((u as any) / (h as any) as any) * (f as any);
  if ((((d as any) * (o as any) as any) + ((p as any) * (r as any) as any) as any) < (bi as any)) return c;
  const y: any = (Es as any)(t, n, e, s, d, p);
  return (y as any) === (null as any) || ((y as any) * (((d as any) * (o as any) as any) + ((p as any) * (r as any) as any) as any) as any) <= (a as any) ? c : [(n as any) + ((d as any) * (y as any) as any), (e as any) + ((p as any) * (y as any) as any)];
}
function Es(this: any, t: any, n: any, e: any, s: any, o: any, r: any): any {
  if ((s as any) === (0 as any)) return 0;
  let a: any = 0,
    c: any = s;
  for (let i: any = 0; (i as any) < (yi as any); i++) {
    const u: any = (a as any) + (((Math as any).max as any)(((Math as any).abs as any)(c), (t as any).root) as any);
    if ((u as any) > ((t as any).reach as any)) return null;
    const l: any = (n as any) + ((o as any) * (u as any) as any),
      h: any = (e as any) + ((r as any) * (u as any) as any),
      f: any = ((t as any).field as any)(l, h);
    if (((f as any) < (0 as any) as any) != ((s as any) < (0 as any) as any)) return (a as any) + (((u as any) - (a as any) as any) * ((As as any)(t, (n as any) + ((o as any) * (a as any) as any), (e as any) + ((r as any) * (a as any) as any), c, l, h, f) as any) as any);
    a = u, c = f;
  }
  return null;
}
function Ei(this: any, t: any, n: any): any {
  const e: any = (t as any).length;
  if ((e as any) < (4 as any)) return t;
  const s: any = new (Uint8Array as any)(e);
  let o: any = 0,
    r: any = -1;
  for (let c: any = 1; (c as any) < (e as any); c++) {
    const i: any = (ye as any)((t as any)[0], (t as any)[c]);
    (i as any) > (r as any) && (r = i, o = c);
  }
  (s as any)[0] = 1, (s as any)[o] = 1;
  const a: any = (c: any, i: any): any => {
    if (((i as any) - (c as any) as any) < (2 as any)) return;
    const u: any = (t as any)[c],
      l: any = (t as any)[(i as any) % (e as any)];
    let h: any = -1,
      f: any = c;
    for (let p: any = (c as any) + (1 as any); (p as any) < (i as any); p++) {
      const y: any = (Ii as any)((t as any)[p], u, l);
      (y as any) > (h as any) && (h = y, f = p);
    }
    const d: any = (h as any) > (((n as any).deviation as any) / (2 as any) as any);
    !d && (((Math as any).sqrt as any)((ye as any)(u, l)) as any) <= ((n as any).edge as any) || (d || (f = ((c as any) + (i as any) as any) >> (1 as any)), (s as any)[f] = 1, (a as any)(c, f), (a as any)(f, i));
  };
  return (a as any)(0, o), (a as any)(o, e), ((t as any).filter as any)((c: any, i: any): any => ((s as any)[i] as any) === (1 as any));
}
function ye(this: any, t: any, n: any): any {
  const e: any = ((n as any)[0] as any) - ((t as any)[0] as any),
    s: any = ((n as any)[1] as any) - ((t as any)[1] as any);
  return ((e as any) * (e as any) as any) + ((s as any) * (s as any) as any);
}
function Ii(this: any, t: any, n: any, e: any): any {
  const s: any = ((e as any)[0] as any) - ((n as any)[0] as any),
    o: any = ((e as any)[1] as any) - ((n as any)[1] as any),
    r: any = ((t as any)[0] as any) - ((n as any)[0] as any),
    a: any = ((t as any)[1] as any) - ((n as any)[1] as any),
    c: any = ((s as any) * (s as any) as any) + ((o as any) * (o as any) as any),
    i: any = (c as any) > (0 as any) ? ((Math as any).min as any)(1, ((Math as any).max as any)(0, (((r as any) * (s as any) as any) + ((a as any) * (o as any) as any) as any) / (c as any))) : 0,
    u: any = (r as any) - ((s as any) * (i as any) as any),
    l: any = (a as any) - ((o as any) * (i as any) as any);
  return ((Math as any).sqrt as any)(((u as any) * (u as any) as any) + ((l as any) * (l as any) as any));
}
const _i: number = .02,
  Pi: number = 16,
  Si: number = .015,
  Ci: number = 400,
  $i: number = 512,
  D0: number = 5,
  It: any = new (Map as any)();
function Ti(this: any, t: any, n: any): any {
  const e: any = ((Math as any).min as any)(Pi, ((Math as any).max as any)(0, ((Math as any).ceil as any)(((Math as any).log2 as any)(((Math as any).max as any)(n, 1))))),
    s: any = `${e}|${(t as any).wid}|${(((t as any).oval as any).join as any)()}|${(t as any).ovalMix}|${(((t as any).pts as any).join as any)()}`,
    o: any = ((It as any).get as any)(s);
  if ((o as any) !== (void 0 as any)) return ((It as any).delete as any)(s), ((It as any).set as any)(s, o), o;
  const r: any = (Li as any)((Ri as any)(t), (_i as any) / ((2 as any) ** (e as any) as any));
  if (((It as any).set as any)(s, r), ((It as any).size as any) > ($i as any)) {
    const a: any = ((((It as any).keys as any)() as any).next as any)();
    ((a as any).done as any) !== (!0 as any) && ((It as any).delete as any)((a as any).value);
  }
  return r;
}
function Ri(this: any, t: any): any {
  const [n, e]: any = (t as any).oval,
    o: any = (n as any) > (1e-5 as any) && (e as any) > (1e-5 as any) ? ((t as any).ovalMix as any) > (1e-4 as any) ? ((Math as any).min as any)(1, (t as any).ovalMix) : (Bi as any)(0, .08, ((Math as any).min as any)(n, e)) : 0,
    r: any = ((Math as any).max as any)(0, (((t as any).pts as any).length as any) - (1 as any)),
    a: any = new (Float64Array as any)((r as any) * (D0 as any));
  for (let c: any = 0; (c as any) < (r as any); c++) {
    const [i, u]: any = ((t as any).pts as any)[c],
      l: any = ((((t as any).pts as any)[(c as any) + (1 as any)] as any)[0] as any) - (i as any),
      h: any = ((((t as any).pts as any)[(c as any) + (1 as any)] as any)[1] as any) - (u as any),
      f: any = ((l as any) * (l as any) as any) + ((h as any) * (h as any) as any);
    ((a as any).set as any)([i, u, l, h, (f as any) > (0 as any) ? (1 as any) / (f as any) : 0], (c as any) * (D0 as any));
  }
  return {
    segments: a,
    halfWidth: ((t as any).wid as any) > (0 as any) ? (t as any).wid : -1,
    rx: n,
    ry: e,
    ellipseMix: o
  };
}
function Fi(this: any, t: any, n: any, e: any): any {
  const s: any = ((Oi as any)((t as any).segments, n, e) as any) - ((t as any).halfWidth as any);
  if (((t as any).ellipseMix as any) === (0 as any)) return s;
  const o: any = (n as any) / ((t as any).rx as any),
    r: any = (e as any) / ((t as any).ry as any),
    a: any = ((((Math as any).sqrt as any)(((o as any) * (o as any) as any) + ((r as any) * (r as any) as any)) as any) - (1 as any) as any) * (((Math as any).min as any)((t as any).rx, (t as any).ry) as any);
  return ((s as any) * ((1 as any) - ((t as any).ellipseMix as any) as any) as any) + ((a as any) * ((t as any).ellipseMix as any) as any);
}
function Oi(this: any, t: any, n: any, e: any): any {
  let s: any = 1e6;
  for (let o: any = 0; (o as any) < ((t as any).length as any); o += D0) {
    const r: any = (n as any) - ((t as any)[o] as any),
      a: any = (e as any) - ((t as any)[(o as any) + (1 as any)] as any),
      c: any = (t as any)[(o as any) + (2 as any)],
      i: any = (t as any)[(o as any) + (3 as any)],
      u: any = (((r as any) * (c as any) as any) + ((a as any) * (i as any) as any) as any) * ((t as any)[(o as any) + (4 as any)] as any),
      l: any = (u as any) < (0 as any) ? 0 : (u as any) > (1 as any) ? 1 : u,
      h: any = (r as any) - ((c as any) * (l as any) as any),
      f: any = (a as any) - ((i as any) * (l as any) as any),
      d: any = ((h as any) * (h as any) as any) + ((f as any) * (f as any) as any);
    (d as any) < (s as any) && (s = d);
  }
  return ((Math as any).sqrt as any)(s);
}
function Li(this: any, t: any, n: any): any {
  let e: any = (1 as any) / (0 as any),
    s: any = (1 as any) / (0 as any),
    o: any = (-1 as any) / (0 as any),
    r: any = (-1 as any) / (0 as any),
    a: any = (1 as any) / (0 as any);
  const {
    segments: c,
    halfWidth: i
  }: any = t;
  if ((i as any) > (0 as any) && ((t as any).ellipseMix as any) < (1 as any) && ((c as any).length as any) > (0 as any)) {
    for (let h: any = 0; (h as any) < ((c as any).length as any); h += D0) for (const [f, d] of [[(c as any)[h], (c as any)[(h as any) + (1 as any)]], [((c as any)[h] as any) + ((c as any)[(h as any) + (2 as any)] as any), ((c as any)[(h as any) + (1 as any)] as any) + ((c as any)[(h as any) + (3 as any)] as any)]]) e = ((Math as any).min as any)(e, (f as any) - (i as any)), s = ((Math as any).min as any)(s, (d as any) - (i as any)), o = ((Math as any).max as any)(o, (f as any) + (i as any)), r = ((Math as any).max as any)(r, (d as any) + (i as any));
    a = i;
  }
  if (((t as any).ellipseMix as any) > (0 as any) && (e = ((Math as any).min as any)(e, -(t as any).rx), s = ((Math as any).min as any)(s, -(t as any).ry), o = ((Math as any).max as any)(o, (t as any).rx), r = ((Math as any).max as any)(r, (t as any).ry), a = ((Math as any).min as any)(a, (t as any).rx, (t as any).ry)), !((o as any) > (e as any) && (r as any) > (s as any))) return [];
  const u: any = ((Math as any).max as any)(((Math as any).min as any)(Si, (a as any) / (3 as any)), (((Math as any).max as any)((o as any) - (e as any), (r as any) - (s as any)) as any) / (Ci as any)),
    l: any = {
      x0: (e as any) - ((2 as any) * (u as any) as any),
      y0: (s as any) - ((2 as any) * (u as any) as any),
      step: u,
      nx: (((Math as any).ceil as any)(((o as any) - (e as any) as any) / (u as any)) as any) + (4 as any),
      ny: (((Math as any).ceil as any)(((r as any) - (s as any) as any) / (u as any)) as any) + (4 as any)
    };
  return (vi as any)((h: any, f: any): any => (Fi as any)(t, h, f), l, {
    deviation: n,
    edge: ((Math as any).sqrt as any)((4 as any) * (n as any))
  });
}
function Bi(this: any, t: any, n: any, e: any): any {
  const s: any = ((Math as any).min as any)(1, ((Math as any).max as any)(0, ((e as any) - (t as any) as any) / ((n as any) - (t as any) as any)));
  return ((s as any) * (s as any) as any) * ((3 as any) - ((2 as any) * (s as any) as any) as any);
}
const ge: number = 48,
  xe: number = 11,
  jt: number = .055,
  Is: any = ((Math as any).PI as any) * (.999 as any),
  Ni: number = .4,
  Di: number = .0035,
  qi: number = .75,
  zi: number = .45,
  Gi: number = 1.8,
  Yi: number = .8,
  Hi: any = ((ze as any).map as any)(Wi),
  Ki: number = 192,
  Ui: any = ((Math as any).PI as any) / (48 as any);
function ji(this: any, t: any, n: any, e: any, s: any = {}): any {
  const o: any = (((t as any).zoom as any) * (e as any) as any) / (2 as any),
    [r, a]: any = (t as any).squash;
  if ((o as any) === (0 as any) || (r as any) === (0 as any) || (a as any) === (0 as any)) return {
    size: e,
    body: "",
    eyes: "",
    glow: null,
    proof: null
  };
  const c: any = [((Math as any).abs as any)(r), ((Math as any).abs as any)(a)],
    i: any = ((e as any) / (2 as any) as any) + ((o as any) * (((t as any).offset as any)[0] as any) as any),
    u: any = ((e as any) / (2 as any) as any) - ((o as any) * ((((t as any).squashAnchor as any) * ((1 as any) - (a as any) as any) as any) + (((t as any).offset as any)[1] as any) as any) as any),
    l: any = (d: any): any => `${(ht as any)((i as any) + (((d as any)[0] as any) * (o as any) as any))} ${(ht as any)((u as any) - (((d as any)[1] as any) * (o as any) as any))}`,
    h: any = (d: any): any => ((((d as any).map as any)((p: any): any => ($n as any)(p, l, ((Math as any).abs as any)(o))) as any).join as any)(""),
    f: any = (_s as any)(t, ((Math as any).abs as any)(o));
  return {
    size: e,
    body: (h as any)((n as any).cutout ? (ii as any)(c, f) : [(r0 as any)(c, 1)]),
    eyes: (n as any).cutout ? "" : (h as any)(f),
    glow: ((t as any).glow as any) === (null as any) ? null : (Ji as any)((t as any).glow, c, l, ((Math as any).abs as any)(o)),
    proof: ((s as any).isProof as any) === (!0 as any) ? (t6 as any)(t, n, c, l, o, e) : null
  };
}
function _s(this: any, t: any, n: any): any {
  if (((t as any).eyes as any) === (null as any)) return [];
  const e: any = (Yt as any)((t as any).quat),
    s: any = [((Math as any).abs as any)(((t as any).squash as any)[0]), ((Math as any).abs as any)(((t as any).squash as any)[1])],
    o: any = ((s as any)[0] as any) < (1 as any) || ((s as any)[1] as any) < (1 as any),
    r: any = [];
  return (((t as any).eyes as any).forEach as any)((a: any, c: any): any => {
    for (const i of (Qi as any)(a, (ze as any)[c], (Hi as any)[c], e, n)) {
      const u: any = o ? (ci as any)(i, s) : i;
      (u as any) !== (null as any) && ((r as any).push as any)(u);
    }
  }), r;
}
function Xi(this: any, t: any, n: any): any {
  const e: any = (((t as any).zoom as any) * (n as any) as any) / (2 as any),
    [s, o]: any = (t as any).squash,
    r: any = [((n as any) / (2 as any) as any) + ((e as any) * (((t as any).offset as any)[0] as any) as any), ((n as any) / (2 as any) as any) - ((e as any) * ((((t as any).squashAnchor as any) * ((1 as any) - (o as any) as any) as any) + (((t as any).offset as any)[1] as any) as any) as any)],
    a: any = ((Math as any).abs as any)(e),
    c: any = ([i, u]: any): any => [((r as any)[0] as any) + ((i as any) * (e as any) as any), ((r as any)[1] as any) - ((u as any) * (e as any) as any)];
  return {
    center: r,
    radius: a,
    body: [(Kc as any)(r, [(((Math as any).abs as any)(s) as any) * (a as any), (((Math as any).abs as any)(o) as any) * (a as any)], Ki)],
    eyes: (((_s as any)(t, a) as any).map as any)((i: any): any => (((Zi as any)(i) as any).map as any)(c))
  };
}
function Zi(this: any, t: any): any {
  const n: any = [];
  let e: any = (t as any)[((t as any).length as any) - (1 as any)]?.to ?? [0, 0];
  for (const s of t) {
    if (((s as any).kind as any) === ("arc" as any)) {
      const o: any = ((Math as any).atan2 as any)((e as any)[1], (e as any)[0]),
        r: any = ((Math as any).max as any)(1, ((Math as any).ceil as any)((((Math as any).abs as any)((s as any).sweep) as any) / (Ui as any)));
      for (let a: any = 1; (a as any) < (r as any); a++) ((n as any).push as any)((ks as any)((s as any).radii, (o as any) + ((((s as any).sweep as any) * (a as any) as any) / (r as any) as any)));
    }
    ((n as any).push as any)((s as any).to), e = (s as any).to;
  }
  return n;
}
function Vi(this: any, t: any, n: any, e: any = "grok-sphere", s: any = (t as any).size): any {
  const o: any = [],
    r: any = [];
  let a: any = (zn as any)(n);
  if (((t as any).glow?.halo as any) != (null as any) && (((o as any).push as any)((mn as any)(`${e}-halo`, (((t as any).glow as any).halo as any).gradient)), ((r as any).push as any)(`<path d="${(((t as any).glow as any).halo as any).d}" fill="url(#${e}-halo)" fill-rule="evenodd"/>`)), ((t as any).proof as any) !== (null as any) ? (a = `url(#${e}-light)`, ((o as any).push as any)((mn as any)(`${e}-light`, ((t as any).proof as any).light), `<clipPath id="${e}-proof"><path d="${(t as any).body}" clip-rule="evenodd"/></clipPath>`)) : ((t as any).glow as any) !== (null as any) && (a = `url(#${e}-body)`, ((o as any).push as any)((mn as any)(`${e}-body`, ((t as any).glow as any).body))), ((r as any).push as any)(`<path d="${(t as any).body}" fill="${a}" fill-rule="evenodd"/>`), ((t as any).eyes as any) !== ("" as any) && ((r as any).push as any)(`<path d="${(t as any).eyes}" fill="${(Gn as any)(n)}"/>`), ((t as any).proof as any) !== (null as any)) {
    const c: any = ((((((t as any).proof as any).lines as any).filter as any)((i: any): any => ((i as any).d as any) !== ("" as any)) as any).map as any)((i: any): any => `<path d="${(i as any).d}" fill="none" stroke="${(i as any).color}" stroke-width="${(ht as any)((i as any).width)}" stroke-opacity="${(i as any).opacity}"/>`);
    ((r as any).push as any)(`<g clip-path="url(#${e}-proof)">${((c as any).join as any)("")}</g>`);
  }
  return `${(Yn as any)((t as any).size, e, s)}${((o as any).length as any) > (0 as any) ? `<defs>${((o as any).join as any)("")}</defs>` : ""}${((r as any).join as any)("")}</svg>`;
}
function Qi(this: any, t: any, n: any, e: any, s: any, o: any): any {
  const r: any = (Ti as any)(t, (o as any) * (((Math as any).max as any)(1, (t as any).lidY) as any));
  if (((r as any).length as any) === (0 as any)) return [];
  const a: any = (ct as any)(s, (n as any).M),
    c: any = (ct as any)(s, (n as any).C),
    i: any = (ct as any)(s, (n as any).T),
    u: any = ((Math as any).atan2 as any)((a as any)[1], (a as any)[0]),
    l: any = ((Math as any).cos as any)((t as any).tilt),
    h: any = ((Math as any).sin as any)((t as any).tilt),
    [f, d]: any = (t as any).off,
    p: any = ([m, g]: any): any => {
      const x: any = (g as any) * ((t as any).lidY as any),
        w: any = ((f as any) + ((l as any) * (m as any) as any) as any) + ((h as any) * (x as any) as any),
        v: any = ((d as any) - ((h as any) * (m as any) as any) as any) + ((l as any) * (x as any) as any),
        b: any = ((Math as any).sqrt as any)(((w as any) * (w as any) as any) + ((v as any) * (v as any) as any)),
        A: any = (b as any) > (1e-12 as any) ? (((Math as any).sin as any)(b) as any) / (b as any) : 1,
        E: any = ((Math as any).cos as any)(b);
      return [((E as any) * ((a as any)[0] as any) as any) + ((A as any) * (((w as any) * ((c as any)[0] as any) as any) + ((v as any) * ((i as any)[0] as any) as any) as any) as any), ((E as any) * ((a as any)[1] as any) as any) + ((A as any) * (((w as any) * ((c as any)[1] as any) as any) + ((v as any) * ((i as any)[1] as any) as any) as any) as any), ((E as any) * ((a as any)[2] as any) as any) + ((A as any) * (((w as any) * ((c as any)[2] as any) as any) + ((v as any) * ((i as any)[2] as any) as any) as any) as any)];
    },
    y: any = [];
  for (const m of r) {
    const g: any = ((m as any).map as any)(p);
    e && ((g as any).reverse as any)();
    const x: any = (ai as any)(g, u);
    (x as any) !== (null as any) && ((y as any).push as any)(x);
  }
  return y;
}
function Wi(this: any, {
  M: t,
  T: n,
  C: e
}: any): any {
  const s: any = [(((e as any)[1] as any) * ((n as any)[2] as any) as any) - (((e as any)[2] as any) * ((n as any)[1] as any) as any), (((e as any)[2] as any) * ((n as any)[0] as any) as any) - (((e as any)[0] as any) * ((n as any)[2] as any) as any), (((e as any)[0] as any) * ((n as any)[1] as any) as any) - (((e as any)[1] as any) * ((n as any)[0] as any) as any)];
  return (((((s as any)[0] as any) * ((t as any)[0] as any) as any) + (((s as any)[1] as any) * ((t as any)[1] as any) as any) as any) + (((s as any)[2] as any) * ((t as any)[2] as any) as any) as any) < (0 as any);
}
function $n(this: any, t: any, n: any, e: any): any {
  let s: any = ((t as any)[((t as any).length as any) - (1 as any)] as any).to,
    o: any = `M${(n as any)(s)}`;
  for (const r of t) o += ((r as any).kind as any) === ("line" as any) ? `L${(n as any)((r as any).to)}` : (Tn as any)(s, r, n, e), s = (r as any).to;
  return `${o}Z`;
}
function Tn(this: any, t: any, n: any, e: any, s: any): any {
  if (((n as any).sweep as any) === (0 as any)) return "";
  if ((((Math as any).abs as any)((n as any).sweep) as any) > (Is as any)) {
    const r: any = ((n as any).sweep as any) / (2 as any),
      a: any = (ks as any)((n as any).radii, (((Math as any).atan2 as any)((t as any)[1], (t as any)[0]) as any) + (r as any));
    return ((Tn as any)(t, {
      ...n,
      to: a,
      sweep: r
    }, e, s) as any) + ((Tn as any)(a, {
      ...n,
      sweep: r
    }, e, s) as any);
  }
  return `A${`${(ht as any)((((n as any).radii as any)[0] as any) * (s as any))} ${(ht as any)((((n as any).radii as any)[1] as any) * (s as any))}`} 0 0 ${((n as any).sweep as any) > (0 as any) ? 0 : 1} ${(e as any)((n as any).to)}`;
}
function Ji(this: any, t: any, n: any, e: any, s: any): any {
  const o: any = (.42 as any) + ((.16 as any) * ((t as any).midT as any) as any),
    r: any = [];
  for (let u: any = 0; (u as any) <= (ge as any); u++) {
    const l: any = (1 as any) - (((1 as any) - ((u as any) / (ge as any) as any) as any) ** (2 as any) as any);
    ((r as any).push as any)({
      offset: l,
      color: (o0 as any)((e6 as any)(t, o, l)),
      opacity: 1
    });
  }
  const a: any = {
    transform: (we as any)(n, e, s),
    focus: 0,
    stops: r
  };
  if (!(((t as any).halo as any) > (0 as any))) return {
    body: a,
    halo: null
  };
  const c: any = [];
  for (let u: any = 0; (u as any) <= (xe as any); u++) {
    const l: any = ((jt as any) * (u as any) as any) / (xe as any),
      h: any = ((Math as any).min as any)(1, ((t as any).halo as any) * ((1 as any) - ((Rn as any)(0, jt, l) as any) as any));
    ((c as any).push as any)({
      offset: ((1 as any) + (l as any) as any) / ((1 as any) + (jt as any) as any),
      color: (o0 as any)((t as any).rim),
      opacity: h
    });
  }
  const i: any = [((n as any)[0] as any) * ((1 as any) + (jt as any) as any), ((n as any)[1] as any) * ((1 as any) + (jt as any) as any)];
  return {
    body: a,
    halo: {
      d: (($n as any)((r0 as any)(i, 1), e, s) as any) + (($n as any)((r0 as any)(n, 1), e, s) as any),
      gradient: {
        transform: (we as any)(i, e, s),
        focus: 0,
        stops: c
      }
    }
  };
}
function t6(this: any, t: any, n: any, e: any, s: any, o: any, r: any): any {
  const a: any = (Yt as any)((t as any).quat);
  let c: any = "",
    i: any = "";
  for (const d of dc) {
    const p: any = (pc as any)(d, a);
    (p as any) !== (null as any) && ((d as any).isEquator ? i += (be as any)(p, s, o) : c += (be as any)(p, s, o));
  }
  const u: any = (ve as any)((n as any).ink, [1, 1, 1], Ni),
    l: any = (mc as any)(),
    h: any = ((((.2126 as any) * ((u as any)[0] as any) as any) + ((.7152 as any) * ((u as any)[1] as any) as any) as any) + ((.0722 as any) * ((u as any)[2] as any) as any) as any) > (.6 as any) ? "#000000" : "#ffffff",
    f: any = ((Math as any).max as any)(qi, (r as any) * (Di as any));
  return {
    light: {
      transform: (n6 as any)(l, e, s, o),
      focus: (l as any).focus,
      stops: (((l as any).stops as any).map as any)((d: any): any => ({
        offset: (d as any).offset,
        color: (o0 as any)((ve as any)([0, 0, 0], u, (d as any).shade)),
        opacity: 1
      }))
    },
    lines: [{
      d: c,
      color: h,
      width: f,
      opacity: zi
    }, {
      d: i,
      color: h,
      width: (f as any) * (Gi as any),
      opacity: Yi
    }]
  };
}
function be(this: any, t: any, n: any, e: any): any {
  const s: any = (p: any): any => [((((t as any).center as any)[0] as any) + ((((t as any).a as any)[0] as any) * (((Math as any).cos as any)(p) as any) as any) as any) + ((((t as any).b as any)[0] as any) * (((Math as any).sin as any)(p) as any) as any), ((((t as any).center as any)[1] as any) + ((((t as any).a as any)[1] as any) * (((Math as any).cos as any)(p) as any) as any) as any) + ((((t as any).b as any)[1] as any) * (((Math as any).sin as any)(p) as any) as any)],
    o: any = (.5 as any) * (((Math as any).atan2 as any)((2 as any) * ((Mn as any)((t as any).a, (t as any).b) as any), ((Mn as any)((t as any).a, (t as any).a) as any) - ((Mn as any)((t as any).b, (t as any).b) as any)) as any),
    [r, a]: any = [((Math as any).cos as any)(o), ((Math as any).sin as any)(o)],
    c: any = [((((t as any).a as any)[0] as any) * (r as any) as any) + ((((t as any).b as any)[0] as any) * (a as any) as any), ((((t as any).a as any)[1] as any) * (r as any) as any) + ((((t as any).b as any)[1] as any) * (a as any) as any)],
    i: any = [((((t as any).b as any)[0] as any) * (r as any) as any) - ((((t as any).a as any)[0] as any) * (a as any) as any), ((((t as any).b as any)[1] as any) * (r as any) as any) - ((((t as any).a as any)[1] as any) * (a as any) as any)],
    u: any = `${(ht as any)((((Math as any).hypot as any)((c as any)[0], (c as any)[1]) as any) * (((Math as any).abs as any)(e) as any))} ${(ht as any)((((Math as any).hypot as any)((i as any)[0], (i as any)[1]) as any) * (((Math as any).abs as any)(e) as any))}`,
    l: any = (((Math as any).round as any)(((((Math as any).atan2 as any)((-(c as any)[1] as any) * (e as any), ((c as any)[0] as any) * (e as any)) as any) * ((180 as any) / ((Math as any).PI as any) as any) as any) * (1e3 as any)) as any) / (1e3 as any),
    h: any = (((((t as any).a as any)[0] as any) * (((t as any).b as any)[1] as any) as any) - ((((t as any).a as any)[1] as any) * (((t as any).b as any)[0] as any) as any) as any) > (0 as any) ? 0 : 1,
    f: any = ((Math as any).ceil as any)((((t as any).to as any) - ((t as any).from as any) as any) / (Is as any));
  let d: any = `M${(n as any)((s as any)((t as any).from))}`;
  for (let p: any = 1; (p as any) <= (f as any); p++) d += `A${u} ${l} 0 ${h} ${(n as any)((s as any)(((t as any).from as any) + (((((t as any).to as any) - ((t as any).from as any) as any) * (p as any) as any) / (f as any) as any)))}`;
  return d;
}
function n6(this: any, t: any, n: any, e: any, s: any): any {
  const [o, r]: any = (t as any).axisX,
    [a, c]: any = (t as any).axisY,
    i: any = [((o as any) * ((n as any)[0] as any) as any) * (s as any), ((-r as any) * ((n as any)[1] as any) as any) * (s as any), ((a as any) * ((n as any)[0] as any) as any) * (s as any), ((-c as any) * ((n as any)[1] as any) as any) * (s as any)],
    u: any = (e as any)([(((t as any).origin as any)[0] as any) * ((n as any)[0] as any), (((t as any).origin as any)[1] as any) * ((n as any)[1] as any)]);
  return `matrix(${((((i as any).map as any)((l: any): any => (((Math as any).round as any)((l as any) * (1e4 as any)) as any) / (1e4 as any)) as any).join as any)(" ")} ${u})`;
}
function ve(this: any, t: any, n: any, e: any): any {
  return [((t as any)[0] as any) + ((((n as any)[0] as any) - ((t as any)[0] as any) as any) * (e as any) as any), ((t as any)[1] as any) + ((((n as any)[1] as any) - ((t as any)[1] as any) as any) * (e as any) as any), ((t as any)[2] as any) + ((((n as any)[2] as any) - ((t as any)[2] as any) as any) * (e as any) as any)];
}
function Mn(this: any, t: any, n: any): any {
  return (((t as any)[0] as any) * ((n as any)[0] as any) as any) + (((t as any)[1] as any) * ((n as any)[1] as any) as any);
}
function e6(this: any, t: any, n: any, e: any): any {
  const s: any = (Rn as any)(.12, n, e),
    o: any = (Rn as any)(n, .93, e),
    r: any = (.9 as any) + ((.1 as any) * ((((Math as any).max as any)(0, (1 as any) - ((e as any) * (e as any) as any)) as any) ** (.225 as any) as any) as any),
    a: any = (c: any): any => {
      const i: any = (((t as any).inner as any)[c] as any) + (((((t as any).mid as any)[c] as any) - (((t as any).inner as any)[c] as any) as any) * (s as any) as any);
      return ((i as any) + (((((t as any).rim as any)[c] as any) - (i as any) as any) * (o as any) as any) as any) * (r as any);
    };
  return [(a as any)(0), (a as any)(1), (a as any)(2)];
}
function we(this: any, t: any, n: any, e: any): any {
  return `matrix(${(ht as any)(((t as any)[0] as any) * (e as any))} 0 0 ${(ht as any)(((t as any)[1] as any) * (e as any))} ${(n as any)([0, 0])})`;
}
function mn(this: any, t: any, n: any): any {
  const e: any = (((((n as any).stops as any).map as any)((s: any): any => `<stop offset="${(s as any).offset}" stop-color="${(s as any).color}" stop-opacity="${(s as any).opacity}"/>`) as any).join as any)("");
  return `<radialGradient id="${t}" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="1" fx="${(n as any).focus}" fy="0" gradientTransform="${(n as any).transform}">${e}</radialGradient>`;
}
function Rn(this: any, t: any, n: any, e: any): any {
  const s: any = ((Math as any).min as any)(1, ((Math as any).max as any)(0, ((e as any) - (t as any) as any) / ((n as any) - (t as any) as any)));
  return ((s as any) * (s as any) as any) * ((3 as any) - ((2 as any) * (s as any) as any) as any);
}
function ht(this: any, t: any): any {
  return (String as any)((((Math as any).round as any)((t as any) * (100 as any)) as any) / (100 as any));
}
const s6: any = (-15 as any) + ((259 as any) / (2 as any) as any),
  o6: number = .62,
  ke: number = 96,
  r6: any = ((Math as any).PI as any) * (2 as any),
  yn: any = {
    dots: 22,
    orbit: 19,
    radar: 19,
    progress: 19,
    gather: 19,
    wave: 16,
    send: 20,
    receive: 20,
    dock: 20,
    ball: 18,
    pencil: 17,
    bang: 13,
    standby: 13
  },
  Ae: any = {
    dots: 1.5,
    orbit: 1.14,
    radar: 1.14,
    progress: 1.32,
    gather: 1.15,
    wave: 1.42,
    send: 1.12,
    receive: 1.12,
    dock: 1.3,
    ball: 1.22,
    pencil: 1.18,
    bang: 1.28,
    standby: 1.75
  },
  a6: number = 22,
  Ee: number = 62,
  c6: number = .84,
  i6: number = .22,
  l6: number = 1.02,
  u6: number = 9,
  h6: number = 1400,
  Ps: number = 1500,
  Fn: number = 1700,
  q0: number = 2500,
  Wt: number = .68,
  I0: any = (q0 as any) * (Wt as any),
  f6: number = 2.4,
  d6: number = 120,
  p6: any = ((Dn as any)("progress") as any) * (1e3 as any),
  M6: any = ((Dn as any)("spawning") as any) * (1e3 as any),
  m6: any = [-2, -1, 1, 2],
  ft: any = (t: any): any => (((t as any) % (1 as any) as any) + (1 as any) as any) % (1 as any),
  y6: any = (t: any, n: any): any => {
    const e: any = (t as any).length,
      s: any = (((n as any) / (e as any) as any) * ((Math as any).PI as any) as any) * (2 as any),
      o: any = ((Math as any).cos as any)(s),
      r: any = ((Math as any).sin as any)(s);
    return ((Array as any).from as any)({
      length: e
    }, (a: any, c: any): any => {
      const [i, u]: any = (t as any)[((((c as any) - (n as any) as any) % (e as any) as any) + (e as any) as any) % (e as any)],
        l: any = (i as any) - (M as any),
        h: any = (u as any) - (M as any);
      return [((M as any) + ((l as any) * (o as any) as any) as any) - ((h as any) * (r as any) as any), ((M as any) + ((l as any) * (r as any) as any) as any) + ((h as any) * (o as any) as any)];
    });
  },
  Ss: any = ((Array as any).from as any)({
    length: ke
  }, (t: any, n: any): any => {
    const e: any = ((n as any) / (ke as any) as any) * (r6 as any);
    return [(M as any) + ((((Math as any).cos as any)(e) as any) * (M as any) as any), (M as any) + ((((Math as any).sin as any)(e) as any) * (M as any) as any)];
  }),
  Ie: any = ((Je as any)(88, 18) as any).ring,
  g6: any = (y6 as any)(Ie, ((Ie as any).length as any) / (2 as any)),
  gn: any = (t: any): any => (t as any) === ("pencil" as any) ? g6 : Ss,
  x6: any = (t: any, n: any): any => {
    const e: any = (t as any) / (2 as any),
      s: any = ((M as any) - ((n as any) / (2 as any) as any) as any) + (e as any),
      o: any = ((M as any) + ((n as any) / (2 as any) as any) as any) - (e as any);
    return `M${(M as any) - (e as any)} ${s}A${e} ${e} 0 0 1 ${(M as any) + (e as any)} ${s}L${(M as any) + (e as any)} ${o}A${e} ${e} 0 0 1 ${(M as any) - (e as any)} ${o}Z`;
  },
  b6: any = (t: any, n: any, e: any): any => {
    const s: any = (t as any) / (2 as any),
      o: any = (n as any) / (2 as any),
      r: any = (M as any) - ((e as any) / (2 as any) as any),
      a: any = (M as any) + ((e as any) / (2 as any) as any);
    return `M${(M as any) - (s as any)} ${(r as any) + (s as any)}A${s} ${s} 0 0 1 ${(M as any) + (s as any)} ${(r as any) + (s as any)}L${(M as any) + (o as any)} ${(a as any) - (o as any)}A${o} ${o} 0 0 1 ${(M as any) - (o as any)} ${(a as any) - (o as any)}Z`;
  },
  v6: any = (x6 as any)(30, 88),
  w6: any = (b6 as any)(30, 17, 96),
  dt: any = (t: any, n: any, e: any, s: any, o: any): any => ({
    type: "disc",
    key: t,
    cx: n,
    cy: e,
    r: s,
    opacity: o
  }),
  U0: any = (t: any, n: any, e: any, s: any): any => ({
    type: "ring",
    key: t,
    cx: M,
    cy: M,
    r: n,
    width: e,
    opacity: s
  }),
  Cs: any = (t: any, n: any, e: any, s: any): any => ({
    type: "shape",
    key: t,
    d: n,
    transform: e,
    opacity: s
  }),
  k6: any = (t: any, n: any, e: any, s: any): any => ({
    type: "stroke",
    key: t,
    d: n,
    width: e,
    opacity: s
  }),
  A6: any = {
    lift: 0,
    pop: 1,
    tone: 1
  },
  $s: any = (t: any, n: any, e: any, s: any): any => {
    const o: any = (ft as any)(((((t as any).stateTime as any) * (1e3 as any) as any) / (h6 as any) as any) + (.119 as any)),
      r: any = ((Math as any).abs as any)((o as any) - ((n as any) / (3 as any) as any)),
      a: any = ((Math as any).min as any)(r, (1 as any) - (r as any)),
      c: any = s ? 1 : ((Math as any).exp as any)((-((a as any) * (a as any)) as any) / (((2 as any) * (.15 as any) as any) * (.15 as any) as any)),
      i: any = s ? 0 : 1;
    return {
      lift: (((c as any) * (u6 as any) as any) * (e as any) as any) * (i as any),
      pop: (1 as any) + ((i as any) * (((c6 as any) + ((i6 as any) * (c as any) as any) as any) - (1 as any) as any) as any),
      tone: (1 as any) - (((i as any) * (.5 as any) as any) * ((1 as any) - (c as any) as any) as any)
    };
  },
  E6: any = (t: any): any => ((.42 as any) + (((.29 as any) * (((Math as any).sin as any)((t as any) * (.0021 as any)) as any) as any) * (((Math as any).sin as any)((t as any) * (.0034 as any)) as any) as any) as any) + ((.29 as any) * (((Math as any).sin as any)(((t as any) * (.0013 as any) as any) + (1.7 as any)) as any) as any),
  I6: any = (t: any, n: any): any => ((E6 as any)(t) as any) * ((.55 as any) + ((.45 as any) * (((Math as any).sin as any)(((t as any) * (.012 as any) as any) - ((((Math as any).abs as any)(n) as any) * (1.05 as any) as any)) as any) as any) as any),
  _6: any = (t: any): any => ((-(Math as any).PI as any) * (1.25 as any) as any) + (((((Nn as any)(t) as any)() as any) * ((Math as any).PI as any) as any) * (1.5 as any) as any),
  P6: any = (t: any): any => {
    const s: number = 1082.2060353798126,
      o: number = 40,
      r: any = ((Math as any).sqrt as any)(((2 as any) * (o as any) as any) / (s as any));
    if ((t as any) < (r as any)) return (((.5 as any) * (s as any) as any) * (t as any) as any) * (t as any);
    const a: any = (ft as any)(((t as any) - (r as any) as any) / (.62 as any));
    return (o as any) - (((208 as any) * (a as any) as any) * ((1 as any) - (a as any) as any) as any);
  },
  Wn: any = (t: any): any => {
    const n: any = (ft as any)((t as any) / (q0 as any));
    if ((n as any) < (Wt as any)) {
      const s: any = (n as any) / (Wt as any),
        o: any = ((s as any) * (s as any) as any) * ((3 as any) - ((2 as any) * (s as any) as any) as any),
        r: any = ((C as any)((s as any) / (.08 as any), 0, 1) as any) * ((C as any)(((1 as any) - (s as any) as any) / (.08 as any), 0, 1) as any);
      return {
        x: (-54 as any) + ((118 as any) * (o as any) as any),
        y: 26,
        wig: ((((Math as any).sin as any)((s as any) * (24 as any)) as any) * (3.2 as any) as any) * (r as any),
        rot: (17 as any) + ((((Math as any).sin as any)((t as any) * (6e-4 as any)) as any) * (1 as any) as any)
      };
    }
    const e: any = (P0 as any)(((n as any) - (Wt as any) as any) / ((1 as any) - (Wt as any) as any));
    return {
      x: (64 as any) - ((118 as any) * (e as any) as any),
      y: (26 as any) - ((20 as any) * (((Math as any).sin as any)((e as any) * ((Math as any).PI as any)) as any) as any),
      wig: 0,
      rot: ((17 as any) - ((2 as any) * (((Math as any).sin as any)((e as any) * ((Math as any).PI as any)) as any) as any) as any) + ((((Math as any).sin as any)((t as any) * (6e-4 as any)) as any) * (1 as any) as any)
    };
  },
  Ts: any = (t: any): any => {
    const n: any = (Wn as any)(t);
    return [(M as any) + ((n as any).x as any), (((M as any) + ((n as any).y as any) as any) + ((n as any).wig as any) as any) + (19 as any)];
  },
  S6: any = (((): any => {
    const t: any = [];
    for (let n: any = 0; (n as any) < (I0 as any); n++) {
      const e: any = (Ts as any)(n),
        s: any = (t as any)[((t as any).length as any) - (1 as any)];
      ((s as any) === (void 0 as any) || (((Math as any).hypot as any)(((e as any)[0] as any) - (((s as any).point as any)[0] as any), ((e as any)[1] as any) - (((s as any).point as any)[1] as any)) as any) > (f6 as any)) && ((t as any).push as any)({
        at: n,
        point: e
      });
    }
    return t;
  }) as any)(),
  C6: any = (t: any): any => {
    const n: any = ((ft as any)((t as any) / (q0 as any)) as any) * (q0 as any),
      e: any = ((Math as any).min as any)(n, I0),
      s: any = ((S6 as any).filter as any)((c: any): any => ((c as any).at as any) <= (e as any)),
      o: any = ((s as any).length as any) > (0 as any) ? ((s as any)[((s as any).length as any) - (1 as any)] as any).at : e,
      r: any = (e as any) > (o as any) ? [(Ts as any)(e)] : [],
      a: any = (([...((s as any).map as any)((c: any): any => (c as any).point), ...r] as any).slice as any)(-64);
    return (n as any) < (I0 as any) ? a : ((a as any).slice as any)(((Math as any).floor as any)((((n as any) - (I0 as any) as any) / (1e3 as any) as any) * (d6 as any)));
  },
  $6: any = (t: any): any => {
    const n: any = (t as any).length;
    let e: any = `M${((((t as any)[0] as any)[0] as any).toFixed as any)(1)} ${((((t as any)[0] as any)[1] as any).toFixed as any)(1)}`;
    if ((n as any) === (2 as any)) return (e as any) + (`L${((((t as any)[1] as any)[0] as any).toFixed as any)(1)} ${((((t as any)[1] as any)[1] as any).toFixed as any)(1)}` as any);
    for (let s: any = 0; (s as any) < ((n as any) - (1 as any) as any); s++) {
      const o: any = (t as any)[((Math as any).max as any)((s as any) - (1 as any), 0)],
        r: any = (t as any)[s],
        a: any = (t as any)[(s as any) + (1 as any)],
        c: any = (t as any)[((Math as any).min as any)((s as any) + (2 as any), (n as any) - (1 as any))],
        i: any = ((r as any)[0] as any) + ((((a as any)[0] as any) - ((o as any)[0] as any) as any) / (6 as any) as any),
        u: any = ((r as any)[1] as any) + ((((a as any)[1] as any) - ((o as any)[1] as any) as any) / (6 as any) as any),
        l: any = ((a as any)[0] as any) - ((((c as any)[0] as any) - ((r as any)[0] as any) as any) / (6 as any) as any),
        h: any = ((a as any)[1] as any) - ((((c as any)[1] as any) - ((r as any)[1] as any) as any) / (6 as any) as any);
      e += `C${((i as any).toFixed as any)(1)} ${((u as any).toFixed as any)(1)} ${((l as any).toFixed as any)(1)} ${((h as any).toFixed as any)(1)} ${(((a as any)[0] as any).toFixed as any)(1)} ${(((a as any)[1] as any).toFixed as any)(1)}`;
    }
    return e;
  },
  T6: any = (t: any, n: any, e: any): any => {
    const s: any = [(M as any) - (Ee as any), (M as any) + (Ee as any)],
      o: any = [];
    for (let r: any = 0; (r as any) < (2 as any); r++) {
      const a: any = (C as any)(((t as any) - ((r as any) * (.12 as any) as any) as any) / ((1 as any) - ((r as any) * (.12 as any) as any) as any), 0, 1);
      if ((a as any) <= (.004 as any)) continue;
      const c: any = (X as any)(a),
        i: any = (G0 as any)(a),
        u: any = ($s as any)(n, (r as any) === (0 as any) ? 0 : 2, t, e);
      ((o as any).push as any)((dt as any)(`dots.${r}`, (M as any) + ((((s as any)[r] as any) - (M as any) as any) * (i as any) as any), (M as any) - ((u as any).lift as any), (((a6 as any) * (c as any) as any) * ((u as any).pop as any) as any) * (l6 as any), (c as any) * ((u as any).tone as any)));
    }
    return o;
  },
  R6: any = (t: any, n: any): any => {
    const e: any = (X as any)(t),
      s: any = (52 as any) * ((G0 as any)(t) as any),
      o: number = 12,
      r: any = (((n as any).stateTime as any) * (1e3 as any) as any) * (.0017 as any);
    return ((Array as any).from as any)({
      length: 5
    }, (a: any, c: any): any => {
      const i: any = (r as any) + ((((c as any) * ((Math as any).PI as any) as any) * (2 as any) as any) / (5 as any) as any),
        u: any = ((Math as any).cos as any)(i),
        l: any = (.5 as any) + ((.5 as any) * ((C as any)(u, 0, 1) as any) as any);
      return (dt as any)(`orbit.${c}`, (M as any) + ((s as any) * (((Math as any).sin as any)(i) as any) as any), (M as any) - (((s as any) * (.42 as any) as any) * (((Math as any).cos as any)(i) as any) as any), ((Math as any).max as any)(((o as any) * (l as any) as any) * (e as any), .3), ((C as any)(((u as any) + (.4 as any) as any) / (.6 as any), .18, 1) as any) * (e as any));
    });
  },
  F6: any = (t: any, n: any, e: any): any => {
    const s: any = (X as any)(t),
      o: number = 1300,
      r: number = 104;
    return ((Array as any).from as any)({
      length: 3
    }, (a: any, c: any): any => {
      const i: any = (ft as any)(((((n as any).stateTime as any) * (1e3 as any) as any) / (o as any) as any) + ((c as any) / (3 as any) as any));
      return (U0 as any)(`radar.${c}`, (e as any) + (((r as any) - (e as any) as any) * (i as any) as any), (3.4 as any) * ((1 as any) - ((i as any) * (.55 as any) as any) as any), ((s as any) * ((1 as any) - (i as any) as any) as any) * (.9 as any));
    });
  },
  O6: any = (t: any, n: any): any => {
    const e: any = (X as any)(t),
      s: any = (62 as any) * ((G0 as any)(t) as any),
      o: any = (C as any)((((n as any).shotTime as any) * (1e3 as any) as any) / (p6 as any), 0, 1),
      r: any = (C as any)((o as any) / (.85 as any), 0, 1),
      a: any = (U0 as any)("progress.track", s, 5, (e as any) * (.16 as any));
    return (r as any) <= (0 as any) ? [a] : [a, {
      type: "ring",
      key: "progress.arc",
      cx: M,
      cy: M,
      r: s,
      width: 5,
      opacity: e,
      arc: {
        fraction: r,
        startDeg: -90
      }
    }];
  },
  L6: any = (t: any, n: any): any => {
    const e: any = (X as any)(t),
      s: any = [];
    for (let o: any = 0; (o as any) < (5 as any); o++) {
      const r: any = (C as any)((((((n as any).shotTime as any) * (1e3 as any) as any) / (M6 as any) as any) - ((o as any) * (.09 as any) as any) as any) / (.62 as any), 0, 1);
      if ((r as any) >= (1 as any)) continue;
      const a: any = (1 as any) - (((Math as any).pow as any)((1 as any) - (r as any), 3) as any),
        c: any = ((o as any) * (2.4 as any) as any) + ((r as any) * (2.2 as any) as any),
        i: any = (96 as any) * ((1 as any) - (a as any) as any);
      ((s as any).push as any)((dt as any)(`gather.${o}`, (M as any) + ((i as any) * (((Math as any).cos as any)(c) as any) as any), (M as any) + (((i as any) * (((Math as any).sin as any)(c) as any) as any) * (.8 as any) as any), ((9 as any) * ((.5 as any) + ((.5 as any) * (a as any) as any) as any) as any) * (e as any), ((e as any) * ((C as any)((r as any) * (5 as any), 0, 1) as any) as any) * ((1 as any) - ((a as any) * (.25 as any) as any) as any)));
    }
    return s;
  },
  B6: any = (t: any, n: any): any => {
    const e: any = ((n as any).stateTime as any) * (1e3 as any),
      s: number = 44,
      o: any = [];
    for (const r of m6) {
      const a: any = (C as any)(((t as any) - ((((Math as any).abs as any)(r) as any) * (.1 as any) as any) as any) / ((1 as any) - ((((Math as any).abs as any)(r) as any) * (.1 as any) as any) as any), 0, 1);
      if ((a as any) <= (.004 as any)) continue;
      const c: any = (G0 as any)(a),
        i: any = (I6 as any)(e, r),
        u: any = ((7 as any) + ((9 as any) * ((C as any)(i, .08, 1) as any) as any) as any) * ((X as any)(a) as any),
        l: any = ((6 as any) * ((C as any)(i, 0, 1) as any) as any) * (a as any);
      ((o as any).push as any)((dt as any)(`wave.${r}`, (M as any) + (((r as any) * (s as any) as any) * (c as any) as any), (M as any) - (l as any), u, a));
    }
    return o;
  },
  N6: any = (t: any, n: any): any => {
    const e: any = (X as any)(t),
      s: any = (ft as any)((((n as any).stateTime as any) * (1e3 as any) as any) / (Ps as any)),
      o: any = (C as any)(((s as any) - (.18 as any) as any) / (.55 as any), 0, 1),
      r: any = ((o as any) * (o as any) as any) * ((.4 as any) + ((.6 as any) * (o as any) as any) as any),
      a: number = .74,
      c: any = -.62,
      i: any = [];
    if ((o as any) > (0 as any) && (o as any) < (1 as any)) {
      const f: any = (108 as any) * (r as any);
      ((i as any).push as any)((dt as any)("send.packet", (M as any) + ((a as any) * (f as any) as any), (M as any) + ((c as any) * (f as any) as any), ((10 as any) * ((1 as any) - ((r as any) * (.55 as any) as any) as any) as any) * (e as any), (e as any) * ((1 as any) - ((r as any) * (r as any) as any) as any)));
    }
    const u: any = (C as any)(((s as any) - (.26 as any) as any) / (.55 as any), 0, 1),
      l: any = ((u as any) * (u as any) as any) * ((.4 as any) + ((.6 as any) * (u as any) as any) as any);
    if ((o as any) > (0 as any) && (u as any) > (0 as any) && (u as any) < (1 as any)) {
      const f: any = (108 as any) * (l as any);
      ((i as any).push as any)((dt as any)("send.streak", (M as any) + ((a as any) * (f as any) as any), (M as any) + ((c as any) * (f as any) as any), ((5 as any) * ((1 as any) - ((l as any) * (.6 as any) as any) as any) as any) * (e as any), ((e as any) * (.3 as any) as any) * ((1 as any) - (l as any) as any)));
    }
    const h: any = (C as any)(((s as any) - (.18 as any) as any) / (.3 as any), 0, 1);
    return (h as any) > (0 as any) && (h as any) < (1 as any) && ((i as any).push as any)((U0 as any)("send.launch", (20 as any) + ((34 as any) * ((X as any)(h) as any) as any), (2.8 as any) * ((1 as any) - (h as any) as any), ((e as any) * ((1 as any) - (h as any) as any) as any) * (.8 as any))), i;
  },
  D6: any = (t: any, n: any): any => {
    const e: any = (X as any)(t),
      s: any = ((n as any).stateTime as any) * (1e3 as any),
      o: any = (_6 as any)(((Math as any).floor as any)((s as any) / (Fn as any))),
      r: any = (ft as any)((s as any) / (Fn as any)),
      a: any = (C as any)((r as any) / (.6 as any), 0, 1),
      c: any = (1 as any) - (((Math as any).pow as any)((1 as any) - (a as any), 3) as any),
      i: any = ((Math as any).cos as any)(o),
      u: any = ((Math as any).sin as any)(o),
      l: any = (108 as any) * ((1 as any) - (c as any) as any),
      h: any = [];
    if ((a as any) < (1 as any)) {
      const d: any = ((18 as any) * (((Math as any).sin as any)((a as any) * ((Math as any).PI as any)) as any) as any) * ((1 as any) - ((c as any) * (.7 as any) as any) as any);
      ((h as any).push as any)((dt as any)("receive.packet", ((M as any) + ((i as any) * (l as any) as any) as any) - ((u as any) * (d as any) as any), ((M as any) + ((u as any) * (l as any) as any) as any) + ((i as any) * (d as any) as any), (3.5 as any) + ((6.5 as any) * (c as any) as any), ((e as any) * ((C as any)((a as any) * (3.5 as any), 0, 1) as any) as any) * ((.3 as any) + ((.7 as any) * (c as any) as any) as any)));
    }
    const f: any = (C as any)(((r as any) - (.58 as any) as any) / (.32 as any), 0, 1);
    return (f as any) > (0 as any) && (f as any) < (1 as any) && ((h as any).push as any)((U0 as any)("receive.absorb", (20 as any) + ((26 as any) * ((X as any)(f) as any) as any), (2.8 as any) * ((1 as any) - (f as any) as any), ((e as any) * ((1 as any) - (f as any) as any) as any) * (.8 as any))), h;
  },
  q6: any = (t: any, n: any): any => {
    const e: any = (X as any)(t),
      s: any = ((n as any).stateTime as any) * (1e3 as any),
      o: number = 42,
      r: number = 1.1,
      a: any = [];
    for (let c: any = 0; (c as any) < (2 as any); c++) {
      const i: any = (C as any)((((n as any).stateTime as any) - ((.2 as any) + ((c as any) * (1.3 as any) as any) as any) as any) / (.9 as any), 0, 1);
      if ((i as any) <= (0 as any)) continue;
      const u: any = (1 as any) - (((Math as any).pow as any)((1 as any) - (i as any), 3) as any),
        l: any = (((s as any) * (.001 as any) as any) * (r as any) as any) + ((c as any) * ((Math as any).PI as any) as any),
        h: any = (M as any) + ((o as any) * (((Math as any).sin as any)(l) as any) as any),
        f: any = ((M as any) + (((o as any) * (.5 as any) as any) * (((Math as any).cos as any)(l) as any) as any) as any) + ((((Math as any).sin as any)(((s as any) * (.003 as any) as any) + (c as any)) as any) * (2 as any) as any),
        d: any = ((M as any) - (120 as any) as any) + ((c as any) * (30 as any) as any),
        p: any = (M as any) + (95 as any);
      ((a as any).push as any)((dt as any)(`dock.${c}`, (d as any) + (((h as any) - (d as any) as any) * (u as any) as any), (p as any) + (((f as any) - (p as any) as any) * (u as any) as any), ((7 as any) + ((3 as any) * (u as any) as any) as any) * (e as any), (e as any) * ((C as any)((i as any) * (4 as any), 0, 1) as any)));
    }
    return a;
  },
  z6: any = (t: any, n: any): any => {
    const e: any = ((n as any).stateTime as any) * (1e3 as any),
      s: any = (Wn as any)(e),
      o: any = ((((s as any).rot as any) - (90 as any) as any) * ((Math as any).PI as any) as any) / (180 as any),
      r: number = 68,
      a: any = (((Math as any).cos as any)(o) as any) * (r as any),
      c: any = (((Math as any).sin as any)(o) as any) * (r as any),
      i: any = (M as any) + ((((s as any).x as any) + (a as any) as any) * (t as any) as any),
      u: any = (M as any) + (((((s as any).y as any) + (((s as any).wig as any) * (.15 as any) as any) as any) + (c as any) as any) * (t as any) as any),
      l: any = [(Cs as any)("pencil.shaft", v6, `translate(${((i as any).toFixed as any)(1)} ${((u as any).toFixed as any)(1)}) rotate(${((((s as any).rot as any) * (t as any) as any).toFixed as any)(1)}) scale(${(((X as any)(t) as any).toFixed as any)(3)}) translate(${-M} ${-M})`, (C as any)(((t as any) * (1.6 as any) as any) - (.3 as any), 0, 1))],
      h: any = (C6 as any)(e);
    return ((h as any).length as any) >= (2 as any) && ((l as any).push as any)((k6 as any)("pencil.ink", ($6 as any)(h), 6, (C as any)((t as any) * (1.2 as any), 0, 1))), l;
  },
  G6: any = (t: any, n: any): any => {
    const e: any = (n as any).stateTime,
      s: any = (X as any)((C as any)((t as any) * (1.1 as any), 0, 1)),
      o: any = ((Math as any).exp as any)((-((e as any) % (2.2 as any)) as any) * (5.5 as any)),
      r: any = ((((Math as any).sin as any)((e as any) * (42 as any)) as any) * (2.2 as any) as any) * (o as any);
    return [(Cs as any)("bang.bar", w6, `translate(0 ${(((-26 as any) - (((1 as any) - (s as any) as any) * (70 as any) as any) as any).toFixed as any)(1)}) rotate(${((r as any).toFixed as any)(2)} ${M} ${(((M as any) - (74 as any) as any).toFixed as any)(1)}) translate(${M} ${M}) scale(${(((C as any)((t as any) * (1.2 as any), 0, 1) as any).toFixed as any)(3)}) translate(${-M} ${-M})`, (C as any)(((t as any) * (1.5 as any) as any) - (.2 as any), 0, 1))];
  },
  Y6: any = (t: any, n: any): any => {
    const e: any = (.5 as any) + ((.5 as any) * (((Math as any).sin as any)((((n as any).stateTime as any) * (1e3 as any) as any) * (.0016 as any)) as any) as any);
    return [(dt as any)("standby.halo", M, M, (26 as any) + ((7 as any) * (e as any) as any), ((X as any)(t) as any) * ((.06 as any) + ((.1 as any) * (e as any) as any) as any))];
  },
  H6: any = (t: any, n: any, e: any, s: any, o: any): any => {
    switch (t) {
      case "dots":
        return (T6 as any)(n, e, o);
      case "orbit":
        return (R6 as any)(n, e);
      case "radar":
        return (F6 as any)(n, e, s);
      case "progress":
        return (O6 as any)(n, e);
      case "gather":
        return (L6 as any)(n, e);
      case "wave":
        return (B6 as any)(n, e);
      case "send":
        return (N6 as any)(n, e);
      case "receive":
        return (D6 as any)(n, e);
      case "dock":
        return (q6 as any)(n, e);
      case "ball":
        return [];
      case "pencil":
        return (z6 as any)(n, e);
      case "bang":
        return (G6 as any)(n, e);
      case "standby":
        return (Y6 as any)(n, e);
    }
  };
function K6(this: any, t: any, n: any): any {
  const {
      kind: e,
      isReducedMotion: s
    }: any = t,
    o: any = (C as any)((t as any).amount, 0, 1),
    r: any = (C as any)((t as any).swap, 0, 1),
    a: any = (r as any) < (.999 as any) ? (t as any).outgoing : null,
    c: any = (S: any): any => (S as any) === (e as any) ? (o as any) * (r as any) : (S as any) === (a as any) ? (o as any) * ((1 as any) - (r as any) as any) : 0,
    i: any = (S: any): any => (S as any) === (e as any) ? (t as any).clock : (t as any).outgoingClock,
    u: any = (C as any)((o as any) / (o6 as any), 0, 1),
    h: any = (e as any) === ("pencil" as any) || (a as any) === ("pencil" as any) ? (r as any) >= (.999 as any) ? (gn as any)(e) : (kr as any)((gn as any)(a), (gn as any)(e), (P0 as any)(r)) : Ss,
    f: any = e ? (((yn as any)[e] as any) * (r as any) as any) + (((a ? (yn as any)[a] : (yn as any)[e]) as any) * ((1 as any) - (r as any) as any) as any) : 19,
    d: any = (c as any)("dots"),
    p: any = (e as any) === ("dots" as any) || (a as any) === ("dots" as any),
    y: any = p ? ($s as any)((i as any)("dots"), 1, o, s) : A6;
  let m: any = p ? (1 as any) + ((((y as any).pop as any) - (1 as any) as any) * ((d as any) / (((Math as any).max as any)(o, .001) as any) as any) as any) : 1;
  const g: any = (c as any)("receive");
  if ((g as any) > (.004 as any)) {
    const S: any = (ft as any)(((((i as any)("receive") as any).stateTime as any) * (1e3 as any) as any) / (Fn as any)),
      Y: any = (C as any)(((S as any) - (.58 as any) as any) / (.34 as any), 0, 1);
    m *= (1 as any) + (((.11 as any) * (((Math as any).sin as any)((Y as any) * ((Math as any).PI as any)) as any) as any) * (g as any) as any);
  }
  const x: any = (c as any)("send");
  if ((x as any) > (.004 as any)) {
    const S: any = (ft as any)(((((i as any)("send") as any).stateTime as any) * (1e3 as any) as any) / (Ps as any)),
      Y: any = (S as any) < (.18 as any) ? (-.06 as any) * (((Math as any).sin as any)(((S as any) / (.18 as any) as any) * ((Math as any).PI as any)) as any) : 0,
      tt: any = (S as any) >= (.18 as any) && (S as any) < (.42 as any) ? (.05 as any) * (((Math as any).sin as any)((((S as any) - (.18 as any) as any) / (.24 as any) as any) * ((Math as any).PI as any)) as any) : 0;
    m *= (1 as any) + (((Y as any) + (tt as any) as any) * (x as any) as any);
  }
  const w: any = (c as any)("bang");
  (w as any) > (.004 as any) && (m *= (1 as any) + (((.04 as any) * (((Math as any).exp as any)((-((((i as any)("bang") as any).stateTime as any) % (2.2 as any)) as any) * (5.5 as any)) as any) as any) * (w as any) as any));
  let v: any = 0,
    b: any = 0,
    A: any = 0;
  const E: any = (c as any)("pencil");
  if ((E as any) > (.004 as any)) {
    const S: any = (Wn as any)((((i as any)("pencil") as any).stateTime as any) * (1e3 as any));
    v += ((S as any).x as any) * (E as any), b += (((S as any).y as any) + (((S as any).wig as any) * (.5 as any) as any) as any) * (E as any), A += ((S as any).rot as any) * (E as any);
  }
  (w as any) > (.004 as any) && (b += (58 as any) * (w as any));
  const P: any = (c as any)("ball");
  (P as any) > (.004 as any) && (b += ((P6 as any)(((i as any)("ball") as any).stateTime) as any) * (P as any));
  const $: any = ((f as any) / (M as any) as any) * (m as any),
    D: any = (c as any)("standby"),
    z: any = (D as any) > (0 as any) ? ((.28 as any) + ((.2 as any) * (((Math as any).sin as any)(((((i as any)("standby") as any).stateTime as any) * (1e3 as any) as any) * (.0016 as any)) as any) as any) as any) * (D as any) : 0,
    B: any = {
      scale: ((1 as any) - (o as any) as any) + (($ as any) * (o as any) as any),
      dx: (v as any) * (o as any),
      dy: ((-(y as any).lift as any) * (d as any) as any) + ((b as any) * (o as any) as any),
      rotation: (A as any) * (o as any),
      opacity: ((1 as any) - (((1 as any) - ((y as any).tone as any) as any) * (d as any) as any) as any) * ((1 as any) - (z as any) as any),
      round: (P0 as any)(u),
      ring: h
    },
    R: any = (1 as any) - ((Co as any)((C as any)(((n as any) - (44 as any) as any) / (90 as any), 0, 1)) as any),
    O: any = (e as any) == (null as any) ? 1 : (Ae as any)[e],
    H: any = a ? (Ae as any)[a] : O,
    K: any = (1 as any) + ((((((O as any) * (r as any) as any) + ((H as any) * ((1 as any) - (r as any) as any) as any) as any) - (1 as any) as any) * (o as any) as any) * (R as any) as any),
    U: any = [];
  for (const S of [a, e]) {
    if ((S as any) == (null as any)) continue;
    const Y: any = (c as any)(S);
    (Y as any) > (.004 as any) && ((U as any).push as any)(...(H6 as any)(S, Y, (i as any)(S), f, s));
  }
  return {
    core: B,
    isFaceVisible: (o as any) < (.5 as any),
    zoom: K,
    parts: ((U as any).filter as any)((S: any): any => ((S as any).opacity as any) > (0 as any))
  };
}
const U6: any = (zc as any)(192),
  j6: any = (Zc as any)(96),
  X6: number = .6;
function Jn(this: any, t: any, n: any, e: any): any {
  return (n as any) === ("sphere" as any) ? (Xi as any)({
    ...t
  }, e) : (Fc as any)({
    ...t,
    body: n,
    inspect: (t as any).inspectWeight
  }, e);
}
function Z6(this: any, t: any, n: any, e: any = n): any {
  const s: any = (((((t as any).bodies as any).map as any)(({
      body: l,
      weight: h
    }: any): any => ({
      shape: (Jn as any)(t, l, n),
      weight: h
    })) as any).sort as any)((l: any, h: any): any => ((h as any).weight as any) - ((l as any).weight as any)),
    o: any = (s as any)[0]?.shape.center ?? [(n as any) / (2 as any), (n as any) / (2 as any)],
    r: any = (s as any)[0]?.shape.radius ?? 0,
    a: any = (Yc as any)([U6, ...((s as any).map as any)(({
      shape: l
    }: any): any => (Gc as any)((l as any).body, (l as any).center))]),
    c: any = (vs as any)(((s as any).map as any)(({
      shape: l,
      weight: h
    }: any): any => ({
      outline: (Hc as any)((l as any).body, (l as any).center, a),
      weight: h
    }))),
    i: any = ((t as any).morph as any) == (null as any) ? null : (K6 as any)((t as any).morph, e),
    u: any = (((c0 as any) * (n as any) as any) / (2 as any) as any) / (M as any);
  return {
    size: n,
    center: o,
    body: (i as any) == (null as any) || (((i as any).core as any).round as any) === (0 as any) ? c : (Qc as any)(c, (W6 as any)(i, o, r, a), ((i as any).core as any).round),
    eyes: ((s as any).length as any) === (1 as any) ? (s as any)[0]?.shape.eyes ?? [] : (n3 as any)(s),
    head: (i as any) == (null as any) || ((t as any).morph as any) == (null as any) ? null : (J6 as any)(i, ((t as any).morph as any).amount, (t as any).zoom, u),
    parts: i?.parts ?? [],
    markScale: u,
    zoom: i?.zoom ?? 1
  };
}
function V6(this: any, t: any, n: any, e: any, s: any, o: any = e, r: any = e): any {
  return (Q6 as any)((Z6 as any)(t, e, o), n, s, r);
}
function Q6(this: any, t: any, n: any, e: any, s: any = (t as any).size): any {
  const {
      size: o,
      center: r
    }: any = t,
    a: any = (zn as any)(n),
    c: any = (Sn as any)((t as any).body),
    i: any = (((((t as any).eyes as any).map as any)(Sn) as any).join as any)("");
  let u: any = "",
    l: any = `<path d="${c}" fill="${a}"/>`;
  (i as any) !== ("" as any) && (n as any).cutout ? (u += `<mask id="${e}-holes" maskUnits="userSpaceOnUse" x="0" y="0" width="${o}" height="${o}"><rect width="${o}" height="${o}" fill="#fff"/><path d="${i}" fill="#000"/></mask>`, l = `<path d="${c}" fill="${a}" mask="url(#${e}-holes)"/>`) : (i as any) !== ("" as any) && (u += `<clipPath id="${e}-body"><path d="${c}"/></clipPath>`, l += `<path d="${i}" fill="${(Gn as any)(n)}" clip-path="url(#${e}-body)"/>`);
  const h: any = (t as any).head,
    f: any = (h as any) == (null as any) ? l : `<g transform="translate(${(F as any)(((r as any)[0] as any) + (((h as any).translate as any)[0] as any))} ${(F as any)(((r as any)[1] as any) + (((h as any).translate as any)[1] as any))}) rotate(${(F as any)((h as any).rotation)}) scale(${(F as any)((h as any).scale, 5)}) translate(${(F as any)(-(r as any)[0])} ${(F as any)(-(r as any)[1])})"${((h as any).opacity as any) < (1 as any) ? ` opacity="${(F as any)((h as any).opacity, 3)}"` : ""}>${l}</g>`,
    d: any = (((t as any).parts as any).length as any) === (0 as any) ? "" : `<g transform="translate(${(o as any) / (2 as any)} ${(o as any) / (2 as any)}) scale(${(F as any)((t as any).markScale, 5)}) translate(${-M} ${-M})">${(((((t as any).parts as any).map as any)((m: any): any => (t3 as any)(m, a)) as any).join as any)("")}</g>`,
    p: any = ((o as any) / (2 as any) as any) + (((s6 as any) - (M as any) as any) * ((t as any).markScale as any) as any),
    y: any = ((t as any).zoom as any) === (1 as any) ? `${d}${f}` : `<g transform="translate(${(F as any)(p)} ${(F as any)(p)}) scale(${(F as any)((t as any).zoom, 5)}) translate(${(F as any)(-p)} ${(F as any)(-p)})">${d}${f}</g>`;
  return `${(Yn as any)(o, e, s)}${(u as any) === ("" as any) ? "" : `<defs>${u}</defs>`}${y}</svg>`;
}
function W6(this: any, t: any, n: any, e: any, s: any): any {
  const o: any = (e as any) / (M as any),
    r: any = ((((t as any).core as any).ring as any).map as any)(([a, c]: any): any => [((n as any)[0] as any) + (((a as any) - (M as any) as any) * (o as any) as any), ((n as any)[1] as any) + (((c as any) - (M as any) as any) * (o as any) as any)]);
  return (Uc as any)(r, n, s);
}
function J6(this: any, t: any, n: any, e: any, s: any): any {
  const {
      core: o
    }: any = t,
    r: any = (1 as any) - (n as any),
    a: any = (n as any) > (0 as any) ? (((o as any).scale as any) - (r as any) as any) / (n as any) : 0;
  return {
    translate: [((o as any).dx as any) * (s as any), ((o as any).dy as any) * (s as any)],
    rotation: (o as any).rotation,
    scale: (r as any) + (((a as any) * ((c0 as any) / (e as any) as any) as any) * (n as any) as any),
    opacity: (o as any).opacity
  };
}
function t3(this: any, t: any, n: any): any {
  const e: any = ((t as any).opacity as any) < (1 as any) ? ` opacity="${(F as any)((t as any).opacity, 3)}"` : "";
  switch ((t as any).type) {
    case "disc":
      return `<circle cx="${(F as any)((t as any).cx)}" cy="${(F as any)((t as any).cy)}" r="${(F as any)((t as any).r)}" fill="${n}"${e}/>`;
    case "ring":
      {
        const s: any = ((2 as any) * ((Math as any).PI as any) as any) * ((t as any).r as any),
          o: any = ((t as any).arc as any) == (null as any) ? "" : ` stroke-dasharray="${(F as any)((s as any) * (((t as any).arc as any).fraction as any))} ${(F as any)(s)}" transform="rotate(${(F as any)(((t as any).arc as any).startDeg)} ${(F as any)((t as any).cx)} ${(F as any)((t as any).cy)})"`;
        return `<circle cx="${(F as any)((t as any).cx)}" cy="${(F as any)((t as any).cy)}" r="${(F as any)((t as any).r)}" fill="none" stroke="${n}" stroke-width="${(F as any)((t as any).width)}"${o}${e}/>`;
      }
    case "shape":
      return `<path d="${(t as any).d}" transform="${(t as any).transform}" fill="${n}"${e}/>`;
    case "stroke":
      return `<path d="${(t as any).d}" fill="none" stroke="${n}" stroke-width="${(F as any)((t as any).width)}" stroke-linecap="round" stroke-linejoin="round"${e}/>`;
  }
}
function n3(this: any, t: any): any {
  const n: any = (((t as any)[0]?.shape.radius ?? 0) as any) * (X6 as any),
    e: any = [];
  return ((t as any).forEach as any)(({
    shape: s
  }: any, o: any): any => {
    for (const r of (s as any).eyes) {
      const a: any = (ws as any)(r),
        c: any = (e3 as any)(e, o, a, n);
      if ((c as any) != (null as any)) {
        ((c as any).loops as any)[o] = r;
        continue;
      }
      const i: any = ((t as any).map as any)((): any => null);
      (i as any)[o] = r, ((e as any).push as any)({
        anchor: a,
        loops: i
      });
    }
  }), ((e as any).map as any)((s: any): any => {
    const o: any = (((s as any).loops as any).map as any)((a: any): any => (a as any) == (null as any) ? null : (jc as any)(a)),
      r: any = (Vc as any)([j6, ...((o as any).map as any)((a: any): any => a?.stations ?? [])]);
    return (vs as any)(((t as any).map as any)(({
      weight: a
    }: any, c: any): any => {
      const i: any = (o as any)[c];
      return {
        outline: (i as any) == (null as any) ? (Wc as any)((s as any).anchor, (r as any).length) : (Xc as any)(i, r),
        weight: a
      };
    }));
  });
}
function e3(this: any, t: any, n: any, e: any, s: any): any {
  let o: any = null,
    r: any = s;
  for (const a of t) {
    if ((((a as any).loops as any)[n] as any) != (null as any)) continue;
    const c: any = ((Math as any).hypot as any)((((a as any).anchor as any)[0] as any) - ((e as any)[0] as any), (((a as any).anchor as any)[1] as any) - ((e as any)[1] as any));
    (c as any) < (r as any) && (o = a, r = c);
  }
  return o;
}
function F(this: any, t: any, n: any = 2): any {
  const e: any = (10 as any) ** (n as any);
  return (String as any)((((Math as any).round as any)((t as any) * (e as any)) as any) / (e as any));
}
function s3(this: any, t: any, n: any, e: any, s: any, o: any = {}): any {
  const [r, ...a]: any = (t as any).bodies;
  if ((r as any) == (null as any) || ((a as any).length as any) > (0 as any) || ((t as any).morph as any) != (null as any)) return (V6 as any)(t, n, e, s, (o as any).displaySize ?? e, (o as any).extent);
  if (((r as any).body as any) === ("sphere" as any)) return (Vi as any)((ji as any)({
    ...t,
    body: (r as any).body
  }, n, e, o), n, s, (o as any).extent);
  const c: any = {
    ...t,
    body: (r as any).body,
    inspect: (t as any).inspectWeight
  };
  return (Oc as any)((Rc as any)(c, n, e, o), s, (o as any).extent);
}
function C3(this: any, t: any): any {
  switch (t) {
    case "blob":
      return "sphere";
    case "flower":
      return "starFlower";
    case "heart":
      return "heartChubby";
    case "star":
      return "star6";
    default:
      return t;
  }
}
const x0: any = [0, 0, 0];
function o3(this: any, t: any, n: any): any {
  return (n as any) == (null as any) ? {
    ink: x0,
    spot: x0,
    cutout: !0,
    inkPaint: t
  } : {
    ink: x0,
    spot: x0,
    cutout: !1,
    inkPaint: t,
    spotPaint: n
  };
}
const r3: string = "var(--grok-bot-still-ink)",
  _e: number = 1e3,
  Pe: any = new (Map as any)();
function Rs(this: any, t: any, n: any = Y0): any {
  const e: any = `${t}:${n}`,
    s: any = ((Pe as any).get as any)(e);
  if ((s as any) !== (void 0 as any)) return s;
  const o: any = (_e as any) * ((qn as any)(n) as any),
    r: any = (o as any) / (2 as any);
  let a: any = 0;
  for (const u of ((Jn as any)((t1 as any)(t), t, o) as any).body) for (const [l, h] of u) a = ((Math as any).max as any)(a, ((Math as any).abs as any)((l as any) - (r as any)), ((Math as any).abs as any)((h as any) - (r as any)));
  const c: any = (_e as any) / (2 as any),
    i: any = (a as any) <= (c as any) ? n : ((n as any) * (c as any) as any) / (a as any);
  return ((Pe as any).set as any)(e, i), i;
}
function a3(this: any, {
  body: t,
  ink: n,
  size: e,
  fill: s = Y0,
  id: o = "grok-bot-still"
}: any): any {
  const r: any = (Rs as any)(t, s),
    a: any = (e as any) * ((qn as any)(r) as any),
    c: any = (Fs as any)(((a as any) - (e as any) as any) / (2 as any)),
    i: any = (o3 as any)((typeof n as any) == ("string" as any) ? n : r3),
    u: any = (s3 as any)((t1 as any)(t), i, a, o, {
      displaySize: e
    }),
    l: any = (typeof n as any) == ("string" as any) ? "" : `<style>svg{--grok-bot-still-ink:${(n as any).light}}@media (prefers-color-scheme:dark){svg{--grok-bot-still-ink:${(n as any).dark}}}</style>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${e}" viewBox="${c} ${c} ${e} ${e}">${l}${u}</svg>`;
}
function $3(this: any, t: any): any {
  return `data:image/svg+xml,${(encodeURIComponent as any)((a3 as any)(t))}`;
}
function T3(this: any, {
  body: t,
  size: n,
  fill: e = Y0,
  inflate: s = 0,
  paint: o = "#000"
}: any): any {
  const r: any = ((c3 as any)((t1 as any)(t), t, n, (Rs as any)(t, e)) as any).body,
    a: any = (s as any) > (0 as any) ? ` stroke="${o}" stroke-width="${(Fs as any)((2 as any) * (s as any))}" stroke-linejoin="round"` : "";
  return `<path d="${r}" fill="${o}"${a}/>`;
}
function c3(this: any, t: any, n: any, e: any, s: any = Y0): any {
  const o: any = (e as any) * ((qn as any)(s) as any),
    r: any = ((o as any) - (e as any) as any) / (2 as any),
    a: any = (Jn as any)(t, n, o),
    c: any = (i: any): any => (Sn as any)(((i as any).map as any)(([u, l]: any): any => [(u as any) - (r as any), (l as any) - (r as any)]));
  return {
    body: (((((a as any).body as any).map as any)(c) as any).join as any)(""),
    eyes: (((a as any).eyes as any).map as any)(c)
  };
}
function t1(this: any, t: any): any {
  return (((or as any)({
    body: t
  }) as any).frame as any)();
}
function Fs(this: any, t: any): any {
  return (((Math as any).round as any)((t as any) * (1e3 as any)) as any) / (1e3 as any);
}
function R3(this: any): any {
  return (globalThis as any).window?.desktopMount ?? null;
}
export { S3 as A, c0 as B, s3 as C, js as D, qn as E, vo as F, c1 as G, w3 as H, _0 as I, M3 as J, R3 as K, Ws as L, Y0 as M, k3 as N, v3 as O, _3 as P, Dn as Q, Xs as R, b3 as S, p3 as T, oo as U, g3 as a, d3 as b, h3 as c, wo as d, y3 as e, A3 as f, Ao as g, C3 as h, io as i, $3 as j, I3 as k, c3 as l, T3 as m, Rs as n, or as o, o3 as p, E3 as q, vt as r, P3 as s, f3 as t, l3 as u, u3 as v, x3 as w, i3 as x, m3 as y, Hs as z };
//# debugId=79011b82-369b-446b-a4fc-fe43131185ea
