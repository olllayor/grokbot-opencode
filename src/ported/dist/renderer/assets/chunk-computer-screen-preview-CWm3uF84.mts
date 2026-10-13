declare var ResizeObserver: any;
declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "8abef767-0824-48c3-8335-ffd980710088", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-8abef767-0824-48c3-8335-ffd980710088");
  } catch (e: any) {}
} as any)();
import { c as os, r as cs, j as n, u as vs, T as I, p as xs } from "./index.eager-vendor-Qbf9YA6n.js";
import { b7 as qs, fi as us, fj as gs, r as R, fC as js, ak as _s, fD as Ms, fE as Es, fF as Ts, fG as Bs, fn as Hs, fp as Os, fm as Vs, fr as Ws, aW as Fs, aK as Us, a$ as $s, a_ as Ls, fH as Gs } from "./index.eager-app-Cj5f8Gby.js";
import { aY as ds } from "./index.eager-platform-Dcfeegfw.js";
import { bP as Ds, z as rs, W as bs, p as Xs } from "./index-ZYxf-aBb.js";
import { r as Ys, a as Ks, b as Qs, C as Js, f as Zs } from "./chunk-box-desktop-modal-CuGtBMZ_.js";
import "./index.eager-common-CdCvBQNJ.js";
function se(this: any, e: any, s: any): any {
  let t: any = null,
    l: any = null;
  const i: any = new (Set as any)();
  let h: any = null;
  return {
    subscribe: (p: any): any => (((i as any).add as any)(p), (h as any) == (null as any) && (s as any) != (null as any) && (h = (((e as any).foreverBox as any).subscribeComputerActions as any)((c: any): any => {
      if (((c as any).agentId as any) !== (s as any)) return;
      const k: any = (((e as any).clock as any).monotonicNow as any)();
      (t as any) != (null as any) && (((c as any).x as any) !== ((t as any).x as any) || ((c as any).y as any) !== ((t as any).y as any)) && (l = k), t = {
        x: (c as any).x,
        y: (c as any).y,
        type: (c as any).type,
        seq: ((t?.seq ?? 0) as any) + (1 as any),
        msSinceMove: (l as any) == (null as any) ? null : (k as any) - (l as any),
        clickSeq: ((t?.clickSeq ?? 0) as any) + ((((c as any).type as any) === ("click" as any) ? 1 : 0) as any)
      };
      for (const w of [...i]) (w as any)();
    })), (): any => {
      ((i as any).delete as any)(p), ((i as any).size as any) === (0 as any) && (h?.(), h = null);
    }),
    get: (): any => t
  };
}
function ee(this: any, e: any): any {
  const s: any = ((os as any).c as any)(3),
    t: any = (qs as any)();
  let l: any;
  ((s as any)[0] as any) !== (e as any) || ((s as any)[1] as any) !== (t as any) ? (l = (se as any)(t, e), (s as any)[0] = e, (s as any)[1] = t, (s as any)[2] = l) : l = (s as any)[2];
  const i: any = l;
  return ((cs as any).useSyncExternalStore as any)((i as any).subscribe, (i as any).get, (i as any).get);
}
const ne: number = .75,
  ae: number = 1.8,
  te: number = 2.85;
function le(this: any, e: any): any {
  const s: any = ((e as any) / (us as any) as any) * (te as any);
  return ((Math as any).min as any)(ae, ((Math as any).max as any)(ne, s));
}
const ie: number = 500,
  Ns: string = "M2.002 9.538c-.023.411.207.794.581.966l7.504 3.442 3.442 7.503c.164.356.52.583.909.583l.057-.002a1 1 0 0 0 .894-.686l5.595-17.032c.117-.358.023-.753-.243-1.02s-.66-.358-1.02-.243L2.688 8.645a.997.997 0 0 0-.686.893z";
function de(this: any, e: any): any {
  return (e as any) == (null as any) ? 0 : ((Math as any).max as any)(0, (ie as any) - (e as any));
}
function re(this: any, {
  cursor: e,
  hasFrame: s
}: any): any {
  const t: any = (e as any) != (null as any) && s;
  return {
    isGliding: ((e?.seq ?? 0) as any) > (1 as any),
    isVisible: t,
    press: t && ((e as any).type as any) === ("click" as any) ? {
      key: (e as any).clickSeq,
      delayMs: (de as any)((e as any).msSinceMove)
    } : null
  };
}
function zs(this: any, e: any): any {
  (zs as any).d = 870;
  const s: any = ((os as any).c as any)(32),
    {
      agentId: t
    }: any = e,
    l: any = (ee as any)(t),
    [i, h]: any = ((cs as any).useState as any)(null);
  let p: any;
  ((s as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (p = (q: any): any => {
    if ((q as any) == (null as any)) return;
    const es: any = new (ResizeObserver as any)((): any => {
      const g: any = ((q as any).getBoundingClientRect as any)();
      (h as any)({
        w: (g as any).width,
        h: (g as any).height
      });
    });
    return ((es as any).observe as any)(q), (): any => ((es as any).disconnect as any)();
  }, (s as any)[0] = p) : p = (s as any)[0];
  const c: any = p,
    k: any = (l as any) != (null as any) && (i as any) != (null as any),
    w: any = k ? (((l as any).x as any) / (us as any) as any) * ((i as any).w as any) : 0,
    y: any = k ? (((l as any).y as any) / (gs as any) as any) * ((i as any).h as any) : 0;
  let v: any;
  ((s as any)[1] as any) !== (i as any) ? (v = (i as any) != (null as any) ? (le as any)((i as any).w) : 1, (s as any)[1] = i, (s as any)[2] = v) : v = (s as any)[2];
  const x: any = `translate(${w}px, ${y}px) scale(${v})`;
  let a: any, o: any, m: any, r: any, f: any;
  ((s as any)[3] as any) !== (l as any) || ((s as any)[4] as any) !== (i as any) ? (a = (re as any)({
    cursor: l,
    hasFrame: (i as any) != (null as any)
  }), m = !0, ((s as any)[10] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (r = (R as any)("sand-computer-cursor-overlay", "sand-10l6tqk sand-10a8y8t sand-b3r6kr sand-47corl sand-1u8a7rm"), (s as any)[10] = r) : r = (s as any)[10], f = c, o = (R as any)("sand-computer-cursor", (({
    0: {
      className: "sand-10l6tqk sand-13vifvy sand-u96u03 sand-g01cxk sand-1hj3fc7 sand-1q1rmc8 sand-19991ni sand-xqiezv sand-wji4o3"
    },
    2: {
      className: "sand-10l6tqk sand-13vifvy sand-u96u03 sand-g01cxk sand-1hj3fc7 sand-1q1rmc8 sand-wcsmn1 sand-1ympp8d sand-t2a83n sand-4oa4c9 sand-ne5g9v sand-7v8fk2"
    },
    1: {
      className: "sand-10l6tqk sand-13vifvy sand-u96u03 sand-1hj3fc7 sand-1q1rmc8 sand-19991ni sand-xqiezv sand-wji4o3 sand-1hc1fzr"
    },
    3: {
      className: "sand-10l6tqk sand-13vifvy sand-u96u03 sand-1hj3fc7 sand-1q1rmc8 sand-wcsmn1 sand-1ympp8d sand-t2a83n sand-4oa4c9 sand-ne5g9v sand-7v8fk2 sand-1hc1fzr"
    }
  } as any)[((!!(a as any).isGliding as any) << (1 as any) as any) | ((!!(a as any).isVisible as any) << (0 as any) as any)] as any).className), (s as any)[3] = l, (s as any)[4] = i, (s as any)[5] = a, (s as any)[6] = o, (s as any)[7] = m, (s as any)[8] = r, (s as any)[9] = f) : (a = (s as any)[5], o = (s as any)[6], m = (s as any)[7], r = (s as any)[8], f = (s as any)[9]);
  let d: any;
  ((s as any)[11] as any) !== (x as any) ? (d = {
    transform: x
  }, (s as any)[11] = x, (s as any)[12] = d) : d = (s as any)[12];
  const C: any = (a as any).press?.key ?? "rest";
  let S: any;
  ((s as any)[13] as any) !== ((a as any).press as any) ? (S = (R as any)("sand-computer-cursor-glyph", (({
    0: {
      className: "sand-10l6tqk sand-wc5g4n sand-1ct5tfr sand-1lliihq sand-vy4d1p sand-xk0z11 sand-55qf4y sand-fs3179"
    },
    1: {
      className: "sand-10l6tqk sand-wc5g4n sand-1ct5tfr sand-1lliihq sand-vy4d1p sand-xk0z11 sand-55qf4y sand-fs3179 sand-18imfhs sand-1aquc0h sand-b8lv0f sand-1u6ievf"
    }
  } as any)[((((a as any).press as any) != (null as any)) as any) << (0 as any)] as any).className), (s as any)[13] = (a as any).press, (s as any)[14] = S) : S = (s as any)[14];
  let _: any;
  ((s as any)[15] as any) !== ((a as any).press as any) ? (_ = ((a as any).press as any) == (null as any) ? void 0 : {
    animationDelay: `${((a as any).press as any).delayMs}ms`
  }, (s as any)[15] = (a as any).press, (s as any)[16] = _) : _ = (s as any)[16];
  let P: any, z: any;
  ((s as any)[17] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (P = ((n as any).jsx as any)("path", {
    d: Ns,
    fill: "white",
    stroke: "white",
    strokeLinejoin: "round",
    strokeWidth: "1.5"
  }), z = ((n as any).jsx as any)("path", {
    d: Ns,
    fill: "black"
  }), (s as any)[17] = P, (s as any)[18] = z) : (P = (s as any)[17], z = (s as any)[18]);
  let j: any;
  ((s as any)[19] as any) !== (_ as any) || ((s as any)[20] as any) !== (C as any) || ((s as any)[21] as any) !== (S as any) ? (j = ((n as any).jsxs as any)("svg", {
    className: S,
    style: _,
    fill: "none",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: [P, z]
  }, C), (s as any)[19] = _, (s as any)[20] = C, (s as any)[21] = S, (s as any)[22] = j) : j = (s as any)[22];
  let b: any;
  ((s as any)[23] as any) !== (j as any) || ((s as any)[24] as any) !== (o as any) || ((s as any)[25] as any) !== (d as any) ? (b = ((n as any).jsx as any)("span", {
    className: o,
    style: d,
    children: j
  }), (s as any)[23] = j, (s as any)[24] = o, (s as any)[25] = d, (s as any)[26] = b) : b = (s as any)[26];
  let u: any;
  return ((s as any)[27] as any) !== (b as any) || ((s as any)[28] as any) !== (m as any) || ((s as any)[29] as any) !== (r as any) || ((s as any)[30] as any) !== (f as any) ? (u = ((n as any).jsx as any)("div", {
    "aria-hidden": m,
    className: r,
    ref: f,
    children: b
  }), (s as any)[27] = b, (s as any)[28] = m, (s as any)[29] = r, (s as any)[30] = f, (s as any)[31] = u) : u = (s as any)[31], u;
}
function Cs(this: any, e: any): any {
  return ((e as any).find as any)((s: any): any => ((s as any).handoff as any) != (null as any)) ?? (e as any)[0] ?? null;
}
function ce(this: any, e: any, s: any): any {
  return (Cs as any)(e)?.vncUrl ?? (s as any).vncUrl;
}
const ws: string = "--sand-computer-preview-fit";
function oe(this: any, e: any): any {
  return ((e as any).width as any) <= (0 as any) || ((e as any).height as any) <= (0 as any) ? 0 : ((Math as any).min as any)(((e as any).width as any) / (us as any), ((e as any).height as any) / (gs as any));
}
function ue(this: any, e: any): any {
  if ((e as any) == (null as any)) return;
  let s: any = null;
  const t: any = (): any => {
    const i: any = (String as any)((oe as any)(((e as any).getBoundingClientRect as any)()));
    (i as any) !== (s as any) && (s = i, (((e as any).style as any).setProperty as any)(ws, i));
  };
  (t as any)();
  const l: any = new (ResizeObserver as any)(t);
  return ((l as any).observe as any)(e), (): any => {
    ((l as any).disconnect as any)(), (((e as any).style as any).removeProperty as any)(ws);
  };
}
function me(this: any, e: any, s: any): any {
  return ((s as any).frame as any) === ("mounted" as any) ? (s as any).isPaneOpen || (e as any) === ((s as any).agentId as any) ? (s as any).agentId : null : ((s as any).frame as any) === ("hidden" as any) && (e as any) === ((s as any).agentId as any) ? e : null;
}
const fe: any = {
    positionAnchor: Ts,
    top: "anchor(top)",
    right: "anchor(right)",
    bottom: "anchor(bottom)",
    left: "anchor(left)"
  },
  he: any = {
    positionAnchor: Es,
    top: "anchor(top)",
    left: "anchor(left)",
    width: "anchor-size(width)",
    height: "anchor-size(height)"
  };
function pe(this: any, e: any): any {
  (pe as any).d = 873;
  const s: any = ((os as any).c as any)(23),
    {
      agentId: t,
      view: l,
      monitors: i,
      isPaneOpen: h
    }: any = e;
  let p: any;
  ((s as any)[0] as any) !== (t as any) ? (p = (): any => ((js as any).stateFor as any)(t), (s as any)[0] = t, (s as any)[1] = p) : p = (s as any)[1];
  const c: any = ((cs as any).useSyncExternalStore as any)((js as any).subscribe, p),
    k: any = (_s as any)("info-pane"),
    w: any = (Ms as any)(),
    y: any = h && (c as any) === ("mounted" as any),
    [v, ss]: any = ((cs as any).useState as any)(null);
  let x: any;
  ((s as any)[2] as any) !== (t as any) || ((s as any)[3] as any) !== (c as any) || ((s as any)[4] as any) !== (v as any) || ((s as any)[5] as any) !== (h as any) ? (x = (me as any)(v, {
    agentId: t,
    isPaneOpen: h,
    frame: c
  }), (s as any)[2] = t, (s as any)[3] = c, (s as any)[4] = v, (s as any)[5] = h, (s as any)[6] = x) : x = (s as any)[6];
  const a: any = x;
  (a as any) !== (v as any) && (ss as any)(a);
  let o: any;
  ((s as any)[7] as any) !== (y as any) ? (o = ({
    0: {
      className: "sand-10l6tqk sand-9dt7sq sand-47corl"
    },
    1: {
      className: "sand-10l6tqk sand-9dt7sq sand-47corl sand-lshs6z"
    }
  } as any)[(!y as any) << (0 as any)], (s as any)[7] = y, (s as any)[8] = o) : o = (s as any)[8];
  let m: any;
  ((s as any)[9] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (m = {
    className: "sand-ixxii4 sand-9f619 sand-hojbe8 sand-b3r6kr sand-i07v4r sand-1ahgo13"
  }, (s as any)[9] = m) : m = (s as any)[9];
  let r: any;
  ((s as any)[10] as any) !== (t as any) || ((s as any)[11] as any) !== (k as any) || ((s as any)[12] as any) !== (y as any) || ((s as any)[13] as any) !== (w as any) || ((s as any)[14] as any) !== (i as any) || ((s as any)[15] as any) !== (a as any) || ((s as any)[16] as any) !== (l as any) ? (r = w ? ((n as any).jsx as any)(Ds, {
    agentId: t ?? "",
    announcesConnecting: y && !k,
    isViewerVisible: y,
    keepsAgentDesktops: (a as any) != (null as any),
    src: y ? (ce as any)(i, l) : null
  }) : null, (s as any)[10] = t, (s as any)[11] = k, (s as any)[12] = y, (s as any)[13] = w, (s as any)[14] = i, (s as any)[15] = a, (s as any)[16] = l, (s as any)[17] = r) : r = (s as any)[17];
  let f: any;
  ((s as any)[18] as any) !== (r as any) ? (f = ((n as any).jsx as any)("div", {
    ...m,
    ref: ue,
    style: he,
    children: r
  }), (s as any)[18] = r, (s as any)[19] = f) : f = (s as any)[19];
  let d: any;
  return ((s as any)[20] as any) !== (o as any) || ((s as any)[21] as any) !== (f as any) ? (d = ((n as any).jsx as any)("div", {
    ...o,
    ref: Bs,
    style: fe,
    children: f
  }), (s as any)[20] = o, (s as any)[21] = f, (s as any)[22] = d) : d = (s as any)[22], d;
}
const ys: any = {
  open: {
    kVAEAm: "sand-10l6tqk",
    kpwlN0: "sand-10a8y8t",
    kY2c9j: "sand-htitgo",
    k1xSpc: "sand-78zum5",
    kGNEyG: "sand-6s0dn4",
    kjj79g: "sand-l56j7k",
    keoZOQ: "sand-dj266r",
    k71WvV: "sand-14z9mp",
    k1K539: "sand-at24cr",
    keTefX: "sand-1lziwak",
    kmVPX3: "sand-1717udv",
    kMzoRj: "sand-c342km",
    ksu8eU: "sand-ng3xce",
    kaIpWk: "sand-hojbe8",
    kWkggS: "sand-jbqb8w",
    kysU6D: "sand-jyslct",
    k3lkva: "sand-1lugfcp",
    kkrTdU: "sand-1ypdohk",
    "--sand-computer-open-reveal": "sand-9swre5 sand-nch7ns sand-1hgj18l",
    $$css: !0
  },
  openPill: {
    k1xSpc: "sand-3nfvp2",
    kGNEyG: "sand-6s0dn4",
    kOIVth: "sand-pkkfsy",
    kaIpWk: "sand-1i4c3av",
    k8WAf4: "sand-12ffz05",
    kg3NbH: "sand-w3enoh",
    kWkggS: "sand-1846v19",
    kMwMTN: "sand-18ti0zn",
    kfzvcC: "sand-47corl",
    kSiTet: "sand-1i4knns",
    k1ekBW: "sand-19991ni",
    kIyJzY: "sand-1firant",
    kAMwcw: "sand-9lcvmn",
    $$css: !0
  },
  attentionBody: {
    kMwMTN: "sand-1wd3ewq",
    kHjlTd: "sand-j0a0fe",
    $$css: !0
  }
};
function Ss(this: any, e: any): any {
  return (e as any).isStatusUnavailable ? !1 : !(e as any).isStatusKnown || ((e as any).phase as any) === ("pulling" as any) || ((e as any).phase as any) === ("starting" as any);
}
function ke(this: any, e: any): any {
  (ke as any).d = 874;
  const s: any = ((os as any).c as any)(77),
    {
      agentId: t,
      view: l,
      monitors: i,
      isModalOpen: h,
      isVisible: p,
      subjectLabel: c,
      recordingAgentName: k,
      baseHandoff: w,
      onOpen: y,
      onHandBackHandoff: v,
      onDismissHandoff: ss
    }: any = e,
    {
      _: x
    }: any = (vs as any)(),
    {
      _: a
    }: any = (vs as any)(),
    o: any = (Hs as any)(),
    m: any = (Os as any)(),
    r: any = (Vs as any)(),
    f: any = (_s as any)("info-pane"),
    d: any = (Cs as any)(i),
    C: any = (Ys as any)(d, w),
    S: any = (Ks as any)(d),
    _: any = ((S as any).kind as any) === ("monitor" as any) ? (S as any).subagentId : null,
    P: any = d?.vncUrl ?? (l as any).vncUrl,
    z: any = (Ws as any)(),
    j: any = (z as any) === ("asleep" as any),
    b: any = (z as any) === ("away" as any),
    u: any = (P as any) != (null as any) && !j && !b,
    q: any = !j && !b && (Ss as any)(l),
    es: any = b && ((P as any) != (null as any) || (Ss as any)(l) || (l as any).isStatusUnavailable),
    g: any = ((o as any).state as any) === ("recording" as any) ? (o as any).agentId : null,
    N: any = (g as any) === (t as any),
    ms: any = (g as any) != (null as any) && !N;
  let ns: any;
  ((s as any)[0] as any) !== (a as any) || ((s as any)[1] as any) !== (k as any) ? (ns = (k as any) == (null as any) ? (a as any)({
    id: "68rgYg"
  }) : (a as any)({
    id: "3h2s4g",
    values: {
      recordingAgentName: k
    }
  }), (s as any)[0] = a, (s as any)[1] = k, (s as any)[2] = ns) : ns = (s as any)[2];
  const fs: any = ns,
    A: any = (Qs as any)(x, {
      hostPhase: z,
      isScreenLoading: !1,
      isScreenUnavailable: (l as any).isStatusUnavailable,
      subjectLabel: c,
      emptyMessage: void 0,
      isEmptyLoading: q,
      pullPercent: (l as any).pullPercent
    }),
    M: any = (A as any).isBusy || (A as any).hasRetry || j || es;
  if ((Fs as any)(!h && p && !f && !u && (A as any).isBusy ? (A as any).message : null), h) return null;
  let Z: any = (l as any).phase;
  (l as any).isStatusUnavailable ? Z = "error" : (l as any).isStatusKnown || (Z = "loading");
  const hs: any = q ? !0 : void 0;
  let E: any;
  ((s as any)[3] as any) !== (a as any) ? (E = (a as any)({
    id: "PVszY+"
  }), (s as any)[3] = a, (s as any)[4] = E) : E = (s as any)[4];
  let T: any;
  ((s as any)[5] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (T = (R as any)("sand-computer-preview", "sand-78zum5 sand-dt5ytf sand-pkkfsy sand-87ps6o"), (s as any)[5] = T) : T = (s as any)[5];
  const Ps: any = Z,
    As: string = "region",
    ps: any = (C as any) != (null as any) ? ((n as any).jsxs as any)("div", {
      "aria-label": (a as any)({
        id: "DQruXP"
      }),
      className: (R as any)("sand-computer-preview__attention", "sand-9f619 sand-78zum5 sand-dt5ytf sand-1dbef6d sand-h8yej3 sand-a0y8cy sand-1pkpdue sand-1xvwvse sand-u624df"),
      role: "group",
      children: [((n as any).jsxs as any)("span", {
        className: "sand-78zum5 sand-dt5ytf sand-137clkk sand-euugli",
        children: [((n as any).jsx as any)(ds, {
          color: "yellow",
          size: "md",
          weight: "medium",
          children: ((n as any).jsx as any)(I, {
            id: "DQruXP"
          })
        }), ((n as any).jsx as any)(ds, {
          rootStyle: (ys as any).attentionBody,
          size: "md",
          children: (((((C as any).instruction as any).trim as any)() as any).length as any) > (0 as any) ? (C as any).instruction : (a as any)({
            id: "JnE9gk",
            values: {
              subjectLabel: c
            }
          })
        })]
      }), ((n as any).jsxs as any)("div", {
        className: "sand-78zum5 sand-6s0dn4 sand-13a6bvl sand-1a02dak sand-11twubx",
        children: [((n as any).jsx as any)(rs, {
          onClick: (): any => (ss as any)(_),
          size: "sm",
          variant: "secondary",
          children: ((n as any).jsx as any)(I, {
            id: "+P0Cn2"
          })
        }), ((n as any).jsx as any)(rs, {
          onClick: (): any => (v as any)(_),
          size: "sm",
          variant: "primary",
          children: ((n as any).jsx as any)(I, {
            id: "6gLBI0"
          })
        })]
      })]
    }) : null;
  let as: any;
  ((s as any)[6] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (as = {
    className: "sand-1n2onr6"
  }, (s as any)[6] = as) : as = (s as any)[6];
  const Is: any = (as as any).className;
  let B: any;
  ((s as any)[7] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (B = (R as any)("sand-computer-preview__frame", "sand-1n2onr6 sand-78zum5 sand-6s0dn4 sand-l56j7k sand-h8yej3 sand-9f619 sand-hojbe8 sand-b3r6kr sand-4b2ntj"), (s as any)[7] = B) : B = (s as any)[7];
  let H: any;
  ((s as any)[8] as any) !== (t as any) ? (H = (Rs: any): any => (Gs as any)(Rs, t), (s as any)[8] = t, (s as any)[9] = H) : H = (s as any)[9];
  let ts: any;
  ((s as any)[10] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ts = {
    aspectRatio: `${us} / ${gs}`
  }, (s as any)[10] = ts) : ts = (s as any)[10];
  let O: any;
  ((s as any)[11] as any) !== (M as any) || ((s as any)[12] as any) !== (u as any) ? (O = !u && !M ? ((n as any).jsx as any)(bs, {
    "aria-hidden": !0,
    name: "device-desktop",
    size: "base"
  }) : null, (s as any)[11] = M, (s as any)[12] = u, (s as any)[13] = O) : O = (s as any)[13];
  let V: any;
  ((s as any)[14] as any) !== (a as any) || ((s as any)[15] as any) !== (d?.title as any) ? (V = d?.title ?? (a as any)({
    id: "Cfg0eW"
  }), (s as any)[14] = a, (s as any)[15] = d?.title, (s as any)[16] = V) : V = (s as any)[16];
  let W: any;
  ((s as any)[17] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (W = (R as any)("sand-computer-preview__open", ((xs as any)((ys as any).open, (Us as any).keyboardFocus) as any).className), (s as any)[17] = W) : W = (s as any)[17];
  let F: any;
  ((s as any)[18] as any) !== (d?.subagentId as any) || ((s as any)[19] as any) !== (y as any) ? (F = (): any => (y as any)(d?.subagentId), (s as any)[18] = d?.subagentId, (s as any)[19] = y, (s as any)[20] = F) : F = (s as any)[20];
  const ks: any = d?.title;
  let U: any;
  ((s as any)[21] as any) !== (u as any) || ((s as any)[22] as any) !== (N as any) ? (U = u && !N ? ((n as any).jsxs as any)("span", {
    className: ((xs as any)((ys as any).openPill, (Ls as any).label, ($s as any).regular) as any).className,
    children: [((n as any).jsx as any)(bs, {
      "aria-hidden": !0,
      name: "arrows-expand-simple",
      size: "sm"
    }), ((n as any).jsx as any)(I, {
      id: "1TNIig"
    })]
  }) : null, (s as any)[21] = u, (s as any)[22] = N, (s as any)[23] = U) : U = (s as any)[23];
  let $: any;
  ((s as any)[24] as any) !== (V as any) || ((s as any)[25] as any) !== (W as any) || ((s as any)[26] as any) !== (F as any) || ((s as any)[27] as any) !== (ks as any) || ((s as any)[28] as any) !== (U as any) ? ($ = ((n as any).jsx as any)("button", {
    "aria-label": V,
    className: W,
    onClick: F,
    title: ks,
    type: "button",
    children: U
  }), (s as any)[24] = V, (s as any)[25] = W, (s as any)[26] = F, (s as any)[27] = ks, (s as any)[28] = U, (s as any)[29] = $) : $ = (s as any)[29];
  let L: any;
  ((s as any)[30] as any) !== (M as any) || ((s as any)[31] as any) !== (u as any) || ((s as any)[32] as any) !== (A as any) || ((s as any)[33] as any) !== ((l as any).retryStatus as any) ? (L = !u && M ? ((n as any).jsx as any)("span", {
    className: "sand-10l6tqk sand-10a8y8t sand-zkaem6 sand-78zum5 sand-6s0dn4 sand-l56j7k sand-47corl",
    children: ((n as any).jsx as any)(Js, {
      copy: A,
      onRetry: (l as any).retryStatus,
      tone: "pane"
    })
  }) : null, (s as any)[30] = M, (s as any)[31] = u, (s as any)[32] = A, (s as any)[33] = (l as any).retryStatus, (s as any)[34] = L) : L = (s as any)[34];
  let G: any;
  ((s as any)[35] as any) !== (t as any) || ((s as any)[36] as any) !== (u as any) || ((s as any)[37] as any) !== (d?.subagentId as any) ? (G = u ? ((n as any).jsx as any)(zs, {
    agentId: d?.subagentId ?? t
  }) : null, (s as any)[35] = t, (s as any)[36] = u, (s as any)[37] = d?.subagentId, (s as any)[38] = G) : G = (s as any)[38];
  let D: any;
  ((s as any)[39] as any) !== (B as any) || ((s as any)[40] as any) !== (H as any) || ((s as any)[41] as any) !== (O as any) || ((s as any)[42] as any) !== ($ as any) || ((s as any)[43] as any) !== (L as any) || ((s as any)[44] as any) !== (G as any) ? (D = ((n as any).jsxs as any)("div", {
    className: B,
    ref: H,
    style: ts,
    children: [O, $, L, G]
  }), (s as any)[39] = B, (s as any)[40] = H, (s as any)[41] = O, (s as any)[42] = $, (s as any)[43] = L, (s as any)[44] = G, (s as any)[45] = D) : D = (s as any)[45];
  let X: any;
  ((s as any)[46] as any) !== (N as any) || ((s as any)[47] as any) !== (g as any) || ((s as any)[48] as any) !== (r as any) || ((s as any)[49] as any) !== (m as any) || ((s as any)[50] as any) !== ((o as any).startedAtMs as any) ? (X = N ? ((n as any).jsxs as any)((n as any).Fragment, {
    children: [((n as any).jsx as any)("span", {
      "aria-hidden": !0,
      className: "sand-10l6tqk sand-10a8y8t sand-9f619 sand-hojbe8 sand-dh2fpr sand-1y0btm7 sand-jz30o7 sand-47corl sand-zkaem6",
      "data-recording-frame": "true"
    }), ((n as any).jsx as any)("span", {
      className: "sand-10l6tqk sand-fr5jun sand-rotz4w sand-zkaem6 sand-3nfvp2 sand-6s0dn4 sand-17d4w8g sand-1kogg8i sand-j8oexa sand-dqyycr sand-1icupl1 sand-104s22n sand-y5h43f sand-xzm5a7 sand-ss6m8b sand-47corl",
      children: ((n as any).jsx as any)(I, {
        id: "Od1fMg",
        values: {
          0: (Zs as any)((m as any) - (((o as any).startedAtMs ?? m) as any))
        }
      })
    }), ((n as any).jsx as any)("span", {
      className: "sand-10l6tqk sand-1jn9clo sand-1nrll8i sand-uuh30 sand-zkaem6",
      children: ((n as any).jsx as any)(rs, {
        onClick: (): any => ((r as any).stop as any)(g, !0),
        size: "sm",
        variant: "primary",
        children: ((n as any).jsx as any)(I, {
          id: "n568PW"
        })
      })
    })]
  }) : null, (s as any)[46] = N, (s as any)[47] = g, (s as any)[48] = r, (s as any)[49] = m, (s as any)[50] = (o as any).startedAtMs, (s as any)[51] = X) : X = (s as any)[51];
  let Y: any;
  ((s as any)[52] as any) !== (D as any) || ((s as any)[53] as any) !== (X as any) ? (Y = ((n as any).jsxs as any)("div", {
    className: Is,
    children: [D, X]
  }), (s as any)[52] = D, (s as any)[53] = X, (s as any)[54] = Y) : Y = (s as any)[54];
  let K: any;
  ((s as any)[55] as any) !== (a as any) || ((s as any)[56] as any) !== (ms as any) || ((s as any)[57] as any) !== (g as any) || ((s as any)[58] as any) !== (fs as any) || ((s as any)[59] as any) !== (r as any) ? (K = ms ? ((n as any).jsxs as any)("div", {
    className: "sand-78zum5 sand-6s0dn4 sand-pkkfsy sand-h8yej3",
    children: [((n as any).jsx as any)("span", {
      className: "sand-1iyjqo2 sand-s83m0k sand-euugli",
      children: ((n as any).jsx as any)(ds, {
        color: "secondary",
        size: "sm",
        children: fs
      })
    }), ((n as any).jsxs as any)("span", {
      className: "sand-78zum5 sand-6s0dn4 sand-11twubx sand-2lah0s",
      children: [((n as any).jsx as any)(rs, {
        "aria-label": (a as any)({
          id: "ITj4Ys"
        }),
        onClick: (): any => ((r as any).stop as any)(g, !0),
        size: "sm",
        variant: "primary",
        children: ((n as any).jsx as any)(I, {
          id: "n568PW"
        })
      }), ((n as any).jsx as any)(Xs, {
        "aria-label": (a as any)({
          id: "joVvhG"
        }),
        icon: "close",
        onClick: (): any => ((r as any).stop as any)(g, !1),
        size: "sm",
        title: (a as any)({
          id: "joVvhG"
        })
      })]
    })]
  }) : null, (s as any)[55] = a, (s as any)[56] = ms, (s as any)[57] = g, (s as any)[58] = fs, (s as any)[59] = r, (s as any)[60] = K) : K = (s as any)[60];
  let ls: any;
  ((s as any)[61] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ls = {
    className: "sand-1lliihq sand-2b8uid"
  }, (s as any)[61] = ls) : ls = (s as any)[61];
  let Q: any;
  ((s as any)[62] as any) !== (a as any) || ((s as any)[63] as any) !== (N as any) || ((s as any)[64] as any) !== (c as any) ? (Q = (a as any)(N ? {
    id: "mv98HR",
    values: {
      subjectLabel: c
    }
  } : {
    id: "hdPaX+",
    values: {
      subjectLabel: c
    }
  }), (s as any)[62] = a, (s as any)[63] = N, (s as any)[64] = c, (s as any)[65] = Q) : Q = (s as any)[65];
  let J: any;
  ((s as any)[66] as any) !== (Q as any) ? (J = ((n as any).jsx as any)("span", {
    className: (ls as any).className,
    children: ((n as any).jsx as any)(ds, {
      color: "tertiary",
      size: "sm",
      children: Q
    })
  }), (s as any)[66] = Q, (s as any)[67] = J) : J = (s as any)[67];
  let is: any;
  return ((s as any)[68] as any) !== (Z as any) || ((s as any)[69] as any) !== (hs as any) || ((s as any)[70] as any) !== (Y as any) || ((s as any)[71] as any) !== (K as any) || ((s as any)[72] as any) !== (J as any) || ((s as any)[73] as any) !== (E as any) || ((s as any)[74] as any) !== (T as any) || ((s as any)[75] as any) !== (ps as any) ? (is = ((n as any).jsxs as any)("div", {
    "aria-busy": hs,
    "aria-label": E,
    className: T,
    "data-phase": Ps,
    role: As,
    children: [ps, Y, K, J]
  }), (s as any)[68] = Z, (s as any)[69] = hs, (s as any)[70] = Y, (s as any)[71] = K, (s as any)[72] = J, (s as any)[73] = E, (s as any)[74] = T, (s as any)[75] = ps, (s as any)[76] = is) : is = (s as any)[76], is;
}
export { pe as ComputerPreviewGuests, ke as ComputerScreenPreview, Ss as isScreenPreviewBusy };
//# debugId=8abef767-0824-48c3-8335-ffd980710088
