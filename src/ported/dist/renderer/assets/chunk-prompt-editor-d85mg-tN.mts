declare var DOMParser: any;
declare var DOMRect: any;
declare var cancelAnimationFrame: any;
declare var clearTimeout: any;
declare var console: any;
declare var document: any;
declare var global: any;
declare var key: any;
declare var navigator: any;
declare var queueMicrotask: any;
declare var requestAnimationFrame: any;
declare var self: any;
declare var setTimeout: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "2df56833-7463-4d74-ac83-17aeed12cb26", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-2df56833-7463-4d74-ac83-17aeed12cb26");
  } catch (e: any) {}
} as any)();
import { c as z, u as ce, r as O, p as ie, j as g, T as qn, aJ as Kn, aM as er, R as tr, U as ae, aN as nr, i as F, aO as sr } from "./index.eager-vendor-Qbf9YA6n.js";
import { E as rr, d as or, N as ir, g as lr, P as ue, a as W, D as ar, b as cr, e as Bt, c as Le, f as ur, h as dr, m as re, i as fr, j as de, I as pr, s as hr, k as mr, l as Gn, n as gr, o as yr, p as br, T as xr, q as Bn, r as rn, t as zn, u as Fn, F as zt, M as jt, v as Sr, S as Er, w as vr, x as kr, y as Rr, z as _r } from "./chunk-index-CPur7w6O.js";
import { u as Pe, a_ as at, E as Ir, c as Wn, x as J, i as on } from "./index.eager-platform-Dcfeegfw.js";
import { r as G, D as wr, h4 as Cr, Y as Xn, cm as Tr, J as Ft, d as ln, kj as Nr, bc as Mr, h5 as ct, kk as Qn, kl as an, ei as Ar, G as ut, km as Wt, I as dt, kn as Lr, a6 as Pr, a7 as Or, d0 as Dr, ko as Ie, kp as Yn, kq as jr, kr as Jn, eY as $r, fB as Ae, ks as Hr, kt as Me, ku as Ur, kv as Vr, kw as qr, b7 as Kr, kx as Gr, bT as Br, ky as zr, kz as cn, kA as Fr, kB as se, kC as Wr, kD as Xr, kE as Qr, kF as Yr, kG as Jr } from "./index.eager-app-Cj5f8Gby.js";
import { I as we, cP as Zn, cQ as Zr, cR as es, cS as eo, ch as ts, cT as to, cf as no, cU as ns, cV as ss, a3 as so, cW as ro, P as oo, cX as rs, cY as io, cZ as lo, c_ as ao, c$ as co, d0 as uo, d1 as fo, d2 as os, d3 as po, d4 as un, d5 as ho, W as mo, d6 as go, d7 as yo, d8 as bo } from "./index-ZYxf-aBb.js";
import { r as st, R as $t, M as is } from "./chunk-reference-menu-DCLocG7M.js";
import { u as ft } from "./chunk-use-active-option-scroll-B1hXdW5d.js";
import "./index.eager-common-CdCvBQNJ.js";
const ls: number = 320,
  xo: number = 16,
  So: string = "--sand-suggestion-max-height",
  _e: any = {
    glyphIn16: {
      kzqmXN: "sand-1kky2od",
      kZKoxP: "sand-lup9mm",
      $$css: !0
    },
    neutralGlyph: {
      kMwMTN: "sand-1xrcxiq",
      $$css: !0
    },
    automationGlyph: {
      kMwMTN: "sand-mbjja0",
      $$css: !0
    }
  };
function as(this: any, t: any): any {
  (as as any).d = 1337;
  const e: any = ((z as any).c as any)(7),
    {
      item: n
    }: any = t,
    s: any = (Cr as any)();
  if (((n as any).kind as any) === ("action" as any)) {
    let o: any;
    return ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (o = ((g as any).jsx as any)(we, {
      name: "command",
      size: "md",
      style: [(_e as any).glyphIn16, (_e as any).neutralGlyph]
    }), (e as any)[0] = o) : o = (e as any)[0], o;
  }
  if (((n as any).icon as any) != (null as any) && (s as any) != (null as any)) {
    let o: any;
    return ((e as any)[1] as any) !== (s as any) || ((e as any)[2] as any) !== ((n as any).icon as any) || ((e as any)[3] as any) !== ((n as any).label as any) ? (o = ((s as any).renderToolIcon as any)((n as any).icon, (n as any).label, xo), (e as any)[1] = s, (e as any)[2] = (n as any).icon, (e as any)[3] = (n as any).label, (e as any)[4] = o) : o = (e as any)[4], o;
  }
  if (((n as any).skill?.trigger as any) != (null as any)) {
    let o: any;
    return ((e as any)[5] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (o = ((g as any).jsx as any)(we, {
      name: "clock",
      size: "md",
      style: [(_e as any).glyphIn16, (_e as any).automationGlyph]
    }), (e as any)[5] = o) : o = (e as any)[5], o;
  }
  let r: any;
  return ((e as any)[6] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (r = ((g as any).jsx as any)(we, {
    name: "cube",
    size: "md",
    style: [(_e as any).glyphIn16, (_e as any).neutralGlyph]
  }), (e as any)[6] = r) : r = (e as any)[6], r;
}
function cs(this: any, t: any, e: any): any {
  const n: any = ((t as any).trim as any)();
  return e && ((n as any).length as any) > (0 as any) ? {
    id: "NQSKOV",
    values: {
      trimmed: n
    }
  } : {
    id: "1E6CXB"
  };
}
function us(this: any, t: any): any {
  (us as any).d = 1338;
  const e: any = ((z as any).c as any)(56),
    {
      items: n,
      query: s,
      hasAnySkills: r,
      onSelect: o,
      onListboxChange: i,
      ref: l
    }: any = t,
    {
      i18n: a,
      _: d
    }: any = (ce as any)(),
    [c, u]: any = ((O as any).useState as any)(0),
    {
      activeOptionRef: f,
      markKeyboardNavigation: h
    }: any = (ft as any)(),
    m: any = ((O as any).useId as any)();
  let _: any;
  ((e as any)[0] as any) !== (d as any) ? (_ = (d as any)({
    id: "gtdpBF"
  }), (e as any)[0] = d, (e as any)[1] = _) : _ = (e as any)[1];
  const b: any = _;
  let y: any;
  ((e as any)[2] as any) !== (m as any) ? (y = (k: any): any => `${m}-option-${k}`, (e as any)[2] = m, (e as any)[3] = y) : y = (e as any)[3];
  const p: any = y;
  let w: any;
  ((e as any)[4] as any) !== (c as any) || ((e as any)[5] as any) !== ((n as any).length as any) || ((e as any)[6] as any) !== (m as any) || ((e as any)[7] as any) !== (b as any) || ((e as any)[8] as any) !== (i as any) || ((e as any)[9] as any) !== (p as any) ? (w = (): any => {
    i?.(((n as any).length as any) === (0 as any) ? null : {
      id: m,
      label: b,
      activeOptionId: (p as any)(c)
    });
  }, (e as any)[4] = c, (e as any)[5] = (n as any).length, (e as any)[6] = m, (e as any)[7] = b, (e as any)[8] = i, (e as any)[9] = p, (e as any)[10] = w) : w = (e as any)[10], (Pe as any)(w);
  const [j, M]: any = ((O as any).useState as any)(n);
  (n as any) !== (j as any) && ((M as any)(n), (u as any)(0));
  let x: any, v: any;
  if (((e as any)[11] as any) !== (c as any) || ((e as any)[12] as any) !== (n as any) || ((e as any)[13] as any) !== (h as any) || ((e as any)[14] as any) !== (o as any) ? (x = (): any => ({
    onKeyDown(k: any): any {
      if (((n as any).length as any) === (0 as any)) return !1;
      if (((k as any).key as any) === ("ArrowDown" as any)) return (h as any)(), (u as any)((I: any): any => ((I as any) + (1 as any) as any) % ((n as any).length as any)), !0;
      if (((k as any).key as any) === ("ArrowUp" as any)) return (h as any)(), (u as any)((I: any): any => (((I as any) - (1 as any) as any) + ((n as any).length as any) as any) % ((n as any).length as any)), !0;
      if (((k as any).key as any) === ("Enter" as any) || ((k as any).key as any) === ("Tab" as any)) {
        const I: any = (n as any)[c] ?? (n as any)[0];
        return (I as any) != (null as any) && (o as any)(I), !0;
      }
      return !1;
    }
  }), v = [c, n, o, h], (e as any)[11] = c, (e as any)[12] = n, (e as any)[13] = h, (e as any)[14] = o, (e as any)[15] = x, (e as any)[16] = v) : (x = (e as any)[15], v = (e as any)[16]), ((O as any).useImperativeHandle as any)(l, x, v), ((n as any).length as any) === (0 as any)) {
    let k: any, I: any;
    ((e as any)[17] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (k = (G as any)("sand-skill-empty", "sand-9f619 sand-78zum5 sand-dt5ytf sand-195vfkc sand-1y1aw1k sand-pdmqnj sand-wib8y2 sand-1g0dm76"), I = (G as any)("sand-tyxrsu sand-11wthnw sand-wn7fz2"), (e as any)[17] = k, (e as any)[18] = I) : (k = (e as any)[17], I = (e as any)[18]);
    let E: any;
    ((e as any)[19] as any) !== (r as any) || ((e as any)[20] as any) !== (a as any) || ((e as any)[21] as any) !== (s as any) ? (E = ((a as any)._ as any)((cs as any)(s, r)), (e as any)[19] = r, (e as any)[20] = a, (e as any)[21] = s, (e as any)[22] = E) : E = (e as any)[22];
    let L: any;
    ((e as any)[23] as any) !== (I as any) || ((e as any)[24] as any) !== (E as any) ? (L = ((g as any).jsx as any)("span", {
      className: I,
      children: E
    }), (e as any)[23] = I, (e as any)[24] = E, (e as any)[25] = L) : L = (e as any)[25];
    let S: any, D: any;
    ((e as any)[26] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (S = (G as any)("sand-169k319 sand-y5h43f sand-wn7fz2"), D = ((g as any).jsx as any)(qn, {
      id: "iiP6uW"
    }), (e as any)[26] = S, (e as any)[27] = D) : (S = (e as any)[26], D = (e as any)[27]);
    let V: any;
    ((e as any)[28] as any) !== (S as any) ? (V = ((g as any).jsx as any)("span", {
      className: S,
      children: D
    }), (e as any)[28] = S, (e as any)[29] = V) : V = (e as any)[29];
    let $: any;
    ((e as any)[30] as any) !== (V as any) || ((e as any)[31] as any) !== (k as any) || ((e as any)[32] as any) !== (L as any) ? ($ = ((g as any).jsxs as any)("div", {
      className: k,
      children: [L, V]
    }), (e as any)[30] = V, (e as any)[31] = k, (e as any)[32] = L, (e as any)[33] = $) : $ = (e as any)[33];
    let q: any;
    return ((e as any)[34] as any) !== (b as any) || ((e as any)[35] as any) !== ($ as any) ? (q = ((g as any).jsx as any)($t, {
      "aria-label": b,
      className: "sand-skill-listbox",
      role: "listbox",
      children: $
    }), (e as any)[34] = b, (e as any)[35] = $, (e as any)[36] = q) : q = (e as any)[36], q;
  }
  let A: any;
  ((e as any)[37] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (A = (G as any)(((ie as any)((st as any).list) as any).className), (e as any)[37] = A) : A = (e as any)[37];
  let N: any;
  if (((e as any)[38] as any) !== (c as any) || ((e as any)[39] as any) !== (f as any) || ((e as any)[40] as any) !== (a as any) || ((e as any)[41] as any) !== (n as any) || ((e as any)[42] as any) !== (o as any) || ((e as any)[43] as any) !== (p as any)) {
    let k: any;
    ((e as any)[45] as any) !== (c as any) || ((e as any)[46] as any) !== (f as any) || ((e as any)[47] as any) !== (a as any) || ((e as any)[48] as any) !== (o as any) || ((e as any)[49] as any) !== (p as any) ? (k = (I: any, E: any): any => {
      const L: any = (E as any) === (c as any),
        S: any = (D: any): any => {
          ((D as any).button as any) === (0 as any) && (((D as any).preventDefault as any)(), (o as any)(I));
        };
      return ((g as any).jsx as any)("li", {
        className: (G as any)("sand-skill-option", ((ie as any)((st as any).item) as any).className),
        role: "presentation",
        children: ((g as any).jsx as any)(is, {
          ref: L ? f : null,
          "aria-selected": L,
          className: "sand-skill-option-button",
          detail: (I as any).subtitle,
          icon: ((g as any).jsx as any)(as, {
            item: I
          }),
          id: (p as any)(E),
          isActive: L,
          name: ((I as any).action?.group as any) === ("developer" as any) ? ((g as any).jsx as any)(wr, {
            children: (I as any).label
          }) : (I as any).label,
          onClick: (D: any): any => {
            ((D as any).detail as any) === (0 as any) && (o as any)(I);
          },
          onMouseEnter: (): any => (u as any)(E),
          onPointerDown: S,
          role: "option",
          trailing: ((a as any)._ as any)((I as any).tag)
        })
      }, (I as any).id);
    }, (e as any)[45] = c, (e as any)[46] = f, (e as any)[47] = a, (e as any)[48] = o, (e as any)[49] = p, (e as any)[50] = k) : k = (e as any)[50], N = ((n as any).map as any)(k), (e as any)[38] = c, (e as any)[39] = f, (e as any)[40] = a, (e as any)[41] = n, (e as any)[42] = o, (e as any)[43] = p, (e as any)[44] = N;
  } else N = (e as any)[44];
  let C: any;
  return ((e as any)[51] as any) !== (m as any) || ((e as any)[52] as any) !== (b as any) || ((e as any)[53] as any) !== (A as any) || ((e as any)[54] as any) !== (N as any) ? (C = ((g as any).jsx as any)($t, {
    className: "sand-skill-listbox",
    children: ((g as any).jsx as any)(at, {
      direction: "vertical",
      maxHeight: `var(${So}, ${ls}px)`,
      scrollbarVisibility: "hover",
      width: "100%",
      children: ((g as any).jsx as any)("ul", {
        "aria-label": b,
        className: A,
        id: m,
        role: "listbox",
        children: N
      })
    })
  }), (e as any)[51] = m, (e as any)[52] = b, (e as any)[53] = A, (e as any)[54] = N, (e as any)[55] = C) : C = (e as any)[55], C;
}
const Eo: string = "everyone";
function vo(this: any): any {
  return Eo;
}
var ko: any = (...t: any): any => (e: any): any => {
    ((t as any).forEach as any)((n: any): any => {
      (typeof n as any) == ("function" as any) ? (n as any)(e) : n && ((n as any).current = e);
    });
  },
  ds: any = ({
    contentComponent: t
  }: any): any => {
    ((Reflect as any).set as any)(ds, "d", 2907835745);
    const e: any = ((Kn as any).useSyncExternalStore as any)((t as any).subscribe, (t as any).getSnapshot, (t as any).getServerSnapshot);
    return ((g as any).jsx as any)((g as any).Fragment, {
      children: ((Object as any).values as any)(e)
    });
  };
function Ro(this: any): any {
  const t: any = new (Set as any)();
  let e: any = {};
  return {
    subscribe(n: any): any {
      return ((t as any).add as any)(n), (): any => {
        ((t as any).delete as any)(n);
      };
    },
    getSnapshot(): any {
      return e;
    },
    getServerSnapshot(): any {
      return e;
    },
    setRenderer(n: any, s: any): any {
      e = {
        ...e,
        [n]: ((nr as any).createPortal as any)((s as any).reactElement, (s as any).element, n)
      }, ((t as any).forEach as any)((r: any): any => (r as any)());
    },
    removeRenderer(n: any): any {
      const s: any = {
        ...e
      };
      delete (s as any)[n], e = s, ((t as any).forEach as any)((r: any): any => (r as any)());
    }
  };
}
var _o: any = class extends ((ae as any).Component as any) {
    declare unsubscribeToContentComponent: any;
    declare state: any;
    declare initialized: any;
    declare editorContentRef: any;
    [key: string]: any;
    constructor(t: any) {
      var e: any;
      super(t), (this as any).editorContentRef = ((ae as any).createRef as any)(), (this as any).initialized = !1, (this as any).state = {
        hasContentComponentInitialized: !!(((e = (t as any).editor) as any) != (null as any) && (e as any).contentComponent)
      };
    }
    componentDidMount(): any {
      ((this as any).init as any)();
    }
    componentDidUpdate(): any {
      ((this as any).init as any)();
    }
    init(): any {
      var t: any;
      const e: any = ((this as any).props as any).editor;
      if (e && !(e as any).isDestroyed && ((t = ((e as any).view as any).dom) as any) != (null as any) && (t as any).parentNode) {
        if ((e as any).contentComponent) return;
        const n: any = ((this as any).editorContentRef as any).current;
        ((n as any).append as any)(...((((e as any).view as any).dom as any).parentNode as any).childNodes), ((e as any).setOptions as any)({
          element: n
        }), (e as any).contentComponent = (Ro as any)(), ((this as any).state as any).hasContentComponentInitialized || ((this as any).unsubscribeToContentComponent = (((e as any).contentComponent as any).subscribe as any)((): any => {
          ((this as any).setState as any)((s: any): any => (s as any).hasContentComponentInitialized ? s : {
            hasContentComponentInitialized: !0
          }), (this as any).unsubscribeToContentComponent && ((this as any).unsubscribeToContentComponent as any)();
        })), ((e as any).createNodeViews as any)(), (this as any).initialized = !0;
      }
    }
    componentWillUnmount(): any {
      var t: any;
      const e: any = ((this as any).props as any).editor;
      if (e) {
        (this as any).initialized = !1, (e as any).isDestroyed || (((e as any).view as any).setProps as any)({
          nodeViews: {}
        }), (this as any).unsubscribeToContentComponent && ((this as any).unsubscribeToContentComponent as any)(), (e as any).contentComponent = null;
        try {
          if (!(((t = ((e as any).view as any).dom) as any) != (null as any) && (t as any).parentNode)) return;
          const n: any = ((document as any).createElement as any)("div");
          ((n as any).append as any)(...((((e as any).view as any).dom as any).parentNode as any).childNodes), ((e as any).setOptions as any)({
            element: n
          });
        } catch {}
      }
    }
    render(): any {
      const {
        editor: t,
        innerRef: e,
        ...n
      }: any = (this as any).props;
      return ((g as any).jsxs as any)((g as any).Fragment, {
        children: [((g as any).jsx as any)("div", {
          ref: (ko as any)(e, (this as any).editorContentRef),
          ...n
        }), t?.contentComponent && ((g as any).jsx as any)(ds, {
          contentComponent: (t as any).contentComponent
        })]
      });
    }
  },
  fs: any = ((O as any).forwardRef as any)((t: any, e: any): any => {
    ((Reflect as any).set as any)(fs, "d", 2018557190);
    const n: any = ((ae as any).useMemo as any)((): any => ((((Math as any).floor as any)((((Math as any).random as any)() as any) * (4294967295 as any)) as any).toString as any)(), [(t as any).editor]);
    return ((ae as any).createElement as any)(_o, {
      key: n,
      innerRef: e,
      ...t
    });
  }),
  Io: any = ((ae as any).memo as any)(fs),
  wo: any = (typeof window as any) < ("u" as any) ? (O as any).useLayoutEffect : (O as any).useEffect,
  Co: any = class {
    declare lastSnapshot: any;
    declare editor: any;
    declare subscribers: any;
    declare lastTransactionNumber: any;
    declare transactionNumber: any;
    [key: string]: any;
    constructor(t: any) {
      (this as any).transactionNumber = 0, (this as any).lastTransactionNumber = 0, (this as any).subscribers = new (Set as any)(), (this as any).editor = t, (this as any).lastSnapshot = {
        editor: t,
        transactionNumber: 0
      }, (this as any).getSnapshot = (((this as any).getSnapshot as any).bind as any)(this), (this as any).getServerSnapshot = (((this as any).getServerSnapshot as any).bind as any)(this), (this as any).watch = (((this as any).watch as any).bind as any)(this), (this as any).subscribe = (((this as any).subscribe as any).bind as any)(this);
    }
    getSnapshot(): any {
      return ((this as any).transactionNumber as any) === ((this as any).lastTransactionNumber as any) ? (this as any).lastSnapshot : ((this as any).lastTransactionNumber = (this as any).transactionNumber, (this as any).lastSnapshot = {
        editor: (this as any).editor,
        transactionNumber: (this as any).transactionNumber
      }, (this as any).lastSnapshot);
    }
    getServerSnapshot(): any {
      return {
        editor: null,
        transactionNumber: 0
      };
    }
    subscribe(t: any): any {
      return (((this as any).subscribers as any).add as any)(t), (): any => {
        (((this as any).subscribers as any).delete as any)(t);
      };
    }
    watch(t: any): any {
      if ((this as any).editor = t, (this as any).editor) {
        const e: any = (): any => {
            (this as any).transactionNumber += 1, (((this as any).subscribers as any).forEach as any)((s: any): any => (s as any)());
          },
          n: any = (this as any).editor;
        return ((n as any).on as any)("transaction", e), (): any => {
          ((n as any).off as any)("transaction", e);
        };
      }
    }
  };
function ps(this: any, t: any): any {
  var e: any;
  const [n]: any = ((O as any).useState as any)((): any => new (Co as any)((t as any).editor)),
    s: any = ((er as any).useSyncExternalStoreWithSelector as any)((n as any).subscribe, (n as any).getSnapshot, (n as any).getServerSnapshot, (t as any).selector, ((e = (t as any).equalityFn) as any) != (null as any) ? e : or);
  return (wo as any)((): any => ((n as any).watch as any)((t as any).editor), [(t as any).editor, n]), ((O as any).useDebugValue as any)(s), s;
}
var To: any = !1,
  Ht: any = (typeof window as any) > ("u" as any),
  No: any = Ht || !!((typeof window as any) < ("u" as any) && (window as any).next),
  Mo: any = class hs {
    declare scheduledDestructionTimeout: any;
    declare options: any;
    declare instanceId: any;
    declare previousDeps: any;
    declare isComponentMounted: any;
    declare subscriptions: any;
    declare editor: any;
    [key: string]: any;
    constructor(e: any) {
      (this as any).editor = null, (this as any).subscriptions = new (Set as any)(), (this as any).isComponentMounted = !1, (this as any).previousDeps = null, (this as any).instanceId = "", (this as any).options = e, (this as any).subscriptions = new (Set as any)(), ((this as any).setEditor as any)(((this as any).getInitialEditor as any)()), ((this as any).scheduleDestroy as any)(), (this as any).getEditor = (((this as any).getEditor as any).bind as any)(this), (this as any).getServerSnapshot = (((this as any).getServerSnapshot as any).bind as any)(this), (this as any).subscribe = (((this as any).subscribe as any).bind as any)(this), (this as any).refreshEditorInstance = (((this as any).refreshEditorInstance as any).bind as any)(this), (this as any).scheduleDestroy = (((this as any).scheduleDestroy as any).bind as any)(this), (this as any).onRender = (((this as any).onRender as any).bind as any)(this), (this as any).createEditor = (((this as any).createEditor as any).bind as any)(this);
    }
    setEditor(e: any): any {
      (this as any).editor = e, (this as any).instanceId = ((((((Math as any).random as any)() as any).toString as any)(36) as any).slice as any)(2, 9), (((this as any).subscriptions as any).forEach as any)((n: any): any => (n as any)());
    }
    getInitialEditor(): any {
      return ((((this as any).options as any).current as any).immediatelyRender as any) === (void 0 as any) ? Ht || No ? null : ((this as any).createEditor as any)() : ((((this as any).options as any).current as any).immediatelyRender, (((this as any).options as any).current as any).immediatelyRender ? ((this as any).createEditor as any)() : null);
    }
    createEditor(): any {
      const e: any = {
        ...((this as any).options as any).current,
        onBeforeCreate: (...s: any): any => {
          var r: any, o: any;
          return ((o = ((r = ((this as any).options as any).current) as any).onBeforeCreate) as any) == (null as any) ? void 0 : ((o as any).call as any)(r, ...s);
        },
        onBlur: (...s: any): any => {
          var r: any, o: any;
          return ((o = ((r = ((this as any).options as any).current) as any).onBlur) as any) == (null as any) ? void 0 : ((o as any).call as any)(r, ...s);
        },
        onCreate: (...s: any): any => {
          var r: any, o: any;
          return ((o = ((r = ((this as any).options as any).current) as any).onCreate) as any) == (null as any) ? void 0 : ((o as any).call as any)(r, ...s);
        },
        onDestroy: (...s: any): any => {
          var r: any, o: any;
          return ((o = ((r = ((this as any).options as any).current) as any).onDestroy) as any) == (null as any) ? void 0 : ((o as any).call as any)(r, ...s);
        },
        onFocus: (...s: any): any => {
          var r: any, o: any;
          return ((o = ((r = ((this as any).options as any).current) as any).onFocus) as any) == (null as any) ? void 0 : ((o as any).call as any)(r, ...s);
        },
        onSelectionUpdate: (...s: any): any => {
          var r: any, o: any;
          return ((o = ((r = ((this as any).options as any).current) as any).onSelectionUpdate) as any) == (null as any) ? void 0 : ((o as any).call as any)(r, ...s);
        },
        onTransaction: (...s: any): any => {
          var r: any, o: any;
          return ((o = ((r = ((this as any).options as any).current) as any).onTransaction) as any) == (null as any) ? void 0 : ((o as any).call as any)(r, ...s);
        },
        onUpdate: (...s: any): any => {
          var r: any, o: any;
          return ((o = ((r = ((this as any).options as any).current) as any).onUpdate) as any) == (null as any) ? void 0 : ((o as any).call as any)(r, ...s);
        },
        onContentError: (...s: any): any => {
          var r: any, o: any;
          return ((o = ((r = ((this as any).options as any).current) as any).onContentError) as any) == (null as any) ? void 0 : ((o as any).call as any)(r, ...s);
        },
        onDrop: (...s: any): any => {
          var r: any, o: any;
          return ((o = ((r = ((this as any).options as any).current) as any).onDrop) as any) == (null as any) ? void 0 : ((o as any).call as any)(r, ...s);
        },
        onPaste: (...s: any): any => {
          var r: any, o: any;
          return ((o = ((r = ((this as any).options as any).current) as any).onPaste) as any) == (null as any) ? void 0 : ((o as any).call as any)(r, ...s);
        },
        onDelete: (...s: any): any => {
          var r: any, o: any;
          return ((o = ((r = ((this as any).options as any).current) as any).onDelete) as any) == (null as any) ? void 0 : ((o as any).call as any)(r, ...s);
        }
      };
      return new (rr as any)(e);
    }
    getEditor(): any {
      return (this as any).editor;
    }
    getServerSnapshot(): any {
      return null;
    }
    subscribe(e: any): any {
      return (((this as any).subscriptions as any).add as any)(e), (): any => {
        (((this as any).subscriptions as any).delete as any)(e);
      };
    }
    static compareOptions(e: any, n: any): any {
      return ((((Object as any).keys as any)(e) as any).every as any)((s: any): any => ((["onCreate", "onBeforeCreate", "onDestroy", "onUpdate", "onTransaction", "onFocus", "onBlur", "onSelectionUpdate", "onContentError", "onDrop", "onPaste"] as any).includes as any)(s) ? !0 : (s as any) === ("extensions" as any) && (e as any).extensions && (n as any).extensions ? (((e as any).extensions as any).length as any) !== (((n as any).extensions as any).length as any) ? !1 : (((e as any).extensions as any).every as any)((r: any, o: any): any => {
        var i: any;
        return (r as any) === ((((i = (n as any).extensions) as any) == (null as any) ? void 0 : (i as any)[o]) as any);
      }) : ((e as any)[s] as any) === ((n as any)[s] as any));
    }
    onRender(e: any): any {
      return (): any => ((this as any).isComponentMounted = !0, (clearTimeout as any)((this as any).scheduledDestructionTimeout), (this as any).editor && !((this as any).editor as any).isDestroyed && ((e as any).length as any) === (0 as any) ? ((hs as any).compareOptions as any)(((this as any).options as any).current, ((this as any).editor as any).options) || (((this as any).editor as any).setOptions as any)({
        ...((this as any).options as any).current,
        editable: ((this as any).editor as any).isEditable
      }) : ((this as any).refreshEditorInstance as any)(e), (): any => {
        (this as any).isComponentMounted = !1, ((this as any).scheduleDestroy as any)();
      });
    }
    refreshEditorInstance(e: any): any {
      if ((this as any).editor && !((this as any).editor as any).isDestroyed) {
        if (((this as any).previousDeps as any) === (null as any)) {
          (this as any).previousDeps = e;
          return;
        }
        if ((((this as any).previousDeps as any).length as any) === ((e as any).length as any) && (((this as any).previousDeps as any).every as any)((s: any, r: any): any => (s as any) === ((e as any)[r] as any))) return;
      }
      (this as any).editor && !((this as any).editor as any).isDestroyed && (((this as any).editor as any).destroy as any)(), ((this as any).setEditor as any)(((this as any).createEditor as any)()), (this as any).previousDeps = e;
    }
    scheduleDestroy(): any {
      const e: any = (this as any).instanceId,
        n: any = (this as any).editor;
      (this as any).scheduledDestructionTimeout = (setTimeout as any)((): any => {
        if ((this as any).isComponentMounted && ((this as any).instanceId as any) === (e as any)) {
          n && ((n as any).setOptions as any)(((this as any).options as any).current);
          return;
        }
        n && !(n as any).isDestroyed && (((n as any).destroy as any)(), ((this as any).instanceId as any) === (e as any) && ((this as any).setEditor as any)(null));
      }, 1);
    }
  };
function Ao(this: any, t: any = {}, e: any = []): any {
  const n: any = ((O as any).useRef as any)(t);
  (n as any).current = t;
  const [s]: any = ((O as any).useState as any)((): any => new (Mo as any)(n)),
    r: any = ((Kn as any).useSyncExternalStore as any)((s as any).subscribe, (s as any).getEditor, (s as any).getServerSnapshot);
  return ((O as any).useDebugValue as any)(r), ((O as any).useEffect as any)(((s as any).onRender as any)(e)), (ps as any)({
    editor: r,
    selector: ({
      transactionNumber: o
    }: any): any => ((t as any).shouldRerenderOnTransaction as any) === (!1 as any) || ((t as any).shouldRerenderOnTransaction as any) === (void 0 as any) ? null : (t as any).immediatelyRender && (o as any) === (0 as any) ? 0 : (o as any) + (1 as any)
  }), r;
}
var Lo: any = ((O as any).createContext as any)({
  editor: null
});
(Lo as any).Consumer;
var ms: any = ((O as any).createContext as any)({
    onDragStart: (): any => {},
    nodeViewContentChildren: void 0,
    nodeViewContentRef: (): any => {}
  }),
  Po: any = (): any => ((O as any).useContext as any)(ms),
  oe: any = ((ae as any).forwardRef as any)((t: any, e: any): any => {
    ((Reflect as any).set as any)(oe, "d", 1472435527);
    const {
        onDragStart: n
      }: any = (Po as any)(),
      s: any = (t as any).as || "div";
    return ((g as any).jsx as any)(s, {
      ...t,
      ref: e,
      "data-node-view-wrapper": "",
      onDragStart: n,
      style: {
        whiteSpace: "normal",
        ...(t as any).style
      }
    });
  });
function dn(this: any, t: any): any {
  return !!((typeof t as any) == ("function" as any) && (t as any).prototype && ((t as any).prototype as any).isReactComponent);
}
function fn(this: any, t: any): any {
  return !!((typeof t as any) == ("object" as any) && (t as any).$$typeof && (((((t as any).$$typeof as any).toString as any)() as any) === ("Symbol(react.forward_ref)" as any) || (((t as any).$$typeof as any).description as any) === ("react.forward_ref" as any)));
}
function Oo(this: any, t: any): any {
  return !!((typeof t as any) == ("object" as any) && (t as any).$$typeof && (((((t as any).$$typeof as any).toString as any)() as any) === ("Symbol(react.memo)" as any) || (((t as any).$$typeof as any).description as any) === ("react.memo" as any)));
}
function Do(this: any, t: any): any {
  if ((dn as any)(t) || (fn as any)(t)) return !0;
  if ((Oo as any)(t)) {
    const e: any = (t as any).type;
    if (e) return (dn as any)(e) || (fn as any)(e);
  }
  return !1;
}
function jo(this: any): any {
  try {
    if ((O as any).version) return ((parseInt as any)(((((O as any).version as any).split as any)(".") as any)[0], 10) as any) >= (19 as any);
  } catch {}
  return !1;
}
var Oe: any = class {
  declare reactElement: any;
  declare element: any;
  declare props: any;
  declare editor: any;
  declare component: any;
  declare id: any;
  declare ref: any;
  [key: string]: any;
  constructor(t: any, {
    editor: e,
    props: n = {},
    as: s = "div",
    className: r = ""
  }: any) {
    (this as any).ref = null, (this as any).id = ((((Math as any).floor as any)((((Math as any).random as any)() as any) * (4294967295 as any)) as any).toString as any)(), (this as any).component = t, (this as any).editor = e, (this as any).props = n, (this as any).element = ((document as any).createElement as any)(s), ((((this as any).element as any).classList as any).add as any)("react-renderer"), r && ((((this as any).element as any).classList as any).add as any)(...((r as any).split as any)(" ")), ((this as any).editor as any).isInitialized ? ((tr as any).flushSync as any)((): any => {
      ((this as any).render as any)();
    }) : (queueMicrotask as any)((): any => {
      ((this as any).render as any)();
    });
  }
  render(): any {
    var t: any;
    const e: any = (this as any).component,
      n: any = (this as any).props,
      s: any = (this as any).editor,
      r: any = (jo as any)(),
      o: any = (Do as any)(e),
      i: any = {
        ...n
      };
    (i as any).ref && !(r || o) && delete (i as any).ref, !(i as any).ref && (r || o) && ((i as any).ref = (l: any): any => {
      (this as any).ref = l;
    }), (this as any).reactElement = ((g as any).jsx as any)(e, {
      ...i
    }), ((t = s?.contentComponent) as any) == (null as any) || ((t as any).setRenderer as any)((this as any).id, this);
  }
  updateProps(t: any = {}): any {
    (this as any).props = {
      ...(this as any).props,
      ...t
    }, ((this as any).render as any)();
  }
  destroy(): any {
    var t: any;
    const e: any = (this as any).editor;
    ((t = e?.contentComponent) as any) == (null as any) || ((t as any).removeRenderer as any)((this as any).id);
    try {
      (this as any).element && ((this as any).element as any).parentNode && ((((this as any).element as any).parentNode as any).removeChild as any)((this as any).element);
    } catch {}
  }
  updateAttributes(t: any): any {
    ((((Object as any).keys as any)(t) as any).forEach as any)((e: any): any => {
      (((this as any).element as any).setAttribute as any)(e, (t as any)[e]);
    });
  }
};
((ae as any).createContext as any)({
  markViewContentRef: (): any => {}
});
var $o: any = class extends (ir as any) {
  declare innerDecorations: any;
  declare decorations: any;
  declare node: any;
  declare renderer: any;
  declare contentDOMElement: any;
  declare selectionRafId: any;
  [key: string]: any;
  constructor(t: any, e: any, n: any) {
    if (super(t, e, n), (this as any).selectionRafId = null, !((this as any).node as any).isLeaf) {
      ((this as any).options as any).contentDOMElementTag ? (this as any).contentDOMElement = ((document as any).createElement as any)(((this as any).options as any).contentDOMElementTag) : (this as any).contentDOMElement = ((document as any).createElement as any)(((this as any).node as any).isInline ? "span" : "div"), (((this as any).contentDOMElement as any).dataset as any).nodeViewContentReact = "", (((this as any).contentDOMElement as any).dataset as any).nodeViewWrapper = "", (((this as any).contentDOMElement as any).style as any).whiteSpace = "inherit";
      const s: any = (((this as any).dom as any).querySelector as any)("[data-node-view-content]");
      if (!s) return;
      ((s as any).appendChild as any)((this as any).contentDOMElement);
    }
  }
  mount(): any {
    const t: any = {
      editor: (this as any).editor,
      node: (this as any).node,
      decorations: (this as any).decorations,
      innerDecorations: (this as any).innerDecorations,
      view: (this as any).view,
      selected: !1,
      extension: (this as any).extension,
      HTMLAttributes: (this as any).HTMLAttributes,
      getPos: (): any => ((this as any).getPos as any)(),
      updateAttributes: (a: any = {}): any => ((this as any).updateAttributes as any)(a),
      deleteNode: (): any => ((this as any).deleteNode as any)(),
      ref: ((O as any).createRef as any)()
    };
    if (!((this as any).component as any).displayName) {
      const a: any = (d: any): any => (((((d as any).charAt as any)(0) as any).toUpperCase as any)() as any) + (((d as any).substring as any)(1) as any);
      ((this as any).component as any).displayName = (a as any)(((this as any).extension as any).name);
    }
    const s: any = {
        onDragStart: (((this as any).onDragStart as any).bind as any)(this),
        nodeViewContentRef: (a: any): any => {
          a && (this as any).contentDOMElement && ((a as any).firstChild as any) !== ((this as any).contentDOMElement as any) && (((a as any).hasAttribute as any)("data-node-view-wrapper") && ((a as any).removeAttribute as any)("data-node-view-wrapper"), ((a as any).appendChild as any)((this as any).contentDOMElement));
        }
      },
      r: any = (this as any).component,
      o: any = ((O as any).memo as any)((a: any): any => ((g as any).jsx as any)((ms as any).Provider, {
        value: s,
        children: ((O as any).createElement as any)(r, a)
      }));
    (o as any).displayName = "ReactNodeView";
    let i: any = ((this as any).node as any).isInline ? "span" : "div";
    ((this as any).options as any).as && (i = ((this as any).options as any).as);
    const {
      className: l = ""
    }: any = (this as any).options;
    (this as any).handleSelectionUpdate = (((this as any).handleSelectionUpdate as any).bind as any)(this), (this as any).renderer = new (Oe as any)(o, {
      editor: (this as any).editor,
      props: t,
      as: i,
      className: ((`node-${(((this as any).node as any).type as any).name} ${l}` as any).trim as any)()
    }), (((this as any).editor as any).on as any)("selectionUpdate", (this as any).handleSelectionUpdate), ((this as any).updateElementAttributes as any)();
  }
  get dom(): any {
    var t: any;
    if ((((this as any).renderer as any).element as any).firstElementChild && !(((t = (((this as any).renderer as any).element as any).firstElementChild) as any) != (null as any) && ((t as any).hasAttribute as any)("data-node-view-wrapper"))) throw (Error as any)("Please use the NodeViewWrapper component for your node view.");
    return ((this as any).renderer as any).element;
  }
  get contentDOM(): any {
    return ((this as any).node as any).isLeaf ? null : (this as any).contentDOMElement;
  }
  handleSelectionUpdate(): any {
    (this as any).selectionRafId && ((cancelAnimationFrame as any)((this as any).selectionRafId), (this as any).selectionRafId = null), (this as any).selectionRafId = (requestAnimationFrame as any)((): any => {
      (this as any).selectionRafId = null;
      const {
          from: t,
          to: e
        }: any = (((this as any).editor as any).state as any).selection,
        n: any = ((this as any).getPos as any)();
      if ((typeof n as any) == ("number" as any)) if ((t as any) <= (n as any) && (e as any) >= ((n as any) + (((this as any).node as any).nodeSize as any) as any)) {
        if ((((this as any).renderer as any).props as any).selected) return;
        ((this as any).selectNode as any)();
      } else {
        if (!(((this as any).renderer as any).props as any).selected) return;
        ((this as any).deselectNode as any)();
      }
    });
  }
  update(t: any, e: any, n: any): any {
    const s: any = (r: any): any => {
      (((this as any).renderer as any).updateProps as any)(r), (typeof ((this as any).options as any).attrs as any) == ("function" as any) && ((this as any).updateElementAttributes as any)();
    };
    if (((t as any).type as any) !== (((this as any).node as any).type as any)) return !1;
    if ((typeof ((this as any).options as any).update as any) == ("function" as any)) {
      const r: any = (this as any).node,
        o: any = (this as any).decorations,
        i: any = (this as any).innerDecorations;
      return (this as any).node = t, (this as any).decorations = e, (this as any).innerDecorations = n, (((this as any).options as any).update as any)({
        oldNode: r,
        oldDecorations: o,
        newNode: t,
        newDecorations: e,
        oldInnerDecorations: i,
        innerDecorations: n,
        updateProps: (): any => (s as any)({
          node: t,
          decorations: e,
          innerDecorations: n
        })
      });
    }
    return (t as any) === ((this as any).node as any) && ((this as any).decorations as any) === (e as any) && ((this as any).innerDecorations as any) === (n as any) || ((this as any).node = t, (this as any).decorations = e, (this as any).innerDecorations = n, (s as any)({
      node: t,
      decorations: e,
      innerDecorations: n
    })), !0;
  }
  selectNode(): any {
    (((this as any).renderer as any).updateProps as any)({
      selected: !0
    }), (((((this as any).renderer as any).element as any).classList as any).add as any)("ProseMirror-selectednode");
  }
  deselectNode(): any {
    (((this as any).renderer as any).updateProps as any)({
      selected: !1
    }), (((((this as any).renderer as any).element as any).classList as any).remove as any)("ProseMirror-selectednode");
  }
  destroy(): any {
    (((this as any).renderer as any).destroy as any)(), (((this as any).editor as any).off as any)("selectionUpdate", (this as any).handleSelectionUpdate), (this as any).contentDOMElement = null, (this as any).selectionRafId && ((cancelAnimationFrame as any)((this as any).selectionRafId), (this as any).selectionRafId = null);
  }
  updateElementAttributes(): any {
    if (((this as any).options as any).attrs) {
      let t: any = {};
      if ((typeof ((this as any).options as any).attrs as any) == ("function" as any)) {
        const e: any = (((this as any).editor as any).extensionManager as any).attributes,
          n: any = (lr as any)((this as any).node, e);
        t = (((this as any).options as any).attrs as any)({
          node: (this as any).node,
          HTMLAttributes: n
        });
      } else t = ((this as any).options as any).attrs;
      (((this as any).renderer as any).updateAttributes as any)(t);
    }
  }
};
function De(this: any, t: any, e: any): any {
  return (n: any): any => ((n as any).editor as any).contentComponent ? new ($o as any)(t, n, e) : {};
}
function Ho(this: any, t: any): any {
  var e: any;
  const {
      char: n,
      allowSpaces: s,
      allowToIncludeChar: r,
      allowedPrefixes: o,
      startOfLine: i,
      $position: l
    }: any = t,
    a: any = s && !r,
    d: any = (Bt as any)(n),
    c: any = new (RegExp as any)(`\\s${d}$`),
    u: any = i ? "^" : "",
    f: any = r ? "" : d,
    h: any = a ? new (RegExp as any)(`${u}${d}.*?(?=\\s${f}|$)`, "gm") : new (RegExp as any)(`${u}(?:^)?${d}[^\\s${f}]*`, "gm"),
    m: any = (((e = (l as any).nodeBefore) as any) == (null as any) ? void 0 : (e as any).isText) && ((l as any).nodeBefore as any).text;
  if (!m) return null;
  const _: any = ((l as any).pos as any) - ((m as any).length as any),
    b: any = ((((Array as any).from as any)(((m as any).matchAll as any)(h)) as any).pop as any)();
  if (!b || ((b as any).input as any) === (void 0 as any) || ((b as any).index as any) === (void 0 as any)) return null;
  const y: any = (((b as any).input as any).slice as any)(((Math as any).max as any)(0, ((b as any).index as any) - (1 as any)), (b as any).index),
    p: any = ((new (RegExp as any)(`^[${o?.join("")}\0]?$`) as any).test as any)(y);
  if ((o as any) !== (null as any) && !p) return null;
  const w: any = (_ as any) + ((b as any).index as any);
  let j: any = (w as any) + (((b as any)[0] as any).length as any);
  return a && ((c as any).test as any)(((m as any).slice as any)((j as any) - (1 as any), (j as any) + (1 as any))) && ((b as any)[0] += " ", j += 1), (w as any) < ((l as any).pos as any) && (j as any) >= ((l as any).pos as any) ? {
    range: {
      from: w,
      to: j
    },
    query: (((b as any)[0] as any).slice as any)((n as any).length),
    text: (b as any)[0]
  } : null;
}
var Uo: any = new (W as any)("suggestion");
function gs(this: any, {
  pluginKey: t = Uo,
  editor: e,
  char: n = "@",
  allowSpaces: s = !1,
  allowToIncludeChar: r = !1,
  allowedPrefixes: o = [" "],
  startOfLine: i = !1,
  decorationTag: l = "span",
  decorationClass: a = "suggestion",
  decorationContent: d = "",
  decorationEmptyClass: c = "is-empty",
  command: u = (): any => null,
  items: f = (): any => [],
  render: h = (): any => ({}),
  allow: m = (): any => !0,
  findSuggestionMatch: _ = Ho
}: any): any {
  let b: any;
  const y: any = h?.(),
    p: any = (): any => {
      const x: any = ((((e as any).state as any).selection as any).$anchor as any).pos,
        v: any = (((e as any).view as any).coordsAtPos as any)(x),
        {
          top: A,
          right: N,
          bottom: C,
          left: k
        }: any = v;
      try {
        return new (DOMRect as any)(k, A, (N as any) - (k as any), (C as any) - (A as any));
      } catch {
        return null;
      }
    },
    w: any = (x: any, v: any): any => v ? (): any => {
      const A: any = ((t as any).getState as any)((e as any).state),
        N: any = A?.decorationId,
        C: any = (((x as any).dom as any).querySelector as any)(`[data-decoration-id="${N}"]`);
      return C?.getBoundingClientRect() || null;
    } : p;
  function j(this: any, x: any, v: any): any {
    var A: any;
    try {
      const C: any = ((t as any).getState as any)((x as any).state),
        k: any = C?.decorationId ? (((x as any).dom as any).querySelector as any)(`[data-decoration-id="${(C as any).decorationId}"]`) : null,
        I: any = {
          editor: e,
          range: C?.range || {
            from: 0,
            to: 0
          },
          query: C?.query || null,
          text: C?.text || null,
          items: [],
          command: (E: any): any => (u as any)({
            editor: e,
            range: C?.range || {
              from: 0,
              to: 0
            },
            props: E
          }),
          decorationNode: k,
          clientRect: (w as any)(x, k)
        };
      ((A = y?.onExit) as any) == (null as any) || ((A as any).call as any)(y, I);
    } catch {}
    const N: any = ((((x as any).state as any).tr as any).setMeta as any)(v, {
      exit: !0
    });
    ((x as any).dispatch as any)(N);
  }
  const M: any = new (ue as any)({
    key: t,
    view(): any {
      return {
        update: async (x: any, v: any): Promise<any> => {
          var A: any, N: any, C: any, k: any, I: any, E: any, L: any;
          const S: any = ((A = (this as any).key) as any) == (null as any) ? void 0 : ((A as any).getState as any)(v),
            D: any = ((N = (this as any).key) as any) == (null as any) ? void 0 : ((N as any).getState as any)((x as any).state),
            V: any = (S as any).active && (D as any).active && (((S as any).range as any).from as any) !== (((D as any).range as any).from as any),
            $: any = !(S as any).active && (D as any).active,
            q: any = (S as any).active && !(D as any).active,
            H: any = !$ && !q && ((S as any).query as any) !== ((D as any).query as any),
            B: any = $ || V && H,
            X: any = H || V,
            Y: any = q || V && H;
          if (!B && !X && !Y) return;
          const Z: any = Y && !B ? S : D,
            le: any = (((x as any).dom as any).querySelector as any)(`[data-decoration-id="${(Z as any).decorationId}"]`);
          b = {
            editor: e,
            range: (Z as any).range,
            query: (Z as any).query,
            text: (Z as any).text,
            items: [],
            command: (Ce: any): any => (u as any)({
              editor: e,
              range: (Z as any).range,
              props: Ce
            }),
            decorationNode: le,
            clientRect: (w as any)(x, le)
          }, B && (((C = y?.onBeforeStart) as any) == (null as any) || ((C as any).call as any)(y, b)), X && (((k = y?.onBeforeUpdate) as any) == (null as any) || ((k as any).call as any)(y, b)), (X || B) && ((b as any).items = await (f as any)({
            editor: e,
            query: (Z as any).query
          })), Y && (((I = y?.onExit) as any) == (null as any) || ((I as any).call as any)(y, b)), X && (((E = y?.onUpdate) as any) == (null as any) || ((E as any).call as any)(y, b)), B && (((L = y?.onStart) as any) == (null as any) || ((L as any).call as any)(y, b));
        },
        destroy: (): any => {
          var x: any;
          b && (((x = y?.onExit) as any) == (null as any) || ((x as any).call as any)(y, b));
        }
      };
    },
    state: {
      init(): any {
        return {
          active: !1,
          range: {
            from: 0,
            to: 0
          },
          query: null,
          text: null,
          composing: !1
        };
      },
      apply(x: any, v: any, A: any, N: any): any {
        const {
            isEditable: C
          }: any = e,
          {
            composing: k
          }: any = (e as any).view,
          {
            selection: I
          }: any = x,
          {
            empty: E,
            from: L
          }: any = I,
          S: any = {
            ...v
          },
          D: any = ((x as any).getMeta as any)(t);
        if (D && (D as any).exit) return (S as any).active = !1, (S as any).decorationId = null, (S as any).range = {
          from: 0,
          to: 0
        }, (S as any).query = null, (S as any).text = null, S;
        if ((S as any).composing = k, C && (E || ((e as any).view as any).composing)) {
          ((L as any) < (((v as any).range as any).from as any) || (L as any) > (((v as any).range as any).to as any)) && !k && !(v as any).composing && ((S as any).active = !1);
          const V: any = (_ as any)({
              char: n,
              allowSpaces: s,
              allowToIncludeChar: r,
              allowedPrefixes: o,
              startOfLine: i,
              $position: (I as any).$from
            }),
            $: any = `id_${((Math as any).floor as any)((((Math as any).random as any)() as any) * (4294967295 as any))}`;
          V && (m as any)({
            editor: e,
            state: N,
            range: (V as any).range,
            isActive: (v as any).active
          }) ? ((S as any).active = !0, (S as any).decorationId = (v as any).decorationId ? (v as any).decorationId : $, (S as any).range = (V as any).range, (S as any).query = (V as any).query, (S as any).text = (V as any).text) : (S as any).active = !1;
        } else (S as any).active = !1;
        return (S as any).active || ((S as any).decorationId = null, (S as any).range = {
          from: 0,
          to: 0
        }, (S as any).query = null, (S as any).text = null), S;
      }
    },
    props: {
      handleKeyDown(x: any, v: any): any {
        var A: any, N: any, C: any, k: any;
        const {
          active: I,
          range: E
        }: any = ((M as any).getState as any)((x as any).state);
        if (!I) return !1;
        if (((v as any).key as any) === ("Escape" as any) || ((v as any).key as any) === ("Esc" as any)) {
          const S: any = ((M as any).getState as any)((x as any).state),
            D: any = ((A = b?.decorationNode) as any) != (null as any) ? A : null,
            V: any = D ?? (S?.decorationId ? (((x as any).dom as any).querySelector as any)(`[data-decoration-id="${(S as any).decorationId}"]`) : null);
          if ((((N = y?.onKeyDown) as any) == (null as any) ? void 0 : ((N as any).call as any)(y, {
            view: x,
            event: v,
            range: (S as any).range
          })) || !1) return !0;
          const q: any = {
            editor: e,
            range: (S as any).range,
            query: (S as any).query,
            text: (S as any).text,
            items: [],
            command: (H: any): any => (u as any)({
              editor: e,
              range: (S as any).range,
              props: H
            }),
            decorationNode: V,
            clientRect: V ? (): any => ((V as any).getBoundingClientRect as any)() || null : null
          };
          return ((C = y?.onExit) as any) == (null as any) || ((C as any).call as any)(y, q), (j as any)(x, t), !0;
        }
        return (((k = y?.onKeyDown) as any) == (null as any) ? void 0 : ((k as any).call as any)(y, {
          view: x,
          event: v,
          range: E
        })) || !1;
      },
      decorations(x: any): any {
        const {
          active: v,
          range: A,
          decorationId: N,
          query: C
        }: any = ((M as any).getState as any)(x);
        if (!v) return null;
        const k: any = !C?.length,
          I: any = [a];
        return k && ((I as any).push as any)(c), ((ar as any).create as any)((x as any).doc, [((cr as any).inline as any)((A as any).from, (A as any).to, {
          nodeName: l,
          class: ((I as any).join as any)(" "),
          "data-decoration-id": N,
          "data-decoration-content": d
        })]);
      }
    }
  });
  return M;
}
var Xt: any = gs;
function Vo(this: any, {
  editor: t,
  overrideSuggestionOptions: e,
  extensionName: n,
  char: s = "@"
}: any): any {
  const r: any = new (W as any)();
  return {
    editor: t,
    char: s,
    pluginKey: r,
    command: ({
      editor: o,
      range: i,
      props: l
    }: any): any => {
      var a: any, d: any, c: any;
      const u: any = (((((o as any).view as any).state as any).selection as any).$to as any).nodeAfter;
      ((a = u?.text) as any) != (null as any) && ((a as any).startsWith as any)(" ") && ((i as any).to += 1), ((((((((o as any).chain as any)() as any).focus as any)() as any).insertContentAt as any)(i, [{
        type: n,
        attrs: {
          ...l,
          mentionSuggestionChar: s
        }
      }, {
        type: "text",
        text: " "
      }]) as any).run as any)(), ((c = ((d = ((((o as any).view as any).dom as any).ownerDocument as any).defaultView) as any) == (null as any) ? void 0 : ((d as any).getSelection as any)()) as any) == (null as any) || ((c as any).collapseToEnd as any)();
    },
    allow: ({
      state: o,
      range: i
    }: any): any => {
      const l: any = (((o as any).doc as any).resolve as any)((i as any).from),
        a: any = (((o as any).schema as any).nodes as any)[n];
      return !!(((((l as any).parent as any).type as any).contentMatch as any).matchType as any)(a);
    },
    ...e
  };
}
function ys(this: any, t: any): any {
  return ((((((t as any).options as any).suggestions as any).length ? ((t as any).options as any).suggestions : [((t as any).options as any).suggestion]) as any).map as any)((e: any): any => (Vo as any)({
    editor: (t as any).editor,
    overrideSuggestionOptions: e,
    extensionName: (t as any).name,
    char: (e as any).char
  }));
}
function pn(this: any, t: any, e: any): any {
  const n: any = (ys as any)(t),
    s: any = ((n as any).find as any)((r: any): any => ((r as any).char as any) === (e as any));
  return s || ((n as any).length ? (n as any)[0] : null);
}
var qo: any = ((Le as any).create as any)({
    name: "mention",
    priority: 101,
    addOptions(): any {
      return {
        HTMLAttributes: {},
        renderText({
          node: t,
          suggestion: e
        }: any): any {
          var n: any, s: any;
          return `${((n = e?.char) as any) != (null as any) ? n : "@"}${((s = ((t as any).attrs as any).label) as any) != (null as any) ? s : ((t as any).attrs as any).id}`;
        },
        deleteTriggerWithBackspace: !1,
        renderHTML({
          options: t,
          node: e,
          suggestion: n
        }: any): any {
          var s: any, r: any;
          return ["span", (re as any)((this as any).HTMLAttributes, (t as any).HTMLAttributes), `${((s = n?.char) as any) != (null as any) ? s : "@"}${((r = ((e as any).attrs as any).label) as any) != (null as any) ? r : ((e as any).attrs as any).id}`];
        },
        suggestions: [],
        suggestion: {}
      };
    },
    group: "inline",
    inline: !0,
    selectable: !1,
    atom: !0,
    addAttributes(): any {
      return {
        id: {
          default: null,
          parseHTML: (t: any): any => ((t as any).getAttribute as any)("data-id"),
          renderHTML: (t: any): any => (t as any).id ? {
            "data-id": (t as any).id
          } : {}
        },
        label: {
          default: null,
          parseHTML: (t: any): any => ((t as any).getAttribute as any)("data-label"),
          renderHTML: (t: any): any => (t as any).label ? {
            "data-label": (t as any).label
          } : {}
        },
        mentionSuggestionChar: {
          default: "@",
          parseHTML: (t: any): any => ((t as any).getAttribute as any)("data-mention-suggestion-char"),
          renderHTML: (t: any): any => ({
            "data-mention-suggestion-char": (t as any).mentionSuggestionChar
          })
        }
      };
    },
    parseHTML(): any {
      return [{
        tag: `span[data-type="${(this as any).name}"]`
      }];
    },
    renderHTML({
      node: t,
      HTMLAttributes: e
    }: any): any {
      const n: any = (pn as any)(this, ((t as any).attrs as any).mentionSuggestionChar);
      if ((((this as any).options as any).renderLabel as any) !== (void 0 as any)) return ((console as any).warn as any)("renderLabel is deprecated use renderText and renderHTML instead"), ["span", (re as any)({
        "data-type": (this as any).name
      }, ((this as any).options as any).HTMLAttributes, e), (((this as any).options as any).renderLabel as any)({
        options: (this as any).options,
        node: t,
        suggestion: n
      })];
      const s: any = {
        ...(this as any).options
      };
      (s as any).HTMLAttributes = (re as any)({
        "data-type": (this as any).name
      }, ((this as any).options as any).HTMLAttributes, e);
      const r: any = (((this as any).options as any).renderHTML as any)({
        options: s,
        node: t,
        suggestion: n
      });
      return (typeof r as any) == ("string" as any) ? ["span", (re as any)({
        "data-type": (this as any).name
      }, ((this as any).options as any).HTMLAttributes, e), r] : r;
    },
    ...(ur as any)({
      nodeName: "mention",
      name: "@",
      selfClosing: !0,
      allowedAttributes: ["id", "label", {
        name: "mentionSuggestionChar",
        skipIfDefault: "@"
      }],
      parseAttributes: (t: any): any => {
        const e: any = {},
          n: any = /(\w+)=(?:"([^"]*)"|'([^']*)')/g;
        let s: any = ((n as any).exec as any)(t);
        for (; (s as any) !== (null as any);) {
          const [, r, o, i]: any = s,
            l: any = o ?? i;
          (e as any)[(r as any) === ("char" as any) ? "mentionSuggestionChar" : r] = l, s = ((n as any).exec as any)(t);
        }
        return e;
      },
      serializeAttributes: (t: any): any => ((((((((Object as any).entries as any)(t) as any).filter as any)(([, e]: any): any => (e as any) != (null as any)) as any).map as any)(([e, n]: any): any => `${(e as any) === ("mentionSuggestionChar" as any) ? "char" : e}="${n}"`) as any).join as any)(" ")
    }),
    renderText({
      node: t
    }: any): any {
      const e: any = {
        options: (this as any).options,
        node: t,
        suggestion: (pn as any)(this, ((t as any).attrs as any).mentionSuggestionChar)
      };
      return (((this as any).options as any).renderLabel as any) !== (void 0 as any) ? (((console as any).warn as any)("renderLabel is deprecated use renderText and renderHTML instead"), (((this as any).options as any).renderLabel as any)(e)) : (((this as any).options as any).renderText as any)(e);
    },
    addKeyboardShortcuts(): any {
      return {
        Backspace: (): any => ((((this as any).editor as any).commands as any).command as any)(({
          tr: t,
          state: e
        }: any): any => {
          let n: any = !1;
          const {
              selection: s
            }: any = e,
            {
              empty: r,
              anchor: o
            }: any = s;
          if (!r) return !1;
          let i: any = new (dr as any)(),
            l: any = 0;
          return (((e as any).doc as any).nodesBetween as any)((o as any) - (1 as any), o, (a: any, d: any): any => {
            if ((((a as any).type as any).name as any) === ((this as any).name as any)) return n = !0, i = a, l = d, !1;
          }), n && ((t as any).insertText as any)(((this as any).options as any).deleteTriggerWithBackspace ? "" : ((i as any).attrs as any).mentionSuggestionChar, l, (l as any) + ((i as any).nodeSize as any)), n;
        })
      };
    },
    addProseMirrorPlugins(): any {
      return (((ys as any)(this) as any).map as any)(gs);
    }
  }),
  bs: any = qo,
  Ko: any = fr;
function pt(this: any, t: any): any {
  const e: any = ((z as any).c as any)(2),
    {
      editor: n,
      selected: s
    }: any = t;
  let r: any;
  ((e as any)[0] as any) !== (n as any) ? (r = {
    editor: n,
    selector: Go
  }, (e as any)[0] = n, (e as any)[1] = r) : r = (e as any)[1];
  const o: any = (ps as any)(r);
  return s && o;
}
function Go(this: any, t: any): any {
  return ((t as any).editor as any).isFocused;
}
function xs(this: any, t: any): any {
  (xs as any).d = 414;
  const e: any = ((z as any).c as any)(9),
    {
      quote: n,
      isSelected: s
    }: any = t,
    r: any = (s as any) === (void 0 as any) ? !1 : s;
  let o: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (o = ((g as any).jsx as any)(we, {
    name: "chat-bubble-ellipsis",
    size: "sm"
  }), (e as any)[0] = o) : o = (e as any)[0];
  let i: any;
  ((e as any)[1] as any) !== (n as any) ? (i = (Zn as any)(n), (e as any)[1] = n, (e as any)[2] = i) : i = (e as any)[2];
  let l: any;
  ((e as any)[3] as any) !== (n as any) ? (l = (Zr as any)(n), (e as any)[3] = n, (e as any)[4] = l) : l = (e as any)[4];
  let a: any;
  return ((e as any)[5] as any) !== (r as any) || ((e as any)[6] as any) !== (i as any) || ((e as any)[7] as any) !== (l as any) ? (a = ((g as any).jsx as any)(Xn, {
    "data-type": "quote-reference",
    icon: o,
    isSelected: r,
    label: i,
    title: l
  }), (e as any)[5] = r, (e as any)[6] = i, (e as any)[7] = l, (e as any)[8] = a) : a = (e as any)[8], a;
}
function Ss(this: any, t: any): any {
  (Ss as any).d = 415;
  const e: any = ((z as any).c as any)(8),
    {
      node: n,
      editor: s,
      selected: r
    }: any = t;
  let o: any;
  ((e as any)[0] as any) !== (s as any) || ((e as any)[1] as any) !== (r as any) ? (o = {
    editor: s,
    selected: r
  }, (e as any)[0] = s, (e as any)[1] = r, (e as any)[2] = o) : o = (e as any)[2];
  const i: any = (pt as any)(o),
    l: any = ((n as any).attrs as any).quote;
  if ((typeof l as any) != ("string" as any) || ((l as any).length as any) === (0 as any)) {
    let c: any;
    return ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (c = ((g as any).jsx as any)(oe, {
      as: "span"
    }), (e as any)[3] = c) : c = (e as any)[3], c;
  }
  let a: any;
  ((e as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = {
    verticalAlign: "top"
  }, (e as any)[4] = a) : a = (e as any)[4];
  let d: any;
  return ((e as any)[5] as any) !== (i as any) || ((e as any)[6] as any) !== (l as any) ? (d = ((g as any).jsx as any)(oe, {
    as: "span",
    "data-type": "quote-reference",
    style: a,
    children: ((g as any).jsx as any)(xs, {
      isSelected: i,
      quote: l
    })
  }), (e as any)[5] = i, (e as any)[6] = l, (e as any)[7] = d) : d = (e as any)[7], d;
}
function hn(this: any, t: any): any {
  return (typeof t as any) == ("string" as any) ? t : "";
}
const Bo: any = ((Le as any).create as any)({
  name: es,
  group: "inline",
  inline: !0,
  atom: !0,
  selectable: !0,
  addAttributes(): any {
    return {
      quote: {
        default: null,
        parseHTML: (t: any): any => ((t as any).getAttribute as any)("data-quote"),
        renderHTML: (t: any): any => (typeof (t as any).quote as any) == ("string" as any) ? {
          "data-quote": (t as any).quote
        } : {}
      }
    };
  },
  parseHTML(): any {
    return [{
      tag: 'span[data-type="quote-reference"][data-quote]'
    }];
  },
  renderHTML({
    node: t,
    HTMLAttributes: e
  }: any): any {
    return ["span", (re as any)({
      "data-type": "quote-reference"
    }, e), (Zn as any)((hn as any)(((t as any).attrs as any).quote))];
  },
  renderText({
    node: t
  }: any): any {
    return (eo as any)((hn as any)(((t as any).attrs as any).quote));
  },
  addNodeView(): any {
    return (De as any)(Ss);
  }
});
function zo(this: any, t: any): any {
  const e: any = (ts as any)((t as any).prNumber);
  return (e as any) == (null as any) ? "" : (to as any)(e, (typeof (t as any).title as any) == ("string" as any) ? (t as any).title : null);
}
function Es(this: any, t: any): any {
  (Es as any).d = 606;
  const e: any = ((z as any).c as any)(7),
    {
      node: n
    }: any = t;
  let s: any;
  ((e as any)[0] as any) !== (((n as any).attrs as any).prNumber as any) ? (s = (ts as any)(((n as any).attrs as any).prNumber), (e as any)[0] = ((n as any).attrs as any).prNumber, (e as any)[1] = s) : s = (e as any)[1];
  const r: any = s;
  if ((r as any) == (null as any)) {
    let a: any;
    return ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = ((g as any).jsx as any)(oe, {
      as: "span"
    }), (e as any)[2] = a) : a = (e as any)[2], a;
  }
  const o: any = (typeof ((n as any).attrs as any).title as any) == ("string" as any) ? ((n as any).attrs as any).title : null,
    i: any = (typeof ((n as any).attrs as any).url as any) == ("string" as any) ? ((n as any).attrs as any).url : null;
  let l: any;
  return ((e as any)[3] as any) !== (r as any) || ((e as any)[4] as any) !== (o as any) || ((e as any)[5] as any) !== (i as any) ? (l = ((g as any).jsx as any)(oe, {
    as: "span",
    "data-type": "pr-reference",
    children: ((g as any).jsx as any)(no, {
      prNumber: r,
      title: o,
      url: i
    })
  }), (e as any)[3] = r, (e as any)[4] = o, (e as any)[5] = i, (e as any)[6] = l) : l = (e as any)[6], l;
}
const Fo: any = {
  assistants: {
    id: "ixkTse"
  },
  automations: {
    id: "aAnCaW"
  },
  tools: {
    id: "fOuPPd"
  }
};
function Wo(this: any, t: any): any {
  return ((t as any).isGroup as any) === (!0 as any) || ((t as any).seat as any) === ("room" as any) ? {
    id: "L8fEEm"
  } : ((t as any).seat as any) === ("person" as any) ? {
    id: "OZdaTZ"
  } : (Fo as any)[(t as any).category];
}
function Xo(this: any, t: any, e: any, n: any): any {
  return (ss as any)({
    label: (t as any).label,
    keywords: (t as any).keywords,
    tokens: e,
    normalizedQuery: n
  });
}
function Qo(this: any, t: any, e: any): any {
  const n: any = ((e as any).indexOf as any)(t);
  return (n as any) < (0 as any) ? 0 : (((e as any).length as any) - (n as any) as any) / ((e as any).length as any);
}
function Yo(this: any, t: any, e: any, n: any): any {
  const s: any = (ns as any)(e);
  if (((s as any).length as any) === (0 as any)) return [];
  const r: any = ((s as any).join as any)(" ");
  return ((((((t as any).flatMap as any)((o: any, i: any): any => {
    const l: any = (Xo as any)(o, s, r),
      a: any = (Qo as any)((o as any).key, n);
    return (l as any) != (null as any) ? [{
      entry: o,
      index: i,
      score: l,
      recency: a
    }] : [];
  }) as any).sort as any)((o: any, i: any): any => ((i as any).score as any) - ((o as any).score as any) || ((i as any).recency as any) - ((o as any).recency as any) || ((o as any).index as any) - ((i as any).index as any)) as any).map as any)((o: any): any => (o as any).entry);
}
function Jo(this: any, t: any): any {
  const e: any = new (Set as any)();
  return ((t as any).filter as any)((n: any): any => ((e as any).has as any)((n as any).key) ? !1 : (((e as any).add as any)((n as any).key), !0));
}
function Zo(this: any, t: any, e: any, n: any): any {
  const s: any = (Jo as any)(t);
  return ((((e as any).trim as any)() as any).length as any) === (0 as any) ? s : (Yo as any)(s, e, n);
}
function mn(this: any, t: any, e: any): any {
  return (e as any) <= (0 as any) ? 0 : (((t as any) % (e as any) as any) + (e as any) as any) % (e as any);
}
function Ut(this: any, t: any, e: any): any {
  return (e as any) <= (0 as any) ? 0 : ((Math as any).min as any)(((Math as any).max as any)(t, 0), (e as any) - (1 as any));
}
function gn(this: any, t: any): any {
  const {
    key: e,
    state: n,
    rows: s
  }: any = t;
  if (((s as any).length as any) === (0 as any)) return (e as any) === ("Escape" as any) ? {
    type: "dismiss"
  } : {
    type: "noop"
  };
  switch (e) {
    case "ArrowDown":
      return {
        type: "state",
        state: {
          activeIndex: (mn as any)(((n as any).activeIndex as any) + (1 as any), (s as any).length)
        }
      };
    case "ArrowUp":
      return {
        type: "state",
        state: {
          activeIndex: (mn as any)(((n as any).activeIndex as any) - (1 as any), (s as any).length)
        }
      };
    case "Enter":
    case "Tab":
      {
        const r: any = (s as any)[(Ut as any)((n as any).activeIndex, (s as any).length)];
        return (r as any) == (null as any) ? {
          type: "noop"
        } : {
          type: "select",
          entry: r
        };
      }
    case "Escape":
      return {
        type: "dismiss"
      };
    default:
      return {
        type: "noop"
      };
  }
}
const ei: any = {
    kVAEAm: "sand-1n2onr6",
    kZKoxP: "sand-16ye13r",
    kmuXW: "sand-2lah0s",
    $$css: !0
  },
  ti: any = {
    kVAEAm: "sand-10l6tqk",
    k87sOh: "sand-5mnzd7",
    kLqNvP: "sand-rr41r3",
    kt4wiu: "sand-1f889gz",
    $$css: !0
  },
  Vt: number = 320,
  Ct: number = 16,
  vs: number = 28,
  ks: number = 2,
  rt: any = (vs as any) + (ks as any),
  qt: number = 6,
  ni: any = -17,
  ot: any = {
    windowList: (t: any): any => [ei, {
      "--x-height": (((e: any): any => (typeof e as any) == ("number" as any) ? (e as any) + ("px" as any) : e ?? void 0) as any)((((qt as any) * (2 as any) as any) + ((t as any) * (rt as any) as any) as any) - (ks as any))
    }],
    windowItem: (t: any): any => [ti, {
      "--x-insetBlockStart": (((e: any): any => (typeof e as any) == ("number" as any) ? (e as any) + ("px" as any) : e ?? void 0) as any)((qt as any) + ((t as any) * (rt as any) as any))
    }],
    glyphIn16: {
      kzqmXN: "sand-1kky2od",
      kZKoxP: "sand-lup9mm",
      $$css: !0
    },
    automationGlyph: {
      kMwMTN: "sand-mbjja0",
      $$css: !0
    }
  };
function Rs(this: any, t: any): any {
  return ((((t as any).trim as any)() as any).length as any) > (0 as any) ? {
    id: "TBlG9c",
    values: {
      0: ((t as any).trim as any)()
    }
  } : {
    id: "vI1YCx"
  };
}
function _s(this: any, t: any): any {
  (_s as any).d = 371;
  const e: any = ((z as any).c as any)(15),
    {
      entry: n
    }: any = t,
    {
      icon: s
    }: any = n;
  if (((s as any).type as any) === ("agent" as any)) {
    let l: any;
    return ((e as any)[0] as any) !== ((s as any).member as any) ? (l = ((g as any).jsx as any)(so, {
      agent: (s as any).member,
      fillPx: Ct,
      isStatic: !0
    }), (e as any)[0] = (s as any).member, (e as any)[1] = l) : l = (e as any)[1], l;
  }
  if (((s as any).type as any) === ("group" as any)) {
    let l: any;
    return ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (l = ((g as any).jsx as any)(we, {
      name: "people-3",
      size: "sm"
    }), (e as any)[2] = l) : l = (e as any)[2], l;
  }
  if (((s as any).type as any) === ("everyone" as any)) {
    let l: any;
    return ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (l = ((g as any).jsx as any)("span", {
      className: (G as any)("sand-1kky2od sand-lup9mm sand-2lah0s sand-78zum5 sand-6s0dn4 sand-l56j7k sand-149ho13 sand-1tiofj7 sand-1o0liin sand-y5h43f sand-xzm5a7 sand-o5v014"),
      children: "@"
    }), (e as any)[3] = l) : l = (e as any)[3], l;
  }
  if (((s as any).type as any) === ("person" as any)) {
    let l: any;
    return ((e as any)[4] as any) !== ((s as any).person as any) ? (l = ((g as any).jsx as any)(ro, {
      person: (s as any).person,
      sizePx: Ct
    }), (e as any)[4] = (s as any).person, (e as any)[5] = l) : l = (e as any)[5], l;
  }
  if (((s as any).iconId as any) != (null as any) || ((s as any).iconUrl as any) != (null as any)) {
    let l: any;
    return ((e as any)[6] as any) !== ((n as any).label as any) || ((e as any)[7] as any) !== ((s as any).iconId as any) || ((e as any)[8] as any) !== ((s as any).iconUrl as any) ? (l = ((g as any).jsx as any)(oo, {
      iconId: (s as any).iconId,
      iconUrl: (s as any).iconUrl,
      name: (n as any).label,
      size: Ct
    }), (e as any)[6] = (n as any).label, (e as any)[7] = (s as any).iconId, (e as any)[8] = (s as any).iconUrl, (e as any)[9] = l) : l = (e as any)[9], l;
  }
  const r: any = ((s as any).fallback as any) === ("clock" as any) && (ot as any).automationGlyph;
  let o: any;
  ((e as any)[10] as any) !== (r as any) ? (o = [(ot as any).glyphIn16, r], (e as any)[10] = r, (e as any)[11] = o) : o = (e as any)[11];
  let i: any;
  return ((e as any)[12] as any) !== ((s as any).fallback as any) || ((e as any)[13] as any) !== (o as any) ? (i = ((g as any).jsx as any)(we, {
    name: (s as any).fallback,
    size: "md",
    style: o
  }), (e as any)[12] = (s as any).fallback, (e as any)[13] = o, (e as any)[14] = i) : i = (e as any)[14], i;
}
function Is(this: any, t: any): any {
  (Is as any).d = 372;
  const e: any = ((z as any).c as any)(27),
    {
      rows: n,
      query: s,
      onSelect: r,
      onListboxChange: o,
      ref: i
    }: any = t,
    {
      i18n: l,
      _: a
    }: any = (ce as any)(),
    [d, c]: any = ((O as any).useState as any)(0),
    [u, f]: any = ((O as any).useState as any)(s),
    [h, m]: any = ((O as any).useState as any)(null);
  (s as any) !== (u as any) && ((f as any)(s), (c as any)(0));
  const _: any = (Ut as any)(d, (n as any).length),
    {
      activeOptionRef: b,
      markKeyboardNavigation: y
    }: any = (ft as any)(),
    p: any = `sand-mention-listbox-${((O as any).useId as any)()}`;
  let w: any;
  ((e as any)[0] as any) !== (a as any) ? (w = (a as any)({
    id: "iaM74K"
  }), (e as any)[0] = a, (e as any)[1] = w) : w = (e as any)[1];
  const j: any = w;
  let M: any;
  ((e as any)[2] as any) !== (p as any) ? (M = (H: any): any => `${p}-option-${H}`, (e as any)[2] = p, (e as any)[3] = M) : M = (e as any)[3];
  const x: any = M;
  let v: any;
  ((e as any)[4] as any) !== (_ as any) || ((e as any)[5] as any) !== (p as any) || ((e as any)[6] as any) !== (j as any) || ((e as any)[7] as any) !== (o as any) || ((e as any)[8] as any) !== (x as any) || ((e as any)[9] as any) !== ((n as any).length as any) ? (v = (): any => {
    o?.(((n as any).length as any) === (0 as any) ? null : {
      id: p,
      label: j,
      activeOptionId: (x as any)(_)
    });
  }, (e as any)[4] = _, (e as any)[5] = p, (e as any)[6] = j, (e as any)[7] = o, (e as any)[8] = x, (e as any)[9] = (n as any).length, (e as any)[10] = v) : v = (e as any)[10], (Pe as any)(v);
  const A: any = (_ as any) * (rt as any);
  let N: any;
  ((e as any)[11] as any) !== (s as any) || ((e as any)[12] as any) !== (A as any) ? (N = {
    kind: "row",
    key: s,
    rowTopPx: A,
    heightPx: vs
  }, (e as any)[11] = s, (e as any)[12] = A, (e as any)[13] = N) : N = (e as any)[13];
  let C: any;
  ((e as any)[14] as any) !== ((n as any).length as any) || ((e as any)[15] as any) !== (h as any) || ((e as any)[16] as any) !== (N as any) ? (C = {
    scrollEl: h,
    rowCount: (n as any).length,
    rowPitchPx: rt,
    leadingOffsetPx: qt,
    initialViewportPx: Vt,
    reveal: N
  }, (e as any)[14] = (n as any).length, (e as any)[15] = h, (e as any)[16] = N, (e as any)[17] = C) : C = (e as any)[17];
  const k: any = (Tr as any)(C),
    I: any = ((Array as any).from as any)({
      length: ((k as any).end as any) - ((k as any).start as any)
    }, (H: any, B: any): any => ((k as any).start as any) + (B as any));
  ((n as any).length as any) > (0 as any) && (_ as any) < ((k as any).start as any) && ((I as any).unshift as any)(_), ((n as any).length as any) > (0 as any) && (_ as any) >= ((k as any).end as any) && ((I as any).push as any)(_);
  const E: any = (ie as any)((st as any).list, ((ot as any).windowList as any)((n as any).length));
  let L: any, S: any;
  ((e as any)[18] as any) !== (_ as any) || ((e as any)[19] as any) !== (y as any) || ((e as any)[20] as any) !== (r as any) || ((e as any)[21] as any) !== (n as any) ? (L = (): any => ({
    onKeyDown(H: any): any {
      if (((n as any).length as any) > (0 as any) && (((H as any).key as any) === ("ArrowDown" as any) || ((H as any).key as any) === ("ArrowUp" as any))) return (y as any)(), (c as any)((X: any): any => {
        const Y: any = (gn as any)({
          key: (H as any).key,
          state: {
            activeIndex: (Ut as any)(X, (n as any).length)
          },
          rows: n
        });
        return ((Y as any).type as any) === ("state" as any) ? ((Y as any).state as any).activeIndex : X;
      }), !0;
      const B: any = (gn as any)({
        key: (H as any).key,
        state: {
          activeIndex: _
        },
        rows: n
      });
      switch ((B as any).type) {
        case "state":
          return (y as any)(), (c as any)(((B as any).state as any).activeIndex), !0;
        case "select":
          return (r as any)((B as any).entry), !0;
        case "dismiss":
        case "noop":
          return !1;
      }
    }
  }), S = [_, n, r, y], (e as any)[18] = _, (e as any)[19] = y, (e as any)[20] = r, (e as any)[21] = n, (e as any)[22] = L, (e as any)[23] = S) : (L = (e as any)[22], S = (e as any)[23]), ((O as any).useImperativeHandle as any)(i, L, S);
  const D: any = $t,
    V: string = "sand-mention-menu",
    $: any = ((n as any).length as any) === (0 as any) ? ((g as any).jsxs as any)("div", {
      className: (G as any)("sand-mention-empty", "sand-9f619 sand-78zum5 sand-dt5ytf sand-195vfkc sand-1y1aw1k sand-pdmqnj sand-wib8y2 sand-1g0dm76"),
      children: [((g as any).jsx as any)("span", {
        className: "sand-tyxrsu sand-11wthnw sand-wn7fz2",
        children: ((l as any)._ as any)((Rs as any)(s))
      }), ((g as any).jsx as any)("span", {
        className: "sand-169k319 sand-y5h43f sand-wn7fz2",
        children: ((g as any).jsx as any)(qn, {
          id: "iiP6uW"
        })
      })]
    }) : ((g as any).jsx as any)(at, {
      direction: "vertical",
      maxHeight: `var(${Ft}, ${Vt}px)`,
      ref: (H: any): any => (m as any)(H?.viewportElement ?? null),
      scrollbarVisibility: "hover",
      width: "100%",
      children: ((g as any).jsx as any)("ul", {
        "aria-label": j,
        className: (G as any)("sand-mention-listbox", (E as any).className),
        id: p,
        role: "listbox",
        style: (E as any).style,
        children: ((I as any).map as any)((H: any): any => {
          const B: any = (n as any)[H];
          return (B as any) == (null as any) ? null : ((g as any).jsx as any)(ws, {
            activeRef: (H as any) === (_ as any) ? b : null,
            entry: B,
            isActive: (H as any) === (_ as any),
            optionId: (x as any)(H),
            onActivate: (): any => (r as any)(B),
            onHover: (): any => (c as any)(H),
            rowCount: (n as any).length,
            rowIndex: H
          }, (B as any).key);
        })
      })
    });
  let q: any;
  return ((e as any)[24] as any) !== (D as any) || ((e as any)[25] as any) !== ($ as any) ? (q = ((g as any).jsx as any)(D, {
    className: V,
    children: $
  }), (e as any)[24] = D, (e as any)[25] = $, (e as any)[26] = q) : q = (e as any)[26], q;
}
function ws(this: any, t: any): any {
  (ws as any).d = 373;
  const e: any = ((z as any).c as any)(29),
    {
      entry: n,
      rowIndex: s,
      rowCount: r,
      isActive: o,
      optionId: i,
      activeRef: l,
      onActivate: a,
      onHover: d
    }: any = t,
    {
      i18n: c
    }: any = (ce as any)();
  let u: any;
  ((e as any)[0] as any) !== (a as any) ? (u = (A: any): any => {
    ((A as any).button as any) === (0 as any) && (((A as any).preventDefault as any)(), (a as any)());
  }, (e as any)[0] = a, (e as any)[1] = u) : u = (e as any)[1];
  const f: any = u;
  let h: any, m: any;
  ((e as any)[2] as any) !== (s as any) ? (h = (ie as any)((st as any).item, ((ot as any).windowItem as any)(s)), m = (G as any)("sand-mention-option", (h as any).className), (e as any)[2] = s, (e as any)[3] = h, (e as any)[4] = m) : (h = (e as any)[3], m = (e as any)[4]);
  const _: any = (h as any).style,
    b: any = (s as any) + (1 as any),
    y: any = (n as any).subtitle;
  let p: any;
  ((e as any)[5] as any) !== (n as any) ? (p = ((g as any).jsx as any)(_s, {
    entry: n
  }), (e as any)[5] = n, (e as any)[6] = p) : p = (e as any)[6];
  const w: any = (n as any).label;
  let j: any;
  ((e as any)[7] as any) !== (a as any) ? (j = (A: any): any => {
    ((A as any).detail as any) === (0 as any) && (a as any)();
  }, (e as any)[7] = a, (e as any)[8] = j) : j = (e as any)[8];
  let M: any;
  ((e as any)[9] as any) !== (n as any) || ((e as any)[10] as any) !== (c as any) ? (M = ((c as any)._ as any)((Wo as any)(n)), (e as any)[9] = n, (e as any)[10] = c, (e as any)[11] = M) : M = (e as any)[11];
  let x: any;
  ((e as any)[12] as any) !== (l as any) || ((e as any)[13] as any) !== ((n as any).label as any) || ((e as any)[14] as any) !== ((n as any).subtitle as any) || ((e as any)[15] as any) !== (f as any) || ((e as any)[16] as any) !== (o as any) || ((e as any)[17] as any) !== (d as any) || ((e as any)[18] as any) !== (i as any) || ((e as any)[19] as any) !== (r as any) || ((e as any)[20] as any) !== (b as any) || ((e as any)[21] as any) !== (p as any) || ((e as any)[22] as any) !== (j as any) || ((e as any)[23] as any) !== (M as any) ? (x = ((g as any).jsx as any)(is, {
    ref: l,
    "aria-posinset": b,
    "aria-selected": o,
    "aria-setsize": r,
    className: "sand-mention-option-button",
    detail: y,
    icon: p,
    id: i,
    isActive: o,
    name: w,
    onClick: j,
    onPointerMove: d,
    onPointerDown: f,
    role: "option",
    trailing: M
  }), (e as any)[12] = l, (e as any)[13] = (n as any).label, (e as any)[14] = (n as any).subtitle, (e as any)[15] = f, (e as any)[16] = o, (e as any)[17] = d, (e as any)[18] = i, (e as any)[19] = r, (e as any)[20] = b, (e as any)[21] = p, (e as any)[22] = j, (e as any)[23] = M, (e as any)[24] = x) : x = (e as any)[24];
  let v: any;
  return ((e as any)[25] as any) !== ((h as any).style as any) || ((e as any)[26] as any) !== (x as any) || ((e as any)[27] as any) !== (m as any) ? (v = ((g as any).jsx as any)("li", {
    className: m,
    role: "presentation",
    style: _,
    children: x
  }), (e as any)[25] = (h as any).style, (e as any)[26] = x, (e as any)[27] = m, (e as any)[28] = v) : v = (e as any)[28], v;
}
function si(this: any, t: any): any {
  return `${(t as any).category}:${(t as any).id}`;
}
const Tt: any = ["mention", "hash", "emoji", "skill"];
function Cs(this: any, t: any, e: any): any {
  return (): any => {
    const n: any = (e as any)();
    return {
      ...n,
      onBeforeStart(s: any): any {
        (t as any).onReportExpected?.(), (n as any).onBeforeStart?.(s);
      },
      onBeforeUpdate(s: any): any {
        (t as any).onReportExpected?.(), (n as any).onBeforeUpdate?.(s);
      },
      onStart(s: any): any {
        try {
          (n as any).onStart?.(s);
        } finally {
          (t as any).onReportSettled?.();
        }
      },
      onUpdate(s: any): any {
        try {
          (n as any).onUpdate?.(s);
        } finally {
          (t as any).onReportSettled?.();
        }
      }
    };
  };
}
function ri(this: any, t: any): any {
  const e: any = {
      mention: {
        isOpen: !1,
        isVisible: !1,
        listbox: null,
        emptyTitle: null
      },
      hash: {
        isOpen: !1,
        isVisible: !1,
        listbox: null,
        emptyTitle: null
      },
      emoji: {
        isOpen: !1,
        isVisible: !1,
        listbox: null,
        emptyTitle: null
      },
      skill: {
        isOpen: !1,
        isVisible: !1,
        listbox: null,
        emptyTitle: null
      }
    },
    n: any = new (Set as any)();
  let s: any = 0,
    r: any = null;
  const o: any = (d: any): any => {
      const c: any = (t as any)();
      if ((c as any) == (null as any)) return;
      const u: any = ((((Tt as any).map as any)((f: any): any => (e as any)[f]) as any).find as any)((f: any): any => (f as any).isOpen && ((f as any).listbox as any) != (null as any))?.listbox ?? null;
      (u?.id as any) === (r?.id as any) && (u?.activeOptionId as any) === (r?.activeOptionId as any) || ((u as any) == (null as any) ? (((c as any).removeAttribute as any)("aria-controls"), ((c as any).removeAttribute as any)("aria-activedescendant")) : (d && ((u as any).id as any) !== (r?.id as any) && (ln as any)((u as any).label), ((c as any).setAttribute as any)("aria-controls", (u as any).id), ((c as any).setAttribute as any)("aria-activedescendant", (u as any).activeOptionId)), r = u);
    },
    i: any = (): any => {
      const d: any = ((Tt as any).some as any)((c: any): any => ((e as any)[c] as any).isOpen);
      for (const c of Tt) {
        const u: any = ((e as any)[c] as any).emptyTitle;
        (u as any) == (null as any) || d ? ((n as any).delete as any)(c) : (s as any) === (0 as any) && !((n as any).has as any)(c) && (((n as any).add as any)(c), (ln as any)(u));
      }
    },
    l: any = async (): Promise<any> => {
      await ((Promise as any).resolve as any)(), (i as any)();
    },
    a: any = (d: any): any => ({
      onOpenChange(c: any, u: any = null): any {
        ((e as any)[d] as any).isOpen = c, ((e as any)[d] as any).emptyTitle = u, (u as any) == (null as any) && ((n as any).delete as any)(d), c || (((e as any)[d] as any).listbox = null), (o as any)(c), (l as any)();
      },
      onVisibleChange(c: any): any {
        ((e as any)[d] as any).isVisible = c;
      },
      onListboxChange(c: any): any {
        ((e as any)[d] as any).listbox = c, (o as any)(!0);
      }
    });
  return {
    mention: (a as any)("mention"),
    hash: (a as any)("hash"),
    emoji: (a as any)("emoji"),
    skill: (a as any)("skill"),
    onReportExpected(): any {
      s += 1;
    },
    onReportSettled(): any {
      s -= 1, (l as any)();
    },
    isAnyMenuOpen(): any {
      return ((((Object as any).values as any)(e) as any).some as any)((d: any): any => (d as any).isOpen);
    },
    isAnyMenuVisible(): any {
      return ((((Object as any).values as any)(e) as any).some as any)((d: any): any => (d as any).isVisible);
    }
  };
}
function Qt(this: any, t: any, e: any = {}): any {
  return (Cs as any)(e, (): any => {
    let n: any = null,
      s: any = !1;
    const r: any = (t as any)({
        isDismissed: (): any => s
      }),
      o: any = (): any => {
        s = !0, ((r as any).onBlur as any)();
      },
      i: any = (): any => {
        n?.off("blur", o), n = null;
      };
    return {
      ...(r as any).handlers,
      onStart(l: any): any {
        ((r as any).shouldStart?.(l) as any) !== (!1 as any) && ((i as any)(), s = !1, n = (l as any).editor, ((n as any).on as any)("blur", o), ((r as any).handlers as any).onStart?.(l));
      },
      onUpdate(l: any): any {
        s || ((r as any).handlers as any).onUpdate?.(l);
      },
      onKeyDown(l: any): any {
        return s ? !1 : ((r as any).handlers as any).onKeyDown?.(l) ?? !1;
      },
      onExit(l: any): any {
        try {
          ((r as any).handlers as any).onExit?.(l);
        } finally {
          (i as any)();
        }
      }
    };
  });
}
function Yt(this: any, t: any, ...e: any): any {
  const n: any = [];
  for (const s of e) {
    const r: any = (t as any)[s];
    if ((r as any) === (void 0 as any)) return null;
    ((n as any).push as any)(r);
  }
  return n;
}
const yn: any = `,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\!%'"~=<>:;`,
  oi: number = 120,
  Jt: number = 50,
  it: number = 200,
  bn: any = new (Map as any)();
function ii(this: any, t: any): any {
  const e: any = ((bn as any).get as any)(t);
  if ((e as any) != (null as any)) return e;
  const n: any = (Bt as any)(t),
    s: any = `[^${n}${yn}\\s]`,
    r: any = `(?:\\.[ |$]| |[${yn}/]|)`,
    o: any = {
      multiWord: new (RegExp as any)(`(^|\\s|\\()([${n}]((?:${s}${r}){0,${oi}}))$`),
      singleWord: new (RegExp as any)(`(^|\\s|\\()([${n}]((?:${s}){0,${Jt}}))$`)
    };
  return ((bn as any).set as any)(t, o), o;
}
function li(this: any, t: any, e: any): any {
  const n: any = (ii as any)(e),
    s: any = (((n as any).multiWord as any).exec as any)(t) ?? (((n as any).singleWord as any).exec as any)(t);
  if ((s as any) === (null as any)) return null;
  const r: any = (Yt as any)(s, 1, 2, 3);
  if ((r as any) === (null as any)) return null;
  const [o, i, l]: any = r;
  return {
    leadOffset: ((s as any).index as any) + ((o as any).length as any),
    matchingString: l,
    replaceableString: i
  };
}
function Zt(this: any, t: any): any {
  const {
      char: e,
      $position: n
    }: any = t,
    s: any = (n as any).pos,
    r: any = (n as any).nodeBefore?.isText ? ((n as any).nodeBefore as any).text : void 0;
  if (!r) return null;
  const o: any = ((r as any).length as any) > (it as any) ? ((r as any).slice as any)(-it) : r,
    i: any = (s as any) - ((o as any).length as any),
    l: any = (n as any).nodeAfter?.isText ? ((n as any).nodeAfter as any).text ?? "" : "",
    a: any = ((l as any).search as any)(/\s/),
    d: any = (a as any) === (-1 as any) ? l : ((l as any).slice as any)(0, a),
    c: any = (li as any)((o as any) + (d as any), e);
  if (!c || (((c as any).matchingString as any).length as any) > (Jt as any)) return null;
  const u: any = (i as any) + ((c as any).leadOffset as any),
    f: any = (u as any) + (((c as any).replaceableString as any).length as any);
  return (u as any) < (s as any) && (f as any) >= (s as any) ? {
    range: {
      from: u,
      to: f
    },
    query: (c as any).matchingString,
    text: (c as any).replaceableString
  } : null;
}
const ai: string = ":",
  Ts: string = "a-z0-9_+-",
  ci: string = "[^\\p{L}\\p{N}_:/]",
  ui: number = 1,
  Ns: any = Jt,
  di: any = new (RegExp as any)(`(^|${ci})(${(Bt as any)(ai)}([${Ts}]{0,${Ns}}))$`, "u");
function fi(this: any, t: any): any {
  const {
      $position: e
    }: any = t,
    n: any = (e as any).pos,
    s: any = (e as any).nodeBefore?.isText ? ((e as any).nodeBefore as any).text : void 0;
  if (!s) return null;
  const r: any = ((s as any).length as any) > (it as any) ? ((s as any).slice as any)(-it) : s,
    o: any = (n as any) - ((r as any).length as any),
    i: any = (e as any).nodeAfter?.isText ? ((e as any).nodeAfter as any).text ?? "" : "",
    l: any = ((i as any).search as any)(new (RegExp as any)(`[^${Ts}]`)),
    a: any = (l as any) === (-1 as any) ? i : ((i as any).slice as any)(0, l),
    d: any = ((di as any).exec as any)((r as any) + (a as any));
  if ((d as any) === (null as any)) return null;
  const c: any = (Yt as any)(d, 1, 2, 3);
  if ((c as any) === (null as any)) return null;
  const [u, f, h]: any = c;
  if (((h as any).length as any) < (ui as any) || ((h as any).length as any) > (Ns as any)) return null;
  const m: any = ((o as any) + ((d as any).index as any) as any) + ((u as any).length as any),
    _: any = (m as any) + ((f as any).length as any);
  return (m as any) < (n as any) && (_ as any) >= (n as any) ? {
    range: {
      from: m,
      to: _
    },
    query: h,
    text: f
  } : null;
}
function Ms(this: any, t: any, e: any): any {
  return ((e as any).state as any) == (null as any) ? !0 : (((t as any).getState as any)((e as any).state)?.active as any) !== (!1 as any);
}
const As: any = new (W as any)("sand-document-token");
function pi(this: any): any {
  return new (ue as any)({
    key: As,
    state: {
      init: (): any => (Symbol as any)("document"),
      apply: (t: any, e: any): any => e
    }
  });
}
function xn(this: any, t: any): any {
  return (t as any) == (null as any) ? void 0 : ((As as any).getState as any)((t as any).state);
}
function ht(this: any, t: any): any {
  let e: any = null,
    n: any = null,
    s: any = null,
    r: any = null,
    o: any = null;
  const i: any = (): any => {
      e = null;
    },
    l: any = (d: any, c: any): any => {
      e = {
        anchor: d,
        cause: c,
        document: (xn as any)(r)
      };
    },
    a: any = ({
      editor: d
    }: any): any => {
      const c: any = ((d as any).state as any).doc,
        u: any = (o as any) != (null as any) && (((c as any).content as any).size as any) < (o as any);
      if (o = ((c as any).content as any).size, (e as any) != (null as any)) {
        if (((e as any).anchor as any) >= (((c as any).content as any).size as any) || (((c as any).textBetween as any)((e as any).anchor, ((e as any).anchor as any) + (1 as any)) as any) !== (t as any)) {
          (i as any)();
          return;
        }
        u && ((e as any).cause as any) === ("no-results" as any) && (i as any)();
      }
    };
  return {
    trackActive(d: any, c: any): any {
      n = c, ((d as any).state as any) != (null as any) && (o = ((((d as any).state as any).doc as any).content as any).size), (r as any) !== (d as any) && (r?.off("update", a), ((d as any).on as any)("update", a), r = d);
    },
    trackResults(d: any, c: any): any {
      return (n as any) == (null as any) ? !1 : (e?.anchor as any) === (n as any) ? !0 : c || !((d as any).includes as any)(" ") ? !1 : ((l as any)(n, "no-results"), s = "no-results", !0);
    },
    markEscapeDismissal(): any {
      s = "escape-key";
    },
    handleExit(): any {
      (s as any) === ("escape-key" as any) ? (n as any) != (null as any) && (l as any)(n, "escape-key") : (s as any) == (null as any) && (n as any) != (null as any) && (e?.anchor as any) === (n as any) && (i as any)(), s = null, n = null;
    },
    allowAt(d: any, c: any): any {
      return (e as any) == (null as any) ? !0 : ((e as any).anchor as any) !== (d as any) || ((e as any).document as any) !== ((xn as any)(r) as any) || ((e as any).cause as any) === ("no-results" as any) && (o as any) != (null as any) && ((((c as any).doc as any).content as any).size as any) < (o as any) ? ((i as any)(), !0) : !1;
    }
  };
}
const nt: string = "__everyone__";
function Sn(this: any, t: any, e: any): any {
  return {
    type: "tool",
    iconId: t?.iconId,
    iconUrl: t?.iconUrl,
    fallback: e
  };
}
function hi(this: any, t: any): any {
  switch ((t as any).status) {
    case "connected":
      return ((F as any)._ as any)({
        id: "hYTBlk"
      });
    case "needsAuth":
      return ((F as any)._ as any)({
        id: "8nZIsU"
      });
    case "needsGrant":
      return ((F as any)._ as any)({
        id: "KVyQVW"
      });
    case "error":
      return ((F as any)._ as any)({
        id: "cs+QV+"
      });
    case "initializing":
      return ((F as any)._ as any)({
        id: "PHjHa8"
      });
    case "disconnected":
      return ((F as any)._ as any)({
        id: "ALFe2s"
      });
    case "disabledByTeamAdminPolicy":
      return ((F as any)._ as any)({
        id: "Og2SKn"
      });
    default:
      return ((t as any).accountKey as any) === ("default" as any) ? (t as any).url ?? "" : (t as any).accountKey;
  }
}
function mi(this: any, t: any): any {
  const e: any = [],
    n: any = ((t as any).getMembers as any)(),
    s: any = (Nr as any)((t as any).getPeople?.() ?? []);
  if (((t as any).allowEveryone?.() ?? !0) && (((n as any).length as any) + ((s as any).length as any) as any) >= (2 as any)) {
    const r: any = (vo as any)();
    ((e as any).push as any)({
      key: `assistants:${nt}`,
      id: nt,
      category: "assistants",
      label: (rs as any)({
        isEveryone: !0,
        label: r
      }),
      keywords: ["all"],
      ...(((s as any).length as any) > (0 as any) ? {
        seat: "room"
      } : {}),
      icon: {
        type: "everyone"
      },
      insert: {
        type: "mention",
        id: nt,
        label: r
      }
    });
  }
  for (const r of n) {
    const o: any = (Mr as any)(r);
    ((e as any).push as any)({
      key: `assistants:${(r as any).id}`,
      id: (r as any).id,
      category: "assistants",
      label: o,
      subtitle: (r as any).isGroup ? ((F as any)._ as any)({
        id: "hsMz1s",
        values: {
          0: ((r as any).memberIds as any).length
        }
      }) : void 0,
      icon: (r as any).isGroup ? {
        type: "group"
      } : {
        type: "agent",
        member: r
      },
      isGroup: (r as any).isGroup,
      insert: {
        type: "mention",
        id: (r as any).id,
        label: (r as any).name
      }
    });
  }
  for (const {
    id: r,
    name: o,
    person: i
  } of s) ((e as any).push as any)({
    key: `assistants:${r}`,
    id: r,
    category: "assistants",
    label: o,
    seat: "person",
    icon: {
      type: "person",
      person: i
    },
    insert: {
      type: "mention",
      id: r,
      label: o
    }
  });
  for (const r of (t as any).getSkills?.() ?? []) {
    if (((r as any).trigger as any) == (null as any)) continue;
    const o: any = (t as any).resolveSkillIcon?.(r),
      i: any = (ct as any)({
        id: (r as any).id,
        label: (r as any).name
      });
    ((e as any).push as any)({
      key: `automations:${(r as any).id}`,
      id: (r as any).id,
      category: "automations",
      label: i,
      subtitle: (Qn as any)(r),
      icon: (Sn as any)(o, "clock"),
      insert: {
        type: "skill",
        id: (r as any).id,
        label: (r as any).name,
        iconId: o?.iconId,
        iconUrl: o?.iconUrl
      }
    });
  }
  for (const r of (t as any).getMcpReferences?.() ?? []) {
    const o: any = (an as any)({
        kind: "mcp-server",
        serverId: (r as any).serverIdentifier
      }),
      i: any = (Ar as any)((r as any).name, (r as any).accountKey);
    ((e as any).push as any)({
      key: `tools:${o}`,
      id: o,
      category: "tools",
      label: i,
      subtitle: (hi as any)(r),
      icon: (Sn as any)((r as any).icon, "plug"),
      insert: {
        type: "skill",
        id: (an as any)({
          kind: "mcp-server",
          serverId: (r as any).serverId
        }),
        label: i,
        iconId: (r as any).icon?.iconId,
        iconUrl: (r as any).icon?.iconUrl
      }
    });
  }
  return e;
}
function gi(this: any, t: any, e: any, n: any): any {
  const s: any = ((n as any).type as any) === ("mention" as any) ? {
    type: "mention",
    attrs: {
      id: (n as any).id,
      label: (n as any).label
    }
  } : {
    type: Wt,
    attrs: {
      id: (n as any).id,
      label: (n as any).label,
      iconId: (n as any).iconId ?? null,
      iconUrl: (n as any).iconUrl ?? null
    }
  };
  ((((((((t as any).chain as any)() as any).focus as any)() as any).insertContentAt as any)(e, [s, {
    type: "text",
    text: " "
  }]) as any).run as any)();
  const r: any = ((window as any).getSelection as any)();
  (r as any) != (null as any) && ((r as any).rangeCount as any) > (0 as any) && ((r as any).collapseToEnd as any)();
}
const En: any = new (W as any)("sand-mention-suggestion");
function yi(this: any, t: any): any {
  const e: any = (ht as any)("@");
  return {
    char: "@",
    pluginKey: En,
    allowSpaces: !0,
    allowedPrefixes: null,
    findSuggestionMatch: Zt,
    allow: ({
      state: n,
      range: s
    }: any): any => ((t as any).isEnabled?.() as any) !== (!1 as any) && ((e as any).allowAt as any)((s as any).from, n),
    items: (): any => (mi as any)(t),
    render: (Qt as any)(({
      isDismissed: n
    }: any): any => {
      let s: any = null,
        r: any = null,
        o: any = !1,
        i: any = [];
      const l: any = (f: any): any => ({
          rows: (((t as any).rankRows ?? Zo) as any)((f as any).items, (f as any).query, i),
          query: (f as any).query,
          onSelect: (h: any): any => {
            (t as any).recordRecent?.({
              category: (h as any).category,
              id: (h as any).id
            }), (gi as any)((f as any).editor, (f as any).range, (h as any).insert);
          },
          onListboxChange: (t as any).onListboxChange
        }),
        a: any = (f: any, h: any = null): any => {
          o = f, (t as any).onOpenChange?.(f, h);
        },
        d: any = (): any => {
          r?.setVisible(!1), (t as any).onVisibleChange?.(!1), (a as any)(!1);
        },
        c: any = (): any => {
          ((e as any).handleExit as any)(), r?.destroy(), r = null, s?.destroy(), s = null, (t as any).onOpenChange?.(!1), (t as any).onVisibleChange?.(!1);
        },
        u: any = (f: any, h: any = (l as any)(f)): any => {
          s?.updateProps(h);
          const m: any = (((h as any).rows as any).length as any) > (0 as any);
          if (((e as any).trackResults as any)((f as any).query, m) || (n as any)()) {
            (d as any)();
            return;
          }
          const _: any = (((((f as any).query as any).trim as any)() as any).length as any) > (0 as any),
            b: any = m || _;
          r?.setVisible(b), (t as any).onVisibleChange?.(b), (a as any)(m, b ? ((F as any)._ as any)((Rs as any)((f as any).query)) : null), b && r?.reposition((f as any).clientRect);
        };
      return {
        onBlur: d,
        shouldStart: (f: any): any => (Ms as any)(En, (f as any).editor),
        handlers: {
          onStart(f: any): any {
            (s as any) != (null as any) && (c as any)(), ((e as any).trackActive as any)((f as any).editor, ((f as any).range as any).from), i = ((((t as any).getRecents?.() ?? []) as any).map as any)(si);
            const h: any = (l as any)(f);
            s = new (Oe as any)(Is, {
              editor: (f as any).editor,
              props: h
            }), r = (ut as any)((s as any).element, {
              caretGapPx: dt,
              maxHeightPx: Vt,
              crossAxisOffsetPx: ni
            }), (u as any)(f, h);
          },
          onUpdate(f: any): any {
            (s as any) != (null as any) && (((e as any).trackActive as any)((f as any).editor, ((f as any).range as any).from), (u as any)(f));
          },
          onKeyDown(f: any): any {
            return (((f as any).event as any).key as any) === ("Escape" as any) ? ((((f as any).event as any).stopPropagation as any)(), o && (s?.ref?.onKeyDown((f as any).event) ?? !1) ? !0 : (((e as any).markEscapeDismissal as any)(), !1)) : o ? s?.ref?.onKeyDown((f as any).event) ?? !1 : !1;
          },
          onExit(): any {
            (c as any)();
          }
        }
      };
    }, t)
  };
}
function Ls(this: any, t: any): any {
  return (typeof (t as any).label as any) == ("string" as any) && (((t as any).label as any).length as any) > (0 as any) ? (t as any).label : (typeof (t as any).id as any) == ("string" as any) ? (t as any).id : "";
}
function bi(this: any, t: any): any {
  const e: any = (Ls as any)(t),
    n: any = (typeof (t as any).id as any) != ("string" as any) || ((t as any).id as any) === (nt as any);
  return (rs as any)({
    isEveryone: n && (io as any)(e, (F as any).locale),
    label: e
  });
}
function Ps(this: any, t: any): any {
  (Ps as any).d = 690;
  const e: any = ((z as any).c as any)(10),
    {
      node: n,
      editor: s,
      selected: r
    }: any = t;
  let o: any;
  ((e as any)[0] as any) !== (s as any) || ((e as any)[1] as any) !== (r as any) ? (o = {
    editor: s,
    selected: r
  }, (e as any)[0] = s, (e as any)[1] = r, (e as any)[2] = o) : o = (e as any)[2];
  const i: any = (pt as any)(o);
  let l: any;
  ((e as any)[3] as any) !== ((n as any).attrs as any) ? (l = (Ls as any)((n as any).attrs), (e as any)[3] = (n as any).attrs, (e as any)[4] = l) : l = (e as any)[4];
  const a: any = l;
  let d: any;
  ((e as any)[5] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = {
    verticalAlign: "top"
  }, (e as any)[5] = d) : d = (e as any)[5];
  const c: any = (typeof ((n as any).attrs as any).id as any) == ("string" as any) ? ((n as any).attrs as any).id : void 0;
  let u: any;
  return ((e as any)[6] as any) !== (i as any) || ((e as any)[7] as any) !== (a as any) || ((e as any)[8] as any) !== (c as any) ? (u = ((g as any).jsx as any)(oe, {
    as: "span",
    "data-type": "mention",
    style: d,
    children: ((g as any).jsx as any)(lo, {
      id: c,
      isInteractive: !1,
      isSelected: i,
      label: a
    })
  }), (e as any)[6] = i, (e as any)[7] = a, (e as any)[8] = c, (e as any)[9] = u) : u = (e as any)[9], u;
}
const xi: any = /\n([-+*])\s$/,
  Si: any = /\n(\d+)\.\s$/;
function vn(this: any, t: any, e: any, n: any): any {
  return new (pr as any)({
    find: t,
    handler: ({
      range: s,
      match: r,
      chain: o
    }: any): any => {
      (((((((((o as any)() as any).deleteRange as any)(s) as any).splitBlock as any)() as any).wrapInList as any)(e, (n as any)(r)) as any).run as any)();
    }
  });
}
const Ei: any = ((de as any).create as any)({
  name: "sandListAfterLineBreak",
  addInputRules(): any {
    return [(vn as any)(xi, "bulletList", (): any => {}), (vn as any)(Si, "orderedList", (t: any): any => ({
      start: (Number as any)((t as any)[1])
    }))];
  }
});
function Os(this: any, t: any): any {
  return (((t as any).schema as any).nodes as any).listItem;
}
function kn(this: any, t: any): any {
  const e: any = (Os as any)(t),
    {
      $from: n
    }: any = (t as any).selection;
  for (let s: any = (n as any).depth; (s as any) > (0 as any); s--) if (((((n as any).node as any)(s) as any).type as any) === (e as any)) return !0;
  return !1;
}
function en(this: any, t: any): any {
  return (e: any, n: any): any => {
    const s: any = (Os as any)(e);
    return (s as any) != (null as any) && ((t as any)(s) as any)(e, n);
  };
}
const vi: any = (en as any)((t: any): any => (e: any, n: any): any => ((mr as any)(t) as any)(e, n) || ((Gn as any)(t) as any)(e, n)),
  ki: any = (en as any)(hr),
  Ri: any = (en as any)(Gn);
function Ds(this: any, t: any): any {
  return (typeof (t as any).id as any) != ("string" as any) || (((t as any).id as any).length as any) === (0 as any) || (typeof (t as any).label as any) != ("string" as any) ? null : {
    id: (t as any).id,
    label: (t as any).label,
    ...((typeof (t as any).iconId as any) == ("string" as any) ? {
      iconId: (t as any).iconId
    } : {}),
    ...((typeof (t as any).iconUrl as any) == ("string" as any) ? {
      iconUrl: (t as any).iconUrl
    } : {})
  };
}
function _i(this: any, t: any): any {
  const e: any = (Ds as any)(t);
  return (e as any) == (null as any) ? "" : (ct as any)(e);
}
function js(this: any, t: any): any {
  (js as any).d = 389;
  const e: any = ((z as any).c as any)(35),
    {
      node: n,
      editor: s,
      selected: r
    }: any = t,
    {
      i18n: o
    }: any = (ce as any)();
  let i: any;
  ((e as any)[0] as any) !== (s as any) || ((e as any)[1] as any) !== (r as any) ? (i = {
    editor: s,
    selected: r
  }, (e as any)[0] = s, (e as any)[1] = r, (e as any)[2] = i) : i = (e as any)[2];
  const l: any = (pt as any)(i);
  let a: any, d: any, c: any, u: any, f: any, h: any, m: any, _: any, b: any, y: any, p: any, w: any;
  if (((e as any)[3] as any) !== (o as any) || ((e as any)[4] as any) !== ((n as any).attrs as any)) {
    w = ((Symbol as any).for as any)("react.early_return_sentinel");
    e: {
      const v: any = (Ds as any)((n as any).attrs);
      if ((v as any) == (null as any)) {
        w = null;
        break e;
      }
      u = (ct as any)(v, o), c = oe, b = "span", y = "skill-reference", ((e as any)[17] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (p = {
        verticalAlign: "top"
      }, (e as any)[17] = p) : p = (e as any)[17], d = Xn, a = ao, f = ((v as any).iconId as any) == (null as any) ? {} : {
        iconId: (v as any).iconId
      }, h = ((v as any).iconUrl as any) == (null as any) ? {} : {
        iconUrl: (v as any).iconUrl
      }, m = u, _ = (Lr as any)((v as any).id);
    }
    (e as any)[3] = o, (e as any)[4] = (n as any).attrs, (e as any)[5] = a, (e as any)[6] = d, (e as any)[7] = c, (e as any)[8] = u, (e as any)[9] = f, (e as any)[10] = h, (e as any)[11] = m, (e as any)[12] = _, (e as any)[13] = b, (e as any)[14] = y, (e as any)[15] = p, (e as any)[16] = w;
  } else a = (e as any)[5], d = (e as any)[6], c = (e as any)[7], u = (e as any)[8], f = (e as any)[9], h = (e as any)[10], m = (e as any)[11], _ = (e as any)[12], b = (e as any)[13], y = (e as any)[14], p = (e as any)[15], w = (e as any)[16];
  if ((w as any) !== (((Symbol as any).for as any)("react.early_return_sentinel") as any)) return w;
  let j: any;
  ((e as any)[18] as any) !== (a as any) || ((e as any)[19] as any) !== (f as any) || ((e as any)[20] as any) !== (h as any) || ((e as any)[21] as any) !== (m as any) || ((e as any)[22] as any) !== (_ as any) ? (j = ((g as any).jsx as any)(a, {
    ...f,
    ...h,
    label: m,
    reference: _
  }), (e as any)[18] = a, (e as any)[19] = f, (e as any)[20] = h, (e as any)[21] = m, (e as any)[22] = _, (e as any)[23] = j) : j = (e as any)[23];
  let M: any;
  ((e as any)[24] as any) !== (d as any) || ((e as any)[25] as any) !== (u as any) || ((e as any)[26] as any) !== (l as any) || ((e as any)[27] as any) !== (j as any) ? (M = ((g as any).jsx as any)(d, {
    icon: j,
    isSelected: l,
    label: u,
    title: u
  }), (e as any)[24] = d, (e as any)[25] = u, (e as any)[26] = l, (e as any)[27] = j, (e as any)[28] = M) : M = (e as any)[28];
  let x: any;
  return ((e as any)[29] as any) !== (c as any) || ((e as any)[30] as any) !== (M as any) || ((e as any)[31] as any) !== (b as any) || ((e as any)[32] as any) !== (y as any) || ((e as any)[33] as any) !== (p as any) ? (x = ((g as any).jsx as any)(c, {
    as: b,
    "data-type": y,
    style: p,
    children: M
  }), (e as any)[29] = c, (e as any)[30] = M, (e as any)[31] = b, (e as any)[32] = y, (e as any)[33] = p, (e as any)[34] = x) : x = (e as any)[34], x;
}
const Ii: any = (ho as any) + ((2 as any) * ((Ir as any)["1.5"] as any) as any);
function wi(this: any, t: any, e: any, n: any, s: any): any {
  const r: any = (n as any) - (1 as any),
    o: any = ((Math as any).min as any)(((Math as any).max as any)(t, 0), r),
    i: any = (Or as any)(e, s);
  if ((i as any) != (null as any)) return ((Math as any).min as any)(r, ((Math as any).max as any)(0, (o as any) + (i as any)));
  switch (e) {
    case "ArrowDown":
      return ((Math as any).min as any)(r, (o as any) + (un as any));
    case "ArrowUp":
      return ((Math as any).max as any)(0, (o as any) - (un as any));
    default:
      return null;
  }
}
function $s(this: any, t: any): any {
  ($s as any).d = 370;
  const e: any = ((z as any).c as any)(34),
    {
      entries: n,
      query: s,
      onSelect: r,
      onListboxChange: o,
      ref: i
    }: any = t,
    {
      _: l
    }: any = (ce as any)(),
    [a, d]: any = ((O as any).useState as any)(0),
    {
      activeOptionRef: c,
      markKeyboardNavigation: u
    }: any = (ft as any)(),
    f: any = `sand-emoji-listbox-${((O as any).useId as any)()}`;
  let h: any;
  ((e as any)[0] as any) !== (l as any) ? (h = (l as any)({
    id: "tKlWWY"
  }), (e as any)[0] = l, (e as any)[1] = h) : h = (e as any)[1];
  const m: any = h,
    [_, b]: any = ((O as any).useState as any)(s);
  (s as any) !== (_ as any) && ((b as any)(s), (d as any)(0));
  const y: any = ((Math as any).min as any)(a, ((Math as any).max as any)(0, ((n as any).length as any) - (1 as any)));
  let p: any;
  ((e as any)[2] as any) !== (y as any) || ((e as any)[3] as any) !== ((n as any).length as any) || ((e as any)[4] as any) !== (f as any) || ((e as any)[5] as any) !== (m as any) || ((e as any)[6] as any) !== (o as any) ? (p = (): any => {
    o?.(((n as any).length as any) === (0 as any) ? null : {
      id: f,
      label: m,
      activeOptionId: (co as any)(f, y)
    });
  }, (e as any)[2] = y, (e as any)[3] = (n as any).length, (e as any)[4] = f, (e as any)[5] = m, (e as any)[6] = o, (e as any)[7] = p) : p = (e as any)[7], (Pe as any)(p);
  let w: any, j: any;
  if (((e as any)[8] as any) !== (y as any) || ((e as any)[9] as any) !== (n as any) || ((e as any)[10] as any) !== (u as any) || ((e as any)[11] as any) !== (r as any) ? (w = (): any => ({
    onKeyDown(L: any): any {
      if (((n as any).length as any) === (0 as any)) return !1;
      const S: any = (wi as any)(y, (L as any).key, (n as any).length, (Pr as any)());
      if ((S as any) != (null as any)) return (u as any)(), (d as any)(S), !0;
      if (((L as any).key as any) === ("Enter" as any) || ((L as any).key as any) === ("Tab" as any)) {
        const D: any = (n as any)[y] ?? (n as any)[0];
        return (D as any) != (null as any) && (r as any)(D), !0;
      }
      return !1;
    }
  }), j = [y, n, r, u], (e as any)[8] = y, (e as any)[9] = n, (e as any)[10] = u, (e as any)[11] = r, (e as any)[12] = w, (e as any)[13] = j) : (w = (e as any)[12], j = (e as any)[13]), ((O as any).useImperativeHandle as any)(i, w, j), ((n as any).length as any) === (0 as any)) return null;
  let M: any, x: any, v: any;
  ((e as any)[14] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (M = (G as any)("sand-emoji-menu", "sand-9f619 sand-uve7l6 sand-1rgtt3y sand-1ua6jya sand-mkeg23 sand-1y0btm7 sand-qz0629 sand-1pkpdue sand-14vywav sand-b3r6kr"), x = {
    width: uo
  }, v = {
    className: "sand-196pc8s sand-22095l"
  }, (e as any)[14] = M, (e as any)[15] = x, (e as any)[16] = v) : (M = (e as any)[14], x = (e as any)[15], v = (e as any)[16]);
  const A: any = (v as any).className;
  let N: any;
  ((e as any)[17] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (N = (G as any)("sand-emoji-search-mirror", "sand-1iyjqo2 sand-euugli sand-1wd3ewq sand-11wthnw sand-uxw1ft sand-b3r6kr sand-lyipyv"), (e as any)[17] = N) : N = (e as any)[17];
  let C: any;
  ((e as any)[18] as any) !== (s as any) || ((e as any)[19] as any) !== (N as any) ? (C = ((g as any).jsx as any)("div", {
    className: A,
    children: ((g as any).jsx as any)(fo, {
      children: ((g as any).jsx as any)("span", {
        className: N,
        children: s
      })
    })
  }), (e as any)[18] = s, (e as any)[19] = N, (e as any)[20] = C) : C = (e as any)[20];
  let k: any;
  ((e as any)[21] as any) !== (c as any) || ((e as any)[22] as any) !== (y as any) || ((e as any)[23] as any) !== (f as any) || ((e as any)[24] as any) !== (m as any) ? (k = {
    listboxId: f,
    label: m,
    activeIndex: y,
    activeCellRef: c,
    onActiveIndexChange: d
  }, (e as any)[21] = c, (e as any)[22] = y, (e as any)[23] = f, (e as any)[24] = m, (e as any)[25] = k) : k = (e as any)[25];
  let I: any;
  ((e as any)[26] as any) !== (n as any) || ((e as any)[27] as any) !== (r as any) || ((e as any)[28] as any) !== (k as any) ? (I = ((g as any).jsx as any)(at, {
    direction: "vertical",
    maxHeight: `calc(var(${Ft}, ${os}px) - ${Ii}px)`,
    scrollbarVisibility: "hover",
    width: "100%",
    children: ((g as any).jsx as any)(po, {
      entries: n,
      markedNatives: Ci,
      onPick: r,
      selection: k
    })
  }), (e as any)[26] = n, (e as any)[27] = r, (e as any)[28] = k, (e as any)[29] = I) : I = (e as any)[29];
  let E: any;
  return ((e as any)[30] as any) !== (C as any) || ((e as any)[31] as any) !== (I as any) || ((e as any)[32] as any) !== (M as any) ? (E = ((g as any).jsxs as any)("div", {
    className: M,
    style: x,
    children: [C, I]
  }), (e as any)[30] = C, (e as any)[31] = I, (e as any)[32] = M, (e as any)[33] = E) : E = (e as any)[33], E;
}
const Ci: any = new (Set as any)();
let Rn: any = !1;
function Hs(this: any, t: any): any {
  Rn || (Rn = !0, (Dr as any)(t, {
    tags: {
      sand_area: "composer-emoji-index"
    }
  }));
}
function Nt(this: any, t: any, e: any): any {
  const n: any = (Ie as any)();
  return (n as any) == (null as any) ? [] : [...(Yn as any)(n, t, jr, e)];
}
function Us(this: any, t: any, e: any, n: any): any {
  ((((((((t as any).chain as any)() as any).focus as any)() as any).insertContentAt as any)(e, `${n} `) as any).run as any)();
  const s: any = ((window as any).getSelection as any)();
  (s as any) != (null as any) && ((s as any).rangeCount as any) > (0 as any) && ((s as any).collapseToEnd as any)();
}
const lt: any = new (W as any)("sand-emoji-suggestion");
function Ti(this: any, t: any): any {
  const e: any = (ht as any)(":");
  return {
    char: ":",
    pluginKey: lt,
    allowSpaces: !1,
    allowedPrefixes: null,
    findSuggestionMatch: fi,
    allow: ({
      state: n,
      range: s
    }: any): any => ((e as any).allowAt as any)((s as any).from, n),
    items: ({
      query: n
    }: any): any => (Nt as any)(n, (t as any).getRecents?.() ?? []),
    render: (Qt as any)(({
      isDismissed: n
    }: any): any => {
      let s: any = null,
        r: any = null,
        o: any = 0,
        i: any = null,
        l: any = !1,
        a: any = [];
      const d: any = (): any => {
          r?.setVisible(!1), (t as any).onOpenChange?.(!1);
        },
        c: any = (): any => {
          i = null, ((e as any).handleExit as any)(), r?.destroy(), r = null, s?.destroy(), s = null, (t as any).onOpenChange?.(!1);
        },
        u: any = (h: any, m: any): any => ({
          entries: m,
          query: (h as any).query,
          onSelect: (_: any): any => {
            (t as any).recordRecent?.((_ as any).id), (Us as any)((h as any).editor, (h as any).range, (_ as any).native);
          },
          onListboxChange: (t as any).onListboxChange
        }),
        f: any = (h: any): any => {
          i = h;
          const m: any = (Nt as any)((h as any).query, a);
          if (o = (m as any).length, s?.updateProps((u as any)(h, m)), (n as any)()) {
            (d as any)();
            return;
          }
          const _: any = (o as any) > (0 as any);
          r?.setVisible(_), (t as any).onOpenChange?.(_), _ && r?.reposition((h as any).clientRect), (o as any) === (0 as any) && ((Ie as any)() as any) == (null as any) && !l && (l = !0, (t as any).onReportExpected?.(), (((((((Jn as any)() as any).then as any)((): any => {
            l = !1, (i as any) != (null as any) && (s as any) != (null as any) && ((i as any).editor as any).isFocused && (f as any)(i);
          }) as any).catch as any)((b: any): any => {
            l = !1, (Hs as any)(b);
          }) as any).finally as any)((): any => (t as any).onReportSettled?.()));
        };
      return {
        onBlur: d,
        shouldStart: (h: any): any => (Ms as any)(lt, (h as any).editor),
        handlers: {
          onStart(h: any): any {
            (s as any) != (null as any) && (c as any)(), ((e as any).trackActive as any)((h as any).editor, ((h as any).range as any).from), a = (t as any).getRecents?.() ?? [], s = new (Oe as any)($s, {
              editor: (h as any).editor,
              props: (u as any)(h, (Nt as any)((h as any).query, a))
            }), r = (ut as any)((s as any).element, {
              caretGapPx: dt,
              maxHeightPx: os
            }), (f as any)(h);
          },
          onUpdate(h: any): any {
            (s as any) != (null as any) && (((e as any).trackActive as any)((h as any).editor, ((h as any).range as any).from), (f as any)(h));
          },
          onKeyDown(h: any): any {
            return (o as any) === (0 as any) ? !1 : (((h as any).event as any).key as any) === ("Escape" as any) ? ((((h as any).event as any).stopPropagation as any)(), ((e as any).markEscapeDismissal as any)(), !1) : s?.ref?.onKeyDown((h as any).event) ?? !1;
          },
          onExit(): any {
            (c as any)();
          }
        }
      };
    }, t)
  };
}
const Ni: any = /(^|[^\p{L}\p{N}_:/])(:([a-z0-9_+-]{1,50}))$/u,
  _n: number = 60;
let In: any = null,
  Mt: any = null;
function Mi(this: any, t: any): any {
  if ((t as any) === (In as any) && (Mt as any) != (null as any)) return Mt;
  const e: any = new (Map as any)();
  for (const n of (t as any).categories) for (const s of (n as any).emojis) for (const r of (s as any).shortcodes) ((e as any).has as any)(r) || ((e as any).set as any)(r, s);
  return In = t, Mt = e, e;
}
function tn(this: any, t: any): any {
  const e: any = ((t as any).length as any) > (_n as any) ? ((t as any).slice as any)(-_n) : t,
    n: any = ((Ni as any).exec as any)(e);
  if ((n as any) == (null as any)) return null;
  const s: any = (Yt as any)(n, 2, 3);
  if ((s as any) == (null as any)) return null;
  const [r, o]: any = s;
  return {
    replacedTextLength: (r as any).length,
    shortcode: o
  };
}
function Vs(this: any, t: any, e: any): any {
  const n: any = (tn as any)(t);
  if ((n as any) == (null as any)) return null;
  const s: any = (((Mi as any)(e) as any).get as any)((n as any).shortcode);
  return (s as any) == (null as any) ? null : {
    replacedTextLength: (n as any).replacedTextLength,
    entry: s
  };
}
const Q: any = new (W as any)("sand-emoji-shortcode-completion");
function qs(this: any, t: any): any {
  return ((Q as any).getState as any)(t) ?? null;
}
function Ks(this: any, t: any, e: any, n: any): any {
  const s: any = (e as any) - ((t as any).length as any);
  for (const r of n) {
    if ((((r as any).range as any).to as any) < (s as any) || (((r as any).range as any).to as any) >= (e as any)) continue;
    const o: any = (tn as any)(` ${((t as any).slice as any)((((r as any).range as any).to as any) - (s as any))}`);
    if ((o as any) != (null as any) && ((e as any) - ((o as any).replacedTextLength as any) as any) === (((r as any).range as any).to as any)) return {
      run: o,
      predecessor: (r as any).id
    };
  }
  return null;
}
function wn(this: any, t: any, e: any): any {
  if ((t as any).composing) return !1;
  const n: any = (qs as any)((t as any).state);
  if ((n as any) == (null as any) && ((Ie as any)() as any) != (null as any)) return !1;
  const s: any = ((lt as any).getState as any)((t as any).state);
  if (!((s?.active as any) === (!0 as any) && ((s as any).query as any) != (null as any)) && ((n?.terminals.length ?? 0) as any) === (0 as any)) {
    if ((n as any) == (null as any) || (((n as any).shortcodes as any).length as any) === (0 as any)) return !1;
    if (((e as any).kind as any) === ("tab" as any)) {
      const {
          $from: o,
          from: i
        }: any = ((t as any).state as any).selection,
        l: any = (o as any).nodeBefore?.isText ? ((o as any).nodeBefore as any).text : void 0;
      if ((l as any) == (null as any) || ((Ks as any)(l, i, (n as any).shortcodes) as any) == (null as any)) return !1;
    }
  }
  return ((t as any).dispatch as any)(((((t as any).state as any).tr as any).setMeta as any)(Q, {
    shortcodes: n?.shortcodes ?? [],
    terminals: [...(n?.terminals ?? []), e]
  })), !0;
}
function Ai(this: any, t: any, e: any): any {
  let {
    from: n,
    to: s
  }: any = (t as any).range;
  for (const r of ((e as any).mapping as any).maps) {
    let o: any = !1;
    if (((r as any).forEach as any)((i: any, l: any): any => {
      ((i as any) === (l as any) ? (i as any) > (n as any) && (i as any) < (s as any) : (i as any) < (s as any) && (l as any) > (n as any)) && (o = !0);
    }), o) return null;
    n = ((r as any).map as any)(n, 1), s = ((r as any).map as any)(s, -1);
  }
  return (n as any) >= (s as any) || ((((e as any).doc as any).textBetween as any)(n, s) as any) !== (`:${(t as any).shortcode}:` as any) ? null : {
    ...t,
    range: {
      from: n,
      to: s
    }
  };
}
function Cn(this: any, t: any, e: any, n: any): any {
  if ((t as any) == (null as any) || !(((e as any).selection as any).eq as any)((((n as any).selection as any).map as any)((e as any).doc, (e as any).mapping))) return null;
  if (!(e as any).docChanged) return t;
  const s: any = [],
    r: any = new (Map as any)();
  for (const o of (t as any).shortcodes) {
    const i: any = (Ai as any)(o, e);
    (i as any) != (null as any) && (((i as any).predecessor as any) != (null as any) && (((r as any).get as any)((i as any).predecessor) as any) !== (((i as any).range as any).from as any) || (((s as any).push as any)(i), ((r as any).set as any)((i as any).id, ((i as any).range as any).to)));
  }
  return ((s as any).length as any) === (0 as any) ? null : {
    shortcodes: s,
    terminals: []
  };
}
function Li(this: any, t: any, e: any, n: any): any {
  const s: any = ((t as any).state as any).tr,
    r: any = new (Set as any)(),
    o: any = [];
  for (const i of e) {
    if (((i as any).predecessor as any) != (null as any) && !((r as any).has as any)((i as any).predecessor)) continue;
    const l: any = (((s as any).mapping as any).map as any)(((i as any).range as any).from, 1),
      a: any = (((s as any).mapping as any).map as any)(((i as any).range as any).to, -1),
      d: any = (((s as any).doc as any).resolve as any)((a as any) - (1 as any)),
      c: any = (d as any).nodeBefore?.isText ? ((d as any).nodeBefore as any).text : void 0;
    if ((c as any) == (null as any)) continue;
    const u: any = (Vs as any)(c, n);
    (u as any) == (null as any) || (((a as any) - (1 as any) as any) - ((u as any).replacedTextLength as any) as any) !== (l as any) || (((s as any).insertText as any)(((u as any).entry as any).native, l, a), ((r as any).add as any)((i as any).id), ((o as any).push as any)((u as any).entry));
  }
  return (s as any).docChanged && ((t as any).dispatch as any)(((s as any).scrollIntoView as any)()), o;
}
function Pi(this: any, t: any, e: any): any {
  return new (ue as any)({
    key: Q,
    state: {
      init: (): any => null,
      apply(n: any, s: any, r: any): any {
        const o: any = ((n as any).getMeta as any)(Q);
        return (o as any) !== (void 0 as any) ? o : (Cn as any)(s, n, r);
      }
    },
    view(): any {
      let n: any = null,
        s: any = !1;
      return {
        update(r: any): any {
          const o: any = ((Q as any).getState as any)((r as any).state) ?? null;
          (o as any) !== (n as any) && (n = o, (o as any) != (null as any) && (((((Jn as any)() as any).then as any)((i: any): any => {
            if (!(s || (((Q as any).getState as any)((r as any).state) as any) !== (o as any)) && (((r as any).dispatch as any)(((((r as any).state as any).tr as any).setMeta as any)(Q, null)), !(!((r as any).hasFocus as any)() || !((r as any).dom as any).isConnected || ((Ie as any)() as any) !== (i as any)))) {
              for (const l of (Li as any)(r, (o as any).shortcodes, i)) (e as any).recordRecent?.((l as any).id);
              for (const l of (o as any).terminals) {
                if (s || !((r as any).hasFocus as any)() || !((r as any).dom as any).isConnected || ((Ie as any)() as any) !== (i as any)) return;
                const a: any = ((lt as any).getState as any)((r as any).state),
                  d: any = (a?.active as any) === (!0 as any) && ((a as any).query as any) != (null as any) ? ((Yn as any)(i, (a as any).query, 1, (e as any).getRecents?.() ?? []) as any)[0] : void 0;
                (d as any) != (null as any) && (a as any) != (null as any) ? ((Us as any)(t, (a as any).range, (d as any).native), (e as any).recordRecent?.((d as any).id)) : ((l as any).kind as any) === ("tab" as any) ? ((r as any).dispatch as any)(((((((r as any).state as any).tr as any).insertText as any)("	") as any).scrollIntoView as any)()) : ((l as any).submit as any)();
              }
            }
          }) as any).catch as any)((i: any): any => {
            !s && (((Q as any).getState as any)((r as any).state) as any) === (o as any) && ((r as any).dispatch as any)(((((r as any).state as any).tr as any).setMeta as any)(Q, null)), (Hs as any)(i);
          }));
        },
        destroy(): any {
          s = !0;
        }
      };
    },
    props: {
      handleDOMEvents: {
        blur(n: any): any {
          return (((Q as any).getState as any)((n as any).state) as any) != (null as any) && ((n as any).dispatch as any)(((((n as any).state as any).tr as any).setMeta as any)(Q, null)), !1;
        }
      },
      handleTextInput(n: any, s: any, r: any, o: any): any {
        if ((o as any) !== (":" as any) || (n as any).composing) return !1;
        const i: any = ((((n as any).state as any).doc as any).resolve as any)(s),
          l: any = (i as any).nodeBefore?.isText ? ((i as any).nodeBefore as any).text : void 0;
        if ((l as any) == (null as any)) return !1;
        const a: any = (Ie as any)();
        if ((a as any) == (null as any)) {
          const c: any = (qs as any)((n as any).state),
            u: any = (tn as any)(l),
            f: any = (u as any) == (null as any) ? (Ks as any)(l, s, c?.shortcodes ?? []) : null,
            h: any = u ?? f?.run;
          if ((h as any) == (null as any)) return !1;
          const m: any = ((((n as any).state as any).tr as any).insertText as any)(o, s, r),
            b: any = {
              shortcodes: [...((Cn as any)(c, m, (n as any).state)?.shortcodes ?? []), {
                id: (Symbol as any)(),
                range: {
                  from: (s as any) - ((h as any).replacedTextLength as any),
                  to: (s as any) + (1 as any)
                },
                shortcode: (h as any).shortcode,
                predecessor: f?.predecessor ?? null
              }],
              terminals: []
            };
          return ((n as any).dispatch as any)(((((m as any).setMeta as any)(Q, b) as any).scrollIntoView as any)()), !0;
        }
        const d: any = (Vs as any)(l, a);
        return (d as any) == (null as any) ? !1 : (((n as any).dispatch as any)(((((((n as any).state as any).tr as any).insertText as any)(((d as any).entry as any).native, (s as any) - ((d as any).replacedTextLength as any), r) as any).scrollIntoView as any)()), (e as any).recordRecent?.(((d as any).entry as any).id), !0);
      }
    }
  });
}
const Oi: any = ((de as any).create as any)({
    name: "sandEmojiSuggestion",
    addProseMirrorPlugins(): any {
      return [(Xt as any)({
        editor: (this as any).editor,
        ...(Ti as any)(((this as any).options as any).suggestion)
      }), (Pi as any)((this as any).editor, ((this as any).options as any).suggestion)];
    }
  }),
  Di: number = 300;
function At(this: any, t: any, e: any): any {
  return (e as any) === (0 as any) ? 0 : ((Math as any).min as any)(((Math as any).max as any)(t, 0), (e as any) - (1 as any));
}
function Gs(this: any, t: any): any {
  (Gs as any).d = 375;
  const e: any = ((z as any).c as any)(41),
    {
      candidates: n,
      query: s,
      onSelect: r,
      onListboxChange: o,
      ref: i
    }: any = t,
    {
      _: l
    }: any = (ce as any)(),
    [a, d]: any = ((O as any).useState as any)(0);
  let c: any;
  ((e as any)[0] as any) !== (a as any) || ((e as any)[1] as any) !== ((n as any).length as any) ? (c = (At as any)(a, (n as any).length), (e as any)[0] = a, (e as any)[1] = (n as any).length, (e as any)[2] = c) : c = (e as any)[2];
  const u: any = c,
    {
      activeOptionRef: f,
      markKeyboardNavigation: h
    }: any = (ft as any)(),
    m: any = `sand-pr-listbox-${((O as any).useId as any)()}`;
  let _: any;
  ((e as any)[3] as any) !== (l as any) ? (_ = (l as any)({
    id: "0TrDeg"
  }), (e as any)[3] = l, (e as any)[4] = _) : _ = (e as any)[4];
  const b: any = _;
  let y: any;
  ((e as any)[5] as any) !== (m as any) ? (y = (E: any): any => `${m}-option-${E}`, (e as any)[5] = m, (e as any)[6] = y) : y = (e as any)[6];
  const p: any = y;
  let w: any;
  ((e as any)[7] as any) !== ((n as any).length as any) || ((e as any)[8] as any) !== (u as any) || ((e as any)[9] as any) !== (m as any) || ((e as any)[10] as any) !== (b as any) || ((e as any)[11] as any) !== (o as any) || ((e as any)[12] as any) !== (p as any) ? (w = (): any => {
    o?.(((n as any).length as any) === (0 as any) ? null : {
      id: m,
      label: b,
      activeOptionId: (p as any)(u)
    });
  }, (e as any)[7] = (n as any).length, (e as any)[8] = u, (e as any)[9] = m, (e as any)[10] = b, (e as any)[11] = o, (e as any)[12] = p, (e as any)[13] = w) : w = (e as any)[13], (Pe as any)(w);
  const [j, M]: any = ((O as any).useState as any)(s);
  (s as any) !== (j as any) && ((M as any)(s), (d as any)(0));
  let x: any, v: any;
  if (((e as any)[14] as any) !== (n as any) || ((e as any)[15] as any) !== (u as any) || ((e as any)[16] as any) !== (h as any) || ((e as any)[17] as any) !== (r as any) ? (x = (): any => ({
    onKeyDown(E: any): any {
      if (((n as any).length as any) === (0 as any)) return !1;
      if (((E as any).key as any) === ("ArrowDown" as any)) return (h as any)(), (d as any)((L: any): any => (((At as any)(L, (n as any).length) as any) + (1 as any) as any) % ((n as any).length as any)), !0;
      if (((E as any).key as any) === ("ArrowUp" as any)) return (h as any)(), (d as any)((L: any): any => ((((At as any)(L, (n as any).length) as any) - (1 as any) as any) + ((n as any).length as any) as any) % ((n as any).length as any)), !0;
      if (((E as any).key as any) === ("Enter" as any) || ((E as any).key as any) === ("Tab" as any)) {
        const L: any = (n as any)[u] ?? (n as any)[0];
        return (L as any) != (null as any) && (r as any)(L), !0;
      }
      return !1;
    }
  }), v = [u, n, r, h], (e as any)[14] = n, (e as any)[15] = u, (e as any)[16] = h, (e as any)[17] = r, (e as any)[18] = x, (e as any)[19] = v) : (x = (e as any)[18], v = (e as any)[19]), ((O as any).useImperativeHandle as any)(i, x, v), ((n as any).length as any) === (0 as any)) return null;
  let A: any;
  ((e as any)[20] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (A = (G as any)("sand-pr-menu", "sand-9f619 sand-1klvvdw sand-xc7z9f sand-1ua6jya sand-mkeg23 sand-1y0btm7 sand-qz0629 sand-1pkpdue sand-14vywav sand-b3r6kr"), (e as any)[20] = A) : A = (e as any)[20];
  let N: any;
  ((e as any)[21] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (N = (G as any)("sand-pr-listbox", "sand-9f619 sand-h8yej3 sand-1ghz6dp sand-1fn2sgp sand-3ct3a4 sand-78zum5 sand-dt5ytf sand-12mrbbr"), (e as any)[21] = N) : N = (e as any)[21];
  let C: any;
  if (((e as any)[22] as any) !== (f as any) || ((e as any)[23] as any) !== (n as any) || ((e as any)[24] as any) !== (u as any) || ((e as any)[25] as any) !== (r as any) || ((e as any)[26] as any) !== (p as any)) {
    let E: any;
    ((e as any)[28] as any) !== (f as any) || ((e as any)[29] as any) !== (u as any) || ((e as any)[30] as any) !== (r as any) || ((e as any)[31] as any) !== (p as any) ? (E = (L: any, S: any): any => {
      const D: any = (S as any) === (u as any),
        V: any = ($: any): any => {
          (($ as any).button as any) === (0 as any) && ((($ as any).preventDefault as any)(), (r as any)(L));
        };
      return ((g as any).jsx as any)("li", {
        className: (G as any)("sand-pr-option", "sand-1ghz6dp sand-1717udv"),
        role: "presentation",
        children: ((g as any).jsxs as any)("button", {
          ref: D ? f : null,
          "aria-selected": D,
          className: (G as any)("sand-pr-option-button", (({
            0: {
              className: "sand-78zum5 sand-6s0dn4 sand-ehausa sand-h8yej3 sand-uve7l6 sand-196pc8s sand-1rgtt3y sand-22095l sand-jbqb8w sand-ng3xce sand-1m7fhj7 sand-1heor9g sand-jb2p0i sand-1yc453h sand-1ypdohk sand-euugli"
            },
            1: {
              className: "sand-78zum5 sand-6s0dn4 sand-ehausa sand-h8yej3 sand-uve7l6 sand-196pc8s sand-1rgtt3y sand-22095l sand-ng3xce sand-1m7fhj7 sand-1heor9g sand-jb2p0i sand-1yc453h sand-1ypdohk sand-euugli sand-qcqck4"
            }
          } as any)[(!!D as any) << (0 as any)] as any).className),
          id: (p as any)(S),
          onClick: ($: any): any => {
            (($ as any).detail as any) === (0 as any) && (r as any)(L);
          },
          onMouseEnter: (): any => (d as any)(S),
          onPointerDown: V,
          role: "option",
          type: "button",
          children: [((g as any).jsx as any)("span", {
            "aria-hidden": !0,
            className: (G as any)("sand-78zum5 sand-6s0dn4 sand-l56j7k sand-17z2i9w sand-17rw0jw sand-2lah0s sand-1043rbw sand-arj5zm"),
            children: ((g as any).jsx as any)(mo, {
              color: "tertiary",
              name: "git-pull-request",
              size: "xs"
            })
          }), ((g as any).jsxs as any)("span", {
            className: (G as any)("sand-78zum5 sand-1pha0wt sand-pkkfsy sand-euugli sand-1iyjqo2"),
            children: [((g as any).jsx as any)("span", {
              className: (G as any)("sand-2lah0s sand-1wd3ewq sand-11wthnw sand-132q4wb sand-uxw1ft sand-ss6m8b"),
              children: `#${(L as any).prNumber}`
            }), ((L as any).title as any) != (null as any) && (((L as any).title as any).length as any) > (0 as any) ? ((g as any).jsx as any)("span", {
              className: (G as any)("sand-4b2ntj sand-y5h43f sand-132q4wb sand-1iyjqo2 sand-s83m0k sand-euugli sand-b3r6kr sand-lyipyv sand-uxw1ft"),
              children: (L as any).title
            }) : null]
          })]
        })
      }, (L as any).prNumber);
    }, (e as any)[28] = f, (e as any)[29] = u, (e as any)[30] = r, (e as any)[31] = p, (e as any)[32] = E) : E = (e as any)[32], C = ((n as any).map as any)(E), (e as any)[22] = f, (e as any)[23] = n, (e as any)[24] = u, (e as any)[25] = r, (e as any)[26] = p, (e as any)[27] = C;
  } else C = (e as any)[27];
  let k: any;
  ((e as any)[33] as any) !== (m as any) || ((e as any)[34] as any) !== (b as any) || ((e as any)[35] as any) !== (N as any) || ((e as any)[36] as any) !== (C as any) ? (k = ((g as any).jsx as any)(at, {
    direction: "vertical",
    maxHeight: `var(${Ft}, ${Di}px)`,
    scrollbarVisibility: "hover",
    width: "100%",
    children: ((g as any).jsx as any)("ul", {
      "aria-label": b,
      className: N,
      id: m,
      role: "listbox",
      children: C
    })
  }), (e as any)[33] = m, (e as any)[34] = b, (e as any)[35] = N, (e as any)[36] = C, (e as any)[37] = k) : k = (e as any)[37];
  let I: any;
  return ((e as any)[38] as any) !== (k as any) || ((e as any)[39] as any) !== (A as any) ? (I = ((g as any).jsx as any)("div", {
    className: A,
    children: k
  }), (e as any)[38] = k, (e as any)[39] = A, (e as any)[40] = I) : I = (e as any)[40], I;
}
const ji: number = 8,
  $i: number = 300;
function Hi(this: any, t: any, e: any): any {
  const n: any = ($r as any)(),
    s: any = (Ae as any)(((e as any).trim as any)(), n);
  return (((((s as any).length as any) === (0 as any) ? t : ((t as any).filter as any)((o: any): any => (((String as any)((o as any).prNumber) as any).includes as any)(s) || (((Ae as any)((o as any).title ?? "", n) as any).includes as any)(s))) as any).slice as any)(0, ji);
}
function Ui(this: any, t: any, e: any): any {
  const n: any = (ht as any)("#");
  return {
    items: ({
      query: s
    }: any): any => (Hi as any)(((t as any).getCandidates as any)(), s),
    allow: ({
      state: s,
      range: r
    }: any): any => ((n as any).allowAt as any)((r as any).from, s),
    render: (Qt as any)(({
      isDismissed: s
    }: any): any => {
      let r: any = null,
        o: any = null,
        i: any = 0;
      const l: any = (u: any): any => ({
          candidates: (u as any).items,
          query: (u as any).query,
          onSelect: (f: any): any => ((u as any).command as any)({
            prNumber: (f as any).prNumber,
            title: (f as any).title,
            url: (f as any).url
          }),
          onListboxChange: (t as any).onListboxChange
        }),
        a: any = (): any => {
          o?.setVisible(!1), (t as any).onOpenChange?.(!1);
        },
        d: any = (): any => {
          ((n as any).handleExit as any)(), o?.destroy(), o = null, r?.destroy(), r = null, (t as any).onOpenChange?.(!1);
        },
        c: any = (u: any): any => {
          if (i = ((u as any).items as any).length, r?.updateProps((l as any)(u)), (s as any)()) {
            (a as any)();
            return;
          }
          const f: any = (i as any) > (0 as any);
          o?.setVisible(f), (t as any).onOpenChange?.(f), f && o?.reposition((u as any).clientRect);
        };
      return {
        onBlur: a,
        shouldStart: (u: any): any => (e as any)((u as any).editor),
        handlers: {
          onStart(u: any): any {
            (r as any) != (null as any) && (d as any)(), ((n as any).trackActive as any)((u as any).editor, ((u as any).range as any).from), r = new (Oe as any)(Gs, {
              editor: (u as any).editor,
              props: (l as any)(u)
            }), o = (ut as any)((r as any).element, {
              caretGapPx: dt,
              maxHeightPx: $i
            }), (c as any)(u);
          },
          onUpdate(u: any): any {
            (r as any) != (null as any) && (((n as any).trackActive as any)((u as any).editor, ((u as any).range as any).from), (c as any)(u));
          },
          onKeyDown(u: any): any {
            return (i as any) === (0 as any) ? !1 : (((u as any).event as any).key as any) === ("Escape" as any) ? ((((u as any).event as any).stopPropagation as any)(), ((n as any).markEscapeDismissal as any)(), !1) : r?.ref?.onKeyDown((u as any).event) ?? !1;
          },
          onExit(): any {
            (d as any)();
          }
        }
      };
    }, t)
  };
}
const Bs: string = "prReference",
  Tn: any = new (W as any)("sand-pr-reference-suggestion");
function Nn(this: any, t: any): any {
  const e: any = (typeof t as any) == ("number" as any) ? t : (Number as any)(t);
  return ((Number as any).isInteger as any)(e) && (e as any) > (0 as any) ? `#${e}` : "#";
}
const Vi: any = ((Le as any).create as any)({
    name: Bs,
    group: "inline",
    inline: !0,
    atom: !0,
    selectable: !0,
    addAttributes(): any {
      return {
        prNumber: {
          default: null,
          parseHTML: (t: any): any => {
            const e: any = ((t as any).getAttribute as any)("data-pr-number"),
              n: any = (Number as any)(e);
            return ((Number as any).isInteger as any)(n) && (n as any) > (0 as any) ? n : null;
          },
          renderHTML: (t: any): any => (typeof (t as any).prNumber as any) == ("number" as any) ? {
            "data-pr-number": (String as any)((t as any).prNumber)
          } : {}
        },
        title: {
          default: null,
          parseHTML: (t: any): any => ((t as any).getAttribute as any)("data-title"),
          renderHTML: (t: any): any => (typeof (t as any).title as any) == ("string" as any) ? {
            "data-title": (t as any).title
          } : {}
        },
        url: {
          default: null,
          parseHTML: (t: any): any => ((t as any).getAttribute as any)("data-url"),
          renderHTML: (t: any): any => (typeof (t as any).url as any) == ("string" as any) ? {
            "data-url": (t as any).url
          } : {}
        }
      };
    },
    parseHTML(): any {
      return [{
        tag: 'span[data-type="pr-reference"][data-pr-number]'
      }];
    },
    renderHTML({
      node: t,
      HTMLAttributes: e
    }: any): any {
      return ["span", (re as any)({
        "data-type": "pr-reference"
      }, e), (Nn as any)(((t as any).attrs as any).prNumber)];
    },
    renderText({
      node: t
    }: any): any {
      return (Nn as any)(((t as any).attrs as any).prNumber);
    },
    addNodeView(): any {
      return (De as any)(Es);
    },
    addProseMirrorPlugins(): any {
      const t: any = ((this as any).options as any).suggestion;
      if ((t as any) == (null as any)) return [];
      const e: any = (this as any).name;
      return [(Xt as any)({
        editor: (this as any).editor,
        char: "#",
        pluginKey: Tn,
        allowSpaces: !0,
        allowedPrefixes: null,
        findSuggestionMatch: Zt,
        command: ({
          editor: n,
          range: s,
          props: r
        }: any): any => {
          ((((((((n as any).chain as any)() as any).focus as any)() as any).insertContentAt as any)(s, [{
            type: e,
            attrs: {
              prNumber: (r as any).prNumber,
              title: (r as any).title,
              url: (r as any).url
            }
          }, {
            type: "text",
            text: " "
          }]) as any).run as any)();
        },
        ...(Ui as any)(t, (n: any): any => ((n as any).state as any) == (null as any) || (((Tn as any).getState as any)((n as any).state)?.active as any) !== (!1 as any))
      })];
    }
  }),
  Mn: number = 8,
  qi: number = 3,
  Lt: any = {
    action: {
      id: "bwRvnp"
    },
    automation: {
      id: "aAnCaW"
    },
    skill: {
      id: "OZJeTZ"
    }
  };
function Ki(this: any, t: any, e: any, n: any): any {
  const s: any = (t as any).keywords ?? [];
  return (ss as any)({
    label: (t as any).label,
    keywords: ((t as any).detail as any) == (null as any) ? s : [...s, (t as any).detail],
    tokens: e,
    normalizedQuery: n
  });
}
function Gi(this: any, t: any, e: any, n: any = F): any {
  const s: any = (F as any).locale,
    r: any = (Ae as any)(((e as any).trim as any)(), s),
    o: any = (ns as any)(e),
    i: any = ((o as any).join as any)(" "),
    l: any = ((((t as any).getSkills as any)() as any).flatMap as any)((c: any): any => {
      const u: any = (ct as any)({
        id: (c as any).id,
        label: (c as any).name
      }, n);
      if (!(((Ae as any)((c as any).name, s) as any).includes as any)(r) && !(((Ae as any)(u, s) as any).includes as any)(r)) return [];
      const f: any = (t as any).resolveSkillIcon?.(c);
      return [{
        id: (c as any).id,
        label: u,
        kind: "skill",
        tag: ((c as any).trigger as any) != (null as any) ? (Lt as any).automation : (Lt as any).skill,
        subtitle: ((c as any).trigger as any) != (null as any) ? (Qn as any)(c) : (c as any).description,
        ...((f as any) == (null as any) ? {} : {
          icon: f
        }),
        skill: c
      }];
    }),
    a: any = ((((((((t as any).getActions?.() ?? []) as any).flatMap as any)((c: any): any => {
      const u: any = (Ki as any)(c, o, i);
      return (u as any) == (null as any) ? [] : [{
        action: c,
        score: u
      }];
    }) as any).sort as any)((c: any, u: any): any => ((u as any).score as any) - ((c as any).score as any)) as any).map as any)(({
      action: c
    }: any): any => ({
      id: `action:${(c as any).id}`,
      label: (c as any).label,
      kind: "action",
      tag: (Lt as any).action,
      subtitle: (c as any).detail ?? "",
      action: c
    })),
    d: any = ((l as any).slice as any)(0, (Mn as any) - (((Math as any).min as any)((a as any).length, qi) as any));
  return [...d, ...((a as any).slice as any)(0, (Mn as any) - ((d as any).length as any))];
}
function Bi(this: any, t: any, e: any, n: any, s: any): any {
  const r: any = (): any => ((((t as any).getSkills as any)() as any).length as any) > (0 as any) || (((t as any).getActions?.().length ?? 0) as any) > (0 as any),
    o: any = ((n as any).createDismissal as any)(e);
  return {
    items: ({
      query: i
    }: any): any => (Gi as any)(t, i),
    allow: ({
      state: i,
      range: l
    }: any): any => ((o as any).allowAt as any)((l as any).from, i),
    render: (Cs as any)(t, (): any => {
      let i: any = null,
        l: any = null,
        a: any = 0,
        d: any = !1,
        c: any = null;
      const u: any = (p: any): any => ({
        items: (p as any).items,
        query: (p as any).query,
        hasAnySkills: (r as any)(),
        onSelect: (w: any): any => {
          if (((w as any).kind as any) === ("action" as any) && ((w as any).action as any) != (null as any)) {
            (((((((((p as any).editor as any).chain as any)() as any).focus as any)() as any).deleteRange as any)((p as any).range) as any).run as any)(), (((w as any).action as any).run as any)();
            return;
          }
          ((p as any).command as any)({
            id: (w as any).id,
            label: (w as any).skill?.name ?? (w as any).label,
            kind: (w as any).kind,
            ...(((w as any).icon?.iconId as any) == (null as any) ? {} : {
              iconId: ((w as any).icon as any).iconId
            }),
            ...(((w as any).icon?.iconUrl as any) == (null as any) ? {} : {
              iconUrl: ((w as any).icon as any).iconUrl
            })
          });
        },
        onListboxChange: (t as any).onListboxChange
      });
      let f: any = !1;
      const h: any = (p: any): any => {
          f = p, l?.setVisible(p), (t as any).onVisibleChange?.(p);
        },
        m: any = (p: any, w: any = null): any => {
          (t as any).onOpenChange?.(p, w);
        },
        _: any = (p: any): any => ((F as any)._ as any)((cs as any)(p, (r as any)())),
        b: any = (): any => {
          d = !0, (h as any)(!1), (m as any)(!1);
        },
        y: any = (): any => {
          ((o as any).handleExit as any)(), c?.off("blur", b), c = null, l?.destroy(), l = null, i?.destroy(), i = null, (h as any)(!1), (m as any)(!1);
        };
      return {
        onStart(p: any): any {
          if ((s as any)((p as any).editor)) {
            if ((i as any) != (null as any) && (y as any)(), ((o as any).trackActive as any)((p as any).editor, ((p as any).range as any).from), d = !1, a = ((p as any).items as any).length, c = (p as any).editor, ((c as any).on as any)("blur", b), i = new (Oe as any)(us, {
              editor: (p as any).editor,
              props: (u as any)(p)
            }), l = ((n as any).createPopup as any)((i as any).element, {
              maxHeightPx: ls
            }), ((o as any).trackResults as any)((p as any).query, (a as any) > (0 as any))) {
              (h as any)(!1), (m as any)(!1);
              return;
            }
            (h as any)(!0), (m as any)((a as any) > (0 as any), (_ as any)((p as any).query)), ((l as any).reposition as any)((p as any).clientRect);
          }
        },
        onUpdate(p: any): any {
          if ((i as any) != (null as any)) {
            if (((o as any).trackActive as any)((p as any).editor, ((p as any).range as any).from), a = ((p as any).items as any).length, ((i as any).updateProps as any)((u as any)(p)), ((o as any).trackResults as any)((p as any).query, (a as any) > (0 as any)) || d) {
              (h as any)(!1), (m as any)(!1);
              return;
            }
            (h as any)(!0), (m as any)((a as any) > (0 as any), (_ as any)((p as any).query)), l?.reposition((p as any).clientRect);
          }
        },
        onKeyDown(p: any): any {
          return d ? !1 : (((p as any).event as any).key as any) === ("Escape" as any) && f ? ((((p as any).event as any).stopPropagation as any)(), ((o as any).markEscapeDismissal as any)(), !1) : (a as any) === (0 as any) ? !1 : i?.ref?.onKeyDown((p as any).event) ?? !1;
        },
        onExit(): any {
          (y as any)();
        }
      };
    })
  };
}
function An(this: any, t: any): any {
  return `@${t ?? ""}`;
}
const Ln: any = {
    "/": new (W as any)("sand-skill-suggestion-/"),
    "@": new (W as any)("sand-skill-suggestion-@")
  },
  zi: any = ((Le as any).create as any)({
    name: Wt,
    group: "inline",
    inline: !0,
    atom: !0,
    selectable: !0,
    addAttributes(): any {
      return {
        id: {
          default: null,
          parseHTML: (t: any): any => ((t as any).getAttribute as any)("data-id"),
          renderHTML: (t: any): any => (typeof (t as any).id as any) == ("string" as any) ? {
            "data-id": (t as any).id
          } : {}
        },
        label: {
          default: null,
          parseHTML: (t: any): any => ((t as any).getAttribute as any)("data-label"),
          renderHTML: (t: any): any => (typeof (t as any).label as any) == ("string" as any) ? {
            "data-label": (t as any).label
          } : {}
        },
        iconId: {
          default: null,
          parseHTML: (t: any): any => ((t as any).getAttribute as any)("data-icon-id"),
          renderHTML: (t: any): any => (typeof (t as any).iconId as any) == ("string" as any) ? {
            "data-icon-id": (t as any).iconId
          } : {}
        },
        iconUrl: {
          default: null,
          parseHTML: (t: any): any => ((t as any).getAttribute as any)("data-icon-url"),
          renderHTML: (t: any): any => (typeof (t as any).iconUrl as any) == ("string" as any) ? {
            "data-icon-url": (t as any).iconUrl
          } : {}
        }
      };
    },
    parseHTML(): any {
      return [{
        tag: 'span[data-type="skill-reference"][data-id]'
      }, {
        tag: 'span[data-type="workflow-reference"][data-id]'
      }];
    },
    renderHTML({
      node: t,
      HTMLAttributes: e
    }: any): any {
      return ["span", (re as any)({
        "data-type": "skill-reference",
        class: "sand-skill-chip"
      }, e), (An as any)(((t as any).attrs as any).label)];
    },
    renderText({
      node: t
    }: any): any {
      return (An as any)(((t as any).attrs as any).label);
    },
    addNodeView(): any {
      return (De as any)(js);
    },
    addProseMirrorPlugins(): any {
      const t: any = ((this as any).options as any).suggestion,
        e: any = ((this as any).options as any).plumbing,
        n: any = (this as any).name;
      return (((t as any).triggers as any).map as any)((s: any): any => (Xt as any)({
        editor: (this as any).editor,
        char: s,
        pluginKey: (Ln as any)[s],
        allowSpaces: !0,
        allowedPrefixes: null,
        findSuggestionMatch: (e as any).findSuggestionMatch,
        command: ({
          editor: r,
          range: o,
          props: i
        }: any): any => {
          ((((((((r as any).chain as any)() as any).focus as any)() as any).insertContentAt as any)(o, [{
            type: n,
            attrs: {
              id: (i as any).id,
              label: (i as any).label,
              iconId: (i as any).iconId ?? null,
              iconUrl: (i as any).iconUrl ?? null
            }
          }, {
            type: "text",
            text: " "
          }]) as any).run as any)();
        },
        ...(Bi as any)(t, s, e, (r: any): any => {
          const o: any = (r as any).state;
          return (o as any) == (null as any) || ((((Ln as any)[s] as any).getState as any)(o)?.active as any) !== (!1 as any);
        })
      }));
    }
  });
function zs(this: any, t: any): any {
  (zs as any).d = 781;
  const e: any = ((z as any).c as any)(11),
    {
      node: n,
      editor: s,
      selected: r
    }: any = t;
  let o: any;
  ((e as any)[0] as any) !== (s as any) || ((e as any)[1] as any) !== (r as any) ? (o = {
    editor: s,
    selected: r
  }, (e as any)[0] = s, (e as any)[1] = r, (e as any)[2] = o) : o = (e as any)[2];
  const i: any = (pt as any)(o),
    l: any = ((n as any).attrs as any).label;
  if ((typeof l as any) != ("string" as any) || ((l as any).length as any) === (0 as any)) {
    let u: any;
    return ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (u = ((g as any).jsx as any)(oe, {
      as: "span"
    }), (e as any)[3] = u) : u = (e as any)[3], u;
  }
  let a: any;
  ((e as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = {
    verticalAlign: "top"
  }, (e as any)[4] = a) : a = (e as any)[4];
  let d: any;
  ((e as any)[5] as any) !== (((n as any).attrs as any).status as any) ? (d = (Hr as any)(((n as any).attrs as any).status), (e as any)[5] = ((n as any).attrs as any).status, (e as any)[6] = d) : d = (e as any)[6];
  let c: any;
  return ((e as any)[7] as any) !== (i as any) || ((e as any)[8] as any) !== (l as any) || ((e as any)[9] as any) !== (d as any) ? (c = ((g as any).jsx as any)(oe, {
    as: "span",
    "data-type": "todo-reference",
    style: a,
    children: ((g as any).jsx as any)(go, {
      isSelected: i,
      label: l,
      status: d
    })
  }), (e as any)[7] = i, (e as any)[8] = l, (e as any)[9] = d, (e as any)[10] = c) : c = (e as any)[10], c;
}
function Pn(this: any, t: any): any {
  return (typeof t as any) == ("string" as any) ? t : "";
}
function On(this: any, t: any): any {
  return ((F as any)._ as any)({
    id: "p2S3XO",
    values: {
      label: t
    }
  });
}
const Fi: any = ((Le as any).create as any)({
  name: "todoReference",
  group: "inline",
  inline: !0,
  atom: !0,
  selectable: !0,
  addAttributes(): any {
    return {
      id: {
        default: null,
        parseHTML: (t: any): any => ((t as any).getAttribute as any)("data-id"),
        renderHTML: (t: any): any => (typeof (t as any).id as any) == ("string" as any) ? {
          "data-id": (t as any).id
        } : {}
      },
      label: {
        default: null,
        parseHTML: (t: any): any => ((t as any).getAttribute as any)("data-label"),
        renderHTML: (t: any): any => (typeof (t as any).label as any) == ("string" as any) ? {
          "data-label": (t as any).label
        } : {}
      },
      status: {
        default: null,
        parseHTML: (t: any): any => ((t as any).getAttribute as any)("data-status"),
        renderHTML: (t: any): any => (typeof (t as any).status as any) == ("string" as any) ? {
          "data-status": (t as any).status
        } : {}
      }
    };
  },
  parseHTML(): any {
    return [{
      tag: 'span[data-type="todo-reference"][data-label]'
    }];
  },
  renderHTML({
    node: t,
    HTMLAttributes: e
  }: any): any {
    return ["span", (re as any)({
      "data-type": "todo-reference"
    }, e), (On as any)((Pn as any)(((t as any).attrs as any).label))];
  },
  renderText({
    node: t
  }: any): any {
    return (On as any)((Pn as any)(((t as any).attrs as any).label));
  },
  addNodeView(): any {
    return (De as any)(zs);
  }
});
function Wi(this: any, t: any, e: any): any {
  const n: any = (((t as any).type as any).name as any) === ("orderedList" as any) ? (Number as any)(((t as any).attrs as any).start) : null,
    s: any = [];
  return ((t as any).forEach as any)((r: any, o: any, i: any): any => {
    const l: any = (n as any) == (null as any) ? "- " : `${(n as any) + (i as any)}. `,
      a: any = (Fn as any)(r, {
        blockSeparator: `
`,
        textSerializers: e
      });
    ((s as any).push as any)((l as any) + (((a as any).replaceAll as any)(`
`, `
${((" " as any).repeat as any)((l as any).length)}`) as any));
  }), ((s as any).join as any)(`
`);
}
function Xi(this: any, t: any): any {
  const e: any = {
      ...(zn as any)(t),
      ...qr
    },
    n: any = ({
      node: s
    }: any): any => (Wi as any)(s, e);
  return ((Object as any).assign as any)(e, {
    bulletList: n,
    orderedList: n
  });
}
function Pt(this: any, t: any, e: any): any {
  return (Fn as any)(t, {
    textSerializers: (Xi as any)(e)
  });
}
function Qi(this: any, t: any): any {
  return {
    ...(zn as any)(t),
    [(bs as any).name]: ({
      node: e
    }: any): any => (bi as any)((e as any).attrs),
    [Bs]: ({
      node: e
    }: any): any => (zo as any)((e as any).attrs),
    [Wt]: ({
      node: e
    }: any): any => (_i as any)((e as any).attrs)
  };
}
function Yi(this: any, t: any, e: any, n: any): any {
  const s: any = (Qi as any)(e);
  let r: any = ((Math as any).min as any)(((t as any).content as any).size, n),
    o: any = (rn as any)(t, {
      from: 0,
      to: r
    }, {
      textSerializers: s
    });
  for (; ((o as any).length as any) < (n as any) && (r as any) < (((t as any).content as any).size as any);) r = ((Math as any).min as any)(((t as any).content as any).size, (r as any) * (2 as any)), o = (rn as any)(t, {
    from: 0,
    to: r
  }, {
    textSerializers: s
  });
  return o;
}
const Ji: any = {
    prompt: {
      paragraph: ((ie as any)((Me as any).promptParagraph) as any).className ?? null,
      link: ((ie as any)((Me as any).promptLink) as any).className ?? null,
      emptyEditor: (G as any)("is-editor-empty", ((ie as any)((Me as any).promptEmptyEditor) as any).className)
    },
    "skill-mention": {
      paragraph: null,
      link: null,
      emptyEditor: (G as any)("is-editor-empty", ((ie as any)((Me as any).skillMentionEmptyEditor) as any).className)
    }
  },
  Zi: any = new (Set as any)(["bulletList", "orderedList", "listItem"]),
  el: any = ((gr as any).extend as any)({
    addExtensions(): any {
      return ((((this as any).parent?.() ?? []) as any).map as any)((t: any): any => ((Zi as any).has as any)((t as any).name) ? ((t as any).extend as any)({
        addKeyboardShortcuts: (): any => ({})
      }) : t);
    }
  }),
  Dn: any = {
    HTMLAttributes: (sr as any)((Me as any).promptList)
  };
function tl(this: any, t: any): any {
  return t ? {
    bulletList: Dn,
    orderedList: Dn,
    trailingNode: !1
  } : {
    bulletList: !1,
    orderedList: !1
  };
}
const nl: any = {
  findSuggestionMatch: Zt,
  createDismissal: ht,
  createPopup: (t: any, e: any): any => (ut as any)(t, {
    caretGapPx: dt,
    maxHeightPx: (e as any).maxHeightPx
  })
};
function jn(this: any, t: any, e: any): any {
  return `@${t ?? e ?? ""}`;
}
const sl: any = ((de as any).create as any)({
    name: "sandScrollCaretIntoView",
    addProseMirrorPlugins(): any {
      return [new (ue as any)({
        key: new (W as any)("sand-scroll-caret-into-view"),
        appendTransaction(t: any, e: any, n: any): any {
          return !((t as any).some as any)((s: any): any => (s as any).docChanged) || !((n as any).selection as any).empty || ((t as any).some as any)((s: any): any => (s as any).scrolledIntoView) ? null : (((n as any).tr as any).scrollIntoView as any)();
        }
      })];
    }
  }),
  rl: any = (Wn as any)(void 0);
function ol(this: any, t: any): any {
  return t?.storage.sandComposerDirection ?? rl;
}
const tt: any = new (W as any)("sand-composer-direction");
function $n(this: any, t: any, e: any): any {
  return (Ur as any)((Yi as any)(t, e, Vr));
}
const il: any = ((de as any).create as any)({
  name: "sandComposerDirection",
  addStorage(): any {
    return (Wn as any)(void 0);
  },
  addProseMirrorPlugins(): any {
    const t: any = (this as any).storage;
    return [new (ue as any)({
      key: tt,
      state: {
        init: (e: any, n: any): any => ($n as any)((n as any).doc, (n as any).schema),
        apply: (e: any, n: any, s: any, r: any): any => (e as any).docChanged ? ($n as any)((r as any).doc, (r as any).schema) : n
      },
      props: {
        attributes: (e: any): any => ({
          dir: ((tt as any).getState as any)(e) ?? "ltr"
        })
      },
      view: (e: any): any => (((t as any).set as any)(((tt as any).getState as any)((e as any).state)), {
        update(n: any): any {
          ((t as any).set as any)(((tt as any).getState as any)((n as any).state));
        }
      })
    })];
  }
});
function ll(this: any, t: any): any {
  const e: any = ((t as any).doc as any).firstChild;
  return (e as any) != (null as any) && (e as any).isTextblock && (Bn as any)((t as any).doc) && (((t as any).selection as any).anchor as any) <= ((e as any).nodeSize as any);
}
const al: any = ((de as any).create as any)({
    name: "sandAriaPlaceholder",
    addProseMirrorPlugins(): any {
      const {
        placeholder: t
      }: any = (this as any).options;
      return [new (ue as any)({
        key: new (W as any)("sand-aria-placeholder"),
        props: {
          attributes: (e: any): any => (ll as any)(e) ? {
            "aria-placeholder": (t as any)()
          } : {}
        }
      })];
    }
  }),
  cl: any = ((de as any).create as any)({
    name: "sandDocumentToken",
    addProseMirrorPlugins(): any {
      return [(pi as any)()];
    }
  }),
  ul: any = (typeof navigator as any) < ("u" as any) && ((/mac/i as any).test as any)((navigator as any).platform);
function dl(this: any, t: any, e: any): any {
  if (!e || !(t as any).ctrlKey || (t as any).metaKey || (t as any).altKey) return null;
  const n: any = (((t as any).key as any).toLowerCase as any)();
  return (n as any) !== ("a" as any) && (n as any) !== ("e" as any) ? null : {
    alter: (t as any).shiftKey ? "extend" : "move",
    direction: (n as any) === ("e" as any) ? "forward" : "backward"
  };
}
function fl(this: any, t: any, e: any, n: any): any {
  const s: any = ((((t as any).type as any).schema as any).nodes as any).hardBreak;
  if ((n as any) === ("backward" as any)) {
    let i: any = 0;
    return ((t as any).forEach as any)((l: any, a: any): any => {
      (s as any) != (null as any) && ((l as any).type as any) === (s as any) && ((a as any) + ((l as any).nodeSize as any) as any) <= (e as any) && (i = (a as any) + ((l as any).nodeSize as any));
    }), i;
  }
  let r: any = ((t as any).content as any).size,
    o: any = !1;
  return ((t as any).forEach as any)((i: any, l: any): any => {
    !o && (s as any) != (null as any) && ((i as any).type as any) === (s as any) && (l as any) >= (e as any) && (r = l, o = !0);
  }), r;
}
function pl(this: any, t: any, e: any): any {
  const {
      state: n
    }: any = t,
    {
      selection: s
    }: any = n,
    r: any = (s as any).$head;
  if (!((r as any).parent as any).isTextblock) return !1;
  const o: any = (fl as any)((r as any).parent, (r as any).parentOffset, (e as any).direction),
    i: any = (((r as any).start as any)() as any) + (o as any),
    l: any = ((e as any).alter as any) === ("extend" as any) ? (s as any).anchor : i;
  return ((t as any).dispatch as any)((((((n as any).tr as any).setSelection as any)(((xr as any).create as any)((n as any).doc, l, i)) as any).scrollIntoView as any)()), !0;
}
const hl: any = ((de as any).create as any)({
    name: "sandMacEmacsLineMotion",
    addProseMirrorPlugins(): any {
      return [new (ue as any)({
        key: new (W as any)("sand-mac-emacs-line-motion"),
        props: {
          handleKeyDown(t: any, e: any): any {
            const n: any = (dl as any)(e, ul);
            return (n as any) == (null as any) ? !1 : (pl as any)(t, n);
          }
        }
      })];
    }
  }),
  ml: any = new (RegExp as any)("\\.\\p{L}|\\w:\\S|localhost", "iu");
function gl(this: any, t: any): any {
  return (e: any, n: any): any => ((ml as any).test as any)(e) ? (t as any)(e, n) : [];
}
const yl: any = ((yr as any).extend as any)({
  inclusive(): any {
    return !1;
  },
  addPasteRules(): any {
    return ((((this as any).parent?.() ?? []) as any).map as any)((t: any): any => (typeof (t as any).find as any) == ("function" as any) ? new (br as any)({
      find: (gl as any)((t as any).find),
      handler: (t as any).handler
    }) : t);
  }
});
function bl(this: any, t: any, e: any): any {
  return (t as any) == (null as any) || (typeof t as any) == ("string" as any) ? t : ((Array as any).isArray as any)(t) ? ((t as any).map as any)((n: any): any => (Kt as any)(n, e)) : (Kt as any)(t, e);
}
function xl(this: any, t: any, e: any): any {
  return (t as any) == (null as any) || (typeof t as any) == ("string" as any) ? !1 : (((((Array as any).isArray as any)(t) ? t : [t]) as any).some as any)((s: any): any => (Fs as any)(s, e));
}
function Fs(this: any, t: any, e: any): any {
  return ((t as any).type as any) != (null as any) && (((e as any).nodes as any)[(t as any).type] as any) == (null as any) ? !0 : ((Array as any).isArray as any)((t as any).content) && (((t as any).content as any).some as any)((n: any): any => (Fs as any)(n, e));
}
function Kt(this: any, t: any, e: any): any {
  const n: any = {
    ...t
  };
  return ((Array as any).isArray as any)((t as any).marks) && ((n as any).marks = (((t as any).marks as any).filter as any)((s: any): any => (((e as any).marks as any)[(s as any).type] as any) != (null as any))), ((Array as any).isArray as any)((t as any).content) && ((n as any).content = (((t as any).content as any).map as any)((s: any): any => (Kt as any)(s, e))), n;
}
function Sl(this: any, t: any): any {
  const e: any = (Ji as any)[(t as any).surface],
    n: any = ((t as any).isRichTextEnabled as any) === (!0 as any),
    s: any = [((el as any).configure as any)({
      blockquote: !1,
      bold: !1,
      code: !1,
      codeBlock: !1,
      heading: !1,
      horizontalRule: !1,
      italic: !1,
      link: !1,
      paragraph: {
        HTMLAttributes: ((e as any).paragraph as any) == (null as any) ? {} : {
          class: (e as any).paragraph
        }
      },
      strike: !1,
      underline: !1,
      undoRedo: {
        newGroupDelay: 100
      },
      ...(tl as any)(n)
    }), ((yl as any).configure as any)({
      HTMLAttributes: ((e as any).link as any) == (null as any) ? {} : {
        class: (e as any).link
      },
      openOnClick: !1,
      defaultProtocol: "https"
    }), sl, hl, cl];
  n && ((s as any).push as any)(Ei);
  const r: any = (t as any).placeholder;
  (r as any) != (null as any) && ((s as any).push as any)(((Ko as any).configure as any)({
    placeholder: ({
      node: a
    }: any): any => (a as any).isTextblock ? (r as any)() : "",
    emptyEditorClass: (e as any).emptyEditor,
    showOnlyWhenEditable: !1
  }), ((al as any).configure as any)({
    placeholder: r
  }));
  const o: any = (t as any).mention;
  (o as any) != (null as any) && ((s as any).push as any)(((((bs as any).extend as any)({
    selectable: !0,
    parseHTML(): any {
      return [{
        tag: 'span[data-type="mention"][data-id]'
      }];
    },
    addNodeView(): any {
      return (De as any)(Ps);
    }
  }) as any).configure as any)({
    HTMLAttributes: {
      class: "sand-mention"
    },
    renderText: ({
      node: a
    }: any): any => (jn as any)(((a as any).attrs as any).label, ((a as any).attrs as any).id),
    renderHTML: ({
      options: a,
      node: d
    }: any): any => ["span", (re as any)({
      "data-type": "mention"
    }, (a as any).HTMLAttributes), (jn as any)(((d as any).attrs as any).label, ((d as any).attrs as any).id)],
    suggestion: (yi as any)(o)
  }));
  const i: any = (t as any).skill;
  (i as any) != (null as any) && ((s as any).push as any)(((zi as any).configure as any)({
    suggestion: i,
    plumbing: nl
  }));
  const l: any = ((t as any).surface as any) === ("prompt" as any) ? (t as any).emoji : void 0;
  return (l as any) != (null as any) && ((s as any).push as any)(((Oi as any).configure as any)({
    suggestion: l
  })), ((t as any).surface as any) === ("prompt" as any) && (((s as any).push as any)(((Vi as any).configure as any)({
    suggestion: (t as any).prReference ?? null
  })), ((s as any).push as any)(Fi), ((s as any).push as any)(Bo), ((s as any).push as any)(il)), s;
}
const El: any = /\s/u,
  vl: any = /\s+/gu;
function kl(this: any, t: any, e: any, n: any): any {
  const s: any = ((((e as any).replace as any)(/\r\n?/g, `
`) as any).replace as any)(/\n$/, "");
  return (Nl as any)(t, s, (Rl as any)(s, n));
}
function Rl(this: any, t: any, e: any): any {
  if (!(_l as any)(e)) return [];
  const n: any = (wl as any)(e);
  if ((((n as any).linkRuns as any).length as any) === (0 as any)) return [];
  const s: any = (Il as any)(t),
    r: any = (Cl as any)((s as any).units, (n as any).units);
  return (r as any) === (void 0 as any) ? [] : (((n as any).linkRuns as any).flatMap as any)((o: any): any => {
    const i: any = (Tl as any)(o, r, (s as any).offsets);
    return (i as any) === (void 0 as any) ? [] : [i];
  });
}
function _l(this: any, t: any): any {
  let e: any = !1;
  return ((t as any).descendants as any)((n: any): any => (e ||= (((n as any).marks as any).length as any) > (0 as any), !e)), e;
}
function Il(this: any, t: any): any {
  let e: any = "";
  const n: any = [];
  for (let s: any = 0; (s as any) < ((t as any).length as any); s++) {
    const r: any = ((t as any).charAt as any)(s);
    ((El as any).test as any)(r) || (e += r, ((n as any).push as any)(s));
  }
  return {
    units: e,
    offsets: n
  };
}
function wl(this: any, t: any): any {
  let e: any = "";
  const n: any = [];
  let s: any;
  const r: any = (): any => {
    (s as any) !== (void 0 as any) && ((e as any).length as any) > ((s as any).start as any) && ((n as any).push as any)({
      start: (s as any).start,
      end: (e as any).length,
      marks: (s as any).marks
    }), s = void 0;
  };
  return ((t as any).descendants as any)((o: any): any => {
    ((s as any) === (void 0 as any) || !(o as any).isInline || !((jt as any).sameSet as any)((o as any).marks, (s as any).marks)) && ((r as any)(), (o as any).isInline && (((o as any).marks as any).length as any) > (0 as any) && (s = {
      start: (e as any).length,
      marks: (o as any).marks
    })), e += ((((o as any).text ?? "") as any).replace as any)(vl, "");
  }), (r as any)(), {
    units: e,
    linkRuns: n
  };
}
function Cl(this: any, t: any, e: any): any {
  const n: any = [];
  let s: any = 0;
  for (let o: any = 0; (o as any) < ((e as any).length as any); o++) {
    for (; (s as any) < ((t as any).length as any) && (((t as any).charCodeAt as any)(s) as any) !== (((e as any).charCodeAt as any)(o) as any);) s++;
    if ((s as any) === ((t as any).length as any)) return;
    ((n as any).push as any)(s), s++;
  }
  const r: any = [];
  s = ((t as any).length as any) - (1 as any);
  for (let o: any = ((e as any).length as any) - (1 as any); (o as any) >= (0 as any); o--) {
    for (; (s as any) >= (0 as any) && (((t as any).charCodeAt as any)(s) as any) !== (((e as any).charCodeAt as any)(o) as any);) s--;
    ((r as any).push as any)(s), s--;
  }
  return ((r as any).reverse as any)(), {
    earliest: n,
    latest: r
  };
}
function Tl(this: any, t: any, {
  earliest: e,
  latest: n
}: any, s: any): any {
  const r: any = ((e as any).slice as any)((t as any).start, (t as any).end),
    [o]: any = r;
  if ((o as any) === (void 0 as any)) return;
  const i: any = ((r as any).every as any)((c: any, u: any): any => (c as any) === ((n as any)[((t as any).start as any) + (u as any)] as any)),
    l: any = ((r as any).every as any)((c: any, u: any): any => (c as any) === ((o as any) + (u as any) as any));
  if (!i || !l) return;
  const a: any = (s as any)[o],
    d: any = (s as any)[((o as any) + ((r as any).length as any) as any) - (1 as any)];
  if (!((a as any) === (void 0 as any) || (d as any) === (void 0 as any))) return {
    from: a,
    to: (d as any) + (1 as any),
    marks: (t as any).marks
  };
}
function Nl(this: any, t: any, e: any, n: any): any {
  const s: any = [];
  let r: any = 0;
  for (const o of n) (Ot as any)(s, t, ((e as any).slice as any)(r, (o as any).from), (jt as any).none), (Ot as any)(s, t, ((e as any).slice as any)((o as any).from, (o as any).to), (o as any).marks), r = (o as any).to;
  return (Ot as any)(s, t, ((e as any).slice as any)(r), (jt as any).none), ((zt as any).fromArray as any)(s);
}
function Ot(this: any, t: any, e: any, n: any, s: any): any {
  for (const [r, o] of ((((n as any).split as any)(`
`) as any).entries as any)()) (r as any) > (0 as any) && ((t as any).push as any)(((e as any).node as any)("hardBreak", null, (zt as any).empty, s)), ((o as any).length as any) > (0 as any) && ((t as any).push as any)(((e as any).text as any)(o, s));
}
const Ws: any = new (WeakSet as any)();
function Dt(this: any, {
  tr: t
}: any): any {
  return (_r as any)(t), !0;
}
function Hn(this: any, t: any, e: any): any {
  (e as any) == (null as any) || ((e as any).length as any) === (0 as any) || (t as any).isEmpty || (((JSON as any).stringify as any)(((t as any).getJSON as any)()) as any) !== (e as any) && ((t as any).emit as any)("update", {
    editor: t,
    transaction: ((t as any).state as any).tr,
    appendedTransactions: []
  });
}
function Ml(this: any, t: any, e: any, n: any): any {
  return (t as any) != (null as any) && ((t as any).editor as any) === (e as any) && ((t as any).slotKey as any) === (n as any);
}
function Un(this: any, t: any, e: any): any {
  return (e as any) != (null as any) && ((((t as any).view as any).dom as any).parentElement as any) === (e as any) && (((t as any).view as any).dom as any).isConnected;
}
function Al(this: any, t: any): any {
  const e: any = (((new (DOMParser as any)() as any).parseFromString as any)(t, "text/html") as any).body;
  return (((e as any).querySelector as any)("li") as any) != (null as any) && (((e as any).querySelector as any)("pre") as any) == (null as any);
}
function Gt(this: any, t: any, e: any): any {
  const n: any = (yo as any)((t as any).richText, (t as any).prompt);
  return (xl as any)(n, e) ? {
    content: (bo as any)((t as any).prompt ?? ""),
    richText: void 0
  } : {
    content: (bl as any)(n, e),
    richText: (t as any).richText
  };
}
function Ll(this: any, t: any, e: any): any {
  const n: any = (vr as any)(e, (t as any).schema);
  (((t as any).view as any).updateState as any)(((kr as any).create as any)({
    schema: (t as any).schema,
    doc: n,
    selection: ((Rr as any).atEnd as any)(n),
    plugins: ((t as any).state as any).plugins
  }));
}
function Vn(this: any, t: any, e: any, n: any, s: any): any {
  const r: any = (Sl as any)(t);
  return {
    generation: e,
    prompt: n,
    richText: s,
    extensions: r,
    content: ((Gt as any)({
      prompt: n,
      richText: s
    }, (Sr as any)(r)) as any).content
  };
}
function Pl(this: any, t: any): any {
  const e: any = ((z as any).c as any)(128),
    {
      fieldClassName: n,
      fieldLabel: s,
      isAutoFocusDisabled: r,
      isGroupChat: o,
      isRichTextEnabled: i,
      initialPrompt: l,
      initialRichText: a,
      slotKey: d,
      getMentionMembers: c,
      getMentionPeople: u,
      getSkills: f,
      getAppActions: h,
      getPrReferences: m,
      getMcpReferences: _,
      resolveSkillIcon: b,
      getPlaceholder: y,
      editorRef: p,
      bindings: w,
      onPromptChange: j,
      onFieldLayoutChange: M,
      onFieldCleared: x,
      consumeAutoFocusSuppression: v,
      takeHandoverFocus: A,
      registerControls: N
    }: any = t,
    C: any = (u as any) === (void 0 as any) ? Ul : u,
    {
      _: k
    }: any = (ce as any)();
  let I: any;
  ((e as any)[0] as any) !== (w as any) ? (I = (): any => w, (e as any)[0] = w, (e as any)[1] = I) : I = (e as any)[1];
  const E: any = (J as any)(I),
    L: any = ((O as any).useRef as any)(null),
    S: any = ((O as any).useRef as any)(!1),
    [D, V]: any = ((O as any).useState as any)(null),
    {
      uiState: $
    }: any = (Kr as any)(),
    q: any = (Gr as any)("at");
  let H: any;
  ((e as any)[2] as any) !== ((q as any).isHidden as any) ? (H = (): any => !(q as any).isHidden, (e as any)[2] = (q as any).isHidden, (e as any)[3] = H) : H = (e as any)[3];
  const B: any = (J as any)(H),
    X: any = (Br as any)();
  let Y: any;
  ((e as any)[4] as any) !== (X as any) ? (Y = (): any => {
    for (const P of cn) (X as any)(((Fr as any)[P] as any).gate);
    return (X as any)("sand_rich_text"), Hl;
  }, (e as any)[4] = X, (e as any)[5] = Y) : Y = (e as any)[5], (on as any)(Y);
  const Z: any = (zr as any)();
  let le: any;
  ((e as any)[6] as any) !== ((q as any).isExperimentStarted as any) ? (le = {
    at: (q as any).isExperimentStarted
  }, (e as any)[6] = (q as any).isExperimentStarted, (e as any)[7] = le) : le = (e as any)[7];
  const Ce: any = le;
  let je: any;
  ((e as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (je = new (Set as any)(), (e as any)[8] = je) : je = (e as any)[8];
  const nn: any = ((O as any).useRef as any)(je);
  let $e: any;
  ((e as any)[9] as any) !== (Z as any) || ((e as any)[10] as any) !== (Ce as any) ? ($e = (): any => {
    for (const P of cn) (Ce as any)[P] && ((((nn as any).current as any).has as any)(P) || ((((nn as any).current as any).add as any)(P), (Z as any)(P)));
    return $l;
  }, (e as any)[9] = Z, (e as any)[10] = Ce, (e as any)[11] = $e) : $e = (e as any)[11], (on as any)($e);
  let He: any;
  ((e as any)[12] as any) !== (($ as any).mentionRecents as any) ? (He = (): any => ((($ as any).mentionRecents as any).get as any)(), (e as any)[12] = ($ as any).mentionRecents, (e as any)[13] = He) : He = (e as any)[13];
  const mt: any = He,
    gt: any = ($ as any).recordMentionRecent;
  let Ue: any;
  ((e as any)[14] as any) !== (($ as any).emojiRecents as any) ? (Ue = (): any => ((($ as any).emojiRecents as any).get as any)(), (e as any)[14] = ($ as any).emojiRecents, (e as any)[15] = Ue) : Ue = (e as any)[15];
  const yt: any = Ue,
    bt: any = ($ as any).recordEmojiRecent,
    xt: any = (J as any)(c),
    St: any = (J as any)(C),
    fe: any = (J as any)(f),
    Et: any = (J as any)(h),
    vt: any = (J as any)(m),
    kt: any = (J as any)(_),
    pe: any = (J as any)(b);
  let Ve: any;
  ((e as any)[16] as any) !== (o as any) ? (Ve = (): any => o, (e as any)[16] = o, (e as any)[17] = Ve) : Ve = (e as any)[17];
  const Rt: any = (J as any)(Ve);
  let qe: any;
  ((e as any)[18] as any) !== (fe as any) ? (qe = (): any => (((fe as any)() as any).filter as any)(jl), (e as any)[18] = fe, (e as any)[19] = qe) : qe = (e as any)[19];
  const _t: any = qe;
  let Ke: any;
  ((e as any)[20] as any) !== (p as any) ? (Ke = (): any => (se as any)((p as any).current)?.view.dom ?? null, (e as any)[20] = p, (e as any)[21] = Ke) : Ke = (e as any)[21];
  const It: any = (J as any)(Ke);
  let Ge: any;
  ((e as any)[22] as any) !== (It as any) ? (Ge = (): any => (ri as any)(It), (e as any)[22] = It, (e as any)[23] = Ge) : Ge = (e as any)[23];
  const [R]: any = ((O as any).useState as any)(Ge);
  let he: any;
  ((e as any)[24] as any) !== (mt as any) || ((e as any)[25] as any) !== (Rt as any) || ((e as any)[26] as any) !== (B as any) || ((e as any)[27] as any) !== (kt as any) || ((e as any)[28] as any) !== (xt as any) || ((e as any)[29] as any) !== (St as any) || ((e as any)[30] as any) !== (pe as any) || ((e as any)[31] as any) !== (fe as any) || ((e as any)[32] as any) !== (gt as any) || ((e as any)[33] as any) !== (((R as any).mention as any).onListboxChange as any) || ((e as any)[34] as any) !== (((R as any).mention as any).onOpenChange as any) || ((e as any)[35] as any) !== (((R as any).mention as any).onVisibleChange as any) || ((e as any)[36] as any) !== ((R as any).onReportExpected as any) || ((e as any)[37] as any) !== ((R as any).onReportSettled as any) ? (he = {
    getMembers: xt,
    getPeople: St,
    getSkills: fe,
    getMcpReferences: kt,
    getRecents: mt,
    recordRecent: gt,
    resolveSkillIcon: pe,
    onOpenChange: ((R as any).mention as any).onOpenChange,
    onVisibleChange: ((R as any).mention as any).onVisibleChange,
    onListboxChange: ((R as any).mention as any).onListboxChange,
    onReportExpected: (R as any).onReportExpected,
    onReportSettled: (R as any).onReportSettled,
    allowEveryone: Rt,
    isEnabled: B
  }, (e as any)[24] = mt, (e as any)[25] = Rt, (e as any)[26] = B, (e as any)[27] = kt, (e as any)[28] = xt, (e as any)[29] = St, (e as any)[30] = pe, (e as any)[31] = fe, (e as any)[32] = gt, (e as any)[33] = ((R as any).mention as any).onListboxChange, (e as any)[34] = ((R as any).mention as any).onOpenChange, (e as any)[35] = ((R as any).mention as any).onVisibleChange, (e as any)[36] = (R as any).onReportExpected, (e as any)[37] = (R as any).onReportSettled, (e as any)[38] = he) : he = (e as any)[38];
  let Be: any;
  ((e as any)[39] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Be = ["/"], (e as any)[39] = Be) : Be = (e as any)[39];
  let me: any;
  ((e as any)[40] as any) !== (Et as any) || ((e as any)[41] as any) !== (pe as any) || ((e as any)[42] as any) !== (_t as any) || ((e as any)[43] as any) !== ((R as any).onReportExpected as any) || ((e as any)[44] as any) !== ((R as any).onReportSettled as any) || ((e as any)[45] as any) !== (((R as any).skill as any).onListboxChange as any) || ((e as any)[46] as any) !== (((R as any).skill as any).onOpenChange as any) || ((e as any)[47] as any) !== (((R as any).skill as any).onVisibleChange as any) ? (me = {
    getSkills: _t,
    getActions: Et,
    resolveSkillIcon: pe,
    onOpenChange: ((R as any).skill as any).onOpenChange,
    onVisibleChange: ((R as any).skill as any).onVisibleChange,
    onListboxChange: ((R as any).skill as any).onListboxChange,
    onReportExpected: (R as any).onReportExpected,
    onReportSettled: (R as any).onReportSettled,
    triggers: Be
  }, (e as any)[40] = Et, (e as any)[41] = pe, (e as any)[42] = _t, (e as any)[43] = (R as any).onReportExpected, (e as any)[44] = (R as any).onReportSettled, (e as any)[45] = ((R as any).skill as any).onListboxChange, (e as any)[46] = ((R as any).skill as any).onOpenChange, (e as any)[47] = ((R as any).skill as any).onVisibleChange, (e as any)[48] = me) : me = (e as any)[48];
  let ge: any;
  ((e as any)[49] as any) !== (yt as any) || ((e as any)[50] as any) !== (bt as any) || ((e as any)[51] as any) !== (((R as any).emoji as any).onListboxChange as any) || ((e as any)[52] as any) !== (((R as any).emoji as any).onOpenChange as any) || ((e as any)[53] as any) !== ((R as any).onReportExpected as any) || ((e as any)[54] as any) !== ((R as any).onReportSettled as any) ? (ge = {
    onOpenChange: ((R as any).emoji as any).onOpenChange,
    onListboxChange: ((R as any).emoji as any).onListboxChange,
    onReportExpected: (R as any).onReportExpected,
    onReportSettled: (R as any).onReportSettled,
    getRecents: yt,
    recordRecent: bt
  }, (e as any)[49] = yt, (e as any)[50] = bt, (e as any)[51] = ((R as any).emoji as any).onListboxChange, (e as any)[52] = ((R as any).emoji as any).onOpenChange, (e as any)[53] = (R as any).onReportExpected, (e as any)[54] = (R as any).onReportSettled, (e as any)[55] = ge) : ge = (e as any)[55];
  let ye: any;
  ((e as any)[56] as any) !== (vt as any) || ((e as any)[57] as any) !== (((R as any).hash as any).onListboxChange as any) || ((e as any)[58] as any) !== (((R as any).hash as any).onOpenChange as any) || ((e as any)[59] as any) !== ((R as any).onReportExpected as any) || ((e as any)[60] as any) !== ((R as any).onReportSettled as any) ? (ye = {
    getCandidates: vt,
    onOpenChange: ((R as any).hash as any).onOpenChange,
    onListboxChange: ((R as any).hash as any).onListboxChange,
    onReportExpected: (R as any).onReportExpected,
    onReportSettled: (R as any).onReportSettled
  }, (e as any)[56] = vt, (e as any)[57] = ((R as any).hash as any).onListboxChange, (e as any)[58] = ((R as any).hash as any).onOpenChange, (e as any)[59] = (R as any).onReportExpected, (e as any)[60] = (R as any).onReportSettled, (e as any)[61] = ye) : ye = (e as any)[61];
  let ze: any;
  ((e as any)[62] as any) !== (y as any) || ((e as any)[63] as any) !== (i as any) || ((e as any)[64] as any) !== (he as any) || ((e as any)[65] as any) !== (me as any) || ((e as any)[66] as any) !== (ge as any) || ((e as any)[67] as any) !== (ye as any) ? (ze = {
    surface: "prompt",
    isRichTextEnabled: i,
    placeholder: y,
    mention: he,
    skill: me,
    emoji: ge,
    prReference: ye
  }, (e as any)[62] = y, (e as any)[63] = i, (e as any)[64] = he, (e as any)[65] = me, (e as any)[66] = ge, (e as any)[67] = ye, (e as any)[68] = ze) : ze = (e as any)[68];
  const Fe: any = ze,
    [Te, Xs]: any = ((O as any).useState as any)(0);
  let We: any;
  ((e as any)[69] as any) !== (Te as any) || ((e as any)[70] as any) !== (Fe as any) || ((e as any)[71] as any) !== (l as any) || ((e as any)[72] as any) !== (a as any) ? (We = (): any => (Vn as any)(Fe, Te, l, a), (e as any)[69] = Te, (e as any)[70] = Fe, (e as any)[71] = l, (e as any)[72] = a, (e as any)[73] = We) : We = (e as any)[73];
  const [te, Qs]: any = ((O as any).useState as any)(We);
  let be: any;
  ((e as any)[74] as any) !== (k as any) || ((e as any)[75] as any) !== (s as any) ? (be = s ?? (k as any)({
    id: "W9uQXX"
  }), (e as any)[74] = k, (e as any)[75] = s, (e as any)[76] = be) : be = (e as any)[76];
  let xe: any;
  ((e as any)[77] as any) !== (n as any) || ((e as any)[78] as any) !== (be as any) ? (xe = {
    class: n,
    spellcheck: "true",
    "aria-label": be,
    "aria-multiline": "true",
    role: "textbox"
  }, (e as any)[77] = n, (e as any)[78] = be, (e as any)[79] = xe) : xe = (e as any)[79];
  let Se: any;
  ((e as any)[80] as any) !== (p as any) || ((e as any)[81] as any) !== (E as any) || ((e as any)[82] as any) !== (R as any) ? (Se = (P: any, T: any): any => (Wr as any)(T) ? (((T as any).preventDefault as any)(), (T as any).repeat || (Xr as any)((U: any): any => {
    ((P as any).dom as any).isConnected && (Jr as any)(P, U);
  }, (U: any): any => {
    (((E as any)() as any).onStageFiles as any)([U]);
  }, (): any => ((se as any)((p as any).current)?.view as any) === (P as any) && ((P as any).dom as any).isConnected), !0) : ((R as any).isAnyMenuOpen as any)() && (((T as any).key as any) === ("Enter" as any) || ((T as any).key as any) === ("Tab" as any) || ((T as any).key as any) === ("Escape" as any) || ((T as any).key as any) === ("ArrowUp" as any) || ((T as any).key as any) === ("ArrowDown" as any)) || ((T as any).key as any) === ("Escape" as any) && ((R as any).isAnyMenuVisible as any)() ? !1 : ((T as any).key as any) === ("Tab" as any) && !(T as any).isComposing && (kn as any)((P as any).state) ? (((T as any).preventDefault as any)(), (((T as any).shiftKey ? Ri : ki) as any)((P as any).state, (P as any).dispatch), !0) : ((T as any).key as any) === ("Tab" as any) && !(T as any).shiftKey && !(T as any).isComposing ? (((T as any).preventDefault as any)(), (wn as any)(P, {
    kind: "tab"
  }) || ((P as any).dispatch as any)(((((((P as any).state as any).tr as any).insertText as any)("	") as any).scrollIntoView as any)()), !0) : ((T as any).key as any) === ("Enter" as any) && (T as any).shiftKey && !(T as any).metaKey && !(T as any).ctrlKey && !(T as any).isComposing && (kn as any)((P as any).state) ? (((T as any).preventDefault as any)(), (vi as any)((P as any).state, (P as any).dispatch), !0) : ((T as any).key as any) === ("Enter" as any) && !(T as any).shiftKey && !(T as any).isComposing ? (((T as any).preventDefault as any)(), (T as any).repeat || (((E as any)() as any).isVoiceSessionActive ? (((E as any)() as any).onVoiceEnterKey as any)() : (wn as any)(P, {
    kind: "enter",
    submit: (): any => {
      const {
        doc: U,
        schema: K
      }: any = (P as any).state;
      (((E as any)() as any).onSubmit as any)({
        prompt: (Pt as any)(U, K),
        richText: (Bn as any)(U) ? void 0 : ((JSON as any).stringify as any)(((U as any).toJSON as any)())
      });
    }
  }) || (((E as any)() as any).onSubmit as any)()), !0) : ((T as any).key as any) === ("Escape" as any) && !(T as any).isComposing ? (((T as any).preventDefault as any)(), ((E as any)() as any).isVoiceSessionActive ? ((((E as any)() as any).cancelVoiceAndRefocus as any)(), !0) : ((((E as any)() as any).cancelReply as any)() || (((P as any).dom as any).blur as any)(), !0)) : !1, (e as any)[80] = p, (e as any)[81] = E, (e as any)[82] = R, (e as any)[83] = Se) : Se = (e as any)[83];
  let Ee: any;
  ((e as any)[84] as any) !== (i as any) || ((e as any)[85] as any) !== (E as any) ? (Ee = (P: any, T: any, U: any): any => {
    const K: any = (Qr as any)((T as any).clipboardData);
    if (((K as any).length as any) > (0 as any)) return ((T as any).preventDefault as any)(), (((E as any)() as any).onStageFiles as any)(K), !0;
    const ne: any = (T as any).clipboardData?.getData("text/plain") ?? "",
      Ne: any = (Yr as any)(ne);
    if ((Ne as any) != (null as any)) return ((T as any).preventDefault as any)(), (((E as any)() as any).onStageFiles as any)([Ne]), !0;
    const sn: any = (T as any).clipboardData?.getData("text/html") ?? "";
    if (!((ne as any).includes as any)(`
`) || ((sn as any).includes as any)("data-pm-slice") || i && (Al as any)(sn)) return !1;
    ((T as any).preventDefault as any)();
    const Zs: any = ((Ws as any).has as any)(U) ? (U as any).content : (zt as any).empty;
    return ((P as any).dispatch as any)(((((((P as any).state as any).tr as any).replaceSelection as any)(new (Er as any)((kl as any)(((P as any).state as any).schema, ne, Zs), 0, 0)) as any).scrollIntoView as any)()), !0;
  }, (e as any)[84] = i, (e as any)[85] = E, (e as any)[86] = Ee) : Ee = (e as any)[86];
  let ve: any;
  ((e as any)[87] as any) !== (xe as any) || ((e as any)[88] as any) !== (Se as any) || ((e as any)[89] as any) !== (Ee as any) ? (ve = {
    attributes: xe,
    handleKeyDown: Se,
    transformPasted: Dl,
    handlePaste: Ee
  }, (e as any)[87] = xe, (e as any)[88] = Se, (e as any)[89] = Ee, (e as any)[90] = ve) : ve = (e as any)[90];
  let ke: any;
  ((e as any)[91] as any) !== (M as any) ? (ke = (): any => {
    (M as any)();
  }, (e as any)[91] = M, (e as any)[92] = ke) : ke = (e as any)[92];
  let Re: any;
  ((e as any)[93] as any) !== (p as any) || ((e as any)[94] as any) !== (M as any) || ((e as any)[95] as any) !== (j as any) || ((e as any)[96] as any) !== (E as any) ? (Re = (P: any): any => {
    const {
      editor: T
    }: any = P;
    (((E as any)() as any).dismissVoiceError as any)();
    const U: any = ((T as any).state as any).doc,
      K: any = (Pt as any)(U, (T as any).schema),
      ne: any = (T as any).isEmpty ? void 0 : ((JSON as any).stringify as any)(((T as any).getJSON as any)());
    (j as any)(K, ne);
    const Ne: any = (se as any)((p as any).current);
    (M as any)({
      plainText: (Ne as any) === (T as any) && (((Ne as any).state as any).doc as any) === (U as any) ? K : void 0
    });
  }, (e as any)[93] = p, (e as any)[94] = M, (e as any)[95] = j, (e as any)[96] = E, (e as any)[97] = Re) : Re = (e as any)[97];
  let Xe: any;
  ((e as any)[98] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Xe = (): any => {
    (Xs as any)(Ol);
  }, (e as any)[98] = Xe) : Xe = (e as any)[98];
  let Qe: any;
  ((e as any)[99] as any) !== ((te as any).content as any) || ((e as any)[100] as any) !== ((te as any).extensions as any) || ((e as any)[101] as any) !== (ve as any) || ((e as any)[102] as any) !== (ke as any) || ((e as any)[103] as any) !== (Re as any) ? (Qe = {
    extensions: (te as any).extensions,
    content: (te as any).content,
    editorProps: ve,
    onCreate: ke,
    onUpdate: Re,
    onDestroy: Xe
  }, (e as any)[99] = (te as any).content, (e as any)[100] = (te as any).extensions, (e as any)[101] = ve, (e as any)[102] = ke, (e as any)[103] = Re, (e as any)[104] = Qe) : Qe = (e as any)[104];
  let Ye: any;
  ((e as any)[105] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Ye = [], (e as any)[105] = Ye) : Ye = (e as any)[105];
  const ee: any = (Ao as any)(Qe, Ye),
    Ys: any = ((te as any).generation as any) !== (Te as any),
    Js: any = ((te as any).prompt as any) !== (l as any) || ((te as any).richText as any) !== (a as any);
  (ee as any) == (null as any) && (Ys || Js) && (Qs as any)((Vn as any)(Fe, Te, l, a));
  let Je: any;
  ((e as any)[106] as any) !== (v as any) || ((e as any)[107] as any) !== (ee as any) || ((e as any)[108] as any) !== (D as any) || ((e as any)[109] as any) !== (l as any) || ((e as any)[110] as any) !== (a as any) || ((e as any)[111] as any) !== (r as any) || ((e as any)[112] as any) !== (x as any) || ((e as any)[113] as any) !== (M as any) || ((e as any)[114] as any) !== (d as any) || ((e as any)[115] as any) !== (A as any) ? (Je = (): any => {
    const P: any = (se as any)(ee);
    if ((P as any) == (null as any) || !(Un as any)(P, D)) return;
    if (!(Ml as any)((L as any).current, P, d)) {
      const U: any = (Gt as any)({
        prompt: l,
        richText: a
      }, (P as any).schema);
      ((L as any).current?.editor as any) === (P as any) && ((Ll as any)(P, (U as any).content), (x as any)()), (L as any).current = {
        editor: P,
        slotKey: d
      }, (S as any).current = !0, (Hn as any)(P, (U as any).richText), (M as any)();
    }
    if (!(S as any).current) return;
    const T: any = (A?.() as any) === (!0 as any);
    !T && r || ((S as any).current = !1, !(!T && (v?.() as any) === (!0 as any)) && ((((P as any).commands as any).setTextSelection as any)(((((P as any).state as any).doc as any).content as any).size), (((P as any).view as any).focus as any)()));
  }, (e as any)[106] = v, (e as any)[107] = ee, (e as any)[108] = D, (e as any)[109] = l, (e as any)[110] = a, (e as any)[111] = r, (e as any)[112] = x, (e as any)[113] = M, (e as any)[114] = d, (e as any)[115] = A, (e as any)[116] = Je) : Je = (e as any)[116], (Pe as any)(Je);
  let Ze: any;
  ((e as any)[117] as any) !== (ee as any) || ((e as any)[118] as any) !== (D as any) || ((e as any)[119] as any) !== (p as any) || ((e as any)[120] as any) !== (x as any) || ((e as any)[121] as any) !== (M as any) || ((e as any)[122] as any) !== (E as any) || ((e as any)[123] as any) !== (N as any) ? (Ze = (P: any): any => {
    if ((P as any) == (null as any)) {
      N?.(null), (p as any).current = null;
      return;
    }
    const T: any = (se as any)(ee);
    if ((T as any) == (null as any) || !(Un as any)(T, D)) {
      N?.(null), (p as any).current = null;
      return;
    }
    (p as any).current = T, (M as any)(), N?.({
      focus: (): any => {
        const U: any = (se as any)((p as any).current);
        (U as any) != (null as any) && ((((U as any).commands as any).setTextSelection as any)(((((U as any).state as any).doc as any).content as any).size), (((U as any).view as any).focus as any)());
      },
      isVoiceSessionActive: (): any => ((E as any)() as any).isVoiceSessionActive,
      clearConsumed: (U: any): any => {
        const K: any = (se as any)((p as any).current);
        (K as any) == (null as any) || ((((Pt as any)(((K as any).state as any).doc, (K as any).schema) as any).trim as any)() as any) !== ((((U as any).prompt as any).trim as any)() as any) || ((((E as any)() as any).cancelVoiceSession as any)(), ((((((((((K as any).chain as any)() as any).command as any)(Dt) as any).clearContent as any)(!1) as any).focus as any)("end") as any).run as any)(), (((K as any).view as any).focus as any)(), (x as any)());
      },
      restore: (U: any): any => {
        const K: any = (se as any)((p as any).current);
        if ((K as any) == (null as any)) return;
        const ne: any = (Gt as any)(U, (K as any).schema);
        ((((((((((K as any).chain as any)() as any).command as any)(Dt) as any).setContent as any)((ne as any).content, {
          emitUpdate: !1
        }) as any).focus as any)("end") as any).run as any)(), (Hn as any)(K, (ne as any).richText), (M as any)();
      },
      insertQuote: (U: any): any => {
        const K: any = (se as any)((p as any).current);
        return (K as any) == (null as any) ? !1 : ((((((((((K as any).chain as any)() as any).command as any)(Dt) as any).focus as any)() as any).insertContent as any)([{
          type: es,
          attrs: {
            quote: U
          }
        }, {
          type: "text",
          text: " "
        }]) as any).run as any)();
      }
    });
  }, (e as any)[117] = ee, (e as any)[118] = D, (e as any)[119] = p, (e as any)[120] = x, (e as any)[121] = M, (e as any)[122] = E, (e as any)[123] = N, (e as any)[124] = Ze) : Ze = (e as any)[124];
  const wt: any = Ze;
  let et: any;
  return ((e as any)[125] as any) !== (wt as any) || ((e as any)[126] as any) !== (ee as any) ? (et = {
    editor: ee,
    attachEditorHost: V,
    attachEditorLifecycle: wt
  }, (e as any)[125] = wt, (e as any)[126] = ee, (e as any)[127] = et) : et = (e as any)[127], et;
}
function Ol(this: any, t: any): any {
  return (t as any) + (1 as any);
}
function Dl(this: any, t: any, e: any, n: any): any {
  return n || ((Ws as any).add as any)(t), t;
}
function jl(this: any, t: any): any {
  return ((t as any).trigger as any) == (null as any);
}
function $l(this: any): any {}
function Hl(this: any): any {}
function Ul(this: any): any {
  return [];
}
function Vl(this: any, t: any): any {
  (Vl as any).d = 380;
  const e: any = ((z as any).c as any)(18);
  let n: any, s: any, r: any;
  ((e as any)[0] as any) !== (t as any) ? ({
    hostClassName: n,
    hostStyle: s,
    ...r
  } = t, (e as any)[0] = t, (e as any)[1] = n, (e as any)[2] = s, (e as any)[3] = r) : (n = (e as any)[1], s = (e as any)[2], r = (e as any)[3]);
  const {
    editor: o,
    attachEditorHost: i,
    attachEditorLifecycle: l
  }: any = (Pl as any)(r);
  let a: any;
  ((e as any)[4] as any) !== (o as any) ? (a = (ol as any)(o), (e as any)[4] = o, (e as any)[5] = a) : a = (e as any)[5];
  const d: any = a,
    c: any = ((O as any).useSyncExternalStore as any)((d as any).subscribe, (d as any).get, (d as any).get);
  let u: any;
  ((e as any)[6] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (u = {
    display: "none"
  }, (e as any)[6] = u) : u = (e as any)[6];
  let f: any;
  ((e as any)[7] as any) !== (l as any) ? (f = ((g as any).jsx as any)("span", {
    "aria-hidden": !0,
    ref: l,
    style: u
  }), (e as any)[7] = l, (e as any)[8] = f) : f = (e as any)[8];
  let h: any;
  ((e as any)[9] as any) !== (i as any) || ((e as any)[10] as any) !== (c as any) || ((e as any)[11] as any) !== (o as any) || ((e as any)[12] as any) !== (n as any) || ((e as any)[13] as any) !== (s as any) ? (h = ((g as any).jsx as any)(Io, {
    className: n,
    dir: c,
    editor: o,
    ref: i,
    style: s
  }), (e as any)[9] = i, (e as any)[10] = c, (e as any)[11] = o, (e as any)[12] = n, (e as any)[13] = s, (e as any)[14] = h) : h = (e as any)[14];
  let m: any;
  return ((e as any)[15] as any) !== (f as any) || ((e as any)[16] as any) !== (h as any) ? (m = ((g as any).jsxs as any)((g as any).Fragment, {
    children: [f, h]
  }), (e as any)[15] = f, (e as any)[16] = h, (e as any)[17] = m) : m = (e as any)[17], m;
}
export { Vl as PromptEditor };
//# debugId=2df56833-7463-4d74-ac83-17aeed12cb26
