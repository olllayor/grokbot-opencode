declare var Blob: any;
declare var ResizeObserver: any;
declare var TextDecoder: any;
declare var TextEncoder: any;
declare var URL: any;
declare var Worker: any;
declare var cancelAnimationFrame: any;
declare var clearTimeout: any;
declare var console: any;
declare var document: any;
declare var global: any;
declare var key: any;
declare var navigator: any;
declare var performance: any;
declare var requestAnimationFrame: any;
declare var self: any;
declare var setTimeout: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "980f256c-d942-4867-9084-000843a837eb", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-980f256c-d942-4867-9084-000843a837eb");
  } catch (e: any) {}
} as any)();
import { r as S, R as Dr, p as it, j as K } from "./index.eager-vendor-Qbf9YA6n.js";
import { b8 as jr, b9 as oo, ba as Gt } from "./index.eager-platform-Dcfeegfw.js";
import { a as Se, m as De, t as ao, b as io, d as kn, e as Cn, C as lo, l as co, M as uo, f as ho, r as po, s as fo, g as go } from "./chunk-shiki-token-cache-hLYN1QGX.js";
import { w as _n, s as Ur, f as mo, a as yo, b as bo, c as jn, h as wo } from "./chunk-index-C0dBjfzC.js";
import "./index.eager-common-CdCvBQNJ.js";
var A: any = class extends (Error as any) {
  declare name: any;
  [key: string]: any;
  constructor(t: any) {
    super(t), (this as any).name = "ShikiError";
  }
};
function ko(this: any, t: any): any {
  return (Sn as any)(t);
}
function Sn(this: any, t: any): any {
  return ((Array as any).isArray as any)(t) ? (Co as any)(t) : t instanceof RegExp ? t : (typeof t as any) == ("object" as any) ? (_o as any)(t) : t;
}
function Co(this: any, t: any): any {
  let e: any = [];
  for (let n: any = 0, r: any = (t as any).length; (n as any) < (r as any); n++) (e as any)[n] = (Sn as any)((t as any)[n]);
  return e;
}
function _o(this: any, t: any): any {
  let e: any = {};
  for (let n in t) (e as any)[n] = (Sn as any)((t as any)[n]);
  return e;
}
function Wr(this: any, t: any, ...e: any): any {
  return ((e as any).forEach as any)((n: any): any => {
    for (let r in n) (t as any)[r] = (n as any)[r];
  }), t;
}
function zr(this: any, t: any): any {
  const e: any = ~((t as any).lastIndexOf as any)("/") || ~((t as any).lastIndexOf as any)("\\");
  return (e as any) === (0 as any) ? t : (~e as any) === (((t as any).length as any) - (1 as any) as any) ? (zr as any)(((t as any).substring as any)(0, ((t as any).length as any) - (1 as any))) : ((t as any).substr as any)((~e as any) + (1 as any));
}
var Bt: any = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/g,
  Je: any = class {
    [key: string]: any;
    static hasCaptures(t: any): any {
      return (t as any) === (null as any) ? !1 : ((Bt as any).lastIndex = 0, ((Bt as any).test as any)(t));
    }
    static replaceCaptures(t: any, e: any, n: any): any {
      return ((t as any).replace as any)(Bt, (r: any, s: any, o: any, a: any): any => {
        let i: any = (n as any)[(parseInt as any)(s || o, 10)];
        if (i) {
          let l: any = ((e as any).substring as any)((i as any).start, (i as any).end);
          for (; ((l as any)[0] as any) === ("." as any);) l = ((l as any).substring as any)(1);
          switch (a) {
            case "downcase":
              return ((l as any).toLowerCase as any)();
            case "upcase":
              return ((l as any).toUpperCase as any)();
            default:
              return l;
          }
        } else return r;
      });
    }
  };
function qr(this: any, t: any, e: any): any {
  return (t as any) < (e as any) ? -1 : (t as any) > (e as any) ? 1 : 0;
}
function Hr(this: any, t: any, e: any): any {
  if ((t as any) === (null as any) && (e as any) === (null as any)) return 0;
  if (!t) return -1;
  if (!e) return 1;
  let n: any = (t as any).length,
    r: any = (e as any).length;
  if ((n as any) === (r as any)) {
    for (let s: any = 0; (s as any) < (n as any); s++) {
      let o: any = (qr as any)((t as any)[s], (e as any)[s]);
      if ((o as any) !== (0 as any)) return o;
    }
    return 0;
  }
  return (n as any) - (r as any);
}
function Un(this: any, t: any): any {
  return !!(((/^#[0-9a-f]{6}$/i as any).test as any)(t) || ((/^#[0-9a-f]{8}$/i as any).test as any)(t) || ((/^#[0-9a-f]{3}$/i as any).test as any)(t) || ((/^#[0-9a-f]{4}$/i as any).test as any)(t));
}
function Vr(this: any, t: any): any {
  return ((t as any).replace as any)(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&");
}
var Xr: any = class {
    declare fn: any;
    [key: string]: any;
    constructor(t: any) {
      (this as any).fn = t;
    }
    cache: any = new (Map as any)();
    get(t: any): any {
      if ((((this as any).cache as any).has as any)(t)) return (((this as any).cache as any).get as any)(t);
      const e: any = ((this as any).fn as any)(t);
      return (((this as any).cache as any).set as any)(t, e), e;
    }
  },
  dt: any = class {
    declare _root: any;
    declare _defaults: any;
    declare _colorMap: any;
    [key: string]: any;
    constructor(t: any, e: any, n: any) {
      (this as any)._colorMap = t, (this as any)._defaults = e, (this as any)._root = n;
    }
    static createFromRawTheme(t: any, e: any): any {
      return ((this as any).createFromParsedTheme as any)((vo as any)(t), e);
    }
    static createFromParsedTheme(t: any, e: any): any {
      return (Eo as any)(t, e);
    }
    _cachedMatchRoot: any = new (Xr as any)((t: any): any => (((this as any)._root as any).match as any)(t));
    getColorMap(): any {
      return (((this as any)._colorMap as any).getColorMap as any)();
    }
    getDefaults(): any {
      return (this as any)._defaults;
    }
    match(t: any): any {
      if ((t as any) === (null as any)) return (this as any)._defaults;
      const e: any = (t as any).scopeName,
        r: any = (((((this as any)._cachedMatchRoot as any).get as any)(e) as any).find as any)((s: any): any => (So as any)((t as any).parent, (s as any).parentScopes));
      return r ? new (Kr as any)((r as any).fontStyle, (r as any).foreground, (r as any).background) : null;
    }
  },
  Ft: any = class lt {
    declare scopeName: any;
    declare parent: any;
    [key: string]: any;
    constructor(e: any, n: any) {
      (this as any).parent = e, (this as any).scopeName = n;
    }
    static push(e: any, n: any): any {
      for (const r of n) e = new (lt as any)(e, r);
      return e;
    }
    static from(...e: any): any {
      let n: any = null;
      for (let r: any = 0; (r as any) < ((e as any).length as any); r++) n = new (lt as any)(n, (e as any)[r]);
      return n;
    }
    push(e: any): any {
      return new (lt as any)(this, e);
    }
    getSegments(): any {
      let e: any = this;
      const n: any = [];
      for (; e;) ((n as any).push as any)((e as any).scopeName), e = (e as any).parent;
      return ((n as any).reverse as any)(), n;
    }
    toString(): any {
      return ((((this as any).getSegments as any)() as any).join as any)(" ");
    }
    extends(e: any): any {
      return (this as any) === (e as any) ? !0 : ((this as any).parent as any) === (null as any) ? !1 : (((this as any).parent as any).extends as any)(e);
    }
    getExtensionIfDefined(e: any): any {
      const n: any = [];
      let r: any = this;
      for (; r && (r as any) !== (e as any);) ((n as any).push as any)((r as any).scopeName), r = (r as any).parent;
      return (r as any) === (e as any) ? ((n as any).reverse as any)() : void 0;
    }
  };
function So(this: any, t: any, e: any): any {
  if (((e as any).length as any) === (0 as any)) return !0;
  for (let n: any = 0; (n as any) < ((e as any).length as any); n++) {
    let r: any = (e as any)[n],
      s: any = !1;
    if ((r as any) === (">" as any)) {
      if ((n as any) === (((e as any).length as any) - (1 as any) as any)) return !1;
      r = (e as any)[++n], s = !0;
    }
    for (; t && !(xo as any)((t as any).scopeName, r);) {
      if (s) return !1;
      t = (t as any).parent;
    }
    if (!t) return !1;
    t = (t as any).parent;
  }
  return !0;
}
function xo(this: any, t: any, e: any): any {
  return (e as any) === (t as any) || ((t as any).startsWith as any)(e) && ((t as any)[(e as any).length] as any) === ("." as any);
}
var Kr: any = class {
  declare backgroundId: any;
  declare foregroundId: any;
  declare fontStyle: any;
  [key: string]: any;
  constructor(t: any, e: any, n: any) {
    (this as any).fontStyle = t, (this as any).foregroundId = e, (this as any).backgroundId = n;
  }
};
function vo(this: any, t: any): any {
  if (!t) return [];
  if (!(t as any).settings || !((Array as any).isArray as any)((t as any).settings)) return [];
  let e: any = (t as any).settings,
    n: any = [],
    r: any = 0;
  for (let s: any = 0, o: any = (e as any).length; (s as any) < (o as any); s++) {
    let a: any = (e as any)[s];
    if (!(a as any).settings) continue;
    let i: any;
    if ((typeof (a as any).scope as any) == ("string" as any)) {
      let h: any = (a as any).scope;
      h = ((h as any).replace as any)(/^[,]+/, ""), h = ((h as any).replace as any)(/[,]+$/, ""), i = ((h as any).split as any)(",");
    } else ((Array as any).isArray as any)((a as any).scope) ? i = (a as any).scope : i = [""];
    let l: any = -1;
    if ((typeof ((a as any).settings as any).fontStyle as any) == ("string" as any)) {
      l = 0;
      let h: any = ((((a as any).settings as any).fontStyle as any).split as any)(" ");
      for (let d: any = 0, p: any = (h as any).length; (d as any) < (p as any); d++) switch ((h as any)[d]) {
        case "italic":
          l = (l as any) | (1 as any);
          break;
        case "bold":
          l = (l as any) | (2 as any);
          break;
        case "underline":
          l = (l as any) | (4 as any);
          break;
        case "strikethrough":
          l = (l as any) | (8 as any);
          break;
      }
    }
    let c: any = null;
    (typeof ((a as any).settings as any).foreground as any) == ("string" as any) && (Un as any)(((a as any).settings as any).foreground) && (c = ((a as any).settings as any).foreground);
    let u: any = null;
    (typeof ((a as any).settings as any).background as any) == ("string" as any) && (Un as any)(((a as any).settings as any).background) && (u = ((a as any).settings as any).background);
    for (let h: any = 0, d: any = (i as any).length; (h as any) < (d as any); h++) {
      let f: any = (((((i as any)[h] as any).trim as any)() as any).split as any)(" "),
        b: any = (f as any)[((f as any).length as any) - (1 as any)],
        g: any = null;
      ((f as any).length as any) > (1 as any) && (g = ((f as any).slice as any)(0, ((f as any).length as any) - (1 as any)), ((g as any).reverse as any)()), (n as any)[r++] = new (Ao as any)(b, g, s, l, c, u);
    }
  }
  return n;
}
var Ao: any = class {
    declare background: any;
    declare foreground: any;
    declare fontStyle: any;
    declare index: any;
    declare parentScopes: any;
    declare scope: any;
    [key: string]: any;
    constructor(t: any, e: any, n: any, r: any, s: any, o: any) {
      (this as any).scope = t, (this as any).parentScopes = e, (this as any).index = n, (this as any).fontStyle = r, (this as any).foreground = s, (this as any).background = o;
    }
  },
  O: any = (((t: any): any => ((t as any)[(t as any).NotSet = -1] = "NotSet", (t as any)[(t as any).None = 0] = "None", (t as any)[(t as any).Italic = 1] = "Italic", (t as any)[(t as any).Bold = 2] = "Bold", (t as any)[(t as any).Underline = 4] = "Underline", (t as any)[(t as any).Strikethrough = 8] = "Strikethrough", t)) as any)(O || {});
function Eo(this: any, t: any, e: any): any {
  ((t as any).sort as any)((l: any, c: any): any => {
    let u: any = (qr as any)((l as any).scope, (c as any).scope);
    return (u as any) !== (0 as any) || (u = (Hr as any)((l as any).parentScopes, (c as any).parentScopes), (u as any) !== (0 as any)) ? u : ((l as any).index as any) - ((c as any).index as any);
  });
  let n: any = 0,
    r: any = "#000000",
    s: any = "#ffffff";
  for (; ((t as any).length as any) >= (1 as any) && (((t as any)[0] as any).scope as any) === ("" as any);) {
    let l: any = ((t as any).shift as any)();
    ((l as any).fontStyle as any) !== (-1 as any) && (n = (l as any).fontStyle), ((l as any).foreground as any) !== (null as any) && (r = (l as any).foreground), ((l as any).background as any) !== (null as any) && (s = (l as any).background);
  }
  let o: any = new (Io as any)(e),
    a: any = new (Kr as any)(n, ((o as any).getId as any)(r), ((o as any).getId as any)(s)),
    i: any = new (Ro as any)(new (tn as any)(0, null, -1, 0, 0), []);
  for (let l: any = 0, c: any = (t as any).length; (l as any) < (c as any); l++) {
    let u: any = (t as any)[l];
    ((i as any).insert as any)(0, (u as any).scope, (u as any).parentScopes, (u as any).fontStyle, ((o as any).getId as any)((u as any).foreground), ((o as any).getId as any)((u as any).background));
  }
  return new (dt as any)(o, a, i);
}
var Io: any = class {
    [key: string]: any;
    _isFrozen: any;
    _lastColorId: any;
    _id2color: any;
    _color2id: any;
    constructor(t: any) {
      if ((this as any)._lastColorId = 0, (this as any)._id2color = [], (this as any)._color2id = ((Object as any).create as any)(null), ((Array as any).isArray as any)(t)) {
        (this as any)._isFrozen = !0;
        for (let e: any = 0, n: any = (t as any).length; (e as any) < (n as any); e++) ((this as any)._color2id as any)[(t as any)[e]] = e, ((this as any)._id2color as any)[e] = (t as any)[e];
      } else (this as any)._isFrozen = !1;
    }
    getId(t: any): any {
      if ((t as any) === (null as any)) return 0;
      t = ((t as any).toUpperCase as any)();
      let e: any = ((this as any)._color2id as any)[t];
      if (e) return e;
      if ((this as any)._isFrozen) throw new (Error as any)(`Missing color in color map - ${t}`);
      return e = ++(this as any)._lastColorId, ((this as any)._color2id as any)[t] = e, ((this as any)._id2color as any)[e] = t, e;
    }
    getColorMap(): any {
      return (((this as any)._id2color as any).slice as any)(0);
    }
  },
  No: any = ((Object as any).freeze as any)([]),
  tn: any = class Qr {
    [key: string]: any;
    scopeDepth: any;
    parentScopes: any;
    fontStyle: any;
    foreground: any;
    background: any;
    constructor(e: any, n: any, r: any, s: any, o: any) {
      (this as any).scopeDepth = e, (this as any).parentScopes = n || No, (this as any).fontStyle = r, (this as any).foreground = s, (this as any).background = o;
    }
    clone(): any {
      return new (Qr as any)((this as any).scopeDepth, (this as any).parentScopes, (this as any).fontStyle, (this as any).foreground, (this as any).background);
    }
    static cloneArr(e: any): any {
      let n: any = [];
      for (let r: any = 0, s: any = (e as any).length; (r as any) < (s as any); r++) (n as any)[r] = (((e as any)[r] as any).clone as any)();
      return n;
    }
    acceptOverwrite(e: any, n: any, r: any, s: any): any {
      ((this as any).scopeDepth as any) > (e as any) ? ((console as any).log as any)("how did this happen?") : (this as any).scopeDepth = e, (n as any) !== (-1 as any) && ((this as any).fontStyle = n), (r as any) !== (0 as any) && ((this as any).foreground = r), (s as any) !== (0 as any) && ((this as any).background = s);
    }
  },
  Ro: any = class nn {
    declare _children: any;
    declare _mainRule: any;
    [key: string]: any;
    constructor(e: any, n: any = [], r: any = {}) {
      (this as any)._mainRule = e, (this as any)._children = r, (this as any)._rulesWithParentScopes = n;
    }
    _rulesWithParentScopes: any;
    static _cmpBySpecificity(e: any, n: any): any {
      if (((e as any).scopeDepth as any) !== ((n as any).scopeDepth as any)) return ((n as any).scopeDepth as any) - ((e as any).scopeDepth as any);
      let r: any = 0,
        s: any = 0;
      for (; (((e as any).parentScopes as any)[r] as any) === (">" as any) && r++, (((n as any).parentScopes as any)[s] as any) === (">" as any) && s++, !((r as any) >= (((e as any).parentScopes as any).length as any) || (s as any) >= (((n as any).parentScopes as any).length as any));) {
        const o: any = ((((n as any).parentScopes as any)[s] as any).length as any) - ((((e as any).parentScopes as any)[r] as any).length as any);
        if ((o as any) !== (0 as any)) return o;
        r++, s++;
      }
      return (((n as any).parentScopes as any).length as any) - (((e as any).parentScopes as any).length as any);
    }
    match(e: any): any {
      if ((e as any) !== ("" as any)) {
        let r: any = ((e as any).indexOf as any)("."),
          s: any,
          o: any;
        if ((r as any) === (-1 as any) ? (s = e, o = "") : (s = ((e as any).substring as any)(0, r), o = ((e as any).substring as any)((r as any) + (1 as any))), (((this as any)._children as any).hasOwnProperty as any)(s)) return ((((this as any)._children as any)[s] as any).match as any)(o);
      }
      const n: any = (((this as any)._rulesWithParentScopes as any).concat as any)((this as any)._mainRule);
      return ((n as any).sort as any)((nn as any)._cmpBySpecificity), n;
    }
    insert(e: any, n: any, r: any, s: any, o: any, a: any): any {
      if ((n as any) === ("" as any)) {
        ((this as any)._doInsertHere as any)(e, r, s, o, a);
        return;
      }
      let i: any = ((n as any).indexOf as any)("."),
        l: any,
        c: any;
      (i as any) === (-1 as any) ? (l = n, c = "") : (l = ((n as any).substring as any)(0, i), c = ((n as any).substring as any)((i as any) + (1 as any)));
      let u: any;
      (((this as any)._children as any).hasOwnProperty as any)(l) ? u = ((this as any)._children as any)[l] : (u = new (nn as any)((((this as any)._mainRule as any).clone as any)(), ((tn as any).cloneArr as any)((this as any)._rulesWithParentScopes)), ((this as any)._children as any)[l] = u), ((u as any).insert as any)((e as any) + (1 as any), c, r, s, o, a);
    }
    _doInsertHere(e: any, n: any, r: any, s: any, o: any): any {
      if ((n as any) === (null as any)) {
        (((this as any)._mainRule as any).acceptOverwrite as any)(e, r, s, o);
        return;
      }
      for (let a: any = 0, i: any = ((this as any)._rulesWithParentScopes as any).length; (a as any) < (i as any); a++) {
        let l: any = ((this as any)._rulesWithParentScopes as any)[a];
        if (((Hr as any)((l as any).parentScopes, n) as any) === (0 as any)) {
          ((l as any).acceptOverwrite as any)(e, r, s, o);
          return;
        }
      }
      (r as any) === (-1 as any) && (r = ((this as any)._mainRule as any).fontStyle), (s as any) === (0 as any) && (s = ((this as any)._mainRule as any).foreground), (o as any) === (0 as any) && (o = ((this as any)._mainRule as any).background), (((this as any)._rulesWithParentScopes as any).push as any)(new (tn as any)(e, n, r, s, o));
    }
  },
  Re: any = class j {
    [key: string]: any;
    static toBinaryStr(e: any): any {
      return ((((e as any).toString as any)(2) as any).padStart as any)(32, "0");
    }
    static print(e: any): any {
      const n: any = ((j as any).getLanguageId as any)(e),
        r: any = ((j as any).getTokenType as any)(e),
        s: any = ((j as any).getFontStyle as any)(e),
        o: any = ((j as any).getForeground as any)(e),
        a: any = ((j as any).getBackground as any)(e);
      ((console as any).log as any)({
        languageId: n,
        tokenType: r,
        fontStyle: s,
        foreground: o,
        background: a
      });
    }
    static getLanguageId(e: any): any {
      return (((e as any) & (255 as any)) as any) >>> (0 as any);
    }
    static getTokenType(e: any): any {
      return (((e as any) & (768 as any)) as any) >>> (8 as any);
    }
    static containsBalancedBrackets(e: any): any {
      return (((e as any) & (1024 as any)) as any) !== (0 as any);
    }
    static getFontStyle(e: any): any {
      return (((e as any) & (30720 as any)) as any) >>> (11 as any);
    }
    static getForeground(e: any): any {
      return (((e as any) & (16744448 as any)) as any) >>> (15 as any);
    }
    static getBackground(e: any): any {
      return (((e as any) & (4278190080 as any)) as any) >>> (24 as any);
    }
    static set(e: any, n: any, r: any, s: any, o: any, a: any, i: any): any {
      let l: any = ((j as any).getLanguageId as any)(e),
        c: any = ((j as any).getTokenType as any)(e),
        u: any = ((j as any).containsBalancedBrackets as any)(e) ? 1 : 0,
        h: any = ((j as any).getFontStyle as any)(e),
        d: any = ((j as any).getForeground as any)(e),
        p: any = ((j as any).getBackground as any)(e);
      return (n as any) !== (0 as any) && (l = n), (r as any) !== (8 as any) && (c = r), (s as any) !== (null as any) && (u = s ? 1 : 0), (o as any) !== (-1 as any) && (h = o), (a as any) !== (0 as any) && (d = a), (i as any) !== (0 as any) && (p = i), ((((((((((((l as any) << (0 as any) as any) | ((c as any) << (8 as any) as any)) as any) | ((u as any) << (10 as any) as any)) as any) | ((h as any) << (11 as any) as any)) as any) | ((d as any) << (15 as any) as any)) as any) | ((p as any) << (24 as any) as any)) as any) >>> (0 as any);
    }
  };
function pt(this: any, t: any, e: any): any {
  const n: any = [],
    r: any = ($o as any)(t);
  let s: any = ((r as any).next as any)();
  for (; (s as any) !== (null as any);) {
    let l: any = 0;
    if (((s as any).length as any) === (2 as any) && (((s as any).charAt as any)(1) as any) === (":" as any)) {
      switch (((s as any).charAt as any)(0)) {
        case "R":
          l = 1;
          break;
        case "L":
          l = -1;
          break;
        default:
          ((console as any).log as any)(`Unknown priority ${s} in scope selector`);
      }
      s = ((r as any).next as any)();
    }
    let c: any = (a as any)();
    if (((n as any).push as any)({
      matcher: c,
      priority: l
    }), (s as any) !== ("," as any)) break;
    s = ((r as any).next as any)();
  }
  return n;
  function o(this: any): any {
    if ((s as any) === ("-" as any)) {
      s = ((r as any).next as any)();
      const l: any = (o as any)();
      return (c: any): any => !!l && !(l as any)(c);
    }
    if ((s as any) === ("(" as any)) {
      s = ((r as any).next as any)();
      const l: any = (i as any)();
      return (s as any) === (")" as any) && (s = ((r as any).next as any)()), l;
    }
    if ((Wn as any)(s)) {
      const l: any = [];
      do ((l as any).push as any)(s), s = ((r as any).next as any)(); while ((Wn as any)(s));
      return (c: any): any => (e as any)(l, c);
    }
    return null;
  }
  function a(this: any): any {
    const l: any = [];
    let c: any = (o as any)();
    for (; c;) ((l as any).push as any)(c), c = (o as any)();
    return (u: any): any => ((l as any).every as any)((h: any): any => (h as any)(u));
  }
  function i(this: any): any {
    const l: any = [];
    let c: any = (a as any)();
    for (; c && (((l as any).push as any)(c), (s as any) === ("|" as any) || (s as any) === ("," as any));) {
      do s = ((r as any).next as any)(); while ((s as any) === ("|" as any) || (s as any) === ("," as any));
      c = (a as any)();
    }
    return (u: any): any => ((l as any).some as any)((h: any): any => (h as any)(u));
  }
}
function Wn(this: any, t: any): any {
  return !!t && !!((t as any).match as any)(/[\w\.:]+/);
}
function $o(this: any, t: any): any {
  let e: any = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g,
    n: any = ((e as any).exec as any)(t);
  return {
    next: (): any => {
      if (!n) return null;
      const r: any = (n as any)[0];
      return n = ((e as any).exec as any)(t), r;
    }
  };
}
function Zr(this: any, t: any): any {
  (typeof (t as any).dispose as any) == ("function" as any) && ((t as any).dispose as any)();
}
var je: any = class {
    declare scopeName: any;
    [key: string]: any;
    constructor(t: any) {
      (this as any).scopeName = t;
    }
    toKey(): any {
      return (this as any).scopeName;
    }
  },
  Lo: any = class {
    declare ruleName: any;
    declare scopeName: any;
    [key: string]: any;
    constructor(t: any, e: any) {
      (this as any).scopeName = t, (this as any).ruleName = e;
    }
    toKey(): any {
      return `${(this as any).scopeName}#${(this as any).ruleName}`;
    }
  },
  Po: any = class {
    [key: string]: any;
    _references: any = [];
    _seenReferenceKeys: any = new (Set as any)();
    get references(): any {
      return (this as any)._references;
    }
    visitedRule: any = new (Set as any)();
    add(t: any): any {
      const e: any = ((t as any).toKey as any)();
      (((this as any)._seenReferenceKeys as any).has as any)(e) || ((((this as any)._seenReferenceKeys as any).add as any)(e), (((this as any)._references as any).push as any)(t));
    }
  },
  To: any = class {
    declare initialScopeName: any;
    declare repo: any;
    [key: string]: any;
    constructor(t: any, e: any) {
      (this as any).repo = t, (this as any).initialScopeName = e, (((this as any).seenFullScopeRequests as any).add as any)((this as any).initialScopeName), (this as any).Q = [new (je as any)((this as any).initialScopeName)];
    }
    seenFullScopeRequests: any = new (Set as any)();
    seenPartialScopeRequests: any = new (Set as any)();
    Q: any;
    processQueue(): any {
      const t: any = (this as any).Q;
      (this as any).Q = [];
      const e: any = new (Po as any)();
      for (const n of t) (Mo as any)(n, (this as any).initialScopeName, (this as any).repo, e);
      for (const n of (e as any).references) if (n instanceof je) {
        if ((((this as any).seenFullScopeRequests as any).has as any)((n as any).scopeName)) continue;
        (((this as any).seenFullScopeRequests as any).add as any)((n as any).scopeName), (((this as any).Q as any).push as any)(n);
      } else {
        if ((((this as any).seenFullScopeRequests as any).has as any)((n as any).scopeName) || (((this as any).seenPartialScopeRequests as any).has as any)(((n as any).toKey as any)())) continue;
        (((this as any).seenPartialScopeRequests as any).add as any)(((n as any).toKey as any)()), (((this as any).Q as any).push as any)(n);
      }
    }
  };
function Mo(this: any, t: any, e: any, n: any, r: any): any {
  const s: any = ((n as any).lookup as any)((t as any).scopeName);
  if (!s) {
    if (((t as any).scopeName as any) === (e as any)) throw new (Error as any)(`No grammar provided for <${e}>`);
    return;
  }
  const o: any = ((n as any).lookup as any)(e);
  t instanceof je ? (ct as any)({
    baseGrammar: o,
    selfGrammar: s
  }, r) : (rn as any)((t as any).ruleName, {
    baseGrammar: o,
    selfGrammar: s,
    repository: (s as any).repository
  }, r);
  const a: any = ((n as any).injections as any)((t as any).scopeName);
  if (a) for (const i of a) ((r as any).add as any)(new (je as any)(i));
}
function rn(this: any, t: any, e: any, n: any): any {
  if ((e as any).repository && ((e as any).repository as any)[t]) {
    const r: any = ((e as any).repository as any)[t];
    (ft as any)([r], e, n);
  }
}
function ct(this: any, t: any, e: any): any {
  ((t as any).selfGrammar as any).patterns && ((Array as any).isArray as any)(((t as any).selfGrammar as any).patterns) && (ft as any)(((t as any).selfGrammar as any).patterns, {
    ...t,
    repository: ((t as any).selfGrammar as any).repository
  }, e), ((t as any).selfGrammar as any).injections && (ft as any)(((Object as any).values as any)(((t as any).selfGrammar as any).injections), {
    ...t,
    repository: ((t as any).selfGrammar as any).repository
  }, e);
}
function ft(this: any, t: any, e: any, n: any): any {
  for (const r of t) {
    if ((((n as any).visitedRule as any).has as any)(r)) continue;
    (((n as any).visitedRule as any).add as any)(r);
    const s: any = (r as any).repository ? (Wr as any)({}, (e as any).repository, (r as any).repository) : (e as any).repository;
    ((Array as any).isArray as any)((r as any).patterns) && (ft as any)((r as any).patterns, {
      ...e,
      repository: s
    }, n);
    const o: any = (r as any).include;
    if (!o) continue;
    const a: any = (Yr as any)(o);
    switch ((a as any).kind) {
      case 0:
        (ct as any)({
          ...e,
          selfGrammar: (e as any).baseGrammar
        }, n);
        break;
      case 1:
        (ct as any)(e, n);
        break;
      case 2:
        (rn as any)((a as any).ruleName, {
          ...e,
          repository: s
        }, n);
        break;
      case 3:
      case 4:
        const i: any = ((a as any).scopeName as any) === (((e as any).selfGrammar as any).scopeName as any) ? (e as any).selfGrammar : ((a as any).scopeName as any) === (((e as any).baseGrammar as any).scopeName as any) ? (e as any).baseGrammar : void 0;
        if (i) {
          const l: any = {
            baseGrammar: (e as any).baseGrammar,
            selfGrammar: i,
            repository: s
          };
          ((a as any).kind as any) === (4 as any) ? (rn as any)((a as any).ruleName, l, n) : (ct as any)(l, n);
        } else ((a as any).kind as any) === (4 as any) ? ((n as any).add as any)(new (Lo as any)((a as any).scopeName, (a as any).ruleName)) : ((n as any).add as any)(new (je as any)((a as any).scopeName));
        break;
    }
  }
}
var Oo: any = class {
    [key: string]: any;
    kind: any = 0;
  },
  Go: any = class {
    [key: string]: any;
    kind: any = 1;
  },
  Bo: any = class {
    declare ruleName: any;
    [key: string]: any;
    constructor(t: any) {
      (this as any).ruleName = t;
    }
    kind: any = 2;
  },
  Fo: any = class {
    declare scopeName: any;
    [key: string]: any;
    constructor(t: any) {
      (this as any).scopeName = t;
    }
    kind: any = 3;
  },
  Do: any = class {
    declare ruleName: any;
    declare scopeName: any;
    [key: string]: any;
    constructor(t: any, e: any) {
      (this as any).scopeName = t, (this as any).ruleName = e;
    }
    kind: any = 4;
  };
function Yr(this: any, t: any): any {
  if ((t as any) === ("$base" as any)) return new (Oo as any)();
  if ((t as any) === ("$self" as any)) return new (Go as any)();
  const e: any = ((t as any).indexOf as any)("#");
  if ((e as any) === (-1 as any)) return new (Fo as any)(t);
  if ((e as any) === (0 as any)) return new (Bo as any)(((t as any).substring as any)(1));
  {
    const n: any = ((t as any).substring as any)(0, e),
      r: any = ((t as any).substring as any)((e as any) + (1 as any));
    return new (Do as any)(n, r);
  }
}
var jo: any = /\\(\d+)/,
  zn: any = /\\(\d+)/g,
  Uo: any = -1,
  Jr: any = -2;
var Ve: any = class {
    [key: string]: any;
    $location: any;
    id: any;
    _nameIsCapturing: any;
    _name: any;
    _contentNameIsCapturing: any;
    _contentName: any;
    constructor(t: any, e: any, n: any, r: any) {
      (this as any).$location = t, (this as any).id = e, (this as any)._name = n || null, (this as any)._nameIsCapturing = ((Je as any).hasCaptures as any)((this as any)._name), (this as any)._contentName = r || null, (this as any)._contentNameIsCapturing = ((Je as any).hasCaptures as any)((this as any)._contentName);
    }
    get debugName(): any {
      const t: any = (this as any).$location ? `${(zr as any)(((this as any).$location as any).filename)}:${((this as any).$location as any).line}` : "unknown";
      return `${((this as any).constructor as any).name}#${(this as any).id} @ ${t}`;
    }
    getName(t: any, e: any): any {
      return !(this as any)._nameIsCapturing || ((this as any)._name as any) === (null as any) || (t as any) === (null as any) || (e as any) === (null as any) ? (this as any)._name : ((Je as any).replaceCaptures as any)((this as any)._name, t, e);
    }
    getContentName(t: any, e: any): any {
      return !(this as any)._contentNameIsCapturing || ((this as any)._contentName as any) === (null as any) ? (this as any)._contentName : ((Je as any).replaceCaptures as any)((this as any)._contentName, t, e);
    }
  },
  Wo: any = class extends (Ve as any) {
    [key: string]: any;
    retokenizeCapturedWithRuleId: any;
    constructor(t: any, e: any, n: any, r: any, s: any) {
      super(t, e, n, r), (this as any).retokenizeCapturedWithRuleId = s;
    }
    dispose(): any {}
    collectPatterns(t: any, e: any): any {
      throw new (Error as any)("Not supported!");
    }
    compile(t: any, e: any): any {
      throw new (Error as any)("Not supported!");
    }
    compileAG(t: any, e: any, n: any, r: any): any {
      throw new (Error as any)("Not supported!");
    }
  },
  zo: any = class extends (Ve as any) {
    [key: string]: any;
    _match: any;
    captures: any;
    _cachedCompiledPatterns: any;
    constructor(t: any, e: any, n: any, r: any, s: any) {
      super(t, e, n, null), (this as any)._match = new (Ue as any)(r, (this as any).id), (this as any).captures = s, (this as any)._cachedCompiledPatterns = null;
    }
    dispose(): any {
      (this as any)._cachedCompiledPatterns && ((((this as any)._cachedCompiledPatterns as any).dispose as any)(), (this as any)._cachedCompiledPatterns = null);
    }
    get debugMatchRegExp(): any {
      return `${((this as any)._match as any).source}`;
    }
    collectPatterns(t: any, e: any): any {
      ((e as any).push as any)((this as any)._match);
    }
    compile(t: any, e: any): any {
      return ((((this as any)._getCachedCompiledPatterns as any)(t) as any).compile as any)(t);
    }
    compileAG(t: any, e: any, n: any, r: any): any {
      return ((((this as any)._getCachedCompiledPatterns as any)(t) as any).compileAG as any)(t, n, r);
    }
    _getCachedCompiledPatterns(t: any): any {
      return (this as any)._cachedCompiledPatterns || ((this as any)._cachedCompiledPatterns = new (We as any)(), ((this as any).collectPatterns as any)(t, (this as any)._cachedCompiledPatterns)), (this as any)._cachedCompiledPatterns;
    }
  },
  qn: any = class extends (Ve as any) {
    [key: string]: any;
    hasMissingPatterns: any;
    patterns: any;
    _cachedCompiledPatterns: any;
    constructor(t: any, e: any, n: any, r: any, s: any) {
      super(t, e, n, r), (this as any).patterns = (s as any).patterns, (this as any).hasMissingPatterns = (s as any).hasMissingPatterns, (this as any)._cachedCompiledPatterns = null;
    }
    dispose(): any {
      (this as any)._cachedCompiledPatterns && ((((this as any)._cachedCompiledPatterns as any).dispose as any)(), (this as any)._cachedCompiledPatterns = null);
    }
    collectPatterns(t: any, e: any): any {
      for (const n of (this as any).patterns) ((((t as any).getRule as any)(n) as any).collectPatterns as any)(t, e);
    }
    compile(t: any, e: any): any {
      return ((((this as any)._getCachedCompiledPatterns as any)(t) as any).compile as any)(t);
    }
    compileAG(t: any, e: any, n: any, r: any): any {
      return ((((this as any)._getCachedCompiledPatterns as any)(t) as any).compileAG as any)(t, n, r);
    }
    _getCachedCompiledPatterns(t: any): any {
      return (this as any)._cachedCompiledPatterns || ((this as any)._cachedCompiledPatterns = new (We as any)(), ((this as any).collectPatterns as any)(t, (this as any)._cachedCompiledPatterns)), (this as any)._cachedCompiledPatterns;
    }
  },
  sn: any = class extends (Ve as any) {
    [key: string]: any;
    _begin: any;
    beginCaptures: any;
    _end: any;
    endHasBackReferences: any;
    endCaptures: any;
    applyEndPatternLast: any;
    hasMissingPatterns: any;
    patterns: any;
    _cachedCompiledPatterns: any;
    constructor(t: any, e: any, n: any, r: any, s: any, o: any, a: any, i: any, l: any, c: any) {
      super(t, e, n, r), (this as any)._begin = new (Ue as any)(s, (this as any).id), (this as any).beginCaptures = o, (this as any)._end = new (Ue as any)(a || "\uFFFF", -1), (this as any).endHasBackReferences = ((this as any)._end as any).hasBackReferences, (this as any).endCaptures = i, (this as any).applyEndPatternLast = l || !1, (this as any).patterns = (c as any).patterns, (this as any).hasMissingPatterns = (c as any).hasMissingPatterns, (this as any)._cachedCompiledPatterns = null;
    }
    dispose(): any {
      (this as any)._cachedCompiledPatterns && ((((this as any)._cachedCompiledPatterns as any).dispose as any)(), (this as any)._cachedCompiledPatterns = null);
    }
    get debugBeginRegExp(): any {
      return `${((this as any)._begin as any).source}`;
    }
    get debugEndRegExp(): any {
      return `${((this as any)._end as any).source}`;
    }
    getEndWithResolvedBackReferences(t: any, e: any): any {
      return (((this as any)._end as any).resolveBackReferences as any)(t, e);
    }
    collectPatterns(t: any, e: any): any {
      ((e as any).push as any)((this as any)._begin);
    }
    compile(t: any, e: any): any {
      return ((((this as any)._getCachedCompiledPatterns as any)(t, e) as any).compile as any)(t);
    }
    compileAG(t: any, e: any, n: any, r: any): any {
      return ((((this as any)._getCachedCompiledPatterns as any)(t, e) as any).compileAG as any)(t, n, r);
    }
    _getCachedCompiledPatterns(t: any, e: any): any {
      if (!(this as any)._cachedCompiledPatterns) {
        (this as any)._cachedCompiledPatterns = new (We as any)();
        for (const n of (this as any).patterns) ((((t as any).getRule as any)(n) as any).collectPatterns as any)(t, (this as any)._cachedCompiledPatterns);
        (this as any).applyEndPatternLast ? (((this as any)._cachedCompiledPatterns as any).push as any)(((this as any)._end as any).hasBackReferences ? (((this as any)._end as any).clone as any)() : (this as any)._end) : (((this as any)._cachedCompiledPatterns as any).unshift as any)(((this as any)._end as any).hasBackReferences ? (((this as any)._end as any).clone as any)() : (this as any)._end);
      }
      return ((this as any)._end as any).hasBackReferences && ((this as any).applyEndPatternLast ? (((this as any)._cachedCompiledPatterns as any).setSource as any)(((((this as any)._cachedCompiledPatterns as any).length as any)() as any) - (1 as any), e) : (((this as any)._cachedCompiledPatterns as any).setSource as any)(0, e)), (this as any)._cachedCompiledPatterns;
    }
  },
  gt: any = class extends (Ve as any) {
    [key: string]: any;
    _begin: any;
    beginCaptures: any;
    whileCaptures: any;
    _while: any;
    whileHasBackReferences: any;
    hasMissingPatterns: any;
    patterns: any;
    _cachedCompiledPatterns: any;
    _cachedCompiledWhilePatterns: any;
    constructor(t: any, e: any, n: any, r: any, s: any, o: any, a: any, i: any, l: any) {
      super(t, e, n, r), (this as any)._begin = new (Ue as any)(s, (this as any).id), (this as any).beginCaptures = o, (this as any).whileCaptures = i, (this as any)._while = new (Ue as any)(a, Jr), (this as any).whileHasBackReferences = ((this as any)._while as any).hasBackReferences, (this as any).patterns = (l as any).patterns, (this as any).hasMissingPatterns = (l as any).hasMissingPatterns, (this as any)._cachedCompiledPatterns = null, (this as any)._cachedCompiledWhilePatterns = null;
    }
    dispose(): any {
      (this as any)._cachedCompiledPatterns && ((((this as any)._cachedCompiledPatterns as any).dispose as any)(), (this as any)._cachedCompiledPatterns = null), (this as any)._cachedCompiledWhilePatterns && ((((this as any)._cachedCompiledWhilePatterns as any).dispose as any)(), (this as any)._cachedCompiledWhilePatterns = null);
    }
    get debugBeginRegExp(): any {
      return `${((this as any)._begin as any).source}`;
    }
    get debugWhileRegExp(): any {
      return `${((this as any)._while as any).source}`;
    }
    getWhileWithResolvedBackReferences(t: any, e: any): any {
      return (((this as any)._while as any).resolveBackReferences as any)(t, e);
    }
    collectPatterns(t: any, e: any): any {
      ((e as any).push as any)((this as any)._begin);
    }
    compile(t: any, e: any): any {
      return ((((this as any)._getCachedCompiledPatterns as any)(t) as any).compile as any)(t);
    }
    compileAG(t: any, e: any, n: any, r: any): any {
      return ((((this as any)._getCachedCompiledPatterns as any)(t) as any).compileAG as any)(t, n, r);
    }
    _getCachedCompiledPatterns(t: any): any {
      if (!(this as any)._cachedCompiledPatterns) {
        (this as any)._cachedCompiledPatterns = new (We as any)();
        for (const e of (this as any).patterns) ((((t as any).getRule as any)(e) as any).collectPatterns as any)(t, (this as any)._cachedCompiledPatterns);
      }
      return (this as any)._cachedCompiledPatterns;
    }
    compileWhile(t: any, e: any): any {
      return ((((this as any)._getCachedCompiledWhilePatterns as any)(t, e) as any).compile as any)(t);
    }
    compileWhileAG(t: any, e: any, n: any, r: any): any {
      return ((((this as any)._getCachedCompiledWhilePatterns as any)(t, e) as any).compileAG as any)(t, n, r);
    }
    _getCachedCompiledWhilePatterns(t: any, e: any): any {
      return (this as any)._cachedCompiledWhilePatterns || ((this as any)._cachedCompiledWhilePatterns = new (We as any)(), (((this as any)._cachedCompiledWhilePatterns as any).push as any)(((this as any)._while as any).hasBackReferences ? (((this as any)._while as any).clone as any)() : (this as any)._while)), ((this as any)._while as any).hasBackReferences && (((this as any)._cachedCompiledWhilePatterns as any).setSource as any)(0, e || "\uFFFF"), (this as any)._cachedCompiledWhilePatterns;
    }
  },
  es: any = class M {
    [key: string]: any;
    static createCaptureRule(e: any, n: any, r: any, s: any, o: any): any {
      return ((e as any).registerRule as any)((a: any): any => new (Wo as any)(n, a, r, s, o));
    }
    static getCompiledRuleId(e: any, n: any, r: any): any {
      return (e as any).id || ((n as any).registerRule as any)((s: any): any => {
        if ((e as any).id = s, (e as any).match) return new (zo as any)((e as any).$vscodeTextmateLocation, (e as any).id, (e as any).name, (e as any).match, ((M as any)._compileCaptures as any)((e as any).captures, n, r));
        if ((typeof (e as any).begin as any) > ("u" as any)) {
          (e as any).repository && (r = (Wr as any)({}, r, (e as any).repository));
          let o: any = (e as any).patterns;
          return (typeof o as any) > ("u" as any) && (e as any).include && (o = [{
            include: (e as any).include
          }]), new (qn as any)((e as any).$vscodeTextmateLocation, (e as any).id, (e as any).name, (e as any).contentName, ((M as any)._compilePatterns as any)(o, n, r));
        }
        return (e as any).while ? new (gt as any)((e as any).$vscodeTextmateLocation, (e as any).id, (e as any).name, (e as any).contentName, (e as any).begin, ((M as any)._compileCaptures as any)((e as any).beginCaptures || (e as any).captures, n, r), (e as any).while, ((M as any)._compileCaptures as any)((e as any).whileCaptures || (e as any).captures, n, r), ((M as any)._compilePatterns as any)((e as any).patterns, n, r)) : new (sn as any)((e as any).$vscodeTextmateLocation, (e as any).id, (e as any).name, (e as any).contentName, (e as any).begin, ((M as any)._compileCaptures as any)((e as any).beginCaptures || (e as any).captures, n, r), (e as any).end, ((M as any)._compileCaptures as any)((e as any).endCaptures || (e as any).captures, n, r), (e as any).applyEndPatternLast, ((M as any)._compilePatterns as any)((e as any).patterns, n, r));
      }), (e as any).id;
    }
    static _compileCaptures(e: any, n: any, r: any): any {
      let s: any = [];
      if (e) {
        let o: any = 0;
        for (const a in e) {
          if ((a as any) === ("$vscodeTextmateLocation" as any)) continue;
          const i: any = (parseInt as any)(a, 10);
          (i as any) > (o as any) && (o = i);
        }
        for (let a: any = 0; (a as any) <= (o as any); a++) (s as any)[a] = null;
        for (const a in e) {
          if ((a as any) === ("$vscodeTextmateLocation" as any)) continue;
          const i: any = (parseInt as any)(a, 10);
          let l: any = 0;
          ((e as any)[a] as any).patterns && (l = ((M as any).getCompiledRuleId as any)((e as any)[a], n, r)), (s as any)[i] = ((M as any).createCaptureRule as any)(n, ((e as any)[a] as any).$vscodeTextmateLocation, ((e as any)[a] as any).name, ((e as any)[a] as any).contentName, l);
        }
      }
      return s;
    }
    static _compilePatterns(e: any, n: any, r: any): any {
      let s: any = [];
      if (e) for (let o: any = 0, a: any = (e as any).length; (o as any) < (a as any); o++) {
        const i: any = (e as any)[o];
        let l: any = -1;
        if ((i as any).include) {
          const c: any = (Yr as any)((i as any).include);
          switch ((c as any).kind) {
            case 0:
            case 1:
              l = ((M as any).getCompiledRuleId as any)((r as any)[(i as any).include], n, r);
              break;
            case 2:
              let u: any = (r as any)[(c as any).ruleName];
              u && (l = ((M as any).getCompiledRuleId as any)(u, n, r));
              break;
            case 3:
            case 4:
              const h: any = (c as any).scopeName,
                d: any = ((c as any).kind as any) === (4 as any) ? (c as any).ruleName : null,
                p: any = ((n as any).getExternalGrammar as any)(h, r);
              if (p) if (d) {
                let f: any = ((p as any).repository as any)[d];
                f && (l = ((M as any).getCompiledRuleId as any)(f, n, (p as any).repository));
              } else l = ((M as any).getCompiledRuleId as any)(((p as any).repository as any).$self, n, (p as any).repository);
              break;
          }
        } else l = ((M as any).getCompiledRuleId as any)(i, n, r);
        if ((l as any) !== (-1 as any)) {
          const c: any = ((n as any).getRule as any)(l);
          let u: any = !1;
          if ((c instanceof qn || c instanceof sn || c instanceof gt) && (c as any).hasMissingPatterns && (((c as any).patterns as any).length as any) === (0 as any) && (u = !0), u) continue;
          ((s as any).push as any)(l);
        }
      }
      return {
        patterns: s,
        hasMissingPatterns: ((e ? (e as any).length : 0) as any) !== ((s as any).length as any)
      };
    }
  },
  Ue: any = class ts {
    [key: string]: any;
    source: any;
    ruleId: any;
    hasAnchor: any;
    hasBackReferences: any;
    _anchorCache: any;
    constructor(e: any, n: any) {
      if (e && (typeof e as any) == ("string" as any)) {
        const r: any = (e as any).length;
        let s: any = 0,
          o: any = [],
          a: any = !1;
        for (let i: any = 0; (i as any) < (r as any); i++) if ((((e as any).charAt as any)(i) as any) === ("\\" as any) && ((i as any) + (1 as any) as any) < (r as any)) {
          const c: any = ((e as any).charAt as any)((i as any) + (1 as any));
          (c as any) === ("z" as any) ? (((o as any).push as any)(((e as any).substring as any)(s, i)), ((o as any).push as any)("$(?!\\n)(?<!\\n)"), s = (i as any) + (2 as any)) : ((c as any) === ("A" as any) || (c as any) === ("G" as any)) && (a = !0), i++;
        }
        (this as any).hasAnchor = a, (s as any) === (0 as any) ? (this as any).source = e : (((o as any).push as any)(((e as any).substring as any)(s, r)), (this as any).source = ((o as any).join as any)(""));
      } else (this as any).hasAnchor = !1, (this as any).source = e;
      (this as any).hasAnchor ? (this as any)._anchorCache = ((this as any)._buildAnchorCache as any)() : (this as any)._anchorCache = null, (this as any).ruleId = n, (typeof (this as any).source as any) == ("string" as any) ? (this as any).hasBackReferences = ((jo as any).test as any)((this as any).source) : (this as any).hasBackReferences = !1;
    }
    clone(): any {
      return new (ts as any)((this as any).source, (this as any).ruleId);
    }
    setSource(e: any): any {
      ((this as any).source as any) !== (e as any) && ((this as any).source = e, (this as any).hasAnchor && ((this as any)._anchorCache = ((this as any)._buildAnchorCache as any)()));
    }
    resolveBackReferences(e: any, n: any): any {
      if ((typeof (this as any).source as any) != ("string" as any)) throw new (Error as any)("This method should only be called if the source is a string");
      let r: any = ((n as any).map as any)((s: any): any => ((e as any).substring as any)((s as any).start, (s as any).end));
      return (zn as any).lastIndex = 0, (((this as any).source as any).replace as any)(zn, (s: any, o: any): any => (Vr as any)((r as any)[(parseInt as any)(o, 10)] || ""));
    }
    _buildAnchorCache(): any {
      if ((typeof (this as any).source as any) != ("string" as any)) throw new (Error as any)("This method should only be called if the source is a string");
      let e: any = [],
        n: any = [],
        r: any = [],
        s: any = [],
        o: any,
        a: any,
        i: any,
        l: any;
      for (o = 0, a = ((this as any).source as any).length; (o as any) < (a as any); o++) i = (((this as any).source as any).charAt as any)(o), (e as any)[o] = i, (n as any)[o] = i, (r as any)[o] = i, (s as any)[o] = i, (i as any) === ("\\" as any) && ((o as any) + (1 as any) as any) < (a as any) && (l = (((this as any).source as any).charAt as any)((o as any) + (1 as any)), (l as any) === ("A" as any) ? ((e as any)[(o as any) + (1 as any)] = "\uFFFF", (n as any)[(o as any) + (1 as any)] = "\uFFFF", (r as any)[(o as any) + (1 as any)] = "A", (s as any)[(o as any) + (1 as any)] = "A") : (l as any) === ("G" as any) ? ((e as any)[(o as any) + (1 as any)] = "\uFFFF", (n as any)[(o as any) + (1 as any)] = "G", (r as any)[(o as any) + (1 as any)] = "\uFFFF", (s as any)[(o as any) + (1 as any)] = "G") : ((e as any)[(o as any) + (1 as any)] = l, (n as any)[(o as any) + (1 as any)] = l, (r as any)[(o as any) + (1 as any)] = l, (s as any)[(o as any) + (1 as any)] = l), o++);
      return {
        A0_G0: ((e as any).join as any)(""),
        A0_G1: ((n as any).join as any)(""),
        A1_G0: ((r as any).join as any)(""),
        A1_G1: ((s as any).join as any)("")
      };
    }
    resolveAnchors(e: any, n: any): any {
      return !(this as any).hasAnchor || !(this as any)._anchorCache || (typeof (this as any).source as any) != ("string" as any) ? (this as any).source : e ? n ? ((this as any)._anchorCache as any).A1_G1 : ((this as any)._anchorCache as any).A1_G0 : n ? ((this as any)._anchorCache as any).A0_G1 : ((this as any)._anchorCache as any).A0_G0;
    }
  },
  We: any = class {
    [key: string]: any;
    _items: any;
    _hasAnchors: any;
    _cached: any;
    _anchorCache: any;
    constructor() {
      (this as any)._items = [], (this as any)._hasAnchors = !1, (this as any)._cached = null, (this as any)._anchorCache = {
        A0_G0: null,
        A0_G1: null,
        A1_G0: null,
        A1_G1: null
      };
    }
    dispose(): any {
      ((this as any)._disposeCaches as any)();
    }
    _disposeCaches(): any {
      (this as any)._cached && ((((this as any)._cached as any).dispose as any)(), (this as any)._cached = null), ((this as any)._anchorCache as any).A0_G0 && (((((this as any)._anchorCache as any).A0_G0 as any).dispose as any)(), ((this as any)._anchorCache as any).A0_G0 = null), ((this as any)._anchorCache as any).A0_G1 && (((((this as any)._anchorCache as any).A0_G1 as any).dispose as any)(), ((this as any)._anchorCache as any).A0_G1 = null), ((this as any)._anchorCache as any).A1_G0 && (((((this as any)._anchorCache as any).A1_G0 as any).dispose as any)(), ((this as any)._anchorCache as any).A1_G0 = null), ((this as any)._anchorCache as any).A1_G1 && (((((this as any)._anchorCache as any).A1_G1 as any).dispose as any)(), ((this as any)._anchorCache as any).A1_G1 = null);
    }
    push(t: any): any {
      (((this as any)._items as any).push as any)(t), (this as any)._hasAnchors = (this as any)._hasAnchors || (t as any).hasAnchor;
    }
    unshift(t: any): any {
      (((this as any)._items as any).unshift as any)(t), (this as any)._hasAnchors = (this as any)._hasAnchors || (t as any).hasAnchor;
    }
    length(): any {
      return ((this as any)._items as any).length;
    }
    setSource(t: any, e: any): any {
      ((((this as any)._items as any)[t] as any).source as any) !== (e as any) && (((this as any)._disposeCaches as any)(), ((((this as any)._items as any)[t] as any).setSource as any)(e));
    }
    compile(t: any): any {
      if (!(this as any)._cached) {
        let e: any = (((this as any)._items as any).map as any)((n: any): any => (n as any).source);
        (this as any)._cached = new (Hn as any)(t, e, (((this as any)._items as any).map as any)((n: any): any => (n as any).ruleId));
      }
      return (this as any)._cached;
    }
    compileAG(t: any, e: any, n: any): any {
      return (this as any)._hasAnchors ? e ? n ? (((this as any)._anchorCache as any).A1_G1 || (((this as any)._anchorCache as any).A1_G1 = ((this as any)._resolveAnchors as any)(t, e, n)), ((this as any)._anchorCache as any).A1_G1) : (((this as any)._anchorCache as any).A1_G0 || (((this as any)._anchorCache as any).A1_G0 = ((this as any)._resolveAnchors as any)(t, e, n)), ((this as any)._anchorCache as any).A1_G0) : n ? (((this as any)._anchorCache as any).A0_G1 || (((this as any)._anchorCache as any).A0_G1 = ((this as any)._resolveAnchors as any)(t, e, n)), ((this as any)._anchorCache as any).A0_G1) : (((this as any)._anchorCache as any).A0_G0 || (((this as any)._anchorCache as any).A0_G0 = ((this as any)._resolveAnchors as any)(t, e, n)), ((this as any)._anchorCache as any).A0_G0) : ((this as any).compile as any)(t);
    }
    _resolveAnchors(t: any, e: any, n: any): any {
      let r: any = (((this as any)._items as any).map as any)((s: any): any => ((s as any).resolveAnchors as any)(e, n));
      return new (Hn as any)(t, r, (((this as any)._items as any).map as any)((s: any): any => (s as any).ruleId));
    }
  },
  Hn: any = class {
    declare rules: any;
    declare regExps: any;
    [key: string]: any;
    constructor(t: any, e: any, n: any) {
      (this as any).regExps = e, (this as any).rules = n, (this as any).scanner = ((t as any).createOnigScanner as any)(e);
    }
    scanner: any;
    dispose(): any {
      (typeof ((this as any).scanner as any).dispose as any) == ("function" as any) && (((this as any).scanner as any).dispose as any)();
    }
    toString(): any {
      const t: any = [];
      for (let e: any = 0, n: any = ((this as any).rules as any).length; (e as any) < (n as any); e++) ((t as any).push as any)(((("   - " as any) + (((this as any).rules as any)[e] as any) as any) + (": " as any) as any) + (((this as any).regExps as any)[e] as any));
      return ((t as any).join as any)(`
`);
    }
    findNextMatchSync(t: any, e: any, n: any): any {
      const r: any = (((this as any).scanner as any).findNextMatchSync as any)(t, e, n);
      return r ? {
        ruleId: ((this as any).rules as any)[(r as any).index],
        captureIndices: (r as any).captureIndices
      } : null;
    }
  },
  Dt: any = class {
    declare tokenType: any;
    declare languageId: any;
    [key: string]: any;
    constructor(t: any, e: any) {
      (this as any).languageId = t, (this as any).tokenType = e;
    }
  },
  qo: any = class on {
    [key: string]: any;
    _defaultAttributes: any;
    _embeddedLanguagesMatcher: any;
    constructor(e: any, n: any) {
      (this as any)._defaultAttributes = new (Dt as any)(e, 8), (this as any)._embeddedLanguagesMatcher = new (Ho as any)(((Object as any).entries as any)(n || {}));
    }
    getDefaultAttributes(): any {
      return (this as any)._defaultAttributes;
    }
    getBasicScopeAttributes(e: any): any {
      return (e as any) === (null as any) ? (on as any)._NULL_SCOPE_METADATA : (((this as any)._getBasicScopeAttributes as any).get as any)(e);
    }
    static _NULL_SCOPE_METADATA: any = new (Dt as any)(0, 0);
    _getBasicScopeAttributes: any = new (Xr as any)((e: any): any => {
      const n: any = ((this as any)._scopeToLanguage as any)(e),
        r: any = ((this as any)._toStandardTokenType as any)(e);
      return new (Dt as any)(n, r);
    });
    _scopeToLanguage(e: any): any {
      return (((this as any)._embeddedLanguagesMatcher as any).match as any)(e) || 0;
    }
    _toStandardTokenType(e: any): any {
      const n: any = ((e as any).match as any)((on as any).STANDARD_TOKEN_TYPE_REGEXP);
      if (!n) return 8;
      switch ((n as any)[1]) {
        case "comment":
          return 1;
        case "string":
          return 2;
        case "regex":
          return 3;
        case "meta.embedded":
          return 0;
      }
      throw new (Error as any)("Unexpected match for standard token type!");
    }
    static STANDARD_TOKEN_TYPE_REGEXP: any = /\b(comment|string|regex|meta\.embedded)\b/;
  },
  Ho: any = class {
    [key: string]: any;
    values: any;
    scopesRegExp: any;
    constructor(t: any) {
      if (((t as any).length as any) === (0 as any)) (this as any).values = null, (this as any).scopesRegExp = null;else {
        (this as any).values = new (Map as any)(t);
        const e: any = ((t as any).map as any)(([n, r]: any): any => (Vr as any)(n));
        ((e as any).sort as any)(), ((e as any).reverse as any)(), (this as any).scopesRegExp = new (RegExp as any)(`^((${((e as any).join as any)(")|(")}))($|\\.)`, "");
      }
    }
    match(t: any): any {
      if (!(this as any).scopesRegExp) return;
      const e: any = ((t as any).match as any)((this as any).scopesRegExp);
      if (e) return (((this as any).values as any).get as any)((e as any)[1]);
    }
  },
  Vn: any = class {
    declare stoppedEarly: any;
    declare stack: any;
    [key: string]: any;
    constructor(t: any, e: any) {
      (this as any).stack = t, (this as any).stoppedEarly = e;
    }
  };
function ns(this: any, t: any, e: any, n: any, r: any, s: any, o: any, a: any, i: any): any {
  const l: any = ((e as any).content as any).length;
  let c: any = !1,
    u: any = -1;
  if (a) {
    const p: any = (Vo as any)(t, e, n, r, s, o);
    s = (p as any).stack, r = (p as any).linePos, n = (p as any).isFirstLine, u = (p as any).anchorPosition;
  }
  const h: any = ((Date as any).now as any)();
  for (; !c;) {
    if ((i as any) !== (0 as any) && ((((Date as any).now as any)() as any) - (h as any) as any) > (i as any)) return new (Vn as any)(s, !0);
    (d as any)();
  }
  return new (Vn as any)(s, !1);
  function d(this: any): any {
    const p: any = (Xo as any)(t, e, n, r, s, u);
    if (!p) {
      ((o as any).produce as any)(s, l), c = !0;
      return;
    }
    const f: any = (p as any).captureIndices,
      b: any = (p as any).matchedRuleId,
      g: any = f && ((f as any).length as any) > (0 as any) ? (((f as any)[0] as any).end as any) > (r as any) : !1;
    if ((b as any) === (Uo as any)) {
      const y: any = ((s as any).getRule as any)(t);
      ((o as any).produce as any)(s, ((f as any)[0] as any).start), s = ((s as any).withContentNameScopesList as any)((s as any).nameScopesList), (Ge as any)(t, e, n, s, o, (y as any).endCaptures, f), ((o as any).produce as any)(s, ((f as any)[0] as any).end);
      const m: any = s;
      if (s = (s as any).parent, u = ((m as any).getAnchorPos as any)(), !g && (((m as any).getEnterPos as any)() as any) === (r as any)) {
        s = m, ((o as any).produce as any)(s, l), c = !0;
        return;
      }
    } else {
      const y: any = ((t as any).getRule as any)(b);
      ((o as any).produce as any)(s, ((f as any)[0] as any).start);
      const m: any = s,
        w: any = ((y as any).getName as any)((e as any).content, f),
        _: any = (((s as any).contentNameScopesList as any).pushAttributed as any)(w, t);
      if (s = ((s as any).push as any)(b, r, u, (((f as any)[0] as any).end as any) === (l as any), null, _, _), y instanceof sn) {
        const C: any = y;
        (Ge as any)(t, e, n, s, o, (C as any).beginCaptures, f), ((o as any).produce as any)(s, ((f as any)[0] as any).end), u = ((f as any)[0] as any).end;
        const v: any = ((C as any).getContentName as any)((e as any).content, f),
          $: any = ((_ as any).pushAttributed as any)(v, t);
        if (s = ((s as any).withContentNameScopesList as any)($), (C as any).endHasBackReferences && (s = ((s as any).withEndRule as any)(((C as any).getEndWithResolvedBackReferences as any)((e as any).content, f))), !g && ((m as any).hasSameRuleAs as any)(s)) {
          s = ((s as any).pop as any)(), ((o as any).produce as any)(s, l), c = !0;
          return;
        }
      } else if (y instanceof gt) {
        const C: any = y;
        (Ge as any)(t, e, n, s, o, (C as any).beginCaptures, f), ((o as any).produce as any)(s, ((f as any)[0] as any).end), u = ((f as any)[0] as any).end;
        const v: any = ((C as any).getContentName as any)((e as any).content, f),
          $: any = ((_ as any).pushAttributed as any)(v, t);
        if (s = ((s as any).withContentNameScopesList as any)($), (C as any).whileHasBackReferences && (s = ((s as any).withEndRule as any)(((C as any).getWhileWithResolvedBackReferences as any)((e as any).content, f))), !g && ((m as any).hasSameRuleAs as any)(s)) {
          s = ((s as any).pop as any)(), ((o as any).produce as any)(s, l), c = !0;
          return;
        }
      } else if ((Ge as any)(t, e, n, s, o, (y as any).captures, f), ((o as any).produce as any)(s, ((f as any)[0] as any).end), s = ((s as any).pop as any)(), !g) {
        s = ((s as any).safePop as any)(), ((o as any).produce as any)(s, l), c = !0;
        return;
      }
    }
    (((f as any)[0] as any).end as any) > (r as any) && (r = ((f as any)[0] as any).end, n = !1);
  }
}
function Vo(this: any, t: any, e: any, n: any, r: any, s: any, o: any): any {
  let a: any = (s as any).beginRuleCapturedEOL ? 0 : -1;
  const i: any = [];
  for (let l: any = s; l; l = ((l as any).pop as any)()) {
    const c: any = ((l as any).getRule as any)(t);
    c instanceof gt && ((i as any).push as any)({
      rule: c,
      stack: l
    });
  }
  for (let l: any = ((i as any).pop as any)(); l; l = ((i as any).pop as any)()) {
    const {
        ruleScanner: c,
        findOptions: u
      }: any = (Zo as any)((l as any).rule, t, ((l as any).stack as any).endRule, n, (r as any) === (a as any)),
      h: any = ((c as any).findNextMatchSync as any)(e, r, u);
    if (h) {
      if (((h as any).ruleId as any) !== (Jr as any)) {
        s = (((l as any).stack as any).pop as any)();
        break;
      }
      (h as any).captureIndices && ((h as any).captureIndices as any).length && (((o as any).produce as any)((l as any).stack, (((h as any).captureIndices as any)[0] as any).start), (Ge as any)(t, e, n, (l as any).stack, o, ((l as any).rule as any).whileCaptures, (h as any).captureIndices), ((o as any).produce as any)((l as any).stack, (((h as any).captureIndices as any)[0] as any).end), a = (((h as any).captureIndices as any)[0] as any).end, ((((h as any).captureIndices as any)[0] as any).end as any) > (r as any) && (r = (((h as any).captureIndices as any)[0] as any).end, n = !1));
    } else {
      s = (((l as any).stack as any).pop as any)();
      break;
    }
  }
  return {
    stack: s,
    linePos: r,
    anchorPosition: a,
    isFirstLine: n
  };
}
function Xo(this: any, t: any, e: any, n: any, r: any, s: any, o: any): any {
  const a: any = (Ko as any)(t, e, n, r, s, o),
    i: any = ((t as any).getInjections as any)();
  if (((i as any).length as any) === (0 as any)) return a;
  const l: any = (Qo as any)(i, t, e, n, r, s, o);
  if (!l) return a;
  if (!a) return l;
  const c: any = (((a as any).captureIndices as any)[0] as any).start,
    u: any = (((l as any).captureIndices as any)[0] as any).start;
  return (u as any) < (c as any) || (l as any).priorityMatch && (u as any) === (c as any) ? l : a;
}
function Ko(this: any, t: any, e: any, n: any, r: any, s: any, o: any): any {
  const a: any = ((s as any).getRule as any)(t),
    {
      ruleScanner: i,
      findOptions: l
    }: any = (rs as any)(a, t, (s as any).endRule, n, (r as any) === (o as any)),
    c: any = ((i as any).findNextMatchSync as any)(e, r, l);
  return c ? {
    captureIndices: (c as any).captureIndices,
    matchedRuleId: (c as any).ruleId
  } : null;
}
function Qo(this: any, t: any, e: any, n: any, r: any, s: any, o: any, a: any): any {
  let i: any = (Number as any).MAX_VALUE,
    l: any = null,
    c: any,
    u: any = 0;
  const h: any = (((o as any).contentNameScopesList as any).getScopeNames as any)();
  for (let d: any = 0, p: any = (t as any).length; (d as any) < (p as any); d++) {
    const f: any = (t as any)[d];
    if (!((f as any).matcher as any)(h)) continue;
    const b: any = ((e as any).getRule as any)((f as any).ruleId),
      {
        ruleScanner: g,
        findOptions: y
      }: any = (rs as any)(b, e, null, r, (s as any) === (a as any)),
      m: any = ((g as any).findNextMatchSync as any)(n, s, y);
    if (!m) continue;
    const w: any = (((m as any).captureIndices as any)[0] as any).start;
    if (!((w as any) >= (i as any)) && (i = w, l = (m as any).captureIndices, c = (m as any).ruleId, u = (f as any).priority, (i as any) === (s as any))) break;
  }
  return l ? {
    priorityMatch: (u as any) === (-1 as any),
    captureIndices: l,
    matchedRuleId: c
  } : null;
}
function rs(this: any, t: any, e: any, n: any, r: any, s: any): any {
  return {
    ruleScanner: ((t as any).compileAG as any)(e, n, r, s),
    findOptions: 0
  };
}
function Zo(this: any, t: any, e: any, n: any, r: any, s: any): any {
  return {
    ruleScanner: ((t as any).compileWhileAG as any)(e, n, r, s),
    findOptions: 0
  };
}
function Ge(this: any, t: any, e: any, n: any, r: any, s: any, o: any, a: any): any {
  if (((o as any).length as any) === (0 as any)) return;
  const i: any = (e as any).content,
    l: any = ((Math as any).min as any)((o as any).length, (a as any).length),
    c: any = [],
    u: any = ((a as any)[0] as any).end;
  for (let h: any = 0; (h as any) < (l as any); h++) {
    const d: any = (o as any)[h];
    if ((d as any) === (null as any)) continue;
    const p: any = (a as any)[h];
    if (((p as any).length as any) === (0 as any)) continue;
    if (((p as any).start as any) > (u as any)) break;
    for (; ((c as any).length as any) > (0 as any) && (((c as any)[((c as any).length as any) - (1 as any)] as any).endPos as any) <= ((p as any).start as any);) ((s as any).produceFromScopes as any)(((c as any)[((c as any).length as any) - (1 as any)] as any).scopes, ((c as any)[((c as any).length as any) - (1 as any)] as any).endPos), ((c as any).pop as any)();
    if (((c as any).length as any) > (0 as any) ? ((s as any).produceFromScopes as any)(((c as any)[((c as any).length as any) - (1 as any)] as any).scopes, (p as any).start) : ((s as any).produce as any)(r, (p as any).start), (d as any).retokenizeCapturedWithRuleId) {
      const b: any = ((d as any).getName as any)(i, a),
        g: any = (((r as any).contentNameScopesList as any).pushAttributed as any)(b, t),
        y: any = ((d as any).getContentName as any)(i, a),
        m: any = ((g as any).pushAttributed as any)(y, t),
        w: any = ((r as any).push as any)((d as any).retokenizeCapturedWithRuleId, (p as any).start, -1, !1, null, g, m),
        _: any = ((t as any).createOnigString as any)(((i as any).substring as any)(0, (p as any).end));
      (ns as any)(t, _, n && ((p as any).start as any) === (0 as any), (p as any).start, w, s, !1, 0), (Zr as any)(_);
      continue;
    }
    const f: any = ((d as any).getName as any)(i, a);
    if ((f as any) !== (null as any)) {
      const g: any = (((((c as any).length as any) > (0 as any) ? ((c as any)[((c as any).length as any) - (1 as any)] as any).scopes : (r as any).contentNameScopesList) as any).pushAttributed as any)(f, t);
      ((c as any).push as any)(new (Yo as any)(g, (p as any).end));
    }
  }
  for (; ((c as any).length as any) > (0 as any);) ((s as any).produceFromScopes as any)(((c as any)[((c as any).length as any) - (1 as any)] as any).scopes, ((c as any)[((c as any).length as any) - (1 as any)] as any).endPos), ((c as any).pop as any)();
}
var Yo: any = class {
  [key: string]: any;
  scopes: any;
  endPos: any;
  constructor(t: any, e: any) {
    (this as any).scopes = t, (this as any).endPos = e;
  }
};
function Jo(this: any, t: any, e: any, n: any, r: any, s: any, o: any, a: any, i: any): any {
  return new (ta as any)(t, e, n, r, s, o, a, i);
}
function Xn(this: any, t: any, e: any, n: any, r: any, s: any): any {
  const o: any = (pt as any)(e, mt),
    a: any = ((es as any).getCompiledRuleId as any)(n, r, (s as any).repository);
  for (const i of o) ((t as any).push as any)({
    debugSelector: e,
    matcher: (i as any).matcher,
    ruleId: a,
    grammar: s,
    priority: (i as any).priority
  });
}
function mt(this: any, t: any, e: any): any {
  if (((e as any).length as any) < ((t as any).length as any)) return !1;
  let n: any = 0;
  return ((t as any).every as any)((r: any): any => {
    for (let s: any = n; (s as any) < ((e as any).length as any); s++) if ((ea as any)((e as any)[s], r)) return n = (s as any) + (1 as any), !0;
    return !1;
  });
}
function ea(this: any, t: any, e: any): any {
  if (!t) return !1;
  if ((t as any) === (e as any)) return !0;
  const n: any = (e as any).length;
  return ((t as any).length as any) > (n as any) && (((t as any).substr as any)(0, n) as any) === (e as any) && ((t as any)[n] as any) === ("." as any);
}
var ta: any = class {
  declare _onigLib: any;
  declare balancedBracketSelectors: any;
  declare _rootScopeName: any;
  [key: string]: any;
  constructor(t: any, e: any, n: any, r: any, s: any, o: any, a: any, i: any) {
    if ((this as any)._rootScopeName = t, (this as any).balancedBracketSelectors = o, (this as any)._onigLib = i, (this as any)._basicScopeAttributesProvider = new (qo as any)(n, r), (this as any)._rootId = -1, (this as any)._lastRuleId = 0, (this as any)._ruleId2desc = [null], (this as any)._includedGrammars = {}, (this as any)._grammarRepository = a, (this as any)._grammar = (Kn as any)(e, null), (this as any)._injections = null, (this as any)._tokenTypeMatchers = [], s) for (const l of ((Object as any).keys as any)(s)) {
      const c: any = (pt as any)(l, mt);
      for (const u of c) (((this as any)._tokenTypeMatchers as any).push as any)({
        matcher: (u as any).matcher,
        type: (s as any)[l]
      });
    }
  }
  _rootId: any;
  _lastRuleId: any;
  _ruleId2desc: any;
  _includedGrammars: any;
  _grammarRepository: any;
  _grammar: any;
  _injections: any;
  _basicScopeAttributesProvider: any;
  _tokenTypeMatchers: any;
  get themeProvider(): any {
    return (this as any)._grammarRepository;
  }
  dispose(): any {
    for (const t of (this as any)._ruleId2desc) t && ((t as any).dispose as any)();
  }
  createOnigScanner(t: any): any {
    return (((this as any)._onigLib as any).createOnigScanner as any)(t);
  }
  createOnigString(t: any): any {
    return (((this as any)._onigLib as any).createOnigString as any)(t);
  }
  getMetadataForScope(t: any): any {
    return (((this as any)._basicScopeAttributesProvider as any).getBasicScopeAttributes as any)(t);
  }
  _collectInjections(): any {
    const t: any = {
        lookup: (s: any): any => (s as any) === ((this as any)._rootScopeName as any) ? (this as any)._grammar : ((this as any).getExternalGrammar as any)(s),
        injections: (s: any): any => (((this as any)._grammarRepository as any).injections as any)(s)
      },
      e: any = [],
      n: any = (this as any)._rootScopeName,
      r: any = ((t as any).lookup as any)(n);
    if (r) {
      const s: any = (r as any).injections;
      if (s) for (let a in s) (Xn as any)(e, a, (s as any)[a], this, r);
      const o: any = (((this as any)._grammarRepository as any).injections as any)(n);
      o && ((o as any).forEach as any)((a: any): any => {
        const i: any = ((this as any).getExternalGrammar as any)(a);
        if (i) {
          const l: any = (i as any).injectionSelector;
          l && (Xn as any)(e, l, i, this, i);
        }
      });
    }
    return ((e as any).sort as any)((s: any, o: any): any => ((s as any).priority as any) - ((o as any).priority as any)), e;
  }
  getInjections(): any {
    return ((this as any)._injections as any) === (null as any) && ((this as any)._injections = ((this as any)._collectInjections as any)()), (this as any)._injections;
  }
  registerRule(t: any): any {
    const e: any = ++(this as any)._lastRuleId,
      n: any = (t as any)(e);
    return ((this as any)._ruleId2desc as any)[e] = n, n;
  }
  getRule(t: any): any {
    return ((this as any)._ruleId2desc as any)[t];
  }
  getExternalGrammar(t: any, e: any): any {
    if (((this as any)._includedGrammars as any)[t]) return ((this as any)._includedGrammars as any)[t];
    if ((this as any)._grammarRepository) {
      const n: any = (((this as any)._grammarRepository as any).lookup as any)(t);
      if (n) return ((this as any)._includedGrammars as any)[t] = (Kn as any)(n, e && (e as any).$base), ((this as any)._includedGrammars as any)[t];
    }
  }
  tokenizeLine(t: any, e: any, n: any = 0): any {
    const r: any = ((this as any)._tokenize as any)(t, e, !1, n);
    return {
      tokens: (((r as any).lineTokens as any).getResult as any)((r as any).ruleStack, (r as any).lineLength),
      ruleStack: (r as any).ruleStack,
      stoppedEarly: (r as any).stoppedEarly
    };
  }
  tokenizeLine2(t: any, e: any, n: any = 0): any {
    const r: any = ((this as any)._tokenize as any)(t, e, !0, n);
    return {
      tokens: (((r as any).lineTokens as any).getBinaryResult as any)((r as any).ruleStack, (r as any).lineLength),
      ruleStack: (r as any).ruleStack,
      stoppedEarly: (r as any).stoppedEarly
    };
  }
  _tokenize(t: any, e: any, n: any, r: any): any {
    ((this as any)._rootId as any) === (-1 as any) && ((this as any)._rootId = ((es as any).getCompiledRuleId as any)((((this as any)._grammar as any).repository as any).$self, this, ((this as any)._grammar as any).repository), ((this as any).getInjections as any)());
    let s: any;
    if (!e || (e as any) === ((an as any).NULL as any)) {
      s = !0;
      const c: any = (((this as any)._basicScopeAttributesProvider as any).getDefaultAttributes as any)(),
        u: any = (((this as any).themeProvider as any).getDefaults as any)(),
        h: any = ((Re as any).set as any)(0, (c as any).languageId, (c as any).tokenType, null, (u as any).fontStyle, (u as any).foregroundId, (u as any).backgroundId),
        d: any = ((((this as any).getRule as any)((this as any)._rootId) as any).getName as any)(null, null);
      let p: any;
      d ? p = ((Be as any).createRootAndLookUpScopeName as any)(d, h, this) : p = ((Be as any).createRoot as any)("unknown", h), e = new (an as any)(null, (this as any)._rootId, -1, -1, !1, null, p, p);
    } else s = !1, ((e as any).reset as any)();
    t = (t as any) + (`
` as any);
    const o: any = ((this as any).createOnigString as any)(t),
      a: any = ((o as any).content as any).length,
      i: any = new (ra as any)(n, t, (this as any)._tokenTypeMatchers, (this as any).balancedBracketSelectors),
      l: any = (ns as any)(this, o, s, 0, e, i, !0, r);
    return (Zr as any)(o), {
      lineLength: a,
      lineTokens: i,
      ruleStack: (l as any).stack,
      stoppedEarly: (l as any).stoppedEarly
    };
  }
};
function Kn(this: any, t: any, e: any): any {
  return t = (ko as any)(t), (t as any).repository = (t as any).repository || {}, ((t as any).repository as any).$self = {
    $vscodeTextmateLocation: (t as any).$vscodeTextmateLocation,
    patterns: (t as any).patterns,
    name: (t as any).scopeName
  }, ((t as any).repository as any).$base = e || ((t as any).repository as any).$self, t;
}
var Be: any = class X {
    declare tokenAttributes: any;
    declare scopePath: any;
    declare parent: any;
    [key: string]: any;
    constructor(e: any, n: any, r: any) {
      (this as any).parent = e, (this as any).scopePath = n, (this as any).tokenAttributes = r;
    }
    static fromExtension(e: any, n: any): any {
      let r: any = e,
        s: any = e?.scopePath ?? null;
      for (const o of n) s = ((Ft as any).push as any)(s, (o as any).scopeNames), r = new (X as any)(r, s, (o as any).encodedTokenAttributes);
      return r;
    }
    static createRoot(e: any, n: any): any {
      return new (X as any)(null, new (Ft as any)(null, e), n);
    }
    static createRootAndLookUpScopeName(e: any, n: any, r: any): any {
      const s: any = ((r as any).getMetadataForScope as any)(e),
        o: any = new (Ft as any)(null, e),
        a: any = (((r as any).themeProvider as any).themeMatch as any)(o),
        i: any = ((X as any).mergeAttributes as any)(n, s, a);
      return new (X as any)(null, o, i);
    }
    get scopeName(): any {
      return ((this as any).scopePath as any).scopeName;
    }
    toString(): any {
      return ((((this as any).getScopeNames as any)() as any).join as any)(" ");
    }
    equals(e: any): any {
      return ((X as any).equals as any)(this, e);
    }
    static equals(e: any, n: any): any {
      do {
        if ((e as any) === (n as any) || !e && !n) return !0;
        if (!e || !n || ((e as any).scopeName as any) !== ((n as any).scopeName as any) || ((e as any).tokenAttributes as any) !== ((n as any).tokenAttributes as any)) return !1;
        e = (e as any).parent, n = (n as any).parent;
      } while (!0);
    }
    static mergeAttributes(e: any, n: any, r: any): any {
      let s: any = -1,
        o: any = 0,
        a: any = 0;
      return (r as any) !== (null as any) && (s = (r as any).fontStyle, o = (r as any).foregroundId, a = (r as any).backgroundId), ((Re as any).set as any)(e, (n as any).languageId, (n as any).tokenType, null, s, o, a);
    }
    pushAttributed(e: any, n: any): any {
      if ((e as any) === (null as any)) return this;
      if ((((e as any).indexOf as any)(" ") as any) === (-1 as any)) return ((X as any)._pushAttributed as any)(this, e, n);
      const r: any = ((e as any).split as any)(/ /g);
      let s: any = this;
      for (const o of r) s = ((X as any)._pushAttributed as any)(s, o, n);
      return s;
    }
    static _pushAttributed(e: any, n: any, r: any): any {
      const s: any = ((r as any).getMetadataForScope as any)(n),
        o: any = (((e as any).scopePath as any).push as any)(n),
        a: any = (((r as any).themeProvider as any).themeMatch as any)(o),
        i: any = ((X as any).mergeAttributes as any)((e as any).tokenAttributes, s, a);
      return new (X as any)(e, o, i);
    }
    getScopeNames(): any {
      return (((this as any).scopePath as any).getSegments as any)();
    }
    getExtensionIfDefined(e: any): any {
      const n: any = [];
      let r: any = this;
      for (; r && (r as any) !== (e as any);) ((n as any).push as any)({
        encodedTokenAttributes: (r as any).tokenAttributes,
        scopeNames: (((r as any).scopePath as any).getExtensionIfDefined as any)((r as any).parent?.scopePath ?? null)
      }), r = (r as any).parent;
      return (r as any) === (e as any) ? ((n as any).reverse as any)() : void 0;
    }
  },
  an: any = class ye {
    declare contentNameScopesList: any;
    declare nameScopesList: any;
    declare endRule: any;
    declare beginRuleCapturedEOL: any;
    declare ruleId: any;
    declare parent: any;
    [key: string]: any;
    constructor(e: any, n: any, r: any, s: any, o: any, a: any, i: any, l: any) {
      (this as any).parent = e, (this as any).ruleId = n, (this as any).beginRuleCapturedEOL = o, (this as any).endRule = a, (this as any).nameScopesList = i, (this as any).contentNameScopesList = l, (this as any).depth = (this as any).parent ? (((this as any).parent as any).depth as any) + (1 as any) : 1, (this as any)._enterPos = r, (this as any)._anchorPos = s;
    }
    _stackElementBrand: any = void 0;
    static NULL: any = new (ye as any)(null, 0, 0, 0, !1, null, null, null);
    _enterPos: any;
    _anchorPos: any;
    depth: any;
    equals(e: any): any {
      return (e as any) === (null as any) ? !1 : ((ye as any)._equals as any)(this, e);
    }
    static _equals(e: any, n: any): any {
      return (e as any) === (n as any) ? !0 : ((this as any)._structuralEquals as any)(e, n) ? ((Be as any).equals as any)((e as any).contentNameScopesList, (n as any).contentNameScopesList) : !1;
    }
    static _structuralEquals(e: any, n: any): any {
      do {
        if ((e as any) === (n as any) || !e && !n) return !0;
        if (!e || !n || ((e as any).depth as any) !== ((n as any).depth as any) || ((e as any).ruleId as any) !== ((n as any).ruleId as any) || ((e as any).endRule as any) !== ((n as any).endRule as any)) return !1;
        e = (e as any).parent, n = (n as any).parent;
      } while (!0);
    }
    clone(): any {
      return this;
    }
    static _reset(e: any): any {
      for (; e;) (e as any)._enterPos = -1, (e as any)._anchorPos = -1, e = (e as any).parent;
    }
    reset(): any {
      ((ye as any)._reset as any)(this);
    }
    pop(): any {
      return (this as any).parent;
    }
    safePop(): any {
      return (this as any).parent ? (this as any).parent : this;
    }
    push(e: any, n: any, r: any, s: any, o: any, a: any, i: any): any {
      return new (ye as any)(this, e, n, r, s, o, a, i);
    }
    getEnterPos(): any {
      return (this as any)._enterPos;
    }
    getAnchorPos(): any {
      return (this as any)._anchorPos;
    }
    getRule(e: any): any {
      return ((e as any).getRule as any)((this as any).ruleId);
    }
    toString(): any {
      const e: any = [];
      return ((this as any)._writeString as any)(e, 0), (("[" as any) + (((e as any).join as any)(",") as any) as any) + ("]" as any);
    }
    _writeString(e: any, n: any): any {
      return (this as any).parent && (n = (((this as any).parent as any)._writeString as any)(e, n)), (e as any)[n++] = `(${(this as any).ruleId}, ${(this as any).nameScopesList?.toString()}, ${(this as any).contentNameScopesList?.toString()})`, n;
    }
    withContentNameScopesList(e: any): any {
      return ((this as any).contentNameScopesList as any) === (e as any) ? this : (((this as any).parent as any).push as any)((this as any).ruleId, (this as any)._enterPos, (this as any)._anchorPos, (this as any).beginRuleCapturedEOL, (this as any).endRule, (this as any).nameScopesList, e);
    }
    withEndRule(e: any): any {
      return ((this as any).endRule as any) === (e as any) ? this : new (ye as any)((this as any).parent, (this as any).ruleId, (this as any)._enterPos, (this as any)._anchorPos, (this as any).beginRuleCapturedEOL, e, (this as any).nameScopesList, (this as any).contentNameScopesList);
    }
    hasSameRuleAs(e: any): any {
      let n: any = this;
      for (; n && ((n as any)._enterPos as any) === ((e as any)._enterPos as any);) {
        if (((n as any).ruleId as any) === ((e as any).ruleId as any)) return !0;
        n = (n as any).parent;
      }
      return !1;
    }
    toStateStackFrame(): any {
      return {
        ruleId: (this as any).ruleId,
        beginRuleCapturedEOL: (this as any).beginRuleCapturedEOL,
        endRule: (this as any).endRule,
        nameScopesList: (this as any).nameScopesList?.getExtensionIfDefined((this as any).parent?.nameScopesList ?? null) ?? [],
        contentNameScopesList: (this as any).contentNameScopesList?.getExtensionIfDefined((this as any).nameScopesList) ?? []
      };
    }
    static pushFrame(e: any, n: any): any {
      const r: any = ((Be as any).fromExtension as any)(e?.nameScopesList ?? null, (n as any).nameScopesList);
      return new (ye as any)(e, (n as any).ruleId, (n as any).enterPos ?? -1, (n as any).anchorPos ?? -1, (n as any).beginRuleCapturedEOL, (n as any).endRule, r, ((Be as any).fromExtension as any)(r, (n as any).contentNameScopesList));
    }
  },
  na: any = class {
    [key: string]: any;
    balancedBracketScopes: any;
    unbalancedBracketScopes: any;
    allowAny: any = !1;
    constructor(t: any, e: any) {
      (this as any).balancedBracketScopes = ((t as any).flatMap as any)((n: any): any => (n as any) === ("*" as any) ? ((this as any).allowAny = !0, []) : (((pt as any)(n, mt) as any).map as any)((r: any): any => (r as any).matcher)), (this as any).unbalancedBracketScopes = ((e as any).flatMap as any)((n: any): any => (((pt as any)(n, mt) as any).map as any)((r: any): any => (r as any).matcher));
    }
    get matchesAlways(): any {
      return (this as any).allowAny && (((this as any).unbalancedBracketScopes as any).length as any) === (0 as any);
    }
    get matchesNever(): any {
      return (((this as any).balancedBracketScopes as any).length as any) === (0 as any) && !(this as any).allowAny;
    }
    match(t: any): any {
      for (const e of (this as any).unbalancedBracketScopes) if ((e as any)(t)) return !1;
      for (const e of (this as any).balancedBracketScopes) if ((e as any)(t)) return !0;
      return (this as any).allowAny;
    }
  },
  ra: any = class {
    declare balancedBracketSelectors: any;
    [key: string]: any;
    constructor(t: any, e: any, n: any, r: any) {
      (this as any).balancedBracketSelectors = r, (this as any)._emitBinaryTokens = t, (this as any)._tokenTypeOverrides = n, (this as any)._lineText = null, (this as any)._tokens = [], (this as any)._binaryTokens = [], (this as any)._lastTokenEndIndex = 0;
    }
    _emitBinaryTokens: any;
    _lineText: any;
    _tokens: any;
    _binaryTokens: any;
    _lastTokenEndIndex: any;
    _tokenTypeOverrides: any;
    produce(t: any, e: any): any {
      ((this as any).produceFromScopes as any)((t as any).contentNameScopesList, e);
    }
    produceFromScopes(t: any, e: any): any {
      if (((this as any)._lastTokenEndIndex as any) >= (e as any)) return;
      if ((this as any)._emitBinaryTokens) {
        let r: any = t?.tokenAttributes ?? 0,
          s: any = !1;
        if ((this as any).balancedBracketSelectors?.matchesAlways && (s = !0), (((this as any)._tokenTypeOverrides as any).length as any) > (0 as any) || (this as any).balancedBracketSelectors && !((this as any).balancedBracketSelectors as any).matchesAlways && !((this as any).balancedBracketSelectors as any).matchesNever) {
          const o: any = t?.getScopeNames() ?? [];
          for (const a of (this as any)._tokenTypeOverrides) ((a as any).matcher as any)(o) && (r = ((Re as any).set as any)(r, 0, (a as any).type, null, -1, 0, 0));
          (this as any).balancedBracketSelectors && (s = (((this as any).balancedBracketSelectors as any).match as any)(o));
        }
        if (s && (r = ((Re as any).set as any)(r, 0, 8, s, -1, 0, 0)), (((this as any)._binaryTokens as any).length as any) > (0 as any) && (((this as any)._binaryTokens as any)[(((this as any)._binaryTokens as any).length as any) - (1 as any)] as any) === (r as any)) {
          (this as any)._lastTokenEndIndex = e;
          return;
        }
        (((this as any)._binaryTokens as any).push as any)((this as any)._lastTokenEndIndex), (((this as any)._binaryTokens as any).push as any)(r), (this as any)._lastTokenEndIndex = e;
        return;
      }
      const n: any = t?.getScopeNames() ?? [];
      (((this as any)._tokens as any).push as any)({
        startIndex: (this as any)._lastTokenEndIndex,
        endIndex: e,
        scopes: n
      }), (this as any)._lastTokenEndIndex = e;
    }
    getResult(t: any, e: any): any {
      return (((this as any)._tokens as any).length as any) > (0 as any) && ((((this as any)._tokens as any)[(((this as any)._tokens as any).length as any) - (1 as any)] as any).startIndex as any) === ((e as any) - (1 as any) as any) && (((this as any)._tokens as any).pop as any)(), (((this as any)._tokens as any).length as any) === (0 as any) && ((this as any)._lastTokenEndIndex = -1, ((this as any).produce as any)(t, e), (((this as any)._tokens as any)[(((this as any)._tokens as any).length as any) - (1 as any)] as any).startIndex = 0), (this as any)._tokens;
    }
    getBinaryResult(t: any, e: any): any {
      (((this as any)._binaryTokens as any).length as any) > (0 as any) && (((this as any)._binaryTokens as any)[(((this as any)._binaryTokens as any).length as any) - (2 as any)] as any) === ((e as any) - (1 as any) as any) && ((((this as any)._binaryTokens as any).pop as any)(), (((this as any)._binaryTokens as any).pop as any)()), (((this as any)._binaryTokens as any).length as any) === (0 as any) && ((this as any)._lastTokenEndIndex = -1, ((this as any).produce as any)(t, e), ((this as any)._binaryTokens as any)[(((this as any)._binaryTokens as any).length as any) - (2 as any)] = 0);
      const n: any = new (Uint32Array as any)(((this as any)._binaryTokens as any).length);
      for (let r: any = 0, s: any = ((this as any)._binaryTokens as any).length; (r as any) < (s as any); r++) (n as any)[r] = ((this as any)._binaryTokens as any)[r];
      return n;
    }
  },
  sa: any = class {
    declare _onigLib: any;
    [key: string]: any;
    constructor(t: any, e: any) {
      (this as any)._onigLib = e, (this as any)._theme = t;
    }
    _grammars: any = new (Map as any)();
    _rawGrammars: any = new (Map as any)();
    _injectionGrammars: any = new (Map as any)();
    _theme: any;
    dispose(): any {
      for (const t of (((this as any)._grammars as any).values as any)()) ((t as any).dispose as any)();
    }
    setTheme(t: any): any {
      (this as any)._theme = t;
    }
    getColorMap(): any {
      return (((this as any)._theme as any).getColorMap as any)();
    }
    addGrammar(t: any, e: any): any {
      (((this as any)._rawGrammars as any).set as any)((t as any).scopeName, t), e && (((this as any)._injectionGrammars as any).set as any)((t as any).scopeName, e);
    }
    lookup(t: any): any {
      return (((this as any)._rawGrammars as any).get as any)(t);
    }
    injections(t: any): any {
      return (((this as any)._injectionGrammars as any).get as any)(t);
    }
    getDefaults(): any {
      return (((this as any)._theme as any).getDefaults as any)();
    }
    themeMatch(t: any): any {
      return (((this as any)._theme as any).match as any)(t);
    }
    grammarForScopeName(t: any, e: any, n: any, r: any, s: any): any {
      if (!(((this as any)._grammars as any).has as any)(t)) {
        let o: any = (((this as any)._rawGrammars as any).get as any)(t);
        if (!o) return null;
        (((this as any)._grammars as any).set as any)(t, (Jo as any)(t, o, e, n, r, s, this, (this as any)._onigLib));
      }
      return (((this as any)._grammars as any).get as any)(t);
    }
  },
  oa: any = class {
    [key: string]: any;
    _options: any;
    _syncRegistry: any;
    _ensureGrammarCache: any;
    constructor(e: any) {
      (this as any)._options = e, (this as any)._syncRegistry = new (sa as any)(((dt as any).createFromRawTheme as any)((e as any).theme, (e as any).colorMap), (e as any).onigLib), (this as any)._ensureGrammarCache = new (Map as any)();
    }
    dispose(): any {
      (((this as any)._syncRegistry as any).dispose as any)();
    }
    setTheme(e: any, n: any): any {
      (((this as any)._syncRegistry as any).setTheme as any)(((dt as any).createFromRawTheme as any)(e, n));
    }
    getColorMap(): any {
      return (((this as any)._syncRegistry as any).getColorMap as any)();
    }
    loadGrammarWithEmbeddedLanguages(e: any, n: any, r: any): any {
      return ((this as any).loadGrammarWithConfiguration as any)(e, n, {
        embeddedLanguages: r
      });
    }
    loadGrammarWithConfiguration(e: any, n: any, r: any): any {
      return ((this as any)._loadGrammar as any)(e, n, (r as any).embeddedLanguages, (r as any).tokenTypes, new (na as any)((r as any).balancedBracketSelectors || [], (r as any).unbalancedBracketSelectors || []));
    }
    loadGrammar(e: any): any {
      return ((this as any)._loadGrammar as any)(e, 0, null, null, null);
    }
    _loadGrammar(e: any, n: any, r: any, s: any, o: any): any {
      const a: any = new (To as any)((this as any)._syncRegistry, e);
      for (; (((a as any).Q as any).length as any) > (0 as any);) (((a as any).Q as any).map as any)((i: any): any => ((this as any)._loadSingleGrammar as any)((i as any).scopeName)), ((a as any).processQueue as any)();
      return ((this as any)._grammarForScopeName as any)(e, n, r, s, o);
    }
    _loadSingleGrammar(e: any): any {
      (((this as any)._ensureGrammarCache as any).has as any)(e) || (((this as any)._doLoadSingleGrammar as any)(e), (((this as any)._ensureGrammarCache as any).set as any)(e, !0));
    }
    _doLoadSingleGrammar(e: any): any {
      const n: any = (((this as any)._options as any).loadGrammar as any)(e);
      if (n) {
        const r: any = (typeof ((this as any)._options as any).getInjections as any) == ("function" as any) ? (((this as any)._options as any).getInjections as any)(e) : void 0;
        (((this as any)._syncRegistry as any).addGrammar as any)(n, r);
      }
    }
    addGrammar(e: any, n: any = [], r: any = 0, s: any = null): any {
      return (((this as any)._syncRegistry as any).addGrammar as any)(e, n), ((this as any)._grammarForScopeName as any)((e as any).scopeName, r, s);
    }
    _grammarForScopeName(e: any, n: any = 0, r: any = null, s: any = null, o: any = null): any {
      return (((this as any)._syncRegistry as any).grammarForScopeName as any)(e, n, r, s, o);
    }
  },
  ln: any = (an as any).NULL;
function yt(this: any, t: any, e: any): any {
  const n: any = (typeof t as any) == ("string" as any) ? {} : {
      ...(t as any).colorReplacements
    },
    r: any = (typeof t as any) == ("string" as any) ? t : (t as any).name;
  for (const [s, o] of ((Object as any).entries as any)(e?.colorReplacements || {})) (typeof o as any) == ("string" as any) ? (n as any)[s] = o : (s as any) === (r as any) && ((Object as any).assign as any)(n, o);
  return n;
}
function le(this: any, t: any, e: any): any {
  return t && (e?.[t?.toLowerCase()] || t);
}
function aa(this: any, t: any): any {
  return ((Array as any).isArray as any)(t) ? t : [t];
}
async function ss(this: any, t: any): Promise<any> {
  return ((((Promise as any).resolve as any)((typeof t as any) == ("function" as any) ? (t as any)() : t) as any).then as any)((e: any): any => (e as any).default || e);
}
function vt(this: any, t: any): any {
  return !t || ((["plaintext", "txt", "text", "plain"] as any).includes as any)(t);
}
function ia(this: any, t: any): any {
  return (t as any) === ("ansi" as any) || (vt as any)(t);
}
function At(this: any, t: any): any {
  return (t as any) === ("none" as any);
}
function la(this: any, t: any): any {
  return (At as any)(t);
}
function Et(this: any, t: any, e: any = !1): any {
  if (((t as any).length as any) === (0 as any)) return [["", 0]];
  const n: any = ((t as any).split as any)(/(\r?\n)/g);
  let r: any = 0;
  const s: any = [];
  for (let o: any = 0; (o as any) < ((n as any).length as any); o += 2) {
    const a: any = e ? ((n as any)[o] as any) + (((n as any)[(o as any) + (1 as any)] || "") as any) : (n as any)[o];
    ((s as any).push as any)([a, r]), r += ((n as any)[o] as any).length, r += (n as any)[(o as any) + (1 as any)]?.length || 0;
  }
  return s;
}
const Qn: any = {
    light: "#333333",
    dark: "#bbbbbb"
  },
  Zn: any = {
    light: "#fffffe",
    dark: "#1e1e1e"
  },
  Yn: string = "__shiki_resolved";
function xn(this: any, t: any): any {
  if (t?.[Yn]) return t;
  const e: any = {
    ...t
  };
  (e as any).tokenColors && !(e as any).settings && ((e as any).settings = (e as any).tokenColors, delete (e as any).tokenColors), (e as any).type ||= "dark", (e as any).colorReplacements = {
    ...(e as any).colorReplacements
  }, (e as any).settings ||= [];
  let {
    bg: n,
    fg: r
  }: any = e;
  if (!n || !r) {
    const i: any = (e as any).settings ? (((e as any).settings as any).find as any)((l: any): any => !(l as any).name && !(l as any).scope) : void 0;
    i?.settings?.foreground && (r = ((i as any).settings as any).foreground), i?.settings?.background && (n = ((i as any).settings as any).background), !r && e?.colors?.["editor.foreground"] && (r = ((e as any).colors as any)["editor.foreground"]), !n && e?.colors?.["editor.background"] && (n = ((e as any).colors as any)["editor.background"]), r || (r = ((e as any).type as any) === ("light" as any) ? (Qn as any).light : (Qn as any).dark), n || (n = ((e as any).type as any) === ("light" as any) ? (Zn as any).light : (Zn as any).dark), (e as any).fg = r, (e as any).bg = n;
  }
  ((e as any).settings as any)[0] && (((e as any).settings as any)[0] as any).settings && !(((e as any).settings as any)[0] as any).scope || (((e as any).settings as any).unshift as any)({
    settings: {
      foreground: (e as any).fg,
      background: (e as any).bg
    }
  });
  let s: any = 0;
  const o: any = new (Map as any)();
  function a(this: any, i: any): any {
    if (((o as any).has as any)(i)) return ((o as any).get as any)(i);
    s += 1;
    const l: any = `#${((((((s as any).toString as any)(16) as any).padStart as any)(8, "0") as any).toLowerCase as any)()}`;
    return (e as any).colorReplacements?.[`#${l}`] ? (a as any)(i) : (((o as any).set as any)(i, l), l);
  }
  (e as any).settings = (((e as any).settings as any).map as any)((i: any): any => {
    const l: any = (i as any).settings?.foreground && !((((i as any).settings as any).foreground as any).startsWith as any)("#"),
      c: any = (i as any).settings?.background && !((((i as any).settings as any).background as any).startsWith as any)("#");
    if (!l && !c) return i;
    const u: any = {
      ...i,
      settings: {
        ...(i as any).settings
      }
    };
    if (l) {
      const h: any = (a as any)(((i as any).settings as any).foreground);
      ((e as any).colorReplacements as any)[h] = ((i as any).settings as any).foreground, ((u as any).settings as any).foreground = h;
    }
    if (c) {
      const h: any = (a as any)(((i as any).settings as any).background);
      ((e as any).colorReplacements as any)[h] = ((i as any).settings as any).background, ((u as any).settings as any).background = h;
    }
    return u;
  });
  for (const i of ((Object as any).keys as any)((e as any).colors || {})) if (((i as any) === ("editor.foreground" as any) || (i as any) === ("editor.background" as any) || ((i as any).startsWith as any)("terminal.ansi")) && !((e as any).colors as any)[i]?.startsWith("#")) {
    const l: any = (a as any)(((e as any).colors as any)[i]);
    ((e as any).colorReplacements as any)[l] = ((e as any).colors as any)[i], ((e as any).colors as any)[i] = l;
  }
  return ((Object as any).defineProperty as any)(e, Yn, {
    enumerable: !1,
    writable: !1,
    value: !0
  }), e;
}
async function ca(this: any, t: any): Promise<any> {
  return ((Array as any).from as any)(new (Set as any)((((await ((Promise as any).all as any)(((((t as any).filter as any)((e: any): any => !(ia as any)(e)) as any).map as any)(async (e: any): Promise<any> => await (((ss as any)(e) as any).then as any)((n: any): any => ((Array as any).isArray as any)(n) ? n : [n])))) as any).flat as any)()));
}
async function ua(this: any, t: any): Promise<any> {
  return (((await ((Promise as any).all as any)(((t as any).map as any)(async (e: any): Promise<any> => (la as any)(e) ? null : (xn as any)(await (ss as any)(e))))) as any).filter as any)((e: any): any => !!e);
}
function os(this: any, t: any, e: any): any {
  if (!e) return t;
  if ((e as any)[t]) {
    const n: any = new (Set as any)([t]);
    for (; (e as any)[t];) {
      if (t = (e as any)[t], ((n as any).has as any)(t)) throw new (A as any)(`Circular alias \`${((((Array as any).from as any)(n) as any).join as any)(" -> ")} -> ${t}\``);
      ((n as any).add as any)(t);
    }
  }
  return t;
}
var ha: any = class extends (oa as any) {
    declare _alias: any;
    declare _langs: any;
    declare _themes: any;
    declare _resolver: any;
    [key: string]: any;
    _resolvedThemes: any = new (Map as any)();
    _resolvedGrammars: any = new (Map as any)();
    _langMap: any = new (Map as any)();
    _langGraph: any = new (Map as any)();
    _textmateThemeCache: any = new (WeakMap as any)();
    _loadedThemesCache: any = null;
    _loadedLanguagesCache: any = null;
    constructor(t: any, e: any, n: any, r: any = {}) {
      super(t), (this as any)._resolver = t, (this as any)._themes = e, (this as any)._langs = n, (this as any)._alias = r, (((this as any)._themes as any).map as any)((s: any): any => ((this as any).loadTheme as any)(s)), ((this as any).loadLanguages as any)((this as any)._langs);
    }
    getTheme(t: any): any {
      return (typeof t as any) == ("string" as any) ? (((this as any)._resolvedThemes as any).get as any)(t) : ((this as any).loadTheme as any)(t);
    }
    loadTheme(t: any): any {
      const e: any = (xn as any)(t);
      return (e as any).name && ((((this as any)._resolvedThemes as any).set as any)((e as any).name, e), (this as any)._loadedThemesCache = null), e;
    }
    getLoadedThemes(): any {
      return (this as any)._loadedThemesCache || ((this as any)._loadedThemesCache = [...(((this as any)._resolvedThemes as any).keys as any)()]), (this as any)._loadedThemesCache;
    }
    setTheme(t: any): any {
      let e: any = (((this as any)._textmateThemeCache as any).get as any)(t);
      e || (e = ((dt as any).createFromRawTheme as any)(t), (((this as any)._textmateThemeCache as any).set as any)(t, e)), (((this as any)._syncRegistry as any).setTheme as any)(e);
    }
    getGrammar(t: any): any {
      return t = (os as any)(t, (this as any)._alias), (((this as any)._resolvedGrammars as any).get as any)(t);
    }
    loadLanguage(t: any): any {
      if (((this as any).getGrammar as any)((t as any).name)) return;
      const e: any = new (Set as any)((([...(((this as any)._langMap as any).values as any)()] as any).filter as any)((s: any): any => (s as any).embeddedLangsLazy?.includes((t as any).name)));
      (((this as any)._resolver as any).addLanguage as any)(t);
      const n: any = {
        balancedBracketSelectors: (t as any).balancedBracketSelectors || ["*"],
        unbalancedBracketSelectors: (t as any).unbalancedBracketSelectors || []
      };
      ((((this as any)._syncRegistry as any)._rawGrammars as any).set as any)((t as any).scopeName, t);
      const r: any = ((this as any).loadGrammarWithConfiguration as any)((t as any).scopeName, 1, n);
      if ((r as any).name = (t as any).name, (((this as any)._resolvedGrammars as any).set as any)((t as any).name, r), (t as any).aliases && (((t as any).aliases as any).forEach as any)((s: any): any => {
        ((this as any)._alias as any)[s] = (t as any).name;
      }), (this as any)._loadedLanguagesCache = null, (e as any).size) for (const s of e) (((this as any)._resolvedGrammars as any).delete as any)((s as any).name), (this as any)._loadedLanguagesCache = null, (this as any)._syncRegistry?._injectionGrammars?.delete((s as any).scopeName), (this as any)._syncRegistry?._grammars?.delete((s as any).scopeName), ((this as any).loadLanguage as any)((((this as any)._langMap as any).get as any)((s as any).name));
    }
    dispose(): any {
      (super.dispose as any)(), (((this as any)._resolvedThemes as any).clear as any)(), (((this as any)._resolvedGrammars as any).clear as any)(), (((this as any)._langMap as any).clear as any)(), (((this as any)._langGraph as any).clear as any)(), (this as any)._loadedThemesCache = null;
    }
    loadLanguages(t: any): any {
      for (const r of t) ((this as any).resolveEmbeddedLanguages as any)(r);
      const e: any = ((Array as any).from as any)((((this as any)._langGraph as any).entries as any)()),
        n: any = ((e as any).filter as any)(([r, s]: any): any => !s);
      if ((n as any).length) {
        const r: any = ((((e as any).filter as any)(([s, o]: any): any => o ? ((o as any).embeddedLanguages || (o as any).embeddedLangs)?.some((a: any): any => ((((n as any).map as any)(([i]: any): any => i) as any).includes as any)(a)) : !1) as any).filter as any)((s: any): any => !((n as any).includes as any)(s));
        throw new (A as any)(`Missing languages ${((((n as any).map as any)(([s]: any): any => `\`${s}\``) as any).join as any)(", ")}, required by ${((((r as any).map as any)(([s]: any): any => `\`${s}\``) as any).join as any)(", ")}`);
      }
      for (const [r, s] of e) (((this as any)._resolver as any).addLanguage as any)(s);
      for (const [r, s] of e) ((this as any).loadLanguage as any)(s);
    }
    getLoadedLanguages(): any {
      return (this as any)._loadedLanguagesCache || ((this as any)._loadedLanguagesCache = [...new (Set as any)([...(((this as any)._resolvedGrammars as any).keys as any)(), ...((Object as any).keys as any)((this as any)._alias)])]), (this as any)._loadedLanguagesCache;
    }
    resolveEmbeddedLanguages(t: any): any {
      (((this as any)._langMap as any).set as any)((t as any).name, t), (((this as any)._langGraph as any).set as any)((t as any).name, t);
      const e: any = (t as any).embeddedLanguages ?? (t as any).embeddedLangs;
      if (e) for (const n of e) (((this as any)._langGraph as any).set as any)(n, (((this as any)._langMap as any).get as any)(n));
    }
  },
  da: any = class {
    [key: string]: any;
    _langs: any = new (Map as any)();
    _scopeToLang: any = new (Map as any)();
    _injections: any = new (Map as any)();
    _onigLib: any;
    constructor(t: any, e: any) {
      (this as any)._onigLib = {
        createOnigScanner: (n: any): any => ((t as any).createScanner as any)(n),
        createOnigString: (n: any): any => ((t as any).createString as any)(n)
      }, ((e as any).forEach as any)((n: any): any => ((this as any).addLanguage as any)(n));
    }
    get onigLib(): any {
      return (this as any)._onigLib;
    }
    getLangRegistration(t: any): any {
      return (((this as any)._langs as any).get as any)(t);
    }
    loadGrammar(t: any): any {
      return (((this as any)._scopeToLang as any).get as any)(t);
    }
    addLanguage(t: any): any {
      (((this as any)._langs as any).set as any)((t as any).name, t), (t as any).aliases && (((t as any).aliases as any).forEach as any)((e: any): any => {
        (((this as any)._langs as any).set as any)(e, t);
      }), (((this as any)._scopeToLang as any).set as any)((t as any).scopeName, t), (t as any).injectTo && (((t as any).injectTo as any).forEach as any)((e: any): any => {
        (((this as any)._injections as any).get as any)(e) || (((this as any)._injections as any).set as any)(e, []), (((((this as any)._injections as any).get as any)(e) as any).push as any)((t as any).scopeName);
      });
    }
    getInjections(t: any): any {
      const e: any = ((t as any).split as any)(".");
      let n: any = [];
      for (let r: any = 1; (r as any) <= ((e as any).length as any); r++) {
        const s: any = ((((e as any).slice as any)(0, r) as any).join as any)(".");
        n = [...n, ...((((this as any)._injections as any).get as any)(s) || [])];
      }
      return n;
    }
  };
let Oe: any = 0;
function pa(this: any, t: any): any {
  Oe += 1, ((t as any).warnings as any) !== (!1 as any) && (Oe as any) >= (10 as any) && ((Oe as any) % (10 as any) as any) === (0 as any) && ((console as any).warn as any)(`[Shiki] ${Oe} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \`highlighter.dispose()\` to release unused instances.`);
  let e: any = !1;
  if (!(t as any).engine) throw new (A as any)("`engine` option is required for synchronous mode");
  const n: any = ((((t as any).langs || []) as any).flat as any)(1),
    r: any = ((((((t as any).themes || []) as any).flat as any)(1) as any).map as any)(xn),
    s: any = new (ha as any)(new (da as any)((t as any).engine, n), r, n, (t as any).langAlias);
  let o: any;
  function a(this: any, m: any): any {
    return (os as any)(m, (t as any).langAlias);
  }
  function i(this: any, m: any): any {
    (g as any)();
    const w: any = ((s as any).getGrammar as any)((typeof m as any) == ("string" as any) ? m : (m as any).name);
    if (!w) throw new (A as any)(`Language \`${m}\` not found, you may need to load it first`);
    return w;
  }
  function l(this: any, m: any): any {
    if ((m as any) === ("none" as any)) return {
      bg: "",
      fg: "",
      name: "none",
      settings: [],
      type: "dark"
    };
    (g as any)();
    const w: any = ((s as any).getTheme as any)(m);
    if (!w) throw new (A as any)(`Theme \`${m}\` not found, you may need to load it first`);
    return w;
  }
  function c(this: any, m: any): any {
    (g as any)();
    const w: any = (l as any)(m);
    return (o as any) !== (m as any) && (((s as any).setTheme as any)(w), o = m), {
      theme: w,
      colorMap: ((s as any).getColorMap as any)()
    };
  }
  function u(this: any): any {
    return (g as any)(), ((s as any).getLoadedThemes as any)();
  }
  function h(this: any): any {
    return (g as any)(), ((s as any).getLoadedLanguages as any)();
  }
  function d(this: any, ...m: any): any {
    (g as any)(), ((s as any).loadLanguages as any)(((m as any).flat as any)(1));
  }
  async function p(this: any, ...m: any): Promise<any> {
    return (d as any)(await (ca as any)(m));
  }
  function f(this: any, ...m: any): any {
    (g as any)();
    for (const w of ((m as any).flat as any)(1)) ((s as any).loadTheme as any)(w);
  }
  async function b(this: any, ...m: any): Promise<any> {
    return (g as any)(), (f as any)(await (ua as any)(m));
  }
  function g(this: any): any {
    if (e) throw new (A as any)("Shiki instance has been disposed");
  }
  function y(this: any): any {
    e || (e = !0, ((s as any).dispose as any)(), Oe -= 1);
  }
  return {
    setTheme: c,
    getTheme: l,
    getLanguage: i,
    getLoadedThemes: u,
    getLoadedLanguages: h,
    resolveLangAlias: a,
    loadLanguage: p,
    loadLanguageSync: d,
    loadTheme: b,
    loadThemeSync: f,
    dispose: y,
    [(Symbol as any).dispose]: y
  };
}
const as: any = new (WeakMap as any)();
function It(this: any, t: any, e: any): any {
  ((as as any).set as any)(t, e);
}
function ze(this: any, t: any): any {
  return ((as as any).get as any)(t);
}
var Nt: any = class is {
  [key: string]: any;
  _stacks: any = {};
  lang: any;
  get themes(): any {
    return ((Object as any).keys as any)((this as any)._stacks);
  }
  get theme(): any {
    return ((this as any).themes as any)[0];
  }
  get _stack(): any {
    return ((this as any)._stacks as any)[(this as any).theme];
  }
  static initial(e: any, n: any): any {
    return new (is as any)(((Object as any).fromEntries as any)((((aa as any)(n) as any).map as any)((r: any): any => [r, ln])), e);
  }
  constructor(...e: any) {
    if (((e as any).length as any) === (2 as any)) {
      const [n, r]: any = e;
      (this as any).lang = r, (this as any)._stacks = n;
    } else {
      const [n, r, s]: any = e;
      (this as any).lang = r, (this as any)._stacks = {
        [s]: n
      };
    }
  }
  getInternalStack(e: any = (this as any).theme): any {
    return ((this as any)._stacks as any)[e];
  }
  getScopes(e: any = (this as any).theme): any {
    return (fa as any)(((this as any)._stacks as any)[e]);
  }
  toJSON(): any {
    return {
      lang: (this as any).lang,
      theme: (this as any).theme,
      themes: (this as any).themes,
      scopes: ((this as any).getScopes as any)()
    };
  }
};
function fa(this: any, t: any): any {
  const e: any = [],
    n: any = new (Set as any)();
  function r(this: any, s: any): any {
    if (((n as any).has as any)(s)) return;
    ((n as any).add as any)(s);
    const o: any = s?.nameScopesList?.scopeName;
    o && ((e as any).push as any)(o), (s as any).parent && (r as any)((s as any).parent);
  }
  return (r as any)(t), e;
}
function ga(this: any, t: any, e: any): any {
  if (!(t instanceof Nt)) throw new (A as any)("Invalid grammar state");
  return ((t as any).getInternalStack as any)(e);
}
function ls(this: any, t: any, e: any, n: any = {}): any {
  const {
    theme: r = (((t as any).getLoadedThemes as any)() as any)[0]
  }: any = n;
  if ((vt as any)(((t as any).resolveLangAlias as any)((n as any).lang || "text")) || (At as any)(r)) return (((Et as any)(e) as any).map as any)((i: any): any => [{
    content: (i as any)[0],
    offset: (i as any)[1]
  }]);
  const {
      theme: s,
      colorMap: o
    }: any = ((t as any).setTheme as any)(r),
    a: any = ((t as any).getLanguage as any)((n as any).lang || "text");
  if ((n as any).grammarState) {
    if ((((n as any).grammarState as any).lang as any) !== ((a as any).name as any)) throw new (A as any)(`Grammar state language "${((n as any).grammarState as any).lang}" does not match highlight language "${(a as any).name}"`);
    if (!((((n as any).grammarState as any).themes as any).includes as any)((s as any).name)) throw new (A as any)(`Grammar state themes "${((n as any).grammarState as any).themes}" do not contain highlight theme "${(s as any).name}"`);
  }
  return (ya as any)(e, a, s, o, n);
}
function ma(this: any, ...t: any): any {
  if (((t as any).length as any) === (2 as any)) return (ze as any)((t as any)[1]);
  const [e, n, r = {}]: any = t,
    {
      lang: s = "text",
      theme: o = (((e as any).getLoadedThemes as any)() as any)[0]
    }: any = r;
  if ((vt as any)(s) || (At as any)(o)) throw new (A as any)("Plain language does not have grammar state");
  if ((s as any) === ("ansi" as any)) throw new (A as any)("ANSI language does not have grammar state");
  const {
      theme: a,
      colorMap: i
    }: any = ((e as any).setTheme as any)(o),
    l: any = ((e as any).getLanguage as any)(s);
  return new (Nt as any)(((vn as any)(n, l, a, i, r) as any).stateStack, (l as any).name, (a as any).name);
}
function ya(this: any, t: any, e: any, n: any, r: any, s: any): any {
  const o: any = (vn as any)(t, e, n, r, s),
    a: any = new (Nt as any)((o as any).stateStack, (e as any).name, (n as any).name);
  return (It as any)((o as any).tokens, a), (o as any).tokens;
}
function vn(this: any, t: any, e: any, n: any, r: any, s: any): any {
  const o: any = (yt as any)(n, s),
    {
      tokenizeMaxLineLength: a = 0,
      tokenizeTimeLimit: i = 500
    }: any = s,
    l: any = (Et as any)(t);
  let c: any = (s as any).grammarState ? (ga as any)((s as any).grammarState, (n as any).name) ?? ln : ((s as any).grammarContextCode as any) != (null as any) ? ((vn as any)((s as any).grammarContextCode, e, n, r, {
      ...s,
      grammarState: void 0,
      grammarContextCode: void 0
    }) as any).stateStack : ln,
    u: any = [];
  const h: any = [];
  for (let d: any = 0, p: any = (l as any).length; (d as any) < (p as any); d++) {
    const [f, b]: any = (l as any)[d];
    if ((f as any) === ("" as any)) {
      u = [], ((h as any).push as any)([]);
      continue;
    }
    if ((a as any) > (0 as any) && ((f as any).length as any) >= (a as any)) {
      u = [], ((h as any).push as any)([{
        content: f,
        offset: b,
        color: "",
        fontStyle: 0
      }]);
      continue;
    }
    let g: any, y: any, m: any;
    (s as any).includeExplanation && (g = ((e as any).tokenizeLine as any)(f, c, i), y = (g as any).tokens, m = 0);
    const w: any = ((e as any).tokenizeLine2 as any)(f, c, i),
      _: any = (((w as any).tokens as any).length as any) / (2 as any);
    for (let C: any = 0; (C as any) < (_ as any); C++) {
      const v: any = ((w as any).tokens as any)[(2 as any) * (C as any)],
        $: any = ((C as any) + (1 as any) as any) < (_ as any) ? ((w as any).tokens as any)[((2 as any) * (C as any) as any) + (2 as any)] : (f as any).length;
      if ((v as any) === ($ as any)) continue;
      const B: any = ((w as any).tokens as any)[((2 as any) * (C as any) as any) + (1 as any)],
        ce: any = (le as any)((r as any)[((Re as any).getForeground as any)(B)], o),
        ue: any = ((Re as any).getFontStyle as any)(B),
        H: any = {
          content: ((f as any).substring as any)(v, $),
          offset: (b as any) + (v as any),
          color: ce,
          fontStyle: ue
        };
      if ((s as any).includeExplanation) {
        const T: any = [];
        if (((s as any).includeExplanation as any) !== ("scopeName" as any)) for (const z of (n as any).settings) {
          let V: any;
          switch (typeof (z as any).scope) {
            case "string":
              V = (((((z as any).scope as any).split as any)(/,/) as any).map as any)((F: any): any => ((F as any).trim as any)());
              break;
            case "object":
              V = (z as any).scope;
              break;
            default:
              continue;
          }
          ((T as any).push as any)({
            settings: z,
            selectors: ((V as any).map as any)((F: any): any => ((F as any).split as any)(/ /))
          });
        }
        (H as any).explanation = [];
        let Pe: any = 0;
        for (; ((v as any) + (Pe as any) as any) < ($ as any);) {
          const z: any = (y as any)[m],
            V: any = ((f as any).substring as any)((z as any).startIndex, (z as any).endIndex);
          Pe += (V as any).length, (((H as any).explanation as any).push as any)({
            content: V,
            scopes: ((s as any).includeExplanation as any) === ("scopeName" as any) ? (ba as any)((z as any).scopes) : (wa as any)(T, (z as any).scopes)
          }), m += 1;
        }
      }
      ((u as any).push as any)(H);
    }
    ((h as any).push as any)(u), u = [], c = (w as any).ruleStack;
  }
  return {
    tokens: h,
    stateStack: c
  };
}
function ba(this: any, t: any): any {
  return ((t as any).map as any)((e: any): any => ({
    scopeName: e
  }));
}
function wa(this: any, t: any, e: any): any {
  const n: any = [];
  for (let r: any = 0, s: any = (e as any).length; (r as any) < (s as any); r++) {
    const o: any = (e as any)[r];
    (n as any)[r] = {
      scopeName: o,
      themeMatches: (Ca as any)(t, o, ((e as any).slice as any)(0, r))
    };
  }
  return n;
}
function Jn(this: any, t: any, e: any): any {
  return (t as any) === (e as any) || (((e as any).substring as any)(0, (t as any).length) as any) === (t as any) && ((e as any)[(t as any).length] as any) === ("." as any);
}
function ka(this: any, t: any, e: any, n: any): any {
  if (!(Jn as any)((t as any)[((t as any).length as any) - (1 as any)], e)) return !1;
  let r: any = ((t as any).length as any) - (2 as any),
    s: any = ((n as any).length as any) - (1 as any);
  for (; (r as any) >= (0 as any) && (s as any) >= (0 as any);) (Jn as any)((t as any)[r], (n as any)[s]) && (r -= 1), s -= 1;
  return (r as any) === (-1 as any);
}
function Ca(this: any, t: any, e: any, n: any): any {
  const r: any = [];
  for (const {
    selectors: s,
    settings: o
  } of t) for (const a of s) if ((ka as any)(a, e, n)) {
    ((r as any).push as any)(o);
    break;
  }
  return r;
}
function cs(this: any, t: any, e: any, n: any, r: any = ls): any {
  const s: any = ((((((Object as any).entries as any)((n as any).themes) as any).filter as any)((c: any): any => (c as any)[1]) as any).map as any)((c: any): any => ({
      color: (c as any)[0],
      theme: (c as any)[1]
    })),
    o: any = ((s as any).map as any)((c: any): any => {
      const u: any = (r as any)(t, e, {
        ...n,
        theme: (c as any).theme
      });
      return {
        tokens: u,
        state: (ze as any)(u),
        theme: (typeof (c as any).theme as any) == ("string" as any) ? (c as any).theme : ((c as any).theme as any).name
      };
    }),
    a: any = (_a as any)(...((o as any).map as any)((c: any): any => (c as any).tokens)),
    i: any = (((a as any)[0] as any).map as any)((c: any, u: any): any => ((c as any).map as any)((h: any, d: any): any => {
      const p: any = {
        content: (h as any).content,
        variants: {},
        offset: (h as any).offset
      };
      return "includeExplanation" in n && (n as any).includeExplanation && ((p as any).explanation = (h as any).explanation), ((a as any).forEach as any)((f: any, b: any): any => {
        const {
          content: g,
          explanation: y,
          offset: m,
          ...w
        }: any = ((f as any)[u] as any)[d];
        ((p as any).variants as any)[((s as any)[b] as any).color] = w;
      }), p;
    })),
    l: any = ((o as any)[0] as any).state ? new (Nt as any)(((Object as any).fromEntries as any)(((o as any).map as any)((c: any): any => [(c as any).theme, (c as any).state?.getInternalStack((c as any).theme)])), (((o as any)[0] as any).state as any).lang) : void 0;
  return l && (It as any)(i, l), i;
}
function _a(this: any, ...t: any): any {
  const e: any = ((t as any).map as any)((): any => []),
    n: any = (t as any).length;
  for (let r: any = 0; (r as any) < (((t as any)[0] as any).length as any); r++) {
    const s: any = ((t as any).map as any)((l: any): any => (l as any)[r]),
      o: any = ((e as any).map as any)((): any => []);
    ((e as any).forEach as any)((l: any, c: any): any => ((l as any).push as any)((o as any)[c]));
    const a: any = ((s as any).map as any)((): any => 0),
      i: any = ((s as any).map as any)((l: any): any => (l as any)[0]);
    for (; ((i as any).every as any)((l: any): any => l);) {
      const l: any = ((Math as any).min as any)(...((i as any).map as any)((c: any): any => ((c as any).content as any).length));
      for (let c: any = 0; (c as any) < (n as any); c++) {
        const u: any = (i as any)[c];
        (((u as any).content as any).length as any) === (l as any) ? ((((o as any)[c] as any).push as any)(u), (a as any)[c] += 1, (i as any)[c] = ((s as any)[c] as any)[(a as any)[c]]) : ((((o as any)[c] as any).push as any)({
          ...u,
          content: (((u as any).content as any).slice as any)(0, l)
        }), (i as any)[c] = {
          ...u,
          content: (((u as any).content as any).slice as any)(l),
          offset: ((u as any).offset as any) + (l as any)
        });
      }
    }
  }
  return e;
}
const Sa: any = ["area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "image", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"],
  er: any = ({} as any).hasOwnProperty;
function xa(this: any, t: any, e: any): any {
  const n: any = e || {};
  function r(this: any, s: any, ...o: any): any {
    let a: any = (r as any).invalid;
    const i: any = (r as any).handlers;
    if (s && ((er as any).call as any)(s, t)) {
      const l: any = (String as any)((s as any)[t]);
      a = ((er as any).call as any)(i, l) ? (i as any)[l] : (r as any).unknown;
    }
    if (a) return ((a as any).call as any)(this, s, ...o);
  }
  return (r as any).handlers = (n as any).handlers || {}, (r as any).invalid = (n as any).invalid, (r as any).unknown = (n as any).unknown, r;
}
const va: any = /["&'<>`]/g,
  Aa: any = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
  Ea: any = /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
  Ia: any = /[|\\{}()[\]^$+*?.]/g,
  tr: any = new (WeakMap as any)();
function Na(this: any, t: any, e: any): any {
  if (t = ((t as any).replace as any)((e as any).subset ? (Ra as any)((e as any).subset) : va, r), (e as any).subset || (e as any).escapeOnly) return t;
  return ((((t as any).replace as any)(Aa, n) as any).replace as any)(Ea, r);
  function n(this: any, s: any, o: any, a: any): any {
    return ((e as any).format as any)((((((((s as any).charCodeAt as any)(0) as any) - (55296 as any) as any) * (1024 as any) as any) + (((s as any).charCodeAt as any)(1) as any) as any) - (56320 as any) as any) + (65536 as any), ((a as any).charCodeAt as any)((o as any) + (2 as any)), e);
  }
  function r(this: any, s: any, o: any, a: any): any {
    return ((e as any).format as any)(((s as any).charCodeAt as any)(0), ((a as any).charCodeAt as any)((o as any) + (1 as any)), e);
  }
}
function Ra(this: any, t: any): any {
  let e: any = ((tr as any).get as any)(t);
  return e || (e = ($a as any)(t), ((tr as any).set as any)(t, e)), e;
}
function $a(this: any, t: any): any {
  const e: any = [];
  let n: any = -1;
  for (; (++n as any) < ((t as any).length as any);) ((e as any).push as any)((((t as any)[n] as any).replace as any)(Ia, "\\$&"));
  return new (RegExp as any)((("(?:" as any) + (((e as any).join as any)("|") as any) as any) + (")" as any), "g");
}
const La: any = /[\dA-Fa-f]/;
function Pa(this: any, t: any, e: any, n: any): any {
  const r: any = ("&#x" as any) + (((((t as any).toString as any)(16) as any).toUpperCase as any)() as any);
  return n && e && !((La as any).test as any)(((String as any).fromCharCode as any)(e)) ? r : (r as any) + (";" as any);
}
const Ta: any = /\d/;
function Ma(this: any, t: any, e: any, n: any): any {
  const r: any = ("&#" as any) + ((String as any)(t) as any);
  return n && e && !((Ta as any).test as any)(((String as any).fromCharCode as any)(e)) ? r : (r as any) + (";" as any);
}
const Oa: any = ["AElig", "AMP", "Aacute", "Acirc", "Agrave", "Aring", "Atilde", "Auml", "COPY", "Ccedil", "ETH", "Eacute", "Ecirc", "Egrave", "Euml", "GT", "Iacute", "Icirc", "Igrave", "Iuml", "LT", "Ntilde", "Oacute", "Ocirc", "Ograve", "Oslash", "Otilde", "Ouml", "QUOT", "REG", "THORN", "Uacute", "Ucirc", "Ugrave", "Uuml", "Yacute", "aacute", "acirc", "acute", "aelig", "agrave", "amp", "aring", "atilde", "auml", "brvbar", "ccedil", "cedil", "cent", "copy", "curren", "deg", "divide", "eacute", "ecirc", "egrave", "eth", "euml", "frac12", "frac14", "frac34", "gt", "iacute", "icirc", "iexcl", "igrave", "iquest", "iuml", "laquo", "lt", "macr", "micro", "middot", "nbsp", "not", "ntilde", "oacute", "ocirc", "ograve", "ordf", "ordm", "oslash", "otilde", "ouml", "para", "plusmn", "pound", "quot", "raquo", "reg", "sect", "shy", "sup1", "sup2", "sup3", "szlig", "thorn", "times", "uacute", "ucirc", "ugrave", "uml", "uuml", "yacute", "yen", "yuml"],
  jt: any = {
    nbsp: " ",
    iexcl: "¡",
    cent: "¢",
    pound: "£",
    curren: "¤",
    yen: "¥",
    brvbar: "¦",
    sect: "§",
    uml: "¨",
    copy: "©",
    ordf: "ª",
    laquo: "«",
    not: "¬",
    shy: "­",
    reg: "®",
    macr: "¯",
    deg: "°",
    plusmn: "±",
    sup2: "²",
    sup3: "³",
    acute: "´",
    micro: "µ",
    para: "¶",
    middot: "·",
    cedil: "¸",
    sup1: "¹",
    ordm: "º",
    raquo: "»",
    frac14: "¼",
    frac12: "½",
    frac34: "¾",
    iquest: "¿",
    Agrave: "À",
    Aacute: "Á",
    Acirc: "Â",
    Atilde: "Ã",
    Auml: "Ä",
    Aring: "Å",
    AElig: "Æ",
    Ccedil: "Ç",
    Egrave: "È",
    Eacute: "É",
    Ecirc: "Ê",
    Euml: "Ë",
    Igrave: "Ì",
    Iacute: "Í",
    Icirc: "Î",
    Iuml: "Ï",
    ETH: "Ð",
    Ntilde: "Ñ",
    Ograve: "Ò",
    Oacute: "Ó",
    Ocirc: "Ô",
    Otilde: "Õ",
    Ouml: "Ö",
    times: "×",
    Oslash: "Ø",
    Ugrave: "Ù",
    Uacute: "Ú",
    Ucirc: "Û",
    Uuml: "Ü",
    Yacute: "Ý",
    THORN: "Þ",
    szlig: "ß",
    agrave: "à",
    aacute: "á",
    acirc: "â",
    atilde: "ã",
    auml: "ä",
    aring: "å",
    aelig: "æ",
    ccedil: "ç",
    egrave: "è",
    eacute: "é",
    ecirc: "ê",
    euml: "ë",
    igrave: "ì",
    iacute: "í",
    icirc: "î",
    iuml: "ï",
    eth: "ð",
    ntilde: "ñ",
    ograve: "ò",
    oacute: "ó",
    ocirc: "ô",
    otilde: "õ",
    ouml: "ö",
    divide: "÷",
    oslash: "ø",
    ugrave: "ù",
    uacute: "ú",
    ucirc: "û",
    uuml: "ü",
    yacute: "ý",
    thorn: "þ",
    yuml: "ÿ",
    fnof: "\u0192",
    Alpha: "\u0391",
    Beta: "\u0392",
    Gamma: "\u0393",
    Delta: "\u0394",
    Epsilon: "\u0395",
    Zeta: "\u0396",
    Eta: "\u0397",
    Theta: "\u0398",
    Iota: "\u0399",
    Kappa: "\u039A",
    Lambda: "\u039B",
    Mu: "\u039C",
    Nu: "\u039D",
    Xi: "\u039E",
    Omicron: "\u039F",
    Pi: "\u03A0",
    Rho: "\u03A1",
    Sigma: "\u03A3",
    Tau: "\u03A4",
    Upsilon: "\u03A5",
    Phi: "\u03A6",
    Chi: "\u03A7",
    Psi: "\u03A8",
    Omega: "\u03A9",
    alpha: "\u03B1",
    beta: "\u03B2",
    gamma: "\u03B3",
    delta: "\u03B4",
    epsilon: "\u03B5",
    zeta: "\u03B6",
    eta: "\u03B7",
    theta: "\u03B8",
    iota: "\u03B9",
    kappa: "\u03BA",
    lambda: "\u03BB",
    mu: "\u03BC",
    nu: "\u03BD",
    xi: "\u03BE",
    omicron: "\u03BF",
    pi: "\u03C0",
    rho: "\u03C1",
    sigmaf: "\u03C2",
    sigma: "\u03C3",
    tau: "\u03C4",
    upsilon: "\u03C5",
    phi: "\u03C6",
    chi: "\u03C7",
    psi: "\u03C8",
    omega: "\u03C9",
    thetasym: "\u03D1",
    upsih: "\u03D2",
    piv: "\u03D6",
    bull: "\u2022",
    hellip: "\u2026",
    prime: "\u2032",
    Prime: "\u2033",
    oline: "\u203E",
    frasl: "\u2044",
    weierp: "\u2118",
    image: "\u2111",
    real: "\u211C",
    trade: "\u2122",
    alefsym: "\u2135",
    larr: "\u2190",
    uarr: "\u2191",
    rarr: "\u2192",
    darr: "\u2193",
    harr: "\u2194",
    crarr: "\u21B5",
    lArr: "\u21D0",
    uArr: "\u21D1",
    rArr: "\u21D2",
    dArr: "\u21D3",
    hArr: "\u21D4",
    forall: "\u2200",
    part: "\u2202",
    exist: "\u2203",
    empty: "\u2205",
    nabla: "\u2207",
    isin: "\u2208",
    notin: "\u2209",
    ni: "\u220B",
    prod: "\u220F",
    sum: "\u2211",
    minus: "\u2212",
    lowast: "\u2217",
    radic: "\u221A",
    prop: "\u221D",
    infin: "\u221E",
    ang: "\u2220",
    and: "\u2227",
    or: "\u2228",
    cap: "\u2229",
    cup: "\u222A",
    int: "\u222B",
    there4: "\u2234",
    sim: "\u223C",
    cong: "\u2245",
    asymp: "\u2248",
    ne: "\u2260",
    equiv: "\u2261",
    le: "\u2264",
    ge: "\u2265",
    sub: "\u2282",
    sup: "\u2283",
    nsub: "\u2284",
    sube: "\u2286",
    supe: "\u2287",
    oplus: "\u2295",
    otimes: "\u2297",
    perp: "\u22A5",
    sdot: "\u22C5",
    lceil: "\u2308",
    rceil: "\u2309",
    lfloor: "\u230A",
    rfloor: "\u230B",
    lang: "\u2329",
    rang: "\u232A",
    loz: "\u25CA",
    spades: "\u2660",
    clubs: "\u2663",
    hearts: "\u2665",
    diams: "\u2666",
    quot: '"',
    amp: "&",
    lt: "<",
    gt: ">",
    OElig: "\u0152",
    oelig: "\u0153",
    Scaron: "\u0160",
    scaron: "\u0161",
    Yuml: "\u0178",
    circ: "\u02C6",
    tilde: "\u02DC",
    ensp: "\u2002",
    emsp: "\u2003",
    thinsp: "\u2009",
    zwnj: "\u200C",
    zwj: "\u200D",
    lrm: "\u200E",
    rlm: "\u200F",
    ndash: "\u2013",
    mdash: "\u2014",
    lsquo: "\u2018",
    rsquo: "\u2019",
    sbquo: "\u201A",
    ldquo: "\u201C",
    rdquo: "\u201D",
    bdquo: "\u201E",
    dagger: "\u2020",
    Dagger: "\u2021",
    permil: "\u2030",
    lsaquo: "\u2039",
    rsaquo: "\u203A",
    euro: "\u20AC"
  },
  Ga: any = ["cent", "copy", "divide", "gt", "lt", "not", "para", "times"],
  us: any = ({} as any).hasOwnProperty,
  cn: any = {};
let et: any;
for (et in jt) ((us as any).call as any)(jt, et) && ((cn as any)[(jt as any)[et]] = et);
const Ba: any = /[^\dA-Za-z]/;
function Fa(this: any, t: any, e: any, n: any, r: any): any {
  const s: any = ((String as any).fromCharCode as any)(t);
  if (((us as any).call as any)(cn, s)) {
    const o: any = (cn as any)[s],
      a: any = ("&" as any) + (o as any);
    return n && ((Oa as any).includes as any)(o) && !((Ga as any).includes as any)(o) && (!r || e && (e as any) !== (61 as any) && ((Ba as any).test as any)(((String as any).fromCharCode as any)(e))) ? a : (a as any) + (";" as any);
  }
  return "";
}
function Da(this: any, t: any, e: any, n: any): any {
  let r: any = (Pa as any)(t, e, (n as any).omitOptionalSemicolons),
    s: any;
  if (((n as any).useNamedReferences || (n as any).useShortestReferences) && (s = (Fa as any)(t, e, (n as any).omitOptionalSemicolons, (n as any).attribute)), ((n as any).useShortestReferences || !s) && (n as any).useShortestReferences) {
    const o: any = (Ma as any)(t, e, (n as any).omitOptionalSemicolons);
    ((o as any).length as any) < ((r as any).length as any) && (r = o);
  }
  return s && (!(n as any).useShortestReferences || ((s as any).length as any) < ((r as any).length as any)) ? s : r;
}
function Ne(this: any, t: any, e: any): any {
  return (Na as any)(t, ((Object as any).assign as any)({
    format: Da
  }, e));
}
const ja: any = /^>|^->|<!--|-->|--!>|<!-$/g,
  Ua: any = [">"],
  Wa: any = ["<", ">"];
function za(this: any, t: any, e: any, n: any, r: any): any {
  return ((r as any).settings as any).bogusComments ? (("<?" as any) + ((Ne as any)((t as any).value, ((Object as any).assign as any)({}, ((r as any).settings as any).characterReferences, {
    subset: Ua
  })) as any) as any) + (">" as any) : (("<!--" as any) + ((((t as any).value as any).replace as any)(ja, s) as any) as any) + ("-->" as any);
  function s(this: any, o: any): any {
    return (Ne as any)(o, ((Object as any).assign as any)({}, ((r as any).settings as any).characterReferences, {
      subset: Wa
    }));
  }
}
function qa(this: any, t: any, e: any, n: any, r: any): any {
  return ((("<!" as any) + ((((r as any).settings as any).upperDoctype ? "DOCTYPE" : "doctype") as any) as any) + ((((r as any).settings as any).tightDoctype ? "" : " ") as any) as any) + ("html>" as any);
}
const R: any = (ds as any)(1),
  hs: any = (ds as any)(-1),
  Ha: any = [];
function ds(this: any, t: any): any {
  return e;
  function e(this: any, n: any, r: any, s: any): any {
    const o: any = n ? (n as any).children : Ha;
    let a: any = ((r || 0) as any) + (t as any),
      i: any = (o as any)[a];
    if (!s) for (; i && (_n as any)(i);) a += t, i = (o as any)[a];
    return i;
  }
}
const Va: any = ({} as any).hasOwnProperty;
function ps(this: any, t: any): any {
  return e;
  function e(this: any, n: any, r: any, s: any): any {
    return ((Va as any).call as any)(t, (n as any).tagName) && ((t as any)[(n as any).tagName] as any)(n, r, s);
  }
}
const An: any = (ps as any)({
  body: Ka,
  caption: Ut,
  colgroup: Ut,
  dd: Ja,
  dt: Ya,
  head: Ut,
  html: Xa,
  li: Za,
  optgroup: ei,
  option: ti,
  p: Qa,
  rp: nr,
  rt: nr,
  tbody: ri,
  td: rr,
  tfoot: si,
  th: rr,
  thead: ni,
  tr: oi
});
function Ut(this: any, t: any, e: any, n: any): any {
  const r: any = (R as any)(n, e, !0);
  return !r || ((r as any).type as any) !== ("comment" as any) && !(((r as any).type as any) === ("text" as any) && (_n as any)((((r as any).value as any).charAt as any)(0)));
}
function Xa(this: any, t: any, e: any, n: any): any {
  const r: any = (R as any)(n, e);
  return !r || ((r as any).type as any) !== ("comment" as any);
}
function Ka(this: any, t: any, e: any, n: any): any {
  const r: any = (R as any)(n, e);
  return !r || ((r as any).type as any) !== ("comment" as any);
}
function Qa(this: any, t: any, e: any, n: any): any {
  const r: any = (R as any)(n, e);
  return r ? ((r as any).type as any) === ("element" as any) && (((r as any).tagName as any) === ("address" as any) || ((r as any).tagName as any) === ("article" as any) || ((r as any).tagName as any) === ("aside" as any) || ((r as any).tagName as any) === ("blockquote" as any) || ((r as any).tagName as any) === ("details" as any) || ((r as any).tagName as any) === ("div" as any) || ((r as any).tagName as any) === ("dl" as any) || ((r as any).tagName as any) === ("fieldset" as any) || ((r as any).tagName as any) === ("figcaption" as any) || ((r as any).tagName as any) === ("figure" as any) || ((r as any).tagName as any) === ("footer" as any) || ((r as any).tagName as any) === ("form" as any) || ((r as any).tagName as any) === ("h1" as any) || ((r as any).tagName as any) === ("h2" as any) || ((r as any).tagName as any) === ("h3" as any) || ((r as any).tagName as any) === ("h4" as any) || ((r as any).tagName as any) === ("h5" as any) || ((r as any).tagName as any) === ("h6" as any) || ((r as any).tagName as any) === ("header" as any) || ((r as any).tagName as any) === ("hgroup" as any) || ((r as any).tagName as any) === ("hr" as any) || ((r as any).tagName as any) === ("main" as any) || ((r as any).tagName as any) === ("menu" as any) || ((r as any).tagName as any) === ("nav" as any) || ((r as any).tagName as any) === ("ol" as any) || ((r as any).tagName as any) === ("p" as any) || ((r as any).tagName as any) === ("pre" as any) || ((r as any).tagName as any) === ("section" as any) || ((r as any).tagName as any) === ("table" as any) || ((r as any).tagName as any) === ("ul" as any)) : !n || !(((n as any).type as any) === ("element" as any) && (((n as any).tagName as any) === ("a" as any) || ((n as any).tagName as any) === ("audio" as any) || ((n as any).tagName as any) === ("del" as any) || ((n as any).tagName as any) === ("ins" as any) || ((n as any).tagName as any) === ("map" as any) || ((n as any).tagName as any) === ("noscript" as any) || ((n as any).tagName as any) === ("video" as any)));
}
function Za(this: any, t: any, e: any, n: any): any {
  const r: any = (R as any)(n, e);
  return !r || ((r as any).type as any) === ("element" as any) && ((r as any).tagName as any) === ("li" as any);
}
function Ya(this: any, t: any, e: any, n: any): any {
  const r: any = (R as any)(n, e);
  return !!(r && ((r as any).type as any) === ("element" as any) && (((r as any).tagName as any) === ("dt" as any) || ((r as any).tagName as any) === ("dd" as any)));
}
function Ja(this: any, t: any, e: any, n: any): any {
  const r: any = (R as any)(n, e);
  return !r || ((r as any).type as any) === ("element" as any) && (((r as any).tagName as any) === ("dt" as any) || ((r as any).tagName as any) === ("dd" as any));
}
function nr(this: any, t: any, e: any, n: any): any {
  const r: any = (R as any)(n, e);
  return !r || ((r as any).type as any) === ("element" as any) && (((r as any).tagName as any) === ("rp" as any) || ((r as any).tagName as any) === ("rt" as any));
}
function ei(this: any, t: any, e: any, n: any): any {
  const r: any = (R as any)(n, e);
  return !r || ((r as any).type as any) === ("element" as any) && ((r as any).tagName as any) === ("optgroup" as any);
}
function ti(this: any, t: any, e: any, n: any): any {
  const r: any = (R as any)(n, e);
  return !r || ((r as any).type as any) === ("element" as any) && (((r as any).tagName as any) === ("option" as any) || ((r as any).tagName as any) === ("optgroup" as any));
}
function ni(this: any, t: any, e: any, n: any): any {
  const r: any = (R as any)(n, e);
  return !!(r && ((r as any).type as any) === ("element" as any) && (((r as any).tagName as any) === ("tbody" as any) || ((r as any).tagName as any) === ("tfoot" as any)));
}
function ri(this: any, t: any, e: any, n: any): any {
  const r: any = (R as any)(n, e);
  return !r || ((r as any).type as any) === ("element" as any) && (((r as any).tagName as any) === ("tbody" as any) || ((r as any).tagName as any) === ("tfoot" as any));
}
function si(this: any, t: any, e: any, n: any): any {
  return !(R as any)(n, e);
}
function oi(this: any, t: any, e: any, n: any): any {
  const r: any = (R as any)(n, e);
  return !r || ((r as any).type as any) === ("element" as any) && ((r as any).tagName as any) === ("tr" as any);
}
function rr(this: any, t: any, e: any, n: any): any {
  const r: any = (R as any)(n, e);
  return !r || ((r as any).type as any) === ("element" as any) && (((r as any).tagName as any) === ("td" as any) || ((r as any).tagName as any) === ("th" as any));
}
const ai: any = (ps as any)({
  body: ci,
  colgroup: ui,
  head: li,
  html: ii,
  tbody: hi
});
function ii(this: any, t: any): any {
  const e: any = (R as any)(t, -1);
  return !e || ((e as any).type as any) !== ("comment" as any);
}
function li(this: any, t: any): any {
  const e: any = new (Set as any)();
  for (const r of (t as any).children) if (((r as any).type as any) === ("element" as any) && (((r as any).tagName as any) === ("base" as any) || ((r as any).tagName as any) === ("title" as any))) {
    if (((e as any).has as any)((r as any).tagName)) return !1;
    ((e as any).add as any)((r as any).tagName);
  }
  const n: any = ((t as any).children as any)[0];
  return !n || ((n as any).type as any) === ("element" as any);
}
function ci(this: any, t: any): any {
  const e: any = (R as any)(t, -1, !0);
  return !e || ((e as any).type as any) !== ("comment" as any) && !(((e as any).type as any) === ("text" as any) && (_n as any)((((e as any).value as any).charAt as any)(0))) && !(((e as any).type as any) === ("element" as any) && (((e as any).tagName as any) === ("meta" as any) || ((e as any).tagName as any) === ("link" as any) || ((e as any).tagName as any) === ("script" as any) || ((e as any).tagName as any) === ("style" as any) || ((e as any).tagName as any) === ("template" as any)));
}
function ui(this: any, t: any, e: any, n: any): any {
  const r: any = (hs as any)(n, e),
    s: any = (R as any)(t, -1, !0);
  return n && r && ((r as any).type as any) === ("element" as any) && ((r as any).tagName as any) === ("colgroup" as any) && (An as any)(r, (((n as any).children as any).indexOf as any)(r), n) ? !1 : !!(s && ((s as any).type as any) === ("element" as any) && ((s as any).tagName as any) === ("col" as any));
}
function hi(this: any, t: any, e: any, n: any): any {
  const r: any = (hs as any)(n, e),
    s: any = (R as any)(t, -1);
  return n && r && ((r as any).type as any) === ("element" as any) && (((r as any).tagName as any) === ("thead" as any) || ((r as any).tagName as any) === ("tbody" as any)) && (An as any)(r, (((n as any).children as any).indexOf as any)(r), n) ? !1 : !!(s && ((s as any).type as any) === ("element" as any) && ((s as any).tagName as any) === ("tr" as any));
}
const tt: any = {
  name: [[((`	
\f\r &/=>` as any).split as any)(""), ((`	
\f\r "&'/=>\`` as any).split as any)("")], [((`\0	
\f\r "&'/<=>` as any).split as any)(""), ((`\0	
\f\r "&'/<=>\`` as any).split as any)("")]],
  unquoted: [[((`	
\f\r &>` as any).split as any)(""), ((`\0	
\f\r "&'<=>\`` as any).split as any)("")], [((`\0	
\f\r "&'<=>\`` as any).split as any)(""), ((`\0	
\f\r "&'<=>\`` as any).split as any)("")]],
  single: [[(("&'" as any).split as any)(""), (("\"&'`" as any).split as any)("")], [(("\0&'" as any).split as any)(""), (("\0\"&'`" as any).split as any)("")]],
  double: [[(('"&' as any).split as any)(""), (("\"&'`" as any).split as any)("")], [(('\0"&' as any).split as any)(""), (("\0\"&'`" as any).split as any)("")]]
};
function di(this: any, t: any, e: any, n: any, r: any): any {
  const s: any = (r as any).schema,
    o: any = ((s as any).space as any) === ("svg" as any) ? !1 : ((r as any).settings as any).omitOptionalTags;
  let a: any = ((s as any).space as any) === ("svg" as any) ? ((r as any).settings as any).closeEmptyElements : ((((r as any).settings as any).voids as any).includes as any)((((t as any).tagName as any).toLowerCase as any)());
  const i: any = [];
  let l: any;
  ((s as any).space as any) === ("html" as any) && ((t as any).tagName as any) === ("svg" as any) && ((r as any).schema = Ur);
  const c: any = (pi as any)(r, (t as any).properties),
    u: any = ((r as any).all as any)(((s as any).space as any) === ("html" as any) && ((t as any).tagName as any) === ("template" as any) ? (t as any).content : t);
  return (r as any).schema = s, u && (a = !1), (c || !o || !(ai as any)(t, e, n)) && (((i as any).push as any)("<", (t as any).tagName, c ? (" " as any) + (c as any) : ""), a && (((s as any).space as any) === ("svg" as any) || ((r as any).settings as any).closeSelfClosing) && (l = ((c as any).charAt as any)(((c as any).length as any) - (1 as any)), (!((r as any).settings as any).tightSelfClosing || (l as any) === ("/" as any) || l && (l as any) !== ('"' as any) && (l as any) !== ("'" as any)) && ((i as any).push as any)(" "), ((i as any).push as any)("/")), ((i as any).push as any)(">")), ((i as any).push as any)(u), !a && (!o || !(An as any)(t, e, n)) && ((i as any).push as any)((("</" as any) + ((t as any).tagName as any) as any) + (">" as any)), ((i as any).join as any)("");
}
function pi(this: any, t: any, e: any): any {
  const n: any = [];
  let r: any = -1,
    s: any;
  if (e) {
    for (s in e) if (((e as any)[s] as any) !== (null as any) && ((e as any)[s] as any) !== (void 0 as any)) {
      const o: any = (fi as any)(t, s, (e as any)[s]);
      o && ((n as any).push as any)(o);
    }
  }
  for (; (++r as any) < ((n as any).length as any);) {
    const o: any = ((t as any).settings as any).tightAttributes ? (((n as any)[r] as any).charAt as any)((((n as any)[r] as any).length as any) - (1 as any)) : void 0;
    (r as any) !== (((n as any).length as any) - (1 as any) as any) && (o as any) !== ('"' as any) && (o as any) !== ("'" as any) && ((n as any)[r] += " ");
  }
  return ((n as any).join as any)("");
}
function fi(this: any, t: any, e: any, n: any): any {
  const r: any = (mo as any)((t as any).schema, e),
    s: any = ((t as any).settings as any).allowParseErrors && (((t as any).schema as any).space as any) === ("html" as any) ? 0 : 1,
    o: any = ((t as any).settings as any).allowDangerousCharacters ? 0 : 1;
  let a: any = (t as any).quote,
    i: any;
  if ((r as any).overloadedBoolean && ((n as any) === ((r as any).attribute as any) || (n as any) === ("" as any)) ? n = !0 : ((r as any).boolean || (r as any).overloadedBoolean) && ((typeof n as any) != ("string" as any) || (n as any) === ((r as any).attribute as any) || (n as any) === ("" as any)) && (n = !!n), (n as any) == (null as any) || (n as any) === (!1 as any) || (typeof n as any) == ("number" as any) && ((Number as any).isNaN as any)(n)) return "";
  const l: any = (Ne as any)((r as any).attribute, ((Object as any).assign as any)({}, ((t as any).settings as any).characterReferences, {
    subset: (((tt as any).name as any)[s] as any)[o]
  }));
  return (n as any) === (!0 as any) || (n = ((Array as any).isArray as any)(n) ? (((r as any).commaSeparated ? yo : bo) as any)(n, {
    padLeft: !((t as any).settings as any).tightCommaSeparatedLists
  }) : (String as any)(n), ((t as any).settings as any).collapseEmptyAttributes && !n) ? l : (((t as any).settings as any).preferUnquoted && (i = (Ne as any)(n, ((Object as any).assign as any)({}, ((t as any).settings as any).characterReferences, {
    attribute: !0,
    subset: (((tt as any).unquoted as any)[s] as any)[o]
  }))), (i as any) !== (n as any) && (((t as any).settings as any).quoteSmart && ((jn as any)(n, a) as any) > ((jn as any)(n, (t as any).alternative) as any) && (a = (t as any).alternative), i = ((a as any) + ((Ne as any)(n, ((Object as any).assign as any)({}, ((t as any).settings as any).characterReferences, {
    subset: ((((a as any) === ("'" as any) ? (tt as any).single : (tt as any).double) as any)[s] as any)[o],
    attribute: !0
  })) as any) as any) + (a as any)), (l as any) + ((i && ("=" as any) + (i as any)) as any));
}
const gi: any = ["<", "&"];
function fs(this: any, t: any, e: any, n: any, r: any): any {
  return n && ((n as any).type as any) === ("element" as any) && (((n as any).tagName as any) === ("script" as any) || ((n as any).tagName as any) === ("style" as any)) ? (t as any).value : (Ne as any)((t as any).value, ((Object as any).assign as any)({}, ((r as any).settings as any).characterReferences, {
    subset: gi
  }));
}
function mi(this: any, t: any, e: any, n: any, r: any): any {
  return ((r as any).settings as any).allowDangerousHtml ? (t as any).value : (fs as any)(t, e, n, r);
}
function yi(this: any, t: any, e: any, n: any, r: any): any {
  return ((r as any).all as any)(t);
}
const bi: any = (xa as any)("type", {
  invalid: wi,
  unknown: ki,
  handlers: {
    comment: za,
    doctype: qa,
    element: di,
    raw: mi,
    root: yi,
    text: fs
  }
});
function wi(this: any, t: any): any {
  throw new (Error as any)((("Expected node, not `" as any) + (t as any) as any) + ("`" as any));
}
function ki(this: any, t: any): any {
  const e: any = t;
  throw new (Error as any)((("Cannot compile unknown node `" as any) + ((e as any).type as any) as any) + ("`" as any));
}
const Ci: any = {},
  _i: any = {},
  Si: any = [];
function xi(this: any, t: any, e: any): any {
  const n: any = e || Ci,
    r: any = (n as any).quote || '"',
    s: any = (r as any) === ('"' as any) ? "'" : '"';
  if ((r as any) !== ('"' as any) && (r as any) !== ("'" as any)) throw new (Error as any)((("Invalid quote `" as any) + (r as any) as any) + ("`, expected `'` or `\"`" as any));
  return (({
    one: vi,
    all: Ai,
    settings: {
      omitOptionalTags: (n as any).omitOptionalTags || !1,
      allowParseErrors: (n as any).allowParseErrors || !1,
      allowDangerousCharacters: (n as any).allowDangerousCharacters || !1,
      quoteSmart: (n as any).quoteSmart || !1,
      preferUnquoted: (n as any).preferUnquoted || !1,
      tightAttributes: (n as any).tightAttributes || !1,
      upperDoctype: (n as any).upperDoctype || !1,
      tightDoctype: (n as any).tightDoctype || !1,
      bogusComments: (n as any).bogusComments || !1,
      tightCommaSeparatedLists: (n as any).tightCommaSeparatedLists || !1,
      tightSelfClosing: (n as any).tightSelfClosing || !1,
      collapseEmptyAttributes: (n as any).collapseEmptyAttributes || !1,
      allowDangerousHtml: (n as any).allowDangerousHtml || !1,
      voids: (n as any).voids || Sa,
      characterReferences: (n as any).characterReferences || _i,
      closeSelfClosing: (n as any).closeSelfClosing || !1,
      closeEmptyElements: (n as any).closeEmptyElements || !1
    },
    schema: ((n as any).space as any) === ("svg" as any) ? Ur : wo,
    quote: r,
    alternative: s
  } as any).one as any)(((Array as any).isArray as any)(t) ? {
    type: "root",
    children: t
  } : t, void 0, void 0);
}
function vi(this: any, t: any, e: any, n: any): any {
  return (bi as any)(t, e, n, this);
}
function Ai(this: any, t: any): any {
  const e: any = [],
    n: any = t && (t as any).children || Si;
  let r: any = -1;
  for (; (++r as any) < ((n as any).length as any);) (e as any)[r] = ((this as any).one as any)((n as any)[r], r, t);
  return ((e as any).join as any)("");
}
function gs(this: any, t: any, e: any): any {
  if (!e) return t;
  (t as any).properties ||= {}, ((t as any).properties as any).class ||= [], (typeof ((t as any).properties as any).class as any) == ("string" as any) && (((t as any).properties as any).class = ((((t as any).properties as any).class as any).split as any)(/\s+/g)), ((Array as any).isArray as any)(((t as any).properties as any).class) || (((t as any).properties as any).class = []);
  const n: any = ((Array as any).isArray as any)(e) ? e : ((e as any).split as any)(/\s+/g);
  for (const r of n) r && !((((t as any).properties as any).class as any).includes as any)(r) && ((((t as any).properties as any).class as any).push as any)(r);
  return t;
}
function Ei(this: any, t: any): any {
  const e: any = (((Et as any)(t, !0) as any).map as any)(([s]: any): any => s);
  function n(this: any, s: any): any {
    if ((s as any) === ((t as any).length as any)) return {
      line: ((e as any).length as any) - (1 as any),
      character: ((e as any)[((e as any).length as any) - (1 as any)] as any).length
    };
    let o: any = s,
      a: any = 0;
    for (const i of e) {
      if ((o as any) < ((i as any).length as any)) break;
      o -= (i as any).length, a++;
    }
    return {
      line: a,
      character: o
    };
  }
  function r(this: any, s: any, o: any): any {
    let a: any = 0;
    for (let i: any = 0; (i as any) < (s as any); i++) a += ((e as any)[i] as any).length;
    return a += o, a;
  }
  return {
    lines: e,
    indexToPos: n,
    posToIndex: r
  };
}
const En: string = "light-dark()",
  Ii: any = ["color", "background-color"];
function Ni(this: any, t: any, e: any): any {
  let n: any = 0;
  const r: any = [];
  for (const s of e) (s as any) > (n as any) && ((r as any).push as any)({
    ...t,
    content: (((t as any).content as any).slice as any)(n, s),
    offset: ((t as any).offset as any) + (n as any)
  }), n = s;
  return (n as any) < (((t as any).content as any).length as any) && ((r as any).push as any)({
    ...t,
    content: (((t as any).content as any).slice as any)(n),
    offset: ((t as any).offset as any) + (n as any)
  }), r;
}
function Ri(this: any, t: any, e: any): any {
  const n: any = ((((Array as any).from as any)(e instanceof Set ? e : new (Set as any)(e)) as any).sort as any)((r: any, s: any): any => (r as any) - (s as any));
  return (n as any).length ? ((t as any).map as any)((r: any): any => ((r as any).flatMap as any)((s: any): any => {
    const o: any = ((((((n as any).filter as any)((a: any): any => ((s as any).offset as any) < (a as any) && (a as any) < (((s as any).offset as any) + (((s as any).content as any).length as any) as any)) as any).map as any)((a: any): any => (a as any) - ((s as any).offset as any)) as any).sort as any)((a: any, i: any): any => (a as any) - (i as any));
    return (o as any).length ? (Ni as any)(s, o) : s;
  })) : t;
}
function $i(this: any, t: any, e: any, n: any, r: any, s: any = "css-vars"): any {
  const o: any = {
      content: (t as any).content,
      explanation: (t as any).explanation,
      offset: (t as any).offset
    },
    a: any = ((e as any).map as any)((u: any): any => (bt as any)(((t as any).variants as any)[u])),
    i: any = new (Set as any)(((a as any).flatMap as any)((u: any): any => ((Object as any).keys as any)(u))),
    l: any = {},
    c: any = (u: any, h: any): any => {
      const d: any = (h as any) === ("color" as any) ? "" : (h as any) === ("background-color" as any) ? "-bg" : `-${h}`;
      return ((n as any) + ((e as any)[u] as any) as any) + (((h as any) === ("color" as any) ? "" : d) as any);
    };
  return ((a as any).forEach as any)((u: any, h: any): any => {
    for (const d of i) {
      const p: any = (u as any)[d] || "inherit";
      if ((h as any) === (0 as any) && r && ((Ii as any).includes as any)(d)) {
        if ((r as any) === (En as any) && ((a as any).length as any) > (1 as any)) {
          const f: any = ((e as any).findIndex as any)((g: any): any => (g as any) === ("light" as any)),
            b: any = ((e as any).findIndex as any)((g: any): any => (g as any) === ("dark" as any));
          if ((f as any) === (-1 as any) || (b as any) === (-1 as any)) throw new (A as any)('When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes');
          (l as any)[d] = `light-dark(${((a as any)[f] as any)[d] || "inherit"}, ${((a as any)[b] as any)[d] || "inherit"})`, (s as any) === ("css-vars" as any) && ((l as any)[(c as any)(h, d)] = p);
        } else (l as any)[d] = p;
      } else (s as any) === ("css-vars" as any) && ((l as any)[(c as any)(h, d)] = p);
    }
  }), (o as any).htmlStyle = l, o;
}
function bt(this: any, t: any): any {
  const e: any = {};
  if ((t as any).color && ((e as any).color = (t as any).color), (t as any).bgColor && ((e as any)["background-color"] = (t as any).bgColor), (t as any).fontStyle) {
    ((t as any).fontStyle as any) & ((O as any).Italic as any) && ((e as any)["font-style"] = "italic"), ((t as any).fontStyle as any) & ((O as any).Bold as any) && ((e as any)["font-weight"] = "bold");
    const n: any = [];
    ((t as any).fontStyle as any) & ((O as any).Underline as any) && ((n as any).push as any)("underline"), ((t as any).fontStyle as any) & ((O as any).Strikethrough as any) && ((n as any).push as any)("line-through"), (n as any).length && ((e as any)["text-decoration"] = ((n as any).join as any)(" "));
  }
  return e;
}
function un(this: any, t: any): any {
  return (typeof t as any) == ("string" as any) ? t : ((((((Object as any).entries as any)(t) as any).map as any)(([e, n]: any): any => `${e}:${n}`) as any).join as any)(";");
}
function Li(this: any): any {
  const t: any = new (WeakMap as any)();
  function e(this: any, n: any): any {
    if (!((t as any).has as any)((n as any).meta)) {
      let s: any = function (this: any, a: any): any {
        if ((typeof a as any) == ("number" as any)) {
          if ((a as any) < (0 as any) || (a as any) > (((n as any).source as any).length as any)) throw new (A as any)(`Invalid decoration offset: ${a}. Code length: ${((n as any).source as any).length}`);
          return {
            ...((r as any).indexToPos as any)(a),
            offset: a
          };
        } else {
          const i: any = ((r as any).lines as any)[(a as any).line];
          if ((i as any) === (void 0 as any)) throw new (A as any)(`Invalid decoration position ${((JSON as any).stringify as any)(a)}. Lines length: ${((r as any).lines as any).length}`);
          let l: any = (a as any).character;
          if ((l as any) < (0 as any) && (l = ((i as any).length as any) + (l as any)), (l as any) < (0 as any) || (l as any) > ((i as any).length as any)) throw new (A as any)(`Invalid decoration position ${((JSON as any).stringify as any)(a)}. Line ${(a as any).line} length: ${(i as any).length}`);
          return {
            ...a,
            character: l,
            offset: ((r as any).posToIndex as any)((a as any).line, l)
          };
        }
      };
      const r: any = (Ei as any)((n as any).source),
        o: any = (((((n as any).options as any).decorations || []) as any).map as any)((a: any): any => ({
          ...a,
          start: (s as any)((a as any).start),
          end: (s as any)((a as any).end)
        }));
      (Pi as any)(o), ((t as any).set as any)((n as any).meta, {
        decorations: o,
        converter: r,
        source: (n as any).source
      });
    }
    return ((t as any).get as any)((n as any).meta);
  }
  return {
    name: "shiki:decorations",
    tokens(n: any): any {
      if (((this as any).options as any).decorations?.length) return (Ri as any)(n, ((((e as any)(this) as any).decorations as any).flatMap as any)((r: any): any => [((r as any).start as any).offset, ((r as any).end as any).offset]));
    },
    code(n: any): any {
      if (!((this as any).options as any).decorations?.length) return;
      const r: any = (e as any)(this),
        s: any = ((((Array as any).from as any)((n as any).children) as any).filter as any)((u: any): any => ((u as any).type as any) === ("element" as any) && ((u as any).tagName as any) === ("span" as any));
      if (((s as any).length as any) !== ((((r as any).converter as any).lines as any).length as any)) throw new (A as any)(`Number of lines in code element (${(s as any).length}) does not match the number of lines in the source (${(((r as any).converter as any).lines as any).length}). Failed to apply decorations.`);
      function o(this: any, u: any, h: any, d: any, p: any): any {
        const f: any = (s as any)[u];
        let b: any = "",
          g: any = -1,
          y: any = -1;
        if ((h as any) === (0 as any) && (g = 0), (d as any) === (0 as any) && (y = 0), (d as any) === ((Number as any).POSITIVE_INFINITY as any) && (y = ((f as any).children as any).length), (g as any) === (-1 as any) || (y as any) === (-1 as any)) for (let w: any = 0; (w as any) < (((f as any).children as any).length as any); w++) b += (ms as any)(((f as any).children as any)[w]), (g as any) === (-1 as any) && ((b as any).length as any) === (h as any) && (g = (w as any) + (1 as any)), (y as any) === (-1 as any) && ((b as any).length as any) === (d as any) && (y = (w as any) + (1 as any));
        if ((g as any) === (-1 as any)) throw new (A as any)(`Failed to find start index for decoration ${((JSON as any).stringify as any)((p as any).start)}`);
        if ((y as any) === (-1 as any)) throw new (A as any)(`Failed to find end index for decoration ${((JSON as any).stringify as any)((p as any).end)}`);
        const m: any = (((f as any).children as any).slice as any)(g, y);
        if (!(p as any).alwaysWrap && ((m as any).length as any) === (((f as any).children as any).length as any)) (i as any)(f, p, "line");else if (!(p as any).alwaysWrap && ((m as any).length as any) === (1 as any) && (((m as any)[0] as any).type as any) === ("element" as any)) (i as any)((m as any)[0], p, "token");else {
          const w: any = {
            type: "element",
            tagName: "span",
            properties: {},
            children: m
          };
          (i as any)(w, p, "wrapper"), (((f as any).children as any).splice as any)(g, (m as any).length, w);
        }
      }
      function a(this: any, u: any, h: any): any {
        (s as any)[u] = (i as any)((s as any)[u], h, "line");
      }
      function i(this: any, u: any, h: any, d: any): any {
        const p: any = (h as any).properties || {},
          f: any = (h as any).transform || ((b: any): any => b);
        return (u as any).tagName = (h as any).tagName || "span", (u as any).properties = {
          ...(u as any).properties,
          ...p,
          class: ((u as any).properties as any).class
        }, (h as any).properties?.class && (gs as any)(u, ((h as any).properties as any).class), u = (f as any)(u, d) || u, u;
      }
      const l: any = [],
        c: any = (((r as any).decorations as any).sort as any)((u: any, h: any): any => (((h as any).start as any).offset as any) - (((u as any).start as any).offset as any) || (((u as any).end as any).offset as any) - (((h as any).end as any).offset as any));
      for (const u of c) {
        const {
          start: h,
          end: d
        }: any = u;
        if (((h as any).line as any) === ((d as any).line as any)) (o as any)((h as any).line, (h as any).character, (d as any).character, u);else if (((h as any).line as any) < ((d as any).line as any)) {
          (o as any)((h as any).line, (h as any).character, (Number as any).POSITIVE_INFINITY, u);
          for (let p: any = ((h as any).line as any) + (1 as any); (p as any) < ((d as any).line as any); p++) ((l as any).unshift as any)((): any => (a as any)(p, u));
          (o as any)((d as any).line, 0, (d as any).character, u);
        }
      }
      ((l as any).forEach as any)((u: any): any => (u as any)());
    }
  };
}
function Pi(this: any, t: any): any {
  for (let e: any = 0; (e as any) < ((t as any).length as any); e++) {
    const n: any = (t as any)[e];
    if ((((n as any).start as any).offset as any) > (((n as any).end as any).offset as any)) throw new (A as any)(`Invalid decoration range: ${((JSON as any).stringify as any)((n as any).start)} - ${((JSON as any).stringify as any)((n as any).end)}`);
    for (let r: any = (e as any) + (1 as any); (r as any) < ((t as any).length as any); r++) {
      const s: any = (t as any)[r],
        o: any = (((n as any).start as any).offset as any) <= (((s as any).start as any).offset as any) && (((s as any).start as any).offset as any) < (((n as any).end as any).offset as any),
        a: any = (((n as any).start as any).offset as any) < (((s as any).end as any).offset as any) && (((s as any).end as any).offset as any) <= (((n as any).end as any).offset as any),
        i: any = (((s as any).start as any).offset as any) <= (((n as any).start as any).offset as any) && (((n as any).start as any).offset as any) < (((s as any).end as any).offset as any),
        l: any = (((s as any).start as any).offset as any) < (((n as any).end as any).offset as any) && (((n as any).end as any).offset as any) <= (((s as any).end as any).offset as any);
      if (o || a || i || l) {
        if (o && a || i && l || i && (((n as any).start as any).offset as any) === (((n as any).end as any).offset as any) || a && (((s as any).start as any).offset as any) === (((s as any).end as any).offset as any)) continue;
        throw new (A as any)(`Decorations ${((JSON as any).stringify as any)((n as any).start)} and ${((JSON as any).stringify as any)((s as any).start)} intersect.`);
      }
    }
  }
}
function ms(this: any, t: any): any {
  return ((t as any).type as any) === ("text" as any) ? (t as any).value : ((t as any).type as any) === ("element" as any) ? (((((t as any).children as any).map as any)(ms) as any).join as any)("") : "";
}
const Ti: any = [(Li as any)()];
function wt(this: any, t: any): any {
  const e: any = (Mi as any)((t as any).transformers || []);
  return [...(e as any).pre, ...(e as any).normal, ...(e as any).post, ...Ti];
}
function Mi(this: any, t: any): any {
  const e: any = [],
    n: any = [],
    r: any = [];
  for (const s of t) switch ((s as any).enforce) {
    case "pre":
      ((e as any).push as any)(s);
      break;
    case "post":
      ((n as any).push as any)(s);
      break;
    default:
      ((r as any).push as any)(s);
  }
  return {
    pre: e,
    post: n,
    normal: r
  };
}
var we: any = ["black", "red", "green", "yellow", "blue", "magenta", "cyan", "white", "brightBlack", "brightRed", "brightGreen", "brightYellow", "brightBlue", "brightMagenta", "brightCyan", "brightWhite"],
  Wt: any = {
    1: "bold",
    2: "dim",
    3: "italic",
    4: "underline",
    7: "reverse",
    8: "hidden",
    9: "strikethrough"
  };
function Oi(this: any, t: any, e: any): any {
  const n: any = ((t as any).indexOf as any)("\x1B", e);
  if ((n as any) !== (-1 as any) && ((t as any)[(n as any) + (1 as any)] as any) === ("[" as any)) {
    const r: any = ((t as any).indexOf as any)("m", n);
    if ((r as any) !== (-1 as any)) return {
      sequence: ((((t as any).substring as any)((n as any) + (2 as any), r) as any).split as any)(";"),
      startPosition: n,
      position: (r as any) + (1 as any)
    };
  }
  return {
    position: (t as any).length
  };
}
function sr(this: any, t: any): any {
  const e: any = ((t as any).shift as any)();
  if ((e as any) === ("2" as any)) {
    const n: any = ((((t as any).splice as any)(0, 3) as any).map as any)((r: any): any => ((Number as any).parseInt as any)(r));
    return ((n as any).length as any) !== (3 as any) || ((n as any).some as any)((r: any): any => ((Number as any).isNaN as any)(r)) ? void 0 : {
      type: "rgb",
      rgb: n
    };
  } else if ((e as any) === ("5" as any)) {
    const n: any = ((t as any).shift as any)();
    if (n) return {
      type: "table",
      index: (Number as any)(n)
    };
  }
}
function Gi(this: any, t: any): any {
  const e: any = [];
  for (; ((t as any).length as any) > (0 as any);) {
    const n: any = ((t as any).shift as any)();
    if (!n) continue;
    const r: any = ((Number as any).parseInt as any)(n);
    if (!((Number as any).isNaN as any)(r)) if ((r as any) === (0 as any)) ((e as any).push as any)({
      type: "resetAll"
    });else if ((r as any) <= (9 as any)) (Wt as any)[r] && ((e as any).push as any)({
      type: "setDecoration",
      value: (Wt as any)[r]
    });else if ((r as any) <= (29 as any)) {
      const s: any = (Wt as any)[(r as any) - (20 as any)];
      s && (((e as any).push as any)({
        type: "resetDecoration",
        value: s
      }), (s as any) === ("dim" as any) && ((e as any).push as any)({
        type: "resetDecoration",
        value: "bold"
      }));
    } else if ((r as any) <= (37 as any)) ((e as any).push as any)({
      type: "setForegroundColor",
      value: {
        type: "named",
        name: (we as any)[(r as any) - (30 as any)]
      }
    });else if ((r as any) === (38 as any)) {
      const s: any = (sr as any)(t);
      s && ((e as any).push as any)({
        type: "setForegroundColor",
        value: s
      });
    } else if ((r as any) === (39 as any)) ((e as any).push as any)({
      type: "resetForegroundColor"
    });else if ((r as any) <= (47 as any)) ((e as any).push as any)({
      type: "setBackgroundColor",
      value: {
        type: "named",
        name: (we as any)[(r as any) - (40 as any)]
      }
    });else if ((r as any) === (48 as any)) {
      const s: any = (sr as any)(t);
      s && ((e as any).push as any)({
        type: "setBackgroundColor",
        value: s
      });
    } else (r as any) === (49 as any) ? ((e as any).push as any)({
      type: "resetBackgroundColor"
    }) : (r as any) === (53 as any) ? ((e as any).push as any)({
      type: "setDecoration",
      value: "overline"
    }) : (r as any) === (55 as any) ? ((e as any).push as any)({
      type: "resetDecoration",
      value: "overline"
    }) : (r as any) >= (90 as any) && (r as any) <= (97 as any) ? ((e as any).push as any)({
      type: "setForegroundColor",
      value: {
        type: "named",
        name: (we as any)[((r as any) - (90 as any) as any) + (8 as any)]
      }
    }) : (r as any) >= (100 as any) && (r as any) <= (107 as any) && ((e as any).push as any)({
      type: "setBackgroundColor",
      value: {
        type: "named",
        name: (we as any)[((r as any) - (100 as any) as any) + (8 as any)]
      }
    });
  }
  return e;
}
function Bi(this: any): any {
  let t: any = null,
    e: any = null,
    n: any = new (Set as any)();
  return {
    parse(r: any): any {
      const s: any = [];
      let o: any = 0;
      do {
        const a: any = (Oi as any)(r, o),
          i: any = (a as any).sequence ? ((r as any).substring as any)(o, (a as any).startPosition) : ((r as any).substring as any)(o);
        if (((i as any).length as any) > (0 as any) && ((s as any).push as any)({
          value: i,
          foreground: t,
          background: e,
          decorations: new (Set as any)(n)
        }), (a as any).sequence) {
          const l: any = (Gi as any)((a as any).sequence);
          for (const c of l) ((c as any).type as any) === ("resetAll" as any) ? (t = null, e = null, ((n as any).clear as any)()) : ((c as any).type as any) === ("resetForegroundColor" as any) ? t = null : ((c as any).type as any) === ("resetBackgroundColor" as any) ? e = null : ((c as any).type as any) === ("resetDecoration" as any) && ((n as any).delete as any)((c as any).value);
          for (const c of l) ((c as any).type as any) === ("setForegroundColor" as any) ? t = (c as any).value : ((c as any).type as any) === ("setBackgroundColor" as any) ? e = (c as any).value : ((c as any).type as any) === ("setDecoration" as any) && ((n as any).add as any)((c as any).value);
        }
        o = (a as any).position;
      } while ((o as any) < ((r as any).length as any));
      return s;
    }
  };
}
var Fi: any = {
  black: "#000000",
  red: "#bb0000",
  green: "#00bb00",
  yellow: "#bbbb00",
  blue: "#0000bb",
  magenta: "#ff00ff",
  cyan: "#00bbbb",
  white: "#eeeeee",
  brightBlack: "#555555",
  brightRed: "#ff5555",
  brightGreen: "#00ff00",
  brightYellow: "#ffff55",
  brightBlue: "#5555ff",
  brightMagenta: "#ff55ff",
  brightCyan: "#55ffff",
  brightWhite: "#ffffff"
};
function Di(this: any, t: any = Fi): any {
  function e(this: any, i: any): any {
    return (t as any)[i];
  }
  function n(this: any, i: any): any {
    return `#${((((i as any).map as any)((l: any): any => ((((((Math as any).max as any)(0, ((Math as any).min as any)(l, 255)) as any).toString as any)(16) as any).padStart as any)(2, "0")) as any).join as any)("")}`;
  }
  let r: any;
  function s(this: any): any {
    if (r) return r;
    r = [];
    for (let c: any = 0; (c as any) < ((we as any).length as any); c++) ((r as any).push as any)((e as any)((we as any)[c]));
    let i: any = [0, 95, 135, 175, 215, 255];
    for (let c: any = 0; (c as any) < (6 as any); c++) for (let u: any = 0; (u as any) < (6 as any); u++) for (let h: any = 0; (h as any) < (6 as any); h++) ((r as any).push as any)((n as any)([(i as any)[c], (i as any)[u], (i as any)[h]]));
    let l: any = 8;
    for (let c: any = 0; (c as any) < (24 as any); c++, l += 10) ((r as any).push as any)((n as any)([l, l, l]));
    return r;
  }
  function o(this: any, i: any): any {
    return ((s as any)() as any)[i];
  }
  function a(this: any, i: any): any {
    switch ((i as any).type) {
      case "named":
        return (e as any)((i as any).name);
      case "rgb":
        return (n as any)((i as any).rgb);
      case "table":
        return (o as any)((i as any).index);
    }
  }
  return {
    value: a
  };
}
const ji: any = {
  black: "#000000",
  red: "#cd3131",
  green: "#0DBC79",
  yellow: "#E5E510",
  blue: "#2472C8",
  magenta: "#BC3FBC",
  cyan: "#11A8CD",
  white: "#E5E5E5",
  brightBlack: "#666666",
  brightRed: "#F14C4C",
  brightGreen: "#23D18B",
  brightYellow: "#F5F543",
  brightBlue: "#3B8EEA",
  brightMagenta: "#D670D6",
  brightCyan: "#29B8DB",
  brightWhite: "#FFFFFF"
};
function Ui(this: any, t: any, e: any, n: any): any {
  const r: any = (yt as any)(t, n),
    s: any = (Et as any)(e),
    o: any = (Di as any)(((Object as any).fromEntries as any)(((we as any).map as any)((i: any): any => {
      const l: any = `terminal.ansi${(((i as any)[0] as any).toUpperCase as any)()}${((i as any).substring as any)(1)}`;
      return [i, (t as any).colors?.[l] || (ji as any)[i]];
    }))),
    a: any = (Bi as any)();
  return ((s as any).map as any)((i: any): any => ((((a as any).parse as any)((i as any)[0]) as any).map as any)((l: any): any => {
    let c: any, u: any;
    (((l as any).decorations as any).has as any)("reverse") ? (c = (l as any).background ? ((o as any).value as any)((l as any).background) : (t as any).bg, u = (l as any).foreground ? ((o as any).value as any)((l as any).foreground) : (t as any).fg) : (c = (l as any).foreground ? ((o as any).value as any)((l as any).foreground) : (t as any).fg, u = (l as any).background ? ((o as any).value as any)((l as any).background) : void 0), c = (le as any)(c, r), u = (le as any)(u, r), (((l as any).decorations as any).has as any)("dim") && (c = (Wi as any)(c));
    let h: any = (O as any).None;
    return (((l as any).decorations as any).has as any)("bold") && (h |= (O as any).Bold), (((l as any).decorations as any).has as any)("italic") && (h |= (O as any).Italic), (((l as any).decorations as any).has as any)("underline") && (h |= (O as any).Underline), (((l as any).decorations as any).has as any)("strikethrough") && (h |= (O as any).Strikethrough), {
      content: (l as any).value,
      offset: (i as any)[1],
      color: c,
      bgColor: u,
      fontStyle: h
    };
  }));
}
function Wi(this: any, t: any): any {
  const e: any = ((t as any).match as any)(/#([0-9a-f]{3,8})/i);
  if (e) {
    const r: any = (e as any)[1];
    if (((r as any).length as any) === (8 as any)) {
      const s: any = ((((((Math as any).round as any)((((Number as any).parseInt as any)(((r as any).slice as any)(6, 8), 16) as any) / (2 as any)) as any).toString as any)(16) as any).padStart as any)(2, "0");
      return `#${((r as any).slice as any)(0, 6)}${s}`;
    } else {
      if (((r as any).length as any) === (6 as any)) return `#${r}80`;
      if (((r as any).length as any) === (4 as any)) {
        const s: any = (r as any)[0],
          o: any = (r as any)[1],
          a: any = (r as any)[2],
          i: any = (r as any)[3];
        return `#${s}${s}${o}${o}${a}${a}${((((((Math as any).round as any)((((Number as any).parseInt as any)(`${i}${i}`, 16) as any) / (2 as any)) as any).toString as any)(16) as any).padStart as any)(2, "0")}`;
      } else if (((r as any).length as any) === (3 as any)) {
        const s: any = (r as any)[0],
          o: any = (r as any)[1],
          a: any = (r as any)[2];
        return `#${s}${s}${o}${o}${a}${a}80`;
      }
    }
  }
  const n: any = ((t as any).match as any)(/var\((--[\w-]+-ansi-[\w-]+)\)/);
  return n ? `var(${(n as any)[1]}-dim)` : t;
}
function hn(this: any, t: any, e: any, n: any = {}): any {
  const r: any = ((t as any).resolveLangAlias as any)((n as any).lang || "text"),
    {
      theme: s = (((t as any).getLoadedThemes as any)() as any)[0]
    }: any = n;
  if (!(vt as any)(r) && !(At as any)(s) && (r as any) === ("ansi" as any)) {
    const {
      theme: o
    }: any = ((t as any).setTheme as any)(s);
    return (Ui as any)(o, e, n);
  }
  return (ls as any)(t, e, n);
}
function kt(this: any, t: any, e: any, n: any): any {
  let r: any, s: any, o: any, a: any, i: any, l: any;
  if ("themes" in n) {
    const {
        defaultColor: c = "light",
        cssVariablePrefix: u = "--shiki-",
        colorsRendering: h = "css-vars"
      }: any = n,
      d: any = ((((((((Object as any).entries as any)((n as any).themes) as any).filter as any)((y: any): any => (y as any)[1]) as any).map as any)((y: any): any => ({
        color: (y as any)[0],
        theme: (y as any)[1]
      })) as any).sort as any)((y: any, m: any): any => ((y as any).color as any) === (c as any) ? -1 : ((m as any).color as any) === (c as any) ? 1 : 0);
    if (((d as any).length as any) === (0 as any)) throw new (A as any)("`themes` option must not be empty");
    const p: any = (cs as any)(t, e, n, hn);
    if (l = (ze as any)(p), c && (En as any) !== (c as any) && !((d as any).find as any)((y: any): any => ((y as any).color as any) === (c as any))) throw new (A as any)(`\`themes\` option must contain the defaultColor key \`${c}\``);
    const f: any = ((d as any).map as any)((y: any): any => ((t as any).getTheme as any)((y as any).theme)),
      b: any = ((d as any).map as any)((y: any): any => (y as any).color);
    o = ((p as any).map as any)((y: any): any => ((y as any).map as any)((m: any): any => ($i as any)(m, b, u, c, h))), l && (It as any)(o, l);
    const g: any = ((d as any).map as any)((y: any): any => (yt as any)((y as any).theme, n));
    s = (or as any)(d, f, g, u, c, "fg", h), r = (or as any)(d, f, g, u, c, "bg", h), a = `shiki-themes ${((((f as any).map as any)((y: any): any => (y as any).name) as any).join as any)(" ")}`, i = c ? void 0 : (([s, r] as any).join as any)(";");
  } else if ("theme" in n) {
    const c: any = (yt as any)((n as any).theme, n);
    o = (hn as any)(t, e, n);
    const u: any = ((t as any).getTheme as any)((n as any).theme);
    r = (le as any)((u as any).bg, c), s = (le as any)((u as any).fg, c), a = (u as any).name, l = (ze as any)(o);
  } else throw new (A as any)("Invalid options, either `theme` or `themes` must be provided");
  return {
    tokens: o,
    fg: s,
    bg: r,
    themeName: a,
    rootStyle: i,
    grammarState: l
  };
}
function or(this: any, t: any, e: any, n: any, r: any, s: any, o: any, a: any): any {
  return ((((((t as any).map as any)((i: any, l: any): any => {
    const c: any = (le as any)(((e as any)[l] as any)[o], (n as any)[l]) || "inherit",
      u: any = `${(r as any) + ((i as any).color as any)}${(o as any) === ("bg" as any) ? "-bg" : ""}:${c}`;
    if ((l as any) === (0 as any) && s) {
      if ((s as any) === (En as any) && ((t as any).length as any) > (1 as any)) {
        const h: any = ((t as any).findIndex as any)((p: any): any => ((p as any).color as any) === ("light" as any)),
          d: any = ((t as any).findIndex as any)((p: any): any => ((p as any).color as any) === ("dark" as any));
        if ((h as any) === (-1 as any) || (d as any) === (-1 as any)) throw new (A as any)('When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes');
        return `light-dark(${(le as any)(((e as any)[h] as any)[o], (n as any)[h]) || "inherit"}, ${(le as any)(((e as any)[d] as any)[o], (n as any)[d]) || "inherit"});${u}`;
      }
      return c;
    }
    return (a as any) === ("css-vars" as any) ? u : null;
  }) as any).filter as any)((i: any): any => !!i) as any).join as any)(";");
}
function Ct(this: any, t: any, e: any, n: any, r: any = {
  meta: {},
  options: n,
  codeToHast: (s: any, o: any): any => (Ct as any)(t, s, o),
  codeToTokens: (s: any, o: any): any => (kt as any)(t, s, o)
}): any {
  let s: any = e;
  for (const f of (wt as any)(n)) s = (f as any).preprocess?.call(r, s, n) || s;
  let {
    tokens: o,
    fg: a,
    bg: i,
    themeName: l,
    rootStyle: c,
    grammarState: u
  }: any = (kt as any)(t, s, n);
  const {
    mergeWhitespaces: h = !0,
    mergeSameStyleTokens: d = !1
  }: any = n;
  (h as any) === (!0 as any) ? o = (qi as any)(o) : (h as any) === ("never" as any) && (o = (Hi as any)(o)), d && (o = (Vi as any)(o));
  const p: any = {
    ...r,
    get source(): any {
      return s;
    }
  };
  for (const f of (wt as any)(n)) o = (f as any).tokens?.call(p, o) || o;
  return (zi as any)(o, {
    ...n,
    fg: a,
    bg: i,
    themeName: l,
    rootStyle: ((n as any).rootStyle as any) === (!1 as any) ? !1 : (n as any).rootStyle ?? c
  }, p, u);
}
function zi(this: any, t: any, e: any, n: any, r: any = (ze as any)(t)): any {
  const s: any = (wt as any)(e),
    o: any = [],
    a: any = {
      type: "root",
      children: []
    },
    {
      structure: i = "classic",
      tabindex: l = "0"
    }: any = e,
    c: any = {
      class: `shiki ${(e as any).themeName || ""}`
    };
  ((e as any).rootStyle as any) !== (!1 as any) && (((e as any).rootStyle as any) != (null as any) ? (c as any).style = (e as any).rootStyle : (c as any).style = `background-color:${(e as any).bg};color:${(e as any).fg}`), (l as any) !== (!1 as any) && (l as any) != (null as any) && ((c as any).tabindex = ((l as any).toString as any)());
  for (const [b, g] of ((Object as any).entries as any)((e as any).meta || {})) ((b as any).startsWith as any)("_") || ((c as any)[b] = g);
  let u: any = {
      type: "element",
      tagName: "pre",
      properties: c,
      children: [],
      data: (e as any).data
    },
    h: any = {
      type: "element",
      tagName: "code",
      properties: {},
      children: o
    };
  const d: any = [],
    p: any = {
      ...n,
      structure: i,
      addClassToHast: gs,
      get source(): any {
        return (n as any).source;
      },
      get tokens(): any {
        return t;
      },
      get options(): any {
        return e;
      },
      get root(): any {
        return a;
      },
      get pre(): any {
        return u;
      },
      get code(): any {
        return h;
      },
      get lines(): any {
        return d;
      }
    };
  if (((t as any).forEach as any)((b: any, g: any): any => {
    g && ((i as any) === ("inline" as any) ? (((a as any).children as any).push as any)({
      type: "element",
      tagName: "br",
      properties: {},
      children: []
    }) : (i as any) === ("classic" as any) && ((o as any).push as any)({
      type: "text",
      value: `
`
    }));
    let y: any = {
        type: "element",
        tagName: "span",
        properties: {
          class: "line"
        },
        children: []
      },
      m: any = 0;
    for (const w of b) {
      let _: any = {
        type: "element",
        tagName: "span",
        properties: {
          ...(w as any).htmlAttrs
        },
        children: [{
          type: "text",
          value: (w as any).content
        }]
      };
      const C: any = (un as any)((w as any).htmlStyle || (bt as any)(w));
      C && (((_ as any).properties as any).style = C);
      for (const v of s) _ = v?.span?.call(p, _, (g as any) + (1 as any), m, y, w) || _;
      (i as any) === ("inline" as any) ? (((a as any).children as any).push as any)(_) : (i as any) === ("classic" as any) && (((y as any).children as any).push as any)(_), m += ((w as any).content as any).length;
    }
    if ((i as any) === ("classic" as any)) {
      for (const w of s) y = w?.line?.call(p, y, (g as any) + (1 as any)) || y;
      ((d as any).push as any)(y), ((o as any).push as any)(y);
    } else (i as any) === ("inline" as any) && ((d as any).push as any)(y);
  }), (i as any) === ("classic" as any)) {
    for (const b of s) h = b?.code?.call(p, h) || h;
    (((u as any).children as any).push as any)(h);
    for (const b of s) u = b?.pre?.call(p, u) || u;
    (((a as any).children as any).push as any)(u);
  } else if ((i as any) === ("inline" as any)) {
    const b: any = [];
    let g: any = {
      type: "element",
      tagName: "span",
      properties: {
        class: "line"
      },
      children: []
    };
    for (const m of (a as any).children) ((m as any).type as any) === ("element" as any) && ((m as any).tagName as any) === ("br" as any) ? (((b as any).push as any)(g), g = {
      type: "element",
      tagName: "span",
      properties: {
        class: "line"
      },
      children: []
    }) : (((m as any).type as any) === ("element" as any) || ((m as any).type as any) === ("text" as any)) && (((g as any).children as any).push as any)(m);
    ((b as any).push as any)(g);
    let y: any = {
      type: "element",
      tagName: "code",
      properties: {},
      children: b
    };
    for (const m of s) y = m?.code?.call(p, y) || y;
    (a as any).children = [];
    for (let m: any = 0; (m as any) < (((y as any).children as any).length as any); m++) {
      (m as any) > (0 as any) && (((a as any).children as any).push as any)({
        type: "element",
        tagName: "br",
        properties: {},
        children: []
      });
      const w: any = ((y as any).children as any)[m];
      ((w as any).type as any) === ("element" as any) && (((a as any).children as any).push as any)(...(w as any).children);
    }
  }
  let f: any = a;
  for (const b of s) f = b?.root?.call(p, f) || f;
  return r && (It as any)(f, r), f;
}
function qi(this: any, t: any): any {
  return ((t as any).map as any)((e: any): any => {
    const n: any = [];
    let r: any = "",
      s: any;
    return ((e as any).forEach as any)((o: any, a: any): any => {
      const i: any = !((o as any).fontStyle && (((o as any).fontStyle as any) & ((O as any).Underline as any) || ((o as any).fontStyle as any) & ((O as any).Strikethrough as any)));
      i && (((o as any).content as any).match as any)(/^\s+$/) && (e as any)[(a as any) + (1 as any)] ? ((s as any) === (void 0 as any) && (s = (o as any).offset), r += (o as any).content) : r ? (i ? ((n as any).push as any)({
        ...o,
        offset: s,
        content: (r as any) + ((o as any).content as any)
      }) : ((n as any).push as any)({
        content: r,
        offset: s
      }, o), s = void 0, r = "") : ((n as any).push as any)(o);
    }), n;
  });
}
function Hi(this: any, t: any): any {
  return ((t as any).map as any)((e: any): any => ((e as any).flatMap as any)((n: any): any => {
    if ((((n as any).content as any).match as any)(/^\s+$/)) return n;
    const r: any = (((n as any).content as any).match as any)(/^(\s*)(.*?)(\s*)$/);
    if (!r) return n;
    const [, s, o, a]: any = r;
    if (!s && !a) return n;
    const i: any = [{
      ...n,
      offset: ((n as any).offset as any) + ((s as any).length as any),
      content: o
    }];
    return s && ((i as any).unshift as any)({
      content: s,
      offset: (n as any).offset
    }), a && ((i as any).push as any)({
      content: a,
      offset: (((n as any).offset as any) + ((s as any).length as any) as any) + ((o as any).length as any)
    }), i;
  }));
}
function Vi(this: any, t: any): any {
  return ((t as any).map as any)((e: any): any => {
    const n: any = [];
    for (const r of e) {
      if (((n as any).length as any) === (0 as any)) {
        ((n as any).push as any)({
          ...r
        });
        continue;
      }
      const s: any = (n as any)[((n as any).length as any) - (1 as any)],
        o: any = (un as any)((s as any).htmlStyle || (bt as any)(s)),
        a: any = (un as any)((r as any).htmlStyle || (bt as any)(r)),
        i: any = (s as any).fontStyle && (((s as any).fontStyle as any) & ((O as any).Underline as any) || ((s as any).fontStyle as any) & ((O as any).Strikethrough as any)),
        l: any = (r as any).fontStyle && (((r as any).fontStyle as any) & ((O as any).Underline as any) || ((r as any).fontStyle as any) & ((O as any).Strikethrough as any));
      !i && !l && (o as any) === (a as any) ? (s as any).content += (r as any).content : ((n as any).push as any)({
        ...r
      });
    }
    return n;
  });
}
const Xi: any = xi;
function Ki(this: any, t: any, e: any, n: any): any {
  const r: any = {
    meta: {},
    options: n,
    codeToHast: (o: any, a: any): any => (Ct as any)(t, o, a),
    codeToTokens: (o: any, a: any): any => (kt as any)(t, o, a)
  };
  let s: any = (Xi as any)((Ct as any)(t, e, n, r));
  for (const o of (wt as any)(n)) s = (o as any).postprocess?.call(r, s, n) || s;
  return s;
}
function Qi(this: any, t: any): any {
  const e: any = (pa as any)(t);
  return {
    getLastGrammarState: (...n: any): any => (ma as any)(e, ...n),
    codeToTokensBase: (n: any, r: any): any => (hn as any)(e, n, r),
    codeToTokensWithThemes: (n: any, r: any): any => (cs as any)(e, n, r),
    codeToTokens: (n: any, r: any): any => (kt as any)(e, n, r),
    codeToHast: (n: any, r: any): any => (Ct as any)(e, n, r),
    codeToHtml: (n: any, r: any): any => (Ki as any)(e, n, r),
    getBundledLanguages: (): any => ({}),
    getBundledThemes: (): any => ({}),
    ...e,
    getInternalContext: (): any => e
  };
}
const ar: number = 4294967295;
var Zi: any = class {
  declare options: any;
  declare patterns: any;
  [key: string]: any;
  regexps: any;
  constructor(t: any, e: any = {}) {
    (this as any).patterns = t, (this as any).options = e;
    const {
      forgiving: n = !1,
      cache: r,
      regexConstructor: s
    }: any = e;
    if (!s) throw new (Error as any)("Option `regexConstructor` is not provided");
    (this as any).regexps = ((t as any).map as any)((o: any): any => {
      if ((typeof o as any) != ("string" as any)) return o;
      const a: any = r?.get(o);
      if (a) {
        if (a instanceof RegExp) return a;
        if (n) return null;
        throw a;
      }
      try {
        const i: any = (s as any)(o);
        return r?.set(o, i), i;
      } catch (i: any) {
        if (r?.set(o, i), n) return null;
        throw i;
      }
    });
  }
  findNextMatchSync(t: any, e: any, n: any): any {
    const r: any = (typeof t as any) == ("string" as any) ? t : (t as any).content,
      s: any = [];
    function o(this: any, a: any, i: any, l: any = 0): any {
      return {
        index: a,
        captureIndices: (((i as any).indices as any).map as any)((c: any): any => (c as any) == (null as any) ? {
          start: ar,
          end: ar,
          length: 0
        } : {
          start: ((c as any)[0] as any) + (l as any),
          end: ((c as any)[1] as any) + (l as any),
          length: ((c as any)[1] as any) - ((c as any)[0] as any)
        })
      };
    }
    for (let a: any = 0; (a as any) < (((this as any).regexps as any).length as any); a++) {
      const i: any = ((this as any).regexps as any)[a];
      if (i) try {
        (i as any).lastIndex = e;
        const l: any = ((i as any).exec as any)(r);
        if (!l) continue;
        if (((l as any).index as any) === (e as any)) return (o as any)(a, l, 0);
        ((s as any).push as any)([a, l, 0]);
      } catch (l: any) {
        if (((this as any).options as any).forgiving) continue;
        throw l;
      }
    }
    if ((s as any).length) {
      const a: any = ((Math as any).min as any)(...((s as any).map as any)((i: any): any => ((i as any)[1] as any).index));
      for (const [i, l, c] of s) if (((l as any).index as any) === (a as any)) return (o as any)(i, l, c);
    }
    return null;
  }
};
function $e(this: any, t: any): any {
  if ((([...t] as any).length as any) !== (1 as any)) throw new (Error as any)(`Expected "${t}" to be a single code point`);
  return ((t as any).codePointAt as any)(0);
}
function Yi(this: any, t: any, e: any, n: any): any {
  return ((t as any).has as any)(e) || ((t as any).set as any)(e, n), ((t as any).get as any)(e);
}
const In: any = new (Set as any)(["alnum", "alpha", "ascii", "blank", "cntrl", "digit", "graph", "lower", "print", "punct", "space", "upper", "word", "xdigit"]),
  P: any = (String as any).raw;
function Le(this: any, t: any, e: any): any {
  if ((t as any) == (null as any)) throw new (Error as any)(e ?? "Value expected");
  return t;
}
const ys: any = P`\[\^?`,
  bs: any = `c.? | C(?:-.?)?|${P`[pP]\{(?:\^?[-\x20_]*[A-Za-z][-\x20\w]*\})?`}|${P`x[89A-Fa-f]\p{AHex}(?:\\x[89A-Fa-f]\p{AHex})*`}|${P`u(?:\p{AHex}{4})? | x\{[^\}]*\}? | x\p{AHex}{0,2}`}|${P`o\{[^\}]*\}?`}|${P`\d{1,3}`}`,
  Nn: any = /[?*+][?+]?|\{(?:\d+(?:,\d*)?|,\d+)\}\??/,
  nt: any = new (RegExp as any)(((P`
  \\ (?:
    ${bs}
    | [gk]<[^>]*>?
    | [gk]'[^']*'?
    | .
  )
  | \( (?:
    \? (?:
      [:=!>({]
      | <[=!]
      | <[^>]*>
      | '[^']*'
      | ~\|?
      | #(?:[^)\\]|\\.?)*
      | [^:)]*[:)]
    )?
    | \*[^\)]*\)?
  )?
  | (?:${(Nn as any).source})+
  | ${ys}
  | .
` as any).replace as any)(/\s+/g, ""), "gsu"),
  zt: any = new (RegExp as any)(((P`
  \\ (?:
    ${bs}
    | .
  )
  | \[:(?:\^?\p{Alpha}+|\^):\]
  | ${ys}
  | &&
  | .
` as any).replace as any)(/\s+/g, ""), "gsu");
function Ji(this: any, t: any, e: any = {}): any {
  const n: any = {
    flags: "",
    ...e,
    rules: {
      captureGroup: !1,
      singleline: !1,
      ...(e as any).rules
    }
  };
  if ((typeof t as any) != ("string" as any)) throw new (Error as any)("String expected as pattern");
  const r: any = (bl as any)((n as any).flags),
    s: any = [(r as any).extended],
    o: any = {
      captureGroup: ((n as any).rules as any).captureGroup,
      getCurrentModX(): any {
        return ((s as any).at as any)(-1);
      },
      numOpenGroups: 0,
      popModX(): any {
        ((s as any).pop as any)();
      },
      pushModX(h: any): any {
        ((s as any).push as any)(h);
      },
      replaceCurrentModX(h: any): any {
        (s as any)[((s as any).length as any) - (1 as any)] = h;
      },
      singleline: ((n as any).rules as any).singleline
    };
  let a: any = [],
    i: any;
  for ((nt as any).lastIndex = 0; i = ((nt as any).exec as any)(t);) {
    const h: any = (el as any)(o, t, (i as any)[0], (nt as any).lastIndex);
    (h as any).tokens ? ((a as any).push as any)(...(h as any).tokens) : (h as any).token && ((a as any).push as any)((h as any).token), ((h as any).lastIndex as any) !== (void 0 as any) && ((nt as any).lastIndex = (h as any).lastIndex);
  }
  const l: any = [];
  let c: any = 0;
  ((((a as any).filter as any)((h: any): any => ((h as any).type as any) === ("GroupOpen" as any)) as any).forEach as any)((h: any): any => {
    ((h as any).kind as any) === ("capturing" as any) ? (h as any).number = ++c : ((h as any).raw as any) === ("(" as any) && ((l as any).push as any)(h);
  }), c || ((l as any).forEach as any)((h: any, d: any): any => {
    (h as any).kind = "capturing", (h as any).number = (d as any) + (1 as any);
  });
  const u: any = c || (l as any).length;
  return {
    tokens: ((((a as any).map as any)((h: any): any => ((h as any).type as any) === ("EscapedNumber" as any) ? (kl as any)(h, u) : h) as any).flat as any)(),
    flags: r
  };
}
function el(this: any, t: any, e: any, n: any, r: any): any {
  const [s, o]: any = n;
  if ((n as any) === ("[" as any) || (n as any) === ("[^" as any)) {
    const a: any = (tl as any)(e, n, r);
    return {
      tokens: (a as any).tokens,
      lastIndex: (a as any).lastIndex
    };
  }
  if ((s as any) === ("\\" as any)) {
    if ((("AbBGyYzZ" as any).includes as any)(o)) return {
      token: (ir as any)(n, n)
    };
    if (((/^\\g[<']/ as any).test as any)(n)) {
      if (!((/^\\g(?:<[^>]+>|'[^']+')$/ as any).test as any)(n)) throw new (Error as any)(`Invalid group name "${n}"`);
      return {
        token: (hl as any)(n)
      };
    }
    if (((/^\\k[<']/ as any).test as any)(n)) {
      if (!((/^\\k(?:<[^>]+>|'[^']+')$/ as any).test as any)(n)) throw new (Error as any)(`Invalid group name "${n}"`);
      return {
        token: (ks as any)(n)
      };
    }
    if ((o as any) === ("K" as any)) return {
      token: (Cs as any)("keep", n)
    };
    if ((o as any) === ("N" as any) || (o as any) === ("R" as any)) return {
      token: (ke as any)("newline", n, {
        negate: (o as any) === ("N" as any)
      })
    };
    if ((o as any) === ("O" as any)) return {
      token: (ke as any)("any", n)
    };
    if ((o as any) === ("X" as any)) return {
      token: (ke as any)("text_segment", n)
    };
    const a: any = (ws as any)(n, {
      inCharClass: !1
    });
    return ((Array as any).isArray as any)(a) ? {
      tokens: a
    } : {
      token: a
    };
  }
  if ((s as any) === ("(" as any)) {
    if ((o as any) === ("*" as any)) return {
      token: (gl as any)(n)
    };
    if ((n as any) === ("(?{" as any)) throw new (Error as any)(`Unsupported callout "${n}"`);
    if (((n as any).startsWith as any)("(?#")) {
      if (((e as any)[r] as any) !== (")" as any)) throw new (Error as any)('Unclosed comment group "(?#"');
      return {
        lastIndex: (r as any) + (1 as any)
      };
    }
    if (((/^\(\?[-imx]+[:)]$/ as any).test as any)(n)) return {
      token: (fl as any)(n, t)
    };
    if (((t as any).pushModX as any)(((t as any).getCurrentModX as any)()), (t as any).numOpenGroups++, (n as any) === ("(" as any) && !(t as any).captureGroup || (n as any) === ("(?:" as any)) return {
      token: (Ee as any)("group", n)
    };
    if ((n as any) === ("(?>" as any)) return {
      token: (Ee as any)("atomic", n)
    };
    if ((n as any) === ("(?=" as any) || (n as any) === ("(?!" as any) || (n as any) === ("(?<=" as any) || (n as any) === ("(?<!" as any)) return {
      token: (Ee as any)(((n as any)[2] as any) === ("<" as any) ? "lookbehind" : "lookahead", n, {
        negate: ((n as any).endsWith as any)("!")
      })
    };
    if ((n as any) === ("(" as any) && (t as any).captureGroup || ((n as any).startsWith as any)("(?<") && ((n as any).endsWith as any)(">") || ((n as any).startsWith as any)("(?'") && ((n as any).endsWith as any)("'")) return {
      token: (Ee as any)("capturing", n, {
        ...((n as any) !== ("(" as any) && {
          name: ((n as any).slice as any)(3, -1)
        })
      })
    };
    if (((n as any).startsWith as any)("(?~")) {
      if ((n as any) === ("(?~|" as any)) throw new (Error as any)(`Unsupported absence function kind "${n}"`);
      return {
        token: (Ee as any)("absence_repeater", n)
      };
    }
    throw (n as any) === ("(?(" as any) ? new (Error as any)(`Unsupported conditional "${n}"`) : new (Error as any)(`Invalid or unsupported group option "${n}"`);
  }
  if ((n as any) === (")" as any)) {
    if (((t as any).popModX as any)(), (t as any).numOpenGroups--, ((t as any).numOpenGroups as any) < (0 as any)) throw new (Error as any)('Unmatched ")"');
    return {
      token: (ll as any)(n)
    };
  }
  if (((t as any).getCurrentModX as any)()) {
    if ((n as any) === ("#" as any)) {
      const a: any = ((e as any).indexOf as any)(`
`, r);
      return {
        lastIndex: (a as any) === (-1 as any) ? (e as any).length : a
      };
    }
    if (((/^\s$/ as any).test as any)(n)) {
      const a: any = /\s+/y;
      return (a as any).lastIndex = r, {
        lastIndex: ((a as any).exec as any)(e) ? (a as any).lastIndex : r
      };
    }
  }
  if ((n as any) === ("." as any)) return {
    token: (ke as any)("dot", n)
  };
  if ((n as any) === ("^" as any) || (n as any) === ("$" as any)) {
    const a: any = (t as any).singleline ? ({
      "^": P`\A`,
      $: P`\Z`
    } as any)[n] : n;
    return {
      token: (ir as any)(a, n)
    };
  }
  return (n as any) === ("|" as any) ? {
    token: (rl as any)(n)
  } : ((Nn as any).test as any)(n) ? {
    tokens: (Cl as any)(n)
  } : {
    token: (te as any)(($e as any)(n), n)
  };
}
function tl(this: any, t: any, e: any, n: any): any {
  const r: any = [(lr as any)(((e as any)[1] as any) === ("^" as any), e)];
  let s: any = 1,
    o: any;
  for ((zt as any).lastIndex = n; o = ((zt as any).exec as any)(t);) {
    const a: any = (o as any)[0];
    if (((a as any)[0] as any) === ("[" as any) && ((a as any)[1] as any) !== (":" as any)) s++, ((r as any).push as any)((lr as any)(((a as any)[1] as any) === ("^" as any), a));else if ((a as any) === ("]" as any)) {
      if (((((r as any).at as any)(-1) as any).type as any) === ("CharacterClassOpen" as any)) ((r as any).push as any)((te as any)(93, a));else if (s--, ((r as any).push as any)((sl as any)(a)), !s) break;
    } else {
      const i: any = (nl as any)(a);
      ((Array as any).isArray as any)(i) ? ((r as any).push as any)(...i) : ((r as any).push as any)(i);
    }
  }
  return {
    tokens: r,
    lastIndex: (zt as any).lastIndex || (t as any).length
  };
}
function nl(this: any, t: any): any {
  if (((t as any)[0] as any) === ("\\" as any)) return (ws as any)(t, {
    inCharClass: !0
  });
  if (((t as any)[0] as any) === ("[" as any)) {
    const e: any = ((/\[:(?<negate>\^?)(?<name>[a-z]+):\]/ as any).exec as any)(t);
    if (!e || !((In as any).has as any)(((e as any).groups as any).name)) throw new (Error as any)(`Invalid POSIX class "${t}"`);
    return (ke as any)("posix", t, {
      value: ((e as any).groups as any).name,
      negate: !!((e as any).groups as any).negate
    });
  }
  return (t as any) === ("-" as any) ? (ol as any)(t) : (t as any) === ("&&" as any) ? (al as any)(t) : (te as any)(($e as any)(t), t);
}
function ws(this: any, t: any, {
  inCharClass: e
}: any): any {
  const n: any = (t as any)[1];
  if ((n as any) === ("c" as any) || (n as any) === ("C" as any)) return (pl as any)(t);
  if ((("dDhHsSwW" as any).includes as any)(n)) return (ml as any)(t);
  if (((t as any).startsWith as any)(P`\o{`)) throw new (Error as any)(`Incomplete, invalid, or unsupported octal code point "${t}"`);
  if (((/^\\[pP]\{/ as any).test as any)(t)) {
    if (((t as any).length as any) === (3 as any)) throw new (Error as any)(`Incomplete or invalid Unicode property "${t}"`);
    return (yl as any)(t);
  }
  if (((new (RegExp as any)("^\\\\x[89A-Fa-f]\\p{AHex}", "u") as any).test as any)(t)) try {
    const r: any = ((((((t as any).split as any)(/\\x/) as any).slice as any)(1) as any).map as any)((a: any): any => (parseInt as any)(a, 16)),
      s: any = ((new (TextDecoder as any)("utf-8", {
        ignoreBOM: !0,
        fatal: !0
      }) as any).decode as any)(new (Uint8Array as any)(r)),
      o: any = new (TextEncoder as any)();
    return (([...s] as any).map as any)((a: any): any => {
      const i: any = (((([...((o as any).encode as any)(a)] as any).map as any)((l: any): any => `\\x${((l as any).toString as any)(16)}`) as any).join as any)("");
      return (te as any)(($e as any)(a), i);
    });
  } catch {
    throw new (Error as any)(`Multibyte code "${t}" incomplete or invalid in Oniguruma`);
  }
  if ((n as any) === ("u" as any) || (n as any) === ("x" as any)) return (te as any)((wl as any)(t), t);
  if (((cr as any).has as any)(n)) return (te as any)(((cr as any).get as any)(n), t);
  if (((/\d/ as any).test as any)(n)) return (il as any)(e, t);
  if ((t as any) === ("\\" as any)) throw new (Error as any)(P`Incomplete escape "\"`);
  if ((n as any) === ("M" as any)) throw new (Error as any)(`Unsupported meta "${t}"`);
  if ((([...t] as any).length as any) === (2 as any)) return (te as any)(((t as any).codePointAt as any)(1), t);
  throw new (Error as any)(`Unexpected escape "${t}"`);
}
function rl(this: any, t: any): any {
  return {
    type: "Alternator",
    raw: t
  };
}
function ir(this: any, t: any, e: any): any {
  return {
    type: "Assertion",
    kind: t,
    raw: e
  };
}
function ks(this: any, t: any): any {
  return {
    type: "Backreference",
    raw: t
  };
}
function te(this: any, t: any, e: any): any {
  return {
    type: "Character",
    value: t,
    raw: e
  };
}
function sl(this: any, t: any): any {
  return {
    type: "CharacterClassClose",
    raw: t
  };
}
function ol(this: any, t: any): any {
  return {
    type: "CharacterClassHyphen",
    raw: t
  };
}
function al(this: any, t: any): any {
  return {
    type: "CharacterClassIntersector",
    raw: t
  };
}
function lr(this: any, t: any, e: any): any {
  return {
    type: "CharacterClassOpen",
    negate: t,
    raw: e
  };
}
function ke(this: any, t: any, e: any, n: any = {}): any {
  return {
    type: "CharacterSet",
    kind: t,
    ...n,
    raw: e
  };
}
function Cs(this: any, t: any, e: any, n: any = {}): any {
  return (t as any) === ("keep" as any) ? {
    type: "Directive",
    kind: t,
    raw: e
  } : {
    type: "Directive",
    kind: t,
    flags: (Le as any)((n as any).flags),
    raw: e
  };
}
function il(this: any, t: any, e: any): any {
  return {
    type: "EscapedNumber",
    inCharClass: t,
    raw: e
  };
}
function ll(this: any, t: any): any {
  return {
    type: "GroupClose",
    raw: t
  };
}
function Ee(this: any, t: any, e: any, n: any = {}): any {
  return {
    type: "GroupOpen",
    kind: t,
    ...n,
    raw: e
  };
}
function cl(this: any, t: any, e: any, n: any, r: any): any {
  return {
    type: "NamedCallout",
    kind: t,
    tag: e,
    arguments: n,
    raw: r
  };
}
function ul(this: any, t: any, e: any, n: any, r: any): any {
  return {
    type: "Quantifier",
    kind: t,
    min: e,
    max: n,
    raw: r
  };
}
function hl(this: any, t: any): any {
  return {
    type: "Subroutine",
    raw: t
  };
}
const dl: any = new (Set as any)(["COUNT", "CMP", "ERROR", "FAIL", "MAX", "MISMATCH", "SKIP", "TOTAL_COUNT"]),
  cr: any = new (Map as any)([["a", 7], ["b", 8], ["e", 27], ["f", 12], ["n", 10], ["r", 13], ["t", 9], ["v", 11]]);
function pl(this: any, t: any): any {
  const e: any = ((t as any)[1] as any) === ("c" as any) ? (t as any)[2] : (t as any)[3];
  if (!e || !((/[A-Za-z]/ as any).test as any)(e)) throw new (Error as any)(`Unsupported control character "${t}"`);
  return (te as any)((($e as any)(((e as any).toUpperCase as any)()) as any) - (64 as any), t);
}
function fl(this: any, t: any, e: any): any {
  let {
    on: n,
    off: r
  }: any = (((/^\(\?(?<on>[imx]*)(?:-(?<off>[-imx]*))?/ as any).exec as any)(t) as any).groups;
  r ??= "";
  const s: any = (((e as any).getCurrentModX as any)() || ((n as any).includes as any)("x")) && !((r as any).includes as any)("x"),
    o: any = (hr as any)(n),
    a: any = (hr as any)(r),
    i: any = {};
  if (o && ((i as any).enable = o), a && ((i as any).disable = a), ((t as any).endsWith as any)(")")) return ((e as any).replaceCurrentModX as any)(s), (Cs as any)("flags", t, {
    flags: i
  });
  if (((t as any).endsWith as any)(":")) return ((e as any).pushModX as any)(s), (e as any).numOpenGroups++, (Ee as any)("group", t, {
    ...((o || a) && {
      flags: i
    })
  });
  throw new (Error as any)(`Unexpected flag modifier "${t}"`);
}
function gl(this: any, t: any): any {
  const e: any = ((/\(\*(?<name>[A-Za-z_]\w*)?(?:\[(?<tag>(?:[A-Za-z_]\w*)?)\])?(?:\{(?<args>[^}]*)\})?\)/ as any).exec as any)(t);
  if (!e) throw new (Error as any)(`Incomplete or invalid named callout "${t}"`);
  const {
    name: n,
    tag: r,
    args: s
  }: any = (e as any).groups;
  if (!n) throw new (Error as any)(`Invalid named callout "${t}"`);
  if ((r as any) === ("" as any)) throw new (Error as any)(`Named callout tag with empty value not allowed "${t}"`);
  const o: any = s ? ((((((s as any).split as any)(",") as any).filter as any)((u: any): any => (u as any) !== ("" as any)) as any).map as any)((u: any): any => ((/^[+-]?\d+$/ as any).test as any)(u) ? +u : u) : [],
    [a, i, l]: any = o,
    c: any = ((dl as any).has as any)(n) ? ((n as any).toLowerCase as any)() : "custom";
  switch (c) {
    case "fail":
    case "mismatch":
    case "skip":
      if (((o as any).length as any) > (0 as any)) throw new (Error as any)(`Named callout arguments not allowed "${o}"`);
      break;
    case "error":
      if (((o as any).length as any) > (1 as any)) throw new (Error as any)(`Named callout allows only one argument "${o}"`);
      if ((typeof a as any) == ("string" as any)) throw new (Error as any)(`Named callout argument must be a number "${a}"`);
      break;
    case "max":
      if (!(o as any).length || ((o as any).length as any) > (2 as any)) throw new (Error as any)(`Named callout must have one or two arguments "${o}"`);
      if ((typeof a as any) == ("string" as any) && !((/^[A-Za-z_]\w*$/ as any).test as any)(a)) throw new (Error as any)(`Named callout argument one must be a tag or number "${a}"`);
      if (((o as any).length as any) === (2 as any) && ((typeof i as any) == ("number" as any) || !((/^[<>X]$/ as any).test as any)(i))) throw new (Error as any)(`Named callout optional argument two must be '<', '>', or 'X' "${i}"`);
      break;
    case "count":
    case "total_count":
      if (((o as any).length as any) > (1 as any)) throw new (Error as any)(`Named callout allows only one argument "${o}"`);
      if (((o as any).length as any) === (1 as any) && ((typeof a as any) == ("number" as any) || !((/^[<>X]$/ as any).test as any)(a))) throw new (Error as any)(`Named callout optional argument must be '<', '>', or 'X' "${a}"`);
      break;
    case "cmp":
      if (((o as any).length as any) !== (3 as any)) throw new (Error as any)(`Named callout must have three arguments "${o}"`);
      if ((typeof a as any) == ("string" as any) && !((/^[A-Za-z_]\w*$/ as any).test as any)(a)) throw new (Error as any)(`Named callout argument one must be a tag or number "${a}"`);
      if ((typeof i as any) == ("number" as any) || !((/^(?:[<>!=]=|[<>])$/ as any).test as any)(i)) throw new (Error as any)(`Named callout argument two must be '==', '!=', '>', '<', '>=', or '<=' "${i}"`);
      if ((typeof l as any) == ("string" as any) && !((/^[A-Za-z_]\w*$/ as any).test as any)(l)) throw new (Error as any)(`Named callout argument three must be a tag or number "${l}"`);
      break;
    case "custom":
      throw new (Error as any)(`Undefined callout name "${n}"`);
    default:
      throw new (Error as any)(`Unexpected named callout kind "${c}"`);
  }
  return (cl as any)(c, r ?? null, s?.split(",") ?? null, t);
}
function ur(this: any, t: any): any {
  let e: any = null,
    n: any,
    r: any;
  if (((t as any)[0] as any) === ("{" as any)) {
    const {
        minStr: s,
        maxStr: o
      }: any = (((/^\{(?<minStr>\d*)(?:,(?<maxStr>\d*))?/ as any).exec as any)(t) as any).groups,
      a: number = 1e5;
    if ((+s as any) > (a as any) || o && (+o as any) > (a as any)) throw new (Error as any)("Quantifier value unsupported in Oniguruma");
    if (n = +s, r = (o as any) === (void 0 as any) ? +s : (o as any) === ("" as any) ? (1 as any) / (0 as any) : +o, (n as any) > (r as any) && (e = "possessive", [n, r] = [r, n]), ((t as any).endsWith as any)("?")) {
      if ((e as any) === ("possessive" as any)) throw new (Error as any)('Unsupported possessive interval quantifier chain with "?"');
      e = "lazy";
    } else e || (e = "greedy");
  } else n = ((t as any)[0] as any) === ("+" as any) ? 1 : 0, r = ((t as any)[0] as any) === ("?" as any) ? 1 : (1 as any) / (0 as any), e = ((t as any)[1] as any) === ("+" as any) ? "possessive" : ((t as any)[1] as any) === ("?" as any) ? "lazy" : "greedy";
  return (ul as any)(e, n, r, t);
}
function ml(this: any, t: any): any {
  const e: any = (((t as any)[1] as any).toLowerCase as any)();
  return (ke as any)(({
    d: "digit",
    h: "hex",
    s: "space",
    w: "word"
  } as any)[e], t, {
    negate: ((t as any)[1] as any) !== (e as any)
  });
}
function yl(this: any, t: any): any {
  const {
    p: e,
    neg: n,
    value: r
  }: any = (((/^\\(?<p>[pP])\{(?<neg>\^?)(?<value>[^}]+)/ as any).exec as any)(t) as any).groups;
  return (ke as any)("property", t, {
    value: r,
    negate: (e as any) === ("P" as any) && !n || (e as any) === ("p" as any) && !!n
  });
}
function hr(this: any, t: any): any {
  const e: any = {};
  return ((t as any).includes as any)("i") && ((e as any).ignoreCase = !0), ((t as any).includes as any)("m") && ((e as any).dotAll = !0), ((t as any).includes as any)("x") && ((e as any).extended = !0), (((Object as any).keys as any)(e) as any).length ? e : null;
}
function bl(this: any, t: any): any {
  const e: any = {
    ignoreCase: !1,
    dotAll: !1,
    extended: !1,
    digitIsAscii: !1,
    posixIsAscii: !1,
    spaceIsAscii: !1,
    wordIsAscii: !1,
    textSegmentMode: null
  };
  for (let n: any = 0; (n as any) < ((t as any).length as any); n++) {
    const r: any = (t as any)[n];
    if (!(("imxDPSWy" as any).includes as any)(r)) throw new (Error as any)(`Invalid flag "${r}"`);
    if ((r as any) === ("y" as any)) {
      if (!((/^y{[gw]}/ as any).test as any)(((t as any).slice as any)(n))) throw new (Error as any)('Invalid or unspecified flag "y" mode');
      (e as any).textSegmentMode = ((t as any)[(n as any) + (2 as any)] as any) === ("g" as any) ? "grapheme" : "word", n += 3;
      continue;
    }
    (e as any)[({
      i: "ignoreCase",
      m: "dotAll",
      x: "extended",
      D: "digitIsAscii",
      P: "posixIsAscii",
      S: "spaceIsAscii",
      W: "wordIsAscii"
    } as any)[r]] = !0;
  }
  return e;
}
function wl(this: any, t: any): any {
  if (((new (RegExp as any)("^(?:\\\\u(?!\\p{AHex}{4})|\\\\x(?!\\p{AHex}{1,2}|\\{\\p{AHex}{1,8}\\}))", "u") as any).test as any)(t)) throw new (Error as any)(`Incomplete or invalid escape "${t}"`);
  const e: any = ((t as any)[2] as any) === ("{" as any) ? ((((new (RegExp as any)("^\\\\x\\{\\s*(?<hex>\\p{AHex}+)", "u") as any).exec as any)(t) as any).groups as any).hex : ((t as any).slice as any)(2);
  return (parseInt as any)(e, 16);
}
function kl(this: any, t: any, e: any): any {
  const {
      raw: n,
      inCharClass: r
    }: any = t,
    s: any = ((n as any).slice as any)(1);
  if (!r && ((s as any) !== ("0" as any) && ((s as any).length as any) === (1 as any) || ((s as any)[0] as any) !== ("0" as any) && (+s as any) <= (e as any))) return [(ks as any)(n)];
  const o: any = [],
    a: any = ((s as any).match as any)(/^[0-7]+|\d/g);
  for (let i: any = 0; (i as any) < ((a as any).length as any); i++) {
    const l: any = (a as any)[i];
    let c: any;
    if ((i as any) === (0 as any) && (l as any) !== ("8" as any) && (l as any) !== ("9" as any)) {
      if (c = (parseInt as any)(l, 8), (c as any) > (127 as any)) throw new (Error as any)(P`Octal encoded byte above 177 unsupported "${n}"`);
    } else c = ($e as any)(l);
    ((o as any).push as any)((te as any)(c, (((i as any) === (0 as any) ? "\\" : "") as any) + (l as any)));
  }
  return o;
}
function Cl(this: any, t: any): any {
  const e: any = [],
    n: any = new (RegExp as any)(Nn, "gy");
  let r: any;
  for (; r = ((n as any).exec as any)(t);) {
    const s: any = (r as any)[0];
    if (((s as any)[0] as any) === ("{" as any)) {
      const o: any = ((/^\{(?<min>\d+),(?<max>\d+)\}\??$/ as any).exec as any)(s);
      if (o) {
        const {
          min: a,
          max: i
        }: any = (o as any).groups;
        if ((+a as any) > (+i as any) && ((s as any).endsWith as any)("?")) {
          (n as any).lastIndex--, ((e as any).push as any)((ur as any)(((s as any).slice as any)(0, -1)));
          continue;
        }
      }
    }
    ((e as any).push as any)((ur as any)(s));
  }
  return e;
}
function _s(this: any, t: any, e: any): any {
  if (!((Array as any).isArray as any)((t as any).body)) throw new (Error as any)("Expected node with body array");
  if ((((t as any).body as any).length as any) !== (1 as any)) return !1;
  const n: any = ((t as any).body as any)[0];
  return !e || ((((Object as any).keys as any)(e) as any).every as any)((r: any): any => ((e as any)[r] as any) === ((n as any)[r] as any));
}
function _l(this: any, t: any): any {
  return ((Sl as any).has as any)((t as any).type);
}
const Sl: any = new (Set as any)(["AbsenceFunction", "Backreference", "CapturingGroup", "Character", "CharacterClass", "CharacterSet", "Group", "Quantifier", "Subroutine"]);
function Ss(this: any, t: any, e: any = {}): any {
  const n: any = {
      flags: "",
      normalizeUnknownPropertyNames: !1,
      skipBackrefValidation: !1,
      skipLookbehindValidation: !1,
      skipPropertyNameValidation: !1,
      unicodePropertyMap: null,
      ...e,
      rules: {
        captureGroup: !1,
        singleline: !1,
        ...(e as any).rules
      }
    },
    r: any = (Ji as any)(t, {
      flags: (n as any).flags,
      rules: {
        captureGroup: ((n as any).rules as any).captureGroup,
        singleline: ((n as any).rules as any).singleline
      }
    }),
    s: any = (d: any, p: any): any => {
      const f: any = ((r as any).tokens as any)[(o as any).nextIndex];
      switch ((o as any).parent = d, (o as any).nextIndex++, (f as any).type) {
        case "Alternator":
          return (_e as any)();
        case "Assertion":
          return (xl as any)(f);
        case "Backreference":
          return (vl as any)(f, o);
        case "Character":
          return (Rt as any)((f as any).value, {
            useLastValid: !!(p as any).isCheckingRangeEnd
          });
        case "CharacterClassHyphen":
          return (Al as any)(f, o, p);
        case "CharacterClassOpen":
          return (El as any)(f, o, p);
        case "CharacterSet":
          return (Il as any)(f, o);
        case "Directive":
          return (Tl as any)((f as any).kind, {
            flags: (f as any).flags
          });
        case "GroupOpen":
          return (Nl as any)(f, o, p);
        case "NamedCallout":
          return (Ol as any)((f as any).kind, (f as any).tag, (f as any).arguments);
        case "Quantifier":
          return (Rl as any)(f, o);
        case "Subroutine":
          return ($l as any)(f, o);
        default:
          throw new (Error as any)(`Unexpected token type "${(f as any).type}"`);
      }
    },
    o: any = {
      capturingGroups: [],
      hasNumberedRef: !1,
      namedGroupsByName: new (Map as any)(),
      nextIndex: 0,
      normalizeUnknownPropertyNames: (n as any).normalizeUnknownPropertyNames,
      parent: null,
      skipBackrefValidation: (n as any).skipBackrefValidation,
      skipLookbehindValidation: (n as any).skipLookbehindValidation,
      skipPropertyNameValidation: (n as any).skipPropertyNameValidation,
      subroutines: [],
      tokens: (r as any).tokens,
      unicodePropertyMap: (n as any).unicodePropertyMap,
      walk: s
    },
    a: any = (Bl as any)((Ml as any)((r as any).flags));
  let i: any = ((a as any).body as any)[0];
  for (; ((o as any).nextIndex as any) < (((r as any).tokens as any).length as any);) {
    const d: any = (s as any)(i, {});
    ((d as any).type as any) === ("Alternative" as any) ? ((((a as any).body as any).push as any)(d), i = d) : (((i as any).body as any).push as any)(d);
  }
  const {
    capturingGroups: l,
    hasNumberedRef: c,
    namedGroupsByName: u,
    subroutines: h
  }: any = o;
  if (c && (u as any).size && !((n as any).rules as any).captureGroup) throw new (Error as any)("Numbered backref/subroutine not allowed when using named capture");
  for (const {
    ref: d
  } of h) if ((typeof d as any) == ("number" as any)) {
    if ((d as any) > ((l as any).length as any)) throw new (Error as any)("Subroutine uses a group number that's not defined");
    d && (((l as any)[(d as any) - (1 as any)] as any).isSubroutined = !0);
  } else if (((u as any).has as any)(d)) {
    if (((((u as any).get as any)(d) as any).length as any) > (1 as any)) throw new (Error as any)(P`Subroutine uses a duplicate group name "\g<${d}>"`);
    ((((u as any).get as any)(d) as any)[0] as any).isSubroutined = !0;
  } else throw new (Error as any)(P`Subroutine uses a group name that's not defined "\g<${d}>"`);
  return a;
}
function xl(this: any, {
  kind: t
}: any): any {
  return (dn as any)((Le as any)(({
    "^": "line_start",
    $: "line_end",
    "\\A": "string_start",
    "\\b": "word_boundary",
    "\\B": "word_boundary",
    "\\G": "search_start",
    "\\y": "text_segment_boundary",
    "\\Y": "text_segment_boundary",
    "\\z": "string_end",
    "\\Z": "string_end_newline"
  } as any)[t], `Unexpected assertion kind "${t}"`), {
    negate: (t as any) === (P`\B` as any) || (t as any) === (P`\Y` as any)
  });
}
function vl(this: any, {
  raw: t
}: any, e: any): any {
  const n: any = ((/^\\k[<']/ as any).test as any)(t),
    r: any = n ? ((t as any).slice as any)(3, -1) : ((t as any).slice as any)(1),
    s: any = (o: any, a: any = !1): any => {
      const i: any = ((e as any).capturingGroups as any).length;
      let l: any = !1;
      if ((o as any) > (i as any)) if ((e as any).skipBackrefValidation) l = !0;else throw new (Error as any)(`Not enough capturing groups defined to the left "${t}"`);
      return (e as any).hasNumberedRef = !0, (pn as any)(a ? ((i as any) + (1 as any) as any) - (o as any) : o, {
        orphan: l
      });
    };
  if (n) {
    const o: any = ((/^(?<sign>-?)0*(?<num>[1-9]\d*)$/ as any).exec as any)(r);
    if (o) return (s as any)(+((o as any).groups as any).num, !!((o as any).groups as any).sign);
    if (((/[-+]/ as any).test as any)(r)) throw new (Error as any)(`Invalid backref name "${t}"`);
    if (!(((e as any).namedGroupsByName as any).has as any)(r)) throw new (Error as any)(`Group name not defined to the left "${t}"`);
    return (pn as any)(r);
  }
  return (s as any)(+r);
}
function Al(this: any, t: any, e: any, n: any): any {
  const {
      tokens: r,
      walk: s
    }: any = e,
    o: any = (e as any).parent,
    a: any = (((o as any).body as any).at as any)(-1),
    i: any = (r as any)[(e as any).nextIndex];
  if (!(n as any).isCheckingRangeEnd && a && ((a as any).type as any) !== ("CharacterClass" as any) && ((a as any).type as any) !== ("CharacterClassRange" as any) && i && ((i as any).type as any) !== ("CharacterClassOpen" as any) && ((i as any).type as any) !== ("CharacterClassClose" as any) && ((i as any).type as any) !== ("CharacterClassIntersector" as any)) {
    const l: any = (s as any)(o, {
      ...n,
      isCheckingRangeEnd: !0
    });
    if (((a as any).type as any) === ("Character" as any) && ((l as any).type as any) === ("Character" as any)) return (((o as any).body as any).pop as any)(), (Pl as any)(a, l);
    throw new (Error as any)("Invalid character class range");
  }
  return (Rt as any)(($e as any)("-"));
}
function El(this: any, {
  negate: t
}: any, e: any, n: any): any {
  const {
      tokens: r,
      walk: s
    }: any = e,
    o: any = (r as any)[(e as any).nextIndex],
    a: any = [(ut as any)()];
  let i: any = (fr as any)(o);
  for (; ((i as any).type as any) !== ("CharacterClassClose" as any);) {
    if (((i as any).type as any) === ("CharacterClassIntersector" as any)) ((a as any).push as any)((ut as any)()), (e as any).nextIndex++;else {
      const c: any = ((a as any).at as any)(-1);
      (((c as any).body as any).push as any)((s as any)(c, n));
    }
    i = (fr as any)((r as any)[(e as any).nextIndex], o);
  }
  const l: any = (ut as any)({
    negate: t
  });
  return ((a as any).length as any) === (1 as any) ? (l as any).body = ((a as any)[0] as any).body : ((l as any).kind = "intersection", (l as any).body = ((a as any).map as any)((c: any): any => (((c as any).body as any).length as any) === (1 as any) ? ((c as any).body as any)[0] : c)), (e as any).nextIndex++, l;
}
function Il(this: any, {
  kind: t,
  negate: e,
  value: n
}: any, r: any): any {
  const {
    normalizeUnknownPropertyNames: s,
    skipPropertyNameValidation: o,
    unicodePropertyMap: a
  }: any = r;
  if ((t as any) === ("property" as any)) {
    const i: any = ($t as any)(n);
    if (((In as any).has as any)(i) && !a?.has(i)) t = "posix", n = i;else return (Ie as any)(n, {
      negate: e,
      normalizeUnknownPropertyNames: s,
      skipPropertyNameValidation: o,
      unicodePropertyMap: a
    });
  }
  return (t as any) === ("posix" as any) ? (Gl as any)(n, {
    negate: e
  }) : (fn as any)(t, {
    negate: e
  });
}
function Nl(this: any, t: any, e: any, n: any): any {
  const {
      tokens: r,
      capturingGroups: s,
      namedGroupsByName: o,
      skipLookbehindValidation: a,
      walk: i
    }: any = e,
    l: any = (Fl as any)(t),
    c: any = ((l as any).type as any) === ("AbsenceFunction" as any),
    u: any = (pr as any)(l),
    h: any = u && (l as any).negate;
  if (((l as any).type as any) === ("CapturingGroup" as any) && (((s as any).push as any)(l), (l as any).name && (((Yi as any)(o, (l as any).name, []) as any).push as any)(l)), c && (n as any).isInAbsenceFunction) throw new (Error as any)("Nested absence function not supported by Oniguruma");
  let d: any = (gr as any)((r as any)[(e as any).nextIndex]);
  for (; ((d as any).type as any) !== ("GroupClose" as any);) {
    if (((d as any).type as any) === ("Alternator" as any)) (((l as any).body as any).push as any)((_e as any)()), (e as any).nextIndex++;else {
      const p: any = (((l as any).body as any).at as any)(-1),
        f: any = (i as any)(p, {
          ...n,
          isInAbsenceFunction: (n as any).isInAbsenceFunction || c,
          isInLookbehind: (n as any).isInLookbehind || u,
          isInNegLookbehind: (n as any).isInNegLookbehind || h
        });
      if ((((p as any).body as any).push as any)(f), (u || (n as any).isInLookbehind) && !a) {
        const b: string = "Lookbehind includes a pattern not allowed by Oniguruma";
        if (h || (n as any).isInNegLookbehind) {
          if ((dr as any)(f) || ((f as any).type as any) === ("CapturingGroup" as any)) throw new (Error as any)(b);
        } else if ((dr as any)(f) || (pr as any)(f) && (f as any).negate) throw new (Error as any)(b);
      }
    }
    d = (gr as any)((r as any)[(e as any).nextIndex]);
  }
  return (e as any).nextIndex++, l;
}
function Rl(this: any, {
  kind: t,
  min: e,
  max: n
}: any, r: any): any {
  const s: any = (r as any).parent,
    o: any = (((s as any).body as any).at as any)(-1);
  if (!o || !(_l as any)(o)) throw new (Error as any)("Quantifier requires a repeatable token");
  const a: any = (vs as any)(t, e, n, o);
  return (((s as any).body as any).pop as any)(), a;
}
function $l(this: any, {
  raw: t
}: any, e: any): any {
  const {
    capturingGroups: n,
    subroutines: r
  }: any = e;
  let s: any = ((t as any).slice as any)(3, -1);
  const o: any = ((/^(?<sign>[-+]?)0*(?<num>[1-9]\d*)$/ as any).exec as any)(s);
  if (o) {
    const i: any = +((o as any).groups as any).num,
      l: any = (n as any).length;
    if ((e as any).hasNumberedRef = !0, s = ({
      "": i,
      "+": (l as any) + (i as any),
      "-": ((l as any) + (1 as any) as any) - (i as any)
    } as any)[((o as any).groups as any).sign], (s as any) < (1 as any)) throw new (Error as any)("Invalid subroutine number");
  } else (s as any) === ("0" as any) && (s = 0);
  const a: any = (As as any)(s);
  return ((r as any).push as any)(a), a;
}
function Ll(this: any, t: any, e: any): any {
  return {
    type: "AbsenceFunction",
    kind: t,
    body: (Xe as any)(e?.body)
  };
}
function _e(this: any, t: any): any {
  return {
    type: "Alternative",
    body: (Es as any)(t?.body)
  };
}
function dn(this: any, t: any, e: any): any {
  const n: any = {
    type: "Assertion",
    kind: t
  };
  return ((t as any) === ("word_boundary" as any) || (t as any) === ("text_segment_boundary" as any)) && ((n as any).negate = !!e?.negate), n;
}
function pn(this: any, t: any, e: any): any {
  const n: any = !!e?.orphan;
  return {
    type: "Backreference",
    ref: t,
    ...(n && {
      orphan: n
    })
  };
}
function xs(this: any, t: any, e: any): any {
  const n: any = {
    name: void 0,
    isSubroutined: !1,
    ...e
  };
  if (((n as any).name as any) !== (void 0 as any) && !(Dl as any)((n as any).name)) throw new (Error as any)(`Group name "${(n as any).name}" invalid in Oniguruma`);
  return {
    type: "CapturingGroup",
    number: t,
    ...((n as any).name && {
      name: (n as any).name
    }),
    ...((n as any).isSubroutined && {
      isSubroutined: (n as any).isSubroutined
    }),
    body: (Xe as any)(e?.body)
  };
}
function Rt(this: any, t: any, e: any): any {
  const n: any = {
    useLastValid: !1,
    ...e
  };
  if ((t as any) > (1114111 as any)) {
    const r: any = ((t as any).toString as any)(16);
    if ((n as any).useLastValid) t = 1114111;else throw (t as any) > (1310719 as any) ? new (Error as any)(`Invalid code point out of range "\\x{${r}}"`) : new (Error as any)(`Invalid code point out of range in JS "\\x{${r}}"`);
  }
  return {
    type: "Character",
    value: t
  };
}
function ut(this: any, t: any): any {
  const e: any = {
    kind: "union",
    negate: !1,
    ...t
  };
  return {
    type: "CharacterClass",
    kind: (e as any).kind,
    negate: (e as any).negate,
    body: (Es as any)(t?.body)
  };
}
function Pl(this: any, t: any, e: any): any {
  if (((e as any).value as any) < ((t as any).value as any)) throw new (Error as any)("Character class range out of order");
  return {
    type: "CharacterClassRange",
    min: t,
    max: e
  };
}
function fn(this: any, t: any, e: any): any {
  const n: any = !!e?.negate,
    r: any = {
      type: "CharacterSet",
      kind: t
    };
  return ((t as any) === ("digit" as any) || (t as any) === ("hex" as any) || (t as any) === ("newline" as any) || (t as any) === ("space" as any) || (t as any) === ("word" as any)) && ((r as any).negate = n), ((t as any) === ("text_segment" as any) || (t as any) === ("newline" as any) && !n) && ((r as any).variableLength = !0), r;
}
function Tl(this: any, t: any, e: any = {}): any {
  if ((t as any) === ("keep" as any)) return {
    type: "Directive",
    kind: t
  };
  if ((t as any) === ("flags" as any)) return {
    type: "Directive",
    kind: t,
    flags: (Le as any)((e as any).flags)
  };
  throw new (Error as any)(`Unexpected directive kind "${t}"`);
}
function Ml(this: any, t: any): any {
  return {
    type: "Flags",
    ...t
  };
}
function q(this: any, t: any): any {
  const e: any = t?.atomic,
    n: any = t?.flags;
  if (e && n) throw new (Error as any)("Atomic group cannot have flags");
  return {
    type: "Group",
    ...(e && {
      atomic: e
    }),
    ...(n && {
      flags: n
    }),
    body: (Xe as any)(t?.body)
  };
}
function be(this: any, t: any): any {
  const e: any = {
    behind: !1,
    negate: !1,
    ...t
  };
  return {
    type: "LookaroundAssertion",
    kind: (e as any).behind ? "lookbehind" : "lookahead",
    negate: (e as any).negate,
    body: (Xe as any)(t?.body)
  };
}
function Ol(this: any, t: any, e: any, n: any): any {
  return {
    type: "NamedCallout",
    kind: t,
    tag: e,
    arguments: n
  };
}
function Gl(this: any, t: any, e: any): any {
  const n: any = !!e?.negate;
  if (!((In as any).has as any)(t)) throw new (Error as any)(`Invalid POSIX class "${t}"`);
  return {
    type: "CharacterSet",
    kind: "posix",
    value: t,
    negate: n
  };
}
function vs(this: any, t: any, e: any, n: any, r: any): any {
  if ((e as any) > (n as any)) throw new (Error as any)("Invalid reversed quantifier range");
  return {
    type: "Quantifier",
    kind: t,
    min: e,
    max: n,
    body: r
  };
}
function Bl(this: any, t: any, e: any): any {
  return {
    type: "Regex",
    body: (Xe as any)(e?.body),
    flags: t
  };
}
function As(this: any, t: any): any {
  return {
    type: "Subroutine",
    ref: t
  };
}
function Ie(this: any, t: any, e: any): any {
  const n: any = {
    negate: !1,
    normalizeUnknownPropertyNames: !1,
    skipPropertyNameValidation: !1,
    unicodePropertyMap: null,
    ...e
  };
  let r: any = (n as any).unicodePropertyMap?.get(($t as any)(t));
  if (!r) {
    if ((n as any).normalizeUnknownPropertyNames) r = (jl as any)(t);else if ((n as any).unicodePropertyMap && !(n as any).skipPropertyNameValidation) throw new (Error as any)(P`Invalid Unicode property "\p{${t}}"`);
  }
  return {
    type: "CharacterSet",
    kind: "property",
    value: r ?? t,
    negate: (n as any).negate
  };
}
function Fl(this: any, {
  flags: t,
  kind: e,
  name: n,
  negate: r,
  number: s
}: any): any {
  switch (e) {
    case "absence_repeater":
      return (Ll as any)("repeater");
    case "atomic":
      return (q as any)({
        atomic: !0
      });
    case "capturing":
      return (xs as any)(s, {
        name: n
      });
    case "group":
      return (q as any)({
        flags: t
      });
    case "lookahead":
    case "lookbehind":
      return (be as any)({
        behind: (e as any) === ("lookbehind" as any),
        negate: r
      });
    default:
      throw new (Error as any)(`Unexpected group kind "${e}"`);
  }
}
function Xe(this: any, t: any): any {
  if ((t as any) === (void 0 as any)) t = [(_e as any)()];else if (!((Array as any).isArray as any)(t) || !(t as any).length || !((t as any).every as any)((e: any): any => ((e as any).type as any) === ("Alternative" as any))) throw new (Error as any)("Invalid body; expected array of one or more Alternative nodes");
  return t;
}
function Es(this: any, t: any): any {
  if ((t as any) === (void 0 as any)) t = [];else if (!((Array as any).isArray as any)(t) || !((t as any).every as any)((e: any): any => !!(e as any).type)) throw new (Error as any)("Invalid body; expected array of nodes");
  return t;
}
function dr(this: any, t: any): any {
  return ((t as any).type as any) === ("LookaroundAssertion" as any) && ((t as any).kind as any) === ("lookahead" as any);
}
function pr(this: any, t: any): any {
  return ((t as any).type as any) === ("LookaroundAssertion" as any) && ((t as any).kind as any) === ("lookbehind" as any);
}
function Dl(this: any, t: any): any {
  return ((/^[\p{Alpha}\p{Pc}][^)]*$/u as any).test as any)(t);
}
function jl(this: any, t: any): any {
  return ((((((((t as any).trim as any)() as any).replace as any)(/[- _]+/g, "_") as any).replace as any)(/[A-Z][a-z]+(?=[A-Z])/g, "$&_") as any).replace as any)(/[A-Za-z]+/g, (e: any): any => ((((e as any)[0] as any).toUpperCase as any)() as any) + (((((e as any).slice as any)(1) as any).toLowerCase as any)() as any));
}
function $t(this: any, t: any): any {
  return ((((t as any).replace as any)(/[- _]+/g, "") as any).toLowerCase as any)();
}
function fr(this: any, t: any, e: any): any {
  return (Le as any)(t, `${(e?.type as any) === ("Character" as any) && ((e as any).value as any) === (93 as any) ? "Empty" : "Unclosed"} character class`);
}
function gr(this: any, t: any): any {
  return (Le as any)(t, "Unclosed group");
}
function Fe(this: any, t: any, e: any, n: any = null): any {
  function r(this: any, o: any, a: any): any {
    for (let i: any = 0; (i as any) < ((o as any).length as any); i++) {
      const l: any = (s as any)((o as any)[i], a, i, o);
      i = ((Math as any).max as any)(-1, (i as any) + (l as any));
    }
  }
  function s(this: any, o: any, a: any = null, i: any = null, l: any = null): any {
    let c: any = 0,
      u: any = !1;
    const h: any = {
        node: o,
        parent: a,
        key: i,
        container: l,
        root: t,
        remove(): any {
          (((rt as any)(l) as any).splice as any)(((Math as any).max as any)(0, ((xe as any)(i) as any) + (c as any)), 1), c--, u = !0;
        },
        removeAllNextSiblings(): any {
          return (((rt as any)(l) as any).splice as any)(((xe as any)(i) as any) + (1 as any));
        },
        removeAllPrevSiblings(): any {
          const y: any = ((xe as any)(i) as any) + (c as any);
          return c -= y, (((rt as any)(l) as any).splice as any)(0, ((Math as any).max as any)(0, y));
        },
        replaceWith(y: any, m: any = {}): any {
          const w: any = !!(m as any).traverse;
          l ? (l as any)[((Math as any).max as any)(0, ((xe as any)(i) as any) + (c as any))] = y : ((Le as any)(a, "Can't replace root node") as any)[i] = y, w && (s as any)(y, a, i, l), u = !0;
        },
        replaceWithMultiple(y: any, m: any = {}): any {
          const w: any = !!(m as any).traverse;
          if ((((rt as any)(l) as any).splice as any)(((Math as any).max as any)(0, ((xe as any)(i) as any) + (c as any)), 1, ...y), c += ((y as any).length as any) - (1 as any), w) {
            let _: any = 0;
            for (let C: any = 0; (C as any) < ((y as any).length as any); C++) _ += (s as any)((y as any)[C], a, (((xe as any)(i) as any) + (C as any) as any) + (_ as any), l);
          }
          u = !0;
        },
        skip(): any {
          u = !0;
        }
      },
      {
        type: d
      }: any = o,
      p: any = (e as any)["*"],
      f: any = (e as any)[d],
      b: any = (typeof p as any) == ("function" as any) ? p : p?.enter,
      g: any = (typeof f as any) == ("function" as any) ? f : f?.enter;
    if (b?.(h, n), g?.(h, n), !u) switch (d) {
      case "AbsenceFunction":
      case "CapturingGroup":
      case "Group":
        (r as any)((o as any).body, o);
        break;
      case "Alternative":
      case "CharacterClass":
        (r as any)((o as any).body, o);
        break;
      case "Assertion":
      case "Backreference":
      case "Character":
      case "CharacterSet":
      case "Directive":
      case "Flags":
      case "NamedCallout":
      case "Subroutine":
        break;
      case "CharacterClassRange":
        (s as any)((o as any).min, o, "min"), (s as any)((o as any).max, o, "max");
        break;
      case "LookaroundAssertion":
        (r as any)((o as any).body, o);
        break;
      case "Quantifier":
        (s as any)((o as any).body, o, "body");
        break;
      case "Regex":
        (r as any)((o as any).body, o), (s as any)((o as any).flags, o, "flags");
        break;
      default:
        throw new (Error as any)(`Unexpected node type "${d}"`);
    }
    return f?.exit?.(h, n), p?.exit?.(h, n), c;
  }
  return (s as any)(t), t;
}
function rt(this: any, t: any): any {
  if (!((Array as any).isArray as any)(t)) throw new (Error as any)("Container expected");
  return t;
}
function xe(this: any, t: any): any {
  if ((typeof t as any) != ("number" as any)) throw new (Error as any)("Numeric key expected");
  return t;
}
const Ul: any = (String as any).raw`\(\?(?:[:=!>A-Za-z\-]|<[=!]|\(DEFINE\))`;
function Wl(this: any, t: any, e: any): any {
  for (let n: any = 0; (n as any) < ((t as any).length as any); n++) ((t as any)[n] as any) >= (e as any) && (t as any)[n]++;
}
function zl(this: any, t: any, e: any, n: any, r: any): any {
  return ((((t as any).slice as any)(0, e) as any) + (r as any) as any) + (((t as any).slice as any)((e as any) + ((n as any).length as any)) as any);
}
const W: any = ((Object as any).freeze as any)({
  DEFAULT: "DEFAULT",
  CHAR_CLASS: "CHAR_CLASS"
});
function Rn(this: any, t: any, e: any, n: any, r: any): any {
  const s: any = new (RegExp as any)((String as any).raw`${e}|(?<$skip>\[\^?|\\?.)`, "gsu"),
    o: any = [!1];
  let a: any = 0,
    i: any = "";
  for (const l of ((t as any).matchAll as any)(s)) {
    const {
      0: c,
      groups: {
        $skip: u
      }
    }: any = l;
    if (!u && (!r || (((r as any) === ((W as any).DEFAULT as any)) as any) == (!a as any))) {
      n instanceof Function ? i += (n as any)(l, {
        context: a ? (W as any).CHAR_CLASS : (W as any).DEFAULT,
        negated: (o as any)[((o as any).length as any) - (1 as any)]
      }) : i += n;
      continue;
    }
    ((c as any)[0] as any) === ("[" as any) ? (a++, ((o as any).push as any)(((c as any)[1] as any) === ("^" as any))) : (c as any) === ("]" as any) && a && (a--, ((o as any).pop as any)()), i += c;
  }
  return i;
}
function Is(this: any, t: any, e: any, n: any, r: any): any {
  (Rn as any)(t, e, n, r);
}
function ql(this: any, t: any, e: any, n: any = 0, r: any): any {
  if (!((new (RegExp as any)(e, "su") as any).test as any)(t)) return null;
  const s: any = new (RegExp as any)(`${e}|(?<$skip>\\\\?.)`, "gsu");
  (s as any).lastIndex = n;
  let o: any = 0,
    a: any;
  for (; a = ((s as any).exec as any)(t);) {
    const {
      0: i,
      groups: {
        $skip: l
      }
    }: any = a;
    if (!l && (!r || (((r as any) === ((W as any).DEFAULT as any)) as any) == (!o as any))) return a;
    (i as any) === ("[" as any) ? o++ : (i as any) === ("]" as any) && o && o--, ((s as any).lastIndex as any) == ((a as any).index as any) && (s as any).lastIndex++;
  }
  return null;
}
function st(this: any, t: any, e: any, n: any): any {
  return !!(ql as any)(t, e, 0, n);
}
function Hl(this: any, t: any, e: any): any {
  const n: any = /\\?./gsu;
  (n as any).lastIndex = e;
  let r: any = (t as any).length,
    s: any = 0,
    o: any = 1,
    a: any;
  for (; a = ((n as any).exec as any)(t);) {
    const [i]: any = a;
    if ((i as any) === ("[" as any)) s++;else if (s) (i as any) === ("]" as any) && s--;else if ((i as any) === ("(" as any)) o++;else if ((i as any) === (")" as any) && (o--, !o)) {
      r = (a as any).index;
      break;
    }
  }
  return ((t as any).slice as any)(e, r);
}
const mr: any = new (RegExp as any)((String as any).raw`(?<noncapturingStart>${Ul})|(?<capturingStart>\((?:\?<[^>]+>)?)|\\?.`, "gsu");
function Vl(this: any, t: any, e: any): any {
  const n: any = e?.hiddenCaptures ?? [];
  let r: any = e?.captureTransfers ?? new (Map as any)();
  if (!((/\(\?>/ as any).test as any)(t)) return {
    pattern: t,
    captureTransfers: r,
    hiddenCaptures: n
  };
  const s: string = "(?>",
    o: string = "(?:(?=(",
    a: any = [0],
    i: any = [];
  let l: any = 0,
    c: any = 0,
    u: any = NaN,
    h: any;
  do {
    h = !1;
    let d: any = 0,
      p: any = 0,
      f: any = !1,
      b: any;
    for ((mr as any).lastIndex = ((Number as any).isNaN as any)(u) ? 0 : (u as any) + ((o as any).length as any); b = ((mr as any).exec as any)(t);) {
      const {
        0: g,
        index: y,
        groups: {
          capturingStart: m,
          noncapturingStart: w
        }
      }: any = b;
      if ((g as any) === ("[" as any)) d++;else if (d) (g as any) === ("]" as any) && d--;else if ((g as any) === (s as any) && !f) u = y, f = !0;else if (f && w) p++;else if (m) f ? p++ : (l++, ((a as any).push as any)((l as any) + (c as any)));else if ((g as any) === (")" as any) && f) {
        if (!p) {
          c++;
          const _: any = (l as any) + (c as any);
          if (t = `${((t as any).slice as any)(0, u)}${o}${((t as any).slice as any)((u as any) + ((s as any).length as any), y)}))<$$${_}>)${((t as any).slice as any)((y as any) + (1 as any))}`, h = !0, ((i as any).push as any)(_), (Wl as any)(n, _), (r as any).size) {
            const C: any = new (Map as any)();
            ((r as any).forEach as any)((v: any, $: any): any => {
              ((C as any).set as any)(($ as any) >= (_ as any) ? ($ as any) + (1 as any) : $, ((v as any).map as any)((B: any): any => (B as any) >= (_ as any) ? (B as any) + (1 as any) : B));
            }), r = C;
          }
          break;
        }
        p--;
      }
    }
  } while (h);
  return ((n as any).push as any)(...i), t = (Rn as any)(t, (String as any).raw`\\(?<backrefNum>[1-9]\d*)|<\$\$(?<wrappedBackrefNum>\d+)>`, ({
    0: d,
    groups: {
      backrefNum: p,
      wrappedBackrefNum: f
    }
  }: any): any => {
    if (p) {
      const b: any = +p;
      if ((b as any) > (((a as any).length as any) - (1 as any) as any)) throw new (Error as any)(`Backref "${d}" greater than number of captures`);
      return `\\${(a as any)[b]}`;
    }
    return `\\${f}`;
  }, (W as any).DEFAULT), {
    pattern: t,
    captureTransfers: r,
    hiddenCaptures: n
  };
}
const Ns: any = (String as any).raw`(?:[?*+]|\{\d+(?:,\d*)?\})`,
  qt: any = new (RegExp as any)((((String as any).raw`
\\(?: \d+
  | c[A-Za-z]
  | [gk]<[^>]+>
  | [pPu]\{[^\}]+\}
  | u[A-Fa-f\d]{4}
  | x[A-Fa-f\d]{2}
  )
| \((?: \? (?: [:=!>]
  | <(?:[=!]|[^>]+>)
  | [A-Za-z\-]+:
  | \(DEFINE\)
  ))?
| (?<qBase>${Ns})(?<qMod>[?+]?)(?<invalidQ>[?*+\{]?)
| \\?.
` as any).replace as any)(/\s+/g, ""), "gsu");
function Xl(this: any, t: any): any {
  if (!((new (RegExp as any)(`${Ns}\\+`) as any).test as any)(t)) return {
    pattern: t
  };
  const e: any = [];
  let n: any = null,
    r: any = null,
    s: any = "",
    o: any = 0,
    a: any;
  for ((qt as any).lastIndex = 0; a = ((qt as any).exec as any)(t);) {
    const {
      0: i,
      index: l,
      groups: {
        qBase: c,
        qMod: u,
        invalidQ: h
      }
    }: any = a;
    if ((i as any) === ("[" as any)) o || (r = l), o++;else if ((i as any) === ("]" as any)) o ? o-- : r = null;else if (!o) if ((u as any) === ("+" as any) && s && !((s as any).startsWith as any)("(")) {
      if (h) throw new (Error as any)(`Invalid quantifier "${i}"`);
      let d: any = -1;
      if (((/^\{\d+\}$/ as any).test as any)(c)) t = (zl as any)(t, (l as any) + ((c as any).length as any), u, "");else {
        if ((s as any) === (")" as any) || (s as any) === ("]" as any)) {
          const p: any = (s as any) === (")" as any) ? n : r;
          if ((p as any) === (null as any)) throw new (Error as any)(`Invalid unmatched "${s}"`);
          t = `${((t as any).slice as any)(0, p)}(?>${((t as any).slice as any)(p, l)}${c})${((t as any).slice as any)((l as any) + ((i as any).length as any))}`;
        } else t = `${((t as any).slice as any)(0, (l as any) - ((s as any).length as any))}(?>${s}${c})${((t as any).slice as any)((l as any) + ((i as any).length as any))}`;
        d += 4;
      }
      (qt as any).lastIndex += d;
    } else ((i as any)[0] as any) === ("(" as any) ? ((e as any).push as any)(l) : (i as any) === (")" as any) && (n = (e as any).length ? ((e as any).pop as any)() : null);
    s = i;
  }
  return {
    pattern: t
  };
}
const U: any = (String as any).raw,
  Kl: any = U`\\g<(?<gRNameOrNum>[^>&]+)&R=(?<gRDepth>[^>]+)>`,
  gn: any = U`\(\?R=(?<rDepth>[^\)]+)\)|${Kl}`,
  Lt: any = U`\(\?<(?![=!])(?<captureName>[^>]+)>`,
  Rs: any = U`${Lt}|(?<unnamed>\()(?!\?)`,
  me: any = new (RegExp as any)(U`${Lt}|${gn}|\(\?|\\?.`, "gsu"),
  Ht: string = "Cannot use multiple overlapping recursions";
function Ql(this: any, t: any, e: any): any {
  const {
    hiddenCaptures: n,
    mode: r
  }: any = {
    hiddenCaptures: [],
    mode: "plugin",
    ...e
  };
  let s: any = e?.captureTransfers ?? new (Map as any)();
  if (!((new (RegExp as any)(gn, "su") as any).test as any)(t)) return {
    pattern: t,
    captureTransfers: s,
    hiddenCaptures: n
  };
  if ((r as any) === ("plugin" as any) && (st as any)(t, U`\(\?\(DEFINE\)`, (W as any).DEFAULT)) throw new (Error as any)("DEFINE groups cannot be used with recursion");
  const o: any = [],
    a: any = (st as any)(t, U`\\[1-9]`, (W as any).DEFAULT),
    i: any = new (Map as any)(),
    l: any = [];
  let c: any = !1,
    u: any = 0,
    h: any = 0,
    d: any;
  for ((me as any).lastIndex = 0; d = ((me as any).exec as any)(t);) {
    const {
      0: p,
      groups: {
        captureName: f,
        rDepth: b,
        gRNameOrNum: g,
        gRDepth: y
      }
    }: any = d;
    if ((p as any) === ("[" as any)) u++;else if (u) (p as any) === ("]" as any) && u--;else if (b) {
      if ((yr as any)(b), c) throw new (Error as any)(Ht);
      if (a) throw new (Error as any)(`${(r as any) === ("external" as any) ? "Backrefs" : "Numbered backrefs"} cannot be used with global recursion`);
      const m: any = ((t as any).slice as any)(0, (d as any).index),
        w: any = ((t as any).slice as any)((me as any).lastIndex);
      if ((st as any)(w, gn, (W as any).DEFAULT)) throw new (Error as any)(Ht);
      const _: any = (+b as any) - (1 as any);
      t = (br as any)(m, w, _, !1, n, o, h), s = (kr as any)(s, m, _, (o as any).length, 0, h);
      break;
    } else if (g) {
      (yr as any)(y);
      let m: any = !1;
      for (const T of l) if (((T as any).name as any) === (g as any) || ((T as any).num as any) === (+g as any)) {
        if (m = !0, (T as any).hasRecursedWithin) throw new (Error as any)(Ht);
        break;
      }
      if (!m) throw new (Error as any)(U`Recursive \g cannot be used outside the referenced group "${(r as any) === ("external" as any) ? g : U`\g<${g}&R=${y}>`}"`);
      const w: any = ((i as any).get as any)(g),
        _: any = (Hl as any)(t, w);
      if (a && (st as any)(_, U`${Lt}|\((?!\?)`, (W as any).DEFAULT)) throw new (Error as any)(`${(r as any) === ("external" as any) ? "Backrefs" : "Numbered backrefs"} cannot be used with recursion of capturing groups`);
      const C: any = ((t as any).slice as any)(w, (d as any).index),
        v: any = ((_ as any).slice as any)(((C as any).length as any) + ((p as any).length as any)),
        $: any = (o as any).length,
        B: any = (+y as any) - (1 as any),
        ce: any = (br as any)(C, v, B, !0, n, o, h);
      s = (kr as any)(s, C, B, ((o as any).length as any) - ($ as any), $, h);
      const ue: any = ((t as any).slice as any)(0, w),
        H: any = ((t as any).slice as any)((w as any) + ((_ as any).length as any));
      t = `${ue}${ce}${H}`, (me as any).lastIndex += ((((ce as any).length as any) - ((p as any).length as any) as any) - ((C as any).length as any) as any) - ((v as any).length as any), ((l as any).forEach as any)((T: any): any => (T as any).hasRecursedWithin = !0), c = !0;
    } else if (f) h++, ((i as any).set as any)((String as any)(h), (me as any).lastIndex), ((i as any).set as any)(f, (me as any).lastIndex), ((l as any).push as any)({
      num: h,
      name: f
    });else if (((p as any)[0] as any) === ("(" as any)) {
      const m: any = (p as any) === ("(" as any);
      m && (h++, ((i as any).set as any)((String as any)(h), (me as any).lastIndex)), ((l as any).push as any)(m ? {
        num: h
      } : {});
    } else (p as any) === (")" as any) && ((l as any).pop as any)();
  }
  return ((n as any).push as any)(...o), {
    pattern: t,
    captureTransfers: s,
    hiddenCaptures: n
  };
}
function yr(this: any, t: any): any {
  const e: any = `Max depth must be integer between 2 and 100; used ${t}`;
  if (!((/^[1-9]\d*$/ as any).test as any)(t)) throw new (Error as any)(e);
  if (t = +t, (t as any) < (2 as any) || (t as any) > (100 as any)) throw new (Error as any)(e);
}
function br(this: any, t: any, e: any, n: any, r: any, s: any, o: any, a: any): any {
  const i: any = new (Set as any)();
  r && (Is as any)((t as any) + (e as any), Lt, ({
    groups: {
      captureName: c
    }
  }: any): any => {
    ((i as any).add as any)(c);
  }, (W as any).DEFAULT);
  const l: any = [n, r ? i : null, s, o, a];
  return `${t}${(wr as any)(`(?:${t}`, "forward", ...l)}(?:)${(wr as any)(`${e})`, "backward", ...l)}${e}`;
}
function wr(this: any, t: any, e: any, n: any, r: any, s: any, o: any, a: any): any {
  const l: any = (u: any): any => (e as any) === ("forward" as any) ? (u as any) + (2 as any) : (((n as any) - (u as any) as any) + (2 as any) as any) - (1 as any);
  let c: any = "";
  for (let u: any = 0; (u as any) < (n as any); u++) {
    const h: any = (l as any)(u);
    c += (Rn as any)(t, U`${Rs}|\\k<(?<backref>[^>]+)>`, ({
      0: d,
      groups: {
        captureName: p,
        unnamed: f,
        backref: b
      }
    }: any): any => {
      if (b && r && !((r as any).has as any)(b)) return d;
      const g: any = `_$${h}`;
      if (f || p) {
        const y: any = ((a as any) + ((o as any).length as any) as any) + (1 as any);
        return ((o as any).push as any)(y), (Zl as any)(s, y), f ? d : `(?<${p}${g}>`;
      }
      return U`\k<${b}${g}>`;
    }, (W as any).DEFAULT);
  }
  return c;
}
function Zl(this: any, t: any, e: any): any {
  for (let n: any = 0; (n as any) < ((t as any).length as any); n++) ((t as any)[n] as any) >= (e as any) && (t as any)[n]++;
}
function kr(this: any, t: any, e: any, n: any, r: any, s: any, o: any): any {
  if ((t as any).size && r) {
    let a: any = 0;
    (Is as any)(e, Rs, (): any => a++, (W as any).DEFAULT);
    const i: any = ((o as any) - (a as any) as any) + (s as any),
      l: any = new (Map as any)();
    return ((t as any).forEach as any)((c: any, u: any): any => {
      const h: any = ((r as any) - ((a as any) * (n as any) as any) as any) / (n as any),
        d: any = (a as any) * (n as any),
        p: any = (u as any) > ((i as any) + (a as any) as any) ? (u as any) + (r as any) : u,
        f: any = [];
      for (const b of c) if ((b as any) <= (i as any)) ((f as any).push as any)(b);else if ((b as any) > (((i as any) + (a as any) as any) + (h as any) as any)) ((f as any).push as any)((b as any) + (r as any));else if ((b as any) <= ((i as any) + (a as any) as any)) for (let g: any = 0; (g as any) <= (n as any); g++) ((f as any).push as any)((b as any) + ((a as any) * (g as any) as any));else for (let g: any = 0; (g as any) <= (n as any); g++) ((f as any).push as any)(((b as any) + (d as any) as any) + ((h as any) * (g as any) as any));
      ((l as any).set as any)(p, f);
    }), l;
  }
  return t;
}
var N: any = (String as any).fromCodePoint,
  k: any = (String as any).raw,
  ne: any = {
    flagGroups: (((): any => {
      try {
        new (RegExp as any)("(?i:)");
      } catch {
        return !1;
      }
      return !0;
    }) as any)(),
    unicodeSets: (((): any => {
      try {
        new (RegExp as any)("[[]]", "v");
      } catch {
        return !1;
      }
      return !0;
    }) as any)()
  };
(ne as any).bugFlagVLiteralHyphenIsRange = (ne as any).unicodeSets ? (((): any => {
  try {
    new (RegExp as any)(k`[\d\-a]`, "v");
  } catch {
    return !0;
  }
  return !1;
}) as any)() : !1;
(ne as any).bugNestedClassIgnoresNegation = (ne as any).unicodeSets && ((new (RegExp as any)("[[^a]]", "v") as any).test as any)("a");
function _t(this: any, t: any, {
  enable: e,
  disable: n
}: any): any {
  return {
    dotAll: !n?.dotAll && !!(e?.dotAll || (t as any).dotAll),
    ignoreCase: !n?.ignoreCase && !!(e?.ignoreCase || (t as any).ignoreCase)
  };
}
function qe(this: any, t: any, e: any, n: any): any {
  return ((t as any).has as any)(e) || ((t as any).set as any)(e, n), ((t as any).get as any)(e);
}
function mn(this: any, t: any, e: any): any {
  return ((Cr as any)[t] as any) >= ((Cr as any)[e] as any);
}
function Yl(this: any, t: any, e: any): any {
  if ((t as any) == (null as any)) throw new (Error as any)(e ?? "Value expected");
  return t;
}
var Cr: any = {
    ES2025: 2025,
    ES2024: 2024,
    ES2018: 2018
  },
  Jl: any = {
    auto: "auto",
    ES2025: "ES2025",
    ES2024: "ES2024",
    ES2018: "ES2018"
  };
function $s(this: any, t: any = {}): any {
  if ((((({} as any).toString as any).call as any)(t) as any) !== ("[object Object]" as any)) throw new (Error as any)("Unexpected options");
  if (((t as any).target as any) !== (void 0 as any) && !(Jl as any)[(t as any).target]) throw new (Error as any)(`Unexpected target "${(t as any).target}"`);
  const e: any = {
    accuracy: "default",
    avoidSubclass: !1,
    flags: "",
    global: !1,
    hasIndices: !1,
    lazyCompileLength: (1 as any) / (0 as any),
    target: "auto",
    verbose: !1,
    ...t,
    rules: {
      allowOrphanBackrefs: !1,
      asciiWordBoundaries: !1,
      captureGroup: !1,
      recursionLimit: 20,
      singleline: !1,
      ...(t as any).rules
    }
  };
  return ((e as any).target as any) === ("auto" as any) && ((e as any).target = (ne as any).flagGroups ? "ES2025" : (ne as any).unicodeSets ? "ES2024" : "ES2018"), e;
}
var ec: string = "[	-\r ]",
  tc: any = new (Set as any)([(N as any)(304), (N as any)(305)]),
  J: any = k`[\p{L}\p{M}\p{N}\p{Pc}]`;
function Ls(this: any, t: any): any {
  if (((tc as any).has as any)(t)) return [t];
  const e: any = new (Set as any)(),
    n: any = ((t as any).toLowerCase as any)(),
    r: any = ((n as any).toUpperCase as any)(),
    s: any = ((sc as any).get as any)(n),
    o: any = ((nc as any).get as any)(n),
    a: any = ((rc as any).get as any)(n);
  return (([...r] as any).length as any) === (1 as any) && ((e as any).add as any)(r), a && ((e as any).add as any)(a), s && ((e as any).add as any)(s), ((e as any).add as any)(n), o && ((e as any).add as any)(o), [...e];
}
var $n: any = new (Map as any)(((((`C Other
Cc Control cntrl
Cf Format
Cn Unassigned
Co Private_Use
Cs Surrogate
L Letter
LC Cased_Letter
Ll Lowercase_Letter
Lm Modifier_Letter
Lo Other_Letter
Lt Titlecase_Letter
Lu Uppercase_Letter
M Mark Combining_Mark
Mc Spacing_Mark
Me Enclosing_Mark
Mn Nonspacing_Mark
N Number
Nd Decimal_Number digit
Nl Letter_Number
No Other_Number
P Punctuation punct
Pc Connector_Punctuation
Pd Dash_Punctuation
Pe Close_Punctuation
Pf Final_Punctuation
Pi Initial_Punctuation
Po Other_Punctuation
Ps Open_Punctuation
S Symbol
Sc Currency_Symbol
Sk Modifier_Symbol
Sm Math_Symbol
So Other_Symbol
Z Separator
Zl Line_Separator
Zp Paragraph_Separator
Zs Space_Separator
ASCII
ASCII_Hex_Digit AHex
Alphabetic Alpha
Any
Assigned
Bidi_Control Bidi_C
Bidi_Mirrored Bidi_M
Case_Ignorable CI
Cased
Changes_When_Casefolded CWCF
Changes_When_Casemapped CWCM
Changes_When_Lowercased CWL
Changes_When_NFKC_Casefolded CWKCF
Changes_When_Titlecased CWT
Changes_When_Uppercased CWU
Dash
Default_Ignorable_Code_Point DI
Deprecated Dep
Diacritic Dia
Emoji
Emoji_Component EComp
Emoji_Modifier EMod
Emoji_Modifier_Base EBase
Emoji_Presentation EPres
Extended_Pictographic ExtPict
Extender Ext
Grapheme_Base Gr_Base
Grapheme_Extend Gr_Ext
Hex_Digit Hex
IDS_Binary_Operator IDSB
IDS_Trinary_Operator IDST
ID_Continue IDC
ID_Start IDS
Ideographic Ideo
Join_Control Join_C
Logical_Order_Exception LOE
Lowercase Lower
Math
Noncharacter_Code_Point NChar
Pattern_Syntax Pat_Syn
Pattern_White_Space Pat_WS
Quotation_Mark QMark
Radical
Regional_Indicator RI
Sentence_Terminal STerm
Soft_Dotted SD
Terminal_Punctuation Term
Unified_Ideograph UIdeo
Uppercase Upper
Variation_Selector VS
White_Space space
XID_Continue XIDC
XID_Start XIDS` as any).split as any)(/\s/) as any).map as any)((t: any): any => [($t as any)(t), t])),
  nc: any = new (Map as any)([["s", (N as any)(383)], [(N as any)(383), "s"]]),
  rc: any = new (Map as any)([[(N as any)(223), (N as any)(7838)], [(N as any)(107), (N as any)(8490)], [(N as any)(229), (N as any)(8491)], [(N as any)(969), (N as any)(8486)]]),
  sc: any = new (Map as any)([(se as any)(453), (se as any)(456), (se as any)(459), (se as any)(498), ...(Vt as any)(8072, 8079), ...(Vt as any)(8088, 8095), ...(Vt as any)(8104, 8111), (se as any)(8124), (se as any)(8140), (se as any)(8188)]),
  oc: any = new (Map as any)([["alnum", k`[\p{Alpha}\p{Nd}]`], ["alpha", k`\p{Alpha}`], ["ascii", k`\p{ASCII}`], ["blank", k`[\p{Zs}\t]`], ["cntrl", k`\p{Cc}`], ["digit", k`\p{Nd}`], ["graph", k`[\P{space}&&\P{Cc}&&\P{Cn}&&\P{Cs}]`], ["lower", k`\p{Lower}`], ["print", k`[[\P{space}&&\P{Cc}&&\P{Cn}&&\P{Cs}]\p{Zs}]`], ["punct", k`[\p{P}\p{S}]`], ["space", k`\p{space}`], ["upper", k`\p{Upper}`], ["word", k`[\p{Alpha}\p{M}\p{Nd}\p{Pc}]`], ["xdigit", k`\p{AHex}`]]);
function ac(this: any, t: any, e: any): any {
  const n: any = [];
  for (let r: any = t; (r as any) <= (e as any); r++) ((n as any).push as any)(r);
  return n;
}
function se(this: any, t: any): any {
  const e: any = (N as any)(t);
  return [((e as any).toLowerCase as any)(), e];
}
function Vt(this: any, t: any, e: any): any {
  return (((ac as any)(t, e) as any).map as any)((n: any): any => (se as any)(n));
}
var Ps: any = new (Set as any)(["Lower", "Lowercase", "Upper", "Uppercase", "Ll", "Lowercase_Letter", "Lt", "Titlecase_Letter", "Lu", "Uppercase_Letter"]);
function ic(this: any, t: any, e: any): any {
  const n: any = {
    accuracy: "default",
    asciiWordBoundaries: !1,
    avoidSubclass: !1,
    bestEffortTarget: "ES2025",
    ...e
  };
  (Ts as any)(t);
  const r: any = {
    accuracy: (n as any).accuracy,
    asciiWordBoundaries: (n as any).asciiWordBoundaries,
    avoidSubclass: (n as any).avoidSubclass,
    flagDirectivesByAlt: new (Map as any)(),
    jsGroupNameMap: new (Map as any)(),
    minTargetEs2024: (mn as any)((n as any).bestEffortTarget, "ES2024"),
    passedLookbehind: !1,
    strategy: null,
    subroutineRefMap: new (Map as any)(),
    supportedGNodes: new (Set as any)(),
    digitIsAscii: ((t as any).flags as any).digitIsAscii,
    spaceIsAscii: ((t as any).flags as any).spaceIsAscii,
    wordIsAscii: ((t as any).flags as any).wordIsAscii
  };
  (Fe as any)(t, lc, r);
  const s: any = {
      dotAll: ((t as any).flags as any).dotAll,
      ignoreCase: ((t as any).flags as any).ignoreCase
    },
    o: any = {
      currentFlags: s,
      prevFlags: null,
      globalFlags: s,
      groupOriginByCopy: new (Map as any)(),
      groupsByName: new (Map as any)(),
      multiplexCapturesToLeftByRef: new (Map as any)(),
      openRefs: new (Map as any)(),
      reffedNodesByReferencer: new (Map as any)(),
      subroutineRefMap: (r as any).subroutineRefMap
    };
  (Fe as any)(t, cc, o);
  const a: any = {
    groupsByName: (o as any).groupsByName,
    highestOrphanBackref: 0,
    numCapturesToLeft: 0,
    reffedNodesByReferencer: (o as any).reffedNodesByReferencer
  };
  return (Fe as any)(t, uc, a), (t as any)._originMap = (o as any).groupOriginByCopy, (t as any)._strategy = (r as any).strategy, t;
}
var lc: any = {
    AbsenceFunction({
      node: t,
      parent: e,
      replaceWith: n
    }: any): any {
      const {
        body: r,
        kind: s
      }: any = t;
      if ((s as any) === ("repeater" as any)) {
        const o: any = (q as any)();
        (((((o as any).body as any)[0] as any).body as any).push as any)((be as any)({
          negate: !0,
          body: r
        }), (Ie as any)("Any"));
        const a: any = (q as any)();
        (((((a as any).body as any)[0] as any).body as any).push as any)((vs as any)("greedy", 0, (1 as any) / (0 as any), o)), (n as any)((E as any)(a, e), {
          traverse: !0
        });
      } else throw new (Error as any)('Unsupported absence function "(?~|"');
    },
    Alternative: {
      enter({
        node: t,
        parent: e,
        key: n
      }: any, {
        flagDirectivesByAlt: r
      }: any): any {
        const s: any = (((t as any).body as any).filter as any)((o: any): any => ((o as any).kind as any) === ("flags" as any));
        for (let o: any = (n as any) + (1 as any); (o as any) < (((e as any).body as any).length as any); o++) {
          const a: any = ((e as any).body as any)[o];
          (((qe as any)(r, a, []) as any).push as any)(...s);
        }
      },
      exit({
        node: t
      }: any, {
        flagDirectivesByAlt: e
      }: any): any {
        if (((e as any).get as any)(t)?.length) {
          const n: any = (Os as any)(((e as any).get as any)(t));
          if (n) {
            const r: any = (q as any)({
              flags: n
            });
            (((r as any).body as any)[0] as any).body = (t as any).body, (t as any).body = [(E as any)(r, t)];
          }
        }
      }
    },
    Assertion({
      node: t,
      parent: e,
      key: n,
      container: r,
      root: s,
      remove: o,
      replaceWith: a
    }: any, i: any): any {
      const {
          kind: l,
          negate: c
        }: any = t,
        {
          asciiWordBoundaries: u,
          avoidSubclass: h,
          supportedGNodes: d,
          wordIsAscii: p
        }: any = i;
      if ((l as any) === ("text_segment_boundary" as any)) throw new (Error as any)(`Unsupported text segment boundary "\\${c ? "Y" : "y"}"`);
      if ((l as any) === ("line_end" as any)) (a as any)((E as any)((be as any)({
        body: [(_e as any)({
          body: [(dn as any)("string_end")]
        }), (_e as any)({
          body: [(Rt as any)(10)]
        })]
      }), e));else if ((l as any) === ("line_start" as any)) (a as any)((E as any)((ee as any)(k`(?<=\A|\n(?!\z))`, {
        skipLookbehindValidation: !0
      }), e));else if ((l as any) === ("search_start" as any)) {
        if (((d as any).has as any)(t)) ((s as any).flags as any).sticky = !0, (o as any)();else {
          const f: any = (r as any)[(n as any) - (1 as any)];
          if (f && (mc as any)(f)) (a as any)((E as any)((be as any)({
            negate: !0
          }), e));else {
            if (h) throw new (Error as any)(k`Uses "\G" in a way that requires a subclass`);
            (a as any)((oe as any)((dn as any)("string_start"), e)), (i as any).strategy = "clip_search";
          }
        }
      } else if (!((l as any) === ("string_end" as any) || (l as any) === ("string_start" as any))) if ((l as any) === ("string_end_newline" as any)) (a as any)((E as any)((ee as any)(k`(?=\n?\z)`), e));else if ((l as any) === ("word_boundary" as any)) {
        if (!p && !u) {
          const f: any = `(?:(?<=${J})(?!${J})|(?<!${J})(?=${J}))`,
            b: any = `(?:(?<=${J})(?=${J})|(?<!${J})(?!${J}))`;
          (a as any)((E as any)((ee as any)(c ? b : f), e));
        }
      } else throw new (Error as any)(`Unexpected assertion kind "${l}"`);
    },
    Backreference({
      node: t
    }: any, {
      jsGroupNameMap: e
    }: any): any {
      let {
        ref: n
      }: any = t;
      (typeof n as any) == ("string" as any) && !(Kt as any)(n) && (n = (Xt as any)(n, e), (t as any).ref = n);
    },
    CapturingGroup({
      node: t
    }: any, {
      jsGroupNameMap: e,
      subroutineRefMap: n
    }: any): any {
      let {
        name: r
      }: any = t;
      r && !(Kt as any)(r) && (r = (Xt as any)(r, e), (t as any).name = r), ((n as any).set as any)((t as any).number, t), r && ((n as any).set as any)(r, t);
    },
    CharacterClassRange({
      node: t,
      parent: e,
      replaceWith: n
    }: any): any {
      if (((e as any).kind as any) === ("intersection" as any)) {
        const r: any = (ut as any)({
          body: [t]
        });
        (n as any)((E as any)(r, e), {
          traverse: !0
        });
      }
    },
    CharacterSet({
      node: t,
      parent: e,
      replaceWith: n
    }: any, {
      accuracy: r,
      minTargetEs2024: s,
      digitIsAscii: o,
      spaceIsAscii: a,
      wordIsAscii: i
    }: any): any {
      const {
        kind: l,
        negate: c,
        value: u
      }: any = t;
      if (o && ((l as any) === ("digit" as any) || (u as any) === ("digit" as any))) {
        (n as any)((oe as any)((fn as any)("digit", {
          negate: c
        }), e));
        return;
      }
      if (a && ((l as any) === ("space" as any) || (u as any) === ("space" as any))) {
        (n as any)((E as any)((Qt as any)((ee as any)(ec), c), e));
        return;
      }
      if (i && ((l as any) === ("word" as any) || (u as any) === ("word" as any))) {
        (n as any)((oe as any)((fn as any)("word", {
          negate: c
        }), e));
        return;
      }
      if ((l as any) === ("any" as any)) (n as any)((oe as any)((Ie as any)("Any"), e));else if ((l as any) === ("digit" as any)) (n as any)((oe as any)((Ie as any)("Nd", {
        negate: c
      }), e));else if ((l as any) !== ("dot" as any)) if ((l as any) === ("text_segment" as any)) {
        if ((r as any) === ("strict" as any)) throw new (Error as any)(k`Use of "\X" requires non-strict accuracy`);
        const h: string = "\\p{Emoji}(?:\\p{EMod}|\\uFE0F\\u20E3?|[\\x{E0020}-\\x{E007E}]+\\x{E007F})?",
          d: any = k`\p{RI}{2}|${h}(?:\u200D${h})*`;
        (n as any)((E as any)((ee as any)(k`(?>\r\n|${s ? k`\p{RGI_Emoji}` : d}|\P{M}\p{M}*)`, {
          skipPropertyNameValidation: !0
        }), e));
      } else if ((l as any) === ("hex" as any)) (n as any)((oe as any)((Ie as any)("AHex", {
        negate: c
      }), e));else if ((l as any) === ("newline" as any)) (n as any)((E as any)((ee as any)(c ? `[^
]` : `(?>\r
?|[
\v\f\u2028\u2029])`), e));else if ((l as any) === ("posix" as any)) {
        if (!s && ((u as any) === ("graph" as any) || (u as any) === ("print" as any))) {
          if ((r as any) === ("strict" as any)) throw new (Error as any)(`POSIX class "${u}" requires min target ES2024 or non-strict accuracy`);
          let h: any = ({
            graph: "!-~",
            print: " -~"
          } as any)[u];
          c && (h = `\0-${(N as any)((((h as any).codePointAt as any)(0) as any) - (1 as any))}${(N as any)((((h as any).codePointAt as any)(2) as any) + (1 as any))}-\uDBFF\uDFFF`), (n as any)((E as any)((ee as any)(`[${h}]`), e));
        } else (n as any)((E as any)((Qt as any)((ee as any)(((oc as any).get as any)(u)), c), e));
      } else if ((l as any) === ("property" as any)) (($n as any).has as any)(($t as any)(u)) || ((t as any).key = "sc");else if ((l as any) === ("space" as any)) (n as any)((oe as any)((Ie as any)("space", {
        negate: c
      }), e));else if ((l as any) === ("word" as any)) (n as any)((E as any)((Qt as any)((ee as any)(J), c), e));else throw new (Error as any)(`Unexpected character set kind "${l}"`);
    },
    Directive({
      node: t,
      parent: e,
      root: n,
      remove: r,
      replaceWith: s,
      removeAllPrevSiblings: o,
      removeAllNextSiblings: a
    }: any): any {
      const {
        kind: i,
        flags: l
      }: any = t;
      if ((i as any) === ("flags" as any)) {
        if (!(l as any).enable && !(l as any).disable) (r as any)();else {
          const c: any = (q as any)({
            flags: l
          });
          (((c as any).body as any)[0] as any).body = (a as any)(), (s as any)((E as any)(c, e), {
            traverse: !0
          });
        }
      } else if ((i as any) === ("keep" as any)) {
        const c: any = ((n as any).body as any)[0],
          h: any = (((n as any).body as any).length as any) === (1 as any) && (_s as any)(c, {
            type: "Group"
          }) && (((((c as any).body as any)[0] as any).body as any).length as any) === (1 as any) ? ((c as any).body as any)[0] : n;
        if (((e as any).parent as any) !== (h as any) || (((h as any).body as any).length as any) > (1 as any)) throw new (Error as any)(k`Uses "\K" in a way that's unsupported`);
        const d: any = (be as any)({
          behind: !0
        });
        (((d as any).body as any)[0] as any).body = (o as any)(), (s as any)((E as any)(d, e));
      } else throw new (Error as any)(`Unexpected directive kind "${i}"`);
    },
    Flags({
      node: t,
      parent: e
    }: any): any {
      if ((t as any).posixIsAscii) throw new (Error as any)('Unsupported flag "P"');
      if (((t as any).textSegmentMode as any) === ("word" as any)) throw new (Error as any)('Unsupported flag "y{w}"');
      ((["digitIsAscii", "extended", "posixIsAscii", "spaceIsAscii", "wordIsAscii", "textSegmentMode"] as any).forEach as any)((n: any): any => delete (t as any)[n]), ((Object as any).assign as any)(t, {
        global: !1,
        hasIndices: !1,
        multiline: !1,
        sticky: (t as any).sticky ?? !1
      }), (e as any).options = {
        disable: {
          x: !0,
          n: !0
        },
        force: {
          v: !0
        }
      };
    },
    Group({
      node: t
    }: any): any {
      if (!(t as any).flags) return;
      const {
        enable: e,
        disable: n
      }: any = (t as any).flags;
      e?.extended && delete (e as any).extended, n?.extended && delete (n as any).extended, e?.dotAll && n?.dotAll && delete (e as any).dotAll, e?.ignoreCase && n?.ignoreCase && delete (e as any).ignoreCase, e && !(((Object as any).keys as any)(e) as any).length && delete ((t as any).flags as any).enable, n && !(((Object as any).keys as any)(n) as any).length && delete ((t as any).flags as any).disable, !((t as any).flags as any).enable && !((t as any).flags as any).disable && delete (t as any).flags;
    },
    LookaroundAssertion({
      node: t
    }: any, e: any): any {
      const {
        kind: n
      }: any = t;
      (n as any) === ("lookbehind" as any) && ((e as any).passedLookbehind = !0);
    },
    NamedCallout({
      node: t,
      parent: e,
      replaceWith: n
    }: any): any {
      const {
        kind: r
      }: any = t;
      if ((r as any) === ("fail" as any)) (n as any)((E as any)((be as any)({
        negate: !0
      }), e));else throw new (Error as any)(`Unsupported named callout "(*${((r as any).toUpperCase as any)()}"`);
    },
    Quantifier({
      node: t
    }: any): any {
      if ((((t as any).body as any).type as any) === ("Quantifier" as any)) {
        const e: any = (q as any)();
        (((((e as any).body as any)[0] as any).body as any).push as any)((t as any).body), (t as any).body = (E as any)(e, t);
      }
    },
    Regex: {
      enter({
        node: t
      }: any, {
        supportedGNodes: e
      }: any): any {
        const n: any = [];
        let r: any = !1,
          s: any = !1;
        for (const o of (t as any).body) if ((((o as any).body as any).length as any) === (1 as any) && ((((o as any).body as any)[0] as any).kind as any) === ("search_start" as any)) (((o as any).body as any).pop as any)();else {
          const a: any = (Bs as any)((o as any).body);
          a ? (r = !0, ((Array as any).isArray as any)(a) ? ((n as any).push as any)(...a) : ((n as any).push as any)(a)) : s = !0;
        }
        r && !s && ((n as any).forEach as any)((o: any): any => ((e as any).add as any)(o));
      },
      exit(t: any, {
        accuracy: e,
        passedLookbehind: n,
        strategy: r
      }: any): any {
        if ((e as any) === ("strict" as any) && n && r) throw new (Error as any)(k`Uses "\G" in a way that requires non-strict accuracy`);
      }
    },
    Subroutine({
      node: t
    }: any, {
      jsGroupNameMap: e
    }: any): any {
      let {
        ref: n
      }: any = t;
      (typeof n as any) == ("string" as any) && !(Kt as any)(n) && (n = (Xt as any)(n, e), (t as any).ref = n);
    }
  },
  cc: any = {
    Backreference({
      node: t
    }: any, {
      multiplexCapturesToLeftByRef: e,
      reffedNodesByReferencer: n
    }: any): any {
      const {
        orphan: r,
        ref: s
      }: any = t;
      r || ((n as any).set as any)(t, [...((((e as any).get as any)(s) as any).map as any)(({
        node: o
      }: any): any => o)]);
    },
    CapturingGroup: {
      enter({
        node: t,
        parent: e,
        replaceWith: n,
        skip: r
      }: any, {
        groupOriginByCopy: s,
        groupsByName: o,
        multiplexCapturesToLeftByRef: a,
        openRefs: i,
        reffedNodesByReferencer: l
      }: any): any {
        const c: any = ((s as any).get as any)(t);
        if (c && ((i as any).has as any)((t as any).number)) {
          const h: any = (oe as any)((_r as any)((t as any).number), e);
          ((l as any).set as any)(h, ((i as any).get as any)((t as any).number)), (n as any)(h);
          return;
        }
        ((i as any).set as any)((t as any).number, t), ((a as any).set as any)((t as any).number, []), (t as any).name && (qe as any)(a, (t as any).name, []);
        const u: any = ((a as any).get as any)((t as any).name ?? (t as any).number);
        for (let h: any = 0; (h as any) < ((u as any).length as any); h++) {
          const d: any = (u as any)[h];
          if ((c as any) === ((d as any).node as any) || c && (c as any) === ((d as any).origin as any) || (t as any) === ((d as any).origin as any)) {
            ((u as any).splice as any)(h, 1);
            break;
          }
        }
        if (((((a as any).get as any)((t as any).number) as any).push as any)({
          node: t,
          origin: c
        }), (t as any).name && ((((a as any).get as any)((t as any).name) as any).push as any)({
          node: t,
          origin: c
        }), (t as any).name) {
          const h: any = (qe as any)(o, (t as any).name, new (Map as any)());
          let d: any = !1;
          if (c) d = !0;else for (const p of ((h as any).values as any)()) if (!(p as any).hasDuplicateNameToRemove) {
            d = !0;
            break;
          }
          ((((o as any).get as any)((t as any).name) as any).set as any)(t, {
            node: t,
            hasDuplicateNameToRemove: d
          });
        }
      },
      exit({
        node: t
      }: any, {
        openRefs: e
      }: any): any {
        ((e as any).delete as any)((t as any).number);
      }
    },
    Group: {
      enter({
        node: t
      }: any, e: any): any {
        (e as any).prevFlags = (e as any).currentFlags, (t as any).flags && ((e as any).currentFlags = (_t as any)((e as any).currentFlags, (t as any).flags));
      },
      exit(t: any, e: any): any {
        (e as any).currentFlags = (e as any).prevFlags;
      }
    },
    Subroutine({
      node: t,
      parent: e,
      replaceWith: n
    }: any, r: any): any {
      const {
        isRecursive: s,
        ref: o
      }: any = t;
      if (s) {
        let u: any = e;
        for (; (u = (u as any).parent) && !(((u as any).type as any) === ("CapturingGroup" as any) && (((u as any).name as any) === (o as any) || ((u as any).number as any) === (o as any))););
        (((r as any).reffedNodesByReferencer as any).set as any)(t, u);
        return;
      }
      const a: any = (((r as any).subroutineRefMap as any).get as any)(o),
        i: any = (o as any) === (0 as any),
        l: any = i ? (_r as any)(0) : (Ms as any)(a, (r as any).groupOriginByCopy, null);
      let c: any = l;
      if (!i) {
        const u: any = (Os as any)((pc as any)(a, (d: any): any => ((d as any).type as any) === ("Group" as any) && !!(d as any).flags)),
          h: any = u ? (_t as any)((r as any).globalFlags, u) : (r as any).globalFlags;
        (hc as any)(h, (r as any).currentFlags) || (c = (q as any)({
          flags: (fc as any)(h)
        }), (((((c as any).body as any)[0] as any).body as any).push as any)(l));
      }
      (n as any)((E as any)(c, e), {
        traverse: !i
      });
    }
  },
  uc: any = {
    Backreference({
      node: t,
      parent: e,
      replaceWith: n
    }: any, r: any): any {
      if ((t as any).orphan) {
        (r as any).highestOrphanBackref = ((Math as any).max as any)((r as any).highestOrphanBackref, (t as any).ref);
        return;
      }
      const o: any = (((((r as any).reffedNodesByReferencer as any).get as any)(t) as any).filter as any)((a: any): any => (dc as any)(a, t));
      if (!(o as any).length) (n as any)((E as any)((be as any)({
        negate: !0
      }), e));else if (((o as any).length as any) > (1 as any)) {
        const a: any = (q as any)({
          atomic: !0,
          body: ((((o as any).reverse as any)() as any).map as any)((i: any): any => (_e as any)({
            body: [(pn as any)((i as any).number)]
          }))
        });
        (n as any)((E as any)(a, e));
      } else (t as any).ref = ((o as any)[0] as any).number;
    },
    CapturingGroup({
      node: t
    }: any, e: any): any {
      (t as any).number = ++(e as any).numCapturesToLeft, (t as any).name && ((((((e as any).groupsByName as any).get as any)((t as any).name) as any).get as any)(t) as any).hasDuplicateNameToRemove && delete (t as any).name;
    },
    Regex: {
      exit({
        node: t
      }: any, e: any): any {
        const n: any = ((Math as any).max as any)(((e as any).highestOrphanBackref as any) - ((e as any).numCapturesToLeft as any), 0);
        for (let r: any = 0; (r as any) < (n as any); r++) {
          const s: any = (xs as any)();
          ((((((t as any).body as any).at as any)(-1) as any).body as any).push as any)(s);
        }
      }
    },
    Subroutine({
      node: t
    }: any, e: any): any {
      !(t as any).isRecursive || ((t as any).ref as any) === (0 as any) || ((t as any).ref = ((((e as any).reffedNodesByReferencer as any).get as any)(t) as any).number);
    }
  };
function Ts(this: any, t: any): any {
  (Fe as any)(t, {
    "*"({
      node: e,
      parent: n
    }: any): any {
      (e as any).parent = n;
    }
  });
}
function hc(this: any, t: any, e: any): any {
  return ((t as any).dotAll as any) === ((e as any).dotAll as any) && ((t as any).ignoreCase as any) === ((e as any).ignoreCase as any);
}
function dc(this: any, t: any, e: any): any {
  let n: any = e;
  do {
    if (((n as any).type as any) === ("Regex" as any)) return !1;
    if (((n as any).type as any) === ("Alternative" as any)) continue;
    if ((n as any) === (t as any)) return !1;
    const r: any = (Gs as any)((n as any).parent);
    for (const s of r) {
      if ((s as any) === (n as any)) break;
      if ((s as any) === (t as any) || (Fs as any)(s, t)) return !0;
    }
  } while (n = (n as any).parent);
  throw new (Error as any)("Unexpected path");
}
function Ms(this: any, t: any, e: any, n: any, r: any): any {
  const s: any = ((Array as any).isArray as any)(t) ? [] : {};
  for (const [o, a] of ((Object as any).entries as any)(t)) (o as any) === ("parent" as any) ? (s as any).parent = ((Array as any).isArray as any)(n) ? r : n : a && (typeof a as any) == ("object" as any) ? (s as any)[o] = (Ms as any)(a, e, s, n) : ((o as any) === ("type" as any) && (a as any) === ("CapturingGroup" as any) && ((e as any).set as any)(s, ((e as any).get as any)(t) ?? t), (s as any)[o] = a);
  return s;
}
function _r(this: any, t: any): any {
  const e: any = (As as any)(t);
  return (e as any).isRecursive = !0, e;
}
function pc(this: any, t: any, e: any): any {
  const n: any = [];
  for (; t = (t as any).parent;) (!e || (e as any)(t)) && ((n as any).push as any)(t);
  return n;
}
function Xt(this: any, t: any, e: any): any {
  if (((e as any).has as any)(t)) return ((e as any).get as any)(t);
  const n: any = `$${(e as any).size}_${((t as any).replace as any)(/^[^$_\p{IDS}]|[^$\u200C\u200D\p{IDC}]/ug, "_")}`;
  return ((e as any).set as any)(t, n), n;
}
function Os(this: any, t: any): any {
  const e: any = ["dotAll", "ignoreCase"],
    n: any = {
      enable: {},
      disable: {}
    };
  return ((t as any).forEach as any)(({
    flags: r
  }: any): any => {
    ((e as any).forEach as any)((s: any): any => {
      (r as any).enable?.[s] && (delete ((n as any).disable as any)[s], ((n as any).enable as any)[s] = !0), (r as any).disable?.[s] && (((n as any).disable as any)[s] = !0);
    });
  }), (((Object as any).keys as any)((n as any).enable) as any).length || delete (n as any).enable, (((Object as any).keys as any)((n as any).disable) as any).length || delete (n as any).disable, (n as any).enable || (n as any).disable ? n : null;
}
function fc(this: any, {
  dotAll: t,
  ignoreCase: e
}: any): any {
  const n: any = {};
  return (t || e) && ((n as any).enable = {}, t && (((n as any).enable as any).dotAll = !0), e && (((n as any).enable as any).ignoreCase = !0)), (!t || !e) && ((n as any).disable = {}, !t && (((n as any).disable as any).dotAll = !0), !e && (((n as any).disable as any).ignoreCase = !0)), n;
}
function Gs(this: any, t: any): any {
  if (!t) throw new (Error as any)("Node expected");
  const {
    body: e
  }: any = t;
  return ((Array as any).isArray as any)(e) ? e : e ? [e] : null;
}
function Bs(this: any, t: any): any {
  const e: any = ((t as any).find as any)((n: any): any => ((n as any).kind as any) === ("search_start" as any) || (yc as any)(n, {
    negate: !1
  }) || !(gc as any)(n));
  if (!e) return null;
  if (((e as any).kind as any) === ("search_start" as any)) return e;
  if (((e as any).type as any) === ("LookaroundAssertion" as any)) return ((((e as any).body as any)[0] as any).body as any)[0];
  if (((e as any).type as any) === ("CapturingGroup" as any) || ((e as any).type as any) === ("Group" as any)) {
    const n: any = [];
    for (const r of (e as any).body) {
      const s: any = (Bs as any)((r as any).body);
      if (!s) return null;
      ((Array as any).isArray as any)(s) ? ((n as any).push as any)(...s) : ((n as any).push as any)(s);
    }
    return n;
  }
  return null;
}
function Fs(this: any, t: any, e: any): any {
  const n: any = (Gs as any)(t) ?? [];
  for (const r of n) if ((r as any) === (e as any) || (Fs as any)(r, e)) return !0;
  return !1;
}
function gc(this: any, {
  type: t
}: any): any {
  return (t as any) === ("Assertion" as any) || (t as any) === ("Directive" as any) || (t as any) === ("LookaroundAssertion" as any);
}
function mc(this: any, t: any): any {
  const e: any = ["Character", "CharacterClass", "CharacterSet"];
  return ((e as any).includes as any)((t as any).type) || ((t as any).type as any) === ("Quantifier" as any) && (t as any).min && ((e as any).includes as any)(((t as any).body as any).type);
}
function yc(this: any, t: any, e: any): any {
  const n: any = {
    negate: null,
    ...e
  };
  return ((t as any).type as any) === ("LookaroundAssertion" as any) && (((n as any).negate as any) === (null as any) || ((t as any).negate as any) === ((n as any).negate as any)) && (((t as any).body as any).length as any) === (1 as any) && (_s as any)(((t as any).body as any)[0], {
    type: "Assertion",
    kind: "search_start"
  });
}
function Kt(this: any, t: any): any {
  return ((/^[$_\p{IDS}][$\u200C\u200D\p{IDC}]*$/u as any).test as any)(t);
}
function ee(this: any, t: any, e: any): any {
  const r: any = ((Ss as any)(t, {
    ...e,
    unicodePropertyMap: $n
  }) as any).body;
  return ((r as any).length as any) > (1 as any) || ((((r as any)[0] as any).body as any).length as any) > (1 as any) ? (q as any)({
    body: r
  }) : (((r as any)[0] as any).body as any)[0];
}
function Qt(this: any, t: any, e: any): any {
  return (t as any).negate = e, t;
}
function oe(this: any, t: any, e: any): any {
  return (t as any).parent = e, t;
}
function E(this: any, t: any, e: any): any {
  return (Ts as any)(t), (t as any).parent = e, t;
}
function bc(this: any, t: any, e: any): any {
  const n: any = ($s as any)(e),
    r: any = (mn as any)((n as any).target, "ES2024"),
    s: any = (mn as any)((n as any).target, "ES2025"),
    o: any = ((n as any).rules as any).recursionLimit;
  if (!((Number as any).isInteger as any)(o) || (o as any) < (2 as any) || (o as any) > (20 as any)) throw new (Error as any)("Invalid recursionLimit; use 2-20");
  let a: any = null,
    i: any = null;
  if (!s) {
    const p: any = [((t as any).flags as any).ignoreCase];
    (Fe as any)(t, wc, {
      getCurrentModI: (): any => ((p as any).at as any)(-1),
      popModI(): any {
        ((p as any).pop as any)();
      },
      pushModI(f: any): any {
        ((p as any).push as any)(f);
      },
      setHasCasedChar(): any {
        ((p as any).at as any)(-1) ? a = !0 : i = !0;
      }
    });
  }
  const l: any = {
    dotAll: ((t as any).flags as any).dotAll,
    ignoreCase: !!((((t as any).flags as any).ignoreCase || a) && !i)
  };
  let c: any = t;
  const u: any = {
    accuracy: (n as any).accuracy,
    appliedGlobalFlags: l,
    captureMap: new (Map as any)(),
    currentFlags: {
      dotAll: ((t as any).flags as any).dotAll,
      ignoreCase: ((t as any).flags as any).ignoreCase
    },
    inCharClass: !1,
    lastNode: c,
    originMap: (t as any)._originMap,
    recursionLimit: o,
    useAppliedIgnoreCase: !!(!s && a && i),
    useFlagMods: s,
    useFlagV: r,
    verbose: (n as any).verbose
  };
  function h(this: any, p: any): any {
    return (u as any).lastNode = c, c = p, ((Yl as any)((kc as any)[(p as any).type], `Unexpected node type "${(p as any).type}"`) as any)(p, u, h);
  }
  const d: any = {
    pattern: (((((t as any).body as any).map as any)(h) as any).join as any)("|"),
    flags: (h as any)((t as any).flags),
    options: {
      ...(t as any).options
    }
  };
  return r || (delete (((d as any).options as any).force as any).v, (((d as any).options as any).disable as any).v = !0, ((d as any).options as any).unicodeSetsPlugin = null), (d as any)._captureTransfers = new (Map as any)(), (d as any)._hiddenCaptures = [], (((u as any).captureMap as any).forEach as any)((p: any, f: any): any => {
    (p as any).hidden && (((d as any)._hiddenCaptures as any).push as any)(f), (p as any).transferTo && (((qe as any)((d as any)._captureTransfers, (p as any).transferTo, []) as any).push as any)(f);
  }), d;
}
var wc: any = {
    "*": {
      enter({
        node: t
      }: any, e: any): any {
        if ((xr as any)(t)) {
          const n: any = ((e as any).getCurrentModI as any)();
          ((e as any).pushModI as any)((t as any).flags ? ((_t as any)({
            ignoreCase: n
          }, (t as any).flags) as any).ignoreCase : n);
        }
      },
      exit({
        node: t
      }: any, e: any): any {
        (xr as any)(t) && ((e as any).popModI as any)();
      }
    },
    Backreference(t: any, e: any): any {
      ((e as any).setHasCasedChar as any)();
    },
    Character({
      node: t
    }: any, e: any): any {
      (Ln as any)((N as any)((t as any).value)) && ((e as any).setHasCasedChar as any)();
    },
    CharacterClassRange({
      node: t,
      skip: e
    }: any, n: any): any {
      (e as any)(), ((Ds as any)(t, {
        firstOnly: !0
      }) as any).length && ((n as any).setHasCasedChar as any)();
    },
    CharacterSet({
      node: t
    }: any, e: any): any {
      ((t as any).kind as any) === ("property" as any) && ((Ps as any).has as any)((t as any).value) && ((e as any).setHasCasedChar as any)();
    }
  },
  kc: any = {
    Alternative({
      body: t
    }: any, e: any, n: any): any {
      return ((((t as any).map as any)(n) as any).join as any)("");
    },
    Assertion({
      kind: t,
      negate: e
    }: any): any {
      if ((t as any) === ("string_end" as any)) return "$";
      if ((t as any) === ("string_start" as any)) return "^";
      if ((t as any) === ("word_boundary" as any)) return e ? k`\B` : k`\b`;
      throw new (Error as any)(`Unexpected assertion kind "${t}"`);
    },
    Backreference({
      ref: t
    }: any, e: any): any {
      if ((typeof t as any) != ("number" as any)) throw new (Error as any)("Unexpected named backref in transformed AST");
      if (!(e as any).useFlagMods && ((e as any).accuracy as any) === ("strict" as any) && ((e as any).currentFlags as any).ignoreCase && !((((e as any).captureMap as any).get as any)(t) as any).ignoreCase) throw new (Error as any)("Use of case-insensitive backref to case-sensitive group requires target ES2025 or non-strict accuracy");
      return ("\\" as any) + (t as any);
    },
    CapturingGroup(t: any, e: any, n: any): any {
      const {
          body: r,
          name: s,
          number: o
        }: any = t,
        a: any = {
          ignoreCase: ((e as any).currentFlags as any).ignoreCase
        },
        i: any = (((e as any).originMap as any).get as any)(t);
      return i && ((a as any).hidden = !0, (o as any) > ((i as any).number as any) && ((a as any).transferTo = (i as any).number)), (((e as any).captureMap as any).set as any)(o, a), `(${s ? `?<${s}>` : ""}${((((r as any).map as any)(n) as any).join as any)("|")})`;
    },
    Character({
      value: t
    }: any, e: any): any {
      const n: any = (N as any)(t),
        r: any = (ve as any)(t, {
          escDigit: (((e as any).lastNode as any).type as any) === ("Backreference" as any),
          inCharClass: (e as any).inCharClass,
          useFlagV: (e as any).useFlagV
        });
      if ((r as any) !== (n as any)) return r;
      if ((e as any).useAppliedIgnoreCase && ((e as any).currentFlags as any).ignoreCase && (Ln as any)(n)) {
        const s: any = (Ls as any)(n);
        return (e as any).inCharClass ? ((s as any).join as any)("") : ((s as any).length as any) > (1 as any) ? `[${((s as any).join as any)("")}]` : (s as any)[0];
      }
      return n;
    },
    CharacterClass(t: any, e: any, n: any): any {
      const {
        kind: r,
        negate: s,
        parent: o
      }: any = t;
      let {
        body: a
      }: any = t;
      if ((r as any) === ("intersection" as any) && !(e as any).useFlagV) throw new (Error as any)("Use of character class intersection requires min target ES2024");
      (ne as any).bugFlagVLiteralHyphenIsRange && (e as any).useFlagV && ((a as any).some as any)(vr) && (a = [(Rt as any)(45), ...((a as any).filter as any)((c: any): any => !(vr as any)(c))]);
      const i: any = (): any => `[${s ? "^" : ""}${((((a as any).map as any)(n) as any).join as any)((r as any) === ("intersection" as any) ? "&&" : "")}]`;
      if (!(e as any).inCharClass) {
        if ((!(e as any).useFlagV || (ne as any).bugNestedClassIgnoresNegation) && !s) {
          const u: any = ((a as any).filter as any)((h: any): any => ((h as any).type as any) === ("CharacterClass" as any) && ((h as any).kind as any) === ("union" as any) && (h as any).negate);
          if ((u as any).length) {
            const h: any = (q as any)(),
              d: any = ((h as any).body as any)[0];
            return (h as any).parent = o, (d as any).parent = h, a = ((a as any).filter as any)((p: any): any => !((u as any).includes as any)(p)), (t as any).body = a, (a as any).length ? ((t as any).parent = d, (((d as any).body as any).push as any)(t)) : (((h as any).body as any).pop as any)(), ((u as any).forEach as any)((p: any): any => {
              const f: any = (_e as any)({
                body: [p]
              });
              (p as any).parent = f, (f as any).parent = h, (((h as any).body as any).push as any)(f);
            }), (n as any)(h);
          }
        }
        (e as any).inCharClass = !0;
        const c: any = (i as any)();
        return (e as any).inCharClass = !1, c;
      }
      const l: any = (a as any)[0];
      if ((r as any) === ("union" as any) && !s && l && ((!(e as any).useFlagV || !(e as any).verbose) && ((o as any).kind as any) === ("union" as any) && !((ne as any).bugFlagVLiteralHyphenIsRange && (e as any).useFlagV) || !(e as any).verbose && ((o as any).kind as any) === ("intersection" as any) && ((a as any).length as any) === (1 as any) && ((l as any).type as any) !== ("CharacterClassRange" as any))) return ((((a as any).map as any)(n) as any).join as any)("");
      if (!(e as any).useFlagV && ((o as any).type as any) === ("CharacterClass" as any)) throw new (Error as any)("Uses nested character class in a way that requires min target ES2024");
      return (i as any)();
    },
    CharacterClassRange(t: any, e: any): any {
      const n: any = ((t as any).min as any).value,
        r: any = ((t as any).max as any).value,
        s: any = {
          escDigit: !1,
          inCharClass: !0,
          useFlagV: (e as any).useFlagV
        },
        o: any = (ve as any)(n, s),
        a: any = (ve as any)(r, s),
        i: any = new (Set as any)();
      if ((e as any).useAppliedIgnoreCase && ((e as any).currentFlags as any).ignoreCase) {
        const l: any = (Ds as any)(t);
        (((vc as any)(l) as any).forEach as any)((u: any): any => {
          ((i as any).add as any)(((Array as any).isArray as any)(u) ? `${(ve as any)((u as any)[0], s)}-${(ve as any)((u as any)[1], s)}` : (ve as any)(u, s));
        });
      }
      return `${o}-${a}${(([...i] as any).join as any)("")}`;
    },
    CharacterSet({
      kind: t,
      negate: e,
      value: n,
      key: r
    }: any, s: any): any {
      if ((t as any) === ("dot" as any)) return ((s as any).currentFlags as any).dotAll ? ((s as any).appliedGlobalFlags as any).dotAll || (s as any).useFlagMods ? "." : "[^]" : k`[^\n]`;
      if ((t as any) === ("digit" as any)) return e ? k`\D` : k`\d`;
      if ((t as any) === ("property" as any)) {
        if ((s as any).useAppliedIgnoreCase && ((s as any).currentFlags as any).ignoreCase && ((Ps as any).has as any)(n)) throw new (Error as any)(`Unicode property "${n}" can't be case-insensitive when other chars have specific case`);
        return `${e ? k`\P` : k`\p`}{${r ? `${r}=` : ""}${n}}`;
      }
      if ((t as any) === ("word" as any)) return e ? k`\W` : k`\w`;
      throw new (Error as any)(`Unexpected character set kind "${t}"`);
    },
    Flags(t: any, e: any): any {
      return (((((e as any).appliedGlobalFlags as any).ignoreCase ? "i" : "") as any) + (((t as any).dotAll ? "s" : "") as any) as any) + (((t as any).sticky ? "y" : "") as any);
    },
    Group({
      atomic: t,
      body: e,
      flags: n,
      parent: r
    }: any, s: any, o: any): any {
      const a: any = (s as any).currentFlags;
      n && ((s as any).currentFlags = (_t as any)(a, n));
      const i: any = ((((e as any).map as any)(o) as any).join as any)("|"),
        l: any = !(s as any).verbose && ((e as any).length as any) === (1 as any) && ((r as any).type as any) !== ("Quantifier" as any) && !t && (!(s as any).useFlagMods || !n) ? i : `(?${(Ac as any)(t, n, (s as any).useFlagMods)}${i})`;
      return (s as any).currentFlags = a, l;
    },
    LookaroundAssertion({
      body: t,
      kind: e,
      negate: n
    }: any, r: any, s: any): any {
      return `(?${`${(e as any) === ("lookahead" as any) ? "" : "<"}${n ? "!" : "="}`}${((((t as any).map as any)(s) as any).join as any)("|")})`;
    },
    Quantifier(t: any, e: any, n: any): any {
      return ((n as any)((t as any).body) as any) + ((Ec as any)(t) as any);
    },
    Subroutine({
      isRecursive: t,
      ref: e
    }: any, n: any): any {
      if (!t) throw new (Error as any)("Unexpected non-recursive subroutine in transformed AST");
      const r: any = (n as any).recursionLimit;
      return (e as any) === (0 as any) ? `(?R=${r})` : k`\g<${e}&R=${r}>`;
    }
  },
  Cc: any = new (Set as any)(["$", "(", ")", "*", "+", ".", "?", "[", "\\", "]", "^", "{", "|", "}"]),
  _c: any = new (Set as any)(["-", "\\", "]", "^", "["]),
  Sc: any = new (Set as any)(["(", ")", "-", "/", "[", "\\", "]", "^", "{", "|", "}", "!", "#", "$", "%", "&", "*", "+", ",", ".", ":", ";", "<", "=", ">", "?", "@", "`", "~"]),
  Sr: any = new (Map as any)([[9, k`\t`], [10, k`\n`], [11, k`\v`], [12, k`\f`], [13, k`\r`], [8232, k`\u2028`], [8233, k`\u2029`], [65279, k`\uFEFF`]]),
  xc: any = new (RegExp as any)("^\\p{Cased}$", "u");
function Ln(this: any, t: any): any {
  return ((xc as any).test as any)(t);
}
function Ds(this: any, t: any, e: any): any {
  const n: any = !!e?.firstOnly,
    r: any = ((t as any).min as any).value,
    s: any = ((t as any).max as any).value,
    o: any = [];
  if ((r as any) < (65 as any) && ((s as any) === (65535 as any) || (s as any) >= (131071 as any)) || (r as any) === (65536 as any) && (s as any) >= (131071 as any)) return o;
  for (let a: any = r; (a as any) <= (s as any); a++) {
    const i: any = (N as any)(a);
    if (!(Ln as any)(i)) continue;
    const l: any = (((Ls as any)(i) as any).filter as any)((c: any): any => {
      const u: any = ((c as any).codePointAt as any)(0);
      return (u as any) < (r as any) || (u as any) > (s as any);
    });
    if ((l as any).length && (((o as any).push as any)(...l), n)) break;
  }
  return o;
}
function ve(this: any, t: any, {
  escDigit: e,
  inCharClass: n,
  useFlagV: r
}: any): any {
  if (((Sr as any).has as any)(t)) return ((Sr as any).get as any)(t);
  if ((t as any) < (32 as any) || (t as any) > (126 as any) && (t as any) < (160 as any) || (t as any) > (262143 as any) || e && (Ic as any)(t)) return (t as any) > (255 as any) ? `\\u{${((((t as any).toString as any)(16) as any).toUpperCase as any)()}}` : `\\x${((((((t as any).toString as any)(16) as any).toUpperCase as any)() as any).padStart as any)(2, "0")}`;
  const s: any = n ? r ? Sc : _c : Cc,
    o: any = (N as any)(t);
  return ((((s as any).has as any)(o) ? "\\" : "") as any) + (o as any);
}
function vc(this: any, t: any): any {
  const e: any = ((((t as any).map as any)((s: any): any => ((s as any).codePointAt as any)(0)) as any).sort as any)((s: any, o: any): any => (s as any) - (o as any)),
    n: any = [];
  let r: any = null;
  for (let s: any = 0; (s as any) < ((e as any).length as any); s++) ((e as any)[(s as any) + (1 as any)] as any) === (((e as any)[s] as any) + (1 as any) as any) ? r ??= (e as any)[s] : (r as any) === (null as any) ? ((n as any).push as any)((e as any)[s]) : (((n as any).push as any)([r, (e as any)[s]]), r = null);
  return n;
}
function Ac(this: any, t: any, e: any, n: any): any {
  if (t) return ">";
  let r: any = "";
  if (e && n) {
    const {
      enable: s,
      disable: o
    }: any = e;
    r = (((((s?.ignoreCase ? "i" : "") as any) + ((s?.dotAll ? "s" : "") as any) as any) + ((o ? "-" : "") as any) as any) + ((o?.ignoreCase ? "i" : "") as any) as any) + ((o?.dotAll ? "s" : "") as any);
  }
  return `${r}:`;
}
function Ec(this: any, {
  kind: t,
  max: e,
  min: n
}: any): any {
  let r: any;
  return !n && (e as any) === (1 as any) ? r = "?" : !n && (e as any) === ((1 as any) / (0 as any) as any) ? r = "*" : (n as any) === (1 as any) && (e as any) === ((1 as any) / (0 as any) as any) ? r = "+" : (n as any) === (e as any) ? r = `{${n}}` : r = `{${n},${(e as any) === ((1 as any) / (0 as any) as any) ? "" : e}}`, (r as any) + (({
    greedy: "",
    lazy: "?",
    possessive: "+"
  } as any)[t] as any);
}
function xr(this: any, {
  type: t
}: any): any {
  return (t as any) === ("CapturingGroup" as any) || (t as any) === ("Group" as any) || (t as any) === ("LookaroundAssertion" as any);
}
function Ic(this: any, t: any): any {
  return (t as any) > (47 as any) && (t as any) < (58 as any);
}
function vr(this: any, {
  type: t,
  value: e
}: any): any {
  return (t as any) === ("Character" as any) && (e as any) === (45 as any);
}
var Nc: any = class yn extends (RegExp as any) {
  declare lastIndex: any;
  [key: string]: any;
  #t: any = new (Map as any)();
  #e: any = null;
  #r: any;
  #n: any = null;
  #s: any = null;
  rawOptions: any = {};
  get source(): any {
    return this.#r || "(?:)";
  }
  constructor(e: any, n: any, r: any) {
    const s: any = !!r?.lazyCompile;
    if (e instanceof RegExp) {
      if (r) throw new (Error as any)("Cannot provide options when copying a regexp");
      const o: any = e;
      super(o, n), this.#r = (o as any).source, o instanceof yn && (this.#t = o.#t, this.#n = o.#n, this.#s = o.#s, (this as any).rawOptions = (o as any).rawOptions);
    } else {
      const o: any = {
        hiddenCaptures: [],
        strategy: null,
        transfers: [],
        ...r
      };
      super(s ? "" : e, n), this.#r = e, this.#t = ($c as any)((o as any).hiddenCaptures, (o as any).transfers), this.#s = (o as any).strategy, (this as any).rawOptions = r ?? {};
    }
    s || (this.#e = this);
  }
  exec(e: any): any {
    if (!this.#e) {
      const {
        lazyCompile: s,
        ...o
      }: any = (this as any).rawOptions;
      this.#e = new (yn as any)(this.#r, (this as any).flags, o);
    }
    const n: any = (this as any).global || (this as any).sticky,
      r: any = (this as any).lastIndex;
    if ((this.#s as any) === ("clip_search" as any) && n && r) {
      (this as any).lastIndex = 0;
      const s: any = (this.#o as any)(((e as any).slice as any)(r));
      return s && ((Rc as any)(s, r, e, (this as any).hasIndices), (this as any).lastIndex += r), s;
    }
    return (this.#o as any)(e);
  }
  #o(e: any): any {
    (this.#e as any).lastIndex = (this as any).lastIndex;
    const n: any = ((super.exec as any).call as any)(this.#e, e);
    if ((this as any).lastIndex = (this.#e as any).lastIndex, !n || !(this.#t as any).size) return n;
    const r: any = [...n];
    (n as any).length = 1;
    let s: any;
    (this as any).hasIndices && (s = [...(n as any).indices], ((n as any).indices as any).length = 1);
    const o: any = [0];
    for (let a: any = 1; (a as any) < ((r as any).length as any); a++) {
      const {
        hidden: i,
        transferTo: l
      }: any = ((this.#t as any).get as any)(a) ?? {};
      if (i ? ((o as any).push as any)(null) : (((o as any).push as any)((n as any).length), ((n as any).push as any)((r as any)[a]), (this as any).hasIndices && (((n as any).indices as any).push as any)((s as any)[a])), l && ((r as any)[a] as any) !== (void 0 as any)) {
        const c: any = (o as any)[l];
        if (!c) throw new (Error as any)(`Invalid capture transfer to "${c}"`);
        if ((n as any)[c] = (r as any)[a], (this as any).hasIndices && (((n as any).indices as any)[c] = (s as any)[a]), (n as any).groups) {
          this.#n || (this.#n = (Lc as any)((this as any).source));
          const u: any = ((this.#n as any).get as any)(l);
          u && (((n as any).groups as any)[u] = (r as any)[a], (this as any).hasIndices && ((((n as any).indices as any).groups as any)[u] = (s as any)[a]));
        }
      }
    }
    return n;
  }
};
function Rc(this: any, t: any, e: any, n: any, r: any): any {
  if ((t as any).index += e, (t as any).input = n, r) {
    const s: any = (t as any).indices;
    for (let a: any = 0; (a as any) < ((s as any).length as any); a++) {
      const i: any = (s as any)[a];
      i && ((s as any)[a] = [((i as any)[0] as any) + (e as any), ((i as any)[1] as any) + (e as any)]);
    }
    const o: any = (s as any).groups;
    o && ((((Object as any).keys as any)(o) as any).forEach as any)((a: any): any => {
      const i: any = (o as any)[a];
      i && ((o as any)[a] = [((i as any)[0] as any) + (e as any), ((i as any)[1] as any) + (e as any)]);
    });
  }
}
function $c(this: any, t: any, e: any): any {
  const n: any = new (Map as any)();
  for (const r of t) ((n as any).set as any)(r, {
    hidden: !0
  });
  for (const [r, s] of e) for (const o of s) ((qe as any)(n, o, {}) as any).transferTo = r;
  return n;
}
function Lc(this: any, t: any): any {
  const e: any = /(?<capture>\((?:\?<(?![=!])(?<name>[^>]+)>|(?!\?)))|\\?./gsu,
    n: any = new (Map as any)();
  let r: any = 0,
    s: any = 0,
    o: any;
  for (; o = ((e as any).exec as any)(t);) {
    const {
      0: a,
      groups: {
        capture: i,
        name: l
      }
    }: any = o;
    (a as any) === ("[" as any) ? r++ : r ? (a as any) === ("]" as any) && r-- : i && (s++, l && ((n as any).set as any)(s, l));
  }
  return n;
}
function Pc(this: any, t: any, e: any): any {
  const n: any = (Tc as any)(t, e);
  return (n as any).options ? new (Nc as any)((n as any).pattern, (n as any).flags, (n as any).options) : new (RegExp as any)((n as any).pattern, (n as any).flags);
}
function Tc(this: any, t: any, e: any): any {
  const n: any = ($s as any)(e),
    r: any = (Ss as any)(t, {
      flags: (n as any).flags,
      normalizeUnknownPropertyNames: !0,
      rules: {
        captureGroup: ((n as any).rules as any).captureGroup,
        singleline: ((n as any).rules as any).singleline
      },
      skipBackrefValidation: ((n as any).rules as any).allowOrphanBackrefs,
      unicodePropertyMap: $n
    }),
    s: any = (ic as any)(r, {
      accuracy: (n as any).accuracy,
      asciiWordBoundaries: ((n as any).rules as any).asciiWordBoundaries,
      avoidSubclass: (n as any).avoidSubclass,
      bestEffortTarget: (n as any).target
    }),
    o: any = (bc as any)(s, n),
    a: any = (Ql as any)((o as any).pattern, {
      captureTransfers: (o as any)._captureTransfers,
      hiddenCaptures: (o as any)._hiddenCaptures,
      mode: "external"
    }),
    i: any = (Xl as any)((a as any).pattern),
    l: any = (Vl as any)((i as any).pattern, {
      captureTransfers: (a as any).captureTransfers,
      hiddenCaptures: (a as any).hiddenCaptures
    }),
    c: any = {
      pattern: (l as any).pattern,
      flags: `${(n as any).hasIndices ? "d" : ""}${(n as any).global ? "g" : ""}${(o as any).flags}${(((o as any).options as any).disable as any).v ? "u" : "v"}`
    };
  if ((n as any).avoidSubclass) {
    if (((n as any).lazyCompileLength as any) !== ((1 as any) / (0 as any) as any)) throw new (Error as any)("Lazy compilation requires subclass");
  } else {
    const u: any = (((l as any).hiddenCaptures as any).sort as any)((f: any, b: any): any => (f as any) - (b as any)),
      h: any = ((Array as any).from as any)((l as any).captureTransfers),
      d: any = (s as any)._strategy,
      p: any = (((c as any).pattern as any).length as any) >= ((n as any).lazyCompileLength as any);
    ((u as any).length || (h as any).length || d || p) && ((c as any).options = {
      ...((u as any).length && {
        hiddenCaptures: u
      }),
      ...((h as any).length && {
        transfers: h
      }),
      ...(d && {
        strategy: d
      }),
      ...(p && {
        lazyCompile: p
      })
    });
  }
  return c;
}
function Mc(this: any, t: any, e: any): any {
  return (Pc as any)(t, {
    global: !0,
    hasIndices: !0,
    lazyCompileLength: 3e3,
    rules: {
      allowOrphanBackrefs: !0,
      asciiWordBoundaries: !0,
      captureGroup: !0,
      recursionLimit: 5,
      singleline: !0
    },
    ...e
  });
}
function Oc(this: any, t: any = {}): any {
  const e: any = ((Object as any).assign as any)({
    target: "auto",
    cache: new (Map as any)()
  }, t);
  return (e as any).regexConstructor ||= (n: any): any => (Mc as any)(n, {
    target: (e as any).target
  }), {
    createScanner(n: any): any {
      return new (Zi as any)(n, e);
    },
    createString(n: any): any {
      return {
        content: n
      };
    }
  };
}
let Zt: any = null;
function js(this: any): any {
  return Zt || (Zt = (Qi as any)({
    themes: [lo],
    langs: [],
    engine: (Oc as any)()
  })), Zt;
}
function Us(this: any, t: any, e: any): any {
  const n: any = (Se as any)(e);
  if ((n as any) === (void 0 as any) || ((((t as any).getLoadedLanguages as any)() as any).includes as any)(n)) return !0;
  const r: any = (kn as any)(n);
  return (r as any) === (void 0 as any) ? ((Cn as any)(n), !1) : (((t as any).loadLanguageSync as any)(r), !0);
}
const He: any = new (Set as any)(),
  Ae: any = new (Map as any)(),
  Gc: number = 2e3;
function Bc(this: any): any {
  return (typeof navigator as any) > ("u" as any) ? !1 : ((navigator as any).scheduling?.isInputPending?.() as any) === (!0 as any);
}
function Fc(this: any, t: any): any {
  const e: any = globalThis;
  let n: any = !1,
    r: any,
    s: any;
  const o: any = (): any => {
      if (!n) {
        if ((Bc as any)()) {
          (a as any)();
          return;
        }
        (t as any)();
      }
    },
    a: any = (): any => {
      (e as any).requestIdleCallback ? r = ((e as any).requestIdleCallback as any)(o, {
        timeout: Gc
      }) : s = (setTimeout as any)(o, 0);
    };
  return (a as any)(), (): any => {
    n = !0, (r as any) !== (void 0 as any) && (e as any).cancelIdleCallback?.(r), (s as any) !== (void 0 as any) && (clearTimeout as any)(s);
  };
}
function Ws(this: any, t: any, e: any): any {
  const n: any = (js as any)();
  if (!(Us as any)(n, e)) return (De as any)(t);
  const r: any = (ao as any)(n, t, e);
  return ((He as any).add as any)((Se as any)(e) ?? e), r;
}
function Dc(this: any, t: any): any {
  const e: any = (Se as any)(t);
  return (e as any) === (void 0 as any) || ((He as any).has as any)(e);
}
const Yt: any = (): any => {};
function jc(this: any, t: any, e: any, n: any = Fc): any {
  if ((n as any) === (null as any)) return Yt;
  const r: any = (Se as any)(e) ?? e;
  if (((He as any).has as any)(r)) return Yt;
  let s: any = ((Ae as any).get as any)(r);
  if ((s as any) === (void 0 as any)) {
    const i: any = {
      holders: 0,
      cancelRun: Yt
    };
    ((Ae as any).set as any)(r, i), (i as any).cancelRun = (n as any)((): any => {
      (((Ae as any).get as any)(r) as any) === (i as any) && ((Ae as any).delete as any)(r), ((He as any).has as any)(r) || (Ws as any)(t, e);
    }), s = i;
  }
  const o: any = s;
  (o as any).holders += 1;
  let a: any = !1;
  return (): any => {
    a || (a = !0, (o as any).holders -= 1, !(((o as any).holders as any) > (0 as any) || (((Ae as any).get as any)(r) as any) !== (o as any)) && (((Ae as any).delete as any)(r), ((o as any).cancelRun as any)()));
  };
}
function Uc(this: any, t: any, e: any, n: any): any {
  const r: any = (js as any)();
  if (!(Us as any)(r, e)) return;
  const s: any = (io as any)(r, t, e, n);
  return ((He as any).add as any)((Se as any)(e) ?? e), s;
}
function Ar(this: any, t: any): any {
  return ((((((((((t as any).replace as any)(/&/g, "&amp;") as any).replace as any)(/</g, "&lt;") as any).replace as any)(/>/g, "&gt;") as any).replace as any)(/"/g, "&quot;") as any).replace as any)(/'/g, "&#039;");
}
const Wc: string = 'var qn=Object.defineProperty;var ho=Object.getPrototypeOf;var po=Reflect.get;var Vn=t=>{throw TypeError(t)};var fo=(t,e,n)=>e in t?qn(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var go=(t,e)=>{for(var n in e)qn(t,n,{get:e[n],enumerable:!0})};var g=(t,e,n)=>fo(t,typeof e!="symbol"?e+"":e,n),zt=(t,e,n)=>e.has(t)||Vn("Cannot "+n);var G=(t,e,n)=>(zt(t,e,"read from private field"),n?n.call(t):e.get(t)),me=(t,e,n)=>e.has(t)?Vn("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),q=(t,e,n,r)=>(zt(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),Wt=(t,e,n)=>(zt(t,e,"access private method"),n);var Xn=(t,e,n)=>po(ho(t),n,e);var E=class extends Error{constructor(t){super(t),this.name="ShikiError"}};function mo(t){return Jt(t)}function Jt(t){return Array.isArray(t)?yo(t):t instanceof RegExp?t:typeof t=="object"?bo(t):t}function yo(t){let e=[];for(let n=0,r=t.length;n<r;n++)e[n]=Jt(t[n]);return e}function bo(t){let e={};for(let n in t)e[n]=Jt(t[n]);return e}function rr(t,...e){return e.forEach(n=>{for(let r in n)t[r]=n[r]}),t}function sr(t){let e=~t.lastIndexOf("/")||~t.lastIndexOf("\\\\");return e===0?t:~e===t.length-1?sr(t.substring(0,t.length-1)):t.substr(~e+1)}var Ht=/\\$(\\d+)|\\${(\\d+):\\/(downcase|upcase)}/g,at=class{static hasCaptures(t){return t===null?!1:(Ht.lastIndex=0,Ht.test(t))}static replaceCaptures(t,e,n){return t.replace(Ht,(r,s,o,a)=>{let i=n[parseInt(s||o,10)];if(i){let l=e.substring(i.start,i.end);for(;l[0]===".";)l=l.substring(1);switch(a){case"downcase":return l.toLowerCase();case"upcase":return l.toUpperCase();default:return l}}else return r})}};function or(t,e){return t<e?-1:t>e?1:0}function ar(t,e){if(t===null&&e===null)return 0;if(!t)return-1;if(!e)return 1;let n=t.length,r=e.length;if(n===r){for(let s=0;s<n;s++){let o=or(t[s],e[s]);if(o!==0)return o}return 0}return n-r}function Kn(t){return!!(/^#[0-9a-f]{6}$/i.test(t)||/^#[0-9a-f]{8}$/i.test(t)||/^#[0-9a-f]{3}$/i.test(t)||/^#[0-9a-f]{4}$/i.test(t))}function ir(t){return t.replace(/[\\-\\\\\\{\\}\\*\\+\\?\\|\\^\\$\\.\\,\\[\\]\\(\\)\\#\\s]/g,"\\\\$&")}var lr=class{constructor(t){g(this,"cache",new Map);this.fn=t}get(t){if(this.cache.has(t))return this.cache.get(t);let e=this.fn(t);return this.cache.set(t,e),e}},De=class{constructor(t,e,n){g(this,"_cachedMatchRoot",new lr(t=>this._root.match(t)));this._colorMap=t,this._defaults=e,this._root=n}static createFromRawTheme(t,e){return this.createFromParsedTheme(ko(t),e)}static createFromParsedTheme(t,e){return _o(t,e)}getColorMap(){return this._colorMap.getColorMap()}getDefaults(){return this._defaults}match(t){if(t===null)return this._defaults;let e=t.scopeName,r=this._cachedMatchRoot.get(e).find(s=>wo(t.parent,s.parentScopes));return r?new cr(r.fontStyle,r.foreground,r.background):null}},qt=class it{constructor(e,n){this.parent=e,this.scopeName=n}static push(e,n){for(let r of n)e=new it(e,r);return e}static from(...e){let n=null;for(let r=0;r<e.length;r++)n=new it(n,e[r]);return n}push(e){return new it(this,e)}getSegments(){let e=this,n=[];for(;e;)n.push(e.scopeName),e=e.parent;return n.reverse(),n}toString(){return this.getSegments().join(" ")}extends(e){return this===e?!0:this.parent===null?!1:this.parent.extends(e)}getExtensionIfDefined(e){let n=[],r=this;for(;r&&r!==e;)n.push(r.scopeName),r=r.parent;return r===e?n.reverse():void 0}};function wo(t,e){if(e.length===0)return!0;for(let n=0;n<e.length;n++){let r=e[n],s=!1;if(r===">"){if(n===e.length-1)return!1;r=e[++n],s=!0}for(;t&&!Co(t.scopeName,r);){if(s)return!1;t=t.parent}if(!t)return!1;t=t.parent}return!0}function Co(t,e){return e===t||t.startsWith(e)&&t[e.length]==="."}var cr=class{constructor(t,e,n){this.fontStyle=t,this.foregroundId=e,this.backgroundId=n}};function ko(t){if(!t)return[];if(!t.settings||!Array.isArray(t.settings))return[];let e=t.settings,n=[],r=0;for(let s=0,o=e.length;s<o;s++){let a=e[s];if(!a.settings)continue;let i;if(typeof a.scope=="string"){let h=a.scope;h=h.replace(/^[,]+/,""),h=h.replace(/[,]+$/,""),i=h.split(",")}else Array.isArray(a.scope)?i=a.scope:i=[""];let l=-1;if(typeof a.settings.fontStyle=="string"){l=0;let h=a.settings.fontStyle.split(" ");for(let p=0,d=h.length;p<d;p++)switch(h[p]){case"italic":l=l|1;break;case"bold":l=l|2;break;case"underline":l=l|4;break;case"strikethrough":l=l|8;break}}let c=null;typeof a.settings.foreground=="string"&&Kn(a.settings.foreground)&&(c=a.settings.foreground);let u=null;typeof a.settings.background=="string"&&Kn(a.settings.background)&&(u=a.settings.background);for(let h=0,p=i.length;h<p;h++){let f=i[h].trim().split(" "),C=f[f.length-1],w=null;f.length>1&&(w=f.slice(0,f.length-1),w.reverse()),n[r++]=new So(C,w,s,l,c,u)}}return n}var So=class{constructor(t,e,n,r,s,o){this.scope=t,this.parentScopes=e,this.index=n,this.fontStyle=r,this.foreground=s,this.background=o}},M=(t=>(t[t.NotSet=-1]="NotSet",t[t.None=0]="None",t[t.Italic=1]="Italic",t[t.Bold=2]="Bold",t[t.Underline=4]="Underline",t[t.Strikethrough=8]="Strikethrough",t))(M||{});function _o(t,e){t.sort((l,c)=>{let u=or(l.scope,c.scope);return u!==0||(u=ar(l.parentScopes,c.parentScopes),u!==0)?u:l.index-c.index});let n=0,r="#000000",s="#ffffff";for(;t.length>=1&&t[0].scope==="";){let l=t.shift();l.fontStyle!==-1&&(n=l.fontStyle),l.foreground!==null&&(r=l.foreground),l.background!==null&&(s=l.background)}let o=new xo(e),a=new cr(n,o.getId(r),o.getId(s)),i=new Ao(new Xt(0,null,-1,0,0),[]);for(let l=0,c=t.length;l<c;l++){let u=t[l];i.insert(0,u.scope,u.parentScopes,u.fontStyle,o.getId(u.foreground),o.getId(u.background))}return new De(o,a,i)}var xo=class{constructor(t){g(this,"_isFrozen");g(this,"_lastColorId");g(this,"_id2color");g(this,"_color2id");if(this._lastColorId=0,this._id2color=[],this._color2id=Object.create(null),Array.isArray(t)){this._isFrozen=!0;for(let e=0,n=t.length;e<n;e++)this._color2id[t[e]]=e,this._id2color[e]=t[e]}else this._isFrozen=!1}getId(t){if(t===null)return 0;t=t.toUpperCase();let e=this._color2id[t];if(e)return e;if(this._isFrozen)throw new Error(`Missing color in color map - ${t}`);return e=++this._lastColorId,this._color2id[t]=e,this._id2color[e]=t,e}getColorMap(){return this._id2color.slice(0)}},vo=Object.freeze([]),Xt=class ur{constructor(e,n,r,s,o){g(this,"scopeDepth");g(this,"parentScopes");g(this,"fontStyle");g(this,"foreground");g(this,"background");this.scopeDepth=e,this.parentScopes=n||vo,this.fontStyle=r,this.foreground=s,this.background=o}clone(){return new ur(this.scopeDepth,this.parentScopes,this.fontStyle,this.foreground,this.background)}static cloneArr(e){let n=[];for(let r=0,s=e.length;r<s;r++)n[r]=e[r].clone();return n}acceptOverwrite(e,n,r,s){this.scopeDepth>e?console.log("how did this happen?"):this.scopeDepth=e,n!==-1&&(this.fontStyle=n),r!==0&&(this.foreground=r),s!==0&&(this.background=s)}},Ao=class Kt{constructor(e,n=[],r={}){g(this,"_rulesWithParentScopes");this._mainRule=e,this._children=r,this._rulesWithParentScopes=n}static _cmpBySpecificity(e,n){if(e.scopeDepth!==n.scopeDepth)return n.scopeDepth-e.scopeDepth;let r=0,s=0;for(;e.parentScopes[r]===">"&&r++,n.parentScopes[s]===">"&&s++,!(r>=e.parentScopes.length||s>=n.parentScopes.length);){let o=n.parentScopes[s].length-e.parentScopes[r].length;if(o!==0)return o;r++,s++}return n.parentScopes.length-e.parentScopes.length}match(e){if(e!==""){let r=e.indexOf("."),s,o;if(r===-1?(s=e,o=""):(s=e.substring(0,r),o=e.substring(r+1)),this._children.hasOwnProperty(s))return this._children[s].match(o)}let n=this._rulesWithParentScopes.concat(this._mainRule);return n.sort(Kt._cmpBySpecificity),n}insert(e,n,r,s,o,a){if(n===""){this._doInsertHere(e,r,s,o,a);return}let i=n.indexOf("."),l,c;i===-1?(l=n,c=""):(l=n.substring(0,i),c=n.substring(i+1));let u;this._children.hasOwnProperty(l)?u=this._children[l]:(u=new Kt(this._mainRule.clone(),Xt.cloneArr(this._rulesWithParentScopes)),this._children[l]=u),u.insert(e+1,c,r,s,o,a)}_doInsertHere(e,n,r,s,o){if(n===null){this._mainRule.acceptOverwrite(e,r,s,o);return}for(let a=0,i=this._rulesWithParentScopes.length;a<i;a++){let l=this._rulesWithParentScopes[a];if(ar(l.parentScopes,n)===0){l.acceptOverwrite(e,r,s,o);return}}r===-1&&(r=this._mainRule.fontStyle),s===0&&(s=this._mainRule.foreground),o===0&&(o=this._mainRule.background),this._rulesWithParentScopes.push(new Xt(e,n,r,s,o))}},ye=class j{static toBinaryStr(e){return e.toString(2).padStart(32,"0")}static print(e){let n=j.getLanguageId(e),r=j.getTokenType(e),s=j.getFontStyle(e),o=j.getForeground(e),a=j.getBackground(e);console.log({languageId:n,tokenType:r,fontStyle:s,foreground:o,background:a})}static getLanguageId(e){return(e&255)>>>0}static getTokenType(e){return(e&768)>>>8}static containsBalancedBrackets(e){return(e&1024)!==0}static getFontStyle(e){return(e&30720)>>>11}static getForeground(e){return(e&16744448)>>>15}static getBackground(e){return(e&4278190080)>>>24}static set(e,n,r,s,o,a,i){let l=j.getLanguageId(e),c=j.getTokenType(e),u=j.containsBalancedBrackets(e)?1:0,h=j.getFontStyle(e),p=j.getForeground(e),d=j.getBackground(e);return n!==0&&(l=n),r!==8&&(c=r),s!==null&&(u=s?1:0),o!==-1&&(h=o),a!==0&&(p=a),i!==0&&(d=i),(l<<0|c<<8|u<<10|h<<11|p<<15|d<<24)>>>0}};function ct(t,e){let n=[],r=Eo(t),s=r.next();for(;s!==null;){let l=0;if(s.length===2&&s.charAt(1)===":"){switch(s.charAt(0)){case"R":l=1;break;case"L":l=-1;break;default:console.log(`Unknown priority ${s} in scope selector`)}s=r.next()}let c=a();if(n.push({matcher:c,priority:l}),s!==",")break;s=r.next()}return n;function o(){if(s==="-"){s=r.next();let l=o();return c=>!!l&&!l(c)}if(s==="("){s=r.next();let l=i();return s===")"&&(s=r.next()),l}if(Qn(s)){let l=[];do l.push(s),s=r.next();while(Qn(s));return c=>e(l,c)}return null}function a(){let l=[],c=o();for(;c;)l.push(c),c=o();return u=>l.every(h=>h(u))}function i(){let l=[],c=a();for(;c&&(l.push(c),s==="|"||s===",");){do s=r.next();while(s==="|"||s===",");c=a()}return u=>l.some(h=>h(u))}}function Qn(t){return!!t&&!!t.match(/[\\w\\.:]+/)}function Eo(t){let e=/([LR]:|[\\w\\.:][\\w\\.:\\-]*|[\\,\\|\\-\\(\\)])/g,n=e.exec(t);return{next:()=>{if(!n)return null;let r=n[0];return n=e.exec(t),r}}}function hr(t){typeof t.dispose=="function"&&t.dispose()}var Fe=class{constructor(t){this.scopeName=t}toKey(){return this.scopeName}},Io=class{constructor(t,e){this.scopeName=t,this.ruleName=e}toKey(){return`${this.scopeName}#${this.ruleName}`}},Ro=class{constructor(){g(this,"_references",[]);g(this,"_seenReferenceKeys",new Set);g(this,"visitedRule",new Set)}get references(){return this._references}add(t){let e=t.toKey();this._seenReferenceKeys.has(e)||(this._seenReferenceKeys.add(e),this._references.push(t))}},No=class{constructor(t,e){g(this,"seenFullScopeRequests",new Set);g(this,"seenPartialScopeRequests",new Set);g(this,"Q");this.repo=t,this.initialScopeName=e,this.seenFullScopeRequests.add(this.initialScopeName),this.Q=[new Fe(this.initialScopeName)]}processQueue(){let t=this.Q;this.Q=[];let e=new Ro;for(let n of t)Lo(n,this.initialScopeName,this.repo,e);for(let n of e.references)if(n instanceof Fe){if(this.seenFullScopeRequests.has(n.scopeName))continue;this.seenFullScopeRequests.add(n.scopeName),this.Q.push(n)}else{if(this.seenFullScopeRequests.has(n.scopeName)||this.seenPartialScopeRequests.has(n.toKey()))continue;this.seenPartialScopeRequests.add(n.toKey()),this.Q.push(n)}}};function Lo(t,e,n,r){let s=n.lookup(t.scopeName);if(!s){if(t.scopeName===e)throw new Error(`No grammar provided for <${e}>`);return}let o=n.lookup(e);t instanceof Fe?lt({baseGrammar:o,selfGrammar:s},r):Qt(t.ruleName,{baseGrammar:o,selfGrammar:s,repository:s.repository},r);let a=n.injections(t.scopeName);if(a)for(let i of a)r.add(new Fe(i))}function Qt(t,e,n){if(e.repository&&e.repository[t]){let r=e.repository[t];ut([r],e,n)}}function lt(t,e){t.selfGrammar.patterns&&Array.isArray(t.selfGrammar.patterns)&&ut(t.selfGrammar.patterns,{...t,repository:t.selfGrammar.repository},e),t.selfGrammar.injections&&ut(Object.values(t.selfGrammar.injections),{...t,repository:t.selfGrammar.repository},e)}function ut(t,e,n){for(let r of t){if(n.visitedRule.has(r))continue;n.visitedRule.add(r);let s=r.repository?rr({},e.repository,r.repository):e.repository;Array.isArray(r.patterns)&&ut(r.patterns,{...e,repository:s},n);let o=r.include;if(!o)continue;let a=pr(o);switch(a.kind){case 0:lt({...e,selfGrammar:e.baseGrammar},n);break;case 1:lt(e,n);break;case 2:Qt(a.ruleName,{...e,repository:s},n);break;case 3:case 4:let i=a.scopeName===e.selfGrammar.scopeName?e.selfGrammar:a.scopeName===e.baseGrammar.scopeName?e.baseGrammar:void 0;if(i){let l={baseGrammar:e.baseGrammar,selfGrammar:i,repository:s};a.kind===4?Qt(a.ruleName,l,n):lt(l,n)}else a.kind===4?n.add(new Io(a.scopeName,a.ruleName)):n.add(new Fe(a.scopeName));break}}}var To=class{constructor(){g(this,"kind",0)}},Po=class{constructor(){g(this,"kind",1)}},Mo=class{constructor(t){g(this,"kind",2);this.ruleName=t}},$o=class{constructor(t){g(this,"kind",3);this.scopeName=t}},Oo=class{constructor(t,e){g(this,"kind",4);this.scopeName=t,this.ruleName=e}};function pr(t){if(t==="$base")return new To;if(t==="$self")return new Po;let e=t.indexOf("#");if(e===-1)return new $o(t);if(e===0)return new Mo(t.substring(1));{let n=t.substring(0,e),r=t.substring(e+1);return new Oo(n,r)}}var Go=/\\\\(\\d+)/,Zn=/\\\\(\\d+)/g,fc=Symbol("RuleId"),Bo=-1,fr=-2;var ze=class{constructor(t,e,n,r){g(this,"$location");g(this,"id");g(this,"_nameIsCapturing");g(this,"_name");g(this,"_contentNameIsCapturing");g(this,"_contentName");this.$location=t,this.id=e,this._name=n||null,this._nameIsCapturing=at.hasCaptures(this._name),this._contentName=r||null,this._contentNameIsCapturing=at.hasCaptures(this._contentName)}get debugName(){let t=this.$location?`${sr(this.$location.filename)}:${this.$location.line}`:"unknown";return`${this.constructor.name}#${this.id} @ ${t}`}getName(t,e){return!this._nameIsCapturing||this._name===null||t===null||e===null?this._name:at.replaceCaptures(this._name,t,e)}getContentName(t,e){return!this._contentNameIsCapturing||this._contentName===null?this._contentName:at.replaceCaptures(this._contentName,t,e)}},Do=class extends ze{constructor(e,n,r,s,o){super(e,n,r,s);g(this,"retokenizeCapturedWithRuleId");this.retokenizeCapturedWithRuleId=o}dispose(){}collectPatterns(e,n){throw new Error("Not supported!")}compile(e,n){throw new Error("Not supported!")}compileAG(e,n,r,s){throw new Error("Not supported!")}},Fo=class extends ze{constructor(e,n,r,s,o){super(e,n,r,null);g(this,"_match");g(this,"captures");g(this,"_cachedCompiledPatterns");this._match=new Ue(s,this.id),this.captures=o,this._cachedCompiledPatterns=null}dispose(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null)}get debugMatchRegExp(){return`${this._match.source}`}collectPatterns(e,n){n.push(this._match)}compile(e,n){return this._getCachedCompiledPatterns(e).compile(e)}compileAG(e,n,r,s){return this._getCachedCompiledPatterns(e).compileAG(e,r,s)}_getCachedCompiledPatterns(e){return this._cachedCompiledPatterns||(this._cachedCompiledPatterns=new je,this.collectPatterns(e,this._cachedCompiledPatterns)),this._cachedCompiledPatterns}},Yn=class extends ze{constructor(e,n,r,s,o){super(e,n,r,s);g(this,"hasMissingPatterns");g(this,"patterns");g(this,"_cachedCompiledPatterns");this.patterns=o.patterns,this.hasMissingPatterns=o.hasMissingPatterns,this._cachedCompiledPatterns=null}dispose(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null)}collectPatterns(e,n){for(let r of this.patterns)e.getRule(r).collectPatterns(e,n)}compile(e,n){return this._getCachedCompiledPatterns(e).compile(e)}compileAG(e,n,r,s){return this._getCachedCompiledPatterns(e).compileAG(e,r,s)}_getCachedCompiledPatterns(e){return this._cachedCompiledPatterns||(this._cachedCompiledPatterns=new je,this.collectPatterns(e,this._cachedCompiledPatterns)),this._cachedCompiledPatterns}},Zt=class extends ze{constructor(e,n,r,s,o,a,i,l,c,u){super(e,n,r,s);g(this,"_begin");g(this,"beginCaptures");g(this,"_end");g(this,"endHasBackReferences");g(this,"endCaptures");g(this,"applyEndPatternLast");g(this,"hasMissingPatterns");g(this,"patterns");g(this,"_cachedCompiledPatterns");this._begin=new Ue(o,this.id),this.beginCaptures=a,this._end=new Ue(i||"\\uFFFF",-1),this.endHasBackReferences=this._end.hasBackReferences,this.endCaptures=l,this.applyEndPatternLast=c||!1,this.patterns=u.patterns,this.hasMissingPatterns=u.hasMissingPatterns,this._cachedCompiledPatterns=null}dispose(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null)}get debugBeginRegExp(){return`${this._begin.source}`}get debugEndRegExp(){return`${this._end.source}`}getEndWithResolvedBackReferences(e,n){return this._end.resolveBackReferences(e,n)}collectPatterns(e,n){n.push(this._begin)}compile(e,n){return this._getCachedCompiledPatterns(e,n).compile(e)}compileAG(e,n,r,s){return this._getCachedCompiledPatterns(e,n).compileAG(e,r,s)}_getCachedCompiledPatterns(e,n){if(!this._cachedCompiledPatterns){this._cachedCompiledPatterns=new je;for(let r of this.patterns)e.getRule(r).collectPatterns(e,this._cachedCompiledPatterns);this.applyEndPatternLast?this._cachedCompiledPatterns.push(this._end.hasBackReferences?this._end.clone():this._end):this._cachedCompiledPatterns.unshift(this._end.hasBackReferences?this._end.clone():this._end)}return this._end.hasBackReferences&&(this.applyEndPatternLast?this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length()-1,n):this._cachedCompiledPatterns.setSource(0,n)),this._cachedCompiledPatterns}},ht=class extends ze{constructor(e,n,r,s,o,a,i,l,c){super(e,n,r,s);g(this,"_begin");g(this,"beginCaptures");g(this,"whileCaptures");g(this,"_while");g(this,"whileHasBackReferences");g(this,"hasMissingPatterns");g(this,"patterns");g(this,"_cachedCompiledPatterns");g(this,"_cachedCompiledWhilePatterns");this._begin=new Ue(o,this.id),this.beginCaptures=a,this.whileCaptures=l,this._while=new Ue(i,fr),this.whileHasBackReferences=this._while.hasBackReferences,this.patterns=c.patterns,this.hasMissingPatterns=c.hasMissingPatterns,this._cachedCompiledPatterns=null,this._cachedCompiledWhilePatterns=null}dispose(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null),this._cachedCompiledWhilePatterns&&(this._cachedCompiledWhilePatterns.dispose(),this._cachedCompiledWhilePatterns=null)}get debugBeginRegExp(){return`${this._begin.source}`}get debugWhileRegExp(){return`${this._while.source}`}getWhileWithResolvedBackReferences(e,n){return this._while.resolveBackReferences(e,n)}collectPatterns(e,n){n.push(this._begin)}compile(e,n){return this._getCachedCompiledPatterns(e).compile(e)}compileAG(e,n,r,s){return this._getCachedCompiledPatterns(e).compileAG(e,r,s)}_getCachedCompiledPatterns(e){if(!this._cachedCompiledPatterns){this._cachedCompiledPatterns=new je;for(let n of this.patterns)e.getRule(n).collectPatterns(e,this._cachedCompiledPatterns)}return this._cachedCompiledPatterns}compileWhile(e,n){return this._getCachedCompiledWhilePatterns(e,n).compile(e)}compileWhileAG(e,n,r,s){return this._getCachedCompiledWhilePatterns(e,n).compileAG(e,r,s)}_getCachedCompiledWhilePatterns(e,n){return this._cachedCompiledWhilePatterns||(this._cachedCompiledWhilePatterns=new je,this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences?this._while.clone():this._while)),this._while.hasBackReferences&&this._cachedCompiledWhilePatterns.setSource(0,n||"\\uFFFF"),this._cachedCompiledWhilePatterns}},dr=class ${static createCaptureRule(e,n,r,s,o){return e.registerRule(a=>new Do(n,a,r,s,o))}static getCompiledRuleId(e,n,r){return e.id||n.registerRule(s=>{if(e.id=s,e.match)return new Fo(e.$vscodeTextmateLocation,e.id,e.name,e.match,$._compileCaptures(e.captures,n,r));if(typeof e.begin>"u"){e.repository&&(r=rr({},r,e.repository));let o=e.patterns;return typeof o>"u"&&e.include&&(o=[{include:e.include}]),new Yn(e.$vscodeTextmateLocation,e.id,e.name,e.contentName,$._compilePatterns(o,n,r))}return e.while?new ht(e.$vscodeTextmateLocation,e.id,e.name,e.contentName,e.begin,$._compileCaptures(e.beginCaptures||e.captures,n,r),e.while,$._compileCaptures(e.whileCaptures||e.captures,n,r),$._compilePatterns(e.patterns,n,r)):new Zt(e.$vscodeTextmateLocation,e.id,e.name,e.contentName,e.begin,$._compileCaptures(e.beginCaptures||e.captures,n,r),e.end,$._compileCaptures(e.endCaptures||e.captures,n,r),e.applyEndPatternLast,$._compilePatterns(e.patterns,n,r))}),e.id}static _compileCaptures(e,n,r){let s=[];if(e){let o=0;for(let a in e){if(a==="$vscodeTextmateLocation")continue;let i=parseInt(a,10);i>o&&(o=i)}for(let a=0;a<=o;a++)s[a]=null;for(let a in e){if(a==="$vscodeTextmateLocation")continue;let i=parseInt(a,10),l=0;e[a].patterns&&(l=$.getCompiledRuleId(e[a],n,r)),s[i]=$.createCaptureRule(n,e[a].$vscodeTextmateLocation,e[a].name,e[a].contentName,l)}}return s}static _compilePatterns(e,n,r){let s=[];if(e)for(let o=0,a=e.length;o<a;o++){let i=e[o],l=-1;if(i.include){let c=pr(i.include);switch(c.kind){case 0:case 1:l=$.getCompiledRuleId(r[i.include],n,r);break;case 2:let u=r[c.ruleName];u&&(l=$.getCompiledRuleId(u,n,r));break;case 3:case 4:let h=c.scopeName,p=c.kind===4?c.ruleName:null,d=n.getExternalGrammar(h,r);if(d)if(p){let f=d.repository[p];f&&(l=$.getCompiledRuleId(f,n,d.repository))}else l=$.getCompiledRuleId(d.repository.$self,n,d.repository);break}}else l=$.getCompiledRuleId(i,n,r);if(l!==-1){let c=n.getRule(l),u=!1;if((c instanceof Yn||c instanceof Zt||c instanceof ht)&&c.hasMissingPatterns&&c.patterns.length===0&&(u=!0),u)continue;s.push(l)}}return{patterns:s,hasMissingPatterns:(e?e.length:0)!==s.length}}},Ue=class gr{constructor(e,n){g(this,"source");g(this,"ruleId");g(this,"hasAnchor");g(this,"hasBackReferences");g(this,"_anchorCache");if(e&&typeof e=="string"){let r=e.length,s=0,o=[],a=!1;for(let i=0;i<r;i++)if(e.charAt(i)==="\\\\"&&i+1<r){let c=e.charAt(i+1);c==="z"?(o.push(e.substring(s,i)),o.push("$(?!\\\\n)(?<!\\\\n)"),s=i+2):(c==="A"||c==="G")&&(a=!0),i++}this.hasAnchor=a,s===0?this.source=e:(o.push(e.substring(s,r)),this.source=o.join(""))}else this.hasAnchor=!1,this.source=e;this.hasAnchor?this._anchorCache=this._buildAnchorCache():this._anchorCache=null,this.ruleId=n,typeof this.source=="string"?this.hasBackReferences=Go.test(this.source):this.hasBackReferences=!1}clone(){return new gr(this.source,this.ruleId)}setSource(e){this.source!==e&&(this.source=e,this.hasAnchor&&(this._anchorCache=this._buildAnchorCache()))}resolveBackReferences(e,n){if(typeof this.source!="string")throw new Error("This method should only be called if the source is a string");let r=n.map(s=>e.substring(s.start,s.end));return Zn.lastIndex=0,this.source.replace(Zn,(s,o)=>ir(r[parseInt(o,10)]||""))}_buildAnchorCache(){if(typeof this.source!="string")throw new Error("This method should only be called if the source is a string");let e=[],n=[],r=[],s=[],o,a,i,l;for(o=0,a=this.source.length;o<a;o++)i=this.source.charAt(o),e[o]=i,n[o]=i,r[o]=i,s[o]=i,i==="\\\\"&&o+1<a&&(l=this.source.charAt(o+1),l==="A"?(e[o+1]="\\uFFFF",n[o+1]="\\uFFFF",r[o+1]="A",s[o+1]="A"):l==="G"?(e[o+1]="\\uFFFF",n[o+1]="G",r[o+1]="\\uFFFF",s[o+1]="G"):(e[o+1]=l,n[o+1]=l,r[o+1]=l,s[o+1]=l),o++);return{A0_G0:e.join(""),A0_G1:n.join(""),A1_G0:r.join(""),A1_G1:s.join("")}}resolveAnchors(e,n){return!this.hasAnchor||!this._anchorCache||typeof this.source!="string"?this.source:e?n?this._anchorCache.A1_G1:this._anchorCache.A1_G0:n?this._anchorCache.A0_G1:this._anchorCache.A0_G0}},je=class{constructor(){g(this,"_items");g(this,"_hasAnchors");g(this,"_cached");g(this,"_anchorCache");this._items=[],this._hasAnchors=!1,this._cached=null,this._anchorCache={A0_G0:null,A0_G1:null,A1_G0:null,A1_G1:null}}dispose(){this._disposeCaches()}_disposeCaches(){this._cached&&(this._cached.dispose(),this._cached=null),this._anchorCache.A0_G0&&(this._anchorCache.A0_G0.dispose(),this._anchorCache.A0_G0=null),this._anchorCache.A0_G1&&(this._anchorCache.A0_G1.dispose(),this._anchorCache.A0_G1=null),this._anchorCache.A1_G0&&(this._anchorCache.A1_G0.dispose(),this._anchorCache.A1_G0=null),this._anchorCache.A1_G1&&(this._anchorCache.A1_G1.dispose(),this._anchorCache.A1_G1=null)}push(t){this._items.push(t),this._hasAnchors=this._hasAnchors||t.hasAnchor}unshift(t){this._items.unshift(t),this._hasAnchors=this._hasAnchors||t.hasAnchor}length(){return this._items.length}setSource(t,e){this._items[t].source!==e&&(this._disposeCaches(),this._items[t].setSource(e))}compile(t){if(!this._cached){let e=this._items.map(n=>n.source);this._cached=new Jn(t,e,this._items.map(n=>n.ruleId))}return this._cached}compileAG(t,e,n){return this._hasAnchors?e?n?(this._anchorCache.A1_G1||(this._anchorCache.A1_G1=this._resolveAnchors(t,e,n)),this._anchorCache.A1_G1):(this._anchorCache.A1_G0||(this._anchorCache.A1_G0=this._resolveAnchors(t,e,n)),this._anchorCache.A1_G0):n?(this._anchorCache.A0_G1||(this._anchorCache.A0_G1=this._resolveAnchors(t,e,n)),this._anchorCache.A0_G1):(this._anchorCache.A0_G0||(this._anchorCache.A0_G0=this._resolveAnchors(t,e,n)),this._anchorCache.A0_G0):this.compile(t)}_resolveAnchors(t,e,n){let r=this._items.map(s=>s.resolveAnchors(e,n));return new Jn(t,r,this._items.map(s=>s.ruleId))}},Jn=class{constructor(t,e,n){g(this,"scanner");this.regExps=e,this.rules=n,this.scanner=t.createOnigScanner(e)}dispose(){typeof this.scanner.dispose=="function"&&this.scanner.dispose()}toString(){let t=[];for(let e=0,n=this.rules.length;e<n;e++)t.push("   - "+this.rules[e]+": "+this.regExps[e]);return t.join(`\n`)}findNextMatchSync(t,e,n){let r=this.scanner.findNextMatchSync(t,e,n);return r?{ruleId:this.rules[r.index],captureIndices:r.captureIndices}:null}},Vt=class{constructor(t,e){this.languageId=t,this.tokenType=e}},Q,Uo=(Q=class{constructor(e,n){g(this,"_defaultAttributes");g(this,"_embeddedLanguagesMatcher");g(this,"_getBasicScopeAttributes",new lr(e=>{let n=this._scopeToLanguage(e),r=this._toStandardTokenType(e);return new Vt(n,r)}));this._defaultAttributes=new Vt(e,8),this._embeddedLanguagesMatcher=new jo(Object.entries(n||{}))}getDefaultAttributes(){return this._defaultAttributes}getBasicScopeAttributes(e){return e===null?Q._NULL_SCOPE_METADATA:this._getBasicScopeAttributes.get(e)}_scopeToLanguage(e){return this._embeddedLanguagesMatcher.match(e)||0}_toStandardTokenType(e){let n=e.match(Q.STANDARD_TOKEN_TYPE_REGEXP);if(!n)return 8;switch(n[1]){case"comment":return 1;case"string":return 2;case"regex":return 3;case"meta.embedded":return 0}throw new Error("Unexpected match for standard token type!")}},g(Q,"_NULL_SCOPE_METADATA",new Vt(0,0)),g(Q,"STANDARD_TOKEN_TYPE_REGEXP",/\\b(comment|string|regex|meta\\.embedded)\\b/),Q),jo=class{constructor(t){g(this,"values");g(this,"scopesRegExp");if(t.length===0)this.values=null,this.scopesRegExp=null;else{this.values=new Map(t);let e=t.map(([n,r])=>ir(n));e.sort(),e.reverse(),this.scopesRegExp=new RegExp(`^((${e.join(")|(")}))($|\\\\.)`,"")}}match(t){if(!this.scopesRegExp)return;let e=t.match(this.scopesRegExp);if(e)return this.values.get(e[1])}},dc={InDebugMode:typeof process<"u"&&!!process.env.VSCODE_TEXTMATE_DEBUG},mr=!1,er=class{constructor(t,e){this.stack=t,this.stoppedEarly=e}};function yr(t,e,n,r,s,o,a,i){let l=e.content.length,c=!1,u=-1;if(a){let d=zo(t,e,n,r,s,o);s=d.stack,r=d.linePos,n=d.isFirstLine,u=d.anchorPosition}let h=Date.now();for(;!c;){if(i!==0&&Date.now()-h>i)return new er(s,!0);p()}return new er(s,!1);function p(){let d=Wo(t,e,n,r,s,u);if(!d){o.produce(s,l),c=!0;return}let f=d.captureIndices,C=d.matchedRuleId,w=f&&f.length>0?f[0].end>r:!1;if(C===Bo){let y=s.getRule(t);o.produce(s,f[0].start),s=s.withContentNameScopesList(s.nameScopesList),Ge(t,e,n,s,o,y.endCaptures,f),o.produce(s,f[0].end);let b=s;if(s=s.parent,u=b.getAnchorPos(),!w&&b.getEnterPos()===r){s=b,o.produce(s,l),c=!0;return}}else{let y=t.getRule(C);o.produce(s,f[0].start);let b=s,k=y.getName(e.content,f),x=s.contentNameScopesList.pushAttributed(k,t);if(s=s.push(C,r,u,f[0].end===l,null,x,x),y instanceof Zt){let v=y;Ge(t,e,n,s,o,v.beginCaptures,f),o.produce(s,f[0].end),u=f[0].end;let O=v.getContentName(e.content,f),B=x.pushAttributed(O,t);if(s=s.withContentNameScopesList(B),v.endHasBackReferences&&(s=s.withEndRule(v.getEndWithResolvedBackReferences(e.content,f))),!w&&b.hasSameRuleAs(s)){s=s.pop(),o.produce(s,l),c=!0;return}}else if(y instanceof ht){let v=y;Ge(t,e,n,s,o,v.beginCaptures,f),o.produce(s,f[0].end),u=f[0].end;let O=v.getContentName(e.content,f),B=x.pushAttributed(O,t);if(s=s.withContentNameScopesList(B),v.whileHasBackReferences&&(s=s.withEndRule(v.getWhileWithResolvedBackReferences(e.content,f))),!w&&b.hasSameRuleAs(s)){s=s.pop(),o.produce(s,l),c=!0;return}}else if(Ge(t,e,n,s,o,y.captures,f),o.produce(s,f[0].end),s=s.pop(),!w){s=s.safePop(),o.produce(s,l),c=!0;return}}f[0].end>r&&(r=f[0].end,n=!1)}}function zo(t,e,n,r,s,o){let a=s.beginRuleCapturedEOL?0:-1,i=[];for(let l=s;l;l=l.pop()){let c=l.getRule(t);c instanceof ht&&i.push({rule:c,stack:l})}for(let l=i.pop();l;l=i.pop()){let{ruleScanner:c,findOptions:u}=Vo(l.rule,t,l.stack.endRule,n,r===a),h=c.findNextMatchSync(e,r,u);if(h){if(h.ruleId!==fr){s=l.stack.pop();break}h.captureIndices&&h.captureIndices.length&&(o.produce(l.stack,h.captureIndices[0].start),Ge(t,e,n,l.stack,o,l.rule.whileCaptures,h.captureIndices),o.produce(l.stack,h.captureIndices[0].end),a=h.captureIndices[0].end,h.captureIndices[0].end>r&&(r=h.captureIndices[0].end,n=!1))}else{s=l.stack.pop();break}}return{stack:s,linePos:r,anchorPosition:a,isFirstLine:n}}function Wo(t,e,n,r,s,o){let a=Ho(t,e,n,r,s,o),i=t.getInjections();if(i.length===0)return a;let l=qo(i,t,e,n,r,s,o);if(!l)return a;if(!a)return l;let c=a.captureIndices[0].start,u=l.captureIndices[0].start;return u<c||l.priorityMatch&&u===c?l:a}function Ho(t,e,n,r,s,o){let a=s.getRule(t),{ruleScanner:i,findOptions:l}=br(a,t,s.endRule,n,r===o),c=i.findNextMatchSync(e,r,l);return c?{captureIndices:c.captureIndices,matchedRuleId:c.ruleId}:null}function qo(t,e,n,r,s,o,a){let i=Number.MAX_VALUE,l=null,c,u=0,h=o.contentNameScopesList.getScopeNames();for(let p=0,d=t.length;p<d;p++){let f=t[p];if(!f.matcher(h))continue;let C=e.getRule(f.ruleId),{ruleScanner:w,findOptions:y}=br(C,e,null,r,s===a),b=w.findNextMatchSync(n,s,y);if(!b)continue;let k=b.captureIndices[0].start;if(!(k>=i)&&(i=k,l=b.captureIndices,c=b.ruleId,u=f.priority,i===s))break}return l?{priorityMatch:u===-1,captureIndices:l,matchedRuleId:c}:null}function br(t,e,n,r,s){if(mr){let a=t.compile(e,n),i=wr(r,s);return{ruleScanner:a,findOptions:i}}return{ruleScanner:t.compileAG(e,n,r,s),findOptions:0}}function Vo(t,e,n,r,s){if(mr){let a=t.compileWhile(e,n),i=wr(r,s);return{ruleScanner:a,findOptions:i}}return{ruleScanner:t.compileWhileAG(e,n,r,s),findOptions:0}}function wr(t,e){let n=0;return t||(n|=1),e||(n|=4),n}function Ge(t,e,n,r,s,o,a){if(o.length===0)return;let i=e.content,l=Math.min(o.length,a.length),c=[],u=a[0].end;for(let h=0;h<l;h++){let p=o[h];if(p===null)continue;let d=a[h];if(d.length===0)continue;if(d.start>u)break;for(;c.length>0&&c[c.length-1].endPos<=d.start;)s.produceFromScopes(c[c.length-1].scopes,c[c.length-1].endPos),c.pop();if(c.length>0?s.produceFromScopes(c[c.length-1].scopes,d.start):s.produce(r,d.start),p.retokenizeCapturedWithRuleId){let C=p.getName(i,a),w=r.contentNameScopesList.pushAttributed(C,t),y=p.getContentName(i,a),b=w.pushAttributed(y,t),k=r.push(p.retokenizeCapturedWithRuleId,d.start,-1,!1,null,w,b),x=t.createOnigString(i.substring(0,d.end));yr(t,x,n&&d.start===0,d.start,k,s,!1,0),hr(x);continue}let f=p.getName(i,a);if(f!==null){let w=(c.length>0?c[c.length-1].scopes:r.contentNameScopesList).pushAttributed(f,t);c.push(new Xo(w,d.end))}}for(;c.length>0;)s.produceFromScopes(c[c.length-1].scopes,c[c.length-1].endPos),c.pop()}var Xo=class{constructor(t,e){g(this,"scopes");g(this,"endPos");this.scopes=t,this.endPos=e}};function Ko(t,e,n,r,s,o,a,i){return new Zo(t,e,n,r,s,o,a,i)}function tr(t,e,n,r,s){let o=ct(e,pt),a=dr.getCompiledRuleId(n,r,s.repository);for(let i of o)t.push({debugSelector:e,matcher:i.matcher,ruleId:a,grammar:s,priority:i.priority})}function pt(t,e){if(e.length<t.length)return!1;let n=0;return t.every(r=>{for(let s=n;s<e.length;s++)if(Qo(e[s],r))return n=s+1,!0;return!1})}function Qo(t,e){if(!t)return!1;if(t===e)return!0;let n=e.length;return t.length>n&&t.substr(0,n)===e&&t[n]==="."}var Zo=class{constructor(t,e,n,r,s,o,a,i){g(this,"_rootId");g(this,"_lastRuleId");g(this,"_ruleId2desc");g(this,"_includedGrammars");g(this,"_grammarRepository");g(this,"_grammar");g(this,"_injections");g(this,"_basicScopeAttributesProvider");g(this,"_tokenTypeMatchers");if(this._rootScopeName=t,this.balancedBracketSelectors=o,this._onigLib=i,this._basicScopeAttributesProvider=new Uo(n,r),this._rootId=-1,this._lastRuleId=0,this._ruleId2desc=[null],this._includedGrammars={},this._grammarRepository=a,this._grammar=nr(e,null),this._injections=null,this._tokenTypeMatchers=[],s)for(let l of Object.keys(s)){let c=ct(l,pt);for(let u of c)this._tokenTypeMatchers.push({matcher:u.matcher,type:s[l]})}}get themeProvider(){return this._grammarRepository}dispose(){for(let t of this._ruleId2desc)t&&t.dispose()}createOnigScanner(t){return this._onigLib.createOnigScanner(t)}createOnigString(t){return this._onigLib.createOnigString(t)}getMetadataForScope(t){return this._basicScopeAttributesProvider.getBasicScopeAttributes(t)}_collectInjections(){let t={lookup:s=>s===this._rootScopeName?this._grammar:this.getExternalGrammar(s),injections:s=>this._grammarRepository.injections(s)},e=[],n=this._rootScopeName,r=t.lookup(n);if(r){let s=r.injections;if(s)for(let a in s)tr(e,a,s[a],this,r);let o=this._grammarRepository.injections(n);o&&o.forEach(a=>{let i=this.getExternalGrammar(a);if(i){let l=i.injectionSelector;l&&tr(e,l,i,this,i)}})}return e.sort((s,o)=>s.priority-o.priority),e}getInjections(){return this._injections===null&&(this._injections=this._collectInjections()),this._injections}registerRule(t){let e=++this._lastRuleId,n=t(e);return this._ruleId2desc[e]=n,n}getRule(t){return this._ruleId2desc[t]}getExternalGrammar(t,e){if(this._includedGrammars[t])return this._includedGrammars[t];if(this._grammarRepository){let n=this._grammarRepository.lookup(t);if(n)return this._includedGrammars[t]=nr(n,e&&e.$base),this._includedGrammars[t]}}tokenizeLine(t,e,n=0){let r=this._tokenize(t,e,!1,n);return{tokens:r.lineTokens.getResult(r.ruleStack,r.lineLength),ruleStack:r.ruleStack,stoppedEarly:r.stoppedEarly}}tokenizeLine2(t,e,n=0){let r=this._tokenize(t,e,!0,n);return{tokens:r.lineTokens.getBinaryResult(r.ruleStack,r.lineLength),ruleStack:r.ruleStack,stoppedEarly:r.stoppedEarly}}_tokenize(t,e,n,r){this._rootId===-1&&(this._rootId=dr.getCompiledRuleId(this._grammar.repository.$self,this,this._grammar.repository),this.getInjections());let s;if(!e||e===Yt.NULL){s=!0;let c=this._basicScopeAttributesProvider.getDefaultAttributes(),u=this.themeProvider.getDefaults(),h=ye.set(0,c.languageId,c.tokenType,null,u.fontStyle,u.foregroundId,u.backgroundId),p=this.getRule(this._rootId).getName(null,null),d;p?d=Be.createRootAndLookUpScopeName(p,h,this):d=Be.createRoot("unknown",h),e=new Yt(null,this._rootId,-1,-1,!1,null,d,d)}else s=!1,e.reset();t=t+`\n`;let o=this.createOnigString(t),a=o.content.length,i=new Jo(n,t,this._tokenTypeMatchers,this.balancedBracketSelectors),l=yr(this,o,s,0,e,i,!0,r);return hr(o),{lineLength:a,lineTokens:i,ruleStack:l.stack,stoppedEarly:l.stoppedEarly}}};function nr(t,e){return t=mo(t),t.repository=t.repository||{},t.repository.$self={$vscodeTextmateLocation:t.$vscodeTextmateLocation,patterns:t.patterns,name:t.scopeName},t.repository.$base=e||t.repository.$self,t}var Be=class V{constructor(e,n,r){this.parent=e,this.scopePath=n,this.tokenAttributes=r}static fromExtension(e,n){let r=e,s=e?.scopePath??null;for(let o of n)s=qt.push(s,o.scopeNames),r=new V(r,s,o.encodedTokenAttributes);return r}static createRoot(e,n){return new V(null,new qt(null,e),n)}static createRootAndLookUpScopeName(e,n,r){let s=r.getMetadataForScope(e),o=new qt(null,e),a=r.themeProvider.themeMatch(o),i=V.mergeAttributes(n,s,a);return new V(null,o,i)}get scopeName(){return this.scopePath.scopeName}toString(){return this.getScopeNames().join(" ")}equals(e){return V.equals(this,e)}static equals(e,n){do{if(e===n||!e&&!n)return!0;if(!e||!n||e.scopeName!==n.scopeName||e.tokenAttributes!==n.tokenAttributes)return!1;e=e.parent,n=n.parent}while(!0)}static mergeAttributes(e,n,r){let s=-1,o=0,a=0;return r!==null&&(s=r.fontStyle,o=r.foregroundId,a=r.backgroundId),ye.set(e,n.languageId,n.tokenType,null,s,o,a)}pushAttributed(e,n){if(e===null)return this;if(e.indexOf(" ")===-1)return V._pushAttributed(this,e,n);let r=e.split(/ /g),s=this;for(let o of r)s=V._pushAttributed(s,o,n);return s}static _pushAttributed(e,n,r){let s=r.getMetadataForScope(n),o=e.scopePath.push(n),a=r.themeProvider.themeMatch(o),i=V.mergeAttributes(e.tokenAttributes,s,a);return new V(e,o,i)}getScopeNames(){return this.scopePath.getSegments()}getExtensionIfDefined(e){let n=[],r=this;for(;r&&r!==e;)n.push({encodedTokenAttributes:r.tokenAttributes,scopeNames:r.scopePath.getExtensionIfDefined(r.parent?.scopePath??null)}),r=r.parent;return r===e?n.reverse():void 0}},z,Yt=(z=class{constructor(e,n,r,s,o,a,i,l){g(this,"_stackElementBrand");g(this,"_enterPos");g(this,"_anchorPos");g(this,"depth");this.parent=e,this.ruleId=n,this.beginRuleCapturedEOL=o,this.endRule=a,this.nameScopesList=i,this.contentNameScopesList=l,this.depth=this.parent?this.parent.depth+1:1,this._enterPos=r,this._anchorPos=s}equals(e){return e===null?!1:z._equals(this,e)}static _equals(e,n){return e===n?!0:this._structuralEquals(e,n)?Be.equals(e.contentNameScopesList,n.contentNameScopesList):!1}static _structuralEquals(e,n){do{if(e===n||!e&&!n)return!0;if(!e||!n||e.depth!==n.depth||e.ruleId!==n.ruleId||e.endRule!==n.endRule)return!1;e=e.parent,n=n.parent}while(!0)}clone(){return this}static _reset(e){for(;e;)e._enterPos=-1,e._anchorPos=-1,e=e.parent}reset(){z._reset(this)}pop(){return this.parent}safePop(){return this.parent?this.parent:this}push(e,n,r,s,o,a,i){return new z(this,e,n,r,s,o,a,i)}getEnterPos(){return this._enterPos}getAnchorPos(){return this._anchorPos}getRule(e){return e.getRule(this.ruleId)}toString(){let e=[];return this._writeString(e,0),"["+e.join(",")+"]"}_writeString(e,n){return this.parent&&(n=this.parent._writeString(e,n)),e[n++]=`(${this.ruleId}, ${this.nameScopesList?.toString()}, ${this.contentNameScopesList?.toString()})`,n}withContentNameScopesList(e){return this.contentNameScopesList===e?this:this.parent.push(this.ruleId,this._enterPos,this._anchorPos,this.beginRuleCapturedEOL,this.endRule,this.nameScopesList,e)}withEndRule(e){return this.endRule===e?this:new z(this.parent,this.ruleId,this._enterPos,this._anchorPos,this.beginRuleCapturedEOL,e,this.nameScopesList,this.contentNameScopesList)}hasSameRuleAs(e){let n=this;for(;n&&n._enterPos===e._enterPos;){if(n.ruleId===e.ruleId)return!0;n=n.parent}return!1}toStateStackFrame(){return{ruleId:this.ruleId,beginRuleCapturedEOL:this.beginRuleCapturedEOL,endRule:this.endRule,nameScopesList:this.nameScopesList?.getExtensionIfDefined(this.parent?.nameScopesList??null)??[],contentNameScopesList:this.contentNameScopesList?.getExtensionIfDefined(this.nameScopesList)??[]}}static pushFrame(e,n){let r=Be.fromExtension(e?.nameScopesList??null,n.nameScopesList);return new z(e,n.ruleId,n.enterPos??-1,n.anchorPos??-1,n.beginRuleCapturedEOL,n.endRule,r,Be.fromExtension(r,n.contentNameScopesList))}},g(z,"NULL",new z(null,0,0,0,!1,null,null,null)),z),Yo=class{constructor(t,e){g(this,"balancedBracketScopes");g(this,"unbalancedBracketScopes");g(this,"allowAny",!1);this.balancedBracketScopes=t.flatMap(n=>n==="*"?(this.allowAny=!0,[]):ct(n,pt).map(r=>r.matcher)),this.unbalancedBracketScopes=e.flatMap(n=>ct(n,pt).map(r=>r.matcher))}get matchesAlways(){return this.allowAny&&this.unbalancedBracketScopes.length===0}get matchesNever(){return this.balancedBracketScopes.length===0&&!this.allowAny}match(t){for(let e of this.unbalancedBracketScopes)if(e(t))return!1;for(let e of this.balancedBracketScopes)if(e(t))return!0;return this.allowAny}},Jo=class{constructor(t,e,n,r){g(this,"_emitBinaryTokens");g(this,"_lineText");g(this,"_tokens");g(this,"_binaryTokens");g(this,"_lastTokenEndIndex");g(this,"_tokenTypeOverrides");this.balancedBracketSelectors=r,this._emitBinaryTokens=t,this._tokenTypeOverrides=n,this._lineText=null,this._tokens=[],this._binaryTokens=[],this._lastTokenEndIndex=0}produce(t,e){this.produceFromScopes(t.contentNameScopesList,e)}produceFromScopes(t,e){if(this._lastTokenEndIndex>=e)return;if(this._emitBinaryTokens){let r=t?.tokenAttributes??0,s=!1;if(this.balancedBracketSelectors?.matchesAlways&&(s=!0),this._tokenTypeOverrides.length>0||this.balancedBracketSelectors&&!this.balancedBracketSelectors.matchesAlways&&!this.balancedBracketSelectors.matchesNever){let o=t?.getScopeNames()??[];for(let a of this._tokenTypeOverrides)a.matcher(o)&&(r=ye.set(r,0,a.type,null,-1,0,0));this.balancedBracketSelectors&&(s=this.balancedBracketSelectors.match(o))}if(s&&(r=ye.set(r,0,8,s,-1,0,0)),this._binaryTokens.length>0&&this._binaryTokens[this._binaryTokens.length-1]===r){this._lastTokenEndIndex=e;return}this._binaryTokens.push(this._lastTokenEndIndex),this._binaryTokens.push(r),this._lastTokenEndIndex=e;return}let n=t?.getScopeNames()??[];this._tokens.push({startIndex:this._lastTokenEndIndex,endIndex:e,scopes:n}),this._lastTokenEndIndex=e}getResult(t,e){return this._tokens.length>0&&this._tokens[this._tokens.length-1].startIndex===e-1&&this._tokens.pop(),this._tokens.length===0&&(this._lastTokenEndIndex=-1,this.produce(t,e),this._tokens[this._tokens.length-1].startIndex=0),this._tokens}getBinaryResult(t,e){this._binaryTokens.length>0&&this._binaryTokens[this._binaryTokens.length-2]===e-1&&(this._binaryTokens.pop(),this._binaryTokens.pop()),this._binaryTokens.length===0&&(this._lastTokenEndIndex=-1,this.produce(t,e),this._binaryTokens[this._binaryTokens.length-2]=0);let n=new Uint32Array(this._binaryTokens.length);for(let r=0,s=this._binaryTokens.length;r<s;r++)n[r]=this._binaryTokens[r];return n}},ea=class{constructor(t,e){g(this,"_grammars",new Map);g(this,"_rawGrammars",new Map);g(this,"_injectionGrammars",new Map);g(this,"_theme");this._onigLib=e,this._theme=t}dispose(){for(let t of this._grammars.values())t.dispose()}setTheme(t){this._theme=t}getColorMap(){return this._theme.getColorMap()}addGrammar(t,e){this._rawGrammars.set(t.scopeName,t),e&&this._injectionGrammars.set(t.scopeName,e)}lookup(t){return this._rawGrammars.get(t)}injections(t){return this._injectionGrammars.get(t)}getDefaults(){return this._theme.getDefaults()}themeMatch(t){return this._theme.match(t)}grammarForScopeName(t,e,n,r,s){if(!this._grammars.has(t)){let o=this._rawGrammars.get(t);if(!o)return null;this._grammars.set(t,Ko(t,o,e,n,r,s,this,this._onigLib))}return this._grammars.get(t)}},Cr=class{constructor(t){g(this,"_options");g(this,"_syncRegistry");g(this,"_ensureGrammarCache");this._options=t,this._syncRegistry=new ea(De.createFromRawTheme(t.theme,t.colorMap),t.onigLib),this._ensureGrammarCache=new Map}dispose(){this._syncRegistry.dispose()}setTheme(t,e){this._syncRegistry.setTheme(De.createFromRawTheme(t,e))}getColorMap(){return this._syncRegistry.getColorMap()}loadGrammarWithEmbeddedLanguages(t,e,n){return this.loadGrammarWithConfiguration(t,e,{embeddedLanguages:n})}loadGrammarWithConfiguration(t,e,n){return this._loadGrammar(t,e,n.embeddedLanguages,n.tokenTypes,new Yo(n.balancedBracketSelectors||[],n.unbalancedBracketSelectors||[]))}loadGrammar(t){return this._loadGrammar(t,0,null,null,null)}_loadGrammar(t,e,n,r,s){let o=new No(this._syncRegistry,t);for(;o.Q.length>0;)o.Q.map(a=>this._loadSingleGrammar(a.scopeName)),o.processQueue();return this._grammarForScopeName(t,e,n,r,s)}_loadSingleGrammar(t){this._ensureGrammarCache.has(t)||(this._doLoadSingleGrammar(t),this._ensureGrammarCache.set(t,!0))}_doLoadSingleGrammar(t){let e=this._options.loadGrammar(t);if(e){let n=typeof this._options.getInjections=="function"?this._options.getInjections(t):void 0;this._syncRegistry.addGrammar(e,n)}}addGrammar(t,e=[],n=0,r=null){return this._syncRegistry.addGrammar(t,e),this._grammarForScopeName(t.scopeName,n,r)}_grammarForScopeName(t,e=0,n=null,r=null,s=null){return this._syncRegistry.grammarForScopeName(t,e,n,r,s)}},ft=Yt.NULL;function He(t,e){let n=typeof t=="string"?{}:{...t.colorReplacements},r=typeof t=="string"?t:t.name;for(let[s,o]of Object.entries(e?.colorReplacements||{}))typeof o=="string"?n[s]=o:s===r&&Object.assign(n,o);return n}function Z(t,e){return t&&(e?.[t?.toLowerCase()]||t)}function vr(t){return Array.isArray(t)?t:[t]}async function en(t){return Promise.resolve(typeof t=="function"?t():t).then(e=>e.default||e)}function qe(t){return!t||["plaintext","txt","text","plain"].includes(t)}function Ar(t){return t==="ansi"||qe(t)}function Ve(t){return t==="none"}function Er(t){return Ve(t)}function Re(t,e=!1){if(t.length===0)return[["",0]];let n=t.split(/(\\r?\\n)/g),r=0,s=[];for(let o=0;o<n.length;o+=2){let a=e?n[o]+(n[o+1]||""):n[o];s.push([a,r]),r+=n[o].length,r+=n[o+1]?.length||0}return s}var kr={light:"#333333",dark:"#bbbbbb"},Sr={light:"#fffffe",dark:"#1e1e1e"},_r="__shiki_resolved";function dt(t){if(t?.[_r])return t;let e={...t};e.tokenColors&&!e.settings&&(e.settings=e.tokenColors,delete e.tokenColors),e.type||(e.type="dark"),e.colorReplacements={...e.colorReplacements},e.settings||(e.settings=[]);let{bg:n,fg:r}=e;if(!n||!r){let i=e.settings?e.settings.find(l=>!l.name&&!l.scope):void 0;i?.settings?.foreground&&(r=i.settings.foreground),i?.settings?.background&&(n=i.settings.background),!r&&e?.colors?.["editor.foreground"]&&(r=e.colors["editor.foreground"]),!n&&e?.colors?.["editor.background"]&&(n=e.colors["editor.background"]),r||(r=e.type==="light"?kr.light:kr.dark),n||(n=e.type==="light"?Sr.light:Sr.dark),e.fg=r,e.bg=n}e.settings[0]&&e.settings[0].settings&&!e.settings[0].scope||e.settings.unshift({settings:{foreground:e.fg,background:e.bg}});let s=0,o=new Map;function a(i){if(o.has(i))return o.get(i);s+=1;let l=`#${s.toString(16).padStart(8,"0").toLowerCase()}`;return e.colorReplacements?.[`#${l}`]?a(i):(o.set(i,l),l)}e.settings=e.settings.map(i=>{let l=i.settings?.foreground&&!i.settings.foreground.startsWith("#"),c=i.settings?.background&&!i.settings.background.startsWith("#");if(!l&&!c)return i;let u={...i,settings:{...i.settings}};if(l){let h=a(i.settings.foreground);e.colorReplacements[h]=i.settings.foreground,u.settings.foreground=h}if(c){let h=a(i.settings.background);e.colorReplacements[h]=i.settings.background,u.settings.background=h}return u});for(let i of Object.keys(e.colors||{}))if((i==="editor.foreground"||i==="editor.background"||i.startsWith("terminal.ansi"))&&!e.colors[i]?.startsWith("#")){let l=a(e.colors[i]);e.colorReplacements[l]=e.colors[i],e.colors[i]=l}return Object.defineProperty(e,_r,{enumerable:!1,writable:!1,value:!0}),e}async function ta(t){return Array.from(new Set((await Promise.all(t.filter(e=>!Ar(e)).map(async e=>await en(e).then(n=>Array.isArray(n)?n:[n])))).flat()))}async function na(t){return(await Promise.all(t.map(async e=>Er(e)?null:dt(await en(e))))).filter(e=>!!e)}function Ir(t,e){if(!e)return t;if(e[t]){let n=new Set([t]);for(;e[t];){if(t=e[t],n.has(t))throw new E(`Circular alias \\`${Array.from(n).join(" -> ")} -> ${t}\\``);n.add(t)}}return t}var ra=class extends Cr{constructor(e,n,r,s={}){super(e);g(this,"_resolvedThemes",new Map);g(this,"_resolvedGrammars",new Map);g(this,"_langMap",new Map);g(this,"_langGraph",new Map);g(this,"_textmateThemeCache",new WeakMap);g(this,"_loadedThemesCache",null);g(this,"_loadedLanguagesCache",null);this._resolver=e,this._themes=n,this._langs=r,this._alias=s,this._themes.map(o=>this.loadTheme(o)),this.loadLanguages(this._langs)}getTheme(e){return typeof e=="string"?this._resolvedThemes.get(e):this.loadTheme(e)}loadTheme(e){let n=dt(e);return n.name&&(this._resolvedThemes.set(n.name,n),this._loadedThemesCache=null),n}getLoadedThemes(){return this._loadedThemesCache||(this._loadedThemesCache=[...this._resolvedThemes.keys()]),this._loadedThemesCache}setTheme(e){let n=this._textmateThemeCache.get(e);n||(n=De.createFromRawTheme(e),this._textmateThemeCache.set(e,n)),this._syncRegistry.setTheme(n)}getGrammar(e){return e=Ir(e,this._alias),this._resolvedGrammars.get(e)}loadLanguage(e){if(this.getGrammar(e.name))return;let n=new Set([...this._langMap.values()].filter(o=>o.embeddedLangsLazy?.includes(e.name)));this._resolver.addLanguage(e);let r={balancedBracketSelectors:e.balancedBracketSelectors||["*"],unbalancedBracketSelectors:e.unbalancedBracketSelectors||[]};this._syncRegistry._rawGrammars.set(e.scopeName,e);let s=this.loadGrammarWithConfiguration(e.scopeName,1,r);if(s.name=e.name,this._resolvedGrammars.set(e.name,s),e.aliases&&e.aliases.forEach(o=>{this._alias[o]=e.name}),this._loadedLanguagesCache=null,n.size)for(let o of n)this._resolvedGrammars.delete(o.name),this._loadedLanguagesCache=null,this._syncRegistry?._injectionGrammars?.delete(o.scopeName),this._syncRegistry?._grammars?.delete(o.scopeName),this.loadLanguage(this._langMap.get(o.name))}dispose(){super.dispose(),this._resolvedThemes.clear(),this._resolvedGrammars.clear(),this._langMap.clear(),this._langGraph.clear(),this._loadedThemesCache=null}loadLanguages(e){for(let s of e)this.resolveEmbeddedLanguages(s);let n=Array.from(this._langGraph.entries()),r=n.filter(([s,o])=>!o);if(r.length){let s=n.filter(([o,a])=>a?(a.embeddedLanguages||a.embeddedLangs)?.some(i=>r.map(([l])=>l).includes(i)):!1).filter(o=>!r.includes(o));throw new E(`Missing languages ${r.map(([o])=>`\\`${o}\\``).join(", ")}, required by ${s.map(([o])=>`\\`${o}\\``).join(", ")}`)}for(let[s,o]of n)this._resolver.addLanguage(o);for(let[s,o]of n)this.loadLanguage(o)}getLoadedLanguages(){return this._loadedLanguagesCache||(this._loadedLanguagesCache=[...new Set([...this._resolvedGrammars.keys(),...Object.keys(this._alias)])]),this._loadedLanguagesCache}resolveEmbeddedLanguages(e){this._langMap.set(e.name,e),this._langGraph.set(e.name,e);let n=e.embeddedLanguages??e.embeddedLangs;if(n)for(let r of n)this._langGraph.set(r,this._langMap.get(r))}},sa=class{constructor(t,e){g(this,"_langs",new Map);g(this,"_scopeToLang",new Map);g(this,"_injections",new Map);g(this,"_onigLib");this._onigLib={createOnigScanner:n=>t.createScanner(n),createOnigString:n=>t.createString(n)},e.forEach(n=>this.addLanguage(n))}get onigLib(){return this._onigLib}getLangRegistration(t){return this._langs.get(t)}loadGrammar(t){return this._scopeToLang.get(t)}addLanguage(t){this._langs.set(t.name,t),t.aliases&&t.aliases.forEach(e=>{this._langs.set(e,t)}),this._scopeToLang.set(t.scopeName,t),t.injectTo&&t.injectTo.forEach(e=>{this._injections.get(e)||this._injections.set(e,[]),this._injections.get(e).push(t.scopeName)})}getInjections(t){let e=t.split("."),n=[];for(let r=1;r<=e.length;r++){let s=e.slice(0,r).join(".");n=[...n,...this._injections.get(s)||[]]}return n}},We=0;function tn(t){We+=1,t.warnings!==!1&&We>=10&&We%10===0&&console.warn(`[Shiki] ${We} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \\`highlighter.dispose()\\` to release unused instances.`);let e=!1;if(!t.engine)throw new E("`engine` option is required for synchronous mode");let n=(t.langs||[]).flat(1),r=(t.themes||[]).flat(1).map(dt),s=new ra(new sa(t.engine,n),r,n,t.langAlias),o;function a(b){return Ir(b,t.langAlias)}function i(b){w();let k=s.getGrammar(typeof b=="string"?b:b.name);if(!k)throw new E(`Language \\`${b}\\` not found, you may need to load it first`);return k}function l(b){if(b==="none")return{bg:"",fg:"",name:"none",settings:[],type:"dark"};w();let k=s.getTheme(b);if(!k)throw new E(`Theme \\`${b}\\` not found, you may need to load it first`);return k}function c(b){w();let k=l(b);return o!==b&&(s.setTheme(k),o=b),{theme:k,colorMap:s.getColorMap()}}function u(){return w(),s.getLoadedThemes()}function h(){return w(),s.getLoadedLanguages()}function p(...b){w(),s.loadLanguages(b.flat(1))}async function d(...b){return p(await ta(b))}function f(...b){w();for(let k of b.flat(1))s.loadTheme(k)}async function C(...b){return w(),f(await na(b))}function w(){if(e)throw new E("Shiki instance has been disposed")}function y(){e||(e=!0,s.dispose(),We-=1)}return{setTheme:c,getTheme:l,getLanguage:i,getLoadedThemes:u,getLoadedLanguages:h,resolveLangAlias:a,loadLanguage:d,loadLanguageSync:p,loadTheme:C,loadThemeSync:f,dispose:y,[Symbol.dispose]:y}}var Rr=new WeakMap;function Xe(t,e){Rr.set(t,e)}function Ne(t){return Rr.get(t)}var gt=class Nr{constructor(...e){g(this,"_stacks",{});g(this,"lang");if(e.length===2){let[n,r]=e;this.lang=r,this._stacks=n}else{let[n,r,s]=e;this.lang=r,this._stacks={[s]:n}}}get themes(){return Object.keys(this._stacks)}get theme(){return this.themes[0]}get _stack(){return this._stacks[this.theme]}static initial(e,n){return new Nr(Object.fromEntries(vr(n).map(r=>[r,ft])),e)}getInternalStack(e=this.theme){return this._stacks[e]}getScopes(e=this.theme){return oa(this._stacks[e])}toJSON(){return{lang:this.lang,theme:this.theme,themes:this.themes,scopes:this.getScopes()}}};function oa(t){let e=[],n=new Set;function r(s){if(n.has(s))return;n.add(s);let o=s?.nameScopesList?.scopeName;o&&e.push(o),s.parent&&r(s.parent)}return r(t),e}function aa(t,e){if(!(t instanceof gt))throw new E("Invalid grammar state");return t.getInternalStack(e)}function nn(t,e,n={}){let{theme:r=t.getLoadedThemes()[0]}=n;if(qe(t.resolveLangAlias(n.lang||"text"))||Ve(r))return Re(e).map(i=>[{content:i[0],offset:i[1]}]);let{theme:s,colorMap:o}=t.setTheme(r),a=t.getLanguage(n.lang||"text");if(n.grammarState){if(n.grammarState.lang!==a.name)throw new E(`Grammar state language "${n.grammarState.lang}" does not match highlight language "${a.name}"`);if(!n.grammarState.themes.includes(s.name))throw new E(`Grammar state themes "${n.grammarState.themes}" do not contain highlight theme "${s.name}"`)}return Tr(e,a,s,o,n)}function Lr(...t){if(t.length===2)return Ne(t[1]);let[e,n,r={}]=t,{lang:s="text",theme:o=e.getLoadedThemes()[0]}=r;if(qe(s)||Ve(o))throw new E("Plain language does not have grammar state");if(s==="ansi")throw new E("ANSI language does not have grammar state");let{theme:a,colorMap:i}=e.setTheme(o),l=e.getLanguage(s);return new gt(rn(n,l,a,i,r).stateStack,l.name,a.name)}function Tr(t,e,n,r,s){let o=rn(t,e,n,r,s),a=new gt(o.stateStack,e.name,n.name);return Xe(o.tokens,a),o.tokens}function rn(t,e,n,r,s){let o=He(n,s),{tokenizeMaxLineLength:a=0,tokenizeTimeLimit:i=500}=s,l=Re(t),c=s.grammarState?aa(s.grammarState,n.name)??ft:s.grammarContextCode!=null?rn(s.grammarContextCode,e,n,r,{...s,grammarState:void 0,grammarContextCode:void 0}).stateStack:ft,u=[],h=[];for(let p=0,d=l.length;p<d;p++){let[f,C]=l[p];if(f===""){u=[],h.push([]);continue}if(a>0&&f.length>=a){u=[],h.push([{content:f,offset:C,color:"",fontStyle:0}]);continue}let w,y,b;s.includeExplanation&&(w=e.tokenizeLine(f,c,i),y=w.tokens,b=0);let k=e.tokenizeLine2(f,c,i),x=k.tokens.length/2;for(let v=0;v<x;v++){let O=k.tokens[2*v],B=v+1<x?k.tokens[2*v+2]:f.length;if(O===B)continue;let X=k.tokens[2*v+1],ot=Z(r[ye.getForeground(X)],o),Ut=ye.getFontStyle(X),Oe={content:f.substring(O,B),offset:C+O,color:ot,fontStyle:Ut};if(s.includeExplanation){let ie=[];if(s.includeExplanation!=="scopeName")for(let K of n.settings){let Ie;switch(typeof K.scope){case"string":Ie=K.scope.split(/,/).map(jt=>jt.trim());break;case"object":Ie=K.scope;break;default:continue}ie.push({settings:K,selectors:Ie.map(jt=>jt.split(/ /))})}Oe.explanation=[];let Hn=0;for(;O+Hn<B;){let K=y[b],Ie=f.substring(K.startIndex,K.endIndex);Hn+=Ie.length,Oe.explanation.push({content:Ie,scopes:s.includeExplanation==="scopeName"?ia(K.scopes):la(ie,K.scopes)}),b+=1}}u.push(Oe)}h.push(u),u=[],c=k.ruleStack}return{tokens:h,stateStack:c}}function ia(t){return t.map(e=>({scopeName:e}))}function la(t,e){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n[r]={scopeName:o,themeMatches:ua(t,o,e.slice(0,r))}}return n}function xr(t,e){return t===e||e.substring(0,t.length)===t&&e[t.length]==="."}function ca(t,e,n){if(!xr(t[t.length-1],e))return!1;let r=t.length-2,s=n.length-1;for(;r>=0&&s>=0;)xr(t[r],n[s])&&(r-=1),s-=1;return r===-1}function ua(t,e,n){let r=[];for(let{selectors:s,settings:o}of t)for(let a of s)if(ca(a,e,n)){r.push(o);break}return r}function mt(t,e,n,r=nn){let s=Object.entries(n.themes).filter(c=>c[1]).map(c=>({color:c[0],theme:c[1]})),o=s.map(c=>{let u=r(t,e,{...n,theme:c.theme});return{tokens:u,state:Ne(u),theme:typeof c.theme=="string"?c.theme:c.theme.name}}),a=ha(...o.map(c=>c.tokens)),i=a[0].map((c,u)=>c.map((h,p)=>{let d={content:h.content,variants:{},offset:h.offset};return"includeExplanation"in n&&n.includeExplanation&&(d.explanation=h.explanation),a.forEach((f,C)=>{let{content:w,explanation:y,offset:b,...k}=f[u][p];d.variants[s[C].color]=k}),d})),l=o[0].state?new gt(Object.fromEntries(o.map(c=>[c.theme,c.state?.getInternalStack(c.theme)])),o[0].state.lang):void 0;return l&&Xe(i,l),i}function ha(...t){let e=t.map(()=>[]),n=t.length;for(let r=0;r<t[0].length;r++){let s=t.map(l=>l[r]),o=e.map(()=>[]);e.forEach((l,c)=>l.push(o[c]));let a=s.map(()=>0),i=s.map(l=>l[0]);for(;i.every(l=>l);){let l=Math.min(...i.map(c=>c.content.length));for(let c=0;c<n;c++){let u=i[c];u.content.length===l?(o[c].push(u),a[c]+=1,i[c]=s[c][a[c]]):(o[c].push({...u,content:u.content.slice(0,l)}),i[c]={...u,content:u.content.slice(l),offset:u.offset+l})}}}return e}var Pr=["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"];var Y=class{constructor(e,n,r){this.normal=n,this.property=e,r&&(this.space=r)}};Y.prototype.normal={};Y.prototype.property={};Y.prototype.space=void 0;function sn(t,e){let n={},r={};for(let s of t)Object.assign(n,s.property),Object.assign(r,s.normal);return new Y(n,r,e)}function Ke(t){return t.toLowerCase()}var P=class{constructor(e,n){this.attribute=n,this.property=e}};P.prototype.attribute="";P.prototype.booleanish=!1;P.prototype.boolean=!1;P.prototype.commaOrSpaceSeparated=!1;P.prototype.commaSeparated=!1;P.prototype.defined=!1;P.prototype.mustUseProperty=!1;P.prototype.number=!1;P.prototype.overloadedBoolean=!1;P.prototype.property="";P.prototype.spaceSeparated=!1;P.prototype.space=void 0;var Qe={};go(Qe,{boolean:()=>S,booleanish:()=>I,commaOrSpaceSeparated:()=>D,commaSeparated:()=>le,number:()=>m,overloadedBoolean:()=>yt,spaceSeparated:()=>A});var pa=0,S=be(),I=be(),yt=be(),m=be(),A=be(),le=be(),D=be();function be(){return 2**++pa}var on=Object.keys(Qe),we=class extends P{constructor(e,n,r,s){let o=-1;if(super(e,n),Mr(this,"space",s),typeof r=="number")for(;++o<on.length;){let a=on[o];Mr(this,on[o],(r&Qe[a])===Qe[a])}}};we.prototype.defined=!0;function Mr(t,e,n){n&&(t[e]=n)}function W(t){let e={},n={};for(let[r,s]of Object.entries(t.properties)){let o=new we(r,t.transform(t.attributes||{},r),s,t.space);t.mustUseProperty&&t.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),e[r]=o,n[Ke(r)]=r,n[Ke(o.attribute)]=r}return new Y(e,n,t.space)}var an=W({properties:{ariaActiveDescendant:null,ariaAtomic:I,ariaAutoComplete:null,ariaBusy:I,ariaChecked:I,ariaColCount:m,ariaColIndex:m,ariaColSpan:m,ariaControls:A,ariaCurrent:null,ariaDescribedBy:A,ariaDetails:null,ariaDisabled:I,ariaDropEffect:A,ariaErrorMessage:null,ariaExpanded:I,ariaFlowTo:A,ariaGrabbed:I,ariaHasPopup:null,ariaHidden:I,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:A,ariaLevel:m,ariaLive:null,ariaModal:I,ariaMultiLine:I,ariaMultiSelectable:I,ariaOrientation:null,ariaOwns:A,ariaPlaceholder:null,ariaPosInSet:m,ariaPressed:I,ariaReadOnly:I,ariaRelevant:null,ariaRequired:I,ariaRoleDescription:A,ariaRowCount:m,ariaRowIndex:m,ariaRowSpan:m,ariaSelected:I,ariaSetSize:m,ariaSort:null,ariaValueMax:m,ariaValueMin:m,ariaValueNow:m,ariaValueText:null,role:null},transform(t,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()}});function bt(t,e){return e in t?t[e]:e}function wt(t,e){return bt(t,e.toLowerCase())}var $r=W({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:le,acceptCharset:A,accessKey:A,action:null,allow:null,allowFullScreen:S,allowPaymentRequest:S,allowUserMedia:S,alt:null,as:null,async:S,autoCapitalize:null,autoComplete:A,autoFocus:S,autoPlay:S,blocking:A,capture:null,charSet:null,checked:S,cite:null,className:A,cols:m,colSpan:null,content:null,contentEditable:I,controls:S,controlsList:A,coords:m|le,crossOrigin:null,data:null,dateTime:null,decoding:null,default:S,defer:S,dir:null,dirName:null,disabled:S,download:yt,draggable:I,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:S,formTarget:null,headers:A,height:m,hidden:yt,high:m,href:null,hrefLang:null,htmlFor:A,httpEquiv:A,id:null,imageSizes:null,imageSrcSet:null,inert:S,inputMode:null,integrity:null,is:null,isMap:S,itemId:null,itemProp:A,itemRef:A,itemScope:S,itemType:A,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:S,low:m,manifest:null,max:null,maxLength:m,media:null,method:null,min:null,minLength:m,multiple:S,muted:S,name:null,nonce:null,noModule:S,noValidate:S,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:S,optimum:m,pattern:null,ping:A,placeholder:null,playsInline:S,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:S,referrerPolicy:null,rel:A,required:S,reversed:S,rows:m,rowSpan:m,sandbox:A,scope:null,scoped:S,seamless:S,selected:S,shadowRootClonable:S,shadowRootDelegatesFocus:S,shadowRootMode:null,shape:null,size:m,sizes:null,slot:null,span:m,spellCheck:I,src:null,srcDoc:null,srcLang:null,srcSet:null,start:m,step:null,style:null,tabIndex:m,target:null,title:null,translate:null,type:null,typeMustMatch:S,useMap:null,value:I,width:m,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:A,axis:null,background:null,bgColor:null,border:m,borderColor:null,bottomMargin:m,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:S,declare:S,event:null,face:null,frame:null,frameBorder:null,hSpace:m,leftMargin:m,link:null,longDesc:null,lowSrc:null,marginHeight:m,marginWidth:m,noResize:S,noHref:S,noShade:S,noWrap:S,object:null,profile:null,prompt:null,rev:null,rightMargin:m,rules:null,scheme:null,scrolling:I,standby:null,summary:null,text:null,topMargin:m,valueType:null,version:null,vAlign:null,vLink:null,vSpace:m,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:S,disableRemotePlayback:S,prefix:null,property:null,results:m,security:null,unselectable:null},space:"html",transform:wt});var Or=W({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:D,accentHeight:m,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:m,amplitude:m,arabicForm:null,ascent:m,attributeName:null,attributeType:null,azimuth:m,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:m,by:null,calcMode:null,capHeight:m,className:A,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:m,diffuseConstant:m,direction:null,display:null,dur:null,divisor:m,dominantBaseline:null,download:S,dx:null,dy:null,edgeMode:null,editable:null,elevation:m,enableBackground:null,end:null,event:null,exponent:m,externalResourcesRequired:null,fill:null,fillOpacity:m,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:le,g2:le,glyphName:le,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:m,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:m,horizOriginX:m,horizOriginY:m,id:null,ideographic:m,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:m,k:m,k1:m,k2:m,k3:m,k4:m,kernelMatrix:D,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:m,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:m,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:m,overlineThickness:m,paintOrder:null,panose1:null,path:null,pathLength:m,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:A,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:m,pointsAtY:m,pointsAtZ:m,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:D,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:D,rev:D,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:D,requiredFeatures:D,requiredFonts:D,requiredFormats:D,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:m,specularExponent:m,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:m,strikethroughThickness:m,string:null,stroke:null,strokeDashArray:D,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:m,strokeOpacity:m,strokeWidth:null,style:null,surfaceScale:m,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:D,tabIndex:m,tableValues:null,target:null,targetX:m,targetY:m,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:D,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:m,underlineThickness:m,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:m,values:null,vAlphabetic:m,vMathematical:m,vectorEffect:null,vHanging:m,vIdeographic:m,version:null,vertAdvY:m,vertOriginX:m,vertOriginY:m,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:m,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:bt});var ln=W({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(t,e){return"xlink:"+e.slice(5).toLowerCase()}});var cn=W({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:wt});var un=W({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(t,e){return"xml:"+e.slice(3).toLowerCase()}});var fa=/[A-Z]/g,Gr=/-[a-z]/g,da=/^data[-\\w.:]+$/i;function hn(t,e){let n=Ke(e),r=e,s=P;if(n in t.normal)return t.property[t.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&da.test(e)){if(e.charAt(4)==="-"){let o=e.slice(5).replace(Gr,ma);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{let o=e.slice(4);if(!Gr.test(o)){let a=o.replace(fa,ga);a.charAt(0)!=="-"&&(a="-"+a),e="data"+a}}s=we}return new s(r,e)}function ga(t){return"-"+t.toLowerCase()}function ma(t){return t.charAt(1).toUpperCase()}var Br=sn([an,$r,ln,cn,un],"html"),Ct=sn([an,Or,ln,cn,un],"svg");var Dr={}.hasOwnProperty;function Fr(t,e){let n=e||{};function r(s,...o){let a=r.invalid,i=r.handlers;if(s&&Dr.call(s,t)){let l=String(s[t]);a=Dr.call(i,l)?i[l]:r.unknown}if(a)return a.call(this,s,...o)}return r.handlers=n.handlers||{},r.invalid=n.invalid,r.unknown=n.unknown,r}var ya=/["&\'<>`]/g,ba=/[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]/g,wa=/[\\x01-\\t\\v\\f\\x0E-\\x1F\\x7F\\x81\\x8D\\x8F\\x90\\x9D\\xA0-\\uFFFF]/g,Ca=/[|\\\\{}()[\\]^$+*?.]/g,Ur=new WeakMap;function jr(t,e){if(t=t.replace(e.subset?ka(e.subset):ya,r),e.subset||e.escapeOnly)return t;return t.replace(ba,n).replace(wa,r);function n(s,o,a){return e.format((s.charCodeAt(0)-55296)*1024+s.charCodeAt(1)-56320+65536,a.charCodeAt(o+2),e)}function r(s,o,a){return e.format(s.charCodeAt(0),a.charCodeAt(o+1),e)}}function ka(t){let e=Ur.get(t);return e||(e=Sa(t),Ur.set(t,e)),e}function Sa(t){let e=[],n=-1;for(;++n<t.length;)e.push(t[n].replace(Ca,"\\\\$&"));return new RegExp("(?:"+e.join("|")+")","g")}var _a=/[\\dA-Fa-f]/;function zr(t,e,n){let r="&#x"+t.toString(16).toUpperCase();return n&&e&&!_a.test(String.fromCharCode(e))?r:r+";"}var xa=/\\d/;function Wr(t,e,n){let r="&#"+String(t);return n&&e&&!xa.test(String.fromCharCode(e))?r:r+";"}var Hr=["AElig","AMP","Aacute","Acirc","Agrave","Aring","Atilde","Auml","COPY","Ccedil","ETH","Eacute","Ecirc","Egrave","Euml","GT","Iacute","Icirc","Igrave","Iuml","LT","Ntilde","Oacute","Ocirc","Ograve","Oslash","Otilde","Ouml","QUOT","REG","THORN","Uacute","Ucirc","Ugrave","Uuml","Yacute","aacute","acirc","acute","aelig","agrave","amp","aring","atilde","auml","brvbar","ccedil","cedil","cent","copy","curren","deg","divide","eacute","ecirc","egrave","eth","euml","frac12","frac14","frac34","gt","iacute","icirc","iexcl","igrave","iquest","iuml","laquo","lt","macr","micro","middot","nbsp","not","ntilde","oacute","ocirc","ograve","ordf","ordm","oslash","otilde","ouml","para","plusmn","pound","quot","raquo","reg","sect","shy","sup1","sup2","sup3","szlig","thorn","times","uacute","ucirc","ugrave","uml","uuml","yacute","yen","yuml"];var kt={nbsp:"\\xA0",iexcl:"\\xA1",cent:"\\xA2",pound:"\\xA3",curren:"\\xA4",yen:"\\xA5",brvbar:"\\xA6",sect:"\\xA7",uml:"\\xA8",copy:"\\xA9",ordf:"\\xAA",laquo:"\\xAB",not:"\\xAC",shy:"\\xAD",reg:"\\xAE",macr:"\\xAF",deg:"\\xB0",plusmn:"\\xB1",sup2:"\\xB2",sup3:"\\xB3",acute:"\\xB4",micro:"\\xB5",para:"\\xB6",middot:"\\xB7",cedil:"\\xB8",sup1:"\\xB9",ordm:"\\xBA",raquo:"\\xBB",frac14:"\\xBC",frac12:"\\xBD",frac34:"\\xBE",iquest:"\\xBF",Agrave:"\\xC0",Aacute:"\\xC1",Acirc:"\\xC2",Atilde:"\\xC3",Auml:"\\xC4",Aring:"\\xC5",AElig:"\\xC6",Ccedil:"\\xC7",Egrave:"\\xC8",Eacute:"\\xC9",Ecirc:"\\xCA",Euml:"\\xCB",Igrave:"\\xCC",Iacute:"\\xCD",Icirc:"\\xCE",Iuml:"\\xCF",ETH:"\\xD0",Ntilde:"\\xD1",Ograve:"\\xD2",Oacute:"\\xD3",Ocirc:"\\xD4",Otilde:"\\xD5",Ouml:"\\xD6",times:"\\xD7",Oslash:"\\xD8",Ugrave:"\\xD9",Uacute:"\\xDA",Ucirc:"\\xDB",Uuml:"\\xDC",Yacute:"\\xDD",THORN:"\\xDE",szlig:"\\xDF",agrave:"\\xE0",aacute:"\\xE1",acirc:"\\xE2",atilde:"\\xE3",auml:"\\xE4",aring:"\\xE5",aelig:"\\xE6",ccedil:"\\xE7",egrave:"\\xE8",eacute:"\\xE9",ecirc:"\\xEA",euml:"\\xEB",igrave:"\\xEC",iacute:"\\xED",icirc:"\\xEE",iuml:"\\xEF",eth:"\\xF0",ntilde:"\\xF1",ograve:"\\xF2",oacute:"\\xF3",ocirc:"\\xF4",otilde:"\\xF5",ouml:"\\xF6",divide:"\\xF7",oslash:"\\xF8",ugrave:"\\xF9",uacute:"\\xFA",ucirc:"\\xFB",uuml:"\\xFC",yacute:"\\xFD",thorn:"\\xFE",yuml:"\\xFF",fnof:"\\u0192",Alpha:"\\u0391",Beta:"\\u0392",Gamma:"\\u0393",Delta:"\\u0394",Epsilon:"\\u0395",Zeta:"\\u0396",Eta:"\\u0397",Theta:"\\u0398",Iota:"\\u0399",Kappa:"\\u039A",Lambda:"\\u039B",Mu:"\\u039C",Nu:"\\u039D",Xi:"\\u039E",Omicron:"\\u039F",Pi:"\\u03A0",Rho:"\\u03A1",Sigma:"\\u03A3",Tau:"\\u03A4",Upsilon:"\\u03A5",Phi:"\\u03A6",Chi:"\\u03A7",Psi:"\\u03A8",Omega:"\\u03A9",alpha:"\\u03B1",beta:"\\u03B2",gamma:"\\u03B3",delta:"\\u03B4",epsilon:"\\u03B5",zeta:"\\u03B6",eta:"\\u03B7",theta:"\\u03B8",iota:"\\u03B9",kappa:"\\u03BA",lambda:"\\u03BB",mu:"\\u03BC",nu:"\\u03BD",xi:"\\u03BE",omicron:"\\u03BF",pi:"\\u03C0",rho:"\\u03C1",sigmaf:"\\u03C2",sigma:"\\u03C3",tau:"\\u03C4",upsilon:"\\u03C5",phi:"\\u03C6",chi:"\\u03C7",psi:"\\u03C8",omega:"\\u03C9",thetasym:"\\u03D1",upsih:"\\u03D2",piv:"\\u03D6",bull:"\\u2022",hellip:"\\u2026",prime:"\\u2032",Prime:"\\u2033",oline:"\\u203E",frasl:"\\u2044",weierp:"\\u2118",image:"\\u2111",real:"\\u211C",trade:"\\u2122",alefsym:"\\u2135",larr:"\\u2190",uarr:"\\u2191",rarr:"\\u2192",darr:"\\u2193",harr:"\\u2194",crarr:"\\u21B5",lArr:"\\u21D0",uArr:"\\u21D1",rArr:"\\u21D2",dArr:"\\u21D3",hArr:"\\u21D4",forall:"\\u2200",part:"\\u2202",exist:"\\u2203",empty:"\\u2205",nabla:"\\u2207",isin:"\\u2208",notin:"\\u2209",ni:"\\u220B",prod:"\\u220F",sum:"\\u2211",minus:"\\u2212",lowast:"\\u2217",radic:"\\u221A",prop:"\\u221D",infin:"\\u221E",ang:"\\u2220",and:"\\u2227",or:"\\u2228",cap:"\\u2229",cup:"\\u222A",int:"\\u222B",there4:"\\u2234",sim:"\\u223C",cong:"\\u2245",asymp:"\\u2248",ne:"\\u2260",equiv:"\\u2261",le:"\\u2264",ge:"\\u2265",sub:"\\u2282",sup:"\\u2283",nsub:"\\u2284",sube:"\\u2286",supe:"\\u2287",oplus:"\\u2295",otimes:"\\u2297",perp:"\\u22A5",sdot:"\\u22C5",lceil:"\\u2308",rceil:"\\u2309",lfloor:"\\u230A",rfloor:"\\u230B",lang:"\\u2329",rang:"\\u232A",loz:"\\u25CA",spades:"\\u2660",clubs:"\\u2663",hearts:"\\u2665",diams:"\\u2666",quot:\'"\',amp:"&",lt:"<",gt:">",OElig:"\\u0152",oelig:"\\u0153",Scaron:"\\u0160",scaron:"\\u0161",Yuml:"\\u0178",circ:"\\u02C6",tilde:"\\u02DC",ensp:"\\u2002",emsp:"\\u2003",thinsp:"\\u2009",zwnj:"\\u200C",zwj:"\\u200D",lrm:"\\u200E",rlm:"\\u200F",ndash:"\\u2013",mdash:"\\u2014",lsquo:"\\u2018",rsquo:"\\u2019",sbquo:"\\u201A",ldquo:"\\u201C",rdquo:"\\u201D",bdquo:"\\u201E",dagger:"\\u2020",Dagger:"\\u2021",permil:"\\u2030",lsaquo:"\\u2039",rsaquo:"\\u203A",euro:"\\u20AC"};var qr=["cent","copy","divide","gt","lt","not","para","times"];var Vr={}.hasOwnProperty,pn={},St;for(St in kt)Vr.call(kt,St)&&(pn[kt[St]]=St);var va=/[^\\dA-Za-z]/;function Xr(t,e,n,r){let s=String.fromCharCode(t);if(Vr.call(pn,s)){let o=pn[s],a="&"+o;return n&&Hr.includes(o)&&!qr.includes(o)&&(!r||e&&e!==61&&va.test(String.fromCharCode(e)))?a:a+";"}return""}function Kr(t,e,n){let r=zr(t,e,n.omitOptionalSemicolons),s;if((n.useNamedReferences||n.useShortestReferences)&&(s=Xr(t,e,n.omitOptionalSemicolons,n.attribute)),(n.useShortestReferences||!s)&&n.useShortestReferences){let o=Wr(t,e,n.omitOptionalSemicolons);o.length<r.length&&(r=o)}return s&&(!n.useShortestReferences||s.length<r.length)?s:r}function J(t,e){return jr(t,Object.assign({format:Kr},e))}var Aa=/^>|^->|<!--|-->|--!>|<!-$/g,Ea=[">"],Ia=["<",">"];function Qr(t,e,n,r){return r.settings.bogusComments?"<?"+J(t.value,Object.assign({},r.settings.characterReferences,{subset:Ea}))+">":"<!--"+t.value.replace(Aa,s)+"-->";function s(o){return J(o,Object.assign({},r.settings.characterReferences,{subset:Ia}))}}function Zr(t,e,n,r){return"<!"+(r.settings.upperDoctype?"DOCTYPE":"doctype")+(r.settings.tightDoctype?"":" ")+"html>"}function fn(t,e){let n=String(t);if(typeof e!="string")throw new TypeError("Expected character");let r=0,s=n.indexOf(e);for(;s!==-1;)r++,s=n.indexOf(e,s+e.length);return r}function Yr(t,e){let n=e||{};return(t[t.length-1]===""?[...t,""]:t).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}function Jr(t){return t.join(" ").trim()}var Ra=/[ \\t\\n\\f\\r]/g;function Ce(t){return typeof t=="object"?t.type==="text"?es(t.value):!1:es(t)}function es(t){return t.replace(Ra,"")===""}var R=ts(1),dn=ts(-1),Na=[];function ts(t){return e;function e(n,r,s){let o=n?n.children:Na,a=(r||0)+t,i=o[a];if(!s)for(;i&&Ce(i);)a+=t,i=o[a];return i}}var La={}.hasOwnProperty;function _t(t){return e;function e(n,r,s){return La.call(t,n.tagName)&&t[n.tagName](n,r,s)}}var Ze=_t({body:Pa,caption:gn,colgroup:gn,dd:Ga,dt:Oa,head:gn,html:Ta,li:$a,optgroup:Ba,option:Da,p:Ma,rp:ns,rt:ns,tbody:Ua,td:rs,tfoot:ja,th:rs,thead:Fa,tr:za});function gn(t,e,n){let r=R(n,e,!0);return!r||r.type!=="comment"&&!(r.type==="text"&&Ce(r.value.charAt(0)))}function Ta(t,e,n){let r=R(n,e);return!r||r.type!=="comment"}function Pa(t,e,n){let r=R(n,e);return!r||r.type!=="comment"}function Ma(t,e,n){let r=R(n,e);return r?r.type==="element"&&(r.tagName==="address"||r.tagName==="article"||r.tagName==="aside"||r.tagName==="blockquote"||r.tagName==="details"||r.tagName==="div"||r.tagName==="dl"||r.tagName==="fieldset"||r.tagName==="figcaption"||r.tagName==="figure"||r.tagName==="footer"||r.tagName==="form"||r.tagName==="h1"||r.tagName==="h2"||r.tagName==="h3"||r.tagName==="h4"||r.tagName==="h5"||r.tagName==="h6"||r.tagName==="header"||r.tagName==="hgroup"||r.tagName==="hr"||r.tagName==="main"||r.tagName==="menu"||r.tagName==="nav"||r.tagName==="ol"||r.tagName==="p"||r.tagName==="pre"||r.tagName==="section"||r.tagName==="table"||r.tagName==="ul"):!n||!(n.type==="element"&&(n.tagName==="a"||n.tagName==="audio"||n.tagName==="del"||n.tagName==="ins"||n.tagName==="map"||n.tagName==="noscript"||n.tagName==="video"))}function $a(t,e,n){let r=R(n,e);return!r||r.type==="element"&&r.tagName==="li"}function Oa(t,e,n){let r=R(n,e);return!!(r&&r.type==="element"&&(r.tagName==="dt"||r.tagName==="dd"))}function Ga(t,e,n){let r=R(n,e);return!r||r.type==="element"&&(r.tagName==="dt"||r.tagName==="dd")}function ns(t,e,n){let r=R(n,e);return!r||r.type==="element"&&(r.tagName==="rp"||r.tagName==="rt")}function Ba(t,e,n){let r=R(n,e);return!r||r.type==="element"&&r.tagName==="optgroup"}function Da(t,e,n){let r=R(n,e);return!r||r.type==="element"&&(r.tagName==="option"||r.tagName==="optgroup")}function Fa(t,e,n){let r=R(n,e);return!!(r&&r.type==="element"&&(r.tagName==="tbody"||r.tagName==="tfoot"))}function Ua(t,e,n){let r=R(n,e);return!r||r.type==="element"&&(r.tagName==="tbody"||r.tagName==="tfoot")}function ja(t,e,n){return!R(n,e)}function za(t,e,n){let r=R(n,e);return!r||r.type==="element"&&r.tagName==="tr"}function rs(t,e,n){let r=R(n,e);return!r||r.type==="element"&&(r.tagName==="td"||r.tagName==="th")}var ss=_t({body:qa,colgroup:Va,head:Ha,html:Wa,tbody:Xa});function Wa(t){let e=R(t,-1);return!e||e.type!=="comment"}function Ha(t){let e=new Set;for(let r of t.children)if(r.type==="element"&&(r.tagName==="base"||r.tagName==="title")){if(e.has(r.tagName))return!1;e.add(r.tagName)}let n=t.children[0];return!n||n.type==="element"}function qa(t){let e=R(t,-1,!0);return!e||e.type!=="comment"&&!(e.type==="text"&&Ce(e.value.charAt(0)))&&!(e.type==="element"&&(e.tagName==="meta"||e.tagName==="link"||e.tagName==="script"||e.tagName==="style"||e.tagName==="template"))}function Va(t,e,n){let r=dn(n,e),s=R(t,-1,!0);return n&&r&&r.type==="element"&&r.tagName==="colgroup"&&Ze(r,n.children.indexOf(r),n)?!1:!!(s&&s.type==="element"&&s.tagName==="col")}function Xa(t,e,n){let r=dn(n,e),s=R(t,-1);return n&&r&&r.type==="element"&&(r.tagName==="thead"||r.tagName==="tbody")&&Ze(r,n.children.indexOf(r),n)?!1:!!(s&&s.type==="element"&&s.tagName==="tr")}var xt={name:[[`	\n\\f\\r &/=>`.split(""),`	\n\\f\\r "&\'/=>\\``.split("")],[`\\0	\n\\f\\r "&\'/<=>`.split(""),`\\0	\n\\f\\r "&\'/<=>\\``.split("")]],unquoted:[[`	\n\\f\\r &>`.split(""),`\\0	\n\\f\\r "&\'<=>\\``.split("")],[`\\0	\n\\f\\r "&\'<=>\\``.split(""),`\\0	\n\\f\\r "&\'<=>\\``.split("")]],single:[["&\'".split(""),"\\"&\'`".split("")],["\\0&\'".split(""),"\\0\\"&\'`".split("")]],double:[[\'"&\'.split(""),"\\"&\'`".split("")],[\'\\0"&\'.split(""),"\\0\\"&\'`".split("")]]};function os(t,e,n,r){let s=r.schema,o=s.space==="svg"?!1:r.settings.omitOptionalTags,a=s.space==="svg"?r.settings.closeEmptyElements:r.settings.voids.includes(t.tagName.toLowerCase()),i=[],l;s.space==="html"&&t.tagName==="svg"&&(r.schema=Ct);let c=Ka(r,t.properties),u=r.all(s.space==="html"&&t.tagName==="template"?t.content:t);return r.schema=s,u&&(a=!1),(c||!o||!ss(t,e,n))&&(i.push("<",t.tagName,c?" "+c:""),a&&(s.space==="svg"||r.settings.closeSelfClosing)&&(l=c.charAt(c.length-1),(!r.settings.tightSelfClosing||l==="/"||l&&l!==\'"\'&&l!=="\'")&&i.push(" "),i.push("/")),i.push(">")),i.push(u),!a&&(!o||!Ze(t,e,n))&&i.push("</"+t.tagName+">"),i.join("")}function Ka(t,e){let n=[],r=-1,s;if(e){for(s in e)if(e[s]!==null&&e[s]!==void 0){let o=Qa(t,s,e[s]);o&&n.push(o)}}for(;++r<n.length;){let o=t.settings.tightAttributes?n[r].charAt(n[r].length-1):void 0;r!==n.length-1&&o!==\'"\'&&o!=="\'"&&(n[r]+=" ")}return n.join("")}function Qa(t,e,n){let r=hn(t.schema,e),s=t.settings.allowParseErrors&&t.schema.space==="html"?0:1,o=t.settings.allowDangerousCharacters?0:1,a=t.quote,i;if(r.overloadedBoolean&&(n===r.attribute||n==="")?n=!0:(r.boolean||r.overloadedBoolean)&&(typeof n!="string"||n===r.attribute||n==="")&&(n=!!n),n==null||n===!1||typeof n=="number"&&Number.isNaN(n))return"";let l=J(r.attribute,Object.assign({},t.settings.characterReferences,{subset:xt.name[s][o]}));return n===!0||(n=Array.isArray(n)?(r.commaSeparated?Yr:Jr)(n,{padLeft:!t.settings.tightCommaSeparatedLists}):String(n),t.settings.collapseEmptyAttributes&&!n)?l:(t.settings.preferUnquoted&&(i=J(n,Object.assign({},t.settings.characterReferences,{attribute:!0,subset:xt.unquoted[s][o]}))),i!==n&&(t.settings.quoteSmart&&fn(n,a)>fn(n,t.alternative)&&(a=t.alternative),i=a+J(n,Object.assign({},t.settings.characterReferences,{subset:(a==="\'"?xt.single:xt.double)[s][o],attribute:!0}))+a),l+(i&&"="+i))}var Za=["<","&"];function vt(t,e,n,r){return n&&n.type==="element"&&(n.tagName==="script"||n.tagName==="style")?t.value:J(t.value,Object.assign({},r.settings.characterReferences,{subset:Za}))}function as(t,e,n,r){return r.settings.allowDangerousHtml?t.value:vt(t,e,n,r)}function is(t,e,n,r){return r.all(t)}var ls=Fr("type",{invalid:Ya,unknown:Ja,handlers:{comment:Qr,doctype:Zr,element:os,raw:as,root:is,text:vt}});function Ya(t){throw new Error("Expected node, not `"+t+"`")}function Ja(t){let e=t;throw new Error("Cannot compile unknown node `"+e.type+"`")}var ei={},ti={},ni=[];function mn(t,e){let n=e||ei,r=n.quote||\'"\',s=r===\'"\'?"\'":\'"\';if(r!==\'"\'&&r!=="\'")throw new Error("Invalid quote `"+r+"`, expected `\'` or `\\"`");return{one:ri,all:si,settings:{omitOptionalTags:n.omitOptionalTags||!1,allowParseErrors:n.allowParseErrors||!1,allowDangerousCharacters:n.allowDangerousCharacters||!1,quoteSmart:n.quoteSmart||!1,preferUnquoted:n.preferUnquoted||!1,tightAttributes:n.tightAttributes||!1,upperDoctype:n.upperDoctype||!1,tightDoctype:n.tightDoctype||!1,bogusComments:n.bogusComments||!1,tightCommaSeparatedLists:n.tightCommaSeparatedLists||!1,tightSelfClosing:n.tightSelfClosing||!1,collapseEmptyAttributes:n.collapseEmptyAttributes||!1,allowDangerousHtml:n.allowDangerousHtml||!1,voids:n.voids||Pr,characterReferences:n.characterReferences||ti,closeSelfClosing:n.closeSelfClosing||!1,closeEmptyElements:n.closeEmptyElements||!1},schema:n.space==="svg"?Ct:Br,quote:r,alternative:s}.one(Array.isArray(t)?{type:"root",children:t}:t,void 0,void 0)}function ri(t,e,n){return ls(t,e,n,this)}function si(t){let e=[],n=t&&t.children||ni,r=-1;for(;++r<n.length;)e[r]=this.one(n[r],r,t);return e.join("")}function hs(t,e){var r;if(!e)return t;t.properties||(t.properties={}),(r=t.properties).class||(r.class=[]),typeof t.properties.class=="string"&&(t.properties.class=t.properties.class.split(/\\s+/g)),Array.isArray(t.properties.class)||(t.properties.class=[]);let n=Array.isArray(e)?e:e.split(/\\s+/g);for(let s of n)s&&!t.properties.class.includes(s)&&t.properties.class.push(s);return t}function ai(t){let e=Re(t,!0).map(([s])=>s);function n(s){if(s===t.length)return{line:e.length-1,character:e[e.length-1].length};let o=s,a=0;for(let i of e){if(o<i.length)break;o-=i.length,a++}return{line:a,character:o}}function r(s,o){let a=0;for(let i=0;i<s;i++)a+=e[i].length;return a+=o,a}return{lines:e,indexToPos:n,posToIndex:r}}var Cn="light-dark()",ii=["color","background-color"];function li(t,e){let n=0,r=[];for(let s of e)s>n&&r.push({...t,content:t.content.slice(n,s),offset:t.offset+n}),n=s;return n<t.content.length&&r.push({...t,content:t.content.slice(n),offset:t.offset+n}),r}function ci(t,e){let n=Array.from(e instanceof Set?e:new Set(e)).sort((r,s)=>r-s);return n.length?t.map(r=>r.flatMap(s=>{let o=n.filter(a=>s.offset<a&&a<s.offset+s.content.length).map(a=>a-s.offset).sort((a,i)=>a-i);return o.length?li(s,o):s})):t}function ui(t,e,n,r,s="css-vars"){let o={content:t.content,explanation:t.explanation,offset:t.offset},a=e.map(u=>At(t.variants[u])),i=new Set(a.flatMap(u=>Object.keys(u))),l={},c=(u,h)=>{let p=h==="color"?"":h==="background-color"?"-bg":`-${h}`;return n+e[u]+(h==="color"?"":p)};return a.forEach((u,h)=>{for(let p of i){let d=u[p]||"inherit";if(h===0&&r&&ii.includes(p))if(r===Cn&&a.length>1){let f=e.findIndex(w=>w==="light"),C=e.findIndex(w=>w==="dark");if(f===-1||C===-1)throw new E(\'When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes\');l[p]=`light-dark(${a[f][p]||"inherit"}, ${a[C][p]||"inherit"})`,s==="css-vars"&&(l[c(h,p)]=d)}else l[p]=d;else s==="css-vars"&&(l[c(h,p)]=d)}}),o.htmlStyle=l,o}function At(t){let e={};if(t.color&&(e.color=t.color),t.bgColor&&(e["background-color"]=t.bgColor),t.fontStyle){t.fontStyle&M.Italic&&(e["font-style"]="italic"),t.fontStyle&M.Bold&&(e["font-weight"]="bold");let n=[];t.fontStyle&M.Underline&&n.push("underline"),t.fontStyle&M.Strikethrough&&n.push("line-through"),n.length&&(e["text-decoration"]=n.join(" "))}return e}function bn(t){return typeof t=="string"?t:Object.entries(t).map(([e,n])=>`${e}:${n}`).join(";")}function hi(){let t=new WeakMap;function e(n){if(!t.has(n.meta)){let s=function(a){if(typeof a=="number"){if(a<0||a>n.source.length)throw new E(`Invalid decoration offset: ${a}. Code length: ${n.source.length}`);return{...r.indexToPos(a),offset:a}}else{let i=r.lines[a.line];if(i===void 0)throw new E(`Invalid decoration position ${JSON.stringify(a)}. Lines length: ${r.lines.length}`);let l=a.character;if(l<0&&(l=i.length+l),l<0||l>i.length)throw new E(`Invalid decoration position ${JSON.stringify(a)}. Line ${a.line} length: ${i.length}`);return{...a,character:l,offset:r.posToIndex(a.line,l)}}},r=ai(n.source),o=(n.options.decorations||[]).map(a=>({...a,start:s(a.start),end:s(a.end)}));pi(o),t.set(n.meta,{decorations:o,converter:r,source:n.source})}return t.get(n.meta)}return{name:"shiki:decorations",tokens(n){if(this.options.decorations?.length)return ci(n,e(this).decorations.flatMap(r=>[r.start.offset,r.end.offset]))},code(n){if(!this.options.decorations?.length)return;let r=e(this),s=Array.from(n.children).filter(u=>u.type==="element"&&u.tagName==="span");if(s.length!==r.converter.lines.length)throw new E(`Number of lines in code element (${s.length}) does not match the number of lines in the source (${r.converter.lines.length}). Failed to apply decorations.`);function o(u,h,p,d){let f=s[u],C="",w=-1,y=-1;if(h===0&&(w=0),p===0&&(y=0),p===Number.POSITIVE_INFINITY&&(y=f.children.length),w===-1||y===-1)for(let k=0;k<f.children.length;k++)C+=ps(f.children[k]),w===-1&&C.length===h&&(w=k+1),y===-1&&C.length===p&&(y=k+1);if(w===-1)throw new E(`Failed to find start index for decoration ${JSON.stringify(d.start)}`);if(y===-1)throw new E(`Failed to find end index for decoration ${JSON.stringify(d.end)}`);let b=f.children.slice(w,y);if(!d.alwaysWrap&&b.length===f.children.length)i(f,d,"line");else if(!d.alwaysWrap&&b.length===1&&b[0].type==="element")i(b[0],d,"token");else{let k={type:"element",tagName:"span",properties:{},children:b};i(k,d,"wrapper"),f.children.splice(w,b.length,k)}}function a(u,h){s[u]=i(s[u],h,"line")}function i(u,h,p){let d=h.properties||{},f=h.transform||(C=>C);return u.tagName=h.tagName||"span",u.properties={...u.properties,...d,class:u.properties.class},h.properties?.class&&hs(u,h.properties.class),u=f(u,p)||u,u}let l=[],c=r.decorations.sort((u,h)=>h.start.offset-u.start.offset||u.end.offset-h.end.offset);for(let u of c){let{start:h,end:p}=u;if(h.line===p.line)o(h.line,h.character,p.character,u);else if(h.line<p.line){o(h.line,h.character,Number.POSITIVE_INFINITY,u);for(let d=h.line+1;d<p.line;d++)l.unshift(()=>a(d,u));o(p.line,0,p.character,u)}}l.forEach(u=>u())}}}function pi(t){for(let e=0;e<t.length;e++){let n=t[e];if(n.start.offset>n.end.offset)throw new E(`Invalid decoration range: ${JSON.stringify(n.start)} - ${JSON.stringify(n.end)}`);for(let r=e+1;r<t.length;r++){let s=t[r],o=n.start.offset<=s.start.offset&&s.start.offset<n.end.offset,a=n.start.offset<s.end.offset&&s.end.offset<=n.end.offset,i=s.start.offset<=n.start.offset&&n.start.offset<s.end.offset,l=s.start.offset<n.end.offset&&n.end.offset<=s.end.offset;if(o||a||i||l){if(o&&a||i&&l||i&&n.start.offset===n.end.offset||a&&s.start.offset===s.end.offset)continue;throw new E(`Decorations ${JSON.stringify(n.start)} and ${JSON.stringify(s.start)} intersect.`)}}}}function ps(t){return t.type==="text"?t.value:t.type==="element"?t.children.map(ps).join(""):""}var fi=[hi()];function Et(t){let e=di(t.transformers||[]);return[...e.pre,...e.normal,...e.post,...fi]}function di(t){let e=[],n=[],r=[];for(let s of t)switch(s.enforce){case"pre":e.push(s);break;case"post":n.push(s);break;default:r.push(s)}return{pre:e,post:n,normal:r}}var ke=["black","red","green","yellow","blue","magenta","cyan","white","brightBlack","brightRed","brightGreen","brightYellow","brightBlue","brightMagenta","brightCyan","brightWhite"],yn={1:"bold",2:"dim",3:"italic",4:"underline",7:"reverse",8:"hidden",9:"strikethrough"};function gi(t,e){let n=t.indexOf("\\x1B",e);if(n!==-1&&t[n+1]==="["){let r=t.indexOf("m",n);if(r!==-1)return{sequence:t.substring(n+2,r).split(";"),startPosition:n,position:r+1}}return{position:t.length}}function cs(t){let e=t.shift();if(e==="2"){let n=t.splice(0,3).map(r=>Number.parseInt(r));return n.length!==3||n.some(r=>Number.isNaN(r))?void 0:{type:"rgb",rgb:n}}else if(e==="5"){let n=t.shift();if(n)return{type:"table",index:Number(n)}}}function mi(t){let e=[];for(;t.length>0;){let n=t.shift();if(!n)continue;let r=Number.parseInt(n);if(!Number.isNaN(r))if(r===0)e.push({type:"resetAll"});else if(r<=9)yn[r]&&e.push({type:"setDecoration",value:yn[r]});else if(r<=29){let s=yn[r-20];s&&(e.push({type:"resetDecoration",value:s}),s==="dim"&&e.push({type:"resetDecoration",value:"bold"}))}else if(r<=37)e.push({type:"setForegroundColor",value:{type:"named",name:ke[r-30]}});else if(r===38){let s=cs(t);s&&e.push({type:"setForegroundColor",value:s})}else if(r===39)e.push({type:"resetForegroundColor"});else if(r<=47)e.push({type:"setBackgroundColor",value:{type:"named",name:ke[r-40]}});else if(r===48){let s=cs(t);s&&e.push({type:"setBackgroundColor",value:s})}else r===49?e.push({type:"resetBackgroundColor"}):r===53?e.push({type:"setDecoration",value:"overline"}):r===55?e.push({type:"resetDecoration",value:"overline"}):r>=90&&r<=97?e.push({type:"setForegroundColor",value:{type:"named",name:ke[r-90+8]}}):r>=100&&r<=107&&e.push({type:"setBackgroundColor",value:{type:"named",name:ke[r-100+8]}})}return e}function yi(){let t=null,e=null,n=new Set;return{parse(r){let s=[],o=0;do{let a=gi(r,o),i=a.sequence?r.substring(o,a.startPosition):r.substring(o);if(i.length>0&&s.push({value:i,foreground:t,background:e,decorations:new Set(n)}),a.sequence){let l=mi(a.sequence);for(let c of l)c.type==="resetAll"?(t=null,e=null,n.clear()):c.type==="resetForegroundColor"?t=null:c.type==="resetBackgroundColor"?e=null:c.type==="resetDecoration"&&n.delete(c.value);for(let c of l)c.type==="setForegroundColor"?t=c.value:c.type==="setBackgroundColor"?e=c.value:c.type==="setDecoration"&&n.add(c.value)}o=a.position}while(o<r.length);return s}}}var bi={black:"#000000",red:"#bb0000",green:"#00bb00",yellow:"#bbbb00",blue:"#0000bb",magenta:"#ff00ff",cyan:"#00bbbb",white:"#eeeeee",brightBlack:"#555555",brightRed:"#ff5555",brightGreen:"#00ff00",brightYellow:"#ffff55",brightBlue:"#5555ff",brightMagenta:"#ff55ff",brightCyan:"#55ffff",brightWhite:"#ffffff"};function wi(t=bi){function e(i){return t[i]}function n(i){return`#${i.map(l=>Math.max(0,Math.min(l,255)).toString(16).padStart(2,"0")).join("")}`}let r;function s(){if(r)return r;r=[];for(let c=0;c<ke.length;c++)r.push(e(ke[c]));let i=[0,95,135,175,215,255];for(let c=0;c<6;c++)for(let u=0;u<6;u++)for(let h=0;h<6;h++)r.push(n([i[c],i[u],i[h]]));let l=8;for(let c=0;c<24;c++,l+=10)r.push(n([l,l,l]));return r}function o(i){return s()[i]}function a(i){switch(i.type){case"named":return e(i.name);case"rgb":return n(i.rgb);case"table":return o(i.index)}}return{value:a}}var Ci={black:"#000000",red:"#cd3131",green:"#0DBC79",yellow:"#E5E510",blue:"#2472C8",magenta:"#BC3FBC",cyan:"#11A8CD",white:"#E5E5E5",brightBlack:"#666666",brightRed:"#F14C4C",brightGreen:"#23D18B",brightYellow:"#F5F543",brightBlue:"#3B8EEA",brightMagenta:"#D670D6",brightCyan:"#29B8DB",brightWhite:"#FFFFFF"};function ki(t,e,n){let r=He(t,n),s=Re(e),o=wi(Object.fromEntries(ke.map(i=>{let l=`terminal.ansi${i[0].toUpperCase()}${i.substring(1)}`;return[i,t.colors?.[l]||Ci[i]]}))),a=yi();return s.map(i=>a.parse(i[0]).map(l=>{let c,u;l.decorations.has("reverse")?(c=l.background?o.value(l.background):t.bg,u=l.foreground?o.value(l.foreground):t.fg):(c=l.foreground?o.value(l.foreground):t.fg,u=l.background?o.value(l.background):void 0),c=Z(c,r),u=Z(u,r),l.decorations.has("dim")&&(c=Si(c));let h=M.None;return l.decorations.has("bold")&&(h|=M.Bold),l.decorations.has("italic")&&(h|=M.Italic),l.decorations.has("underline")&&(h|=M.Underline),l.decorations.has("strikethrough")&&(h|=M.Strikethrough),{content:l.value,offset:i[1],color:c,bgColor:u,fontStyle:h}}))}function Si(t){let e=t.match(/#([0-9a-f]{3,8})/i);if(e){let r=e[1];if(r.length===8){let s=Math.round(Number.parseInt(r.slice(6,8),16)/2).toString(16).padStart(2,"0");return`#${r.slice(0,6)}${s}`}else{if(r.length===6)return`#${r}80`;if(r.length===4){let s=r[0],o=r[1],a=r[2],i=r[3];return`#${s}${s}${o}${o}${a}${a}${Math.round(Number.parseInt(`${i}${i}`,16)/2).toString(16).padStart(2,"0")}`}else if(r.length===3){let s=r[0],o=r[1],a=r[2];return`#${s}${s}${o}${o}${a}${a}80`}}}let n=t.match(/var\\((--[\\w-]+-ansi-[\\w-]+)\\)/);return n?`var(${n[1]}-dim)`:t}function wn(t,e,n={}){let r=t.resolveLangAlias(n.lang||"text"),{theme:s=t.getLoadedThemes()[0]}=n;if(!qe(r)&&!Ve(s)&&r==="ansi"){let{theme:o}=t.setTheme(s);return ki(o,e,n)}return nn(t,e,n)}function It(t,e,n){let r,s,o,a,i,l;if("themes"in n){let{defaultColor:c="light",cssVariablePrefix:u="--shiki-",colorsRendering:h="css-vars"}=n,p=Object.entries(n.themes).filter(y=>y[1]).map(y=>({color:y[0],theme:y[1]})).sort((y,b)=>y.color===c?-1:b.color===c?1:0);if(p.length===0)throw new E("`themes` option must not be empty");let d=mt(t,e,n,wn);if(l=Ne(d),c&&Cn!==c&&!p.find(y=>y.color===c))throw new E(`\\`themes\\` option must contain the defaultColor key \\`${c}\\``);let f=p.map(y=>t.getTheme(y.theme)),C=p.map(y=>y.color);o=d.map(y=>y.map(b=>ui(b,C,u,c,h))),l&&Xe(o,l);let w=p.map(y=>He(y.theme,n));s=us(p,f,w,u,c,"fg",h),r=us(p,f,w,u,c,"bg",h),a=`shiki-themes ${f.map(y=>y.name).join(" ")}`,i=c?void 0:[s,r].join(";")}else if("theme"in n){let c=He(n.theme,n);o=wn(t,e,n);let u=t.getTheme(n.theme);r=Z(u.bg,c),s=Z(u.fg,c),a=u.name,l=Ne(o)}else throw new E("Invalid options, either `theme` or `themes` must be provided");return{tokens:o,fg:s,bg:r,themeName:a,rootStyle:i,grammarState:l}}function us(t,e,n,r,s,o,a){return t.map((i,l)=>{let c=Z(e[l][o],n[l])||"inherit",u=`${r+i.color}${o==="bg"?"-bg":""}:${c}`;if(l===0&&s){if(s===Cn&&t.length>1){let h=t.findIndex(d=>d.color==="light"),p=t.findIndex(d=>d.color==="dark");if(h===-1||p===-1)throw new E(\'When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes\');return`light-dark(${Z(e[h][o],n[h])||"inherit"}, ${Z(e[p][o],n[p])||"inherit"});${u}`}return c}return a==="css-vars"?u:null}).filter(i=>!!i).join(";")}function Rt(t,e,n,r={meta:{},options:n,codeToHast:(s,o)=>Rt(t,s,o),codeToTokens:(s,o)=>It(t,s,o)}){let s=e;for(let f of Et(n))s=f.preprocess?.call(r,s,n)||s;let{tokens:o,fg:a,bg:i,themeName:l,rootStyle:c,grammarState:u}=It(t,s,n),{mergeWhitespaces:h=!0,mergeSameStyleTokens:p=!1}=n;h===!0?o=xi(o):h==="never"&&(o=vi(o)),p&&(o=Ai(o));let d={...r,get source(){return s}};for(let f of Et(n))o=f.tokens?.call(d,o)||o;return _i(o,{...n,fg:a,bg:i,themeName:l,rootStyle:n.rootStyle===!1?!1:n.rootStyle??c},d,u)}function _i(t,e,n,r=Ne(t)){let s=Et(e),o=[],a={type:"root",children:[]},{structure:i="classic",tabindex:l="0"}=e,c={class:`shiki ${e.themeName||""}`};e.rootStyle!==!1&&(e.rootStyle!=null?c.style=e.rootStyle:c.style=`background-color:${e.bg};color:${e.fg}`),l!==!1&&l!=null&&(c.tabindex=l.toString());for(let[C,w]of Object.entries(e.meta||{}))C.startsWith("_")||(c[C]=w);let u={type:"element",tagName:"pre",properties:c,children:[],data:e.data},h={type:"element",tagName:"code",properties:{},children:o},p=[],d={...n,structure:i,addClassToHast:hs,get source(){return n.source},get tokens(){return t},get options(){return e},get root(){return a},get pre(){return u},get code(){return h},get lines(){return p}};if(t.forEach((C,w)=>{w&&(i==="inline"?a.children.push({type:"element",tagName:"br",properties:{},children:[]}):i==="classic"&&o.push({type:"text",value:`\n`}));let y={type:"element",tagName:"span",properties:{class:"line"},children:[]},b=0;for(let k of C){let x={type:"element",tagName:"span",properties:{...k.htmlAttrs},children:[{type:"text",value:k.content}]},v=bn(k.htmlStyle||At(k));v&&(x.properties.style=v);for(let O of s)x=O?.span?.call(d,x,w+1,b,y,k)||x;i==="inline"?a.children.push(x):i==="classic"&&y.children.push(x),b+=k.content.length}if(i==="classic"){for(let k of s)y=k?.line?.call(d,y,w+1)||y;p.push(y),o.push(y)}else i==="inline"&&p.push(y)}),i==="classic"){for(let C of s)h=C?.code?.call(d,h)||h;u.children.push(h);for(let C of s)u=C?.pre?.call(d,u)||u;a.children.push(u)}else if(i==="inline"){let C=[],w={type:"element",tagName:"span",properties:{class:"line"},children:[]};for(let b of a.children)b.type==="element"&&b.tagName==="br"?(C.push(w),w={type:"element",tagName:"span",properties:{class:"line"},children:[]}):(b.type==="element"||b.type==="text")&&w.children.push(b);C.push(w);let y={type:"element",tagName:"code",properties:{},children:C};for(let b of s)y=b?.code?.call(d,y)||y;a.children=[];for(let b=0;b<y.children.length;b++){b>0&&a.children.push({type:"element",tagName:"br",properties:{},children:[]});let k=y.children[b];k.type==="element"&&a.children.push(...k.children)}}let f=a;for(let C of s)f=C?.root?.call(d,f)||f;return r&&Xe(f,r),f}function xi(t){return t.map(e=>{let n=[],r="",s;return e.forEach((o,a)=>{let i=!(o.fontStyle&&(o.fontStyle&M.Underline||o.fontStyle&M.Strikethrough));i&&o.content.match(/^\\s+$/)&&e[a+1]?(s===void 0&&(s=o.offset),r+=o.content):r?(i?n.push({...o,offset:s,content:r+o.content}):n.push({content:r,offset:s},o),s=void 0,r=""):n.push(o)}),n})}function vi(t){return t.map(e=>e.flatMap(n=>{if(n.content.match(/^\\s+$/))return n;let r=n.content.match(/^(\\s*)(.*?)(\\s*)$/);if(!r)return n;let[,s,o,a]=r;if(!s&&!a)return n;let i=[{...n,offset:n.offset+s.length,content:o}];return s&&i.unshift({content:s,offset:n.offset}),a&&i.push({content:a,offset:n.offset+s.length+o.length}),i}))}function Ai(t){return t.map(e=>{let n=[];for(let r of e){if(n.length===0){n.push({...r});continue}let s=n[n.length-1],o=bn(s.htmlStyle||At(s)),a=bn(r.htmlStyle||At(r)),i=s.fontStyle&&(s.fontStyle&M.Underline||s.fontStyle&M.Strikethrough),l=r.fontStyle&&(r.fontStyle&M.Underline||r.fontStyle&M.Strikethrough);!i&&!l&&o===a?s.content+=r.content:n.push({...r})}return n})}var Ei=mn;function Ii(t,e,n){let r={meta:{},options:n,codeToHast:(o,a)=>Rt(t,o,a),codeToTokens:(o,a)=>It(t,o,a)},s=Ei(Rt(t,e,n,r));for(let o of Et(n))s=o.postprocess?.call(r,s,n)||s;return s}function fs(t){let e=tn(t);return{getLastGrammarState:(...n)=>Lr(e,...n),codeToTokensBase:(n,r)=>wn(e,n,r),codeToTokensWithThemes:(n,r)=>mt(e,n,r),codeToTokens:(n,r)=>It(e,n,r),codeToHast:(n,r)=>Rt(e,n,r),codeToHtml:(n,r)=>Ii(e,n,r),getBundledLanguages:()=>({}),getBundledThemes:()=>({}),...e,getInternalContext:()=>e}}var ds=class{constructor(t,e={}){g(this,"regexps");this.patterns=t,this.options=e;let{forgiving:n=!1,cache:r,regexConstructor:s}=e;if(!s)throw new Error("Option `regexConstructor` is not provided");this.regexps=t.map(o=>{if(typeof o!="string")return o;let a=r?.get(o);if(a){if(a instanceof RegExp)return a;if(n)return null;throw a}try{let i=s(o);return r?.set(o,i),i}catch(i){if(r?.set(o,i),n)return null;throw i}})}findNextMatchSync(t,e,n){let r=typeof t=="string"?t:t.content,s=[];function o(a,i,l=0){return{index:a,captureIndices:i.indices.map(c=>c==null?{start:4294967295,end:4294967295,length:0}:{start:c[0]+l,end:c[1]+l,length:c[1]-c[0]})}}for(let a=0;a<this.regexps.length;a++){let i=this.regexps[a];if(i)try{i.lastIndex=e;let l=i.exec(r);if(!l)continue;if(l.index===e)return o(a,l,0);s.push([a,l,0])}catch(l){if(this.options.forgiving)continue;throw l}}if(s.length){let a=Math.min(...s.map(i=>i[1].index));for(let[i,l,c]of s)if(l.index===a)return o(i,l,c)}return null}};function ce(t){if([...t].length!==1)throw new Error(`Expected "${t}" to be a single code point`);return t.codePointAt(0)}function gs(t,e,n){return t.has(e)||t.set(e,n),t.get(e)}var Ye=new Set(["alnum","alpha","ascii","blank","cntrl","digit","graph","lower","print","punct","space","upper","word","xdigit"]),L=String.raw;function ee(t,e){if(t==null)throw new Error(e??"Value expected");return t}var ks=L`\\[\\^?`,Ss=`c.? | C(?:-.?)?|${L`[pP]\\{(?:\\^?[-\\x20_]*[A-Za-z][-\\x20\\w]*\\})?`}|${L`x[89A-Fa-f]\\p{AHex}(?:\\\\x[89A-Fa-f]\\p{AHex})*`}|${L`u(?:\\p{AHex}{4})? | x\\{[^\\}]*\\}? | x\\p{AHex}{0,2}`}|${L`o\\{[^\\}]*\\}?`}|${L`\\d{1,3}`}`,Sn=/[?*+][?+]?|\\{(?:\\d+(?:,\\d*)?|,\\d+)\\}\\??/,Nt=new RegExp(L`\n  \\\\ (?:\n    ${Ss}\n    | [gk]<[^>]*>?\n    | [gk]\'[^\']*\'?\n    | .\n  )\n  | \\( (?:\n    \\? (?:\n      [:=!>({]\n      | <[=!]\n      | <[^>]*>\n      | \'[^\']*\'\n      | ~\\|?\n      | #(?:[^)\\\\]|\\\\.?)*\n      | [^:)]*[:)]\n    )?\n    | \\*[^\\)]*\\)?\n  )?\n  | (?:${Sn.source})+\n  | ${ks}\n  | .\n`.replace(/\\s+/g,""),"gsu"),kn=new RegExp(L`\n  \\\\ (?:\n    ${Ss}\n    | .\n  )\n  | \\[:(?:\\^?\\p{Alpha}+|\\^):\\]\n  | ${ks}\n  | &&\n  | .\n`.replace(/\\s+/g,""),"gsu");function _s(t,e={}){let n={flags:"",...e,rules:{captureGroup:!1,singleline:!1,...e.rules}};if(typeof t!="string")throw new Error("String expected as pattern");let r=Vi(n.flags),s=[r.extended],o={captureGroup:n.rules.captureGroup,getCurrentModX(){return s.at(-1)},numOpenGroups:0,popModX(){s.pop()},pushModX(h){s.push(h)},replaceCurrentModX(h){s[s.length-1]=h},singleline:n.rules.singleline},a=[],i;for(Nt.lastIndex=0;i=Nt.exec(t);){let h=Ri(o,t,i[0],Nt.lastIndex);h.tokens?a.push(...h.tokens):h.token&&a.push(h.token),h.lastIndex!==void 0&&(Nt.lastIndex=h.lastIndex)}let l=[],c=0;a.filter(h=>h.type==="GroupOpen").forEach(h=>{h.kind==="capturing"?h.number=++c:h.raw==="("&&l.push(h)}),c||l.forEach((h,p)=>{h.kind="capturing",h.number=p+1});let u=c||l.length;return{tokens:a.map(h=>h.type==="EscapedNumber"?Ki(h,u):h).flat(),flags:r}}function Ri(t,e,n,r){let[s,o]=n;if(n==="["||n==="[^"){let a=Ni(e,n,r);return{tokens:a.tokens,lastIndex:a.lastIndex}}if(s==="\\\\"){if("AbBGyYzZ".includes(o))return{token:ms(n,n)};if(/^\\\\g[<\']/.test(n)){if(!/^\\\\g(?:<[^>]+>|\'[^\']+\')$/.test(n))throw new Error(`Invalid group name "${n}"`);return{token:Fi(n)}}if(/^\\\\k[<\']/.test(n)){if(!/^\\\\k(?:<[^>]+>|\'[^\']+\')$/.test(n))throw new Error(`Invalid group name "${n}"`);return{token:vs(n)}}if(o==="K")return{token:As("keep",n)};if(o==="N"||o==="R")return{token:Se("newline",n,{negate:o==="N"})};if(o==="O")return{token:Se("any",n)};if(o==="X")return{token:Se("text_segment",n)};let a=xs(n,{inCharClass:!1});return Array.isArray(a)?{tokens:a}:{token:a}}if(s==="("){if(o==="*")return{token:Wi(n)};if(n==="(?{")throw new Error(`Unsupported callout "${n}"`);if(n.startsWith("(?#")){if(e[r]!==")")throw new Error(\'Unclosed comment group "(?#"\');return{lastIndex:r+1}}if(/^\\(\\?[-imx]+[:)]$/.test(n))return{token:zi(n,t)};if(t.pushModX(t.getCurrentModX()),t.numOpenGroups++,n==="("&&!t.captureGroup||n==="(?:")return{token:Le("group",n)};if(n==="(?>")return{token:Le("atomic",n)};if(n==="(?="||n==="(?!"||n==="(?<="||n==="(?<!")return{token:Le(n[2]==="<"?"lookbehind":"lookahead",n,{negate:n.endsWith("!")})};if(n==="("&&t.captureGroup||n.startsWith("(?<")&&n.endsWith(">")||n.startsWith("(?\'")&&n.endsWith("\'"))return{token:Le("capturing",n,{...n!=="("&&{name:n.slice(3,-1)}})};if(n.startsWith("(?~")){if(n==="(?~|")throw new Error(`Unsupported absence function kind "${n}"`);return{token:Le("absence_repeater",n)}}throw n==="(?("?new Error(`Unsupported conditional "${n}"`):new Error(`Invalid or unsupported group option "${n}"`)}if(n===")"){if(t.popModX(),t.numOpenGroups--,t.numOpenGroups<0)throw new Error(\'Unmatched ")"\');return{token:Gi(n)}}if(t.getCurrentModX()){if(n==="#"){let a=e.indexOf(`\n`,r);return{lastIndex:a===-1?e.length:a}}if(/^\\s$/.test(n)){let a=/\\s+/y;return a.lastIndex=r,{lastIndex:a.exec(e)?a.lastIndex:r}}}if(n===".")return{token:Se("dot",n)};if(n==="^"||n==="$"){let a=t.singleline?{"^":L`\\A`,$:L`\\Z`}[n]:n;return{token:ms(a,n)}}return n==="|"?{token:Ti(n)}:Sn.test(n)?{tokens:Qi(n)}:{token:te(ce(n),n)}}function Ni(t,e,n){let r=[ys(e[1]==="^",e)],s=1,o;for(kn.lastIndex=n;o=kn.exec(t);){let a=o[0];if(a[0]==="["&&a[1]!==":")s++,r.push(ys(a[1]==="^",a));else if(a==="]"){if(r.at(-1).type==="CharacterClassOpen")r.push(te(93,a));else if(s--,r.push(Pi(a)),!s)break}else{let i=Li(a);Array.isArray(i)?r.push(...i):r.push(i)}}return{tokens:r,lastIndex:kn.lastIndex||t.length}}function Li(t){if(t[0]==="\\\\")return xs(t,{inCharClass:!0});if(t[0]==="["){let e=/\\[:(?<negate>\\^?)(?<name>[a-z]+):\\]/.exec(t);if(!e||!Ye.has(e.groups.name))throw new Error(`Invalid POSIX class "${t}"`);return Se("posix",t,{value:e.groups.name,negate:!!e.groups.negate})}return t==="-"?Mi(t):t==="&&"?$i(t):te(ce(t),t)}function xs(t,{inCharClass:e}){let n=t[1];if(n==="c"||n==="C")return ji(t);if("dDhHsSwW".includes(n))return Hi(t);if(t.startsWith(L`\\o{`))throw new Error(`Incomplete, invalid, or unsupported octal code point "${t}"`);if(/^\\\\[pP]\\{/.test(t)){if(t.length===3)throw new Error(`Incomplete or invalid Unicode property "${t}"`);return qi(t)}if(/^\\\\x[89A-Fa-f]\\p{AHex}/u.test(t))try{let r=t.split(/\\\\x/).slice(1).map(a=>parseInt(a,16)),s=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}).decode(new Uint8Array(r)),o=new TextEncoder;return[...s].map(a=>{let i=[...o.encode(a)].map(l=>`\\\\x${l.toString(16)}`).join("");return te(ce(a),i)})}catch{throw new Error(`Multibyte code "${t}" incomplete or invalid in Oniguruma`)}if(n==="u"||n==="x")return te(Xi(t),t);if(bs.has(n))return te(bs.get(n),t);if(/\\d/.test(n))return Oi(e,t);if(t==="\\\\")throw new Error(L`Incomplete escape "\\"`);if(n==="M")throw new Error(`Unsupported meta "${t}"`);if([...t].length===2)return te(t.codePointAt(1),t);throw new Error(`Unexpected escape "${t}"`)}function Ti(t){return{type:"Alternator",raw:t}}function ms(t,e){return{type:"Assertion",kind:t,raw:e}}function vs(t){return{type:"Backreference",raw:t}}function te(t,e){return{type:"Character",value:t,raw:e}}function Pi(t){return{type:"CharacterClassClose",raw:t}}function Mi(t){return{type:"CharacterClassHyphen",raw:t}}function $i(t){return{type:"CharacterClassIntersector",raw:t}}function ys(t,e){return{type:"CharacterClassOpen",negate:t,raw:e}}function Se(t,e,n={}){return{type:"CharacterSet",kind:t,...n,raw:e}}function As(t,e,n={}){return t==="keep"?{type:"Directive",kind:t,raw:e}:{type:"Directive",kind:t,flags:ee(n.flags),raw:e}}function Oi(t,e){return{type:"EscapedNumber",inCharClass:t,raw:e}}function Gi(t){return{type:"GroupClose",raw:t}}function Le(t,e,n={}){return{type:"GroupOpen",kind:t,...n,raw:e}}function Bi(t,e,n,r){return{type:"NamedCallout",kind:t,tag:e,arguments:n,raw:r}}function Di(t,e,n,r){return{type:"Quantifier",kind:t,min:e,max:n,raw:r}}function Fi(t){return{type:"Subroutine",raw:t}}var Ui=new Set(["COUNT","CMP","ERROR","FAIL","MAX","MISMATCH","SKIP","TOTAL_COUNT"]),bs=new Map([["a",7],["b",8],["e",27],["f",12],["n",10],["r",13],["t",9],["v",11]]);function ji(t){let e=t[1]==="c"?t[2]:t[3];if(!e||!/[A-Za-z]/.test(e))throw new Error(`Unsupported control character "${t}"`);return te(ce(e.toUpperCase())-64,t)}function zi(t,e){let{on:n,off:r}=/^\\(\\?(?<on>[imx]*)(?:-(?<off>[-imx]*))?/.exec(t).groups;r??(r="");let s=(e.getCurrentModX()||n.includes("x"))&&!r.includes("x"),o=Cs(n),a=Cs(r),i={};if(o&&(i.enable=o),a&&(i.disable=a),t.endsWith(")"))return e.replaceCurrentModX(s),As("flags",t,{flags:i});if(t.endsWith(":"))return e.pushModX(s),e.numOpenGroups++,Le("group",t,{...(o||a)&&{flags:i}});throw new Error(`Unexpected flag modifier "${t}"`)}function Wi(t){let e=/\\(\\*(?<name>[A-Za-z_]\\w*)?(?:\\[(?<tag>(?:[A-Za-z_]\\w*)?)\\])?(?:\\{(?<args>[^}]*)\\})?\\)/.exec(t);if(!e)throw new Error(`Incomplete or invalid named callout "${t}"`);let{name:n,tag:r,args:s}=e.groups;if(!n)throw new Error(`Invalid named callout "${t}"`);if(r==="")throw new Error(`Named callout tag with empty value not allowed "${t}"`);let o=s?s.split(",").filter(u=>u!=="").map(u=>/^[+-]?\\d+$/.test(u)?+u:u):[],[a,i,l]=o,c=Ui.has(n)?n.toLowerCase():"custom";switch(c){case"fail":case"mismatch":case"skip":if(o.length>0)throw new Error(`Named callout arguments not allowed "${o}"`);break;case"error":if(o.length>1)throw new Error(`Named callout allows only one argument "${o}"`);if(typeof a=="string")throw new Error(`Named callout argument must be a number "${a}"`);break;case"max":if(!o.length||o.length>2)throw new Error(`Named callout must have one or two arguments "${o}"`);if(typeof a=="string"&&!/^[A-Za-z_]\\w*$/.test(a))throw new Error(`Named callout argument one must be a tag or number "${a}"`);if(o.length===2&&(typeof i=="number"||!/^[<>X]$/.test(i)))throw new Error(`Named callout optional argument two must be \'<\', \'>\', or \'X\' "${i}"`);break;case"count":case"total_count":if(o.length>1)throw new Error(`Named callout allows only one argument "${o}"`);if(o.length===1&&(typeof a=="number"||!/^[<>X]$/.test(a)))throw new Error(`Named callout optional argument must be \'<\', \'>\', or \'X\' "${a}"`);break;case"cmp":if(o.length!==3)throw new Error(`Named callout must have three arguments "${o}"`);if(typeof a=="string"&&!/^[A-Za-z_]\\w*$/.test(a))throw new Error(`Named callout argument one must be a tag or number "${a}"`);if(typeof i=="number"||!/^(?:[<>!=]=|[<>])$/.test(i))throw new Error(`Named callout argument two must be \'==\', \'!=\', \'>\', \'<\', \'>=\', or \'<=\' "${i}"`);if(typeof l=="string"&&!/^[A-Za-z_]\\w*$/.test(l))throw new Error(`Named callout argument three must be a tag or number "${l}"`);break;case"custom":throw new Error(`Undefined callout name "${n}"`);default:throw new Error(`Unexpected named callout kind "${c}"`)}return Bi(c,r??null,s?.split(",")??null,t)}function ws(t){let e=null,n,r;if(t[0]==="{"){let{minStr:s,maxStr:o}=/^\\{(?<minStr>\\d*)(?:,(?<maxStr>\\d*))?/.exec(t).groups,a=1e5;if(+s>a||o&&+o>a)throw new Error("Quantifier value unsupported in Oniguruma");if(n=+s,r=o===void 0?+s:o===""?1/0:+o,n>r&&(e="possessive",[n,r]=[r,n]),t.endsWith("?")){if(e==="possessive")throw new Error(\'Unsupported possessive interval quantifier chain with "?"\');e="lazy"}else e||(e="greedy")}else n=t[0]==="+"?1:0,r=t[0]==="?"?1:1/0,e=t[1]==="+"?"possessive":t[1]==="?"?"lazy":"greedy";return Di(e,n,r,t)}function Hi(t){let e=t[1].toLowerCase();return Se({d:"digit",h:"hex",s:"space",w:"word"}[e],t,{negate:t[1]!==e})}function qi(t){let{p:e,neg:n,value:r}=/^\\\\(?<p>[pP])\\{(?<neg>\\^?)(?<value>[^}]+)/.exec(t).groups;return Se("property",t,{value:r,negate:e==="P"&&!n||e==="p"&&!!n})}function Cs(t){let e={};return t.includes("i")&&(e.ignoreCase=!0),t.includes("m")&&(e.dotAll=!0),t.includes("x")&&(e.extended=!0),Object.keys(e).length?e:null}function Vi(t){let e={ignoreCase:!1,dotAll:!1,extended:!1,digitIsAscii:!1,posixIsAscii:!1,spaceIsAscii:!1,wordIsAscii:!1,textSegmentMode:null};for(let n=0;n<t.length;n++){let r=t[n];if(!"imxDPSWy".includes(r))throw new Error(`Invalid flag "${r}"`);if(r==="y"){if(!/^y{[gw]}/.test(t.slice(n)))throw new Error(\'Invalid or unspecified flag "y" mode\');e.textSegmentMode=t[n+2]==="g"?"grapheme":"word",n+=3;continue}e[{i:"ignoreCase",m:"dotAll",x:"extended",D:"digitIsAscii",P:"posixIsAscii",S:"spaceIsAscii",W:"wordIsAscii"}[r]]=!0}return e}function Xi(t){if(/^(?:\\\\u(?!\\p{AHex}{4})|\\\\x(?!\\p{AHex}{1,2}|\\{\\p{AHex}{1,8}\\}))/u.test(t))throw new Error(`Incomplete or invalid escape "${t}"`);let e=t[2]==="{"?/^\\\\x\\{\\s*(?<hex>\\p{AHex}+)/u.exec(t).groups.hex:t.slice(2);return parseInt(e,16)}function Ki(t,e){let{raw:n,inCharClass:r}=t,s=n.slice(1);if(!r&&(s!=="0"&&s.length===1||s[0]!=="0"&&+s<=e))return[vs(n)];let o=[],a=s.match(/^[0-7]+|\\d/g);for(let i=0;i<a.length;i++){let l=a[i],c;if(i===0&&l!=="8"&&l!=="9"){if(c=parseInt(l,8),c>127)throw new Error(L`Octal encoded byte above 177 unsupported "${n}"`)}else c=ce(l);o.push(te(c,(i===0?"\\\\":"")+l))}return o}function Qi(t){let e=[],n=new RegExp(Sn,"gy"),r;for(;r=n.exec(t);){let s=r[0];if(s[0]==="{"){let o=/^\\{(?<min>\\d+),(?<max>\\d+)\\}\\??$/.exec(s);if(o){let{min:a,max:i}=o.groups;if(+a>+i&&s.endsWith("?")){n.lastIndex--,e.push(ws(s.slice(0,-1)));continue}}}e.push(ws(s))}return e}function Lt(t,e){if(!Array.isArray(t.body))throw new Error("Expected node with body array");if(t.body.length!==1)return!1;let n=t.body[0];return!e||Object.keys(e).every(r=>e[r]===n[r])}function Es(t){return Zi.has(t.type)}var Zi=new Set(["AbsenceFunction","Backreference","CapturingGroup","Character","CharacterClass","CharacterSet","Group","Quantifier","Subroutine"]);function Pt(t,e={}){let n={flags:"",normalizeUnknownPropertyNames:!1,skipBackrefValidation:!1,skipLookbehindValidation:!1,skipPropertyNameValidation:!1,unicodePropertyMap:null,...e,rules:{captureGroup:!1,singleline:!1,...e.rules}},r=_s(t,{flags:n.flags,rules:{captureGroup:n.rules.captureGroup,singleline:n.rules.singleline}}),s=(p,d)=>{let f=r.tokens[o.nextIndex];switch(o.parent=p,o.nextIndex++,f.type){case"Alternator":return ne();case"Assertion":return Yi(f);case"Backreference":return Ji(f,o);case"Character":return Te(f.value,{useLastValid:!!d.isCheckingRangeEnd});case"CharacterClassHyphen":return el(f,o,d);case"CharacterClassOpen":return tl(f,o,d);case"CharacterSet":return nl(f,o);case"Directive":return ll(f.kind,{flags:f.flags});case"GroupOpen":return rl(f,o,d);case"NamedCallout":return ul(f.kind,f.tag,f.arguments);case"Quantifier":return sl(f,o);case"Subroutine":return ol(f,o);default:throw new Error(`Unexpected token type "${f.type}"`)}},o={capturingGroups:[],hasNumberedRef:!1,namedGroupsByName:new Map,nextIndex:0,normalizeUnknownPropertyNames:n.normalizeUnknownPropertyNames,parent:null,skipBackrefValidation:n.skipBackrefValidation,skipLookbehindValidation:n.skipLookbehindValidation,skipPropertyNameValidation:n.skipPropertyNameValidation,subroutines:[],tokens:r.tokens,unicodePropertyMap:n.unicodePropertyMap,walk:s},a=pl(cl(r.flags)),i=a.body[0];for(;o.nextIndex<r.tokens.length;){let p=s(i,{});p.type==="Alternative"?(a.body.push(p),i=p):i.body.push(p)}let{capturingGroups:l,hasNumberedRef:c,namedGroupsByName:u,subroutines:h}=o;if(c&&u.size&&!n.rules.captureGroup)throw new Error("Numbered backref/subroutine not allowed when using named capture");for(let{ref:p}of h)if(typeof p=="number"){if(p>l.length)throw new Error("Subroutine uses a group number that\'s not defined");p&&(l[p-1].isSubroutined=!0)}else if(u.has(p)){if(u.get(p).length>1)throw new Error(L`Subroutine uses a duplicate group name "\\g<${p}>"`);u.get(p)[0].isSubroutined=!0}else throw new Error(L`Subroutine uses a group name that\'s not defined "\\g<${p}>"`);return a}function Yi({kind:t}){return Mt(ee({"^":"line_start",$:"line_end","\\\\A":"string_start","\\\\b":"word_boundary","\\\\B":"word_boundary","\\\\G":"search_start","\\\\y":"text_segment_boundary","\\\\Y":"text_segment_boundary","\\\\z":"string_end","\\\\Z":"string_end_newline"}[t],`Unexpected assertion kind "${t}"`),{negate:t===L`\\B`||t===L`\\Y`})}function Ji({raw:t},e){let n=/^\\\\k[<\']/.test(t),r=n?t.slice(3,-1):t.slice(1),s=(o,a=!1)=>{let i=e.capturingGroups.length,l=!1;if(o>i)if(e.skipBackrefValidation)l=!0;else throw new Error(`Not enough capturing groups defined to the left "${t}"`);return e.hasNumberedRef=!0,Tt(a?i+1-o:o,{orphan:l})};if(n){let o=/^(?<sign>-?)0*(?<num>[1-9]\\d*)$/.exec(r);if(o)return s(+o.groups.num,!!o.groups.sign);if(/[-+]/.test(r))throw new Error(`Invalid backref name "${t}"`);if(!e.namedGroupsByName.has(r))throw new Error(`Group name not defined to the left "${t}"`);return Tt(r)}return s(+r)}function el(t,e,n){let{tokens:r,walk:s}=e,o=e.parent,a=o.body.at(-1),i=r[e.nextIndex];if(!n.isCheckingRangeEnd&&a&&a.type!=="CharacterClass"&&a.type!=="CharacterClassRange"&&i&&i.type!=="CharacterClassOpen"&&i.type!=="CharacterClassClose"&&i.type!=="CharacterClassIntersector"){let l=s(o,{...n,isCheckingRangeEnd:!0});if(a.type==="Character"&&l.type==="Character")return o.body.pop(),il(a,l);throw new Error("Invalid character class range")}return Te(ce("-"))}function tl({negate:t},e,n){let{tokens:r,walk:s}=e,o=r[e.nextIndex],a=[Je()],i=Ns(o);for(;i.type!=="CharacterClassClose";){if(i.type==="CharacterClassIntersector")a.push(Je()),e.nextIndex++;else{let c=a.at(-1);c.body.push(s(c,n))}i=Ns(r[e.nextIndex],o)}let l=Je({negate:t});return a.length===1?l.body=a[0].body:(l.kind="intersection",l.body=a.map(c=>c.body.length===1?c.body[0]:c)),e.nextIndex++,l}function nl({kind:t,negate:e,value:n},r){let{normalizeUnknownPropertyNames:s,skipPropertyNameValidation:o,unicodePropertyMap:a}=r;if(t==="property"){let i=Pe(n);if(Ye.has(i)&&!a?.has(i))t="posix",n=i;else return _e(n,{negate:e,normalizeUnknownPropertyNames:s,skipPropertyNameValidation:o,unicodePropertyMap:a})}return t==="posix"?hl(n,{negate:e}):$t(t,{negate:e})}function rl(t,e,n){let{tokens:r,capturingGroups:s,namedGroupsByName:o,skipLookbehindValidation:a,walk:i}=e,l=fl(t),c=l.type==="AbsenceFunction",u=Rs(l),h=u&&l.negate;if(l.type==="CapturingGroup"&&(s.push(l),l.name&&gs(o,l.name,[]).push(l)),c&&n.isInAbsenceFunction)throw new Error("Nested absence function not supported by Oniguruma");let p=Ls(r[e.nextIndex]);for(;p.type!=="GroupClose";){if(p.type==="Alternator")l.body.push(ne()),e.nextIndex++;else{let d=l.body.at(-1),f=i(d,{...n,isInAbsenceFunction:n.isInAbsenceFunction||c,isInLookbehind:n.isInLookbehind||u,isInNegLookbehind:n.isInNegLookbehind||h});if(d.body.push(f),(u||n.isInLookbehind)&&!a){let C="Lookbehind includes a pattern not allowed by Oniguruma";if(h||n.isInNegLookbehind){if(Is(f)||f.type==="CapturingGroup")throw new Error(C)}else if(Is(f)||Rs(f)&&f.negate)throw new Error(C)}}p=Ls(r[e.nextIndex])}return e.nextIndex++,l}function sl({kind:t,min:e,max:n},r){let s=r.parent,o=s.body.at(-1);if(!o||!Es(o))throw new Error("Quantifier requires a repeatable token");let a=xn(t,e,n,o);return s.body.pop(),a}function ol({raw:t},e){let{capturingGroups:n,subroutines:r}=e,s=t.slice(3,-1),o=/^(?<sign>[-+]?)0*(?<num>[1-9]\\d*)$/.exec(s);if(o){let i=+o.groups.num,l=n.length;if(e.hasNumberedRef=!0,s={"":i,"+":l+i,"-":l+1-i}[o.groups.sign],s<1)throw new Error("Invalid subroutine number")}else s==="0"&&(s=0);let a=vn(s);return r.push(a),a}function al(t,e){if(t!=="repeater")throw new Error(`Unexpected absence function kind "${t}"`);return{type:"AbsenceFunction",kind:t,body:et(e?.body)}}function ne(t){return{type:"Alternative",body:Ts(t?.body)}}function Mt(t,e){let n={type:"Assertion",kind:t};return(t==="word_boundary"||t==="text_segment_boundary")&&(n.negate=!!e?.negate),n}function Tt(t,e){let n=!!e?.orphan;return{type:"Backreference",ref:t,...n&&{orphan:n}}}function _n(t,e){let n={name:void 0,isSubroutined:!1,...e};if(n.name!==void 0&&!dl(n.name))throw new Error(`Group name "${n.name}" invalid in Oniguruma`);return{type:"CapturingGroup",number:t,...n.name&&{name:n.name},...n.isSubroutined&&{isSubroutined:n.isSubroutined},body:et(e?.body)}}function Te(t,e){let n={useLastValid:!1,...e};if(t>1114111){let r=t.toString(16);if(n.useLastValid)t=1114111;else throw t>1310719?new Error(`Invalid code point out of range "\\\\x{${r}}"`):new Error(`Invalid code point out of range in JS "\\\\x{${r}}"`)}return{type:"Character",value:t}}function Je(t){let e={kind:"union",negate:!1,...t};return{type:"CharacterClass",kind:e.kind,negate:e.negate,body:Ts(t?.body)}}function il(t,e){if(e.value<t.value)throw new Error("Character class range out of order");return{type:"CharacterClassRange",min:t,max:e}}function $t(t,e){let n=!!e?.negate,r={type:"CharacterSet",kind:t};return(t==="digit"||t==="hex"||t==="newline"||t==="space"||t==="word")&&(r.negate=n),(t==="text_segment"||t==="newline"&&!n)&&(r.variableLength=!0),r}function ll(t,e={}){if(t==="keep")return{type:"Directive",kind:t};if(t==="flags")return{type:"Directive",kind:t,flags:ee(e.flags)};throw new Error(`Unexpected directive kind "${t}"`)}function cl(t){return{type:"Flags",...t}}function U(t){let e=t?.atomic,n=t?.flags;if(e&&n)throw new Error("Atomic group cannot have flags");return{type:"Group",...e&&{atomic:e},...n&&{flags:n},body:et(t?.body)}}function ue(t){let e={behind:!1,negate:!1,...t};return{type:"LookaroundAssertion",kind:e.behind?"lookbehind":"lookahead",negate:e.negate,body:et(t?.body)}}function ul(t,e,n){return{type:"NamedCallout",kind:t,tag:e,arguments:n}}function hl(t,e){let n=!!e?.negate;if(!Ye.has(t))throw new Error(`Invalid POSIX class "${t}"`);return{type:"CharacterSet",kind:"posix",value:t,negate:n}}function xn(t,e,n,r){if(e>n)throw new Error("Invalid reversed quantifier range");return{type:"Quantifier",kind:t,min:e,max:n,body:r}}function pl(t,e){return{type:"Regex",body:et(e?.body),flags:t}}function vn(t){return{type:"Subroutine",ref:t}}function _e(t,e){let n={negate:!1,normalizeUnknownPropertyNames:!1,skipPropertyNameValidation:!1,unicodePropertyMap:null,...e},r=n.unicodePropertyMap?.get(Pe(t));if(!r){if(n.normalizeUnknownPropertyNames)r=gl(t);else if(n.unicodePropertyMap&&!n.skipPropertyNameValidation)throw new Error(L`Invalid Unicode property "\\p{${t}}"`)}return{type:"CharacterSet",kind:"property",value:r??t,negate:n.negate}}function fl({flags:t,kind:e,name:n,negate:r,number:s}){switch(e){case"absence_repeater":return al("repeater");case"atomic":return U({atomic:!0});case"capturing":return _n(s,{name:n});case"group":return U({flags:t});case"lookahead":case"lookbehind":return ue({behind:e==="lookbehind",negate:r});default:throw new Error(`Unexpected group kind "${e}"`)}}function et(t){if(t===void 0)t=[ne()];else if(!Array.isArray(t)||!t.length||!t.every(e=>e.type==="Alternative"))throw new Error("Invalid body; expected array of one or more Alternative nodes");return t}function Ts(t){if(t===void 0)t=[];else if(!Array.isArray(t)||!t.every(e=>!!e.type))throw new Error("Invalid body; expected array of nodes");return t}function Is(t){return t.type==="LookaroundAssertion"&&t.kind==="lookahead"}function Rs(t){return t.type==="LookaroundAssertion"&&t.kind==="lookbehind"}function dl(t){return/^[\\p{Alpha}\\p{Pc}][^)]*$/u.test(t)}function gl(t){return t.trim().replace(/[- _]+/g,"_").replace(/[A-Z][a-z]+(?=[A-Z])/g,"$&_").replace(/[A-Za-z]+/g,e=>e[0].toUpperCase()+e.slice(1).toLowerCase())}function Pe(t){return t.replace(/[- _]+/g,"").toLowerCase()}function Ns(t,e){return ee(t,`${e?.type==="Character"&&e.value===93?"Empty":"Unclosed"} character class`)}function Ls(t){return ee(t,"Unclosed group")}function xe(t,e,n=null){function r(o,a){for(let i=0;i<o.length;i++){let l=s(o[i],a,i,o);i=Math.max(-1,i+l)}}function s(o,a=null,i=null,l=null){let c=0,u=!1,h={node:o,parent:a,key:i,container:l,root:t,remove(){Ot(l).splice(Math.max(0,Me(i)+c),1),c--,u=!0},removeAllNextSiblings(){return Ot(l).splice(Me(i)+1)},removeAllPrevSiblings(){let y=Me(i)+c;return c-=y,Ot(l).splice(0,Math.max(0,y))},replaceWith(y,b={}){let k=!!b.traverse;l?l[Math.max(0,Me(i)+c)]=y:ee(a,"Can\'t replace root node")[i]=y,k&&s(y,a,i,l),u=!0},replaceWithMultiple(y,b={}){let k=!!b.traverse;if(Ot(l).splice(Math.max(0,Me(i)+c),1,...y),c+=y.length-1,k){let x=0;for(let v=0;v<y.length;v++)x+=s(y[v],a,Me(i)+v+x,l)}u=!0},skip(){u=!0}},{type:p}=o,d=e["*"],f=e[p],C=typeof d=="function"?d:d?.enter,w=typeof f=="function"?f:f?.enter;if(C?.(h,n),w?.(h,n),!u)switch(p){case"AbsenceFunction":case"CapturingGroup":case"Group":r(o.body,o);break;case"Alternative":case"CharacterClass":r(o.body,o);break;case"Assertion":case"Backreference":case"Character":case"CharacterSet":case"Directive":case"Flags":case"NamedCallout":case"Subroutine":break;case"CharacterClassRange":s(o.min,o,"min"),s(o.max,o,"max");break;case"LookaroundAssertion":r(o.body,o);break;case"Quantifier":s(o.body,o,"body");break;case"Regex":r(o.body,o),s(o.flags,o,"flags");break;default:throw new Error(`Unexpected node type "${p}"`)}return f?.exit?.(h,n),d?.exit?.(h,n),c}return s(t),t}function Ot(t){if(!Array.isArray(t))throw new Error("Container expected");return t}function Me(t){if(typeof t!="number")throw new Error("Numeric key expected");return t}var Ps=String.raw`\\(\\?(?:[:=!>A-Za-z\\-]|<[=!]|\\(DEFINE\\))`;function Ms(t,e){for(let n=0;n<t.length;n++)t[n]>=e&&t[n]++}function $s(t,e,n,r){return t.slice(0,e)+r+t.slice(e+n.length)}var F=Object.freeze({DEFAULT:"DEFAULT",CHAR_CLASS:"CHAR_CLASS"});function tt(t,e,n,r){let s=new RegExp(String.raw`${e}|(?<$skip>\\[\\^?|\\\\?.)`,"gsu"),o=[!1],a=0,i="";for(let l of t.matchAll(s)){let{0:c,groups:{$skip:u}}=l;if(!u&&(!r||r===F.DEFAULT==!a)){n instanceof Function?i+=n(l,{context:a?F.CHAR_CLASS:F.DEFAULT,negated:o[o.length-1]}):i+=n;continue}c[0]==="["?(a++,o.push(c[1]==="^")):c==="]"&&a&&(a--,o.pop()),i+=c}return i}function An(t,e,n,r){tt(t,e,n,r)}function ml(t,e,n=0,r){if(!new RegExp(e,"su").test(t))return null;let s=new RegExp(`${e}|(?<$skip>\\\\\\\\?.)`,"gsu");s.lastIndex=n;let o=0,a;for(;a=s.exec(t);){let{0:i,groups:{$skip:l}}=a;if(!l&&(!r||r===F.DEFAULT==!o))return a;i==="["?o++:i==="]"&&o&&o--,s.lastIndex==a.index&&s.lastIndex++}return null}function nt(t,e,n){return!!ml(t,e,0,n)}function Os(t,e){let n=/\\\\?./gsu;n.lastIndex=e;let r=t.length,s=0,o=1,a;for(;a=n.exec(t);){let[i]=a;if(i==="[")s++;else if(s)i==="]"&&s--;else if(i==="(")o++;else if(i===")"&&(o--,!o)){r=a.index;break}}return t.slice(e,r)}var Gs=new RegExp(String.raw`(?<noncapturingStart>${Ps})|(?<capturingStart>\\((?:\\?<[^>]+>)?)|\\\\?.`,"gsu");function In(t,e){let n=e?.hiddenCaptures??[],r=e?.captureTransfers??new Map;if(!/\\(\\?>/.test(t))return{pattern:t,captureTransfers:r,hiddenCaptures:n};let s="(?>",o="(?:(?=(",a=[0],i=[],l=0,c=0,u=NaN,h;do{h=!1;let p=0,d=0,f=!1,C;for(Gs.lastIndex=Number.isNaN(u)?0:u+o.length;C=Gs.exec(t);){let{0:w,index:y,groups:{capturingStart:b,noncapturingStart:k}}=C;if(w==="[")p++;else if(p)w==="]"&&p--;else if(w===s&&!f)u=y,f=!0;else if(f&&k)d++;else if(b)f?d++:(l++,a.push(l+c));else if(w===")"&&f){if(!d){c++;let x=l+c;if(t=`${t.slice(0,u)}${o}${t.slice(u+s.length,y)}))<$$${x}>)${t.slice(y+1)}`,h=!0,i.push(x),Ms(n,x),r.size){let v=new Map;r.forEach((O,B)=>{v.set(B>=x?B+1:B,O.map(X=>X>=x?X+1:X))}),r=v}break}d--}}}while(h);return n.push(...i),t=tt(t,String.raw`\\\\(?<backrefNum>[1-9]\\d*)|<\\$\\$(?<wrappedBackrefNum>\\d+)>`,({0:p,groups:{backrefNum:d,wrappedBackrefNum:f}})=>{if(d){let C=+d;if(C>a.length-1)throw new Error(`Backref "${p}" greater than number of captures`);return`\\\\${a[C]}`}return`\\\\${f}`},F.DEFAULT),{pattern:t,captureTransfers:r,hiddenCaptures:n}}var Bs=String.raw`(?:[?*+]|\\{\\d+(?:,\\d*)?\\})`,En=new RegExp(String.raw`\n\\\\(?: \\d+\n  | c[A-Za-z]\n  | [gk]<[^>]+>\n  | [pPu]\\{[^\\}]+\\}\n  | u[A-Fa-f\\d]{4}\n  | x[A-Fa-f\\d]{2}\n  )\n| \\((?: \\? (?: [:=!>]\n  | <(?:[=!]|[^>]+>)\n  | [A-Za-z\\-]+:\n  | \\(DEFINE\\)\n  ))?\n| (?<qBase>${Bs})(?<qMod>[?+]?)(?<invalidQ>[?*+\\{]?)\n| \\\\?.\n`.replace(/\\s+/g,""),"gsu");function Rn(t){if(!new RegExp(`${Bs}\\\\+`).test(t))return{pattern:t};let e=[],n=null,r=null,s="",o=0,a;for(En.lastIndex=0;a=En.exec(t);){let{0:i,index:l,groups:{qBase:c,qMod:u,invalidQ:h}}=a;if(i==="[")o||(r=l),o++;else if(i==="]")o?o--:r=null;else if(!o)if(u==="+"&&s&&!s.startsWith("(")){if(h)throw new Error(`Invalid quantifier "${i}"`);let p=-1;if(/^\\{\\d+\\}$/.test(c))t=$s(t,l+c.length,u,"");else{if(s===")"||s==="]"){let d=s===")"?n:r;if(d===null)throw new Error(`Invalid unmatched "${s}"`);t=`${t.slice(0,d)}(?>${t.slice(d,l)}${c})${t.slice(l+i.length)}`}else t=`${t.slice(0,l-s.length)}(?>${s}${c})${t.slice(l+i.length)}`;p+=4}En.lastIndex+=p}else i[0]==="("?e.push(l):i===")"&&(n=e.length?e.pop():null);s=i}return{pattern:t}}var H=String.raw,yl=H`\\\\g<(?<gRNameOrNum>[^>&]+)&R=(?<gRDepth>[^>]+)>`,Ln=H`\\(\\?R=(?<rDepth>[^\\)]+)\\)|${yl}`,Gt=H`\\(\\?<(?![=!])(?<captureName>[^>]+)>`,zs=H`${Gt}|(?<unnamed>\\()(?!\\?)`,ve=new RegExp(H`${Gt}|${Ln}|\\(\\?|\\\\?.`,"gsu"),Nn="Cannot use multiple overlapping recursions";function Ws(t,e){let{hiddenCaptures:n,mode:r}={hiddenCaptures:[],mode:"plugin",...e},s=e?.captureTransfers??new Map;if(!new RegExp(Ln,"su").test(t))return{pattern:t,captureTransfers:s,hiddenCaptures:n};if(r==="plugin"&&nt(t,H`\\(\\?\\(DEFINE\\)`,F.DEFAULT))throw new Error("DEFINE groups cannot be used with recursion");let o=[],a=nt(t,H`\\\\[1-9]`,F.DEFAULT),i=new Map,l=[],c=!1,u=0,h=0,p;for(ve.lastIndex=0;p=ve.exec(t);){let{0:d,groups:{captureName:f,rDepth:C,gRNameOrNum:w,gRDepth:y}}=p;if(d==="[")u++;else if(u)d==="]"&&u--;else if(C){if(Ds(C),c)throw new Error(Nn);if(a)throw new Error(`${r==="external"?"Backrefs":"Numbered backrefs"} cannot be used with global recursion`);let b=t.slice(0,p.index),k=t.slice(ve.lastIndex);if(nt(k,Ln,F.DEFAULT))throw new Error(Nn);let x=+C-1;t=Fs(b,k,x,!1,n,o,h),s=js(s,b,x,o.length,0,h);break}else if(w){Ds(y);let b=!1;for(let ie of l)if(ie.name===w||ie.num===+w){if(b=!0,ie.hasRecursedWithin)throw new Error(Nn);break}if(!b)throw new Error(H`Recursive \\g cannot be used outside the referenced group "${r==="external"?w:H`\\g<${w}&R=${y}>`}"`);let k=i.get(w),x=Os(t,k);if(a&&nt(x,H`${Gt}|\\((?!\\?)`,F.DEFAULT))throw new Error(`${r==="external"?"Backrefs":"Numbered backrefs"} cannot be used with recursion of capturing groups`);let v=t.slice(k,p.index),O=x.slice(v.length+d.length),B=o.length,X=+y-1,ot=Fs(v,O,X,!0,n,o,h);s=js(s,v,X,o.length-B,B,h);let Ut=t.slice(0,k),Oe=t.slice(k+x.length);t=`${Ut}${ot}${Oe}`,ve.lastIndex+=ot.length-d.length-v.length-O.length,l.forEach(ie=>ie.hasRecursedWithin=!0),c=!0}else if(f)h++,i.set(String(h),ve.lastIndex),i.set(f,ve.lastIndex),l.push({num:h,name:f});else if(d[0]==="("){let b=d==="(";b&&(h++,i.set(String(h),ve.lastIndex)),l.push(b?{num:h}:{})}else d===")"&&l.pop()}return n.push(...o),{pattern:t,captureTransfers:s,hiddenCaptures:n}}function Ds(t){let e=`Max depth must be integer between 2 and 100; used ${t}`;if(!/^[1-9]\\d*$/.test(t))throw new Error(e);if(t=+t,t<2||t>100)throw new Error(e)}function Fs(t,e,n,r,s,o,a){let i=new Set;r&&An(t+e,Gt,({groups:{captureName:c}})=>{i.add(c)},F.DEFAULT);let l=[n,r?i:null,s,o,a];return`${t}${Us(`(?:${t}`,"forward",...l)}(?:)${Us(`${e})`,"backward",...l)}${e}`}function Us(t,e,n,r,s,o,a){let l=u=>e==="forward"?u+2:n-u+2-1,c="";for(let u=0;u<n;u++){let h=l(u);c+=tt(t,H`${zs}|\\\\k<(?<backref>[^>]+)>`,({0:p,groups:{captureName:d,unnamed:f,backref:C}})=>{if(C&&r&&!r.has(C))return p;let w=`_$${h}`;if(f||d){let y=a+o.length+1;return o.push(y),bl(s,y),f?p:`(?<${d}${w}>`}return H`\\k<${C}${w}>`},F.DEFAULT)}return c}function bl(t,e){for(let n=0;n<t.length;n++)t[n]>=e&&t[n]++}function js(t,e,n,r,s,o){if(t.size&&r){let a=0;An(e,zs,()=>a++,F.DEFAULT);let i=o-a+s,l=new Map;return t.forEach((c,u)=>{let h=(r-a*n)/n,p=a*n,d=u>i+a?u+r:u,f=[];for(let C of c)if(C<=i)f.push(C);else if(C>i+a+h)f.push(C+r);else if(C<=i+a)for(let w=0;w<=n;w++)f.push(C+a*w);else for(let w=0;w<=n;w++)f.push(C+p+h*w);l.set(d,f)}),l}return t}var T=String.fromCodePoint,_=String.raw,ae={flagGroups:(()=>{try{new RegExp("(?i:)")}catch{return!1}return!0})(),unicodeSets:(()=>{try{new RegExp("[[]]","v")}catch{return!1}return!0})()};ae.bugFlagVLiteralHyphenIsRange=ae.unicodeSets?(()=>{try{new RegExp(_`[\\d\\-a]`,"v")}catch{return!0}return!1})():!1;ae.bugNestedClassIgnoresNegation=ae.unicodeSets&&new RegExp("[[^a]]","v").test("a");function Bt(t,{enable:e,disable:n}){return{dotAll:!n?.dotAll&&!!(e?.dotAll||t.dotAll),ignoreCase:!n?.ignoreCase&&!!(e?.ignoreCase||t.ignoreCase)}}function rt(t,e,n){return t.has(e)||t.set(e,n),t.get(e)}function On(t,e){return Hs[t]>=Hs[e]}function wl(t,e){if(t==null)throw new Error(e??"Value expected");return t}var Hs={ES2025:2025,ES2024:2024,ES2018:2018},Cl={auto:"auto",ES2025:"ES2025",ES2024:"ES2024",ES2018:"ES2018"};function Qs(t={}){if({}.toString.call(t)!=="[object Object]")throw new Error("Unexpected options");if(t.target!==void 0&&!Cl[t.target])throw new Error(`Unexpected target "${t.target}"`);let e={accuracy:"default",avoidSubclass:!1,flags:"",global:!1,hasIndices:!1,lazyCompileLength:1/0,target:"auto",verbose:!1,...t,rules:{allowOrphanBackrefs:!1,asciiWordBoundaries:!1,captureGroup:!1,recursionLimit:20,singleline:!1,...t.rules}};return e.target==="auto"&&(e.target=ae.flagGroups?"ES2025":ae.unicodeSets?"ES2024":"ES2018"),e}var kl="[	-\\r ]",Sl=new Set([T(304),T(305)]),re=_`[\\p{L}\\p{M}\\p{N}\\p{Pc}]`;function Zs(t){if(Sl.has(t))return[t];let e=new Set,n=t.toLowerCase(),r=n.toUpperCase(),s=vl.get(n),o=_l.get(n),a=xl.get(n);return[...r].length===1&&e.add(r),a&&e.add(a),s&&e.add(s),e.add(n),o&&e.add(o),[...e]}var Bn=new Map(`C Other\nCc Control cntrl\nCf Format\nCn Unassigned\nCo Private_Use\nCs Surrogate\nL Letter\nLC Cased_Letter\nLl Lowercase_Letter\nLm Modifier_Letter\nLo Other_Letter\nLt Titlecase_Letter\nLu Uppercase_Letter\nM Mark Combining_Mark\nMc Spacing_Mark\nMe Enclosing_Mark\nMn Nonspacing_Mark\nN Number\nNd Decimal_Number digit\nNl Letter_Number\nNo Other_Number\nP Punctuation punct\nPc Connector_Punctuation\nPd Dash_Punctuation\nPe Close_Punctuation\nPf Final_Punctuation\nPi Initial_Punctuation\nPo Other_Punctuation\nPs Open_Punctuation\nS Symbol\nSc Currency_Symbol\nSk Modifier_Symbol\nSm Math_Symbol\nSo Other_Symbol\nZ Separator\nZl Line_Separator\nZp Paragraph_Separator\nZs Space_Separator\nASCII\nASCII_Hex_Digit AHex\nAlphabetic Alpha\nAny\nAssigned\nBidi_Control Bidi_C\nBidi_Mirrored Bidi_M\nCase_Ignorable CI\nCased\nChanges_When_Casefolded CWCF\nChanges_When_Casemapped CWCM\nChanges_When_Lowercased CWL\nChanges_When_NFKC_Casefolded CWKCF\nChanges_When_Titlecased CWT\nChanges_When_Uppercased CWU\nDash\nDefault_Ignorable_Code_Point DI\nDeprecated Dep\nDiacritic Dia\nEmoji\nEmoji_Component EComp\nEmoji_Modifier EMod\nEmoji_Modifier_Base EBase\nEmoji_Presentation EPres\nExtended_Pictographic ExtPict\nExtender Ext\nGrapheme_Base Gr_Base\nGrapheme_Extend Gr_Ext\nHex_Digit Hex\nIDS_Binary_Operator IDSB\nIDS_Trinary_Operator IDST\nID_Continue IDC\nID_Start IDS\nIdeographic Ideo\nJoin_Control Join_C\nLogical_Order_Exception LOE\nLowercase Lower\nMath\nNoncharacter_Code_Point NChar\nPattern_Syntax Pat_Syn\nPattern_White_Space Pat_WS\nQuotation_Mark QMark\nRadical\nRegional_Indicator RI\nSentence_Terminal STerm\nSoft_Dotted SD\nTerminal_Punctuation Term\nUnified_Ideograph UIdeo\nUppercase Upper\nVariation_Selector VS\nWhite_Space space\nXID_Continue XIDC\nXID_Start XIDS`.split(/\\s/).map(t=>[Pe(t),t])),_l=new Map([["s",T(383)],[T(383),"s"]]),xl=new Map([[T(223),T(7838)],[T(107),T(8490)],[T(229),T(8491)],[T(969),T(8486)]]),vl=new Map([he(453),he(456),he(459),he(498),...Tn(8072,8079),...Tn(8088,8095),...Tn(8104,8111),he(8124),he(8140),he(8188)]),Al=new Map([["alnum",_`[\\p{Alpha}\\p{Nd}]`],["alpha",_`\\p{Alpha}`],["ascii",_`\\p{ASCII}`],["blank",_`[\\p{Zs}\\t]`],["cntrl",_`\\p{Cc}`],["digit",_`\\p{Nd}`],["graph",_`[\\P{space}&&\\P{Cc}&&\\P{Cn}&&\\P{Cs}]`],["lower",_`\\p{Lower}`],["print",_`[[\\P{space}&&\\P{Cc}&&\\P{Cn}&&\\P{Cs}]\\p{Zs}]`],["punct",_`[\\p{P}\\p{S}]`],["space",_`\\p{space}`],["upper",_`\\p{Upper}`],["word",_`[\\p{Alpha}\\p{M}\\p{Nd}\\p{Pc}]`],["xdigit",_`\\p{AHex}`]]);function El(t,e){let n=[];for(let r=t;r<=e;r++)n.push(r);return n}function he(t){let e=T(t);return[e.toLowerCase(),e]}function Tn(t,e){return El(t,e).map(n=>he(n))}var Ys=new Set(["Lower","Lowercase","Upper","Uppercase","Ll","Lowercase_Letter","Lt","Titlecase_Letter","Lu","Uppercase_Letter"]);function Il(t,e){let n={accuracy:"default",asciiWordBoundaries:!1,avoidSubclass:!1,bestEffortTarget:"ES2025",...e};Js(t);let r={accuracy:n.accuracy,asciiWordBoundaries:n.asciiWordBoundaries,avoidSubclass:n.avoidSubclass,flagDirectivesByAlt:new Map,jsGroupNameMap:new Map,minTargetEs2024:On(n.bestEffortTarget,"ES2024"),passedLookbehind:!1,strategy:null,subroutineRefMap:new Map,supportedGNodes:new Set,digitIsAscii:t.flags.digitIsAscii,spaceIsAscii:t.flags.spaceIsAscii,wordIsAscii:t.flags.wordIsAscii};xe(t,Rl,r);let s={dotAll:t.flags.dotAll,ignoreCase:t.flags.ignoreCase},o={currentFlags:s,prevFlags:null,globalFlags:s,groupOriginByCopy:new Map,groupsByName:new Map,multiplexCapturesToLeftByRef:new Map,openRefs:new Map,reffedNodesByReferencer:new Map,subroutineRefMap:r.subroutineRefMap};xe(t,Nl,o);let a={groupsByName:o.groupsByName,highestOrphanBackref:0,numCapturesToLeft:0,reffedNodesByReferencer:o.reffedNodesByReferencer};return xe(t,Ll,a),t._originMap=o.groupOriginByCopy,t._strategy=r.strategy,t}var Rl={AbsenceFunction({node:t,parent:e,replaceWith:n}){let{body:r,kind:s}=t;if(s==="repeater"){let o=U();o.body[0].body.push(ue({negate:!0,body:r}),_e("Any"));let a=U();a.body[0].body.push(xn("greedy",0,1/0,o)),n(N(a,e),{traverse:!0})}else throw new Error(\'Unsupported absence function "(?~|"\')},Alternative:{enter({node:t,parent:e,key:n},{flagDirectivesByAlt:r}){let s=t.body.filter(o=>o.kind==="flags");for(let o=n+1;o<e.body.length;o++){let a=e.body[o];rt(r,a,[]).push(...s)}},exit({node:t},{flagDirectivesByAlt:e}){if(e.get(t)?.length){let n=to(e.get(t));if(n){let r=U({flags:n});r.body[0].body=t.body,t.body=[N(r,t)]}}}},Assertion({node:t,parent:e,key:n,container:r,root:s,remove:o,replaceWith:a},i){let{kind:l,negate:c}=t,{asciiWordBoundaries:u,avoidSubclass:h,supportedGNodes:p,wordIsAscii:d}=i;if(l==="text_segment_boundary")throw new Error(`Unsupported text segment boundary "\\\\${c?"Y":"y"}"`);if(l==="line_end")a(N(ue({body:[ne({body:[Mt("string_end")]}),ne({body:[Te(10)]})]}),e));else if(l==="line_start")a(N(se(_`(?<=\\A|\\n(?!\\z))`,{skipLookbehindValidation:!0}),e));else if(l==="search_start")if(p.has(t))s.flags.sticky=!0,o();else{let f=r[n-1];if(f&&Gl(f))a(N(ue({negate:!0}),e));else{if(h)throw new Error(_`Uses "\\G" in a way that requires a subclass`);a(pe(Mt("string_start"),e)),i.strategy="clip_search"}}else if(!(l==="string_end"||l==="string_start"))if(l==="string_end_newline")a(N(se(_`(?=\\n?\\z)`),e));else if(l==="word_boundary"){if(!d&&!u){let f=`(?:(?<=${re})(?!${re})|(?<!${re})(?=${re}))`,C=`(?:(?<=${re})(?=${re})|(?<!${re})(?!${re}))`;a(N(se(c?C:f),e))}}else throw new Error(`Unexpected assertion kind "${l}"`)},Backreference({node:t},{jsGroupNameMap:e}){let{ref:n}=t;typeof n=="string"&&!Mn(n)&&(n=Pn(n,e),t.ref=n)},CapturingGroup({node:t},{jsGroupNameMap:e,subroutineRefMap:n}){let{name:r}=t;r&&!Mn(r)&&(r=Pn(r,e),t.name=r),n.set(t.number,t),r&&n.set(r,t)},CharacterClassRange({node:t,parent:e,replaceWith:n}){if(e.kind==="intersection"){let r=Je({body:[t]});n(N(r,e),{traverse:!0})}},CharacterSet({node:t,parent:e,replaceWith:n},{accuracy:r,minTargetEs2024:s,digitIsAscii:o,spaceIsAscii:a,wordIsAscii:i}){let{kind:l,negate:c,value:u}=t;if(o&&(l==="digit"||u==="digit")){n(pe($t("digit",{negate:c}),e));return}if(a&&(l==="space"||u==="space")){n(N($n(se(kl),c),e));return}if(i&&(l==="word"||u==="word")){n(pe($t("word",{negate:c}),e));return}if(l==="any")n(pe(_e("Any"),e));else if(l==="digit")n(pe(_e("Nd",{negate:c}),e));else if(l!=="dot")if(l==="text_segment"){if(r==="strict")throw new Error(_`Use of "\\X" requires non-strict accuracy`);let h="\\\\p{Emoji}(?:\\\\p{EMod}|\\\\uFE0F\\\\u20E3?|[\\\\x{E0020}-\\\\x{E007E}]+\\\\x{E007F})?",p=_`\\p{RI}{2}|${h}(?:\\u200D${h})*`;n(N(se(_`(?>\\r\\n|${s?_`\\p{RGI_Emoji}`:p}|\\P{M}\\p{M}*)`,{skipPropertyNameValidation:!0}),e))}else if(l==="hex")n(pe(_e("AHex",{negate:c}),e));else if(l==="newline")n(N(se(c?`[^\n]`:`(?>\\r\n?|[\n\\v\\f\\x85\\u2028\\u2029])`),e));else if(l==="posix")if(!s&&(u==="graph"||u==="print")){if(r==="strict")throw new Error(`POSIX class "${u}" requires min target ES2024 or non-strict accuracy`);let h={graph:"!-~",print:" -~"}[u];c&&(h=`\\0-${T(h.codePointAt(0)-1)}${T(h.codePointAt(2)+1)}-\\u{10FFFF}`),n(N(se(`[${h}]`),e))}else n(N($n(se(Al.get(u)),c),e));else if(l==="property")Bn.has(Pe(u))||(t.key="sc");else if(l==="space")n(pe(_e("space",{negate:c}),e));else if(l==="word")n(N($n(se(re),c),e));else throw new Error(`Unexpected character set kind "${l}"`)},Directive({node:t,parent:e,root:n,remove:r,replaceWith:s,removeAllPrevSiblings:o,removeAllNextSiblings:a}){let{kind:i,flags:l}=t;if(i==="flags")if(!l.enable&&!l.disable)r();else{let c=U({flags:l});c.body[0].body=a(),s(N(c,e),{traverse:!0})}else if(i==="keep"){let c=n.body[0],h=n.body.length===1&&Lt(c,{type:"Group"})&&c.body[0].body.length===1?c.body[0]:n;if(e.parent!==h||h.body.length>1)throw new Error(_`Uses "\\K" in a way that\'s unsupported`);let p=ue({behind:!0});p.body[0].body=o(),s(N(p,e))}else throw new Error(`Unexpected directive kind "${i}"`)},Flags({node:t,parent:e}){if(t.posixIsAscii)throw new Error(\'Unsupported flag "P"\');if(t.textSegmentMode==="word")throw new Error(\'Unsupported flag "y{w}"\');["digitIsAscii","extended","posixIsAscii","spaceIsAscii","wordIsAscii","textSegmentMode"].forEach(n=>delete t[n]),Object.assign(t,{global:!1,hasIndices:!1,multiline:!1,sticky:t.sticky??!1}),e.options={disable:{x:!0,n:!0},force:{v:!0}}},Group({node:t}){if(!t.flags)return;let{enable:e,disable:n}=t.flags;e?.extended&&delete e.extended,n?.extended&&delete n.extended,e?.dotAll&&n?.dotAll&&delete e.dotAll,e?.ignoreCase&&n?.ignoreCase&&delete e.ignoreCase,e&&!Object.keys(e).length&&delete t.flags.enable,n&&!Object.keys(n).length&&delete t.flags.disable,!t.flags.enable&&!t.flags.disable&&delete t.flags},LookaroundAssertion({node:t},e){let{kind:n}=t;n==="lookbehind"&&(e.passedLookbehind=!0)},NamedCallout({node:t,parent:e,replaceWith:n}){let{kind:r}=t;if(r==="fail")n(N(ue({negate:!0}),e));else throw new Error(`Unsupported named callout "(*${r.toUpperCase()}"`)},Quantifier({node:t}){if(t.body.type==="Quantifier"){let e=U();e.body[0].body.push(t.body),t.body=N(e,t)}},Regex:{enter({node:t},{supportedGNodes:e}){let n=[],r=!1,s=!1;for(let o of t.body)if(o.body.length===1&&o.body[0].kind==="search_start")o.body.pop();else{let a=ro(o.body);a?(r=!0,Array.isArray(a)?n.push(...a):n.push(a)):s=!0}r&&!s&&n.forEach(o=>e.add(o))},exit(t,{accuracy:e,passedLookbehind:n,strategy:r}){if(e==="strict"&&n&&r)throw new Error(_`Uses "\\G" in a way that requires non-strict accuracy`)}},Subroutine({node:t},{jsGroupNameMap:e}){let{ref:n}=t;typeof n=="string"&&!Mn(n)&&(n=Pn(n,e),t.ref=n)}},Nl={Backreference({node:t},{multiplexCapturesToLeftByRef:e,reffedNodesByReferencer:n}){let{orphan:r,ref:s}=t;r||n.set(t,[...e.get(s).map(({node:o})=>o)])},CapturingGroup:{enter({node:t,parent:e,replaceWith:n,skip:r},{groupOriginByCopy:s,groupsByName:o,multiplexCapturesToLeftByRef:a,openRefs:i,reffedNodesByReferencer:l}){let c=s.get(t);if(c&&i.has(t.number)){let h=pe(qs(t.number),e);l.set(h,i.get(t.number)),n(h);return}i.set(t.number,t),a.set(t.number,[]),t.name&&rt(a,t.name,[]);let u=a.get(t.name??t.number);for(let h=0;h<u.length;h++){let p=u[h];if(c===p.node||c&&c===p.origin||t===p.origin){u.splice(h,1);break}}if(a.get(t.number).push({node:t,origin:c}),t.name&&a.get(t.name).push({node:t,origin:c}),t.name){let h=rt(o,t.name,new Map),p=!1;if(c)p=!0;else for(let d of h.values())if(!d.hasDuplicateNameToRemove){p=!0;break}o.get(t.name).set(t,{node:t,hasDuplicateNameToRemove:p})}},exit({node:t},{openRefs:e}){e.delete(t.number)}},Group:{enter({node:t},e){e.prevFlags=e.currentFlags,t.flags&&(e.currentFlags=Bt(e.currentFlags,t.flags))},exit(t,e){e.currentFlags=e.prevFlags}},Subroutine({node:t,parent:e,replaceWith:n},r){let{isRecursive:s,ref:o}=t;if(s){let u=e;for(;(u=u.parent)&&!(u.type==="CapturingGroup"&&(u.name===o||u.number===o)););r.reffedNodesByReferencer.set(t,u);return}let a=r.subroutineRefMap.get(o),i=o===0,l=i?qs(0):eo(a,r.groupOriginByCopy,null),c=l;if(!i){let u=to(Ml(a,p=>p.type==="Group"&&!!p.flags)),h=u?Bt(r.globalFlags,u):r.globalFlags;Tl(h,r.currentFlags)||(c=U({flags:$l(h)}),c.body[0].body.push(l))}n(N(c,e),{traverse:!i})}},Ll={Backreference({node:t,parent:e,replaceWith:n},r){if(t.orphan){r.highestOrphanBackref=Math.max(r.highestOrphanBackref,t.ref);return}let o=r.reffedNodesByReferencer.get(t).filter(a=>Pl(a,t));if(!o.length)n(N(ue({negate:!0}),e));else if(o.length>1){let a=U({atomic:!0,body:o.reverse().map(i=>ne({body:[Tt(i.number)]}))});n(N(a,e))}else t.ref=o[0].number},CapturingGroup({node:t},e){t.number=++e.numCapturesToLeft,t.name&&e.groupsByName.get(t.name).get(t).hasDuplicateNameToRemove&&delete t.name},Regex:{exit({node:t},e){let n=Math.max(e.highestOrphanBackref-e.numCapturesToLeft,0);for(let r=0;r<n;r++){let s=_n();t.body.at(-1).body.push(s)}}},Subroutine({node:t},e){!t.isRecursive||t.ref===0||(t.ref=e.reffedNodesByReferencer.get(t).number)}};function Js(t){xe(t,{"*"({node:e,parent:n}){e.parent=n}})}function Tl(t,e){return t.dotAll===e.dotAll&&t.ignoreCase===e.ignoreCase}function Pl(t,e){let n=e;do{if(n.type==="Regex")return!1;if(n.type==="Alternative")continue;if(n===t)return!1;let r=no(n.parent);for(let s of r){if(s===n)break;if(s===t||so(s,t))return!0}}while(n=n.parent);throw new Error("Unexpected path")}function eo(t,e,n,r){let s=Array.isArray(t)?[]:{};for(let[o,a]of Object.entries(t))o==="parent"?s.parent=Array.isArray(n)?r:n:a&&typeof a=="object"?s[o]=eo(a,e,s,n):(o==="type"&&a==="CapturingGroup"&&e.set(s,e.get(t)??t),s[o]=a);return s}function qs(t){let e=vn(t);return e.isRecursive=!0,e}function Ml(t,e){let n=[];for(;t=t.parent;)(!e||e(t))&&n.push(t);return n}function Pn(t,e){if(e.has(t))return e.get(t);let n=`$${e.size}_${t.replace(/^[^$_\\p{IDS}]|[^$\\u200C\\u200D\\p{IDC}]/ug,"_")}`;return e.set(t,n),n}function to(t){let e=["dotAll","ignoreCase"],n={enable:{},disable:{}};return t.forEach(({flags:r})=>{e.forEach(s=>{r.enable?.[s]&&(delete n.disable[s],n.enable[s]=!0),r.disable?.[s]&&(n.disable[s]=!0)})}),Object.keys(n.enable).length||delete n.enable,Object.keys(n.disable).length||delete n.disable,n.enable||n.disable?n:null}function $l({dotAll:t,ignoreCase:e}){let n={};return(t||e)&&(n.enable={},t&&(n.enable.dotAll=!0),e&&(n.enable.ignoreCase=!0)),(!t||!e)&&(n.disable={},!t&&(n.disable.dotAll=!0),!e&&(n.disable.ignoreCase=!0)),n}function no(t){if(!t)throw new Error("Node expected");let{body:e}=t;return Array.isArray(e)?e:e?[e]:null}function ro(t){let e=t.find(n=>n.kind==="search_start"||Bl(n,{negate:!1})||!Ol(n));if(!e)return null;if(e.kind==="search_start")return e;if(e.type==="LookaroundAssertion")return e.body[0].body[0];if(e.type==="CapturingGroup"||e.type==="Group"){let n=[];for(let r of e.body){let s=ro(r.body);if(!s)return null;Array.isArray(s)?n.push(...s):n.push(s)}return n}return null}function so(t,e){let n=no(t)??[];for(let r of n)if(r===e||so(r,e))return!0;return!1}function Ol({type:t}){return t==="Assertion"||t==="Directive"||t==="LookaroundAssertion"}function Gl(t){let e=["Character","CharacterClass","CharacterSet"];return e.includes(t.type)||t.type==="Quantifier"&&t.min&&e.includes(t.body.type)}function Bl(t,e){let n={negate:null,...e};return t.type==="LookaroundAssertion"&&(n.negate===null||t.negate===n.negate)&&t.body.length===1&&Lt(t.body[0],{type:"Assertion",kind:"search_start"})}function Mn(t){return/^[$_\\p{IDS}][$\\u200C\\u200D\\p{IDC}]*$/u.test(t)}function se(t,e){let r=Pt(t,{...e,unicodePropertyMap:Bn}).body;return r.length>1||r[0].body.length>1?U({body:r}):r[0].body[0]}function $n(t,e){return t.negate=e,t}function pe(t,e){return t.parent=e,t}function N(t,e){return Js(t),t.parent=e,t}function Dl(t,e){let n=Qs(e),r=On(n.target,"ES2024"),s=On(n.target,"ES2025"),o=n.rules.recursionLimit;if(!Number.isInteger(o)||o<2||o>20)throw new Error("Invalid recursionLimit; use 2-20");let a=null,i=null;if(!s){let d=[t.flags.ignoreCase];xe(t,Fl,{getCurrentModI:()=>d.at(-1),popModI(){d.pop()},pushModI(f){d.push(f)},setHasCasedChar(){d.at(-1)?a=!0:i=!0}})}let l={dotAll:t.flags.dotAll,ignoreCase:!!((t.flags.ignoreCase||a)&&!i)},c=t,u={accuracy:n.accuracy,appliedGlobalFlags:l,captureMap:new Map,currentFlags:{dotAll:t.flags.dotAll,ignoreCase:t.flags.ignoreCase},inCharClass:!1,lastNode:c,originMap:t._originMap,recursionLimit:o,useAppliedIgnoreCase:!!(!s&&a&&i),useFlagMods:s,useFlagV:r,verbose:n.verbose};function h(d){return u.lastNode=c,c=d,wl(Ul[d.type],`Unexpected node type "${d.type}"`)(d,u,h)}let p={pattern:t.body.map(h).join("|"),flags:h(t.flags),options:{...t.options}};return r||(delete p.options.force.v,p.options.disable.v=!0,p.options.unicodeSetsPlugin=null),p._captureTransfers=new Map,p._hiddenCaptures=[],u.captureMap.forEach((d,f)=>{d.hidden&&p._hiddenCaptures.push(f),d.transferTo&&rt(p._captureTransfers,d.transferTo,[]).push(f)}),p}var Fl={"*":{enter({node:t},e){if(Xs(t)){let n=e.getCurrentModI();e.pushModI(t.flags?Bt({ignoreCase:n},t.flags).ignoreCase:n)}},exit({node:t},e){Xs(t)&&e.popModI()}},Backreference(t,e){e.setHasCasedChar()},Character({node:t},e){Dn(T(t.value))&&e.setHasCasedChar()},CharacterClassRange({node:t,skip:e},n){e(),oo(t,{firstOnly:!0}).length&&n.setHasCasedChar()},CharacterSet({node:t},e){t.kind==="property"&&Ys.has(t.value)&&e.setHasCasedChar()}},Ul={Alternative({body:t},e,n){return t.map(n).join("")},Assertion({kind:t,negate:e}){if(t==="string_end")return"$";if(t==="string_start")return"^";if(t==="word_boundary")return e?_`\\B`:_`\\b`;throw new Error(`Unexpected assertion kind "${t}"`)},Backreference({ref:t},e){if(typeof t!="number")throw new Error("Unexpected named backref in transformed AST");if(!e.useFlagMods&&e.accuracy==="strict"&&e.currentFlags.ignoreCase&&!e.captureMap.get(t).ignoreCase)throw new Error("Use of case-insensitive backref to case-sensitive group requires target ES2025 or non-strict accuracy");return"\\\\"+t},CapturingGroup(t,e,n){let{body:r,name:s,number:o}=t,a={ignoreCase:e.currentFlags.ignoreCase},i=e.originMap.get(t);return i&&(a.hidden=!0,o>i.number&&(a.transferTo=i.number)),e.captureMap.set(o,a),`(${s?`?<${s}>`:""}${r.map(n).join("|")})`},Character({value:t},e){let n=T(t),r=$e(t,{escDigit:e.lastNode.type==="Backreference",inCharClass:e.inCharClass,useFlagV:e.useFlagV});if(r!==n)return r;if(e.useAppliedIgnoreCase&&e.currentFlags.ignoreCase&&Dn(n)){let s=Zs(n);return e.inCharClass?s.join(""):s.length>1?`[${s.join("")}]`:s[0]}return n},CharacterClass(t,e,n){let{kind:r,negate:s,parent:o}=t,{body:a}=t;if(r==="intersection"&&!e.useFlagV)throw new Error("Use of character class intersection requires min target ES2024");ae.bugFlagVLiteralHyphenIsRange&&e.useFlagV&&a.some(Ks)&&(a=[Te(45),...a.filter(c=>!Ks(c))]);let i=()=>`[${s?"^":""}${a.map(n).join(r==="intersection"?"&&":"")}]`;if(!e.inCharClass){if((!e.useFlagV||ae.bugNestedClassIgnoresNegation)&&!s){let u=a.filter(h=>h.type==="CharacterClass"&&h.kind==="union"&&h.negate);if(u.length){let h=U(),p=h.body[0];return h.parent=o,p.parent=h,a=a.filter(d=>!u.includes(d)),t.body=a,a.length?(t.parent=p,p.body.push(t)):h.body.pop(),u.forEach(d=>{let f=ne({body:[d]});d.parent=f,f.parent=h,h.body.push(f)}),n(h)}}e.inCharClass=!0;let c=i();return e.inCharClass=!1,c}let l=a[0];if(r==="union"&&!s&&l&&((!e.useFlagV||!e.verbose)&&o.kind==="union"&&!(ae.bugFlagVLiteralHyphenIsRange&&e.useFlagV)||!e.verbose&&o.kind==="intersection"&&a.length===1&&l.type!=="CharacterClassRange"))return a.map(n).join("");if(!e.useFlagV&&o.type==="CharacterClass")throw new Error("Uses nested character class in a way that requires min target ES2024");return i()},CharacterClassRange(t,e){let n=t.min.value,r=t.max.value,s={escDigit:!1,inCharClass:!0,useFlagV:e.useFlagV},o=$e(n,s),a=$e(r,s),i=new Set;if(e.useAppliedIgnoreCase&&e.currentFlags.ignoreCase){let l=oo(t);ql(l).forEach(u=>{i.add(Array.isArray(u)?`${$e(u[0],s)}-${$e(u[1],s)}`:$e(u,s))})}return`${o}-${a}${[...i].join("")}`},CharacterSet({kind:t,negate:e,value:n,key:r},s){if(t==="dot")return s.currentFlags.dotAll?s.appliedGlobalFlags.dotAll||s.useFlagMods?".":"[^]":_`[^\\n]`;if(t==="digit")return e?_`\\D`:_`\\d`;if(t==="property"){if(s.useAppliedIgnoreCase&&s.currentFlags.ignoreCase&&Ys.has(n))throw new Error(`Unicode property "${n}" can\'t be case-insensitive when other chars have specific case`);return`${e?_`\\P`:_`\\p`}{${r?`${r}=`:""}${n}}`}if(t==="word")return e?_`\\W`:_`\\w`;throw new Error(`Unexpected character set kind "${t}"`)},Flags(t,e){return(e.appliedGlobalFlags.ignoreCase?"i":"")+(t.dotAll?"s":"")+(t.sticky?"y":"")},Group({atomic:t,body:e,flags:n,parent:r},s,o){let a=s.currentFlags;n&&(s.currentFlags=Bt(a,n));let i=e.map(o).join("|"),l=!s.verbose&&e.length===1&&r.type!=="Quantifier"&&!t&&(!s.useFlagMods||!n)?i:`(?${Vl(t,n,s.useFlagMods)}${i})`;return s.currentFlags=a,l},LookaroundAssertion({body:t,kind:e,negate:n},r,s){return`(?${`${e==="lookahead"?"":"<"}${n?"!":"="}`}${t.map(s).join("|")})`},Quantifier(t,e,n){return n(t.body)+Xl(t)},Subroutine({isRecursive:t,ref:e},n){if(!t)throw new Error("Unexpected non-recursive subroutine in transformed AST");let r=n.recursionLimit;return e===0?`(?R=${r})`:_`\\g<${e}&R=${r}>`}},jl=new Set(["$","(",")","*","+",".","?","[","\\\\","]","^","{","|","}"]),zl=new Set(["-","\\\\","]","^","["]),Wl=new Set(["(",")","-","/","[","\\\\","]","^","{","|","}","!","#","$","%","&","*","+",",",".",":",";","<","=",">","?","@","`","~"]),Vs=new Map([[9,_`\\t`],[10,_`\\n`],[11,_`\\v`],[12,_`\\f`],[13,_`\\r`],[8232,_`\\u2028`],[8233,_`\\u2029`],[65279,_`\\uFEFF`]]),Hl=/^\\p{Cased}$/u;function Dn(t){return Hl.test(t)}function oo(t,e){let n=!!e?.firstOnly,r=t.min.value,s=t.max.value,o=[];if(r<65&&(s===65535||s>=131071)||r===65536&&s>=131071)return o;for(let a=r;a<=s;a++){let i=T(a);if(!Dn(i))continue;let l=Zs(i).filter(c=>{let u=c.codePointAt(0);return u<r||u>s});if(l.length&&(o.push(...l),n))break}return o}function $e(t,{escDigit:e,inCharClass:n,useFlagV:r}){if(Vs.has(t))return Vs.get(t);if(t<32||t>126&&t<160||t>262143||e&&Kl(t))return t>255?`\\\\u{${t.toString(16).toUpperCase()}}`:`\\\\x${t.toString(16).toUpperCase().padStart(2,"0")}`;let s=n?r?Wl:zl:jl,o=T(t);return(s.has(o)?"\\\\":"")+o}function ql(t){let e=t.map(s=>s.codePointAt(0)).sort((s,o)=>s-o),n=[],r=null;for(let s=0;s<e.length;s++)e[s+1]===e[s]+1?r??(r=e[s]):r===null?n.push(e[s]):(n.push([r,e[s]]),r=null);return n}function Vl(t,e,n){if(t)return">";let r="";if(e&&n){let{enable:s,disable:o}=e;r=(s?.ignoreCase?"i":"")+(s?.dotAll?"s":"")+(o?"-":"")+(o?.ignoreCase?"i":"")+(o?.dotAll?"s":"")}return`${r}:`}function Xl({kind:t,max:e,min:n}){let r;return!n&&e===1?r="?":!n&&e===1/0?r="*":n===1&&e===1/0?r="+":n===e?r=`{${n}}`:r=`{${n},${e===1/0?"":e}}`,r+{greedy:"",lazy:"?",possessive:"+"}[t]}function Xs({type:t}){return t==="CapturingGroup"||t==="Group"||t==="LookaroundAssertion"}function Kl(t){return t>47&&t<58}function Ks({type:t,value:e}){return t==="Character"&&e===45}var fe,oe,Ae,de,Ee,st,Gn,ge,Ql=(ge=class extends RegExp{constructor(n,r,s){var e=(...Qp)=>(super(...Qp),me(this,st),me(this,fe,new Map),me(this,oe,null),me(this,Ae),me(this,de,null),me(this,Ee,null),g(this,"rawOptions",{}),this);let o=!!s?.lazyCompile;if(n instanceof RegExp){if(s)throw new Error("Cannot provide options when copying a regexp");let a=n;e(a,r),q(this,Ae,a.source),a instanceof ge&&(q(this,fe,G(a,fe)),q(this,de,G(a,de)),q(this,Ee,G(a,Ee)),this.rawOptions=a.rawOptions)}else{let a={hiddenCaptures:[],strategy:null,transfers:[],...s};e(o?"":n,r),q(this,Ae,n),q(this,fe,Yl(a.hiddenCaptures,a.transfers)),q(this,Ee,a.strategy),this.rawOptions=s??{}}o||q(this,oe,this)}get source(){return G(this,Ae)||"(?:)"}exec(n){if(!G(this,oe)){let{lazyCompile:o,...a}=this.rawOptions;q(this,oe,new ge(G(this,Ae),this.flags,a))}let r=this.global||this.sticky,s=this.lastIndex;if(G(this,Ee)==="clip_search"&&r&&s){this.lastIndex=0;let o=Wt(this,st,Gn).call(this,n.slice(s));return o&&(Zl(o,s,n,this.hasIndices),this.lastIndex+=s),o}return Wt(this,st,Gn).call(this,n)}},fe=new WeakMap,oe=new WeakMap,Ae=new WeakMap,de=new WeakMap,Ee=new WeakMap,st=new WeakSet,Gn=function(n){G(this,oe).lastIndex=this.lastIndex;let r=Xn(ge.prototype,this,"exec").call(G(this,oe),n);if(this.lastIndex=G(this,oe).lastIndex,!r||!G(this,fe).size)return r;let s=[...r];r.length=1;let o;this.hasIndices&&(o=[...r.indices],r.indices.length=1);let a=[0];for(let i=1;i<s.length;i++){let{hidden:l,transferTo:c}=G(this,fe).get(i)??{};if(l?a.push(null):(a.push(r.length),r.push(s[i]),this.hasIndices&&r.indices.push(o[i])),c&&s[i]!==void 0){let u=a[c];if(!u)throw new Error(`Invalid capture transfer to "${u}"`);if(r[u]=s[i],this.hasIndices&&(r.indices[u]=o[i]),r.groups){G(this,de)||q(this,de,Jl(this.source));let h=G(this,de).get(c);h&&(r.groups[h]=s[i],this.hasIndices&&(r.indices.groups[h]=o[i]))}}}return r},ge);function Zl(t,e,n,r){if(t.index+=e,t.input=n,r){let s=t.indices;for(let a=0;a<s.length;a++){let i=s[a];i&&(s[a]=[i[0]+e,i[1]+e])}let o=s.groups;o&&Object.keys(o).forEach(a=>{let i=o[a];i&&(o[a]=[i[0]+e,i[1]+e])})}}function Yl(t,e){let n=new Map;for(let r of t)n.set(r,{hidden:!0});for(let[r,s]of e)for(let o of s)rt(n,o,{}).transferTo=r;return n}function Jl(t){let e=/(?<capture>\\((?:\\?<(?![=!])(?<name>[^>]+)>|(?!\\?)))|\\\\?./gsu,n=new Map,r=0,s=0,o;for(;o=e.exec(t);){let{0:a,groups:{capture:i,name:l}}=o;a==="["?r++:r?a==="]"&&r--:i&&(s++,l&&n.set(s,l))}return n}function ao(t,e){let n=ec(t,e);return n.options?new Ql(n.pattern,n.flags,n.options):new RegExp(n.pattern,n.flags)}function ec(t,e){let n=Qs(e),r=Pt(t,{flags:n.flags,normalizeUnknownPropertyNames:!0,rules:{captureGroup:n.rules.captureGroup,singleline:n.rules.singleline},skipBackrefValidation:n.rules.allowOrphanBackrefs,unicodePropertyMap:Bn}),s=Il(r,{accuracy:n.accuracy,asciiWordBoundaries:n.rules.asciiWordBoundaries,avoidSubclass:n.avoidSubclass,bestEffortTarget:n.target}),o=Dl(s,n),a=Ws(o.pattern,{captureTransfers:o._captureTransfers,hiddenCaptures:o._hiddenCaptures,mode:"external"}),i=Rn(a.pattern),l=In(i.pattern,{captureTransfers:a.captureTransfers,hiddenCaptures:a.hiddenCaptures}),c={pattern:l.pattern,flags:`${n.hasIndices?"d":""}${n.global?"g":""}${o.flags}${o.options.disable.v?"u":"v"}`};if(n.avoidSubclass){if(n.lazyCompileLength!==1/0)throw new Error("Lazy compilation requires subclass")}else{let u=l.hiddenCaptures.sort((f,C)=>f-C),h=Array.from(l.captureTransfers),p=s._strategy,d=c.pattern.length>=n.lazyCompileLength;(u.length||h.length||p||d)&&(c.options={...u.length&&{hiddenCaptures:u},...h.length&&{transfers:h},...p&&{strategy:p},...d&&{lazyCompile:d}})}return c}function io(t,e){return ao(t,{global:!0,hasIndices:!0,lazyCompileLength:3e3,rules:{allowOrphanBackrefs:!0,asciiWordBoundaries:!0,captureGroup:!0,recursionLimit:5,singleline:!0},...e})}function Fn(t={}){let e=Object.assign({target:"auto",cache:new Map},t);return e.regexConstructor||(e.regexConstructor=n=>io(n,{target:e.target})),{createScanner(n){return new ds(n,e)},createString(n){return{content:n}}}}function Un(t){return t.split(/\\r\\n|\\r|\\n/).map(e=>[{content:e,col:0}])}var jn={name:"css-variables",type:"dark",fg:"var(--shiki-foreground)",bg:"var(--shiki-background)",settings:[{scope:["meta.embedded","meta.template.expression"],settings:{foreground:"var(--shiki-foreground)"}},{scope:["comment","punctuation.definition.comment"],settings:{foreground:"var(--shiki-token-comment)",fontStyle:"italic"}},{scope:["string","string.quoted","string.template","string.other.link"],settings:{foreground:"var(--shiki-token-string)"}},{scope:["string.regexp"],settings:{foreground:"var(--shiki-token-string-expression)"}},{scope:["constant.numeric"],settings:{foreground:"var(--shiki-token-constant)"}},{scope:["constant.language"],settings:{foreground:"var(--shiki-token-keyword)"}},{scope:["constant.character","constant.character.escape"],settings:{foreground:"var(--shiki-token-string-expression)"}},{scope:["constant.other"],settings:{foreground:"var(--shiki-token-constant)"}},{scope:["variable"],settings:{foreground:"var(--shiki-token-variable)"}},{scope:["variable.language"],settings:{foreground:"var(--shiki-token-language-variable)"}},{scope:["variable.parameter"],settings:{foreground:"var(--shiki-token-parameter)"}},{scope:["variable.other.constant"],settings:{foreground:"var(--shiki-token-constant-variable)"}},{scope:["variable.other.property","support.variable.property"],settings:{foreground:"var(--shiki-token-property)"}},{scope:["keyword","keyword.control","keyword.operator.new","keyword.operator.expression","keyword.operator.logical","keyword.operator.delete","storage","storage.type","storage.modifier"],settings:{foreground:"var(--shiki-token-keyword)"}},{scope:["entity.name.function","support.function"],settings:{foreground:"var(--shiki-token-function)"}},{scope:["entity.name.type","support.type","entity.name.type.class"],settings:{foreground:"var(--shiki-token-type)"}},{scope:["entity.name.class","support.class"],settings:{foreground:"var(--shiki-token-class)"}},{scope:["entity.name.tag","support.class.component","punctuation.definition.tag"],settings:{foreground:"var(--shiki-token-tag)"}},{scope:["entity.other.attribute-name"],settings:{foreground:"var(--shiki-token-attribute)"}},{scope:["entity.name.section"],settings:{foreground:"var(--shiki-token-keyword)"}},{scope:["entity.name.namespace","entity.name.module","entity.name.scope-resolution"],settings:{foreground:"var(--shiki-token-type)"}},{scope:["entity.other.inherited-class"],settings:{foreground:"var(--shiki-token-class)"}},{scope:["support.type.property-name","meta.object-literal.key"],settings:{foreground:"var(--shiki-token-property)"}},{scope:["support.constant"],settings:{foreground:"var(--shiki-token-constant)"}},{scope:["support.variable"],settings:{foreground:"var(--shiki-token-variable)"}},{scope:["punctuation","meta.brace","meta.delimiter","keyword.operator","keyword.operator.assignment"],settings:{foreground:"var(--shiki-token-punctuation)"}},{scope:["punctuation.definition.template-expression.begin","punctuation.definition.template-expression.end","punctuation.section.embedded"],settings:{foreground:"var(--shiki-token-keyword)"}},{scope:["markup.heading"],settings:{foreground:"var(--shiki-token-keyword)",fontStyle:"bold"}},{scope:["markup.bold"],settings:{fontStyle:"bold"}},{scope:["markup.italic"],settings:{fontStyle:"italic"}},{scope:["markup.strikethrough"],settings:{fontStyle:"strikethrough"}},{scope:["markup.inline.raw"],settings:{foreground:"var(--shiki-token-string)"}},{scope:["markup.underline.link"],settings:{foreground:"var(--shiki-token-link)"}},{scope:["markup.inserted"],settings:{foreground:"var(--shiki-token-constant)"}},{scope:["markup.deleted"],settings:{foreground:"var(--shiki-token-string)"}},{scope:["markup.changed"],settings:{foreground:"var(--shiki-token-keyword)"}},{scope:["markup.quote"],settings:{foreground:"var(--shiki-token-comment)"}}]};var tc={ts:"typescript",cts:"typescript",mts:"typescript",js:"javascript",cjs:"javascript",mjs:"javascript",py:"python",rs:"rust",md:"markdown",bash:"shellscript",sh:"shellscript",shell:"shellscript",zsh:"shellscript",yml:"yaml","c++":"cpp","c#":"csharp",cs:"csharp","f#":"fsharp",fs:"fsharp",kt:"kotlin",kts:"kotlin",rb:"ruby",docker:"dockerfile",ex:"elixir",exs:"elixir",erl:"erlang",hs:"haskell",ml:"ocaml",clj:"clojure","common-lisp":"lisp",tf:"terraform",tfvars:"terraform",protobuf:"proto",regex:"regexp",gql:"graphql",properties:"ini",jl:"julia",objc:"objective-c",make:"makefile",tex:"latex",ps:"powershell",ps1:"powershell",pwsh:"powershell"};function lo(t){let e=t.toLowerCase().trim();return tc[e]??e}function nc(t,e){let n=lo(e);return t.getLoadedLanguages().includes(n)}function co(t,e){let n=lo(e);return nc(t,n)?n:"text"}var zn=2e4,rc=2e5,sc={javascript:2500,jsx:2500,tsx:2500,java:7500,cpp:7500,csharp:2500};function oc(t){let e=sc[t];return e===void 0?zn:Math.min(e,zn)}function ac(t){let e=0,n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);(s===10||s===13)&&(r-n>e&&(e=r-n),n=r+1)}return t.length-n>e&&(e=t.length-n),e}function ic(t){let e=0;return t.map(n=>{let r={content:n.content,color:n.color,fontStyle:n.fontStyle,col:e};return e+=n.content.length,r})}function uo(t,e,n){if(e.length>rc||ac(e)>zn)return Un(e);let r=co(t,n);try{return t.codeToTokens(e,{lang:r,theme:"css-variables",tokenizeMaxLineLength:oc(r)}).tokens.map(ic)}catch{return Un(e)}}function lc(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/\'/g,"&#039;")}function cc(t){return`<pre class="shiki"><code><span class="line"><span>${lc(t)}</span></span></code></pre>`}function Wn(t,e,n){let r=co(t,n);try{return t.codeToHtml(e,{lang:r,theme:"css-variables"})}catch{return cc(e)}}var Dt=fs({themes:[jn],langs:[],engine:Fn()});function Ft(t){self.postMessage(t)}self.onmessage=t=>{let e=t.data;try{switch(e.type){case"loadGrammar":{Dt.loadLanguageSync(e.grammar);break}case"tokenize":{let n=Wn(Dt,e.code,e.lang);Ft({type:"tokenized",id:e.id,html:n});break}case"tokenizeLines":{let n=e.lines.map(r=>Wn(Dt,r,e.lang));Ft({type:"tokenizedLines",id:e.id,htmlLines:n});break}case"tokenizeStructured":{let n=uo(Dt,e.code,e.lang);Ft({type:"tokenizedStructured",id:e.id,tokens:n});break}default:{let n=e}}}catch(n){"id"in e?Ft({type:"error",id:e.id,message:n instanceof Error?n.message:String(n)}):console.error("Shiki worker rejected a grammar:",n)}};\n',
  zc: string = "__SHIKI_WORKER_CODE_PLACEHOLDER__",
  bn: any = Wc;
let ot: any = null,
  at: any = null,
  Er: any = !1;
function qc(this: any): any {
  if (Er) return at;
  Er = !0;
  try {
    const t: any = (globalThis as any).trustedTypes;
    t?.createPolicy && (at = ((t as any).createPolicy as any)("shikiWorkerFactory", {
      createScriptURL: (e: any): any => e
    }));
  } catch {
    at = null;
  }
  return at;
}
function Hc(this: any): any {
  if ((ot as any) !== (null as any)) return ot;
  try {
    const t: any = new (Blob as any)([bn], {
      type: "application/javascript"
    });
    return ot = ((URL as any).createObjectURL as any)(t), ot;
  } catch (t: any) {
    return ((console as any).error as any)("[@anysphere/ui] Failed to create Shiki worker blob URL:", t), null;
  }
}
function Vc(this: any): any {
  const t: any = (Hc as any)();
  return t ? (): any => {
    try {
      const e: any = (qc as any)(),
        n: any = e ? ((e as any).createScriptURL as any)(t) : t;
      return new (Worker as any)(n, {
        type: "module"
      });
    } catch (e: any) {
      throw new (Error as any)(`[@anysphere/ui] Failed to create Shiki worker: ${e instanceof Error ? (e as any).message : (String as any)(e)}`);
    }
  } : null;
}
function St(this: any): any {
  return !!bn && (bn as any) !== (zc as any);
}
let Jt: any;
function Xc(this: any): any {
  return (Jt as any) === (void 0 as any) && (Jt = (Vc as any)()), Jt;
}
const Kc: number = 1e4,
  Qc: number = 3e4,
  Zc: any = {
    kind: "supported"
  };
function zs(this: any, t: any): any {
  return (St as any)() ? ((t as any).length as any) > (Qc as any) ? {
    kind: "unsupported",
    reason: "code-over-limit"
  } : Zc : {
    kind: "unsupported",
    reason: "worker-unavailable"
  };
}
class Yc {
  declare onError: any;
  declare onIdle: any;
  declare worker: any;
  declare deadline: any;
  declare _disposed: any;
  declare _busy: any;
  declare tokenizedLanguages: any;
  declare grammars: any;
  declare pending: any;
  [key: string]: any;
  constructor(e: any, n: any) {
    (this as any).pending = new (Map as any)(), (this as any).grammars = new (Set as any)(), (this as any).tokenizedLanguages = new (Set as any)(), (this as any)._busy = !1, (this as any)._disposed = !1, (this as any).deadline = null, (this as any).worker = e, (this as any).onIdle = (n as any).onIdle, (this as any).onError = (n as any).onError, ((this as any).worker as any).onmessage = (r: any): any => {
      ((this as any).handleMessage as any)((r as any).data);
    }, ((this as any).worker as any).onerror = (r: any): any => {
      ((console as any).error as any)("Shiki worker error:", r), ((this as any).rejectAll as any)(new (Error as any)("Worker error")), ((this as any).onError as any)(this);
    };
  }
  get busy(): any {
    return (this as any)._busy;
  }
  hasTokenized(e: any): any {
    return (((this as any).tokenizedLanguages as any).has as any)(e);
  }
  dispatch({
    request: e,
    ...n
  }: any): any {
    (this as any)._busy = !0, (((this as any).pending as any).set as any)((e as any).id, n), ((this as any).mirrorLoadedGrammars as any)(), (((this as any).worker as any).postMessage as any)(e), (this as any).deadline = (setTimeout as any)((): any => {
      (this as any).deadline = null, ((this as any).rejectAll as any)(new (Error as any)("Shiki worker unresponsive")), ((this as any).onError as any)(this);
    }, Kc);
  }
  mirrorLoadedGrammars(): any {
    for (const e of (co as any)()) {
      if ((((this as any).grammars as any).has as any)(e)) continue;
      const n: any = (kn as any)(e);
      if ((n as any) === (void 0 as any)) continue;
      (((this as any).grammars as any).add as any)(e);
      const r: any = {
        type: "loadGrammar",
        grammar: n
      };
      (((this as any).worker as any).postMessage as any)(r);
    }
  }
  dispose(): any {
    (this as any)._disposed || ((this as any)._disposed = !0, ((this as any).rejectAll as any)(new (Error as any)("Worker disposed")), (((this as any).worker as any).terminate as any)());
  }
  rejectAll(e: any): any {
    ((this as any).clearDeadline as any)();
    for (const [, n] of (this as any).pending) ((n as any).reject as any)(e);
    (((this as any).pending as any).clear as any)(), (this as any)._busy = !1;
  }
  clearDeadline(): any {
    ((this as any).deadline as any) !== (null as any) && ((clearTimeout as any)((this as any).deadline), (this as any).deadline = null);
  }
  handleMessage(e: any): any {
    if (!(this as any)._disposed) switch ((e as any).type) {
      case "tokenized":
        ((this as any).resolvePending as any)((e as any).id, (e as any).html);
        break;
      case "tokenizedLines":
        ((this as any).resolvePending as any)((e as any).id, (e as any).htmlLines);
        break;
      case "tokenizedStructured":
        ((this as any).resolvePending as any)((e as any).id, (e as any).tokens);
        break;
      case "error":
        {
          const n: any = (((this as any).pending as any).get as any)((e as any).id);
          n && (((n as any).reject as any)(new (Error as any)((e as any).message)), (((this as any).pending as any).delete as any)((e as any).id)), ((this as any).markIdle as any)();
          break;
        }
    }
  }
  resolvePending(e: any, n: any): any {
    const r: any = (((this as any).pending as any).get as any)(e);
    r && ((((this as any).tokenizedLanguages as any).add as any)((r as any).language), ((r as any).resolve as any)(n), (((this as any).pending as any).delete as any)(e)), ((this as any).markIdle as any)();
  }
  markIdle(): any {
    ((this as any).clearDeadline as any)(), (this as any)._busy = !1, ((this as any).onIdle as any)();
  }
}
class Jc {
  declare maxWorkers: any;
  declare disposed: any;
  declare requestIdCounter: any;
  declare requestQueue: any;
  declare workers: any;
  [key: string]: any;
  constructor(e: any = {}) {
    (this as any).workers = [], (this as any).requestQueue = [], (this as any).requestIdCounter = 0, (this as any).disposed = !1, (this as any).maxWorkers = (e as any).maxWorkers ?? ((Math as any).min as any)((navigator as any).hardwareConcurrency ?? 4, 2), ((this as any).initFirstWorker as any)();
  }
  initFirstWorker(): any {
    if (!(St as any)()) return;
    const e: any = ((this as any).createManagedWorker as any)();
    e && (((this as any).workers as any).push as any)(e);
  }
  createManagedWorker(): any {
    const e: any = (Xc as any)();
    if (!e) return null;
    const n: any = (e as any)();
    return new (Yc as any)(n, {
      onIdle: (): any => ((this as any).processQueue as any)(),
      onError: (r: any): any => ((this as any).handleManagedWorkerError as any)(r)
    });
  }
  handleManagedWorkerError(e: any): any {
    const n: any = (((this as any).workers as any).indexOf as any)(e);
    (n as any) !== (-1 as any) && (((this as any).workers as any).splice as any)(n, 1), ((e as any).dispose as any)(), ((this as any).processQueue as any)();
  }
  workerFor(e: any): any {
    const n: any = (((this as any).workers as any).filter as any)((s: any): any => ((s as any).hasTokenized as any)(e));
    if (((n as any).length as any) > (0 as any)) return ((n as any).find as any)((s: any): any => !(s as any).busy) ?? null;
    const r: any = (((this as any).workers as any).find as any)((s: any): any => !(s as any).busy);
    if (r) return r;
    if ((((this as any).workers as any).length as any) < ((this as any).maxWorkers as any)) {
      const s: any = ((this as any).createManagedWorker as any)();
      if (s) return (((this as any).workers as any).push as any)(s), s;
    }
    return null;
  }
  processQueue(): any {
    if ((this as any).disposed) return;
    const e: any = [];
    for (const n of (this as any).requestQueue) {
      const r: any = ((this as any).workerFor as any)((n as any).language);
      r ? ((r as any).dispatch as any)(n) : ((e as any).push as any)(n);
    }
    (this as any).requestQueue = e;
  }
  get available(): any {
    return (St as any)();
  }
  get workerCount(): any {
    return ((this as any).workers as any).length;
  }
  async enqueue(e: any, n: any): Promise<any> {
    if (await (Cn as any)(e), (this as any).disposed) throw new (Error as any)("Pool disposed");
    return new (Promise as any)((r: any, s: any): any => {
      (((this as any).requestQueue as any).push as any)({
        request: (n as any)(++(this as any).requestIdCounter),
        language: (Se as any)(e) ?? e,
        resolve: (o: any): any => (r as any)(o),
        reject: s
      }), ((this as any).processQueue as any)();
    });
  }
  async tokenize(e: any, n: any): Promise<any> {
    if ((this as any).disposed) throw new (Error as any)("Pool disposed");
    return (this as any).available ? ((this as any).enqueue as any)(n, (r: any): any => ({
      type: "tokenize",
      id: r,
      code: e,
      lang: n
    })) : (Ar as any)(e);
  }
  async tokenizeLines(e: any, n: any): Promise<any> {
    if ((this as any).disposed) throw new (Error as any)("Pool disposed");
    return (this as any).available ? ((this as any).enqueue as any)(n, (r: any): any => ({
      type: "tokenizeLines",
      id: r,
      lines: e,
      lang: n
    })) : ((e as any).map as any)(Ar);
  }
  async tokenizeStructured(e: any, n: any): Promise<any> {
    if ((this as any).disposed) throw new (Error as any)("Pool disposed");
    return (((zs as any)(e) as any).kind as any) === ("unsupported" as any) ? (De as any)(e) : ((this as any).enqueue as any)(n, (r: any): any => ({
      type: "tokenizeStructured",
      id: r,
      code: e,
      lang: n
    }));
  }
  dispose(): any {
    (this as any).disposed = !0;
    for (const {
      reject: e
    } of (this as any).requestQueue) (e as any)(new (Error as any)("Pool disposed"));
    (this as any).requestQueue = [];
    for (const e of (this as any).workers) ((e as any).dispose as any)();
    (this as any).workers = [];
  }
}
let en: any = null;
function eu(this: any): any {
  return en || (en = new (Jc as any)()), en;
}
function tu(this: any, t: any): any {
  return ((t as any).split as any)(/\r?\n/);
}
function nu(this: any, t: any, e: any, n: any): any {
  const r: any = (t as any).nextLineIndex;
  let s: any = r,
    o: any = 0;
  for (; (s as any) < (e as any);) {
    const a: any = ((t as any).lines as any)[s]?.length ?? 0,
      i: any = (s as any) === (r as any) ? a : (a as any) + (1 as any);
    if ((s as any) > (r as any) && ((o as any) + (i as any) as any) > (n as any)) break;
    o += i, s++;
  }
  return s;
}
function Ir(this: any, t: any, e: any): any {
  return `${t}\0${e}`;
}
const ru: number = 8;
class su {
  declare latest: any;
  declare tokenizeChunk: any;
  declare maxCachedTexts: any;
  declare cache: any;
  [key: string]: any;
  constructor(e: any) {
    (this as any).cache = new (Map as any)(), (this as any).maxCachedTexts = ((Math as any).max as any)(1, e?.maxCachedTexts ?? ru), (this as any).tokenizeChunk = e?.tokenizeChunk ?? Uc;
  }
  tokenizeLines(e: any, n: any, r: any, s: any): any {
    const o: any = new (Map as any)();
    if (((r as any).length as any) === (0 as any)) return o;
    const a: any = ((this as any).getState as any)(e, n);
    let i: any = 0;
    for (const l of r) (l as any) > (i as any) && (i = l);
    ((this as any).advanceTo as any)(e, a, i, s?.budgetChars);
    for (const l of r) {
      const c: any = (l as any) - (1 as any);
      if ((c as any) < (0 as any)) continue;
      const u: any = ((a as any).tokensByLine as any)[c];
      ((o as any).set as any)(l, u ?? [{
        content: ((a as any).lines as any)[c] ?? "",
        col: 0
      }]);
    }
    return o;
  }
  advanceTo(e: any, n: any, r: any, s: any): any {
    const o: any = ((Math as any).min as any)(r, ((n as any).lines as any).length);
    let a: any = s ?? (Number as any).POSITIVE_INFINITY,
      i: any = !1;
    for (; ((n as any).nextLineIndex as any) < (o as any) && (a as any) > (0 as any);) {
      const l: any = (nu as any)(n, o, ((Math as any).min as any)(a, uo)),
        c: any = (((((n as any).lines as any).slice as any)((n as any).nextLineIndex, l) as any).join as any)(`
`);
      if (i && ((c as any).length as any) > (a as any)) return;
      const u: any = ((this as any).tokenizeChunk as any)(c, e, (n as any).grammarState);
      if ((u as any) === (void 0 as any)) return;
      a -= (c as any).length, i = !0;
      const {
        tokens: h,
        grammarState: d
      }: any = u;
      for (let p: any = 0; (p as any) < ((h as any).length as any); p++) ((n as any).tokensByLine as any)[((n as any).nextLineIndex as any) + (p as any)] = (h as any)[p];
      if ((d as any) !== (void 0 as any) && ((n as any).grammarState = d), ((h as any).length as any) === (0 as any)) break;
      (n as any).nextLineIndex += (h as any).length;
    }
  }
  tokenizedLineCount(e: any, n: any): any {
    const r: any = ((this as any).latestState as any)(e, n);
    return (r as any) !== (void 0 as any) ? (r as any).nextLineIndex : (((this as any).cache as any).get as any)((Ir as any)(e, n))?.nextLineIndex ?? 0;
  }
  latestState(e: any, n: any): any {
    const r: any = (this as any).latest;
    return (r as any) !== (void 0 as any) && ((r as any).text as any) === (n as any) && ((r as any).language as any) === (e as any) ? (r as any).state : void 0;
  }
  getState(e: any, n: any): any {
    const r: any = ((this as any).latestState as any)(e, n);
    if ((r as any) !== (void 0 as any)) return r;
    const s: any = (Ir as any)(e, n),
      o: any = (((this as any).cache as any).get as any)(s);
    if (o) return (((this as any).cache as any).delete as any)(s), (((this as any).cache as any).set as any)(s, o), (this as any).latest = {
      language: e,
      text: n,
      state: o
    }, o;
    const a: any = (tu as any)(n),
      i: any = {
        lines: a,
        tokensByLine: new (Array as any)((a as any).length),
        grammarState: void 0,
        nextLineIndex: 0
      };
    for ((((this as any).cache as any).set as any)(s, i), (this as any).latest = {
      language: e,
      text: n,
      state: i
    }; (((this as any).cache as any).size as any) > ((this as any).maxCachedTexts as any);) {
      const l: any = ((((((this as any).cache as any).keys as any)() as any).next as any)() as any).value;
      if ((l as any) === (void 0 as any)) break;
      (((this as any).cache as any).delete as any)(l);
    }
    return i;
  }
}
const ou: any = {
    support: zs,
    tokenize: (t: any, e: any): any => (((eu as any)() as any).tokenizeStructured as any)(t, e)
  },
  au: any = {
    languageStatus(t: any): any {
      const e: any = (Se as any)(t);
      return (e as any) === (void 0 as any) ? "no-grammar" : ((kn as any)(e) as any) === (void 0 as any) ? "unloaded" : "loaded";
    },
    loadLanguage: Cn,
    onDidLoadLanguage: fo,
    tokenizeSync: Ws,
    createIncrementalTokenizer: (t: any): any => new (su as any)(t),
    warmup: {
      isWarm: Dc,
      warm: jc
    },
    get offThread(): any {
      return (St as any)() ? ou : void 0;
    },
    cache: {
      read: po,
      write: ho
    }
  },
  iu: any = ((S as any).createContext as any)(au);
function lu(this: any): any {
  return ((S as any).useContext as any)(iu);
}
function cu(this: any, t: any, e: any, n: any = !0): any {
  const r: any = ((S as any).useCallback as any)((i: any): any => {
      if (!n) return (): any => {};
      const l: any = ((t as any).onDidLoadLanguage as any)(i);
      return ((t as any).loadLanguage as any)(e), l;
    }, [t, e, n]),
    s: any = ((S as any).useCallback as any)((): any => n && (((t as any).languageStatus as any)(e) as any) !== ("unloaded" as any), [t, e, n]),
    o: any = ((S as any).useCallback as any)((): any => n && (((t as any).languageStatus as any)(e) as any) === ("no-grammar" as any), [t, e, n]),
    a: any = ((S as any).useSyncExternalStore as any)(r, s, o);
  return ((S as any).useMemo as any)((): any => a ? (i: any): any => ((t as any).tokenizeSync as any)(i, e) : De, [a, t, e]);
}
const ae: any = {
    kind: "inline"
  },
  Nr: any = {
    kind: "worker",
    debounceMs: 0,
    onRefusal: "inline"
  };
function uu(this: any, {
  tokenization: t,
  sync: e,
  asyncDebounceMs: n
}: any): any {
  return t || ((e as any) === (!1 as any) ? {
    kind: "worker",
    debounceMs: n ?? 0,
    onRefusal: "plain"
  } : ae);
}
function xt(this: any, t: any, e: any): any {
  return (t as any) !== (null as any) && ((t as any).code as any) === ((e as any).code as any) && ((t as any).language as any) === ((e as any).language as any);
}
const Rr: any = xt;
function hu(this: any, {
  requested: t,
  support: e,
  rejected: n,
  coldRequest: r,
  tokenizerWarm: s,
  cached: o,
  request: a
}: any): any {
  if (((t as any).kind as any) === ("inline" as any)) return ae;
  if (((t as any).kind as any) === ("inline-when-warm" as any)) {
    const i: any = ((t as any).scheduleWarmup as any) === (null as any);
    return (o as any) !== (void 0 as any) ? {
      kind: "cached",
      tokens: o
    } : (Rr as any)(n, a) ? ae : (xt as any)(r, a) ? Nr : ((e as any).kind as any) === ("unsupported" as any) || s && !i ? ae : Nr;
  }
  return ((e as any).kind as any) === ("unsupported" as any) && ((e as any).reason as any) === ("worker-unavailable" as any) ? ae : ((t as any).onRefusal as any) === ("plain" as any) ? t : ((e as any).kind as any) === ("unsupported" as any) || (Rr as any)(n, a) ? ae : t;
}
const du: number = 100,
  $r: number = 8,
  pu: number = 8,
  ht: any = {
    start: 0,
    end: 0
  };
function Lr(this: any, t: any, e: any, n: any): any {
  return ((Math as any).min as any)(((Math as any).max as any)(t, e), n);
}
function fu(this: any, {
  lineCount: t,
  linePitchPx: e,
  blockTopPx: n,
  viewportTopPx: r,
  viewportBottomPx: s
}: any): any {
  if (!((e as any) > (0 as any)) || (t as any) <= (0 as any)) return {
    start: 0,
    end: ((Math as any).max as any)(t, 0)
  };
  const o: any = ((Math as any).floor as any)(((r as any) - (n as any) as any) / (e as any)),
    a: any = ((Math as any).ceil as any)(((s as any) - (n as any) as any) / (e as any)),
    i: any = pu,
    l: any = (Lr as any)((((Math as any).floor as any)(((o as any) - ($r as any) as any) / (i as any)) as any) * (i as any), 0, t),
    c: any = (Lr as any)((((Math as any).ceil as any)(((a as any) + ($r as any) as any) / (i as any)) as any) * (i as any), 0, t);
  return (l as any) < (c as any) ? {
    start: l,
    end: c
  } : ht;
}
function gu(this: any, t: any, e: any): any {
  return ((t as any).start as any) === ((e as any).start as any) && ((t as any).end as any) === ((e as any).end as any);
}
const mu: number = 400,
  ie: any = [];
let Ce: any = null;
function yu(this: any, t: any): any {
  if ((typeof document as any) < ("u" as any) && ((document as any).visibilityState as any) === ("hidden" as any) || (typeof requestAnimationFrame as any) != ("function" as any)) {
    const r: any = (setTimeout as any)(t, 0);
    return (): any => (clearTimeout as any)(r);
  }
  const n: any = (requestAnimationFrame as any)((): any => (t as any)());
  return (): any => (cancelAnimationFrame as any)(n);
}
function qs(this: any, t: any): any {
  let e: any = !1,
    n: any = (): any => {};
  const r: any = (): any => {
    n = (yu as any)((): any => {
      e || (t as any)() && (r as any)();
    });
  };
  return (r as any)(), (): any => {
    e = !0, (n as any)();
  };
}
function bu(this: any, t: any): any {
  let e: any = mu;
  const n: any = [];
  for (; ((ie as any).length as any) > (0 as any);) {
    const s: any = (ie as any)[0];
    if (((n as any).length as any) > (0 as any) && ((s as any).lines as any) > (e as any)) break;
    ((ie as any).shift as any)(), e -= (s as any).lines, ((n as any).push as any)(s);
  }
  ((Dr as any).flushSync as any)((): any => {
    for (const s of n) ((s as any).apply as any)();
  });
  const r: any = ((ie as any).length as any) > (0 as any);
  return r || ((t as any).drained = !0, (Ce as any) === (t as any) && (Ce = null)), r;
}
function wu(this: any, t: any): any {
  const e: any = {
    cancel: (): any => {},
    drained: !1
  };
  Ce = e;
  const n: any = (t as any)((): any => (bu as any)(e));
  (e as any).drained || ((e as any).cancel = n);
}
function ku(this: any, t: any, e: any = qs): any {
  return ((ie as any).push as any)(t), (Ce as any) === (null as any) && (wu as any)(e), (): any => {
    const n: any = ((ie as any).indexOf as any)(t);
    (n as any) < (0 as any) || (((ie as any).splice as any)(n, 1), ((ie as any).length as any) === (0 as any) && (Ce as any) !== (null as any) && (((Ce as any).cancel as any)(), Ce = null));
  };
}
function Cu(this: any, {
  contentRef: t,
  viewport: e,
  lineCount: n,
  enabled: r
}: any): any {
  const [s, o]: any = ((S as any).useState as any)(ht);
  if (((S as any).useLayoutEffect as any)((): any => {
    if (!r || (e as any) == (null as any)) return;
    const l: any = (t as any).current;
    if ((l as any) == (null as any)) return;
    const c: any = (): any => {
        const p: any = ((l as any).getBoundingClientRect as any)(),
          f: any = ((e as any).getBoundingClientRect as any)();
        return (fu as any)({
          lineCount: n,
          linePitchPx: ((p as any).height as any) / (n as any),
          blockTopPx: (p as any).top,
          viewportTopPx: (f as any).top,
          viewportBottomPx: (f as any).bottom
        });
      },
      u: any = (p: any): any => {
        (o as any)((f: any): any => (gu as any)(f, p) ? f : p);
      };
    (u as any)((c as any)());
    const h: any = (): any => {
      ((Dr as any).flushSync as any)((): any => (u as any)((c as any)()));
    };
    ((e as any).addEventListener as any)("scroll", h, {
      passive: !0
    });
    const d: any = (typeof ResizeObserver as any) == ("function" as any) ? new (ResizeObserver as any)(h) : null;
    d?.observe(e);
    for (const p of (e as any).children) d?.observe(p);
    return (): any => {
      ((e as any).removeEventListener as any)("scroll", h), d?.disconnect();
    };
  }, [t, r, e, n]), !r) return {
    start: 0,
    end: n
  };
  if ((e as any) == (null as any)) return ht;
  const a: any = ((Math as any).min as any)((s as any).start, n),
    i: any = ((Math as any).min as any)((s as any).end, n);
  return (a as any) < (i as any) ? {
    start: a,
    end: i
  } : ht;
}
const _u: any = {
    base: {
      kGuDYH: "ui-1wm8ruf",
      k63SB2: "ui-1lfj9qp",
      kLWn49: "ui-1ja60sm",
      kWkggS: "ui-1ua6jya",
      ktR8K2: "ui-1m21r4p",
      kKi2Bq: "ui-cj37ws",
      kMv6JI: "ui-13r5tfd",
      kLKAdn: "ui-uve7l6",
      kwRFfy: "ui-yri2b",
      kGO01o: "ui-1rgtt3y",
      kZCmMZ: "ui-1c1uobl",
      "--shiki-foreground": "ui-o9w7m5",
      "--shiki-background": "ui-17ewauw",
      "--shiki-token-constant": "ui-1vakzcb",
      "--shiki-token-string": "ui-105xmc4",
      "--shiki-token-comment": "ui-1nsav61",
      "--shiki-token-keyword": "ui-1jxofbz",
      "--shiki-token-parameter": "ui-947h55",
      "--shiki-token-function": "ui-ta7kcf",
      "--shiki-token-string-expression": "ui-1iagb1a",
      "--shiki-token-punctuation": "ui-ez8t0j",
      "--shiki-token-link": "ui-i2wo5x",
      "--shiki-token-tag": "ui-1iq2d2k",
      "--shiki-token-attribute": "ui-1qoclnz",
      "--shiki-token-property": "ui-k609h7",
      "--shiki-token-type": "ui-1rqnq8e",
      "--shiki-token-variable": "ui-19gwdp1",
      "--shiki-token-class": "ui-1yfyyyg",
      "--shiki-token-language-variable": "ui-1apie5d",
      "--shiki-token-constant-variable": "ui-dcvkk1",
      $$css: !0
    }
  },
  Pr: any = {
    base: {
      k7Eaqz: "ui-1pshirs",
      ktR8K2: "ui-awy1a7",
      $$css: !0
    },
    wordWrap: {
      kzqmXN: "ui-h8yej3",
      k7Eaqz: "ui-euugli",
      ks0D6T: "ui-193iq5w",
      $$css: !0
    }
  },
  Tr: any = {
    base: {
      k1xSpc: "ui-78zum5",
      kAzted: "ui-10fesj9",
      $$css: !0
    },
    highlighted: {
      kWkggS: "ui-ri19xs",
      $$css: !0
    }
  },
  Mr: any = {
    base: {
      k7Eaqz: "ui-1264ykn",
      k9WMMc: "ui-p4054r",
      kwRFfy: "ui-t1q3vd",
      kMwMTN: "ui-4b2ntj",
      kcqcaj: "ui-ss6m8b",
      kGuDYH: "ui-y5h43f",
      kfSwDN: "ui-87ps6o",
      kmuXW: "ui-2lah0s",
      $$css: !0
    },
    highlighted: {
      kMwMTN: "ui-1wd3ewq",
      $$css: !0
    }
  },
  Or: any = {
    base: {
      kUk6DE: "ui-98rzlu",
      khDVqt: "ui-1sdyfia",
      kVQacm: "ui-b3r6kr",
      kg5iWk: "ui-lyipyv",
      kZCmMZ: "ui-1iw6539",
      kMwMTN: "ui-lgbajd",
      kwRFfy: "ui-1fg0g13",
      kVAEAm: "ui-1n2onr6",
      $$css: !0
    },
    wordWrap: {
      k7Eaqz: "ui-euugli",
      khDVqt: "ui-126k92a",
      kVQacm: "ui-1rea2x4",
      kHjlTd: "ui-j0a0fe",
      kg5iWk: "ui-brixnn",
      $$css: !0
    }
  },
  Su: any = {
    base: {
      kVAEAm: "ui-10l6tqk",
      k87sOh: "ui-13vifvy",
      krVfgx: "ui-1ey2m1c",
      kzqmXN: "ui-1i1rx1s",
      kWkggS: "ui-1m4ooaa",
      kfzvcC: "ui-47corl",
      $$css: !0
    }
  };
function xu(this: any): any {
  return (_u as any).base;
}
function vu(this: any, t: any): any {
  return [(Pr as any).base, t ? (Pr as any).wordWrap : null];
}
function Au(this: any, t: any): any {
  return [(Tr as any).base, t ? (Tr as any).highlighted : null];
}
function Eu(this: any, t: any): any {
  return [(Mr as any).base, t ? (Mr as any).highlighted : null];
}
function Iu(this: any, t: any): any {
  return [(Or as any).base, t ? (Or as any).wordWrap : null];
}
function Nu(this: any): any {
  return (Su as any).base;
}
const Gr: any = [],
  Ru: any = {
    kind: "unsupported",
    reason: "worker-unavailable"
  },
  $u: any = (): any => {};
function Lu(this: any, t: any, e: any): any {
  return (t as any).offThread?.support(e) ?? Ru;
}
function Pu(this: any, t: any, e: any): any {
  if (((t as any).length as any) === (0 as any)) return 0;
  const n: any = (t as any)[0];
  if (!(n as any).content) return 0;
  let r: any = 0;
  for (const s of (n as any).content) if ((s as any) === (" " as any)) r++;else if ((s as any) === ("	" as any)) r += e;else break;
  return ((Math as any).floor as any)((r as any) / (e as any));
}
function Tu(this: any, t: any): any {
  return ((t as any).every as any)((e: any): any => !(((e as any).content as any).trim as any)());
}
function wn(this: any, {
  start: t,
  end: e
}: any): any {
  const n: any = [];
  for (let r: any = t; (r as any) < (e as any); r++) ((n as any).push as any)((r as any) + (1 as any));
  return n;
}
const Mu: number = 8,
  Ou: number = 1e3;
function Br(this: any, {
  prefixTokenizer: t,
  language: e,
  code: n,
  targetLineCount: r
}: any): any {
  const s: any = (((performance as any).now as any)() as any) + (Mu as any);
  let o: any = ((t as any).tokenizedLineCount as any)(e, n);
  for (; (o as any) < (r as any);) {
    ((t as any).tokenizeLines as any)(e, n, [r], {
      budgetChars: Ou
    });
    const a: any = ((t as any).tokenizedLineCount as any)(e, n);
    if ((a as any) === (o as any)) return !1;
    if (o = a, (((performance as any).now as any)() as any) >= (s as any)) break;
  }
  return (o as any) < (r as any);
}
function Fr(this: any, {
  prefixTokenizer: t,
  language: e,
  code: n,
  start: r,
  end: s
}: any): any {
  return ((t as any).tokenizeLines as any)(e, n, (wn as any)({
    start: r,
    end: s
  }), {
    budgetChars: 0
  });
}
const Hs: any = ((S as any).memo as any)(function (this: any, {
  tokens: e,
  lineNumber: n,
  showLineNumbers: r,
  isHighlighted: s,
  guides: o,
  tabSize: a,
  wordWrap: i
}: any): any {
  (Hs as any).d = 2031453553;
  const l: any = (it as any)((Au as any)(s)),
    c: any = (it as any)((Eu as any)(s)),
    u: any = (jr as any)({
      rootClass: "ui-default-code__line-content",
      stylexStyles: (Iu as any)(i)
    }),
    h: any = (it as any)((Nu as any)());
  return ((K as any).jsxs as any)("div", {
    className: (l as any).className,
    style: (l as any).style,
    children: [r && ((K as any).jsx as any)("span", {
      className: (c as any).className,
      style: (c as any).style,
      children: n
    }), ((K as any).jsxs as any)("div", {
      className: (u as any).className,
      style: (u as any).style,
      children: [((o as any).map as any)((d: any): any => ((K as any).jsx as any)("span", {
        className: (h as any).className,
        style: {
          ...(h as any).style,
          left: `${(d as any) * (a as any)}ch`
        },
        "aria-hidden": "true"
      }, d)), ((e as any).map as any)((d: any): any => ((K as any).jsx as any)("span", {
        className: (d as any).className,
        style: {
          color: (d as any).color,
          ...(go as any)((d as any).fontStyle)
        },
        children: (d as any).content
      }, (d as any).col))]
    })]
  });
});
function Gu(this: any, {
  code: t,
  language: e = "plaintext",
  startLine: n = 1,
  showLineNumbers: r = !1,
  showIndentGuides: s = !0,
  highlightLines: o,
  tabSize: a = 4,
  className: i,
  style: l,
  tokens: c,
  sync: u,
  asyncDebounceMs: h,
  tokenization: d,
  wordWrap: p = !1,
  loading: f = !1,
  viewport: b
}: any): any {
  (Gu as any).d = 668338647;
  const g: any = (lu as any)(),
    y: any = ((S as any).useRef as any)(null),
    m: any = ((S as any).useMemo as any)((): any => ((g as any).createIncrementalTokenizer as any)({
      maxCachedTexts: 1
    }), [g]),
    [w, _]: any = ((S as any).useState as any)(null),
    C: any = (uu as any)({
      tokenization: d,
      sync: u,
      asyncDebounceMs: h
    }),
    v: any = ((C as any).kind as any) === ("inline-when-warm" as any),
    $: any = ((C as any).kind as any) === ("inline-when-warm" as any) ? (C as any).scheduleWarmup : void 0,
    B: any = ((C as any).kind as any) === ("inline-when-warm" as any) ? (C as any).scheduleApply : void 0,
    ce: any = ((S as any).useRef as any)($),
    ue: any = ((S as any).useRef as any)(B);
  ((S as any).useEffect as any)((): any => {
    (ce as any).current = $, (ue as any).current = B;
  }, [$, B]);
  const H: any = ((S as any).useRef as any)(null),
    T: any = ((S as any).useRef as any)(null);
  ((S as any).useEffect as any)((): any => (): any => {
    (H as any).current?.(), (H as any).current = null, (T as any).current?.dequeue(), (T as any).current = null;
  }, []);
  const [Pe, z]: any = ((S as any).useState as any)(null),
    V: any = {
      code: t,
      language: e
    },
    F: any = (hu as any)({
      requested: C,
      support: (Lu as any)(g, t),
      rejected: w,
      coldRequest: Pe,
      tokenizerWarm: (g as any).warmup?.isWarm(e) ?? !0,
      cached: v ? (g as any).cache?.read(t, e) : void 0,
      request: V
    });
  v && ((F as any).kind as any) === ("worker" as any) && !(xt as any)(Pe, V) && (z as any)(V);
  const Ke: any = !c && !f && ((F as any).kind as any) === ("inline" as any),
    Pt: any = (cu as any)(g, e, Ke),
    Q: any = ((S as any).useMemo as any)((): any => (De as any)(t), [t]),
    he: any = (b as any) !== (void 0 as any) && !p && (((c ?? Q) as any).length as any) >= (du as any),
    Qe: any = ((S as any).useMemo as any)((): any => Ke && !he ? (Pt as any)(t) : null, [Ke, he, t, Pt]),
    Vs: any = ((F as any).kind as any) === ("cached" as any) ? (F as any).tokens : null;
  ((S as any).useEffect as any)((): any => {
    v && (Qe as any) !== (null as any) && (((g as any).languageStatus as any)(e) as any) !== ("unloaded" as any) && (g as any).cache?.write(t, e, Qe);
  }, [v, Qe, t, e, g]);
  const [Xs, Te]: any = ((S as any).useState as any)(Q),
    [Ks, Qs]: any = ((S as any).useState as any)(Q);
  (Q as any) !== (Ks as any) && ((Qs as any)(Q), f ? (Te as any)(Q) : ((F as any).kind as any) === ("worker" as any) ? (Te as any)((x: any): any => ((Q as any).map as any)((L: any, I: any): any => {
    if ((I as any) >= ((x as any).length as any)) return L;
    const D: any = (((((x as any)[I] as any).map as any)((Z: any): any => (Z as any).content) as any).join as any)(""),
      G: any = (L as any)[0]?.content ?? "";
    return (D as any) === (G as any) ? (x as any)[I] : ((D as any).length as any) > (0 as any) && ((G as any).startsWith as any)(D) ? [...(x as any)[I], {
      content: ((G as any).slice as any)((D as any).length),
      col: (D as any).length
    }] : L;
  })) : (Te as any)(Q));
  const Ze: any = ((F as any).kind as any) === ("worker" as any) ? (F as any).debounceMs : null,
    Pn: any = ((F as any).kind as any) === ("worker" as any) && ((F as any).onRefusal as any) === ("inline" as any);
  ((S as any).useEffect as any)((): any => {
    const x: any = (T as any).current;
    (x as any) !== (null as any) && !(xt as any)((x as any).request, {
      code: t,
      language: e
    }) && (((x as any).dequeue as any)(), (T as any).current = null);
    const L: any = (g as any).offThread;
    if (f || c || (Ze as any) === (null as any) || (L as any) === (void 0 as any)) return;
    let I: any = !1;
    const D: any = (): any => {
      ((((((L as any).tokenize as any)(t, e) as any).then as any)((G: any): any => {
        if (v && (g as any).cache?.write(t, e, G), I) return;
        if (!v) {
          (Te as any)(G);
          return;
        }
        (H as any).current?.(), (H as any).current = (g as any).warmup?.warm(t, e, (ce as any).current) ?? $u;
        const Z: any = {
          request: {
            code: t,
            language: e
          },
          dequeue: (): any => {}
        };
        (T as any).current?.dequeue(), (T as any).current = Z, (Z as any).dequeue = (ku as any)({
          lines: (G as any).length,
          apply: (): any => {
            ((T as any).current as any) === (Z as any) && ((T as any).current = null, (Te as any)(G));
          }
        }, (ue as any).current);
      }) as any).catch as any)((): any => {
        !I && Pn && (_ as any)({
          code: t,
          language: e
        });
      });
    };
    if ((Ze as any) > (0 as any)) {
      const G: any = (setTimeout as any)(D, Ze);
      return (): any => {
        I = !0, (clearTimeout as any)(G);
      };
    }
    return (D as any)(), (): any => {
      I = !0;
    };
  }, [f, t, e, g, c, Ze, Pn, v]);
  const Tn: any = c ?? Vs ?? Qe ?? Xs,
    Zs: any = ((S as any).useMemo as any)((): any => new (Set as any)(o), [o]),
    de: any = c ?? Q,
    Ys: any = ((S as any).useMemo as any)((): any => {
      if (!s) return null;
      const x: any = ((de as any).map as any)((I: any): any => (Pu as any)(I, a)),
        L: any = ((de as any).map as any)((I: any): any => (Tu as any)(I));
      return ((de as any).map as any)((I: any, D: any): any => {
        let G: any;
        if (!(L as any)[D]) G = (x as any)[D];else {
          let Z: any = 0;
          for (let Y: any = (D as any) + (1 as any); (Y as any) < ((de as any).length as any); Y++) if (!(L as any)[Y]) {
            Z = (x as any)[Y];
            break;
          }
          let Ye: any = 0;
          for (let Y: any = (D as any) - (1 as any); (Y as any) >= (0 as any); Y--) if (!(L as any)[Y]) {
            Ye = (x as any)[Y];
            break;
          }
          G = ((Math as any).min as any)(Ye, Z);
        }
        return (G as any) > (0 as any) ? ((Array as any).from as any)({
          length: G
        }, (Z: any, Ye: any): any => Ye) : Gr;
      });
    }, [s, de, a]),
    re: any = (Tn as any).length,
    pe: any = (Cu as any)({
      contentRef: y,
      viewport: b,
      lineCount: re,
      enabled: he
    }),
    Mn: any = he && Ke && (Pt as any) !== (De as any),
    {
      start: Me,
      end: fe
    }: any = pe,
    ge: any = ((S as any).useMemo as any)((): any => {
      if (!Mn) return null;
      if (!v) return {
        tokens: ((m as any).tokenizeLines as any)(e, t, (wn as any)({
          start: Me,
          end: fe
        })),
        prefixBehind: !1
      };
      const x: any = (Br as any)({
        prefixTokenizer: m,
        language: e,
        code: t,
        targetLineCount: fe
      });
      return {
        tokens: (Fr as any)({
          prefixTokenizer: m,
          language: e,
          code: t,
          start: Me,
          end: fe
        }),
        prefixBehind: x
      };
    }, [Mn, v, Me, fe, m, e, t]),
    [On, Js]: any = ((S as any).useState as any)(null),
    Gn: any = (ge as any) !== (null as any) && (On?.rendered as any) === (ge as any) ? (On as any).tokens : null,
    Tt: any = Gn ?? ge?.tokens ?? null,
    Bn: any = (ge?.prefixBehind as any) === (!0 as any) && (Gn as any) === (null as any);
  ((S as any).useEffect as any)((): any => (ge as any) === (null as any) || !Bn ? void 0 : (((ue as any).current ?? qs) as any)((): any => (Br as any)({
    prefixTokenizer: m,
    language: e,
    code: t,
    targetLineCount: fe
  }) ? !0 : ((Js as any)({
    rendered: ge,
    tokens: (Fr as any)({
      prefixTokenizer: m,
      language: e,
      code: t,
      start: Me,
      end: fe
    })
  }), !1)), [Bn, ge, m, e, t, Me, fe]), ((S as any).useEffect as any)((): any => {
    if (!v || (Tt as any) === (null as any) || (((m as any).tokenizedLineCount as any)(e, t) as any) < (re as any)) return;
    const x: any = ((m as any).tokenizeLines as any)(e, t, (wn as any)({
      start: 0,
      end: re
    }));
    (g as any).cache?.write(t, e, ((Array as any).from as any)({
      length: re
    }, (L: any, I: any): any => ((x as any).get as any)((I as any) + (1 as any)) ?? []));
  }, [v, Tt, m, e, t, re, g]);
  const eo: any = ((S as any).useMemo as any)((): any => {
      if (!he) return 0;
      let x: any = 0;
      for (const L of de) {
        const I: any = (L as any)[0]?.content.length ?? 0;
        (I as any) > (x as any) && (x = I);
      }
      return x;
    }, [he, de]),
    Mt: any = (oo as any)["--cursor-line-height-base"],
    to: any = `calc(${re} * ${Mt})`,
    Fn: any = (jr as any)({
      rootClass: "ui-default-code",
      stylexStyles: (xu as any)(),
      className: i,
      style: {
        "--ui-default-code-tab-size": (String as any)(a),
        minHeight: to,
        ...l
      }
    }),
    Ot: any = (it as any)((vu as any)(p)),
    no: any = `var(--ui-default-code-line-inset, ${(Gt as any)["--cursor-spacing-2-5"]}) + ${(Gt as any)["--cursor-spacing-2-5"]}`,
    ro: any = r ? ` + 28px + ${(Gt as any)["--cursor-spacing-3"]}` : "",
    so: any = he ? {
      ...(Ot as any).style,
      minWidth: `calc(${eo}ch + ${no}${ro})`
    } : (Ot as any).style,
    Dn: any = [];
  for (let x: any = (pe as any).start; (x as any) < ((pe as any).end as any); x++) {
    const L: any = (n as any) + (x as any);
    ((Dn as any).push as any)(((K as any).jsx as any)(Hs, {
      tokens: Tt?.get((x as any) + (1 as any)) ?? (Tn as any)[x],
      lineNumber: L,
      showLineNumbers: r,
      isHighlighted: ((Zs as any).has as any)(L),
      guides: Ys?.[x] ?? Gr,
      tabSize: a,
      wordWrap: p
    }, L));
  }
  return ((K as any).jsx as any)("div", {
    className: (Fn as any).className,
    style: (Fn as any).style,
    children: ((K as any).jsxs as any)("div", {
      ref: y,
      className: (Ot as any).className,
      style: so,
      children: [((pe as any).start as any) > (0 as any) ? ((K as any).jsx as any)("div", {
        "aria-hidden": "true",
        style: {
          height: `calc(${(pe as any).start} * ${Mt})`
        }
      }) : null, Dn, ((pe as any).end as any) < (re as any) ? ((K as any).jsx as any)("div", {
        "aria-hidden": "true",
        style: {
          height: `calc(${(re as any) - ((pe as any).end as any)} * ${Mt})`
        }
      }) : null]
    })
  });
}
export { Gu as DefaultCode, vu as defaultCodeContentStyleForProps, Nu as defaultCodeIndentGuideStyleForProps, Iu as defaultCodeLineContentStyleForProps, Eu as defaultCodeLineNumberStyleForProps, Au as defaultCodeLineStyleForProps, xu as defaultCodeRootStyleForProps };
//# debugId=980f256c-d942-4867-9084-000843a837eb
