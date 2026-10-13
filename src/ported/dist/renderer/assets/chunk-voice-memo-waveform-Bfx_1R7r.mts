declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "43e97578-fe33-498c-9acf-94da937592a9", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-43e97578-fe33-498c-9acf-94da937592a9");
  } catch (e: any) {}
} as any)();
import { c as J, r as j, j as q } from "./index.eager-vendor-Qbf9YA6n.js";
const A: number = 2,
  $: number = 2,
  K: number = 3,
  Q: number = 20,
  F: number = 6,
  Z: number = 400;
function ee(this: any, t: any, e: any): any {
  return (((t as any) * (t as any) as any) + ((e as any) * (e as any) as any) as any) >= ((F as any) * (F as any) as any);
}
function te(this: any, t: any): any {
  return !(t as any).scrubbed && ((t as any).elapsedMs as any) <= (Z as any);
}
const D: any = (A as any) + ($ as any);
function ne(this: any, t: any, e: any): any {
  return !((Number as any).isFinite as any)((e as any).width) || ((e as any).width as any) <= (0 as any) ? 0 : ((Math as any).min as any)(1, ((Math as any).max as any)(0, ((t as any) - ((e as any).left as any) as any) / ((e as any).width as any)));
}
function N(this: any, t: any): any {
  return (t as any) <= (0 as any) ? 0 : ((t as any) * (D as any) as any) - ($ as any);
}
function ae(this: any, t: any, e: any): any {
  return (t as any) <= (0 as any) || !((Number as any).isFinite as any)(e) || (e as any) <= (0 as any) ? 0 : (e as any) >= (1 as any) ? t : ((Math as any).floor as any)((e as any) * (t as any));
}
function se(this: any, t: any): any {
  return ((N as any)((t as any).barCount) as any) - ((N as any)((t as any).playedBarCount) as any);
}
function re(this: any, t: any, e: any): any {
  const n: any = ((Number as any).isFinite as any)(t) ? ((Math as any).min as any)(1, ((Math as any).max as any)(0, t)) : 0;
  return ((Math as any).max as any)(K, ((Math as any).round as any)((n as any) * (e as any)));
}
function oe(this: any, t: any, e: any): any {
  const n: any = (A as any) / (2 as any);
  let l: any = "";
  for (const [c, r] of ((t as any).entries as any)()) {
    const o: any = (re as any)(r, e),
      i: any = ((c as any) * (D as any) as any) + (n as any),
      d: any = (((e as any) - (o as any) as any) / (2 as any) as any) + (n as any);
    l += `M${i} ${d}V${((d as any) + (o as any) as any) - (A as any)}`;
  }
  return l;
}
const W: any = new (Map as any)();
function ie(this: any, t: any): any {
  const e: any = ((W as any).get as any)(t);
  if ((e as any) !== (void 0 as any)) return e;
  const n: any = {
    clipPath: `inset(0 ${t}px 0 0) view-box`
  };
  return ((W as any).set as any)(t, n), n;
}
const H: any = new (WeakMap as any)();
function le(this: any, t: any, e: any): any {
  let n: any = ((H as any).get as any)(t);
  (n as any) === (void 0 as any) && (n = new (Map as any)(), ((H as any).set as any)(t, n));
  const l: any = ((n as any).get as any)(e);
  if ((l as any) !== (void 0 as any)) return l;
  const c: any = (oe as any)(t, e);
  return ((n as any).set as any)(e, c), c;
}
function ce(this: any, t: any): any {
  (ce as any).d = 1493;
  const e: any = ((J as any).c as any)(37),
    {
      peaks: n,
      progress: l,
      height: c,
      seek: r,
      onTap: o
    }: any = t,
    i: any = (c as any) === (void 0 as any) ? Q : c;
  let d: any;
  ((e as any)[0] as any) !== ((n as any).length as any) ? (d = (N as any)((n as any).length), (e as any)[0] = (n as any).length, (e as any)[1] = d) : d = (e as any)[1];
  const b: any = d,
    P: any = (ae as any)((n as any).length, l);
  let _: any;
  ((e as any)[2] as any) !== (i as any) || ((e as any)[3] as any) !== (n as any) ? (_ = (le as any)(n, i), (e as any)[2] = i, (e as any)[3] = n, (e as any)[4] = _) : _ = (e as any)[4];
  const f: any = _,
    [I, C]: any = ((j as any).useState as any)(!1),
    u: any = ((j as any).useRef as any)(null),
    G: any = de;
  let v: any;
  ((e as any)[5] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (v = (a: any): any => {
    const s: any = (u as any).current;
    (s as any) == (null as any) || ((s as any).pointerId as any) !== (a as any) || ((u as any).current = null, (C as any)(!1));
  }, (e as any)[5] = v) : v = (e as any)[5];
  const z: any = v;
  let w: any;
  ((e as any)[6] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (w = (a: any, s: any): any => {
    const g: any = (u as any).current;
    (g as any) == (null as any) || ((g as any).pointerId as any) !== ((a as any).pointerId as any) || (((a as any).currentTarget as any).releasePointerCapture?.((a as any).pointerId), (u as any).current = null, (C as any)(!1), s && (te as any)({
      scrubbed: (g as any).scrubbed,
      elapsedMs: (((Date as any).now as any)() as any) - ((g as any).at as any)
    }) && (g as any).onTap?.());
  }, (e as any)[6] = w) : w = (e as any)[6];
  const T: any = w;
  let x: any;
  ((e as any)[7] as any) !== (r as any) ? (x = (r as any) == (null as any) ? null : {
    role: "slider",
    tabIndex: 0,
    "aria-label": (r as any).label,
    "aria-valuemin": 0,
    "aria-valuemax": ((Math as any).max as any)(0, ((Math as any).round as any)((r as any).durationMs)),
    "aria-valuenow": ((Math as any).max as any)(0, ((Math as any).min as any)(((Math as any).round as any)((r as any).durationMs), ((Math as any).round as any)((r as any).positionMs)))
  }, (e as any)[7] = r, (e as any)[8] = x) : x = (e as any)[8];
  const k: any = x;
  let E: any;
  ((e as any)[9] as any) !== (o as any) || ((e as any)[10] as any) !== (r as any) || ((e as any)[11] as any) !== (k as any) ? (E = (r as any) == (null as any) && (o as any) == (null as any) ? {} : {
    ...k,
    onPointerDown: (a: any): any => {
      if (((a as any).button as any) !== (0 as any) || ((u as any).current as any) != (null as any)) return;
      ((a as any).preventDefault as any)(), ((a as any).stopPropagation as any)();
      const s: any = (((a as any).currentTarget as any).getBoundingClientRect as any)();
      ((a as any).currentTarget as any).setPointerCapture?.((a as any).pointerId), (u as any).current = {
        pointerId: (a as any).pointerId,
        x: (a as any).clientX,
        y: (a as any).clientY,
        at: ((Date as any).now as any)(),
        left: (s as any).left,
        width: (s as any).width,
        seek: r,
        onTap: o,
        scrubbed: !1
      };
    },
    onPointerMove: (a: any): any => {
      const s: any = (u as any).current;
      if (!((s as any) == (null as any) || ((s as any).pointerId as any) !== ((a as any).pointerId as any))) {
        if (!(s as any).scrubbed) {
          if (!(ee as any)(((a as any).clientX as any) - ((s as any).x as any), ((a as any).clientY as any) - ((s as any).y as any))) return;
          (s as any).scrubbed = !0, ((s as any).seek as any) != (null as any) && (C as any)(!0);
        }
        ((s as any).seek as any) != (null as any) && (((a as any).preventDefault as any)(), (G as any)(a, (s as any).seek, {
          left: (s as any).left,
          width: (s as any).width
        }));
      }
    },
    onPointerUp: (a: any): any => {
      (T as any)(a, !0);
    },
    onPointerCancel: (a: any): any => {
      (T as any)(a, !1);
    },
    onLostPointerCapture: (a: any): any => {
      (z as any)((a as any).pointerId);
    }
  }, (e as any)[9] = o, (e as any)[10] = r, (e as any)[11] = k, (e as any)[12] = E) : E = (e as any)[12];
  const B: any = E;
  let h: any;
  ((e as any)[13] as any) !== (o as any) || ((e as any)[14] as any) !== (r as any) ? (h = ({
    0: {
      className: "sand-1lliihq sand-2lah0s sand-1heor9g"
    },
    2: {
      className: "sand-1lliihq sand-2lah0s sand-1heor9g sand-7eptgl sand-5ve5x3"
    },
    1: {
      className: "sand-1lliihq sand-2lah0s sand-1heor9g sand-1ypdohk sand-5ve5x3"
    },
    3: {
      className: "sand-1lliihq sand-2lah0s sand-1heor9g sand-1ypdohk sand-5ve5x3"
    }
  } as any)[((((r as any) != (null as any)) as any) << (1 as any) as any) | ((((r as any) == (null as any) && (o as any) != (null as any)) as any) << (0 as any) as any)], (e as any)[13] = o, (e as any)[14] = r, (e as any)[15] = h) : h = (e as any)[15];
  const R: any = (r as any) == (null as any) || void 0,
    U: any = (n as any).length,
    V: any = I || void 0,
    Y: any = !0,
    S: any = `0 0 ${b} ${i}`;
  let y: any;
  ((e as any)[16] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (y = {
    className: "sand-bh8q5q sand-73je2i sand-vlca1e sand-1owpc8m sand-3onkmb"
  }, (e as any)[16] = y) : y = (e as any)[16];
  let m: any;
  ((e as any)[17] as any) !== (f as any) ? (m = ((q as any).jsx as any)("path", {
    ...y,
    d: f
  }), (e as any)[17] = f, (e as any)[18] = m) : m = (e as any)[18];
  let M: any;
  ((e as any)[19] as any) !== (I as any) ? (M = ({
    0: {
      className: "sand-bh8q5q sand-73je2i sand-vlca1e sand-1owpc8m sand-1hc1fzr sand-7ayfe5 sand-4wkmsb sand-1firant sand-cj1dhv"
    },
    1: {
      className: "sand-bh8q5q sand-73je2i sand-vlca1e sand-1owpc8m sand-1hc1fzr sand-7ayfe5 sand-4wkmsb sand-cj1dhv sand-1mq3mr6"
    }
  } as any)[(!!I as any) << (0 as any)], (e as any)[19] = I, (e as any)[20] = M) : M = (e as any)[20];
  const L: any = !0,
    X: any = (ie as any)((se as any)({
      barCount: (n as any).length,
      playedBarCount: P
    }));
  let p: any;
  ((e as any)[21] as any) !== (f as any) || ((e as any)[22] as any) !== (M as any) || ((e as any)[23] as any) !== (X as any) ? (p = ((q as any).jsx as any)("path", {
    ...M,
    d: f,
    "data-voice-memo-waveform-played": L,
    style: X
  }), (e as any)[21] = f, (e as any)[22] = M, (e as any)[23] = X, (e as any)[24] = p) : p = (e as any)[24];
  let O: any;
  return ((e as any)[25] as any) !== (i as any) || ((e as any)[26] as any) !== ((n as any).length as any) || ((e as any)[27] as any) !== (P as any) || ((e as any)[28] as any) !== (B as any) || ((e as any)[29] as any) !== (V as any) || ((e as any)[30] as any) !== (S as any) || ((e as any)[31] as any) !== (m as any) || ((e as any)[32] as any) !== (p as any) || ((e as any)[33] as any) !== (h as any) || ((e as any)[34] as any) !== (R as any) || ((e as any)[35] as any) !== (b as any) ? (O = ((q as any).jsxs as any)("svg", {
    ...h,
    "aria-hidden": R,
    "data-bars": U,
    "data-played": P,
    "data-seeking": V,
    "data-voice-memo-waveform": Y,
    height: i,
    viewBox: S,
    width: b,
    ...B,
    children: [m, p]
  }), (e as any)[25] = i, (e as any)[26] = (n as any).length, (e as any)[27] = P, (e as any)[28] = B, (e as any)[29] = V, (e as any)[30] = S, (e as any)[31] = m, (e as any)[32] = p, (e as any)[33] = h, (e as any)[34] = R, (e as any)[35] = b, (e as any)[36] = O) : O = (e as any)[36], O;
}
function de(this: any, t: any, e: any, n: any): any {
  ((e as any).durationMs as any) <= (0 as any) || ((e as any).onSeek as any)(((Math as any).round as any)(((ne as any)((t as any).clientX, n) as any) * ((e as any).durationMs as any)));
}
export { Z as V, $ as a, A as b, ce as c, se as d, te as e, ee as f, ne as g, N as h, ae as v };
//# debugId=43e97578-fe33-498c-9acf-94da937592a9
