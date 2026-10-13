declare var URL: any;
declare var global: any;
declare var key: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "a19b9941-c86c-419c-9221-199764e32f12", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-a19b9941-c86c-419c-9221-199764e32f12");
  } catch (e: any) {}
} as any)();
import { c as z, j as n, r as D, u as fe, p as Be, T as _e, i as kt } from "./index.eager-vendor-Qbf9YA6n.js";
import { i as Xs, c as ln, u as on, aK as rn, aL as dn, bm as cn, aM as et } from "./index.eager-platform-Dcfeegfw.js";
import { k as un, r as bt, a as Me, J as fn, c as mn } from "./index.eager-common-CdCvBQNJ.js";
import { jn as qe, r as oe, jo as qs, jp as st, jq as $s, jr as tt, js as nt, jt as pn, af as xe, R as hn, Q as gn, eW as xt, ju as _t, jv as yn, jw as St, jx as kn, jy as bn, jz as xn, jA as _n, jB as Sn, is as jn, aU as Nn, jC as En, jD as jt, a$ as at, a_ as Se, jE as vn, b9 as wn, bT as Tn, aI as On, aP as An, gz as Cn, jF as Nt, b7 as Et, fh as Rn, bz as In, fk as Pn, jG as Mn, jH as Bn, jI as zn, jJ as Dn, jK as Ln, jL as qn, jM as $n, jN as Fn, jO as ms, dd as Gn, jP as Hn, jQ as Un } from "./index.eager-app-Cj5f8Gby.js";
import { z as De, x as ps, I as vt, cr as Wn, cJ as Vn, p as lt, cK as Kn, bw as Xn, cL as Jn, cM as Yn } from "./index-ZYxf-aBb.js";
const Zn: any = ["hero", "invoice-chaser", "weekly-standup", "sales-forecast"],
  Qn: any = Zn,
  Js: number = 80,
  Hs: any = {
    color: "blue",
    shape: "blob"
  },
  ea: any = {
    step: "landing",
    meetBeat: -1,
    demoBeat: -1,
    demoCursor: {
      x: 0,
      y: 30
    },
    jobsBeat: -1,
    handOffBeat: -1,
    avatarTarget: null,
    isAvatarLanded: !1,
    createColor: (Hs as any).color,
    createShape: (Hs as any).shape
  },
  ot: any = {
    x: 0,
    y: -75
  },
  wt: number = 2,
  Tt: number = 3;
function sa(this: any, t: any): any {
  return ((t as any) % (2 as any) as any) === (0 as any) ? wt : Tt;
}
function ta(this: any, t: any): any {
  return (t as any) === (wt as any) ? "thinking" : (t as any) === (Tt as any) || (t as any) === (0 as any) ? "idle" : "listening";
}
const Ys: any = {
    "invoice-chaser": {
      x: 0,
      y: -112
    },
    "weekly-standup": {
      x: -132,
      y: 27
    },
    "sales-forecast": {
      x: 138,
      y: 7
    }
  },
  na: any = {
    "invoice-chaser": {
      x: -172,
      y: -328,
      scale: .4
    },
    "sales-forecast": {
      x: 246,
      y: -275,
      scale: .5
    },
    "weekly-standup": {
      x: -278,
      y: -255,
      scale: .45
    }
  },
  aa: any = {
    "invoice-chaser": {
      amplitudePx: 3,
      periodMs: 5200,
      delayMs: -1200
    },
    "weekly-standup": {
      amplitudePx: 5,
      periodMs: 7300,
      delayMs: -4700
    },
    "sales-forecast": {
      amplitudePx: 4,
      periodMs: 6400,
      delayMs: -2600
    }
  },
  Fe: any = {
    x: 0,
    y: -21
  },
  ys: any = {
    x: -59.8,
    y: -58.6
  },
  Fs: number = .55,
  la: any = {
    "invoice-chaser": "red",
    "weekly-standup": "cyan",
    "sales-forecast": (Hs as any).color
  },
  oa: any = {
    "invoice-chaser": {
      id: "VtyLJf"
    },
    "weekly-standup": {
      id: "tNbEzE"
    },
    "sales-forecast": {
      id: "B2oHPJ"
    }
  },
  Us: any = {
    x: 0,
    y: -20
  },
  ze: any = {
    ...Us,
    scale: .3,
    opacity: 0
  },
  Ot: string = "invoice-chaser",
  ia: string = "black";
function ra(this: any, t: any): any {
  return ((t as any).sizePx as any) / (Js as any);
}
function da(this: any, t: any): any {
  return ((t as any).avatarTarget as any) == (null as any) || (t as any).isAvatarLanded ? null : ((t as any).step as any) === ("create" as any) ? "sales-forecast" : null;
}
function ca(this: any): any {
  return {
    ...(Ys as any)[Ot],
    sizePx: Js
  };
}
function ua(this: any, t: any): any {
  const e: any = {
    id: "hero",
    color: "black",
    recolor: null,
    shape: "blob",
    isGazing: !1,
    bob: null
  };
  switch ((t as any).step) {
    case "landing":
      return {
        ...e,
        ...ze,
        y: -75,
        state: "idle",
        transition: "none"
      };
    case "meet":
      return ((t as any).meetBeat as any) < (0 as any) ? {
        ...e,
        ...ze,
        y: (ot as any).y,
        state: "waking",
        transition: "none"
      } : {
        ...e,
        ...ot,
        scale: .8,
        opacity: 1,
        state: (ta as any)((t as any).meetBeat),
        transition: "bounce",
        isGazing: !0
      };
    case "computer-demo":
      return {
        ...e,
        x: (((Fe as any).x as any) + (((t as any).demoCursor as any).x as any) as any) - (((ys as any).x as any) * (Fs as any) as any),
        y: (((Fe as any).y as any) + (((t as any).demoCursor as any).y as any) as any) - (((ys as any).y as any) * (Fs as any) as any),
        scale: Fs,
        opacity: 1,
        state: ((t as any).demoBeat as any) < (0 as any) ? "thinking" : "working",
        transition: "slow",
        surfaceTheme: "light"
      };
    case "jobs":
      return ((t as any).jobsBeat as any) < (1 as any) ? {
        ...e,
        ...Us,
        scale: 1,
        opacity: 1,
        state: ((t as any).jobsBeat as any) === (0 as any) ? "excited" : "happy",
        transition: "standard",
        isGazing: !0
      } : {
        ...e,
        ...Us,
        scale: 1.2,
        opacity: 0,
        state: "celebrate",
        transition: "exit"
      };
    default:
      return {
        ...e,
        ...ze,
        state: "idle",
        transition: "none"
      };
  }
}
function fa(this: any, t: any, e: any): any {
  const s: any = {
      id: e,
      color: (la as any)[e],
      recolor: null,
      shape: "blob",
      isGazing: !1,
      bob: null
    },
    l: any = (Ys as any)[e],
    a: any = (na as any)[e];
  switch ((t as any).step) {
    case "jobs":
      return ((t as any).jobsBeat as any) < (1 as any) ? {
        ...s,
        ...ze,
        state: "sleeping",
        transition: "none"
      } : {
        ...s,
        ...l,
        scale: 1,
        opacity: 1,
        state: ((t as any).jobsBeat as any) === (1 as any) ? "excited" : "happy",
        transition: "bounce",
        isGazing: !0
      };
    case "role":
    case "tools":
      return {
        ...s,
        x: (a as any).x,
        y: (a as any).y,
        scale: (a as any).scale,
        opacity: 1,
        state: "idle",
        transition: "standard",
        bob: (aa as any)[e]
      };
    case "create":
      {
        if ((e as any) !== ("sales-forecast" as any)) return {
          ...s,
          x: (a as any).x,
          y: ((a as any).y as any) - (40 as any),
          scale: ((a as any).scale as any) * (.8 as any),
          opacity: 0,
          state: "sleeping",
          transition: "exit"
        };
        const i: any = (t as any).avatarTarget;
        if ((i as any) == (null as any)) return {
          ...s,
          color: (t as any).createColor,
          shape: (t as any).createShape,
          x: (a as any).x,
          y: (a as any).y,
          scale: (a as any).scale,
          opacity: 1,
          state: "happy",
          transition: "standard"
        };
        const o: any = {
          ...s,
          color: (t as any).createColor,
          shape: (t as any).createShape,
          x: (i as any).x,
          y: (i as any).y,
          scale: (ra as any)(i),
          state: "happy"
        };
        return (t as any).isAvatarLanded ? {
          ...o,
          opacity: 0,
          transition: "none"
        } : {
          ...o,
          opacity: 1,
          transition: "standard"
        };
      }
    case qe:
      return ((t as any).handOffBeat as any) < (0 as any) ? {
        ...s,
        ...ze,
        state: "sleeping",
        transition: "none"
      } : (e as any) !== (Ot as any) ? {
        ...s,
        ...l,
        scale: .8,
        opacity: 0,
        state: "sleeping",
        transition: "exit"
      } : {
        ...s,
        ...l,
        scale: 1,
        opacity: 1,
        recolor: ia,
        state: "happy",
        transition: "standard",
        isGazing: !0
      };
    default:
      return {
        ...s,
        ...ze,
        state: "sleeping",
        transition: "none"
      };
  }
}
function ma(this: any, t: any): any {
  return ((Qn as any).map as any)((e: any): any => (e as any) === ("hero" as any) ? (ua as any)(t) : (fa as any)(t, e));
}
const pa: any = {
    standard: {
      duration: ($s as any)(nt),
      easing: (qs as any)(nt)
    },
    slow: {
      duration: ($s as any)(tt),
      easing: (qs as any)(tt)
    },
    bounce: {
      duration: ($s as any)(st),
      easing: (qs as any)(st)
    },
    exit: {
      duration: 300,
      easing: pn
    },
    none: {
      duration: 0,
      easing: "linear"
    }
  },
  ha: any = {
    light: "#fcfcfc",
    dark: "#070707"
  },
  ks: number = 80;
function ga(this: any, t: any): any {
  return `sand-onboarding-cast-${t}`;
}
const ya: number = 2.23,
  ka: number = 1.44,
  ba: any = (((ks as any) / (2 as any) as any) + ((ys as any).x as any) as any) - (ya as any),
  xa: any = (((ks as any) / (2 as any) as any) + ((ys as any).y as any) as any) - (ka as any),
  _a: any = {
    recolor: {
      kVAEAm: "sand-10l6tqk",
      kpwlN0: "sand-10a8y8t",
      kKVMdj: "sand-r1vbnl",
      k44tkh: "sand-1ykxiw6 sand-1u6grsq",
      kyAemX: "sand-vjiv3b",
      kWV6AL: "sand-1u6ievf",
      $$css: !0
    }
  };
function At(this: any, t: any): any {
  (At as any).d = 1097;
  const e: any = ((z as any).c as any)(6),
    {
      isShown: s
    }: any = t;
  let l: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (l = {
    className: "sand-10l6tqk sand-1849jeq sand-1fgtraw sand-19991ni sand-1fmmrnm"
  }, (e as any)[0] = l) : l = (e as any)[0];
  const a: any = l,
    i: any = s ? 1 : 0;
  let o: any;
  ((e as any)[1] as any) !== (i as any) ? (o = {
    ...(a as any).style,
    left: ba,
    top: xa,
    opacity: i
  }, (e as any)[1] = i, (e as any)[2] = o) : o = (e as any)[2];
  let c: any;
  ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (c = ((n as any).jsx as any)("path", {
    d: "M37.2289 13.359C38.6252 12.778 38.4988 10.7591 37.0362 10.3745C29.8708 8.4902 16.0804 4.85934 9.96901 3.22056C8.74279 2.89175 7.60764 4.07288 7.97148 5.28916C9.82954 11.5004 13.5726 24.547 15.4795 31.2137C15.8835 32.626 17.8251 32.7612 18.4353 31.4251L23.9544 19.3395C24.12 18.9769 24.4166 18.6903 24.7847 18.5371L37.2289 13.359Z",
    fill: "#000000",
    stroke: "#ffffff",
    strokeWidth: "2.2"
  }), (e as any)[3] = c) : c = (e as any)[3];
  let u: any;
  return ((e as any)[4] as any) !== (o as any) ? (u = ((n as any).jsx as any)("svg", {
    "aria-hidden": !0,
    className: (a as any).className,
    fill: "none",
    style: o,
    viewBox: "6 2 34 32",
    children: c
  }), (e as any)[4] = o, (e as any)[5] = u) : u = (e as any)[5], u;
}
function Ct(this: any, t: any): any {
  (Ct as any).d = 1094;
  const e: any = ((z as any).c as any)(8),
    {
      bob: s,
      children: l
    }: any = t;
  let a: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = {
    className: "sand-1lliihq sand-h8yej3 sand-5yr21d sand-19hwp5s sand-1aquc0h sand-a4qsjk sand-pz12be sand-4hg4is"
  }, (e as any)[0] = a) : a = (e as any)[0];
  const i: any = a,
    o: any = `${(s as any).amplitudePx}px`,
    c: any = `${(s as any).periodMs}ms`,
    u: any = `${(s as any).delayMs}ms`;
  let f: any;
  ((e as any)[1] as any) !== (o as any) || ((e as any)[2] as any) !== (c as any) || ((e as any)[3] as any) !== (u as any) ? (f = {
    ...(i as any).style,
    "--cast-bob-amp": o,
    animationDuration: c,
    animationDelay: u
  }, (e as any)[1] = o, (e as any)[2] = c, (e as any)[3] = u, (e as any)[4] = f) : f = (e as any)[4];
  const m: any = f;
  let r: any;
  return ((e as any)[5] as any) !== (l as any) || ((e as any)[6] as any) !== (m as any) ? (r = ((n as any).jsx as any)("span", {
    className: (i as any).className,
    style: m,
    children: l
  }), (e as any)[5] = l, (e as any)[6] = m, (e as any)[7] = r) : r = (e as any)[7], r;
}
function Rt(this: any, t: any): any {
  (Rt as any).d = 1095;
  const e: any = ((z as any).c as any)(59),
    {
      placement: s,
      isPointerShown: l,
      onLanded: a
    }: any = t,
    i: any = ((D as any).useRef as any)(null),
    [o, c]: any = ((D as any).useState as any)(((s as any).opacity as any) === (0 as any));
  ((s as any).opacity as any) > (0 as any) && o && (c as any)(!1);
  const u: any = ((s as any).opacity as any) === (0 as any) && (((s as any).transition as any) === ("none" as any) || o),
    f: any = (pa as any)[(s as any).transition],
    m: any = (xe as any)() ? 0 : (f as any).duration;
  let r: any, d: any, p: any, h: any;
  if (((e as any)[0] as any) !== (u as any) || ((e as any)[1] as any) !== (l as any) || ((e as any)[2] as any) !== (a as any) || ((e as any)[3] as any) !== ((s as any).color as any) || ((e as any)[4] as any) !== ((s as any).id as any) || ((e as any)[5] as any) !== ((s as any).isGazing as any) || ((e as any)[6] as any) !== ((s as any).opacity as any) || ((e as any)[7] as any) !== ((s as any).recolor as any) || ((e as any)[8] as any) !== ((s as any).shape as any) || ((e as any)[9] as any) !== ((s as any).state as any) || ((e as any)[10] as any) !== ((s as any).surfaceTheme as any)) {
    p = ({
      0: {
        className: "sand-10l6tqk sand-1nrll8i sand-wa60dl sand-1dmp6jm sand-wzfr38 sand-1b1opl3 sand-1cm6mvd sand-wcsmn1"
      },
      1: {
        className: "sand-10l6tqk sand-1nrll8i sand-wa60dl sand-1dmp6jm sand-wzfr38 sand-1b1opl3 sand-1cm6mvd sand-wcsmn1 sand-67bb7w sand-t0e3qv"
      }
    } as any)[(!!(((s as any).opacity as any) > (0 as any) && (s as any).isGazing) as any) << (0 as any)];
    let k: any;
    ((e as any)[15] as any) !== (a as any) || ((e as any)[16] as any) !== ((s as any).id as any) || ((e as any)[17] as any) !== ((s as any).opacity as any) ? (k = (B: any): any => {
      ((B as any).propertyName as any) === ("transform" as any) && a?.((s as any).id), ((B as any).propertyName as any) === ("opacity" as any) && ((B as any).target as any) === ((B as any).currentTarget as any) && ((s as any).opacity as any) === (0 as any) && (c as any)(!0);
    }, (e as any)[15] = a, (e as any)[16] = (s as any).id, (e as any)[17] = (s as any).opacity, (e as any)[18] = k) : k = (e as any)[18], r = k;
    let N: any;
    ((e as any)[19] as any) !== ((s as any).id as any) ? (N = (ga as any)((s as any).id), (e as any)[19] = (s as any).id, (e as any)[20] = N) : N = (e as any)[20];
    const E: any = N;
    let O: any;
    ((e as any)[21] as any) !== ((s as any).color as any) || ((e as any)[22] as any) !== ((s as any).surfaceTheme as any) ? (O = ((s as any).surfaceTheme as any) == (null as any) ? {} : {
      ink: (un as any)((s as any).color, (s as any).surfaceTheme),
      eyeColor: (ha as any)[(s as any).surfaceTheme]
    }, (e as any)[21] = (s as any).color, (e as any)[22] = (s as any).surfaceTheme, (e as any)[23] = O) : O = (e as any)[23];
    const C: any = (s as any).isGazing && ((s as any).opacity as any) > (0 as any);
    let v: any;
    ((e as any)[24] as any) !== (u as any) ? (v = (xe as any)() || u, (e as any)[24] = u, (e as any)[25] = v) : v = (e as any)[25];
    let w: any;
    ((e as any)[26] as any) !== (l as any) ? (w = ((n as any).jsx as any)(At, {
      isShown: l
    }), (e as any)[26] = l, (e as any)[27] = w) : w = (e as any)[27];
    let R: any;
    ((e as any)[28] as any) !== ((s as any).recolor as any) || ((e as any)[29] as any) !== ((s as any).state as any) || ((e as any)[30] as any) !== (E as any) ? (R = ((s as any).recolor as any) == (null as any) ? null : ((n as any).jsx as any)(hn, {
      color: (s as any).recolor,
      sizePx: ks,
      sourceId: E,
      state: (s as any).state,
      style: (_a as any).recolor
    }), (e as any)[28] = (s as any).recolor, (e as any)[29] = (s as any).state, (e as any)[30] = E, (e as any)[31] = R) : R = (e as any)[31];
    let I: any;
    ((e as any)[32] as any) !== ((s as any).color as any) || ((e as any)[33] as any) !== ((s as any).shape as any) || ((e as any)[34] as any) !== ((s as any).state as any) || ((e as any)[35] as any) !== (E as any) || ((e as any)[36] as any) !== (O as any) || ((e as any)[37] as any) !== (C as any) || ((e as any)[38] as any) !== (v as any) || ((e as any)[39] as any) !== (w as any) || ((e as any)[40] as any) !== (R as any) ? (I = ((n as any).jsxs as any)(gn, {
      color: (s as any).color,
      ...O,
      isFollowingPointer: C,
      isPaused: v,
      ref: i,
      shape: (s as any).shape,
      sizePx: ks,
      sourceId: E,
      state: (s as any).state,
      children: [w, R]
    }), (e as any)[32] = (s as any).color, (e as any)[33] = (s as any).shape, (e as any)[34] = (s as any).state, (e as any)[35] = E, (e as any)[36] = O, (e as any)[37] = C, (e as any)[38] = v, (e as any)[39] = w, (e as any)[40] = R, (e as any)[41] = I) : I = (e as any)[41], d = I, h = (oe as any)(`sand-onboarding__cast-${(s as any).id}`, (p as any).className), (e as any)[0] = u, (e as any)[1] = l, (e as any)[2] = a, (e as any)[3] = (s as any).color, (e as any)[4] = (s as any).id, (e as any)[5] = (s as any).isGazing, (e as any)[6] = (s as any).opacity, (e as any)[7] = (s as any).recolor, (e as any)[8] = (s as any).shape, (e as any)[9] = (s as any).state, (e as any)[10] = (s as any).surfaceTheme, (e as any)[11] = r, (e as any)[12] = d, (e as any)[13] = p, (e as any)[14] = h;
  } else r = (e as any)[11], d = (e as any)[12], p = (e as any)[13], h = (e as any)[14];
  let g: any;
  ((e as any)[42] as any) !== ((s as any).isGazing as any) ? (g = (s as any).isGazing ? (): any => (i as any).current?.poke("spin") : void 0, (e as any)[42] = (s as any).isGazing, (e as any)[43] = g) : g = (e as any)[43];
  const y: any = `translate(${(s as any).x}px, ${(s as any).y}px) scale(${(s as any).scale})`,
    S: any = `${m}ms`;
  let _: any;
  ((e as any)[44] as any) !== ((p as any).style as any) || ((e as any)[45] as any) !== ((s as any).opacity as any) || ((e as any)[46] as any) !== (y as any) || ((e as any)[47] as any) !== (S as any) || ((e as any)[48] as any) !== ((f as any).easing as any) ? (_ = {
    ...(p as any).style,
    transform: y,
    opacity: (s as any).opacity,
    transitionDuration: S,
    transitionTimingFunction: (f as any).easing
  }, (e as any)[44] = (p as any).style, (e as any)[45] = (s as any).opacity, (e as any)[46] = y, (e as any)[47] = S, (e as any)[48] = (f as any).easing, (e as any)[49] = _) : _ = (e as any)[49];
  let x: any;
  ((e as any)[50] as any) !== (d as any) || ((e as any)[51] as any) !== ((s as any).bob as any) ? (x = ((s as any).bob as any) == (null as any) ? d : ((n as any).jsx as any)(Ct, {
    bob: (s as any).bob,
    children: d
  }), (e as any)[50] = d, (e as any)[51] = (s as any).bob, (e as any)[52] = x) : x = (e as any)[52];
  let j: any;
  return ((e as any)[53] as any) !== (r as any) || ((e as any)[54] as any) !== (h as any) || ((e as any)[55] as any) !== (g as any) || ((e as any)[56] as any) !== (_ as any) || ((e as any)[57] as any) !== (x as any) ? (j = ((n as any).jsx as any)("div", {
    className: h,
    onClick: g,
    onTransitionEnd: r,
    style: _,
    children: x
  }), (e as any)[53] = r, (e as any)[54] = h, (e as any)[55] = g, (e as any)[56] = _, (e as any)[57] = x, (e as any)[58] = j) : j = (e as any)[58], j;
}
function It(this: any, t: any): any {
  (It as any).d = 1096;
  const e: any = ((z as any).c as any)(17),
    {
      scene: s,
      onAvatarLanded: l
    }: any = t;
  let a: any, i: any, o: any, c: any;
  if (((e as any)[0] as any) !== (l as any) || ((e as any)[1] as any) !== (s as any)) {
    const f: any = {
        className: "sand-10l6tqk sand-10a8y8t sand-b3r6kr sand-47corl"
      },
      m: any = (ma as any)(s),
      r: any = ((s as any).step as any) === ("computer-demo" as any);
    let d: any;
    ((e as any)[6] as any) !== (s as any) ? (d = (da as any)(s), (e as any)[6] = s, (e as any)[7] = d) : d = (e as any)[7];
    const p: any = d;
    a = !0, i = (oe as any)("sand-onboarding__cast", (f as any).className), o = (f as any).style;
    let h: any;
    ((e as any)[8] as any) !== (r as any) || ((e as any)[9] as any) !== (p as any) || ((e as any)[10] as any) !== (l as any) ? (h = (g: any): any => ((n as any).jsx as any)(Rt, {
      isPointerShown: r && ((g as any).id as any) === ("hero" as any),
      placement: g,
      ...(((g as any).id as any) === (p as any) ? {
        onLanded: (): any => {
          l?.();
        }
      } : {})
    }, (g as any).id), (e as any)[8] = r, (e as any)[9] = p, (e as any)[10] = l, (e as any)[11] = h) : h = (e as any)[11], c = ((m as any).map as any)(h), (e as any)[0] = l, (e as any)[1] = s, (e as any)[2] = a, (e as any)[3] = i, (e as any)[4] = o, (e as any)[5] = c;
  } else a = (e as any)[2], i = (e as any)[3], o = (e as any)[4], c = (e as any)[5];
  let u: any;
  return ((e as any)[12] as any) !== (a as any) || ((e as any)[13] as any) !== (i as any) || ((e as any)[14] as any) !== (o as any) || ((e as any)[15] as any) !== (c as any) ? (u = ((n as any).jsx as any)("div", {
    "aria-hidden": a,
    className: i,
    style: o,
    children: c
  }), (e as any)[12] = a, (e as any)[13] = i, (e as any)[14] = o, (e as any)[15] = c, (e as any)[16] = u) : u = (e as any)[16], u;
}
function Sa(this: any): any {
  const t: any = ((z as any).c as any)(13),
    e: any = (xt as any)(),
    s: any = (_t as any)(),
    l: any = (((e as any).status as any).kind as any) === ("logged-in" as any) && (((e as any).status as any).isAnysphereUser as any) === (!0 as any);
  let a: any;
  return ((t as any)[0] as any) !== ((s as any).cancelLoginFlight as any) || ((t as any)[1] as any) !== ((s as any).clearError as any) || ((t as any)[2] as any) !== ((s as any).login as any) || ((t as any)[3] as any) !== ((s as any).logout as any) || ((t as any)[4] as any) !== ((s as any).updateName as any) || ((t as any)[5] as any) !== ((e as any).avatarDataUrl as any) || ((t as any)[6] as any) !== ((e as any).error as any) || ((t as any)[7] as any) !== ((e as any).flight as any) || ((t as any)[8] as any) !== ((e as any).isLoaded as any) || ((t as any)[9] as any) !== ((e as any).isPending as any) || ((t as any)[10] as any) !== ((e as any).status as any) || ((t as any)[11] as any) !== (l as any) ? (a = {
    error: (e as any).error,
    isLoaded: (e as any).isLoaded,
    isPending: (e as any).isPending,
    isAnysphereUser: l,
    flight: (e as any).flight,
    status: (e as any).status,
    avatarDataUrl: (e as any).avatarDataUrl,
    login: (s as any).login,
    cancelLoginFlight: (s as any).cancelLoginFlight,
    logout: (s as any).logout,
    updateName: (s as any).updateName,
    clearError: (s as any).clearError
  }, (t as any)[0] = (s as any).cancelLoginFlight, (t as any)[1] = (s as any).clearError, (t as any)[2] = (s as any).login, (t as any)[3] = (s as any).logout, (t as any)[4] = (s as any).updateName, (t as any)[5] = (e as any).avatarDataUrl, (t as any)[6] = (e as any).error, (t as any)[7] = (e as any).flight, (t as any)[8] = (e as any).isLoaded, (t as any)[9] = (e as any).isPending, (t as any)[10] = (e as any).status, (t as any)[11] = l, (t as any)[12] = a) : a = (t as any)[12], a;
}
function ja(this: any, t: any, e: any): any {
  let s: any = !1;
  return {
    subscribe(l: any): any {
      if (!e) return (): any => {};
      const a: any = ((t as any).wrap as any)((): any => {
        s = !0, (l as any)();
      });
      return (a as any)(), (): any => {
        ((a as any).dispose as any)(), s = !1;
      };
    },
    read: (): any => s
  };
}
function it(this: any, t: any, e: any): any {
  return (t as any) === (qe as any) ? ((yn as any)(e) as any).length : (St as any)(t, e);
}
function Na(this: any, {
  from: t,
  to: e
}: any, s: any = {}): any {
  if ((e as any) === ("landing" as any)) return null;
  const l: any = (it as any)(t, s),
    a: any = (it as any)(e, s);
  return {
    step: e,
    stepIndex: a,
    direction: (a as any) >= (l as any) ? "forward" : "back"
  };
}
function Ea(this: any, t: any): any {
  (t as any).isRunning = !1;
}
class rt extends (Error as any) {
  [key: string]: any;
}
async function va(this: any, t: any, e: any): Promise<any> {
  if ((t as any).isRunning) return {
    kind: "already-running"
  };
  const s: any = ((e as any).currentAccountSlot as any)();
  if ((s as any) == (null as any)) return {
    kind: "signed-away"
  };
  ((t as any).accountSlot as any) !== (s as any) && ((t as any).agentId = null, (t as any).accountSlot = s), (t as any).isRunning = !0;
  try {
    if (((t as any).agentId as any) == (null as any) && (await ((e as any).isAccountOnboarded as any)())) return await ((e as any).markSeen as any)(), {
      kind: "already-onboarded"
    };
    if ((((e as any).currentAccountSlot as any)() as any) !== (s as any)) throw new (rt as any)();
    return (t as any).agentId ??= ((e as any).reserveBot as any)(s), {
      kind: "staged",
      agentId: (t as any).agentId,
      accountSlot: s
    };
  } catch (l: any) {
    return (t as any).isRunning = !1, l instanceof rt ? {
      kind: "signed-away"
    } : {
      kind: "failed",
      error: l
    };
  }
}
const wa: any = {
    engineering: {
      icon: "keyboard",
      tone: "accent"
    },
    design: {
      icon: "brush",
      tone: "warning"
    },
    marketing: {
      icon: "megaphone",
      tone: "danger"
    },
    "customer-support": {
      icon: "headset",
      tone: "supplementary3"
    },
    product: {
      icon: "hammer",
      tone: "supplementary5"
    },
    "ops-finance": {
      icon: "banknotes-stack",
      tone: "success"
    },
    "recruiting-people": {
      icon: "people-3",
      tone: "supplementary1"
    },
    sales: {
      icon: "chart-line",
      tone: "supplementary2"
    },
    productivity: {
      icon: "brain",
      tone: "neutral"
    }
  },
  Pt: any = ((kn as any).map as any)((t: any): any => ({
    ...(bn as any)[t],
    ...(wa as any)[t]
  }));
function Ta(this: any, t: any): any {
  return ((Pt as any).find as any)((e: any): any => ((e as any).id as any) === (t as any)) ?? null;
}
function Mt(this: any, t: any): any {
  return (xn as any)({
    role: t?.englishLabel ?? null,
    tools: []
  });
}
const Oa: number = 2;
function Aa(this: any, t: any, e: any): any {
  const s: any = (Mt as any)(e);
  return (((_n as any)((e as any).id, Oa) as any).map as any)((l: any): any => ({
    name: (t as any)((l as any).name),
    description: (((([(t as any)((l as any).description), s] as any).filter as any)((a: any): any => (a as any) !== ("" as any)) as any).join as any)(" "),
    origin: Sn,
    isKickstartRequested: !0,
    isAutomatic: !0,
    templateId: (l as any).id
  }));
}
async function Ca(this: any, t: any, e: any): Promise<any> {
  for (const s of t) {
    if (!((e as any).isCurrentAccount as any)()) return;
    const l: any = await ((e as any).createAgent as any)(s);
    if (!((e as any).isCurrentAccount as any)()) return;
    await ((e as any).kickstart as any)(((l as any).agent as any).id);
  }
}
const $e: any = {
  chip: {
    k1xSpc: "sand-3nfvp2",
    kGNEyG: "sand-6s0dn4",
    kOIVth: "sand-17d4w8g",
    kZKoxP: "sand-1fgtraw",
    k7Eaqz: "sand-euugli",
    kB7OPa: "sand-9f619",
    kZCmMZ: "sand-aso8d8",
    kwRFfy: "sand-2vl965",
    kaIpWk: "sand-149ho13",
    kGVxlE: "sand-1ahgo13",
    kMwMTN: "sand-1o0liin",
    $$css: !0
  },
  chipArriving: {
    kGVxlE: "sand-1gnnqk1",
    kWkggS: "sand-1tiofj7",
    kMwMTN: "sand-tyxrsu",
    $$css: !0
  },
  header: {
    kGNEyG: "sand-6s0dn4",
    kOIVth: "sand-167g77z",
    kLKAdn: "sand-exx8yu",
    kwRFfy: "sand-yri2b",
    kGO01o: "sand-18d9i69",
    kZCmMZ: "sand-1c1uobl",
    $$css: !0
  },
  action: {
    kzqmXN: "sand-h8yej3",
    $$css: !0
  }
};
function Bt(this: any, t: any): any {
  (Bt as any).d = 1108;
  const e: any = ((z as any).c as any)(34),
    {
      departed: s,
      onSetUp: l
    }: any = t,
    {
      _: a
    }: any = (fe as any)(),
    i: any = (xt as any)(),
    {
      saved: o,
      refresh: c
    }: any = (jn as any)(),
    {
      switchAccount: u
    }: any = (_t as any)(),
    f: any = ((D as any).useRef as any)(null);
  (Nn as any)(c);
  let m: any;
  ((e as any)[0] as any) !== ((s as any).email as any) || ((e as any)[1] as any) !== (o as any) ? (m = (En as any)(o, (s as any).email), (e as any)[0] = (s as any).email, (e as any)[1] = o, (e as any)[2] = m) : m = (e as any)[2];
  const r: any = m,
    d: any = (s as any).email ?? r?.email ?? null,
    p: any = (((i as any).status as any).kind as any) === ("logged-in" as any) ? ((i as any).status as any).email ?? null : null;
  let h: any, g: any;
  ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (h = {
    className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-ou54vl sand-9f619 sand-7sb2j6 sand-64bnmy sand-wxc41k sand-13jy36j sand-2b8uid"
  }, g = {
    className: "sand-78zum5 sand-6s0dn4 sand-883omv sand-193iq5w"
  }, (e as any)[3] = h, (e as any)[4] = g) : (h = (e as any)[3], g = (e as any)[4]);
  const y: any = r?.avatar ?? null,
    S: any = r?.name ?? null;
  let _: any;
  ((e as any)[5] as any) !== (d as any) || ((e as any)[6] as any) !== (y as any) || ((e as any)[7] as any) !== (S as any) ? (_ = ((n as any).jsx as any)(Ws, {
    avatar: y,
    email: d,
    name: S
  }), (e as any)[5] = d, (e as any)[6] = y, (e as any)[7] = S, (e as any)[8] = _) : _ = (e as any)[8];
  let x: any;
  ((e as any)[9] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (x = ((n as any).jsx as any)("span", {
    "aria-hidden": !0,
    className: "sand-3nfvp2 sand-2lah0s sand-169k319",
    children: ((n as any).jsx as any)(vt, {
      name: "arrow-right",
      size: "md"
    })
  }), (e as any)[9] = x) : x = (e as any)[9];
  const j: any = (((i as any).status as any).kind as any) === ("logged-in" as any) ? ((i as any).status as any).displayName ?? null : null;
  let k: any;
  ((e as any)[10] as any) !== ((i as any).avatarDataUrl as any) || ((e as any)[11] as any) !== (p as any) || ((e as any)[12] as any) !== (j as any) ? (k = ((n as any).jsx as any)(Ws, {
    arriving: !0,
    avatar: (i as any).avatarDataUrl,
    email: p,
    name: j
  }), (e as any)[10] = (i as any).avatarDataUrl, (e as any)[11] = p, (e as any)[12] = j, (e as any)[13] = k) : k = (e as any)[13];
  let N: any;
  ((e as any)[14] as any) !== (_ as any) || ((e as any)[15] as any) !== (k as any) ? (N = ((n as any).jsxs as any)("div", {
    ...g,
    children: [_, x, k]
  }), (e as any)[14] = _, (e as any)[15] = k, (e as any)[16] = N) : N = (e as any)[16];
  let E: any;
  ((e as any)[17] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (E = ((n as any).jsx as any)((ps as any).Title, {
    size: "3xl",
    weight: "medium",
    children: ((n as any).jsx as any)(_e, {
      id: "9dZAfN"
    })
  }), (e as any)[17] = E) : E = (e as any)[17];
  let O: any, C: any;
  ((e as any)[18] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (O = ((n as any).jsxs as any)((ps as any).Header, {
    style: ($e as any).header,
    children: [E, ((n as any).jsx as any)((ps as any).Description, {
      color: "secondary",
      children: ((n as any).jsx as any)(_e, {
        id: "0TxK8D"
      })
    })]
  }), C = {
    className: "sand-78zum5 sand-dt5ytf sand-167g77z sand-h8yej3 sand-1gslohp"
  }, (e as any)[18] = O, (e as any)[19] = C) : (O = (e as any)[18], C = (e as any)[19]);
  let v: any;
  ((e as any)[20] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (v = ((n as any).jsx as any)(_e, {
    id: "YQL6Hk"
  }), (e as any)[20] = v) : v = (e as any)[20];
  let w: any;
  ((e as any)[21] as any) !== (l as any) ? (w = ((n as any).jsx as any)(De, {
    onClick: l,
    ref: f,
    size: "md",
    style: ($e as any).action,
    variant: "primary",
    children: v
  }), (e as any)[21] = l, (e as any)[22] = w) : w = (e as any)[22];
  let R: any;
  ((e as any)[23] as any) !== (a as any) || ((e as any)[24] as any) !== (d as any) || ((e as any)[25] as any) !== (u as any) || ((e as any)[26] as any) !== (r as any) ? (R = (r as any) != (null as any) && (d as any) != (null as any) ? ((n as any).jsx as any)(De, {
    onClick: (): any => {
      (u as any)((r as any).id);
    },
    size: "md",
    style: ($e as any).action,
    variant: "secondary",
    children: (a as any)({
      id: "VuZfg+",
      values: {
        0: (jt as any)(d)
      }
    })
  }) : null, (e as any)[23] = a, (e as any)[24] = d, (e as any)[25] = u, (e as any)[26] = r, (e as any)[27] = R) : R = (e as any)[27];
  let I: any;
  ((e as any)[28] as any) !== (w as any) || ((e as any)[29] as any) !== (R as any) ? (I = ((n as any).jsxs as any)("div", {
    ...C,
    children: [w, R]
  }), (e as any)[28] = w, (e as any)[29] = R, (e as any)[30] = I) : I = (e as any)[30];
  let B: any;
  return ((e as any)[31] as any) !== (N as any) || ((e as any)[32] as any) !== (I as any) ? (B = ((n as any).jsx as any)((ps as any).Root, {
    closeOnBackdropClick: !1,
    closeOnEscape: !1,
    closeOnOutsidePress: !1,
    initialFocus: f,
    open: !0,
    variant: "simple",
    width: 440,
    children: ((n as any).jsxs as any)("div", {
      ...h,
      children: [N, O, I]
    })
  }), (e as any)[31] = N, (e as any)[32] = I, (e as any)[33] = B) : B = (e as any)[33], B;
}
function Ws(this: any, t: any): any {
  (Ws as any).d = 1107;
  const e: any = ((z as any).c as any)(21),
    {
      arriving: s,
      avatar: l,
      email: a,
      name: i
    }: any = t,
    o: any = (s as any) === (void 0 as any) ? !1 : s,
    {
      _: c
    }: any = (fe as any)();
  let u: any;
  ((e as any)[0] as any) !== (c as any) || ((e as any)[1] as any) !== (a as any) || ((e as any)[2] as any) !== (i as any) ? (u = (a as any) != (null as any) ? (jt as any)(a) : i ?? (c as any)({
    id: "XCrgCo"
  }), (e as any)[0] = c, (e as any)[1] = a, (e as any)[2] = i, (e as any)[3] = u) : u = (e as any)[3];
  const f: any = u;
  let m: any;
  ((e as any)[4] as any) !== (o as any) ? (m = (Be as any)(($e as any).chip, o && ($e as any).chipArriving, (Se as any).body2, o ? (at as any).medium : (at as any).regular), (e as any)[4] = o, (e as any)[5] = m) : m = (e as any)[5];
  const r: any = o || void 0;
  let d: any;
  ((e as any)[6] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = {
    className: "sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-1xp8n7a sand-mix8c7 sand-149ho13 sand-b3r6kr sand-1b8i4yy sand-1o0liin sand-vwhms9 sand-87ps6o"
  }, (e as any)[6] = d) : d = (e as any)[6];
  let p: any;
  ((e as any)[7] as any) !== (l as any) || ((e as any)[8] as any) !== (a as any) || ((e as any)[9] as any) !== (i as any) ? (p = (l as any) != (null as any) ? ((n as any).jsx as any)("img", {
    alt: "",
    src: l,
    className: "sand-h8yej3 sand-5yr21d sand-l1xv1r"
  }) : (vn as any)(i, a), (e as any)[7] = l, (e as any)[8] = a, (e as any)[9] = i, (e as any)[10] = p) : p = (e as any)[10];
  let h: any;
  ((e as any)[11] as any) !== (p as any) ? (h = ((n as any).jsx as any)("span", {
    "aria-hidden": !0,
    ...d,
    children: p
  }), (e as any)[11] = p, (e as any)[12] = h) : h = (e as any)[12];
  let g: any;
  ((e as any)[13] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (g = {
    className: "sand-euugli sand-b3r6kr sand-lyipyv sand-uxw1ft"
  }, (e as any)[13] = g) : g = (e as any)[13];
  let y: any;
  ((e as any)[14] as any) !== (f as any) ? (y = ((n as any).jsx as any)("span", {
    ...g,
    children: f
  }), (e as any)[14] = f, (e as any)[15] = y) : y = (e as any)[15];
  let S: any;
  return ((e as any)[16] as any) !== (m as any) || ((e as any)[17] as any) !== (r as any) || ((e as any)[18] as any) !== (h as any) || ((e as any)[19] as any) !== (y as any) ? (S = ((n as any).jsxs as any)("span", {
    ...m,
    "data-arriving": r,
    children: [h, y]
  }), (e as any)[16] = m, (e as any)[17] = r, (e as any)[18] = h, (e as any)[19] = y, (e as any)[20] = S) : S = (e as any)[20], S;
}
const Ra: any = ("" as any) + ((new (URL as any)("demo-computer-wallpaper-BO7Ye4dV.jpg", (import.meta as any).url) as any).href as any),
  Ia: any = -264,
  Pa: number = 441,
  zt: number = 300,
  Ma: number = 25,
  Ba: any = ((Fe as any).y as any) - ((zt as any) / (2 as any) as any),
  za: any = {
    kind: "bottom",
    bottomFromCenter: (Ba as any) - (Ma as any)
  };
function Dt(this: any, t: any): any {
  (Dt as any).d = 1104;
  const e: any = ((z as any).c as any)(9),
    {
      headingId: s,
      title: l,
      measure: a
    }: any = t;
  let i: any, o: any, c: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (i = {
    className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-ehausa sand-1ghz6dp sand-2b8uid"
  }, c = {
    className: "sand-1ghz6dp sand-neq65o sand-1slxwg sand-72az59 sand-1k6tqyu sand-tyxrsu"
  }, o = (oe as any)("sand-onboarding__heading", (i as any).className), (e as any)[0] = i, (e as any)[1] = o, (e as any)[2] = c) : (i = (e as any)[0], o = (e as any)[1], c = (e as any)[2]);
  let u: any;
  ((e as any)[3] as any) !== (a as any) ? (u = (a as any) == (null as any) ? (c as any).style : {
    ...(c as any).style,
    maxWidth: a
  }, (e as any)[3] = a, (e as any)[4] = u) : u = (e as any)[4];
  let f: any;
  return ((e as any)[5] as any) !== (s as any) || ((e as any)[6] as any) !== (u as any) || ((e as any)[7] as any) !== (l as any) ? (f = ((n as any).jsx as any)("hgroup", {
    className: o,
    style: (i as any).style,
    children: ((n as any).jsx as any)("h1", {
      className: (c as any).className,
      id: s,
      style: u,
      children: l
    })
  }), (e as any)[5] = s, (e as any)[6] = u, (e as any)[7] = l, (e as any)[8] = f) : f = (e as any)[8], f;
}
function Da(this: any, t: any): any {
  return ((t as any).kind as any) === ("bottom" as any) ? {
    bottom: `calc(50% + ${-(t as any).bottomFromCenter}px)`
  } : {
    top: `calc(50% + ${Ia}px)`
  };
}
function He(this: any, t: any): any {
  (He as any).d = 1106;
  const e: any = ((z as any).c as any)(33),
    {
      headingId: s,
      title: l,
      titleMeasure: a,
      titleAnchor: i,
      footer: o,
      children: c,
      className: u
    }: any = t;
  let f: any;
  ((e as any)[0] as any) !== (i as any) ? (f = (i as any) === (void 0 as any) ? {
    kind: "top"
  } : i, (e as any)[0] = i, (e as any)[1] = f) : f = (e as any)[1];
  const m: any = f;
  let r: any, d: any, p: any, h: any;
  if (((e as any)[2] as any) !== (u as any)) {
    d = {
      className: "sand-10l6tqk sand-10a8y8t sand-b3r6kr"
    };
    let C: any;
    ((e as any)[7] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (C = {
      className: "sand-10l6tqk sand-17y0mx6 sand-78zum5 sand-l56j7k"
    }, (e as any)[7] = C) : C = (e as any)[7], h = C;
    let v: any;
    ((e as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (v = {
      className: "sand-10l6tqk sand-17y0mx6 sand-16aihui sand-78zum5 sand-l56j7k"
    }, (e as any)[8] = v) : v = (e as any)[8], r = v, p = (oe as any)(u, (d as any).className), (e as any)[2] = u, (e as any)[3] = r, (e as any)[4] = d, (e as any)[5] = p, (e as any)[6] = h;
  } else r = (e as any)[3], d = (e as any)[4], p = (e as any)[5], h = (e as any)[6];
  const g: any = (d as any).style,
    y: any = (h as any).className,
    S: any = (h as any).style;
  let _: any;
  ((e as any)[9] as any) !== (m as any) ? (_ = (Da as any)(m), (e as any)[9] = m, (e as any)[10] = _) : _ = (e as any)[10];
  let x: any;
  ((e as any)[11] as any) !== (_ as any) || ((e as any)[12] as any) !== ((h as any).style as any) ? (x = {
    ...S,
    ..._
  }, (e as any)[11] = _, (e as any)[12] = (h as any).style, (e as any)[13] = x) : x = (e as any)[13];
  let j: any;
  ((e as any)[14] as any) !== (a as any) ? (j = (a as any) == (null as any) ? {} : {
    measure: a
  }, (e as any)[14] = a, (e as any)[15] = j) : j = (e as any)[15];
  let k: any;
  ((e as any)[16] as any) !== (s as any) || ((e as any)[17] as any) !== (j as any) || ((e as any)[18] as any) !== (l as any) ? (k = ((n as any).jsx as any)(Dt, {
    headingId: s,
    title: l,
    ...j
  }), (e as any)[16] = s, (e as any)[17] = j, (e as any)[18] = l, (e as any)[19] = k) : k = (e as any)[19];
  let N: any;
  ((e as any)[20] as any) !== (k as any) || ((e as any)[21] as any) !== (x as any) || ((e as any)[22] as any) !== ((h as any).className as any) ? (N = ((n as any).jsx as any)("div", {
    className: y,
    style: x,
    children: k
  }), (e as any)[20] = k, (e as any)[21] = x, (e as any)[22] = (h as any).className, (e as any)[23] = N) : N = (e as any)[23];
  let E: any;
  ((e as any)[24] as any) !== (o as any) || ((e as any)[25] as any) !== (r as any) ? (E = (o as any) != (null as any) ? ((n as any).jsx as any)("div", {
    className: (r as any).className,
    style: (r as any).style,
    children: o
  }) : null, (e as any)[24] = o, (e as any)[25] = r, (e as any)[26] = E) : E = (e as any)[26];
  let O: any;
  return ((e as any)[27] as any) !== (c as any) || ((e as any)[28] as any) !== ((d as any).style as any) || ((e as any)[29] as any) !== (N as any) || ((e as any)[30] as any) !== (E as any) || ((e as any)[31] as any) !== (p as any) ? (O = ((n as any).jsxs as any)("div", {
    className: p,
    style: g,
    children: [N, c, E]
  }), (e as any)[27] = c, (e as any)[28] = (d as any).style, (e as any)[29] = N, (e as any)[30] = E, (e as any)[31] = p, (e as any)[32] = O) : O = (e as any)[32], O;
}
function Ue(this: any, t: any): any {
  (Ue as any).d = 1105;
  const e: any = ((z as any).c as any)(18),
    {
      x: s,
      y: l,
      pin: a,
      width: i,
      children: o,
      className: c,
      ariaHidden: u
    }: any = t,
    f: any = (a as any) === (void 0 as any) ? "center" : a;
  let m: any, r: any, d: any, p: any;
  ((e as any)[0] as any) !== (u as any) || ((e as any)[1] as any) !== (c as any) || ((e as any)[2] as any) !== (f as any) ? (m = {
    className: "sand-10l6tqk sand-1nrll8i sand-wa60dl"
  }, p = (f as any) === ("center" as any) ? "translate(-50%, -50%)" : "translate(-50%, 0)", r = u || void 0, d = (oe as any)(c, (m as any).className), (e as any)[0] = u, (e as any)[1] = c, (e as any)[2] = f, (e as any)[3] = m, (e as any)[4] = r, (e as any)[5] = d, (e as any)[6] = p) : (m = (e as any)[3], r = (e as any)[4], d = (e as any)[5], p = (e as any)[6]);
  const h: any = `translate(${s}px, ${l}px) ${p}`;
  let g: any;
  ((e as any)[7] as any) !== (i as any) ? (g = (i as any) == (null as any) ? {} : {
    width: i
  }, (e as any)[7] = i, (e as any)[8] = g) : g = (e as any)[8];
  let y: any;
  ((e as any)[9] as any) !== ((m as any).style as any) || ((e as any)[10] as any) !== (h as any) || ((e as any)[11] as any) !== (g as any) ? (y = {
    ...(m as any).style,
    transform: h,
    ...g
  }, (e as any)[9] = (m as any).style, (e as any)[10] = h, (e as any)[11] = g, (e as any)[12] = y) : y = (e as any)[12];
  let S: any;
  return ((e as any)[13] as any) !== (o as any) || ((e as any)[14] as any) !== (r as any) || ((e as any)[15] as any) !== (d as any) || ((e as any)[16] as any) !== (y as any) ? (S = ((n as any).jsx as any)("div", {
    "aria-hidden": r,
    className: d,
    style: y,
    children: o
  }), (e as any)[13] = o, (e as any)[14] = r, (e as any)[15] = d, (e as any)[16] = y, (e as any)[17] = S) : S = (e as any)[17], S;
}
const dt: any = {
  button: {
    kzqmXN: "sand-bu5dzu",
    kZKoxP: "sand-c9qbxq",
    $$css: !0
  }
};
function We(this: any, t: any): any {
  (We as any).d = 1112;
  const e: any = ((z as any).c as any)(18),
    {
      forwardLabel: s,
      isForwardDisabled: l,
      onForward: a,
      onBack: i
    }: any = t,
    o: any = (l as any) === (void 0 as any) ? !1 : l,
    {
      _: c
    }: any = (fe as any)();
  let u: any, f: any, m: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = {
    className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-1v2ro7d"
  }, u = {
    className: "sand-bu5dzu sand-c9qbxq"
  }, m = (oe as any)("sand-onboarding__footer", (f as any).className), (e as any)[0] = u, (e as any)[1] = f, (e as any)[2] = m) : (u = (e as any)[0], f = (e as any)[1], m = (e as any)[2]);
  let r: any;
  ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (r = [(Se as any).body1, (dt as any).button], (e as any)[3] = r) : r = (e as any)[3];
  let d: any;
  ((e as any)[4] as any) !== (c as any) || ((e as any)[5] as any) !== (s as any) ? (d = s ?? (c as any)({
    id: "hXzOVo"
  }), (e as any)[4] = c, (e as any)[5] = s, (e as any)[6] = d) : d = (e as any)[6];
  let p: any;
  ((e as any)[7] as any) !== (o as any) || ((e as any)[8] as any) !== (a as any) || ((e as any)[9] as any) !== (d as any) ? (p = ((n as any).jsx as any)(De, {
    disabled: o,
    onClick: a,
    style: r,
    variant: "primary",
    children: d
  }), (e as any)[7] = o, (e as any)[8] = a, (e as any)[9] = d, (e as any)[10] = p) : p = (e as any)[10];
  let h: any;
  ((e as any)[11] as any) !== (i as any) ? (h = (i as any) != (null as any) ? ((n as any).jsx as any)(De, {
    onClick: i,
    style: [(Se as any).body1, (dt as any).button],
    variant: "secondary",
    children: ((n as any).jsx as any)(_e, {
      id: "iH8pgl"
    })
  }) : null, (e as any)[11] = i, (e as any)[12] = h) : h = (e as any)[12];
  let g: any;
  ((e as any)[13] as any) !== (h as any) ? (g = ((n as any).jsx as any)("span", {
    className: (u as any).className,
    style: (u as any).style,
    children: h
  }), (e as any)[13] = h, (e as any)[14] = g) : g = (e as any)[14];
  let y: any;
  return ((e as any)[15] as any) !== (p as any) || ((e as any)[16] as any) !== (g as any) ? (y = ((n as any).jsxs as any)("div", {
    className: m,
    style: (f as any).style,
    children: [p, g]
  }), (e as any)[15] = p, (e as any)[16] = g, (e as any)[17] = y) : y = (e as any)[17], y;
}
const La: number = 380,
  ct: any = {
    x: -78.3,
    y: -62.3
  },
  ut: any = {
    x: 62.8,
    y: -62.3
  },
  ft: any = {
    x: -178.4,
    y: -105.5
  },
  mt: any = {
    x: 77.4,
    y: 71.8
  },
  Ge: any = [{
    cursor: ct,
    pressed: null
  }, {
    cursor: ct,
    pressed: "a-tile-2"
  }, {
    cursor: ut,
    pressed: null
  }, {
    cursor: ut,
    pressed: "a-tile-4"
  }, {
    cursor: ft,
    pressed: null
  }, {
    cursor: ft,
    pressed: "a-close"
  }, {
    cursor: mt,
    pressed: null
  }, {
    cursor: mt,
    pressed: "b-button"
  }],
  qa: number = 3,
  $a: number = 6,
  Fa: number = 900,
  pt: any = (Ge as any).length,
  ht: any = {
    x: 0,
    y: 30
  };
function Ga(this: any, t: any): any {
  return (t as any) < (0 as any) ? ht : (Ge as any)[((Math as any).min as any)(t, ((Ge as any).length as any) - (1 as any))]?.cursor ?? ht;
}
function Ha(this: any, t: any): any {
  return (t as any) < (0 as any) ? null : (Ge as any)[((Math as any).min as any)(t, ((Ge as any).length as any) - (1 as any))]?.pressed ?? null;
}
function Ua(this: any, t: any): any {
  return (t as any) >= (0 as any) && (t as any) < ($a as any);
}
function Wa(this: any, t: any): any {
  return (t as any) >= (qa as any);
}
const be: string = "#ffffff",
  Va: any = [{
    hue: "#ff5f57",
    isCloseLight: !0
  }, {
    hue: "#febc2e",
    isCloseLight: !1
  }, {
    hue: "#28c840",
    isCloseLight: !1
  }];
function Vs(this: any, t: any): any {
  (Vs as any).d = 1111;
  const e: any = ((z as any).c as any)(5),
    {
      isClosePressed: s
    }: any = t,
    l: any = (s as any) === (void 0 as any) ? !1 : s;
  let a: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = {
    className: "sand-10l6tqk sand-mynqao sand-1bmd7te sand-78zum5 sand-s5uhvr"
  }, (e as any)[0] = a) : a = (e as any)[0];
  const i: any = a,
    o: any = (i as any).className,
    c: any = (i as any).style;
  let u: any;
  ((e as any)[1] as any) !== (l as any) ? (u = ((Va as any).map as any)((m: any): any => {
    const {
        hue: r,
        isCloseLight: d
      }: any = m,
      p: any = ({
        0: {
          className: "sand-yk9uqj sand-1d4dbkn sand-16rqkct sand-1wktga4 sand-xvocdi sand-1p0hc1o"
        },
        1: {
          className: "sand-yk9uqj sand-1d4dbkn sand-16rqkct sand-1wktga4 sand-xvocdi sand-1p0hc1o sand-1mpn8cg sand-atzp2"
        }
      } as any)[(!!(d && l) as any) << (0 as any)];
    return ((n as any).jsx as any)("span", {
      className: (p as any).className,
      style: {
        ...(p as any).style,
        backgroundColor: r
      }
    }, r);
  }), (e as any)[1] = l, (e as any)[2] = u) : u = (e as any)[2];
  let f: any;
  return ((e as any)[3] as any) !== (u as any) ? (f = ((n as any).jsx as any)("div", {
    className: o,
    style: c,
    children: u
  }), (e as any)[3] = u, (e as any)[4] = f) : f = (e as any)[4], f;
}
function Y(this: any, t: any): any {
  (Y as any).d = 1109;
  const e: any = ((z as any).c as any)(16),
    {
      left: s,
      top: l,
      width: a,
      height: i,
      radius: o,
      ink: c,
      isPressed: u
    }: any = t,
    f: any = (u as any) === (void 0 as any) ? !1 : u;
  let m: any;
  ((e as any)[0] as any) !== (f as any) ? (m = ({
    0: {
      className: "sand-10l6tqk sand-uo13n2 sand-xvocdi sand-1p0hc1o"
    },
    1: {
      className: "sand-10l6tqk sand-uo13n2 sand-xvocdi sand-1p0hc1o sand-1mkev6f sand-1n5d1j9"
    }
  } as any)[(!!f as any) << (0 as any)], (e as any)[0] = f, (e as any)[1] = m) : m = (e as any)[1];
  const r: any = m;
  let d: any;
  ((e as any)[2] as any) !== (c as any) || ((e as any)[3] as any) !== (f as any) ? (d = f ? {} : {
    backgroundColor: c
  }, (e as any)[2] = c, (e as any)[3] = f, (e as any)[4] = d) : d = (e as any)[4];
  let p: any;
  ((e as any)[5] as any) !== (i as any) || ((e as any)[6] as any) !== (s as any) || ((e as any)[7] as any) !== ((r as any).style as any) || ((e as any)[8] as any) !== (o as any) || ((e as any)[9] as any) !== (d as any) || ((e as any)[10] as any) !== (l as any) || ((e as any)[11] as any) !== (a as any) ? (p = {
    ...(r as any).style,
    left: s,
    top: l,
    width: a,
    height: i,
    borderRadius: o,
    ...d
  }, (e as any)[5] = i, (e as any)[6] = s, (e as any)[7] = (r as any).style, (e as any)[8] = o, (e as any)[9] = d, (e as any)[10] = l, (e as any)[11] = a, (e as any)[12] = p) : p = (e as any)[12];
  let h: any;
  return ((e as any)[13] as any) !== ((r as any).className as any) || ((e as any)[14] as any) !== (p as any) ? (h = ((n as any).jsx as any)("div", {
    className: (r as any).className,
    style: p
  }), (e as any)[13] = (r as any).className, (e as any)[14] = p, (e as any)[15] = h) : h = (e as any)[15], h;
}
function Lt(this: any, t: any): any {
  (Lt as any).d = 1110;
  const e: any = ((z as any).c as any)(89),
    {
      headingId: s,
      demoBeat: l,
      onForward: a,
      onBack: i
    }: any = t,
    {
      _: o
    }: any = (fe as any)();
  let c: any;
  ((e as any)[0] as any) !== (l as any) ? (c = (Ha as any)(l), (e as any)[0] = l, (e as any)[1] = c) : c = (e as any)[1];
  const u: any = c;
  let f: any, m: any, r: any, d: any, p: any, h: any, g: any, y: any, S: any, _: any, x: any, j: any, k: any, N: any, E: any;
  if (((e as any)[2] as any) !== (o as any) || ((e as any)[3] as any) !== (l as any) || ((e as any)[4] as any) !== (s as any) || ((e as any)[5] as any) !== (i as any) || ((e as any)[6] as any) !== (a as any)) {
    r = {
      className: "sand-1n2onr6 sand-9f619 sand-b3r6kr sand-6zyult sand-1tj7thd sand-1y0btm7 sand-ch0qgz sand-p7k4rv sand-rr4885"
    };
    let ce: any;
    ((e as any)[22] as any) !== (l as any) ? (ce = ({
      0: {
        className: "sand-10l6tqk sand-9f619 sand-b3r6kr sand-1pw4gfu sand-1mkdq0t sand-1y0btm7 sand-1flfzmt sand-1l4sarc sand-1it4094 sand-6o7n8i sand-1fx8mn0 sand-12w9bfk sand-w7d9y7"
      },
      1: {
        className: "sand-10l6tqk sand-9f619 sand-b3r6kr sand-1pw4gfu sand-1mkdq0t sand-1y0btm7 sand-1flfzmt sand-1l4sarc sand-1it4094 sand-6o7n8i sand-g01cxk sand-1mpn8cg sand-1p0hc1o sand-1icns26 sand-12w9bfk"
      }
    } as any)[(!(Ua as any)(l) as any) << (0 as any)], (e as any)[22] = l, (e as any)[23] = ce) : ce = (e as any)[23], N = ce;
    let ie: any;
    ((e as any)[24] as any) !== (l as any) ? (ie = ({
      0: {
        className: "sand-10l6tqk sand-9f619 sand-b3r6kr sand-1pw4gfu sand-1mkdq0t sand-1y0btm7 sand-1flfzmt sand-1l4sarc sand-1it4094 sand-6o7n8i sand-1fx8mn0 sand-12w9bfk sand-w7d9y7"
      },
      1: {
        className: "sand-10l6tqk sand-9f619 sand-b3r6kr sand-1pw4gfu sand-1mkdq0t sand-1y0btm7 sand-1flfzmt sand-1l4sarc sand-1it4094 sand-6o7n8i sand-g01cxk sand-1mpn8cg sand-1p0hc1o sand-1icns26 sand-12w9bfk"
      }
    } as any)[(!(Wa as any)(l) as any) << (0 as any)], (e as any)[24] = l, (e as any)[25] = ie) : ie = (e as any)[25], E = ie, m = He, _ = "sand-onboarding__computer-demo", ((e as any)[26] as any) !== (i as any) || ((e as any)[27] as any) !== (a as any) ? (x = ((n as any).jsx as any)(We, {
      onBack: i,
      onForward: a
    }), (e as any)[26] = i, (e as any)[27] = a, (e as any)[28] = x) : x = (e as any)[28], j = s, ((e as any)[29] as any) !== (o as any) ? (k = (o as any)({
      id: "gz4CuJ"
    }), (e as any)[29] = o, (e as any)[30] = k) : k = (e as any)[30], d = za, p = La, f = Ue, g = !0, y = (Fe as any).x, S = (Fe as any).y, h = (oe as any)("sand-onboarding__demo-card", (r as any).className), (e as any)[2] = o, (e as any)[3] = l, (e as any)[4] = s, (e as any)[5] = i, (e as any)[6] = a, (e as any)[7] = f, (e as any)[8] = m, (e as any)[9] = r, (e as any)[10] = d, (e as any)[11] = p, (e as any)[12] = h, (e as any)[13] = g, (e as any)[14] = y, (e as any)[15] = S, (e as any)[16] = _, (e as any)[17] = x, (e as any)[18] = j, (e as any)[19] = k, (e as any)[20] = N, (e as any)[21] = E;
  } else f = (e as any)[7], m = (e as any)[8], r = (e as any)[9], d = (e as any)[10], p = (e as any)[11], h = (e as any)[12], g = (e as any)[13], y = (e as any)[14], S = (e as any)[15], _ = (e as any)[16], x = (e as any)[17], j = (e as any)[18], k = (e as any)[19], N = (e as any)[20], E = (e as any)[21];
  let O: any;
  ((e as any)[31] as any) !== ((r as any).style as any) ? (O = {
    ...(r as any).style,
    width: Pa,
    height: zt
  }, (e as any)[31] = (r as any).style, (e as any)[32] = O) : O = (e as any)[32];
  let C: any;
  ((e as any)[33] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (C = ((n as any).jsx as any)("img", {
    alt: "",
    className: "sand-10l6tqk sand-10a8y8t sand-1lliihq sand-h8yej3 sand-5yr21d sand-l1xv1r sand-47corl",
    draggable: !1,
    src: Ra
  }), (e as any)[33] = C) : C = (e as any)[33];
  let v: any;
  ((e as any)[34] as any) !== ((N as any).style as any) ? (v = {
    ...(N as any).style,
    left: 29.6,
    top: 32.4,
    width: 300,
    height: 183.9
  }, (e as any)[34] = (N as any).style, (e as any)[35] = v) : v = (e as any)[35];
  let w: any, R: any;
  ((e as any)[36] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (w = ((n as any).jsx as any)(Y, {
    height: 102.3,
    ink: be,
    left: 13.8,
    radius: 5.5,
    top: 89.8,
    width: 272.4
  }), R = ((n as any).jsx as any)(Y, {
    height: 44.2,
    ink: be,
    left: 13.8,
    radius: 5.5,
    top: 33.2,
    width: 59.4
  }), (e as any)[36] = w, (e as any)[37] = R) : (w = (e as any)[36], R = (e as any)[37]);
  const I: any = (u as any) === ("a-tile-2" as any);
  let B: any;
  ((e as any)[38] as any) !== (I as any) ? (B = ((n as any).jsx as any)(Y, {
    height: 44.2,
    ink: be,
    isPressed: I,
    left: 82.9,
    radius: 5.5,
    top: 33.2,
    width: 59.4
  }), (e as any)[38] = I, (e as any)[39] = B) : B = (e as any)[39];
  let ee: any;
  ((e as any)[40] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ee = ((n as any).jsx as any)(Y, {
    height: 44.2,
    ink: be,
    left: 153.5,
    radius: 5.5,
    top: 33.2,
    width: 59.4
  }), (e as any)[40] = ee) : ee = (e as any)[40];
  const H: any = (u as any) === ("a-tile-4" as any);
  let U: any;
  ((e as any)[41] as any) !== (H as any) ? (U = ((n as any).jsx as any)(Y, {
    height: 44.2,
    ink: be,
    isPressed: H,
    left: 224,
    radius: 5.5,
    top: 33.2,
    width: 59.4
  }), (e as any)[41] = H, (e as any)[42] = U) : U = (e as any)[42];
  let Z: any;
  ((e as any)[43] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Z = ((n as any).jsx as any)("div", {
    className: "sand-10l6tqk sand-17y0mx6 sand-13vifvy sand-nqqxm sand-6kafv"
  }), (e as any)[43] = Z) : Z = (e as any)[43];
  const q: any = (u as any) === ("a-close" as any);
  let L: any;
  ((e as any)[44] as any) !== (q as any) ? (L = ((n as any).jsx as any)(Vs, {
    isClosePressed: q
  }), (e as any)[44] = q, (e as any)[45] = L) : L = (e as any)[45];
  let $: any;
  ((e as any)[46] as any) !== (v as any) || ((e as any)[47] as any) !== (B as any) || ((e as any)[48] as any) !== (U as any) || ((e as any)[49] as any) !== (L as any) || ((e as any)[50] as any) !== ((N as any).className as any) ? ($ = ((n as any).jsxs as any)("div", {
    className: (N as any).className,
    style: v,
    children: [w, R, B, ee, U, Z, L]
  }), (e as any)[46] = v, (e as any)[47] = B, (e as any)[48] = U, (e as any)[49] = L, (e as any)[50] = (N as any).className, (e as any)[51] = $) : $ = (e as any)[51];
  let W: any;
  ((e as any)[52] as any) !== ((E as any).style as any) ? (W = {
    ...(E as any).style,
    left: 125,
    top: 73.9,
    width: 262.7,
    height: 183.9
  }, (e as any)[52] = (E as any).style, (e as any)[53] = W) : W = (e as any)[53];
  let M: any, Q: any, T: any, F: any, A: any, V: any, se: any;
  ((e as any)[54] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (M = ((n as any).jsx as any)(Y, {
    height: 145.2,
    ink: be,
    left: 82.9,
    radius: 5.5,
    top: 38.7,
    width: 179.7
  }), Q = ((n as any).jsx as any)(Y, {
    height: 145.5,
    ink: be,
    left: 6.9,
    radius: 5.3,
    top: 38.6,
    width: 69
  }), T = ((n as any).jsx as any)(Y, {
    height: 16.6,
    ink: "rgba(0, 0, 0, 0.1)",
    left: 100.9,
    radius: 2.8,
    top: 56.7,
    width: 16.6
  }), F = ((n as any).jsx as any)(Y, {
    height: 16.6,
    ink: "rgba(0, 0, 0, 0.1)",
    left: 100.9,
    radius: 2.8,
    top: 89.9,
    width: 16.6
  }), A = ((n as any).jsx as any)(Y, {
    height: 6.9,
    ink: "rgba(0, 0, 0, 0.1)",
    left: 131.3,
    radius: 13.8,
    top: 62.2,
    width: 89.9
  }), V = ((n as any).jsx as any)(Y, {
    height: 6.9,
    ink: "rgba(0, 0, 0, 0.1)",
    left: 131.3,
    radius: 13.8,
    top: 87.1,
    width: 89.9
  }), se = ((n as any).jsx as any)(Y, {
    height: 6.9,
    ink: "rgba(0, 0, 0, 0.1)",
    left: 131.3,
    radius: 13.8,
    top: 102.3,
    width: 58.1
  }), (e as any)[54] = M, (e as any)[55] = Q, (e as any)[56] = T, (e as any)[57] = F, (e as any)[58] = A, (e as any)[59] = V, (e as any)[60] = se) : (M = (e as any)[54], Q = (e as any)[55], T = (e as any)[56], F = (e as any)[57], A = (e as any)[58], V = (e as any)[59], se = (e as any)[60]);
  const ne: any = (u as any) === ("b-button" as any);
  let G: any;
  ((e as any)[61] as any) !== (ne as any) ? (G = ((n as any).jsx as any)(Y, {
    height: 44.2,
    ink: "rgba(4, 4, 4, 0.12)",
    isPressed: ne,
    left: 96.8,
    radius: 5.5,
    top: 125.8,
    width: 152.1
  }), (e as any)[61] = ne, (e as any)[62] = G) : G = (e as any)[62];
  let J: any, ae: any;
  ((e as any)[63] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (J = ((n as any).jsx as any)("div", {
    className: "sand-10l6tqk sand-17y0mx6 sand-13vifvy sand-nqqxm sand-6kafv"
  }), ae = ((n as any).jsx as any)(Vs, {}), (e as any)[63] = J, (e as any)[64] = ae) : (J = (e as any)[63], ae = (e as any)[64]);
  let te: any;
  ((e as any)[65] as any) !== (W as any) || ((e as any)[66] as any) !== (G as any) || ((e as any)[67] as any) !== ((E as any).className as any) ? (te = ((n as any).jsxs as any)("div", {
    className: (E as any).className,
    style: W,
    children: [M, Q, T, F, A, V, se, G, J, ae]
  }), (e as any)[65] = W, (e as any)[66] = G, (e as any)[67] = (E as any).className, (e as any)[68] = te) : te = (e as any)[68];
  let K: any;
  ((e as any)[69] as any) !== (O as any) || ((e as any)[70] as any) !== (h as any) || ((e as any)[71] as any) !== ($ as any) || ((e as any)[72] as any) !== (te as any) ? (K = ((n as any).jsxs as any)("div", {
    className: h,
    style: O,
    children: [C, $, te]
  }), (e as any)[69] = O, (e as any)[70] = h, (e as any)[71] = $, (e as any)[72] = te, (e as any)[73] = K) : K = (e as any)[73];
  let X: any;
  ((e as any)[74] as any) !== (f as any) || ((e as any)[75] as any) !== (g as any) || ((e as any)[76] as any) !== (K as any) || ((e as any)[77] as any) !== (y as any) || ((e as any)[78] as any) !== (S as any) ? (X = ((n as any).jsx as any)(f, {
    ariaHidden: g,
    x: y,
    y: S,
    children: K
  }), (e as any)[74] = f, (e as any)[75] = g, (e as any)[76] = K, (e as any)[77] = y, (e as any)[78] = S, (e as any)[79] = X) : X = (e as any)[79];
  let de: any;
  return ((e as any)[80] as any) !== (m as any) || ((e as any)[81] as any) !== (d as any) || ((e as any)[82] as any) !== (p as any) || ((e as any)[83] as any) !== (X as any) || ((e as any)[84] as any) !== (_ as any) || ((e as any)[85] as any) !== (x as any) || ((e as any)[86] as any) !== (j as any) || ((e as any)[87] as any) !== (k as any) ? (de = ((n as any).jsx as any)(m, {
    className: _,
    footer: x,
    headingId: j,
    title: k,
    titleAnchor: d,
    titleMeasure: p,
    children: X
  }), (e as any)[80] = m, (e as any)[81] = d, (e as any)[82] = p, (e as any)[83] = X, (e as any)[84] = _, (e as any)[85] = x, (e as any)[86] = j, (e as any)[87] = k, (e as any)[88] = de) : de = (e as any)[88], de;
}
const Ka: number = 28,
  Le: any = {
    line: {
      kogj98: "sand-1ghz6dp",
      kMwMTN: "sand-tyxrsu",
      k9WMMc: "sand-2b8uid",
      $$css: !0
    },
    error: {
      kogj98: "sand-1ghz6dp",
      kMwMTN: "sand-6rl5ky",
      k9WMMc: "sand-2b8uid",
      $$css: !0
    },
    textAction: {
      k8WAf4: "sand-t970qd",
      kGuDYH: "sand-1j61zf2",
      kLWn49: "sand-dod15v",
      $$css: !0
    },
    actionSeparator: {
      kMwMTN: "sand-169k319",
      kfSwDN: "sand-87ps6o",
      $$css: !0
    }
  };
function Xa(this: any, t: any): any {
  return (t as any).isComputerReady ? {
    id: "eUHuzX"
  } : ((t as any).pullPercent as any) != (null as any) ? {
    id: "4UbAfG",
    values: {
      0: ((Math as any).round as any)((t as any).pullPercent)
    }
  } : ((t as any).computerState as any) === ("hibernated" as any) ? {
    id: "d4+5aD"
  } : {
    id: "JW5mNg"
  };
}
function qt(this: any, t: any): any {
  (qt as any).d = 1113;
  const e: any = ((z as any).c as any)(30),
    {
      headingId: s,
      isComputerReady: l,
      computerState: a,
      pullPercent: i,
      error: o,
      onRetry: c
    }: any = t,
    {
      i18n: u
    }: any = (fe as any)(),
    f: any = (wn as any)("grok_bot_network_debugger"),
    m: any = (Tn as any)();
  let r: any;
  ((e as any)[0] as any) !== (o as any) || ((e as any)[1] as any) !== (m as any) ? (r = (): any => ((o as any) != (null as any) && (m as any)("grok_bot_network_debugger"), Ja), (e as any)[0] = o, (e as any)[1] = m, (e as any)[2] = r) : r = (e as any)[2], (Xs as any)(r);
  const [d, p]: any = ((D as any).useState as any)(!1);
  let h: any, g: any, y: any, S: any;
  ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (y = {
    className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-wh1qs3 sand-1fn4h0r sand-193iq5w"
  }, g = (Be as any)((Se as any).heading3, (Le as any).line), h = (Be as any)((Se as any).body2, (Le as any).error), S = (oe as any)("sand-onboarding__hand-off", (y as any).className), (e as any)[3] = h, (e as any)[4] = g, (e as any)[5] = y, (e as any)[6] = S) : (h = (e as any)[3], g = (e as any)[4], y = (e as any)[5], S = (e as any)[6]);
  let _: any;
  ((e as any)[7] as any) !== (o as any) ? (_ = (o as any) == (null as any) ? ((n as any).jsx as any)(An, {
    size: Ka
  }) : null, (e as any)[7] = o, (e as any)[8] = _) : _ = (e as any)[8];
  let x: any;
  ((e as any)[9] as any) !== (a as any) || ((e as any)[10] as any) !== (o as any) || ((e as any)[11] as any) !== (u as any) || ((e as any)[12] as any) !== (l as any) || ((e as any)[13] as any) !== (i as any) ? (x = (o as any) != (null as any) ? ((n as any).jsx as any)(_e, {
    id: "chgOnK"
  }) : ((n as any).jsx as any)(On, {
    children: ((u as any)._ as any)((Xa as any)({
      isComputerReady: l,
      computerState: a,
      pullPercent: i
    }))
  }), (e as any)[9] = a, (e as any)[10] = o, (e as any)[11] = u, (e as any)[12] = l, (e as any)[13] = i, (e as any)[14] = x) : x = (e as any)[14];
  let j: any;
  ((e as any)[15] as any) !== (s as any) || ((e as any)[16] as any) !== (x as any) ? (j = ((n as any).jsx as any)("p", {
    "aria-live": "polite",
    className: (g as any).className,
    id: s,
    style: (g as any).style,
    children: x
  }), (e as any)[15] = s, (e as any)[16] = x, (e as any)[17] = j) : j = (e as any)[17];
  let k: any;
  ((e as any)[18] as any) !== (o as any) || ((e as any)[19] as any) !== (f as any) || ((e as any)[20] as any) !== (c as any) ? (k = (o as any) != (null as any) ? ((n as any).jsxs as any)((n as any).Fragment, {
    children: [((n as any).jsx as any)("p", {
      className: (h as any).className,
      style: (h as any).style,
      children: o
    }), ((n as any).jsxs as any)("div", {
      className: "sand-78zum5 sand-6s0dn4 sand-ehausa",
      children: [((n as any).jsx as any)(De, {
        autoFocus: !0,
        onClick: c,
        sentiment: "accent",
        style: (Le as any).textAction,
        variant: "tertiary",
        children: ((n as any).jsx as any)(_e, {
          id: "KDw4GX"
        })
      }), f ? ((n as any).jsxs as any)((n as any).Fragment, {
        children: [((n as any).jsx as any)("span", {
          "aria-hidden": !0,
          ...(Be as any)((Se as any).body2, (Le as any).actionSeparator),
          children: "-"
        }), ((n as any).jsx as any)(De, {
          onClick: (): any => (p as any)(!0),
          sentiment: "accent",
          style: (Le as any).textAction,
          variant: "tertiary",
          children: ((n as any).jsx as any)(_e, {
            id: "3wm/pb"
          })
        })]
      }) : null]
    })]
  }) : null, (e as any)[18] = o, (e as any)[19] = f, (e as any)[20] = c, (e as any)[21] = k) : k = (e as any)[21];
  let N: any;
  ((e as any)[22] as any) !== (d as any) || ((e as any)[23] as any) !== (f as any) ? (N = f && d ? ((n as any).jsx as any)(Wn, {
    onClose: (): any => (p as any)(!1)
  }) : null, (e as any)[22] = d, (e as any)[23] = f, (e as any)[24] = N) : N = (e as any)[24];
  let E: any;
  return ((e as any)[25] as any) !== (_ as any) || ((e as any)[26] as any) !== (j as any) || ((e as any)[27] as any) !== (k as any) || ((e as any)[28] as any) !== (N as any) ? (E = ((n as any).jsxs as any)("div", {
    className: S,
    style: (y as any).style,
    children: [_, j, k, N]
  }), (e as any)[25] = _, (e as any)[26] = j, (e as any)[27] = k, (e as any)[28] = N, (e as any)[29] = E) : E = (e as any)[29], E;
}
function Ja(this: any): any {}
const Ya: number = 10,
  Za: number = 800,
  gt: number = 2,
  Qa: any = ["invoice-chaser", "weekly-standup", "sales-forecast"];
function $t(this: any, t: any): any {
  ($t as any).d = 1114;
  const e: any = ((z as any).c as any)(13),
    {
      headingId: s,
      jobsBeat: l,
      onForward: a,
      onBack: i
    }: any = t,
    {
      i18n: o,
      _: c
    }: any = (fe as any)(),
    u: any = (l as any) >= (2 as any);
  let f: any;
  ((e as any)[0] as any) !== (i as any) || ((e as any)[1] as any) !== (a as any) ? (f = ((n as any).jsx as any)(We, {
    onBack: i,
    onForward: a
  }), (e as any)[0] = i, (e as any)[1] = a, (e as any)[2] = f) : f = (e as any)[2];
  let m: any;
  ((e as any)[3] as any) !== (c as any) ? (m = (c as any)({
    id: "3Z3HHA"
  }), (e as any)[3] = c, (e as any)[4] = m) : m = (e as any)[4];
  let r: any;
  ((e as any)[5] as any) !== (u as any) || ((e as any)[6] as any) !== (o as any) ? (r = ((Qa as any).map as any)((p: any): any => {
    const h: any = (Ys as any)[p],
      g: any = ({
        0: {
          className: "sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-9f619 sand-1uaxe40 sand-1hr3lfm sand-1vvogim sand-ugzpu4 sand-8c2ked sand-19d36u7 sand-19v9tvf sand-10b1f50 sand-1rhlpx6 sand-tyxrsu sand-uxw1ft sand-g01cxk sand-1rbuhwb sand-6o7n8i sand-1hek3ex sand-12w9bfk sand-w7d9y7"
        },
        1: {
          className: "sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-9f619 sand-1uaxe40 sand-1hr3lfm sand-1vvogim sand-ugzpu4 sand-8c2ked sand-19d36u7 sand-19v9tvf sand-10b1f50 sand-1rhlpx6 sand-tyxrsu sand-uxw1ft sand-6o7n8i sand-1hek3ex sand-12w9bfk sand-w7d9y7 sand-1hc1fzr sand-nn1q72"
        }
      } as any)[(!!u as any) << (0 as any)];
    return ((n as any).jsx as any)(Ue, {
      pin: "top",
      x: (h as any).x,
      y: (((h as any).y as any) + ((Js as any) / (2 as any) as any) as any) + (Ya as any),
      children: ((n as any).jsx as any)("span", {
        className: (oe as any)("sand-onboarding__job-bubble", (g as any).className),
        style: (g as any).style,
        children: ((o as any)._ as any)((oa as any)[p])
      })
    }, p);
  }), (e as any)[5] = u, (e as any)[6] = o, (e as any)[7] = r) : r = (e as any)[7];
  let d: any;
  return ((e as any)[8] as any) !== (s as any) || ((e as any)[9] as any) !== (f as any) || ((e as any)[10] as any) !== (m as any) || ((e as any)[11] as any) !== (r as any) ? (d = ((n as any).jsx as any)(He, {
    className: "sand-onboarding__jobs",
    footer: f,
    headingId: s,
    title: m,
    children: r
  }), (e as any)[8] = s, (e as any)[9] = f, (e as any)[10] = m, (e as any)[11] = r, (e as any)[12] = d) : d = (e as any)[12], d;
}
const el: any = {
    id: "fMPJR7"
  },
  sl: any = {
    id: "yvjVU9"
  },
  tl: any = (Cn as any)((t: any): any => new ((Intl as any).Segmenter as any)(t, {
    granularity: "grapheme"
  }));
function Ft(this: any, t: any): any {
  return ((Array as any).from as any)((((tl as any)() as any).segment as any)(((t as any)._ as any)(el)), (e: any): any => (e as any).segment);
}
const nl: number = 348,
  al: any = -14,
  he: any = {
    composerRows: {
      k1xSpc: "sand-78zum5",
      kXwgrk: "sand-dt5ytf",
      kOIVth: "sand-883omv",
      kLKAdn: "sand-z9dl7a",
      kGO01o: "sand-wib8y2",
      kg3NbH: "sand-dqyycr",
      $$css: !0
    },
    composerLeaving: {
      kKVMdj: "sand-1eitycm sand-1aquc0h",
      k44tkh: "sand-17qpdo9",
      kKxzle: "sand-14skv4n",
      kyAemX: "sand-n0cd8s",
      kWV6AL: "sand-1u6ievf",
      kSiTet: "sand-1o9sq8h",
      kfzvcC: "sand-47corl",
      $$css: !0
    },
    composerGone: {
      kSiTet: "sand-g01cxk",
      kfzvcC: "sand-47corl",
      $$css: !0
    },
    text: {
      kAzted: "sand-isnujt",
      kogj98: "sand-1ghz6dp",
      kUOVxO: "sand-xbjj12",
      kMwMTN: "sand-tyxrsu",
      k9WMMc: "sand-1yc453h",
      khDVqt: "sand-126k92a",
      kHjlTd: "sand-1mzt3pk",
      $$css: !0
    },
    placeholder: {
      kMwMTN: "sand-169k319",
      $$css: !0
    },
    action: {
      kzqmXN: "sand-gd8bvy",
      kZKoxP: "sand-1fgtraw",
      $$css: !0
    },
    sendPressed: {
      kKVMdj: "sand-byb4at sand-1aquc0h",
      k44tkh: "sand-9dz2be",
      kyAemX: "sand-a3vuyk",
      kWV6AL: "sand-1u6ievf",
      $$css: !0
    }
  };
function Gt(this: any, t: any): any {
  (Gt as any).d = 1120;
  const e: any = ((z as any).c as any)(89),
    {
      headingId: s,
      typedCount: l,
      send: a,
      onForward: i
    }: any = t,
    {
      i18n: o,
      _: c
    }: any = (fe as any)();
  let u: any, f: any, m: any, r: any, d: any, p: any, h: any, g: any, y: any, S: any, _: any, x: any, j: any, k: any, N: any, E: any, O: any, C: any, v: any, w: any;
  if (((e as any)[0] as any) !== (c as any) || ((e as any)[1] as any) !== (s as any) || ((e as any)[2] as any) !== (o as any) || ((e as any)[3] as any) !== (i as any) || ((e as any)[4] as any) !== (a as any) || ((e as any)[5] as any) !== (l as any)) {
    const ne: any = (Ft as any)(o),
      G: any = ((Math as any).max as any)(0, ((Math as any).min as any)(l, (ne as any).length));
    p = (l as any) >= (0 as any) && (a as any) === ("pending" as any), d = (a as any) === ("pressing" as any);
    let J: any;
    ((e as any)[26] as any) !== (G as any) ? (J = (Be as any)((Se as any).body1, (he as any).text, (G as any) === (0 as any) && (he as any).placeholder), (e as any)[26] = G, (e as any)[27] = J) : J = (e as any)[27];
    const ae: any = J;
    let te: any;
    ((e as any)[28] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (te = {
      className: "sand-1rg5ohu sand-bdjdey sand-x3o462 sand-m2jcoa sand-mziwt1 sand-1t716jg sand-1vlthch sand-1aquc0h sand-162ll0j sand-a4qsjk"
    }, (e as any)[28] = te) : te = (e as any)[28], r = te, m = He, y = "sand-onboarding__meet", ((e as any)[29] as any) !== (i as any) ? (S = ((n as any).jsx as any)(We, {
      onForward: i
    }), (e as any)[29] = i, (e as any)[30] = S) : S = (e as any)[30], _ = s, ((e as any)[31] as any) !== (c as any) ? (x = (c as any)({
      id: "nGd7vs"
    }), (e as any)[31] = c, (e as any)[32] = x) : x = (e as any)[32], f = Ue, O = !0, C = "top", v = nl, w = 0, g = al, u = Vn, N = "sand-onboarding__composer";
    const K: any = d && (he as any).composerLeaving,
      X: any = (a as any) === ("sent" as any) && (he as any).composerGone;
    ((e as any)[33] as any) !== (K as any) || ((e as any)[34] as any) !== (X as any) ? (E = [(he as any).composerRows, K, X], (e as any)[33] = K, (e as any)[34] = X, (e as any)[35] = E) : E = (e as any)[35], h = (ae as any).className, j = (ae as any).style, k = (G as any) === (0 as any) ? ((o as any)._ as any)(sl) : ((((ne as any).slice as any)(0, G) as any).join as any)(""), (e as any)[0] = c, (e as any)[1] = s, (e as any)[2] = o, (e as any)[3] = i, (e as any)[4] = a, (e as any)[5] = l, (e as any)[6] = u, (e as any)[7] = f, (e as any)[8] = m, (e as any)[9] = r, (e as any)[10] = d, (e as any)[11] = p, (e as any)[12] = h, (e as any)[13] = g, (e as any)[14] = y, (e as any)[15] = S, (e as any)[16] = _, (e as any)[17] = x, (e as any)[18] = j, (e as any)[19] = k, (e as any)[20] = N, (e as any)[21] = E, (e as any)[22] = O, (e as any)[23] = C, (e as any)[24] = v, (e as any)[25] = w;
  } else u = (e as any)[6], f = (e as any)[7], m = (e as any)[8], r = (e as any)[9], d = (e as any)[10], p = (e as any)[11], h = (e as any)[12], g = (e as any)[13], y = (e as any)[14], S = (e as any)[15], _ = (e as any)[16], x = (e as any)[17], j = (e as any)[18], k = (e as any)[19], N = (e as any)[20], E = (e as any)[21], O = (e as any)[22], C = (e as any)[23], v = (e as any)[24], w = (e as any)[25];
  let R: any;
  ((e as any)[36] as any) !== (r as any) || ((e as any)[37] as any) !== (p as any) ? (R = p ? ((n as any).jsx as any)("span", {
    className: (r as any).className,
    style: (r as any).style
  }) : null, (e as any)[36] = r, (e as any)[37] = p, (e as any)[38] = R) : R = (e as any)[38];
  let I: any;
  ((e as any)[39] as any) !== (h as any) || ((e as any)[40] as any) !== (R as any) || ((e as any)[41] as any) !== (j as any) || ((e as any)[42] as any) !== (k as any) ? (I = ((n as any).jsxs as any)("p", {
    className: h,
    style: j,
    children: [k, R]
  }), (e as any)[39] = h, (e as any)[40] = R, (e as any)[41] = j, (e as any)[42] = k, (e as any)[43] = I) : I = (e as any)[43];
  let B: any;
  ((e as any)[44] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (B = {
    className: "sand-78zum5 sand-6s0dn4 sand-1qughib"
  }, (e as any)[44] = B) : B = (e as any)[44];
  const ee: any = (B as any).className;
  let H: any;
  ((e as any)[45] as any) !== (c as any) ? (H = (c as any)({
    id: "igVDFt"
  }), (e as any)[45] = c, (e as any)[46] = H) : H = (e as any)[46];
  let U: any;
  ((e as any)[47] as any) !== (H as any) ? (U = ((n as any).jsx as any)(lt, {
    "aria-label": H,
    icon: "plus",
    shape: "circle",
    size: "sm",
    style: (he as any).action,
    tabIndex: -1,
    variant: "secondary"
  }), (e as any)[47] = H, (e as any)[48] = U) : U = (e as any)[48];
  let Z: any;
  ((e as any)[49] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Z = {
    className: "sand-1n2onr6 sand-3nfvp2"
  }, (e as any)[49] = Z) : Z = (e as any)[49];
  let q: any;
  ((e as any)[50] as any) !== (d as any) ? (q = ({
    0: {
      className: "sand-10l6tqk sand-10a8y8t sand-16rqkct sand-dh2fpr sand-1y0btm7 sand-1newj2f sand-g01cxk sand-47corl"
    },
    1: {
      className: "sand-10l6tqk sand-10a8y8t sand-16rqkct sand-dh2fpr sand-1y0btm7 sand-1newj2f sand-g01cxk sand-47corl sand-kqtz50 sand-1aquc0h sand-4mqg50 sand-1k0bccz sand-a3vuyk sand-1u6ievf"
    }
  } as any)[(!!d as any) << (0 as any)], (e as any)[50] = d, (e as any)[51] = q) : q = (e as any)[51];
  let L: any;
  ((e as any)[52] as any) !== (q as any) ? (L = ((n as any).jsx as any)("span", {
    ...q
  }), (e as any)[52] = q, (e as any)[53] = L) : L = (e as any)[53];
  let $: any;
  ((e as any)[54] as any) !== (c as any) ? ($ = (c as any)({
    id: "JlFcis"
  }), (e as any)[54] = c, (e as any)[55] = $) : $ = (e as any)[55];
  const W: any = d && (he as any).sendPressed;
  let M: any;
  ((e as any)[56] as any) !== (W as any) ? (M = [(he as any).action, W], (e as any)[56] = W, (e as any)[57] = M) : M = (e as any)[57];
  let Q: any;
  ((e as any)[58] as any) !== (i as any) || ((e as any)[59] as any) !== ($ as any) || ((e as any)[60] as any) !== (M as any) ? (Q = ((n as any).jsx as any)(lt, {
    "aria-label": $,
    icon: "arrow-up",
    onClick: i,
    shape: "circle",
    size: "sm",
    style: M,
    tabIndex: -1,
    variant: "primary"
  }), (e as any)[58] = i, (e as any)[59] = $, (e as any)[60] = M, (e as any)[61] = Q) : Q = (e as any)[61];
  let T: any;
  ((e as any)[62] as any) !== (L as any) || ((e as any)[63] as any) !== (Q as any) ? (T = ((n as any).jsxs as any)("span", {
    ...Z,
    children: [L, Q]
  }), (e as any)[62] = L, (e as any)[63] = Q, (e as any)[64] = T) : T = (e as any)[64];
  let F: any;
  ((e as any)[65] as any) !== (U as any) || ((e as any)[66] as any) !== (T as any) ? (F = ((n as any).jsxs as any)("div", {
    className: ee,
    children: [U, T]
  }), (e as any)[65] = U, (e as any)[66] = T, (e as any)[67] = F) : F = (e as any)[67];
  let A: any;
  ((e as any)[68] as any) !== (u as any) || ((e as any)[69] as any) !== (I as any) || ((e as any)[70] as any) !== (F as any) || ((e as any)[71] as any) !== (N as any) || ((e as any)[72] as any) !== (E as any) ? (A = ((n as any).jsxs as any)(u, {
    className: N,
    style: E,
    children: [I, F]
  }), (e as any)[68] = u, (e as any)[69] = I, (e as any)[70] = F, (e as any)[71] = N, (e as any)[72] = E, (e as any)[73] = A) : A = (e as any)[73];
  let V: any;
  ((e as any)[74] as any) !== (f as any) || ((e as any)[75] as any) !== (g as any) || ((e as any)[76] as any) !== (A as any) || ((e as any)[77] as any) !== (O as any) || ((e as any)[78] as any) !== (C as any) || ((e as any)[79] as any) !== (v as any) || ((e as any)[80] as any) !== (w as any) ? (V = ((n as any).jsx as any)(f, {
    ariaHidden: O,
    pin: C,
    width: v,
    x: w,
    y: g,
    children: A
  }), (e as any)[74] = f, (e as any)[75] = g, (e as any)[76] = A, (e as any)[77] = O, (e as any)[78] = C, (e as any)[79] = v, (e as any)[80] = w, (e as any)[81] = V) : V = (e as any)[81];
  let se: any;
  return ((e as any)[82] as any) !== (m as any) || ((e as any)[83] as any) !== (y as any) || ((e as any)[84] as any) !== (S as any) || ((e as any)[85] as any) !== (_ as any) || ((e as any)[86] as any) !== (x as any) || ((e as any)[87] as any) !== (V as any) ? (se = ((n as any).jsx as any)(m, {
    className: y,
    footer: S,
    headingId: _,
    title: x,
    children: V
  }), (e as any)[82] = m, (e as any)[83] = y, (e as any)[84] = S, (e as any)[85] = _, (e as any)[86] = x, (e as any)[87] = V, (e as any)[88] = se) : se = (e as any)[88], se;
}
const ll: number = 12,
  Ht: number = 20,
  ol: number = 35,
  il: number = 20,
  Ut: number = 20,
  rl: number = 3e3;
function Wt(this: any, t: any): any {
  return ((Ht as any) + (t as any) as any) + (il as any);
}
function dl(this: any, t: any): any {
  return ((Wt as any)(t) as any) + (Ut as any);
}
function cl(this: any, t: any, e: any): any {
  return (t as any).isSent ? e ? "pressing" : "sent" : "pending";
}
function ul(this: any, t: any, e: any): any {
  const s: any = ((Math as any).min as any)(((Math as any).max as any)(-1, (t as any) - (Ht as any)), e),
    l: any = (Wt as any)(e);
  return {
    typedCount: s,
    isSent: (t as any) >= (l as any),
    isThinking: (t as any) >= ((l as any) + (Ut as any) as any)
  };
}
function fl(this: any, t: any): any {
  return (t as any) >= (ll as any) ? 1 : (t as any) >= (0 as any) ? 0 : -1;
}
const ml: any = -147,
  le: any = {
    card: {
      k1xSpc: "sand-78zum5",
      kXwgrk: "sand-dt5ytf sand-1p93zpp",
      kGNEyG: "sand-1cy8zhl sand-1ks5go6",
      kOIVth: "sand-1v2ro7d sand-5m2fds",
      kB7OPa: "sand-9f619",
      kzqmXN: "sand-h8yej3",
      kAzted: "sand-1edz59j sand-1kn73fv",
      kmVPX3: "sand-1tamke2 sand-wyq0y5",
      kaIpWk: "sand-4pepcl",
      kMzoRj: "sand-mkeg23",
      ksu8eU: "sand-1y0btm7",
      kVAM5u: "sand-q03nf1 sand-1i1yey8 sand-4nrw47",
      kI3sdo: "sand-1a2a7pz",
      kWkggS: "sand-vvtkfd sand-cnu2fh",
      kMwMTN: "sand-tyxrsu",
      "--role-swatch": "sand-2h74xn",
      "--role-tint": "sand-1i1thnr",
      "--role-plate": "sand-1wxb63o sand-8q83sm",
      "--role-plate-fg": "sand-11wpl6l sand-1mmtgap",
      kkrTdU: "sand-1ypdohk",
      k9WMMc: "sand-1yc453h",
      k1ekBW: "sand-ts7igz",
      kIyJzY: "sand-7pq1vu",
      kAMwcw: "sand-6ekqhr",
      kKVMdj: "sand-1ck76bl sand-1aquc0h",
      k44tkh: "sand-1qa8tl sand-1u6grsq",
      kyAemX: "sand-1meahyu",
      kWV6AL: "sand-1u6ievf",
      kKxzle: "sand-1uzojwf sand-pum1pi sand-1ffb2lp sand-d77751 sand-5deg2a sand-g606ep sand-1b3cdxc sand-jl4f85 sand-onzorg sand-14q22ui",
      $$css: !0
    },
    cardAccent: {
      "--role-swatch": "sand-1xiglcf",
      $$css: !0
    },
    cardWarning: {
      "--role-swatch": "sand-19jrthe",
      $$css: !0
    },
    cardDanger: {
      "--role-swatch": "sand-1t6ox5v",
      $$css: !0
    },
    cardSupplementary3: {
      "--role-swatch": "sand-goemqi",
      $$css: !0
    },
    cardSupplementary5: {
      "--role-swatch": "sand-1aqr0me",
      $$css: !0
    },
    cardSuccess: {
      "--role-swatch": "sand-5es22o",
      $$css: !0
    },
    cardSupplementary1: {
      "--role-swatch": "sand-4tps6y",
      $$css: !0
    },
    cardSupplementary2: {
      "--role-swatch": "sand-1vrj4gz",
      $$css: !0
    },
    cardNeutral: {
      "--role-swatch": "sand-1np8ltz",
      $$css: !0
    },
    cardSelected: {
      kVAM5u: "sand-1vupcl0 sand-10ki1yy sand-4nrw47",
      kWkggS: "sand-6sp02w sand-cnu2fh",
      kGVxlE: "sand-d25iqh",
      "--role-plate": "sand-j21xiq sand-vh5ux5",
      "--role-plate-fg": "sand-10uvt49 sand-1mmtgap",
      $$css: !0
    }
  },
  pl: any = {
    accent: (le as any).cardAccent,
    warning: (le as any).cardWarning,
    danger: (le as any).cardDanger,
    supplementary3: (le as any).cardSupplementary3,
    supplementary5: (le as any).cardSupplementary5,
    success: (le as any).cardSuccess,
    supplementary1: (le as any).cardSupplementary1,
    supplementary2: (le as any).cardSupplementary2,
    neutral: (le as any).cardNeutral
  };
function Vt(this: any, t: any): any {
  (Vt as any).d = 1121;
  const e: any = ((z as any).c as any)(24),
    {
      finishesWalk: s,
      headingId: l,
      selectedRole: a,
      onBack: i,
      onForward: o,
      onSelect: c
    }: any = t,
    u: any = (s as any) === (void 0 as any) ? !1 : s,
    {
      i18n: f,
      _: m
    }: any = (fe as any)();
  let r: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (r = {
    className: "sand-t9j73 sand-z004p3"
  }, (e as any)[0] = r) : r = (e as any)[0];
  let d: any;
  ((e as any)[1] as any) !== (m as any) || ((e as any)[2] as any) !== (u as any) ? (d = u ? {
    forwardLabel: (m as any)({
      id: "xGVfLh"
    })
  } : {}, (e as any)[1] = m, (e as any)[2] = u, (e as any)[3] = d) : d = (e as any)[3];
  const p: any = (a as any) == (null as any);
  let h: any;
  ((e as any)[4] as any) !== (i as any) || ((e as any)[5] as any) !== (o as any) || ((e as any)[6] as any) !== (d as any) || ((e as any)[7] as any) !== (p as any) ? (h = ((n as any).jsx as any)("div", {
    ...r,
    children: ((n as any).jsx as any)(We, {
      ...d,
      isForwardDisabled: p,
      onBack: i,
      onForward: o
    })
  }), (e as any)[4] = i, (e as any)[5] = o, (e as any)[6] = d, (e as any)[7] = p, (e as any)[8] = h) : h = (e as any)[8];
  let g: any;
  ((e as any)[9] as any) !== (m as any) ? (g = (m as any)({
    id: "wSsj7I"
  }), (e as any)[9] = m, (e as any)[10] = g) : g = (e as any)[10];
  let y: any;
  ((e as any)[11] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (y = {
    className: "sand-rvj5dj sand-185a7wo sand-1v2ro7d sand-kza4yq sand-1lbixau sand-zomyc0"
  }, (e as any)[11] = y) : y = (e as any)[11];
  let S: any;
  ((e as any)[12] as any) !== (f as any) || ((e as any)[13] as any) !== (c as any) || ((e as any)[14] as any) !== (a as any) ? (S = ((Pt as any).map as any)((j: any): any => {
    const k: any = ((j as any).id as any) === (a as any),
      N: any = (Be as any)((le as any).card, (pl as any)[(j as any).tone], k && (le as any).cardSelected),
      E: any = {
        className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-1td3qas sand-10w6t97 sand-10hpsqq sand-qku8t2 sand-jmygeo sand-s2xxs2 sand-7pq1vu sand-6ekqhr"
      };
    return ((D as any).createElement as any)("button", {
      ...N,
      "aria-checked": k,
      "data-role": (j as any).id,
      key: (j as any).id,
      onClick: (): any => (c as any)((j as any).id),
      role: "radio",
      type: "button"
    }, ((n as any).jsx as any)("span", {
      ...E,
      children: ((n as any).jsx as any)(vt, {
        name: (j as any).icon,
        size: "xl"
      })
    }), ((n as any).jsx as any)("span", {
      className: "sand-1ghz6dp sand-1j61zf2 sand-1goxogb sand-1fc57z9 sand-4jae2b sand-1k6tqyu",
      children: ((f as any)._ as any)((j as any).label)
    }));
  }), (e as any)[12] = f, (e as any)[13] = c, (e as any)[14] = a, (e as any)[15] = S) : S = (e as any)[15];
  let _: any;
  ((e as any)[16] as any) !== (l as any) || ((e as any)[17] as any) !== (S as any) ? (_ = ((n as any).jsx as any)(Ue, {
    pin: "top",
    x: 0,
    y: ml,
    children: ((n as any).jsx as any)("div", {
      ...y,
      "aria-labelledby": l,
      role: "radiogroup",
      children: S
    })
  }), (e as any)[16] = l, (e as any)[17] = S, (e as any)[18] = _) : _ = (e as any)[18];
  let x: any;
  return ((e as any)[19] as any) !== (l as any) || ((e as any)[20] as any) !== (h as any) || ((e as any)[21] as any) !== (g as any) || ((e as any)[22] as any) !== (_ as any) ? (x = ((n as any).jsx as any)(He, {
    footer: h,
    headingId: l,
    title: g,
    children: _
  }), (e as any)[19] = l, (e as any)[20] = h, (e as any)[21] = g, (e as any)[22] = _, (e as any)[23] = x) : x = (e as any)[23], x;
}
function hl(this: any, t: any, e: any): any {
  const s: any = (ln as any)(!1);
  return {
    subscribeFor(l: any): any {
      return (a: any): any => {
        if (!l || ((s as any).get as any)()) return (): any => {};
        let i: any = !1,
          o: any = null;
        return o = ((t as any).start as any)(async (): Promise<any> => {
          try {
            await (e as any)();
          } catch {
            return;
          }
          i || ((s as any).get as any)() || (((s as any).set as any)(!0), (a as any)(), o?.dispose());
        }), (): any => {
          i = !0, o?.dispose(), o = null;
        };
      };
    },
    read: (s as any).get
  };
}
const gl: number = 2500;
function Kt(this: any, t: any = bt): any {
  return (Me as any)({
    name: "onboarding-box-probe",
    intervalMs: gl,
    clock: t
  });
}
const yl: any = (Kt as any)();
function kl(this: any, t: any, e: any): any {
  const s: any = ((z as any).c as any)(10),
    l: any = (e as any) === (void 0 as any) ? yl : e,
    {
      probeBox: a
    }: any = (Nt as any)(),
    {
      foreverBox: i
    }: any = (Et as any)();
  let o: any;
  ((s as any)[0] as any) !== (l as any) || ((s as any)[1] as any) !== (a as any) ? (o = (): any => (hl as any)(l, a), (s as any)[0] = l, (s as any)[1] = a, (s as any)[2] = o) : o = (s as any)[2];
  const [c]: any = ((D as any).useState as any)(o);
  let u: any;
  ((s as any)[3] as any) !== (c as any) || ((s as any)[4] as any) !== (t as any) ? (u = ((c as any).subscribeFor as any)(t), (s as any)[3] = c, (s as any)[4] = t, (s as any)[5] = u) : u = (s as any)[5];
  const f: any = u,
    m: any = ((D as any).useSyncExternalStore as any)(f, (c as any).read, (c as any).read),
    r: any = ((D as any).useSyncExternalStore as any)(((i as any).versionSnapshots as any).subscribe, (i as any).getMostRecentStatus, (i as any).getMostRecentStatus),
    d: any = r?.state ?? null,
    p: any = r?.pull?.percent ?? null;
  let h: any;
  return ((s as any)[6] as any) !== (m as any) || ((s as any)[7] as any) !== (d as any) || ((s as any)[8] as any) !== (p as any) ? (h = {
    isReady: m,
    state: d,
    pullPercent: p
  }, (s as any)[6] = m, (s as any)[7] = d, (s as any)[8] = p, (s as any)[9] = h) : h = (s as any)[9], h;
}
const bl: number = 200,
  xl: number = 500,
  yt: number = 1,
  _l: number = 2,
  hs: number = 4;
function Sl(this: any, t: any): any {
  return {
    stepExit: (mn as any)({
      name: "onboarding-step-exit",
      delayMs: bl,
      clock: t
    }),
    meetScene: (Me as any)({
      name: "onboarding-meet-scene",
      intervalMs: ol,
      clock: t
    }),
    meetVigil: (Me as any)({
      name: "onboarding-meet-vigil",
      intervalMs: rl,
      clock: t
    }),
    demoScene: (Me as any)({
      name: "onboarding-demo-scene",
      intervalMs: Fa,
      clock: t
    }),
    jobsScene: (Me as any)({
      name: "onboarding-jobs-scene",
      intervalMs: Za,
      clock: t
    }),
    handOffScene: (Me as any)({
      name: "onboarding-hand-off-scene",
      intervalMs: xl,
      clock: t
    }),
    boxProbe: (Kt as any)(t)
  };
}
function gs(this: any, t: any): any {
  return t instanceof Gn && (((t as any).failure as any).code as any) === (Hn as any) ? ((kt as any)._ as any)({
    id: "tbe1hz"
  }) : (fn as any)(t);
}
const jl: any = {
    light: "cursor-light",
    dark: "cursor-dark"
  },
  Nl: any = {
    screenFooterNotice: {
      ks0D6T: "sand-dusixz",
      $$css: !0
    }
  };
function Gs(this: any, t: any): any {
  return `sand-onboarding-${t}-heading`;
}
function El(this: any, t: any): any {
  (El as any).d = 1101;
  const e: any = ((z as any).c as any)(111),
    {
      onComplete: s,
      presentation: l,
      clock: a
    }: any = t,
    i: any = (a as any) === (void 0 as any) ? bt : a,
    o: any = (Sa as any)(),
    {
      i18n: c
    }: any = (fe as any)(),
    {
      platform: u
    }: any = (Rn as any)(),
    {
      markOnboardingSeen: f,
      reportOnboardingStep: m,
      reportOnboardingCompleted: r
    }: any = (Nt as any)(),
    {
      markSeen: d
    }: any = (Kn as any)(),
    {
      resolved: p
    }: any = (In as any)(),
    {
      isFullscreen: h
    }: any = (Pn as any)(),
    g: any = (Et as any)(),
    {
      launcher: y,
      firstRun: S
    }: any = g,
    _: any = (Mn as any)(),
    x: any = (Xn as any)(),
    j: any = (((o as any).status as any).kind as any) === ("logged-in" as any),
    k: any = (Bn as any)(),
    N: any = (zn as any)(),
    E: any = (Dn as any)(),
    O: any = (Ln as any)();
  let C: any;
  ((e as any)[0] as any) !== (k as any) ? (C = {
    showRole: k
  }, (e as any)[0] = k, (e as any)[1] = C) : C = (e as any)[1];
  const v: any = (qn as any)(C),
    w: any = ($n as any)(k);
  let R: any;
  ((e as any)[2] as any) !== ((v as any).entry as any) || ((e as any)[3] as any) !== (k as any) ? (R = {
    entry: (v as any).entry,
    showRole: k
  }, (e as any)[2] = (v as any).entry, (e as any)[3] = k, (e as any)[4] = R) : R = (e as any)[4];
  const I: any = R,
    {
      entry: B
    }: any = (Fn as any)(),
    ee: any = ((B as any).kind as any) === ("setup" as any) ? (B as any).switchedFrom : null,
    [H, U]: any = ((D as any).useState as any)(!1),
    Z: any = (ee as any) == (null as any) || H,
    q: any = (Ta as any)((v as any).role),
    [L, $]: any = ((D as any).useState as any)(null);
  let W: any;
  ((e as any)[5] as any) !== ((v as any).step as any) ? (W = (): any => ({
    step: (v as any).step,
    exitingStep: null
  }), (e as any)[5] = (v as any).step, (e as any)[6] = W) : W = (e as any)[6];
  const [M, Q]: any = ((D as any).useState as any)(W);
  ((M as any).step as any) !== ((v as any).step as any) && (Q as any)({
    step: (v as any).step,
    exitingStep: (M as any).step
  });
  const T: any = (M as any).step;
  let F: any;
  ((e as any)[7] as any) !== (i as any) ? (F = (): any => (Sl as any)(i), (e as any)[7] = i, (e as any)[8] = F) : F = (e as any)[8];
  const [A]: any = ((D as any).useState as any)(F),
    V: any = (kl as any)(j, (A as any).boxProbe),
    se: any = ((D as any).useRef as any)(null);
  let ne: any;
  ((e as any)[9] as any) !== (d as any) || ((e as any)[10] as any) !== (m as any) || ((e as any)[11] as any) !== (T as any) || ((e as any)[12] as any) !== (I as any) ? (ne = (): any => {
    const b: any = (se as any).current;
    if ((b as any) === (T as any)) return;
    (se as any).current = T, (b as any) === ("landing" as any) && (d as any)();
    const P: any = (Na as any)({
      from: b ?? T,
      to: T
    }, I);
    (P as any) != (null as any) && (m as any)(P);
  }, (e as any)[9] = d, (e as any)[10] = m, (e as any)[11] = T, (e as any)[12] = I, (e as any)[13] = ne) : ne = (e as any)[13], (on as any)(ne);
  const G: any = ((M as any).exitingStep as any) != (null as any);
  let J: any;
  ((e as any)[14] as any) !== (G as any) || ((e as any)[15] as any) !== ((A as any).stepExit as any) ? (J = (ja as any)((A as any).stepExit, G), (e as any)[14] = G, (e as any)[15] = (A as any).stepExit, (e as any)[16] = J) : J = (e as any)[16];
  const ae: any = J,
    K: any = ((D as any).useSyncExternalStore as any)((ae as any).subscribe, (ae as any).read, (ae as any).read) ? null : (M as any).exitingStep;
  let X: any;
  ((e as any)[17] as any) !== (c as any) ? (X = (Ft as any)(c), (e as any)[17] = c, (e as any)[18] = X) : X = (e as any)[18];
  const de: any = (Number as any)((X as any).length);
  let ce: any;
  ((e as any)[19] as any) !== ((M as any).step as any) ? (ce = ((M as any).step as any) === ("meet" as any) && !(xe as any)(), (e as any)[19] = (M as any).step, (e as any)[20] = ce) : ce = (e as any)[20];
  const ie: any = ce;
  let je: any, Ve: any;
  ((e as any)[21] as any) !== (ie as any) || ((e as any)[22] as any) !== (de as any) || ((e as any)[23] as any) !== ((A as any).meetScene as any) || ((e as any)[24] as any) !== ((A as any).meetVigil as any) ? (je = (dl as any)(de), Ve = (ms as any)((A as any).meetScene, {
    isActive: ie,
    limit: je,
    initial: ie ? 0 : je,
    pastLimit: (A as any).meetVigil
  }), (e as any)[21] = ie, (e as any)[22] = de, (e as any)[23] = (A as any).meetScene, (e as any)[24] = (A as any).meetVigil, (e as any)[25] = je, (e as any)[26] = Ve) : (je = (e as any)[25], Ve = (e as any)[26]);
  const bs: any = Ve,
    xs: any = ((D as any).useSyncExternalStore as any)((bs as any).subscribe, (bs as any).read, (bs as any).read),
    _s: any = (ul as any)(xs, de),
    Yt: any = ((Math as any).max as any)(0, (xs as any) - (je as any));
  let Ke: any;
  ((e as any)[27] as any) !== ((M as any).step as any) ? (Ke = ((M as any).step as any) === ("computer-demo" as any) && !(xe as any)(), (e as any)[27] = (M as any).step, (e as any)[28] = Ke) : Ke = (e as any)[28];
  const Xe: any = Ke,
    Ss: any = Xe ? 0 : pt;
  let Je: any;
  ((e as any)[29] as any) !== (Xe as any) || ((e as any)[30] as any) !== (Ss as any) || ((e as any)[31] as any) !== ((A as any).demoScene as any) ? (Je = (ms as any)((A as any).demoScene, {
    isActive: Xe,
    limit: pt,
    initial: Ss
  }), (e as any)[29] = Xe, (e as any)[30] = Ss, (e as any)[31] = (A as any).demoScene, (e as any)[32] = Je) : Je = (e as any)[32];
  const js: any = Je,
    Zt: any = ((D as any).useSyncExternalStore as any)((js as any).subscribe, (js as any).read, (js as any).read);
  let Ye: any;
  ((e as any)[33] as any) !== ((M as any).step as any) ? (Ye = ((M as any).step as any) === ("jobs" as any) && !(xe as any)(), (e as any)[33] = (M as any).step, (e as any)[34] = Ye) : Ye = (e as any)[34];
  const Ze: any = Ye,
    Ns: any = Ze ? 0 : gt;
  let Qe: any;
  ((e as any)[35] as any) !== (Ze as any) || ((e as any)[36] as any) !== (Ns as any) || ((e as any)[37] as any) !== ((A as any).jobsScene as any) ? (Qe = (ms as any)((A as any).jobsScene, {
    isActive: Ze,
    limit: gt,
    initial: Ns
  }), (e as any)[35] = Ze, (e as any)[36] = Ns, (e as any)[37] = (A as any).jobsScene, (e as any)[38] = Qe) : Qe = (e as any)[38];
  const Es: any = Qe,
    Qt: any = ((D as any).useSyncExternalStore as any)((Es as any).subscribe, (Es as any).read, (Es as any).read),
    me: any = ((M as any).step as any) === (qe as any) && ((v as any).entry as any) !== ("setup" as any);
  let es: any;
  ((e as any)[39] as any) !== (me as any) ? (es = me && !(xe as any)(), (e as any)[39] = me, (e as any)[40] = es) : es = (e as any)[40];
  const ss: any = es,
    vs: any = ss ? 0 : hs;
  let ts: any;
  ((e as any)[41] as any) !== (ss as any) || ((e as any)[42] as any) !== (vs as any) || ((e as any)[43] as any) !== ((A as any).handOffScene as any) ? (ts = (ms as any)((A as any).handOffScene, {
    isActive: ss,
    limit: hs,
    initial: vs
  }), (e as any)[41] = ss, (e as any)[42] = vs, (e as any)[43] = (A as any).handOffScene, (e as any)[44] = ts) : ts = (e as any)[44];
  const ws: any = ts,
    en: any = ((D as any).useSyncExternalStore as any)((ws as any).subscribe, (ws as any).read, (ws as any).read),
    Ts: any = (_s as any).isThinking ? (sa as any)(Yt) : (fl as any)(xs),
    ge: any = (Zt as any) - (1 as any),
    ns: any = Qt,
    ye: any = me ? en : -1;
  let as: any;
  ((e as any)[45] as any) !== (((g as any).auth as any).snapshots as any) ? (as = (): any => (Un as any)((((((g as any).auth as any).snapshots as any).get as any)() as any).status), (e as any)[45] = ((g as any).auth as any).snapshots, (e as any)[46] = as) : as = (e as any)[46];
  const ls: any = as,
    Os: any = ((D as any).useRef as any)(null),
    os: any = ((D as any).useRef as any)(-1),
    Zs: any = vl,
    As: any = (b: any): any => {
      if ((b as any).isShellEntered || ((Os as any).current as any) !== (b as any) || ((ls as any)() as any) !== ((b as any).accountSlot as any)) return;
      const P: any = (os as any).current,
        re: any = !(b as any).isChoreographed || (P as any) >= (_l as any),
        pe: any = (b as any).isChoreographed && (P as any) >= (hs as any);
      (((b as any).outcome as any) == (null as any) ? !pe : (((b as any).outcome as any).kind as any) !== ("created" as any) || !re) || ((b as any).isShellEntered = !0, ((b as any).outcome?.kind as any) === ("created" as any) ? (_ as any)((b as any).agentId) : ((((g as any).roster as any).previewCreatedAgent as any)({
        id: (b as any).agentId,
        name: et,
        description: cn,
        avatarShape: dn,
        avatarColor: rn,
        harness: "temporal"
      }), (b as any).creation = ((y as any).beginCreation as any)({
        name: et,
        expectsContent: !0,
        kind: "teammate"
      }), (((b as any).creation as any).setAgentId as any)((b as any).agentId)), (r as any)({
        ...((q as any) != (null as any) ? {
          role: (q as any).id
        } : {}),
        tools: []
      }), (s as any)());
    },
    sn: any = async (b: any): Promise<any> => {
      if (!k || (q as any) == (null as any)) return;
      const P: any = (Aa as any)((re: any): any => ((c as any)._ as any)(re), q);
      ((P as any).length as any) !== (0 as any) && ((O as any)(), E && (await (((Ca as any)(P, {
        createAgent: ((g as any).roster as any).createAgent,
        kickstart: (y as any).kickstartAwaitingFirstMessage,
        isCurrentAccount: (): any => ((ls as any)() as any) === ((b as any).accountSlot as any)
      }) as any).catch as any)((re: any): any => {
        (x as any)({
          kind: "error",
          text: (gs as any)(re)
        });
      })));
    },
    tn: any = async (b: any): Promise<any> => {
      const P: any = await (((g as any).onboardingBot as any).provision as any)((b as any).accountSlot, {
        creatorContext: k ? (Mt as any)(q) : ""
      });
      if ((b as any).outcome = P, ((P as any).kind as any) === ("created" as any)) {
        (b as any).isShellEntered ? ((b as any).creation?.isAbandoned() as any) === (!1 as any) && (_ as any)((b as any).agentId) : (As as any)(b), await (((((f as any)() as any).then as any)((): any => ((ls as any)() as any) === ((b as any).accountSlot as any) ? ((y as any).kickstartAwaitingFirstMessage as any)((b as any).agentId) : void 0) as any).catch as any)((re: any): any => {
          (x as any)({
            kind: "error",
            text: (gs as any)(re)
          });
        }), await (sn as any)(b);
        return;
      }
      (((g as any).roster as any).dropCreatedAgentPreview as any)((b as any).agentId), ((((g as any).onboardingRun as any).botHandOff as any).land as any)((b as any).agentId), (b as any).creation?.fail(), (Ea as any)((b as any).claim), ((P as any).kind as any) === ("failed" as any) && ((b as any).isShellEntered ? (x as any)({
        kind: "error",
        text: ((kt as any)._ as any)({
          id: "YQw0qR"
        })
      }) : ($ as any)((gs as any)((P as any).error)));
    },
    Ne: any = async (b: any): Promise<any> => {
      ($ as any)(null);
      const P: any = (b as any).isChoreographed && !(xe as any)();
      P && ((os as any).current = -1);
      const re: any = ((w as any).finishClaim as any)(),
        pe: any = await (va as any)(re, {
          currentAccountSlot: ls,
          isAccountOnboarded: (S as any).isAccountOnboarded,
          reserveBot: ((g as any).onboardingBot as any).reserve,
          markSeen: f
        });
      if (((pe as any).kind as any) === ("failed" as any)) {
        ($ as any)((gs as any)((pe as any).error));
        return;
      }
      if (((pe as any).kind as any) === ("already-onboarded" as any)) {
        (r as any)({
          ...((q as any) != (null as any) ? {
            role: (q as any).id
          } : {}),
          tools: []
        }), (s as any)();
        return;
      }
      if (((pe as any).kind as any) !== ("staged" as any)) return;
      const fs: any = {
        claim: re,
        agentId: (pe as any).agentId,
        accountSlot: (pe as any).accountSlot,
        isChoreographed: P,
        outcome: null,
        creation: null,
        isShellEntered: !1
      };
      (Os as any).current = fs, (tn as any)(fs), P && ((os as any).current as any) >= (yt as any) && ((((g as any).onboardingRun as any).botHandOff as any).begin as any)((fs as any).agentId, (Zs as any)()), (As as any)(fs);
    },
    Cs: any = (b: any): any => {
      (os as any).current = b;
      const P: any = (Os as any).current;
      if ((P as any) != (null as any)) {
        if ((b as any) === (yt as any)) {
          ((((g as any).onboardingRun as any).botHandOff as any).begin as any)((P as any).agentId, (Zs as any)());
          return;
        }
        (As as any)(P);
      }
    };
  let is: any;
  ((e as any)[47] as any) !== (T as any) || ((e as any)[48] as any) !== (I as any) ? (is = (St as any)(T, I), (e as any)[47] = T, (e as any)[48] = I, (e as any)[49] = is) : is = (e as any)[49];
  const Rs: any = is;
  let rs: any;
  ((e as any)[50] as any) !== (o as any) || ((e as any)[51] as any) !== (j as any) || ((e as any)[52] as any) !== (w as any) ? (rs = (): any => {
    if (j) {
      ((w as any).advance as any)("landing");
      return;
    }
    ((o as any).login as any)();
  }, (e as any)[50] = o, (e as any)[51] = j, (e as any)[52] = w, (e as any)[53] = rs) : rs = (e as any)[53];
  const nn: any = rs;
  let Ee: any;
  ((e as any)[54] as any) !== (ge as any) ? (Ee = (Ga as any)(ge), (e as any)[54] = ge, (e as any)[55] = Ee) : Ee = (e as any)[55];
  let ds: any;
  ((e as any)[56] as any) !== (ge as any) || ((e as any)[57] as any) !== (ye as any) || ((e as any)[58] as any) !== (ns as any) || ((e as any)[59] as any) !== (Ts as any) || ((e as any)[60] as any) !== (T as any) || ((e as any)[61] as any) !== (Ee as any) ? (ds = {
    ...ea,
    step: T,
    meetBeat: Ts,
    demoBeat: ge,
    demoCursor: Ee,
    jobsBeat: ns,
    handOffBeat: ye
  }, (e as any)[56] = ge, (e as any)[57] = ye, (e as any)[58] = ns, (e as any)[59] = Ts, (e as any)[60] = T, (e as any)[61] = Ee, (e as any)[62] = ds) : ds = (e as any)[62];
  const Is: any = ds,
    Qs: any = (b: any): any => {
      const P: any = (Gs as any)(b);
      switch (b) {
        case "landing":
          return ((n as any).jsxs as any)("div", {
            className: "sand-10l6tqk sand-10a8y8t sand-rvj5dj sand-1ku5rj1 sand-b3r6kr",
            children: [((n as any).jsx as any)(Jn, {
              auth: o,
              headingId: P,
              onSignIn: nn
            }), ((n as any).jsx as any)("div", {
              className: "sand-10l6tqk sand-17y0mx6 sand-3h4tne sand-78zum5 sand-l56j7k sand-4l9tsp",
              children: ((n as any).jsx as any)(Yn, {
                style: (Nl as any).screenFooterNotice
              })
            })]
          });
        case "meet":
          return ((n as any).jsx as any)(Gt, {
            headingId: P,
            onForward: (): any => ((w as any).advance as any)(b),
            send: (cl as any)(_s, ie),
            typedCount: (_s as any).typedCount
          });
        case "computer-demo":
          return ((n as any).jsx as any)(Lt, {
            demoBeat: ge,
            headingId: P,
            onBack: (): any => ((w as any).goBack as any)(b),
            onForward: (): any => ((w as any).advance as any)(b)
          });
        case "jobs":
          return ((n as any).jsx as any)($t, {
            headingId: P,
            jobsBeat: ns,
            onBack: (): any => ((w as any).goBack as any)(b),
            onForward: (): any => {
              if ((N as any)(), k) {
                ((w as any).advance as any)(b);
                return;
              }
              ((w as any).enterHandOff as any)(), (Ne as any)({
                isChoreographed: !0
              });
            }
          });
        case "role":
          return ((n as any).jsx as any)(Vt, {
            finishesWalk: !0,
            headingId: P,
            onBack: (): any => ((w as any).goBack as any)(b),
            onForward: (): any => {
              ((w as any).enterHandOff as any)(), (Ne as any)({
                isChoreographed: !0
              });
            },
            onSelect: (w as any).chooseRole,
            selectedRole: (v as any).role
          });
        case "tools":
        case "create":
          return null;
        case qe:
          return me && (L as any) == (null as any) && (ye as any) < (hs as any) ? null : ((n as any).jsx as any)("div", {
            className: "sand-10l6tqk sand-10a8y8t sand-rvj5dj sand-1ku5rj1 sand-b3r6kr",
            children: ((n as any).jsx as any)(qt, {
              computerState: (V as any).state,
              error: L,
              headingId: P,
              isComputerReady: (V as any).isReady,
              onRetry: (): any => {
                (Ne as any)({
                  isChoreographed: !1
                });
              },
              pullPercent: (V as any).pullPercent
            })
          });
      }
    },
    Ps: any = !h,
    {
      WindowControls: Ms
    }: any = l;
  let ue: any, ke: any, ve: any;
  if (((e as any)[63] as any) !== (Ps as any)) {
    ke = ({
      0: {
        className: "sand-41iwjn sand-ixxii4 sand-10a8y8t sand-rvj5dj sand-1mkdm3x sand-5o4joa sand-euugli sand-2lwn1j sand-b3r6kr sand-1ua6jya sand-tyxrsu sand-1acoasx"
      },
      1: {
        className: "sand-ixxii4 sand-10a8y8t sand-rvj5dj sand-1mkdm3x sand-5o4joa sand-euugli sand-2lwn1j sand-b3r6kr sand-1ua6jya sand-tyxrsu sand-1acoasx sand-iqdzx4"
      }
    } as any)[(!!Ps as any) << (0 as any)];
    let b: any;
    ((e as any)[67] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (b = {
      className: "sand-10l6tqk sand-17y0mx6 sand-13vifvy sand-dd8jsf sand-1a4o4su sand-17v0fby sand-htitgo"
    }, (e as any)[67] = b) : b = (e as any)[67], ue = b, ve = (oe as any)("sand-onboarding", (ke as any).className), (e as any)[63] = Ps, (e as any)[64] = ue, (e as any)[65] = ke, (e as any)[66] = ve;
  } else ue = (e as any)[64], ke = (e as any)[65], ve = (e as any)[66];
  const Bs: any = (jl as any)[p],
    an: any = (ke as any).style;
  let we: any;
  ((e as any)[68] as any) !== ((ue as any).className as any) || ((e as any)[69] as any) !== ((ue as any).style as any) ? (we = ((n as any).jsx as any)("span", {
    "aria-hidden": !0,
    className: (ue as any).className,
    style: (ue as any).style
  }), (e as any)[68] = (ue as any).className, (e as any)[69] = (ue as any).style, (e as any)[70] = we) : we = (e as any)[70];
  const zs: any = (K as any) != (null as any) ? ((n as any).jsx as any)(Ks, {
      headingId: (Gs as any)(K),
      isExiting: !0,
      children: (Qs as any)(K)
    }, `exit-${K}`) : null,
    Ds: any = Ks;
  let Te: any;
  ((e as any)[71] as any) !== (T as any) ? (Te = (Gs as any)(T), (e as any)[71] = T, (e as any)[72] = Te) : Te = (e as any)[72];
  const Ls: any = (Qs as any)(T);
  let Oe: any;
  ((e as any)[73] as any) !== (Ds as any) || ((e as any)[74] as any) !== (T as any) || ((e as any)[75] as any) !== (Te as any) || ((e as any)[76] as any) !== (Ls as any) ? (Oe = ((n as any).jsx as any)(Ds, {
    headingId: Te,
    children: Ls
  }, T), (e as any)[73] = Ds, (e as any)[74] = T, (e as any)[75] = Te, (e as any)[76] = Ls, (e as any)[77] = Oe) : Oe = (e as any)[77];
  let cs: any;
  ((e as any)[78] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (cs = {
    className: "sand-1agbcgv sand-crlgei sand-1n2onr6 sand-47corl sand-1vjfegm"
  }, (e as any)[78] = cs) : cs = (e as any)[78];
  let Ae: any;
  ((e as any)[79] as any) !== (Is as any) ? (Ae = ((n as any).jsx as any)("div", {
    className: (cs as any).className,
    children: ((n as any).jsx as any)(It, {
      scene: Is
    })
  }), (e as any)[79] = Is, (e as any)[80] = Ae) : Ae = (e as any)[80];
  let Ce: any;
  ((e as any)[81] as any) !== (Ms as any) ? (Ce = ((n as any).jsx as any)(Ms, {}), (e as any)[81] = Ms, (e as any)[82] = Ce) : Ce = (e as any)[82];
  let Re: any;
  ((e as any)[83] as any) !== (H as any) || ((e as any)[84] as any) !== (ee as any) ? (Re = (ee as any) != (null as any) && !H ? ((n as any).jsx as any)(Bt, {
    departed: ee,
    onSetUp: (): any => (U as any)(!0)
  }) : null, (e as any)[83] = H, (e as any)[84] = ee, (e as any)[85] = Re) : Re = (e as any)[85];
  let Ie: any;
  ((e as any)[86] as any) !== (Z as any) || ((e as any)[87] as any) !== ((v as any).entry as any) || ((e as any)[88] as any) !== (Ne as any) || ((e as any)[89] as any) !== (T as any) ? (Ie = ((v as any).entry as any) === ("setup" as any) && (T as any) === (qe as any) && Z ? ((n as any).jsx as any)(Xt, {
    start: (): any => (Ne as any)({
      isChoreographed: !1
    })
  }) : null, (e as any)[86] = Z, (e as any)[87] = (v as any).entry, (e as any)[88] = Ne, (e as any)[89] = T, (e as any)[90] = Ie) : Ie = (e as any)[90];
  let Pe: any;
  ((e as any)[91] as any) !== (ye as any) || ((e as any)[92] as any) !== (Cs as any) || ((e as any)[93] as any) !== (me as any) || ((e as any)[94] as any) !== (L as any) ? (Pe = me && (L as any) == (null as any) ? ((n as any).jsx as any)(Jt, {
    beat: ye,
    onBeat: Cs
  }) : null, (e as any)[91] = ye, (e as any)[92] = Cs, (e as any)[93] = me, (e as any)[94] = L, (e as any)[95] = Pe) : Pe = (e as any)[95];
  let us: any;
  return ((e as any)[96] as any) !== (u as any) || ((e as any)[97] as any) !== ((ke as any).style as any) || ((e as any)[98] as any) !== (T as any) || ((e as any)[99] as any) !== (Rs as any) || ((e as any)[100] as any) !== (ve as any) || ((e as any)[101] as any) !== (Bs as any) || ((e as any)[102] as any) !== (we as any) || ((e as any)[103] as any) !== (zs as any) || ((e as any)[104] as any) !== (Oe as any) || ((e as any)[105] as any) !== (Ae as any) || ((e as any)[106] as any) !== (Ce as any) || ((e as any)[107] as any) !== (Re as any) || ((e as any)[108] as any) !== (Ie as any) || ((e as any)[109] as any) !== (Pe as any) ? (us = ((n as any).jsxs as any)("div", {
    className: ve,
    "data-platform": u,
    "data-step": T,
    "data-step-index": Rs,
    "data-theme": Bs,
    style: an,
    children: [we, zs, Oe, Ae, Ce, Re, Ie, Pe]
  }), (e as any)[96] = u, (e as any)[97] = (ke as any).style, (e as any)[98] = T, (e as any)[99] = Rs, (e as any)[100] = ve, (e as any)[101] = Bs, (e as any)[102] = we, (e as any)[103] = zs, (e as any)[104] = Oe, (e as any)[105] = Ae, (e as any)[106] = Ce, (e as any)[107] = Re, (e as any)[108] = Ie, (e as any)[109] = Pe, (e as any)[110] = us) : us = (e as any)[110], us;
}
function vl(this: any): any {
  const t: any = (ca as any)();
  return {
    x: (((window as any).innerWidth as any) / (2 as any) as any) + ((t as any).x as any),
    y: (((window as any).innerHeight as any) / (2 as any) as any) + ((t as any).y as any),
    sizePx: (t as any).sizePx
  };
}
function Xt(this: any, t: any): any {
  (Xt as any).d = 1102;
  const e: any = ((z as any).c as any)(2),
    {
      start: s
    }: any = t,
    l: any = ((D as any).useRef as any)(!1);
  let a: any;
  return ((e as any)[0] as any) !== (s as any) ? (a = (): any => ((l as any).current || ((l as any).current = !0, (s as any)()), wl), (e as any)[0] = s, (e as any)[1] = a) : a = (e as any)[1], (Xs as any)(a), null;
}
function wl(this: any): any {}
function Jt(this: any, t: any): any {
  (Jt as any).d = 1100;
  const e: any = ((z as any).c as any)(3),
    {
      beat: s,
      onBeat: l
    }: any = t,
    a: any = ((D as any).useRef as any)(-1);
  let i: any;
  return ((e as any)[0] as any) !== (s as any) || ((e as any)[1] as any) !== (l as any) ? (i = (): any => (((a as any).current as any) < (s as any) && ((a as any).current = s, (l as any)(s)), Tl), (e as any)[0] = s, (e as any)[1] = l, (e as any)[2] = i) : i = (e as any)[2], (Xs as any)(i), null;
}
function Tl(this: any): any {}
function Ks(this: any, t: any): any {
  (Ks as any).d = 1103;
  const e: any = ((z as any).c as any)(17),
    {
      isExiting: s,
      headingId: l,
      children: a
    }: any = t,
    i: any = (s as any) === (void 0 as any) ? !1 : s;
  let o: any, c: any, u: any, f: any;
  if (((e as any)[0] as any) !== (i as any)) {
    o = ({
      0: {
        className: "sand-1agbcgv sand-crlgei sand-1n2onr6 sand-euugli sand-2lwn1j sand-b3r6kr sand-gyzkii sand-1u6grsq sand-1yruv16 sand-1u6ievf sand-r1vbnl"
      },
      1: {
        className: "sand-1agbcgv sand-crlgei sand-1n2onr6 sand-euugli sand-2lwn1j sand-b3r6kr sand-1u6ievf sand-1wlzrib sand-1h2r1cz sand-ykr0s4 sand-1u6grsq sand-47corl"
      }
    } as any)[(!!i as any) << (0 as any)];
    let p: any;
    ((e as any)[5] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (p = {
      className: "sand-10l6tqk sand-10a8y8t"
    }, (e as any)[5] = p) : p = (e as any)[5], c = p, u = i || void 0, f = (oe as any)("sand-onboarding__step", (o as any).className), (e as any)[0] = i, (e as any)[1] = o, (e as any)[2] = c, (e as any)[3] = u, (e as any)[4] = f;
  } else o = (e as any)[1], c = (e as any)[2], u = (e as any)[3], f = (e as any)[4];
  const m: any = i || void 0;
  let r: any;
  ((e as any)[6] as any) !== (a as any) || ((e as any)[7] as any) !== (l as any) || ((e as any)[8] as any) !== ((c as any).className as any) || ((e as any)[9] as any) !== ((c as any).style as any) ? (r = ((n as any).jsx as any)("main", {
    "aria-labelledby": l,
    className: (c as any).className,
    style: (c as any).style,
    children: a
  }), (e as any)[6] = a, (e as any)[7] = l, (e as any)[8] = (c as any).className, (e as any)[9] = (c as any).style, (e as any)[10] = r) : r = (e as any)[10];
  let d: any;
  return ((e as any)[11] as any) !== ((o as any).style as any) || ((e as any)[12] as any) !== (u as any) || ((e as any)[13] as any) !== (f as any) || ((e as any)[14] as any) !== (m as any) || ((e as any)[15] as any) !== (r as any) ? (d = ((n as any).jsx as any)("div", {
    "aria-hidden": u,
    className: f,
    inert: m,
    style: (o as any).style,
    children: r
  }), (e as any)[11] = (o as any).style, (e as any)[12] = u, (e as any)[13] = f, (e as any)[14] = m, (e as any)[15] = r, (e as any)[16] = d) : d = (e as any)[16], d;
}
export { El as OnboardingFlow };
//# debugId=a19b9941-c86c-419c-9221-199764e32f12
