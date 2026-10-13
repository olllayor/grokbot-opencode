declare var global: any;
declare var key: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "a64a69e7-dd02-43dd-95a8-96a9c833f6b7", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-a64a69e7-dd02-43dd-95a8-96a9c833f6b7");
  } catch (e: any) {}
} as any)();
import { _ as y, o as xt, p as _t, s as vt, g as bt, b as St, a as wt, c as lt, b8 as Lt, d as H, ad as Et, q as At, k as Tt } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { o as Mt } from "./chunk-ordinal-BB0u7Tqq.js";
import "./index.eager-vendor-Qbf9YA6n.js";
import "./chunk-init-Gi6I4Gst.js";
function Nt(this: any, t: any): any {
  for (var n: any = (((t as any).length as any) / (6 as any) as any) | (0 as any), s: any = new (Array as any)(n), a: any = 0; (a as any) < (n as any);) (s as any)[a] = ("#" as any) + (((t as any).slice as any)((a as any) * (6 as any), (++a as any) * (6 as any)) as any);
  return s;
}
const Ct: any = (Nt as any)("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function ct(this: any, t: any, n: any): any {
  let s: any;
  if ((n as any) === (void 0 as any)) for (const a of t) (a as any) != (null as any) && ((s as any) < (a as any) || (s as any) === (void 0 as any) && (a as any) >= (a as any)) && (s = a);else {
    let a: any = -1;
    for (let u of t) ((u = (n as any)(u, ++a, t)) as any) != (null as any) && ((s as any) < (u as any) || (s as any) === (void 0 as any) && (u as any) >= (u as any)) && (s = u);
  }
  return s;
}
function pt(this: any, t: any, n: any): any {
  let s: any;
  if ((n as any) === (void 0 as any)) for (const a of t) (a as any) != (null as any) && ((s as any) > (a as any) || (s as any) === (void 0 as any) && (a as any) >= (a as any)) && (s = a);else {
    let a: any = -1;
    for (let u of t) ((u = (n as any)(u, ++a, t)) as any) != (null as any) && ((s as any) > (u as any) || (s as any) === (void 0 as any) && (u as any) >= (u as any)) && (s = u);
  }
  return s;
}
function nt(this: any, t: any, n: any): any {
  let s: any = 0;
  if ((n as any) === (void 0 as any)) for (let a of t) (a = +a) && (s += a);else {
    let a: any = -1;
    for (let u of t) (u = +(n as any)(u, ++a, t)) && (s += u);
  }
  return s;
}
function Pt(this: any, t: any): any {
  return ((t as any).target as any).depth;
}
function It(this: any, t: any): any {
  return (t as any).depth;
}
function Ot(this: any, t: any, n: any): any {
  return ((n as any) - (1 as any) as any) - ((t as any).height as any);
}
function kt(this: any, t: any, n: any): any {
  return ((t as any).sourceLinks as any).length ? (t as any).depth : (n as any) - (1 as any);
}
function $t(this: any, t: any): any {
  return ((t as any).targetLinks as any).length ? (t as any).depth : ((t as any).sourceLinks as any).length ? ((pt as any)((t as any).sourceLinks, Pt) as any) - (1 as any) : 0;
}
function X(this: any, t: any): any {
  return function (this: any): any {
    return t;
  };
}
function ut(this: any, t: any, n: any): any {
  return (Q as any)((t as any).source, (n as any).source) || ((t as any).index as any) - ((n as any).index as any);
}
function ht(this: any, t: any, n: any): any {
  return (Q as any)((t as any).target, (n as any).target) || ((t as any).index as any) - ((n as any).index as any);
}
function Q(this: any, t: any, n: any): any {
  return ((t as any).y0 as any) - ((n as any).y0 as any);
}
function it(this: any, t: any): any {
  return (t as any).value;
}
function Dt(this: any, t: any): any {
  return (t as any).index;
}
function jt(this: any, t: any): any {
  return (t as any).nodes;
}
function zt(this: any, t: any): any {
  return (t as any).links;
}
function ft(this: any, t: any, n: any): any {
  const s: any = ((t as any).get as any)(n);
  if (!s) throw new (Error as any)(("missing: " as any) + (n as any));
  return s;
}
function yt(this: any, {
  nodes: t
}: any): any {
  for (const n of t) {
    let s: any = (n as any).y0,
      a: any = s;
    for (const u of (n as any).sourceLinks) (u as any).y0 = (s as any) + (((u as any).width as any) / (2 as any) as any), s += (u as any).width;
    for (const u of (n as any).targetLinks) (u as any).y1 = (a as any) + (((u as any).width as any) / (2 as any) as any), a += (u as any).width;
  }
}
function Bt(this: any): any {
  let t: any = 0,
    n: any = 0,
    s: any = 1,
    a: any = 1,
    u: any = 24,
    x: any = 8,
    g: any,
    k: any = Dt,
    o: any = kt,
    l: any,
    h: any,
    m: any = jt,
    _: any = zt,
    d: any = 6;
  function v(this: any): any {
    const i: any = {
      nodes: ((m as any).apply as any)(null, arguments),
      links: ((_ as any).apply as any)(null, arguments)
    };
    return (T as any)(i), (A as any)(i), (M as any)(i), (I as any)(i), (S as any)(i), (yt as any)(i), i;
  }
  (v as any).update = function (this: any, i: any): any {
    return (yt as any)(i), i;
  }, (v as any).nodeId = function (this: any, i: any): any {
    return (arguments as any).length ? (k = (typeof i as any) == ("function" as any) ? i : (X as any)(i), v) : k;
  }, (v as any).nodeAlign = function (this: any, i: any): any {
    return (arguments as any).length ? (o = (typeof i as any) == ("function" as any) ? i : (X as any)(i), v) : o;
  }, (v as any).nodeSort = function (this: any, i: any): any {
    return (arguments as any).length ? (l = i, v) : l;
  }, (v as any).nodeWidth = function (this: any, i: any): any {
    return (arguments as any).length ? (u = +i, v) : u;
  }, (v as any).nodePadding = function (this: any, i: any): any {
    return (arguments as any).length ? (x = g = +i, v) : x;
  }, (v as any).nodes = function (this: any, i: any): any {
    return (arguments as any).length ? (m = (typeof i as any) == ("function" as any) ? i : (X as any)(i), v) : m;
  }, (v as any).links = function (this: any, i: any): any {
    return (arguments as any).length ? (_ = (typeof i as any) == ("function" as any) ? i : (X as any)(i), v) : _;
  }, (v as any).linkSort = function (this: any, i: any): any {
    return (arguments as any).length ? (h = i, v) : h;
  }, (v as any).size = function (this: any, i: any): any {
    return (arguments as any).length ? (t = n = 0, s = +(i as any)[0], a = +(i as any)[1], v) : [(s as any) - (t as any), (a as any) - (n as any)];
  }, (v as any).extent = function (this: any, i: any): any {
    return (arguments as any).length ? (t = +((i as any)[0] as any)[0], s = +((i as any)[1] as any)[0], n = +((i as any)[0] as any)[1], a = +((i as any)[1] as any)[1], v) : [[t, n], [s, a]];
  }, (v as any).iterations = function (this: any, i: any): any {
    return (arguments as any).length ? (d = +i, v) : d;
  };
  function T(this: any, {
    nodes: i,
    links: f
  }: any): any {
    for (const [e, r] of ((i as any).entries as any)()) (r as any).index = e, (r as any).sourceLinks = [], (r as any).targetLinks = [];
    const c: any = new (Map as any)(((i as any).map as any)((e: any, r: any): any => [(k as any)(e, r, i), e]));
    for (const [e, r] of ((f as any).entries as any)()) {
      (r as any).index = e;
      let {
        source: p,
        target: b
      }: any = r;
      (typeof p as any) != ("object" as any) && (p = (r as any).source = (ft as any)(c, p)), (typeof b as any) != ("object" as any) && (b = (r as any).target = (ft as any)(c, b)), (((p as any).sourceLinks as any).push as any)(r), (((b as any).targetLinks as any).push as any)(r);
    }
    if ((h as any) != (null as any)) for (const {
      sourceLinks: e,
      targetLinks: r
    } of i) ((e as any).sort as any)(h), ((r as any).sort as any)(h);
  }
  function A(this: any, {
    nodes: i
  }: any): any {
    for (const f of i) (f as any).value = ((f as any).fixedValue as any) === (void 0 as any) ? ((Math as any).max as any)((nt as any)((f as any).sourceLinks, it), (nt as any)((f as any).targetLinks, it)) : (f as any).fixedValue;
  }
  function M(this: any, {
    nodes: i
  }: any): any {
    const f: any = (i as any).length;
    let c: any = new (Set as any)(i),
      e: any = new (Set as any)(),
      r: any = 0;
    for (; (c as any).size;) {
      for (const p of c) {
        (p as any).depth = r;
        for (const {
          target: b
        } of (p as any).sourceLinks) ((e as any).add as any)(b);
      }
      if ((++r as any) > (f as any)) throw new (Error as any)("circular link");
      c = e, e = new (Set as any)();
    }
  }
  function I(this: any, {
    nodes: i
  }: any): any {
    const f: any = (i as any).length;
    let c: any = new (Set as any)(i),
      e: any = new (Set as any)(),
      r: any = 0;
    for (; (c as any).size;) {
      for (const p of c) {
        (p as any).height = r;
        for (const {
          source: b
        } of (p as any).targetLinks) ((e as any).add as any)(b);
      }
      if ((++r as any) > (f as any)) throw new (Error as any)("circular link");
      c = e, e = new (Set as any)();
    }
  }
  function N(this: any, {
    nodes: i
  }: any): any {
    const f: any = ((ct as any)(i, (r: any): any => (r as any).depth) as any) + (1 as any),
      c: any = (((s as any) - (t as any) as any) - (u as any) as any) / ((f as any) - (1 as any) as any),
      e: any = new (Array as any)(f);
    for (const r of i) {
      const p: any = ((Math as any).max as any)(0, ((Math as any).min as any)((f as any) - (1 as any), ((Math as any).floor as any)(((o as any).call as any)(null, r, f))));
      (r as any).layer = p, (r as any).x0 = (t as any) + ((p as any) * (c as any) as any), (r as any).x1 = ((r as any).x0 as any) + (u as any), (e as any)[p] ? (((e as any)[p] as any).push as any)(r) : (e as any)[p] = [r];
    }
    if (l) for (const r of e) ((r as any).sort as any)(l);
    return e;
  }
  function D(this: any, i: any): any {
    const f: any = (pt as any)(i, (c: any): any => (((a as any) - (n as any) as any) - ((((c as any).length as any) - (1 as any) as any) * (g as any) as any) as any) / ((nt as any)(c, it) as any));
    for (const c of i) {
      let e: any = n;
      for (const r of c) {
        (r as any).y0 = e, (r as any).y1 = (e as any) + (((r as any).value as any) * (f as any) as any), e = ((r as any).y1 as any) + (g as any);
        for (const p of (r as any).sourceLinks) (p as any).width = ((p as any).value as any) * (f as any);
      }
      e = (((a as any) - (e as any) as any) + (g as any) as any) / (((c as any).length as any) + (1 as any) as any);
      for (let r: any = 0; (r as any) < ((c as any).length as any); ++r) {
        const p: any = (c as any)[r];
        (p as any).y0 += (e as any) * ((r as any) + (1 as any) as any), (p as any).y1 += (e as any) * ((r as any) + (1 as any) as any);
      }
      (w as any)(c);
    }
  }
  function S(this: any, i: any): any {
    const f: any = (N as any)(i);
    g = ((Math as any).min as any)(x, ((a as any) - (n as any) as any) / (((ct as any)(f, (c: any): any => (c as any).length) as any) - (1 as any) as any)), (D as any)(f);
    for (let c: any = 0; (c as any) < (d as any); ++c) {
      const e: any = ((Math as any).pow as any)(.99, c),
        r: any = ((Math as any).max as any)((1 as any) - (e as any), ((c as any) + (1 as any) as any) / (d as any));
      (R as any)(f, e, r), (C as any)(f, e, r);
    }
  }
  function C(this: any, i: any, f: any, c: any): any {
    for (let e: any = 1, r: any = (i as any).length; (e as any) < (r as any); ++e) {
      const p: any = (i as any)[e];
      for (const b of p) {
        let L: any = 0,
          B: any = 0;
        for (const {
          source: Y,
          value: et
        } of (b as any).targetLinks) {
          let q: any = (et as any) * (((b as any).layer as any) - ((Y as any).layer as any) as any);
          L += ((P as any)(Y, b) as any) * (q as any), B += q;
        }
        if (!((B as any) > (0 as any))) continue;
        let U: any = (((L as any) / (B as any) as any) - ((b as any).y0 as any) as any) * (f as any);
        (b as any).y0 += U, (b as any).y1 += U, (z as any)(b);
      }
      (l as any) === (void 0 as any) && ((p as any).sort as any)(Q), (j as any)(p, c);
    }
  }
  function R(this: any, i: any, f: any, c: any): any {
    for (let e: any = (i as any).length, r: any = (e as any) - (2 as any); (r as any) >= (0 as any); --r) {
      const p: any = (i as any)[r];
      for (const b of p) {
        let L: any = 0,
          B: any = 0;
        for (const {
          target: Y,
          value: et
        } of (b as any).sourceLinks) {
          let q: any = (et as any) * (((Y as any).layer as any) - ((b as any).layer as any) as any);
          L += ((E as any)(b, Y) as any) * (q as any), B += q;
        }
        if (!((B as any) > (0 as any))) continue;
        let U: any = (((L as any) / (B as any) as any) - ((b as any).y0 as any) as any) * (f as any);
        (b as any).y0 += U, (b as any).y1 += U, (z as any)(b);
      }
      (l as any) === (void 0 as any) && ((p as any).sort as any)(Q), (j as any)(p, c);
    }
  }
  function j(this: any, i: any, f: any): any {
    const c: any = ((i as any).length as any) >> (1 as any),
      e: any = (i as any)[c];
    (O as any)(i, ((e as any).y0 as any) - (g as any), (c as any) - (1 as any), f), (V as any)(i, ((e as any).y1 as any) + (g as any), (c as any) + (1 as any), f), (O as any)(i, a, ((i as any).length as any) - (1 as any), f), (V as any)(i, n, 0, f);
  }
  function V(this: any, i: any, f: any, c: any, e: any): any {
    for (; (c as any) < ((i as any).length as any); ++c) {
      const r: any = (i as any)[c],
        p: any = ((f as any) - ((r as any).y0 as any) as any) * (e as any);
      (p as any) > (1e-6 as any) && ((r as any).y0 += p, (r as any).y1 += p), f = ((r as any).y1 as any) + (g as any);
    }
  }
  function O(this: any, i: any, f: any, c: any, e: any): any {
    for (; (c as any) >= (0 as any); --c) {
      const r: any = (i as any)[c],
        p: any = (((r as any).y1 as any) - (f as any) as any) * (e as any);
      (p as any) > (1e-6 as any) && ((r as any).y0 -= p, (r as any).y1 -= p), f = ((r as any).y0 as any) - (g as any);
    }
  }
  function z(this: any, {
    sourceLinks: i,
    targetLinks: f
  }: any): any {
    if ((h as any) === (void 0 as any)) {
      for (const {
        source: {
          sourceLinks: c
        }
      } of f) ((c as any).sort as any)(ht);
      for (const {
        target: {
          targetLinks: c
        }
      } of i) ((c as any).sort as any)(ut);
    }
  }
  function w(this: any, i: any): any {
    if ((h as any) === (void 0 as any)) for (const {
      sourceLinks: f,
      targetLinks: c
    } of i) ((f as any).sort as any)(ht), ((c as any).sort as any)(ut);
  }
  function P(this: any, i: any, f: any): any {
    let c: any = ((i as any).y0 as any) - ((((((i as any).sourceLinks as any).length as any) - (1 as any) as any) * (g as any) as any) / (2 as any) as any);
    for (const {
      target: e,
      width: r
    } of (i as any).sourceLinks) {
      if ((e as any) === (f as any)) break;
      c += (r as any) + (g as any);
    }
    for (const {
      source: e,
      width: r
    } of (f as any).targetLinks) {
      if ((e as any) === (i as any)) break;
      c -= r;
    }
    return c;
  }
  function E(this: any, i: any, f: any): any {
    let c: any = ((f as any).y0 as any) - ((((((f as any).targetLinks as any).length as any) - (1 as any) as any) * (g as any) as any) / (2 as any) as any);
    for (const {
      source: e,
      width: r
    } of (f as any).targetLinks) {
      if ((e as any) === (i as any)) break;
      c += (r as any) + (g as any);
    }
    for (const {
      target: e,
      width: r
    } of (i as any).sourceLinks) {
      if ((e as any) === (f as any)) break;
      c -= r;
    }
    return c;
  }
  return v;
}
var rt: any = (Math as any).PI,
  st: any = (2 as any) * (rt as any),
  F: number = 1e-6,
  Ft: any = (st as any) - (F as any);
function ot(this: any): any {
  (this as any)._x0 = (this as any)._y0 = (this as any)._x1 = (this as any)._y1 = null, (this as any)._ = "";
}
function mt(this: any): any {
  return new (ot as any)();
}
(ot as any).prototype = (mt as any).prototype = {
  constructor: ot,
  moveTo: function (this: any, t: any, n: any): any {
    (this as any)._ += ((("M" as any) + (((this as any)._x0 = (this as any)._x1 = +t) as any) as any) + ("," as any) as any) + (((this as any)._y0 = (this as any)._y1 = +n) as any);
  },
  closePath: function (this: any): any {
    ((this as any)._x1 as any) !== (null as any) && ((this as any)._x1 = (this as any)._x0, (this as any)._y1 = (this as any)._y0, (this as any)._ += "Z");
  },
  lineTo: function (this: any, t: any, n: any): any {
    (this as any)._ += ((("L" as any) + (((this as any)._x1 = +t) as any) as any) + ("," as any) as any) + (((this as any)._y1 = +n) as any);
  },
  quadraticCurveTo: function (this: any, t: any, n: any, s: any, a: any): any {
    (this as any)._ += ((((((("Q" as any) + (+t as any) as any) + ("," as any) as any) + (+n as any) as any) + ("," as any) as any) + (((this as any)._x1 = +s) as any) as any) + ("," as any) as any) + (((this as any)._y1 = +a) as any);
  },
  bezierCurveTo: function (this: any, t: any, n: any, s: any, a: any, u: any, x: any): any {
    (this as any)._ += ((((((((((("C" as any) + (+t as any) as any) + ("," as any) as any) + (+n as any) as any) + ("," as any) as any) + (+s as any) as any) + ("," as any) as any) + (+a as any) as any) + ("," as any) as any) + (((this as any)._x1 = +u) as any) as any) + ("," as any) as any) + (((this as any)._y1 = +x) as any);
  },
  arcTo: function (this: any, t: any, n: any, s: any, a: any, u: any): any {
    t = +t, n = +n, s = +s, a = +a, u = +u;
    var x: any = (this as any)._x1,
      g: any = (this as any)._y1,
      k: any = (s as any) - (t as any),
      o: any = (a as any) - (n as any),
      l: any = (x as any) - (t as any),
      h: any = (g as any) - (n as any),
      m: any = ((l as any) * (l as any) as any) + ((h as any) * (h as any) as any);
    if ((u as any) < (0 as any)) throw new (Error as any)(("negative radius: " as any) + (u as any));
    if (((this as any)._x1 as any) === (null as any)) (this as any)._ += ((("M" as any) + (((this as any)._x1 = t) as any) as any) + ("," as any) as any) + (((this as any)._y1 = n) as any);else if ((m as any) > (F as any)) if (!((((Math as any).abs as any)(((h as any) * (k as any) as any) - ((o as any) * (l as any) as any)) as any) > (F as any)) || !u) (this as any)._ += ((("L" as any) + (((this as any)._x1 = t) as any) as any) + ("," as any) as any) + (((this as any)._y1 = n) as any);else {
      var _: any = (s as any) - (x as any),
        d: any = (a as any) - (g as any),
        v: any = ((k as any) * (k as any) as any) + ((o as any) * (o as any) as any),
        T: any = ((_ as any) * (_ as any) as any) + ((d as any) * (d as any) as any),
        A: any = ((Math as any).sqrt as any)(v),
        M: any = ((Math as any).sqrt as any)(m),
        I: any = (u as any) * (((Math as any).tan as any)(((rt as any) - (((Math as any).acos as any)((((v as any) + (m as any) as any) - (T as any) as any) / (((2 as any) * (A as any) as any) * (M as any) as any)) as any) as any) / (2 as any)) as any),
        N: any = (I as any) / (M as any),
        D: any = (I as any) / (A as any);
      (((Math as any).abs as any)((N as any) - (1 as any)) as any) > (F as any) && ((this as any)._ += ((("L" as any) + ((t as any) + ((N as any) * (l as any) as any) as any) as any) + ("," as any) as any) + ((n as any) + ((N as any) * (h as any) as any) as any)), (this as any)._ += ((((((((("A" as any) + (u as any) as any) + ("," as any) as any) + (u as any) as any) + (",0,0," as any) as any) + (+(((h as any) * (_ as any) as any) > ((l as any) * (d as any) as any)) as any) as any) + ("," as any) as any) + (((this as any)._x1 = (t as any) + ((D as any) * (k as any) as any)) as any) as any) + ("," as any) as any) + (((this as any)._y1 = (n as any) + ((D as any) * (o as any) as any)) as any);
    }
  },
  arc: function (this: any, t: any, n: any, s: any, a: any, u: any, x: any): any {
    t = +t, n = +n, s = +s, x = !!x;
    var g: any = (s as any) * (((Math as any).cos as any)(a) as any),
      k: any = (s as any) * (((Math as any).sin as any)(a) as any),
      o: any = (t as any) + (g as any),
      l: any = (n as any) + (k as any),
      h: any = (1 as any) ^ (x as any),
      m: any = x ? (a as any) - (u as any) : (u as any) - (a as any);
    if ((s as any) < (0 as any)) throw new (Error as any)(("negative radius: " as any) + (s as any));
    ((this as any)._x1 as any) === (null as any) ? (this as any)._ += ((("M" as any) + (o as any) as any) + ("," as any) as any) + (l as any) : ((((Math as any).abs as any)(((this as any)._x1 as any) - (o as any)) as any) > (F as any) || (((Math as any).abs as any)(((this as any)._y1 as any) - (l as any)) as any) > (F as any)) && ((this as any)._ += ((("L" as any) + (o as any) as any) + ("," as any) as any) + (l as any)), s && ((m as any) < (0 as any) && (m = ((m as any) % (st as any) as any) + (st as any)), (m as any) > (Ft as any) ? (this as any)._ += ((((((((((((((((((("A" as any) + (s as any) as any) + ("," as any) as any) + (s as any) as any) + (",0,1," as any) as any) + (h as any) as any) + ("," as any) as any) + ((t as any) - (g as any) as any) as any) + ("," as any) as any) + ((n as any) - (k as any) as any) as any) + ("A" as any) as any) + (s as any) as any) + ("," as any) as any) + (s as any) as any) + (",0,1," as any) as any) + (h as any) as any) + ("," as any) as any) + (((this as any)._x1 = o) as any) as any) + ("," as any) as any) + (((this as any)._y1 = l) as any) : (m as any) > (F as any) && ((this as any)._ += ((((((((((("A" as any) + (s as any) as any) + ("," as any) as any) + (s as any) as any) + (",0," as any) as any) + (+((m as any) >= (rt as any)) as any) as any) + ("," as any) as any) + (h as any) as any) + ("," as any) as any) + (((this as any)._x1 = (t as any) + ((s as any) * (((Math as any).cos as any)(u) as any) as any)) as any) as any) + ("," as any) as any) + (((this as any)._y1 = (n as any) + ((s as any) * (((Math as any).sin as any)(u) as any) as any)) as any)));
  },
  rect: function (this: any, t: any, n: any, s: any, a: any): any {
    (this as any)._ += (((((((((("M" as any) + (((this as any)._x0 = (this as any)._x1 = +t) as any) as any) + ("," as any) as any) + (((this as any)._y0 = (this as any)._y1 = +n) as any) as any) + ("h" as any) as any) + (+s as any) as any) + ("v" as any) as any) + (+a as any) as any) + ("h" as any) as any) + (-s as any) as any) + ("Z" as any);
  },
  toString: function (this: any): any {
    return (this as any)._;
  }
};
function dt(this: any, t: any): any {
  return function (this: any): any {
    return t;
  };
}
function Rt(this: any, t: any): any {
  return (t as any)[0];
}
function Vt(this: any, t: any): any {
  return (t as any)[1];
}
var Wt: any = ((Array as any).prototype as any).slice;
function Gt(this: any, t: any): any {
  return (t as any).source;
}
function Ut(this: any, t: any): any {
  return (t as any).target;
}
function Yt(this: any, t: any): any {
  var n: any = Gt,
    s: any = Ut,
    a: any = Rt,
    u: any = Vt,
    x: any = null;
  function g(this: any): any {
    var k: any,
      o: any = ((Wt as any).call as any)(arguments),
      l: any = ((n as any).apply as any)(this, o),
      h: any = ((s as any).apply as any)(this, o);
    if (x || (x = k = (mt as any)()), (t as any)(x, +((a as any).apply as any)(this, ((o as any)[0] = l, o)), +((u as any).apply as any)(this, o), +((a as any).apply as any)(this, ((o as any)[0] = h, o)), +((u as any).apply as any)(this, o)), k) return x = null, (k as any) + ("" as any) || null;
  }
  return (g as any).source = function (this: any, k: any): any {
    return (arguments as any).length ? (n = k, g) : n;
  }, (g as any).target = function (this: any, k: any): any {
    return (arguments as any).length ? (s = k, g) : s;
  }, (g as any).x = function (this: any, k: any): any {
    return (arguments as any).length ? (a = (typeof k as any) == ("function" as any) ? k : (dt as any)(+k), g) : a;
  }, (g as any).y = function (this: any, k: any): any {
    return (arguments as any).length ? (u = (typeof k as any) == ("function" as any) ? k : (dt as any)(+k), g) : u;
  }, (g as any).context = function (this: any, k: any): any {
    return (arguments as any).length ? (x = k ?? null, g) : x;
  }, g;
}
function qt(this: any, t: any, n: any, s: any, a: any, u: any): any {
  ((t as any).moveTo as any)(n, s), ((t as any).bezierCurveTo as any)(n = ((n as any) + (a as any) as any) / (2 as any), s, n, u, a, u);
}
function Ht(this: any): any {
  return (Yt as any)(qt);
}
function Xt(this: any, t: any): any {
  return [((t as any).source as any).x1, (t as any).y0];
}
function Qt(this: any, t: any): any {
  return [((t as any).target as any).x0, (t as any).y1];
}
function Kt(this: any): any {
  return (((((Ht as any)() as any).source as any)(Xt) as any).target as any)(Qt);
}
var at: any = (function (this: any): any {
  var t: any = (y as any)(function (this: any, k: any, o: any, l: any, h: any): any {
      for (l = l || {}, h = (k as any).length; h--; (l as any)[(k as any)[h]] = o);
      return l;
    }, "o"),
    n: any = [1, 9],
    s: any = [1, 10],
    a: any = [1, 5, 10, 12],
    u: any = {
      trace: (y as any)(function (this: any): any {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        SANKEY: 4,
        NEWLINE: 5,
        csv: 6,
        opt_eof: 7,
        record: 8,
        csv_tail: 9,
        EOF: 10,
        "field[source]": 11,
        COMMA: 12,
        "field[target]": 13,
        "field[value]": 14,
        field: 15,
        escaped: 16,
        non_escaped: 17,
        DQUOTE: 18,
        ESCAPED_TEXT: 19,
        NON_ESCAPED_TEXT: 20,
        $accept: 0,
        $end: 1
      },
      terminals_: {
        2: "error",
        4: "SANKEY",
        5: "NEWLINE",
        10: "EOF",
        11: "field[source]",
        12: "COMMA",
        13: "field[target]",
        14: "field[value]",
        18: "DQUOTE",
        19: "ESCAPED_TEXT",
        20: "NON_ESCAPED_TEXT"
      },
      productions_: [0, [3, 4], [6, 2], [9, 2], [9, 0], [7, 1], [7, 0], [8, 5], [15, 1], [15, 1], [16, 3], [17, 1]],
      performAction: (y as any)(function (this: any, o: any, l: any, h: any, m: any, _: any, d: any, v: any): any {
        var T: any = ((d as any).length as any) - (1 as any);
        switch (_) {
          case 7:
            const A: any = ((m as any).findOrCreateNode as any)((((((d as any)[(T as any) - (4 as any)] as any).trim as any)() as any).replaceAll as any)('""', '"')),
              M: any = ((m as any).findOrCreateNode as any)((((((d as any)[(T as any) - (2 as any)] as any).trim as any)() as any).replaceAll as any)('""', '"')),
              I: any = (parseFloat as any)((((d as any)[T] as any).trim as any)());
            ((m as any).addLink as any)(A, M, I);
            break;
          case 8:
          case 9:
          case 11:
            (this as any).$ = (d as any)[T];
            break;
          case 10:
            (this as any).$ = (d as any)[(T as any) - (1 as any)];
            break;
        }
      }, "anonymous"),
      table: [{
        3: 1,
        4: [1, 2]
      }, {
        1: [3]
      }, {
        5: [1, 3]
      }, {
        6: 4,
        8: 5,
        15: 6,
        16: 7,
        17: 8,
        18: n,
        20: s
      }, {
        1: [2, 6],
        7: 11,
        10: [1, 12]
      }, (t as any)(s, [2, 4], {
        9: 13,
        5: [1, 14]
      }), {
        12: [1, 15]
      }, (t as any)(a, [2, 8]), (t as any)(a, [2, 9]), {
        19: [1, 16]
      }, (t as any)(a, [2, 11]), {
        1: [2, 1]
      }, {
        1: [2, 5]
      }, (t as any)(s, [2, 2]), {
        6: 17,
        8: 5,
        15: 6,
        16: 7,
        17: 8,
        18: n,
        20: s
      }, {
        15: 18,
        16: 7,
        17: 8,
        18: n,
        20: s
      }, {
        18: [1, 19]
      }, (t as any)(s, [2, 3]), {
        12: [1, 20]
      }, (t as any)(a, [2, 10]), {
        15: 21,
        16: 7,
        17: 8,
        18: n,
        20: s
      }, (t as any)([1, 5, 10], [2, 7])],
      defaultActions: {
        11: [2, 1],
        12: [2, 5]
      },
      parseError: (y as any)(function (this: any, o: any, l: any): any {
        if ((l as any).recoverable) ((this as any).trace as any)(o);else {
          var h: any = new (Error as any)(o);
          throw (h as any).hash = l, h;
        }
      }, "parseError"),
      parse: (y as any)(function (this: any, o: any): any {
        var R: any;
        var l: any = this,
          h: any = [0],
          m: any = [],
          _: any = [null],
          d: any = [],
          v: any = (this as any).table,
          T: any = "",
          A: any = 0,
          M: any = 0,
          I: number = 2,
          N: number = 1,
          D: any = (((d as any).slice as any).call as any)(arguments, 1),
          S: any = ((Object as any).create as any)((this as any).lexer),
          C: any = {
            yy: {}
          };
        for (R in (this as any).yy) ((((Object as any).prototype as any).hasOwnProperty as any).call as any)((this as any).yy, R) && (((C as any).yy as any)[R] = ((this as any).yy as any)[R]);
        ((S as any).setInput as any)(o, (C as any).yy), ((C as any).yy as any).lexer = S, ((C as any).yy as any).parser = this, (typeof (S as any).yylloc as any) > ("u" as any) && ((S as any).yylloc = {});
        var j: any = (S as any).yylloc;
        ((d as any).push as any)(j);
        var V: any = (S as any).options && ((S as any).options as any).ranges;
        (typeof ((C as any).yy as any).parseError as any) == ("function" as any) ? (this as any).parseError = ((C as any).yy as any).parseError : (this as any).parseError = (((Object as any).getPrototypeOf as any)(this) as any).parseError;
        function O(this: any, L: any): any {
          (h as any).length = ((h as any).length as any) - ((2 as any) * (L as any) as any), (_ as any).length = ((_ as any).length as any) - (L as any), (d as any).length = ((d as any).length as any) - (L as any);
        }
        (y as any)(O, "popStack");
        function z(this: any): any {
          var L: any;
          return L = ((m as any).pop as any)() || ((S as any).lex as any)() || N, (typeof L as any) != ("number" as any) && (L instanceof Array && (m = L, L = ((m as any).pop as any)()), L = ((l as any).symbols_ as any)[L] || L), L;
        }
        (y as any)(z, "lex");
        for (var w: any, P: any, E: any, i: any, f: any = {}, c: any, e: any, r: any, p: any;;) {
          if (P = (h as any)[((h as any).length as any) - (1 as any)], ((this as any).defaultActions as any)[P] ? E = ((this as any).defaultActions as any)[P] : (((w as any) === (null as any) || (typeof w as any) > ("u" as any)) && (w = (z as any)()), E = (v as any)[P] && ((v as any)[P] as any)[w]), (typeof E as any) > ("u" as any) || !(E as any).length || !(E as any)[0]) {
            var b: any = "";
            p = [];
            for (c in (v as any)[P]) ((this as any).terminals_ as any)[c] && (c as any) > (I as any) && ((p as any).push as any)((("'" as any) + (((this as any).terminals_ as any)[c] as any) as any) + ("'" as any));
            (S as any).showPosition ? b = (((((((("Parse error on line " as any) + ((A as any) + (1 as any) as any) as any) + (`:
` as any) as any) + (((S as any).showPosition as any)() as any) as any) + (`
Expecting ` as any) as any) + (((p as any).join as any)(", ") as any) as any) + (", got '" as any) as any) + ((((this as any).terminals_ as any)[w] || w) as any) as any) + ("'" as any) : b = ((("Parse error on line " as any) + ((A as any) + (1 as any) as any) as any) + (": Unexpected " as any) as any) + (((w as any) == (N as any) ? "end of input" : (("'" as any) + ((((this as any).terminals_ as any)[w] || w) as any) as any) + ("'" as any)) as any), ((this as any).parseError as any)(b, {
              text: (S as any).match,
              token: ((this as any).terminals_ as any)[w] || w,
              line: (S as any).yylineno,
              loc: j,
              expected: p
            });
          }
          if ((E as any)[0] instanceof Array && ((E as any).length as any) > (1 as any)) throw new (Error as any)(((("Parse Error: multiple actions possible at state: " as any) + (P as any) as any) + (", token: " as any) as any) + (w as any));
          switch ((E as any)[0]) {
            case 1:
              ((h as any).push as any)(w), ((_ as any).push as any)((S as any).yytext), ((d as any).push as any)((S as any).yylloc), ((h as any).push as any)((E as any)[1]), w = null, M = (S as any).yyleng, T = (S as any).yytext, A = (S as any).yylineno, j = (S as any).yylloc;
              break;
            case 2:
              if (e = (((this as any).productions_ as any)[(E as any)[1]] as any)[1], (f as any).$ = (_ as any)[((_ as any).length as any) - (e as any)], (f as any)._$ = {
                first_line: ((d as any)[((d as any).length as any) - ((e || 1) as any)] as any).first_line,
                last_line: ((d as any)[((d as any).length as any) - (1 as any)] as any).last_line,
                first_column: ((d as any)[((d as any).length as any) - ((e || 1) as any)] as any).first_column,
                last_column: ((d as any)[((d as any).length as any) - (1 as any)] as any).last_column
              }, V && (((f as any)._$ as any).range = [(((d as any)[((d as any).length as any) - ((e || 1) as any)] as any).range as any)[0], (((d as any)[((d as any).length as any) - (1 as any)] as any).range as any)[1]]), i = (((this as any).performAction as any).apply as any)(f, (([T, M, A, (C as any).yy, (E as any)[1], _, d] as any).concat as any)(D)), (typeof i as any) < ("u" as any)) return i;
              e && (h = ((h as any).slice as any)(0, ((-1 as any) * (e as any) as any) * (2 as any)), _ = ((_ as any).slice as any)(0, (-1 as any) * (e as any)), d = ((d as any).slice as any)(0, (-1 as any) * (e as any))), ((h as any).push as any)((((this as any).productions_ as any)[(E as any)[1]] as any)[0]), ((_ as any).push as any)((f as any).$), ((d as any).push as any)((f as any)._$), r = ((v as any)[(h as any)[((h as any).length as any) - (2 as any)]] as any)[(h as any)[((h as any).length as any) - (1 as any)]], ((h as any).push as any)(r);
              break;
            case 3:
              return !0;
          }
        }
        return !0;
      }, "parse")
    },
    x: any = (function (this: any): any {
      var k: any = {
        EOF: 1,
        parseError: (y as any)(function (this: any, l: any, h: any): any {
          if (((this as any).yy as any).parser) ((((this as any).yy as any).parser as any).parseError as any)(l, h);else throw new (Error as any)(l);
        }, "parseError"),
        setInput: (y as any)(function (this: any, o: any, l: any): any {
          return (this as any).yy = l || (this as any).yy || {}, (this as any)._input = o, (this as any)._more = (this as any)._backtrack = (this as any).done = !1, (this as any).yylineno = (this as any).yyleng = 0, (this as any).yytext = (this as any).matched = (this as any).match = "", (this as any).conditionStack = ["INITIAL"], (this as any).yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
          }, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [0, 0]), (this as any).offset = 0, this;
        }, "setInput"),
        input: (y as any)(function (this: any): any {
          var o: any = ((this as any)._input as any)[0];
          (this as any).yytext += o, (this as any).yyleng++, (this as any).offset++, (this as any).match += o, (this as any).matched += o;
          var l: any = ((o as any).match as any)(/(?:\r\n?|\n).*/g);
          return l ? ((this as any).yylineno++, ((this as any).yylloc as any).last_line++) : ((this as any).yylloc as any).last_column++, ((this as any).options as any).ranges && (((this as any).yylloc as any).range as any)[1]++, (this as any)._input = (((this as any)._input as any).slice as any)(1), o;
        }, "input"),
        unput: (y as any)(function (this: any, o: any): any {
          var l: any = (o as any).length,
            h: any = ((o as any).split as any)(/(?:\r\n?|\n)/g);
          (this as any)._input = (o as any) + ((this as any)._input as any), (this as any).yytext = (((this as any).yytext as any).substr as any)(0, (((this as any).yytext as any).length as any) - (l as any)), (this as any).offset -= l;
          var m: any = (((this as any).match as any).split as any)(/(?:\r\n?|\n)/g);
          (this as any).match = (((this as any).match as any).substr as any)(0, (((this as any).match as any).length as any) - (1 as any)), (this as any).matched = (((this as any).matched as any).substr as any)(0, (((this as any).matched as any).length as any) - (1 as any)), ((h as any).length as any) - (1 as any) && ((this as any).yylineno -= ((h as any).length as any) - (1 as any));
          var _: any = ((this as any).yylloc as any).range;
          return (this as any).yylloc = {
            first_line: ((this as any).yylloc as any).first_line,
            last_line: ((this as any).yylineno as any) + (1 as any),
            first_column: ((this as any).yylloc as any).first_column,
            last_column: h ? (((((h as any).length as any) === ((m as any).length as any) ? ((this as any).yylloc as any).first_column : 0) as any) + (((m as any)[((m as any).length as any) - ((h as any).length as any)] as any).length as any) as any) - (((h as any)[0] as any).length as any) : (((this as any).yylloc as any).first_column as any) - (l as any)
          }, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [(_ as any)[0], (((_ as any)[0] as any) + ((this as any).yyleng as any) as any) - (l as any)]), (this as any).yyleng = ((this as any).yytext as any).length, this;
        }, "unput"),
        more: (y as any)(function (this: any): any {
          return (this as any)._more = !0, this;
        }, "more"),
        reject: (y as any)(function (this: any): any {
          if (((this as any).options as any).backtrack_lexer) (this as any)._backtrack = !0;else return ((this as any).parseError as any)(((("Lexical error on line " as any) + (((this as any).yylineno as any) + (1 as any) as any) as any) + (`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` as any) as any) + (((this as any).showPosition as any)() as any), {
            text: "",
            token: null,
            line: (this as any).yylineno
          });
          return this;
        }, "reject"),
        less: (y as any)(function (this: any, o: any): any {
          ((this as any).unput as any)((((this as any).match as any).slice as any)(o));
        }, "less"),
        pastInput: (y as any)(function (this: any): any {
          var o: any = (((this as any).matched as any).substr as any)(0, (((this as any).matched as any).length as any) - (((this as any).match as any).length as any));
          return ((((o as any).length as any) > (20 as any) ? "..." : "") as any) + (((((o as any).substr as any)(-20) as any).replace as any)(/\n/g, "") as any);
        }, "pastInput"),
        upcomingInput: (y as any)(function (this: any): any {
          var o: any = (this as any).match;
          return ((o as any).length as any) < (20 as any) && (o += (((this as any)._input as any).substr as any)(0, (20 as any) - ((o as any).length as any))), (((((o as any).substr as any)(0, 20) as any) + ((((o as any).length as any) > (20 as any) ? "..." : "") as any) as any).replace as any)(/\n/g, "");
        }, "upcomingInput"),
        showPosition: (y as any)(function (this: any): any {
          var o: any = ((this as any).pastInput as any)(),
            l: any = ((new (Array as any)(((o as any).length as any) + (1 as any)) as any).join as any)("-");
          return ((((o as any) + (((this as any).upcomingInput as any)() as any) as any) + (`
` as any) as any) + (l as any) as any) + ("^" as any);
        }, "showPosition"),
        test_match: (y as any)(function (this: any, o: any, l: any): any {
          var d: any;
          var h: any, m: any, _: any;
          if (((this as any).options as any).backtrack_lexer && (_ = {
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
          }, ((this as any).options as any).ranges && (((_ as any).yylloc as any).range = ((((this as any).yylloc as any).range as any).slice as any)(0))), m = (((o as any)[0] as any).match as any)(/(?:\r\n?|\n).*/g), m && ((this as any).yylineno += (m as any).length), (this as any).yylloc = {
            first_line: ((this as any).yylloc as any).last_line,
            last_line: ((this as any).yylineno as any) + (1 as any),
            first_column: ((this as any).yylloc as any).last_column,
            last_column: m ? (((m as any)[((m as any).length as any) - (1 as any)] as any).length as any) - ((((((m as any)[((m as any).length as any) - (1 as any)] as any).match as any)(/\r?\n?/) as any)[0] as any).length as any) : (((this as any).yylloc as any).last_column as any) + (((o as any)[0] as any).length as any)
          }, (this as any).yytext += (o as any)[0], (this as any).match += (o as any)[0], (this as any).matches = o, (this as any).yyleng = ((this as any).yytext as any).length, ((this as any).options as any).ranges && (((this as any).yylloc as any).range = [(this as any).offset, (this as any).offset += (this as any).yyleng]), (this as any)._more = !1, (this as any)._backtrack = !1, (this as any)._input = (((this as any)._input as any).slice as any)(((o as any)[0] as any).length), (this as any).matched += (o as any)[0], h = (((this as any).performAction as any).call as any)(this, (this as any).yy, this, l, ((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)]), (this as any).done && (this as any)._input && ((this as any).done = !1), h) return h;
          if ((this as any)._backtrack) {
            for (d in _) (this as any)[d] = (_ as any)[d];
            return !1;
          }
          return !1;
        }, "test_match"),
        next: (y as any)(function (this: any): any {
          if ((this as any).done) return (this as any).EOF;
          (this as any)._input || ((this as any).done = !0);
          var o: any, l: any, h: any, m: any;
          (this as any)._more || ((this as any).yytext = "", (this as any).match = "");
          for (var _: any = ((this as any)._currentRules as any)(), d: any = 0; (d as any) < ((_ as any).length as any); d++) if (h = (((this as any)._input as any).match as any)(((this as any).rules as any)[(_ as any)[d]]), h && (!l || (((h as any)[0] as any).length as any) > (((l as any)[0] as any).length as any))) {
            if (l = h, m = d, ((this as any).options as any).backtrack_lexer) {
              if (o = ((this as any).test_match as any)(h, (_ as any)[d]), (o as any) !== (!1 as any)) return o;
              if ((this as any)._backtrack) {
                l = !1;
                continue;
              } else return !1;
            } else if (!((this as any).options as any).flex) break;
          }
          return l ? (o = ((this as any).test_match as any)(l, (_ as any)[m]), (o as any) !== (!1 as any) ? o : !1) : ((this as any)._input as any) === ("" as any) ? (this as any).EOF : ((this as any).parseError as any)(((("Lexical error on line " as any) + (((this as any).yylineno as any) + (1 as any) as any) as any) + (`. Unrecognized text.
` as any) as any) + (((this as any).showPosition as any)() as any), {
            text: "",
            token: null,
            line: (this as any).yylineno
          });
        }, "next"),
        lex: (y as any)(function (this: any): any {
          var l: any = ((this as any).next as any)();
          return l || ((this as any).lex as any)();
        }, "lex"),
        begin: (y as any)(function (this: any, l: any): any {
          (((this as any).conditionStack as any).push as any)(l);
        }, "begin"),
        popState: (y as any)(function (this: any): any {
          var l: any = (((this as any).conditionStack as any).length as any) - (1 as any);
          return (l as any) > (0 as any) ? (((this as any).conditionStack as any).pop as any)() : ((this as any).conditionStack as any)[0];
        }, "popState"),
        _currentRules: (y as any)(function (this: any): any {
          return ((this as any).conditionStack as any).length && ((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)] ? (((this as any).conditions as any)[((this as any).conditionStack as any)[(((this as any).conditionStack as any).length as any) - (1 as any)]] as any).rules : (((this as any).conditions as any).INITIAL as any).rules;
        }, "_currentRules"),
        topState: (y as any)(function (this: any, l: any): any {
          return l = ((((this as any).conditionStack as any).length as any) - (1 as any) as any) - (((Math as any).abs as any)(l || 0) as any), (l as any) >= (0 as any) ? ((this as any).conditionStack as any)[l] : "INITIAL";
        }, "topState"),
        pushState: (y as any)(function (this: any, l: any): any {
          ((this as any).begin as any)(l);
        }, "pushState"),
        stateStackSize: (y as any)(function (this: any): any {
          return ((this as any).conditionStack as any).length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": !0
        },
        performAction: (y as any)(function (this: any, l: any, h: any, m: any, _: any): any {
          switch (m) {
            case 0:
              return ((this as any).pushState as any)("csv"), 4;
            case 1:
              return ((this as any).pushState as any)("csv"), 4;
            case 2:
              return 10;
            case 3:
              return 5;
            case 4:
              return 12;
            case 5:
              return ((this as any).pushState as any)("escaped_text"), 18;
            case 6:
              return 20;
            case 7:
              return ((this as any).popState as any)("escaped_text"), 18;
            case 8:
              return 19;
          }
        }, "anonymous"),
        rules: [/^(?:sankey-beta\b)/i, /^(?:sankey\b)/i, /^(?:$)/i, /^(?:((\u000D\u000A)|(\u000A)))/i, /^(?:(\u002C))/i, /^(?:(\u0022))/i, /^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i, /^(?:(\u0022)(?!(\u0022)))/i, /^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i],
        conditions: {
          csv: {
            rules: [2, 3, 4, 5, 6, 7, 8],
            inclusive: !1
          },
          escaped_text: {
            rules: [7, 8],
            inclusive: !1
          },
          INITIAL: {
            rules: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            inclusive: !0
          }
        }
      };
      return k;
    } as any)();
  (u as any).lexer = x;
  function g(this: any): any {
    (this as any).yy = {};
  }
  return (y as any)(g, "Parser"), (g as any).prototype = u, (u as any).Parser = g, new (g as any)();
} as any)();
(at as any).parser = at;
var K: any = at,
  J: any = [],
  tt: any = [],
  Z: any = new (Map as any)(),
  Zt: any = (y as any)((): any => {
    J = [], tt = [], Z = new (Map as any)(), (At as any)();
  }, "clear"),
  W: any,
  Jt: any = (W = class {
    declare value: any;
    declare target: any;
    declare source: any;
    [key: string]: any;
    constructor(n: any, s: any, a: any = 0) {
      (this as any).source = n, (this as any).target = s, (this as any).value = a;
    }
  }, (y as any)(W, "SankeyLink"), W),
  te: any = (y as any)((t: any, n: any, s: any): any => {
    ((J as any).push as any)(new (Jt as any)(t, n, s));
  }, "addLink"),
  G: any,
  ee: any = (G = class {
    declare ID: any;
    [key: string]: any;
    constructor(n: any) {
      (this as any).ID = n;
    }
  }, (y as any)(G, "SankeyNode"), G),
  ne: any = (y as any)((t: any): any => {
    t = ((Tt as any).sanitizeText as any)(t, (lt as any)());
    let n: any = ((Z as any).get as any)(t);
    return (n as any) === (void 0 as any) && (n = new (ee as any)(t), ((Z as any).set as any)(t, n), ((tt as any).push as any)(n)), n;
  }, "findOrCreateNode"),
  ie: any = (y as any)((): any => tt, "getNodes"),
  re: any = (y as any)((): any => J, "getLinks"),
  se: any = (y as any)((): any => ({
    nodes: ((tt as any).map as any)((t: any): any => ({
      id: (t as any).ID
    })),
    links: ((J as any).map as any)((t: any): any => ({
      source: ((t as any).source as any).ID,
      target: ((t as any).target as any).ID,
      value: (t as any).value
    }))
  }), "getGraph"),
  oe: any = {
    nodesMap: Z,
    getConfig: (y as any)((): any => ((lt as any)() as any).sankey, "getConfig"),
    getNodes: ie,
    getLinks: re,
    getGraph: se,
    addLink: te,
    findOrCreateNode: ne,
    getAccTitle: wt,
    setAccTitle: St,
    getAccDescription: bt,
    setAccDescription: vt,
    getDiagramTitle: _t,
    setDiagramTitle: xt,
    clear: Zt
  },
  $: any,
  gt: any = ($ = class {
    declare href: any;
    declare id: any;
    [key: string]: any;
    static next(n: any): any {
      return new ($ as any)((n as any) + (++($ as any).count as any));
    }
    constructor(n: any) {
      (this as any).id = n, (this as any).href = `#${n}`;
    }
    toString(): any {
      return (("url(" as any) + ((this as any).href as any) as any) + (")" as any);
    }
  }, (y as any)($, "Uid"), ($ as any).count = 0, $),
  ae: any = {
    left: It,
    right: Ot,
    center: $t,
    justify: kt
  },
  le: any = (y as any)((t: any): any => {
    let n: any = 0,
      s: any = 0;
    for (const a of t) {
      const u: any = (a as any).value ?? 0;
      (u as any) > (n as any) && (n = u, s = (a as any).layer ?? 0);
    }
    return s;
  }, "findCentralNodeLayer"),
  ce: any = (y as any)(function (this: any, t: any, n: any, s: any, a: any): any {
    const {
        securityLevel: u,
        sankey: x
      }: any = (lt as any)(),
      g: any = (Lt as any).sankey;
    let k: any;
    (u as any) === ("sandbox" as any) && (k = (H as any)(("#i" as any) + (n as any)));
    const o: any = (u as any) === ("sandbox" as any) ? (H as any)((((((k as any).nodes as any)() as any)[0] as any).contentDocument as any).body) : (H as any)("body"),
      l: any = (u as any) === ("sandbox" as any) ? ((o as any).select as any)(`[id="${n}"]`) : (H as any)(`[id="${n}"]`),
      h: any = x?.width ?? (g as any).width,
      m: any = x?.height ?? (g as any).width,
      _: any = x?.useMaxWidth ?? (g as any).useMaxWidth,
      d: any = x?.nodeAlignment ?? (g as any).nodeAlignment,
      v: any = x?.prefix ?? (g as any).prefix,
      T: any = x?.suffix ?? (g as any).suffix,
      A: any = x?.showValues ?? (g as any).showValues,
      M: any = x?.nodeWidth ?? (g as any).nodeWidth ?? 10,
      I: any = x?.nodePadding ?? (g as any).nodePadding ?? 12,
      N: any = x?.labelStyle ?? (g as any).labelStyle ?? "legacy",
      D: any = x?.nodeColors ?? {},
      S: any = (((a as any).db as any).getGraph as any)(),
      C: any = (ae as any)[d];
    ((((((((((((Bt as any)() as any).nodeId as any)((e: any): any => (e as any).id) as any).nodeWidth as any)(M) as any).nodePadding as any)((I as any) + ((A ? 15 : 0) as any)) as any).nodeAlign as any)(C) as any).extent as any)([[0, 0], [h, m]]) as any)(S);
    const j: any = (le as any)((S as any).nodes),
      V: any = (Mt as any)(Ct),
      O: any = (y as any)((e: any): any => (D as any)[e] ?? (V as any)(e), "getNodeColor");
    ((((((((((((((((((((((((((((l as any).append as any)("g") as any).attr as any)("class", "nodes") as any).selectAll as any)(".node") as any).data as any)((S as any).nodes) as any).join as any)("g") as any).attr as any)("class", "node") as any).attr as any)("id", (e: any): any => (((e as any).uid = ((gt as any).next as any)("node-")) as any).id) as any).attr as any)("transform", function (this: any, e: any): any {
      return (((("translate(" as any) + ((e as any).x0 as any) as any) + ("," as any) as any) + ((e as any).y0 as any) as any) + (")" as any);
    }) as any).attr as any)("x", (e: any): any => (e as any).x0) as any).attr as any)("y", (e: any): any => (e as any).y0) as any).append as any)("rect") as any).attr as any)("height", (e: any): any => ((e as any).y1 as any) - ((e as any).y0 as any)) as any).attr as any)("width", (e: any): any => ((e as any).x1 as any) - ((e as any).x0 as any)) as any).attr as any)("fill", (e: any): any => (O as any)((e as any).id));
    const z: any = (y as any)(({
        id: e,
        value: r
      }: any): any => A ? `${e}
${v}${(((Math as any).round as any)((r as any) * (100 as any)) as any) / (100 as any)}${T}` : e, "getText"),
      w: any = (y as any)((e: any): any => (N as any) === ("outlined" as any) ? (((e as any).layer ?? 0) as any) < (j as any) ? {
        x: ((e as any).x0 as any) - (6 as any),
        anchor: "end"
      } : {
        x: ((e as any).x1 as any) + (6 as any),
        anchor: "start"
      } : ((e as any).x0 as any) < ((h as any) / (2 as any) as any) ? {
        x: ((e as any).x1 as any) + (6 as any),
        anchor: "start"
      } : {
        x: ((e as any).x0 as any) - (6 as any),
        anchor: "end"
      }, "getLabelPosition"),
      P: any = ((((((l as any).append as any)("g") as any).attr as any)("class", "node-labels") as any).attr as any)("font-size", 14),
      E: any = (y as any)((e: any): any => ((((((((((((((((((P as any).selectAll as any)(e ? `.${e}` : "text") as any).data as any)((S as any).nodes) as any).join as any)("text") as any).attr as any)("class", e ?? null) as any).attr as any)("x", (r: any): any => ((w as any)(r) as any).x) as any).attr as any)("y", (r: any): any => (((r as any).y1 as any) + ((r as any).y0 as any) as any) / (2 as any)) as any).attr as any)("dy", `${A ? "0" : "0.35"}em`) as any).attr as any)("text-anchor", (r: any): any => ((w as any)(r) as any).anchor) as any).text as any)(z), "appendLabel");
    (N as any) === ("outlined" as any) ? ((E as any)("sankey-label-bg"), (E as any)("sankey-label-fg")) : (E as any)();
    const i: any = ((((((((((((((((((l as any).append as any)("g") as any).attr as any)("class", "links") as any).attr as any)("fill", "none") as any).attr as any)("stroke-opacity", .5) as any).selectAll as any)(".link") as any).data as any)((S as any).links) as any).join as any)("g") as any).attr as any)("class", "link") as any).style as any)("mix-blend-mode", "multiply"),
      f: any = x?.linkColor ?? "gradient";
    if ((f as any) === ("gradient" as any)) {
      const e: any = ((((((((((i as any).append as any)("linearGradient") as any).attr as any)("id", (r: any): any => (((r as any).uid = ((gt as any).next as any)("linearGradient-")) as any).id) as any).attr as any)("gradientUnits", "userSpaceOnUse") as any).attr as any)("x1", (r: any): any => ((r as any).source as any).x1) as any).attr as any)("x2", (r: any): any => ((r as any).target as any).x0);
      ((((((e as any).append as any)("stop") as any).attr as any)("offset", "0%") as any).attr as any)("stop-color", (r: any): any => (O as any)(((r as any).source as any).id)), ((((((e as any).append as any)("stop") as any).attr as any)("offset", "100%") as any).attr as any)("stop-color", (r: any): any => (O as any)(((r as any).target as any).id));
    }
    let c: any;
    switch (f) {
      case "gradient":
        c = (y as any)((e: any): any => (e as any).uid, "coloring");
        break;
      case "source":
        c = (y as any)((e: any): any => (O as any)(((e as any).source as any).id), "coloring");
        break;
      case "target":
        c = (y as any)((e: any): any => (O as any)(((e as any).target as any).id), "coloring");
        break;
      default:
        c = f;
    }
    ((((((((i as any).append as any)("path") as any).attr as any)("d", (Kt as any)()) as any).attr as any)("stroke", c) as any).attr as any)("stroke-width", (e: any): any => ((Math as any).max as any)(1, (e as any).width)), (Et as any)(void 0, l, 0, _);
  }, "draw"),
  ue: any = {
    draw: ce
  },
  he: any = (y as any)((t: any): any => ((((((t as any).replaceAll as any)(/^[^\S\n\r]+|[^\S\n\r]+$/g, "") as any).replaceAll as any)(/([\n\r])+/g, `
`) as any).trim as any)(), "prepareTextForParsing"),
  fe: any = (y as any)((t: any): any => `.label {
    font-family: ${(t as any).fontFamily};
  }

  .node-labels {
    font-family: ${(t as any).fontFamily};
  }

  /* Outlined label style - background stroke for better readability */
  .sankey-label-bg {
    stroke: ${(t as any).mainBkg || (t as any).background || "#fff"};
    stroke-width: 4px;
    stroke-linejoin: round;
    paint-order: stroke;
  }

  /* Foreground label text */
  .sankey-label-fg {
    fill: ${(t as any).textColor};
  }

  /* Node styling */
  .node rect {
    shape-rendering: crispEdges;
  }

  /* Link styling */
  .link {
    fill: none;
    stroke-opacity: 0.5;
    mix-blend-mode: multiply;
  }
`, "getStyles"),
  ye: any = fe,
  de: any = (((K as any).parse as any).bind as any)(K);
(K as any).parse = (t: any): any => (de as any)((he as any)(t));
var xe: any = {
  styles: ye,
  parser: K,
  db: oe,
  renderer: ue
};
export { xe as diagram };
//# debugId=a64a69e7-dd02-43dd-95a8-96a9c833f6b7
