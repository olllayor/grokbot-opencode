declare var DOMRect: any;
declare var HTMLElement: any;
declare var HTMLImageElement: any;
declare var MessageChannel: any;
declare var Node: any;
declare var URL: any;
declare var cancelAnimationFrame: any;
declare var clearTimeout: any;
declare var console: any;
declare var document: any;
declare var global: any;
declare var key: any;
declare var navigator: any;
declare var performance: any;
declare var queueMicrotask: any;
declare var requestAnimationFrame: any;
declare var self: any;
declare var setTimeout: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "70579bb3-bd47-4a78-8a49-32e380290e92", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-70579bb3-bd47-4a78-8a49-32e380290e92");
  } catch (e: any) {}
} as any)();
import { j as m, c as Ui, aP as Fi, U as ze, r as x, R as dn, aN as Ds, p as C, f as Wi, s as Vi, o as Ki, aQ as Xi, d as Gi, aR as Zi, h as Qi, aS as Yi, b as Ji, u as Hs } from "./index.eager-vendor-Qbf9YA6n.js";
import { bn as Bs, b8 as ye, b3 as er, bf as bt, b4 as Us, b5 as tr, bo as Wt, i as Fs, aY as Ws } from "./index.eager-platform-Dcfeegfw.js";
import { b7 as nr, bP as Vs, bA as Ks } from "./index.eager-app-Cj5f8Gby.js";
import { d9 as ir, W as Xs, cy as Gs, da as Zs, bx as Qs, db as Ys, bX as Js, p as eo } from "./index-ZYxf-aBb.js";
import { N as to, g as no, E as io, d as ro, o as so, m as xe, j as ne, P as ie, a as le, b as Q, D as Ie, c as He, T as H, A as rr, y as Me, B as oo, F as we, S as Ae, C as sr, G as lo, H as ao, J as Fe, K as uo, L as co, O as Je, u as ho, t as po, Q as fo, R as Ce, U as mo, V as go, W as ko, X as bo, Y as yo, n as wo, Z as xo, _ as vo, $ as So, a0 as Co, a1 as To } from "./chunk-index-CPur7w6O.js";
import { r as Ro } from "./chunk-get-file-icon-ZAkFyGfn.js";
import { T as Mo, g as Eo, s as $o } from "./chunk-ToggleIconButton-DDH2e1NR.js";
import "./index.eager-common-CdCvBQNJ.js";
function or(this: any, e: any, t: any): any {
  let n: any = `codicon codicon-${e}`;
  return t && (n += ` codicon-modifier-${t}`), n;
}
function lr(this: any, e: any): any {
  return (lr as any).d = 4230312962, ((m as any).jsxs as any)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    ...e,
    children: [((m as any).jsx as any)("path", {
      d: "M4.75 2.25v5.5a3.25 3.25 0 0 0 6.5 0v-5.5",
      stroke: "currentColor",
      strokeWidth: "1.2",
      strokeLinecap: "round"
    }), ((m as any).jsx as any)("path", {
      d: "M3.75 13.25h8.5",
      stroke: "currentColor",
      strokeWidth: "1.2",
      strokeLinecap: "round"
    })]
  });
}
const ar: any = /^[a-zA-Z]:[\\/]/,
  ur: any = /^file:/i,
  zo: any = /^[a-zA-Z][a-zA-Z0-9+.-]*:/;
function jo(this: any, e: any): any {
  return ((ur as any).test as any)(e) || ((ar as any).test as any)(e) ? !0 : !((zo as any).test as any)(e);
}
function An(this: any, e: any): any {
  return ((e as any).startsWith as any)("/") || ((e as any).startsWith as any)("\\") ? !0 : ((ar as any).test as any)(e);
}
function Ao(this: any, e: any): any {
  if (!((e as any).includes as any)("%")) return e;
  const t: any = ((e as any).trim as any)();
  if (!t || !(jo as any)(t)) return e;
  try {
    const n: any = (decodeURI as any)(t);
    return !((ur as any).test as any)(t) && !(An as any)(t) && (An as any)(n) ? e : n;
  } catch {
    return e;
  }
}
function cr(this: any, {
  pressed: e,
  ...t
}: any): any {
  return (cr as any).d = 4127627457, ((m as any).jsx as any)(Mo, {
    ...t,
    pressed: e,
    variant: e ? "secondary" : "ghost"
  });
}
function No(this: any, e: any, t: any, n: any): any {
  const i: any = ((Ui as any).c as any)(5),
    r: any = (n as any) === (void 0 as any) ? null : n,
    s: any = (nr as any)();
  let o: any;
  return ((i as any)[0] as any) !== (r as any) || ((i as any)[1] as any) !== (e as any) || ((i as any)[2] as any) !== (t as any) || ((i as any)[3] as any) !== ((s as any).documentAssets as any) ? (o = (((s as any).documentAssets as any).stateFor as any)(e, t, r), (i as any)[0] = r, (i as any)[1] = e, (i as any)[2] = t, (i as any)[3] = (s as any).documentAssets, (i as any)[4] = o) : o = (i as any)[4], (Vs as any)(o);
}
var It: any = {
    exports: {}
  },
  Lt: any = {};
var Nn: any;
function Io(this: any): any {
  if (Nn) return Lt;
  Nn = 1;
  var e: any = (Fi as any)();
  function t(this: any, d: any, h: any): any {
    return (d as any) === (h as any) && ((d as any) !== (0 as any) || ((1 as any) / (d as any) as any) === ((1 as any) / (h as any) as any)) || (d as any) !== (d as any) && (h as any) !== (h as any);
  }
  var n: any = (typeof (Object as any).is as any) == ("function" as any) ? (Object as any).is : t,
    i: any = (e as any).useState,
    r: any = (e as any).useEffect,
    s: any = (e as any).useLayoutEffect,
    o: any = (e as any).useDebugValue;
  function l(this: any, d: any, h: any): any {
    var p: any = (h as any)(),
      f: any = (i as any)({
        inst: {
          value: p,
          getSnapshot: h
        }
      }),
      g: any = ((f as any)[0] as any).inst,
      k: any = (f as any)[1];
    return (s as any)(function (this: any): any {
      (g as any).value = p, (g as any).getSnapshot = h, (a as any)(g) && (k as any)({
        inst: g
      });
    }, [d, p, h]), (r as any)(function (this: any): any {
      return (a as any)(g) && (k as any)({
        inst: g
      }), (d as any)(function (this: any): any {
        (a as any)(g) && (k as any)({
          inst: g
        });
      });
    }, [d]), (o as any)(p), p;
  }
  function a(this: any, d: any): any {
    var h: any = (d as any).getSnapshot;
    d = (d as any).value;
    try {
      var p: any = (h as any)();
      return !(n as any)(d, p);
    } catch {
      return !0;
    }
  }
  function u(this: any, d: any, h: any): any {
    return (h as any)();
  }
  var c: any = (typeof window as any) > ("u" as any) || (typeof (window as any).document as any) > ("u" as any) || (typeof ((window as any).document as any).createElement as any) > ("u" as any) ? u : l;
  return (Lt as any).useSyncExternalStore = ((e as any).useSyncExternalStore as any) !== (void 0 as any) ? (e as any).useSyncExternalStore : c, Lt;
}
var In: any;
function dr(this: any): any {
  return In || (In = 1, (It as any).exports = (Io as any)()), (It as any).exports;
}
var hr: any = (dr as any)(),
  Pt: any = {
    exports: {}
  },
  qt: any = {};
var Ln: any;
function Lo(this: any): any {
  if (Ln) return qt;
  Ln = 1;
  var e: any = (Fi as any)(),
    t: any = (dr as any)();
  function n(this: any, u: any, c: any): any {
    return (u as any) === (c as any) && ((u as any) !== (0 as any) || ((1 as any) / (u as any) as any) === ((1 as any) / (c as any) as any)) || (u as any) !== (u as any) && (c as any) !== (c as any);
  }
  var i: any = (typeof (Object as any).is as any) == ("function" as any) ? (Object as any).is : n,
    r: any = (t as any).useSyncExternalStore,
    s: any = (e as any).useRef,
    o: any = (e as any).useEffect,
    l: any = (e as any).useMemo,
    a: any = (e as any).useDebugValue;
  return (qt as any).useSyncExternalStoreWithSelector = function (this: any, u: any, c: any, d: any, h: any, p: any): any {
    var f: any = (s as any)(null);
    if (((f as any).current as any) === (null as any)) {
      var g: any = {
        hasValue: !1,
        value: null
      };
      (f as any).current = g;
    } else g = (f as any).current;
    f = (l as any)(function (this: any): any {
      function b(this: any, $: any): any {
        if (!w) {
          if (w = !0, S = $, $ = (h as any)($), (p as any) !== (void 0 as any) && (g as any).hasValue) {
            var E: any = (g as any).value;
            if ((p as any)(E, $)) return T = E;
          }
          return T = $;
        }
        if (E = T, (i as any)(S, $)) return E;
        var L: any = (h as any)($);
        return (p as any) !== (void 0 as any) && (p as any)(E, L) ? (S = $, E) : (S = $, T = L);
      }
      var w: any = !1,
        S: any,
        T: any,
        M: any = (d as any) === (void 0 as any) ? null : d;
      return [function (this: any): any {
        return (b as any)((c as any)());
      }, (M as any) === (null as any) ? void 0 : function (this: any): any {
        return (b as any)((M as any)());
      }];
    }, [c, d, h, p]);
    var k: any = (r as any)(u, (f as any)[0], (f as any)[1]);
    return (o as any)(function (this: any): any {
      (g as any).hasValue = !0, (g as any).value = k;
    }, [k]), (a as any)(k), k;
  }, qt;
}
var Pn: any;
function Po(this: any): any {
  return Pn || (Pn = 1, (Pt as any).exports = (Lo as any)()), (Pt as any).exports;
}
var qo: any = (Po as any)(),
  _o: any = (...e: any): any => (t: any): any => {
    ((e as any).forEach as any)((n: any): any => {
      (typeof n as any) == ("function" as any) ? (n as any)(t) : n && ((n as any).current = t);
    });
  },
  pr: any = ({
    contentComponent: e
  }: any): any => {
    ((Reflect as any).set as any)(pr, "d", 2907835745);
    const t: any = ((hr as any).useSyncExternalStore as any)((e as any).subscribe, (e as any).getSnapshot, (e as any).getServerSnapshot);
    return ((m as any).jsx as any)((m as any).Fragment, {
      children: ((Object as any).values as any)(t)
    });
  };
function Oo(this: any): any {
  const e: any = new (Set as any)();
  let t: any = {};
  return {
    subscribe(n: any): any {
      return ((e as any).add as any)(n), (): any => {
        ((e as any).delete as any)(n);
      };
    },
    getSnapshot(): any {
      return t;
    },
    getServerSnapshot(): any {
      return t;
    },
    setRenderer(n: any, i: any): any {
      t = {
        ...t,
        [n]: ((Ds as any).createPortal as any)((i as any).reactElement, (i as any).element, n)
      }, ((e as any).forEach as any)((r: any): any => (r as any)());
    },
    removeRenderer(n: any): any {
      const i: any = {
        ...t
      };
      delete (i as any)[n], t = i, ((e as any).forEach as any)((r: any): any => (r as any)());
    }
  };
}
var Do: any = class extends ((ze as any).Component as any) {
    declare unsubscribeToContentComponent: any;
    declare state: any;
    declare initialized: any;
    declare editorContentRef: any;
    [key: string]: any;
    constructor(e: any) {
      var t: any;
      super(e), (this as any).editorContentRef = ((ze as any).createRef as any)(), (this as any).initialized = !1, (this as any).state = {
        hasContentComponentInitialized: !!(((t = (e as any).editor) as any) != (null as any) && (t as any).contentComponent)
      };
    }
    componentDidMount(): any {
      ((this as any).init as any)();
    }
    componentDidUpdate(): any {
      ((this as any).init as any)();
    }
    init(): any {
      var e: any;
      const t: any = ((this as any).props as any).editor;
      if (t && !(t as any).isDestroyed && ((e = ((t as any).view as any).dom) as any) != (null as any) && (e as any).parentNode) {
        if ((t as any).contentComponent) return;
        const n: any = ((this as any).editorContentRef as any).current;
        ((n as any).append as any)(...((((t as any).view as any).dom as any).parentNode as any).childNodes), ((t as any).setOptions as any)({
          element: n
        }), (t as any).contentComponent = (Oo as any)(), ((this as any).state as any).hasContentComponentInitialized || ((this as any).unsubscribeToContentComponent = (((t as any).contentComponent as any).subscribe as any)((): any => {
          ((this as any).setState as any)((i: any): any => (i as any).hasContentComponentInitialized ? i : {
            hasContentComponentInitialized: !0
          }), (this as any).unsubscribeToContentComponent && ((this as any).unsubscribeToContentComponent as any)();
        })), ((t as any).createNodeViews as any)(), (this as any).initialized = !0;
      }
    }
    componentWillUnmount(): any {
      var e: any;
      const t: any = ((this as any).props as any).editor;
      if (t) {
        (this as any).initialized = !1, (t as any).isDestroyed || (((t as any).view as any).setProps as any)({
          nodeViews: {}
        }), (this as any).unsubscribeToContentComponent && ((this as any).unsubscribeToContentComponent as any)(), (t as any).contentComponent = null;
        try {
          if (!(((e = ((t as any).view as any).dom) as any) != (null as any) && (e as any).parentNode)) return;
          const n: any = ((document as any).createElement as any)("div");
          ((n as any).append as any)(...((((t as any).view as any).dom as any).parentNode as any).childNodes), ((t as any).setOptions as any)({
            element: n
          });
        } catch {}
      }
    }
    render(): any {
      const {
        editor: e,
        innerRef: t,
        ...n
      }: any = (this as any).props;
      return ((m as any).jsxs as any)((m as any).Fragment, {
        children: [((m as any).jsx as any)("div", {
          ref: (_o as any)(t, (this as any).editorContentRef),
          ...n
        }), e?.contentComponent && ((m as any).jsx as any)(pr, {
          contentComponent: (e as any).contentComponent
        })]
      });
    }
  },
  fr: any = ((x as any).forwardRef as any)((e: any, t: any): any => {
    ((Reflect as any).set as any)(fr, "d", 2018557190);
    const n: any = ((ze as any).useMemo as any)((): any => ((((Math as any).floor as any)((((Math as any).random as any)() as any) * (4294967295 as any)) as any).toString as any)(), [(e as any).editor]);
    return ((ze as any).createElement as any)(Do, {
      key: n,
      innerRef: t,
      ...e
    });
  }),
  Ho: any = ((ze as any).memo as any)(fr),
  Bo: any = (typeof window as any) < ("u" as any) ? (x as any).useLayoutEffect : (x as any).useEffect,
  Uo: any = class {
    declare lastSnapshot: any;
    declare editor: any;
    declare subscribers: any;
    declare lastTransactionNumber: any;
    declare transactionNumber: any;
    [key: string]: any;
    constructor(e: any) {
      (this as any).transactionNumber = 0, (this as any).lastTransactionNumber = 0, (this as any).subscribers = new (Set as any)(), (this as any).editor = e, (this as any).lastSnapshot = {
        editor: e,
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
    subscribe(e: any): any {
      return (((this as any).subscribers as any).add as any)(e), (): any => {
        (((this as any).subscribers as any).delete as any)(e);
      };
    }
    watch(e: any): any {
      if ((this as any).editor = e, (this as any).editor) {
        const t: any = (): any => {
            (this as any).transactionNumber += 1, (((this as any).subscribers as any).forEach as any)((i: any): any => (i as any)());
          },
          n: any = (this as any).editor;
        return ((n as any).on as any)("transaction", t), (): any => {
          ((n as any).off as any)("transaction", t);
        };
      }
    }
  };
function mr(this: any, e: any): any {
  var t: any;
  const [n]: any = ((x as any).useState as any)((): any => new (Uo as any)((e as any).editor)),
    i: any = ((qo as any).useSyncExternalStoreWithSelector as any)((n as any).subscribe, (n as any).getSnapshot, (n as any).getServerSnapshot, (e as any).selector, ((t = (e as any).equalityFn) as any) != (null as any) ? t : ro);
  return (Bo as any)((): any => ((n as any).watch as any)((e as any).editor), [(e as any).editor, n]), ((x as any).useDebugValue as any)(i), i;
}
var Fo: any = !1,
  Vt: any = (typeof window as any) > ("u" as any),
  Wo: any = Vt || !!((typeof window as any) < ("u" as any) && (window as any).next),
  Vo: any = class gr {
    declare scheduledDestructionTimeout: any;
    declare options: any;
    declare instanceId: any;
    declare previousDeps: any;
    declare isComponentMounted: any;
    declare subscriptions: any;
    declare editor: any;
    [key: string]: any;
    constructor(t: any) {
      (this as any).editor = null, (this as any).subscriptions = new (Set as any)(), (this as any).isComponentMounted = !1, (this as any).previousDeps = null, (this as any).instanceId = "", (this as any).options = t, (this as any).subscriptions = new (Set as any)(), ((this as any).setEditor as any)(((this as any).getInitialEditor as any)()), ((this as any).scheduleDestroy as any)(), (this as any).getEditor = (((this as any).getEditor as any).bind as any)(this), (this as any).getServerSnapshot = (((this as any).getServerSnapshot as any).bind as any)(this), (this as any).subscribe = (((this as any).subscribe as any).bind as any)(this), (this as any).refreshEditorInstance = (((this as any).refreshEditorInstance as any).bind as any)(this), (this as any).scheduleDestroy = (((this as any).scheduleDestroy as any).bind as any)(this), (this as any).onRender = (((this as any).onRender as any).bind as any)(this), (this as any).createEditor = (((this as any).createEditor as any).bind as any)(this);
    }
    setEditor(t: any): any {
      (this as any).editor = t, (this as any).instanceId = ((((((Math as any).random as any)() as any).toString as any)(36) as any).slice as any)(2, 9), (((this as any).subscriptions as any).forEach as any)((n: any): any => (n as any)());
    }
    getInitialEditor(): any {
      return ((((this as any).options as any).current as any).immediatelyRender as any) === (void 0 as any) ? Vt || Wo ? null : ((this as any).createEditor as any)() : ((((this as any).options as any).current as any).immediatelyRender, (((this as any).options as any).current as any).immediatelyRender ? ((this as any).createEditor as any)() : null);
    }
    createEditor(): any {
      const t: any = {
        ...((this as any).options as any).current,
        onBeforeCreate: (...i: any): any => {
          var r: any, s: any;
          return ((s = ((r = ((this as any).options as any).current) as any).onBeforeCreate) as any) == (null as any) ? void 0 : ((s as any).call as any)(r, ...i);
        },
        onBlur: (...i: any): any => {
          var r: any, s: any;
          return ((s = ((r = ((this as any).options as any).current) as any).onBlur) as any) == (null as any) ? void 0 : ((s as any).call as any)(r, ...i);
        },
        onCreate: (...i: any): any => {
          var r: any, s: any;
          return ((s = ((r = ((this as any).options as any).current) as any).onCreate) as any) == (null as any) ? void 0 : ((s as any).call as any)(r, ...i);
        },
        onDestroy: (...i: any): any => {
          var r: any, s: any;
          return ((s = ((r = ((this as any).options as any).current) as any).onDestroy) as any) == (null as any) ? void 0 : ((s as any).call as any)(r, ...i);
        },
        onFocus: (...i: any): any => {
          var r: any, s: any;
          return ((s = ((r = ((this as any).options as any).current) as any).onFocus) as any) == (null as any) ? void 0 : ((s as any).call as any)(r, ...i);
        },
        onSelectionUpdate: (...i: any): any => {
          var r: any, s: any;
          return ((s = ((r = ((this as any).options as any).current) as any).onSelectionUpdate) as any) == (null as any) ? void 0 : ((s as any).call as any)(r, ...i);
        },
        onTransaction: (...i: any): any => {
          var r: any, s: any;
          return ((s = ((r = ((this as any).options as any).current) as any).onTransaction) as any) == (null as any) ? void 0 : ((s as any).call as any)(r, ...i);
        },
        onUpdate: (...i: any): any => {
          var r: any, s: any;
          return ((s = ((r = ((this as any).options as any).current) as any).onUpdate) as any) == (null as any) ? void 0 : ((s as any).call as any)(r, ...i);
        },
        onContentError: (...i: any): any => {
          var r: any, s: any;
          return ((s = ((r = ((this as any).options as any).current) as any).onContentError) as any) == (null as any) ? void 0 : ((s as any).call as any)(r, ...i);
        },
        onDrop: (...i: any): any => {
          var r: any, s: any;
          return ((s = ((r = ((this as any).options as any).current) as any).onDrop) as any) == (null as any) ? void 0 : ((s as any).call as any)(r, ...i);
        },
        onPaste: (...i: any): any => {
          var r: any, s: any;
          return ((s = ((r = ((this as any).options as any).current) as any).onPaste) as any) == (null as any) ? void 0 : ((s as any).call as any)(r, ...i);
        },
        onDelete: (...i: any): any => {
          var r: any, s: any;
          return ((s = ((r = ((this as any).options as any).current) as any).onDelete) as any) == (null as any) ? void 0 : ((s as any).call as any)(r, ...i);
        }
      };
      return new (io as any)(t);
    }
    getEditor(): any {
      return (this as any).editor;
    }
    getServerSnapshot(): any {
      return null;
    }
    subscribe(t: any): any {
      return (((this as any).subscriptions as any).add as any)(t), (): any => {
        (((this as any).subscriptions as any).delete as any)(t);
      };
    }
    static compareOptions(t: any, n: any): any {
      return ((((Object as any).keys as any)(t) as any).every as any)((i: any): any => ((["onCreate", "onBeforeCreate", "onDestroy", "onUpdate", "onTransaction", "onFocus", "onBlur", "onSelectionUpdate", "onContentError", "onDrop", "onPaste"] as any).includes as any)(i) ? !0 : (i as any) === ("extensions" as any) && (t as any).extensions && (n as any).extensions ? (((t as any).extensions as any).length as any) !== (((n as any).extensions as any).length as any) ? !1 : (((t as any).extensions as any).every as any)((r: any, s: any): any => {
        var o: any;
        return (r as any) === ((((o = (n as any).extensions) as any) == (null as any) ? void 0 : (o as any)[s]) as any);
      }) : ((t as any)[i] as any) === ((n as any)[i] as any));
    }
    onRender(t: any): any {
      return (): any => ((this as any).isComponentMounted = !0, (clearTimeout as any)((this as any).scheduledDestructionTimeout), (this as any).editor && !((this as any).editor as any).isDestroyed && ((t as any).length as any) === (0 as any) ? ((gr as any).compareOptions as any)(((this as any).options as any).current, ((this as any).editor as any).options) || (((this as any).editor as any).setOptions as any)({
        ...((this as any).options as any).current,
        editable: ((this as any).editor as any).isEditable
      }) : ((this as any).refreshEditorInstance as any)(t), (): any => {
        (this as any).isComponentMounted = !1, ((this as any).scheduleDestroy as any)();
      });
    }
    refreshEditorInstance(t: any): any {
      if ((this as any).editor && !((this as any).editor as any).isDestroyed) {
        if (((this as any).previousDeps as any) === (null as any)) {
          (this as any).previousDeps = t;
          return;
        }
        if ((((this as any).previousDeps as any).length as any) === ((t as any).length as any) && (((this as any).previousDeps as any).every as any)((i: any, r: any): any => (i as any) === ((t as any)[r] as any))) return;
      }
      (this as any).editor && !((this as any).editor as any).isDestroyed && (((this as any).editor as any).destroy as any)(), ((this as any).setEditor as any)(((this as any).createEditor as any)()), (this as any).previousDeps = t;
    }
    scheduleDestroy(): any {
      const t: any = (this as any).instanceId,
        n: any = (this as any).editor;
      (this as any).scheduledDestructionTimeout = (setTimeout as any)((): any => {
        if ((this as any).isComponentMounted && ((this as any).instanceId as any) === (t as any)) {
          n && ((n as any).setOptions as any)(((this as any).options as any).current);
          return;
        }
        n && !(n as any).isDestroyed && (((n as any).destroy as any)(), ((this as any).instanceId as any) === (t as any) && ((this as any).setEditor as any)(null));
      }, 1);
    }
  };
function Ko(this: any, e: any = {}, t: any = []): any {
  const n: any = ((x as any).useRef as any)(e);
  (n as any).current = e;
  const [i]: any = ((x as any).useState as any)((): any => new (Vo as any)(n)),
    r: any = ((hr as any).useSyncExternalStore as any)((i as any).subscribe, (i as any).getEditor, (i as any).getServerSnapshot);
  return ((x as any).useDebugValue as any)(r), ((x as any).useEffect as any)(((i as any).onRender as any)(t)), (mr as any)({
    editor: r,
    selector: ({
      transactionNumber: s
    }: any): any => ((e as any).shouldRerenderOnTransaction as any) === (!1 as any) || ((e as any).shouldRerenderOnTransaction as any) === (void 0 as any) ? null : (e as any).immediatelyRender && (s as any) === (0 as any) ? 0 : (s as any) + (1 as any)
  }), r;
}
var kr: any = ((x as any).createContext as any)({
  editor: null
});
(kr as any).Consumer;
var br: any = (): any => ((x as any).useContext as any)(kr),
  yr: any = ((x as any).createContext as any)({
    onDragStart: (): any => {},
    nodeViewContentChildren: void 0,
    nodeViewContentRef: (): any => {}
  }),
  wr: any = (): any => ((x as any).useContext as any)(yr);
function hn(this: any, {
  as: e = "div",
  ...t
}: any): any {
  ((Reflect as any).set as any)(hn, "d", 553884401);
  const {
    nodeViewContentRef: n,
    nodeViewContentChildren: i
  }: any = (wr as any)();
  return ((m as any).jsx as any)(e, {
    ...t,
    ref: n,
    "data-node-view-content": "",
    style: {
      whiteSpace: "pre-wrap",
      ...(t as any).style
    },
    children: i
  });
}
var pn: any = ((ze as any).forwardRef as any)((e: any, t: any): any => {
  ((Reflect as any).set as any)(pn, "d", 1472435527);
  const {
      onDragStart: n
    }: any = (wr as any)(),
    i: any = (e as any).as || "div";
  return ((m as any).jsx as any)(i, {
    ...e,
    ref: t,
    "data-node-view-wrapper": "",
    onDragStart: n,
    style: {
      whiteSpace: "normal",
      ...(e as any).style
    }
  });
});
function qn(this: any, e: any): any {
  return !!((typeof e as any) == ("function" as any) && (e as any).prototype && ((e as any).prototype as any).isReactComponent);
}
function _n(this: any, e: any): any {
  return !!((typeof e as any) == ("object" as any) && (e as any).$$typeof && (((((e as any).$$typeof as any).toString as any)() as any) === ("Symbol(react.forward_ref)" as any) || (((e as any).$$typeof as any).description as any) === ("react.forward_ref" as any)));
}
function Xo(this: any, e: any): any {
  return !!((typeof e as any) == ("object" as any) && (e as any).$$typeof && (((((e as any).$$typeof as any).toString as any)() as any) === ("Symbol(react.memo)" as any) || (((e as any).$$typeof as any).description as any) === ("react.memo" as any)));
}
function Go(this: any, e: any): any {
  if ((qn as any)(e) || (_n as any)(e)) return !0;
  if ((Xo as any)(e)) {
    const t: any = (e as any).type;
    if (t) return (qn as any)(t) || (_n as any)(t);
  }
  return !1;
}
function Zo(this: any): any {
  try {
    if ((x as any).version) return ((parseInt as any)(((((x as any).version as any).split as any)(".") as any)[0], 10) as any) >= (19 as any);
  } catch {}
  return !1;
}
var Qo: any = class {
  declare reactElement: any;
  declare element: any;
  declare props: any;
  declare editor: any;
  declare component: any;
  declare id: any;
  declare ref: any;
  [key: string]: any;
  constructor(e: any, {
    editor: t,
    props: n = {},
    as: i = "div",
    className: r = ""
  }: any) {
    (this as any).ref = null, (this as any).id = ((((Math as any).floor as any)((((Math as any).random as any)() as any) * (4294967295 as any)) as any).toString as any)(), (this as any).component = e, (this as any).editor = t, (this as any).props = n, (this as any).element = ((document as any).createElement as any)(i), ((((this as any).element as any).classList as any).add as any)("react-renderer"), r && ((((this as any).element as any).classList as any).add as any)(...((r as any).split as any)(" ")), ((this as any).editor as any).isInitialized ? ((dn as any).flushSync as any)((): any => {
      ((this as any).render as any)();
    }) : (queueMicrotask as any)((): any => {
      ((this as any).render as any)();
    });
  }
  render(): any {
    var e: any;
    const t: any = (this as any).component,
      n: any = (this as any).props,
      i: any = (this as any).editor,
      r: any = (Zo as any)(),
      s: any = (Go as any)(t),
      o: any = {
        ...n
      };
    (o as any).ref && !(r || s) && delete (o as any).ref, !(o as any).ref && (r || s) && ((o as any).ref = (l: any): any => {
      (this as any).ref = l;
    }), (this as any).reactElement = ((m as any).jsx as any)(t, {
      ...o
    }), ((e = i?.contentComponent) as any) == (null as any) || ((e as any).setRenderer as any)((this as any).id, this);
  }
  updateProps(e: any = {}): any {
    (this as any).props = {
      ...(this as any).props,
      ...e
    }, ((this as any).render as any)();
  }
  destroy(): any {
    var e: any;
    const t: any = (this as any).editor;
    ((e = t?.contentComponent) as any) == (null as any) || ((e as any).removeRenderer as any)((this as any).id);
    try {
      (this as any).element && ((this as any).element as any).parentNode && ((((this as any).element as any).parentNode as any).removeChild as any)((this as any).element);
    } catch {}
  }
  updateAttributes(e: any): any {
    ((((Object as any).keys as any)(e) as any).forEach as any)((t: any): any => {
      (((this as any).element as any).setAttribute as any)(t, (e as any)[t]);
    });
  }
};
((ze as any).createContext as any)({
  markViewContentRef: (): any => {}
});
var Yo: any = class extends (to as any) {
  declare innerDecorations: any;
  declare decorations: any;
  declare node: any;
  declare renderer: any;
  declare contentDOMElement: any;
  declare selectionRafId: any;
  [key: string]: any;
  constructor(e: any, t: any, n: any) {
    if (super(e, t, n), (this as any).selectionRafId = null, !((this as any).node as any).isLeaf) {
      ((this as any).options as any).contentDOMElementTag ? (this as any).contentDOMElement = ((document as any).createElement as any)(((this as any).options as any).contentDOMElementTag) : (this as any).contentDOMElement = ((document as any).createElement as any)(((this as any).node as any).isInline ? "span" : "div"), (((this as any).contentDOMElement as any).dataset as any).nodeViewContentReact = "", (((this as any).contentDOMElement as any).dataset as any).nodeViewWrapper = "", (((this as any).contentDOMElement as any).style as any).whiteSpace = "inherit";
      const i: any = (((this as any).dom as any).querySelector as any)("[data-node-view-content]");
      if (!i) return;
      ((i as any).appendChild as any)((this as any).contentDOMElement);
    }
  }
  mount(): any {
    const e: any = {
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
      ref: ((x as any).createRef as any)()
    };
    if (!((this as any).component as any).displayName) {
      const a: any = (u: any): any => (((((u as any).charAt as any)(0) as any).toUpperCase as any)() as any) + (((u as any).substring as any)(1) as any);
      ((this as any).component as any).displayName = (a as any)(((this as any).extension as any).name);
    }
    const i: any = {
        onDragStart: (((this as any).onDragStart as any).bind as any)(this),
        nodeViewContentRef: (a: any): any => {
          a && (this as any).contentDOMElement && ((a as any).firstChild as any) !== ((this as any).contentDOMElement as any) && (((a as any).hasAttribute as any)("data-node-view-wrapper") && ((a as any).removeAttribute as any)("data-node-view-wrapper"), ((a as any).appendChild as any)((this as any).contentDOMElement));
        }
      },
      r: any = (this as any).component,
      s: any = ((x as any).memo as any)((a: any): any => ((m as any).jsx as any)((yr as any).Provider, {
        value: i,
        children: ((x as any).createElement as any)(r, a)
      }));
    (s as any).displayName = "ReactNodeView";
    let o: any = ((this as any).node as any).isInline ? "span" : "div";
    ((this as any).options as any).as && (o = ((this as any).options as any).as);
    const {
      className: l = ""
    }: any = (this as any).options;
    (this as any).handleSelectionUpdate = (((this as any).handleSelectionUpdate as any).bind as any)(this), (this as any).renderer = new (Qo as any)(s, {
      editor: (this as any).editor,
      props: e,
      as: o,
      className: ((`node-${(((this as any).node as any).type as any).name} ${l}` as any).trim as any)()
    }), (((this as any).editor as any).on as any)("selectionUpdate", (this as any).handleSelectionUpdate), ((this as any).updateElementAttributes as any)();
  }
  get dom(): any {
    var e: any;
    if ((((this as any).renderer as any).element as any).firstElementChild && !(((e = (((this as any).renderer as any).element as any).firstElementChild) as any) != (null as any) && ((e as any).hasAttribute as any)("data-node-view-wrapper"))) throw (Error as any)("Please use the NodeViewWrapper component for your node view.");
    return ((this as any).renderer as any).element;
  }
  get contentDOM(): any {
    return ((this as any).node as any).isLeaf ? null : (this as any).contentDOMElement;
  }
  handleSelectionUpdate(): any {
    (this as any).selectionRafId && ((cancelAnimationFrame as any)((this as any).selectionRafId), (this as any).selectionRafId = null), (this as any).selectionRafId = (requestAnimationFrame as any)((): any => {
      (this as any).selectionRafId = null;
      const {
          from: e,
          to: t
        }: any = (((this as any).editor as any).state as any).selection,
        n: any = ((this as any).getPos as any)();
      if ((typeof n as any) == ("number" as any)) if ((e as any) <= (n as any) && (t as any) >= ((n as any) + (((this as any).node as any).nodeSize as any) as any)) {
        if ((((this as any).renderer as any).props as any).selected) return;
        ((this as any).selectNode as any)();
      } else {
        if (!(((this as any).renderer as any).props as any).selected) return;
        ((this as any).deselectNode as any)();
      }
    });
  }
  update(e: any, t: any, n: any): any {
    const i: any = (r: any): any => {
      (((this as any).renderer as any).updateProps as any)(r), (typeof ((this as any).options as any).attrs as any) == ("function" as any) && ((this as any).updateElementAttributes as any)();
    };
    if (((e as any).type as any) !== (((this as any).node as any).type as any)) return !1;
    if ((typeof ((this as any).options as any).update as any) == ("function" as any)) {
      const r: any = (this as any).node,
        s: any = (this as any).decorations,
        o: any = (this as any).innerDecorations;
      return (this as any).node = e, (this as any).decorations = t, (this as any).innerDecorations = n, (((this as any).options as any).update as any)({
        oldNode: r,
        oldDecorations: s,
        newNode: e,
        newDecorations: t,
        oldInnerDecorations: o,
        innerDecorations: n,
        updateProps: (): any => (i as any)({
          node: e,
          decorations: t,
          innerDecorations: n
        })
      });
    }
    return (e as any) === ((this as any).node as any) && ((this as any).decorations as any) === (t as any) && ((this as any).innerDecorations as any) === (n as any) || ((this as any).node = e, (this as any).decorations = t, (this as any).innerDecorations = n, (i as any)({
      node: e,
      decorations: t,
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
      let e: any = {};
      if ((typeof ((this as any).options as any).attrs as any) == ("function" as any)) {
        const t: any = (((this as any).editor as any).extensionManager as any).attributes,
          n: any = (no as any)((this as any).node, t);
        e = (((this as any).options as any).attrs as any)({
          node: (this as any).node,
          HTMLAttributes: n
        });
      } else e = ((this as any).options as any).attrs;
      (((this as any).renderer as any).updateAttributes as any)(e);
    }
  }
};
function xr(this: any, e: any, t: any): any {
  return (n: any): any => ((n as any).editor as any).contentComponent ? new (Yo as any)(e, n, t) : {};
}
const Jo: any = new (Set as any)(["javascript:", "vbscript:"]),
  el: string = "https://safe-href.invalid/",
  tl: any = /^data:image\//i;
function On(this: any, e: any, t: any, n: any): any {
  const i: any = ((t as any).toLowerCase as any)();
  return ((Jo as any).has as any)(i) ? !0 : (i as any) !== ("data:" as any) ? !1 : (e as any) === ("href" as any) ? !0 : !((tl as any).test as any)(((n as any).trim as any)());
}
function Pe(this: any, e: any, t: any = "href", n: any): any {
  if ((e as any) == (null as any) || ((((e as any).trim as any)() as any).length as any) === (0 as any)) return;
  const i: any = (n?.decode as any) === (!1 as any) ? e : (Ao as any)(e);
  try {
    const r: any = new (URL as any)(i);
    return (On as any)(t, (r as any).protocol, i) ? void 0 : (r as any).href;
  } catch {
    try {
      const r: any = new (URL as any)(i, el);
      if ((On as any)(t, (r as any).protocol, i)) return;
    } catch {
      return;
    }
    return i;
  }
}
function Dn(this: any, e: any): any {
  return "button" in e && "clientX" in e && "clientY" in e;
}
function nl(this: any, e: any): any {
  return "key" in e;
}
function _t(this: any, e: any): any {
  if (!e || (typeof e as any) != ("object" as any) || !("nodeType" in e)) return;
  const t: any = e;
  return ((t as any).nodeType as any) === ((Node as any).ELEMENT_NODE as any) ? t : (t as any).parentElement ?? void 0;
}
function il(this: any, e: any): any {
  const t: any = ((e as any).getBoundingClientRect as any)();
  return {
    x: (t as any).left,
    y: (t as any).bottom
  };
}
function Hn(this: any, e: any, t: any): any {
  const n: any = (Pe as any)(e);
  return n ? {
    href: n,
    anchor: t
  } : void 0;
}
function rl(this: any, {
  onLinkContextMenu: e,
  getHref: t,
  getLinkElement: n
}: any): any {
  let i: any;
  const r: any = (s: any): any => {
    if (s) return n ? (n as any)(s) : s;
  };
  return {
    mousedown(s: any, o: any): any {
      if (!(Dn as any)(o)) return !1;
      const l: any = ((o as any).button as any) === (0 as any) && (o as any).ctrlKey && (Bs as any)();
      if (((o as any).button as any) !== (2 as any) && !l) return i = void 0, !1;
      const a: any = (r as any)((_t as any)((o as any).target));
      return !a || !e || !(Pe as any)((t as any)(a)) ? !1 : (i = {
        doc: ((s as any).state as any).doc,
        linkElement: a,
        selection: ((s as any).state as any).selection
      }, ((o as any).preventDefault as any)(), !0);
    },
    contextmenu(s: any, o: any): any {
      if (!(Dn as any)(o)) return !1;
      const l: any = (r as any)((_t as any)((o as any).target)),
        a: any = l ? (t as any)(l) : void 0,
        u: any = (a as any) !== (void 0 as any) ? (Hn as any)(a, {
          x: (o as any).clientX,
          y: (o as any).clientY
        }) : void 0;
      if (!e) return i = void 0, !1;
      if (!u) return i = void 0, (a as any) !== (void 0 as any) ? (((o as any).preventDefault as any)(), ((o as any).stopPropagation as any)(), !0) : !1;
      const c: any = i;
      return i = void 0, (c?.doc as any) === (((s as any).state as any).doc as any) && ((c as any).linkElement as any) === (l as any) && ((s as any).dispatch as any)(((((s as any).state as any).tr as any).setSelection as any)((c as any).selection)), ((o as any).preventDefault as any)(), ((o as any).stopPropagation as any)(), (e as any)(u), !0;
    },
    keydown(s: any, o: any): any {
      if (!(nl as any)(o) || (o as any).repeat) return !1;
      const l: any = ((o as any).key as any) === ("ContextMenu" as any),
        a: any = ((o as any).key as any) === ("F10" as any) && (o as any).shiftKey;
      if (!l && !a || !e) return !1;
      const u: any = (r as any)((_t as any)((o as any).target)),
        c: any = u ? (t as any)(u) : void 0;
      if (!u || (c as any) === (void 0 as any)) return !1;
      ((o as any).preventDefault as any)(), ((o as any).stopPropagation as any)();
      const d: any = (Hn as any)(c, (il as any)(u));
      return d && (e as any)(d), !0;
    }
  };
}
const sl: any = {
    base: {
      k1xSpc: "ui-t0psk2",
      kMnn75: "ui-krqix3",
      kkrTdU: "ui-1ypdohk",
      k63SB2: "ui-ng2saa",
      kaIpWk: "ui-12oqio5",
      kUOVxO: "ui-1iyyiug",
      k8WAf4: "ui-j8oexa",
      kg3NbH: "ui-5k8d2m",
      keMLs9: "ui-yh5bb9",
      kPmA4f: "ui-19bzpp3",
      khDVqt: "ui-eaf4i8",
      kHjlTd: "ui-j0a0fe",
      kTgw9: "ui-13faqbe",
      "--markdown-inline-code-bg": "ui-xpcyif",
      "--markdown-inline-code-radius": "ui-htr15d",
      "--markdown-inline-code-padding-block": "ui-1kzln4z",
      "--markdown-inline-code-padding-inline": "ui-1sonb58",
      $$css: !0
    }
  },
  ol: any = {
    inlineChip: {
      khDVqt: "ui-uxw1ft",
      kHjlTd: "ui-1h4wwuj",
      kTgw9: "ui-1lldw8n",
      $$css: !0
    }
  },
  ll: any = {
    base: {
      k1ekBW: "ui-s2xxs2",
      kIyJzY: "ui-7pq1vu",
      kAMwcw: "ui-6tor67",
      $$css: !0
    }
  },
  Bn: any = {
    link: {
      kMwMTN: "ui-l1v4ol ui-16xb0gl",
      kGzVvX: "ui-yrwzsf",
      $$css: !0
    },
    primary: {
      kMwMTN: "ui-1wd3ewq ui-1p8fkj",
      kGzVvX: "ui-1iuyybk",
      $$css: !0
    }
  },
  al: any = {
    slot: {
      k1xSpc: "ui-3nfvp2",
      kGNEyG: "ui-6s0dn4",
      kjj79g: "ui-l56j7k",
      kzqmXN: "ui-15vhz18",
      kZKoxP: "ui-lzyvqe",
      kXLuUW: "ui-14pnk2",
      k71WvV: "ui-8vfdiz",
      kfSwDN: "ui-87ps6o",
      $$css: !0
    }
  };
function ul(this: any, e: any): any {
  return (e as any) === ("primary" as any) ? (Bn as any).primary : (Bn as any).link;
}
function cl(this: any, e: any, t: any = !1): any {
  return [(sl as any).base, (ll as any).base, (ul as any)(e), t ? (ol as any).inlineChip : null];
}
function dl(this: any): any {
  return (al as any).slot;
}
const Be: any = {
  icon: {
    k1xSpc: "ui-1rg5ohu",
    kXLuUW: "ui-xymvpz",
    km5ZXQ: "ui-r0t2fk",
    $$css: !0
  },
  cursorIcon: {
    k1xSpc: "ui-3nfvp2",
    kGNEyG: "ui-6s0dn4",
    kjj79g: "ui-l56j7k",
    kzqmXN: "ui-15vhz18",
    kZKoxP: "ui-lzyvqe",
    kXLuUW: "ui-xymvpz",
    km5ZXQ: "ui-r0t2fk",
    kVQacm: "ui-1rea2x4",
    k3aq6I: "ui-1m2fbaf",
    $$css: !0
  },
  codicon: {
    kXLuUW: "ui-xymvpz",
    kpe85a: "ui-vipilk",
    k3aq6I: "ui-1n84xhb",
    $$css: !0
  },
  showFileIcons: {
    k1xSpc: "ui-1rg5ohu",
    k4mN81: "ui-cwn45a",
    k9OqR7: "ui-advhij",
    k5vRlq: "ui-1f6s7ln",
    $$css: !0
  },
  monacoIconLabel: {
    k1xSpc: "ui-1rg5ohu",
    kXLuUW: "ui-xymvpz",
    kzqmXN: "ui-rqk1uk",
    kZKoxP: "ui-1nb25p5",
    kLWn49: "ui-1ksnp83",
    kP1sEF: "ui-1fhgk32",
    $$css: !0
  },
  inlineCodeSyntax: {
    kGuDYH: "ui-gxxoiu",
    kb6lSQ: "ui-12oo3zp",
    k33iCy: "ui-lshs6z",
    kzqmXN: "ui-nalus7",
    k1xSpc: "ui-t0psk2",
    $$css: !0
  },
  inlineCodeText: {
    kMwMTN: "ui-l1v4ol",
    kkrTdU: "ui-1ypdohk",
    kMnn75: "ui-ujl8zx",
    kmVMDM: "ui-i2nhp4 ui-13iqwor",
    kcSHmL: "ui-g830sg",
    kMv6JI: "ui-jb2p0i",
    kGuDYH: "ui-1qlqyl8",
    k63SB2: "ui-1pd3egz",
    khDVqt: "ui-eaf4i8",
    kTgw9: "ui-1lldw8n",
    kHjlTd: "ui-j0a0fe",
    k33iCy: "ui-npuxes",
    kSiTet: "ui-1hc1fzr ui-1f2zl9v",
    $$css: !0
  }
};
function hl(this: any): any {
  return (cl as any)("link");
}
function pl(this: any): any {
  return (Be as any).icon;
}
function fl(this: any): any {
  return (Be as any).cursorIcon;
}
function ml(this: any): any {
  return (Be as any).codicon;
}
function gl(this: any): any {
  return (Be as any).showFileIcons;
}
function kl(this: any): any {
  return (Be as any).monacoIconLabel;
}
function bl(this: any): any {
  return (Be as any).inlineCodeSyntax;
}
function yl(this: any): any {
  return (Be as any).inlineCodeText;
}
function fn(this: any, e: any): any {
  return ((e as any).startsWith as any)("http://") || ((e as any).startsWith as any)("https://") || ((e as any).startsWith as any)("mailto:") || ((e as any).startsWith as any)("tel:") ? !1 : !!(((e as any).startsWith as any)("file://") || ((e as any).startsWith as any)("/") || ((e as any).startsWith as any)("./") || ((e as any).startsWith as any)("../") || ((/\.(ts|tsx|js|jsx|py|rs|go|java|c|cpp|h|hpp|css|scss|html|json|yaml|yml|toml|md|sql|proto|sh|bash|zsh)$/i as any).test as any)(e) || ((e as any).includes as any)("/") && !((e as any).includes as any)("://") || !((e as any).includes as any)("://") && !((e as any).includes as any)(" ") && ((/^[\w.-]+$/ as any).test as any)(e));
}
const Un: any = {
    anchor: {
      k1xSpc: "ui-t0psk2",
      kUOVxO: "ui-1iyyiug",
      k8WAf4: "ui-11jd7i5",
      kg3NbH: "ui-1bfovwe",
      kaIpWk: "ui-1e1y6u3",
      keMLs9: "ui-yh5bb9",
      kPmA4f: "ui-19bzpp3",
      kMwMTN: "ui-l1v4ol",
      kWkggS: "ui-jbqb8w ui-yrwzsf ui-wk1sgf",
      kGVxlE: "ui-23750h",
      kMeerF: "ui-1k57tk5",
      k3XXqK: "ui-1t137rt",
      kMnn75: "ui-krqix3 ui-1ubmc1d ui-1mqgifo",
      khDVqt: "ui-eaf4i8",
      kHjlTd: "ui-j0a0fe",
      kTgw9: "ui-13faqbe",
      k63SB2: "ui-1yl5bsf",
      kkrTdU: "ui-1ypdohk",
      k1ekBW: "ui-s2xxs2",
      kIyJzY: "ui-7pq1vu",
      kAMwcw: "ui-6tor67",
      "--markdown-inline-code-bg": "ui-xpcyif",
      "--markdown-inline-code-radius": "ui-htr15d",
      "--markdown-inline-code-padding-block": "ui-1kzln4z",
      "--markdown-inline-code-padding-inline": "ui-1sonb58",
      $$css: !0
    },
    status: {
      kVAEAm: "ui-10l6tqk",
      kzqmXN: "ui-1i1rx1s",
      kZKoxP: "ui-jm9jq1",
      keoZOQ: "ui-1y332i5",
      k71WvV: "ui-jn30re",
      k1K539: "ui-1jyxor1",
      keTefX: "ui-1hb08if",
      kLKAdn: "ui-exx8yu",
      kwRFfy: "ui-yri2b",
      kGO01o: "ui-18d9i69",
      kZCmMZ: "ui-1c1uobl",
      kXHlph: "ui-6ikm8r",
      kORKVm: "ui-10wlt62",
      kMcinP: "ui-zpqnlu",
      khDVqt: "ui-uxw1ft",
      kEafiO: "ui-972fbf",
      ke9TFa: "ui-10w94by",
      kt9PQ7: "ui-1qhh985",
      k2ei4v: "ui-14e42zd",
      $$css: !0
    }
  },
  wl: number = 14,
  xl: any = (e: any): any => `${(e as any) / (wl as any)}em`,
  Fn: any = {
    "--icon-size": "1em",
    fontSize: (xl as any)(13)
  },
  vl: any = (ye as any)({
    rootClass: "ui-citation-link",
    stylexStyles: (hl as any)()
  });
function Kt(this: any, e: any, t: any, n: any = !1): any {
  const i: any = (typeof (t as any).href as any) == ("string" as any) ? (t as any).href : void 0,
    r: any = i && (e as any).detectFilePaths ? (e as any).isCitation?.(i, i) ?? (fn as any)(i) : !1;
  return (xe as any)((e as any).HTMLAttributes, n ? {
    ...t,
    class: null,
    "data-citation": null
  } : t, r && !n ? {
    class: (vl as any).className,
    "data-citation": "true"
  } : {});
}
const vr: any = ((so as any).extend as any)({
  name: "link",
  addOptions(): any {
    return {
      ...(this as any).parent?.(),
      HTMLAttributes: {},
      detectFilePaths: !0,
      protocols: ["http", "https", "mailto", "file"],
      openOnClick: !1
    };
  },
  addAttributes(): any {
    return {
      ...(this as any).parent?.(),
      href: {
        default: null
      },
      target: {
        default: null
      },
      rel: {
        default: null
      },
      class: {
        default: null
      },
      "data-citation": {
        default: null
      }
    };
  },
  renderHTML({
    HTMLAttributes: e
  }: any): any {
    return ["a", (Kt as any)((this as any).options, e), 0];
  },
  addKeyboardShortcuts(): any {
    return {
      "Mod-k": (): any => ((((this as any).editor as any).commands as any).toggleLink as any)({
        href: ""
      })
    };
  }
});
function Sl(this: any, e: any, t: any): any {
  const n: any = ((t as any).createElement as any)("span");
  (n as any).className = ((C as any)((dl as any)()) as any).className ?? "", ((n as any).dataset as any).richLinkIcon = (e as any).name, ((n as any).setAttribute as any)("aria-hidden", "true");
  const i: any = ((t as any).createElement as any)("i");
  return (i as any).className = ((C as any)((ir as any)("base", (e as any).color, void 0)) as any).className ?? "", ((i as any).style as any).fontSize = (Fn as any).fontSize, (((i as any).style as any).setProperty as any)("--icon-size", (Fn as any)["--icon-size"]), (((i as any).style as any).setProperty as any)("--cursor-icon-content", `"${(er as any)((e as any).name)}"`), ((i as any).dataset as any).iconName = (e as any).name, ((i as any).setAttribute as any)("aria-hidden", "true"), ((n as any).appendChild as any)(i), n;
}
function Cl(this: any, e: any, t: any, n: any): any {
  const i: any = ((C as any)((Un as any).anchor) as any).className?.split(/\s+/).filter(Boolean) ?? [];
  let r: any, s: any;
  return (o: any): any => {
    if (!o) {
      r?.remove(), r = void 0, s?.remove(), s = void 0, (((e as any).classList as any).remove as any)(...i), delete ((e as any).dataset as any).richLinkAnchor, ((e as any).removeAttribute as any)("tabindex"), delete ((t as any).dataset as any).richLinkLabel;
      return;
    }
    (((e as any).classList as any).add as any)(...i), ((e as any).dataset as any).richLinkAnchor = "", (e as any).tabIndex = 0, ((t as any).dataset as any).richLinkLabel = "";
    const l: any = (Sl as any)((o as any).icon, n);
    if (r ? ((r as any).replaceWith as any)(l) : ((e as any).insertBefore as any)(l, t), r = l, !(o as any).statusLabel) {
      s?.remove(), s = void 0;
      return;
    }
    if (!s) {
      s = ((n as any).createElement as any)("span");
      const a: any = (C as any)((Un as any).status);
      (s as any).className = (a as any).className ?? "", ((Object as any).assign as any)((s as any).style, (a as any).style), ((s as any).dataset as any).richLinkStatus = "", ((s as any).setAttribute as any)("contenteditable", "false"), ((s as any).setAttribute as any)("aria-live", "polite"), ((e as any).appendChild as any)(s);
    }
    ((s as any).setAttribute as any)("aria-label", (o as any).statusLabel), (s as any).textContent = `, ${(o as any).statusLabel}`;
  };
}
const Tl: any = ((vr as any).extend as any)({
    renderHTML({
      HTMLAttributes: e
    }: any): any {
      const t: any = (Pe as any)((typeof (e as any).href as any) == ("string" as any) ? (e as any).href : void 0),
        n: any = (t as any) !== (void 0 as any) && (((((this as any).options as any).richLinkPresentationProvider as any).resolve as any)(t) as any) !== (void 0 as any);
      return ["a", (Kt as any)((this as any).options, e, n), 0];
    },
    addMarkView(): any {
      const e: any = (this as any).options;
      return ({
        HTMLAttributes: t,
        view: n
      }: any): any => {
        const i: any = ((n as any).dom as any).ownerDocument,
          r: any = ((i as any).createElement as any)("a"),
          s: any = (Pe as any)((typeof (t as any).href as any) == ("string" as any) ? (t as any).href : void 0),
          o: any = (s as any) === (void 0 as any) ? void 0 : (((e as any).richLinkPresentationProvider as any).resolve as any)(s),
          l: any = (s as any) === (void 0 as any) ? r : ((i as any).createElement as any)("span"),
          a: any = s ? (Cl as any)(r, l, i) : void 0,
          u: any = (l as any) !== (r as any),
          c: any = (h: any): any => {
            if (((h as any).key as any) !== ("Enter" as any) || (h as any).repeat) return;
            ((h as any).preventDefault as any)(), ((h as any).stopPropagation as any)();
            const p: any = (Pe as any)(((r as any).getAttribute as any)("href") ?? "");
            if ((p as any) !== (void 0 as any)) {
              if ((e as any).onLinkClick) {
                ((e as any).onLinkClick as any)(p);
                return;
              }
              (e as any).onCitationClick && (((r as any).classList as any).contains as any)("ui-citation-link") && ((e as any).onCitationClick as any)(p);
            }
          };
        for (const [h, p] of ((Object as any).entries as any)((Kt as any)(e, t, (o as any) !== (void 0 as any)))) (p as any) != (null as any) && ((r as any).setAttribute as any)(h, (String as any)(p));
        u && (((r as any).appendChild as any)(l), a?.(o));
        const d: any = s ? ((e as any).richLinkPresentationProvider as any).subscribe?.(s, (): any => {
          const h: any = (((e as any).richLinkPresentationProvider as any).resolve as any)(s);
          a?.(h);
        }) ?? ((): any => {}) : (): any => {};
        return ((r as any).addEventListener as any)("keydown", c), {
          dom: r,
          contentDOM: l,
          ignoreMutation: (h: any): any => ((h as any).type as any) === ("attributes" as any) && (((h as any).target as any) === (r as any) || ((h as any).target as any) === (l as any)) || u && ((h as any).target as any) !== (l as any) && !((l as any).contains as any)((h as any).target),
          destroy: (): any => {
            (d as any)(), ((r as any).removeEventListener as any)("keydown", c);
          }
        };
      };
    }
  }),
  Wn: any = (C as any)((bl as any)()),
  Rl: any = (ye as any)({
    rootClass: "ui-inline-code-link-text",
    stylexStyles: (yl as any)()
  }),
  rt: any = new (RegExp as any)("(?<!\\\\)\\[([^\\]]+)\\]\\(((?:[^()]|\\([^)]*\\))+)\\)", "g");
function Vn(this: any, e: any, t: any): any {
  const n: any = [],
    {
      onlyFilePaths: i = !0,
      shouldLinkify: r,
      onLinkClick: s
    }: any = t;
  return ((e as any).descendants as any)((o: any, l: any): any => {
    if ((o as any).isText && (((o as any).marks as any).some as any)((a: any): any => (((a as any).type as any).name as any) === ("code" as any))) {
      const a: any = (o as any).text || "";
      (rt as any).lastIndex = 0;
      let u: any = ((rt as any).exec as any)(a);
      for (; (u as any) !== (null as any);) {
        const [c, d, h]: any = u,
          p: any = (l as any) + ((u as any).index as any);
        let f: any = !0;
        if (r ? f = (r as any)(h, d) : i && (f = (fn as any)(h)), !f) {
          u = ((rt as any).exec as any)(a);
          continue;
        }
        const g: any = {
          end: (p as any) + ((c as any).length as any),
          openBracketStart: p,
          openBracketEnd: (p as any) + (1 as any),
          textStart: (p as any) + (1 as any),
          textEnd: ((p as any) + (1 as any) as any) + ((d as any).length as any),
          closeBracketStart: ((p as any) + (1 as any) as any) + ((d as any).length as any),
          closeBracketEnd: (((p as any) + (1 as any) as any) + ((d as any).length as any) as any) + (2 as any),
          closeParenStart: ((p as any) + ((c as any).length as any) as any) - (1 as any),
          closeParenEnd: (p as any) + ((c as any).length as any)
        };
        ((n as any).push as any)(((Q as any).inline as any)((g as any).openBracketStart, (g as any).openBracketEnd, {
          class: (Wn as any).className
        })), ((n as any).push as any)(((Q as any).inline as any)((g as any).textStart, (g as any).textEnd, {
          class: (Rl as any).className,
          "data-href": h,
          title: h
        })), ((n as any).push as any)(((Q as any).inline as any)((g as any).closeBracketStart, (g as any).closeParenEnd, {
          class: (Wn as any).className
        })), u = ((rt as any).exec as any)(a);
      }
    }
    return !0;
  }), ((Ie as any).create as any)(e, n);
}
const Ml: any = ((ne as any).create as any)({
    name: "inlineCodeLink",
    addOptions(): any {
      return {
        onlyFilePaths: !0,
        shouldLinkify: void 0,
        onLinkClick: void 0
      };
    },
    addProseMirrorPlugins(): any {
      const e: any = (this as any).options;
      return [new (ie as any)({
        key: new (le as any)("inlineCodeLink"),
        state: {
          init(t: any, {
            doc: n
          }: any): any {
            return (Vn as any)(n, e);
          },
          apply(t: any, n: any): any {
            return (t as any).docChanged ? (Vn as any)((t as any).doc, e) : n;
          }
        },
        props: {
          decorations(t: any): any {
            return ((this as any).getState as any)(t);
          },
          handleClick(t: any, n: any, i: any): any {
            const r: any = (i as any).target;
            if ((((r as any).classList as any).contains as any)("ui-inline-code-link-text")) {
              const s: any = ((r as any).getAttribute as any)("data-href");
              if (s && (e as any).onLinkClick) return ((i as any).preventDefault as any)(), ((i as any).stopPropagation as any)(), ((e as any).onLinkClick as any)(s), !0;
            }
            return !1;
          }
        }
      })];
    }
  }),
  El: any = new (le as any)("citationLinkDecorations");
function $l(this: any, e: any): any {
  const t: any = ((e as any).createElement as any)("span"),
    n: any = (C as any)((pl as any)());
  return (t as any).className = (n as any).className ?? "", ((Object as any).assign as any)((t as any).style, (n as any).style), t;
}
function zl(this: any, e: any, t: any, n: any): any {
  const i: any = ((t as any).createElement as any)("span"),
    r: any = (C as any)((fl as any)());
  (i as any).className = (r as any).className ?? "", ((Object as any).assign as any)((i as any).style, (r as any).style);
  const s: any = ((e as any).replace as any)(/^file:\/\//, ""),
    o: any = ((/[/\\]$/ as any).test as any)(s);
  let l: any = o ? "folder" : "file",
    a: any = "outline",
    u: any;
  if (!o) {
    const h: any = (Ro as any)({
      filenameOrExt: s,
      preferred: n
    });
    ((h as any).variant as any) !== ("seti" as any) ? (l = (h as any).iconName, a = (h as any).style, u = (h as any).color) : u = ((Eo as any)(s) as any).semanticColor;
  }
  const c: any = ((t as any).createElement as any)("i"),
    d: any = (ye as any)({
      rootClass: "ui-icon",
      stylexStyles: (ir as any)(12, void 0, void 0),
      className: "cursor-icon"
    });
  return (c as any).className = (d as any).className, ((Object as any).assign as any)((c as any).style, (d as any).style), ((c as any).style as any).fontSize = `${(12 as any) / (14 as any)}em`, (((c as any).style as any).setProperty as any)("--icon-size", "1em"), (((c as any).style as any).setProperty as any)("--cursor-icon-content", `"${(er as any)(l, a)}"`), (u as any) !== (void 0 as any) && (((c as any).style as any).color = ($o as any)(u)), ((c as any).dataset as any).iconName = l, ((c as any).setAttribute as any)("aria-hidden", "true"), ((i as any).appendChild as any)(c), i;
}
function jl(this: any, e: any, t: any): any {
  const n: any = ($l as any)(t);
  if (((e as any).includes as any)("folder-icon")) {
    const r: any = ((t as any).createElement as any)("span"),
      s: any = (ye as any)({
        rootClass: "ui-citation-link-codicon",
        stylexStyles: (ml as any)(),
        className: (or as any)("folder")
      });
    (r as any).className = (s as any).className, ((Object as any).assign as any)((r as any).style, (s as any).style), ((n as any).appendChild as any)(r);
  } else {
    const r: any = ((t as any).createElement as any)("span"),
      s: any = (ye as any)({
        rootClass: "ui-citation-link-show-file-icons",
        stylexStyles: (gl as any)(),
        className: "show-file-icons"
      });
    (r as any).className = (s as any).className, ((Object as any).assign as any)((r as any).style, (s as any).style);
    const o: any = ((t as any).createElement as any)("span"),
      l: any = (ye as any)({
        rootClass: "ui-citation-link-monaco-icon-label",
        stylexStyles: (kl as any)(),
        className: ((["monaco-icon-label", ...e] as any).join as any)(" ")
      });
    (o as any).className = (l as any).className, ((Object as any).assign as any)((o as any).style, (l as any).style), ((r as any).appendChild as any)(o), ((n as any).appendChild as any)(r);
  }
  return n;
}
function Al(this: any, e: any): any {
  return (e as any) === ("/" as any) || (e as any) === ("\\" as any);
}
function Nl(this: any, e: any): any {
  return ((e as any).createElement as any)("wbr");
}
function Kn(this: any, e: any, t: any): any {
  const n: any = [],
    i: any = new (Set as any)(),
    {
      iconProvider: r,
      fileIconVariant: s,
      richLinkPresentationProvider: o,
      checkIsCitation: l
    }: any = t,
    a: any = (s as any) !== (void 0 as any) && (s as any) !== ("seti" as any);
  return ((e as any).descendants as any)((u: any, c: any): any => {
    if (!(u as any).isText) return;
    const d: any = (((u as any).marks as any).find as any)((k: any): any => (((k as any).type as any).name as any) === ("link" as any));
    if (!d) return;
    const h: any = (typeof ((d as any).attrs as any).href as any) == ("string" as any) ? ((d as any).attrs as any).href : void 0;
    if (!h) return;
    const p: any = (Pe as any)(h);
    if ((p as any) !== (void 0 as any) && (o?.resolve(p) as any) !== (void 0 as any) || !(l as any)(h, (u as any).text ?? h)) return;
    if ((a || r) && !((i as any).has as any)(c)) {
      if (((i as any).add as any)(c), (s as any) !== (void 0 as any) && (s as any) !== ("seti" as any)) ((n as any).push as any)(((Q as any).widget as any)(c, (k: any): any => (zl as any)(h, ((k as any).dom as any).ownerDocument, s), {
        side: -1,
        key: `citation-icon-${c}`,
        marks: (u as any).marks
      }));else if (r) {
        const k: any = (r as any)(h);
        ((k as any).length as any) > (0 as any) && ((n as any).push as any)(((Q as any).widget as any)(c, (b: any): any => (jl as any)(k, ((b as any).dom as any).ownerDocument), {
          side: -1,
          key: `citation-icon-${c}`,
          marks: (u as any).marks
        }));
      }
    }
    const g: any = (u as any).text ?? "";
    for (let k: any = 0; (k as any) < (((g as any).length as any) - (1 as any) as any); k++) (Al as any)((g as any)[k]) && ((n as any).push as any)(((Q as any).widget as any)(((c as any) + (k as any) as any) + (1 as any), (b: any): any => (Nl as any)(((b as any).dom as any).ownerDocument), {
      side: 1,
      key: `citation-break-${c}-${k}`,
      marks: (u as any).marks
    }));
  }), ((Ie as any).create as any)(e, n);
}
function Il(this: any, e: any): any {
  const {
      iconProvider: t,
      fileIconVariant: n,
      richLinkPresentationProvider: i,
      isCitation: r,
      onCitationClick: s,
      onLinkClick: o,
      onLinkContextMenu: l
    }: any = e,
    a: any = r ?? ((d: any): any => (fn as any)(d)),
    u: any = (d: any): any => {
      if (!((d as any).closest as any)("[data-rte-prose-boundary]")) return ((d as any).closest as any)("a[href]") ?? void 0;
    },
    c: any = (rl as any)({
      onLinkContextMenu: l,
      getHref: (d: any): any => ((d as any).closest as any)("a[href]")?.getAttribute("href") ?? void 0,
      getLinkElement: u
    });
  return ((ne as any).create as any)({
    name: "citationLinkDecorations",
    addProseMirrorPlugins(): any {
      return [new (ie as any)({
        key: El,
        state: {
          init(d: any, {
            doc: h
          }: any): any {
            return (Kn as any)(h, {
              iconProvider: t,
              fileIconVariant: n,
              richLinkPresentationProvider: i,
              checkIsCitation: a
            });
          },
          apply(d: any, h: any): any {
            return (d as any).docChanged ? (Kn as any)((d as any).doc, {
              iconProvider: t,
              fileIconVariant: n,
              richLinkPresentationProvider: i,
              checkIsCitation: a
            }) : h;
          }
        },
        props: {
          decorations(d: any): any {
            return ((this as any).getState as any)(d);
          },
          handleClick(d: any, h: any, p: any): any {
            const f: any = (p as any).target;
            if (!f || !("nodeType" in f) || ((f as any).nodeType as any) !== (1 as any)) return !1;
            const g: any = (u as any)(f);
            if (!g) return !1;
            const k: any = (Pe as any)(((g as any).getAttribute as any)("href") ?? "");
            return (k as any) === (void 0 as any) ? (((p as any).preventDefault as any)(), ((p as any).stopPropagation as any)(), !0) : o ? (((p as any).preventDefault as any)(), ((p as any).stopPropagation as any)(), (o as any)(k), !0) : s && (((g as any).classList as any).contains as any)("ui-citation-link") ? (((p as any).preventDefault as any)(), ((p as any).stopPropagation as any)(), (s as any)(k), !0) : !1;
          },
          handleDOMEvents: c
        }
      })];
    }
  });
}
function Sr(this: any, e: any = {}): any {
  (Sr as any).d = 2819444002;
  const {
      detectFilePaths: t = !0,
      detectLinksInCode: n = !0,
      isCitation: i,
      onCitationClick: r,
      onLinkClick: s,
      onLinkContextMenu: o,
      iconProvider: l,
      fileIconVariant: a,
      richLinkPresentationProvider: u,
      openOnClick: c = !1,
      protocols: d = ["http", "https", "mailto", "file"]
    }: any = e,
    h: any = {
      detectFilePaths: t,
      isCitation: i,
      openOnClick: c,
      protocols: d
    },
    f: any = [u ? ((Tl as any).configure as any)({
      ...h,
      onCitationClick: r,
      onLinkClick: s,
      richLinkPresentationProvider: u
    }) : ((vr as any).configure as any)(h)];
  return n && ((f as any).push as any)(((Ml as any).configure as any)({
    onlyFilePaths: t,
    shouldLinkify: i,
    onLinkClick: s ?? r
  })), (l || (a as any) !== (void 0 as any) && (a as any) !== ("seti" as any) || u || r || s || o) && ((f as any).push as any)((Il as any)({
    iconProvider: l,
    fileIconVariant: a,
    richLinkPresentationProvider: u,
    isCitation: i,
    onCitationClick: r,
    onLinkClick: s,
    onLinkContextMenu: o
  })), {
    name: "citationLink",
    extensions: f
  };
}
function Ll(this: any, e: any): any {
  const t: any = (((e ?? "") as any).trim as any)(),
    n: any = ((t as any).search as any)(/\s/);
  return (n as any) < (0 as any) ? {
    kind: t,
    meta: ""
  } : {
    kind: ((t as any).slice as any)(0, n),
    meta: ((((t as any).slice as any)(n) as any).trim as any)()
  };
}
const Cr: any = ((x as any).memo as any)(function (this: any, {
  node: t,
  editor: n,
  extension: i
}: any): any {
  (Cr as any).d = 2786816236;
  const {
      renderers: r,
      showSourceToggle: s
    }: any = (i as any).options,
    o: any = (String as any)(((t as any).attrs as any).kind ?? ""),
    l: any = (String as any)(((t as any).attrs as any).meta ?? ""),
    a: any = (t as any).textContent,
    u: any = (n as any).isEditable,
    [c, d]: any = ((x as any).useState as any)(!1),
    h: any = (r as any)[o];
  return ((m as any).jsxs as any)(pn, {
    "data-rte-prose-boundary": "",
    "data-data-fence": o,
    className: "ui-1n2onr6 ui-12oomfp ui-olhukv",
    children: [((m as any).jsx as any)("div", {
      contentEditable: !1,
      className: "ui-euugli",
      children: h ? ((m as any).jsx as any)(h, {
        kind: o,
        meta: l,
        source: a,
        editable: u
      }) : ((m as any).jsxs as any)("span", {
        className: "ui-4b2ntj ui-1j6dyjg ui-1d3mw78",
        children: ["No renderer for `", o, "`"]
      })
    }), s ? ((m as any).jsx as any)("div", {
      contentEditable: !1,
      className: "ui-78zum5 ui-13a6bvl ui-1gslohp",
      children: ((m as any).jsx as any)("button", {
        type: "button",
        "aria-expanded": c,
        onClick: (): any => (d as any)((p: any): any => !p),
        className: "ui-jyslct ui-c342km ui-jbqb8w ui-4b2ntj ui-jb2p0i ui-1j6dyjg ui-1d3mw78 ui-exx8yu ui-1xpa7k ui-18d9i69 ui-1uhho1l ui-1ypdohk ui-7gh5u8",
        children: c ? "Hide data" : u ? "Edit data" : "Show data"
      })
    }) : null, ((m as any).jsx as any)(hn, {
      ...({
        0: {
          className: "ui-1s85apg"
        },
        1: {
          className: "ui-1lliihq ui-1xmf6yo ui-hayvgc ui-tfojpt ui-1evy7pa ui-126k92a ui-1001c07 ui-15ne75x ui-19uwr1l ui-pd0smn ui-1lnot31 ui-15bsgld"
        }
      } as any)[(!!c as any) << (0 as any)]
    })]
  });
});
function Xn(this: any, e: any, t: any): any {
  const n: any = (((e as any).schema as any).nodes as any).codeBlock;
  if (!n) return [];
  const i: any = [];
  return (((e as any).doc as any).descendants as any)((r: any, s: any): any => {
    if (((r as any).type as any) !== (n as any)) return;
    const {
      kind: o,
      meta: l
    }: any = (Ll as any)(((r as any).attrs as any).language);
    o in t && ((i as any).push as any)({
      pos: s,
      node: r,
      kind: o,
      meta: l
    });
  }), i;
}
function Gn(this: any, e: any, t: any, n: any): any {
  const i: any = (((n as any).schema as any).nodes as any).dataFence;
  for (let r: any = ((t as any).length as any) - (1 as any); (r as any) >= (0 as any); r--) {
    const {
        pos: s,
        node: o,
        kind: l,
        meta: a
      }: any = (t as any)[r],
      u: any = ((i as any).create as any)({
        kind: l,
        meta: a
      }, (((o as any).content as any).size as any) > (0 as any) ? (o as any).content : void 0);
    ((e as any).replaceWith as any)(s, (s as any) + ((o as any).nodeSize as any), u);
  }
  return e;
}
const Pl: any = ((He as any).create as any)({
    name: "dataFence",
    group: "block",
    content: "text*",
    inline: !1,
    code: !0,
    marks: "",
    atom: !1,
    defining: !0,
    addOptions(): any {
      return {
        HTMLAttributes: {},
        renderers: {},
        showSourceToggle: !0
      };
    },
    addAttributes(): any {
      return {
        kind: {
          default: "",
          parseHTML: (e: any): any => ((e as any).getAttribute as any)("data-fence-kind") ?? "",
          renderHTML: (e: any): any => ({
            "data-fence-kind": (e as any).kind
          })
        },
        meta: {
          default: "",
          parseHTML: (e: any): any => ((e as any).getAttribute as any)("data-fence-meta") ?? "",
          renderHTML: (e: any): any => ({
            "data-fence-meta": (e as any).meta
          })
        }
      };
    },
    renderMarkdown(e: any): any {
      const t: any = (e as any).content?.map((r: any): any => ((r as any).type as any) === ("text" as any) ? (r as any).text : "").join("") ?? "",
        n: any = (e as any).attrs ?? {};
      return `\`\`\`${(((([(n as any).kind ?? "", (n as any).meta ?? ""] as any).filter as any)(Boolean) as any).join as any)(" ")}
${t}
\`\`\`

`;
    },
    parseHTML(): any {
      return [{
        tag: "pre[data-fence-kind]",
        preserveWhitespace: "full"
      }];
    },
    renderHTML({
      HTMLAttributes: e
    }: any): any {
      return ["pre", (xe as any)(((this as any).options as any).HTMLAttributes, e, {
        "data-type": "data-fence"
      }), ["code", {}, 0]];
    },
    addNodeView(): any {
      return (xr as any)(Cr, {
        ignoreMutation: (): any => !0
      });
    },
    onCreate(): any {
      const {
          state: e
        }: any = (this as any).editor,
        t: any = (Xn as any)(e, ((this as any).options as any).renderers);
      ((t as any).length as any) !== (0 as any) && ((((this as any).editor as any).view as any).dispatch as any)((Gn as any)((e as any).tr, t, e));
    },
    addProseMirrorPlugins(): any {
      const e: any = ((this as any).options as any).renderers;
      return [new (ie as any)({
        key: new (le as any)("dataFenceTransform"),
        appendTransaction(t: any, n: any, i: any): any {
          if (!((t as any).some as any)((s: any): any => (s as any).docChanged)) return null;
          const r: any = (Xn as any)(i, e);
          return ((r as any).length as any) === (0 as any) ? null : (Gn as any)((i as any).tr, r, i);
        }
      })];
    }
  }),
  Et: any = {
    ink: "var(--rte-page-ink, var(--cursor-text-primary))",
    inkTertiary: "var(--rte-page-ink-tertiary, var(--cursor-text-tertiary))",
    hairlineSubtle: "var(--rte-page-hairline-subtle, var(--cursor-stroke-tertiary))",
    fill: "var(--rte-page-fill, var(--cursor-bg-secondary))"
  },
  ql: any = {
    k1xSpc: "ui-1rg5ohu",
    kaIpWk: "ui-1e6avla",
    kmuXW: "ui-2lah0s",
    $$css: !0
  },
  qe: any = (Et as any).ink,
  _e: any = (Et as any).inkTertiary,
  Tr: any = (Et as any).hairlineSubtle,
  mn: any = (Et as any).fill,
  Zn: any = [qe, _e, `color-mix(in srgb, ${_e} 45%, transparent)`, mn],
  We: any = (e: any, t: any): any => `var(--rte-page-data-${e}, ${t})`,
  _l: number = 8,
  Ol: any = (We as any)("other", mn),
  vt: any = (e: any): any => (e as any) < (_l as any) ? (We as any)((String as any)(e), (Zn as any)[((Math as any).min as any)(e, ((Zn as any).length as any) - (1 as any))]) : Ol,
  St: any = (e: any): any => (We as any)("0", e),
  Dl: any = (e: any): any => (We as any)("rest", e),
  Hl: any = (We as any)("other", _e),
  Bl: any = (We as any)("area", "transparent"),
  Qn: any = {
    success: `var(--rte-page-tone-success, ${(bt as any)["--cursor-text-success-primary"]})`,
    warning: `var(--rte-page-tone-warning, ${(bt as any)["--cursor-text-warning-primary"]})`,
    danger: `var(--rte-page-tone-danger, ${(bt as any)["--cursor-text-danger-primary"]})`
  },
  y: any = {
    body1: {
      kGuDYH: "ui-if65rj",
      kLWn49: "ui-1fc57z9",
      kb6lSQ: "ui-12oo3zp",
      $$css: !0
    },
    body2: {
      kGuDYH: "ui-4z9k3i",
      kLWn49: "ui-d4r4e8",
      kb6lSQ: "ui-1yppyca",
      $$css: !0
    },
    label: {
      kGuDYH: "ui-fifm61",
      kLWn49: "ui-1d3mw78",
      kb6lSQ: "ui-12oo3zp",
      $$css: !0
    },
    regular: {
      k63SB2: "ui-o1l8bm",
      $$css: !0
    },
    medium: {
      k63SB2: "ui-k50ysn",
      $$css: !0
    },
    ink: {
      kMwMTN: "ui-gv6h3j",
      $$css: !0
    },
    inkSecondary: {
      kMwMTN: "ui-1g4d90q",
      $$css: !0
    },
    inkTertiary: {
      kMwMTN: "ui-1rrbmv7",
      $$css: !0
    },
    tabular: {
      kcqcaj: "ui-ss6m8b",
      $$css: !0
    },
    right: {
      k9WMMc: "ui-1hr2gdg",
      $$css: !0
    },
    nowrap: {
      khDVqt: "ui-uxw1ft",
      $$css: !0
    },
    truncate: {
      kVQacm: "ui-b3r6kr",
      kg5iWk: "ui-lyipyv",
      khDVqt: "ui-uxw1ft",
      k7Eaqz: "ui-euugli",
      $$css: !0
    },
    tone: (e: any): any => [{
      kMwMTN: (e as any) != (null as any) ? "ui-14rh7hd" : e,
      $$css: !0
    }, {
      "--x-color": e ?? void 0
    }]
  },
  Ne: any = {
    reset: {
      kogj98: "ui-1ghz6dp",
      kmVPX3: "ui-1717udv",
      $$css: !0
    },
    failure: {
      kGuDYH: "ui-1j6dyjg",
      kLWn49: "ui-1d3mw78",
      kMwMTN: "ui-1rrbmv7",
      $$css: !0
    },
    column: {
      k1xSpc: "ui-78zum5",
      kXwgrk: "ui-dt5ytf",
      $$css: !0
    },
    dot: (e: any, t: any): any => [ql, {
      kzqmXN: (e as any) != (null as any) ? "ui-5lhr3w" : e,
      kZKoxP: (e as any) != (null as any) ? "ui-16ye13r" : e,
      kWkggS: (t as any) != (null as any) ? "ui-l8spv7" : t,
      $$css: !0
    }, {
      "--x-width": (((n: any): any => (typeof n as any) == ("number" as any) ? (n as any) + ("px" as any) : n ?? void 0) as any)(e),
      "--x-height": (((n: any): any => (typeof n as any) == ("number" as any) ? (n as any) + ("px" as any) : n ?? void 0) as any)(e),
      "--x-backgroundColor": t ?? void 0
    }]
  };
function Rr(this: any, {
  message: e
}: any): any {
  return (Rr as any).d = 785255364, ((m as any).jsxs as any)("div", {
    className: "ui-1j6dyjg ui-1d3mw78 ui-1rrbmv7",
    children: ["Could not render: ", e]
  });
}
function Ul(this: any, e: any, t: any): any {
  let n: any;
  try {
    n = ((JSON as any).parse as any)(e);
  } catch (i: any) {
    return {
      ok: !1,
      message: i instanceof Error ? (i as any).message : "invalid JSON"
    };
  }
  return (t as any)(n) ? {
    ok: !0,
    value: n
  } : {
    ok: !1,
    message: "the data does not fit this block"
  };
}
const q: any = (e: any): any => (typeof e as any) == ("object" as any) && (e as any) !== (null as any) && !((Array as any).isArray as any)(e),
  z: any = (e: any): any => (typeof e as any) == ("string" as any),
  Y: any = (e: any): any => (typeof e as any) == ("number" as any) && ((Number as any).isFinite as any)(e),
  Xt: any = (e: any): any => (typeof e as any) == ("boolean" as any),
  U: any = (e: any, t: any): any => (e as any) === (void 0 as any) || (t as any)(e),
  oe: any = (e: any, t: any): any => ((Array as any).isArray as any)(e) && ((e as any).every as any)(t),
  Fl: any = new (Set as any)(["http:", "https:", "mailto:"]);
function Mr(this: any, e: any): any {
  if ((z as any)(e)) try {
    return ((Fl as any).has as any)((new (URL as any)(e) as any).protocol) ? e : void 0;
  } catch {
    return;
  }
}
function Er(this: any, e: any): any {
  try {
    const t: any = new (URL as any)(e);
    return ((t as any).protocol as any) === ("https:" as any) || ((t as any).protocol as any) === ("http:" as any) || ((t as any).protocol as any) === ("data:" as any);
  } catch {
    return !1;
  }
}
function Te(this: any, e: any, t: any): any {
  return function (this: any, {
    source: i
  }: any): any {
    const r: any = (Ul as any)(i, e);
    return (r as any).ok ? ((m as any).jsx as any)(t, {
      data: (r as any).value
    }) : ((m as any).jsx as any)(Rr, {
      message: (r as any).message
    });
  };
}
const Wl: any = {
    k1xSpc: "ui-1lliihq",
    kZKoxP: "ui-5yr21d",
    kaIpWk: "ui-1e6avla",
    kzqmXN: "ui-5lhr3w",
    $$css: !0
  },
  Vl: any = {
    k1xSpc: "ui-78zum5",
    kZKoxP: "ui-170jfvy",
    k7Eaqz: "ui-9041oi",
    kOIVth: "ui-12mrbbr",
    kVQacm: "ui-b3r6kr",
    kaIpWk: "ui-1cum3z5",
    kzqmXN: "ui-5lhr3w",
    $$css: !0
  },
  Kl: any = {
    k1xSpc: "ui-1lliihq",
    kZKoxP: "ui-5yr21d",
    kCS8Yb: "ui-1r8uery",
    $$css: !0
  },
  Xl: any = {
    k1xSpc: "ui-rvj5dj",
    kZKoxP: "ui-1h5wmu3",
    kGNEyG: "ui-pqajaz",
    kOIVth: "ui-167g77z",
    kumcoG: "ui-qketvx",
    $$css: !0
  },
  Gl: any = {
    kzqmXN: "ui-h8yej3",
    ks0D6T: "ui-6kucy2",
    kaIpWk: "ui-18zih8k",
    $$css: !0
  },
  Zl: any = {
    k1xSpc: "ui-1lliihq",
    kzqmXN: "ui-h8yej3",
    $$css: !0
  },
  Ql: any = `color-mix(in srgb, ${_e} 40%, transparent)`;
function $r(this: any, e: any, t: any, n: any): any {
  return (e as any) === (void 0 as any) ? (St as any)(n) : (t as any) === (e as any) ? (St as any)(qe) : (Dl as any)(n);
}
const be: any = {
    shrink0: {
      kmuXW: "ui-2lah0s",
      $$css: !0
    },
    fillBar: (e: any, t: any): any => [Wl, {
      kWkggS: (t as any) != (null as any) ? "ui-l8spv7" : t,
      $$css: !0
    }, {
      "--x-width": (((n: any): any => (typeof n as any) == ("number" as any) ? (n as any) + ("px" as any) : n ?? void 0) as any)(`${e}%`),
      "--x-backgroundColor": t ?? void 0
    }],
    legendItem: {
      k1xSpc: "ui-78zum5",
      kGNEyG: "ui-6s0dn4",
      kOIVth: "ui-17d4w8g",
      $$css: !0
    },
    stackedBar: (e: any): any => [Vl, {
      "--x-width": (((t: any): any => (typeof t as any) == ("number" as any) ? (t as any) + ("px" as any) : t ?? void 0) as any)(`${e}%`)
    }],
    stackedPart: (e: any, t: any): any => [Kl, {
      kzQI83: (e as any) != (null as any) ? "ui-w36f2b" : e,
      kWkggS: (t as any) != (null as any) ? "ui-l8spv7" : t,
      $$css: !0
    }, {
      "--x-flexGrow": e ?? void 0,
      "--x-backgroundColor": t ?? void 0
    }],
    columnsGrid: (e: any): any => [Xl, {
      "--x-gridTemplateColumns": (`repeat(${e}, minmax(0, 1fr))` as any) != (null as any) ? `repeat(${e}, minmax(0, 1fr))` : void 0
    }],
    columnBar: (e: any, t: any): any => [Gl, {
      kZKoxP: (e as any) != (null as any) ? "ui-16ye13r" : e,
      kWkggS: (t as any) != (null as any) ? "ui-l8spv7" : t,
      $$css: !0
    }, {
      "--x-height": (((n: any): any => (typeof n as any) == ("number" as any) ? (n as any) + ("px" as any) : n ?? void 0) as any)(e),
      "--x-backgroundColor": t ?? void 0
    }],
    svgBlock: (e: any): any => [Zl, {
      kOBAk4: (e as any) != (null as any) ? "ui-10y9f9r" : e,
      $$css: !0
    }, {
      "--x-aspectRatio": e ?? void 0
    }],
    legendLine: {
      keoZOQ: "ui-1k70j0n",
      $$css: !0
    },
    pieItem: {
      k1xSpc: "ui-78zum5",
      kGNEyG: "ui-6s0dn4",
      kOIVth: "ui-167g77z",
      $$css: !0
    }
  },
  Yl: any = (e: any): any => (q as any)(e) && (z as any)((e as any).label) && (Y as any)((e as any).value) && (z as any)((e as any).display) && (U as any)((e as any).meta, z),
  Jl: any = (e: any): any => (q as any)(e) && (oe as any)((e as any).bars, Yl) && (U as any)((e as any).emphasis, Y);
function zr(this: any, {
  data: e
}: any): any {
  (zr as any).d = 912807218;
  const t: any = ((Math as any).max as any)(...(((e as any).bars as any).map as any)((n: any): any => (n as any).value), 1);
  return ((m as any).jsx as any)("div", {
    className: "ui-rvj5dj ui-1fg1xmc ui-6s0dn4 ui-tqikln ui-1b8z93w",
    "data-document-block": "bars",
    children: (((e as any).bars as any).map as any)((n: any, i: any): any => {
      const r: any = (i as any) === ((e as any).emphasis as any);
      return ((m as any).jsxs as any)("div", {
        className: "ui-jp7ctv",
        children: [((m as any).jsx as any)("span", {
          ...(C as any)((y as any).body2, (y as any).regular, (y as any).truncate, r ? (y as any).ink : (y as any).inkSecondary),
          children: (n as any).label
        }), ((m as any).jsx as any)("span", {
          className: "ui-1lliihq ui-ols6we ui-b3r6kr ui-1e6avla ui-1x50nob",
          children: ((m as any).jsx as any)("span", {
            ...(C as any)(((be as any).fillBar as any)(((((Math as any).max as any)((n as any).value, 0) as any) / (t as any) as any) * (100 as any), ($r as any)((e as any).emphasis, i, _e)))
          })
        }), ((m as any).jsxs as any)("span", {
          ...(C as any)((y as any).body2, (y as any).regular, (y as any).nowrap, (y as any).right, (y as any).tabular, (y as any).ink),
          children: [(n as any).display, (n as any).meta && ((m as any).jsxs as any)("span", {
            ...(C as any)((y as any).label, (y as any).inkTertiary),
            children: [" · ", (n as any).meta]
          })]
        })]
      }, `${(n as any).label}-${i}`);
    })
  });
}
const ea: any = (e: any): any => (q as any)(e) && (z as any)((e as any).label) && (oe as any)((e as any).values, Y),
  ta: any = (e: any): any => (q as any)(e) && (oe as any)((e as any).series, z) && (oe as any)((e as any).bars, ea);
function jr(this: any, {
  data: e
}: any): any {
  (jr as any).d = 961704966;
  const t: any = (((e as any).bars as any).map as any)((i: any): any => (((i as any).values as any).reduce as any)((r: any, s: any): any => (r as any) + (s as any), 0)),
    n: any = ((Math as any).max as any)(...t, 1);
  return ((m as any).jsxs as any)("div", {
    "data-document-block": "stacked",
    children: [((m as any).jsx as any)("div", {
      className: "ui-78zum5 ui-1a02dak ui-40hh3e ui-1r0jzty ui-od5an3",
      children: (((e as any).series as any).map as any)((i: any, r: any): any => ((m as any).jsxs as any)("span", {
        ...(C as any)((be as any).legendItem, (y as any).label, (y as any).regular, (y as any).inkTertiary),
        children: [((m as any).jsx as any)("span", {
          ...(C as any)(((Ne as any).dot as any)(6, (vt as any)(r)))
        }), i]
      }, `${i}-${r}`))
    }), ((m as any).jsx as any)("div", {
      className: "ui-rvj5dj ui-18k9tt1 ui-6s0dn4 ui-tqikln ui-1r0jzty",
      children: (((e as any).bars as any).map as any)((i: any, r: any): any => ((m as any).jsxs as any)("div", {
        className: "ui-jp7ctv",
        children: [((m as any).jsx as any)("span", {
          ...(C as any)((y as any).body2, (y as any).regular, (y as any).truncate, (y as any).right, (y as any).inkSecondary),
          children: (i as any).label
        }), ((m as any).jsxs as any)("span", {
          className: "ui-78zum5 ui-euugli ui-6s0dn4 ui-167g77z",
          children: [((m as any).jsx as any)("span", {
            ...(C as any)(((be as any).stackedBar as any)((((t as any)[r] as any) / (n as any) as any) * (88 as any))),
            children: (((i as any).values as any).map as any)((s: any, o: any): any => (s as any) > (0 as any) ? ((m as any).jsx as any)("span", {
              ...(C as any)(((be as any).stackedPart as any)(s, (vt as any)(o)))
            }, o) : null)
          }), ((m as any).jsx as any)("span", {
            ...(C as any)((y as any).body2, (y as any).regular, (y as any).tabular, (y as any).ink, (be as any).shrink0),
            children: (((t as any)[r] as any).toLocaleString as any)("en-US")
          })]
        })]
      }, `${(i as any).label}-${r}`))
    })]
  });
}
const na: any = (e: any): any => (q as any)(e) && (z as any)((e as any).label) && (Y as any)((e as any).value) && (z as any)((e as any).display),
  ia: any = (e: any): any => (q as any)(e) && (oe as any)((e as any).points, na) && (U as any)((e as any).emphasis, Y);
function Ar(this: any, {
  data: e
}: any): any {
  (Ar as any).d = 2410669111;
  const t: any = ((Math as any).max as any)(...(((e as any).points as any).map as any)((n: any): any => (n as any).value), 1);
  return ((m as any).jsx as any)("div", {
    ...(C as any)(((be as any).columnsGrid as any)(((Math as any).max as any)(((e as any).points as any).length, 1))),
    "data-document-block": "columns",
    children: (((e as any).points as any).map as any)((n: any, i: any): any => {
      const r: any = (i as any) === ((e as any).emphasis as any);
      return ((m as any).jsxs as any)("div", {
        className: "ui-78zum5 ui-5yr21d ui-dt5ytf ui-6s0dn4 ui-13a6bvl ui-1jnr06f",
        children: [((m as any).jsx as any)("span", {
          ...(C as any)((y as any).label, (y as any).tabular, r ? (y as any).medium : (y as any).regular, r ? (y as any).ink : (y as any).inkTertiary),
          children: (n as any).display
        }), ((m as any).jsx as any)("span", {
          ...(C as any)(((be as any).columnBar as any)(((Math as any).max as any)(4, ((((Math as any).max as any)((n as any).value, 0) as any) / (t as any) as any) * (88 as any)), ($r as any)((e as any).emphasis, i, Ql)))
        }), ((m as any).jsx as any)("span", {
          ...(C as any)((y as any).label, r ? (y as any).medium : (y as any).regular, r ? (y as any).ink : (y as any).inkTertiary),
          children: (n as any).label
        })]
      }, `${(n as any).label}-${i}`);
    })
  });
}
const ra: any = (e: any): any => (q as any)(e) && (z as any)((e as any).label) && (Y as any)((e as any).value),
  sa: any = (e: any): any => (q as any)(e) && (oe as any)((e as any).points, ra) && (U as any)((e as any).ceiling, Y) && (U as any)((e as any).unit, z) && (((e as any).secondary as any) === (void 0 as any) || (q as any)((e as any).secondary) && (oe as any)(((e as any).secondary as any).values, Y) && (U as any)(((e as any).secondary as any).label, z)) && (((e as any).labels as any) === (void 0 as any) || (oe as any)((e as any).labels, z)),
  st: number = 560,
  ot: number = 180,
  lt: number = 52,
  oa: number = 22,
  Yn: number = 10;
function Nr(this: any, {
  data: e
}: any): any {
  (Nr as any).d = 3425731434;
  const t: any = (((e as any).points as any).map as any)((h: any): any => (h as any).value),
    n: any = (e as any).ceiling && ((e as any).ceiling as any) > (0 as any) ? (e as any).ceiling : ((Math as any).max as any)(...t, ...((e as any).secondary?.values ?? []), 1),
    i: any = (st as any) - (lt as any),
    r: any = ((ot as any) - (oa as any) as any) - (Yn as any),
    s: any = (((e as any).points as any).length as any) > (1 as any) ? (i as any) / ((((e as any).points as any).length as any) - (1 as any) as any) : 0,
    o: any = (h: any): any => (lt as any) + ((h as any) * (s as any) as any),
    l: any = (h: any): any => ((Yn as any) + (r as any) as any) - (((((Math as any).min as any)(((Math as any).max as any)(h, 0), n) as any) / (n as any) as any) * (r as any) as any),
    a: any = (h: any): any => ((((h as any).map as any)((p: any, f: any): any => `${(f as any) === (0 as any) ? "M" : "L"}${(((o as any)(f) as any).toFixed as any)(1)} ${(((l as any)(p) as any).toFixed as any)(1)}`) as any).join as any)(" "),
    u: any = [0, (n as any) / (2 as any), n],
    c: any = (e as any).unit ? ` ${(e as any).unit}` : "",
    d: any = (e as any).labels ?? ((e as any).secondary?.label ? ["", ((e as any).secondary as any).label] : void 0);
  return ((m as any).jsxs as any)("div", {
    "data-document-block": "line",
    children: [((m as any).jsxs as any)("svg", {
      viewBox: `0 0 ${st} ${ot}`,
      ...(C as any)(((be as any).svgBlock as any)(`${st} / ${ot}`)),
      role: "img",
      children: [((u as any).map as any)((h: any): any => ((m as any).jsxs as any)("g", {
        children: [((m as any).jsx as any)("line", {
          x1: lt,
          x2: st,
          y1: (l as any)(h),
          y2: (l as any)(h),
          stroke: Tr,
          shapeRendering: "crispEdges"
        }), ((m as any).jsxs as any)("text", {
          x: (lt as any) - (8 as any),
          y: (l as any)(h),
          textAnchor: "end",
          dominantBaseline: "middle",
          fontSize: 11,
          fill: _e,
          children: [((Math as any).round as any)(h), c]
        })]
      }, h)), ((t as any).length as any) > (1 as any) && ((m as any).jsx as any)("path", {
        d: `${(a as any)(t)} L${(((o as any)(((t as any).length as any) - (1 as any)) as any).toFixed as any)(1)} ${(((l as any)(0) as any).toFixed as any)(1)} L${(((o as any)(0) as any).toFixed as any)(1)} ${(((l as any)(0) as any).toFixed as any)(1)} Z`,
        fill: Bl,
        stroke: "none"
      }), (e as any).secondary && ((m as any).jsx as any)("path", {
        d: (a as any)(((e as any).secondary as any).values),
        fill: "none",
        stroke: Hl,
        strokeWidth: 1.25,
        strokeDasharray: "3 3",
        strokeLinejoin: "round"
      }), ((m as any).jsx as any)("path", {
        d: (a as any)(t),
        fill: "none",
        stroke: (St as any)(qe),
        strokeWidth: 1.5,
        strokeLinejoin: "round",
        strokeLinecap: "round"
      }), ((t as any).map as any)((h: any, p: any): any => ((m as any).jsx as any)("circle", {
        cx: (o as any)(p),
        cy: (l as any)(h),
        r: 2.25,
        fill: (St as any)(qe)
      }, p)), (((e as any).points as any).map as any)((h: any, p: any): any => ((m as any).jsx as any)("text", {
        x: (o as any)(p),
        y: (ot as any) - (4 as any),
        textAnchor: (p as any) === (0 as any) ? "start" : (p as any) === ((((e as any).points as any).length as any) - (1 as any) as any) ? "end" : "middle",
        fontSize: 11,
        fill: _e,
        children: (h as any).label
      }, `${(h as any).label}-${p}`))]
    }), d && ((m as any).jsxs as any)("p", {
      ...(C as any)((Ne as any).reset, (be as any).legendLine, (y as any).label, (y as any).regular, (y as any).inkTertiary),
      children: [(d as any)[0] && `\u2014 ${(d as any)[0]}`, (d as any)[1] && `   \u2504 ${(d as any)[1]}`]
    })]
  });
}
const la: any = (e: any): any => (q as any)(e) && (z as any)((e as any).label) && (Y as any)((e as any).value),
  aa: any = (e: any): any => (q as any)(e) && (oe as any)((e as any).parts, la);
function Ir(this: any, {
  data: e
}: any): any {
  (Ir as any).d = 1413575837;
  const t: any = (((e as any).parts as any).filter as any)((o: any): any => ((o as any).value as any) > (0 as any)),
    n: any = ((t as any).reduce as any)((o: any, l: any): any => (o as any) + ((l as any).value as any), 0) || 1,
    i: number = 44,
    r: any = ((2 as any) * ((Math as any).PI as any) as any) * (i as any),
    s: any = ((t as any).reduce as any)((o: any, l: any): any => {
      const a: any = ((o as any).length as any) === (0 as any) ? 0 : (((o as any)[((o as any).length as any) - (1 as any)] as any).offset as any) + ((((((o as any)[((o as any).length as any) - (1 as any)] as any).part as any).value as any) / (n as any) as any) * (r as any) as any),
        u: any = (((l as any).value as any) / (n as any) as any) * (r as any),
        c: any = ((Math as any).max as any)(0, (u as any) - ((((t as any).length as any) > (1 as any) ? 1.5 : 0) as any));
      return ((o as any).push as any)({
        part: l,
        dash: c,
        offset: a
      }), o;
    }, []);
  return ((m as any).jsxs as any)("div", {
    className: "ui-78zum5 ui-6s0dn4 ui-1665zp3",
    "data-document-block": "pie",
    children: [((m as any).jsxs as any)("svg", {
      viewBox: "0 0 120 120",
      className: "ui-ygnafs ui-1wkxgih ui-2lah0s ui-9tu13d",
      role: "img",
      "aria-label": ((((t as any).map as any)((o: any): any => `${(o as any).value} ${(o as any).label}`) as any).join as any)(", "),
      children: [((m as any).jsx as any)("circle", {
        cx: 60,
        cy: 60,
        r: i,
        fill: "none",
        stroke: mn,
        strokeWidth: 24
      }), ((s as any).map as any)(({
        part: o,
        dash: l,
        offset: a
      }: any, u: any): any => ((m as any).jsx as any)("circle", {
        cx: 60,
        cy: 60,
        r: i,
        fill: "none",
        stroke: (vt as any)(u),
        strokeWidth: 24,
        strokeDasharray: `${l} ${(r as any) - (l as any)}`,
        strokeDashoffset: -a
      }, `${(o as any).label}-${u}`))]
    }), ((m as any).jsx as any)("div", {
      className: "ui-78zum5 ui-euugli ui-dt5ytf ui-17d4w8g",
      children: ((t as any).map as any)((o: any, l: any): any => ((m as any).jsxs as any)("span", {
        ...(C as any)((be as any).pieItem, (y as any).body2, (y as any).regular, (y as any).inkSecondary),
        children: [((m as any).jsx as any)("span", {
          ...(C as any)(((Ne as any).dot as any)(8, (vt as any)(l)))
        }), ((m as any).jsx as any)("span", {
          ...(C as any)((y as any).tabular, (l as any) === (0 as any) && (y as any).medium, (l as any) === (0 as any) && (y as any).ink),
          children: (((o as any).value as any).toLocaleString as any)("en-US")
        }), ((m as any).jsx as any)("span", {
          children: (o as any).label
        }), ((m as any).jsxs as any)("span", {
          ...(C as any)((y as any).tabular, (y as any).inkTertiary),
          children: [((Math as any).round as any)((((o as any).value as any) / (n as any) as any) * (100 as any)), "%"]
        })]
      }, `${(o as any).label}-${l}`))
    })]
  });
}
const ua: any = {
    kVAEAm: "ui-1n2onr6",
    $$css: !0
  },
  ca: any = {
    kVAEAm: "ui-10l6tqk",
    kbCHJM: "ui-u96u03",
    kCIrl2: "ui-3m8u43",
    k1xSpc: "ui-78zum5",
    kGNEyG: "ui-6s0dn4",
    $$css: !0
  },
  da: any = {
    kmuXW: "ui-2lah0s",
    k9WMMc: "ui-1hr2gdg",
    khDVqt: "ui-uxw1ft",
    $$css: !0
  },
  ha: any = {
    kZKoxP: "ui-jm9jq1",
    kUk6DE: "ui-98rzlu",
    $$css: !0
  },
  pa: any = {
    kVAEAm: "ui-10l6tqk",
    k87sOh: "ui-13vifvy",
    krVfgx: "ui-1ey2m1c",
    $$css: !0
  },
  fa: any = {
    kVAEAm: "ui-10l6tqk",
    k1xSpc: "ui-78zum5",
    kOIVth: "ui-167g77z",
    kVQacm: "ui-b3r6kr",
    kaIpWk: "ui-1kogg8i",
    kmVPX3: "ui-fawy5m",
    $$css: !0
  },
  ma: any = {
    kzqmXN: "ui-fo62xy",
    kmuXW: "ui-2lah0s",
    kSGwAc: "ui-kh2ocl",
    kaIpWk: "ui-1cum3z5",
    $$css: !0
  },
  ga: any = {
    kVAEAm: "ui-10l6tqk",
    kCIrl2: "ui-3m8u43",
    k1xSpc: "ui-78zum5",
    kGNEyG: "ui-6s0dn4",
    k3aq6I: "ui-1cb1t30",
    $$css: !0
  },
  ka: any = {
    kmuXW: "ui-2lah0s",
    kE3dHu: "ui-163pfp",
    $$css: !0
  },
  V: any = {
    dayCanvas: (e: any): any => [ua, {
      kZKoxP: (e as any) != (null as any) ? "ui-16ye13r" : e,
      $$css: !0
    }, {
      "--x-height": (((t: any): any => (typeof t as any) == ("number" as any) ? (t as any) + ("px" as any) : t ?? void 0) as any)(e)
    }],
    hourLine: (e: any, t: any): any => [ca, {
      k87sOh: (e as any) != (null as any) ? "ui-jbys53" : e,
      kZKoxP: (t as any) != (null as any) ? "ui-16ye13r" : t,
      $$css: !0
    }, {
      "--x-top": (((n: any): any => (typeof n as any) == ("number" as any) ? (n as any) + ("px" as any) : n ?? void 0) as any)(e),
      "--x-height": (((n: any): any => (typeof n as any) == ("number" as any) ? (n as any) + ("px" as any) : n ?? void 0) as any)(t)
    }],
    hourLabel: (e: any, t: any): any => [da, {
      kzqmXN: (e as any) != (null as any) ? "ui-5lhr3w" : e,
      km5ZXQ: (t as any) != (null as any) ? "ui-vcn832" : t,
      $$css: !0
    }, {
      "--x-width": (((n: any): any => (typeof n as any) == ("number" as any) ? (n as any) + ("px" as any) : n ?? void 0) as any)(e),
      "--x-marginRight": (((n: any): any => (typeof n as any) == ("number" as any) ? (n as any) + ("px" as any) : n ?? void 0) as any)(t)
    }],
    rule: (e: any): any => [ha, {
      kWkggS: (e as any) != (null as any) ? "ui-l8spv7" : e,
      $$css: !0
    }, {
      "--x-backgroundColor": e ?? void 0
    }],
    eventsLayer: (e: any, t: any): any => [pa, {
      kbCHJM: (e as any) != (null as any) ? "ui-gq9j65" : e,
      kCIrl2: (t as any) != (null as any) ? "ui-7ok3n0" : t,
      $$css: !0
    }, {
      "--x-left": (((n: any): any => (typeof n as any) == ("number" as any) ? (n as any) + ("px" as any) : n ?? void 0) as any)(e),
      "--x-right": (((n: any): any => (typeof n as any) == ("number" as any) ? (n as any) + ("px" as any) : n ?? void 0) as any)(t)
    }],
    event: (e: any, t: any, n: any, i: any): any => [fa, {
      k87sOh: (e as any) != (null as any) ? "ui-jbys53" : e,
      kZKoxP: (t as any) != (null as any) ? "ui-16ye13r" : t,
      kbCHJM: (n as any) != (null as any) ? "ui-gq9j65" : n,
      kzqmXN: (i as any) != (null as any) ? "ui-5lhr3w" : i,
      $$css: !0
    }, {
      "--x-top": (((r: any): any => (typeof r as any) == ("number" as any) ? (r as any) + ("px" as any) : r ?? void 0) as any)(e),
      "--x-height": (((r: any): any => (typeof r as any) == ("number" as any) ? (r as any) + ("px" as any) : r ?? void 0) as any)(t),
      "--x-left": (((r: any): any => (typeof r as any) == ("number" as any) ? (r as any) + ("px" as any) : r ?? void 0) as any)(n),
      "--x-width": (((r: any): any => (typeof r as any) == ("number" as any) ? (r as any) + ("px" as any) : r ?? void 0) as any)(i)
    }],
    eventPlain: {
      kWkggS: "ui-96iioy",
      kMwMTN: "ui-1g4d90q",
      $$css: !0
    },
    eventFlag: {
      kWkggS: "ui-1fpwj60",
      kMwMTN: "ui-kbann2",
      $$css: !0
    },
    eventFree: {
      kMzoRj: "ui-mkeg23",
      ksu8eU: "ui-bsl7fq",
      kVAM5u: "ui-3a4ul3",
      kMwMTN: "ui-1rrbmv7",
      $$css: !0
    },
    eventRule: (e: any): any => [ma, {
      kWkggS: (e as any) != (null as any) ? "ui-l8spv7" : e,
      $$css: !0
    }, {
      "--x-backgroundColor": e ?? void 0
    }],
    eventTitle: {
      kLKAdn: "ui-4p5aij",
      $$css: !0
    },
    eventTitleFree: {
      kE3dHu: "ui-11iknt3",
      $$css: !0
    },
    mark: (e: any, t: any): any => [ga, {
      k87sOh: (e as any) != (null as any) ? "ui-jbys53" : e,
      kbCHJM: (t as any) != (null as any) ? "ui-gq9j65" : t,
      $$css: !0
    }, {
      "--x-top": (((n: any): any => (typeof n as any) == ("number" as any) ? (n as any) + ("px" as any) : n ?? void 0) as any)(e),
      "--x-left": (((n: any): any => (typeof n as any) == ("number" as any) ? (n as any) + ("px" as any) : n ?? void 0) as any)(t)
    }],
    markLabel: (e: any): any => [ka, {
      kzqmXN: (e as any) != (null as any) ? "ui-5lhr3w" : e,
      $$css: !0
    }, {
      "--x-width": (((t: any): any => (typeof t as any) == ("number" as any) ? (t as any) + ("px" as any) : t ?? void 0) as any)(e)
    }]
  },
  ba: any = (e: any): any => (q as any)(e) && (Y as any)((e as any).start) && (Y as any)((e as any).end) && (z as any)((e as any).title) && (U as any)((e as any).flag, Xt) && (U as any)((e as any).free, Xt),
  ya: any = (e: any): any => (q as any)(e) && (Y as any)((e as any).start) && (Y as any)((e as any).end) && ((e as any).end as any) > ((e as any).start as any) && (oe as any)((e as any).events, ba) && (((e as any).mark as any) === (void 0 as any) || (q as any)((e as any).mark) && (Y as any)(((e as any).mark as any).at) && (z as any)(((e as any).mark as any).label)),
  Ot: number = 44,
  Gt: number = 53,
  Dt: any = (Gt as any) + (8 as any),
  wa: number = 12,
  at: number = 9,
  Jn: number = 132;
function xa(this: any, e: any): any {
  const t: any = ((((e as any).map as any)((l: any, a: any): any => a) as any).sort as any)((l: any, a: any): any => (((e as any)[l] as any).start as any) - (((e as any)[a] as any).start as any)),
    n: any = ((e as any).map as any)((): any => [0, 1]);
  let i: any = [],
    r: any = (-1 as any) / (0 as any);
  const s: any = [],
    o: any = (): any => {
      const l: any = ((Math as any).max as any)(1, ...((i as any).map as any)((a: any): any => (((n as any)[a] as any)[0] as any) + (1 as any)));
      for (const a of i) (n as any)[a] = [((n as any)[a] as any)[0], l];
      i = [], (s as any).length = 0;
    };
  for (const l of t) {
    const a: any = (e as any)[l];
    ((a as any).start as any) >= (r as any) && (o as any)();
    let u: any = ((s as any).findIndex as any)((c: any): any => (c as any) <= ((a as any).start as any));
    (u as any) < (0 as any) && (u = (s as any).length), (s as any)[u] = (a as any).end, (n as any)[l] = [u, 1], ((i as any).push as any)(l), r = ((Math as any).max as any)(r, (a as any).end);
  }
  return (o as any)(), n;
}
function va(this: any, e: any): any {
  return `${(e as any) % (12 as any) || 12} ${(e as any) < (12 as any) || (e as any) === (24 as any) ? "AM" : "PM"}`;
}
function Lr(this: any, {
  data: e
}: any): any {
  (Lr as any).d = 2734696488;
  const t: any = ((Math as any).floor as any)((e as any).start),
    n: any = ((Math as any).ceil as any)((e as any).end),
    i: any = (o: any): any => (at as any) + (((o as any) - (t as any) as any) * (Ot as any) as any),
    r: any = (xa as any)((e as any).events),
    s: any = [];
  for (let o: any = t; (o as any) <= (n as any); o += 1) ((s as any).push as any)(o);
  return ((m as any).jsx as any)("div", {
    className: "ui-1jp4ehj ui-4pepcl ui-1x50nob ui-c7ga6q",
    "data-document-block": "day",
    children: ((m as any).jsxs as any)("div", {
      ...(C as any)(((V as any).dayCanvas as any)((((n as any) - (t as any) as any) * (Ot as any) as any) + ((at as any) * (2 as any) as any))),
      role: "img",
      "aria-label": "Calendar day",
      children: [((s as any).map as any)((o: any): any => ((m as any).jsxs as any)("div", {
        ...(C as any)(((V as any).hourLine as any)(((i as any)(o) as any) - (at as any), (at as any) * (2 as any))),
        children: [((m as any).jsx as any)("span", {
          ...(C as any)(((V as any).hourLabel as any)(Gt, (Dt as any) - (Gt as any)), (y as any).body2, (y as any).regular, (y as any).tabular, (y as any).inkTertiary),
          children: (va as any)(o)
        }), ((m as any).jsx as any)("span", {
          ...(C as any)(((V as any).rule as any)(Tr))
        })]
      }, o)), ((m as any).jsx as any)("div", {
        ...(C as any)(((V as any).eventsLayer as any)((Dt as any) + (wa as any), (e as any).mark ? Jn : 0)),
        children: (((e as any).events as any).map as any)((o: any, l: any): any => {
          const [a, u]: any = (r as any)[l],
            c: any = ((Math as any).max as any)(24, ((((o as any).end as any) - ((o as any).start as any) as any) * (Ot as any) as any) - (3 as any));
          return ((m as any).jsxs as any)("div", {
            ...(C as any)(((V as any).event as any)(((i as any)((o as any).start) as any) + (2 as any), c, `calc(${((a as any) / (u as any) as any) * (100 as any)}% + ${a ? 2 : 0}px)`, `calc(${(100 as any) / (u as any)}% - ${(u as any) > (1 as any) ? 2 : 0}px)`), (o as any).free ? (V as any).eventFree : (o as any).flag ? (V as any).eventFlag : (V as any).eventPlain),
            children: [!(o as any).free && ((m as any).jsx as any)("span", {
              "aria-hidden": !0,
              ...(C as any)(((V as any).eventRule as any)((o as any).flag ? (bt as any)["--cursor-bg-accent"] : `color-mix(in srgb, ${qe} 20%, transparent)`))
            }), ((m as any).jsx as any)("span", {
              ...(C as any)((y as any).label, (y as any).medium, (y as any).truncate, (V as any).eventTitle, (o as any).free && (V as any).eventTitleFree),
              children: (o as any).title
            })]
          }, `${(o as any).title}-${l}`);
        })
      }), (e as any).mark && ((m as any).jsxs as any)("div", {
        ...(C as any)(((V as any).mark as any)((i as any)(((e as any).mark as any).at), (Dt as any) - (3 as any))),
        children: [((m as any).jsx as any)("span", {
          ...(C as any)(((Ne as any).dot as any)(6, qe))
        }), ((m as any).jsx as any)("span", {
          ...(C as any)(((V as any).rule as any)(qe))
        }), ((m as any).jsx as any)("span", {
          ...(C as any)(((V as any).markLabel as any)(Jn), (y as any).label, (y as any).medium, (y as any).truncate, (y as any).ink),
          children: ((e as any).mark as any).label
        })]
      })]
    })
  });
}
const Zt: any = {
    duration: {
      kVAEAm: "ui-10l6tqk",
      kCIrl2: "ui-19up5dg",
      krVfgx: "ui-qo3gd",
      kaIpWk: "ui-1kogg8i",
      kWkggS: "ui-8qq8ib",
      kg3NbH: "ui-1xijbu4",
      kMwMTN: "ui-fungia",
      $$css: !0
    },
    caption: {
      keoZOQ: "ui-1k70j0n",
      $$css: !0
    },
    linkNumber: {
      kzqmXN: "ui-smyaan",
      kmuXW: "ui-2lah0s",
      $$css: !0
    }
  },
  Sa: any = (e: any): any => (q as any)(e) && (z as any)((e as any).src) && (z as any)((e as any).alt) && (z as any)((e as any).duration) && (U as any)((e as any).href, z) && (U as any)((e as any).caption, z);
function Pr(this: any): any {
  return (Pr as any).d = 2207799456, ((m as any).jsx as any)("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    "aria-hidden": !0,
    children: ((m as any).jsx as any)("path", {
      d: "M5 3.5v9l7-4.5z",
      fill: "currentColor"
    })
  });
}
function qr(this: any, {
  data: e
}: any): any {
  (qr as any).d = 2607487370;
  const t: any = (Mr as any)((e as any).href),
    n: any = ((m as any).jsxs as any)((m as any).Fragment, {
      children: [(Er as any)((e as any).src) && ((m as any).jsx as any)("img", {
        src: (e as any).src,
        alt: (e as any).alt,
        className: "ui-1lliihq ui-h8yej3 ui-5yr21d ui-l1xv1r",
        draggable: !1
      }), ((m as any).jsx as any)("span", {
        className: "ui-10l6tqk ui-13vifvy ui-3m8u43 ui-1ey2m1c ui-u96u03 ui-78zum5 ui-6s0dn4 ui-l56j7k",
        children: ((m as any).jsx as any)("span", {
          className: "ui-78zum5 ui-187nhsf ui-n3w4p2 ui-6s0dn4 ui-l56j7k ui-1e6avla ui-a44r0r ui-fungia ui-1dmgsgi",
          children: ((m as any).jsx as any)(Pr, {})
        })
      }), ((m as any).jsx as any)("span", {
        ...(C as any)((Zt as any).duration, (y as any).label, (y as any).medium, (y as any).tabular),
        children: (e as any).duration
      })]
    });
  return ((m as any).jsxs as any)("figure", {
    className: "ui-1ghz6dp",
    "data-document-block": "video",
    children: [t ? ((m as any).jsx as any)("a", {
      href: t,
      target: "_blank",
      rel: "noreferrer noopener",
      title: (e as any).alt,
      className: "ui-1n2onr6 ui-1lliihq ui-h8yej3 ui-b3r6kr ui-4pepcl ui-1x50nob ui-14w3kke ui-pi5jss ui-1heor9g ui-1hl2dhg",
      children: n
    }) : ((m as any).jsx as any)("div", {
      className: "ui-1n2onr6 ui-1lliihq ui-h8yej3 ui-b3r6kr ui-4pepcl ui-1x50nob ui-14w3kke ui-pi5jss ui-1heor9g ui-1hl2dhg",
      children: n
    }), (e as any).caption && ((m as any).jsx as any)("figcaption", {
      ...(C as any)((Zt as any).caption, (y as any).label, (y as any).regular, (y as any).inkTertiary),
      children: (e as any).caption
    })]
  });
}
const Ca: any = (e: any): any => (q as any)(e) && (((e as any).kind as any) === ("brand" as any) && (z as any)((e as any).brand) || ((e as any).kind as any) === ("thumb" as any) && (z as any)((e as any).src) || ((e as any).kind as any) === ("icon" as any) && (z as any)((e as any).name)),
  Ta: any = (e: any): any => (q as any)(e) && (z as any)((e as any).title) && (z as any)((e as any).site) && (z as any)((e as any).href) && (U as any)((e as any).date, z) && (U as any)((e as any).lead, Ca),
  Ra: any = (e: any): any => (q as any)(e) && (oe as any)((e as any).links, Ta) && (U as any)((e as any).numbered, Xt),
  Ma: any = {
    github: "G",
    figma: "F",
    notion: "N",
    slack: "S"
  };
function _r(this: any, {
  lead: e
}: any): any {
  return (_r as any).d = 2774833382, ((m as any).jsxs as any)("span", {
    className: "ui-78zum5 ui-1td3qas ui-10w6t97 ui-2lah0s ui-6s0dn4 ui-l56j7k ui-b3r6kr ui-ur7f20 ui-1x50nob ui-14w3kke",
    children: [((e as any).kind as any) === ("brand" as any) && ((m as any).jsx as any)("span", {
      ...(C as any)((y as any).body2, (y as any).medium, (y as any).inkSecondary),
      children: (Ma as any)[(e as any).brand] ?? "\u2197"
    }), ((e as any).kind as any) === ("thumb" as any) && (Er as any)((e as any).src) && ((m as any).jsx as any)("img", {
      src: (e as any).src,
      alt: "",
      className: "ui-1lliihq ui-h8yej3 ui-5yr21d ui-l1xv1r",
      draggable: !1
    }), ((e as any).kind as any) === ("icon" as any) && ((m as any).jsx as any)("span", {
      ...(C as any)((y as any).body2, (y as any).inkSecondary),
      children: "\u2197"
    })]
  });
}
function Or(this: any): any {
  return (Or as any).d = 4139237737, ((m as any).jsx as any)("svg", {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    "aria-hidden": !0,
    children: ((m as any).jsx as any)("path", {
      d: "M3.5 2.5h6v6M9.5 2.5l-7 7",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.25,
      strokeLinecap: "round"
    })
  });
}
function Dr(this: any, {
  data: e
}: any): any {
  return (Dr as any).d = 3443309232, ((m as any).jsx as any)("div", {
    className: "ui-78zum5 ui-dt5ytf ui-17d4w8g",
    "data-document-block": "links",
    children: (((e as any).links as any).map as any)((t: any, n: any): any => {
      const i: any = (Mr as any)((t as any).href),
        r: any = ((m as any).jsxs as any)((m as any).Fragment, {
          children: [(e as any).numbered && ((m as any).jsx as any)("span", {
            ...(C as any)((Zt as any).linkNumber, (y as any).label, (y as any).medium, (y as any).tabular, (y as any).inkTertiary),
            children: (n as any) + (1 as any)
          }), (t as any).lead && ((m as any).jsx as any)(_r, {
            lead: (t as any).lead
          }), ((m as any).jsx as any)("span", {
            className: "ui-euugli ui-98rzlu",
            children: ((m as any).jsxs as any)("span", {
              ...(C as any)((Ne as any).column),
              children: [((m as any).jsx as any)("span", {
                ...(C as any)((y as any).body1, (y as any).regular, (y as any).truncate, (y as any).ink),
                children: (t as any).title
              }), ((m as any).jsxs as any)("span", {
                ...(C as any)((y as any).label, (y as any).regular, (y as any).truncate, (y as any).inkTertiary),
                children: [(t as any).site, (t as any).date && ` · ${(t as any).date}`]
              })]
            })
          }), ((m as any).jsx as any)("span", {
            className: "ui-2lah0s ui-1rrbmv7",
            children: ((m as any).jsx as any)(Or, {})
          })]
        }),
        s: any = ({
          0: {
            className: "ui-78zum5 ui-6s0dn4 ui-883omv ui-1q4ynmn ui-4hv7ue ui-1y0btm7 ui-3a4ul3 ui-1vvogim ui-nuq7ks ui-f18ygs ui-1heor9g ui-1hl2dhg ui-1ypdohk ui-jbqb8w ui-1xgckil"
          },
          1: {
            className: "ui-78zum5 ui-6s0dn4 ui-883omv ui-1q4ynmn ui-4hv7ue ui-1y0btm7 ui-3a4ul3 ui-1vvogim ui-nuq7ks ui-1heor9g ui-1hl2dhg ui-1ypdohk ui-jbqb8w ui-1xgckil ui-163pfp"
          }
        } as any)[(!!((t as any).lead && !(e as any).numbered) as any) << (0 as any)];
      return i ? ((m as any).jsx as any)("a", {
        href: i,
        target: "_blank",
        rel: "noreferrer noopener",
        title: (t as any).title,
        ...s,
        children: r
      }, `${(t as any).title}-${n}`) : ((m as any).jsx as any)("span", {
        title: (t as any).title,
        ...s,
        children: r
      }, `${(t as any).title}-${n}`);
    })
  });
}
const Ea: any = {
    k1xSpc: "ui-rvj5dj",
    $$css: !0
  },
  ut: any = {
    grid: (e: any): any => [Ea, {
      kumcoG: (e as any) != (null as any) ? "ui-qketvx" : e,
      $$css: !0
    }, {
      "--x-gridTemplateColumns": e ?? void 0
    }],
    hairlineRow: {
      k1C7PZ: "ui-tqikln",
      kEafiO: "ui-t8cgyo",
      kPef9Z: "ui-13fuv20",
      kLZC3w: "ui-nhgcku",
      k8WAf4: "ui-p59q4u",
      $$css: !0
    },
    rowMeta: {
      kLKAdn: "ui-1nn3v0j",
      kHjlTd: "ui-j0a0fe",
      $$css: !0
    },
    rowDetail: {
      keoZOQ: "ui-r9ek0c",
      $$css: !0
    }
  },
  $a: any = (e: any): any => (q as any)(e) && (z as any)((e as any).title) && (U as any)((e as any).lead, z) && (U as any)((e as any).detail, z) && (U as any)((e as any).meta, z) && (((e as any).status as any) === (void 0 as any) || (q as any)((e as any).status) && (z as any)(((e as any).status as any).label)),
  za: any = (e: any): any => (q as any)(e) && (oe as any)((e as any).rows, $a);
function Hr(this: any, {
  data: e
}: any): any {
  (Hr as any).d = 4257907668;
  const t: any = (((e as any).rows as any).some as any)((s: any): any => (s as any).lead),
    n: any = (((Math as any).max as any)(...(((e as any).rows as any).map as any)((s: any): any => (s as any).lead?.length ?? 0)) as any) > (2 as any) ? 48 : 18,
    i: string = "fit-content(40%)",
    r: any = t ? `${n}px minmax(0, 1fr) ${i}` : `minmax(0, 1fr) ${i}`;
  return ((m as any).jsx as any)("div", {
    ...(C as any)((Ne as any).column),
    "data-document-block": "rows",
    children: (((e as any).rows as any).map as any)((s: any, o: any): any => ((m as any).jsxs as any)("div", {
      ...(C as any)(((ut as any).grid as any)(r), (ut as any).hairlineRow),
      children: [t && ((m as any).jsx as any)("span", {
        ...(C as any)((y as any).body1, (y as any).regular, (y as any).tabular, (y as any).inkTertiary),
        children: (s as any).lead
      }), ((m as any).jsxs as any)("div", {
        className: "ui-euugli",
        children: [((m as any).jsxs as any)("p", {
          ...(C as any)((Ne as any).reset, (y as any).body1, (y as any).regular, (y as any).ink),
          children: [(s as any).title, (s as any).status && ((m as any).jsxs as any)("span", {
            ...(C as any)((y as any).medium, ((s as any).status as any).tone && (Qn as any)[((s as any).status as any).tone] ? ((y as any).tone as any)((Qn as any)[((s as any).status as any).tone]) : (y as any).inkTertiary),
            children: [" ", "· ", ((s as any).status as any).label]
          })]
        }), (s as any).detail && ((m as any).jsx as any)("p", {
          ...(C as any)((Ne as any).reset, (ut as any).rowDetail, (y as any).body1, (y as any).regular, (y as any).inkSecondary),
          children: (s as any).detail
        })]
      }), ((m as any).jsx as any)("span", {
        ...(C as any)((y as any).label, (y as any).regular, (y as any).right, (y as any).inkTertiary, (ut as any).rowMeta),
        children: (s as any).meta
      })]
    }, `${(s as any).title}-${o}`))
  });
}
function ja(this: any): any {
  return {
    rows: (Te as any)(za, Hr),
    bars: (Te as any)(Jl, zr),
    stacked: (Te as any)(ta, jr),
    columns: (Te as any)(ia, Ar),
    line: (Te as any)(sa, Nr),
    pie: (Te as any)(aa, Ir),
    day: (Te as any)(ya, Lr),
    video: (Te as any)(Sa, qr),
    links: (Te as any)(Ra, Dr)
  };
}
function Br(this: any, e: any): any {
  return (Br as any).d = 2939938924, {
    name: "dataFence",
    extensions: [((Pl as any).configure as any)({
      renderers: (e as any).renderers,
      showSourceToggle: (e as any).showSourceToggle ?? !0
    })]
  };
}
const gn: any = ((x as any).createContext as any)(null);
function Aa(this: any, e: any): any {
  const t: any = ((x as any).useContext as any)(gn);
  if (!t) throw new (Error as any)(`${e} must be used within RichTextEditor`);
  return t;
}
function Ur(this: any, {
  editor: e,
  isStreaming: t,
  editable: n,
  children: i
}: any): any {
  (Ur as any).d = 1077662325;
  const r: any = ((x as any).useMemo as any)((): any => ({
    editor: e,
    isStreaming: t,
    editable: n
  }), [e, t, n]);
  return ((m as any).jsx as any)((gn as any).Provider, {
    value: r,
    children: i
  });
}
const Na: string = "ui-rich-text-editor__search-result ui-6chtzl",
  Ia: string = "ui-rich-text-editor__search-result ui-rich-text-editor__search-result--current ui-13eqifn",
  Ht: any = new (RegExp as any)("(?<!\\\\)\\[([^\\]]+)\\]\\(((?:[^()]|\\([^)]*\\))+)\\)", "g"),
  Le: any = {
    query: "",
    total: 0,
    currentIndex: -1,
    current: 0
  },
  se: any = new (le as any)("richTextSearch");
function La(this: any, e: any): any {
  const t: any = [];
  let n: any = 0;
  (Ht as any).lastIndex = 0;
  let i: any = ((Ht as any).exec as any)(e);
  for (; (i as any) !== (null as any);) {
    const [r, s]: any = i;
    ((i as any).index as any) > (n as any) && ((t as any).push as any)({
      text: ((e as any).slice as any)(n, (i as any).index),
      startOffset: n
    }), ((t as any).push as any)({
      text: s,
      startOffset: ((i as any).index as any) + (1 as any)
    }), n = ((i as any).index as any) + ((r as any).length as any), i = ((Ht as any).exec as any)(e);
  }
  return (n as any) < ((e as any).length as any) && ((t as any).push as any)({
    text: ((e as any).slice as any)(n),
    startOffset: n
  }), t;
}
function ei(this: any, e: any, t: any, n: any, i: any): any {
  const r: any = ((t as any).toLowerCase as any)();
  let s: any = 0;
  for (;;) {
    const o: any = ((r as any).indexOf as any)(i, s);
    if ((o as any) === (-1 as any)) break;
    ((e as any).push as any)({
      from: (n as any) + (o as any),
      to: ((n as any) + (o as any) as any) + ((i as any).length as any)
    }), s = (o as any) + (1 as any);
  }
}
function Pa(this: any, e: any, t: any): any {
  if (!t) return [];
  const n: any = [],
    i: any = ((t as any).toLowerCase as any)();
  return ((e as any).descendants as any)((r: any, s: any): any => {
    if (!(!(r as any).isText || !(r as any).text)) {
      if (!(((r as any).text as any).includes as any)("[") || !(((r as any).text as any).includes as any)("](")) {
        (ei as any)(n, (r as any).text, s, i);
        return;
      }
      for (const o of (La as any)((r as any).text)) (ei as any)(n, (o as any).text, (s as any) + ((o as any).startOffset as any), i);
    }
  }), n;
}
function Ze(this: any, e: any): any {
  const t: any = ((se as any).getState as any)(e);
  if (!t || !(t as any).query) return Le;
  const n: any = ((t as any).matches as any).length;
  return {
    query: (t as any).query,
    total: n,
    currentIndex: (t as any).currentIndex,
    current: (n as any) > (0 as any) ? ((t as any).currentIndex as any) + (1 as any) : 0
  };
}
function qa(this: any, e: any, t: any): any {
  const n: any = (Ze as any)(e);
  return ((n as any).query as any) === (t as any) ? n : {
    ...Le,
    query: t
  };
}
function Fr(this: any, e: any, t: any, n: any): any {
  return ((Ie as any).create as any)(e, ((t as any).map as any)((i: any, r: any): any => ((Q as any).inline as any)((i as any).from, (i as any).to, {
    class: (r as any) === (n as any) ? Ia : Na
  })));
}
function _a(this: any, e: any, t: any): any {
  return ((t as any).length as any) === (0 as any) ? -1 : (e as any) < (0 as any) ? 0 : (e as any) >= ((t as any).length as any) ? ((t as any).length as any) - (1 as any) : e;
}
function Ct(this: any, e: any, t: any, n: any): any {
  const i: any = (Pa as any)(e, t),
    r: any = (_a as any)(n, i);
  return {
    query: t,
    matches: i,
    currentIndex: r,
    decorations: (Fr as any)(e, i, r)
  };
}
function Wr(this: any, e: any, t: any): any {
  const n: any = ((t as any).matches as any)[(t as any).currentIndex];
  if (!n) return e;
  const i: any = ((H as any).create as any)((e as any).doc, (n as any).from, (n as any).to);
  return ((((e as any).setSelection as any)(i) as any).scrollIntoView as any)();
}
function ti(this: any, e: any): any {
  return !!(e?.query && (((e as any).matches as any).length as any) > (0 as any));
}
function Oa(this: any, e: any, t: any, n: any): any {
  return {
    ...t,
    currentIndex: n,
    decorations: (Fr as any)(e, (t as any).matches, n)
  };
}
function ni(this: any, e: any, t: any, n: any, i: any): any {
  const r: any = (Oa as any)((e as any).doc, t, n);
  return ((e as any).setMeta as any)(se, {
    nextState: r
  }), (Wr as any)(e, r), i?.(e), !0;
}
function Da(this: any, e: any, t: any): any {
  const n: any = ((e as any).getMeta as any)(se);
  return n?.nextState ? (n as any).nextState : (e as any).docChanged && (t as any).query ? (Ct as any)((e as any).doc, (t as any).query, (t as any).currentIndex) : t;
}
function Ha(this: any): any {
  return new (ie as any)({
    key: se,
    state: {
      init: (e: any, t: any): any => (Ct as any)((t as any).doc, "", -1),
      apply: (e: any, t: any): any => (Da as any)(e, t)
    },
    props: {
      decorations(e: any): any {
        return ((se as any).getState as any)(e)?.decorations;
      }
    }
  });
}
const Ba: any = ((ne as any).create as any)({
  name: "richTextSearch",
  addProseMirrorPlugins(): any {
    return [(Ha as any)()];
  },
  addCommands(): any {
    return {
      setRichTextSearchQuery: (e: any): any => ({
        tr: t,
        dispatch: n
      }: any): any => {
        const i: any = (Ct as any)((t as any).doc, e, 0);
        return ((t as any).setMeta as any)(se, {
          nextState: i
        }), (Wr as any)(t, i), n?.(t), !0;
      },
      selectNextRichTextSearchResult: (): any => ({
        state: e,
        tr: t,
        dispatch: n
      }: any): any => {
        const i: any = ((se as any).getState as any)(e);
        if (!(ti as any)(i)) return !1;
        const r: any = (((i as any).currentIndex as any) + (1 as any) as any) % (((i as any).matches as any).length as any);
        return (ni as any)(t, i, r, n);
      },
      selectPreviousRichTextSearchResult: (): any => ({
        state: e,
        tr: t,
        dispatch: n
      }: any): any => {
        const i: any = ((se as any).getState as any)(e);
        if (!(ti as any)(i)) return !1;
        const r: any = ((((i as any).currentIndex as any) - (1 as any) as any) + (((i as any).matches as any).length as any) as any) % (((i as any).matches as any).length as any);
        return (ni as any)(t, i, r, n);
      },
      clearRichTextSearchQuery: (): any => ({
        tr: e,
        dispatch: t
      }: any): any => {
        const n: any = (Ct as any)((e as any).doc, "", -1);
        return ((e as any).setMeta as any)(se, {
          nextState: n
        }), t?.(e), !0;
      }
    };
  }
});
let Qt: any, Yt: any;
if ((typeof WeakMap as any) < ("u" as any)) {
  let e: any = new (WeakMap as any)();
  Qt = (t: any): any => ((e as any).get as any)(t), Yt = (t: any, n: any): any => (((e as any).set as any)(t, n), n);
} else {
  const e: any = [];
  let n: any = 0;
  Qt = (i: any): any => {
    for (let r: any = 0; (r as any) < ((e as any).length as any); r += 2) if (((e as any)[r] as any) == (i as any)) return (e as any)[(r as any) + (1 as any)];
  }, Yt = (i: any, r: any): any => ((n as any) == (10 as any) && (n = 0), (e as any)[n++] = i, (e as any)[n++] = r);
}
var P: any = class {
  declare problems: any;
  declare map: any;
  declare height: any;
  declare width: any;
  [key: string]: any;
  constructor(e: any, t: any, n: any, i: any) {
    (this as any).width = e, (this as any).height = t, (this as any).map = n, (this as any).problems = i;
  }
  findCell(e: any): any {
    for (let t: any = 0; (t as any) < (((this as any).map as any).length as any); t++) {
      const n: any = ((this as any).map as any)[t];
      if ((n as any) != (e as any)) continue;
      const i: any = (t as any) % ((this as any).width as any),
        r: any = ((t as any) / ((this as any).width as any) as any) | (0 as any);
      let s: any = (i as any) + (1 as any),
        o: any = (r as any) + (1 as any);
      for (let l: any = 1; (s as any) < ((this as any).width as any) && (((this as any).map as any)[(t as any) + (l as any)] as any) == (n as any); l++) s++;
      for (let l: any = 1; (o as any) < ((this as any).height as any) && (((this as any).map as any)[(t as any) + (((this as any).width as any) * (l as any) as any)] as any) == (n as any); l++) o++;
      return {
        left: i,
        top: r,
        right: s,
        bottom: o
      };
    }
    throw new (RangeError as any)(`No cell with offset ${e} found`);
  }
  colCount(e: any): any {
    for (let t: any = 0; (t as any) < (((this as any).map as any).length as any); t++) if ((((this as any).map as any)[t] as any) == (e as any)) return (t as any) % ((this as any).width as any);
    throw new (RangeError as any)(`No cell with offset ${e} found`);
  }
  nextCell(e: any, t: any, n: any): any {
    const {
      left: i,
      right: r,
      top: s,
      bottom: o
    }: any = ((this as any).findCell as any)(e);
    return (t as any) == ("horiz" as any) ? ((n as any) < (0 as any) ? (i as any) == (0 as any) : (r as any) == ((this as any).width as any)) ? null : ((this as any).map as any)[((s as any) * ((this as any).width as any) as any) + (((n as any) < (0 as any) ? (i as any) - (1 as any) : r) as any)] : ((n as any) < (0 as any) ? (s as any) == (0 as any) : (o as any) == ((this as any).height as any)) ? null : ((this as any).map as any)[(i as any) + (((this as any).width as any) * (((n as any) < (0 as any) ? (s as any) - (1 as any) : o) as any) as any)];
  }
  rectBetween(e: any, t: any): any {
    const {
        left: n,
        right: i,
        top: r,
        bottom: s
      }: any = ((this as any).findCell as any)(e),
      {
        left: o,
        right: l,
        top: a,
        bottom: u
      }: any = ((this as any).findCell as any)(t);
    return {
      left: ((Math as any).min as any)(n, o),
      top: ((Math as any).min as any)(r, a),
      right: ((Math as any).max as any)(i, l),
      bottom: ((Math as any).max as any)(s, u)
    };
  }
  cellsInRect(e: any): any {
    const t: any = [],
      n: any = {};
    for (let i: any = (e as any).top; (i as any) < ((e as any).bottom as any); i++) for (let r: any = (e as any).left; (r as any) < ((e as any).right as any); r++) {
      const s: any = ((i as any) * ((this as any).width as any) as any) + (r as any),
        o: any = ((this as any).map as any)[s];
      (n as any)[o] || ((n as any)[o] = !0, !((r as any) == ((e as any).left as any) && r && (((this as any).map as any)[(s as any) - (1 as any)] as any) == (o as any) || (i as any) == ((e as any).top as any) && i && (((this as any).map as any)[(s as any) - ((this as any).width as any)] as any) == (o as any)) && ((t as any).push as any)(o));
    }
    return t;
  }
  positionAt(e: any, t: any, n: any): any {
    for (let i: any = 0, r: any = 0;; i++) {
      const s: any = (r as any) + ((((n as any).child as any)(i) as any).nodeSize as any);
      if ((i as any) == (e as any)) {
        let o: any = (t as any) + ((e as any) * ((this as any).width as any) as any);
        const l: any = ((e as any) + (1 as any) as any) * ((this as any).width as any);
        for (; (o as any) < (l as any) && (((this as any).map as any)[o] as any) < (r as any);) o++;
        return (o as any) == (l as any) ? (s as any) - (1 as any) : ((this as any).map as any)[o];
      }
      r = s;
    }
  }
  static get(e: any): any {
    return (Qt as any)(e) || (Yt as any)(e, (Ua as any)(e));
  }
};
function Ua(this: any, e: any): any {
  if (((((e as any).type as any).spec as any).tableRole as any) != ("table" as any)) throw new (RangeError as any)(("Not a table node: " as any) + (((e as any).type as any).name as any));
  const t: any = (Fa as any)(e),
    n: any = (e as any).childCount,
    i: any = [];
  let r: any = 0,
    s: any = null;
  const o: any = [];
  for (let u: any = 0, c: any = (t as any) * (n as any); (u as any) < (c as any); u++) (i as any)[u] = 0;
  for (let u: any = 0, c: any = 0; (u as any) < (n as any); u++) {
    const d: any = ((e as any).child as any)(u);
    c++;
    for (let f: any = 0;; f++) {
      for (; (r as any) < ((i as any).length as any) && ((i as any)[r] as any) != (0 as any);) r++;
      if ((f as any) == ((d as any).childCount as any)) break;
      const g: any = ((d as any).child as any)(f),
        {
          colspan: k,
          rowspan: b,
          colwidth: w
        }: any = (g as any).attrs;
      for (let S: any = 0; (S as any) < (b as any); S++) {
        if (((S as any) + (u as any) as any) >= (n as any)) {
          (((s || (s = [])) as any).push as any)({
            type: "overlong_rowspan",
            pos: c,
            n: (b as any) - (S as any)
          });
          break;
        }
        const T: any = (r as any) + ((S as any) * (t as any) as any);
        for (let M: any = 0; (M as any) < (k as any); M++) {
          ((i as any)[(T as any) + (M as any)] as any) == (0 as any) ? (i as any)[(T as any) + (M as any)] = c : (((s || (s = [])) as any).push as any)({
            type: "collision",
            row: u,
            pos: c,
            n: (k as any) - (M as any)
          });
          const $: any = w && (w as any)[M];
          if ($) {
            const E: any = (((T as any) + (M as any) as any) % (t as any) as any) * (2 as any),
              L: any = (o as any)[E];
            (L as any) == (null as any) || (L as any) != ($ as any) && ((o as any)[(E as any) + (1 as any)] as any) == (1 as any) ? ((o as any)[E] = $, (o as any)[(E as any) + (1 as any)] = 1) : (L as any) == ($ as any) && (o as any)[(E as any) + (1 as any)]++;
          }
        }
      }
      r += k, c += (g as any).nodeSize;
    }
    const h: any = ((u as any) + (1 as any) as any) * (t as any);
    let p: any = 0;
    for (; (r as any) < (h as any);) ((i as any)[r++] as any) == (0 as any) && p++;
    p && (((s || (s = [])) as any).push as any)({
      type: "missing",
      row: u,
      n: p
    }), c++;
  }
  ((t as any) === (0 as any) || (n as any) === (0 as any)) && (((s || (s = [])) as any).push as any)({
    type: "zero_sized"
  });
  const l: any = new (P as any)(t, n, i, s);
  let a: any = !1;
  for (let u: any = 0; !a && (u as any) < ((o as any).length as any); u += 2) ((o as any)[u] as any) != (null as any) && ((o as any)[(u as any) + (1 as any)] as any) < (n as any) && (a = !0);
  return a && (Wa as any)(l, o, e), l;
}
function Fa(this: any, e: any): any {
  let t: any = -1,
    n: any = !1;
  for (let i: any = 0; (i as any) < ((e as any).childCount as any); i++) {
    const r: any = ((e as any).child as any)(i);
    let s: any = 0;
    if (n) for (let o: any = 0; (o as any) < (i as any); o++) {
      const l: any = ((e as any).child as any)(o);
      for (let a: any = 0; (a as any) < ((l as any).childCount as any); a++) {
        const u: any = ((l as any).child as any)(a);
        ((o as any) + (((u as any).attrs as any).rowspan as any) as any) > (i as any) && (s += ((u as any).attrs as any).colspan);
      }
    }
    for (let o: any = 0; (o as any) < ((r as any).childCount as any); o++) {
      const l: any = ((r as any).child as any)(o);
      s += ((l as any).attrs as any).colspan, (((l as any).attrs as any).rowspan as any) > (1 as any) && (n = !0);
    }
    (t as any) == (-1 as any) ? t = s : (t as any) != (s as any) && (t = ((Math as any).max as any)(t, s));
  }
  return t;
}
function Wa(this: any, e: any, t: any, n: any): any {
  (e as any).problems || ((e as any).problems = []);
  const i: any = {};
  for (let r: any = 0; (r as any) < (((e as any).map as any).length as any); r++) {
    const s: any = ((e as any).map as any)[r];
    if ((i as any)[s]) continue;
    (i as any)[s] = !0;
    const o: any = ((n as any).nodeAt as any)(s);
    if (!o) throw new (RangeError as any)(`No cell with offset ${s} found`);
    let l: any = null;
    const a: any = (o as any).attrs;
    for (let u: any = 0; (u as any) < ((a as any).colspan as any); u++) {
      const c: any = (t as any)[(((r as any) + (u as any) as any) % ((e as any).width as any) as any) * (2 as any)];
      (c as any) != (null as any) && (!(a as any).colwidth || (((a as any).colwidth as any)[u] as any) != (c as any)) && (((l || (l = (Va as any)(a))) as any)[u] = c);
    }
    l && (((e as any).problems as any).unshift as any)({
      type: "colwidth mismatch",
      pos: s,
      colwidth: l
    });
  }
}
function Va(this: any, e: any): any {
  if ((e as any).colwidth) return (((e as any).colwidth as any).slice as any)();
  const t: any = [];
  for (let n: any = 0; (n as any) < ((e as any).colspan as any); n++) ((t as any).push as any)(0);
  return t;
}
function F(this: any, e: any): any {
  let t: any = ((e as any).cached as any).tableNodeTypes;
  if (!t) {
    t = ((e as any).cached as any).tableNodeTypes = {};
    for (const n in (e as any).nodes) {
      const i: any = ((e as any).nodes as any)[n],
        r: any = ((i as any).spec as any).tableRole;
      r && ((t as any)[r] = i);
    }
  }
  return t;
}
const je: any = new (le as any)("selectingCells");
function Ve(this: any, e: any): any {
  for (let t: any = ((e as any).depth as any) - (1 as any); (t as any) > (0 as any); t--) if (((((((e as any).node as any)(t) as any).type as any).spec as any).tableRole as any) == ("row" as any)) return ((((e as any).node as any)(0) as any).resolve as any)(((e as any).before as any)((t as any) + (1 as any)));
  return null;
}
function Ka(this: any, e: any): any {
  for (let t: any = (e as any).depth; (t as any) > (0 as any); t--) {
    const n: any = (((((e as any).node as any)(t) as any).type as any).spec as any).tableRole;
    if ((n as any) === ("cell" as any) || (n as any) === ("header_cell" as any)) return ((e as any).node as any)(t);
  }
  return null;
}
function pe(this: any, e: any): any {
  const t: any = ((e as any).selection as any).$head;
  for (let n: any = (t as any).depth; (n as any) > (0 as any); n--) if (((((((t as any).node as any)(n) as any).type as any).spec as any).tableRole as any) == ("row" as any)) return !0;
  return !1;
}
function $t(this: any, e: any): any {
  const t: any = (e as any).selection;
  if ("$anchorCell" in t && (t as any).$anchorCell) return (((t as any).$anchorCell as any).pos as any) > (((t as any).$headCell as any).pos as any) ? (t as any).$anchorCell : (t as any).$headCell;
  if ("node" in t && (t as any).node && (((((t as any).node as any).type as any).spec as any).tableRole as any) == ("cell" as any)) return (t as any).$anchor;
  const n: any = (Ve as any)((t as any).$head) || (Xa as any)((t as any).$head);
  if (n) return n;
  throw new (RangeError as any)(`No cell found around position ${(t as any).head}`);
}
function Xa(this: any, e: any): any {
  for (let t: any = (e as any).nodeAfter, n: any = (e as any).pos; t; t = (t as any).firstChild, n++) {
    const i: any = (((t as any).type as any).spec as any).tableRole;
    if ((i as any) == ("cell" as any) || (i as any) == ("header_cell" as any)) return (((e as any).doc as any).resolve as any)(n);
  }
  for (let t: any = (e as any).nodeBefore, n: any = (e as any).pos; t; t = (t as any).lastChild, n--) {
    const i: any = (((t as any).type as any).spec as any).tableRole;
    if ((i as any) == ("cell" as any) || (i as any) == ("header_cell" as any)) return (((e as any).doc as any).resolve as any)((n as any) - ((t as any).nodeSize as any));
  }
}
function Jt(this: any, e: any): any {
  return (((((e as any).parent as any).type as any).spec as any).tableRole as any) == ("row" as any) && !!(e as any).nodeAfter;
}
function Ga(this: any, e: any): any {
  return ((((e as any).node as any)(0) as any).resolve as any)(((e as any).pos as any) + (((e as any).nodeAfter as any).nodeSize as any));
}
function kn(this: any, e: any, t: any): any {
  return ((e as any).depth as any) == ((t as any).depth as any) && ((e as any).pos as any) >= (((t as any).start as any)(-1) as any) && ((e as any).pos as any) <= (((t as any).end as any)(-1) as any);
}
function Vr(this: any, e: any, t: any, n: any): any {
  const i: any = ((e as any).node as any)(-1),
    r: any = ((P as any).get as any)(i),
    s: any = ((e as any).start as any)(-1),
    o: any = ((r as any).nextCell as any)(((e as any).pos as any) - (s as any), t, n);
  return (o as any) == (null as any) ? null : ((((e as any).node as any)(0) as any).resolve as any)((s as any) + (o as any));
}
function Oe(this: any, e: any, t: any, n: any = 1): any {
  const i: any = {
    ...e,
    colspan: ((e as any).colspan as any) - (n as any)
  };
  return (i as any).colwidth && ((i as any).colwidth = (((i as any).colwidth as any).slice as any)(), (((i as any).colwidth as any).splice as any)(t, n), (((i as any).colwidth as any).some as any)((r: any): any => (r as any) > (0 as any)) || ((i as any).colwidth = null)), i;
}
function Kr(this: any, e: any, t: any, n: any = 1): any {
  const i: any = {
    ...e,
    colspan: ((e as any).colspan as any) + (n as any)
  };
  if ((i as any).colwidth) {
    (i as any).colwidth = (((i as any).colwidth as any).slice as any)();
    for (let r: any = 0; (r as any) < (n as any); r++) (((i as any).colwidth as any).splice as any)(t, 0, 0);
  }
  return i;
}
function Za(this: any, e: any, t: any, n: any): any {
  const i: any = ((F as any)(((t as any).type as any).schema) as any).header_cell;
  for (let r: any = 0; (r as any) < ((e as any).height as any); r++) if (((((t as any).nodeAt as any)(((e as any).map as any)[(n as any) + ((r as any) * ((e as any).width as any) as any)]) as any).type as any) != (i as any)) return !1;
  return !0;
}
var I: any = class Re extends (Me as any) {
  declare $headCell: any;
  declare $anchorCell: any;
  [key: string]: any;
  constructor(t: any, n: any = t) {
    const i: any = ((t as any).node as any)(-1),
      r: any = ((P as any).get as any)(i),
      s: any = ((t as any).start as any)(-1),
      o: any = ((r as any).rectBetween as any)(((t as any).pos as any) - (s as any), ((n as any).pos as any) - (s as any)),
      l: any = ((t as any).node as any)(0),
      a: any = ((((r as any).cellsInRect as any)(o) as any).filter as any)((c: any): any => (c as any) != (((n as any).pos as any) - (s as any) as any));
    ((a as any).unshift as any)(((n as any).pos as any) - (s as any));
    const u: any = ((a as any).map as any)((c: any): any => {
      const d: any = ((i as any).nodeAt as any)(c);
      if (!d) throw new (RangeError as any)(`No cell with offset ${c} found`);
      const h: any = ((s as any) + (c as any) as any) + (1 as any);
      return new (oo as any)(((l as any).resolve as any)(h), ((l as any).resolve as any)((h as any) + (((d as any).content as any).size as any)));
    });
    super(((u as any)[0] as any).$from, ((u as any)[0] as any).$to, u), (this as any).$anchorCell = t, (this as any).$headCell = n;
  }
  map(t: any, n: any): any {
    const i: any = ((t as any).resolve as any)(((n as any).map as any)(((this as any).$anchorCell as any).pos)),
      r: any = ((t as any).resolve as any)(((n as any).map as any)(((this as any).$headCell as any).pos));
    if ((Jt as any)(i) && (Jt as any)(r) && (kn as any)(i, r)) {
      const s: any = ((((this as any).$anchorCell as any).node as any)(-1) as any) != (((i as any).node as any)(-1) as any);
      return s && ((this as any).isRowSelection as any)() ? ((Re as any).rowSelection as any)(i, r) : s && ((this as any).isColSelection as any)() ? ((Re as any).colSelection as any)(i, r) : new (Re as any)(i, r);
    }
    return ((H as any).between as any)(i, r);
  }
  content(): any {
    const t: any = (((this as any).$anchorCell as any).node as any)(-1),
      n: any = ((P as any).get as any)(t),
      i: any = (((this as any).$anchorCell as any).start as any)(-1),
      r: any = ((n as any).rectBetween as any)((((this as any).$anchorCell as any).pos as any) - (i as any), (((this as any).$headCell as any).pos as any) - (i as any)),
      s: any = {},
      o: any = [];
    for (let a: any = (r as any).top; (a as any) < ((r as any).bottom as any); a++) {
      const u: any = [];
      for (let c: any = ((a as any) * ((n as any).width as any) as any) + ((r as any).left as any), d: any = (r as any).left; (d as any) < ((r as any).right as any); d++, c++) {
        const h: any = ((n as any).map as any)[c];
        if ((s as any)[h]) continue;
        (s as any)[h] = !0;
        const p: any = ((n as any).findCell as any)(h);
        let f: any = ((t as any).nodeAt as any)(h);
        if (!f) throw new (RangeError as any)(`No cell with offset ${h} found`);
        const g: any = ((r as any).left as any) - ((p as any).left as any),
          k: any = ((p as any).right as any) - ((r as any).right as any);
        if ((g as any) > (0 as any) || (k as any) > (0 as any)) {
          let b: any = (f as any).attrs;
          if ((g as any) > (0 as any) && (b = (Oe as any)(b, 0, g)), (k as any) > (0 as any) && (b = (Oe as any)(b, ((b as any).colspan as any) - (k as any), k)), ((p as any).left as any) < ((r as any).left as any)) {
            if (f = (((f as any).type as any).createAndFill as any)(b), !f) throw new (RangeError as any)(`Could not create cell with attrs ${((JSON as any).stringify as any)(b)}`);
          } else f = (((f as any).type as any).create as any)(b, (f as any).content);
        }
        if (((p as any).top as any) < ((r as any).top as any) || ((p as any).bottom as any) > ((r as any).bottom as any)) {
          const b: any = {
            ...(f as any).attrs,
            rowspan: (((Math as any).min as any)((p as any).bottom, (r as any).bottom) as any) - (((Math as any).max as any)((p as any).top, (r as any).top) as any)
          };
          ((p as any).top as any) < ((r as any).top as any) ? f = (((f as any).type as any).createAndFill as any)(b) : f = (((f as any).type as any).create as any)(b, (f as any).content);
        }
        ((u as any).push as any)(f);
      }
      ((o as any).push as any)(((((t as any).child as any)(a) as any).copy as any)(((we as any).from as any)(u)));
    }
    const l: any = ((this as any).isColSelection as any)() && ((this as any).isRowSelection as any)() ? t : o;
    return new (Ae as any)(((we as any).from as any)(l), 1, 1);
  }
  replace(t: any, n: any = (Ae as any).empty): any {
    const i: any = ((t as any).steps as any).length,
      r: any = (this as any).ranges;
    for (let o: any = 0; (o as any) < ((r as any).length as any); o++) {
      const {
          $from: l,
          $to: a
        }: any = (r as any)[o],
        u: any = (((t as any).mapping as any).slice as any)(i);
      ((t as any).replace as any)(((u as any).map as any)((l as any).pos), ((u as any).map as any)((a as any).pos), o ? (Ae as any).empty : n);
    }
    const s: any = ((Me as any).findFrom as any)((((t as any).doc as any).resolve as any)((((((t as any).mapping as any).slice as any)(i) as any).map as any)((this as any).to)), -1);
    s && ((t as any).setSelection as any)(s);
  }
  replaceWith(t: any, n: any): any {
    ((this as any).replace as any)(t, new (Ae as any)(((we as any).from as any)(n), 0, 0));
  }
  forEachCell(t: any): any {
    const n: any = (((this as any).$anchorCell as any).node as any)(-1),
      i: any = ((P as any).get as any)(n),
      r: any = (((this as any).$anchorCell as any).start as any)(-1),
      s: any = ((i as any).cellsInRect as any)(((i as any).rectBetween as any)((((this as any).$anchorCell as any).pos as any) - (r as any), (((this as any).$headCell as any).pos as any) - (r as any)));
    for (let o: any = 0; (o as any) < ((s as any).length as any); o++) (t as any)(((n as any).nodeAt as any)((s as any)[o]), (r as any) + ((s as any)[o] as any));
  }
  isColSelection(): any {
    const t: any = (((this as any).$anchorCell as any).index as any)(-1),
      n: any = (((this as any).$headCell as any).index as any)(-1);
    if ((((Math as any).min as any)(t, n) as any) > (0 as any)) return !1;
    const i: any = (t as any) + (((((this as any).$anchorCell as any).nodeAfter as any).attrs as any).rowspan as any),
      r: any = (n as any) + (((((this as any).$headCell as any).nodeAfter as any).attrs as any).rowspan as any);
    return (((Math as any).max as any)(i, r) as any) == (((((this as any).$headCell as any).node as any)(-1) as any).childCount as any);
  }
  static colSelection(t: any, n: any = t): any {
    const i: any = ((t as any).node as any)(-1),
      r: any = ((P as any).get as any)(i),
      s: any = ((t as any).start as any)(-1),
      o: any = ((r as any).findCell as any)(((t as any).pos as any) - (s as any)),
      l: any = ((r as any).findCell as any)(((n as any).pos as any) - (s as any)),
      a: any = ((t as any).node as any)(0);
    return ((o as any).top as any) <= ((l as any).top as any) ? (((o as any).top as any) > (0 as any) && (t = ((a as any).resolve as any)((s as any) + (((r as any).map as any)[(o as any).left] as any))), ((l as any).bottom as any) < ((r as any).height as any) && (n = ((a as any).resolve as any)((s as any) + (((r as any).map as any)[((((r as any).width as any) * (((r as any).height as any) - (1 as any) as any) as any) + ((l as any).right as any) as any) - (1 as any)] as any)))) : (((l as any).top as any) > (0 as any) && (n = ((a as any).resolve as any)((s as any) + (((r as any).map as any)[(l as any).left] as any))), ((o as any).bottom as any) < ((r as any).height as any) && (t = ((a as any).resolve as any)((s as any) + (((r as any).map as any)[((((r as any).width as any) * (((r as any).height as any) - (1 as any) as any) as any) + ((o as any).right as any) as any) - (1 as any)] as any)))), new (Re as any)(t, n);
  }
  isRowSelection(): any {
    const t: any = (((this as any).$anchorCell as any).node as any)(-1),
      n: any = ((P as any).get as any)(t),
      i: any = (((this as any).$anchorCell as any).start as any)(-1),
      r: any = ((n as any).colCount as any)((((this as any).$anchorCell as any).pos as any) - (i as any)),
      s: any = ((n as any).colCount as any)((((this as any).$headCell as any).pos as any) - (i as any));
    if ((((Math as any).min as any)(r, s) as any) > (0 as any)) return !1;
    const o: any = (r as any) + (((((this as any).$anchorCell as any).nodeAfter as any).attrs as any).colspan as any),
      l: any = (s as any) + (((((this as any).$headCell as any).nodeAfter as any).attrs as any).colspan as any);
    return (((Math as any).max as any)(o, l) as any) == ((n as any).width as any);
  }
  eq(t: any): any {
    return t instanceof Re && (((t as any).$anchorCell as any).pos as any) == (((this as any).$anchorCell as any).pos as any) && (((t as any).$headCell as any).pos as any) == (((this as any).$headCell as any).pos as any);
  }
  static rowSelection(t: any, n: any = t): any {
    const i: any = ((t as any).node as any)(-1),
      r: any = ((P as any).get as any)(i),
      s: any = ((t as any).start as any)(-1),
      o: any = ((r as any).findCell as any)(((t as any).pos as any) - (s as any)),
      l: any = ((r as any).findCell as any)(((n as any).pos as any) - (s as any)),
      a: any = ((t as any).node as any)(0);
    return ((o as any).left as any) <= ((l as any).left as any) ? (((o as any).left as any) > (0 as any) && (t = ((a as any).resolve as any)((s as any) + (((r as any).map as any)[((o as any).top as any) * ((r as any).width as any)] as any))), ((l as any).right as any) < ((r as any).width as any) && (n = ((a as any).resolve as any)((s as any) + (((r as any).map as any)[(((r as any).width as any) * (((l as any).top as any) + (1 as any) as any) as any) - (1 as any)] as any)))) : (((l as any).left as any) > (0 as any) && (n = ((a as any).resolve as any)((s as any) + (((r as any).map as any)[((l as any).top as any) * ((r as any).width as any)] as any))), ((o as any).right as any) < ((r as any).width as any) && (t = ((a as any).resolve as any)((s as any) + (((r as any).map as any)[(((r as any).width as any) * (((o as any).top as any) + (1 as any) as any) as any) - (1 as any)] as any)))), new (Re as any)(t, n);
  }
  toJSON(): any {
    return {
      type: "cell",
      anchor: ((this as any).$anchorCell as any).pos,
      head: ((this as any).$headCell as any).pos
    };
  }
  static fromJSON(t: any, n: any): any {
    return new (Re as any)(((t as any).resolve as any)((n as any).anchor), ((t as any).resolve as any)((n as any).head));
  }
  static create(t: any, n: any, i: any = n): any {
    return new (Re as any)(((t as any).resolve as any)(n), ((t as any).resolve as any)(i));
  }
  getBookmark(): any {
    return new (Qa as any)(((this as any).$anchorCell as any).pos, ((this as any).$headCell as any).pos);
  }
};
((I as any).prototype as any).visible = !1;
((Me as any).jsonID as any)("cell", I);
var Qa: any = class Xr {
  declare head: any;
  declare anchor: any;
  [key: string]: any;
  constructor(t: any, n: any) {
    (this as any).anchor = t, (this as any).head = n;
  }
  map(t: any): any {
    return new (Xr as any)(((t as any).map as any)((this as any).anchor), ((t as any).map as any)((this as any).head));
  }
  resolve(t: any): any {
    const n: any = ((t as any).resolve as any)((this as any).anchor),
      i: any = ((t as any).resolve as any)((this as any).head);
    return (((((n as any).parent as any).type as any).spec as any).tableRole as any) == ("row" as any) && (((((i as any).parent as any).type as any).spec as any).tableRole as any) == ("row" as any) && (((n as any).index as any)() as any) < (((n as any).parent as any).childCount as any) && (((i as any).index as any)() as any) < (((i as any).parent as any).childCount as any) && (kn as any)(n, i) ? new (I as any)(n, i) : ((Me as any).near as any)(i, 1);
  }
};
function Ya(this: any, e: any): any {
  if (!((e as any).selection instanceof I)) return null;
  const t: any = [];
  return (((e as any).selection as any).forEachCell as any)((n: any, i: any): any => {
    ((t as any).push as any)(((Q as any).node as any)(i, (i as any) + ((n as any).nodeSize as any), {
      class: "selectedCell"
    }));
  }), ((Ie as any).create as any)((e as any).doc, t);
}
function Ja(this: any, {
  $from: e,
  $to: t
}: any): any {
  if (((e as any).pos as any) == ((t as any).pos as any) || ((e as any).pos as any) < (((t as any).pos as any) - (6 as any) as any)) return !1;
  let n: any = (e as any).pos,
    i: any = (t as any).pos,
    r: any = (e as any).depth;
  for (; (r as any) >= (0 as any) && !((((e as any).after as any)((r as any) + (1 as any)) as any) < (((e as any).end as any)(r) as any)); r--, n++);
  for (let s: any = (t as any).depth; (s as any) >= (0 as any) && !((((t as any).before as any)((s as any) + (1 as any)) as any) > (((t as any).start as any)(s) as any)); s--, i--);
  return (n as any) == (i as any) && ((/row|table/ as any).test as any)((((((e as any).node as any)(r) as any).type as any).spec as any).tableRole);
}
function eu(this: any, {
  $from: e,
  $to: t
}: any): any {
  let n: any, i: any;
  for (let r: any = (e as any).depth; (r as any) > (0 as any); r--) {
    const s: any = ((e as any).node as any)(r);
    if (((((s as any).type as any).spec as any).tableRole as any) === ("cell" as any) || ((((s as any).type as any).spec as any).tableRole as any) === ("header_cell" as any)) {
      n = s;
      break;
    }
  }
  for (let r: any = (t as any).depth; (r as any) > (0 as any); r--) {
    const s: any = ((t as any).node as any)(r);
    if (((((s as any).type as any).spec as any).tableRole as any) === ("cell" as any) || ((((s as any).type as any).spec as any).tableRole as any) === ("header_cell" as any)) {
      i = s;
      break;
    }
  }
  return (n as any) !== (i as any) && ((t as any).parentOffset as any) === (0 as any);
}
function tu(this: any, e: any, t: any, n: any): any {
  const i: any = ((t || e) as any).selection,
    r: any = ((t || e) as any).doc;
  let s: any, o: any;
  if (i instanceof sr && (o = ((((i as any).node as any).type as any).spec as any).tableRole)) {
    if ((o as any) == ("cell" as any) || (o as any) == ("header_cell" as any)) s = ((I as any).create as any)(r, (i as any).from);else if ((o as any) == ("row" as any)) {
      const l: any = ((r as any).resolve as any)(((i as any).from as any) + (1 as any));
      s = ((I as any).rowSelection as any)(l, l);
    } else if (!n) {
      const l: any = ((P as any).get as any)((i as any).node),
        a: any = ((i as any).from as any) + (1 as any),
        u: any = (a as any) + (((l as any).map as any)[(((l as any).width as any) * ((l as any).height as any) as any) - (1 as any)] as any);
      s = ((I as any).create as any)(r, (a as any) + (1 as any), u);
    }
  } else i instanceof H && (Ja as any)(i) ? s = ((H as any).create as any)(r, (i as any).from) : i instanceof H && (eu as any)(i) && (s = ((H as any).create as any)(r, (((i as any).$from as any).start as any)(), (((i as any).$from as any).end as any)()));
  return s && (((t || (t = (e as any).tr)) as any).setSelection as any)(s), t;
}
const nu: any = new (le as any)("fix-tables");
function Gr(this: any, e: any, t: any, n: any, i: any): any {
  const r: any = (e as any).childCount,
    s: any = (t as any).childCount;
  e: for (let o: any = 0, l: any = 0; (o as any) < (s as any); o++) {
    const a: any = ((t as any).child as any)(o);
    for (let u: any = l, c: any = ((Math as any).min as any)(r, (o as any) + (3 as any)); (u as any) < (c as any); u++) if ((((e as any).child as any)(u) as any) == (a as any)) {
      l = (u as any) + (1 as any), n += (a as any).nodeSize;
      continue e;
    }
    (i as any)(a, n), (l as any) < (r as any) && ((((e as any).child as any)(l) as any).sameMarkup as any)(a) ? (Gr as any)(((e as any).child as any)(l), a, (n as any) + (1 as any), i) : ((a as any).nodesBetween as any)(0, ((a as any).content as any).size, i, (n as any) + (1 as any)), n += (a as any).nodeSize;
  }
}
function Zr(this: any, e: any, t: any): any {
  let n: any;
  const i: any = (r: any, s: any): any => {
    ((((r as any).type as any).spec as any).tableRole as any) == ("table" as any) && (n = (iu as any)(e, r, s, n));
  };
  return t ? ((t as any).doc as any) != ((e as any).doc as any) && (Gr as any)((t as any).doc, (e as any).doc, 0, i) : (((e as any).doc as any).descendants as any)(i), n;
}
function iu(this: any, e: any, t: any, n: any, i: any): any {
  const r: any = ((P as any).get as any)(t);
  if (!(r as any).problems) return i;
  i || (i = (e as any).tr);
  const s: any = [];
  for (let a: any = 0; (a as any) < ((r as any).height as any); a++) ((s as any).push as any)(0);
  for (let a: any = 0; (a as any) < (((r as any).problems as any).length as any); a++) {
    const u: any = ((r as any).problems as any)[a];
    if (((u as any).type as any) == ("collision" as any)) {
      const c: any = ((t as any).nodeAt as any)((u as any).pos);
      if (!c) continue;
      const d: any = (c as any).attrs;
      for (let h: any = 0; (h as any) < ((d as any).rowspan as any); h++) (s as any)[((u as any).row as any) + (h as any)] += (u as any).n;
      ((i as any).setNodeMarkup as any)((((i as any).mapping as any).map as any)(((n as any) + (1 as any) as any) + ((u as any).pos as any)), null, (Oe as any)(d, ((d as any).colspan as any) - ((u as any).n as any), (u as any).n));
    } else if (((u as any).type as any) == ("missing" as any)) (s as any)[(u as any).row] += (u as any).n;else if (((u as any).type as any) == ("overlong_rowspan" as any)) {
      const c: any = ((t as any).nodeAt as any)((u as any).pos);
      if (!c) continue;
      ((i as any).setNodeMarkup as any)((((i as any).mapping as any).map as any)(((n as any) + (1 as any) as any) + ((u as any).pos as any)), null, {
        ...(c as any).attrs,
        rowspan: (((c as any).attrs as any).rowspan as any) - ((u as any).n as any)
      });
    } else if (((u as any).type as any) == ("colwidth mismatch" as any)) {
      const c: any = ((t as any).nodeAt as any)((u as any).pos);
      if (!c) continue;
      ((i as any).setNodeMarkup as any)((((i as any).mapping as any).map as any)(((n as any) + (1 as any) as any) + ((u as any).pos as any)), null, {
        ...(c as any).attrs,
        colwidth: (u as any).colwidth
      });
    } else if (((u as any).type as any) == ("zero_sized" as any)) {
      const c: any = (((i as any).mapping as any).map as any)(n);
      ((i as any).delete as any)(c, (c as any) + ((t as any).nodeSize as any));
    }
  }
  let o: any, l: any;
  for (let a: any = 0; (a as any) < ((s as any).length as any); a++) (s as any)[a] && ((o as any) == (null as any) && (o = a), l = a);
  for (let a: any = 0, u: any = (n as any) + (1 as any); (a as any) < ((r as any).height as any); a++) {
    const c: any = ((t as any).child as any)(a),
      d: any = (u as any) + ((c as any).nodeSize as any),
      h: any = (s as any)[a];
    if ((h as any) > (0 as any)) {
      let p: any = "cell";
      (c as any).firstChild && (p = ((((c as any).firstChild as any).type as any).spec as any).tableRole);
      const f: any = [];
      for (let k: any = 0; (k as any) < (h as any); k++) {
        const b: any = ((((F as any)((e as any).schema) as any)[p] as any).createAndFill as any)();
        b && ((f as any).push as any)(b);
      }
      const g: any = ((a as any) == (0 as any) || (o as any) == ((a as any) - (1 as any) as any)) && (l as any) == (a as any) ? (u as any) + (1 as any) : (d as any) - (1 as any);
      ((i as any).insert as any)((((i as any).mapping as any).map as any)(g), f);
    }
    u = d;
  }
  return ((i as any).setMeta as any)(nu, {
    fixTables: !0
  });
}
function ve(this: any, e: any): any {
  const t: any = (e as any).selection,
    n: any = ($t as any)(e),
    i: any = ((n as any).node as any)(-1),
    r: any = ((n as any).start as any)(-1),
    s: any = ((P as any).get as any)(i);
  return {
    ...(t instanceof I ? ((s as any).rectBetween as any)((((t as any).$anchorCell as any).pos as any) - (r as any), (((t as any).$headCell as any).pos as any) - (r as any)) : ((s as any).findCell as any)(((n as any).pos as any) - (r as any))),
    tableStart: r,
    map: s,
    table: i
  };
}
function Qr(this: any, e: any, {
  map: t,
  tableStart: n,
  table: i
}: any, r: any): any {
  let s: any = (r as any) > (0 as any) ? -1 : 0;
  (Za as any)(t, i, (r as any) + (s as any)) && (s = (r as any) == (0 as any) || (r as any) == ((t as any).width as any) ? null : 0);
  for (let o: any = 0; (o as any) < ((t as any).height as any); o++) {
    const l: any = ((o as any) * ((t as any).width as any) as any) + (r as any);
    if ((r as any) > (0 as any) && (r as any) < ((t as any).width as any) && (((t as any).map as any)[(l as any) - (1 as any)] as any) == (((t as any).map as any)[l] as any)) {
      const a: any = ((t as any).map as any)[l],
        u: any = ((i as any).nodeAt as any)(a);
      ((e as any).setNodeMarkup as any)((((e as any).mapping as any).map as any)((n as any) + (a as any)), null, (Kr as any)((u as any).attrs, (r as any) - (((t as any).colCount as any)(a) as any))), o += (((u as any).attrs as any).rowspan as any) - (1 as any);
    } else {
      const a: any = (s as any) == (null as any) ? ((F as any)(((i as any).type as any).schema) as any).cell : (((i as any).nodeAt as any)(((t as any).map as any)[(l as any) + (s as any)]) as any).type,
        u: any = ((t as any).positionAt as any)(o, r, i);
      ((e as any).insert as any)((((e as any).mapping as any).map as any)((n as any) + (u as any)), ((a as any).createAndFill as any)());
    }
  }
  return e;
}
function ru(this: any, e: any, t: any): any {
  if (!(pe as any)(e)) return !1;
  if (t) {
    const n: any = (ve as any)(e);
    (t as any)((Qr as any)((e as any).tr, n, (n as any).left));
  }
  return !0;
}
function su(this: any, e: any, t: any): any {
  if (!(pe as any)(e)) return !1;
  if (t) {
    const n: any = (ve as any)(e);
    (t as any)((Qr as any)((e as any).tr, n, (n as any).right));
  }
  return !0;
}
function ou(this: any, e: any, {
  map: t,
  table: n,
  tableStart: i
}: any, r: any): any {
  const s: any = (((e as any).mapping as any).maps as any).length;
  for (let o: any = 0; (o as any) < ((t as any).height as any);) {
    const l: any = ((o as any) * ((t as any).width as any) as any) + (r as any),
      a: any = ((t as any).map as any)[l],
      u: any = ((n as any).nodeAt as any)(a),
      c: any = (u as any).attrs;
    if ((r as any) > (0 as any) && (((t as any).map as any)[(l as any) - (1 as any)] as any) == (a as any) || (r as any) < (((t as any).width as any) - (1 as any) as any) && (((t as any).map as any)[(l as any) + (1 as any)] as any) == (a as any)) ((e as any).setNodeMarkup as any)((((((e as any).mapping as any).slice as any)(s) as any).map as any)((i as any) + (a as any)), null, (Oe as any)(c, (r as any) - (((t as any).colCount as any)(a) as any)));else {
      const d: any = (((((e as any).mapping as any).slice as any)(s) as any).map as any)((i as any) + (a as any));
      ((e as any).delete as any)(d, (d as any) + ((u as any).nodeSize as any));
    }
    o += (c as any).rowspan;
  }
}
function lu(this: any, e: any, t: any): any {
  if (!(pe as any)(e)) return !1;
  if (t) {
    const n: any = (ve as any)(e),
      i: any = (e as any).tr;
    if (((n as any).left as any) == (0 as any) && ((n as any).right as any) == (((n as any).map as any).width as any)) return !1;
    for (let r: any = ((n as any).right as any) - (1 as any); (ou as any)(i, n, r), (r as any) != ((n as any).left as any); r--) {
      const s: any = (n as any).tableStart ? (((i as any).doc as any).nodeAt as any)(((n as any).tableStart as any) - (1 as any)) : (i as any).doc;
      if (!s) throw new (RangeError as any)("No table found");
      (n as any).table = s, (n as any).map = ((P as any).get as any)(s);
    }
    (t as any)(i);
  }
  return !0;
}
function au(this: any, e: any, t: any, n: any): any {
  var i: any;
  const r: any = ((F as any)(((t as any).type as any).schema) as any).header_cell;
  for (let s: any = 0; (s as any) < ((e as any).width as any); s++) if (((((i = ((t as any).nodeAt as any)(((e as any).map as any)[(s as any) + ((n as any) * ((e as any).width as any) as any)])) as any) === (null as any) || (i as any) === (void 0 as any) ? void 0 : (i as any).type) as any) != (r as any)) return !1;
  return !0;
}
function Yr(this: any, e: any, {
  map: t,
  tableStart: n,
  table: i
}: any, r: any): any {
  let s: any = n;
  for (let u: any = 0; (u as any) < (r as any); u++) s += (((i as any).child as any)(u) as any).nodeSize;
  const o: any = [];
  let l: any = (r as any) > (0 as any) ? -1 : 0;
  (au as any)(t, i, (r as any) + (l as any)) && (l = (r as any) == (0 as any) || (r as any) == ((t as any).height as any) ? null : 0);
  for (let u: any = 0, c: any = ((t as any).width as any) * (r as any); (u as any) < ((t as any).width as any); u++, c++) if ((r as any) > (0 as any) && (r as any) < ((t as any).height as any) && (((t as any).map as any)[c] as any) == (((t as any).map as any)[(c as any) - ((t as any).width as any)] as any)) {
    const d: any = ((t as any).map as any)[c],
      h: any = (((i as any).nodeAt as any)(d) as any).attrs;
    ((e as any).setNodeMarkup as any)((n as any) + (d as any), null, {
      ...h,
      rowspan: ((h as any).rowspan as any) + (1 as any)
    }), u += ((h as any).colspan as any) - (1 as any);
  } else {
    var a: any;
    const d: any = (l as any) == (null as any) ? ((F as any)(((i as any).type as any).schema) as any).cell : ((a = ((i as any).nodeAt as any)(((t as any).map as any)[(c as any) + ((l as any) * ((t as any).width as any) as any)])) as any) === (null as any) || (a as any) === (void 0 as any) ? void 0 : (a as any).type,
      h: any = d?.createAndFill();
    h && ((o as any).push as any)(h);
  }
  return ((e as any).insert as any)(s, ((((F as any)(((i as any).type as any).schema) as any).row as any).create as any)(null, o)), e;
}
function uu(this: any, e: any, t: any): any {
  if (!(pe as any)(e)) return !1;
  if (t) {
    const n: any = (ve as any)(e);
    (t as any)((Yr as any)((e as any).tr, n, (n as any).top));
  }
  return !0;
}
function cu(this: any, e: any, t: any): any {
  if (!(pe as any)(e)) return !1;
  if (t) {
    const n: any = (ve as any)(e);
    (t as any)((Yr as any)((e as any).tr, n, (n as any).bottom));
  }
  return !0;
}
function du(this: any, e: any, {
  map: t,
  table: n,
  tableStart: i
}: any, r: any): any {
  let s: any = 0;
  for (let u: any = 0; (u as any) < (r as any); u++) s += (((n as any).child as any)(u) as any).nodeSize;
  const o: any = (s as any) + ((((n as any).child as any)(r) as any).nodeSize as any),
    l: any = (((e as any).mapping as any).maps as any).length;
  ((e as any).delete as any)((s as any) + (i as any), (o as any) + (i as any));
  const a: any = new (Set as any)();
  for (let u: any = 0, c: any = (r as any) * ((t as any).width as any); (u as any) < ((t as any).width as any); u++, c++) {
    const d: any = ((t as any).map as any)[c];
    if (!((a as any).has as any)(d)) {
      if (((a as any).add as any)(d), (r as any) > (0 as any) && (d as any) == (((t as any).map as any)[(c as any) - ((t as any).width as any)] as any)) {
        const h: any = (((n as any).nodeAt as any)(d) as any).attrs;
        ((e as any).setNodeMarkup as any)((((((e as any).mapping as any).slice as any)(l) as any).map as any)((d as any) + (i as any)), null, {
          ...h,
          rowspan: ((h as any).rowspan as any) - (1 as any)
        }), u += ((h as any).colspan as any) - (1 as any);
      } else if ((r as any) < ((t as any).height as any) && (d as any) == (((t as any).map as any)[(c as any) + ((t as any).width as any)] as any)) {
        const h: any = ((n as any).nodeAt as any)(d),
          p: any = (h as any).attrs,
          f: any = (((h as any).type as any).create as any)({
            ...p,
            rowspan: (((h as any).attrs as any).rowspan as any) - (1 as any)
          }, (h as any).content),
          g: any = ((t as any).positionAt as any)((r as any) + (1 as any), u, n);
        ((e as any).insert as any)((((((e as any).mapping as any).slice as any)(l) as any).map as any)((i as any) + (g as any)), f), u += ((p as any).colspan as any) - (1 as any);
      }
    }
  }
}
function hu(this: any, e: any, t: any): any {
  if (!(pe as any)(e)) return !1;
  if (t) {
    const n: any = (ve as any)(e),
      i: any = (e as any).tr;
    if (((n as any).top as any) == (0 as any) && ((n as any).bottom as any) == (((n as any).map as any).height as any)) return !1;
    for (let r: any = ((n as any).bottom as any) - (1 as any); (du as any)(i, n, r), (r as any) != ((n as any).top as any); r--) {
      const s: any = (n as any).tableStart ? (((i as any).doc as any).nodeAt as any)(((n as any).tableStart as any) - (1 as any)) : (i as any).doc;
      if (!s) throw new (RangeError as any)("No table found");
      (n as any).table = s, (n as any).map = ((P as any).get as any)((n as any).table);
    }
    (t as any)(i);
  }
  return !0;
}
function ii(this: any, e: any): any {
  const t: any = (e as any).content;
  return ((t as any).childCount as any) == (1 as any) && (((t as any).child as any)(0) as any).isTextblock && ((((t as any).child as any)(0) as any).childCount as any) == (0 as any);
}
function pu(this: any, {
  width: e,
  height: t,
  map: n
}: any, i: any): any {
  let r: any = (((i as any).top as any) * (e as any) as any) + ((i as any).left as any),
    s: any = r,
    o: any = ((((i as any).bottom as any) - (1 as any) as any) * (e as any) as any) + ((i as any).left as any),
    l: any = (r as any) + ((((i as any).right as any) - ((i as any).left as any) as any) - (1 as any) as any);
  for (let a: any = (i as any).top; (a as any) < ((i as any).bottom as any); a++) {
    if (((i as any).left as any) > (0 as any) && ((n as any)[s] as any) == ((n as any)[(s as any) - (1 as any)] as any) || ((i as any).right as any) < (e as any) && ((n as any)[l] as any) == ((n as any)[(l as any) + (1 as any)] as any)) return !0;
    s += e, l += e;
  }
  for (let a: any = (i as any).left; (a as any) < ((i as any).right as any); a++) {
    if (((i as any).top as any) > (0 as any) && ((n as any)[r] as any) == ((n as any)[(r as any) - (e as any)] as any) || ((i as any).bottom as any) < (t as any) && ((n as any)[o] as any) == ((n as any)[(o as any) + (e as any)] as any)) return !0;
    r++, o++;
  }
  return !1;
}
function ri(this: any, e: any, t: any): any {
  const n: any = (e as any).selection;
  if (!(n instanceof I) || (((n as any).$anchorCell as any).pos as any) == (((n as any).$headCell as any).pos as any)) return !1;
  const i: any = (ve as any)(e),
    {
      map: r
    }: any = i;
  if ((pu as any)(r, i)) return !1;
  if (t) {
    const s: any = (e as any).tr,
      o: any = {};
    let l: any = (we as any).empty,
      a: any,
      u: any;
    for (let c: any = (i as any).top; (c as any) < ((i as any).bottom as any); c++) for (let d: any = (i as any).left; (d as any) < ((i as any).right as any); d++) {
      const h: any = ((r as any).map as any)[((c as any) * ((r as any).width as any) as any) + (d as any)],
        p: any = (((i as any).table as any).nodeAt as any)(h);
      if (!((o as any)[h] || !p)) if ((o as any)[h] = !0, (a as any) == (null as any)) a = h, u = p;else {
        (ii as any)(p) || (l = ((l as any).append as any)((p as any).content));
        const f: any = (((s as any).mapping as any).map as any)((h as any) + ((i as any).tableStart as any));
        ((s as any).delete as any)(f, (f as any) + ((p as any).nodeSize as any));
      }
    }
    if ((a as any) == (null as any) || (u as any) == (null as any)) return !0;
    if (((s as any).setNodeMarkup as any)((a as any) + ((i as any).tableStart as any), null, {
      ...(Kr as any)((u as any).attrs, ((u as any).attrs as any).colspan, (((i as any).right as any) - ((i as any).left as any) as any) - (((u as any).attrs as any).colspan as any)),
      rowspan: ((i as any).bottom as any) - ((i as any).top as any)
    }), ((l as any).size as any) > (0 as any)) {
      const c: any = ((a as any) + (1 as any) as any) + (((u as any).content as any).size as any),
        d: any = (ii as any)(u) ? (a as any) + (1 as any) : c;
      ((s as any).replaceWith as any)((d as any) + ((i as any).tableStart as any), (c as any) + ((i as any).tableStart as any), l);
    }
    ((s as any).setSelection as any)(new (I as any)((((s as any).doc as any).resolve as any)((a as any) + ((i as any).tableStart as any)))), (t as any)(s);
  }
  return !0;
}
function si(this: any, e: any, t: any): any {
  const n: any = (F as any)((e as any).schema);
  return ((fu as any)(({
    node: i
  }: any): any => (n as any)[(((i as any).type as any).spec as any).tableRole]) as any)(e, t);
}
function fu(this: any, e: any): any {
  return (t: any, n: any): any => {
    const i: any = (t as any).selection;
    let r: any, s: any;
    if (i instanceof I) {
      if ((((i as any).$anchorCell as any).pos as any) != (((i as any).$headCell as any).pos as any)) return !1;
      r = ((i as any).$anchorCell as any).nodeAfter, s = ((i as any).$anchorCell as any).pos;
    } else {
      var o: any;
      if (r = (Ka as any)((i as any).$from), !r) return !1;
      s = ((o = (Ve as any)((i as any).$from)) as any) === (null as any) || (o as any) === (void 0 as any) ? void 0 : (o as any).pos;
    }
    if ((r as any) == (null as any) || (s as any) == (null as any) || (((r as any).attrs as any).colspan as any) == (1 as any) && (((r as any).attrs as any).rowspan as any) == (1 as any)) return !1;
    if (n) {
      let l: any = (r as any).attrs;
      const a: any = [],
        u: any = (l as any).colwidth;
      ((l as any).rowspan as any) > (1 as any) && (l = {
        ...l,
        rowspan: 1
      }), ((l as any).colspan as any) > (1 as any) && (l = {
        ...l,
        colspan: 1
      });
      const c: any = (ve as any)(t),
        d: any = (t as any).tr;
      for (let p: any = 0; (p as any) < (((c as any).right as any) - ((c as any).left as any) as any); p++) ((a as any).push as any)(u ? {
        ...l,
        colwidth: u && (u as any)[p] ? [(u as any)[p]] : null
      } : l);
      let h: any;
      for (let p: any = (c as any).top; (p as any) < ((c as any).bottom as any); p++) {
        let f: any = (((c as any).map as any).positionAt as any)(p, (c as any).left, (c as any).table);
        (p as any) == ((c as any).top as any) && (f += (r as any).nodeSize);
        for (let g: any = (c as any).left, k: any = 0; (g as any) < ((c as any).right as any); g++, k++) (g as any) == ((c as any).left as any) && (p as any) == ((c as any).top as any) || ((d as any).insert as any)(h = (((d as any).mapping as any).map as any)((f as any) + ((c as any).tableStart as any), 1), (((e as any)({
          node: r,
          row: p,
          col: g
        }) as any).createAndFill as any)((a as any)[k]));
      }
      ((d as any).setNodeMarkup as any)(s, (e as any)({
        node: r,
        row: (c as any).top,
        col: (c as any).left
      }), (a as any)[0]), i instanceof I && ((d as any).setSelection as any)(new (I as any)((((d as any).doc as any).resolve as any)(((i as any).$anchorCell as any).pos), h ? (((d as any).doc as any).resolve as any)(h) : void 0)), (n as any)(d);
    }
    return !0;
  };
}
function mu(this: any, e: any, t: any): any {
  return function (this: any, n: any, i: any): any {
    if (!(pe as any)(n)) return !1;
    const r: any = ($t as any)(n);
    if (((((r as any).nodeAfter as any).attrs as any)[e] as any) === (t as any)) return !1;
    if (i) {
      const s: any = (n as any).tr;
      (n as any).selection instanceof I ? (((n as any).selection as any).forEachCell as any)((o: any, l: any): any => {
        (((o as any).attrs as any)[e] as any) !== (t as any) && ((s as any).setNodeMarkup as any)(l, null, {
          ...(o as any).attrs,
          [e]: t
        });
      }) : ((s as any).setNodeMarkup as any)((r as any).pos, null, {
        ...((r as any).nodeAfter as any).attrs,
        [e]: t
      }), (i as any)(s);
    }
    return !0;
  };
}
function gu(this: any, e: any): any {
  return function (this: any, t: any, n: any): any {
    if (!(pe as any)(t)) return !1;
    if (n) {
      const i: any = (F as any)((t as any).schema),
        r: any = (ve as any)(t),
        s: any = (t as any).tr,
        o: any = (((r as any).map as any).cellsInRect as any)((e as any) == ("column" as any) ? {
          left: (r as any).left,
          top: 0,
          right: (r as any).right,
          bottom: ((r as any).map as any).height
        } : (e as any) == ("row" as any) ? {
          left: 0,
          top: (r as any).top,
          right: ((r as any).map as any).width,
          bottom: (r as any).bottom
        } : r),
        l: any = ((o as any).map as any)((a: any): any => (((r as any).table as any).nodeAt as any)(a));
      for (let a: any = 0; (a as any) < ((o as any).length as any); a++) (((l as any)[a] as any).type as any) == ((i as any).header_cell as any) && ((s as any).setNodeMarkup as any)(((r as any).tableStart as any) + ((o as any)[a] as any), (i as any).cell, ((l as any)[a] as any).attrs);
      if ((((s as any).steps as any).length as any) === (0 as any)) for (let a: any = 0; (a as any) < ((o as any).length as any); a++) ((s as any).setNodeMarkup as any)(((r as any).tableStart as any) + ((o as any)[a] as any), (i as any).header_cell, ((l as any)[a] as any).attrs);
      (n as any)(s);
    }
    return !0;
  };
}
function oi(this: any, e: any, t: any, n: any): any {
  const i: any = (((t as any).map as any).cellsInRect as any)({
    left: 0,
    top: 0,
    right: (e as any) == ("row" as any) ? ((t as any).map as any).width : 1,
    bottom: (e as any) == ("column" as any) ? ((t as any).map as any).height : 1
  });
  for (let r: any = 0; (r as any) < ((i as any).length as any); r++) {
    const s: any = (((t as any).table as any).nodeAt as any)((i as any)[r]);
    if (s && ((s as any).type as any) !== ((n as any).header_cell as any)) return !1;
  }
  return !0;
}
function et(this: any, e: any, t: any): any {
  return t = t || {
    useDeprecatedLogic: !1
  }, (t as any).useDeprecatedLogic ? (gu as any)(e) : function (this: any, n: any, i: any): any {
    if (!(pe as any)(n)) return !1;
    if (i) {
      const r: any = (F as any)((n as any).schema),
        s: any = (ve as any)(n),
        o: any = (n as any).tr,
        l: any = (oi as any)("row", s, r),
        a: any = (oi as any)("column", s, r),
        u: any = ((e as any) === ("column" as any) ? l : (e as any) === ("row" as any) && a) ? 1 : 0,
        c: any = (e as any) == ("column" as any) ? {
          left: 0,
          top: u,
          right: 1,
          bottom: ((s as any).map as any).height
        } : (e as any) == ("row" as any) ? {
          left: u,
          top: 0,
          right: ((s as any).map as any).width,
          bottom: 1
        } : s,
        d: any = (e as any) == ("column" as any) ? a ? (r as any).cell : (r as any).header_cell : (e as any) == ("row" as any) ? l ? (r as any).cell : (r as any).header_cell : (r as any).cell;
      (((((s as any).map as any).cellsInRect as any)(c) as any).forEach as any)((h: any): any => {
        const p: any = (h as any) + ((s as any).tableStart as any),
          f: any = (((o as any).doc as any).nodeAt as any)(p);
        f && ((o as any).setNodeMarkup as any)(p, d, (f as any).attrs);
      }), (i as any)(o);
    }
    return !0;
  };
}
(et as any)("row", {
  useDeprecatedLogic: !0
});
(et as any)("column", {
  useDeprecatedLogic: !0
});
const ku: any = (et as any)("cell", {
  useDeprecatedLogic: !0
});
function bu(this: any, e: any, t: any): any {
  if ((t as any) < (0 as any)) {
    const n: any = (e as any).nodeBefore;
    if (n) return ((e as any).pos as any) - ((n as any).nodeSize as any);
    for (let i: any = (((e as any).index as any)(-1) as any) - (1 as any), r: any = ((e as any).before as any)(); (i as any) >= (0 as any); i--) {
      const s: any = ((((e as any).node as any)(-1) as any).child as any)(i),
        o: any = (s as any).lastChild;
      if (o) return ((r as any) - (1 as any) as any) - ((o as any).nodeSize as any);
      r -= (s as any).nodeSize;
    }
  } else {
    if ((((e as any).index as any)() as any) < ((((e as any).parent as any).childCount as any) - (1 as any) as any)) return ((e as any).pos as any) + (((e as any).nodeAfter as any).nodeSize as any);
    const n: any = ((e as any).node as any)(-1);
    for (let i: any = ((e as any).indexAfter as any)(-1), r: any = ((e as any).after as any)(); (i as any) < ((n as any).childCount as any); i++) {
      const s: any = ((n as any).child as any)(i);
      if ((s as any).childCount) return (r as any) + (1 as any);
      r += (s as any).nodeSize;
    }
  }
  return null;
}
function li(this: any, e: any): any {
  return function (this: any, t: any, n: any): any {
    if (!(pe as any)(t)) return !1;
    const i: any = (bu as any)(($t as any)(t), e);
    if ((i as any) == (null as any)) return !1;
    if (n) {
      const r: any = (((t as any).doc as any).resolve as any)(i);
      (n as any)((((((t as any).tr as any).setSelection as any)(((H as any).between as any)(r, (Ga as any)(r))) as any).scrollIntoView as any)());
    }
    return !0;
  };
}
function yu(this: any, e: any, t: any): any {
  const n: any = ((e as any).selection as any).$anchor;
  for (let i: any = (n as any).depth; (i as any) > (0 as any); i--) if (((((((n as any).node as any)(i) as any).type as any).spec as any).tableRole as any) == ("table" as any)) return t && (t as any)((((((e as any).tr as any).delete as any)(((n as any).before as any)(i), ((n as any).after as any)(i)) as any).scrollIntoView as any)()), !0;
  return !1;
}
function ct(this: any, e: any, t: any): any {
  const n: any = (e as any).selection;
  if (!(n instanceof I)) return !1;
  if (t) {
    const i: any = (e as any).tr,
      r: any = (((((F as any)((e as any).schema) as any).cell as any).createAndFill as any)() as any).content;
    ((n as any).forEachCell as any)((s: any, o: any): any => {
      (((s as any).content as any).eq as any)(r) || ((i as any).replace as any)((((i as any).mapping as any).map as any)((o as any) + (1 as any)), (((i as any).mapping as any).map as any)(((o as any) + ((s as any).nodeSize as any) as any) - (1 as any)), new (Ae as any)(r, 0, 0));
    }), (i as any).docChanged && (t as any)(i);
  }
  return !0;
}
function wu(this: any, e: any): any {
  if (((e as any).size as any) === (0 as any)) return null;
  let {
    content: t,
    openStart: n,
    openEnd: i
  }: any = e;
  for (; ((t as any).childCount as any) == (1 as any) && ((n as any) > (0 as any) && (i as any) > (0 as any) || ((((((t as any).child as any)(0) as any).type as any).spec as any).tableRole as any) == ("table" as any));) n--, i--, t = (((t as any).child as any)(0) as any).content;
  const r: any = ((t as any).child as any)(0),
    s: any = (((r as any).type as any).spec as any).tableRole,
    o: any = ((r as any).type as any).schema,
    l: any = [];
  if ((s as any) == ("row" as any)) for (let a: any = 0; (a as any) < ((t as any).childCount as any); a++) {
    let u: any = (((t as any).child as any)(a) as any).content;
    const c: any = a ? 0 : ((Math as any).max as any)(0, (n as any) - (1 as any)),
      d: any = (a as any) < (((t as any).childCount as any) - (1 as any) as any) ? 0 : ((Math as any).max as any)(0, (i as any) - (1 as any));
    (c || d) && (u = ((en as any)(((F as any)(o) as any).row, new (Ae as any)(u, c, d)) as any).content), ((l as any).push as any)(u);
  } else if ((s as any) == ("cell" as any) || (s as any) == ("header_cell" as any)) ((l as any).push as any)(n || i ? ((en as any)(((F as any)(o) as any).row, new (Ae as any)(t, n, i)) as any).content : t);else return null;
  return (xu as any)(o, l);
}
function xu(this: any, e: any, t: any): any {
  const n: any = [];
  for (let r: any = 0; (r as any) < ((t as any).length as any); r++) {
    const s: any = (t as any)[r];
    for (let o: any = ((s as any).childCount as any) - (1 as any); (o as any) >= (0 as any); o--) {
      const {
        rowspan: l,
        colspan: a
      }: any = (((s as any).child as any)(o) as any).attrs;
      for (let u: any = r; (u as any) < ((r as any) + (l as any) as any); u++) (n as any)[u] = (((n as any)[u] || 0) as any) + (a as any);
    }
  }
  let i: any = 0;
  for (let r: any = 0; (r as any) < ((n as any).length as any); r++) i = ((Math as any).max as any)(i, (n as any)[r]);
  for (let r: any = 0; (r as any) < ((n as any).length as any); r++) if ((r as any) >= ((t as any).length as any) && ((t as any).push as any)((we as any).empty), ((n as any)[r] as any) < (i as any)) {
    const s: any = ((((F as any)(e) as any).cell as any).createAndFill as any)(),
      o: any = [];
    for (let l: any = (n as any)[r]; (l as any) < (i as any); l++) ((o as any).push as any)(s);
    (t as any)[r] = (((t as any)[r] as any).append as any)(((we as any).from as any)(o));
  }
  return {
    height: (t as any).length,
    width: i,
    rows: t
  };
}
function en(this: any, e: any, t: any): any {
  const n: any = ((e as any).createAndFill as any)();
  return (((new (lo as any)(n) as any).replace as any)(0, ((n as any).content as any).size, t) as any).doc;
}
function vu(this: any, {
  width: e,
  height: t,
  rows: n
}: any, i: any, r: any): any {
  if ((e as any) != (i as any)) {
    const s: any = [],
      o: any = [];
    for (let l: any = 0; (l as any) < ((n as any).length as any); l++) {
      const a: any = (n as any)[l],
        u: any = [];
      for (let c: any = (s as any)[l] || 0, d: any = 0; (c as any) < (i as any); d++) {
        let h: any = ((a as any).child as any)((d as any) % ((a as any).childCount as any));
        ((c as any) + (((h as any).attrs as any).colspan as any) as any) > (i as any) && (h = (((h as any).type as any).createChecked as any)((Oe as any)((h as any).attrs, ((h as any).attrs as any).colspan, ((c as any) + (((h as any).attrs as any).colspan as any) as any) - (i as any)), (h as any).content)), ((u as any).push as any)(h), c += ((h as any).attrs as any).colspan;
        for (let p: any = 1; (p as any) < (((h as any).attrs as any).rowspan as any); p++) (s as any)[(l as any) + (p as any)] = (((s as any)[(l as any) + (p as any)] || 0) as any) + (((h as any).attrs as any).colspan as any);
      }
      ((o as any).push as any)(((we as any).from as any)(u));
    }
    n = o, e = i;
  }
  if ((t as any) != (r as any)) {
    const s: any = [];
    for (let o: any = 0, l: any = 0; (o as any) < (r as any); o++, l++) {
      const a: any = [],
        u: any = (n as any)[(l as any) % (t as any)];
      for (let c: any = 0; (c as any) < ((u as any).childCount as any); c++) {
        let d: any = ((u as any).child as any)(c);
        ((o as any) + (((d as any).attrs as any).rowspan as any) as any) > (r as any) && (d = (((d as any).type as any).create as any)({
          ...(d as any).attrs,
          rowspan: ((Math as any).max as any)(1, (r as any) - (((d as any).attrs as any).rowspan as any))
        }, (d as any).content)), ((a as any).push as any)(d);
      }
      ((s as any).push as any)(((we as any).from as any)(a));
    }
    n = s, t = r;
  }
  return {
    width: e,
    height: t,
    rows: n
  };
}
function Su(this: any, e: any, t: any, n: any, i: any, r: any, s: any, o: any): any {
  const l: any = (((e as any).doc as any).type as any).schema,
    a: any = (F as any)(l);
  let u: any, c: any;
  if ((r as any) > ((t as any).width as any)) for (let d: any = 0, h: any = 0; (d as any) < ((t as any).height as any); d++) {
    const p: any = ((n as any).child as any)(d);
    h += (p as any).nodeSize;
    const f: any = [];
    let g: any;
    ((p as any).lastChild as any) == (null as any) || (((p as any).lastChild as any).type as any) == ((a as any).cell as any) ? g = u || (u = (((a as any).cell as any).createAndFill as any)()) : g = c || (c = (((a as any).header_cell as any).createAndFill as any)());
    for (let k: any = (t as any).width; (k as any) < (r as any); k++) ((f as any).push as any)(g);
    ((e as any).insert as any)((((((e as any).mapping as any).slice as any)(o) as any).map as any)(((h as any) - (1 as any) as any) + (i as any)), f);
  }
  if ((s as any) > ((t as any).height as any)) {
    const d: any = [];
    for (let f: any = 0, g: any = (((t as any).height as any) - (1 as any) as any) * ((t as any).width as any); (f as any) < (((Math as any).max as any)((t as any).width, r) as any); f++) {
      const k: any = (f as any) >= ((t as any).width as any) ? !1 : ((((n as any).nodeAt as any)(((t as any).map as any)[(g as any) + (f as any)]) as any).type as any) == ((a as any).header_cell as any);
      ((d as any).push as any)(k ? c || (c = (((a as any).header_cell as any).createAndFill as any)()) : u || (u = (((a as any).cell as any).createAndFill as any)()));
    }
    const h: any = (((a as any).row as any).create as any)(null, ((we as any).from as any)(d)),
      p: any = [];
    for (let f: any = (t as any).height; (f as any) < (s as any); f++) ((p as any).push as any)(h);
    ((e as any).insert as any)((((((e as any).mapping as any).slice as any)(o) as any).map as any)(((i as any) + ((n as any).nodeSize as any) as any) - (2 as any)), p);
  }
  return !!(u || c);
}
function ai(this: any, e: any, t: any, n: any, i: any, r: any, s: any, o: any, l: any): any {
  if ((o as any) == (0 as any) || (o as any) == ((t as any).height as any)) return !1;
  let a: any = !1;
  for (let u: any = r; (u as any) < (s as any); u++) {
    const c: any = ((o as any) * ((t as any).width as any) as any) + (u as any),
      d: any = ((t as any).map as any)[c];
    if ((((t as any).map as any)[(c as any) - ((t as any).width as any)] as any) == (d as any)) {
      a = !0;
      const h: any = ((n as any).nodeAt as any)(d),
        {
          top: p,
          left: f
        }: any = ((t as any).findCell as any)(d);
      ((e as any).setNodeMarkup as any)((((((e as any).mapping as any).slice as any)(l) as any).map as any)((d as any) + (i as any)), null, {
        ...(h as any).attrs,
        rowspan: (o as any) - (p as any)
      }), ((e as any).insert as any)((((((e as any).mapping as any).slice as any)(l) as any).map as any)(((t as any).positionAt as any)(o, f, n)), (((h as any).type as any).createAndFill as any)({
        ...(h as any).attrs,
        rowspan: ((p as any) + (((h as any).attrs as any).rowspan as any) as any) - (o as any)
      })), u += (((h as any).attrs as any).colspan as any) - (1 as any);
    }
  }
  return a;
}
function ui(this: any, e: any, t: any, n: any, i: any, r: any, s: any, o: any, l: any): any {
  if ((o as any) == (0 as any) || (o as any) == ((t as any).width as any)) return !1;
  let a: any = !1;
  for (let u: any = r; (u as any) < (s as any); u++) {
    const c: any = ((u as any) * ((t as any).width as any) as any) + (o as any),
      d: any = ((t as any).map as any)[c];
    if ((((t as any).map as any)[(c as any) - (1 as any)] as any) == (d as any)) {
      a = !0;
      const h: any = ((n as any).nodeAt as any)(d),
        p: any = ((t as any).colCount as any)(d),
        f: any = (((((e as any).mapping as any).slice as any)(l) as any).map as any)((d as any) + (i as any));
      ((e as any).setNodeMarkup as any)(f, null, (Oe as any)((h as any).attrs, (o as any) - (p as any), (((h as any).attrs as any).colspan as any) - ((o as any) - (p as any) as any))), ((e as any).insert as any)((f as any) + ((h as any).nodeSize as any), (((h as any).type as any).createAndFill as any)((Oe as any)((h as any).attrs, 0, (o as any) - (p as any)))), u += (((h as any).attrs as any).rowspan as any) - (1 as any);
    }
  }
  return a;
}
function ci(this: any, e: any, t: any, n: any, i: any, r: any): any {
  let s: any = n ? (((e as any).doc as any).nodeAt as any)((n as any) - (1 as any)) : (e as any).doc;
  if (!s) throw new (Error as any)("No table found");
  let o: any = ((P as any).get as any)(s);
  const {
      top: l,
      left: a
    }: any = i,
    u: any = (a as any) + ((r as any).width as any),
    c: any = (l as any) + ((r as any).height as any),
    d: any = (e as any).tr;
  let h: any = 0;
  function p(this: any): any {
    if (s = n ? (((d as any).doc as any).nodeAt as any)((n as any) - (1 as any)) : (d as any).doc, !s) throw new (Error as any)("No table found");
    o = ((P as any).get as any)(s), h = (((d as any).mapping as any).maps as any).length;
  }
  (Su as any)(d, o, s, n, u, c, h) && (p as any)(), (ai as any)(d, o, s, n, a, u, l, h) && (p as any)(), (ai as any)(d, o, s, n, a, u, c, h) && (p as any)(), (ui as any)(d, o, s, n, l, c, a, h) && (p as any)(), (ui as any)(d, o, s, n, l, c, u, h) && (p as any)();
  for (let f: any = l; (f as any) < (c as any); f++) {
    const g: any = ((o as any).positionAt as any)(f, a, s),
      k: any = ((o as any).positionAt as any)(f, u, s);
    ((d as any).replace as any)((((((d as any).mapping as any).slice as any)(h) as any).map as any)((g as any) + (n as any)), (((((d as any).mapping as any).slice as any)(h) as any).map as any)((k as any) + (n as any)), new (Ae as any)(((r as any).rows as any)[(f as any) - (l as any)], 0, 0));
  }
  (p as any)(), ((d as any).setSelection as any)(new (I as any)((((d as any).doc as any).resolve as any)((n as any) + (((o as any).positionAt as any)(l, a, s) as any)), (((d as any).doc as any).resolve as any)((n as any) + (((o as any).positionAt as any)((c as any) - (1 as any), (u as any) - (1 as any), s) as any)))), (t as any)(d);
}
const Cu: any = (rr as any)({
  ArrowLeft: (dt as any)("horiz", -1),
  ArrowRight: (dt as any)("horiz", 1),
  ArrowUp: (dt as any)("vert", -1),
  ArrowDown: (dt as any)("vert", 1),
  "Shift-ArrowLeft": (ht as any)("horiz", -1),
  "Shift-ArrowRight": (ht as any)("horiz", 1),
  "Shift-ArrowUp": (ht as any)("vert", -1),
  "Shift-ArrowDown": (ht as any)("vert", 1),
  Backspace: ct,
  "Mod-Backspace": ct,
  Delete: ct,
  "Mod-Delete": ct
});
function yt(this: any, e: any, t: any, n: any): any {
  return ((n as any).eq as any)((e as any).selection) ? !1 : (t && (t as any)((((((e as any).tr as any).setSelection as any)(n) as any).scrollIntoView as any)()), !0);
}
function dt(this: any, e: any, t: any): any {
  return (n: any, i: any, r: any): any => {
    if (!r) return !1;
    const s: any = (n as any).selection;
    if (s instanceof I) return (yt as any)(n, i, ((Me as any).near as any)((s as any).$headCell, t));
    if ((e as any) != ("horiz" as any) && !(s as any).empty) return !1;
    const o: any = (Jr as any)(r, e, t);
    if ((o as any) == (null as any)) return !1;
    if ((e as any) == ("horiz" as any)) return (yt as any)(n, i, ((Me as any).near as any)((((n as any).doc as any).resolve as any)(((s as any).head as any) + (t as any)), t));
    {
      const l: any = (((n as any).doc as any).resolve as any)(o),
        a: any = (Vr as any)(l, e, t);
      let u: any;
      return a ? u = ((Me as any).near as any)(a, 1) : (t as any) < (0 as any) ? u = ((Me as any).near as any)((((n as any).doc as any).resolve as any)(((l as any).before as any)(-1)), -1) : u = ((Me as any).near as any)((((n as any).doc as any).resolve as any)(((l as any).after as any)(-1)), 1), (yt as any)(n, i, u);
    }
  };
}
function ht(this: any, e: any, t: any): any {
  return (n: any, i: any, r: any): any => {
    if (!r) return !1;
    const s: any = (n as any).selection;
    let o: any;
    if (s instanceof I) o = s;else {
      const a: any = (Jr as any)(r, e, t);
      if ((a as any) == (null as any)) return !1;
      o = new (I as any)((((n as any).doc as any).resolve as any)(a));
    }
    const l: any = (Vr as any)((o as any).$headCell, e, t);
    return l ? (yt as any)(n, i, new (I as any)((o as any).$anchorCell, l)) : !1;
  };
}
function Tu(this: any, e: any, t: any): any {
  const n: any = ((e as any).state as any).doc,
    i: any = (Ve as any)(((n as any).resolve as any)(t));
  return i ? (((e as any).dispatch as any)(((((e as any).state as any).tr as any).setSelection as any)(new (I as any)(i))), !0) : !1;
}
function Ru(this: any, e: any, t: any, n: any): any {
  if (!(pe as any)((e as any).state)) return !1;
  let i: any = (wu as any)(n);
  const r: any = ((e as any).state as any).selection;
  if (r instanceof I) {
    i || (i = {
      width: 1,
      height: 1,
      rows: [((we as any).from as any)((en as any)(((F as any)(((e as any).state as any).schema) as any).cell, n))]
    });
    const s: any = (((r as any).$anchorCell as any).node as any)(-1),
      o: any = (((r as any).$anchorCell as any).start as any)(-1),
      l: any = ((((P as any).get as any)(s) as any).rectBetween as any)((((r as any).$anchorCell as any).pos as any) - (o as any), (((r as any).$headCell as any).pos as any) - (o as any));
    return i = (vu as any)(i, ((l as any).right as any) - ((l as any).left as any), ((l as any).bottom as any) - ((l as any).top as any)), (ci as any)((e as any).state, (e as any).dispatch, o, l, i), !0;
  } else if (i) {
    const s: any = ($t as any)((e as any).state),
      o: any = ((s as any).start as any)(-1);
    return (ci as any)((e as any).state, (e as any).dispatch, o, ((((P as any).get as any)(((s as any).node as any)(-1)) as any).findCell as any)(((s as any).pos as any) - (o as any)), i), !0;
  } else return !1;
}
function Mu(this: any, e: any, t: any): any {
  var n: any;
  if ((t as any).ctrlKey || (t as any).metaKey) return;
  const i: any = (di as any)(e, (t as any).target);
  let r: any;
  if ((t as any).shiftKey && ((e as any).state as any).selection instanceof I) (s as any)((((e as any).state as any).selection as any).$anchorCell, t), ((t as any).preventDefault as any)();else if ((t as any).shiftKey && i && ((r = (Ve as any)((((e as any).state as any).selection as any).$anchor)) as any) != (null as any) && ((((n = (Bt as any)(e, t)) as any) === (null as any) || (n as any) === (void 0 as any) ? void 0 : (n as any).pos) as any) != ((r as any).pos as any)) (s as any)(r, t), ((t as any).preventDefault as any)();else if (!i) return;
  function s(this: any, a: any, u: any): any {
    let c: any = (Bt as any)(e, u);
    const d: any = (((je as any).getState as any)((e as any).state) as any) == (null as any);
    if (!c || !(kn as any)(a, c)) if (d) c = a;else return;
    const h: any = new (I as any)(a, c);
    if (d || !((((e as any).state as any).selection as any).eq as any)(h)) {
      const p: any = ((((e as any).state as any).tr as any).setSelection as any)(h);
      d && ((p as any).setMeta as any)(je, (a as any).pos), ((e as any).dispatch as any)(p);
    }
  }
  function o(this: any): any {
    (((e as any).root as any).removeEventListener as any)("mouseup", o), (((e as any).root as any).removeEventListener as any)("dragstart", o), (((e as any).root as any).removeEventListener as any)("mousemove", l), (((je as any).getState as any)((e as any).state) as any) != (null as any) && ((e as any).dispatch as any)(((((e as any).state as any).tr as any).setMeta as any)(je, -1));
  }
  function l(this: any, a: any): any {
    const u: any = a,
      c: any = ((je as any).getState as any)((e as any).state);
    let d: any;
    if ((c as any) != (null as any)) d = ((((e as any).state as any).doc as any).resolve as any)(c);else if (((di as any)(e, (u as any).target) as any) != (i as any) && (d = (Bt as any)(e, t), !d)) return (o as any)();
    d && (s as any)(d, u);
  }
  (((e as any).root as any).addEventListener as any)("mouseup", o), (((e as any).root as any).addEventListener as any)("dragstart", o), (((e as any).root as any).addEventListener as any)("mousemove", l);
}
function Jr(this: any, e: any, t: any, n: any): any {
  if (!(((e as any).state as any).selection instanceof H)) return null;
  const {
    $head: i
  }: any = ((e as any).state as any).selection;
  for (let r: any = ((i as any).depth as any) - (1 as any); (r as any) >= (0 as any); r--) {
    const s: any = ((i as any).node as any)(r);
    if ((((n as any) < (0 as any) ? ((i as any).index as any)(r) : ((i as any).indexAfter as any)(r)) as any) != (((n as any) < (0 as any) ? 0 : (s as any).childCount) as any)) return null;
    if (((((s as any).type as any).spec as any).tableRole as any) == ("cell" as any) || ((((s as any).type as any).spec as any).tableRole as any) == ("header_cell" as any)) {
      const o: any = ((i as any).before as any)(r),
        l: any = (t as any) == ("vert" as any) ? (n as any) > (0 as any) ? "down" : "up" : (n as any) > (0 as any) ? "right" : "left";
      return ((e as any).endOfTextblock as any)(l) ? o : null;
    }
  }
  return null;
}
function di(this: any, e: any, t: any): any {
  for (; t && (t as any) != ((e as any).dom as any); t = (t as any).parentNode) if (((t as any).nodeName as any) == ("TD" as any) || ((t as any).nodeName as any) == ("TH" as any)) return t;
  return null;
}
function Bt(this: any, e: any, t: any): any {
  const n: any = ((e as any).posAtCoords as any)({
    left: (t as any).clientX,
    top: (t as any).clientY
  });
  if (!n) return null;
  const i: any = ((n as any).inside as any) >= (0 as any) ? (n as any).inside : (n as any).pos;
  return (Ve as any)(((((e as any).state as any).doc as any).resolve as any)(i));
}
var Eu: any = class {
  declare contentDOM: any;
  declare colgroup: any;
  declare table: any;
  declare dom: any;
  declare defaultCellMinWidth: any;
  declare node: any;
  [key: string]: any;
  constructor(t: any, n: any) {
    (this as any).node = t, (this as any).defaultCellMinWidth = n, (this as any).dom = ((document as any).createElement as any)("div"), ((this as any).dom as any).className = "tableWrapper", (this as any).table = (((this as any).dom as any).appendChild as any)(((document as any).createElement as any)("table")), ((((this as any).table as any).style as any).setProperty as any)("--default-cell-min-width", `${n}px`), (this as any).colgroup = (((this as any).table as any).appendChild as any)(((document as any).createElement as any)("colgroup")), (tn as any)(t, (this as any).colgroup, (this as any).table, n), (this as any).contentDOM = (((this as any).table as any).appendChild as any)(((document as any).createElement as any)("tbody"));
  }
  update(t: any): any {
    return ((t as any).type as any) != (((this as any).node as any).type as any) ? !1 : ((this as any).node = t, (tn as any)(t, (this as any).colgroup, (this as any).table, (this as any).defaultCellMinWidth), !0);
  }
  ignoreMutation(t: any): any {
    return ((t as any).type as any) == ("attributes" as any) && (((t as any).target as any) == ((this as any).table as any) || (((this as any).colgroup as any).contains as any)((t as any).target));
  }
};
function tn(this: any, e: any, t: any, n: any, i: any, r: any, s: any): any {
  let o: any = 0,
    l: any = !0,
    a: any = (t as any).firstChild;
  const u: any = (e as any).firstChild;
  if (u) {
    for (let d: any = 0, h: any = 0; (d as any) < ((u as any).childCount as any); d++) {
      const {
        colspan: p,
        colwidth: f
      }: any = (((u as any).child as any)(d) as any).attrs;
      for (let g: any = 0; (g as any) < (p as any); g++, h++) {
        const k: any = (r as any) == (h as any) ? s : f && (f as any)[g],
          b: any = k ? (k as any) + ("px" as any) : "";
        if (o += k || i, k || (l = !1), a) (((a as any).style as any).width as any) != (b as any) && (((a as any).style as any).width = b), a = (a as any).nextSibling;else {
          const w: any = ((document as any).createElement as any)("col");
          ((w as any).style as any).width = b, ((t as any).appendChild as any)(w);
        }
      }
    }
    for (; a;) {
      var c: any;
      const d: any = (a as any).nextSibling;
      ((c = (a as any).parentNode) as any) === (null as any) || (c as any) === (void 0 as any) || ((c as any).removeChild as any)(a), a = d;
    }
    l ? (((n as any).style as any).width = (o as any) + ("px" as any), ((n as any).style as any).minWidth = "") : (((n as any).style as any).width = "", ((n as any).style as any).minWidth = (o as any) + ("px" as any));
  }
}
const te: any = new (le as any)("tableColumnResizing");
function $u(this: any, {
  handleWidth: e = 5,
  cellMinWidth: t = 25,
  defaultCellMinWidth: n = 100,
  View: i = Eu,
  lastColumnResizable: r = !0
}: any = {}): any {
  const s: any = new (ie as any)({
    key: te,
    state: {
      init(o: any, l: any): any {
        var a: any;
        const u: any = ((a = (s as any).spec) as any) === (null as any) || (a as any) === (void 0 as any) || ((a = (a as any).props) as any) === (null as any) || (a as any) === (void 0 as any) ? void 0 : (a as any).nodeViews,
          c: any = (((F as any)((l as any).schema) as any).table as any).name;
        return i && u && ((u as any)[c] = (d: any, h: any): any => new (i as any)(d, n, h)), new (zu as any)(-1, !1);
      },
      apply(o: any, l: any): any {
        return ((l as any).apply as any)(o);
      }
    },
    props: {
      attributes: (o: any): any => {
        const l: any = ((te as any).getState as any)(o);
        return l && ((l as any).activeHandle as any) > (-1 as any) ? {
          class: "resize-cursor"
        } : {};
      },
      handleDOMEvents: {
        mousemove: (o: any, l: any): any => {
          (ju as any)(o, l, e, r);
        },
        mouseleave: (o: any): any => {
          (Au as any)(o);
        },
        mousedown: (o: any, l: any): any => {
          (Nu as any)(o, l, t, n);
        }
      },
      decorations: (o: any): any => {
        const l: any = ((te as any).getState as any)(o);
        if (l && ((l as any).activeHandle as any) > (-1 as any)) return (_u as any)(o, (l as any).activeHandle);
      },
      nodeViews: {}
    }
  });
  return s;
}
var zu: any = class wt {
  declare dragging: any;
  declare activeHandle: any;
  [key: string]: any;
  constructor(t: any, n: any) {
    (this as any).activeHandle = t, (this as any).dragging = n;
  }
  apply(t: any): any {
    const n: any = this,
      i: any = ((t as any).getMeta as any)(te);
    if (i && ((i as any).setHandle as any) != (null as any)) return new (wt as any)((i as any).setHandle, !1);
    if (i && ((i as any).setDragging as any) !== (void 0 as any)) return new (wt as any)((n as any).activeHandle, (i as any).setDragging);
    if (((n as any).activeHandle as any) > (-1 as any) && (t as any).docChanged) {
      let r: any = (((t as any).mapping as any).map as any)((n as any).activeHandle, -1);
      return (Jt as any)((((t as any).doc as any).resolve as any)(r)) || (r = -1), new (wt as any)(r, (n as any).dragging);
    }
    return n;
  }
};
function ju(this: any, e: any, t: any, n: any, i: any): any {
  if (!(e as any).editable) return;
  const r: any = ((te as any).getState as any)((e as any).state);
  if (r && !(r as any).dragging) {
    const s: any = (Lu as any)((t as any).target);
    let o: any = -1;
    if (s) {
      const {
        left: l,
        right: a
      }: any = ((s as any).getBoundingClientRect as any)();
      (((t as any).clientX as any) - (l as any) as any) <= (n as any) ? o = (hi as any)(e, t, "left", n) : ((a as any) - ((t as any).clientX as any) as any) <= (n as any) && (o = (hi as any)(e, t, "right", n));
    }
    if ((o as any) != ((r as any).activeHandle as any)) {
      if (!i && (o as any) !== (-1 as any)) {
        const l: any = ((((e as any).state as any).doc as any).resolve as any)(o),
          a: any = ((l as any).node as any)(-1),
          u: any = ((P as any).get as any)(a),
          c: any = ((l as any).start as any)(-1);
        if ((((((u as any).colCount as any)(((l as any).pos as any) - (c as any)) as any) + ((((l as any).nodeAfter as any).attrs as any).colspan as any) as any) - (1 as any) as any) == (((u as any).width as any) - (1 as any) as any)) return;
      }
      (es as any)(e, o);
    }
  }
}
function Au(this: any, e: any): any {
  if (!(e as any).editable) return;
  const t: any = ((te as any).getState as any)((e as any).state);
  t && ((t as any).activeHandle as any) > (-1 as any) && !(t as any).dragging && (es as any)(e, -1);
}
function Nu(this: any, e: any, t: any, n: any, i: any): any {
  var r: any;
  if (!(e as any).editable) return !1;
  const s: any = ((r = (((e as any).dom as any).ownerDocument as any).defaultView) as any) !== (null as any) && (r as any) !== (void 0 as any) ? r : window,
    o: any = ((te as any).getState as any)((e as any).state);
  if (!o || ((o as any).activeHandle as any) == (-1 as any) || (o as any).dragging) return !1;
  const l: any = ((((e as any).state as any).doc as any).nodeAt as any)((o as any).activeHandle),
    a: any = (Iu as any)(e, (o as any).activeHandle, (l as any).attrs);
  ((e as any).dispatch as any)(((((e as any).state as any).tr as any).setMeta as any)(te, {
    setDragging: {
      startX: (t as any).clientX,
      startWidth: a
    }
  }));
  function u(this: any, d: any): any {
    ((s as any).removeEventListener as any)("mouseup", u), ((s as any).removeEventListener as any)("mousemove", c);
    const h: any = ((te as any).getState as any)((e as any).state);
    h?.dragging && ((Pu as any)(e, (h as any).activeHandle, (pi as any)((h as any).dragging, d, n)), ((e as any).dispatch as any)(((((e as any).state as any).tr as any).setMeta as any)(te, {
      setDragging: null
    })));
  }
  function c(this: any, d: any): any {
    if (!(d as any).which) return (u as any)(d);
    const h: any = ((te as any).getState as any)((e as any).state);
    if (h && (h as any).dragging) {
      const p: any = (pi as any)((h as any).dragging, d, n);
      (fi as any)(e, (h as any).activeHandle, p, i);
    }
  }
  return (fi as any)(e, (o as any).activeHandle, a, i), ((s as any).addEventListener as any)("mouseup", u), ((s as any).addEventListener as any)("mousemove", c), ((t as any).preventDefault as any)(), !0;
}
function Iu(this: any, e: any, t: any, {
  colspan: n,
  colwidth: i
}: any): any {
  const r: any = i && (i as any)[((i as any).length as any) - (1 as any)];
  if (r) return r;
  const s: any = ((e as any).domAtPos as any)(t);
  let o: any = ((((s as any).node as any).childNodes as any)[(s as any).offset] as any).offsetWidth,
    l: any = n;
  if (i) for (let a: any = 0; (a as any) < (n as any); a++) (i as any)[a] && (o -= (i as any)[a], l--);
  return (o as any) / (l as any);
}
function Lu(this: any, e: any): any {
  for (; e && ((e as any).nodeName as any) != ("TD" as any) && ((e as any).nodeName as any) != ("TH" as any);) e = (e as any).classList && (((e as any).classList as any).contains as any)("ProseMirror") ? null : (e as any).parentNode;
  return e;
}
function hi(this: any, e: any, t: any, n: any, i: any): any {
  const r: any = (n as any) == ("right" as any) ? -i : i,
    s: any = ((e as any).posAtCoords as any)({
      left: ((t as any).clientX as any) + (r as any),
      top: (t as any).clientY
    });
  if (!s) return -1;
  const {
      pos: o
    }: any = s,
    l: any = (Ve as any)(((((e as any).state as any).doc as any).resolve as any)(o));
  if (!l) return -1;
  if ((n as any) == ("right" as any)) return (l as any).pos;
  const a: any = ((P as any).get as any)(((l as any).node as any)(-1)),
    u: any = ((l as any).start as any)(-1),
    c: any = (((a as any).map as any).indexOf as any)(((l as any).pos as any) - (u as any));
  return ((c as any) % ((a as any).width as any) as any) == (0 as any) ? -1 : (u as any) + (((a as any).map as any)[(c as any) - (1 as any)] as any);
}
function pi(this: any, e: any, t: any, n: any): any {
  const i: any = ((t as any).clientX as any) - ((e as any).startX as any);
  return ((Math as any).max as any)(n, ((e as any).startWidth as any) + (i as any));
}
function es(this: any, e: any, t: any): any {
  ((e as any).dispatch as any)(((((e as any).state as any).tr as any).setMeta as any)(te, {
    setHandle: t
  }));
}
function Pu(this: any, e: any, t: any, n: any): any {
  const i: any = ((((e as any).state as any).doc as any).resolve as any)(t),
    r: any = ((i as any).node as any)(-1),
    s: any = ((P as any).get as any)(r),
    o: any = ((i as any).start as any)(-1),
    l: any = ((((s as any).colCount as any)(((i as any).pos as any) - (o as any)) as any) + ((((i as any).nodeAfter as any).attrs as any).colspan as any) as any) - (1 as any),
    a: any = ((e as any).state as any).tr;
  for (let u: any = 0; (u as any) < ((s as any).height as any); u++) {
    const c: any = ((u as any) * ((s as any).width as any) as any) + (l as any);
    if (u && (((s as any).map as any)[c] as any) == (((s as any).map as any)[(c as any) - ((s as any).width as any)] as any)) continue;
    const d: any = ((s as any).map as any)[c],
      h: any = (((r as any).nodeAt as any)(d) as any).attrs,
      p: any = ((h as any).colspan as any) == (1 as any) ? 0 : (l as any) - (((s as any).colCount as any)(d) as any);
    if ((h as any).colwidth && (((h as any).colwidth as any)[p] as any) == (n as any)) continue;
    const f: any = (h as any).colwidth ? (((h as any).colwidth as any).slice as any)() : (qu as any)((h as any).colspan);
    (f as any)[p] = n, ((a as any).setNodeMarkup as any)((o as any) + (d as any), null, {
      ...h,
      colwidth: f
    });
  }
  (a as any).docChanged && ((e as any).dispatch as any)(a);
}
function fi(this: any, e: any, t: any, n: any, i: any): any {
  const r: any = ((((e as any).state as any).doc as any).resolve as any)(t),
    s: any = ((r as any).node as any)(-1),
    o: any = ((r as any).start as any)(-1),
    l: any = ((((((P as any).get as any)(s) as any).colCount as any)(((r as any).pos as any) - (o as any)) as any) + ((((r as any).nodeAfter as any).attrs as any).colspan as any) as any) - (1 as any);
  let a: any = (((e as any).domAtPos as any)(((r as any).start as any)(-1)) as any).node;
  for (; a && ((a as any).nodeName as any) != ("TABLE" as any);) a = (a as any).parentNode;
  a && (tn as any)(s, (a as any).firstChild, a, i, l, n);
}
function qu(this: any, e: any): any {
  return (((Array as any)(e) as any).fill as any)(0);
}
function _u(this: any, e: any, t: any): any {
  const n: any = [],
    i: any = (((e as any).doc as any).resolve as any)(t),
    r: any = ((i as any).node as any)(-1);
  if (!r) return (Ie as any).empty;
  const s: any = ((P as any).get as any)(r),
    o: any = ((i as any).start as any)(-1),
    l: any = ((((s as any).colCount as any)(((i as any).pos as any) - (o as any)) as any) + ((((i as any).nodeAfter as any).attrs as any).colspan as any) as any) - (1 as any);
  for (let u: any = 0; (u as any) < ((s as any).height as any); u++) {
    const c: any = (l as any) + ((u as any) * ((s as any).width as any) as any);
    if (((l as any) == (((s as any).width as any) - (1 as any) as any) || (((s as any).map as any)[c] as any) != (((s as any).map as any)[(c as any) + (1 as any)] as any)) && ((u as any) == (0 as any) || (((s as any).map as any)[c] as any) != (((s as any).map as any)[(c as any) - ((s as any).width as any)] as any))) {
      var a: any;
      const d: any = ((s as any).map as any)[c],
        h: any = (((o as any) + (d as any) as any) + ((((r as any).nodeAt as any)(d) as any).nodeSize as any) as any) - (1 as any),
        p: any = ((document as any).createElement as any)("div");
      (p as any).className = "column-resize-handle", !(((a = ((te as any).getState as any)(e)) as any) === (null as any) || (a as any) === (void 0 as any)) && (a as any).dragging && ((n as any).push as any)(((Q as any).node as any)((o as any) + (d as any), ((o as any) + (d as any) as any) + ((((r as any).nodeAt as any)(d) as any).nodeSize as any), {
        class: "column-resize-dragging"
      })), ((n as any).push as any)(((Q as any).widget as any)(h, p));
    }
  }
  return ((Ie as any).create as any)((e as any).doc, n);
}
function Ou(this: any, {
  allowTableNodeSelection: e = !1
}: any = {}): any {
  return new (ie as any)({
    key: je,
    state: {
      init(): any {
        return null;
      },
      apply(t: any, n: any): any {
        const i: any = ((t as any).getMeta as any)(je);
        if ((i as any) != (null as any)) return (i as any) == (-1 as any) ? null : i;
        if ((n as any) == (null as any) || !(t as any).docChanged) return n;
        const {
          deleted: r,
          pos: s
        }: any = (((t as any).mapping as any).mapResult as any)(n);
        return r ? null : s;
      }
    },
    props: {
      decorations: Ya,
      handleDOMEvents: {
        mousedown: Mu
      },
      createSelectionBetween(t: any): any {
        return (((je as any).getState as any)((t as any).state) as any) != (null as any) ? ((t as any).state as any).selection : null;
      },
      handleTripleClick: Tu,
      handleKeyDown: Cu,
      handlePaste: Ru
    },
    appendTransaction(t: any, n: any, i: any): any {
      return (tu as any)(i, (Zr as any)(i, n), e);
    }
  });
}
var ts: any = ((He as any).create as any)({
    name: "tableCell",
    addOptions(): any {
      return {
        HTMLAttributes: {}
      };
    },
    content: "block+",
    addAttributes(): any {
      return {
        colspan: {
          default: 1
        },
        rowspan: {
          default: 1
        },
        colwidth: {
          default: null,
          parseHTML: (e: any): any => {
            var t: any, n: any;
            const i: any = ((e as any).getAttribute as any)("colwidth"),
              r: any = i ? ((((i as any).split as any)(",") as any).map as any)((s: any): any => (parseInt as any)(s, 10)) : null;
            if (!r) {
              const s: any = ((t = ((e as any).closest as any)("table")) as any) == (null as any) ? void 0 : ((t as any).querySelectorAll as any)("colgroup > col"),
                o: any = ((((Array as any).from as any)((((n = (e as any).parentElement) as any) == (null as any) ? void 0 : (n as any).children) || []) as any).indexOf as any)(e);
              if (o && (o as any) > (-1 as any) && s && (s as any)[o]) {
                const l: any = (((s as any)[o] as any).getAttribute as any)("width");
                return l ? [(parseInt as any)(l, 10)] : null;
              }
            }
            return r;
          }
        }
      };
    },
    tableRole: "cell",
    isolating: !0,
    parseHTML(): any {
      return [{
        tag: "td"
      }];
    },
    renderHTML({
      HTMLAttributes: e
    }: any): any {
      return ["td", (xe as any)(((this as any).options as any).HTMLAttributes, e), 0];
    }
  }),
  ns: any = ((He as any).create as any)({
    name: "tableHeader",
    addOptions(): any {
      return {
        HTMLAttributes: {}
      };
    },
    content: "block+",
    addAttributes(): any {
      return {
        colspan: {
          default: 1
        },
        rowspan: {
          default: 1
        },
        colwidth: {
          default: null,
          parseHTML: (e: any): any => {
            const t: any = ((e as any).getAttribute as any)("colwidth");
            return t ? ((((t as any).split as any)(",") as any).map as any)((i: any): any => (parseInt as any)(i, 10)) : null;
          }
        }
      };
    },
    tableRole: "header_cell",
    isolating: !0,
    parseHTML(): any {
      return [{
        tag: "th"
      }];
    },
    renderHTML({
      HTMLAttributes: e
    }: any): any {
      return ["th", (xe as any)(((this as any).options as any).HTMLAttributes, e), 0];
    }
  }),
  is: any = ((He as any).create as any)({
    name: "tableRow",
    addOptions(): any {
      return {
        HTMLAttributes: {}
      };
    },
    content: "(tableCell | tableHeader)*",
    tableRole: "row",
    parseHTML(): any {
      return [{
        tag: "tr"
      }];
    },
    renderHTML({
      HTMLAttributes: e
    }: any): any {
      return ["tr", (xe as any)(((this as any).options as any).HTMLAttributes, e), 0];
    }
  });
function nn(this: any, e: any, t: any): any {
  return t ? ["width", `${((Math as any).max as any)(t, e)}px`] : ["min-width", `${e}px`];
}
function mi(this: any, e: any, t: any, n: any, i: any, r: any, s: any): any {
  var o: any;
  let l: any = 0,
    a: any = !0,
    u: any = (t as any).firstChild;
  const c: any = (e as any).firstChild;
  if ((c as any) !== (null as any)) for (let h: any = 0, p: any = 0; (h as any) < ((c as any).childCount as any); h += 1) {
    const {
      colspan: f,
      colwidth: g
    }: any = (((c as any).child as any)(h) as any).attrs;
    for (let k: any = 0; (k as any) < (f as any); k += 1, p += 1) {
      const b: any = (r as any) === (p as any) ? s : g && (g as any)[k],
        w: any = b ? `${b}px` : "";
      if (l += b || i, b || (a = !1), u) {
        if ((((u as any).style as any).width as any) !== (w as any)) {
          const [S, T]: any = (nn as any)(i, b);
          (((u as any).style as any).setProperty as any)(S, T);
        }
        u = (u as any).nextSibling;
      } else {
        const S: any = ((document as any).createElement as any)("col"),
          [T, M]: any = (nn as any)(i, b);
        (((S as any).style as any).setProperty as any)(T, M), ((t as any).appendChild as any)(S);
      }
    }
  }
  for (; u;) {
    const h: any = (u as any).nextSibling;
    ((o = (u as any).parentNode) as any) == (null as any) || ((o as any).removeChild as any)(u), u = h;
  }
  const d: any = ((e as any).attrs as any).style && (typeof ((e as any).attrs as any).style as any) == ("string" as any) && ((/\bwidth\s*:/i as any).test as any)(((e as any).attrs as any).style);
  a && !d ? (((n as any).style as any).width = `${l}px`, ((n as any).style as any).minWidth = "") : (((n as any).style as any).width = "", ((n as any).style as any).minWidth = `${l}px`);
}
var Du: any = class {
  declare contentDOM: any;
  declare colgroup: any;
  declare table: any;
  declare dom: any;
  declare cellMinWidth: any;
  declare node: any;
  [key: string]: any;
  constructor(e: any, t: any) {
    (this as any).node = e, (this as any).cellMinWidth = t, (this as any).dom = ((document as any).createElement as any)("div"), ((this as any).dom as any).className = "tableWrapper", (this as any).table = (((this as any).dom as any).appendChild as any)(((document as any).createElement as any)("table")), ((e as any).attrs as any).style && ((((this as any).table as any).style as any).cssText = ((e as any).attrs as any).style), (this as any).colgroup = (((this as any).table as any).appendChild as any)(((document as any).createElement as any)("colgroup")), (mi as any)(e, (this as any).colgroup, (this as any).table, t), (this as any).contentDOM = (((this as any).table as any).appendChild as any)(((document as any).createElement as any)("tbody"));
  }
  update(e: any): any {
    return ((e as any).type as any) !== (((this as any).node as any).type as any) ? !1 : ((this as any).node = e, (mi as any)(e, (this as any).colgroup, (this as any).table, (this as any).cellMinWidth), !0);
  }
  ignoreMutation(e: any): any {
    const t: any = (e as any).target,
      n: any = (((this as any).dom as any).contains as any)(t),
      i: any = (((this as any).contentDOM as any).contains as any)(t);
    return !!(n && !i && (((e as any).type as any) === ("attributes" as any) || ((e as any).type as any) === ("childList" as any) || ((e as any).type as any) === ("characterData" as any)));
  }
};
function Hu(this: any, e: any, t: any, n: any, i: any): any {
  let r: any = 0,
    s: any = !0;
  const o: any = [],
    l: any = (e as any).firstChild;
  if (!l) return {};
  for (let d: any = 0, h: any = 0; (d as any) < ((l as any).childCount as any); d += 1) {
    const {
      colspan: p,
      colwidth: f
    }: any = (((l as any).child as any)(d) as any).attrs;
    for (let g: any = 0; (g as any) < (p as any); g += 1, h += 1) {
      const k: any = (n as any) === (h as any) ? i : f && (f as any)[g];
      r += k || t, k || (s = !1);
      const [b, w]: any = (nn as any)(t, k);
      ((o as any).push as any)(["col", {
        style: `${b}: ${w}`
      }]);
    }
  }
  const a: any = s ? `${r}px` : "",
    u: any = s ? "" : `${r}px`;
  return {
    colgroup: ["colgroup", {}, ...o],
    tableWidth: a,
    tableMinWidth: u
  };
}
function gi(this: any, e: any, t: any): any {
  return ((e as any).createAndFill as any)();
}
function Bu(this: any, e: any): any {
  if (((e as any).cached as any).tableNodeTypes) return ((e as any).cached as any).tableNodeTypes;
  const t: any = {};
  return ((((Object as any).keys as any)((e as any).nodes) as any).forEach as any)((n: any): any => {
    const i: any = ((e as any).nodes as any)[n];
    ((i as any).spec as any).tableRole && ((t as any)[((i as any).spec as any).tableRole] = i);
  }), ((e as any).cached as any).tableNodeTypes = t, t;
}
function Uu(this: any, e: any, t: any, n: any, i: any, r: any): any {
  const s: any = (Bu as any)(e),
    o: any = [],
    l: any = [];
  for (let u: any = 0; (u as any) < (n as any); u += 1) {
    const c: any = (gi as any)((s as any).cell);
    if (c && ((l as any).push as any)(c), i) {
      const d: any = (gi as any)((s as any).header_cell);
      d && ((o as any).push as any)(d);
    }
  }
  const a: any = [];
  for (let u: any = 0; (u as any) < (t as any); u += 1) ((a as any).push as any)((((s as any).row as any).createChecked as any)(null, i && (u as any) === (0 as any) ? o : l));
  return (((s as any).table as any).createChecked as any)(null, a);
}
function Fu(this: any, e: any): any {
  return e instanceof I;
}
var pt: any = ({
    editor: e
  }: any): any => {
    const {
      selection: t
    }: any = (e as any).state;
    if (!(Fu as any)(t)) return !1;
    let n: any = 0;
    const i: any = (uo as any)((((t as any).ranges as any)[0] as any).$from, (s: any): any => (((s as any).type as any).name as any) === ("table" as any));
    return i?.node.descendants((s: any): any => {
      if ((((s as any).type as any).name as any) === ("table" as any)) return !1;
      ((["tableCell", "tableHeader"] as any).includes as any)(((s as any).type as any).name) && (n += 1);
    }), (n as any) === (((t as any).ranges as any).length as any) ? ((((e as any).commands as any).deleteTable as any)(), !0) : !1;
  },
  Wu: string = "";
function Vu(this: any, e: any): any {
  return (((((e || "") as any).replace as any)(/\s+/g, " ") as any).trim as any)();
}
function Ku(this: any, e: any, t: any, n: any = {}): any {
  var i: any;
  const r: any = ((i = (n as any).cellLineSeparator) as any) != (null as any) ? i : Wu;
  if (!e || !(e as any).content || (((e as any).content as any).length as any) === (0 as any)) return "";
  const s: any = [];
  (((e as any).content as any).forEach as any)((f: any): any => {
    const g: any = [];
    (f as any).content && (((f as any).content as any).forEach as any)((k: any): any => {
      let b: any = "";
      (k as any).content && ((Array as any).isArray as any)((k as any).content) && (((k as any).content as any).length as any) > (1 as any) ? b = (((((k as any).content as any).map as any)((M: any): any => ((t as any).renderChildren as any)(M)) as any).join as any)(r) : b = (k as any).content ? ((t as any).renderChildren as any)((k as any).content) : "";
      const w: any = (Vu as any)(b),
        S: any = ((k as any).type as any) === ("tableHeader" as any);
      ((g as any).push as any)({
        text: w,
        isHeader: S
      });
    }), ((s as any).push as any)(g);
  });
  const o: any = ((s as any).reduce as any)((f: any, g: any): any => ((Math as any).max as any)(f, (g as any).length), 0);
  if ((o as any) === (0 as any)) return "";
  const l: any = ((new (Array as any)(o) as any).fill as any)(0);
  ((s as any).forEach as any)((f: any): any => {
    var g: any;
    for (let k: any = 0; (k as any) < (o as any); k += 1) {
      const w: any = (((((g = (f as any)[k]) as any) == (null as any) ? void 0 : (g as any).text) || "") as any).length;
      (w as any) > ((l as any)[k] as any) && ((l as any)[k] = w), ((l as any)[k] as any) < (3 as any) && ((l as any)[k] = 3);
    }
  });
  const a: any = (f: any, g: any): any => (f as any) + (((" " as any).repeat as any)(((Math as any).max as any)(0, (g as any) - ((f as any).length as any))) as any),
    u: any = (s as any)[0],
    c: any = ((u as any).some as any)((f: any): any => (f as any).isHeader);
  let d: any = `
`;
  const h: any = ((((new (Array as any)(o) as any).fill as any)(0) as any).map as any)((f: any, g: any): any => c && (u as any)[g] && ((u as any)[g] as any).text || "");
  return d += `| ${((((h as any).map as any)((f: any, g: any): any => (a as any)(f, (l as any)[g])) as any).join as any)(" | ")} |
`, d += `| ${((((l as any).map as any)((f: any): any => (("-" as any).repeat as any)(((Math as any).max as any)(3, f))) as any).join as any)(" | ")} |
`, (((c ? ((s as any).slice as any)(1) : s) as any).forEach as any)((f: any): any => {
    d += `| ${((((((new (Array as any)(o) as any).fill as any)(0) as any).map as any)((g: any, k: any): any => (a as any)((f as any)[k] && ((f as any)[k] as any).text || "", (l as any)[k])) as any).join as any)(" | ")} |
`;
  }), d;
}
var Xu: any = Ku,
  rs: any = ((He as any).create as any)({
    name: "table",
    addOptions(): any {
      return {
        HTMLAttributes: {},
        resizable: !1,
        renderWrapper: !1,
        handleWidth: 5,
        cellMinWidth: 25,
        View: Du,
        lastColumnResizable: !0,
        allowTableNodeSelection: !1
      };
    },
    content: "tableRow+",
    tableRole: "table",
    isolating: !0,
    group: "block",
    parseHTML(): any {
      return [{
        tag: "table"
      }];
    },
    renderHTML({
      node: e,
      HTMLAttributes: t
    }: any): any {
      const {
          colgroup: n,
          tableWidth: i,
          tableMinWidth: r
        }: any = (Hu as any)(e, ((this as any).options as any).cellMinWidth),
        s: any = (t as any).style;
      function o(this: any): any {
        return s || (i ? `width: ${i}` : `min-width: ${r}`);
      }
      const l: any = ["table", (xe as any)(((this as any).options as any).HTMLAttributes, t, {
        style: (o as any)()
      }), n, ["tbody", 0]];
      return ((this as any).options as any).renderWrapper ? ["div", {
        class: "tableWrapper"
      }, l] : l;
    },
    parseMarkdown: (e: any, t: any): any => {
      const n: any = [];
      if ((e as any).header) {
        const i: any = [];
        (((e as any).header as any).forEach as any)((r: any): any => {
          ((i as any).push as any)(((t as any).createNode as any)("tableHeader", {}, [{
            type: "paragraph",
            content: ((t as any).parseInline as any)((r as any).tokens)
          }]));
        }), ((n as any).push as any)(((t as any).createNode as any)("tableRow", {}, i));
      }
      return (e as any).rows && (((e as any).rows as any).forEach as any)((i: any): any => {
        const r: any = [];
        ((i as any).forEach as any)((s: any): any => {
          ((r as any).push as any)(((t as any).createNode as any)("tableCell", {}, [{
            type: "paragraph",
            content: ((t as any).parseInline as any)((s as any).tokens)
          }]));
        }), ((n as any).push as any)(((t as any).createNode as any)("tableRow", {}, r));
      }), ((t as any).createNode as any)("table", void 0, n);
    },
    renderMarkdown: (e: any, t: any): any => (Xu as any)(e, t),
    addCommands(): any {
      return {
        insertTable: ({
          rows: e = 3,
          cols: t = 3,
          withHeaderRow: n = !0
        }: any = {}): any => ({
          tr: i,
          dispatch: r,
          editor: s
        }: any): any => {
          const o: any = (Uu as any)((s as any).schema, e, t, n);
          if (r) {
            const l: any = (((i as any).selection as any).from as any) + (1 as any);
            ((((((i as any).replaceSelectionWith as any)(o) as any).scrollIntoView as any)() as any).setSelection as any)(((H as any).near as any)((((i as any).doc as any).resolve as any)(l)));
          }
          return !0;
        },
        addColumnBefore: (): any => ({
          state: e,
          dispatch: t
        }: any): any => (ru as any)(e, t),
        addColumnAfter: (): any => ({
          state: e,
          dispatch: t
        }: any): any => (su as any)(e, t),
        deleteColumn: (): any => ({
          state: e,
          dispatch: t
        }: any): any => (lu as any)(e, t),
        addRowBefore: (): any => ({
          state: e,
          dispatch: t
        }: any): any => (uu as any)(e, t),
        addRowAfter: (): any => ({
          state: e,
          dispatch: t
        }: any): any => (cu as any)(e, t),
        deleteRow: (): any => ({
          state: e,
          dispatch: t
        }: any): any => (hu as any)(e, t),
        deleteTable: (): any => ({
          state: e,
          dispatch: t
        }: any): any => (yu as any)(e, t),
        mergeCells: (): any => ({
          state: e,
          dispatch: t
        }: any): any => (ri as any)(e, t),
        splitCell: (): any => ({
          state: e,
          dispatch: t
        }: any): any => (si as any)(e, t),
        toggleHeaderColumn: (): any => ({
          state: e,
          dispatch: t
        }: any): any => ((et as any)("column") as any)(e, t),
        toggleHeaderRow: (): any => ({
          state: e,
          dispatch: t
        }: any): any => ((et as any)("row") as any)(e, t),
        toggleHeaderCell: (): any => ({
          state: e,
          dispatch: t
        }: any): any => (ku as any)(e, t),
        mergeOrSplit: (): any => ({
          state: e,
          dispatch: t
        }: any): any => (ri as any)(e, t) ? !0 : (si as any)(e, t),
        setCellAttribute: (e: any, t: any): any => ({
          state: n,
          dispatch: i
        }: any): any => ((mu as any)(e, t) as any)(n, i),
        goToNextCell: (): any => ({
          state: e,
          dispatch: t
        }: any): any => ((li as any)(1) as any)(e, t),
        goToPreviousCell: (): any => ({
          state: e,
          dispatch: t
        }: any): any => ((li as any)(-1) as any)(e, t),
        fixTables: (): any => ({
          state: e,
          dispatch: t
        }: any): any => (t && (Zr as any)(e), !0),
        setCellSelection: (e: any): any => ({
          tr: t,
          dispatch: n
        }: any): any => {
          if (n) {
            const i: any = ((I as any).create as any)((t as any).doc, (e as any).anchorCell, (e as any).headCell);
            ((t as any).setSelection as any)(i);
          }
          return !0;
        }
      };
    },
    addKeyboardShortcuts(): any {
      return {
        Tab: (): any => ((((this as any).editor as any).commands as any).goToNextCell as any)() ? !0 : (((((this as any).editor as any).can as any)() as any).addRowAfter as any)() ? (((((((((this as any).editor as any).chain as any)() as any).addRowAfter as any)() as any).goToNextCell as any)() as any).run as any)() : !1,
        "Shift-Tab": (): any => ((((this as any).editor as any).commands as any).goToPreviousCell as any)(),
        Backspace: pt,
        "Mod-Backspace": pt,
        Delete: pt,
        "Mod-Delete": pt
      };
    },
    addProseMirrorPlugins(): any {
      return [...(((this as any).options as any).resizable && ((this as any).editor as any).isEditable ? [($u as any)({
        handleWidth: ((this as any).options as any).handleWidth,
        cellMinWidth: ((this as any).options as any).cellMinWidth,
        defaultCellMinWidth: ((this as any).options as any).cellMinWidth,
        View: ((this as any).options as any).View,
        lastColumnResizable: ((this as any).options as any).lastColumnResizable
      })] : []), (Ou as any)({
        allowTableNodeSelection: ((this as any).options as any).allowTableNodeSelection
      })];
    },
    extendNodeSchema(e: any): any {
      const t: any = {
        name: (e as any).name,
        options: (e as any).options,
        storage: (e as any).storage
      };
      return {
        tableRole: (ao as any)((Fe as any)(e, "tableRole", t))
      };
    }
  });
((ne as any).create as any)({
  name: "tableKit",
  addExtensions(): any {
    const e: any = [];
    return (((this as any).options as any).table as any) !== (!1 as any) && ((e as any).push as any)(((rs as any).configure as any)(((this as any).options as any).table)), (((this as any).options as any).tableCell as any) !== (!1 as any) && ((e as any).push as any)(((ts as any).configure as any)(((this as any).options as any).tableCell)), (((this as any).options as any).tableHeader as any) !== (!1 as any) && ((e as any).push as any)(((ns as any).configure as any)(((this as any).options as any).tableHeader)), (((this as any).options as any).tableRow as any) !== (!1 as any) && ((e as any).push as any)(((is as any).configure as any)(((this as any).options as any).tableRow)), e;
  }
});
const Gu: string = "data-rte-numeric",
  ki: any = (String as any).raw`[+\-\u2212\u00b1~\u2248<>\u2264\u2265]?[$\u20ac\u00a3\u00a5\u20b9]?\d(?:[\d,.\s]*\d)?\s?(?:%|pp|pts?|bps|[kmbt]|bn|x|\u00d7|ms|s|h|[kmgt]b)?`,
  bi: any = (String as any).raw`${ki}(?:(?:\s/\s|\s?[\u2013\u2014]\s?|-|\sto\s)${ki})?`,
  Zu: any = new (RegExp as any)((String as any).raw`^(?:${bi}|\(${bi}\))$`, "i"),
  Qu: any = /^(?:|[-\u2013\u2014]|n\/?a)$/i;
function Yu(this: any, e: any): any {
  return ((Zu as any).test as any)(((e as any).trim as any)());
}
function Ju(this: any, e: any, t: any): any {
  const n: any = [],
    i: any = new (Map as any)(),
    r: any = (e as any).firstChild,
    s: any = (r as any) != (null as any) && ((r as any).childCount as any) > (0 as any) && ((r as any).firstChild?.type.spec.tableRole as any) === ("header_cell" as any),
    o: any = ((P as any).get as any)(e);
  for (const l of new (Set as any)((o as any).map)) {
    const a: any = ((e as any).nodeAt as any)(l),
      u: any = a?.type.spec.tableRole;
    if ((a as any) == (null as any) || (u as any) !== ("cell" as any) && (u as any) !== ("header_cell" as any)) continue;
    const c: any = ((o as any).findCell as any)(l);
    if (((c as any).left as any) === (0 as any)) continue;
    const d: any = ((t as any) + (1 as any) as any) + (l as any);
    ((n as any).push as any)({
      column: (c as any).left,
      from: d,
      to: (d as any) + ((a as any).nodeSize as any)
    });
    const h: any = (((a as any).textContent as any).trim as any)();
    if (!(s && ((c as any).top as any) === (0 as any)) && !((Qu as any).test as any)(h) && (((c as any).right as any) - ((c as any).left as any) as any) === (1 as any)) {
      const f: any = (Yu as any)(h);
      ((i as any).set as any)((c as any).left, (((i as any).get as any)((c as any).left) ?? !0) && f);
    }
  }
  return ((((n as any).filter as any)((l: any): any => (((i as any).get as any)((l as any).column) as any) === (!0 as any)) as any).map as any)((l: any): any => ((Q as any).node as any)((l as any).from, (l as any).to, {
    [Gu]: ""
  }));
}
function yi(this: any, e: any): any {
  const t: any = [];
  return ((e as any).descendants as any)((n: any, i: any): any => ((((n as any).type as any).spec as any).tableRole as any) === ("table" as any) ? (((t as any).push as any)(...(Ju as any)(n, i)), !1) : !(n as any).isTextblock), ((Ie as any).create as any)(e, t);
}
const wi: any = new (le as any)("tableNumericColumns"),
  ec: any = ((ne as any).create as any)({
    name: "tableNumericColumns",
    addProseMirrorPlugins(): any {
      return [new (ie as any)({
        key: wi,
        state: {
          init: (e: any, t: any): any => (yi as any)((t as any).doc),
          apply: (e: any, t: any): any => (e as any).docChanged ? (yi as any)((e as any).doc) : t
        },
        props: {
          decorations: (e: any): any => ((wi as any).getState as any)(e)
        }
      })];
    }
  });
function ss(this: any, e: any = {}): any {
  (ss as any).d = 304674990;
  const {
    resizable: t = !0,
    cellMinWidth: n = 50,
    renderWrapper: i = !1
  }: any = e;
  return {
    name: "table",
    extensions: [((rs as any).configure as any)({
      resizable: t,
      cellMinWidth: n,
      renderWrapper: i
    }), is, ts, ns, ec]
  };
}
const ft: any = {
    base: {
      kVAEAm: "ui-1n2onr6",
      kzqmXN: "ui-h8yej3",
      kMwMTN: "ui-1wd3ewq",
      "--rte-font-size-base": "ui-1w1eso6",
      "--rte-line-height-base": "ui-hdtk5b",
      "--rte-font-size-h1": "ui-1bhc0ou",
      "--rte-font-size-h2": "ui-1itbsr7",
      "--rte-font-size-h3": "ui-ghy081",
      "--rte-font-size-h4": "ui-hqdr8q",
      "--rte-font-size-h5": "ui-1ty28fo",
      "--rte-font-size-h6": "ui-1w5m0s8",
      "--rte-line-height-h1": "ui-oadu56",
      "--rte-line-height-h2": "ui-1o021r9",
      "--rte-line-height-h3": "ui-mcpvhx",
      "--rte-line-height-h4": "ui-js6t6n",
      "--rte-line-height-h5": "ui-jiowi",
      "--rte-line-height-h6": "ui-6aacbi",
      "--rte-font-size-code": "ui-a990yz",
      "--rte-font-size-code-block": "ui-9jqggs",
      "--rte-font-size-list-item": "ui-jiawnd",
      "--rte-line-height-list-item": "ui-w9ju1b",
      "--rte-list-margin-top": "ui-m7v9km",
      "--rte-list-item-margin-top": "ui-115xbxj",
      "--rte-list-item-margin-bottom": "ui-1g9yf9w",
      "--rte-paragraph-margin-bottom": "ui-eolgjz",
      "--rte-heading-font-weight": "ui-secn4v",
      "--rte-heading-color": "ui-aano1t",
      "--rte-subheading-color": "ui-1utlljm",
      "--rte-heading-margin-top-h1": "ui-86qoyq",
      "--rte-heading-margin-top-h2": "ui-1ef30xd",
      "--rte-heading-margin-top-h3": "ui-19agh20",
      "--rte-heading-margin-bottom": "ui-ihklm6",
      "--rte-h1-margin-bottom": "ui-1vzrd2y",
      "--rte-h1-letter-spacing": "ui-1ynt2lg",
      "--rte-dek-color": "ui-fp8i22",
      "--rte-dek-margin-bottom": "ui-16amqy3",
      "--rte-h2-letter-spacing": "ui-t1zvuz",
      "--rte-caption-font-size": "ui-micdo5",
      "--rte-caption-line-height": "ui-114c9xy",
      "--rte-caption-font-style": "ui-1u9jekc",
      "--rte-caption-color": "ui-h58vv2",
      "--rte-caption-margin-top": "ui-1dnqxze",
      "--rte-caption-margin-bottom": "ui-1owbbwr",
      "--rte-paragraph-to-block-margin-bottom": "ui-13sfjiy",
      "--rte-strong-font-weight": "ui-t7ww7l",
      "--rte-callout-lead-display": "ui-y440ki",
      "--rte-callout-lead-margin-bottom": "ui-5ofy61",
      "--rte-callout-lead-font-weight": "ui-1xrre0a",
      "--rte-callout-lead-gap-size": "ui-4tgpn6",
      "--rte-code-bg": "ui-fx8zqq",
      "--rte-code-radius": "ui-11iepba",
      "--rte-code-block-bg": "ui-1iuntum",
      "--rte-code-block-radius": "ui-1wg8ft5",
      "--rte-code-block-padding-block": "ui-rj2lrc",
      "--rte-code-block-padding-inline": "ui-l1l1yq",
      "--rte-code-block-margin": "ui-1nkw7mo",
      "--rte-blockquote-border-width": "ui-zvlj3r",
      "--rte-blockquote-border-color": "ui-bugxvm",
      "--rte-blockquote-bg": "ui-i596jy",
      "--rte-blockquote-radius": "ui-os6aul",
      "--rte-blockquote-padding-block": "ui-zsoaqv",
      "--rte-blockquote-padding-inline-start": "ui-oq8b5x",
      "--rte-blockquote-padding-inline-end": "ui-nqvpji",
      "--rte-blockquote-margin": "ui-yk64rs",
      "--rte-blockquote-margin-bottom": "ui-74o8tj",
      "--rte-blockquote-color": "ui-o0f14h",
      "--rte-hr-border-width": "ui-1lo978e",
      "--rte-hr-color": "ui-8ag93u",
      "--rte-hr-margin": "ui-1y1w0ad",
      "--rte-link-color": "ui-13eaeiu",
      "--rte-list-marker-color": "ui-1q732sw",
      "--rte-list-margin-bottom": "ui-5m3s1m",
      "--rte-list-padding-left": "ui-a4b4tv",
      "--rte-list-item-display": "ui-n5gxq7",
      "--rte-list-item-position": "ui-1icvv4u",
      "--rte-ul-marker-column": "ui-il564y",
      "--rte-ol-marker-column": "ui-u0m67",
      "--rte-ul-marker-content": "ui-1c63q9d",
      "--rte-ol-marker-content": "ui-175l5xb",
      "--rte-task-item-margin-top": "ui-5flpja",
      "--rte-task-item-padding-block": "ui-1ilzhr1",
      "--rte-task-item-gap": "ui-1sucfu2",
      "--rte-task-item-checkbox-column": "ui-1h1p6z5",
      "--rte-task-item-checked-color": "ui-arbqz2",
      "--rte-task-item-checked-text-decoration": "ui-gd0odc",
      "--rte-data-fence-margin-top": "ui-1c3x331",
      "--rte-data-fence-margin-bottom": "ui-9j3a8e",
      "--rte-table-margin-top": "ui-hojr4r",
      "--rte-table-margin-bottom": "ui-uc0rgs",
      "--rte-table-outer-border-width": "ui-1hgq0r",
      "--rte-table-cell-border-width": "ui-1ut2v2h",
      "--rte-table-cell-vertical-border-width": "ui-181wqoi",
      "--rte-table-border-color": "ui-1cnuk1o",
      "--rte-table-radius": "ui-43jacm",
      "--rte-table-cell-padding-block": "ui-1afcu91",
      "--rte-table-cell-padding-inline": "ui-i8lvfr",
      "--rte-table-cell-font-size": "ui-wtkfda",
      "--rte-table-cell-line-height": "ui-de6g7v",
      "--rte-table-cell-letter-spacing": "ui-d3x60f",
      "--rte-table-column-gap": "ui-1d26jgk",
      "--rte-table-label-column-width": "ui-15a32gx",
      "--rte-image-figure-display": "ui-mgkg8f",
      "--rte-image-width": "ui-1pwnziq",
      "--rte-image-fill": "ui-1wrewk2",
      "--rte-image-min-height": "ui-14lhgn4",
      "--rte-image-margin-block": "ui-10xyeyr",
      "--rte-image-radius": "ui-1bbfqq2",
      "--rte-image-aspect-ratio": "ui-1b6nzlw",
      "--rte-image-object-fit": "ui-prekti",
      "--rte-image-frame-shadow": "ui-1n6jre5",
      "--rte-image-paragraph-margin-bottom": "ui-167ma64",
      "--rte-image-paragraph-line-height": "ui-1a9wa2g",
      "--rte-image-separator-vertical-align": "ui-1oj09w1",
      "--rte-image-caption-display": "ui-andcla",
      "--rte-image-caption-color": "ui-1o0v34y",
      "--rte-image-caption-font-size": "ui-13w9d6",
      "--rte-image-caption-line-height": "ui-96vum1",
      "--rte-table-header-font-size": "ui-daq3i0",
      "--rte-table-header-line-height": "ui-18cuoxq",
      "--rte-table-header-letter-spacing": "ui-lfrx58",
      "--rte-table-header-font-weight": "ui-fxk72w",
      "--rte-table-header-color": "ui-e7kcba",
      "--rte-table-header-padding-block-start": "ui-1ibqvf5",
      "--rte-table-header-padding-block-end": "ui-1tj71g4",
      "--rte-table-first-column-color": "ui-nfjlw0",
      "--rte-table-cell-text-align": "ui-1oqava2",
      "--rte-table-first-column-text-align": "ui-poseew",
      "--rte-table-cell-font-variant-numeric": "ui-rm9j8t",
      "--rte-table-first-column-font-variant-numeric": "ui-rpekxg",
      kGuDYH: "ui-z96sre",
      kLWn49: "ui-1g1ztsh",
      $$css: !0
    },
    document: {
      "--rte-font-size-base": "ui-1w1eso6",
      "--rte-line-height-base": "ui-jp5p2m",
      $$css: !0
    },
    page: {
      "--rte-page-ink": "ui-1nd5qc0",
      "--rte-page-ink-secondary": "ui-er3cwv",
      "--rte-page-ink-tertiary": "ui-1hiq0dx",
      "--rte-page-hairline-subtle": "ui-4luwr2",
      "--rte-page-hairline": "ui-notllf",
      "--rte-page-fill": "ui-ehyebp",
      "--rte-font-size-base": "ui-xoki1e",
      "--rte-line-height-base": "ui-uh81vb",
      "--rte-font-size-h1": "ui-9o62l8",
      "--rte-line-height-h1": "ui-4ec5g1",
      "--rte-font-size-h2": "ui-1it3add",
      "--rte-line-height-h2": "ui-f9fkpd",
      "--rte-font-size-h3": "ui-1e7hzsh",
      "--rte-line-height-h3": "ui-xwek16",
      "--rte-font-size-h4": "ui-1u9jk7k",
      "--rte-line-height-h4": "ui-s5u5mb",
      "--rte-font-size-h5": "ui-a72smn",
      "--rte-line-height-h5": "ui-1v56h6h",
      "--rte-font-size-h6": "ui-rua3fw",
      "--rte-line-height-h6": "ui-k6f3y2",
      "--rte-heading-font-weight": "ui-90lhti",
      "--rte-heading-color": "ui-miwrei",
      "--rte-subheading-color": "ui-1go9j9f",
      "--rte-heading-margin-top-h1": "ui-xoj6fx",
      "--rte-heading-margin-top-h2": "ui-h0m0mz",
      "--rte-heading-margin-top-h3": "ui-1dcukmu",
      "--rte-heading-margin-bottom": "ui-15n0dht",
      "--rte-h1-margin-bottom": "ui-1dklggc",
      "--rte-h1-letter-spacing": "ui-h6bh75",
      "--rte-dek-color": "ui-1yj82vd",
      "--rte-dek-margin-bottom": "ui-1olox22",
      "--rte-h2-letter-spacing": "ui-qinbmi",
      "--rte-caption-font-size": "ui-1m2wgk4",
      "--rte-caption-line-height": "ui-lunu71",
      "--rte-caption-font-style": "ui-1dju7vn",
      "--rte-caption-color": "ui-1t24zqm",
      "--rte-caption-margin-top": "ui-1kmr24k",
      "--rte-caption-margin-bottom": "ui-9orbcj",
      "--rte-paragraph-to-block-margin-bottom": "ui-1y7qui0",
      "--rte-strong-font-weight": "ui-13j1nn4",
      "--rte-callout-lead-display": "ui-1m7xdus",
      "--rte-callout-lead-margin-bottom": "ui-1r46yu3",
      "--rte-callout-lead-font-weight": "ui-11xmo9t",
      "--rte-callout-lead-gap-size": "ui-16a72ag",
      "--rte-paragraph-margin-bottom": "ui-szjysd",
      "--rte-list-margin-top": "ui-46aqmn",
      "--rte-list-margin-bottom": "ui-44dbwb",
      "--rte-list-padding-left": "ui-1t77zs0",
      "--rte-list-item-display": "ui-1kh9ti8",
      "--rte-list-item-position": "ui-c8m3vh",
      "--rte-ul-marker-column": "ui-1sundbr",
      "--rte-ol-marker-column": "ui-1vp5yuk",
      "--rte-ul-marker-content": "ui-9nib8z",
      "--rte-ol-marker-content": "ui-ywm0sn",
      "--rte-list-item-margin-top": "ui-8dcys4",
      "--rte-list-item-margin-bottom": "ui-t3ep11",
      "--rte-list-marker-color": "ui-85jcvo",
      "--rte-task-item-margin-top": "ui-1j1xxy1",
      "--rte-task-item-padding-block": "ui-ycdf97",
      "--rte-task-item-gap": "ui-1xcrnkf",
      "--rte-task-item-checkbox-column": "ui-1s7rhee",
      "--rte-task-item-checked-color": "ui-44bj9e",
      "--rte-task-item-checked-text-decoration": "ui-hz1jhl",
      "--rte-data-fence-margin-top": "ui-1mnuld3",
      "--rte-data-fence-margin-bottom": "ui-1i3l2l8",
      "--rte-font-size-code": "ui-tvp03r",
      "--rte-font-size-code-block": "ui-bgjpk3",
      "--rte-code-bg": "ui-xyzy00",
      "--rte-code-radius": "ui-jvvp5r",
      "--rte-code-block-bg": "ui-s2e1sb",
      "--rte-code-block-radius": "ui-1yugq4q",
      "--rte-code-block-padding-block": "ui-o32sjy",
      "--rte-code-block-padding-inline": "ui-armm2d",
      "--rte-code-block-margin": "ui-13f5t8o",
      "--rte-blockquote-border-width": "ui-1paeolz",
      "--rte-blockquote-border-color": "ui-fyg15c",
      "--rte-blockquote-bg": "ui-1cc5uww",
      "--rte-blockquote-radius": "ui-1w96v1h",
      "--rte-blockquote-padding-block": "ui-15mkb9p",
      "--rte-blockquote-padding-inline-start": "ui-1tg0bah",
      "--rte-blockquote-padding-inline-end": "ui-1e9v866",
      "--rte-blockquote-margin": "ui-191gqlz",
      "--rte-blockquote-margin-bottom": "ui-n6tr",
      "--rte-blockquote-color": "ui-1c0666n",
      "--rte-hr-border-width": "ui-mrv2xs",
      "--rte-hr-color": "ui-jwtf52",
      "--rte-hr-margin": "ui-bywelc",
      "--rte-link-color": "ui-jia67t",
      "--rte-table-outer-border-width": "ui-1dp8xng",
      "--rte-table-cell-border-width": "ui-6m6cud",
      "--rte-table-cell-vertical-border-width": "ui-1493hrl",
      "--rte-table-border-color": "ui-1qbci49",
      "--rte-table-radius": "ui-2sloxf",
      "--rte-table-margin-top": "ui-1gc588t",
      "--rte-table-margin-bottom": "ui-k641w4",
      "--rte-table-cell-padding-block": "ui-1xsydit",
      "--rte-table-cell-padding-inline": "ui-e21f03",
      "--rte-table-cell-font-size": "ui-y3anil",
      "--rte-table-cell-line-height": "ui-jwu0v8",
      "--rte-table-cell-letter-spacing": "ui-dvxd9s",
      "--rte-table-column-gap": "ui-jk15aw",
      "--rte-table-label-column-width": "ui-1yg80d0",
      "--rte-table-header-font-size": "ui-1vsrzq1",
      "--rte-table-header-line-height": "ui-1y8apo3",
      "--rte-table-header-letter-spacing": "ui-1tsb33c",
      "--rte-table-header-font-weight": "ui-zmfzyj",
      "--rte-table-header-color": "ui-rprin5",
      "--rte-table-header-padding-block-start": "ui-y2ot5c",
      "--rte-table-header-padding-block-end": "ui-kdb36f",
      "--rte-table-first-column-color": "ui-1afjhil",
      "--rte-table-cell-text-align": "ui-ywnu60",
      "--rte-table-first-column-text-align": "ui-10kyqg3",
      "--rte-table-cell-font-variant-numeric": "ui-2j0v7k",
      "--rte-table-first-column-font-variant-numeric": "ui-2px16u",
      "--rte-table-numeric-cell-text-align": "ui-l7ulcp",
      "--rte-table-numeric-cell-font-variant-numeric": "ui-n11zpz",
      "--rte-image-figure-display": "ui-1e0sypj",
      "--rte-image-width": "ui-11j95a9",
      "--rte-image-fill": "ui-1lqfm5v",
      "--rte-image-min-height": "ui-1ma1xnv",
      "--rte-image-margin-block": "ui-10xyeyr",
      "--rte-image-radius": "ui-1jucy67",
      "--rte-image-aspect-ratio": "ui-1gw0dyu",
      "--rte-image-object-fit": "ui-15t5xgf",
      "--rte-image-frame-shadow": "ui-hopxl2",
      "--rte-image-paragraph-margin-bottom": "ui-vpbntd",
      "--rte-image-paragraph-line-height": "ui-djlhf2",
      "--rte-image-separator-vertical-align": "ui-1dr81jg",
      "--rte-image-caption-display": "ui-jr49e8",
      "--rte-image-caption-color": "ui-1p7qbwu",
      "--rte-image-caption-font-size": "ui-anfazv",
      "--rte-image-caption-line-height": "ui-130kr6z",
      kMv6JI: "ui-d2maka",
      kb6lSQ: "ui-12oo3zp",
      k3NDMp: "ui-1ry4ofp",
      k1RR6C: "ui-gtyy3a",
      kAjhW9: "ui-vdzlec",
      kJfPWh: "ui-1bpp6ep",
      kwBpgL: "ui-y2nyxj",
      kecawK: "ui-125bw76",
      k2esvM: "ui-13gwbee",
      kHKRhl: "ui-1w8d87i",
      k8PhF9: "ui-uh5cre",
      kWlo99: "ui-1qmrrlw",
      kkItTo: "ui-lqyfh6",
      k5j1gm: "ui-1kr9hjl",
      kePOt9: "ui-1jef3yv",
      kiRfyW: "ui-13wn1ou",
      k8tS1V: "ui-leqez2",
      k9AS6a: "ui-kk8g2n",
      kHOEBO: "ui-w8v8xe",
      kqPU8G: "ui-528nkn",
      kyG5zt: "ui-12eb4fp",
      k6H72Y: "ui-ujx92o",
      kFB87B: "ui-1a5drbi",
      kN15MO: "ui-1l5shbw",
      $$css: !0
    },
    nonInteractive: {
      kkrTdU: "ui-t0e3qv",
      krczoA: "ui-1h83hj0",
      $$css: !0
    }
  },
  tc: any = {
    base: {
      kVAEAm: "ui-1n2onr6",
      kAzted: "ui-1xaadd7",
      kfSwDN: "ui-1hx0egp",
      kO7zv1: "ui-1rh3ycu",
      kVeWk8: "ui-1r93fqe",
      kLApEV: "ui-5tzr1x",
      ktt3ro: "ui-gvrez4",
      kpHEKb: "ui-kqkpty",
      kXCwPK: "ui-1d4ixsa",
      kQFoCL: "ui-18r89ij",
      kWgWch: "ui-1r55cr4",
      kf0CGi: "ui-mtx1lz",
      kil9wj: "ui-ostxn8",
      kp6Lxb: "ui-btkxa0",
      kDC0T2: "ui-5le2uw",
      kPgPuk: "ui-smcoow",
      kvM5tR: "ui-yckse1",
      kxbImd: "ui-14p742m",
      klRsSg: "ui-1wcq1u3",
      kOawZI: "ui-qm7f3l",
      kO9ttH: "ui-163ow5f",
      kFpTCV: "ui-9u4ceu",
      kmFXOs: "ui-2tpvjn",
      kSHc1H: "ui-x1jmxi",
      kTlv8Q: "ui-11yyi96",
      kMxHJu: "ui-ige6cy",
      kyy6iT: "ui-1y2j9yk",
      kYqbTH: "ui-qnfad",
      kF27cf: "ui-cou92t",
      khbeC: "ui-4iwnk7",
      ku3dej: "ui-1fkpc3v",
      kE2ud3: "ui-1qhqs7u",
      kmQpsa: "ui-ovlsqe",
      kxxBj0: "ui-9hbfot",
      kugjHy: "ui-1lvjfxx",
      kDiz93: "ui-pvczvn",
      kO0ygU: "ui-1u2ijzh",
      kEtJo1: "ui-pyqudn",
      kYCPxb: "ui-1kpws8s",
      kQLu0w: "ui-1v2ojf8",
      kZuvrB: "ui-1r1c2s1",
      ku34GP: "ui-u7lt4f",
      kDUgZ6: "ui-3hodj6",
      kWuGdX: "ui-1g59prk",
      kZ593g: "ui-m3dk90",
      kBemBT: "ui-1pki70a",
      k9EcxL: "ui-hdsbvp",
      kO2PpL: "ui-1ewaork",
      k9mdrT: "ui-1794u5q",
      kvE2Xz: "ui-7a4fex",
      kSKvQ4: "ui-4ezs9n",
      kfnnIQ: "ui-1mmfas",
      k74MV0: "ui-6mlfom",
      kbD7vp: "ui-1uah6o5",
      kGkPSh: "ui-1ysv2p4",
      kW0Jit: "ui-1xmj4q4",
      kFxSP6: "ui-b5qn3k",
      k8grnK: "ui-jre6g5",
      k4VRqg: "ui-1hhr5vn",
      kLUM6h: "ui-2mr0ar",
      kIVUAW: "ui-150t8v1",
      kGJB9h: "ui-zl6jo2",
      kZHU9v: "ui-bzfwq1",
      kUhJav: "ui-vrmnfb",
      k3oLYR: "ui-2k0ckb",
      k3NfZ: "ui-d4bhvz",
      kv9JdX: "ui-lzuolk",
      k8vc4C: "ui-g8wmm6",
      kJRwwC: "ui-1d57cbc",
      kbR9MY: "ui-1jfqr6z",
      kGeCJK: "ui-67fulm",
      kcqLf0: "ui-1oovvj4",
      k80kcD: "ui-ul7mzx",
      krxs2d: "ui-osr1dx",
      khkCK0: "ui-1fom552",
      kvqdOY: "ui-13jpfy5",
      kl30Zd: "ui-1og4rei",
      kkFpZg: "ui-10seblz",
      k2304h: "ui-kkiy45",
      kXc4A7: "ui-sfl86j",
      k8UYwm: "ui-1bbgc4z",
      kEksT3: "ui-1vuf1dt",
      k5TSCv: "ui-jqrjwb",
      ksnUjR: "ui-csk6ff",
      kWPg5n: "ui-9m9n62",
      k5HjYs: "ui-1ogoj5s",
      kyWvT6: "ui-42v8sf",
      kE2Frl: "ui-775r4b",
      kBxnSn: "ui-37b3g5",
      klNqPQ: "ui-1knlef1",
      ki7dGu: "ui-spaf5t",
      kHsCg1: "ui-16ab2sr",
      kLYOnq: "ui-8s6anh",
      klKkH3: "ui-1mm46sn",
      kVTE87: "ui-s8dlhk",
      k1kCzw: "ui-15w343f",
      k9d0Ky: "ui-1kxyro7",
      kyU8p7: "ui-lwmghi",
      kKZTbw: "ui-a3wqln",
      kWh5E4: "ui-njny09",
      kUz90h: "ui-1ssch16",
      kgSRJD: "ui-1xkur6j",
      kQnBbj: "ui-4or90v",
      kRZBvo: "ui-1m0y9pt",
      kwo0De: "ui-185znoo",
      kQUcRi: "ui-vowotf",
      ksjBOa: "ui-n8azvm",
      kNbRaD: "ui-1ahvc7m",
      k9UNVT: "ui-c2x3rw",
      kdbrXJ: "ui-drt2ws",
      kAMcqz: "ui-1mgjhb6",
      kUQ5jO: "ui-156iz84",
      kCfSEK: "ui-1626in2",
      kzsHTc: "ui-1h6d3sa",
      kCTMlV: "ui-1fkwl3l",
      k8NCZg: "ui-1l90lsa",
      kLtsGx: "ui-1ujwq14",
      kYsVMA: "ui-11tln50",
      kdyMcO: "ui-1zyajp",
      kn4sjs: "ui-ml98jx",
      kGfsWB: "ui-100nfci",
      kRCqyy: "ui-8sip80",
      kXwSpS: "ui-1ww8fh2",
      khlrYn: "ui-1k4e3u1",
      kYikhI: "ui-13u72bs",
      kitoy5: "ui-1tuiv50",
      kAoAzs: "ui-8590b0",
      kN6VYb: "ui-d8de3i",
      kfDItn: "ui-1nw1w8w",
      kohZ1G: "ui-1b55xvl",
      kPJ6cS: "ui-13gvc8r",
      kobuMT: "ui-4bjffg",
      kyIpZr: "ui-ke0cyv",
      kAw1EB: "ui-1frqnko",
      kAIr5N: "ui-156urir",
      k55JdA: "ui-19y6hls",
      knBRRz: "ui-1guqw6e",
      kcmJxs: "ui-60d9gn",
      kQD07F: "ui-pp2bu8",
      k427r7: "ui-1p6nim8",
      kIgK1O: "ui-9x05i0",
      kR9yEz: "ui-1dwrpt1",
      k5puGx: "ui-xtvz8n",
      kwevM7: "ui-spd053",
      kYrE2V: "ui-rghuh5",
      k1As4q: "ui-16nv3k5",
      kHCSnf: "ui-1nuq48n",
      kurM1R: "ui-1l52w94",
      k23Bhe: "ui-11gpycz",
      k9xWfi: "ui-hwycuw",
      k5kNfE: "ui-hug9iy",
      kysUJc: "ui-hody31",
      kR14b1: "ui-6pl2ab",
      kzQpzz: "ui-1h70bg4",
      kKseyN: "ui-1bkdzcx",
      kmijHb: "ui-otcoje",
      kpPYys: "ui-8lc8mh",
      ko9EfY: "ui-vj16oj",
      kKgB4e: "ui-znjbym",
      kzFVOJ: "ui-138hyj9",
      k8MMSr: "ui-18asrg4",
      kVCHq6: "ui-qjb7so",
      kmwtbp: "ui-1676k01",
      kUYSYK: "ui-565zpm",
      klWQFo: "ui-1humd08",
      kEGJQn: "ui-pfuulf",
      kfwnMw: "ui-1yezw1u",
      kNRACG: "ui-1gw6pdl",
      k5pTwd: "ui-1jtrguv",
      knsnsU: "ui-1m9fati",
      kz4enx: "ui-1rpyi6g",
      kJXu95: "ui-1hm90jn",
      kvIBL5: "ui-f1fcr6",
      kV1ziD: "ui-1ah13d9",
      kkalW2: "ui-1puz7zt",
      kdhriH: "ui-2zgjm",
      kSBC6J: "ui-m4rdma",
      kbKlEN: "ui-ca47hx",
      k7tgew: "ui-15a9ofu",
      kW6zHA: "ui-10s85h8",
      kONVdb: "ui-1izoytf",
      kdWeyX: "ui-1wsyhr8",
      k5E9uD: "ui-2iff6s",
      kCqNPo: "ui-12008y7",
      kcuEYb: "ui-zsoyaj",
      kiny5z: "ui-c77zco",
      kvNW0L: "ui-m18qhj",
      kJFUfF: "ui-1jn1bwd",
      kLTITk: "ui-1yuikeu",
      kWGHOp: "ui-1upal0d",
      kScwGe: "ui-93jyqv",
      kptwQY: "ui-ddqfc4",
      kn8cqR: "ui-7lhkba",
      kaRGMr: "ui-16mby7w",
      k7Zl3x: "ui-90mqnz",
      kX9RCE: "ui-meksgl",
      k8KXnz: "ui-dqg4cb",
      kOKGTB: "ui-lgxtzr",
      k4wLmN: "ui-1iesvd0",
      kPAW6h: "ui-c0i4bb",
      kSbivx: "ui-1pe802c",
      kN5Ne6: "ui-533myt",
      kIYuyN: "ui-j3lbx6",
      k1uGpX: "ui-11f6rrl",
      kSjgpj: "ui-19bqz0t",
      kXLQKv: "ui-1rb3ju6",
      kFjQU8: "ui-dlu5df",
      kyWUBC: "ui-xg5q2o",
      kYvg2z: "ui-cfsmtw",
      kT5M3V: "ui-1d3pqjc",
      k5BrEm: "ui-prs008",
      kwYrv2: "ui-1tvzkj",
      kQaNv6: "ui-5g1lnf",
      kRLL9n: "ui-mawbw4",
      krv7dP: "ui-x3f0k1",
      kgK3zs: "ui-104nu9q",
      kDUoiA: "ui-18lgrcb",
      kf8RFJ: "ui-11lhvzu",
      k2X42H: "ui-5gtke5",
      kptOsd: "ui-13t9uge",
      kHQNfD: "ui-9j44ht",
      k2CEd2: "ui-2ve76g",
      kEXsTK: "ui-9wuaob",
      k4pHzB: "ui-hxcdln",
      ko9fjD: "ui-1m7gbiw",
      kbhKqD: "ui-8glzhx",
      kuW0R6: "ui-1t61rui",
      kbEQDr: "ui-1315aoq",
      k6WIcR: "ui-qnyt4e",
      kf2t96: "ui-gamoet",
      k8qA9z: "ui-1yu9d4m",
      kxYkvn: "ui-z67ggg",
      kKzz2y: "ui-1ddr2lw",
      kFYVqi: "ui-6f0ste",
      kD8Y0j: "ui-1qz7zzm",
      ki8BWG: "ui-eqtalk",
      kTnwxd: "ui-12ty6i8",
      kSBpKf: "ui-1jtpj2w",
      krsjBk: "ui-16ba2iw",
      kYCwdL: "ui-r41iwn",
      kJuHSh: "ui-1gv4v5x",
      kAslpx: "ui-evc4wx",
      kC1EXy: "ui-1jzescb",
      kpHKrX: "ui-vnft78",
      k8fhxE: "ui-ty2glq",
      kRiST5: "ui-lhhzqy",
      kxaNRU: "ui-6bdm5h",
      kbiIDB: "ui-1l2uct6",
      kI7nlW: "ui-r715en",
      kFaY0j: "ui-ww2lco",
      kSMMq4: "ui-hvorre",
      kpCPar: "ui-1nhrwvm",
      kis2hx: "ui-qoz0ng",
      ktVrr0: "ui-up9952",
      kaj4Hh: "ui-122dkk1",
      kY7k3m: "ui-1le9rdw",
      kTyzzW: "ui-1ij6n4h",
      kpcmZd: "ui-1ed4f4r",
      kGcZmm: "ui-16iyhsx",
      kJeoLC: "ui-1ts9wjs",
      kPhO2y: "ui-yubvf0",
      kNCqBL: "ui-1nxk1s1",
      kKf6EL: "ui-179jv0q",
      kjH0EC: "ui-cxwk9u",
      kgU7L2: "ui-1al12tu",
      k8E5Cp: "ui-144c94f",
      kO1nNz: "ui-gm25iv",
      kyg1Yg: "ui-100239r",
      kU3MCs: "ui-lx2vd4",
      kNOLMd: "ui-fzpeez",
      k8uA6S: "ui-185278x",
      kQ8H66: "ui-1vb5b1b",
      kzr090: "ui-gkcnn5",
      keUeYG: "ui-1w3ae5x",
      kimhef: "ui-1boeof",
      kdNgpO: "ui-1qrkj96",
      kvf2Q7: "ui-3uhuml",
      k9brk5: "ui-eal660",
      kcCbVZ: "ui-1nrwl1g",
      kU1Q7F: "ui-r4d7jc",
      khIk0V: "ui-tbwnpm",
      kiwlGj: "ui-iyhro0",
      k5V15r: "ui-120vbo7",
      kv25JP: "ui-1pmzcyl",
      k9dF2G: "ui-k03tj9",
      kZXHHS: "ui-9j0ius",
      kUm8B6: "ui-12gw25k",
      kwBlFR: "ui-pus874",
      kzbfS8: "ui-dw0haa",
      kQlZJl: "ui-1yjeo3p",
      kjjyVm: "ui-ntgihz",
      kM3qw8: "ui-t4z08f",
      kjrNhu: "ui-1ynlo3j",
      k6ubzF: "ui-x5grgu",
      kv0GwT: "ui-16cvzho",
      kVqI3i: "ui-13uo978",
      kUF9MP: "ui-yi3gi3",
      kf6E84: "ui-19kf2t2",
      kz8zZX: "ui-u29755",
      kC9vly: "ui-8evzsd",
      khSQtu: "ui-1w7qy8n",
      kD59yM: "ui-oznros",
      kTCiVU: "ui-wgopyu",
      k9nXWJ: "ui-ss5iz6",
      kUg280: "ui-tzjvxb",
      kBqarS: "ui-b6aa93",
      k62WAZ: "ui-1wn08e9",
      kpBjUl: "ui-1ridbjw",
      kIkivi: "ui-55kzob",
      kgP8MP: "ui-18lswn8",
      kMpfmC: "ui-3zdv1",
      kVaCUT: "ui-t0m49v",
      kWpKW6: "ui-8m8pu1",
      kRMejj: "ui-1qm12i8",
      kz77Mq: "ui-1psp19d",
      k5XkB3: "ui-1khysz9",
      kYmk87: "ui-9hxe4g",
      k7DPZe: "ui-1yt1cpp",
      kwoA8i: "ui-1acshxv",
      kgDt15: "ui-1rfwfmb",
      k6DShn: "ui-t89x30",
      kSTiKC: "ui-18zgvij",
      kZEYUd: "ui-tym71y",
      k5wEBS: "ui-afabgv",
      kBwQjr: "ui-echx4t",
      k4bvey: "ui-szsqqp",
      kotfQD: "ui-1ip8vcx",
      ksvPMe: "ui-1b2g504",
      kaBORO: "ui-ikw2yi",
      kR8mwz: "ui-86g9zc",
      kcqXSU: "ui-oca3ad",
      k6fqBP: "ui-2f0u8y",
      k1nfJ4: "ui-1hrd52d",
      kKnX8Y: "ui-h1ucub",
      kfNgfJ: "ui-12qngst",
      kffCTV: "ui-1lsu4hc",
      kVANeB: "ui-qy9vlx",
      kYwqkq: "ui-fs33xg",
      kX9Upi: "ui-evwu85",
      kwQPUN: "ui-wrxhyn",
      kZaCMJ: "ui-19cedn7",
      kXYyqi: "ui-i3t73q",
      kTmqEE: "ui-1drdtfo",
      kfh3gr: "ui-2yzgll",
      kf0cIf: "ui-1mnon03",
      kYGzXR: "ui-1jhg7rx",
      k5j0RI: "ui-w185oe",
      kLaArY: "ui-14m485s",
      k2aOi2: "ui-ewqm0f",
      kflxFY: "ui-1vkwvo8",
      kFcs5c: "ui-hm4ci4",
      kFMxMF: "ui-1q9ylus",
      kxZvPv: "ui-1vuo48m",
      kLdosf: "ui-1mn1zov",
      kBjj2Q: "ui-znl347",
      knzQDE: "ui-iorat5",
      kC4eW8: "ui-1uubby3",
      ki6xrA: "ui-10kzyqe",
      kLq4vH: "ui-1fklu6x",
      kIz9Sd: "ui-1810i2z",
      k7mJBi: "ui-jwo3w8",
      k6IF85: "ui-1j2qchi",
      kARJeu: "ui-1p6ucw3",
      k1ruBd: "ui-135tdbh",
      kTDeHU: "ui-1k41zi",
      k3AlaN: "ui-1xi6i47",
      kXdrnk: "ui-hbopxd",
      kdu8dV: "ui-2wo46w",
      kKgdP0: "ui-1l2k7ee",
      k7skeA: "ui-xl8o5x",
      k1UoS6: "ui-1oualgv",
      kAnMsB: "ui-1hfg5n0",
      kzIkSg: "ui-1hdpdz0",
      k8W194: "ui-1jjdt1k",
      kJvQdl: "ui-18s2oi",
      knwVvI: "ui-1o6h758",
      ktetYC: "ui-d5qvbq",
      k9bMa2: "ui-38pg7q",
      ki8Tt5: "ui-1xdkzg1",
      kGkAqY: "ui-1y1vmg8",
      $$css: !0
    }
  },
  nc: any = {
    base: {
      kVAEAm: "ui-10l6tqk",
      k87sOh: "ui-13vifvy",
      kbCHJM: "ui-u96u03",
      kfzvcC: "ui-47corl",
      kMwMTN: "ui-4b2ntj",
      kfSwDN: "ui-87ps6o",
      kB7OPa: "ui-9f619",
      kzqmXN: "ui-h8yej3",
      kLKAdn: "ui-bfkjp0",
      kpe85a: "ui-1arjqg4",
      kGO01o: "ui-1e826z5",
      kE3dHu: "ui-fdsagq",
      $$css: !0
    }
  },
  ic: any = {
    base: {
      k1xSpc: "ui-1rg5ohu",
      kzqmXN: "ui-fo62xy",
      kZKoxP: "ui-1q3kd3q",
      kWkggS: "ui-mak4db",
      kKVMdj: "ui-l4nlbe ui-1aquc0h",
      k44tkh: "ui-1q3qbx4",
      kyAemX: "ui-dr7l65",
      ko0y90: "ui-a4qsjk",
      kXLuUW: "ui-1uuroth",
      koQZXg: "ui-gsvwom",
      $$css: !0
    }
  };
function rc(this: any, e: any): any {
  return [(ft as any).base, ((e as any).variant as any) === ("document" as any) || ((e as any).variant as any) === ("page" as any) ? (ft as any).document : null, ((e as any).variant as any) === ("page" as any) ? (ft as any).page : null, (e as any).interactive ? null : (ft as any).nonInteractive];
}
function sc(this: any): any {
  return (tc as any).base;
}
function oc(this: any): any {
  return (nc as any).base;
}
function lc(this: any): any {
  return (ic as any).base;
}
const xi: any = new (le as any)("documentRhythm");
function ac(this: any, e: any): any {
  if (((e as any).childCount as any) === (0 as any)) return !1;
  let t: any = !0;
  return ((e as any).forEach as any)((n: any): any => {
    (!(n as any).isText || !(((n as any).marks as any).some as any)((i: any): any => (((i as any).type as any).name as any) === ("italic" as any))) && (t = !1);
  }), t;
}
function os(this: any, e: any): any {
  return (((e as any).type as any).name as any) === ("paragraph" as any) && ((e as any).childCount as any) === (1 as any) && ((e as any).firstChild?.type.name as any) === ("image" as any);
}
function uc(this: any, e: any): any {
  return (((e as any).type as any).name as any) === ("heading" as any) ? !1 : (((e as any).type as any).name as any) !== ("paragraph" as any) || (os as any)(e);
}
function cc(this: any, e: any, t: any): any {
  const n: any = (e as any).firstChild;
  if ((n as any) === (null as any) || (((n as any).type as any).name as any) !== ("paragraph" as any) || ((n as any).childCount as any) < (2 as any)) return null;
  const i: any = ((n as any).child as any)(0),
    r: any = ((n as any).child as any)(1);
  if (!(i as any).isText || !(((i as any).marks as any).some as any)((o: any): any => (((o as any).type as any).name as any) === ("bold" as any)) || !(r as any).isText || (((r as any).marks as any).length as any) > (0 as any) || !(r as any).text?.startsWith(" ")) return null;
  const s: any = ((t as any) + (2 as any) as any) + ((i as any).nodeSize as any);
  return ((Q as any).inline as any)(s, (s as any) + (1 as any), {
    "data-rte-lead-gap": ""
  });
}
function vi(this: any, e: any): any {
  const t: any = [];
  ((e as any).forEach as any)((i: any, r: any): any => {
    ((t as any).push as any)({
      node: i,
      offset: r
    });
  });
  const n: any = [];
  return ((e as any).descendants as any)((i: any, r: any): any => {
    const s: any = ((i as any).attrs as any).start;
    (((i as any).type as any).name as any) === ("orderedList" as any) && (typeof s as any) == ("number" as any) && (s as any) !== (1 as any) && ((n as any).push as any)(((Q as any).node as any)(r, (r as any) + ((i as any).nodeSize as any), {
      style: `--rte-list-counter-start: ${(s as any) - (1 as any)}`
    }));
  }), ((t as any).forEach as any)(({
    node: i,
    offset: r
  }: any, s: any): any => {
    if ((((i as any).type as any).name as any) === ("blockquote" as any)) {
      const u: any = (cc as any)(i, r);
      (u as any) !== (null as any) && ((n as any).push as any)(u);
      return;
    }
    if ((((i as any).type as any).name as any) !== ("paragraph" as any)) return;
    const o: any = (t as any)[(s as any) - (1 as any)]?.node,
      l: any = (t as any)[(s as any) + (1 as any)]?.node,
      a: any = {};
    (os as any)(i) ? (a as any)["data-rte-figure"] = "" : (o as any) !== (void 0 as any) && (((o as any).type as any).name as any) === ("heading" as any) && (typeof ((o as any).attrs as any).level as any) == ("number" as any) && (((o as any).attrs as any).level as any) >= (2 as any) && (ac as any)(i) && ((a as any)["data-rte-caption"] = ""), (l as any) !== (void 0 as any) && (uc as any)(l) && ((a as any)["data-rte-caption"] as any) === (void 0 as any) && ((a as any)["data-rte-before-block"] = ""), ((((Object as any).keys as any)(a) as any).length as any) > (0 as any) && ((n as any).push as any)(((Q as any).node as any)(r, (r as any) + ((i as any).nodeSize as any), a));
  }), ((Ie as any).create as any)(e, n);
}
const dc: any = ((ne as any).create as any)({
  name: "documentRhythm",
  addProseMirrorPlugins(): any {
    return [new (ie as any)({
      key: xi,
      state: {
        init: (e: any, t: any): any => (vi as any)((t as any).doc),
        apply: (e: any, t: any): any => (e as any).docChanged ? (vi as any)((e as any).doc) : t
      },
      props: {
        decorations: (e: any): any => ((xi as any).getState as any)(e) ?? null
      }
    })];
  }
});
function hc(this: any, e: any): any {
  ((e as any).preventDefault as any)();
}
function ls(this: any, {
  initialHref: e,
  onSubmit: t,
  onCancel: n
}: any): any {
  (ls as any).d = 2865343444;
  const [i, r]: any = ((x as any).useState as any)(e),
    s: any = ((x as any).useRef as any)(null),
    o: any = ((x as any).useRef as any)(!1),
    l: any = (): any => {
      (o as any).current || ((o as any).current = !0, (t as any)(i));
    },
    a: any = (d: any): any => {
      (o as any).current || ((o as any).current = !0, (n as any)({
        refocusEditor: d
      }));
    },
    u: any = (d: any): any => {
      ((d as any).key as any) === ("Enter" as any) ? (((d as any).preventDefault as any)(), (l as any)()) : ((d as any).key as any) === ("Escape" as any) && (((d as any).preventDefault as any)(), ((d as any).stopPropagation as any)(), (a as any)(!0));
    },
    c: any = (d: any): any => {
      (d as any).relatedTarget instanceof Node && (s as any).current?.contains((d as any).relatedTarget) || (a as any)(!1);
    };
  return ((m as any).jsxs as any)("div", {
    ref: s,
    className: "ui-78zum5 ui-6s0dn4 ui-11twubx ui-mpze1h ui-xk0z11",
    children: [((m as any).jsx as any)(Xs, {
      name: "link",
      size: "sm",
      className: "ui-2lah0s ui-1mh7f6w",
      "aria-hidden": !0
    }), ((m as any).jsx as any)("input", {
      className: "ui-jyslct ui-c342km ui-ng3xce ui-jbqb8w ui-1a2a7pz ui-1oysuqx ui-1wd3ewq ui-11wthnw ui-1ja60sm ui-jb2p0i ui-ltfok3",
      type: "text",
      value: i,
      placeholder: "Paste or type a link\u2026",
      "aria-label": "Link URL",
      autoFocus: !0,
      onFocus: (d: any): any => (((d as any).currentTarget as any).select as any)(),
      onChange: (d: any): any => (r as any)(((d as any).currentTarget as any).value),
      onKeyDown: u,
      onBlur: c
    }), ((m as any).jsx as any)(Gs, {
      icon: "check",
      size: "md",
      iconSize: "base",
      "aria-label": "Apply link",
      onPointerDown: hc,
      onClick: l,
      onBlur: c
    })]
  });
}
function pc(this: any, e: any, t: any): any {
  const n: any = ((Math as any).min as any)((e as any).top, (t as any).top),
    i: any = ((Math as any).max as any)((e as any).bottom, (t as any).bottom),
    r: any = ((Math as any).min as any)((e as any).left, (t as any).left),
    o: any = (((Math as any).max as any)((e as any).right, (t as any).right) as any) - (r as any),
    l: any = (i as any) - (n as any),
    a: any = r,
    u: any = n;
  return new (DOMRect as any)(a, u, o, l);
}
var fc: any = class {
    declare getReferencedVirtualElement: any;
    declare appendTo: any;
    declare resizeDelay: any;
    declare updateDelay: any;
    declare view: any;
    declare element: any;
    declare editor: any;
    declare transactionHandler: any;
    declare updateHandler: any;
    declare updateDebounceTimer: any;
    declare handleDebouncedUpdate: any;
    declare blurHandler: any;
    declare focusHandler: any;
    declare resizeDebounceTimer: any;
    declare resizeHandler: any;
    declare dragstartHandler: any;
    declare mousedownHandler: any;
    declare shouldShow: any;
    declare floatingUIOptions: any;
    declare scrollTarget: any;
    declare isVisible: any;
    declare preventHide: any;
    [key: string]: any;
    constructor({
      editor: e,
      element: t,
      view: n,
      updateDelay: i = 250,
      resizeDelay: r = 60,
      shouldShow: s,
      appendTo: o,
      getReferencedVirtualElement: l,
      options: a
    }: any) {
      (this as any).preventHide = !1, (this as any).isVisible = !1, (this as any).scrollTarget = window, (this as any).floatingUIOptions = {
        strategy: "absolute",
        placement: "top",
        offset: 8,
        flip: {},
        shift: {},
        arrow: !1,
        size: !1,
        autoPlacement: !1,
        hide: !1,
        inline: !1,
        onShow: void 0,
        onHide: void 0,
        onUpdate: void 0,
        onDestroy: void 0
      }, (this as any).shouldShow = ({
        view: c,
        state: d,
        from: h,
        to: p
      }: any): any => {
        const {
            doc: f,
            selection: g
          }: any = d,
          {
            empty: k
          }: any = g,
          b: any = !(((f as any).textBetween as any)(h, p) as any).length && (co as any)((d as any).selection),
          w: any = (((this as any).element as any).contains as any)((document as any).activeElement);
        return !(!(((c as any).hasFocus as any)() || w) || k || b || !((this as any).editor as any).isEditable);
      }, (this as any).mousedownHandler = (): any => {
        (this as any).preventHide = !0;
      }, (this as any).dragstartHandler = (): any => {
        ((this as any).hide as any)();
      }, (this as any).resizeHandler = (): any => {
        (this as any).resizeDebounceTimer && (clearTimeout as any)((this as any).resizeDebounceTimer), (this as any).resizeDebounceTimer = ((window as any).setTimeout as any)((): any => {
          ((this as any).updatePosition as any)();
        }, (this as any).resizeDelay);
      }, (this as any).focusHandler = (): any => {
        (setTimeout as any)((): any => ((this as any).update as any)(((this as any).editor as any).view));
      }, (this as any).blurHandler = ({
        event: c
      }: any): any => {
        var d: any;
        if (((this as any).editor as any).isDestroyed) {
          ((this as any).destroy as any)();
          return;
        }
        if ((this as any).preventHide) {
          (this as any).preventHide = !1;
          return;
        }
        c?.relatedTarget && ((d = ((this as any).element as any).parentNode) as any) != (null as any) && ((d as any).contains as any)((c as any).relatedTarget) || (c?.relatedTarget as any) !== ((((this as any).editor as any).view as any).dom as any) && ((this as any).hide as any)();
      }, (this as any).handleDebouncedUpdate = (c: any, d: any): any => {
        const h: any = !d?.selection.eq(((c as any).state as any).selection),
          p: any = !d?.doc.eq(((c as any).state as any).doc);
        !h && !p || ((this as any).updateDebounceTimer && (clearTimeout as any)((this as any).updateDebounceTimer), (this as any).updateDebounceTimer = ((window as any).setTimeout as any)((): any => {
          ((this as any).updateHandler as any)(c, h, p, d);
        }, (this as any).updateDelay));
      }, (this as any).updateHandler = (c: any, d: any, h: any, p: any): any => {
        const {
          composing: f
        }: any = c;
        if (f || !d && !h) return;
        if (!((this as any).getShouldShow as any)(p)) {
          ((this as any).hide as any)();
          return;
        }
        ((this as any).updatePosition as any)(), ((this as any).show as any)();
      }, (this as any).transactionHandler = ({
        transaction: c
      }: any): any => {
        (((c as any).getMeta as any)("bubbleMenu") as any) === ("updatePosition" as any) && ((this as any).updatePosition as any)();
      };
      var u: any;
      (this as any).editor = e, (this as any).element = t, (this as any).view = n, (this as any).updateDelay = i, (this as any).resizeDelay = r, (this as any).appendTo = o, (this as any).scrollTarget = ((u = a?.scrollTarget) as any) != (null as any) ? u : window, (this as any).getReferencedVirtualElement = l, (this as any).floatingUIOptions = {
        ...(this as any).floatingUIOptions,
        ...a
      }, ((this as any).element as any).tabIndex = 0, s && ((this as any).shouldShow = s), (((this as any).element as any).addEventListener as any)("mousedown", (this as any).mousedownHandler, {
        capture: !0
      }), ((((this as any).view as any).dom as any).addEventListener as any)("dragstart", (this as any).dragstartHandler), (((this as any).editor as any).on as any)("focus", (this as any).focusHandler), (((this as any).editor as any).on as any)("blur", (this as any).blurHandler), (((this as any).editor as any).on as any)("transaction", (this as any).transactionHandler), ((window as any).addEventListener as any)("resize", (this as any).resizeHandler), (((this as any).scrollTarget as any).addEventListener as any)("scroll", (this as any).resizeHandler), ((this as any).update as any)(n, (n as any).state), ((this as any).getShouldShow as any)() && (((this as any).show as any)(), ((this as any).updatePosition as any)());
    }
    get middlewares(): any {
      const e: any = [];
      return ((this as any).floatingUIOptions as any).flip && ((e as any).push as any)((Wi as any)((typeof ((this as any).floatingUIOptions as any).flip as any) != ("boolean" as any) ? ((this as any).floatingUIOptions as any).flip : void 0)), ((this as any).floatingUIOptions as any).shift && ((e as any).push as any)((Vi as any)((typeof ((this as any).floatingUIOptions as any).shift as any) != ("boolean" as any) ? ((this as any).floatingUIOptions as any).shift : void 0)), ((this as any).floatingUIOptions as any).offset && ((e as any).push as any)((Ki as any)((typeof ((this as any).floatingUIOptions as any).offset as any) != ("boolean" as any) ? ((this as any).floatingUIOptions as any).offset : void 0)), ((this as any).floatingUIOptions as any).arrow && ((e as any).push as any)((Xi as any)(((this as any).floatingUIOptions as any).arrow)), ((this as any).floatingUIOptions as any).size && ((e as any).push as any)((Gi as any)((typeof ((this as any).floatingUIOptions as any).size as any) != ("boolean" as any) ? ((this as any).floatingUIOptions as any).size : void 0)), ((this as any).floatingUIOptions as any).autoPlacement && ((e as any).push as any)((Zi as any)((typeof ((this as any).floatingUIOptions as any).autoPlacement as any) != ("boolean" as any) ? ((this as any).floatingUIOptions as any).autoPlacement : void 0)), ((this as any).floatingUIOptions as any).hide && ((e as any).push as any)((Qi as any)((typeof ((this as any).floatingUIOptions as any).hide as any) != ("boolean" as any) ? ((this as any).floatingUIOptions as any).hide : void 0)), ((this as any).floatingUIOptions as any).inline && ((e as any).push as any)((Yi as any)((typeof ((this as any).floatingUIOptions as any).inline as any) != ("boolean" as any) ? ((this as any).floatingUIOptions as any).inline : void 0)), e;
    }
    get virtualElement(): any {
      var e: any;
      const {
          selection: t
        }: any = ((this as any).editor as any).state,
        n: any = ((e = (this as any).getReferencedVirtualElement) as any) == (null as any) ? void 0 : ((e as any).call as any)(this);
      if (n) return n;
      const i: any = (Je as any)((this as any).view, (t as any).from, (t as any).to);
      let r: any = {
        getBoundingClientRect: (): any => i,
        getClientRects: (): any => [i]
      };
      if (t instanceof sr) {
        let s: any = (((this as any).view as any).nodeDOM as any)((t as any).from);
        const o: any = ((s as any).dataset as any).nodeViewWrapper ? s : ((s as any).querySelector as any)("[data-node-view-wrapper]");
        o && (s = o), s && (r = {
          getBoundingClientRect: (): any => ((s as any).getBoundingClientRect as any)(),
          getClientRects: (): any => [((s as any).getBoundingClientRect as any)()]
        });
      }
      if (t instanceof I) {
        const {
            $anchorCell: s,
            $headCell: o
          }: any = t,
          l: any = s ? (s as any).pos : (o as any).pos,
          a: any = o ? (o as any).pos : (s as any).pos,
          u: any = (((this as any).view as any).nodeDOM as any)(l),
          c: any = (((this as any).view as any).nodeDOM as any)(a);
        if (!u || !c) return;
        const d: any = (u as any) === (c as any) ? ((u as any).getBoundingClientRect as any)() : (pc as any)(((u as any).getBoundingClientRect as any)(), ((c as any).getBoundingClientRect as any)());
        r = {
          getBoundingClientRect: (): any => d,
          getClientRects: (): any => [d]
        };
      }
      return r;
    }
    updatePosition(): any {
      const e: any = (this as any).virtualElement;
      e && (((Ji as any)(e, (this as any).element, {
        placement: ((this as any).floatingUIOptions as any).placement,
        strategy: ((this as any).floatingUIOptions as any).strategy,
        middleware: (this as any).middlewares
      }) as any).then as any)(({
        x: t,
        y: n,
        strategy: i
      }: any): any => {
        (((this as any).element as any).style as any).width = "max-content", (((this as any).element as any).style as any).position = i, (((this as any).element as any).style as any).left = `${t}px`, (((this as any).element as any).style as any).top = `${n}px`, (this as any).isVisible && ((this as any).floatingUIOptions as any).onUpdate && (((this as any).floatingUIOptions as any).onUpdate as any)();
      });
    }
    update(e: any, t: any): any {
      const {
          state: n
        }: any = e,
        i: any = (((n as any).selection as any).from as any) !== (((n as any).selection as any).to as any);
      if (((this as any).updateDelay as any) > (0 as any) && i) {
        ((this as any).handleDebouncedUpdate as any)(e, t);
        return;
      }
      const r: any = !t?.selection.eq(((e as any).state as any).selection),
        s: any = !t?.doc.eq(((e as any).state as any).doc);
      ((this as any).updateHandler as any)(e, r, s, t);
    }
    getShouldShow(e: any): any {
      var t: any;
      const {
          state: n
        }: any = (this as any).view,
        {
          selection: i
        }: any = n,
        {
          ranges: r
        }: any = i,
        s: any = ((Math as any).min as any)(...((r as any).map as any)((a: any): any => ((a as any).$from as any).pos)),
        o: any = ((Math as any).max as any)(...((r as any).map as any)((a: any): any => ((a as any).$to as any).pos));
      return (((t = (this as any).shouldShow) as any) == (null as any) ? void 0 : ((t as any).call as any)(this, {
        editor: (this as any).editor,
        element: (this as any).element,
        view: (this as any).view,
        state: n,
        oldState: e,
        from: s,
        to: o
      })) || !1;
    }
    show(): any {
      var e: any;
      if ((this as any).isVisible) return;
      (((this as any).element as any).style as any).visibility = "visible", (((this as any).element as any).style as any).opacity = "1";
      const t: any = (typeof (this as any).appendTo as any) == ("function" as any) ? ((this as any).appendTo as any)() : (this as any).appendTo;
      ((e = t ?? (((this as any).view as any).dom as any).parentElement) as any) == (null as any) || ((e as any).appendChild as any)((this as any).element), ((this as any).floatingUIOptions as any).onShow && (((this as any).floatingUIOptions as any).onShow as any)(), (this as any).isVisible = !0;
    }
    hide(): any {
      (this as any).isVisible && ((((this as any).element as any).style as any).visibility = "hidden", (((this as any).element as any).style as any).opacity = "0", (((this as any).element as any).remove as any)(), ((this as any).floatingUIOptions as any).onHide && (((this as any).floatingUIOptions as any).onHide as any)(), (this as any).isVisible = !1);
    }
    destroy(): any {
      ((this as any).hide as any)(), (((this as any).element as any).removeEventListener as any)("mousedown", (this as any).mousedownHandler, {
        capture: !0
      }), ((((this as any).view as any).dom as any).removeEventListener as any)("dragstart", (this as any).dragstartHandler), ((window as any).removeEventListener as any)("resize", (this as any).resizeHandler), (((this as any).scrollTarget as any).removeEventListener as any)("scroll", (this as any).resizeHandler), (((this as any).editor as any).off as any)("focus", (this as any).focusHandler), (((this as any).editor as any).off as any)("blur", (this as any).blurHandler), (((this as any).editor as any).off as any)("transaction", (this as any).transactionHandler), ((this as any).floatingUIOptions as any).onDestroy && (((this as any).floatingUIOptions as any).onDestroy as any)();
    }
  },
  as: any = (e: any): any => new (ie as any)({
    key: (typeof (e as any).pluginKey as any) == ("string" as any) ? new (le as any)((e as any).pluginKey) : (e as any).pluginKey,
    view: (t: any): any => new (fc as any)({
      view: t,
      ...e
    })
  });
((ne as any).create as any)({
  name: "bubbleMenu",
  addOptions(): any {
    return {
      element: null,
      pluginKey: "bubbleMenu",
      updateDelay: void 0,
      appendTo: void 0,
      shouldShow: null
    };
  },
  addProseMirrorPlugins(): any {
    return ((this as any).options as any).element ? [(as as any)({
      pluginKey: ((this as any).options as any).pluginKey,
      editor: (this as any).editor,
      element: ((this as any).options as any).element,
      updateDelay: ((this as any).options as any).updateDelay,
      options: ((this as any).options as any).options,
      appendTo: ((this as any).options as any).appendTo,
      getReferencedVirtualElement: ((this as any).options as any).getReferencedVirtualElement,
      shouldShow: ((this as any).options as any).shouldShow
    })] : [];
  }
});
var mc: any = class {
    declare appendTo: any;
    declare view: any;
    declare element: any;
    declare editor: any;
    declare blurHandler: any;
    declare focusHandler: any;
    declare mousedownHandler: any;
    declare updateHandler: any;
    declare floatingUIOptions: any;
    declare shouldShow: any;
    declare isVisible: any;
    declare preventHide: any;
    [key: string]: any;
    constructor({
      editor: e,
      element: t,
      view: n,
      options: i,
      appendTo: r,
      shouldShow: s
    }: any) {
      (this as any).preventHide = !1, (this as any).isVisible = !1, (this as any).shouldShow = ({
        view: o,
        state: l
      }: any): any => {
        const {
            selection: a
          }: any = l,
          {
            $anchor: u,
            empty: c
          }: any = a,
          d: any = ((u as any).depth as any) === (1 as any),
          h: any = ((u as any).parent as any).isTextblock && !((((u as any).parent as any).type as any).spec as any).code && !((u as any).parent as any).textContent && (((u as any).parent as any).childCount as any) === (0 as any) && !((this as any).getTextContent as any)((u as any).parent);
        return !(!((o as any).hasFocus as any)() || !c || !d || !h || !((this as any).editor as any).isEditable);
      }, (this as any).floatingUIOptions = {
        strategy: "absolute",
        placement: "right",
        offset: 8,
        flip: {},
        shift: {},
        arrow: !1,
        size: !1,
        autoPlacement: !1,
        hide: !1,
        inline: !1
      }, (this as any).updateHandler = (o: any, l: any, a: any, u: any): any => {
        const {
          composing: c
        }: any = o;
        if (c || !l && !a) return;
        if (!((this as any).getShouldShow as any)(u)) {
          ((this as any).hide as any)();
          return;
        }
        ((this as any).updatePosition as any)(), ((this as any).show as any)();
      }, (this as any).mousedownHandler = (): any => {
        (this as any).preventHide = !0;
      }, (this as any).focusHandler = (): any => {
        (setTimeout as any)((): any => ((this as any).update as any)(((this as any).editor as any).view));
      }, (this as any).blurHandler = ({
        event: o
      }: any): any => {
        var l: any;
        if ((this as any).preventHide) {
          (this as any).preventHide = !1;
          return;
        }
        o?.relatedTarget && ((l = ((this as any).element as any).parentNode) as any) != (null as any) && ((l as any).contains as any)((o as any).relatedTarget) || (o?.relatedTarget as any) !== ((((this as any).editor as any).view as any).dom as any) && ((this as any).hide as any)();
      }, (this as any).editor = e, (this as any).element = t, (this as any).view = n, (this as any).appendTo = r, (this as any).floatingUIOptions = {
        ...(this as any).floatingUIOptions,
        ...i
      }, ((this as any).element as any).tabIndex = 0, s && ((this as any).shouldShow = s), (((this as any).element as any).addEventListener as any)("mousedown", (this as any).mousedownHandler, {
        capture: !0
      }), (((this as any).editor as any).on as any)("focus", (this as any).focusHandler), (((this as any).editor as any).on as any)("blur", (this as any).blurHandler), ((this as any).update as any)(n, (n as any).state), ((this as any).getShouldShow as any)() && (((this as any).show as any)(), ((this as any).updatePosition as any)());
    }
    getTextContent(e: any): any {
      return (ho as any)(e, {
        textSerializers: (po as any)(((this as any).editor as any).schema)
      });
    }
    get middlewares(): any {
      const e: any = [];
      return ((this as any).floatingUIOptions as any).flip && ((e as any).push as any)((Wi as any)((typeof ((this as any).floatingUIOptions as any).flip as any) != ("boolean" as any) ? ((this as any).floatingUIOptions as any).flip : void 0)), ((this as any).floatingUIOptions as any).shift && ((e as any).push as any)((Vi as any)((typeof ((this as any).floatingUIOptions as any).shift as any) != ("boolean" as any) ? ((this as any).floatingUIOptions as any).shift : void 0)), ((this as any).floatingUIOptions as any).offset && ((e as any).push as any)((Ki as any)((typeof ((this as any).floatingUIOptions as any).offset as any) != ("boolean" as any) ? ((this as any).floatingUIOptions as any).offset : void 0)), ((this as any).floatingUIOptions as any).arrow && ((e as any).push as any)((Xi as any)(((this as any).floatingUIOptions as any).arrow)), ((this as any).floatingUIOptions as any).size && ((e as any).push as any)((Gi as any)((typeof ((this as any).floatingUIOptions as any).size as any) != ("boolean" as any) ? ((this as any).floatingUIOptions as any).size : void 0)), ((this as any).floatingUIOptions as any).autoPlacement && ((e as any).push as any)((Zi as any)((typeof ((this as any).floatingUIOptions as any).autoPlacement as any) != ("boolean" as any) ? ((this as any).floatingUIOptions as any).autoPlacement : void 0)), ((this as any).floatingUIOptions as any).hide && ((e as any).push as any)((Qi as any)((typeof ((this as any).floatingUIOptions as any).hide as any) != ("boolean" as any) ? ((this as any).floatingUIOptions as any).hide : void 0)), ((this as any).floatingUIOptions as any).inline && ((e as any).push as any)((Yi as any)((typeof ((this as any).floatingUIOptions as any).inline as any) != ("boolean" as any) ? ((this as any).floatingUIOptions as any).inline : void 0)), e;
    }
    getShouldShow(e: any): any {
      var t: any;
      const {
          state: n
        }: any = (this as any).view,
        {
          selection: i
        }: any = n,
        {
          ranges: r
        }: any = i,
        s: any = ((Math as any).min as any)(...((r as any).map as any)((a: any): any => ((a as any).$from as any).pos)),
        o: any = ((Math as any).max as any)(...((r as any).map as any)((a: any): any => ((a as any).$to as any).pos));
      return ((t = (this as any).shouldShow) as any) == (null as any) ? void 0 : ((t as any).call as any)(this, {
        editor: (this as any).editor,
        view: (this as any).view,
        state: n,
        oldState: e,
        from: s,
        to: o
      });
    }
    updatePosition(): any {
      const {
          selection: e
        }: any = ((this as any).editor as any).state,
        t: any = (Je as any)((this as any).view, (e as any).from, (e as any).to);
      (((Ji as any)({
        getBoundingClientRect: (): any => t,
        getClientRects: (): any => [t]
      }, (this as any).element, {
        placement: ((this as any).floatingUIOptions as any).placement,
        strategy: ((this as any).floatingUIOptions as any).strategy,
        middleware: (this as any).middlewares
      }) as any).then as any)(({
        x: i,
        y: r,
        strategy: s
      }: any): any => {
        (((this as any).element as any).style as any).width = "max-content", (((this as any).element as any).style as any).position = s, (((this as any).element as any).style as any).left = `${i}px`, (((this as any).element as any).style as any).top = `${r}px`, (this as any).isVisible && ((this as any).floatingUIOptions as any).onUpdate && (((this as any).floatingUIOptions as any).onUpdate as any)();
      });
    }
    update(e: any, t: any): any {
      const n: any = !t?.selection.eq(((e as any).state as any).selection),
        i: any = !t?.doc.eq(((e as any).state as any).doc);
      ((this as any).updateHandler as any)(e, n, i, t);
    }
    show(): any {
      var e: any;
      if ((this as any).isVisible) return;
      (((this as any).element as any).style as any).visibility = "visible", (((this as any).element as any).style as any).opacity = "1";
      const t: any = (typeof (this as any).appendTo as any) == ("function" as any) ? ((this as any).appendTo as any)() : (this as any).appendTo;
      ((e = t ?? (((this as any).view as any).dom as any).parentElement) as any) == (null as any) || ((e as any).appendChild as any)((this as any).element), ((this as any).floatingUIOptions as any).onShow && (((this as any).floatingUIOptions as any).onShow as any)(), (this as any).isVisible = !0;
    }
    hide(): any {
      (this as any).isVisible && ((((this as any).element as any).style as any).visibility = "hidden", (((this as any).element as any).style as any).opacity = "0", (((this as any).element as any).remove as any)(), ((this as any).floatingUIOptions as any).onHide && (((this as any).floatingUIOptions as any).onHide as any)(), (this as any).isVisible = !1);
    }
    destroy(): any {
      ((this as any).hide as any)(), (((this as any).element as any).removeEventListener as any)("mousedown", (this as any).mousedownHandler, {
        capture: !0
      }), (((this as any).editor as any).off as any)("focus", (this as any).focusHandler), (((this as any).editor as any).off as any)("blur", (this as any).blurHandler), ((this as any).floatingUIOptions as any).onDestroy && (((this as any).floatingUIOptions as any).onDestroy as any)();
    }
  },
  us: any = (e: any): any => new (ie as any)({
    key: (typeof (e as any).pluginKey as any) == ("string" as any) ? new (le as any)((e as any).pluginKey) : (e as any).pluginKey,
    view: (t: any): any => new (mc as any)({
      view: t,
      ...e
    })
  });
((ne as any).create as any)({
  name: "floatingMenu",
  addOptions(): any {
    return {
      element: null,
      options: {},
      pluginKey: "floatingMenu",
      appendTo: void 0,
      shouldShow: null
    };
  },
  addProseMirrorPlugins(): any {
    return ((this as any).options as any).element ? [(us as any)({
      pluginKey: ((this as any).options as any).pluginKey,
      editor: (this as any).editor,
      element: ((this as any).options as any).element,
      options: ((this as any).options as any).options,
      appendTo: ((this as any).options as any).appendTo,
      shouldShow: ((this as any).options as any).shouldShow
    })] : [];
  }
});
var rn: any = ((ze as any).forwardRef as any)(({
    pluginKey: e = "bubbleMenu",
    editor: t,
    updateDelay: n,
    resizeDelay: i,
    appendTo: r,
    shouldShow: s = null,
    getReferencedVirtualElement: o,
    options: l,
    children: a,
    ...u
  }: any, c: any): any => {
    ((Reflect as any).set as any)(rn, "d", 3141841717);
    const d: any = ((x as any).useRef as any)(((document as any).createElement as any)("div"));
    (typeof c as any) == ("function" as any) ? (c as any)((d as any).current) : c && ((c as any).current = (d as any).current);
    const {
        editor: h
      }: any = (br as any)(),
      p: any = t || h,
      f: any = {
        updateDelay: n,
        resizeDelay: i,
        appendTo: r,
        pluginKey: e,
        shouldShow: s,
        getReferencedVirtualElement: o,
        options: l
      },
      g: any = ((x as any).useRef as any)(f);
    return (g as any).current = f, ((x as any).useEffect as any)((): any => {
      if (p?.isDestroyed) return;
      if (!p) {
        ((console as any).warn as any)("BubbleMenu component is not rendered inside of an editor component or does not have editor prop.");
        return;
      }
      const k: any = (d as any).current;
      ((k as any).style as any).visibility = "hidden", ((k as any).style as any).position = "absolute";
      const b: any = (as as any)({
        ...(g as any).current,
        editor: p,
        element: k
      });
      ((p as any).registerPlugin as any)(b);
      const w: any = ((g as any).current as any).pluginKey;
      return (): any => {
        ((p as any).unregisterPlugin as any)(w), ((window as any).requestAnimationFrame as any)((): any => {
          (k as any).parentNode && (((k as any).parentNode as any).removeChild as any)(k);
        });
      };
    }, [p]), ((dn as any).createPortal as any)(((m as any).jsx as any)("div", {
      ...u,
      children: a
    }), (d as any).current);
  }),
  gc: any = ((ze as any).forwardRef as any)(({
    pluginKey: e = "floatingMenu",
    editor: t,
    appendTo: n,
    shouldShow: i = null,
    options: r,
    children: s,
    ...o
  }: any, l: any): any => {
    ((Reflect as any).set as any)(gc, "d", 1699181352);
    const a: any = ((x as any).useRef as any)(((document as any).createElement as any)("div"));
    (typeof l as any) == ("function" as any) ? (l as any)((a as any).current) : l && ((l as any).current = (a as any).current);
    const {
      editor: u
    }: any = (br as any)();
    return ((x as any).useEffect as any)((): any => {
      const c: any = (a as any).current;
      if (((c as any).style as any).visibility = "hidden", ((c as any).style as any).position = "absolute", t?.isDestroyed || u?.isDestroyed) return;
      const d: any = t || u;
      if (!d) {
        ((console as any).warn as any)("FloatingMenu component is not rendered inside of an editor component or does not have editor prop.");
        return;
      }
      const h: any = (us as any)({
        editor: d,
        element: c,
        pluginKey: e,
        appendTo: n,
        shouldShow: i,
        options: r
      });
      return ((d as any).registerPlugin as any)(h), (): any => {
        ((d as any).unregisterPlugin as any)(e), ((window as any).requestAnimationFrame as any)((): any => {
          (c as any).parentNode && (((c as any).parentNode as any).removeChild as any)(c);
        });
      };
    }, [t, u, n, e, i, r]), ((dn as any).createPortal as any)(((m as any).jsx as any)("div", {
      ...o,
      children: s
    }), (a as any).current);
  });
const kc: string = "xs",
  O: any = {
    base: {
      kGNEyG: "ui-6s0dn4",
      kjj79g: "ui-l56j7k",
      kMwMTN: "ui-1heor9g",
      kXLuUW: "ui-xymvpz",
      kzqmXN: "ui-1oai4fc",
      kZKoxP: "ui-higkf7",
      k63SB2: "ui-etm3q0",
      keoZOQ: "ui-vj1r1n",
      km5ZXQ: "ui-1j59caj",
      k1K539: "ui-1av5923",
      koQZXg: "ui-1k4ukv9",
      "--icon-size": "ui-1ddsvy1",
      "--icon-weight": "ui-1q5xvfy",
      "--icon-margin": "ui-17igp9n",
      $$css: !0
    },
    noPresetSize: {
      $$css: !0
    },
    sizeXs: {
      kzqmXN: "ui-smyaan",
      kZKoxP: "ui-1kpxq89",
      $$css: !0
    },
    sizeSm: {
      kzqmXN: "ui-6jxa94",
      kZKoxP: "ui-1v9usgg",
      $$css: !0
    },
    sizeMd: {
      kzqmXN: "ui-1kky2od",
      kZKoxP: "ui-lup9mm",
      $$css: !0
    },
    sizeLg: {
      kzqmXN: "ui-w4jnvo",
      kZKoxP: "ui-1qx5ct2",
      $$css: !0
    },
    sizeXl: {
      kzqmXN: "ui-vy4d1p",
      kZKoxP: "ui-xk0z11",
      $$css: !0
    },
    noColor: {
      $$css: !0
    },
    colorPrimary: {
      kMwMTN: "ui-1nqczng",
      $$css: !0
    },
    colorSecondary: {
      kMwMTN: "ui-1mh7f6w",
      $$css: !0
    },
    colorTertiary: {
      kMwMTN: "ui-1lbmi28",
      $$css: !0
    },
    colorQuaternary: {
      kMwMTN: "ui-1qh17o",
      $$css: !0
    },
    colorCyan: {
      kMwMTN: "ui-1rbygr4",
      $$css: !0
    },
    colorRed: {
      kMwMTN: "ui-ku4wcm",
      $$css: !0
    },
    colorGreen: {
      kMwMTN: "ui-p6nzhx",
      $$css: !0
    },
    colorYellow: {
      kMwMTN: "ui-1hn9r2r",
      $$css: !0
    },
    noModifier: {
      $$css: !0
    },
    modifierSpin: {
      kKVMdj: "ui-138fvbv",
      k44tkh: "ui-1q3qbx4",
      kyAemX: "ui-1esw782",
      ko0y90: "ui-a4qsjk",
      $$css: !0
    },
    noModifierDisabled: {
      $$css: !0
    },
    modifierHidden: {
      k33iCy: "ui-lshs6z",
      $$css: !0
    }
  };
function bc(this: any, e: any, t: any, n: any): any {
  return [(O as any).base, (yc as any)(e), (wc as any)(t), (xc as any)(n)];
}
function yc(this: any, e: any): any {
  if ((typeof e as any) == ("number" as any) || ((e as any).startsWith as any)("var(")) return (O as any).noPresetSize;
  switch (e) {
    case "xs":
      return (O as any).sizeXs;
    case "sm":
      return (O as any).sizeSm;
    case "md":
      return (O as any).sizeMd;
    case "lg":
      return (O as any).sizeLg;
    case "xl":
      return (O as any).sizeXl;
  }
}
function wc(this: any, e: any): any {
  switch (e) {
    case "primary":
      return (O as any).colorPrimary;
    case "secondary":
      return (O as any).colorSecondary;
    case "tertiary":
      return (O as any).colorTertiary;
    case "quaternary":
      return (O as any).colorQuaternary;
    case "cyan":
      return (O as any).colorCyan;
    case "red":
      return (O as any).colorRed;
    case "green":
      return (O as any).colorGreen;
    case "yellow":
      return (O as any).colorYellow;
    case void 0:
      return (O as any).noColor;
  }
}
function xc(this: any, e: any): any {
  switch (e) {
    case "spin":
      return (O as any).modifierSpin;
    case "disabled":
      return (O as any).noModifierDisabled;
    case "hidden":
      return (O as any).modifierHidden;
    case void 0:
      return (O as any).noModifier;
  }
}
function cs(this: any, {
  name: e,
  modifier: t,
  size: n,
  glyphSize: i,
  color: r,
  className: s,
  title: o,
  "aria-label": l,
  "aria-hidden": a,
  ref: u
}: any): any {
  (cs as any).d = 205909233;
  const c: any = (Us as any)(),
    d: any = (or as any)(e, t);
  let h: any;
  if ((n as any) != (null as any)) h = n;else if ((c?.iconSize as any) == (null as any)) h = kc;else if ((typeof (c as any).iconSize as any) == ("number" as any)) h = (c as any).iconSize;else if (!(Zs as any)((c as any).iconSize)) h = (c as any).iconSize;else switch ((c as any).iconSize) {
    case "xs":
    case "sm":
    case "lg":
    case "xl":
      h = (c as any).iconSize;
      break;
    case "base":
      h = "sm";
      break;
    case "2xl":
      h = "xl";
      break;
    default:
      h = (c as any).iconSize;
  }
  const p: any = (typeof h as any) == ("number" as any) || ((h as any).startsWith as any)("var("),
    f: any = {
      ...(p ? {
        "--icon-size": (typeof h as any) == ("number" as any) ? `${h}px` : h
      } : {}),
      ...((i as any) === (void 0 as any) ? {} : {
        fontSize: `${i}px`
      })
    },
    g: any = (ye as any)({
      rootClass: "ui-codicon",
      stylexStyles: (bc as any)(h, r, t),
      className: (tr as any)(d, s),
      style: f
    });
  return ((m as any).jsx as any)("i", {
    ref: u,
    className: (g as any).className,
    "data-size": p ? void 0 : h,
    "data-color": r,
    style: (g as any).style,
    title: o ?? l,
    "aria-hidden": a ?? (l ? void 0 : !0)
  });
}
function Si(this: any, e: any, t: any): any {
  let n: any = 1,
    i: any = 1;
  for (let r: any = 0; (r as any) < (e as any) && (r as any) < ((t as any).length as any); r++) ((t as any)[r] as any) === (`
` as any) ? (n++, i = 1) : i++;
  return {
    line: n,
    column: i
  };
}
function vc(this: any, e: any, t: any, n: any, i: any = "markdown"): any {
  const r: any = ((((e as any).state as any).doc as any).textBetween as any)(0, ((((e as any).state as any).doc as any).content as any).size, `
`),
    s: any = ((((e as any).state as any).doc as any).textBetween as any)(t, n, " "),
    o: any = (Si as any)(t, r),
    l: any = (Si as any)(n, r);
  return {
    selectedText: s,
    fencedText: `\`\`\`${i}
${s}
\`\`\``,
    range: {
      startLine: (o as any).line,
      startColumn: (o as any).column,
      endLine: (l as any).line,
      endColumn: (l as any).column
    }
  };
}
const Ci: number = 100,
  Sc: any = (typeof navigator as any) < ("u" as any) && ((/Mac|iP(hone|[oa]d)/ as any).test as any)((navigator as any).platform);
function Cc(this: any, e: any): any {
  const t: any = ((e as any).split as any)(/-(?!$)/);
  let n: any = (t as any)[((t as any).length as any) - (1 as any)];
  (n as any) === ("Space" as any) && (n = " ");
  let i: any = !1,
    r: any = !1,
    s: any = !1,
    o: any = !1;
  for (const l of ((t as any).slice as any)(0, -1)) if (((/^(cmd|meta|m)$/i as any).test as any)(l)) s = !0;else if (((/^a(lt)?$/i as any).test as any)(l)) i = !0;else if (((/^(c|ctrl|control)$/i as any).test as any)(l)) r = !0;else if (((/^s(hift)?$/i as any).test as any)(l)) o = !0;else if (((/^mod$/i as any).test as any)(l)) Sc ? s = !0 : r = !0;else throw new (Error as any)(`Unrecognized modifier name: ${l}`);
  return i && (n = `Alt-${n}`), r && (n = `Ctrl-${n}`), s && (n = `Meta-${n}`), o && (n = `Shift-${n}`), n;
}
function Tc(this: any, e: any): any {
  const {
    selection: t
  }: any = (e as any).state;
  if (!(t instanceof H)) return null;
  const {
      from: n,
      to: i
    }: any = t,
    {
      selectedText: r
    }: any = (vc as any)(e, n, i);
  return {
    selectedText: r,
    from: n,
    to: i,
    editor: e
  };
}
function ds(this: any, e: any): any {
  const t: any = {
    key: (e as any).key,
    label: (e as any).label,
    shortcut: (e as any).shortcut,
    execute: (e as any).execute,
    group: (e as any).group,
    isActive: (e as any).isActive,
    disabled: ((e as any).disabled as any) === (!0 as any),
    hidden: ((e as any).hidden as any) === (!0 as any),
    keybinding: (e as any).keybinding && !(e as any).disabled ? {
      input: (e as any).keybinding,
      canonical: (Cc as any)((e as any).keybinding)
    } : null,
    selectionBehavior: (e as any).selectionBehavior
  };
  return ((e as any).presentation as any) === ("icon-only" as any) ? {
    ...t,
    presentation: "icon-only",
    icon: (e as any).icon
  } : {
    ...t,
    presentation: "default",
    icon: (e as any).icon
  };
}
function Rc(this: any, e: any): any {
  return ((e as any).map as any)(({
    onAction: t,
    ...n
  }: any): any => (ds as any)({
    ...n,
    execute: (i: any): any => {
      const r: any = (Tc as any)(i);
      return r ? ((t as any)(r), !0) : !1;
    },
    selectionBehavior: "collapse"
  }));
}
function sn(this: any, e: any, t: any, n: any): any {
  if ((e as any).disabled) return !1;
  const {
    to: i
  }: any = ((t as any).state as any).selection;
  let {
    anchor: r,
    head: s
  }: any = ((t as any).state as any).selection;
  const o: any = ({
      transaction: u
    }: any): any => {
      r = (((u as any).mapping as any).map as any)(r), s = (((u as any).mapping as any).map as any)(s);
    },
    l: any = ((e as any).selectionBehavior as any) === ("preserve" as any);
  l && ((t as any).on as any)("transaction", o);
  let a: any;
  try {
    a = ((e as any).execute as any)(t);
  } finally {
    l && ((t as any).off as any)("transaction", o);
  }
  if (!a) return !1;
  if (l) {
    const {
      doc: u
    }: any = (t as any).state;
    (((t as any).view as any).dispatch as any)(((((t as any).state as any).tr as any).setSelection as any)(((H as any).between as any)(((u as any).resolve as any)(r), ((u as any).resolve as any)(s))));
  } else (n as any) === ("button" as any) && (((t as any).commands as any).setTextSelection as any)(i);
  return !0;
}
function Ti(this: any, e: any): any {
  const {
    anchor: t,
    head: n
  }: any = ((e as any).state as any).selection;
  if ((t as any) === (n as any)) return !1;
  const i: any = (Je as any)((e as any).view, t, t);
  return (((Je as any)((e as any).view, n, n) as any).top as any) > ((i as any).top as any);
}
function Mc(this: any, e: any): any {
  const t: any = new (Map as any)();
  for (const n of e) {
    if (!(n as any).keybinding) continue;
    const i: any = ((t as any).get as any)(((n as any).keybinding as any).canonical);
    if ((i as any) !== (void 0 as any)) throw new (Error as any)(`Selection tooltip actions "${i}" and "${(n as any).key}" use duplicate keybinding "${((n as any).keybinding as any).input}"`);
    ((t as any).set as any)(((n as any).keybinding as any).canonical, (n as any).key);
  }
}
function Ec(this: any, e: any): any {
  return ((ne as any).create as any)({
    name: "selectionTooltipKeybindings",
    addProseMirrorPlugins(): any {
      const t: any = (this as any).editor;
      let n: any = null,
        i: any = null;
      return [new (ie as any)({
        props: {
          handleKeyDown(r: any, s: any): any {
            const o: any = (e as any)();
            if ((n as any) !== (o as any)) {
              const l: any = {};
              for (const a of o) (a as any).keybinding && ((l as any)[((a as any).keybinding as any).input] = (): any => {
                const {
                  selection: u
                }: any = (t as any).state;
                return !(u instanceof H) || (u as any).empty ? !1 : (sn as any)(a, t, "keyboard");
              });
              n = o, i = (rr as any)(l);
            }
            return i?.(r, s) ?? !1;
          }
        }
      })];
    }
  });
}
function $c(this: any, e: any): any {
  return (Ec as any)(e);
}
function Ri(this: any, e: any): any {
  ((e as any).preventDefault as any)();
}
function hs(this: any, {
  action: e,
  editor: t
}: any): any {
  (hs as any).d = 3379289252;
  const n: any = (mr as any)({
      editor: t,
      selector: ({
        editor: l
      }: any): any => (e as any).isActive?.(l) ?? !1
    }),
    i: any = ((e as any).disabled as any) === (!0 as any);
  if (((e as any).presentation as any) === ("icon-only" as any)) return ((m as any).jsx as any)(Qs, {
    content: ((m as any).jsx as any)(Ys, {
      title: (e as any).label,
      shortcut: (e as any).shortcut
    }),
    children: ((m as any).jsx as any)(cr, {
      "aria-label": (e as any).label,
      disabled: i,
      icon: (e as any).icon,
      onPointerDown: Ri,
      onPressedChange: (): any => (sn as any)(e, t, "button"),
      pressed: n,
      size: "md",
      iconSize: "base"
    })
  });
  const r: any = ({
      0: {
        className: "ui-2lah0s ui-1mh7f6w"
      },
      1: {
        className: "ui-2lah0s ui-1nqczng"
      }
    } as any)[(!!n as any) << (0 as any)],
    s: any = {
      className: "ui-11wthnw ui-20ajya ui-1wd3ewq"
    },
    o: any = {
      className: "ui-hayvgc ui-1wm8ruf ui-ss6m8b ui-4b2ntj ui-2lah0s"
    };
  return ((m as any).jsxs as any)("button", {
    type: "button",
    ...({
      0: {
        className: "ui-78zum5 ui-6s0dn4 ui-11twubx ui-jyslct ui-972fbf ui-1ejq31n ui-gfja2r ui-11pwa6s ui-1qhh985 ui-1sy0etr ui-yj58a3 ui-1b16gh4 ui-jbqb8w ui-1iuyybk ui-pb2eou ui-1ypdohk ui-ln7xf2 ui-1wd3ewq ui-493x5y ui-17v7654 ui-b6dno7 ui-1lfpczk ui-1043rbw ui-1qx5ct2 ui-uxw1ft ui-15406qy ui-4wkmsb ui-7pq1vu ui-6tor67 ui-1k57tk5 ui-784prv ui-1t137rt ui-9v5kkp ui-1uczgqu ui-1725o6r ui-1wfwxd8 ui-1bqaal"
      },
      2: {
        className: "ui-78zum5 ui-6s0dn4 ui-11twubx ui-jyslct ui-972fbf ui-1ejq31n ui-gfja2r ui-11pwa6s ui-1qhh985 ui-1sy0etr ui-yj58a3 ui-1b16gh4 ui-1ypdohk ui-ln7xf2 ui-1wd3ewq ui-493x5y ui-17v7654 ui-b6dno7 ui-1lfpczk ui-1043rbw ui-1qx5ct2 ui-uxw1ft ui-15406qy ui-4wkmsb ui-7pq1vu ui-6tor67 ui-1k57tk5 ui-784prv ui-1t137rt ui-9v5kkp ui-1uczgqu ui-1725o6r ui-1wfwxd8 ui-1bqaal ui-ri19xs"
      },
      1: {
        className: "ui-78zum5 ui-6s0dn4 ui-11twubx ui-jyslct ui-972fbf ui-1ejq31n ui-gfja2r ui-11pwa6s ui-1qhh985 ui-1sy0etr ui-yj58a3 ui-1b16gh4 ui-jbqb8w ui-1iuyybk ui-pb2eou ui-ln7xf2 ui-1wd3ewq ui-493x5y ui-17v7654 ui-b6dno7 ui-1lfpczk ui-1043rbw ui-1qx5ct2 ui-uxw1ft ui-15406qy ui-4wkmsb ui-7pq1vu ui-6tor67 ui-1k57tk5 ui-784prv ui-1t137rt ui-9v5kkp ui-1uczgqu ui-1725o6r ui-1wfwxd8 ui-1bqaal ui-byyjgo ui-1h6gzvc ui-47corl"
      },
      3: {
        className: "ui-78zum5 ui-6s0dn4 ui-11twubx ui-jyslct ui-972fbf ui-1ejq31n ui-gfja2r ui-11pwa6s ui-1qhh985 ui-1sy0etr ui-yj58a3 ui-1b16gh4 ui-ln7xf2 ui-1wd3ewq ui-493x5y ui-17v7654 ui-b6dno7 ui-1lfpczk ui-1043rbw ui-1qx5ct2 ui-uxw1ft ui-15406qy ui-4wkmsb ui-7pq1vu ui-6tor67 ui-1k57tk5 ui-784prv ui-1t137rt ui-9v5kkp ui-1uczgqu ui-1725o6r ui-1wfwxd8 ui-1bqaal ui-ri19xs ui-byyjgo ui-1h6gzvc ui-47corl"
      }
    } as any)[((!!n as any) << (1 as any) as any) | ((!!i as any) << (0 as any) as any)],
    disabled: i,
    "aria-pressed": (e as any).isActive ? n : void 0,
    onPointerDown: Ri,
    onClick: (): any => (sn as any)(e, t, "button"),
    children: [(e as any).icon && ((m as any).jsx as any)(cs, {
      name: (e as any).icon,
      size: "xs",
      ...r,
      "aria-hidden": !0
    }), ((m as any).jsx as any)("span", {
      ...s,
      children: (e as any).label
    }), (e as any).shortcut ? ((m as any).jsx as any)("span", {
      ...o,
      children: (e as any).shortcut
    }) : null]
  });
}
function on(this: any, {
  visibleActions: e,
  ariaLabel: t,
  editor: n,
  direction: i,
  contentOverride: r
}: any): any {
  return (on as any).d = 2804215457, ((m as any).jsx as any)("fieldset", {
    ...({
      0: {
        className: "ui-78zum5 ui-6s0dn4 ui-137clkk ui-euugli ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b ui-1gyaoyw ui-178xt8z ui-13fuv20 ui-1ys8oop ui-s1s249 ui-32b0ac ui-1h48siu ui-so031l ui-1q0q8m5 ui-oll2yv ui-e0pwq ui-19ypqd9 ui-1jbi0el ui-1m7fhj7 ui-14cu5b6 ui-493x5y ui-14ndyrl ui-b6dno7 ui-1e7ydrk ui-87ps6o ui-979qle ui-11wthnw ui-1ja60sm ui-kebrot ui-1aquc0h ui-ykr0s4 ui-lzhlbq ui-1u6ievf"
      },
      1: {
        className: "ui-78zum5 ui-6s0dn4 ui-137clkk ui-euugli ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b ui-1gyaoyw ui-178xt8z ui-13fuv20 ui-1ys8oop ui-s1s249 ui-32b0ac ui-1h48siu ui-so031l ui-1q0q8m5 ui-oll2yv ui-e0pwq ui-19ypqd9 ui-1jbi0el ui-1m7fhj7 ui-14cu5b6 ui-493x5y ui-14ndyrl ui-b6dno7 ui-1e7ydrk ui-87ps6o ui-979qle ui-11wthnw ui-1ja60sm ui-hqbpk2 ui-1aquc0h ui-ykr0s4 ui-lzhlbq ui-1u6ievf"
      }
    } as any)[(((i as any) === ("above" as any)) as any) << (0 as any)],
    "aria-label": t,
    children: r ?? ((e as any).map as any)((s: any, o: any): any => {
      const l: any = (e as any)[(o as any) - (1 as any)]?.group,
        a: any = (o as any) > (0 as any) && ((s as any).group as any) !== (void 0 as any) && (l as any) !== (void 0 as any) && ((s as any).group as any) !== (l as any);
      return ((m as any).jsxs as any)((x as any).Fragment, {
        children: [a && ((m as any).jsx as any)("span", {
          className: "ui-kh2ocl ui-1i1rx1s ui-2lah0s ui-dpki88 ui-70c5fe ui-gefcol",
          "aria-hidden": !0
        }), ((m as any).jsx as any)(hs, {
          action: s,
          editor: n
        })]
      }, (s as any).key);
    })
  });
}
function ps(this: any, {
  options: e,
  contentOverride: t
}: any): any {
  (ps as any).d = 449837844;
  const {
      editor: n
    }: any = (Aa as any)("SelectionTooltip"),
    {
      actions: i,
      ariaLabel: r = "Text actions",
      shouldShow: s,
      offset: o = 8
    }: any = e,
    l: any = ((i as any).filter as any)((w: any): any => !(w as any).hidden),
    a: any = ((l as any).length as any) > (0 as any),
    u: any = (Wt as any)(s),
    c: any = ((x as any).useRef as any)(s),
    [d, h]: any = ((x as any).useState as any)(0);
  ((x as any).useLayoutEffect as any)((): any => {
    const w: any = (c as any).current;
    if ((c as any).current = s, (w as any) === (s as any) || !n || !a) return;
    const {
      selection: S
    }: any = (n as any).state;
    if (!(S instanceof H) || (S as any).empty) return;
    const T: any = {
        editor: n,
        from: (S as any).from,
        to: (S as any).to
      },
      M: any = w?.(T) ?? !0,
      $: any = s?.(T) ?? !0;
    (M as any) !== ($ as any) && (h as any)((E: any): any => (E as any) + (1 as any));
  }, [s, n, a]);
  const p: any = ((x as any).useCallback as any)(({
      editor: w,
      from: S,
      to: T
    }: any): any => !(((w as any).state as any).selection instanceof H) || (S as any) === (T as any) || !a ? !1 : (u as any).current ? ((u as any).current as any)({
      editor: w,
      from: S,
      to: T
    }) : !0, [a, u]),
    f: any = ((x as any).useCallback as any)((w: any): any => (p as any)(w) ? !(Ti as any)((w as any).editor) : !1, [p]),
    g: any = ((x as any).useCallback as any)((w: any): any => (p as any)(w) ? (Ti as any)((w as any).editor) : !1, [p]),
    k: any = ((x as any).useCallback as any)((): any => {
      if (!n) return null;
      const {
          head: w
        }: any = ((n as any).state as any).selection,
        S: any = (Je as any)((n as any).view, w, w);
      return {
        getBoundingClientRect: (): any => S,
        getClientRects: (): any => [S]
      };
    }, [n]);
  if (!n) return null;
  const b: any = `${a}-${o}-${d}`;
  return ((m as any).jsxs as any)((m as any).Fragment, {
    children: [((m as any).jsx as any)(rn, {
      pluginKey: "selectionTooltipAbove",
      editor: n,
      updateDelay: Ci,
      shouldShow: f,
      getReferencedVirtualElement: k,
      options: {
        placement: "top",
        offset: o
      },
      children: ((m as any).jsx as any)(on, {
        visibleActions: l,
        ariaLabel: r,
        editor: n,
        direction: "above",
        contentOverride: t
      })
    }, `selectionTooltipAbove-${b}`), ((m as any).jsx as any)(rn, {
      pluginKey: "selectionTooltipBelow",
      editor: n,
      updateDelay: Ci,
      shouldShow: g,
      getReferencedVirtualElement: k,
      options: {
        placement: "bottom",
        offset: o
      },
      children: ((m as any).jsx as any)(on, {
        visibleActions: l,
        ariaLabel: r,
        editor: n,
        direction: "below",
        contentOverride: t
      })
    }, `selectionTooltipBelow-${b}`)]
  });
}
function ln(this: any, e: any): any {
  const t: any = (((e as any).schema as any).marks as any).link;
  if (!t) return null;
  const {
    selection: n
  }: any = (e as any).state;
  if (!(n instanceof H)) return null;
  let i: any = null;
  return ((((e as any).state as any).doc as any).nodesBetween as any)((n as any).from, (n as any).to, (r: any, s: any): any => {
    if ((i as any) !== (null as any)) return !1;
    const o: any = (((r as any).marks as any).find as any)((u: any): any => ((u as any).type as any) === (t as any));
    if (!o) return !0;
    const l: any = (fo as any)(((((e as any).state as any).doc as any).resolve as any)(s), t),
      a: any = ((o as any).attrs as any).href;
    return i = {
      from: l?.from ?? s,
      to: l?.to ?? (s as any) + ((r as any).nodeSize as any),
      href: (typeof a as any) == ("string" as any) ? a : ""
    }, !1;
  }), i;
}
const ge: any = (typeof navigator as any) < ("u" as any) && ((/Mac|iP(hone|[oa]d)/ as any).test as any)((navigator as any).platform) ? "\u2318" : "Ctrl+",
  Ke: any = (ge as any) === ("\u2318" as any),
  Mi: any = [{
    mark: "bold",
    group: "text",
    label: "Bold",
    icon: "text-b",
    shortcut: `${ge}B`,
    keybinding: "Mod-b",
    toggle: (e: any): any => ((((((e as any).chain as any)() as any).toggleBold as any)() as any).run as any)()
  }, {
    mark: "italic",
    group: "text",
    label: "Italic",
    icon: "text-italic",
    shortcut: `${ge}I`,
    keybinding: "Mod-i",
    toggle: (e: any): any => ((((((e as any).chain as any)() as any).toggleItalic as any)() as any).run as any)()
  }, {
    mark: "underline",
    group: "text",
    label: "Underline",
    icon: ((m as any).jsx as any)(lr, {}),
    shortcut: `${ge}U`,
    keybinding: "Mod-u",
    toggle: (e: any): any => ((((((e as any).chain as any)() as any).toggleUnderline as any)() as any).run as any)()
  }, {
    mark: "strike",
    group: "text",
    label: "Strikethrough",
    icon: "text-strikethrough",
    shortcut: Ke ? "\u21E7\u2318X" : `${ge}Shift+X`,
    keybinding: "Mod-Shift-x",
    toggle: (e: any): any => ((((((e as any).chain as any)() as any).toggleStrike as any)() as any).run as any)()
  }, {
    mark: "link",
    group: "insert",
    label: "Link",
    icon: "link",
    isActive: (e: any): any => ((ln as any)(e) as any) !== (null as any)
  }, {
    mark: "orderedList",
    group: "insert",
    label: "Ordered list",
    icon: "list-ordered",
    shortcut: Ke ? "\u21E7\u23187" : `${ge}Shift+7`,
    toggle: (e: any): any => ((((((e as any).chain as any)() as any).toggleOrderedList as any)() as any).run as any)()
  }, {
    mark: "bulletList",
    group: "insert",
    label: "Bullet list",
    icon: "list-bullets",
    shortcut: Ke ? "\u21E7\u23188" : `${ge}Shift+8`,
    toggle: (e: any): any => ((((((e as any).chain as any)() as any).toggleBulletList as any)() as any).run as any)()
  }, {
    mark: "blockquote",
    group: "block",
    label: "Blockquote",
    icon: "quote",
    shortcut: Ke ? "\u21E7\u2318B" : `${ge}Shift+B`,
    toggle: (e: any): any => ((((((e as any).chain as any)() as any).toggleBlockquote as any)() as any).run as any)()
  }, {
    mark: "code",
    group: "block",
    label: "Inline code",
    icon: "text-c",
    shortcut: `${ge}E`,
    toggle: (e: any): any => ((((((e as any).chain as any)() as any).toggleCode as any)() as any).run as any)()
  }, {
    mark: "codeBlock",
    group: "block",
    label: "Code block",
    icon: "code",
    shortcut: Ke ? "\u2325\u2318C" : `${ge}Alt+C`,
    toggle: (e: any): any => ((((((e as any).chain as any)() as any).toggleCodeBlock as any)() as any).run as any)()
  }];
function fs(this: any, e: any, t: any, n: any): any {
  const i: any = (): any => {
    t?.();
  };
  ((e as any).on as any)("beforeTransaction", i);
  try {
    return (n as any)();
  } finally {
    ((e as any).off as any)("beforeTransaction", i);
  }
}
function zc(this: any, e: any, t: any, n: any): any {
  return (t as any).isEditable ? (fs as any)(t, n, (): any => (e as any)(t)) : !1;
}
function jc(this: any, {
  actions: e,
  onUserFormattingAction: t,
  openLinkEditor: n
}: any): any {
  const i: any = e ?? ((Mi as any).map as any)((r: any): any => (r as any).mark);
  return ((((Mi as any).filter as any)((r: any): any => ((i as any).includes as any)((r as any).mark) && (((r as any).mark as any) !== ("link" as any) || (n as any) !== (null as any))) as any).map as any)((r: any): any => {
    const s: any = (r as any).toggle;
    return (ds as any)({
      key: `format-${(r as any).mark}`,
      label: (r as any).label,
      icon: (r as any).icon,
      shortcut: (r as any).shortcut,
      keybinding: (r as any).keybinding,
      group: (r as any).group,
      presentation: "icon-only",
      isActive: (r as any).isActive ?? ((o: any): any => ((o as any).isActive as any)((r as any).mark)),
      execute: (o: any): any => s ? (zc as any)(s, o, t) : (o as any).isEditable && (n?.(o) ?? !1),
      selectionBehavior: "preserve"
    });
  });
}
function bn(this: any): any {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null
  };
}
var Ue: any = (bn as any)();
function ms(this: any, e: any): any {
  Ue = e;
}
var Qe: any = {
  exec: (): any => null
};
function j(this: any, e: any, t: any = ""): any {
  let n: any = (typeof e as any) == ("string" as any) ? e : (e as any).source;
  const i: any = {
    replace: (r: any, s: any): any => {
      let o: any = (typeof s as any) == ("string" as any) ? s : (s as any).source;
      return o = ((o as any).replace as any)((K as any).caret, "$1"), n = ((n as any).replace as any)(r, o), i;
    },
    getRegex: (): any => new (RegExp as any)(n, t)
  };
  return i;
}
var K: any = {
    codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
    outputLinkReplace: /\\([\[\]])/g,
    indentCodeCompensation: /^(\s+)(?:```)/,
    beginningSpace: /^\s+/,
    endingHash: /#$/,
    startingSpaceChar: /^ /,
    endingSpaceChar: / $/,
    nonSpaceChar: /[^ ]/,
    newLineCharGlobal: /\n/g,
    tabCharGlobal: /\t/g,
    multipleSpaceGlobal: /\s+/g,
    blankLine: /^[ \t]*$/,
    doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
    blockquoteStart: /^ {0,3}>/,
    blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
    blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
    listReplaceTabs: /^\t+/,
    listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
    listIsTask: /^\[[ xX]\] /,
    listReplaceTask: /^\[[ xX]\] +/,
    anyLine: /\n.*\n/,
    hrefBrackets: /^<(.*)>$/,
    tableDelimiter: /[:|]/,
    tableAlignChars: /^\||\| *$/g,
    tableRowBlankLine: /\n[ \t]*$/,
    tableAlignRight: /^ *-+: *$/,
    tableAlignCenter: /^ *:-+: *$/,
    tableAlignLeft: /^ *:-+ *$/,
    startATag: /^<a /i,
    endATag: /^<\/a>/i,
    startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
    endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
    startAngleBracket: /^</,
    endAngleBracket: />$/,
    pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
    unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
    escapeTest: /[&<>"']/,
    escapeReplace: /[&<>"']/g,
    escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
    escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
    unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
    caret: /(^|[^\[])\^/g,
    percentDecode: /%25/g,
    findPipe: /\|/g,
    splitPipe: / \|/,
    slashPipe: /\\\|/g,
    carriageReturn: /\r\n|\r/g,
    spaceLine: /^ +$/gm,
    notSpaceStart: /^\S*/,
    endingNewline: /\n$/,
    listItemRegex: (e: any): any => new (RegExp as any)(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
    nextBulletRegex: (e: any): any => new (RegExp as any)(`^ {0,${((Math as any).min as any)(3, (e as any) - (1 as any))}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
    hrRegex: (e: any): any => new (RegExp as any)(`^ {0,${((Math as any).min as any)(3, (e as any) - (1 as any))}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
    fencesBeginRegex: (e: any): any => new (RegExp as any)(`^ {0,${((Math as any).min as any)(3, (e as any) - (1 as any))}}(?:\`\`\`|~~~)`),
    headingBeginRegex: (e: any): any => new (RegExp as any)(`^ {0,${((Math as any).min as any)(3, (e as any) - (1 as any))}}#`),
    htmlBeginRegex: (e: any): any => new (RegExp as any)(`^ {0,${((Math as any).min as any)(3, (e as any) - (1 as any))}}<(?:[a-z].*>|!--)`, "i")
  },
  Ac: any = /^(?:[ \t]*(?:\n|$))+/,
  Nc: any = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
  Ic: any = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  tt: any = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  Lc: any = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  yn: any = /(?:[*+-]|\d{1,9}[.)])/,
  gs: any = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  ks: any = (((((((((((((((((j as any)(gs) as any).replace as any)(/bull/g, yn) as any).replace as any)(/blockCode/g, /(?: {4}| {0,3}\t)/) as any).replace as any)(/fences/g, / {0,3}(?:`{3,}|~{3,})/) as any).replace as any)(/blockquote/g, / {0,3}>/) as any).replace as any)(/heading/g, / {0,3}#{1,6}/) as any).replace as any)(/html/g, / {0,3}<[^\n>]+>\n/) as any).replace as any)(/\|table/g, "") as any).getRegex as any)(),
  Pc: any = (((((((((((((((((j as any)(gs) as any).replace as any)(/bull/g, yn) as any).replace as any)(/blockCode/g, /(?: {4}| {0,3}\t)/) as any).replace as any)(/fences/g, / {0,3}(?:`{3,}|~{3,})/) as any).replace as any)(/blockquote/g, / {0,3}>/) as any).replace as any)(/heading/g, / {0,3}#{1,6}/) as any).replace as any)(/html/g, / {0,3}<[^\n>]+>\n/) as any).replace as any)(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/) as any).getRegex as any)(),
  wn: any = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  qc: any = /^[^\n]+/,
  xn: any = /(?!\s*\])(?:\\.|[^\[\]\\])+/,
  _c: any = (((((((j as any)(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/) as any).replace as any)("label", xn) as any).replace as any)("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/) as any).getRegex as any)(),
  Oc: any = (((((j as any)(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/) as any).replace as any)(/bull/g, yn) as any).getRegex as any)(),
  zt: string = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
  vn: any = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
  Dc: any = (((((((((j as any)("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i") as any).replace as any)("comment", vn) as any).replace as any)("tag", zt) as any).replace as any)("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/) as any).getRegex as any)(),
  bs: any = (((((((((((((((((((((j as any)(wn) as any).replace as any)("hr", tt) as any).replace as any)("heading", " {0,3}#{1,6}(?:\\s|$)") as any).replace as any)("|lheading", "") as any).replace as any)("|table", "") as any).replace as any)("blockquote", " {0,3}>") as any).replace as any)("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n") as any).replace as any)("list", " {0,3}(?:[*+-]|1[.)]) ") as any).replace as any)("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)") as any).replace as any)("tag", zt) as any).getRegex as any)(),
  Hc: any = (((((j as any)(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/) as any).replace as any)("paragraph", bs) as any).getRegex as any)(),
  Sn: any = {
    blockquote: Hc,
    code: Nc,
    def: _c,
    fences: Ic,
    heading: Lc,
    hr: tt,
    html: Dc,
    lheading: ks,
    list: Oc,
    newline: Ac,
    paragraph: bs,
    table: Qe,
    text: qc
  },
  Ei: any = (((((((((((((((((((j as any)("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)") as any).replace as any)("hr", tt) as any).replace as any)("heading", " {0,3}#{1,6}(?:\\s|$)") as any).replace as any)("blockquote", " {0,3}>") as any).replace as any)("code", "(?: {4}| {0,3}	)[^\\n]") as any).replace as any)("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n") as any).replace as any)("list", " {0,3}(?:[*+-]|1[.)]) ") as any).replace as any)("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)") as any).replace as any)("tag", zt) as any).getRegex as any)(),
  Bc: any = {
    ...Sn,
    lheading: Pc,
    table: Ei,
    paragraph: (((((((((((((((((((((j as any)(wn) as any).replace as any)("hr", tt) as any).replace as any)("heading", " {0,3}#{1,6}(?:\\s|$)") as any).replace as any)("|lheading", "") as any).replace as any)("table", Ei) as any).replace as any)("blockquote", " {0,3}>") as any).replace as any)("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n") as any).replace as any)("list", " {0,3}(?:[*+-]|1[.)]) ") as any).replace as any)("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)") as any).replace as any)("tag", zt) as any).getRegex as any)()
  },
  Uc: any = {
    ...Sn,
    html: (((((((j as any)(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`) as any).replace as any)("comment", vn) as any).replace as any)(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b") as any).getRegex as any)(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: Qe,
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: (((((((((((((((((((((j as any)(wn) as any).replace as any)("hr", tt) as any).replace as any)("heading", ` *#{1,6} *[^
]`) as any).replace as any)("lheading", ks) as any).replace as any)("|table", "") as any).replace as any)("blockquote", " {0,3}>") as any).replace as any)("|fences", "") as any).replace as any)("|list", "") as any).replace as any)("|html", "") as any).replace as any)("|tag", "") as any).getRegex as any)()
  },
  Fc: any = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  Wc: any = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  ys: any = /^( {2,}|\\)\n(?!\s*$)/,
  Vc: any = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  jt: any = /[\p{P}\p{S}]/u,
  Cn: any = /[\s\p{P}\p{S}]/u,
  ws: any = /[^\s\p{P}\p{S}]/u,
  Kc: any = (((((j as any)(/^((?![*_])punctSpace)/, "u") as any).replace as any)(/punctSpace/g, Cn) as any).getRegex as any)(),
  xs: any = /(?!~)[\p{P}\p{S}]/u,
  Xc: any = /(?!~)[\s\p{P}\p{S}]/u,
  Gc: any = /(?:[^\s\p{P}\p{S}]|~)/u,
  Zc: any = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,
  vs: any = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,
  Qc: any = (((((j as any)(vs, "u") as any).replace as any)(/punct/g, jt) as any).getRegex as any)(),
  Yc: any = (((((j as any)(vs, "u") as any).replace as any)(/punct/g, xs) as any).getRegex as any)(),
  Ss: string = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",
  Jc: any = (((((((((j as any)(Ss, "gu") as any).replace as any)(/notPunctSpace/g, ws) as any).replace as any)(/punctSpace/g, Cn) as any).replace as any)(/punct/g, jt) as any).getRegex as any)(),
  ed: any = (((((((((j as any)(Ss, "gu") as any).replace as any)(/notPunctSpace/g, Gc) as any).replace as any)(/punctSpace/g, Xc) as any).replace as any)(/punct/g, xs) as any).getRegex as any)(),
  td: any = (((((((((j as any)("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu") as any).replace as any)(/notPunctSpace/g, ws) as any).replace as any)(/punctSpace/g, Cn) as any).replace as any)(/punct/g, jt) as any).getRegex as any)(),
  nd: any = (((((j as any)(/\\(punct)/, "gu") as any).replace as any)(/punct/g, jt) as any).getRegex as any)(),
  id: any = (((((((j as any)(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/) as any).replace as any)("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/) as any).replace as any)("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/) as any).getRegex as any)(),
  rd: any = (((((j as any)(vn) as any).replace as any)("(?:-->|$)", "-->") as any).getRegex as any)(),
  sd: any = (((((((j as any)("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>") as any).replace as any)("comment", rd) as any).replace as any)("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/) as any).getRegex as any)(),
  Tt: any = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,
  od: any = (((((((((j as any)(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/) as any).replace as any)("label", Tt) as any).replace as any)("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/) as any).replace as any)("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/) as any).getRegex as any)(),
  Cs: any = (((((((j as any)(/^!?\[(label)\]\[(ref)\]/) as any).replace as any)("label", Tt) as any).replace as any)("ref", xn) as any).getRegex as any)(),
  Ts: any = (((((j as any)(/^!?\[(ref)\](?:\[\])?/) as any).replace as any)("ref", xn) as any).getRegex as any)(),
  ld: any = (((((((j as any)("reflink|nolink(?!\\()", "g") as any).replace as any)("reflink", Cs) as any).replace as any)("nolink", Ts) as any).getRegex as any)(),
  Tn: any = {
    _backpedal: Qe,
    anyPunctuation: nd,
    autolink: id,
    blockSkip: Zc,
    br: ys,
    code: Wc,
    del: Qe,
    emStrongLDelim: Qc,
    emStrongRDelimAst: Jc,
    emStrongRDelimUnd: td,
    escape: Fc,
    link: od,
    nolink: Ts,
    punctuation: Kc,
    reflink: Cs,
    reflinkSearch: ld,
    tag: sd,
    text: Vc,
    url: Qe
  },
  ad: any = {
    ...Tn,
    link: (((((j as any)(/^!?\[(label)\]\((.*?)\)/) as any).replace as any)("label", Tt) as any).getRegex as any)(),
    reflink: (((((j as any)(/^!?\[(label)\]\s*\[([^\]]*)\]/) as any).replace as any)("label", Tt) as any).getRegex as any)()
  },
  an: any = {
    ...Tn,
    emStrongRDelimAst: ed,
    emStrongLDelim: Yc,
    url: (((((j as any)(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i") as any).replace as any)("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/) as any).getRegex as any)(),
    _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
  },
  ud: any = {
    ...an,
    br: (((((j as any)(ys) as any).replace as any)("{2,}", "*") as any).getRegex as any)(),
    text: (((((((j as any)((an as any).text) as any).replace as any)("\\b_", "\\b_| {2,}\\n") as any).replace as any)(/\{2,\}/g, "*") as any).getRegex as any)()
  },
  mt: any = {
    normal: Sn,
    gfm: Bc,
    pedantic: Uc
  },
  Xe: any = {
    normal: Tn,
    gfm: an,
    breaks: ud,
    pedantic: ad
  },
  cd: any = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  },
  $i: any = (e: any): any => (cd as any)[e];
function ke(this: any, e: any, t: any): any {
  if (t) {
    if ((((K as any).escapeTest as any).test as any)(e)) return ((e as any).replace as any)((K as any).escapeReplace, $i);
  } else if ((((K as any).escapeTestNoEncode as any).test as any)(e)) return ((e as any).replace as any)((K as any).escapeReplaceNoEncode, $i);
  return e;
}
function zi(this: any, e: any): any {
  try {
    e = (((encodeURI as any)(e) as any).replace as any)((K as any).percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function ji(this: any, e: any, t: any): any {
  const n: any = ((e as any).replace as any)((K as any).findPipe, (s: any, o: any, l: any): any => {
      let a: any = !1,
        u: any = o;
      for (; (--u as any) >= (0 as any) && ((l as any)[u] as any) === ("\\" as any);) a = !a;
      return a ? "|" : " |";
    }),
    i: any = ((n as any).split as any)((K as any).splitPipe);
  let r: any = 0;
  if ((((i as any)[0] as any).trim as any)() || ((i as any).shift as any)(), ((i as any).length as any) > (0 as any) && !((i as any).at as any)(-1)?.trim() && ((i as any).pop as any)(), t) if (((i as any).length as any) > (t as any)) ((i as any).splice as any)(t);else for (; ((i as any).length as any) < (t as any);) ((i as any).push as any)("");
  for (; (r as any) < ((i as any).length as any); r++) (i as any)[r] = (((((i as any)[r] as any).trim as any)() as any).replace as any)((K as any).slashPipe, "|");
  return i;
}
function Ge(this: any, e: any, t: any, n: any): any {
  const i: any = (e as any).length;
  if ((i as any) === (0 as any)) return "";
  let r: any = 0;
  for (; (r as any) < (i as any) && (((e as any).charAt as any)(((i as any) - (r as any) as any) - (1 as any)) as any) === (t as any);) r++;
  return ((e as any).slice as any)(0, (i as any) - (r as any));
}
function dd(this: any, e: any, t: any): any {
  if ((((e as any).indexOf as any)((t as any)[1]) as any) === (-1 as any)) return -1;
  let n: any = 0;
  for (let i: any = 0; (i as any) < ((e as any).length as any); i++) if (((e as any)[i] as any) === ("\\" as any)) i++;else if (((e as any)[i] as any) === ((t as any)[0] as any)) n++;else if (((e as any)[i] as any) === ((t as any)[1] as any) && (n--, (n as any) < (0 as any))) return i;
  return (n as any) > (0 as any) ? -2 : -1;
}
function Ai(this: any, e: any, t: any, n: any, i: any, r: any): any {
  const s: any = (t as any).href,
    o: any = (t as any).title || null,
    l: any = (((e as any)[1] as any).replace as any)(((r as any).other as any).outputLinkReplace, "$1");
  ((i as any).state as any).inLink = !0;
  const a: any = {
    type: ((((e as any)[0] as any).charAt as any)(0) as any) === ("!" as any) ? "image" : "link",
    raw: n,
    href: s,
    title: o,
    text: l,
    tokens: ((i as any).inlineTokens as any)(l)
  };
  return ((i as any).state as any).inLink = !1, a;
}
function hd(this: any, e: any, t: any, n: any): any {
  const i: any = ((e as any).match as any)(((n as any).other as any).indentCodeCompensation);
  if ((i as any) === (null as any)) return t;
  const r: any = (i as any)[1];
  return ((((((t as any).split as any)(`
`) as any).map as any)((s: any): any => {
    const o: any = ((s as any).match as any)(((n as any).other as any).beginningSpace);
    if ((o as any) === (null as any)) return s;
    const [l]: any = o;
    return ((l as any).length as any) >= ((r as any).length as any) ? ((s as any).slice as any)((r as any).length) : s;
  }) as any).join as any)(`
`);
}
var Rt: any = class {
    [key: string]: any;
    options: any;
    rules: any;
    lexer: any;
    constructor(e: any) {
      (this as any).options = e || Ue;
    }
    space(e: any): any {
      const t: any = (((((this as any).rules as any).block as any).newline as any).exec as any)(e);
      if (t && (((t as any)[0] as any).length as any) > (0 as any)) return {
        type: "space",
        raw: (t as any)[0]
      };
    }
    code(e: any): any {
      const t: any = (((((this as any).rules as any).block as any).code as any).exec as any)(e);
      if (t) {
        const n: any = (((t as any)[0] as any).replace as any)((((this as any).rules as any).other as any).codeRemoveIndent, "");
        return {
          type: "code",
          raw: (t as any)[0],
          codeBlockStyle: "indented",
          text: ((this as any).options as any).pedantic ? n : (Ge as any)(n, `
`)
        };
      }
    }
    fences(e: any): any {
      const t: any = (((((this as any).rules as any).block as any).fences as any).exec as any)(e);
      if (t) {
        const n: any = (t as any)[0],
          i: any = (hd as any)(n, (t as any)[3] || "", (this as any).rules);
        return {
          type: "code",
          raw: n,
          lang: (t as any)[2] ? (((((t as any)[2] as any).trim as any)() as any).replace as any)((((this as any).rules as any).inline as any).anyPunctuation, "$1") : (t as any)[2],
          text: i
        };
      }
    }
    heading(e: any): any {
      const t: any = (((((this as any).rules as any).block as any).heading as any).exec as any)(e);
      if (t) {
        let n: any = (((t as any)[2] as any).trim as any)();
        if ((((((this as any).rules as any).other as any).endingHash as any).test as any)(n)) {
          const i: any = (Ge as any)(n, "#");
          (((this as any).options as any).pedantic || !i || (((((this as any).rules as any).other as any).endingSpaceChar as any).test as any)(i)) && (n = ((i as any).trim as any)());
        }
        return {
          type: "heading",
          raw: (t as any)[0],
          depth: ((t as any)[1] as any).length,
          text: n,
          tokens: (((this as any).lexer as any).inline as any)(n)
        };
      }
    }
    hr(e: any): any {
      const t: any = (((((this as any).rules as any).block as any).hr as any).exec as any)(e);
      if (t) return {
        type: "hr",
        raw: (Ge as any)((t as any)[0], `
`)
      };
    }
    blockquote(e: any): any {
      const t: any = (((((this as any).rules as any).block as any).blockquote as any).exec as any)(e);
      if (t) {
        let n: any = (((Ge as any)((t as any)[0], `
`) as any).split as any)(`
`),
          i: any = "",
          r: any = "";
        const s: any = [];
        for (; ((n as any).length as any) > (0 as any);) {
          let o: any = !1;
          const l: any = [];
          let a: any;
          for (a = 0; (a as any) < ((n as any).length as any); a++) if ((((((this as any).rules as any).other as any).blockquoteStart as any).test as any)((n as any)[a])) ((l as any).push as any)((n as any)[a]), o = !0;else if (!o) ((l as any).push as any)((n as any)[a]);else break;
          n = ((n as any).slice as any)(a);
          const u: any = ((l as any).join as any)(`
`),
            c: any = ((((u as any).replace as any)((((this as any).rules as any).other as any).blockquoteSetextReplace, `
    $1`) as any).replace as any)((((this as any).rules as any).other as any).blockquoteSetextReplace2, "");
          i = i ? `${i}
${u}` : u, r = r ? `${r}
${c}` : c;
          const d: any = (((this as any).lexer as any).state as any).top;
          if ((((this as any).lexer as any).state as any).top = !0, (((this as any).lexer as any).blockTokens as any)(c, s, !0), (((this as any).lexer as any).state as any).top = d, ((n as any).length as any) === (0 as any)) break;
          const h: any = ((s as any).at as any)(-1);
          if ((h?.type as any) === ("code" as any)) break;
          if ((h?.type as any) === ("blockquote" as any)) {
            const p: any = h,
              f: any = (((p as any).raw as any) + (`
` as any) as any) + (((n as any).join as any)(`
`) as any),
              g: any = ((this as any).blockquote as any)(f);
            (s as any)[((s as any).length as any) - (1 as any)] = g, i = (((i as any).substring as any)(0, ((i as any).length as any) - (((p as any).raw as any).length as any)) as any) + ((g as any).raw as any), r = (((r as any).substring as any)(0, ((r as any).length as any) - (((p as any).text as any).length as any)) as any) + ((g as any).text as any);
            break;
          } else if ((h?.type as any) === ("list" as any)) {
            const p: any = h,
              f: any = (((p as any).raw as any) + (`
` as any) as any) + (((n as any).join as any)(`
`) as any),
              g: any = ((this as any).list as any)(f);
            (s as any)[((s as any).length as any) - (1 as any)] = g, i = (((i as any).substring as any)(0, ((i as any).length as any) - (((h as any).raw as any).length as any)) as any) + ((g as any).raw as any), r = (((r as any).substring as any)(0, ((r as any).length as any) - (((p as any).raw as any).length as any)) as any) + ((g as any).raw as any), n = ((((f as any).substring as any)(((((s as any).at as any)(-1) as any).raw as any).length) as any).split as any)(`
`);
            continue;
          }
        }
        return {
          type: "blockquote",
          raw: i,
          tokens: s,
          text: r
        };
      }
    }
    list(e: any): any {
      let t: any = (((((this as any).rules as any).block as any).list as any).exec as any)(e);
      if (t) {
        let n: any = (((t as any)[1] as any).trim as any)();
        const i: any = ((n as any).length as any) > (1 as any),
          r: any = {
            type: "list",
            raw: "",
            ordered: i,
            start: i ? +((n as any).slice as any)(0, -1) : "",
            loose: !1,
            items: []
          };
        n = i ? `\\d{1,9}\\${((n as any).slice as any)(-1)}` : `\\${n}`, ((this as any).options as any).pedantic && (n = i ? n : "[*+-]");
        const s: any = ((((this as any).rules as any).other as any).listItemRegex as any)(n);
        let o: any = !1;
        for (; e;) {
          let a: any = !1,
            u: any = "",
            c: any = "";
          if (!(t = ((s as any).exec as any)(e)) || (((((this as any).rules as any).block as any).hr as any).test as any)(e)) break;
          u = (t as any)[0], e = ((e as any).substring as any)((u as any).length);
          let d: any = ((((((t as any)[2] as any).split as any)(`
`, 1) as any)[0] as any).replace as any)((((this as any).rules as any).other as any).listReplaceTabs, (b: any): any => ((" " as any).repeat as any)((3 as any) * ((b as any).length as any))),
            h: any = (((e as any).split as any)(`
`, 1) as any)[0],
            p: any = !((d as any).trim as any)(),
            f: any = 0;
          if (((this as any).options as any).pedantic ? (f = 2, c = ((d as any).trimStart as any)()) : p ? f = (((t as any)[1] as any).length as any) + (1 as any) : (f = (((t as any)[2] as any).search as any)((((this as any).rules as any).other as any).nonSpaceChar), f = (f as any) > (4 as any) ? 1 : f, c = ((d as any).slice as any)(f), f += ((t as any)[1] as any).length), p && (((((this as any).rules as any).other as any).blankLine as any).test as any)(h) && (u += (h as any) + (`
` as any), e = ((e as any).substring as any)(((h as any).length as any) + (1 as any)), a = !0), !a) {
            const b: any = ((((this as any).rules as any).other as any).nextBulletRegex as any)(f),
              w: any = ((((this as any).rules as any).other as any).hrRegex as any)(f),
              S: any = ((((this as any).rules as any).other as any).fencesBeginRegex as any)(f),
              T: any = ((((this as any).rules as any).other as any).headingBeginRegex as any)(f),
              M: any = ((((this as any).rules as any).other as any).htmlBeginRegex as any)(f);
            for (; e;) {
              const $: any = (((e as any).split as any)(`
`, 1) as any)[0];
              let E: any;
              if (h = $, ((this as any).options as any).pedantic ? (h = ((h as any).replace as any)((((this as any).rules as any).other as any).listReplaceNesting, "  "), E = h) : E = ((h as any).replace as any)((((this as any).rules as any).other as any).tabCharGlobal, "    "), ((S as any).test as any)(h) || ((T as any).test as any)(h) || ((M as any).test as any)(h) || ((b as any).test as any)(h) || ((w as any).test as any)(h)) break;
              if ((((E as any).search as any)((((this as any).rules as any).other as any).nonSpaceChar) as any) >= (f as any) || !((h as any).trim as any)()) c += (`
` as any) + (((E as any).slice as any)(f) as any);else {
                if (p || (((((d as any).replace as any)((((this as any).rules as any).other as any).tabCharGlobal, "    ") as any).search as any)((((this as any).rules as any).other as any).nonSpaceChar) as any) >= (4 as any) || ((S as any).test as any)(d) || ((T as any).test as any)(d) || ((w as any).test as any)(d)) break;
                c += (`
` as any) + (h as any);
              }
              !p && !((h as any).trim as any)() && (p = !0), u += ($ as any) + (`
` as any), e = ((e as any).substring as any)((($ as any).length as any) + (1 as any)), d = ((E as any).slice as any)(f);
            }
          }
          (r as any).loose || (o ? (r as any).loose = !0 : (((((this as any).rules as any).other as any).doubleBlankLine as any).test as any)(u) && (o = !0));
          let g: any = null,
            k: any;
          ((this as any).options as any).gfm && (g = (((((this as any).rules as any).other as any).listIsTask as any).exec as any)(c), g && (k = ((g as any)[0] as any) !== ("[ ] " as any), c = ((c as any).replace as any)((((this as any).rules as any).other as any).listReplaceTask, ""))), (((r as any).items as any).push as any)({
            type: "list_item",
            raw: u,
            task: !!g,
            checked: k,
            loose: !1,
            text: c,
            tokens: []
          }), (r as any).raw += u;
        }
        const l: any = (((r as any).items as any).at as any)(-1);
        if (l) (l as any).raw = (((l as any).raw as any).trimEnd as any)(), (l as any).text = (((l as any).text as any).trimEnd as any)();else return;
        (r as any).raw = (((r as any).raw as any).trimEnd as any)();
        for (let a: any = 0; (a as any) < (((r as any).items as any).length as any); a++) if ((((this as any).lexer as any).state as any).top = !1, (((r as any).items as any)[a] as any).tokens = (((this as any).lexer as any).blockTokens as any)((((r as any).items as any)[a] as any).text, []), !(r as any).loose) {
          const u: any = (((((r as any).items as any)[a] as any).tokens as any).filter as any)((d: any): any => ((d as any).type as any) === ("space" as any)),
            c: any = ((u as any).length as any) > (0 as any) && ((u as any).some as any)((d: any): any => (((((this as any).rules as any).other as any).anyLine as any).test as any)((d as any).raw));
          (r as any).loose = c;
        }
        if ((r as any).loose) for (let a: any = 0; (a as any) < (((r as any).items as any).length as any); a++) (((r as any).items as any)[a] as any).loose = !0;
        return r;
      }
    }
    html(e: any): any {
      const t: any = (((((this as any).rules as any).block as any).html as any).exec as any)(e);
      if (t) return {
        type: "html",
        block: !0,
        raw: (t as any)[0],
        pre: ((t as any)[1] as any) === ("pre" as any) || ((t as any)[1] as any) === ("script" as any) || ((t as any)[1] as any) === ("style" as any),
        text: (t as any)[0]
      };
    }
    def(e: any): any {
      const t: any = (((((this as any).rules as any).block as any).def as any).exec as any)(e);
      if (t) {
        const n: any = (((((t as any)[1] as any).toLowerCase as any)() as any).replace as any)((((this as any).rules as any).other as any).multipleSpaceGlobal, " "),
          i: any = (t as any)[2] ? (((((t as any)[2] as any).replace as any)((((this as any).rules as any).other as any).hrefBrackets, "$1") as any).replace as any)((((this as any).rules as any).inline as any).anyPunctuation, "$1") : "",
          r: any = (t as any)[3] ? (((((t as any)[3] as any).substring as any)(1, (((t as any)[3] as any).length as any) - (1 as any)) as any).replace as any)((((this as any).rules as any).inline as any).anyPunctuation, "$1") : (t as any)[3];
        return {
          type: "def",
          tag: n,
          raw: (t as any)[0],
          href: i,
          title: r
        };
      }
    }
    table(e: any): any {
      const t: any = (((((this as any).rules as any).block as any).table as any).exec as any)(e);
      if (!t || !(((((this as any).rules as any).other as any).tableDelimiter as any).test as any)((t as any)[2])) return;
      const n: any = (ji as any)((t as any)[1]),
        i: any = (((((t as any)[2] as any).replace as any)((((this as any).rules as any).other as any).tableAlignChars, "") as any).split as any)("|"),
        r: any = (t as any)[3]?.trim() ? (((((t as any)[3] as any).replace as any)((((this as any).rules as any).other as any).tableRowBlankLine, "") as any).split as any)(`
`) : [],
        s: any = {
          type: "table",
          raw: (t as any)[0],
          header: [],
          align: [],
          rows: []
        };
      if (((n as any).length as any) === ((i as any).length as any)) {
        for (const o of i) (((((this as any).rules as any).other as any).tableAlignRight as any).test as any)(o) ? (((s as any).align as any).push as any)("right") : (((((this as any).rules as any).other as any).tableAlignCenter as any).test as any)(o) ? (((s as any).align as any).push as any)("center") : (((((this as any).rules as any).other as any).tableAlignLeft as any).test as any)(o) ? (((s as any).align as any).push as any)("left") : (((s as any).align as any).push as any)(null);
        for (let o: any = 0; (o as any) < ((n as any).length as any); o++) (((s as any).header as any).push as any)({
          text: (n as any)[o],
          tokens: (((this as any).lexer as any).inline as any)((n as any)[o]),
          header: !0,
          align: ((s as any).align as any)[o]
        });
        for (const o of r) (((s as any).rows as any).push as any)((((ji as any)(o, ((s as any).header as any).length) as any).map as any)((l: any, a: any): any => ({
          text: l,
          tokens: (((this as any).lexer as any).inline as any)(l),
          header: !1,
          align: ((s as any).align as any)[a]
        })));
        return s;
      }
    }
    lheading(e: any): any {
      const t: any = (((((this as any).rules as any).block as any).lheading as any).exec as any)(e);
      if (t) return {
        type: "heading",
        raw: (t as any)[0],
        depth: ((((t as any)[2] as any).charAt as any)(0) as any) === ("=" as any) ? 1 : 2,
        text: (t as any)[1],
        tokens: (((this as any).lexer as any).inline as any)((t as any)[1])
      };
    }
    paragraph(e: any): any {
      const t: any = (((((this as any).rules as any).block as any).paragraph as any).exec as any)(e);
      if (t) {
        const n: any = ((((t as any)[1] as any).charAt as any)((((t as any)[1] as any).length as any) - (1 as any)) as any) === (`
` as any) ? (((t as any)[1] as any).slice as any)(0, -1) : (t as any)[1];
        return {
          type: "paragraph",
          raw: (t as any)[0],
          text: n,
          tokens: (((this as any).lexer as any).inline as any)(n)
        };
      }
    }
    text(e: any): any {
      const t: any = (((((this as any).rules as any).block as any).text as any).exec as any)(e);
      if (t) return {
        type: "text",
        raw: (t as any)[0],
        text: (t as any)[0],
        tokens: (((this as any).lexer as any).inline as any)((t as any)[0])
      };
    }
    escape(e: any): any {
      const t: any = (((((this as any).rules as any).inline as any).escape as any).exec as any)(e);
      if (t) return {
        type: "escape",
        raw: (t as any)[0],
        text: (t as any)[1]
      };
    }
    tag(e: any): any {
      const t: any = (((((this as any).rules as any).inline as any).tag as any).exec as any)(e);
      if (t) return !(((this as any).lexer as any).state as any).inLink && (((((this as any).rules as any).other as any).startATag as any).test as any)((t as any)[0]) ? (((this as any).lexer as any).state as any).inLink = !0 : (((this as any).lexer as any).state as any).inLink && (((((this as any).rules as any).other as any).endATag as any).test as any)((t as any)[0]) && ((((this as any).lexer as any).state as any).inLink = !1), !(((this as any).lexer as any).state as any).inRawBlock && (((((this as any).rules as any).other as any).startPreScriptTag as any).test as any)((t as any)[0]) ? (((this as any).lexer as any).state as any).inRawBlock = !0 : (((this as any).lexer as any).state as any).inRawBlock && (((((this as any).rules as any).other as any).endPreScriptTag as any).test as any)((t as any)[0]) && ((((this as any).lexer as any).state as any).inRawBlock = !1), {
        type: "html",
        raw: (t as any)[0],
        inLink: (((this as any).lexer as any).state as any).inLink,
        inRawBlock: (((this as any).lexer as any).state as any).inRawBlock,
        block: !1,
        text: (t as any)[0]
      };
    }
    link(e: any): any {
      const t: any = (((((this as any).rules as any).inline as any).link as any).exec as any)(e);
      if (t) {
        const n: any = (((t as any)[2] as any).trim as any)();
        if (!((this as any).options as any).pedantic && (((((this as any).rules as any).other as any).startAngleBracket as any).test as any)(n)) {
          if (!(((((this as any).rules as any).other as any).endAngleBracket as any).test as any)(n)) return;
          const s: any = (Ge as any)(((n as any).slice as any)(0, -1), "\\");
          if (((((n as any).length as any) - ((s as any).length as any) as any) % (2 as any) as any) === (0 as any)) return;
        } else {
          const s: any = (dd as any)((t as any)[2], "()");
          if ((s as any) === (-2 as any)) return;
          if ((s as any) > (-1 as any)) {
            const l: any = (((((((t as any)[0] as any).indexOf as any)("!") as any) === (0 as any) ? 5 : 4) as any) + (((t as any)[1] as any).length as any) as any) + (s as any);
            (t as any)[2] = (((t as any)[2] as any).substring as any)(0, s), (t as any)[0] = (((((t as any)[0] as any).substring as any)(0, l) as any).trim as any)(), (t as any)[3] = "";
          }
        }
        let i: any = (t as any)[2],
          r: any = "";
        if (((this as any).options as any).pedantic) {
          const s: any = (((((this as any).rules as any).other as any).pedanticHrefTitle as any).exec as any)(i);
          s && (i = (s as any)[1], r = (s as any)[3]);
        } else r = (t as any)[3] ? (((t as any)[3] as any).slice as any)(1, -1) : "";
        return i = ((i as any).trim as any)(), (((((this as any).rules as any).other as any).startAngleBracket as any).test as any)(i) && (((this as any).options as any).pedantic && !(((((this as any).rules as any).other as any).endAngleBracket as any).test as any)(n) ? i = ((i as any).slice as any)(1) : i = ((i as any).slice as any)(1, -1)), (Ai as any)(t, {
          href: i && ((i as any).replace as any)((((this as any).rules as any).inline as any).anyPunctuation, "$1"),
          title: r && ((r as any).replace as any)((((this as any).rules as any).inline as any).anyPunctuation, "$1")
        }, (t as any)[0], (this as any).lexer, (this as any).rules);
      }
    }
    reflink(e: any, t: any): any {
      let n: any;
      if ((n = (((((this as any).rules as any).inline as any).reflink as any).exec as any)(e)) || (n = (((((this as any).rules as any).inline as any).nolink as any).exec as any)(e))) {
        const i: any = ((((n as any)[2] || (n as any)[1]) as any).replace as any)((((this as any).rules as any).other as any).multipleSpaceGlobal, " "),
          r: any = (t as any)[((i as any).toLowerCase as any)()];
        if (!r) {
          const s: any = (((n as any)[0] as any).charAt as any)(0);
          return {
            type: "text",
            raw: s,
            text: s
          };
        }
        return (Ai as any)(n, r, (n as any)[0], (this as any).lexer, (this as any).rules);
      }
    }
    emStrong(e: any, t: any, n: any = ""): any {
      let i: any = (((((this as any).rules as any).inline as any).emStrongLDelim as any).exec as any)(e);
      if (!i || (i as any)[3] && ((n as any).match as any)((((this as any).rules as any).other as any).unicodeAlphaNumeric)) return;
      if (!((i as any)[1] || (i as any)[2] || "") || !n || (((((this as any).rules as any).inline as any).punctuation as any).exec as any)(n)) {
        const s: any = (([...(i as any)[0]] as any).length as any) - (1 as any);
        let o: any,
          l: any,
          a: any = s,
          u: any = 0;
        const c: any = (((i as any)[0] as any)[0] as any) === ("*" as any) ? (((this as any).rules as any).inline as any).emStrongRDelimAst : (((this as any).rules as any).inline as any).emStrongRDelimUnd;
        for ((c as any).lastIndex = 0, t = ((t as any).slice as any)(((-1 as any) * ((e as any).length as any) as any) + (s as any)); ((i = ((c as any).exec as any)(t)) as any) != (null as any);) {
          if (o = (i as any)[1] || (i as any)[2] || (i as any)[3] || (i as any)[4] || (i as any)[5] || (i as any)[6], !o) continue;
          if (l = ([...o] as any).length, (i as any)[3] || (i as any)[4]) {
            a += l;
            continue;
          } else if (((i as any)[5] || (i as any)[6]) && (s as any) % (3 as any) && !(((s as any) + (l as any) as any) % (3 as any))) {
            u += l;
            continue;
          }
          if (a -= l, (a as any) > (0 as any)) continue;
          l = ((Math as any).min as any)(l, ((l as any) + (a as any) as any) + (u as any));
          const d: any = (([...(i as any)[0]] as any)[0] as any).length,
            h: any = ((e as any).slice as any)(0, (((s as any) + ((i as any).index as any) as any) + (d as any) as any) + (l as any));
          if ((((Math as any).min as any)(s, l) as any) % (2 as any)) {
            const f: any = ((h as any).slice as any)(1, -1);
            return {
              type: "em",
              raw: h,
              text: f,
              tokens: (((this as any).lexer as any).inlineTokens as any)(f)
            };
          }
          const p: any = ((h as any).slice as any)(2, -2);
          return {
            type: "strong",
            raw: h,
            text: p,
            tokens: (((this as any).lexer as any).inlineTokens as any)(p)
          };
        }
      }
    }
    codespan(e: any): any {
      const t: any = (((((this as any).rules as any).inline as any).code as any).exec as any)(e);
      if (t) {
        let n: any = (((t as any)[2] as any).replace as any)((((this as any).rules as any).other as any).newLineCharGlobal, " ");
        const i: any = (((((this as any).rules as any).other as any).nonSpaceChar as any).test as any)(n),
          r: any = (((((this as any).rules as any).other as any).startingSpaceChar as any).test as any)(n) && (((((this as any).rules as any).other as any).endingSpaceChar as any).test as any)(n);
        return i && r && (n = ((n as any).substring as any)(1, ((n as any).length as any) - (1 as any))), {
          type: "codespan",
          raw: (t as any)[0],
          text: n
        };
      }
    }
    br(e: any): any {
      const t: any = (((((this as any).rules as any).inline as any).br as any).exec as any)(e);
      if (t) return {
        type: "br",
        raw: (t as any)[0]
      };
    }
    del(e: any): any {
      const t: any = (((((this as any).rules as any).inline as any).del as any).exec as any)(e);
      if (t) return {
        type: "del",
        raw: (t as any)[0],
        text: (t as any)[2],
        tokens: (((this as any).lexer as any).inlineTokens as any)((t as any)[2])
      };
    }
    autolink(e: any): any {
      const t: any = (((((this as any).rules as any).inline as any).autolink as any).exec as any)(e);
      if (t) {
        let n: any, i: any;
        return ((t as any)[2] as any) === ("@" as any) ? (n = (t as any)[1], i = ("mailto:" as any) + (n as any)) : (n = (t as any)[1], i = n), {
          type: "link",
          raw: (t as any)[0],
          text: n,
          href: i,
          tokens: [{
            type: "text",
            raw: n,
            text: n
          }]
        };
      }
    }
    url(e: any): any {
      let t: any;
      if (t = (((((this as any).rules as any).inline as any).url as any).exec as any)(e)) {
        let n: any, i: any;
        if (((t as any)[2] as any) === ("@" as any)) n = (t as any)[0], i = ("mailto:" as any) + (n as any);else {
          let r: any;
          do r = (t as any)[0], (t as any)[0] = (((((this as any).rules as any).inline as any)._backpedal as any).exec as any)((t as any)[0])?.[0] ?? ""; while ((r as any) !== ((t as any)[0] as any));
          n = (t as any)[0], ((t as any)[1] as any) === ("www." as any) ? i = ("http://" as any) + ((t as any)[0] as any) : i = (t as any)[0];
        }
        return {
          type: "link",
          raw: (t as any)[0],
          text: n,
          href: i,
          tokens: [{
            type: "text",
            raw: n,
            text: n
          }]
        };
      }
    }
    inlineText(e: any): any {
      const t: any = (((((this as any).rules as any).inline as any).text as any).exec as any)(e);
      if (t) {
        const n: any = (((this as any).lexer as any).state as any).inRawBlock;
        return {
          type: "text",
          raw: (t as any)[0],
          text: (t as any)[0],
          escaped: n
        };
      }
    }
  },
  Ee: any = class un {
    [key: string]: any;
    tokens: any;
    options: any;
    state: any;
    tokenizer: any;
    inlineQueue: any;
    constructor(t: any) {
      (this as any).tokens = [], ((this as any).tokens as any).links = ((Object as any).create as any)(null), (this as any).options = t || Ue, ((this as any).options as any).tokenizer = ((this as any).options as any).tokenizer || new (Rt as any)(), (this as any).tokenizer = ((this as any).options as any).tokenizer, ((this as any).tokenizer as any).options = (this as any).options, ((this as any).tokenizer as any).lexer = this, (this as any).inlineQueue = [], (this as any).state = {
        inLink: !1,
        inRawBlock: !1,
        top: !0
      };
      const n: any = {
        other: K,
        block: (mt as any).normal,
        inline: (Xe as any).normal
      };
      ((this as any).options as any).pedantic ? ((n as any).block = (mt as any).pedantic, (n as any).inline = (Xe as any).pedantic) : ((this as any).options as any).gfm && ((n as any).block = (mt as any).gfm, ((this as any).options as any).breaks ? (n as any).inline = (Xe as any).breaks : (n as any).inline = (Xe as any).gfm), ((this as any).tokenizer as any).rules = n;
    }
    static get rules(): any {
      return {
        block: mt,
        inline: Xe
      };
    }
    static lex(t: any, n: any): any {
      return ((new (un as any)(n) as any).lex as any)(t);
    }
    static lexInline(t: any, n: any): any {
      return ((new (un as any)(n) as any).inlineTokens as any)(t);
    }
    lex(t: any): any {
      t = ((t as any).replace as any)((K as any).carriageReturn, `
`), ((this as any).blockTokens as any)(t, (this as any).tokens);
      for (let n: any = 0; (n as any) < (((this as any).inlineQueue as any).length as any); n++) {
        const i: any = ((this as any).inlineQueue as any)[n];
        ((this as any).inlineTokens as any)((i as any).src, (i as any).tokens);
      }
      return (this as any).inlineQueue = [], (this as any).tokens;
    }
    blockTokens(t: any, n: any = [], i: any = !1): any {
      for (((this as any).options as any).pedantic && (t = ((((t as any).replace as any)((K as any).tabCharGlobal, "    ") as any).replace as any)((K as any).spaceLine, "")); t;) {
        let r: any;
        if (((this as any).options as any).extensions?.block?.some((o: any): any => (r = ((o as any).call as any)({
          lexer: this
        }, t, n)) ? (t = ((t as any).substring as any)(((r as any).raw as any).length), ((n as any).push as any)(r), !0) : !1)) continue;
        if (r = (((this as any).tokenizer as any).space as any)(t)) {
          t = ((t as any).substring as any)(((r as any).raw as any).length);
          const o: any = ((n as any).at as any)(-1);
          (((r as any).raw as any).length as any) === (1 as any) && (o as any) !== (void 0 as any) ? (o as any).raw += `
` : ((n as any).push as any)(r);
          continue;
        }
        if (r = (((this as any).tokenizer as any).code as any)(t)) {
          t = ((t as any).substring as any)(((r as any).raw as any).length);
          const o: any = ((n as any).at as any)(-1);
          (o?.type as any) === ("paragraph" as any) || (o?.type as any) === ("text" as any) ? ((o as any).raw += (`
` as any) + ((r as any).raw as any), (o as any).text += (`
` as any) + ((r as any).text as any), ((((this as any).inlineQueue as any).at as any)(-1) as any).src = (o as any).text) : ((n as any).push as any)(r);
          continue;
        }
        if (r = (((this as any).tokenizer as any).fences as any)(t)) {
          t = ((t as any).substring as any)(((r as any).raw as any).length), ((n as any).push as any)(r);
          continue;
        }
        if (r = (((this as any).tokenizer as any).heading as any)(t)) {
          t = ((t as any).substring as any)(((r as any).raw as any).length), ((n as any).push as any)(r);
          continue;
        }
        if (r = (((this as any).tokenizer as any).hr as any)(t)) {
          t = ((t as any).substring as any)(((r as any).raw as any).length), ((n as any).push as any)(r);
          continue;
        }
        if (r = (((this as any).tokenizer as any).blockquote as any)(t)) {
          t = ((t as any).substring as any)(((r as any).raw as any).length), ((n as any).push as any)(r);
          continue;
        }
        if (r = (((this as any).tokenizer as any).list as any)(t)) {
          t = ((t as any).substring as any)(((r as any).raw as any).length), ((n as any).push as any)(r);
          continue;
        }
        if (r = (((this as any).tokenizer as any).html as any)(t)) {
          t = ((t as any).substring as any)(((r as any).raw as any).length), ((n as any).push as any)(r);
          continue;
        }
        if (r = (((this as any).tokenizer as any).def as any)(t)) {
          t = ((t as any).substring as any)(((r as any).raw as any).length);
          const o: any = ((n as any).at as any)(-1);
          (o?.type as any) === ("paragraph" as any) || (o?.type as any) === ("text" as any) ? ((o as any).raw += (`
` as any) + ((r as any).raw as any), (o as any).text += (`
` as any) + ((r as any).raw as any), ((((this as any).inlineQueue as any).at as any)(-1) as any).src = (o as any).text) : (((this as any).tokens as any).links as any)[(r as any).tag] || ((((this as any).tokens as any).links as any)[(r as any).tag] = {
            href: (r as any).href,
            title: (r as any).title
          });
          continue;
        }
        if (r = (((this as any).tokenizer as any).table as any)(t)) {
          t = ((t as any).substring as any)(((r as any).raw as any).length), ((n as any).push as any)(r);
          continue;
        }
        if (r = (((this as any).tokenizer as any).lheading as any)(t)) {
          t = ((t as any).substring as any)(((r as any).raw as any).length), ((n as any).push as any)(r);
          continue;
        }
        let s: any = t;
        if (((this as any).options as any).extensions?.startBlock) {
          let o: any = (1 as any) / (0 as any);
          const l: any = ((t as any).slice as any)(1);
          let a: any;
          (((((this as any).options as any).extensions as any).startBlock as any).forEach as any)((u: any): any => {
            a = ((u as any).call as any)({
              lexer: this
            }, l), (typeof a as any) == ("number" as any) && (a as any) >= (0 as any) && (o = ((Math as any).min as any)(o, a));
          }), (o as any) < ((1 as any) / (0 as any) as any) && (o as any) >= (0 as any) && (s = ((t as any).substring as any)(0, (o as any) + (1 as any)));
        }
        if (((this as any).state as any).top && (r = (((this as any).tokenizer as any).paragraph as any)(s))) {
          const o: any = ((n as any).at as any)(-1);
          i && (o?.type as any) === ("paragraph" as any) ? ((o as any).raw += (`
` as any) + ((r as any).raw as any), (o as any).text += (`
` as any) + ((r as any).text as any), (((this as any).inlineQueue as any).pop as any)(), ((((this as any).inlineQueue as any).at as any)(-1) as any).src = (o as any).text) : ((n as any).push as any)(r), i = ((s as any).length as any) !== ((t as any).length as any), t = ((t as any).substring as any)(((r as any).raw as any).length);
          continue;
        }
        if (r = (((this as any).tokenizer as any).text as any)(t)) {
          t = ((t as any).substring as any)(((r as any).raw as any).length);
          const o: any = ((n as any).at as any)(-1);
          (o?.type as any) === ("text" as any) ? ((o as any).raw += (`
` as any) + ((r as any).raw as any), (o as any).text += (`
` as any) + ((r as any).text as any), (((this as any).inlineQueue as any).pop as any)(), ((((this as any).inlineQueue as any).at as any)(-1) as any).src = (o as any).text) : ((n as any).push as any)(r);
          continue;
        }
        if (t) {
          const o: any = ("Infinite loop on byte: " as any) + (((t as any).charCodeAt as any)(0) as any);
          if (((this as any).options as any).silent) {
            ((console as any).error as any)(o);
            break;
          } else throw new (Error as any)(o);
        }
      }
      return ((this as any).state as any).top = !0, n;
    }
    inline(t: any, n: any = []): any {
      return (((this as any).inlineQueue as any).push as any)({
        src: t,
        tokens: n
      }), n;
    }
    inlineTokens(t: any, n: any = []): any {
      let i: any = t,
        r: any = null;
      if (((this as any).tokens as any).links) {
        const l: any = ((Object as any).keys as any)(((this as any).tokens as any).links);
        if (((l as any).length as any) > (0 as any)) for (; ((r = ((((((this as any).tokenizer as any).rules as any).inline as any).reflinkSearch as any).exec as any)(i)) as any) != (null as any);) ((l as any).includes as any)((((r as any)[0] as any).slice as any)(((((r as any)[0] as any).lastIndexOf as any)("[") as any) + (1 as any), -1)) && (i = ((((((i as any).slice as any)(0, (r as any).index) as any) + ("[" as any) as any) + ((("a" as any).repeat as any)((((r as any)[0] as any).length as any) - (2 as any)) as any) as any) + ("]" as any) as any) + (((i as any).slice as any)((((((this as any).tokenizer as any).rules as any).inline as any).reflinkSearch as any).lastIndex) as any));
      }
      for (; ((r = ((((((this as any).tokenizer as any).rules as any).inline as any).anyPunctuation as any).exec as any)(i)) as any) != (null as any);) i = ((((i as any).slice as any)(0, (r as any).index) as any) + ("++" as any) as any) + (((i as any).slice as any)((((((this as any).tokenizer as any).rules as any).inline as any).anyPunctuation as any).lastIndex) as any);
      for (; ((r = ((((((this as any).tokenizer as any).rules as any).inline as any).blockSkip as any).exec as any)(i)) as any) != (null as any);) i = ((((((i as any).slice as any)(0, (r as any).index) as any) + ("[" as any) as any) + ((("a" as any).repeat as any)((((r as any)[0] as any).length as any) - (2 as any)) as any) as any) + ("]" as any) as any) + (((i as any).slice as any)((((((this as any).tokenizer as any).rules as any).inline as any).blockSkip as any).lastIndex) as any);
      let s: any = !1,
        o: any = "";
      for (; t;) {
        s || (o = ""), s = !1;
        let l: any;
        if (((this as any).options as any).extensions?.inline?.some((u: any): any => (l = ((u as any).call as any)({
          lexer: this
        }, t, n)) ? (t = ((t as any).substring as any)(((l as any).raw as any).length), ((n as any).push as any)(l), !0) : !1)) continue;
        if (l = (((this as any).tokenizer as any).escape as any)(t)) {
          t = ((t as any).substring as any)(((l as any).raw as any).length), ((n as any).push as any)(l);
          continue;
        }
        if (l = (((this as any).tokenizer as any).tag as any)(t)) {
          t = ((t as any).substring as any)(((l as any).raw as any).length), ((n as any).push as any)(l);
          continue;
        }
        if (l = (((this as any).tokenizer as any).link as any)(t)) {
          t = ((t as any).substring as any)(((l as any).raw as any).length), ((n as any).push as any)(l);
          continue;
        }
        if (l = (((this as any).tokenizer as any).reflink as any)(t, ((this as any).tokens as any).links)) {
          t = ((t as any).substring as any)(((l as any).raw as any).length);
          const u: any = ((n as any).at as any)(-1);
          ((l as any).type as any) === ("text" as any) && (u?.type as any) === ("text" as any) ? ((u as any).raw += (l as any).raw, (u as any).text += (l as any).text) : ((n as any).push as any)(l);
          continue;
        }
        if (l = (((this as any).tokenizer as any).emStrong as any)(t, i, o)) {
          t = ((t as any).substring as any)(((l as any).raw as any).length), ((n as any).push as any)(l);
          continue;
        }
        if (l = (((this as any).tokenizer as any).codespan as any)(t)) {
          t = ((t as any).substring as any)(((l as any).raw as any).length), ((n as any).push as any)(l);
          continue;
        }
        if (l = (((this as any).tokenizer as any).br as any)(t)) {
          t = ((t as any).substring as any)(((l as any).raw as any).length), ((n as any).push as any)(l);
          continue;
        }
        if (l = (((this as any).tokenizer as any).del as any)(t)) {
          t = ((t as any).substring as any)(((l as any).raw as any).length), ((n as any).push as any)(l);
          continue;
        }
        if (l = (((this as any).tokenizer as any).autolink as any)(t)) {
          t = ((t as any).substring as any)(((l as any).raw as any).length), ((n as any).push as any)(l);
          continue;
        }
        if (!((this as any).state as any).inLink && (l = (((this as any).tokenizer as any).url as any)(t))) {
          t = ((t as any).substring as any)(((l as any).raw as any).length), ((n as any).push as any)(l);
          continue;
        }
        let a: any = t;
        if (((this as any).options as any).extensions?.startInline) {
          let u: any = (1 as any) / (0 as any);
          const c: any = ((t as any).slice as any)(1);
          let d: any;
          (((((this as any).options as any).extensions as any).startInline as any).forEach as any)((h: any): any => {
            d = ((h as any).call as any)({
              lexer: this
            }, c), (typeof d as any) == ("number" as any) && (d as any) >= (0 as any) && (u = ((Math as any).min as any)(u, d));
          }), (u as any) < ((1 as any) / (0 as any) as any) && (u as any) >= (0 as any) && (a = ((t as any).substring as any)(0, (u as any) + (1 as any)));
        }
        if (l = (((this as any).tokenizer as any).inlineText as any)(a)) {
          t = ((t as any).substring as any)(((l as any).raw as any).length), ((((l as any).raw as any).slice as any)(-1) as any) !== ("_" as any) && (o = (((l as any).raw as any).slice as any)(-1)), s = !0;
          const u: any = ((n as any).at as any)(-1);
          (u?.type as any) === ("text" as any) ? ((u as any).raw += (l as any).raw, (u as any).text += (l as any).text) : ((n as any).push as any)(l);
          continue;
        }
        if (t) {
          const u: any = ("Infinite loop on byte: " as any) + (((t as any).charCodeAt as any)(0) as any);
          if (((this as any).options as any).silent) {
            ((console as any).error as any)(u);
            break;
          } else throw new (Error as any)(u);
        }
      }
      return n;
    }
  },
  Mt: any = class {
    [key: string]: any;
    options: any;
    parser: any;
    constructor(e: any) {
      (this as any).options = e || Ue;
    }
    space(e: any): any {
      return "";
    }
    code({
      text: e,
      lang: t,
      escaped: n
    }: any): any {
      const i: any = (((t || "") as any).match as any)((K as any).notSpaceStart)?.[0],
        r: any = (((e as any).replace as any)((K as any).endingNewline, "") as any) + (`
` as any);
      return i ? (((('<pre><code class="language-' as any) + ((ke as any)(i) as any) as any) + ('">' as any) as any) + ((n ? r : (ke as any)(r, !0)) as any) as any) + (`</code></pre>
` as any) : (("<pre><code>" as any) + ((n ? r : (ke as any)(r, !0)) as any) as any) + (`</code></pre>
` as any);
    }
    blockquote({
      tokens: e
    }: any): any {
      return `<blockquote>
${(((this as any).parser as any).parse as any)(e)}</blockquote>
`;
    }
    html({
      text: e
    }: any): any {
      return e;
    }
    heading({
      tokens: e,
      depth: t
    }: any): any {
      return `<h${t}>${(((this as any).parser as any).parseInline as any)(e)}</h${t}>
`;
    }
    hr(e: any): any {
      return `<hr>
`;
    }
    list(e: any): any {
      const t: any = (e as any).ordered,
        n: any = (e as any).start;
      let i: any = "";
      for (let o: any = 0; (o as any) < (((e as any).items as any).length as any); o++) {
        const l: any = ((e as any).items as any)[o];
        i += ((this as any).listitem as any)(l);
      }
      const r: any = t ? "ol" : "ul",
        s: any = t && (n as any) !== (1 as any) ? ((' start="' as any) + (n as any) as any) + ('"' as any) : "";
      return ((((((("<" as any) + (r as any) as any) + (s as any) as any) + (`>
` as any) as any) + (i as any) as any) + ("</" as any) as any) + (r as any) as any) + (`>
` as any);
    }
    listitem(e: any): any {
      let t: any = "";
      if ((e as any).task) {
        const n: any = ((this as any).checkbox as any)({
          checked: !!(e as any).checked
        });
        (e as any).loose ? (((e as any).tokens as any)[0]?.type as any) === ("paragraph" as any) ? ((((e as any).tokens as any)[0] as any).text = ((n as any) + (" " as any) as any) + ((((e as any).tokens as any)[0] as any).text as any), (((e as any).tokens as any)[0] as any).tokens && (((((e as any).tokens as any)[0] as any).tokens as any).length as any) > (0 as any) && ((((((e as any).tokens as any)[0] as any).tokens as any)[0] as any).type as any) === ("text" as any) && ((((((e as any).tokens as any)[0] as any).tokens as any)[0] as any).text = ((n as any) + (" " as any) as any) + ((ke as any)((((((e as any).tokens as any)[0] as any).tokens as any)[0] as any).text) as any), (((((e as any).tokens as any)[0] as any).tokens as any)[0] as any).escaped = !0)) : (((e as any).tokens as any).unshift as any)({
          type: "text",
          raw: (n as any) + (" " as any),
          text: (n as any) + (" " as any),
          escaped: !0
        }) : t += (n as any) + (" " as any);
      }
      return t += (((this as any).parser as any).parse as any)((e as any).tokens, !!(e as any).loose), `<li>${t}</li>
`;
    }
    checkbox({
      checked: e
    }: any): any {
      return (("<input " as any) + ((e ? 'checked="" ' : "") as any) as any) + ('disabled="" type="checkbox">' as any);
    }
    paragraph({
      tokens: e
    }: any): any {
      return `<p>${(((this as any).parser as any).parseInline as any)(e)}</p>
`;
    }
    table(e: any): any {
      let t: any = "",
        n: any = "";
      for (let r: any = 0; (r as any) < (((e as any).header as any).length as any); r++) n += ((this as any).tablecell as any)(((e as any).header as any)[r]);
      t += ((this as any).tablerow as any)({
        text: n
      });
      let i: any = "";
      for (let r: any = 0; (r as any) < (((e as any).rows as any).length as any); r++) {
        const s: any = ((e as any).rows as any)[r];
        n = "";
        for (let o: any = 0; (o as any) < ((s as any).length as any); o++) n += ((this as any).tablecell as any)((s as any)[o]);
        i += ((this as any).tablerow as any)({
          text: n
        });
      }
      return i && (i = `<tbody>${i}</tbody>`), ((((`<table>
<thead>
` as any) + (t as any) as any) + (`</thead>
` as any) as any) + (i as any) as any) + (`</table>
` as any);
    }
    tablerow({
      text: e
    }: any): any {
      return `<tr>
${e}</tr>
`;
    }
    tablecell(e: any): any {
      const t: any = (((this as any).parser as any).parseInline as any)((e as any).tokens),
        n: any = (e as any).header ? "th" : "td";
      return ((((e as any).align ? `<${n} align="${(e as any).align}">` : `<${n}>`) as any) + (t as any) as any) + (`</${n}>
` as any);
    }
    strong({
      tokens: e
    }: any): any {
      return `<strong>${(((this as any).parser as any).parseInline as any)(e)}</strong>`;
    }
    em({
      tokens: e
    }: any): any {
      return `<em>${(((this as any).parser as any).parseInline as any)(e)}</em>`;
    }
    codespan({
      text: e
    }: any): any {
      return `<code>${(ke as any)(e, !0)}</code>`;
    }
    br(e: any): any {
      return "<br>";
    }
    del({
      tokens: e
    }: any): any {
      return `<del>${(((this as any).parser as any).parseInline as any)(e)}</del>`;
    }
    link({
      href: e,
      title: t,
      tokens: n
    }: any): any {
      const i: any = (((this as any).parser as any).parseInline as any)(n),
        r: any = (zi as any)(e);
      if ((r as any) === (null as any)) return i;
      e = r;
      let s: any = (('<a href="' as any) + (e as any) as any) + ('"' as any);
      return t && (s += ((' title="' as any) + ((ke as any)(t) as any) as any) + ('"' as any)), s += ((">" as any) + (i as any) as any) + ("</a>" as any), s;
    }
    image({
      href: e,
      title: t,
      text: n,
      tokens: i
    }: any): any {
      i && (n = (((this as any).parser as any).parseInline as any)(i, ((this as any).parser as any).textRenderer));
      const r: any = (zi as any)(e);
      if ((r as any) === (null as any)) return (ke as any)(n);
      e = r;
      let s: any = `<img src="${e}" alt="${n}"`;
      return t && (s += ` title="${(ke as any)(t)}"`), s += ">", s;
    }
    text(e: any): any {
      return "tokens" in e && (e as any).tokens ? (((this as any).parser as any).parseInline as any)((e as any).tokens) : "escaped" in e && (e as any).escaped ? (e as any).text : (ke as any)((e as any).text);
    }
  },
  Rn: any = class {
    [key: string]: any;
    strong({
      text: e
    }: any): any {
      return e;
    }
    em({
      text: e
    }: any): any {
      return e;
    }
    codespan({
      text: e
    }: any): any {
      return e;
    }
    del({
      text: e
    }: any): any {
      return e;
    }
    html({
      text: e
    }: any): any {
      return e;
    }
    text({
      text: e
    }: any): any {
      return e;
    }
    link({
      text: e
    }: any): any {
      return ("" as any) + (e as any);
    }
    image({
      text: e
    }: any): any {
      return ("" as any) + (e as any);
    }
    br(): any {
      return "";
    }
  },
  $e: any = class cn {
    [key: string]: any;
    options: any;
    renderer: any;
    textRenderer: any;
    constructor(t: any) {
      (this as any).options = t || Ue, ((this as any).options as any).renderer = ((this as any).options as any).renderer || new (Mt as any)(), (this as any).renderer = ((this as any).options as any).renderer, ((this as any).renderer as any).options = (this as any).options, ((this as any).renderer as any).parser = this, (this as any).textRenderer = new (Rn as any)();
    }
    static parse(t: any, n: any): any {
      return ((new (cn as any)(n) as any).parse as any)(t);
    }
    static parseInline(t: any, n: any): any {
      return ((new (cn as any)(n) as any).parseInline as any)(t);
    }
    parse(t: any, n: any = !0): any {
      let i: any = "";
      for (let r: any = 0; (r as any) < ((t as any).length as any); r++) {
        const s: any = (t as any)[r];
        if (((this as any).options as any).extensions?.renderers?.[(s as any).type]) {
          const l: any = s,
            a: any = ((((((this as any).options as any).extensions as any).renderers as any)[(l as any).type] as any).call as any)({
              parser: this
            }, l);
          if ((a as any) !== (!1 as any) || !((["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"] as any).includes as any)((l as any).type)) {
            i += a || "";
            continue;
          }
        }
        const o: any = s;
        switch ((o as any).type) {
          case "space":
            {
              i += (((this as any).renderer as any).space as any)(o);
              continue;
            }
          case "hr":
            {
              i += (((this as any).renderer as any).hr as any)(o);
              continue;
            }
          case "heading":
            {
              i += (((this as any).renderer as any).heading as any)(o);
              continue;
            }
          case "code":
            {
              i += (((this as any).renderer as any).code as any)(o);
              continue;
            }
          case "table":
            {
              i += (((this as any).renderer as any).table as any)(o);
              continue;
            }
          case "blockquote":
            {
              i += (((this as any).renderer as any).blockquote as any)(o);
              continue;
            }
          case "list":
            {
              i += (((this as any).renderer as any).list as any)(o);
              continue;
            }
          case "html":
            {
              i += (((this as any).renderer as any).html as any)(o);
              continue;
            }
          case "paragraph":
            {
              i += (((this as any).renderer as any).paragraph as any)(o);
              continue;
            }
          case "text":
            {
              let l: any = o,
                a: any = (((this as any).renderer as any).text as any)(l);
              for (; ((r as any) + (1 as any) as any) < ((t as any).length as any) && (((t as any)[(r as any) + (1 as any)] as any).type as any) === ("text" as any);) l = (t as any)[++r], a += (`
` as any) + ((((this as any).renderer as any).text as any)(l) as any);
              n ? i += (((this as any).renderer as any).paragraph as any)({
                type: "paragraph",
                raw: a,
                text: a,
                tokens: [{
                  type: "text",
                  raw: a,
                  text: a,
                  escaped: !0
                }]
              }) : i += a;
              continue;
            }
          default:
            {
              const l: any = (('Token with "' as any) + ((o as any).type as any) as any) + ('" type was not found.' as any);
              if (((this as any).options as any).silent) return ((console as any).error as any)(l), "";
              throw new (Error as any)(l);
            }
        }
      }
      return i;
    }
    parseInline(t: any, n: any = (this as any).renderer): any {
      let i: any = "";
      for (let r: any = 0; (r as any) < ((t as any).length as any); r++) {
        const s: any = (t as any)[r];
        if (((this as any).options as any).extensions?.renderers?.[(s as any).type]) {
          const l: any = ((((((this as any).options as any).extensions as any).renderers as any)[(s as any).type] as any).call as any)({
            parser: this
          }, s);
          if ((l as any) !== (!1 as any) || !((["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"] as any).includes as any)((s as any).type)) {
            i += l || "";
            continue;
          }
        }
        const o: any = s;
        switch ((o as any).type) {
          case "escape":
            {
              i += ((n as any).text as any)(o);
              break;
            }
          case "html":
            {
              i += ((n as any).html as any)(o);
              break;
            }
          case "link":
            {
              i += ((n as any).link as any)(o);
              break;
            }
          case "image":
            {
              i += ((n as any).image as any)(o);
              break;
            }
          case "strong":
            {
              i += ((n as any).strong as any)(o);
              break;
            }
          case "em":
            {
              i += ((n as any).em as any)(o);
              break;
            }
          case "codespan":
            {
              i += ((n as any).codespan as any)(o);
              break;
            }
          case "br":
            {
              i += ((n as any).br as any)(o);
              break;
            }
          case "del":
            {
              i += ((n as any).del as any)(o);
              break;
            }
          case "text":
            {
              i += ((n as any).text as any)(o);
              break;
            }
          default:
            {
              const l: any = (('Token with "' as any) + ((o as any).type as any) as any) + ('" type was not found.' as any);
              if (((this as any).options as any).silent) return ((console as any).error as any)(l), "";
              throw new (Error as any)(l);
            }
        }
      }
      return i;
    }
  },
  xt: any = class {
    [key: string]: any;
    options: any;
    block: any;
    constructor(e: any) {
      (this as any).options = e || Ue;
    }
    static passThroughHooks: any = new (Set as any)(["preprocess", "postprocess", "processAllTokens"]);
    preprocess(e: any): any {
      return e;
    }
    postprocess(e: any): any {
      return e;
    }
    processAllTokens(e: any): any {
      return e;
    }
    provideLexer(): any {
      return (this as any).block ? (Ee as any).lex : (Ee as any).lexInline;
    }
    provideParser(): any {
      return (this as any).block ? ($e as any).parse : ($e as any).parseInline;
    }
  },
  pd: any = class {
    [key: string]: any;
    defaults: any = (bn as any)();
    options: any = (this as any).setOptions;
    parse: any = ((this as any).parseMarkdown as any)(!0);
    parseInline: any = ((this as any).parseMarkdown as any)(!1);
    Parser: any = $e;
    Renderer: any = Mt;
    TextRenderer: any = Rn;
    Lexer: any = Ee;
    Tokenizer: any = Rt;
    Hooks: any = xt;
    constructor(...e: any) {
      ((this as any).use as any)(...e);
    }
    walkTokens(e: any, t: any): any {
      let n: any = [];
      for (const i of e) switch (n = ((n as any).concat as any)(((t as any).call as any)(this, i)), (i as any).type) {
        case "table":
          {
            const r: any = i;
            for (const s of (r as any).header) n = ((n as any).concat as any)(((this as any).walkTokens as any)((s as any).tokens, t));
            for (const s of (r as any).rows) for (const o of s) n = ((n as any).concat as any)(((this as any).walkTokens as any)((o as any).tokens, t));
            break;
          }
        case "list":
          {
            const r: any = i;
            n = ((n as any).concat as any)(((this as any).walkTokens as any)((r as any).items, t));
            break;
          }
        default:
          {
            const r: any = i;
            ((this as any).defaults as any).extensions?.childTokens?.[(r as any).type] ? ((((((this as any).defaults as any).extensions as any).childTokens as any)[(r as any).type] as any).forEach as any)((s: any): any => {
              const o: any = (((r as any)[s] as any).flat as any)((1 as any) / (0 as any));
              n = ((n as any).concat as any)(((this as any).walkTokens as any)(o, t));
            }) : (r as any).tokens && (n = ((n as any).concat as any)(((this as any).walkTokens as any)((r as any).tokens, t)));
          }
      }
      return n;
    }
    use(...e: any): any {
      const t: any = ((this as any).defaults as any).extensions || {
        renderers: {},
        childTokens: {}
      };
      return ((e as any).forEach as any)((n: any): any => {
        const i: any = {
          ...n
        };
        if ((i as any).async = ((this as any).defaults as any).async || (i as any).async || !1, (n as any).extensions && ((((n as any).extensions as any).forEach as any)((r: any): any => {
          if (!(r as any).name) throw new (Error as any)("extension name required");
          if ("renderer" in r) {
            const s: any = ((t as any).renderers as any)[(r as any).name];
            s ? ((t as any).renderers as any)[(r as any).name] = function (this: any, ...o: any): any {
              let l: any = (((r as any).renderer as any).apply as any)(this, o);
              return (l as any) === (!1 as any) && (l = ((s as any).apply as any)(this, o)), l;
            } : ((t as any).renderers as any)[(r as any).name] = (r as any).renderer;
          }
          if ("tokenizer" in r) {
            if (!(r as any).level || ((r as any).level as any) !== ("block" as any) && ((r as any).level as any) !== ("inline" as any)) throw new (Error as any)("extension level must be 'block' or 'inline'");
            const s: any = (t as any)[(r as any).level];
            s ? ((s as any).unshift as any)((r as any).tokenizer) : (t as any)[(r as any).level] = [(r as any).tokenizer], (r as any).start && (((r as any).level as any) === ("block" as any) ? (t as any).startBlock ? (((t as any).startBlock as any).push as any)((r as any).start) : (t as any).startBlock = [(r as any).start] : ((r as any).level as any) === ("inline" as any) && ((t as any).startInline ? (((t as any).startInline as any).push as any)((r as any).start) : (t as any).startInline = [(r as any).start]));
          }
          "childTokens" in r && (r as any).childTokens && (((t as any).childTokens as any)[(r as any).name] = (r as any).childTokens);
        }), (i as any).extensions = t), (n as any).renderer) {
          const r: any = ((this as any).defaults as any).renderer || new (Mt as any)((this as any).defaults);
          for (const s in (n as any).renderer) {
            if (!(s in r)) throw new (Error as any)(`renderer '${s}' does not exist`);
            if (((["options", "parser"] as any).includes as any)(s)) continue;
            const o: any = s,
              l: any = ((n as any).renderer as any)[o],
              a: any = (r as any)[o];
            (r as any)[o] = (...u: any): any => {
              let c: any = ((l as any).apply as any)(r, u);
              return (c as any) === (!1 as any) && (c = ((a as any).apply as any)(r, u)), c || "";
            };
          }
          (i as any).renderer = r;
        }
        if ((n as any).tokenizer) {
          const r: any = ((this as any).defaults as any).tokenizer || new (Rt as any)((this as any).defaults);
          for (const s in (n as any).tokenizer) {
            if (!(s in r)) throw new (Error as any)(`tokenizer '${s}' does not exist`);
            if (((["options", "rules", "lexer"] as any).includes as any)(s)) continue;
            const o: any = s,
              l: any = ((n as any).tokenizer as any)[o],
              a: any = (r as any)[o];
            (r as any)[o] = (...u: any): any => {
              let c: any = ((l as any).apply as any)(r, u);
              return (c as any) === (!1 as any) && (c = ((a as any).apply as any)(r, u)), c;
            };
          }
          (i as any).tokenizer = r;
        }
        if ((n as any).hooks) {
          const r: any = ((this as any).defaults as any).hooks || new (xt as any)();
          for (const s in (n as any).hooks) {
            if (!(s in r)) throw new (Error as any)(`hook '${s}' does not exist`);
            if (((["options", "block"] as any).includes as any)(s)) continue;
            const o: any = s,
              l: any = ((n as any).hooks as any)[o],
              a: any = (r as any)[o];
            (((xt as any).passThroughHooks as any).has as any)(s) ? (r as any)[o] = (u: any): any => {
              if (((this as any).defaults as any).async) return ((((Promise as any).resolve as any)(((l as any).call as any)(r, u)) as any).then as any)((d: any): any => ((a as any).call as any)(r, d));
              const c: any = ((l as any).call as any)(r, u);
              return ((a as any).call as any)(r, c);
            } : (r as any)[o] = (...u: any): any => {
              let c: any = ((l as any).apply as any)(r, u);
              return (c as any) === (!1 as any) && (c = ((a as any).apply as any)(r, u)), c;
            };
          }
          (i as any).hooks = r;
        }
        if ((n as any).walkTokens) {
          const r: any = ((this as any).defaults as any).walkTokens,
            s: any = (n as any).walkTokens;
          (i as any).walkTokens = function (this: any, o: any): any {
            let l: any = [];
            return ((l as any).push as any)(((s as any).call as any)(this, o)), r && (l = ((l as any).concat as any)(((r as any).call as any)(this, o))), l;
          };
        }
        (this as any).defaults = {
          ...(this as any).defaults,
          ...i
        };
      }), this;
    }
    setOptions(e: any): any {
      return (this as any).defaults = {
        ...(this as any).defaults,
        ...e
      }, this;
    }
    lexer(e: any, t: any): any {
      return ((Ee as any).lex as any)(e, t ?? (this as any).defaults);
    }
    parser(e: any, t: any): any {
      return (($e as any).parse as any)(e, t ?? (this as any).defaults);
    }
    parseMarkdown(e: any): any {
      return (n: any, i: any): any => {
        const r: any = {
            ...i
          },
          s: any = {
            ...(this as any).defaults,
            ...r
          },
          o: any = ((this as any).onError as any)(!!(s as any).silent, !!(s as any).async);
        if ((((this as any).defaults as any).async as any) === (!0 as any) && ((r as any).async as any) === (!1 as any)) return (o as any)(new (Error as any)("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
        if ((typeof n as any) > ("u" as any) || (n as any) === (null as any)) return (o as any)(new (Error as any)("marked(): input parameter is undefined or null"));
        if ((typeof n as any) != ("string" as any)) return (o as any)(new (Error as any)((("marked(): input parameter is of type " as any) + (((((Object as any).prototype as any).toString as any).call as any)(n) as any) as any) + (", string expected" as any)));
        (s as any).hooks && (((s as any).hooks as any).options = s, ((s as any).hooks as any).block = e);
        const l: any = (s as any).hooks ? (((s as any).hooks as any).provideLexer as any)() : e ? (Ee as any).lex : (Ee as any).lexInline,
          a: any = (s as any).hooks ? (((s as any).hooks as any).provideParser as any)() : e ? ($e as any).parse : ($e as any).parseInline;
        if ((s as any).async) return ((((((((((((((Promise as any).resolve as any)((s as any).hooks ? (((s as any).hooks as any).preprocess as any)(n) : n) as any).then as any)((u: any): any => (l as any)(u, s)) as any).then as any)((u: any): any => (s as any).hooks ? (((s as any).hooks as any).processAllTokens as any)(u) : u) as any).then as any)((u: any): any => (s as any).walkTokens ? ((((Promise as any).all as any)(((this as any).walkTokens as any)(u, (s as any).walkTokens)) as any).then as any)((): any => u) : u) as any).then as any)((u: any): any => (a as any)(u, s)) as any).then as any)((u: any): any => (s as any).hooks ? (((s as any).hooks as any).postprocess as any)(u) : u) as any).catch as any)(o);
        try {
          (s as any).hooks && (n = (((s as any).hooks as any).preprocess as any)(n));
          let u: any = (l as any)(n, s);
          (s as any).hooks && (u = (((s as any).hooks as any).processAllTokens as any)(u)), (s as any).walkTokens && ((this as any).walkTokens as any)(u, (s as any).walkTokens);
          let c: any = (a as any)(u, s);
          return (s as any).hooks && (c = (((s as any).hooks as any).postprocess as any)(c)), c;
        } catch (u: any) {
          return (o as any)(u);
        }
      };
    }
    onError(e: any, t: any): any {
      return (n: any): any => {
        if ((n as any).message += `
Please report this to https://github.com/markedjs/marked.`, e) {
          const i: any = (("<p>An error occurred:</p><pre>" as any) + ((ke as any)(((n as any).message as any) + ("" as any), !0) as any) as any) + ("</pre>" as any);
          return t ? ((Promise as any).resolve as any)(i) : i;
        }
        if (t) return ((Promise as any).reject as any)(n);
        throw n;
      };
    }
  },
  De: any = new (pd as any)();
function A(this: any, e: any, t: any): any {
  return ((De as any).parse as any)(e, t);
}
(A as any).options = (A as any).setOptions = function (this: any, e: any): any {
  return ((De as any).setOptions as any)(e), (A as any).defaults = (De as any).defaults, (ms as any)((A as any).defaults), A;
};
(A as any).getDefaults = bn;
(A as any).defaults = Ue;
(A as any).use = function (this: any, ...e: any): any {
  return ((De as any).use as any)(...e), (A as any).defaults = (De as any).defaults, (ms as any)((A as any).defaults), A;
};
(A as any).walkTokens = function (this: any, e: any, t: any): any {
  return ((De as any).walkTokens as any)(e, t);
};
(A as any).parseInline = (De as any).parseInline;
(A as any).Parser = $e;
(A as any).parser = ($e as any).parse;
(A as any).Renderer = Mt;
(A as any).TextRenderer = Rn;
(A as any).Lexer = Ee;
(A as any).lexer = (Ee as any).lex;
(A as any).Tokenizer = Rt;
(A as any).Hooks = xt;
(A as any).parse = A;
(A as any).options;
(A as any).setOptions;
(A as any).use;
(A as any).walkTokens;
(A as any).parseInline;
($e as any).parse;
(Ee as any).lex;
function fd(this: any, e: any, t: any): any {
  const i: any = ((((((((t as any).split as any)(`
`) as any).flatMap as any)((r: any): any => [r, ""]) as any).map as any)((r: any): any => `${e}${r}`) as any).join as any)(`
`);
  return ((i as any).slice as any)(0, ((i as any).length as any) - (1 as any));
}
function md(this: any, e: any, t: any): any {
  const n: any = [];
  return ((((Array as any).from as any)(((e as any).keys as any)()) as any).forEach as any)((i: any): any => {
    ((t as any).has as any)(i) || ((n as any).push as any)(i);
  }), n;
}
function gd(this: any, e: any, t: any): any {
  const n: any = [];
  return ((((Array as any).from as any)(((t as any).entries as any)()) as any).forEach as any)(([i, r]: any): any => {
    ((e as any).has as any)(i) || ((n as any).push as any)({
      type: i,
      mark: r
    });
  }), n;
}
function kd(this: any, e: any, t: any, n: any, i: any): any {
  const r: any = !n,
    s: any = n && ((n as any).type as any) === ("text" as any) && (!(n as any).marks || (((n as any).marks as any).length as any) === (0 as any)),
    o: any = n && ((n as any).type as any) === ("text" as any) && (n as any).marks && !(i as any)(t, new (Map as any)((((n as any).marks as any).map as any)((a: any): any => [(a as any).type, a]))),
    l: any = [];
  if (r || s || o) if (n && ((n as any).type as any) === ("text" as any) && (n as any).marks) {
    const a: any = new (Map as any)((((n as any).marks as any).map as any)((u: any): any => [(u as any).type, u]));
    ((((Array as any).from as any)(((e as any).keys as any)()) as any).forEach as any)((u: any): any => {
      ((a as any).has as any)(u) || ((l as any).push as any)(u);
    });
  } else (r || s) && ((l as any).push as any)(...((Array as any).from as any)(((e as any).keys as any)()));
  return l;
}
function bd(this: any, e: any, t: any): any {
  let n: any = "";
  return ((((((Array as any).from as any)(((e as any).keys as any)()) as any).reverse as any)() as any).forEach as any)((i: any): any => {
    const r: any = ((e as any).get as any)(i),
      s: any = (t as any)(i, r);
    s && (n = (s as any) + (n as any));
  }), ((e as any).clear as any)(), n;
}
function yd(this: any, e: any, t: any, n: any): any {
  let i: any = "";
  return ((((Array as any).from as any)(((e as any).entries as any)()) as any).forEach as any)(([r, s]: any): any => {
    const o: any = (n as any)(r, s);
    o && (i += o), ((t as any).set as any)(r, s);
  }), i;
}
function Ut(this: any, e: any): any {
  const n: any = ((((e as any).raw || (e as any).text || "") as any).match as any)(/^(\s*)[-+*]\s+\[([ xX])\]\s+/);
  return n ? {
    isTask: !0,
    checked: ((((n as any)[2] as any).toLowerCase as any)() as any) === ("x" as any),
    indentLevel: ((n as any)[1] as any).length
  } : {
    isTask: !1,
    indentLevel: 0
  };
}
function gt(this: any, e: any, t: any): any {
  return (typeof e as any) != ("string" as any) ? "json" : t;
}
var wd: any = class {
    declare nodeTypeRegistry: any;
    declare registry: any;
    declare indentSize: any;
    declare indentStyle: any;
    declare lexer: any;
    declare markedInstance: any;
    declare lastParseResult: any;
    declare extensions: any;
    declare baseExtensions: any;
    [key: string]: any;
    constructor(e: any) {
      (this as any).baseExtensions = [], (this as any).extensions = [], (this as any).lastParseResult = null;
      var t: any, n: any, i: any, r: any, s: any;
      (this as any).markedInstance = ((t = e?.marked) as any) != (null as any) ? t : A, (this as any).lexer = new (((this as any).markedInstance as any).Lexer as any)(), (this as any).indentStyle = ((i = ((n = e?.indentation) as any) == (null as any) ? void 0 : (n as any).style) as any) != (null as any) ? i : "space", (this as any).indentSize = ((s = ((r = e?.indentation) as any) == (null as any) ? void 0 : (r as any).size) as any) != (null as any) ? s : 2, (this as any).baseExtensions = e?.extensions || [], e?.markedOptions && (typeof ((this as any).markedInstance as any).setOptions as any) == ("function" as any) && (((this as any).markedInstance as any).setOptions as any)((e as any).markedOptions), (this as any).registry = new (Map as any)(), (this as any).nodeTypeRegistry = new (Map as any)(), e?.extensions && ((this as any).baseExtensions = (e as any).extensions, (((mo as any)((e as any).extensions) as any).forEach as any)((l: any): any => ((this as any).registerExtension as any)(l, !1))), (this as any).lexer = new (((this as any).markedInstance as any).Lexer as any)();
    }
    get instance(): any {
      return (this as any).markedInstance;
    }
    get indentCharacter(): any {
      return ((this as any).indentStyle as any) === ("space" as any) ? " " : "	";
    }
    get indentString(): any {
      return (((this as any).indentCharacter as any).repeat as any)((this as any).indentSize);
    }
    hasMarked(): any {
      return !!(this as any).markedInstance;
    }
    registerExtension(e: any, t: any = !0): any {
      var n: any, i: any;
      (((this as any).extensions as any).push as any)(e);
      const r: any = (e as any).name,
        s: any = (Fe as any)(e, "markdownTokenName") || r,
        o: any = (Fe as any)(e, "parseMarkdown"),
        l: any = (Fe as any)(e, "renderMarkdown"),
        a: any = (Fe as any)(e, "markdownTokenizer"),
        u: any = ((n = (Fe as any)(e, "markdownOptions")) as any) != (null as any) ? n : null,
        c: any = ((i = u?.indentsContent) as any) != (null as any) ? i : !1,
        d: any = {
          tokenName: s,
          nodeName: r,
          parseMarkdown: o,
          renderMarkdown: l,
          isIndenting: c,
          tokenizer: a
        };
      if (s && o) {
        const h: any = (((this as any).registry as any).get as any)(s) || [];
        ((h as any).push as any)(d), (((this as any).registry as any).set as any)(s, h);
      }
      if (l) {
        const h: any = (((this as any).nodeTypeRegistry as any).get as any)(r) || [];
        ((h as any).push as any)(d), (((this as any).nodeTypeRegistry as any).set as any)(r, h);
      }
      a && ((this as any).hasMarked as any)() && (((this as any).registerTokenizer as any)(a), t && ((this as any).lexer = new (((this as any).markedInstance as any).Lexer as any)()));
    }
    registerTokenizer(e: any): any {
      if (!((this as any).hasMarked as any)()) return;
      const {
          name: t,
          start: n,
          level: i = "inline",
          tokenize: r
        }: any = e,
        l: any = {
          inlineTokens: (c: any): any => (((this as any).lexer as any).inlineTokens as any)(c),
          blockTokens: (c: any): any => (((this as any).lexer as any).blockTokens as any)(c)
        };
      let a: any;
      n ? a = (typeof n as any) == ("function" as any) ? n : (c: any): any => ((c as any).indexOf as any)(n) : a = (c: any): any => {
        const d: any = (r as any)(c, [], l);
        return d && (d as any).raw ? ((c as any).indexOf as any)((d as any).raw) : -1;
      };
      const u: any = {
        name: t,
        level: i,
        start: a,
        tokenizer: (c: any, d: any): any => {
          const h: any = (r as any)(c, d, l);
          if (h && (h as any).type) return {
            ...h,
            type: (h as any).type || t,
            raw: (h as any).raw || "",
            tokens: (h as any).tokens || []
          };
        },
        childTokens: []
      };
      (((this as any).markedInstance as any).use as any)({
        extensions: [u]
      });
    }
    getHandlersForToken(e: any): any {
      try {
        return (((this as any).registry as any).get as any)(e) || [];
      } catch {
        return [];
      }
    }
    getHandlerForToken(e: any): any {
      const t: any = ((this as any).getHandlersForToken as any)(e);
      if (((t as any).length as any) > (0 as any)) return (t as any)[0];
      const n: any = ((this as any).getHandlersForNodeType as any)(e);
      return ((n as any).length as any) > (0 as any) ? (n as any)[0] : void 0;
    }
    getHandlersForNodeType(e: any): any {
      try {
        return (((this as any).nodeTypeRegistry as any).get as any)(e) || [];
      } catch {
        return [];
      }
    }
    serialize(e: any): any {
      return e ? ((Array as any).isArray as any)(e) ? ((this as any).renderNodes as any)(e, e) : ((this as any).renderNodes as any)(e, e) : "";
    }
    parse(e: any): any {
      if (!((this as any).hasMarked as any)()) throw new (Error as any)("No marked instance available for parsing");
      const t: any = (((this as any).markedInstance as any).lexer as any)(e);
      return {
        type: "doc",
        content: ((this as any).parseTokens as any)(t)
      };
    }
    parseTokens(e: any): any {
      return ((((((e as any).map as any)((t: any): any => ((this as any).parseToken as any)(t)) as any).filter as any)((t: any): any => (t as any) !== (null as any)) as any).flatMap as any)((t: any): any => ((Array as any).isArray as any)(t) ? t : [t]);
    }
    parseToken(e: any): any {
      if (!(e as any).type) return null;
      if (((e as any).type as any) === ("list" as any)) return ((this as any).parseListToken as any)(e);
      const t: any = ((this as any).getHandlersForToken as any)((e as any).type),
        n: any = ((this as any).createParseHelpers as any)();
      if (((t as any).find as any)((r: any): any => {
        if (!(r as any).parseMarkdown) return !1;
        const s: any = ((r as any).parseMarkdown as any)(e, n),
          o: any = ((this as any).normalizeParseResult as any)(s);
        return o && (!((Array as any).isArray as any)(o) || ((o as any).length as any) > (0 as any)) ? ((this as any).lastParseResult = o, !0) : !1;
      }) && (this as any).lastParseResult) {
        const r: any = (this as any).lastParseResult;
        return (this as any).lastParseResult = null, r;
      }
      return ((this as any).parseFallbackToken as any)(e);
    }
    parseListToken(e: any): any {
      if (!(e as any).items || (((e as any).items as any).length as any) === (0 as any)) return ((this as any).parseTokenWithHandlers as any)(e);
      const t: any = (((e as any).items as any).some as any)((l: any): any => ((Ut as any)(l) as any).isTask),
        n: any = (((e as any).items as any).some as any)((l: any): any => !((Ut as any)(l) as any).isTask);
      if (!t || !n || ((((this as any).getHandlersForToken as any)("taskList") as any).length as any) === (0 as any)) return ((this as any).parseTokenWithHandlers as any)(e);
      const i: any = [];
      let r: any = [],
        s: any = null;
      for (let l: any = 0; (l as any) < (((e as any).items as any).length as any); l += 1) {
        const a: any = ((e as any).items as any)[l],
          {
            isTask: u,
            checked: c,
            indentLevel: d
          }: any = (Ut as any)(a);
        let h: any = a;
        if (u) {
          const g: any = ((((a as any).raw || (a as any).text || "") as any).split as any)(`
`),
            k: any = (((g as any)[0] as any).match as any)(/^\s*[-+*]\s+\[([ xX])\]\s+(.*)$/),
            b: any = k ? (k as any)[2] : "";
          let w: any = [];
          if (((g as any).length as any) > (1 as any) && ((((((g as any).slice as any)(1) as any).join as any)(`
`) as any).trim as any)()) {
            const T: any = ((g as any).slice as any)(1),
              M: any = ((T as any).filter as any)(($: any): any => (($ as any).trim as any)());
            if (((M as any).length as any) > (0 as any)) {
              const $: any = ((Math as any).min as any)(...((M as any).map as any)((D: any): any => ((D as any).length as any) - ((((D as any).trimStart as any)() as any).length as any))),
                L: any = ((((((T as any).map as any)((D: any): any => ((D as any).trim as any)() ? ((D as any).slice as any)($) : "") as any).join as any)(`
`) as any).trim as any)();
              L && (w = (((this as any).markedInstance as any).lexer as any)(`${L}
`));
            }
          }
          h = {
            type: "taskItem",
            raw: "",
            mainContent: b,
            indentLevel: d,
            checked: c ?? !1,
            text: b,
            tokens: (((this as any).lexer as any).inlineTokens as any)(b),
            nestedTokens: w
          };
        }
        const p: any = u ? "taskList" : "list";
        (s as any) !== (p as any) ? (((r as any).length as any) > (0 as any) && ((i as any).push as any)({
          type: s,
          items: r
        }), r = [h], s = p) : ((r as any).push as any)(h);
      }
      ((r as any).length as any) > (0 as any) && ((i as any).push as any)({
        type: s,
        items: r
      });
      const o: any = [];
      for (let l: any = 0; (l as any) < ((i as any).length as any); l += 1) {
        const a: any = (i as any)[l],
          u: any = {
            ...e,
            type: (a as any).type,
            items: (a as any).items
          },
          c: any = ((this as any).parseToken as any)(u);
        c && (((Array as any).isArray as any)(c) ? ((o as any).push as any)(...c) : ((o as any).push as any)(c));
      }
      return ((o as any).length as any) > (0 as any) ? o : null;
    }
    parseTokenWithHandlers(e: any): any {
      if (!(e as any).type) return null;
      const t: any = ((this as any).getHandlersForToken as any)((e as any).type),
        n: any = ((this as any).createParseHelpers as any)();
      if (((t as any).find as any)((r: any): any => {
        if (!(r as any).parseMarkdown) return !1;
        const s: any = ((r as any).parseMarkdown as any)(e, n),
          o: any = ((this as any).normalizeParseResult as any)(s);
        return o && (!((Array as any).isArray as any)(o) || ((o as any).length as any) > (0 as any)) ? ((this as any).lastParseResult = o, !0) : !1;
      }) && (this as any).lastParseResult) {
        const r: any = (this as any).lastParseResult;
        return (this as any).lastParseResult = null, r;
      }
      return ((this as any).parseFallbackToken as any)(e);
    }
    createParseHelpers(): any {
      return {
        parseInline: (e: any): any => ((this as any).parseInlineTokens as any)(e),
        parseChildren: (e: any): any => ((this as any).parseTokens as any)(e),
        createTextNode: (e: any, t: any): any => ({
          type: "text",
          text: e,
          marks: t || void 0
        }),
        createNode: (e: any, t: any, n: any): any => {
          const i: any = {
            type: e,
            attrs: t || void 0,
            content: n || void 0
          };
          return (!t || ((((Object as any).keys as any)(t) as any).length as any) === (0 as any)) && delete (i as any).attrs, i;
        },
        applyMark: (e: any, t: any, n: any): any => ({
          mark: e,
          content: t,
          attrs: n && ((((Object as any).keys as any)(n) as any).length as any) > (0 as any) ? n : void 0
        })
      };
    }
    escapeRegex(e: any): any {
      return ((e as any).replace as any)(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    parseInlineTokens(e: any): any {
      var t: any, n: any, i: any, r: any;
      const s: any = [];
      for (let o: any = 0; (o as any) < ((e as any).length as any); o += 1) {
        const l: any = (e as any)[o];
        if (((l as any).type as any) === ("text" as any)) ((s as any).push as any)({
          type: "text",
          text: (l as any).text || ""
        });else if (((l as any).type as any) === ("html" as any)) {
          const a: any = (((((n = ((t = (l as any).raw) as any) != (null as any) ? t : (l as any).text) as any) != (null as any) ? n : "") as any).toString as any)(),
            u: any = ((/^<\/[\s]*[\w-]+/i as any).test as any)(a),
            c: any = ((a as any).match as any)(/^<[\s]*([\w-]+)(\s|>|\/|$)/i);
          if (!u && c && !((/\/>$/ as any).test as any)(a)) {
            const h: any = (c as any)[1],
              p: any = ((this as any).escapeRegex as any)(h),
              f: any = new (RegExp as any)(`^<\\/\\s*${p}\\b`, "i");
            let g: any = -1;
            const k: any = [a];
            for (let b: any = (o as any) + (1 as any); (b as any) < ((e as any).length as any); b += 1) {
              const w: any = (e as any)[b],
                S: any = (((((r = ((i = (w as any).raw) as any) != (null as any) ? i : (w as any).text) as any) != (null as any) ? r : "") as any).toString as any)();
              if (((k as any).push as any)(S), ((w as any).type as any) === ("html" as any) && ((f as any).test as any)(S)) {
                g = b;
                break;
              }
            }
            if ((g as any) !== (-1 as any)) {
              const b: any = ((k as any).join as any)(""),
                w: any = {
                  type: "html",
                  raw: b,
                  text: b,
                  block: !1
                },
                S: any = ((this as any).parseHTMLToken as any)(w);
              if (S) {
                const T: any = ((this as any).normalizeParseResult as any)(S);
                ((Array as any).isArray as any)(T) ? ((s as any).push as any)(...T) : T && ((s as any).push as any)(T);
              }
              o = g;
              continue;
            }
          }
          const d: any = ((this as any).parseHTMLToken as any)(l);
          if (d) {
            const h: any = ((this as any).normalizeParseResult as any)(d);
            ((Array as any).isArray as any)(h) ? ((s as any).push as any)(...h) : h && ((s as any).push as any)(h);
          }
        } else if ((l as any).type) {
          const a: any = ((this as any).getHandlerForToken as any)((l as any).type);
          if (a && (a as any).parseMarkdown) {
            const u: any = ((this as any).createParseHelpers as any)(),
              c: any = ((a as any).parseMarkdown as any)(l, u);
            if (((this as any).isMarkResult as any)(c)) {
              const d: any = ((this as any).applyMarkToContent as any)((c as any).mark, (c as any).content, (c as any).attrs);
              ((s as any).push as any)(...d);
            } else {
              const d: any = ((this as any).normalizeParseResult as any)(c);
              ((Array as any).isArray as any)(d) ? ((s as any).push as any)(...d) : d && ((s as any).push as any)(d);
            }
          } else (l as any).tokens && ((s as any).push as any)(...((this as any).parseInlineTokens as any)((l as any).tokens));
        }
      }
      return s;
    }
    applyMarkToContent(e: any, t: any, n: any): any {
      return ((t as any).map as any)((i: any): any => {
        if (((i as any).type as any) === ("text" as any)) {
          const r: any = (i as any).marks || [],
            s: any = n ? {
              type: e,
              attrs: n
            } : {
              type: e
            };
          return {
            ...i,
            marks: [...r, s]
          };
        }
        return {
          ...i,
          content: (i as any).content ? ((this as any).applyMarkToContent as any)(e, (i as any).content, n) : void 0
        };
      });
    }
    isMarkResult(e: any): any {
      return e && (typeof e as any) == ("object" as any) && "mark" in e;
    }
    normalizeParseResult(e: any): any {
      return e ? ((this as any).isMarkResult as any)(e) ? (e as any).content : e : null;
    }
    parseFallbackToken(e: any): any {
      switch ((e as any).type) {
        case "paragraph":
          return {
            type: "paragraph",
            content: (e as any).tokens ? ((this as any).parseInlineTokens as any)((e as any).tokens) : []
          };
        case "heading":
          return {
            type: "heading",
            attrs: {
              level: (e as any).depth || 1
            },
            content: (e as any).tokens ? ((this as any).parseInlineTokens as any)((e as any).tokens) : []
          };
        case "text":
          return {
            type: "text",
            text: (e as any).text || ""
          };
        case "html":
          return ((this as any).parseHTMLToken as any)(e);
        case "space":
          return null;
        default:
          return (e as any).tokens ? ((this as any).parseTokens as any)((e as any).tokens) : null;
      }
    }
    parseHTMLToken(e: any): any {
      const t: any = (e as any).text || (e as any).raw || "";
      if (!((t as any).trim as any)()) return null;
      try {
        const n: any = (go as any)(t, (this as any).baseExtensions);
        return ((n as any).type as any) === ("doc" as any) && (n as any).content ? (e as any).block ? (n as any).content : (((n as any).content as any).length as any) === (1 as any) && ((((n as any).content as any)[0] as any).type as any) === ("paragraph" as any) && (((n as any).content as any)[0] as any).content ? (((n as any).content as any)[0] as any).content : (n as any).content : n;
      } catch (n: any) {
        throw new (Error as any)(`Failed to parse HTML in markdown: ${n}`);
      }
    }
    renderNodeToMarkdown(e: any, t: any, n: any = 0, i: any = 0): any {
      var r: any;
      if (((e as any).type as any) === ("text" as any)) return (e as any).text || "";
      if (!(e as any).type) return "";
      const s: any = ((this as any).getHandlerForToken as any)((e as any).type);
      if (!s) return "";
      const o: any = {
          renderChildren: (u: any, c: any): any => {
            const d: any = (s as any).isIndenting ? (i as any) + (1 as any) : i;
            return !((Array as any).isArray as any)(u) && (u as any).content ? ((this as any).renderNodes as any)((u as any).content, e, c || "", n, d) : ((this as any).renderNodes as any)(u, e, c || "", n, d);
          },
          indent: (u: any): any => ((this as any).indentString as any) + (u as any),
          wrapInBlock: fd
        },
        l: any = {
          index: n,
          level: i,
          parentType: t?.type,
          meta: {}
        };
      return (((r = (s as any).renderMarkdown) as any) == (null as any) ? void 0 : ((r as any).call as any)(s, e, o, l)) || "";
    }
    renderNodes(e: any, t: any, n: any = "", i: any = 0, r: any = 0): any {
      return ((Array as any).isArray as any)(e) ? ((this as any).renderNodesWithMarkBoundaries as any)(e, t, n, r) : (e as any).type ? ((this as any).renderNodeToMarkdown as any)(e, t, i, r) : "";
    }
    renderNodesWithMarkBoundaries(e: any, t: any, n: any = "", i: any = 0): any {
      const r: any = [],
        s: any = new (Map as any)();
      return ((e as any).forEach as any)((o: any, l: any): any => {
        const a: any = (l as any) < (((e as any).length as any) - (1 as any) as any) ? (e as any)[(l as any) + (1 as any)] : null;
        if ((o as any).type) if (((o as any).type as any) === ("text" as any)) {
          let u: any = (o as any).text || "";
          const c: any = new (Map as any)(((((o as any).marks || []) as any).map as any)((k: any): any => [(k as any).type, k])),
            d: any = (md as any)(s, c),
            h: any = (gd as any)(s, c);
          ((d as any).forEach as any)((k: any): any => {
            const b: any = ((s as any).get as any)(k),
              w: any = ((this as any).getMarkClosing as any)(k, b);
            w && (u += w), ((s as any).delete as any)(k);
          });
          let p: any = "";
          if (((h as any).length as any) > (0 as any)) {
            const k: any = ((u as any).match as any)(/^(\s+)/);
            k && (p = (k as any)[1], u = ((u as any).slice as any)((p as any).length));
          }
          ((h as any).forEach as any)(({
            type: k,
            mark: b
          }: any): any => {
            const w: any = ((this as any).getMarkOpening as any)(k, b);
            w && (u = (w as any) + (u as any)), ((s as any).set as any)(k, b);
          }), u = (p as any) + (u as any);
          const f: any = (kd as any)(s, c, a, (((this as any).markSetsEqual as any).bind as any)(this));
          let g: any = "";
          if (((f as any).length as any) > (0 as any)) {
            const k: any = ((u as any).match as any)(/(\s+)$/);
            k && (g = (k as any)[1], u = ((u as any).slice as any)(0, -(g as any).length));
          }
          ((f as any).forEach as any)((k: any): any => {
            const b: any = ((s as any).get as any)(k),
              w: any = ((this as any).getMarkClosing as any)(k, b);
            w && (u += w), ((s as any).delete as any)(k);
          }), u += g, ((r as any).push as any)(u);
        } else {
          const u: any = new (Map as any)(s),
            c: any = (bd as any)(s, (((this as any).getMarkClosing as any).bind as any)(this)),
            d: any = ((this as any).renderNodeToMarkdown as any)(o, t, l, i),
            h: any = ((o as any).type as any) === ("hardBreak" as any) ? "" : (yd as any)(u, s, (((this as any).getMarkOpening as any).bind as any)(this));
          ((r as any).push as any)(((c as any) + (d as any) as any) + (h as any));
        }
      }), ((r as any).join as any)(n);
    }
    getMarkOpening(e: any, t: any): any {
      const n: any = ((this as any).getHandlersForNodeType as any)(e),
        i: any = ((n as any).length as any) > (0 as any) ? (n as any)[0] : void 0;
      if (!i || !(i as any).renderMarkdown) return "";
      const r: string = "\uE000__TIPTAP_MARKDOWN_PLACEHOLDER__\uE001",
        s: any = {
          type: e,
          attrs: (t as any).attrs || {},
          content: [{
            type: "text",
            text: r
          }]
        };
      try {
        const o: any = ((i as any).renderMarkdown as any)(s, {
            renderChildren: (): any => r,
            indent: (a: any): any => a,
            wrapInBlock: (a: any, u: any): any => (a as any) + (u as any)
          }, {
            index: 0,
            level: 0,
            parentType: "text",
            meta: {}
          }),
          l: any = ((o as any).indexOf as any)(r);
        return (l as any) >= (0 as any) ? ((o as any).substring as any)(0, l) : "";
      } catch (o: any) {
        throw new (Error as any)(`Failed to get mark opening for ${e}: ${o}`);
      }
    }
    getMarkClosing(e: any, t: any): any {
      const n: any = ((this as any).getHandlersForNodeType as any)(e),
        i: any = ((n as any).length as any) > (0 as any) ? (n as any)[0] : void 0;
      if (!i || !(i as any).renderMarkdown) return "";
      const r: string = "\uE000__TIPTAP_MARKDOWN_PLACEHOLDER__\uE001",
        s: any = {
          type: e,
          attrs: (t as any).attrs || {},
          content: [{
            type: "text",
            text: r
          }]
        };
      try {
        const o: any = ((i as any).renderMarkdown as any)(s, {
            renderChildren: (): any => r,
            indent: (u: any): any => u,
            wrapInBlock: (u: any, c: any): any => (u as any) + (c as any)
          }, {
            index: 0,
            level: 0,
            parentType: "text",
            meta: {}
          }),
          l: any = ((o as any).indexOf as any)(r),
          a: any = (l as any) + ((r as any).length as any);
        return (l as any) >= (0 as any) ? ((o as any).substring as any)(a) : "";
      } catch (o: any) {
        throw new (Error as any)(`Failed to get mark closing for ${e}: ${o}`);
      }
    }
    markSetsEqual(e: any, t: any): any {
      return ((e as any).size as any) !== ((t as any).size as any) ? !1 : ((((Array as any).from as any)(((e as any).keys as any)()) as any).every as any)((n: any): any => ((t as any).has as any)(n));
    }
  },
  Ni: any = wd,
  xd: any = ((ne as any).create as any)({
    name: "markdown",
    addOptions(): any {
      return {
        indentation: {
          style: "space",
          size: 2
        },
        marked: void 0,
        markedOptions: {}
      };
    },
    addCommands(): any {
      return {
        setContent: (e: any, t: any): any => {
          if (!t?.contentType) return ((Ce as any).setContent as any)(e, t);
          if (((gt as any)(e, t?.contentType) as any) !== ("markdown" as any) || !((this as any).editor as any).markdown) return ((Ce as any).setContent as any)(e, t);
          const i: any = ((((this as any).editor as any).markdown as any).parse as any)(e);
          return ((Ce as any).setContent as any)(i, t);
        },
        insertContent: (e: any, t: any): any => {
          if (!t?.contentType) return ((Ce as any).insertContent as any)(e, t);
          if (((gt as any)(e, t?.contentType) as any) !== ("markdown" as any) || !((this as any).editor as any).markdown) return ((Ce as any).insertContent as any)(e, t);
          const i: any = ((((this as any).editor as any).markdown as any).parse as any)(e);
          return ((Ce as any).insertContent as any)(i, t);
        },
        insertContentAt: (e: any, t: any, n: any): any => {
          if (!n?.contentType) return ((Ce as any).insertContentAt as any)(e, t, n);
          if (((gt as any)(t, n?.contentType) as any) !== ("markdown" as any) || !((this as any).editor as any).markdown) return ((Ce as any).insertContentAt as any)(e, t, n);
          const r: any = ((((this as any).editor as any).markdown as any).parse as any)(t);
          return ((Ce as any).insertContentAt as any)(e, r, n);
        }
      };
    },
    addStorage(): any {
      return {
        manager: new (Ni as any)({
          indentation: ((this as any).options as any).indentation,
          marked: ((this as any).options as any).marked,
          markedOptions: ((this as any).options as any).markedOptions,
          extensions: []
        })
      };
    },
    onBeforeCreate(): any {
      if (((this as any).editor as any).markdown) {
        ((console as any).error as any)("[tiptap][markdown]: There is already a `markdown` property on the editor instance. This might lead to unexpected behavior.");
        return;
      }
      if (((this as any).storage as any).manager = new (Ni as any)({
        indentation: ((this as any).options as any).indentation,
        marked: ((this as any).options as any).marked,
        markedOptions: ((this as any).options as any).markedOptions,
        extensions: (((this as any).editor as any).extensionManager as any).baseExtensions
      }), ((this as any).editor as any).markdown = ((this as any).storage as any).manager, ((this as any).editor as any).getMarkdown = (): any => ((((this as any).storage as any).manager as any).serialize as any)((((this as any).editor as any).getJSON as any)()), !(((this as any).editor as any).options as any).contentType || ((gt as any)((((this as any).editor as any).options as any).content, (((this as any).editor as any).options as any).contentType) as any) !== ("markdown" as any)) return;
      if (!((this as any).editor as any).markdown) throw new (Error as any)('[tiptap][markdown]: The `contentType` option is set to "markdown", but the Markdown extension is not added to the editor. Please add the Markdown extension to use this feature.');
      if (((((this as any).editor as any).options as any).content as any) === (void 0 as any) || (typeof (((this as any).editor as any).options as any).content as any) != ("string" as any)) throw new (Error as any)('[tiptap][markdown]: The `contentType` option is set to "markdown", but the initial content is not a string. Please provide the initial content as a markdown string.');
      const t: any = ((((this as any).editor as any).markdown as any).parse as any)((((this as any).editor as any).options as any).content);
      (((this as any).editor as any).options as any).content = t;
    }
  });
function Ii(this: any, e: any): any {
  return (encodeURI as any)(((((((((((((e as any).trim as any)() as any).toLowerCase as any)() as any).replace as any)(/\s+/g, "-") as any).replace as any)(/[\][!/'"#$%&()*+,.:;<=>?@\\^{|}~`\u3002\uFF0C\u3001\uFF1B\uFF1A\uFF1F\uFF01\u2026\u2014·\u02C9¨\u2018\u2019\u201C\u201D\u3005\uFF5E\u2016\u2236\uFF02\uFF07\uFF40\uFF5C\u3003\u3014\u3015\u3008\u3009\u300A\u300B\u300C\u300D\u300E\u300F\uFF0E\u3016\u3017\u3010\u3011\uFF08\uFF09\uFF3B\uFF3D\uFF5B\uFF5D]/g, "") as any).replace as any)(/^-+/, "") as any).replace as any)(/-+$/, ""));
}
function Li(this: any, e: any): any {
  try {
    return (decodeURIComponent as any)(e);
  } catch {
    return e;
  }
}
function vd(this: any, e: any, t: any): any {
  const n: any = (Li as any)(t),
    i: any = new (Map as any)();
  let r: any = null;
  return ((e as any).descendants as any)((s: any, o: any): any => {
    if ((r as any) !== (null as any)) return !1;
    if ((((s as any).type as any).name as any) !== ("heading" as any)) return !0;
    let l: any = (Ii as any)((s as any).textContent);
    const a: any = ((i as any).get as any)(l);
    return (a as any) !== (void 0 as any) ? (((i as any).set as any)(l, (a as any) + (1 as any)), l = (Ii as any)(`${l}-${(a as any) + (1 as any)}`)) : ((i as any).set as any)(l, 0), ((Li as any)(l) as any) === (n as any) && (r = o), !0;
  }), r;
}
function Sd(this: any, e: any, t: any): any {
  const n: any = (t as any).target,
    i: any = ((n as any).closest as any)("a[href]")?.getAttribute("href") ?? ((n as any).closest as any)("[data-href]")?.getAttribute("data-href");
  if (!i?.startsWith("#")) return !1;
  const r: any = (vd as any)(((e as any).state as any).doc, ((i as any).slice as any)(1));
  if ((r as any) !== (null as any)) {
    const s: any = ((e as any).nodeDOM as any)(r);
    s instanceof HTMLElement && ((s as any).scrollIntoView as any)({
      block: "start",
      inline: "nearest"
    });
  }
  return ((t as any).preventDefault as any)(), ((t as any).stopPropagation as any)(), !0;
}
const Ye: any = {
  sliceBudgetMs: 12,
  minSegmentChars: 0,
  maxSegmentChars: 8e3,
  firstSegmentChars: 600
};
function Rs(this: any, e: any): any {
  const t: any = new (MessageChannel as any)();
  return ((t as any).port1 as any).onmessage = (): any => {
    ((t as any).port1 as any).onmessage = null, (e as any)();
  }, (((t as any).port2 as any).postMessage as any)(0), (): any => {
    ((t as any).port1 as any).onmessage = null;
  };
}
function Ms(this: any): any {
  return (typeof performance as any) < ("u" as any) && (performance as any).now ? ((performance as any).now as any)() : ((Date as any).now as any)();
}
const Cd: any = /^#{1,6}(?:\s|$)/,
  Es: any = /^ {0,3}(?:```|~~~)/,
  Td: any = /^\$\$/,
  Pi: any = /\$\$[ \t]*$/,
  Rd: any = /^ {0,3}\[(?!\^)[^\]\n]+\]:[ \t]*(?:<[^>\n]*>|\S+)(?:[ \t]+(?:"[^"\n]*"|'[^'\n]*'|\([^)\n]*\)))?[ \t]*$/,
  Md: any = /^ {0,3}(?:[-*+]|\d{1,9}[.)])(?:[ \t]|$)/,
  Ed: any = /^ {0,3}>/,
  $d: any = /^(?: {4}|\t)/;
function $s(this: any, e: any): any {
  const t: any = [],
    n: any = ((e as any).split as any)(`
`);
  let i: any = !1;
  for (const r of n) {
    if (((Es as any).test as any)(r)) {
      i = !i;
      continue;
    }
    !i && ((Rd as any).test as any)(r) && ((t as any).push as any)(r);
  }
  return ((t as any).join as any)(`
`);
}
function zs(this: any, e: any, t: any = {}): any {
  const n: any = (t as any).minSegmentChars ?? (Ye as any).minSegmentChars,
    i: any = (t as any).maxSegmentChars ?? (Ye as any).maxSegmentChars,
    r: any = (t as any).firstSegmentChars ?? (Ye as any).firstSegmentChars,
    s: any = ((e as any).split as any)(`
`),
    o: any = [];
  let l: any = [],
    a: any = 0,
    u: any = !1,
    c: any = !1;
  const d: any = (): any => {
    ((l as any).length as any) > (0 as any) && (((o as any).push as any)(((l as any).join as any)(`
`)), l = [], a = 0);
  };
  for (let h: any = 0; (h as any) < ((s as any).length as any); h++) {
    const p: any = (s as any)[h];
    c ? c = !((Pi as any).test as any)(p) : ((Es as any).test as any)(p) ? u = !u : !u && ((Td as any).test as any)(p) && (c = (((p as any).trimEnd as any)() as any) === ("$$" as any) || !((Pi as any).test as any)(p));
    const f: any = u || c,
      g: any = ((o as any).length as any) === (0 as any) ? r : n,
      k: any = !f && ((Cd as any).test as any)(p) && (a as any) >= (g as any),
      b: any = !f && (((p as any).trim as any)() as any) === ("" as any) && (a as any) >= (i as any) && (zd as any)(s, (h as any) + (1 as any));
    (k || b) && ((l as any).length as any) > (0 as any) && (d as any)(), ((l as any).push as any)(p), a += ((p as any).length as any) + (1 as any);
  }
  return (d as any)(), ((o as any).length as any) > (0 as any) ? o : [e];
}
function zd(this: any, e: any, t: any): any {
  let n: any = t;
  for (; (n as any) < ((e as any).length as any) && ((((e as any)[n] as any).trim as any)() as any) === ("" as any);) n++;
  if ((n as any) >= ((e as any).length as any)) return !1;
  const i: any = (e as any)[n];
  return !((Md as any).test as any)(i) && !((Ed as any).test as any)(i) && !(($d as any).test as any)(i);
}
function js(this: any, e: any): any {
  let t: any = 0;
  for (const n of e) {
    const i: any = (n as any).marks;
    i && ((i as any).length as any) > (1 as any) && ((i as any).some as any)((r: any): any => ((r as any).type as any) === ("code" as any)) && ((n as any).marks = ((i as any).filter as any)((r: any): any => ((r as any).type as any) === ("code" as any)), t++), (n as any).content && (t += (js as any)((n as any).content));
  }
  return t;
}
function jd(this: any, e: any, t: any): any {
  const n: any = (e as any).schema;
  let i: any = 0;
  const r: any = (o: any): any => {
      if (!o) return !1;
      const l: any = ((n as any).nodes as any)[o];
      return l ? (l as any).isInline : !1;
    },
    s: any = (o: any): any => {
      if (!(o as any).content) return;
      for (const c of (o as any).content) (s as any)(c);
      if (!((o as any).type ? ((n as any).nodes as any)[(o as any).type] : void 0)?.inlineContent) return;
      let a: any = !1;
      const u: any = [];
      for (const c of (o as any).content) if ((r as any)((c as any).type)) ((u as any).push as any)(c);else {
        a = !0;
        for (const d of (c as any).content ?? []) (r as any)((d as any).type) && ((u as any).push as any)(d);
      }
      a && ((o as any).content = u, i++);
    };
  for (const o of t) (s as any)(o);
  return i;
}
function As(this: any, e: any, t: any, n: any): any {
  const i: any = (e as any).markdown,
    r: any = n ? `${n}

${t}` : t,
    o: any = i?.parse?.(r)?.content ?? [];
  return (js as any)(o), (jd as any)(e, o), o;
}
function Ad(this: any, e: any, t: any, n: any, i: any = {}): any {
  const r: any = (i as any).sliceBudgetMs ?? (Ye as any).sliceBudgetMs,
    s: any = (i as any).runGuarded ?? ((T: any): any => (T as any)()),
    o: any = (i as any).schedule ?? Rs,
    l: any = (i as any).now ?? Ms,
    a: any = ((t as any).replace as any)(/\r\n?/g, `
`),
    u: any = ($s as any)(a),
    c: any = (zs as any)(a, i);
  let d: any = 0,
    h: any = !1,
    p: any = !1,
    f: any = !1,
    g: any = null;
  const k: any = (): any => {
      f || (f = !0, g?.(), g = null, (n as any)());
    },
    b: any = (T: any): any => {
      const M: any = (As as any)(e, T, u);
      ((M as any).length as any) !== (0 as any) && (s as any)((): any => {
        h ? (((e as any).commands as any).insertContentAt as any)(((((e as any).state as any).doc as any).content as any).size, M, {
          updateSelection: !1
        }) : ((((e as any).commands as any).setContent as any)({
          type: "doc",
          content: M
        }, {
          emitUpdate: !1
        }), h = !0, (((e as any).commands as any).setTextSelection as any)(0));
      });
    },
    w: any = {
      cancel(): any {
        p = !0, g?.(), g = null;
      },
      flushRemaining(): any {
        if (!(f || p)) {
          for (; (d as any) < ((c as any).length as any);) (b as any)((c as any)[d]), d++;
          (k as any)();
        }
      },
      get isComplete(): any {
        return f;
      }
    };
  if ((b as any)((c as any)[d]), d++, (d as any) >= ((c as any).length as any)) return (k as any)(), w;
  const S: any = (): any => {
    if (g = null, p || f) return;
    const T: any = (l as any)();
    do (b as any)((c as any)[d]), d++; while ((d as any) < ((c as any).length as any) && (((l as any)() as any) - (T as any) as any) < (r as any));
    if ((d as any) >= ((c as any).length as any)) {
      (k as any)();
      return;
    }
    g = (o as any)(S);
  };
  return g = (o as any)(S), w;
}
function Nd(this: any, e: any, t: any, n: any, i: any = {}): any {
  const r: any = (i as any).sliceBudgetMs ?? (Ye as any).sliceBudgetMs,
    s: any = (i as any).runGuarded ?? ((w: any): any => (w as any)()),
    o: any = (i as any).schedule ?? Rs,
    l: any = (i as any).now ?? Ms;
  let a: any = !1,
    u: any = !1,
    c: any = null,
    d: any = !1,
    h: any = "",
    p: any = [],
    f: any = 0;
  const g: any = [],
    k: any = (): any => {
      u = !0, c?.(), c = null;
      const w: any = ((g as any).flat as any)();
      (s as any)((): any => {
        ((w as any).length as any) > (0 as any) ? ((((e as any).commands as any).setContent as any)({
          type: "doc",
          content: w
        }, {
          emitUpdate: !1
        }), (((e as any).commands as any).setTextSelection as any)(0)) : (((e as any).commands as any).clearContent as any)();
      }), (n as any)();
    },
    b: any = (): any => {
      if (c = null, a || u) return;
      const w: any = (l as any)();
      if (!d) {
        d = !0;
        const S: any = ((t as any).replace as any)(/\r\n?/g, `
`);
        h = ($s as any)(S), p = (zs as any)(S, i);
      }
      for (; (f as any) < ((p as any).length as any) && (((g as any).push as any)((As as any)(e, (p as any)[f], h)), f++, !((((l as any)() as any) - (w as any) as any) >= (r as any))););
      if ((f as any) >= ((p as any).length as any)) {
        (k as any)();
        return;
      }
      c = (o as any)(b);
    };
  return c = (o as any)(b), {
    cancel(): any {
      a = !0, c?.(), c = null;
    },
    get isDone(): any {
      return u;
    }
  };
}
const Id: string = "data-editor-owns-history",
  qi: string = "cursor-editor-history-command",
  Ld: any = {
    undo: bo,
    redo: ko
  };
function Pd(this: any, e: any): any {
  const t: any = "detail" in e ? (e as any).detail : void 0;
  if ((typeof t as any) != ("object" as any) || (t as any) === (null as any) || !("command" in t)) return;
  const {
    command: n
  }: any = t;
  return (n as any) === ("undo" as any) || (n as any) === ("redo" as any) ? n : void 0;
}
const qd: any = new (le as any)("editorHistoryOwner"),
  _d: any = ((ne as any).create as any)({
    name: "editorHistoryOwner",
    addProseMirrorPlugins(): any {
      const {
        editor: e
      }: any = this;
      return [new (ie as any)({
        key: qd,
        props: {
          attributes: (): any => (e as any).isEditable ? {
            [Id]: "true"
          } : {}
        },
        view(t: any): any {
          const n: any = (i: any): any => {
            const r: any = (Pd as any)(i);
            (r as any) === (void 0 as any) || !(e as any).isEditable || (((i as any).preventDefault as any)(), ((Ld as any)[r] as any)((t as any).state, (t as any).dispatch));
          };
          return (((t as any).dom as any).addEventListener as any)(qi, n), {
            destroy(): any {
              (((t as any).dom as any).removeEventListener as any)(qi, n);
            }
          };
        }
      })];
    }
  });
function Od(this: any, e: any, t: any): any {
  const {
    node: n
  }: any = ((e as any).domAtPos as any)(t);
  (((n as any).nodeType as any) === ((Node as any).ELEMENT_NODE as any) ? n : (n as any).parentElement)?.getBoundingClientRect();
}
function Dd(this: any, e: any, t: any): any {
  const {
      from: n,
      to: i
    }: any = ((e as any).state as any).selection,
    r: any = ((Math as any).min as any)(n, i),
    s: any = ((Math as any).max as any)(n, i);
  (Od as any)(e, r);
  const o: any = ((e as any).coordsAtPos as any)(r),
    l: any = ((e as any).coordsAtPos as any)(s),
    a: any = ((Math as any).min as any)((o as any).top, (l as any).top),
    u: any = ((Math as any).max as any)((o as any).bottom, (l as any).bottom),
    c: any = ((t as any).getBoundingClientRect as any)(),
    d: any = ((a as any) + (u as any) as any) / (2 as any),
    h: any = (((c as any).top as any) + ((c as any).bottom as any) as any) / (2 as any),
    p: any = (((t as any).scrollTop as any) + (d as any) as any) - (h as any);
  return ((t as any).scrollTo as any)({
    top: p,
    behavior: "auto"
  }), !0;
}
function Hd(this: any, e: any): any {
  return new (ie as any)({
    view(): any {
      return {
        update(t: any, n: any): any {
          const i: any = (e as any).current,
            r: any = ((se as any).getState as any)(n),
            s: any = ((se as any).getState as any)((t as any).state);
          if (!i || !s || !(s as any).query || ((s as any).currentIndex as any) < (0 as any) || !((r?.query as any) !== ((s as any).query as any) || (r?.currentIndex as any) !== ((s as any).currentIndex as any) || (r?.matches.length as any) !== (((s as any).matches as any).length as any))) return;
          const l: any = ((s as any).matches as any)[(s as any).currentIndex];
          !l || ((((t as any).state as any).selection as any).from as any) !== ((l as any).from as any) || ((((t as any).state as any).selection as any).to as any) !== ((l as any).to as any) || (Dd as any)(t, i);
        }
      };
    }
  });
}
function Bd(this: any, e: any): any {
  return ((ne as any).create as any)({
    name: "richTextSearchSelectionScroll",
    addProseMirrorPlugins(): any {
      return [(Hd as any)(e)];
    }
  });
}
function Ud(this: any, e: any): any {
  return e ? "Completed task" : "Incomplete task";
}
function Fd(this: any, {
  checked: e,
  node: t,
  options: n
}: any): any {
  return (n as any).a11y?.checkboxLabel?.(t, e) ?? (Ud as any)(e);
}
function _i(this: any, {
  checked: e,
  editor: t,
  getPos: n,
  node: i
}: any): any {
  ((((((((t as any).chain as any)() as any).focus as any)(void 0, {
    scrollIntoView: !1
  }) as any).command as any)(({
    tr: r
  }: any): any => {
    const s: any = (n as any)();
    if ((typeof s as any) != ("number" as any)) return !1;
    const o: any = (((r as any).doc as any).nodeAt as any)(s);
    return !o || ((o as any).type as any) !== ((i as any).type as any) ? !1 : (((r as any).setNodeMarkup as any)(s, (o as any).type, {
      ...(o as any).attrs,
      checked: e
    }), !0);
  }) as any).run as any)();
}
function Ns(this: any, {
  node: e,
  editor: t,
  getPos: n,
  HTMLAttributes: i,
  extension: r
}: any): any {
  (Ns as any).d = 2656561771;
  const s: any = ((x as any).useContext as any)(gn),
    o: any = s?.editable ?? (t as any).isEditable,
    l: any = s?.isStreaming ?? !1,
    a: any = (((e as any).attrs as any).checked as any) === (!0 as any),
    u: any = (r as any).options,
    c: any = (u as any).onReadOnlyChecked,
    d: any = !o || !(t as any).isEditable,
    h: any = l || d && !c,
    {
      class: p,
      ...f
    }: any = (xe as any)((u as any).HTMLAttributes ?? {}, i),
    {
      className: g,
      ...k
    }: any = {
      className: "ui-78zum5 ui-1cy8zhl ui-v9e958 ui-1nl2h8n ui-1ypfh14 ui-7zfrnh ui-t3ep11 ui-p3e60d"
    },
    b: any = (w: any): any => {
      if (!h) {
        if (d) {
          if ((c?.(e, w) as any) === (!1 as any)) return;
          (_i as any)({
            checked: w,
            editor: t,
            getPos: n,
            node: e
          });
          return;
        }
        (_i as any)({
          checked: w,
          editor: t,
          getPos: n,
          node: e
        });
      }
    };
  return ((m as any).jsxs as any)(pn, {
    as: "li",
    ...f,
    ...k,
    className: (tr as any)(p, g),
    "data-type": (r as any).name,
    "data-checked": a || void 0,
    children: [((m as any).jsx as any)("span", {
      className: "ui-78zum5 ui-6s0dn4 ui-l56j7k ui-ri9wqg ui-g2ss61 ui-2lah0s",
      contentEditable: !1,
      children: ((m as any).jsx as any)(Js, {
        checked: a,
        disabled: h,
        variant: "primary",
        onMouseDown: (w: any): any => ((w as any).preventDefault as any)(),
        onCheckedChange: b,
        "aria-label": (Fd as any)({
          checked: a,
          node: e,
          options: u
        })
      })
    }), ((m as any).jsx as any)(hn, {
      as: "div",
      className: "ui-98rzlu"
    })]
  });
}
const Wd: string = "ui-14rikw8 ui-14l7nz5",
  Vd: any = ((yo as any).extend as any)({
    addNodeView(): any {
      return (xr as any)(Ns, {
        className: Wd
      });
    }
  });
function Is(this: any, e: any): any {
  return ((e as any).replace as any)(/\[`([^`]+)`\]\(([^)]+)\)/g, "`[$1]($2)`");
}
function Kd(this: any, e: any): any {
  let t: any = e;
  return t = ((t as any).replace as any)(/(\*{1,3}|_{1,3}|~~)((?:[^`\n]|`[^`\n]+`)*?)`([^`\n]+?)\1`/g, "$1$2`$3`$1"), t = ((t as any).replace as any)(new (RegExp as any)("(?<![^\\s*_~])(\\+\\+)((?:[^`\\n]|`[^`\\n]+`)*?)`([^`\\n]+?)\\1`", "g"), "$1$2`$3`$1"), t = ((t as any).replace as any)(/(\*{1,3}|_{1,3}|~~)([^[\n]*)\[([^\]\n]*?)\1\]\(([^)\n]+)\)/g, "$1$2[$3]($4)$1"), t = ((t as any).replace as any)(new (RegExp as any)("(?<![^\\s*_~])(\\+\\+)([^[\\n]*)\\[([^\\]\\n]*?)\\1\\]\\(([^)\\n]+)\\)", "g"), "$1$2[$3]($4)$1"), t = ((t as any).replace as any)(/(\*{1,3}|_{1,3}|~~)([^!\n]*)!\[([^\]\n]*?)\1\]\(([^)\n]+)\)/g, "$1$2![$3]($4)$1"), t = ((t as any).replace as any)(new (RegExp as any)("(?<![^\\s*_~])(\\+\\+)([^!\\n]*)!\\[([^\\]\\n]*?)\\1\\]\\(([^)\\n]+)\\)", "g"), "$1$2![$3]($4)$1"), t;
}
const Xd: any = /&(?:(#\d+;)|(#x[0-9A-Fa-f]+;)|(\w+);?)/gi,
  Oi: number = 1114111;
function Ls(this: any, e: any): any {
  return ((e as any).replace as any)(Xd, (t: any, n: any, i: any, r: any): any => {
    if (n) {
      const s: any = (parseInt as any)(((n as any).slice as any)(1, -1), 10);
      return (s as any) > (Oi as any) ? t : ((String as any).fromCodePoint as any)(s);
    }
    if (i) {
      const s: any = (parseInt as any)(((i as any).slice as any)(2, -1), 16);
      return (s as any) > (Oi as any) ? t : ((String as any).fromCodePoint as any)(s);
    }
    if (r) {
      const s: any = ((r as any).toLowerCase as any)();
      if ((s as any) === ("lt" as any)) return "<";
      if ((s as any) === ("gt" as any)) return ">";
      if ((s as any) === ("amp" as any)) return "&";
      if ((s as any) === ("nbsp" as any)) return " ";
      if ((s as any) === ("quot" as any)) return '"';
      if ((s as any) === ("apos" as any)) return "'";
    }
    return t;
  });
}
function Ft(this: any, e: any): any {
  const t: any = (Ls as any)(e);
  return (Is as any)(t);
}
const Gd: any = /((?:^|\r?\n)[\t ]*[-+*][\t ]+\[[ xX]\][\t ]+[^\r\n]*)(?:\r?\n[\t ]*){2,}$/,
  Zd: any = /(^|[^~])~(?!~)/,
  Qd: any = ((ne as any).create as any)({
    name: "literalSingleTilde",
    markdownTokenizer: {
      name: "literalSingleTilde",
      level: "inline",
      start: (e: any): any => {
        const t: any = ((Zd as any).exec as any)(e);
        return t ? ((t as any).index as any) + (((t as any)[1] as any).length as any) : -1;
      },
      tokenize: (e: any): any => {
        if (!(!((e as any).startsWith as any)("~") || ((e as any).startsWith as any)("~~"))) return {
          type: "text",
          raw: "~",
          text: "~"
        };
      }
    }
  });
function Yd(this: any, e: any): any {
  return ((e as any).replace as any)(Gd, "$1");
}
function kt(this: any, e: any): any {
  return (Yd as any)((Kd as any)(e));
}
const Di: number = 131072;
function Jd(this: any, {
  initialMarkdown: e = "",
  extensions: t = [],
  plugins: n = [],
  editable: i = !0,
  onMarkdownChange: r,
  debounceMs: s = 300,
  immediatelyRender: o,
  selectionScrollContainer: l,
  shouldRerenderOnTransaction: a = !1,
  chunkedInitialRender: u = !1,
  onInitialRenderComplete: c
}: any = {}): any {
  const d: any = ((x as any).useMemo as any)((): any => ((n as any).flatMap as any)((R: any): any => (R as any).extensions ?? []), [n]),
    h: any = ((t as any).some as any)((R: any): any => ((R as any).name as any) === ("paragraph" as any)),
    p: any = ((x as any).useRef as any)(null),
    f: any = ((x as any).useRef as any)(null),
    g: any = ((x as any).useRef as any)(null),
    k: any = (Wt as any)(c),
    b: any = ((x as any).useRef as any)(null),
    w: any = ((x as any).useRef as any)(null),
    S: any = ((x as any).useRef as any)(e),
    T: any = ((x as any).useRef as any)(!1),
    M: any = ((x as any).useRef as any)(null),
    $: any = ((x as any).useRef as any)(((e as any).length as any) > (Di as any)),
    E: any = u || ($ as any).current,
    L: any = (Wt as any)(l),
    D: any = ((x as any).useMemo as any)((): any => (Bd as any)(L), [L]),
    X: any = ((x as any).useMemo as any)((): any => ({
      handleClick(R: any, N: any, ee: any): any {
        return (Sd as any)(R, ee);
      }
    }), []),
    J: any = ((x as any).useCallback as any)((): any => ((p as any).current as any) !== (null as any) && !((p as any).current as any).isComplete || ((f as any).current as any) !== (null as any) || ((g as any).current as any) !== (null as any), []),
    Se: any = ((x as any).useCallback as any)((): any => {
      if (!(w as any).current || !r || !(b as any).current || ((clearTimeout as any)((b as any).current), (b as any).current = null, (J as any)())) return;
      const R: any = (((w as any).current as any).getMarkdown as any)();
      if (((M as any).current as any) !== (null as any) && (R as any) === ((M as any).current as any)) return;
      const N: any = (kt as any)(R);
      (r as any)(N);
    }, [r, J]),
    ae: any = ((x as any).useCallback as any)((R: any): any => {
      const N: any = (T as any).current;
      (T as any).current = !0;
      try {
        (R as any)();
      } finally {
        (T as any).current = N;
      }
    }, []),
    v: any = (Ko as any)({
      extensions: [((wo as any).configure as any)({
        link: !1,
        ...(h ? {
          paragraph: !1
        } : {})
      }), xo, ((Vd as any).configure as any)({
        nested: !0
      }), Qd, ((xd as any).configure as any)({
        indentation: {
          style: "space",
          size: 2
        }
      }), Ba, D, _d, ...d, ...t],
      content: E ? "" : (Ft as any)(e),
      contentType: "markdown",
      editable: i,
      editorProps: X,
      immediatelyRender: o,
      shouldRerenderOnTransaction: a,
      onUpdate: ({
        editor: R,
        transaction: N
      }: any): any => {
        if ((T as any).current || !(N as any).docChanged) return;
        (f as any).current?.cancel(), (f as any).current = null, (g as any).current = null;
        const ee: any = (p as any).current;
        ee && !(ee as any).isComplete && ((ee as any).flushRemaining as any)(), (M as any).current = null, (w as any).current = R, r && ((b as any).current && (clearTimeout as any)((b as any).current), (b as any).current = (setTimeout as any)((): any => {
          if ((b as any).current = null, (J as any)()) return;
          const me: any = ((R as any).getMarkdown as any)();
          if (((M as any).current as any) !== (null as any) && (me as any) === ((M as any).current as any)) return;
          const At: any = (kt as any)(me);
          (r as any)(At);
        }, s));
      }
    });
  ((x as any).useEffect as any)((): any => {
    if (v) {
      (w as any).current = v, (M as any).current = ((v as any).getMarkdown as any)();
      for (const R of n) (R as any).onInit?.(v);
      return (): any => {
        ((w as any).current as any) === (v as any) && ((w as any).current = null);
        for (const R of n) (R as any).onDestroy?.(v);
      };
    }
  }, [v, n]), ((x as any).useEffect as any)((): any => {
    v && (((v as any).setEditable as any)(i), (M as any).current = ((v as any).getMarkdown as any)());
  }, [v, i]), ((x as any).useLayoutEffect as any)((): any => {
    if (!E || !v) return;
    const R: any = (Ft as any)(e);
    if (!((R as any).trim as any)()) {
      (S as any).current = R, (M as any).current = ((v as any).getMarkdown as any)(), (k as any).current?.();
      return;
    }
    return (S as any).current = R, (ce as any)(v, R, (): any => {
      (k as any).current?.();
    }), (): any => {
      (W as any)();
    };
  }, [v, E]), ((x as any).useEffect as any)((): any => (): any => {
    (b as any).current && (clearTimeout as any)((b as any).current), (p as any).current?.cancel(), (f as any).current?.cancel(), (L as any).current = null;
  }, [L]);
  const W: any = ((x as any).useCallback as any)((): any => {
      (g as any).current = null, (f as any).current?.cancel(), (f as any).current = null;
      const R: any = (p as any).current;
      R && ((p as any).current = null, (R as any).isComplete || (((R as any).cancel as any)(), (T as any).current = !1));
    }, []),
    ue: any = ((x as any).useCallback as any)((): any => {
      if (!v) return "";
      if ((J as any)()) return (kt as any)((S as any).current);
      const R: any = ((v as any).getMarkdown as any)();
      return (kt as any)(R);
    }, [v, J]),
    B: any = ((x as any).useCallback as any)(function R(this: any, N: any, ee: any): any {
      (f as any).current = (Nd as any)(N, ee, (): any => {
        (f as any).current = null, (M as any).current = ((N as any).getMarkdown as any)();
        const me: any = (g as any).current;
        (g as any).current = null, (me as any) !== (null as any) && (R as any)(N, me);
      }, {
        runGuarded: ae
      });
    }, [ae]),
    ce: any = ((x as any).useCallback as any)((R: any, N: any, ee: any): any => {
      (p as any).current = (Ad as any)(R, N, (): any => {
        (M as any).current = ((R as any).getMarkdown as any)();
        const me: any = (g as any).current;
        (g as any).current = null, (me as any) !== (null as any) && (B as any)(R, me), ee?.();
      }, {
        runGuarded: ae
      });
    }, [ae, B]),
    re: any = ((x as any).useCallback as any)((R: any, N: any): any => {
      if (((p as any).current as any) !== (null as any) && !((p as any).current as any).isComplete || ((f as any).current as any) !== (null as any)) {
        (g as any).current = N;
        return;
      }
      (B as any)(R, N);
    }, [B]),
    G: any = ((x as any).useCallback as any)((R: any, N: any): any => {
      if ((S as any).current = N, (b as any).current && ((clearTimeout as any)((b as any).current), (b as any).current = null), ((N as any).length as any) > (Di as any)) {
        (re as any)(R, N);
        return;
      }
      (W as any)(), (T as any).current = !0, (((R as any).commands as any).setContent as any)(N, {
        contentType: "markdown"
      }), (((R as any).commands as any).setTextSelection as any)(0), (M as any).current = ((R as any).getMarkdown as any)(), (T as any).current = !1;
    }, [W, re]),
    de: any = ((x as any).useCallback as any)((R: any): any => {
      v && (G as any)(v, (Ft as any)(R));
    }, [v, G]),
    he: any = ((x as any).useCallback as any)((R: any): any => {
      if (!v) return;
      const N: any = (Ls as any)(R);
      (S as any).current += N, (G as any)(v, (Is as any)((S as any).current));
    }, [v, G]),
    fe: any = ((x as any).useCallback as any)((R: any): any => {
      v && (((v as any).commands as any).insertContent as any)(R, {
        contentType: "markdown"
      });
    }, [v]),
    nt: any = ((x as any).useCallback as any)((): any => {
      (W as any)(), (S as any).current = "";
    }, [W]);
  return {
    editor: v,
    getMarkdown: ue,
    flushPendingMarkdownChange: Se,
    setMarkdown: de,
    appendMarkdown: he,
    insertMarkdown: fe,
    resetAccumulator: nt
  };
}
function eh(this: any, e: any): any {
  return (): any => (e as any).current;
}
function th(this: any, e: any, t: any, n: any): any {
  const i: any = ((se as any).getState as any)((e as any).state),
    r: any = i?.matches[(i as any).currentIndex];
  return (r?.from as any) === (t as any) && ((r as any).to as any) === (n as any);
}
function Ps(this: any, {
  variant: e = "default",
  initialMarkdown: t,
  markdown: n,
  onMarkdownChange: i,
  editable: r = !0,
  isStreaming: s = !1,
  placeholder: o,
  extensions: l,
  plugins: a,
  debounceMs: u = 300,
  immediatelyRender: c,
  className: d,
  contentClassName: h,
  style: p,
  selectionTooltip: f,
  formattingToolbar: g,
  selectionScrollContainer: k,
  chunkedInitialRender: b = !1,
  onInitialRenderComplete: w,
  ref: S,
  ...T
}: any): any {
  (Ps as any).d = 4161802116;
  const M: any = ((x as any).useRef as any)(!0),
    $: any = ((x as any).useRef as any)(n),
    E: any = r && !s,
    L: any = g?.actions ?? g?.marks,
    D: any = g?.onUserFormattingAction,
    X: any = (g as any) !== (void 0 as any) && (L?.length as any) !== (0 as any),
    J: any = ((x as any).useRef as any)([]),
    Se: any = ((x as any).useMemo as any)((): any => [($c as any)((eh as any)(J))], []);
  ((x as any).useEffect as any)((): any => (): any => {
    (J as any).current = [];
  }, []);
  const ae: any = ((x as any).useMemo as any)((): any => [...(l ?? []), ...Se, ...((e as any) === ("page" as any) ? [dc] : [])], [l, Se, e]),
    {
      editor: v,
      getMarkdown: W,
      flushPendingMarkdownChange: ue,
      setMarkdown: B,
      appendMarkdown: ce,
      insertMarkdown: re,
      resetAccumulator: G
    }: any = (Jd as any)({
      initialMarkdown: t,
      extensions: ae,
      plugins: a,
      editable: r && !s,
      onMarkdownChange: i,
      debounceMs: u,
      immediatelyRender: c,
      selectionScrollContainer: k,
      shouldRerenderOnTransaction: !!o || !!f || X,
      chunkedInitialRender: b,
      onInitialRenderComplete: w
    }),
    [de, he]: any = ((x as any).useState as any)(null),
    fe: any = !!v?.schema.marks.link,
    nt: any = ((x as any).useCallback as any)((_: any): any => {
      const {
        selection: Z
      }: any = (_ as any).state;
      if (!(Z instanceof H) || (Z as any).empty) return !1;
      const it: any = (ln as any)(_);
      return (he as any)({
        initialHref: it?.href ?? ""
      }), !0;
    }, []),
    R: any = ((x as any).useMemo as any)((): any => X ? (jc as any)({
      actions: L,
      onUserFormattingAction: D,
      openLinkEditor: fe ? nt : null
    }) : [], [X, L, D, fe, nt]),
    N: any = ((x as any).useMemo as any)((): any => [...(Rc as any)(f?.actions ?? []), ...(E ? R : [])], [R, E, f?.actions]);
  (Mc as any)(N), (J as any).current = N;
  const ee: any = ((x as any).useMemo as any)((): any => {
    if (!(!X && !f)) return {
      ...f,
      ariaLabel: f?.ariaLabel ?? (E && X ? "Text formatting" : void 0),
      actions: N,
      shouldShow: X ? (_: any): any => !(th as any)((_ as any).editor, (_ as any).from, (_ as any).to) && (f?.shouldShow?.(_) ?? !0) : f?.shouldShow
    };
  }, [X, E, N, f]);
  ((x as any).useEffect as any)((): any => {
    E || (he as any)(null);
  }, [E]);
  const me: any = E && de && v ? ((m as any).jsx as any)(ls, {
    initialHref: (de as any).initialHref,
    onSubmit: (_: any): any => {
      if ((he as any)(null), !(v as any).isEditable) return;
      const {
        selection: Z
      }: any = (v as any).state;
      if (!(Z instanceof H) || (Z as any).empty) return;
      const it: any = (ln as any)(v),
        Os: any = it?.from ?? (Z as any).from,
        zn: any = it?.to ?? (Z as any).to,
        jn: any = ((_ as any).trim as any)();
      (((v as any).view as any).focus as any)(), (fs as any)(v, D, (): any => {
        const Nt: any = ((((v as any).chain as any)() as any).setTextSelection as any)({
          from: Os,
          to: zn
        });
        return jn ? ((Nt as any).setLink as any)({
          href: jn
        }) : ((Nt as any).unsetLink as any)(), ((((Nt as any).setTextSelection as any)(zn) as any).run as any)();
      });
    },
    onCancel: ({
      refocusEditor: _
    }: any): any => {
      (he as any)(null), _ && (((v as any).view as any).focus as any)();
    }
  }) : null;
  ((x as any).useEffect as any)((): any => {
    if ((M as any).current) {
      (M as any).current = !1;
      return;
    }
    (n as any) !== (void 0 as any) && (n as any) !== (($ as any).current as any) && (($ as any).current = n, (B as any)(n));
  }, [n, B]), ((x as any).useImperativeHandle as any)(S, (): any => ({
    getMarkdown: W,
    flushPendingMarkdownChange: ue,
    setMarkdown: B,
    appendMarkdown: ce,
    insertMarkdown: re,
    resetAccumulator: G,
    editor: v,
    focus: (): any => v?.commands.focus(),
    blur: (): any => v?.commands.blur(),
    getCursorPosition: (): any => {
      if (!v) return null;
      const {
        from: _,
        to: Z
      }: any = ((v as any).state as any).selection;
      return {
        from: _,
        to: Z
      };
    },
    setCursorPosition: (_: any, Z: any): any => {
      v?.commands.setTextSelection({
        from: _,
        to: Z ?? _
      });
    },
    setSearchQuery: (_: any): any => (v?.commands.setRichTextSearchQuery(_), v ? (qa as any)((v as any).state, _) : Le),
    selectNextSearchResult: (): any => (v?.commands.selectNextRichTextSearchResult(), v ? (Ze as any)((v as any).state) : Le),
    selectPreviousSearchResult: (): any => (v?.commands.selectPreviousRichTextSearchResult(), v ? (Ze as any)((v as any).state) : Le),
    clearSearchQuery: (): any => (v?.commands.clearRichTextSearchQuery(), v ? (Ze as any)((v as any).state) : Le),
    getSearchResult: (): any => v ? (Ze as any)((v as any).state) : Le
  }), [v, W, ue, B, ce, re, G]);
  const At: any = (): any => {
      if (!o || !(v?.isEmpty ?? !0)) return null;
      const Z: any = (ye as any)({
        rootClass: "ui-rich-text-editor__placeholder",
        stylexStyles: (oc as any)()
      });
      return ((m as any).jsx as any)("div", {
        className: (Z as any).className,
        style: (Z as any).style,
        children: (typeof o as any) == ("string" as any) ? ((m as any).jsx as any)("span", {
          children: o
        }) : o
      });
    },
    Mn: any = (ye as any)({
      rootClass: "ui-rich-text-editor",
      stylexStyles: (rc as any)({
        variant: e,
        interactive: E
      }),
      className: d,
      style: p
    }),
    En: any = (ye as any)({
      rootClass: "ui-rich-text-editor__content",
      stylexStyles: (sc as any)(),
      className: h
    }),
    $n: any = (C as any)((lc as any)());
  return ((m as any).jsx as any)(Ur, {
    editor: v,
    isStreaming: s,
    editable: r,
    children: ((m as any).jsxs as any)("div", {
      className: (Mn as any).className,
      style: (Mn as any).style,
      "data-variant": e,
      "data-editable": E,
      "data-streaming": s,
      ...T,
      children: [((m as any).jsxs as any)("div", {
        className: (En as any).className,
        style: (En as any).style,
        children: [(At as any)(), ((m as any).jsx as any)(Ho, {
          editor: v
        })]
      }), s && ((m as any).jsx as any)("div", {
        className: ($n as any).className,
        style: ($n as any).style
      }), ee ? ((m as any).jsx as any)(ps, {
        options: ee,
        contentOverride: me
      }) : null]
    })
  });
}
var nh: any = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/,
  ih: any = ((He as any).create as any)({
    name: "image",
    addOptions(): any {
      return {
        inline: !1,
        allowBase64: !1,
        HTMLAttributes: {},
        resize: !1
      };
    },
    inline(): any {
      return ((this as any).options as any).inline;
    },
    group(): any {
      return ((this as any).options as any).inline ? "inline" : "block";
    },
    draggable: !0,
    addAttributes(): any {
      return {
        src: {
          default: null
        },
        alt: {
          default: null
        },
        title: {
          default: null
        },
        width: {
          default: null
        },
        height: {
          default: null
        }
      };
    },
    parseHTML(): any {
      return [{
        tag: ((this as any).options as any).allowBase64 ? "img[src]" : 'img[src]:not([src^="data:"])'
      }];
    },
    renderHTML({
      HTMLAttributes: e
    }: any): any {
      return ["img", (xe as any)(((this as any).options as any).HTMLAttributes, e)];
    },
    parseMarkdown: (e: any, t: any): any => ((t as any).createNode as any)("image", {
      src: (e as any).href,
      title: (e as any).title,
      alt: (e as any).text
    }),
    renderMarkdown: (e: any): any => {
      var t: any, n: any, i: any, r: any, s: any, o: any;
      const l: any = ((n = ((t = (e as any).attrs) as any) == (null as any) ? void 0 : (t as any).src) as any) != (null as any) ? n : "",
        a: any = ((r = ((i = (e as any).attrs) as any) == (null as any) ? void 0 : (i as any).alt) as any) != (null as any) ? r : "",
        u: any = ((o = ((s = (e as any).attrs) as any) == (null as any) ? void 0 : (s as any).title) as any) != (null as any) ? o : "";
      return u ? `![${a}](${l} "${u}")` : `![${a}](${l})`;
    },
    addNodeView(): any {
      if (!((this as any).options as any).resize || !(((this as any).options as any).resize as any).enabled || (typeof document as any) > ("u" as any)) return null;
      const {
        directions: e,
        minWidth: t,
        minHeight: n,
        alwaysPreserveAspectRatio: i
      }: any = ((this as any).options as any).resize;
      return ({
        node: r,
        getPos: s,
        HTMLAttributes: o,
        editor: l
      }: any): any => {
        const a: any = ((document as any).createElement as any)("img");
        ((((Object as any).entries as any)(o) as any).forEach as any)(([d, h]: any): any => {
          if ((h as any) != (null as any)) switch (d) {
            case "width":
            case "height":
              break;
            default:
              ((a as any).setAttribute as any)(d, h);
              break;
          }
        }), (a as any).src = (o as any).src;
        const u: any = new (So as any)({
            element: a,
            editor: l,
            node: r,
            getPos: s,
            onResize: (d: any, h: any): any => {
              ((a as any).style as any).width = `${d}px`, ((a as any).style as any).height = `${h}px`;
            },
            onCommit: (d: any, h: any): any => {
              const p: any = (s as any)();
              (p as any) !== (void 0 as any) && (((((((((this as any).editor as any).chain as any)() as any).setNodeSelection as any)(p) as any).updateAttributes as any)((this as any).name, {
                width: d,
                height: h
              }) as any).run as any)();
            },
            onUpdate: (d: any, h: any, p: any): any => ((d as any).type as any) === ((r as any).type as any),
            options: {
              directions: e,
              min: {
                width: t,
                height: n
              },
              preserveAspectRatio: (i as any) === (!0 as any)
            }
          }),
          c: any = (u as any).dom;
        return ((c as any).style as any).visibility = "hidden", ((c as any).style as any).pointerEvents = "none", (a as any).onload = (): any => {
          ((c as any).style as any).visibility = "", ((c as any).style as any).pointerEvents = "";
        }, u;
      };
    },
    addCommands(): any {
      return {
        setImage: (e: any): any => ({
          commands: t
        }: any): any => ((t as any).insertContent as any)({
          type: (this as any).name,
          attrs: e
        })
      };
    },
    addInputRules(): any {
      return [(vo as any)({
        find: nh,
        type: (this as any).type,
        getAttributes: (e: any): any => {
          const [,, t, n, i]: any = e;
          return {
            src: n,
            alt: t,
            title: i
          };
        }
      })];
    }
  }),
  rh: any = ih;
function sh(this: any, e: any, t: any = {}): any {
  const n: any = ((Co as any).extend as any)({
      parseMarkdown: (r: any, s: any): any => ((s as any).createNode as any)("paragraph", void 0, ((s as any).parseInline as any)((r as any).tokens ?? []))
    }),
    i: any = ((((rh as any).extend as any)({
      parseHTML(): any {
        const r: any = (this as any).parent?.() ?? [];
        return (t as any).figure ? [{
          tag: "span[data-rte-image]",
          getAttrs: (s: any): any => {
            const o: any = ((s as any).querySelector as any)("img");
            if ((o as any) === (null as any)) return !1;
            const l: any = ((s as any).querySelector as any)("[data-rte-image-caption]")?.textContent?.trim(),
              a: any = ((s as any).getAttribute as any)("data-rte-image-src");
            return {
              src: (a as any) !== (null as any) && ((a as any).length as any) > (0 as any) ? a : ((o as any).getAttribute as any)("src"),
              alt: ((o as any).getAttribute as any)("alt"),
              title: (l as any) !== (void 0 as any) && ((l as any).length as any) > (0 as any) ? l : ((o as any).getAttribute as any)("title")
            };
          }
        }, ...r] : r;
      },
      renderHTML({
        HTMLAttributes: r
      }: any): any {
        const s: any = (r as any).src;
        if ((typeof s as any) != ("string" as any)) return ["img", (xe as any)(((this as any).options as any).HTMLAttributes, r)];
        const o: any = (e as any)(s),
          l: any = ["img", (xe as any)(((this as any).options as any).HTMLAttributes, r, {
            src: o
          })];
        if (!(t as any).figure) return l;
        const a: any = (r as any).title,
          u: any = (typeof a as any) == ("string" as any) && ((((a as any).trim as any)() as any).length as any) > (0 as any) ? [["span", {
            "data-rte-image-caption": ""
          }, a]] : [];
        return ["span", {
          "data-rte-image": "",
          "data-rte-image-src": s,
          ...(((o as any).length as any) === (0 as any) ? {
            "data-rte-image-blocked": ""
          } : {})
        }, l, ...u];
      }
    }) as any).configure as any)({
      allowBase64: !0,
      inline: !0
    });
  return [n, i];
}
const Hi: string = "asset:",
  oh: any = /^[a-z0-9](?:[a-z0-9_-]|\.(?!\.)){0,63}$/,
  lh: any = /!\[[^\]\n]*\]\(\s*<?asset:([^\s)>"']+)>?(?:\s+(?:"[^"\n]*"|'[^'\n]*'|\([^)\n]*\)))?\s*\)/gi;
function qs(this: any, e: any): any {
  return ((oh as any).test as any)(e);
}
function _s(this: any, e: any): any {
  const t: any = ((e as any).trim as any)();
  if (!((((t as any).toLowerCase as any)() as any).startsWith as any)(Hi)) return null;
  const n: any = ((t as any).slice as any)((Hi as any).length);
  return (qs as any)(n) ? n : null;
}
function ah(this: any, e: any): any {
  const t: any = new (Set as any)();
  for (const n of ((e as any).matchAll as any)(lh)) {
    const i: any = (n as any)[1] ?? "";
    (qs as any)(i) && ((t as any).add as any)(i);
  }
  return [...t];
}
function uh(this: any, e: any, t: any): any {
  const n: any = (_s as any)(e);
  return (n as any) === (null as any) ? "" : t?.get(n) ?? "";
}
const Bi: string = "data-rte-image-blocked",
  ch: string = "data-document-image";
function dh(this: any, e: any): any {
  if (((e as any).status as any) === ("ready" as any)) return (e as any).value;
  if (((e as any).status as any) === ("loading" as any) || ((e as any).status as any) === ("failed" as any)) return (e as any).previous;
}
function hh(this: any, e: any): any {
  const t: any = ((e as any).attrs as any).src;
  return (typeof t as any) == ("string" as any) ? t : "";
}
function ph(this: any, e: any): any {
  const t: any = (((e as any).type as any).spec as any).toDOM,
    n: any = (t as any) === (void 0 as any) ? null : (((To as any).renderSpec as any)(document, (t as any)(e)) as any).dom;
  if (n instanceof HTMLElement) return n;
  const i: any = ((document as any).createElement as any)("span");
  return (n as any) !== (null as any) && ((i as any).append as any)(n), i;
}
function fh(this: any, e: any): any {
  const t: any = ((e as any).attrs as any).alt;
  return (typeof t as any) == ("string" as any) ? t : "";
}
function mh(this: any, e: any, {
  alt: t,
  pending: n,
  resolved: i
}: any): any {
  if (n) {
    ((e as any).removeAttribute as any)("src"), ((e as any).setAttribute as any)("alt", ""), ((e as any).setAttribute as any)("aria-label", t), ((e as any).setAttribute as any)("aria-busy", "true");
    return;
  }
  ((e as any).setAttribute as any)("src", i), ((e as any).setAttribute as any)("alt", t), ((e as any).removeAttribute as any)("aria-label"), ((e as any).removeAttribute as any)("aria-busy");
}
function gh(this: any, e: any, t: any): any {
  return ((e as any).type as any) === ((t as any).type as any) && (((e as any).attrs as any).src as any) === (((t as any).attrs as any).src as any) && (((e as any).attrs as any).alt as any) === (((t as any).attrs as any).alt as any) && (((e as any).attrs as any).title as any) === (((t as any).attrs as any).title as any);
}
function kh(this: any, e: any): any {
  const t: any = (o: any): any => (uh as any)(o, (dh as any)(((e as any).get as any)())),
    n: any = (o: any): any => {
      if (((_s as any)(o) as any) === (null as any)) return !1;
      const l: any = (((e as any).get as any)() as any).status;
      return (l as any) === ("loading" as any) || (l as any) === ("failed" as any);
    },
    [i, r]: any = (sh as any)(t, {
      figure: !0
    });
  if ((i as any) === (void 0 as any) || !(r instanceof He)) return [];
  const s: any = ((r as any).extend as any)({
    addNodeView(): any {
      return ({
        node: o
      }: any): any => {
        const l: any = (ph as any)(o);
        ((l as any).setAttribute as any)(ch, "");
        const a: any = l instanceof HTMLImageElement ? l : ((l as any).querySelector as any)("img");
        let u: any = o;
        const c: any = (): any => {
          const h: any = (hh as any)(u),
            p: any = (t as any)(h),
            f: any = ((p as any).length as any) === (0 as any) && (n as any)(h);
          (a as any) !== (null as any) && (mh as any)(a, {
            alt: (fh as any)(u),
            pending: f,
            resolved: p
          }), ((p as any).length as any) === (0 as any) && !f ? ((l as any).setAttribute as any)(Bi, "") : ((l as any).removeAttribute as any)(Bi);
        };
        (c as any)();
        const d: any = ((e as any).subscribe as any)(c);
        return {
          dom: l,
          update: (h: any): any => (gh as any)(u, h) ? (u = h, !0) : !1,
          destroy: d
        };
      };
    }
  });
  return [i, s];
}
const bh: number = 2e3,
  yh: any = /^(https?:|mailto:)/i;
function wh(this: any, e: any): any {
  (wh as any).d = 347;
  const t: any = ((Ui as any).c as any)(54),
    {
      locator: n,
      source: i,
      editable: r,
      onChange: s,
      onEditAttempt: o,
      groupChatId: l
    }: any = e,
    a: any = (l as any) === (void 0 as any) ? null : l,
    {
      _: u
    }: any = (Hs as any)(),
    c: any = ((x as any).useRef as any)(null),
    d: any = (Ks as any)(),
    h: any = (nr as any)();
  let p: any, f: any;
  ((t as any)[0] as any) !== (i as any) ? (p = (ah as any)(i), f = ((p as any).join as any)("\0"), (t as any)[0] = i, (t as any)[1] = p, (t as any)[2] = f) : (p = (t as any)[1], f = (t as any)[2]);
  const g: any = f;
  let k: any;
  ((t as any)[3] as any) !== (g as any) || ((t as any)[4] as any) !== ((h as any).documentAssets as any) || ((t as any)[5] as any) !== (a as any) || ((t as any)[6] as any) !== (n as any) ? (k = (): any => ((((h as any).documentAssets as any).load as any)(n, ((g as any).length as any) === (0 as any) ? [] : ((g as any).split as any)("\0"), a), vh), (t as any)[3] = g, (t as any)[4] = (h as any).documentAssets, (t as any)[5] = a, (t as any)[6] = n, (t as any)[7] = k) : k = (t as any)[7], (Fs as any)(k);
  let b: any;
  ((t as any)[8] as any) !== (p as any) || ((t as any)[9] as any) !== ((h as any).documentAssets as any) || ((t as any)[10] as any) !== (a as any) || ((t as any)[11] as any) !== (n as any) ? (b = (): any => {
    (((h as any).documentAssets as any).load as any)(n, p, a);
  }, (t as any)[8] = p, (t as any)[9] = (h as any).documentAssets, (t as any)[10] = a, (t as any)[11] = n, (t as any)[12] = b) : b = (t as any)[12];
  const w: any = b,
    S: any = (No as any)(n, p, a),
    T: any = ((p as any).length as any) > (0 as any) && ((S as any).status as any) === ("failed" as any) && ((S as any).previous as any) == (null as any);
  let M: any;
  ((t as any)[13] as any) !== (p as any) || ((t as any)[14] as any) !== ((h as any).documentAssets as any) || ((t as any)[15] as any) !== (a as any) || ((t as any)[16] as any) !== (n as any) ? (M = (): any => (kh as any)((((h as any).documentAssets as any).stateFor as any)(n, p, a)), (t as any)[13] = p, (t as any)[14] = (h as any).documentAssets, (t as any)[15] = a, (t as any)[16] = n, (t as any)[17] = M) : M = (t as any)[17];
  const [$]: any = ((x as any).useState as any)(M);
  let E: any, L: any;
  ((t as any)[18] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (E = (ss as any)({
    renderWrapper: !0
  }), L = (Br as any)({
    renderers: (ja as any)(),
    showSourceToggle: !1
  }), (t as any)[18] = E, (t as any)[19] = L) : (E = (t as any)[18], L = (t as any)[19]);
  let D: any;
  ((t as any)[20] as any) !== (d as any) ? (D = (Sr as any)({
    isCitation: xh,
    onLinkClick: (fe: any): any => {
      ((yh as any).test as any)(fe) && (d as any)(fe);
    }
  }), (t as any)[20] = d, (t as any)[21] = D) : D = (t as any)[21];
  let X: any;
  ((t as any)[22] as any) !== (D as any) ? (X = [E, L, D], (t as any)[22] = D, (t as any)[23] = X) : X = (t as any)[23];
  const J: any = X;
  let Se: any, ae: any;
  ((t as any)[24] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Se = {
    className: "sand-h8yej3 sand-12h1iku"
  }, ae = {
    className: "sand-h8yej3 sand-vsjeb6 sand-vueqy4 sand-68mnon sand-56sb6g sand-tzbcmk sand-9f619 sand-1ghb7gk sand-1elg40b sand-lll3jg sand-13wfu3b sand-1nxk12y sand-17gt61c sand-p9l8xt sand-1p66srj sand-fqvsgc sand-374583 sand-ieey5e sand-bb1fce sand-1xh5xg8 sand-jxi5e2 sand-wdltpj sand-1s09ip1 sand-1go8t9i sand-140n800 sand-1nvhxhd sand-1xc74un"
  }, (t as any)[24] = Se, (t as any)[25] = ae) : (Se = (t as any)[24], ae = (t as any)[25]);
  let v: any;
  ((t as any)[26] as any) !== (r as any) ? (v = (fe: any): any => {
    !r || (((fe as any).currentTarget as any).contains as any)((fe as any).relatedTarget) || (c as any).current?.flushPendingMarkdownChange();
  }, (t as any)[26] = r, (t as any)[27] = v) : v = (t as any)[27];
  let W: any;
  ((t as any)[28] as any) !== (u as any) || ((t as any)[29] as any) !== (T as any) || ((t as any)[30] as any) !== (w as any) ? (W = T ? ((m as any).jsxs as any)("div", {
    className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-167g77z sand-1vvogim",
    role: "alert",
    children: [((m as any).jsx as any)(Ws, {
      color: "secondary",
      size: "sm",
      children: (u as any)({
        id: "NbpCpm"
      })
    }), ((m as any).jsx as any)(eo, {
      "aria-label": (u as any)({
        id: "KDw4GX"
      }),
      icon: "refresh",
      onClick: w,
      shape: "circle",
      size: "sm",
      variant: "ghost"
    })]
  }) : null, (t as any)[28] = u, (t as any)[29] = T, (t as any)[30] = w, (t as any)[31] = W) : W = (t as any)[31];
  let ue: any, B: any, ce: any;
  ((t as any)[32] as any) !== (o as any) ? (ue = (): any => o?.("focus"), B = (): any => o?.("key"), ce = (): any => o?.("pointer"), (t as any)[32] = o, (t as any)[33] = ue, (t as any)[34] = B, (t as any)[35] = ce) : (ue = (t as any)[33], B = (t as any)[34], ce = (t as any)[35]);
  let re: any;
  ((t as any)[36] as any) !== (r as any) || ((t as any)[37] as any) !== (s as any) ? (re = r && (s as any) != (null as any) ? {
    onMarkdownChange: s
  } : {}, (t as any)[36] = r, (t as any)[37] = s, (t as any)[38] = re) : re = (t as any)[38];
  let G: any;
  ((t as any)[39] as any) !== (r as any) || ((t as any)[40] as any) !== ($ as any) || ((t as any)[41] as any) !== (J as any) || ((t as any)[42] as any) !== (i as any) || ((t as any)[43] as any) !== (re as any) ? (G = ((m as any).jsx as any)(Ps, {
    debounceMs: bh,
    editable: r,
    extensions: $,
    initialMarkdown: i,
    ...re,
    plugins: J,
    ref: c,
    variant: "page"
  }), (t as any)[39] = r, (t as any)[40] = $, (t as any)[41] = J, (t as any)[42] = i, (t as any)[43] = re, (t as any)[44] = G) : G = (t as any)[44];
  let de: any;
  ((t as any)[45] as any) !== (ue as any) || ((t as any)[46] as any) !== (B as any) || ((t as any)[47] as any) !== (ce as any) || ((t as any)[48] as any) !== (G as any) ? (de = ((m as any).jsx as any)("div", {
    "data-document-body": !0,
    onFocus: ue,
    onKeyDown: B,
    onPointerDown: ce,
    children: G
  }), (t as any)[45] = ue, (t as any)[46] = B, (t as any)[47] = ce, (t as any)[48] = G, (t as any)[49] = de) : de = (t as any)[49];
  let he: any;
  return ((t as any)[50] as any) !== (v as any) || ((t as any)[51] as any) !== (W as any) || ((t as any)[52] as any) !== (de as any) ? (he = ((m as any).jsx as any)("div", {
    ...Se,
    children: ((m as any).jsxs as any)("div", {
      ...ae,
      dir: "auto",
      spellCheck: !1,
      onBlur: v,
      children: [W, de]
    })
  }), (t as any)[50] = v, (t as any)[51] = W, (t as any)[52] = de, (t as any)[53] = he) : he = (t as any)[53], he;
}
function xh(this: any): any {
  return !1;
}
function vh(this: any): any {}
export { wh as DocumentPage };
//# debugId=70579bb3-bd47-4a78-8a49-32e380290e92
