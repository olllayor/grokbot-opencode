declare var global: any;
declare var key: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "91adeb5c-8771-472d-a546-dcfee1fe3ee0", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-91adeb5c-8771-472d-a546-dcfee1fe3ee0");
  } catch (e: any) {}
} as any)();
import { p as ge } from "./chunk-chunk-JWPE2WC7-firmgLgH.js";
import { _ as w, W as ye, z as ae, B as ee, F as Se, e as ve, l as te, be as B, d as U, b as xe, a as be, o as we, p as Ce, g as Te, s as Le, D as $e, bf as Ae, q as Fe } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { s as Ne } from "./chunk-chunk-VR4S4FIN-HF2Hbh9A.js";
import { p as Me } from "./chunk-cynefin-VYW2F7L2-ChVxrOa1.js";
import { b as O } from "./chunk-defaultLocale-pEppTWzK.js";
import { o as Q } from "./chunk-ordinal-BB0u7Tqq.js";
import "./index.eager-vendor-Qbf9YA6n.js";
import "./chunk-init-Gi6I4Gst.js";
function _e(this: any, t: any): any {
  var a: any = 0,
    l: any = (t as any).children,
    n: any = l && (l as any).length;
  if (!n) a = 1;else for (; (--n as any) >= (0 as any);) a += ((l as any)[n] as any).value;
  (t as any).value = a;
}
function ke(this: any): any {
  return ((this as any).eachAfter as any)(_e);
}
function ze(this: any, t: any, a: any): any {
  let l: any = -1;
  for (const n of this) ((t as any).call as any)(a, n, ++l, this);
  return this;
}
function Ve(this: any, t: any, a: any): any {
  for (var l: any = this, n: any = [l], r: any, i: any, h: any = -1; l = ((n as any).pop as any)();) if (((t as any).call as any)(a, l, ++h, this), r = (l as any).children) for (i = ((r as any).length as any) - (1 as any); (i as any) >= (0 as any); --i) ((n as any).push as any)((r as any)[i]);
  return this;
}
function De(this: any, t: any, a: any): any {
  for (var l: any = this, n: any = [l], r: any = [], i: any, h: any, d: any, g: any = -1; l = ((n as any).pop as any)();) if (((r as any).push as any)(l), i = (l as any).children) for (h = 0, d = (i as any).length; (h as any) < (d as any); ++h) ((n as any).push as any)((i as any)[h]);
  for (; l = ((r as any).pop as any)();) ((t as any).call as any)(a, l, ++g, this);
  return this;
}
function Pe(this: any, t: any, a: any): any {
  let l: any = -1;
  for (const n of this) if (((t as any).call as any)(a, n, ++l, this)) return n;
}
function Be(this: any, t: any): any {
  return ((this as any).eachAfter as any)(function (this: any, a: any): any {
    for (var l: any = +(t as any)((a as any).data) || 0, n: any = (a as any).children, r: any = n && (n as any).length; (--r as any) >= (0 as any);) l += ((n as any)[r] as any).value;
    (a as any).value = l;
  });
}
function We(this: any, t: any): any {
  return ((this as any).eachBefore as any)(function (this: any, a: any): any {
    (a as any).children && (((a as any).children as any).sort as any)(t);
  });
}
function Ee(this: any, t: any): any {
  for (var a: any = this, l: any = (Re as any)(a, t), n: any = [a]; (a as any) !== (l as any);) a = (a as any).parent, ((n as any).push as any)(a);
  for (var r: any = (n as any).length; (t as any) !== (l as any);) ((n as any).splice as any)(r, 0, t), t = (t as any).parent;
  return n;
}
function Re(this: any, t: any, a: any): any {
  if ((t as any) === (a as any)) return t;
  var l: any = ((t as any).ancestors as any)(),
    n: any = ((a as any).ancestors as any)(),
    r: any = null;
  for (t = ((l as any).pop as any)(), a = ((n as any).pop as any)(); (t as any) === (a as any);) r = t, t = ((l as any).pop as any)(), a = ((n as any).pop as any)();
  return r;
}
function He(this: any): any {
  for (var t: any = this, a: any = [t]; t = (t as any).parent;) ((a as any).push as any)(t);
  return a;
}
function Ie(this: any): any {
  return ((Array as any).from as any)(this);
}
function Oe(this: any): any {
  var t: any = [];
  return ((this as any).eachBefore as any)(function (this: any, a: any): any {
    (a as any).children || ((t as any).push as any)(a);
  }), t;
}
function qe(this: any): any {
  var t: any = this,
    a: any = [];
  return ((t as any).each as any)(function (this: any, l: any): any {
    (l as any) !== (t as any) && ((a as any).push as any)({
      source: (l as any).parent,
      target: l
    });
  }), a;
}
function* Ge(this: any): Generator<any, any, any> {
  var t: any = this,
    a: any,
    l: any = [t],
    n: any,
    r: any,
    i: any;
  do for (a = ((l as any).reverse as any)(), l = []; t = ((a as any).pop as any)();) if (yield t, n = (t as any).children) for (r = 0, i = (n as any).length; (r as any) < (i as any); ++r) ((l as any).push as any)((n as any)[r]); while ((l as any).length);
}
function ne(this: any, t: any, a: any): any {
  t instanceof Map ? (t = [void 0, t], (a as any) === (void 0 as any) && (a = je)) : (a as any) === (void 0 as any) && (a = Ye);
  for (var l: any = new (Z as any)(t), n: any, r: any = [l], i: any, h: any, d: any, g: any; n = ((r as any).pop as any)();) if ((h = (a as any)((n as any).data)) && (g = ((h = ((Array as any).from as any)(h)) as any).length)) for ((n as any).children = h, d = (g as any) - (1 as any); (d as any) >= (0 as any); --d) ((r as any).push as any)(i = (h as any)[d] = new (Z as any)((h as any)[d])), (i as any).parent = n, (i as any).depth = ((n as any).depth as any) + (1 as any);
  return ((l as any).eachBefore as any)(Ze);
}
function Xe(this: any): any {
  return (((ne as any)(this) as any).eachBefore as any)(Ue);
}
function Ye(this: any, t: any): any {
  return (t as any).children;
}
function je(this: any, t: any): any {
  return ((Array as any).isArray as any)(t) ? (t as any)[1] : null;
}
function Ue(this: any, t: any): any {
  (((t as any).data as any).value as any) !== (void 0 as any) && ((t as any).value = ((t as any).data as any).value), (t as any).data = ((t as any).data as any).data;
}
function Ze(this: any, t: any): any {
  var a: any = 0;
  do (t as any).height = a; while ((t = (t as any).parent) && ((t as any).height as any) < (++a as any));
}
function Z(this: any, t: any): any {
  (this as any).data = t, (this as any).depth = (this as any).height = 0, (this as any).parent = null;
}
(Z as any).prototype = (ne as any).prototype = {
  constructor: Z,
  count: ke,
  each: ze,
  eachAfter: De,
  eachBefore: Ve,
  find: Pe,
  sum: Be,
  sort: We,
  path: Ee,
  ancestors: He,
  descendants: Ie,
  leaves: Oe,
  links: qe,
  copy: Xe,
  [(Symbol as any).iterator]: Ge
};
function Je(this: any, t: any): any {
  if ((typeof t as any) != ("function" as any)) throw new (Error as any)();
  return t;
}
function q(this: any): any {
  return 0;
}
function G(this: any, t: any): any {
  return function (this: any): any {
    return t;
  };
}
function Ke(this: any, t: any): any {
  (t as any).x0 = ((Math as any).round as any)((t as any).x0), (t as any).y0 = ((Math as any).round as any)((t as any).y0), (t as any).x1 = ((Math as any).round as any)((t as any).x1), (t as any).y1 = ((Math as any).round as any)((t as any).y1);
}
function Qe(this: any, t: any, a: any, l: any, n: any, r: any): any {
  for (var i: any = (t as any).children, h: any, d: any = -1, g: any = (i as any).length, c: any = (t as any).value && ((n as any) - (a as any) as any) / ((t as any).value as any); (++d as any) < (g as any);) h = (i as any)[d], (h as any).y0 = l, (h as any).y1 = r, (h as any).x0 = a, (h as any).x1 = a += ((h as any).value as any) * (c as any);
}
function et(this: any, t: any, a: any, l: any, n: any, r: any): any {
  for (var i: any = (t as any).children, h: any, d: any = -1, g: any = (i as any).length, c: any = (t as any).value && ((r as any) - (l as any) as any) / ((t as any).value as any); (++d as any) < (g as any);) h = (i as any)[d], (h as any).x0 = a, (h as any).x1 = n, (h as any).y0 = l, (h as any).y1 = l += ((h as any).value as any) * (c as any);
}
var tt: any = ((1 as any) + (((Math as any).sqrt as any)(5) as any) as any) / (2 as any);
function at(this: any, t: any, a: any, l: any, n: any, r: any, i: any): any {
  for (var h: any = [], d: any = (a as any).children, g: any, c: any, p: any = 0, b: any = 0, s: any = (d as any).length, x: any, S: any, v: any = (a as any).value, u: any, y: any, N: any, $: any, V: any, R: any, M: any; (p as any) < (s as any);) {
    x = (r as any) - (l as any), S = (i as any) - (n as any);
    do u = ((d as any)[b++] as any).value; while (!u && (b as any) < (s as any));
    for (y = N = u, R = (((Math as any).max as any)((S as any) / (x as any), (x as any) / (S as any)) as any) / ((v as any) * (t as any) as any), M = ((u as any) * (u as any) as any) * (R as any), V = ((Math as any).max as any)((N as any) / (M as any), (M as any) / (y as any)); (b as any) < (s as any); ++b) {
      if (u += c = ((d as any)[b] as any).value, (c as any) < (y as any) && (y = c), (c as any) > (N as any) && (N = c), M = ((u as any) * (u as any) as any) * (R as any), $ = ((Math as any).max as any)((N as any) / (M as any), (M as any) / (y as any)), ($ as any) > (V as any)) {
        u -= c;
        break;
      }
      V = $;
    }
    ((h as any).push as any)(g = {
      value: u,
      dice: (x as any) < (S as any),
      children: ((d as any).slice as any)(p, b)
    }), (g as any).dice ? (Qe as any)(g, l, n, r, v ? n += ((S as any) * (u as any) as any) / (v as any) : i) : (et as any)(g, l, n, v ? l += ((x as any) * (u as any) as any) / (v as any) : r, i), v -= u, p = b;
  }
  return h;
}
const nt: any = (function t(this: any, a: any): any {
  function l(this: any, n: any, r: any, i: any, h: any, d: any): any {
    (at as any)(a, n, r, i, h, d);
  }
  return (l as any).ratio = function (this: any, n: any): any {
    return (t as any)(((n = +n) as any) > (1 as any) ? n : 1);
  }, l;
} as any)(tt);
function lt(this: any): any {
  var t: any = nt,
    a: any = !1,
    l: any = 1,
    n: any = 1,
    r: any = [0],
    i: any = q,
    h: any = q,
    d: any = q,
    g: any = q,
    c: any = q;
  function p(this: any, s: any): any {
    return (s as any).x0 = (s as any).y0 = 0, (s as any).x1 = l, (s as any).y1 = n, ((s as any).eachBefore as any)(b), r = [0], a && ((s as any).eachBefore as any)(Ke), s;
  }
  function b(this: any, s: any): any {
    var x: any = (r as any)[(s as any).depth],
      S: any = ((s as any).x0 as any) + (x as any),
      v: any = ((s as any).y0 as any) + (x as any),
      u: any = ((s as any).x1 as any) - (x as any),
      y: any = ((s as any).y1 as any) - (x as any);
    (u as any) < (S as any) && (S = u = ((S as any) + (u as any) as any) / (2 as any)), (y as any) < (v as any) && (v = y = ((v as any) + (y as any) as any) / (2 as any)), (s as any).x0 = S, (s as any).y0 = v, (s as any).x1 = u, (s as any).y1 = y, (s as any).children && (x = (r as any)[((s as any).depth as any) + (1 as any)] = ((i as any)(s) as any) / (2 as any), S += ((c as any)(s) as any) - (x as any), v += ((h as any)(s) as any) - (x as any), u -= ((d as any)(s) as any) - (x as any), y -= ((g as any)(s) as any) - (x as any), (u as any) < (S as any) && (S = u = ((S as any) + (u as any) as any) / (2 as any)), (y as any) < (v as any) && (v = y = ((v as any) + (y as any) as any) / (2 as any)), (t as any)(s, S, v, u, y));
  }
  return (p as any).round = function (this: any, s: any): any {
    return (arguments as any).length ? (a = !!s, p) : a;
  }, (p as any).size = function (this: any, s: any): any {
    return (arguments as any).length ? (l = +(s as any)[0], n = +(s as any)[1], p) : [l, n];
  }, (p as any).tile = function (this: any, s: any): any {
    return (arguments as any).length ? (t = (Je as any)(s), p) : t;
  }, (p as any).padding = function (this: any, s: any): any {
    return (arguments as any).length ? ((((p as any).paddingInner as any)(s) as any).paddingOuter as any)(s) : ((p as any).paddingInner as any)();
  }, (p as any).paddingInner = function (this: any, s: any): any {
    return (arguments as any).length ? (i = (typeof s as any) == ("function" as any) ? s : (G as any)(+s), p) : i;
  }, (p as any).paddingOuter = function (this: any, s: any): any {
    return (arguments as any).length ? ((((((((p as any).paddingTop as any)(s) as any).paddingRight as any)(s) as any).paddingBottom as any)(s) as any).paddingLeft as any)(s) : ((p as any).paddingTop as any)();
  }, (p as any).paddingTop = function (this: any, s: any): any {
    return (arguments as any).length ? (h = (typeof s as any) == ("function" as any) ? s : (G as any)(+s), p) : h;
  }, (p as any).paddingRight = function (this: any, s: any): any {
    return (arguments as any).length ? (d = (typeof s as any) == ("function" as any) ? s : (G as any)(+s), p) : d;
  }, (p as any).paddingBottom = function (this: any, s: any): any {
    return (arguments as any).length ? (g = (typeof s as any) == ("function" as any) ? s : (G as any)(+s), p) : g;
  }, (p as any).paddingLeft = function (this: any, s: any): any {
    return (arguments as any).length ? (c = (typeof s as any) == ("function" as any) ? s : (G as any)(+s), p) : c;
  }, p;
}
var E: any,
  oe: any = (E = class {
    declare root: any;
    declare setAccDescription: any;
    declare getAccDescription: any;
    declare getDiagramTitle: any;
    declare setDiagramTitle: any;
    declare getAccTitle: any;
    declare setAccTitle: any;
    declare classes: any;
    declare outerNodes: any;
    declare levels: any;
    declare nodes: any;
    [key: string]: any;
    constructor() {
      (this as any).nodes = [], (this as any).levels = new (Map as any)(), (this as any).outerNodes = [], (this as any).classes = new (Map as any)(), (this as any).setAccTitle = xe, (this as any).getAccTitle = be, (this as any).setDiagramTitle = we, (this as any).getDiagramTitle = Ce, (this as any).getAccDescription = Te, (this as any).setAccDescription = Le;
    }
    getNodes(): any {
      return (this as any).nodes;
    }
    getConfig(): any {
      const a: any = $e,
        l: any = (ae as any)();
      return (ee as any)({
        ...(a as any).treemap,
        ...((l as any).treemap ?? {})
      });
    }
    addNode(a: any, l: any): any {
      (((this as any).nodes as any).push as any)(a), (((this as any).levels as any).set as any)(a, l), (l as any) === (0 as any) && ((((this as any).outerNodes as any).push as any)(a), (this as any).root ??= a);
    }
    getRoot(): any {
      return {
        name: "",
        children: (this as any).outerNodes
      };
    }
    addClass(a: any, l: any): any {
      const n: any = (((this as any).classes as any).get as any)(a) ?? {
          id: a,
          styles: [],
          textStyles: []
        },
        r: any = ((((((((l as any).replace as any)(/\\,/g, "§§§") as any).replace as any)(/,/g, ";") as any).replace as any)(/§§§/g, ",") as any).split as any)(";");
      r && ((r as any).forEach as any)((i: any): any => {
        (Ae as any)(i) && (n?.textStyles ? (((n as any).textStyles as any).push as any)(i) : (n as any).textStyles = [i]), n?.styles ? (((n as any).styles as any).push as any)(i) : (n as any).styles = [i];
      }), (((this as any).classes as any).set as any)(a, n);
    }
    getClasses(): any {
      return (this as any).classes;
    }
    getStylesForClass(a: any): any {
      return (((this as any).classes as any).get as any)(a)?.styles ?? [];
    }
    clear(): any {
      (Fe as any)(), (this as any).nodes = [], (this as any).levels = new (Map as any)(), (this as any).outerNodes = [], (this as any).classes = new (Map as any)(), (this as any).root = void 0;
    }
  }, (w as any)(E, "TreeMapDB"), E);
function ce(this: any, t: any): any {
  if (!(t as any).length) return [];
  const a: any = [],
    l: any = [];
  return ((t as any).forEach as any)((n: any): any => {
    const r: any = {
      name: (n as any).name,
      children: ((n as any).type as any) === ("Leaf" as any) ? void 0 : []
    };
    for ((r as any).classSelector = n?.classSelector, n?.cssCompiledStyles && ((r as any).cssCompiledStyles = (n as any).cssCompiledStyles), ((n as any).type as any) === ("Leaf" as any) && ((n as any).value as any) !== (void 0 as any) && ((r as any).value = (n as any).value); ((l as any).length as any) > (0 as any) && (((l as any)[((l as any).length as any) - (1 as any)] as any).level as any) >= ((n as any).level as any);) ((l as any).pop as any)();
    if (((l as any).length as any) === (0 as any)) ((a as any).push as any)(r);else {
      const i: any = ((l as any)[((l as any).length as any) - (1 as any)] as any).node;
      (i as any).children ? (((i as any).children as any).push as any)(r) : (i as any).children = [r];
    }
    ((n as any).type as any) !== ("Leaf" as any) && ((l as any).push as any)({
      node: r,
      level: (n as any).level
    });
  }), a;
}
(w as any)(ce, "buildHierarchy");
var rt: any = (w as any)((t: any, a: any): any => {
    (ge as any)(t, a);
    const l: any = [];
    for (const i of (t as any).TreemapRows ?? []) ((i as any).$type as any) === ("ClassDefStatement" as any) && ((a as any).addClass as any)((i as any).className ?? "", (i as any).styleText ?? "");
    for (const i of (t as any).TreemapRows ?? []) {
      const h: any = (i as any).item;
      if (!h) continue;
      const d: any = (i as any).indent ? (parseInt as any)((i as any).indent) : 0,
        g: any = (st as any)(h),
        c: any = (h as any).classSelector ? ((a as any).getStylesForClass as any)((h as any).classSelector) : [],
        p: any = ((c as any).length as any) > (0 as any) ? c : void 0,
        b: any = {
          level: d,
          name: g,
          type: (h as any).$type,
          value: (h as any).value,
          classSelector: (h as any).classSelector,
          cssCompiledStyles: p
        };
      ((l as any).push as any)(b);
    }
    const n: any = (ce as any)(l),
      r: any = (w as any)((i: any, h: any): any => {
        for (const d of i) ((a as any).addNode as any)(d, h), (d as any).children && (((d as any).children as any).length as any) > (0 as any) && (r as any)((d as any).children, (h as any) + (1 as any));
      }, "addNodesRecursively");
    (r as any)(n, 0);
  }, "populate"),
  st: any = (w as any)((t: any): any => (t as any).name ? (String as any)((t as any).name) : "", "getItemName"),
  he: any = {
    parser: {
      yy: void 0
    },
    parse: (w as any)(async (t: any): Promise<any> => {
      try {
        const l: any = await (Me as any)("treemap", t);
        ((te as any).debug as any)("Treemap AST:", l);
        const n: any = (he as any).parser?.yy;
        if (!(n instanceof oe)) throw new (Error as any)("parser.parser?.yy was not a TreemapDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
        (rt as any)(l, n);
      } catch (a: any) {
        throw ((te as any).error as any)("Error parsing treemap:", a), a;
      }
    }, "parse")
  },
  it: number = 10,
  W: number = 10,
  X: number = 25,
  ot: any = (w as any)((t: any, a: any, l: any, n: any): any => {
    const r: any = (n as any).db,
      i: any = ((r as any).getConfig as any)(),
      h: any = (i as any).padding ?? it,
      d: any = ((r as any).getDiagramTitle as any)(),
      g: any = ((r as any).getRoot as any)(),
      {
        themeVariables: c
      }: any = (ae as any)();
    if (!g) return;
    const p: any = d ? 30 : 0,
      b: any = (Se as any)(a),
      s: any = (i as any).nodeWidth ? ((i as any).nodeWidth as any) * (W as any) : 960,
      x: any = (i as any).nodeHeight ? ((i as any).nodeHeight as any) * (W as any) : 500,
      S: any = s,
      v: any = (x as any) + (p as any);
    ((b as any).attr as any)("viewBox", `0 0 ${S} ${v}`), (ve as any)(b, v, S, (i as any).useMaxWidth);
    let u: any;
    try {
      const e: any = (i as any).valueFormat || ",";
      if ((e as any) === ("$0,0" as any)) u = (w as any)((o: any): any => ("$" as any) + (((O as any)(",") as any)(o) as any), "valueFormat");else if (((e as any).startsWith as any)("$") && ((e as any).includes as any)(",")) {
        const o: any = ((/\.\d+/ as any).exec as any)(e),
          f: any = o ? (o as any)[0] : "";
        u = (w as any)((C: any): any => ("$" as any) + (((O as any)(("," as any) + (f as any)) as any)(C) as any), "valueFormat");
      } else if (((e as any).startsWith as any)("$")) {
        const o: any = ((e as any).substring as any)(1);
        u = (w as any)((f: any): any => ("$" as any) + (((O as any)(o || "") as any)(f) as any), "valueFormat");
      } else u = (O as any)(e);
    } catch (e: any) {
      ((te as any).error as any)("Error creating format function:", e), u = (O as any)(",");
    }
    const y: any = (((Q as any)() as any).range as any)(["transparent", (c as any).cScale0, (c as any).cScale1, (c as any).cScale2, (c as any).cScale3, (c as any).cScale4, (c as any).cScale5, (c as any).cScale6, (c as any).cScale7, (c as any).cScale8, (c as any).cScale9, (c as any).cScale10, (c as any).cScale11]),
      N: any = (((Q as any)() as any).range as any)(["transparent", (c as any).cScalePeer0, (c as any).cScalePeer1, (c as any).cScalePeer2, (c as any).cScalePeer3, (c as any).cScalePeer4, (c as any).cScalePeer5, (c as any).cScalePeer6, (c as any).cScalePeer7, (c as any).cScalePeer8, (c as any).cScalePeer9, (c as any).cScalePeer10, (c as any).cScalePeer11]),
      $: any = (((Q as any)() as any).range as any)([(c as any).cScaleLabel0, (c as any).cScaleLabel1, (c as any).cScaleLabel2, (c as any).cScaleLabel3, (c as any).cScaleLabel4, (c as any).cScaleLabel5, (c as any).cScaleLabel6, (c as any).cScaleLabel7, (c as any).cScaleLabel8, (c as any).cScaleLabel9, (c as any).cScaleLabel10, (c as any).cScaleLabel11]);
    d && ((((((((((((((b as any).append as any)("text") as any).attr as any)("x", (S as any) / (2 as any)) as any).attr as any)("y", (p as any) / (2 as any)) as any).attr as any)("class", "treemapTitle") as any).attr as any)("text-anchor", "middle") as any).attr as any)("dominant-baseline", "middle") as any).text as any)(d);
    const V: any = ((((((b as any).append as any)("g") as any).attr as any)("transform", `translate(0, ${p})`) as any).attr as any)("class", "treemapContainer"),
      R: any = (((((ne as any)(g) as any).sum as any)((e: any): any => (e as any).value ?? 0) as any).sort as any)((e: any, o: any): any => (((o as any).value ?? 0) as any) - (((e as any).value ?? 0) as any)),
      le: any = ((((((((((((((((lt as any)() as any).size as any)([s, x]) as any).paddingTop as any)((e: any): any => (e as any).children && (((e as any).children as any).length as any) > (0 as any) ? (X as any) + (W as any) : 0) as any).paddingInner as any)(h) as any).paddingLeft as any)((e: any): any => (e as any).children && (((e as any).children as any).length as any) > (0 as any) ? W : 0) as any).paddingRight as any)((e: any): any => (e as any).children && (((e as any).children as any).length as any) > (0 as any) ? W : 0) as any).paddingBottom as any)((e: any): any => (e as any).children && (((e as any).children as any).length as any) > (0 as any) ? W : 0) as any).round as any)(!0) as any)(R),
      de: any = ((((le as any).descendants as any)() as any).filter as any)((e: any): any => (e as any).children && (((e as any).children as any).length as any) > (0 as any)),
      H: any = ((((((((((((V as any).selectAll as any)(".treemapSection") as any).data as any)(de) as any).enter as any)() as any).append as any)("g") as any).attr as any)("class", "treemapSection") as any).attr as any)("transform", (e: any): any => `translate(${(e as any).x0},${(e as any).y0})`);
    ((((((((((((((((H as any).append as any)("rect") as any).attr as any)("width", (e: any): any => ((e as any).x1 as any) - ((e as any).x0 as any)) as any).attr as any)("height", X) as any).attr as any)("class", "treemapSectionHeader") as any).attr as any)("fill", "none") as any).attr as any)("fill-opacity", .6) as any).attr as any)("stroke-width", .6) as any).attr as any)("style", (e: any): any => ((e as any).depth as any) === (0 as any) ? "display: none;" : ""), ((((((((((H as any).append as any)("clipPath") as any).attr as any)("id", (e: any, o: any): any => `clip-section-${a}-${o}`) as any).append as any)("rect") as any).attr as any)("width", (e: any): any => ((Math as any).max as any)(0, (((e as any).x1 as any) - ((e as any).x0 as any) as any) - (12 as any))) as any).attr as any)("height", X), ((((((((((((((((((((H as any).append as any)("rect") as any).attr as any)("width", (e: any): any => ((e as any).x1 as any) - ((e as any).x0 as any)) as any).attr as any)("height", (e: any): any => ((e as any).y1 as any) - ((e as any).y0 as any)) as any).attr as any)("class", (e: any, o: any): any => `treemapSection section${o}`) as any).attr as any)("fill", (e: any): any => (y as any)(((e as any).data as any).name)) as any).attr as any)("fill-opacity", .6) as any).attr as any)("stroke", (e: any): any => (N as any)(((e as any).data as any).name)) as any).attr as any)("stroke-width", 2) as any).attr as any)("stroke-opacity", .4) as any).attr as any)("style", (e: any): any => {
      if (((e as any).depth as any) === (0 as any)) return "display: none;";
      const o: any = (B as any)({
        cssCompiledStyles: ((e as any).data as any).cssCompiledStyles
      });
      return (((o as any).nodeStyles as any) + (";" as any) as any) + ((((o as any).borderStyles as any).join as any)(";") as any);
    }), ((((((((((((((((((((H as any).append as any)("text") as any).attr as any)("class", "treemapSectionLabel") as any).attr as any)("x", 6) as any).attr as any)("y", (X as any) / (2 as any)) as any).attr as any)("dominant-baseline", "middle") as any).text as any)((e: any): any => ((e as any).depth as any) === (0 as any) ? "" : ((e as any).data as any).name) as any).attr as any)("font-weight", "bold") as any).attr as any)("clip-path", (e: any, o: any): any => `url(#clip-section-${a}-${o})`) as any).attr as any)("style", (e: any): any => {
      if (((e as any).depth as any) === (0 as any)) return "display: none;";
      const o: any = (("dominant-baseline: middle; font-size: 12px; fill:" as any) + (($ as any)(((e as any).data as any).name) as any) as any) + ("; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" as any),
        f: any = (B as any)({
          cssCompiledStyles: ((e as any).data as any).cssCompiledStyles
        });
      return (o as any) + ((((f as any).labelStyles as any).replace as any)("color:", "fill:") as any);
    }) as any).each as any)(function (this: any, e: any): any {
      if (((e as any).depth as any) === (0 as any)) return;
      const o: any = (U as any)(this),
        f: any = ((e as any).data as any).name;
      ((o as any).text as any)(f);
      const C: any = ((e as any).x1 as any) - ((e as any).x0 as any),
        L: number = 6;
      let T: any;
      ((i as any).showValues as any) !== (!1 as any) && (e as any).value ? T = ((((C as any) - (10 as any) as any) - (30 as any) as any) - (10 as any) as any) - (L as any) : T = ((C as any) - (L as any) as any) - (6 as any);
      const m: any = ((Math as any).max as any)(15, T),
        _: any = ((o as any).node as any)();
      if ((((_ as any).getComputedTextLength as any)() as any) > (m as any)) {
        let z: any = f;
        for (; ((z as any).length as any) > (0 as any);) {
          if (z = ((f as any).substring as any)(0, ((z as any).length as any) - (1 as any)), ((z as any).length as any) === (0 as any)) {
            ((o as any).text as any)("..."), (((_ as any).getComputedTextLength as any)() as any) > (m as any) && ((o as any).text as any)("");
            break;
          }
          if (((o as any).text as any)((z as any) + ("..." as any)), (((_ as any).getComputedTextLength as any)() as any) <= (m as any)) break;
        }
      }
    }), ((i as any).showValues as any) !== (!1 as any) && ((((((((((((((((((H as any).append as any)("text") as any).attr as any)("class", "treemapSectionValue") as any).attr as any)("x", (e: any): any => (((e as any).x1 as any) - ((e as any).x0 as any) as any) - (10 as any)) as any).attr as any)("y", (X as any) / (2 as any)) as any).attr as any)("text-anchor", "end") as any).attr as any)("dominant-baseline", "middle") as any).text as any)((e: any): any => (e as any).value ? (u as any)((e as any).value) : "") as any).attr as any)("font-style", "italic") as any).attr as any)("style", (e: any): any => {
      if (((e as any).depth as any) === (0 as any)) return "display: none;";
      const o: any = (("text-anchor: end; dominant-baseline: middle; font-size: 10px; fill:" as any) + (($ as any)(((e as any).data as any).name) as any) as any) + ("; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" as any),
        f: any = (B as any)({
          cssCompiledStyles: ((e as any).data as any).cssCompiledStyles
        });
      return (o as any) + ((((f as any).labelStyles as any).replace as any)("color:", "fill:") as any);
    });
    const re: any = ((le as any).leaves as any)(),
      A: any = ((re as any).length as any) > (20 as any),
      pe: any = A ? 16 : 38,
      Y: any = A ? 14 : 28,
      D: any = A ? 4 : 8,
      I: any = A ? 4 : 6,
      J: any = A ? 2 : 4,
      se: any = A ? 8 : 10,
      K: any = A ? 1 : 2,
      j: any = ((((((((((((V as any).selectAll as any)(".treemapLeafGroup") as any).data as any)(re) as any).enter as any)() as any).append as any)("g") as any).attr as any)("class", (e: any, o: any): any => `treemapNode treemapLeafGroup leaf${o}${((e as any).data as any).classSelector ? ` ${((e as any).data as any).classSelector}` : ""}x`) as any).attr as any)("transform", (e: any): any => `translate(${(e as any).x0},${(e as any).y0})`);
    ((((((((((((((((((j as any).append as any)("rect") as any).attr as any)("width", (e: any): any => ((e as any).x1 as any) - ((e as any).x0 as any)) as any).attr as any)("height", (e: any): any => ((e as any).y1 as any) - ((e as any).y0 as any)) as any).attr as any)("class", "treemapLeaf") as any).attr as any)("fill", (e: any): any => (e as any).parent ? (y as any)((((e as any).parent as any).data as any).name) : (y as any)(((e as any).data as any).name)) as any).attr as any)("style", (e: any): any => ((B as any)({
      cssCompiledStyles: ((e as any).data as any).cssCompiledStyles
    }) as any).nodeStyles) as any).attr as any)("fill-opacity", .3) as any).attr as any)("stroke", (e: any): any => (e as any).parent ? (y as any)((((e as any).parent as any).data as any).name) : (y as any)(((e as any).data as any).name)) as any).attr as any)("stroke-width", 3), ((((((((((j as any).append as any)("clipPath") as any).attr as any)("id", (e: any, o: any): any => `clip-${a}-${o}`) as any).append as any)("rect") as any).attr as any)("width", (e: any): any => ((Math as any).max as any)(0, (((e as any).x1 as any) - ((e as any).x0 as any) as any) - (4 as any))) as any).attr as any)("height", (e: any): any => ((Math as any).max as any)(0, (((e as any).y1 as any) - ((e as any).y0 as any) as any) - (4 as any))), ((((((((((((((((j as any).append as any)("text") as any).attr as any)("class", "treemapLabel") as any).attr as any)("x", (e: any): any => (((e as any).x1 as any) - ((e as any).x0 as any) as any) / (2 as any)) as any).attr as any)("y", (e: any): any => (((e as any).y1 as any) - ((e as any).y0 as any) as any) / (2 as any)) as any).attr as any)("style", (e: any): any => {
      const o: any = ((`text-anchor: middle; dominant-baseline: middle; font-size: ${pe}px;fill:` as any) + (($ as any)(((e as any).data as any).name) as any) as any) + (";" as any),
        f: any = (B as any)({
          cssCompiledStyles: ((e as any).data as any).cssCompiledStyles
        });
      return (o as any) + ((((f as any).labelStyles as any).replace as any)("color:", "fill:") as any);
    }) as any).attr as any)("clip-path", (e: any, o: any): any => `url(#clip-${a}-${o})`) as any).text as any)((e: any): any => ((e as any).data as any).name) as any).each as any)(function (this: any, e: any): any {
      const o: any = (U as any)(this),
        f: any = ((e as any).x1 as any) - ((e as any).x0 as any),
        C: any = ((e as any).y1 as any) - ((e as any).y0 as any),
        L: any = ((o as any).node as any)(),
        T: any = (f as any) - ((2 as any) * (J as any) as any),
        P: any = (C as any) - ((2 as any) * (J as any) as any);
      if ((T as any) < (se as any) || (P as any) < (se as any)) {
        ((o as any).style as any)("display", "none");
        return;
      }
      let m: any = (parseInt as any)(((o as any).style as any)("font-size"), 10);
      const _: number = .6;
      for (; (((L as any).getComputedTextLength as any)() as any) > (T as any) && (m as any) > (D as any);) m--, ((o as any).style as any)("font-size", `${m}px`);
      let F: any = ((Math as any).max as any)(I, ((Math as any).min as any)(Y, ((Math as any).round as any)((m as any) * (_ as any)))),
        k: any = ((m as any) + (K as any) as any) + (F as any);
      for (; (k as any) > (P as any) && (m as any) > (D as any) && (m--, F = ((Math as any).max as any)(I, ((Math as any).min as any)(Y, ((Math as any).round as any)((m as any) * (_ as any)))), !((F as any) < (I as any) && (m as any) === (D as any)));) ((o as any).style as any)("font-size", `${m}px`), k = ((m as any) + (K as any) as any) + (F as any);
      ((o as any).style as any)("font-size", `${m}px`), A ? ((m as any) < (D as any) || (P as any) < (D as any)) && ((o as any).style as any)("display", "none") : ((((L as any).getComputedTextLength as any)() as any) > (T as any) || (m as any) < (D as any) || (P as any) < (m as any)) && ((o as any).style as any)("display", "none");
    }), ((i as any).showValues as any) !== (!1 as any) && ((((((((((((((((j as any).append as any)("text") as any).attr as any)("class", "treemapValue") as any).attr as any)("x", (o: any): any => (((o as any).x1 as any) - ((o as any).x0 as any) as any) / (2 as any)) as any).attr as any)("y", function (this: any, o: any): any {
      return (((o as any).y1 as any) - ((o as any).y0 as any) as any) / (2 as any);
    }) as any).attr as any)("style", (o: any): any => {
      const f: any = ((`text-anchor: middle; dominant-baseline: hanging; font-size: ${Y}px;fill:` as any) + (($ as any)(((o as any).data as any).name) as any) as any) + (";" as any),
        C: any = (B as any)({
          cssCompiledStyles: ((o as any).data as any).cssCompiledStyles
        });
      return (f as any) + ((((C as any).labelStyles as any).replace as any)("color:", "fill:") as any);
    }) as any).attr as any)("clip-path", (o: any, f: any): any => `url(#clip-${a}-${f})`) as any).text as any)((o: any): any => (o as any).value ? (u as any)((o as any).value) : "") as any).each as any)(function (this: any, o: any): any {
      const f: any = (U as any)(this),
        C: any = (this as any).parentNode;
      if (!C) {
        ((f as any).style as any)("display", "none");
        return;
      }
      const L: any = (((U as any)(C) as any).select as any)(".treemapLabel");
      if (((L as any).empty as any)() || (((L as any).style as any)("display") as any) === ("none" as any)) {
        ((f as any).style as any)("display", "none");
        return;
      }
      const T: any = (parseFloat as any)(((L as any).style as any)("font-size")),
        m: any = ((Math as any).max as any)(I, ((Math as any).min as any)(Y, ((Math as any).round as any)((T as any) * (.6 as any))));
      ((f as any).style as any)("font-size", `${m}px`);
      const F: any = (((((o as any).y1 as any) - ((o as any).y0 as any) as any) / (2 as any) as any) + ((T as any) / (2 as any) as any) as any) + (K as any);
      ((f as any).attr as any)("y", F);
      const k: any = ((o as any).x1 as any) - ((o as any).x0 as any),
        ie: any = (((o as any).y1 as any) - ((o as any).y0 as any) as any) - (4 as any),
        me: any = (k as any) - ((2 as any) * (J as any) as any);
      (((((f as any).node as any)() as any).getComputedTextLength as any)() as any) > (me as any) || ((F as any) + (m as any) as any) > (ie as any) || (m as any) < (I as any) ? ((f as any).style as any)("display", "none") : ((f as any).style as any)("display", null);
    });
    const ue: any = (i as any).diagramPadding ?? 8;
    (Ne as any)(b, ue, "flowchart", i?.useMaxWidth || !1);
  }, "draw"),
  ct: any = (w as any)(function (this: any, t: any, a: any): any {
    return (((a as any).db as any).getClasses as any)();
  }, "getClasses"),
  ht: any = {
    draw: ot,
    getClasses: ct
  },
  dt: any = {
    sectionStrokeColor: "black",
    sectionStrokeWidth: "1",
    sectionFillColor: "#efefef",
    leafStrokeColor: "black",
    leafStrokeWidth: "1",
    leafFillColor: "#efefef",
    labelFontSize: "12px",
    valueFontSize: "10px",
    titleFontSize: "14px"
  },
  pt: any = (w as any)(({
    treemap: t
  }: any = {}): any => {
    const a: any = (ye as any)(),
      l: any = (ae as any)(),
      n: any = (ee as any)(a, (l as any).themeVariables),
      r: any = (ee as any)(dt, t),
      i: any = (r as any).titleColor ?? (n as any).titleColor,
      h: any = (r as any).labelColor ?? (n as any).textColor,
      d: any = (r as any).valueColor ?? (n as any).textColor;
    return `
  .treemapNode.section {
    stroke: ${(r as any).sectionStrokeColor};
    stroke-width: ${(r as any).sectionStrokeWidth};
    fill: ${(r as any).sectionFillColor};
  }
  .treemapNode.leaf {
    stroke: ${(r as any).leafStrokeColor};
    stroke-width: ${(r as any).leafStrokeWidth};
    fill: ${(r as any).leafFillColor};
  }
  .treemapLabel {
    fill: ${h};
    font-size: ${(r as any).labelFontSize};
  }
  .treemapValue {
    fill: ${d};
    font-size: ${(r as any).valueFontSize};
  }
  .treemapTitle {
    fill: ${i};
    font-size: ${(r as any).titleFontSize};
  }
  `;
  }, "getStyles"),
  ut: any = pt,
  Ct: any = {
    parser: he,
    get db(): any {
      return new (oe as any)();
    },
    renderer: ht,
    styles: ut
  };
export { Ct as diagram };
//# debugId=91adeb5c-8771-472d-a546-dcfee1fe3ee0
