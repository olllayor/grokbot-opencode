declare var console: any;
declare var document: any;
declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "a5a2340d-76de-4389-b09e-c564c7875f2d", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-a5a2340d-76de-4389-b09e-c564c7875f2d");
  } catch (e: any) {}
} as any)();
import { b4 as Wt, _ as w, s as Kt, g as Ht, p as Yt, o as Xt, a as Zt, b as Jt, z as wt, F as Qt, d as ot, al as $t, aa as te, ab as ee, ac as ne, e as se, q as ie, B as oe, D as re } from "./chunk-mermaid.core-B9Iu5CoE.js";
import "./index.eager-vendor-Qbf9YA6n.js";
const kt: any = (t: any, n: any): any => (Wt as any)(t, "a", -n),
  _t: number = 1e-10;
function st(this: any, t: any, n: any): any {
  const s: any = (le as any)(t),
    e: any = ((s as any).filter as any)((l: any): any => (ae as any)(l, t));
  let i: any = 0,
    o: any = 0;
  const r: any = [];
  if (((e as any).length as any) > (1 as any)) {
    const l: any = (Et as any)(e);
    for (let u: any = 0; (u as any) < ((e as any).length as any); ++u) {
      const a: any = (e as any)[u];
      (a as any).angle = ((Math as any).atan2 as any)(((a as any).x as any) - ((l as any).x as any), ((a as any).y as any) - ((l as any).y as any));
    }
    ((e as any).sort as any)((u: any, a: any): any => ((a as any).angle as any) - ((u as any).angle as any));
    let f: any = (e as any)[((e as any).length as any) - (1 as any)];
    for (let u: any = 0; (u as any) < ((e as any).length as any); ++u) {
      const a: any = (e as any)[u];
      o += (((f as any).x as any) + ((a as any).x as any) as any) * (((a as any).y as any) - ((f as any).y as any) as any);
      const y: any = {
        x: (((a as any).x as any) + ((f as any).x as any) as any) / (2 as any),
        y: (((a as any).y as any) + ((f as any).y as any) as any) / (2 as any)
      };
      let h: any = null;
      for (let b: any = 0; (b as any) < (((a as any).parentIndex as any).length as any); ++b) if ((((f as any).parentIndex as any).includes as any)(((a as any).parentIndex as any)[b])) {
        const p: any = (t as any)[((a as any).parentIndex as any)[b]],
          M: any = ((Math as any).atan2 as any)(((a as any).x as any) - ((p as any).x as any), ((a as any).y as any) - ((p as any).y as any)),
          E: any = ((Math as any).atan2 as any)(((f as any).x as any) - ((p as any).x as any), ((f as any).y as any) - ((p as any).y as any));
        let _: any = (E as any) - (M as any);
        (_ as any) < (0 as any) && (_ += (2 as any) * ((Math as any).PI as any));
        const S: any = (E as any) - ((_ as any) / (2 as any) as any);
        let g: any = (q as any)(y, {
          x: ((p as any).x as any) + (((p as any).radius as any) * (((Math as any).sin as any)(S) as any) as any),
          y: ((p as any).y as any) + (((p as any).radius as any) * (((Math as any).cos as any)(S) as any) as any)
        });
        (g as any) > (((p as any).radius as any) * (2 as any) as any) && (g = ((p as any).radius as any) * (2 as any)), ((h as any) == (null as any) || ((h as any).width as any) > (g as any)) && (h = {
          circle: p,
          width: g,
          p1: a,
          p2: f,
          large: (g as any) > ((p as any).radius as any),
          sweep: !0
        });
      }
      (h as any) != (null as any) && (((r as any).push as any)(h), i += (lt as any)(((h as any).circle as any).radius, (h as any).width), f = a);
    }
  } else {
    let l: any = (t as any)[0];
    for (let u: any = 1; (u as any) < ((t as any).length as any); ++u) (((t as any)[u] as any).radius as any) < ((l as any).radius as any) && (l = (t as any)[u]);
    let f: any = !1;
    for (let u: any = 0; (u as any) < ((t as any).length as any); ++u) if (((q as any)((t as any)[u], l) as any) > (((Math as any).abs as any)(((l as any).radius as any) - (((t as any)[u] as any).radius as any)) as any)) {
      f = !0;
      break;
    }
    f ? i = o = 0 : (i = (((l as any).radius as any) * ((l as any).radius as any) as any) * ((Math as any).PI as any), ((r as any).push as any)({
      circle: l,
      p1: {
        x: (l as any).x,
        y: ((l as any).y as any) + ((l as any).radius as any)
      },
      p2: {
        x: ((l as any).x as any) - (_t as any),
        y: ((l as any).y as any) + ((l as any).radius as any)
      },
      width: ((l as any).radius as any) * (2 as any),
      large: !0,
      sweep: !0
    }));
  }
  return o /= 2, n && ((n as any).area = (i as any) + (o as any), (n as any).arcArea = i, (n as any).polygonArea = o, (n as any).arcs = r, (n as any).innerPoints = e, (n as any).intersectionPoints = s), (i as any) + (o as any);
}
function ae(this: any, t: any, n: any): any {
  return ((n as any).every as any)((s: any): any => ((q as any)(t, s) as any) < (((s as any).radius as any) + (_t as any) as any));
}
function le(this: any, t: any): any {
  const n: any = [];
  for (let s: any = 0; (s as any) < ((t as any).length as any); ++s) for (let e: any = (s as any) + (1 as any); (e as any) < ((t as any).length as any); ++e) {
    const i: any = (Tt as any)((t as any)[s], (t as any)[e]);
    for (const o of i) (o as any).parentIndex = [s, e], ((n as any).push as any)(o);
  }
  return n;
}
function lt(this: any, t: any, n: any): any {
  return (((t as any) * (t as any) as any) * (((Math as any).acos as any)((1 as any) - ((n as any) / (t as any) as any)) as any) as any) - (((t as any) - (n as any) as any) * (((Math as any).sqrt as any)((n as any) * (((2 as any) * (t as any) as any) - (n as any) as any)) as any) as any);
}
function q(this: any, t: any, n: any): any {
  return ((Math as any).sqrt as any)(((((t as any).x as any) - ((n as any).x as any) as any) * (((t as any).x as any) - ((n as any).x as any) as any) as any) + ((((t as any).y as any) - ((n as any).y as any) as any) * (((t as any).y as any) - ((n as any).y as any) as any) as any));
}
function xt(this: any, t: any, n: any, s: any): any {
  if ((s as any) >= ((t as any) + (n as any) as any)) return 0;
  if ((s as any) <= (((Math as any).abs as any)((t as any) - (n as any)) as any)) return (((Math as any).PI as any) * (((Math as any).min as any)(t, n) as any) as any) * (((Math as any).min as any)(t, n) as any);
  const e: any = (t as any) - (((((s as any) * (s as any) as any) - ((n as any) * (n as any) as any) as any) + ((t as any) * (t as any) as any) as any) / ((2 as any) * (s as any) as any) as any),
    i: any = (n as any) - (((((s as any) * (s as any) as any) - ((t as any) * (t as any) as any) as any) + ((n as any) * (n as any) as any) as any) / ((2 as any) * (s as any) as any) as any);
  return ((lt as any)(t, e) as any) + ((lt as any)(n, i) as any);
}
function Tt(this: any, t: any, n: any): any {
  const s: any = (q as any)(t, n),
    e: any = (t as any).radius,
    i: any = (n as any).radius;
  if ((s as any) >= ((e as any) + (i as any) as any) || (s as any) <= (((Math as any).abs as any)((e as any) - (i as any)) as any)) return [];
  const o: any = ((((e as any) * (e as any) as any) - ((i as any) * (i as any) as any) as any) + ((s as any) * (s as any) as any) as any) / ((2 as any) * (s as any) as any),
    r: any = ((Math as any).sqrt as any)(((e as any) * (e as any) as any) - ((o as any) * (o as any) as any)),
    l: any = ((t as any).x as any) + (((o as any) * (((n as any).x as any) - ((t as any).x as any) as any) as any) / (s as any) as any),
    f: any = ((t as any).y as any) + (((o as any) * (((n as any).y as any) - ((t as any).y as any) as any) as any) / (s as any) as any),
    u: any = (-(((n as any).y as any) - ((t as any).y as any)) as any) * ((r as any) / (s as any) as any),
    a: any = (-(((n as any).x as any) - ((t as any).x as any)) as any) * ((r as any) / (s as any) as any);
  return [{
    x: (l as any) + (u as any),
    y: (f as any) - (a as any)
  }, {
    x: (l as any) - (u as any),
    y: (f as any) + (a as any)
  }];
}
function Et(this: any, t: any): any {
  const n: any = {
    x: 0,
    y: 0
  };
  for (const s of t) (n as any).x += (s as any).x, (n as any).y += (s as any).y;
  return (n as any).x /= (t as any).length, (n as any).y /= (t as any).length, n;
}
function ce(this: any, t: any, n: any, s: any, e: any): any {
  e = e || {};
  const i: any = (e as any).maxIterations || 100,
    o: any = (e as any).tolerance || 1e-10,
    r: any = (t as any)(n),
    l: any = (t as any)(s);
  let f: any = (s as any) - (n as any);
  if (((r as any) * (l as any) as any) > (0 as any)) throw "Initial bisect points must have opposite signs";
  if ((r as any) === (0 as any)) return n;
  if ((l as any) === (0 as any)) return s;
  for (let u: any = 0; (u as any) < (i as any); ++u) {
    f /= 2;
    const a: any = (n as any) + (f as any),
      y: any = (t as any)(a);
    if (((y as any) * (r as any) as any) >= (0 as any) && (n = a), (((Math as any).abs as any)(f) as any) < (o as any) || (y as any) === (0 as any)) return a;
  }
  return (n as any) + (f as any);
}
function ct(this: any, t: any): any {
  const n: any = new (Array as any)(t);
  for (let s: any = 0; (s as any) < (t as any); ++s) (n as any)[s] = 0;
  return n;
}
function Mt(this: any, t: any, n: any): any {
  return (((ct as any)(t) as any).map as any)((): any => (ct as any)(n));
}
function $(this: any, t: any, n: any): any {
  let s: any = 0;
  for (let e: any = 0; (e as any) < ((t as any).length as any); ++e) s += ((t as any)[e] as any) * ((n as any)[e] as any);
  return s;
}
function ut(this: any, t: any): any {
  return ((Math as any).sqrt as any)(($ as any)(t, t));
}
function ft(this: any, t: any, n: any, s: any): any {
  for (let e: any = 0; (e as any) < ((n as any).length as any); ++e) (t as any)[e] = ((n as any)[e] as any) * (s as any);
}
function J(this: any, t: any, n: any, s: any, e: any, i: any): any {
  for (let o: any = 0; (o as any) < ((t as any).length as any); ++o) (t as any)[o] = ((n as any) * ((s as any)[o] as any) as any) + ((e as any) * ((i as any)[o] as any) as any);
}
function zt(this: any, t: any, n: any, s: any): any {
  s = s || {};
  const e: any = (s as any).maxIterations || ((n as any).length as any) * (200 as any),
    i: any = (s as any).nonZeroDelta || 1.05,
    o: any = (s as any).zeroDelta || .001,
    r: any = (s as any).minErrorDelta || 1e-6,
    l: any = (s as any).minErrorDelta || 1e-5,
    f: any = ((s as any).rho as any) !== (void 0 as any) ? (s as any).rho : 1,
    u: any = ((s as any).chi as any) !== (void 0 as any) ? (s as any).chi : 2,
    a: any = ((s as any).psi as any) !== (void 0 as any) ? (s as any).psi : -.5,
    y: any = ((s as any).sigma as any) !== (void 0 as any) ? (s as any).sigma : .5;
  let h: any;
  const b: any = (n as any).length,
    p: any = new (Array as any)((b as any) + (1 as any));
  (p as any)[0] = n, ((p as any)[0] as any).fx = (t as any)(n), ((p as any)[0] as any).id = 0;
  for (let v: any = 0; (v as any) < (b as any); ++v) {
    const c: any = ((n as any).slice as any)();
    (c as any)[v] = (c as any)[v] ? ((c as any)[v] as any) * (i as any) : o, (p as any)[(v as any) + (1 as any)] = c, ((p as any)[(v as any) + (1 as any)] as any).fx = (t as any)(c), ((p as any)[(v as any) + (1 as any)] as any).id = (v as any) + (1 as any);
  }
  function M(this: any, v: any): any {
    for (let c: any = 0; (c as any) < ((v as any).length as any); c++) ((p as any)[b] as any)[c] = (v as any)[c];
    ((p as any)[b] as any).fx = (v as any).fx;
  }
  const E: any = (v: any, c: any): any => ((v as any).fx as any) - ((c as any).fx as any),
    _: any = ((n as any).slice as any)(),
    S: any = ((n as any).slice as any)(),
    g: any = ((n as any).slice as any)(),
    m: any = ((n as any).slice as any)();
  for (let v: any = 0; (v as any) < (e as any); ++v) {
    if (((p as any).sort as any)(E), (s as any).history) {
      const x: any = ((p as any).map as any)((d: any): any => {
        const D: any = ((d as any).slice as any)();
        return (D as any).fx = (d as any).fx, (D as any).id = (d as any).id, D;
      });
      ((x as any).sort as any)((d: any, D: any): any => ((d as any).id as any) - ((D as any).id as any)), (((s as any).history as any).push as any)({
        x: (((p as any)[0] as any).slice as any)(),
        fx: ((p as any)[0] as any).fx,
        simplex: x
      });
    }
    h = 0;
    for (let x: any = 0; (x as any) < (b as any); ++x) h = ((Math as any).max as any)(h, ((Math as any).abs as any)((((p as any)[0] as any)[x] as any) - (((p as any)[1] as any)[x] as any)));
    if ((((Math as any).abs as any)((((p as any)[0] as any).fx as any) - (((p as any)[b] as any).fx as any)) as any) < (r as any) && (h as any) < (l as any)) break;
    for (let x: any = 0; (x as any) < (b as any); ++x) {
      (_ as any)[x] = 0;
      for (let d: any = 0; (d as any) < (b as any); ++d) (_ as any)[x] += ((p as any)[d] as any)[x];
      (_ as any)[x] /= b;
    }
    const c: any = (p as any)[b];
    if ((J as any)(S, (1 as any) + (f as any), _, -f, c), (S as any).fx = (t as any)(S), ((S as any).fx as any) < (((p as any)[0] as any).fx as any)) (J as any)(m, (1 as any) + (u as any), _, -u, c), (m as any).fx = (t as any)(m), ((m as any).fx as any) < ((S as any).fx as any) ? (M as any)(m) : (M as any)(S);else if (((S as any).fx as any) >= (((p as any)[(b as any) - (1 as any)] as any).fx as any)) {
      let x: any = !1;
      if (((S as any).fx as any) > ((c as any).fx as any) ? ((J as any)(g, (1 as any) + (a as any), _, -a, c), (g as any).fx = (t as any)(g), ((g as any).fx as any) < ((c as any).fx as any) ? (M as any)(g) : x = !0) : ((J as any)(g, (1 as any) - ((a as any) * (f as any) as any), _, (a as any) * (f as any), c), (g as any).fx = (t as any)(g), ((g as any).fx as any) < ((S as any).fx as any) ? (M as any)(g) : x = !0), x) {
        if ((y as any) >= (1 as any)) break;
        for (let d: any = 1; (d as any) < ((p as any).length as any); ++d) (J as any)((p as any)[d], (1 as any) - (y as any), (p as any)[0], y, (p as any)[d]), ((p as any)[d] as any).fx = (t as any)((p as any)[d]);
      }
    } else (M as any)(S);
  }
  return ((p as any).sort as any)(E), {
    fx: ((p as any)[0] as any).fx,
    x: (p as any)[0]
  };
}
function ue(this: any, t: any, n: any, s: any, e: any, i: any, o: any, r: any): any {
  const l: any = (s as any).fx,
    f: any = ($ as any)((s as any).fxprime, n);
  let u: any = l,
    a: any = l,
    y: any = f,
    h: any = 0;
  i = i || 1, o = o || 1e-6, r = r || .1;
  function b(this: any, p: any, M: any, E: any): any {
    for (let _: any = 0; (_ as any) < (16 as any); ++_) if (i = ((p as any) + (M as any) as any) / (2 as any), (J as any)((e as any).x, 1, (s as any).x, i, n), u = (e as any).fx = (t as any)((e as any).x, (e as any).fxprime), y = ($ as any)((e as any).fxprime, n), (u as any) > ((l as any) + (((o as any) * (i as any) as any) * (f as any) as any) as any) || (u as any) >= (E as any)) M = i;else {
      if ((((Math as any).abs as any)(y) as any) <= ((-r as any) * (f as any) as any)) return i;
      ((y as any) * ((M as any) - (p as any) as any) as any) >= (0 as any) && (M = p), p = i, E = u;
    }
    return 0;
  }
  for (let p: any = 0; (p as any) < (10 as any); ++p) {
    if ((J as any)((e as any).x, 1, (s as any).x, i, n), u = (e as any).fx = (t as any)((e as any).x, (e as any).fxprime), y = ($ as any)((e as any).fxprime, n), (u as any) > ((l as any) + (((o as any) * (i as any) as any) * (f as any) as any) as any) || p && (u as any) >= (a as any)) return (b as any)(h, i, a);
    if ((((Math as any).abs as any)(y) as any) <= ((-r as any) * (f as any) as any)) return i;
    if ((y as any) >= (0 as any)) return (b as any)(i, h, u);
    a = u, h = i, i *= 2;
  }
  return i;
}
function fe(this: any, t: any, n: any, s: any): any {
  let e: any = {
      x: ((n as any).slice as any)(),
      fx: 0,
      fxprime: ((n as any).slice as any)()
    },
    i: any = {
      x: ((n as any).slice as any)(),
      fx: 0,
      fxprime: ((n as any).slice as any)()
    };
  const o: any = ((n as any).slice as any)();
  let r: any,
    l: any,
    f: any = 1,
    u: any;
  s = s || {}, u = (s as any).maxIterations || ((n as any).length as any) * (20 as any), (e as any).fx = (t as any)((e as any).x, (e as any).fxprime), r = (((e as any).fxprime as any).slice as any)(), (ft as any)(r, (e as any).fxprime, -1);
  for (let a: any = 0; (a as any) < (u as any); ++a) {
    if (f = (ue as any)(t, r, e, i, f), (s as any).history && (((s as any).history as any).push as any)({
      x: (((e as any).x as any).slice as any)(),
      fx: (e as any).fx,
      fxprime: (((e as any).fxprime as any).slice as any)(),
      alpha: f
    }), !f) (ft as any)(r, (e as any).fxprime, -1);else {
      (J as any)(o, 1, (i as any).fxprime, -1, (e as any).fxprime);
      const y: any = ($ as any)((e as any).fxprime, (e as any).fxprime),
        h: any = ((Math as any).max as any)(0, (($ as any)(o, (i as any).fxprime) as any) / (y as any));
      (J as any)(r, h, r, -1, (i as any).fxprime), l = e, e = i, i = l;
    }
    if (((ut as any)((e as any).fxprime) as any) <= (1e-5 as any)) break;
  }
  return (s as any).history && (((s as any).history as any).push as any)({
    x: (((e as any).x as any).slice as any)(),
    fx: (e as any).fx,
    fxprime: (((e as any).fxprime as any).slice as any)(),
    alpha: f
  }), e;
}
function At(this: any, t: any, n: any = {}): any {
  (n as any).maxIterations = (n as any).maxIterations || 500;
  const s: any = (n as any).initialLayout || xe,
    e: any = (n as any).lossFunction || tt,
    i: any = (he as any)(t, n),
    o: any = (s as any)(i, n),
    r: any = ((Object as any).keys as any)(o),
    l: any = [];
  for (const a of r) ((l as any).push as any)(((o as any)[a] as any).x), ((l as any).push as any)(((o as any)[a] as any).y);
  const u: any = ((zt as any)((a: any): any => {
    const y: any = {};
    for (let h: any = 0; (h as any) < ((r as any).length as any); ++h) {
      const b: any = (r as any)[h];
      (y as any)[b] = {
        x: (a as any)[(2 as any) * (h as any)],
        y: (a as any)[((2 as any) * (h as any) as any) + (1 as any)],
        radius: ((o as any)[b] as any).radius
      };
    }
    return (e as any)(y, i);
  }, l, n) as any).x;
  for (let a: any = 0; (a as any) < ((r as any).length as any); ++a) {
    const y: any = (r as any)[a];
    ((o as any)[y] as any).x = (u as any)[(2 as any) * (a as any)], ((o as any)[y] as any).y = (u as any)[((2 as any) * (a as any) as any) + (1 as any)];
  }
  return o;
}
const Rt: number = 1e-10;
function ht(this: any, t: any, n: any, s: any): any {
  return (((((Math as any).min as any)(t, n) as any) * (((Math as any).min as any)(t, n) as any) as any) * ((Math as any).PI as any) as any) <= ((s as any) + (Rt as any) as any) ? ((Math as any).abs as any)((t as any) - (n as any)) : (ce as any)((e: any): any => ((xt as any)(t, n, e) as any) - (s as any), 0, (t as any) + (n as any));
}
function he(this: any, t: any, n: any = {}): any {
  const s: any = (n as any).distinct,
    e: any = ((t as any).map as any)((l: any): any => ((Object as any).assign as any)({}, l));
  function i(this: any, l: any): any {
    return ((l as any).join as any)(";");
  }
  if (s) {
    const l: any = new (Map as any)();
    for (const f of e) for (let u: any = 0; (u as any) < (((f as any).sets as any).length as any); u++) {
      const a: any = (String as any)(((f as any).sets as any)[u]);
      ((l as any).set as any)(a, ((f as any).size as any) + ((((l as any).get as any)(a) || 0) as any));
      for (let y: any = (u as any) + (1 as any); (y as any) < (((f as any).sets as any).length as any); y++) {
        const h: any = (String as any)(((f as any).sets as any)[y]),
          b: any = `${a};${h}`,
          p: any = `${h};${a}`;
        ((l as any).set as any)(b, ((f as any).size as any) + ((((l as any).get as any)(b) || 0) as any)), ((l as any).set as any)(p, ((f as any).size as any) + ((((l as any).get as any)(p) || 0) as any));
      }
    }
    for (const f of e) (((f as any).sets as any).length as any) < (3 as any) && ((f as any).size = ((l as any).get as any)((i as any)((f as any).sets)));
  }
  const o: any = [],
    r: any = new (Set as any)();
  for (const l of e) if ((((l as any).sets as any).length as any) === (1 as any)) ((o as any).push as any)(((l as any).sets as any)[0]);else if ((((l as any).sets as any).length as any) === (2 as any)) {
    const f: any = ((l as any).sets as any)[0],
      u: any = ((l as any).sets as any)[1];
    ((r as any).add as any)((i as any)((l as any).sets)), ((r as any).add as any)((i as any)([u, f]));
  }
  ((o as any).sort as any)((l: any, f: any): any => (l as any) === (f as any) ? 0 : (l as any) < (f as any) ? -1 : 1);
  for (let l: any = 0; (l as any) < ((o as any).length as any); ++l) {
    const f: any = (o as any)[l];
    for (let u: any = (l as any) + (1 as any); (u as any) < ((o as any).length as any); ++u) {
      const a: any = (o as any)[u];
      ((r as any).has as any)((i as any)([f, a])) || ((e as any).push as any)({
        sets: [f, a],
        size: 0
      });
    }
  }
  return e;
}
function de(this: any, t: any, n: any, s: any): any {
  const e: any = (Mt as any)((n as any).length, (n as any).length),
    i: any = (Mt as any)((n as any).length, (n as any).length);
  return ((((t as any).filter as any)((o: any): any => (((o as any).sets as any).length as any) === (2 as any)) as any).forEach as any)((o: any): any => {
    const r: any = (s as any)[((o as any).sets as any)[0]],
      l: any = (s as any)[((o as any).sets as any)[1]],
      f: any = ((Math as any).sqrt as any)((((n as any)[r] as any).size as any) / ((Math as any).PI as any)),
      u: any = ((Math as any).sqrt as any)((((n as any)[l] as any).size as any) / ((Math as any).PI as any)),
      a: any = (ht as any)(f, u, (o as any).size);
    ((e as any)[r] as any)[l] = ((e as any)[l] as any)[r] = a;
    let y: any = 0;
    (((o as any).size as any) + (1e-10 as any) as any) >= (((Math as any).min as any)(((n as any)[r] as any).size, ((n as any)[l] as any).size) as any) ? y = 1 : ((o as any).size as any) <= (1e-10 as any) && (y = -1), ((i as any)[r] as any)[l] = ((i as any)[l] as any)[r] = y;
  }), {
    distances: e,
    constraints: i
  };
}
function ge(this: any, t: any, n: any, s: any, e: any): any {
  for (let o: any = 0; (o as any) < ((n as any).length as any); ++o) (n as any)[o] = 0;
  let i: any = 0;
  for (let o: any = 0; (o as any) < ((s as any).length as any); ++o) {
    const r: any = (t as any)[(2 as any) * (o as any)],
      l: any = (t as any)[((2 as any) * (o as any) as any) + (1 as any)];
    for (let f: any = (o as any) + (1 as any); (f as any) < ((s as any).length as any); ++f) {
      const u: any = (t as any)[(2 as any) * (f as any)],
        a: any = (t as any)[((2 as any) * (f as any) as any) + (1 as any)],
        y: any = ((s as any)[o] as any)[f],
        h: any = ((e as any)[o] as any)[f],
        b: any = (((u as any) - (r as any) as any) * ((u as any) - (r as any) as any) as any) + (((a as any) - (l as any) as any) * ((a as any) - (l as any) as any) as any),
        p: any = ((Math as any).sqrt as any)(b),
        M: any = (b as any) - ((y as any) * (y as any) as any);
      (h as any) > (0 as any) && (p as any) <= (y as any) || (h as any) < (0 as any) && (p as any) >= (y as any) || (i += ((2 as any) * (M as any) as any) * (M as any), (n as any)[(2 as any) * (o as any)] += ((4 as any) * (M as any) as any) * ((r as any) - (u as any) as any), (n as any)[((2 as any) * (o as any) as any) + (1 as any)] += ((4 as any) * (M as any) as any) * ((l as any) - (a as any) as any), (n as any)[(2 as any) * (f as any)] += ((4 as any) * (M as any) as any) * ((u as any) - (r as any) as any), (n as any)[((2 as any) * (f as any) as any) + (1 as any)] += ((4 as any) * (M as any) as any) * ((a as any) - (l as any) as any));
    }
  }
  return i;
}
function xe(this: any, t: any, n: any = {}): any {
  let s: any = (pe as any)(t, n);
  const e: any = (n as any).lossFunction || tt;
  if (((t as any).length as any) >= (8 as any)) {
    const i: any = (ye as any)(t, n),
      o: any = (e as any)(i, t),
      r: any = (e as any)(s, t);
    ((o as any) + (1e-8 as any) as any) < (r as any) && (s = i);
  }
  return s;
}
function ye(this: any, t: any, n: any = {}): any {
  const s: any = (n as any).restarts || 10,
    e: any = [],
    i: any = {};
  for (const h of t) (((h as any).sets as any).length as any) === (1 as any) && ((i as any)[((h as any).sets as any)[0]] = (e as any).length, ((e as any).push as any)(h));
  let {
    distances: o,
    constraints: r
  }: any = (de as any)(t, e, i);
  const l: any = ((ut as any)(((o as any).map as any)(ut)) as any) / ((o as any).length as any);
  o = ((o as any).map as any)((h: any): any => ((h as any).map as any)((b: any): any => (b as any) / (l as any)));
  const f: any = (h: any, b: any): any => (ge as any)(h, b, o, r);
  let u: any = null;
  for (let h: any = 0; (h as any) < (s as any); ++h) {
    const b: any = (((ct as any)(((o as any).length as any) * (2 as any)) as any).map as any)((Math as any).random),
      p: any = (fe as any)(f, b, n);
    (!u || ((p as any).fx as any) < ((u as any).fx as any)) && (u = p);
  }
  const a: any = (u as any).x,
    y: any = {};
  for (let h: any = 0; (h as any) < ((e as any).length as any); ++h) {
    const b: any = (e as any)[h];
    (y as any)[((b as any).sets as any)[0]] = {
      x: ((a as any)[(2 as any) * (h as any)] as any) * (l as any),
      y: ((a as any)[((2 as any) * (h as any) as any) + (1 as any)] as any) * (l as any),
      radius: ((Math as any).sqrt as any)(((b as any).size as any) / ((Math as any).PI as any))
    };
  }
  if ((n as any).history) for (const h of (n as any).history) (ft as any)((h as any).x, l);
  return y;
}
function pe(this: any, t: any, n: any): any {
  const s: any = n && (n as any).lossFunction ? (n as any).lossFunction : tt,
    e: any = {},
    i: any = {};
  for (const y of t) if ((((y as any).sets as any).length as any) === (1 as any)) {
    const h: any = ((y as any).sets as any)[0];
    (e as any)[h] = {
      x: 1e10,
      y: 1e10,
      rowid: (e as any).length,
      size: (y as any).size,
      radius: ((Math as any).sqrt as any)(((y as any).size as any) / ((Math as any).PI as any))
    }, (i as any)[h] = [];
  }
  t = ((t as any).filter as any)((y: any): any => (((y as any).sets as any).length as any) === (2 as any));
  for (const y of t) {
    let h: any = ((y as any).weight as any) != (null as any) ? (y as any).weight : 1;
    const b: any = ((y as any).sets as any)[0],
      p: any = ((y as any).sets as any)[1];
    (((y as any).size as any) + (Rt as any) as any) >= (((Math as any).min as any)(((e as any)[b] as any).size, ((e as any)[p] as any).size) as any) && (h = 0), (((i as any)[b] as any).push as any)({
      set: p,
      size: (y as any).size,
      weight: h
    }), (((i as any)[p] as any).push as any)({
      set: b,
      size: (y as any).size,
      weight: h
    });
  }
  const o: any = [];
  ((((Object as any).keys as any)(i) as any).forEach as any)((y: any): any => {
    let h: any = 0;
    for (let b: any = 0; (b as any) < (((i as any)[y] as any).length as any); ++b) h += ((((i as any)[y] as any)[b] as any).size as any) * ((((i as any)[y] as any)[b] as any).weight as any);
    ((o as any).push as any)({
      set: y,
      size: h
    });
  });
  function r(this: any, y: any, h: any): any {
    return ((h as any).size as any) - ((y as any).size as any);
  }
  ((o as any).sort as any)(r);
  const l: any = {};
  function f(this: any, y: any): any {
    return (y as any).set in l;
  }
  function u(this: any, y: any, h: any): any {
    ((e as any)[h] as any).x = (y as any).x, ((e as any)[h] as any).y = (y as any).y, (l as any)[h] = !0;
  }
  (u as any)({
    x: 0,
    y: 0
  }, ((o as any)[0] as any).set);
  for (let y: any = 1; (y as any) < ((o as any).length as any); ++y) {
    const h: any = ((o as any)[y] as any).set,
      b: any = (((i as any)[h] as any).filter as any)(f),
      p: any = (e as any)[h];
    if (((b as any).sort as any)(r), ((b as any).length as any) === (0 as any)) throw "ERROR: missing pairwise overlap information";
    const M: any = [];
    for (var a: any = 0; (a as any) < ((b as any).length as any); ++a) {
      const S: any = (e as any)[((b as any)[a] as any).set],
        g: any = (ht as any)((p as any).radius, (S as any).radius, ((b as any)[a] as any).size);
      ((M as any).push as any)({
        x: ((S as any).x as any) + (g as any),
        y: (S as any).y
      }), ((M as any).push as any)({
        x: ((S as any).x as any) - (g as any),
        y: (S as any).y
      }), ((M as any).push as any)({
        y: ((S as any).y as any) + (g as any),
        x: (S as any).x
      }), ((M as any).push as any)({
        y: ((S as any).y as any) - (g as any),
        x: (S as any).x
      });
      for (let m: any = (a as any) + (1 as any); (m as any) < ((b as any).length as any); ++m) {
        const v: any = (e as any)[((b as any)[m] as any).set],
          c: any = (ht as any)((p as any).radius, (v as any).radius, ((b as any)[m] as any).size),
          x: any = (Tt as any)({
            x: (S as any).x,
            y: (S as any).y,
            radius: g
          }, {
            x: (v as any).x,
            y: (v as any).y,
            radius: c
          });
        ((M as any).push as any)(...x);
      }
    }
    let E: any = 1e50,
      _: any = (M as any)[0];
    for (const S of M) {
      ((e as any)[h] as any).x = (S as any).x, ((e as any)[h] as any).y = (S as any).y;
      const g: any = (s as any)(e, t);
      (g as any) < (E as any) && (E = g, _ = S);
    }
    (u as any)(_, h);
  }
  return e;
}
function tt(this: any, t: any, n: any): any {
  let s: any = 0;
  for (const e of n) {
    if ((((e as any).sets as any).length as any) === (1 as any)) continue;
    let i: any;
    if ((((e as any).sets as any).length as any) === (2 as any)) {
      const r: any = (t as any)[((e as any).sets as any)[0]],
        l: any = (t as any)[((e as any).sets as any)[1]];
      i = (xt as any)((r as any).radius, (l as any).radius, (q as any)(r, l));
    } else i = (st as any)((((e as any).sets as any).map as any)((r: any): any => (t as any)[r]));
    const o: any = ((e as any).weight as any) != (null as any) ? (e as any).weight : 1;
    s += ((o as any) * ((i as any) - ((e as any).size as any) as any) as any) * ((i as any) - ((e as any).size as any) as any);
  }
  return s;
}
function Dt(this: any, t: any, n: any): any {
  let s: any = 0;
  for (const e of n) {
    if ((((e as any).sets as any).length as any) === (1 as any)) continue;
    let i: any;
    if ((((e as any).sets as any).length as any) === (2 as any)) {
      const l: any = (t as any)[((e as any).sets as any)[0]],
        f: any = (t as any)[((e as any).sets as any)[1]];
      i = (xt as any)((l as any).radius, (f as any).radius, (q as any)(l, f));
    } else i = (st as any)((((e as any).sets as any).map as any)((l: any): any => (t as any)[l]));
    const o: any = ((e as any).weight as any) != (null as any) ? (e as any).weight : 1,
      r: any = ((Math as any).log as any)(((i as any) + (1 as any) as any) / (((e as any).size as any) + (1 as any) as any));
    s += ((o as any) * (r as any) as any) * (r as any);
  }
  return s;
}
function me(this: any, t: any, n: any, s: any): any {
  if ((s as any) == (null as any) ? ((t as any).sort as any)((i: any, o: any): any => ((o as any).radius as any) - ((i as any).radius as any)) : ((t as any).sort as any)(s), ((t as any).length as any) > (0 as any)) {
    const i: any = ((t as any)[0] as any).x,
      o: any = ((t as any)[0] as any).y;
    for (const r of t) (r as any).x -= i, (r as any).y -= o;
  }
  if (((t as any).length as any) === (2 as any) && ((q as any)((t as any)[0], (t as any)[1]) as any) < (((Math as any).abs as any)((((t as any)[1] as any).radius as any) - (((t as any)[0] as any).radius as any)) as any) && (((t as any)[1] as any).x = (((((t as any)[0] as any).x as any) + (((t as any)[0] as any).radius as any) as any) - (((t as any)[1] as any).radius as any) as any) - (1e-10 as any), ((t as any)[1] as any).y = ((t as any)[0] as any).y), ((t as any).length as any) > (1 as any)) {
    const i: any = (((Math as any).atan2 as any)(((t as any)[1] as any).x, ((t as any)[1] as any).y) as any) - (n as any),
      o: any = ((Math as any).cos as any)(i),
      r: any = ((Math as any).sin as any)(i);
    for (const l of t) {
      const f: any = (l as any).x,
        u: any = (l as any).y;
      (l as any).x = ((o as any) * (f as any) as any) - ((r as any) * (u as any) as any), (l as any).y = ((r as any) * (f as any) as any) + ((o as any) * (u as any) as any);
    }
  }
  if (((t as any).length as any) > (2 as any)) {
    let i: any = (((Math as any).atan2 as any)(((t as any)[2] as any).x, ((t as any)[2] as any).y) as any) - (n as any);
    for (; (i as any) < (0 as any);) i += (2 as any) * ((Math as any).PI as any);
    for (; (i as any) > ((2 as any) * ((Math as any).PI as any) as any);) i -= (2 as any) * ((Math as any).PI as any);
    if ((i as any) > ((Math as any).PI as any)) {
      const o: any = (((t as any)[1] as any).y as any) / ((1e-10 as any) + (((t as any)[1] as any).x as any) as any);
      for (const r of t) {
        var e: any = (((r as any).x as any) + ((o as any) * ((r as any).y as any) as any) as any) / ((1 as any) + ((o as any) * (o as any) as any) as any);
        (r as any).x = ((2 as any) * (e as any) as any) - ((r as any).x as any), (r as any).y = (((2 as any) * (e as any) as any) * (o as any) as any) - ((r as any).y as any);
      }
    }
  }
}
function be(this: any, t: any): any {
  ((t as any).forEach as any)((i: any): any => {
    (i as any).parent = i;
  });
  function n(this: any, i: any): any {
    return ((i as any).parent as any) !== (i as any) && ((i as any).parent = (n as any)((i as any).parent)), (i as any).parent;
  }
  function s(this: any, i: any, o: any): any {
    const r: any = (n as any)(i),
      l: any = (n as any)(o);
    (r as any).parent = l;
  }
  for (let i: any = 0; (i as any) < ((t as any).length as any); ++i) for (let o: any = (i as any) + (1 as any); (o as any) < ((t as any).length as any); ++o) {
    const r: any = (((t as any)[i] as any).radius as any) + (((t as any)[o] as any).radius as any);
    (((q as any)((t as any)[i], (t as any)[o]) as any) + (1e-10 as any) as any) < (r as any) && (s as any)((t as any)[o], (t as any)[i]);
  }
  const e: any = new (Map as any)();
  for (let i: any = 0; (i as any) < ((t as any).length as any); ++i) {
    const o: any = (((n as any)((t as any)[i]) as any).parent as any).setid;
    ((e as any).has as any)(o) || ((e as any).set as any)(o, []), ((((e as any).get as any)(o) as any).push as any)((t as any)[i]);
  }
  return ((t as any).forEach as any)((i: any): any => {
    delete (i as any).parent;
  }), ((Array as any).from as any)(((e as any).values as any)());
}
function dt(this: any, t: any): any {
  const n: any = (s: any): any => {
    const e: any = ((t as any).reduce as any)((o: any, r: any): any => ((Math as any).max as any)(o, ((r as any)[s] as any) + ((r as any).radius as any)), (Number as any).NEGATIVE_INFINITY),
      i: any = ((t as any).reduce as any)((o: any, r: any): any => ((Math as any).min as any)(o, ((r as any)[s] as any) - ((r as any).radius as any)), (Number as any).POSITIVE_INFINITY);
    return {
      max: e,
      min: i
    };
  };
  return {
    xRange: (n as any)("x"),
    yRange: (n as any)("y")
  };
}
function Ct(this: any, t: any, n: any, s: any): any {
  (n as any) == (null as any) && (n = ((Math as any).PI as any) / (2 as any));
  let e: any = (((Ft as any)(t) as any).map as any)((u: any): any => ((Object as any).assign as any)({}, u));
  const i: any = (be as any)(e);
  for (const u of i) {
    (me as any)(u, n, s);
    const a: any = (dt as any)(u);
    (u as any).size = ((((a as any).xRange as any).max as any) - (((a as any).xRange as any).min as any) as any) * ((((a as any).yRange as any).max as any) - (((a as any).yRange as any).min as any) as any), (u as any).bounds = a;
  }
  ((i as any).sort as any)((u: any, a: any): any => ((a as any).size as any) - ((u as any).size as any)), e = (i as any)[0];
  let o: any = (e as any).bounds;
  const r: any = ((((o as any).xRange as any).max as any) - (((o as any).xRange as any).min as any) as any) / (50 as any);
  function l(this: any, u: any, a: any, y: any): any {
    if (!u) return;
    const h: any = (u as any).bounds;
    let b: any, p: any;
    if (a) b = ((((o as any).xRange as any).max as any) - (((h as any).xRange as any).min as any) as any) + (r as any);else {
      b = (((o as any).xRange as any).max as any) - (((h as any).xRange as any).max as any);
      const M: any = (((((h as any).xRange as any).max as any) - (((h as any).xRange as any).min as any) as any) / (2 as any) as any) - (((((o as any).xRange as any).max as any) - (((o as any).xRange as any).min as any) as any) / (2 as any) as any);
      (M as any) < (0 as any) && (b += M);
    }
    if (y) p = ((((o as any).yRange as any).max as any) - (((h as any).yRange as any).min as any) as any) + (r as any);else {
      p = (((o as any).yRange as any).max as any) - (((h as any).yRange as any).max as any);
      const M: any = (((((h as any).yRange as any).max as any) - (((h as any).yRange as any).min as any) as any) / (2 as any) as any) - (((((o as any).yRange as any).max as any) - (((o as any).yRange as any).min as any) as any) / (2 as any) as any);
      (M as any) < (0 as any) && (p += M);
    }
    for (const M of u) (M as any).x += b, (M as any).y += p, ((e as any).push as any)(M);
  }
  let f: any = 1;
  for (; (f as any) < ((i as any).length as any);) (l as any)((i as any)[f], !0, !1), (l as any)((i as any)[(f as any) + (1 as any)], !1, !0), (l as any)((i as any)[(f as any) + (2 as any)], !0, !0), f += 3, o = (dt as any)(e);
  return (Ot as any)(e);
}
function Nt(this: any, t: any, n: any, s: any, e: any, i: any): any {
  const o: any = (Ft as any)(t);
  n -= (2 as any) * (e as any), s -= (2 as any) * (e as any);
  const {
    xRange: r,
    yRange: l
  }: any = (dt as any)(o);
  if (((r as any).max as any) === ((r as any).min as any) || ((l as any).max as any) === ((l as any).min as any)) return ((console as any).log as any)("not scaling solution: zero size detected"), t;
  let f: any, u: any;
  if (i) {
    const b: any = (((Math as any).sqrt as any)((i as any) / ((Math as any).PI as any)) as any) * (2 as any);
    f = (n as any) / (b as any), u = (s as any) / (b as any);
  } else f = (n as any) / (((r as any).max as any) - ((r as any).min as any) as any), u = (s as any) / (((l as any).max as any) - ((l as any).min as any) as any);
  const a: any = ((Math as any).min as any)(u, f),
    y: any = ((n as any) - ((((r as any).max as any) - ((r as any).min as any) as any) * (a as any) as any) as any) / (2 as any),
    h: any = ((s as any) - ((((l as any).max as any) - ((l as any).min as any) as any) * (a as any) as any) as any) / (2 as any);
  return (Ot as any)(((o as any).map as any)((b: any): any => ({
    radius: (a as any) * ((b as any).radius as any),
    x: ((e as any) + (y as any) as any) + ((((b as any).x as any) - ((r as any).min as any) as any) * (a as any) as any),
    y: ((e as any) + (h as any) as any) + ((((b as any).y as any) - ((l as any).min as any) as any) * (a as any) as any),
    setid: (b as any).setid
  })));
}
function Ot(this: any, t: any): any {
  const n: any = {};
  for (const s of t) (n as any)[(s as any).setid] = s;
  return n;
}
function Ft(this: any, t: any): any {
  return ((((Object as any).keys as any)(t) as any).map as any)((s: any): any => ((Object as any).assign as any)((t as any)[s], {
    setid: s
  }));
}
function ve(this: any, t: any = {}): any {
  let n: any = !1,
    s: any = 600,
    e: any = 350,
    i: any = 15,
    o: any = 1e3,
    r: any = ((Math as any).PI as any) / (2 as any),
    l: any = !0,
    f: any = null,
    u: any = !0,
    a: any = !0,
    y: any = null,
    h: any = null,
    b: any = !1,
    p: any = null,
    M: any = t && (t as any).symmetricalTextCentre ? (t as any).symmetricalTextCentre : !1,
    E: any = {},
    _: any = t && (t as any).colourScheme ? (t as any).colourScheme : t && (t as any).colorScheme ? (t as any).colorScheme : ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"],
    S: any = 0,
    g: any = function (this: any, x: any): any {
      if (x in E) return (E as any)[x];
      var d: any = (E as any)[x] = (_ as any)[S];
      return S += 1, (S as any) >= ((_ as any).length as any) && (S = 0), d;
    },
    m: any = At,
    v: any = tt;
  function c(this: any, x: any): any {
    let d: any = ((x as any).datum as any)();
    const D: any = new (Set as any)();
    ((d as any).forEach as any)((k: any): any => {
      ((k as any).size as any) == (0 as any) && (((k as any).sets as any).length as any) == (1 as any) && ((D as any).add as any)(((k as any).sets as any)[0]);
    }), d = ((d as any).filter as any)((k: any): any => !(((k as any).sets as any).some as any)((F: any): any => ((D as any).has as any)(F)));
    let I: any = {},
      C: any = {};
    if (((d as any).length as any) > (0 as any)) {
      let k: any = (m as any)(d, {
        lossFunction: v,
        distinct: b
      });
      l && (k = (Ct as any)(k, r, h)), I = (Nt as any)(k, s, e, i, f), C = (Lt as any)(I, d, M);
    }
    const U: any = {};
    ((d as any).forEach as any)((k: any): any => {
      (k as any).label && ((U as any)[(k as any).sets] = (k as any).label);
    });
    function V(this: any, k: any): any {
      if ((k as any).sets in U) return (U as any)[(k as any).sets];
      if ((((k as any).sets as any).length as any) == (1 as any)) return ("" as any) + (((k as any).sets as any)[0] as any);
    }
    ((((((((x as any).selectAll as any)("svg") as any).data as any)([I]) as any).enter as any)() as any).append as any)("svg");
    const O: any = ((x as any).select as any)("svg");
    n ? ((O as any).attr as any)("viewBox", `0 0 ${s} ${e}`) : ((((O as any).attr as any)("width", s) as any).attr as any)("height", e);
    const R: any = {};
    let T: any = !1;
    ((((O as any).selectAll as any)(".venn-area path") as any).each as any)(function (this: any, k: any): any {
      const F: any = ((this as any).getAttribute as any)("d");
      (((k as any).sets as any).length as any) == (1 as any) && F && !b && (T = !0, (R as any)[((k as any).sets as any)[0]] = (Me as any)(F));
    });
    function A(this: any, k: any): any {
      return (F: any): any => {
        const H: any = (((k as any).sets as any).map as any)((et: any): any => {
          let Y: any = (R as any)[et],
            Z: any = (I as any)[et];
          return Y || (Y = {
            x: (s as any) / (2 as any),
            y: (e as any) / (2 as any),
            radius: 1
          }), Z || (Z = {
            x: (s as any) / (2 as any),
            y: (e as any) / (2 as any),
            radius: 1
          }), {
            x: (((Y as any).x as any) * ((1 as any) - (F as any) as any) as any) + (((Z as any).x as any) * (F as any) as any),
            y: (((Y as any).y as any) * ((1 as any) - (F as any) as any) as any) + (((Z as any).y as any) * (F as any) as any),
            radius: (((Y as any).radius as any) * ((1 as any) - (F as any) as any) as any) + (((Z as any).radius as any) * (F as any) as any)
          };
        });
        return (St as any)(H, p);
      };
    }
    const G: any = ((((O as any).selectAll as any)(".venn-area") as any).data as any)(d, (k: any): any => (k as any).sets),
      P: any = ((((((((G as any).enter as any)() as any).append as any)("g") as any).attr as any)("class", (k: any): any => `venn-area venn-${(((k as any).sets as any).length as any) == (1 as any) ? "circle" : "intersection"}${(k as any).colour || (k as any).color ? " venn-coloured" : ""}`) as any).attr as any)("data-venn-sets", (k: any): any => (((k as any).sets as any).join as any)("_")),
      B: any = ((P as any).append as any)("path"),
      L: any = ((((((((((((((P as any).append as any)("text") as any).attr as any)("class", "label") as any).text as any)((k: any): any => (V as any)(k)) as any).attr as any)("text-anchor", "middle") as any).attr as any)("dy", ".35em") as any).attr as any)("x", (s as any) / (2 as any)) as any).attr as any)("y", (e as any) / (2 as any));
    a && (((((((((B as any).style as any)("fill-opacity", "0") as any).filter as any)((k: any): any => (((k as any).sets as any).length as any) == (1 as any)) as any).style as any)("fill", (k: any): any => (k as any).colour ? (k as any).colour : (k as any).color ? (k as any).color : (g as any)((k as any).sets)) as any).style as any)("fill-opacity", ".25"), ((L as any).style as any)("fill", (k: any): any => (k as any).colour || (k as any).color ? "#FFF" : (t as any).textFill ? (t as any).textFill : (((k as any).sets as any).length as any) == (1 as any) ? (g as any)((k as any).sets) : "#444"));
    function K(this: any, k: any): any {
      return (typeof (k as any).transition as any) == ("function" as any) ? ((((k as any).transition as any)("venn") as any).duration as any)(o) : k;
    }
    let z: any = x;
    T && (typeof (z as any).transition as any) == ("function" as any) ? (z = (K as any)(x), ((((z as any).selectAll as any)("path") as any).attrTween as any)("d", A)) : ((((z as any).selectAll as any)("path") as any).attr as any)("d", (k: any): any => (St as any)((((k as any).sets as any).map as any)((F: any): any => (I as any)[F])), p);
    const N: any = ((((((((((z as any).selectAll as any)("text") as any).filter as any)((k: any): any => (k as any).sets in C) as any).text as any)((k: any): any => (V as any)(k)) as any).attr as any)("x", (k: any): any => ((Math as any).floor as any)(((C as any)[(k as any).sets] as any).x)) as any).attr as any)("y", (k: any): any => ((Math as any).floor as any)(((C as any)[(k as any).sets] as any).y));
    u && (T ? "on" in N ? ((N as any).on as any)("end", (rt as any)(I, V)) : ((N as any).each as any)("end", (rt as any)(I, V)) : ((N as any).each as any)((rt as any)(I, V)));
    const j: any = (((K as any)(((G as any).exit as any)()) as any).remove as any)();
    (typeof (G as any).transition as any) == ("function" as any) && ((((j as any).selectAll as any)("path") as any).attrTween as any)("d", A);
    const X: any = ((((((j as any).selectAll as any)("text") as any).attr as any)("x", (s as any) / (2 as any)) as any).attr as any)("y", (e as any) / (2 as any));
    return (y as any) !== (null as any) && (((L as any).style as any)("font-size", "0px"), ((N as any).style as any)("font-size", y), ((X as any).style as any)("font-size", "0px")), {
      circles: I,
      textCentres: C,
      nodes: G,
      enter: P,
      update: z,
      exit: j
    };
  }
  return (c as any).wrap = function (this: any, x: any): any {
    return (arguments as any).length ? (u = x, c) : u;
  }, (c as any).useViewBox = function (this: any): any {
    return n = !0, c;
  }, (c as any).width = function (this: any, x: any): any {
    return (arguments as any).length ? (s = x, c) : s;
  }, (c as any).height = function (this: any, x: any): any {
    return (arguments as any).length ? (e = x, c) : e;
  }, (c as any).padding = function (this: any, x: any): any {
    return (arguments as any).length ? (i = x, c) : i;
  }, (c as any).distinct = function (this: any, x: any): any {
    return (arguments as any).length ? (b = x, c) : b;
  }, (c as any).colours = function (this: any, x: any): any {
    return (arguments as any).length ? (g = x, c) : g;
  }, (c as any).colors = function (this: any, x: any): any {
    return (arguments as any).length ? (g = x, c) : g;
  }, (c as any).fontSize = function (this: any, x: any): any {
    return (arguments as any).length ? (y = x, c) : y;
  }, (c as any).round = function (this: any, x: any): any {
    return (arguments as any).length ? (p = x, c) : p;
  }, (c as any).duration = function (this: any, x: any): any {
    return (arguments as any).length ? (o = x, c) : o;
  }, (c as any).layoutFunction = function (this: any, x: any): any {
    return (arguments as any).length ? (m = x, c) : m;
  }, (c as any).normalize = function (this: any, x: any): any {
    return (arguments as any).length ? (l = x, c) : l;
  }, (c as any).scaleToFit = function (this: any, x: any): any {
    return (arguments as any).length ? (f = x, c) : f;
  }, (c as any).styled = function (this: any, x: any): any {
    return (arguments as any).length ? (a = x, c) : a;
  }, (c as any).orientation = function (this: any, x: any): any {
    return (arguments as any).length ? (r = x, c) : r;
  }, (c as any).orientationOrder = function (this: any, x: any): any {
    return (arguments as any).length ? (h = x, c) : h;
  }, (c as any).lossFunction = function (this: any, x: any): any {
    return (arguments as any).length ? (v = (x as any) === ("default" as any) ? tt : (x as any) === ("logRatio" as any) ? Dt : x, c) : v;
  }, c;
}
function rt(this: any, t: any, n: any): any {
  return function (this: any, s: any): any {
    const e: any = this,
      i: any = ((t as any)[((s as any).sets as any)[0]] as any).radius || 50,
      o: any = (n as any)(s) || "",
      r: any = ((((o as any).split as any)(/\s+/) as any).reverse as any)(),
      f: any = (((o as any).length as any) + ((r as any).length as any) as any) / (3 as any);
    let u: any = ((r as any).pop as any)(),
      a: any = [u],
      y: any = 0;
    const h: number = 1.1;
    (e as any).textContent = null;
    const b: any = [];
    function p(this: any, g: any): any {
      const m: any = (((e as any).ownerDocument as any).createElementNS as any)((e as any).namespaceURI, "tspan");
      return (m as any).textContent = g, ((b as any).push as any)(m), ((e as any).append as any)(m), m;
    }
    let M: any = (p as any)(u);
    for (; u = ((r as any).pop as any)(), !!u;) {
      ((a as any).push as any)(u);
      const g: any = ((a as any).join as any)(" ");
      (M as any).textContent = g, ((g as any).length as any) > (f as any) && (((M as any).getComputedTextLength as any)() as any) > (i as any) && (((a as any).pop as any)(), (M as any).textContent = ((a as any).join as any)(" "), a = [u], M = (p as any)(u), y++);
    }
    const E: any = (.35 as any) - (((y as any) * (h as any) as any) / (2 as any) as any),
      _: any = ((e as any).getAttribute as any)("x"),
      S: any = ((e as any).getAttribute as any)("y");
    ((b as any).forEach as any)((g: any, m: any): any => {
      ((g as any).setAttribute as any)("x", _), ((g as any).setAttribute as any)("y", S), ((g as any).setAttribute as any)("dy", `${(E as any) + ((m as any) * (h as any) as any)}em`);
    });
  };
}
function at(this: any, t: any, n: any, s: any): any {
  let e: any = (((n as any)[0] as any).radius as any) - ((q as any)((n as any)[0], t) as any);
  for (let i: any = 1; (i as any) < ((n as any).length as any); ++i) {
    const o: any = (((n as any)[i] as any).radius as any) - ((q as any)((n as any)[i], t) as any);
    (o as any) <= (e as any) && (e = o);
  }
  for (let i: any = 0; (i as any) < ((s as any).length as any); ++i) {
    const o: any = ((q as any)((s as any)[i], t) as any) - (((s as any)[i] as any).radius as any);
    (o as any) <= (e as any) && (e = o);
  }
  return e;
}
function jt(this: any, t: any, n: any, s: any): any {
  const e: any = [];
  for (const a of t) ((e as any).push as any)({
    x: (a as any).x,
    y: (a as any).y
  }), ((e as any).push as any)({
    x: ((a as any).x as any) + (((a as any).radius as any) / (2 as any) as any),
    y: (a as any).y
  }), ((e as any).push as any)({
    x: ((a as any).x as any) - (((a as any).radius as any) / (2 as any) as any),
    y: (a as any).y
  }), ((e as any).push as any)({
    x: (a as any).x,
    y: ((a as any).y as any) + (((a as any).radius as any) / (2 as any) as any)
  }), ((e as any).push as any)({
    x: (a as any).x,
    y: ((a as any).y as any) - (((a as any).radius as any) / (2 as any) as any)
  });
  let i: any = (e as any)[0],
    o: any = (at as any)((e as any)[0], t, n);
  for (let a: any = 1; (a as any) < ((e as any).length as any); ++a) {
    const y: any = (at as any)((e as any)[a], t, n);
    (y as any) >= (o as any) && (i = (e as any)[a], o = y);
  }
  const r: any = ((zt as any)((a: any): any => (-1 as any) * ((at as any)({
      x: (a as any)[0],
      y: (a as any)[1]
    }, t, n) as any), [(i as any).x, (i as any).y], {
      maxIterations: 500,
      minErrorDelta: 1e-10
    }) as any).x,
    l: any = {
      x: s ? 0 : (r as any)[0],
      y: (r as any)[1]
    };
  let f: any = !0;
  for (const a of t) if (((q as any)(l, a) as any) > ((a as any).radius as any)) {
    f = !1;
    break;
  }
  for (const a of n) if (((q as any)(l, a) as any) < ((a as any).radius as any)) {
    f = !1;
    break;
  }
  if (f) return l;
  if (((t as any).length as any) == (1 as any)) return {
    x: ((t as any)[0] as any).x,
    y: ((t as any)[0] as any).y
  };
  const u: any = {};
  return (st as any)(t, u), (((u as any).arcs as any).length as any) === (0 as any) ? {
    x: 0,
    y: -1e3,
    disjoint: !0
  } : (((u as any).arcs as any).length as any) == (1 as any) ? {
    x: ((((u as any).arcs as any)[0] as any).circle as any).x,
    y: ((((u as any).arcs as any)[0] as any).circle as any).y
  } : (n as any).length ? (jt as any)(t, []) : (Et as any)((((u as any).arcs as any).map as any)((a: any): any => (a as any).p1));
}
function Ie(this: any, t: any): any {
  const n: any = {},
    s: any = ((Object as any).keys as any)(t);
  for (const e of s) (n as any)[e] = [];
  for (let e: any = 0; (e as any) < ((s as any).length as any); e++) {
    const i: any = (s as any)[e],
      o: any = (t as any)[i];
    for (let r: any = (e as any) + (1 as any); (r as any) < ((s as any).length as any); ++r) {
      const l: any = (s as any)[r],
        f: any = (t as any)[l],
        u: any = (q as any)(o, f);
      ((u as any) + ((f as any).radius as any) as any) <= (((o as any).radius as any) + (1e-10 as any) as any) ? (((n as any)[l] as any).push as any)(i) : ((u as any) + ((o as any).radius as any) as any) <= (((f as any).radius as any) + (1e-10 as any) as any) && (((n as any)[i] as any).push as any)(l);
    }
  }
  return n;
}
function Lt(this: any, t: any, n: any, s: any): any {
  const e: any = {},
    i: any = (Ie as any)(t);
  for (let o: any = 0; (o as any) < ((n as any).length as any); ++o) {
    const r: any = ((n as any)[o] as any).sets,
      l: any = {},
      f: any = {};
    for (let h: any = 0; (h as any) < ((r as any).length as any); ++h) {
      (l as any)[(r as any)[h]] = !0;
      const b: any = (i as any)[(r as any)[h]];
      for (let p: any = 0; (p as any) < ((b as any).length as any); ++p) (f as any)[(b as any)[p]] = !0;
    }
    const u: any = [],
      a: any = [];
    for (let h in t) h in l ? ((u as any).push as any)((t as any)[h]) : h in f || ((a as any).push as any)((t as any)[h]);
    const y: any = (jt as any)(u, a, s);
    (e as any)[r] = y, (y as any).disjoint && (((n as any)[o] as any).size as any) > (0 as any) && ((console as any).log as any)((("WARNING: area " as any) + (r as any) as any) + (" not represented on screen" as any));
  }
  return e;
}
function ke(this: any, t: any, n: any, s: any): any {
  const e: any = [];
  return ((e as any).push as any)(`
M`, t, n), ((e as any).push as any)(`
m`, -s, 0), ((e as any).push as any)(`
a`, s, s, 0, 1, 0, (s as any) * (2 as any), 0), ((e as any).push as any)(`
a`, s, s, 0, 1, 0, (-s as any) * (2 as any), 0), ((e as any).join as any)(" ");
}
function Me(this: any, t: any): any {
  const n: any = ((t as any).split as any)(" ");
  return {
    x: ((Number as any).parseFloat as any)((n as any)[1]),
    y: ((Number as any).parseFloat as any)((n as any)[2]),
    radius: -((Number as any).parseFloat as any)((n as any)[4])
  };
}
function Pt(this: any, t: any): any {
  if (((t as any).length as any) === (0 as any)) return [];
  const n: any = {};
  return (st as any)(t, n), (n as any).arcs;
}
function Bt(this: any, t: any, n: any): any {
  if (((t as any).length as any) === (0 as any)) return "M 0 0";
  const s: any = ((Math as any).pow as any)(10, n || 0),
    e: any = (n as any) != (null as any) ? (o: any): any => (((Math as any).round as any)((o as any) * (s as any)) as any) / (s as any) : (o: any): any => o;
  if (((t as any).length as any) == (1 as any)) {
    const o: any = ((t as any)[0] as any).circle;
    return (ke as any)((e as any)((o as any).x), (e as any)((o as any).y), (e as any)((o as any).radius));
  }
  const i: any = [`
M`, (e as any)((((t as any)[0] as any).p2 as any).x), (e as any)((((t as any)[0] as any).p2 as any).y)];
  for (const o of t) {
    const r: any = (e as any)(((o as any).circle as any).radius);
    ((i as any).push as any)(`
A`, r, r, 0, (o as any).large ? 1 : 0, (o as any).sweep ? 1 : 0, (e as any)(((o as any).p1 as any).x), (e as any)(((o as any).p1 as any).y));
  }
  return ((i as any).join as any)(" ");
}
function St(this: any, t: any, n: any): any {
  return (Bt as any)((Pt as any)(t), n);
}
function Se(this: any, t: any, n: any = {}): any {
  const {
    lossFunction: s,
    layoutFunction: e = At,
    normalize: i = !0,
    orientation: o = ((Math as any).PI as any) / (2 as any),
    orientationOrder: r,
    width: l = 600,
    height: f = 350,
    padding: u = 15,
    scaleToFit: a = !1,
    symmetricalTextCentre: y = !1,
    distinct: h,
    round: b = 2
  }: any = n;
  let p: any = (e as any)(t, {
    lossFunction: (s as any) === ("default" as any) || !s ? tt : (s as any) === ("logRatio" as any) ? Dt : s,
    distinct: h
  });
  i && (p = (Ct as any)(p, o, r));
  const M: any = (Nt as any)(p, l, f, u, a),
    E: any = (Lt as any)(M, t, y),
    _: any = new (Map as any)(((((Object as any).keys as any)(M) as any).map as any)((m: any): any => [m, {
      set: m,
      x: ((M as any)[m] as any).x,
      y: ((M as any)[m] as any).y,
      radius: ((M as any)[m] as any).radius
    }])),
    S: any = ((t as any).map as any)((m: any): any => {
      const v: any = (((m as any).sets as any).map as any)((d: any): any => ((_ as any).get as any)(d)),
        c: any = (Pt as any)(v),
        x: any = (Bt as any)(c, b);
      return {
        circles: v,
        arcs: c,
        path: x,
        area: m,
        has: new (Set as any)((m as any).sets)
      };
    });
  function g(this: any, m: any): any {
    let v: any = "";
    for (const c of S) (((c as any).has as any).size as any) > ((m as any).length as any) && ((m as any).every as any)((x: any): any => (((c as any).has as any).has as any)(x)) && (v += (" " as any) + ((c as any).path as any));
    return v;
  }
  return ((S as any).map as any)(({
    circles: m,
    arcs: v,
    path: c,
    area: x
  }: any): any => ({
    data: x,
    text: (E as any)[(x as any).sets],
    circles: m,
    arcs: v,
    path: c,
    distinctPath: (c as any) + ((g as any)((x as any).sets) as any)
  }));
}
var gt: any = (function (this: any): any {
  var t: any = (w as any)(function (this: any, S: any, g: any, m: any, v: any): any {
      for (m = m || {}, v = (S as any).length; v--; (m as any)[(S as any)[v]] = g);
      return m;
    }, "o"),
    n: any = [5, 8],
    s: any = [7, 8, 11, 12, 17, 19, 22, 24],
    e: any = [1, 17],
    i: any = [1, 18],
    o: any = [7, 8, 11, 12, 14, 15, 16, 17, 19, 20, 21, 22, 24, 27],
    r: any = [1, 31],
    l: any = [1, 39],
    f: any = [7, 8, 11, 12, 17, 19, 22, 24, 27],
    u: any = [1, 57],
    a: any = [1, 56],
    y: any = [1, 58],
    h: any = [1, 59],
    b: any = [1, 60],
    p: any = [7, 8, 11, 12, 16, 17, 19, 20, 22, 24, 27, 31, 32, 33],
    M: any = {
      trace: (w as any)(function (this: any): any {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        optNewlines: 4,
        VENN: 5,
        document: 6,
        EOF: 7,
        NEWLINE: 8,
        line: 9,
        statement: 10,
        TITLE: 11,
        SET: 12,
        identifier: 13,
        BRACKET_LABEL: 14,
        COLON: 15,
        NUMERIC: 16,
        UNION: 17,
        identifierList: 18,
        TEXT: 19,
        IDENTIFIER: 20,
        STRING: 21,
        INDENT_TEXT: 22,
        indentedTextTail: 23,
        STYLE: 24,
        stylesOpt: 25,
        styleField: 26,
        COMMA: 27,
        styleValue: 28,
        valueTokens: 29,
        valueToken: 30,
        HEXCOLOR: 31,
        RGBCOLOR: 32,
        RGBACOLOR: 33,
        $accept: 0,
        $end: 1
      },
      terminals_: {
        2: "error",
        5: "VENN",
        7: "EOF",
        8: "NEWLINE",
        11: "TITLE",
        12: "SET",
        14: "BRACKET_LABEL",
        15: "COLON",
        16: "NUMERIC",
        17: "UNION",
        19: "TEXT",
        20: "IDENTIFIER",
        21: "STRING",
        22: "INDENT_TEXT",
        24: "STYLE",
        27: "COMMA",
        31: "HEXCOLOR",
        32: "RGBCOLOR",
        33: "RGBACOLOR"
      },
      productions_: [0, [3, 4], [4, 0], [4, 2], [6, 0], [6, 2], [9, 1], [9, 1], [10, 1], [10, 2], [10, 3], [10, 4], [10, 5], [10, 2], [10, 3], [10, 4], [10, 5], [10, 3], [10, 3], [10, 3], [10, 4], [10, 4], [10, 2], [10, 3], [23, 1], [23, 1], [23, 1], [23, 2], [23, 2], [25, 1], [25, 3], [26, 3], [28, 1], [28, 1], [29, 1], [29, 2], [30, 1], [30, 1], [30, 1], [30, 1], [30, 1], [18, 1], [18, 3], [13, 1], [13, 1]],
      performAction: (w as any)(function (this: any, g: any, m: any, v: any, c: any, x: any, d: any, D: any): any {
        var I: any = ((d as any).length as any) - (1 as any);
        switch (x) {
          case 1:
            return (d as any)[(I as any) - (1 as any)];
          case 2:
          case 3:
          case 4:
            (this as any).$ = [];
            break;
          case 5:
            (((d as any)[(I as any) - (1 as any)] as any).push as any)((d as any)[I]), (this as any).$ = (d as any)[(I as any) - (1 as any)];
            break;
          case 6:
            (this as any).$ = [];
            break;
          case 7:
          case 22:
          case 32:
          case 36:
          case 37:
          case 38:
          case 39:
          case 40:
            (this as any).$ = (d as any)[I];
            break;
          case 8:
            ((c as any).setDiagramTitle as any)((((d as any)[I] as any).substr as any)(6)), (this as any).$ = (((d as any)[I] as any).substr as any)(6);
            break;
          case 9:
            ((c as any).addSubsetData as any)([(d as any)[I]], void 0, void 0), (c as any).setIndentMode && ((c as any).setIndentMode as any)(!0);
            break;
          case 10:
            ((c as any).addSubsetData as any)([(d as any)[(I as any) - (1 as any)]], (d as any)[I], void 0), (c as any).setIndentMode && ((c as any).setIndentMode as any)(!0);
            break;
          case 11:
            ((c as any).addSubsetData as any)([(d as any)[(I as any) - (2 as any)]], void 0, (parseFloat as any)((d as any)[I])), (c as any).setIndentMode && ((c as any).setIndentMode as any)(!0);
            break;
          case 12:
            ((c as any).addSubsetData as any)([(d as any)[(I as any) - (3 as any)]], (d as any)[(I as any) - (2 as any)], (parseFloat as any)((d as any)[I])), (c as any).setIndentMode && ((c as any).setIndentMode as any)(!0);
            break;
          case 13:
            if ((((d as any)[I] as any).length as any) < (2 as any)) throw new (Error as any)("union requires multiple identifiers");
            (c as any).validateUnionIdentifiers && ((c as any).validateUnionIdentifiers as any)((d as any)[I]), ((c as any).addSubsetData as any)((d as any)[I], void 0, void 0), (c as any).setIndentMode && ((c as any).setIndentMode as any)(!0);
            break;
          case 14:
            if ((((d as any)[(I as any) - (1 as any)] as any).length as any) < (2 as any)) throw new (Error as any)("union requires multiple identifiers");
            (c as any).validateUnionIdentifiers && ((c as any).validateUnionIdentifiers as any)((d as any)[(I as any) - (1 as any)]), ((c as any).addSubsetData as any)((d as any)[(I as any) - (1 as any)], (d as any)[I], void 0), (c as any).setIndentMode && ((c as any).setIndentMode as any)(!0);
            break;
          case 15:
            if ((((d as any)[(I as any) - (2 as any)] as any).length as any) < (2 as any)) throw new (Error as any)("union requires multiple identifiers");
            (c as any).validateUnionIdentifiers && ((c as any).validateUnionIdentifiers as any)((d as any)[(I as any) - (2 as any)]), ((c as any).addSubsetData as any)((d as any)[(I as any) - (2 as any)], void 0, (parseFloat as any)((d as any)[I])), (c as any).setIndentMode && ((c as any).setIndentMode as any)(!0);
            break;
          case 16:
            if ((((d as any)[(I as any) - (3 as any)] as any).length as any) < (2 as any)) throw new (Error as any)("union requires multiple identifiers");
            (c as any).validateUnionIdentifiers && ((c as any).validateUnionIdentifiers as any)((d as any)[(I as any) - (3 as any)]), ((c as any).addSubsetData as any)((d as any)[(I as any) - (3 as any)], (d as any)[(I as any) - (2 as any)], (parseFloat as any)((d as any)[I])), (c as any).setIndentMode && ((c as any).setIndentMode as any)(!0);
            break;
          case 17:
          case 18:
          case 19:
            ((c as any).addTextData as any)((d as any)[(I as any) - (1 as any)], (d as any)[I], void 0);
            break;
          case 20:
          case 21:
            ((c as any).addTextData as any)((d as any)[(I as any) - (2 as any)], (d as any)[(I as any) - (1 as any)], (d as any)[I]);
            break;
          case 23:
            ((c as any).addStyleData as any)((d as any)[(I as any) - (1 as any)], (d as any)[I]);
            break;
          case 24:
          case 25:
          case 26:
            var C: any = ((c as any).getCurrentSets as any)();
            if (!C) throw new (Error as any)("text requires set");
            ((c as any).addTextData as any)(C, (d as any)[I], void 0);
            break;
          case 27:
          case 28:
            var C: any = ((c as any).getCurrentSets as any)();
            if (!C) throw new (Error as any)("text requires set");
            ((c as any).addTextData as any)(C, (d as any)[(I as any) - (1 as any)], (d as any)[I]);
            break;
          case 29:
          case 41:
            (this as any).$ = [(d as any)[I]];
            break;
          case 30:
          case 42:
            (this as any).$ = [...(d as any)[(I as any) - (2 as any)], (d as any)[I]];
            break;
          case 31:
            (this as any).$ = [(d as any)[(I as any) - (2 as any)], (d as any)[I]];
            break;
          case 33:
            (this as any).$ = (((d as any)[I] as any).join as any)(" ");
            break;
          case 34:
            (this as any).$ = [(d as any)[I]];
            break;
          case 35:
            (((d as any)[(I as any) - (1 as any)] as any).push as any)((d as any)[I]), (this as any).$ = (d as any)[(I as any) - (1 as any)];
            break;
          case 43:
          case 44:
            (this as any).$ = (d as any)[I];
            break;
        }
      }, "anonymous"),
      table: [(t as any)(n, [2, 2], {
        3: 1,
        4: 2
      }), {
        1: [3]
      }, {
        5: [1, 3],
        8: [1, 4]
      }, (t as any)(s, [2, 4], {
        6: 5
      }), (t as any)(n, [2, 3]), {
        7: [1, 6],
        8: [1, 8],
        9: 7,
        10: 9,
        11: [1, 10],
        12: [1, 11],
        17: [1, 12],
        19: [1, 13],
        22: [1, 14],
        24: [1, 15]
      }, {
        1: [2, 1]
      }, (t as any)(s, [2, 5]), (t as any)(s, [2, 6]), (t as any)(s, [2, 7]), (t as any)(s, [2, 8]), {
        13: 16,
        20: e,
        21: i
      }, {
        13: 20,
        18: 19,
        20: e,
        21: i
      }, {
        13: 20,
        18: 21,
        20: e,
        21: i
      }, {
        16: [1, 25],
        20: [1, 23],
        21: [1, 24],
        23: 22
      }, {
        13: 20,
        18: 26,
        20: e,
        21: i
      }, (t as any)(s, [2, 9], {
        14: [1, 27],
        15: [1, 28]
      }), (t as any)(o, [2, 43]), (t as any)(o, [2, 44]), (t as any)(s, [2, 13], {
        14: [1, 29],
        15: [1, 30],
        27: r
      }), (t as any)(o, [2, 41]), {
        16: [1, 34],
        20: [1, 32],
        21: [1, 33],
        27: r
      }, (t as any)(s, [2, 22]), (t as any)(s, [2, 24], {
        14: [1, 35]
      }), (t as any)(s, [2, 25], {
        14: [1, 36]
      }), (t as any)(s, [2, 26]), {
        20: l,
        25: 37,
        26: 38,
        27: r
      }, (t as any)(s, [2, 10], {
        15: [1, 40]
      }), {
        16: [1, 41]
      }, (t as any)(s, [2, 14], {
        15: [1, 42]
      }), {
        16: [1, 43]
      }, {
        13: 44,
        20: e,
        21: i
      }, (t as any)(s, [2, 17], {
        14: [1, 45]
      }), (t as any)(s, [2, 18], {
        14: [1, 46]
      }), (t as any)(s, [2, 19]), (t as any)(s, [2, 27]), (t as any)(s, [2, 28]), (t as any)(s, [2, 23], {
        27: [1, 47]
      }), (t as any)(f, [2, 29]), {
        15: [1, 48]
      }, {
        16: [1, 49]
      }, (t as any)(s, [2, 11]), {
        16: [1, 50]
      }, (t as any)(s, [2, 15]), (t as any)(o, [2, 42]), (t as any)(s, [2, 20]), (t as any)(s, [2, 21]), {
        20: l,
        26: 51
      }, {
        16: u,
        20: a,
        21: [1, 53],
        28: 52,
        29: 54,
        30: 55,
        31: y,
        32: h,
        33: b
      }, (t as any)(s, [2, 12]), (t as any)(s, [2, 16]), (t as any)(f, [2, 30]), (t as any)(f, [2, 31]), (t as any)(f, [2, 32]), (t as any)(f, [2, 33], {
        30: 61,
        16: u,
        20: a,
        31: y,
        32: h,
        33: b
      }), (t as any)(p, [2, 34]), (t as any)(p, [2, 36]), (t as any)(p, [2, 37]), (t as any)(p, [2, 38]), (t as any)(p, [2, 39]), (t as any)(p, [2, 40]), (t as any)(p, [2, 35])],
      defaultActions: {
        6: [2, 1]
      },
      parseError: (w as any)(function (this: any, g: any, m: any): any {
        if ((m as any).recoverable) ((this as any).trace as any)(g);else {
          var v: any = new (Error as any)(g);
          throw (v as any).hash = m, v;
        }
      }, "parseError"),
      parse: (w as any)(function (this: any, g: any): any {
        var G: any;
        var m: any = this,
          v: any = [0],
          c: any = [],
          x: any = [null],
          d: any = [],
          D: any = (this as any).table,
          I: any = "",
          C: any = 0,
          U: any = 0,
          V: number = 2,
          O: number = 1,
          R: any = (((d as any).slice as any).call as any)(arguments, 1),
          T: any = ((Object as any).create as any)((this as any).lexer),
          A: any = {
            yy: {}
          };
        for (G in (this as any).yy) ((((Object as any).prototype as any).hasOwnProperty as any).call as any)((this as any).yy, G) && (((A as any).yy as any)[G] = ((this as any).yy as any)[G]);
        ((T as any).setInput as any)(g, (A as any).yy), ((A as any).yy as any).lexer = T, ((A as any).yy as any).parser = this, (typeof (T as any).yylloc as any) > ("u" as any) && ((T as any).yylloc = {});
        var P: any = (T as any).yylloc;
        ((d as any).push as any)(P);
        var B: any = (T as any).options && ((T as any).options as any).ranges;
        (typeof ((A as any).yy as any).parseError as any) == ("function" as any) ? (this as any).parseError = ((A as any).yy as any).parseError : (this as any).parseError = (((Object as any).getPrototypeOf as any)(this) as any).parseError;
        function L(this: any, W: any): any {
          (v as any).length = ((v as any).length as any) - ((2 as any) * (W as any) as any), (x as any).length = ((x as any).length as any) - (W as any), (d as any).length = ((d as any).length as any) - (W as any);
        }
        (w as any)(L, "popStack");
        function K(this: any): any {
          var W: any;
          return W = ((c as any).pop as any)() || ((T as any).lex as any)() || O, (typeof W as any) != ("number" as any) && (W instanceof Array && (c = W, W = ((c as any).pop as any)()), W = ((m as any).symbols_ as any)[W] || W), W;
        }
        (w as any)(K, "lex");
        for (var z: any, N: any, j: any, X: any, k: any = {}, F: any, H: any, et: any, Y: any;;) {
          if (N = (v as any)[((v as any).length as any) - (1 as any)], ((this as any).defaultActions as any)[N] ? j = ((this as any).defaultActions as any)[N] : (((z as any) === (null as any) || (typeof z as any) > ("u" as any)) && (z = (K as any)()), j = (D as any)[N] && ((D as any)[N] as any)[z]), (typeof j as any) > ("u" as any) || !(j as any).length || !(j as any)[0]) {
            var Z: any = "";
            Y = [];
            for (F in (D as any)[N]) ((this as any).terminals_ as any)[F] && (F as any) > (V as any) && ((Y as any).push as any)((("'" as any) + (((this as any).terminals_ as any)[F] as any) as any) + ("'" as any));
            (T as any).showPosition ? Z = (((((((("Parse error on line " as any) + ((C as any) + (1 as any) as any) as any) + (`:
` as any) as any) + (((T as any).showPosition as any)() as any) as any) + (`
Expecting ` as any) as any) + (((Y as any).join as any)(", ") as any) as any) + (", got '" as any) as any) + ((((this as any).terminals_ as any)[z] || z) as any) as any) + ("'" as any) : Z = ((("Parse error on line " as any) + ((C as any) + (1 as any) as any) as any) + (": Unexpected " as any) as any) + (((z as any) == (O as any) ? "end of input" : (("'" as any) + ((((this as any).terminals_ as any)[z] || z) as any) as any) + ("'" as any)) as any), ((this as any).parseError as any)(Z, {
              text: (T as any).match,
              token: ((this as any).terminals_ as any)[z] || z,
              line: (T as any).yylineno,
              loc: P,
              expected: Y
            });
          }
          if ((j as any)[0] instanceof Array && ((j as any).length as any) > (1 as any)) throw new (Error as any)(((("Parse Error: multiple actions possible at state: " as any) + (N as any) as any) + (", token: " as any) as any) + (z as any));
          switch ((j as any)[0]) {
            case 1:
              ((v as any).push as any)(z), ((x as any).push as any)((T as any).yytext), ((d as any).push as any)((T as any).yylloc), ((v as any).push as any)((j as any)[1]), z = null, U = (T as any).yyleng, I = (T as any).yytext, C = (T as any).yylineno, P = (T as any).yylloc;
              break;
            case 2:
              if (H = (((this as any).productions_ as any)[(j as any)[1]] as any)[1], (k as any).$ = (x as any)[((x as any).length as any) - (H as any)], (k as any)._$ = {
                first_line: ((d as any)[((d as any).length as any) - ((H || 1) as any)] as any).first_line,
                last_line: ((d as any)[((d as any).length as any) - (1 as any)] as any).last_line,
                first_column: ((d as any)[((d as any).length as any) - ((H || 1) as any)] as any).first_column,
                last_column: ((d as any)[((d as any).length as any) - (1 as any)] as any).last_column
              }, B && (((k as any)._$ as any).range = [(((d as any)[((d as any).length as any) - ((H || 1) as any)] as any).range as any)[0], (((d as any)[((d as any).length as any) - (1 as any)] as any).range as any)[1]]), X = (((this as any).performAction as any).apply as any)(k, (([I, U, C, (A as any).yy, (j as any)[1], x, d] as any).concat as any)(R)), (typeof X as any) < ("u" as any)) return X;
              H && (v = ((v as any).slice as any)(0, ((-1 as any) * (H as any) as any) * (2 as any)), x = ((x as any).slice as any)(0, (-1 as any) * (H as any)), d = ((d as any).slice as any)(0, (-1 as any) * (H as any))), ((v as any).push as any)((((this as any).productions_ as any)[(j as any)[1]] as any)[0]), ((x as any).push as any)((k as any).$), ((d as any).push as any)((k as any)._$), et = ((D as any)[(v as any)[((v as any).length as any) - (2 as any)]] as any)[(v as any)[((v as any).length as any) - (1 as any)]], ((v as any).push as any)(et);
              break;
            case 3:
              return !0;
          }
        }
        return !0;
      }, "parse")
    },
    E: any = (function (this: any): any {
      var S: any = {
        EOF: 1,
        parseError: (w as any)(function (this: any, m: any, v: any): any {
          if (((this as any).yy as any).parser) ((((this as any).yy as any).parser as any).parseError as any)(m, v);else throw new (Error as any)(m);
        }, "parseError"),
        setInput: (w as any)(function (this: any, g: any, m: any): any {
          return (this as any).yy = m || (this as any).yy || {}, (this as any)._input = g, (this as any)._more = (this as any)._backtrack = (this as any).done = !1, (this as any).yylineno = (this as any).yyleng = 0, (this as any).yytext = (this as any).matched = (this as any).match = "", (this as any).conditionStack = ["INITIAL"], (this as any).yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
          }, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [0, 0]), (this as any).offset = 0, this;
        }, "setInput"),
        input: (w as any)(function (this: any): any {
          var g: any = ((this as any)._input as any)[0];
          (this as any).yytext += g, (this as any).yyleng++, (this as any).offset++, (this as any).match += g, (this as any).matched += g;
          var m: any = ((g as any).match as any)(/(?:\r\n?|\n).*/g);
          return m ? ((this as any).yylineno++, ((this as any).yylloc as any).last_line++) : ((this as any).yylloc as any).last_column++, ((this as any).options as any).ranges && (((this as any).yylloc as any).range as any)[1]++, (this as any)._input = (((this as any)._input as any).slice as any)(1), g;
        }, "input"),
        unput: (w as any)(function (this: any, g: any): any {
          var m: any = (g as any).length,
            v: any = ((g as any).split as any)(/(?:\r\n?|\n)/g);
          (this as any)._input = (g as any) + ((this as any)._input as any), (this as any).yytext = (((this as any).yytext as any).substr as any)(0, (((this as any).yytext as any).length as any) - (m as any)), (this as any).offset -= m;
          var c: any = (((this as any).match as any).split as any)(/(?:\r\n?|\n)/g);
          (this as any).match = (((this as any).match as any).substr as any)(0, (((this as any).match as any).length as any) - (1 as any)), (this as any).matched = (((this as any).matched as any).substr as any)(0, (((this as any).matched as any).length as any) - (1 as any)), ((v as any).length as any) - (1 as any) && ((this as any).yylineno -= ((v as any).length as any) - (1 as any));
          var x: any = ((this as any).yylloc as any).range;
          return (this as any).yylloc = {
            first_line: ((this as any).yylloc as any).first_line,
            last_line: ((this as any).yylineno as any) + (1 as any),
            first_column: ((this as any).yylloc as any).first_column,
            last_column: v ? (((((v as any).length as any) === ((c as any).length as any) ? ((this as any).yylloc as any).first_column : 0) as any) + (((c as any)[((c as any).length as any) - ((v as any).length as any)] as any).length as any) as any) - (((v as any)[0] as any).length as any) : (((this as any).yylloc as any).first_column as any) - (m as any)
          }, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [(x as any)[0], (((x as any)[0] as any) + ((this as any).yyleng as any) as any) - (m as any)]), (this as any).yyleng = ((this as any).yytext as any).length, this;
        }, "unput"),
        more: (w as any)(function (this: any): any {
          return (this as any)._more = !0, this;
        }, "more"),
        reject: (w as any)(function (this: any): any {
          if (((this as any).options as any).backtrack_lexer) (this as any)._backtrack = !0;else return ((this as any).parseError as any)(((("Lexical error on line " as any) + (((this as any).yylineno as any) + (1 as any) as any) as any) + (`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` as any) as any) + (((this as any).showPosition as any)() as any), {
            text: "",
            token: null,
            line: (this as any).yylineno
          });
          return this;
        }, "reject"),
        less: (w as any)(function (this: any, g: any): any {
          ((this as any).unput as any)((((this as any).match as any).slice as any)(g));
        }, "less"),
        pastInput: (w as any)(function (this: any): any {
          var g: any = (((this as any).matched as any).substr as any)(0, (((this as any).matched as any).length as any) - (((this as any).match as any).length as any));
          return ((((g as any).length as any) > (20 as any) ? "..." : "") as any) + (((((g as any).substr as any)(-20) as any).replace as any)(/\n/g, "") as any);
        }, "pastInput"),
        upcomingInput: (w as any)(function (this: any): any {
          var g: any = (this as any).match;
          return ((g as any).length as any) < (20 as any) && (g += (((this as any)._input as any).substr as any)(0, (20 as any) - ((g as any).length as any))), (((((g as any).substr as any)(0, 20) as any) + ((((g as any).length as any) > (20 as any) ? "..." : "") as any) as any).replace as any)(/\n/g, "");
        }, "upcomingInput"),
        showPosition: (w as any)(function (this: any): any {
          var g: any = ((this as any).pastInput as any)(),
            m: any = ((new (Array as any)(((g as any).length as any) + (1 as any)) as any).join as any)("-");
          return ((((g as any) + (((this as any).upcomingInput as any)() as any) as any) + (`
` as any) as any) + (m as any) as any) + ("^" as any);
        }, "showPosition"),
        test_match: (w as any)(function (this: any, g: any, m: any): any {
          var d: any;
          var v: any, c: any, x: any;
          if (((this as any).options as any).backtrack_lexer && (x = {
            yylineno: (this as any).yylineno,
            yylloc: {
              first_line: ((this as any).yylloc as any).first_line,
              last_line: (this as any).last_line,
              first_column: ((this as any).yylloc as any).first_column,
              last_column: ((this as any).yylloc as any).last_column
            },
            yytext: (this as any).yytext,
            match: (this as any).match,
            matches: (this as any).matches,
            matched: (this as any).matched,
            yyleng: (this as any).yyleng,
            offset: (this as any).offset,
            _more: (this as any)._more,
            _input: (this as any)._input,
            yy: (this as any).yy,
            conditionStack: (((this as any).conditionStack as any).slice as any)(0),
            done: (this as any).done
          }, ((this as any).options as any).ranges && (((x as any).yylloc as any).range = ((((this as any).yylloc as any).range as any).slice as any)(0))), c = (((g as any)[0] as any).match as any)(/(?:\r\n?|\n).*/g), c && ((this as any).yylineno += (c as any).length), (this as any).yylloc = {
            first_line: ((this as any).yylloc as any).last_line,
            last_line: ((this as any).yylineno as any) + (1 as any),
            first_column: ((this as any).yylloc as any).last_column,
            last_column: c ? (((c as any)[((c as any).length as any) - (1 as any)] as any).length as any) - ((((((c as any)[((c as any).length as any) - (1 as any)] as any).match as any)(/\r?\n?/) as any)[0] as any).length as any) : (((this as any).yylloc as any).last_column as any) + (((g as any)[0] as any).length as any)
          }, (this as any).yytext += (g as any)[0], (this as any).match += (g as any)[0], (this as any).matches = g, (this as any).yyleng = ((this as any).yytext as any).length, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [(this as any).offset, (this as any).offset += (this as any).yyleng]), (this as any)._more = !1, (this as any)._backtrack = !1, (this as any)._input = (((this as any)._input as any).slice as any)(((g as any)[0] as any).length), (this as any).matched += (g as any)[0], v = (((this as any).performAction as any).call as any)(this, (this as any).yy, this, m, ((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)]), (this as any).done && (this as any)._input && ((this as any).done = !1), v) return v;
          if ((this as any)._backtrack) {
            for (d in x) (this as any)[d] = (x as any)[d];
            return !1;
          }
          return !1;
        }, "test_match"),
        next: (w as any)(function (this: any): any {
          if ((this as any).done) return (this as any).EOF;
          (this as any)._input || ((this as any).done = !0);
          var g: any, m: any, v: any, c: any;
          (this as any)._more || ((this as any).yytext = "", (this as any).match = "");
          for (var x: any = ((this as any)._currentRules as any)(), d: any = 0; (d as any) < ((x as any).length as any); d++) if (v = (((this as any)._input as any).match as any)(((this as any).rules as any)[(x as any)[d]]), v && (!m || (((v as any)[0] as any).length as any) > (((m as any)[0] as any).length as any))) {
            if (m = v, c = d, ((this as any).options as any).backtrack_lexer) {
              if (g = ((this as any).test_match as any)(v, (x as any)[d]), (g as any) !== (!1 as any)) return g;
              if ((this as any)._backtrack) {
                m = !1;
                continue;
              } else return !1;
            } else if (!((this as any).options as any).flex) break;
          }
          return m ? (g = ((this as any).test_match as any)(m, (x as any)[c]), (g as any) !== (!1 as any) ? g : !1) : ((this as any)._input as any) === ("" as any) ? (this as any).EOF : ((this as any).parseError as any)(((("Lexical error on line " as any) + (((this as any).yylineno as any) + (1 as any) as any) as any) + (`. Unrecognized text.
` as any) as any) + (((this as any).showPosition as any)() as any), {
            text: "",
            token: null,
            line: (this as any).yylineno
          });
        }, "next"),
        lex: (w as any)(function (this: any): any {
          var m: any = ((this as any).next as any)();
          return m || ((this as any).lex as any)();
        }, "lex"),
        begin: (w as any)(function (this: any, m: any): any {
          (((this as any).conditionStack as any).push as any)(m);
        }, "begin"),
        popState: (w as any)(function (this: any): any {
          var m: any = (((this as any).conditionStack as any).length as any) - (1 as any);
          return (m as any) > (0 as any) ? (((this as any).conditionStack as any).pop as any)() : ((this as any).conditionStack as any)[0];
        }, "popState"),
        _currentRules: (w as any)(function (this: any): any {
          return ((this as any).conditionStack as any).length && ((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)] ? (((this as any).conditions as any)[((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)]] as any).rules : (((this as any).conditions as any).INITIAL as any).rules;
        }, "_currentRules"),
        topState: (w as any)(function (this: any, m: any): any {
          return m = ((((this as any).conditionStack as any).length as any) - (1 as any) as any) - (((Math as any).abs as any)(m || 0) as any), (m as any) >= (0 as any) ? ((this as any).conditionStack as any)[m] : "INITIAL";
        }, "topState"),
        pushState: (w as any)(function (this: any, m: any): any {
          ((this as any).begin as any)(m);
        }, "pushState"),
        stateStackSize: (w as any)(function (this: any): any {
          return ((this as any).conditionStack as any).length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": !0
        },
        performAction: (w as any)(function (this: any, m: any, v: any, c: any, x: any): any {
          switch (c) {
            case 0:
              break;
            case 1:
              break;
            case 2:
              break;
            case 3:
              if ((m as any).getIndentMode && ((m as any).getIndentMode as any)()) return (m as any).consumeIndentText = !0, ((this as any).begin as any)("INITIAL"), 22;
              break;
            case 4:
              break;
            case 5:
              (m as any).setIndentMode && ((m as any).setIndentMode as any)(!1), ((this as any).begin as any)("INITIAL"), ((this as any).unput as any)((v as any).yytext);
              break;
            case 6:
              return ((this as any).begin as any)("bol"), 8;
            case 7:
              break;
            case 8:
              break;
            case 9:
              return 7;
            case 10:
              return 11;
            case 11:
              return 5;
            case 12:
              return 12;
            case 13:
              return 17;
            case 14:
              if ((m as any).consumeIndentText) (m as any).consumeIndentText = !1;else return 19;
              break;
            case 15:
              return 24;
            case 16:
              return (v as any).yytext = (((v as any).yytext as any).slice as any)(2, -2), 14;
            case 17:
              return (v as any).yytext = (((((v as any).yytext as any).slice as any)(1, -1) as any).trim as any)(), 14;
            case 18:
              return 16;
            case 19:
              return 31;
            case 20:
              return 33;
            case 21:
              return 32;
            case 22:
              return 20;
            case 23:
              return 21;
            case 24:
              return 27;
            case 25:
              return 15;
          }
        }, "anonymous"),
        rules: [/^(?:%%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[ \t]+(?=[\n\r]))/i, /^(?:[ \t]+(?=text\b))/i, /^(?:[ \t]+)/i, /^(?:[^ \t\n\r])/i, /^(?:[\n\r]+)/i, /^(?:%%[^\n]*)/i, /^(?:[ \t]+)/i, /^(?:$)/i, /^(?:title\s[^#\n;]+)/i, /^(?:venn-beta\b)/i, /^(?:set\b)/i, /^(?:union\b)/i, /^(?:text\b)/i, /^(?:style\b)/i, /^(?:\["[^\"]*"\])/i, /^(?:\[[^\]\"]+\])/i, /^(?:[+-]?(\d+(\.\d+)?|\.\d+))/i, /^(?:#[0-9a-fA-F]{3,8})/i, /^(?:rgba\(\s*[0-9.]+\s*[,]\s*[0-9.]+\s*[,]\s*[0-9.]+\s*[,]\s*[0-9.]+\s*\))/i, /^(?:rgb\(\s*[0-9.]+\s*[,]\s*[0-9.]+\s*[,]\s*[0-9.]+\s*\))/i, /^(?:[A-Za-z_][A-Za-z0-9\-_]*)/i, /^(?:"[^\"]*")/i, /^(?:,)/i, /^(?::)/i],
        conditions: {
          bol: {
            rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
            inclusive: !0
          },
          INITIAL: {
            rules: [0, 1, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
            inclusive: !0
          }
        }
      };
      return S;
    } as any)();
  (M as any).lexer = E;
  function _(this: any): any {
    (this as any).yy = {};
  }
  return (w as any)(_, "Parser"), (_ as any).prototype = M, (M as any).Parser = _, new (_ as any)();
} as any)();
(gt as any).parser = gt;
var we: any = gt,
  yt: any = [],
  pt: any = [],
  mt: any = [],
  bt: any = new (Set as any)(),
  vt: any,
  It: any = !1,
  _e: any = (w as any)((t: any, n: any, s: any): any => {
    const e: any = (((it as any)(t) as any).sort as any)(),
      i: any = s ?? (10 as any) / (((Math as any).pow as any)((t as any).length, 2) as any);
    vt = e, ((e as any).length as any) === (1 as any) && ((bt as any).add as any)((e as any)[0]), ((yt as any).push as any)({
      sets: e,
      size: i,
      label: n ? (nt as any)(n) : void 0
    });
  }, "addSubsetData"),
  Te: any = (w as any)((): any => yt, "getSubsetData"),
  nt: any = (w as any)((t: any): any => {
    const n: any = ((t as any).trim as any)();
    return ((n as any).length as any) >= (2 as any) && ((n as any).startsWith as any)('"') && ((n as any).endsWith as any)('"') ? ((n as any).slice as any)(1, -1) : n;
  }, "normalizeText"),
  Ee: any = (w as any)((t: any): any => t && (nt as any)(t), "normalizeStyleValue"),
  ze: any = (w as any)((t: any, n: any, s: any): any => {
    const e: any = (nt as any)(n);
    ((pt as any).push as any)({
      sets: (((it as any)(t) as any).sort as any)(),
      id: e,
      label: s ? (nt as any)(s) : void 0
    });
  }, "addTextData"),
  Ae: any = (w as any)((t: any, n: any): any => {
    const s: any = (((it as any)(t) as any).sort as any)(),
      e: any = {};
    for (const [i, o] of n) (e as any)[i] = (Ee as any)(o) ?? o;
    ((mt as any).push as any)({
      targets: s,
      styles: e
    });
  }, "addStyleData"),
  Re: any = (w as any)((): any => mt, "getStyleData"),
  it: any = (w as any)((t: any): any => ((t as any).map as any)((n: any): any => (nt as any)(n)), "normalizeIdentifierList"),
  De: any = (w as any)((t: any): any => {
    const s: any = (((it as any)(t) as any).filter as any)((e: any): any => !((bt as any).has as any)(e));
    if (((s as any).length as any) > (0 as any)) throw new (Error as any)(`unknown set identifier: ${((s as any).join as any)(", ")}`);
  }, "validateUnionIdentifiers"),
  Ce: any = (w as any)((): any => pt, "getTextData"),
  Ne: any = (w as any)((): any => vt, "getCurrentSets"),
  Oe: any = (w as any)((): any => It, "getIndentMode"),
  Fe: any = (w as any)((t: any): any => {
    It = t;
  }, "setIndentMode"),
  je: any = (re as any).venn;
function Vt(this: any): any {
  return (oe as any)(je, ((wt as any)() as any).venn);
}
(w as any)(Vt, "getConfig");
var Le: any = (w as any)((): any => {
    (ie as any)(), (yt as any).length = 0, (pt as any).length = 0, (mt as any).length = 0, ((bt as any).clear as any)(), vt = void 0, It = !1;
  }, "customClear"),
  Pe: any = {
    getConfig: Vt,
    clear: Le,
    setAccTitle: Jt,
    getAccTitle: Zt,
    setDiagramTitle: Xt,
    getDiagramTitle: Yt,
    getAccDescription: Ht,
    setAccDescription: Kt,
    addSubsetData: _e,
    getSubsetData: Te,
    addTextData: ze,
    addStyleData: Ae,
    validateUnionIdentifiers: De,
    getTextData: Ce,
    getStyleData: Re,
    getCurrentSets: Ne,
    getIndentMode: Oe,
    setIndentMode: Fe
  },
  Be: any = (w as any)((t: any): any => `
  .venn-title {
    font-size: 32px;
    fill: ${(t as any).vennTitleTextColor};
    font-family: ${(t as any).fontFamily};
  }

  .venn-circle text {
    font-size: 48px;
    font-family: ${(t as any).fontFamily};
  }

  .venn-intersection text {
    font-size: 48px;
    fill: ${(t as any).vennSetTextColor};
    font-family: ${(t as any).fontFamily};
  }

  .venn-text-node {
    font-family: ${(t as any).fontFamily};
    color: ${(t as any).vennSetTextColor};
  }
`, "getStyles"),
  Ve: any = Be;
function qt(this: any, t: any): any {
  const n: any = new (Map as any)();
  for (const s of t) {
    const e: any = (((s as any).targets as any).join as any)("|"),
      i: any = ((n as any).get as any)(e);
    i ? ((Object as any).assign as any)(i, (s as any).styles) : ((n as any).set as any)(e, {
      ...(s as any).styles
    });
  }
  return n;
}
(w as any)(qt, "buildStyleByKey");
var qe: any = (w as any)((t: any, n: any, s: any, e: any): any => {
  const i: any = (e as any).db,
    o: any = (i as any).getConfig?.(),
    {
      themeVariables: r,
      look: l,
      handDrawnSeed: f
    }: any = (wt as any)(),
    u: any = (l as any) === ("handDrawn" as any),
    a: any = (([(r as any).venn1, (r as any).venn2, (r as any).venn3, (r as any).venn4, (r as any).venn5, (r as any).venn6, (r as any).venn7, (r as any).venn8] as any).filter as any)(Boolean),
    y: any = (i as any).getDiagramTitle?.(),
    h: any = ((i as any).getSubsetData as any)(),
    b: any = ((i as any).getTextData as any)(),
    p: any = (qt as any)(((i as any).getStyleData as any)()),
    M: any = (Gt as any)(h),
    E: any = o?.width ?? 800,
    _: any = o?.height ?? 450,
    g: any = (E as any) / (1600 as any),
    m: any = y ? (48 as any) * (g as any) : 0,
    v: any = (r as any).primaryTextColor ?? (r as any).textColor,
    c: any = (Qt as any)(n);
  ((c as any).attr as any)("viewBox", `0 0 ${E} ${_}`), y && ((((((((((((((((((c as any).append as any)("text") as any).text as any)(y) as any).attr as any)("class", "venn-title") as any).attr as any)("font-size", `${(32 as any) * (g as any)}px`) as any).attr as any)("text-anchor", "middle") as any).attr as any)("dominant-baseline", "middle") as any).attr as any)("x", "50%") as any).attr as any)("y", (32 as any) * (g as any)) as any).style as any)("fill", (r as any).vennTitleTextColor || (r as any).titleColor);
  const x: any = (ot as any)(((document as any).createElement as any)("div")),
    d: any = (((((ve as any)() as any).width as any)(E) as any).height as any)((_ as any) - (m as any));
  ((((x as any).datum as any)(M) as any).call as any)(d);
  const D: any = u ? (($t as any).svg as any)(((((x as any).select as any)("svg") as any).node as any)()) : void 0,
    I: any = (Se as any)(M, {
      width: E,
      height: (_ as any) - (m as any),
      padding: o?.padding ?? 15
    }),
    C: any = new (Map as any)();
  for (const R of I) {
    const T: any = (Q as any)((([...((R as any).data as any).sets] as any).sort as any)());
    ((C as any).set as any)(T, R);
  }
  ((b as any).length as any) > (0 as any) && (Ut as any)(o, C, x, b, g, p);
  const U: any = (te as any)((r as any).background || "#f4f4f4");
  ((((x as any).selectAll as any)(".venn-circle") as any).each as any)(function (this: any, R: any, T: any): any {
    const A: any = (ot as any)(this),
      P: any = (Q as any)((([...(R as any).sets] as any).sort as any)()),
      B: any = ((p as any).get as any)(P),
      L: any = B?.fill || (a as any)[(T as any) % ((a as any).length as any)] || (r as any).primaryColor;
    ((A as any).classed as any)(`venn-set-${(T as any) % (8 as any)}`, !0);
    const K: any = B?.["fill-opacity"] ?? .1,
      z: any = B?.stroke || L,
      N: any = B?.["stroke-width"] || `${(5 as any) * (g as any)}`;
    if (u && D) {
      const X: any = ((C as any).get as any)(P);
      if (X && (((X as any).circles as any).length as any) > (0 as any)) {
        const k: any = ((X as any).circles as any)[0],
          F: any = ((D as any).circle as any)((k as any).x, (k as any).y, ((k as any).radius as any) * (2 as any), {
            roughness: .7,
            seed: f,
            fill: (kt as any)(L, .7),
            fillStyle: "hachure",
            fillWeight: 2,
            hachureGap: 8,
            hachureAngle: (-41 as any) + ((T as any) * (60 as any) as any),
            stroke: z,
            strokeWidth: (parseFloat as any)((String as any)(N))
          });
        ((((A as any).select as any)("path") as any).remove as any)(), ((A as any).node as any)()?.insertBefore(F, ((((A as any).select as any)("text") as any).node as any)());
      }
    } else ((((((((((((A as any).select as any)("path") as any).style as any)("fill", L) as any).style as any)("fill-opacity", K) as any).style as any)("stroke", z) as any).style as any)("stroke-width", N) as any).style as any)("stroke-opacity", .95);
    const j: any = B?.color || (U ? (ee as any)(L, 30) : (ne as any)(L, 30));
    ((((((A as any).select as any)("text") as any).style as any)("font-size", `${(48 as any) * (g as any)}px`) as any).style as any)("fill", j);
  }), u && D ? ((((x as any).selectAll as any)(".venn-intersection") as any).each as any)(function (this: any, R: any): any {
    const T: any = (ot as any)(this),
      G: any = (Q as any)((([...(R as any).sets] as any).sort as any)()),
      P: any = ((p as any).get as any)(G),
      B: any = P?.fill;
    if (B) {
      const L: any = ((T as any).select as any)("path"),
        K: any = ((L as any).attr as any)("d");
      if (K) {
        const z: any = ((D as any).path as any)(K, {
            roughness: .7,
            seed: f,
            fill: (kt as any)(B, .3),
            fillStyle: "cross-hatch",
            fillWeight: 2,
            hachureGap: 6,
            hachureAngle: 60,
            stroke: "none"
          }),
          N: any = ((L as any).node as any)();
        N?.parentNode?.insertBefore(z, N), ((L as any).remove as any)();
      }
    } else ((((T as any).select as any)("path") as any).style as any)("fill-opacity", 0);
    ((((((T as any).select as any)("text") as any).style as any)("font-size", `${(48 as any) * (g as any)}px`) as any).style as any)("fill", P?.color ?? (r as any).vennSetTextColor ?? v);
  }) : (((((((x as any).selectAll as any)(".venn-intersection text") as any).style as any)("font-size", `${(48 as any) * (g as any)}px`) as any).style as any)("fill", (R: any): any => {
    const A: any = (Q as any)((([...(R as any).sets] as any).sort as any)());
    return ((p as any).get as any)(A)?.color ?? (r as any).vennSetTextColor ?? v;
  }), ((((((x as any).selectAll as any)(".venn-intersection path") as any).style as any)("fill-opacity", (R: any): any => {
    const A: any = (Q as any)((([...(R as any).sets] as any).sort as any)());
    return ((p as any).get as any)(A)?.fill ? 1 : 0;
  }) as any).style as any)("fill", (R: any): any => {
    const A: any = (Q as any)((([...(R as any).sets] as any).sort as any)());
    return ((p as any).get as any)(A)?.fill ?? "transparent";
  }));
  const V: any = ((((c as any).append as any)("g") as any).attr as any)("transform", `translate(0, ${m})`),
    O: any = ((((x as any).select as any)("svg") as any).node as any)();
  if (O && "childNodes" in O) for (const R of [...(O as any).childNodes]) ((V as any).node as any)()?.appendChild(R);
  (se as any)(c, _, E, o?.useMaxWidth ?? !0);
}, "draw");
function Q(this: any, t: any): any {
  return ((t as any).join as any)("|");
}
(w as any)(Q, "stableSetsKey");
function Ut(this: any, t: any, n: any, s: any, e: any, i: any, o: any): any {
  const r: any = t?.useDebugLayout ?? !1,
    f: any = ((((((s as any).select as any)("svg") as any).append as any)("g") as any).attr as any)("class", "venn-text-nodes"),
    u: any = new (Map as any)();
  for (const a of e) {
    const y: any = (Q as any)((a as any).sets),
      h: any = ((u as any).get as any)(y);
    h ? ((h as any).push as any)(a) : ((u as any).set as any)(y, [a]);
  }
  for (const [a, y] of ((u as any).entries as any)()) {
    const h: any = ((n as any).get as any)(a);
    if (!h?.text) continue;
    const b: any = ((h as any).text as any).x,
      p: any = ((h as any).text as any).y,
      M: any = ((Math as any).min as any)(...(((h as any).circles as any).map as any)((O: any): any => (O as any).radius)),
      E: any = ((Math as any).min as any)(...(((h as any).circles as any).map as any)((O: any): any => ((O as any).radius as any) - (((Math as any).hypot as any)((b as any) - ((O as any).x as any), (p as any) - ((O as any).y as any)) as any)));
    let _: any = ((Number as any).isFinite as any)(E) ? ((Math as any).max as any)(0, E) : 0;
    (_ as any) === (0 as any) && ((Number as any).isFinite as any)(M) && (_ = (M as any) * (.6 as any));
    const S: any = ((((((f as any).append as any)("g") as any).attr as any)("class", "venn-text-area") as any).attr as any)("font-size", `${(40 as any) * (i as any)}px`);
    r && ((((((((((((((((((S as any).append as any)("circle") as any).attr as any)("class", "venn-text-debug-circle") as any).attr as any)("cx", b) as any).attr as any)("cy", p) as any).attr as any)("r", _) as any).attr as any)("fill", "none") as any).attr as any)("stroke", "purple") as any).attr as any)("stroke-width", (1.5 as any) * (i as any)) as any).attr as any)("stroke-dasharray", `${(6 as any) * (i as any)} ${(4 as any) * (i as any)}`);
    const g: any = ((Math as any).max as any)((80 as any) * (i as any), ((_ as any) * (2 as any) as any) * (.95 as any)),
      m: any = ((Math as any).max as any)((60 as any) * (i as any), ((_ as any) * (2 as any) as any) * (.95 as any)),
      x: any = ((((h as any).data as any).label && ((((h as any).data as any).label as any).length as any) > (0 as any) ? ((Math as any).min as any)((32 as any) * (i as any), (_ as any) * (.25 as any)) : 0) as any) + ((((y as any).length as any) <= (2 as any) ? (30 as any) * (i as any) : 0) as any),
      d: any = (b as any) - ((g as any) / (2 as any) as any),
      D: any = ((p as any) - ((m as any) / (2 as any) as any) as any) + (x as any),
      I: any = ((Math as any).max as any)(1, ((Math as any).ceil as any)(((Math as any).sqrt as any)((y as any).length))),
      C: any = ((Math as any).max as any)(1, ((Math as any).ceil as any)(((y as any).length as any) / (I as any))),
      U: any = (g as any) / (I as any),
      V: any = (m as any) / (C as any);
    for (const [O, R] of ((y as any).entries as any)()) {
      const T: any = (O as any) % (I as any),
        A: any = ((Math as any).floor as any)((O as any) / (I as any)),
        G: any = (d as any) + ((U as any) * ((T as any) + (.5 as any) as any) as any),
        P: any = (D as any) + ((V as any) * ((A as any) + (.5 as any) as any) as any);
      r && ((((((((((((((((((((S as any).append as any)("rect") as any).attr as any)("class", "venn-text-debug-cell") as any).attr as any)("x", (d as any) + ((U as any) * (T as any) as any)) as any).attr as any)("y", (D as any) + ((V as any) * (A as any) as any)) as any).attr as any)("width", U) as any).attr as any)("height", V) as any).attr as any)("fill", "none") as any).attr as any)("stroke", "teal") as any).attr as any)("stroke-width", (1 as any) * (i as any)) as any).attr as any)("stroke-dasharray", `${(4 as any) * (i as any)} ${(3 as any) * (i as any)}`);
      const B: any = (U as any) * (.9 as any),
        L: any = (V as any) * (.9 as any),
        K: any = ((((((((((((((S as any).append as any)("foreignObject") as any).attr as any)("class", "venn-text-node-fo") as any).attr as any)("width", B) as any).attr as any)("height", L) as any).attr as any)("x", (G as any) - ((B as any) / (2 as any) as any)) as any).attr as any)("y", (P as any) - ((L as any) / (2 as any) as any)) as any).attr as any)("overflow", "visible"),
        z: any = ((o as any).get as any)((R as any).id)?.color,
        N: any = ((((((((((((((((((((((((K as any).append as any)("xhtml:span") as any).attr as any)("class", "venn-text-node") as any).style as any)("display", "flex") as any).style as any)("width", "100%") as any).style as any)("height", "100%") as any).style as any)("white-space", "normal") as any).style as any)("align-items", "center") as any).style as any)("justify-content", "center") as any).style as any)("text-align", "center") as any).style as any)("overflow-wrap", "normal") as any).style as any)("word-break", "normal") as any).text as any)((R as any).label ?? (R as any).id);
      z && ((N as any).style as any)("color", z);
    }
  }
}
(w as any)(Ut, "renderTextNodes");
function Gt(this: any, t: any): any {
  const n: any = new (Set as any)(((t as any).map as any)((i: any): any => (((([...(i as any).sets] as any).sort as any)() as any).join as any)("|"))),
    s: any = new (Map as any)(((((t as any).filter as any)((i: any): any => (((i as any).sets as any).length as any) === (1 as any) && ((i as any).size as any) !== (void 0 as any)) as any).map as any)((i: any): any => [((i as any).sets as any)[0], (i as any).size])),
    e: any = [];
  for (const i of t) {
    if ((((i as any).sets as any).length as any) < (3 as any)) continue;
    const o: any = (([...(i as any).sets] as any).sort as any)();
    for (let r: any = 0; (r as any) < (((o as any).length as any) - (1 as any) as any); r++) for (let l: any = (r as any) + (1 as any); (l as any) < ((o as any).length as any); l++) {
      const f: any = [(o as any)[r], (o as any)[l]],
        u: any = ((f as any).join as any)("|");
      if (!((n as any).has as any)(u)) {
        ((n as any).add as any)(u);
        const a: any = ((s as any).get as any)((f as any)[0]),
          y: any = ((s as any).get as any)((f as any)[1]),
          h: any = (a as any) !== (void 0 as any) && (y as any) !== (void 0 as any) ? (((Math as any).min as any)(a, y) as any) / (4 as any) : 2.5;
        ((e as any).push as any)({
          sets: f,
          size: h,
          label: ""
        });
      }
    }
  }
  return ((e as any).length as any) > (0 as any) ? [...t, ...e] : t;
}
(w as any)(Gt, "ensurePairwiseSubsets");
var Ue: any = {
    draw: qe
  },
  Ke: any = {
    parser: we,
    db: Pe,
    renderer: Ue,
    styles: Ve
  };
export { Ke as diagram };
//# debugId=a5a2340d-76de-4389-b09e-c564c7875f2d
