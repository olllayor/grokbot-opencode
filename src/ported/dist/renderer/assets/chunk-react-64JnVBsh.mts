declare var AbortController: any;
declare var Element: any;
declare var EventTarget: any;
declare var HTMLButtonElement: any;
declare var HTMLElement: any;
declare var IntersectionObserver: any;
declare var PointerEvent: any;
declare var document: any;
declare var getComputedStyle: any;
declare var global: any;
declare var key: any;
declare var navigator: any;
declare var performance: any;
declare var queueMicrotask: any;
declare var requestAnimationFrame: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "e1556eec-9d84-48e0-8c09-30454a682cb3", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-e1556eec-9d84-48e0-8c09-30454a682cb3");
  } catch (e: any) {}
} as any)();
import { dc as Ns, dd as on, de as Ks, df as F, dg as at, dh as $t, di as Gs, dj as rn, dk as an, dl as ln, dm as un, dn as cn, dp as hn, dq as Rt, dr as Fe } from "./index-ZYxf-aBb.js";
import { dt as yl, du as vl, dv as Tl, dB as xl, dy as Pl, ds as Al, dw as Vl, dz as Sl, dC as bl, dA as Dl, dx as wl } from "./index-ZYxf-aBb.js";
import { aT as D, aU as he, aV as Q, aW as fe, aX as Ws, aY as ft, aZ as fn, a_ as dn, a$ as pn, b0 as mn, b1 as gn, b2 as W, b3 as yn, b4 as vn, b5 as Tn, b6 as xn, b7 as Pn, b8 as Et, b9 as Be, ba as _s, bb as An, bc as $s, bd as Vn, be as Sn, r as St, bf as bn, bg as zs, bh as Hs, bi as Xs, bj as Ys, bk as vt, bl as Dn, bm as wn, j as Cn, bn as Mn } from "./index.eager-vendor-Qbf9YA6n.js";
import { bo as Ml, bu as El, bv as Rl, bw as Ll, bp as kl, by as Fl, bq as Bl, bt as Il, bx as jl, br as Ol, bs as Ul } from "./index.eager-vendor-Qbf9YA6n.js";
import "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import "./index.eager-common-CdCvBQNJ.js";
function de(this: any, e: any, t: any): any {
  (((e as any).indexOf as any)(t) as any) === (-1 as any) && ((e as any).push as any)(t);
}
function pe(this: any, e: any, t: any): any {
  const s: any = ((e as any).indexOf as any)(t);
  (s as any) > (-1 as any) && ((e as any).splice as any)(s, 1);
}
let me: any = (): any => {};
const _: any = {},
  qs: any = (e: any): any => ((/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u as any).test as any)(e),
  Zs: any = (e: any): any => ((/^0[^.\s]+$/u as any).test as any)(e);
function ge(this: any, e: any): any {
  let t: any;
  return (): any => ((t as any) === (void 0 as any) && (t = (e as any)()), t);
}
const U: any = (e: any): any => e,
  mt: any = (...e: any): any => ((e as any).reduce as any)((t: any, s: any): any => (i: any): any => (s as any)((t as any)(i))),
  dt: any = (e: any, t: any, s: any): any => {
    const i: any = (t as any) - (e as any);
    return i ? ((s as any) - (e as any) as any) / (i as any) : 1;
  };
class ye {
  declare subscriptions: any;
  [key: string]: any;
  constructor() {
    (this as any).subscriptions = [];
  }
  add(t: any): any {
    return (de as any)((this as any).subscriptions, t), (): any => (pe as any)((this as any).subscriptions, t);
  }
  notify(t: any, s: any, i: any): any {
    const n: any = ((this as any).subscriptions as any).length;
    if (n) if ((n as any) === (1 as any)) (((this as any).subscriptions as any)[0] as any)(t, s, i);else for (let r: any = 0; (r as any) < (n as any); r++) {
      const o: any = ((this as any).subscriptions as any)[r];
      o && (o as any)(t, s, i);
    }
  }
  getSize(): any {
    return ((this as any).subscriptions as any).length;
  }
  clear(): any {
    ((this as any).subscriptions as any).length = 0;
  }
}
const G: any = (e: any): any => (e as any) * (1e3 as any),
  O: any = (e: any): any => (e as any) / (1e3 as any),
  Js: any = (e: any, t: any): any => t ? (e as any) * ((1e3 as any) / (t as any) as any) : 0,
  Qs: any = (e: any, t: any, s: any): any => (((((((1 as any) - ((3 as any) * (s as any) as any) as any) + ((3 as any) * (t as any) as any) as any) * (e as any) as any) + (((3 as any) * (s as any) as any) - ((6 as any) * (t as any) as any) as any) as any) * (e as any) as any) + ((3 as any) * (t as any) as any) as any) * (e as any),
  En: number = 1e-7,
  Rn: number = 12;
function Ln(this: any, e: any, t: any, s: any, i: any, n: any): any {
  let r: any,
    o: any,
    a: any = 0;
  do o = (t as any) + (((s as any) - (t as any) as any) / (2 as any) as any), r = ((Qs as any)(o, i, n) as any) - (e as any), (r as any) > (0 as any) ? s = o : t = o; while ((((Math as any).abs as any)(r) as any) > (En as any) && (++a as any) < (Rn as any));
  return o;
}
function gt(this: any, e: any, t: any, s: any, i: any): any {
  if ((e as any) === (t as any) && (s as any) === (i as any)) return U;
  const n: any = (r: any): any => (Ln as any)(r, 0, 1, e, s);
  return (r: any): any => (r as any) === (0 as any) || (r as any) === (1 as any) ? r : (Qs as any)((n as any)(r), t, i);
}
const ti: any = (e: any): any => (t: any): any => (t as any) <= (.5 as any) ? ((e as any)((2 as any) * (t as any)) as any) / (2 as any) : ((2 as any) - ((e as any)((2 as any) * ((1 as any) - (t as any) as any)) as any) as any) / (2 as any),
  ei: any = (e: any): any => (t: any): any => (1 as any) - ((e as any)((1 as any) - (t as any)) as any),
  si: any = (gt as any)(.33, 1.53, .69, .99),
  ve: any = (ei as any)(si),
  ii: any = (ti as any)(ve),
  ni: any = (e: any): any => (e as any) >= (1 as any) ? 1 : ((e *= 2) as any) < (1 as any) ? (.5 as any) * ((ve as any)(e) as any) : (.5 as any) * ((2 as any) - (((Math as any).pow as any)(2, (-10 as any) * ((e as any) - (1 as any) as any)) as any) as any),
  Te: any = (e: any): any => (1 as any) - (((Math as any).sin as any)(((Math as any).acos as any)(e)) as any),
  oi: any = (ei as any)(Te),
  ri: any = (ti as any)(Te),
  kn: any = (gt as any)(.42, 0, 1, 1),
  Fn: any = (gt as any)(0, 0, .58, 1),
  ai: any = (gt as any)(.42, 0, .58, 1),
  Bn: any = (e: any): any => ((Array as any).isArray as any)(e) && (typeof (e as any)[0] as any) != ("number" as any),
  li: any = (e: any): any => ((Array as any).isArray as any)(e) && (typeof (e as any)[0] as any) == ("number" as any),
  In: any = {
    linear: U,
    easeIn: kn,
    easeInOut: ai,
    easeOut: Fn,
    circIn: Te,
    circInOut: ri,
    circOut: oi,
    backIn: ve,
    backInOut: ii,
    backOut: si,
    anticipate: ni
  },
  jn: any = (e: any): any => (typeof e as any) == ("string" as any),
  Ie: any = (e: any): any => {
    if ((li as any)(e)) {
      (me as any)(((e as any).length as any) === (4 as any));
      const [t, s, i, n]: any = e;
      return (gt as any)(t, s, i, n);
    } else if ((jn as any)(e)) return (In as any)[e];
    return e;
  },
  Tt: any = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
function On(this: any, e: any, t: any): any {
  let s: any = new (Set as any)(),
    i: any = new (Set as any)(),
    n: any = !1,
    r: any = !1;
  const o: any = new (WeakSet as any)();
  let a: any = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function l(this: any, u: any): any {
    ((o as any).has as any)(u) && (((c as any).schedule as any)(u), (e as any)()), (u as any)(a);
  }
  const c: any = {
    schedule: (u: any, h: any = !1, f: any = !1): any => {
      const m: any = f && n ? s : i;
      return h && ((o as any).add as any)(u), ((m as any).has as any)(u) || ((m as any).add as any)(u), u;
    },
    cancel: (u: any): any => {
      ((i as any).delete as any)(u), ((o as any).delete as any)(u);
    },
    process: (u: any): any => {
      if (a = u, n) {
        r = !0;
        return;
      }
      n = !0, [s, i] = [i, s], ((s as any).forEach as any)(l), ((s as any).clear as any)(), n = !1, r && (r = !1, ((c as any).process as any)(u));
    }
  };
  return c;
}
const Un: number = 40;
function ui(this: any, e: any, t: any): any {
  let s: any = !1,
    i: any = !0;
  const n: any = {
      delta: 0,
      timestamp: 0,
      isProcessing: !1
    },
    r: any = (): any => s = !0,
    o: any = ((Tt as any).reduce as any)((g: any, A: any): any => ((g as any)[A] = (On as any)(r), g), {}),
    {
      setup: a,
      read: l,
      resolveKeyframes: c,
      preUpdate: u,
      update: h,
      preRender: f,
      render: d,
      postRender: m
    }: any = o,
    v: any = (): any => {
      const g: any = (_ as any).useManualTiming ? (n as any).timestamp : ((performance as any).now as any)();
      s = !1, (_ as any).useManualTiming || ((n as any).delta = i ? (1e3 as any) / (60 as any) : ((Math as any).max as any)(((Math as any).min as any)((g as any) - ((n as any).timestamp as any), Un), 1)), (n as any).timestamp = g, (n as any).isProcessing = !0, ((a as any).process as any)(n), ((l as any).process as any)(n), ((c as any).process as any)(n), ((u as any).process as any)(n), ((h as any).process as any)(n), ((f as any).process as any)(n), ((d as any).process as any)(n), ((m as any).process as any)(n), (n as any).isProcessing = !1, s && t && (i = !1, (e as any)(v));
    },
    y: any = (): any => {
      s = !0, i = !0, (n as any).isProcessing || (e as any)(v);
    };
  return {
    schedule: ((Tt as any).reduce as any)((g: any, A: any): any => {
      const T: any = (o as any)[A];
      return (g as any)[A] = (V: any, w: any = !1, P: any = !1): any => (s || (y as any)(), ((T as any).schedule as any)(V, w, P)), g;
    }, {}),
    cancel: (g: any): any => {
      for (let A: any = 0; (A as any) < ((Tt as any).length as any); A++) (((o as any)[(Tt as any)[A]] as any).cancel as any)(g);
    },
    state: n,
    steps: o
  };
}
const {
  schedule: S,
  cancel: $,
  state: E,
  steps: Lt
}: any = (ui as any)((typeof requestAnimationFrame as any) < ("u" as any) ? requestAnimationFrame : U, !0);
let Pt: any;
function Nn(this: any): any {
  Pt = void 0;
}
const k: any = {
  now: (): any => ((Pt as any) === (void 0 as any) && ((k as any).set as any)((E as any).isProcessing || (_ as any).useManualTiming ? (E as any).timestamp : ((performance as any).now as any)()), Pt),
  set: (e: any): any => {
    Pt = e, (queueMicrotask as any)(Nn);
  }
};
function kt(this: any, e: any, t: any, s: any): any {
  return (s as any) < (0 as any) && (s += 1), (s as any) > (1 as any) && (s -= 1), (s as any) < ((1 as any) / (6 as any) as any) ? (e as any) + ((((t as any) - (e as any) as any) * (6 as any) as any) * (s as any) as any) : (s as any) < ((1 as any) / (2 as any) as any) ? t : (s as any) < ((2 as any) / (3 as any) as any) ? (e as any) + ((((t as any) - (e as any) as any) * (((2 as any) / (3 as any) as any) - (s as any) as any) as any) * (6 as any) as any) : e;
}
function Kn(this: any, {
  hue: e,
  saturation: t,
  lightness: s,
  alpha: i
}: any): any {
  e /= 360, t /= 100, s /= 100;
  let n: any = 0,
    r: any = 0,
    o: any = 0;
  if (!t) n = r = o = s;else {
    const a: any = (s as any) < (.5 as any) ? (s as any) * ((1 as any) + (t as any) as any) : ((s as any) + (t as any) as any) - ((s as any) * (t as any) as any),
      l: any = ((2 as any) * (s as any) as any) - (a as any);
    n = (kt as any)(l, a, (e as any) + ((1 as any) / (3 as any) as any)), r = (kt as any)(l, a, e), o = (kt as any)(l, a, (e as any) - ((1 as any) / (3 as any) as any));
  }
  return {
    red: ((Math as any).round as any)((n as any) * (255 as any)),
    green: ((Math as any).round as any)((r as any) * (255 as any)),
    blue: ((Math as any).round as any)((o as any) * (255 as any)),
    alpha: i
  };
}
function bt(this: any, e: any, t: any): any {
  return (s: any): any => (s as any) > (0 as any) ? t : e;
}
const Ft: any = (e: any, t: any, s: any): any => {
    const i: any = (e as any) * (e as any),
      n: any = ((s as any) * (((t as any) * (t as any) as any) - (i as any) as any) as any) + (i as any);
    return (n as any) < (0 as any) ? 0 : ((Math as any).sqrt as any)(n);
  },
  Gn: any = [on, Ns, Ks],
  Wn: any = (e: any): any => ((Gn as any).find as any)((t: any): any => ((t as any).test as any)(e));
function je(this: any, e: any): any {
  const t: any = (Wn as any)(e);
  if (!t) return !1;
  let s: any = ((t as any).parse as any)(e);
  return (t as any) === (Ks as any) && (s = (Kn as any)(s)), s;
}
const Oe: any = (e: any, t: any): any => {
    const s: any = (je as any)(e),
      i: any = (je as any)(t);
    if (!s || !i) return (bt as any)(e, t);
    const n: any = {
      ...s
    };
    return (r: any): any => ((n as any).red = (Ft as any)((s as any).red, (i as any).red, r), (n as any).green = (Ft as any)((s as any).green, (i as any).green, r), (n as any).blue = (Ft as any)((s as any).blue, (i as any).blue, r), (n as any).alpha = (D as any)((s as any).alpha, (i as any).alpha, r), ((Ns as any).transform as any)(n));
  },
  zt: any = new (Set as any)(["none", "hidden"]);
function _n(this: any, e: any, t: any): any {
  return ((zt as any).has as any)(e) ? (s: any): any => (s as any) <= (0 as any) ? e : t : (s: any): any => (s as any) >= (1 as any) ? t : e;
}
function $n(this: any, e: any, t: any): any {
  return (s: any): any => (D as any)(e, t, s);
}
function xe(this: any, e: any): any {
  return (typeof e as any) == ("number" as any) ? $n : (typeof e as any) == ("string" as any) ? (he as any)(e) ? bt : ((F as any).test as any)(e) ? Oe : Xn : ((Array as any).isArray as any)(e) ? ci : (typeof e as any) == ("object" as any) ? ((F as any).test as any)(e) ? Oe : zn : bt;
}
function ci(this: any, e: any, t: any): any {
  const s: any = [...e],
    i: any = (s as any).length,
    n: any = ((e as any).map as any)((r: any, o: any): any => ((xe as any)(r) as any)(r, (t as any)[o]));
  return (r: any): any => {
    for (let o: any = 0; (o as any) < (i as any); o++) (s as any)[o] = ((n as any)[o] as any)(r);
    return s;
  };
}
function zn(this: any, e: any, t: any): any {
  const s: any = {
      ...e,
      ...t
    },
    i: any = {};
  for (const n in s) ((e as any)[n] as any) !== (void 0 as any) && ((t as any)[n] as any) !== (void 0 as any) && ((i as any)[n] = ((xe as any)((e as any)[n]) as any)((e as any)[n], (t as any)[n]));
  return (n: any): any => {
    for (const r in i) (s as any)[r] = ((i as any)[r] as any)(n);
    return s;
  };
}
function Hn(this: any, e: any, t: any): any {
  const s: any = [],
    i: any = {
      color: 0,
      var: 0,
      number: 0
    };
  for (let n: any = 0; (n as any) < (((t as any).values as any).length as any); n++) {
    const r: any = ((t as any).types as any)[n],
      o: any = (((e as any).indexes as any)[r] as any)[(i as any)[r]],
      a: any = ((e as any).values as any)[o] ?? 0;
    (s as any)[n] = a, (i as any)[r]++;
  }
  return s;
}
const Xn: any = (e: any, t: any): any => {
  const s: any = ((at as any).createTransformer as any)(t),
    i: any = ($t as any)(e),
    n: any = ($t as any)(t);
  return ((((i as any).indexes as any).var as any).length as any) === ((((n as any).indexes as any).var as any).length as any) && ((((i as any).indexes as any).color as any).length as any) === ((((n as any).indexes as any).color as any).length as any) && ((((i as any).indexes as any).number as any).length as any) >= ((((n as any).indexes as any).number as any).length as any) ? ((zt as any).has as any)(e) && !((n as any).values as any).length || ((zt as any).has as any)(t) && !((i as any).values as any).length ? (_n as any)(e, t) : (mt as any)((ci as any)((Hn as any)(i, n), (n as any).values), s) : (bt as any)(e, t);
};
function hi(this: any, e: any, t: any, s: any): any {
  return (typeof e as any) == ("number" as any) && (typeof t as any) == ("number" as any) && (typeof s as any) == ("number" as any) ? (D as any)(e, t, s) : ((xe as any)(e) as any)(e, t);
}
const Yn: any = (e: any): any => {
    const t: any = ({
      timestamp: s
    }: any): any => (e as any)(s);
    return {
      start: (s: any = !0): any => ((S as any).update as any)(t, s),
      stop: (): any => ($ as any)(t),
      now: (): any => (E as any).isProcessing ? (E as any).timestamp : ((k as any).now as any)()
    };
  },
  fi: any = (e: any, t: any, s: any = 10): any => {
    let i: any = "";
    const n: any = ((Math as any).max as any)(((Math as any).round as any)((t as any) / (s as any)), 2);
    for (let r: any = 0; (r as any) < (n as any); r++) i += ((((Math as any).round as any)(((e as any)((r as any) / ((n as any) - (1 as any) as any)) as any) * (1e4 as any)) as any) / (1e4 as any) as any) + (", " as any);
    return `linear(${((i as any).substring as any)(0, ((i as any).length as any) - (2 as any))})`;
  },
  Dt: number = 2e4;
function Pe(this: any, e: any): any {
  let t: any = 0;
  const s: number = 50;
  let i: any = ((e as any).next as any)(t);
  for (; !(i as any).done && (t as any) < (Dt as any);) t += s, i = ((e as any).next as any)(t);
  return (t as any) >= (Dt as any) ? (1 as any) / (0 as any) : t;
}
function qn(this: any, e: any, t: any = 100, s: any): any {
  const i: any = (s as any)({
      ...e,
      keyframes: [0, t]
    }),
    n: any = ((Math as any).min as any)((Pe as any)(i), Dt);
  return {
    type: "keyframes",
    ease: (r: any): any => ((((i as any).next as any)((n as any) * (r as any)) as any).value as any) / (t as any),
    duration: (O as any)(n)
  };
}
const Zn: number = 5;
function di(this: any, e: any, t: any, s: any): any {
  const i: any = ((Math as any).max as any)((t as any) - (Zn as any), 0);
  return (Js as any)((s as any) - ((e as any)(i) as any), (t as any) - (i as any));
}
const b: any = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
      granular: .01,
      default: 2
    },
    restDelta: {
      granular: .005,
      default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
  },
  Bt: number = .001;
function Jn(this: any, {
  duration: e = (b as any).duration,
  bounce: t = (b as any).bounce,
  velocity: s = (b as any).velocity,
  mass: i = (b as any).mass
}: any): any {
  let n: any,
    r: any,
    o: any = (1 as any) - (t as any);
  o = (Q as any)((b as any).minDamping, (b as any).maxDamping, o), e = (Q as any)((b as any).minDuration, (b as any).maxDuration, (O as any)(e)), (o as any) < (1 as any) ? (n = (c: any): any => {
    const u: any = (c as any) * (o as any),
      h: any = (u as any) * (e as any),
      f: any = (u as any) - (s as any),
      d: any = (Ht as any)(c, o),
      m: any = ((Math as any).exp as any)(-h);
    return (Bt as any) - (((f as any) / (d as any) as any) * (m as any) as any);
  }, r = (c: any): any => {
    const h: any = ((c as any) * (o as any) as any) * (e as any),
      f: any = ((h as any) * (s as any) as any) + (s as any),
      d: any = ((((Math as any).pow as any)(o, 2) as any) * (((Math as any).pow as any)(c, 2) as any) as any) * (e as any),
      m: any = ((Math as any).exp as any)(-h),
      v: any = (Ht as any)(((Math as any).pow as any)(c, 2), o);
    return (((((-(n as any)(c) as any) + (Bt as any) as any) > (0 as any) ? -1 : 1) as any) * (((f as any) - (d as any) as any) * (m as any) as any) as any) / (v as any);
  }) : (n = (c: any): any => {
    const u: any = ((Math as any).exp as any)((-c as any) * (e as any)),
      h: any = (((c as any) - (s as any) as any) * (e as any) as any) + (1 as any);
    return (-Bt as any) + ((u as any) * (h as any) as any);
  }, r = (c: any): any => {
    const u: any = ((Math as any).exp as any)((-c as any) * (e as any)),
      h: any = ((s as any) - (c as any) as any) * ((e as any) * (e as any) as any);
    return (u as any) * (h as any);
  });
  const a: any = (5 as any) / (e as any),
    l: any = (to as any)(n, r, a);
  if (e = (G as any)(e), (isNaN as any)(l)) return {
    stiffness: (b as any).stiffness,
    damping: (b as any).damping,
    duration: e
  };
  {
    const c: any = (((Math as any).pow as any)(l, 2) as any) * (i as any);
    return {
      stiffness: c,
      damping: ((o as any) * (2 as any) as any) * (((Math as any).sqrt as any)((i as any) * (c as any)) as any),
      duration: e
    };
  }
}
const Qn: number = 12;
function to(this: any, e: any, t: any, s: any): any {
  let i: any = s;
  for (let n: any = 1; (n as any) < (Qn as any); n++) i = (i as any) - (((e as any)(i) as any) / ((t as any)(i) as any) as any);
  return i;
}
function Ht(this: any, e: any, t: any): any {
  return (e as any) * (((Math as any).sqrt as any)((1 as any) - ((t as any) * (t as any) as any)) as any);
}
const eo: any = ["duration", "bounce"],
  so: any = ["stiffness", "damping", "mass"];
function Ue(this: any, e: any, t: any): any {
  return ((t as any).some as any)((s: any): any => ((e as any)[s] as any) !== (void 0 as any));
}
function io(this: any, e: any): any {
  let t: any = {
    velocity: (b as any).velocity,
    stiffness: (b as any).stiffness,
    damping: (b as any).damping,
    mass: (b as any).mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!(Ue as any)(e, so) && (Ue as any)(e, eo)) if ((e as any).visualDuration) {
    const s: any = (e as any).visualDuration,
      i: any = ((2 as any) * ((Math as any).PI as any) as any) / ((s as any) * (1.2 as any) as any),
      n: any = (i as any) * (i as any),
      r: any = ((2 as any) * ((Q as any)(.05, 1, (1 as any) - (((e as any).bounce || 0) as any)) as any) as any) * (((Math as any).sqrt as any)(n) as any);
    t = {
      ...t,
      mass: (b as any).mass,
      stiffness: n,
      damping: r
    };
  } else {
    const s: any = (Jn as any)(e);
    t = {
      ...t,
      ...s,
      mass: (b as any).mass
    }, (t as any).isResolvedFromDuration = !0;
  }
  return t;
}
function wt(this: any, e: any = (b as any).visualDuration, t: any = (b as any).bounce): any {
  const s: any = (typeof e as any) != ("object" as any) ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let {
    restSpeed: i,
    restDelta: n
  }: any = s;
  const r: any = ((s as any).keyframes as any)[0],
    o: any = ((s as any).keyframes as any)[(((s as any).keyframes as any).length as any) - (1 as any)],
    a: any = {
      done: !1,
      value: r
    },
    {
      stiffness: l,
      damping: c,
      mass: u,
      duration: h,
      velocity: f,
      isResolvedFromDuration: d
    }: any = (io as any)({
      ...s,
      velocity: -(O as any)((s as any).velocity || 0)
    }),
    m: any = f || 0,
    v: any = (c as any) / ((2 as any) * (((Math as any).sqrt as any)((l as any) * (u as any)) as any) as any),
    y: any = (o as any) - (r as any),
    p: any = (O as any)(((Math as any).sqrt as any)((l as any) / (u as any))),
    x: any = (((Math as any).abs as any)(y) as any) < (5 as any);
  i || (i = x ? ((b as any).restSpeed as any).granular : ((b as any).restSpeed as any).default), n || (n = x ? ((b as any).restDelta as any).granular : ((b as any).restDelta as any).default);
  let g: any;
  if ((v as any) < (1 as any)) {
    const T: any = (Ht as any)(p, v);
    g = (V: any): any => {
      const w: any = ((Math as any).exp as any)(((-v as any) * (p as any) as any) * (V as any));
      return (o as any) - ((w as any) * (((((m as any) + (((v as any) * (p as any) as any) * (y as any) as any) as any) / (T as any) as any) * (((Math as any).sin as any)((T as any) * (V as any)) as any) as any) + ((y as any) * (((Math as any).cos as any)((T as any) * (V as any)) as any) as any) as any) as any);
    };
  } else if ((v as any) === (1 as any)) g = (T: any): any => (o as any) - ((((Math as any).exp as any)((-p as any) * (T as any)) as any) * ((y as any) + (((m as any) + ((p as any) * (y as any) as any) as any) * (T as any) as any) as any) as any);else {
    const T: any = (p as any) * (((Math as any).sqrt as any)(((v as any) * (v as any) as any) - (1 as any)) as any);
    g = (V: any): any => {
      const w: any = ((Math as any).exp as any)(((-v as any) * (p as any) as any) * (V as any)),
        P: any = ((Math as any).min as any)((T as any) * (V as any), 300);
      return (o as any) - (((w as any) * ((((m as any) + (((v as any) * (p as any) as any) * (y as any) as any) as any) * (((Math as any).sinh as any)(P) as any) as any) + (((T as any) * (y as any) as any) * (((Math as any).cosh as any)(P) as any) as any) as any) as any) / (T as any) as any);
    };
  }
  const A: any = {
    calculatedDuration: d && h || null,
    next: (T: any): any => {
      const V: any = (g as any)(T);
      if (d) (a as any).done = (T as any) >= (h as any);else {
        let w: any = (T as any) === (0 as any) ? m : 0;
        (v as any) < (1 as any) && (w = (T as any) === (0 as any) ? (G as any)(m) : (di as any)(g, T, V));
        const P: any = (((Math as any).abs as any)(w) as any) <= (i as any),
          L: any = (((Math as any).abs as any)((o as any) - (V as any)) as any) <= (n as any);
        (a as any).done = P && L;
      }
      return (a as any).value = (a as any).done ? o : V, a;
    },
    toString: (): any => {
      const T: any = ((Math as any).min as any)((Pe as any)(A), Dt),
        V: any = (fi as any)((w: any): any => (((A as any).next as any)((T as any) * (w as any)) as any).value, T, 30);
      return ((T as any) + ("ms " as any) as any) + (V as any);
    },
    toTransition: (): any => {}
  };
  return A;
}
(wt as any).applyToOptions = (e: any): any => {
  const t: any = (qn as any)(e, 100, wt);
  return (e as any).ease = (t as any).ease, (e as any).duration = (G as any)((t as any).duration), (e as any).type = "keyframes", e;
};
function Xt(this: any, {
  keyframes: e,
  velocity: t = 0,
  power: s = .8,
  timeConstant: i = 325,
  bounceDamping: n = 10,
  bounceStiffness: r = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: c = .5,
  restSpeed: u
}: any): any {
  const h: any = (e as any)[0],
    f: any = {
      done: !1,
      value: h
    },
    d: any = (P: any): any => (a as any) !== (void 0 as any) && (P as any) < (a as any) || (l as any) !== (void 0 as any) && (P as any) > (l as any),
    m: any = (P: any): any => (a as any) === (void 0 as any) ? l : (l as any) === (void 0 as any) || (((Math as any).abs as any)((a as any) - (P as any)) as any) < (((Math as any).abs as any)((l as any) - (P as any)) as any) ? a : l;
  let v: any = (s as any) * (t as any);
  const y: any = (h as any) + (v as any),
    p: any = (o as any) === (void 0 as any) ? y : (o as any)(y);
  (p as any) !== (y as any) && (v = (p as any) - (h as any));
  const x: any = (P: any): any => (-v as any) * (((Math as any).exp as any)((-P as any) / (i as any)) as any),
    g: any = (P: any): any => (p as any) + ((x as any)(P) as any),
    A: any = (P: any): any => {
      const L: any = (x as any)(P),
        B: any = (g as any)(P);
      (f as any).done = (((Math as any).abs as any)(L) as any) <= (c as any), (f as any).value = (f as any).done ? p : B;
    };
  let T: any, V: any;
  const w: any = (P: any): any => {
    (d as any)((f as any).value) && (T = P, V = (wt as any)({
      keyframes: [(f as any).value, (m as any)((f as any).value)],
      velocity: (di as any)(g, P, (f as any).value),
      damping: n,
      stiffness: r,
      restDelta: c,
      restSpeed: u
    }));
  };
  return (w as any)(0), {
    calculatedDuration: null,
    next: (P: any): any => {
      let L: any = !1;
      return !V && (T as any) === (void 0 as any) && (L = !0, (A as any)(P), (w as any)(P)), (T as any) !== (void 0 as any) && (P as any) >= (T as any) ? ((V as any).next as any)((P as any) - (T as any)) : (!L && (A as any)(P), f);
    }
  };
}
function no(this: any, e: any, t: any, s: any): any {
  const i: any = [],
    n: any = s || (_ as any).mix || hi,
    r: any = ((e as any).length as any) - (1 as any);
  for (let o: any = 0; (o as any) < (r as any); o++) {
    let a: any = (n as any)((e as any)[o], (e as any)[(o as any) + (1 as any)]);
    if (t) {
      const l: any = ((Array as any).isArray as any)(t) ? (t as any)[o] || U : t;
      a = (mt as any)(l, a);
    }
    ((i as any).push as any)(a);
  }
  return i;
}
function oo(this: any, e: any, t: any, {
  clamp: s = !0,
  ease: i,
  mixer: n
}: any = {}): any {
  const r: any = (e as any).length;
  if ((me as any)((r as any) === ((t as any).length as any)), (r as any) === (1 as any)) return (): any => (t as any)[0];
  if ((r as any) === (2 as any) && ((t as any)[0] as any) === ((t as any)[1] as any)) return (): any => (t as any)[1];
  const o: any = ((e as any)[0] as any) === ((e as any)[1] as any);
  ((e as any)[0] as any) > ((e as any)[(r as any) - (1 as any)] as any) && (e = (([...e] as any).reverse as any)(), t = (([...t] as any).reverse as any)());
  const a: any = (no as any)(t, i, n),
    l: any = (a as any).length,
    c: any = (u: any): any => {
      if (o && (u as any) < ((e as any)[0] as any)) return (t as any)[0];
      let h: any = 0;
      if ((l as any) > (1 as any)) for (; (h as any) < (((e as any).length as any) - (2 as any) as any) && !((u as any) < ((e as any)[(h as any) + (1 as any)] as any)); h++);
      const f: any = (dt as any)((e as any)[h], (e as any)[(h as any) + (1 as any)], u);
      return ((a as any)[h] as any)(f);
    };
  return s ? (u: any): any => (c as any)((Q as any)((e as any)[0], (e as any)[(r as any) - (1 as any)], u)) : c;
}
function ro(this: any, e: any, t: any): any {
  const s: any = (e as any)[((e as any).length as any) - (1 as any)];
  for (let i: any = 1; (i as any) <= (t as any); i++) {
    const n: any = (dt as any)(0, t, i);
    ((e as any).push as any)((D as any)(s, 1, n));
  }
}
function ao(this: any, e: any): any {
  const t: any = [0];
  return (ro as any)(t, ((e as any).length as any) - (1 as any)), t;
}
function lo(this: any, e: any, t: any): any {
  return ((e as any).map as any)((s: any): any => (s as any) * (t as any));
}
function uo(this: any, e: any, t: any): any {
  return ((((e as any).map as any)((): any => t || ai) as any).splice as any)(0, ((e as any).length as any) - (1 as any));
}
function ut(this: any, {
  duration: e = 300,
  keyframes: t,
  times: s,
  ease: i = "easeInOut"
}: any): any {
  const n: any = (Bn as any)(i) ? ((i as any).map as any)(Ie) : (Ie as any)(i),
    r: any = {
      done: !1,
      value: (t as any)[0]
    },
    o: any = (lo as any)(s && ((s as any).length as any) === ((t as any).length as any) ? s : (ao as any)(t), e),
    a: any = (oo as any)(o, t, {
      ease: ((Array as any).isArray as any)(n) ? n : (uo as any)(t, n)
    });
  return {
    calculatedDuration: e,
    next: (l: any): any => ((r as any).value = (a as any)(l), (r as any).done = (l as any) >= (e as any), r)
  };
}
const co: any = (e: any): any => (e as any) !== (null as any);
function Ae(this: any, e: any, {
  repeat: t,
  repeatType: s = "loop"
}: any, i: any, n: any = 1): any {
  const r: any = ((e as any).filter as any)(co),
    a: any = (n as any) < (0 as any) || t && (s as any) !== ("loop" as any) && ((t as any) % (2 as any) as any) === (1 as any) ? 0 : ((r as any).length as any) - (1 as any);
  return !a || (i as any) === (void 0 as any) ? (r as any)[a] : i;
}
const ho: any = {
  decay: Xt,
  inertia: Xt,
  tween: ut,
  keyframes: ut,
  spring: wt
};
function pi(this: any, e: any): any {
  (typeof (e as any).type as any) == ("string" as any) && ((e as any).type = (ho as any)[(e as any).type]);
}
class Ve {
  declare resolve: any;
  declare _finished: any;
  [key: string]: any;
  constructor() {
    ((this as any).updateFinished as any)();
  }
  get finished(): any {
    return (this as any)._finished;
  }
  updateFinished(): any {
    (this as any)._finished = new (Promise as any)((t: any): any => {
      (this as any).resolve = t;
    });
  }
  notifyFinished(): any {
    ((this as any).resolve as any)();
  }
  then(t: any, s: any): any {
    return (((this as any).finished as any).then as any)(t, s);
  }
}
const fo: any = (e: any): any => (e as any) / (100 as any);
class Se extends (Ve as any) {
  declare driver: any;
  declare generator: any;
  declare totalDuration: any;
  declare resolvedDuration: any;
  declare calculatedDuration: any;
  declare mirroredGenerator: any;
  declare mixKeyframes: any;
  declare options: any;
  declare stop: any;
  declare playbackSpeed: any;
  declare holdTime: any;
  declare currentTime: any;
  declare isStopped: any;
  declare startTime: any;
  declare state: any;
  [key: string]: any;
  constructor(t: any) {
    super(), (this as any).state = "idle", (this as any).startTime = null, (this as any).isStopped = !1, (this as any).currentTime = 0, (this as any).holdTime = null, (this as any).playbackSpeed = 1, (this as any).stop = (): any => {
      const {
        motionValue: s
      }: any = (this as any).options;
      s && ((s as any).updatedAt as any) !== (((k as any).now as any)() as any) && ((this as any).tick as any)(((k as any).now as any)()), (this as any).isStopped = !0, ((this as any).state as any) !== ("idle" as any) && (((this as any).teardown as any)(), ((this as any).options as any).onStop?.());
    }, (this as any).options = t, ((this as any).initAnimation as any)(), ((this as any).play as any)(), ((t as any).autoplay as any) === (!1 as any) && ((this as any).pause as any)();
  }
  initAnimation(): any {
    const {
      options: t
    }: any = this;
    (pi as any)(t);
    const {
      type: s = ut,
      repeat: i = 0,
      repeatDelay: n = 0,
      repeatType: r,
      velocity: o = 0
    }: any = t;
    let {
      keyframes: a
    }: any = t;
    const l: any = s || ut;
    (l as any) !== (ut as any) && (typeof (a as any)[0] as any) != ("number" as any) && ((this as any).mixKeyframes = (mt as any)(fo, (hi as any)((a as any)[0], (a as any)[1])), a = [0, 100]);
    const c: any = (l as any)({
      ...t,
      keyframes: a
    });
    (r as any) === ("mirror" as any) && ((this as any).mirroredGenerator = (l as any)({
      ...t,
      keyframes: (([...a] as any).reverse as any)(),
      velocity: -o
    })), ((c as any).calculatedDuration as any) === (null as any) && ((c as any).calculatedDuration = (Pe as any)(c));
    const {
      calculatedDuration: u
    }: any = c;
    (this as any).calculatedDuration = u, (this as any).resolvedDuration = (u as any) + (n as any), (this as any).totalDuration = (((this as any).resolvedDuration as any) * ((i as any) + (1 as any) as any) as any) - (n as any), (this as any).generator = c;
  }
  updateTime(t: any): any {
    const s: any = (((Math as any).round as any)((t as any) - ((this as any).startTime as any)) as any) * ((this as any).playbackSpeed as any);
    ((this as any).holdTime as any) !== (null as any) ? (this as any).currentTime = (this as any).holdTime : (this as any).currentTime = s;
  }
  tick(t: any, s: any = !1): any {
    const {
      generator: i,
      totalDuration: n,
      mixKeyframes: r,
      mirroredGenerator: o,
      resolvedDuration: a,
      calculatedDuration: l
    }: any = this;
    if (((this as any).startTime as any) === (null as any)) return ((i as any).next as any)(0);
    const {
      delay: c = 0,
      keyframes: u,
      repeat: h,
      repeatType: f,
      repeatDelay: d,
      type: m,
      onUpdate: v,
      finalKeyframe: y
    }: any = (this as any).options;
    ((this as any).speed as any) > (0 as any) ? (this as any).startTime = ((Math as any).min as any)((this as any).startTime, t) : ((this as any).speed as any) < (0 as any) && ((this as any).startTime = ((Math as any).min as any)((t as any) - ((n as any) / ((this as any).speed as any) as any), (this as any).startTime)), s ? (this as any).currentTime = t : ((this as any).updateTime as any)(t);
    const p: any = ((this as any).currentTime as any) - ((c as any) * ((((this as any).playbackSpeed as any) >= (0 as any) ? 1 : -1) as any) as any),
      x: any = ((this as any).playbackSpeed as any) >= (0 as any) ? (p as any) < (0 as any) : (p as any) > (n as any);
    (this as any).currentTime = ((Math as any).max as any)(p, 0), ((this as any).state as any) === ("finished" as any) && ((this as any).holdTime as any) === (null as any) && ((this as any).currentTime = n);
    let g: any = (this as any).currentTime,
      A: any = i;
    if (h) {
      const P: any = (((Math as any).min as any)((this as any).currentTime, n) as any) / (a as any);
      let L: any = ((Math as any).floor as any)(P),
        B: any = (P as any) % (1 as any);
      !B && (P as any) >= (1 as any) && (B = 1), (B as any) === (1 as any) && L--, L = ((Math as any).min as any)(L, (h as any) + (1 as any)), (L as any) % (2 as any) && ((f as any) === ("reverse" as any) ? (B = (1 as any) - (B as any), d && (B -= (d as any) / (a as any))) : (f as any) === ("mirror" as any) && (A = o)), g = ((Q as any)(0, 1, B) as any) * (a as any);
    }
    const T: any = x ? {
      done: !1,
      value: (u as any)[0]
    } : ((A as any).next as any)(g);
    r && ((T as any).value = (r as any)((T as any).value));
    let {
      done: V
    }: any = T;
    !x && (l as any) !== (null as any) && (V = ((this as any).playbackSpeed as any) >= (0 as any) ? ((this as any).currentTime as any) >= (n as any) : ((this as any).currentTime as any) <= (0 as any));
    const w: any = ((this as any).holdTime as any) === (null as any) && (((this as any).state as any) === ("finished" as any) || ((this as any).state as any) === ("running" as any) && V);
    return w && (m as any) !== (Xt as any) && ((T as any).value = (Ae as any)(u, (this as any).options, y, (this as any).speed)), v && (v as any)((T as any).value), w && ((this as any).finish as any)(), T;
  }
  then(t: any, s: any): any {
    return (((this as any).finished as any).then as any)(t, s);
  }
  get duration(): any {
    return (O as any)((this as any).calculatedDuration);
  }
  get iterationDuration(): any {
    const {
      delay: t = 0
    }: any = (this as any).options || {};
    return ((this as any).duration as any) + ((O as any)(t) as any);
  }
  get time(): any {
    return (O as any)((this as any).currentTime);
  }
  set time(t: any) {
    t = (G as any)(t), (this as any).currentTime = t, ((this as any).startTime as any) === (null as any) || ((this as any).holdTime as any) !== (null as any) || ((this as any).playbackSpeed as any) === (0 as any) ? (this as any).holdTime = t : (this as any).driver && ((this as any).startTime = ((((this as any).driver as any).now as any)() as any) - ((t as any) / ((this as any).playbackSpeed as any) as any)), (this as any).driver?.start(!1);
  }
  get speed(): any {
    return (this as any).playbackSpeed;
  }
  set speed(t: any) {
    ((this as any).updateTime as any)(((k as any).now as any)());
    const s: any = ((this as any).playbackSpeed as any) !== (t as any);
    (this as any).playbackSpeed = t, s && ((this as any).time = (O as any)((this as any).currentTime));
  }
  play(): any {
    if ((this as any).isStopped) return;
    const {
      driver: t = Yn,
      startTime: s
    }: any = (this as any).options;
    (this as any).driver || ((this as any).driver = (t as any)((n: any): any => ((this as any).tick as any)(n))), ((this as any).options as any).onPlay?.();
    const i: any = (((this as any).driver as any).now as any)();
    ((this as any).state as any) === ("finished" as any) ? (((this as any).updateFinished as any)(), (this as any).startTime = i) : ((this as any).holdTime as any) !== (null as any) ? (this as any).startTime = (i as any) - ((this as any).holdTime as any) : (this as any).startTime || ((this as any).startTime = s ?? i), ((this as any).state as any) === ("finished" as any) && ((this as any).speed as any) < (0 as any) && ((this as any).startTime += (this as any).calculatedDuration), (this as any).holdTime = null, (this as any).state = "running", (((this as any).driver as any).start as any)();
  }
  pause(): any {
    (this as any).state = "paused", ((this as any).updateTime as any)(((k as any).now as any)()), (this as any).holdTime = (this as any).currentTime;
  }
  complete(): any {
    ((this as any).state as any) !== ("running" as any) && ((this as any).play as any)(), (this as any).state = "finished", (this as any).holdTime = null;
  }
  finish(): any {
    ((this as any).notifyFinished as any)(), ((this as any).teardown as any)(), (this as any).state = "finished", ((this as any).options as any).onComplete?.();
  }
  cancel(): any {
    (this as any).holdTime = null, (this as any).startTime = 0, ((this as any).tick as any)(0), ((this as any).teardown as any)(), ((this as any).options as any).onCancel?.();
  }
  teardown(): any {
    (this as any).state = "idle", ((this as any).stopDriver as any)(), (this as any).startTime = (this as any).holdTime = null;
  }
  stopDriver(): any {
    (this as any).driver && ((((this as any).driver as any).stop as any)(), (this as any).driver = void 0);
  }
  sample(t: any): any {
    return (this as any).startTime = 0, ((this as any).tick as any)(t, !0);
  }
  attachTimeline(t: any): any {
    return ((this as any).options as any).allowFlatten && (((this as any).options as any).type = "keyframes", ((this as any).options as any).ease = "linear", ((this as any).initAnimation as any)()), (this as any).driver?.stop(), ((t as any).observe as any)(this);
  }
}
function po(this: any, e: any): any {
  for (let t: any = 1; (t as any) < ((e as any).length as any); t++) (e as any)[t] ?? ((e as any)[t] = (e as any)[(t as any) - (1 as any)]);
}
const q: any = (e: any): any => ((e as any) * (180 as any) as any) / ((Math as any).PI as any),
  Yt: any = (e: any): any => {
    const t: any = (q as any)(((Math as any).atan2 as any)((e as any)[1], (e as any)[0]));
    return (qt as any)(t);
  },
  mo: any = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e: any): any => ((((Math as any).abs as any)((e as any)[0]) as any) + (((Math as any).abs as any)((e as any)[3]) as any) as any) / (2 as any),
    rotate: Yt,
    rotateZ: Yt,
    skewX: (e: any): any => (q as any)(((Math as any).atan as any)((e as any)[1])),
    skewY: (e: any): any => (q as any)(((Math as any).atan as any)((e as any)[2])),
    skew: (e: any): any => ((((Math as any).abs as any)((e as any)[1]) as any) + (((Math as any).abs as any)((e as any)[2]) as any) as any) / (2 as any)
  },
  qt: any = (e: any): any => (e = (e as any) % (360 as any), (e as any) < (0 as any) && (e += 360), e),
  Ne: any = Yt,
  Ke: any = (e: any): any => ((Math as any).sqrt as any)((((e as any)[0] as any) * ((e as any)[0] as any) as any) + (((e as any)[1] as any) * ((e as any)[1] as any) as any)),
  Ge: any = (e: any): any => ((Math as any).sqrt as any)((((e as any)[4] as any) * ((e as any)[4] as any) as any) + (((e as any)[5] as any) * ((e as any)[5] as any) as any)),
  go: any = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Ke,
    scaleY: Ge,
    scale: (e: any): any => (((Ke as any)(e) as any) + ((Ge as any)(e) as any) as any) / (2 as any),
    rotateX: (e: any): any => (qt as any)((q as any)(((Math as any).atan2 as any)((e as any)[6], (e as any)[5]))),
    rotateY: (e: any): any => (qt as any)((q as any)(((Math as any).atan2 as any)(-(e as any)[2], (e as any)[0]))),
    rotateZ: Ne,
    rotate: Ne,
    skewX: (e: any): any => (q as any)(((Math as any).atan as any)((e as any)[4])),
    skewY: (e: any): any => (q as any)(((Math as any).atan as any)((e as any)[1])),
    skew: (e: any): any => ((((Math as any).abs as any)((e as any)[1]) as any) + (((Math as any).abs as any)((e as any)[4]) as any) as any) / (2 as any)
  };
function Zt(this: any, e: any): any {
  return ((e as any).includes as any)("scale") ? 1 : 0;
}
function Jt(this: any, e: any, t: any): any {
  if (!e || (e as any) === ("none" as any)) return (Zt as any)(t);
  const s: any = ((e as any).match as any)(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let i: any, n: any;
  if (s) i = go, n = s;else {
    const a: any = ((e as any).match as any)(/^matrix\(([-\d.e\s,]+)\)$/u);
    i = mo, n = a;
  }
  if (!n) return (Zt as any)(t);
  const r: any = (i as any)[t],
    o: any = (((((n as any)[1] as any).split as any)(",") as any).map as any)(vo);
  return (typeof r as any) == ("function" as any) ? (r as any)(o) : (o as any)[r];
}
const yo: any = (e: any, t: any): any => {
  const {
    transform: s = "none"
  }: any = (getComputedStyle as any)(e);
  return (Jt as any)(s, t);
};
function vo(this: any, e: any): any {
  return (parseFloat as any)(((e as any).trim as any)());
}
const We: any = (e: any): any => (e as any) === (Gs as any) || (e as any) === (fe as any),
  To: any = new (Set as any)(["x", "y", "z"]),
  xo: any = ((Ws as any).filter as any)((e: any): any => !((To as any).has as any)(e));
function Po(this: any, e: any): any {
  const t: any = [];
  return ((xo as any).forEach as any)((s: any): any => {
    const i: any = ((e as any).getValue as any)(s);
    (i as any) !== (void 0 as any) && (((t as any).push as any)([s, ((i as any).get as any)()]), ((i as any).set as any)(((s as any).startsWith as any)("scale") ? 1 : 0));
  }), t;
}
const Z: any = {
  width: ({
    x: e
  }: any, {
    paddingLeft: t = "0",
    paddingRight: s = "0"
  }: any): any => ((((e as any).max as any) - ((e as any).min as any) as any) - ((parseFloat as any)(t) as any) as any) - ((parseFloat as any)(s) as any),
  height: ({
    y: e
  }: any, {
    paddingTop: t = "0",
    paddingBottom: s = "0"
  }: any): any => ((((e as any).max as any) - ((e as any).min as any) as any) - ((parseFloat as any)(t) as any) as any) - ((parseFloat as any)(s) as any),
  top: (e: any, {
    top: t
  }: any): any => (parseFloat as any)(t),
  left: (e: any, {
    left: t
  }: any): any => (parseFloat as any)(t),
  bottom: ({
    y: e
  }: any, {
    top: t
  }: any): any => ((parseFloat as any)(t) as any) + (((e as any).max as any) - ((e as any).min as any) as any),
  right: ({
    x: e
  }: any, {
    left: t
  }: any): any => ((parseFloat as any)(t) as any) + (((e as any).max as any) - ((e as any).min as any) as any),
  x: (e: any, {
    transform: t
  }: any): any => (Jt as any)(t, "x"),
  y: (e: any, {
    transform: t
  }: any): any => (Jt as any)(t, "y")
};
(Z as any).translateX = (Z as any).x;
(Z as any).translateY = (Z as any).y;
const J: any = new (Set as any)();
let Qt: any = !1,
  te: any = !1,
  ee: any = !1;
function mi(this: any): any {
  if (te) {
    const e: any = ((((Array as any).from as any)(J) as any).filter as any)((i: any): any => (i as any).needsMeasurement),
      t: any = new (Set as any)(((e as any).map as any)((i: any): any => (i as any).element)),
      s: any = new (Map as any)();
    ((t as any).forEach as any)((i: any): any => {
      const n: any = (Po as any)(i);
      (n as any).length && (((s as any).set as any)(i, n), ((i as any).render as any)());
    }), ((e as any).forEach as any)((i: any): any => ((i as any).measureInitialState as any)()), ((t as any).forEach as any)((i: any): any => {
      ((i as any).render as any)();
      const n: any = ((s as any).get as any)(i);
      n && ((n as any).forEach as any)(([r, o]: any): any => {
        ((i as any).getValue as any)(r)?.set(o);
      });
    }), ((e as any).forEach as any)((i: any): any => ((i as any).measureEndState as any)()), ((e as any).forEach as any)((i: any): any => {
      ((i as any).suspendedScrollY as any) !== (void 0 as any) && ((window as any).scrollTo as any)(0, (i as any).suspendedScrollY);
    });
  }
  te = !1, Qt = !1, ((J as any).forEach as any)((e: any): any => ((e as any).complete as any)(ee)), ((J as any).clear as any)();
}
function gi(this: any): any {
  ((J as any).forEach as any)((e: any): any => {
    ((e as any).readKeyframes as any)(), (e as any).needsMeasurement && (te = !0);
  });
}
function Ao(this: any): any {
  ee = !0, (gi as any)(), (mi as any)(), ee = !1;
}
class be {
  declare element: any;
  declare motionValue: any;
  declare name: any;
  declare onComplete: any;
  declare unresolvedKeyframes: any;
  declare needsMeasurement: any;
  declare isAsync: any;
  declare state: any;
  [key: string]: any;
  constructor(t: any, s: any, i: any, n: any, r: any, o: any = !1) {
    (this as any).state = "pending", (this as any).isAsync = !1, (this as any).needsMeasurement = !1, (this as any).unresolvedKeyframes = [...t], (this as any).onComplete = s, (this as any).name = i, (this as any).motionValue = n, (this as any).element = r, (this as any).isAsync = o;
  }
  scheduleResolve(): any {
    (this as any).state = "scheduled", (this as any).isAsync ? (((J as any).add as any)(this), Qt || (Qt = !0, ((S as any).read as any)(gi), ((S as any).resolveKeyframes as any)(mi))) : (((this as any).readKeyframes as any)(), ((this as any).complete as any)());
  }
  readKeyframes(): any {
    const {
      unresolvedKeyframes: t,
      name: s,
      element: i,
      motionValue: n
    }: any = this;
    if (((t as any)[0] as any) === (null as any)) {
      const r: any = n?.get(),
        o: any = (t as any)[((t as any).length as any) - (1 as any)];
      if ((r as any) !== (void 0 as any)) (t as any)[0] = r;else if (i && s) {
        const a: any = ((i as any).readValue as any)(s, o);
        (a as any) != (null as any) && ((t as any)[0] = a);
      }
      ((t as any)[0] as any) === (void 0 as any) && ((t as any)[0] = o), n && (r as any) === (void 0 as any) && ((n as any).set as any)((t as any)[0]);
    }
    (po as any)(t);
  }
  setFinalKeyframe(): any {}
  measureInitialState(): any {}
  renderEndStyles(): any {}
  measureEndState(): any {}
  complete(t: any = !1): any {
    (this as any).state = "complete", ((this as any).onComplete as any)((this as any).unresolvedKeyframes, (this as any).finalKeyframe, t), ((J as any).delete as any)(this);
  }
  cancel(): any {
    ((this as any).state as any) === ("scheduled" as any) && (((J as any).delete as any)(this), (this as any).state = "pending");
  }
  resume(): any {
    ((this as any).state as any) === ("pending" as any) && ((this as any).scheduleResolve as any)();
  }
}
const Vo: any = (e: any): any => ((e as any).startsWith as any)("--");
function So(this: any, e: any, t: any, s: any): any {
  (Vo as any)(t) ? (((e as any).style as any).setProperty as any)(t, s) : ((e as any).style as any)[t] = s;
}
const bo: any = (ge as any)((): any => ((window as any).ScrollTimeline as any) !== (void 0 as any)),
  Do: any = {};
function wo(this: any, e: any, t: any): any {
  const s: any = (ge as any)(e);
  return (): any => (Do as any)[t] ?? (s as any)();
}
const yi: any = (wo as any)((): any => {
    try {
      ((((document as any).createElement as any)("div") as any).animate as any)({
        opacity: 0
      }, {
        easing: "linear(0, 1)"
      });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  lt: any = ([e, t, s, i]: any): any => `cubic-bezier(${e}, ${t}, ${s}, ${i})`,
  _e: any = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: (lt as any)([0, .65, .55, 1]),
    circOut: (lt as any)([.55, 0, 1, .45]),
    backIn: (lt as any)([.31, .01, .66, -.59]),
    backOut: (lt as any)([.33, 1.53, .69, .99])
  };
function vi(this: any, e: any, t: any): any {
  if (e) return (typeof e as any) == ("function" as any) ? (yi as any)() ? (fi as any)(e, t) : "ease-out" : (li as any)(e) ? (lt as any)(e) : ((Array as any).isArray as any)(e) ? ((e as any).map as any)((s: any): any => (vi as any)(s, t) || (_e as any).easeOut) : (_e as any)[e];
}
function Co(this: any, e: any, t: any, s: any, {
  delay: i = 0,
  duration: n = 300,
  repeat: r = 0,
  repeatType: o = "loop",
  ease: a = "easeOut",
  times: l
}: any = {}, c: any = void 0): any {
  const u: any = {
    [t]: s
  };
  l && ((u as any).offset = l);
  const h: any = (vi as any)(a, n);
  ((Array as any).isArray as any)(h) && ((u as any).easing = h);
  const f: any = {
    delay: i,
    duration: n,
    easing: ((Array as any).isArray as any)(h) ? "linear" : h,
    fill: "both",
    iterations: (r as any) + (1 as any),
    direction: (o as any) === ("reverse" as any) ? "alternate" : "normal"
  };
  return c && ((f as any).pseudoElement = c), ((e as any).animate as any)(u, f);
}
function Ti(this: any, e: any): any {
  return (typeof e as any) == ("function" as any) && "applyToOptions" in e;
}
function Mo(this: any, {
  type: e,
  ...t
}: any): any {
  return (Ti as any)(e) && (yi as any)() ? ((e as any).applyToOptions as any)(t) : ((t as any).duration ?? ((t as any).duration = 300), (t as any).ease ?? ((t as any).ease = "easeOut"), t);
}
class Eo extends (Ve as any) {
  declare animation: any;
  declare options: any;
  declare allowFlatten: any;
  declare isPseudoElement: any;
  declare isStopped: any;
  declare finishedTime: any;
  [key: string]: any;
  constructor(t: any) {
    if (super(), (this as any).finishedTime = null, (this as any).isStopped = !1, !t) return;
    const {
      element: s,
      name: i,
      keyframes: n,
      pseudoElement: r,
      allowFlatten: o = !1,
      finalKeyframe: a,
      onComplete: l
    }: any = t;
    (this as any).isPseudoElement = !!r, (this as any).allowFlatten = o, (this as any).options = t, (me as any)((typeof (t as any).type as any) != ("string" as any));
    const c: any = (Mo as any)(t);
    (this as any).animation = (Co as any)(s, i, n, c, r), ((c as any).autoplay as any) === (!1 as any) && (((this as any).animation as any).pause as any)(), ((this as any).animation as any).onfinish = (): any => {
      if ((this as any).finishedTime = (this as any).time, !r) {
        const u: any = (Ae as any)(n, (this as any).options, a, (this as any).speed);
        (this as any).updateMotionValue ? ((this as any).updateMotionValue as any)(u) : (So as any)(s, i, u), (((this as any).animation as any).cancel as any)();
      }
      l?.(), ((this as any).notifyFinished as any)();
    };
  }
  play(): any {
    (this as any).isStopped || ((((this as any).animation as any).play as any)(), ((this as any).state as any) === ("finished" as any) && ((this as any).updateFinished as any)());
  }
  pause(): any {
    (((this as any).animation as any).pause as any)();
  }
  complete(): any {
    ((this as any).animation as any).finish?.();
  }
  cancel(): any {
    try {
      (((this as any).animation as any).cancel as any)();
    } catch {}
  }
  stop(): any {
    if ((this as any).isStopped) return;
    (this as any).isStopped = !0;
    const {
      state: t
    }: any = this;
    (t as any) === ("idle" as any) || (t as any) === ("finished" as any) || ((this as any).updateMotionValue ? ((this as any).updateMotionValue as any)() : ((this as any).commitStyles as any)(), (this as any).isPseudoElement || ((this as any).cancel as any)());
  }
  commitStyles(): any {
    (this as any).isPseudoElement || ((this as any).animation as any).commitStyles?.();
  }
  get duration(): any {
    const t: any = ((this as any).animation as any).effect?.getComputedTiming?.().duration || 0;
    return (O as any)((Number as any)(t));
  }
  get iterationDuration(): any {
    const {
      delay: t = 0
    }: any = (this as any).options || {};
    return ((this as any).duration as any) + ((O as any)(t) as any);
  }
  get time(): any {
    return (O as any)((Number as any)(((this as any).animation as any).currentTime) || 0);
  }
  set time(t: any) {
    (this as any).finishedTime = null, ((this as any).animation as any).currentTime = (G as any)(t);
  }
  get speed(): any {
    return ((this as any).animation as any).playbackRate;
  }
  set speed(t: any) {
    (t as any) < (0 as any) && ((this as any).finishedTime = null), ((this as any).animation as any).playbackRate = t;
  }
  get state(): any {
    return ((this as any).finishedTime as any) !== (null as any) ? "finished" : ((this as any).animation as any).playState;
  }
  get startTime(): any {
    return (Number as any)(((this as any).animation as any).startTime);
  }
  set startTime(t: any) {
    ((this as any).animation as any).startTime = t;
  }
  attachTimeline({
    timeline: t,
    observe: s
  }: any): any {
    return (this as any).allowFlatten && ((this as any).animation as any).effect?.updateTiming({
      easing: "linear"
    }), ((this as any).animation as any).onfinish = null, t && (bo as any)() ? (((this as any).animation as any).timeline = t, U) : (s as any)(this);
  }
}
const xi: any = {
  anticipate: ni,
  backInOut: ii,
  circInOut: ri
};
function Ro(this: any, e: any): any {
  return e in xi;
}
function Lo(this: any, e: any): any {
  (typeof (e as any).ease as any) == ("string" as any) && (Ro as any)((e as any).ease) && ((e as any).ease = (xi as any)[(e as any).ease]);
}
const $e: number = 10;
class ko extends (Eo as any) {
  declare options: any;
  declare startTime: any;
  [key: string]: any;
  constructor(t: any) {
    (Lo as any)(t), (pi as any)(t), super(t), (t as any).startTime && ((this as any).startTime = (t as any).startTime), (this as any).options = t;
  }
  updateMotionValue(t: any): any {
    const {
      motionValue: s,
      onUpdate: i,
      onComplete: n,
      element: r,
      ...o
    }: any = (this as any).options;
    if (!s) return;
    if ((t as any) !== (void 0 as any)) {
      ((s as any).set as any)(t);
      return;
    }
    const a: any = new (Se as any)({
        ...o,
        autoplay: !1
      }),
      l: any = (G as any)((this as any).finishedTime ?? (this as any).time);
    ((s as any).setWithVelocity as any)((((a as any).sample as any)((l as any) - ($e as any)) as any).value, (((a as any).sample as any)(l) as any).value, $e), ((a as any).stop as any)();
  }
}
const ze: any = (e: any, t: any): any => (t as any) === ("zIndex" as any) ? !1 : !!((typeof e as any) == ("number" as any) || ((Array as any).isArray as any)(e) || (typeof e as any) == ("string" as any) && (((at as any).test as any)(e) || (e as any) === ("0" as any)) && !((e as any).startsWith as any)("url("));
function Fo(this: any, e: any): any {
  const t: any = (e as any)[0];
  if (((e as any).length as any) === (1 as any)) return !0;
  for (let s: any = 0; (s as any) < ((e as any).length as any); s++) if (((e as any)[s] as any) !== (t as any)) return !0;
}
function Bo(this: any, e: any, t: any, s: any, i: any): any {
  const n: any = (e as any)[0];
  if ((n as any) === (null as any)) return !1;
  if ((t as any) === ("display" as any) || (t as any) === ("visibility" as any)) return !0;
  const r: any = (e as any)[((e as any).length as any) - (1 as any)],
    o: any = (ze as any)(n, t),
    a: any = (ze as any)(r, t);
  return !o || !a ? !1 : (Fo as any)(e) || ((s as any) === ("spring" as any) || (Ti as any)(s)) && i;
}
function se(this: any, e: any): any {
  (e as any).duration = 0, (e as any).type = "keyframes";
}
const Io: any = new (Set as any)(["opacity", "clipPath", "filter", "transform"]),
  jo: any = (ge as any)((): any => (((Object as any).hasOwnProperty as any).call as any)((Element as any).prototype, "animate"));
function Oo(this: any, e: any): any {
  const {
    motionValue: t,
    name: s,
    repeatDelay: i,
    repeatType: n,
    damping: r,
    type: o
  }: any = e;
  if (!(t?.owner?.current instanceof HTMLElement)) return !1;
  const {
    onUpdate: l,
    transformTemplate: c
  }: any = (((t as any).owner as any).getProps as any)();
  return (jo as any)() && s && ((Io as any).has as any)(s) && ((s as any) !== ("transform" as any) || !c) && !l && !i && (n as any) !== ("mirror" as any) && (r as any) !== (0 as any) && (o as any) !== ("inertia" as any);
}
const Uo: number = 40;
class No extends (Ve as any) {
  declare _animation: any;
  declare pendingTimeline: any;
  declare stopTimeline: any;
  declare resolvedAt: any;
  declare keyframeResolver: any;
  declare createdAt: any;
  declare stop: any;
  [key: string]: any;
  constructor({
    autoplay: t = !0,
    delay: s = 0,
    type: i = "keyframes",
    repeat: n = 0,
    repeatDelay: r = 0,
    repeatType: o = "loop",
    keyframes: a,
    name: l,
    motionValue: c,
    element: u,
    ...h
  }: any) {
    super(), (this as any).stop = (): any => {
      (this as any)._animation && ((((this as any)._animation as any).stop as any)(), (this as any).stopTimeline?.()), (this as any).keyframeResolver?.cancel();
    }, (this as any).createdAt = ((k as any).now as any)();
    const f: any = {
        autoplay: t,
        delay: s,
        type: i,
        repeat: n,
        repeatDelay: r,
        repeatType: o,
        name: l,
        motionValue: c,
        element: u,
        ...h
      },
      d: any = u?.KeyframeResolver || be;
    (this as any).keyframeResolver = new (d as any)(a, (m: any, v: any, y: any): any => ((this as any).onKeyframesResolved as any)(m, v, f, !y), l, c, u), (this as any).keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(t: any, s: any, i: any, n: any): any {
    (this as any).keyframeResolver = void 0;
    const {
      name: r,
      type: o,
      velocity: a,
      delay: l,
      isHandoff: c,
      onUpdate: u
    }: any = i;
    (this as any).resolvedAt = ((k as any).now as any)(), (Bo as any)(t, r, o, a) || (((_ as any).instantAnimations || !l) && u?.((Ae as any)(t, i, s)), (t as any)[0] = (t as any)[((t as any).length as any) - (1 as any)], (se as any)(i), (i as any).repeat = 0);
    const f: any = {
        startTime: n ? (this as any).resolvedAt ? (((this as any).resolvedAt as any) - ((this as any).createdAt as any) as any) > (Uo as any) ? (this as any).resolvedAt : (this as any).createdAt : (this as any).createdAt : void 0,
        finalKeyframe: s,
        ...i,
        keyframes: t
      },
      d: any = !c && (Oo as any)(f) ? new (ko as any)({
        ...f,
        element: (((f as any).motionValue as any).owner as any).current
      }) : new (Se as any)(f);
    (((((d as any).finished as any).then as any)((): any => ((this as any).notifyFinished as any)()) as any).catch as any)(U), (this as any).pendingTimeline && ((this as any).stopTimeline = ((d as any).attachTimeline as any)((this as any).pendingTimeline), (this as any).pendingTimeline = void 0), (this as any)._animation = d;
  }
  get finished(): any {
    return (this as any)._animation ? ((this as any).animation as any).finished : (this as any)._finished;
  }
  then(t: any, s: any): any {
    return (((((this as any).finished as any).finally as any)(t) as any).then as any)((): any => {});
  }
  get animation(): any {
    return (this as any)._animation || ((this as any).keyframeResolver?.resume(), (Ao as any)()), (this as any)._animation;
  }
  get duration(): any {
    return ((this as any).animation as any).duration;
  }
  get iterationDuration(): any {
    return ((this as any).animation as any).iterationDuration;
  }
  get time(): any {
    return ((this as any).animation as any).time;
  }
  set time(t: any) {
    ((this as any).animation as any).time = t;
  }
  get speed(): any {
    return ((this as any).animation as any).speed;
  }
  get state(): any {
    return ((this as any).animation as any).state;
  }
  set speed(t: any) {
    ((this as any).animation as any).speed = t;
  }
  get startTime(): any {
    return ((this as any).animation as any).startTime;
  }
  attachTimeline(t: any): any {
    return (this as any)._animation ? (this as any).stopTimeline = (((this as any).animation as any).attachTimeline as any)(t) : (this as any).pendingTimeline = t, (): any => ((this as any).stop as any)();
  }
  play(): any {
    (((this as any).animation as any).play as any)();
  }
  pause(): any {
    (((this as any).animation as any).pause as any)();
  }
  complete(): any {
    (((this as any).animation as any).complete as any)();
  }
  cancel(): any {
    (this as any)._animation && (((this as any).animation as any).cancel as any)(), (this as any).keyframeResolver?.cancel();
  }
}
const Ko: any = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Go(this: any, e: any): any {
  const t: any = ((Ko as any).exec as any)(e);
  if (!t) return [,];
  const [, s, i, n]: any = t;
  return [`--${s ?? i}`, n];
}
function Pi(this: any, e: any, t: any, s: any = 1): any {
  const [i, n]: any = (Go as any)(e);
  if (!i) return;
  const r: any = ((((window as any).getComputedStyle as any)(t) as any).getPropertyValue as any)(i);
  if (r) {
    const o: any = ((r as any).trim as any)();
    return (qs as any)(o) ? (parseFloat as any)(o) : o;
  }
  return (he as any)(n) ? (Pi as any)(n, t, (s as any) + (1 as any)) : n;
}
function De(this: any, e: any, t: any): any {
  return e?.[t] ?? e?.default ?? e;
}
const Ai: any = new (Set as any)(["width", "height", "top", "left", "right", "bottom", ...Ws]),
  Wo: any = {
    test: (e: any): any => (e as any) === ("auto" as any),
    parse: (e: any): any => e
  },
  Vi: any = (e: any): any => (t: any): any => ((t as any).test as any)(e),
  Si: any = [Gs, fe, ft, fn, dn, pn, Wo],
  He: any = (e: any): any => ((Si as any).find as any)((Vi as any)(e));
function _o(this: any, e: any): any {
  return (typeof e as any) == ("number" as any) ? (e as any) === (0 as any) : (e as any) !== (null as any) ? (e as any) === ("none" as any) || (e as any) === ("0" as any) || (Zs as any)(e) : !0;
}
const $o: any = new (Set as any)(["brightness", "contrast", "saturate", "opacity"]);
function zo(this: any, e: any): any {
  const [t, s]: any = ((((e as any).slice as any)(0, -1) as any).split as any)("(");
  if ((t as any) === ("drop-shadow" as any)) return e;
  const [i]: any = ((s as any).match as any)(mn) || [];
  if (!i) return e;
  const n: any = ((s as any).replace as any)(i, "");
  let r: any = (($o as any).has as any)(t) ? 1 : 0;
  return (i as any) !== (s as any) && (r *= 100), ((((t as any) + ("(" as any) as any) + (r as any) as any) + (n as any) as any) + (")" as any);
}
const Ho: any = /\b([a-z-]*)\(.*?\)/gu,
  ie: any = {
    ...at,
    getAnimatableNone: (e: any): any => {
      const t: any = ((e as any).match as any)(Ho);
      return t ? ((((t as any).map as any)(zo) as any).join as any)(" ") : e;
    }
  },
  Xo: any = {
    ...rn,
    color: F,
    backgroundColor: F,
    outlineColor: F,
    fill: F,
    stroke: F,
    borderColor: F,
    borderTopColor: F,
    borderRightColor: F,
    borderBottomColor: F,
    borderLeftColor: F,
    filter: ie,
    WebkitFilter: ie
  },
  bi: any = (e: any): any => (Xo as any)[e];
function Di(this: any, e: any, t: any): any {
  let s: any = (bi as any)(e);
  return (s as any) !== (ie as any) && (s = at), (s as any).getAnimatableNone ? ((s as any).getAnimatableNone as any)(t) : void 0;
}
const Yo: any = new (Set as any)(["auto", "none", "0"]);
function qo(this: any, e: any, t: any, s: any): any {
  let i: any = 0,
    n: any;
  for (; (i as any) < ((e as any).length as any) && !n;) {
    const r: any = (e as any)[i];
    (typeof r as any) == ("string" as any) && !((Yo as any).has as any)(r) && ((($t as any)(r) as any).values as any).length && (n = (e as any)[i]), i++;
  }
  if (n && s) for (const r of t) (e as any)[r] = (Di as any)(s, n);
}
class Zo extends (be as any) {
  declare measuredOrigin: any;
  declare suspendedScrollY: any;
  declare needsMeasurement: any;
  declare finalKeyframe: any;
  [key: string]: any;
  constructor(t: any, s: any, i: any, n: any, r: any) {
    super(t, s, i, n, r, !0);
  }
  readKeyframes(): any {
    const {
      unresolvedKeyframes: t,
      element: s,
      name: i
    }: any = this;
    if (!s || !(s as any).current) return;
    (super.readKeyframes as any)();
    for (let l: any = 0; (l as any) < ((t as any).length as any); l++) {
      let c: any = (t as any)[l];
      if ((typeof c as any) == ("string" as any) && (c = ((c as any).trim as any)(), (he as any)(c))) {
        const u: any = (Pi as any)(c, (s as any).current);
        (u as any) !== (void 0 as any) && ((t as any)[l] = u), (l as any) === (((t as any).length as any) - (1 as any) as any) && ((this as any).finalKeyframe = c);
      }
    }
    if (((this as any).resolveNoneKeyframes as any)(), !((Ai as any).has as any)(i) || ((t as any).length as any) !== (2 as any)) return;
    const [n, r]: any = t,
      o: any = (He as any)(n),
      a: any = (He as any)(r);
    if ((o as any) !== (a as any)) if ((We as any)(o) && (We as any)(a)) for (let l: any = 0; (l as any) < ((t as any).length as any); l++) {
      const c: any = (t as any)[l];
      (typeof c as any) == ("string" as any) && ((t as any)[l] = (parseFloat as any)(c));
    } else (Z as any)[i] && ((this as any).needsMeasurement = !0);
  }
  resolveNoneKeyframes(): any {
    const {
        unresolvedKeyframes: t,
        name: s
      }: any = this,
      i: any = [];
    for (let n: any = 0; (n as any) < ((t as any).length as any); n++) (((t as any)[n] as any) === (null as any) || (_o as any)((t as any)[n])) && ((i as any).push as any)(n);
    (i as any).length && (qo as any)(t, i, s);
  }
  measureInitialState(): any {
    const {
      element: t,
      unresolvedKeyframes: s,
      name: i
    }: any = this;
    if (!t || !(t as any).current) return;
    (i as any) === ("height" as any) && ((this as any).suspendedScrollY = (window as any).pageYOffset), (this as any).measuredOrigin = ((Z as any)[i] as any)(((t as any).measureViewportBox as any)(), ((window as any).getComputedStyle as any)((t as any).current)), (s as any)[0] = (this as any).measuredOrigin;
    const n: any = (s as any)[((s as any).length as any) - (1 as any)];
    (n as any) !== (void 0 as any) && ((((t as any).getValue as any)(i, n) as any).jump as any)(n, !1);
  }
  measureEndState(): any {
    const {
      element: t,
      name: s,
      unresolvedKeyframes: i
    }: any = this;
    if (!t || !(t as any).current) return;
    const n: any = ((t as any).getValue as any)(s);
    n && ((n as any).jump as any)((this as any).measuredOrigin, !1);
    const r: any = ((i as any).length as any) - (1 as any),
      o: any = (i as any)[r];
    (i as any)[r] = ((Z as any)[s] as any)(((t as any).measureViewportBox as any)(), ((window as any).getComputedStyle as any)((t as any).current)), (o as any) !== (null as any) && ((this as any).finalKeyframe as any) === (void 0 as any) && ((this as any).finalKeyframe = o), (this as any).removedTransforms?.length && (((this as any).removedTransforms as any).forEach as any)(([a, l]: any): any => {
      ((((t as any).getValue as any)(a) as any).set as any)(l);
    }), ((this as any).resolveNoneKeyframes as any)();
  }
}
function Jo(this: any, e: any, t: any, s: any): any {
  if (e instanceof EventTarget) return [e];
  if ((typeof e as any) == ("string" as any)) {
    let i: any = document;
    const n: any = s?.[e] ?? ((i as any).querySelectorAll as any)(e);
    return n ? ((Array as any).from as any)(n) : [];
  }
  return ((Array as any).from as any)(e);
}
const Xe: number = 30,
  Qo: any = (e: any): any => !(isNaN as any)((parseFloat as any)(e));
class tr {
  declare animation: any;
  declare dependents: any;
  declare stopPassiveEffect: any;
  declare passiveEffect: any;
  declare prevUpdatedAt: any;
  declare prevFrameValue: any;
  declare updatedAt: any;
  declare current: any;
  declare owner: any;
  declare hasAnimated: any;
  declare prev: any;
  declare updateAndNotify: any;
  declare events: any;
  declare canTrackVelocity: any;
  [key: string]: any;
  constructor(t: any, s: any = {}) {
    (this as any).canTrackVelocity = null, (this as any).events = {}, (this as any).updateAndNotify = (i: any): any => {
      const n: any = ((k as any).now as any)();
      if (((this as any).updatedAt as any) !== (n as any) && ((this as any).setPrevFrameValue as any)(), (this as any).prev = (this as any).current, ((this as any).setCurrent as any)(i), ((this as any).current as any) !== ((this as any).prev as any) && (((this as any).events as any).change?.notify((this as any).current), (this as any).dependents)) for (const r of (this as any).dependents) ((r as any).dirty as any)();
    }, (this as any).hasAnimated = !1, ((this as any).setCurrent as any)(t), (this as any).owner = (s as any).owner;
  }
  setCurrent(t: any): any {
    (this as any).current = t, (this as any).updatedAt = ((k as any).now as any)(), ((this as any).canTrackVelocity as any) === (null as any) && (t as any) !== (void 0 as any) && ((this as any).canTrackVelocity = (Qo as any)((this as any).current));
  }
  setPrevFrameValue(t: any = (this as any).current): any {
    (this as any).prevFrameValue = t, (this as any).prevUpdatedAt = (this as any).updatedAt;
  }
  onChange(t: any): any {
    return ((this as any).on as any)("change", t);
  }
  on(t: any, s: any): any {
    ((this as any).events as any)[t] || (((this as any).events as any)[t] = new (ye as any)());
    const i: any = ((((this as any).events as any)[t] as any).add as any)(s);
    return (t as any) === ("change" as any) ? (): any => {
      (i as any)(), ((S as any).read as any)((): any => {
        ((((this as any).events as any).change as any).getSize as any)() || ((this as any).stop as any)();
      });
    } : i;
  }
  clearListeners(): any {
    for (const t in (this as any).events) ((((this as any).events as any)[t] as any).clear as any)();
  }
  attach(t: any, s: any): any {
    (this as any).passiveEffect = t, (this as any).stopPassiveEffect = s;
  }
  set(t: any): any {
    (this as any).passiveEffect ? ((this as any).passiveEffect as any)(t, (this as any).updateAndNotify) : ((this as any).updateAndNotify as any)(t);
  }
  setWithVelocity(t: any, s: any, i: any): any {
    ((this as any).set as any)(s), (this as any).prev = void 0, (this as any).prevFrameValue = t, (this as any).prevUpdatedAt = ((this as any).updatedAt as any) - (i as any);
  }
  jump(t: any, s: any = !0): any {
    ((this as any).updateAndNotify as any)(t), (this as any).prev = t, (this as any).prevUpdatedAt = (this as any).prevFrameValue = void 0, s && ((this as any).stop as any)(), (this as any).stopPassiveEffect && ((this as any).stopPassiveEffect as any)();
  }
  dirty(): any {
    ((this as any).events as any).change?.notify((this as any).current);
  }
  addDependent(t: any): any {
    (this as any).dependents || ((this as any).dependents = new (Set as any)()), (((this as any).dependents as any).add as any)(t);
  }
  removeDependent(t: any): any {
    (this as any).dependents && (((this as any).dependents as any).delete as any)(t);
  }
  get(): any {
    return (this as any).current;
  }
  getPrevious(): any {
    return (this as any).prev;
  }
  getVelocity(): any {
    const t: any = ((k as any).now as any)();
    if (!(this as any).canTrackVelocity || ((this as any).prevFrameValue as any) === (void 0 as any) || ((t as any) - ((this as any).updatedAt as any) as any) > (Xe as any)) return 0;
    const s: any = ((Math as any).min as any)(((this as any).updatedAt as any) - ((this as any).prevUpdatedAt as any), Xe);
    return (Js as any)(((parseFloat as any)((this as any).current) as any) - ((parseFloat as any)((this as any).prevFrameValue) as any), s);
  }
  start(t: any): any {
    return ((this as any).stop as any)(), ((new (Promise as any)((s: any): any => {
      (this as any).hasAnimated = !0, (this as any).animation = (t as any)(s), ((this as any).events as any).animationStart && ((((this as any).events as any).animationStart as any).notify as any)();
    }) as any).then as any)((): any => {
      ((this as any).events as any).animationComplete && ((((this as any).events as any).animationComplete as any).notify as any)(), ((this as any).clearAnimation as any)();
    });
  }
  stop(): any {
    (this as any).animation && ((((this as any).animation as any).stop as any)(), ((this as any).events as any).animationCancel && ((((this as any).events as any).animationCancel as any).notify as any)()), ((this as any).clearAnimation as any)();
  }
  isAnimating(): any {
    return !!(this as any).animation;
  }
  clearAnimation(): any {
    delete (this as any).animation;
  }
  destroy(): any {
    (this as any).dependents?.clear(), ((this as any).events as any).destroy?.notify(), ((this as any).clearListeners as any)(), ((this as any).stop as any)(), (this as any).stopPassiveEffect && ((this as any).stopPassiveEffect as any)();
  }
}
function rt(this: any, e: any, t: any): any {
  return new (tr as any)(e, t);
}
const {
    schedule: we
  }: any = (ui as any)(queueMicrotask, !1),
  K: any = {
    x: !1,
    y: !1
  };
function wi(this: any): any {
  return (K as any).x || (K as any).y;
}
function er(this: any, e: any): any {
  return (e as any) === ("x" as any) || (e as any) === ("y" as any) ? (K as any)[e] ? null : ((K as any)[e] = !0, (): any => {
    (K as any)[e] = !1;
  }) : (K as any).x || (K as any).y ? null : ((K as any).x = (K as any).y = !0, (): any => {
    (K as any).x = (K as any).y = !1;
  });
}
function Ci(this: any, e: any, t: any): any {
  const s: any = (Jo as any)(e),
    i: any = new (AbortController as any)(),
    n: any = {
      passive: !0,
      ...t,
      signal: (i as any).signal
    };
  return [s, n, (): any => ((i as any).abort as any)()];
}
function Ye(this: any, e: any): any {
  return !(((e as any).pointerType as any) === ("touch" as any) || (wi as any)());
}
function sr(this: any, e: any, t: any, s: any = {}): any {
  const [i, n, r]: any = (Ci as any)(e, s),
    o: any = (a: any): any => {
      if (!(Ye as any)(a)) return;
      const {
          target: l
        }: any = a,
        c: any = (t as any)(l, a);
      if ((typeof c as any) != ("function" as any) || !l) return;
      const u: any = (h: any): any => {
        (Ye as any)(h) && ((c as any)(h), ((l as any).removeEventListener as any)("pointerleave", u));
      };
      ((l as any).addEventListener as any)("pointerleave", u, n);
    };
  return ((i as any).forEach as any)((a: any): any => {
    ((a as any).addEventListener as any)("pointerenter", o, n);
  }), r;
}
const Mi: any = (e: any, t: any): any => t ? (e as any) === (t as any) ? !0 : (Mi as any)(e, (t as any).parentElement) : !1,
  Ce: any = (e: any): any => ((e as any).pointerType as any) === ("mouse" as any) ? (typeof (e as any).button as any) != ("number" as any) || ((e as any).button as any) <= (0 as any) : ((e as any).isPrimary as any) !== (!1 as any),
  ir: any = new (Set as any)(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function nr(this: any, e: any): any {
  return ((ir as any).has as any)((e as any).tagName) || ((e as any).tabIndex as any) !== (-1 as any);
}
const At: any = new (WeakSet as any)();
function qe(this: any, e: any): any {
  return (t: any): any => {
    ((t as any).key as any) === ("Enter" as any) && (e as any)(t);
  };
}
function It(this: any, e: any, t: any): any {
  ((e as any).dispatchEvent as any)(new (PointerEvent as any)(("pointer" as any) + (t as any), {
    isPrimary: !0,
    bubbles: !0
  }));
}
const or: any = (e: any, t: any): any => {
  const s: any = (e as any).currentTarget;
  if (!s) return;
  const i: any = (qe as any)((): any => {
    if (((At as any).has as any)(s)) return;
    (It as any)(s, "down");
    const n: any = (qe as any)((): any => {
        (It as any)(s, "up");
      }),
      r: any = (): any => (It as any)(s, "cancel");
    ((s as any).addEventListener as any)("keyup", n, t), ((s as any).addEventListener as any)("blur", r, t);
  });
  ((s as any).addEventListener as any)("keydown", i, t), ((s as any).addEventListener as any)("blur", (): any => ((s as any).removeEventListener as any)("keydown", i), t);
};
function Ze(this: any, e: any): any {
  return (Ce as any)(e) && !(wi as any)();
}
function rr(this: any, e: any, t: any, s: any = {}): any {
  const [i, n, r]: any = (Ci as any)(e, s),
    o: any = (a: any): any => {
      const l: any = (a as any).currentTarget;
      if (!(Ze as any)(a)) return;
      ((At as any).add as any)(l);
      const c: any = (t as any)(l, a),
        u: any = (d: any, m: any): any => {
          ((window as any).removeEventListener as any)("pointerup", h), ((window as any).removeEventListener as any)("pointercancel", f), ((At as any).has as any)(l) && ((At as any).delete as any)(l), (Ze as any)(d) && (typeof c as any) == ("function" as any) && (c as any)(d, {
            success: m
          });
        },
        h: any = (d: any): any => {
          (u as any)(d, (l as any) === (window as any) || (l as any) === (document as any) || (s as any).useGlobalTarget || (Mi as any)(l, (d as any).target));
        },
        f: any = (d: any): any => {
          (u as any)(d, !1);
        };
      ((window as any).addEventListener as any)("pointerup", h, n), ((window as any).addEventListener as any)("pointercancel", f, n);
    };
  return ((i as any).forEach as any)((a: any): any => {
    ((((s as any).useGlobalTarget ? window : a) as any).addEventListener as any)("pointerdown", o, n), (an as any)(a) && (((a as any).addEventListener as any)("focus", (c: any): any => (or as any)(c, n)), !(nr as any)(a) && !((a as any).hasAttribute as any)("tabindex") && ((a as any).tabIndex = 0));
  }), r;
}
function Ei(this: any, e: any): any {
  return (gn as any)(e) && "ownerSVGElement" in e;
}
function ar(this: any, e: any): any {
  return (Ei as any)(e) && ((e as any).tagName as any) === ("svg" as any);
}
const lr: any = [...Si, F, at],
  ur: any = (e: any): any => ((lr as any).find as any)((Vi as any)(e));
function Ri(this: any, {
  top: e,
  left: t,
  right: s,
  bottom: i
}: any): any {
  return {
    x: {
      min: t,
      max: s
    },
    y: {
      min: e,
      max: i
    }
  };
}
function cr(this: any, {
  x: e,
  y: t
}: any): any {
  return {
    top: (t as any).min,
    right: (e as any).max,
    bottom: (t as any).max,
    left: (e as any).min
  };
}
function hr(this: any, e: any, t: any): any {
  if (!t) return e;
  const s: any = (t as any)({
      x: (e as any).left,
      y: (e as any).top
    }),
    i: any = (t as any)({
      x: (e as any).right,
      y: (e as any).bottom
    });
  return {
    top: (s as any).y,
    left: (s as any).x,
    bottom: (i as any).y,
    right: (i as any).x
  };
}
function jt(this: any, e: any): any {
  return (e as any) === (void 0 as any) || (e as any) === (1 as any);
}
function ne(this: any, {
  scale: e,
  scaleX: t,
  scaleY: s
}: any): any {
  return !(jt as any)(e) || !(jt as any)(t) || !(jt as any)(s);
}
function Y(this: any, e: any): any {
  return (ne as any)(e) || (Li as any)(e) || (e as any).z || (e as any).rotate || (e as any).rotateX || (e as any).rotateY || (e as any).skewX || (e as any).skewY;
}
function Li(this: any, e: any): any {
  return (Je as any)((e as any).x) || (Je as any)((e as any).y);
}
function Je(this: any, e: any): any {
  return e && (e as any) !== ("0%" as any);
}
function Ct(this: any, e: any, t: any, s: any): any {
  const i: any = (e as any) - (s as any),
    n: any = (t as any) * (i as any);
  return (s as any) + (n as any);
}
function Qe(this: any, e: any, t: any, s: any, i: any, n: any): any {
  return (n as any) !== (void 0 as any) && (e = (Ct as any)(e, n, i)), ((Ct as any)(e, s, i) as any) + (t as any);
}
function oe(this: any, e: any, t: any = 0, s: any = 1, i: any, n: any): any {
  (e as any).min = (Qe as any)((e as any).min, t, s, i, n), (e as any).max = (Qe as any)((e as any).max, t, s, i, n);
}
function ki(this: any, e: any, {
  x: t,
  y: s
}: any): any {
  (oe as any)((e as any).x, (t as any).translate, (t as any).scale, (t as any).originPoint), (oe as any)((e as any).y, (s as any).translate, (s as any).scale, (s as any).originPoint);
}
const ts: number = .999999999999,
  es: number = 1.0000000000001;
function fr(this: any, e: any, t: any, s: any, i: any = !1): any {
  const n: any = (s as any).length;
  if (!n) return;
  (t as any).x = (t as any).y = 1;
  let r: any, o: any;
  for (let a: any = 0; (a as any) < (n as any); a++) {
    r = (s as any)[a], o = (r as any).projectionDelta;
    const {
      visualElement: l
    }: any = (r as any).options;
    l && ((l as any).props as any).style && ((((l as any).props as any).style as any).display as any) === ("contents" as any) || (i && ((r as any).options as any).layoutScroll && (r as any).scroll && (r as any) !== ((r as any).root as any) && (it as any)(e, {
      x: -(((r as any).scroll as any).offset as any).x,
      y: -(((r as any).scroll as any).offset as any).y
    }), o && ((t as any).x *= ((o as any).x as any).scale, (t as any).y *= ((o as any).y as any).scale, (ki as any)(e, o)), i && (Y as any)((r as any).latestValues) && (it as any)(e, (r as any).latestValues));
  }
  ((t as any).x as any) < (es as any) && ((t as any).x as any) > (ts as any) && ((t as any).x = 1), ((t as any).y as any) < (es as any) && ((t as any).y as any) > (ts as any) && ((t as any).y = 1);
}
function st(this: any, e: any, t: any): any {
  (e as any).min = ((e as any).min as any) + (t as any), (e as any).max = ((e as any).max as any) + (t as any);
}
function ss(this: any, e: any, t: any, s: any, i: any, n: any = .5): any {
  const r: any = (D as any)((e as any).min, (e as any).max, n);
  (oe as any)(e, t, s, r, i);
}
function it(this: any, e: any, t: any): any {
  (ss as any)((e as any).x, (t as any).x, (t as any).scaleX, (t as any).scale, (t as any).originX), (ss as any)((e as any).y, (t as any).y, (t as any).scaleY, (t as any).scale, (t as any).originY);
}
function Fi(this: any, e: any, t: any): any {
  return (Ri as any)((hr as any)(((e as any).getBoundingClientRect as any)(), t));
}
function dr(this: any, e: any, t: any, s: any): any {
  const i: any = (Fi as any)(e, s),
    {
      scroll: n
    }: any = t;
  return n && ((st as any)((i as any).x, ((n as any).offset as any).x), (st as any)((i as any).y, ((n as any).offset as any).y)), i;
}
const is: any = (): any => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  }),
  nt: any = (): any => ({
    x: (is as any)(),
    y: (is as any)()
  }),
  ns: any = (): any => ({
    min: 0,
    max: 0
  }),
  C: any = (): any => ({
    x: (ns as any)(),
    y: (ns as any)()
  }),
  pr: any = new (WeakMap as any)();
function mr(this: any, e: any, t: any, s: any): any {
  for (const i in t) {
    const n: any = (t as any)[i],
      r: any = (s as any)[i];
    if ((W as any)(n)) ((e as any).addValue as any)(i, n);else if ((W as any)(r)) ((e as any).addValue as any)(i, (rt as any)(n, {
      owner: e
    }));else if ((r as any) !== (n as any)) if (((e as any).hasValue as any)(i)) {
      const o: any = ((e as any).getValue as any)(i);
      ((o as any).liveStyle as any) === (!0 as any) ? ((o as any).jump as any)(n) : (o as any).hasAnimated || ((o as any).set as any)(n);
    } else {
      const o: any = ((e as any).getStaticValue as any)(i);
      ((e as any).addValue as any)(i, (rt as any)((o as any) !== (void 0 as any) ? o : n, {
        owner: e
      }));
    }
  }
  for (const i in s) ((t as any)[i] as any) === (void 0 as any) && ((e as any).removeValue as any)(i);
  return t;
}
const os: any = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class gr {
  declare prevPresenceContext: any;
  declare prevProps: any;
  declare enteringChildren: any;
  declare removeFromVariantTree: any;
  declare manuallyAnimateOnMount: any;
  declare variantChildren: any;
  declare blockInitialAnimation: any;
  declare options: any;
  declare reducedMotionConfig: any;
  declare depth: any;
  declare presenceContext: any;
  declare props: any;
  declare parent: any;
  declare renderState: any;
  declare initialValues: any;
  declare baseTarget: any;
  declare latestValues: any;
  declare scheduleRender: any;
  declare renderScheduledAt: any;
  declare render: any;
  declare notifyUpdate: any;
  declare propEventSubscriptions: any;
  declare events: any;
  declare prevMotionValues: any;
  declare valueSubscriptions: any;
  declare features: any;
  declare KeyframeResolver: any;
  declare values: any;
  declare shouldReduceMotion: any;
  declare isControllingVariants: any;
  declare isVariantNode: any;
  declare children: any;
  declare current: any;
  [key: string]: any;
  scrapeMotionValuesFromProps(t: any, s: any, i: any): any {
    return {};
  }
  constructor({
    parent: t,
    props: s,
    presenceContext: i,
    reducedMotionConfig: n,
    blockInitialAnimation: r,
    visualState: o
  }: any, a: any = {}) {
    (this as any).current = null, (this as any).children = new (Set as any)(), (this as any).isVariantNode = !1, (this as any).isControllingVariants = !1, (this as any).shouldReduceMotion = null, (this as any).values = new (Map as any)(), (this as any).KeyframeResolver = be, (this as any).features = {}, (this as any).valueSubscriptions = new (Map as any)(), (this as any).prevMotionValues = {}, (this as any).events = {}, (this as any).propEventSubscriptions = {}, (this as any).notifyUpdate = (): any => ((this as any).notify as any)("Update", (this as any).latestValues), (this as any).render = (): any => {
      (this as any).current && (((this as any).triggerBuild as any)(), ((this as any).renderInstance as any)((this as any).current, (this as any).renderState, ((this as any).props as any).style, (this as any).projection));
    }, (this as any).renderScheduledAt = 0, (this as any).scheduleRender = (): any => {
      const f: any = ((k as any).now as any)();
      ((this as any).renderScheduledAt as any) < (f as any) && ((this as any).renderScheduledAt = f, ((S as any).render as any)((this as any).render, !1, !0));
    };
    const {
      latestValues: l,
      renderState: c
    }: any = o;
    (this as any).latestValues = l, (this as any).baseTarget = {
      ...l
    }, (this as any).initialValues = (s as any).initial ? {
      ...l
    } : {}, (this as any).renderState = c, (this as any).parent = t, (this as any).props = s, (this as any).presenceContext = i, (this as any).depth = t ? ((t as any).depth as any) + (1 as any) : 0, (this as any).reducedMotionConfig = n, (this as any).options = a, (this as any).blockInitialAnimation = !!r, (this as any).isControllingVariants = (yn as any)(s), (this as any).isVariantNode = (vn as any)(s), (this as any).isVariantNode && ((this as any).variantChildren = new (Set as any)()), (this as any).manuallyAnimateOnMount = !!(t && (t as any).current);
    const {
      willChange: u,
      ...h
    }: any = ((this as any).scrapeMotionValuesFromProps as any)(s, {}, this);
    for (const f in h) {
      const d: any = (h as any)[f];
      ((l as any)[f] as any) !== (void 0 as any) && (W as any)(d) && ((d as any).set as any)((l as any)[f]);
    }
  }
  mount(t: any): any {
    (this as any).current = t, ((pr as any).set as any)(t, this), (this as any).projection && !((this as any).projection as any).instance && (((this as any).projection as any).mount as any)(t), (this as any).parent && (this as any).isVariantNode && !(this as any).isControllingVariants && ((this as any).removeFromVariantTree = (((this as any).parent as any).addVariantChild as any)(this)), (((this as any).values as any).forEach as any)((s: any, i: any): any => ((this as any).bindToMotionValue as any)(i, s)), (Tn as any).current || (xn as any)(), (this as any).shouldReduceMotion = ((this as any).reducedMotionConfig as any) === ("never" as any) ? !1 : ((this as any).reducedMotionConfig as any) === ("always" as any) ? !0 : (Pn as any).current, (this as any).parent?.addChild(this), ((this as any).update as any)((this as any).props, (this as any).presenceContext);
  }
  unmount(): any {
    (this as any).projection && (((this as any).projection as any).unmount as any)(), ($ as any)((this as any).notifyUpdate), ($ as any)((this as any).render), (((this as any).valueSubscriptions as any).forEach as any)((t: any): any => (t as any)()), (((this as any).valueSubscriptions as any).clear as any)(), (this as any).removeFromVariantTree && ((this as any).removeFromVariantTree as any)(), (this as any).parent?.removeChild(this);
    for (const t in (this as any).events) ((((this as any).events as any)[t] as any).clear as any)();
    for (const t in (this as any).features) {
      const s: any = ((this as any).features as any)[t];
      s && (((s as any).unmount as any)(), (s as any).isMounted = !1);
    }
    (this as any).current = null;
  }
  addChild(t: any): any {
    (((this as any).children as any).add as any)(t), (this as any).enteringChildren ?? ((this as any).enteringChildren = new (Set as any)()), (((this as any).enteringChildren as any).add as any)(t);
  }
  removeChild(t: any): any {
    (((this as any).children as any).delete as any)(t), (this as any).enteringChildren && (((this as any).enteringChildren as any).delete as any)(t);
  }
  bindToMotionValue(t: any, s: any): any {
    (((this as any).valueSubscriptions as any).has as any)(t) && ((((this as any).valueSubscriptions as any).get as any)(t) as any)();
    const i: any = ((Et as any).has as any)(t);
    i && (this as any).onBindTransform && ((this as any).onBindTransform as any)();
    const n: any = ((s as any).on as any)("change", (o: any): any => {
      ((this as any).latestValues as any)[t] = o, ((this as any).props as any).onUpdate && ((S as any).preRender as any)((this as any).notifyUpdate), i && (this as any).projection && (((this as any).projection as any).isTransformDirty = !0), ((this as any).scheduleRender as any)();
    });
    let r: any;
    (window as any).MotionCheckAppearSync && (r = ((window as any).MotionCheckAppearSync as any)(this, t, s)), (((this as any).valueSubscriptions as any).set as any)(t, (): any => {
      (n as any)(), r && (r as any)(), (s as any).owner && ((s as any).stop as any)();
    });
  }
  sortNodePosition(t: any): any {
    return !(this as any).current || !(this as any).sortInstanceNodePosition || ((this as any).type as any) !== ((t as any).type as any) ? 0 : ((this as any).sortInstanceNodePosition as any)((this as any).current, (t as any).current);
  }
  updateFeatures(): any {
    let t: any = "animation";
    for (t in Be) {
      const s: any = (Be as any)[t];
      if (!s) continue;
      const {
        isEnabled: i,
        Feature: n
      }: any = s;
      if (!((this as any).features as any)[t] && n && (i as any)((this as any).props) && (((this as any).features as any)[t] = new (n as any)(this)), ((this as any).features as any)[t]) {
        const r: any = ((this as any).features as any)[t];
        (r as any).isMounted ? ((r as any).update as any)() : (((r as any).mount as any)(), (r as any).isMounted = !0);
      }
    }
  }
  triggerBuild(): any {
    ((this as any).build as any)((this as any).renderState, (this as any).latestValues, (this as any).props);
  }
  measureViewportBox(): any {
    return (this as any).current ? ((this as any).measureInstanceViewportBox as any)((this as any).current, (this as any).props) : (C as any)();
  }
  getStaticValue(t: any): any {
    return ((this as any).latestValues as any)[t];
  }
  setStaticValue(t: any, s: any): any {
    ((this as any).latestValues as any)[t] = s;
  }
  update(t: any, s: any): any {
    ((t as any).transformTemplate || ((this as any).props as any).transformTemplate) && ((this as any).scheduleRender as any)(), (this as any).prevProps = (this as any).props, (this as any).props = t, (this as any).prevPresenceContext = (this as any).presenceContext, (this as any).presenceContext = s;
    for (let i: any = 0; (i as any) < ((os as any).length as any); i++) {
      const n: any = (os as any)[i];
      ((this as any).propEventSubscriptions as any)[n] && ((((this as any).propEventSubscriptions as any)[n] as any)(), delete ((this as any).propEventSubscriptions as any)[n]);
      const r: any = ("on" as any) + (n as any),
        o: any = (t as any)[r];
      o && (((this as any).propEventSubscriptions as any)[n] = ((this as any).on as any)(n, o));
    }
    (this as any).prevMotionValues = (mr as any)(this, ((this as any).scrapeMotionValuesFromProps as any)(t, (this as any).prevProps, this), (this as any).prevMotionValues), (this as any).handleChildMotionValue && ((this as any).handleChildMotionValue as any)();
  }
  getProps(): any {
    return (this as any).props;
  }
  getVariant(t: any): any {
    return ((this as any).props as any).variants ? (((this as any).props as any).variants as any)[t] : void 0;
  }
  getDefaultTransition(): any {
    return ((this as any).props as any).transition;
  }
  getTransformPagePoint(): any {
    return ((this as any).props as any).transformPagePoint;
  }
  getClosestVariantNode(): any {
    return (this as any).isVariantNode ? this : (this as any).parent ? (((this as any).parent as any).getClosestVariantNode as any)() : void 0;
  }
  addVariantChild(t: any): any {
    const s: any = ((this as any).getClosestVariantNode as any)();
    if (s) return (s as any).variantChildren && (((s as any).variantChildren as any).add as any)(t), (): any => (((s as any).variantChildren as any).delete as any)(t);
  }
  addValue(t: any, s: any): any {
    const i: any = (((this as any).values as any).get as any)(t);
    (s as any) !== (i as any) && (i && ((this as any).removeValue as any)(t), ((this as any).bindToMotionValue as any)(t, s), (((this as any).values as any).set as any)(t, s), ((this as any).latestValues as any)[t] = ((s as any).get as any)());
  }
  removeValue(t: any): any {
    (((this as any).values as any).delete as any)(t);
    const s: any = (((this as any).valueSubscriptions as any).get as any)(t);
    s && ((s as any)(), (((this as any).valueSubscriptions as any).delete as any)(t)), delete ((this as any).latestValues as any)[t], ((this as any).removeValueFromRenderState as any)(t, (this as any).renderState);
  }
  hasValue(t: any): any {
    return (((this as any).values as any).has as any)(t);
  }
  getValue(t: any, s: any): any {
    if (((this as any).props as any).values && (((this as any).props as any).values as any)[t]) return (((this as any).props as any).values as any)[t];
    let i: any = (((this as any).values as any).get as any)(t);
    return (i as any) === (void 0 as any) && (s as any) !== (void 0 as any) && (i = (rt as any)((s as any) === (null as any) ? void 0 : s, {
      owner: this
    }), ((this as any).addValue as any)(t, i)), i;
  }
  readValue(t: any, s: any): any {
    let i: any = (((this as any).latestValues as any)[t] as any) !== (void 0 as any) || !(this as any).current ? ((this as any).latestValues as any)[t] : ((this as any).getBaseTargetFromProps as any)((this as any).props, t) ?? ((this as any).readValueFromInstance as any)((this as any).current, t, (this as any).options);
    return (i as any) != (null as any) && ((typeof i as any) == ("string" as any) && ((qs as any)(i) || (Zs as any)(i)) ? i = (parseFloat as any)(i) : !(ur as any)(i) && ((at as any).test as any)(s) && (i = (Di as any)(t, s)), ((this as any).setBaseTarget as any)(t, (W as any)(i) ? ((i as any).get as any)() : i)), (W as any)(i) ? ((i as any).get as any)() : i;
  }
  setBaseTarget(t: any, s: any): any {
    ((this as any).baseTarget as any)[t] = s;
  }
  getBaseTarget(t: any): any {
    const {
      initial: s
    }: any = (this as any).props;
    let i: any;
    if ((typeof s as any) == ("string" as any) || (typeof s as any) == ("object" as any)) {
      const r: any = (_s as any)((this as any).props, s, (this as any).presenceContext?.custom);
      r && (i = (r as any)[t]);
    }
    if (s && (i as any) !== (void 0 as any)) return i;
    const n: any = ((this as any).getBaseTargetFromProps as any)((this as any).props, t);
    return (n as any) !== (void 0 as any) && !(W as any)(n) ? n : (((this as any).initialValues as any)[t] as any) !== (void 0 as any) && (i as any) === (void 0 as any) ? void 0 : ((this as any).baseTarget as any)[t];
  }
  on(t: any, s: any): any {
    return ((this as any).events as any)[t] || (((this as any).events as any)[t] = new (ye as any)()), ((((this as any).events as any)[t] as any).add as any)(s);
  }
  notify(t: any, ...s: any): any {
    ((this as any).events as any)[t] && ((((this as any).events as any)[t] as any).notify as any)(...s);
  }
  scheduleRenderMicrotask(): any {
    ((we as any).render as any)((this as any).render);
  }
}
class Bi extends (gr as any) {
  declare childSubscription: any;
  declare KeyframeResolver: any;
  [key: string]: any;
  constructor() {
    super(...arguments), (this as any).KeyframeResolver = Zo;
  }
  sortInstanceNodePosition(t: any, s: any): any {
    return (((t as any).compareDocumentPosition as any)(s) as any) & (2 as any) ? 1 : -1;
  }
  getBaseTargetFromProps(t: any, s: any): any {
    return (t as any).style ? ((t as any).style as any)[s] : void 0;
  }
  removeValueFromRenderState(t: any, {
    vars: s,
    style: i
  }: any): any {
    delete (s as any)[t], delete (i as any)[t];
  }
  handleChildMotionValue(): any {
    (this as any).childSubscription && (((this as any).childSubscription as any)(), delete (this as any).childSubscription);
    const {
      children: t
    }: any = (this as any).props;
    (W as any)(t) && ((this as any).childSubscription = ((t as any).on as any)("change", (s: any): any => {
      (this as any).current && (((this as any).current as any).textContent = `${s}`);
    }));
  }
}
function Ii(this: any, e: any, {
  style: t,
  vars: s
}: any, i: any, n: any): any {
  const r: any = (e as any).style;
  let o: any;
  for (o in t) (r as any)[o] = (t as any)[o];
  n?.applyProjectionStyles(r, i);
  for (o in s) ((r as any).setProperty as any)(o, (s as any)[o]);
}
function yr(this: any, e: any): any {
  return ((window as any).getComputedStyle as any)(e);
}
class vr extends (Bi as any) {
  declare renderInstance: any;
  declare type: any;
  [key: string]: any;
  constructor() {
    super(...arguments), (this as any).type = "html", (this as any).renderInstance = Ii;
  }
  readValueFromInstance(t: any, s: any): any {
    if (((Et as any).has as any)(s)) return (this as any).projection?.isProjecting ? (Zt as any)(s) : (yo as any)(t, s);
    {
      const i: any = (yr as any)(t),
        n: any = ((An as any)(s) ? ((i as any).getPropertyValue as any)(s) : (i as any)[s]) || 0;
      return (typeof n as any) == ("string" as any) ? ((n as any).trim as any)() : n;
    }
  }
  measureInstanceViewportBox(t: any, {
    transformPagePoint: s
  }: any): any {
    return (Fi as any)(t, s);
  }
  build(t: any, s: any, i: any): any {
    (ln as any)(t, s, (i as any).transformTemplate);
  }
  scrapeMotionValuesFromProps(t: any, s: any, i: any): any {
    return (un as any)(t, s, i);
  }
}
const ji: any = new (Set as any)(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function Tr(this: any, e: any, t: any, s: any, i: any): any {
  (Ii as any)(e, t, void 0, i);
  for (const n in (t as any).attrs) ((e as any).setAttribute as any)(((ji as any).has as any)(n) ? n : ($s as any)(n), ((t as any).attrs as any)[n]);
}
class xr extends (Bi as any) {
  declare measureInstanceViewportBox: any;
  declare isSVGTag: any;
  declare type: any;
  [key: string]: any;
  constructor() {
    super(...arguments), (this as any).type = "svg", (this as any).isSVGTag = !1, (this as any).measureInstanceViewportBox = C;
  }
  getBaseTargetFromProps(t: any, s: any): any {
    return (t as any)[s];
  }
  readValueFromInstance(t: any, s: any): any {
    if (((Et as any).has as any)(s)) {
      const i: any = (bi as any)(s);
      return i && (i as any).default || 0;
    }
    return s = ((ji as any).has as any)(s) ? s : ($s as any)(s), ((t as any).getAttribute as any)(s);
  }
  scrapeMotionValuesFromProps(t: any, s: any, i: any): any {
    return (cn as any)(t, s, i);
  }
  build(t: any, s: any, i: any): any {
    (hn as any)(t, s, (this as any).isSVGTag, (i as any).transformTemplate, (i as any).style);
  }
  renderInstance(t: any, s: any, i: any, n: any): any {
    (Tr as any)(t, s, i, n);
  }
  mount(t: any): any {
    (this as any).isSVGTag = (Vn as any)((t as any).tagName), (super.mount as any)(t);
  }
}
const Pr: any = (e: any, t: any): any => (t as any).isSVG ?? (Sn as any)(e) ? new (xr as any)(t) : new (vr as any)(t, {
  allowProjection: (e as any) !== ((St as any).Fragment as any)
});
function ot(this: any, e: any, t: any, s: any): any {
  const i: any = ((e as any).getProps as any)();
  return (_s as any)(i, t, (s as any) !== (void 0 as any) ? s : (i as any).custom, e);
}
const re: any = (e: any): any => ((Array as any).isArray as any)(e);
function Ar(this: any, e: any, t: any, s: any): any {
  ((e as any).hasValue as any)(t) ? ((((e as any).getValue as any)(t) as any).set as any)(s) : ((e as any).addValue as any)(t, (rt as any)(s));
}
function Vr(this: any, e: any): any {
  return (re as any)(e) ? (e as any)[((e as any).length as any) - (1 as any)] || 0 : e;
}
function Sr(this: any, e: any, t: any): any {
  const s: any = (ot as any)(e, t);
  let {
    transitionEnd: i = {},
    transition: n = {},
    ...r
  }: any = s || {};
  r = {
    ...r,
    ...i
  };
  for (const o in r) {
    const a: any = (Vr as any)((r as any)[o]);
    (Ar as any)(e, o, a);
  }
}
function br(this: any, e: any): any {
  return !!((W as any)(e) && (e as any).add);
}
function ae(this: any, e: any, t: any): any {
  const s: any = ((e as any).getValue as any)("willChange");
  if ((br as any)(s)) return ((s as any).add as any)(t);
  if (!s && (_ as any).WillChange) {
    const i: any = new ((_ as any).WillChange as any)("auto");
    ((e as any).addValue as any)("willChange", i), ((i as any).add as any)(t);
  }
}
function Oi(this: any, e: any): any {
  return ((e as any).props as any)[bn];
}
const Dr: any = (e: any): any => (e as any) !== (null as any);
function wr(this: any, e: any, {
  repeat: t,
  repeatType: s = "loop"
}: any, i: any): any {
  const n: any = ((e as any).filter as any)(Dr),
    r: any = t && (s as any) !== ("loop" as any) && ((t as any) % (2 as any) as any) === (1 as any) ? 0 : ((n as any).length as any) - (1 as any);
  return (n as any)[r];
}
const Cr: any = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  },
  Mr: any = (e: any): any => ({
    type: "spring",
    stiffness: 550,
    damping: (e as any) === (0 as any) ? (2 as any) * (((Math as any).sqrt as any)(550) as any) : 30,
    restSpeed: 10
  }),
  Er: any = {
    type: "keyframes",
    duration: .8
  },
  Rr: any = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
  },
  Lr: any = (e: any, {
    keyframes: t
  }: any): any => ((t as any).length as any) > (2 as any) ? Er : ((Et as any).has as any)(e) ? ((e as any).startsWith as any)("scale") ? (Mr as any)((t as any)[1]) : Cr : Rr;
function kr(this: any, {
  when: e,
  delay: t,
  delayChildren: s,
  staggerChildren: i,
  staggerDirection: n,
  repeat: r,
  repeatType: o,
  repeatDelay: a,
  from: l,
  elapsed: c,
  ...u
}: any): any {
  return !!(((Object as any).keys as any)(u) as any).length;
}
const Me: any = (e: any, t: any, s: any, i: any = {}, n: any, r: any): any => (o: any): any => {
  const a: any = (De as any)(i, e) || {},
    l: any = (a as any).delay || (i as any).delay || 0;
  let {
    elapsed: c = 0
  }: any = i;
  c = (c as any) - ((G as any)(l) as any);
  const u: any = {
    keyframes: ((Array as any).isArray as any)(s) ? s : [null, s],
    ease: "easeOut",
    velocity: ((t as any).getVelocity as any)(),
    ...a,
    delay: -c,
    onUpdate: (f: any): any => {
      ((t as any).set as any)(f), (a as any).onUpdate && ((a as any).onUpdate as any)(f);
    },
    onComplete: (): any => {
      (o as any)(), (a as any).onComplete && ((a as any).onComplete as any)();
    },
    name: e,
    motionValue: t,
    element: r ? void 0 : n
  };
  (kr as any)(a) || ((Object as any).assign as any)(u, (Lr as any)(e, u)), (u as any).duration && ((u as any).duration = (G as any)((u as any).duration)), (u as any).repeatDelay && ((u as any).repeatDelay = (G as any)((u as any).repeatDelay)), ((u as any).from as any) !== (void 0 as any) && (((u as any).keyframes as any)[0] = (u as any).from);
  let h: any = !1;
  if ((((u as any).type as any) === (!1 as any) || ((u as any).duration as any) === (0 as any) && !(u as any).repeatDelay) && ((se as any)(u), ((u as any).delay as any) === (0 as any) && (h = !0)), ((_ as any).instantAnimations || (_ as any).skipAnimations) && (h = !0, (se as any)(u), (u as any).delay = 0), (u as any).allowFlatten = !(a as any).type && !(a as any).ease, h && !r && (((t as any).get as any)() as any) !== (void 0 as any)) {
    const f: any = (wr as any)((u as any).keyframes, a);
    if ((f as any) !== (void 0 as any)) {
      ((S as any).update as any)((): any => {
        ((u as any).onUpdate as any)(f), ((u as any).onComplete as any)();
      });
      return;
    }
  }
  return (a as any).isSync ? new (Se as any)(u) : new (No as any)(u);
};
function Fr(this: any, {
  protectedKeys: e,
  needsAnimating: t
}: any, s: any): any {
  const i: any = ((e as any).hasOwnProperty as any)(s) && ((t as any)[s] as any) !== (!0 as any);
  return (t as any)[s] = !1, i;
}
function Ui(this: any, e: any, t: any, {
  delay: s = 0,
  transitionOverride: i,
  type: n
}: any = {}): any {
  let {
    transition: r = ((e as any).getDefaultTransition as any)(),
    transitionEnd: o,
    ...a
  }: any = t;
  i && (r = i);
  const l: any = [],
    c: any = n && (e as any).animationState && ((((e as any).animationState as any).getState as any)() as any)[n];
  for (const u in a) {
    const h: any = ((e as any).getValue as any)(u, ((e as any).latestValues as any)[u] ?? null),
      f: any = (a as any)[u];
    if ((f as any) === (void 0 as any) || c && (Fr as any)(c, u)) continue;
    const d: any = {
        delay: s,
        ...(De as any)(r || {}, u)
      },
      m: any = ((h as any).get as any)();
    if ((m as any) !== (void 0 as any) && !(h as any).isAnimating && !((Array as any).isArray as any)(f) && (f as any) === (m as any) && !(d as any).velocity) continue;
    let v: any = !1;
    if ((window as any).MotionHandoffAnimation) {
      const p: any = (Oi as any)(e);
      if (p) {
        const x: any = ((window as any).MotionHandoffAnimation as any)(p, u, S);
        (x as any) !== (null as any) && ((d as any).startTime = x, v = !0);
      }
    }
    (ae as any)(e, u), ((h as any).start as any)((Me as any)(u, h, f, (e as any).shouldReduceMotion && ((Ai as any).has as any)(u) ? {
      type: !1
    } : d, e, v));
    const y: any = (h as any).animation;
    y && ((l as any).push as any)(y);
  }
  return o && ((((Promise as any).all as any)(l) as any).then as any)((): any => {
    ((S as any).update as any)((): any => {
      o && (Sr as any)(e, o);
    });
  }), l;
}
function Ni(this: any, e: any, t: any, s: any, i: any = 0, n: any = 1): any {
  const r: any = ((((((Array as any).from as any)(e) as any).sort as any)((c: any, u: any): any => ((c as any).sortNodePosition as any)(u)) as any).indexOf as any)(t),
    o: any = (e as any).size,
    a: any = ((o as any) - (1 as any) as any) * (i as any);
  return (typeof s as any) == ("function" as any) ? (s as any)(r, o) : (n as any) === (1 as any) ? (r as any) * (i as any) : (a as any) - ((r as any) * (i as any) as any);
}
function le(this: any, e: any, t: any, s: any = {}): any {
  const i: any = (ot as any)(e, t, ((s as any).type as any) === ("exit" as any) ? (e as any).presenceContext?.custom : void 0);
  let {
    transition: n = ((e as any).getDefaultTransition as any)() || {}
  }: any = i || {};
  (s as any).transitionOverride && (n = (s as any).transitionOverride);
  const r: any = i ? (): any => ((Promise as any).all as any)((Ui as any)(e, i, s)) : (): any => ((Promise as any).resolve as any)(),
    o: any = (e as any).variantChildren && ((e as any).variantChildren as any).size ? (l: any = 0): any => {
      const {
        delayChildren: c = 0,
        staggerChildren: u,
        staggerDirection: h
      }: any = n;
      return (Br as any)(e, t, l, c, u, h, s);
    } : (): any => ((Promise as any).resolve as any)(),
    {
      when: a
    }: any = n;
  if (a) {
    const [l, c]: any = (a as any) === ("beforeChildren" as any) ? [r, o] : [o, r];
    return (((l as any)() as any).then as any)((): any => (c as any)());
  } else return ((Promise as any).all as any)([(r as any)(), (o as any)((s as any).delay)]);
}
function Br(this: any, e: any, t: any, s: any = 0, i: any = 0, n: any = 0, r: any = 1, o: any): any {
  const a: any = [];
  for (const l of (e as any).variantChildren) ((l as any).notify as any)("AnimationStart", t), ((a as any).push as any)((((le as any)(l, t, {
    ...o,
    delay: ((s as any) + (((typeof i as any) == ("function" as any) ? 0 : i) as any) as any) + ((Ni as any)((e as any).variantChildren, l, i, n, r) as any)
  }) as any).then as any)((): any => ((l as any).notify as any)("AnimationComplete", t)));
  return ((Promise as any).all as any)(a);
}
function Ir(this: any, e: any, t: any, s: any = {}): any {
  ((e as any).notify as any)("AnimationStart", t);
  let i: any;
  if (((Array as any).isArray as any)(t)) {
    const n: any = ((t as any).map as any)((r: any): any => (le as any)(e, r, s));
    i = ((Promise as any).all as any)(n);
  } else if ((typeof t as any) == ("string" as any)) i = (le as any)(e, t, s);else {
    const n: any = (typeof t as any) == ("function" as any) ? (ot as any)(e, t, (s as any).custom) : t;
    i = ((Promise as any).all as any)((Ui as any)(e, n, s));
  }
  return ((i as any).then as any)((): any => {
    ((e as any).notify as any)("AnimationComplete", t);
  });
}
function Ki(this: any, e: any, t: any): any {
  if (!((Array as any).isArray as any)(t)) return !1;
  const s: any = (t as any).length;
  if ((s as any) !== ((e as any).length as any)) return !1;
  for (let i: any = 0; (i as any) < (s as any); i++) if (((t as any)[i] as any) !== ((e as any)[i] as any)) return !1;
  return !0;
}
const jr: any = (Hs as any).length;
function Gi(this: any, e: any): any {
  if (!e) return;
  if (!(e as any).isControllingVariants) {
    const s: any = (e as any).parent ? (Gi as any)((e as any).parent) || {} : {};
    return (((e as any).props as any).initial as any) !== (void 0 as any) && ((s as any).initial = ((e as any).props as any).initial), s;
  }
  const t: any = {};
  for (let s: any = 0; (s as any) < (jr as any); s++) {
    const i: any = (Hs as any)[s],
      n: any = ((e as any).props as any)[i];
    ((zs as any)(n) || (n as any) === (!1 as any)) && ((t as any)[i] = n);
  }
  return t;
}
const Or: any = (([...Ys] as any).reverse as any)(),
  Ur: any = (Ys as any).length;
function Nr(this: any, e: any): any {
  return (t: any): any => ((Promise as any).all as any)(((t as any).map as any)(({
    animation: s,
    options: i
  }: any): any => (Ir as any)(e, s, i)));
}
function Kr(this: any, e: any): any {
  let t: any = (Nr as any)(e),
    s: any = (rs as any)(),
    i: any = !0;
  const n: any = (l: any): any => (c: any, u: any): any => {
    const h: any = (ot as any)(e, u, (l as any) === ("exit" as any) ? (e as any).presenceContext?.custom : void 0);
    if (h) {
      const {
        transition: f,
        transitionEnd: d,
        ...m
      }: any = h;
      c = {
        ...c,
        ...m,
        ...d
      };
    }
    return c;
  };
  function r(this: any, l: any): any {
    t = (l as any)(e);
  }
  function o(this: any, l: any): any {
    const {
        props: c
      }: any = e,
      u: any = (Gi as any)((e as any).parent) || {},
      h: any = [],
      f: any = new (Set as any)();
    let d: any = {},
      m: any = (1 as any) / (0 as any);
    for (let y: any = 0; (y as any) < (Ur as any); y++) {
      const p: any = (Or as any)[y],
        x: any = (s as any)[p],
        g: any = ((c as any)[p] as any) !== (void 0 as any) ? (c as any)[p] : (u as any)[p],
        A: any = (zs as any)(g),
        T: any = (p as any) === (l as any) ? (x as any).isActive : null;
      (T as any) === (!1 as any) && (m = y);
      let V: any = (g as any) === ((u as any)[p] as any) && (g as any) !== ((c as any)[p] as any) && A;
      if (V && i && (e as any).manuallyAnimateOnMount && (V = !1), (x as any).protectedKeys = {
        ...d
      }, !(x as any).isActive && (T as any) === (null as any) || !g && !(x as any).prevProp || (Xs as any)(g) || (typeof g as any) == ("boolean" as any)) continue;
      const w: any = (Gr as any)((x as any).prevProp, g);
      let P: any = w || (p as any) === (l as any) && (x as any).isActive && !V && A || (y as any) > (m as any) && A,
        L: any = !1;
      const B: any = ((Array as any).isArray as any)(g) ? g : [g];
      let tt: any = ((B as any).reduce as any)((n as any)(p), {});
      (T as any) === (!1 as any) && (tt = {});
      const {
          prevResolvedValues: Re = {}
        }: any = x,
        sn: any = {
          ...Re,
          ...tt
        },
        Le: any = (M: any): any => {
          P = !0, ((f as any).has as any)(M) && (L = !0, ((f as any).delete as any)(M)), ((x as any).needsAnimating as any)[M] = !0;
          const I: any = ((e as any).getValue as any)(M);
          I && ((I as any).liveStyle = !1);
        };
      for (const M in sn) {
        const I: any = (tt as any)[M],
          H: any = (Re as any)[M];
        if (((d as any).hasOwnProperty as any)(M)) continue;
        let et: any = !1;
        (re as any)(I) && (re as any)(H) ? et = !(Ki as any)(I, H) : et = (I as any) !== (H as any), et ? (I as any) != (null as any) ? (Le as any)(M) : ((f as any).add as any)(M) : (I as any) !== (void 0 as any) && ((f as any).has as any)(M) ? (Le as any)(M) : ((x as any).protectedKeys as any)[M] = !0;
      }
      (x as any).prevProp = g, (x as any).prevResolvedValues = tt, (x as any).isActive && (d = {
        ...d,
        ...tt
      }), i && (e as any).blockInitialAnimation && (P = !1);
      const ke: any = V && w;
      P && (!ke || L) && ((h as any).push as any)(...((B as any).map as any)((M: any): any => {
        const I: any = {
          type: p
        };
        if ((typeof M as any) == ("string" as any) && i && !ke && (e as any).manuallyAnimateOnMount && (e as any).parent) {
          const {
              parent: H
            }: any = e,
            et: any = (ot as any)(H, M);
          if ((H as any).enteringChildren && et) {
            const {
              delayChildren: nn
            }: any = (et as any).transition || {};
            (I as any).delay = (Ni as any)((H as any).enteringChildren, e, nn);
          }
        }
        return {
          animation: M,
          options: I
        };
      }));
    }
    if ((f as any).size) {
      const y: any = {};
      if ((typeof (c as any).initial as any) != ("boolean" as any)) {
        const p: any = (ot as any)(e, ((Array as any).isArray as any)((c as any).initial) ? ((c as any).initial as any)[0] : (c as any).initial);
        p && (p as any).transition && ((y as any).transition = (p as any).transition);
      }
      ((f as any).forEach as any)((p: any): any => {
        const x: any = ((e as any).getBaseTarget as any)(p),
          g: any = ((e as any).getValue as any)(p);
        g && ((g as any).liveStyle = !0), (y as any)[p] = x ?? null;
      }), ((h as any).push as any)({
        animation: y
      });
    }
    let v: any = !!(h as any).length;
    return i && (((c as any).initial as any) === (!1 as any) || ((c as any).initial as any) === ((c as any).animate as any)) && !(e as any).manuallyAnimateOnMount && (v = !1), i = !1, v ? (t as any)(h) : ((Promise as any).resolve as any)();
  }
  function a(this: any, l: any, c: any): any {
    if ((((s as any)[l] as any).isActive as any) === (c as any)) return ((Promise as any).resolve as any)();
    (e as any).variantChildren?.forEach((h: any): any => (h as any).animationState?.setActive(l, c)), ((s as any)[l] as any).isActive = c;
    const u: any = (o as any)(l);
    for (const h in s) ((s as any)[h] as any).protectedKeys = {};
    return u;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: r,
    getState: (): any => s,
    reset: (): any => {
      s = (rs as any)();
    }
  };
}
function Gr(this: any, e: any, t: any): any {
  return (typeof t as any) == ("string" as any) ? (t as any) !== (e as any) : ((Array as any).isArray as any)(t) ? !(Ki as any)(t, e) : !1;
}
function X(this: any, e: any = !1): any {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function rs(this: any): any {
  return {
    animate: (X as any)(!0),
    whileInView: (X as any)(),
    whileHover: (X as any)(),
    whileTap: (X as any)(),
    whileDrag: (X as any)(),
    whileFocus: (X as any)(),
    exit: (X as any)()
  };
}
class z {
  declare node: any;
  declare isMounted: any;
  [key: string]: any;
  constructor(t: any) {
    (this as any).isMounted = !1, (this as any).node = t;
  }
  update(): any {}
}
class Wr extends (z as any) {
  declare unmountControls: any;
  [key: string]: any;
  constructor(t: any) {
    super(t), (t as any).animationState || ((t as any).animationState = (Kr as any)(t));
  }
  updateAnimationControlsSubscription(): any {
    const {
      animate: t
    }: any = (((this as any).node as any).getProps as any)();
    (Xs as any)(t) && ((this as any).unmountControls = ((t as any).subscribe as any)((this as any).node));
  }
  mount(): any {
    ((this as any).updateAnimationControlsSubscription as any)();
  }
  update(): any {
    const {
        animate: t
      }: any = (((this as any).node as any).getProps as any)(),
      {
        animate: s
      }: any = ((this as any).node as any).prevProps || {};
    (t as any) !== (s as any) && ((this as any).updateAnimationControlsSubscription as any)();
  }
  unmount(): any {
    ((((this as any).node as any).animationState as any).reset as any)(), (this as any).unmountControls?.();
  }
}
let _r: any = 0;
class $r extends (z as any) {
  declare id: any;
  [key: string]: any;
  constructor() {
    super(...arguments), (this as any).id = _r++;
  }
  update(): any {
    if (!((this as any).node as any).presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: s
      }: any = ((this as any).node as any).presenceContext,
      {
        isPresent: i
      }: any = ((this as any).node as any).prevPresenceContext || {};
    if (!((this as any).node as any).animationState || (t as any) === (i as any)) return;
    const n: any = ((((this as any).node as any).animationState as any).setActive as any)("exit", !t);
    s && !t && ((n as any).then as any)((): any => {
      (s as any)((this as any).id);
    });
  }
  mount(): any {
    const {
      register: t,
      onExitComplete: s
    }: any = ((this as any).node as any).presenceContext || {};
    s && (s as any)((this as any).id), t && ((this as any).unmount = (t as any)((this as any).id));
  }
  unmount(): any {}
}
const zr: any = {
  animation: {
    Feature: Wr
  },
  exit: {
    Feature: $r
  }
};
function pt(this: any, e: any, t: any, s: any, i: any = {
  passive: !0
}): any {
  return ((e as any).addEventListener as any)(t, s, i), (): any => ((e as any).removeEventListener as any)(t, s);
}
function yt(this: any, e: any): any {
  return {
    point: {
      x: (e as any).pageX,
      y: (e as any).pageY
    }
  };
}
const Hr: any = (e: any): any => (t: any): any => (Ce as any)(t) && (e as any)(t, (yt as any)(t));
function ct(this: any, e: any, t: any, s: any, i: any): any {
  return (pt as any)(e, t, (Hr as any)(s), i);
}
const Wi: number = 1e-4,
  Xr: any = (1 as any) - (Wi as any),
  Yr: any = (1 as any) + (Wi as any),
  _i: number = .01,
  qr: any = (0 as any) - (_i as any),
  Zr: any = (0 as any) + (_i as any);
function R(this: any, e: any): any {
  return ((e as any).max as any) - ((e as any).min as any);
}
function Jr(this: any, e: any, t: any, s: any): any {
  return (((Math as any).abs as any)((e as any) - (t as any)) as any) <= (s as any);
}
function as(this: any, e: any, t: any, s: any, i: any = .5): any {
  (e as any).origin = i, (e as any).originPoint = (D as any)((t as any).min, (t as any).max, (e as any).origin), (e as any).scale = ((R as any)(s) as any) / ((R as any)(t) as any), (e as any).translate = ((D as any)((s as any).min, (s as any).max, (e as any).origin) as any) - ((e as any).originPoint as any), (((e as any).scale as any) >= (Xr as any) && ((e as any).scale as any) <= (Yr as any) || (isNaN as any)((e as any).scale)) && ((e as any).scale = 1), (((e as any).translate as any) >= (qr as any) && ((e as any).translate as any) <= (Zr as any) || (isNaN as any)((e as any).translate)) && ((e as any).translate = 0);
}
function ht(this: any, e: any, t: any, s: any, i: any): any {
  (as as any)((e as any).x, (t as any).x, (s as any).x, i ? (i as any).originX : void 0), (as as any)((e as any).y, (t as any).y, (s as any).y, i ? (i as any).originY : void 0);
}
function ls(this: any, e: any, t: any, s: any): any {
  (e as any).min = ((s as any).min as any) + ((t as any).min as any), (e as any).max = ((e as any).min as any) + ((R as any)(t) as any);
}
function Qr(this: any, e: any, t: any, s: any): any {
  (ls as any)((e as any).x, (t as any).x, (s as any).x), (ls as any)((e as any).y, (t as any).y, (s as any).y);
}
function us(this: any, e: any, t: any, s: any): any {
  (e as any).min = ((t as any).min as any) - ((s as any).min as any), (e as any).max = ((e as any).min as any) + ((R as any)(t) as any);
}
function Mt(this: any, e: any, t: any, s: any): any {
  (us as any)((e as any).x, (t as any).x, (s as any).x), (us as any)((e as any).y, (t as any).y, (s as any).y);
}
function j(this: any, e: any): any {
  return [(e as any)("x"), (e as any)("y")];
}
const $i: any = ({
    current: e
  }: any): any => e ? ((e as any).ownerDocument as any).defaultView : null,
  cs: any = (e: any, t: any): any => ((Math as any).abs as any)((e as any) - (t as any));
function ta(this: any, e: any, t: any): any {
  const s: any = (cs as any)((e as any).x, (t as any).x),
    i: any = (cs as any)((e as any).y, (t as any).y);
  return ((Math as any).sqrt as any)(((s as any) ** (2 as any) as any) + ((i as any) ** (2 as any) as any));
}
class zi {
  declare removeListeners: any;
  declare history: any;
  declare distanceThreshold: any;
  declare transformPagePoint: any;
  declare dragSnapToOrigin: any;
  declare handlePointerUp: any;
  declare handlePointerMove: any;
  declare updatePoint: any;
  declare contextWindow: any;
  declare handlers: any;
  declare lastMoveEventInfo: any;
  declare lastMoveEvent: any;
  declare startEvent: any;
  [key: string]: any;
  constructor(t: any, s: any, {
    transformPagePoint: i,
    contextWindow: n = window,
    dragSnapToOrigin: r = !1,
    distanceThreshold: o = 3
  }: any = {}) {
    if ((this as any).startEvent = null, (this as any).lastMoveEvent = null, (this as any).lastMoveEventInfo = null, (this as any).handlers = {}, (this as any).contextWindow = window, (this as any).updatePoint = (): any => {
      if (!((this as any).lastMoveEvent && (this as any).lastMoveEventInfo)) return;
      const f: any = (Ut as any)((this as any).lastMoveEventInfo, (this as any).history),
        d: any = ((this as any).startEvent as any) !== (null as any),
        m: any = ((ta as any)((f as any).offset, {
          x: 0,
          y: 0
        }) as any) >= ((this as any).distanceThreshold as any);
      if (!d && !m) return;
      const {
          point: v
        }: any = f,
        {
          timestamp: y
        }: any = E;
      (((this as any).history as any).push as any)({
        ...v,
        timestamp: y
      });
      const {
        onStart: p,
        onMove: x
      }: any = (this as any).handlers;
      d || (p && (p as any)((this as any).lastMoveEvent, f), (this as any).startEvent = (this as any).lastMoveEvent), x && (x as any)((this as any).lastMoveEvent, f);
    }, (this as any).handlePointerMove = (f: any, d: any): any => {
      (this as any).lastMoveEvent = f, (this as any).lastMoveEventInfo = (Ot as any)(d, (this as any).transformPagePoint), ((S as any).update as any)((this as any).updatePoint, !0);
    }, (this as any).handlePointerUp = (f: any, d: any): any => {
      ((this as any).end as any)();
      const {
        onEnd: m,
        onSessionEnd: v,
        resumeAnimation: y
      }: any = (this as any).handlers;
      if ((this as any).dragSnapToOrigin && y && (y as any)(), !((this as any).lastMoveEvent && (this as any).lastMoveEventInfo)) return;
      const p: any = (Ut as any)(((f as any).type as any) === ("pointercancel" as any) ? (this as any).lastMoveEventInfo : (Ot as any)(d, (this as any).transformPagePoint), (this as any).history);
      (this as any).startEvent && m && (m as any)(f, p), v && (v as any)(f, p);
    }, !(Ce as any)(t)) return;
    (this as any).dragSnapToOrigin = r, (this as any).handlers = s, (this as any).transformPagePoint = i, (this as any).distanceThreshold = o, (this as any).contextWindow = n || window;
    const a: any = (yt as any)(t),
      l: any = (Ot as any)(a, (this as any).transformPagePoint),
      {
        point: c
      }: any = l,
      {
        timestamp: u
      }: any = E;
    (this as any).history = [{
      ...c,
      timestamp: u
    }];
    const {
      onSessionStart: h
    }: any = s;
    h && (h as any)(t, (Ut as any)(l, (this as any).history)), (this as any).removeListeners = (mt as any)((ct as any)((this as any).contextWindow, "pointermove", (this as any).handlePointerMove), (ct as any)((this as any).contextWindow, "pointerup", (this as any).handlePointerUp), (ct as any)((this as any).contextWindow, "pointercancel", (this as any).handlePointerUp));
  }
  updateHandlers(t: any): any {
    (this as any).handlers = t;
  }
  end(): any {
    (this as any).removeListeners && ((this as any).removeListeners as any)(), ($ as any)((this as any).updatePoint);
  }
}
function Ot(this: any, e: any, t: any): any {
  return t ? {
    point: (t as any)((e as any).point)
  } : e;
}
function hs(this: any, e: any, t: any): any {
  return {
    x: ((e as any).x as any) - ((t as any).x as any),
    y: ((e as any).y as any) - ((t as any).y as any)
  };
}
function Ut(this: any, {
  point: e
}: any, t: any): any {
  return {
    point: e,
    delta: (hs as any)(e, (Hi as any)(t)),
    offset: (hs as any)(e, (ea as any)(t)),
    velocity: (sa as any)(t, .1)
  };
}
function ea(this: any, e: any): any {
  return (e as any)[0];
}
function Hi(this: any, e: any): any {
  return (e as any)[((e as any).length as any) - (1 as any)];
}
function sa(this: any, e: any, t: any): any {
  if (((e as any).length as any) < (2 as any)) return {
    x: 0,
    y: 0
  };
  let s: any = ((e as any).length as any) - (1 as any),
    i: any = null;
  const n: any = (Hi as any)(e);
  for (; (s as any) >= (0 as any) && (i = (e as any)[s], !((((n as any).timestamp as any) - ((i as any).timestamp as any) as any) > ((G as any)(t) as any)));) s--;
  if (!i) return {
    x: 0,
    y: 0
  };
  const r: any = (O as any)(((n as any).timestamp as any) - ((i as any).timestamp as any));
  if ((r as any) === (0 as any)) return {
    x: 0,
    y: 0
  };
  const o: any = {
    x: (((n as any).x as any) - ((i as any).x as any) as any) / (r as any),
    y: (((n as any).y as any) - ((i as any).y as any) as any) / (r as any)
  };
  return ((o as any).x as any) === ((1 as any) / (0 as any) as any) && ((o as any).x = 0), ((o as any).y as any) === ((1 as any) / (0 as any) as any) && ((o as any).y = 0), o;
}
function ia(this: any, e: any, {
  min: t,
  max: s
}: any, i: any): any {
  return (t as any) !== (void 0 as any) && (e as any) < (t as any) ? e = i ? (D as any)(t, e, (i as any).min) : ((Math as any).max as any)(e, t) : (s as any) !== (void 0 as any) && (e as any) > (s as any) && (e = i ? (D as any)(s, e, (i as any).max) : ((Math as any).min as any)(e, s)), e;
}
function fs(this: any, e: any, t: any, s: any): any {
  return {
    min: (t as any) !== (void 0 as any) ? ((e as any).min as any) + (t as any) : void 0,
    max: (s as any) !== (void 0 as any) ? (((e as any).max as any) + (s as any) as any) - (((e as any).max as any) - ((e as any).min as any) as any) : void 0
  };
}
function na(this: any, e: any, {
  top: t,
  left: s,
  bottom: i,
  right: n
}: any): any {
  return {
    x: (fs as any)((e as any).x, s, n),
    y: (fs as any)((e as any).y, t, i)
  };
}
function ds(this: any, e: any, t: any): any {
  let s: any = ((t as any).min as any) - ((e as any).min as any),
    i: any = ((t as any).max as any) - ((e as any).max as any);
  return (((t as any).max as any) - ((t as any).min as any) as any) < (((e as any).max as any) - ((e as any).min as any) as any) && ([s, i] = [i, s]), {
    min: s,
    max: i
  };
}
function oa(this: any, e: any, t: any): any {
  return {
    x: (ds as any)((e as any).x, (t as any).x),
    y: (ds as any)((e as any).y, (t as any).y)
  };
}
function ra(this: any, e: any, t: any): any {
  let s: any = .5;
  const i: any = (R as any)(e),
    n: any = (R as any)(t);
  return (n as any) > (i as any) ? s = (dt as any)((t as any).min, ((t as any).max as any) - (i as any), (e as any).min) : (i as any) > (n as any) && (s = (dt as any)((e as any).min, ((e as any).max as any) - (n as any), (t as any).min)), (Q as any)(0, 1, s);
}
function aa(this: any, e: any, t: any): any {
  const s: any = {};
  return ((t as any).min as any) !== (void 0 as any) && ((s as any).min = ((t as any).min as any) - ((e as any).min as any)), ((t as any).max as any) !== (void 0 as any) && ((s as any).max = ((t as any).max as any) - ((e as any).min as any)), s;
}
const ue: number = .35;
function la(this: any, e: any = ue): any {
  return (e as any) === (!1 as any) ? e = 0 : (e as any) === (!0 as any) && (e = ue), {
    x: (ps as any)(e, "left", "right"),
    y: (ps as any)(e, "top", "bottom")
  };
}
function ps(this: any, e: any, t: any, s: any): any {
  return {
    min: (ms as any)(e, t),
    max: (ms as any)(e, s)
  };
}
function ms(this: any, e: any, t: any): any {
  return (typeof e as any) == ("number" as any) ? e : (e as any)[t] || 0;
}
const ua: any = new (WeakMap as any)();
class ca {
  declare panSession: any;
  declare visualElement: any;
  declare latestPanInfo: any;
  declare latestPointerEvent: any;
  declare elastic: any;
  declare hasMutatedConstraints: any;
  declare constraints: any;
  declare originPoint: any;
  declare currentDirection: any;
  declare isDragging: any;
  declare openDragLock: any;
  [key: string]: any;
  constructor(t: any) {
    (this as any).openDragLock = null, (this as any).isDragging = !1, (this as any).currentDirection = null, (this as any).originPoint = {
      x: 0,
      y: 0
    }, (this as any).constraints = !1, (this as any).hasMutatedConstraints = !1, (this as any).elastic = (C as any)(), (this as any).latestPointerEvent = null, (this as any).latestPanInfo = null, (this as any).visualElement = t;
  }
  start(t: any, {
    snapToCursor: s = !1,
    distanceThreshold: i
  }: any = {}): any {
    const {
      presenceContext: n
    }: any = (this as any).visualElement;
    if (n && ((n as any).isPresent as any) === (!1 as any)) return;
    const r: any = (h: any): any => {
        const {
          dragSnapToOrigin: f
        }: any = ((this as any).getProps as any)();
        f ? ((this as any).pauseAnimation as any)() : ((this as any).stopAnimation as any)(), s && ((this as any).snapToCursor as any)(((yt as any)(h) as any).point);
      },
      o: any = (h: any, f: any): any => {
        const {
          drag: d,
          dragPropagation: m,
          onDragStart: v
        }: any = ((this as any).getProps as any)();
        if (d && !m && ((this as any).openDragLock && ((this as any).openDragLock as any)(), (this as any).openDragLock = (er as any)(d), !(this as any).openDragLock)) return;
        (this as any).latestPointerEvent = h, (this as any).latestPanInfo = f, (this as any).isDragging = !0, (this as any).currentDirection = null, ((this as any).resolveConstraints as any)(), ((this as any).visualElement as any).projection && ((((this as any).visualElement as any).projection as any).isAnimationBlocked = !0, (((this as any).visualElement as any).projection as any).target = void 0), (j as any)((p: any): any => {
          let x: any = ((((this as any).getAxisMotionValue as any)(p) as any).get as any)() || 0;
          if (((ft as any).test as any)(x)) {
            const {
              projection: g
            }: any = (this as any).visualElement;
            if (g && (g as any).layout) {
              const A: any = (((g as any).layout as any).layoutBox as any)[p];
              A && (x = ((R as any)(A) as any) * (((parseFloat as any)(x) as any) / (100 as any) as any));
            }
          }
          ((this as any).originPoint as any)[p] = x;
        }), v && ((S as any).postRender as any)((): any => (v as any)(h, f)), (ae as any)((this as any).visualElement, "transform");
        const {
          animationState: y
        }: any = (this as any).visualElement;
        y && ((y as any).setActive as any)("whileDrag", !0);
      },
      a: any = (h: any, f: any): any => {
        (this as any).latestPointerEvent = h, (this as any).latestPanInfo = f;
        const {
          dragPropagation: d,
          dragDirectionLock: m,
          onDirectionLock: v,
          onDrag: y
        }: any = ((this as any).getProps as any)();
        if (!d && !(this as any).openDragLock) return;
        const {
          offset: p
        }: any = f;
        if (m && ((this as any).currentDirection as any) === (null as any)) {
          (this as any).currentDirection = (ha as any)(p), ((this as any).currentDirection as any) !== (null as any) && v && (v as any)((this as any).currentDirection);
          return;
        }
        ((this as any).updateAxis as any)("x", (f as any).point, p), ((this as any).updateAxis as any)("y", (f as any).point, p), (((this as any).visualElement as any).render as any)(), y && (y as any)(h, f);
      },
      l: any = (h: any, f: any): any => {
        (this as any).latestPointerEvent = h, (this as any).latestPanInfo = f, ((this as any).stop as any)(h, f), (this as any).latestPointerEvent = null, (this as any).latestPanInfo = null;
      },
      c: any = (): any => (j as any)((h: any): any => (((this as any).getAnimationState as any)(h) as any) === ("paused" as any) && (((this as any).getAxisMotionValue as any)(h) as any).animation?.play()),
      {
        dragSnapToOrigin: u
      }: any = ((this as any).getProps as any)();
    (this as any).panSession = new (zi as any)(t, {
      onSessionStart: r,
      onStart: o,
      onMove: a,
      onSessionEnd: l,
      resumeAnimation: c
    }, {
      transformPagePoint: (((this as any).visualElement as any).getTransformPagePoint as any)(),
      dragSnapToOrigin: u,
      distanceThreshold: i,
      contextWindow: ($i as any)((this as any).visualElement)
    });
  }
  stop(t: any, s: any): any {
    const i: any = t || (this as any).latestPointerEvent,
      n: any = s || (this as any).latestPanInfo,
      r: any = (this as any).isDragging;
    if (((this as any).cancel as any)(), !r || !n || !i) return;
    const {
      velocity: o
    }: any = n;
    ((this as any).startAnimation as any)(o);
    const {
      onDragEnd: a
    }: any = ((this as any).getProps as any)();
    a && ((S as any).postRender as any)((): any => (a as any)(i, n));
  }
  cancel(): any {
    (this as any).isDragging = !1;
    const {
      projection: t,
      animationState: s
    }: any = (this as any).visualElement;
    t && ((t as any).isAnimationBlocked = !1), (this as any).panSession && (((this as any).panSession as any).end as any)(), (this as any).panSession = void 0;
    const {
      dragPropagation: i
    }: any = ((this as any).getProps as any)();
    !i && (this as any).openDragLock && (((this as any).openDragLock as any)(), (this as any).openDragLock = null), s && ((s as any).setActive as any)("whileDrag", !1);
  }
  updateAxis(t: any, s: any, i: any): any {
    const {
      drag: n
    }: any = ((this as any).getProps as any)();
    if (!i || !(xt as any)(t, n, (this as any).currentDirection)) return;
    const r: any = ((this as any).getAxisMotionValue as any)(t);
    let o: any = (((this as any).originPoint as any)[t] as any) + ((i as any)[t] as any);
    (this as any).constraints && ((this as any).constraints as any)[t] && (o = (ia as any)(o, ((this as any).constraints as any)[t], ((this as any).elastic as any)[t])), ((r as any).set as any)(o);
  }
  resolveConstraints(): any {
    const {
        dragConstraints: t,
        dragElastic: s
      }: any = ((this as any).getProps as any)(),
      i: any = ((this as any).visualElement as any).projection && !(((this as any).visualElement as any).projection as any).layout ? ((((this as any).visualElement as any).projection as any).measure as any)(!1) : ((this as any).visualElement as any).projection?.layout,
      n: any = (this as any).constraints;
    t && (vt as any)(t) ? (this as any).constraints || ((this as any).constraints = ((this as any).resolveRefConstraints as any)()) : t && i ? (this as any).constraints = (na as any)((i as any).layoutBox, t) : (this as any).constraints = !1, (this as any).elastic = (la as any)(s), (n as any) !== ((this as any).constraints as any) && i && (this as any).constraints && !(this as any).hasMutatedConstraints && (j as any)((r: any): any => {
      ((this as any).constraints as any) !== (!1 as any) && ((this as any).getAxisMotionValue as any)(r) && (((this as any).constraints as any)[r] = (aa as any)(((i as any).layoutBox as any)[r], ((this as any).constraints as any)[r]));
    });
  }
  resolveRefConstraints(): any {
    const {
      dragConstraints: t,
      onMeasureDragConstraints: s
    }: any = ((this as any).getProps as any)();
    if (!t || !(vt as any)(t)) return !1;
    const i: any = (t as any).current,
      {
        projection: n
      }: any = (this as any).visualElement;
    if (!n || !(n as any).layout) return !1;
    const r: any = (dr as any)(i, (n as any).root, (((this as any).visualElement as any).getTransformPagePoint as any)());
    let o: any = (oa as any)(((n as any).layout as any).layoutBox, r);
    if (s) {
      const a: any = (s as any)((cr as any)(o));
      (this as any).hasMutatedConstraints = !!a, a && (o = (Ri as any)(a));
    }
    return o;
  }
  startAnimation(t: any): any {
    const {
        drag: s,
        dragMomentum: i,
        dragElastic: n,
        dragTransition: r,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a
      }: any = ((this as any).getProps as any)(),
      l: any = (this as any).constraints || {},
      c: any = (j as any)((u: any): any => {
        if (!(xt as any)(u, s, (this as any).currentDirection)) return;
        let h: any = l && (l as any)[u] || {};
        o && (h = {
          min: 0,
          max: 0
        });
        const f: any = n ? 200 : 1e6,
          d: any = n ? 40 : 1e7,
          m: any = {
            type: "inertia",
            velocity: i ? (t as any)[u] : 0,
            bounceStiffness: f,
            bounceDamping: d,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...r,
            ...h
          };
        return ((this as any).startAxisValueAnimation as any)(u, m);
      });
    return ((((Promise as any).all as any)(c) as any).then as any)(a);
  }
  startAxisValueAnimation(t: any, s: any): any {
    const i: any = ((this as any).getAxisMotionValue as any)(t);
    return (ae as any)((this as any).visualElement, t), ((i as any).start as any)((Me as any)(t, i, 0, s, (this as any).visualElement, !1));
  }
  stopAnimation(): any {
    (j as any)((t: any): any => ((((this as any).getAxisMotionValue as any)(t) as any).stop as any)());
  }
  pauseAnimation(): any {
    (j as any)((t: any): any => (((this as any).getAxisMotionValue as any)(t) as any).animation?.pause());
  }
  getAnimationState(t: any): any {
    return (((this as any).getAxisMotionValue as any)(t) as any).animation?.state;
  }
  getAxisMotionValue(t: any): any {
    const s: any = `_drag${((t as any).toUpperCase as any)()}`,
      i: any = (((this as any).visualElement as any).getProps as any)(),
      n: any = (i as any)[s];
    return n || (((this as any).visualElement as any).getValue as any)(t, ((i as any).initial ? ((i as any).initial as any)[t] : void 0) || 0);
  }
  snapToCursor(t: any): any {
    (j as any)((s: any): any => {
      const {
        drag: i
      }: any = ((this as any).getProps as any)();
      if (!(xt as any)(s, i, (this as any).currentDirection)) return;
      const {
          projection: n
        }: any = (this as any).visualElement,
        r: any = ((this as any).getAxisMotionValue as any)(s);
      if (n && (n as any).layout) {
        const {
          min: o,
          max: a
        }: any = (((n as any).layout as any).layoutBox as any)[s];
        ((r as any).set as any)(((t as any)[s] as any) - ((D as any)(o, a, .5) as any));
      }
    });
  }
  scalePositionWithinConstraints(): any {
    if (!((this as any).visualElement as any).current) return;
    const {
        drag: t,
        dragConstraints: s
      }: any = ((this as any).getProps as any)(),
      {
        projection: i
      }: any = (this as any).visualElement;
    if (!(vt as any)(s) || !i || !(this as any).constraints) return;
    ((this as any).stopAnimation as any)();
    const n: any = {
      x: 0,
      y: 0
    };
    (j as any)((o: any): any => {
      const a: any = ((this as any).getAxisMotionValue as any)(o);
      if (a && ((this as any).constraints as any) !== (!1 as any)) {
        const l: any = ((a as any).get as any)();
        (n as any)[o] = (ra as any)({
          min: l,
          max: l
        }, ((this as any).constraints as any)[o]);
      }
    });
    const {
      transformTemplate: r
    }: any = (((this as any).visualElement as any).getProps as any)();
    ((((this as any).visualElement as any).current as any).style as any).transform = r ? (r as any)({}, "") : "none", (i as any).root && (((i as any).root as any).updateScroll as any)(), ((i as any).updateLayout as any)(), ((this as any).resolveConstraints as any)(), (j as any)((o: any): any => {
      if (!(xt as any)(o, t, null)) return;
      const a: any = ((this as any).getAxisMotionValue as any)(o),
        {
          min: l,
          max: c
        }: any = ((this as any).constraints as any)[o];
      ((a as any).set as any)((D as any)(l, c, (n as any)[o]));
    });
  }
  addListeners(): any {
    if (!((this as any).visualElement as any).current) return;
    ((ua as any).set as any)((this as any).visualElement, this);
    const t: any = ((this as any).visualElement as any).current,
      s: any = (ct as any)(t, "pointerdown", (l: any): any => {
        const {
          drag: c,
          dragListener: u = !0
        }: any = ((this as any).getProps as any)();
        c && u && ((this as any).start as any)(l);
      }),
      i: any = (): any => {
        const {
          dragConstraints: l
        }: any = ((this as any).getProps as any)();
        (vt as any)(l) && (l as any).current && ((this as any).constraints = ((this as any).resolveRefConstraints as any)());
      },
      {
        projection: n
      }: any = (this as any).visualElement,
      r: any = ((n as any).addEventListener as any)("measure", i);
    n && !(n as any).layout && ((n as any).root && (((n as any).root as any).updateScroll as any)(), ((n as any).updateLayout as any)()), ((S as any).read as any)(i);
    const o: any = (pt as any)(window, "resize", (): any => ((this as any).scalePositionWithinConstraints as any)()),
      a: any = ((n as any).addEventListener as any)("didUpdate", ({
        delta: l,
        hasLayoutChanged: c
      }: any): any => {
        (this as any).isDragging && c && ((j as any)((u: any): any => {
          const h: any = ((this as any).getAxisMotionValue as any)(u);
          h && (((this as any).originPoint as any)[u] += ((l as any)[u] as any).translate, ((h as any).set as any)((((h as any).get as any)() as any) + (((l as any)[u] as any).translate as any)));
        }), (((this as any).visualElement as any).render as any)());
      });
    return (): any => {
      (o as any)(), (s as any)(), (r as any)(), a && (a as any)();
    };
  }
  getProps(): any {
    const t: any = (((this as any).visualElement as any).getProps as any)(),
      {
        drag: s = !1,
        dragDirectionLock: i = !1,
        dragPropagation: n = !1,
        dragConstraints: r = !1,
        dragElastic: o = ue,
        dragMomentum: a = !0
      }: any = t;
    return {
      ...t,
      drag: s,
      dragDirectionLock: i,
      dragPropagation: n,
      dragConstraints: r,
      dragElastic: o,
      dragMomentum: a
    };
  }
}
function xt(this: any, e: any, t: any, s: any): any {
  return ((t as any) === (!0 as any) || (t as any) === (e as any)) && ((s as any) === (null as any) || (s as any) === (e as any));
}
function ha(this: any, e: any, t: any = 10): any {
  let s: any = null;
  return (((Math as any).abs as any)((e as any).y) as any) > (t as any) ? s = "y" : (((Math as any).abs as any)((e as any).x) as any) > (t as any) && (s = "x"), s;
}
class fa extends (z as any) {
  declare controls: any;
  declare removeListeners: any;
  declare removeGroupControls: any;
  [key: string]: any;
  constructor(t: any) {
    super(t), (this as any).removeGroupControls = U, (this as any).removeListeners = U, (this as any).controls = new (ca as any)(t);
  }
  mount(): any {
    const {
      dragControls: t
    }: any = (((this as any).node as any).getProps as any)();
    t && ((this as any).removeGroupControls = ((t as any).subscribe as any)((this as any).controls)), (this as any).removeListeners = (((this as any).controls as any).addListeners as any)() || U;
  }
  update(): any {
    const {
        dragControls: t
      }: any = (((this as any).node as any).getProps as any)(),
      {
        dragControls: s
      }: any = ((this as any).node as any).prevProps || {};
    (t as any) !== (s as any) && (((this as any).removeGroupControls as any)(), t && ((this as any).removeGroupControls = ((t as any).subscribe as any)((this as any).controls)));
  }
  unmount(): any {
    ((this as any).removeGroupControls as any)(), ((this as any).removeListeners as any)();
  }
}
const gs: any = (e: any): any => (t: any, s: any): any => {
  e && ((S as any).postRender as any)((): any => (e as any)(t, s));
};
class da extends (z as any) {
  declare session: any;
  declare removePointerDownListener: any;
  [key: string]: any;
  constructor() {
    super(...arguments), (this as any).removePointerDownListener = U;
  }
  onPointerDown(t: any): any {
    (this as any).session = new (zi as any)(t, ((this as any).createPanHandlers as any)(), {
      transformPagePoint: (((this as any).node as any).getTransformPagePoint as any)(),
      contextWindow: ($i as any)((this as any).node)
    });
  }
  createPanHandlers(): any {
    const {
      onPanSessionStart: t,
      onPanStart: s,
      onPan: i,
      onPanEnd: n
    }: any = (((this as any).node as any).getProps as any)();
    return {
      onSessionStart: (gs as any)(t),
      onStart: (gs as any)(s),
      onMove: i,
      onEnd: (r: any, o: any): any => {
        delete (this as any).session, n && ((S as any).postRender as any)((): any => (n as any)(r, o));
      }
    };
  }
  mount(): any {
    (this as any).removePointerDownListener = (ct as any)(((this as any).node as any).current, "pointerdown", (t: any): any => ((this as any).onPointerDown as any)(t));
  }
  update(): any {
    (this as any).session && (((this as any).session as any).updateHandlers as any)(((this as any).createPanHandlers as any)());
  }
  unmount(): any {
    ((this as any).removePointerDownListener as any)(), (this as any).session && (((this as any).session as any).end as any)();
  }
}
const Vt: any = {
  hasAnimatedSinceResize: !0,
  hasEverUpdated: !1
};
let Nt: any = !1;
class pa extends ((St as any).Component as any) {
  [key: string]: any;
  static d: any = 2231271043;
  componentDidMount(): any {
    const {
        visualElement: t,
        layoutGroup: s,
        switchLayoutGroup: i,
        layoutId: n
      }: any = (this as any).props,
      {
        projection: r
      }: any = t;
    r && ((s as any).group && (((s as any).group as any).add as any)(r), i && (i as any).register && n && ((i as any).register as any)(r), Nt && (((r as any).root as any).didUpdate as any)(), ((r as any).addEventListener as any)("animationComplete", (): any => {
      ((this as any).safeToRemove as any)();
    }), ((r as any).setOptions as any)({
      ...(r as any).options,
      onExitComplete: (): any => ((this as any).safeToRemove as any)()
    })), (Vt as any).hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t: any): any {
    const {
        layoutDependency: s,
        visualElement: i,
        drag: n,
        isPresent: r
      }: any = (this as any).props,
      {
        projection: o
      }: any = i;
    return o && ((o as any).isPresent = r, Nt = !0, n || ((t as any).layoutDependency as any) !== (s as any) || (s as any) === (void 0 as any) || ((t as any).isPresent as any) !== (r as any) ? ((o as any).willUpdate as any)() : ((this as any).safeToRemove as any)(), ((t as any).isPresent as any) !== (r as any) && (r ? ((o as any).promote as any)() : ((o as any).relegate as any)() || ((S as any).postRender as any)((): any => {
      const a: any = ((o as any).getStack as any)();
      (!a || !((a as any).members as any).length) && ((this as any).safeToRemove as any)();
    }))), null;
  }
  componentDidUpdate(): any {
    const {
      projection: t
    }: any = ((this as any).props as any).visualElement;
    t && ((((t as any).root as any).didUpdate as any)(), ((we as any).postRender as any)((): any => {
      !(t as any).currentAnimation && ((t as any).isLead as any)() && ((this as any).safeToRemove as any)();
    }));
  }
  componentWillUnmount(): any {
    const {
        visualElement: t,
        layoutGroup: s,
        switchLayoutGroup: i
      }: any = (this as any).props,
      {
        projection: n
      }: any = t;
    Nt = !0, n && (((n as any).scheduleCheckAfterUnmount as any)(), s && (s as any).group && (((s as any).group as any).remove as any)(n), i && (i as any).deregister && ((i as any).deregister as any)(n));
  }
  safeToRemove(): any {
    const {
      safeToRemove: t
    }: any = (this as any).props;
    t && (t as any)();
  }
  render(): any {
    return null;
  }
}
function Ee(this: any, e: any): any {
  ((Reflect as any).set as any)(Ee, "d", 4040145168);
  const [t, s]: any = (Dn as any)(),
    i: any = ((St as any).useContext as any)(wn);
  return ((Cn as any).jsx as any)(pa, {
    ...e,
    layoutGroup: i,
    switchLayoutGroup: ((St as any).useContext as any)(Mn),
    isPresent: t,
    safeToRemove: s
  });
}
function ma(this: any, e: any, t: any, s: any): any {
  const i: any = (W as any)(e) ? e : (rt as any)(e);
  return ((i as any).start as any)((Me as any)("", i, t, s)), (i as any).animation;
}
const ga: any = (e: any, t: any): any => ((e as any).depth as any) - ((t as any).depth as any);
class ya {
  declare isDirty: any;
  declare children: any;
  [key: string]: any;
  constructor() {
    (this as any).children = [], (this as any).isDirty = !1;
  }
  add(t: any): any {
    (de as any)((this as any).children, t), (this as any).isDirty = !0;
  }
  remove(t: any): any {
    (pe as any)((this as any).children, t), (this as any).isDirty = !0;
  }
  forEach(t: any): any {
    (this as any).isDirty && (((this as any).children as any).sort as any)(ga), (this as any).isDirty = !1, (((this as any).children as any).forEach as any)(t);
  }
}
function va(this: any, e: any, t: any): any {
  const s: any = ((k as any).now as any)(),
    i: any = ({
      timestamp: n
    }: any): any => {
      const r: any = (n as any) - (s as any);
      (r as any) >= (t as any) && (($ as any)(i), (e as any)((r as any) - (t as any)));
    };
  return ((S as any).setup as any)(i, !0), (): any => ($ as any)(i);
}
const Xi: any = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  Ta: any = (Xi as any).length,
  ys: any = (e: any): any => (typeof e as any) == ("string" as any) ? (parseFloat as any)(e) : e,
  vs: any = (e: any): any => (typeof e as any) == ("number" as any) || ((fe as any).test as any)(e);
function xa(this: any, e: any, t: any, s: any, i: any, n: any, r: any): any {
  n ? ((e as any).opacity = (D as any)(0, (s as any).opacity ?? 1, (Pa as any)(i)), (e as any).opacityExit = (D as any)((t as any).opacity ?? 1, 0, (Aa as any)(i))) : r && ((e as any).opacity = (D as any)((t as any).opacity ?? 1, (s as any).opacity ?? 1, i));
  for (let o: any = 0; (o as any) < (Ta as any); o++) {
    const a: any = `border${(Xi as any)[o]}Radius`;
    let l: any = (Ts as any)(t, a),
      c: any = (Ts as any)(s, a);
    if ((l as any) === (void 0 as any) && (c as any) === (void 0 as any)) continue;
    l || (l = 0), c || (c = 0), (l as any) === (0 as any) || (c as any) === (0 as any) || ((vs as any)(l) as any) === ((vs as any)(c) as any) ? ((e as any)[a] = ((Math as any).max as any)((D as any)((ys as any)(l), (ys as any)(c), i), 0), (((ft as any).test as any)(c) || ((ft as any).test as any)(l)) && ((e as any)[a] += "%")) : (e as any)[a] = c;
  }
  ((t as any).rotate || (s as any).rotate) && ((e as any).rotate = (D as any)((t as any).rotate || 0, (s as any).rotate || 0, i));
}
function Ts(this: any, e: any, t: any): any {
  return ((e as any)[t] as any) !== (void 0 as any) ? (e as any)[t] : (e as any).borderRadius;
}
const Pa: any = (Yi as any)(0, .5, oi),
  Aa: any = (Yi as any)(.5, .95, U);
function Yi(this: any, e: any, t: any, s: any): any {
  return (i: any): any => (i as any) < (e as any) ? 0 : (i as any) > (t as any) ? 1 : (s as any)((dt as any)(e, t, i));
}
function xs(this: any, e: any, t: any): any {
  (e as any).min = (t as any).min, (e as any).max = (t as any).max;
}
function N(this: any, e: any, t: any): any {
  (xs as any)((e as any).x, (t as any).x), (xs as any)((e as any).y, (t as any).y);
}
function Ps(this: any, e: any, t: any): any {
  (e as any).translate = (t as any).translate, (e as any).scale = (t as any).scale, (e as any).originPoint = (t as any).originPoint, (e as any).origin = (t as any).origin;
}
function As(this: any, e: any, t: any, s: any, i: any, n: any): any {
  return e -= t, e = (Ct as any)(e, (1 as any) / (s as any), i), (n as any) !== (void 0 as any) && (e = (Ct as any)(e, (1 as any) / (n as any), i)), e;
}
function Va(this: any, e: any, t: any = 0, s: any = 1, i: any = .5, n: any, r: any = e, o: any = e): any {
  if (((ft as any).test as any)(t) && (t = (parseFloat as any)(t), t = ((D as any)((o as any).min, (o as any).max, (t as any) / (100 as any)) as any) - ((o as any).min as any)), (typeof t as any) != ("number" as any)) return;
  let a: any = (D as any)((r as any).min, (r as any).max, i);
  (e as any) === (r as any) && (a -= t), (e as any).min = (As as any)((e as any).min, t, s, a, n), (e as any).max = (As as any)((e as any).max, t, s, a, n);
}
function Vs(this: any, e: any, t: any, [s, i, n]: any, r: any, o: any): any {
  (Va as any)(e, (t as any)[s], (t as any)[i], (t as any)[n], (t as any).scale, r, o);
}
const Sa: any = ["x", "scaleX", "originX"],
  ba: any = ["y", "scaleY", "originY"];
function Ss(this: any, e: any, t: any, s: any, i: any): any {
  (Vs as any)((e as any).x, t, Sa, s ? (s as any).x : void 0, i ? (i as any).x : void 0), (Vs as any)((e as any).y, t, ba, s ? (s as any).y : void 0, i ? (i as any).y : void 0);
}
function bs(this: any, e: any): any {
  return ((e as any).translate as any) === (0 as any) && ((e as any).scale as any) === (1 as any);
}
function qi(this: any, e: any): any {
  return (bs as any)((e as any).x) && (bs as any)((e as any).y);
}
function Ds(this: any, e: any, t: any): any {
  return ((e as any).min as any) === ((t as any).min as any) && ((e as any).max as any) === ((t as any).max as any);
}
function Da(this: any, e: any, t: any): any {
  return (Ds as any)((e as any).x, (t as any).x) && (Ds as any)((e as any).y, (t as any).y);
}
function ws(this: any, e: any, t: any): any {
  return (((Math as any).round as any)((e as any).min) as any) === (((Math as any).round as any)((t as any).min) as any) && (((Math as any).round as any)((e as any).max) as any) === (((Math as any).round as any)((t as any).max) as any);
}
function Zi(this: any, e: any, t: any): any {
  return (ws as any)((e as any).x, (t as any).x) && (ws as any)((e as any).y, (t as any).y);
}
function Cs(this: any, e: any): any {
  return ((R as any)((e as any).x) as any) / ((R as any)((e as any).y) as any);
}
function Ms(this: any, e: any, t: any): any {
  return ((e as any).translate as any) === ((t as any).translate as any) && ((e as any).scale as any) === ((t as any).scale as any) && ((e as any).originPoint as any) === ((t as any).originPoint as any);
}
class wa {
  declare lead: any;
  declare prevLead: any;
  declare members: any;
  [key: string]: any;
  constructor() {
    (this as any).members = [];
  }
  add(t: any): any {
    (de as any)((this as any).members, t), ((t as any).scheduleRender as any)();
  }
  remove(t: any): any {
    if ((pe as any)((this as any).members, t), (t as any) === ((this as any).prevLead as any) && ((this as any).prevLead = void 0), (t as any) === ((this as any).lead as any)) {
      const s: any = ((this as any).members as any)[(((this as any).members as any).length as any) - (1 as any)];
      s && ((this as any).promote as any)(s);
    }
  }
  relegate(t: any): any {
    const s: any = (((this as any).members as any).findIndex as any)((n: any): any => (t as any) === (n as any));
    if ((s as any) === (0 as any)) return !1;
    let i: any;
    for (let n: any = s; (n as any) >= (0 as any); n--) {
      const r: any = ((this as any).members as any)[n];
      if (((r as any).isPresent as any) !== (!1 as any)) {
        i = r;
        break;
      }
    }
    return i ? (((this as any).promote as any)(i), !0) : !1;
  }
  promote(t: any, s: any): any {
    const i: any = (this as any).lead;
    if ((t as any) !== (i as any) && ((this as any).prevLead = i, (this as any).lead = t, ((t as any).show as any)(), i)) {
      (i as any).instance && ((i as any).scheduleRender as any)(), ((t as any).scheduleRender as any)(), (t as any).resumeFrom = i, s && (((t as any).resumeFrom as any).preserveOpacity = !0), (i as any).snapshot && ((t as any).snapshot = (i as any).snapshot, ((t as any).snapshot as any).latestValues = (i as any).animationValues || (i as any).latestValues), (t as any).root && ((t as any).root as any).isUpdating && ((t as any).isLayoutDirty = !0);
      const {
        crossfade: n
      }: any = (t as any).options;
      (n as any) === (!1 as any) && ((i as any).hide as any)();
    }
  }
  exitAnimationComplete(): any {
    (((this as any).members as any).forEach as any)((t: any): any => {
      const {
        options: s,
        resumingFrom: i
      }: any = t;
      (s as any).onExitComplete && ((s as any).onExitComplete as any)(), i && ((i as any).options as any).onExitComplete && (((i as any).options as any).onExitComplete as any)();
    });
  }
  scheduleRender(): any {
    (((this as any).members as any).forEach as any)((t: any): any => {
      (t as any).instance && ((t as any).scheduleRender as any)(!1);
    });
  }
  removeLeadSnapshot(): any {
    (this as any).lead && ((this as any).lead as any).snapshot && (((this as any).lead as any).snapshot = void 0);
  }
}
function Ca(this: any, e: any, t: any, s: any): any {
  let i: any = "";
  const n: any = (((e as any).x as any).translate as any) / ((t as any).x as any),
    r: any = (((e as any).y as any).translate as any) / ((t as any).y as any),
    o: any = s?.z || 0;
  if ((n || r || o) && (i = `translate3d(${n}px, ${r}px, ${o}px) `), (((t as any).x as any) !== (1 as any) || ((t as any).y as any) !== (1 as any)) && (i += `scale(${(1 as any) / ((t as any).x as any)}, ${(1 as any) / ((t as any).y as any)}) `), s) {
    const {
      transformPerspective: c,
      rotate: u,
      rotateX: h,
      rotateY: f,
      skewX: d,
      skewY: m
    }: any = s;
    c && (i = `perspective(${c}px) ${i}`), u && (i += `rotate(${u}deg) `), h && (i += `rotateX(${h}deg) `), f && (i += `rotateY(${f}deg) `), d && (i += `skewX(${d}deg) `), m && (i += `skewY(${m}deg) `);
  }
  const a: any = (((e as any).x as any).scale as any) * ((t as any).x as any),
    l: any = (((e as any).y as any).scale as any) * ((t as any).y as any);
  return ((a as any) !== (1 as any) || (l as any) !== (1 as any)) && (i += `scale(${a}, ${l})`), i || "none";
}
const Kt: any = ["", "X", "Y", "Z"],
  Ma: number = 1e3;
let Ea: any = 0;
function Gt(this: any, e: any, t: any, s: any, i: any): any {
  const {
    latestValues: n
  }: any = t;
  (n as any)[e] && ((s as any)[e] = (n as any)[e], ((t as any).setStaticValue as any)(e, 0), i && ((i as any)[e] = 0));
}
function Ji(this: any, e: any): any {
  if ((e as any).hasCheckedOptimisedAppear = !0, ((e as any).root as any) === (e as any)) return;
  const {
    visualElement: t
  }: any = (e as any).options;
  if (!t) return;
  const s: any = (Oi as any)(t);
  if (((window as any).MotionHasOptimisedAnimation as any)(s, "transform")) {
    const {
      layout: n,
      layoutId: r
    }: any = (e as any).options;
    ((window as any).MotionCancelOptimisedAnimation as any)(s, "transform", S, !(n || r));
  }
  const {
    parent: i
  }: any = e;
  i && !(i as any).hasCheckedOptimisedAppear && (Ji as any)(i);
}
function Qi(this: any, {
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: s,
  checkIsScrollRoot: i,
  resetTransform: n
}: any): any {
  return class {
    declare resumeFrom: any;
    declare currentAnimation: any;
    declare motionValue: any;
    declare pendingAnimation: any;
    declare animationValues: any;
    declare mixTargetDelta: any;
    declare projectionDeltaWithTransform: any;
    declare prevProjectionDelta: any;
    declare relativeTargetOrigin: any;
    declare relativeParent: any;
    declare attemptToResolveRelativeTarget: any;
    declare targetWithTransforms: any;
    declare targetDelta: any;
    declare scroll: any;
    declare projectionDelta: any;
    declare layoutCorrected: any;
    declare layout: any;
    declare snapshot: any;
    declare prevTransformTemplateValue: any;
    declare targetLayout: any;
    declare resumingFrom: any;
    declare relativeTarget: any;
    declare target: any;
    declare instance: any;
    declare nodes: any;
    declare depth: any;
    declare parent: any;
    declare path: any;
    declare root: any;
    declare latestValues: any;
    declare sharedNodes: any;
    declare animationProgress: any;
    declare isVisible: any;
    declare hasProjected: any;
    declare linkedParentVersion: any;
    declare resolvedRelativeTargetAt: any;
    declare updateProjection: any;
    declare checkUpdateFailed: any;
    declare projectionUpdateScheduled: any;
    declare scheduleUpdate: any;
    declare updateScheduled: any;
    declare layoutVersion: any;
    declare hasTreeAnimated: any;
    declare eventHandlers: any;
    declare treeScale: any;
    declare hasCheckedOptimisedAppear: any;
    declare shouldResetTransform: any;
    declare needsReset: any;
    declare isSVG: any;
    declare isUpdating: any;
    declare updateBlockedByResize: any;
    declare updateManuallyBlocked: any;
    declare isTransformDirty: any;
    declare isSharedProjectionDirty: any;
    declare isProjectionDirty: any;
    declare isLayoutDirty: any;
    declare isAnimationBlocked: any;
    declare isTreeAnimating: any;
    declare options: any;
    declare children: any;
    declare animationCommitId: any;
    declare animationId: any;
    declare id: any;
    [key: string]: any;
    constructor(o: any = {}, a: any = t?.()) {
      (this as any).id = Ea++, (this as any).animationId = 0, (this as any).animationCommitId = 0, (this as any).children = new (Set as any)(), (this as any).options = {}, (this as any).isTreeAnimating = !1, (this as any).isAnimationBlocked = !1, (this as any).isLayoutDirty = !1, (this as any).isProjectionDirty = !1, (this as any).isSharedProjectionDirty = !1, (this as any).isTransformDirty = !1, (this as any).updateManuallyBlocked = !1, (this as any).updateBlockedByResize = !1, (this as any).isUpdating = !1, (this as any).isSVG = !1, (this as any).needsReset = !1, (this as any).shouldResetTransform = !1, (this as any).hasCheckedOptimisedAppear = !1, (this as any).treeScale = {
        x: 1,
        y: 1
      }, (this as any).eventHandlers = new (Map as any)(), (this as any).hasTreeAnimated = !1, (this as any).layoutVersion = 0, (this as any).updateScheduled = !1, (this as any).scheduleUpdate = (): any => ((this as any).update as any)(), (this as any).projectionUpdateScheduled = !1, (this as any).checkUpdateFailed = (): any => {
        (this as any).isUpdating && ((this as any).isUpdating = !1, ((this as any).clearAllSnapshots as any)());
      }, (this as any).updateProjection = (): any => {
        (this as any).projectionUpdateScheduled = !1, (((this as any).nodes as any).forEach as any)(ka), (((this as any).nodes as any).forEach as any)(ja), (((this as any).nodes as any).forEach as any)(Oa), (((this as any).nodes as any).forEach as any)(Fa);
      }, (this as any).resolvedRelativeTargetAt = 0, (this as any).linkedParentVersion = 0, (this as any).hasProjected = !1, (this as any).isVisible = !0, (this as any).animationProgress = 0, (this as any).sharedNodes = new (Map as any)(), (this as any).latestValues = o, (this as any).root = a ? (a as any).root || a : this, (this as any).path = a ? [...(a as any).path, a] : [], (this as any).parent = a, (this as any).depth = a ? ((a as any).depth as any) + (1 as any) : 0;
      for (let l: any = 0; (l as any) < (((this as any).path as any).length as any); l++) (((this as any).path as any)[l] as any).shouldResetTransform = !0;
      ((this as any).root as any) === (this as any) && ((this as any).nodes = new (ya as any)());
    }
    addEventListener(o: any, a: any): any {
      return (((this as any).eventHandlers as any).has as any)(o) || (((this as any).eventHandlers as any).set as any)(o, new (ye as any)()), (((((this as any).eventHandlers as any).get as any)(o) as any).add as any)(a);
    }
    notifyListeners(o: any, ...a: any): any {
      const l: any = (((this as any).eventHandlers as any).get as any)(o);
      l && ((l as any).notify as any)(...a);
    }
    hasListeners(o: any): any {
      return (((this as any).eventHandlers as any).has as any)(o);
    }
    mount(o: any): any {
      if ((this as any).instance) return;
      (this as any).isSVG = (Ei as any)(o) && !(ar as any)(o), (this as any).instance = o;
      const {
        layoutId: a,
        layout: l,
        visualElement: c
      }: any = (this as any).options;
      if (c && !(c as any).current && ((c as any).mount as any)(o), ((((this as any).root as any).nodes as any).add as any)(this), (this as any).parent && ((((this as any).parent as any).children as any).add as any)(this), ((this as any).root as any).hasTreeAnimated && (l || a) && ((this as any).isLayoutDirty = !0), e) {
        let u: any,
          h: any = 0;
        const f: any = (): any => ((this as any).root as any).updateBlockedByResize = !1;
        ((S as any).read as any)((): any => {
          h = (window as any).innerWidth;
        }), (e as any)(o, (): any => {
          const d: any = (window as any).innerWidth;
          (d as any) !== (h as any) && (h = d, ((this as any).root as any).updateBlockedByResize = !0, u && (u as any)(), u = (va as any)(f, 250), (Vt as any).hasAnimatedSinceResize && ((Vt as any).hasAnimatedSinceResize = !1, (((this as any).nodes as any).forEach as any)(Ls)));
        });
      }
      a && (((this as any).root as any).registerSharedNode as any)(a, this), (((this as any).options as any).animate as any) !== (!1 as any) && c && (a || l) && ((this as any).addEventListener as any)("didUpdate", ({
        delta: u,
        hasLayoutChanged: h,
        hasRelativeLayoutChanged: f,
        layout: d
      }: any): any => {
        if (((this as any).isTreeAnimationBlocked as any)()) {
          (this as any).target = void 0, (this as any).relativeTarget = void 0;
          return;
        }
        const m: any = ((this as any).options as any).transition || ((c as any).getDefaultTransition as any)() || Wa,
          {
            onLayoutAnimationStart: v,
            onLayoutAnimationComplete: y
          }: any = ((c as any).getProps as any)(),
          p: any = !(this as any).targetLayout || !(Zi as any)((this as any).targetLayout, d),
          x: any = !h && f;
        if (((this as any).options as any).layoutRoot || (this as any).resumeFrom || x || h && (p || !(this as any).currentAnimation)) {
          (this as any).resumeFrom && ((this as any).resumingFrom = (this as any).resumeFrom, ((this as any).resumingFrom as any).resumingFrom = void 0);
          const g: any = {
            ...(De as any)(m, "layout"),
            onPlay: v,
            onComplete: y
          };
          ((c as any).shouldReduceMotion || ((this as any).options as any).layoutRoot) && ((g as any).delay = 0, (g as any).type = !1), ((this as any).startAnimation as any)(g), ((this as any).setAnimationOrigin as any)(u, x);
        } else h || (Ls as any)(this), ((this as any).isLead as any)() && ((this as any).options as any).onExitComplete && (((this as any).options as any).onExitComplete as any)();
        (this as any).targetLayout = d;
      });
    }
    unmount(): any {
      ((this as any).options as any).layoutId && ((this as any).willUpdate as any)(), ((((this as any).root as any).nodes as any).remove as any)(this);
      const o: any = ((this as any).getStack as any)();
      o && ((o as any).remove as any)(this), (this as any).parent && ((((this as any).parent as any).children as any).delete as any)(this), (this as any).instance = void 0, (((this as any).eventHandlers as any).clear as any)(), ($ as any)((this as any).updateProjection);
    }
    blockUpdate(): any {
      (this as any).updateManuallyBlocked = !0;
    }
    unblockUpdate(): any {
      (this as any).updateManuallyBlocked = !1;
    }
    isUpdateBlocked(): any {
      return (this as any).updateManuallyBlocked || (this as any).updateBlockedByResize;
    }
    isTreeAnimationBlocked(): any {
      return (this as any).isAnimationBlocked || (this as any).parent && (((this as any).parent as any).isTreeAnimationBlocked as any)() || !1;
    }
    startUpdate(): any {
      ((this as any).isUpdateBlocked as any)() || ((this as any).isUpdating = !0, (this as any).nodes && (((this as any).nodes as any).forEach as any)(Ua), (this as any).animationId++);
    }
    getTransformTemplate(): any {
      const {
        visualElement: o
      }: any = (this as any).options;
      return o && (((o as any).getProps as any)() as any).transformTemplate;
    }
    willUpdate(o: any = !0): any {
      if (((this as any).root as any).hasTreeAnimated = !0, (((this as any).root as any).isUpdateBlocked as any)()) {
        ((this as any).options as any).onExitComplete && (((this as any).options as any).onExitComplete as any)();
        return;
      }
      if ((window as any).MotionCancelOptimisedAnimation && !(this as any).hasCheckedOptimisedAppear && (Ji as any)(this), !((this as any).root as any).isUpdating && (((this as any).root as any).startUpdate as any)(), (this as any).isLayoutDirty) return;
      (this as any).isLayoutDirty = !0;
      for (let u: any = 0; (u as any) < (((this as any).path as any).length as any); u++) {
        const h: any = ((this as any).path as any)[u];
        (h as any).shouldResetTransform = !0, ((h as any).updateScroll as any)("snapshot"), ((h as any).options as any).layoutRoot && ((h as any).willUpdate as any)(!1);
      }
      const {
        layoutId: a,
        layout: l
      }: any = (this as any).options;
      if ((a as any) === (void 0 as any) && !l) return;
      const c: any = ((this as any).getTransformTemplate as any)();
      (this as any).prevTransformTemplateValue = c ? (c as any)((this as any).latestValues, "") : void 0, ((this as any).updateSnapshot as any)(), o && ((this as any).notifyListeners as any)("willUpdate");
    }
    update(): any {
      if ((this as any).updateScheduled = !1, ((this as any).isUpdateBlocked as any)()) {
        ((this as any).unblockUpdate as any)(), ((this as any).clearAllSnapshots as any)(), (((this as any).nodes as any).forEach as any)(Es);
        return;
      }
      if (((this as any).animationId as any) <= ((this as any).animationCommitId as any)) {
        (((this as any).nodes as any).forEach as any)(Rs);
        return;
      }
      (this as any).animationCommitId = (this as any).animationId, (this as any).isUpdating ? ((this as any).isUpdating = !1, (((this as any).nodes as any).forEach as any)(Ia), (((this as any).nodes as any).forEach as any)(Ra), (((this as any).nodes as any).forEach as any)(La)) : (((this as any).nodes as any).forEach as any)(Rs), ((this as any).clearAllSnapshots as any)();
      const a: any = ((k as any).now as any)();
      (E as any).delta = (Q as any)(0, (1e3 as any) / (60 as any), (a as any) - ((E as any).timestamp as any)), (E as any).timestamp = a, (E as any).isProcessing = !0, (((Lt as any).update as any).process as any)(E), (((Lt as any).preRender as any).process as any)(E), (((Lt as any).render as any).process as any)(E), (E as any).isProcessing = !1;
    }
    didUpdate(): any {
      (this as any).updateScheduled || ((this as any).updateScheduled = !0, ((we as any).read as any)((this as any).scheduleUpdate));
    }
    clearAllSnapshots(): any {
      (((this as any).nodes as any).forEach as any)(Ba), (((this as any).sharedNodes as any).forEach as any)(Na);
    }
    scheduleUpdateProjection(): any {
      (this as any).projectionUpdateScheduled || ((this as any).projectionUpdateScheduled = !0, ((S as any).preRender as any)((this as any).updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount(): any {
      ((S as any).postRender as any)((): any => {
        (this as any).isLayoutDirty ? (((this as any).root as any).didUpdate as any)() : (((this as any).root as any).checkUpdateFailed as any)();
      });
    }
    updateSnapshot(): any {
      (this as any).snapshot || !(this as any).instance || ((this as any).snapshot = ((this as any).measure as any)(), (this as any).snapshot && !(R as any)((((this as any).snapshot as any).measuredBox as any).x) && !(R as any)((((this as any).snapshot as any).measuredBox as any).y) && ((this as any).snapshot = void 0));
    }
    updateLayout(): any {
      if (!(this as any).instance || (((this as any).updateScroll as any)(), !(((this as any).options as any).alwaysMeasureLayout && ((this as any).isLead as any)()) && !(this as any).isLayoutDirty)) return;
      if ((this as any).resumeFrom && !((this as any).resumeFrom as any).instance) for (let l: any = 0; (l as any) < (((this as any).path as any).length as any); l++) ((((this as any).path as any)[l] as any).updateScroll as any)();
      const o: any = (this as any).layout;
      (this as any).layout = ((this as any).measure as any)(!1), (this as any).layoutVersion++, (this as any).layoutCorrected = (C as any)(), (this as any).isLayoutDirty = !1, (this as any).projectionDelta = void 0, ((this as any).notifyListeners as any)("measure", ((this as any).layout as any).layoutBox);
      const {
        visualElement: a
      }: any = (this as any).options;
      a && ((a as any).notify as any)("LayoutMeasure", ((this as any).layout as any).layoutBox, o ? (o as any).layoutBox : void 0);
    }
    updateScroll(o: any = "measure"): any {
      let a: any = !!(((this as any).options as any).layoutScroll && (this as any).instance);
      if ((this as any).scroll && (((this as any).scroll as any).animationId as any) === (((this as any).root as any).animationId as any) && (((this as any).scroll as any).phase as any) === (o as any) && (a = !1), a && (this as any).instance) {
        const l: any = (i as any)((this as any).instance);
        (this as any).scroll = {
          animationId: ((this as any).root as any).animationId,
          phase: o,
          isRoot: l,
          offset: (s as any)((this as any).instance),
          wasRoot: (this as any).scroll ? ((this as any).scroll as any).isRoot : l
        };
      }
    }
    resetTransform(): any {
      if (!n) return;
      const o: any = (this as any).isLayoutDirty || (this as any).shouldResetTransform || ((this as any).options as any).alwaysMeasureLayout,
        a: any = (this as any).projectionDelta && !(qi as any)((this as any).projectionDelta),
        l: any = ((this as any).getTransformTemplate as any)(),
        c: any = l ? (l as any)((this as any).latestValues, "") : void 0,
        u: any = (c as any) !== ((this as any).prevTransformTemplateValue as any);
      o && (this as any).instance && (a || (Y as any)((this as any).latestValues) || u) && ((n as any)((this as any).instance, c), (this as any).shouldResetTransform = !1, ((this as any).scheduleRender as any)());
    }
    measure(o: any = !0): any {
      const a: any = ((this as any).measurePageBox as any)();
      let l: any = ((this as any).removeElementScroll as any)(a);
      return o && (l = ((this as any).removeTransform as any)(l)), (_a as any)(l), {
        animationId: ((this as any).root as any).animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: (this as any).id
      };
    }
    measurePageBox(): any {
      const {
        visualElement: o
      }: any = (this as any).options;
      if (!o) return (C as any)();
      const a: any = ((o as any).measureViewportBox as any)();
      if (!((this as any).scroll?.wasRoot || (((this as any).path as any).some as any)($a))) {
        const {
          scroll: c
        }: any = (this as any).root;
        c && ((st as any)((a as any).x, ((c as any).offset as any).x), (st as any)((a as any).y, ((c as any).offset as any).y));
      }
      return a;
    }
    removeElementScroll(o: any): any {
      const a: any = (C as any)();
      if ((N as any)(a, o), (this as any).scroll?.wasRoot) return a;
      for (let l: any = 0; (l as any) < (((this as any).path as any).length as any); l++) {
        const c: any = ((this as any).path as any)[l],
          {
            scroll: u,
            options: h
          }: any = c;
        (c as any) !== ((this as any).root as any) && u && (h as any).layoutScroll && ((u as any).wasRoot && (N as any)(a, o), (st as any)((a as any).x, ((u as any).offset as any).x), (st as any)((a as any).y, ((u as any).offset as any).y));
      }
      return a;
    }
    applyTransform(o: any, a: any = !1): any {
      const l: any = (C as any)();
      (N as any)(l, o);
      for (let c: any = 0; (c as any) < (((this as any).path as any).length as any); c++) {
        const u: any = ((this as any).path as any)[c];
        !a && ((u as any).options as any).layoutScroll && (u as any).scroll && (u as any) !== ((u as any).root as any) && (it as any)(l, {
          x: -(((u as any).scroll as any).offset as any).x,
          y: -(((u as any).scroll as any).offset as any).y
        }), (Y as any)((u as any).latestValues) && (it as any)(l, (u as any).latestValues);
      }
      return (Y as any)((this as any).latestValues) && (it as any)(l, (this as any).latestValues), l;
    }
    removeTransform(o: any): any {
      const a: any = (C as any)();
      (N as any)(a, o);
      for (let l: any = 0; (l as any) < (((this as any).path as any).length as any); l++) {
        const c: any = ((this as any).path as any)[l];
        if (!(c as any).instance || !(Y as any)((c as any).latestValues)) continue;
        (ne as any)((c as any).latestValues) && ((c as any).updateSnapshot as any)();
        const u: any = (C as any)(),
          h: any = ((c as any).measurePageBox as any)();
        (N as any)(u, h), (Ss as any)(a, (c as any).latestValues, (c as any).snapshot ? ((c as any).snapshot as any).layoutBox : void 0, u);
      }
      return (Y as any)((this as any).latestValues) && (Ss as any)(a, (this as any).latestValues), a;
    }
    setTargetDelta(o: any): any {
      (this as any).targetDelta = o, (((this as any).root as any).scheduleUpdateProjection as any)(), (this as any).isProjectionDirty = !0;
    }
    setOptions(o: any): any {
      (this as any).options = {
        ...(this as any).options,
        ...o,
        crossfade: ((o as any).crossfade as any) !== (void 0 as any) ? (o as any).crossfade : !0
      };
    }
    clearMeasurements(): any {
      (this as any).scroll = void 0, (this as any).layout = void 0, (this as any).snapshot = void 0, (this as any).prevTransformTemplateValue = void 0, (this as any).targetDelta = void 0, (this as any).target = void 0, (this as any).isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget(): any {
      (this as any).relativeParent && (((this as any).relativeParent as any).resolvedRelativeTargetAt as any) !== ((E as any).timestamp as any) && (((this as any).relativeParent as any).resolveTargetDelta as any)(!0);
    }
    resolveTargetDelta(o: any = !1): any {
      const a: any = ((this as any).getLead as any)();
      (this as any).isProjectionDirty || ((this as any).isProjectionDirty = (a as any).isProjectionDirty), (this as any).isTransformDirty || ((this as any).isTransformDirty = (a as any).isTransformDirty), (this as any).isSharedProjectionDirty || ((this as any).isSharedProjectionDirty = (a as any).isSharedProjectionDirty);
      const l: any = !!(this as any).resumingFrom || (this as any) !== (a as any);
      if (!(o || l && (this as any).isSharedProjectionDirty || (this as any).isProjectionDirty || (this as any).parent?.isProjectionDirty || (this as any).attemptToResolveRelativeTarget || ((this as any).root as any).updateBlockedByResize)) return;
      const {
        layout: u,
        layoutId: h
      }: any = (this as any).options;
      if (!(this as any).layout || !(u || h)) return;
      (this as any).resolvedRelativeTargetAt = (E as any).timestamp;
      const f: any = ((this as any).getClosestProjectingParent as any)();
      f && ((this as any).linkedParentVersion as any) !== ((f as any).layoutVersion as any) && !((f as any).options as any).layoutRoot && ((this as any).removeRelativeTarget as any)(), !(this as any).targetDelta && !(this as any).relativeTarget && (f && (f as any).layout ? ((this as any).createRelativeTarget as any)(f, ((this as any).layout as any).layoutBox, ((f as any).layout as any).layoutBox) : ((this as any).removeRelativeTarget as any)()), !(!(this as any).relativeTarget && !(this as any).targetDelta) && ((this as any).target || ((this as any).target = (C as any)(), (this as any).targetWithTransforms = (C as any)()), (this as any).relativeTarget && (this as any).relativeTargetOrigin && (this as any).relativeParent && ((this as any).relativeParent as any).target ? (((this as any).forceRelativeParentToResolveTarget as any)(), (Qr as any)((this as any).target, (this as any).relativeTarget, ((this as any).relativeParent as any).target)) : (this as any).targetDelta ? ((this as any).resumingFrom ? (this as any).target = ((this as any).applyTransform as any)(((this as any).layout as any).layoutBox) : (N as any)((this as any).target, ((this as any).layout as any).layoutBox), (ki as any)((this as any).target, (this as any).targetDelta)) : (N as any)((this as any).target, ((this as any).layout as any).layoutBox), (this as any).attemptToResolveRelativeTarget && ((this as any).attemptToResolveRelativeTarget = !1, f && (!!(f as any).resumingFrom as any) == (!!(this as any).resumingFrom as any) && !((f as any).options as any).layoutScroll && (f as any).target && ((this as any).animationProgress as any) !== (1 as any) ? ((this as any).createRelativeTarget as any)(f, (this as any).target, (f as any).target) : (this as any).relativeParent = (this as any).relativeTarget = void 0));
    }
    getClosestProjectingParent(): any {
      if (!(!(this as any).parent || (ne as any)(((this as any).parent as any).latestValues) || (Li as any)(((this as any).parent as any).latestValues))) return (((this as any).parent as any).isProjecting as any)() ? (this as any).parent : (((this as any).parent as any).getClosestProjectingParent as any)();
    }
    isProjecting(): any {
      return !!(((this as any).relativeTarget || (this as any).targetDelta || ((this as any).options as any).layoutRoot) && (this as any).layout);
    }
    createRelativeTarget(o: any, a: any, l: any): any {
      (this as any).relativeParent = o, (this as any).linkedParentVersion = (o as any).layoutVersion, ((this as any).forceRelativeParentToResolveTarget as any)(), (this as any).relativeTarget = (C as any)(), (this as any).relativeTargetOrigin = (C as any)(), (Mt as any)((this as any).relativeTargetOrigin, a, l), (N as any)((this as any).relativeTarget, (this as any).relativeTargetOrigin);
    }
    removeRelativeTarget(): any {
      (this as any).relativeParent = (this as any).relativeTarget = void 0;
    }
    calcProjection(): any {
      const o: any = ((this as any).getLead as any)(),
        a: any = !!(this as any).resumingFrom || (this as any) !== (o as any);
      let l: any = !0;
      if (((this as any).isProjectionDirty || (this as any).parent?.isProjectionDirty) && (l = !1), a && ((this as any).isSharedProjectionDirty || (this as any).isTransformDirty) && (l = !1), ((this as any).resolvedRelativeTargetAt as any) === ((E as any).timestamp as any) && (l = !1), l) return;
      const {
        layout: c,
        layoutId: u
      }: any = (this as any).options;
      if ((this as any).isTreeAnimating = !!((this as any).parent && ((this as any).parent as any).isTreeAnimating || (this as any).currentAnimation || (this as any).pendingAnimation), (this as any).isTreeAnimating || ((this as any).targetDelta = (this as any).relativeTarget = void 0), !(this as any).layout || !(c || u)) return;
      (N as any)((this as any).layoutCorrected, ((this as any).layout as any).layoutBox);
      const h: any = ((this as any).treeScale as any).x,
        f: any = ((this as any).treeScale as any).y;
      (fr as any)((this as any).layoutCorrected, (this as any).treeScale, (this as any).path, a), (o as any).layout && !(o as any).target && ((((this as any).treeScale as any).x as any) !== (1 as any) || (((this as any).treeScale as any).y as any) !== (1 as any)) && ((o as any).target = ((o as any).layout as any).layoutBox, (o as any).targetWithTransforms = (C as any)());
      const {
        target: d
      }: any = o;
      if (!d) {
        (this as any).prevProjectionDelta && (((this as any).createProjectionDeltas as any)(), ((this as any).scheduleRender as any)());
        return;
      }
      !(this as any).projectionDelta || !(this as any).prevProjectionDelta ? ((this as any).createProjectionDeltas as any)() : ((Ps as any)(((this as any).prevProjectionDelta as any).x, ((this as any).projectionDelta as any).x), (Ps as any)(((this as any).prevProjectionDelta as any).y, ((this as any).projectionDelta as any).y)), (ht as any)((this as any).projectionDelta, (this as any).layoutCorrected, d, (this as any).latestValues), ((((this as any).treeScale as any).x as any) !== (h as any) || (((this as any).treeScale as any).y as any) !== (f as any) || !(Ms as any)(((this as any).projectionDelta as any).x, ((this as any).prevProjectionDelta as any).x) || !(Ms as any)(((this as any).projectionDelta as any).y, ((this as any).prevProjectionDelta as any).y)) && ((this as any).hasProjected = !0, ((this as any).scheduleRender as any)(), ((this as any).notifyListeners as any)("projectionUpdate", d));
    }
    hide(): any {
      (this as any).isVisible = !1;
    }
    show(): any {
      (this as any).isVisible = !0;
    }
    scheduleRender(o: any = !0): any {
      if (((this as any).options as any).visualElement?.scheduleRender(), o) {
        const a: any = ((this as any).getStack as any)();
        a && ((a as any).scheduleRender as any)();
      }
      (this as any).resumingFrom && !((this as any).resumingFrom as any).instance && ((this as any).resumingFrom = void 0);
    }
    createProjectionDeltas(): any {
      (this as any).prevProjectionDelta = (nt as any)(), (this as any).projectionDelta = (nt as any)(), (this as any).projectionDeltaWithTransform = (nt as any)();
    }
    setAnimationOrigin(o: any, a: any = !1): any {
      const l: any = (this as any).snapshot,
        c: any = l ? (l as any).latestValues : {},
        u: any = {
          ...(this as any).latestValues
        },
        h: any = (nt as any)();
      (!(this as any).relativeParent || !(((this as any).relativeParent as any).options as any).layoutRoot) && ((this as any).relativeTarget = (this as any).relativeTargetOrigin = void 0), (this as any).attemptToResolveRelativeTarget = !a;
      const f: any = (C as any)(),
        d: any = l ? (l as any).source : void 0,
        m: any = (this as any).layout ? ((this as any).layout as any).source : void 0,
        v: any = (d as any) !== (m as any),
        y: any = ((this as any).getStack as any)(),
        p: any = !y || (((y as any).members as any).length as any) <= (1 as any),
        x: any = !!(v && !p && (((this as any).options as any).crossfade as any) === (!0 as any) && !(((this as any).path as any).some as any)(Ga));
      (this as any).animationProgress = 0;
      let g: any;
      (this as any).mixTargetDelta = (A: any): any => {
        const T: any = (A as any) / (1e3 as any);
        (ks as any)((h as any).x, (o as any).x, T), (ks as any)((h as any).y, (o as any).y, T), ((this as any).setTargetDelta as any)(h), (this as any).relativeTarget && (this as any).relativeTargetOrigin && (this as any).layout && (this as any).relativeParent && ((this as any).relativeParent as any).layout && ((Mt as any)(f, ((this as any).layout as any).layoutBox, (((this as any).relativeParent as any).layout as any).layoutBox), (Ka as any)((this as any).relativeTarget, (this as any).relativeTargetOrigin, f, T), g && (Da as any)((this as any).relativeTarget, g) && ((this as any).isProjectionDirty = !1), g || (g = (C as any)()), (N as any)(g, (this as any).relativeTarget)), v && ((this as any).animationValues = u, (xa as any)(u, c, (this as any).latestValues, T, x, p)), (((this as any).root as any).scheduleUpdateProjection as any)(), ((this as any).scheduleRender as any)(), (this as any).animationProgress = T;
      }, ((this as any).mixTargetDelta as any)(((this as any).options as any).layoutRoot ? 1e3 : 0);
    }
    startAnimation(o: any): any {
      ((this as any).notifyListeners as any)("animationStart"), (this as any).currentAnimation?.stop(), (this as any).resumingFrom?.currentAnimation?.stop(), (this as any).pendingAnimation && (($ as any)((this as any).pendingAnimation), (this as any).pendingAnimation = void 0), (this as any).pendingAnimation = ((S as any).update as any)((): any => {
        (Vt as any).hasAnimatedSinceResize = !0, (this as any).motionValue || ((this as any).motionValue = (rt as any)(0)), (this as any).currentAnimation = (ma as any)((this as any).motionValue, [0, 1e3], {
          ...o,
          velocity: 0,
          isSync: !0,
          onUpdate: (a: any): any => {
            ((this as any).mixTargetDelta as any)(a), (o as any).onUpdate && ((o as any).onUpdate as any)(a);
          },
          onStop: (): any => {},
          onComplete: (): any => {
            (o as any).onComplete && ((o as any).onComplete as any)(), ((this as any).completeAnimation as any)();
          }
        }), (this as any).resumingFrom && (((this as any).resumingFrom as any).currentAnimation = (this as any).currentAnimation), (this as any).pendingAnimation = void 0;
      });
    }
    completeAnimation(): any {
      (this as any).resumingFrom && (((this as any).resumingFrom as any).currentAnimation = void 0, ((this as any).resumingFrom as any).preserveOpacity = void 0);
      const o: any = ((this as any).getStack as any)();
      o && ((o as any).exitAnimationComplete as any)(), (this as any).resumingFrom = (this as any).currentAnimation = (this as any).animationValues = void 0, ((this as any).notifyListeners as any)("animationComplete");
    }
    finishAnimation(): any {
      (this as any).currentAnimation && ((this as any).mixTargetDelta && ((this as any).mixTargetDelta as any)(Ma), (((this as any).currentAnimation as any).stop as any)()), ((this as any).completeAnimation as any)();
    }
    applyTransformsToTarget(): any {
      const o: any = ((this as any).getLead as any)();
      let {
        targetWithTransforms: a,
        target: l,
        layout: c,
        latestValues: u
      }: any = o;
      if (!(!a || !l || !c)) {
        if ((this as any) !== (o as any) && (this as any).layout && c && (tn as any)(((this as any).options as any).animationType, ((this as any).layout as any).layoutBox, (c as any).layoutBox)) {
          l = (this as any).target || (C as any)();
          const h: any = (R as any)((((this as any).layout as any).layoutBox as any).x);
          ((l as any).x as any).min = (((o as any).target as any).x as any).min, ((l as any).x as any).max = (((l as any).x as any).min as any) + (h as any);
          const f: any = (R as any)((((this as any).layout as any).layoutBox as any).y);
          ((l as any).y as any).min = (((o as any).target as any).y as any).min, ((l as any).y as any).max = (((l as any).y as any).min as any) + (f as any);
        }
        (N as any)(a, l), (it as any)(a, u), (ht as any)((this as any).projectionDeltaWithTransform, (this as any).layoutCorrected, a, u);
      }
    }
    registerSharedNode(o: any, a: any): any {
      (((this as any).sharedNodes as any).has as any)(o) || (((this as any).sharedNodes as any).set as any)(o, new (wa as any)()), (((((this as any).sharedNodes as any).get as any)(o) as any).add as any)(a);
      const c: any = ((a as any).options as any).initialPromotionConfig;
      ((a as any).promote as any)({
        transition: c ? (c as any).transition : void 0,
        preserveFollowOpacity: c && (c as any).shouldPreserveFollowOpacity ? ((c as any).shouldPreserveFollowOpacity as any)(a) : void 0
      });
    }
    isLead(): any {
      const o: any = ((this as any).getStack as any)();
      return o ? ((o as any).lead as any) === (this as any) : !0;
    }
    getLead(): any {
      const {
        layoutId: o
      }: any = (this as any).options;
      return o ? ((this as any).getStack as any)()?.lead || this : this;
    }
    getPrevLead(): any {
      const {
        layoutId: o
      }: any = (this as any).options;
      return o ? ((this as any).getStack as any)()?.prevLead : void 0;
    }
    getStack(): any {
      const {
        layoutId: o
      }: any = (this as any).options;
      if (o) return ((((this as any).root as any).sharedNodes as any).get as any)(o);
    }
    promote({
      needsReset: o,
      transition: a,
      preserveFollowOpacity: l
    }: any = {}): any {
      const c: any = ((this as any).getStack as any)();
      c && ((c as any).promote as any)(this, l), o && ((this as any).projectionDelta = void 0, (this as any).needsReset = !0), a && ((this as any).setOptions as any)({
        transition: a
      });
    }
    relegate(): any {
      const o: any = ((this as any).getStack as any)();
      return o ? ((o as any).relegate as any)(this) : !1;
    }
    resetSkewAndRotation(): any {
      const {
        visualElement: o
      }: any = (this as any).options;
      if (!o) return;
      let a: any = !1;
      const {
        latestValues: l
      }: any = o;
      if (((l as any).z || (l as any).rotate || (l as any).rotateX || (l as any).rotateY || (l as any).rotateZ || (l as any).skewX || (l as any).skewY) && (a = !0), !a) return;
      const c: any = {};
      (l as any).z && (Gt as any)("z", o, c, (this as any).animationValues);
      for (let u: any = 0; (u as any) < ((Kt as any).length as any); u++) (Gt as any)(`rotate${(Kt as any)[u]}`, o, c, (this as any).animationValues), (Gt as any)(`skew${(Kt as any)[u]}`, o, c, (this as any).animationValues);
      ((o as any).render as any)();
      for (const u in c) ((o as any).setStaticValue as any)(u, (c as any)[u]), (this as any).animationValues && (((this as any).animationValues as any)[u] = (c as any)[u]);
      ((o as any).scheduleRender as any)();
    }
    applyProjectionStyles(o: any, a: any): any {
      if (!(this as any).instance || (this as any).isSVG) return;
      if (!(this as any).isVisible) {
        (o as any).visibility = "hidden";
        return;
      }
      const l: any = ((this as any).getTransformTemplate as any)();
      if ((this as any).needsReset) {
        (this as any).needsReset = !1, (o as any).visibility = "", (o as any).opacity = "", (o as any).pointerEvents = (Rt as any)(a?.pointerEvents) || "", (o as any).transform = l ? (l as any)((this as any).latestValues, "") : "none";
        return;
      }
      const c: any = ((this as any).getLead as any)();
      if (!(this as any).projectionDelta || !(this as any).layout || !(c as any).target) {
        ((this as any).options as any).layoutId && ((o as any).opacity = (((this as any).latestValues as any).opacity as any) !== (void 0 as any) ? ((this as any).latestValues as any).opacity : 1, (o as any).pointerEvents = (Rt as any)(a?.pointerEvents) || ""), (this as any).hasProjected && !(Y as any)((this as any).latestValues) && ((o as any).transform = l ? (l as any)({}, "") : "none", (this as any).hasProjected = !1);
        return;
      }
      (o as any).visibility = "";
      const u: any = (c as any).animationValues || (c as any).latestValues;
      ((this as any).applyTransformsToTarget as any)();
      let h: any = (Ca as any)((this as any).projectionDeltaWithTransform, (this as any).treeScale, u);
      l && (h = (l as any)(u, h)), (o as any).transform = h;
      const {
        x: f,
        y: d
      }: any = (this as any).projectionDelta;
      (o as any).transformOrigin = `${((f as any).origin as any) * (100 as any)}% ${((d as any).origin as any) * (100 as any)}% 0`, (c as any).animationValues ? (o as any).opacity = (c as any) === (this as any) ? (u as any).opacity ?? ((this as any).latestValues as any).opacity ?? 1 : (this as any).preserveOpacity ? ((this as any).latestValues as any).opacity : (u as any).opacityExit : (o as any).opacity = (c as any) === (this as any) ? ((u as any).opacity as any) !== (void 0 as any) ? (u as any).opacity : "" : ((u as any).opacityExit as any) !== (void 0 as any) ? (u as any).opacityExit : 0;
      for (const m in Fe) {
        if (((u as any)[m] as any) === (void 0 as any)) continue;
        const {
            correct: v,
            applyTo: y,
            isCSSVariable: p
          }: any = (Fe as any)[m],
          x: any = (h as any) === ("none" as any) ? (u as any)[m] : (v as any)((u as any)[m], c);
        if (y) {
          const g: any = (y as any).length;
          for (let A: any = 0; (A as any) < (g as any); A++) (o as any)[(y as any)[A]] = x;
        } else p ? (((((this as any).options as any).visualElement as any).renderState as any).vars as any)[m] = x : (o as any)[m] = x;
      }
      ((this as any).options as any).layoutId && ((o as any).pointerEvents = (c as any) === (this as any) ? (Rt as any)(a?.pointerEvents) || "" : "none");
    }
    clearSnapshot(): any {
      (this as any).resumeFrom = (this as any).snapshot = void 0;
    }
    resetTree(): any {
      ((((this as any).root as any).nodes as any).forEach as any)((o: any): any => (o as any).currentAnimation?.stop()), ((((this as any).root as any).nodes as any).forEach as any)(Es), ((((this as any).root as any).sharedNodes as any).clear as any)();
    }
  };
}
function Ra(this: any, e: any): any {
  ((e as any).updateLayout as any)();
}
function La(this: any, e: any): any {
  const t: any = (e as any).resumeFrom?.snapshot || (e as any).snapshot;
  if (((e as any).isLead as any)() && (e as any).layout && t && ((e as any).hasListeners as any)("didUpdate")) {
    const {
        layoutBox: s,
        measuredBox: i
      }: any = (e as any).layout,
      {
        animationType: n
      }: any = (e as any).options,
      r: any = ((t as any).source as any) !== (((e as any).layout as any).source as any);
    (n as any) === ("size" as any) ? (j as any)((u: any): any => {
      const h: any = r ? ((t as any).measuredBox as any)[u] : ((t as any).layoutBox as any)[u],
        f: any = (R as any)(h);
      (h as any).min = ((s as any)[u] as any).min, (h as any).max = ((h as any).min as any) + (f as any);
    }) : (tn as any)(n, (t as any).layoutBox, s) && (j as any)((u: any): any => {
      const h: any = r ? ((t as any).measuredBox as any)[u] : ((t as any).layoutBox as any)[u],
        f: any = (R as any)((s as any)[u]);
      (h as any).max = ((h as any).min as any) + (f as any), (e as any).relativeTarget && !(e as any).currentAnimation && ((e as any).isProjectionDirty = !0, (((e as any).relativeTarget as any)[u] as any).max = ((((e as any).relativeTarget as any)[u] as any).min as any) + (f as any));
    });
    const o: any = (nt as any)();
    (ht as any)(o, s, (t as any).layoutBox);
    const a: any = (nt as any)();
    r ? (ht as any)(a, ((e as any).applyTransform as any)(i, !0), (t as any).measuredBox) : (ht as any)(a, s, (t as any).layoutBox);
    const l: any = !(qi as any)(o);
    let c: any = !1;
    if (!(e as any).resumeFrom) {
      const u: any = ((e as any).getClosestProjectingParent as any)();
      if (u && !(u as any).resumeFrom) {
        const {
          snapshot: h,
          layout: f
        }: any = u;
        if (h && f) {
          const d: any = (C as any)();
          (Mt as any)(d, (t as any).layoutBox, (h as any).layoutBox);
          const m: any = (C as any)();
          (Mt as any)(m, s, (f as any).layoutBox), (Zi as any)(d, m) || (c = !0), ((u as any).options as any).layoutRoot && ((e as any).relativeTarget = m, (e as any).relativeTargetOrigin = d, (e as any).relativeParent = u);
        }
      }
    }
    ((e as any).notifyListeners as any)("didUpdate", {
      layout: s,
      snapshot: t,
      delta: a,
      layoutDelta: o,
      hasLayoutChanged: l,
      hasRelativeLayoutChanged: c
    });
  } else if (((e as any).isLead as any)()) {
    const {
      onExitComplete: s
    }: any = (e as any).options;
    s && (s as any)();
  }
  ((e as any).options as any).transition = void 0;
}
function ka(this: any, e: any): any {
  (e as any).parent && (((e as any).isProjecting as any)() || ((e as any).isProjectionDirty = ((e as any).parent as any).isProjectionDirty), (e as any).isSharedProjectionDirty || ((e as any).isSharedProjectionDirty = !!((e as any).isProjectionDirty || ((e as any).parent as any).isProjectionDirty || ((e as any).parent as any).isSharedProjectionDirty)), (e as any).isTransformDirty || ((e as any).isTransformDirty = ((e as any).parent as any).isTransformDirty));
}
function Fa(this: any, e: any): any {
  (e as any).isProjectionDirty = (e as any).isSharedProjectionDirty = (e as any).isTransformDirty = !1;
}
function Ba(this: any, e: any): any {
  ((e as any).clearSnapshot as any)();
}
function Es(this: any, e: any): any {
  ((e as any).clearMeasurements as any)();
}
function Rs(this: any, e: any): any {
  (e as any).isLayoutDirty = !1;
}
function Ia(this: any, e: any): any {
  const {
    visualElement: t
  }: any = (e as any).options;
  t && (((t as any).getProps as any)() as any).onBeforeLayoutMeasure && ((t as any).notify as any)("BeforeLayoutMeasure"), ((e as any).resetTransform as any)();
}
function Ls(this: any, e: any): any {
  ((e as any).finishAnimation as any)(), (e as any).targetDelta = (e as any).relativeTarget = (e as any).target = void 0, (e as any).isProjectionDirty = !0;
}
function ja(this: any, e: any): any {
  ((e as any).resolveTargetDelta as any)();
}
function Oa(this: any, e: any): any {
  ((e as any).calcProjection as any)();
}
function Ua(this: any, e: any): any {
  ((e as any).resetSkewAndRotation as any)();
}
function Na(this: any, e: any): any {
  ((e as any).removeLeadSnapshot as any)();
}
function ks(this: any, e: any, t: any, s: any): any {
  (e as any).translate = (D as any)((t as any).translate, 0, s), (e as any).scale = (D as any)((t as any).scale, 1, s), (e as any).origin = (t as any).origin, (e as any).originPoint = (t as any).originPoint;
}
function Fs(this: any, e: any, t: any, s: any, i: any): any {
  (e as any).min = (D as any)((t as any).min, (s as any).min, i), (e as any).max = (D as any)((t as any).max, (s as any).max, i);
}
function Ka(this: any, e: any, t: any, s: any, i: any): any {
  (Fs as any)((e as any).x, (t as any).x, (s as any).x, i), (Fs as any)((e as any).y, (t as any).y, (s as any).y, i);
}
function Ga(this: any, e: any): any {
  return (e as any).animationValues && (((e as any).animationValues as any).opacityExit as any) !== (void 0 as any);
}
const Wa: any = {
    duration: .45,
    ease: [.4, 0, .1, 1]
  },
  Bs: any = (e: any): any => (typeof navigator as any) < ("u" as any) && (navigator as any).userAgent && (((((navigator as any).userAgent as any).toLowerCase as any)() as any).includes as any)(e),
  Is: any = (Bs as any)("applewebkit/") && !(Bs as any)("chrome/") ? (Math as any).round : U;
function js(this: any, e: any): any {
  (e as any).min = (Is as any)((e as any).min), (e as any).max = (Is as any)((e as any).max);
}
function _a(this: any, e: any): any {
  (js as any)((e as any).x), (js as any)((e as any).y);
}
function tn(this: any, e: any, t: any, s: any): any {
  return (e as any) === ("position" as any) || (e as any) === ("preserve-aspect" as any) && !(Jr as any)((Cs as any)(t), (Cs as any)(s), .2);
}
function $a(this: any, e: any): any {
  return (e as any) !== ((e as any).root as any) && (e as any).scroll?.wasRoot;
}
const za: any = (Qi as any)({
    attachResizeListener: (e: any, t: any): any => (pt as any)(e, "resize", t),
    measureScroll: (): any => ({
      x: ((document as any).documentElement as any).scrollLeft || ((document as any).body as any).scrollLeft,
      y: ((document as any).documentElement as any).scrollTop || ((document as any).body as any).scrollTop
    }),
    checkIsScrollRoot: (): any => !0
  }),
  Wt: any = {
    current: void 0
  },
  en: any = (Qi as any)({
    measureScroll: (e: any): any => ({
      x: (e as any).scrollLeft,
      y: (e as any).scrollTop
    }),
    defaultParent: (): any => {
      if (!(Wt as any).current) {
        const e: any = new (za as any)({});
        ((e as any).mount as any)(window), ((e as any).setOptions as any)({
          layoutScroll: !0
        }), (Wt as any).current = e;
      }
      return (Wt as any).current;
    },
    resetTransform: (e: any, t: any): any => {
      ((e as any).style as any).transform = (t as any) !== (void 0 as any) ? t : "none";
    },
    checkIsScrollRoot: (e: any): any => ((((window as any).getComputedStyle as any)(e) as any).position as any) === ("fixed" as any)
  }),
  Ha: any = {
    pan: {
      Feature: da
    },
    drag: {
      Feature: fa,
      ProjectionNode: en,
      MeasureLayout: Ee
    }
  };
function Os(this: any, e: any, t: any, s: any): any {
  const {
    props: i
  }: any = e;
  (e as any).animationState && (i as any).whileHover && (((e as any).animationState as any).setActive as any)("whileHover", (s as any) === ("Start" as any));
  const n: any = ("onHover" as any) + (s as any),
    r: any = (i as any)[n];
  r && ((S as any).postRender as any)((): any => (r as any)(t, (yt as any)(t)));
}
class Xa extends (z as any) {
  [key: string]: any;
  mount(): any {
    const {
      current: t
    }: any = (this as any).node;
    t && ((this as any).unmount = (sr as any)(t, (s: any, i: any): any => ((Os as any)((this as any).node, i, "Start"), (n: any): any => (Os as any)((this as any).node, n, "End"))));
  }
  unmount(): any {}
}
class Ya extends (z as any) {
  declare isActive: any;
  [key: string]: any;
  constructor() {
    super(...arguments), (this as any).isActive = !1;
  }
  onFocus(): any {
    let t: any = !1;
    try {
      t = ((((this as any).node as any).current as any).matches as any)(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !((this as any).node as any).animationState || (((((this as any).node as any).animationState as any).setActive as any)("whileFocus", !0), (this as any).isActive = !0);
  }
  onBlur(): any {
    !(this as any).isActive || !((this as any).node as any).animationState || (((((this as any).node as any).animationState as any).setActive as any)("whileFocus", !1), (this as any).isActive = !1);
  }
  mount(): any {
    (this as any).unmount = (mt as any)((pt as any)(((this as any).node as any).current, "focus", (): any => ((this as any).onFocus as any)()), (pt as any)(((this as any).node as any).current, "blur", (): any => ((this as any).onBlur as any)()));
  }
  unmount(): any {}
}
function Us(this: any, e: any, t: any, s: any): any {
  const {
    props: i
  }: any = e;
  if ((e as any).current instanceof HTMLButtonElement && ((e as any).current as any).disabled) return;
  (e as any).animationState && (i as any).whileTap && (((e as any).animationState as any).setActive as any)("whileTap", (s as any) === ("Start" as any));
  const n: any = ("onTap" as any) + (((s as any) === ("End" as any) ? "" : s) as any),
    r: any = (i as any)[n];
  r && ((S as any).postRender as any)((): any => (r as any)(t, (yt as any)(t)));
}
class qa extends (z as any) {
  [key: string]: any;
  mount(): any {
    const {
      current: t
    }: any = (this as any).node;
    t && ((this as any).unmount = (rr as any)(t, (s: any, i: any): any => ((Us as any)((this as any).node, i, "Start"), (n: any, {
      success: r
    }: any): any => (Us as any)((this as any).node, n, r ? "End" : "Cancel")), {
      useGlobalTarget: (((this as any).node as any).props as any).globalTapTarget
    }));
  }
  unmount(): any {}
}
const ce: any = new (WeakMap as any)(),
  _t: any = new (WeakMap as any)(),
  Za: any = (e: any): any => {
    const t: any = ((ce as any).get as any)((e as any).target);
    t && (t as any)(e);
  },
  Ja: any = (e: any): any => {
    ((e as any).forEach as any)(Za);
  };
function Qa(this: any, {
  root: e,
  ...t
}: any): any {
  const s: any = e || document;
  ((_t as any).has as any)(s) || ((_t as any).set as any)(s, {});
  const i: any = ((_t as any).get as any)(s),
    n: any = ((JSON as any).stringify as any)(t);
  return (i as any)[n] || ((i as any)[n] = new (IntersectionObserver as any)(Ja, {
    root: e,
    ...t
  })), (i as any)[n];
}
function tl(this: any, e: any, t: any, s: any): any {
  const i: any = (Qa as any)(t);
  return ((ce as any).set as any)(e, s), ((i as any).observe as any)(e), (): any => {
    ((ce as any).delete as any)(e), ((i as any).unobserve as any)(e);
  };
}
const el: any = {
  some: 0,
  all: 1
};
class sl extends (z as any) {
  declare isInView: any;
  declare hasEnteredView: any;
  [key: string]: any;
  constructor() {
    super(...arguments), (this as any).hasEnteredView = !1, (this as any).isInView = !1;
  }
  startObserver(): any {
    ((this as any).unmount as any)();
    const {
        viewport: t = {}
      }: any = (((this as any).node as any).getProps as any)(),
      {
        root: s,
        margin: i,
        amount: n = "some",
        once: r
      }: any = t,
      o: any = {
        root: s ? (s as any).current : void 0,
        rootMargin: i,
        threshold: (typeof n as any) == ("number" as any) ? n : (el as any)[n]
      },
      a: any = (l: any): any => {
        const {
          isIntersecting: c
        }: any = l;
        if (((this as any).isInView as any) === (c as any) || ((this as any).isInView = c, r && !c && (this as any).hasEnteredView)) return;
        c && ((this as any).hasEnteredView = !0), ((this as any).node as any).animationState && ((((this as any).node as any).animationState as any).setActive as any)("whileInView", c);
        const {
            onViewportEnter: u,
            onViewportLeave: h
          }: any = (((this as any).node as any).getProps as any)(),
          f: any = c ? u : h;
        f && (f as any)(l);
      };
    return (tl as any)(((this as any).node as any).current, o, a);
  }
  mount(): any {
    ((this as any).startObserver as any)();
  }
  update(): any {
    if ((typeof IntersectionObserver as any) > ("u" as any)) return;
    const {
      props: t,
      prevProps: s
    }: any = (this as any).node;
    ((["amount", "margin", "root"] as any).some as any)((il as any)(t, s)) && ((this as any).startObserver as any)();
  }
  unmount(): any {}
}
function il(this: any, {
  viewport: e = {}
}: any, {
  viewport: t = {}
}: any = {}): any {
  return (s: any): any => ((e as any)[s] as any) !== ((t as any)[s] as any);
}
const nl: any = {
    inView: {
      Feature: sl
    },
    tap: {
      Feature: qa
    },
    focus: {
      Feature: Ya
    },
    hover: {
      Feature: Xa
    }
  },
  ol: any = {
    layout: {
      ProjectionNode: en,
      MeasureLayout: Ee
    }
  },
  rl: any = {
    renderer: Pr,
    ...zr,
    ...nl
  },
  pl: any = {
    ...rl,
    ...Ha,
    ...ol
  };
export { yl as AnimatePresence, No as AsyncMotionValueAnimation, Zo as DOMKeyframesResolver, Se as JSAnimation, be as KeyframeResolver, wn as LayoutGroupContext, Ml as LazyMotion, El as MotionConfigContext, Rl as MotionContext, _ as MotionGlobalConfig, tr as MotionValue, Eo as NativeAnimation, ko as NativeAnimationExtended, vl as PopChild, Tl as PresenceChild, Ll as PresenceContext, ye as SubscriptionManager, Mn as SwitchLayoutGroupContext, gr as VisualElement, ct as addPointerEvent, Hr as addPointerInfo, de as addUniqueItem, xl as alpha, $t as analyseComplexValue, Ir as animateVisualElement, zr as animations, ni as anticipate, Mo as applyGeneratorOptions, ve as backIn, ii as backInOut, si as backOut, Pl as buildTransform, Pe as calcGeneratorDuration, R as calcLength, $ as cancelFrame, Te as circIn, ri as circInOut, oi as circOut, Q as clamp, F as color, at as complex, lo as convertOffsetToTimes, C as createBox, qn as createGeneratorEasing, ui as createRenderBatcher, gt as cubicBezier, lt as cubicBezierAsString, uo as defaultEasing, ao as defaultOffset, Zt as defaultTransformValue, Xo as defaultValueTypes, fn as degrees, va as delay, Si as dimensionValueTypes, cs as distance, ta as distance2D, rl as domAnimation, pl as domMax, kn as easeIn, ai as easeInOut, Fn as easeOut, Ie as easingDefinitionToFunction, ro as fillOffset, po as fillWildcards, kl as filterProps, He as findDimensionValueType, ur as findValueType, Ao as flushKeyframeResolvers, S as frame, E as frameData, Lt as frameSteps, fi as generateLinearEasing, Di as getAnimatableNone, bi as getDefaultValueType, xe as getMixer, Fl as getValueAsType, De as getValueTransition, Pi as getVariableValue, on as hex, sr as hover, Ks as hsla, Kn as hslaToRgba, Xt as inertia, oo as interpolate, me as invariant, zt as invisibleValues, li as isBezierDefinition, Bl as isBrowser, An as isCSSVariableName, he as isCSSVariableToken, wi as isDragActive, K as isDragging, Bn as isEasingArray, Ti as isGenerator, an as isHTMLElement, W as isMotionValue, Mi as isNodeOrChild, qs as isNumericalString, gn as isObject, Ce as isPrimaryPointer, Ei as isSVGElement, ar as isSVGSVGElement, Il as isValidMotionProp, Zs as isZeroValueString, ut as keyframes, Al as m, se as makeAnimationInstant, Vl as makeUseVisualState, vi as mapEasingToNativeEasing, Dt as maxGeneratorDuration, ge as memo, we as microtask, O as millisecondsToSeconds, ti as mirrorEasing, hi as mix, ci as mixArray, Oe as mixColor, Xn as mixComplex, bt as mixImmediate, Ft as mixLinearColor, D as mixNumber, zn as mixObject, _n as mixVisibility, rt as motionValue, U as noop, Gs as number, rn as numberValueTypes, bn as optimizedAppearDataAttribute, Go as parseCSSVariable, Jt as parseValueFromTransform, ft as percent, mt as pipe, Ai as positionalKeys, rr as press, dt as progress, jl as progressPercentage, fe as px, yo as readTransformValue, pe as removeItem, Jo as resolveElements, Rt as resolveMotionValue, ei as reverseEasing, Sl as rgbUnit, Ns as rgba, bl as scale, G as secondsToMilliseconds, er as setDragLock, So as setStyle, wt as spring, Co as startWaapiAnimation, _e as supportedWaapiEasing, Oo as supportsBrowserAnimation, Do as supportsFlags, yi as supportsLinearEasing, bo as supportsScrollTimeline, Vi as testValueType, k as time, Ws as transformPropOrder, Et as transformProps, Dl as transformValueTypes, Ol as useComposedRefs, Ul as useIsomorphicLayoutEffect, Dn as usePresence, wl as useReducedMotion, Js as velocityPerSecond, pn as vh, pr as visualElementStore, dn as vw };
//# debugId=e1556eec-9d84-48e0-8c09-30454a682cb3
