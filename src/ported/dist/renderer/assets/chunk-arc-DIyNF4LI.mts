declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "df6d331e-6091-4a0f-887a-46133862ad65", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-df6d331e-6091-4a0f-887a-46133862ad65");
  } catch (e: any) {}
} as any)();
import { G as ln, H as un, I as N, J as I, K as J, L as an, M as y, N as tn, O as j, P as _, Q as rn, R as o, S as sn, T as on, V as fn } from "./chunk-mermaid.core-B9Iu5CoE.js";
function cn(this: any, l: any): any {
  return (l as any).innerRadius;
}
function yn(this: any, l: any): any {
  return (l as any).outerRadius;
}
function gn(this: any, l: any): any {
  return (l as any).startAngle;
}
function dn(this: any, l: any): any {
  return (l as any).endAngle;
}
function mn(this: any, l: any): any {
  return l && (l as any).padAngle;
}
function pn(this: any, l: any, h: any, q: any, O: any, v: any, R: any, K: any, u: any): any {
  var D: any = (q as any) - (l as any),
    i: any = (O as any) - (h as any),
    n: any = (K as any) - (v as any),
    d: any = (u as any) - (R as any),
    a: any = ((d as any) * (D as any) as any) - ((n as any) * (i as any) as any);
  if (!(((a as any) * (a as any) as any) < (y as any))) return a = (((n as any) * ((h as any) - (R as any) as any) as any) - ((d as any) * ((l as any) - (v as any) as any) as any) as any) / (a as any), [(l as any) + ((a as any) * (D as any) as any), (h as any) + ((a as any) * (i as any) as any)];
}
function W(this: any, l: any, h: any, q: any, O: any, v: any, R: any, K: any): any {
  var u: any = (l as any) - (q as any),
    D: any = (h as any) - (O as any),
    i: any = ((K ? R : -R) as any) / ((j as any)(((u as any) * (u as any) as any) + ((D as any) * (D as any) as any)) as any),
    n: any = (i as any) * (D as any),
    d: any = (-i as any) * (u as any),
    a: any = (l as any) + (n as any),
    s: any = (h as any) + (d as any),
    f: any = (q as any) + (n as any),
    c: any = (O as any) + (d as any),
    L: any = ((a as any) + (f as any) as any) / (2 as any),
    t: any = ((s as any) + (c as any) as any) / (2 as any),
    m: any = (f as any) - (a as any),
    g: any = (c as any) - (s as any),
    A: any = ((m as any) * (m as any) as any) + ((g as any) * (g as any) as any),
    T: any = (v as any) - (R as any),
    P: any = ((a as any) * (c as any) as any) - ((f as any) * (s as any) as any),
    E: any = (((g as any) < (0 as any) ? -1 : 1) as any) * ((j as any)((on as any)(0, (((T as any) * (T as any) as any) * (A as any) as any) - ((P as any) * (P as any) as any))) as any),
    G: any = (((P as any) * (g as any) as any) - ((m as any) * (E as any) as any) as any) / (A as any),
    H: any = (((-P as any) * (m as any) as any) - ((g as any) * (E as any) as any) as any) / (A as any),
    w: any = (((P as any) * (g as any) as any) + ((m as any) * (E as any) as any) as any) / (A as any),
    p: any = (((-P as any) * (m as any) as any) + ((g as any) * (E as any) as any) as any) / (A as any),
    x: any = (G as any) - (L as any),
    e: any = (H as any) - (t as any),
    r: any = (w as any) - (L as any),
    M: any = (p as any) - (t as any);
  return (((x as any) * (x as any) as any) + ((e as any) * (e as any) as any) as any) > (((r as any) * (r as any) as any) + ((M as any) * (M as any) as any) as any) && (G = w, H = p), {
    cx: G,
    cy: H,
    x01: -n,
    y01: -d,
    x11: (G as any) * (((v as any) / (T as any) as any) - (1 as any) as any),
    y11: (H as any) * (((v as any) / (T as any) as any) - (1 as any) as any)
  };
}
function hn(this: any): any {
  var l: any = cn,
    h: any = yn,
    q: any = (J as any)(0),
    O: any = null,
    v: any = gn,
    R: any = dn,
    K: any = mn,
    u: any = null,
    D: any = (ln as any)(i);
  function i(this: any): any {
    var n: any,
      d: any,
      a: any = +((l as any).apply as any)(this, arguments),
      s: any = +((h as any).apply as any)(this, arguments),
      f: any = (((v as any).apply as any)(this, arguments) as any) - (an as any),
      c: any = (((R as any).apply as any)(this, arguments) as any) - (an as any),
      L: any = (rn as any)((c as any) - (f as any)),
      t: any = (c as any) > (f as any);
    if (u || (u = n = (D as any)()), (s as any) < (a as any) && (d = s, s = a, a = d), !((s as any) > (y as any))) ((u as any).moveTo as any)(0, 0);else if ((L as any) > ((tn as any) - (y as any) as any)) ((u as any).moveTo as any)((s as any) * ((N as any)(f) as any), (s as any) * ((I as any)(f) as any)), ((u as any).arc as any)(0, 0, s, f, c, !t), (a as any) > (y as any) && (((u as any).moveTo as any)((a as any) * ((N as any)(c) as any), (a as any) * ((I as any)(c) as any)), ((u as any).arc as any)(0, 0, a, c, f, t));else {
      var m: any = f,
        g: any = c,
        A: any = f,
        T: any = c,
        P: any = L,
        E: any = L,
        G: any = (((K as any).apply as any)(this, arguments) as any) / (2 as any),
        H: any = (G as any) > (y as any) && (O ? +((O as any).apply as any)(this, arguments) : (j as any)(((a as any) * (a as any) as any) + ((s as any) * (s as any) as any))),
        w: any = (_ as any)(((rn as any)((s as any) - (a as any)) as any) / (2 as any), +((q as any).apply as any)(this, arguments)),
        p: any = w,
        x: any = w,
        e: any,
        r: any;
      if ((H as any) > (y as any)) {
        var M: any = (sn as any)(((H as any) / (a as any) as any) * ((I as any)(G) as any)),
          z: any = (sn as any)(((H as any) / (s as any) as any) * ((I as any)(G) as any));
        ((P -= (M as any) * (2 as any)) as any) > (y as any) ? (M *= t ? 1 : -1, A += M, T -= M) : (P = 0, A = T = ((f as any) + (c as any) as any) / (2 as any)), ((E -= (z as any) * (2 as any)) as any) > (y as any) ? (z *= t ? 1 : -1, m += z, g -= z) : (E = 0, m = g = ((f as any) + (c as any) as any) / (2 as any));
      }
      var Q: any = (s as any) * ((N as any)(m) as any),
        V: any = (s as any) * ((I as any)(m) as any),
        B: any = (a as any) * ((N as any)(T) as any),
        C: any = (a as any) * ((I as any)(T) as any);
      if ((w as any) > (y as any)) {
        var F: any = (s as any) * ((N as any)(g) as any),
          U: any = (s as any) * ((I as any)(g) as any),
          X: any = (a as any) * ((N as any)(A) as any),
          Y: any = (a as any) * ((I as any)(A) as any),
          S: any;
        if ((L as any) < (un as any)) if (S = (pn as any)(Q, V, X, Y, F, U, B, C)) {
          var Z: any = (Q as any) - ((S as any)[0] as any),
            $: any = (V as any) - ((S as any)[1] as any),
            k: any = (F as any) - ((S as any)[0] as any),
            b: any = (U as any) - ((S as any)[1] as any),
            nn: any = (1 as any) / ((I as any)(((fn as any)((((Z as any) * (k as any) as any) + (($ as any) * (b as any) as any) as any) / (((j as any)(((Z as any) * (Z as any) as any) + (($ as any) * ($ as any) as any)) as any) * ((j as any)(((k as any) * (k as any) as any) + ((b as any) * (b as any) as any)) as any) as any)) as any) / (2 as any)) as any),
            en: any = (j as any)((((S as any)[0] as any) * ((S as any)[0] as any) as any) + (((S as any)[1] as any) * ((S as any)[1] as any) as any));
          p = (_ as any)(w, ((a as any) - (en as any) as any) / ((nn as any) - (1 as any) as any)), x = (_ as any)(w, ((s as any) - (en as any) as any) / ((nn as any) + (1 as any) as any));
        } else p = x = 0;
      }
      (E as any) > (y as any) ? (x as any) > (y as any) ? (e = (W as any)(X, Y, Q, V, s, x, t), r = (W as any)(F, U, B, C, s, x, t), ((u as any).moveTo as any)(((e as any).cx as any) + ((e as any).x01 as any), ((e as any).cy as any) + ((e as any).y01 as any)), (x as any) < (w as any) ? ((u as any).arc as any)((e as any).cx, (e as any).cy, x, (o as any)((e as any).y01, (e as any).x01), (o as any)((r as any).y01, (r as any).x01), !t) : (((u as any).arc as any)((e as any).cx, (e as any).cy, x, (o as any)((e as any).y01, (e as any).x01), (o as any)((e as any).y11, (e as any).x11), !t), ((u as any).arc as any)(0, 0, s, (o as any)(((e as any).cy as any) + ((e as any).y11 as any), ((e as any).cx as any) + ((e as any).x11 as any)), (o as any)(((r as any).cy as any) + ((r as any).y11 as any), ((r as any).cx as any) + ((r as any).x11 as any)), !t), ((u as any).arc as any)((r as any).cx, (r as any).cy, x, (o as any)((r as any).y11, (r as any).x11), (o as any)((r as any).y01, (r as any).x01), !t))) : (((u as any).moveTo as any)(Q, V), ((u as any).arc as any)(0, 0, s, m, g, !t)) : ((u as any).moveTo as any)(Q, V), !((a as any) > (y as any)) || !((P as any) > (y as any)) ? ((u as any).lineTo as any)(B, C) : (p as any) > (y as any) ? (e = (W as any)(B, C, F, U, a, -p, t), r = (W as any)(Q, V, X, Y, a, -p, t), ((u as any).lineTo as any)(((e as any).cx as any) + ((e as any).x01 as any), ((e as any).cy as any) + ((e as any).y01 as any)), (p as any) < (w as any) ? ((u as any).arc as any)((e as any).cx, (e as any).cy, p, (o as any)((e as any).y01, (e as any).x01), (o as any)((r as any).y01, (r as any).x01), !t) : (((u as any).arc as any)((e as any).cx, (e as any).cy, p, (o as any)((e as any).y01, (e as any).x01), (o as any)((e as any).y11, (e as any).x11), !t), ((u as any).arc as any)(0, 0, a, (o as any)(((e as any).cy as any) + ((e as any).y11 as any), ((e as any).cx as any) + ((e as any).x11 as any)), (o as any)(((r as any).cy as any) + ((r as any).y11 as any), ((r as any).cx as any) + ((r as any).x11 as any)), t), ((u as any).arc as any)((r as any).cx, (r as any).cy, p, (o as any)((r as any).y11, (r as any).x11), (o as any)((r as any).y01, (r as any).x01), !t))) : ((u as any).arc as any)(0, 0, a, T, A, t);
    }
    if (((u as any).closePath as any)(), n) return u = null, (n as any) + ("" as any) || null;
  }
  return (i as any).centroid = function (this: any): any {
    var n: any = ((+((l as any).apply as any)(this, arguments) as any) + (+((h as any).apply as any)(this, arguments) as any) as any) / (2 as any),
      d: any = (((+((v as any).apply as any)(this, arguments) as any) + (+((R as any).apply as any)(this, arguments) as any) as any) / (2 as any) as any) - ((un as any) / (2 as any) as any);
    return [((N as any)(d) as any) * (n as any), ((I as any)(d) as any) * (n as any)];
  }, (i as any).innerRadius = function (this: any, n: any): any {
    return (arguments as any).length ? (l = (typeof n as any) == ("function" as any) ? n : (J as any)(+n), i) : l;
  }, (i as any).outerRadius = function (this: any, n: any): any {
    return (arguments as any).length ? (h = (typeof n as any) == ("function" as any) ? n : (J as any)(+n), i) : h;
  }, (i as any).cornerRadius = function (this: any, n: any): any {
    return (arguments as any).length ? (q = (typeof n as any) == ("function" as any) ? n : (J as any)(+n), i) : q;
  }, (i as any).padRadius = function (this: any, n: any): any {
    return (arguments as any).length ? (O = (n as any) == (null as any) ? null : (typeof n as any) == ("function" as any) ? n : (J as any)(+n), i) : O;
  }, (i as any).startAngle = function (this: any, n: any): any {
    return (arguments as any).length ? (v = (typeof n as any) == ("function" as any) ? n : (J as any)(+n), i) : v;
  }, (i as any).endAngle = function (this: any, n: any): any {
    return (arguments as any).length ? (R = (typeof n as any) == ("function" as any) ? n : (J as any)(+n), i) : R;
  }, (i as any).padAngle = function (this: any, n: any): any {
    return (arguments as any).length ? (K = (typeof n as any) == ("function" as any) ? n : (J as any)(+n), i) : K;
  }, (i as any).context = function (this: any, n: any): any {
    return (arguments as any).length ? (u = n ?? null, i) : u;
  }, i;
}
export { hn as d };
//# debugId=df6d331e-6091-4a0f-887a-46133862ad65
