declare var document: any;
declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "96da91c9-97b1-406a-b8b2-39530ba9717a", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-96da91c9-97b1-406a-b8b2-39530ba9717a");
  } catch (e: any) {}
} as any)();
import { c as xe, u as Re, j as s, r as O, T as te, p as Ae } from "./index.eager-vendor-Qbf9YA6n.js";
import { r as B, ds as Qe, du as Oe, dt as Ge, dv as Be, dw as Ie, dx as We, dy as Ce, dz as Je, a_ as Te, a$ as es, b7 as ss, e_ as Ue, b0 as Me, e$ as ts, N as as, f0 as ns } from "./index.eager-app-Cj5f8Gby.js";
import { B as $e, W as De, x as re, z as Ee } from "./index-ZYxf-aBb.js";
import { aY as ls } from "./index.eager-platform-Dcfeegfw.js";
import "./index.eager-common-CdCvBQNJ.js";
function Le(this: any, k: any): any {
  (Le as any).d = 68;
  const e: any = ((xe as any).c as any)(22),
    {
      dataUrl: a,
      sizePx: r,
      isPending: u,
      pickLabel: f,
      removeLabel: n,
      onPick: c,
      onRemove: t
    }: any = k,
    d: any = (r as any) === (void 0 as any) ? 72 : r,
    o: any = (u as any) === (void 0 as any) ? !1 : u,
    {
      _: m
    }: any = (Re as any)(),
    p: any = (a as any) != (null as any) && ((a as any).length as any) > (0 as any);
  let y: any;
  if (((e as any)[0] as any) !== (m as any) || ((e as any)[1] as any) !== (a as any) || ((e as any)[2] as any) !== (p as any) || ((e as any)[3] as any) !== (o as any) || ((e as any)[4] as any) !== (c as any) || ((e as any)[5] as any) !== (t as any) || ((e as any)[6] as any) !== (f as any) || ((e as any)[7] as any) !== (n as any) || ((e as any)[8] as any) !== (d as any)) {
    const g: any = {
        className: "sand--default-marker sand-1n2onr6 sand-3nfvp2 sand-1c4vz4f sand-2lah0s sand-1gvjw7"
      },
      j: any = {
        className: "sand--default-marker sand-1n2onr6 sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-h8yej3 sand-5yr21d sand-1717udv sand-ng3xce sand-149ho13 sand-jbqb8w sand-1ypdohk sand-1ar62m4 sand-1hc1fzr sand-fqoyci sand-b3r6kr"
      },
      N: any = {
        className: "sand-10l6tqk sand-10a8y8t sand-78zum5 sand-uk3077 sand-l56j7k sand-1a8lsjc sand-k9dyuk sand-fungia sand-g01cxk sand-yn4j07 sand-11iuvcu sand-19991ni sand-1uacuc8 sand-wji4o3 sand-47corl"
      },
      M: any = {
        className: "sand-10l6tqk sand-1ib5ffp sand-1t8mmr6 sand-6cvaw9 sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-vy4d1p sand-xk0z11 sand-1717udv sand-mkeg23 sand-1y0btm7 sand-qz0629 sand-149ho13 sand-1ua6jya sand-1iuyybk sand-19aaqeu sand-7gh5u8 sand-1ypdohk sand-1ar62m4 sand-g01cxk sand-25t5g8 sand-1k8kjig sand-1lzqukj sand-1dbdvug sand-1kqntcj"
      },
      $: any = (B as any)("sand-editable-avatar", (g as any).className);
    let z: any;
    ((e as any)[10] as any) !== (d as any) ? (z = {
      ...(g as any).style,
      width: d,
      height: d
    }, (e as any)[10] = d, (e as any)[11] = z) : z = (e as any)[11];
    const ee: any = (B as any)("sand-editable-avatar__button", (j as any).className),
      S: any = (j as any).style;
    let w: any;
    ((e as any)[12] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (w = (B as any)("sand-editable-avatar__fill", "sand-3nfvp2 sand-h8yej3 sand-5yr21d"), (e as any)[12] = w) : w = (e as any)[12];
    let x: any;
    ((e as any)[13] as any) !== (a as any) || ((e as any)[14] as any) !== (d as any) ? (x = ((s as any).jsx as any)("span", {
      className: w,
      children: (a as any) != (null as any) && ((a as any).length as any) > (0 as any) ? ((s as any).jsx as any)($e, {
        "aria-hidden": !0,
        sizePx: d,
        src: a
      }) : ((s as any).jsx as any)($e, {
        "aria-hidden": !0,
        icon: "plus",
        sizePx: d
      })
    }), (e as any)[13] = a, (e as any)[14] = d, (e as any)[15] = x) : x = (e as any)[15];
    let v: any;
    ((e as any)[16] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (v = ((s as any).jsx as any)("span", {
      "aria-hidden": !0,
      className: (B as any)("sand-editable-avatar__overlay", (N as any).className),
      style: (N as any).style,
      children: ((s as any).jsx as any)(De, {
        name: "pencil",
        size: "sm"
      })
    }), (e as any)[16] = v) : v = (e as any)[16];
    let q: any;
    ((e as any)[17] as any) !== (o as any) || ((e as any)[18] as any) !== (c as any) || ((e as any)[19] as any) !== (f as any) || ((e as any)[20] as any) !== (x as any) ? (q = ((s as any).jsxs as any)("button", {
      "aria-label": f,
      className: ee,
      disabled: o,
      onClick: c,
      style: S,
      type: "button",
      children: [x, v]
    }), (e as any)[17] = o, (e as any)[18] = c, (e as any)[19] = f, (e as any)[20] = x, (e as any)[21] = q) : q = (e as any)[21], y = ((s as any).jsxs as any)("div", {
      className: $,
      style: z,
      children: [q, p ? ((s as any).jsx as any)("button", {
        "aria-label": n,
        className: (B as any)("sand-editable-avatar__remove", (M as any).className),
        disabled: o,
        onClick: t,
        style: (M as any).style,
        title: (m as any)({
          id: "k8od7T"
        }),
        type: "button",
        children: ((s as any).jsx as any)(De, {
          name: "close",
          size: "xs"
        })
      }) : null]
    }), (e as any)[0] = m, (e as any)[1] = a, (e as any)[2] = p, (e as any)[3] = o, (e as any)[4] = c, (e as any)[5] = t, (e as any)[6] = f, (e as any)[7] = n, (e as any)[8] = d, (e as any)[9] = y;
  } else y = (e as any)[9];
  return y;
}
const qe: number = 260;
function Ke(this: any, k: any): any {
  (Ke as any).d = 66;
  const e: any = ((xe as any).c as any)(102),
    {
      sourceDataUrl: a,
      isSaving: r,
      onCancel: u,
      onConfirm: f
    }: any = k,
    n: any = (r as any) === (void 0 as any) ? !1 : r,
    {
      _: c
    }: any = (Re as any)(),
    [t, d]: any = ((O as any).useState as any)(null),
    [o, m]: any = ((O as any).useState as any)(null),
    [p, y]: any = ((O as any).useState as any)(!1),
    g: any = ((O as any).useRef as any)(null),
    j: any = ((O as any).useRef as any)(null),
    N: any = ((O as any).useRef as any)(null);
  let M: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (M = (i: any): any => {
    const {
      naturalWidth: l,
      naturalHeight: h
    }: any = (i as any).currentTarget;
    if ((l as any) <= (0 as any) || (h as any) <= (0 as any)) {
      (y as any)(!0);
      return;
    }
    (d as any)({
      width: l,
      height: h
    }), (m as any)((Be as any)(l, h));
  }, (e as any)[0] = M) : M = (e as any)[0];
  const $: any = M;
  let z: any;
  ((e as any)[1] as any) !== (t as any) ? (z = (i: any, l: any): any => {
    (m as any)((h: any): any => {
      if ((h as any) == (null as any)) return h;
      const b: any = t;
      if ((b as any) == (null as any)) return h;
      const _: any = ((Math as any).min as any)((b as any).width, (b as any).height),
        E: any = ((qe as any) / (_ as any) as any) * ((h as any).zoom as any),
        se: any = {
          zoom: (h as any).zoom,
          centerX: ((h as any).centerX as any) - ((i as any) / (E as any) as any),
          centerY: ((h as any).centerY as any) - ((l as any) / (E as any) as any)
        };
      return {
        zoom: (h as any).zoom,
        ...(Ie as any)(se, (b as any).width, (b as any).height)
      };
    });
  }, (e as any)[1] = t, (e as any)[2] = z) : z = (e as any)[2];
  const ee: any = z;
  let S: any;
  ((e as any)[3] as any) !== (t as any) ? (S = (i: any): any => {
    (m as any)((l: any): any => {
      if ((l as any) == (null as any)) return l;
      const h: any = t;
      if ((h as any) == (null as any)) return l;
      const b: any = (We as any)(i),
        _: any = {
          zoom: b,
          centerX: (l as any).centerX,
          centerY: (l as any).centerY
        };
      return {
        zoom: b,
        ...(Ie as any)(_, (h as any).width, (h as any).height)
      };
    });
  }, (e as any)[3] = t, (e as any)[4] = S) : S = (e as any)[4];
  const w: any = S;
  let x: any;
  ((e as any)[5] as any) !== (t as any) ? (x = (i: any): any => {
    if ((j as any).current = i, (i as any) == (null as any) || (t as any) == (null as any)) return;
    const l: any = (h: any): any => {
      ((h as any).preventDefault as any)();
      const b: any = ((Math as any).exp as any)((-(h as any).deltaY as any) * (.0015 as any));
      (m as any)((_: any): any => {
        if ((_ as any) == (null as any)) return _;
        const E: any = (We as any)(((_ as any).zoom as any) * (b as any)),
          se: any = {
            zoom: E,
            centerX: (_ as any).centerX,
            centerY: (_ as any).centerY
          };
        return {
          zoom: E,
          ...(Ie as any)(se, (t as any).width, (t as any).height)
        };
      });
    };
    return ((i as any).addEventListener as any)("wheel", l, {
      passive: !1
    }), (): any => {
      ((i as any).removeEventListener as any)("wheel", l), (j as any).current = null;
    };
  }, (e as any)[5] = t, (e as any)[6] = x) : x = (e as any)[6];
  const v: any = x;
  let q: any;
  ((e as any)[7] as any) !== (t as any) ? (q = (i: any): any => {
    (t as any) != (null as any) && ((((i as any).currentTarget as any).setPointerCapture as any)((i as any).pointerId), (N as any).current = {
      pointerId: (i as any).pointerId,
      lastX: (i as any).clientX,
      lastY: (i as any).clientY
    });
  }, (e as any)[7] = t, (e as any)[8] = q) : q = (e as any)[8];
  const C: any = q;
  let P: any;
  ((e as any)[9] as any) !== (ee as any) ? (P = (i: any): any => {
    const l: any = (N as any).current;
    if ((l as any) == (null as any) || ((l as any).pointerId as any) !== ((i as any).pointerId as any)) return;
    const h: any = ((i as any).clientX as any) - ((l as any).lastX as any),
      b: any = ((i as any).clientY as any) - ((l as any).lastY as any);
    (l as any).lastX = (i as any).clientX, (l as any).lastY = (i as any).clientY, (ee as any)(h, b);
  }, (e as any)[9] = ee, (e as any)[10] = P) : P = (e as any)[10];
  const A: any = P;
  let D: any;
  ((e as any)[11] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (D = (i: any): any => {
    const l: any = (N as any).current;
    (l as any) == (null as any) || ((l as any).pointerId as any) !== ((i as any).pointerId as any) || ((N as any).current = null, (((i as any).currentTarget as any).hasPointerCapture as any)((i as any).pointerId) && (((i as any).currentTarget as any).releasePointerCapture as any)((i as any).pointerId));
  }, (e as any)[11] = D) : D = (e as any)[11];
  const ye: any = D;
  let T: any;
  ((e as any)[12] as any) !== (t as any) ? (T = (): any => {
    (t as any) != (null as any) && (m as any)((Be as any)((t as any).width, (t as any).height));
  }, (e as any)[12] = t, (e as any)[13] = T) : T = (e as any)[13];
  const ae: any = T;
  let Y: any;
  ((e as any)[14] as any) !== (o as any) || ((e as any)[15] as any) !== (t as any) || ((e as any)[16] as any) !== (f as any) ? (Y = (): any => {
    const i: any = (g as any).current;
    if ((i as any) == (null as any) || (t as any) == (null as any) || (o as any) == (null as any)) return;
    const l: any = ((document as any).createElement as any)("canvas");
    (l as any).width = Ce, (l as any).height = Ce;
    const h: any = ((l as any).getContext as any)("2d");
    if ((h as any) == (null as any)) return;
    (h as any).imageSmoothingEnabled = !0, (h as any).imageSmoothingQuality = "high";
    const b: any = (Je as any)((t as any).width, (t as any).height, o);
    ((h as any).drawImage as any)(i, (b as any).x, (b as any).y, (b as any).width, (b as any).height, 0, 0, Ce, Ce);
    const _: any = ((l as any).toDataURL as any)("image/png"),
      E: any = ((_ as any).slice as any)((((_ as any).indexOf as any)(",") as any) + (1 as any));
    ((E as any).length as any) !== (0 as any) && (f as any)(E);
  }, (e as any)[14] = o, (e as any)[15] = t, (e as any)[16] = f, (e as any)[17] = Y) : Y = (e as any)[17];
  const ge: any = Y,
    be: any = (t as any) != (null as any) && (o as any) != (null as any) && !p;
  let ze: any;
  e: {
    if ((t as any) == (null as any) || (o as any) == (null as any)) {
      ze = null;
      break e;
    }
    const i: any = ((Math as any).min as any)((t as any).width, (t as any).height),
      l: any = ((qe as any) / (i as any) as any) * ((o as any).zoom as any),
      h: any = ((qe as any) / (2 as any) as any) - (((o as any).centerX as any) * (l as any) as any),
      b: any = ((qe as any) / (2 as any) as any) - (((o as any).centerY as any) * (l as any) as any),
      _: any = ((t as any).width as any) * (l as any),
      E: any = ((t as any).height as any) * (l as any),
      se: any = `translate(${h}px, ${b}px)`;
    let pe: any;
    ((e as any)[18] as any) !== (_ as any) || ((e as any)[19] as any) !== (E as any) || ((e as any)[20] as any) !== (se as any) ? (pe = {
      width: _,
      height: E,
      transform: se
    }, (e as any)[18] = _, (e as any)[19] = E, (e as any)[20] = se, (e as any)[21] = pe) : pe = (e as any)[21], ze = pe;
  }
  const me: any = ze;
  let ue: any, ke: any, ne: any, W: any, R: any, U: any, X: any, le: any, fe: any, L: any, K: any, H: any, I: any;
  if (((e as any)[22] as any) !== (c as any) || ((e as any)[23] as any) !== (v as any) || ((e as any)[24] as any) !== (o?.zoom as any) || ((e as any)[25] as any) !== (C as any) || ((e as any)[26] as any) !== (A as any) || ((e as any)[27] as any) !== (p as any) || ((e as any)[28] as any) !== (me as any) || ((e as any)[29] as any) !== (be as any) || ((e as any)[30] as any) !== (u as any) || ((e as any)[31] as any) !== (w as any) || ((e as any)[32] as any) !== (a as any)) {
    const i: any = {
        className: "sand-78zum5 sand-dt5ytf sand-1qjc9v5 sand-1c1vhfx"
      },
      l: any = {
        className: "sand-1n2onr6 sand-amitd3 sand-1hfn5x7 sand-dwzuf7 sand-16rqkct sand-b3r6kr sand-i07v4r sand-1jm3nie sand-ch2mbi sand-5ve5x3 sand-87ps6o sand-1t137rt"
      },
      h: any = {
        className: "sand-10l6tqk sand-13vifvy sand-u96u03 sand-1x1rfll sand-47corl sand-87ps6o sand-1so62im"
      },
      b: any = {
        className: "sand-10l6tqk sand-10a8y8t sand-16rqkct sand-8vn8i5 sand-47corl"
      },
      _: any = {
        className: "sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-fn1xvj sand-4b2ntj"
      },
      E: any = {
        className: "sand-1iyjqo2 sand-s83m0k sand-1ghz6dp sand-1ypdohk sand-jyslct sand-1lugfcp sand-jbqb8w sand-1t137rt sand-13m05e8 sand-1ysdatd sand-tk3z5d sand-ibs45w sand-1hzk0bc sand-3cp4ko sand-e55cdc sand-jfutqj sand-fiu4hc sand-13y9dww sand-5pni9w"
      };
    ke = (re as any).Root, ((e as any)[46] as any) !== (c as any) ? (X = (c as any)({
      id: "gY2AXq"
    }), (e as any)[46] = c, (e as any)[47] = X) : X = (e as any)[47], le = "sand-avatar-crop", ((e as any)[48] as any) !== (u as any) ? (fe = (Xe: any): any => {
      Xe || (u as any)();
    }, (e as any)[48] = u, (e as any)[49] = fe) : fe = (e as any)[49], L = !0, K = "rich", H = 360;
    let se: any;
    ((e as any)[50] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (se = ((s as any).jsx as any)((re as any).Title, {
      children: ((s as any).jsx as any)(te, {
        id: "gY2AXq"
      })
    }), (e as any)[50] = se) : se = (e as any)[50], ((e as any)[51] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (I = ((s as any).jsxs as any)((re as any).Header, {
      children: [se, ((s as any).jsx as any)((re as any).Description, {
        children: ((s as any).jsx as any)(te, {
          id: "5QBuJy"
        })
      }), ((s as any).jsx as any)((re as any).CloseButton, {})]
    }), (e as any)[51] = I) : I = (e as any)[51], ue = (re as any).Body, ne = (B as any)("sand-avatar-crop__body", (i as any).className), W = (i as any).style;
    let pe: any;
    ((e as any)[52] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (pe = (): any => (y as any)(!0), (e as any)[52] = pe) : pe = (e as any)[52];
    let ve: any;
    ((e as any)[53] as any) !== (me as any) ? (ve = (me as any) != (null as any) ? {
      ...(h as any).style,
      ...me
    } : {
      ...(h as any).style,
      visibility: "hidden"
    }, (e as any)[53] = me, (e as any)[54] = ve) : ve = (e as any)[54];
    let _e: any;
    ((e as any)[55] as any) !== (a as any) || ((e as any)[56] as any) !== (ve as any) ? (_e = ((s as any).jsx as any)("img", {
      alt: "",
      className: (B as any)("sand-avatar-crop__image", (h as any).className),
      draggable: !1,
      onError: pe,
      onLoad: $,
      ref: g,
      src: a,
      style: ve
    }), (e as any)[55] = a, (e as any)[56] = ve, (e as any)[57] = _e) : _e = (e as any)[57];
    let we: any;
    ((e as any)[58] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (we = ((s as any).jsx as any)("span", {
      "aria-hidden": !0,
      className: (B as any)("sand-avatar-crop__ring", (b as any).className),
      style: (b as any).style
    }), (e as any)[58] = we) : we = (e as any)[58], ((e as any)[59] as any) !== (v as any) || ((e as any)[60] as any) !== (C as any) || ((e as any)[61] as any) !== (A as any) || ((e as any)[62] as any) !== (_e as any) ? (R = ((s as any).jsxs as any)("div", {
      className: (B as any)("sand-avatar-crop__stage", (l as any).className),
      onPointerDown: C,
      onPointerMove: A,
      onPointerUp: ye,
      ref: v,
      style: (l as any).style,
      children: [_e, we]
    }), (e as any)[59] = v, (e as any)[60] = C, (e as any)[61] = A, (e as any)[62] = _e, (e as any)[63] = R) : R = (e as any)[63], U = p ? ((s as any).jsx as any)(ls, {
      color: "red",
      size: "sm",
      children: ((s as any).jsx as any)(te, {
        id: "vFA1Ka"
      })
    }) : ((s as any).jsxs as any)("div", {
      className: (B as any)("sand-avatar-crop__controls", (_ as any).className),
      style: (_ as any).style,
      children: [((s as any).jsx as any)(De, {
        "aria-hidden": !0,
        name: "image",
        size: 13
      }), ((s as any).jsx as any)("input", {
        "aria-label": (c as any)({
          id: "Qwg3u4"
        }),
        className: (B as any)("sand-avatar-crop__zoom", (E as any).className),
        disabled: !be,
        max: Ge,
        min: Oe,
        onChange: (Xe: any): any => (w as any)(((Number as any).parseFloat as any)(((Xe as any).currentTarget as any).value)),
        step: .01,
        style: (E as any).style,
        type: "range",
        value: o?.zoom ?? Oe
      }), ((s as any).jsx as any)(De, {
        "aria-hidden": !0,
        name: "image",
        size: 19
      })]
    }), (e as any)[22] = c, (e as any)[23] = v, (e as any)[24] = o?.zoom, (e as any)[25] = C, (e as any)[26] = A, (e as any)[27] = p, (e as any)[28] = me, (e as any)[29] = be, (e as any)[30] = u, (e as any)[31] = w, (e as any)[32] = a, (e as any)[33] = ue, (e as any)[34] = ke, (e as any)[35] = ne, (e as any)[36] = W, (e as any)[37] = R, (e as any)[38] = U, (e as any)[39] = X, (e as any)[40] = le, (e as any)[41] = fe, (e as any)[42] = L, (e as any)[43] = K, (e as any)[44] = H, (e as any)[45] = I;
  } else ue = (e as any)[33], ke = (e as any)[34], ne = (e as any)[35], W = (e as any)[36], R = (e as any)[37], U = (e as any)[38], X = (e as any)[39], le = (e as any)[40], fe = (e as any)[41], L = (e as any)[42], K = (e as any)[43], H = (e as any)[44], I = (e as any)[45];
  let V: any;
  ((e as any)[64] as any) !== (ne as any) || ((e as any)[65] as any) !== (W as any) || ((e as any)[66] as any) !== (R as any) || ((e as any)[67] as any) !== (U as any) ? (V = ((s as any).jsxs as any)("div", {
    className: ne,
    style: W,
    children: [R, U]
  }), (e as any)[64] = ne, (e as any)[65] = W, (e as any)[66] = R, (e as any)[67] = U, (e as any)[68] = V) : V = (e as any)[68];
  let de: any;
  ((e as any)[69] as any) !== (ue as any) || ((e as any)[70] as any) !== (V as any) ? (de = ((s as any).jsx as any)(ue, {
    children: V
  }), (e as any)[69] = ue, (e as any)[70] = V, (e as any)[71] = de) : de = (e as any)[71];
  const Se: any = !be || n;
  let ce: any;
  ((e as any)[72] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ce = ((s as any).jsx as any)(te, {
    id: "OfhWJH"
  }), (e as any)[72] = ce) : ce = (e as any)[72];
  let Z: any;
  ((e as any)[73] as any) !== (ae as any) || ((e as any)[74] as any) !== (Se as any) ? (Z = ((s as any).jsx as any)((re as any).Action, {
    disabled: Se,
    onClick: ae,
    variant: "tertiary",
    children: ce
  }), (e as any)[73] = ae, (e as any)[74] = Se, (e as any)[75] = Z) : Z = (e as any)[75];
  let oe: any;
  ((e as any)[76] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (oe = ((s as any).jsx as any)((re as any).ActionSpacer, {}), (e as any)[76] = oe) : oe = (e as any)[76];
  let he: any;
  ((e as any)[77] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (he = ((s as any).jsx as any)(te, {
    id: "dEgA5A"
  }), (e as any)[77] = he) : he = (e as any)[77];
  let F: any;
  ((e as any)[78] as any) !== (u as any) ? (F = ((s as any).jsx as any)((re as any).Action, {
    onClick: u,
    children: he
  }), (e as any)[78] = u, (e as any)[79] = F) : F = (e as any)[79];
  const je: any = !be || n;
  let Q: any;
  ((e as any)[80] as any) !== (c as any) || ((e as any)[81] as any) !== (n as any) ? (Q = (c as any)(n ? {
    id: "K/F6pa"
  } : {
    id: "tfDRzk"
  }), (e as any)[80] = c, (e as any)[81] = n, (e as any)[82] = Q) : Q = (e as any)[82];
  let G: any;
  ((e as any)[83] as any) !== (ge as any) || ((e as any)[84] as any) !== (je as any) || ((e as any)[85] as any) !== (Q as any) ? (G = ((s as any).jsx as any)((re as any).Action, {
    disabled: je,
    onClick: ge,
    variant: "primary",
    children: Q
  }), (e as any)[83] = ge, (e as any)[84] = je, (e as any)[85] = Q, (e as any)[86] = G) : G = (e as any)[86];
  let J: any;
  ((e as any)[87] as any) !== (Z as any) || ((e as any)[88] as any) !== (F as any) || ((e as any)[89] as any) !== (G as any) ? (J = ((s as any).jsxs as any)((re as any).ActionBar, {
    children: [Z, oe, F, G]
  }), (e as any)[87] = Z, (e as any)[88] = F, (e as any)[89] = G, (e as any)[90] = J) : J = (e as any)[90];
  let ie: any;
  return ((e as any)[91] as any) !== (ke as any) || ((e as any)[92] as any) !== (X as any) || ((e as any)[93] as any) !== (le as any) || ((e as any)[94] as any) !== (fe as any) || ((e as any)[95] as any) !== (L as any) || ((e as any)[96] as any) !== (K as any) || ((e as any)[97] as any) !== (H as any) || ((e as any)[98] as any) !== (I as any) || ((e as any)[99] as any) !== (de as any) || ((e as any)[100] as any) !== (J as any) ? (ie = ((s as any).jsxs as any)(ke, {
    "aria-label": X,
    className: le,
    onOpenChange: fe,
    open: L,
    variant: K,
    width: H,
    children: [I, de, J]
  }), (e as any)[91] = ke, (e as any)[92] = X, (e as any)[93] = le, (e as any)[94] = fe, (e as any)[95] = L, (e as any)[96] = K, (e as any)[97] = H, (e as any)[98] = I, (e as any)[99] = de, (e as any)[100] = J, (e as any)[101] = ie) : ie = (e as any)[101], ie;
}
async function ds(this: any, k: any, e: any, a: any): Promise<any> {
  try {
    const r: any = await (k as any)();
    (r as any) != (null as any) && (e as any)(r);
  } finally {
    (a as any)(!1);
  }
}
async function cs(this: any, k: any, e: any, a: any, r: any): Promise<any> {
  try {
    await (k as any)(e), (a as any)(null);
  } finally {
    (r as any)(!1);
  }
}
function os(this: any, k: any): any {
  const e: any = ((xe as any).c as any)(14),
    a: any = (Qe as any)(),
    [r, u]: any = ((O as any).useState as any)(null),
    [f, n]: any = ((O as any).useState as any)(!1),
    [c, t]: any = ((O as any).useState as any)(!1);
  let d: any;
  ((e as any)[0] as any) !== (a as any) || ((e as any)[1] as any) !== (f as any) ? (d = (): any => {
    f || ((n as any)(!0), (ds as any)((a as any).pickSource, u, n));
  }, (e as any)[0] = a, (e as any)[1] = f, (e as any)[2] = d) : d = (e as any)[2];
  const o: any = d;
  let m: any;
  ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (m = (): any => {
    (u as any)(null);
  }, (e as any)[3] = m) : m = (e as any)[3];
  const p: any = m;
  let y: any;
  ((e as any)[4] as any) !== (k as any) ? (y = (z: any): any => {
    (t as any)(!0), (cs as any)(k, z, u, t);
  }, (e as any)[4] = k, (e as any)[5] = y) : y = (e as any)[5];
  const g: any = y;
  let j: any;
  ((e as any)[6] as any) !== (g as any) || ((e as any)[7] as any) !== (c as any) || ((e as any)[8] as any) !== (r as any) ? (j = (r as any) != (null as any) ? ((s as any).jsx as any)(Ke, {
    isSaving: c,
    onCancel: p,
    onConfirm: g,
    sourceDataUrl: r
  }) : null, (e as any)[6] = g, (e as any)[7] = c, (e as any)[8] = r, (e as any)[9] = j) : j = (e as any)[9];
  const N: any = j,
    M: any = f || c;
  let $: any;
  return ((e as any)[10] as any) !== (o as any) || ((e as any)[11] as any) !== (N as any) || ((e as any)[12] as any) !== (M as any) ? ($ = {
    beginPick: o,
    isBusy: M,
    cropModal: N
  }, (e as any)[10] = o, (e as any)[11] = N, (e as any)[12] = M, (e as any)[13] = $) : $ = (e as any)[13], $;
}
const is: number = 64,
  Ne: any = {
    label: {
      k1xSpc: "sand-78zum5",
      kGNEyG: "sand-6s0dn4",
      kOIVth: "sand-1jnr06f",
      kogj98: "sand-1ghz6dp",
      k8WAf4: "sand-1t0vds8",
      kMwMTN: "sand-tyxrsu",
      $$css: !0
    },
    input: {
      kB7OPa: "sand-9f619",
      kzqmXN: "sand-h8yej3",
      kysU6D: "sand-jyslct",
      k3lkva: "sand-1lugfcp",
      kMzoRj: "sand-c342km",
      ksu8eU: "sand-ng3xce",
      kMeerF: "sand-1k57tk5",
      k3XXqK: "sand-1t137rt",
      kaIpWk: "sand-ur7f20",
      kWkggS: "sand-1tiofj7",
      kMwMTN: "sand-tyxrsu",
      kMv6JI: "sand-jb2p0i",
      k8WAf4: "sand-1t0vds8",
      kg3NbH: "sand-1awh872",
      k8Qsv1: "sand-1h7ufjq",
      $$css: !0
    },
    textArea: {
      kZKoxP: "sand-pyat2d",
      kHenm0: "sand-tt52l0",
      $$css: !0
    },
    action: {
      kzqmXN: "sand-1f1nzxn",
      $$css: !0
    },
    error: {
      kogj98: "sand-1ghz6dp",
      keoZOQ: "sand-1xmf6yo",
      kMwMTN: "sand-6rl5ky",
      k9WMMc: "sand-2b8uid",
      $$css: !0
    }
  };
function He(this: any, k: any): any {
  (He as any).d = 1063;
  const e: any = ((xe as any).c as any)(78),
    {
      isPending: a,
      error: r,
      onCancel: u,
      onCreate: f
    }: any = k,
    {
      _: n
    }: any = (Re as any)(),
    [c, t]: any = ((O as any).useState as any)(""),
    [d, o]: any = ((O as any).useState as any)(""),
    [m, p]: any = ((O as any).useState as any)(null);
  let y: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (y = (l: any): any => (p as any)(l), (e as any)[0] = y) : y = (e as any)[0];
  const g: any = (os as any)(y);
  let j: any;
  ((e as any)[1] as any) !== (c as any) ? (j = ((c as any).trim as any)(), (e as any)[1] = c, (e as any)[2] = j) : j = (e as any)[2];
  const N: any = j,
    M: any = ((N as any).length as any) > (0 as any) && !a,
    $: any = ((g as any).cropModal as any) != (null as any),
    z: any = M && !$,
    ee: any = (m as any) != (null as any);
  let S: any;
  ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (S = (l: any): any => {
    (t as any)(((l as any).currentTarget as any).value);
  }, (e as any)[3] = S) : S = (e as any)[3];
  const w: any = S;
  let x: any;
  ((e as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (x = (l: any): any => {
    (o as any)(((l as any).currentTarget as any).value);
  }, (e as any)[4] = x) : x = (e as any)[4];
  const v: any = x,
    q: any = rs;
  let C: any;
  ((e as any)[5] as any) !== (m as any) || ((e as any)[6] as any) !== (d as any) || ((e as any)[7] as any) !== (z as any) || ((e as any)[8] as any) !== (f as any) || ((e as any)[9] as any) !== (N as any) ? (C = (): any => {
    z && (f as any)({
      name: N,
      description: ((d as any).trim as any)(),
      avatarPngBase64: m
    });
  }, (e as any)[5] = m, (e as any)[6] = d, (e as any)[7] = z, (e as any)[8] = f, (e as any)[9] = N, (e as any)[10] = C) : C = (e as any)[10];
  const P: any = C;
  let A: any, D: any, ye: any, T: any, ae: any;
  ((e as any)[11] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (T = {
    className: "sand-78zum5 sand-dt5ytf sand-1cvmir6"
  }, D = {
    className: "sand-1n2onr6 sand-amitd3 sand-1fu8urw sand-1peatla sand-1e56ztr"
  }, A = {
    className: "sand-78zum5 sand-167g77z sand-qui205"
  }, ye = (Ae as any)((Te as any).body2, (Ne as any).error), ae = (B as any)("sand-create-agent-form", (T as any).className), (e as any)[11] = A, (e as any)[12] = D, (e as any)[13] = ye, (e as any)[14] = T, (e as any)[15] = ae) : (A = (e as any)[11], D = (e as any)[12], ye = (e as any)[13], T = (e as any)[14], ae = (e as any)[15]);
  let Y: any;
  ((e as any)[16] as any) !== (P as any) ? (Y = (l: any): any => {
    ((l as any).key as any) === ("Enter" as any) && ((l as any).metaKey || (l as any).ctrlKey) && (((l as any).preventDefault as any)(), ((l as any).stopPropagation as any)(), (P as any)());
  }, (e as any)[16] = P, (e as any)[17] = Y) : Y = (e as any)[17];
  const ge: any = (T as any).style,
    be: any = (D as any).className,
    ze: any = (D as any).style,
    me: any = ee ? `data:image/png;base64,${m}` : null,
    ue: any = (g as any).isBusy || a,
    ke: any = (g as any).beginPick;
  let ne: any;
  ((e as any)[18] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ne = (): any => (p as any)(null), (e as any)[18] = ne) : ne = (e as any)[18];
  let W: any;
  ((e as any)[19] as any) !== (n as any) || ((e as any)[20] as any) !== (ee as any) ? (W = (n as any)(ee ? {
    id: "DTEshW"
  } : {
    id: "yz8q3c"
  }), (e as any)[19] = n, (e as any)[20] = ee, (e as any)[21] = W) : W = (e as any)[21];
  let R: any;
  ((e as any)[22] as any) !== (n as any) ? (R = (n as any)({
    id: "L6WKkV"
  }), (e as any)[22] = n, (e as any)[23] = R) : R = (e as any)[23];
  let U: any;
  ((e as any)[24] as any) !== ((g as any).beginPick as any) || ((e as any)[25] as any) !== (me as any) || ((e as any)[26] as any) !== (ue as any) || ((e as any)[27] as any) !== (W as any) || ((e as any)[28] as any) !== (R as any) ? (U = ((s as any).jsx as any)("span", {
    className: be,
    style: ze,
    children: ((s as any).jsx as any)(Le, {
      dataUrl: me,
      isPending: ue,
      onPick: ke,
      onRemove: ne,
      pickLabel: W,
      removeLabel: R,
      sizePx: is
    })
  }), (e as any)[24] = (g as any).beginPick, (e as any)[25] = me, (e as any)[26] = ue, (e as any)[27] = W, (e as any)[28] = R, (e as any)[29] = U) : U = (e as any)[29];
  let X: any;
  ((e as any)[30] as any) !== (n as any) ? (X = (n as any)({
    id: "6YtxFj"
  }), (e as any)[30] = n, (e as any)[31] = X) : X = (e as any)[31];
  let le: any;
  ((e as any)[32] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (le = (Ae as any)((Te as any).body1, (Ne as any).input), (e as any)[32] = le) : le = (e as any)[32];
  const fe: any = (le as any).className;
  let L: any;
  ((e as any)[33] as any) !== (n as any) ? (L = (n as any)({
    id: "2DQ7aH"
  }), (e as any)[33] = n, (e as any)[34] = L) : L = (e as any)[34];
  let K: any;
  ((e as any)[35] as any) !== (c as any) || ((e as any)[36] as any) !== (L as any) ? (K = ((s as any).jsx as any)("input", {
    ref: q,
    className: fe,
    onChange: w,
    placeholder: L,
    type: "text",
    value: c
  }), (e as any)[35] = c, (e as any)[36] = L, (e as any)[37] = K) : K = (e as any)[37];
  let H: any;
  ((e as any)[38] as any) !== (X as any) || ((e as any)[39] as any) !== (K as any) ? (H = ((s as any).jsx as any)(Ye, {
    label: X,
    children: K
  }), (e as any)[38] = X, (e as any)[39] = K, (e as any)[40] = H) : H = (e as any)[40];
  let I: any;
  ((e as any)[41] as any) !== (n as any) ? (I = (n as any)({
    id: "WyGyYp"
  }), (e as any)[41] = n, (e as any)[42] = I) : I = (e as any)[42];
  let V: any;
  ((e as any)[43] as any) !== (n as any) ? (V = (n as any)({
    id: "Nu4oKW"
  }), (e as any)[43] = n, (e as any)[44] = V) : V = (e as any)[44];
  let de: any;
  ((e as any)[45] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (de = (Ae as any)((Te as any).body1, (Ne as any).input, (Ne as any).textArea), (e as any)[45] = de) : de = (e as any)[45];
  const Se: any = (de as any).className;
  let ce: any;
  ((e as any)[46] as any) !== (n as any) ? (ce = (n as any)({
    id: "VZSV/i"
  }), (e as any)[46] = n, (e as any)[47] = ce) : ce = (e as any)[47];
  let Z: any;
  ((e as any)[48] as any) !== (d as any) || ((e as any)[49] as any) !== (ce as any) ? (Z = ((s as any).jsx as any)("textarea", {
    className: Se,
    onChange: v,
    placeholder: ce,
    value: d
  }), (e as any)[48] = d, (e as any)[49] = ce, (e as any)[50] = Z) : Z = (e as any)[50];
  let oe: any;
  ((e as any)[51] as any) !== (I as any) || ((e as any)[52] as any) !== (V as any) || ((e as any)[53] as any) !== (Z as any) ? (oe = ((s as any).jsx as any)(Ye, {
    hint: I,
    label: V,
    children: Z
  }), (e as any)[51] = I, (e as any)[52] = V, (e as any)[53] = Z, (e as any)[54] = oe) : oe = (e as any)[54];
  let he: any;
  ((e as any)[55] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (he = ((s as any).jsx as any)(te, {
    id: "dEgA5A"
  }), (e as any)[55] = he) : he = (e as any)[55];
  let F: any;
  ((e as any)[56] as any) !== (a as any) || ((e as any)[57] as any) !== (u as any) ? (F = ((s as any).jsx as any)(Ee, {
    disabled: a,
    onClick: u,
    style: (Ne as any).action,
    variant: "secondary",
    children: he
  }), (e as any)[56] = a, (e as any)[57] = u, (e as any)[58] = F) : F = (e as any)[58];
  const je: any = !z;
  let Q: any;
  ((e as any)[59] as any) !== (a as any) ? (Q = a ? ((s as any).jsx as any)(te, {
    id: "/DwR+n"
  }) : ((s as any).jsx as any)(te, {
    id: "hYgDIe"
  }), (e as any)[59] = a, (e as any)[60] = Q) : Q = (e as any)[60];
  let G: any;
  ((e as any)[61] as any) !== (P as any) || ((e as any)[62] as any) !== (je as any) || ((e as any)[63] as any) !== (Q as any) ? (G = ((s as any).jsx as any)(Ee, {
    disabled: je,
    onClick: P,
    style: (Ne as any).action,
    variant: "primary",
    children: Q
  }), (e as any)[61] = P, (e as any)[62] = je, (e as any)[63] = Q, (e as any)[64] = G) : G = (e as any)[64];
  let J: any;
  ((e as any)[65] as any) !== (F as any) || ((e as any)[66] as any) !== (G as any) ? (J = ((s as any).jsxs as any)("div", {
    className: (A as any).className,
    style: (A as any).style,
    children: [F, G]
  }), (e as any)[65] = F, (e as any)[66] = G, (e as any)[67] = J) : J = (e as any)[67];
  let ie: any;
  ((e as any)[68] as any) !== (r as any) ? (ie = (r as any) != (null as any) ? ((s as any).jsx as any)("p", {
    className: (ye as any).className,
    style: (ye as any).style,
    children: r
  }) : null, (e as any)[68] = r, (e as any)[69] = ie) : ie = (e as any)[69];
  let i: any;
  return ((e as any)[70] as any) !== ((g as any).cropModal as any) || ((e as any)[71] as any) !== (U as any) || ((e as any)[72] as any) !== (H as any) || ((e as any)[73] as any) !== (oe as any) || ((e as any)[74] as any) !== (J as any) || ((e as any)[75] as any) !== (ie as any) || ((e as any)[76] as any) !== (Y as any) ? (i = ((s as any).jsxs as any)("div", {
    className: ae,
    onKeyDown: Y,
    style: ge,
    children: [U, H, oe, J, ie, (g as any).cropModal]
  }), (e as any)[70] = (g as any).cropModal, (e as any)[71] = U, (e as any)[72] = H, (e as any)[73] = oe, (e as any)[74] = J, (e as any)[75] = ie, (e as any)[76] = Y, (e as any)[77] = i) : i = (e as any)[77], i;
}
function rs(this: any, k: any): any {
  k?.focus();
}
function Ye(this: any, k: any): any {
  (Ye as any).d = 1064;
  const e: any = ((xe as any).c as any)(11),
    {
      label: a,
      hint: r,
      children: u
    }: any = k;
  let f: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = {
    className: "sand-78zum5 sand-dt5ytf sand-1xmf6yo"
  }, (e as any)[0] = f) : f = (e as any)[0];
  const n: any = f;
  let c: any;
  ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (c = (Ae as any)((Te as any).body2, (es as any).medium, (Ne as any).label), (e as any)[1] = c) : c = (e as any)[1];
  const t: any = c;
  let d: any;
  ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = {
    className: "sand-169k319 sand-1k6tqyu"
  }, (e as any)[2] = d) : d = (e as any)[2];
  const o: any = d;
  let m: any;
  ((e as any)[3] as any) !== (r as any) ? (m = (r as any) != (null as any) ? ((s as any).jsx as any)("span", {
    className: (o as any).className,
    style: (o as any).style,
    children: r
  }) : null, (e as any)[3] = r, (e as any)[4] = m) : m = (e as any)[4];
  let p: any;
  ((e as any)[5] as any) !== (a as any) || ((e as any)[6] as any) !== (m as any) ? (p = ((s as any).jsxs as any)("span", {
    className: (t as any).className,
    style: (t as any).style,
    children: [a, m]
  }), (e as any)[5] = a, (e as any)[6] = m, (e as any)[7] = p) : p = (e as any)[7];
  let y: any;
  return ((e as any)[8] as any) !== (u as any) || ((e as any)[9] as any) !== (p as any) ? (y = ((s as any).jsxs as any)("label", {
    className: (n as any).className,
    style: (n as any).style,
    children: [p, u]
  }), (e as any)[8] = u, (e as any)[9] = p, (e as any)[10] = y) : y = (e as any)[10], y;
}
const Ve: number = 40,
  Pe: any = {
    title: {
      kogj98: "sand-1ghz6dp",
      k1K539: "sand-1iymm2a",
      kMwMTN: "sand-tyxrsu",
      k9WMMc: "sand-2b8uid",
      $$css: !0
    },
    cardDescription: {
      k1xSpc: "sand-104kibb",
      kgKLqz: "sand-1ua5tub",
      kJFfOR: "sand-1gzmk7r",
      kVQacm: "sand-b3r6kr",
      kogj98: "sand-1ghz6dp",
      kzqmXN: "sand-1g6vzv9",
      kZKoxP: "sand-1dnml7z",
      kMwMTN: "sand-169k319",
      $$css: !0
    },
    action: {
      kzqmXN: "sand-1f1nzxn",
      $$css: !0
    },
    error: {
      kogj98: "sand-1ghz6dp",
      keoZOQ: "sand-14vqqas",
      ks0D6T: "sand-fp77mx",
      kMwMTN: "sand-6rl5ky",
      k9WMMc: "sand-2b8uid",
      $$css: !0
    }
  };
function Ze(this: any, k: any): any {
  (Ze as any).d = 1080;
  const e: any = ((xe as any).c as any)(37),
    {
      isPending: a,
      error: r,
      onPickTemplate: u,
      onCreateOwn: f
    }: any = k,
    {
      _: n
    }: any = (Re as any)(),
    {
      launcher: c
    }: any = (ss as any)();
  let t: any;
  ((e as any)[0] as any) !== (c as any) ? (t = ((c as any).teammateContext as any)()?.dailyTools ?? [], (e as any)[0] = c, (e as any)[1] = t) : t = (e as any)[1];
  const d: any = t;
  let o: any;
  ((e as any)[2] as any) !== (d as any) ? (o = (): any => (Ue as any)(null, d), (e as any)[2] = d, (e as any)[3] = o) : o = (e as any)[3];
  const [m, p]: any = ((O as any).useState as any)(o);
  let y: any, g: any, j: any, N: any;
  ((e as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (j = {
    className: "sand-78zum5 sand-dt5ytf sand-6s0dn4"
  }, g = {
    className: "sand-rvj5dj sand-vrmp6t sand-tqikln sand-gpatz3 sand-1hq5gj4"
  }, y = {
    className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d"
  }, N = (B as any)("sand-teammate-picker", (j as any).className), (e as any)[4] = y, (e as any)[5] = g, (e as any)[6] = j, (e as any)[7] = N) : (y = (e as any)[4], g = (e as any)[5], j = (e as any)[6], N = (e as any)[7]);
  const M: any = (j as any).style;
  let $: any;
  ((e as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? ($ = ((s as any).jsx as any)(Me, {
    as: "h2",
    level: "heading3",
    style: (Pe as any).title,
    weight: "medium",
    children: ((s as any).jsx as any)(te, {
      id: "XRN0th"
    })
  }), (e as any)[8] = $) : $ = (e as any)[8];
  const z: any = (g as any).className,
    ee: any = (g as any).style;
  let S: any;
  if (((e as any)[9] as any) !== (n as any) || ((e as any)[10] as any) !== (m as any) || ((e as any)[11] as any) !== (a as any) || ((e as any)[12] as any) !== (u as any)) {
    let D: any;
    ((e as any)[14] as any) !== (n as any) || ((e as any)[15] as any) !== (a as any) || ((e as any)[16] as any) !== (u as any) ? (D = (ye: any): any => {
      const T: any = (ts as any)(n, ye),
        ae: any = {
          className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-ou54vl sand-9f619 sand-c5o50y sand-1qhigcl sand-4pepcl sand-mkeg23 sand-1y0btm7 sand-1atdlfd sand-1pyiiq6 sand-z0cqqs sand-8c2ked sand-1b80kgn sand-sk93b4 sand-1ypdohk sand-1ar62m4 sand-1hc1fzr sand-fqoyci sand-jyslct sand-2b8uid sand-q90yva sand-1firant"
        },
        Y: any = {
          className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-195vfkc sand-h8yej3"
        },
        ge: any = {
          className: "sand-1ghz6dp sand-1j61zf2 sand-dod15v sand-4ryatg sand-tyxrsu sand-uxw1ft sand-b3r6kr sand-lyipyv sand-193iq5w"
        };
      return ((s as any).jsxs as any)("button", {
        className: (ae as any).className,
        disabled: a,
        onClick: (): any => (u as any)(T),
        style: (ae as any).style,
        type: "button",
        children: [((s as any).jsx as any)($e, {
          "aria-hidden": !0,
          sizePx: Ve,
          src: (as as any)((T as any).name)
        }), ((s as any).jsxs as any)("span", {
          className: (Y as any).className,
          style: (Y as any).style,
          children: [((s as any).jsx as any)("span", {
            className: (ge as any).className,
            style: (ge as any).style,
            children: (T as any).name
          }), ((s as any).jsx as any)(Me, {
            level: "body2",
            style: (Pe as any).cardDescription,
            children: (ns as any)(n, (T as any).description)
          })]
        })]
      }, (T as any).templateId);
    }, (e as any)[14] = n, (e as any)[15] = a, (e as any)[16] = u, (e as any)[17] = D) : D = (e as any)[17], S = ((m as any).map as any)(D), (e as any)[9] = n, (e as any)[10] = m, (e as any)[11] = a, (e as any)[12] = u, (e as any)[13] = S;
  } else S = (e as any)[13];
  let w: any;
  ((e as any)[18] as any) !== (a as any) || ((e as any)[19] as any) !== (f as any) ? (w = ((s as any).jsx as any)(Fe, {
    isPending: a,
    onCreateOwn: f
  }), (e as any)[18] = a, (e as any)[19] = f, (e as any)[20] = w) : w = (e as any)[20];
  let x: any;
  ((e as any)[21] as any) !== (S as any) || ((e as any)[22] as any) !== (w as any) ? (x = ((s as any).jsxs as any)("div", {
    className: z,
    style: ee,
    children: [S, w]
  }), (e as any)[21] = S, (e as any)[22] = w, (e as any)[23] = x) : x = (e as any)[23];
  let v: any;
  ((e as any)[24] as any) !== (d as any) || ((e as any)[25] as any) !== (m as any) ? (v = (): any => (p as any)((Ue as any)(m, d)), (e as any)[24] = d, (e as any)[25] = m, (e as any)[26] = v) : v = (e as any)[26];
  let q: any;
  ((e as any)[27] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (q = ((s as any).jsx as any)(te, {
    id: "gH5Gbn"
  }), (e as any)[27] = q) : q = (e as any)[27];
  let C: any;
  ((e as any)[28] as any) !== (a as any) || ((e as any)[29] as any) !== (v as any) ? (C = ((s as any).jsx as any)("div", {
    className: (y as any).className,
    style: (y as any).style,
    children: ((s as any).jsx as any)(Ee, {
      disabled: a,
      leadingIcon: "arrows-ccw",
      onClick: v,
      style: (Pe as any).action,
      variant: "secondary",
      children: q
    })
  }), (e as any)[28] = a, (e as any)[29] = v, (e as any)[30] = C) : C = (e as any)[30];
  let P: any;
  ((e as any)[31] as any) !== (r as any) ? (P = (r as any) != (null as any) ? ((s as any).jsx as any)(Me, {
    as: "p",
    level: "body2",
    style: (Pe as any).error,
    children: r
  }) : null, (e as any)[31] = r, (e as any)[32] = P) : P = (e as any)[32];
  let A: any;
  return ((e as any)[33] as any) !== (x as any) || ((e as any)[34] as any) !== (C as any) || ((e as any)[35] as any) !== (P as any) ? (A = ((s as any).jsxs as any)("div", {
    className: N,
    style: M,
    children: [$, x, C, P]
  }), (e as any)[33] = x, (e as any)[34] = C, (e as any)[35] = P, (e as any)[36] = A) : A = (e as any)[36], A;
}
function Fe(this: any, k: any): any {
  (Fe as any).d = 1079;
  const e: any = ((xe as any).c as any)(9),
    {
      isPending: a,
      onCreateOwn: r
    }: any = k;
  let u: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (u = {
    className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-ou54vl sand-9f619 sand-c5o50y sand-1qhigcl sand-4pepcl sand-mkeg23 sand-1y0btm7 sand-1atdlfd sand-1pyiiq6 sand-z0cqqs sand-8c2ked sand-1b80kgn sand-sk93b4 sand-1ypdohk sand-1ar62m4 sand-1hc1fzr sand-fqoyci sand-jyslct sand-2b8uid sand-q90yva sand-1firant"
  }, (e as any)[0] = u) : u = (e as any)[0];
  const f: any = u;
  let n: any;
  ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = {
    className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-195vfkc sand-h8yej3"
  }, (e as any)[1] = n) : n = (e as any)[1];
  const c: any = n;
  let t: any;
  ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (t = {
    className: "sand-1ghz6dp sand-1j61zf2 sand-dod15v sand-4ryatg sand-tyxrsu sand-uxw1ft sand-b3r6kr sand-lyipyv sand-193iq5w"
  }, (e as any)[2] = t) : t = (e as any)[2];
  const d: any = t;
  let o: any;
  ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (o = ((s as any).jsx as any)($e, {
    "aria-hidden": !0,
    icon: "plus",
    sizePx: Ve
  }), (e as any)[3] = o) : o = (e as any)[3];
  let m: any;
  ((e as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (m = ((s as any).jsx as any)("span", {
    className: (d as any).className,
    style: (d as any).style,
    children: ((s as any).jsx as any)(te, {
      id: "THuTB2"
    })
  }), (e as any)[4] = m) : m = (e as any)[4];
  let p: any;
  ((e as any)[5] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (p = ((s as any).jsxs as any)("span", {
    className: (c as any).className,
    style: (c as any).style,
    children: [m, ((s as any).jsx as any)(Me, {
      level: "body2",
      style: (Pe as any).cardDescription,
      children: ((s as any).jsx as any)(te, {
        id: "8R04P/"
      })
    })]
  }), (e as any)[5] = p) : p = (e as any)[5];
  let y: any;
  return ((e as any)[6] as any) !== (a as any) || ((e as any)[7] as any) !== (r as any) ? (y = ((s as any).jsxs as any)("button", {
    className: (f as any).className,
    disabled: a,
    onClick: r,
    style: (f as any).style,
    type: "button",
    children: [o, p]
  }), (e as any)[6] = a, (e as any)[7] = r, (e as any)[8] = y) : y = (e as any)[8], y;
}
function ms(this: any, k: any): any {
  (ms as any).d = 1069;
  const e: any = ((xe as any).c as any)(8),
    {
      isCreatePending: a,
      createError: r,
      onPickTemplate: u,
      onCreateCustom: f
    }: any = k,
    [n, c]: any = ((O as any).useState as any)("picker");
  let t: any, d: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (t = {
    className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-l56j7k sand-1iyjqo2 sand-2lwn1j sand-1odjw0f sand-1axd487 sand-17qtykl"
  }, d = (B as any)("sand-new-agent-pane", (t as any).className), (e as any)[0] = t, (e as any)[1] = d) : (t = (e as any)[0], d = (e as any)[1]);
  let o: any;
  return ((e as any)[2] as any) !== (r as any) || ((e as any)[3] as any) !== (a as any) || ((e as any)[4] as any) !== (f as any) || ((e as any)[5] as any) !== (u as any) || ((e as any)[6] as any) !== (n as any) ? (o = ((s as any).jsx as any)("div", {
    className: d,
    style: (t as any).style,
    children: (n as any) === ("picker" as any) ? ((s as any).jsx as any)(Ze, {
      error: r,
      isPending: a,
      onCreateOwn: (): any => (c as any)("form"),
      onPickTemplate: u
    }) : ((s as any).jsx as any)(He, {
      error: r,
      isPending: a,
      onCancel: (): any => (c as any)("picker"),
      onCreate: f
    })
  }), (e as any)[2] = r, (e as any)[3] = a, (e as any)[4] = f, (e as any)[5] = u, (e as any)[6] = n, (e as any)[7] = o) : o = (e as any)[7], o;
}
export { ms as NewAgentPane };
//# debugId=96da91c9-97b1-406a-b8b2-39530ba9717a
