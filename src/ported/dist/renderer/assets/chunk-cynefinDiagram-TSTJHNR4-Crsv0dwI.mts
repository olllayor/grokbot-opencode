declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "7af3814a-a303-487c-b1ef-13ee765163fd", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-7af3814a-a303-487c-b1ef-13ee765163fd");
  } catch (e: any) {}
} as any)();
import { p as xt } from "./chunk-chunk-JWPE2WC7-firmgLgH.js";
import { _ as s, s as gt, g as $t, p as bt, o as wt, a as Ct, b as vt, l as O, F as Dt, e as kt, q as Tt, B as U, z as Q, D as At, W as ot } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { p as Bt } from "./chunk-cynefin-VYW2F7L2-ChVxrOa1.js";
import "./index.eager-vendor-Qbf9YA6n.js";
var rt: any = (s as any)((): any => ({
    domains: new (Map as any)(),
    transitions: []
  }), "createDefaultData"),
  H: any = (rt as any)(),
  St: any = (s as any)((): any => (H as any).domains, "getDomains"),
  Mt: any = (s as any)((): any => (H as any).transitions, "getTransitions"),
  zt: any = (s as any)((t: any): any => {
    if (t) for (const e of t) {
      const n: any = (e as any).domain,
        a: any = ((((e as any).items ?? []) as any).map as any)((c: any): any => ({
          label: (c as any).label
        }));
      (((H as any).domains as any).set as any)(n, {
        name: n,
        items: a
      });
    }
  }, "setDomains"),
  Lt: any = (s as any)((t: any): any => {
    t && ((H as any).transitions = ((((t as any).filter as any)((e: any): any => ((e as any).from as any) === ((e as any).to as any) ? (((O as any).warn as any)(`Cynefin: self-loop transition on domain "${(e as any).from}" is not meaningful and will be skipped.`), !1) : !0) as any).map as any)((e: any): any => ({
      from: (e as any).from,
      to: (e as any).to,
      label: (e as any).label || void 0
    })));
  }, "setTransitions"),
  Nt: any = (s as any)((): any => (U as any)({
    ...(At as any).cynefin,
    ...((Q as any)() as any).cynefin
  }), "getConfig"),
  Pt: any = (s as any)((): any => {
    (Tt as any)(), H = (rt as any)();
  }, "clear"),
  Y: any = {
    getDomains: St,
    getTransitions: Mt,
    setDomains: zt,
    setTransitions: Lt,
    getConfig: Nt,
    clear: Pt,
    setAccTitle: vt,
    getAccTitle: Ct,
    setDiagramTitle: wt,
    getDiagramTitle: bt,
    getAccDescription: $t,
    setAccDescription: gt
  },
  Wt: any = (s as any)((t: any): any => {
    (xt as any)(t, Y), ((Y as any).setDomains as any)((t as any).domains), ((Y as any).setTransitions as any)((t as any).transitions);
  }, "populate"),
  It: any = {
    parse: (s as any)(async (t: any): Promise<any> => {
      const e: any = await (Bt as any)("cynefin", t);
      ((O as any).debug as any)(e), (Wt as any)(e);
    }, "parse")
  };
function E(this: any, t: any): any {
  let e: any = ((t as any) + (1831565813 as any) as any) | (0 as any);
  return e = ((Math as any).imul as any)((e as any) ^ ((e as any) >>> (15 as any) as any), (e as any) | (1 as any)), e ^= (e as any) + (((Math as any).imul as any)((e as any) ^ ((e as any) >>> (7 as any) as any), (e as any) | (61 as any)) as any), ((((e as any) ^ ((e as any) >>> (14 as any) as any)) as any) >>> (0 as any) as any) / (4294967296 as any);
}
(s as any)(E, "seededRandom");
function st(this: any, t: any): any {
  let e: any = 0;
  for (let n: any = 0; (n as any) < ((t as any).length as any); n++) {
    const a: any = ((t as any).charCodeAt as any)(n);
    e = (((e as any) << (5 as any) as any) - (e as any) as any) + (a as any), e |= 0;
  }
  return e;
}
(s as any)(st, "hashString");
function it(this: any, t: any, e: any): any {
  return (typeof t as any) == ("number" as any) && ((Number as any).isFinite as any)(t) && (t as any) !== (0 as any) ? t : (st as any)(e);
}
(s as any)(it, "resolveSeed");
function ct(this: any, t: any, e: any, n: any, a: any): any {
  const c: any = (t as any) / (2 as any),
    m: any = a ?? (t as any) * (.015 as any),
    v: number = 7,
    I: any = (e as any) / (v as any),
    d: any = [];
  for (let o: any = 0; (o as any) <= (v as any); o++) {
    const p: any = ((((E as any)((n as any) + ((o as any) * (17 as any) as any)) as any) * (m as any) as any) * (2 as any) as any) - (m as any);
    ((d as any).push as any)({
      x: (c as any) + (p as any),
      y: (o as any) * (I as any)
    });
  }
  let D: any = `M${((d as any)[0] as any).x},${((d as any)[0] as any).y}`;
  for (let o: any = 0; (o as any) < (((d as any).length as any) - (1 as any) as any); o++) {
    const p: any = (d as any)[o],
      i: any = (d as any)[(o as any) + (1 as any)],
      f: any = (((p as any).y as any) + ((i as any).y as any) as any) / (2 as any),
      b: any = ((o as any) % (2 as any) as any) === (0 as any) ? 1 : -1,
      h: any = (((m as any) * (1.5 as any) as any) * (b as any) as any) * ((E as any)(((n as any) + ((o as any) * (31 as any) as any) as any) + (7 as any)) as any),
      F: any = ((p as any).x as any) + (h as any),
      R: any = f,
      _: any = ((i as any).x as any) - (h as any);
    D += ` C${F},${R} ${_},${f} ${(i as any).x},${(i as any).y}`;
  }
  return D;
}
(s as any)(ct, "generateFoldPath");
function lt(this: any, t: any, e: any, n: any, a: any): any {
  const c: any = (e as any) / (2 as any),
    m: any = a ?? (e as any) * (.015 as any),
    v: number = 7,
    I: any = (t as any) / (v as any),
    d: any = [];
  for (let o: any = 0; (o as any) <= (v as any); o++) {
    const p: any = ((((E as any)((n as any) + ((o as any) * (23 as any) as any)) as any) * (m as any) as any) * (2 as any) as any) - (m as any);
    ((d as any).push as any)({
      x: (o as any) * (I as any),
      y: (c as any) + (p as any)
    });
  }
  let D: any = `M${((d as any)[0] as any).x},${((d as any)[0] as any).y}`;
  for (let o: any = 0; (o as any) < (((d as any).length as any) - (1 as any) as any); o++) {
    const p: any = (d as any)[o],
      i: any = (d as any)[(o as any) + (1 as any)],
      f: any = (((p as any).x as any) + ((i as any).x as any) as any) / (2 as any),
      b: any = ((o as any) % (2 as any) as any) === (0 as any) ? 1 : -1,
      h: any = (((m as any) * (1.5 as any) as any) * (b as any) as any) * ((E as any)(((n as any) + ((o as any) * (37 as any) as any) as any) + (11 as any)) as any),
      F: any = f,
      R: any = ((p as any).y as any) + (h as any),
      _: any = f,
      z: any = ((i as any).y as any) - (h as any);
    D += ` C${F},${R} ${_},${z} ${(i as any).x},${(i as any).y}`;
  }
  return D;
}
(s as any)(lt, "generateHorizontalBoundary");
function dt(this: any, t: any, e: any): any {
  const n: any = (t as any) / (2 as any),
    a: any = (e as any) * (.5 as any),
    c: any = e,
    m: any = (t as any) * (.03 as any);
  return (([`M${n},${a}`, `C${(n as any) + (m as any)},${(a as any) + (((c as any) - (a as any) as any) * (.2 as any) as any)}`, `${(n as any) - ((m as any) * (1.5 as any) as any)},${(a as any) + (((c as any) - (a as any) as any) * (.55 as any) as any)}`, `${(n as any) + ((m as any) * (.5 as any) as any)},${(a as any) + (((c as any) - (a as any) as any) * (.75 as any) as any)}`, `C${(n as any) - (m as any)},${(a as any) + (((c as any) - (a as any) as any) * (.85 as any) as any)}`, `${(n as any) + ((m as any) * (.3 as any) as any)},${(a as any) + (((c as any) - (a as any) as any) * (.95 as any) as any)}`, `${n},${c}`] as any).join as any)(" ");
}
(s as any)(dt, "generateCliffPath");
function ft(this: any, t: any, e: any, n: any, a: any): any {
  return (([`M${(t as any) - (n as any)},${e}`, `A${n},${a} 0 1,1 ${(t as any) + (n as any)},${e}`, `A${n},${a} 0 1,1 ${(t as any) - (n as any)},${e}`, "Z"] as any).join as any)(" ");
}
(s as any)(ft, "generateConfusionPath");
var at: any = {
    complex: {
      model: "Probe \u2192 Sense \u2192 Respond",
      practice: "Emergent Practices"
    },
    complicated: {
      model: "Sense \u2192 Analyse \u2192 Respond",
      practice: "Good Practices"
    },
    clear: {
      model: "Sense \u2192 Categorise \u2192 Respond",
      practice: "Best Practices"
    },
    chaotic: {
      model: "Act \u2192 Sense \u2192 Respond",
      practice: "Novel Practices"
    },
    confusion: {
      model: "",
      practice: "Disorder"
    }
  },
  Ft: any = (s as any)((t: any, e: any): any => {
    const n: any = (t as any) / (2 as any),
      a: any = (e as any) / (2 as any);
    return {
      complex: {
        cx: (n as any) / (2 as any),
        cy: (a as any) / (2 as any),
        x: 0,
        y: 0,
        w: n,
        h: a
      },
      complicated: {
        cx: (n as any) + ((n as any) / (2 as any) as any),
        cy: (a as any) / (2 as any),
        x: n,
        y: 0,
        w: n,
        h: a
      },
      chaotic: {
        cx: (n as any) / (2 as any),
        cy: (a as any) + ((a as any) / (2 as any) as any),
        x: 0,
        y: a,
        w: n,
        h: a
      },
      clear: {
        cx: (n as any) + ((n as any) / (2 as any) as any),
        cy: (a as any) + ((a as any) / (2 as any) as any),
        x: n,
        y: a,
        w: n,
        h: a
      },
      confusion: {
        cx: n,
        cy: a,
        x: (n as any) * (.7 as any),
        y: (a as any) * (.7 as any),
        w: (n as any) * (.6 as any),
        h: (a as any) * (.6 as any)
      }
    };
  }, "getDomainLayouts"),
  Rt: any = (s as any)((): any => {
    const t: any = (ot as any)(),
      e: any = (Q as any)();
    return ((U as any)(t, (e as any).themeVariables) as any).cynefin;
  }, "getCynefinDomainColors"),
  q: number = 3,
  _t: any = (s as any)((t: any, e: any, n: any, a: any): any => {
    const c: any = (a as any).db,
      m: any = ((c as any).getDomains as any)(),
      v: any = ((c as any).getTransitions as any)(),
      I: any = ((c as any).getDiagramTitle as any)(),
      d: any = ((c as any).getAccTitle as any)(),
      D: any = ((c as any).getAccDescription as any)(),
      o: any = ((c as any).getConfig as any)(),
      p: any = (Rt as any)();
    ((O as any).debug as any)("Rendering Cynefin diagram");
    const i: any = (o as any).width,
      f: any = (o as any).height,
      b: any = (o as any).padding,
      h: any = (o as any).showDomainDescriptions,
      F: any = (o as any).boundaryAmplitude,
      R: any = (i as any) + ((b as any) * (2 as any) as any),
      _: any = (f as any) + ((b as any) * (2 as any) as any),
      z: any = {
        complex: (p as any).complexBg,
        complicated: (p as any).complicatedBg,
        clear: (p as any).clearBg,
        chaotic: (p as any).chaoticBg,
        confusion: (p as any).confusionBg
      },
      k: any = (Dt as any)(e);
    (kt as any)(k, _, R, (o as any).useMaxWidth ?? !0), ((k as any).attr as any)("viewBox", `0 0 ${R} ${_}`), d && ((((k as any).append as any)("title") as any).text as any)(d), D && ((((k as any).append as any)("desc") as any).text as any)(D);
    const T: any = ((((k as any).append as any)("g") as any).attr as any)("transform", `translate(${b}, ${b})`),
      V: any = (Ft as any)(i, f),
      Z: any = (it as any)((o as any).seed, e),
      mt: any = ((((T as any).append as any)("g") as any).attr as any)("class", "cynefin-backgrounds"),
      X: any = ["complex", "complicated", "chaotic", "clear"];
    for (const l of X) {
      const r: any = (V as any)[l];
      ((((((((((((((((((mt as any).append as any)("rect") as any).attr as any)("class", "cynefinDomain") as any).attr as any)("x", (r as any).x) as any).attr as any)("y", (r as any).y) as any).attr as any)("width", (r as any).w) as any).attr as any)("height", (r as any).h) as any).attr as any)("fill", (z as any)[l]) as any).attr as any)("fill-opacity", .4) as any).attr as any)("stroke", "none");
    }
    const j: any = ((((T as any).append as any)("g") as any).attr as any)("class", "cynefin-boundaries");
    ((((((((j as any).append as any)("path") as any).attr as any)("class", "cynefinBoundary") as any).attr as any)("d", (ct as any)(i, f, Z, F)) as any).attr as any)("fill", "none"), ((((((((j as any).append as any)("path") as any).attr as any)("class", "cynefinBoundary") as any).attr as any)("d", (lt as any)(i, f, (Z as any) + (100 as any), F)) as any).attr as any)("fill", "none"), ((((((((j as any).append as any)("path") as any).attr as any)("class", "cynefinCliff") as any).attr as any)("d", (dt as any)(i, f)) as any).attr as any)("fill", "none");
    const pt: any = (i as any) * (.15 as any),
      yt: any = (f as any) * (.15 as any);
    ((((((((((T as any).append as any)("path") as any).attr as any)("class", "cynefinConfusion") as any).attr as any)("d", (ft as any)((i as any) / (2 as any), (f as any) / (2 as any), pt, yt)) as any).attr as any)("fill", (z as any).confusion) as any).attr as any)("fill-opacity", .5);
    const J: any = ((((T as any).append as any)("g") as any).attr as any)("class", "cynefin-labels");
    for (const l of X) {
      const r: any = (V as any)[l];
      ((((((((((((((J as any).append as any)("text") as any).attr as any)("class", "cynefinDomainLabel") as any).attr as any)("x", (r as any).cx) as any).attr as any)("y", h ? ((r as any).cy as any) - (30 as any) : (r as any).cy) as any).attr as any)("text-anchor", "middle") as any).attr as any)("dominant-baseline", "middle") as any).text as any)((((((l as any).charAt as any)(0) as any).toUpperCase as any)() as any) + (((l as any).slice as any)(1) as any));
    }
    if (((((((((((((((J as any).append as any)("text") as any).attr as any)("class", "cynefinDomainLabel") as any).attr as any)("x", (i as any) / (2 as any)) as any).attr as any)("y", h ? ((f as any) / (2 as any) as any) - (10 as any) : (f as any) / (2 as any)) as any).attr as any)("text-anchor", "middle") as any).attr as any)("dominant-baseline", "middle") as any).text as any)("Confusion"), h) {
      const l: any = ((((T as any).append as any)("g") as any).attr as any)("class", "cynefin-subtitles");
      for (const r of X) {
        const u: any = (V as any)[r],
          y: any = (at as any)[r];
        ((((((((((((((l as any).append as any)("text") as any).attr as any)("class", "cynefinSubtitle") as any).attr as any)("x", (u as any).cx) as any).attr as any)("y", ((u as any).cy as any) - (10 as any)) as any).attr as any)("text-anchor", "middle") as any).attr as any)("dominant-baseline", "middle") as any).text as any)((y as any).model), ((((((((((((((l as any).append as any)("text") as any).attr as any)("class", "cynefinSubtitle") as any).attr as any)("x", (u as any).cx) as any).attr as any)("y", ((u as any).cy as any) + (5 as any)) as any).attr as any)("text-anchor", "middle") as any).attr as any)("dominant-baseline", "middle") as any).text as any)((y as any).practice);
      }
      ((((((((((((((l as any).append as any)("text") as any).attr as any)("class", "cynefinSubtitle") as any).attr as any)("x", (i as any) / (2 as any)) as any).attr as any)("y", ((f as any) / (2 as any) as any) + (8 as any)) as any).attr as any)("text-anchor", "middle") as any).attr as any)("dominant-baseline", "middle") as any).text as any)(((at as any).confusion as any).practice);
    }
    const K: any = ((((T as any).append as any)("g") as any).attr as any)("class", "cynefin-items"),
      A: number = 26,
      tt: number = 10,
      ut: any = ["complex", "complicated", "chaotic", "clear", "confusion"];
    for (const l of ut) {
      const r: any = ((m as any).get as any)(l);
      if (!r || (((r as any).items as any).length as any) === (0 as any)) continue;
      const u: any = (V as any)[l],
        y: any = (l as any) === ("confusion" as any);
      let L: any = (r as any).items,
        N: any = 0;
      y && (((r as any).items as any).length as any) > (q as any) && (N = (((r as any).items as any).length as any) - (q as any), L = (((r as any).items as any).slice as any)(0, q));
      let B: any;
      if (y) {
        const g: any = h ? 22 : 14;
        B = ((u as any).cy as any) + (g as any);
      } else B = ((u as any).cy as any) + ((h ? 25 : 15) as any);
      if ((([...L] as any).forEach as any)((g: any, S: any): any => {
        const w: any = (B as any) + ((S as any) * ((A as any) + (4 as any) as any) as any),
          M: any = ((K as any).append as any)("g"),
          P: any = ((((((((((((((M as any).append as any)("text") as any).attr as any)("class", "cynefinItemText") as any).attr as any)("x", 0) as any).attr as any)("y", (A as any) / (2 as any)) as any).attr as any)("text-anchor", "middle") as any).attr as any)("dominant-baseline", "central") as any).text as any)((g as any).label);
        let $: any = (((g as any).label as any).length as any) * (7 as any);
        const x: any = ((P as any).node as any)();
        if (x && (typeof (x as any).getBBox as any) == ("function" as any)) {
          const G: any = ((x as any).getBBox as any)();
          ((G as any).width as any) > (0 as any) && ($ = (G as any).width);
        }
        const C: any = ($ as any) + ((tt as any) * (2 as any) as any),
          W: any = ((u as any).cx as any) - ((C as any) / (2 as any) as any);
        ((M as any).attr as any)("transform", `translate(${W}, ${w})`), ((((((((((((((((((((M as any).insert as any)("rect", "text") as any).attr as any)("class", "cynefinItem") as any).attr as any)("x", 0) as any).attr as any)("y", 0) as any).attr as any)("width", C) as any).attr as any)("height", A) as any).attr as any)("rx", 4) as any).attr as any)("ry", 4) as any).attr as any)("fill", (z as any)[l]) as any).attr as any)("fill-opacity", .95), ((((P as any).attr as any)("x", (C as any) / (2 as any)) as any).attr as any)("y", (A as any) / (2 as any));
      }), (N as any) > (0 as any)) {
        const g: any = (B as any) + (((L as any).length as any) * ((A as any) + (4 as any) as any) as any),
          S: any = `+${N} more`,
          w: any = ((K as any).append as any)("g"),
          M: any = ((((((((((((((w as any).append as any)("text") as any).attr as any)("class", "cynefinItemText") as any).attr as any)("x", 0) as any).attr as any)("y", (A as any) / (2 as any)) as any).attr as any)("text-anchor", "middle") as any).attr as any)("dominant-baseline", "central") as any).text as any)(S);
        let P: any = ((S as any).length as any) * (7 as any);
        const $: any = ((M as any).node as any)();
        if ($ && (typeof ($ as any).getBBox as any) == ("function" as any)) {
          const W: any = (($ as any).getBBox as any)();
          ((W as any).width as any) > (0 as any) && (P = (W as any).width);
        }
        const x: any = (P as any) + ((tt as any) * (2 as any) as any),
          C: any = ((u as any).cx as any) - ((x as any) / (2 as any) as any);
        ((w as any).attr as any)("transform", `translate(${C}, ${g})`), ((((((((((((((((((((w as any).insert as any)("rect", "text") as any).attr as any)("class", "cynefinItemOverflow") as any).attr as any)("x", 0) as any).attr as any)("y", 0) as any).attr as any)("width", x) as any).attr as any)("height", A) as any).attr as any)("rx", 4) as any).attr as any)("ry", 4) as any).attr as any)("fill", (z as any)[l]) as any).attr as any)("fill-opacity", .6), ((((M as any).attr as any)("x", (x as any) / (2 as any)) as any).attr as any)("y", (A as any) / (2 as any));
      }
    }
    if (((v as any).length as any) > (0 as any)) {
      const l: any = ((((k as any).select as any)("defs") as any).empty as any)() ? ((k as any).append as any)("defs") : ((k as any).select as any)("defs"),
        r: any = `cynefin-arrow-${e}`;
      ((((((((((((((((((((((l as any).append as any)("marker") as any).attr as any)("id", r) as any).attr as any)("viewBox", "0 0 10 10") as any).attr as any)("refX", 9) as any).attr as any)("refY", 5) as any).attr as any)("markerWidth", 6) as any).attr as any)("markerHeight", 6) as any).attr as any)("orient", "auto-start-reverse") as any).append as any)("path") as any).attr as any)("d", "M 0 0 L 10 5 L 0 10 z") as any).attr as any)("class", "cynefinArrowHead");
      const u: any = ((((T as any).append as any)("g") as any).attr as any)("class", "cynefin-arrows");
      ((v as any).forEach as any)((y: any): any => {
        const L: any = (V as any)[(y as any).from],
          N: any = (V as any)[(y as any).to];
        if (!L || !N) return;
        if (((y as any).from as any) === ((y as any).to as any)) {
          ((O as any).warn as any)(`Cynefin renderer: skipping self-loop on domain "${(y as any).from}"`);
          return;
        }
        const B: any = (L as any).cx,
          g: any = (L as any).cy,
          S: any = (N as any).cx,
          w: any = (N as any).cy,
          M: any = ((B as any) + (S as any) as any) / (2 as any),
          P: any = ((g as any) + (w as any) as any) / (2 as any),
          $: any = (S as any) - (B as any),
          x: any = (w as any) - (g as any),
          C: any = ((Math as any).sqrt as any)((($ as any) * ($ as any) as any) + ((x as any) * (x as any) as any)),
          W: any = (C as any) * (.15 as any),
          G: any = (-x as any) / (C as any),
          ht: any = ($ as any) / (C as any),
          et: any = (M as any) + ((G as any) * (W as any) as any),
          nt: any = (P as any) + ((ht as any) * (W as any) as any);
        ((((((((((u as any).append as any)("path") as any).attr as any)("class", "cynefinArrowLine") as any).attr as any)("d", `M${B},${g} Q${et},${nt} ${S},${w}`) as any).attr as any)("fill", "none") as any).attr as any)("marker-end", `url(#${r})`), (y as any).label && ((((((((((((((u as any).append as any)("text") as any).attr as any)("class", "cynefinArrowLabel") as any).attr as any)("x", et) as any).attr as any)("y", (nt as any) - (6 as any)) as any).attr as any)("text-anchor", "middle") as any).attr as any)("dominant-baseline", "auto") as any).text as any)((y as any).label);
      });
    }
    I && ((((((((((((((T as any).append as any)("text") as any).attr as any)("class", "cynefinTitle") as any).attr as any)("x", (i as any) / (2 as any)) as any).attr as any)("y", (-b as any) / (2 as any)) as any).attr as any)("text-anchor", "middle") as any).attr as any)("dominant-baseline", "middle") as any).text as any)(I);
  }, "draw"),
  Vt: any = {
    draw: _t
  },
  Et: any = (s as any)((): any => {
    const t: any = (ot as any)(),
      e: any = (Q as any)();
    return ((U as any)(t, (e as any).themeVariables) as any).cynefin;
  }, "getCynefinTheme"),
  Ht: any = (s as any)((): any => {
    const t: any = (Et as any)();
    return `
	.cynefinDomain {
		stroke: none;
	}
	.cynefinDomainLabel {
		font-size: ${(t as any).domainFontSize}px;
		font-weight: bold;
		fill: ${(t as any).labelColor};
	}
	.cynefinSubtitle {
		font-size: ${((t as any).itemFontSize as any) - (1 as any)}px;
		fill: ${(t as any).textColor};
		font-style: italic;
	}
	.cynefinItem {
		fill-opacity: 0.95;
		stroke: ${(t as any).boundaryColor};
		stroke-width: 1;
	}
	.cynefinItemText {
		font-size: ${(t as any).itemFontSize}px;
		fill: ${(t as any).textColor};
	}
	.cynefinItemOverflow {
		fill-opacity: 0.6;
		stroke: ${(t as any).boundaryColor};
		stroke-width: 1;
		stroke-dasharray: 3 2;
	}
	.cynefinBoundary {
		stroke: ${(t as any).boundaryColor};
		stroke-width: ${(t as any).boundaryWidth};
		stroke-dasharray: 6 3;
	}
	.cynefinCliff {
		stroke: ${(t as any).cliffColor};
		stroke-width: ${(t as any).cliffWidth};
	}
	.cynefinConfusion {
		stroke: ${(t as any).boundaryColor};
		stroke-width: 1.5;
		stroke-dasharray: 4 2;
	}
	.cynefinArrowLine {
		stroke: ${(t as any).arrowColor};
		stroke-width: ${(t as any).arrowWidth};
		fill: none;
	}
	.cynefinArrowHead {
		fill: ${(t as any).arrowColor};
		stroke: none;
	}
	.cynefinArrowLabel {
		font-size: ${((t as any).itemFontSize as any) - (1 as any)}px;
		fill: ${(t as any).textColor};
	}
	.cynefinTitle {
		font-size: ${((t as any).domainFontSize as any) + (2 as any)}px;
		font-weight: bold;
		fill: ${(t as any).labelColor};
	}
	`;
  }, "styles"),
  Gt: any = Ht,
  qt: any = {
    parser: It,
    db: Y,
    renderer: Vt,
    styles: Gt
  };
export { qt as diagram };
//# debugId=7af3814a-a303-487c-b1ef-13ee765163fd
