declare var Buffer: any;
declare var CSS: any;
declare var atob: any;
declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "9db616d7-69dd-408a-860e-d1211324acc9", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-9db616d7-69dd-408a-860e-d1211324acc9");
  } catch (e: any) {}
} as any)();
const __vite__mapDeps: any = (i: any, m: any = __vite__mapDeps, d: any = (m as any).f || ((m as any).f = ["./chunk-sizeCapture-X5ZJPWSS-7g1ZgPVb.js", "./chunk-mermaid.core-B9Iu5CoE.js", "./index.eager-vendor-Qbf9YA6n.js"])): any => ((i as any).map as any)((i: any): any => (d as any)[i]);
import { _ as Er } from "./index.eager-vendor-Qbf9YA6n.js";
import { c as Tr } from "./chunk-chunk-RYQCIY6F-Ds0VkJA9.js";
import { am as wr, an as Ar, ao as Rr, ap as Nr, l as Ke, c as Or, ag as Pr, af as Br, ah as kr, at as _r, av as Fr, _ as d, z as Dr, as as Hr, aw as Xr, y as Oe, ax as Ye, ay as Ao } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { G as Yr } from "./chunk-graph-BvS0Xx32.js";
import "./chunk-map-Bpb79OOT.js";
async function _o(this: any, t: any, e: any): Promise<any> {
  const n: any = new (Yr as any)({
      multigraph: !0,
      compound: !0
    }),
    o: any = [...(e as any).edges],
    s: any = (Or as any)(),
    r: any = ((((t as any).insert as any)("g") as any).attr as any)("class", "root"),
    i: any = ((((r as any).insert as any)("g") as any).attr as any)("class", "clusters"),
    c: any = ((((r as any).insert as any)("g") as any).attr as any)("class", "edges edgePath"),
    a: any = ((((r as any).insert as any)("g") as any).attr as any)("class", "edgeLabels"),
    l: any = ((((r as any).insert as any)("g") as any).attr as any)("class", "nodes"),
    g: any = new (Map as any)(),
    x: any = (((t as any).node as any)() as any) != (null as any);
  await ((Promise as any).all as any)((((e as any).nodes as any).map as any)(async (I: any): Promise<any> => {
    if ((I as any).isGroup) ((n as any).setNode as any)((I as any).id, {
      ...I
    });else {
      if (x) {
        const u: any = await (Pr as any)(l, I, {
            config: s,
            dir: (I as any).dir
          }),
          p: any = ((u as any).node as any)()?.getBBox() ?? {
            width: 0,
            height: 0
          };
        ((g as any).set as any)((I as any).id, u), (I as any).width = (p as any).width, (I as any).height = (p as any).height;
      }
      ((n as any).setNode as any)((I as any).id, {
        ...I
      });
    }
  }));
  for (const I of o) ((n as any).setEdge as any)((I as any).start, (I as any).end, {
    ...I
  }, (I as any).id), (((e as any).edges as any).some as any)((p: any): any => ((p as any).id as any) === ((I as any).id as any)) || (((e as any).edges as any).push as any)(I);
  if ((globalThis as any).mermaidCaptureSizes) {
    const {
      captureNodeSizes: I
    }: any = await (Er as any)(async (): Promise<any> => {
      const {
        captureNodeSizes: u
      }: any = await import("./chunk-sizeCapture-X5ZJPWSS-7g1ZgPVb.js");
      return {
        captureNodeSizes: u
      };
    }, (__vite__mapDeps as any)([0, 1, 2]), (import.meta as any).url);
    (I as any)(t, e);
  }
  return {
    graph: n,
    groups: {
      clusters: i,
      edgePaths: c,
      edgeLabels: a,
      nodes: l,
      rootGroups: r
    },
    nodeElements: g
  };
}
(d as any)(_o, "createGraphWithElements");
var Ro: number = 5,
  Ge: number = 1e-5,
  $e: number = 1e-6;
function qe(this: any, t: any): any {
  const e: any = [];
  for (let n: any = 0; (n as any) < (((t as any).length as any) - (1 as any) as any); n++) ((e as any).push as any)({
    a: (t as any)[n],
    b: (t as any)[(n as any) + (1 as any)]
  });
  return e;
}
(d as any)(qe, "buildSegmentList");
function Fo(this: any, t: any, e: any, n: any, o: any): any {
  const s: any = ((e as any).x as any) - ((t as any).x as any),
    r: any = ((e as any).y as any) - ((t as any).y as any),
    i: any = ((o as any).x as any) - ((n as any).x as any),
    c: any = ((o as any).y as any) - ((n as any).y as any),
    a: any = ((s as any) * (c as any) as any) - ((r as any) * (i as any) as any);
  if ((a as any) === (0 as any)) return null;
  const l: any = ((n as any).x as any) - ((t as any).x as any),
    g: any = ((n as any).y as any) - ((t as any).y as any),
    x: any = (((l as any) * (c as any) as any) - ((g as any) * (i as any) as any) as any) / (a as any),
    I: any = (((l as any) * (r as any) as any) - ((g as any) * (s as any) as any) as any) / (a as any);
  return (x as any) <= ($e as any) || (x as any) >= ((1 as any) - ($e as any) as any) || (I as any) <= ($e as any) || (I as any) >= ((1 as any) - ($e as any) as any) ? null : {
    point: {
      x: ((t as any).x as any) + ((x as any) * (s as any) as any),
      y: ((t as any).y as any) + ((x as any) * (r as any) as any)
    },
    tA: x,
    tB: I
  };
}
(d as any)(Fo, "segmentIntersection");
function vn(this: any, t: any): any {
  return (((Math as any).abs as any)((((t as any).b as any).x as any) - (((t as any).a as any).x as any)) as any) >= (((Math as any).abs as any)((((t as any).b as any).y as any) - (((t as any).a as any).y as any)) as any);
}
(d as any)(vn, "isHorizontalSeg");
function Do(this: any, t: any): any {
  const e: any = [];
  for (let n: any = 0; (n as any) < ((t as any).length as any); n++) {
    const o: any = (t as any)[n],
      s: any = (qe as any)((o as any).points);
    for (let r: any = (n as any) + (1 as any); (r as any) < ((t as any).length as any); r++) {
      const i: any = (t as any)[r],
        c: any = (qe as any)((i as any).points);
      for (const [a, l] of ((s as any).entries as any)()) for (const [g, x] of ((c as any).entries as any)()) {
        const I: any = (Fo as any)((l as any).a, (l as any).b, (x as any).a, (x as any).b);
        if (!I) continue;
        const u: any = (vn as any)(l),
          p: any = (vn as any)(x);
        ((u as any) !== (p as any) ? u : !1) ? ((e as any).push as any)({
          jumpEdgeId: (o as any).id,
          otherEdgeId: (i as any).id,
          segIndex: a,
          t: (I as any).tA,
          point: (I as any).point
        }) : ((e as any).push as any)({
          jumpEdgeId: (i as any).id,
          otherEdgeId: (o as any).id,
          segIndex: g,
          t: (I as any).tB,
          point: (I as any).point
        });
      }
    }
  }
  return e;
}
(d as any)(Do, "findEdgeIntersections");
function re(this: any, t: any): any {
  const e: any = (((Math as any).round as any)((t as any) * (1e3 as any)) as any) / (1e3 as any);
  return ((Number as any).isInteger as any)(e) ? `${e}` : `${e}`;
}
(d as any)(re, "fmt");
function we(this: any, t: any): any {
  return `${(re as any)((t as any).x)},${(re as any)((t as any).y)}`;
}
(d as any)(we, "pointToString");
function Ho(this: any, t: any): any {
  const e: any = (((t as any).b as any).x as any) - (((t as any).a as any).x as any),
    n: any = (((t as any).b as any).y as any) - (((t as any).a as any).y as any);
  return (((Math as any).abs as any)(e) as any) >= (((Math as any).abs as any)(n) as any) ? (e as any) >= (0 as any) ? 1 : 0 : (n as any) >= (0 as any) ? 1 : 0;
}
(d as any)(Ho, "getArcSweepFlag");
var Gr: number = .001;
function Xo(this: any, t: any, e: any): any {
  if (((t as any).length as any) < (2 as any)) return ((t as any).map as any)((r: any): any => ({
    ...r
  }));
  const n: any = ((t as any).map as any)((r: any): any => ({
      ...r
    })),
    o: any = (e as any).arrowTypeStart && (Ao as any)[(e as any).arrowTypeStart];
  if (o) {
    const r: any = (t as any)[0],
      i: any = (t as any)[1],
      c: any = ((Math as any).atan2 as any)(((i as any).y as any) - ((r as any).y as any), ((i as any).x as any) - ((r as any).x as any));
    ((n as any)[0] as any).x = ((r as any).x as any) + ((o as any) * (((Math as any).cos as any)(c) as any) as any), ((n as any)[0] as any).y = ((r as any).y as any) + ((o as any) * (((Math as any).sin as any)(c) as any) as any);
  }
  const s: any = (e as any).arrowTypeEnd && (Ao as any)[(e as any).arrowTypeEnd];
  if (s) {
    const r: any = (t as any).length,
      i: any = (t as any)[(r as any) - (2 as any)],
      c: any = (t as any)[(r as any) - (1 as any)],
      a: any = ((Math as any).atan2 as any)(((c as any).y as any) - ((i as any).y as any), ((c as any).x as any) - ((i as any).x as any));
    ((n as any)[(r as any) - (1 as any)] as any).x = ((c as any).x as any) - ((s as any) * (((Math as any).cos as any)(a) as any) as any), ((n as any)[(r as any) - (1 as any)] as any).y = ((c as any).y as any) - ((s as any) * (((Math as any).sin as any)(a) as any) as any);
  }
  return n;
}
(d as any)(Xo, "applyMarkerOffsets");
function Yo(this: any, t: any, e: any, n: any, o: any, s: any): any {
  const r: any = ((t as any).point as any).x,
    i: any = ((t as any).point as any).y,
    c: any = {
      x: (r as any) - ((e as any) * ((t as any).r as any) as any),
      y: (i as any) - ((n as any) * ((t as any).r as any) as any)
    },
    a: any = {
      x: (r as any) + ((e as any) * ((t as any).r as any) as any),
      y: (i as any) + ((n as any) * ((t as any).r as any) as any)
    },
    l: any = [`L${(we as any)(c)}`];
  return (s as any) === ("arc" as any) ? ((l as any).push as any)(`A${(re as any)((t as any).r)},${(re as any)((t as any).r)} 0 0 ${o} ${(we as any)(a)}`) : ((l as any).push as any)(`M${(we as any)(a)}`), l;
}
(d as any)(Yo, "emitJump");
function Ln(this: any, t: any, e: any, n: any, o: any): any {
  const s: any = ((e as any).x as any) - ((t as any).x as any),
    r: any = ((e as any).y as any) - ((t as any).y as any),
    i: any = ((n as any).x as any) - ((e as any).x as any),
    c: any = ((n as any).y as any) - ((e as any).y as any),
    a: any = ((Math as any).hypot as any)(s, r),
    l: any = ((Math as any).hypot as any)(i, c);
  if ((a as any) < (Ge as any) || (l as any) < (Ge as any)) return null;
  const g: any = (s as any) / (a as any),
    x: any = (r as any) / (a as any),
    I: any = (i as any) / (l as any),
    u: any = (c as any) / (l as any),
    p: any = ((g as any) * (I as any) as any) + ((x as any) * (u as any) as any),
    f: any = ((Math as any).max as any)(-1, ((Math as any).min as any)(1, p)),
    y: any = ((Math as any).acos as any)(f);
  if ((y as any) < (Ge as any) || (((Math as any).abs as any)(((Math as any).PI as any) - (y as any)) as any) < (Ge as any)) return null;
  const v: any = ((Math as any).min as any)((o as any) / (((Math as any).sin as any)((y as any) / (2 as any)) as any), (a as any) / (2 as any), (l as any) / (2 as any));
  return {
    startX: ((e as any).x as any) - ((g as any) * (v as any) as any),
    startY: ((e as any).y as any) - ((x as any) * (v as any) as any),
    endX: ((e as any).x as any) + ((I as any) * (v as any) as any),
    endY: ((e as any).y as any) + ((u as any) * (v as any) as any),
    ctrlX: (e as any).x,
    ctrlY: (e as any).y,
    cutLen: v
  };
}
(d as any)(Ln, "computeRoundedCorner");
function Go(this: any, t: any, e: any, n: any): any {
  const o: any = (t as any).points;
  if (((o as any).length as any) < (2 as any)) return "";
  const s: any = (Xo as any)(o, t),
    r: any = ((t as any).curve as any) === ("rounded" as any),
    i: any = (qe as any)(s),
    c: any = new (Map as any)();
  for (const l of e) {
    const g: any = (i as any)[(l as any).segIndex];
    if (!g) continue;
    const x: any = ((Math as any).hypot as any)((((g as any).b as any).x as any) - (((g as any).a as any).x as any), (((g as any).b as any).y as any) - (((g as any).a as any).y as any)),
      I: any = ((c as any).get as any)((l as any).segIndex) ?? [];
    ((I as any).push as any)({
      t: (l as any).t,
      point: (l as any).point,
      d: ((l as any).t as any) * (x as any),
      r: (n as any).jumpRadius
    }), ((c as any).set as any)((l as any).segIndex, I);
  }
  const a: any = [`M${(we as any)((s as any)[0])}`];
  for (let l: any = 0; (l as any) < ((i as any).length as any); l++) {
    const g: any = (i as any)[l],
      x: any = ((Math as any).hypot as any)((((g as any).b as any).x as any) - (((g as any).a as any).x as any), (((g as any).b as any).y as any) - (((g as any).a as any).y as any)),
      I: any = (x as any) === (0 as any) ? 0 : ((((g as any).b as any).x as any) - (((g as any).a as any).x as any) as any) / (x as any),
      u: any = (x as any) === (0 as any) ? 0 : ((((g as any).b as any).y as any) - (((g as any).a as any).y as any) as any) / (x as any),
      p: any = (Ho as any)(g);
    let f: any = 0;
    if (r && (l as any) > (0 as any)) {
      const E: any = (Ln as any)((s as any)[(l as any) - (1 as any)], (s as any)[l], (s as any)[(l as any) + (1 as any)] ?? (s as any)[l], Ro);
      E && (f = (E as any).cutLen);
    }
    let y: any = x,
      v: any = null;
    r && (l as any) < (((i as any).length as any) - (1 as any) as any) && (v = (Ln as any)((s as any)[l], (s as any)[(l as any) + (1 as any)], (s as any)[(l as any) + (2 as any)] ?? (s as any)[(l as any) + (1 as any)], Ro), v && (y = (x as any) - ((v as any).cutLen as any)));
    const M: any = (([...(((c as any).get as any)(l) ?? [])] as any).sort as any)((E: any, T: any): any => ((E as any).t as any) - ((T as any).t as any));
    for (const E of M) (E as any).r = ((Math as any).min as any)((E as any).r, ((E as any).d as any) - (f as any), (y as any) - ((E as any).d as any));
    for (let E: any = 0; (E as any) < (((M as any).length as any) - (1 as any) as any); E++) {
      const T: any = (((M as any)[(E as any) + (1 as any)] as any).d as any) - (((M as any)[E] as any).d as any);
      if (((((M as any)[E] as any).r as any) + (((M as any)[(E as any) + (1 as any)] as any).r as any) as any) > (T as any)) {
        const m: any = (T as any) / (2 as any);
        ((M as any)[E] as any).r = ((Math as any).min as any)(((M as any)[E] as any).r, m), ((M as any)[(E as any) + (1 as any)] as any).r = ((Math as any).min as any)(((M as any)[(E as any) + (1 as any)] as any).r, m);
      }
    }
    for (const E of M) ((E as any).r as any) < (Gr as any) || ((a as any).push as any)(...(Yo as any)(E, I, u, p, (n as any).jumpStyle));
    r && v ? (((a as any).push as any)(`L${(re as any)((v as any).startX)},${(re as any)((v as any).startY)}`), ((a as any).push as any)(`Q${(re as any)((v as any).ctrlX)},${(re as any)((v as any).ctrlY)} ${(re as any)((v as any).endX)},${(re as any)((v as any).endY)}`)) : ((a as any).push as any)(`L${(we as any)((g as any).b)}`);
  }
  return ((a as any).join as any)(" ");
}
(d as any)(Go, "rewriteEdgePath");
function $o(this: any, t: any): any {
  return ((/^[\d\s+,.LMelm-]*$/ as any).test as any)(t);
}
(d as any)($o, "isStraightPath");
function zo(this: any, t: any): any {
  return t ? (t as any) === ("linear" as any) || (t as any) === ("rounded" as any) || (t as any) === ("step" as any) || (t as any) === ("stepBefore" as any) || (t as any) === ("stepAfter" as any) : !0;
}
(d as any)(zo, "curveSupportsLineHops");
function Vo(this: any, t: any): any {
  if (!t) return null;
  try {
    const e: any = (typeof atob as any) == ("function" as any) ? (atob as any)(t) : ((((Buffer as any).from as any)(t, "base64") as any).toString as any)(),
      n: any = ((JSON as any).parse as any)(e);
    if (!((Array as any).isArray as any)(n)) return null;
    const o: any = [];
    for (const s of n) s && (typeof (s as any).x as any) == ("number" as any) && (typeof (s as any).y as any) == ("number" as any) && ((o as any).push as any)({
      x: (s as any).x,
      y: (s as any).y
    });
    return ((o as any).length as any) >= (2 as any) ? o : null;
  } catch {
    return null;
  }
}
(d as any)(Vo, "decodeDataPoints");
function jo(this: any, t: any, e: any, n: any): any {
  if (!(n as any).enabled) return;
  const o: any = ((t as any).node as any)();
  if (!o) return;
  const s: any = new (Map as any)();
  for (const l of e) ((s as any).set as any)((l as any).id, l);
  const r: any = [],
    i: any = new (Map as any)();
  for (const l of e) {
    const g: any = (typeof CSS as any) < ("u" as any) && (CSS as any).escape ? ((CSS as any).escape as any)((l as any).id) : (l as any).id,
      x: any = ((o as any).querySelector as any)(`path[data-id="${g}"]`);
    if (!x) continue;
    ((i as any).set as any)((l as any).id, x);
    const u: any = (Vo as any)(((x as any).getAttribute as any)("data-points")) ?? (l as any).points;
    ((r as any).push as any)({
      ...l,
      points: u
    });
  }
  const c: any = (Do as any)(r);
  if (((c as any).length as any) === (0 as any)) return;
  const a: any = new (Map as any)();
  for (const l of c) {
    const g: any = ((a as any).get as any)((l as any).jumpEdgeId) ?? [];
    ((g as any).push as any)(l), ((a as any).set as any)((l as any).jumpEdgeId, g);
  }
  for (const l of r) {
    const g: any = ((a as any).get as any)((l as any).id);
    if (!g || ((g as any).length as any) === (0 as any)) continue;
    const I: any = ((s as any).get as any)((l as any).id)?.curve;
    if ((I as any) !== (void 0 as any) && !(zo as any)(I)) continue;
    const u: any = ((i as any).get as any)((l as any).id);
    if (!u) continue;
    if ((I as any) === (void 0 as any)) {
      const E: any = ((u as any).getAttribute as any)("d") ?? "";
      if (!($o as any)(E)) continue;
    }
    const p: any = ((u as any).getAttribute as any)("style") ?? "",
      f: any = ((/stroke-dasharray\s*:\s*0\s+([\d.]+)\s+[\d.]+\s+([\d.]+)/ as any).exec as any)(p),
      y: any = f ? ((Number as any).parseFloat as any)((f as any)[1]) : null,
      v: any = f ? ((Number as any).parseFloat as any)((f as any)[2]) : null,
      M: any = (Go as any)(l, g, n);
    if (((u as any).setAttribute as any)("d", M), (y as any) !== (null as any) && (v as any) !== (null as any) && (typeof (u as any).getTotalLength as any) == ("function" as any)) {
      const E: any = ((u as any).getTotalLength as any)(),
        T: any = ((Math as any).max as any)(0, ((E as any) - (y as any) as any) - (v as any)),
        m: any = `0 ${y} ${T} ${v}`,
        S: any = ((((p as any).replace as any)(/stroke-dasharray\s*:[^;]*;?/g, `stroke-dasharray: ${m};`) as any).replace as any)(/;\s*;+/g, ";");
      ((u as any).setAttribute as any)("style", S);
    }
  }
}
(d as any)(jo, "applyLineJumpsToSvg");
async function Uo(this: any, t: any, e: any): Promise<any> {
  for (const s of (t as any).nodes) (s as any).isGroup ? await (Br as any)((e as any).clusters, s) : (kr as any)(s);
  const n: any = new (Map as any)();
  for (const s of (t as any).nodes) s?.id && ((n as any).set as any)((s as any).id, s);
  for (const s of (t as any).edges) {
    const r: any = (s as any).start ? ((n as any).get as any)((s as any).start) ?? {} : {},
      i: any = (s as any).end ? ((n as any).get as any)((s as any).end) ?? {} : {},
      c: any = (_r as any)((e as any).edgePaths, {
        ...s
      }, {}, (t as any).type, r, i, (t as any).diagramId);
    (s as any).label && (await (Fr as any)((e as any).rootGroups, s)), (s as any).label && (Wo as any)(s, c);
  }
  const o: any = (t as any).config?.swimlane?.lineHops;
  if ((o as any) !== (!1 as any)) {
    const s: any = (o as any) === ("gap" as any) ? "gap" : "arc",
      r: any = (((((t as any).edges as any).filter as any)((i: any): any => ((Array as any).isArray as any)((i as any).points) && (((i as any).points as any).length as any) >= (2 as any)) as any).map as any)((i: any): any => ({
        id: (i as any).id,
        points: (i as any).points,
        curve: (i as any).curve,
        arrowTypeStart: (i as any).arrowTypeStart,
        arrowTypeEnd: (i as any).arrowTypeEnd
      }));
    (jo as any)((e as any).edgePaths, r, {
      enabled: !0,
      jumpRadius: 6,
      jumpStyle: s
    });
  }
}
(d as any)(Uo, "adjustLayout");
function Wo(this: any, t: any, e: any): any {
  const n: any = e?.updatedPath ?? e?.originalPath,
    o: any = (Dr as any)(),
    {
      subGraphTitleTotalMargin: s
    }: any = (Hr as any)({
      flowchart: (o as any).flowchart ?? {}
    });
  if ((t as any).label) {
    const r: any = ((Xr as any).get as any)((t as any).id);
    let i: any = (t as any).x,
      c: any = (t as any).y;
    if (n) {
      const a: any = ((Oe as any).calcLabelPosition as any)(n);
      ((Ke as any).debug as any)((("Moving label " as any) + ((t as any).label as any) as any) + (" from (" as any), i, ",", c, ") to (", (a as any).x, ",", (a as any).y, ") abc88"), e && (i = (a as any).x, c = (a as any).y);
    }
    ((r as any).attr as any)("transform", `translate(${i}, ${(c as any) + ((s as any) / (2 as any) as any)})`);
  }
  if (t?.startLabelLeft) {
    const r: any = (((Ye as any).get as any)((t as any).id) as any).startLeft;
    let i: any = t?.x,
      c: any = t?.y;
    if (n) {
      const a: any = ((Oe as any).calcTerminalLabelPosition as any)((t as any).arrowTypeStart ? 10 : 0, "start_left", n);
      i = (a as any).x, c = (a as any).y;
    }
    ((r as any).attr as any)("transform", `translate(${i}, ${c})`);
  }
  if ((t as any).startLabelRight) {
    const r: any = (((Ye as any).get as any)((t as any).id) as any).startRight;
    let i: any = (t as any).x,
      c: any = (t as any).y;
    if (n) {
      const a: any = ((Oe as any).calcTerminalLabelPosition as any)((t as any).arrowTypeStart ? 10 : 0, "start_right", n);
      i = (a as any).x, c = (a as any).y;
    }
    ((r as any).attr as any)("transform", `translate(${i}, ${c})`);
  }
  if ((t as any).endLabelLeft) {
    const r: any = (((Ye as any).get as any)((t as any).id) as any).endLeft;
    let i: any = (t as any).x,
      c: any = (t as any).y;
    if (n) {
      const a: any = ((Oe as any).calcTerminalLabelPosition as any)((t as any).arrowTypeEnd ? 10 : 0, "end_left", n);
      i = (a as any).x, c = (a as any).y;
    }
    ((r as any).attr as any)("transform", `translate(${i}, ${c})`);
  }
  if ((t as any).endLabelRight) {
    const r: any = (((Ye as any).get as any)((t as any).id) as any).endRight;
    let i: any = (t as any).x,
      c: any = (t as any).y;
    if (n) {
      const a: any = ((Oe as any).calcTerminalLabelPosition as any)((t as any).arrowTypeEnd ? 10 : 0, "end_right", n);
      i = (a as any).x, c = (a as any).y;
    }
    ((r as any).attr as any)("transform", `translate(${i}, ${c})`);
  }
}
(d as any)(Wo, "positionEdgeLabel");
var Mn: string = "__swimlane_default__",
  $r: number = 21,
  No: number = 20;
function En(this: any, t: any): any {
  return ((Math as any).max as any)((t as any).padding ?? No, No);
}
(d as any)(En, "topLaneHorizontalPadding");
function Ko(this: any, t: any): any {
  const {
      x: e,
      y: n,
      width: o,
      height: s
    }: any = t,
    r: any = (t as any).swimlaneContentTop;
  if ((typeof e as any) != ("number" as any) || (typeof n as any) != ("number" as any) || (typeof o as any) != ("number" as any) || (typeof s as any) != ("number" as any) || (typeof r as any) != ("number" as any) || !((Number as any).isFinite as any)(e) || !((Number as any).isFinite as any)(n) || !((Number as any).isFinite as any)(o) || !((Number as any).isFinite as any)(s) || !((Number as any).isFinite as any)(r) || (o as any) <= (0 as any) || (s as any) <= (0 as any)) {
    delete (t as any).groupTitleRect;
    return;
  }
  const i: any = (n as any) - ((s as any) / (2 as any) as any),
    c: any = ((Math as any).min as any)(r, (n as any) + ((s as any) / (2 as any) as any)),
    a: any = ((Math as any).min as any)($r, ((Math as any).max as any)(0, (c as any) - (i as any))),
    l: any = (i as any) + (a as any);
  if ((l as any) <= (i as any)) {
    delete (t as any).groupTitleRect;
    return;
  }
  (t as any).groupTitleRect = {
    left: (e as any) - ((o as any) / (2 as any) as any),
    right: (e as any) + ((o as any) / (2 as any) as any),
    top: i,
    bottom: l
  };
}
(d as any)(Ko, "assignTopLaneTitleRect");
function qo(this: any, t: any): any {
  const e: any = (t as any).direction,
    n: any = (t as any).nodes ??= [];
  for (const r of (t as any).nodes ?? []) (r as any).isGroup && !(r as any).parentId && ((r as any).shape = "swimlane", e && ((r as any).direction = e));
  const o: any = ((n as any).filter as any)((r: any): any => !(r as any).isGroup && !(r as any).parentId);
  if (((o as any).length as any) === (0 as any)) return;
  let s: any = ((n as any).find as any)((r: any): any => ((r as any).id as any) === (Mn as any));
  s ? (s as any).isGroup && ((s as any).shape = "swimlane", e && ((s as any).direction = e)) : (s = {
    id: Mn,
    label: "",
    isGroup: !0,
    shape: "swimlane",
    padding: 20,
    ...(e ? {
      direction: e
    } : {})
  }, ((n as any).push as any)(s));
  for (const r of o) (r as any).parentId = Mn;
}
(d as any)(qo, "prepareLayoutForSwimlanes");
function Jo(this: any, t: any): any {
  const e: any = new (Map as any)();
  for (const a of (t as any).nodes ?? []) ((e as any).set as any)((a as any).id, a);
  const n: any = [];
  for (const a of (t as any).edges ?? []) {
    const l: any = (typeof (a as any).start as any) == ("string" as any) ? (a as any).start : void 0,
      g: any = (typeof (a as any).end as any) == ("string" as any) ? (a as any).end : void 0;
    !l || !g || (a as any).labelNodeId || ((n as any).push as any)({
      id: (a as any).id,
      src: l,
      dst: g,
      ref: a
    });
  }
  const o: any = (t as any).nodes ?? [],
    s: any = ((o as any).filter as any)((a: any): any => (a as any).isGroup),
    r: any = ((o as any).filter as any)((a: any): any => !(a as any).isGroup);
  return {
    nodes: (([...(([...s] as any).reverse as any)(), ...r] as any).map as any)((a: any): any => (a as any).id),
    edges: n,
    layout: t,
    nodeById: e
  };
}
(d as any)(Jo, "toGraphView");
function Zo(this: any, t: any, e: any, n: any, o: any): any {
  const {
      layout: s
    }: any = t,
    r: any = (t as any).nodeById,
    i: any = o?.layerGap ?? 100,
    c: any = o?.nodeGap ?? 40;
  let a: any = 0;
  for (const I of (e as any).layers) {
    let u: any = 0;
    for (const p of I) {
      const f: any = ((r as any).get as any)(p);
      if (!f) {
        u++;
        continue;
      }
      (f as any).layer = a, (f as any).order = u;
      const y: any = ((n as any).x as any)[p] ?? (u as any) * (c as any),
        v: any = ((n as any).y as any)[p] ?? (a as any) * (i as any);
      (f as any).x = y, (f as any).y = v, u++;
    }
    a++;
  }
  const l: any = (s as any).nodes ?? [],
    g: any = new (Map as any)(),
    x: any = [];
  for (const I of l) {
    if (!I?.isGroup) continue;
    (I as any).parentId || ((x as any).push as any)(I);
    const u: any = ((l as any).filter as any)((M: any): any => ((M as any).parentId as any) === ((I as any).id as any));
    let p: any = (1 as any) / (0 as any),
      f: any = (-1 as any) / (0 as any),
      y: any = (1 as any) / (0 as any),
      v: any = (-1 as any) / (0 as any);
    for (const M of u) {
      const E: any = (M as any).x ?? ((n as any).x as any)[(M as any).id],
        T: any = (M as any).y ?? ((n as any).y as any)[(M as any).id],
        m: any = (M as any).width ?? 0,
        S: any = (M as any).height ?? 0;
      (E as any) != (null as any) && (T as any) != (null as any) && (p = ((Math as any).min as any)(p, (E as any) - ((m as any) / (2 as any) as any)), f = ((Math as any).max as any)(f, (E as any) + ((m as any) / (2 as any) as any)), y = ((Math as any).min as any)(y, (T as any) - ((S as any) / (2 as any) as any)), v = ((Math as any).max as any)(v, (T as any) + ((S as any) / (2 as any) as any)));
    }
    if ((p as any) === ((1 as any) / (0 as any) as any) || (y as any) === ((1 as any) / (0 as any) as any)) (I as any).x = (I as any).x ?? 0, (I as any).y = (I as any).y ?? 0, (I as any).width = (I as any).width ?? 0, (I as any).height = (I as any).height ?? 0;else {
      const M: any = (I as any).padding ?? 20,
        E: any = (I as any).parentId ? M : (2 as any) * ((En as any)(I) as any),
        T: any = M,
        m: any = (((Math as any).max as any)(0, (f as any) - (p as any)) as any) + (E as any),
        S: any = (((Math as any).max as any)(0, (v as any) - (y as any)) as any) + (T as any),
        A: any = ((p as any) + (f as any) as any) / (2 as any),
        R: any = ((y as any) + (v as any) as any) / (2 as any);
      (I as any).x = A, (I as any).y = R, (I as any).width = m, (I as any).height = S, ((g as any).set as any)((I as any).id, {
        minX: p,
        maxX: f,
        minY: y,
        maxY: v
      });
    }
  }
  if (((x as any).length as any) > (0 as any) && ((g as any).size as any) > (0 as any)) {
    let I: any = (1 as any) / (0 as any),
      u: any = (-1 as any) / (0 as any),
      p: any = 0;
    for (const f of x) {
      const y: any = (f as any).padding ?? 20;
      (y as any) > (p as any) && (p = y);
      const v: any = ((g as any).get as any)((f as any).id);
      v && (I = ((Math as any).min as any)(I, (v as any).minY), u = ((Math as any).max as any)(u, (v as any).maxY));
    }
    if ((I as any) !== ((1 as any) / (0 as any) as any) && (u as any) !== ((-1 as any) / (0 as any) as any)) {
      const f: any = ((Math as any).max as any)(0, (u as any) - (I as any)),
        v: any = ((Math as any).max as any)(p, 36),
        M: any = (f as any) + ((2 as any) * (v as any) as any),
        E: any = ((I as any) + (u as any) as any) / (2 as any);
      for (const k of x) (k as any).y = E, (k as any).height = M, (k as any).swimlaneContentTop = I;
      const T: any = (([...x] as any).sort as any)((k: any, O: any): any => {
          const _: any = (k as any).x ?? 0,
            H: any = (O as any).x ?? 0;
          return (_ as any) - (H as any);
        }),
        m: any = [],
        S: any = [],
        A: any = [];
      for (const k of T) {
        const O: any = ((g as any).get as any)((k as any).id);
        if (!O) continue;
        const _: any = (((Math as any).max as any)(0, ((O as any).maxX as any) - ((O as any).minX as any)) as any) + ((2 as any) * ((En as any)(k) as any) as any),
          H: any = (((O as any).minX as any) + ((O as any).maxX as any) as any) / (2 as any);
        ((m as any).push as any)((k as any).id), ((S as any).push as any)(H), ((A as any).push as any)(_);
      }
      const R: any = (m as any).length;
      if ((R as any) > (0 as any)) {
        const k: any = new (Map as any)();
        if ((R as any) === (1 as any)) ((k as any).set as any)((m as any)[0], (A as any)[0]);else {
          const O: any = [];
          for (let j: any = 0; (j as any) < ((R as any) - (1 as any) as any); j++) ((O as any).push as any)(((S as any)[(j as any) + (1 as any)] as any) - ((S as any)[j] as any));
          const _: any = new (Array as any)(R);
          (_ as any)[0] = 0;
          for (let j: any = 0; (j as any) < ((R as any) - (1 as any) as any); j++) (_ as any)[(j as any) + (1 as any)] = ((2 as any) * ((O as any)[j] as any) as any) - ((_ as any)[j] as any);
          let H: any = 0,
            P: any = (Number as any).POSITIVE_INFINITY;
          for (let j: any = 0; (j as any) < (R as any); j++) {
            const J: any = (A as any)[j];
            ((j as any) % (2 as any) as any) === (0 as any) ? H = ((Math as any).max as any)(H, (J as any) - ((_ as any)[j] as any)) : P = ((Math as any).min as any)(P, ((_ as any)[j] as any) - (J as any));
          }
          let G: any = H;
          (H as any) <= (P as any) ? G = ((H as any) + (P as any) as any) / (2 as any) : G = H;
          for (let j: any = 0; (j as any) < (R as any); j++) {
            const J: any = ((_ as any)[j] as any) + ((((j as any) % (2 as any) as any) === (0 as any) ? G : -G) as any),
              dt: any = ((Math as any).max as any)((A as any)[j], J);
            ((k as any).set as any)((m as any)[j], dt);
          }
        }
        for (const O of x) {
          const _: any = ((k as any).get as any)((O as any).id);
          (_ as any) != (null as any) && ((O as any).width = _), (Ko as any)(O);
        }
      }
    }
  }
}
(d as any)(Zo, "writeBackToLayoutData");
var zr: string = "[EdgeLabelNodes]";
function Qo(this: any, t: any): any {
  const e: any = [],
    n: any = [],
    o: any = new (Map as any)();
  for (const i of (t as any).nodes) ((o as any).set as any)((i as any).id, i);
  for (const i of (t as any).edges) {
    if (!(i as any).label || (((i as any).label as any).length as any) === (0 as any) || (i as any).isLayoutOnly || (i as any).labelNodeId) continue;
    const c: any = (i as any).start ? ((o as any).get as any)((i as any).start) : void 0,
      a: any = (i as any).end ? ((o as any).get as any)((i as any).end) : void 0;
    if (!c || !a) {
      ((Ke as any).warn as any)(zr, `Edge ${(i as any).id} has missing source or target node`);
      continue;
    }
    const l: any = `edge-label-${(i as any).start}-${(i as any).end}-${(i as any).id}`,
      x: any = ((c as any).parentId as any) !== ((a as any).parentId as any) ? (a as any).parentId : (c as any).parentId,
      I: any = {
        id: l,
        label: (i as any).label,
        edgeStart: (i as any).start ?? "",
        edgeEnd: (i as any).end ?? "",
        shape: "labelRect",
        width: 0,
        height: 0,
        isEdgeLabel: !0,
        isDummy: !0,
        parentId: x,
        isGroup: !1,
        labelStyle: ((Array as any).isArray as any)((i as any).labelStyle) ? ((i as any).labelStyle as any)[0] : (i as any).labelStyle ?? "",
        ...((c as any).dir ? {
          dir: (c as any).dir
        } : {})
      };
    ((e as any).push as any)(I), (i as any).labelNodeId = l, (i as any).label = void 0, (i as any).text = void 0;
    const u: any = {
        id: `${(i as any).id}-to-label`,
        start: (i as any).start,
        end: l,
        type: "normal",
        isLayoutOnly: !0
      },
      p: any = {
        id: `${(i as any).id}-from-label`,
        start: l,
        end: (i as any).end,
        type: "normal",
        isLayoutOnly: !0
      };
    ((n as any).push as any)(u, p);
  }
  const s: any = [...(t as any).nodes, ...e],
    r: any = [...(t as any).edges, ...n];
  return {
    ...t,
    nodes: s,
    edges: r
  };
}
(d as any)(Qo, "createEdgeLabelNodes");
var Ft: number = .001;
function oo(this: any, t: any): any {
  const e: any = (t as any).x ?? 0,
    n: any = (t as any).y ?? 0,
    o: any = (t as any).width ?? 0,
    s: any = (t as any).height ?? 0;
  return (o as any) > (0 as any) && (s as any) > (0 as any) ? {
    cx: e,
    cy: n,
    rect: (Ae as any)(e, n, o, s)
  } : void 0;
}
(d as any)(oo, "measuredNodeRect");
function so(this: any, t: any): any {
  if ((t as any).isGroup) return;
  const e: any = (oo as any)(t);
  return e ? {
    id: (String as any)((t as any).id ?? ""),
    cx: (e as any).cx,
    cy: (e as any).cy,
    rect: (e as any).rect
  } : void 0;
}
(d as any)(so, "nodeBoundsInfoFor");
function oe(this: any, t: any, e: any, n: any = Ft): any {
  return (((Math as any).abs as any)(((t as any).x as any) - ((e as any).x as any)) as any) < (n as any) && (((Math as any).abs as any)(((t as any).y as any) - ((e as any).y as any)) as any) < (n as any);
}
(d as any)(oe, "samePoint");
function ft(this: any, t: any, e: any, n: any = Ft): any {
  return (((Math as any).abs as any)(((t as any).x as any) - ((e as any).x as any)) as any) < (n as any);
}
(d as any)(ft, "sameX");
function ht(this: any, t: any, e: any, n: any = Ft): any {
  return (((Math as any).abs as any)(((t as any).y as any) - ((e as any).y as any)) as any) < (n as any);
}
(d as any)(ht, "sameY");
function Tt(this: any, t: any, e: any, n: any = Ft): any {
  return (ht as any)(t, e, n) && (((Math as any).abs as any)(((t as any).x as any) - ((e as any).x as any)) as any) > (n as any);
}
(d as any)(Tt, "isHorizontalSegment");
function wt(this: any, t: any, e: any, n: any = Ft): any {
  return (ft as any)(t, e, n) && (((Math as any).abs as any)(((t as any).y as any) - ((e as any).y as any)) as any) > (n as any);
}
(d as any)(wt, "isVerticalSegment");
function zt(this: any, t: any, e: any, n: any, o: any): any {
  return ((Math as any).max as any)(0, (((Math as any).min as any)(((Math as any).max as any)(t, e), ((Math as any).max as any)(n, o)) as any) - (((Math as any).max as any)(((Math as any).min as any)(t, e), ((Math as any).min as any)(n, o)) as any));
}
(d as any)(zt, "overlapLength");
function ce(this: any, t: any, e: any, n: any = Ft): any {
  return (t as any).horizontal && (e as any).horizontal && (ht as any)((t as any).a, (e as any).a, n) ? (zt as any)(((t as any).a as any).x, ((t as any).b as any).x, ((e as any).a as any).x, ((e as any).b as any).x) : (t as any).vertical && (e as any).vertical && (ft as any)((t as any).a, (e as any).a, n) ? (zt as any)(((t as any).a as any).y, ((t as any).b as any).y, ((e as any).a as any).y, ((e as any).b as any).y) : 0;
}
(d as any)(ce, "sameAxisSegmentOverlapLength");
function Re(this: any, t: any, e: any = Ft): any {
  const n: any = [];
  for (let o: any = 0; (o as any) < (((t as any).length as any) - (1 as any) as any); o++) {
    const s: any = (t as any)[o],
      r: any = (t as any)[(o as any) + (1 as any)],
      i: any = (Tt as any)(s, r, e),
      c: any = (wt as any)(s, r, e);
    (i || c) && ((n as any).push as any)({
      index: o,
      a: s,
      b: r,
      horizontal: i,
      vertical: c
    });
  }
  return n;
}
(d as any)(Re, "orthogonalSegmentsForPoints");
function Qt(this: any, t: any, e: any = Ft): any {
  const n: any = (Re as any)(t, e);
  let o: any = 0;
  for (let s: any = 1; (s as any) < ((n as any).length as any); s++) (((n as any)[(s as any) - (1 as any)] as any).horizontal as any) !== (((n as any)[s] as any).horizontal as any) && o++;
  return o;
}
(d as any)(Qt, "countOrthogonalBends");
function pt(this: any, t: any, e: any = Ft): any {
  const n: any = [];
  for (const o of t) {
    const s: any = ((n as any).length as any) > (0 as any) ? (n as any)[((n as any).length as any) - (1 as any)] : void 0;
    (!s || !(oe as any)(s, o, e)) && ((n as any).push as any)({
      x: (o as any).x,
      y: (o as any).y
    });
  }
  return n;
}
(d as any)(pt, "dedupeConsecutivePoints");
function ro(this: any, t: any, e: any = Ft): any {
  if (!t || ((t as any).length as any) !== (4 as any)) return;
  const [n, o, s, r]: any = t;
  return (Tt as any)(n, o, e) && (wt as any)(o, s, e) && (Tt as any)(s, r, e) ? {
    kind: "HVH",
    p0: n,
    p1: o,
    p2: s,
    p3: r
  } : (wt as any)(n, o, e) && (Tt as any)(o, s, e) && (wt as any)(s, r, e) ? {
    kind: "VHV",
    p0: n,
    p1: o,
    p2: s,
    p3: r
  } : void 0;
}
(d as any)(ro, "classifyThreeSegmentRoute");
function cn(this: any, t: any, e: any, n: any, o: any = 0): any {
  const s: any = ((Math as any).min as any)((t as any).x, (e as any).x),
    r: any = ((Math as any).max as any)((t as any).x, (e as any).x),
    i: any = ((Math as any).min as any)((t as any).y, (e as any).y),
    c: any = ((Math as any).max as any)((t as any).y, (e as any).y);
  return (r as any) > (((n as any).left as any) - (o as any) as any) && (s as any) < (((n as any).right as any) + (o as any) as any) && (c as any) > (((n as any).top as any) - (o as any) as any) && (i as any) < (((n as any).bottom as any) + (o as any) as any);
}
(d as any)(cn, "segmentBoundsOverlapRect");
function io(this: any, t: any, e: any, n: any = 0): any {
  return ((t as any).x as any) > (((e as any).left as any) + (n as any) as any) && ((t as any).x as any) < (((e as any).right as any) - (n as any) as any) && ((t as any).y as any) > (((e as any).top as any) + (n as any) as any) && ((t as any).y as any) < (((e as any).bottom as any) - (n as any) as any);
}
(d as any)(io, "pointInsideRect");
function ts(this: any, t: any, e: any): any {
  return ((t as any).left as any) <= ((e as any).left as any) && ((t as any).right as any) >= ((e as any).right as any) && ((t as any).top as any) <= ((e as any).top as any) && ((t as any).bottom as any) >= ((e as any).bottom as any);
}
(d as any)(ts, "rectContainsRect");
function Je(this: any, t: any, e: any): any {
  return ((t as any).left as any) < ((e as any).right as any) && ((t as any).right as any) > ((e as any).left as any) && ((t as any).top as any) < ((e as any).bottom as any) && ((t as any).bottom as any) > ((e as any).top as any);
}
(d as any)(Je, "rectsOverlap");
function Tn(this: any, t: any, e: any): any {
  return {
    left: ((t as any).left as any) - (e as any),
    right: ((t as any).right as any) + (e as any),
    top: ((t as any).top as any) - (e as any),
    bottom: ((t as any).bottom as any) + (e as any)
  };
}
(d as any)(Tn, "inflateRect");
function Ae(this: any, t: any, e: any, n: any, o: any): any {
  return {
    left: (t as any) - ((n as any) / (2 as any) as any),
    right: (t as any) + ((n as any) / (2 as any) as any),
    top: (e as any) - ((o as any) / (2 as any) as any),
    bottom: (e as any) + ((o as any) / (2 as any) as any)
  };
}
(d as any)(Ae, "rectFromCenterSize");
function qt(this: any, t: any): any {
  return (oo as any)(t)?.rect;
}
(d as any)(qt, "rectOfNodeBounds");
function Ie(this: any, t: any, e: any): any {
  switch (e) {
    case "top":
      return {
        x: (t as any).cx,
        y: ((t as any).rect as any).top
      };
    case "bottom":
      return {
        x: (t as any).cx,
        y: ((t as any).rect as any).bottom
      };
    case "left":
      return {
        x: ((t as any).rect as any).left,
        y: (t as any).cy
      };
    case "right":
      return {
        x: ((t as any).rect as any).right,
        y: (t as any).cy
      };
  }
}
(d as any)(Ie, "portForRectSide");
function co(this: any, t: any, e: any, n: any, o: any, s: any, r: any = Ft): any {
  const i: any = (e as any) === ("left" as any) || (e as any) === ("right" as any),
    c: any = (o as any) === ("left" as any) || (o as any) === ("right" as any);
  if (i && c) {
    if ((e as any) === ("right" as any) && (o as any) === ("left" as any) && ((t as any).x as any) < ((n as any).x as any) || (e as any) === ("left" as any) && (o as any) === ("right" as any) && ((t as any).x as any) > ((n as any).x as any)) {
      if ((ht as any)(t, n, r)) return [t, n];
      const x: any = (((t as any).x as any) + ((n as any).x as any) as any) / (2 as any);
      return [t, {
        x,
        y: (t as any).y
      }, {
        x,
        y: (n as any).y
      }, n];
    }
    if ((e as any) === (o as any)) {
      if ((ht as any)(t, n, r)) return;
      const x: any = (e as any) === ("left" as any) ? (((Math as any).min as any)((t as any).x, (n as any).x) as any) - (s as any) : (((Math as any).max as any)((t as any).x, (n as any).x) as any) + (s as any);
      return [t, {
        x,
        y: (t as any).y
      }, {
        x,
        y: (n as any).y
      }, n];
    }
    return;
  }
  if (!i && !c) {
    if ((e as any) === (o as any)) {
      if ((ft as any)(t, n, r)) return;
      const I: any = (e as any) === ("top" as any) ? (((Math as any).min as any)((t as any).y, (n as any).y) as any) - (s as any) : (((Math as any).max as any)((t as any).y, (n as any).y) as any) + (s as any);
      return [t, {
        x: (t as any).x,
        y: I
      }, {
        x: (n as any).x,
        y: I
      }, n];
    }
    if (!((e as any) === ("bottom" as any) && (o as any) === ("top" as any) && ((t as any).y as any) < ((n as any).y as any) || (e as any) === ("top" as any) && (o as any) === ("bottom" as any) && ((t as any).y as any) > ((n as any).y as any))) return;
    if ((ft as any)(t, n, r)) return [t, n];
    const x: any = (((t as any).y as any) + ((n as any).y as any) as any) / (2 as any);
    return [t, {
      x: (t as any).x,
      y: x
    }, {
      x: (n as any).x,
      y: x
    }, n];
  }
  if (i && !c) {
    const g: any = (e as any) === ("right" as any) && ((n as any).x as any) > ((t as any).x as any) || (e as any) === ("left" as any) && ((n as any).x as any) < ((t as any).x as any),
      x: any = (o as any) === ("top" as any) && ((t as any).y as any) < ((n as any).y as any) || (o as any) === ("bottom" as any) && ((t as any).y as any) > ((n as any).y as any);
    return g && x ? [t, {
      x: (n as any).x,
      y: (t as any).y
    }, n] : void 0;
  }
  const a: any = (e as any) === ("bottom" as any) && ((n as any).y as any) > ((t as any).y as any) || (e as any) === ("top" as any) && ((n as any).y as any) < ((t as any).y as any),
    l: any = (o as any) === ("left" as any) && ((t as any).x as any) < ((n as any).x as any) || (o as any) === ("right" as any) && ((t as any).x as any) > ((n as any).x as any);
  return a && l ? [t, {
    x: (t as any).x,
    y: (n as any).y
  }, n] : void 0;
}
(d as any)(co, "buildOrthogonalPortPath");
function ao(this: any, t: any, e: any, n: any, o: any): any {
  return (e as any) === ("left" as any) || (e as any) === ("right" as any) ? [t, {
    x: o,
    y: (t as any).y
  }, {
    x: o,
    y: (n as any).y
  }, n] : [t, {
    x: (t as any).x,
    y: o
  }, {
    x: (n as any).x,
    y: o
  }, n];
}
(d as any)(ao, "buildSameSideTrackPath");
function an(this: any, t: any): any {
  const e: any = new (Map as any)(),
    n: any = [];
  for (const o of t) {
    if ((o as any).isEdgeLabel) continue;
    const s: any = (so as any)(o);
    s && (((e as any).set as any)((s as any).id, s), ((n as any).push as any)({
      id: (s as any).id,
      rect: (s as any).rect
    }));
  }
  return {
    nodeInfoById: e,
    realNodeRects: n
  };
}
(d as any)(an, "collectRealNodeBounds");
function me(this: any, t: any): any {
  const e: any = [],
    n: any = [];
  for (const o of t) {
    const s: any = (so as any)(o);
    if (!s) continue;
    const r: any = {
      id: (s as any).id,
      rect: (s as any).rect
    };
    (o as any).isEdgeLabel ? ((n as any).push as any)(r) : ((e as any).push as any)(r);
  }
  return {
    realNodeRects: e,
    labelNodeRects: n
  };
}
(d as any)(me, "collectNodeRectEntries");
function es(this: any, t: any, {
  includeEdgeLabels: e = !0
}: any = {}): any {
  const n: any = [];
  for (const o of t) {
    if ((o as any).isGroup || !e && (o as any).isEdgeLabel) continue;
    const s: any = (o as any).x ?? 0,
      r: any = (o as any).y ?? 0,
      i: any = (o as any).width ?? 0,
      c: any = (o as any).height ?? 0;
    ((n as any).push as any)({
      nodeId: (o as any).id,
      ...(Ae as any)(s, r, i, c)
    });
  }
  return n;
}
(d as any)(es, "collectLayoutNodeRects");
function lo(this: any, t: any, e: any, n: any = Ft): any {
  const o: any = (t as any).start,
    s: any = (t as any).end;
  if (!o || !s) return;
  const r: any = ((e as any).get as any)(o),
    i: any = ((e as any).get as any)(s);
  if (!(!r || !i)) return {
    srcId: o,
    dstId: s,
    srcInfo: r,
    dstInfo: i,
    collinearX: (((Math as any).abs as any)(((r as any).cx as any) - ((i as any).cx as any)) as any) < (n as any),
    collinearY: (((Math as any).abs as any)(((r as any).cy as any) - ((i as any).cy as any)) as any) < (n as any)
  };
}
(d as any)(lo, "getNodePairGeometry");
function At(this: any, t: any, e: any, n: any, o: any = [], s: any = 0): any {
  for (const r of n) if (!((o as any).includes as any)((r as any).id) && (cn as any)(t, e, (r as any).rect, -s)) return !0;
  return !1;
}
(d as any)(At, "segmentHitsAnyRect");
function fo(this: any, t: any, e: any, n: any, o: any, s: any = Ft, r: any = 1e-6): any {
  const i: any = (ht as any)(t, e, s),
    c: any = (ft as any)(t, e, s),
    a: any = (ht as any)(n, o, s),
    l: any = (ft as any)(n, o, s);
  if (i && a || c && l || !(i || c) || !(a || l)) return !1;
  const g: any = i ? {
      a: t,
      b: e
    } : {
      a: n,
      b: o
    },
    x: any = c ? {
      a: t,
      b: e
    } : {
      a: n,
      b: o
    },
    I: any = ((g as any).a as any).y,
    u: any = ((Math as any).min as any)(((g as any).a as any).x, ((g as any).b as any).x),
    p: any = ((Math as any).max as any)(((g as any).a as any).x, ((g as any).b as any).x),
    f: any = ((x as any).a as any).x,
    y: any = ((Math as any).min as any)(((x as any).a as any).y, ((x as any).b as any).y),
    v: any = ((Math as any).max as any)(((x as any).a as any).y, ((x as any).b as any).y);
  if ((f as any) < (u as any) || (f as any) > (p as any) || (I as any) < (y as any) || (I as any) > (v as any)) return !1;
  const M: any = (((Math as any).abs as any)((f as any) - (((g as any).a as any).x as any)) as any) < (r as any) && (((Math as any).abs as any)((I as any) - (((g as any).a as any).y as any)) as any) < (r as any) || (((Math as any).abs as any)((f as any) - (((g as any).b as any).x as any)) as any) < (r as any) && (((Math as any).abs as any)((I as any) - (((g as any).b as any).y as any)) as any) < (r as any),
    E: any = (((Math as any).abs as any)((f as any) - (((x as any).a as any).x as any)) as any) < (r as any) && (((Math as any).abs as any)((I as any) - (((x as any).a as any).y as any)) as any) < (r as any) || (((Math as any).abs as any)((f as any) - (((x as any).b as any).x as any)) as any) < (r as any) && (((Math as any).abs as any)((I as any) - (((x as any).b as any).y as any)) as any) < (r as any);
  return !(M && E);
}
(d as any)(fo, "orthogonalSegmentsCross");
function ns(this: any, t: any, e: any, n: any, o: any, s: any = Ft): any {
  const r: any = (ht as any)(t, e, s),
    i: any = (ft as any)(t, e, s),
    c: any = (ht as any)(n, o, s),
    a: any = (ft as any)(n, o, s);
  return i && a && (ft as any)(t, n, s) ? ((zt as any)((t as any).y, (e as any).y, (n as any).y, (o as any).y) as any) > (s as any) : r && c && (ht as any)(t, n, s) ? ((zt as any)((t as any).x, (e as any).x, (n as any).x, (o as any).x) as any) > (s as any) : !1;
}
(d as any)(ns, "sameAxisSegmentsOverlap");
function Ze(this: any, t: any, e: any, n: any, o: any, {
  epsilon: s = Ft,
  skipDegenerateOther: r = !1
}: any = {}): any {
  for (const i of n) {
    if ((i as any) === (o as any) || (i as any).isLayoutOnly) continue;
    const c: any = (i as any).points;
    if (!(!c || ((c as any).length as any) < (2 as any))) for (let a: any = 0; (a as any) < (((c as any).length as any) - (1 as any) as any); a++) {
      const l: any = (c as any)[a],
        g: any = (c as any)[(a as any) + (1 as any)];
      if (!(r && (oe as any)(l, g, s)) && ((fo as any)(t, e, l, g, s) || (ns as any)(t, e, l, g, s))) return !0;
    }
  }
  return !1;
}
(d as any)(Ze, "segmentConflictsWithAnyEdge");
function le(this: any, t: any, e: any, n: any, o: any, s: any = Ft): any {
  const r: any = (ht as any)(t, e, s),
    i: any = (ft as any)(t, e, s),
    c: any = (ht as any)(n, o, s),
    a: any = (ft as any)(n, o, s);
  if (!(r && a || i && c)) return !1;
  const l: any = r ? {
      a: t,
      b: e
    } : {
      a: n,
      b: o
    },
    g: any = r ? {
      a: n,
      b: o
    } : {
      a: t,
      b: e
    },
    x: any = ((l as any).a as any).y,
    I: any = ((Math as any).min as any)(((l as any).a as any).x, ((l as any).b as any).x),
    u: any = ((Math as any).max as any)(((l as any).a as any).x, ((l as any).b as any).x),
    p: any = ((g as any).a as any).x,
    f: any = ((Math as any).min as any)(((g as any).a as any).y, ((g as any).b as any).y),
    y: any = ((Math as any).max as any)(((g as any).a as any).y, ((g as any).b as any).y);
  return (p as any) > ((I as any) + (s as any) as any) && (p as any) < ((u as any) - (s as any) as any) && (x as any) > ((f as any) + (s as any) as any) && (x as any) < ((y as any) - (s as any) as any);
}
(d as any)(le, "orthogonalSegmentsStrictlyCross");
function wn(this: any, t: any, e: any, n: any): any {
  const o: any = ((Math as any).min as any)(e, n),
    s: any = ((Math as any).max as any)(e, n);
  return (t as any) > ((o as any) + (Ft as any) as any) && (t as any) < ((s as any) - (Ft as any) as any);
}
(d as any)(wn, "strictlyBetween");
function os(this: any, t: any, e: any, n: any): any {
  return (ft as any)(t, e) && (ft as any)(e, n) ? (wn as any)((e as any).y, (t as any).y, (n as any).y) : (ht as any)(t, e) && (ht as any)(e, n) ? (wn as any)((e as any).x, (t as any).x, (n as any).x) : !1;
}
(d as any)(os, "isCollinearIntermediate");
function ss(this: any, t: any): any {
  let e: any = !1;
  const n: any = [];
  for (let o: any = 0; (o as any) < ((t as any).length as any); o++) {
    const s: any = (n as any)[((n as any).length as any) - (1 as any)],
      r: any = (t as any)[o],
      i: any = ((o as any) + (1 as any) as any) < ((t as any).length as any) ? (t as any)[(o as any) + (1 as any)] : void 0;
    if (s && i) {
      if ((oe as any)(s, i)) {
        o++, e = !0;
        continue;
      }
      if ((os as any)(s, r, i)) {
        e = !0;
        continue;
      }
    }
    ((n as any).push as any)(r);
  }
  return {
    points: n,
    changed: e
  };
}
(d as any)(ss, "simplifyPolylineOnce");
function Qe(this: any, t: any): any {
  const e: any = [(t as any)[0]];
  for (let o: any = 1; (o as any) < ((t as any).length as any); o++) {
    const s: any = (e as any)[((e as any).length as any) - (1 as any)],
      r: any = (t as any)[o];
    if (!(ft as any)(s, r) && !(ht as any)(s, r)) {
      const i: any = ((e as any).length as any) >= (2 as any) ? (e as any)[((e as any).length as any) - (2 as any)] : void 0,
        a: any = (i ? (ft as any)(i, s) : !1) ? {
          x: (s as any).x,
          y: (r as any).y
        } : {
          x: (r as any).x,
          y: (s as any).y
        };
      ((e as any).push as any)(a);
    }
    ((e as any).push as any)(r);
  }
  const n: any = [];
  for (const o of e) {
    const s: any = (n as any)[((n as any).length as any) - (1 as any)];
    (!s || !(oe as any)(s, o)) && ((n as any).push as any)(o);
  }
  return n;
}
(d as any)(Qe, "orthogonalizePolyline");
function ae(this: any, t: any): any {
  if (((t as any).length as any) < (3 as any)) return t;
  let e: any = [...t];
  for (let n: any = 0; (n as any) < (32 as any); n++) {
    const o: any = (ss as any)(e);
    if (e = (o as any).points, !(o as any).changed) break;
  }
  return e;
}
(d as any)(ae, "simplifyPolyline");
var nt: number = .001,
  Vr: number = .5,
  Oo: number = 4;
function uo(this: any, t: any, e: any, n: any): any {
  const o: any = t;
  if ((o as any).isLayoutOnly || !(o as any).points || (((o as any).points as any).length as any) < (n as any)) return;
  const s: any = (o as any).start ? ((e as any).get as any)((o as any).start) : void 0,
    r: any = (o as any).end ? ((e as any).get as any)((o as any).end) : void 0;
  return {
    edge: o,
    points: (o as any).points,
    srcRect: s ? (qt as any)(s) : void 0,
    dstRect: r ? (qt as any)(r) : void 0
  };
}
(d as any)(uo, "endpointContextFor");
function rs(this: any, t: any, e: any, n: any): any {
  if ((ht as any)(t, e, nt)) return {
    x: ((t as any).x as any) < ((n as any).left as any) ? (n as any).left : (n as any).right,
    y: (t as any).y
  };
  if ((ft as any)(t, e, nt)) {
    const o: any = ((t as any).y as any) < ((n as any).top as any) ? (n as any).top : (n as any).bottom;
    return {
      x: (t as any).x,
      y: o
    };
  }
  return {
    x: ((Math as any).min as any)((n as any).right, ((Math as any).max as any)((n as any).left, (t as any).x)),
    y: ((Math as any).min as any)((n as any).bottom, ((Math as any).max as any)((n as any).top, (t as any).y))
  };
}
(d as any)(rs, "segmentEnterPoint");
function An(this: any, t: any, e: any, n: any): any {
  const o: any = n ? 1 : -1;
  let s: any = n ? 0 : ((t as any).length as any) - (1 as any);
  for (; (s as any) >= (0 as any) && (s as any) < ((t as any).length as any) && (io as any)((t as any)[s], e, Vr);) s += o;
  if ((s as any) < (0 as any) || (s as any) >= ((t as any).length as any)) return t;
  const r: any = (s as any) - (o as any);
  if ((r as any) < (0 as any) || (r as any) >= ((t as any).length as any)) return t;
  const i: any = (rs as any)((t as any)[s], (t as any)[r], e);
  return n ? [i, ...((t as any).slice as any)(s)] : [...((t as any).slice as any)(0, (s as any) + (1 as any)), i];
}
(d as any)(An, "clipEndpoint");
function is(this: any, t: any, e: any): any {
  for (const n of t) {
    const o: any = (uo as any)(n, e, 2);
    if (!o) continue;
    let s: any = [...(o as any).points];
    (o as any).srcRect && (s = (An as any)(s, (o as any).srcRect, !0)), (o as any).dstRect && (s = (An as any)(s, (o as any).dstRect, !1)), s = (ae as any)((Qe as any)(s)), s = (ho as any)(s, (o as any).srcRect, (o as any).dstRect), ((o as any).edge as any).points = (ae as any)((Qe as any)(s));
  }
}
(d as any)(is, "clipEdgeEndpointsToNodeBoundaries");
function Rn(this: any, t: any, e: any, n: any, o: any = !1): any {
  if ((ht as any)(t, e, nt)) {
    if (((e as any).y as any) < (((n as any).top as any) - (nt as any) as any) || ((e as any).y as any) > (((n as any).bottom as any) + (nt as any) as any)) return e;
    if (o) {
      if (((t as any).x as any) < (((n as any).left as any) - (nt as any) as any)) return {
        x: (n as any).left,
        y: (t as any).y
      };
      if (((t as any).x as any) > (((n as any).right as any) + (nt as any) as any)) return {
        x: (n as any).right,
        y: (t as any).y
      };
    }
    return {
      x: (((Math as any).abs as any)(((e as any).x as any) - ((n as any).left as any)) as any) <= (((Math as any).abs as any)(((e as any).x as any) - ((n as any).right as any)) as any) ? (n as any).left : (n as any).right,
      y: (t as any).y
    };
  }
  if ((ft as any)(t, e, nt)) {
    if (((e as any).x as any) < (((n as any).left as any) - (nt as any) as any) || ((e as any).x as any) > (((n as any).right as any) + (nt as any) as any)) return e;
    if (o) {
      if (((t as any).y as any) < (((n as any).top as any) - (nt as any) as any)) return {
        x: (t as any).x,
        y: (n as any).top
      };
      if (((t as any).y as any) > (((n as any).bottom as any) + (nt as any) as any)) return {
        x: (t as any).x,
        y: (n as any).bottom
      };
    }
    const s: any = (((Math as any).abs as any)(((e as any).y as any) - ((n as any).top as any)) as any) <= (((Math as any).abs as any)(((e as any).y as any) - ((n as any).bottom as any)) as any);
    return {
      x: (t as any).x,
      y: s ? (n as any).top : (n as any).bottom
    };
  }
  return e;
}
(d as any)(Rn, "snapEndpointToBoundary");
function tn(this: any, t: any, e: any, n: any): any {
  const o: any = (t as any)[e];
  for (let s: any = (e as any) + (n as any); (s as any) >= (0 as any) && (s as any) < ((t as any).length as any); s += n) {
    const r: any = (t as any)[s];
    if (!(oe as any)(r, o, nt)) return r;
  }
  return (t as any)[(e as any) + (n as any)];
}
(d as any)(tn, "firstDistinctAdjacent");
function en(this: any, t: any, e: any): any {
  const n: any = (t as any) + (Oo as any),
    o: any = (e as any) - (Oo as any);
  return (n as any) <= (o as any) ? {
    lo: n,
    hi: o
  } : {
    lo: ((t as any) + (e as any) as any) / (2 as any),
    hi: ((t as any) + (e as any) as any) / (2 as any)
  };
}
(d as any)(en, "cornerClearanceRange");
function Nn(this: any, t: any, e: any, n: any): any {
  const {
    lo: o,
    hi: s
  }: any = (en as any)(e, n);
  return ((Math as any).min as any)(s, ((Math as any).max as any)(o, t));
}
(d as any)(Nn, "clampToCornerClearance");
function cs(this: any, t: any): any {
  const e: any = ((Math as any).max as any)(...((t as any).map as any)((o: any): any => (o as any).lo)),
    n: any = ((Math as any).min as any)(...((t as any).map as any)((o: any): any => (o as any).hi));
  if (!((e as any) > (n as any))) return {
    lo: e,
    hi: n
  };
}
(d as any)(cs, "intersectRanges");
function On(this: any, t: any, e: any): any {
  return (e as any) === ("left" as any) || (e as any) === ("right" as any) ? (en as any)((t as any).top, (t as any).bottom) : (en as any)((t as any).left, (t as any).right);
}
(d as any)(On, "clearanceRangeForSide");
function nn(this: any, t: any, e: any, n: any): any {
  const o: any = ((t as any).y as any) >= (((n as any).top as any) - (nt as any) as any) && ((t as any).y as any) <= (((n as any).bottom as any) + (nt as any) as any),
    s: any = ((t as any).x as any) >= (((n as any).left as any) - (nt as any) as any) && ((t as any).x as any) <= (((n as any).right as any) + (nt as any) as any);
  if ((ht as any)(t, e, nt) && o) {
    if ((((Math as any).abs as any)(((t as any).x as any) - ((n as any).left as any)) as any) < (nt as any)) return "left";
    if ((((Math as any).abs as any)(((t as any).x as any) - ((n as any).right as any)) as any) < (nt as any)) return "right";
  }
  if ((ft as any)(t, e, nt) && s) {
    if ((((Math as any).abs as any)(((t as any).y as any) - ((n as any).top as any)) as any) < (nt as any)) return "top";
    if ((((Math as any).abs as any)(((t as any).y as any) - ((n as any).bottom as any)) as any) < (nt as any)) return "bottom";
  }
}
(d as any)(nn, "terminalSideForSegment");
function Pe(this: any, t: any): any {
  return (t as any) === ("left" as any) || (t as any) === ("right" as any);
}
(d as any)(Pe, "isHorizontalSide");
function as(this: any, t: any, e: any, n: any, o: any, s: any): any {
  const r: any = [],
    i: any = n ? (nn as any)(t, e, n) : void 0,
    c: any = o ? (nn as any)(e, t, o) : void 0;
  return n && i && ((Pe as any)(i) as any) === (s as any) && ((r as any).push as any)((On as any)(n, i)), o && c && ((Pe as any)(c) as any) === (s as any) && ((r as any).push as any)((On as any)(o, c)), ((r as any).length as any) > (0 as any) ? (cs as any)(r) : void 0;
}
(d as any)(as, "straightClearanceRange");
function Pn(this: any, t: any, e: any, n: any, o: any, s: any): any {
  const r: any = (as as any)(t, e, n, o, s);
  if (!r) return;
  const i: any = s ? (t as any).y : (t as any).x,
    c: any = ((Math as any).min as any)((r as any).hi, ((Math as any).max as any)((r as any).lo, i));
  if (!((((Math as any).abs as any)((c as any) - (i as any)) as any) < (nt as any))) return s ? [{
    x: (t as any).x,
    y: c
  }, {
    x: (e as any).x,
    y: c
  }] : [{
    x: c,
    y: (t as any).y
  }, {
    x: c,
    y: (e as any).y
  }];
}
(d as any)(Pn, "clearStraightEndpointCornerAxis");
function ho(this: any, t: any, e: any, n: any): any {
  if (((t as any).length as any) !== (2 as any)) return t;
  const [o, s]: any = t;
  return (ht as any)(o, s, nt) ? (Pn as any)(o, s, e, n, !0) ?? t : (ft as any)(o, s, nt) ? (Pn as any)(o, s, e, n, !1) ?? t : t;
}
(d as any)(ho, "clearStraightEndpointCornerConnections");
function ls(this: any, t: any, e: any, n: any): any {
  return (Pe as any)(n) ? {
    x: (t as any).x,
    y: (Nn as any)((t as any).y, (e as any).top, (e as any).bottom)
  } : {
    x: (Nn as any)((t as any).x, (e as any).left, (e as any).right),
    y: (t as any).y
  };
}
(d as any)(ls, "cornerClearedEndpoint");
function fs(this: any, t: any, e: any, n: any, o: any, s: any, r: any): any {
  const i: any = ((t as any).map as any)((c: any): any => ({
    ...c
  }));
  for (let c: any = e; (c as any) >= (0 as any) && (c as any) < ((t as any).length as any); c += n) {
    const a: any = (t as any)[c];
    if (r && !(ht as any)(a, o, nt) || !r && !(ft as any)(a, o, nt)) break;
    r ? ((i as any)[c] as any).y = (s as any).y : ((i as any)[c] as any).x = (s as any).x;
  }
  return i;
}
(d as any)(fs, "moveCollinearEndpointRun");
function Bn(this: any, t: any, e: any, n: any): any {
  if (((t as any).length as any) < (2 as any)) return t;
  const o: any = n ? 0 : ((t as any).length as any) - (1 as any),
    s: any = n ? 1 : -1,
    r: any = (t as any)[o],
    i: any = (tn as any)(t, o, s);
  if (!i) return t;
  const c: any = (nn as any)(r, i, e);
  if (!c) return t;
  const a: any = (Pe as any)(c),
    l: any = (ls as any)(r, e, c);
  return (oe as any)(r, l, nt) ? t : (fs as any)(t, o, s, r, l, a);
}
(d as any)(Bn, "clearEndpointCornerConnection");
function kn(this: any, t: any, e: any, n: any): any {
  const o: any = (((Math as any).min as any)((t as any).x, (e as any).x) as any) >= (((n as any).left as any) - (nt as any) as any) && (((Math as any).max as any)((t as any).x, (e as any).x) as any) <= (((n as any).right as any) + (nt as any) as any),
    s: any = (((Math as any).min as any)((t as any).y, (e as any).y) as any) >= (((n as any).top as any) - (nt as any) as any) && (((Math as any).max as any)((t as any).y, (e as any).y) as any) <= (((n as any).bottom as any) + (nt as any) as any);
  if ((((Math as any).abs as any)(((t as any).y as any) - ((n as any).top as any)) as any) < (nt as any) && (((Math as any).abs as any)(((e as any).y as any) - ((n as any).top as any)) as any) < (nt as any) && o) return "top";
  if ((((Math as any).abs as any)(((t as any).y as any) - ((n as any).bottom as any)) as any) < (nt as any) && (((Math as any).abs as any)(((e as any).y as any) - ((n as any).bottom as any)) as any) < (nt as any) && o) return "bottom";
  if ((((Math as any).abs as any)(((t as any).x as any) - ((n as any).left as any)) as any) < (nt as any) && (((Math as any).abs as any)(((e as any).x as any) - ((n as any).left as any)) as any) < (nt as any) && s) return "left";
  if ((((Math as any).abs as any)(((t as any).x as any) - ((n as any).right as any)) as any) < (nt as any) && (((Math as any).abs as any)(((e as any).x as any) - ((n as any).right as any)) as any) < (nt as any) && s) return "right";
}
(d as any)(kn, "borderSideForSegment");
function _n(this: any, t: any, e: any, n: any, o: any): any {
  switch (t) {
    case "top":
      return (ft as any)(e, n, nt) && ((n as any).y as any) < (((o as any).top as any) - (nt as any) as any);
    case "bottom":
      return (ft as any)(e, n, nt) && ((n as any).y as any) > (((o as any).bottom as any) + (nt as any) as any);
    case "left":
      return (ht as any)(e, n, nt) && ((n as any).x as any) < (((o as any).left as any) - (nt as any) as any);
    case "right":
      return (ht as any)(e, n, nt) && ((n as any).x as any) > (((o as any).right as any) + (nt as any) as any);
  }
}
(d as any)(_n, "leavesOutward");
function Fn(this: any, t: any, e: any, n: any): any {
  if (((t as any).length as any) < (3 as any)) return t;
  if (n) {
    const r: any = (kn as any)((t as any)[0], (t as any)[1], e);
    return r && (_n as any)(r, (t as any)[1], (t as any)[2], e) ? ((t as any).slice as any)(1) : t;
  }
  const o: any = ((t as any).length as any) - (1 as any),
    s: any = (kn as any)((t as any)[(o as any) - (1 as any)], (t as any)[o], e);
  return s && (_n as any)(s, (t as any)[(o as any) - (1 as any)], (t as any)[(o as any) - (2 as any)], e) ? ((t as any).slice as any)(0, o) : t;
}
(d as any)(Fn, "collapseOwnBorderStub");
function ds(this: any, t: any, e: any, n: any): any {
  let o: any = t;
  if (e) {
    const r: any = (tn as any)(o, 0, 1);
    if (r) {
      const i: any = (Rn as any)(r, (o as any)[0], e);
      (i as any) !== ((o as any)[0] as any) && (o = [i, ...((o as any).slice as any)(1)]);
    }
    o = (Fn as any)(o, e, !0);
  }
  if (n) {
    const r: any = ((o as any).length as any) - (1 as any),
      i: any = (tn as any)(o, r, -1);
    if (i) {
      const c: any = (Rn as any)(i, (o as any)[r], n, !0);
      (c as any) !== ((o as any)[r] as any) && (o = [...((o as any).slice as any)(0, r), c]);
    }
    o = (Fn as any)(o, n, !1);
  }
  const s: any = (ho as any)(o, e, n);
  return (s as any) !== (o as any) || ((o as any).length as any) === (2 as any) ? s : (e && (o = (Bn as any)(o, e, !0)), n && (o = (Bn as any)(o, n, !1)), o);
}
(d as any)(ds, "snapAndCollapseEndpoints");
function Dn(this: any, t: any, e: any): any {
  for (const n of t) {
    const o: any = (uo as any)(n, e, 2);
    if (!o) continue;
    const s: any = (pt as any)((o as any).points, nt),
      r: any = (ds as any)(s, (o as any).srcRect, (o as any).dstRect);
    if (((r as any).length as any) < (3 as any)) {
      ((o as any).edge as any).points = r;
      continue;
    }
    const i: any = [(r as any)[0], {
      ...(r as any)[0]
    }, ...((r as any).slice as any)(1, -1), (r as any)[((r as any).length as any) - (1 as any)], {
      ...(r as any)[((r as any).length as any) - (1 as any)]
    }];
    ((o as any).edge as any).points = i;
  }
}
(d as any)(Dn, "prepareEdgeEndpointsForRenderer");
function go(this: any, t: any): any {
  return new (Map as any)(((t as any).map as any)((e: any): any => [(e as any).id, e]));
}
(d as any)(go, "buildNodeMap");
function us(this: any, t: any, e: any): any {
  let n: any = (t as any).parentId,
    o: any = null;
  for (; n;) {
    const s: any = ((e as any).get as any)(n);
    if (!s?.isGroup) break;
    o = (s as any).id, n = (s as any).parentId;
  }
  return o;
}
(d as any)(us, "resolveTopLevelGroupId");
function Hn(this: any, t: any, e: any): any {
  let n: any = 0,
    o: any = (t as any).parentId;
  for (; o;) {
    const s: any = ((e as any).get as any)(o);
    if (!s?.isGroup) break;
    n++, o = (s as any).parentId;
  }
  return n;
}
(d as any)(Hn, "groupDepth");
function po(this: any, t: any): any {
  let e: any = (1 as any) / (0 as any),
    n: any = (-1 as any) / (0 as any),
    o: any = (1 as any) / (0 as any),
    s: any = (-1 as any) / (0 as any);
  for (const r of t) {
    const i: any = (r as any).x,
      c: any = (r as any).y;
    if ((typeof i as any) != ("number" as any) || (typeof c as any) != ("number" as any)) continue;
    const a: any = (r as any).width ?? 0,
      l: any = (r as any).height ?? 0;
    e = ((Math as any).min as any)(e, (i as any) - ((a as any) / (2 as any) as any)), n = ((Math as any).max as any)(n, (i as any) + ((a as any) / (2 as any) as any)), o = ((Math as any).min as any)(o, (c as any) - ((l as any) / (2 as any) as any)), s = ((Math as any).max as any)(s, (c as any) + ((l as any) / (2 as any) as any));
  }
  return (e as any) === ((1 as any) / (0 as any) as any) || (o as any) === ((1 as any) / (0 as any) as any) ? null : {
    minX: e,
    maxX: n,
    minY: o,
    maxY: s
  };
}
(d as any)(po, "boundsForChildren");
function hs(this: any, t: any, e: any): any {
  const n: any = (t as any).padding ?? 20;
  (t as any).x = (((e as any).minX as any) + ((e as any).maxX as any) as any) / (2 as any), (t as any).y = (((e as any).minY as any) + ((e as any).maxY as any) as any) / (2 as any), (t as any).width = (((Math as any).max as any)(0, ((e as any).maxX as any) - ((e as any).minX as any)) as any) + (n as any), (t as any).height = (((Math as any).max as any)(0, ((e as any).maxY as any) - ((e as any).minY as any)) as any) + (n as any);
}
(d as any)(hs, "applyGroupBounds");
function gs(this: any, t: any): any {
  const e: any = (go as any)(t),
    n: any = ((((t as any).filter as any)((o: any): any => (o as any).isGroup && (o as any).parentId) as any).sort as any)((o: any, s: any): any => ((Hn as any)(s, e) as any) - ((Hn as any)(o, e) as any));
  for (const o of n) {
    const s: any = ((t as any).filter as any)((i: any): any => ((i as any).parentId as any) === ((o as any).id as any)),
      r: any = (po as any)(s);
    r && (hs as any)(o, r);
  }
}
(d as any)(gs, "recomputeNestedGroupBounds");
function on(this: any, t: any, e: any): any {
  const n: any = (t as any).nodes ?? [],
    o: any = (t as any).edges ?? [],
    s: any = ((n as any).filter as any)((a: any): any => !(a as any).isGroup);
  let r: any = (1 as any) / (0 as any),
    i: any = (-1 as any) / (0 as any);
  for (const a of s) {
    const l: any = (a as any)[e];
    (typeof l as any) == ("number" as any) && (r = ((Math as any).min as any)(r, l), i = ((Math as any).max as any)(i, l));
  }
  if (!((Number as any).isFinite as any)(r) || !((Number as any).isFinite as any)(i)) return !1;
  const c: any = (d as any)((a: any): any => ((r as any) + (i as any) as any) - (a as any), "mirror");
  for (const a of n) {
    const l: any = (a as any)[e];
    (typeof l as any) == ("number" as any) && ((a as any)[e] = (c as any)(l));
    const g: any = (a as any).groupTitleRect;
    g && ((a as any).groupTitleRect = (e as any) === ("x" as any) ? {
      ...g,
      left: (c as any)((g as any).right),
      right: (c as any)((g as any).left)
    } : {
      ...g,
      top: (c as any)((g as any).bottom),
      bottom: (c as any)((g as any).top)
    });
  }
  for (const a of o) for (const l of (a as any).points ?? []) (l as any)[e] = (c as any)((l as any)[e]);
  return !0;
}
(d as any)(on, "mirrorAxis");
function ps(this: any, t: any): any {
  return ((((t as any).nodes ?? []) as any).some as any)((n: any): any => !(n as any).isGroup) ? (on as any)(t, "y") : !0;
}
(d as any)(ps, "applyBtDirectionTransform");
function ms(this: any, t: any, e: any = "LR"): any {
  const n: any = (t as any).nodes ?? [],
    o: any = (t as any).edges ?? [],
    s: any = ((n as any).filter as any)((P: any): any => !(P as any).isGroup);
  let r: any = (1 as any) / (0 as any),
    i: any = (1 as any) / (0 as any);
  for (const P of s) {
    const G: any = (P as any).x ?? 0,
      j: any = (P as any).y ?? 0;
    (G as any) < (r as any) && (r = G), (j as any) < (i as any) && (i = j);
  }
  if (!((Number as any).isFinite as any)(r) || !((Number as any).isFinite as any)(i)) return !1;
  const c: number = 36;
  let a: any = 0,
    l: any = 0;
  for (const P of s) a += (P as any).width ?? 0, l += (P as any).height ?? 0;
  const g: any = (a as any) / ((s as any).length as any),
    x: any = (l as any) / ((s as any).length as any),
    I: any = (x as any) > (0 as any) ? ((Math as any).max as any)(1, (g as any) / (x as any)) : 1;
  for (const P of s) {
    const G: any = (P as any).x ?? 0,
      J: any = (((((P as any).y ?? 0) as any) - (i as any) as any) * (I as any) as any) + (c as any),
      dt: any = (G as any) - (r as any);
    (P as any).x = J, (P as any).y = dt;
  }
  for (const P of o) if ((P as any).points) for (const G of (P as any).points) {
    const j: any = (G as any).x,
      dt: any = ((((G as any).y as any) - (i as any) as any) * (I as any) as any) + (c as any),
      mt: any = (j as any) - (r as any);
    (G as any).x = dt, (G as any).y = mt;
  }
  (gs as any)(n);
  const u: any = ((n as any).filter as any)((P: any): any => (P as any).isGroup && !(P as any).parentId);
  if (((u as any).length as any) === (0 as any)) return (e as any) === ("RL" as any) && (on as any)(t, "x"), !0;
  const p: any = (go as any)(n),
    f: any = new (Map as any)();
  for (const P of n) {
    if ((P as any).isGroup) continue;
    const G: any = (us as any)(P, p);
    if (!G) continue;
    const j: any = ((f as any).get as any)(G) ?? [];
    ((j as any).push as any)(P), ((f as any).set as any)(G, j);
  }
  let y: any = 0;
  for (const P of u) {
    const G: any = (P as any).padding ?? 0;
    (G as any) > (y as any) && (y = G);
  }
  const v: any = [];
  let M: any = (1 as any) / (0 as any),
    E: any = (-1 as any) / (0 as any);
  for (const P of u) {
    const G: any = ((f as any).get as any)((P as any).id) ?? [],
      j: any = (po as any)(G);
    j && (M = ((Math as any).min as any)(M, (j as any).minX), E = ((Math as any).max as any)(E, (j as any).maxX), ((v as any).push as any)({
      lane: P,
      contentTop: (j as any).minY,
      contentBottom: (j as any).maxY,
      centerY: (((j as any).minY as any) + ((j as any).maxY as any) as any) / (2 as any)
    }));
  }
  if ((M as any) === ((1 as any) / (0 as any) as any) || (E as any) === ((-1 as any) / (0 as any) as any)) return !0;
  const T: any = ((Math as any).max as any)(0, (E as any) - (M as any)),
    m: any = ((Math as any).max as any)(y, 10),
    S: any = (T as any) + ((2 as any) * (m as any) as any),
    A: any = (c as any) + (S as any),
    O: any = ((((M as any) + (E as any) as any) / (2 as any) as any) - ((S as any) / (2 as any) as any) as any) - (c as any),
    _: any = (O as any) + ((A as any) / (2 as any) as any),
    H: any = ((Math as any).max as any)(y, c);
  ((v as any).sort as any)((P: any, G: any): any => ((P as any).centerY as any) - ((G as any).centerY as any));
  for (let P: any = 0; (P as any) < ((v as any).length as any); P++) {
    const G: any = (v as any)[P];
    let j: any, J: any;
    if ((P as any) === (0 as any) ? j = ((G as any).contentTop as any) - (H as any) : j = ((((v as any)[(P as any) - (1 as any)] as any).contentBottom as any) + ((G as any).contentTop as any) as any) / (2 as any), (P as any) === (((v as any).length as any) - (1 as any) as any)) J = ((G as any).contentBottom as any) + (H as any);else {
      const kt: any = (v as any)[(P as any) + (1 as any)];
      J = (((G as any).contentBottom as any) + ((kt as any).contentTop as any) as any) / (2 as any);
    }
    const dt: any = ((Math as any).max as any)(0, (J as any) - (j as any)),
      mt: any = ((j as any) + (J as any) as any) / (2 as any);
    ((G as any).lane as any).x = _, ((G as any).lane as any).y = mt, ((G as any).lane as any).width = A, ((G as any).lane as any).height = dt, ((G as any).lane as any).swimlaneContentTop = (G as any).contentTop, ((G as any).lane as any).groupTitleRect = {
      left: O,
      right: (O as any) + (c as any),
      top: j,
      bottom: J
    };
  }
  return (e as any) === ("RL" as any) && (on as any)(t, "x"), !0;
}
(d as any)(ms, "applyLrDirectionTransform");
var se: number = 1e-6,
  jr: number = 8,
  ze: any = jr,
  Ur: any = [0, ze, -ze, (2 as any) * (ze as any), (-2 as any) * (ze as any)];
function ys(this: any, t: any, e: any): any {
  const {
    nodeInfoById: n,
    realNodeRects: o
  }: any = (an as any)(e);
  for (const s of t) {
    if ((s as any).isLayoutOnly) continue;
    const r: any = (s as any).points;
    if (!r || ((r as any).length as any) < (4 as any)) continue;
    const i: any = (ro as any)((pt as any)(r, se), se);
    if (!i) continue;
    const {
        p3: c
      }: any = i,
      a: any = ((i as any).kind as any) === ("HVH" as any),
      l: any = (lo as any)(s, n, se);
    if (!l) continue;
    const {
      srcId: g,
      dstId: x,
      srcInfo: I,
      dstInfo: u,
      collinearX: p,
      collinearY: f
    }: any = l;
    if (p || f) continue;
    let y: any;
    const v: any = (I as any).rect;
    for (const M of Ur) {
      let E: any, T: any, m: any;
      if (a) {
        const _: any = ((u as any).cy as any) > ((I as any).cy as any) ? (v as any).bottom : (v as any).top,
          H: any = ((I as any).cx as any) + (M as any);
        if ((H as any) <= (((v as any).left as any) + (se as any) as any) || (H as any) >= (((v as any).right as any) - (se as any) as any)) continue;
        E = {
          x: H,
          y: _
        }, T = {
          x: H,
          y: (c as any).y
        }, m = {
          x: (c as any).x,
          y: (c as any).y
        };
      } else {
        const _: any = ((u as any).cx as any) > ((I as any).cx as any) ? (v as any).right : (v as any).left,
          H: any = ((I as any).cy as any) + (M as any);
        if ((H as any) <= (((v as any).top as any) + (se as any) as any) || (H as any) >= (((v as any).bottom as any) - (se as any) as any)) continue;
        E = {
          x: _,
          y: H
        }, T = {
          x: (c as any).x,
          y: H
        }, m = {
          x: (c as any).x,
          y: (c as any).y
        };
      }
      const S: any = (oe as any)(E, T, se),
        A: any = (oe as any)(T, m, se);
      if (S && A || !S && (At as any)(E, T, o, [g], 1) || !A && (At as any)(T, m, o, [x], 1)) continue;
      const R: any = !S && (Ze as any)(E, T, t, s, {
          epsilon: se,
          skipDegenerateOther: !0
        }),
        k: any = !A && (Ze as any)(T, m, t, s, {
          epsilon: se,
          skipDegenerateOther: !0
        });
      if (!(R || k)) {
        S ? y = [T, m] : A ? y = [E, T] : y = [E, T, m];
        break;
      }
    }
    y && ((s as any).points = y);
  }
}
(d as any)(ys, "portSwapToLShape");
function xs(this: any, t: any, e: any): any {
  const {
    realNodeRects: r,
    labelNodeRects: i
  }: any = (me as any)(((e as any).values as any)());
  for (const c of t) {
    if ((c as any).isLayoutOnly) continue;
    const a: any = (c as any).points;
    if (!a || ((a as any).length as any) < (4 as any)) continue;
    const l: any = (pt as any)(a, .001);
    if (((l as any).length as any) < (4 as any)) continue;
    const g: any = ((l as any).length as any) - (1 as any),
      x: any = (l as any)[g],
      I: any = (l as any)[(g as any) - (1 as any)],
      u: any = (l as any)[(g as any) - (2 as any)],
      p: any = ((x as any).x as any) - ((I as any).x as any),
      f: any = ((x as any).y as any) - ((I as any).y as any),
      y: any = ((Math as any).hypot as any)(p, f);
    if ((y as any) >= (10 as any) || (y as any) < (.001 as any)) continue;
    const v: any = ((I as any).x as any) - ((u as any).x as any),
      M: any = ((I as any).y as any) - ((u as any).y as any);
    if ((((Math as any).hypot as any)(v, M) as any) < (.001 as any)) continue;
    const T: any = (Tt as any)(I, x, .001),
      m: any = (wt as any)(I, x, .001),
      S: any = (Tt as any)(u, I, .001),
      A: any = (wt as any)(u, I, .001);
    if (!(T && A || m && S)) continue;
    const R: any = (c as any).end,
      k: any = (c as any).start,
      O: any = R ? ((e as any).get as any)(R) : void 0;
    if (!O) continue;
    const _: any = (O as any).x ?? 0,
      H: any = (O as any).y ?? 0,
      P: any = (qt as any)(O);
    if (!P) continue;
    let G: any, j: any;
    if (A) {
      const W: any = (M as any) < (0 as any);
      G = {
        x: _,
        y: (u as any).y
      }, j = {
        x: _,
        y: W ? (P as any).bottom : (P as any).top
      };
    } else {
      const W: any = (v as any) > (0 as any);
      G = {
        x: (u as any).x,
        y: H
      }, j = {
        x: W ? (P as any).right : (P as any).left,
        y: H
      };
    }
    if ((At as any)(G, j, r, R ? [R] : [], -2) || (At as any)(G, j, i, [], -2)) continue;
    if (k) {
      const W: any = ((e as any).get as any)(k),
        et: any = W ? (qt as any)(W) : void 0;
      if (et && (io as any)(G, et, 2)) continue;
    }
    const J: any = (d as any)((W: any, et: any): any => `${(((W as any).x as any).toFixed as any)(3)},${(((W as any).y as any).toFixed as any)(3)}|${(((et as any).x as any).toFixed as any)(3)},${(((et as any).y as any).toFixed as any)(3)}`, "ownSegmentKey"),
      dt: any = new (Set as any)();
    for (let W: any = 0; (W as any) < (((l as any).length as any) - (1 as any) as any); W++) ((dt as any).add as any)((J as any)((l as any)[W], (l as any)[(W as any) + (1 as any)]));
    const mt: any = (d as any)((W: any, et: any): any => {
      for (const at of t) {
        if ((at as any) === (c as any) || (at as any).isLayoutOnly) continue;
        const gt: any = (at as any).points;
        if (!(!gt || ((gt as any).length as any) < (2 as any))) for (let xt: any = 0; (xt as any) < (((gt as any).length as any) - (1 as any) as any); xt++) {
          const vt: any = (gt as any)[xt],
            Vt: any = (gt as any)[(xt as any) + (1 as any)];
          if (!((dt as any).has as any)((J as any)(vt, Vt)) && (le as any)(W, et, vt, Vt, .001)) return !0;
        }
      }
      return !1;
    }, "segmentCrossesOtherEdge");
    if ((mt as any)(G, j)) continue;
    if (((g as any) - (3 as any) as any) >= (0 as any)) {
      const W: any = (l as any)[(g as any) - (3 as any)],
        et: any = (([k, R] as any).filter as any)((at: any): any => !!at);
      if ((At as any)(W, G, r, et, -2) || (mt as any)(W, G)) continue;
    }
    const Pt: any = [...((l as any).slice as any)(0, (g as any) - (2 as any)), G, j];
    (c as any).points = Pt;
    const Q: any = (c as any).labelNodeId;
    if (Q) {
      const W: any = ((e as any).get as any)(Q);
      if (W) {
        const et: any = (W as any).width ?? 0,
          at: any = (W as any).height ?? 0;
        if ((et as any) > (0 as any) && (at as any) > (0 as any)) {
          let gt: any,
            xt: any,
            vt: any = -1;
          for (let Vt: any = 0; (Vt as any) < (((Pt as any).length as any) - (1 as any) as any); Vt++) {
            const jt: any = (Pt as any)[Vt],
              Ut: any = (Pt as any)[(Vt as any) + (1 as any)],
              te: any = ((Math as any).hypot as any)(((Ut as any).x as any) - ((jt as any).x as any), ((Ut as any).y as any) - ((jt as any).y as any)),
              Se: any = (ht as any)(jt, Ut, .001),
              de: any = (ft as any)(jt, Ut, .001);
            (Se && (te as any) >= ((et as any) + (2 as any) as any) || de && (te as any) >= ((at as any) + (2 as any) as any)) && (te as any) > (vt as any) && (vt = te, gt = (((jt as any).x as any) + ((Ut as any).x as any) as any) / (2 as any), xt = (((jt as any).y as any) + ((Ut as any).y as any) as any) / (2 as any));
          }
          (gt as any) !== (void 0 as any) && (xt as any) !== (void 0 as any) && ((W as any).x = gt, (W as any).y = xt);
        }
      }
    }
  }
}
(d as any)(xs, "collapseShortTerminalStub");
var Z: number = .001,
  _t: number = 8,
  it: any = Re,
  In: any = (d as any)((t: any, e: any): any => (ft as any)(t, e, Z) || (ht as any)(t, e, Z), "orthogonallyAligned");
function bs(this: any, t: any, e: any): any {
  const s: any = (d as any)((u: any, p: any): any => {
      const f: any = (u as any).x ?? 0,
        y: any = (u as any).y ?? 0,
        v: any = ((p as any).x as any) - (f as any),
        M: any = ((p as any).y as any) - (y as any);
      let E: any = (((u as any).width ?? 0) as any) / (2 as any),
        T: any = (((u as any).height ?? 0) as any) / (2 as any);
      return ((((Math as any).abs as any)(M) as any) * (E as any) as any) > ((((Math as any).abs as any)(v) as any) * (T as any) as any) ? ((M as any) < (0 as any) && (T = -T), {
        x: (f as any) + (((M as any) === (0 as any) ? 0 : ((T as any) * (v as any) as any) / (M as any)) as any),
        y: (y as any) + (T as any)
      }) : ((v as any) < (0 as any) && (E = -E), {
        x: (f as any) + (E as any),
        y: (y as any) + (((v as any) === (0 as any) ? 0 : ((E as any) * (M as any) as any) / (v as any)) as any)
      });
    }, "rectIntersect"),
    r: any = (d as any)((u: any, p: any): any => {
      const f: any = (pt as any)((u as any).points ?? []);
      if (((f as any).length as any) < (2 as any)) return;
      const y: any = p ? (u as any).start : (u as any).end,
        v: any = y ? ((e as any).get as any)(y) : void 0,
        M: any = v ? (qt as any)(v) : void 0;
      if (!v || !y || !M) return;
      const E: any = p ? (f as any)[0] : (f as any)[((f as any).length as any) - (1 as any)],
        T: any = p ? (f as any)[1] : (f as any)[((f as any).length as any) - (2 as any)],
        m: any = (s as any)(v, E);
      let S: any = E;
      if ((In as any)(T, m) && (S = T), (ft as any)(m, S, Z)) return {
        edge: u,
        edgeId: (String as any)((u as any).id ?? ""),
        nodeId: y,
        atStart: p,
        orientation: "V",
        coord: (m as any).x,
        min: ((Math as any).min as any)((m as any).y, (S as any).y),
        max: ((Math as any).max as any)((m as any).y, (S as any).y),
        boundary: m,
        railEnd: S,
        rect: M
      };
      if ((ht as any)(m, S, Z)) return {
        edge: u,
        edgeId: (String as any)((u as any).id ?? ""),
        nodeId: y,
        atStart: p,
        orientation: "H",
        coord: (m as any).y,
        min: ((Math as any).min as any)((m as any).x, (S as any).x),
        max: ((Math as any).max as any)((m as any).x, (S as any).x),
        boundary: m,
        railEnd: S,
        rect: M
      };
    }, "terminalLaneFor"),
    i: any = (d as any)((u: any, p: any): any => ((Math as any).max as any)(0, (((Math as any).min as any)((u as any).max, (p as any).max) as any) - (((Math as any).max as any)((u as any).min, (p as any).min) as any)), "projectedOverlapLength"),
    c: any = (d as any)((u: any, p: any): any => ((u as any).nodeId as any) !== ((p as any).nodeId as any) || ((u as any).orientation as any) !== ((p as any).orientation as any) ? !1 : ((u as any).orientation as any) === ("H" as any) ? ((((Math as any).abs as any)((((u as any).boundary as any).x as any) - (((u as any).rect as any).left as any)) as any) < (1 as any) || (((Math as any).abs as any)((((u as any).boundary as any).x as any) - (((u as any).rect as any).right as any)) as any) < (1 as any)) && (ft as any)((u as any).boundary, (p as any).boundary, 1) : ((((Math as any).abs as any)((((u as any).boundary as any).y as any) - (((u as any).rect as any).top as any)) as any) < (1 as any) || (((Math as any).abs as any)((((u as any).boundary as any).y as any) - (((u as any).rect as any).bottom as any)) as any) < (1 as any)) && (ht as any)((u as any).boundary, (p as any).boundary, 1), "sameTerminalFace"),
    a: any = (d as any)((u: any, p: any): any => ((u as any).nodeId as any) !== ((p as any).nodeId as any) || ((u as any).orientation as any) !== ((p as any).orientation as any) ? !1 : ((i as any)(u, p) as any) >= (_t as any) && (((Math as any).abs as any)(((u as any).coord as any) - ((p as any).coord as any)) as any) < (.5 as any), "exactTerminalLaneConflict"),
    l: any = (d as any)((u: any, p: any): any => {
      if (((u as any).nodeId as any) !== ((p as any).nodeId as any) || ((u as any).orientation as any) !== ((p as any).orientation as any) || ((u as any).orientation as any) !== ("H" as any) || ((u as any).atStart as any) === ((p as any).atStart as any)) return !1;
      const f: any = (i as any)(u, p);
      if ((f as any) < (_t as any)) return !1;
      const y: any = (((u as any).rect as any).bottom as any) - (((u as any).rect as any).top as any);
      return (f as any) < (y as any) || (f as any) > ((2 as any) * (y as any) as any) ? !1 : (c as any)(u, p) && (((Math as any).abs as any)(((u as any).coord as any) - ((p as any).coord as any)) as any) < (16 as any);
    }, "nearTerminalLaneConflict"),
    g: any = (d as any)((u: any, p: any): any => {
      const f: any = (pt as any)(((u as any).edge as any).points ?? []);
      if (((f as any).length as any) < (2 as any)) return;
      const y: any = ((u as any).orientation as any) === ("V" as any) ? {
          x: (((u as any).boundary as any).x as any) + (p as any),
          y: ((u as any).boundary as any).y
        } : {
          x: ((u as any).boundary as any).x,
          y: (((u as any).boundary as any).y as any) + (p as any)
        },
        v: any = ((u as any).orientation as any) === ("V" as any) ? {
          x: (((u as any).railEnd as any).x as any) + (p as any),
          y: ((u as any).railEnd as any).y
        } : {
          x: ((u as any).railEnd as any).x,
          y: (((u as any).railEnd as any).y as any) + (p as any)
        };
      if (!((d as any)((): any => (((Math as any).abs as any)((((u as any).boundary as any).y as any) - (((u as any).rect as any).top as any)) as any) < (1 as any) || (((Math as any).abs as any)((((u as any).boundary as any).y as any) - (((u as any).rect as any).bottom as any)) as any) < (1 as any) ? (ht as any)(y, (u as any).boundary, Z) && ((y as any).x as any) >= ((((u as any).rect as any).left as any) + (1 as any) as any) && ((y as any).x as any) <= ((((u as any).rect as any).right as any) - (1 as any) as any) : (((Math as any).abs as any)((((u as any).boundary as any).x as any) - (((u as any).rect as any).left as any)) as any) < (1 as any) || (((Math as any).abs as any)((((u as any).boundary as any).x as any) - (((u as any).rect as any).right as any)) as any) < (1 as any) ? (ft as any)(y, (u as any).boundary, Z) && ((y as any).y as any) >= ((((u as any).rect as any).top as any) + (1 as any) as any) && ((y as any).y as any) <= ((((u as any).rect as any).bottom as any) - (1 as any) as any) : !1, "boundaryStaysOnSameFace") as any)()) return;
      if ((u as any).atStart) {
        const S: any = ((f as any).length as any) > (1 as any) && (oe as any)((f as any)[1], (u as any).railEnd, Z),
          A: any = ((f as any).slice as any)(S ? 2 : 1),
          R: any = (A as any)[0];
        return R && !(In as any)(R, v) ? void 0 : [y, v, ...A];
      }
      const E: any = ((f as any).length as any) > (1 as any) && (oe as any)((f as any)[((f as any).length as any) - (2 as any)], (u as any).railEnd, Z),
        T: any = ((f as any).slice as any)(0, E ? -2 : -1),
        m: any = (T as any)[((T as any).length as any) - (1 as any)];
      if (!(m && !(In as any)(m, v))) return [...T, v, y];
    }, "shiftedCandidate"),
    x: any = (d as any)((u: any): any => {
      const p: any = (u as any).edge,
        f: any = (pt as any)((p as any).points ?? []);
      if (((f as any).length as any) !== (2 as any)) return !1;
      const y: any = (p as any).start,
        v: any = (p as any).end,
        M: any = y ? ((e as any).get as any)(y) : void 0,
        E: any = v ? ((e as any).get as any)(v) : void 0;
      if (!M || !E) return !1;
      const T: any = (M as any).x ?? 0,
        m: any = (M as any).y ?? 0,
        S: any = (E as any).x ?? 0,
        A: any = (E as any).y ?? 0,
        [R, k]: any = f;
      return (ht as any)(R, k, Z) && (((Math as any).abs as any)((m as any) - (A as any)) as any) < (1 as any) && (((Math as any).abs as any)((T as any) - (S as any)) as any) > (1 as any) || (ft as any)(R, k, Z) && (((Math as any).abs as any)((T as any) - (S as any)) as any) < (1 as any) && (((Math as any).abs as any)((m as any) - (A as any)) as any) > (1 as any);
    }, "laneIsStraightCollinearConnector"),
    I: any = [-7, 7, -14, 14, -21, 21];
  for (let u: any = 0; (u as any) < (8 as any); u++) {
    const p: any = ((((((t as any).filter as any)((y: any): any => !(y as any).isLayoutOnly) as any).flatMap as any)((y: any): any => [(r as any)(y, !0), (r as any)(y, !1)]) as any).filter as any)((y: any): any => !!y);
    let f: any = !1;
    for (let y: any = 0; (y as any) < ((p as any).length as any) && !f; y++) for (let v: any = (y as any) + (1 as any); (v as any) < ((p as any).length as any) && !f; v++) {
      const M: any = (p as any)[y],
        E: any = (p as any)[v];
      if (((M as any).edge as any) === ((E as any).edge as any) || !((a as any)(M, E) || (l as any)(M, E))) continue;
      const T: any = !(a as any)(M, E),
        m: any = (([M, E] as any).sort as any)((S: any, A: any): any => {
          const R: any = (x as any)(S),
            k: any = (x as any)(A);
          return (R as any) !== (k as any) ? ((Number as any)(R) as any) - ((Number as any)(k) as any) : (+!(A as any).atStart as any) - (+!(S as any).atStart as any);
        });
      for (const S of m) {
        for (const A of I) {
          const R: any = (g as any)(S, A);
          if (!R) continue;
          const k: any = (r as any)({
            ...(S as any).edge,
            points: R
          }, (S as any).atStart);
          if (!(!k || ((p as any).some as any)((O: any): any => ((O as any).edge as any) !== ((S as any).edge as any) && ((a as any)(k, O) || T && (l as any)(k, O))))) {
            ((S as any).edge as any).points = R, f = !0;
            break;
          }
        }
        if (f) break;
      }
    }
    if (!f) return;
  }
}
(d as any)(bs, "separateSharedRenderedTerminalLanes");
function Ms(this: any, t: any, e: any): any {
  const {
      realNodeRects: o,
      labelNodeRects: s
    }: any = (me as any)(((e as any).values as any)()),
    r: any = (d as any)((c: any, a: any): any => {
      const l: any = (c as any).start,
        g: any = (c as any).end,
        x: any = (it as any)(a);
      if (((x as any).length as any) !== (((a as any).length as any) - (1 as any) as any)) return !1;
      const I: any = (([l, g] as any).filter as any)((u: any): any => !!u);
      for (const u of x) if ((At as any)((u as any).a, (u as any).b, o, I, -2) || (At as any)((u as any).a, (u as any).b, s, [], -2)) return !1;
      for (const u of t) {
        if ((u as any) === (c as any) || (u as any).isLayoutOnly) continue;
        const p: any = (u as any).points;
        if (!(!p || ((p as any).length as any) < (2 as any))) {
          for (const f of x) for (const y of (it as any)((pt as any)(p))) if (((ce as any)(f, y, .5) as any) >= (_t as any) || (le as any)((f as any).a, (f as any).b, (y as any).a, (y as any).b, Z)) return !1;
        }
      }
      return !0;
    }, "candidateIsSafe"),
    i: any = (d as any)((c: any, a: any): any => {
      if (((a as any) + (4 as any) as any) >= ((c as any).length as any)) return;
      const l: any = (c as any)[a],
        g: any = (c as any)[(a as any) + (1 as any)],
        x: any = (c as any)[(a as any) + (2 as any)],
        I: any = (c as any)[(a as any) + (3 as any)],
        u: any = (c as any)[(a as any) + (4 as any)],
        p: any = (Tt as any)(l, g) && (wt as any)(g, x) && (Tt as any)(x, I) && (wt as any)(I, u) && (ft as any)(l, I, Z) && (ft as any)(l, u, Z) && (ft as any)(g, x, Z) && ((((g as any).x as any) - ((l as any).x as any) as any) * (((I as any).x as any) - ((x as any).x as any) as any) as any) < (0 as any),
        f: any = (wt as any)(l, g) && (Tt as any)(g, x) && (wt as any)(x, I) && (Tt as any)(I, u) && (ht as any)(l, I, Z) && (ht as any)(l, u, Z) && (ht as any)(g, x, Z) && ((((g as any).y as any) - ((l as any).y as any) as any) * (((I as any).y as any) - ((x as any).y as any) as any) as any) < (0 as any);
      if (p || f) return (pt as any)([...((c as any).slice as any)(0, (a as any) + (1 as any)), u, ...((c as any).slice as any)((a as any) + (5 as any))]);
      if (((a as any) + (5 as any) as any) >= ((c as any).length as any)) return;
      const y: any = (c as any)[(a as any) + (5 as any)],
        v: any = (wt as any)(l, g) && (Tt as any)(g, x) && (wt as any)(x, I) && (Tt as any)(I, u) && (wt as any)(u, y) && (ft as any)(l, u, Z) && (ft as any)(l, y, Z) && (ft as any)(x, I, Z) && ((((x as any).x as any) - ((g as any).x as any) as any) * (((u as any).x as any) - ((I as any).x as any) as any) as any) < (0 as any),
        M: any = (Tt as any)(l, g) && (wt as any)(g, x) && (Tt as any)(x, I) && (wt as any)(I, u) && (Tt as any)(u, y) && (ht as any)(l, u, Z) && (ht as any)(l, y, Z) && (ht as any)(x, I, Z) && ((((x as any).y as any) - ((g as any).y as any) as any) * (((u as any).y as any) - ((I as any).y as any) as any) as any) < (0 as any);
      if (!(!v && !M)) return (pt as any)([...((c as any).slice as any)(0, (a as any) + (1 as any)), y, ...((c as any).slice as any)((a as any) + (6 as any))]);
    }, "withoutDogleg");
  for (let c: any = 0; (c as any) < (8 as any); c++) {
    let a: any = !1;
    for (const l of t) {
      if ((l as any).isLayoutOnly) continue;
      const g: any = (pt as any)((l as any).points ?? []);
      for (let x: any = 0; (x as any) <= (((g as any).length as any) - (5 as any) as any); x++) {
        const I: any = (i as any)(g, x);
        if (!(!I || !(r as any)(l, I))) {
          (l as any).points = I, a = !0;
          break;
        }
      }
      if (a) break;
    }
    if (!a) return;
  }
}
(d as any)(Ms, "collapseRedundantRectangularDoglegs");
function Xn(this: any, t: any, e: any): any {
  const {
      realNodeRects: r,
      labelNodeRects: i
    }: any = (me as any)(((e as any).values as any)()),
    c: any = ((t as any).filter as any)((p: any): any => !(p as any).isLayoutOnly),
    a: any = (d as any)((p: any, f: any, y: any): any => (pt as any)((p as any) === (f as any) ? y ?? [] : (p as any).points ?? []), "pointsFor"),
    l: any = (d as any)((p: any, f: any): any => {
      let y: any = 0;
      for (let v: any = 0; (v as any) < ((c as any).length as any); v++) {
        const M: any = (it as any)((a as any)((c as any)[v], p, f));
        for (let E: any = (v as any) + (1 as any); (E as any) < ((c as any).length as any); E++) {
          const T: any = (it as any)((a as any)((c as any)[E], p, f));
          for (const m of M) for (const S of T) (le as any)((m as any).a, (m as any).b, (S as any).a, (S as any).b, Z) && y++;
        }
      }
      return y;
    }, "strictCrossingCount"),
    g: any = (d as any)((p: any): any => {
      const f: any = (it as any)(p);
      if (((f as any).length as any) !== (3 as any)) return;
      const y: any = (f as any)[1];
      if (!((((f as any)[0] as any).horizontal as any) === ((y as any).horizontal as any) || (((f as any)[2] as any).horizontal as any) === ((y as any).horizontal as any))) return {
        index: (y as any).index,
        horizontal: (y as any).horizontal,
        vertical: (y as any).vertical,
        segment: y
      };
    }, "middleRail"),
    x: any = (d as any)((p: any, f: any): any => {
      const y: any = (([(p as any).start, (p as any).end] as any).filter as any)((v: any): any => !!v);
      return ((r as any).filter as any)((v: any): any => {
        if (((y as any).includes as any)((v as any).id)) return !1;
        const M: any = (v as any).rect;
        return (f as any).horizontal ? ((zt as any)(((f as any).a as any).x, ((f as any).b as any).x, (M as any).left, (M as any).right) as any) >= (_t as any) && (((f as any).a as any).y as any) >= (((M as any).top as any) - (2 as any) as any) && (((f as any).a as any).y as any) <= (((M as any).bottom as any) + (2 as any) as any) : ((zt as any)(((f as any).a as any).y, ((f as any).b as any).y, (M as any).top, (M as any).bottom) as any) >= (_t as any) && (((f as any).a as any).x as any) >= (((M as any).left as any) - (2 as any) as any) && (((f as any).a as any).x as any) <= (((M as any).right as any) + (2 as any) as any);
      });
    }, "blockingRectsFor"),
    I: any = (d as any)((p: any, f: any, y: any): any => {
      const v: any = ((p as any).map as any)((E: any): any => ({
        ...E
      }));
      if ((f as any).horizontal) ((v as any)[(f as any).index] as any).y = y, ((v as any)[((f as any).index as any) + (1 as any)] as any).y = y;else if ((f as any).vertical) ((v as any)[(f as any).index] as any).x = y, ((v as any)[((f as any).index as any) + (1 as any)] as any).x = y;else return;
      const M: any = (ae as any)((pt as any)(v));
      return (((it as any)(M) as any).length as any) === (((M as any).length as any) - (1 as any) as any) ? M : void 0;
    }, "candidateByMovingRail"),
    u: any = (d as any)((p: any, f: any, y: any): any => {
      const v: any = (([(p as any).start, (p as any).end] as any).filter as any)((E: any): any => !!E),
        M: any = (it as any)(f);
      if (((M as any).length as any) !== (((f as any).length as any) - (1 as any) as any)) return !1;
      for (const E of M) if ((At as any)((E as any).a, (E as any).b, r, v, -2) || (At as any)((E as any).a, (E as any).b, i, [], -2)) return !1;
      for (const E of c) if ((E as any) !== (p as any)) {
        for (const T of M) for (const m of (it as any)((a as any)(E))) if (((ce as any)(T, m, .5) as any) >= (_t as any)) return !1;
      }
      return ((l as any)(p, f) as any) <= (y as any);
    }, "candidateIsSafe");
  for (let p: any = 0; (p as any) < (8 as any); p++) {
    const f: any = (l as any)();
    let y: any = !1;
    for (const v of c) {
      const M: any = (a as any)(v),
        E: any = (g as any)(M);
      if (!E) continue;
      const T: any = (x as any)(v, (E as any).segment);
      if (((T as any).length as any) === (0 as any)) continue;
      const m: any = (E as any).horizontal ? [(((Math as any).min as any)(...((T as any).map as any)((S: any): any => ((S as any).rect as any).top)) as any) - (20 as any), (((Math as any).max as any)(...((T as any).map as any)((S: any): any => ((S as any).rect as any).bottom)) as any) + (20 as any)] : [(((Math as any).min as any)(...((T as any).map as any)((S: any): any => ((S as any).rect as any).left)) as any) - (20 as any), (((Math as any).max as any)(...((T as any).map as any)((S: any): any => ((S as any).rect as any).right)) as any) + (20 as any)];
      for (const S of m) {
        const A: any = (I as any)(M, (E as any).segment, S);
        if (!(!A || !(u as any)(v, A, f))) {
          (v as any).points = A, y = !0;
          break;
        }
      }
      if (y) break;
    }
    if (!y) return;
  }
}
(d as any)(Xn, "liftObstacleHuggingSameSideRails");
function Yn(this: any, t: any, e: any): any {
  const o: any = (d as any)((a: any): any => {
      const l: any = (a as any).groupTitleRect;
      if (!(!l || (typeof (l as any).left as any) != ("number" as any) || (typeof (l as any).right as any) != ("number" as any) || (typeof (l as any).top as any) != ("number" as any) || (typeof (l as any).bottom as any) != ("number" as any) || !((Number as any).isFinite as any)((l as any).left) || !((Number as any).isFinite as any)((l as any).right) || !((Number as any).isFinite as any)((l as any).top) || !((Number as any).isFinite as any)((l as any).bottom) || ((l as any).right as any) <= ((l as any).left as any) || ((l as any).bottom as any) <= ((l as any).top as any))) return {
        left: (l as any).left,
        right: (l as any).right,
        top: (l as any).top,
        bottom: (l as any).bottom
      };
    }, "validTitleRect"),
    s: any = (d as any)((a: any): any => {
      if (!(a as any).isGroup || (a as any).parentId) return;
      const l: any = (a as any).direction,
        g: any = (typeof l as any) == ("string" as any) ? ((l as any).toUpperCase as any)() : "";
      if ((g as any) === ("LR" as any) || (g as any) === ("RL" as any) || (g as any) === ("BT" as any)) return;
      const x: any = (o as any)(a),
        I: any = (a as any).y,
        u: any = (a as any).height;
      if (!x || (typeof I as any) != ("number" as any) || (typeof u as any) != ("number" as any) || !((Number as any).isFinite as any)(I) || !((Number as any).isFinite as any)(u) || (u as any) <= (0 as any)) return;
      const p: any = ((x as any).right as any) - ((x as any).left as any),
        f: any = ((x as any).bottom as any) - ((x as any).top as any);
      if (!((f as any) <= (0 as any) || (p as any) < (f as any))) return {
        node: a,
        rect: x
      };
    }, "topLaneTitleFor"),
    r: any = (d as any)((a: any, l: any): any => {
      if (!(a as any).horizontal) return !1;
      const g: any = ((a as any).a as any).y;
      return (g as any) <= (((l as any).top as any) + (Z as any) as any) || (g as any) >= (((l as any).bottom as any) - (Z as any) as any) ? !1 : ((zt as any)(((a as any).a as any).x, ((a as any).b as any).x, (l as any).left, (l as any).right) as any) >= (_t as any);
    }, "horizontalSegmentIntersectsTitle"),
    i: any = (((([...((e as any).values as any)()] as any).map as any)(s) as any).filter as any)((a: any): any => !!a);
  if (((i as any).length as any) === (0 as any)) return;
  let c: any = 0;
  for (const a of t) {
    if ((a as any).isLayoutOnly) continue;
    const l: any = (pt as any)((a as any).points ?? []);
    for (const g of (it as any)(l)) for (const x of i) (r as any)(g, (x as any).rect) && (c = ((Math as any).max as any)(c, ((((x as any).rect as any).bottom as any) - (((g as any).a as any).y as any) as any) + (4 as any)));
  }
  if (!((c as any) <= (Z as any))) for (const a of i) {
    const l: any = ((a as any).node as any).y,
      g: any = ((a as any).node as any).height;
    (typeof l as any) != ("number" as any) || (typeof g as any) != ("number" as any) || !((Number as any).isFinite as any)(l) || !((Number as any).isFinite as any)(g) || (g as any) <= (0 as any) || (((a as any).node as any).y = (l as any) - ((c as any) / (2 as any) as any), ((a as any).node as any).height = (g as any) + (c as any), ((a as any).node as any).groupTitleRect = {
      ...(a as any).rect,
      top: (((a as any).rect as any).top as any) - (c as any),
      bottom: (((a as any).rect as any).bottom as any) - (c as any)
    });
  }
}
(d as any)(Yn, "liftTopLaneTitleBandsAboveRails");
function Gn(this: any, t: any, e: any): any {
  const o: any = (d as any)((l: any): any => {
      const g: any = (l as any).groupTitleRect;
      if (!(!g || (typeof (g as any).left as any) != ("number" as any) || (typeof (g as any).right as any) != ("number" as any) || (typeof (g as any).top as any) != ("number" as any) || (typeof (g as any).bottom as any) != ("number" as any) || !((Number as any).isFinite as any)((g as any).left) || !((Number as any).isFinite as any)((g as any).right) || !((Number as any).isFinite as any)((g as any).top) || !((Number as any).isFinite as any)((g as any).bottom) || ((g as any).right as any) <= ((g as any).left as any) || ((g as any).bottom as any) <= ((g as any).top as any))) return {
        left: (g as any).left,
        right: (g as any).right,
        top: (g as any).top,
        bottom: (g as any).bottom
      };
    }, "validTitleRect"),
    s: any = (d as any)((l: any): any => {
      if (!(l as any).isGroup || (l as any).parentId || ((l as any).direction as any) !== ("LR" as any)) return;
      const x: any = (o as any)(l),
        I: any = (l as any).x,
        u: any = (l as any).width;
      if (!x || (typeof I as any) != ("number" as any) || (typeof u as any) != ("number" as any) || !((Number as any).isFinite as any)(I) || !((Number as any).isFinite as any)(u) || (u as any) <= (0 as any)) return;
      const p: any = ((x as any).right as any) - ((x as any).left as any),
        f: any = ((x as any).bottom as any) - ((x as any).top as any);
      if (!((p as any) <= (0 as any) || (f as any) < (p as any))) return {
        node: l,
        rect: x
      };
    }, "leftLaneTitleFor"),
    r: any = (d as any)((l: any, g: any): any => {
      if (!(l as any).vertical) return !1;
      const x: any = ((l as any).a as any).x;
      return (x as any) <= (((g as any).left as any) + (Z as any) as any) || (x as any) >= (((g as any).right as any) - (Z as any) as any) ? !1 : ((zt as any)(((l as any).a as any).y, ((l as any).b as any).y, (g as any).top, (g as any).bottom) as any) >= (_t as any);
    }, "verticalSegmentIntersectsTitle"),
    i: any = (d as any)((l: any, g: any): any => {
      if (!(l as any).horizontal) return !1;
      const x: any = ((l as any).a as any).y;
      return (x as any) <= (((g as any).top as any) + (Z as any) as any) || (x as any) >= (((g as any).bottom as any) - (Z as any) as any) ? !1 : ((zt as any)(((l as any).a as any).x, ((l as any).b as any).x, (g as any).left, (g as any).right) as any) >= (_t as any);
    }, "horizontalSegmentIntersectsTitle"),
    c: any = (((([...((e as any).values as any)()] as any).map as any)(s) as any).filter as any)((l: any): any => !!l);
  if (((c as any).length as any) === (0 as any)) return;
  let a: any = 0;
  for (const l of t) {
    if ((l as any).isLayoutOnly) continue;
    const g: any = (pt as any)((l as any).points ?? []);
    for (const x of (it as any)(g)) for (const I of c) if ((r as any)(x, (I as any).rect)) a = ((Math as any).max as any)(a, ((((I as any).rect as any).right as any) - (((x as any).a as any).x as any) as any) + (4 as any));else if ((i as any)(x, (I as any).rect)) {
      const u: any = ((Math as any).min as any)(((x as any).a as any).x, ((x as any).b as any).x);
      a = ((Math as any).max as any)(a, ((((I as any).rect as any).right as any) - (u as any) as any) + (4 as any));
    }
  }
  if (!((a as any) <= (Z as any))) for (const l of c) {
    const g: any = ((l as any).node as any).x,
      x: any = ((l as any).node as any).width;
    (typeof g as any) != ("number" as any) || (typeof x as any) != ("number" as any) || !((Number as any).isFinite as any)(g) || !((Number as any).isFinite as any)(x) || (x as any) <= (0 as any) || (((l as any).node as any).x = (g as any) - ((a as any) / (2 as any) as any), ((l as any).node as any).width = (x as any) + (a as any), ((l as any).node as any).groupTitleRect = {
      ...(l as any).rect,
      left: (((l as any).rect as any).left as any) - (a as any),
      right: (((l as any).rect as any).right as any) - (a as any)
    });
  }
}
(d as any)(Gn, "shiftLeftLaneTitleBandsLeftOfRails");
function Is(this: any, t: any, e: any): any {
  const {
      realNodeRects: o
    }: any = (me as any)(((e as any).values as any)()),
    s: any = ((t as any).filter as any)((p: any): any => !(p as any).isLayoutOnly),
    r: any = (d as any)((p: any, f: any = new (Map as any)()): any => (pt as any)(((f as any).get as any)(p) ?? (p as any).points ?? []), "replacementPointsFor"),
    i: any = (d as any)((p: any = new (Map as any)()): any => {
      let f: any = 0;
      for (let y: any = 0; (y as any) < ((s as any).length as any); y++) {
        const v: any = (it as any)((r as any)((s as any)[y], p));
        for (let M: any = (y as any) + (1 as any); (M as any) < ((s as any).length as any); M++) {
          const E: any = (it as any)((r as any)((s as any)[M], p));
          for (const T of v) for (const m of E) (le as any)((T as any).a, (T as any).b, (m as any).a, (m as any).b, Z) && f++;
        }
      }
      return f;
    }, "crossingCount"),
    c: any = (d as any)((p: any = new (Map as any)()): any => ((s as any).reduce as any)((f: any, y: any): any => (f as any) + ((Qt as any)((r as any)(y, p)) as any), 0), "totalBends"),
    a: any = (d as any)((p: any): any => {
      const f: any = (r as any)(p);
      if (((f as any).length as any) < (4 as any)) return;
      const y: any = (f as any)[((f as any).length as any) - (2 as any)],
        v: any = (f as any)[((f as any).length as any) - (1 as any)];
      if (!(!(Tt as any)(y, v, Z) && !(wt as any)(y, v, Z))) return {
        tailStart: y,
        terminal: v
      };
    }, "terminalTailFor"),
    l: any = (d as any)((p: any, f: any): any => {
      const y: any = (r as any)(p);
      if (((y as any).length as any) < (3 as any)) return;
      const v: any = (y as any)[0],
        M: any = (y as any)[1];
      let E: any;
      if ((Tt as any)(v, M, Z)) E = {
        x: (M as any).x,
        y: ((f as any).tailStart as any).y
      };else if ((wt as any)(v, M, Z)) E = {
        x: ((f as any).tailStart as any).x,
        y: (M as any).y
      };else return;
      const T: any = (ae as any)((pt as any)([v, M, E, (f as any).tailStart, (f as any).terminal]));
      return (((it as any)(T) as any).length as any) === (((T as any).length as any) - (1 as any) as any) ? T : void 0;
    }, "candidateWithDestinationTail"),
    g: any = (d as any)((p: any, f: any): any => {
      const y: any = (([(p as any).start, (p as any).end] as any).filter as any)((v: any): any => !!v);
      for (const v of (it as any)(f)) if ((At as any)((v as any).a, (v as any).b, o, y, -2)) return !0;
      return !1;
    }, "pathHasNodeHit"),
    x: any = (d as any)((p: any, f: any, y: any): any => {
      for (const v of s) if ((v as any) !== (p as any)) {
        for (const M of (it as any)(f)) for (const E of (it as any)((r as any)(v, y))) if (((ce as any)(M, E, .5) as any) >= (_t as any)) return !0;
      }
      return !1;
    }, "pathHasSharedTrack"),
    I: any = (d as any)((p: any, f: any, y: any): any => !(g as any)(p, f) && !(x as any)(p, f, y), "candidateIsSafe"),
    u: any = (d as any)((): any => {
      const p: any = new (Map as any)();
      for (const f of s) {
        const y: any = (f as any).end;
        if (!y || !((e as any).has as any)(y) || (((r as any)(f) as any).length as any) < (4 as any)) continue;
        const M: any = ((p as any).get as any)(y) ?? [];
        ((M as any).push as any)(f), ((p as any).set as any)(y, M);
      }
      return p;
    }, "edgesByDestination");
  for (let p: any = 0; (p as any) < (4 as any); p++) {
    const f: any = (i as any)();
    if ((f as any) === (0 as any)) return;
    const y: any = (c as any)();
    let v: any,
      M: any = f,
      E: any = y;
    for (const T of (((u as any)() as any).values as any)()) for (let m: any = 0; (m as any) < ((T as any).length as any); m++) for (let S: any = (m as any) + (1 as any); (S as any) < ((T as any).length as any); S++) {
      const A: any = (T as any)[m],
        R: any = (T as any)[S],
        k: any = (a as any)(A),
        O: any = (a as any)(R);
      if (!k || !O) continue;
      const _: any = (l as any)(A, O),
        H: any = (l as any)(R, k);
      if (!_ || !H) continue;
      const P: any = new (Map as any)([[A, _], [R, H]]);
      if (!(I as any)(A, _, P) || !(I as any)(R, H, P)) continue;
      const G: any = (i as any)(P),
        j: any = (c as any)(P);
      (G as any) >= (f as any) || (G as any) > (M as any) || (G as any) === (M as any) && (j as any) >= (E as any) || (v = P, M = G, E = j);
    }
    if (!v) return;
    for (const [T, m] of v) (T as any).points = m;
  }
}
(d as any)(Is, "swapDestinationTerminalTailsToReduceCrossings");
function Ss(this: any, t: any, e: any): any {
  const {
      realNodeRects: r,
      labelNodeRects: i
    }: any = (me as any)(((e as any).values as any)()),
    c: any = ((t as any).filter as any)((T: any): any => !(T as any).isLayoutOnly),
    a: any = (d as any)((T: any, m: any = new (Map as any)()): any => (pt as any)(((m as any).get as any)(T) ?? (T as any).points ?? []), "replacementPointsFor"),
    l: any = (d as any)((T: any = new (Map as any)()): any => {
      let m: any = 0;
      for (let S: any = 0; (S as any) < ((c as any).length as any); S++) {
        const A: any = (it as any)((a as any)((c as any)[S], T));
        for (let R: any = (S as any) + (1 as any); (R as any) < ((c as any).length as any); R++) {
          const k: any = (it as any)((a as any)((c as any)[R], T));
          for (const O of A) for (const _ of k) (le as any)((O as any).a, (O as any).b, (_ as any).a, (_ as any).b, Z) && m++;
        }
      }
      return m;
    }, "strictCrossingCount"),
    g: any = (d as any)((T: any = new (Map as any)()): any => ((c as any).reduce as any)((m: any, S: any): any => (m as any) + ((Qt as any)((a as any)(S, T)) as any), 0), "totalBends"),
    x: any = (d as any)((T: any): any => {
      const m: any = (T as any).start,
        S: any = (T as any).end,
        A: any = m ? ((e as any).get as any)(m) : void 0,
        R: any = S ? ((e as any).get as any)(S) : void 0,
        k: any = A ? (qt as any)(A) : void 0,
        O: any = R ? (qt as any)(R) : void 0;
      return k && O ? {
        src: k,
        dst: O
      } : void 0;
    }, "endpointRectsFor"),
    I: any = (d as any)((T: any, m: any, S: any): any => {
      if (((S as any).index as any) <= (0 as any) || (((S as any).index as any) + (1 as any) as any) >= (((m as any).length as any) - (1 as any) as any)) return;
      const A: any = (x as any)(T);
      if (A) {
        if ((S as any).vertical) {
          const R: any = ((S as any).a as any).x,
            k: any = ((Math as any).min as any)(((A as any).src as any).left, ((A as any).dst as any).left),
            O: any = ((Math as any).max as any)(((A as any).src as any).right, ((A as any).dst as any).right),
            _: any = (R as any) < ((k as any) - (Z as any) as any) ? "left" : (R as any) > ((O as any) + (Z as any) as any) ? "right" : void 0;
          return _ ? {
            edge: T,
            points: m,
            segmentIndex: (S as any).index,
            axis: "vertical",
            side: _,
            coord: R,
            min: ((Math as any).min as any)(((S as any).a as any).y, ((S as any).b as any).y),
            max: ((Math as any).max as any)(((S as any).a as any).y, ((S as any).b as any).y)
          } : void 0;
        }
        if ((S as any).horizontal) {
          const R: any = ((S as any).a as any).y,
            k: any = ((Math as any).min as any)(((A as any).src as any).top, ((A as any).dst as any).top),
            O: any = ((Math as any).max as any)(((A as any).src as any).bottom, ((A as any).dst as any).bottom),
            _: any = (R as any) < ((k as any) - (Z as any) as any) ? "top" : (R as any) > ((O as any) + (Z as any) as any) ? "bottom" : void 0;
          return _ ? {
            edge: T,
            points: m,
            segmentIndex: (S as any).index,
            axis: "horizontal",
            side: _,
            coord: R,
            min: ((Math as any).min as any)(((S as any).a as any).x, ((S as any).b as any).x),
            max: ((Math as any).max as any)(((S as any).a as any).x, ((S as any).b as any).x)
          } : void 0;
        }
      }
    }, "externalRailForSegment"),
    u: any = (d as any)((): any => {
      const T: any = [];
      for (const m of c) {
        const S: any = (a as any)(m);
        for (const A of (it as any)(S)) {
          const R: any = (I as any)(m, S, A);
          R && ((T as any).push as any)(R);
        }
      }
      return T;
    }, "collectExternalRails"),
    p: any = (d as any)((T: any, m: any): any => ((T as any).edge as any) !== ((m as any).edge as any) && ((T as any).axis as any) === ((m as any).axis as any) && ((T as any).side as any) === ((m as any).side as any) && ((zt as any)((T as any).min, (T as any).max, (m as any).min, (m as any).max) as any) >= (_t as any), "railsInteract"),
    f: any = (d as any)((T: any): any => {
      const m: any = [],
        S: any = new (Set as any)();
      for (const A of T) {
        if (((S as any).has as any)(A)) continue;
        const R: any = [A],
          k: any = [];
        for (((S as any).add as any)(A); ((R as any).length as any) > (0 as any);) {
          const O: any = ((R as any).pop as any)();
          ((k as any).push as any)(O);
          for (const _ of T) !((S as any).has as any)(_) && (p as any)(O, _) && (((S as any).add as any)(_), ((R as any).push as any)(_));
        }
        ((k as any).length as any) > (1 as any) && ((m as any).push as any)(k);
      }
      return m;
    }, "connectedComponents"),
    y: any = (d as any)((T: any): any => {
      const m: any = [];
      for (const S of T) ((m as any).some as any)((A: any): any => (((Math as any).abs as any)((A as any) - ((S as any).coord as any)) as any) < (Z as any)) || ((m as any).push as any)((S as any).coord);
      for (; ((m as any).length as any) < ((T as any).length as any);) {
        const S: any = ((Math as any).min as any)(...m),
          A: any = ((Math as any).max as any)(...m),
          R: any = ((T as any)[0] as any).side;
        ((m as any).push as any)((R as any) === ("left" as any) || (R as any) === ("top" as any) ? (S as any) - ((12 as any) * (((T as any).length as any) - ((m as any).length as any) as any) as any) : (A as any) + ((12 as any) * (((T as any).length as any) - ((m as any).length as any) as any) as any));
      }
      return m;
    }, "uniqueCoordsFor"),
    v: any = (d as any)((T: any): any => {
      const m: any = ((T as any).map as any)((R: any): any => (R as any).coord),
        S: any = (y as any)(T),
        A: any = [];
      if (((T as any).length as any) <= (6 as any)) {
        const R: any = ((new (Array as any)((S as any).length) as any).fill as any)(!1),
          k: any = [],
          O: any = (d as any)((): any => {
            if (((k as any).length as any) === ((T as any).length as any)) {
              ((k as any).some as any)((_: any, H: any): any => (((Math as any).abs as any)((_ as any) - ((m as any)[H] as any)) as any) >= (Z as any)) && ((A as any).push as any)([...k]);
              return;
            }
            for (const [_, H] of ((S as any).entries as any)()) (R as any)[_] || ((R as any)[_] = !0, ((k as any).push as any)(H), (O as any)(), ((k as any).pop as any)(), (R as any)[_] = !1);
          }, "visit");
        return (O as any)(), A;
      }
      for (let R: any = 0; (R as any) < ((m as any).length as any); R++) for (let k: any = (R as any) + (1 as any); (k as any) < ((m as any).length as any); k++) {
        const O: any = [...m];
        [(O as any)[R], (O as any)[k]] = [(O as any)[k], (O as any)[R]], ((A as any).push as any)(O);
      }
      return A;
    }, "coordinateAssignmentsFor"),
    M: any = (d as any)((T: any, m: any): any => {
      const S: any = new (Map as any)();
      for (const [R, k] of ((T as any).entries as any)()) {
        const O: any = (m as any)[R],
          _: any = ((S as any).get as any)((k as any).edge) ?? (((k as any).points as any).map as any)((H: any): any => ({
            x: (H as any).x,
            y: (H as any).y
          }));
        ((k as any).axis as any) === ("vertical" as any) ? (((_ as any)[(k as any).segmentIndex] as any).x = O, ((_ as any)[((k as any).segmentIndex as any) + (1 as any)] as any).x = O) : (((_ as any)[(k as any).segmentIndex] as any).y = O, ((_ as any)[((k as any).segmentIndex as any) + (1 as any)] as any).y = O), ((S as any).set as any)((k as any).edge, _);
      }
      const A: any = new (Map as any)();
      for (const [R, k] of S) {
        const O: any = (ae as any)((pt as any)(k));
        if ((((it as any)(O) as any).length as any) !== (((O as any).length as any) - (1 as any) as any)) return;
        ((A as any).set as any)(R, O);
      }
      return A;
    }, "replacementsForAssignment"),
    E: any = (d as any)((T: any): any => {
      for (const [m, S] of T) {
        const A: any = (([(m as any).start, (m as any).end] as any).filter as any)((R: any): any => !!R);
        for (const R of (it as any)(S)) if ((At as any)((R as any).a, (R as any).b, r, A, -2) || (At as any)((R as any).a, (R as any).b, i, [], -2)) return !1;
      }
      for (let m: any = 0; (m as any) < ((c as any).length as any); m++) {
        const S: any = (c as any)[m],
          A: any = ((T as any).has as any)(S),
          R: any = (it as any)((a as any)(S, T));
        for (let k: any = (m as any) + (1 as any); (k as any) < ((c as any).length as any); k++) {
          const O: any = (c as any)[k];
          if (!A && !((T as any).has as any)(O)) continue;
          const _: any = (it as any)((a as any)(O, T));
          for (const H of R) for (const P of _) if (((ce as any)(H, P, .5) as any) >= (_t as any)) return !1;
        }
      }
      return !0;
    }, "candidateIsSafe");
  for (let T: any = 0; (T as any) < (4 as any); T++) {
    const m: any = (l as any)();
    if ((m as any) === (0 as any)) return;
    let S: any,
      A: any = m,
      R: any = (g as any)(),
      k: any = (Number as any).POSITIVE_INFINITY;
    for (const O of (f as any)((u as any)())) for (const _ of (v as any)(O)) {
      const H: any = (M as any)(O, _);
      if (!H || !(E as any)(H)) continue;
      const P: any = (l as any)(H);
      if ((P as any) >= (m as any)) continue;
      const G: any = (g as any)(H),
        j: any = ((O as any).reduce as any)((J: any, dt: any, mt: any): any => (J as any) + (((Math as any).abs as any)(((_ as any)[mt] as any) - ((dt as any).coord as any)) as any), 0);
      (P as any) > (A as any) || (P as any) === (A as any) && ((G as any) > (R as any) || (G as any) === (R as any) && (j as any) >= (k as any)) || (S = H, A = P, R = G, k = j);
    }
    if (!S) return;
    for (const [O, _] of S) (O as any).points = _;
  }
}
(d as any)(Ss, "reassignCrossingExternalRailChannels");
function Cs(this: any, t: any, e: any): any {
  const {
      realNodeRects: o,
      labelNodeRects: s
    }: any = (me as any)(((e as any).values as any)()),
    r: any = ((t as any).filter as any)((u: any): any => !(u as any).isLayoutOnly),
    i: any = (d as any)((u: any, p: any, f: any): any => (pt as any)((u as any) === (p as any) ? f ?? [] : (u as any).points ?? []), "pointsFor"),
    c: any = (d as any)((u: any): any => (((it as any)(u) as any).reduce as any)((p: any, f: any): any => {
      const y: any = (((f as any).a as any).x as any) - (((f as any).b as any).x as any),
        v: any = (((f as any).a as any).y as any) - (((f as any).b as any).y as any);
      return (p as any) + (((Math as any).hypot as any)(y, v) as any);
    }, 0), "pathLength"),
    a: any = (d as any)((u: any, p: any): any => {
      let f: any = 0;
      for (let y: any = 0; (y as any) < ((r as any).length as any); y++) {
        const v: any = (it as any)((i as any)((r as any)[y], u, p));
        for (let M: any = (y as any) + (1 as any); (M as any) < ((r as any).length as any); M++) {
          const E: any = (it as any)((i as any)((r as any)[M], u, p));
          for (const T of v) for (const m of E) (le as any)((T as any).a, (T as any).b, (m as any).a, (m as any).b, Z) && f++;
        }
      }
      return f;
    }, "strictCrossingCount"),
    l: any = (d as any)((u: any, p: any): any => {
      if ((u as any).horizontal) {
        const f: any = ((u as any).a as any).y;
        return ((((Math as any).abs as any)((f as any) - ((p as any).top as any)) as any) < (1 as any) || (((Math as any).abs as any)((f as any) - ((p as any).bottom as any)) as any) < (1 as any)) && ((zt as any)(((u as any).a as any).x, ((u as any).b as any).x, (p as any).left, (p as any).right) as any) >= (_t as any);
      }
      if ((u as any).vertical) {
        const f: any = ((u as any).a as any).x;
        return ((((Math as any).abs as any)((f as any) - ((p as any).left as any)) as any) < (1 as any) || (((Math as any).abs as any)((f as any) - ((p as any).right as any)) as any) < (1 as any)) && ((zt as any)(((u as any).a as any).y, ((u as any).b as any).y, (p as any).top, (p as any).bottom) as any) >= (_t as any);
      }
      return !1;
    }, "segmentRunsAlongRectBorder"),
    g: any = (d as any)((u: any): any => {
      const p: any = (([(u as any).start, (u as any).end] as any).filter as any)((y: any): any => !!y),
        f: any = [];
      for (const y of p) {
        const v: any = ((e as any).get as any)(y),
          M: any = v ? (qt as any)(v) : void 0;
        M && ((f as any).push as any)(M);
      }
      return f;
    }, "endpointRectsFor"),
    x: any = (d as any)((u: any, p: any): any => {
      if (((p as any) + (3 as any) as any) >= ((u as any).length as any)) return [];
      const f: any = (u as any)[p],
        y: any = (u as any)[(p as any) + (1 as any)],
        v: any = (u as any)[(p as any) + (2 as any)],
        M: any = (u as any)[(p as any) + (3 as any)],
        E: any = (Tt as any)(f, y, Z) && (wt as any)(y, v, Z) && (Tt as any)(v, M, Z),
        T: any = (wt as any)(f, y, Z) && (Tt as any)(y, v, Z) && (wt as any)(v, M, Z);
      if (!E && !T) return [];
      if (!(E ? (((Math as any).sign as any)(((y as any).x as any) - ((f as any).x as any)) as any) !== (((Math as any).sign as any)(((M as any).x as any) - ((v as any).x as any)) as any) : (((Math as any).sign as any)(((y as any).y as any) - ((f as any).y as any)) as any) !== (((Math as any).sign as any)(((M as any).y as any) - ((v as any).y as any)) as any))) return [];
      const S: any = (ft as any)(f, M, Z) || (ht as any)(f, M, Z) ? [] : [{
          x: (f as any).x,
          y: (M as any).y
        }, {
          x: (M as any).x,
          y: (f as any).y
        }],
        A: any = ((S as any).length as any) === (0 as any) ? [[...((u as any).slice as any)(0, (p as any) + (1 as any)), ...((u as any).slice as any)((p as any) + (3 as any))]] : ((S as any).map as any)((k: any): any => [...((u as any).slice as any)(0, (p as any) + (1 as any)), k, ...((u as any).slice as any)((p as any) + (3 as any))]),
        R: any = new (Set as any)();
      return ((((A as any).map as any)((k: any): any => (ae as any)((pt as any)(k))) as any).filter as any)((k: any): any => {
        if ((((it as any)(k) as any).length as any) !== (((k as any).length as any) - (1 as any) as any) || !((k as any).some as any)((_: any): any => (oe as any)(_, M, Z))) return !1;
        const O: any = ((((k as any).map as any)((_: any): any => `${(((_ as any).x as any).toFixed as any)(3)},${(((_ as any).y as any).toFixed as any)(3)}`) as any).join as any)("|");
        return ((R as any).has as any)(O) ? !1 : (((R as any).add as any)(O), !0);
      });
    }, "shortcutCandidatesAt"),
    I: any = (d as any)((u: any, p: any, f: any): any => {
      const y: any = (([(u as any).start, (u as any).end] as any).filter as any)((M: any): any => !!M),
        v: any = (g as any)(u);
      for (const M of (it as any)(p)) if ((At as any)((M as any).a, (M as any).b, o, y, -2) || (At as any)((M as any).a, (M as any).b, s, [], -2) || ((v as any).some as any)((E: any): any => (l as any)(M, E))) return !1;
      for (const M of r) if ((M as any) !== (u as any)) {
        for (const E of (it as any)(p)) for (const T of (it as any)((i as any)(M))) if (((ce as any)(E, T, .5) as any) >= (_t as any)) return !1;
      }
      return ((a as any)(u, p) as any) <= (f as any);
    }, "candidateIsSafe");
  for (let u: any = 0; (u as any) < (8 as any); u++) {
    const p: any = (a as any)();
    let f: any,
      y: any,
      v: any = p,
      M: any = (Number as any).POSITIVE_INFINITY,
      E: any = (Number as any).POSITIVE_INFINITY;
    for (const T of r) {
      const m: any = (i as any)(T),
        S: any = (Qt as any)(m, Z),
        A: any = (c as any)(m);
      for (let R: any = 0; (R as any) <= (((m as any).length as any) - (4 as any) as any); R++) for (const k of (x as any)(m, R)) {
        const O: any = (Qt as any)(k, Z),
          _: any = (c as any)(k);
        if (!((O as any) < (S as any) || (O as any) === (S as any) && (_ as any) < ((A as any) - (Z as any) as any)) || !(I as any)(T, k, p)) continue;
        const P: any = (a as any)(T, k);
        (P as any) > (v as any) || (P as any) === (v as any) && ((O as any) > (M as any) || (O as any) === (M as any) && (_ as any) >= (E as any)) || (f = T, y = k, v = P, M = O, E = _);
      }
    }
    if (!f || !y) return;
    (f as any).points = y;
  }
}
(d as any)(Cs, "shortcutRedundantOrthogonalJogs");
function vs(this: any, t: any, e: any): any {
  const i: any = [];
  for (const N of ((e as any).values as any)()) {
    if ((N as any).isGroup || (N as any).isEdgeLabel) continue;
    const F: any = (N as any).x ?? 0,
      D: any = (N as any).y ?? 0,
      V: any = (qt as any)(N);
    V && ((i as any).push as any)({
      id: (String as any)((N as any).id ?? ""),
      cx: F,
      cy: D,
      rect: V
    });
  }
  if (((i as any).length as any) === (0 as any)) return;
  const c: any = new (Map as any)(((i as any).map as any)((N: any): any => [(N as any).id, N])),
    a: any = ((i as any).map as any)((N: any): any => ({
      id: (N as any).id,
      rect: (N as any).rect
    })),
    l: any = ["top", "bottom", "left", "right"],
    g: any = {
      top: (((Math as any).min as any)(...((i as any).map as any)((N: any): any => ((N as any).rect as any).top)) as any) - (20 as any),
      bottom: (((Math as any).max as any)(...((i as any).map as any)((N: any): any => ((N as any).rect as any).bottom)) as any) + (20 as any),
      left: (((Math as any).min as any)(...((i as any).map as any)((N: any): any => ((N as any).rect as any).left)) as any) - (20 as any),
      right: (((Math as any).max as any)(...((i as any).map as any)((N: any): any => ((N as any).rect as any).right)) as any) + (20 as any)
    },
    x: any = ((t as any).filter as any)((N: any): any => !(N as any).isLayoutOnly),
    I: any = new (Map as any)(((x as any).map as any)((N: any, F: any): any => [N, F])),
    u: any = (d as any)((N: any): any => {
      const F: any = (N as any) === ("left" as any) || (N as any) === ("top" as any) ? -1 : 1,
        D: any = [];
      for (let V: any = 0; (V as any) <= (2 as any); V++) ((D as any).push as any)(((g as any)[N] as any) + (((F as any) * (20 as any) as any) * (V as any) as any));
      return D;
    }, "outwardTracksForSide"),
    p: any = (d as any)((N: any, F: any = new (Map as any)()): any => (pt as any)(((F as any).get as any)(N) ?? (N as any).points ?? []), "replacementPointsFor"),
    f: any = (d as any)((N: any, F: any): any => {
      let D: any = 0;
      for (const V of N) for (const h of F) (le as any)((V as any).a, (V as any).b, (h as any).a, (h as any).b, Z) && D++;
      return D;
    }, "crossingCountBetweenSegments"),
    y: any = (d as any)((N: any, F: any): any => (f as any)((it as any)(N), (it as any)(F)), "crossingCountBetweenPaths"),
    v: any = (d as any)((N: any = new (Map as any)()): any => {
      let F: any = 0;
      const D: any = [],
        V: any = new (Set as any)(),
        h: any = [],
        b: any = (d as any)((C: any): any => {
          ((V as any).has as any)(C) || (((V as any).add as any)(C), ((h as any).push as any)(C));
        }, "addEdge");
      for (let C: any = 0; (C as any) < ((x as any).length as any); C++) {
        const L: any = (x as any)[C],
          w: any = (p as any)(L, N);
        for (let B: any = (C as any) + (1 as any); (B as any) < ((x as any).length as any); B++) {
          const U: any = (x as any)[B],
            q: any = (y as any)(w, (p as any)(U, N));
          (q as any) > (0 as any) && (F += q, ((D as any).push as any)({
            first: L,
            second: U,
            count: q
          }), (b as any)(L), (b as any)(U));
        }
      }
      return ((h as any).sort as any)((C: any, L: any): any => ((((I as any).get as any)(C) ?? 0) as any) - ((((I as any).get as any)(L) ?? 0) as any)), {
        count: F,
        pairs: D,
        edgeSet: V,
        edges: h
      };
    }, "crossingSnapshot"),
    M: any = (d as any)((N: any, F: any): any => {
      const D: any = new (Set as any)(((F as any).keys as any)());
      if (((D as any).size as any) === (0 as any)) return (N as any).count;
      let V: any = 0;
      for (const b of (N as any).pairs) (((D as any).has as any)((b as any).first) || ((D as any).has as any)((b as any).second)) && (V += (b as any).count);
      let h: any = 0;
      for (let b: any = 0; (b as any) < ((x as any).length as any); b++) {
        const C: any = (x as any)[b],
          L: any = ((D as any).has as any)(C),
          w: any = (p as any)(C, F);
        for (let B: any = (b as any) + (1 as any); (B as any) < ((x as any).length as any); B++) {
          const U: any = (x as any)[B];
          !L && !((D as any).has as any)(U) || (h += (y as any)(w, (p as any)(U, F)));
        }
      }
      return (((N as any).count as any) - (V as any) as any) + (h as any);
    }, "crossingCountWithReplacements"),
    E: any = (d as any)((N: any): any => {
      const F: any = new (Map as any)();
      for (const h of (N as any).pairs) {
        const b: any = ((F as any).get as any)((h as any).first) ?? new (Set as any)();
        ((b as any).add as any)((h as any).second), ((F as any).set as any)((h as any).first, b);
        const C: any = ((F as any).get as any)((h as any).second) ?? new (Set as any)();
        ((C as any).add as any)((h as any).first), ((F as any).set as any)((h as any).second, C);
      }
      const D: any = [],
        V: any = new (Set as any)();
      for (const h of (N as any).edges) {
        if (((V as any).has as any)(h)) continue;
        const b: any = [h],
          C: any = [];
        for (((V as any).add as any)(h); ((b as any).length as any) > (0 as any);) {
          const L: any = ((b as any).pop as any)();
          ((C as any).push as any)(L);
          for (const w of ((F as any).get as any)(L) ?? []) ((V as any).has as any)(w) || (((V as any).add as any)(w), ((b as any).push as any)(w));
        }
        ((C as any).sort as any)((L: any, w: any): any => ((((I as any).get as any)(L) ?? 0) as any) - ((((I as any).get as any)(w) ?? 0) as any)), ((C as any).length as any) > (1 as any) && ((D as any).push as any)(C);
      }
      return D;
    }, "crossingComponents"),
    T: any = (d as any)((N: any): any => (([(N as any).start, (N as any).end] as any).filter as any)((F: any): any => !!F), "endpointIdsFor"),
    m: any = (d as any)((N: any): any => {
      const F: any = [];
      for (const D of (E as any)(N)) {
        const V: any = new (Set as any)(D),
          h: any = new (Set as any)(((D as any).flatMap as any)((C: any): any => (T as any)(C))),
          b: any = [...D];
        for (const C of x) ((V as any).has as any)(C) || (((T as any)(C) as any).some as any)((L: any): any => ((h as any).has as any)(L)) && ((b as any).push as any)(C);
        ((b as any).sort as any)((C: any, L: any): any => ((((I as any).get as any)(C) ?? 0) as any) - ((((I as any).get as any)(L) ?? 0) as any)), ((F as any).push as any)(b);
      }
      return F;
    }, "pairSearchGroups"),
    S: any = (d as any)((N: any, F: any, D: any): any => (M as any)(N, new (Map as any)([[F, D]])), "crossingCountWithSingleReplacement"),
    A: any = (d as any)((N: any): any => {
      const F: any = new (Map as any)();
      for (const D of (N as any).pairs) ((F as any).set as any)((D as any).first, ((((F as any).get as any)((D as any).first) ?? 0) as any) + ((D as any).count as any)), ((F as any).set as any)((D as any).second, ((((F as any).get as any)((D as any).second) ?? 0) as any) + ((D as any).count as any));
      return F;
    }, "currentCrossingsByEdge"),
    R: any = (d as any)((N: any): any => ((((N as any).slice as any)(1) as any).reduce as any)((F: any, D: any, V: any): any => {
      const h: any = (N as any)[V];
      return ((F as any) + (((Math as any).abs as any)(((D as any).x as any) - ((h as any).x as any)) as any) as any) + (((Math as any).abs as any)(((D as any).y as any) - ((h as any).y as any)) as any);
    }, 0), "pathLength"),
    k: any = (d as any)((N: any = new (Map as any)()): any => ((x as any).reduce as any)((F: any, D: any): any => (F as any) + ((Qt as any)((p as any)(D, N)) as any), 0), "totalBends"),
    O: any = (d as any)((N: any = new (Map as any)()): any => ((x as any).reduce as any)((F: any, D: any): any => (F as any) + ((R as any)((p as any)(D, N)) as any), 0), "totalLength"),
    _: any = (d as any)((N: any, F: any, D: any = new (Map as any)()): any => {
      const V: any = (it as any)(F);
      for (const h of x) if ((h as any) !== (N as any)) {
        for (const b of V) for (const C of (it as any)((p as any)(h, D))) if (((ce as any)(b, C, .5) as any) >= (_t as any)) return !0;
      }
      return !1;
    }, "pathHasSegmentConflict"),
    H: any = (d as any)((N: any, F: any): any => {
      const D: any = (([(N as any).start, (N as any).end] as any).filter as any)((V: any): any => !!V);
      for (const V of (it as any)(F)) if ((At as any)((V as any).a, (V as any).b, a, D, -2)) return !0;
      return !1;
    }, "pathHitsNode"),
    P: any = (d as any)((N: any, F: any): any => {
      const D: any = (ae as any)((pt as any)(F));
      (((it as any)(D) as any).length as any) === (((D as any).length as any) - (1 as any) as any) && ((N as any).push as any)(D);
    }, "pushOrthogonalCandidate"),
    G: any = (d as any)((N: any): any => (N as any) === ("left" as any) || (N as any) === ("right" as any), "sideIsHorizontal"),
    j: any = (d as any)((N: any, F: any, D: any): any => {
      switch (F) {
        case "left":
          return (((Math as any).min as any)((N as any).x, (D as any).x) as any) - (20 as any);
        case "right":
          return (((Math as any).max as any)((N as any).x, (D as any).x) as any) + (20 as any);
        case "top":
          return (((Math as any).min as any)((N as any).y, (D as any).y) as any) - (20 as any);
        case "bottom":
          return (((Math as any).max as any)((N as any).y, (D as any).y) as any) + (20 as any);
      }
    }, "localTrackForSameSide"),
    J: any = (d as any)((N: any, F: any, D: any, V: any): any => {
      const h: any = (D as any) === ("left" as any) || (D as any) === ("top" as any) ? -1 : 1,
        b: any = [(j as any)(F, D, V), (g as any)[D]];
      for (const C of b) for (let L: any = 0; (L as any) <= (2 as any); L++) (P as any)(N, (ao as any)(F, D, V, (C as any) + (((h as any) * (20 as any) as any) * (L as any) as any)));
    }, "addSameSideCandidates"),
    dt: any = (d as any)((N: any, F: any, D: any, V: any, h: any): any => {
      for (const b of (u as any)(D)) for (const C of (u as any)(h)) (P as any)(N, [F, {
        x: b,
        y: (F as any).y
      }, {
        x: b,
        y: C
      }, {
        x: (V as any).x,
        y: C
      }, V]);
    }, "addHorizontalToVerticalCandidates"),
    mt: any = (d as any)((N: any, F: any, D: any, V: any, h: any): any => {
      for (const b of (u as any)(D)) for (const C of (u as any)(h)) (P as any)(N, [F, {
        x: (F as any).x,
        y: b
      }, {
        x: C,
        y: b
      }, {
        x: C,
        y: (V as any).y
      }, V]);
    }, "addVerticalToHorizontalCandidates"),
    kt: any = (d as any)((N: any, F: any, D: any, V: any, h: any): any => {
      const b: any = [...(u as any)("top"), ...(u as any)("bottom")];
      for (const C of (u as any)(D)) for (const L of (u as any)(h)) for (const w of b) (P as any)(N, [F, {
        x: C,
        y: (F as any).y
      }, {
        x: C,
        y: w
      }, {
        x: L,
        y: w
      }, {
        x: L,
        y: (V as any).y
      }, V]);
    }, "addHorizontalPairCandidates"),
    Pt: any = (d as any)((N: any, F: any, D: any, V: any, h: any): any => {
      const b: any = [...(u as any)("left"), ...(u as any)("right")];
      for (const C of (u as any)(D)) for (const L of (u as any)(h)) for (const w of b) (P as any)(N, [F, {
        x: (F as any).x,
        y: C
      }, {
        x: w,
        y: C
      }, {
        x: w,
        y: L
      }, {
        x: (V as any).x,
        y: L
      }, V]);
    }, "addVerticalPairCandidates"),
    Q: any = (d as any)((N: any): any => {
      const F: any = new (Set as any)();
      return ((((N as any).map as any)((D: any): any => (pt as any)(D)) as any).filter as any)((D: any): any => {
        const V: any = ((((D as any).map as any)((h: any): any => `${(((h as any).x as any).toFixed as any)(3)},${(((h as any).y as any).toFixed as any)(3)}`) as any).join as any)("|");
        return ((F as any).has as any)(V) || ((D as any).length as any) < (2 as any) ? !1 : (((F as any).add as any)(V), !0);
      });
    }, "dedupeCandidatePaths"),
    W: any = (d as any)((N: any, F: any, D: any, V: any): any => {
      const h: any = [],
        b: any = (co as any)(N, F, D, V, 20, Z);
      b && (P as any)(h, b), (F as any) === (V as any) && (J as any)(h, N, F, D);
      const C: any = (G as any)(F),
        L: any = (G as any)(V);
      return C && !L ? (dt as any)(h, N, F, D, V) : !C && L ? (mt as any)(h, N, F, D, V) : C ? (kt as any)(h, N, F, D, V) : (Pt as any)(h, N, F, D, V), (Q as any)(h);
    }, "buildCandidatesForSides"),
    et: any = (d as any)((N: any, F: any, D: any, V: any): any => {
      const h: any = [...(u as any)("left"), ...(u as any)("right")],
        b: any = [...(u as any)("top"), ...(u as any)("bottom")];
      for (const C of l) {
        const L: any = (Ie as any)(V, C),
          w: any = (C as any) === ("top" as any) || (C as any) === ("bottom" as any) ? (u as any)(C) : b;
        for (const B of h) {
          (P as any)(N, [F, D, {
            x: B,
            y: (D as any).y
          }, {
            x: B,
            y: (L as any).y
          }, L]);
          for (const U of w) (P as any)(N, [F, D, {
            x: B,
            y: (D as any).y
          }, {
            x: B,
            y: U
          }, {
            x: (L as any).x,
            y: U
          }, L]);
        }
      }
    }, "addVerticalDepartureOuterTrackCandidates"),
    at: any = (d as any)((N: any, F: any, D: any, V: any): any => {
      const h: any = [...(u as any)("left"), ...(u as any)("right")],
        b: any = [...(u as any)("top"), ...(u as any)("bottom")];
      for (const C of l) {
        const L: any = (Ie as any)(V, C),
          w: any = (C as any) === ("left" as any) || (C as any) === ("right" as any) ? (u as any)(C) : h;
        for (const B of b) {
          (P as any)(N, [F, D, {
            x: (D as any).x,
            y: B
          }, {
            x: (L as any).x,
            y: B
          }, L]);
          for (const U of w) (P as any)(N, [F, D, {
            x: (D as any).x,
            y: B
          }, {
            x: U,
            y: B
          }, {
            x: U,
            y: (L as any).y
          }, L]);
        }
      }
    }, "addHorizontalDepartureOuterTrackCandidates"),
    gt: any = (d as any)((N: any): any => {
      const F: any = (N as any).start,
        D: any = (N as any).end,
        V: any = D ? ((c as any).get as any)(D) : void 0;
      if (!F || !V) return [];
      const h: any = (pt as any)((N as any).points ?? []);
      if (((h as any).length as any) < (4 as any)) return [];
      const b: any = (h as any)[0],
        C: any = (h as any)[1],
        L: any = [];
      return (wt as any)(b, C, Z) ? (et as any)(L, b, C, V) : (Tt as any)(b, C, Z) && (at as any)(L, b, C, V), L;
    }, "terminalPreservingOuterTrackCandidates"),
    xt: any = (d as any)((N: any): any => {
      const F: any = (N as any).start,
        D: any = (N as any).end,
        V: any = F ? ((c as any).get as any)(F) : void 0,
        h: any = D ? ((c as any).get as any)(D) : void 0;
      if (!V || !h) return [];
      const b: any = [];
      for (const C of l) {
        const L: any = (Ie as any)(V, C);
        for (const w of l) ((b as any).push as any)(...(W as any)(L, C, (Ie as any)(h, w), w));
      }
      return ((b as any).push as any)(...(gt as any)(N)), b;
    }, "candidatePathsFor"),
    vt: any = (d as any)((): any => new (Map as any)(((x as any).map as any)((N: any): any => [N, (it as any)((p as any)(N))])), "currentSegmentsByEdge"),
    Vt: any = (d as any)((N: any, F: any, D: any): any => {
      const V: any = new (Set as any)();
      for (const h of x) {
        if ((h as any) === (N as any)) continue;
        const b: any = ((D as any).get as any)(h) ?? (it as any)((p as any)(h));
        ((F as any).some as any)((C: any): any => ((b as any).some as any)((L: any): any => ((ce as any)(C, L, .5) as any) >= (_t as any))) && ((V as any).add as any)(h);
      }
      return V;
    }, "sharedTrackConflictsFor"),
    jt: any = (d as any)((N: any, F: any, D: any, V: any): any => {
      const h: any = new (Set as any)();
      return (((((((((((((((xt as any)(N) as any).map as any)((C: any): any => (ae as any)((pt as any)(C))) as any).filter as any)((C: any): any => {
        if ((H as any)(N, C)) return !1;
        const L: any = ((((C as any).map as any)((w: any): any => `${(((w as any).x as any).toFixed as any)(3)},${(((w as any).y as any).toFixed as any)(3)}`) as any).join as any)("|");
        return ((h as any).has as any)(L) || ((C as any).length as any) < (2 as any) ? !1 : (((h as any).add as any)(L), !0);
      }) as any).map as any)((C: any): any => {
        const L: any = (it as any)(C);
        let w: any = 0;
        for (const B of x) (B as any) !== (N as any) && (w += (f as any)(L, ((D as any).get as any)(B) ?? (it as any)((p as any)(B))));
        return {
          candidate: C,
          candidateSegments: L,
          crossings: (((F as any).count as any) - ((((V as any).get as any)(N) ?? 0) as any) as any) + (w as any),
          bends: (Qt as any)(C, Z),
          totalBends: (Qt as any)(C),
          length: (R as any)(C)
        };
      }) as any).filter as any)(({
        crossings: C
      }: any): any => (C as any) <= ((F as any).count as any)) as any).sort as any)((C: any, L: any): any => ((C as any).crossings as any) - ((L as any).crossings as any) || ((C as any).bends as any) - ((L as any).bends as any) || ((C as any).length as any) - ((L as any).length as any)) as any).slice as any)(0, 48) as any).map as any)((C: any): any => ({
        path: (C as any).candidate,
        segments: (C as any).candidateSegments,
        sharedTrackConflicts: (Vt as any)(N, (C as any).candidateSegments, D),
        totalBends: (C as any).totalBends,
        length: (C as any).length
      }));
    }, "pairCandidatesFor"),
    Ut: any = (d as any)((N: any, F: any, D: any, V: any, h: any, b: any): any => {
      let C: any = 0;
      for (const w of (N as any).pairs) (((w as any).first as any) === (F as any) || ((w as any).second as any) === (F as any) || ((w as any).first as any) === (V as any) || ((w as any).second as any) === (V as any)) && (C += (w as any).count);
      let L: any = (f as any)((D as any).segments, (h as any).segments);
      for (const w of x) {
        if ((w as any) === (F as any) || (w as any) === (V as any)) continue;
        const B: any = ((b as any).get as any)(w) ?? (it as any)((p as any)(w));
        L += ((f as any)((D as any).segments, B) as any) + ((f as any)((h as any).segments, B) as any);
      }
      return (((N as any).count as any) - (C as any) as any) + (L as any);
    }, "pairCrossingCount"),
    te: any = (d as any)((N: any, F: any): any => {
      for (const D of (N as any).sharedTrackConflicts) if ((D as any) !== (F as any)) return !1;
      return !0;
    }, "conflictsOnlyWith"),
    Se: any = (d as any)((N: any, F: any): any => (((N as any).segments as any).some as any)((D: any): any => (((F as any).segments as any).some as any)((V: any): any => ((ce as any)(D, V, .5) as any) >= (_t as any))), "candidatesShareTrack"),
    de: any = (d as any)((N: any, F: any, D: any, V: any): any => (te as any)(F, (D as any).edge) && (te as any)(V, (N as any).edge) && !(Se as any)(F, V), "pairCandidatesAreCompatible"),
    Ce: any = (d as any)((N: any, F: any, D: any, V: any, h: any): any => {
      const b: any = (Ut as any)((N as any).current, (F as any).edge, D, (V as any).edge, h, (N as any).baseSegments);
      if (!((b as any) >= (((N as any).current as any).count as any))) return {
        replacements: new (Map as any)([[(F as any).edge, (D as any).path], [(V as any).edge, (h as any).path]]),
        crossings: b,
        bends: (((((N as any).currentBends as any) - (((((N as any).baseBendsByEdge as any).get as any)((F as any).edge) ?? 0) as any) as any) - (((((N as any).baseBendsByEdge as any).get as any)((V as any).edge) ?? 0) as any) as any) + ((D as any).totalBends as any) as any) + ((h as any).totalBends as any),
        length: (((((N as any).currentLength as any) - (((((N as any).baseLengthByEdge as any).get as any)((F as any).edge) ?? 0) as any) as any) - (((((N as any).baseLengthByEdge as any).get as any)((V as any).edge) ?? 0) as any) as any) + ((D as any).length as any) as any) + ((h as any).length as any)
      };
    }, "scorePairReplacement"),
    dn: any = (d as any)((N: any, F: any): any => ((N as any).crossings as any) < ((F as any).crossings as any) || ((N as any).crossings as any) === ((F as any).crossings as any) && (((N as any).bends as any) < ((F as any).bends as any) || ((N as any).bends as any) === ((F as any).bends as any) && ((N as any).length as any) < ((F as any).length as any)), "pairScoreIsBetter"),
    un: any = (d as any)((N: any, F: any, D: any, V: any): any => {
      let h: any = V;
      for (const b of (F as any).candidates) for (const C of (D as any).candidates) {
        if (!(de as any)(F, b, D, C)) continue;
        const L: any = (Ce as any)(N, F, b, D, C);
        L && (dn as any)(L, h) && (h = L);
      }
      return h;
    }, "bestScoreForOptionPair"),
    hn: any = (d as any)((N: any): any => {
      const F: any = (k as any)(),
        D: any = (O as any)(),
        V: any = (vt as any)(),
        h: any = (A as any)(N),
        b: any = new (Map as any)(((x as any).map as any)((q: any): any => [q, (Qt as any)((p as any)(q))])),
        C: any = new (Map as any)(((x as any).map as any)((q: any): any => [q, (R as any)((p as any)(q))])),
        L: any = new (Map as any)(),
        w: any = (m as any)(N);
      for (const q of w) for (const z of q) {
        if (((L as any).has as any)(z)) continue;
        const Y: any = (jt as any)(z, N, V, h);
        ((Y as any).length as any) > (0 as any) && ((L as any).set as any)(z, {
          edge: z,
          candidates: Y
        });
      }
      let B: any = {
        replacements: new (Map as any)(),
        crossings: (N as any).count,
        bends: F,
        length: D
      };
      const U: any = {
        current: N,
        currentBends: F,
        currentLength: D,
        baseBendsByEdge: b,
        baseLengthByEdge: C,
        baseSegments: V
      };
      for (const q of w) {
        const z: any = new (Set as any)(((q as any).filter as any)((ot: any): any => (((N as any).edgeSet as any).has as any)(ot))),
          Y: any = ((((q as any).map as any)((ot: any): any => ((L as any).get as any)(ot)) as any).filter as any)((ot: any): any => !!ot);
        for (let ot: any = 0; (ot as any) < ((Y as any).length as any); ot++) {
          const rt: any = (Y as any)[ot];
          for (let st: any = (ot as any) + (1 as any); (st as any) < ((Y as any).length as any); st++) {
            const tt: any = (Y as any)[st];
            !((z as any).has as any)((rt as any).edge) && !((z as any).has as any)((tt as any).edge) || (B = (un as any)(U, rt, tt, B));
          }
        }
      }
      return (((B as any).replacements as any).size as any) > (0 as any) ? (B as any).replacements : void 0;
    }, "bestPairedReplacement");
  for (let N: any = 0; (N as any) < (4 as any); N++) {
    const F: any = (v as any)(),
      D: any = (F as any).count;
    if ((D as any) === (0 as any)) return;
    let V: any,
      h: any,
      b: any = D,
      C: any = (Number as any).POSITIVE_INFINITY;
    for (const w of (F as any).edges) {
      const B: any = (Qt as any)((p as any)(w), Z);
      for (const U of (xt as any)(w)) {
        const q: any = (H as any)(w, U),
          z: any = !q && (_ as any)(w, U),
          Y: any = (S as any)(F, w, U),
          ot: any = (Qt as any)(U, Z);
        q || z || !((Y as any) < (D as any) || (Y as any) === (D as any) && (ot as any) < (B as any)) || (Y as any) > (b as any) || (Y as any) === (b as any) && (ot as any) >= (C as any) || (V = w, h = U, b = Y, C = ot);
      }
    }
    if (V && h) {
      (V as any).points = h;
      continue;
    }
    const L: any = (hn as any)(F);
    if (!L) return;
    for (const [w, B] of L) (w as any).points = B;
  }
}
(d as any)(vs, "resolveRenderedOrthogonalCrossings");
var pe: number = .001,
  Wr: number = 8;
function Ls(this: any, t: any, e: any): any {
  const {
      nodeInfoById: n,
      realNodeRects: o
    }: any = (an as any)(e),
    s: any = ["top", "bottom", "left", "right"],
    r: number = 20,
    i: any = {
      top: (((Math as any).min as any)(...((o as any).map as any)((f: any): any => ((f as any).rect as any).top)) as any) - (r as any),
      bottom: (((Math as any).max as any)(...((o as any).map as any)((f: any): any => ((f as any).rect as any).bottom)) as any) + (r as any),
      left: (((Math as any).min as any)(...((o as any).map as any)((f: any): any => ((f as any).rect as any).left)) as any) - (r as any),
      right: (((Math as any).max as any)(...((o as any).map as any)((f: any): any => ((f as any).rect as any).right)) as any) + (r as any)
    },
    c: any = (d as any)((f: any, y: any, v: any, M: any): any => {
      const E: any = [],
        T: any = (co as any)(f, y, v, M, r, pe);
      return T && ((E as any).push as any)(T), (y as any) === (M as any) && ((E as any).push as any)((ao as any)(f, y, v, (i as any)[y])), E;
    }, "buildOrthogonalPathCandidates"),
    a: any = (d as any)((f: any, y: any): any => {
      for (let v: any = 0; (v as any) < (((f as any).length as any) - (1 as any) as any); v++) {
        const M: any = (f as any)[v],
          E: any = (f as any)[(v as any) + (1 as any)];
        if ((At as any)(M, E, o, y, 1)) return !0;
      }
      return !1;
    }, "pathHitsNode"),
    l: any = (d as any)((f: any, y: any, v: any = !1): any => {
      let M: any = 0;
      const E: any = (Re as any)(f, pe),
        T: any = (y as any).start,
        m: any = (y as any).end;
      for (const S of t) {
        if ((S as any) === (y as any) || (S as any).isLayoutOnly) continue;
        const A: any = (S as any).start,
          R: any = (S as any).end;
        if (!v && T && m && ((A as any) === (T as any) || (A as any) === (m as any) || (R as any) === (T as any) || (R as any) === (m as any))) continue;
        const k: any = (S as any).points;
        if (!(!k || ((k as any).length as any) < (2 as any))) for (const O of E) for (const _ of (Re as any)(k, pe)) {
          if ((fo as any)((O as any).a, (O as any).b, (_ as any).a, (_ as any).b, pe, pe)) {
            M++;
            continue;
          }
          ((ce as any)(O, _, pe) as any) >= (Wr as any) && M++;
        }
      }
      return M;
    }, "pathConflictCount"),
    g: number = 4,
    x: any = (d as any)((f: any, y: any): any => {
      const v: any = ((Math as any).abs as any)(((f as any).y as any) - (((y as any).rect as any).top as any)),
        M: any = ((Math as any).abs as any)(((f as any).y as any) - (((y as any).rect as any).bottom as any)),
        E: any = ((Math as any).abs as any)(((f as any).x as any) - (((y as any).rect as any).left as any)),
        T: any = ((Math as any).abs as any)(((f as any).x as any) - (((y as any).rect as any).right as any));
      let m: any = "top",
        S: any = v;
      return (M as any) < (S as any) && (m = "bottom", S = M), (E as any) < (S as any) && (m = "left", S = E), (T as any) < (S as any) && (m = "right", S = T), m;
    }, "nearestSideOfRect"),
    I: any = new (Map as any)(),
    u: any = (d as any)((f: any, y: any, v: any): any => {
      const M: any = ((I as any).get as any)(f) ?? [];
      ((M as any).push as any)({
        side: y,
        edgeId: v
      }), ((I as any).set as any)(f, M);
    }, "addFaceClaim");
  for (const f of t) {
    if ((f as any).isLayoutOnly) continue;
    const y: any = (f as any).points ?? [];
    if (((y as any).length as any) < (1 as any)) continue;
    const v: any = (f as any).id ?? "",
      M: any = (f as any).start,
      E: any = (f as any).end;
    if (M) {
      const T: any = ((n as any).get as any)(M);
      T && (u as any)(M, (x as any)((y as any)[0], T), v);
    }
    if (E) {
      const T: any = ((n as any).get as any)(E);
      T && (u as any)(E, (x as any)((y as any)[((y as any).length as any) - (1 as any)], T), v);
    }
  }
  const p: any = (d as any)((f: any, y: any, v: any): any => ((I as any).get as any)(f)?.some((M: any): any => ((M as any).edgeId as any) !== (v as any) && ((M as any).side as any) === (y as any)) ?? !1, "faceIsClaimed");
  for (const f of t) {
    if ((f as any).isLayoutOnly) continue;
    const y: any = (f as any).points;
    if (!y || ((y as any).length as any) < (2 as any)) continue;
    const v: any = (Qt as any)(y, pe);
    if ((v as any) < (g as any)) continue;
    const M: any = (f as any).start,
      E: any = (f as any).end;
    if (!M || !E) continue;
    const T: any = ((n as any).get as any)(M),
      m: any = ((n as any).get as any)(E);
    if (!T || !m) continue;
    const S: any = (f as any).id ?? "",
      A: any = (l as any)(y, f, !0),
      R: any = (l as any)(y, f);
    let k: any,
      O: any = A,
      _: any = v;
    for (const H of s) {
      if ((p as any)(M, H, S)) continue;
      const P: any = (Ie as any)(T, H);
      for (const G of s) {
        if ((p as any)(E, G, S)) continue;
        const j: any = (Ie as any)(m, G);
        for (const J of (c as any)(P, H, j, G)) {
          if ((a as any)(J, [M, E])) continue;
          const dt: any = (Qt as any)(J, pe);
          if ((A as any) > (0 as any)) {
            const mt: any = (l as any)(J, f, !0);
            if ((mt as any) > (O as any) || (mt as any) === (O as any) && (dt as any) >= (_ as any)) continue;
            O = mt, _ = dt, k = J;
            continue;
          }
          ((l as any)(J, f) as any) > (R as any) || (dt as any) < (_ as any) && (_ = dt, k = J);
        }
      }
    }
    if (k) {
      (f as any).points = k;
      const H: any = ((I as any).get as any)(M);
      H && ((I as any).set as any)(M, ((H as any).filter as any)((G: any): any => ((G as any).edgeId as any) !== (S as any)));
      const P: any = ((I as any).get as any)(E);
      P && ((I as any).set as any)(E, ((P as any).filter as any)((G: any): any => ((G as any).edgeId as any) !== (S as any))), (u as any)(M, (x as any)((k as any)[0], T), S), (u as any)(E, (x as any)((k as any)[((k as any).length as any) - (1 as any)], m), S);
    }
  }
}
(d as any)(Ls, "simplifyDetouredEdges");
var Kt: number = .001,
  Po: number = 10,
  Ve: number = 7;
function $n(this: any, t: any, e: any): any {
  const n: any = e ? 0 : ((t as any).length as any) - (1 as any),
    o: any = e ? 1 : -1,
    s: any = (t as any)[n],
    r: any = (t as any)[(n as any) + (o as any)];
  if (!s || !r) return;
  const i: any = ((r as any).x as any) - ((s as any).x as any),
    c: any = ((r as any).y as any) - ((s as any).y as any);
  if (!(((((Math as any).abs as any)(i) as any) + (((Math as any).abs as any)(c) as any) as any) < (Kt as any))) {
    if ((((Math as any).abs as any)(c) as any) <= (Kt as any)) {
      const l: any = ((s as any).x as any) + ((((Math as any).sign as any)(i) as any) * (Po as any) as any);
      return {
        left: ((Math as any).min as any)((s as any).x, l),
        right: ((Math as any).max as any)((s as any).x, l),
        top: ((s as any).y as any) - (Ve as any),
        bottom: ((s as any).y as any) + (Ve as any)
      };
    }
    if ((((Math as any).abs as any)(i) as any) <= (Kt as any)) {
      const l: any = ((s as any).y as any) + ((((Math as any).sign as any)(c) as any) * (Po as any) as any);
      return {
        left: ((s as any).x as any) - (Ve as any),
        right: ((s as any).x as any) + (Ve as any),
        top: ((Math as any).min as any)((s as any).y, l),
        bottom: ((Math as any).max as any)((s as any).y, l)
      };
    }
    return {
      left: ((Math as any).min as any)((s as any).x, (r as any).x),
      right: ((Math as any).max as any)((s as any).x, (r as any).x),
      top: ((Math as any).min as any)((s as any).y, (r as any).y),
      bottom: ((Math as any).max as any)((s as any).y, (r as any).y)
    };
  }
}
(d as any)($n, "markerClearanceRectFor");
function Es(this: any, t: any): any {
  return {
    left: ((Math as any).min as any)((t as any).left, (t as any).right),
    right: ((Math as any).max as any)((t as any).left, (t as any).right),
    top: ((Math as any).min as any)((t as any).top, (t as any).bottom),
    bottom: ((Math as any).max as any)((t as any).top, (t as any).bottom)
  };
}
(d as any)(Es, "normalizeRect");
function zn(this: any, t: any, e: any): any {
  const n: any = (pt as any)(e),
    o: any = ($n as any)(n, !0),
    s: any = ($n as any)(n, !1);
  return (([o, s] as any).some as any)((r: any): any => r && (Je as any)(t, (Es as any)(r)));
}
(d as any)(zn, "labelOverlapsOwnMarker");
function Ue(this: any, t: any, e: any): any {
  const n: any = [];
  for (const p of t) {
    if ((p as any).isLayoutOnly) continue;
    const f: any = (p as any).points;
    if (!(!f || ((f as any).length as any) < (2 as any))) for (let y: any = 0; (y as any) < (((f as any).length as any) - (1 as any) as any); y++) ((n as any).push as any)({
      edgeId: (p as any).id,
      p1: (f as any)[y],
      p2: (f as any)[(y as any) + (1 as any)]
    });
  }
  const o: any = [],
    s: any = [];
  for (const p of ((e as any).values as any)()) {
    const f: any = (p as any).isGroup,
      y: any = (p as any).parentId;
    if (f && !y) {
      const M: any = (qt as any)(p);
      M && ((s as any).push as any)({
        id: (p as any).id,
        rect: M
      });
      continue;
    }
    if (f || (p as any).isEdgeLabel) continue;
    const v: any = (qt as any)(p);
    v && ((o as any).push as any)({
      nodeId: (p as any).id,
      rect: v
    });
  }
  const r: number = 3,
    i: number = 1,
    c: number = 12,
    a: any = (d as any)((p: any, f: any): any => {
      const y: any = (Tn as any)(f, r);
      for (const {
        nodeId: v,
        rect: M
      } of o) if ((v as any) !== (p as any) && (Je as any)(y, M)) return !0;
      return !1;
    }, "labelOverlapsForeignNode"),
    l: any = (d as any)((p: any, f: any): any => {
      const y: any = (Tn as any)(f, r);
      for (const v of n) if (((v as any).edgeId as any) !== (p as any) && (cn as any)((v as any).p1, (v as any).p2, y)) return !0;
      return !1;
    }, "labelOverlapsForeignEdge"),
    g: any = (d as any)((p: any, f: any, y: any): any => (a as any)(p, y) || (l as any)(f, y), "labelOverlapsAnything"),
    x: any = [],
    I: any = (d as any)((p: any): any => {
      for (const {
        id: f,
        rect: y
      } of s) if ((ts as any)(y, p)) return f;
    }, "findContainingLane"),
    u: any = (d as any)((p: any, f: any): any => ((x as any).some as any)((y: any): any => ((y as any).labelId as any) !== (p as any) && (Je as any)(f, (y as any).rect)), "overlapsPlacedLabel");
  for (const p of t) {
    if ((p as any).isLayoutOnly) continue;
    const f: any = (p as any).labelNodeId;
    if (!f) continue;
    const y: any = ((e as any).get as any)(f);
    if (!y) continue;
    const v: any = (p as any).points;
    if (!v || ((v as any).length as any) < (2 as any)) continue;
    const M: any = (y as any).width ?? 0,
      E: any = (y as any).height ?? 0;
    if ((M as any) <= (0 as any) || (E as any) <= (0 as any)) continue;
    const T: any = [];
    for (let Q: any = 0; (Q as any) < (((v as any).length as any) - (1 as any) as any); Q++) {
      const W: any = (v as any)[Q],
        et: any = (v as any)[(Q as any) + (1 as any)],
        at: any = ((Math as any).abs as any)(((W as any).x as any) - ((et as any).x as any)),
        gt: any = ((Math as any).abs as any)(((W as any).y as any) - ((et as any).y as any));
      (at as any) < (Kt as any) && (gt as any) < (Kt as any) || (at as any) >= (Kt as any) && (gt as any) >= (Kt as any) || ((T as any).push as any)({
        idx: Q,
        length: (at as any) + (gt as any),
        orientation: (at as any) >= (Kt as any) ? "horizontal" : "vertical",
        midX: (((W as any).x as any) + ((et as any).x as any) as any) / (2 as any),
        midY: (((W as any).y as any) + ((et as any).y as any) as any) / (2 as any)
      });
    }
    if (((T as any).length as any) === (0 as any)) continue;
    const m: any = ((T as any).length as any) >= (3 as any) ? ((T as any).filter as any)((Q: any): any => ((Q as any).idx as any) > (0 as any) && ((Q as any).idx as any) < (((T as any).length as any) - (1 as any) as any)) : T,
      S: any = ((m as any).length as any) > (0 as any) ? m : T,
      A: any = (M as any) >= (E as any) ? "horizontal" : "vertical",
      R: any = (d as any)((Q: any): any => (([...Q] as any).sort as any)((W: any, et: any): any => {
        const at: any = ((W as any).orientation as any) === (A as any),
          gt: any = ((et as any).orientation as any) === (A as any);
        if ((at as any) !== (gt as any)) return at ? -1 : 1;
        const xt: any = ((W as any).length as any) >= (((((W as any).orientation as any) === ("horizontal" as any) ? M : E) as any) + (2 as any) as any),
          vt: any = ((et as any).length as any) >= (((((et as any).orientation as any) === ("horizontal" as any) ? M : E) as any) + (2 as any) as any);
        return (xt as any) !== (vt as any) ? xt ? -1 : 1 : ((et as any).length as any) - ((W as any).length as any);
      }), "rankSegments"),
      k: any = (T as any)[0],
      O: any = (T as any)[((T as any).length as any) - (1 as any)],
      _: any = [.5, .25, .75, .05, .95, .15, .85, .1, .9],
      H: any = (d as any)((Q: any, W: any): any => {
        const et: any = (v as any)[(Q as any).idx],
          at: any = (v as any)[((Q as any).idx as any) + (1 as any)];
        return {
          midX: ((et as any).x as any) + ((((at as any).x as any) - ((et as any).x as any) as any) * (W as any) as any),
          midY: ((et as any).y as any) + ((((at as any).y as any) - ((et as any).y as any) as any) * (W as any) as any)
        };
      }, "anchorAtT"),
      P: any = (d as any)((Q: any, W: any, et: any): any => ((Math as any).min as any)(et, ((Math as any).max as any)(W, Q)), "clamp"),
      G: any = (d as any)((Q: any, W: any): any => ((Q as any).midX as any) >= (((W as any).left as any) - (Kt as any) as any) && ((Q as any).midX as any) <= (((W as any).right as any) + (Kt as any) as any) && ((Q as any).midY as any) >= (((W as any).top as any) - (Kt as any) as any) && ((Q as any).midY as any) <= (((W as any).bottom as any) + (Kt as any) as any), "pointInsideRectInclusive"),
      j: any = (d as any)((Q: any): any => {
        const W: any = (Ae as any)((Q as any).midX, (Q as any).midY, M, E),
          et: any = (I as any)(W);
        if (et) return {
          laneId: et,
          anchor: Q,
          rect: W
        };
        const at: any = ((s as any).find as any)(({
          rect: te
        }: any): any => (G as any)(Q, te));
        if (!at) return;
        const gt: any = ((((at as any).rect as any).left as any) + ((M as any) / (2 as any) as any) as any) + (i as any),
          xt: any = ((((at as any).rect as any).right as any) - ((M as any) / (2 as any) as any) as any) - (i as any),
          vt: any = ((((at as any).rect as any).top as any) + ((E as any) / (2 as any) as any) as any) + (i as any),
          Vt: any = ((((at as any).rect as any).bottom as any) - ((E as any) / (2 as any) as any) as any) - (i as any);
        if ((gt as any) > (xt as any) || (vt as any) > (Vt as any)) return;
        const jt: any = {
            midX: (P as any)((Q as any).midX, gt, xt),
            midY: (P as any)((Q as any).midY, vt, Vt)
          },
          Ut: any = (Ae as any)((jt as any).midX, (jt as any).midY, M, E);
        return (G as any)(Q, Ut) ? {
          laneId: (at as any).id,
          anchor: jt,
          rect: Ut
        } : void 0;
      }, "placementForAnchor"),
      J: any = (d as any)((Q: any, W: any, et: any): any => ((Q as any).orientation as any) === ("horizontal" as any) ? ((Math as any).abs as any)(((W as any).midX as any) - ((et as any).x as any)) : ((Math as any).abs as any)(((W as any).midY as any) - ((et as any).y as any)), "distanceAlongSegment"),
      dt: any = (d as any)((Q: any, W: any): any => {
        const at: any = ((((Q as any).orientation as any) === ("horizontal" as any) ? (M as any) / (2 as any) : (E as any) / (2 as any)) as any) + (c as any);
        if ((Q as any) === (k as any)) {
          const gt: any = (v as any)[(Q as any).idx];
          if ((((J as any)(Q, W, gt) as any) + (Kt as any) as any) < (at as any)) return !1;
        }
        if ((Q as any) === (O as any)) {
          const gt: any = (v as any)[((Q as any).idx as any) + (1 as any)];
          if ((((J as any)(Q, W, gt) as any) + (Kt as any) as any) < (at as any)) return !1;
        }
        return !0;
      }, "labelClearsTerminalEndpoints"),
      mt: any = (d as any)((Q: any): any => {
        const W: any = (R as any)(Q);
        for (const et of W) for (const at of _) {
          const gt: any = (H as any)(et, at);
          if (!(dt as any)(et, gt)) continue;
          const xt: any = (j as any)(gt);
          if (xt && !(zn as any)((xt as any).rect, v) && !(u as any)(f, (xt as any).rect) && !(g as any)(f, (p as any).id, (xt as any).rect)) return {
            laneId: (xt as any).laneId,
            anchor: (xt as any).anchor
          };
        }
      }, "tryPool"),
      kt: any = (d as any)((Q: any, W: any, et: any = !1): any => {
        const at: any = (R as any)(Q);
        for (const gt of at) {
          const xt: any = {
            midX: (gt as any).midX,
            midY: (gt as any).midY
          };
          if (W && !(dt as any)(gt, xt)) continue;
          const vt: any = (j as any)(xt);
          if (vt && !(zn as any)((vt as any).rect, v) && !(u as any)(f, (vt as any).rect) && !(a as any)(f, (vt as any).rect) && (et || !(l as any)((p as any).id, (vt as any).rect))) return {
            laneId: (vt as any).laneId,
            anchor: (vt as any).anchor
          };
        }
      }, "findLaneContainingFallback"),
      Pt: any = (mt as any)(S) ?? (((S as any).length as any) < ((T as any).length as any) ? (mt as any)(T) : void 0) ?? (kt as any)(T, !0) ?? (kt as any)(T, !1) ?? (kt as any)(T, !1, !0);
    if (Pt) {
      (y as any).x = ((Pt as any).anchor as any).midX, (y as any).y = ((Pt as any).anchor as any).midY, (y as any).parentId = (Pt as any).laneId;
      const Q: any = (Ae as any)(((Pt as any).anchor as any).midX, ((Pt as any).anchor as any).midY, M, E),
        W: any = ((x as any).findIndex as any)((et: any): any => ((et as any).labelId as any) === (f as any));
      (W as any) >= (0 as any) ? (x as any)[W] = {
        labelId: f,
        rect: Q
      } : ((x as any).push as any)({
        labelId: f,
        rect: Q
      });
    }
  }
}
(d as any)(Ue, "anchorLabelsToPolyline");
var Sn: number = 1e-6,
  Kr: number = 8,
  Bo: any = (Kr as any) / (2 as any),
  qr: number = 3;
function Vn(this: any, t: any, e: any): any {
  return (t as any) < (e as any) ? `${t}::${e}` : `${e}::${t}`;
}
(d as any)(Vn, "pairKey");
function Ts(this: any, t: any, e: any): any {
  const {
      nodeInfoById: n,
      realNodeRects: o
    }: any = (an as any)(e),
    s: any = new (Map as any)();
  for (const i of e) {
    const c: any = (i as any).id;
    if (!(i as any).isGroup && (i as any).isEdgeLabel) {
      ((s as any).set as any)(c, {
        w: (i as any).width ?? 0,
        h: (i as any).height ?? 0
      });
      continue;
    }
  }
  const r: any = (d as any)((i: any, c: any, a: any, l: any): any => {
    const g: any = (Vn as any)(c, a);
    let x: any = 0;
    const I: any = (d as any)((u: any): any => {
      if (!u) return;
      const p: any = ((s as any).get as any)(u);
      if (!p) return;
      const f: any = (l as any) === ("x" as any) ? ((p as any).w as any) / (2 as any) : ((p as any).h as any) / (2 as any);
      (f as any) > (x as any) && (x = f);
    }, "consider");
    (I as any)((i as any).labelNodeId);
    for (const u of t) {
      if ((u as any) === (i as any) || (u as any).isLayoutOnly) continue;
      const p: any = (u as any).start,
        f: any = (u as any).end;
      !p || !f || ((Vn as any)(p, f) as any) === (g as any) && (I as any)((u as any).labelNodeId);
    }
    return (x as any) > (0 as any) ? (x as any) + (qr as any) : 0;
  }, "labelClearanceFor");
  for (const i of t) {
    if ((i as any).isLayoutOnly) continue;
    const c: any = (i as any).points;
    if (!(ro as any)(c, Sn)) continue;
    const a: any = (lo as any)(i, n, Sn);
    if (!a) continue;
    const {
      srcId: l,
      dstId: g,
      srcInfo: x,
      dstInfo: I,
      collinearX: u,
      collinearY: p
    }: any = a;
    if ((u as any) === (p as any)) continue;
    let f: any, y: any;
    if (u) {
      const m: any = ((I as any).cy as any) > ((x as any).cy as any);
      f = {
        x: (x as any).cx,
        y: m ? ((x as any).rect as any).bottom : ((x as any).rect as any).top
      }, y = {
        x: (I as any).cx,
        y: m ? ((I as any).rect as any).top : ((I as any).rect as any).bottom
      };
    } else {
      const m: any = ((I as any).cx as any) > ((x as any).cx as any);
      f = {
        x: m ? ((x as any).rect as any).right : ((x as any).rect as any).left,
        y: (x as any).cy
      }, y = {
        x: m ? ((I as any).rect as any).left : ((I as any).rect as any).right,
        y: (I as any).cy
      };
    }
    if ((At as any)(f, y, o, [l, g], 1)) continue;
    const M: any = (r as any)(i, l, g, u ? "x" : "y"),
      E: any = (M as any) > (Bo as any) ? M : Bo,
      T: any = [0, E, -E];
    for (const m of T) {
      const S: any = {
          ...f
        },
        A: any = {
          ...y
        };
      if (u) {
        if ((S as any).x += m, (A as any).x += m, ((S as any).x as any) <= (((x as any).rect as any).left as any) || ((S as any).x as any) >= (((x as any).rect as any).right as any) || ((A as any).x as any) <= (((I as any).rect as any).left as any) || ((A as any).x as any) >= (((I as any).rect as any).right as any)) continue;
      } else if ((S as any).y += m, (A as any).y += m, ((S as any).y as any) <= (((x as any).rect as any).top as any) || ((S as any).y as any) >= (((x as any).rect as any).bottom as any) || ((A as any).y as any) <= (((I as any).rect as any).top as any) || ((A as any).y as any) >= (((I as any).rect as any).bottom as any)) continue;
      if (!(At as any)(S, A, o, [l, g], 1) && !(Ze as any)(S, A, t, i, {
        epsilon: Sn
      })) {
        (i as any).points = [S, A];
        break;
      }
    }
  }
}
(d as any)(Ts, "straightenCollinearSiblingDetours");
function jn(this: any, t: any, e: any): any {
  const {
      realNodeRects: a,
      labelNodeRects: l
    }: any = (me as any)(((e as any).values as any)()),
    g: any = (d as any)((m: any, S: any): any => (((Re as any)(S, .001) as any).map as any)((A: any): any => ({
      ...A,
      edge: m,
      interior: ((A as any).index as any) >= (1 as any) && ((A as any).index as any) <= (((S as any).length as any) - (3 as any) as any)
    })), "segmentsFor"),
    x: any = (d as any)((): any => {
      const m: any = [];
      for (const S of t) {
        if ((S as any).isLayoutOnly) continue;
        const A: any = (S as any).points;
        !A || ((A as any).length as any) < (2 as any) || ((m as any).push as any)(...(g as any)(S, (pt as any)(A)));
      }
      return m;
    }, "allSegments"),
    I: any = (d as any)((m: any, S: any): any => (m as any).horizontal && (S as any).horizontal ? ((zt as any)(((m as any).a as any).x, ((m as any).b as any).x, ((S as any).a as any).x, ((S as any).b as any).x) as any) >= (8 as any) && (((Math as any).abs as any)((((m as any).a as any).y as any) - (((S as any).a as any).y as any)) as any) < (7 as any) : (m as any).vertical && (S as any).vertical ? ((zt as any)(((m as any).a as any).y, ((m as any).b as any).y, ((S as any).a as any).y, ((S as any).b as any).y) as any) >= (8 as any) && (((Math as any).abs as any)((((m as any).a as any).x as any) - (((S as any).a as any).x as any)) as any) < (7 as any) : !1, "hasCrowdedParallelTrack"),
    u: any = (d as any)((m: any, S: any): any => {
      const A: any = (m as any).start,
        R: any = (m as any).end,
        k: any = (g as any)(m, S);
      if (((k as any).length as any) !== (((S as any).length as any) - (1 as any) as any)) return !1;
      const O: any = (([A, R] as any).filter as any)((H: any): any => !!H),
        _: any = (m as any).labelNodeId ? [(m as any).labelNodeId] : [];
      for (const H of k) if ((At as any)((H as any).a, (H as any).b, a, O, -2) || (At as any)((H as any).a, (H as any).b, l, _, -2)) return !1;
      for (const H of t) {
        if ((H as any) === (m as any) || (H as any).isLayoutOnly) continue;
        const P: any = (H as any).points;
        if (!(!P || ((P as any).length as any) < (2 as any))) {
          for (const G of k) for (const j of (g as any)(H, (pt as any)(P))) if ((I as any)(G, j) || (le as any)((G as any).a, (G as any).b, (j as any).a, (j as any).b, .001)) return !1;
        }
      }
      return !0;
    }, "candidateIsSafe"),
    p: any = (d as any)((m: any, S: any): any => {
      const A: any = (pt as any)(((m as any).edge as any).points ?? []);
      if (((A as any).length as any) < (4 as any) || ((m as any).index as any) >= (((A as any).length as any) - (1 as any) as any)) return;
      const R: any = ((A as any).map as any)((k: any): any => ({
        ...k
      }));
      if ((m as any).horizontal) ((R as any)[(m as any).index] as any).y += S, ((R as any)[((m as any).index as any) + (1 as any)] as any).y += S;else if ((m as any).vertical) ((R as any)[(m as any).index] as any).x += S, ((R as any)[((m as any).index as any) + (1 as any)] as any).x += S;else return;
      return (((g as any)((m as any).edge, R) as any).length as any) === (((R as any).length as any) - (1 as any) as any) ? R : void 0;
    }, "shiftedCandidate"),
    f: any = (d as any)((m: any, S: any): any => ({
      x: (m as any).x ?? (((S as any).left as any) + ((S as any).right as any) as any) / (2 as any),
      y: (m as any).y ?? (((S as any).top as any) + ((S as any).bottom as any) as any) / (2 as any)
    }), "nodeCenter"),
    y: any = (d as any)((m: any): any => {
      const S: any = (m as any).edge,
        A: any = (pt as any)((S as any).points ?? []);
      if (((A as any).length as any) !== (4 as any) || ((m as any).index as any) !== (1 as any)) return;
      const R: any = (S as any).start ? ((e as any).get as any)((S as any).start) : void 0,
        k: any = (S as any).end ? ((e as any).get as any)((S as any).end) : void 0,
        O: any = R ? (qt as any)(R) : void 0,
        _: any = k ? (qt as any)(k) : void 0,
        H: any = ((A as any).slice as any)(((m as any).index as any) + (2 as any));
      if (!(!R || !k || !O || !_ || ((H as any).length as any) === (0 as any))) return {
        sourceCenter: (f as any)(R, O),
        targetCenter: (f as any)(k, _),
        sourceRect: O,
        tail: H
      };
    }, "sourceDetourContextFor"),
    v: any = (d as any)((m: any, S: any, A: any, R: any, k: any, O: any): any => {
      const _: any = ((R as any).y as any) >= ((A as any).y as any),
        H: any = _ ? (k as any).bottom : (k as any).top,
        P: any = (H as any) + ((_ ? 20 : -20) as any);
      if (_ && (((m as any).b as any).y as any) <= ((P as any) + (.001 as any) as any) || !_ && (((m as any).b as any).y as any) >= ((P as any) - (.001 as any) as any)) return;
      const G: any = (((m as any).a as any).x as any) + (S as any);
      return (pt as any)([{
        x: (A as any).x,
        y: H
      }, {
        x: (A as any).x,
        y: P
      }, {
        x: G,
        y: P
      }, {
        x: G,
        y: ((m as any).b as any).y
      }, ...O], .001);
    }, "verticalSourceDetour"),
    M: any = (d as any)((m: any, S: any, A: any, R: any, k: any, O: any): any => {
      const _: any = ((R as any).x as any) >= ((A as any).x as any),
        H: any = _ ? (k as any).right : (k as any).left,
        P: any = (H as any) + ((_ ? 20 : -20) as any);
      if (_ && (((m as any).b as any).x as any) <= ((P as any) + (.001 as any) as any) || !_ && (((m as any).b as any).x as any) >= ((P as any) - (.001 as any) as any)) return;
      const G: any = (((m as any).a as any).y as any) + (S as any);
      return (pt as any)([{
        x: H,
        y: (A as any).y
      }, {
        x: P,
        y: (A as any).y
      }, {
        x: P,
        y: G
      }, {
        x: ((m as any).b as any).x,
        y: G
      }, ...O], .001);
    }, "horizontalSourceDetour"),
    E: any = (d as any)((m: any, S: any): any => {
      const A: any = (y as any)(m);
      if (A) {
        if ((m as any).vertical) return (v as any)(m, S, (A as any).sourceCenter, (A as any).targetCenter, (A as any).sourceRect, (A as any).tail);
        if ((m as any).horizontal) return (M as any)(m, S, (A as any).sourceCenter, (A as any).targetCenter, (A as any).sourceRect, (A as any).tail);
      }
    }, "sourceDetourCandidate"),
    T: any = [-7, 7, -14, 14, -21, 21];
  for (let m: any = 0; (m as any) < (12 as any); m++) {
    const S: any = (x as any)();
    let A: any = !1;
    for (let R: any = 0; (R as any) < ((S as any).length as any) && !A; R++) for (let k: any = (R as any) + (1 as any); (k as any) < ((S as any).length as any) && !A; k++) {
      const O: any = (S as any)[R],
        _: any = (S as any)[k];
      if (((O as any).edge as any) === ((_ as any).edge as any) || !(I as any)(O, _)) continue;
      const H: any = (([O, _] as any).filter as any)((P: any): any => (P as any).interior);
      for (const P of H) {
        for (const G of T) {
          const j: any = (p as any)(P, G);
          if (j && (u as any)((P as any).edge, j)) {
            ((P as any).edge as any).points = j, A = !0;
            break;
          }
          const J: any = (E as any)(P, G);
          if (J && (u as any)((P as any).edge, J)) {
            ((P as any).edge as any).points = J, A = !0;
            break;
          }
        }
        if (A) break;
      }
    }
    if (!A) return;
  }
}
(d as any)(jn, "nudgeSharedInteriorSubpaths");
function ws(this: any, t: any, e: any, n: any, o: any): any {
  const s: any = ((e as any).x as any) - ((t as any).x as any),
    r: any = ((e as any).y as any) - ((t as any).y as any),
    i: any = ((o as any).x as any) - ((n as any).x as any),
    c: any = ((o as any).y as any) - ((n as any).y as any),
    a: any = ((s as any) * (c as any) as any) - ((r as any) * (i as any) as any);
  if ((((Math as any).abs as any)(a) as any) < (1e-10 as any)) return !1;
  const l: any = ((n as any).x as any) - ((t as any).x as any),
    g: any = ((n as any).y as any) - ((t as any).y as any),
    x: any = (((l as any) * (c as any) as any) - ((g as any) * (i as any) as any) as any) / (a as any),
    I: any = (((l as any) * (r as any) as any) - ((g as any) * (s as any) as any) as any) / (a as any),
    u: number = .01;
  return (x as any) > (u as any) && (x as any) < ((1 as any) - (u as any) as any) && (I as any) > (u as any) && (I as any) < ((1 as any) - (u as any) as any);
}
(d as any)(ws, "segmentsIntersect");
function As(this: any, t: any): any {
  const e: any = (t as any).nodes ?? [],
    n: any = (t as any).edges ?? [],
    o: any = [];
  if (!(n as any).length || !(e as any).length) return o;
  const s: any = (es as any)(e),
    r: any = [];
  for (const c of n) {
    if ((c as any).isLayoutOnly) continue;
    const a: any = (c as any).points;
    if (!a || ((a as any).length as any) < (2 as any)) continue;
    const l: any = (c as any).start,
      g: any = (c as any).end,
      x: any = (c as any).labelNodeId,
      I: any = (c as any).id ?? `${l}->${g}`;
    for (const u of s) if (!(((u as any).nodeId as any) === (l as any) || ((u as any).nodeId as any) === (g as any)) && !(x && ((u as any).nodeId as any) === (x as any))) {
      for (let p: any = 0; (p as any) < (((a as any).length as any) - (1 as any) as any); p++) if ((cn as any)((a as any)[p], (a as any)[(p as any) + (1 as any)], u, -1)) {
        ((o as any).push as any)({
          type: "edge-node-overlap",
          edgeId: I,
          targetId: (u as any).nodeId,
          detail: `segment ${p} passes through node "${(u as any).nodeId}"`
        });
        break;
      }
    }
    for (let u: any = 0; (u as any) < (((a as any).length as any) - (1 as any) as any); u++) ((r as any).push as any)({
      edgeId: I,
      start: l,
      end: g,
      p1: (a as any)[u],
      p2: (a as any)[(u as any) + (1 as any)]
    });
  }
  const i: any = new (Set as any)();
  for (let c: any = 0; (c as any) < ((r as any).length as any); c++) for (let a: any = (c as any) + (1 as any); (a as any) < ((r as any).length as any); a++) {
    const l: any = (r as any)[c],
      g: any = (r as any)[a];
    if (((l as any).edgeId as any) !== ((g as any).edgeId as any) && !(((l as any).start as any) === ((g as any).start as any) || ((l as any).start as any) === ((g as any).end as any) || ((l as any).end as any) === ((g as any).start as any) || ((l as any).end as any) === ((g as any).end as any)) && (ws as any)((l as any).p1, (l as any).p2, (g as any).p1, (g as any).p2)) {
      const x: any = ((l as any).edgeId as any) < ((g as any).edgeId as any) ? `${(l as any).edgeId}|${(g as any).edgeId}` : `${(g as any).edgeId}|${(l as any).edgeId}`;
      ((i as any).has as any)(x) || (((i as any).add as any)(x), ((o as any).push as any)({
        type: "edge-edge-crossing",
        edgeId: (l as any).edgeId,
        targetId: (g as any).edgeId,
        detail: `edges "${(l as any).edgeId}" and "${(g as any).edgeId}" cross`
      }));
    }
  }
  if (((o as any).length as any) > (0 as any)) {
    const c: any = (((o as any).filter as any)((l: any): any => ((l as any).type as any) === ("edge-node-overlap" as any)) as any).length,
      a: any = (((o as any).filter as any)((l: any): any => ((l as any).type as any) === ("edge-edge-crossing" as any)) as any).length;
    ((Ke as any).warn as any)(`[SWIMLANE_VALIDATE] ${(o as any).length} issue(s) detected: ${c} edge-node overlap(s), ${a} edge crossing(s)`);
    for (const l of o) ((Ke as any).warn as any)(`[SWIMLANE_VALIDATE]   ${(l as any).type}: ${(l as any).detail}`);
  }
  return o;
}
(d as any)(As, "validateSwimlanesLayout");
function Rs(this: any, t: any, e: any): any {
  const n: any = (t as any).nodes ?? [],
    o: any = (t as any).edges ?? [],
    s: any = ((n as any).filter as any)((c: any): any => !(c as any).isGroup);
  if (((e as any) === ("LR" as any) || (e as any) === ("RL" as any)) && ((s as any).length as any) > (0 as any) && !(ms as any)(t, e) || (e as any) === ("BT" as any) && ((s as any).length as any) > (0 as any) && !(ps as any)(t)) return;
  for (const c of o) {
    if ((c as any).isLayoutOnly) continue;
    const a: any = (c as any).points;
    !a || ((a as any).length as any) < (2 as any) || ((c as any).points = (ae as any)((Qe as any)(a)));
  }
  (Ls as any)(o, n), (Ts as any)(o, n), (ys as any)(o, n);
  const r: any = new (Map as any)();
  for (const c of n) ((r as any).set as any)((String as any)((c as any).id), c);
  (Ue as any)(o, r), (is as any)(o, r), (xs as any)(o, r), (jn as any)(o, r), (bs as any)(o, r), (Ms as any)(o, r), (Xn as any)(o, r), (Is as any)(o, r);
  const i: any = (d as any)((): any => {
    (vs as any)(o, r), (Ss as any)(o, r), (Cs as any)(o, r), (Ue as any)(o, r), (Dn as any)(o, r), (Xn as any)(o, r), (Ue as any)(o, r), (Dn as any)(o, r);
  }, "finalizeRenderedEdges");
  (i as any)(), (jn as any)(o, r), (i as any)(), (Yn as any)(o, r), (Gn as any)(o, r), (Yn as any)(o, r), (Gn as any)(o, r);
}
(d as any)(Rs, "postProcessSwimlaneLayout");
function ye(this: any, t: any): any {
  const e: any = new (Map as any)((t as any).nodeById),
    n: any = new (Set as any)(),
    o: any = [];
  for (const r of (t as any).edges) {
    if (!((e as any).has as any)((r as any).src) || !((e as any).has as any)((r as any).dst)) continue;
    const i: any = `${(r as any).id}:${(r as any).src}->${(r as any).dst}`;
    ((n as any).has as any)(i) || (((n as any).add as any)(i), ((o as any).push as any)(r));
  }
  return {
    nodes: [...((e as any).keys as any)()],
    edges: o,
    layout: (t as any).layout,
    nodeById: e
  };
}
(d as any)(ye, "normalizeGraph");
function mo(this: any, t: any, e: any): any {
  return (((t as any).edges as any).filter as any)((n: any): any => ((n as any).dst as any) === (e as any));
}
(d as any)(mo, "incoming");
function Ns(this: any, t: any): any {
  const e: any = new (Map as any)();
  for (const n of (t as any).nodes) ((e as any).set as any)(n, []);
  for (const n of (t as any).edges) ((((e as any).get as any)((n as any).src) as any).push as any)((n as any).dst);
  return e;
}
(d as any)(Ns, "buildSuccessorMap");
function yo(this: any, t: any): any {
  const e: any = (Ns as any)(t);
  for (const n of ((e as any).values as any)()) ((n as any).sort as any)((o: any, s: any): any => ((o as any).localeCompare as any)(s));
  return e;
}
(d as any)(yo, "buildSortedSuccessorMap");
function xo(this: any, t: any): any {
  const e: any = new (Map as any)();
  for (const n of (t as any).nodes) ((e as any).set as any)(n, 0);
  for (const n of (t as any).edges) ((e as any).set as any)((n as any).dst, ((((e as any).get as any)((n as any).dst) ?? 0) as any) + (1 as any));
  return e;
}
(d as any)(xo, "buildInDegreeMap");
function bo(this: any, t: any): any {
  return (((((([...((t as any).entries as any)()] as any).filter as any)(([, e]: any): any => (e as any) === (0 as any)) as any).map as any)(([e]: any): any => e) as any).sort as any)((e: any, n: any): any => ((e as any).localeCompare as any)(n));
}
(d as any)(bo, "sortedZeroInDegreeNodes");
function ln(this: any, t: any, e: any = (): any => !0): any {
  const n: any = new (Map as any)(),
    o: any = new (Map as any)();
  for (const s of (t as any).nodes) ((n as any).set as any)(s, []), ((o as any).set as any)(s, []);
  for (const s of (t as any).edges) (e as any)(s) && (((((o as any).get as any)((s as any).src) as any).push as any)((s as any).dst), ((((n as any).get as any)((s as any).dst) as any).push as any)((s as any).src));
  return {
    preds: n,
    succs: o
  };
}
(d as any)(ln, "buildPredecessorSuccessorMaps");
function Mo(this: any, t: any, e: any, n: any, o: any): any {
  let s: any = 0;
  for (const i of (t as any).nodes) o?.skipGroups && (((t as any).nodeById as any).get as any)(i)?.isGroup || (s = ((Math as any).max as any)(s, (n as any)[i] ?? 0));
  const r: any = ((Array as any).from as any)({
    length: (s as any) + (1 as any)
  }, (): any => []);
  for (const i of e) o?.skipGroups && (((t as any).nodeById as any).get as any)(i)?.isGroup || (((r as any)[((Math as any).max as any)(0, (n as any)[i] ?? 0)] as any).push as any)(i);
  return r;
}
(d as any)(Mo, "buildLayersFromRanks");
function Be(this: any, t: any): any {
  const e: any = (xo as any)(t),
    n: any = (bo as any)(e),
    o: any = [],
    s: any = (yo as any)(t);
  for (; (n as any).length;) {
    const r: any = ((n as any).shift as any)();
    ((o as any).push as any)(r);
    for (const i of ((s as any).get as any)(r) ?? []) if (((e as any).set as any)(i, ((((e as any).get as any)(i) ?? 0) as any) - (1 as any)), ((((e as any).get as any)(i) ?? 0) as any) === (0 as any)) {
      let c: any = 0;
      for (; (c as any) < ((n as any).length as any) && ((n as any)[c] as any) < (i as any);) c++;
      ((n as any).splice as any)(c, 0, i);
    }
  }
  return ((o as any).length as any) === (((t as any).nodes as any).length as any) ? o : null;
}
(d as any)(Be, "topoSortIfAcyclic");
function Ne(this: any, t: any): any {
  const e: any = new (Map as any)();
  let n: any = 0;
  for (const o of t) ((e as any).set as any)(o, n), n++;
  return e;
}
(d as any)(Ne, "buildLayerIndex");
function Io(this: any, t: any): any {
  const e: any = new (Array as any)((t as any).length),
    n: any = (d as any)((o: any, s: any): any => {
      if (((s as any) - (o as any) as any) <= (1 as any)) return 0;
      const r: any = ((o as any) + (s as any) as any) >> (1 as any);
      let i: any = ((n as any)(o, r) as any) + ((n as any)(r, s) as any),
        c: any = o,
        a: any = r,
        l: any = o;
      for (; (c as any) < (r as any) || (a as any) < (s as any);) (a as any) >= (s as any) || (c as any) < (r as any) && ((t as any)[c] as any) <= ((t as any)[a] as any) ? (e as any)[l++] = (t as any)[c++] : ((e as any)[l++] = (t as any)[a++], i += (r as any) - (c as any));
      for (let g: any = o; (g as any) < (s as any); g++) (t as any)[g] = (e as any)[g];
      return i;
    }, "count");
  return (n as any)(0, (t as any).length);
}
(d as any)(Io, "countInversions");
function Os(this: any, t: any): any {
  const e: any = (ye as any)(t),
    n: any = new (Map as any)();
  for (const g of (e as any).nodes) ((n as any).set as any)(g, []);
  for (const g of (e as any).edges) ((((n as any).get as any)((g as any).src) as any).push as any)(g);
  for (const g of ((n as any).values as any)()) ((g as any).sort as any)((x: any, I: any): any => ((x as any).dst as any) === ((I as any).dst as any) ? (((x as any).id as any).localeCompare as any)((I as any).id) : (((x as any).dst as any).localeCompare as any)((I as any).dst));
  const o: any = ((Object as any).create as any)(null);
  for (const g of (e as any).nodes) (o as any)[g] = 0;
  const s: any = [],
    r: any = (d as any)((g: any): any => {
      (o as any)[g] = 1;
      for (const x of ((n as any).get as any)(g) ?? []) {
        const I: any = (x as any).dst;
        ((o as any)[I] as any) === (0 as any) ? (r as any)(I) : ((o as any)[I] as any) === (1 as any) && ((s as any).push as any)(x);
      }
      (o as any)[g] = 2;
    }, "dfs"),
    i: any = (([...(e as any).nodes] as any).sort as any)((g: any, x: any): any => ((g as any).localeCompare as any)(x));
  for (const g of i) ((o as any)[g] as any) === (0 as any) && (r as any)(g);
  const c: any = new (Set as any)(((s as any).map as any)((g: any): any => `${(g as any).id}:${(g as any).src}->${(g as any).dst}`)),
    a: any = (((e as any).edges as any).map as any)((g: any): any => ((c as any).has as any)(`${(g as any).id}:${(g as any).src}->${(g as any).dst}`) ? {
      id: (g as any).id,
      src: (g as any).dst,
      dst: (g as any).src,
      weight: (g as any).weight,
      ref: (g as any).ref
    } : g);
  return {
    acyclic: {
      nodes: [...(e as any).nodes],
      edges: a,
      layout: (e as any).layout,
      nodeById: new (Map as any)((e as any).nodeById)
    },
    reversed: s
  };
}
(d as any)(Os, "removeCycles_DFS");
function Ps(this: any, t: any): any {
  const e: any = new (Map as any)(),
    n: any = (d as any)((o: any): any => {
      if (((e as any).has as any)(o)) return ((e as any).get as any)(o);
      const s: any = (((t as any).nodeById as any).get as any)(o);
      if (!s) return ((e as any).set as any)(o, null), null;
      const r: any = (s as any).parentId;
      if (!r) return ((e as any).set as any)(o, null), null;
      const c: any = (n as any)(r) ?? r;
      return ((e as any).set as any)(o, c), c;
    }, "resolve");
  for (const o of (t as any).nodes) (n as any)(o);
  return e;
}
(d as any)(Ps, "buildTopLaneMap");
function fe(this: any, t: any): any {
  const e: any = (Ps as any)(t);
  return (n: any): any => ((e as any).get as any)(n) ?? null;
}
(d as any)(fe, "createTopLaneResolver");
function fn(this: any, t: any): any {
  const e: any = [];
  for (const n of ((t as any).layout as any).nodes ?? []) (n as any).isGroup && !(n as any).parentId && ((e as any).push as any)((n as any).id);
  return (([...new (Set as any)(e)] as any).reverse as any)();
}
(d as any)(fn, "buildTopLaneOrder");
function So(this: any, t: any, e: any): any {
  const n: any = (fn as any)(t);
  if (!e || ((e as any).length as any) === (0 as any)) return n;
  const o: any = new (Set as any)(n),
    s: any = new (Set as any)(),
    r: any = [];
  for (const i of e) !((o as any).has as any)(i) || ((s as any).has as any)(i) || (((s as any).add as any)(i), ((r as any).push as any)(i));
  for (const i of n) ((s as any).has as any)(i) || ((r as any).push as any)(i);
  return r;
}
(d as any)(So, "resolveTopLaneOrder");
var Jr: any = {
    EPSILON: 1e-6
  },
  sn: any = {
    GRAVITY_ITERATIONS: 8,
    MAX_CROSSING_OPTIMIZATION_PASSES: 4,
    DEFAULT_COMPACT_SINGLE_INPUT: !0
  },
  ko: any = {
    DEFAULT_LAYER_GAP: 100,
    DEFAULT_NODE_GAP: 40
  };
function Bs(this: any, t: any, e: any): any {
  const n: any = (ye as any)(t),
    o: any = e?.laneOf ?? ((): any => null),
    s: any = e?.rankHint,
    {
      preds: r
    }: any = (ln as any)(n);
  for (const m of ((r as any).values as any)()) ((m as any).sort as any)((S: any, A: any): any => ((S as any).localeCompare as any)(A));
  const i: any = (Be as any)(n) ?? (([...(n as any).nodes] as any).sort as any)((m: any, S: any): any => ((m as any).localeCompare as any)(S)),
    c: any = new (Map as any)();
  for (const [m, S] of ((i as any).entries as any)()) ((c as any).set as any)(S, m);
  const a: any = new (Map as any)(),
    l: any = new (Map as any)();
  for (const m of (n as any).nodes) ((l as any).set as any)(m, []);
  for (const m of i) {
    const S: any = (((((r as any).get as any)(m) ?? []) as any).filter as any)((A: any): any => ((a as any).has as any)(A));
    if (((S as any).length as any) > (0 as any)) {
      const A: any = (ks as any)(m, S, {
        laneOf: o,
        rankHint: s,
        topoIndex: c
      });
      ((a as any).set as any)(m, A), ((((l as any).get as any)(A) as any).push as any)(m);
    } else ((a as any).has as any)(m) || ((a as any).set as any)(m, null);
  }
  for (const m of (n as any).nodes) ((a as any).has as any)(m) || ((a as any).set as any)(m, null);
  const g: any = new (Set as any)();
  for (const m of (n as any).nodes) ((((a as any).get as any)(m) ?? null) as any) === (null as any) && ((g as any).add as any)(m);
  const x: any = (([...g] as any).sort as any)((m: any, S: any): any => {
      const A: any = ((c as any).get as any)(m) ?? 0,
        R: any = ((c as any).get as any)(S) ?? 0;
      return (A as any) === (R as any) ? ((m as any).localeCompare as any)(S) : (A as any) - (R as any);
    }),
    I: any = (_s as any)(n),
    u: any = new (Map as any)();
  for (const [m, S] of ((I as any).entries as any)()) ((u as any).set as any)(m, (([...S] as any).sort as any)((A: any, R: any): any => ((A as any).localeCompare as any)(R)));
  const p: any = (Fs as any)(u),
    f: any = (Ds as any)(u),
    y: any = new (Map as any)();
  for (const m of (n as any).nodes) ((y as any).set as any)(m, []);
  for (const m of f) for (const S of (m as any).nodes) {
    const A: any = ((y as any).get as any)(S);
    A ? ((A as any).push as any)((m as any).id) : ((y as any).set as any)(S, [(m as any).id]);
  }
  const v: any = [],
    M: any = [],
    E: any = new (Set as any)(),
    T: any = (d as any)((m: any): any => {
      if (!((E as any).has as any)(m)) {
        ((E as any).add as any)(m), ((v as any).push as any)(m);
        for (const S of ((l as any).get as any)(m) ?? []) (T as any)(S);
        ((M as any).push as any)(m);
      }
    }, "walk");
  for (const m of x) (T as any)(m);
  for (const m of i) (T as any)(m);
  return {
    parent: a,
    children: l,
    roots: x,
    componentOf: p,
    blocks: f,
    nodeBlocks: y,
    adjacency: u,
    preorder: v,
    postorder: M,
    topologicalOrder: i
  };
}
(d as any)(Bs, "buildDrivingTree");
function ks(this: any, t: any, e: any, n: any): any {
  const o: any = ((n as any).laneOf as any)(t);
  return ((([...e] as any).sort as any)((r: any, i: any): any => {
    const c: any = ((n as any).laneOf as any)(r),
      a: any = ((n as any).laneOf as any)(i),
      l: any = (c as any) != (null as any) && (c as any) === (o as any),
      g: any = (a as any) != (null as any) && (a as any) === (o as any);
    if ((l as any) !== (g as any)) return l ? -1 : 1;
    const x: any = (n as any).rankHint?.[r],
      I: any = (n as any).rankHint?.[i];
    if ((x as any) != (null as any) && (I as any) != (null as any) && (x as any) !== (I as any)) return (I as any) - (x as any);
    const u: any = (((n as any).topoIndex as any).get as any)(r) ?? 0,
      p: any = (((n as any).topoIndex as any).get as any)(i) ?? 0;
    return (u as any) !== (p as any) ? (u as any) - (p as any) : ((r as any).localeCompare as any)(i);
  }) as any)[0];
}
(d as any)(ks, "chooseParent");
function _s(this: any, t: any): any {
  const e: any = new (Map as any)();
  for (const n of (t as any).nodes) ((e as any).set as any)(n, new (Set as any)());
  for (const n of (t as any).edges) ((((e as any).get as any)((n as any).src) as any).add as any)((n as any).dst), ((((e as any).get as any)((n as any).dst) as any).add as any)((n as any).src);
  return e;
}
(d as any)(_s, "buildAdjacency");
function Fs(this: any, t: any): any {
  const e: any = new (Map as any)();
  let n: any = 0;
  for (const o of ((t as any).keys as any)()) {
    if (((e as any).has as any)(o)) continue;
    const s: any = [o];
    for (; ((s as any).length as any) > (0 as any);) {
      const r: any = ((s as any).pop as any)();
      if (!((e as any).has as any)(r)) {
        ((e as any).set as any)(r, n);
        for (const i of ((t as any).get as any)(r) ?? []) ((e as any).has as any)(i) || ((s as any).push as any)(i);
      }
    }
    n++;
  }
  return e;
}
(d as any)(Fs, "assignComponents");
function Ds(this: any, t: any): any {
  const e: any = new (Map as any)(),
    n: any = new (Map as any)(),
    o: any = [],
    s: any = [];
  let r: any = 0;
  const i: any = (d as any)((c: any, a: any): any => {
    ((e as any).set as any)(c, ++r), ((n as any).set as any)(c, r);
    for (const l of ((t as any).get as any)(c) ?? []) (l as any) !== (a as any) && (((e as any).has as any)(l) ? ((((e as any).get as any)(l) ?? 0) as any) < ((((e as any).get as any)(c) ?? 0) as any) && (((o as any).push as any)([c, l]), ((n as any).set as any)(c, ((Math as any).min as any)(((n as any).get as any)(c) ?? r, ((e as any).get as any)(l) ?? r))) : (((o as any).push as any)([c, l]), (i as any)(l, c), ((n as any).set as any)(c, ((Math as any).min as any)(((n as any).get as any)(c) ?? r, ((n as any).get as any)(l) ?? r)), ((((n as any).get as any)(l) ?? 0) as any) >= ((((e as any).get as any)(c) ?? 0) as any) && ((s as any).push as any)((Hs as any)(c, l, o, (s as any).length))));
  }, "visit");
  for (const c of ((t as any).keys as any)()) ((e as any).has as any)(c) || (i as any)(c, null);
  return s;
}
(d as any)(Ds, "computeBlocks");
function Hs(this: any, t: any, e: any, n: any, o: any): any {
  const s: any = [],
    r: any = new (Set as any)();
  for (; ((n as any).length as any) > (0 as any);) {
    const i: any = ((n as any).pop as any)();
    if (((s as any).push as any)(i), ((r as any).add as any)((i as any)[0]), ((r as any).add as any)((i as any)[1]), ((i as any)[0] as any) === (t as any) && ((i as any)[1] as any) === (e as any) || ((i as any)[0] as any) === (e as any) && ((i as any)[1] as any) === (t as any)) break;
  }
  return {
    id: o,
    edges: s,
    nodes: [...r]
  };
}
(d as any)(Hs, "popBlock");
function Xs(this: any, t: any, e: any, n: any): any {
  const o: any = [...(t as any).nodes],
    s: any = new (Map as any)();
  for (const [M, E] of ((o as any).entries as any)()) ((s as any).set as any)(E, M);
  const r: any = (o as any).length,
    i: any = ((new (Array as any)(r) as any).fill as any)(-1),
    c: any = ((new (Array as any)(r) as any).fill as any)(0),
    a: any = [],
    l: any = new (Set as any)();
  for (const M of o) {
    const E: any = (((n as any).parent as any).get as any)(M) ?? null,
      T: any = ((s as any).get as any)(M);
    (T as any) != (null as any) && (E as any) == (null as any) && ((i as any)[T] = -1, (c as any)[T] = 0, ((l as any).has as any)(M) || (((l as any).add as any)(M), ((a as any).push as any)(M)));
  }
  for (; ((a as any).length as any) > (0 as any);) {
    const M: any = ((a as any).shift as any)(),
      E: any = ((s as any).get as any)(M);
    if ((E as any) == (null as any)) continue;
    const T: any = (((n as any).children as any).get as any)(M) ?? [];
    for (const m of T) {
      if (((l as any).has as any)(m)) continue;
      const S: any = ((s as any).get as any)(m);
      (S as any) != (null as any) && ((i as any)[S] = E, (c as any)[S] = ((c as any)[E] as any) + (1 as any), ((l as any).add as any)(m), ((a as any).push as any)(m));
    }
  }
  for (const M of o) {
    if (((l as any).has as any)(M)) continue;
    const E: any = ((s as any).get as any)(M);
    (E as any) != (null as any) && ((i as any)[E] = -1, (c as any)[E] = 0, ((l as any).add as any)(M));
  }
  const g: any = ((Math as any).max as any)(1, (((Math as any).ceil as any)(((Math as any).log2 as any)(((Math as any).max as any)(1, r))) as any) + (1 as any)),
    x: any = ((Array as any).from as any)({
      length: g
    }, (): any => ((new (Array as any)(r) as any).fill as any)(-1));
  for (let M: any = 0; (M as any) < (r as any); M++) ((x as any)[0] as any)[M] = (i as any)[M];
  for (let M: any = 1; (M as any) < (g as any); M++) for (let E: any = 0; (E as any) < (r as any); E++) {
    const T: any = ((x as any)[(M as any) - (1 as any)] as any)[E];
    ((x as any)[M] as any)[E] = (T as any) === (-1 as any) ? -1 : ((x as any)[(M as any) - (1 as any)] as any)[T];
  }
  const I: any = (d as any)((M: any, E: any): any => {
      if ((M as any) === (-1 as any) || (E as any) === (-1 as any)) return -1;
      ((c as any)[M] as any) < ((c as any)[E] as any) && ([M, E] = [E, M]);
      const T: any = ((c as any)[M] as any) - ((c as any)[E] as any);
      for (let m: any = 0; (m as any) < (g as any); m++) if (((T as any) >> (m as any) as any) & (1 as any) && (M = ((x as any)[m] as any)[M], (M as any) === (-1 as any))) return -1;
      if ((M as any) === (E as any)) return M;
      for (let m: any = (g as any) - (1 as any); (m as any) >= (0 as any); m--) {
        const S: any = ((x as any)[m] as any)[M],
          A: any = ((x as any)[m] as any)[E];
        (S as any) === (-1 as any) || (A as any) === (-1 as any) || (S as any) !== (A as any) && (M = S, E = A);
      }
      return ((x as any)[0] as any)[M];
    }, "lcaIndex"),
    u: any = ((Array as any).from as any)({
      length: r
    }, (): any => new (Map as any)());
  for (const M of (t as any).edges) {
    let E: any = (M as any).src,
      T: any = (M as any).dst,
      m: any = (e as any)[E],
      S: any = (e as any)[T];
    if ((m as any) == (null as any) || (S as any) == (null as any) || ((m as any) > (S as any) && ([E, T] = [T, E], [m, S] = [S, m]), (m as any) == (null as any) || (S as any) == (null as any) || (m as any) === (S as any))) continue;
    const A: any = ((s as any).get as any)(E),
      R: any = ((s as any).get as any)(T);
    if ((A as any) == (null as any) || (R as any) == (null as any)) continue;
    const k: any = (I as any)(A, R);
    if ((k as any) === (-1 as any)) continue;
    const O: any = (u as any)[k];
    for (let _: any = m; (_ as any) < (S as any); _++) ((O as any).set as any)(_, ((((O as any).get as any)(_) ?? 0) as any) + (1 as any));
  }
  const p: any = new (Map as any)(),
    f: any = (d as any)((M: any, E: any): any => {
      if (((E as any).size as any) !== (0 as any)) for (const [T, m] of E) ((M as any).set as any)(T, ((((M as any).get as any)(T) ?? 0) as any) + (m as any));
    }, "mergeInto"),
    y: any = new (Set as any)(),
    v: any = (d as any)((M: any): any => {
      const E: any = ((s as any).get as any)(M);
      ((y as any).add as any)(M);
      const T: any = (E as any) == (null as any) ? void 0 : (u as any)[E],
        m: any = T ? new (Map as any)(T) : new (Map as any)(),
        S: any = (((n as any).children as any).get as any)(M) ?? [];
      for (const A of S) {
        const R: any = (v as any)(A),
          k: any = (e as any)[M];
        if ((k as any) != (null as any)) {
          let O: any = ((p as any).get as any)(M);
          O || (O = new (Map as any)(), ((p as any).set as any)(M, O));
          let _: any = ((R as any).get as any)(k) ?? 0;
          const H: any = (e as any)[A];
          (H as any) != (null as any) && (H as any) > (k as any) && (_ += 1), ((O as any).set as any)(A, _);
        }
        (f as any)(m, R);
      }
      return m;
    }, "dfs");
  for (const M of (n as any).roots) ((y as any).has as any)(M) || (v as any)(M);
  for (const M of o) ((y as any).has as any)(M) || (v as any)(M);
  return p;
}
(d as any)(Xs, "computeSubtreeCrossCounts");
function Ys(this: any, t: any, e: any, n: any): any {
  const o: any = new (Map as any)(),
    s: any = (d as any)((r: any): any => {
      let i: any = (n as any)[r] ?? 0;
      const c: any = [...(((e as any).get as any)(r) ?? [])];
      ((c as any).sort as any)((Co as any)(n));
      for (const a of c) {
        (s as any)(a);
        const l: any = ((o as any).get as any)(a);
        (l as any) != (null as any) && (i = ((Math as any).min as any)(i, l));
      }
      ((o as any).set as any)(r, i);
    }, "annotate");
  for (const r of t) (s as any)(r);
  return o;
}
(d as any)(Ys, "annotateMinimumLayers");
function Co(this: any, t: any): any {
  return (e: any, n: any): any => {
    const o: any = (t as any)[e] ?? 0,
      s: any = (t as any)[n] ?? 0;
    return (o as any) === (s as any) ? ((e as any).localeCompare as any)(n) : (o as any) - (s as any);
  };
}
(d as any)(Co, "compareByRankThenId");
function Gs(this: any, t: any, e: any, n: any, o: any): any {
  let s: any = 0;
  for (const a of e) {
    const l: any = (n as any)[a] ?? 0;
    (l as any) > (s as any) && (s = l);
  }
  const r: any = ((Array as any).from as any)({
      length: (s as any) + (1 as any)
    }, (): any => []),
    i: any = new (Set as any)(),
    c: any = (d as any)((a: any): any => {
      if (((i as any).has as any)(a)) return;
      ((i as any).add as any)(a);
      const l: any = (n as any)[a] ?? 0;
      (r as any)[l] || ((r as any)[l] = []), (((r as any)[l] as any).push as any)(a);
      for (const g of (o as any)(a)) (c as any)(g);
    }, "emit");
  for (const a of t) (c as any)(a);
  for (const a of e) if (!((i as any).has as any)(a)) {
    const l: any = (n as any)[a] ?? 0;
    (r as any)[l] || ((r as any)[l] = []), (((r as any)[l] as any).push as any)(a), ((i as any).add as any)(a);
  }
  return r;
}
(d as any)(Gs, "emitNodesInTreeOrder");
function $s(this: any, t: any): any {
  const e: any = [];
  for (const n of t) {
    const o: any = new (Set as any)(),
      s: any = [];
    for (const r of n) ((o as any).has as any)(r) || (((o as any).add as any)(r), ((s as any).push as any)(r));
    ((e as any).push as any)(s);
  }
  return e;
}
(d as any)($s, "deduplicateLayers");
function zs(this: any, t: any, e: any, n: any, o: any): any {
  return (s: any): any => {
    const r: any = ((t as any).get as any)(s) ?? [];
    if (((r as any).length as any) === (0 as any)) return [];
    const i: any = (e as any)[s] ?? 0,
      c: any = [],
      a: any = [],
      l: any = ((n as any).get as any)(s);
    for (const g of r) {
      const x: any = ((o as any).get as any)(g) ?? i;
      (x as any) > (i as any) ? ((c as any).push as any)({
        child: g,
        min: x
      }) : ((a as any).push as any)(g);
    }
    return ((c as any).sort as any)((g: any, x: any): any => ((g as any).min as any) === ((x as any).min as any) ? (((g as any).child as any).localeCompare as any)((x as any).child) : ((g as any).min as any) - ((x as any).min as any)), ((a as any).sort as any)((g: any, x: any): any => {
      const I: any = l?.get(g) ?? 0,
        u: any = l?.get(x) ?? 0;
      if ((I as any) !== (u as any)) return (I as any) - (u as any);
      const p: any = ((o as any).get as any)(g) ?? i,
        f: any = ((o as any).get as any)(x) ?? i;
      return (p as any) !== (f as any) ? (p as any) - (f as any) : ((g as any).localeCompare as any)(x);
    }), [...((c as any).map as any)((g: any): any => (g as any).child), ...a];
  };
}
(d as any)(zs, "createChildOrderer");
function rn(this: any, t: any, e: any, n: any): any {
  const o: any = (Bs as any)(t, {
      rankHint: e,
      laneOf: n
    }),
    {
      children: s,
      roots: r
    }: any = o;
  for (const x of (t as any).nodes) ((s as any).has as any)(x) || ((s as any).set as any)(x, []);
  const i: any = (Xs as any)(t, e, o),
    c: any = (([...r] as any).sort as any)((Co as any)(e)),
    a: any = (Ys as any)(c, s, e),
    l: any = (zs as any)(s, e, i, a);
  let g: any = (Gs as any)(c, (t as any).nodes, e, l);
  return g = ($s as any)(g), g;
}
(d as any)(rn, "buildMultitreeLayerOrder");
function Vs(this: any, t: any, e: any, n: any): any {
  const o: any = new (Set as any)(t),
    s: any = new (Set as any)(e),
    r: any = (Ne as any)(e),
    i: any = [];
  for (const c of n) ((o as any).has as any)((c as any).src) && ((s as any).has as any)((c as any).dst) && ((i as any).push as any)(((r as any).get as any)((c as any).dst));
  return (Io as any)(i);
}
(d as any)(Vs, "countCrossingsBetweenAdjacent");
function Un(this: any, t: any, e: any, n: any): any {
  const o: any = [];
  for (const r of e) {
    const i: any = (n as any)[(r as any).src],
      c: any = (n as any)[(r as any).dst];
    if ((i as any) == (null as any) || (c as any) == (null as any) || (i as any) === (c as any)) continue;
    let a: any = (r as any).src,
      l: any = (r as any).dst,
      g: any = i,
      x: any = c;
    (i as any) > (c as any) && (a = (r as any).dst, l = (r as any).src, g = c, x = i);
    for (let I: any = g; (I as any) < (x as any); I++) ((o as any).push as any)({
      id: `${(r as any).id}@${I}`,
      src: a,
      dst: l,
      ref: (r as any).ref
    });
  }
  let s: any = 0;
  for (let r: any = 0; ((r as any) + (1 as any) as any) < ((t as any).length as any); r++) s += (Vs as any)((t as any)[r], (t as any)[(r as any) + (1 as any)], o);
  return s;
}
(d as any)(Un, "totalCrossings");
function js(this: any, t: any, e: any): any {
  const n: any = {
      ...e
    },
    {
      preds: o
    }: any = (ln as any)(t),
    s: any = (fe as any)(t),
    r: any = (rn as any)(t, n, s);
  let i: any = (Un as any)(r, (t as any).edges, n);
  const c: any = (sn as any).MAX_CROSSING_OPTIMIZATION_PASSES;
  for (let a: any = 0; (a as any) < (c as any); a++) {
    let l: any = !1;
    const g: any = (([...(t as any).nodes] as any).sort as any)((x: any, I: any): any => (((n as any)[I] ?? 0) as any) - (((n as any)[x] ?? 0) as any));
    for (const x of g) {
      const I: any = (n as any)[x] ?? 0;
      if ((I as any) === (0 as any)) continue;
      let u: any = 0;
      for (const v of ((o as any).get as any)(x) ?? []) u = ((Math as any).max as any)(u, (((n as any)[v] ?? 0) as any) + (1 as any));
      if ((u as any) >= (I as any)) continue;
      const p: any = I;
      (n as any)[x] = u;
      const f: any = (rn as any)(t, n, s),
        y: any = (Un as any)(f, (t as any).edges, n);
      (y as any) < (i as any) ? (i = y, l = !0) : (n as any)[x] = p;
    }
    if (!l) break;
  }
  return n;
}
(d as any)(js, "optimizeRanksByCrossings");
function Us(this: any, t: any, e: any): any {
  const n: any = (fe as any)(t),
    o: any = (([...(t as any).nodes] as any).sort as any)((s: any, r: any): any => (((e as any)[s] ?? 0) as any) - (((e as any)[r] ?? 0) as any) || ((s as any).localeCompare as any)(r));
  for (const s of o) {
    const r: any = (n as any)(s);
    if (!r) continue;
    const i: any = (((t as any).edges as any).filter as any)((f: any): any => ((f as any).src as any) === (s as any));
    if (((i as any).length as any) === (0 as any)) continue;
    let c: any = !1,
      a: any = 0;
    for (const f of i) {
      const y: any = (n as any)((f as any).dst);
      (y as any) == (null as any) || (y as any) === (r as any) ? c = !0 : a++;
    }
    if ((a as any) === (0 as any) || c) continue;
    let l: any = 0,
      g: any = !1;
    for (const f of (t as any).edges) {
      if (((f as any).dst as any) !== (s as any)) continue;
      const y: any = (n as any)((f as any).src);
      y && ((y as any) === (r as any) ? g = !0 : l++);
    }
    if ((l as any) > (0 as any) || !g) continue;
    const x: any = (e as any)[s] ?? 0,
      I: any = (x as any) + (a as any);
    let u: any = 0;
    for (const f of (t as any).edges) ((f as any).dst as any) === (s as any) && (u = ((Math as any).max as any)(u, (((e as any)[(f as any).src] ?? 0) as any) + (1 as any)));
    const p: any = ((Math as any).max as any)(x, u, I);
    (p as any) !== (x as any) && ((e as any)[s] = p);
  }
}
(d as any)(Us, "adjustCrossLaneSources");
function Ws(this: any, t: any, e: any): any {
  const n: any = (ye as any)(t),
    o: any = (Be as any)(n) ?? (([...(n as any).nodes] as any).sort as any)(),
    s: any = e?.compactSingleInput ?? !1,
    r: any = (fe as any)(n);
  let i: any = ((Object as any).create as any)(null);
  for (const a of o) {
    const l: any = (mo as any)(n, a),
      g: any = e?.ignoreCrossLaneEdges ? ((l as any).filter as any)((x: any): any => {
        const I: any = (r as any)((x as any).src),
          u: any = (r as any)(a);
        return !I || !u ? !0 : (I as any) === (u as any);
      }) : l;
    if (((g as any).length as any) === (0 as any)) (i as any)[a] = 0;else if (s && ((g as any).length as any) === (1 as any)) {
      const x: any = ((g as any)[0] as any).src,
        I: any = (r as any)(x),
        u: any = (r as any)(a);
      (I as any) !== (u as any) ? (i as any)[a] = (i as any)[x] ?? 0 : (i as any)[a] = (((i as any)[x] ?? 0) as any) + (1 as any);
    } else {
      let x: any = (-1 as any) / (0 as any);
      for (const I of g) x = ((Math as any).max as any)(x, (((i as any)[(I as any).src] ?? 0) as any) + (1 as any));
      (i as any)[a] = (x as any) === ((-1 as any) / (0 as any) as any) ? 0 : x;
    }
  }
  return (e?.optimizeRanksByCrossings ?? !1) && (i = (js as any)(n, i)), e?.ignoreCrossLaneEdges && (Us as any)(n, i), {
    layers: (rn as any)(n, i, r),
    rankOf: i,
    dummy: new (Set as any)()
  };
}
(d as any)(Ws, "assignLayers_LongestPath");
function Ks(this: any, t: any, e: any): any {
  const n: any = (ye as any)(t),
    s: any = {
      ...((Ws as any)(n, {
        compactSingleInput: e?.compactSingleInput,
        ignoreCrossLaneEdges: e?.ignoreCrossLaneEdges,
        optimizeRanksByCrossings: e?.optimizeRanksByCrossings
      }) as any).rankOf
    },
    r: any = (fe as any)(n),
    {
      preds: i,
      succs: c
    }: any = (ln as any)(n, (p: any): any => {
      if (e?.ignoreCrossLaneEdges) {
        const f: any = (r as any)((p as any).src),
          y: any = (r as any)((p as any).dst);
        if (f && y && (f as any) !== (y as any)) return !1;
      }
      return !0;
    }),
    a: any = (Be as any)(n) ?? [...(n as any).nodes],
    l: any = (([...a] as any).reverse as any)(),
    g: any = (d as any)((p: any, f: any): any => {
      let y: any = 0;
      for (const E of ((i as any).get as any)(p) ?? []) y = ((Math as any).max as any)(y, (((s as any)[E] ?? 0) as any) + (1 as any));
      let v: any = (Number as any).POSITIVE_INFINITY;
      const M: any = ((c as any).get as any)(p) ?? [];
      return ((M as any).length as any) > (0 as any) && (v = ((Math as any).min as any)(...((M as any).map as any)((E: any): any => (((s as any)[E] ?? 0) as any) - (1 as any)))), ((Number as any).isFinite as any)(v) || (v = ((Math as any).max as any)(y, f)), ((Math as any).min as any)(((Math as any).max as any)(f, y), v);
    }, "clampFeasible"),
    x: any = (sn as any).GRAVITY_ITERATIONS,
    I: any = (d as any)((p: any): any => {
      let f: any = !1;
      for (const y of p) {
        const v: any = ((i as any).get as any)(y) ?? [],
          M: any = ((c as any).get as any)(y) ?? [];
        if (((v as any).length as any) === (0 as any) && ((M as any).length as any) === (0 as any)) continue;
        const E: any = ((v as any).length as any) > (0 as any) ? (((v as any).reduce as any)((A: any, R: any): any => ((A as any) + (((s as any)[R] ?? 0) as any) as any) + (1 as any), 0) as any) / ((v as any).length as any) : (s as any)[y] ?? 0,
          T: any = ((M as any).length as any) > (0 as any) ? (((M as any).reduce as any)((A: any, R: any): any => ((A as any) + (((s as any)[R] ?? 0) as any) as any) - (1 as any), 0) as any) / ((M as any).length as any) : (s as any)[y] ?? 0,
          m: any = ((Math as any).round as any)(((E as any) + (T as any) as any) / (2 as any)),
          S: any = (g as any)(y, m);
        (S as any) !== ((s as any)[y] as any) && ((s as any)[y] = S, f = !0);
      }
      return f;
    }, "relaxOrder");
  for (let p: any = 0; (p as any) < (x as any); p++) {
    const f: any = (I as any)(a),
      y: any = (I as any)(l);
    if (!f && !y) break;
  }
  for (const p of a) {
    let f: any = 0;
    for (const y of ((i as any).get as any)(p) ?? []) f = ((Math as any).max as any)(f, (((s as any)[y] ?? 0) as any) + (1 as any));
    (((s as any)[p] ?? 0) as any) < (f as any) && ((s as any)[p] = f);
  }
  for (const p of l) {
    const f: any = ((c as any).get as any)(p) ?? [];
    if (((f as any).length as any) > (0 as any)) {
      const y: any = ((Math as any).min as any)(...((f as any).map as any)((v: any): any => (((s as any)[v] ?? 0) as any) - (1 as any)));
      (((s as any)[p] ?? 0) as any) > (y as any) && ((s as any)[p] = y);
    }
  }
  return {
    layers: (Mo as any)(n, a, s),
    rankOf: s,
    dummy: new (Set as any)()
  };
}
(d as any)(Ks, "assignLayers_Gravity");
function qs(this: any, t: any): any {
  const e: any = (xo as any)(t),
    n: any = (yo as any)(t);
  let o: any = (bo as any)(e);
  const s: any = [];
  for (; ((o as any).length as any) > (0 as any);) {
    const r: any = [];
    for (const i of o) {
      ((s as any).push as any)(i);
      for (const c of ((n as any).get as any)(i) ?? []) ((e as any).set as any)(c, ((((e as any).get as any)(c) ?? 0) as any) - (1 as any)), ((((e as any).get as any)(c) ?? 0) as any) === (0 as any) && ((r as any).push as any)(c);
    }
    o = ((r as any).sort as any)((i: any, c: any): any => ((i as any).localeCompare as any)(c));
  }
  return ((s as any).length as any) === (((t as any).nodes as any).length as any) ? s : null;
}
(d as any)(qs, "topoSortByGenerationIfAcyclic");
function Js(this: any, t: any, e: any): any {
  const n: any = (ye as any)(t),
    o: any = (e?.direction as any) === ("LR" as any) ? (qs as any)(n) ?? (([...(n as any).nodes] as any).sort as any)() : (Be as any)(n) ?? (([...(n as any).nodes] as any).sort as any)(),
    s: any = (fe as any)(n),
    r: any = (d as any)((g: any): any => (s as any)(g) ?? g, "laneOf"),
    i: any = ((Object as any).create as any)(null),
    c: any = new (Map as any)(),
    a: any = (d as any)((g: any, x: any): any => e?.ignoreCrossLaneEdges ?? !0 ? ((r as any)(g) as any) === ((r as any)(x) as any) ? 1 : 0 : 1, "edgeWeight");
  for (const g of o) {
    if ((((n as any).nodeById as any).get as any)(g)?.isGroup) continue;
    const I: any = (mo as any)(n, g);
    let u: any = 0;
    if (((I as any).length as any) > (0 as any)) for (const v of I) {
      const M: any = (v as any).src,
        E: any = (i as any)[M] ?? 0;
      u = ((Math as any).max as any)(u, (E as any) + ((a as any)(M, g) as any));
    }
    const p: any = (r as any)(g),
      f: any = ((c as any).get as any)(p) ?? 0,
      y: any = ((Math as any).max as any)(u, f);
    (i as any)[g] = y, ((c as any).set as any)(p, (y as any) + (1 as any));
  }
  return {
    layers: (Mo as any)(n, o, i, {
      skipGroups: !0
    }),
    rankOf: i,
    dummy: new (Set as any)()
  };
}
(d as any)(Js, "assignLayers_LaneAwareCompact");
function Zs(this: any, t: any, e: any): any {
  const n: any = (ye as any)(e),
    {
      rankOf: o
    }: any = t,
    s: any = (((t as any).layers as any).map as any)((u: any): any => [...u]),
    r: any = new (Set as any)((t as any).dummy ? [...(t as any).dummy] : []);
  let i: any = 0;
  const c: any = new (Map as any)((n as any).nodeById),
    a: any = (d as any)((u: any): any => {
      const p: any = `placeholder-${i++}`,
        f: any = {
          id: p,
          isGroup: !1,
          isDummy: !0,
          width: 0,
          height: 0
        };
      for (((c as any).set as any)(p, f), ((r as any).add as any)(p); ((s as any).length as any) <= (u as any);) ((s as any).push as any)([]);
      return (((s as any)[u] as any).push as any)(p), (o as any)[p] = u, p;
    }, "addDummyAt"),
    l: any = (([...(n as any).edges] as any).sort as any)((u: any, p: any): any => ((u as any).id as any) === ((p as any).id as any) ? ((u as any).src as any) === ((p as any).src as any) ? (((u as any).dst as any).localeCompare as any)((p as any).dst) : (((u as any).src as any).localeCompare as any)((p as any).src) : (((u as any).id as any).localeCompare as any)((p as any).id)),
    g: any = [];
  for (const u of l) {
    const p: any = (o as any)[(u as any).src] ?? 0,
      f: any = (o as any)[(u as any).dst] ?? 0;
    if (((f as any) - (p as any) as any) <= (1 as any)) {
      ((g as any).push as any)(u);
      continue;
    }
    let y: any = (u as any).src;
    for (let M: any = (p as any) + (1 as any), E: any = 0; (M as any) < (f as any); M++, E++) {
      const T: any = (a as any)(M);
      ((g as any).push as any)({
        id: `${(u as any).id}#${E}`,
        src: y,
        dst: T,
        weight: (u as any).weight,
        ref: (u as any).ref
      }), y = T;
    }
    const v: any = ((f as any) - (p as any) as any) - (2 as any);
    ((g as any).push as any)({
      id: `${(u as any).id}#${((Math as any).max as any)((v as any) + (1 as any), 0)}`,
      src: y,
      dst: (u as any).dst,
      weight: (u as any).weight,
      ref: (u as any).ref
    });
  }
  const I: any = {
    nodes: [...(n as any).nodes, ...(([...r] as any).filter as any)((u: any): any => !(((n as any).nodes as any).includes as any)(u))],
    edges: g,
    layout: (n as any).layout,
    nodeById: c
  };
  return {
    layering: {
      layers: s,
      rankOf: o,
      dummy: r
    },
    graphWithDummies: I
  };
}
(d as any)(Zs, "makeProperLayering");
function Wn(this: any, t: any): any {
  const e: any = (t as any).length;
  if ((e as any) === (0 as any)) return (Number as any).POSITIVE_INFINITY;
  const n: any = (([...t] as any).sort as any)((o: any, s: any): any => (o as any) - (s as any));
  return ((e as any) % (2 as any) as any) === (1 as any) ? (n as any)[((e as any) - (1 as any) as any) / (2 as any)] : (.5 as any) * (((n as any)[((e as any) / (2 as any) as any) - (1 as any)] as any) + ((n as any)[(e as any) / (2 as any)] as any) as any);
}
(d as any)(Wn, "median");
function Kn(this: any, t: any): any {
  return ((t as any).length as any) === (0 as any) ? (Number as any).POSITIVE_INFINITY : (((t as any).reduce as any)((n: any, o: any): any => (n as any) + (o as any), 0) as any) / ((t as any).length as any);
}
(d as any)(Kn, "barycenter");
function Qs(this: any, t: any, e: any, n: any, o: any): any {
  const s: any = new (Map as any)();
  for (const r of t) ((s as any).set as any)(r, []);
  for (const r of n) (o as any) === ("down" as any) ? ((e as any).has as any)((r as any).src) && ((s as any).has as any)((r as any).dst) && ((((s as any).get as any)((r as any).dst) as any).push as any)(((e as any).get as any)((r as any).src)) : ((e as any).has as any)((r as any).dst) && ((s as any).has as any)((r as any).src) && ((((s as any).get as any)((r as any).src) as any).push as any)(((e as any).get as any)((r as any).dst));
  return s;
}
(d as any)(Qs, "neighborPositionsFor");
function tr(this: any, t: any, e: any, n: any): any {
  const o: any = ((n as any).get as any)(t) ?? 0,
    s: any = ((n as any).get as any)(e) ?? 0;
  return (o as any) !== (s as any) ? (o as any) - (s as any) : ((t as any).localeCompare as any)(e);
}
(d as any)(tr, "currentOrderTieBreak");
function qn(this: any, t: any, e: any, n: any): any {
  const o: any = new (Set as any)(t),
    s: any = new (Set as any)(e),
    r: any = (Ne as any)(t),
    i: any = (Ne as any)(e),
    c: any = [];
  for (const l of n) ((o as any).has as any)((l as any).src) && ((s as any).has as any)((l as any).dst) && ((c as any).push as any)({
    u: ((r as any).get as any)((l as any).src),
    v: ((i as any).get as any)((l as any).dst)
  });
  ((c as any).sort as any)((l: any, g: any): any => ((l as any).u as any) === ((g as any).u as any) ? ((l as any).v as any) - ((g as any).v as any) : ((l as any).u as any) - ((g as any).u as any));
  const a: any = ((c as any).map as any)((l: any): any => (l as any).v);
  return (Io as any)(a);
}
(d as any)(qn, "countCrossingsBetweenAdjacent");
function We(this: any, t: any, e: any, n: any): any {
  return (([...t] as any).sort as any)((o: any, s: any): any => {
    const r: any = (Wn as any)(((e as any).get as any)(o) ?? []),
      i: any = (Wn as any)(((e as any).get as any)(s) ?? []);
    return (r as any) === (i as any) ? (tr as any)(o, s, n) : (isFinite as any)(r) ? (isFinite as any)(i) ? (r as any) - (i as any) : -1 : 1;
  });
}
(d as any)(We, "sortByHeuristic");
function Jn(this: any, t: any, e: any, n: any, o: any, s: any, r: any): any {
  const i: any = (Ne as any)(t),
    c: any = (Ne as any)(e),
    a: any = (Qs as any)(e, i, n, o);
  if (!s || !r || ((r as any).length as any) === (0 as any)) return (We as any)(e, a, c);
  const l: any = new (Map as any)();
  for (const I of e) {
    const u: any = (s as any)(I),
      p: any = ((l as any).get as any)(u) ?? [];
    ((p as any).push as any)(I), ((l as any).set as any)(u, p);
  }
  const g: any = [];
  for (const I of r) {
    const u: any = ((l as any).get as any)(I);
    if (!u || ((u as any).length as any) === (0 as any)) continue;
    const p: any = (We as any)(u, a, c);
    ((g as any).push as any)(...p);
  }
  const x: any = ((l as any).get as any)(null);
  if (x && ((x as any).length as any) > (0 as any)) {
    const I: any = (We as any)(x, a, c);
    for (const u of I) {
      const p: any = (Kn as any)(((a as any).get as any)(u) ?? []);
      let f: any = (g as any).length;
      if ((isFinite as any)(p)) for (const [y, v] of ((g as any).entries as any)()) {
        const M: any = (Kn as any)(((a as any).get as any)(v) ?? []);
        if ((p as any) < (M as any)) {
          f = y;
          break;
        }
      }
      ((g as any).splice as any)(f, 0, u);
    }
  }
  return g;
}
(d as any)(Jn, "reorderLayer");
function Zn(this: any, t: any, e: any, n: any, o: any, s: any): any {
  const r: any = [...e],
    i: any = new (Set as any)(t),
    c: any = new (Set as any)(e),
    a: any = o ? new (Set as any)(o) : null,
    l: any = ((n as any).filter as any)((f: any): any => ((i as any).has as any)((f as any).src) && ((c as any).has as any)((f as any).dst)),
    g: any = a ? ((n as any).filter as any)((f: any): any => ((c as any).has as any)((f as any).src) && ((a as any).has as any)((f as any).dst)) : void 0,
    x: any = (d as any)((f: any): any => {
      let y: any = (qn as any)(t, f, l);
      return g && o && (y += (qn as any)(f, o, g)), y;
    }, "crossingScore"),
    I: any = s ? new (Map as any)() : null;
  if (s && I) for (const f of e) ((I as any).set as any)(f, (s as any)(f));
  let u: any = !0,
    p: any = (x as any)(r);
  for (; u;) {
    u = !1;
    for (let f: any = 0; ((f as any) + (1 as any) as any) < ((r as any).length as any); f++) {
      if (I) {
        const M: any = ((I as any).get as any)((r as any)[f]),
          E: any = ((I as any).get as any)((r as any)[(f as any) + (1 as any)]);
        if ((M as any) !== (E as any)) continue;
      }
      const y: any = p;
      [(r as any)[f], (r as any)[(f as any) + (1 as any)]] = [(r as any)[(f as any) + (1 as any)], (r as any)[f]];
      const v: any = (x as any)(r);
      (v as any) < (y as any) ? (p = v, u = !0) : [(r as any)[f], (r as any)[(f as any) + (1 as any)]] = [(r as any)[(f as any) + (1 as any)], (r as any)[f]];
    }
  }
  return r;
}
(d as any)(Zn, "transposeImprove");
function er(this: any, t: any, e: any, n: any): any {
  const o: any = (((t as any).layers as any).map as any)((c: any): any => [...c]),
    s: any = (e as any).edges,
    r: any = (fe as any)(e),
    i: any = (So as any)(e, n?.laneOrder);
  for (let c: any = 0; (c as any) < (3 as any); c++) {
    for (let a: any = 1; (a as any) < ((o as any).length as any); a++) (o as any)[a] = (Jn as any)((o as any)[(a as any) - (1 as any)], (o as any)[a], s, "down", r, i), (o as any)[a] = (Zn as any)((o as any)[(a as any) - (1 as any)], (o as any)[a], s, (o as any)[(a as any) + (1 as any)], r);
    for (let a: any = ((o as any).length as any) - (2 as any); (a as any) >= (0 as any); a--) (o as any)[a] = (Jn as any)((o as any)[(a as any) + (1 as any)], (o as any)[a], s, "up", r, i), (o as any)[a] = (Zn as any)((o as any)[(a as any) + (1 as any)], (o as any)[a], s, (o as any)[(a as any) - (1 as any)], r);
  }
  return {
    layers: o
  };
}
(d as any)(er, "orderLayers");
function nr(this: any, t: any, e: any, n: any): any {
  const o: any = n?.layerGap ?? (ko as any).DEFAULT_LAYER_GAP,
    s: any = n?.nodeGap ?? (ko as any).DEFAULT_NODE_GAP,
    r: any = n?.laneGap ?? (s as any) * (2 as any),
    i: any = n?.direction ?? "TB",
    c: any = (i as any) === ("LR" as any) || (i as any) === ("RL" as any),
    a: any = (t as any).layers,
    l: any = ((Object as any).create as any)(null),
    g: any = ((Object as any).create as any)(null),
    x: any = (d as any)((O: any): any => (((e as any).nodeById as any).get as any)(O), "getNode"),
    I: any = (d as any)((O: any): any => (x as any)(O)?.width ?? 0, "getWidth"),
    u: any = (d as any)((O: any): any => (x as any)(O)?.height ?? 0, "getHeight"),
    p: any = (fe as any)(e),
    f: any = (So as any)(e, n?.laneOrder),
    y: any = ((a as any).map as any)((O: any): any => ((O as any).reduce as any)((_: any, H: any): any => ((Math as any).max as any)(_, (u as any)(H)), 0)),
    v: any = [];
  if (c) for (let O: any = 0; ((O as any) + (1 as any) as any) < ((a as any).length as any); O++) {
    const _: any = (((a as any)[O] as any).reduce as any)((mt: any, kt: any): any => ((Math as any).max as any)(mt, (I as any)(kt)), 0),
      H: any = (((a as any)[(O as any) + (1 as any)] as any).reduce as any)((mt: any, kt: any): any => ((Math as any).max as any)(mt, (I as any)(kt)), 0),
      P: any = (y as any)[O],
      G: any = (y as any)[(O as any) + (1 as any)],
      j: any = ((P as any) / (2 as any) as any) + ((G as any) / (2 as any) as any),
      J: any = ((_ as any) + (H as any) as any) / (2 as any),
      dt: any = ((Math as any).max as any)(0, ((J as any) - (j as any) as any) - (o as any));
    ((v as any).push as any)(dt);
  }
  const M: any = new (Set as any)();
  for (const O of a) for (const _ of O) ((M as any).add as any)((p as any)(_));
  const E: any = ((M as any).has as any)(null),
    T: any = ((f as any).filter as any)((O: any): any => ((M as any).has as any)(O)),
    m: any = [...(E ? [null] : []), ...T],
    S: any = ((Object as any).create as any)(null);
  for (const O of T) (S as any)[O] = 0;
  E && ((S as any).null = 0);
  for (const O of a) {
    const _: any = ((Object as any).create as any)(null),
      H: any = [];
    for (const P of O) {
      const G: any = (p as any)(P);
      (G as any) === (null as any) ? ((H as any).push as any)(P) : ((((_ as any)[G] ||= []) as any).push as any)(P);
    }
    for (const [P, G] of ((Object as any).entries as any)(_)) {
      const j: any = (((G as any).reduce as any)((J: any, dt: any): any => (J as any) + ((I as any)(dt) as any), 0) as any) + ((s as any) * (((Math as any).max as any)(0, ((G as any).length as any) - (1 as any)) as any) as any);
      (S as any)[P] = ((Math as any).max as any)((S as any)[P] ?? 0, j);
    }
    if (E && (H as any).length) {
      const P: any = (((H as any).reduce as any)((G: any, j: any): any => (G as any) + ((I as any)(j) as any), 0) as any) + ((s as any) * (((Math as any).max as any)(0, ((H as any).length as any) - (1 as any)) as any) as any);
      (S as any).null = ((Math as any).max as any)((S as any).null ?? 0, P);
    }
  }
  const A: any = new (Map as any)();
  {
    const O: any = ((m as any).map as any)((P: any): any => ((P as any) === (null as any) ? (S as any).null : (S as any)[P]) ?? 0);
    let H: any = (-((((O as any).reduce as any)((P: any, G: any): any => (P as any) + (G as any), 0) as any) + ((r as any) * (((Math as any).max as any)(0, ((m as any).length as any) - (1 as any)) as any) as any)) as any) / (2 as any);
    for (let P: any = 0; (P as any) < ((m as any).length as any); P++) {
      const G: any = (m as any)[P],
        j: any = (O as any)[P] ?? 0,
        J: any = (H as any) + ((j as any) / (2 as any) as any);
      ((A as any).set as any)(G, J), H += j, (P as any) < (((m as any).length as any) - (1 as any) as any) && (H += r);
    }
  }
  let R: any = 0;
  for (const [O, _] of ((a as any).entries as any)()) {
    const H: any = (y as any)[O] ?? 0,
      P: any = new (Map as any)();
    for (const j of _) {
      const J: any = (p as any)(j),
        dt: any = ((P as any).get as any)(J) ?? [];
      ((dt as any).push as any)(j), ((P as any).set as any)(J, dt);
    }
    for (const j of m) {
      const J: any = ((P as any).get as any)(j) ?? [];
      if (((J as any).length as any) === (0 as any)) continue;
      const dt: any = ((A as any).get as any)(j);
      if (((J as any).length as any) === (1 as any)) {
        const mt: any = (J as any)[0];
        (l as any)[mt] = dt, (g as any)[mt] = (R as any) + ((H as any) / (2 as any) as any);
      } else {
        const mt: any = ((J as any).map as any)((Q: any): any => (I as any)(Q)),
          kt: any = (((mt as any).reduce as any)((Q: any, W: any): any => (Q as any) + (W as any), 0) as any) + ((s as any) * (((J as any).length as any) - (1 as any) as any) as any);
        let Pt: any = (dt as any) - ((kt as any) / (2 as any) as any);
        for (const [Q, W] of ((J as any).entries as any)()) {
          const et: any = (mt as any)[Q];
          (l as any)[W] = (Pt as any) + ((et as any) / (2 as any) as any), (g as any)[W] = (R as any) + ((H as any) / (2 as any) as any), Pt += (et as any) + (s as any);
        }
      }
    }
    const G: any = (v as any)[O] ?? 0;
    R += ((H as any) + (o as any) as any) + (G as any);
  }
  const k: any = new (Map as any)();
  for (const O of (e as any).edges) {
    const _: any = ((O as any).ref as any).id;
    ((k as any).has as any)(_) || ((k as any).set as any)(_, []), ((((k as any).get as any)(_) as any).push as any)(O);
  }
  for (const [, O] of k) {
    if (((O as any).length as any) === (0 as any)) continue;
    const _: any = ((O as any)[0] as any).ref,
      H: any = (_ as any).start,
      P: any = (_ as any).end;
    if ((H as any) == (null as any) || (P as any) == (null as any)) continue;
    const G: any = ((Math as any).round as any)(((((l as any)[H] ?? 0) as any) + (((l as any)[P] ?? 0) as any) as any) / (2 as any)),
      j: any = new (Set as any)();
    for (const J of O) ((j as any).add as any)((J as any).src), ((j as any).add as any)((J as any).dst);
    for (const J of j) {
      if ((J as any) === (H as any) || (J as any) === (P as any)) continue;
      (((e as any).nodeById as any).get as any)(J)?.isDummy && ((l as any)[J] = G);
    }
  }
  return {
    x: l,
    y: g
  };
}
(d as any)(nr, "assignCoordinates");
var or: number = 8;
function sr(this: any, t: any): any {
  let e: any = 2166136261;
  for (let n: any = 0; (n as any) < ((t as any).length as any); n++) e ^= ((t as any).charCodeAt as any)(n), e = ((Math as any).imul as any)(e, 16777619);
  return (e as any) >>> (0 as any);
}
(d as any)(sr, "hashString");
function rr(this: any, t: any): any {
  let e: any = (t as any) >>> (0 as any);
  return (): any => {
    e += 1831565813;
    let n: any = e;
    return n = ((Math as any).imul as any)((n as any) ^ ((n as any) >>> (15 as any) as any), (n as any) | (1 as any)), n ^= (n as any) + (((Math as any).imul as any)((n as any) ^ ((n as any) >>> (7 as any) as any), (n as any) | (61 as any)) as any), ((((n as any) ^ ((n as any) >>> (14 as any) as any)) as any) >>> (0 as any) as any) / (4294967296 as any);
  };
}
(d as any)(rr, "mulberry32");
function ir(this: any, t: any, e: any): any {
  const n: any = [...t],
    o: any = (rr as any)(e);
  for (let s: any = ((n as any).length as any) - (1 as any); (s as any) > (0 as any); s--) {
    const r: any = ((Math as any).floor as any)(((o as any)() as any) * ((s as any) + (1 as any) as any));
    [(n as any)[s], (n as any)[r]] = [(n as any)[r], (n as any)[s]];
  }
  return n;
}
(d as any)(ir, "deterministicShuffle");
function cr(this: any, t: any, e: any): any {
  let n: any = 0;
  for (const [o, s] of ((t as any).entries as any)()) n += ((Math as any).abs as any)((o as any) - ((((e as any).get as any)(s) ?? o) as any));
  return n;
}
(d as any)(cr, "sourceDistance");
function Qn(this: any, t: any, e: any): any {
  const n: any = new (Map as any)();
  for (const [s, r] of ((t as any).entries as any)()) ((n as any).set as any)(r, s);
  let o: any = 0;
  for (const {
    a: s,
    b: r,
    weight: i
  } of e) {
    const c: any = ((n as any).get as any)(s),
      a: any = ((n as any).get as any)(r);
    (c as any) == (null as any) || (a as any) == (null as any) || (o += (i as any) * (((Math as any).abs as any)((c as any) - (a as any)) as any));
  }
  return o;
}
(d as any)(Qn, "laneArrangementCost");
function ar(this: any, t: any): any {
  const e: any = (fn as any)(t);
  if (((e as any).length as any) < (2 as any)) return [];
  const n: any = new (Map as any)(((e as any).map as any)((r: any, i: any): any => [r, i])),
    o: any = (fe as any)(t),
    s: any = new (Map as any)();
  for (const r of ((t as any).layout as any).edges ?? []) {
    if ((r as any).isLayoutOnly) continue;
    const i: any = (typeof (r as any).start as any) == ("string" as any) ? (r as any).start : void 0,
      c: any = (typeof (r as any).end as any) == ("string" as any) ? (r as any).end : void 0;
    if (!i || !c || !(((t as any).nodeById as any).has as any)(i) || !(((t as any).nodeById as any).has as any)(c)) continue;
    const a: any = (o as any)(i),
      l: any = (o as any)(c);
    if (!a || !l || (a as any) === (l as any)) continue;
    const g: any = ((n as any).get as any)(a),
      x: any = ((n as any).get as any)(l);
    if ((g as any) == (null as any) || (x as any) == (null as any)) continue;
    const [I, u]: any = (g as any) <= (x as any) ? [a, l] : [l, a],
      p: any = `${I}\0${u}`,
      f: any = ((s as any).get as any)(p);
    f ? (f as any).weight++ : ((s as any).set as any)(p, {
      a: I,
      b: u,
      weight: 1
    });
  }
  return [...((s as any).values as any)()];
}
(d as any)(ar, "buildWeightedLaneEdges");
function to(this: any, t: any, e: any, n: any): any {
  const o: any = [...t];
  let s: any = (Qn as any)(o, e),
    r: any = !0,
    i: any = 0;
  const c: any = ((Math as any).max as any)(1, (o as any).length);
  for (; r && (i as any) < (c as any);) {
    r = !1, i++;
    for (let a: any = 0; ((a as any) + (1 as any) as any) < ((o as any).length as any); a++) {
      [(o as any)[a], (o as any)[(a as any) + (1 as any)]] = [(o as any)[(a as any) + (1 as any)], (o as any)[a]];
      const l: any = (Qn as any)(o, e);
      (l as any) < (s as any) ? (s = l, r = !0) : [(o as any)[a], (o as any)[(a as any) + (1 as any)]] = [(o as any)[(a as any) + (1 as any)], (o as any)[a]];
    }
  }
  return {
    order: o,
    cost: s,
    sourceDistance: (cr as any)(o, n)
  };
}
(d as any)(to, "greedySwitch");
function lr(this: any, t: any, e: any): any {
  return ((t as any).cost as any) !== ((e as any).cost as any) ? ((t as any).cost as any) < ((e as any).cost as any) : ((t as any).sourceDistance as any) < ((e as any).sourceDistance as any);
}
(d as any)(lr, "isBetterCandidate");
function fr(this: any, t: any, e: any, n: any): any {
  const o: any = (((((([...e] as any).sort as any)((s: any, r: any): any => ((s as any).a as any) === ((r as any).a as any) ? (((s as any).b as any).localeCompare as any)((r as any).b) : (((s as any).a as any).localeCompare as any)((r as any).a)) as any).map as any)(({
    a: s,
    b: r,
    weight: i
  }: any): any => `${s}:${r}:${i}`) as any).join as any)("|");
  return (sr as any)(`${((t as any).join as any)("|")}#${o}#${n}`);
}
(d as any)(fr, "seedForRestart");
function dr(this: any, t: any, e: any = {}): any {
  const n: any = (fn as any)(t);
  if (((n as any).length as any) < (2 as any)) return n;
  const o: any = (ar as any)(t);
  if (((o as any).length as any) === (0 as any)) return n;
  const s: any = new (Map as any)(((n as any).map as any)((c: any, a: any): any => [c, a]));
  let r: any = (to as any)(n, o, s);
  const i: any = ((Math as any).max as any)(0, (e as any).restarts ?? or);
  for (let c: any = 0; (c as any) < (i as any); c++) {
    const a: any = (fr as any)(n, o, c),
      l: any = (ir as any)(n, a),
      g: any = (to as any)(l, o, s);
    (lr as any)(g, r) && (r = g);
  }
  return (r as any).order;
}
(d as any)(dr, "optimizeTopLaneOrder");
function ur(this: any, t: any, e: any): any {
  const n: any = e?.ignoreCrossLaneEdges ?? !0,
    o: any = e?.optimizeRanksByCrossings ?? !0,
    s: any = (ye as any)(t),
    r: any = e?.automaticLaneOrdering ? (dr as any)(s, {
      restarts: or
    }) : void 0,
    i: any = (Os as any)(s),
    c: any = (i as any).acyclic,
    a: any = n ? (Js as any)(c, {
      compactSingleInput: e?.compactSingleInput ?? (sn as any).DEFAULT_COMPACT_SINGLE_INPUT,
      ignoreCrossLaneEdges: !0,
      direction: e?.direction
    }) : (Ks as any)(c, {
      compactSingleInput: e?.compactSingleInput ?? (sn as any).DEFAULT_COMPACT_SINGLE_INPUT,
      ignoreCrossLaneEdges: !1,
      optimizeRanksByCrossings: o
    }),
    {
      layering: l,
      graphWithDummies: g
    }: any = (Zs as any)(a, c),
    x: any = (er as any)(l, g, {
      laneOrder: r
    }),
    I: any = (nr as any)(x, g, {
      layerGap: e?.layerGap,
      nodeGap: e?.nodeGap,
      direction: e?.direction,
      laneOrder: r
    });
  return {
    acyclic: c,
    reversed: (i as any).reversed,
    layering: l,
    ordered: x,
    coordinates: I
  };
}
(d as any)(ur, "sugiyamaLayout");
var ct: any = (Jr as any).EPSILON,
  Zr: number = 8,
  be: number = 15,
  Te: number = 15,
  je: number = 25,
  ne: number = 20,
  Cn: number = 10;
function eo(this: any, t: any, e: any, n: any): any {
  const o: any = (t as any).x ?? 0,
    s: any = (t as any).y ?? 0,
    r: any = ((e as any).x as any) - (o as any),
    i: any = ((e as any).y as any) - (s as any),
    c: any = ((Math as any).abs as any)(r),
    a: any = ((Math as any).abs as any)(i);
  return (c as any) < (ct as any) && (a as any) < (ct as any) ? n : (a as any) > (ct as any) && ((a as any) * (3 as any) as any) >= (c as any) ? (i as any) > (0 as any) ? "bottom" : "top" : (c as any) > (ct as any) ? (r as any) > (0 as any) ? "right" : "left" : n;
}
(d as any)(eo, "chooseOrthogonalSide");
function no(this: any, t: any, e: any): any {
  return (((Math as any).abs as any)(((t as any).to as any) - ((e as any).from as any)) as any) < (ct as any) || (((Math as any).abs as any)(((t as any).to as any) - ((e as any).to as any)) as any) < (ct as any) ? (t as any).to : (t as any).from;
}
(d as any)(no, "sharedLineEndpointCoord");
function Me(this: any, t: any, e: any): any {
  return ((t as any).orient as any) === ("vertical" as any) ? {
    x: (t as any).coord,
    y: e
  } : {
    x: e,
    y: (t as any).coord
  };
}
(d as any)(Me, "pointOnLine");
function hr(this: any, t: any, e: any): any {
  const n: any = (t as any).nodes ?? [],
    o: any = (t as any).edges ?? [],
    s: any = [];
  for (const h of o) (h as any).isLayoutOnly || ((s as any).push as any)({
    ...h,
    __originalEdge: h
  });
  const r: any = new (Map as any)(),
    i: any = new (Map as any)(),
    c: any = [],
    a: any = (e as any) === ("LR" as any);
  for (const h of n) ((r as any).set as any)((h as any).id, h);
  const l: any = ((n as any).filter as any)((h: any): any => (h as any).isGroup && !(h as any).parentId);
  for (const h of l) {
    const b: any = {
        id: (h as any).id
      },
      C: any = (d as any)((L: any): any => {
        ((i as any).set as any)((L as any).id, b), ((((n as any).filter as any)((w: any): any => ((w as any).parentId as any) === ((L as any).id as any)) as any).forEach as any)(C);
      }, "assignLane");
    (C as any)(h);
  }
  const g: any = ((((n as any).filter as any)((h: any): any => !(h as any).isGroup && !(h as any).isEdgeLabel) as any).map as any)((h: any): any => {
      const b: any = (h as any).width ?? 10,
        C: any = (h as any).height ?? 10,
        L: any = (h as any).x ?? 0,
        w: any = (h as any).y ?? 0,
        B: any = Zr;
      return {
        nodeId: (h as any).id,
        minX: ((L as any) - ((b as any) / (2 as any) as any) as any) - (B as any),
        maxX: ((L as any) + ((b as any) / (2 as any) as any) as any) + (B as any),
        minY: ((w as any) - ((C as any) / (2 as any) as any) as any) - (B as any),
        maxY: ((w as any) + ((C as any) / (2 as any) as any) as any) + (B as any),
        visualXHalfExtent: a ? ((C as any) / (2 as any) as any) + (B as any) : ((b as any) / (2 as any) as any) + (B as any)
      };
    }),
    x: any = (d as any)((h: any, b: any, C: any, L: any): any => {
      let w: any = ((c as any).find as any)((B: any): any => ((B as any).orientation as any) === (h as any) && (((Math as any).abs as any)(((B as any).coord as any) - (b as any)) as any) < (1 as any));
      return w || (w = {
        id: `pipe-${h}-${((b as any).toFixed as any)(0)}`,
        orientation: h,
        coord: b,
        spanMin: C,
        spanMax: L,
        tracks: []
      }, ((c as any).push as any)(w)), (w as any).spanMin = ((Math as any).min as any)((w as any).spanMin, C), (w as any).spanMax = ((Math as any).max as any)((w as any).spanMax, L), w;
    }, "getOrAddPipe"),
    I: any = (d as any)((h: any, b: any): any => {
      const C: any = (h as any).width ?? 10,
        L: any = (h as any).height ?? 10,
        w: any = (h as any).x ?? 0,
        B: any = (h as any).y ?? 0;
      switch (b) {
        case "top":
          return {
            x: w,
            y: (B as any) - ((L as any) / (2 as any) as any)
          };
        case "bottom":
          return {
            x: w,
            y: (B as any) + ((L as any) / (2 as any) as any)
          };
        case "left":
          return {
            x: (w as any) - ((C as any) / (2 as any) as any),
            y: B
          };
        case "right":
          return {
            x: (w as any) + ((C as any) / (2 as any) as any),
            y: B
          };
      }
    }, "portForSide"),
    u: any = (d as any)((h: any, b: any, C: any): any => (I as any)(h, (eo as any)(h, b, C ? "bottom" : "top")), "getOrthogonalPort"),
    p: any = [],
    f: any = [],
    y: any = new (Set as any)(),
    v: number = 1e3,
    M: any = (d as any)((h: any, b: any, C: any): any => {
      if (((p as any).length as any) === (0 as any)) return 0;
      const L: any = (((Math as any).abs as any)(((b as any).y as any) - ((C as any).y as any)) as any) < (ct as any),
        w: any = (((Math as any).abs as any)(((b as any).x as any) - ((C as any).x as any)) as any) < (ct as any);
      if (!L && !w) return 0;
      let B: any = 0;
      if (L) {
        const U: any = (b as any).y,
          q: any = (((Math as any).min as any)((b as any).x, (C as any).x) as any) - (ct as any),
          z: any = (((Math as any).max as any)((b as any).x, (C as any).x) as any) + (ct as any);
        if ((z as any) <= (q as any)) return 0;
        for (const Y of p) ((Y as any).edgeIndex as any) === (h as any) || ((Y as any).orientation as any) !== ("vertical" as any) || (((Y as any).pipe as any).coord as any) < (q as any) || (((Y as any).pipe as any).coord as any) > (z as any) || (((Y as any).from as any) - (ct as any) as any) <= (U as any) && (((Y as any).to as any) + (ct as any) as any) >= (U as any) && (B += v);
      } else if (w) {
        const U: any = (b as any).x,
          q: any = (((Math as any).min as any)((b as any).y, (C as any).y) as any) - (ct as any),
          z: any = (((Math as any).max as any)((b as any).y, (C as any).y) as any) + (ct as any);
        if ((z as any) <= (q as any)) return 0;
        for (const Y of p) ((Y as any).edgeIndex as any) === (h as any) || ((Y as any).orientation as any) !== ("horizontal" as any) || (((Y as any).pipe as any).coord as any) < (q as any) || (((Y as any).pipe as any).coord as any) > (z as any) || (((Y as any).from as any) - (ct as any) as any) <= (U as any) && (((Y as any).to as any) + (ct as any) as any) >= (U as any) && (B += v);
      }
      return B;
    }, "crossingPenalty"),
    E: any = ((((((s as any).map as any)((h: any, b: any): any => {
      if (!(h as any).start || !(h as any).end) return {
        idx: b,
        crossLane: 0,
        dx: 0,
        dy: 0
      };
      const C: any = ((r as any).get as any)((h as any).start),
        L: any = ((r as any).get as any)((h as any).end),
        w: any = ((i as any).get as any)((h as any).start),
        B: any = ((i as any).get as any)((h as any).end),
        U: any = w && B && ((w as any).id as any) !== ((B as any).id as any) ? 1 : 0,
        q: any = C && L ? ((Math as any).abs as any)((((L as any).x ?? 0) as any) - (((C as any).x ?? 0) as any)) : 0,
        z: any = C && L ? ((Math as any).abs as any)((((L as any).y ?? 0) as any) - (((C as any).y ?? 0) as any)) : 0;
      return {
        idx: b,
        crossLane: U,
        dx: q,
        dy: z
      };
    }) as any).sort as any)((h: any, b: any): any => {
      if (((h as any).crossLane as any) !== ((b as any).crossLane as any)) return ((b as any).crossLane as any) - ((h as any).crossLane as any);
      const C: any = ((h as any).dx as any) + ((h as any).dy as any),
        L: any = ((b as any).dx as any) + ((b as any).dy as any);
      return (((Math as any).abs as any)((C as any) - (L as any)) as any) > (1 as any) ? (C as any) - (L as any) : ((h as any).idx as any) - ((b as any).idx as any);
    }) as any).map as any)((h: any): any => (h as any).idx),
    T: any = (d as any)((h: any, b: any, C: any, L: any): any => {
      const w: any = ((Math as any).min as any)((h as any).x, (b as any).x),
        B: any = ((Math as any).max as any)((h as any).x, (b as any).x),
        U: any = ((Math as any).min as any)((h as any).y, (b as any).y),
        q: any = ((Math as any).max as any)((h as any).y, (b as any).y);
      return !!((g as any).find as any)((Y: any): any => C && ((Y as any).nodeId as any) === (C as any) || L && ((Y as any).nodeId as any) === (L as any) ? !1 : (((Math as any).abs as any)(((h as any).x as any) - ((b as any).x as any)) as any) > (ct as any) ? ((Y as any).minY as any) < ((h as any).y as any) && ((Y as any).maxY as any) > ((h as any).y as any) && ((Y as any).maxX as any) > (w as any) && ((Y as any).minX as any) < (B as any) : ((Y as any).minX as any) < ((h as any).x as any) && ((Y as any).maxX as any) > ((h as any).x as any) && ((Y as any).maxY as any) > (U as any) && ((Y as any).minY as any) < (q as any));
    }, "isSegmentBlocked"),
    m: any = new (Map as any)(),
    S: any = new (Map as any)();
  for (const h of s) !(h as any).start || !(h as any).end || ((h as any).start as any) === ((h as any).end as any) || (((S as any).set as any)((h as any).start, ((((S as any).get as any)((h as any).start) ?? 0) as any) + (1 as any)), ((S as any).set as any)((h as any).end, ((((S as any).get as any)((h as any).end) ?? 0) as any) + (1 as any)));
  const A: any = (d as any)((h: any, b: any): any => (eo as any)(h, b, "bottom"), "determineSide"),
    R: any = new (Map as any)();
  for (const [h, b] of ((s as any).entries as any)()) {
    if (!(b as any).start || !(b as any).end || ((b as any).start as any) === ((b as any).end as any) || (b as any).points && (((b as any).points as any).length as any) > (0 as any)) continue;
    const C: any = ((r as any).get as any)((b as any).start),
      L: any = ((r as any).get as any)((b as any).end);
    if (!C || !L) continue;
    const w: any = (((L as any).x ?? 0) as any) - (((C as any).x ?? 0) as any),
      B: any = (((L as any).y ?? 0) as any) - (((C as any).y ?? 0) as any);
    ((R as any).set as any)(h, {
      edgeIdx: h,
      srcId: (b as any).start,
      dstId: (b as any).end,
      srcSide: (A as any)(C, {
        x: (L as any).x ?? 0,
        y: (L as any).y ?? 0
      }),
      dstSide: (A as any)(L, {
        x: (C as any).x ?? 0,
        y: (C as any).y ?? 0
      }),
      absDx: ((Math as any).abs as any)(w),
      absDy: ((Math as any).abs as any)(B),
      dxSign: ((Math as any).sign as any)(w),
      dySign: ((Math as any).sign as any)(B)
    });
  }
  const k: any = (d as any)((h: any): any => ((h as any).srcSide as any) === ("top" as any) || ((h as any).srcSide as any) === ("bottom" as any) ? ((h as any).absDx as any) === (0 as any) ? (1 as any) / (0 as any) : ((h as any).absDy as any) / ((h as any).absDx as any) : ((h as any).absDy as any) === (0 as any) ? (1 as any) / (0 as any) : ((h as any).absDx as any) / ((h as any).absDy as any), "preferenceStrength"),
    O: any = (d as any)((h: any): any => ((h as any).srcSide as any) === ("top" as any) || ((h as any).srcSide as any) === ("bottom" as any) ? ((h as any).dxSign as any) >= (0 as any) ? "right" : "left" : ((h as any).dySign as any) >= (0 as any) ? "bottom" : "top", "secondarySide"),
    _: any = new (Map as any)();
  for (const h of ((R as any).values as any)()) {
    const b: any = `${(h as any).srcId}:${(h as any).srcSide}`;
    ((_ as any).has as any)(b) || ((_ as any).set as any)(b, []), ((((_ as any).get as any)(b) as any).push as any)(h);
  }
  const H: any = new (Map as any)(),
    P: any = (d as any)((h: any, b: any): any => `${h}:${b}`, "loadKey");
  for (const h of ((R as any).values as any)()) ((H as any).set as any)((P as any)((h as any).srcId, (h as any).srcSide), ((((H as any).get as any)((P as any)((h as any).srcId, (h as any).srcSide)) ?? 0) as any) + (1 as any)), ((H as any).set as any)((P as any)((h as any).dstId, (h as any).dstSide), ((((H as any).get as any)((P as any)((h as any).dstId, (h as any).dstSide)) ?? 0) as any) + (1 as any));
  for (const h of ((_ as any).values as any)()) if (!(((h as any).length as any) < (2 as any))) {
    ((h as any).sort as any)((b: any, C: any): any => {
      const L: any = (k as any)(b),
        w: any = (k as any)(C);
      return (((Math as any).abs as any)((L as any) - (w as any)) as any) > (1e-9 as any) ? (w as any) - (L as any) : ((b as any).edgeIdx as any) - ((C as any).edgeIdx as any);
    });
    for (let b: any = 1; (b as any) < ((h as any).length as any); b++) {
      const C: any = (h as any)[b],
        L: any = (O as any)(C),
        w: any = ((H as any).get as any)((P as any)((C as any).srcId, (C as any).srcSide)) ?? 0,
        B: any = ((H as any).get as any)((P as any)((C as any).srcId, L)) ?? 0;
      (B as any) >= (w as any) || (((H as any).set as any)((P as any)((C as any).srcId, (C as any).srcSide), (w as any) - (1 as any)), ((H as any).set as any)((P as any)((C as any).srcId, L), (B as any) + (1 as any)), (C as any).srcSide = L);
    }
  }
  const G: any = (d as any)((h: any): any => {
      const b: any = h?.shape;
      return (b as any) === ("question" as any) || (b as any) === ("diamond" as any);
    }, "isDiamondNode"),
    j: any = new (Map as any)();
  for (const h of ((R as any).values as any)()) ((j as any).has as any)((h as any).dstId) || ((j as any).set as any)((h as any).dstId, new (Set as any)()), ((((j as any).get as any)((h as any).dstId) as any).add as any)((h as any).dstSide);
  for (const h of ((R as any).values as any)()) {
    if (!(G as any)(((r as any).get as any)((h as any).srcId))) continue;
    const b: any = ((j as any).get as any)((h as any).srcId);
    if (!b?.has((h as any).srcSide)) continue;
    const C: any = (O as any)(h);
    if (((b as any).has as any)(C) || ((((H as any).get as any)((P as any)((h as any).srcId, C)) ?? 0) as any) > (0 as any)) continue;
    const L: any = ((H as any).get as any)((P as any)((h as any).srcId, (h as any).srcSide)) ?? 0;
    ((H as any).set as any)((P as any)((h as any).srcId, (h as any).srcSide), ((Math as any).max as any)(0, (L as any) - (1 as any))), ((H as any).set as any)((P as any)((h as any).srcId, C), 1), (h as any).srcSide = C;
  }
  for (const h of ((R as any).values as any)()) {
    const {
        edgeIdx: b,
        srcId: C,
        dstId: L,
        srcSide: w,
        dstSide: B
      }: any = h,
      U: any = ((r as any).get as any)(C),
      q: any = ((r as any).get as any)(L),
      z: any = `${C}:${w}:src`,
      Y: any = (w as any) === ("top" as any) || (w as any) === ("bottom" as any) ? (q as any).x ?? 0 : (q as any).y ?? 0;
    ((m as any).has as any)(z) || ((m as any).set as any)(z, []), ((((m as any).get as any)(z) as any).push as any)({
      edgeIdx: b,
      oppositeCoord: Y
    });
    const ot: any = `${L}:${B}:dst`,
      rt: any = (B as any) === ("top" as any) || (B as any) === ("bottom" as any) ? (U as any).x ?? 0 : (U as any).y ?? 0;
    ((m as any).has as any)(ot) || ((m as any).set as any)(ot, []), ((((m as any).get as any)(ot) as any).push as any)({
      edgeIdx: b,
      oppositeCoord: rt
    });
  }
  const J: any = new (Map as any)(),
    dt: number = 8;
  for (const [h, b] of m) {
    if (((b as any).length as any) < (2 as any)) continue;
    ((b as any).sort as any)((Lt: any, Dt: any): any => ((Lt as any).oppositeCoord as any) - ((Dt as any).oppositeCoord as any));
    const C: any = ((h as any).split as any)(":"),
      L: any = ((((C as any).slice as any)(0, -2) as any).join as any)(":"),
      w: any = (C as any)[((C as any).length as any) - (2 as any)],
      B: any = (C as any)[((C as any).length as any) - (1 as any)],
      U: any = ((r as any).get as any)(L);
    if (!U) continue;
    const z: any = (w as any) === ("left" as any) || (w as any) === ("right" as any) ? (U as any).height ?? 10 : (U as any).width ?? 10,
      Y: any = (U as any).shape,
      rt: any = (Y as any) === ("question" as any) || (Y as any) === ("diamond" as any) ? (z as any) * (.3 as any) : z,
      tt: any = ((Math as any).min as any)(20, ((Math as any).max as any)(dt, (rt as any) / (((b as any).length as any) + (1 as any) as any))),
      Rt: any = (-((tt as any) * (((b as any).length as any) - (1 as any) as any)) as any) / (2 as any);
    for (const [Lt, Dt] of ((b as any).entries as any)()) {
      const Jt: any = (Rt as any) + ((Lt as any) * (tt as any) as any),
        gn: any = `${(Dt as any).edgeIdx}:${B}`;
      ((J as any).set as any)(gn, Jt);
    }
  }
  const mt: any = (d as any)((h: any): any => !!(s as any)[h]?.labelNodeId, "edgeHasLabelNode"),
    kt: any = (d as any)((h: any, b: any): any => h ? (((((m as any).get as any)(`${h}:${b}:src`) ?? []) as any).some as any)(({
      edgeIdx: C
    }: any): any => (mt as any)(C)) || (((((m as any).get as any)(`${h}:${b}:dst`) ?? []) as any).some as any)(({
      edgeIdx: C
    }: any): any => (mt as any)(C)) : !1, "faceHasLabelNode"),
    Pt: any = (d as any)((h: any, b: any, C: any): any => (b as any) === ("top" as any) || (b as any) === ("bottom" as any) ? {
      x: ((h as any).x as any) + (C as any),
      y: (h as any).y
    } : {
      x: (h as any).x,
      y: ((h as any).y as any) + (C as any)
    }, "applyPortOffset"),
    Q: any = (d as any)((h: any, b: any, C: any): any => {
      const L: any = ((R as any).get as any)(h),
        w: any = {
          x: (C as any).x ?? 0,
          y: (C as any).y ?? 0
        },
        B: any = {
          x: (b as any).x ?? 0,
          y: (b as any).y ?? 0
        },
        U: any = L?.srcSide ?? (A as any)(b, w),
        q: any = L?.dstSide ?? (A as any)(C, B);
      let z: any = L ? (I as any)(b, (L as any).srcSide) : (u as any)(b, w, !0),
        Y: any = L ? (I as any)(C, (L as any).dstSide) : (u as any)(C, B, !1);
      const ot: any = ((J as any).get as any)(`${h}:src`),
        rt: any = ((J as any).get as any)(`${h}:dst`);
      return (ot as any) !== (void 0 as any) && (z = (Pt as any)(z, U, ot)), (rt as any) !== (void 0 as any) && (Y = (Pt as any)(Y, q, rt)), {
        pSrcPort: z,
        pDstPort: Y,
        srcSide: U,
        dstSide: q
      };
    }, "portsForEdge");
  for (const h of E) {
    const b: any = (s as any)[h];
    if ((f as any)[h] = [], !(b as any).start || !(b as any).end || (b as any).points && (((b as any).points as any).length as any) > (0 as any) || ((b as any).start as any) === ((b as any).end as any)) continue;
    const C: any = ((r as any).get as any)((b as any).start),
      L: any = ((r as any).get as any)((b as any).end);
    if (!C || !L) continue;
    const {
        pSrcPort: w,
        pDstPort: B,
        srcSide: U,
        dstSide: q
      }: any = (Q as any)(h, C, L),
      z: any = {
        ...w
      },
      Y: any = {
        ...B
      },
      ot: any = (U as any) === ("top" as any) || (U as any) === ("bottom" as any),
      rt: any = (q as any) === ("top" as any) || (q as any) === ("bottom" as any);
    if (ot) {
      const X: any = ((w as any).y as any) > (((C as any).y ?? 0) as any);
      (z as any).y = X ? ((w as any).y as any) + (ne as any) : ((w as any).y as any) - (ne as any);
    } else {
      const X: any = ((w as any).x as any) > (((C as any).x ?? 0) as any);
      (z as any).x = X ? ((w as any).x as any) + (ne as any) : ((w as any).x as any) - (ne as any);
    }
    if (rt) {
      const X: any = ((B as any).y as any) > (((L as any).y ?? 0) as any);
      (Y as any).y = X ? ((B as any).y as any) + (ne as any) : ((B as any).y as any) - (ne as any);
    } else {
      const X: any = ((B as any).x as any) > (((L as any).x ?? 0) as any);
      (Y as any).x = X ? ((B as any).x as any) + (ne as any) : ((B as any).x as any) - (ne as any);
    }
    const st: any = (d as any)((X: any, $: any): any => {
        for (const K of g) if (!(($ as any).includes as any)((K as any).nodeId) && ((X as any).x as any) > ((K as any).minX as any) && ((X as any).x as any) < ((K as any).maxX as any) && ((X as any).y as any) > ((K as any).minY as any) && ((X as any).y as any) < ((K as any).maxY as any)) return {
          inside: !0,
          obstacle: K
        };
        return {
          inside: !1
        };
      }, "isPointInObstacle"),
      tt: any = (d as any)((X: any, $: any, K: any, lt: any, Ct: any): any => {
        if (Ct) {
          const Nt: any = ((X as any).y as any) > ((($ as any).y ?? 0) as any);
          return {
            x: (((K as any).x ?? 0) as any) >= ((X as any).x as any) ? ((lt as any).maxX as any) + (be as any) : ((lt as any).minX as any) - (be as any),
            y: Nt ? ((lt as any).maxY as any) + (Te as any) : ((lt as any).minY as any) - (Te as any),
            leavesPositiveSide: Nt
          };
        }
        const bt: any = ((X as any).x as any) > ((($ as any).x ?? 0) as any),
          Et: any = (((K as any).y ?? 0) as any) >= ((X as any).y as any);
        return {
          x: bt ? ((lt as any).maxX as any) + (be as any) : ((lt as any).minX as any) - (be as any),
          y: Et ? ((lt as any).maxY as any) + (Te as any) : ((lt as any).minY as any) - (Te as any),
          leavesPositiveSide: bt
        };
      }, "obstacleDetour");
    let yt: any = [];
    const Rt: any = [(b as any).start, (b as any).end],
      Lt: any = (st as any)(z, Rt);
    if ((Lt as any).inside && (Lt as any).obstacle) {
      const X: any = (Lt as any).obstacle;
      if (ot) {
        const $: any = (tt as any)(w, C, L, X, !0);
        (z as any).x = ($ as any).x, (z as any).y = ($ as any).y;
        const K: any = ($ as any).leavesPositiveSide ? ((Math as any).min as any)(((X as any).minY as any) - (2 as any), ((w as any).y as any) + (ne as any)) : ((Math as any).max as any)(((X as any).maxY as any) + (2 as any), ((w as any).y as any) - (ne as any));
        yt = [{
          x: (w as any).x,
          y: K
        }, {
          x: ($ as any).x,
          y: K
        }, {
          x: ($ as any).x,
          y: ($ as any).y
        }];
      } else {
        const $: any = (tt as any)(w, C, L, X, !1),
          K: any = ($ as any).leavesPositiveSide ? ((Math as any).min as any)(((X as any).minX as any) - (2 as any), ((w as any).x as any) + (ne as any)) : ((Math as any).max as any)(((X as any).maxX as any) + (2 as any), ((w as any).x as any) - (ne as any));
        (z as any).x = ($ as any).x, (z as any).y = ($ as any).y, yt = [{
          x: K,
          y: (w as any).y
        }, {
          x: K,
          y: ($ as any).y
        }, {
          x: ($ as any).x,
          y: ($ as any).y
        }];
      }
    }
    let Dt: any = [];
    const Jt: any = (st as any)(Y, Rt);
    if ((Jt as any).inside && (Jt as any).obstacle) {
      const X: any = (Jt as any).obstacle;
      if (rt) {
        const $: any = (tt as any)(B, L, C, X, !0);
        (Y as any).x = ($ as any).x, (Y as any).y = ($ as any).y, Dt = [{
          x: ($ as any).x,
          y: ($ as any).y
        }, {
          x: (B as any).x,
          y: ($ as any).y
        }];
      } else {
        const $: any = (tt as any)(B, L, C, X, !1);
        (Y as any).x = ($ as any).x, (Y as any).y = ($ as any).y, Dt = [{
          x: ($ as any).x,
          y: ($ as any).y
        }, {
          x: ($ as any).x,
          y: (B as any).y
        }];
      }
    }
    if (((yt as any).length as any) === (0 as any) && ((Dt as any).length as any) === (0 as any)) {
      const X: any = be,
        $: any = (((Math as any).abs as any)(((z as any).x as any) - ((Y as any).x as any)) as any) < (X as any),
        K: any = (((Math as any).abs as any)(((z as any).y as any) - ((Y as any).y as any)) as any) < (X as any),
        lt: any = (((J as any).get as any)(`${h}:src`) as any) !== (void 0 as any) || (((J as any).get as any)(`${h}:dst`) as any) !== (void 0 as any),
        Ct: any = ((((m as any).get as any)(`${(b as any).start ?? ""}:${U}:src`)?.length ?? 0) as any) + ((((m as any).get as any)(`${(b as any).start ?? ""}:${U}:dst`)?.length ?? 0) as any),
        bt: any = ((((m as any).get as any)(`${(b as any).end ?? ""}:${q}:src`)?.length ?? 0) as any) + ((((m as any).get as any)(`${(b as any).end ?? ""}:${q}:dst`)?.length ?? 0) as any),
        Et: any = (Ct as any) > (1 as any) || (bt as any) > (1 as any),
        Nt: any = ((S as any).get as any)((b as any).start ?? "") ?? 0,
        ut: any = ((S as any).get as any)((b as any).end ?? "") ?? 0,
        Yt: any = (Ct as any) > (1 as any) && (kt as any)((b as any).start, U) || (bt as any) > (1 as any) && (kt as any)((b as any).end, q),
        ee: any = (Ct as any) <= (1 as any) || (Nt as any) <= (2 as any),
        Bt: any = (bt as any) <= (1 as any) || (ut as any) <= (2 as any);
      if (($ || K) && !lt && (!Et || Et && !Yt && ee && Bt) && !(T as any)(w, B, (b as any).start, (b as any).end)) {
        (b as any).points = [{
          ...w
        }, {
          ...z
        }, {
          ...Y
        }, {
          ...B
        }], ((y as any).add as any)(h);
        const Mt: any = K ? "horizontal" : "vertical",
          $t: any = K ? (w as any).y : (w as any).x,
          It: any = K ? ((Math as any).min as any)((w as any).x, (B as any).x) : ((Math as any).min as any)((w as any).y, (B as any).y),
          St: any = K ? ((Math as any).max as any)((w as any).x, (B as any).x) : ((Math as any).max as any)((w as any).y, (B as any).y),
          Wt: any = {
            id: `fast-path-${Mt}-${(($t as any).toFixed as any)(0)}-${h}`,
            orientation: Mt,
            coord: $t,
            spanMin: It,
            spanMax: St,
            tracks: []
          };
        ((p as any).push as any)({
          edgeIndex: h,
          segmentIndex: 0,
          orientation: Mt,
          pipe: Wt,
          trackIndex: 0,
          from: It,
          to: St
        });
        continue;
      }
    }
    const gn: any = (x as any)("vertical", (z as any).x, (z as any).y, (z as any).y);
    (z as any).x = (gn as any).coord;
    const mr: any = (x as any)("vertical", (Y as any).x, (Y as any).y, (Y as any).y);
    (Y as any).x = (mr as any).coord;
    let ue: any = (((Math as any).min as any)((z as any).x, (Y as any).x) as any) - (50 as any),
      he: any = (((Math as any).max as any)((z as any).x, (Y as any).x) as any) + (50 as any),
      ve: any = (((Math as any).min as any)((z as any).y, (Y as any).y) as any) - (50 as any),
      Le: any = (((Math as any).max as any)((z as any).y, (Y as any).y) as any) + (50 as any);
    for (const X of g) {
      const $: any = ((Math as any).min as any)((z as any).x, (Y as any).x),
        K: any = ((Math as any).max as any)((z as any).x, (Y as any).x),
        lt: any = ((Math as any).min as any)((z as any).y, (Y as any).y),
        Ct: any = ((Math as any).max as any)((z as any).y, (Y as any).y);
      ((X as any).minX as any) < (K as any) && ((X as any).maxX as any) > ($ as any) && ((X as any).minY as any) < (Ct as any) && ((X as any).maxY as any) > (lt as any) && (ue = ((Math as any).min as any)(ue, ((X as any).minX as any) - (je as any)), he = ((Math as any).max as any)(he, ((X as any).maxX as any) + (je as any)), ve = ((Math as any).min as any)(ve, ((X as any).minY as any) - (je as any)), Le = ((Math as any).max as any)(Le, ((X as any).maxY as any) + (je as any)));
    }
    for (const X of g) {
      if (((X as any).maxX as any) < (ue as any) || ((X as any).minX as any) > (he as any) || ((X as any).maxY as any) < (ve as any) || ((X as any).minY as any) > (Le as any)) continue;
      const $: any = be;
      (x as any)("horizontal", ((X as any).minY as any) - ($ as any), ue, he), (x as any)("horizontal", ((X as any).maxY as any) + ($ as any), ue, he);
      const K: any = Te;
      (x as any)("vertical", ((X as any).minX as any) - (K as any), ve, Le), (x as any)("vertical", ((X as any).maxX as any) + (K as any), ve, Le);
    }
    (x as any)("horizontal", (z as any).y, ue, he), (x as any)("horizontal", (Y as any).y, ue, he);
    const yr: any = ((c as any).filter as any)((X: any): any => ((X as any).orientation as any) === ("horizontal" as any) && ((X as any).coord as any) >= (ve as any) && ((X as any).coord as any) <= (Le as any)),
      xr: any = ((c as any).filter as any)((X: any): any => ((X as any).orientation as any) === ("vertical" as any) && ((X as any).coord as any) >= (ue as any) && ((X as any).coord as any) <= (he as any)),
      ke: any = (d as any)((X: any, $: any): any => `${((X as any).toFixed as any)(1)},${(($ as any).toFixed as any)(1)}`, "getKey"),
      _e: any = (ke as any)((z as any).x, (z as any).y),
      vo: any = (ke as any)((Y as any).x, (Y as any).y),
      Fe: any = new (Map as any)(),
      pn: any = new (Map as any)(),
      mn: any = new (Map as any)(),
      De: any = new (Set as any)(),
      xe: any = [];
    ((Fe as any).set as any)(_e, 0), ((mn as any).set as any)(_e, "n"), ((xe as any).push as any)({
      key: _e,
      f: ((Math as any).hypot as any)(((Y as any).x as any) - ((z as any).x as any), ((Y as any).y as any) - ((z as any).y as any)),
      pt: z
    }), ((De as any).add as any)(_e);
    let Ht: any = [];
    const ge: any = (d as any)((X: any, $: any): any => (T as any)(X, $, (b as any).start, (b as any).end), "checkSegmentBlocked"),
      yn: any = {
        x: (Y as any).x,
        y: (z as any).y
      },
      br: any = (ge as any)(z, yn),
      Mr: any = (ge as any)(yn, Y),
      Ir: any = br || Mr,
      xn: any = {
        x: (z as any).x,
        y: (Y as any).y
      },
      Sr: any = (ge as any)(z, xn),
      Cr: any = (ge as any)(xn, Y);
    if (Ir ? Sr || Cr || ((((Math as any).abs as any)(((z as any).x as any) - ((Y as any).x as any)) as any) < (ct as any) ? Ht = [z, Y] : Ht = [z, xn, Y]) : (((Math as any).abs as any)(((z as any).y as any) - ((Y as any).y as any)) as any) < (ct as any) || (((Math as any).abs as any)(((z as any).x as any) - ((Y as any).x as any)) as any) < (ct as any) ? Ht = [z, Y] : Ht = [z, yn, Y], ((Ht as any).length as any) === (0 as any)) for (; ((xe as any).length as any) > (0 as any);) {
      ((xe as any).sort as any)((ut: any, Yt: any): any => ((ut as any).f as any) - ((Yt as any).f as any));
      const X: any = ((xe as any).shift as any)();
      if (((De as any).delete as any)((X as any).key), ((X as any).key as any) === (vo as any)) {
        let ut: any = vo,
          Yt: any = Y;
        for (Ht = [Yt]; ((pn as any).has as any)(ut);) {
          const ee: any = ((pn as any).get as any)(ut);
          ((Ht as any).unshift as any)(ee), Yt = ee, ut = (ke as any)((ee as any).x, (ee as any).y);
        }
        break;
      }
      const $: any = ((X as any).pt as any).x,
        K: any = ((X as any).pt as any).y,
        lt: any = ((xr as any).sort as any)((ut: any, Yt: any): any => ((ut as any).coord as any) - ((Yt as any).coord as any)),
        Ct: any = ((lt as any).findIndex as any)((ut: any): any => (((Math as any).abs as any)(((ut as any).coord as any) - ($ as any)) as any) < (1 as any)),
        bt: any = ((yr as any).sort as any)((ut: any, Yt: any): any => ((ut as any).coord as any) - ((Yt as any).coord as any)),
        Et: any = ((bt as any).findIndex as any)((ut: any): any => (((Math as any).abs as any)(((ut as any).coord as any) - (K as any)) as any) < (1 as any)),
        Nt: any = [];
      (Ct as any) > (0 as any) && ((Nt as any).push as any)({
        x: ((lt as any)[(Ct as any) - (1 as any)] as any).coord,
        y: K
      }), (Ct as any) >= (0 as any) && (Ct as any) < (((lt as any).length as any) - (1 as any) as any) && ((Nt as any).push as any)({
        x: ((lt as any)[(Ct as any) + (1 as any)] as any).coord,
        y: K
      }), (Et as any) > (0 as any) && ((Nt as any).push as any)({
        x: $,
        y: ((bt as any)[(Et as any) - (1 as any)] as any).coord
      }), (Et as any) >= (0 as any) && (Et as any) < (((bt as any).length as any) - (1 as any) as any) && ((Nt as any).push as any)({
        x: $,
        y: ((bt as any)[(Et as any) + (1 as any)] as any).coord
      });
      for (const ut of Nt) {
        const Yt: any = ((Math as any).min as any)($, (ut as any).x),
          ee: any = ((Math as any).max as any)($, (ut as any).x),
          Bt: any = ((Math as any).min as any)(K, (ut as any).y),
          Gt: any = ((Math as any).max as any)(K, (ut as any).y);
        if (((g as any).some as any)((Zt: any): any => ((Zt as any).nodeId as any) === ((b as any).start as any) || ((Zt as any).nodeId as any) === ((b as any).end as any) ? !1 : (Yt as any) !== (ee as any) ? ((Zt as any).minY as any) < (K as any) && ((Zt as any).maxY as any) > (K as any) && ((Zt as any).maxX as any) > (Yt as any) && ((Zt as any).minX as any) < (ee as any) : ((Zt as any).minX as any) < ($ as any) && ((Zt as any).maxX as any) > ($ as any) && ((Zt as any).maxY as any) > (Bt as any) && ((Zt as any).minY as any) < (Gt as any))) continue;
        const Mt: any = (ke as any)((ut as any).x, (ut as any).y),
          $t: any = (((Math as any).abs as any)(((ut as any).x as any) - ($ as any)) as any) + (((Math as any).abs as any)(((ut as any).y as any) - (K as any)) as any),
          It: any = (M as any)(h, (X as any).pt, ut);
        let St: any = 0;
        const Wt: any = ((Y as any).x as any) - ((z as any).x as any),
          Ee: any = ((Y as any).y as any) - ((z as any).y as any),
          He: any = ((ut as any).x as any) - ($ as any),
          bn: any = ((ut as any).y as any) - (K as any);
        ((Ee as any) > (10 as any) && (bn as any) < (-5 as any) || (Ee as any) < (-10 as any) && (bn as any) > (5 as any)) && (St = (((Math as any).abs as any)(bn) as any) * (100 as any)), ((Wt as any) > (10 as any) && (He as any) < (-5 as any) || (Wt as any) < (-10 as any) && (He as any) > (5 as any)) && (St += (((Math as any).abs as any)(He) as any) * (50 as any));
        let Lo: any = 0;
        const Eo: any = ((mn as any).get as any)((X as any).key) ?? "n",
          To: any = (((Math as any).abs as any)(He) as any) > (ct as any) ? "h" : "v";
        (Eo as any) !== ("n" as any) && (Eo as any) !== (To as any) && (Lo = 50);
        const vr: any = ((($t as any) + (It as any) as any) + (St as any) as any) + (Lo as any),
          Xe: any = ((((Fe as any).get as any)((X as any).key) ?? (1 as any) / (0 as any)) as any) + (vr as any),
          wo: any = (((Math as any).abs as any)(((Y as any).x as any) - ((ut as any).x as any)) as any) + (((Math as any).abs as any)(((Y as any).y as any) - ((ut as any).y as any)) as any);
        if ((Xe as any) < ((((Fe as any).get as any)(Mt) ?? (1 as any) / (0 as any)) as any)) if (((pn as any).set as any)(Mt, (X as any).pt), ((Fe as any).set as any)(Mt, Xe), ((mn as any).set as any)(Mt, To), !((De as any).has as any)(Mt)) ((xe as any).push as any)({
          key: Mt,
          f: (Xe as any) + (wo as any),
          pt: ut
        }), ((De as any).add as any)(Mt);else {
          const Zt: any = ((xe as any).findIndex as any)((Lr: any): any => ((Lr as any).key as any) === (Mt as any));
          (Zt as any) !== (-1 as any) && (((xe as any)[Zt] as any).f = (Xe as any) + (wo as any));
        }
      }
    }
    if (((Ht as any).length as any) === (0 as any) && (Ht = [z, {
      x: (z as any).x,
      y: (Y as any).y
    }, Y]), ((Ht as any).length as any) > (4 as any)) {
      const X: any = (Ht as any)[0],
        $: any = (Ht as any)[((Ht as any).length as any) - (1 as any)];
      let K: any = ((Math as any).min as any)((X as any).x, ($ as any).x),
        lt: any = ((Math as any).max as any)((X as any).x, ($ as any).x),
        Ct: any = ((Math as any).min as any)((X as any).y, ($ as any).y),
        bt: any = ((Math as any).max as any)((X as any).y, ($ as any).y);
      for (const Bt of Ht) K = ((Math as any).min as any)(K, (Bt as any).x), lt = ((Math as any).max as any)(lt, (Bt as any).x), Ct = ((Math as any).min as any)(Ct, (Bt as any).y), bt = ((Math as any).max as any)(bt, (Bt as any).y);
      const Et: any = (lt as any) > (((Math as any).max as any)((X as any).x, ($ as any).x) as any),
        Nt: any = (K as any) < (((Math as any).min as any)((X as any).x, ($ as any).x) as any);
      if (a) {
        const Bt: any = Te;
        if (Et) {
          const Gt: any = ((Math as any).max as any)((X as any).x, ($ as any).x),
            Ot: any = ((Math as any).min as any)((X as any).y, ($ as any).y),
            Mt: any = ((Math as any).max as any)((X as any).y, ($ as any).y),
            $t: any = ((g as any).filter as any)((It: any): any => ((It as any).minX as any) < (Gt as any) && ((It as any).maxX as any) > (Gt as any) && ((It as any).minY as any) < (Mt as any) && ((It as any).maxY as any) > (Ot as any));
          if ((($t as any).length as any) > (0 as any)) {
            let It: any = ((Math as any).max as any)((X as any).x, ($ as any).x);
            for (const St of $t) {
              const Wt: any = (((St as any).minX as any) + ((St as any).maxX as any) as any) / (2 as any);
              if (((St as any).visualXHalfExtent as any) === (void 0 as any) || (isNaN as any)((St as any).visualXHalfExtent)) continue;
              const Ee: any = ((Wt as any) + ((St as any).visualXHalfExtent as any) as any) + (Bt as any);
              It = ((Math as any).max as any)(It, Ee);
            }
            (isNaN as any)(It) || (lt = It);
          }
        }
        if (Nt) {
          const Gt: any = ((g as any).filter as any)((Ot: any): any => ((Ot as any).minX as any) < ((((Math as any).min as any)((X as any).x, ($ as any).x) as any) + (Bt as any) as any) && ((Ot as any).minY as any) < (((Math as any).max as any)((X as any).y, ($ as any).y) as any) && ((Ot as any).maxY as any) > (((Math as any).min as any)((X as any).y, ($ as any).y) as any));
          if (((Gt as any).length as any) > (0 as any)) {
            let Ot: any = ((Math as any).min as any)((X as any).x, ($ as any).x);
            for (const Mt of Gt) {
              const It: any = (((((Mt as any).minX as any) + ((Mt as any).maxX as any) as any) / (2 as any) as any) - ((Mt as any).visualXHalfExtent as any) as any) - (Bt as any);
              Ot = ((Math as any).min as any)(Ot, It);
            }
            K = Ot;
          }
        }
      }
      const ut: any = (d as any)((Bt: any): any => {
          const Gt: any = (($ as any).y as any) > ((X as any).y as any),
            Ot: any = ((g as any).filter as any)((It: any): any => {
              const St: any = (((Math as any).min as any)((X as any).x, ($ as any).x) as any) < ((It as any).maxX as any) && (((Math as any).max as any)((X as any).x, ($ as any).x) as any) > ((It as any).minX as any),
                Wt: any = (((Math as any).min as any)((X as any).y, ($ as any).y) as any) < ((It as any).maxY as any) && (((Math as any).max as any)((X as any).y, ($ as any).y) as any) > ((It as any).minY as any);
              return St && Wt;
            });
          let Mt: any = Ot;
          if (a && ((Ot as any).length as any) > (0 as any)) {
            const It: any = ((Ot as any).filter as any)((St: any): any => ((St as any).minX as any) < (Bt as any) && ((St as any).maxX as any) > (Bt as any));
            ((It as any).length as any) > (0 as any) && (Mt = It);
          }
          if (((Mt as any).length as any) === (0 as any)) return ($ as any).y;
          const $t: any = be;
          if (Gt) {
            const St: any = (((Math as any).max as any)(...((Mt as any).map as any)((Wt: any): any => (Wt as any).maxY)) as any) + ($t as any);
            if ((St as any) < ((($ as any).y as any) - (ct as any) as any)) return St;
          } else {
            const St: any = (((Math as any).min as any)(...((Mt as any).map as any)((Wt: any): any => (Wt as any).minY)) as any) - ($t as any);
            if ((St as any) > ((($ as any).y as any) + (ct as any) as any)) return St;
          }
          return ($ as any).y;
        }, "findBestReturnY"),
        Yt: any = (d as any)((Bt: any): any => {
          const Gt: any = (ut as any)(Bt),
            Ot: any = {
              x: Bt,
              y: (X as any).y
            },
            Mt: any = {
              x: Bt,
              y: Gt
            },
            $t: any = {
              x: ($ as any).x,
              y: Gt
            },
            It: any = (ge as any)(X, Ot),
            St: any = (ge as any)(Ot, Mt),
            Wt: any = (ge as any)(Mt, $t),
            Ee: any = (Gt as any) !== (($ as any).y as any) ? (ge as any)($t, $) : !1;
          return !It && !St && !Wt && !Ee ? (((Math as any).abs as any)((Gt as any) - (($ as any).y as any)) as any) < (ct as any) ? [X, Ot, Mt, $] : [X, Ot, Mt, $t, $] : null;
        }, "trySimplifyWithDetourX"),
        ee: any = Et && !Nt ? (Yt as any)(lt) : Nt && !Et ? (Yt as any)(K) : null;
      ee && (Ht = ee);
    }
    const Xt: any = [w, ...yt, ...Ht, ...((Dt as any).reverse as any)(), B];
    if (((Xt as any).length as any) >= (3 as any)) {
      const X: any = (Xt as any)[((Xt as any).length as any) - (1 as any)],
        $: any = (Xt as any)[((Xt as any).length as any) - (2 as any)],
        K: any = (Xt as any)[((Xt as any).length as any) - (3 as any)],
        lt: any = (((Math as any).abs as any)(((K as any).y as any) - (($ as any).y as any)) as any) < (ct as any) && (((Math as any).abs as any)((($ as any).y as any) - ((X as any).y as any)) as any) < (ct as any),
        Ct: any = (((Math as any).abs as any)(((K as any).x as any) - (($ as any).x as any)) as any) < (ct as any) && (((Math as any).abs as any)((($ as any).x as any) - ((X as any).x as any)) as any) < (ct as any);
      if (lt) {
        const bt: any = ((Math as any).sign as any)((($ as any).x as any) - ((K as any).x as any)),
          Et: any = ((Math as any).sign as any)(((X as any).x as any) - ((K as any).x as any));
        (bt as any) !== (0 as any) && (bt as any) === (Et as any) && (((Math as any).abs as any)((($ as any).x as any) - ((K as any).x as any)) as any) > (((Math as any).abs as any)(((X as any).x as any) - ((K as any).x as any)) as any) && ((Xt as any).splice as any)(-2, 1);
      } else if (Ct) {
        const bt: any = ((Math as any).sign as any)((($ as any).y as any) - ((K as any).y as any)),
          Et: any = ((Math as any).sign as any)(((X as any).y as any) - ((K as any).y as any));
        (bt as any) !== (0 as any) && (bt as any) === (Et as any) && (((Math as any).abs as any)((($ as any).y as any) - ((K as any).y as any)) as any) > (((Math as any).abs as any)(((X as any).y as any) - ((K as any).y as any)) as any) && ((Xt as any).splice as any)(-2, 1);
      }
    }
    const ie: any = [(Xt as any)[0]];
    for (let X: any = 1; (X as any) < (((Xt as any).length as any) - (1 as any) as any); X++) {
      if ((X as any) === (1 as any)) {
        ((ie as any).push as any)((Xt as any)[X]);
        continue;
      }
      const $: any = (ie as any)[((ie as any).length as any) - (1 as any)],
        K: any = (Xt as any)[X],
        lt: any = (Xt as any)[(X as any) + (1 as any)];
      if ((((Math as any).abs as any)((($ as any).y as any) - ((K as any).y as any)) as any) < (ct as any) && (((Math as any).abs as any)(((K as any).y as any) - ((lt as any).y as any)) as any) < (ct as any)) {
        const Ct: any = ((K as any).x as any) > (($ as any).x as any),
          bt: any = ((lt as any).x as any) > ((K as any).x as any);
        if ((Ct as any) !== (bt as any)) {
          ((ie as any).push as any)(K);
          continue;
        }
        continue;
      }
      if ((((Math as any).abs as any)((($ as any).x as any) - ((K as any).x as any)) as any) < (ct as any) && (((Math as any).abs as any)(((K as any).x as any) - ((lt as any).x as any)) as any) < (ct as any)) {
        const Ct: any = ((K as any).y as any) > (($ as any).y as any),
          bt: any = ((lt as any).y as any) > ((K as any).y as any);
        if ((Ct as any) !== (bt as any)) {
          ((ie as any).push as any)(K);
          continue;
        }
        continue;
      }
      ((ie as any).push as any)(K);
    }
    ((ie as any).push as any)((Xt as any)[((Xt as any).length as any) - (1 as any)]);
    for (let X: any = 0; (X as any) < (((ie as any).length as any) - (1 as any) as any); X++) {
      const $: any = (ie as any)[X],
        K: any = (ie as any)[(X as any) + (1 as any)],
        lt: any = (((Math as any).abs as any)((($ as any).x as any) - ((K as any).x as any)) as any) < (ct as any) ? "vertical" : "horizontal",
        Ct: any = (lt as any) === ("vertical" as any) ? ($ as any).x : ($ as any).y,
        bt: any = (lt as any) === ("vertical" as any) ? ((Math as any).min as any)(($ as any).y, (K as any).y) : ((Math as any).min as any)(($ as any).x, (K as any).x),
        Et: any = (lt as any) === ("vertical" as any) ? ((Math as any).max as any)(($ as any).y, (K as any).y) : ((Math as any).max as any)(($ as any).x, (K as any).x),
        Nt: any = (x as any)(lt, Ct, bt, Et),
        ut: any = {
          edgeIndex: h,
          segmentIndex: X,
          orientation: lt,
          pipe: Nt,
          trackIndex: 0,
          from: bt,
          to: Et
        };
      ((p as any).push as any)(ut), (((f as any)[h] as any).push as any)(((p as any).length as any) - (1 as any)), ((Nt as any).tracks as any)[0] || (((Nt as any).tracks as any)[0] = {
        index: 0,
        coord: (Nt as any).coord,
        segments: []
      }), (((((Nt as any).tracks as any)[0] as any).segments as any).push as any)({
        edgeIndex: h,
        segmentIndex: X,
        from: bt,
        to: Et
      });
    }
  }
  const W: any = (d as any)((h: any, b: any): any => ((h as any).from as any) < ((b as any).to as any) && ((b as any).from as any) < ((h as any).to as any), "segmentsOverlap"),
    et: any = (d as any)((h: any, b: any, C: any, L: any): any => {
      const w: any = !(((L as any).segments as any).some as any)((U: any): any => (((U as any).edgeIndex as any) !== ((b as any).edgeIndex as any) || ((U as any).segmentIndex as any) !== ((b as any).segmentIndex as any)) && (W as any)(U, h)),
        B: any = !(((C as any).segments as any).some as any)((U: any): any => (((U as any).edgeIndex as any) !== ((h as any).edgeIndex as any) || ((U as any).segmentIndex as any) !== ((h as any).segmentIndex as any)) && (W as any)(U, b));
      return w && B ? ((h as any).trackIndex = (L as any).index, (b as any).trackIndex = (C as any).index, (C as any).segments = [...(((C as any).segments as any).filter as any)((U: any): any => ((U as any).edgeIndex as any) !== ((h as any).edgeIndex as any) || ((U as any).segmentIndex as any) !== ((h as any).segmentIndex as any)), {
        edgeIndex: (b as any).edgeIndex,
        segmentIndex: (b as any).segmentIndex,
        from: (b as any).from,
        to: (b as any).to
      }], (L as any).segments = [...(((L as any).segments as any).filter as any)((U: any): any => ((U as any).edgeIndex as any) !== ((b as any).edgeIndex as any) || ((U as any).segmentIndex as any) !== ((b as any).segmentIndex as any)), {
        edgeIndex: (h as any).edgeIndex,
        segmentIndex: (h as any).segmentIndex,
        from: (h as any).from,
        to: (h as any).to
      }], !0) : !1;
    }, "trySwapSegmentsAcrossTracks"),
    at: any = (d as any)((h: any): any => {
      const b: any = ((h as any).tracks as any).length;
      return ((h as any).tracks as any)[b] = {
        index: b,
        coord: (h as any).coord,
        segments: []
      }, b;
    }, "createNewTrack"),
    gt: any = (d as any)((h: any, b: any): any => {
      const C: any = (((h as any).pipe as any).tracks as any)[(h as any).trackIndex];
      (C as any).segments = (((C as any).segments as any).filter as any)((w: any): any => ((w as any).edgeIndex as any) !== ((h as any).edgeIndex as any) || ((w as any).segmentIndex as any) !== ((h as any).segmentIndex as any)), (h as any).trackIndex = b, ((((((h as any).pipe as any).tracks as any)[b] as any).segments as any).push as any)({
        edgeIndex: (h as any).edgeIndex,
        segmentIndex: (h as any).segmentIndex,
        from: (h as any).from,
        to: (h as any).to
      });
    }, "moveSegmentToTrack"),
    xt: any = (d as any)((h: any, b: any): any => {
      const C: any = (f as any)[(h as any).edgeIndex];
      for (const L of C) {
        const w: any = (p as any)[L];
        ((w as any).pipe as any) === ((h as any).pipe as any) && (gt as any)(w, b);
      }
    }, "moveSegmentChainToTrack"),
    vt: any = (d as any)((h: any): any => {
      const b: any = (f as any)[(h as any).edgeIndex],
        C: any = ((b as any).indexOf as any)(((p as any).indexOf as any)(h)),
        L: any = [];
      return (C as any) > (0 as any) && ((L as any).push as any)((p as any)[(b as any)[(C as any) - (1 as any)]]), (C as any) < (((b as any).length as any) - (1 as any) as any) && ((L as any).push as any)((p as any)[(b as any)[(C as any) + (1 as any)]]), L;
    }, "getAdjacentSegmentsAlongEdge"),
    Vt: any = (d as any)((h: any, b: any): any => {
      if (((h as any).orientation as any) === ((b as any).orientation as any)) return !1;
      const C: any = ((h as any).orientation as any) === ("horizontal" as any) ? h : b,
        L: any = ((h as any).orientation as any) === ("horizontal" as any) ? b : h;
      return (((L as any).pipe as any).coord as any) > ((C as any).from as any) && (((L as any).pipe as any).coord as any) < ((C as any).to as any) && (((C as any).pipe as any).coord as any) > ((L as any).from as any) && (((C as any).pipe as any).coord as any) < ((L as any).to as any);
    }, "haveAnyCrossing"),
    jt: any = (d as any)((h: any, b: any): any => {
      for (const C of (h as any).tracks) if (!(((C as any).segments as any).some as any)((w: any): any => (((w as any).edgeIndex as any) !== ((b as any).edgeIndex as any) || ((w as any).segmentIndex as any) !== ((b as any).segmentIndex as any)) && (W as any)(w, b))) return (C as any).index;
      return -1;
    }, "findAvailableTrack"),
    Ut: any = (d as any)((h: any, b: any): any => {
      if (((h as any).trackIndex as any) === ((b as any).trackIndex as any)) return (W as any)(h, b);
      const C: any = (vt as any)(h),
        L: any = (vt as any)(b);
      return ((C as any).some as any)((w: any): any => ((L as any).some as any)((B: any): any => (Vt as any)(w, B)));
    }, "segmentsConflict"),
    te: any = (d as any)((h: any, b: any, C: any): any => {
      if ((et as any)(h, b, (((h as any).pipe as any).tracks as any)[(h as any).trackIndex], (((b as any).pipe as any).tracks as any)[(b as any).trackIndex])) return;
      const L: any = (jt as any)((h as any).pipe, b);
      (C as any)(b, (L as any) !== (-1 as any) ? L : (at as any)((h as any).pipe));
    }, "resolveTrackConflict"),
    Se: any = (d as any)((h: any): any => {
      let b: any = 0;
      for (let C: any = 0; (C as any) < ((h as any).length as any); C++) for (let L: any = (C as any) + (1 as any); (L as any) < ((h as any).length as any); L++) {
        const w: any = (h as any)[C],
          B: any = (h as any)[L];
        ((w as any).pipe as any) === ((B as any).pipe as any) && (Ut as any)(w, B) && (b++, (te as any)(w, B, xt));
      }
      return b;
    }, "resolveHandleConflicts"),
    de: any = new (Map as any)(),
    Ce: any = (d as any)((h: any): any => {
      if (((de as any).has as any)(h)) return ((de as any).get as any)(h);
      const b: any = (f as any)[h];
      if (((b as any).length as any) === (0 as any)) {
        const q: any = {
          dest: 0,
          deviation: 0,
          base: 0,
          delta: 0
        };
        return ((de as any).set as any)(h, q), q;
      }
      const L: any = (((p as any)[(b as any)[0]] as any).pipe as any).coord;
      let w: any = L;
      for (let q: any = 1; (q as any) < ((b as any).length as any); q++) {
        const z: any = (p as any)[(b as any)[q]];
        if (((z as any).orientation as any) === ("horizontal" as any)) {
          const Y: any = (z as any).from,
            ot: any = (z as any).to;
          w = (((Math as any).abs as any)((Y as any) - (L as any)) as any) > (((Math as any).abs as any)((ot as any) - (L as any)) as any) ? Y : ot;
          break;
        }
      }
      const B: any = ((Math as any).abs as any)((w as any) - (L as any)),
        U: any = {
          dest: w,
          deviation: B,
          base: L,
          delta: (w as any) - (L as any)
        };
      return ((de as any).set as any)(h, U), U;
    }, "getDestInfo"),
    dn: any = (d as any)((): any => {
      let h: any = 0;
      const b: any = new (Map as any)();
      for (const [L, w] of ((s as any).entries as any)()) (((f as any)[L] as any).length as any) !== (0 as any) && (w as any).start && (((b as any).has as any)((w as any).start) || ((b as any).set as any)((w as any).start, []), ((((b as any).get as any)((w as any).start) as any).push as any)(L));
      const C: any = (d as any)((L: any): any => {
        const w: any = (s as any)[L];
        if (!(w as any).start || !(w as any).end) return 0;
        const B: any = ((r as any).get as any)((w as any).start),
          U: any = ((r as any).get as any)((w as any).end);
        if (!B || !U) return 0;
        const q: any = (((U as any).x ?? 0) as any) - (((B as any).x ?? 0) as any),
          z: any = (((U as any).y ?? 0) as any) - (((B as any).y ?? 0) as any);
        return (((Math as any).abs as any)(q) as any) + (((Math as any).abs as any)(z) as any);
      }, "getEdgeDistance");
      for (const L of ((b as any).values as any)()) {
        ((L as any).sort as any)((B: any, U: any): any => {
          const q: any = (Ce as any)(B),
            z: any = (Ce as any)(U);
          if ((((Math as any).abs as any)(((q as any).deviation as any) - ((z as any).deviation as any)) as any) > (1 as any)) return ((q as any).deviation as any) - ((z as any).deviation as any);
          if ((((Math as any).abs as any)(((q as any).dest as any) - ((z as any).dest as any)) as any) > (1 as any)) return ((q as any).dest as any) - ((z as any).dest as any);
          const Y: any = (C as any)(B),
            ot: any = (C as any)(U);
          if ((((Math as any).abs as any)((Y as any) - (ot as any)) as any) > (1 as any)) return (ot as any) - (Y as any);
          const rt: any = ((f as any)[B] as any).length,
            st: any = ((f as any)[U] as any).length;
          if ((rt as any) !== (st as any)) return (rt as any) - (st as any);
          if ((rt as any) === (1 as any)) {
            const tt: any = ((f as any)[B] as any)[0],
              yt: any = ((f as any)[U] as any)[0];
            if ((p as any)[tt] && (p as any)[yt]) {
              const Rt: any = (p as any)[tt],
                Lt: any = (p as any)[yt],
                Dt: any = ((Math as any).abs as any)(((Rt as any).to as any) - ((Rt as any).from as any)),
                Jt: any = ((Math as any).abs as any)(((Lt as any).to as any) - ((Lt as any).from as any));
              if ((((Math as any).abs as any)((Dt as any) - (Jt as any)) as any) > (1 as any)) return (Dt as any) - (Jt as any);
            }
          }
          return 0;
        });
        const w: any = ((L as any).map as any)((B: any): any => (p as any)[((f as any)[B] as any)[0]]);
        h += (Se as any)(w);
      }
      return h;
    }, "fixSourceHandleCrossings"),
    un: any = (d as any)((): any => {
      let h: any = 0;
      const b: any = new (Map as any)();
      for (const [C, L] of ((s as any).entries as any)()) (((f as any)[C] as any).length as any) !== (0 as any) && (L as any).end && (((b as any).has as any)((L as any).end) || ((b as any).set as any)((L as any).end, []), ((((b as any).get as any)((L as any).end) as any).push as any)(C));
      for (const C of ((b as any).values as any)()) {
        ((C as any).sort as any)((w: any, B: any): any => {
          const U: any = (d as any)((Y: any): any => {
              const ot: any = (f as any)[Y];
              if (((ot as any).length as any) < (2 as any)) return 0;
              const rt: any = (p as any)[(ot as any)[((ot as any).length as any) - (2 as any)]];
              return ((Math as any).abs as any)(((rt as any).to as any) - ((rt as any).from as any));
            }, "getDist"),
            q: any = (U as any)(w),
            z: any = (U as any)(B);
          return (((Math as any).abs as any)((q as any) - (z as any)) as any) > (.1 as any) ? (q as any) - (z as any) : (w as any) - (B as any);
        });
        const L: any = ((C as any).map as any)((w: any): any => (p as any)[((f as any)[w] as any)[(((f as any)[w] as any).length as any) - (1 as any)]]);
        h += (Se as any)(L);
      }
      return h;
    }, "fixTargetHandleCrossings"),
    hn: any = (d as any)((): any => {
      let h: any = 0;
      for (const b of c) {
        const C: any = [];
        for (const L of (b as any).tracks) for (const w of (L as any).segments) {
          const B: any = (((f as any)[(w as any).edgeIndex] as any).find as any)((U: any): any => (((p as any)[U] as any).segmentIndex as any) === ((w as any).segmentIndex as any));
          (B as any) !== (void 0 as any) && ((C as any).push as any)((p as any)[B]);
        }
        ((C as any).sort as any)((L: any, w: any): any => ((L as any).edgeIndex as any) - ((w as any).edgeIndex as any) || ((L as any).segmentIndex as any) - ((w as any).segmentIndex as any));
        for (let L: any = 0; (L as any) < ((C as any).length as any); L++) for (let w: any = (L as any) + (1 as any); (w as any) < ((C as any).length as any); w++) {
          const B: any = (C as any)[L],
            U: any = (C as any)[w];
          (Ut as any)(B, U) && (h++, (te as any)(B, U, gt));
        }
      }
      return h;
    }, "fixPipeCrossings");
  let N: any = 0;
  const F: number = 10;
  for (; (N as any) < (F as any);) {
    let h: any = 0;
    if (h += (dn as any)(), h += (un as any)(), h += (hn as any)(), (h as any) === (0 as any)) break;
    N++;
  }
  const D: any = new (Map as any)();
  for (const h of c) {
    const b: any = [];
    (((h as any).tracks as any).forEach as any)((L: any): any => {
      (((L as any).segments as any).forEach as any)((w: any): any => {
        ((b as any).push as any)({
          edgeIndex: (w as any).edgeIndex,
          segmentIndex: (w as any).segmentIndex,
          trackIndex: (L as any).index,
          from: (w as any).from,
          to: (w as any).to
        });
      });
    }), ((b as any).sort as any)((L: any, w: any): any => ((L as any).from as any) - ((w as any).from as any));
    const C: any = [];
    if (((b as any).length as any) > (0 as any)) {
      let L: any = [(b as any)[0]],
        w: any = ((b as any)[0] as any).to;
      for (let B: any = 1; (B as any) < ((b as any).length as any); B++) {
        const U: any = (b as any)[B];
        ((U as any).from as any) < (w as any) ? (((L as any).push as any)(U), w = ((Math as any).max as any)(w, (U as any).to)) : (((C as any).push as any)(L), L = [U], w = (U as any).to);
      }
      ((C as any).push as any)(L);
    }
    for (const L of C) {
      const w: any = new (Set as any)();
      ((L as any).forEach as any)((tt: any): any => ((w as any).add as any)((tt as any).trackIndex));
      const B: any = new (Map as any)();
      ((L as any).forEach as any)((tt: any): any => {
        const yt: any = (Ce as any)((tt as any).edgeIndex);
        ((B as any).set as any)((tt as any).trackIndex, ((((B as any).get as any)((tt as any).trackIndex) ?? 0) as any) + ((yt as any).delta as any));
      });
      const U: any = (([...w] as any).filter as any)((tt: any): any => ((((B as any).get as any)(tt) ?? 0) as any) < (-1 as any)),
        q: any = (([...w] as any).filter as any)((tt: any): any => ((((B as any).get as any)(tt) ?? 0) as any) > (1 as any)),
        z: any = (([...w] as any).filter as any)((tt: any): any => (((Math as any).abs as any)(((B as any).get as any)(tt) ?? 0) as any) <= (1 as any));
      ((U as any).sort as any)((tt: any, yt: any): any => ((((B as any).get as any)(yt) ?? 0) as any) - ((((B as any).get as any)(tt) ?? 0) as any)), ((q as any).sort as any)((tt: any, yt: any): any => ((((B as any).get as any)(tt) ?? 0) as any) - ((((B as any).get as any)(yt) ?? 0) as any));
      const Y: any = (d as any)((tt: any, yt: any): any => {
        ((((L as any).filter as any)((Rt: any): any => ((Rt as any).trackIndex as any) === (tt as any)) as any).forEach as any)((Rt: any): any => {
          const Lt: any = ((y as any).has as any)((Rt as any).edgeIndex) ? (h as any).coord : yt;
          ((D as any).set as any)(`${(Rt as any).edgeIndex}-${(Rt as any).segmentIndex}`, Lt);
        });
      }, "assignCoord");
      let ot: any = 0;
      for (const tt of U) ot++, (Y as any)(tt, ((h as any).coord as any) - ((ot as any) * (Cn as any) as any));
      if (((z as any).length as any) === (0 as any) && ((w as any).size as any) > (0 as any)) {
        const tt: any = ((([...w] as any).sort as any)((Lt: any, Dt: any): any => (((Math as any).abs as any)(((B as any).get as any)(Lt) ?? 0) as any) - (((Math as any).abs as any)(((B as any).get as any)(Dt) ?? 0) as any)) as any)[0],
          yt: any = ((U as any).indexOf as any)(tt);
        (yt as any) !== (-1 as any) && ((U as any).splice as any)(yt, 1);
        const Rt: any = ((q as any).indexOf as any)(tt);
        (Rt as any) !== (-1 as any) && ((q as any).splice as any)(Rt, 1), ((z as any).push as any)(tt);
      }
      let rt: any = 0;
      for (const tt of z) {
        if ((rt as any) === (0 as any)) (Y as any)(tt, (h as any).coord);else {
          const yt: any = ((rt as any) % (2 as any) as any) === (1 as any) ? 1 : -1,
            Rt: any = ((Math as any).ceil as any)((rt as any) / (2 as any));
          (Y as any)(tt, ((h as any).coord as any) + ((((yt as any) * (Rt as any) as any) * (Cn as any) as any) * (.5 as any) as any));
        }
        rt++;
      }
      let st: any = 0;
      for (const tt of q) st++, (Y as any)(tt, ((h as any).coord as any) + ((st as any) * (Cn as any) as any));
    }
  }
  for (const [h, b] of ((s as any).entries as any)()) {
    const C: any = (f as any)[h] ?? [];
    if (((C as any).length as any) === (0 as any)) continue;
    const L: any = [],
      w: any = ((r as any).get as any)((b as any).start),
      B: any = ((r as any).get as any)((b as any).end),
      {
        pSrcPort: U,
        pDstPort: q
      }: any = (Q as any)(h, w, B),
      z: any = ((C as any).map as any)((rt: any): any => {
        const st: any = (p as any)[rt],
          tt: any = ((D as any).get as any)(`${(st as any).edgeIndex}-${(st as any).segmentIndex}`) ?? ((st as any).pipe as any).coord;
        return {
          orient: (st as any).orientation,
          coord: tt,
          from: (st as any).from,
          to: (st as any).to
        };
      });
    ((L as any).push as any)(U);
    for (let rt: any = 0; (rt as any) < ((z as any).length as any); rt++) {
      const st: any = (z as any)[rt],
        tt: any = (L as any)[((L as any).length as any) - (1 as any)],
        yt: any = ((st as any).orient as any) === ("vertical" as any) ? (tt as any).y : (tt as any).x,
        Rt: any = ((st as any).orient as any) === ("vertical" as any) ? (tt as any).x : (tt as any).y,
        Lt: any = (z as any)[(rt as any) + (1 as any)],
        Dt: any = (rt as any) < (((z as any).length as any) - (1 as any) as any);
      if ((((Math as any).abs as any)((Rt as any) - ((st as any).coord as any)) as any) > (ct as any) && ((L as any).push as any)((Me as any)(st, yt)), Dt && ((Lt as any).orient as any) === ((st as any).orient as any)) {
        if ((((Math as any).abs as any)(((st as any).coord as any) - ((Lt as any).coord as any)) as any) > (ct as any)) {
          const Jt: any = ((st as any).orient as any) === ("vertical" as any) ? ((yt as any) + ((Lt as any).from as any) as any) / (2 as any) : (no as any)(st, Lt);
          ((L as any).push as any)((Me as any)(st, Jt), (Me as any)(Lt, Jt));
        } else ((rt as any) === (0 as any) || (rt as any) === (((z as any).length as any) - (2 as any) as any)) && ((L as any).push as any)((Me as any)(st, (no as any)(st, Lt)));
      } else if (Dt) ((L as any).push as any)((Me as any)(st, (Lt as any).coord));else {
        const Jt: any = (((Math as any).abs as any)(((st as any).from as any) - (yt as any)) as any) < (((Math as any).abs as any)(((st as any).to as any) - (yt as any)) as any) ? (st as any).to : (st as any).from;
        ((L as any).push as any)((Me as any)(st, Jt));
      }
    }
    const Y: any = (L as any)[((L as any).length as any) - (1 as any)];
    ((((Math as any).abs as any)(((Y as any).x as any) - ((q as any).x as any)) as any) > (ct as any) || (((Math as any).abs as any)(((Y as any).y as any) - ((q as any).y as any)) as any) > (ct as any)) && ((L as any).push as any)(q);
    const ot: any = [];
    ((L as any).length as any) > (0 as any) && ((ot as any).push as any)((L as any)[0]);
    for (let rt: any = 1; (rt as any) < ((L as any).length as any); rt++) {
      const st: any = (L as any)[rt],
        tt: any = (ot as any)[((ot as any).length as any) - (1 as any)];
      ((((Math as any).abs as any)(((st as any).x as any) - ((tt as any).x as any)) as any) > (ct as any) || (((Math as any).abs as any)(((st as any).y as any) - ((tt as any).y as any)) as any) > (ct as any)) && ((ot as any).push as any)(st);
    }
    (b as any).points = ot;
  }
  for (const h of s) {
    const b: any = (h as any).__originalEdge;
    b && (h as any).points && ((b as any).points = (h as any).points);
  }
  (t as any).edges = ((((t as any).edges ?? []) as any).filter as any)((h: any): any => !(h as any).isLayoutOnly);
  const V: any = (d as any)((h: any, b: any): any => {
    const C: any = (b as any).x ?? 0,
      L: any = (b as any).y ?? 0,
      w: any = (b as any).width ?? 0,
      B: any = (b as any).height ?? 0;
    if ((w as any) <= (0 as any) || (B as any) <= (0 as any)) return h;
    const U: any = (C as any) - ((w as any) / (2 as any) as any),
      q: any = (C as any) + ((w as any) / (2 as any) as any),
      z: any = (L as any) - ((B as any) / (2 as any) as any),
      Y: any = (L as any) + ((B as any) / (2 as any) as any);
    if (((h as any).x as any) < (U as any) || ((h as any).x as any) > (q as any) || ((h as any).y as any) < (z as any) || ((h as any).y as any) > (Y as any)) return h;
    const ot: any = ((h as any).x as any) - (U as any),
      rt: any = (q as any) - ((h as any).x as any),
      st: any = ((h as any).y as any) - (z as any),
      tt: any = (Y as any) - ((h as any).y as any),
      yt: any = ((Math as any).min as any)(ot, rt, st, tt);
    return (yt as any) === (ot as any) ? {
      x: U,
      y: (h as any).y
    } : (yt as any) === (rt as any) ? {
      x: q,
      y: (h as any).y
    } : (yt as any) === (st as any) ? {
      x: (h as any).x,
      y: z
    } : {
      x: (h as any).x,
      y: Y
    };
  }, "nodeBoundaryClamp");
  for (const h of (t as any).edges) {
    const b: any = (h as any).points;
    if (!b || ((b as any).length as any) < (2 as any)) continue;
    const C: any = (h as any).start,
      L: any = (h as any).end,
      w: any = C ? ((r as any).get as any)(C) : void 0,
      B: any = L ? ((r as any).get as any)(L) : void 0;
    w && ((b as any)[0] = (V as any)((b as any)[0], w)), B && ((b as any)[((b as any).length as any) - (1 as any)] = (V as any)((b as any)[((b as any).length as any) - (1 as any)], B));
  }
  return t;
}
(d as any)(hr, "routeEdgesOrthogonal");
function gr(this: any, t: any): any {
  return (t as any).direction ?? "TB";
}
(d as any)(gr, "getSwimlaneDirection");
function pr(this: any, t: any): any {
  const e: any = (Jo as any)(t),
    n: any = ((t as any).config as any).flowchart?.nodeSpacing ?? 40,
    o: any = ((t as any).config as any).flowchart?.rankSpacing ?? 100,
    s: any = ((t as any).config as any).swimlane?.ignoreCrossLaneEdges ?? !0,
    r: any = ((t as any).config as any).swimlane?.optimizeRanksByCrossings ?? !0,
    i: any = ((t as any).config as any).swimlane?.automaticLaneOrdering ?? !1,
    c: any = (gr as any)(t),
    {
      ordered: a,
      coordinates: l
    }: any = (ur as any)(e, {
      nodeGap: n,
      layerGap: o,
      ignoreCrossLaneEdges: s,
      optimizeRanksByCrossings: r,
      automaticLaneOrdering: i,
      direction: c
    });
  (Zo as any)(e, a, l, {
    nodeGap: n,
    layerGap: o
  });
  for (const g of (t as any).edges ?? []) delete (g as any).points;
  (hr as any)(t, c);
  for (const g of (t as any).edges ?? []) (!(g as any).curve || ((g as any).curve as any) === ("basis" as any)) && ((g as any).curve = "rounded");
  return (Rs as any)(t, c), (As as any)(t), c;
}
(d as any)(pr, "runSwimlaneLayoutCore");
async function Qr(this: any, t: any, e: any): Promise<any> {
  const n: any = ((e as any).select as any)("g");
  (wr as any)(n, (t as any).markers, (t as any).type, (t as any).diagramId), (Ar as any)(), (Rr as any)(), (Nr as any)(), (Tr as any)(), (qo as any)(t);
  const o: any = (Qo as any)(t);
  (t as any).nodes = (o as any).nodes, (t as any).edges = (o as any).edges;
  const {
    groups: s
  }: any = await (_o as any)(n, t);
  (pr as any)(t), await (Uo as any)(t, s);
}
(d as any)(Qr, "render");
export { Qr as render };
//# debugId=9db616d7-69dd-408a-860e-d1211324acc9
