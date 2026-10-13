declare var ResizeObserver: any;
declare var document: any;
declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "1a846f32-6b5e-4e3a-b0a2-868a60b51ac8", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-1a846f32-6b5e-4e3a-b0a2-868a60b51ac8");
  } catch (e: any) {}
} as any)();
import { c as ls, u as ts, j as n, p as ws, T as Ss, r as G } from "./index.eager-vendor-Qbf9YA6n.js";
import { c as bn } from "./index.eager-common-CdCvBQNJ.js";
import { r as $, a_ as us, fi as Me, fj as Re, aH as Nn, q as xn, fh as wn, fk as Sn, fl as Xe, a$ as _n, U as Qe, fm as Ie, fn as Te, d as zn, fo as Ye, fp as Mn, fq as Rn, fr as qn, ak as In, aW as Tn, fs as Cn, a7 as $n, a6 as Pn, ft as Bn } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import { t as ne, W as An, by as Je, z as _s, p as qe, bz as Fn, bA as Vn, bB as Ze } from "./index-ZYxf-aBb.js";
const ze: number = 3,
  sn: any = {
    captionText: {
      k7Eaqz: "sand-euugli",
      kVQacm: "sand-b3r6kr",
      kg5iWk: "sand-lyipyv",
      khDVqt: "sand-uxw1ft",
      k9WMMc: "sand-2b8uid",
      kMwMTN: "sand-102cea3",
      $$css: !0
    }
  };
function en(this: any, t: any): any {
  (en as any).d = 872;
  const s: any = ((ls as any).c as any)(30),
    {
      monitor: e,
      onFocus: l
    }: any = t,
    {
      _: d
    }: any = (ts as any)(),
    o: any = ((e as any).handoff as any) != (null as any);
  let c: any;
  ((s as any)[0] as any) !== (d as any) || ((s as any)[1] as any) !== (o as any) || ((s as any)[2] as any) !== ((e as any).title as any) ? (c = (d as any)(o ? {
    id: "0lMXxL",
    values: {
      0: (e as any).title
    }
  } : {
    id: "1+P9RR",
    values: {
      0: (e as any).title
    }
  }), (s as any)[0] = d, (s as any)[1] = o, (s as any)[2] = (e as any).title, (s as any)[3] = c) : c = (s as any)[3];
  const r: any = c;
  let a: any;
  ((s as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = ($ as any)("sand-computer-monitor-strip__thumb", "sand-78zum5 sand-dt5ytf sand-17d4w8g sand-ykynuu sand-s83m0k sand-euugli sand-18qnofl sand-1717udv sand-1ghz6dp sand-ng3xce sand-jbqb8w sand-jyslct sand-1lugfcp sand-jb2p0i sand-1ypdohk sand-1t137rt sand-9v5kkp sand-1k57tk5 sand-784prv sand-1uczgqu sand-1725o6r sand-1wfwxd8 sand-7s97pk"), (s as any)[4] = a) : a = (s as any)[4];
  let u: any;
  ((s as any)[5] as any) !== ((e as any).subagentId as any) || ((s as any)[6] as any) !== (l as any) ? (u = (): any => (l as any)((e as any).subagentId), (s as any)[5] = (e as any).subagentId, (s as any)[6] = l, (s as any)[7] = u) : u = (s as any)[7];
  let i: any;
  ((s as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (i = {
    className: "sand-1n2onr6 sand-h8yej3 sand-ur7f20 sand-b3r6kr sand-1ua6jya sand-78zum5 sand-6s0dn4 sand-l56j7k sand-4b2ntj sand-j04kma"
  }, (s as any)[8] = i) : i = (s as any)[8];
  const y: any = (i as any).className;
  let f: any, h: any;
  ((s as any)[9] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = {
    aspectRatio: `${Me} / ${Re}`
  }, h = {
    className: "sand-10l6tqk sand-10a8y8t sand-47corl"
  }, (s as any)[9] = f, (s as any)[10] = h) : (f = (s as any)[9], h = (s as any)[10]);
  let p: any;
  ((s as any)[11] as any) !== ((e as any).vncUrl as any) ? (p = ((n as any).jsx as any)("span", {
    className: (h as any).className,
    children: ((n as any).jsx as any)(Je, {
      src: (e as any).vncUrl
    })
  }), (s as any)[11] = (e as any).vncUrl, (s as any)[12] = p) : p = (s as any)[12];
  let j: any;
  ((s as any)[13] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (j = ((n as any).jsx as any)("span", {
    "aria-hidden": !0,
    className: "sand-10l6tqk sand-10a8y8t sand-htitgo"
  }), (s as any)[13] = j) : j = (s as any)[13];
  let v: any;
  ((s as any)[14] as any) !== (p as any) ? (v = ((n as any).jsxs as any)("span", {
    className: y,
    style: f,
    children: [p, j]
  }), (s as any)[14] = p, (s as any)[15] = v) : v = (s as any)[15];
  let g: any;
  ((s as any)[16] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (g = {
    className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-1jnr06f sand-h8yej3 sand-euugli"
  }, (s as any)[16] = g) : g = (s as any)[16];
  const z: any = (g as any).className;
  let w: any;
  ((s as any)[17] as any) !== (o as any) ? (w = o ? ((n as any).jsx as any)("span", {
    "aria-hidden": !0,
    className: "sand-2lah0s sand-1v4s8kt sand-ols6we sand-149ho13 sand-1h2qwge"
  }) : null, (s as any)[17] = o, (s as any)[18] = w) : w = (s as any)[18];
  let R: any;
  ((s as any)[19] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (R = (ws as any)((us as any).label, (sn as any).captionText), (s as any)[19] = R) : R = (s as any)[19];
  let _: any;
  ((s as any)[20] as any) !== ((e as any).title as any) ? (_ = ((n as any).jsx as any)("span", {
    className: (R as any).className,
    children: (e as any).title
  }), (s as any)[20] = (e as any).title, (s as any)[21] = _) : _ = (s as any)[21];
  let M: any;
  ((s as any)[22] as any) !== (w as any) || ((s as any)[23] as any) !== (_ as any) ? (M = ((n as any).jsxs as any)("span", {
    className: z,
    children: [w, _]
  }), (s as any)[22] = w, (s as any)[23] = _, (s as any)[24] = M) : M = (s as any)[24];
  let q: any;
  return ((s as any)[25] as any) !== (r as any) || ((s as any)[26] as any) !== (v as any) || ((s as any)[27] as any) !== (M as any) || ((s as any)[28] as any) !== (u as any) ? (q = ((n as any).jsxs as any)("button", {
    "aria-label": r,
    className: a,
    onClick: u,
    title: r,
    type: "button",
    children: [v, M]
  }), (s as any)[25] = r, (s as any)[26] = v, (s as any)[27] = M, (s as any)[28] = u, (s as any)[29] = q) : q = (s as any)[29], q;
}
function Wn(this: any, t: any, s: any): any {
  return {
    showMore: (t as any)({
      id: "f3FhKh",
      values: {
        count: s
      }
    }),
    more: (t as any)({
      id: "ex+gRM",
      values: {
        count: s
      }
    }),
    andMore: (t as any)({
      id: "hya0Ya",
      values: {
        count: s
      }
    })
  };
}
function nn(this: any, t: any): any {
  (nn as any).d = 871;
  const s: any = ((ls as any).c as any)(24),
    {
      monitors: e,
      onFocusMonitor: l
    }: any = t,
    {
      _: d
    }: any = (ts as any)(),
    {
      _: o
    }: any = (ts as any)();
  if (((e as any).length as any) === (0 as any)) return null;
  const c: any = ((e as any).length as any) > ((ze as any) + (1 as any) as any);
  let r: any;
  ((s as any)[0] as any) !== (c as any) || ((s as any)[1] as any) !== (e as any) ? (r = c ? ((e as any).slice as any)(0, ze) : e, (s as any)[0] = c, (s as any)[1] = e, (s as any)[2] = r) : r = (s as any)[2];
  const a: any = r;
  let u: any, i: any, y: any, f: any;
  if (((s as any)[3] as any) !== (o as any) || ((s as any)[4] as any) !== (d as any) || ((s as any)[5] as any) !== (c as any) || ((s as any)[6] as any) !== (e as any) || ((s as any)[7] as any) !== (l as any) || ((s as any)[8] as any) !== (a as any)) {
    const p: any = c ? ((e as any).slice as any)(ze) : [],
      j: any = ((p as any).some as any)(En),
      v: any = (Wn as any)(o, (p as any).length);
    if (((s as any)[13] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (u = ($ as any)("sand-computer-monitor-strip", "sand-78zum5 sand-1cy8zhl sand-l56j7k sand-167g77z sand-2lah0s sand-h8yej3 sand-euugli sand-ch40qd sand-14vqqas"), (s as any)[13] = u) : u = (s as any)[13], i = "group", ((s as any)[14] as any) !== (l as any) || ((s as any)[15] as any) !== (a as any)) {
      let g: any;
      ((s as any)[17] as any) !== (l as any) ? (g = (z: any): any => ((n as any).jsx as any)(en, {
        monitor: z,
        onFocus: l
      }, (z as any).subagentId), (s as any)[17] = l, (s as any)[18] = g) : g = (s as any)[18], y = ((a as any).map as any)(g), (s as any)[14] = l, (s as any)[15] = a, (s as any)[16] = y;
    } else y = (s as any)[16];
    f = ((p as any).length as any) > (0 as any) ? ((n as any).jsxs as any)(ne, {
      placement: "top",
      children: [((n as any).jsx as any)((ne as any).Trigger, {
        children: ((n as any).jsxs as any)("button", {
          "aria-label": (v as any).showMore,
          className: ($ as any)("sand-computer-monitor-strip__more", "sand-78zum5 sand-dt5ytf sand-17d4w8g sand-ykynuu sand-s83m0k sand-euugli sand-18qnofl sand-1717udv sand-1ghz6dp sand-ng3xce sand-jbqb8w sand-jyslct sand-1lugfcp sand-jb2p0i sand-1ypdohk sand-1t137rt sand-9v5kkp sand-1k57tk5 sand-784prv sand-1uczgqu sand-1725o6r sand-1wfwxd8 sand-7s97pk"),
          title: (v as any).more,
          type: "button",
          children: [((n as any).jsx as any)("span", {
            className: "sand-1n2onr6 sand-h8yej3 sand-ur7f20 sand-b3r6kr sand-78zum5 sand-6s0dn4 sand-l56j7k sand-j04kma sand-6r4lm7 sand-p7q3dj",
            children: ((n as any).jsx as any)(An, {
              "aria-hidden": !0,
              name: "device-desktop",
              size: "xl"
            })
          }), ((n as any).jsxs as any)("span", {
            className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-1jnr06f sand-h8yej3 sand-euugli",
            children: [j ? ((n as any).jsx as any)("span", {
              "aria-hidden": !0,
              className: "sand-2lah0s sand-1v4s8kt sand-ols6we sand-149ho13 sand-1h2qwge"
            }) : null, ((n as any).jsx as any)("span", {
              className: ((ws as any)((us as any).label, (sn as any).captionText) as any).className,
              children: (v as any).andMore
            })]
          })]
        })
      }), ((n as any).jsx as any)((ne as any).Content, {
        "aria-label": (d as any)({
          id: "hxL96M"
        }),
        maxHeight: 320,
        minWidth: 240,
        children: ((p as any).map as any)((g: any): any => ((n as any).jsx as any)((ne as any).Item, {
          label: (g as any).title,
          onSelect: (): any => (l as any)((g as any).subagentId),
          trailing: ((g as any).handoff as any) != (null as any) ? ((n as any).jsx as any)("span", {
            "aria-hidden": !0,
            className: "sand-3nfvp2 sand-6s0dn4 sand-2lah0s sand-1v4s8kt sand-ols6we sand-149ho13 sand-1h2qwge"
          }) : void 0,
          children: (g as any).title
        }, (g as any).subagentId))
      })]
    }) : null, (s as any)[3] = o, (s as any)[4] = d, (s as any)[5] = c, (s as any)[6] = e, (s as any)[7] = l, (s as any)[8] = a, (s as any)[9] = u, (s as any)[10] = i, (s as any)[11] = y, (s as any)[12] = f;
  } else u = (s as any)[9], i = (s as any)[10], y = (s as any)[11], f = (s as any)[12];
  let h: any;
  return ((s as any)[19] as any) !== (u as any) || ((s as any)[20] as any) !== (i as any) || ((s as any)[21] as any) !== (y as any) || ((s as any)[22] as any) !== (f as any) ? (h = ((n as any).jsxs as any)("div", {
    className: u,
    role: i,
    children: [y, f]
  }), (s as any)[19] = u, (s as any)[20] = i, (s as any)[21] = y, (s as any)[22] = f, (s as any)[23] = h) : h = (s as any)[23], h;
}
function En(this: any, t: any): any {
  return ((t as any).handoff as any) != (null as any);
}
const Le: string = "--sand-computer-stage-clip-inset",
  On: any = (1 as any) / (1024 as any),
  ae: any = (t: any): any => (((Math as any).round as any)((t as any) * (64 as any)) as any) / (64 as any),
  te: any = (t: any): any => ((Math as any).floor as any)((t as any) + (.5 as any)),
  Ln: any = (t: any, s: any): any => `${(Number as any)((((t as any) / (s as any) as any).toFixed as any)(6))}px`;
function Hn(this: any, t: any, s: any): any {
  if (!((s as any) > (0 as any))) return "0px";
  const e: any = (ae as any)(((t as any).top as any) * (s as any)),
    l: any = (ae as any)(((t as any).right as any) * (s as any)),
    d: any = (ae as any)(((t as any).bottom as any) * (s as any)),
    o: any = (ae as any)(((t as any).left as any) * (s as any)),
    c: any = {
      top: ((te as any)(e) as any) - (e as any),
      right: (l as any) - ((te as any)(l) as any),
      bottom: (d as any) - ((te as any)(d) as any),
      left: ((te as any)(o) as any) - (o as any)
    },
    r: any = ((((Object as any).values as any)(c) as any).some as any)((a: any): any => (a as any) !== (0 as any)) ? On : 0;
  return (((([(c as any).top, ((c as any).right as any) - (r as any), ((c as any).bottom as any) - (r as any), (c as any).left] as any).map as any)((a: any): any => (Ln as any)(a, s)) as any).join as any)(" ");
}
function Dn(this: any, t: any): any {
  if ((t as any) == (null as any)) return;
  let s: any = null;
  const e: any = (): any => {
    const o: any = (Hn as any)(((t as any).getBoundingClientRect as any)(), (window as any).devicePixelRatio);
    (o as any) !== (s as any) && (s = o, (((t as any).style as any).setProperty as any)(Le, o));
  };
  (e as any)();
  const l: any = new (ResizeObserver as any)(e);
  ((l as any).observe as any)(t, {
    box: "device-pixel-content-box"
  });
  const d: any = ((t as any).closest as any)(".sand-computer-stage");
  return (d as any) != (null as any) && ((l as any).observe as any)(d), (): any => {
    ((l as any).disconnect as any)(), (((t as any).style as any).removeProperty as any)(Le);
  };
}
const He: any = {
  retry: {
    kfzvcC: "sand-67bb7w",
    $$css: !0
  },
  retryCover: {
    kWkggS: "sand-6r4lm7 sand-y5l4bz",
    kGVxlE: "sand-j04kma",
    kMwMTN: "sand-5a26a2",
    $$css: !0
  }
};
function De(this: any, t: any, {
  hostPhase: s,
  isScreenLoading: e,
  isScreenUnavailable: l,
  subjectLabel: d,
  emptyMessage: o,
  isEmptyLoading: c,
  pullPercent: r
}: any): any {
  return (s as any) === ("away" as any) && (o as any) === (void 0 as any) ? {
    message: (t as any)({
      id: "soS3lz"
    }),
    progressPercent: null,
    isBusy: !1,
    hasRetry: !1
  } : e ? {
    message: (t as any)({
      id: "YyFUtq",
      values: {
        subjectLabel: d
      }
    }),
    progressPercent: null,
    isBusy: !0,
    hasRetry: !1
  } : l ? {
    message: (t as any)({
      id: "h5KMW0",
      values: {
        subjectLabel: d
      }
    }),
    progressPercent: null,
    isBusy: !1,
    hasRetry: !0
  } : (r as any) != (null as any) ? {
    message: (t as any)({
      id: "gneNq2"
    }),
    progressPercent: r,
    isBusy: !0,
    hasRetry: !1
  } : {
    message: o ?? (t as any)(c ? {
      id: "CF2LbG"
    } : {
      id: "bDwcLM"
    }),
    progressPercent: null,
    isBusy: c,
    hasRetry: !1
  };
}
function an(this: any, t: any): any {
  (an as any).d = 875;
  const s: any = ((ls as any).c as any)(17),
    {
      copy: e,
      tone: l,
      onRetry: d
    }: any = t,
    o: any = (l as any) === ("cover" as any);
  let c: any;
  ((s as any)[0] as any) !== (o as any) ? (c = ($ as any)("sand-computer-stage__placeholder", (({
    0: {
      className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-l56j7k sand-193iq5w sand-2b8uid sand-167g77z sand-c7ga6q sand-19aaqeu"
    },
    1: {
      className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-l56j7k sand-1v2ro7d sand-193iq5w sand-ggk2y7 sand-2b8uid sand-fungia sand-ntwwlm sand-eyyvf2 sand-637eza sand-6p93vc"
    }
  } as any)[(!!o as any) << (0 as any)] as any).className), (s as any)[0] = o, (s as any)[1] = c) : c = (s as any)[1];
  let r: any;
  ((s as any)[2] as any) !== ((e as any).isBusy as any) || ((s as any)[3] as any) !== ((e as any).message as any) ? (r = (e as any).isBusy ? ((n as any).jsx as any)(Nn, {
    label: (e as any).message
  }) : ((n as any).jsx as any)("span", {
    className: ((ws as any)((us as any).body2) as any).className,
    children: (e as any).message
  }), (s as any)[2] = (e as any).isBusy, (s as any)[3] = (e as any).message, (s as any)[4] = r) : r = (s as any)[4];
  let a: any;
  ((s as any)[5] as any) !== ((e as any).isBusy as any) || ((s as any)[6] as any) !== ((e as any).progressPercent as any) ? (a = (e as any).isBusy && ((e as any).progressPercent as any) != (null as any) ? ((n as any).jsxs as any)("span", {
    className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-weiyed sand-193iq5w",
    children: [((n as any).jsx as any)("span", {
      "aria-hidden": !0,
      className: "sand-1n2onr6 sand-1iyjqo2 sand-s83m0k sand-euugli sand-ols6we sand-149ho13 sand-b3r6kr sand-n5dbpy",
      children: ((n as any).jsx as any)("span", {
        className: "sand-10l6tqk sand-13vifvy sand-1ey2m1c sand-1o0tod sand-149ho13 sand-twfq29",
        style: {
          width: `${(xn as any)((e as any).progressPercent, 0, 100)}%`
        }
      })
    }), ((n as any).jsxs as any)("span", {
      className: ((ws as any)((us as any).body2) as any).className,
      children: [((Math as any).round as any)((e as any).progressPercent), "%"]
    })]
  }) : null, (s as any)[5] = (e as any).isBusy, (s as any)[6] = (e as any).progressPercent, (s as any)[7] = a) : a = (s as any)[7];
  let u: any;
  ((s as any)[8] as any) !== ((e as any).hasRetry as any) || ((s as any)[9] as any) !== (o as any) || ((s as any)[10] as any) !== (d as any) ? (u = (e as any).hasRetry ? ((n as any).jsx as any)(_s, {
    className: "sand-computer-stage__retry",
    onClick: d,
    size: "sm",
    style: [(He as any).retry, o && (He as any).retryCover],
    variant: "secondary",
    children: ((n as any).jsx as any)(Ss, {
      id: "6gRgw8"
    })
  }) : null, (s as any)[8] = (e as any).hasRetry, (s as any)[9] = o, (s as any)[10] = d, (s as any)[11] = u) : u = (s as any)[11];
  let i: any;
  return ((s as any)[12] as any) !== (c as any) || ((s as any)[13] as any) !== (r as any) || ((s as any)[14] as any) !== (a as any) || ((s as any)[15] as any) !== (u as any) ? (i = ((n as any).jsxs as any)("div", {
    className: c,
    children: [r, a, u]
  }), (s as any)[12] = c, (s as any)[13] = r, (s as any)[14] = a, (s as any)[15] = u, (s as any)[16] = i) : i = (s as any)[16], i;
}
const Ue: any = {
  teachButton: {
    kWkggS: "sand-2eai4v",
    kMzoRj: "sand-4hv7ue",
    ksu8eU: "sand-1y0btm7",
    kVAM5u: "sand-1flfzmt",
    kMwMTN: "sand-fungia",
    $$css: !0
  },
  overlayIconButton: {
    kMwMTN: "sand-99e291 sand-1v0sr2s",
    $$css: !0
  }
};
function tn(this: any, t: any): any {
  (tn as any).d = 876;
  const s: any = ((ls as any).c as any)(26),
    {
      onStartTeach: e,
      onExitFullscreen: l
    }: any = t,
    {
      _: d
    }: any = (ts as any)(),
    {
      platform: o
    }: any = (wn as any)(),
    {
      isFullscreen: c
    }: any = (Sn as any)();
  let r: any, a: any;
  ((s as any)[0] as any) !== (c as any) || ((s as any)[1] as any) !== (o as any) ? (r = ({
    0: {
      className: "sand-1n2onr6 sand-9f619 sand-78zum5 sand-6s0dn4 sand-167g77z sand-2lah0s sand-h8yej3 sand-n3w4p2 sand-mzvs34 sand-lkep63"
    },
    1: {
      className: "sand-1n2onr6 sand-9f619 sand-78zum5 sand-6s0dn4 sand-167g77z sand-2lah0s sand-h8yej3 sand-n3w4p2 sand-mzvs34 sand-lkep63 sand-16zh34g"
    }
  } as any)[(((o as any) === ("darwin" as any) && !c) as any) << (0 as any)], a = ($ as any)("sand-computer-top-bar", (r as any).className), (s as any)[0] = c, (s as any)[1] = o, (s as any)[2] = r, (s as any)[3] = a) : (r = (s as any)[2], a = (s as any)[3]);
  let u: any;
  ((s as any)[4] as any) !== ((r as any).style as any) ? (u = {
    ...(r as any).style,
    backgroundColor: ((Xe as any).topBar as any).css
  }, (s as any)[4] = (r as any).style, (s as any)[5] = u) : u = (s as any)[5];
  let i: any, y: any;
  ((s as any)[6] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (i = ((n as any).jsx as any)("span", {
    "aria-hidden": !0,
    className: "sand-1iyjqo2 sand-s83m0k sand-kh2ocl sand-euugli sand-avu8j0 sand-1wfn6di"
  }), y = ($ as any)("sand-computer-top-bar__actions", "sand-78zum5 sand-6s0dn4 sand-167g77z sand-2lah0s sand-lvsv26 sand-482pwi"), (s as any)[6] = i, (s as any)[7] = y) : (i = (s as any)[6], y = (s as any)[7]);
  let f: any;
  ((s as any)[8] as any) !== (d as any) || ((s as any)[9] as any) !== (e as any) ? (f = (e as any) == (null as any) ? null : ((n as any).jsx as any)(_s, {
    "aria-label": (d as any)({
      id: "yrMloC"
    }),
    onClick: e,
    size: "sm",
    style: [(Ue as any).teachButton, (us as any).body2, (_n as any).regular],
    title: (d as any)({
      id: "yrMloC"
    }),
    variant: "secondary",
    children: ((n as any).jsxs as any)("span", {
      className: "sand-3nfvp2 sand-6s0dn4 sand-1jnr06f",
      children: [((n as any).jsx as any)("span", {
        className: "sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-1xp8n7a sand-mix8c7",
        children: ((n as any).jsx as any)(Qe, {})
      }), ((n as any).jsx as any)(Ss, {
        id: "yrMloC"
      })]
    })
  }), (s as any)[8] = d, (s as any)[9] = e, (s as any)[10] = f) : f = (s as any)[10];
  let h: any;
  ((s as any)[11] as any) !== (d as any) ? (h = (d as any)({
    id: "sQpDn6"
  }), (s as any)[11] = d, (s as any)[12] = h) : h = (s as any)[12];
  let p: any;
  ((s as any)[13] as any) !== (d as any) ? (p = (d as any)({
    id: "sQpDn6"
  }), (s as any)[13] = d, (s as any)[14] = p) : p = (s as any)[14];
  let j: any;
  ((s as any)[15] as any) !== (l as any) || ((s as any)[16] as any) !== (h as any) || ((s as any)[17] as any) !== (p as any) ? (j = ((n as any).jsx as any)(qe, {
    "aria-label": h,
    icon: "arrows-contract-simple",
    onClick: l,
    size: "sm",
    style: (Ue as any).overlayIconButton,
    title: p
  }), (s as any)[15] = l, (s as any)[16] = h, (s as any)[17] = p, (s as any)[18] = j) : j = (s as any)[18];
  let v: any;
  ((s as any)[19] as any) !== (f as any) || ((s as any)[20] as any) !== (j as any) ? (v = ((n as any).jsxs as any)("div", {
    className: y,
    children: [f, j]
  }), (s as any)[19] = f, (s as any)[20] = j, (s as any)[21] = v) : v = (s as any)[21];
  let g: any;
  return ((s as any)[22] as any) !== (a as any) || ((s as any)[23] as any) !== (u as any) || ((s as any)[24] as any) !== (v as any) ? (g = ((n as any).jsxs as any)("div", {
    className: a,
    style: u,
    children: [i, v]
  }), (s as any)[22] = a, (s as any)[23] = u, (s as any)[24] = v, (s as any)[25] = g) : g = (s as any)[25], g;
}
function ln(this: any, t: any): any {
  const s: any = ((ls as any).c as any)(4),
    {
      _: e
    }: any = (ts as any)(),
    l: any = (Ie as any)();
  let d: any;
  return ((s as any)[0] as any) !== (e as any) || ((s as any)[1] as any) !== (l as any) || ((s as any)[2] as any) !== (t as any) ? (d = (o: any, c: any): any => {
    ((l as any).start as any)(o, c), (zn as any)((e as any)({
      id: "AdIOli",
      values: {
        subjectLabel: t
      }
    }));
  }, (s as any)[0] = e, (s as any)[1] = l, (s as any)[2] = t, (s as any)[3] = d) : d = (s as any)[3], d;
}
function Un(this: any, t: any): any {
  const s: any = ((Math as any).max as any)(0, ((Math as any).floor as any)((t as any) / (1e3 as any))),
    e: any = ((Math as any).floor as any)((s as any) / (60 as any)),
    l: any = (s as any) % (60 as any);
  return `${e}:${(((String as any)(l) as any).padStart as any)(2, "0")}`;
}
const as: any = {
  recordPill: {
    kmuXW: "sand-2lah0s",
    kaIpWk: "sand-1kogg8i",
    kLKAdn: "sand-1iorvi4",
    kGO01o: "sand-jkvuk6",
    kZCmMZ: "sand-25sj25",
    kwRFfy: "sand-1icxu4v",
    kOIVth: "sand-1jnr06f",
    kGuDYH: "sand-11wthnw",
    kLWn49: "sand-d4r4e8",
    kWkggS: "sand-ntrugh sand-19ii5eu",
    kMwMTN: "sand-fungia",
    $$css: !0
  },
  stopRecording: {
    kmuXW: "sand-2lah0s",
    kaIpWk: "sand-1kogg8i",
    kLKAdn: "sand-1iorvi4",
    kGO01o: "sand-jkvuk6",
    kZCmMZ: "sand-25sj25",
    kwRFfy: "sand-1icxu4v",
    kGuDYH: "sand-11wthnw",
    kLWn49: "sand-d4r4e8",
    kWkggS: "sand-6y9aml sand-tly4hf",
    kMwMTN: "sand-6rl5ky",
    $$css: !0
  },
  stopRecordingOverlay: {
    kWkggS: "sand-1hqw4a3 sand-46gfeq",
    kMwMTN: "sand-dmyetp",
    $$css: !0
  },
  discardRecording: {
    kMwMTN: "sand-6rl5ky sand-n4ifyr",
    $$css: !0
  },
  discardRecordingOverlay: {
    kMwMTN: "sand-dmyetp sand-10r3i2m",
    $$css: !0
  },
  dismiss: {
    kmuXW: "sand-2lah0s",
    kMwMTN: "sand-102cea3 sand-10r3i2m",
    $$css: !0
  }
};
function dn(this: any, t: any): any {
  (dn as any).d = 880;
  const s: any = ((ls as any).c as any)(78),
    {
      agentId: e,
      subjectLabel: l,
      recordingAgentName: d,
      isTeachTaskAvailable: o,
      isOverlayTone: c,
      onStopAndSave: r
    }: any = t,
    {
      _: a
    }: any = (ts as any)(),
    u: any = (Te as any)(),
    i: any = (Ye as any)(),
    y: any = (Mn as any)(),
    f: any = (Ie as any)(),
    h: any = (ln as any)(l);
  if (((u as any).state as any) === ("recording" as any)) {
    const x: any = (u as any).agentId;
    if ((x as any) == (null as any)) return null;
    const H: any = (x as any) === (e as any);
    let X: any;
    ((s as any)[0] as any) !== (a as any) || ((s as any)[1] as any) !== (d as any) ? (X = (d as any) == (null as any) ? (a as any)({
      id: "68rgYg"
    }) : (a as any)({
      id: "3h2s4g",
      values: {
        recordingAgentName: d
      }
    }), (s as any)[0] = a, (s as any)[1] = d, (s as any)[2] = X) : X = (s as any)[2];
    const D: any = X,
      ds: any = (y as any) - (((u as any).startedAtMs ?? y) as any);
    let es: any;
    ((s as any)[3] as any) !== (ds as any) ? (es = (Un as any)(ds), (s as any)[3] = ds, (s as any)[4] = es) : es = (s as any)[4];
    const I: any = es;
    let Q: any;
    ((s as any)[5] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Q = {
      className: "sand-9f619 sand-78zum5 sand-1cy8zhl sand-h8yej3 sand-dqyycr sand-2lah0s"
    }, (s as any)[5] = Q) : Q = (s as any)[5];
    const C: any = (Q as any).className;
    let Y: any;
    ((s as any)[6] as any) !== (c as any) ? (Y = ({
      0: {
        className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-889kno sand-1a8lsjc sand-1n2onr6 sand-h8yej3 sand-193iq5w sand-2lah0s sand-ou54vl sand-p59q4u sand-1g0dm76 sand-2vl965 sand-1q4ynmn sand-1tiofj7 sand-vn2z4z sand-1gnnqk1"
      },
      1: {
        className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-889kno sand-1a8lsjc sand-1n2onr6 sand-h8yej3 sand-193iq5w sand-2lah0s sand-ou54vl sand-p59q4u sand-1g0dm76 sand-2vl965 sand-1q4ynmn sand-vn2z4z sand-1gnnqk1 sand-1kj7bwx"
      }
    } as any)[(!!c as any) << (0 as any)], (s as any)[6] = c, (s as any)[7] = Y) : Y = (s as any)[7];
    const zs: any = (Y as any).className;
    let U: any;
    ((s as any)[8] as any) !== (c as any) ? (U = ({
      0: {
        className: "sand-1iyjqo2 sand-s83m0k sand-euugli sand-11wthnw sand-d4r4e8 sand-tyxrsu"
      },
      1: {
        className: "sand-1iyjqo2 sand-s83m0k sand-euugli sand-11wthnw sand-d4r4e8 sand-5a26a2"
      }
    } as any)[(!!c as any) << (0 as any)], (s as any)[8] = c, (s as any)[9] = U) : U = (s as any)[9];
    let ns: any;
    ((s as any)[10] as any) !== (a as any) || ((s as any)[11] as any) !== (H as any) || ((s as any)[12] as any) !== (D as any) || ((s as any)[13] as any) !== (l as any) ? (ns = H ? (a as any)({
      id: "AdIOli",
      values: {
        subjectLabel: l
      }
    }) : D, (s as any)[10] = a, (s as any)[11] = H, (s as any)[12] = D, (s as any)[13] = l, (s as any)[14] = ns) : ns = (s as any)[14];
    let B: any;
    ((s as any)[15] as any) !== ((U as any).className as any) || ((s as any)[16] as any) !== (ns as any) ? (B = ((n as any).jsx as any)("span", {
      className: (U as any).className,
      children: ns
    }), (s as any)[15] = (U as any).className, (s as any)[16] = ns, (s as any)[17] = B) : B = (s as any)[17];
    let A: any;
    ((s as any)[18] as any) !== (a as any) ? (A = (a as any)({
      id: "ITj4Ys"
    }), (s as any)[18] = a, (s as any)[19] = A) : A = (s as any)[19];
    let ms: any;
    ((s as any)[20] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ms = {
      name: "square",
      variant: "filled"
    }, (s as any)[20] = ms) : ms = (s as any)[20];
    let k: any;
    ((s as any)[21] as any) !== (f as any) || ((s as any)[22] as any) !== (r as any) || ((s as any)[23] as any) !== (x as any) ? (k = (): any => {
      ((f as any).stop as any)(x, !0), (r as any)();
    }, (s as any)[21] = f, (s as any)[22] = r, (s as any)[23] = x, (s as any)[24] = k) : k = (s as any)[24];
    let F: any;
    ((s as any)[25] as any) !== (c as any) ? (F = c ? [(as as any).stopRecording, (as as any).stopRecordingOverlay] : (as as any).stopRecording, (s as any)[25] = c, (s as any)[26] = F) : F = (s as any)[26];
    let K: any;
    ((s as any)[27] as any) !== (a as any) ? (K = (a as any)({
      id: "pJ/IRc"
    }), (s as any)[27] = a, (s as any)[28] = K) : K = (s as any)[28];
    let V: any;
    ((s as any)[29] as any) !== (I as any) || ((s as any)[30] as any) !== (A as any) || ((s as any)[31] as any) !== (k as any) || ((s as any)[32] as any) !== (F as any) || ((s as any)[33] as any) !== (K as any) ? (V = ((n as any).jsx as any)(_s, {
      "aria-label": A,
      leadingIcon: ms,
      onClick: k,
      size: "sm",
      style: F,
      title: K,
      variant: "primary",
      children: I
    }), (s as any)[29] = I, (s as any)[30] = A, (s as any)[31] = k, (s as any)[32] = F, (s as any)[33] = K, (s as any)[34] = V) : V = (s as any)[34];
    let T: any;
    ((s as any)[35] as any) !== (a as any) ? (T = (a as any)({
      id: "joVvhG"
    }), (s as any)[35] = a, (s as any)[36] = T) : T = (s as any)[36];
    let W: any;
    ((s as any)[37] as any) !== (f as any) || ((s as any)[38] as any) !== (x as any) ? (W = (): any => ((f as any).stop as any)(x, !1), (s as any)[37] = f, (s as any)[38] = x, (s as any)[39] = W) : W = (s as any)[39];
    let N: any;
    ((s as any)[40] as any) !== (c as any) ? (N = c ? [(as as any).discardRecording, (as as any).discardRecordingOverlay] : (as as any).discardRecording, (s as any)[40] = c, (s as any)[41] = N) : N = (s as any)[41];
    let E: any;
    ((s as any)[42] as any) !== (a as any) ? (E = (a as any)({
      id: "joVvhG"
    }), (s as any)[42] = a, (s as any)[43] = E) : E = (s as any)[43];
    let O: any;
    ((s as any)[44] as any) !== (T as any) || ((s as any)[45] as any) !== (W as any) || ((s as any)[46] as any) !== (N as any) || ((s as any)[47] as any) !== (E as any) ? (O = ((n as any).jsx as any)(qe, {
      "aria-label": T,
      icon: "close",
      onClick: W,
      size: "sm",
      style: N,
      title: E
    }), (s as any)[44] = T, (s as any)[45] = W, (s as any)[46] = N, (s as any)[47] = E, (s as any)[48] = O) : O = (s as any)[48];
    let J: any;
    return ((s as any)[49] as any) !== (B as any) || ((s as any)[50] as any) !== (V as any) || ((s as any)[51] as any) !== (O as any) || ((s as any)[52] as any) !== ((Y as any).className as any) ? (J = ((n as any).jsx as any)("div", {
      className: C,
      children: ((n as any).jsxs as any)("div", {
        className: zs,
        children: [B, V, O]
      })
    }), (s as any)[49] = B, (s as any)[50] = V, (s as any)[51] = O, (s as any)[52] = (Y as any).className, (s as any)[53] = J) : J = (s as any)[53], J;
  }
  if ((e as any) == (null as any) || !((i?.agentId as any) === (e as any)) || !o) return null;
  let j: any;
  ((s as any)[54] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (j = {
    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-h8yej3 sand-889kno sand-2vl965 sand-1a8lsjc sand-1g0dm76 sand-1q4ynmn sand-1yx5i47 sand-vn2z4z"
  }, (s as any)[54] = j) : j = (s as any)[54];
  const v: any = (j as any).className;
  let g: any;
  ((s as any)[55] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (g = {
    className: "sand-1iyjqo2 sand-s83m0k sand-euugli sand-11wthnw sand-d4r4e8 sand-5a26a2"
  }, (s as any)[55] = g) : g = (s as any)[55];
  let z: any;
  ((s as any)[56] as any) !== (l as any) ? (z = ((n as any).jsx as any)("span", {
    className: (g as any).className,
    children: ((n as any).jsx as any)(Ss, {
      id: "zTyn2M",
      values: {
        subjectLabel: l
      }
    })
  }), (s as any)[56] = l, (s as any)[57] = z) : z = (s as any)[57];
  let w: any;
  ((s as any)[58] as any) !== (e as any) || ((s as any)[59] as any) !== (i?.entryPoint as any) || ((s as any)[60] as any) !== (f as any) || ((s as any)[61] as any) !== (h as any) ? (w = (): any => {
    const x: any = i?.entryPoint ?? "screen_hover";
    ((f as any).arm as any)(null), (h as any)(e, x);
  }, (s as any)[58] = e, (s as any)[59] = i?.entryPoint, (s as any)[60] = f, (s as any)[61] = h, (s as any)[62] = w) : w = (s as any)[62];
  let R: any;
  ((s as any)[63] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (R = {
    className: "sand-3nfvp2 sand-6s0dn4 sand-1jnr06f"
  }, (s as any)[63] = R) : R = (s as any)[63];
  let _: any;
  ((s as any)[64] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (_ = ((n as any).jsxs as any)("span", {
    className: (R as any).className,
    children: [((n as any).jsx as any)(Qe, {}), ((n as any).jsx as any)("span", {
      children: ((n as any).jsx as any)(Ss, {
        id: "IJaotC"
      })
    })]
  }), (s as any)[64] = _) : _ = (s as any)[64];
  let M: any;
  ((s as any)[65] as any) !== (w as any) ? (M = ((n as any).jsx as any)(_s, {
    onClick: w,
    size: "sm",
    style: (as as any).recordPill,
    variant: "primary",
    children: _
  }), (s as any)[65] = w, (s as any)[66] = M) : M = (s as any)[66];
  let q: any;
  ((s as any)[67] as any) !== (a as any) ? (q = (a as any)({
    id: "1QfxQT"
  }), (s as any)[67] = a, (s as any)[68] = q) : q = (s as any)[68];
  let L: any;
  ((s as any)[69] as any) !== (f as any) ? (L = (): any => ((f as any).arm as any)(null), (s as any)[69] = f, (s as any)[70] = L) : L = (s as any)[70];
  let ss: any;
  ((s as any)[71] as any) !== (L as any) || ((s as any)[72] as any) !== (q as any) ? (ss = ((n as any).jsx as any)(qe, {
    "aria-label": q,
    icon: "close",
    onClick: L,
    size: "sm",
    style: (as as any).dismiss
  }), (s as any)[71] = L, (s as any)[72] = q, (s as any)[73] = ss) : ss = (s as any)[73];
  let P: any;
  return ((s as any)[74] as any) !== (ss as any) || ((s as any)[75] as any) !== (z as any) || ((s as any)[76] as any) !== (M as any) ? (P = ((n as any).jsxs as any)("div", {
    className: v,
    children: [z, M, ss]
  }), (s as any)[74] = ss, (s as any)[75] = z, (s as any)[76] = M, (s as any)[77] = P) : P = (s as any)[77], P;
}
function cn(this: any, t: any): any {
  (cn as any).d = 881;
  const s: any = ((ls as any).c as any)(1),
    {
      agentId: e
    }: any = t,
    l: any = (Te as any)();
  if ((e as any) == (null as any) || ((l as any).state as any) !== ("recording" as any) || ((l as any).agentId as any) !== (e as any)) return null;
  let d: any;
  return ((s as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = ((n as any).jsx as any)("div", {
    "aria-hidden": !0,
    className: "sand-10l6tqk sand-10a8y8t sand-9f619 sand-2u8bby sand-dh2fpr sand-1y0btm7 sand-jz30o7 sand-47corl sand-1u8a7rm",
    "data-recording-frame": "true"
  }), (s as any)[0] = d) : d = (s as any)[0], d;
}
const le: any = {
  captionText: {
    k7Eaqz: "sand-euugli",
    kVQacm: "sand-b3r6kr",
    kg5iWk: "sand-lyipyv",
    khDVqt: "sand-uxw1ft",
    k9WMMc: "sand-2b8uid",
    kMwMTN: "sand-102cea3",
    $$css: !0
  },
  bannerBody: {
    kzQI83: "sand-1iyjqo2",
    kmuXW: "sand-s83m0k",
    k7Eaqz: "sand-euugli",
    k1xSpc: "sand-104kibb",
    kgKLqz: "sand-1ua5tub",
    kJFfOR: "sand-1h7i4cw",
    kHjlTd: "sand-j0a0fe",
    kORKVm: "sand-10wlt62",
    kMwMTN: "sand-n0e0ga",
    $$css: !0
  },
  buttonSecondary: {
    kWkggS: "sand-6r4lm7 sand-y5l4bz",
    kGVxlE: "sand-j04kma",
    kMwMTN: "sand-5a26a2",
    $$css: !0
  },
  buttonPrimary: {
    kWkggS: "sand-3wg7rn sand-1kc055u",
    kMwMTN: "sand-b78v21",
    $$css: !0
  }
};
function rn(this: any, t: any, s: any): any {
  return t?.handoff ?? s;
}
function on(this: any, t: any): any {
  return (t?.handoff as any) != (null as any) ? {
    kind: "monitor",
    subagentId: (t as any).subagentId
  } : {
    kind: "base"
  };
}
function un(this: any, {
  isStageLive: t,
  isHandoffWaiting: s
}: any): any {
  return t && !s;
}
function mn(this: any, t: any, s: any): any {
  return (s as any) != (null as any) && ((t as any).some as any)((l: any): any => ((l as any).subagentId as any) === (s as any)) ? s : ((t as any).find as any)((l: any): any => ((l as any).handoff as any) != (null as any))?.subagentId ?? (t as any)[0]?.subagentId ?? null;
}
function Ke(this: any, t: any): any {
  switch (t) {
    case "ArrowDown":
      return 1;
    case "ArrowUp":
      return -1;
    default:
      return ($n as any)(t, (Pn as any)());
  }
}
const Kn: any = (bn as any)({
  name: "computer-vnc-focus-probe",
  delayMs: 32
});
function Ge(this: any, t: any, s: any, e: any, l: any): any {
  ((t as any).current as any) == (null as any) && ((t as any).current = ((Kn as any).wrap as any)((d: any, o: any): any => {
    if (!(s as any).current || !(d as any).isConnected || !(Ze as any)(d)) return;
    ((d as any).focus as any)();
    const {
      host: c
    }: any = (Bn as any)(((d as any).getAttribute as any)("src") ?? "");
    (o as any)({
      surface: "interactive",
      phase: "focus",
      ...((c as any) == (null as any) ? {} : {
        vncHost: c
      }),
      focusOwner: "vnc",
      focusLanded: ((document as any).activeElement as any) === (d as any)
    });
  })), ((t as any).current as any)(e, l);
}
function fn(this: any, t: any): any {
  (fn as any).d = 865;
  const s: any = ((ls as any).c as any)(139),
    {
      isOpen: e,
      agentId: l,
      viewer: d,
      isScreenLoading: o,
      isScreenUnavailable: c,
      onRetryScreen: r,
      monitors: a,
      focusMonitorId: u,
      subjectLabel: i,
      recordingAgentName: y,
      setupVncUrl: f,
      emptyMessage: h,
      isEmptyLoading: p,
      pullPercent: j,
      baseHandoff: v,
      onMinimize: g,
      onHandBackHandoff: z,
      onDismissHandoff: w,
      onRequestComposerFocus: R,
      openedAtMs: _,
      openTrigger: M
    }: any = t,
    q: any = (d as any) === (void 0 as any) ? "owner" : d,
    L: any = (p as any) === (void 0 as any) ? !0 : p,
    ss: any = (j as any) === (void 0 as any) ? null : j,
    {
      _: P
    }: any = (ts as any)(),
    {
      _: x
    }: any = (ts as any)(),
    H: any = (Rn as any)(),
    X: any = (Ye as any)(),
    D: any = (Te as any)(),
    ds: any = (Ie as any)(),
    es: any = (ln as any)(i),
    I: any = (qn as any)();
  let Q: any;
  ((s as any)[0] as any) !== (I as any) ? (Q = (Cn as any)(I), (s as any)[0] = I, (s as any)[1] = Q) : Q = (s as any)[1];
  const C: any = Q,
    [Y, zs]: any = ((G as any).useState as any)(null),
    [U, ns]: any = ((G as any).useState as any)(null);
  let B: any = (mn as any)(a, Y),
    A: any = U;
  e ? (u as any) != (null as any) && (u as any) !== (U as any) && (A = u, ((a as any).some as any)((m: any): any => ((m as any).subagentId as any) === (u as any)) && (B = u)) : A = null, (B as any) !== (Y as any) && (zs as any)(B), (A as any) !== (U as any) && (ns as any)(A);
  const ms: any = ((Math as any).max as any)(0, ((a as any).findIndex as any)((m: any): any => ((m as any).subagentId as any) === (B as any))),
    k: any = (a as any)[ms] ?? null;
  let F: any;
  if (((s as any)[2] as any) !== (k?.subagentId as any) || ((s as any)[3] as any) !== (a as any)) {
    let m: any;
    ((s as any)[5] as any) !== (k?.subagentId as any) ? (m = (S: any): any => ((S as any).subagentId as any) !== (k?.subagentId as any), (s as any)[5] = k?.subagentId, (s as any)[6] = m) : m = (s as any)[6], F = ((a as any).filter as any)(m), (s as any)[2] = k?.subagentId, (s as any)[3] = a, (s as any)[4] = F;
  } else F = (s as any)[4];
  const K: any = F;
  let V: any;
  ((s as any)[7] as any) !== (a as any) ? (V = (m: any): any => {
    ((a as any).length as any) < (2 as any) || (zs as any)((S: any): any => {
      const os: any = ((a as any).findIndex as any)((vn: any): any => ((vn as any).subagentId as any) === (S as any)),
        jn: any = (((((os as any) === (-1 as any) ? 0 : os) as any) + (m as any) as any) + ((a as any).length as any) as any) % ((a as any).length as any);
      return (a as any)[jn]?.subagentId ?? S;
    });
  }, (s as any)[7] = a, (s as any)[8] = V) : V = (s as any)[8];
  const T: any = V;
  let W: any;
  ((s as any)[9] as any) !== (l as any) || ((s as any)[10] as any) !== (g as any) || ((s as any)[11] as any) !== (R as any) || ((s as any)[12] as any) !== (X as any) || ((s as any)[13] as any) !== (ds as any) || ((s as any)[14] as any) !== ((D as any).state as any) ? (W = (): any => {
    ((D as any).state as any) !== ("recording" as any) && (X?.agentId as any) === (l as any) && ((X as any).entryPoint as any) === ("composer_menu" as any) && ((ds as any).arm as any)(null), (g as any)(), (R as any)();
  }, (s as any)[9] = l, (s as any)[10] = g, (s as any)[11] = R, (s as any)[12] = X, (s as any)[13] = ds, (s as any)[14] = (D as any).state, (s as any)[15] = W) : W = (s as any)[15];
  const N: any = W;
  let E: any;
  ((s as any)[16] as any) !== ((a as any).length as any) || ((s as any)[17] as any) !== (T as any) ? (E = (m: any): any => {
    if (((a as any).length as any) < (2 as any)) return;
    const S: any = (Ke as any)((m as any).key);
    (S as any) != (null as any) && (((m as any).preventDefault as any)(), (T as any)(S));
  }, (s as any)[16] = (a as any).length, (s as any)[17] = T, (s as any)[18] = E) : E = (s as any)[18];
  const O: any = E;
  let J: any;
  ((s as any)[19] as any) !== (O as any) || ((s as any)[20] as any) !== (e as any) ? (J = (m: any): any => {
    if (!((m as any) == (null as any) || !e)) return ((window as any).addEventListener as any)("keydown", O), ((m as any).focus as any)(), (): any => {
      ((window as any).removeEventListener as any)("keydown", O);
    };
  }, (s as any)[19] = O, (s as any)[20] = e, (s as any)[21] = J) : J = (s as any)[21];
  const de: any = J;
  let Is: any;
  ((s as any)[22] as any) !== (k as any) ? (Is = (on as any)(k), (s as any)[22] = k, (s as any)[23] = Is) : Is = (s as any)[23];
  const Ce: any = Is,
    fs: any = ((Ce as any).kind as any) === ("monitor" as any) ? (Ce as any).subagentId : null;
  let Ts: any;
  ((s as any)[24] as any) !== (fs as any) || ((s as any)[25] as any) !== (N as any) || ((s as any)[26] as any) !== (z as any) ? (Ts = (): any => {
    (z as any)(fs), (N as any)();
  }, (s as any)[24] = fs, (s as any)[25] = N, (s as any)[26] = z, (s as any)[27] = Ts) : Ts = (s as any)[27];
  const gn: any = Ts;
  let Cs: any;
  ((s as any)[28] as any) !== (fs as any) || ((s as any)[29] as any) !== (N as any) || ((s as any)[30] as any) !== (w as any) ? (Cs = (): any => {
    (w as any)(fs), (N as any)();
  }, (s as any)[28] = fs, (s as any)[29] = N, (s as any)[30] = w, (s as any)[31] = Cs) : Cs = (s as any)[31];
  const hn: any = Cs,
    Ms: any = (rn as any)(k, v),
    $s: any = (Ms as any) != (null as any),
    Ps: any = ((a as any).length as any) > (0 as any),
    $e: any = !Ps && (f as any) != (null as any),
    b: any = k?.subagentId ?? ($e ? "setup" : null),
    Bs: any = k?.vncUrl ?? ($e ? f : null);
  let As: any;
  ((s as any)[32] as any) !== (C as any) || ((s as any)[33] as any) !== (b as any) || ((s as any)[34] as any) !== (Bs as any) ? (As = C && (b as any) != (null as any) && (Bs as any) != (null as any) ? {
    stageKey: b,
    vncUrl: Bs
  } : null, (s as any)[32] = C, (s as any)[33] = b, (s as any)[34] = Bs, (s as any)[35] = As) : As = (s as any)[35];
  const Z: any = As,
    ce: any = o && !Ps,
    re: any = c && !Ps,
    ie: any = Ps ? null : ss;
  let Fs: any;
  ((s as any)[36] as any) !== (P as any) || ((s as any)[37] as any) !== (h as any) || ((s as any)[38] as any) !== (I as any) || ((s as any)[39] as any) !== (L as any) || ((s as any)[40] as any) !== (i as any) || ((s as any)[41] as any) !== (ce as any) || ((s as any)[42] as any) !== (re as any) || ((s as any)[43] as any) !== (ie as any) ? (Fs = (De as any)(P, {
    hostPhase: I,
    isScreenLoading: ce,
    isScreenUnavailable: re,
    subjectLabel: i,
    emptyMessage: h,
    isEmptyLoading: L,
    pullPercent: ie
  }), (s as any)[36] = P, (s as any)[37] = h, (s as any)[38] = I, (s as any)[39] = L, (s as any)[40] = i, (s as any)[41] = ce, (s as any)[42] = re, (s as any)[43] = ie, (s as any)[44] = Fs) : Fs = (s as any)[44];
  const Rs: any = Fs,
    [Pe, Be]: any = ((G as any).useState as any)(null);
  (!e || !C) && (Pe as any) != (null as any) && (Be as any)(null);
  const oe: any = (b as any) != (null as any) && (Pe as any) === (b as any),
    [Ae, Fe]: any = ((G as any).useState as any)(null);
  !C && (Ae as any) != (null as any) && (Fe as any)(null);
  const yn: any = (b as any) != (null as any) && (Ae as any) === (b as any);
  let Vs: any;
  ((s as any)[45] as any) !== (b as any) ? (Vs = (m: any): any => {
    (Fe as any)(m ? b : null);
  }, (s as any)[45] = b, (s as any)[46] = Vs) : Vs = (s as any)[46];
  const ue: any = Vs,
    [Ve, We]: any = ((G as any).useState as any)(null);
  !C && (Ve as any) != (null as any) && (We as any)(null);
  const pn: any = (b as any) != (null as any) && (Ve as any) === (b as any);
  let Ws: any;
  ((s as any)[47] as any) !== (b as any) ? (Ws = (m: any): any => {
    (We as any)(m ? b : null);
  }, (s as any)[47] = b, (s as any)[48] = Ws) : Ws = (s as any)[48];
  const me: any = Ws,
    [Ee, cs]: any = ((G as any).useState as any)(null);
  !C && (Ee as any) != (null as any) && (cs as any)(null);
  const rs: any = (b as any) != (null as any) && (Ee as any) === (b as any);
  let Es: any;
  ((s as any)[49] as any) !== (r as any) || ((s as any)[50] as any) !== (cs as any) ? (Es = (): any => {
    (cs as any)(null), (r as any)();
  }, (s as any)[49] = r, (s as any)[50] = cs, (s as any)[51] = Es) : Es = (s as any)[51];
  const fe: any = Es,
    qs: any = e && !yn && !pn && !rs,
    kn: any = (In as any)("main");
  let ge: any = null;
  if ((Z as any) == (null as any)) (Rs as any).isBusy && (ge = (Rs as any).message);else if (qs) {
    let m: any;
    ((s as any)[52] as any) !== (x as any) ? (m = (x as any)({
      id: "9zb2WA"
    }), (s as any)[52] = x, (s as any)[53] = m) : m = (s as any)[53], ge = m;
  }
  (Tn as any)(e && !kn ? ge : null);
  const [he]: any = ((G as any).useState as any)(Gn),
    ye: any = ((G as any).useRef as any)(null);
  let Os: any;
  ((s as any)[54] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Os = (m: any): any => {
    (ye as any).current = m;
  }, (s as any)[54] = Os) : Os = (s as any)[54];
  const pe: any = Os,
    ke: any = ((G as any).useRef as any)(e),
    Oe: any = ((G as any).useRef as any)(null);
  let Ls: any;
  ((s as any)[55] as any) !== (e as any) || ((s as any)[56] as any) !== (oe as any) || ((s as any)[57] as any) !== (b as any) || ((s as any)[58] as any) !== (H as any) ? (Ls = (m: any): any => {
    if (e) {
      if (m && !oe) {
        const S: any = (ye as any).current;
        (S as any) != (null as any) && (((S as any).focus as any)(), (Ge as any)(Oe, ke, S, (H as any).vncSession));
      }
      (Be as any)(m ? b : null);
    }
  }, (s as any)[55] = e, (s as any)[56] = oe, (s as any)[57] = b, (s as any)[58] = H, (s as any)[59] = Ls) : Ls = (s as any)[59];
  const je: any = Ls;
  let Hs: any;
  ((s as any)[60] as any) !== (e as any) || ((s as any)[61] as any) !== (de as any) || ((s as any)[62] as any) !== (H as any) ? (Hs = (m: any): any => {
    (ke as any).current = (m as any) != (null as any) && e;
    const S: any = (de as any)(m);
    if ((m as any) == (null as any) || !e) return S;
    const os: any = (ye as any).current;
    return (os as any) != (null as any) && (Ze as any)(os) && (((os as any).focus as any)(), (Ge as any)(Oe, ke, os, (H as any).vncSession)), S;
  }, (s as any)[60] = e, (s as any)[61] = de, (s as any)[62] = H, (s as any)[63] = Hs) : Hs = (s as any)[63];
  const ve: any = Hs;
  let Ds: any;
  ((s as any)[64] as any) !== (T as any) ? (Ds = (m: any): any => {
    const S: any = (Ke as any)(m);
    (S as any) != (null as any) && (T as any)(S);
  }, (s as any)[64] = T, (s as any)[65] = Ds) : Ds = (s as any)[65];
  const be: any = Ds,
    is: any = ((D as any).state as any) === ("recording" as any) && ((D as any).agentId as any) === (l as any),
    Ne: any = (Z as any) != (null as any);
  let Us: any;
  ((s as any)[66] as any) !== ($s as any) || ((s as any)[67] as any) !== (Ne as any) ? (Us = (un as any)({
    isStageLive: Ne,
    isHandoffWaiting: $s
  }), (s as any)[66] = $s, (s as any)[67] = Ne, (s as any)[68] = Us) : Us = (s as any)[68];
  const Ks: any = Us,
    xe: any = (l as any) != (null as any) && (q as any) === ("owner" as any) && ((D as any).state as any) !== ("recording" as any) && Ks && (M as any) === ("preview" as any);
  let Gs: any;
  ((s as any)[69] as any) !== (l as any) || ((s as any)[70] as any) !== (es as any) ? (Gs = (): any => {
    (l as any) != (null as any) && (es as any)(l, "fullscreen_title_bar");
  }, (s as any)[69] = l, (s as any)[70] = es, (s as any)[71] = Gs) : Gs = (s as any)[71];
  const we: any = Gs,
    Se: any = $s ? ((n as any).jsxs as any)("div", {
      className: ($ as any)("sand-computer-banner", "sand-9f619 sand-78zum5 sand-6s0dn4 sand-ou54vl sand-2lah0s sand-h8yej3 sand-1e56ztr sand-889kno sand-2vl965 sand-1a8lsjc sand-1g0dm76 sand-1q4ynmn sand-v1id1i"),
      children: [((n as any).jsx as any)("span", {
        className: ($ as any)("sand-computer-banner__body", ((ws as any)((us as any).body2, (le as any).bannerBody) as any).className),
        title: Ms?.instruction,
        children: (Ms as any) != (null as any) && (((((Ms as any).instruction as any).trim as any)() as any).length as any) > (0 as any) ? (Ms as any).instruction : (x as any)({
          id: "JnE9gk",
          values: {
            subjectLabel: i
          }
        })
      }), ((n as any).jsxs as any)("span", {
        className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-2lah0s",
        children: [((n as any).jsx as any)(_s, {
          onClick: hn,
          size: "sm",
          style: (le as any).buttonSecondary,
          variant: "secondary",
          children: ((n as any).jsx as any)(Ss, {
            id: "+P0Cn2"
          })
        }), ((n as any).jsx as any)(_s, {
          onClick: gn,
          size: "sm",
          style: (le as any).buttonPrimary,
          variant: "primary",
          children: ((n as any).jsx as any)(Ss, {
            id: "6gLBI0"
          })
        })]
      })]
    }) : null;
  let Xs: any;
  ((s as any)[72] as any) !== (x as any) || ((s as any)[73] as any) !== (i as any) ? (Xs = (x as any)({
    id: "hdPaX+",
    values: {
      subjectLabel: i
    }
  }), (s as any)[72] = x, (s as any)[73] = i, (s as any)[74] = Xs) : Xs = (s as any)[74];
  const gs: any = Xs;
  let Qs: any;
  ((s as any)[75] as any) !== (P as any) || ((s as any)[76] as any) !== (h as any) || ((s as any)[77] as any) !== (I as any) || ((s as any)[78] as any) !== (rs as any) || ((s as any)[79] as any) !== (r as any) || ((s as any)[80] as any) !== (Rs as any) || ((s as any)[81] as any) !== (fe as any) || ((s as any)[82] as any) !== (i as any) ? (Qs = rs ? {
    copy: (De as any)(P, {
      hostPhase: I,
      isScreenLoading: !1,
      isScreenUnavailable: !0,
      subjectLabel: i,
      emptyMessage: h,
      isEmptyLoading: !1,
      pullPercent: null
    }),
    onRetry: fe
  } : {
    copy: Rs,
    onRetry: r
  }, (s as any)[75] = P, (s as any)[76] = h, (s as any)[77] = I, (s as any)[78] = rs, (s as any)[79] = r, (s as any)[80] = Rs, (s as any)[81] = fe, (s as any)[82] = i, (s as any)[83] = Qs) : Qs = (s as any)[83];
  const Ys: any = Qs;
  let Js: any;
  ((s as any)[84] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Js = ($ as any)("sand-computer-stage", "sand-1n2onr6 sand-h8yej3 sand-1iyjqo2 sand-s83m0k sand-2lwn1j sand-78zum5 sand-6s0dn4 sand-l56j7k sand-pqogu8"), (s as any)[84] = Js) : Js = (s as any)[84];
  let Zs: any;
  ((s as any)[85] as any) !== (l as any) || ((s as any)[86] as any) !== (ue as any) || ((s as any)[87] as any) !== (me as any) || ((s as any)[88] as any) !== (be as any) || ((s as any)[89] as any) !== (je as any) || ((s as any)[90] as any) !== (e as any) || ((s as any)[91] as any) !== (qs as any) || ((s as any)[92] as any) !== (is as any) || ((s as any)[93] as any) !== (rs as any) || ((s as any)[94] as any) !== (Z as any) || ((s as any)[95] as any) !== (_ as any) || ((s as any)[96] as any) !== (gs as any) || ((s as any)[97] as any) !== (pe as any) || ((s as any)[98] as any) !== (cs as any) || ((s as any)[99] as any) !== (he as any) || ((s as any)[100] as any) !== (Ys as any) ? (Zs = ((n as any).jsx as any)("div", {
    className: Js,
    children: (Z as any) != (null as any) && !rs ? ((n as any).jsxs as any)("div", {
      className: ($ as any)("sand-computer-stage__frame", (({
        0: {
          className: "sand-1n2onr6 sand-78zum5 sand-6s0dn4 sand-l56j7k sand-t9pb60 sand-1ua6jya sand-j04kma"
        },
        1: {
          className: "sand-1n2onr6 sand-78zum5 sand-6s0dn4 sand-l56j7k sand-1ua6jya sand-b3r6kr sand-2u8bby sand-1gnnqk1"
        }
      } as any)[(!!is as any) << (0 as any)] as any).className),
      style: {
        width: `min(100cqw, calc(100cqh * ${Me} / ${Re}))`,
        aspectRatio: `${Me} / ${Re}`
      },
      children: [((n as any).jsx as any)("div", {
        className: (({
          0: {
            className: "sand-10l6tqk sand-10a8y8t sand-1bfcn54"
          },
          2: {
            className: "sand-10l6tqk sand-10a8y8t sand-1gj8qfm"
          },
          1: {
            className: "sand-10l6tqk sand-10a8y8t sand-1bfcn54 sand-g01cxk sand-47corl"
          },
          3: {
            className: "sand-10l6tqk sand-10a8y8t sand-1gj8qfm sand-g01cxk sand-47corl"
          }
        } as any)[((!!is as any) << (1 as any) as any) | ((!!qs as any) << (0 as any) as any)] as any).className,
        ref: Dn,
        children: ((n as any).jsx as any)(Je, {
          ariaLabel: gs,
          firstPaint: he,
          isInteractive: !0,
          isViewerVisible: e,
          onConnectedChange: ue,
          onCrashedChange: me,
          onStartFailed: (): any => (cs as any)((Z as any).stageKey),
          onHostKey: be,
          onReadyChange: je,
          ...((_ as any) == (null as any) ? {} : {
            openedAtMs: _
          }),
          ref: pe,
          src: (Z as any).vncUrl
        }, `${(Z as any).stageKey}:${(Z as any).vncUrl}`)
      }), qs ? ((n as any).jsx as any)(Fn, {}) : null, ((n as any).jsx as any)(cn, {
        agentId: l
      })]
    }) : ((n as any).jsx as any)(an, {
      copy: (Ys as any).copy,
      onRetry: (Ys as any).onRetry,
      tone: "cover"
    })
  }), (s as any)[85] = l, (s as any)[86] = ue, (s as any)[87] = me, (s as any)[88] = be, (s as any)[89] = je, (s as any)[90] = e, (s as any)[91] = qs, (s as any)[92] = is, (s as any)[93] = rs, (s as any)[94] = Z, (s as any)[95] = _, (s as any)[96] = gs, (s as any)[97] = pe, (s as any)[98] = cs, (s as any)[99] = he, (s as any)[100] = Ys, (s as any)[101] = Zs) : Zs = (s as any)[101];
  const _e: any = Zs;
  let hs: any;
  ((s as any)[102] as any) !== (e as any) ? (hs = ($ as any)("sand-computer-fullscreen", (({
    0: {
      className: "sand-ixxii4 sand-10a8y8t sand-f5e64p sand-78zum5 sand-dt5ytf sand-1t137rt"
    },
    1: {
      className: "sand-ixxii4 sand-10a8y8t sand-f5e64p sand-78zum5 sand-dt5ytf sand-1t137rt sand-lshs6z sand-47corl"
    }
  } as any)[(!e as any) << (0 as any)] as any).className), (s as any)[102] = e, (s as any)[103] = hs) : hs = (s as any)[103];
  let se: any;
  ((s as any)[104] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (se = {
    backgroundColor: ((Xe as any).cover as any).css
  }, (s as any)[104] = se) : se = (s as any)[104];
  let ys: any;
  ((s as any)[105] as any) !== (xe as any) || ((s as any)[106] as any) !== (we as any) ? (ys = xe ? {
    onStartTeach: we
  } : {}, (s as any)[105] = xe, (s as any)[106] = we, (s as any)[107] = ys) : ys = (s as any)[107];
  let ps: any;
  ((s as any)[108] as any) !== (N as any) || ((s as any)[109] as any) !== (ys as any) ? (ps = ((n as any).jsx as any)(tn, {
    onExitFullscreen: N,
    ...ys
  }), (s as any)[108] = N, (s as any)[109] = ys, (s as any)[110] = ps) : ps = (s as any)[110];
  let ks: any;
  ((s as any)[111] as any) !== (is as any) ? (ks = ($ as any)("sand-computer-body", (({
    0: {
      className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-l56j7k sand-1iyjqo2 sand-s83m0k sand-2lwn1j sand-h8yej3 sand-e8ttls"
    },
    1: {
      className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-1iyjqo2 sand-s83m0k sand-2lwn1j sand-h8yej3 sand-e8ttls sand-1qjc9v5 sand-1nhvcw1 sand-exx8yu sand-yri2b sand-1l90r2v sand-1c1uobl"
    }
  } as any)[(!!is as any) << (0 as any)] as any).className), (s as any)[111] = is, (s as any)[112] = ks) : ks = (s as any)[112];
  let js: any;
  ((s as any)[113] as any) !== (l as any) || ((s as any)[114] as any) !== (Ks as any) || ((s as any)[115] as any) !== (N as any) || ((s as any)[116] as any) !== (y as any) || ((s as any)[117] as any) !== (i as any) ? (js = ((n as any).jsx as any)(dn, {
    agentId: l,
    isOverlayTone: !0,
    isTeachTaskAvailable: Ks,
    onStopAndSave: N,
    recordingAgentName: y,
    subjectLabel: i
  }), (s as any)[113] = l, (s as any)[114] = Ks, (s as any)[115] = N, (s as any)[116] = y, (s as any)[117] = i, (s as any)[118] = js) : js = (s as any)[118];
  let vs: any;
  ((s as any)[119] as any) !== (k as any) ? (vs = (k as any) != (null as any) ? ((n as any).jsx as any)("div", {
    className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-1jnr06f sand-2lah0s sand-h8yej3 sand-euugli sand-1k70j0n",
    children: ((n as any).jsx as any)("span", {
      className: ((ws as any)((us as any).label, (le as any).captionText) as any).className,
      children: (k as any).title
    })
  }) : null, (s as any)[119] = k, (s as any)[120] = vs) : vs = (s as any)[120];
  let bs: any;
  ((s as any)[121] as any) !== (C as any) || ((s as any)[122] as any) !== (K as any) ? (bs = C ? K : [], (s as any)[121] = C, (s as any)[122] = K, (s as any)[123] = bs) : bs = (s as any)[123];
  let Ns: any;
  ((s as any)[124] as any) !== (bs as any) ? (Ns = ((n as any).jsx as any)(nn, {
    monitors: bs,
    onFocusMonitor: zs
  }), (s as any)[124] = bs, (s as any)[125] = Ns) : Ns = (s as any)[125];
  let xs: any;
  ((s as any)[126] as any) !== (Se as any) || ((s as any)[127] as any) !== (_e as any) || ((s as any)[128] as any) !== (ks as any) || ((s as any)[129] as any) !== (js as any) || ((s as any)[130] as any) !== (vs as any) || ((s as any)[131] as any) !== (Ns as any) ? (xs = ((n as any).jsxs as any)("div", {
    className: ks,
    children: [Se, js, _e, vs, Ns]
  }), (s as any)[126] = Se, (s as any)[127] = _e, (s as any)[128] = ks, (s as any)[129] = js, (s as any)[130] = vs, (s as any)[131] = Ns, (s as any)[132] = xs) : xs = (s as any)[132];
  let ee: any;
  return ((s as any)[133] as any) !== (gs as any) || ((s as any)[134] as any) !== (ve as any) || ((s as any)[135] as any) !== (hs as any) || ((s as any)[136] as any) !== (ps as any) || ((s as any)[137] as any) !== (xs as any) ? (ee = ((n as any).jsxs as any)("div", {
    "aria-label": gs,
    className: hs,
    ref: ve,
    role: "region",
    style: se,
    tabIndex: -1,
    children: [ps, xs]
  }), (s as any)[133] = gs, (s as any)[134] = ve, (s as any)[135] = hs, (s as any)[136] = ps, (s as any)[137] = xs, (s as any)[138] = ee) : ee = (s as any)[138], ee;
}
function Gn(this: any): any {
  return (Vn as any)("computer-stage-first-paint");
}
const ea: any = ((Object as any).freeze as any)(((Object as any).defineProperty as any)({
  __proto__: null,
  BoxDesktopModal: fn,
  isTeachTaskAvailable: un,
  resolveActiveHandoff: rn,
  resolveFocus: mn,
  resolveHandBackTarget: on
}, (Symbol as any).toStringTag, {
  value: "Module"
}));
export { an as C, on as a, De as b, ea as c, Un as f, rn as r };
//# debugId=1a846f32-6b5e-4e3a-b0a2-868a60b51ac8
