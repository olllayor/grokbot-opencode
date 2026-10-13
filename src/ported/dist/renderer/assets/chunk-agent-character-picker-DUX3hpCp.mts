declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "5e1ac3ab-91a6-4e0f-9b2c-0b8866d33b61", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-5e1ac3ab-91a6-4e0f-9b2c-0b8866d33b61");
  } catch (e: any) {}
} as any)();
import { c as E, j as k, u as X, p as B } from "./index.eager-vendor-Qbf9YA6n.js";
import { b7 as U, b8 as Z, r as T, aK as $, Q as D, M as Q } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import { I as V, q as W, H as z } from "./index.eager-common-CdCvBQNJ.js";
import { Q as Y, U as J } from "./index-ZYxf-aBb.js";
const A: number = 5,
  K: number = 36,
  F: number = 3,
  ss: number = 1,
  as: any = {
    blob: {
      id: "DnzcfX"
    },
    pebble: {
      id: "6fpvq3"
    },
    bean: {
      id: "3eKZzU"
    },
    egg: {
      id: "b7bZwx"
    },
    squircle: {
      id: "itJYgC"
    },
    tablet: {
      id: "qwHPn1"
    },
    capsule: {
      id: "PTZIMT"
    },
    cylinder: {
      id: "6Xa1Po"
    },
    hex: {
      id: "gWfI35"
    },
    gem: {
      id: "drrHCz"
    },
    crystal: {
      id: "Y65Raz"
    },
    wedge: {
      id: "8rPpPV"
    },
    shield: {
      id: "XVlJ9M"
    },
    dome: {
      id: "dfGYZa"
    },
    arch: {
      id: "ldKEXn"
    },
    cloud: {
      id: "R7zx6E"
    },
    teardrop: {
      id: "Q+z+5Y"
    },
    leaf: {
      id: "lUUf1D"
    },
    square: {
      id: "cKUcOk"
    },
    sparkle: {
      id: "ioMfZD"
    },
    clover: {
      id: "Gnanbk"
    },
    flower: {
      id: "XMnYIb"
    },
    heart: {
      id: "ovEbfI"
    },
    house: {
      id: "fCE3Dg"
    },
    star: {
      id: "sZ/7cr"
    }
  },
  es: any = {
    black: {
      id: "THokF3"
    },
    brown: {
      id: "JLxwQS"
    },
    red: {
      id: "wRTiSD"
    },
    orange: {
      id: "4OE5Sf"
    },
    yellow: {
      id: "QyCqHT"
    },
    green: {
      id: "VmkjGB"
    },
    cyan: {
      id: "fFwMZv"
    },
    blue: {
      id: "Zn5crm"
    },
    violet: {
      id: "eedtPL"
    },
    magenta: {
      id: "vz5zAR"
    },
    gray: {
      id: "qS5//Q"
    }
  },
  G: any = new (Map as any)();
function ns(this: any, e: any): any {
  let s: any = ((G as any).get as any)(e);
  return (s as any) === (void 0 as any) && (s = (Q as any)({
    shape: e,
    sizePx: K,
    inflatePx: ss,
    gapPx: F
  }), ((G as any).set as any)(e, s)), s;
}
function ts(this: any, e: any): any {
  return ((z as any).includes as any)(e) ? z : [...z, e];
}
function ds(this: any, e: any): any {
  return ((Array as any).from as any)({
    length: ((Math as any).ceil as any)(((e as any).length as any) / (A as any))
  }, (s: any, t: any): any => ((e as any).slice as any)((t as any) * (A as any), ((t as any) + (1 as any) as any) * (A as any)));
}
const q: any = {
  cell: {
    kysU6D: "sand-jyslct",
    k3lkva: "sand-1lugfcp",
    k1xSpc: "sand-3nfvp2",
    kGNEyG: "sand-6s0dn4",
    kjj79g: "sand-l56j7k",
    kB7OPa: "sand-9f619",
    kmVPX3: "sand-1717udv",
    kMzoRj: "sand-mkeg23",
    ksu8eU: "sand-1y0btm7",
    kVAM5u: "sand-9r1u3d sand-1g5a2ak",
    kWkggS: "sand-jbqb8w",
    kkrTdU: "sand-1ypdohk",
    $$css: !0
  },
  colorCell: {
    kzqmXN: "sand-1td3qas",
    kZKoxP: "sand-10w6t97",
    kaIpWk: "sand-16rqkct",
    $$css: !0
  },
  colorCellSelected: {
    kVAM5u: "sand-9r1u3d sand-1xfd4ba",
    $$css: !0
  }
};
function us(this: any, e: any): any {
  const s: any = ((E as any).c as any)(6),
    t: any = ((U as any)() as any).roster,
    {
      run: o,
      isPending: p
    }: any = (Z as any)((t as any).updateAgent);
  let r: any;
  ((s as any)[0] as any) !== (e as any) || ((s as any)[1] as any) !== (o as any) ? (r = async (f: any): Promise<any> => {
    await (o as any)((e as any).id, {
      name: (e as any).name,
      description: (e as any).description,
      ...f
    });
  }, (s as any)[0] = e, (s as any)[1] = o, (s as any)[2] = r) : r = (s as any)[2];
  let d: any;
  return ((s as any)[3] as any) !== (p as any) || ((s as any)[4] as any) !== (r as any) ? (d = {
    commitCharacter: r,
    isCommitting: p
  }, (s as any)[3] = p, (s as any)[4] = r, (s as any)[5] = d) : d = (s as any)[5], d;
}
function L(this: any, e: any): any {
  (L as any).d = 51;
  const s: any = ((E as any).c as any)(45),
    {
      shape: t,
      color: o,
      showSelection: p,
      layout: r,
      onSelectShape: d,
      onSelectColor: f
    }: any = e,
    i: any = (p as any) === (void 0 as any) ? !0 : p,
    g: any = (r as any) === (void 0 as any) ? "grid" : r,
    {
      i18n: l,
      _: a
    }: any = (X as any)(),
    n: any = (g as any) === ("row" as any);
  let c: any, u: any, h: any, m: any;
  if (((s as any)[0] as any) !== (a as any) || ((s as any)[1] as any) !== (o as any) || ((s as any)[2] as any) !== (l as any) || ((s as any)[3] as any) !== (n as any) || ((s as any)[4] as any) !== (d as any) || ((s as any)[5] as any) !== (t as any) || ((s as any)[6] as any) !== (i as any)) {
    const b: any = (ts as any)(t);
    let v: any;
    ((s as any)[11] as any) !== (a as any) || ((s as any)[12] as any) !== (o as any) || ((s as any)[13] as any) !== (l as any) || ((s as any)[14] as any) !== (d as any) || ((s as any)[15] as any) !== (t as any) || ((s as any)[16] as any) !== (i as any) ? (v = (y: any): any => {
      const w: any = ((l as any)._ as any)((as as any)[y]),
        M: any = i && (t as any) === (y as any),
        I: any = {
          className: "sand--default-marker sand-jyslct sand-1lugfcp sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-9f619 sand-1717udv sand-9r1u3d sand-1g5a2ak sand-jbqb8w sand-1ypdohk sand-1n2onr6 sand-1useyqa sand-sdox4t sand-c342km sand-ng3xce sand-1t137rt"
        },
        H: any = ({
          0: {
            className: "sand-10l6tqk sand-3ds4eh sand-47corl sand-1qmjd7y sand-g01cxk sand-1x4ln44 sand-15stfbk"
          },
          1: {
            className: "sand-10l6tqk sand-3ds4eh sand-47corl sand-145sy1 sand-1hc1fzr"
          }
        } as any)[(!!M as any) << (0 as any)];
      return ((k as any).jsxs as any)("button", {
        "aria-label": (a as any)({
          id: "UyDncJ",
          values: {
            candidateLabel: w
          }
        }),
        "aria-pressed": M,
        className: (T as any)("sand-agent-character__shape", (I as any).className),
        onClick: (): any => (d as any)(y),
        style: (I as any).style,
        title: w,
        type: "button",
        children: [((k as any).jsx as any)(D, {
          color: o,
          isPaused: !0,
          shape: y,
          sizePx: K
        }), ((k as any).jsx as any)("span", {
          "aria-hidden": !0,
          className: (H as any).className,
          style: {
            ...(H as any).style,
            maskImage: (ns as any)(y)
          }
        })]
      }, y);
    }, (s as any)[11] = a, (s as any)[12] = o, (s as any)[13] = l, (s as any)[14] = d, (s as any)[15] = t, (s as any)[16] = i, (s as any)[17] = v) : v = (s as any)[17];
    const R: any = v;
    ((s as any)[18] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (m = (T as any)("sand-agent-character", "sand-78zum5 sand-dt5ytf sand-1oot3zn"), (s as any)[18] = m) : m = (s as any)[18], ((s as any)[19] as any) !== (a as any) ? (c = (a as any)({
      id: "dcNGHT"
    }), (s as any)[19] = a, (s as any)[20] = c) : c = (s as any)[20];
    let j: any;
    ((s as any)[21] as any) !== (n as any) ? (j = ({
      0: {
        className: "sand-78zum5 sand-dt5ytf sand-ehausa sand-uve7l6 sand-1rgtt3y"
      },
      1: {
        className: "sand-78zum5 sand-1a02dak sand-1nhvcw1 sand-11twubx sand-uve7l6 sand-1rgtt3y"
      }
    } as any)[(!!n as any) << (0 as any)], (s as any)[21] = n, (s as any)[22] = j) : j = (s as any)[22], u = (j as any).className, h = n ? ((b as any).map as any)(R) : (((ds as any)(b) as any).map as any)((y: any, w: any): any => ((k as any).jsx as any)("div", {
      className: "sand-78zum5 sand-l56j7k sand-ss61px",
      children: ((y as any).map as any)(R)
    }, w)), (s as any)[0] = a, (s as any)[1] = o, (s as any)[2] = l, (s as any)[3] = n, (s as any)[4] = d, (s as any)[5] = t, (s as any)[6] = i, (s as any)[7] = c, (s as any)[8] = u, (s as any)[9] = h, (s as any)[10] = m;
  } else c = (s as any)[7], u = (s as any)[8], h = (s as any)[9], m = (s as any)[10];
  let x: any;
  ((s as any)[23] as any) !== (c as any) || ((s as any)[24] as any) !== (u as any) || ((s as any)[25] as any) !== (h as any) ? (x = ((k as any).jsx as any)("div", {
    "aria-label": c,
    className: u,
    children: h
  }), (s as any)[23] = c, (s as any)[24] = u, (s as any)[25] = h, (s as any)[26] = x) : x = (s as any)[26];
  let S: any;
  ((s as any)[27] as any) !== (a as any) ? (S = (a as any)({
    id: "QVyyXb"
  }), (s as any)[27] = a, (s as any)[28] = S) : S = (s as any)[28];
  let C: any;
  ((s as any)[29] as any) !== (n as any) ? (C = ({
    0: {
      className: "sand-78zum5 sand-1a02dak sand-6s0dn4 sand-amitd3 sand-l56j7k sand-ehausa sand-rp6dbx sand-13ly8rp sand-1xlntvz"
    },
    1: {
      className: "sand-78zum5 sand-ozqiw3 sand-6s0dn4 sand-1nhvcw1 sand-11twubx sand-13ly8rp sand-1xlntvz"
    }
  } as any)[(!!n as any) << (0 as any)], (s as any)[29] = n, (s as any)[30] = C) : C = (s as any)[30];
  const O: any = (C as any).className;
  let N: any;
  ((s as any)[31] as any) !== (a as any) || ((s as any)[32] as any) !== (o as any) || ((s as any)[33] as any) !== (l as any) || ((s as any)[34] as any) !== (f as any) || ((s as any)[35] as any) !== (i as any) ? (N = ((V as any).map as any)((b: any): any => {
    const v: any = ((l as any)._ as any)((es as any)[(b as any).id]),
      R: any = i && (o as any) === ((b as any).id as any);
    return ((k as any).jsx as any)("button", {
      "aria-label": (a as any)({
        id: "R+jA6x",
        values: {
          candidateLabel: v
        }
      }),
      "aria-pressed": R,
      className: ((B as any)((q as any).cell, (q as any).colorCell, ($ as any).keyboardFocus, R && (q as any).colorCellSelected) as any).className,
      onClick: (): any => (f as any)((b as any).id),
      title: v,
      type: "button",
      children: ((k as any).jsx as any)("span", {
        className: (({
          0: {
            className: "sand-1lliihq sand-vy4d1p sand-xk0z11 sand-16rqkct"
          },
          1: {
            className: "sand-1lliihq sand-vy4d1p sand-xk0z11 sand-16rqkct sand-1ogx5uk"
          }
        } as any)[(!!R as any) << (0 as any)] as any).className,
        style: {
          backgroundColor: (W as any)((b as any).id)
        }
      })
    }, (b as any).id);
  }), (s as any)[31] = a, (s as any)[32] = o, (s as any)[33] = l, (s as any)[34] = f, (s as any)[35] = i, (s as any)[36] = N) : N = (s as any)[36];
  let P: any;
  ((s as any)[37] as any) !== (N as any) || ((s as any)[38] as any) !== (S as any) || ((s as any)[39] as any) !== ((C as any).className as any) ? (P = ((k as any).jsx as any)("div", {
    "aria-label": S,
    className: O,
    children: N
  }), (s as any)[37] = N, (s as any)[38] = S, (s as any)[39] = (C as any).className, (s as any)[40] = P) : P = (s as any)[40];
  let _: any;
  return ((s as any)[41] as any) !== (P as any) || ((s as any)[42] as any) !== (m as any) || ((s as any)[43] as any) !== (x as any) ? (_ = ((k as any).jsxs as any)("div", {
    className: m,
    children: [x, P]
  }), (s as any)[41] = P, (s as any)[42] = m, (s as any)[43] = x, (s as any)[44] = _) : _ = (s as any)[44], _;
}
function ls(this: any, e: any): any {
  (ls as any).d = 50;
  const s: any = ((E as any).c as any)(19),
    {
      agent: t,
      character: o,
      staged: p,
      isCharacterActive: r
    }: any = e,
    {
      commitCharacter: d
    }: any = o,
    f: any = p?.avatarShape ?? (t as any).avatarShape ?? null,
    i: any = p?.avatarColor ?? (t as any).avatarColor ?? null;
  let g: any, l: any, a: any, n: any, c: any;
  if (((s as any)[0] as any) !== ((t as any).id as any) || ((s as any)[1] as any) !== (d as any) || ((s as any)[2] as any) !== (f as any) || ((s as any)[3] as any) !== (i as any)) {
    const h: any = {
      id: (t as any).id,
      avatarShape: f,
      avatarColor: i
    };
    g = L, l = (Y as any)(h), ((s as any)[9] as any) !== (d as any) ? (a = (m: any): any => {
      (d as any)({
        avatarColor: m
      });
    }, n = (m: any): any => {
      (d as any)({
        avatarShape: m
      });
    }, (s as any)[9] = d, (s as any)[10] = a, (s as any)[11] = n) : (a = (s as any)[10], n = (s as any)[11]), c = (J as any)(h), (s as any)[0] = (t as any).id, (s as any)[1] = d, (s as any)[2] = f, (s as any)[3] = i, (s as any)[4] = g, (s as any)[5] = l, (s as any)[6] = a, (s as any)[7] = n, (s as any)[8] = c;
  } else g = (s as any)[4], l = (s as any)[5], a = (s as any)[6], n = (s as any)[7], c = (s as any)[8];
  let u: any;
  return ((s as any)[12] as any) !== (g as any) || ((s as any)[13] as any) !== (r as any) || ((s as any)[14] as any) !== (l as any) || ((s as any)[15] as any) !== (a as any) || ((s as any)[16] as any) !== (n as any) || ((s as any)[17] as any) !== (c as any) ? (u = ((k as any).jsx as any)(g, {
    color: l,
    onSelectColor: a,
    onSelectShape: n,
    shape: c,
    showSelection: r
  }), (s as any)[12] = g, (s as any)[13] = r, (s as any)[14] = l, (s as any)[15] = a, (s as any)[16] = n, (s as any)[17] = c, (s as any)[18] = u) : u = (s as any)[18], u;
}
export { ls as A, L as C, us as u };
//# debugId=5e1ac3ab-91a6-4e0f-9b2c-0b8866d33b61
