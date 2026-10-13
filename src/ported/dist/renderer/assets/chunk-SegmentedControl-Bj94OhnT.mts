declare var ResizeObserver: any;
declare var global: any;
declare var queueMicrotask: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "cf9c4f44-1d2d-4f75-bd97-14322ab3ad5e", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-cf9c4f44-1d2d-4f75-bd97-14322ab3ad5e");
  } catch (e: any) {}
} as any)();
import { r as i, a5 as Yt, a6 as Ft, a7 as bt, a8 as Vt, a9 as Y, aa as pt, ab as mt, ac as st, ad as at, ae as X, af as Zt, ag as Ut, ah as vt, ai as xt, aj as Gt, ak as Xt, al as Jt, am as Qt, an as te, ao as Rt, ap as kt, aq as rt, ar as ut, as as ee, at as ne, au as ie, av as oe, aw as se, ax as lt, ay as ae, az as re, a0 as nt, j as N, aA as ue, aB as $t, X as Pt, Z as ce, a2 as dt, aC as yt, aD as It, aE as le, Y as de, aF as fe, aG as he, aH as Et, aI as ge, $ as be, a3 as Tt, aJ as pe, aK as me, aL as ve, p as ft } from "./index.eager-vendor-Qbf9YA6n.js";
import { bg as xe, bh as Re, bd as ke, bi as ct, bj as ye, bk as Ie, bl as Ee } from "./index.eager-platform-Dcfeegfw.js";
function Te(this: any): any {
  const [, e]: any = ((i as any).useState as any)({});
  return ((i as any).useCallback as any)((): any => {
    (e as any)({});
  }, []);
}
function St(this: any, e: any): any {
  const a: any = (Yt as any)(e);
  let u: any = (parseFloat as any)((a as any).width) || 0,
    g: any = (parseFloat as any)((a as any).height) || 0;
  const n: any = (Ft as any)(e),
    f: any = n ? (e as any).offsetWidth : u,
    r: any = n ? (e as any).offsetHeight : g;
  return (((bt as any)(u) as any) !== (f as any) || ((bt as any)(g) as any) !== (r as any)) && (u = f, g = r), {
    width: u,
    height: g
  };
}
const At: string = "data-composite-item-active",
  Se: any = [];
function Ce(this: any, e: any): any {
  const {
      loopFocus: a = !0,
      orientation: u = "both",
      grid: g,
      onLoop: n,
      direction: f,
      highlightedIndex: r,
      onHighlightedIndexChange: y,
      rootRef: C,
      enableHomeAndEndKeys: T = !1,
      stopEventPropagation: S = !1,
      disabledIndices: m,
      modifierKeys: O = Se
    }: any = e,
    [I, z]: any = ((i as any).useState as any)(0),
    c: any = (g as any) != (null as any),
    x: any = ((i as any).useRef as any)(null),
    M: any = (Vt as any)(x, C),
    s: any = ((i as any).useRef as any)([]),
    R: any = ((i as any).useRef as any)(!1),
    h: any = r ?? I,
    p: any = (Y as any)((t: any, o: any = !1): any => {
      if (((y ?? z) as any)(t), o) {
        const l: any = ((s as any).current as any)[t];
        (pt as any)((x as any).current, l, f, u);
      }
    }),
    w: any = (Y as any)((t: any): any => {
      if (((t as any).size as any) === (0 as any) || (R as any).current) return;
      (R as any).current = !0;
      const o: any = ((Array as any).from as any)(((t as any).keys as any)()),
        l: any = ((o as any).find as any)((k: any): any => k?.hasAttribute(At)) ?? null,
        H: any = l ? ((o as any).indexOf as any)(l) : -1;
      if ((H as any) !== (-1 as any)) (p as any)(H);else if ((mt as any)(o, h, m)) {
        const k: any = (st as any)(o, {
          disabledIndices: m
        });
        (at as any)(o, k) || (p as any)(k);
      }
      (pt as any)((x as any).current, l, f, u);
    });
  (X as any)((): any => {
    if ((m as any) == (null as any) || (r as any) != (null as any) || !(R as any).current) return;
    const t: any = (s as any).current;
    if ((mt as any)(t, h, m)) {
      const o: any = (st as any)(t, {
        disabledIndices: m
      });
      (at as any)(t, o) || (p as any)(o);
    }
  }, [m, r, h, s, p]);
  const $: any = (Y as any)((t: any, o: any, l: any): any => n ? (n as any)(t, o, l, s) : l),
    L: any = (Y as any)((t: any): any => {
      const o: any = T ? Zt : Ut;
      if (!((o as any).has as any)((t as any).key) || (Me as any)(t, O) || !(x as any).current) return;
      const H: any = (f as any) === ("rtl" as any),
        k: any = H ? Rt : kt,
        B: any = ({
          horizontal: k,
          vertical: rt,
          both: k
        } as any)[u],
        A: any = H ? kt : Rt,
        _: any = ({
          horizontal: A,
          vertical: ut,
          both: A
        } as any)[u],
        W: any = (vt as any)((t as any).nativeEvent);
      if ((W as any) != (null as any) && (xt as any)(W) && !(Gt as any)(W)) {
        const F: any = (W as any).selectionStart,
          Q: any = (W as any).selectionEnd,
          gt: any = (W as any).value ?? "";
        if ((F as any) == (null as any) || (t as any).shiftKey || (F as any) !== (Q as any) || ((t as any).key as any) !== (_ as any) && (F as any) < ((gt as any).length as any) || ((t as any).key as any) !== (B as any) && (F as any) > (0 as any)) return;
      }
      let b: any = h;
      const j: any = (Xt as any)(s, m),
        K: any = (Jt as any)(s, m);
      (g as any) != (null as any) && (b = (g as any)({
        disabledIndices: m,
        elementsRef: s,
        event: t,
        highlightedIndex: h,
        loopFocus: a,
        maxIndex: K,
        minIndex: j,
        onLoop: $,
        orientation: u,
        rtl: H
      }));
      const V: any = ({
          horizontal: [k],
          vertical: [rt],
          both: [k, rt]
        } as any)[u],
        v: any = ({
          horizontal: [A],
          vertical: [ut],
          both: [A, ut]
        } as any)[u],
        q: any = c ? o : ({
          horizontal: T ? ie : oe,
          vertical: T ? ee : ne,
          both: o
        } as any)[u];
      T && (((t as any).key as any) === (Qt as any) ? b = j : ((t as any).key as any) === (te as any) && (b = K)), (b as any) === (h as any) && (((V as any).includes as any)((t as any).key) || ((v as any).includes as any)((t as any).key)) && (a && (b as any) === (K as any) && ((V as any).includes as any)((t as any).key) ? (b = j, n && (b = (n as any)(t, h, b, s))) : a && (b as any) === (j as any) && ((v as any).includes as any)((t as any).key) ? (b = K, n && (b = (n as any)(t, h, b, s))) : b = (st as any)((s as any).current, {
        startingIndex: b,
        decrement: ((v as any).includes as any)((t as any).key),
        disabledIndices: m
      })), (b as any) !== (h as any) && !(at as any)((s as any).current, b) && (S && ((t as any).stopPropagation as any)(), ((q as any).has as any)((t as any).key) && ((t as any).preventDefault as any)(), (p as any)(b, !0), (queueMicrotask as any)((): any => {
        ((s as any).current as any)[b]?.focus();
      }));
    });
  return {
    props: {
      ref: M,
      onFocus(t: any): any {
        const o: any = (x as any).current,
          l: any = (vt as any)((t as any).nativeEvent);
        !o || (l as any) == (null as any) || !(xt as any)(l) || ((l as any).setSelectionRange as any)(0, ((l as any).value as any).length ?? 0);
      },
      onKeyDown: L
    },
    highlightedIndex: h,
    onHighlightedIndexChange: p,
    elementsRef: s,
    disabledIndices: m,
    onMapChange: w,
    relayKeyboardEvent: L
  };
}
function Me(this: any, e: any, a: any): any {
  for (const u of ((se as any).values as any)()) if (!((a as any).includes as any)(u) && ((e as any).getModifierState as any)(u)) return !0;
  return !1;
}
function wt(this: any, e: any): any {
  ((Reflect as any).set as any)(wt, "d", 350828350);
  const {
      render: a,
      className: u,
      style: g,
      refs: n = lt,
      props: f = lt,
      state: r = ae,
      stateAttributesMapping: y,
      highlightedIndex: C,
      onHighlightedIndexChange: T,
      orientation: S,
      grid: m,
      loopFocus: O,
      onLoop: I,
      enableHomeAndEndKeys: z,
      onMapChange: c,
      stopEventPropagation: x = !0,
      rootRef: M,
      disabledIndices: s,
      modifierKeys: R,
      highlightItemOnHover: h = !1,
      tag: p = "div",
      ...w
    }: any = e,
    $: any = (re as any)(),
    {
      props: L,
      highlightedIndex: P,
      onHighlightedIndexChange: t,
      elementsRef: o,
      onMapChange: l,
      relayKeyboardEvent: H
    }: any = (Ce as any)({
      grid: m,
      loopFocus: O,
      onLoop: I,
      orientation: S,
      highlightedIndex: C,
      onHighlightedIndexChange: T,
      rootRef: M,
      stopEventPropagation: x,
      enableHomeAndEndKeys: z,
      direction: $,
      disabledIndices: s,
      modifierKeys: R
    }),
    k: any = (nt as any)(p, e, {
      state: r,
      ref: n,
      props: [L, ...f, w],
      stateAttributesMapping: y
    }),
    B: any = ((i as any).useMemo as any)((): any => ({
      highlightedIndex: P,
      onHighlightedIndexChange: t,
      highlightItemOnHover: h,
      relayKeyboardEvent: H
    }), [P, t, h, H]);
  return ((N as any).jsx as any)((ue as any).Provider, {
    value: B,
    children: ((N as any).jsx as any)($t, {
      elementsRef: o,
      onMapChange: (A: any): any => {
        c?.(A), (l as any)(A);
      },
      children: k
    })
  });
}
const Lt: any = ((i as any).createContext as any)(void 0);
function ht(this: any): any {
  const e: any = ((i as any).useContext as any)(Lt);
  if ((e as any) === (void 0 as any)) throw new (Error as any)((Pt as any)(64));
  return e;
}
let $e: any = (function (this: any, e: any): any {
  return (e as any).activationDirection = "data-activation-direction", (e as any).orientation = "data-orientation", e;
} as any)({});
const it: any = {
    tabActivationDirection: (e: any): any => ({
      [($e as any).activationDirection]: e
    })
  },
  Ht: any = ((i as any).forwardRef as any)(function (this: any, a: any, u: any): any {
    ((Reflect as any).set as any)(Ht, "d", 1579082553);
    const {
        className: g,
        defaultValue: n = 0,
        onValueChange: f,
        orientation: r = "horizontal",
        render: y,
        value: C,
        style: T,
        ...S
      }: any = a,
      m: any = ((a as any).defaultValue as any) !== (void 0 as any),
      O: any = ((i as any).useRef as any)([]),
      [I, z]: any = ((i as any).useState as any)((): any => new (Map as any)()),
      [c, x]: any = (ce as any)({
        controlled: C,
        default: n,
        name: "Tabs",
        state: "value"
      }),
      M: any = (C as any) !== (void 0 as any),
      [s, R]: any = ((i as any).useState as any)((): any => new (Map as any)()),
      h: any = ((i as any).useRef as any)(void 0),
      p: any = ((i as any).useCallback as any)((d: any): any => {
        if ((d as any) === (void 0 as any)) return null;
        for (const [E, D] of ((s as any).entries as any)()) if ((D as any) != (null as any) && (d as any) === (((D as any).value ?? (D as any).index) as any)) return E;
        return null;
      }, [s]),
      [w, $]: any = ((i as any).useState as any)((): any => ({
        previousValue: c,
        tabActivationDirection: "none"
      })),
      {
        previousValue: L,
        tabActivationDirection: P
      }: any = w;
    let t: any = P,
      o: any = !1;
    (L as any) !== (c as any) && (t = (Ct as any)(L, c, r, s), o = (L as any) != (null as any) && (c as any) != (null as any) && ((p as any)(c) as any) == (null as any));
    const l: any = o ? L : c,
      H: any = (L as any) !== (l as any) || (P as any) !== (t as any);
    (X as any)((): any => {
      H && ($ as any)({
        previousValue: l,
        tabActivationDirection: t
      });
    }, [l, H, t]);
    const k: any = (Y as any)((d: any, E: any): any => {
        const D: any = (Ct as any)(c, d, r, s);
        (E as any).activationDirection = D, f?.(d, E), !(E as any).isCanceled && (x as any)(d);
      }),
      B: any = (Y as any)((d: any, E: any): any => {
        f?.(d, (dt as any)(E, void 0, void 0, {
          activationDirection: "none"
        }));
      }),
      A: any = (Y as any)((d: any, E: any): any => {
        (z as any)((D: any): any => {
          if ((((D as any).get as any)(d) as any) === (E as any)) return D;
          const Z: any = new (Map as any)(D);
          return ((Z as any).set as any)(d, E), Z;
        });
      }),
      _: any = (Y as any)((d: any, E: any): any => {
        (z as any)((D: any): any => {
          if (!((D as any).has as any)(d) || (((D as any).get as any)(d) as any) !== (E as any)) return D;
          const Z: any = new (Map as any)(D);
          return ((Z as any).delete as any)(d), Z;
        });
      }),
      W: any = ((i as any).useCallback as any)((d: any): any => ((I as any).get as any)(d), [I]),
      b: any = ((i as any).useCallback as any)((d: any): any => {
        for (const E of ((s as any).values as any)()) if ((d as any) === (E?.value as any)) return E?.id;
      }, [s]),
      j: any = ((i as any).useMemo as any)((): any => ({
        getTabElementBySelectedValue: p,
        getTabIdByPanelValue: b,
        getTabPanelIdByValue: W,
        onValueChange: k,
        orientation: r,
        registerMountedTabPanel: A,
        setTabMap: R,
        unregisterMountedTabPanel: _,
        tabActivationDirection: t,
        value: c
      }), [p, b, W, k, r, A, R, _, t, c]),
      K: any = ((i as any).useMemo as any)((): any => {
        for (const d of ((s as any).values as any)()) if ((d as any) != (null as any) && ((d as any).value as any) === (c as any)) return d;
      }, [s, c]),
      V: any = ((i as any).useMemo as any)((): any => {
        for (const d of ((s as any).values as any)()) if ((d as any) != (null as any) && !(d as any).disabled) return (d as any).value;
      }, [s]),
      v: any = ((i as any).useRef as any)(!m),
      q: any = ((i as any).useRef as any)(n),
      F: any = ((i as any).useRef as any)(m),
      Q: any = ((i as any).useRef as any)(!1);
    (X as any)((): any => {
      if (M) return;
      function d(this: any, U: any, J: any): any {
        (x as any)(U), ($ as any)((ot: any): any => ((ot as any).previousValue as any) === (U as any) && ((ot as any).tabActivationDirection as any) === ("none" as any) ? ot : {
          previousValue: U,
          tabActivationDirection: "none"
        }), (B as any)(U, J), (v as any).current = !1;
      }
      if (((s as any).size as any) === (0 as any)) {
        (Q as any).current && (c as any) !== (null as any) && !(h as any).current?.isConnected && (d as any)(null, It);
        return;
      }
      (Q as any).current = !0, (h as any).current = (((((s as any).keys as any)() as any).next as any)() as any).value;
      const E: any = K?.disabled,
        D: any = (K as any) == (null as any) && (c as any) !== (null as any);
      if (!E && (c as any) === ((q as any).current as any) && ((F as any).current = !1), (F as any).current && E && (c as any) === ((q as any).current as any)) return;
      const Z: any = (v as any).current;
      if (E || D) {
        const U: any = V ?? null;
        if ((c as any) === (U as any)) {
          (v as any).current = !1;
          return;
        }
        let J: any = It;
        Z ? J = yt : E && (J = le), (d as any)(U, J);
        return;
      }
      Z && (K as any) != (null as any) && ((B as any)(c, yt), (v as any).current = !1);
    }, [V, M, B, K, x, s, c]);
    const qt: any = (nt as any)("div", a, {
      state: {
        orientation: r,
        tabActivationDirection: t
      },
      ref: u,
      props: S,
      stateAttributesMapping: it
    });
    return ((N as any).jsx as any)((Lt as any).Provider, {
      value: j,
      children: ((N as any).jsx as any)($t, {
        elementsRef: O,
        children: qt
      })
    });
  });
function Ct(this: any, e: any, a: any, u: any, g: any): any {
  if ((e as any) == (null as any) || (a as any) == (null as any)) return "none";
  let n: any = null,
    f: any = null;
  for (const [C, T] of ((g as any).entries as any)()) {
    if ((T as any) == (null as any)) continue;
    const S: any = (T as any).value ?? (T as any).index;
    if ((e as any) === (S as any) && (n = C), (a as any) === (S as any) && (f = C), (n as any) != (null as any) && (f as any) != (null as any)) break;
  }
  if ((n as any) == (null as any) || (f as any) == (null as any)) return (n as any) !== (f as any) && ((typeof e as any) == ("number" as any) || (typeof e as any) == ("string" as any)) && (typeof e as any) == (typeof a as any) ? (u as any) === ("horizontal" as any) ? (a as any) > (e as any) ? "right" : "left" : (a as any) > (e as any) ? "down" : "up" : "none";
  const r: any = ((n as any).getBoundingClientRect as any)(),
    y: any = ((f as any).getBoundingClientRect as any)();
  if ((u as any) === ("horizontal" as any)) {
    if (((y as any).left as any) < ((r as any).left as any)) return "left";
    if (((y as any).left as any) > ((r as any).left as any)) return "right";
  } else {
    if (((y as any).top as any) < ((r as any).top as any)) return "up";
    if (((y as any).top as any) > ((r as any).top as any)) return "down";
  }
  return "none";
}
const Dt: any = ((i as any).createContext as any)(void 0);
function Ot(this: any): any {
  const e: any = ((i as any).useContext as any)(Dt);
  if ((e as any) === (void 0 as any)) throw new (Error as any)((Pt as any)(65));
  return e;
}
const zt: any = ((i as any).forwardRef as any)(function (this: any, a: any, u: any): any {
  ((Reflect as any).set as any)(zt, "d", 2027990485);
  const {
      className: g,
      disabled: n = !1,
      render: f,
      value: r,
      id: y,
      nativeButton: C = !0,
      style: T,
      ...S
    }: any = a,
    {
      value: m,
      getTabPanelIdByValue: O,
      orientation: I,
      tabActivationDirection: z
    }: any = (ht as any)(),
    {
      activateOnFocus: c,
      highlightedTabIndex: x,
      onTabActivation: M,
      registerTabResizeObserverElement: s,
      setHighlightedTabIndex: R,
      tabsListElement: h
    }: any = (Ot as any)(),
    p: any = (de as any)(y),
    w: any = ((i as any).useMemo as any)((): any => ({
      disabled: n,
      id: p,
      value: r
    }), [n, p, r]),
    {
      compositeProps: $,
      compositeRef: L,
      index: P
    }: any = (fe as any)({
      metadata: w
    }),
    t: any = (r as any) === (m as any),
    o: any = ((i as any).useRef as any)(!1),
    l: any = ((i as any).useRef as any)(null);
  (X as any)((): any => {
    const v: any = (l as any).current;
    if (v) return (s as any)(v);
  }, [s]), (X as any)((): any => {
    if ((o as any).current) {
      (o as any).current = !1;
      return;
    }
    if (!(t && (P as any) > (-1 as any) && (x as any) !== (P as any))) return;
    const v: any = h;
    if ((v as any) != (null as any)) {
      const q: any = (he as any)((Et as any)(v));
      if (q && (ge as any)(v, q)) return;
    }
    n || (R as any)(P);
  }, [t, P, x, R, n, h]);
  const {
      getButtonProps: H,
      buttonRef: k
    }: any = (be as any)({
      disabled: n,
      native: C,
      focusableWhenDisabled: !0
    }),
    B: any = (O as any)(r),
    A: any = ((i as any).useRef as any)(!1),
    _: any = ((i as any).useRef as any)(!1);
  function W(this: any, v: any): any {
    t || n || (M as any)(r, (dt as any)(Tt, (v as any).nativeEvent, void 0, {
      activationDirection: "none"
    }));
  }
  function b(this: any, v: any): any {
    t || ((P as any) > (-1 as any) && !n && (R as any)(P), !n && c && (!(A as any).current || (A as any).current && (_ as any).current) && (M as any)(r, (dt as any)(Tt, (v as any).nativeEvent, void 0, {
      activationDirection: "none"
    })));
  }
  function j(this: any, v: any): any {
    if (t || n) return;
    (A as any).current = !0;
    function q(this: any): any {
      (A as any).current = !1, (_ as any).current = !1;
    }
    (!(v as any).button || ((v as any).button as any) === (0 as any)) && ((_ as any).current = !0, (((Et as any)((v as any).currentTarget) as any).addEventListener as any)("pointerup", q, {
      once: !0
    }));
  }
  return (nt as any)("button", a, {
    state: {
      disabled: n,
      active: t,
      orientation: I,
      tabActivationDirection: z
    },
    ref: [u, k, L, l],
    props: [$, {
      role: "tab",
      "aria-controls": B,
      "aria-selected": t,
      id: p,
      onClick: W,
      onFocus: b,
      onPointerDown: j,
      [At]: t ? "" : void 0,
      onKeyDownCapture(): any {
        (o as any).current = !0;
      }
    }, S, H],
    stateAttributesMapping: it
  });
});
function Pe(this: any): any {
  return me;
}
function Ae(this: any): any {
  return !1;
}
function we(this: any): any {
  return !0;
}
function Le(this: any): any {
  return ((pe as any).useSyncExternalStore as any)(Pe, Ae, we);
}
const He: string = '!function(){const t=document.currentScript.previousElementSibling;if(!t)return;const e=t.closest(\'[role="tablist"]\');if(!e)return;const i=e.querySelector("[data-active]");if(!i)return;if(0===i.offsetWidth||0===e.offsetWidth)return;let o=0,n=0,h=0,l=0,r=0,f=0;function s(t){const e=getComputedStyle(t);let i=parseFloat(e.width)||0,o=parseFloat(e.height)||0;return(Math.round(i)!==t.offsetWidth||Math.round(o)!==t.offsetHeight)&&(i=t.offsetWidth,o=t.offsetHeight),{width:i,height:o}}if(null!=i&&null!=e){const{width:t,height:c}=s(i),{width:u,height:d}=s(e),a=i.getBoundingClientRect(),g=e.getBoundingClientRect(),p=u>0?g.width/u:1,b=d>0?g.height/d:1;if(Math.abs(p)>Number.EPSILON&&Math.abs(b)>Number.EPSILON){const t=a.left-g.left,i=a.top-g.top;o=t/p+e.scrollLeft-e.clientLeft,h=i/b+e.scrollTop-e.clientTop}else o=i.offsetLeft,h=i.offsetTop;r=t,f=c,n=e.scrollWidth-o-r,l=e.scrollHeight-h-f}function c(e,i){t.style.setProperty(`--active-tab-${e}`,`${i}px`)}c("left",o),c("right",n),c("top",h),c("bottom",l),c("width",r),c("height",f),r>0&&f>0&&t.removeAttribute("hidden")}();';
let G: any = (function (this: any, e: any): any {
  return (e as any).activeTabLeft = "--active-tab-left", (e as any).activeTabRight = "--active-tab-right", (e as any).activeTabTop = "--active-tab-top", (e as any).activeTabBottom = "--active-tab-bottom", (e as any).activeTabWidth = "--active-tab-width", (e as any).activeTabHeight = "--active-tab-height", e;
} as any)({});
const De: any = {
    ...it,
    activeTabPosition: (): any => null,
    activeTabSize: (): any => null
  },
  Wt: any = ((i as any).forwardRef as any)(function (this: any, a: any, u: any): any {
    ((Reflect as any).set as any)(Wt, "d", 1779117378);
    const {
        className: g,
        render: n,
        renderBeforeHydration: f = !1,
        style: r,
        ...y
      }: any = a,
      {
        nonce: C
      }: any = (ve as any)(),
      {
        getTabElementBySelectedValue: T,
        orientation: S,
        tabActivationDirection: m,
        value: O
      }: any = (ht as any)(),
      {
        tabsListElement: I,
        registerIndicatorUpdateListener: z
      }: any = (Ot as any)(),
      c: any = (Le as any)(),
      x: any = (Te as any)();
    ((i as any).useEffect as any)((): any => (z as any)(x), [z, x]);
    let M: any = 0,
      s: any = 0,
      R: any = 0,
      h: any = 0,
      p: any = 0,
      w: any = 0,
      $: any = !1;
    if ((O as any) != (null as any) && (I as any) != (null as any)) {
      const k: any = (T as any)(O);
      if ((k as any) != (null as any)) {
        $ = !0;
        const {
            width: B,
            height: A
          }: any = (St as any)(k),
          {
            width: _,
            height: W
          }: any = (St as any)(I),
          b: any = ((k as any).getBoundingClientRect as any)(),
          j: any = ((I as any).getBoundingClientRect as any)(),
          K: any = (_ as any) > (0 as any) ? ((j as any).width as any) / (_ as any) : 1,
          V: any = (W as any) > (0 as any) ? ((j as any).height as any) / (W as any) : 1;
        if ((((Math as any).abs as any)(K) as any) > ((Number as any).EPSILON as any) && (((Math as any).abs as any)(V) as any) > ((Number as any).EPSILON as any)) {
          const q: any = ((b as any).left as any) - ((j as any).left as any),
            F: any = ((b as any).top as any) - ((j as any).top as any);
          M = (((q as any) / (K as any) as any) + ((I as any).scrollLeft as any) as any) - ((I as any).clientLeft as any), R = (((F as any) / (V as any) as any) + ((I as any).scrollTop as any) as any) - ((I as any).clientTop as any);
        } else M = (k as any).offsetLeft, R = (k as any).offsetTop;
        p = B, w = A, s = (((I as any).scrollWidth as any) - (M as any) as any) - (p as any), h = (((I as any).scrollHeight as any) - (R as any) as any) - (w as any);
      }
    }
    const L: any = $ ? {
        left: M,
        right: s,
        top: R,
        bottom: h
      } : null,
      P: any = $ ? {
        width: p,
        height: w
      } : null,
      t: any = $ ? {
        [(G as any).activeTabLeft]: `${M}px`,
        [(G as any).activeTabRight]: `${s}px`,
        [(G as any).activeTabTop]: `${R}px`,
        [(G as any).activeTabBottom]: `${h}px`,
        [(G as any).activeTabWidth]: `${p}px`,
        [(G as any).activeTabHeight]: `${w}px`
      } : void 0,
      o: any = $ && (p as any) > (0 as any) && (w as any) > (0 as any),
      H: any = (nt as any)("span", a, {
        state: {
          orientation: S,
          activeTabPosition: L,
          activeTabSize: P,
          tabActivationDirection: m
        },
        ref: u,
        props: [{
          role: "presentation",
          style: t,
          hidden: !o
        }, y, {
          suppressHydrationWarning: !0
        }],
        stateAttributesMapping: De
      });
    return (O as any) == (null as any) ? null : ((N as any).jsxs as any)((i as any).Fragment, {
      children: [H, c && f && ((N as any).jsx as any)("script", {
        nonce: C,
        dangerouslySetInnerHTML: {
          __html: He
        },
        suppressHydrationWarning: !0
      })]
    });
  }),
  jt: any = ((i as any).forwardRef as any)(function (this: any, a: any, u: any): any {
    ((Reflect as any).set as any)(jt, "d", 2071294389);
    const {
        activateOnFocus: g = !1,
        className: n,
        loopFocus: f = !0,
        render: r,
        style: y,
        ...C
      }: any = a,
      {
        onValueChange: T,
        orientation: S,
        value: m,
        setTabMap: O,
        tabActivationDirection: I
      }: any = (ht as any)(),
      [z, c]: any = ((i as any).useState as any)(0),
      [x, M]: any = ((i as any).useState as any)(null),
      s: any = ((i as any).useRef as any)(new (Set as any)()),
      R: any = ((i as any).useRef as any)(new (Set as any)()),
      h: any = ((i as any).useRef as any)(null);
    (X as any)((): any => {
      if ((typeof ResizeObserver as any) > ("u" as any)) return;
      const o: any = new (ResizeObserver as any)((): any => {
        (((s as any).current as any).forEach as any)((l: any): any => {
          (l as any)();
        });
      });
      return (h as any).current = o, x && ((o as any).observe as any)(x), (((R as any).current as any).forEach as any)((l: any): any => {
        ((o as any).observe as any)(l);
      }), (): any => {
        ((o as any).disconnect as any)(), (h as any).current = null;
      };
    }, [x]);
    const p: any = (Y as any)((o: any): any => ((((s as any).current as any).add as any)(o), (): any => {
        (((s as any).current as any).delete as any)(o);
      })),
      w: any = (Y as any)((o: any): any => ((((R as any).current as any).add as any)(o), (h as any).current?.observe(o), (): any => {
        (((R as any).current as any).delete as any)(o), (h as any).current?.unobserve(o);
      })),
      $: any = (Y as any)((o: any, l: any): any => {
        (o as any) !== (m as any) && (T as any)(o, l);
      }),
      L: any = {
        orientation: S,
        tabActivationDirection: I
      },
      P: any = {
        "aria-orientation": (S as any) === ("vertical" as any) ? "vertical" : void 0,
        role: "tablist"
      },
      t: any = ((i as any).useMemo as any)((): any => ({
        activateOnFocus: g,
        highlightedTabIndex: z,
        registerIndicatorUpdateListener: p,
        registerTabResizeObserverElement: w,
        onTabActivation: $,
        setHighlightedTabIndex: c,
        tabsListElement: x
      }), [g, z, p, w, $, c, x]);
    return ((N as any).jsx as any)((Dt as any).Provider, {
      value: t,
      children: ((N as any).jsx as any)(wt, {
        render: r,
        className: n,
        style: y,
        state: L,
        refs: [u, M],
        props: [P, C],
        stateAttributesMapping: it,
        highlightedIndex: z,
        enableHomeAndEndKeys: !0,
        loopFocus: f,
        orientation: S,
        onHighlightedIndexChange: c,
        onMapChange: O,
        disabledIndices: lt
      })
    });
  }),
  tt: any = {
    base: {
      k1xSpc: "ui-3nfvp2",
      kGNEyG: "ui-1qjc9v5",
      kB7OPa: "ui-9f619",
      kVAEAm: "ui-1n2onr6",
      kzQI83: "ui-1iyjqo2",
      k7Eaqz: "ui-euugli",
      ks0D6T: "ui-193iq5w",
      $$css: !0
    },
    default: {
      kWkggS: "ui-flfp0o",
      $$css: !0
    },
    padded: {
      kLKAdn: "ui-493x5y",
      kpe85a: "ui-14ndyrl",
      kGO01o: "ui-b6dno7",
      kE3dHu: "ui-1e7ydrk",
      $$css: !0
    },
    rounded: {
      kaIpWk: "ui-1i4c3av",
      $$css: !0
    }
  },
  Oe: any = {
    sm: {
      kZKoxP: "ui-1e94bgo",
      $$css: !0
    },
    md: {
      kZKoxP: "ui-170hpbr",
      $$css: !0
    },
    lg: {
      kZKoxP: "ui-t8t6p",
      $$css: !0
    },
    xl: {
      kZKoxP: "ui-12tj2o0",
      $$css: !0
    }
  },
  ze: any = {
    sm: {
      kZKoxP: "ui-jmh96e",
      $$css: !0
    },
    md: {
      kZKoxP: "ui-17n66dt",
      $$css: !0
    },
    lg: {
      kZKoxP: "ui-y8quj6",
      $$css: !0
    },
    xl: {
      kZKoxP: "ui-1wl7iu6",
      $$css: !0
    }
  },
  We: any = {
    sm: {
      kaIpWk: "ui-1yjdzib",
      $$css: !0
    },
    md: {
      kaIpWk: "ui-17dxljr",
      $$css: !0
    },
    lg: {
      kaIpWk: "ui-172nrg4",
      $$css: !0
    },
    xl: {
      kaIpWk: "ui-1y34t1",
      $$css: !0
    }
  },
  je: any = {
    sm: {
      kaIpWk: "ui-13mijux",
      $$css: !0
    },
    md: {
      kaIpWk: "ui-1k9pyrz",
      $$css: !0
    },
    lg: {
      kaIpWk: "ui-1fkry76",
      $$css: !0
    },
    xl: {
      kaIpWk: "ui-126z3em",
      $$css: !0
    }
  },
  Mt: any = {
    base: {
      kVAEAm: "ui-10l6tqk",
      kY2c9j: "ui-1ja2u2z",
      kfzvcC: "ui-47corl",
      kB7OPa: "ui-9f619",
      kbCHJM: "ui-vbikie",
      k87sOh: "ui-10uur0e",
      kzqmXN: "ui-offw1",
      kZKoxP: "ui-1gezbiy",
      kWkggS: "ui-i07v4r",
      k1ekBW: "ui-98hnz2",
      kIyJzY: "ui-1bqoo3p ui-sagj69",
      kAMwcw: "ui-1tkypeg",
      $$css: !0
    },
    rounded: {
      kaIpWk: "ui-1i4c3av",
      $$css: !0
    }
  },
  et: any = {
    base: {
      kysU6D: "ui-jyslct",
      kzQI83: "ui-1c4vz4f",
      kmuXW: "ui-2lah0s",
      kCS8Yb: "ui-dl72j9",
      kVAEAm: "ui-1n2onr6",
      kY2c9j: "ui-1vjfegm",
      kWkggS: "ui-jbqb8w",
      kMwMTN: "ui-19aaqeu ui-1qp4pc4 ui-1gfq6vl",
      k1ekBW: "ui-1gbuem2",
      kIyJzY: "ui-g3p6pi ui-sagj69",
      kAMwcw: "ui-6ekqhr",
      $$css: !0
    },
    fullWidth: {
      kzQI83: "ui-1iyjqo2",
      kCS8Yb: "ui-1r8uery",
      $$css: !0
    },
    compact: {
      kMwMTN: "ui-4b2ntj ui-1qp4pc4 ui-1gfq6vl",
      $$css: !0
    },
    rounded: {
      kaIpWk: "ui-1i4c3av",
      $$css: !0
    }
  };
function Kt(this: any, e: any, a: any): any {
  return (e as any) === ("outline" as any) ? (je as any)[a] : (We as any)[a];
}
function Ke(this: any, e: any, a: any): any {
  return (e as any) === ("outline" as any) ? (ze as any)[a] : (Ee as any)[a];
}
const Nt: any = ((i as any).createContext as any)(null);
function Ne(this: any): any {
  const e: any = ((i as any).use as any)(Nt);
  if ((e as any) === (null as any)) throw new (Error as any)("SegmentedControl.Item must be used within SegmentedControl");
  return e;
}
function Bt(this: any, {
  value: e,
  defaultValue: a,
  onValueChange: u,
  variant: g = "default",
  size: n = "md",
  rounded: f = !1,
  disabled: r = !1,
  fullWidth: y = !1,
  children: C,
  "aria-label": T,
  "aria-labelledby": S,
  ...m
}: any): any {
  (Bt as any).d = 630778233;
  const O: any = ((i as any).useMemo as any)((): any => ({
    variant: g,
    size: n,
    rounded: f,
    disabled: r,
    fullWidth: y
  }), [r, y, f, n, g]);
  return ((N as any).jsx as any)((Nt as any).Provider, {
    value: O,
    children: ((N as any).jsx as any)(Ht, {
      ...m,
      value: e,
      defaultValue: a,
      onValueChange: u,
      "data-component": "segmented-control",
      "data-size": n,
      "data-variant": g,
      "data-rounded": f || void 0,
      ...({
        0: {
          className: "ui-3nfvp2 ui-1qjc9v5 ui-9f619 ui-2lah0s ui-eq5yr9 ui-193iq5w"
        },
        1: {
          className: "ui-3nfvp2 ui-1qjc9v5 ui-9f619 ui-2lah0s ui-193iq5w ui-h8yej3"
        }
      } as any)[(!!y as any) << (0 as any)],
      children: ((N as any).jsxs as any)(jt, {
        activateOnFocus: !0,
        "aria-label": T,
        "aria-labelledby": S,
        "data-component": "segmented-control-list",
        "data-disabled": r || void 0,
        ...(ft as any)((tt as any).base, (tt as any).padded, (Oe as any)[n], (g as any) === ("default" as any) && (tt as any).default, (g as any) === ("outline" as any) && (Re as any).outline, f ? (tt as any).rounded : (xe as any)[n]),
        children: [C, ((N as any).jsx as any)(Wt, {
          "data-component": "segmented-control-indicator",
          ...(ft as any)((Mt as any).base, f ? (Mt as any).rounded : (Kt as any)(g, n))
        })]
      })
    })
  });
}
function _t(this: any, {
  value: e,
  disabled: a = !1,
  children: u,
  ...g
}: any): any {
  (_t as any).d = 1118998120;
  const n: any = (Ne as any)();
  return ((N as any).jsx as any)(zt, {
    ...g,
    value: e,
    disabled: (n as any).disabled || a,
    "data-component": "segmented-control-item",
    "data-size": (n as any).size,
    "data-variant": (n as any).variant,
    "data-rounded": (n as any).rounded || void 0,
    ...(ft as any)((Ie as any).root, (ct as any).content, (ye as any).root, (n as any).rounded ? (et as any).rounded : (Kt as any)((n as any).variant, (n as any).size), (Ke as any)((n as any).variant, (n as any).size), ((ct as any).size as any)[(n as any).size], ((n as any).size as any) === ("sm" as any) ? (ke as any).root : ((ct as any).typography as any)[(n as any).size], (et as any).base, ((n as any).variant as any) === ("compact" as any) && (et as any).compact, (n as any).fullWidth && (et as any).fullWidth),
    children: u
  });
}
const qe: any = ((Object as any).assign as any)(Bt, {
  Item: _t
});
export { qe as S };
//# debugId=cf9c4f44-1d2d-4f75-bd97-14322ab3ad5e
