declare var TextDecoder: any;
declare var URL: any;
declare var document: any;
declare var global: any;
declare var key: any;
declare var self: any;
declare var structuredClone: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "e5fab1bb-c8ee-418a-8032-7e4286e2269b", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-e5fab1bb-c8ee-418a-8032-7e4286e2269b");
  } catch (e: any) {}
} as any)();
const __vite__mapDeps: any = (i: any, m: any = __vite__mapDeps, d: any = (m as any).f || ((m as any).f = ["./chunk-markdown-math-katex-D30cPtUu.js", "./chunk-katex-CBoxBzRj.js", "./markdown-math-katex-DijbQiNo.css"])): any => ((i as any).map as any)((i: any): any => (d as any)[i]);
import { a4 as Wn, j as pe, c as Qn, r as ci, _ as fi } from "./index.eager-vendor-Qbf9YA6n.js";
import { s as _t, h as hi, w as pi, f as mi, a as gi, b as di, c as Zt } from "./chunk-index-C0dBjfzC.js";
import { a_ as xi, c as ki, i as yi } from "./index.eager-platform-Dcfeegfw.js";
import { ji as Pt, r as bi, d0 as wi } from "./index.eager-app-Cj5f8Gby.js";
import { c9 as Si } from "./index-ZYxf-aBb.js";
import { i as Qe } from "./index.eager-common-CdCvBQNJ.js";
const Ci: any = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
};
const Ei: any = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  Ii: any = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  Ti: any = {};
function en(this: any, e: any, t: any): any {
  return ((((Ti as any).jsx ? Ii : Ei) as any).test as any)(e);
}
var Se: any = {},
  rt: any,
  tn: any;
function Ai(this: any): any {
  if (tn) return rt;
  tn = 1;
  var e: any = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
    t: any = /\n/g,
    n: any = /^\s*/,
    r: any = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
    i: any = /^:\s*/,
    a: any = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
    l: any = /^[;\s]*/,
    u: any = /^\s+|\s+$/g,
    o: any = `
`,
    s: string = "/",
    c: string = "*",
    f: string = "",
    p: string = "comment",
    h: string = "declaration";
  rt = function (this: any, x: any, C: any): any {
    if ((typeof x as any) != ("string" as any)) throw new (TypeError as any)("First argument must be a string");
    if (!x) return [];
    C = C || {};
    var b: any = 1,
      I: any = 1;
    function E(this: any, F: any): any {
      var A: any = ((F as any).match as any)(t);
      A && (b += (A as any).length);
      var P: any = ((F as any).lastIndexOf as any)(o);
      I = ~P ? ((F as any).length as any) - (P as any) : (I as any) + ((F as any).length as any);
    }
    function D(this: any): any {
      var F: any = {
        line: b,
        column: I
      };
      return function (this: any, A: any): any {
        return (A as any).position = new (v as any)(F), ($ as any)(), A;
      };
    }
    function v(this: any, F: any): any {
      (this as any).start = F, (this as any).end = {
        line: b,
        column: I
      }, (this as any).source = (C as any).source;
    }
    ((v as any).prototype as any).content = x;
    function S(this: any, F: any): any {
      var A: any = new (Error as any)((((((((C as any).source as any) + (":" as any) as any) + (b as any) as any) + (":" as any) as any) + (I as any) as any) + (": " as any) as any) + (F as any));
      if ((A as any).reason = F, (A as any).filename = (C as any).source, (A as any).line = b, (A as any).column = I, (A as any).source = x, !(C as any).silent) throw A;
    }
    function M(this: any, F: any): any {
      var A: any = ((F as any).exec as any)(x);
      if (A) {
        var P: any = (A as any)[0];
        return (E as any)(P), x = ((x as any).slice as any)((P as any).length), A;
      }
    }
    function $(this: any): any {
      (M as any)(n);
    }
    function q(this: any, F: any): any {
      var A: any;
      for (F = F || []; A = (y as any)();) (A as any) !== (!1 as any) && ((F as any).push as any)(A);
      return F;
    }
    function y(this: any): any {
      var F: any = (D as any)();
      if (!((s as any) != (((x as any).charAt as any)(0) as any) || (c as any) != (((x as any).charAt as any)(1) as any))) {
        for (var A: any = 2; (f as any) != (((x as any).charAt as any)(A) as any) && ((c as any) != (((x as any).charAt as any)(A) as any) || (s as any) != (((x as any).charAt as any)((A as any) + (1 as any)) as any));) ++A;
        if (A += 2, (f as any) === (((x as any).charAt as any)((A as any) - (1 as any)) as any)) return (S as any)("End of comment missing");
        var P: any = ((x as any).slice as any)(2, (A as any) - (2 as any));
        return I += 2, (E as any)(P), x = ((x as any).slice as any)(A), I += 2, (F as any)({
          type: p,
          comment: P
        });
      }
    }
    function k(this: any): any {
      var F: any = (D as any)(),
        A: any = (M as any)(r);
      if (A) {
        if ((y as any)(), !(M as any)(i)) return (S as any)("property missing ':'");
        var P: any = (M as any)(a),
          H: any = (F as any)({
            type: h,
            property: (d as any)((((A as any)[0] as any).replace as any)(e, f)),
            value: P ? (d as any)((((P as any)[0] as any).replace as any)(e, f)) : f
          });
        return (M as any)(l), H;
      }
    }
    function _(this: any): any {
      var F: any = [];
      (q as any)(F);
      for (var A: any; A = (k as any)();) (A as any) !== (!1 as any) && (((F as any).push as any)(A), (q as any)(F));
      return F;
    }
    return ($ as any)(), (_ as any)();
  };
  function d(this: any, x: any): any {
    return x ? ((x as any).replace as any)(u, f) : f;
  }
  return rt;
}
var nn: any;
function Fi(this: any): any {
  if (nn) return Se;
  nn = 1;
  var e: any = Se && (Se as any).__importDefault || function (this: any, r: any): any {
    return r && (r as any).__esModule ? r : {
      default: r
    };
  };
  ((Object as any).defineProperty as any)(Se, "__esModule", {
    value: !0
  }), (Se as any).default = n;
  var t: any = (e as any)((Ai as any)());
  function n(this: any, r: any, i: any): any {
    var a: any = null;
    if (!r || (typeof r as any) != ("string" as any)) return a;
    var l: any = ((void 0, (t as any).default) as any)(r),
      u: any = (typeof i as any) == ("function" as any);
    return ((l as any).forEach as any)(function (this: any, o: any): any {
      if (((o as any).type as any) === ("declaration" as any)) {
        var s: any = (o as any).property,
          c: any = (o as any).value;
        u ? (i as any)(s, c, o) : c && (a = a || {}, (a as any)[s] = c);
      }
    }), a;
  }
  return Se;
}
var _e: any = {},
  rn: any;
function zi(this: any): any {
  if (rn) return _e;
  rn = 1, ((Object as any).defineProperty as any)(_e, "__esModule", {
    value: !0
  }), (_e as any).camelCase = void 0;
  var e: any = /^--[a-zA-Z0-9_-]+$/,
    t: any = /-([a-z])/g,
    n: any = /^[^-]+$/,
    r: any = /^-(webkit|moz|ms|o|khtml)-/,
    i: any = /^-(ms)-/,
    a: any = function (this: any, s: any): any {
      return !s || ((n as any).test as any)(s) || ((e as any).test as any)(s);
    },
    l: any = function (this: any, s: any, c: any): any {
      return ((c as any).toUpperCase as any)();
    },
    u: any = function (this: any, s: any, c: any): any {
      return (("" as any).concat as any)(c, "-");
    },
    o: any = function (this: any, s: any, c: any): any {
      return (c as any) === (void 0 as any) && (c = {}), (a as any)(s) ? s : (s = ((s as any).toLowerCase as any)(), (c as any).reactCompat ? s = ((s as any).replace as any)(i, u) : s = ((s as any).replace as any)(r, u), ((s as any).replace as any)(t, l));
    };
  return (_e as any).camelCase = o, _e;
}
var Pe: any, ln: any;
function _i(this: any): any {
  if (ln) return Pe;
  ln = 1;
  var e: any = Pe && (Pe as any).__importDefault || function (this: any, i: any): any {
      return i && (i as any).__esModule ? i : {
        default: i
      };
    },
    t: any = (e as any)((Fi as any)()),
    n: any = (zi as any)();
  function r(this: any, i: any, a: any): any {
    var l: any = {};
    return !i || (typeof i as any) != ("string" as any) || ((void 0, (t as any).default) as any)(i, function (this: any, u: any, o: any): any {
      u && o && ((l as any)[((void 0, (n as any).camelCase) as any)(u, a)] = o);
    }), l;
  }
  return (r as any).default = r, Pe = r, Pe;
}
var Pi: any = (_i as any)();
const Di: any = (Wn as any)(Pi),
  Gn: any = (Yn as any)("end"),
  Dt: any = (Yn as any)("start");
function Yn(this: any, e: any): any {
  return t;
  function t(this: any, n: any): any {
    const r: any = n && (n as any).position && ((n as any).position as any)[e] || {};
    if ((typeof (r as any).line as any) == ("number" as any) && ((r as any).line as any) > (0 as any) && (typeof (r as any).column as any) == ("number" as any) && ((r as any).column as any) > (0 as any)) return {
      line: (r as any).line,
      column: (r as any).column,
      offset: (typeof (r as any).offset as any) == ("number" as any) && ((r as any).offset as any) > (-1 as any) ? (r as any).offset : void 0
    };
  }
}
function Li(this: any, e: any): any {
  const t: any = (Dt as any)(e),
    n: any = (Gn as any)(e);
  if (t && n) return {
    start: t,
    end: n
  };
}
function Me(this: any, e: any): any {
  return !e || (typeof e as any) != ("object" as any) ? "" : "position" in e || "type" in e ? (an as any)((e as any).position) : "start" in e || "end" in e ? (an as any)(e) : "line" in e || "column" in e ? (yt as any)(e) : "";
}
function yt(this: any, e: any): any {
  return (((un as any)(e && (e as any).line) as any) + (":" as any) as any) + ((un as any)(e && (e as any).column) as any);
}
function an(this: any, e: any): any {
  return (((yt as any)(e && (e as any).start) as any) + ("-" as any) as any) + ((yt as any)(e && (e as any).end) as any);
}
function un(this: any, e: any): any {
  return e && (typeof e as any) == ("number" as any) ? e : 1;
}
class G extends (Error as any) {
  declare stack: any;
  declare source: any;
  declare ruleId: any;
  declare reason: any;
  declare place: any;
  declare name: any;
  declare line: any;
  declare message: any;
  declare fatal: any;
  declare column: any;
  declare cause: any;
  declare ancestors: any;
  [key: string]: any;
  constructor(t: any, n: any, r: any) {
    super(), (typeof n as any) == ("string" as any) && (r = n, n = void 0);
    let i: any = "",
      a: any = {},
      l: any = !1;
    if (n && ("line" in n && "column" in n ? a = {
      place: n
    } : "start" in n && "end" in n ? a = {
      place: n
    } : "type" in n ? a = {
      ancestors: [n],
      place: (n as any).position
    } : a = {
      ...n
    }), (typeof t as any) == ("string" as any) ? i = t : !(a as any).cause && t && (l = !0, i = (t as any).message, (a as any).cause = t), !(a as any).ruleId && !(a as any).source && (typeof r as any) == ("string" as any)) {
      const o: any = ((r as any).indexOf as any)(":");
      (o as any) === (-1 as any) ? (a as any).ruleId = r : ((a as any).source = ((r as any).slice as any)(0, o), (a as any).ruleId = ((r as any).slice as any)((o as any) + (1 as any)));
    }
    if (!(a as any).place && (a as any).ancestors && (a as any).ancestors) {
      const o: any = ((a as any).ancestors as any)[(((a as any).ancestors as any).length as any) - (1 as any)];
      o && ((a as any).place = (o as any).position);
    }
    const u: any = (a as any).place && "start" in (a as any).place ? ((a as any).place as any).start : (a as any).place;
    (this as any).ancestors = (a as any).ancestors || void 0, (this as any).cause = (a as any).cause || void 0, (this as any).column = u ? (u as any).column : void 0, (this as any).fatal = void 0, (this as any).file, (this as any).message = i, (this as any).line = u ? (u as any).line : void 0, (this as any).name = (Me as any)((a as any).place) || "1:1", (this as any).place = (a as any).place || void 0, (this as any).reason = (this as any).message, (this as any).ruleId = (a as any).ruleId || void 0, (this as any).source = (a as any).source || void 0, (this as any).stack = l && (a as any).cause && (typeof ((a as any).cause as any).stack as any) == ("string" as any) ? ((a as any).cause as any).stack : "", (this as any).actual, (this as any).expected, (this as any).note, (this as any).url;
  }
}
((G as any).prototype as any).file = "";
((G as any).prototype as any).name = "";
((G as any).prototype as any).reason = "";
((G as any).prototype as any).message = "";
((G as any).prototype as any).stack = "";
((G as any).prototype as any).column = void 0;
((G as any).prototype as any).line = void 0;
((G as any).prototype as any).ancestors = void 0;
((G as any).prototype as any).cause = void 0;
((G as any).prototype as any).fatal = void 0;
((G as any).prototype as any).place = void 0;
((G as any).prototype as any).ruleId = void 0;
((G as any).prototype as any).source = void 0;
const Lt: any = ({} as any).hasOwnProperty,
  Mi: any = new (Map as any)(),
  Ni: any = /[A-Z]/g,
  Ri: any = new (Set as any)(["table", "tbody", "thead", "tfoot", "tr"]),
  vi: any = new (Set as any)(["td", "th"]),
  Xn: string = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function Oi(this: any, e: any, t: any): any {
  if (!t || ((t as any).Fragment as any) === (void 0 as any)) throw new (TypeError as any)("Expected `Fragment` in options");
  const n: any = (t as any).filePath || void 0;
  let r: any;
  if ((t as any).development) {
    if ((typeof (t as any).jsxDEV as any) != ("function" as any)) throw new (TypeError as any)("Expected `jsxDEV` in options when `development: true`");
    r = (Wi as any)(n, (t as any).jsxDEV);
  } else {
    if ((typeof (t as any).jsx as any) != ("function" as any)) throw new (TypeError as any)("Expected `jsx` in production options");
    if ((typeof (t as any).jsxs as any) != ("function" as any)) throw new (TypeError as any)("Expected `jsxs` in production options");
    r = (Ui as any)(n, (t as any).jsx, (t as any).jsxs);
  }
  const i: any = {
      Fragment: (t as any).Fragment,
      ancestors: [],
      components: (t as any).components || {},
      create: r,
      elementAttributeNameCase: (t as any).elementAttributeNameCase || "react",
      evaluater: (t as any).createEvaluater ? ((t as any).createEvaluater as any)() : void 0,
      filePath: n,
      ignoreInvalidStyle: (t as any).ignoreInvalidStyle || !1,
      passKeys: ((t as any).passKeys as any) !== (!1 as any),
      passNode: (t as any).passNode || !1,
      schema: ((t as any).space as any) === ("svg" as any) ? _t : hi,
      stylePropertyNameCase: (t as any).stylePropertyNameCase || "dom",
      tableCellAlignToStyle: ((t as any).tableCellAlignToStyle as any) !== (!1 as any)
    },
    a: any = (Jn as any)(i, e, void 0);
  return a && (typeof a as any) != ("string" as any) ? a : ((i as any).create as any)(e, (i as any).Fragment, {
    children: a || void 0
  }, void 0);
}
function Jn(this: any, e: any, t: any, n: any): any {
  if (((t as any).type as any) === ("element" as any)) return (Bi as any)(e, t, n);
  if (((t as any).type as any) === ("mdxFlowExpression" as any) || ((t as any).type as any) === ("mdxTextExpression" as any)) return (ji as any)(e, t);
  if (((t as any).type as any) === ("mdxJsxFlowElement" as any) || ((t as any).type as any) === ("mdxJsxTextElement" as any)) return ($i as any)(e, t, n);
  if (((t as any).type as any) === ("mdxjsEsm" as any)) return (qi as any)(e, t);
  if (((t as any).type as any) === ("root" as any)) return (Hi as any)(e, t, n);
  if (((t as any).type as any) === ("text" as any)) return (Vi as any)(e, t);
}
function Bi(this: any, e: any, t: any, n: any): any {
  const r: any = (e as any).schema;
  let i: any = r;
  ((((t as any).tagName as any).toLowerCase as any)() as any) === ("svg" as any) && ((r as any).space as any) === ("html" as any) && (i = _t, (e as any).schema = i), (((e as any).ancestors as any).push as any)(t);
  const a: any = (Zn as any)(e, (t as any).tagName, !1),
    l: any = (Qi as any)(e, t);
  let u: any = (Nt as any)(e, t);
  return ((Ri as any).has as any)((t as any).tagName) && (u = ((u as any).filter as any)(function (this: any, o: any): any {
    return (typeof o as any) == ("string" as any) ? !(pi as any)(o) : !0;
  })), (Kn as any)(e, l, a, t), (Mt as any)(l, u), (((e as any).ancestors as any).pop as any)(), (e as any).schema = r, ((e as any).create as any)(t, a, l, n);
}
function ji(this: any, e: any, t: any): any {
  if ((t as any).data && ((t as any).data as any).estree && (e as any).evaluater) {
    const r: any = ((((t as any).data as any).estree as any).body as any)[0];
    return (r as any).type, (((e as any).evaluater as any).evaluateExpression as any)((r as any).expression);
  }
  (ve as any)(e, (t as any).position);
}
function qi(this: any, e: any, t: any): any {
  if ((t as any).data && ((t as any).data as any).estree && (e as any).evaluater) return (((e as any).evaluater as any).evaluateProgram as any)(((t as any).data as any).estree);
  (ve as any)(e, (t as any).position);
}
function $i(this: any, e: any, t: any, n: any): any {
  const r: any = (e as any).schema;
  let i: any = r;
  ((t as any).name as any) === ("svg" as any) && ((r as any).space as any) === ("html" as any) && (i = _t, (e as any).schema = i), (((e as any).ancestors as any).push as any)(t);
  const a: any = ((t as any).name as any) === (null as any) ? (e as any).Fragment : (Zn as any)(e, (t as any).name, !0),
    l: any = (Gi as any)(e, t),
    u: any = (Nt as any)(e, t);
  return (Kn as any)(e, l, a, t), (Mt as any)(l, u), (((e as any).ancestors as any).pop as any)(), (e as any).schema = r, ((e as any).create as any)(t, a, l, n);
}
function Hi(this: any, e: any, t: any, n: any): any {
  const r: any = {};
  return (Mt as any)(r, (Nt as any)(e, t)), ((e as any).create as any)(t, (e as any).Fragment, r, n);
}
function Vi(this: any, e: any, t: any): any {
  return (t as any).value;
}
function Kn(this: any, e: any, t: any, n: any, r: any): any {
  (typeof n as any) != ("string" as any) && (n as any) !== ((e as any).Fragment as any) && (e as any).passNode && ((t as any).node = r);
}
function Mt(this: any, e: any, t: any): any {
  if (((t as any).length as any) > (0 as any)) {
    const n: any = ((t as any).length as any) > (1 as any) ? t : (t as any)[0];
    n && ((e as any).children = n);
  }
}
function Ui(this: any, e: any, t: any, n: any): any {
  return r;
  function r(this: any, i: any, a: any, l: any, u: any): any {
    const s: any = ((Array as any).isArray as any)((l as any).children) ? n : t;
    return u ? (s as any)(a, l, u) : (s as any)(a, l);
  }
}
function Wi(this: any, e: any, t: any): any {
  return n;
  function n(this: any, r: any, i: any, a: any, l: any): any {
    const u: any = ((Array as any).isArray as any)((a as any).children),
      o: any = (Dt as any)(r);
    return (t as any)(i, a, l, u, {
      columnNumber: o ? ((o as any).column as any) - (1 as any) : void 0,
      fileName: e,
      lineNumber: o ? (o as any).line : void 0
    }, void 0);
  }
}
function Qi(this: any, e: any, t: any): any {
  const n: any = {};
  let r: any, i: any;
  for (i in (t as any).properties) if ((i as any) !== ("children" as any) && ((Lt as any).call as any)((t as any).properties, i)) {
    const a: any = (Yi as any)(e, i, ((t as any).properties as any)[i]);
    if (a) {
      const [l, u]: any = a;
      (e as any).tableCellAlignToStyle && (l as any) === ("align" as any) && (typeof u as any) == ("string" as any) && ((vi as any).has as any)((t as any).tagName) ? r = u : (n as any)[l] = u;
    }
  }
  if (r) {
    const a: any = (n as any).style || ((n as any).style = {});
    (a as any)[((e as any).stylePropertyNameCase as any) === ("css" as any) ? "text-align" : "textAlign"] = r;
  }
  return n;
}
function Gi(this: any, e: any, t: any): any {
  const n: any = {};
  for (const r of (t as any).attributes) if (((r as any).type as any) === ("mdxJsxExpressionAttribute" as any)) {
    if ((r as any).data && ((r as any).data as any).estree && (e as any).evaluater) {
      const a: any = ((((r as any).data as any).estree as any).body as any)[0];
      (a as any).type;
      const l: any = (a as any).expression;
      (l as any).type;
      const u: any = ((l as any).properties as any)[0];
      (u as any).type, ((Object as any).assign as any)(n, (((e as any).evaluater as any).evaluateExpression as any)((u as any).argument));
    } else (ve as any)(e, (t as any).position);
  } else {
    const i: any = (r as any).name;
    let a: any;
    if ((r as any).value && (typeof (r as any).value as any) == ("object" as any)) {
      if (((r as any).value as any).data && (((r as any).value as any).data as any).estree && (e as any).evaluater) {
        const u: any = (((((r as any).value as any).data as any).estree as any).body as any)[0];
        (u as any).type, a = (((e as any).evaluater as any).evaluateExpression as any)((u as any).expression);
      } else (ve as any)(e, (t as any).position);
    } else a = ((r as any).value as any) === (null as any) ? !0 : (r as any).value;
    (n as any)[i] = a;
  }
  return n;
}
function Nt(this: any, e: any, t: any): any {
  const n: any = [];
  let r: any = -1;
  const i: any = (e as any).passKeys ? new (Map as any)() : Mi;
  for (; (++r as any) < (((t as any).children as any).length as any);) {
    const a: any = ((t as any).children as any)[r];
    let l: any;
    if ((e as any).passKeys) {
      const o: any = ((a as any).type as any) === ("element" as any) ? (a as any).tagName : ((a as any).type as any) === ("mdxJsxFlowElement" as any) || ((a as any).type as any) === ("mdxJsxTextElement" as any) ? (a as any).name : void 0;
      if (o) {
        const s: any = ((i as any).get as any)(o) || 0;
        l = ((o as any) + ("-" as any) as any) + (s as any), ((i as any).set as any)(o, (s as any) + (1 as any));
      }
    }
    const u: any = (Jn as any)(e, a, l);
    (u as any) !== (void 0 as any) && ((n as any).push as any)(u);
  }
  return n;
}
function Yi(this: any, e: any, t: any, n: any): any {
  const r: any = (mi as any)((e as any).schema, t);
  if (!((n as any) == (null as any) || (typeof n as any) == ("number" as any) && ((Number as any).isNaN as any)(n))) {
    if (((Array as any).isArray as any)(n) && (n = (r as any).commaSeparated ? (gi as any)(n) : (di as any)(n)), ((r as any).property as any) === ("style" as any)) {
      let i: any = (typeof n as any) == ("object" as any) ? n : (Xi as any)(e, (String as any)(n));
      return ((e as any).stylePropertyNameCase as any) === ("css" as any) && (i = (Ji as any)(i)), ["style", i];
    }
    return [((e as any).elementAttributeNameCase as any) === ("react" as any) && (r as any).space ? (Ci as any)[(r as any).property] || (r as any).property : (r as any).attribute, n];
  }
}
function Xi(this: any, e: any, t: any): any {
  try {
    return (Di as any)(t, {
      reactCompat: !0
    });
  } catch (n: any) {
    if ((e as any).ignoreInvalidStyle) return {};
    const r: any = n,
      i: any = new (G as any)("Cannot parse `style` attribute", {
        ancestors: (e as any).ancestors,
        cause: r,
        ruleId: "style",
        source: "hast-util-to-jsx-runtime"
      });
    throw (i as any).file = (e as any).filePath || void 0, (i as any).url = (Xn as any) + ("#cannot-parse-style-attribute" as any), i;
  }
}
function Zn(this: any, e: any, t: any, n: any): any {
  let r: any;
  if (!n) r = {
    type: "Literal",
    value: t
  };else if (((t as any).includes as any)(".")) {
    const i: any = ((t as any).split as any)(".");
    let a: any = -1,
      l: any;
    for (; (++a as any) < ((i as any).length as any);) {
      const u: any = (en as any)((i as any)[a]) ? {
        type: "Identifier",
        name: (i as any)[a]
      } : {
        type: "Literal",
        value: (i as any)[a]
      };
      l = l ? {
        type: "MemberExpression",
        object: l,
        property: u,
        computed: !!(a && ((u as any).type as any) === ("Literal" as any)),
        optional: !1
      } : u;
    }
    r = l;
  } else r = (en as any)(t) && !((/^[a-z]/ as any).test as any)(t) ? {
    type: "Identifier",
    name: t
  } : {
    type: "Literal",
    value: t
  };
  if (((r as any).type as any) === ("Literal" as any)) {
    const i: any = (r as any).value;
    return ((Lt as any).call as any)((e as any).components, i) ? ((e as any).components as any)[i] : i;
  }
  if ((e as any).evaluater) return (((e as any).evaluater as any).evaluateExpression as any)(r);
  (ve as any)(e);
}
function ve(this: any, e: any, t: any): any {
  const n: any = new (G as any)("Cannot handle MDX estrees without `createEvaluater`", {
    ancestors: (e as any).ancestors,
    place: t,
    ruleId: "mdx-estree",
    source: "hast-util-to-jsx-runtime"
  });
  throw (n as any).file = (e as any).filePath || void 0, (n as any).url = (Xn as any) + ("#cannot-handle-mdx-estrees-without-createevaluater" as any), n;
}
function Ji(this: any, e: any): any {
  const t: any = {};
  let n: any;
  for (n in e) ((Lt as any).call as any)(e, n) && ((t as any)[(Ki as any)(n)] = (e as any)[n]);
  return t;
}
function Ki(this: any, e: any): any {
  let t: any = ((e as any).replace as any)(Ni, Zi);
  return (((t as any).slice as any)(0, 3) as any) === ("ms-" as any) && (t = ("-" as any) + (t as any)), t;
}
function Zi(this: any, e: any): any {
  return ("-" as any) + (((e as any).toLowerCase as any)() as any);
}
const it: any = {
    action: ["form"],
    cite: ["blockquote", "del", "ins", "q"],
    data: ["object"],
    formAction: ["button", "input"],
    href: ["a", "area", "base", "link"],
    icon: ["menuitem"],
    itemId: null,
    manifest: ["html"],
    ping: ["a", "area"],
    poster: ["video"],
    src: ["audio", "embed", "iframe", "img", "input", "script", "source", "track", "video"]
  },
  el: any = {};
function Rt(this: any, e: any, t: any): any {
  const n: any = el,
    r: any = (typeof (n as any).includeImageAlt as any) == ("boolean" as any) ? (n as any).includeImageAlt : !0,
    i: any = (typeof (n as any).includeHtml as any) == ("boolean" as any) ? (n as any).includeHtml : !0;
  return (er as any)(e, r, i);
}
function er(this: any, e: any, t: any, n: any): any {
  if ((tl as any)(e)) {
    if ("value" in e) return ((e as any).type as any) === ("html" as any) && !n ? "" : (e as any).value;
    if (t && "alt" in e && (e as any).alt) return (e as any).alt;
    if ("children" in e) return (on as any)((e as any).children, t, n);
  }
  return ((Array as any).isArray as any)(e) ? (on as any)(e, t, n) : "";
}
function on(this: any, e: any, t: any, n: any): any {
  const r: any = [];
  let i: any = -1;
  for (; (++i as any) < ((e as any).length as any);) (r as any)[i] = (er as any)((e as any)[i], t, n);
  return ((r as any).join as any)("");
}
function tl(this: any, e: any): any {
  return !!(e && (typeof e as any) == ("object" as any));
}
const sn: any = ((document as any).createElement as any)("i");
function vt(this: any, e: any): any {
  const t: any = (("&" as any) + (e as any) as any) + (";" as any);
  (sn as any).innerHTML = t;
  const n: any = (sn as any).textContent;
  return (((n as any).charCodeAt as any)(((n as any).length as any) - (1 as any)) as any) === (59 as any) && (e as any) !== ("semi" as any) || (n as any) === (t as any) ? !1 : n;
}
function K(this: any, e: any, t: any, n: any, r: any): any {
  const i: any = (e as any).length;
  let a: any = 0,
    l: any;
  if ((t as any) < (0 as any) ? t = (-t as any) > (i as any) ? 0 : (i as any) + (t as any) : t = (t as any) > (i as any) ? i : t, n = (n as any) > (0 as any) ? n : 0, ((r as any).length as any) < (1e4 as any)) l = ((Array as any).from as any)(r), ((l as any).unshift as any)(t, n), ((e as any).splice as any)(...l);else for (n && ((e as any).splice as any)(t, n); (a as any) < ((r as any).length as any);) l = ((r as any).slice as any)(a, (a as any) + (1e4 as any)), ((l as any).unshift as any)(t, 0), ((e as any).splice as any)(...l), a += 1e4, t += 1e4;
}
function Z(this: any, e: any, t: any): any {
  return ((e as any).length as any) > (0 as any) ? ((K as any)(e, (e as any).length, 0, t), e) : t;
}
const cn: any = ({} as any).hasOwnProperty;
function tr(this: any, e: any): any {
  const t: any = {};
  let n: any = -1;
  for (; (++n as any) < ((e as any).length as any);) (nl as any)(t, (e as any)[n]);
  return t;
}
function nl(this: any, e: any, t: any): any {
  let n: any;
  for (n in t) {
    const i: any = (((cn as any).call as any)(e, n) ? (e as any)[n] : void 0) || ((e as any)[n] = {}),
      a: any = (t as any)[n];
    let l: any;
    if (a) for (l in a) {
      ((cn as any).call as any)(i, l) || ((i as any)[l] = []);
      const u: any = (a as any)[l];
      (rl as any)((i as any)[l], ((Array as any).isArray as any)(u) ? u : u ? [u] : []);
    }
  }
}
function rl(this: any, e: any, t: any): any {
  let n: any = -1;
  const r: any = [];
  for (; (++n as any) < ((t as any).length as any);) ((((((t as any)[n] as any).add as any) === ("after" as any) ? e : r) as any).push as any)((t as any)[n]);
  (K as any)(e, 0, 0, r);
}
function nr(this: any, e: any, t: any): any {
  const n: any = ((Number as any).parseInt as any)(e, t);
  return (n as any) < (9 as any) || (n as any) === (11 as any) || (n as any) > (13 as any) && (n as any) < (32 as any) || (n as any) > (126 as any) && (n as any) < (160 as any) || (n as any) > (55295 as any) && (n as any) < (57344 as any) || (n as any) > (64975 as any) && (n as any) < (65008 as any) || (((n as any) & (65535 as any)) as any) === (65535 as any) || (((n as any) & (65535 as any)) as any) === (65534 as any) || (n as any) > (1114111 as any) ? "\uFFFD" : ((String as any).fromCodePoint as any)(n);
}
function re(this: any, e: any): any {
  return ((((((((e as any).replace as any)(/[\t\n\r ]+/g, " ") as any).replace as any)(/^ | $/g, "") as any).toLowerCase as any)() as any).toUpperCase as any)();
}
const Y: any = (me as any)(/[A-Za-z]/),
  Q: any = (me as any)(/[\dA-Za-z]/),
  il: any = (me as any)(/[#-'*+\--9=?A-Z^-~]/);
function Ge(this: any, e: any): any {
  return (e as any) !== (null as any) && ((e as any) < (32 as any) || (e as any) === (127 as any));
}
const bt: any = (me as any)(/\d/),
  ll: any = (me as any)(/[\dA-Fa-f]/),
  al: any = (me as any)(/[!-/:-@[-`{-~]/);
function z(this: any, e: any): any {
  return (e as any) !== (null as any) && (e as any) < (-2 as any);
}
function U(this: any, e: any): any {
  return (e as any) !== (null as any) && ((e as any) < (0 as any) || (e as any) === (32 as any));
}
function B(this: any, e: any): any {
  return (e as any) === (-2 as any) || (e as any) === (-1 as any) || (e as any) === (32 as any);
}
const Ke: any = (me as any)(new (RegExp as any)("\\p{P}|\\p{S}", "u")),
  ke: any = (me as any)(/\s/);
function me(this: any, e: any): any {
  return t;
  function t(this: any, n: any): any {
    return (n as any) !== (null as any) && (n as any) > (-1 as any) && ((e as any).test as any)(((String as any).fromCharCode as any)(n));
  }
}
function Te(this: any, e: any): any {
  const t: any = [];
  let n: any = -1,
    r: any = 0,
    i: any = 0;
  for (; (++n as any) < ((e as any).length as any);) {
    const a: any = ((e as any).charCodeAt as any)(n);
    let l: any = "";
    if ((a as any) === (37 as any) && (Q as any)(((e as any).charCodeAt as any)((n as any) + (1 as any))) && (Q as any)(((e as any).charCodeAt as any)((n as any) + (2 as any)))) i = 2;else if ((a as any) < (128 as any)) ((/[!#$&-;=?-Z_a-z~]/ as any).test as any)(((String as any).fromCharCode as any)(a)) || (l = ((String as any).fromCharCode as any)(a));else if ((a as any) > (55295 as any) && (a as any) < (57344 as any)) {
      const u: any = ((e as any).charCodeAt as any)((n as any) + (1 as any));
      (a as any) < (56320 as any) && (u as any) > (56319 as any) && (u as any) < (57344 as any) ? (l = ((String as any).fromCharCode as any)(a, u), i = 1) : l = "\uFFFD";
    } else l = ((String as any).fromCharCode as any)(a);
    l && (((t as any).push as any)(((e as any).slice as any)(r, n), (encodeURIComponent as any)(l)), r = ((n as any) + (i as any) as any) + (1 as any), l = ""), i && (n += i, i = 0);
  }
  return (((t as any).join as any)("") as any) + (((e as any).slice as any)(r) as any);
}
function R(this: any, e: any, t: any, n: any, r: any): any {
  const i: any = r ? (r as any) - (1 as any) : (Number as any).POSITIVE_INFINITY;
  let a: any = 0;
  return l;
  function l(this: any, o: any): any {
    return (B as any)(o) ? (((e as any).enter as any)(n), (u as any)(o)) : (t as any)(o);
  }
  function u(this: any, o: any): any {
    return (B as any)(o) && (a++ as any) < (i as any) ? (((e as any).consume as any)(o), u) : (((e as any).exit as any)(n), (t as any)(o));
  }
}
const ul: any = {
  tokenize: ol
};
function ol(this: any, e: any): any {
  const t: any = ((e as any).attempt as any)((((this as any).parser as any).constructs as any).contentInitial, r, i);
  let n: any;
  return t;
  function r(this: any, u: any): any {
    if ((u as any) === (null as any)) {
      ((e as any).consume as any)(u);
      return;
    }
    return ((e as any).enter as any)("lineEnding"), ((e as any).consume as any)(u), ((e as any).exit as any)("lineEnding"), (R as any)(e, t, "linePrefix");
  }
  function i(this: any, u: any): any {
    return ((e as any).enter as any)("paragraph"), (a as any)(u);
  }
  function a(this: any, u: any): any {
    const o: any = ((e as any).enter as any)("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && ((n as any).next = o), n = o, (l as any)(u);
  }
  function l(this: any, u: any): any {
    if ((u as any) === (null as any)) {
      ((e as any).exit as any)("chunkText"), ((e as any).exit as any)("paragraph"), ((e as any).consume as any)(u);
      return;
    }
    return (z as any)(u) ? (((e as any).consume as any)(u), ((e as any).exit as any)("chunkText"), a) : (((e as any).consume as any)(u), l);
  }
}
const sl: any = {
    tokenize: cl
  },
  fn: any = {
    tokenize: fl
  };
function cl(this: any, e: any): any {
  const t: any = this,
    n: any = [];
  let r: any = 0,
    i: any,
    a: any,
    l: any;
  return u;
  function u(this: any, E: any): any {
    if ((r as any) < ((n as any).length as any)) {
      const D: any = (n as any)[r];
      return (t as any).containerState = (D as any)[1], (((e as any).attempt as any)(((D as any)[0] as any).continuation, o, s) as any)(E);
    }
    return (s as any)(E);
  }
  function o(this: any, E: any): any {
    if (r++, ((t as any).containerState as any)._closeFlow) {
      ((t as any).containerState as any)._closeFlow = void 0, i && (I as any)();
      const D: any = ((t as any).events as any).length;
      let v: any = D,
        S: any;
      for (; v--;) if (((((t as any).events as any)[v] as any)[0] as any) === ("exit" as any) && (((((t as any).events as any)[v] as any)[1] as any).type as any) === ("chunkFlow" as any)) {
        S = ((((t as any).events as any)[v] as any)[1] as any).end;
        break;
      }
      (b as any)(r);
      let M: any = D;
      for (; (M as any) < (((t as any).events as any).length as any);) ((((t as any).events as any)[M] as any)[1] as any).end = {
        ...S
      }, M++;
      return (K as any)((t as any).events, (v as any) + (1 as any), 0, (((t as any).events as any).slice as any)(D)), ((t as any).events as any).length = M, (s as any)(E);
    }
    return (u as any)(E);
  }
  function s(this: any, E: any): any {
    if ((r as any) === ((n as any).length as any)) {
      if (!i) return (p as any)(E);
      if ((i as any).currentConstruct && ((i as any).currentConstruct as any).concrete) return (d as any)(E);
      (t as any).interrupt = !!((i as any).currentConstruct && !(i as any)._gfmTableDynamicInterruptHack);
    }
    return (t as any).containerState = {}, (((e as any).check as any)(fn, c, f) as any)(E);
  }
  function c(this: any, E: any): any {
    return i && (I as any)(), (b as any)(r), (p as any)(E);
  }
  function f(this: any, E: any): any {
    return (((t as any).parser as any).lazy as any)[(((t as any).now as any)() as any).line] = (r as any) !== ((n as any).length as any), l = (((t as any).now as any)() as any).offset, (d as any)(E);
  }
  function p(this: any, E: any): any {
    return (t as any).containerState = {}, (((e as any).attempt as any)(fn, h, d) as any)(E);
  }
  function h(this: any, E: any): any {
    return r++, ((n as any).push as any)([(t as any).currentConstruct, (t as any).containerState]), (p as any)(E);
  }
  function d(this: any, E: any): any {
    if ((E as any) === (null as any)) {
      i && (I as any)(), (b as any)(0), ((e as any).consume as any)(E);
      return;
    }
    return i = i || (((t as any).parser as any).flow as any)(((t as any).now as any)()), ((e as any).enter as any)("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: a
    }), (x as any)(E);
  }
  function x(this: any, E: any): any {
    if ((E as any) === (null as any)) {
      (C as any)(((e as any).exit as any)("chunkFlow"), !0), (b as any)(0), ((e as any).consume as any)(E);
      return;
    }
    return (z as any)(E) ? (((e as any).consume as any)(E), (C as any)(((e as any).exit as any)("chunkFlow")), r = 0, (t as any).interrupt = void 0, u) : (((e as any).consume as any)(E), x);
  }
  function C(this: any, E: any, D: any): any {
    const v: any = ((t as any).sliceStream as any)(E);
    if (D && ((v as any).push as any)(null), (E as any).previous = a, a && ((a as any).next = E), a = E, ((i as any).defineSkip as any)((E as any).start), ((i as any).write as any)(v), (((t as any).parser as any).lazy as any)[((E as any).start as any).line]) {
      let S: any = ((i as any).events as any).length;
      for (; S--;) if (((((((i as any).events as any)[S] as any)[1] as any).start as any).offset as any) < (l as any) && (!((((i as any).events as any)[S] as any)[1] as any).end || ((((((i as any).events as any)[S] as any)[1] as any).end as any).offset as any) > (l as any))) return;
      const M: any = ((t as any).events as any).length;
      let $: any = M,
        q: any,
        y: any;
      for (; $--;) if (((((t as any).events as any)[$] as any)[0] as any) === ("exit" as any) && (((((t as any).events as any)[$] as any)[1] as any).type as any) === ("chunkFlow" as any)) {
        if (q) {
          y = ((((t as any).events as any)[$] as any)[1] as any).end;
          break;
        }
        q = !0;
      }
      for ((b as any)(r), S = M; (S as any) < (((t as any).events as any).length as any);) ((((t as any).events as any)[S] as any)[1] as any).end = {
        ...y
      }, S++;
      (K as any)((t as any).events, ($ as any) + (1 as any), 0, (((t as any).events as any).slice as any)(M)), ((t as any).events as any).length = S;
    }
  }
  function b(this: any, E: any): any {
    let D: any = (n as any).length;
    for (; (D-- as any) > (E as any);) {
      const v: any = (n as any)[D];
      (t as any).containerState = (v as any)[1], ((((v as any)[0] as any).exit as any).call as any)(t, e);
    }
    (n as any).length = E;
  }
  function I(this: any): any {
    ((i as any).write as any)([null]), a = void 0, i = void 0, ((t as any).containerState as any)._closeFlow = void 0;
  }
}
function fl(this: any, e: any, t: any, n: any): any {
  return (R as any)(e, ((e as any).attempt as any)((((this as any).parser as any).constructs as any).document, t, n), "linePrefix", ((((((this as any).parser as any).constructs as any).disable as any).null as any).includes as any)("codeIndented") ? void 0 : 4);
}
function Ie(this: any, e: any): any {
  if ((e as any) === (null as any) || (U as any)(e) || (ke as any)(e)) return 1;
  if ((Ke as any)(e)) return 2;
}
function Ze(this: any, e: any, t: any, n: any): any {
  const r: any = [];
  let i: any = -1;
  for (; (++i as any) < ((e as any).length as any);) {
    const a: any = ((e as any)[i] as any).resolveAll;
    a && !((r as any).includes as any)(a) && (t = (a as any)(t, n), ((r as any).push as any)(a));
  }
  return t;
}
const wt: any = {
  name: "attention",
  resolveAll: hl,
  tokenize: pl
};
function hl(this: any, e: any, t: any): any {
  let n: any = -1,
    r: any,
    i: any,
    a: any,
    l: any,
    u: any,
    o: any,
    s: any,
    c: any;
  for (; (++n as any) < ((e as any).length as any);) if ((((e as any)[n] as any)[0] as any) === ("enter" as any) && ((((e as any)[n] as any)[1] as any).type as any) === ("attentionSequence" as any) && (((e as any)[n] as any)[1] as any)._close) {
    for (r = n; r--;) if ((((e as any)[r] as any)[0] as any) === ("exit" as any) && ((((e as any)[r] as any)[1] as any).type as any) === ("attentionSequence" as any) && (((e as any)[r] as any)[1] as any)._open && (((((t as any).sliceSerialize as any)(((e as any)[r] as any)[1]) as any).charCodeAt as any)(0) as any) === (((((t as any).sliceSerialize as any)(((e as any)[n] as any)[1]) as any).charCodeAt as any)(0) as any)) {
      if (((((e as any)[r] as any)[1] as any)._close || (((e as any)[n] as any)[1] as any)._open) && ((((((e as any)[n] as any)[1] as any).end as any).offset as any) - (((((e as any)[n] as any)[1] as any).start as any).offset as any) as any) % (3 as any) && !(((((((((e as any)[r] as any)[1] as any).end as any).offset as any) - (((((e as any)[r] as any)[1] as any).start as any).offset as any) as any) + (((((e as any)[n] as any)[1] as any).end as any).offset as any) as any) - (((((e as any)[n] as any)[1] as any).start as any).offset as any) as any) % (3 as any))) continue;
      o = ((((((e as any)[r] as any)[1] as any).end as any).offset as any) - (((((e as any)[r] as any)[1] as any).start as any).offset as any) as any) > (1 as any) && ((((((e as any)[n] as any)[1] as any).end as any).offset as any) - (((((e as any)[n] as any)[1] as any).start as any).offset as any) as any) > (1 as any) ? 2 : 1;
      const f: any = {
          ...(((e as any)[r] as any)[1] as any).end
        },
        p: any = {
          ...(((e as any)[n] as any)[1] as any).start
        };
      (hn as any)(f, -o), (hn as any)(p, o), l = {
        type: (o as any) > (1 as any) ? "strongSequence" : "emphasisSequence",
        start: f,
        end: {
          ...(((e as any)[r] as any)[1] as any).end
        }
      }, u = {
        type: (o as any) > (1 as any) ? "strongSequence" : "emphasisSequence",
        start: {
          ...(((e as any)[n] as any)[1] as any).start
        },
        end: p
      }, a = {
        type: (o as any) > (1 as any) ? "strongText" : "emphasisText",
        start: {
          ...(((e as any)[r] as any)[1] as any).end
        },
        end: {
          ...(((e as any)[n] as any)[1] as any).start
        }
      }, i = {
        type: (o as any) > (1 as any) ? "strong" : "emphasis",
        start: {
          ...(l as any).start
        },
        end: {
          ...(u as any).end
        }
      }, (((e as any)[r] as any)[1] as any).end = {
        ...(l as any).start
      }, (((e as any)[n] as any)[1] as any).start = {
        ...(u as any).end
      }, s = [], (((((e as any)[r] as any)[1] as any).end as any).offset as any) - (((((e as any)[r] as any)[1] as any).start as any).offset as any) && (s = (Z as any)(s, [["enter", ((e as any)[r] as any)[1], t], ["exit", ((e as any)[r] as any)[1], t]])), s = (Z as any)(s, [["enter", i, t], ["enter", l, t], ["exit", l, t], ["enter", a, t]]), s = (Z as any)(s, (Ze as any)(((((t as any).parser as any).constructs as any).insideSpan as any).null, ((e as any).slice as any)((r as any) + (1 as any), n), t)), s = (Z as any)(s, [["exit", a, t], ["enter", u, t], ["exit", u, t], ["exit", i, t]]), (((((e as any)[n] as any)[1] as any).end as any).offset as any) - (((((e as any)[n] as any)[1] as any).start as any).offset as any) ? (c = 2, s = (Z as any)(s, [["enter", ((e as any)[n] as any)[1], t], ["exit", ((e as any)[n] as any)[1], t]])) : c = 0, (K as any)(e, (r as any) - (1 as any), ((n as any) - (r as any) as any) + (3 as any), s), n = (((r as any) + ((s as any).length as any) as any) - (c as any) as any) - (2 as any);
      break;
    }
  }
  for (n = -1; (++n as any) < ((e as any).length as any);) ((((e as any)[n] as any)[1] as any).type as any) === ("attentionSequence" as any) && ((((e as any)[n] as any)[1] as any).type = "data");
  return e;
}
function pl(this: any, e: any, t: any): any {
  const n: any = ((((this as any).parser as any).constructs as any).attentionMarkers as any).null,
    r: any = (this as any).previous,
    i: any = (Ie as any)(r);
  let a: any;
  return l;
  function l(this: any, o: any): any {
    return a = o, ((e as any).enter as any)("attentionSequence"), (u as any)(o);
  }
  function u(this: any, o: any): any {
    if ((o as any) === (a as any)) return ((e as any).consume as any)(o), u;
    const s: any = ((e as any).exit as any)("attentionSequence"),
      c: any = (Ie as any)(o),
      f: any = !c || (c as any) === (2 as any) && i || ((n as any).includes as any)(o),
      p: any = !i || (i as any) === (2 as any) && c || ((n as any).includes as any)(r);
    return (s as any)._open = !!((a as any) === (42 as any) ? f : f && (i || !p)), (s as any)._close = !!((a as any) === (42 as any) ? p : p && (c || !f)), (t as any)(o);
  }
}
function hn(this: any, e: any, t: any): any {
  (e as any).column += t, (e as any).offset += t, (e as any)._bufferIndex += t;
}
const ml: any = {
  name: "autolink",
  tokenize: gl
};
function gl(this: any, e: any, t: any, n: any): any {
  let r: any = 0;
  return i;
  function i(this: any, h: any): any {
    return ((e as any).enter as any)("autolink"), ((e as any).enter as any)("autolinkMarker"), ((e as any).consume as any)(h), ((e as any).exit as any)("autolinkMarker"), ((e as any).enter as any)("autolinkProtocol"), a;
  }
  function a(this: any, h: any): any {
    return (Y as any)(h) ? (((e as any).consume as any)(h), l) : (h as any) === (64 as any) ? (n as any)(h) : (s as any)(h);
  }
  function l(this: any, h: any): any {
    return (h as any) === (43 as any) || (h as any) === (45 as any) || (h as any) === (46 as any) || (Q as any)(h) ? (r = 1, (u as any)(h)) : (s as any)(h);
  }
  function u(this: any, h: any): any {
    return (h as any) === (58 as any) ? (((e as any).consume as any)(h), r = 0, o) : ((h as any) === (43 as any) || (h as any) === (45 as any) || (h as any) === (46 as any) || (Q as any)(h)) && (r++ as any) < (32 as any) ? (((e as any).consume as any)(h), u) : (r = 0, (s as any)(h));
  }
  function o(this: any, h: any): any {
    return (h as any) === (62 as any) ? (((e as any).exit as any)("autolinkProtocol"), ((e as any).enter as any)("autolinkMarker"), ((e as any).consume as any)(h), ((e as any).exit as any)("autolinkMarker"), ((e as any).exit as any)("autolink"), t) : (h as any) === (null as any) || (h as any) === (32 as any) || (h as any) === (60 as any) || (Ge as any)(h) ? (n as any)(h) : (((e as any).consume as any)(h), o);
  }
  function s(this: any, h: any): any {
    return (h as any) === (64 as any) ? (((e as any).consume as any)(h), c) : (il as any)(h) ? (((e as any).consume as any)(h), s) : (n as any)(h);
  }
  function c(this: any, h: any): any {
    return (Q as any)(h) ? (f as any)(h) : (n as any)(h);
  }
  function f(this: any, h: any): any {
    return (h as any) === (46 as any) ? (((e as any).consume as any)(h), r = 0, c) : (h as any) === (62 as any) ? ((((e as any).exit as any)("autolinkProtocol") as any).type = "autolinkEmail", ((e as any).enter as any)("autolinkMarker"), ((e as any).consume as any)(h), ((e as any).exit as any)("autolinkMarker"), ((e as any).exit as any)("autolink"), t) : (p as any)(h);
  }
  function p(this: any, h: any): any {
    if (((h as any) === (45 as any) || (Q as any)(h)) && (r++ as any) < (63 as any)) {
      const d: any = (h as any) === (45 as any) ? p : f;
      return ((e as any).consume as any)(h), d;
    }
    return (n as any)(h);
  }
}
const Be: any = {
  partial: !0,
  tokenize: dl
};
function dl(this: any, e: any, t: any, n: any): any {
  return r;
  function r(this: any, a: any): any {
    return (B as any)(a) ? ((R as any)(e, i, "linePrefix") as any)(a) : (i as any)(a);
  }
  function i(this: any, a: any): any {
    return (a as any) === (null as any) || (z as any)(a) ? (t as any)(a) : (n as any)(a);
  }
}
const rr: any = {
  continuation: {
    tokenize: kl
  },
  exit: yl,
  name: "blockQuote",
  tokenize: xl
};
function xl(this: any, e: any, t: any, n: any): any {
  const r: any = this;
  return i;
  function i(this: any, l: any): any {
    if ((l as any) === (62 as any)) {
      const u: any = (r as any).containerState;
      return (u as any).open || (((e as any).enter as any)("blockQuote", {
        _container: !0
      }), (u as any).open = !0), ((e as any).enter as any)("blockQuotePrefix"), ((e as any).enter as any)("blockQuoteMarker"), ((e as any).consume as any)(l), ((e as any).exit as any)("blockQuoteMarker"), a;
    }
    return (n as any)(l);
  }
  function a(this: any, l: any): any {
    return (B as any)(l) ? (((e as any).enter as any)("blockQuotePrefixWhitespace"), ((e as any).consume as any)(l), ((e as any).exit as any)("blockQuotePrefixWhitespace"), ((e as any).exit as any)("blockQuotePrefix"), t) : (((e as any).exit as any)("blockQuotePrefix"), (t as any)(l));
  }
}
function kl(this: any, e: any, t: any, n: any): any {
  const r: any = this;
  return i;
  function i(this: any, l: any): any {
    return (B as any)(l) ? ((R as any)(e, a, "linePrefix", ((((((r as any).parser as any).constructs as any).disable as any).null as any).includes as any)("codeIndented") ? void 0 : 4) as any)(l) : (a as any)(l);
  }
  function a(this: any, l: any): any {
    return (((e as any).attempt as any)(rr, t, n) as any)(l);
  }
}
function yl(this: any, e: any): any {
  ((e as any).exit as any)("blockQuote");
}
const ir: any = {
  name: "characterEscape",
  tokenize: bl
};
function bl(this: any, e: any, t: any, n: any): any {
  return r;
  function r(this: any, a: any): any {
    return ((e as any).enter as any)("characterEscape"), ((e as any).enter as any)("escapeMarker"), ((e as any).consume as any)(a), ((e as any).exit as any)("escapeMarker"), i;
  }
  function i(this: any, a: any): any {
    return (al as any)(a) ? (((e as any).enter as any)("characterEscapeValue"), ((e as any).consume as any)(a), ((e as any).exit as any)("characterEscapeValue"), ((e as any).exit as any)("characterEscape"), t) : (n as any)(a);
  }
}
const lr: any = {
  name: "characterReference",
  tokenize: wl
};
function wl(this: any, e: any, t: any, n: any): any {
  const r: any = this;
  let i: any = 0,
    a: any,
    l: any;
  return u;
  function u(this: any, f: any): any {
    return ((e as any).enter as any)("characterReference"), ((e as any).enter as any)("characterReferenceMarker"), ((e as any).consume as any)(f), ((e as any).exit as any)("characterReferenceMarker"), o;
  }
  function o(this: any, f: any): any {
    return (f as any) === (35 as any) ? (((e as any).enter as any)("characterReferenceMarkerNumeric"), ((e as any).consume as any)(f), ((e as any).exit as any)("characterReferenceMarkerNumeric"), s) : (((e as any).enter as any)("characterReferenceValue"), a = 31, l = Q, (c as any)(f));
  }
  function s(this: any, f: any): any {
    return (f as any) === (88 as any) || (f as any) === (120 as any) ? (((e as any).enter as any)("characterReferenceMarkerHexadecimal"), ((e as any).consume as any)(f), ((e as any).exit as any)("characterReferenceMarkerHexadecimal"), ((e as any).enter as any)("characterReferenceValue"), a = 6, l = ll, c) : (((e as any).enter as any)("characterReferenceValue"), a = 7, l = bt, (c as any)(f));
  }
  function c(this: any, f: any): any {
    if ((f as any) === (59 as any) && i) {
      const p: any = ((e as any).exit as any)("characterReferenceValue");
      return (l as any) === (Q as any) && !(vt as any)(((r as any).sliceSerialize as any)(p)) ? (n as any)(f) : (((e as any).enter as any)("characterReferenceMarker"), ((e as any).consume as any)(f), ((e as any).exit as any)("characterReferenceMarker"), ((e as any).exit as any)("characterReference"), t);
    }
    return (l as any)(f) && (i++ as any) < (a as any) ? (((e as any).consume as any)(f), c) : (n as any)(f);
  }
}
const pn: any = {
    partial: !0,
    tokenize: Cl
  },
  mn: any = {
    concrete: !0,
    name: "codeFenced",
    tokenize: Sl
  };
function Sl(this: any, e: any, t: any, n: any): any {
  const r: any = this,
    i: any = {
      partial: !0,
      tokenize: v
    };
  let a: any = 0,
    l: any = 0,
    u: any;
  return o;
  function o(this: any, S: any): any {
    return (s as any)(S);
  }
  function s(this: any, S: any): any {
    const M: any = ((r as any).events as any)[(((r as any).events as any).length as any) - (1 as any)];
    return a = M && (((M as any)[1] as any).type as any) === ("linePrefix" as any) ? ((((M as any)[2] as any).sliceSerialize as any)((M as any)[1], !0) as any).length : 0, u = S, ((e as any).enter as any)("codeFenced"), ((e as any).enter as any)("codeFencedFence"), ((e as any).enter as any)("codeFencedFenceSequence"), (c as any)(S);
  }
  function c(this: any, S: any): any {
    return (S as any) === (u as any) ? (l++, ((e as any).consume as any)(S), c) : (l as any) < (3 as any) ? (n as any)(S) : (((e as any).exit as any)("codeFencedFenceSequence"), (B as any)(S) ? ((R as any)(e, f, "whitespace") as any)(S) : (f as any)(S));
  }
  function f(this: any, S: any): any {
    return (S as any) === (null as any) || (z as any)(S) ? (((e as any).exit as any)("codeFencedFence"), (r as any).interrupt ? (t as any)(S) : (((e as any).check as any)(pn, x, D) as any)(S)) : (((e as any).enter as any)("codeFencedFenceInfo"), ((e as any).enter as any)("chunkString", {
      contentType: "string"
    }), (p as any)(S));
  }
  function p(this: any, S: any): any {
    return (S as any) === (null as any) || (z as any)(S) ? (((e as any).exit as any)("chunkString"), ((e as any).exit as any)("codeFencedFenceInfo"), (f as any)(S)) : (B as any)(S) ? (((e as any).exit as any)("chunkString"), ((e as any).exit as any)("codeFencedFenceInfo"), ((R as any)(e, h, "whitespace") as any)(S)) : (S as any) === (96 as any) && (S as any) === (u as any) ? (n as any)(S) : (((e as any).consume as any)(S), p);
  }
  function h(this: any, S: any): any {
    return (S as any) === (null as any) || (z as any)(S) ? (f as any)(S) : (((e as any).enter as any)("codeFencedFenceMeta"), ((e as any).enter as any)("chunkString", {
      contentType: "string"
    }), (d as any)(S));
  }
  function d(this: any, S: any): any {
    return (S as any) === (null as any) || (z as any)(S) ? (((e as any).exit as any)("chunkString"), ((e as any).exit as any)("codeFencedFenceMeta"), (f as any)(S)) : (S as any) === (96 as any) && (S as any) === (u as any) ? (n as any)(S) : (((e as any).consume as any)(S), d);
  }
  function x(this: any, S: any): any {
    return (((e as any).attempt as any)(i, D, C) as any)(S);
  }
  function C(this: any, S: any): any {
    return ((e as any).enter as any)("lineEnding"), ((e as any).consume as any)(S), ((e as any).exit as any)("lineEnding"), b;
  }
  function b(this: any, S: any): any {
    return (a as any) > (0 as any) && (B as any)(S) ? ((R as any)(e, I, "linePrefix", (a as any) + (1 as any)) as any)(S) : (I as any)(S);
  }
  function I(this: any, S: any): any {
    return (S as any) === (null as any) || (z as any)(S) ? (((e as any).check as any)(pn, x, D) as any)(S) : (((e as any).enter as any)("codeFlowValue"), (E as any)(S));
  }
  function E(this: any, S: any): any {
    return (S as any) === (null as any) || (z as any)(S) ? (((e as any).exit as any)("codeFlowValue"), (I as any)(S)) : (((e as any).consume as any)(S), E);
  }
  function D(this: any, S: any): any {
    return ((e as any).exit as any)("codeFenced"), (t as any)(S);
  }
  function v(this: any, S: any, M: any, $: any): any {
    let q: any = 0;
    return y;
    function y(this: any, P: any): any {
      return ((S as any).enter as any)("lineEnding"), ((S as any).consume as any)(P), ((S as any).exit as any)("lineEnding"), k;
    }
    function k(this: any, P: any): any {
      return ((S as any).enter as any)("codeFencedFence"), (B as any)(P) ? ((R as any)(S, _, "linePrefix", ((((((r as any).parser as any).constructs as any).disable as any).null as any).includes as any)("codeIndented") ? void 0 : 4) as any)(P) : (_ as any)(P);
    }
    function _(this: any, P: any): any {
      return (P as any) === (u as any) ? (((S as any).enter as any)("codeFencedFenceSequence"), (F as any)(P)) : ($ as any)(P);
    }
    function F(this: any, P: any): any {
      return (P as any) === (u as any) ? (q++, ((S as any).consume as any)(P), F) : (q as any) >= (l as any) ? (((S as any).exit as any)("codeFencedFenceSequence"), (B as any)(P) ? ((R as any)(S, A, "whitespace") as any)(P) : (A as any)(P)) : ($ as any)(P);
    }
    function A(this: any, P: any): any {
      return (P as any) === (null as any) || (z as any)(P) ? (((S as any).exit as any)("codeFencedFence"), (M as any)(P)) : ($ as any)(P);
    }
  }
}
function Cl(this: any, e: any, t: any, n: any): any {
  const r: any = this;
  return i;
  function i(this: any, l: any): any {
    return (l as any) === (null as any) ? (n as any)(l) : (((e as any).enter as any)("lineEnding"), ((e as any).consume as any)(l), ((e as any).exit as any)("lineEnding"), a);
  }
  function a(this: any, l: any): any {
    return (((r as any).parser as any).lazy as any)[(((r as any).now as any)() as any).line] ? (n as any)(l) : (t as any)(l);
  }
}
const lt: any = {
    name: "codeIndented",
    tokenize: Il
  },
  El: any = {
    partial: !0,
    tokenize: Tl
  };
function Il(this: any, e: any, t: any, n: any): any {
  const r: any = this;
  return i;
  function i(this: any, s: any): any {
    return ((e as any).enter as any)("codeIndented"), ((R as any)(e, a, "linePrefix", 5) as any)(s);
  }
  function a(this: any, s: any): any {
    const c: any = ((r as any).events as any)[(((r as any).events as any).length as any) - (1 as any)];
    return c && (((c as any)[1] as any).type as any) === ("linePrefix" as any) && (((((c as any)[2] as any).sliceSerialize as any)((c as any)[1], !0) as any).length as any) >= (4 as any) ? (l as any)(s) : (n as any)(s);
  }
  function l(this: any, s: any): any {
    return (s as any) === (null as any) ? (o as any)(s) : (z as any)(s) ? (((e as any).attempt as any)(El, l, o) as any)(s) : (((e as any).enter as any)("codeFlowValue"), (u as any)(s));
  }
  function u(this: any, s: any): any {
    return (s as any) === (null as any) || (z as any)(s) ? (((e as any).exit as any)("codeFlowValue"), (l as any)(s)) : (((e as any).consume as any)(s), u);
  }
  function o(this: any, s: any): any {
    return ((e as any).exit as any)("codeIndented"), (t as any)(s);
  }
}
function Tl(this: any, e: any, t: any, n: any): any {
  const r: any = this;
  return i;
  function i(this: any, l: any): any {
    return (((r as any).parser as any).lazy as any)[(((r as any).now as any)() as any).line] ? (n as any)(l) : (z as any)(l) ? (((e as any).enter as any)("lineEnding"), ((e as any).consume as any)(l), ((e as any).exit as any)("lineEnding"), i) : ((R as any)(e, a, "linePrefix", 5) as any)(l);
  }
  function a(this: any, l: any): any {
    const u: any = ((r as any).events as any)[(((r as any).events as any).length as any) - (1 as any)];
    return u && (((u as any)[1] as any).type as any) === ("linePrefix" as any) && (((((u as any)[2] as any).sliceSerialize as any)((u as any)[1], !0) as any).length as any) >= (4 as any) ? (t as any)(l) : (z as any)(l) ? (i as any)(l) : (n as any)(l);
  }
}
const Al: any = {
  name: "codeText",
  previous: zl,
  resolve: Fl,
  tokenize: _l
};
function Fl(this: any, e: any): any {
  let t: any = ((e as any).length as any) - (4 as any),
    n: any = 3,
    r: any,
    i: any;
  if ((((((e as any)[n] as any)[1] as any).type as any) === ("lineEnding" as any) || ((((e as any)[n] as any)[1] as any).type as any) === ("space" as any)) && (((((e as any)[t] as any)[1] as any).type as any) === ("lineEnding" as any) || ((((e as any)[t] as any)[1] as any).type as any) === ("space" as any))) {
    for (r = n; (++r as any) < (t as any);) if (((((e as any)[r] as any)[1] as any).type as any) === ("codeTextData" as any)) {
      (((e as any)[n] as any)[1] as any).type = "codeTextPadding", (((e as any)[t] as any)[1] as any).type = "codeTextPadding", n += 2, t -= 2;
      break;
    }
  }
  for (r = (n as any) - (1 as any), t++; (++r as any) <= (t as any);) (i as any) === (void 0 as any) ? (r as any) !== (t as any) && ((((e as any)[r] as any)[1] as any).type as any) !== ("lineEnding" as any) && (i = r) : ((r as any) === (t as any) || ((((e as any)[r] as any)[1] as any).type as any) === ("lineEnding" as any)) && ((((e as any)[i] as any)[1] as any).type = "codeTextData", (r as any) !== ((i as any) + (2 as any) as any) && ((((e as any)[i] as any)[1] as any).end = (((e as any)[(r as any) - (1 as any)] as any)[1] as any).end, ((e as any).splice as any)((i as any) + (2 as any), ((r as any) - (i as any) as any) - (2 as any)), t -= ((r as any) - (i as any) as any) - (2 as any), r = (i as any) + (2 as any)), i = void 0);
  return e;
}
function zl(this: any, e: any): any {
  return (e as any) !== (96 as any) || (((((this as any).events as any)[(((this as any).events as any).length as any) - (1 as any)] as any)[1] as any).type as any) === ("characterEscape" as any);
}
function _l(this: any, e: any, t: any, n: any): any {
  let r: any = 0,
    i: any,
    a: any;
  return l;
  function l(this: any, f: any): any {
    return ((e as any).enter as any)("codeText"), ((e as any).enter as any)("codeTextSequence"), (u as any)(f);
  }
  function u(this: any, f: any): any {
    return (f as any) === (96 as any) ? (((e as any).consume as any)(f), r++, u) : (((e as any).exit as any)("codeTextSequence"), (o as any)(f));
  }
  function o(this: any, f: any): any {
    return (f as any) === (null as any) ? (n as any)(f) : (f as any) === (32 as any) ? (((e as any).enter as any)("space"), ((e as any).consume as any)(f), ((e as any).exit as any)("space"), o) : (f as any) === (96 as any) ? (a = ((e as any).enter as any)("codeTextSequence"), i = 0, (c as any)(f)) : (z as any)(f) ? (((e as any).enter as any)("lineEnding"), ((e as any).consume as any)(f), ((e as any).exit as any)("lineEnding"), o) : (((e as any).enter as any)("codeTextData"), (s as any)(f));
  }
  function s(this: any, f: any): any {
    return (f as any) === (null as any) || (f as any) === (32 as any) || (f as any) === (96 as any) || (z as any)(f) ? (((e as any).exit as any)("codeTextData"), (o as any)(f)) : (((e as any).consume as any)(f), s);
  }
  function c(this: any, f: any): any {
    return (f as any) === (96 as any) ? (((e as any).consume as any)(f), i++, c) : (i as any) === (r as any) ? (((e as any).exit as any)("codeTextSequence"), ((e as any).exit as any)("codeText"), (t as any)(f)) : ((a as any).type = "codeTextData", (s as any)(f));
  }
}
class Pl {
  declare right: any;
  declare left: any;
  [key: string]: any;
  constructor(t: any) {
    (this as any).left = t ? [...t] : [], (this as any).right = [];
  }
  get(t: any): any {
    if ((t as any) < (0 as any) || (t as any) >= ((((this as any).left as any).length as any) + (((this as any).right as any).length as any) as any)) throw new (RangeError as any)((((("Cannot access index `" as any) + (t as any) as any) + ("` in a splice buffer of size `" as any) as any) + ((((this as any).left as any).length as any) + (((this as any).right as any).length as any) as any) as any) + ("`" as any));
    return (t as any) < (((this as any).left as any).length as any) ? ((this as any).left as any)[t] : ((this as any).right as any)[(((((this as any).right as any).length as any) - (t as any) as any) + (((this as any).left as any).length as any) as any) - (1 as any)];
  }
  get length(): any {
    return (((this as any).left as any).length as any) + (((this as any).right as any).length as any);
  }
  shift(): any {
    return ((this as any).setCursor as any)(0), (((this as any).right as any).pop as any)();
  }
  slice(t: any, n: any): any {
    const r: any = n ?? (Number as any).POSITIVE_INFINITY;
    return (r as any) < (((this as any).left as any).length as any) ? (((this as any).left as any).slice as any)(t, r) : (t as any) > (((this as any).left as any).length as any) ? (((((this as any).right as any).slice as any)(((((this as any).right as any).length as any) - (r as any) as any) + (((this as any).left as any).length as any), ((((this as any).right as any).length as any) - (t as any) as any) + (((this as any).left as any).length as any)) as any).reverse as any)() : (((((this as any).left as any).slice as any)(t) as any).concat as any)((((((this as any).right as any).slice as any)(((((this as any).right as any).length as any) - (r as any) as any) + (((this as any).left as any).length as any)) as any).reverse as any)());
  }
  splice(t: any, n: any, r: any): any {
    const i: any = n || 0;
    ((this as any).setCursor as any)(((Math as any).trunc as any)(t));
    const a: any = (((this as any).right as any).splice as any)((((this as any).right as any).length as any) - (i as any), (Number as any).POSITIVE_INFINITY);
    return r && (De as any)((this as any).left, r), ((a as any).reverse as any)();
  }
  pop(): any {
    return ((this as any).setCursor as any)((Number as any).POSITIVE_INFINITY), (((this as any).left as any).pop as any)();
  }
  push(t: any): any {
    ((this as any).setCursor as any)((Number as any).POSITIVE_INFINITY), (((this as any).left as any).push as any)(t);
  }
  pushMany(t: any): any {
    ((this as any).setCursor as any)((Number as any).POSITIVE_INFINITY), (De as any)((this as any).left, t);
  }
  unshift(t: any): any {
    ((this as any).setCursor as any)(0), (((this as any).right as any).push as any)(t);
  }
  unshiftMany(t: any): any {
    ((this as any).setCursor as any)(0), (De as any)((this as any).right, ((t as any).reverse as any)());
  }
  setCursor(t: any): any {
    if (!((t as any) === (((this as any).left as any).length as any) || (t as any) > (((this as any).left as any).length as any) && (((this as any).right as any).length as any) === (0 as any) || (t as any) < (0 as any) && (((this as any).left as any).length as any) === (0 as any))) if ((t as any) < (((this as any).left as any).length as any)) {
      const n: any = (((this as any).left as any).splice as any)(t, (Number as any).POSITIVE_INFINITY);
      (De as any)((this as any).right, ((n as any).reverse as any)());
    } else {
      const n: any = (((this as any).right as any).splice as any)(((((this as any).left as any).length as any) + (((this as any).right as any).length as any) as any) - (t as any), (Number as any).POSITIVE_INFINITY);
      (De as any)((this as any).left, ((n as any).reverse as any)());
    }
  }
}
function De(this: any, e: any, t: any): any {
  let n: any = 0;
  if (((t as any).length as any) < (1e4 as any)) ((e as any).push as any)(...t);else for (; (n as any) < ((t as any).length as any);) ((e as any).push as any)(...((t as any).slice as any)(n, (n as any) + (1e4 as any))), n += 1e4;
}
function ar(this: any, e: any): any {
  const t: any = {};
  let n: any = -1,
    r: any,
    i: any,
    a: any,
    l: any,
    u: any,
    o: any,
    s: any;
  const c: any = new (Pl as any)(e);
  for (; (++n as any) < ((c as any).length as any);) {
    for (; n in t;) n = (t as any)[n];
    if (r = ((c as any).get as any)(n), n && (((r as any)[1] as any).type as any) === ("chunkFlow" as any) && (((((c as any).get as any)((n as any) - (1 as any)) as any)[1] as any).type as any) === ("listItemPrefix" as any) && (o = (((r as any)[1] as any)._tokenizer as any).events, a = 0, (a as any) < ((o as any).length as any) && ((((o as any)[a] as any)[1] as any).type as any) === ("lineEndingBlank" as any) && (a += 2), (a as any) < ((o as any).length as any) && ((((o as any)[a] as any)[1] as any).type as any) === ("content" as any))) for (; (++a as any) < ((o as any).length as any) && ((((o as any)[a] as any)[1] as any).type as any) !== ("content" as any);) ((((o as any)[a] as any)[1] as any).type as any) === ("chunkText" as any) && ((((o as any)[a] as any)[1] as any)._isInFirstContentOfListItem = !0, a++);
    if (((r as any)[0] as any) === ("enter" as any)) ((r as any)[1] as any).contentType && (((Object as any).assign as any)(t, (Dl as any)(c, n)), n = (t as any)[n], s = !0);else if (((r as any)[1] as any)._container) {
      for (a = n, i = void 0; a--;) if (l = ((c as any).get as any)(a), (((l as any)[1] as any).type as any) === ("lineEnding" as any) || (((l as any)[1] as any).type as any) === ("lineEndingBlank" as any)) ((l as any)[0] as any) === ("enter" as any) && (i && (((((c as any).get as any)(i) as any)[1] as any).type = "lineEndingBlank"), ((l as any)[1] as any).type = "lineEnding", i = a);else if (!((((l as any)[1] as any).type as any) === ("linePrefix" as any) || (((l as any)[1] as any).type as any) === ("listItemIndent" as any))) break;
      i && (((r as any)[1] as any).end = {
        ...((((c as any).get as any)(i) as any)[1] as any).start
      }, u = ((c as any).slice as any)(i, n), ((u as any).unshift as any)(r), ((c as any).splice as any)(i, ((n as any) - (i as any) as any) + (1 as any), u));
    }
  }
  return (K as any)(e, 0, (Number as any).POSITIVE_INFINITY, ((c as any).slice as any)(0)), !s;
}
function Dl(this: any, e: any, t: any): any {
  const n: any = (((e as any).get as any)(t) as any)[1],
    r: any = (((e as any).get as any)(t) as any)[2];
  let i: any = (t as any) - (1 as any);
  const a: any = [];
  let l: any = (n as any)._tokenizer;
  l || (l = (((r as any).parser as any)[(n as any).contentType] as any)((n as any).start), (n as any)._contentTypeTextTrailing && ((l as any)._contentTypeTextTrailing = !0));
  const u: any = (l as any).events,
    o: any = [],
    s: any = {};
  let c: any,
    f: any,
    p: any = -1,
    h: any = n,
    d: any = 0,
    x: any = 0;
  const C: any = [x];
  for (; h;) {
    for (; ((((e as any).get as any)(++i) as any)[1] as any) !== (h as any););
    ((a as any).push as any)(i), (h as any)._tokenizer || (c = ((r as any).sliceStream as any)(h), (h as any).next || ((c as any).push as any)(null), f && ((l as any).defineSkip as any)((h as any).start), (h as any)._isInFirstContentOfListItem && ((l as any)._gfmTasklistFirstContentOfListItem = !0), ((l as any).write as any)(c), (h as any)._isInFirstContentOfListItem && ((l as any)._gfmTasklistFirstContentOfListItem = void 0)), f = h, h = (h as any).next;
  }
  for (h = n; (++p as any) < ((u as any).length as any);) (((u as any)[p] as any)[0] as any) === ("exit" as any) && (((u as any)[(p as any) - (1 as any)] as any)[0] as any) === ("enter" as any) && ((((u as any)[p] as any)[1] as any).type as any) === ((((u as any)[(p as any) - (1 as any)] as any)[1] as any).type as any) && (((((u as any)[p] as any)[1] as any).start as any).line as any) !== (((((u as any)[p] as any)[1] as any).end as any).line as any) && (x = (p as any) + (1 as any), ((C as any).push as any)(x), (h as any)._tokenizer = void 0, (h as any).previous = void 0, h = (h as any).next);
  for ((l as any).events = [], h ? ((h as any)._tokenizer = void 0, (h as any).previous = void 0) : ((C as any).pop as any)(), p = (C as any).length; p--;) {
    const b: any = ((u as any).slice as any)((C as any)[p], (C as any)[(p as any) + (1 as any)]),
      I: any = ((a as any).pop as any)();
    ((o as any).push as any)([I, ((I as any) + ((b as any).length as any) as any) - (1 as any)]), ((e as any).splice as any)(I, 2, b);
  }
  for (((o as any).reverse as any)(), p = -1; (++p as any) < ((o as any).length as any);) (s as any)[(d as any) + (((o as any)[p] as any)[0] as any)] = (d as any) + (((o as any)[p] as any)[1] as any), d += ((((o as any)[p] as any)[1] as any) - (((o as any)[p] as any)[0] as any) as any) - (1 as any);
  return s;
}
const Ll: any = {
    resolve: Nl,
    tokenize: Rl
  },
  Ml: any = {
    partial: !0,
    tokenize: vl
  };
function Nl(this: any, e: any): any {
  return (ar as any)(e), e;
}
function Rl(this: any, e: any, t: any): any {
  let n: any;
  return r;
  function r(this: any, u: any): any {
    return ((e as any).enter as any)("content"), n = ((e as any).enter as any)("chunkContent", {
      contentType: "content"
    }), (i as any)(u);
  }
  function i(this: any, u: any): any {
    return (u as any) === (null as any) ? (a as any)(u) : (z as any)(u) ? (((e as any).check as any)(Ml, l, a) as any)(u) : (((e as any).consume as any)(u), i);
  }
  function a(this: any, u: any): any {
    return ((e as any).exit as any)("chunkContent"), ((e as any).exit as any)("content"), (t as any)(u);
  }
  function l(this: any, u: any): any {
    return ((e as any).consume as any)(u), ((e as any).exit as any)("chunkContent"), (n as any).next = ((e as any).enter as any)("chunkContent", {
      contentType: "content",
      previous: n
    }), n = (n as any).next, i;
  }
}
function vl(this: any, e: any, t: any, n: any): any {
  const r: any = this;
  return i;
  function i(this: any, l: any): any {
    return ((e as any).exit as any)("chunkContent"), ((e as any).enter as any)("lineEnding"), ((e as any).consume as any)(l), ((e as any).exit as any)("lineEnding"), (R as any)(e, a, "linePrefix");
  }
  function a(this: any, l: any): any {
    if ((l as any) === (null as any) || (z as any)(l)) return (n as any)(l);
    const u: any = ((r as any).events as any)[(((r as any).events as any).length as any) - (1 as any)];
    return !((((((r as any).parser as any).constructs as any).disable as any).null as any).includes as any)("codeIndented") && u && (((u as any)[1] as any).type as any) === ("linePrefix" as any) && (((((u as any)[2] as any).sliceSerialize as any)((u as any)[1], !0) as any).length as any) >= (4 as any) ? (t as any)(l) : (((e as any).interrupt as any)((((r as any).parser as any).constructs as any).flow, n, t) as any)(l);
  }
}
function ur(this: any, e: any, t: any, n: any, r: any, i: any, a: any, l: any, u: any, o: any): any {
  const s: any = o || (Number as any).POSITIVE_INFINITY;
  let c: any = 0;
  return f;
  function f(this: any, b: any): any {
    return (b as any) === (60 as any) ? (((e as any).enter as any)(r), ((e as any).enter as any)(i), ((e as any).enter as any)(a), ((e as any).consume as any)(b), ((e as any).exit as any)(a), p) : (b as any) === (null as any) || (b as any) === (32 as any) || (b as any) === (41 as any) || (Ge as any)(b) ? (n as any)(b) : (((e as any).enter as any)(r), ((e as any).enter as any)(l), ((e as any).enter as any)(u), ((e as any).enter as any)("chunkString", {
      contentType: "string"
    }), (x as any)(b));
  }
  function p(this: any, b: any): any {
    return (b as any) === (62 as any) ? (((e as any).enter as any)(a), ((e as any).consume as any)(b), ((e as any).exit as any)(a), ((e as any).exit as any)(i), ((e as any).exit as any)(r), t) : (((e as any).enter as any)(u), ((e as any).enter as any)("chunkString", {
      contentType: "string"
    }), (h as any)(b));
  }
  function h(this: any, b: any): any {
    return (b as any) === (62 as any) ? (((e as any).exit as any)("chunkString"), ((e as any).exit as any)(u), (p as any)(b)) : (b as any) === (null as any) || (b as any) === (60 as any) || (z as any)(b) ? (n as any)(b) : (((e as any).consume as any)(b), (b as any) === (92 as any) ? d : h);
  }
  function d(this: any, b: any): any {
    return (b as any) === (60 as any) || (b as any) === (62 as any) || (b as any) === (92 as any) ? (((e as any).consume as any)(b), h) : (h as any)(b);
  }
  function x(this: any, b: any): any {
    return !c && ((b as any) === (null as any) || (b as any) === (41 as any) || (U as any)(b)) ? (((e as any).exit as any)("chunkString"), ((e as any).exit as any)(u), ((e as any).exit as any)(l), ((e as any).exit as any)(r), (t as any)(b)) : (c as any) < (s as any) && (b as any) === (40 as any) ? (((e as any).consume as any)(b), c++, x) : (b as any) === (41 as any) ? (((e as any).consume as any)(b), c--, x) : (b as any) === (null as any) || (b as any) === (32 as any) || (b as any) === (40 as any) || (Ge as any)(b) ? (n as any)(b) : (((e as any).consume as any)(b), (b as any) === (92 as any) ? C : x);
  }
  function C(this: any, b: any): any {
    return (b as any) === (40 as any) || (b as any) === (41 as any) || (b as any) === (92 as any) ? (((e as any).consume as any)(b), x) : (x as any)(b);
  }
}
function or(this: any, e: any, t: any, n: any, r: any, i: any, a: any): any {
  const l: any = this;
  let u: any = 0,
    o: any;
  return s;
  function s(this: any, h: any): any {
    return ((e as any).enter as any)(r), ((e as any).enter as any)(i), ((e as any).consume as any)(h), ((e as any).exit as any)(i), ((e as any).enter as any)(a), c;
  }
  function c(this: any, h: any): any {
    return (u as any) > (999 as any) || (h as any) === (null as any) || (h as any) === (91 as any) || (h as any) === (93 as any) && !o || (h as any) === (94 as any) && !u && "_hiddenFootnoteSupport" in ((l as any).parser as any).constructs ? (n as any)(h) : (h as any) === (93 as any) ? (((e as any).exit as any)(a), ((e as any).enter as any)(i), ((e as any).consume as any)(h), ((e as any).exit as any)(i), ((e as any).exit as any)(r), t) : (z as any)(h) ? (((e as any).enter as any)("lineEnding"), ((e as any).consume as any)(h), ((e as any).exit as any)("lineEnding"), c) : (((e as any).enter as any)("chunkString", {
      contentType: "string"
    }), (f as any)(h));
  }
  function f(this: any, h: any): any {
    return (h as any) === (null as any) || (h as any) === (91 as any) || (h as any) === (93 as any) || (z as any)(h) || (u++ as any) > (999 as any) ? (((e as any).exit as any)("chunkString"), (c as any)(h)) : (((e as any).consume as any)(h), o || (o = !(B as any)(h)), (h as any) === (92 as any) ? p : f);
  }
  function p(this: any, h: any): any {
    return (h as any) === (91 as any) || (h as any) === (92 as any) || (h as any) === (93 as any) ? (((e as any).consume as any)(h), u++, f) : (f as any)(h);
  }
}
function sr(this: any, e: any, t: any, n: any, r: any, i: any, a: any): any {
  let l: any;
  return u;
  function u(this: any, p: any): any {
    return (p as any) === (34 as any) || (p as any) === (39 as any) || (p as any) === (40 as any) ? (((e as any).enter as any)(r), ((e as any).enter as any)(i), ((e as any).consume as any)(p), ((e as any).exit as any)(i), l = (p as any) === (40 as any) ? 41 : p, o) : (n as any)(p);
  }
  function o(this: any, p: any): any {
    return (p as any) === (l as any) ? (((e as any).enter as any)(i), ((e as any).consume as any)(p), ((e as any).exit as any)(i), ((e as any).exit as any)(r), t) : (((e as any).enter as any)(a), (s as any)(p));
  }
  function s(this: any, p: any): any {
    return (p as any) === (l as any) ? (((e as any).exit as any)(a), (o as any)(l)) : (p as any) === (null as any) ? (n as any)(p) : (z as any)(p) ? (((e as any).enter as any)("lineEnding"), ((e as any).consume as any)(p), ((e as any).exit as any)("lineEnding"), (R as any)(e, s, "linePrefix")) : (((e as any).enter as any)("chunkString", {
      contentType: "string"
    }), (c as any)(p));
  }
  function c(this: any, p: any): any {
    return (p as any) === (l as any) || (p as any) === (null as any) || (z as any)(p) ? (((e as any).exit as any)("chunkString"), (s as any)(p)) : (((e as any).consume as any)(p), (p as any) === (92 as any) ? f : c);
  }
  function f(this: any, p: any): any {
    return (p as any) === (l as any) || (p as any) === (92 as any) ? (((e as any).consume as any)(p), c) : (c as any)(p);
  }
}
function Ne(this: any, e: any, t: any): any {
  let n: any;
  return r;
  function r(this: any, i: any): any {
    return (z as any)(i) ? (((e as any).enter as any)("lineEnding"), ((e as any).consume as any)(i), ((e as any).exit as any)("lineEnding"), n = !0, r) : (B as any)(i) ? ((R as any)(e, r, n ? "linePrefix" : "lineSuffix") as any)(i) : (t as any)(i);
  }
}
const Ol: any = {
    name: "definition",
    tokenize: jl
  },
  Bl: any = {
    partial: !0,
    tokenize: ql
  };
function jl(this: any, e: any, t: any, n: any): any {
  const r: any = this;
  let i: any;
  return a;
  function a(this: any, h: any): any {
    return ((e as any).enter as any)("definition"), (l as any)(h);
  }
  function l(this: any, h: any): any {
    return (((or as any).call as any)(r, e, u, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString") as any)(h);
  }
  function u(this: any, h: any): any {
    return i = (re as any)(((((r as any).sliceSerialize as any)((((r as any).events as any)[(((r as any).events as any).length as any) - (1 as any)] as any)[1]) as any).slice as any)(1, -1)), (h as any) === (58 as any) ? (((e as any).enter as any)("definitionMarker"), ((e as any).consume as any)(h), ((e as any).exit as any)("definitionMarker"), o) : (n as any)(h);
  }
  function o(this: any, h: any): any {
    return (U as any)(h) ? ((Ne as any)(e, s) as any)(h) : (s as any)(h);
  }
  function s(this: any, h: any): any {
    return ((ur as any)(e, c, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString") as any)(h);
  }
  function c(this: any, h: any): any {
    return (((e as any).attempt as any)(Bl, f, f) as any)(h);
  }
  function f(this: any, h: any): any {
    return (B as any)(h) ? ((R as any)(e, p, "whitespace") as any)(h) : (p as any)(h);
  }
  function p(this: any, h: any): any {
    return (h as any) === (null as any) || (z as any)(h) ? (((e as any).exit as any)("definition"), ((((r as any).parser as any).defined as any).push as any)(i), (t as any)(h)) : (n as any)(h);
  }
}
function ql(this: any, e: any, t: any, n: any): any {
  return r;
  function r(this: any, u: any): any {
    return (U as any)(u) ? ((Ne as any)(e, i) as any)(u) : (n as any)(u);
  }
  function i(this: any, u: any): any {
    return ((sr as any)(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString") as any)(u);
  }
  function a(this: any, u: any): any {
    return (B as any)(u) ? ((R as any)(e, l, "whitespace") as any)(u) : (l as any)(u);
  }
  function l(this: any, u: any): any {
    return (u as any) === (null as any) || (z as any)(u) ? (t as any)(u) : (n as any)(u);
  }
}
const $l: any = {
  name: "hardBreakEscape",
  tokenize: Hl
};
function Hl(this: any, e: any, t: any, n: any): any {
  return r;
  function r(this: any, a: any): any {
    return ((e as any).enter as any)("hardBreakEscape"), ((e as any).consume as any)(a), i;
  }
  function i(this: any, a: any): any {
    return (z as any)(a) ? (((e as any).exit as any)("hardBreakEscape"), (t as any)(a)) : (n as any)(a);
  }
}
const Vl: any = {
  name: "headingAtx",
  resolve: Ul,
  tokenize: Wl
};
function Ul(this: any, e: any, t: any): any {
  let n: any = ((e as any).length as any) - (2 as any),
    r: any = 3,
    i: any,
    a: any;
  return ((((e as any)[r] as any)[1] as any).type as any) === ("whitespace" as any) && (r += 2), ((n as any) - (2 as any) as any) > (r as any) && ((((e as any)[n] as any)[1] as any).type as any) === ("whitespace" as any) && (n -= 2), ((((e as any)[n] as any)[1] as any).type as any) === ("atxHeadingSequence" as any) && ((r as any) === ((n as any) - (1 as any) as any) || ((n as any) - (4 as any) as any) > (r as any) && ((((e as any)[(n as any) - (2 as any)] as any)[1] as any).type as any) === ("whitespace" as any)) && (n -= ((r as any) + (1 as any) as any) === (n as any) ? 2 : 4), (n as any) > (r as any) && (i = {
    type: "atxHeadingText",
    start: (((e as any)[r] as any)[1] as any).start,
    end: (((e as any)[n] as any)[1] as any).end
  }, a = {
    type: "chunkText",
    start: (((e as any)[r] as any)[1] as any).start,
    end: (((e as any)[n] as any)[1] as any).end,
    contentType: "text"
  }, (K as any)(e, r, ((n as any) - (r as any) as any) + (1 as any), [["enter", i, t], ["enter", a, t], ["exit", a, t], ["exit", i, t]])), e;
}
function Wl(this: any, e: any, t: any, n: any): any {
  let r: any = 0;
  return i;
  function i(this: any, c: any): any {
    return ((e as any).enter as any)("atxHeading"), (a as any)(c);
  }
  function a(this: any, c: any): any {
    return ((e as any).enter as any)("atxHeadingSequence"), (l as any)(c);
  }
  function l(this: any, c: any): any {
    return (c as any) === (35 as any) && (r++ as any) < (6 as any) ? (((e as any).consume as any)(c), l) : (c as any) === (null as any) || (U as any)(c) ? (((e as any).exit as any)("atxHeadingSequence"), (u as any)(c)) : (n as any)(c);
  }
  function u(this: any, c: any): any {
    return (c as any) === (35 as any) ? (((e as any).enter as any)("atxHeadingSequence"), (o as any)(c)) : (c as any) === (null as any) || (z as any)(c) ? (((e as any).exit as any)("atxHeading"), (t as any)(c)) : (B as any)(c) ? ((R as any)(e, u, "whitespace") as any)(c) : (((e as any).enter as any)("atxHeadingText"), (s as any)(c));
  }
  function o(this: any, c: any): any {
    return (c as any) === (35 as any) ? (((e as any).consume as any)(c), o) : (((e as any).exit as any)("atxHeadingSequence"), (u as any)(c));
  }
  function s(this: any, c: any): any {
    return (c as any) === (null as any) || (c as any) === (35 as any) || (U as any)(c) ? (((e as any).exit as any)("atxHeadingText"), (u as any)(c)) : (((e as any).consume as any)(c), s);
  }
}
const Ql: any = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"],
  gn: any = ["pre", "script", "style", "textarea"],
  Gl: any = {
    concrete: !0,
    name: "htmlFlow",
    resolveTo: Jl,
    tokenize: Kl
  },
  Yl: any = {
    partial: !0,
    tokenize: ea
  },
  Xl: any = {
    partial: !0,
    tokenize: Zl
  };
function Jl(this: any, e: any): any {
  let t: any = (e as any).length;
  for (; t-- && !((((e as any)[t] as any)[0] as any) === ("enter" as any) && ((((e as any)[t] as any)[1] as any).type as any) === ("htmlFlow" as any)););
  return (t as any) > (1 as any) && ((((e as any)[(t as any) - (2 as any)] as any)[1] as any).type as any) === ("linePrefix" as any) && ((((e as any)[t] as any)[1] as any).start = (((e as any)[(t as any) - (2 as any)] as any)[1] as any).start, (((e as any)[(t as any) + (1 as any)] as any)[1] as any).start = (((e as any)[(t as any) - (2 as any)] as any)[1] as any).start, ((e as any).splice as any)((t as any) - (2 as any), 2)), e;
}
function Kl(this: any, e: any, t: any, n: any): any {
  const r: any = this;
  let i: any, a: any, l: any, u: any, o: any;
  return s;
  function s(this: any, g: any): any {
    return (c as any)(g);
  }
  function c(this: any, g: any): any {
    return ((e as any).enter as any)("htmlFlow"), ((e as any).enter as any)("htmlFlowData"), ((e as any).consume as any)(g), f;
  }
  function f(this: any, g: any): any {
    return (g as any) === (33 as any) ? (((e as any).consume as any)(g), p) : (g as any) === (47 as any) ? (((e as any).consume as any)(g), a = !0, x) : (g as any) === (63 as any) ? (((e as any).consume as any)(g), i = 3, (r as any).interrupt ? t : m) : (Y as any)(g) ? (((e as any).consume as any)(g), l = ((String as any).fromCharCode as any)(g), C) : (n as any)(g);
  }
  function p(this: any, g: any): any {
    return (g as any) === (45 as any) ? (((e as any).consume as any)(g), i = 2, h) : (g as any) === (91 as any) ? (((e as any).consume as any)(g), i = 5, u = 0, d) : (Y as any)(g) ? (((e as any).consume as any)(g), i = 4, (r as any).interrupt ? t : m) : (n as any)(g);
  }
  function h(this: any, g: any): any {
    return (g as any) === (45 as any) ? (((e as any).consume as any)(g), (r as any).interrupt ? t : m) : (n as any)(g);
  }
  function d(this: any, g: any): any {
    const te: string = "CDATA[";
    return (g as any) === (((te as any).charCodeAt as any)(u++) as any) ? (((e as any).consume as any)(g), (u as any) === ((te as any).length as any) ? (r as any).interrupt ? t : _ : d) : (n as any)(g);
  }
  function x(this: any, g: any): any {
    return (Y as any)(g) ? (((e as any).consume as any)(g), l = ((String as any).fromCharCode as any)(g), C) : (n as any)(g);
  }
  function C(this: any, g: any): any {
    if ((g as any) === (null as any) || (g as any) === (47 as any) || (g as any) === (62 as any) || (U as any)(g)) {
      const te: any = (g as any) === (47 as any),
        ge: any = ((l as any).toLowerCase as any)();
      return !te && !a && ((gn as any).includes as any)(ge) ? (i = 1, (r as any).interrupt ? (t as any)(g) : (_ as any)(g)) : ((Ql as any).includes as any)(((l as any).toLowerCase as any)()) ? (i = 6, te ? (((e as any).consume as any)(g), b) : (r as any).interrupt ? (t as any)(g) : (_ as any)(g)) : (i = 7, (r as any).interrupt && !(((r as any).parser as any).lazy as any)[(((r as any).now as any)() as any).line] ? (n as any)(g) : a ? (I as any)(g) : (E as any)(g));
    }
    return (g as any) === (45 as any) || (Q as any)(g) ? (((e as any).consume as any)(g), l += ((String as any).fromCharCode as any)(g), C) : (n as any)(g);
  }
  function b(this: any, g: any): any {
    return (g as any) === (62 as any) ? (((e as any).consume as any)(g), (r as any).interrupt ? t : _) : (n as any)(g);
  }
  function I(this: any, g: any): any {
    return (B as any)(g) ? (((e as any).consume as any)(g), I) : (y as any)(g);
  }
  function E(this: any, g: any): any {
    return (g as any) === (47 as any) ? (((e as any).consume as any)(g), y) : (g as any) === (58 as any) || (g as any) === (95 as any) || (Y as any)(g) ? (((e as any).consume as any)(g), D) : (B as any)(g) ? (((e as any).consume as any)(g), E) : (y as any)(g);
  }
  function D(this: any, g: any): any {
    return (g as any) === (45 as any) || (g as any) === (46 as any) || (g as any) === (58 as any) || (g as any) === (95 as any) || (Q as any)(g) ? (((e as any).consume as any)(g), D) : (v as any)(g);
  }
  function v(this: any, g: any): any {
    return (g as any) === (61 as any) ? (((e as any).consume as any)(g), S) : (B as any)(g) ? (((e as any).consume as any)(g), v) : (E as any)(g);
  }
  function S(this: any, g: any): any {
    return (g as any) === (null as any) || (g as any) === (60 as any) || (g as any) === (61 as any) || (g as any) === (62 as any) || (g as any) === (96 as any) ? (n as any)(g) : (g as any) === (34 as any) || (g as any) === (39 as any) ? (((e as any).consume as any)(g), o = g, M) : (B as any)(g) ? (((e as any).consume as any)(g), S) : ($ as any)(g);
  }
  function M(this: any, g: any): any {
    return (g as any) === (o as any) ? (((e as any).consume as any)(g), o = null, q) : (g as any) === (null as any) || (z as any)(g) ? (n as any)(g) : (((e as any).consume as any)(g), M);
  }
  function $(this: any, g: any): any {
    return (g as any) === (null as any) || (g as any) === (34 as any) || (g as any) === (39 as any) || (g as any) === (47 as any) || (g as any) === (60 as any) || (g as any) === (61 as any) || (g as any) === (62 as any) || (g as any) === (96 as any) || (U as any)(g) ? (v as any)(g) : (((e as any).consume as any)(g), $);
  }
  function q(this: any, g: any): any {
    return (g as any) === (47 as any) || (g as any) === (62 as any) || (B as any)(g) ? (E as any)(g) : (n as any)(g);
  }
  function y(this: any, g: any): any {
    return (g as any) === (62 as any) ? (((e as any).consume as any)(g), k) : (n as any)(g);
  }
  function k(this: any, g: any): any {
    return (g as any) === (null as any) || (z as any)(g) ? (_ as any)(g) : (B as any)(g) ? (((e as any).consume as any)(g), k) : (n as any)(g);
  }
  function _(this: any, g: any): any {
    return (g as any) === (45 as any) && (i as any) === (2 as any) ? (((e as any).consume as any)(g), H) : (g as any) === (60 as any) && (i as any) === (1 as any) ? (((e as any).consume as any)(g), O) : (g as any) === (62 as any) && (i as any) === (4 as any) ? (((e as any).consume as any)(g), ee) : (g as any) === (63 as any) && (i as any) === (3 as any) ? (((e as any).consume as any)(g), m) : (g as any) === (93 as any) && (i as any) === (5 as any) ? (((e as any).consume as any)(g), ae) : (z as any)(g) && ((i as any) === (6 as any) || (i as any) === (7 as any)) ? (((e as any).exit as any)("htmlFlowData"), (((e as any).check as any)(Yl, ue, F) as any)(g)) : (g as any) === (null as any) || (z as any)(g) ? (((e as any).exit as any)("htmlFlowData"), (F as any)(g)) : (((e as any).consume as any)(g), _);
  }
  function F(this: any, g: any): any {
    return (((e as any).check as any)(Xl, A, ue) as any)(g);
  }
  function A(this: any, g: any): any {
    return ((e as any).enter as any)("lineEnding"), ((e as any).consume as any)(g), ((e as any).exit as any)("lineEnding"), P;
  }
  function P(this: any, g: any): any {
    return (g as any) === (null as any) || (z as any)(g) ? (F as any)(g) : (((e as any).enter as any)("htmlFlowData"), (_ as any)(g));
  }
  function H(this: any, g: any): any {
    return (g as any) === (45 as any) ? (((e as any).consume as any)(g), m) : (_ as any)(g);
  }
  function O(this: any, g: any): any {
    return (g as any) === (47 as any) ? (((e as any).consume as any)(g), l = "", N) : (_ as any)(g);
  }
  function N(this: any, g: any): any {
    if ((g as any) === (62 as any)) {
      const te: any = ((l as any).toLowerCase as any)();
      return ((gn as any).includes as any)(te) ? (((e as any).consume as any)(g), ee) : (_ as any)(g);
    }
    return (Y as any)(g) && ((l as any).length as any) < (8 as any) ? (((e as any).consume as any)(g), l += ((String as any).fromCharCode as any)(g), N) : (_ as any)(g);
  }
  function ae(this: any, g: any): any {
    return (g as any) === (93 as any) ? (((e as any).consume as any)(g), m) : (_ as any)(g);
  }
  function m(this: any, g: any): any {
    return (g as any) === (62 as any) ? (((e as any).consume as any)(g), ee) : (g as any) === (45 as any) && (i as any) === (2 as any) ? (((e as any).consume as any)(g), m) : (_ as any)(g);
  }
  function ee(this: any, g: any): any {
    return (g as any) === (null as any) || (z as any)(g) ? (((e as any).exit as any)("htmlFlowData"), (ue as any)(g)) : (((e as any).consume as any)(g), ee);
  }
  function ue(this: any, g: any): any {
    return ((e as any).exit as any)("htmlFlow"), (t as any)(g);
  }
}
function Zl(this: any, e: any, t: any, n: any): any {
  const r: any = this;
  return i;
  function i(this: any, l: any): any {
    return (z as any)(l) ? (((e as any).enter as any)("lineEnding"), ((e as any).consume as any)(l), ((e as any).exit as any)("lineEnding"), a) : (n as any)(l);
  }
  function a(this: any, l: any): any {
    return (((r as any).parser as any).lazy as any)[(((r as any).now as any)() as any).line] ? (n as any)(l) : (t as any)(l);
  }
}
function ea(this: any, e: any, t: any, n: any): any {
  return r;
  function r(this: any, i: any): any {
    return ((e as any).enter as any)("lineEnding"), ((e as any).consume as any)(i), ((e as any).exit as any)("lineEnding"), ((e as any).attempt as any)(Be, t, n);
  }
}
const ta: any = {
  name: "htmlText",
  tokenize: na
};
function na(this: any, e: any, t: any, n: any): any {
  const r: any = this;
  let i: any, a: any, l: any;
  return u;
  function u(this: any, m: any): any {
    return ((e as any).enter as any)("htmlText"), ((e as any).enter as any)("htmlTextData"), ((e as any).consume as any)(m), o;
  }
  function o(this: any, m: any): any {
    return (m as any) === (33 as any) ? (((e as any).consume as any)(m), s) : (m as any) === (47 as any) ? (((e as any).consume as any)(m), v) : (m as any) === (63 as any) ? (((e as any).consume as any)(m), E) : (Y as any)(m) ? (((e as any).consume as any)(m), $) : (n as any)(m);
  }
  function s(this: any, m: any): any {
    return (m as any) === (45 as any) ? (((e as any).consume as any)(m), c) : (m as any) === (91 as any) ? (((e as any).consume as any)(m), a = 0, d) : (Y as any)(m) ? (((e as any).consume as any)(m), I) : (n as any)(m);
  }
  function c(this: any, m: any): any {
    return (m as any) === (45 as any) ? (((e as any).consume as any)(m), h) : (n as any)(m);
  }
  function f(this: any, m: any): any {
    return (m as any) === (null as any) ? (n as any)(m) : (m as any) === (45 as any) ? (((e as any).consume as any)(m), p) : (z as any)(m) ? (l = f, (O as any)(m)) : (((e as any).consume as any)(m), f);
  }
  function p(this: any, m: any): any {
    return (m as any) === (45 as any) ? (((e as any).consume as any)(m), h) : (f as any)(m);
  }
  function h(this: any, m: any): any {
    return (m as any) === (62 as any) ? (H as any)(m) : (m as any) === (45 as any) ? (p as any)(m) : (f as any)(m);
  }
  function d(this: any, m: any): any {
    const ee: string = "CDATA[";
    return (m as any) === (((ee as any).charCodeAt as any)(a++) as any) ? (((e as any).consume as any)(m), (a as any) === ((ee as any).length as any) ? x : d) : (n as any)(m);
  }
  function x(this: any, m: any): any {
    return (m as any) === (null as any) ? (n as any)(m) : (m as any) === (93 as any) ? (((e as any).consume as any)(m), C) : (z as any)(m) ? (l = x, (O as any)(m)) : (((e as any).consume as any)(m), x);
  }
  function C(this: any, m: any): any {
    return (m as any) === (93 as any) ? (((e as any).consume as any)(m), b) : (x as any)(m);
  }
  function b(this: any, m: any): any {
    return (m as any) === (62 as any) ? (H as any)(m) : (m as any) === (93 as any) ? (((e as any).consume as any)(m), b) : (x as any)(m);
  }
  function I(this: any, m: any): any {
    return (m as any) === (null as any) || (m as any) === (62 as any) ? (H as any)(m) : (z as any)(m) ? (l = I, (O as any)(m)) : (((e as any).consume as any)(m), I);
  }
  function E(this: any, m: any): any {
    return (m as any) === (null as any) ? (n as any)(m) : (m as any) === (63 as any) ? (((e as any).consume as any)(m), D) : (z as any)(m) ? (l = E, (O as any)(m)) : (((e as any).consume as any)(m), E);
  }
  function D(this: any, m: any): any {
    return (m as any) === (62 as any) ? (H as any)(m) : (E as any)(m);
  }
  function v(this: any, m: any): any {
    return (Y as any)(m) ? (((e as any).consume as any)(m), S) : (n as any)(m);
  }
  function S(this: any, m: any): any {
    return (m as any) === (45 as any) || (Q as any)(m) ? (((e as any).consume as any)(m), S) : (M as any)(m);
  }
  function M(this: any, m: any): any {
    return (z as any)(m) ? (l = M, (O as any)(m)) : (B as any)(m) ? (((e as any).consume as any)(m), M) : (H as any)(m);
  }
  function $(this: any, m: any): any {
    return (m as any) === (45 as any) || (Q as any)(m) ? (((e as any).consume as any)(m), $) : (m as any) === (47 as any) || (m as any) === (62 as any) || (U as any)(m) ? (q as any)(m) : (n as any)(m);
  }
  function q(this: any, m: any): any {
    return (m as any) === (47 as any) ? (((e as any).consume as any)(m), H) : (m as any) === (58 as any) || (m as any) === (95 as any) || (Y as any)(m) ? (((e as any).consume as any)(m), y) : (z as any)(m) ? (l = q, (O as any)(m)) : (B as any)(m) ? (((e as any).consume as any)(m), q) : (H as any)(m);
  }
  function y(this: any, m: any): any {
    return (m as any) === (45 as any) || (m as any) === (46 as any) || (m as any) === (58 as any) || (m as any) === (95 as any) || (Q as any)(m) ? (((e as any).consume as any)(m), y) : (k as any)(m);
  }
  function k(this: any, m: any): any {
    return (m as any) === (61 as any) ? (((e as any).consume as any)(m), _) : (z as any)(m) ? (l = k, (O as any)(m)) : (B as any)(m) ? (((e as any).consume as any)(m), k) : (q as any)(m);
  }
  function _(this: any, m: any): any {
    return (m as any) === (null as any) || (m as any) === (60 as any) || (m as any) === (61 as any) || (m as any) === (62 as any) || (m as any) === (96 as any) ? (n as any)(m) : (m as any) === (34 as any) || (m as any) === (39 as any) ? (((e as any).consume as any)(m), i = m, F) : (z as any)(m) ? (l = _, (O as any)(m)) : (B as any)(m) ? (((e as any).consume as any)(m), _) : (((e as any).consume as any)(m), A);
  }
  function F(this: any, m: any): any {
    return (m as any) === (i as any) ? (((e as any).consume as any)(m), i = void 0, P) : (m as any) === (null as any) ? (n as any)(m) : (z as any)(m) ? (l = F, (O as any)(m)) : (((e as any).consume as any)(m), F);
  }
  function A(this: any, m: any): any {
    return (m as any) === (null as any) || (m as any) === (34 as any) || (m as any) === (39 as any) || (m as any) === (60 as any) || (m as any) === (61 as any) || (m as any) === (96 as any) ? (n as any)(m) : (m as any) === (47 as any) || (m as any) === (62 as any) || (U as any)(m) ? (q as any)(m) : (((e as any).consume as any)(m), A);
  }
  function P(this: any, m: any): any {
    return (m as any) === (47 as any) || (m as any) === (62 as any) || (U as any)(m) ? (q as any)(m) : (n as any)(m);
  }
  function H(this: any, m: any): any {
    return (m as any) === (62 as any) ? (((e as any).consume as any)(m), ((e as any).exit as any)("htmlTextData"), ((e as any).exit as any)("htmlText"), t) : (n as any)(m);
  }
  function O(this: any, m: any): any {
    return ((e as any).exit as any)("htmlTextData"), ((e as any).enter as any)("lineEnding"), ((e as any).consume as any)(m), ((e as any).exit as any)("lineEnding"), N;
  }
  function N(this: any, m: any): any {
    return (B as any)(m) ? ((R as any)(e, ae, "linePrefix", ((((((r as any).parser as any).constructs as any).disable as any).null as any).includes as any)("codeIndented") ? void 0 : 4) as any)(m) : (ae as any)(m);
  }
  function ae(this: any, m: any): any {
    return ((e as any).enter as any)("htmlTextData"), (l as any)(m);
  }
}
const Ot: any = {
    name: "labelEnd",
    resolveAll: aa,
    resolveTo: ua,
    tokenize: oa
  },
  ra: any = {
    tokenize: sa
  },
  ia: any = {
    tokenize: ca
  },
  la: any = {
    tokenize: fa
  };
function aa(this: any, e: any): any {
  let t: any = -1;
  const n: any = [];
  for (; (++t as any) < ((e as any).length as any);) {
    const r: any = ((e as any)[t] as any)[1];
    if (((n as any).push as any)((e as any)[t]), ((r as any).type as any) === ("labelImage" as any) || ((r as any).type as any) === ("labelLink" as any) || ((r as any).type as any) === ("labelEnd" as any)) {
      const i: any = ((r as any).type as any) === ("labelImage" as any) ? 4 : 2;
      (r as any).type = "data", t += i;
    }
  }
  return ((e as any).length as any) !== ((n as any).length as any) && (K as any)(e, 0, (e as any).length, n), e;
}
function ua(this: any, e: any, t: any): any {
  let n: any = (e as any).length,
    r: any = 0,
    i: any,
    a: any,
    l: any,
    u: any;
  for (; n--;) if (i = ((e as any)[n] as any)[1], a) {
    if (((i as any).type as any) === ("link" as any) || ((i as any).type as any) === ("labelLink" as any) && (i as any)._inactive) break;
    (((e as any)[n] as any)[0] as any) === ("enter" as any) && ((i as any).type as any) === ("labelLink" as any) && ((i as any)._inactive = !0);
  } else if (l) {
    if ((((e as any)[n] as any)[0] as any) === ("enter" as any) && (((i as any).type as any) === ("labelImage" as any) || ((i as any).type as any) === ("labelLink" as any)) && !(i as any)._balanced && (a = n, ((i as any).type as any) !== ("labelLink" as any))) {
      r = 2;
      break;
    }
  } else ((i as any).type as any) === ("labelEnd" as any) && (l = n);
  const o: any = {
      type: ((((e as any)[a] as any)[1] as any).type as any) === ("labelLink" as any) ? "link" : "image",
      start: {
        ...(((e as any)[a] as any)[1] as any).start
      },
      end: {
        ...(((e as any)[((e as any).length as any) - (1 as any)] as any)[1] as any).end
      }
    },
    s: any = {
      type: "label",
      start: {
        ...(((e as any)[a] as any)[1] as any).start
      },
      end: {
        ...(((e as any)[l] as any)[1] as any).end
      }
    },
    c: any = {
      type: "labelText",
      start: {
        ...(((e as any)[((a as any) + (r as any) as any) + (2 as any)] as any)[1] as any).end
      },
      end: {
        ...(((e as any)[(l as any) - (2 as any)] as any)[1] as any).start
      }
    };
  return u = [["enter", o, t], ["enter", s, t]], u = (Z as any)(u, ((e as any).slice as any)((a as any) + (1 as any), ((a as any) + (r as any) as any) + (3 as any))), u = (Z as any)(u, [["enter", c, t]]), u = (Z as any)(u, (Ze as any)(((((t as any).parser as any).constructs as any).insideSpan as any).null, ((e as any).slice as any)(((a as any) + (r as any) as any) + (4 as any), (l as any) - (3 as any)), t)), u = (Z as any)(u, [["exit", c, t], (e as any)[(l as any) - (2 as any)], (e as any)[(l as any) - (1 as any)], ["exit", s, t]]), u = (Z as any)(u, ((e as any).slice as any)((l as any) + (1 as any))), u = (Z as any)(u, [["exit", o, t]]), (K as any)(e, a, (e as any).length, u), e;
}
function oa(this: any, e: any, t: any, n: any): any {
  const r: any = this;
  let i: any = ((r as any).events as any).length,
    a: any,
    l: any;
  for (; i--;) if (((((((r as any).events as any)[i] as any)[1] as any).type as any) === ("labelImage" as any) || (((((r as any).events as any)[i] as any)[1] as any).type as any) === ("labelLink" as any)) && !((((r as any).events as any)[i] as any)[1] as any)._balanced) {
    a = (((r as any).events as any)[i] as any)[1];
    break;
  }
  return u;
  function u(this: any, p: any): any {
    return a ? (a as any)._inactive ? (f as any)(p) : (l = ((((r as any).parser as any).defined as any).includes as any)((re as any)(((r as any).sliceSerialize as any)({
      start: (a as any).end,
      end: ((r as any).now as any)()
    }))), ((e as any).enter as any)("labelEnd"), ((e as any).enter as any)("labelMarker"), ((e as any).consume as any)(p), ((e as any).exit as any)("labelMarker"), ((e as any).exit as any)("labelEnd"), o) : (n as any)(p);
  }
  function o(this: any, p: any): any {
    return (p as any) === (40 as any) ? (((e as any).attempt as any)(ra, c, l ? c : f) as any)(p) : (p as any) === (91 as any) ? (((e as any).attempt as any)(ia, c, l ? s : f) as any)(p) : l ? (c as any)(p) : (f as any)(p);
  }
  function s(this: any, p: any): any {
    return (((e as any).attempt as any)(la, c, f) as any)(p);
  }
  function c(this: any, p: any): any {
    return (t as any)(p);
  }
  function f(this: any, p: any): any {
    return (a as any)._balanced = !0, (n as any)(p);
  }
}
function sa(this: any, e: any, t: any, n: any): any {
  return r;
  function r(this: any, f: any): any {
    return ((e as any).enter as any)("resource"), ((e as any).enter as any)("resourceMarker"), ((e as any).consume as any)(f), ((e as any).exit as any)("resourceMarker"), i;
  }
  function i(this: any, f: any): any {
    return (U as any)(f) ? ((Ne as any)(e, a) as any)(f) : (a as any)(f);
  }
  function a(this: any, f: any): any {
    return (f as any) === (41 as any) ? (c as any)(f) : ((ur as any)(e, l, u, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32) as any)(f);
  }
  function l(this: any, f: any): any {
    return (U as any)(f) ? ((Ne as any)(e, o) as any)(f) : (c as any)(f);
  }
  function u(this: any, f: any): any {
    return (n as any)(f);
  }
  function o(this: any, f: any): any {
    return (f as any) === (34 as any) || (f as any) === (39 as any) || (f as any) === (40 as any) ? ((sr as any)(e, s, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString") as any)(f) : (c as any)(f);
  }
  function s(this: any, f: any): any {
    return (U as any)(f) ? ((Ne as any)(e, c) as any)(f) : (c as any)(f);
  }
  function c(this: any, f: any): any {
    return (f as any) === (41 as any) ? (((e as any).enter as any)("resourceMarker"), ((e as any).consume as any)(f), ((e as any).exit as any)("resourceMarker"), ((e as any).exit as any)("resource"), t) : (n as any)(f);
  }
}
function ca(this: any, e: any, t: any, n: any): any {
  const r: any = this;
  return i;
  function i(this: any, u: any): any {
    return (((or as any).call as any)(r, e, a, l, "reference", "referenceMarker", "referenceString") as any)(u);
  }
  function a(this: any, u: any): any {
    return ((((r as any).parser as any).defined as any).includes as any)((re as any)(((((r as any).sliceSerialize as any)((((r as any).events as any)[(((r as any).events as any).length as any) - (1 as any)] as any)[1]) as any).slice as any)(1, -1))) ? (t as any)(u) : (n as any)(u);
  }
  function l(this: any, u: any): any {
    return (n as any)(u);
  }
}
function fa(this: any, e: any, t: any, n: any): any {
  return r;
  function r(this: any, a: any): any {
    return ((e as any).enter as any)("reference"), ((e as any).enter as any)("referenceMarker"), ((e as any).consume as any)(a), ((e as any).exit as any)("referenceMarker"), i;
  }
  function i(this: any, a: any): any {
    return (a as any) === (93 as any) ? (((e as any).enter as any)("referenceMarker"), ((e as any).consume as any)(a), ((e as any).exit as any)("referenceMarker"), ((e as any).exit as any)("reference"), t) : (n as any)(a);
  }
}
const ha: any = {
  name: "labelStartImage",
  resolveAll: (Ot as any).resolveAll,
  tokenize: pa
};
function pa(this: any, e: any, t: any, n: any): any {
  const r: any = this;
  return i;
  function i(this: any, u: any): any {
    return ((e as any).enter as any)("labelImage"), ((e as any).enter as any)("labelImageMarker"), ((e as any).consume as any)(u), ((e as any).exit as any)("labelImageMarker"), a;
  }
  function a(this: any, u: any): any {
    return (u as any) === (91 as any) ? (((e as any).enter as any)("labelMarker"), ((e as any).consume as any)(u), ((e as any).exit as any)("labelMarker"), ((e as any).exit as any)("labelImage"), l) : (n as any)(u);
  }
  function l(this: any, u: any): any {
    return (u as any) === (94 as any) && "_hiddenFootnoteSupport" in ((r as any).parser as any).constructs ? (n as any)(u) : (t as any)(u);
  }
}
const ma: any = {
  name: "labelStartLink",
  resolveAll: (Ot as any).resolveAll,
  tokenize: ga
};
function ga(this: any, e: any, t: any, n: any): any {
  const r: any = this;
  return i;
  function i(this: any, l: any): any {
    return ((e as any).enter as any)("labelLink"), ((e as any).enter as any)("labelMarker"), ((e as any).consume as any)(l), ((e as any).exit as any)("labelMarker"), ((e as any).exit as any)("labelLink"), a;
  }
  function a(this: any, l: any): any {
    return (l as any) === (94 as any) && "_hiddenFootnoteSupport" in ((r as any).parser as any).constructs ? (n as any)(l) : (t as any)(l);
  }
}
const at: any = {
  name: "lineEnding",
  tokenize: da
};
function da(this: any, e: any, t: any): any {
  return n;
  function n(this: any, r: any): any {
    return ((e as any).enter as any)("lineEnding"), ((e as any).consume as any)(r), ((e as any).exit as any)("lineEnding"), (R as any)(e, t, "linePrefix");
  }
}
const We: any = {
  name: "thematicBreak",
  tokenize: xa
};
function xa(this: any, e: any, t: any, n: any): any {
  let r: any = 0,
    i: any;
  return a;
  function a(this: any, s: any): any {
    return ((e as any).enter as any)("thematicBreak"), (l as any)(s);
  }
  function l(this: any, s: any): any {
    return i = s, (u as any)(s);
  }
  function u(this: any, s: any): any {
    return (s as any) === (i as any) ? (((e as any).enter as any)("thematicBreakSequence"), (o as any)(s)) : (r as any) >= (3 as any) && ((s as any) === (null as any) || (z as any)(s)) ? (((e as any).exit as any)("thematicBreak"), (t as any)(s)) : (n as any)(s);
  }
  function o(this: any, s: any): any {
    return (s as any) === (i as any) ? (((e as any).consume as any)(s), r++, o) : (((e as any).exit as any)("thematicBreakSequence"), (B as any)(s) ? ((R as any)(e, u, "whitespace") as any)(s) : (u as any)(s));
  }
}
const X: any = {
    continuation: {
      tokenize: wa
    },
    exit: Ca,
    name: "list",
    tokenize: ba
  },
  ka: any = {
    partial: !0,
    tokenize: Ea
  },
  ya: any = {
    partial: !0,
    tokenize: Sa
  };
function ba(this: any, e: any, t: any, n: any): any {
  const r: any = this,
    i: any = ((r as any).events as any)[(((r as any).events as any).length as any) - (1 as any)];
  let a: any = i && (((i as any)[1] as any).type as any) === ("linePrefix" as any) ? ((((i as any)[2] as any).sliceSerialize as any)((i as any)[1], !0) as any).length : 0,
    l: any = 0;
  return u;
  function u(this: any, h: any): any {
    const d: any = ((r as any).containerState as any).type || ((h as any) === (42 as any) || (h as any) === (43 as any) || (h as any) === (45 as any) ? "listUnordered" : "listOrdered");
    if ((d as any) === ("listUnordered" as any) ? !((r as any).containerState as any).marker || (h as any) === (((r as any).containerState as any).marker as any) : (bt as any)(h)) {
      if (((r as any).containerState as any).type || (((r as any).containerState as any).type = d, ((e as any).enter as any)(d, {
        _container: !0
      })), (d as any) === ("listUnordered" as any)) return ((e as any).enter as any)("listItemPrefix"), (h as any) === (42 as any) || (h as any) === (45 as any) ? (((e as any).check as any)(We, n, s) as any)(h) : (s as any)(h);
      if (!(r as any).interrupt || (h as any) === (49 as any)) return ((e as any).enter as any)("listItemPrefix"), ((e as any).enter as any)("listItemValue"), (o as any)(h);
    }
    return (n as any)(h);
  }
  function o(this: any, h: any): any {
    return (bt as any)(h) && (++l as any) < (10 as any) ? (((e as any).consume as any)(h), o) : (!(r as any).interrupt || (l as any) < (2 as any)) && (((r as any).containerState as any).marker ? (h as any) === (((r as any).containerState as any).marker as any) : (h as any) === (41 as any) || (h as any) === (46 as any)) ? (((e as any).exit as any)("listItemValue"), (s as any)(h)) : (n as any)(h);
  }
  function s(this: any, h: any): any {
    return ((e as any).enter as any)("listItemMarker"), ((e as any).consume as any)(h), ((e as any).exit as any)("listItemMarker"), ((r as any).containerState as any).marker = ((r as any).containerState as any).marker || h, ((e as any).check as any)(Be, (r as any).interrupt ? n : c, ((e as any).attempt as any)(ka, p, f));
  }
  function c(this: any, h: any): any {
    return ((r as any).containerState as any).initialBlankLine = !0, a++, (p as any)(h);
  }
  function f(this: any, h: any): any {
    return (B as any)(h) ? (((e as any).enter as any)("listItemPrefixWhitespace"), ((e as any).consume as any)(h), ((e as any).exit as any)("listItemPrefixWhitespace"), p) : (n as any)(h);
  }
  function p(this: any, h: any): any {
    return ((r as any).containerState as any).size = (a as any) + ((((r as any).sliceSerialize as any)(((e as any).exit as any)("listItemPrefix"), !0) as any).length as any), (t as any)(h);
  }
}
function wa(this: any, e: any, t: any, n: any): any {
  const r: any = this;
  return ((r as any).containerState as any)._closeFlow = void 0, ((e as any).check as any)(Be, i, a);
  function i(this: any, u: any): any {
    return ((r as any).containerState as any).furtherBlankLines = ((r as any).containerState as any).furtherBlankLines || ((r as any).containerState as any).initialBlankLine, ((R as any)(e, t, "listItemIndent", (((r as any).containerState as any).size as any) + (1 as any)) as any)(u);
  }
  function a(this: any, u: any): any {
    return ((r as any).containerState as any).furtherBlankLines || !(B as any)(u) ? (((r as any).containerState as any).furtherBlankLines = void 0, ((r as any).containerState as any).initialBlankLine = void 0, (l as any)(u)) : (((r as any).containerState as any).furtherBlankLines = void 0, ((r as any).containerState as any).initialBlankLine = void 0, (((e as any).attempt as any)(ya, t, l) as any)(u));
  }
  function l(this: any, u: any): any {
    return ((r as any).containerState as any)._closeFlow = !0, (r as any).interrupt = void 0, ((R as any)(e, ((e as any).attempt as any)(X, t, n), "linePrefix", ((((((r as any).parser as any).constructs as any).disable as any).null as any).includes as any)("codeIndented") ? void 0 : 4) as any)(u);
  }
}
function Sa(this: any, e: any, t: any, n: any): any {
  const r: any = this;
  return (R as any)(e, i, "listItemIndent", (((r as any).containerState as any).size as any) + (1 as any));
  function i(this: any, a: any): any {
    const l: any = ((r as any).events as any)[(((r as any).events as any).length as any) - (1 as any)];
    return l && (((l as any)[1] as any).type as any) === ("listItemIndent" as any) && (((((l as any)[2] as any).sliceSerialize as any)((l as any)[1], !0) as any).length as any) === (((r as any).containerState as any).size as any) ? (t as any)(a) : (n as any)(a);
  }
}
function Ca(this: any, e: any): any {
  ((e as any).exit as any)(((this as any).containerState as any).type);
}
function Ea(this: any, e: any, t: any, n: any): any {
  const r: any = this;
  return (R as any)(e, i, "listItemPrefixWhitespace", ((((((r as any).parser as any).constructs as any).disable as any).null as any).includes as any)("codeIndented") ? void 0 : 5);
  function i(this: any, a: any): any {
    const l: any = ((r as any).events as any)[(((r as any).events as any).length as any) - (1 as any)];
    return !(B as any)(a) && l && (((l as any)[1] as any).type as any) === ("listItemPrefixWhitespace" as any) ? (t as any)(a) : (n as any)(a);
  }
}
const dn: any = {
  name: "setextUnderline",
  resolveTo: Ia,
  tokenize: Ta
};
function Ia(this: any, e: any, t: any): any {
  let n: any = (e as any).length,
    r: any,
    i: any,
    a: any;
  for (; n--;) if ((((e as any)[n] as any)[0] as any) === ("enter" as any)) {
    if (((((e as any)[n] as any)[1] as any).type as any) === ("content" as any)) {
      r = n;
      break;
    }
    ((((e as any)[n] as any)[1] as any).type as any) === ("paragraph" as any) && (i = n);
  } else ((((e as any)[n] as any)[1] as any).type as any) === ("content" as any) && ((e as any).splice as any)(n, 1), !a && ((((e as any)[n] as any)[1] as any).type as any) === ("definition" as any) && (a = n);
  const l: any = {
    type: "setextHeading",
    start: {
      ...(((e as any)[r] as any)[1] as any).start
    },
    end: {
      ...(((e as any)[((e as any).length as any) - (1 as any)] as any)[1] as any).end
    }
  };
  return (((e as any)[i] as any)[1] as any).type = "setextHeadingText", a ? (((e as any).splice as any)(i, 0, ["enter", l, t]), ((e as any).splice as any)((a as any) + (1 as any), 0, ["exit", ((e as any)[r] as any)[1], t]), (((e as any)[r] as any)[1] as any).end = {
    ...(((e as any)[a] as any)[1] as any).end
  }) : ((e as any)[r] as any)[1] = l, ((e as any).push as any)(["exit", l, t]), e;
}
function Ta(this: any, e: any, t: any, n: any): any {
  const r: any = this;
  let i: any;
  return a;
  function a(this: any, s: any): any {
    let c: any = ((r as any).events as any).length,
      f: any;
    for (; c--;) if ((((((r as any).events as any)[c] as any)[1] as any).type as any) !== ("lineEnding" as any) && (((((r as any).events as any)[c] as any)[1] as any).type as any) !== ("linePrefix" as any) && (((((r as any).events as any)[c] as any)[1] as any).type as any) !== ("content" as any)) {
      f = (((((r as any).events as any)[c] as any)[1] as any).type as any) === ("paragraph" as any);
      break;
    }
    return !(((r as any).parser as any).lazy as any)[(((r as any).now as any)() as any).line] && ((r as any).interrupt || f) ? (((e as any).enter as any)("setextHeadingLine"), i = s, (l as any)(s)) : (n as any)(s);
  }
  function l(this: any, s: any): any {
    return ((e as any).enter as any)("setextHeadingLineSequence"), (u as any)(s);
  }
  function u(this: any, s: any): any {
    return (s as any) === (i as any) ? (((e as any).consume as any)(s), u) : (((e as any).exit as any)("setextHeadingLineSequence"), (B as any)(s) ? ((R as any)(e, o, "lineSuffix") as any)(s) : (o as any)(s));
  }
  function o(this: any, s: any): any {
    return (s as any) === (null as any) || (z as any)(s) ? (((e as any).exit as any)("setextHeadingLine"), (t as any)(s)) : (n as any)(s);
  }
}
const Aa: any = {
  tokenize: Fa
};
function Fa(this: any, e: any): any {
  const t: any = this,
    n: any = ((e as any).attempt as any)(Be, r, ((e as any).attempt as any)((((this as any).parser as any).constructs as any).flowInitial, i, (R as any)(e, ((e as any).attempt as any)((((this as any).parser as any).constructs as any).flow, i, ((e as any).attempt as any)(Ll, i)), "linePrefix")));
  return n;
  function r(this: any, a: any): any {
    if ((a as any) === (null as any)) {
      ((e as any).consume as any)(a);
      return;
    }
    return ((e as any).enter as any)("lineEndingBlank"), ((e as any).consume as any)(a), ((e as any).exit as any)("lineEndingBlank"), (t as any).currentConstruct = void 0, n;
  }
  function i(this: any, a: any): any {
    if ((a as any) === (null as any)) {
      ((e as any).consume as any)(a);
      return;
    }
    return ((e as any).enter as any)("lineEnding"), ((e as any).consume as any)(a), ((e as any).exit as any)("lineEnding"), (t as any).currentConstruct = void 0, n;
  }
}
const za: any = {
    resolveAll: (fr as any)()
  },
  _a: any = (cr as any)("string"),
  Pa: any = (cr as any)("text");
function cr(this: any, e: any): any {
  return {
    resolveAll: (fr as any)((e as any) === ("text" as any) ? Da : void 0),
    tokenize: t
  };
  function t(this: any, n: any): any {
    const r: any = this,
      i: any = (((this as any).parser as any).constructs as any)[e],
      a: any = ((n as any).attempt as any)(i, l, u);
    return l;
    function l(this: any, c: any): any {
      return (s as any)(c) ? (a as any)(c) : (u as any)(c);
    }
    function u(this: any, c: any): any {
      if ((c as any) === (null as any)) {
        ((n as any).consume as any)(c);
        return;
      }
      return ((n as any).enter as any)("data"), ((n as any).consume as any)(c), o;
    }
    function o(this: any, c: any): any {
      return (s as any)(c) ? (((n as any).exit as any)("data"), (a as any)(c)) : (((n as any).consume as any)(c), o);
    }
    function s(this: any, c: any): any {
      if ((c as any) === (null as any)) return !0;
      const f: any = (i as any)[c];
      let p: any = -1;
      if (f) for (; (++p as any) < ((f as any).length as any);) {
        const h: any = (f as any)[p];
        if (!(h as any).previous || (((h as any).previous as any).call as any)(r, (r as any).previous)) return !0;
      }
      return !1;
    }
  }
}
function fr(this: any, e: any): any {
  return t;
  function t(this: any, n: any, r: any): any {
    let i: any = -1,
      a: any;
    for (; (++i as any) <= ((n as any).length as any);) (a as any) === (void 0 as any) ? (n as any)[i] && ((((n as any)[i] as any)[1] as any).type as any) === ("data" as any) && (a = i, i++) : (!(n as any)[i] || ((((n as any)[i] as any)[1] as any).type as any) !== ("data" as any)) && ((i as any) !== ((a as any) + (2 as any) as any) && ((((n as any)[a] as any)[1] as any).end = (((n as any)[(i as any) - (1 as any)] as any)[1] as any).end, ((n as any).splice as any)((a as any) + (2 as any), ((i as any) - (a as any) as any) - (2 as any)), i = (a as any) + (2 as any)), a = void 0);
    return e ? (e as any)(n, r) : n;
  }
}
function Da(this: any, e: any, t: any): any {
  let n: any = 0;
  for (; (++n as any) <= ((e as any).length as any);) if (((n as any) === ((e as any).length as any) || ((((e as any)[n] as any)[1] as any).type as any) === ("lineEnding" as any)) && ((((e as any)[(n as any) - (1 as any)] as any)[1] as any).type as any) === ("data" as any)) {
    const r: any = ((e as any)[(n as any) - (1 as any)] as any)[1],
      i: any = ((t as any).sliceStream as any)(r);
    let a: any = (i as any).length,
      l: any = -1,
      u: any = 0,
      o: any;
    for (; a--;) {
      const s: any = (i as any)[a];
      if ((typeof s as any) == ("string" as any)) {
        for (l = (s as any).length; (((s as any).charCodeAt as any)((l as any) - (1 as any)) as any) === (32 as any);) u++, l--;
        if (l) break;
        l = -1;
      } else if ((s as any) === (-2 as any)) o = !0, u++;else if ((s as any) !== (-1 as any)) {
        a++;
        break;
      }
    }
    if ((t as any)._contentTypeTextTrailing && (n as any) === ((e as any).length as any) && (u = 0), u) {
      const s: any = {
        type: (n as any) === ((e as any).length as any) || o || (u as any) < (2 as any) ? "lineSuffix" : "hardBreakTrailing",
        start: {
          _bufferIndex: a ? l : (((r as any).start as any)._bufferIndex as any) + (l as any),
          _index: (((r as any).start as any)._index as any) + (a as any),
          line: ((r as any).end as any).line,
          column: (((r as any).end as any).column as any) - (u as any),
          offset: (((r as any).end as any).offset as any) - (u as any)
        },
        end: {
          ...(r as any).end
        }
      };
      (r as any).end = {
        ...(s as any).start
      }, (((r as any).start as any).offset as any) === (((r as any).end as any).offset as any) ? ((Object as any).assign as any)(r, s) : (((e as any).splice as any)(n, 0, ["enter", s, t], ["exit", s, t]), n += 2);
    }
    n++;
  }
  return e;
}
const La: any = {
    42: X,
    43: X,
    45: X,
    48: X,
    49: X,
    50: X,
    51: X,
    52: X,
    53: X,
    54: X,
    55: X,
    56: X,
    57: X,
    62: rr
  },
  Ma: any = {
    91: Ol
  },
  Na: any = {
    [-2]: lt,
    [-1]: lt,
    32: lt
  },
  Ra: any = {
    35: Vl,
    42: We,
    45: [dn, We],
    60: Gl,
    61: dn,
    95: We,
    96: mn,
    126: mn
  },
  va: any = {
    38: lr,
    92: ir
  },
  Oa: any = {
    [-5]: at,
    [-4]: at,
    [-3]: at,
    33: ha,
    38: lr,
    42: wt,
    60: [ml, ta],
    91: ma,
    92: [$l, ir],
    93: Ot,
    95: wt,
    96: Al
  },
  Ba: any = {
    null: [wt, za]
  },
  ja: any = {
    null: [42, 95]
  },
  qa: any = {
    null: []
  },
  $a: any = ((Object as any).freeze as any)(((Object as any).defineProperty as any)({
    __proto__: null,
    attentionMarkers: ja,
    contentInitial: Ma,
    disable: qa,
    document: La,
    flow: Ra,
    flowInitial: Na,
    insideSpan: Ba,
    string: va,
    text: Oa
  }, (Symbol as any).toStringTag, {
    value: "Module"
  }));
function Ha(this: any, e: any, t: any, n: any): any {
  let r: any = {
    _bufferIndex: -1,
    _index: 0,
    line: n && (n as any).line || 1,
    column: n && (n as any).column || 1,
    offset: n && (n as any).offset || 0
  };
  const i: any = {},
    a: any = [];
  let l: any = [],
    u: any = [];
  const o: any = {
      attempt: (M as any)(v),
      check: (M as any)(S),
      consume: I,
      enter: E,
      exit: D,
      interrupt: (M as any)(S, {
        interrupt: !0
      })
    },
    s: any = {
      code: null,
      containerState: {},
      defineSkip: x,
      events: [],
      now: d,
      parser: e,
      previous: null,
      sliceSerialize: p,
      sliceStream: h,
      write: f
    };
  let c: any = (((t as any).tokenize as any).call as any)(s, o);
  return (t as any).resolveAll && ((a as any).push as any)(t), s;
  function f(this: any, k: any): any {
    return l = (Z as any)(l, k), (C as any)(), ((l as any)[((l as any).length as any) - (1 as any)] as any) !== (null as any) ? [] : (($ as any)(t, 0), (s as any).events = (Ze as any)(a, (s as any).events, s), (s as any).events);
  }
  function p(this: any, k: any, _: any): any {
    return (Ua as any)((h as any)(k), _);
  }
  function h(this: any, k: any): any {
    return (Va as any)(l, k);
  }
  function d(this: any): any {
    const {
      _bufferIndex: k,
      _index: _,
      line: F,
      column: A,
      offset: P
    }: any = r;
    return {
      _bufferIndex: k,
      _index: _,
      line: F,
      column: A,
      offset: P
    };
  }
  function x(this: any, k: any): any {
    (i as any)[(k as any).line] = (k as any).column, (y as any)();
  }
  function C(this: any): any {
    let k: any;
    for (; ((r as any)._index as any) < ((l as any).length as any);) {
      const _: any = (l as any)[(r as any)._index];
      if ((typeof _ as any) == ("string" as any)) for (k = (r as any)._index, ((r as any)._bufferIndex as any) < (0 as any) && ((r as any)._bufferIndex = 0); ((r as any)._index as any) === (k as any) && ((r as any)._bufferIndex as any) < ((_ as any).length as any);) (b as any)(((_ as any).charCodeAt as any)((r as any)._bufferIndex));else (b as any)(_);
    }
  }
  function b(this: any, k: any): any {
    c = (c as any)(k);
  }
  function I(this: any, k: any): any {
    (z as any)(k) ? ((r as any).line++, (r as any).column = 1, (r as any).offset += (k as any) === (-3 as any) ? 2 : 1, (y as any)()) : (k as any) !== (-1 as any) && ((r as any).column++, (r as any).offset++), ((r as any)._bufferIndex as any) < (0 as any) ? (r as any)._index++ : ((r as any)._bufferIndex++, ((r as any)._bufferIndex as any) === (((l as any)[(r as any)._index] as any).length as any) && ((r as any)._bufferIndex = -1, (r as any)._index++)), (s as any).previous = k;
  }
  function E(this: any, k: any, _: any): any {
    const F: any = _ || {};
    return (F as any).type = k, (F as any).start = (d as any)(), (((s as any).events as any).push as any)(["enter", F, s]), ((u as any).push as any)(F), F;
  }
  function D(this: any, k: any): any {
    const _: any = ((u as any).pop as any)();
    return (_ as any).end = (d as any)(), (((s as any).events as any).push as any)(["exit", _, s]), _;
  }
  function v(this: any, k: any, _: any): any {
    ($ as any)(k, (_ as any).from);
  }
  function S(this: any, k: any, _: any): any {
    ((_ as any).restore as any)();
  }
  function M(this: any, k: any, _: any): any {
    return F;
    function F(this: any, A: any, P: any, H: any): any {
      let O: any, N: any, ae: any, m: any;
      return ((Array as any).isArray as any)(A) ? (ue as any)(A) : "tokenize" in A ? (ue as any)([A]) : (ee as any)(A);
      function ee(this: any, W: any): any {
        return Ae;
        function Ae(this: any, fe: any): any {
          const ye: any = (fe as any) !== (null as any) && (W as any)[fe],
            be: any = (fe as any) !== (null as any) && (W as any).null,
            qe: any = [...(((Array as any).isArray as any)(ye) ? ye : ye ? [ye] : []), ...(((Array as any).isArray as any)(be) ? be : be ? [be] : [])];
          return ((ue as any)(qe) as any)(fe);
        }
      }
      function ue(this: any, W: any): any {
        return O = W, N = 0, ((W as any).length as any) === (0 as any) ? H : (g as any)((W as any)[N]);
      }
      function g(this: any, W: any): any {
        return Ae;
        function Ae(this: any, fe: any): any {
          return m = (q as any)(), ae = W, (W as any).partial || ((s as any).currentConstruct = W), (W as any).name && ((((((s as any).parser as any).constructs as any).disable as any).null as any).includes as any)((W as any).name) ? (ge as any)() : ((((W as any).tokenize as any).call as any)(_ ? ((Object as any).assign as any)(((Object as any).create as any)(s), _) : s, o, te, ge) as any)(fe);
        }
      }
      function te(this: any, W: any): any {
        return (k as any)(ae, m), P;
      }
      function ge(this: any, W: any): any {
        return ((m as any).restore as any)(), (++N as any) < ((O as any).length as any) ? (g as any)((O as any)[N]) : H;
      }
    }
  }
  function $(this: any, k: any, _: any): any {
    (k as any).resolveAll && !((a as any).includes as any)(k) && ((a as any).push as any)(k), (k as any).resolve && (K as any)((s as any).events, _, (((s as any).events as any).length as any) - (_ as any), ((k as any).resolve as any)((((s as any).events as any).slice as any)(_), s)), (k as any).resolveTo && ((s as any).events = ((k as any).resolveTo as any)((s as any).events, s));
  }
  function q(this: any): any {
    const k: any = (d as any)(),
      _: any = (s as any).previous,
      F: any = (s as any).currentConstruct,
      A: any = ((s as any).events as any).length,
      P: any = ((Array as any).from as any)(u);
    return {
      from: A,
      restore: H
    };
    function H(this: any): any {
      r = k, (s as any).previous = _, (s as any).currentConstruct = F, ((s as any).events as any).length = A, u = P, (y as any)();
    }
  }
  function y(this: any): any {
    (r as any).line in i && ((r as any).column as any) < (2 as any) && ((r as any).column = (i as any)[(r as any).line], (r as any).offset += ((i as any)[(r as any).line] as any) - (1 as any));
  }
}
function Va(this: any, e: any, t: any): any {
  const n: any = ((t as any).start as any)._index,
    r: any = ((t as any).start as any)._bufferIndex,
    i: any = ((t as any).end as any)._index,
    a: any = ((t as any).end as any)._bufferIndex;
  let l: any;
  if ((n as any) === (i as any)) l = [(((e as any)[n] as any).slice as any)(r, a)];else {
    if (l = ((e as any).slice as any)(n, i), (r as any) > (-1 as any)) {
      const u: any = (l as any)[0];
      (typeof u as any) == ("string" as any) ? (l as any)[0] = ((u as any).slice as any)(r) : ((l as any).shift as any)();
    }
    (a as any) > (0 as any) && ((l as any).push as any)((((e as any)[i] as any).slice as any)(0, a));
  }
  return l;
}
function Ua(this: any, e: any, t: any): any {
  let n: any = -1;
  const r: any = [];
  let i: any;
  for (; (++n as any) < ((e as any).length as any);) {
    const a: any = (e as any)[n];
    let l: any;
    if ((typeof a as any) == ("string" as any)) l = a;else switch (a) {
      case -5:
        {
          l = "\r";
          break;
        }
      case -4:
        {
          l = `
`;
          break;
        }
      case -3:
        {
          l = `\r
`;
          break;
        }
      case -2:
        {
          l = t ? " " : "	";
          break;
        }
      case -1:
        {
          if (!t && i) continue;
          l = " ";
          break;
        }
      default:
        l = ((String as any).fromCharCode as any)(a);
    }
    i = (a as any) === (-2 as any), ((r as any).push as any)(l);
  }
  return ((r as any).join as any)("");
}
function Wa(this: any, e: any): any {
  const r: any = {
    constructs: (tr as any)([$a, ...(((e || {}) as any).extensions || [])]),
    content: (i as any)(ul),
    defined: [],
    document: (i as any)(sl),
    flow: (i as any)(Aa),
    lazy: {},
    string: (i as any)(_a),
    text: (i as any)(Pa)
  };
  return r;
  function i(this: any, a: any): any {
    return l;
    function l(this: any, u: any): any {
      return (Ha as any)(r, a, u);
    }
  }
}
function Qa(this: any, e: any): any {
  for (; !(ar as any)(e););
  return e;
}
const xn: any = /[\0\t\n\r]/g;
function Ga(this: any): any {
  let e: any = 1,
    t: any = "",
    n: any = !0,
    r: any;
  return i;
  function i(this: any, a: any, l: any, u: any): any {
    const o: any = [];
    let s: any, c: any, f: any, p: any, h: any;
    for (a = (t as any) + (((typeof a as any) == ("string" as any) ? ((a as any).toString as any)() : ((new (TextDecoder as any)(l || void 0) as any).decode as any)(a)) as any), f = 0, t = "", n && ((((a as any).charCodeAt as any)(0) as any) === (65279 as any) && f++, n = void 0); (f as any) < ((a as any).length as any);) {
      if ((xn as any).lastIndex = f, s = ((xn as any).exec as any)(a), p = s && ((s as any).index as any) !== (void 0 as any) ? (s as any).index : (a as any).length, h = ((a as any).charCodeAt as any)(p), !s) {
        t = ((a as any).slice as any)(f);
        break;
      }
      if ((h as any) === (10 as any) && (f as any) === (p as any) && r) ((o as any).push as any)(-3), r = void 0;else switch (r && (((o as any).push as any)(-5), r = void 0), (f as any) < (p as any) && (((o as any).push as any)(((a as any).slice as any)(f, p)), e += (p as any) - (f as any)), h) {
        case 0:
          {
            ((o as any).push as any)(65533), e++;
            break;
          }
        case 9:
          {
            for (c = (((Math as any).ceil as any)((e as any) / (4 as any)) as any) * (4 as any), ((o as any).push as any)(-2); (e++ as any) < (c as any);) ((o as any).push as any)(-1);
            break;
          }
        case 10:
          {
            ((o as any).push as any)(-4), e = 1;
            break;
          }
        default:
          r = !0, e = 1;
      }
      f = (p as any) + (1 as any);
    }
    return u && (r && ((o as any).push as any)(-5), t && ((o as any).push as any)(t), ((o as any).push as any)(null)), o;
  }
}
const Ya: any = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Xa(this: any, e: any): any {
  return ((e as any).replace as any)(Ya, Ja);
}
function Ja(this: any, e: any, t: any, n: any): any {
  if (t) return t;
  if ((((n as any).charCodeAt as any)(0) as any) === (35 as any)) {
    const i: any = ((n as any).charCodeAt as any)(1),
      a: any = (i as any) === (120 as any) || (i as any) === (88 as any);
    return (nr as any)(((n as any).slice as any)(a ? 2 : 1), a ? 16 : 10);
  }
  return (vt as any)(n) || e;
}
const hr: any = ({} as any).hasOwnProperty;
function Ka(this: any, e: any, t: any, n: any): any {
  return (typeof t as any) != ("string" as any) && (n = t, t = void 0), ((Za as any)(n) as any)((Qa as any)((((((Wa as any)(n) as any).document as any)() as any).write as any)(((Ga as any)() as any)(e, t, !0))));
}
function Za(this: any, e: any): any {
  const t: any = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: (a as any)(Jt),
      autolinkProtocol: q,
      autolinkEmail: q,
      atxHeading: (a as any)(Gt),
      blockQuote: (a as any)(be),
      characterEscape: q,
      characterReference: q,
      codeFenced: (a as any)(qe),
      codeFencedFenceInfo: l,
      codeFencedFenceMeta: l,
      codeIndented: (a as any)(qe, l),
      codeText: (a as any)(ti, l),
      codeTextData: q,
      data: q,
      codeFlowValue: q,
      definition: (a as any)(ni),
      definitionDestinationString: l,
      definitionLabelString: l,
      definitionTitleString: l,
      emphasis: (a as any)(ri),
      hardBreakEscape: (a as any)(Yt),
      hardBreakTrailing: (a as any)(Yt),
      htmlFlow: (a as any)(Xt, l),
      htmlFlowData: q,
      htmlText: (a as any)(Xt, l),
      htmlTextData: q,
      image: (a as any)(ii),
      label: l,
      link: (a as any)(Jt),
      listItem: (a as any)(li),
      listItemValue: p,
      listOrdered: (a as any)(Kt, f),
      listUnordered: (a as any)(Kt),
      paragraph: (a as any)(ai),
      reference: g,
      referenceString: l,
      resourceDestinationString: l,
      resourceTitleString: l,
      setextHeading: (a as any)(Gt),
      strong: (a as any)(ui),
      thematicBreak: (a as any)(si)
    },
    exit: {
      atxHeading: (o as any)(),
      atxHeadingSequence: v,
      autolink: (o as any)(),
      autolinkEmail: ye,
      autolinkProtocol: fe,
      blockQuote: (o as any)(),
      characterEscapeValue: y,
      characterReferenceMarkerHexadecimal: ge,
      characterReferenceMarkerNumeric: ge,
      characterReferenceValue: W,
      characterReference: Ae,
      codeFenced: (o as any)(C),
      codeFencedFence: x,
      codeFencedFenceInfo: h,
      codeFencedFenceMeta: d,
      codeFlowValue: y,
      codeIndented: (o as any)(b),
      codeText: (o as any)(P),
      codeTextData: y,
      data: y,
      definition: (o as any)(),
      definitionDestinationString: D,
      definitionLabelString: I,
      definitionTitleString: E,
      emphasis: (o as any)(),
      hardBreakEscape: (o as any)(_),
      hardBreakTrailing: (o as any)(_),
      htmlFlow: (o as any)(F),
      htmlFlowData: y,
      htmlText: (o as any)(A),
      htmlTextData: y,
      image: (o as any)(O),
      label: ae,
      labelText: N,
      lineEnding: k,
      link: (o as any)(H),
      listItem: (o as any)(),
      listOrdered: (o as any)(),
      listUnordered: (o as any)(),
      paragraph: (o as any)(),
      referenceString: te,
      resourceDestinationString: m,
      resourceTitleString: ee,
      resource: ue,
      setextHeading: (o as any)($),
      setextHeadingLineSequence: M,
      setextHeadingText: S,
      strong: (o as any)(),
      thematicBreak: (o as any)()
    }
  };
  (pr as any)(t, ((e || {}) as any).mdastExtensions || []);
  const n: any = {};
  return r;
  function r(this: any, w: any): any {
    let T: any = {
      type: "root",
      children: []
    };
    const L: any = {
        stack: [T],
        tokenStack: [],
        config: t,
        enter: u,
        exit: s,
        buffer: l,
        resume: c,
        data: n
      },
      j: any = [];
    let V: any = -1;
    for (; (++V as any) < ((w as any).length as any);) if (((((w as any)[V] as any)[1] as any).type as any) === ("listOrdered" as any) || ((((w as any)[V] as any)[1] as any).type as any) === ("listUnordered" as any)) if ((((w as any)[V] as any)[0] as any) === ("enter" as any)) ((j as any).push as any)(V);else {
      const ne: any = ((j as any).pop as any)();
      V = (i as any)(w, ne, V);
    }
    for (V = -1; (++V as any) < ((w as any).length as any);) {
      const ne: any = (t as any)[((w as any)[V] as any)[0]];
      ((hr as any).call as any)(ne, (((w as any)[V] as any)[1] as any).type) && (((ne as any)[(((w as any)[V] as any)[1] as any).type] as any).call as any)(((Object as any).assign as any)({
        sliceSerialize: (((w as any)[V] as any)[2] as any).sliceSerialize
      }, L), ((w as any)[V] as any)[1]);
    }
    if ((((L as any).tokenStack as any).length as any) > (0 as any)) {
      const ne: any = ((L as any).tokenStack as any)[(((L as any).tokenStack as any).length as any) - (1 as any)];
      ((((ne as any)[1] || kn) as any).call as any)(L, void 0, (ne as any)[0]);
    }
    for ((T as any).position = {
      start: (he as any)(((w as any).length as any) > (0 as any) ? (((w as any)[0] as any)[1] as any).start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: (he as any)(((w as any).length as any) > (0 as any) ? (((w as any)[((w as any).length as any) - (2 as any)] as any)[1] as any).end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, V = -1; (++V as any) < (((t as any).transforms as any).length as any);) T = (((t as any).transforms as any)[V] as any)(T) || T;
    return T;
  }
  function i(this: any, w: any, T: any, L: any): any {
    let j: any = (T as any) - (1 as any),
      V: any = -1,
      ne: any = !1,
      de: any,
      oe: any,
      Fe: any,
      ze: any;
    for (; (++j as any) <= (L as any);) {
      const J: any = (w as any)[j];
      switch (((J as any)[1] as any).type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote":
          {
            ((J as any)[0] as any) === ("enter" as any) ? V++ : V--, ze = void 0;
            break;
          }
        case "lineEndingBlank":
          {
            ((J as any)[0] as any) === ("enter" as any) && (de && !ze && !V && !Fe && (Fe = j), ze = void 0);
            break;
          }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          ze = void 0;
      }
      if (!V && ((J as any)[0] as any) === ("enter" as any) && (((J as any)[1] as any).type as any) === ("listItemPrefix" as any) || (V as any) === (-1 as any) && ((J as any)[0] as any) === ("exit" as any) && ((((J as any)[1] as any).type as any) === ("listUnordered" as any) || (((J as any)[1] as any).type as any) === ("listOrdered" as any))) {
        if (de) {
          let we: any = j;
          for (oe = void 0; we--;) {
            const se: any = (w as any)[we];
            if ((((se as any)[1] as any).type as any) === ("lineEnding" as any) || (((se as any)[1] as any).type as any) === ("lineEndingBlank" as any)) {
              if (((se as any)[0] as any) === ("exit" as any)) continue;
              oe && ((((w as any)[oe] as any)[1] as any).type = "lineEndingBlank", ne = !0), ((se as any)[1] as any).type = "lineEnding", oe = we;
            } else if (!((((se as any)[1] as any).type as any) === ("linePrefix" as any) || (((se as any)[1] as any).type as any) === ("blockQuotePrefix" as any) || (((se as any)[1] as any).type as any) === ("blockQuotePrefixWhitespace" as any) || (((se as any)[1] as any).type as any) === ("blockQuoteMarker" as any) || (((se as any)[1] as any).type as any) === ("listItemIndent" as any))) break;
          }
          Fe && (!oe || (Fe as any) < (oe as any)) && ((de as any)._spread = !0), (de as any).end = ((Object as any).assign as any)({}, oe ? (((w as any)[oe] as any)[1] as any).start : ((J as any)[1] as any).end), ((w as any).splice as any)(oe || j, 0, ["exit", de, (J as any)[2]]), j++, L++;
        }
        if ((((J as any)[1] as any).type as any) === ("listItemPrefix" as any)) {
          const we: any = {
            type: "listItem",
            _spread: !1,
            start: ((Object as any).assign as any)({}, ((J as any)[1] as any).start),
            end: void 0
          };
          de = we, ((w as any).splice as any)(j, 0, ["enter", we, (J as any)[2]]), j++, L++, Fe = void 0, ze = !0;
        }
      }
    }
    return (((w as any)[T] as any)[1] as any)._spread = ne, L;
  }
  function a(this: any, w: any, T: any): any {
    return L;
    function L(this: any, j: any): any {
      ((u as any).call as any)(this, (w as any)(j), j), T && ((T as any).call as any)(this, j);
    }
  }
  function l(this: any): any {
    (((this as any).stack as any).push as any)({
      type: "fragment",
      children: []
    });
  }
  function u(this: any, w: any, T: any, L: any): any {
    (((((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)] as any).children as any).push as any)(w), (((this as any).stack as any).push as any)(w), (((this as any).tokenStack as any).push as any)([T, L || void 0]), (w as any).position = {
      start: (he as any)((T as any).start),
      end: void 0
    };
  }
  function o(this: any, w: any): any {
    return T;
    function T(this: any, L: any): any {
      w && ((w as any).call as any)(this, L), ((s as any).call as any)(this, L);
    }
  }
  function s(this: any, w: any, T: any): any {
    const L: any = (((this as any).stack as any).pop as any)(),
      j: any = (((this as any).tokenStack as any).pop as any)();
    if (j) (((j as any)[0] as any).type as any) !== ((w as any).type as any) && (T ? ((T as any).call as any)(this, w, (j as any)[0]) : ((((j as any)[1] || kn) as any).call as any)(this, w, (j as any)[0]));else throw new (Error as any)((((("Cannot close `" as any) + ((w as any).type as any) as any) + ("` (" as any) as any) + ((Me as any)({
      start: (w as any).start,
      end: (w as any).end
    }) as any) as any) + ("): it\u2019s not open" as any));
    ((L as any).position as any).end = (he as any)((w as any).end);
  }
  function c(this: any): any {
    return (Rt as any)((((this as any).stack as any).pop as any)());
  }
  function f(this: any): any {
    ((this as any).data as any).expectingFirstListItemValue = !0;
  }
  function p(this: any, w: any): any {
    if (((this as any).data as any).expectingFirstListItemValue) {
      const T: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (2 as any)];
      (T as any).start = ((Number as any).parseInt as any)(((this as any).sliceSerialize as any)(w), 10), ((this as any).data as any).expectingFirstListItemValue = void 0;
    }
  }
  function h(this: any): any {
    const w: any = ((this as any).resume as any)(),
      T: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)];
    (T as any).lang = w;
  }
  function d(this: any): any {
    const w: any = ((this as any).resume as any)(),
      T: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)];
    (T as any).meta = w;
  }
  function x(this: any): any {
    ((this as any).data as any).flowCodeInside || (((this as any).buffer as any)(), ((this as any).data as any).flowCodeInside = !0);
  }
  function C(this: any): any {
    const w: any = ((this as any).resume as any)(),
      T: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)];
    (T as any).value = ((w as any).replace as any)(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), ((this as any).data as any).flowCodeInside = void 0;
  }
  function b(this: any): any {
    const w: any = ((this as any).resume as any)(),
      T: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)];
    (T as any).value = ((w as any).replace as any)(/(\r?\n|\r)$/g, "");
  }
  function I(this: any, w: any): any {
    const T: any = ((this as any).resume as any)(),
      L: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)];
    (L as any).label = T, (L as any).identifier = (((re as any)(((this as any).sliceSerialize as any)(w)) as any).toLowerCase as any)();
  }
  function E(this: any): any {
    const w: any = ((this as any).resume as any)(),
      T: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)];
    (T as any).title = w;
  }
  function D(this: any): any {
    const w: any = ((this as any).resume as any)(),
      T: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)];
    (T as any).url = w;
  }
  function v(this: any, w: any): any {
    const T: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)];
    if (!(T as any).depth) {
      const L: any = (((this as any).sliceSerialize as any)(w) as any).length;
      (T as any).depth = L;
    }
  }
  function S(this: any): any {
    ((this as any).data as any).setextHeadingSlurpLineEnding = !0;
  }
  function M(this: any, w: any): any {
    const T: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)];
    (T as any).depth = (((((this as any).sliceSerialize as any)(w) as any).codePointAt as any)(0) as any) === (61 as any) ? 1 : 2;
  }
  function $(this: any): any {
    ((this as any).data as any).setextHeadingSlurpLineEnding = void 0;
  }
  function q(this: any, w: any): any {
    const L: any = (((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)] as any).children;
    let j: any = (L as any)[((L as any).length as any) - (1 as any)];
    (!j || ((j as any).type as any) !== ("text" as any)) && (j = (oi as any)(), (j as any).position = {
      start: (he as any)((w as any).start),
      end: void 0
    }, ((L as any).push as any)(j)), (((this as any).stack as any).push as any)(j);
  }
  function y(this: any, w: any): any {
    const T: any = (((this as any).stack as any).pop as any)();
    (T as any).value += ((this as any).sliceSerialize as any)(w), ((T as any).position as any).end = (he as any)((w as any).end);
  }
  function k(this: any, w: any): any {
    const T: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)];
    if (((this as any).data as any).atHardBreak) {
      const L: any = ((T as any).children as any)[(((T as any).children as any).length as any) - (1 as any)];
      ((L as any).position as any).end = (he as any)((w as any).end), ((this as any).data as any).atHardBreak = void 0;
      return;
    }
    !((this as any).data as any).setextHeadingSlurpLineEnding && (((t as any).canContainEols as any).includes as any)((T as any).type) && (((q as any).call as any)(this, w), ((y as any).call as any)(this, w));
  }
  function _(this: any): any {
    ((this as any).data as any).atHardBreak = !0;
  }
  function F(this: any): any {
    const w: any = ((this as any).resume as any)(),
      T: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)];
    (T as any).value = w;
  }
  function A(this: any): any {
    const w: any = ((this as any).resume as any)(),
      T: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)];
    (T as any).value = w;
  }
  function P(this: any): any {
    const w: any = ((this as any).resume as any)(),
      T: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)];
    (T as any).value = w;
  }
  function H(this: any): any {
    const w: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)];
    if (((this as any).data as any).inReference) {
      const T: any = ((this as any).data as any).referenceType || "shortcut";
      (w as any).type += "Reference", (w as any).referenceType = T, delete (w as any).url, delete (w as any).title;
    } else delete (w as any).identifier, delete (w as any).label;
    ((this as any).data as any).referenceType = void 0;
  }
  function O(this: any): any {
    const w: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)];
    if (((this as any).data as any).inReference) {
      const T: any = ((this as any).data as any).referenceType || "shortcut";
      (w as any).type += "Reference", (w as any).referenceType = T, delete (w as any).url, delete (w as any).title;
    } else delete (w as any).identifier, delete (w as any).label;
    ((this as any).data as any).referenceType = void 0;
  }
  function N(this: any, w: any): any {
    const T: any = ((this as any).sliceSerialize as any)(w),
      L: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (2 as any)];
    (L as any).label = (Xa as any)(T), (L as any).identifier = (((re as any)(T) as any).toLowerCase as any)();
  }
  function ae(this: any): any {
    const w: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)],
      T: any = ((this as any).resume as any)(),
      L: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)];
    if (((this as any).data as any).inReference = !0, ((L as any).type as any) === ("link" as any)) {
      const j: any = (w as any).children;
      (L as any).children = j;
    } else (L as any).alt = T;
  }
  function m(this: any): any {
    const w: any = ((this as any).resume as any)(),
      T: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)];
    (T as any).url = w;
  }
  function ee(this: any): any {
    const w: any = ((this as any).resume as any)(),
      T: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)];
    (T as any).title = w;
  }
  function ue(this: any): any {
    ((this as any).data as any).inReference = void 0;
  }
  function g(this: any): any {
    ((this as any).data as any).referenceType = "collapsed";
  }
  function te(this: any, w: any): any {
    const T: any = ((this as any).resume as any)(),
      L: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)];
    (L as any).label = T, (L as any).identifier = (((re as any)(((this as any).sliceSerialize as any)(w)) as any).toLowerCase as any)(), ((this as any).data as any).referenceType = "full";
  }
  function ge(this: any, w: any): any {
    ((this as any).data as any).characterReferenceType = (w as any).type;
  }
  function W(this: any, w: any): any {
    const T: any = ((this as any).sliceSerialize as any)(w),
      L: any = ((this as any).data as any).characterReferenceType;
    let j: any;
    L ? (j = (nr as any)(T, (L as any) === ("characterReferenceMarkerNumeric" as any) ? 10 : 16), ((this as any).data as any).characterReferenceType = void 0) : j = (vt as any)(T);
    const V: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)];
    (V as any).value += j;
  }
  function Ae(this: any, w: any): any {
    const T: any = (((this as any).stack as any).pop as any)();
    ((T as any).position as any).end = (he as any)((w as any).end);
  }
  function fe(this: any, w: any): any {
    ((y as any).call as any)(this, w);
    const T: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)];
    (T as any).url = ((this as any).sliceSerialize as any)(w);
  }
  function ye(this: any, w: any): any {
    ((y as any).call as any)(this, w);
    const T: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)];
    (T as any).url = ("mailto:" as any) + (((this as any).sliceSerialize as any)(w) as any);
  }
  function be(this: any): any {
    return {
      type: "blockquote",
      children: []
    };
  }
  function qe(this: any): any {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function ti(this: any): any {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function ni(this: any): any {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function ri(this: any): any {
    return {
      type: "emphasis",
      children: []
    };
  }
  function Gt(this: any): any {
    return {
      type: "heading",
      depth: 0,
      children: []
    };
  }
  function Yt(this: any): any {
    return {
      type: "break"
    };
  }
  function Xt(this: any): any {
    return {
      type: "html",
      value: ""
    };
  }
  function ii(this: any): any {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function Jt(this: any): any {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function Kt(this: any, w: any): any {
    return {
      type: "list",
      ordered: ((w as any).type as any) === ("listOrdered" as any),
      start: null,
      spread: (w as any)._spread,
      children: []
    };
  }
  function li(this: any, w: any): any {
    return {
      type: "listItem",
      spread: (w as any)._spread,
      checked: null,
      children: []
    };
  }
  function ai(this: any): any {
    return {
      type: "paragraph",
      children: []
    };
  }
  function ui(this: any): any {
    return {
      type: "strong",
      children: []
    };
  }
  function oi(this: any): any {
    return {
      type: "text",
      value: ""
    };
  }
  function si(this: any): any {
    return {
      type: "thematicBreak"
    };
  }
}
function he(this: any, e: any): any {
  return {
    line: (e as any).line,
    column: (e as any).column,
    offset: (e as any).offset
  };
}
function pr(this: any, e: any, t: any): any {
  let n: any = -1;
  for (; (++n as any) < ((t as any).length as any);) {
    const r: any = (t as any)[n];
    ((Array as any).isArray as any)(r) ? (pr as any)(e, r) : (eu as any)(e, r);
  }
}
function eu(this: any, e: any, t: any): any {
  let n: any;
  for (n in t) if (((hr as any).call as any)(t, n)) switch (n) {
    case "canContainEols":
      {
        const r: any = (t as any)[n];
        r && (((e as any)[n] as any).push as any)(...r);
        break;
      }
    case "transforms":
      {
        const r: any = (t as any)[n];
        r && (((e as any)[n] as any).push as any)(...r);
        break;
      }
    case "enter":
    case "exit":
      {
        const r: any = (t as any)[n];
        r && ((Object as any).assign as any)((e as any)[n], r);
        break;
      }
  }
}
function kn(this: any, e: any, t: any): any {
  throw e ? new (Error as any)((((((((("Cannot close `" as any) + ((e as any).type as any) as any) + ("` (" as any) as any) + ((Me as any)({
    start: (e as any).start,
    end: (e as any).end
  }) as any) as any) + ("): a different token (`" as any) as any) + ((t as any).type as any) as any) + ("`, " as any) as any) + ((Me as any)({
    start: (t as any).start,
    end: (t as any).end
  }) as any) as any) + (") is open" as any)) : new (Error as any)((((("Cannot close document, a token (`" as any) + ((t as any).type as any) as any) + ("`, " as any) as any) + ((Me as any)({
    start: (t as any).start,
    end: (t as any).end
  }) as any) as any) + (") is still open" as any));
}
function tu(this: any, e: any): any {
  const t: any = this;
  (t as any).parser = n;
  function n(this: any, r: any): any {
    return (Ka as any)(r, {
      ...((t as any).data as any)("settings"),
      ...e,
      extensions: ((t as any).data as any)("micromarkExtensions") || [],
      mdastExtensions: ((t as any).data as any)("fromMarkdownExtensions") || []
    });
  }
}
function nu(this: any, e: any, t: any): any {
  const n: any = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: ((e as any).wrap as any)(((e as any).all as any)(t), !0)
  };
  return ((e as any).patch as any)(t, n), ((e as any).applyData as any)(t, n);
}
function ru(this: any, e: any, t: any): any {
  const n: any = {
    type: "element",
    tagName: "br",
    properties: {},
    children: []
  };
  return ((e as any).patch as any)(t, n), [((e as any).applyData as any)(t, n), {
    type: "text",
    value: `
`
  }];
}
function iu(this: any, e: any, t: any): any {
  const n: any = (t as any).value ? ((t as any).value as any) + (`
` as any) : "",
    r: any = {};
  (t as any).lang && ((r as any).className = [("language-" as any) + ((t as any).lang as any)]);
  let i: any = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{
      type: "text",
      value: n
    }]
  };
  return (t as any).meta && ((i as any).data = {
    meta: (t as any).meta
  }), ((e as any).patch as any)(t, i), i = ((e as any).applyData as any)(t, i), i = {
    type: "element",
    tagName: "pre",
    properties: {},
    children: [i]
  }, ((e as any).patch as any)(t, i), i;
}
function lu(this: any, e: any, t: any): any {
  const n: any = {
    type: "element",
    tagName: "del",
    properties: {},
    children: ((e as any).all as any)(t)
  };
  return ((e as any).patch as any)(t, n), ((e as any).applyData as any)(t, n);
}
function au(this: any, e: any, t: any): any {
  const n: any = {
    type: "element",
    tagName: "em",
    properties: {},
    children: ((e as any).all as any)(t)
  };
  return ((e as any).patch as any)(t, n), ((e as any).applyData as any)(t, n);
}
function uu(this: any, e: any, t: any): any {
  const n: any = (typeof ((e as any).options as any).clobberPrefix as any) == ("string" as any) ? ((e as any).options as any).clobberPrefix : "user-content-",
    r: any = (((String as any)((t as any).identifier) as any).toUpperCase as any)(),
    i: any = (Te as any)(((r as any).toLowerCase as any)()),
    a: any = (((e as any).footnoteOrder as any).indexOf as any)(r);
  let l: any,
    u: any = (((e as any).footnoteCounts as any).get as any)(r);
  (u as any) === (void 0 as any) ? (u = 0, (((e as any).footnoteOrder as any).push as any)(r), l = ((e as any).footnoteOrder as any).length) : l = (a as any) + (1 as any), u += 1, (((e as any).footnoteCounts as any).set as any)(r, u);
  const o: any = {
    type: "element",
    tagName: "a",
    properties: {
      href: ((("#" as any) + (n as any) as any) + ("fn-" as any) as any) + (i as any),
      id: (((n as any) + ("fnref-" as any) as any) + (i as any) as any) + (((u as any) > (1 as any) ? ("-" as any) + (u as any) : "") as any),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{
      type: "text",
      value: (String as any)(l)
    }]
  };
  ((e as any).patch as any)(t, o);
  const s: any = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [o]
  };
  return ((e as any).patch as any)(t, s), ((e as any).applyData as any)(t, s);
}
function ou(this: any, e: any, t: any): any {
  const n: any = {
    type: "element",
    tagName: ("h" as any) + ((t as any).depth as any),
    properties: {},
    children: ((e as any).all as any)(t)
  };
  return ((e as any).patch as any)(t, n), ((e as any).applyData as any)(t, n);
}
function su(this: any, e: any, t: any): any {
  if (((e as any).options as any).allowDangerousHtml) {
    const n: any = {
      type: "raw",
      value: (t as any).value
    };
    return ((e as any).patch as any)(t, n), ((e as any).applyData as any)(t, n);
  }
}
function mr(this: any, e: any, t: any): any {
  const n: any = (t as any).referenceType;
  let r: any = "]";
  if ((n as any) === ("collapsed" as any) ? r += "[]" : (n as any) === ("full" as any) && (r += (("[" as any) + (((t as any).label || (t as any).identifier) as any) as any) + ("]" as any)), ((t as any).type as any) === ("imageReference" as any)) return [{
    type: "text",
    value: (("![" as any) + ((t as any).alt as any) as any) + (r as any)
  }];
  const i: any = ((e as any).all as any)(t),
    a: any = (i as any)[0];
  a && ((a as any).type as any) === ("text" as any) ? (a as any).value = ("[" as any) + ((a as any).value as any) : ((i as any).unshift as any)({
    type: "text",
    value: "["
  });
  const l: any = (i as any)[((i as any).length as any) - (1 as any)];
  return l && ((l as any).type as any) === ("text" as any) ? (l as any).value += r : ((i as any).push as any)({
    type: "text",
    value: r
  }), i;
}
function cu(this: any, e: any, t: any): any {
  const n: any = (((String as any)((t as any).identifier) as any).toUpperCase as any)(),
    r: any = (((e as any).definitionById as any).get as any)(n);
  if (!r) return (mr as any)(e, t);
  const i: any = {
    src: (Te as any)((r as any).url || ""),
    alt: (t as any).alt
  };
  ((r as any).title as any) !== (null as any) && ((r as any).title as any) !== (void 0 as any) && ((i as any).title = (r as any).title);
  const a: any = {
    type: "element",
    tagName: "img",
    properties: i,
    children: []
  };
  return ((e as any).patch as any)(t, a), ((e as any).applyData as any)(t, a);
}
function fu(this: any, e: any, t: any): any {
  const n: any = {
    src: (Te as any)((t as any).url)
  };
  ((t as any).alt as any) !== (null as any) && ((t as any).alt as any) !== (void 0 as any) && ((n as any).alt = (t as any).alt), ((t as any).title as any) !== (null as any) && ((t as any).title as any) !== (void 0 as any) && ((n as any).title = (t as any).title);
  const r: any = {
    type: "element",
    tagName: "img",
    properties: n,
    children: []
  };
  return ((e as any).patch as any)(t, r), ((e as any).applyData as any)(t, r);
}
function hu(this: any, e: any, t: any): any {
  const n: any = {
    type: "text",
    value: (((t as any).value as any).replace as any)(/\r?\n|\r/g, " ")
  };
  ((e as any).patch as any)(t, n);
  const r: any = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [n]
  };
  return ((e as any).patch as any)(t, r), ((e as any).applyData as any)(t, r);
}
function pu(this: any, e: any, t: any): any {
  const n: any = (((String as any)((t as any).identifier) as any).toUpperCase as any)(),
    r: any = (((e as any).definitionById as any).get as any)(n);
  if (!r) return (mr as any)(e, t);
  const i: any = {
    href: (Te as any)((r as any).url || "")
  };
  ((r as any).title as any) !== (null as any) && ((r as any).title as any) !== (void 0 as any) && ((i as any).title = (r as any).title);
  const a: any = {
    type: "element",
    tagName: "a",
    properties: i,
    children: ((e as any).all as any)(t)
  };
  return ((e as any).patch as any)(t, a), ((e as any).applyData as any)(t, a);
}
function mu(this: any, e: any, t: any): any {
  const n: any = {
    href: (Te as any)((t as any).url)
  };
  ((t as any).title as any) !== (null as any) && ((t as any).title as any) !== (void 0 as any) && ((n as any).title = (t as any).title);
  const r: any = {
    type: "element",
    tagName: "a",
    properties: n,
    children: ((e as any).all as any)(t)
  };
  return ((e as any).patch as any)(t, r), ((e as any).applyData as any)(t, r);
}
function gu(this: any, e: any, t: any, n: any): any {
  const r: any = ((e as any).all as any)(t),
    i: any = n ? (du as any)(n) : (gr as any)(t),
    a: any = {},
    l: any = [];
  if ((typeof (t as any).checked as any) == ("boolean" as any)) {
    const c: any = (r as any)[0];
    let f: any;
    c && ((c as any).type as any) === ("element" as any) && ((c as any).tagName as any) === ("p" as any) ? f = c : (f = {
      type: "element",
      tagName: "p",
      properties: {},
      children: []
    }, ((r as any).unshift as any)(f)), (((f as any).children as any).length as any) > (0 as any) && (((f as any).children as any).unshift as any)({
      type: "text",
      value: " "
    }), (((f as any).children as any).unshift as any)({
      type: "element",
      tagName: "input",
      properties: {
        type: "checkbox",
        checked: (t as any).checked,
        disabled: !0
      },
      children: []
    }), (a as any).className = ["task-list-item"];
  }
  let u: any = -1;
  for (; (++u as any) < ((r as any).length as any);) {
    const c: any = (r as any)[u];
    (i || (u as any) !== (0 as any) || ((c as any).type as any) !== ("element" as any) || ((c as any).tagName as any) !== ("p" as any)) && ((l as any).push as any)({
      type: "text",
      value: `
`
    }), ((c as any).type as any) === ("element" as any) && ((c as any).tagName as any) === ("p" as any) && !i ? ((l as any).push as any)(...(c as any).children) : ((l as any).push as any)(c);
  }
  const o: any = (r as any)[((r as any).length as any) - (1 as any)];
  o && (i || ((o as any).type as any) !== ("element" as any) || ((o as any).tagName as any) !== ("p" as any)) && ((l as any).push as any)({
    type: "text",
    value: `
`
  });
  const s: any = {
    type: "element",
    tagName: "li",
    properties: a,
    children: l
  };
  return ((e as any).patch as any)(t, s), ((e as any).applyData as any)(t, s);
}
function du(this: any, e: any): any {
  let t: any = !1;
  if (((e as any).type as any) === ("list" as any)) {
    t = (e as any).spread || !1;
    const n: any = (e as any).children;
    let r: any = -1;
    for (; !t && (++r as any) < ((n as any).length as any);) t = (gr as any)((n as any)[r]);
  }
  return t;
}
function gr(this: any, e: any): any {
  const t: any = (e as any).spread;
  return t ?? (((e as any).children as any).length as any) > (1 as any);
}
function xu(this: any, e: any, t: any): any {
  const n: any = {},
    r: any = ((e as any).all as any)(t);
  let i: any = -1;
  for ((typeof (t as any).start as any) == ("number" as any) && ((t as any).start as any) !== (1 as any) && ((n as any).start = (t as any).start); (++i as any) < ((r as any).length as any);) {
    const l: any = (r as any)[i];
    if (((l as any).type as any) === ("element" as any) && ((l as any).tagName as any) === ("li" as any) && (l as any).properties && ((Array as any).isArray as any)(((l as any).properties as any).className) && ((((l as any).properties as any).className as any).includes as any)("task-list-item")) {
      (n as any).className = ["contains-task-list"];
      break;
    }
  }
  const a: any = {
    type: "element",
    tagName: (t as any).ordered ? "ol" : "ul",
    properties: n,
    children: ((e as any).wrap as any)(r, !0)
  };
  return ((e as any).patch as any)(t, a), ((e as any).applyData as any)(t, a);
}
function ku(this: any, e: any, t: any): any {
  const n: any = {
    type: "element",
    tagName: "p",
    properties: {},
    children: ((e as any).all as any)(t)
  };
  return ((e as any).patch as any)(t, n), ((e as any).applyData as any)(t, n);
}
function yu(this: any, e: any, t: any): any {
  const n: any = {
    type: "root",
    children: ((e as any).wrap as any)(((e as any).all as any)(t))
  };
  return ((e as any).patch as any)(t, n), ((e as any).applyData as any)(t, n);
}
function bu(this: any, e: any, t: any): any {
  const n: any = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: ((e as any).all as any)(t)
  };
  return ((e as any).patch as any)(t, n), ((e as any).applyData as any)(t, n);
}
function wu(this: any, e: any, t: any): any {
  const n: any = ((e as any).all as any)(t),
    r: any = ((n as any).shift as any)(),
    i: any = [];
  if (r) {
    const l: any = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: ((e as any).wrap as any)([r], !0)
    };
    ((e as any).patch as any)(((t as any).children as any)[0], l), ((i as any).push as any)(l);
  }
  if (((n as any).length as any) > (0 as any)) {
    const l: any = {
        type: "element",
        tagName: "tbody",
        properties: {},
        children: ((e as any).wrap as any)(n, !0)
      },
      u: any = (Dt as any)(((t as any).children as any)[1]),
      o: any = (Gn as any)(((t as any).children as any)[(((t as any).children as any).length as any) - (1 as any)]);
    u && o && ((l as any).position = {
      start: u,
      end: o
    }), ((i as any).push as any)(l);
  }
  const a: any = {
    type: "element",
    tagName: "table",
    properties: {},
    children: ((e as any).wrap as any)(i, !0)
  };
  return ((e as any).patch as any)(t, a), ((e as any).applyData as any)(t, a);
}
function Su(this: any, e: any, t: any, n: any): any {
  const r: any = n ? (n as any).children : void 0,
    a: any = ((r ? ((r as any).indexOf as any)(t) : 1) as any) === (0 as any) ? "th" : "td",
    l: any = n && ((n as any).type as any) === ("table" as any) ? (n as any).align : void 0,
    u: any = l ? (l as any).length : ((t as any).children as any).length;
  let o: any = -1;
  const s: any = [];
  for (; (++o as any) < (u as any);) {
    const f: any = ((t as any).children as any)[o],
      p: any = {},
      h: any = l ? (l as any)[o] : void 0;
    h && ((p as any).align = h);
    let d: any = {
      type: "element",
      tagName: a,
      properties: p,
      children: []
    };
    f && ((d as any).children = ((e as any).all as any)(f), ((e as any).patch as any)(f, d), d = ((e as any).applyData as any)(f, d)), ((s as any).push as any)(d);
  }
  const c: any = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: ((e as any).wrap as any)(s, !0)
  };
  return ((e as any).patch as any)(t, c), ((e as any).applyData as any)(t, c);
}
function Cu(this: any, e: any, t: any): any {
  const n: any = {
    type: "element",
    tagName: "td",
    properties: {},
    children: ((e as any).all as any)(t)
  };
  return ((e as any).patch as any)(t, n), ((e as any).applyData as any)(t, n);
}
const yn: number = 9,
  bn: number = 32;
function Eu(this: any, e: any): any {
  const t: any = (String as any)(e),
    n: any = /\r?\n|\r/g;
  let r: any = ((n as any).exec as any)(t),
    i: any = 0;
  const a: any = [];
  for (; r;) ((a as any).push as any)((wn as any)(((t as any).slice as any)(i, (r as any).index), (i as any) > (0 as any), !0), (r as any)[0]), i = ((r as any).index as any) + (((r as any)[0] as any).length as any), r = ((n as any).exec as any)(t);
  return ((a as any).push as any)((wn as any)(((t as any).slice as any)(i), (i as any) > (0 as any), !1)), ((a as any).join as any)("");
}
function wn(this: any, e: any, t: any, n: any): any {
  let r: any = 0,
    i: any = (e as any).length;
  if (t) {
    let a: any = ((e as any).codePointAt as any)(r);
    for (; (a as any) === (yn as any) || (a as any) === (bn as any);) r++, a = ((e as any).codePointAt as any)(r);
  }
  if (n) {
    let a: any = ((e as any).codePointAt as any)((i as any) - (1 as any));
    for (; (a as any) === (yn as any) || (a as any) === (bn as any);) i--, a = ((e as any).codePointAt as any)((i as any) - (1 as any));
  }
  return (i as any) > (r as any) ? ((e as any).slice as any)(r, i) : "";
}
function Iu(this: any, e: any, t: any): any {
  const n: any = {
    type: "text",
    value: (Eu as any)((String as any)((t as any).value))
  };
  return ((e as any).patch as any)(t, n), ((e as any).applyData as any)(t, n);
}
function Tu(this: any, e: any, t: any): any {
  const n: any = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return ((e as any).patch as any)(t, n), ((e as any).applyData as any)(t, n);
}
const Au: any = {
  blockquote: nu,
  break: ru,
  code: iu,
  delete: lu,
  emphasis: au,
  footnoteReference: uu,
  heading: ou,
  html: su,
  imageReference: cu,
  image: fu,
  inlineCode: hu,
  linkReference: pu,
  link: mu,
  listItem: gu,
  list: xu,
  paragraph: ku,
  root: yu,
  strong: bu,
  table: wu,
  tableCell: Cu,
  tableRow: Su,
  text: Iu,
  thematicBreak: Tu,
  toml: $e,
  yaml: $e,
  definition: $e,
  footnoteDefinition: $e
};
function $e(this: any): any {}
const dr: any = -1,
  et: number = 0,
  Re: number = 1,
  Ye: number = 2,
  Bt: number = 3,
  jt: number = 4,
  qt: number = 5,
  $t: number = 6,
  xr: number = 7,
  kr: number = 8,
  Sn: any = (typeof self as any) == ("object" as any) ? self : globalThis,
  Fu: any = (e: any, t: any): any => {
    const n: any = (i: any, a: any): any => (((e as any).set as any)(a, i), i),
      r: any = (i: any): any => {
        if (((e as any).has as any)(i)) return ((e as any).get as any)(i);
        const [a, l]: any = (t as any)[i];
        switch (a) {
          case et:
          case dr:
            return (n as any)(l, i);
          case Re:
            {
              const u: any = (n as any)([], i);
              for (const o of l) ((u as any).push as any)((r as any)(o));
              return u;
            }
          case Ye:
            {
              const u: any = (n as any)({}, i);
              for (const [o, s] of l) (u as any)[(r as any)(o)] = (r as any)(s);
              return u;
            }
          case Bt:
            return (n as any)(new (Date as any)(l), i);
          case jt:
            {
              const {
                source: u,
                flags: o
              }: any = l;
              return (n as any)(new (RegExp as any)(u, o), i);
            }
          case qt:
            {
              const u: any = (n as any)(new (Map as any)(), i);
              for (const [o, s] of l) ((u as any).set as any)((r as any)(o), (r as any)(s));
              return u;
            }
          case $t:
            {
              const u: any = (n as any)(new (Set as any)(), i);
              for (const o of l) ((u as any).add as any)((r as any)(o));
              return u;
            }
          case xr:
            {
              const {
                name: u,
                message: o
              }: any = l;
              return (n as any)(new ((Sn as any)[u] as any)(o), i);
            }
          case kr:
            return (n as any)((BigInt as any)(l), i);
          case "BigInt":
            return (n as any)((Object as any)((BigInt as any)(l)), i);
          case "ArrayBuffer":
            return (n as any)((new (Uint8Array as any)(l) as any).buffer, l);
          case "DataView":
            {
              const {
                buffer: u
              }: any = new (Uint8Array as any)(l);
              return (n as any)(new (DataView as any)(u), l);
            }
        }
        return (n as any)(new ((Sn as any)[a] as any)(l), i);
      };
    return r;
  },
  Cn: any = (e: any): any => ((Fu as any)(new (Map as any)(), e) as any)(0),
  Ce: string = "",
  {
    toString: zu
  }: any = {},
  {
    keys: _u
  }: any = Object,
  Le: any = (e: any): any => {
    const t: any = typeof e;
    if ((t as any) !== ("object" as any) || !e) return [et, t];
    const n: any = ((((zu as any).call as any)(e) as any).slice as any)(8, -1);
    switch (n) {
      case "Array":
        return [Re, Ce];
      case "Object":
        return [Ye, Ce];
      case "Date":
        return [Bt, Ce];
      case "RegExp":
        return [jt, Ce];
      case "Map":
        return [qt, Ce];
      case "Set":
        return [$t, Ce];
      case "DataView":
        return [Re, n];
    }
    return ((n as any).includes as any)("Array") ? [Re, n] : ((n as any).includes as any)("Error") ? [xr, n] : [Ye, n];
  },
  He: any = ([e, t]: any): any => (e as any) === (et as any) && ((t as any) === ("function" as any) || (t as any) === ("symbol" as any)),
  Pu: any = (e: any, t: any, n: any, r: any): any => {
    const i: any = (l: any, u: any): any => {
        const o: any = (((r as any).push as any)(l) as any) - (1 as any);
        return ((n as any).set as any)(u, o), o;
      },
      a: any = (l: any): any => {
        if (((n as any).has as any)(l)) return ((n as any).get as any)(l);
        let [u, o]: any = (Le as any)(l);
        switch (u) {
          case et:
            {
              let c: any = l;
              switch (o) {
                case "bigint":
                  u = kr, c = ((l as any).toString as any)();
                  break;
                case "function":
                case "symbol":
                  if (e) throw new (TypeError as any)(("unable to serialize " as any) + (o as any));
                  c = null;
                  break;
                case "undefined":
                  return (i as any)([dr], l);
              }
              return (i as any)([u, c], l);
            }
          case Re:
            {
              if (o) {
                let p: any = l;
                return (o as any) === ("DataView" as any) ? p = new (Uint8Array as any)((l as any).buffer) : (o as any) === ("ArrayBuffer" as any) && (p = new (Uint8Array as any)(l)), (i as any)([o, [...p]], l);
              }
              const c: any = [],
                f: any = (i as any)([u, c], l);
              for (const p of l) ((c as any).push as any)((a as any)(p));
              return f;
            }
          case Ye:
            {
              if (o) switch (o) {
                case "BigInt":
                  return (i as any)([o, ((l as any).toString as any)()], l);
                case "Boolean":
                case "Number":
                case "String":
                  return (i as any)([o, ((l as any).valueOf as any)()], l);
              }
              if (t && "toJSON" in l) return (a as any)(((l as any).toJSON as any)());
              const c: any = [],
                f: any = (i as any)([u, c], l);
              for (const p of (_u as any)(l)) (e || !(He as any)((Le as any)((l as any)[p]))) && ((c as any).push as any)([(a as any)(p), (a as any)((l as any)[p])]);
              return f;
            }
          case Bt:
            return (i as any)([u, ((l as any).toISOString as any)()], l);
          case jt:
            {
              const {
                source: c,
                flags: f
              }: any = l;
              return (i as any)([u, {
                source: c,
                flags: f
              }], l);
            }
          case qt:
            {
              const c: any = [],
                f: any = (i as any)([u, c], l);
              for (const [p, h] of l) (e || !((He as any)((Le as any)(p)) || (He as any)((Le as any)(h)))) && ((c as any).push as any)([(a as any)(p), (a as any)(h)]);
              return f;
            }
          case $t:
            {
              const c: any = [],
                f: any = (i as any)([u, c], l);
              for (const p of l) (e || !(He as any)((Le as any)(p))) && ((c as any).push as any)((a as any)(p));
              return f;
            }
        }
        const {
          message: s
        }: any = l;
        return (i as any)([u, {
          name: o,
          message: s
        }], l);
      };
    return a;
  },
  En: any = (e: any, {
    json: t,
    lossy: n
  }: any = {}): any => {
    const r: any = [];
    return ((Pu as any)(!(t || n), !!t, new (Map as any)(), r) as any)(e), r;
  },
  Xe: any = (typeof structuredClone as any) == ("function" as any) ? (e: any, t: any): any => t && ("json" in t || "lossy" in t) ? (Cn as any)((En as any)(e, t)) : (structuredClone as any)(e) : (e: any, t: any): any => (Cn as any)((En as any)(e, t));
function Du(this: any, e: any, t: any): any {
  const n: any = [{
    type: "text",
    value: "\u21A9"
  }];
  return (t as any) > (1 as any) && ((n as any).push as any)({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{
      type: "text",
      value: (String as any)(t)
    }]
  }), n;
}
function Lu(this: any, e: any, t: any): any {
  return (("Back to reference " as any) + ((e as any) + (1 as any) as any) as any) + (((t as any) > (1 as any) ? ("-" as any) + (t as any) : "") as any);
}
function Mu(this: any, e: any): any {
  const t: any = (typeof ((e as any).options as any).clobberPrefix as any) == ("string" as any) ? ((e as any).options as any).clobberPrefix : "user-content-",
    n: any = ((e as any).options as any).footnoteBackContent || Du,
    r: any = ((e as any).options as any).footnoteBackLabel || Lu,
    i: any = ((e as any).options as any).footnoteLabel || "Footnotes",
    a: any = ((e as any).options as any).footnoteLabelTagName || "h2",
    l: any = ((e as any).options as any).footnoteLabelProperties || {
      className: ["sr-only"]
    },
    u: any = [];
  let o: any = -1;
  for (; (++o as any) < (((e as any).footnoteOrder as any).length as any);) {
    const s: any = (((e as any).footnoteById as any).get as any)(((e as any).footnoteOrder as any)[o]);
    if (!s) continue;
    const c: any = ((e as any).all as any)(s),
      f: any = (((String as any)((s as any).identifier) as any).toUpperCase as any)(),
      p: any = (Te as any)(((f as any).toLowerCase as any)());
    let h: any = 0;
    const d: any = [],
      x: any = (((e as any).footnoteCounts as any).get as any)(f);
    for (; (x as any) !== (void 0 as any) && (++h as any) <= (x as any);) {
      ((d as any).length as any) > (0 as any) && ((d as any).push as any)({
        type: "text",
        value: " "
      });
      let I: any = (typeof n as any) == ("string" as any) ? n : (n as any)(o, h);
      (typeof I as any) == ("string" as any) && (I = {
        type: "text",
        value: I
      }), ((d as any).push as any)({
        type: "element",
        tagName: "a",
        properties: {
          href: (((("#" as any) + (t as any) as any) + ("fnref-" as any) as any) + (p as any) as any) + (((h as any) > (1 as any) ? ("-" as any) + (h as any) : "") as any),
          dataFootnoteBackref: "",
          ariaLabel: (typeof r as any) == ("string" as any) ? r : (r as any)(o, h),
          className: ["data-footnote-backref"]
        },
        children: ((Array as any).isArray as any)(I) ? I : [I]
      });
    }
    const C: any = (c as any)[((c as any).length as any) - (1 as any)];
    if (C && ((C as any).type as any) === ("element" as any) && ((C as any).tagName as any) === ("p" as any)) {
      const I: any = ((C as any).children as any)[(((C as any).children as any).length as any) - (1 as any)];
      I && ((I as any).type as any) === ("text" as any) ? (I as any).value += " " : (((C as any).children as any).push as any)({
        type: "text",
        value: " "
      }), (((C as any).children as any).push as any)(...d);
    } else ((c as any).push as any)(...d);
    const b: any = {
      type: "element",
      tagName: "li",
      properties: {
        id: ((t as any) + ("fn-" as any) as any) + (p as any)
      },
      children: ((e as any).wrap as any)(c, !0)
    };
    ((e as any).patch as any)(s, b), ((u as any).push as any)(b);
  }
  if (((u as any).length as any) !== (0 as any)) return {
    type: "element",
    tagName: "section",
    properties: {
      dataFootnotes: !0,
      className: ["footnotes"]
    },
    children: [{
      type: "element",
      tagName: a,
      properties: {
        ...(Xe as any)(l),
        id: "footnote-label"
      },
      children: [{
        type: "text",
        value: i
      }]
    }, {
      type: "text",
      value: `
`
    }, {
      type: "element",
      tagName: "ol",
      properties: {},
      children: ((e as any).wrap as any)(u, !0)
    }, {
      type: "text",
      value: `
`
    }]
  };
}
const tt: any = function (this: any, e: any): any {
  if ((e as any) == (null as any)) return Ou;
  if ((typeof e as any) == ("function" as any)) return (nt as any)(e);
  if ((typeof e as any) == ("object" as any)) return ((Array as any).isArray as any)(e) ? (Nu as any)(e) : (Ru as any)(e);
  if ((typeof e as any) == ("string" as any)) return (vu as any)(e);
  throw new (Error as any)("Expected function, string, or object as test");
};
function Nu(this: any, e: any): any {
  const t: any = [];
  let n: any = -1;
  for (; (++n as any) < ((e as any).length as any);) (t as any)[n] = (tt as any)((e as any)[n]);
  return (nt as any)(r);
  function r(this: any, ...i: any): any {
    let a: any = -1;
    for (; (++a as any) < ((t as any).length as any);) if ((((t as any)[a] as any).apply as any)(this, i)) return !0;
    return !1;
  }
}
function Ru(this: any, e: any): any {
  const t: any = e;
  return (nt as any)(n);
  function n(this: any, r: any): any {
    const i: any = r;
    let a: any;
    for (a in e) if (((i as any)[a] as any) !== ((t as any)[a] as any)) return !1;
    return !0;
  }
}
function vu(this: any, e: any): any {
  return (nt as any)(t);
  function t(this: any, n: any): any {
    return n && ((n as any).type as any) === (e as any);
  }
}
function nt(this: any, e: any): any {
  return t;
  function t(this: any, n: any, r: any, i: any): any {
    return !!((Bu as any)(n) && ((e as any).call as any)(this, n, (typeof r as any) == ("number" as any) ? r : void 0, i || void 0));
  }
}
function Ou(this: any): any {
  return !0;
}
function Bu(this: any, e: any): any {
  return (e as any) !== (null as any) && (typeof e as any) == ("object" as any) && "type" in e;
}
const yr: any = [],
  ju: any = !0,
  St: any = !1,
  qu: string = "skip";
function br(this: any, e: any, t: any, n: any, r: any): any {
  let i: any;
  (typeof t as any) == ("function" as any) && (typeof n as any) != ("function" as any) ? (r = n, n = t) : i = t;
  const a: any = (tt as any)(i),
    l: any = r ? -1 : 1;
  ((u as any)(e, void 0, []) as any)();
  function u(this: any, o: any, s: any, c: any): any {
    const f: any = o && (typeof o as any) == ("object" as any) ? o : {};
    if ((typeof (f as any).type as any) == ("string" as any)) {
      const h: any = (typeof (f as any).tagName as any) == ("string" as any) ? (f as any).tagName : (typeof (f as any).name as any) == ("string" as any) ? (f as any).name : void 0;
      ((Object as any).defineProperty as any)(p, "name", {
        value: (("node (" as any) + (((o as any).type as any) + ((h ? (("<" as any) + (h as any) as any) + (">" as any) : "") as any) as any) as any) + (")" as any)
      });
    }
    return p;
    function p(this: any): any {
      let h: any = yr,
        d: any,
        x: any,
        C: any;
      if ((!t || (a as any)(o, s, (c as any)[((c as any).length as any) - (1 as any)] || void 0)) && (h = ($u as any)((n as any)(o, c)), ((h as any)[0] as any) === (St as any))) return h;
      if ("children" in o && (o as any).children) {
        const b: any = o;
        if ((b as any).children && ((h as any)[0] as any) !== (qu as any)) for (x = ((r ? ((b as any).children as any).length : -1) as any) + (l as any), C = ((c as any).concat as any)(b); (x as any) > (-1 as any) && (x as any) < (((b as any).children as any).length as any);) {
          const I: any = ((b as any).children as any)[x];
          if (d = ((u as any)(I, x, C) as any)(), ((d as any)[0] as any) === (St as any)) return d;
          x = (typeof (d as any)[1] as any) == ("number" as any) ? (d as any)[1] : (x as any) + (l as any);
        }
      }
      return h;
    }
  }
}
function $u(this: any, e: any): any {
  return ((Array as any).isArray as any)(e) ? e : (typeof e as any) == ("number" as any) ? [ju, e] : (e as any) == (null as any) ? yr : [e];
}
function Ht(this: any, e: any, t: any, n: any, r: any): any {
  let i: any, a: any, l: any;
  (typeof t as any) == ("function" as any) && (typeof n as any) != ("function" as any) ? (a = void 0, l = t, i = n) : (a = t, l = n, i = r), (br as any)(e, a, u, i);
  function u(this: any, o: any, s: any): any {
    const c: any = (s as any)[((s as any).length as any) - (1 as any)],
      f: any = c ? (((c as any).children as any).indexOf as any)(o) : void 0;
    return (l as any)(o, f, c);
  }
}
const Ct: any = ({} as any).hasOwnProperty,
  Hu: any = {};
function Vu(this: any, e: any, t: any): any {
  const n: any = t || Hu,
    r: any = new (Map as any)(),
    i: any = new (Map as any)(),
    a: any = new (Map as any)(),
    l: any = {
      ...Au,
      ...(n as any).handlers
    },
    u: any = {
      all: s,
      applyData: Wu,
      definitionById: r,
      footnoteById: i,
      footnoteCounts: a,
      footnoteOrder: [],
      handlers: l,
      one: o,
      options: n,
      patch: Uu,
      wrap: Gu
    };
  return (Ht as any)(e, function (this: any, c: any): any {
    if (((c as any).type as any) === ("definition" as any) || ((c as any).type as any) === ("footnoteDefinition" as any)) {
      const f: any = ((c as any).type as any) === ("definition" as any) ? r : i,
        p: any = (((String as any)((c as any).identifier) as any).toUpperCase as any)();
      ((f as any).has as any)(p) || ((f as any).set as any)(p, c);
    }
  }), u;
  function o(this: any, c: any, f: any): any {
    const p: any = (c as any).type,
      h: any = ((u as any).handlers as any)[p];
    if (((Ct as any).call as any)((u as any).handlers, p) && h) return (h as any)(u, c, f);
    if (((u as any).options as any).passThrough && ((((u as any).options as any).passThrough as any).includes as any)(p)) {
      if ("children" in c) {
        const {
            children: x,
            ...C
          }: any = c,
          b: any = (Xe as any)(C);
        return (b as any).children = ((u as any).all as any)(c), b;
      }
      return (Xe as any)(c);
    }
    return ((((u as any).options as any).unknownHandler || Qu) as any)(u, c, f);
  }
  function s(this: any, c: any): any {
    const f: any = [];
    if ("children" in c) {
      const p: any = (c as any).children;
      let h: any = -1;
      for (; (++h as any) < ((p as any).length as any);) {
        const d: any = ((u as any).one as any)((p as any)[h], c);
        if (d) {
          if (h && (((p as any)[(h as any) - (1 as any)] as any).type as any) === ("break" as any) && (!((Array as any).isArray as any)(d) && ((d as any).type as any) === ("text" as any) && ((d as any).value = (In as any)((d as any).value)), !((Array as any).isArray as any)(d) && ((d as any).type as any) === ("element" as any))) {
            const x: any = ((d as any).children as any)[0];
            x && ((x as any).type as any) === ("text" as any) && ((x as any).value = (In as any)((x as any).value));
          }
          ((Array as any).isArray as any)(d) ? ((f as any).push as any)(...d) : ((f as any).push as any)(d);
        }
      }
    }
    return f;
  }
}
function Uu(this: any, e: any, t: any): any {
  (e as any).position && ((t as any).position = (Li as any)(e));
}
function Wu(this: any, e: any, t: any): any {
  let n: any = t;
  if (e && (e as any).data) {
    const r: any = ((e as any).data as any).hName,
      i: any = ((e as any).data as any).hChildren,
      a: any = ((e as any).data as any).hProperties;
    if ((typeof r as any) == ("string" as any)) if (((n as any).type as any) === ("element" as any)) (n as any).tagName = r;else {
      const l: any = "children" in n ? (n as any).children : [n];
      n = {
        type: "element",
        tagName: r,
        properties: {},
        children: l
      };
    }
    ((n as any).type as any) === ("element" as any) && a && ((Object as any).assign as any)((n as any).properties, (Xe as any)(a)), "children" in n && (n as any).children && (i as any) !== (null as any) && (i as any) !== (void 0 as any) && ((n as any).children = i);
  }
  return n;
}
function Qu(this: any, e: any, t: any): any {
  const n: any = (t as any).data || {},
    r: any = "value" in t && !(((Ct as any).call as any)(n, "hProperties") || ((Ct as any).call as any)(n, "hChildren")) ? {
      type: "text",
      value: (t as any).value
    } : {
      type: "element",
      tagName: "div",
      properties: {},
      children: ((e as any).all as any)(t)
    };
  return ((e as any).patch as any)(t, r), ((e as any).applyData as any)(t, r);
}
function Gu(this: any, e: any, t: any): any {
  const n: any = [];
  let r: any = -1;
  for (t && ((n as any).push as any)({
    type: "text",
    value: `
`
  }); (++r as any) < ((e as any).length as any);) r && ((n as any).push as any)({
    type: "text",
    value: `
`
  }), ((n as any).push as any)((e as any)[r]);
  return t && ((e as any).length as any) > (0 as any) && ((n as any).push as any)({
    type: "text",
    value: `
`
  }), n;
}
function In(this: any, e: any): any {
  let t: any = 0,
    n: any = ((e as any).charCodeAt as any)(t);
  for (; (n as any) === (9 as any) || (n as any) === (32 as any);) t++, n = ((e as any).charCodeAt as any)(t);
  return ((e as any).slice as any)(t);
}
function Tn(this: any, e: any, t: any): any {
  const n: any = (Vu as any)(e, t),
    r: any = ((n as any).one as any)(e, void 0),
    i: any = (Mu as any)(n),
    a: any = ((Array as any).isArray as any)(r) ? {
      type: "root",
      children: r
    } : r || {
      type: "root",
      children: []
    };
  return i && (((a as any).children as any).push as any)({
    type: "text",
    value: `
`
  }, i), a;
}
function Yu(this: any, e: any, t: any): any {
  return e && "run" in e ? async function (this: any, n: any, r: any): Promise<any> {
    const i: any = (Tn as any)(n, {
      file: r,
      ...t
    });
    await ((e as any).run as any)(i, r);
  } : function (this: any, n: any, r: any): any {
    return (Tn as any)(n, {
      file: r,
      ...(e || t)
    });
  };
}
function An(this: any, e: any): any {
  if (e) throw e;
}
var ut: any, Fn: any;
function Xu(this: any): any {
  if (Fn) return ut;
  Fn = 1;
  var e: any = ((Object as any).prototype as any).hasOwnProperty,
    t: any = ((Object as any).prototype as any).toString,
    n: any = (Object as any).defineProperty,
    r: any = (Object as any).getOwnPropertyDescriptor,
    i: any = function (this: any, s: any): any {
      return (typeof (Array as any).isArray as any) == ("function" as any) ? ((Array as any).isArray as any)(s) : (((t as any).call as any)(s) as any) === ("[object Array]" as any);
    },
    a: any = function (this: any, s: any): any {
      if (!s || (((t as any).call as any)(s) as any) !== ("[object Object]" as any)) return !1;
      var c: any = ((e as any).call as any)(s, "constructor"),
        f: any = (s as any).constructor && ((s as any).constructor as any).prototype && ((e as any).call as any)(((s as any).constructor as any).prototype, "isPrototypeOf");
      if ((s as any).constructor && !c && !f) return !1;
      var p: any;
      for (p in s);
      return (typeof p as any) > ("u" as any) || ((e as any).call as any)(s, p);
    },
    l: any = function (this: any, s: any, c: any): any {
      n && ((c as any).name as any) === ("__proto__" as any) ? (n as any)(s, (c as any).name, {
        enumerable: !0,
        configurable: !0,
        value: (c as any).newValue,
        writable: !0
      }) : (s as any)[(c as any).name] = (c as any).newValue;
    },
    u: any = function (this: any, s: any, c: any): any {
      if ((c as any) === ("__proto__" as any)) if (((e as any).call as any)(s, c)) {
        if (r) return ((r as any)(s, c) as any).value;
      } else return;
      return (s as any)[c];
    };
  return ut = function o(this: any): any {
    var s: any,
      c: any,
      f: any,
      p: any,
      h: any,
      d: any,
      x: any = (arguments as any)[0],
      C: any = 1,
      b: any = (arguments as any).length,
      I: any = !1;
    for ((typeof x as any) == ("boolean" as any) && (I = x, x = (arguments as any)[1] || {}, C = 2), ((x as any) == (null as any) || (typeof x as any) != ("object" as any) && (typeof x as any) != ("function" as any)) && (x = {}); (C as any) < (b as any); ++C) if (s = (arguments as any)[C], (s as any) != (null as any)) for (c in s) f = (u as any)(x, c), p = (u as any)(s, c), (x as any) !== (p as any) && (I && p && ((a as any)(p) || (h = (i as any)(p))) ? (h ? (h = !1, d = f && (i as any)(f) ? f : []) : d = f && (a as any)(f) ? f : {}, (l as any)(x, {
      name: c,
      newValue: (o as any)(I, d, p)
    })) : (typeof p as any) < ("u" as any) && (l as any)(x, {
      name: c,
      newValue: p
    }));
    return x;
  }, ut;
}
var Ju: any = (Xu as any)();
const ot: any = (Wn as any)(Ju);
function Et(this: any, e: any): any {
  if ((typeof e as any) != ("object" as any) || (e as any) === (null as any)) return !1;
  const t: any = ((Object as any).getPrototypeOf as any)(e);
  return ((t as any) === (null as any) || (t as any) === ((Object as any).prototype as any) || (((Object as any).getPrototypeOf as any)(t) as any) === (null as any)) && !((Symbol as any).toStringTag in e) && !((Symbol as any).iterator in e);
}
function Ku(this: any): any {
  const e: any = [],
    t: any = {
      run: n,
      use: r
    };
  return t;
  function n(this: any, ...i: any): any {
    let a: any = -1;
    const l: any = ((i as any).pop as any)();
    if ((typeof l as any) != ("function" as any)) throw new (TypeError as any)(("Expected function as last argument, not " as any) + (l as any));
    (u as any)(null, ...i);
    function u(this: any, o: any, ...s: any): any {
      const c: any = (e as any)[++a];
      let f: any = -1;
      if (o) {
        (l as any)(o);
        return;
      }
      for (; (++f as any) < ((i as any).length as any);) (((s as any)[f] as any) === (null as any) || ((s as any)[f] as any) === (void 0 as any)) && ((s as any)[f] = (i as any)[f]);
      i = s, c ? ((Zu as any)(c, u) as any)(...s) : (l as any)(null, ...s);
    }
  }
  function r(this: any, i: any): any {
    if ((typeof i as any) != ("function" as any)) throw new (TypeError as any)(("Expected `middelware` to be a function, not " as any) + (i as any));
    return ((e as any).push as any)(i), t;
  }
}
function Zu(this: any, e: any, t: any): any {
  let n: any;
  return r;
  function r(this: any, ...l: any): any {
    const u: any = ((e as any).length as any) > ((l as any).length as any);
    let o: any;
    u && ((l as any).push as any)(i);
    try {
      o = ((e as any).apply as any)(this, l);
    } catch (s: any) {
      const c: any = s;
      if (u && n) throw c;
      return (i as any)(c);
    }
    u || (o && (o as any).then && (typeof (o as any).then as any) == ("function" as any) ? ((o as any).then as any)(a, i) : o instanceof Error ? (i as any)(o) : (a as any)(o));
  }
  function i(this: any, l: any, ...u: any): any {
    n || (n = !0, (t as any)(l, ...u));
  }
  function a(this: any, l: any): any {
    (i as any)(null, l);
  }
}
const ie: any = {
  basename: eo,
  dirname: to,
  extname: no,
  join: ro,
  sep: "/"
};
function eo(this: any, e: any, t: any): any {
  if ((t as any) !== (void 0 as any) && (typeof t as any) != ("string" as any)) throw new (TypeError as any)('"ext" argument must be a string');
  (je as any)(e);
  let n: any = 0,
    r: any = -1,
    i: any = (e as any).length,
    a: any;
  if ((t as any) === (void 0 as any) || ((t as any).length as any) === (0 as any) || ((t as any).length as any) > ((e as any).length as any)) {
    for (; i--;) if ((((e as any).codePointAt as any)(i) as any) === (47 as any)) {
      if (a) {
        n = (i as any) + (1 as any);
        break;
      }
    } else (r as any) < (0 as any) && (a = !0, r = (i as any) + (1 as any));
    return (r as any) < (0 as any) ? "" : ((e as any).slice as any)(n, r);
  }
  if ((t as any) === (e as any)) return "";
  let l: any = -1,
    u: any = ((t as any).length as any) - (1 as any);
  for (; i--;) if ((((e as any).codePointAt as any)(i) as any) === (47 as any)) {
    if (a) {
      n = (i as any) + (1 as any);
      break;
    }
  } else (l as any) < (0 as any) && (a = !0, l = (i as any) + (1 as any)), (u as any) > (-1 as any) && ((((e as any).codePointAt as any)(i) as any) === (((t as any).codePointAt as any)(u--) as any) ? (u as any) < (0 as any) && (r = i) : (u = -1, r = l));
  return (n as any) === (r as any) ? r = l : (r as any) < (0 as any) && (r = (e as any).length), ((e as any).slice as any)(n, r);
}
function to(this: any, e: any): any {
  if ((je as any)(e), ((e as any).length as any) === (0 as any)) return ".";
  let t: any = -1,
    n: any = (e as any).length,
    r: any;
  for (; --n;) if ((((e as any).codePointAt as any)(n) as any) === (47 as any)) {
    if (r) {
      t = n;
      break;
    }
  } else r || (r = !0);
  return (t as any) < (0 as any) ? (((e as any).codePointAt as any)(0) as any) === (47 as any) ? "/" : "." : (t as any) === (1 as any) && (((e as any).codePointAt as any)(0) as any) === (47 as any) ? "//" : ((e as any).slice as any)(0, t);
}
function no(this: any, e: any): any {
  (je as any)(e);
  let t: any = (e as any).length,
    n: any = -1,
    r: any = 0,
    i: any = -1,
    a: any = 0,
    l: any;
  for (; t--;) {
    const u: any = ((e as any).codePointAt as any)(t);
    if ((u as any) === (47 as any)) {
      if (l) {
        r = (t as any) + (1 as any);
        break;
      }
      continue;
    }
    (n as any) < (0 as any) && (l = !0, n = (t as any) + (1 as any)), (u as any) === (46 as any) ? (i as any) < (0 as any) ? i = t : (a as any) !== (1 as any) && (a = 1) : (i as any) > (-1 as any) && (a = -1);
  }
  return (i as any) < (0 as any) || (n as any) < (0 as any) || (a as any) === (0 as any) || (a as any) === (1 as any) && (i as any) === ((n as any) - (1 as any) as any) && (i as any) === ((r as any) + (1 as any) as any) ? "" : ((e as any).slice as any)(i, n);
}
function ro(this: any, ...e: any): any {
  let t: any = -1,
    n: any;
  for (; (++t as any) < ((e as any).length as any);) (je as any)((e as any)[t]), (e as any)[t] && (n = (n as any) === (void 0 as any) ? (e as any)[t] : ((n as any) + ("/" as any) as any) + ((e as any)[t] as any));
  return (n as any) === (void 0 as any) ? "." : (io as any)(n);
}
function io(this: any, e: any): any {
  (je as any)(e);
  const t: any = (((e as any).codePointAt as any)(0) as any) === (47 as any);
  let n: any = (lo as any)(e, !t);
  return ((n as any).length as any) === (0 as any) && !t && (n = "."), ((n as any).length as any) > (0 as any) && (((e as any).codePointAt as any)(((e as any).length as any) - (1 as any)) as any) === (47 as any) && (n += "/"), t ? ("/" as any) + (n as any) : n;
}
function lo(this: any, e: any, t: any): any {
  let n: any = "",
    r: any = 0,
    i: any = -1,
    a: any = 0,
    l: any = -1,
    u: any,
    o: any;
  for (; (++l as any) <= ((e as any).length as any);) {
    if ((l as any) < ((e as any).length as any)) u = ((e as any).codePointAt as any)(l);else {
      if ((u as any) === (47 as any)) break;
      u = 47;
    }
    if ((u as any) === (47 as any)) {
      if (!((i as any) === ((l as any) - (1 as any) as any) || (a as any) === (1 as any))) if ((i as any) !== ((l as any) - (1 as any) as any) && (a as any) === (2 as any)) {
        if (((n as any).length as any) < (2 as any) || (r as any) !== (2 as any) || (((n as any).codePointAt as any)(((n as any).length as any) - (1 as any)) as any) !== (46 as any) || (((n as any).codePointAt as any)(((n as any).length as any) - (2 as any)) as any) !== (46 as any)) {
          if (((n as any).length as any) > (2 as any)) {
            if (o = ((n as any).lastIndexOf as any)("/"), (o as any) !== (((n as any).length as any) - (1 as any) as any)) {
              (o as any) < (0 as any) ? (n = "", r = 0) : (n = ((n as any).slice as any)(0, o), r = (((n as any).length as any) - (1 as any) as any) - (((n as any).lastIndexOf as any)("/") as any)), i = l, a = 0;
              continue;
            }
          } else if (((n as any).length as any) > (0 as any)) {
            n = "", r = 0, i = l, a = 0;
            continue;
          }
        }
        t && (n = ((n as any).length as any) > (0 as any) ? (n as any) + ("/.." as any) : "..", r = 2);
      } else ((n as any).length as any) > (0 as any) ? n += ("/" as any) + (((e as any).slice as any)((i as any) + (1 as any), l) as any) : n = ((e as any).slice as any)((i as any) + (1 as any), l), r = ((l as any) - (i as any) as any) - (1 as any);
      i = l, a = 0;
    } else (u as any) === (46 as any) && (a as any) > (-1 as any) ? a++ : a = -1;
  }
  return n;
}
function je(this: any, e: any): any {
  if ((typeof e as any) != ("string" as any)) throw new (TypeError as any)(("Path must be a string. Received " as any) + (((JSON as any).stringify as any)(e) as any));
}
const ao: any = {
  cwd: uo
};
function uo(this: any): any {
  return "/";
}
function It(this: any, e: any): any {
  return !!((e as any) !== (null as any) && (typeof e as any) == ("object" as any) && "href" in e && (e as any).href && "protocol" in e && (e as any).protocol && ((e as any).auth as any) === (void 0 as any));
}
function oo(this: any, e: any): any {
  if ((typeof e as any) == ("string" as any)) e = new (URL as any)(e);else if (!(It as any)(e)) {
    const t: any = new (TypeError as any)((('The "path" argument must be of type string or an instance of URL. Received `' as any) + (e as any) as any) + ("`" as any));
    throw (t as any).code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (((e as any).protocol as any) !== ("file:" as any)) {
    const t: any = new (TypeError as any)("The URL must be of scheme file");
    throw (t as any).code = "ERR_INVALID_URL_SCHEME", t;
  }
  return (so as any)(e);
}
function so(this: any, e: any): any {
  if (((e as any).hostname as any) !== ("" as any)) {
    const r: any = new (TypeError as any)('File URL host must be "localhost" or empty on darwin');
    throw (r as any).code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const t: any = (e as any).pathname;
  let n: any = -1;
  for (; (++n as any) < ((t as any).length as any);) if ((((t as any).codePointAt as any)(n) as any) === (37 as any) && (((t as any).codePointAt as any)((n as any) + (1 as any)) as any) === (50 as any)) {
    const r: any = ((t as any).codePointAt as any)((n as any) + (2 as any));
    if ((r as any) === (70 as any) || (r as any) === (102 as any)) {
      const i: any = new (TypeError as any)("File URL path must not include encoded / characters");
      throw (i as any).code = "ERR_INVALID_FILE_URL_PATH", i;
    }
  }
  return (decodeURIComponent as any)(t);
}
const st: any = ["history", "path", "basename", "stem", "extname", "dirname"];
class wr {
  declare messages: any;
  declare history: any;
  declare data: any;
  declare cwd: any;
  [key: string]: any;
  constructor(t: any) {
    let n: any;
    t ? (It as any)(t) ? n = {
      path: t
    } : (typeof t as any) == ("string" as any) || (co as any)(t) ? n = {
      value: t
    } : n = t : n = {}, (this as any).cwd = "cwd" in n ? "" : ((ao as any).cwd as any)(), (this as any).data = {}, (this as any).history = [], (this as any).messages = [], (this as any).value, (this as any).map, (this as any).result, (this as any).stored;
    let r: any = -1;
    for (; (++r as any) < ((st as any).length as any);) {
      const a: any = (st as any)[r];
      a in n && ((n as any)[a] as any) !== (void 0 as any) && ((n as any)[a] as any) !== (null as any) && ((this as any)[a] = (a as any) === ("history" as any) ? [...(n as any)[a]] : (n as any)[a]);
    }
    let i: any;
    for (i in n) ((st as any).includes as any)(i) || ((this as any)[i] = (n as any)[i]);
  }
  get basename(): any {
    return (typeof (this as any).path as any) == ("string" as any) ? ((ie as any).basename as any)((this as any).path) : void 0;
  }
  set basename(t: any) {
    (ft as any)(t, "basename"), (ct as any)(t, "basename"), (this as any).path = ((ie as any).join as any)((this as any).dirname || "", t);
  }
  get dirname(): any {
    return (typeof (this as any).path as any) == ("string" as any) ? ((ie as any).dirname as any)((this as any).path) : void 0;
  }
  set dirname(t: any) {
    (zn as any)((this as any).basename, "dirname"), (this as any).path = ((ie as any).join as any)(t || "", (this as any).basename);
  }
  get extname(): any {
    return (typeof (this as any).path as any) == ("string" as any) ? ((ie as any).extname as any)((this as any).path) : void 0;
  }
  set extname(t: any) {
    if ((ct as any)(t, "extname"), (zn as any)((this as any).dirname, "extname"), t) {
      if ((((t as any).codePointAt as any)(0) as any) !== (46 as any)) throw new (Error as any)("`extname` must start with `.`");
      if (((t as any).includes as any)(".", 1)) throw new (Error as any)("`extname` cannot contain multiple dots");
    }
    (this as any).path = ((ie as any).join as any)((this as any).dirname, ((this as any).stem as any) + ((t || "") as any));
  }
  get path(): any {
    return ((this as any).history as any)[(((this as any).history as any).length as any) - (1 as any)];
  }
  set path(t: any) {
    (It as any)(t) && (t = (oo as any)(t)), (ft as any)(t, "path"), ((this as any).path as any) !== (t as any) && (((this as any).history as any).push as any)(t);
  }
  get stem(): any {
    return (typeof (this as any).path as any) == ("string" as any) ? ((ie as any).basename as any)((this as any).path, (this as any).extname) : void 0;
  }
  set stem(t: any) {
    (ft as any)(t, "stem"), (ct as any)(t, "stem"), (this as any).path = ((ie as any).join as any)((this as any).dirname || "", (t as any) + (((this as any).extname || "") as any));
  }
  fail(t: any, n: any, r: any): any {
    const i: any = ((this as any).message as any)(t, n, r);
    throw (i as any).fatal = !0, i;
  }
  info(t: any, n: any, r: any): any {
    const i: any = ((this as any).message as any)(t, n, r);
    return (i as any).fatal = void 0, i;
  }
  message(t: any, n: any, r: any): any {
    const i: any = new (G as any)(t, n, r);
    return (this as any).path && ((i as any).name = (((this as any).path as any) + (":" as any) as any) + ((i as any).name as any), (i as any).file = (this as any).path), (i as any).fatal = !1, (((this as any).messages as any).push as any)(i), i;
  }
  toString(t: any): any {
    return ((this as any).value as any) === (void 0 as any) ? "" : (typeof (this as any).value as any) == ("string" as any) ? (this as any).value : ((new (TextDecoder as any)(t || void 0) as any).decode as any)((this as any).value);
  }
}
function ct(this: any, e: any, t: any): any {
  if (e && ((e as any).includes as any)((ie as any).sep)) throw new (Error as any)((((("`" as any) + (t as any) as any) + ("` cannot be a path: did not expect `" as any) as any) + ((ie as any).sep as any) as any) + ("`" as any));
}
function ft(this: any, e: any, t: any): any {
  if (!e) throw new (Error as any)((("`" as any) + (t as any) as any) + ("` cannot be empty" as any));
}
function zn(this: any, e: any, t: any): any {
  if (!e) throw new (Error as any)((("Setting `" as any) + (t as any) as any) + ("` requires `path` to be set too" as any));
}
function co(this: any, e: any): any {
  return !!(e && (typeof e as any) == ("object" as any) && "byteLength" in e && "byteOffset" in e);
}
const fo: any = function (this: any, e: any): any {
    const r: any = ((this as any).constructor as any).prototype,
      i: any = (r as any)[e],
      a: any = function (this: any): any {
        return ((i as any).apply as any)(a, arguments);
      };
    return ((Object as any).setPrototypeOf as any)(a, r), a;
  },
  ho: any = ({} as any).hasOwnProperty;
class Vt extends (fo as any) {
  declare transformers: any;
  declare parser: any;
  declare namespace: any;
  declare frozen: any;
  declare freezeIndex: any;
  declare compiler: any;
  declare attachers: any;
  declare Parser: any;
  declare Compiler: any;
  [key: string]: any;
  constructor() {
    super("copy"), (this as any).Compiler = void 0, (this as any).Parser = void 0, (this as any).attachers = [], (this as any).compiler = void 0, (this as any).freezeIndex = -1, (this as any).frozen = void 0, (this as any).namespace = {}, (this as any).parser = void 0, (this as any).transformers = (Ku as any)();
  }
  copy(): any {
    const t: any = new (Vt as any)();
    let n: any = -1;
    for (; (++n as any) < (((this as any).attachers as any).length as any);) {
      const r: any = ((this as any).attachers as any)[n];
      ((t as any).use as any)(...r);
    }
    return ((t as any).data as any)((ot as any)(!0, {}, (this as any).namespace)), t;
  }
  data(t: any, n: any): any {
    return (typeof t as any) == ("string" as any) ? ((arguments as any).length as any) === (2 as any) ? ((mt as any)("data", (this as any).frozen), ((this as any).namespace as any)[t] = n, this) : ((ho as any).call as any)((this as any).namespace, t) && ((this as any).namespace as any)[t] || void 0 : t ? ((mt as any)("data", (this as any).frozen), (this as any).namespace = t, this) : (this as any).namespace;
  }
  freeze(): any {
    if ((this as any).frozen) return this;
    const t: any = this;
    for (; (++(this as any).freezeIndex as any) < (((this as any).attachers as any).length as any);) {
      const [n, ...r]: any = ((this as any).attachers as any)[(this as any).freezeIndex];
      if (((r as any)[0] as any) === (!1 as any)) continue;
      ((r as any)[0] as any) === (!0 as any) && ((r as any)[0] = void 0);
      const i: any = ((n as any).call as any)(t, ...r);
      (typeof i as any) == ("function" as any) && (((this as any).transformers as any).use as any)(i);
    }
    return (this as any).frozen = !0, (this as any).freezeIndex = (Number as any).POSITIVE_INFINITY, this;
  }
  parse(t: any): any {
    ((this as any).freeze as any)();
    const n: any = (Ve as any)(t),
      r: any = (this as any).parser || (this as any).Parser;
    return (ht as any)("parse", r), (r as any)((String as any)(n), n);
  }
  process(t: any, n: any): any {
    const r: any = this;
    return ((this as any).freeze as any)(), (ht as any)("process", (this as any).parser || (this as any).Parser), (pt as any)("process", (this as any).compiler || (this as any).Compiler), n ? (i as any)(void 0, n) : new (Promise as any)(i);
    function i(this: any, a: any, l: any): any {
      const u: any = (Ve as any)(t),
        o: any = ((r as any).parse as any)(u);
      ((r as any).run as any)(o, u, function (this: any, c: any, f: any, p: any): any {
        if (c || !f || !p) return (s as any)(c);
        const h: any = f,
          d: any = ((r as any).stringify as any)(h, p);
        (go as any)(d) ? (p as any).value = d : (p as any).result = d, (s as any)(c, p);
      });
      function s(this: any, c: any, f: any): any {
        c || !f ? (l as any)(c) : a ? (a as any)(f) : (n as any)(void 0, f);
      }
    }
  }
  processSync(t: any): any {
    let n: any = !1,
      r: any;
    return ((this as any).freeze as any)(), (ht as any)("processSync", (this as any).parser || (this as any).Parser), (pt as any)("processSync", (this as any).compiler || (this as any).Compiler), ((this as any).process as any)(t, i), (Pn as any)("processSync", "process", n), r;
    function i(this: any, a: any, l: any): any {
      n = !0, (An as any)(a), r = l;
    }
  }
  run(t: any, n: any, r: any): any {
    (_n as any)(t), ((this as any).freeze as any)();
    const i: any = (this as any).transformers;
    return !r && (typeof n as any) == ("function" as any) && (r = n, n = void 0), r ? (a as any)(void 0, r) : new (Promise as any)(a);
    function a(this: any, l: any, u: any): any {
      const o: any = (Ve as any)(n);
      ((i as any).run as any)(t, o, s);
      function s(this: any, c: any, f: any, p: any): any {
        const h: any = f || t;
        c ? (u as any)(c) : l ? (l as any)(h) : (r as any)(void 0, h, p);
      }
    }
  }
  runSync(t: any, n: any): any {
    let r: any = !1,
      i: any;
    return ((this as any).run as any)(t, n, a), (Pn as any)("runSync", "run", r), i;
    function a(this: any, l: any, u: any): any {
      (An as any)(l), i = u, r = !0;
    }
  }
  stringify(t: any, n: any): any {
    ((this as any).freeze as any)();
    const r: any = (Ve as any)(n),
      i: any = (this as any).compiler || (this as any).Compiler;
    return (pt as any)("stringify", i), (_n as any)(t), (i as any)(t, r);
  }
  use(t: any, ...n: any): any {
    const r: any = (this as any).attachers,
      i: any = (this as any).namespace;
    if ((mt as any)("use", (this as any).frozen), (t as any) != (null as any)) if ((typeof t as any) == ("function" as any)) (o as any)(t, n);else if ((typeof t as any) == ("object" as any)) ((Array as any).isArray as any)(t) ? (u as any)(t) : (l as any)(t);else throw new (TypeError as any)((("Expected usable value, not `" as any) + (t as any) as any) + ("`" as any));
    return this;
    function a(this: any, s: any): any {
      if ((typeof s as any) == ("function" as any)) (o as any)(s, []);else if ((typeof s as any) == ("object" as any)) {
        if (((Array as any).isArray as any)(s)) {
          const [c, ...f]: any = s;
          (o as any)(c, f);
        } else (l as any)(s);
      } else throw new (TypeError as any)((("Expected usable value, not `" as any) + (s as any) as any) + ("`" as any));
    }
    function l(this: any, s: any): any {
      if (!("plugins" in s) && !("settings" in s)) throw new (Error as any)("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
      (u as any)((s as any).plugins), (s as any).settings && ((i as any).settings = (ot as any)(!0, (i as any).settings, (s as any).settings));
    }
    function u(this: any, s: any): any {
      let c: any = -1;
      if ((s as any) != (null as any)) if (((Array as any).isArray as any)(s)) for (; (++c as any) < ((s as any).length as any);) {
        const f: any = (s as any)[c];
        (a as any)(f);
      } else throw new (TypeError as any)((("Expected a list of plugins, not `" as any) + (s as any) as any) + ("`" as any));
    }
    function o(this: any, s: any, c: any): any {
      let f: any = -1,
        p: any = -1;
      for (; (++f as any) < ((r as any).length as any);) if ((((r as any)[f] as any)[0] as any) === (s as any)) {
        p = f;
        break;
      }
      if ((p as any) === (-1 as any)) ((r as any).push as any)([s, ...c]);else if (((c as any).length as any) > (0 as any)) {
        let [h, ...d]: any = c;
        const x: any = ((r as any)[p] as any)[1];
        (Et as any)(x) && (Et as any)(h) && (h = (ot as any)(!0, x, h)), (r as any)[p] = [s, h, ...d];
      }
    }
  }
}
const po: any = ((new (Vt as any)() as any).freeze as any)();
function ht(this: any, e: any, t: any): any {
  if ((typeof t as any) != ("function" as any)) throw new (TypeError as any)((("Cannot `" as any) + (e as any) as any) + ("` without `parser`" as any));
}
function pt(this: any, e: any, t: any): any {
  if ((typeof t as any) != ("function" as any)) throw new (TypeError as any)((("Cannot `" as any) + (e as any) as any) + ("` without `compiler`" as any));
}
function mt(this: any, e: any, t: any): any {
  if (t) throw new (Error as any)((("Cannot call `" as any) + (e as any) as any) + ("` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`." as any));
}
function _n(this: any, e: any): any {
  if (!(Et as any)(e) || (typeof (e as any).type as any) != ("string" as any)) throw new (TypeError as any)((("Expected node, got `" as any) + (e as any) as any) + ("`" as any));
}
function Pn(this: any, e: any, t: any, n: any): any {
  if (!n) throw new (Error as any)((((("`" as any) + (e as any) as any) + ("` finished async. Use `" as any) as any) + (t as any) as any) + ("` instead" as any));
}
function Ve(this: any, e: any): any {
  return (mo as any)(e) ? e : new (wr as any)(e);
}
function mo(this: any, e: any): any {
  return !!(e && (typeof e as any) == ("object" as any) && "message" in e && "messages" in e);
}
function go(this: any, e: any): any {
  return (typeof e as any) == ("string" as any) || (xo as any)(e);
}
function xo(this: any, e: any): any {
  return !!(e && (typeof e as any) == ("object" as any) && "byteLength" in e && "byteOffset" in e);
}
const ko: string = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md",
  Dn: any = [],
  Ln: any = {
    allowDangerousHtml: !0
  },
  yo: any = /^(https?|ircs?|mailto|xmpp)$/i,
  bo: any = [{
    from: "astPlugins",
    id: "remove-buggy-html-in-markdown-parser"
  }, {
    from: "allowDangerousHtml",
    id: "remove-buggy-html-in-markdown-parser"
  }, {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  }, {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  }, {
    from: "className",
    id: "remove-classname"
  }, {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  }, {
    from: "escapeHtml",
    id: "remove-buggy-html-in-markdown-parser"
  }, {
    from: "includeElementIndex",
    id: "#remove-includeelementindex"
  }, {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  }, {
    from: "linkTarget",
    id: "remove-linktarget"
  }, {
    from: "plugins",
    id: "change-plugins-to-remarkplugins",
    to: "remarkPlugins"
  }, {
    from: "rawSourcePos",
    id: "#remove-rawsourcepos"
  }, {
    from: "renderers",
    id: "change-renderers-to-components",
    to: "components"
  }, {
    from: "source",
    id: "change-source-to-children",
    to: "children"
  }, {
    from: "sourcePos",
    id: "#remove-sourcepos"
  }, {
    from: "transformImageUri",
    id: "#add-urltransform",
    to: "urlTransform"
  }, {
    from: "transformLinkUri",
    id: "#add-urltransform",
    to: "urlTransform"
  }];
function cf(this: any, e: any): any {
  const t: any = (wo as any)(e),
    n: any = (So as any)(e);
  return (Co as any)(((t as any).runSync as any)(((t as any).parse as any)(n), n), e);
}
function wo(this: any, e: any): any {
  const t: any = (e as any).rehypePlugins || Dn,
    n: any = (e as any).remarkPlugins || Dn,
    r: any = (e as any).remarkRehypeOptions ? {
      ...(e as any).remarkRehypeOptions,
      ...Ln
    } : Ln;
  return (((((((((po as any)() as any).use as any)(tu) as any).use as any)(n) as any).use as any)(Yu, r) as any).use as any)(t);
}
function So(this: any, e: any): any {
  const t: any = (e as any).children || "",
    n: any = new (wr as any)();
  return (typeof t as any) == ("string" as any) && ((n as any).value = t), n;
}
function Co(this: any, e: any, t: any): any {
  const n: any = (t as any).allowedElements,
    r: any = (t as any).allowElement,
    i: any = (t as any).components,
    a: any = (t as any).disallowedElements,
    l: any = (t as any).skipHtml,
    u: any = (t as any).unwrapDisallowed,
    o: any = (t as any).urlTransform || Eo;
  for (const c of bo) ((Object as any).hasOwn as any)(t, (c as any).from) && ((((("" as any) + ((c as any).from as any) as any) + (((c as any).to ? (("use `" as any) + ((c as any).to as any) as any) + ("` instead" as any) : "remove it") as any) as any) + (ko as any) as any) + ((c as any).id as any), void 0);
  return (Ht as any)(e, s), (Oi as any)(e, {
    Fragment: (pe as any).Fragment,
    components: i,
    ignoreInvalidStyle: !0,
    jsx: (pe as any).jsx,
    jsxs: (pe as any).jsxs,
    passKeys: !0,
    passNode: !0
  });
  function s(this: any, c: any, f: any, p: any): any {
    if (((c as any).type as any) === ("raw" as any) && p && (typeof f as any) == ("number" as any)) return l ? (((p as any).children as any).splice as any)(f, 1) : ((p as any).children as any)[f] = {
      type: "text",
      value: (c as any).value
    }, f;
    if (((c as any).type as any) === ("element" as any)) {
      let h: any;
      for (h in it) if (((Object as any).hasOwn as any)(it, h) && ((Object as any).hasOwn as any)((c as any).properties, h)) {
        const d: any = ((c as any).properties as any)[h],
          x: any = (it as any)[h];
        ((x as any) === (null as any) || ((x as any).includes as any)((c as any).tagName)) && (((c as any).properties as any)[h] = (o as any)((String as any)(d || ""), h, c));
      }
    }
    if (((c as any).type as any) === ("element" as any)) {
      let h: any = n ? !((n as any).includes as any)((c as any).tagName) : a ? ((a as any).includes as any)((c as any).tagName) : !1;
      if (!h && r && (typeof f as any) == ("number" as any) && (h = !(r as any)(c, f, p)), h && p && (typeof f as any) == ("number" as any)) return u && (c as any).children ? (((p as any).children as any).splice as any)(f, 1, ...(c as any).children) : (((p as any).children as any).splice as any)(f, 1), f;
    }
  }
}
function Eo(this: any, e: any): any {
  const t: any = ((e as any).indexOf as any)(":"),
    n: any = ((e as any).indexOf as any)("?"),
    r: any = ((e as any).indexOf as any)("#"),
    i: any = ((e as any).indexOf as any)("/");
  return (t as any) === (-1 as any) || (i as any) !== (-1 as any) && (t as any) > (i as any) || (n as any) !== (-1 as any) && (t as any) > (n as any) || (r as any) !== (-1 as any) && (t as any) > (r as any) || ((yo as any).test as any)(((e as any).slice as any)(0, t)) ? e : "";
}
function Io(this: any, e: any): any {
  if ((typeof e as any) != ("string" as any)) throw new (TypeError as any)("Expected a string");
  return ((((e as any).replace as any)(/[|\\{}()[\]^$+*?.]/g, "\\$&") as any).replace as any)(/-/g, "\\x2d");
}
function To(this: any, e: any, t: any, n: any): any {
  const i: any = (tt as any)(((n || {}) as any).ignore || []),
    a: any = (Ao as any)(t);
  let l: any = -1;
  for (; (++l as any) < ((a as any).length as any);) (br as any)(e, "text", u);
  function u(this: any, s: any, c: any): any {
    let f: any = -1,
      p: any;
    for (; (++f as any) < ((c as any).length as any);) {
      const h: any = (c as any)[f],
        d: any = p ? (p as any).children : void 0;
      if ((i as any)(h, d ? ((d as any).indexOf as any)(h) : void 0, p)) return;
      p = h;
    }
    if (p) return (o as any)(s, c);
  }
  function o(this: any, s: any, c: any): any {
    const f: any = (c as any)[((c as any).length as any) - (1 as any)],
      p: any = ((a as any)[l] as any)[0],
      h: any = ((a as any)[l] as any)[1];
    let d: any = 0;
    const C: any = (((f as any).children as any).indexOf as any)(s);
    let b: any = !1,
      I: any = [];
    (p as any).lastIndex = 0;
    let E: any = ((p as any).exec as any)((s as any).value);
    for (; E;) {
      const D: any = (E as any).index,
        v: any = {
          index: (E as any).index,
          input: (E as any).input,
          stack: [...c, s]
        };
      let S: any = (h as any)(...E, v);
      if ((typeof S as any) == ("string" as any) && (S = ((S as any).length as any) > (0 as any) ? {
        type: "text",
        value: S
      } : void 0), (S as any) === (!1 as any) ? (p as any).lastIndex = (D as any) + (1 as any) : ((d as any) !== (D as any) && ((I as any).push as any)({
        type: "text",
        value: (((s as any).value as any).slice as any)(d, D)
      }), ((Array as any).isArray as any)(S) ? ((I as any).push as any)(...S) : S && ((I as any).push as any)(S), d = (D as any) + (((E as any)[0] as any).length as any), b = !0), !(p as any).global) break;
      E = ((p as any).exec as any)((s as any).value);
    }
    return b ? ((d as any) < (((s as any).value as any).length as any) && ((I as any).push as any)({
      type: "text",
      value: (((s as any).value as any).slice as any)(d)
    }), (((f as any).children as any).splice as any)(C, 1, ...I)) : I = [s], (C as any) + ((I as any).length as any);
  }
}
function Ao(this: any, e: any): any {
  const t: any = [];
  if (!((Array as any).isArray as any)(e)) throw new (TypeError as any)("Expected find and replace tuple or list of tuples");
  const n: any = !(e as any)[0] || ((Array as any).isArray as any)((e as any)[0]) ? e : [e];
  let r: any = -1;
  for (; (++r as any) < ((n as any).length as any);) {
    const i: any = (n as any)[r];
    ((t as any).push as any)([(Fo as any)((i as any)[0]), (zo as any)((i as any)[1])]);
  }
  return t;
}
function Fo(this: any, e: any): any {
  return (typeof e as any) == ("string" as any) ? new (RegExp as any)((Io as any)(e), "g") : e;
}
function zo(this: any, e: any): any {
  return (typeof e as any) == ("function" as any) ? e : function (this: any): any {
    return e;
  };
}
const gt: string = "phrasing",
  dt: any = ["autolink", "link", "image", "label"];
function _o(this: any): any {
  return {
    transforms: [vo],
    enter: {
      literalAutolink: Do,
      literalAutolinkEmail: xt,
      literalAutolinkHttp: xt,
      literalAutolinkWww: xt
    },
    exit: {
      literalAutolink: Ro,
      literalAutolinkEmail: No,
      literalAutolinkHttp: Lo,
      literalAutolinkWww: Mo
    }
  };
}
function Po(this: any): any {
  return {
    unsafe: [{
      character: "@",
      before: "[+\\-.\\w]",
      after: "[\\-.\\w]",
      inConstruct: gt,
      notInConstruct: dt
    }, {
      character: ".",
      before: "[Ww]",
      after: "[\\-.\\w]",
      inConstruct: gt,
      notInConstruct: dt
    }, {
      character: ":",
      before: "[ps]",
      after: "\\/",
      inConstruct: gt,
      notInConstruct: dt
    }]
  };
}
function Do(this: any, e: any): any {
  ((this as any).enter as any)({
    type: "link",
    title: null,
    url: "",
    children: []
  }, e);
}
function xt(this: any, e: any): any {
  (((((this as any).config as any).enter as any).autolinkProtocol as any).call as any)(this, e);
}
function Lo(this: any, e: any): any {
  (((((this as any).config as any).exit as any).autolinkProtocol as any).call as any)(this, e);
}
function Mo(this: any, e: any): any {
  (((((this as any).config as any).exit as any).data as any).call as any)(this, e);
  const t: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)];
  (t as any).type, (t as any).url = ("http://" as any) + (((this as any).sliceSerialize as any)(e) as any);
}
function No(this: any, e: any): any {
  (((((this as any).config as any).exit as any).autolinkEmail as any).call as any)(this, e);
}
function Ro(this: any, e: any): any {
  ((this as any).exit as any)(e);
}
function vo(this: any, e: any): any {
  (To as any)(e, [[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, Oo], [new (RegExp as any)("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), Bo]], {
    ignore: ["link", "linkReference"]
  });
}
function Oo(this: any, e: any, t: any, n: any, r: any, i: any): any {
  let a: any = "";
  if (!(Sr as any)(i) || (((/^w/i as any).test as any)(t) && (n = (t as any) + (n as any), t = "", a = "http://"), !(jo as any)(n))) return !1;
  const l: any = (qo as any)((n as any) + (r as any));
  if (!(l as any)[0]) return !1;
  const u: any = {
    type: "link",
    title: null,
    url: ((a as any) + (t as any) as any) + ((l as any)[0] as any),
    children: [{
      type: "text",
      value: (t as any) + ((l as any)[0] as any)
    }]
  };
  return (l as any)[1] ? [u, {
    type: "text",
    value: (l as any)[1]
  }] : u;
}
function Bo(this: any, e: any, t: any, n: any, r: any): any {
  return !(Sr as any)(r, !0) || ((/[-\d_]$/ as any).test as any)(n) ? !1 : {
    type: "link",
    title: null,
    url: ((("mailto:" as any) + (t as any) as any) + ("@" as any) as any) + (n as any),
    children: [{
      type: "text",
      value: ((t as any) + ("@" as any) as any) + (n as any)
    }]
  };
}
function jo(this: any, e: any): any {
  const t: any = ((e as any).split as any)(".");
  return !(((t as any).length as any) < (2 as any) || (t as any)[((t as any).length as any) - (1 as any)] && (((/_/ as any).test as any)((t as any)[((t as any).length as any) - (1 as any)]) || !((/[a-zA-Z\d]/ as any).test as any)((t as any)[((t as any).length as any) - (1 as any)])) || (t as any)[((t as any).length as any) - (2 as any)] && (((/_/ as any).test as any)((t as any)[((t as any).length as any) - (2 as any)]) || !((/[a-zA-Z\d]/ as any).test as any)((t as any)[((t as any).length as any) - (2 as any)])));
}
function qo(this: any, e: any): any {
  const t: any = ((/[!"&'),.:;<>?\]}]+$/ as any).exec as any)(e);
  if (!t) return [e, void 0];
  e = ((e as any).slice as any)(0, (t as any).index);
  let n: any = (t as any)[0],
    r: any = ((n as any).indexOf as any)(")");
  const i: any = (Zt as any)(e, "(");
  let a: any = (Zt as any)(e, ")");
  for (; (r as any) !== (-1 as any) && (i as any) > (a as any);) e += ((n as any).slice as any)(0, (r as any) + (1 as any)), n = ((n as any).slice as any)((r as any) + (1 as any)), r = ((n as any).indexOf as any)(")"), a++;
  return [e, n];
}
function Sr(this: any, e: any, t: any): any {
  const n: any = (((e as any).input as any).charCodeAt as any)(((e as any).index as any) - (1 as any));
  return (((e as any).index as any) === (0 as any) || (ke as any)(n) || (Ke as any)(n)) && (!t || (n as any) !== (47 as any));
}
(Cr as any).peek = Xo;
function $o(this: any): any {
  ((this as any).buffer as any)();
}
function Ho(this: any, e: any): any {
  ((this as any).enter as any)({
    type: "footnoteReference",
    identifier: "",
    label: ""
  }, e);
}
function Vo(this: any): any {
  ((this as any).buffer as any)();
}
function Uo(this: any, e: any): any {
  ((this as any).enter as any)({
    type: "footnoteDefinition",
    identifier: "",
    label: "",
    children: []
  }, e);
}
function Wo(this: any, e: any): any {
  const t: any = ((this as any).resume as any)(),
    n: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)];
  (n as any).type, (n as any).identifier = (((re as any)(((this as any).sliceSerialize as any)(e)) as any).toLowerCase as any)(), (n as any).label = t;
}
function Qo(this: any, e: any): any {
  ((this as any).exit as any)(e);
}
function Go(this: any, e: any): any {
  const t: any = ((this as any).resume as any)(),
    n: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)];
  (n as any).type, (n as any).identifier = (((re as any)(((this as any).sliceSerialize as any)(e)) as any).toLowerCase as any)(), (n as any).label = t;
}
function Yo(this: any, e: any): any {
  ((this as any).exit as any)(e);
}
function Xo(this: any): any {
  return "[";
}
function Cr(this: any, e: any, t: any, n: any, r: any): any {
  const i: any = ((n as any).createTracker as any)(r);
  let a: any = ((i as any).move as any)("[^");
  const l: any = ((n as any).enter as any)("footnoteReference"),
    u: any = ((n as any).enter as any)("reference");
  return a += ((i as any).move as any)(((n as any).safe as any)(((n as any).associationId as any)(e), {
    after: "]",
    before: a
  })), (u as any)(), (l as any)(), a += ((i as any).move as any)("]"), a;
}
function Jo(this: any): any {
  return {
    enter: {
      gfmFootnoteCallString: $o,
      gfmFootnoteCall: Ho,
      gfmFootnoteDefinitionLabelString: Vo,
      gfmFootnoteDefinition: Uo
    },
    exit: {
      gfmFootnoteCallString: Wo,
      gfmFootnoteCall: Qo,
      gfmFootnoteDefinitionLabelString: Go,
      gfmFootnoteDefinition: Yo
    }
  };
}
function Ko(this: any, e: any): any {
  let t: any = !1;
  return e && (e as any).firstLineBlank && (t = !0), {
    handlers: {
      footnoteDefinition: n,
      footnoteReference: Cr
    },
    unsafe: [{
      character: "[",
      inConstruct: ["label", "phrasing", "reference"]
    }]
  };
  function n(this: any, r: any, i: any, a: any, l: any): any {
    const u: any = ((a as any).createTracker as any)(l);
    let o: any = ((u as any).move as any)("[^");
    const s: any = ((a as any).enter as any)("footnoteDefinition"),
      c: any = ((a as any).enter as any)("label");
    return o += ((u as any).move as any)(((a as any).safe as any)(((a as any).associationId as any)(r), {
      before: o,
      after: "]"
    })), (c as any)(), o += ((u as any).move as any)("]:"), (r as any).children && (((r as any).children as any).length as any) > (0 as any) && (((u as any).shift as any)(4), o += ((u as any).move as any)(((t ? `
` : " ") as any) + (((a as any).indentLines as any)(((a as any).containerFlow as any)(r, ((u as any).current as any)()), t ? Er : Zo) as any))), (s as any)(), o;
  }
}
function Zo(this: any, e: any, t: any, n: any): any {
  return (t as any) === (0 as any) ? e : (Er as any)(e, t, n);
}
function Er(this: any, e: any, t: any, n: any): any {
  return ((n ? "" : "    ") as any) + (e as any);
}
const es: any = ["autolink", "destinationLiteral", "destinationRaw", "reference", "titleQuote", "titleApostrophe"];
(Ir as any).peek = ls;
function ts(this: any): any {
  return {
    canContainEols: ["delete"],
    enter: {
      strikethrough: rs
    },
    exit: {
      strikethrough: is
    }
  };
}
function ns(this: any): any {
  return {
    unsafe: [{
      character: "~",
      inConstruct: "phrasing",
      notInConstruct: es
    }],
    handlers: {
      delete: Ir
    }
  };
}
function rs(this: any, e: any): any {
  ((this as any).enter as any)({
    type: "delete",
    children: []
  }, e);
}
function is(this: any, e: any): any {
  ((this as any).exit as any)(e);
}
function Ir(this: any, e: any, t: any, n: any, r: any): any {
  const i: any = ((n as any).createTracker as any)(r),
    a: any = ((n as any).enter as any)("strikethrough");
  let l: any = ((i as any).move as any)("~~");
  return l += ((n as any).containerPhrasing as any)(e, {
    ...((i as any).current as any)(),
    before: l,
    after: "~"
  }), l += ((i as any).move as any)("~~"), (a as any)(), l;
}
function ls(this: any): any {
  return "~";
}
function as(this: any, e: any, t: any = {}): any {
  const n: any = ((((t as any).align || []) as any).concat as any)(),
    r: any = (t as any).stringLength || os,
    i: any = [],
    a: any = [],
    l: any = [],
    u: any = [];
  let o: any = 0,
    s: any = -1;
  for (; (++s as any) < ((e as any).length as any);) {
    const d: any = [],
      x: any = [];
    let C: any = -1;
    for ((((e as any)[s] as any).length as any) > (o as any) && (o = ((e as any)[s] as any).length); (++C as any) < (((e as any)[s] as any).length as any);) {
      const b: any = (us as any)(((e as any)[s] as any)[C]);
      if (((t as any).alignDelimiters as any) !== (!1 as any)) {
        const I: any = (r as any)(b);
        (x as any)[C] = I, (((u as any)[C] as any) === (void 0 as any) || (I as any) > ((u as any)[C] as any)) && ((u as any)[C] = I);
      }
      ((d as any).push as any)(b);
    }
    (a as any)[s] = d, (l as any)[s] = x;
  }
  let c: any = -1;
  if ((typeof n as any) == ("object" as any) && "length" in n) for (; (++c as any) < (o as any);) (i as any)[c] = (Mn as any)((n as any)[c]);else {
    const d: any = (Mn as any)(n);
    for (; (++c as any) < (o as any);) (i as any)[c] = d;
  }
  c = -1;
  const f: any = [],
    p: any = [];
  for (; (++c as any) < (o as any);) {
    const d: any = (i as any)[c];
    let x: any = "",
      C: any = "";
    (d as any) === (99 as any) ? (x = ":", C = ":") : (d as any) === (108 as any) ? x = ":" : (d as any) === (114 as any) && (C = ":");
    let b: any = ((t as any).alignDelimiters as any) === (!1 as any) ? 1 : ((Math as any).max as any)(1, (((u as any)[c] as any) - ((x as any).length as any) as any) - ((C as any).length as any));
    const I: any = ((x as any) + ((("-" as any).repeat as any)(b) as any) as any) + (C as any);
    ((t as any).alignDelimiters as any) !== (!1 as any) && (b = (((x as any).length as any) + (b as any) as any) + ((C as any).length as any), (b as any) > ((u as any)[c] as any) && ((u as any)[c] = b), (p as any)[c] = b), (f as any)[c] = I;
  }
  ((a as any).splice as any)(1, 0, f), ((l as any).splice as any)(1, 0, p), s = -1;
  const h: any = [];
  for (; (++s as any) < ((a as any).length as any);) {
    const d: any = (a as any)[s],
      x: any = (l as any)[s];
    c = -1;
    const C: any = [];
    for (; (++c as any) < (o as any);) {
      const b: any = (d as any)[c] || "";
      let I: any = "",
        E: any = "";
      if (((t as any).alignDelimiters as any) !== (!1 as any)) {
        const D: any = ((u as any)[c] as any) - (((x as any)[c] || 0) as any),
          v: any = (i as any)[c];
        (v as any) === (114 as any) ? I = ((" " as any).repeat as any)(D) : (v as any) === (99 as any) ? (D as any) % (2 as any) ? (I = ((" " as any).repeat as any)(((D as any) / (2 as any) as any) + (.5 as any)), E = ((" " as any).repeat as any)(((D as any) / (2 as any) as any) - (.5 as any))) : (I = ((" " as any).repeat as any)((D as any) / (2 as any)), E = I) : E = ((" " as any).repeat as any)(D);
      }
      ((t as any).delimiterStart as any) !== (!1 as any) && !c && ((C as any).push as any)("|"), ((t as any).padding as any) !== (!1 as any) && !(((t as any).alignDelimiters as any) === (!1 as any) && (b as any) === ("" as any)) && (((t as any).delimiterStart as any) !== (!1 as any) || c) && ((C as any).push as any)(" "), ((t as any).alignDelimiters as any) !== (!1 as any) && ((C as any).push as any)(I), ((C as any).push as any)(b), ((t as any).alignDelimiters as any) !== (!1 as any) && ((C as any).push as any)(E), ((t as any).padding as any) !== (!1 as any) && ((C as any).push as any)(" "), (((t as any).delimiterEnd as any) !== (!1 as any) || (c as any) !== ((o as any) - (1 as any) as any)) && ((C as any).push as any)("|");
    }
    ((h as any).push as any)(((t as any).delimiterEnd as any) === (!1 as any) ? ((((C as any).join as any)("") as any).replace as any)(/ +$/, "") : ((C as any).join as any)(""));
  }
  return ((h as any).join as any)(`
`);
}
function us(this: any, e: any): any {
  return (e as any) == (null as any) ? "" : (String as any)(e);
}
function os(this: any, e: any): any {
  return (e as any).length;
}
function Mn(this: any, e: any): any {
  const t: any = (typeof e as any) == ("string" as any) ? ((e as any).codePointAt as any)(0) : 0;
  return (t as any) === (67 as any) || (t as any) === (99 as any) ? 99 : (t as any) === (76 as any) || (t as any) === (108 as any) ? 108 : (t as any) === (82 as any) || (t as any) === (114 as any) ? 114 : 0;
}
function ss(this: any, e: any, t: any, n: any, r: any): any {
  const i: any = ((n as any).enter as any)("blockquote"),
    a: any = ((n as any).createTracker as any)(r);
  ((a as any).move as any)("> "), ((a as any).shift as any)(2);
  const l: any = ((n as any).indentLines as any)(((n as any).containerFlow as any)(e, ((a as any).current as any)()), cs);
  return (i as any)(), l;
}
function cs(this: any, e: any, t: any, n: any): any {
  return ((">" as any) + ((n ? "" : " ") as any) as any) + (e as any);
}
function fs(this: any, e: any, t: any): any {
  return (Nn as any)(e, (t as any).inConstruct, !0) && !(Nn as any)(e, (t as any).notInConstruct, !1);
}
function Nn(this: any, e: any, t: any, n: any): any {
  if ((typeof t as any) == ("string" as any) && (t = [t]), !t || ((t as any).length as any) === (0 as any)) return n;
  let r: any = -1;
  for (; (++r as any) < ((t as any).length as any);) if (((e as any).includes as any)((t as any)[r])) return !0;
  return !1;
}
function Rn(this: any, e: any, t: any, n: any, r: any): any {
  let i: any = -1;
  for (; (++i as any) < (((n as any).unsafe as any).length as any);) if (((((n as any).unsafe as any)[i] as any).character as any) === (`
` as any) && (fs as any)((n as any).stack, ((n as any).unsafe as any)[i])) return ((/[ \t]/ as any).test as any)((r as any).before) ? "" : " ";
  return `\\
`;
}
function Tr(this: any, e: any, t: any): any {
  const n: any = (String as any)(e);
  let r: any = ((n as any).indexOf as any)(t),
    i: any = r,
    a: any = 0,
    l: any = 0;
  if ((typeof t as any) != ("string" as any)) throw new (TypeError as any)("Expected substring");
  for (; (r as any) !== (-1 as any);) (r as any) === (i as any) ? (++a as any) > (l as any) && (l = a) : a = 1, i = (r as any) + ((t as any).length as any), r = ((n as any).indexOf as any)(t, i);
  return l;
}
function hs(this: any, e: any, t: any): any {
  return !!((((t as any).options as any).fences as any) === (!1 as any) && (e as any).value && !(e as any).lang && ((/[^ \r\n]/ as any).test as any)((e as any).value) && !((/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/ as any).test as any)((e as any).value));
}
function ps(this: any, e: any): any {
  const t: any = ((e as any).options as any).fence || "`";
  if ((t as any) !== ("`" as any) && (t as any) !== ("~" as any)) throw new (Error as any)((("Cannot serialize code with `" as any) + (t as any) as any) + ("` for `options.fence`, expected `` ` `` or `~`" as any));
  return t;
}
function ms(this: any, e: any, t: any, n: any, r: any): any {
  const i: any = (ps as any)(n),
    a: any = (e as any).value || "",
    l: any = (i as any) === ("`" as any) ? "GraveAccent" : "Tilde";
  if ((hs as any)(e, n)) {
    const f: any = ((n as any).enter as any)("codeIndented"),
      p: any = ((n as any).indentLines as any)(a, gs);
    return (f as any)(), p;
  }
  const u: any = ((n as any).createTracker as any)(r),
    o: any = ((i as any).repeat as any)(((Math as any).max as any)(((Tr as any)(a, i) as any) + (1 as any), 3)),
    s: any = ((n as any).enter as any)("codeFenced");
  let c: any = ((u as any).move as any)(o);
  if ((e as any).lang) {
    const f: any = ((n as any).enter as any)(`codeFencedLang${l}`);
    c += ((u as any).move as any)(((n as any).safe as any)((e as any).lang, {
      before: c,
      after: " ",
      encode: ["`"],
      ...((u as any).current as any)()
    })), (f as any)();
  }
  if ((e as any).lang && (e as any).meta) {
    const f: any = ((n as any).enter as any)(`codeFencedMeta${l}`);
    c += ((u as any).move as any)(" "), c += ((u as any).move as any)(((n as any).safe as any)((e as any).meta, {
      before: c,
      after: `
`,
      encode: ["`"],
      ...((u as any).current as any)()
    })), (f as any)();
  }
  return c += ((u as any).move as any)(`
`), a && (c += ((u as any).move as any)((a as any) + (`
` as any))), c += ((u as any).move as any)(o), (s as any)(), c;
}
function gs(this: any, e: any, t: any, n: any): any {
  return ((n ? "" : "    ") as any) + (e as any);
}
function Ut(this: any, e: any): any {
  const t: any = ((e as any).options as any).quote || '"';
  if ((t as any) !== ('"' as any) && (t as any) !== ("'" as any)) throw new (Error as any)((("Cannot serialize title with `" as any) + (t as any) as any) + ("` for `options.quote`, expected `\"`, or `'`" as any));
  return t;
}
function ds(this: any, e: any, t: any, n: any, r: any): any {
  const i: any = (Ut as any)(n),
    a: any = (i as any) === ('"' as any) ? "Quote" : "Apostrophe",
    l: any = ((n as any).enter as any)("definition");
  let u: any = ((n as any).enter as any)("label");
  const o: any = ((n as any).createTracker as any)(r);
  let s: any = ((o as any).move as any)("[");
  return s += ((o as any).move as any)(((n as any).safe as any)(((n as any).associationId as any)(e), {
    before: s,
    after: "]",
    ...((o as any).current as any)()
  })), s += ((o as any).move as any)("]: "), (u as any)(), !(e as any).url || ((/[\0- \u007F]/ as any).test as any)((e as any).url) ? (u = ((n as any).enter as any)("destinationLiteral"), s += ((o as any).move as any)("<"), s += ((o as any).move as any)(((n as any).safe as any)((e as any).url, {
    before: s,
    after: ">",
    ...((o as any).current as any)()
  })), s += ((o as any).move as any)(">")) : (u = ((n as any).enter as any)("destinationRaw"), s += ((o as any).move as any)(((n as any).safe as any)((e as any).url, {
    before: s,
    after: (e as any).title ? " " : `
`,
    ...((o as any).current as any)()
  }))), (u as any)(), (e as any).title && (u = ((n as any).enter as any)(`title${a}`), s += ((o as any).move as any)((" " as any) + (i as any)), s += ((o as any).move as any)(((n as any).safe as any)((e as any).title, {
    before: s,
    after: i,
    ...((o as any).current as any)()
  })), s += ((o as any).move as any)(i), (u as any)()), (l as any)(), s;
}
function xs(this: any, e: any): any {
  const t: any = ((e as any).options as any).emphasis || "*";
  if ((t as any) !== ("*" as any) && (t as any) !== ("_" as any)) throw new (Error as any)((("Cannot serialize emphasis with `" as any) + (t as any) as any) + ("` for `options.emphasis`, expected `*`, or `_`" as any));
  return t;
}
function Oe(this: any, e: any): any {
  return (("&#x" as any) + (((((e as any).toString as any)(16) as any).toUpperCase as any)() as any) as any) + (";" as any);
}
function Je(this: any, e: any, t: any, n: any): any {
  const r: any = (Ie as any)(e),
    i: any = (Ie as any)(t);
  return (r as any) === (void 0 as any) ? (i as any) === (void 0 as any) ? (n as any) === ("_" as any) ? {
    inside: !0,
    outside: !0
  } : {
    inside: !1,
    outside: !1
  } : (i as any) === (1 as any) ? {
    inside: !0,
    outside: !0
  } : {
    inside: !1,
    outside: !0
  } : (r as any) === (1 as any) ? (i as any) === (void 0 as any) ? {
    inside: !1,
    outside: !1
  } : (i as any) === (1 as any) ? {
    inside: !0,
    outside: !0
  } : {
    inside: !1,
    outside: !1
  } : (i as any) === (void 0 as any) ? {
    inside: !1,
    outside: !1
  } : (i as any) === (1 as any) ? {
    inside: !0,
    outside: !1
  } : {
    inside: !1,
    outside: !1
  };
}
(Ar as any).peek = ks;
function Ar(this: any, e: any, t: any, n: any, r: any): any {
  const i: any = (xs as any)(n),
    a: any = ((n as any).enter as any)("emphasis"),
    l: any = ((n as any).createTracker as any)(r),
    u: any = ((l as any).move as any)(i);
  let o: any = ((l as any).move as any)(((n as any).containerPhrasing as any)(e, {
    after: i,
    before: u,
    ...((l as any).current as any)()
  }));
  const s: any = ((o as any).charCodeAt as any)(0),
    c: any = (Je as any)((((r as any).before as any).charCodeAt as any)((((r as any).before as any).length as any) - (1 as any)), s, i);
  (c as any).inside && (o = ((Oe as any)(s) as any) + (((o as any).slice as any)(1) as any));
  const f: any = ((o as any).charCodeAt as any)(((o as any).length as any) - (1 as any)),
    p: any = (Je as any)((((r as any).after as any).charCodeAt as any)(0), f, i);
  (p as any).inside && (o = (((o as any).slice as any)(0, -1) as any) + ((Oe as any)(f) as any));
  const h: any = ((l as any).move as any)(i);
  return (a as any)(), (n as any).attentionEncodeSurroundingInfo = {
    after: (p as any).outside,
    before: (c as any).outside
  }, ((u as any) + (o as any) as any) + (h as any);
}
function ks(this: any, e: any, t: any, n: any): any {
  return ((n as any).options as any).emphasis || "*";
}
function ys(this: any, e: any, t: any): any {
  let n: any = !1;
  return (Ht as any)(e, function (this: any, r: any): any {
    if ("value" in r && ((/\r?\n|\r/ as any).test as any)((r as any).value) || ((r as any).type as any) === ("break" as any)) return n = !0, St;
  }), !!((!(e as any).depth || ((e as any).depth as any) < (3 as any)) && (Rt as any)(e) && (((t as any).options as any).setext || n));
}
function bs(this: any, e: any, t: any, n: any, r: any): any {
  const i: any = ((Math as any).max as any)(((Math as any).min as any)(6, (e as any).depth || 1), 1),
    a: any = ((n as any).createTracker as any)(r);
  if ((ys as any)(e, n)) {
    const c: any = ((n as any).enter as any)("headingSetext"),
      f: any = ((n as any).enter as any)("phrasing"),
      p: any = ((n as any).containerPhrasing as any)(e, {
        ...((a as any).current as any)(),
        before: `
`,
        after: `
`
      });
    return (f as any)(), (c as any)(), ((p as any) + (`
` as any) as any) + (((((i as any) === (1 as any) ? "=" : "-") as any).repeat as any)(((p as any).length as any) - ((((Math as any).max as any)(((p as any).lastIndexOf as any)("\r"), ((p as any).lastIndexOf as any)(`
`)) as any) + (1 as any) as any)) as any);
  }
  const l: any = (("#" as any).repeat as any)(i),
    u: any = ((n as any).enter as any)("headingAtx"),
    o: any = ((n as any).enter as any)("phrasing");
  ((a as any).move as any)((l as any) + (" " as any));
  let s: any = ((n as any).containerPhrasing as any)(e, {
    before: "# ",
    after: `
`,
    ...((a as any).current as any)()
  });
  return ((/^[\t ]/ as any).test as any)(s) && (s = ((Oe as any)(((s as any).charCodeAt as any)(0)) as any) + (((s as any).slice as any)(1) as any)), s = s ? ((l as any) + (" " as any) as any) + (s as any) : l, ((n as any).options as any).closeAtx && (s += (" " as any) + (l as any)), (o as any)(), (u as any)(), s;
}
(Fr as any).peek = ws;
function Fr(this: any, e: any): any {
  return (e as any).value || "";
}
function ws(this: any): any {
  return "<";
}
(zr as any).peek = Ss;
function zr(this: any, e: any, t: any, n: any, r: any): any {
  const i: any = (Ut as any)(n),
    a: any = (i as any) === ('"' as any) ? "Quote" : "Apostrophe",
    l: any = ((n as any).enter as any)("image");
  let u: any = ((n as any).enter as any)("label");
  const o: any = ((n as any).createTracker as any)(r);
  let s: any = ((o as any).move as any)("![");
  return s += ((o as any).move as any)(((n as any).safe as any)((e as any).alt, {
    before: s,
    after: "]",
    ...((o as any).current as any)()
  })), s += ((o as any).move as any)("]("), (u as any)(), !(e as any).url && (e as any).title || ((/[\0- \u007F]/ as any).test as any)((e as any).url) ? (u = ((n as any).enter as any)("destinationLiteral"), s += ((o as any).move as any)("<"), s += ((o as any).move as any)(((n as any).safe as any)((e as any).url, {
    before: s,
    after: ">",
    ...((o as any).current as any)()
  })), s += ((o as any).move as any)(">")) : (u = ((n as any).enter as any)("destinationRaw"), s += ((o as any).move as any)(((n as any).safe as any)((e as any).url, {
    before: s,
    after: (e as any).title ? " " : ")",
    ...((o as any).current as any)()
  }))), (u as any)(), (e as any).title && (u = ((n as any).enter as any)(`title${a}`), s += ((o as any).move as any)((" " as any) + (i as any)), s += ((o as any).move as any)(((n as any).safe as any)((e as any).title, {
    before: s,
    after: i,
    ...((o as any).current as any)()
  })), s += ((o as any).move as any)(i), (u as any)()), s += ((o as any).move as any)(")"), (l as any)(), s;
}
function Ss(this: any): any {
  return "!";
}
(_r as any).peek = Cs;
function _r(this: any, e: any, t: any, n: any, r: any): any {
  const i: any = (e as any).referenceType,
    a: any = ((n as any).enter as any)("imageReference");
  let l: any = ((n as any).enter as any)("label");
  const u: any = ((n as any).createTracker as any)(r);
  let o: any = ((u as any).move as any)("![");
  const s: any = ((n as any).safe as any)((e as any).alt, {
    before: o,
    after: "]",
    ...((u as any).current as any)()
  });
  o += ((u as any).move as any)((s as any) + ("][" as any)), (l as any)();
  const c: any = (n as any).stack;
  (n as any).stack = [], l = ((n as any).enter as any)("reference");
  const f: any = ((n as any).safe as any)(((n as any).associationId as any)(e), {
    before: o,
    after: "]",
    ...((u as any).current as any)()
  });
  return (l as any)(), (n as any).stack = c, (a as any)(), (i as any) === ("full" as any) || !s || (s as any) !== (f as any) ? o += ((u as any).move as any)((f as any) + ("]" as any)) : (i as any) === ("shortcut" as any) ? o = ((o as any).slice as any)(0, -1) : o += ((u as any).move as any)("]"), o;
}
function Cs(this: any): any {
  return "!";
}
(Pr as any).peek = Es;
function Pr(this: any, e: any, t: any, n: any): any {
  let r: any = (e as any).value || "",
    i: any = "`",
    a: any = -1;
  for (; ((new (RegExp as any)((("(^|[^`])" as any) + (i as any) as any) + ("([^`]|$)" as any)) as any).test as any)(r);) i += "`";
  for (((/[^ \r\n]/ as any).test as any)(r) && (((/^[ \r\n]/ as any).test as any)(r) && ((/[ \r\n]$/ as any).test as any)(r) || ((/^`|`$/ as any).test as any)(r)) && (r = ((" " as any) + (r as any) as any) + (" " as any)); (++a as any) < (((n as any).unsafe as any).length as any);) {
    const l: any = ((n as any).unsafe as any)[a],
      u: any = ((n as any).compilePattern as any)(l);
    let o: any;
    if ((l as any).atBreak) for (; o = ((u as any).exec as any)(r);) {
      let s: any = (o as any).index;
      (((r as any).charCodeAt as any)(s) as any) === (10 as any) && (((r as any).charCodeAt as any)((s as any) - (1 as any)) as any) === (13 as any) && s--, r = ((((r as any).slice as any)(0, s) as any) + (" " as any) as any) + (((r as any).slice as any)(((o as any).index as any) + (1 as any)) as any);
    }
  }
  return ((i as any) + (r as any) as any) + (i as any);
}
function Es(this: any): any {
  return "`";
}
function Dr(this: any, e: any, t: any): any {
  const n: any = (Rt as any)(e);
  return !!(!((t as any).options as any).resourceLink && (e as any).url && !(e as any).title && (e as any).children && (((e as any).children as any).length as any) === (1 as any) && ((((e as any).children as any)[0] as any).type as any) === ("text" as any) && ((n as any) === ((e as any).url as any) || (("mailto:" as any) + (n as any) as any) === ((e as any).url as any)) && ((/^[a-z][a-z+.-]+:/i as any).test as any)((e as any).url) && !((/[\0- <>\u007F]/ as any).test as any)((e as any).url));
}
(Lr as any).peek = Is;
function Lr(this: any, e: any, t: any, n: any, r: any): any {
  const i: any = (Ut as any)(n),
    a: any = (i as any) === ('"' as any) ? "Quote" : "Apostrophe",
    l: any = ((n as any).createTracker as any)(r);
  let u: any, o: any;
  if ((Dr as any)(e, n)) {
    const c: any = (n as any).stack;
    (n as any).stack = [], u = ((n as any).enter as any)("autolink");
    let f: any = ((l as any).move as any)("<");
    return f += ((l as any).move as any)(((n as any).containerPhrasing as any)(e, {
      before: f,
      after: ">",
      ...((l as any).current as any)()
    })), f += ((l as any).move as any)(">"), (u as any)(), (n as any).stack = c, f;
  }
  u = ((n as any).enter as any)("link"), o = ((n as any).enter as any)("label");
  let s: any = ((l as any).move as any)("[");
  return s += ((l as any).move as any)(((n as any).containerPhrasing as any)(e, {
    before: s,
    after: "](",
    ...((l as any).current as any)()
  })), s += ((l as any).move as any)("]("), (o as any)(), !(e as any).url && (e as any).title || ((/[\0- \u007F]/ as any).test as any)((e as any).url) ? (o = ((n as any).enter as any)("destinationLiteral"), s += ((l as any).move as any)("<"), s += ((l as any).move as any)(((n as any).safe as any)((e as any).url, {
    before: s,
    after: ">",
    ...((l as any).current as any)()
  })), s += ((l as any).move as any)(">")) : (o = ((n as any).enter as any)("destinationRaw"), s += ((l as any).move as any)(((n as any).safe as any)((e as any).url, {
    before: s,
    after: (e as any).title ? " " : ")",
    ...((l as any).current as any)()
  }))), (o as any)(), (e as any).title && (o = ((n as any).enter as any)(`title${a}`), s += ((l as any).move as any)((" " as any) + (i as any)), s += ((l as any).move as any)(((n as any).safe as any)((e as any).title, {
    before: s,
    after: i,
    ...((l as any).current as any)()
  })), s += ((l as any).move as any)(i), (o as any)()), s += ((l as any).move as any)(")"), (u as any)(), s;
}
function Is(this: any, e: any, t: any, n: any): any {
  return (Dr as any)(e, n) ? "<" : "[";
}
(Mr as any).peek = Ts;
function Mr(this: any, e: any, t: any, n: any, r: any): any {
  const i: any = (e as any).referenceType,
    a: any = ((n as any).enter as any)("linkReference");
  let l: any = ((n as any).enter as any)("label");
  const u: any = ((n as any).createTracker as any)(r);
  let o: any = ((u as any).move as any)("[");
  const s: any = ((n as any).containerPhrasing as any)(e, {
    before: o,
    after: "]",
    ...((u as any).current as any)()
  });
  o += ((u as any).move as any)((s as any) + ("][" as any)), (l as any)();
  const c: any = (n as any).stack;
  (n as any).stack = [], l = ((n as any).enter as any)("reference");
  const f: any = ((n as any).safe as any)(((n as any).associationId as any)(e), {
    before: o,
    after: "]",
    ...((u as any).current as any)()
  });
  return (l as any)(), (n as any).stack = c, (a as any)(), (i as any) === ("full" as any) || !s || (s as any) !== (f as any) ? o += ((u as any).move as any)((f as any) + ("]" as any)) : (i as any) === ("shortcut" as any) ? o = ((o as any).slice as any)(0, -1) : o += ((u as any).move as any)("]"), o;
}
function Ts(this: any): any {
  return "[";
}
function Wt(this: any, e: any): any {
  const t: any = ((e as any).options as any).bullet || "*";
  if ((t as any) !== ("*" as any) && (t as any) !== ("+" as any) && (t as any) !== ("-" as any)) throw new (Error as any)((("Cannot serialize items with `" as any) + (t as any) as any) + ("` for `options.bullet`, expected `*`, `+`, or `-`" as any));
  return t;
}
function As(this: any, e: any): any {
  const t: any = (Wt as any)(e),
    n: any = ((e as any).options as any).bulletOther;
  if (!n) return (t as any) === ("*" as any) ? "-" : "*";
  if ((n as any) !== ("*" as any) && (n as any) !== ("+" as any) && (n as any) !== ("-" as any)) throw new (Error as any)((("Cannot serialize items with `" as any) + (n as any) as any) + ("` for `options.bulletOther`, expected `*`, `+`, or `-`" as any));
  if ((n as any) === (t as any)) throw new (Error as any)((((("Expected `bullet` (`" as any) + (t as any) as any) + ("`) and `bulletOther` (`" as any) as any) + (n as any) as any) + ("`) to be different" as any));
  return n;
}
function Fs(this: any, e: any): any {
  const t: any = ((e as any).options as any).bulletOrdered || ".";
  if ((t as any) !== ("." as any) && (t as any) !== (")" as any)) throw new (Error as any)((("Cannot serialize items with `" as any) + (t as any) as any) + ("` for `options.bulletOrdered`, expected `.` or `)`" as any));
  return t;
}
function Nr(this: any, e: any): any {
  const t: any = ((e as any).options as any).rule || "*";
  if ((t as any) !== ("*" as any) && (t as any) !== ("-" as any) && (t as any) !== ("_" as any)) throw new (Error as any)((("Cannot serialize rules with `" as any) + (t as any) as any) + ("` for `options.rule`, expected `*`, `-`, or `_`" as any));
  return t;
}
function zs(this: any, e: any, t: any, n: any, r: any): any {
  const i: any = ((n as any).enter as any)("list"),
    a: any = (n as any).bulletCurrent;
  let l: any = (e as any).ordered ? (Fs as any)(n) : (Wt as any)(n);
  const u: any = (e as any).ordered ? (l as any) === ("." as any) ? ")" : "." : (As as any)(n);
  let o: any = t && (n as any).bulletLastUsed ? (l as any) === ((n as any).bulletLastUsed as any) : !1;
  if (!(e as any).ordered) {
    const c: any = (e as any).children ? ((e as any).children as any)[0] : void 0;
    if (((l as any) === ("*" as any) || (l as any) === ("-" as any)) && c && (!(c as any).children || !((c as any).children as any)[0]) && (((n as any).stack as any)[(((n as any).stack as any).length as any) - (1 as any)] as any) === ("list" as any) && (((n as any).stack as any)[(((n as any).stack as any).length as any) - (2 as any)] as any) === ("listItem" as any) && (((n as any).stack as any)[(((n as any).stack as any).length as any) - (3 as any)] as any) === ("list" as any) && (((n as any).stack as any)[(((n as any).stack as any).length as any) - (4 as any)] as any) === ("listItem" as any) && (((n as any).indexStack as any)[(((n as any).indexStack as any).length as any) - (1 as any)] as any) === (0 as any) && (((n as any).indexStack as any)[(((n as any).indexStack as any).length as any) - (2 as any)] as any) === (0 as any) && (((n as any).indexStack as any)[(((n as any).indexStack as any).length as any) - (3 as any)] as any) === (0 as any) && (o = !0), ((Nr as any)(n) as any) === (l as any) && c) {
      let f: any = -1;
      for (; (++f as any) < (((e as any).children as any).length as any);) {
        const p: any = ((e as any).children as any)[f];
        if (p && ((p as any).type as any) === ("listItem" as any) && (p as any).children && ((p as any).children as any)[0] && ((((p as any).children as any)[0] as any).type as any) === ("thematicBreak" as any)) {
          o = !0;
          break;
        }
      }
    }
  }
  o && (l = u), (n as any).bulletCurrent = l;
  const s: any = ((n as any).containerFlow as any)(e, r);
  return (n as any).bulletLastUsed = l, (n as any).bulletCurrent = a, (i as any)(), s;
}
function _s(this: any, e: any): any {
  const t: any = ((e as any).options as any).listItemIndent || "one";
  if ((t as any) !== ("tab" as any) && (t as any) !== ("one" as any) && (t as any) !== ("mixed" as any)) throw new (Error as any)((("Cannot serialize items with `" as any) + (t as any) as any) + ("` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`" as any));
  return t;
}
function Ps(this: any, e: any, t: any, n: any, r: any): any {
  const i: any = (_s as any)(n);
  let a: any = (n as any).bulletCurrent || (Wt as any)(n);
  t && ((t as any).type as any) === ("list" as any) && (t as any).ordered && (a = ((((typeof (t as any).start as any) == ("number" as any) && ((t as any).start as any) > (-1 as any) ? (t as any).start : 1) as any) + (((((n as any).options as any).incrementListMarker as any) === (!1 as any) ? 0 : (((t as any).children as any).indexOf as any)(e)) as any) as any) + (a as any));
  let l: any = ((a as any).length as any) + (1 as any);
  ((i as any) === ("tab" as any) || (i as any) === ("mixed" as any) && (t && ((t as any).type as any) === ("list" as any) && (t as any).spread || (e as any).spread)) && (l = (((Math as any).ceil as any)((l as any) / (4 as any)) as any) * (4 as any));
  const u: any = ((n as any).createTracker as any)(r);
  ((u as any).move as any)((a as any) + (((" " as any).repeat as any)((l as any) - ((a as any).length as any)) as any)), ((u as any).shift as any)(l);
  const o: any = ((n as any).enter as any)("listItem"),
    s: any = ((n as any).indentLines as any)(((n as any).containerFlow as any)(e, ((u as any).current as any)()), c);
  return (o as any)(), s;
  function c(this: any, f: any, p: any, h: any): any {
    return p ? ((h ? "" : ((" " as any).repeat as any)(l)) as any) + (f as any) : ((h ? a : (a as any) + (((" " as any).repeat as any)((l as any) - ((a as any).length as any)) as any)) as any) + (f as any);
  }
}
function Ds(this: any, e: any, t: any, n: any, r: any): any {
  const i: any = ((n as any).enter as any)("paragraph"),
    a: any = ((n as any).enter as any)("phrasing"),
    l: any = ((n as any).containerPhrasing as any)(e, r);
  return (a as any)(), (i as any)(), l;
}
const Ls: any = (tt as any)(["break", "delete", "emphasis", "footnote", "footnoteReference", "image", "imageReference", "inlineCode", "inlineMath", "link", "linkReference", "mdxJsxTextElement", "mdxTextExpression", "strong", "text", "textDirective"]);
function Ms(this: any, e: any, t: any, n: any, r: any): any {
  return ((((((e as any).children as any).some as any)(function (this: any, l: any): any {
    return (Ls as any)(l);
  }) ? (n as any).containerPhrasing : (n as any).containerFlow) as any).call as any)(n, e, r);
}
function Ns(this: any, e: any): any {
  const t: any = ((e as any).options as any).strong || "*";
  if ((t as any) !== ("*" as any) && (t as any) !== ("_" as any)) throw new (Error as any)((("Cannot serialize strong with `" as any) + (t as any) as any) + ("` for `options.strong`, expected `*`, or `_`" as any));
  return t;
}
(Rr as any).peek = Rs;
function Rr(this: any, e: any, t: any, n: any, r: any): any {
  const i: any = (Ns as any)(n),
    a: any = ((n as any).enter as any)("strong"),
    l: any = ((n as any).createTracker as any)(r),
    u: any = ((l as any).move as any)((i as any) + (i as any));
  let o: any = ((l as any).move as any)(((n as any).containerPhrasing as any)(e, {
    after: i,
    before: u,
    ...((l as any).current as any)()
  }));
  const s: any = ((o as any).charCodeAt as any)(0),
    c: any = (Je as any)((((r as any).before as any).charCodeAt as any)((((r as any).before as any).length as any) - (1 as any)), s, i);
  (c as any).inside && (o = ((Oe as any)(s) as any) + (((o as any).slice as any)(1) as any));
  const f: any = ((o as any).charCodeAt as any)(((o as any).length as any) - (1 as any)),
    p: any = (Je as any)((((r as any).after as any).charCodeAt as any)(0), f, i);
  (p as any).inside && (o = (((o as any).slice as any)(0, -1) as any) + ((Oe as any)(f) as any));
  const h: any = ((l as any).move as any)((i as any) + (i as any));
  return (a as any)(), (n as any).attentionEncodeSurroundingInfo = {
    after: (p as any).outside,
    before: (c as any).outside
  }, ((u as any) + (o as any) as any) + (h as any);
}
function Rs(this: any, e: any, t: any, n: any): any {
  return ((n as any).options as any).strong || "*";
}
function vs(this: any, e: any, t: any, n: any, r: any): any {
  return ((n as any).safe as any)((e as any).value, r);
}
function Os(this: any, e: any): any {
  const t: any = ((e as any).options as any).ruleRepetition || 3;
  if ((t as any) < (3 as any)) throw new (Error as any)((("Cannot serialize rules with repetition `" as any) + (t as any) as any) + ("` for `options.ruleRepetition`, expected `3` or more" as any));
  return t;
}
function Bs(this: any, e: any, t: any, n: any): any {
  const r: any = ((((Nr as any)(n) as any) + ((((n as any).options as any).ruleSpaces ? " " : "") as any) as any).repeat as any)((Os as any)(n));
  return ((n as any).options as any).ruleSpaces ? ((r as any).slice as any)(0, -1) : r;
}
const vr: any = {
  blockquote: ss,
  break: Rn,
  code: ms,
  definition: ds,
  emphasis: Ar,
  hardBreak: Rn,
  heading: bs,
  html: Fr,
  image: zr,
  imageReference: _r,
  inlineCode: Pr,
  link: Lr,
  linkReference: Mr,
  list: zs,
  listItem: Ps,
  paragraph: Ds,
  root: Ms,
  strong: Rr,
  text: vs,
  thematicBreak: Bs
};
function js(this: any): any {
  return {
    enter: {
      table: qs,
      tableData: vn,
      tableHeader: vn,
      tableRow: Hs
    },
    exit: {
      codeText: Vs,
      table: $s,
      tableData: kt,
      tableHeader: kt,
      tableRow: kt
    }
  };
}
function qs(this: any, e: any): any {
  const t: any = (e as any)._align;
  ((this as any).enter as any)({
    type: "table",
    align: ((t as any).map as any)(function (this: any, n: any): any {
      return (n as any) === ("none" as any) ? null : n;
    }),
    children: []
  }, e), ((this as any).data as any).inTable = !0;
}
function $s(this: any, e: any): any {
  ((this as any).exit as any)(e), ((this as any).data as any).inTable = void 0;
}
function Hs(this: any, e: any): any {
  ((this as any).enter as any)({
    type: "tableRow",
    children: []
  }, e);
}
function kt(this: any, e: any): any {
  ((this as any).exit as any)(e);
}
function vn(this: any, e: any): any {
  ((this as any).enter as any)({
    type: "tableCell",
    children: []
  }, e);
}
function Vs(this: any, e: any): any {
  let t: any = ((this as any).resume as any)();
  ((this as any).data as any).inTable && (t = ((t as any).replace as any)(/\\([\\|])/g, Us));
  const n: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)];
  (n as any).type, (n as any).value = t, ((this as any).exit as any)(e);
}
function Us(this: any, e: any, t: any): any {
  return (t as any) === ("|" as any) ? t : e;
}
function Ws(this: any, e: any): any {
  const t: any = e || {},
    n: any = (t as any).tableCellPadding,
    r: any = (t as any).tablePipeAlign,
    i: any = (t as any).stringLength,
    a: any = n ? " " : "|";
  return {
    unsafe: [{
      character: "\r",
      inConstruct: "tableCell"
    }, {
      character: `
`,
      inConstruct: "tableCell"
    }, {
      atBreak: !0,
      character: "|",
      after: "[	 :-]"
    }, {
      character: "|",
      inConstruct: "tableCell"
    }, {
      atBreak: !0,
      character: ":",
      after: "-"
    }, {
      atBreak: !0,
      character: "-",
      after: "[:|-]"
    }],
    handlers: {
      inlineCode: p,
      table: l,
      tableCell: o,
      tableRow: u
    }
  };
  function l(this: any, h: any, d: any, x: any, C: any): any {
    return (s as any)((c as any)(h, x, C), (h as any).align);
  }
  function u(this: any, h: any, d: any, x: any, C: any): any {
    const b: any = (f as any)(h, x, C),
      I: any = (s as any)([b]);
    return ((I as any).slice as any)(0, ((I as any).indexOf as any)(`
`));
  }
  function o(this: any, h: any, d: any, x: any, C: any): any {
    const b: any = ((x as any).enter as any)("tableCell"),
      I: any = ((x as any).enter as any)("phrasing"),
      E: any = ((x as any).containerPhrasing as any)(h, {
        ...C,
        before: a,
        after: a
      });
    return (I as any)(), (b as any)(), E;
  }
  function s(this: any, h: any, d: any): any {
    return (as as any)(h, {
      align: d,
      alignDelimiters: r,
      padding: n,
      stringLength: i
    });
  }
  function c(this: any, h: any, d: any, x: any): any {
    const C: any = (h as any).children;
    let b: any = -1;
    const I: any = [],
      E: any = ((d as any).enter as any)("table");
    for (; (++b as any) < ((C as any).length as any);) (I as any)[b] = (f as any)((C as any)[b], d, x);
    return (E as any)(), I;
  }
  function f(this: any, h: any, d: any, x: any): any {
    const C: any = (h as any).children;
    let b: any = -1;
    const I: any = [],
      E: any = ((d as any).enter as any)("tableRow");
    for (; (++b as any) < ((C as any).length as any);) (I as any)[b] = (o as any)((C as any)[b], h, d, x);
    return (E as any)(), I;
  }
  function p(this: any, h: any, d: any, x: any): any {
    let C: any = ((vr as any).inlineCode as any)(h, d, x);
    return (((x as any).stack as any).includes as any)("tableCell") && (C = ((C as any).replace as any)(/\|/g, "\\$&")), C;
  }
}
function Qs(this: any): any {
  return {
    exit: {
      taskListCheckValueChecked: On,
      taskListCheckValueUnchecked: On,
      paragraph: Ys
    }
  };
}
function Gs(this: any): any {
  return {
    unsafe: [{
      atBreak: !0,
      character: "-",
      after: "[:|-]"
    }],
    handlers: {
      listItem: Xs
    }
  };
}
function On(this: any, e: any): any {
  const t: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (2 as any)];
  (t as any).type, (t as any).checked = ((e as any).type as any) === ("taskListCheckValueChecked" as any);
}
function Ys(this: any, e: any): any {
  const t: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (2 as any)];
  if (t && ((t as any).type as any) === ("listItem" as any) && (typeof (t as any).checked as any) == ("boolean" as any)) {
    const n: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)];
    (n as any).type;
    const r: any = ((n as any).children as any)[0];
    if (r && ((r as any).type as any) === ("text" as any)) {
      const i: any = (t as any).children;
      let a: any = -1,
        l: any;
      for (; (++a as any) < ((i as any).length as any);) {
        const u: any = (i as any)[a];
        if (((u as any).type as any) === ("paragraph" as any)) {
          l = u;
          break;
        }
      }
      (l as any) === (n as any) && ((r as any).value = (((r as any).value as any).slice as any)(1), (((r as any).value as any).length as any) === (0 as any) ? (((n as any).children as any).shift as any)() : (n as any).position && (r as any).position && (typeof (((r as any).position as any).start as any).offset as any) == ("number" as any) && ((((r as any).position as any).start as any).column++, (((r as any).position as any).start as any).offset++, ((n as any).position as any).start = ((Object as any).assign as any)({}, ((r as any).position as any).start)));
    }
  }
  ((this as any).exit as any)(e);
}
function Xs(this: any, e: any, t: any, n: any, r: any): any {
  const i: any = ((e as any).children as any)[0],
    a: any = (typeof (e as any).checked as any) == ("boolean" as any) && i && ((i as any).type as any) === ("paragraph" as any),
    l: any = (("[" as any) + (((e as any).checked ? "x" : " ") as any) as any) + ("] " as any),
    u: any = ((n as any).createTracker as any)(r);
  a && ((u as any).move as any)(l);
  let o: any = ((vr as any).listItem as any)(e, t, n, {
    ...r,
    ...((u as any).current as any)()
  });
  return a && (o = ((o as any).replace as any)(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, s)), o;
  function s(this: any, c: any): any {
    return (c as any) + (l as any);
  }
}
function Js(this: any): any {
  return [(_o as any)(), (Jo as any)(), (ts as any)(), (js as any)(), (Qs as any)()];
}
function Ks(this: any, e: any): any {
  return {
    extensions: [(Po as any)(), (Ko as any)(e), (ns as any)(), (Ws as any)(e), (Gs as any)()]
  };
}
const Zs: any = {
    tokenize: lc,
    partial: !0
  },
  Or: any = {
    tokenize: ac,
    partial: !0
  },
  Br: any = {
    tokenize: uc,
    partial: !0
  },
  jr: any = {
    tokenize: oc,
    partial: !0
  },
  ec: any = {
    tokenize: sc,
    partial: !0
  },
  qr: any = {
    name: "wwwAutolink",
    tokenize: rc,
    previous: Hr
  },
  $r: any = {
    name: "protocolAutolink",
    tokenize: ic,
    previous: Vr
  },
  ce: any = {
    name: "emailAutolink",
    tokenize: nc,
    previous: Ur
  },
  le: any = {};
function tc(this: any): any {
  return {
    text: le
  };
}
let xe: any = 48;
for (; (xe as any) < (123 as any);) (le as any)[xe] = ce, xe++, (xe as any) === (58 as any) ? xe = 65 : (xe as any) === (91 as any) && (xe = 97);
(le as any)[43] = ce;
(le as any)[45] = ce;
(le as any)[46] = ce;
(le as any)[95] = ce;
(le as any)[72] = [ce, $r];
(le as any)[104] = [ce, $r];
(le as any)[87] = [ce, qr];
(le as any)[119] = [ce, qr];
function nc(this: any, e: any, t: any, n: any): any {
  const r: any = this;
  let i: any, a: any;
  return l;
  function l(this: any, f: any): any {
    return !(Tt as any)(f) || !((Ur as any).call as any)(r, (r as any).previous) || (Qt as any)((r as any).events) ? (n as any)(f) : (((e as any).enter as any)("literalAutolink"), ((e as any).enter as any)("literalAutolinkEmail"), (u as any)(f));
  }
  function u(this: any, f: any): any {
    return (Tt as any)(f) ? (((e as any).consume as any)(f), u) : (f as any) === (64 as any) ? (((e as any).consume as any)(f), o) : (n as any)(f);
  }
  function o(this: any, f: any): any {
    return (f as any) === (46 as any) ? (((e as any).check as any)(ec, c, s) as any)(f) : (f as any) === (45 as any) || (f as any) === (95 as any) || (Q as any)(f) ? (a = !0, ((e as any).consume as any)(f), o) : (c as any)(f);
  }
  function s(this: any, f: any): any {
    return ((e as any).consume as any)(f), i = !0, o;
  }
  function c(this: any, f: any): any {
    return a && i && (Y as any)((r as any).previous) ? (((e as any).exit as any)("literalAutolinkEmail"), ((e as any).exit as any)("literalAutolink"), (t as any)(f)) : (n as any)(f);
  }
}
function rc(this: any, e: any, t: any, n: any): any {
  const r: any = this;
  return i;
  function i(this: any, l: any): any {
    return (l as any) !== (87 as any) && (l as any) !== (119 as any) || !((Hr as any).call as any)(r, (r as any).previous) || (Qt as any)((r as any).events) ? (n as any)(l) : (((e as any).enter as any)("literalAutolink"), ((e as any).enter as any)("literalAutolinkWww"), (((e as any).check as any)(Zs, ((e as any).attempt as any)(Or, ((e as any).attempt as any)(Br, a), n), n) as any)(l));
  }
  function a(this: any, l: any): any {
    return ((e as any).exit as any)("literalAutolinkWww"), ((e as any).exit as any)("literalAutolink"), (t as any)(l);
  }
}
function ic(this: any, e: any, t: any, n: any): any {
  const r: any = this;
  let i: any = "",
    a: any = !1;
  return l;
  function l(this: any, f: any): any {
    return ((f as any) === (72 as any) || (f as any) === (104 as any)) && ((Vr as any).call as any)(r, (r as any).previous) && !(Qt as any)((r as any).events) ? (((e as any).enter as any)("literalAutolink"), ((e as any).enter as any)("literalAutolinkHttp"), i += ((String as any).fromCodePoint as any)(f), ((e as any).consume as any)(f), u) : (n as any)(f);
  }
  function u(this: any, f: any): any {
    if ((Y as any)(f) && ((i as any).length as any) < (5 as any)) return i += ((String as any).fromCodePoint as any)(f), ((e as any).consume as any)(f), u;
    if ((f as any) === (58 as any)) {
      const p: any = ((i as any).toLowerCase as any)();
      if ((p as any) === ("http" as any) || (p as any) === ("https" as any)) return ((e as any).consume as any)(f), o;
    }
    return (n as any)(f);
  }
  function o(this: any, f: any): any {
    return (f as any) === (47 as any) ? (((e as any).consume as any)(f), a ? s : (a = !0, o)) : (n as any)(f);
  }
  function s(this: any, f: any): any {
    return (f as any) === (null as any) || (Ge as any)(f) || (U as any)(f) || (ke as any)(f) || (Ke as any)(f) ? (n as any)(f) : (((e as any).attempt as any)(Or, ((e as any).attempt as any)(Br, c), n) as any)(f);
  }
  function c(this: any, f: any): any {
    return ((e as any).exit as any)("literalAutolinkHttp"), ((e as any).exit as any)("literalAutolink"), (t as any)(f);
  }
}
function lc(this: any, e: any, t: any, n: any): any {
  let r: any = 0;
  return i;
  function i(this: any, l: any): any {
    return ((l as any) === (87 as any) || (l as any) === (119 as any)) && (r as any) < (3 as any) ? (r++, ((e as any).consume as any)(l), i) : (l as any) === (46 as any) && (r as any) === (3 as any) ? (((e as any).consume as any)(l), a) : (n as any)(l);
  }
  function a(this: any, l: any): any {
    return (l as any) === (null as any) ? (n as any)(l) : (t as any)(l);
  }
}
function ac(this: any, e: any, t: any, n: any): any {
  let r: any, i: any, a: any;
  return l;
  function l(this: any, s: any): any {
    return (s as any) === (46 as any) || (s as any) === (95 as any) ? (((e as any).check as any)(jr, o, u) as any)(s) : (s as any) === (null as any) || (U as any)(s) || (ke as any)(s) || (s as any) !== (45 as any) && (Ke as any)(s) ? (o as any)(s) : (a = !0, ((e as any).consume as any)(s), l);
  }
  function u(this: any, s: any): any {
    return (s as any) === (95 as any) ? r = !0 : (i = r, r = void 0), ((e as any).consume as any)(s), l;
  }
  function o(this: any, s: any): any {
    return i || r || !a ? (n as any)(s) : (t as any)(s);
  }
}
function uc(this: any, e: any, t: any): any {
  let n: any = 0,
    r: any = 0;
  return i;
  function i(this: any, l: any): any {
    return (l as any) === (40 as any) ? (n++, ((e as any).consume as any)(l), i) : (l as any) === (41 as any) && (r as any) < (n as any) ? (a as any)(l) : (l as any) === (33 as any) || (l as any) === (34 as any) || (l as any) === (38 as any) || (l as any) === (39 as any) || (l as any) === (41 as any) || (l as any) === (42 as any) || (l as any) === (44 as any) || (l as any) === (46 as any) || (l as any) === (58 as any) || (l as any) === (59 as any) || (l as any) === (60 as any) || (l as any) === (63 as any) || (l as any) === (93 as any) || (l as any) === (95 as any) || (l as any) === (126 as any) ? (((e as any).check as any)(jr, t, a) as any)(l) : (l as any) === (null as any) || (U as any)(l) || (ke as any)(l) ? (t as any)(l) : (((e as any).consume as any)(l), i);
  }
  function a(this: any, l: any): any {
    return (l as any) === (41 as any) && r++, ((e as any).consume as any)(l), i;
  }
}
function oc(this: any, e: any, t: any, n: any): any {
  return r;
  function r(this: any, u: any): any {
    return (u as any) === (33 as any) || (u as any) === (34 as any) || (u as any) === (39 as any) || (u as any) === (41 as any) || (u as any) === (42 as any) || (u as any) === (44 as any) || (u as any) === (46 as any) || (u as any) === (58 as any) || (u as any) === (59 as any) || (u as any) === (63 as any) || (u as any) === (95 as any) || (u as any) === (126 as any) ? (((e as any).consume as any)(u), r) : (u as any) === (38 as any) ? (((e as any).consume as any)(u), a) : (u as any) === (93 as any) ? (((e as any).consume as any)(u), i) : (u as any) === (60 as any) || (u as any) === (null as any) || (U as any)(u) || (ke as any)(u) ? (t as any)(u) : (n as any)(u);
  }
  function i(this: any, u: any): any {
    return (u as any) === (null as any) || (u as any) === (40 as any) || (u as any) === (91 as any) || (U as any)(u) || (ke as any)(u) ? (t as any)(u) : (r as any)(u);
  }
  function a(this: any, u: any): any {
    return (Y as any)(u) ? (l as any)(u) : (n as any)(u);
  }
  function l(this: any, u: any): any {
    return (u as any) === (59 as any) ? (((e as any).consume as any)(u), r) : (Y as any)(u) ? (((e as any).consume as any)(u), l) : (n as any)(u);
  }
}
function sc(this: any, e: any, t: any, n: any): any {
  return r;
  function r(this: any, a: any): any {
    return ((e as any).consume as any)(a), i;
  }
  function i(this: any, a: any): any {
    return (Q as any)(a) ? (n as any)(a) : (t as any)(a);
  }
}
function Hr(this: any, e: any): any {
  return (e as any) === (null as any) || (e as any) === (40 as any) || (e as any) === (42 as any) || (e as any) === (95 as any) || (e as any) === (91 as any) || (e as any) === (93 as any) || (e as any) === (126 as any) || (U as any)(e);
}
function Vr(this: any, e: any): any {
  return !(Y as any)(e);
}
function Ur(this: any, e: any): any {
  return !((e as any) === (47 as any) || (Tt as any)(e));
}
function Tt(this: any, e: any): any {
  return (e as any) === (43 as any) || (e as any) === (45 as any) || (e as any) === (46 as any) || (e as any) === (95 as any) || (Q as any)(e);
}
function Qt(this: any, e: any): any {
  let t: any = (e as any).length,
    n: any = !1;
  for (; t--;) {
    const r: any = ((e as any)[t] as any)[1];
    if ((((r as any).type as any) === ("labelLink" as any) || ((r as any).type as any) === ("labelImage" as any)) && !(r as any)._balanced) {
      n = !0;
      break;
    }
    if ((r as any)._gfmAutolinkLiteralWalkedInto) {
      n = !1;
      break;
    }
  }
  return ((e as any).length as any) > (0 as any) && !n && ((((e as any)[((e as any).length as any) - (1 as any)] as any)[1] as any)._gfmAutolinkLiteralWalkedInto = !0), n;
}
const cc: any = {
  tokenize: kc,
  partial: !0
};
function fc(this: any): any {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: gc,
        continuation: {
          tokenize: dc
        },
        exit: xc
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: mc
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: hc,
        resolveTo: pc
      }
    }
  };
}
function hc(this: any, e: any, t: any, n: any): any {
  const r: any = this;
  let i: any = ((r as any).events as any).length;
  const a: any = ((r as any).parser as any).gfmFootnotes || (((r as any).parser as any).gfmFootnotes = []);
  let l: any;
  for (; i--;) {
    const o: any = (((r as any).events as any)[i] as any)[1];
    if (((o as any).type as any) === ("labelImage" as any)) {
      l = o;
      break;
    }
    if (((o as any).type as any) === ("gfmFootnoteCall" as any) || ((o as any).type as any) === ("labelLink" as any) || ((o as any).type as any) === ("label" as any) || ((o as any).type as any) === ("image" as any) || ((o as any).type as any) === ("link" as any)) break;
  }
  return u;
  function u(this: any, o: any): any {
    if (!l || !(l as any)._balanced) return (n as any)(o);
    const s: any = (re as any)(((r as any).sliceSerialize as any)({
      start: (l as any).end,
      end: ((r as any).now as any)()
    }));
    return (((s as any).codePointAt as any)(0) as any) !== (94 as any) || !((a as any).includes as any)(((s as any).slice as any)(1)) ? (n as any)(o) : (((e as any).enter as any)("gfmFootnoteCallLabelMarker"), ((e as any).consume as any)(o), ((e as any).exit as any)("gfmFootnoteCallLabelMarker"), (t as any)(o));
  }
}
function pc(this: any, e: any, t: any): any {
  let n: any = (e as any).length;
  for (; n--;) if (((((e as any)[n] as any)[1] as any).type as any) === ("labelImage" as any) && (((e as any)[n] as any)[0] as any) === ("enter" as any)) {
    ((e as any)[n] as any)[1];
    break;
  }
  (((e as any)[(n as any) + (1 as any)] as any)[1] as any).type = "data", (((e as any)[(n as any) + (3 as any)] as any)[1] as any).type = "gfmFootnoteCallLabelMarker";
  const r: any = {
      type: "gfmFootnoteCall",
      start: ((Object as any).assign as any)({}, (((e as any)[(n as any) + (3 as any)] as any)[1] as any).start),
      end: ((Object as any).assign as any)({}, (((e as any)[((e as any).length as any) - (1 as any)] as any)[1] as any).end)
    },
    i: any = {
      type: "gfmFootnoteCallMarker",
      start: ((Object as any).assign as any)({}, (((e as any)[(n as any) + (3 as any)] as any)[1] as any).end),
      end: ((Object as any).assign as any)({}, (((e as any)[(n as any) + (3 as any)] as any)[1] as any).end)
    };
  ((i as any).end as any).column++, ((i as any).end as any).offset++, ((i as any).end as any)._bufferIndex++;
  const a: any = {
      type: "gfmFootnoteCallString",
      start: ((Object as any).assign as any)({}, (i as any).end),
      end: ((Object as any).assign as any)({}, (((e as any)[((e as any).length as any) - (1 as any)] as any)[1] as any).start)
    },
    l: any = {
      type: "chunkString",
      contentType: "string",
      start: ((Object as any).assign as any)({}, (a as any).start),
      end: ((Object as any).assign as any)({}, (a as any).end)
    },
    u: any = [(e as any)[(n as any) + (1 as any)], (e as any)[(n as any) + (2 as any)], ["enter", r, t], (e as any)[(n as any) + (3 as any)], (e as any)[(n as any) + (4 as any)], ["enter", i, t], ["exit", i, t], ["enter", a, t], ["enter", l, t], ["exit", l, t], ["exit", a, t], (e as any)[((e as any).length as any) - (2 as any)], (e as any)[((e as any).length as any) - (1 as any)], ["exit", r, t]];
  return ((e as any).splice as any)(n, (((e as any).length as any) - (n as any) as any) + (1 as any), ...u), e;
}
function mc(this: any, e: any, t: any, n: any): any {
  const r: any = this,
    i: any = ((r as any).parser as any).gfmFootnotes || (((r as any).parser as any).gfmFootnotes = []);
  let a: any = 0,
    l: any;
  return u;
  function u(this: any, f: any): any {
    return ((e as any).enter as any)("gfmFootnoteCall"), ((e as any).enter as any)("gfmFootnoteCallLabelMarker"), ((e as any).consume as any)(f), ((e as any).exit as any)("gfmFootnoteCallLabelMarker"), o;
  }
  function o(this: any, f: any): any {
    return (f as any) !== (94 as any) ? (n as any)(f) : (((e as any).enter as any)("gfmFootnoteCallMarker"), ((e as any).consume as any)(f), ((e as any).exit as any)("gfmFootnoteCallMarker"), ((e as any).enter as any)("gfmFootnoteCallString"), (((e as any).enter as any)("chunkString") as any).contentType = "string", s);
  }
  function s(this: any, f: any): any {
    if ((a as any) > (999 as any) || (f as any) === (93 as any) && !l || (f as any) === (null as any) || (f as any) === (91 as any) || (U as any)(f)) return (n as any)(f);
    if ((f as any) === (93 as any)) {
      ((e as any).exit as any)("chunkString");
      const p: any = ((e as any).exit as any)("gfmFootnoteCallString");
      return ((i as any).includes as any)((re as any)(((r as any).sliceSerialize as any)(p))) ? (((e as any).enter as any)("gfmFootnoteCallLabelMarker"), ((e as any).consume as any)(f), ((e as any).exit as any)("gfmFootnoteCallLabelMarker"), ((e as any).exit as any)("gfmFootnoteCall"), t) : (n as any)(f);
    }
    return (U as any)(f) || (l = !0), a++, ((e as any).consume as any)(f), (f as any) === (92 as any) ? c : s;
  }
  function c(this: any, f: any): any {
    return (f as any) === (91 as any) || (f as any) === (92 as any) || (f as any) === (93 as any) ? (((e as any).consume as any)(f), a++, s) : (s as any)(f);
  }
}
function gc(this: any, e: any, t: any, n: any): any {
  const r: any = this,
    i: any = ((r as any).parser as any).gfmFootnotes || (((r as any).parser as any).gfmFootnotes = []);
  let a: any,
    l: any = 0,
    u: any;
  return o;
  function o(this: any, d: any): any {
    return (((e as any).enter as any)("gfmFootnoteDefinition") as any)._container = !0, ((e as any).enter as any)("gfmFootnoteDefinitionLabel"), ((e as any).enter as any)("gfmFootnoteDefinitionLabelMarker"), ((e as any).consume as any)(d), ((e as any).exit as any)("gfmFootnoteDefinitionLabelMarker"), s;
  }
  function s(this: any, d: any): any {
    return (d as any) === (94 as any) ? (((e as any).enter as any)("gfmFootnoteDefinitionMarker"), ((e as any).consume as any)(d), ((e as any).exit as any)("gfmFootnoteDefinitionMarker"), ((e as any).enter as any)("gfmFootnoteDefinitionLabelString"), (((e as any).enter as any)("chunkString") as any).contentType = "string", c) : (n as any)(d);
  }
  function c(this: any, d: any): any {
    if ((l as any) > (999 as any) || (d as any) === (93 as any) && !u || (d as any) === (null as any) || (d as any) === (91 as any) || (U as any)(d)) return (n as any)(d);
    if ((d as any) === (93 as any)) {
      ((e as any).exit as any)("chunkString");
      const x: any = ((e as any).exit as any)("gfmFootnoteDefinitionLabelString");
      return a = (re as any)(((r as any).sliceSerialize as any)(x)), ((e as any).enter as any)("gfmFootnoteDefinitionLabelMarker"), ((e as any).consume as any)(d), ((e as any).exit as any)("gfmFootnoteDefinitionLabelMarker"), ((e as any).exit as any)("gfmFootnoteDefinitionLabel"), p;
    }
    return (U as any)(d) || (u = !0), l++, ((e as any).consume as any)(d), (d as any) === (92 as any) ? f : c;
  }
  function f(this: any, d: any): any {
    return (d as any) === (91 as any) || (d as any) === (92 as any) || (d as any) === (93 as any) ? (((e as any).consume as any)(d), l++, c) : (c as any)(d);
  }
  function p(this: any, d: any): any {
    return (d as any) === (58 as any) ? (((e as any).enter as any)("definitionMarker"), ((e as any).consume as any)(d), ((e as any).exit as any)("definitionMarker"), ((i as any).includes as any)(a) || ((i as any).push as any)(a), (R as any)(e, h, "gfmFootnoteDefinitionWhitespace")) : (n as any)(d);
  }
  function h(this: any, d: any): any {
    return (t as any)(d);
  }
}
function dc(this: any, e: any, t: any, n: any): any {
  return ((e as any).check as any)(Be, t, ((e as any).attempt as any)(cc, t, n));
}
function xc(this: any, e: any): any {
  ((e as any).exit as any)("gfmFootnoteDefinition");
}
function kc(this: any, e: any, t: any, n: any): any {
  const r: any = this;
  return (R as any)(e, i, "gfmFootnoteDefinitionIndent", 5);
  function i(this: any, a: any): any {
    const l: any = ((r as any).events as any)[(((r as any).events as any).length as any) - (1 as any)];
    return l && (((l as any)[1] as any).type as any) === ("gfmFootnoteDefinitionIndent" as any) && (((((l as any)[2] as any).sliceSerialize as any)((l as any)[1], !0) as any).length as any) === (4 as any) ? (t as any)(a) : (n as any)(a);
  }
}
function yc(this: any, e: any): any {
  let n: any = ((e || {}) as any).singleTilde;
  const r: any = {
    name: "strikethrough",
    tokenize: a,
    resolveAll: i
  };
  return (n as any) == (null as any) && (n = !0), {
    text: {
      126: r
    },
    insideSpan: {
      null: [r]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function i(this: any, l: any, u: any): any {
    let o: any = -1;
    for (; (++o as any) < ((l as any).length as any);) if ((((l as any)[o] as any)[0] as any) === ("enter" as any) && ((((l as any)[o] as any)[1] as any).type as any) === ("strikethroughSequenceTemporary" as any) && (((l as any)[o] as any)[1] as any)._close) {
      let s: any = o;
      for (; s--;) if ((((l as any)[s] as any)[0] as any) === ("exit" as any) && ((((l as any)[s] as any)[1] as any).type as any) === ("strikethroughSequenceTemporary" as any) && (((l as any)[s] as any)[1] as any)._open && ((((((l as any)[o] as any)[1] as any).end as any).offset as any) - (((((l as any)[o] as any)[1] as any).start as any).offset as any) as any) === ((((((l as any)[s] as any)[1] as any).end as any).offset as any) - (((((l as any)[s] as any)[1] as any).start as any).offset as any) as any)) {
        (((l as any)[o] as any)[1] as any).type = "strikethroughSequence", (((l as any)[s] as any)[1] as any).type = "strikethroughSequence";
        const c: any = {
            type: "strikethrough",
            start: ((Object as any).assign as any)({}, (((l as any)[s] as any)[1] as any).start),
            end: ((Object as any).assign as any)({}, (((l as any)[o] as any)[1] as any).end)
          },
          f: any = {
            type: "strikethroughText",
            start: ((Object as any).assign as any)({}, (((l as any)[s] as any)[1] as any).end),
            end: ((Object as any).assign as any)({}, (((l as any)[o] as any)[1] as any).start)
          },
          p: any = [["enter", c, u], ["enter", ((l as any)[s] as any)[1], u], ["exit", ((l as any)[s] as any)[1], u], ["enter", f, u]],
          h: any = ((((u as any).parser as any).constructs as any).insideSpan as any).null;
        h && (K as any)(p, (p as any).length, 0, (Ze as any)(h, ((l as any).slice as any)((s as any) + (1 as any), o), u)), (K as any)(p, (p as any).length, 0, [["exit", f, u], ["enter", ((l as any)[o] as any)[1], u], ["exit", ((l as any)[o] as any)[1], u], ["exit", c, u]]), (K as any)(l, (s as any) - (1 as any), ((o as any) - (s as any) as any) + (3 as any), p), o = ((s as any) + ((p as any).length as any) as any) - (2 as any);
        break;
      }
    }
    for (o = -1; (++o as any) < ((l as any).length as any);) ((((l as any)[o] as any)[1] as any).type as any) === ("strikethroughSequenceTemporary" as any) && ((((l as any)[o] as any)[1] as any).type = "data");
    return l;
  }
  function a(this: any, l: any, u: any, o: any): any {
    const s: any = (this as any).previous,
      c: any = (this as any).events;
    let f: any = 0;
    return p;
    function p(this: any, d: any): any {
      return (s as any) === (126 as any) && ((((c as any)[((c as any).length as any) - (1 as any)] as any)[1] as any).type as any) !== ("characterEscape" as any) ? (o as any)(d) : (((l as any).enter as any)("strikethroughSequenceTemporary"), (h as any)(d));
    }
    function h(this: any, d: any): any {
      const x: any = (Ie as any)(s);
      if ((d as any) === (126 as any)) return (f as any) > (1 as any) ? (o as any)(d) : (((l as any).consume as any)(d), f++, h);
      if ((f as any) < (2 as any) && !n) return (o as any)(d);
      const C: any = ((l as any).exit as any)("strikethroughSequenceTemporary"),
        b: any = (Ie as any)(d);
      return (C as any)._open = !b || (b as any) === (2 as any) && !!x, (C as any)._close = !x || (x as any) === (2 as any) && !!b, (u as any)(d);
    }
  }
}
class bc {
  declare map: any;
  [key: string]: any;
  constructor() {
    (this as any).map = [];
  }
  add(t: any, n: any, r: any): any {
    (wc as any)(this, t, n, r);
  }
  consume(t: any): any {
    if ((((this as any).map as any).sort as any)(function (this: any, a: any, l: any): any {
      return ((a as any)[0] as any) - ((l as any)[0] as any);
    }), (((this as any).map as any).length as any) === (0 as any)) return;
    let n: any = ((this as any).map as any).length;
    const r: any = [];
    for (; (n as any) > (0 as any);) n -= 1, ((r as any).push as any)(((t as any).slice as any)(((((this as any).map as any)[n] as any)[0] as any) + ((((this as any).map as any)[n] as any)[1] as any)), (((this as any).map as any)[n] as any)[2]), (t as any).length = (((this as any).map as any)[n] as any)[0];
    ((r as any).push as any)(((t as any).slice as any)()), (t as any).length = 0;
    let i: any = ((r as any).pop as any)();
    for (; i;) {
      for (const a of i) ((t as any).push as any)(a);
      i = ((r as any).pop as any)();
    }
    ((this as any).map as any).length = 0;
  }
}
function wc(this: any, e: any, t: any, n: any, r: any): any {
  let i: any = 0;
  if (!((n as any) === (0 as any) && ((r as any).length as any) === (0 as any))) {
    for (; (i as any) < (((e as any).map as any).length as any);) {
      if (((((e as any).map as any)[i] as any)[0] as any) === (t as any)) {
        (((e as any).map as any)[i] as any)[1] += n, (((((e as any).map as any)[i] as any)[2] as any).push as any)(...r);
        return;
      }
      i += 1;
    }
    (((e as any).map as any).push as any)([t, n, r]);
  }
}
function Sc(this: any, e: any, t: any): any {
  let n: any = !1;
  const r: any = [];
  for (; (t as any) < ((e as any).length as any);) {
    const i: any = (e as any)[t];
    if (n) {
      if (((i as any)[0] as any) === ("enter" as any)) (((i as any)[1] as any).type as any) === ("tableContent" as any) && ((r as any).push as any)(((((e as any)[(t as any) + (1 as any)] as any)[1] as any).type as any) === ("tableDelimiterMarker" as any) ? "left" : "none");else if ((((i as any)[1] as any).type as any) === ("tableContent" as any)) {
        if (((((e as any)[(t as any) - (1 as any)] as any)[1] as any).type as any) === ("tableDelimiterMarker" as any)) {
          const a: any = ((r as any).length as any) - (1 as any);
          (r as any)[a] = ((r as any)[a] as any) === ("left" as any) ? "center" : "right";
        }
      } else if ((((i as any)[1] as any).type as any) === ("tableDelimiterRow" as any)) break;
    } else ((i as any)[0] as any) === ("enter" as any) && (((i as any)[1] as any).type as any) === ("tableDelimiterRow" as any) && (n = !0);
    t += 1;
  }
  return r;
}
function Cc(this: any): any {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: Ec,
        resolveAll: Ic
      }
    }
  };
}
function Ec(this: any, e: any, t: any, n: any): any {
  const r: any = this;
  let i: any = 0,
    a: any = 0,
    l: any;
  return u;
  function u(this: any, y: any): any {
    let k: any = (((r as any).events as any).length as any) - (1 as any);
    for (; (k as any) > (-1 as any);) {
      const A: any = ((((r as any).events as any)[k] as any)[1] as any).type;
      if ((A as any) === ("lineEnding" as any) || (A as any) === ("linePrefix" as any)) k--;else break;
    }
    const _: any = (k as any) > (-1 as any) ? ((((r as any).events as any)[k] as any)[1] as any).type : null,
      F: any = (_ as any) === ("tableHead" as any) || (_ as any) === ("tableRow" as any) ? S : o;
    return (F as any) === (S as any) && (((r as any).parser as any).lazy as any)[(((r as any).now as any)() as any).line] ? (n as any)(y) : (F as any)(y);
  }
  function o(this: any, y: any): any {
    return ((e as any).enter as any)("tableHead"), ((e as any).enter as any)("tableRow"), (s as any)(y);
  }
  function s(this: any, y: any): any {
    return (y as any) === (124 as any) || (l = !0, a += 1), (c as any)(y);
  }
  function c(this: any, y: any): any {
    return (y as any) === (null as any) ? (n as any)(y) : (z as any)(y) ? (a as any) > (1 as any) ? (a = 0, (r as any).interrupt = !0, ((e as any).exit as any)("tableRow"), ((e as any).enter as any)("lineEnding"), ((e as any).consume as any)(y), ((e as any).exit as any)("lineEnding"), h) : (n as any)(y) : (B as any)(y) ? ((R as any)(e, c, "whitespace") as any)(y) : (a += 1, l && (l = !1, i += 1), (y as any) === (124 as any) ? (((e as any).enter as any)("tableCellDivider"), ((e as any).consume as any)(y), ((e as any).exit as any)("tableCellDivider"), l = !0, c) : (((e as any).enter as any)("data"), (f as any)(y)));
  }
  function f(this: any, y: any): any {
    return (y as any) === (null as any) || (y as any) === (124 as any) || (U as any)(y) ? (((e as any).exit as any)("data"), (c as any)(y)) : (((e as any).consume as any)(y), (y as any) === (92 as any) ? p : f);
  }
  function p(this: any, y: any): any {
    return (y as any) === (92 as any) || (y as any) === (124 as any) ? (((e as any).consume as any)(y), f) : (f as any)(y);
  }
  function h(this: any, y: any): any {
    return (r as any).interrupt = !1, (((r as any).parser as any).lazy as any)[(((r as any).now as any)() as any).line] ? (n as any)(y) : (((e as any).enter as any)("tableDelimiterRow"), l = !1, (B as any)(y) ? ((R as any)(e, d, "linePrefix", ((((((r as any).parser as any).constructs as any).disable as any).null as any).includes as any)("codeIndented") ? void 0 : 4) as any)(y) : (d as any)(y));
  }
  function d(this: any, y: any): any {
    return (y as any) === (45 as any) || (y as any) === (58 as any) ? (C as any)(y) : (y as any) === (124 as any) ? (l = !0, ((e as any).enter as any)("tableCellDivider"), ((e as any).consume as any)(y), ((e as any).exit as any)("tableCellDivider"), x) : (v as any)(y);
  }
  function x(this: any, y: any): any {
    return (B as any)(y) ? ((R as any)(e, C, "whitespace") as any)(y) : (C as any)(y);
  }
  function C(this: any, y: any): any {
    return (y as any) === (58 as any) ? (a += 1, l = !0, ((e as any).enter as any)("tableDelimiterMarker"), ((e as any).consume as any)(y), ((e as any).exit as any)("tableDelimiterMarker"), b) : (y as any) === (45 as any) ? (a += 1, (b as any)(y)) : (y as any) === (null as any) || (z as any)(y) ? (D as any)(y) : (v as any)(y);
  }
  function b(this: any, y: any): any {
    return (y as any) === (45 as any) ? (((e as any).enter as any)("tableDelimiterFiller"), (I as any)(y)) : (v as any)(y);
  }
  function I(this: any, y: any): any {
    return (y as any) === (45 as any) ? (((e as any).consume as any)(y), I) : (y as any) === (58 as any) ? (l = !0, ((e as any).exit as any)("tableDelimiterFiller"), ((e as any).enter as any)("tableDelimiterMarker"), ((e as any).consume as any)(y), ((e as any).exit as any)("tableDelimiterMarker"), E) : (((e as any).exit as any)("tableDelimiterFiller"), (E as any)(y));
  }
  function E(this: any, y: any): any {
    return (B as any)(y) ? ((R as any)(e, D, "whitespace") as any)(y) : (D as any)(y);
  }
  function D(this: any, y: any): any {
    return (y as any) === (124 as any) ? (d as any)(y) : (y as any) === (null as any) || (z as any)(y) ? !l || (i as any) !== (a as any) ? (v as any)(y) : (((e as any).exit as any)("tableDelimiterRow"), ((e as any).exit as any)("tableHead"), (t as any)(y)) : (v as any)(y);
  }
  function v(this: any, y: any): any {
    return (n as any)(y);
  }
  function S(this: any, y: any): any {
    return ((e as any).enter as any)("tableRow"), (M as any)(y);
  }
  function M(this: any, y: any): any {
    return (y as any) === (124 as any) ? (((e as any).enter as any)("tableCellDivider"), ((e as any).consume as any)(y), ((e as any).exit as any)("tableCellDivider"), M) : (y as any) === (null as any) || (z as any)(y) ? (((e as any).exit as any)("tableRow"), (t as any)(y)) : (B as any)(y) ? ((R as any)(e, M, "whitespace") as any)(y) : (((e as any).enter as any)("data"), ($ as any)(y));
  }
  function $(this: any, y: any): any {
    return (y as any) === (null as any) || (y as any) === (124 as any) || (U as any)(y) ? (((e as any).exit as any)("data"), (M as any)(y)) : (((e as any).consume as any)(y), (y as any) === (92 as any) ? q : $);
  }
  function q(this: any, y: any): any {
    return (y as any) === (92 as any) || (y as any) === (124 as any) ? (((e as any).consume as any)(y), $) : ($ as any)(y);
  }
}
function Ic(this: any, e: any, t: any): any {
  let n: any = -1,
    r: any = !0,
    i: any = 0,
    a: any = [0, 0, 0, 0],
    l: any = [0, 0, 0, 0],
    u: any = !1,
    o: any = 0,
    s: any,
    c: any,
    f: any;
  const p: any = new (bc as any)();
  for (; (++n as any) < ((e as any).length as any);) {
    const h: any = (e as any)[n],
      d: any = (h as any)[1];
    ((h as any)[0] as any) === ("enter" as any) ? ((d as any).type as any) === ("tableHead" as any) ? (u = !1, (o as any) !== (0 as any) && ((Bn as any)(p, t, o, s, c), c = void 0, o = 0), s = {
      type: "table",
      start: ((Object as any).assign as any)({}, (d as any).start),
      end: ((Object as any).assign as any)({}, (d as any).end)
    }, ((p as any).add as any)(n, 0, [["enter", s, t]])) : ((d as any).type as any) === ("tableRow" as any) || ((d as any).type as any) === ("tableDelimiterRow" as any) ? (r = !0, f = void 0, a = [0, 0, 0, 0], l = [0, (n as any) + (1 as any), 0, 0], u && (u = !1, c = {
      type: "tableBody",
      start: ((Object as any).assign as any)({}, (d as any).start),
      end: ((Object as any).assign as any)({}, (d as any).end)
    }, ((p as any).add as any)(n, 0, [["enter", c, t]])), i = ((d as any).type as any) === ("tableDelimiterRow" as any) ? 2 : c ? 3 : 1) : i && (((d as any).type as any) === ("data" as any) || ((d as any).type as any) === ("tableDelimiterMarker" as any) || ((d as any).type as any) === ("tableDelimiterFiller" as any)) ? (r = !1, ((l as any)[2] as any) === (0 as any) && (((a as any)[1] as any) !== (0 as any) && ((l as any)[0] = (l as any)[1], f = (Ue as any)(p, t, a, i, void 0, f), a = [0, 0, 0, 0]), (l as any)[2] = n)) : ((d as any).type as any) === ("tableCellDivider" as any) && (r ? r = !1 : (((a as any)[1] as any) !== (0 as any) && ((l as any)[0] = (l as any)[1], f = (Ue as any)(p, t, a, i, void 0, f)), a = l, l = [(a as any)[1], n, 0, 0])) : ((d as any).type as any) === ("tableHead" as any) ? (u = !0, o = n) : ((d as any).type as any) === ("tableRow" as any) || ((d as any).type as any) === ("tableDelimiterRow" as any) ? (o = n, ((a as any)[1] as any) !== (0 as any) ? ((l as any)[0] = (l as any)[1], f = (Ue as any)(p, t, a, i, n, f)) : ((l as any)[1] as any) !== (0 as any) && (f = (Ue as any)(p, t, l, i, n, f)), i = 0) : i && (((d as any).type as any) === ("data" as any) || ((d as any).type as any) === ("tableDelimiterMarker" as any) || ((d as any).type as any) === ("tableDelimiterFiller" as any)) && ((l as any)[3] = n);
  }
  for ((o as any) !== (0 as any) && (Bn as any)(p, t, o, s, c), ((p as any).consume as any)((t as any).events), n = -1; (++n as any) < (((t as any).events as any).length as any);) {
    const h: any = ((t as any).events as any)[n];
    ((h as any)[0] as any) === ("enter" as any) && (((h as any)[1] as any).type as any) === ("table" as any) && (((h as any)[1] as any)._align = (Sc as any)((t as any).events, n));
  }
  return e;
}
function Ue(this: any, e: any, t: any, n: any, r: any, i: any, a: any): any {
  const l: any = (r as any) === (1 as any) ? "tableHeader" : (r as any) === (2 as any) ? "tableDelimiter" : "tableData",
    u: string = "tableContent";
  ((n as any)[0] as any) !== (0 as any) && ((a as any).end = ((Object as any).assign as any)({}, (Ee as any)((t as any).events, (n as any)[0])), ((e as any).add as any)((n as any)[0], 0, [["exit", a, t]]));
  const o: any = (Ee as any)((t as any).events, (n as any)[1]);
  if (a = {
    type: l,
    start: ((Object as any).assign as any)({}, o),
    end: ((Object as any).assign as any)({}, o)
  }, ((e as any).add as any)((n as any)[1], 0, [["enter", a, t]]), ((n as any)[2] as any) !== (0 as any)) {
    const s: any = (Ee as any)((t as any).events, (n as any)[2]),
      c: any = (Ee as any)((t as any).events, (n as any)[3]),
      f: any = {
        type: u,
        start: ((Object as any).assign as any)({}, s),
        end: ((Object as any).assign as any)({}, c)
      };
    if (((e as any).add as any)((n as any)[2], 0, [["enter", f, t]]), (r as any) !== (2 as any)) {
      const p: any = ((t as any).events as any)[(n as any)[2]],
        h: any = ((t as any).events as any)[(n as any)[3]];
      if (((p as any)[1] as any).end = ((Object as any).assign as any)({}, ((h as any)[1] as any).end), ((p as any)[1] as any).type = "chunkText", ((p as any)[1] as any).contentType = "text", ((n as any)[3] as any) > (((n as any)[2] as any) + (1 as any) as any)) {
        const d: any = ((n as any)[2] as any) + (1 as any),
          x: any = (((n as any)[3] as any) - ((n as any)[2] as any) as any) - (1 as any);
        ((e as any).add as any)(d, x, []);
      }
    }
    ((e as any).add as any)(((n as any)[3] as any) + (1 as any), 0, [["exit", f, t]]);
  }
  return (i as any) !== (void 0 as any) && ((a as any).end = ((Object as any).assign as any)({}, (Ee as any)((t as any).events, i)), ((e as any).add as any)(i, 0, [["exit", a, t]]), a = void 0), a;
}
function Bn(this: any, e: any, t: any, n: any, r: any, i: any): any {
  const a: any = [],
    l: any = (Ee as any)((t as any).events, n);
  i && ((i as any).end = ((Object as any).assign as any)({}, l), ((a as any).push as any)(["exit", i, t])), (r as any).end = ((Object as any).assign as any)({}, l), ((a as any).push as any)(["exit", r, t]), ((e as any).add as any)((n as any) + (1 as any), 0, a);
}
function Ee(this: any, e: any, t: any): any {
  const n: any = (e as any)[t],
    r: any = ((n as any)[0] as any) === ("enter" as any) ? "start" : "end";
  return ((n as any)[1] as any)[r];
}
const Tc: any = {
  name: "tasklistCheck",
  tokenize: Fc
};
function Ac(this: any): any {
  return {
    text: {
      91: Tc
    }
  };
}
function Fc(this: any, e: any, t: any, n: any): any {
  const r: any = this;
  return i;
  function i(this: any, o: any): any {
    return ((r as any).previous as any) !== (null as any) || !(r as any)._gfmTasklistFirstContentOfListItem ? (n as any)(o) : (((e as any).enter as any)("taskListCheck"), ((e as any).enter as any)("taskListCheckMarker"), ((e as any).consume as any)(o), ((e as any).exit as any)("taskListCheckMarker"), a);
  }
  function a(this: any, o: any): any {
    return (U as any)(o) ? (((e as any).enter as any)("taskListCheckValueUnchecked"), ((e as any).consume as any)(o), ((e as any).exit as any)("taskListCheckValueUnchecked"), l) : (o as any) === (88 as any) || (o as any) === (120 as any) ? (((e as any).enter as any)("taskListCheckValueChecked"), ((e as any).consume as any)(o), ((e as any).exit as any)("taskListCheckValueChecked"), l) : (n as any)(o);
  }
  function l(this: any, o: any): any {
    return (o as any) === (93 as any) ? (((e as any).enter as any)("taskListCheckMarker"), ((e as any).consume as any)(o), ((e as any).exit as any)("taskListCheckMarker"), ((e as any).exit as any)("taskListCheck"), u) : (n as any)(o);
  }
  function u(this: any, o: any): any {
    return (z as any)(o) ? (t as any)(o) : (B as any)(o) ? (((e as any).check as any)({
      tokenize: zc
    }, t, n) as any)(o) : (n as any)(o);
  }
}
function zc(this: any, e: any, t: any, n: any): any {
  return (R as any)(e, r, "whitespace");
  function r(this: any, i: any): any {
    return (i as any) === (null as any) ? (n as any)(i) : (t as any)(i);
  }
}
function _c(this: any, e: any): any {
  return (tr as any)([(tc as any)(), (fc as any)(), (yc as any)(e), (Cc as any)(), (Ac as any)()]);
}
const Pc: any = {};
function ff(this: any, e: any): any {
  const t: any = this,
    n: any = e || Pc,
    r: any = ((t as any).data as any)(),
    i: any = (r as any).micromarkExtensions || ((r as any).micromarkExtensions = []),
    a: any = (r as any).fromMarkdownExtensions || ((r as any).fromMarkdownExtensions = []),
    l: any = (r as any).toMarkdownExtensions || ((r as any).toMarkdownExtensions = []);
  ((i as any).push as any)((_c as any)(n)), ((a as any).push as any)((Js as any)()), ((l as any).push as any)((Ks as any)(n));
}
function Dc(this: any): any {
  return {
    enter: {
      mathFlow: e,
      mathFlowFenceMeta: t,
      mathText: a
    },
    exit: {
      mathFlow: i,
      mathFlowFence: r,
      mathFlowFenceMeta: n,
      mathFlowValue: u,
      mathText: l,
      mathTextData: u
    }
  };
  function e(this: any, o: any): any {
    const s: any = {
      type: "element",
      tagName: "code",
      properties: {
        className: ["language-math", "math-display"]
      },
      children: []
    };
    ((this as any).enter as any)({
      type: "math",
      meta: null,
      value: "",
      data: {
        hName: "pre",
        hChildren: [s]
      }
    }, o);
  }
  function t(this: any): any {
    ((this as any).buffer as any)();
  }
  function n(this: any): any {
    const o: any = ((this as any).resume as any)(),
      s: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)];
    (s as any).type, (s as any).meta = o;
  }
  function r(this: any): any {
    ((this as any).data as any).mathFlowInside || (((this as any).buffer as any)(), ((this as any).data as any).mathFlowInside = !0);
  }
  function i(this: any, o: any): any {
    const s: any = ((((this as any).resume as any)() as any).replace as any)(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""),
      c: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)];
    (c as any).type, ((this as any).exit as any)(o), (c as any).value = s;
    const f: any = (((c as any).data as any).hChildren as any)[0];
    (f as any).type, (f as any).tagName, (((f as any).children as any).push as any)({
      type: "text",
      value: s
    }), ((this as any).data as any).mathFlowInside = void 0;
  }
  function a(this: any, o: any): any {
    ((this as any).enter as any)({
      type: "inlineMath",
      value: "",
      data: {
        hName: "code",
        hProperties: {
          className: ["language-math", "math-inline"]
        },
        hChildren: []
      }
    }, o), ((this as any).buffer as any)();
  }
  function l(this: any, o: any): any {
    const s: any = ((this as any).resume as any)(),
      c: any = ((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)];
    (c as any).type, ((this as any).exit as any)(o), (c as any).value = s, ((((c as any).data as any).hChildren as any).push as any)({
      type: "text",
      value: s
    });
  }
  function u(this: any, o: any): any {
    (((((this as any).config as any).enter as any).data as any).call as any)(this, o), (((((this as any).config as any).exit as any).data as any).call as any)(this, o);
  }
}
function Lc(this: any, e: any): any {
  let t: any = ((e || {}) as any).singleDollarTextMath;
  return (t as any) == (null as any) && (t = !0), (r as any).peek = i, {
    unsafe: [{
      character: "\r",
      inConstruct: "mathFlowMeta"
    }, {
      character: `
`,
      inConstruct: "mathFlowMeta"
    }, {
      character: "$",
      after: t ? void 0 : "\\$",
      inConstruct: "phrasing"
    }, {
      character: "$",
      inConstruct: "mathFlowMeta"
    }, {
      atBreak: !0,
      character: "$",
      after: "\\$"
    }],
    handlers: {
      math: n,
      inlineMath: r
    }
  };
  function n(this: any, a: any, l: any, u: any, o: any): any {
    const s: any = (a as any).value || "",
      c: any = ((u as any).createTracker as any)(o),
      f: any = (("$" as any).repeat as any)(((Math as any).max as any)(((Tr as any)(s, "$") as any) + (1 as any), 2)),
      p: any = ((u as any).enter as any)("mathFlow");
    let h: any = ((c as any).move as any)(f);
    if ((a as any).meta) {
      const d: any = ((u as any).enter as any)("mathFlowMeta");
      h += ((c as any).move as any)(((u as any).safe as any)((a as any).meta, {
        after: `
`,
        before: h,
        encode: ["$"],
        ...((c as any).current as any)()
      })), (d as any)();
    }
    return h += ((c as any).move as any)(`
`), s && (h += ((c as any).move as any)((s as any) + (`
` as any))), h += ((c as any).move as any)(f), (p as any)(), h;
  }
  function r(this: any, a: any, l: any, u: any): any {
    let o: any = (a as any).value || "",
      s: any = 1;
    for (t || s++; ((new (RegExp as any)((("(^|[^$])" as any) + ((("\\$" as any).repeat as any)(s) as any) as any) + ("([^$]|$)" as any)) as any).test as any)(o);) s++;
    const c: any = (("$" as any).repeat as any)(s);
    ((/[^ \r\n]/ as any).test as any)(o) && (((/^[ \r\n]/ as any).test as any)(o) && ((/[ \r\n]$/ as any).test as any)(o) || ((/^\$|\$$/ as any).test as any)(o)) && (o = ((" " as any) + (o as any) as any) + (" " as any));
    let f: any = -1;
    for (; (++f as any) < (((u as any).unsafe as any).length as any);) {
      const p: any = ((u as any).unsafe as any)[f];
      if (!(p as any).atBreak) continue;
      const h: any = ((u as any).compilePattern as any)(p);
      let d: any;
      for (; d = ((h as any).exec as any)(o);) {
        let x: any = (d as any).index;
        (((o as any).codePointAt as any)(x) as any) === (10 as any) && (((o as any).codePointAt as any)((x as any) - (1 as any)) as any) === (13 as any) && x--, o = ((((o as any).slice as any)(0, x) as any) + (" " as any) as any) + (((o as any).slice as any)(((d as any).index as any) + (1 as any)) as any);
      }
    }
    return ((c as any) + (o as any) as any) + (c as any);
  }
  function i(this: any): any {
    return "$";
  }
}
const Mc: any = (Wr as any)("dollar"),
  Nc: any = (Wr as any)("backslash"),
  jn: any = {
    tokenize: Rc,
    partial: !0
  };
function Wr(this: any, e: any): any {
  return {
    tokenize: t,
    concrete: !0,
    name: "mathFlow"
  };
  function t(this: any, n: any, r: any, i: any): any {
    const a: any = this,
      l: any = ((a as any).events as any)[(((a as any).events as any).length as any) - (1 as any)],
      u: any = l && (((l as any)[1] as any).type as any) === ("linePrefix" as any) ? ((((l as any)[2] as any).sliceSerialize as any)((l as any)[1], !0) as any).length : 0;
    let o: any = 0;
    return s;
    function s(this: any, k: any): any {
      return ((n as any).enter as any)("mathFlow"), ((n as any).enter as any)("mathFlowFence"), ((n as any).enter as any)("mathFlowFenceSequence"), (c as any)(k);
    }
    function c(this: any, k: any): any {
      if ((e as any) === ("dollar" as any)) {
        if ((k as any) === (36 as any)) return ((n as any).consume as any)(k), o++, c;
      } else {
        if ((o as any) === (0 as any) && (k as any) === (92 as any)) return ((n as any).consume as any)(k), o = 1, c;
        if ((o as any) === (1 as any) && (k as any) === (91 as any)) return ((n as any).consume as any)(k), o = 2, c;
      }
      return (o as any) < (2 as any) ? (i as any)(k) : (((n as any).exit as any)("mathFlowFenceSequence"), (e as any) === ("backslash" as any) ? (((n as any).check as any)({
        tokenize: q,
        partial: !0
      }, v, D) as any)(k) : ((R as any)(n, f, "whitespace") as any)(k));
    }
    function f(this: any, k: any): any {
      return (k as any) === (null as any) || (z as any)(k) ? (h as any)(k) : (((n as any).enter as any)("mathFlowFenceMeta"), ((n as any).enter as any)("chunkString", {
        contentType: "string"
      }), (p as any)(k));
    }
    function p(this: any, k: any): any {
      return (k as any) === (null as any) || (z as any)(k) ? (((n as any).exit as any)("chunkString"), ((n as any).exit as any)("mathFlowFenceMeta"), (h as any)(k)) : (e as any) === ("dollar" as any) && (k as any) === (36 as any) ? (i as any)(k) : (((n as any).consume as any)(k), p);
    }
    function h(this: any, k: any): any {
      return ((n as any).exit as any)("mathFlowFence"), (a as any).interrupt ? (r as any)(k) : (((n as any).attempt as any)(jn, d, E) as any)(k);
    }
    function d(this: any, k: any): any {
      return (((n as any).attempt as any)({
        tokenize: I,
        partial: !0
      }, E, x) as any)(k);
    }
    function x(this: any, k: any): any {
      return ((u ? (R as any)(n, C, "linePrefix", (u as any) + (1 as any)) : C) as any)(k);
    }
    function C(this: any, k: any): any {
      return (k as any) === (null as any) ? (E as any)(k) : (z as any)(k) ? (((n as any).attempt as any)(jn, d, E) as any)(k) : (((n as any).enter as any)("mathFlowValue"), (b as any)(k));
    }
    function b(this: any, k: any): any {
      return (k as any) === (null as any) || (z as any)(k) ? (((n as any).exit as any)("mathFlowValue"), (C as any)(k)) : (((n as any).consume as any)(k), b);
    }
    function I(this: any, k: any, _: any, F: any): any {
      let A: any = 0;
      return (R as any)(k, P, "linePrefix", ((((((a as any).parser as any).constructs as any).disable as any).null as any).includes as any)("codeIndented") ? void 0 : 4);
      function P(this: any, N: any): any {
        return ((k as any).enter as any)("mathFlowFence"), ((k as any).enter as any)("mathFlowFenceSequence"), (H as any)(N);
      }
      function H(this: any, N: any): any {
        if ((e as any) === ("dollar" as any)) {
          if ((N as any) === (36 as any)) return A++, ((k as any).consume as any)(N), H;
        } else {
          if ((A as any) === (0 as any) && (N as any) === (92 as any)) return A = 1, ((k as any).consume as any)(N), H;
          if ((A as any) === (1 as any) && (N as any) === (93 as any)) return A = 2, ((k as any).consume as any)(N), H;
        }
        return (e as any) === ("dollar" as any) && (A as any) < (o as any) || (e as any) === ("backslash" as any) && (A as any) !== (o as any) ? (F as any)(N) : (((k as any).exit as any)("mathFlowFenceSequence"), ((R as any)(k, O, "whitespace") as any)(N));
      }
      function O(this: any, N: any): any {
        return (N as any) === (null as any) || (z as any)(N) ? (((k as any).exit as any)("mathFlowFence"), (_ as any)(N)) : (F as any)(N);
      }
    }
    function E(this: any, k: any): any {
      return ((n as any).exit as any)("mathFlow"), (r as any)(k);
    }
    function D(this: any, k: any): any {
      return ((R as any)(n, f, "whitespace") as any)(k);
    }
    function v(this: any, k: any): any {
      return ((R as any)(n, S, "whitespace") as any)(k);
    }
    function S(this: any, k: any): any {
      return ((n as any).exit as any)("mathFlowFence"), (M as any)(k);
    }
    function M(this: any, k: any): any {
      return (k as any) === (null as any) || (z as any)(k) ? (E as any)(k) : (((n as any).attempt as any)({
        tokenize: y,
        partial: !0
      }, E, $) as any)(k);
    }
    function $(this: any, k: any): any {
      return ((n as any).enter as any)("mathFlowValue"), ((n as any).consume as any)(k), ((n as any).exit as any)("mathFlowValue"), M;
    }
    function q(this: any, k: any, _: any, F: any): any {
      return A;
      function A(this: any, O: any): any {
        return (O as any) === (null as any) || (z as any)(O) ? (F as any)(O) : (((k as any).enter as any)("mathFlowValue"), (P as any)(O));
      }
      function P(this: any, O: any): any {
        return (O as any) === (null as any) || (z as any)(O) ? (((k as any).exit as any)("mathFlowValue"), (F as any)(O)) : (O as any) === (92 as any) ? (((k as any).consume as any)(O), H) : (((k as any).consume as any)(O), P);
      }
      function H(this: any, O: any): any {
        return (O as any) === (93 as any) ? (((k as any).consume as any)(O), ((k as any).exit as any)("mathFlowValue"), (_ as any)(O)) : (P as any)(O);
      }
    }
    function y(this: any, k: any, _: any, F: any): any {
      return A;
      function A(this: any, N: any): any {
        return ((R as any)(k, P, "whitespace") as any)(N);
      }
      function P(this: any, N: any): any {
        return (N as any) !== (92 as any) ? (F as any)(N) : (((k as any).enter as any)("mathFlowFence"), ((k as any).enter as any)("mathFlowFenceSequence"), ((k as any).consume as any)(N), H);
      }
      function H(this: any, N: any): any {
        return (N as any) !== (93 as any) ? (F as any)(N) : (((k as any).consume as any)(N), ((k as any).exit as any)("mathFlowFenceSequence"), (R as any)(k, O, "whitespace"));
      }
      function O(this: any, N: any): any {
        return (N as any) === (null as any) || (z as any)(N) ? (((k as any).exit as any)("mathFlowFence"), (_ as any)(N)) : (F as any)(N);
      }
    }
  }
}
function Rc(this: any, e: any, t: any, n: any): any {
  const r: any = this;
  return i;
  function i(this: any, l: any): any {
    return (l as any) === (null as any) ? (t as any)(l) : (((e as any).enter as any)("lineEnding"), ((e as any).consume as any)(l), ((e as any).exit as any)("lineEnding"), a);
  }
  function a(this: any, l: any): any {
    return (((r as any).parser as any).lazy as any)[(((r as any).now as any)() as any).line] ? (n as any)(l) : (t as any)(l);
  }
}
function vc(this: any, e: any): any {
  let n: any = ((e || {}) as any).singleDollarTextMath;
  return (n as any) == (null as any) && (n = !0), {
    dollar: (Oc as any)(n),
    backslash: [(qn as any)(40, 41), (qn as any)(91, 93)]
  };
}
function Oc(this: any, e: any): any {
  return {
    tokenize: t,
    resolve: Qr,
    previous: jc,
    name: "mathText"
  };
  function t(this: any, n: any, r: any, i: any): any {
    let a: any = 0,
      l: any,
      u: any;
    return o;
    function o(this: any, h: any): any {
      return ((n as any).enter as any)("mathText"), ((n as any).enter as any)("mathTextSequence"), (s as any)(h);
    }
    function s(this: any, h: any): any {
      return (h as any) === (36 as any) ? (((n as any).consume as any)(h), a++, s) : (a as any) < (2 as any) && !e ? (i as any)(h) : (((n as any).exit as any)("mathTextSequence"), (c as any)(h));
    }
    function c(this: any, h: any): any {
      return (h as any) === (null as any) ? (i as any)(h) : (h as any) === (36 as any) ? (u = ((n as any).enter as any)("mathTextSequence"), l = 0, (p as any)(h)) : (h as any) === (32 as any) ? (((n as any).enter as any)("space"), ((n as any).consume as any)(h), ((n as any).exit as any)("space"), c) : (z as any)(h) ? (((n as any).enter as any)("lineEnding"), ((n as any).consume as any)(h), ((n as any).exit as any)("lineEnding"), c) : (((n as any).enter as any)("mathTextData"), (f as any)(h));
    }
    function f(this: any, h: any): any {
      return (h as any) === (null as any) || (h as any) === (32 as any) || (h as any) === (36 as any) || (z as any)(h) ? (((n as any).exit as any)("mathTextData"), (c as any)(h)) : (((n as any).consume as any)(h), f);
    }
    function p(this: any, h: any): any {
      return (h as any) === (36 as any) ? (((n as any).consume as any)(h), l++, p) : (l as any) === (a as any) ? (((n as any).exit as any)("mathTextSequence"), ((n as any).exit as any)("mathText"), (r as any)(h)) : ((u as any).type = "mathTextData", (f as any)(h));
    }
  }
}
function Bc(this: any, e: any): any {
  let t: any = (e as any).length;
  for (; t--;) {
    const n: any = ((e as any)[t] as any)[1];
    if ((((n as any).type as any) === ("labelLink" as any) || ((n as any).type as any) === ("labelImage" as any)) && !(n as any)._balanced) return !0;
  }
  return !1;
}
function qn(this: any, e: any, t: any): any {
  return {
    tokenize: n,
    resolve: Qr,
    previous: qc,
    name: "mathText"
  };
  function n(this: any, r: any, i: any, a: any): any {
    const l: any = this;
    let u: any = 0,
      o: any,
      s: any;
    return c;
    function c(this: any, x: any): any {
      return (e as any) === (91 as any) && (Bc as any)((l as any).events) ? (a as any)(x) : (((r as any).enter as any)("mathText"), ((r as any).enter as any)("mathTextSequence"), (f as any)(x));
    }
    function f(this: any, x: any): any {
      return (u as any) === (0 as any) && (x as any) === (92 as any) ? (((r as any).consume as any)(x), u = 1, f) : (u as any) === (1 as any) && (x as any) === (e as any) ? (((r as any).consume as any)(x), u = 2, f) : (u as any) < (2 as any) ? (a as any)(x) : (((r as any).exit as any)("mathTextSequence"), (p as any)(x));
    }
    function p(this: any, x: any): any {
      return (x as any) === (null as any) ? (a as any)(x) : (x as any) === (92 as any) ? (s = ((r as any).enter as any)("mathTextSequence"), o = 0, (d as any)(x)) : (x as any) === (32 as any) ? (((r as any).enter as any)("space"), ((r as any).consume as any)(x), ((r as any).exit as any)("space"), p) : (z as any)(x) ? (((r as any).enter as any)("lineEnding"), ((r as any).consume as any)(x), ((r as any).exit as any)("lineEnding"), p) : (((r as any).enter as any)("mathTextData"), (h as any)(x));
    }
    function h(this: any, x: any): any {
      return (x as any) === (null as any) || (x as any) === (32 as any) || (x as any) === (92 as any) || (z as any)(x) ? (((r as any).exit as any)("mathTextData"), (p as any)(x)) : (((r as any).consume as any)(x), h);
    }
    function d(this: any, x: any): any {
      if ((o as any) === (2 as any)) return ((r as any).exit as any)("mathTextSequence"), ((r as any).exit as any)("mathText"), (i as any)(x);
      if ((o as any) === (0 as any)) {
        if ((x as any) === (92 as any)) return ((r as any).consume as any)(x), o = 1, d;
      } else if ((o as any) === (1 as any) && (x as any) === (t as any)) return ((r as any).consume as any)(x), o = 2, d;
      return (s as any).type = "mathTextData", (h as any)(x);
    }
  }
}
function Qr(this: any, e: any): any {
  let t: any = ((e as any).length as any) - (4 as any),
    n: any = 3,
    r: any,
    i: any;
  if ((((((e as any)[n] as any)[1] as any).type as any) === ("lineEnding" as any) || ((((e as any)[n] as any)[1] as any).type as any) === ("space" as any)) && (((((e as any)[t] as any)[1] as any).type as any) === ("lineEnding" as any) || ((((e as any)[t] as any)[1] as any).type as any) === ("space" as any))) {
    for (r = n; (++r as any) < (t as any);) if (((((e as any)[r] as any)[1] as any).type as any) === ("mathTextData" as any)) {
      (((e as any)[t] as any)[1] as any).type = "mathTextPadding", (((e as any)[n] as any)[1] as any).type = "mathTextPadding", n += 2, t -= 2;
      break;
    }
  }
  for (r = (n as any) - (1 as any), t++; (++r as any) <= (t as any);) (i as any) === (void 0 as any) ? (r as any) !== (t as any) && ((((e as any)[r] as any)[1] as any).type as any) !== ("lineEnding" as any) && (i = r) : ((r as any) === (t as any) || ((((e as any)[r] as any)[1] as any).type as any) === ("lineEnding" as any)) && ((((e as any)[i] as any)[1] as any).type = "mathTextData", (r as any) !== ((i as any) + (2 as any) as any) && ((((e as any)[i] as any)[1] as any).end = (((e as any)[(r as any) - (1 as any)] as any)[1] as any).end, ((e as any).splice as any)((i as any) + (2 as any), ((r as any) - (i as any) as any) - (2 as any)), t -= ((r as any) - (i as any) as any) - (2 as any), r = (i as any) + (2 as any)), i = void 0);
  return e;
}
function jc(this: any, e: any): any {
  return (e as any) !== (36 as any) || (((((this as any).events as any)[(((this as any).events as any).length as any) - (1 as any)] as any)[1] as any).type as any) === ("characterEscape" as any);
}
function qc(this: any, e: any): any {
  return (e as any) !== (92 as any) || (((((this as any).events as any)[(((this as any).events as any).length as any) - (1 as any)] as any)[1] as any).type as any) === ("characterEscape" as any);
}
function $c(this: any, e: any): any {
  const t: any = (vc as any)(e);
  return {
    flow: {
      36: Mc,
      92: Nc
    },
    text: {
      36: (t as any).dollar,
      92: (t as any).backslash
    }
  };
}
const Hc: any = {};
function Vc(this: any, e: any): any {
  const t: any = this,
    n: any = e || Hc,
    r: any = ((t as any).data as any)(),
    i: any = (r as any).micromarkExtensions || ((r as any).micromarkExtensions = []),
    a: any = (r as any).fromMarkdownExtensions || ((r as any).fromMarkdownExtensions = []),
    l: any = (r as any).toMarkdownExtensions || ((r as any).toMarkdownExtensions = []);
  ((i as any).push as any)(($c as any)(n)), ((a as any).push as any)((Dc as any)()), ((l as any).push as any)((Lc as any)(n));
}
const At: any = (Symbol as any)("sand-markdown-structure");
function Gr(this: any, e: any): any {
  return (Pt as any)(e) && (typeof (e as any).type as any) == ("string" as any) && ((Array as any).isArray as any)((e as any).children);
}
function Uc(this: any, e: any): any {
  return (Gr as any)(e) && ((e as any).type as any) === ("root" as any);
}
function Yr(this: any, e: any): any {
  return (Gr as any)(e) && ((e as any).type as any) === ("element" as any) && "tagName" in e && (typeof (e as any).tagName as any) == ("string" as any) && "properties" in e && (Pt as any)((e as any).properties);
}
function Wc(this: any, e: any): any {
  return (Pt as any)(e) && At in e && ((e as any)[At] as any) === (!0 as any);
}
function Qc(this: any, e: any, t: any): any {
  const n: any = (e as any).data ?? {};
  ((Object as any).assign as any)(n, {
    sandMarkdown: t
  }), (e as any).data = n;
}
function Gc(this: any, e: any): any {
  (Qe as any)((e as any) !== (void 0 as any), "react-markdown omitted a custom component's HAST node");
  const t: any = (e as any).data;
  return (Qe as any)((t as any) !== (void 0 as any) && "sandMarkdown" in t && (Wc as any)((t as any).sandMarkdown), "react-markdown supplied an unannotated HAST node"), (t as any).sandMarkdown;
}
function $n(this: any, e: any, t: any): any {
  const n: any = ((e as any).properties as any).className;
  return (typeof n as any) == ("string" as any) ? ((((n as any).split as any)(/\s+/) as any).includes as any)(t) : ((Array as any).isArray as any)(n) ? ((n as any).some as any)((r: any): any => (r as any) === (t as any)) : !1;
}
function Xr(this: any, e: any): any {
  return ((e as any).tagName as any) !== ("input" as any) || (((e as any).properties as any).type as any) !== ("checkbox" as any) ? null : (((e as any).properties as any).checked as any) === (!0 as any);
}
function Yc(this: any, e: any, t: any): any {
  const n: any = (Xr as any)(e);
  return (n as any) !== (null as any) ? {
    kind: "checkbox",
    checked: n
  } : ($n as any)(e, "contains-task-list") ? {
    kind: "list"
  } : ($n as any)(e, "task-list-item") ? ((Qe as any)((t as any) !== (null as any), "GFM task-list item did not contain a checkbox"), {
    kind: "item",
    checked: t
  }) : {
    kind: "none"
  };
}
function Xc(this: any, e: any, t: any): any {
  if (((e as any).tagName as any) !== ("a" as any) || (t as any) === (null as any)) return null;
  const n: any = (e as any).position?.start.offset;
  return (n as any) === (void 0 as any) ? null : (((t as any).charAt as any)(n) as any) === ("[" as any) ? "explicit" : "autolink";
}
function Jc(this: any, e: any): any {
  const t: any = (((e as any).children as any).filter as any)((n: any): any => (Yr as any)(n) && ((n as any).tagName as any) === ("th" as any));
  return ((t as any).length as any) > (0 as any) && ((t as any).every as any)((n: any): any => (((n as any).children as any).every as any)((r: any): any => ((r as any).type as any) === ("text" as any) && (((((r as any).value as any).trim as any)() as any).length as any) === (0 as any)));
}
function Kc(this: any, e: any, t: any): any {
  return ((e as any).tagName as any) !== ("ul" as any) && ((e as any).tagName as any) !== ("ol" as any) ? t : {
    total: ((t as any).total as any) + (1 as any),
    unordered: ((t as any).unordered as any) + ((((e as any).tagName as any) === ("ul" as any) ? 1 : 0) as any)
  };
}
function Jr(this: any, e: any, t: any, n: any): any {
  const r: any = (((e as any).children as any).filter as any)(Yr),
    i: any = ((r as any).map as any)((u: any): any => (n as any).classifyProseCard?.(u) ?? null);
  let a: any = null,
    l: any = null;
  for (const [u, o] of ((r as any).entries as any)()) {
    const s: any = {
        index: u,
        count: (r as any).length,
        isFirst: (u as any) === (0 as any),
        isLast: (u as any) === (((r as any).length as any) - (1 as any) as any)
      },
      c: any = (Jr as any)(o, {
        parentTag: (o as any).tagName,
        listDepth: (Kc as any)(o, (t as any).listDepth),
        isFinalBodyRow: ((t as any).parentTag as any) === ("tbody" as any) && ((o as any).tagName as any) === ("tr" as any) && (s as any).isLast,
        isBlankTableHeader: ((t as any).parentTag as any) === ("thead" as any) && ((o as any).tagName as any) === ("tr" as any) && (Jc as any)(o)
      }, n),
      p: any = (Xr as any)(o) ?? c,
      h: any = (i as any)[u] ?? null,
      d: any = {
        [At]: !0,
        elementSibling: s,
        parentTag: (t as any).parentTag,
        followsParagraph: (a as any) === ("p" as any),
        listDepth: (t as any).listDepth,
        task: (Yc as any)(o, c),
        isFinalBodyRow: ((t as any).parentTag as any) === ("tr" as any) && ((o as any).tagName as any) === ("td" as any) && (t as any).isFinalBodyRow,
        isBlankTableHeaderCell: ((t as any).parentTag as any) === ("tr" as any) && ((o as any).tagName as any) === ("th" as any) && (t as any).isBlankTableHeader,
        proseCard: (h as any) == (null as any) ? {
          kind: "none"
        } : {
          kind: "card",
          card: h,
          run: {
            joinsPrevious: (((i as any)[(u as any) - (1 as any)] ?? null) as any) != (null as any),
            joinsNext: (((i as any)[(u as any) + (1 as any)] ?? null) as any) != (null as any)
          }
        },
        linkSyntax: (Xc as any)(o, (n as any).source)
      };
    (Qc as any)(o, d), a = (o as any).tagName, (l as any) === (null as any) && (p as any) !== (null as any) && (l = p);
  }
  return l;
}
function Zc(this: any, e: any = {}): any {
  return function (this: any, n: any, r: any): any {
    (Qe as any)((Uc as any)(n), "Expected react-markdown to provide a HAST root"), (Jr as any)(n, {
      parentTag: null,
      listDepth: {
        total: 0,
        unordered: 0
      },
      isFinalBodyRow: !1,
      isBlankTableHeader: !1
    }, {
      classifyProseCard: (e as any).classifyProseCard,
      source: (typeof r?.value as any) == ("string" as any) ? (r as any).value : null
    });
  };
}
const hf: any = [Zc],
  Hn: any = {
    displayScroll: {
      ks0D6T: "sand-10y958y",
      $$css: !0
    },
    displayScrollContent: {
      k7Eaqz: "sand-gqtt45",
      $$css: !0
    }
  },
  Ft: string = "sand-math",
  Kr: string = "sand-math-display";
function Zr(this: any, e: any): any {
  if (((e as any).type as any) === ("code" as any) && ((e as any).lang as any) === ("math" as any) && ((e as any).type = "math"), ((e as any).type as any) === ("math" as any) || ((e as any).type as any) === ("inlineMath" as any)) {
    const t: any = ((e as any).type as any) === ("math" as any) ? [Ft, Kr] : [Ft];
    (e as any).data = {
      hName: "span",
      hProperties: {
        className: t
      },
      hChildren: [{
        type: "text",
        value: (e as any).value ?? ""
      }]
    };
    return;
  }
  for (const t of (e as any).children ?? []) (Zr as any)(t);
}
function ef(this: any): any {
  return (e: any): any => {
    (Zr as any)(e);
  };
}
const pf: any = [[Vc, {
    singleDollarTextMath: !1
  }], ef],
  zt: any = (ki as any)(null);
let Vn: any = null;
function tf(this: any): any {
  return Vn ??= (((fi as any)((): any => import("./chunk-markdown-math-katex-D30cPtUu.js"), (__vite__mapDeps as any)([0, 1, 2]), (import.meta as any).url) as any).then as any)((e: any): any => {
    ((zt as any).set as any)(e);
  }, (e: any): any => {
    (wi as any)(e, {
      level: "warning",
      tags: {
        sand_area: "markdown-math"
      }
    }), Vn = null;
  }), (): any => {};
}
function Un(this: any, e: any, t: any): any {
  return (e as any) != (null as any) && ((((e as any).split as any)(/\s+/) as any).includes as any)(t);
}
function ei(this: any, e: any): any {
  (ei as any).d = 643;
  const t: any = ((Qn as any).c as any)(16);
  let n: any, r: any, i: any;
  ((t as any)[0] as any) !== (e as any) ? ({
    tex: i,
    display: n,
    ...r
  } = e, (t as any)[0] = e, (t as any)[1] = n, (t as any)[2] = r, (t as any)[3] = i) : (n = (t as any)[1], r = (t as any)[2], i = (t as any)[3]);
  const a: any = ((ci as any).useSyncExternalStore as any)((zt as any).subscribe, (zt as any).get);
  (yi as any)(tf);
  let l: any;
  ((t as any)[4] as any) !== (n as any) || ((t as any)[5] as any) !== (a as any) || ((t as any)[6] as any) !== (i as any) ? (l = a?.renderMathHtml(i, n), (t as any)[4] = n, (t as any)[5] = a, (t as any)[6] = i, (t as any)[7] = l) : l = (t as any)[7];
  const u: any = l;
  if ((u as any) == (null as any)) {
    let c: any;
    return ((t as any)[8] as any) !== (r as any) || ((t as any)[9] as any) !== (i as any) ? (c = ((pe as any).jsx as any)("span", {
      ...r,
      dir: "ltr",
      children: i
    }), (t as any)[8] = r, (t as any)[9] = i, (t as any)[10] = c) : c = (t as any)[10], c;
  }
  let o: any;
  ((t as any)[11] as any) !== (u as any) ? (o = {
    __html: u
  }, (t as any)[11] = u, (t as any)[12] = o) : o = (t as any)[12];
  let s: any;
  return ((t as any)[13] as any) !== (r as any) || ((t as any)[14] as any) !== (o as any) ? (s = ((pe as any).jsx as any)("span", {
    ...r,
    dangerouslySetInnerHTML: o,
    dir: "ltr"
  }), (t as any)[13] = r, (t as any)[14] = o, (t as any)[15] = s) : s = (t as any)[15], s;
}
function nf(this: any, e: any): any {
  (nf as any).d = 644;
  const t: any = ((Qn as any).c as any)(29);
  let n: any, r: any, i: any, a: any;
  if (((t as any)[0] as any) !== (e as any) ? ({
    node: i,
    children: n,
    className: r,
    ...a
  } = e, (t as any)[0] = e, (t as any)[1] = n, (t as any)[2] = r, (t as any)[3] = i, (t as any)[4] = a) : (n = (t as any)[1], r = (t as any)[2], i = (t as any)[3], a = (t as any)[4]), (Gc as any)(i), !(Un as any)(r, Ft)) {
    let b: any;
    return ((t as any)[5] as any) !== (n as any) || ((t as any)[6] as any) !== (r as any) || ((t as any)[7] as any) !== (a as any) ? (b = ((pe as any).jsx as any)("span", {
      ...a,
      className: r,
      children: n
    }), (t as any)[5] = n, (t as any)[6] = r, (t as any)[7] = a, (t as any)[8] = b) : b = (t as any)[8], b;
  }
  let l: any;
  ((t as any)[9] as any) !== (r as any) ? (l = (Un as any)(r, Kr), (t as any)[9] = r, (t as any)[10] = l) : l = (t as any)[10];
  const u: any = l;
  let o: any;
  ((t as any)[11] as any) !== (n as any) ? (o = (Si as any)(n), (t as any)[11] = n, (t as any)[12] = o) : o = (t as any)[12];
  const s: any = o;
  let c: any, f: any, p: any, h: any;
  ((t as any)[13] as any) !== (r as any) || ((t as any)[14] as any) !== (u as any) || ((t as any)[15] as any) !== (a as any) ? (f = ({
    0: {
      className: "sand-1h4wwuj"
    },
    1: {
      className: "sand-1lliihq sand-1iyjqo2 sand-euugli"
    }
  } as any)[(!!u as any) << (0 as any)], c = ei, p = a, h = (bi as any)(r, (f as any).className), (t as any)[13] = r, (t as any)[14] = u, (t as any)[15] = a, (t as any)[16] = c, (t as any)[17] = f, (t as any)[18] = p, (t as any)[19] = h) : (c = (t as any)[16], f = (t as any)[17], p = (t as any)[18], h = (t as any)[19]);
  let d: any;
  ((t as any)[20] as any) !== (c as any) || ((t as any)[21] as any) !== (u as any) || ((t as any)[22] as any) !== ((f as any).style as any) || ((t as any)[23] as any) !== (p as any) || ((t as any)[24] as any) !== (h as any) || ((t as any)[25] as any) !== (s as any) ? (d = ((pe as any).jsx as any)(c, {
    ...p,
    className: h,
    display: u,
    style: (f as any).style,
    tex: s
  }), (t as any)[20] = c, (t as any)[21] = u, (t as any)[22] = (f as any).style, (t as any)[23] = p, (t as any)[24] = h, (t as any)[25] = s, (t as any)[26] = d) : d = (t as any)[26];
  const x: any = d;
  if (!u) return x;
  let C: any;
  return ((t as any)[27] as any) !== (x as any) ? (C = ((pe as any).jsx as any)(xi, {
    contentStyle: (Hn as any).displayScrollContent,
    direction: "horizontal",
    rootStyle: (Hn as any).displayScroll,
    scrollbarVisibility: "hover",
    children: x
  }), (t as any)[27] = x, (t as any)[28] = C) : C = (t as any)[28], C;
}
export { cf as M, pf as a, hf as b, nf as c, Zc as d, Gc as g, ff as r };
//# debugId=e5fab1bb-c8ee-418a-8032-7e4286e2269b
