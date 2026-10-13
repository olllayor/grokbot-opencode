declare var clearTimeout: any;
declare var global: any;
declare var self: any;
declare var setTimeout: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "7f108c27-5a37-4005-9b57-06f717acc1df", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-7f108c27-5a37-4005-9b57-06f717acc1df");
  } catch (e: any) {}
} as any)();
const __vite__mapDeps: any = (i: any, m: any = __vite__mapDeps, d: any = (m as any).f || ((m as any).f = ["./chunk-DefaultCode-CGxOfvcH.js", "./index.eager-vendor-Qbf9YA6n.js", "./index.eager-platform-Dcfeegfw.js", "./index.eager-common-CdCvBQNJ.js", "./chunk-shiki-token-cache-hLYN1QGX.js", "./chunk-index-C0dBjfzC.js"])): any => ((i as any).map as any)((i: any): any => (d as any)[i]);
import { g as be } from "./chunk-shiki-token-cache-hLYN1QGX.js";
import { c as qt, r as $t } from "./chunk-shiki-token-cache-hLYN1QGX.js";
import { r as d, j as o, p as U, _ as xe } from "./index.eager-vendor-Qbf9YA6n.js";
import { b8 as x, b5 as ve, b9 as Ne, ba as Se, bb as je, bc as ze, bd as Ce, a_ as Ie } from "./index.eager-platform-Dcfeegfw.js";
import { g as qe, s as ee, T as $e } from "./chunk-ToggleIconButton-DDH2e1NR.js";
import { r as Pe } from "./chunk-get-file-icon-ZAkFyGfn.js";
import { W as we } from "./index-ZYxf-aBb.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./index.eager-app-Cj5f8Gby.js";
const Ee: string = "seti",
  Fe: any = ((d as any).createContext as any)(Ee);
function te(this: any): any {
  return ((d as any).useContext as any)(Fe);
}
const se: string = "base",
  h: any = {
    base: {
      k1xSpc: "ui-3nfvp2",
      kGNEyG: "ui-6s0dn4",
      kjj79g: "ui-l56j7k",
      khiITx: "ui-j26tf6",
      kTUp5R: "ui-bleps",
      kMv6JI: "ui-1qtuznc",
      kKX8nH: "ui-1j61x8r",
      k63SB2: "ui-1fcty0u",
      kLWn49: "ui-o5v014",
      kXLuUW: "ui-xymvpz",
      kzqmXN: "ui-1oai4fc",
      kZKoxP: "ui-higkf7",
      kGuDYH: "ui-1tachi3",
      "--icon-size": "ui-pyhgd6",
      "--seti-glyph-scale": "ui-1cpzp08",
      kgeoSG: "ui-fzk3lv",
      kHh9I5: "ui-xn505q",
      $$css: !0
    },
    cursorIcon: {
      kMv6JI: "ui-1dgk36h",
      $$css: !0
    },
    sizeXs: {
      kzqmXN: "ui-6jxa94",
      kZKoxP: "ui-1v9usgg",
      kGuDYH: "ui-if65rj",
      kHh9I5: "ui-hm1o90",
      $$css: !0
    },
    sizeSm: {
      kzqmXN: "ui-1kky2od",
      kZKoxP: "ui-lup9mm",
      kGuDYH: "ui-1j61zf2",
      kHh9I5: "ui-4pprgf",
      $$css: !0
    },
    sizeBase: {
      kzqmXN: "ui-w4jnvo",
      kZKoxP: "ui-1qx5ct2",
      kGuDYH: "ui-wsyq91",
      kHh9I5: "ui-b7h94w",
      $$css: !0
    },
    sizeLg: {
      kzqmXN: "ui-17z2i9w",
      kZKoxP: "ui-17rw0jw",
      kGuDYH: "ui-1i1m3gp",
      kHh9I5: "ui-ssash8",
      $$css: !0
    },
    sizeXl: {
      kzqmXN: "ui-gd8bvy",
      kZKoxP: "ui-1fgtraw",
      kGuDYH: "ui-neq65o",
      kHh9I5: "ui-xf2evh",
      $$css: !0
    }
  };
function Le(this: any, t: any, e: any): any {
  return [(h as any).base, (_e as any)(t), e ? (h as any).cursorIcon : null];
}
function _e(this: any, t: any): any {
  if ((typeof t as any) == ("number" as any)) return null;
  switch (t) {
    case "xs":
      return (h as any).sizeXs;
    case "sm":
      return (h as any).sizeSm;
    case "base":
      return (h as any).sizeBase;
    case "lg":
      return (h as any).sizeLg;
    case "xl":
      return (h as any).sizeXl;
  }
}
function Ae(this: any, {
  name: t,
  size: e,
  extraClassName: s,
  rootStyle: n,
  style: u
}: any): any {
  const a: any = (typeof e as any) == ("number" as any),
    i: any = (qe as any)(t),
    r: any = ((i as any).fontFamily as any) === ("cursor" as any),
    c: any = {
      "--seti-content": `"${(i as any).char}"`,
      "--seti-glyph-scale": (String as any)((i as any).glyphScale ?? 1),
      color: (ee as any)((i as any).semanticColor),
      ...(a ? {
        "--icon-size": `${e}px`
      } : {}),
      ...(u ?? {})
    },
    l: any = (x as any)({
      rootClass: "ui-seti",
      stylexStyles: [(Le as any)(e, r), n],
      className: (ve as any)(r ? "ui-seti--cursor-icon" : void 0, s),
      style: c
    });
  return {
    cssClass: (l as any).className,
    style: (l as any).style,
    dataSize: a ? void 0 : e
  };
}
function ie(this: any, {
  name: t,
  size: e,
  className: s,
  rootStyle: n,
  title: u,
  "aria-label": a,
  "aria-hidden": i,
  style: r,
  ref: c
}: any): any {
  (ie as any).d = 3533488892;
  const l: any = (Ae as any)({
    name: t,
    size: e ?? se,
    extraClassName: s,
    rootStyle: n,
    style: r
  });
  return ((o as any).jsx as any)("span", {
    "aria-label": a,
    "aria-hidden": i ?? (a ? void 0 : !0),
    role: "img",
    ref: c,
    className: (l as any).cssClass,
    "data-size": (l as any).dataSize,
    style: (l as any).style,
    title: u ?? a
  });
}
const Be: any = {
    xs: 10,
    sm: 12,
    base: 12,
    lg: 14,
    xl: 16
  },
  De: any = {
    18: 10,
    20: 11
  };
function Oe(this: any, t: any): any {
  return (typeof t as any) == ("number" as any) ? (De as any)[t] ?? t : (Be as any)[t ?? se];
}
function Te(this: any, t: any): any {
  const e: any = ((/^([\d.]+)em$/i as any).exec as any)(((t as any).trim as any)());
  return (e as any) !== (null as any) && (((Number as any).parseFloat as any)((e as any)[1]) as any) > (1 as any);
}
function He(this: any, t: any, e: any): any {
  const {
      fontSize: s,
      ...n
    }: any = e ?? {},
    a: any = ((n as any)["--icon-size"] as any) === ("1em" as any) && (typeof s as any) == ("string" as any) && !(Te as any)(s);
  return {
    ...n,
    ...(a ? {
      fontSize: s
    } : {}),
    color: (ee as any)(t)
  };
}
function A(this: any, {
  name: t,
  variant: e,
  size: s,
  style: n,
  ...u
}: any): any {
  (A as any).d = 1528846892;
  const a: any = (te as any)(),
    i: any = (Pe as any)({
      filenameOrExt: t,
      preferred: e ?? a
    });
  return ((i as any).variant as any) === ("seti" as any) ? ((o as any).jsx as any)(ie, {
    ...u,
    name: t,
    size: s,
    style: n
  }) : ((o as any).jsx as any)(we, {
    ...u,
    name: (i as any).iconName,
    variant: (i as any).style,
    size: (Oe as any)(s),
    style: (He as any)((i as any).color, n)
  });
}
function k(this: any, t: any): any {
  const e: any = ((t as any).trim as any)();
  if ((e as any) === ("" as any)) return;
  const s: any = (parseInt as any)(e, 10);
  if (!((Number as any).isNaN as any)(s) && (((s as any).toString as any)() as any) === (e as any) && ((Number as any).isSafeInteger as any)(s)) return s;
}
function E(this: any, t: any): any {
  const e: any = ((t as any).lastIndexOf as any)(".");
  return (e as any) === (-1 as any) ? "" : ((t as any).slice as any)((e as any) + (1 as any));
}
function g(this: any, t: any, e: any): any {
  const s: any = ((t as any).indexOf as any)("!");
  if ((s as any) === (-1 as any)) return {
    value: t,
    clickable: e
  };
  const n: any = ((t as any).slice as any)((s as any) + (1 as any));
  return {
    value: ((t as any).slice as any)(0, s),
    clickable: (n as any) === ("citation" as any) ? !0 : e
  };
}
function Re(this: any, t: any): any {
  const [e, s, n, u]: any = ((t as any).map as any)((l: any): any => ((l as any).trim as any)()),
    a: any = (k as any)(s),
    i: any = (k as any)(n);
  if ((a as any) === (void 0 as any) || (i as any) === (void 0 as any)) return null;
  const {
    value: r,
    clickable: c
  }: any = (g as any)(u, !0);
  return {
    language: e,
    filePath: r,
    startLine: a,
    endLine: i,
    clickable: c
  };
}
function Me(this: any, t: any): any {
  const [e, s, n]: any = ((t as any).map as any)((i: any): any => ((i as any).trim as any)()),
    u: any = (k as any)(e),
    a: any = (k as any)(s);
  if ((u as any) !== (void 0 as any) && (a as any) !== (void 0 as any)) {
    const {
      value: i,
      clickable: r
    }: any = (g as any)(n, !0);
    return {
      language: (E as any)(i),
      filePath: i,
      startLine: u,
      endLine: a,
      clickable: r
    };
  }
  if (((s as any).includes as any)("-")) {
    const i: any = ((s as any).split as any)("-");
    if (((i as any).length as any) === (2 as any)) {
      const r: any = (k as any)((i as any)[0]),
        c: any = (k as any)((i as any)[1]);
      if ((r as any) !== (void 0 as any) && (c as any) !== (void 0 as any)) {
        const {
          value: l,
          clickable: m
        }: any = (g as any)(n, !0);
        return {
          language: e,
          filePath: l,
          startLine: r,
          endLine: c,
          clickable: m
        };
      }
    }
  }
  return null;
}
function Xe(this: any, t: any): any {
  const [e, s]: any = ((t as any).map as any)((i: any): any => ((i as any).trim as any)());
  if (((e as any).includes as any)("-")) {
    const i: any = ((e as any).split as any)("-");
    if (((i as any).length as any) === (2 as any)) {
      const r: any = (k as any)((i as any)[0]),
        c: any = (k as any)((i as any)[1]);
      if ((r as any) !== (void 0 as any) && (c as any) !== (void 0 as any)) {
        const {
          value: l,
          clickable: m
        }: any = (g as any)(s, !0);
        return {
          language: (E as any)(l),
          filePath: l,
          startLine: r,
          endLine: c,
          clickable: m
        };
      }
    }
  }
  const n: any = (k as any)(e);
  if ((n as any) !== (void 0 as any)) {
    const {
      value: i,
      clickable: r
    }: any = (g as any)(s, !0);
    return {
      language: (E as any)(i),
      filePath: i,
      startLine: n,
      endLine: n,
      clickable: r
    };
  }
  const {
    value: u,
    clickable: a
  }: any = (g as any)(s, !1);
  return {
    language: e,
    filePath: u,
    clickable: a
  };
}
function We(this: any, t: any): any {
  const e: any = ((t as any).split as any)(":");
  let s: any = null;
  return ((e as any).length as any) === (4 as any) ? s = (Re as any)(e) : ((e as any).length as any) === (3 as any) ? s = (Me as any)(e) : ((e as any).length as any) === (2 as any) && (s = (Xe as any)(e)), s ? {
    language: (s as any).language,
    filePath: (s as any).filePath,
    startLine: (s as any).startLine,
    endLine: (s as any).endLine,
    clickable: (s as any).clickable
  } : null;
}
function Ve(this: any, t: any): any {
  const {
    value: e,
    clickable: s
  }: any = (g as any)(t, !1);
  return ((e as any).includes as any)(".") ? {
    language: (E as any)(e),
    filePath: e,
    startLine: void 0,
    endLine: void 0,
    clickable: s
  } : {
    language: e,
    filePath: void 0,
    startLine: void 0,
    endLine: void 0,
    clickable: s
  };
}
function jt(this: any, t: any): any {
  const e: any = t ?? "";
  if (((e as any).includes as any)(":")) {
    const s: any = (We as any)(e);
    return s || {
      language: e,
      filePath: void 0,
      startLine: void 0,
      endLine: void 0,
      clickable: !1
    };
  }
  return (Ve as any)(e);
}
const Ze: number = 120;
function Ge(this: any, t: any, e: any, s: any, n: any): any {
  const u: any = e ? Ze : 0;
  switch (t) {
    case void 0:
      return {
        sync: !e,
        asyncDebounceMs: u
      };
    case "sync":
      return {
        tokenization: {
          kind: "inline"
        }
      };
    case "async":
    case "worker":
      {
        if (e) return {
          tokenization: {
            kind: "worker",
            debounceMs: u,
            onRefusal: "plain"
          }
        };
        const a: any = (t as any) === ("worker" as any) ? null : s;
        return {
          tokenization: {
            kind: "inline-when-warm",
            ...((a as any) === (void 0 as any) ? {} : {
              scheduleWarmup: a
            }),
            ...((n as any) === (void 0 as any) ? {} : {
              scheduleApply: n
            })
          }
        };
      }
  }
}
const ne: any = (je as any)((): any => (xe as any)((): any => import("./chunk-DefaultCode-CGxOfvcH.js"), (__vite__mapDeps as any)([0, 1, 2, 3, 4, 5]), (import.meta as any).url), (t: any): any => (t as any).DefaultCode),
  Ke: any = (ne as any).Component;
async function zt(this: any): Promise<any> {
  await ((ne as any).preload as any)();
}
const Ye: any = {
    base: {
      kVAEAm: "ui-1n2onr6",
      keoZOQ: "ui-1j66ri5 ui-14l7nz5",
      km5ZXQ: "ui-1yf7rl7",
      k1K539: "ui-t4zf8z ui-zboxd6",
      koQZXg: "ui-j3b58b",
      kIxVMA: "ui-1dcy8l4",
      ksF3WI: "ui-1upd4za",
      kqGeR4: "ui-3n1r3t",
      kYm2EN: "ui-1d76mj",
      kEafiO: "ui-178xt8z",
      kPef9Z: "ui-13fuv20",
      kLZC3w: "ui-u6elxy",
      kWqL5O: "ui-s1s249",
      kSWEuD: "ui-32b0ac",
      k26BEO: "ui-r3jcmw",
      kt9PQ7: "ui-so031l",
      kfdmCh: "ui-1q0q8m5",
      kL6WhQ: "ui-8daab9",
      kZ1KPB: "ui-e0pwq",
      k4WBpm: "ui-19ypqd9",
      kaZRDh: "ui-18ajz7i",
      kXHlph: "ui-6ikm8r",
      kORKVm: "ui-10wlt62",
      kWkggS: "ui-1ua6jya",
      $$css: !0
    }
  },
  oe: any = ((d as any).createContext as any)("plain");
(oe as any).Provider;
function ae(this: any, {
  code: t,
  className: e,
  showLineNumbers: s = !1,
  startLine: n = 1,
  style: u,
  tokens: a,
  wordWrap: i = !1
}: any): any {
  (ae as any).d = 2822910204;
  const c: any = (((d as any).useContext as any)(oe) as any) === ("markdown-flow" as any),
    l: any = ({
      0: {
        className: "ui-1wm8ruf ui-1lfj9qp ui-1ja60sm ui-13r5tfd ui-o9w7m5 ui-lgbajd"
      },
      1: {
        className: "ui-1wm8ruf ui-1lfj9qp ui-1ja60sm ui-13r5tfd ui-o9w7m5 ui-lgbajd ui-uve7l6 ui-1xpa7k ui-1rgtt3y ui-1uhho1l"
      }
    } as any)[((!c || (a as any) !== (void 0 as any)) as any) << (0 as any)],
    m: any = ({
      0: {
        className: "ui-1ghz6dp ui-1heor9g ui-jb2p0i ui-1qlqyl8 ui-15bjb6t ui-1sdyfia ui-16b7oty ui-wp9v23"
      },
      2: {
        className: "ui-1ghz6dp ui-1heor9g ui-jb2p0i ui-1qlqyl8 ui-15bjb6t ui-1sdyfia ui-1q57ora ui-33uob6 ui-saxbkt ui-79ra4s ui-1043rbw ui-i07v4r ui-w2csxc"
      },
      1: {
        className: "ui-1ghz6dp ui-1heor9g ui-jb2p0i ui-1qlqyl8 ui-15bjb6t ui-16b7oty ui-wp9v23 ui-126k92a ui-j0a0fe"
      },
      3: {
        className: "ui-1ghz6dp ui-1heor9g ui-jb2p0i ui-1qlqyl8 ui-15bjb6t ui-1q57ora ui-33uob6 ui-saxbkt ui-79ra4s ui-1043rbw ui-i07v4r ui-w2csxc ui-126k92a ui-j0a0fe"
      }
    } as any)[((!!c as any) << (1 as any) as any) | ((!!i as any) << (0 as any) as any)],
    S: any = `ui-default-code${e ? ` ${e}` : ""}${(l as any).className ? ` ${(l as any).className}` : ""}`,
    v: any = {
      ...(l as any).style,
      ...u
    };
  if ((a as any) !== (void 0 as any)) {
    const j: any = {
        className: "ui-13r5tfd"
      },
      z: any = {
        className: "ui-78zum5 ui-10fesj9"
      },
      C: any = {
        className: "ui-1264ykn ui-1jkygx ui-4b2ntj ui-y5h43f ui-1hr2gdg ui-87ps6o ui-2lah0s"
      },
      I: any = ({
        0: {
          className: "ui-1iyjqo2 ui-16b7oty ui-o7x2bt ui-1sdyfia"
        },
        1: {
          className: "ui-1iyjqo2 ui-16b7oty ui-o7x2bt ui-euugli ui-126k92a ui-j0a0fe"
        }
      } as any)[(!!i as any) << (0 as any)];
    return ((o as any).jsx as any)("div", {
      className: S,
      style: v,
      children: ((o as any).jsx as any)("div", {
        className: (j as any).className,
        style: (j as any).style,
        children: ((a as any).map as any)((F: any, f: any): any => ((o as any).jsxs as any)("div", {
          className: `ui-default-code__line ${(z as any).className}`,
          style: (z as any).style,
          children: [s ? ((o as any).jsx as any)("span", {
            className: (C as any).className,
            style: (C as any).style,
            children: (n as any) + (f as any)
          }) : null, ((o as any).jsx as any)("div", {
            className: `ui-default-code__line-content ${(I as any).className}`,
            style: (I as any).style,
            children: ((F as any).map as any)((y: any): any => ((o as any).jsx as any)("span", {
              className: (y as any).className,
              style: {
                color: (y as any).color,
                ...(be as any)((y as any).fontStyle)
              },
              children: (y as any).content
            }, (y as any).col))
          })]
        }, (n as any) + (f as any)))
      })
    });
  }
  return ((o as any).jsx as any)("div", {
    className: S,
    style: v,
    children: ((o as any).jsx as any)("pre", {
      className: (m as any).className,
      style: (m as any).style,
      children: t
    })
  });
}
const Q: any = {
    base: {
      k1xSpc: "ui-78zum5",
      kGNEyG: "ui-6s0dn4",
      kOIVth: "ui-pkkfsy",
      kLKAdn: "ui-uve7l6",
      kpe85a: "ui-1jwyyqy",
      kGO01o: "ui-1rgtt3y",
      kE3dHu: "ui-437fdo",
      kWkggS: "ui-1ua6jya ui-1iuyybk",
      kEafiO: "ui-972fbf",
      kPef9Z: "ui-1ejq31n",
      kWqL5O: "ui-gfja2r",
      kSWEuD: "ui-11pwa6s",
      kt9PQ7: "ui-so031l",
      kfdmCh: "ui-1q0q8m5",
      kL6WhQ: "ui-17fyfba",
      kZ1KPB: "ui-yj58a3",
      k4WBpm: "ui-1b16gh4",
      kzqmXN: "ui-h8yej3",
      k9WMMc: "ui-dpxx8g",
      kMv6JI: "ui-jb2p0i",
      kGuDYH: "ui-1qlqyl8",
      kKX8nH: "ui-1t35e8",
      k63SB2: "ui-1pd3egz",
      kLWn49: "ui-15bjb6t",
      kMwMTN: "ui-1heor9g",
      kB7OPa: "ui-9f619",
      k7Eaqz: "ui-euugli",
      k1ekBW: "ui-15406qy",
      kIyJzY: "ui-1g2r6go",
      kAMwcw: "ui-z4gly6",
      kMeerF: "ui-1k57tk5 ui-1l9t207 ui-1x65lqo",
      k3XXqK: "ui-1t137rt ui-hlp2gg ui-i5y0ii",
      $$css: !0
    },
    clickable: {
      kkrTdU: "ui-1ypdohk",
      $$css: !0
    }
  },
  Ue: any = {
    base: {
      kMwMTN: "ui-19aaqeu",
      khDVqt: "ui-uxw1ft",
      kXHlph: "ui-6ikm8r",
      kORKVm: "ui-10wlt62",
      kg5iWk: "ui-lyipyv",
      $$css: !0
    }
  },
  Qe: any = {
    base: {
      kMwMTN: "ui-4b2ntj",
      khDVqt: "ui-uxw1ft",
      kmuXW: "ui-2lah0s",
      $$css: !0
    }
  },
  Je: any = {
    base: {
      kVAEAm: "ui-1n2onr6",
      $$css: !0
    }
  },
  J: any = {
    wordWrap: {
      kzqmXN: "ui-h8yej3",
      k7Eaqz: "ui-euugli",
      ks0D6T: "ui-193iq5w",
      $$css: !0
    },
    horizontal: {
      kzqmXN: "ui-ezivpi",
      k7Eaqz: "ui-gqtt45",
      ks0D6T: "ui-1x1rfll",
      $$css: !0
    }
  },
  et: any = {
    base: {
      kVAEAm: "ui-10l6tqk",
      k87sOh: "ui-8hg36d",
      kCIrl2: "ui-7zl9wm",
      kY2c9j: "ui-1n327nk",
      k1xSpc: "ui-78zum5",
      kGNEyG: "ui-6s0dn4",
      kSiTet: "ui-g01cxk ui-87vcqg ui-1euntei ui-1npyufz",
      $$css: !0
    }
  },
  B: any = {
    base: {
      k1xSpc: "ui-78zum5",
      $$css: !0
    },
    copied: {
      kMwMTN: "ui-1w5rjie",
      $$css: !0
    },
    plate: {
      kWkggS: "ui-1ua6jya",
      $$css: !0
    }
  };
function tt(this: any): any {
  return [{
    "ui--default-marker": "ui--default-marker",
    $$css: !0
  }, (Ye as any).base];
}
function st(this: any, t: any): any {
  return [(Q as any).base, t ? (Q as any).clickable : null];
}
function it(this: any): any {
  return [(ze as any).root, (Ue as any).base];
}
function nt(this: any): any {
  return [(Ce as any).root, (Qe as any).base];
}
function ot(this: any): any {
  return (Je as any).base;
}
function at(this: any): any {
  return (et as any).base;
}
function ut(this: any, t: any): any {
  return [(B as any).base, t ? (B as any).copied : null];
}
function rt(this: any): any {
  return (B as any).plate;
}
const lt: any = {
    backgroundColor: "transparent",
    minHeight: 0,
    width: "max-content",
    minWidth: "100%"
  },
  ct: any = {
    backgroundColor: "transparent",
    minHeight: 0,
    width: "100%",
    minWidth: 0
  };
function dt(this: any, t: any): any {
  const e: any = ((t as any).lastIndexOf as any)(".");
  return (e as any) === (-1 as any) ? "" : ((t as any).slice as any)((e as any) + (1 as any));
}
function kt(this: any, t: any): any {
  const e: any = ((Math as any).max as any)(((t as any).lastIndexOf as any)("/"), ((t as any).lastIndexOf as any)("\\"));
  return (e as any) === (-1 as any) ? t : ((t as any).slice as any)((e as any) + (1 as any));
}
function mt(this: any, {
  children: t,
  className: e,
  filePath: s,
  startLine: n,
  endLine: u,
  onHeaderClick: a,
  onHeaderContextMenu: i,
  copyText: r,
  copyButtonSize: c = "sm",
  showLineNumbers: l = !1,
  showIndentGuides: m = !0,
  scrollable: S = !0,
  scrollMaxHeight: v,
  tokens: j,
  streaming: z,
  tokenization: C,
  scheduleWarmup: I,
  scheduleApply: F,
  wordWrap: f = !1,
  viewport: y,
  style: ue,
  ...re
}: any): any {
  (mt as any).d = 3011081172;
  const le: any = (te as any)(),
    ce: any = ((d as any).useRef as any)(null),
    [N, D]: any = ((d as any).useState as any)(!1),
    L: any = ((d as any).useRef as any)(void 0);
  ((d as any).useEffect as any)((): any => (): any => (clearTimeout as any)((L as any).current), []);
  let q: any = "text";
  if (e) {
    const p: any = ((e as any).match as any)(/language-(\S+)/);
    p && (q = (p as any)[1]);
  }
  if (s && (q as any) === ("text" as any)) {
    const p: any = (dt as any)(s);
    p && (q = p);
  }
  const b: any = (typeof t as any) == ("string" as any) ? ((t as any).replace as any)(/\n$/, "") : "",
    O: any = `calc(${b ? (((b as any).split as any)(`
`) as any).length : 0} * ${(Ne as any)["--cursor-line-height-base"]} + 2 * ${(Se as any)["--cursor-spacing-1-5"]})`,
    $: any = (v as any) !== (void 0 as any),
    de: any = ((d as any).useCallback as any)((): any => {
      (clearTimeout as any)((L as any).current), (D as any)(!0), r?.(b), (L as any).current = (setTimeout as any)((): any => (D as any)(!1), 2e3);
    }, [b, r]),
    ke: any = (): any => {
      a && (a as any)();
    },
    P: any = !!s,
    me: any = P || $ ? void 0 : O,
    fe: any = $ ? void 0 : O,
    ye: any = (n as any) !== (void 0 as any) && (u as any) !== (void 0 as any) && (n as any) > (0 as any) && (u as any) > (0 as any),
    T: any = P && !!a,
    _: any = s ? (kt as any)(s) : "";
  if (!b) return ((o as any).jsx as any)("code", {
    className: e,
    children: t
  });
  const H: any = (x as any)({
      rootClass: "ui-code-block",
      stylexStyles: (tt as any)(),
      style: {
        minHeight: me,
        ...ue
      }
    }),
    w: any = (x as any)({
      rootClass: "ui-code-block-header",
      stylexStyles: (st as any)(T)
    }),
    R: any = (U as any)((it as any)()),
    M: any = (U as any)((nt as any)()),
    X: any = (x as any)({
      rootClass: "ui-code-block-content",
      stylexStyles: (ot as any)(),
      style: {
        minHeight: fe
      }
    }),
    W: any = (x as any)({
      rootClass: "ui-code-block-copy-overlay",
      stylexStyles: (at as any)()
    }),
    V: any = (x as any)({
      rootClass: "ui-code-block-copy",
      stylexStyles: (ut as any)(N)
    }),
    Z: any = ((o as any).jsxs as any)((o as any).Fragment, {
      children: [(le as any) === ("seti" as any) ? ((o as any).jsx as any)(A, {
        name: _,
        size: "sm"
      }) : ((o as any).jsx as any)("span", {
        className: "ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-1pwdyn5 ui-1vatr1o ui-2lah0s",
        children: ((o as any).jsx as any)(A, {
          name: _,
          size: "sm"
        })
      }), ((o as any).jsx as any)("span", {
        className: (R as any).className,
        style: (R as any).style,
        children: _
      }), ye && ((o as any).jsxs as any)("span", {
        className: (M as any).className,
        style: (M as any).style,
        children: ["Ln ", n, "\u2013", u]
      })]
    }),
    pe: any = r ? ((o as any).jsx as any)("div", {
      className: (W as any).className,
      style: (W as any).style,
      children: ((o as any).jsx as any)("div", {
        className: (V as any).className,
        "data-copied": N || void 0,
        style: (V as any).style,
        children: ((o as any).jsx as any)($e, {
          "aria-label": N ? "Copied" : "Copy code",
          tone: N ? "success" : void 0,
          icon: "copy",
          onPressedChange: (p: any): any => {
            p && (de as any)();
          },
          pressed: N,
          pressedIcon: "check",
          rootStyle: (rt as any)(),
          size: c,
          variant: "outline"
        })
      })
    }) : null,
    he: any = P ? T ? ((o as any).jsx as any)("button", {
      type: "button",
      className: (w as any).className,
      style: (w as any).style,
      "data-clickable": !0,
      onClick: ke,
      onContextMenu: i,
      children: Z
    }) : ((o as any).jsx as any)("div", {
      className: (w as any).className,
      style: (w as any).style,
      onContextMenu: i,
      children: Z
    }) : null,
    G: any = {
      code: b,
      language: q,
      startLine: n ?? 1,
      showLineNumbers: l,
      showIndentGuides: m,
      tokens: j,
      ...(Ge as any)(C, z, I, F),
      className: "ui-code-block-default-code",
      style: f ? ct : lt,
      wordWrap: f,
      viewport: y
    },
    K: any = ((o as any).jsx as any)((d as any).Suspense, {
      fallback: ((o as any).jsx as any)(ae, {
        ...G
      }),
      children: ((o as any).jsx as any)(Ke, {
        ...G
      })
    }),
    Y: any = f ? "vertical" : $ ? "both" : "horizontal",
    ge: any = S && (!f || $) ? ((o as any).jsx as any)(Ie, {
      direction: Y,
      scrollbarVisibility: "hover",
      maxHeight: v,
      contentStyle: f ? (J as any).wordWrap : (Y as any) === ("horizontal" as any) ? (J as any).horizontal : void 0,
      children: K
    }) : K;
  return ((o as any).jsxs as any)("div", {
    ref: ce,
    className: (H as any).className,
    "data-has-header": P || void 0,
    style: (H as any).style,
    ...re,
    children: [he, ((o as any).jsxs as any)("div", {
      className: (X as any).className,
      style: (X as any).style,
      children: [pe, ge]
    })]
  });
}
export { mt as CodeBlock, qt as clearTokenCache, jt as parseFenceHeader, zt as preloadDefaultCode, $t as readCachedTokens };
//# debugId=7f108c27-5a37-4005-9b57-06f717acc1df
