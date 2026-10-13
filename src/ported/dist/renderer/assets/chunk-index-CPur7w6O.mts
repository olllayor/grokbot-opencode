declare var ClipboardEvent: any;
declare var DataTransfer: any;
declare var DragEvent: any;
declare var HTMLAnchorElement: any;
declare var HTMLElement: any;
declare var KeyboardEvent: any;
declare var clearTimeout: any;
declare var console: any;
declare var document: any;
declare var getComputedStyle: any;
declare var getSelection: any;
declare var global: any;
declare var innerHeight: any;
declare var key: any;
declare var navigator: any;
declare var os: any;
declare var pageXOffset: any;
declare var pageYOffset: any;
declare var requestAnimationFrame: any;
declare var self: any;
declare var setTimeout: any;
declare var window: any;
var es: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "d8dbd570-ddc5-4452-b69d-1377d9d89f0c", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-d8dbd570-ddc5-4452-b69d-1377d9d89f0c");
  } catch (e: any) {}
} as any)();
function Y(this: any, n: any): any {
  (this as any).content = n;
}
(Y as any).prototype = {
  constructor: Y,
  find: function (this: any, n: any): any {
    for (var e: any = 0; (e as any) < (((this as any).content as any).length as any); e += 2) if ((((this as any).content as any)[e] as any) === (n as any)) return e;
    return -1;
  },
  get: function (this: any, n: any): any {
    var e: any = ((this as any).find as any)(n);
    return (e as any) == (-1 as any) ? void 0 : ((this as any).content as any)[(e as any) + (1 as any)];
  },
  update: function (this: any, n: any, e: any, t: any): any {
    var r: any = t && (t as any) != (n as any) ? ((this as any).remove as any)(t) : this,
      s: any = ((r as any).find as any)(n),
      i: any = (((r as any).content as any).slice as any)();
    return (s as any) == (-1 as any) ? ((i as any).push as any)(t || n, e) : ((i as any)[(s as any) + (1 as any)] = e, t && ((i as any)[s] = t)), new (Y as any)(i);
  },
  remove: function (this: any, n: any): any {
    var e: any = ((this as any).find as any)(n);
    if ((e as any) == (-1 as any)) return this;
    var t: any = (((this as any).content as any).slice as any)();
    return ((t as any).splice as any)(e, 2), new (Y as any)(t);
  },
  addToStart: function (this: any, n: any, e: any): any {
    return new (Y as any)((([n, e] as any).concat as any)((((this as any).remove as any)(n) as any).content));
  },
  addToEnd: function (this: any, n: any, e: any): any {
    var t: any = (((((this as any).remove as any)(n) as any).content as any).slice as any)();
    return ((t as any).push as any)(n, e), new (Y as any)(t);
  },
  addBefore: function (this: any, n: any, e: any, t: any): any {
    var r: any = ((this as any).remove as any)(e),
      s: any = (((r as any).content as any).slice as any)(),
      i: any = ((r as any).find as any)(n);
    return ((s as any).splice as any)((i as any) == (-1 as any) ? (s as any).length : i, 0, e, t), new (Y as any)(s);
  },
  forEach: function (this: any, n: any): any {
    for (var e: any = 0; (e as any) < (((this as any).content as any).length as any); e += 2) (n as any)(((this as any).content as any)[e], ((this as any).content as any)[(e as any) + (1 as any)]);
  },
  prepend: function (this: any, n: any): any {
    return n = ((Y as any).from as any)(n), (n as any).size ? new (Y as any)((((n as any).content as any).concat as any)((((this as any).subtract as any)(n) as any).content)) : this;
  },
  append: function (this: any, n: any): any {
    return n = ((Y as any).from as any)(n), (n as any).size ? new (Y as any)((((((this as any).subtract as any)(n) as any).content as any).concat as any)((n as any).content)) : this;
  },
  subtract: function (this: any, n: any): any {
    var e: any = this;
    n = ((Y as any).from as any)(n);
    for (var t: any = 0; (t as any) < (((n as any).content as any).length as any); t += 2) e = ((e as any).remove as any)(((n as any).content as any)[t]);
    return e;
  },
  toObject: function (this: any): any {
    var n: any = {};
    return ((this as any).forEach as any)(function (this: any, e: any, t: any): any {
      (n as any)[e] = t;
    }), n;
  },
  get size(): any {
    return (((this as any).content as any).length as any) >> (1 as any);
  }
};
(Y as any).from = function (this: any, n: any): any {
  var t: any;
  if (n instanceof Y) return n;
  var e: any = [];
  if (n) for (t in n) ((e as any).push as any)(t, (n as any)[t]);
  return new (Y as any)(e);
};
function al(this: any, n: any, e: any, t: any): any {
  for (let r: any = 0;; r++) {
    if ((r as any) == ((n as any).childCount as any) || (r as any) == ((e as any).childCount as any)) return ((n as any).childCount as any) == ((e as any).childCount as any) ? null : t;
    let s: any = ((n as any).child as any)(r),
      i: any = ((e as any).child as any)(r);
    if ((s as any) == (i as any)) {
      t += (s as any).nodeSize;
      continue;
    }
    if (!((s as any).sameMarkup as any)(i)) return t;
    if ((s as any).isText && ((s as any).text as any) != ((i as any).text as any)) {
      for (let o: any = 0; (((s as any).text as any)[o] as any) == (((i as any).text as any)[o] as any); o++) t++;
      return t;
    }
    if (((s as any).content as any).size || ((i as any).content as any).size) {
      let o: any = (al as any)((s as any).content, (i as any).content, (t as any) + (1 as any));
      if ((o as any) != (null as any)) return o;
    }
    t += (s as any).nodeSize;
  }
}
function cl(this: any, n: any, e: any, t: any, r: any): any {
  for (let s: any = (n as any).childCount, i: any = (e as any).childCount;;) {
    if ((s as any) == (0 as any) || (i as any) == (0 as any)) return (s as any) == (i as any) ? null : {
      a: t,
      b: r
    };
    let o: any = ((n as any).child as any)(--s),
      l: any = ((e as any).child as any)(--i),
      a: any = (o as any).nodeSize;
    if ((o as any) == (l as any)) {
      t -= a, r -= a;
      continue;
    }
    if (!((o as any).sameMarkup as any)(l)) return {
      a: t,
      b: r
    };
    if ((o as any).isText && ((o as any).text as any) != ((l as any).text as any)) {
      let c: any = 0,
        u: any = ((Math as any).min as any)(((o as any).text as any).length, ((l as any).text as any).length);
      for (; (c as any) < (u as any) && (((o as any).text as any)[((((o as any).text as any).length as any) - (c as any) as any) - (1 as any)] as any) == (((l as any).text as any)[((((l as any).text as any).length as any) - (c as any) as any) - (1 as any)] as any);) c++, t--, r--;
      return {
        a: t,
        b: r
      };
    }
    if (((o as any).content as any).size || ((l as any).content as any).size) {
      let c: any = (cl as any)((o as any).content, (l as any).content, (t as any) - (1 as any), (r as any) - (1 as any));
      if (c) return c;
    }
    t -= a, r -= a;
  }
}
class k {
  declare size: any;
  declare content: any;
  [key: string]: any;
  constructor(e: any, t: any) {
    if ((this as any).content = e, (this as any).size = t || 0, (t as any) == (null as any)) for (let r: any = 0; (r as any) < ((e as any).length as any); r++) (this as any).size += ((e as any)[r] as any).nodeSize;
  }
  nodesBetween(e: any, t: any, r: any, s: any = 0, i: any): any {
    for (let o: any = 0, l: any = 0; (l as any) < (t as any); o++) {
      let a: any = ((this as any).content as any)[o],
        c: any = (l as any) + ((a as any).nodeSize as any);
      if ((c as any) > (e as any) && ((r as any)(a, (s as any) + (l as any), i || null, o) as any) !== (!1 as any) && ((a as any).content as any).size) {
        let u: any = (l as any) + (1 as any);
        ((a as any).nodesBetween as any)(((Math as any).max as any)(0, (e as any) - (u as any)), ((Math as any).min as any)(((a as any).content as any).size, (t as any) - (u as any)), r, (s as any) + (u as any));
      }
      l = c;
    }
  }
  descendants(e: any): any {
    ((this as any).nodesBetween as any)(0, (this as any).size, e);
  }
  textBetween(e: any, t: any, r: any, s: any): any {
    let i: any = "",
      o: any = !0;
    return ((this as any).nodesBetween as any)(e, t, (l: any, a: any): any => {
      let c: any = (l as any).isText ? (((l as any).text as any).slice as any)((((Math as any).max as any)(e, a) as any) - (a as any), (t as any) - (a as any)) : (l as any).isLeaf ? s ? (typeof s as any) == ("function" as any) ? (s as any)(l) : s : (((l as any).type as any).spec as any).leafText ? ((((l as any).type as any).spec as any).leafText as any)(l) : "" : "";
      (l as any).isBlock && ((l as any).isLeaf && c || (l as any).isTextblock) && r && (o ? o = !1 : i += r), i += c;
    }, 0), i;
  }
  append(e: any): any {
    if (!(e as any).size) return this;
    if (!(this as any).size) return e;
    let t: any = (this as any).lastChild,
      r: any = (e as any).firstChild,
      s: any = (((this as any).content as any).slice as any)(),
      i: any = 0;
    for ((t as any).isText && ((t as any).sameMarkup as any)(r) && ((s as any)[((s as any).length as any) - (1 as any)] = ((t as any).withText as any)(((t as any).text as any) + ((r as any).text as any)), i = 1); (i as any) < (((e as any).content as any).length as any); i++) ((s as any).push as any)(((e as any).content as any)[i]);
    return new (k as any)(s, ((this as any).size as any) + ((e as any).size as any));
  }
  cut(e: any, t: any = (this as any).size): any {
    if ((e as any) == (0 as any) && (t as any) == ((this as any).size as any)) return this;
    let r: any = [],
      s: any = 0;
    if ((t as any) > (e as any)) for (let i: any = 0, o: any = 0; (o as any) < (t as any); i++) {
      let l: any = ((this as any).content as any)[i],
        a: any = (o as any) + ((l as any).nodeSize as any);
      (a as any) > (e as any) && (((o as any) < (e as any) || (a as any) > (t as any)) && ((l as any).isText ? l = ((l as any).cut as any)(((Math as any).max as any)(0, (e as any) - (o as any)), ((Math as any).min as any)(((l as any).text as any).length, (t as any) - (o as any))) : l = ((l as any).cut as any)(((Math as any).max as any)(0, ((e as any) - (o as any) as any) - (1 as any)), ((Math as any).min as any)(((l as any).content as any).size, ((t as any) - (o as any) as any) - (1 as any)))), ((r as any).push as any)(l), s += (l as any).nodeSize), o = a;
    }
    return new (k as any)(r, s);
  }
  cutByIndex(e: any, t: any): any {
    return (e as any) == (t as any) ? (k as any).empty : (e as any) == (0 as any) && (t as any) == (((this as any).content as any).length as any) ? this : new (k as any)((((this as any).content as any).slice as any)(e, t));
  }
  replaceChild(e: any, t: any): any {
    let r: any = ((this as any).content as any)[e];
    if ((r as any) == (t as any)) return this;
    let s: any = (((this as any).content as any).slice as any)(),
      i: any = (((this as any).size as any) + ((t as any).nodeSize as any) as any) - ((r as any).nodeSize as any);
    return (s as any)[e] = t, new (k as any)(s, i);
  }
  addToStart(e: any): any {
    return new (k as any)((([e] as any).concat as any)((this as any).content), ((this as any).size as any) + ((e as any).nodeSize as any));
  }
  addToEnd(e: any): any {
    return new (k as any)((((this as any).content as any).concat as any)(e), ((this as any).size as any) + ((e as any).nodeSize as any));
  }
  eq(e: any): any {
    if ((((this as any).content as any).length as any) != (((e as any).content as any).length as any)) return !1;
    for (let t: any = 0; (t as any) < (((this as any).content as any).length as any); t++) if (!((((this as any).content as any)[t] as any).eq as any)(((e as any).content as any)[t])) return !1;
    return !0;
  }
  get firstChild(): any {
    return ((this as any).content as any).length ? ((this as any).content as any)[0] : null;
  }
  get lastChild(): any {
    return ((this as any).content as any).length ? ((this as any).content as any)[(((this as any).content as any).length as any) - (1 as any)] : null;
  }
  get childCount(): any {
    return ((this as any).content as any).length;
  }
  child(e: any): any {
    let t: any = ((this as any).content as any)[e];
    if (!t) throw new (RangeError as any)(((("Index " as any) + (e as any) as any) + (" out of range for " as any) as any) + (this as any));
    return t;
  }
  maybeChild(e: any): any {
    return ((this as any).content as any)[e] || null;
  }
  forEach(e: any): any {
    for (let t: any = 0, r: any = 0; (t as any) < (((this as any).content as any).length as any); t++) {
      let s: any = ((this as any).content as any)[t];
      (e as any)(s, r, t), r += (s as any).nodeSize;
    }
  }
  findDiffStart(e: any, t: any = 0): any {
    return (al as any)(this, e, t);
  }
  findDiffEnd(e: any, t: any = (this as any).size, r: any = (e as any).size): any {
    return (cl as any)(this, e, t, r);
  }
  findIndex(e: any, t: any = -1): any {
    if ((e as any) == (0 as any)) return (Sn as any)(0, e);
    if ((e as any) == ((this as any).size as any)) return (Sn as any)(((this as any).content as any).length, e);
    if ((e as any) > ((this as any).size as any) || (e as any) < (0 as any)) throw new (RangeError as any)(`Position ${e} outside of fragment (${this})`);
    for (let r: any = 0, s: any = 0;; r++) {
      let i: any = ((this as any).child as any)(r),
        o: any = (s as any) + ((i as any).nodeSize as any);
      if ((o as any) >= (e as any)) return (o as any) == (e as any) || (t as any) > (0 as any) ? (Sn as any)((r as any) + (1 as any), o) : (Sn as any)(r, s);
      s = o;
    }
  }
  toString(): any {
    return (("<" as any) + (((this as any).toStringInner as any)() as any) as any) + (">" as any);
  }
  toStringInner(): any {
    return (((this as any).content as any).join as any)(", ");
  }
  toJSON(): any {
    return ((this as any).content as any).length ? (((this as any).content as any).map as any)((e: any): any => ((e as any).toJSON as any)()) : null;
  }
  static fromJSON(e: any, t: any): any {
    if (!t) return (k as any).empty;
    if (!((Array as any).isArray as any)(t)) throw new (RangeError as any)("Invalid input for Fragment.fromJSON");
    return new (k as any)(((t as any).map as any)((e as any).nodeFromJSON));
  }
  static fromArray(e: any): any {
    if (!(e as any).length) return (k as any).empty;
    let t: any,
      r: any = 0;
    for (let s: any = 0; (s as any) < ((e as any).length as any); s++) {
      let i: any = (e as any)[s];
      r += (i as any).nodeSize, s && (i as any).isText && (((e as any)[(s as any) - (1 as any)] as any).sameMarkup as any)(i) ? (t || (t = ((e as any).slice as any)(0, s)), (t as any)[((t as any).length as any) - (1 as any)] = ((i as any).withText as any)((((t as any)[((t as any).length as any) - (1 as any)] as any).text as any) + ((i as any).text as any))) : t && ((t as any).push as any)(i);
    }
    return new (k as any)(t || e, r);
  }
  static from(e: any): any {
    if (!e) return (k as any).empty;
    if (e instanceof k) return e;
    if (((Array as any).isArray as any)(e)) return ((this as any).fromArray as any)(e);
    if ((e as any).attrs) return new (k as any)([e], (e as any).nodeSize);
    throw new (RangeError as any)(((("Can not convert " as any) + (e as any) as any) + (" to a Fragment" as any) as any) + (((e as any).nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : "") as any));
  }
}
(k as any).empty = new (k as any)([], 0);
const Vr: any = {
  index: 0,
  offset: 0
};
function Sn(this: any, n: any, e: any): any {
  return (Vr as any).index = n, (Vr as any).offset = e, Vr;
}
function Bn(this: any, n: any, e: any): any {
  if ((n as any) === (e as any)) return !0;
  if (!(n && (typeof n as any) == ("object" as any)) || !(e && (typeof e as any) == ("object" as any))) return !1;
  let t: any = ((Array as any).isArray as any)(n);
  if ((((Array as any).isArray as any)(e) as any) != (t as any)) return !1;
  if (t) {
    if (((n as any).length as any) != ((e as any).length as any)) return !1;
    for (let r: any = 0; (r as any) < ((n as any).length as any); r++) if (!(Bn as any)((n as any)[r], (e as any)[r])) return !1;
  } else {
    for (let r in n) if (!(r in e) || !(Bn as any)((n as any)[r], (e as any)[r])) return !1;
    for (let r in e) if (!(r in n)) return !1;
  }
  return !0;
}
let L: any = class ms {
  declare attrs: any;
  declare type: any;
  [key: string]: any;
  constructor(e: any, t: any) {
    (this as any).type = e, (this as any).attrs = t;
  }
  addToSet(e: any): any {
    let t: any,
      r: any = !1;
    for (let s: any = 0; (s as any) < ((e as any).length as any); s++) {
      let i: any = (e as any)[s];
      if (((this as any).eq as any)(i)) return e;
      if ((((this as any).type as any).excludes as any)((i as any).type)) t || (t = ((e as any).slice as any)(0, s));else {
        if ((((i as any).type as any).excludes as any)((this as any).type)) return e;
        !r && (((i as any).type as any).rank as any) > (((this as any).type as any).rank as any) && (t || (t = ((e as any).slice as any)(0, s)), ((t as any).push as any)(this), r = !0), t && ((t as any).push as any)(i);
      }
    }
    return t || (t = ((e as any).slice as any)()), r || ((t as any).push as any)(this), t;
  }
  removeFromSet(e: any): any {
    for (let t: any = 0; (t as any) < ((e as any).length as any); t++) if (((this as any).eq as any)((e as any)[t])) return ((((e as any).slice as any)(0, t) as any).concat as any)(((e as any).slice as any)((t as any) + (1 as any)));
    return e;
  }
  isInSet(e: any): any {
    for (let t: any = 0; (t as any) < ((e as any).length as any); t++) if (((this as any).eq as any)((e as any)[t])) return !0;
    return !1;
  }
  eq(e: any): any {
    return (this as any) == (e as any) || ((this as any).type as any) == ((e as any).type as any) && (Bn as any)((this as any).attrs, (e as any).attrs);
  }
  toJSON(): any {
    let e: any = {
      type: ((this as any).type as any).name
    };
    for (let t in (this as any).attrs) {
      (e as any).attrs = (this as any).attrs;
      break;
    }
    return e;
  }
  static fromJSON(e: any, t: any): any {
    if (!t) throw new (RangeError as any)("Invalid input for Mark.fromJSON");
    let r: any = ((e as any).marks as any)[(t as any).type];
    if (!r) throw new (RangeError as any)(`There is no mark type ${(t as any).type} in this schema`);
    let s: any = ((r as any).create as any)((t as any).attrs);
    return ((r as any).checkAttrs as any)((s as any).attrs), s;
  }
  static sameSet(e: any, t: any): any {
    if ((e as any) == (t as any)) return !0;
    if (((e as any).length as any) != ((t as any).length as any)) return !1;
    for (let r: any = 0; (r as any) < ((e as any).length as any); r++) if (!(((e as any)[r] as any).eq as any)((t as any)[r])) return !1;
    return !0;
  }
  static setFrom(e: any): any {
    if (!e || ((Array as any).isArray as any)(e) && ((e as any).length as any) == (0 as any)) return (ms as any).none;
    if (e instanceof ms) return [e];
    let t: any = ((e as any).slice as any)();
    return ((t as any).sort as any)((r: any, s: any): any => (((r as any).type as any).rank as any) - (((s as any).type as any).rank as any)), t;
  }
};
(L as any).none = [];
class $n extends (Error as any) {
  [key: string]: any;
}
class w {
  declare openEnd: any;
  declare openStart: any;
  declare content: any;
  [key: string]: any;
  constructor(e: any, t: any, r: any) {
    (this as any).content = e, (this as any).openStart = t, (this as any).openEnd = r;
  }
  get size(): any {
    return ((((this as any).content as any).size as any) - ((this as any).openStart as any) as any) - ((this as any).openEnd as any);
  }
  insertAt(e: any, t: any): any {
    let r: any = (dl as any)((this as any).content, (e as any) + ((this as any).openStart as any), t);
    return r && new (w as any)(r, (this as any).openStart, (this as any).openEnd);
  }
  removeBetween(e: any, t: any): any {
    return new (w as any)((ul as any)((this as any).content, (e as any) + ((this as any).openStart as any), (t as any) + ((this as any).openStart as any)), (this as any).openStart, (this as any).openEnd);
  }
  eq(e: any): any {
    return (((this as any).content as any).eq as any)((e as any).content) && ((this as any).openStart as any) == ((e as any).openStart as any) && ((this as any).openEnd as any) == ((e as any).openEnd as any);
  }
  toString(): any {
    return ((((((this as any).content as any) + ("(" as any) as any) + ((this as any).openStart as any) as any) + ("," as any) as any) + ((this as any).openEnd as any) as any) + (")" as any);
  }
  toJSON(): any {
    if (!((this as any).content as any).size) return null;
    let e: any = {
      content: (((this as any).content as any).toJSON as any)()
    };
    return ((this as any).openStart as any) > (0 as any) && ((e as any).openStart = (this as any).openStart), ((this as any).openEnd as any) > (0 as any) && ((e as any).openEnd = (this as any).openEnd), e;
  }
  static fromJSON(e: any, t: any): any {
    if (!t) return (w as any).empty;
    let r: any = (t as any).openStart || 0,
      s: any = (t as any).openEnd || 0;
    if ((typeof r as any) != ("number" as any) || (typeof s as any) != ("number" as any)) throw new (RangeError as any)("Invalid input for Slice.fromJSON");
    return new (w as any)(((k as any).fromJSON as any)(e, (t as any).content), r, s);
  }
  static maxOpen(e: any, t: any = !0): any {
    let r: any = 0,
      s: any = 0;
    for (let i: any = (e as any).firstChild; i && !(i as any).isLeaf && (t || !(((i as any).type as any).spec as any).isolating); i = (i as any).firstChild) r++;
    for (let i: any = (e as any).lastChild; i && !(i as any).isLeaf && (t || !(((i as any).type as any).spec as any).isolating); i = (i as any).lastChild) s++;
    return new (w as any)(e, r, s);
  }
}
(w as any).empty = new (w as any)((k as any).empty, 0, 0);
function ul(this: any, n: any, e: any, t: any): any {
  let {
      index: r,
      offset: s
    }: any = ((n as any).findIndex as any)(e),
    i: any = ((n as any).maybeChild as any)(r),
    {
      index: o,
      offset: l
    }: any = ((n as any).findIndex as any)(t);
  if ((s as any) == (e as any) || (i as any).isText) {
    if ((l as any) != (t as any) && !(((n as any).child as any)(o) as any).isText) throw new (RangeError as any)("Removing non-flat range");
    return ((((n as any).cut as any)(0, e) as any).append as any)(((n as any).cut as any)(t));
  }
  if ((r as any) != (o as any)) throw new (RangeError as any)("Removing non-flat range");
  return ((n as any).replaceChild as any)(r, ((i as any).copy as any)((ul as any)((i as any).content, ((e as any) - (s as any) as any) - (1 as any), ((t as any) - (s as any) as any) - (1 as any))));
}
function dl(this: any, n: any, e: any, t: any, r: any): any {
  let {
      index: s,
      offset: i
    }: any = ((n as any).findIndex as any)(e),
    o: any = ((n as any).maybeChild as any)(s);
  if ((i as any) == (e as any) || (o as any).isText) return ((((((n as any).cut as any)(0, e) as any).append as any)(t) as any).append as any)(((n as any).cut as any)(e));
  let l: any = (dl as any)((o as any).content, ((e as any) - (i as any) as any) - (1 as any), t);
  return l && ((n as any).replaceChild as any)(s, ((o as any).copy as any)(l));
}
function Wc(this: any, n: any, e: any, t: any): any {
  if (((t as any).openStart as any) > ((n as any).depth as any)) throw new ($n as any)("Inserted content deeper than insertion position");
  if ((((n as any).depth as any) - ((t as any).openStart as any) as any) != (((e as any).depth as any) - ((t as any).openEnd as any) as any)) throw new ($n as any)("Inconsistent open depths");
  return (fl as any)(n, e, t, 0);
}
function fl(this: any, n: any, e: any, t: any, r: any): any {
  let s: any = ((n as any).index as any)(r),
    i: any = ((n as any).node as any)(r);
  if ((s as any) == (((e as any).index as any)(r) as any) && (r as any) < (((n as any).depth as any) - ((t as any).openStart as any) as any)) {
    let o: any = (fl as any)(n, e, t, (r as any) + (1 as any));
    return ((i as any).copy as any)((((i as any).content as any).replaceChild as any)(s, o));
  } else if (((t as any).content as any).size) {
    if (!(t as any).openStart && !(t as any).openEnd && ((n as any).depth as any) == (r as any) && ((e as any).depth as any) == (r as any)) {
      let o: any = (n as any).parent,
        l: any = (o as any).content;
      return (ct as any)(o, ((((((l as any).cut as any)(0, (n as any).parentOffset) as any).append as any)((t as any).content) as any).append as any)(((l as any).cut as any)((e as any).parentOffset)));
    } else {
      let {
        start: o,
        end: l
      }: any = (qc as any)(t, n);
      return (ct as any)(i, (pl as any)(n, o, l, e, r));
    }
  } else return (ct as any)(i, (Fn as any)(n, e, r));
}
function hl(this: any, n: any, e: any): any {
  if (!(((e as any).type as any).compatibleContent as any)((n as any).type)) throw new ($n as any)(((("Cannot join " as any) + (((e as any).type as any).name as any) as any) + (" onto " as any) as any) + (((n as any).type as any).name as any));
}
function gs(this: any, n: any, e: any, t: any): any {
  let r: any = ((n as any).node as any)(t);
  return (hl as any)(r, ((e as any).node as any)(t)), r;
}
function at(this: any, n: any, e: any): any {
  let t: any = ((e as any).length as any) - (1 as any);
  (t as any) >= (0 as any) && (n as any).isText && ((n as any).sameMarkup as any)((e as any)[t]) ? (e as any)[t] = ((n as any).withText as any)((((e as any)[t] as any).text as any) + ((n as any).text as any)) : ((e as any).push as any)(n);
}
function Yt(this: any, n: any, e: any, t: any, r: any): any {
  let s: any = (((e || n) as any).node as any)(t),
    i: any = 0,
    o: any = e ? ((e as any).index as any)(t) : (s as any).childCount;
  n && (i = ((n as any).index as any)(t), ((n as any).depth as any) > (t as any) ? i++ : (n as any).textOffset && ((at as any)((n as any).nodeAfter, r), i++));
  for (let l: any = i; (l as any) < (o as any); l++) (at as any)(((s as any).child as any)(l), r);
  e && ((e as any).depth as any) == (t as any) && (e as any).textOffset && (at as any)((e as any).nodeBefore, r);
}
function ct(this: any, n: any, e: any): any {
  return (((n as any).type as any).checkContent as any)(e), ((n as any).copy as any)(e);
}
function pl(this: any, n: any, e: any, t: any, r: any, s: any): any {
  let i: any = ((n as any).depth as any) > (s as any) && (gs as any)(n, e, (s as any) + (1 as any)),
    o: any = ((r as any).depth as any) > (s as any) && (gs as any)(t, r, (s as any) + (1 as any)),
    l: any = [];
  return (Yt as any)(null, n, s, l), i && o && (((e as any).index as any)(s) as any) == (((t as any).index as any)(s) as any) ? ((hl as any)(i, o), (at as any)((ct as any)(i, (pl as any)(n, e, t, r, (s as any) + (1 as any))), l)) : (i && (at as any)((ct as any)(i, (Fn as any)(n, e, (s as any) + (1 as any))), l), (Yt as any)(e, t, s, l), o && (at as any)((ct as any)(o, (Fn as any)(t, r, (s as any) + (1 as any))), l)), (Yt as any)(r, null, s, l), new (k as any)(l);
}
function Fn(this: any, n: any, e: any, t: any): any {
  let r: any = [];
  if ((Yt as any)(null, n, t, r), ((n as any).depth as any) > (t as any)) {
    let s: any = (gs as any)(n, e, (t as any) + (1 as any));
    (at as any)((ct as any)(s, (Fn as any)(n, e, (t as any) + (1 as any))), r);
  }
  return (Yt as any)(e, null, t, r), new (k as any)(r);
}
function qc(this: any, n: any, e: any): any {
  let t: any = ((e as any).depth as any) - ((n as any).openStart as any),
    s: any = ((((e as any).node as any)(t) as any).copy as any)((n as any).content);
  for (let i: any = (t as any) - (1 as any); (i as any) >= (0 as any); i--) s = ((((e as any).node as any)(i) as any).copy as any)(((k as any).from as any)(s));
  return {
    start: ((s as any).resolveNoCache as any)(((n as any).openStart as any) + (t as any)),
    end: ((s as any).resolveNoCache as any)(((((s as any).content as any).size as any) - ((n as any).openEnd as any) as any) - (t as any))
  };
}
class ln {
  declare depth: any;
  declare parentOffset: any;
  declare path: any;
  declare pos: any;
  [key: string]: any;
  constructor(e: any, t: any, r: any) {
    (this as any).pos = e, (this as any).path = t, (this as any).parentOffset = r, (this as any).depth = (((t as any).length as any) / (3 as any) as any) - (1 as any);
  }
  resolveDepth(e: any): any {
    return (e as any) == (null as any) ? (this as any).depth : (e as any) < (0 as any) ? ((this as any).depth as any) + (e as any) : e;
  }
  get parent(): any {
    return ((this as any).node as any)((this as any).depth);
  }
  get doc(): any {
    return ((this as any).node as any)(0);
  }
  node(e: any): any {
    return ((this as any).path as any)[(((this as any).resolveDepth as any)(e) as any) * (3 as any)];
  }
  index(e: any): any {
    return ((this as any).path as any)[((((this as any).resolveDepth as any)(e) as any) * (3 as any) as any) + (1 as any)];
  }
  indexAfter(e: any): any {
    return e = ((this as any).resolveDepth as any)(e), (((this as any).index as any)(e) as any) + (((e as any) == ((this as any).depth as any) && !(this as any).textOffset ? 0 : 1) as any);
  }
  start(e: any): any {
    return e = ((this as any).resolveDepth as any)(e), (e as any) == (0 as any) ? 0 : (((this as any).path as any)[((e as any) * (3 as any) as any) - (1 as any)] as any) + (1 as any);
  }
  end(e: any): any {
    return e = ((this as any).resolveDepth as any)(e), (((this as any).start as any)(e) as any) + (((((this as any).node as any)(e) as any).content as any).size as any);
  }
  before(e: any): any {
    if (e = ((this as any).resolveDepth as any)(e), !e) throw new (RangeError as any)("There is no position before the top-level node");
    return (e as any) == (((this as any).depth as any) + (1 as any) as any) ? (this as any).pos : ((this as any).path as any)[((e as any) * (3 as any) as any) - (1 as any)];
  }
  after(e: any): any {
    if (e = ((this as any).resolveDepth as any)(e), !e) throw new (RangeError as any)("There is no position after the top-level node");
    return (e as any) == (((this as any).depth as any) + (1 as any) as any) ? (this as any).pos : (((this as any).path as any)[((e as any) * (3 as any) as any) - (1 as any)] as any) + ((((this as any).path as any)[(e as any) * (3 as any)] as any).nodeSize as any);
  }
  get textOffset(): any {
    return ((this as any).pos as any) - (((this as any).path as any)[(((this as any).path as any).length as any) - (1 as any)] as any);
  }
  get nodeAfter(): any {
    let e: any = (this as any).parent,
      t: any = ((this as any).index as any)((this as any).depth);
    if ((t as any) == ((e as any).childCount as any)) return null;
    let r: any = ((this as any).pos as any) - (((this as any).path as any)[(((this as any).path as any).length as any) - (1 as any)] as any),
      s: any = ((e as any).child as any)(t);
    return r ? ((((e as any).child as any)(t) as any).cut as any)(r) : s;
  }
  get nodeBefore(): any {
    let e: any = ((this as any).index as any)((this as any).depth),
      t: any = ((this as any).pos as any) - (((this as any).path as any)[(((this as any).path as any).length as any) - (1 as any)] as any);
    return t ? (((((this as any).parent as any).child as any)(e) as any).cut as any)(0, t) : (e as any) == (0 as any) ? null : (((this as any).parent as any).child as any)((e as any) - (1 as any));
  }
  posAtIndex(e: any, t: any): any {
    t = ((this as any).resolveDepth as any)(t);
    let r: any = ((this as any).path as any)[(t as any) * (3 as any)],
      s: any = (t as any) == (0 as any) ? 0 : (((this as any).path as any)[((t as any) * (3 as any) as any) - (1 as any)] as any) + (1 as any);
    for (let i: any = 0; (i as any) < (e as any); i++) s += (((r as any).child as any)(i) as any).nodeSize;
    return s;
  }
  marks(): any {
    let e: any = (this as any).parent,
      t: any = ((this as any).index as any)();
    if ((((e as any).content as any).size as any) == (0 as any)) return (L as any).none;
    if ((this as any).textOffset) return (((e as any).child as any)(t) as any).marks;
    let r: any = ((e as any).maybeChild as any)((t as any) - (1 as any)),
      s: any = ((e as any).maybeChild as any)(t);
    if (!r) {
      let l: any = r;
      r = s, s = l;
    }
    let i: any = (r as any).marks;
    for (var o: any = 0; (o as any) < ((i as any).length as any); o++) (((((i as any)[o] as any).type as any).spec as any).inclusive as any) === (!1 as any) && (!s || !(((i as any)[o] as any).isInSet as any)((s as any).marks)) && (i = (((i as any)[o--] as any).removeFromSet as any)(i));
    return i;
  }
  marksAcross(e: any): any {
    let t: any = (((this as any).parent as any).maybeChild as any)(((this as any).index as any)());
    if (!t || !(t as any).isInline) return null;
    let r: any = (t as any).marks,
      s: any = (((e as any).parent as any).maybeChild as any)(((e as any).index as any)());
    for (var i: any = 0; (i as any) < ((r as any).length as any); i++) (((((r as any)[i] as any).type as any).spec as any).inclusive as any) === (!1 as any) && (!s || !(((r as any)[i] as any).isInSet as any)((s as any).marks)) && (r = (((r as any)[i--] as any).removeFromSet as any)(r));
    return r;
  }
  sharedDepth(e: any): any {
    for (let t: any = (this as any).depth; (t as any) > (0 as any); t--) if ((((this as any).start as any)(t) as any) <= (e as any) && (((this as any).end as any)(t) as any) >= (e as any)) return t;
    return 0;
  }
  blockRange(e: any = this, t: any): any {
    if (((e as any).pos as any) < ((this as any).pos as any)) return ((e as any).blockRange as any)(this);
    for (let r: any = ((this as any).depth as any) - ((((this as any).parent as any).inlineContent || ((this as any).pos as any) == ((e as any).pos as any) ? 1 : 0) as any); (r as any) >= (0 as any); r--) if (((e as any).pos as any) <= (((this as any).end as any)(r) as any) && (!t || (t as any)(((this as any).node as any)(r)))) return new (Hn as any)(this, e, r);
    return null;
  }
  sameParent(e: any): any {
    return (((this as any).pos as any) - ((this as any).parentOffset as any) as any) == (((e as any).pos as any) - ((e as any).parentOffset as any) as any);
  }
  max(e: any): any {
    return ((e as any).pos as any) > ((this as any).pos as any) ? e : this;
  }
  min(e: any): any {
    return ((e as any).pos as any) < ((this as any).pos as any) ? e : this;
  }
  toString(): any {
    let e: any = "";
    for (let t: any = 1; (t as any) <= ((this as any).depth as any); t++) e += ((((e ? "/" : "") as any) + (((((this as any).node as any)(t) as any).type as any).name as any) as any) + ("_" as any) as any) + (((this as any).index as any)((t as any) - (1 as any)) as any);
    return ((e as any) + (":" as any) as any) + ((this as any).parentOffset as any);
  }
  static resolve(e: any, t: any): any {
    if (!((t as any) >= (0 as any) && (t as any) <= (((e as any).content as any).size as any))) throw new (RangeError as any)((("Position " as any) + (t as any) as any) + (" out of range" as any));
    let r: any = [],
      s: any = 0,
      i: any = t;
    for (let o: any = e;;) {
      let {
          index: l,
          offset: a
        }: any = (((o as any).content as any).findIndex as any)(i),
        c: any = (i as any) - (a as any);
      if (((r as any).push as any)(o, l, (s as any) + (a as any)), !c || (o = ((o as any).child as any)(l), (o as any).isText)) break;
      i = (c as any) - (1 as any), s += (a as any) + (1 as any);
    }
    return new (ln as any)(t, r, i);
  }
  static resolveCached(e: any, t: any): any {
    let r: any = ((Di as any).get as any)(e);
    if (r) for (let i: any = 0; (i as any) < (((r as any).elts as any).length as any); i++) {
      let o: any = ((r as any).elts as any)[i];
      if (((o as any).pos as any) == (t as any)) return o;
    } else ((Di as any).set as any)(e, r = new (Kc as any)());
    let s: any = ((r as any).elts as any)[(r as any).i] = ((ln as any).resolve as any)(e, t);
    return (r as any).i = (((r as any).i as any) + (1 as any) as any) % (Uc as any), s;
  }
}
class Kc {
  declare i: any;
  declare elts: any;
  [key: string]: any;
  constructor() {
    (this as any).elts = [], (this as any).i = 0;
  }
}
const Uc: number = 12,
  Di: any = new (WeakMap as any)();
class Hn {
  declare depth: any;
  declare $to: any;
  declare $from: any;
  [key: string]: any;
  constructor(e: any, t: any, r: any) {
    (this as any).$from = e, (this as any).$to = t, (this as any).depth = r;
  }
  get start(): any {
    return (((this as any).$from as any).before as any)(((this as any).depth as any) + (1 as any));
  }
  get end(): any {
    return (((this as any).$to as any).after as any)(((this as any).depth as any) + (1 as any));
  }
  get parent(): any {
    return (((this as any).$from as any).node as any)((this as any).depth);
  }
  get startIndex(): any {
    return (((this as any).$from as any).index as any)((this as any).depth);
  }
  get endIndex(): any {
    return (((this as any).$to as any).indexAfter as any)((this as any).depth);
  }
}
const Jc: any = ((Object as any).create as any)(null);
class Se {
  declare content: any;
  declare marks: any;
  declare attrs: any;
  declare type: any;
  [key: string]: any;
  constructor(e: any, t: any, r: any, s: any = (L as any).none) {
    (this as any).type = e, (this as any).attrs = t, (this as any).marks = s, (this as any).content = r || (k as any).empty;
  }
  get children(): any {
    return ((this as any).content as any).content;
  }
  get nodeSize(): any {
    return (this as any).isLeaf ? 1 : (2 as any) + (((this as any).content as any).size as any);
  }
  get childCount(): any {
    return ((this as any).content as any).childCount;
  }
  child(e: any): any {
    return (((this as any).content as any).child as any)(e);
  }
  maybeChild(e: any): any {
    return (((this as any).content as any).maybeChild as any)(e);
  }
  forEach(e: any): any {
    (((this as any).content as any).forEach as any)(e);
  }
  nodesBetween(e: any, t: any, r: any, s: any = 0): any {
    (((this as any).content as any).nodesBetween as any)(e, t, r, s, this);
  }
  descendants(e: any): any {
    ((this as any).nodesBetween as any)(0, ((this as any).content as any).size, e);
  }
  get textContent(): any {
    return (this as any).isLeaf && (((this as any).type as any).spec as any).leafText ? ((((this as any).type as any).spec as any).leafText as any)(this) : ((this as any).textBetween as any)(0, ((this as any).content as any).size, "");
  }
  textBetween(e: any, t: any, r: any, s: any): any {
    return (((this as any).content as any).textBetween as any)(e, t, r, s);
  }
  get firstChild(): any {
    return ((this as any).content as any).firstChild;
  }
  get lastChild(): any {
    return ((this as any).content as any).lastChild;
  }
  eq(e: any): any {
    return (this as any) == (e as any) || ((this as any).sameMarkup as any)(e) && (((this as any).content as any).eq as any)((e as any).content);
  }
  sameMarkup(e: any): any {
    return ((this as any).hasMarkup as any)((e as any).type, (e as any).attrs, (e as any).marks);
  }
  hasMarkup(e: any, t: any, r: any): any {
    return ((this as any).type as any) == (e as any) && (Bn as any)((this as any).attrs, t || (e as any).defaultAttrs || Jc) && ((L as any).sameSet as any)((this as any).marks, r || (L as any).none);
  }
  copy(e: any = null): any {
    return (e as any) == ((this as any).content as any) ? this : new (Se as any)((this as any).type, (this as any).attrs, e, (this as any).marks);
  }
  mark(e: any): any {
    return (e as any) == ((this as any).marks as any) ? this : new (Se as any)((this as any).type, (this as any).attrs, (this as any).content, e);
  }
  cut(e: any, t: any = ((this as any).content as any).size): any {
    return (e as any) == (0 as any) && (t as any) == (((this as any).content as any).size as any) ? this : ((this as any).copy as any)((((this as any).content as any).cut as any)(e, t));
  }
  slice(e: any, t: any = ((this as any).content as any).size, r: any = !1): any {
    if ((e as any) == (t as any)) return (w as any).empty;
    let s: any = ((this as any).resolve as any)(e),
      i: any = ((this as any).resolve as any)(t),
      o: any = r ? 0 : ((s as any).sharedDepth as any)(t),
      l: any = ((s as any).start as any)(o),
      c: any = (((((s as any).node as any)(o) as any).content as any).cut as any)(((s as any).pos as any) - (l as any), ((i as any).pos as any) - (l as any));
    return new (w as any)(c, ((s as any).depth as any) - (o as any), ((i as any).depth as any) - (o as any));
  }
  replace(e: any, t: any, r: any): any {
    return (Wc as any)(((this as any).resolve as any)(e), ((this as any).resolve as any)(t), r);
  }
  nodeAt(e: any): any {
    for (let t: any = this;;) {
      let {
        index: r,
        offset: s
      }: any = (((t as any).content as any).findIndex as any)(e);
      if (t = ((t as any).maybeChild as any)(r), !t) return null;
      if ((s as any) == (e as any) || (t as any).isText) return t;
      e -= (s as any) + (1 as any);
    }
  }
  childAfter(e: any): any {
    let {
      index: t,
      offset: r
    }: any = (((this as any).content as any).findIndex as any)(e);
    return {
      node: (((this as any).content as any).maybeChild as any)(t),
      index: t,
      offset: r
    };
  }
  childBefore(e: any): any {
    if ((e as any) == (0 as any)) return {
      node: null,
      index: 0,
      offset: 0
    };
    let {
      index: t,
      offset: r
    }: any = (((this as any).content as any).findIndex as any)(e);
    if ((r as any) < (e as any)) return {
      node: (((this as any).content as any).child as any)(t),
      index: t,
      offset: r
    };
    let s: any = (((this as any).content as any).child as any)((t as any) - (1 as any));
    return {
      node: s,
      index: (t as any) - (1 as any),
      offset: (r as any) - ((s as any).nodeSize as any)
    };
  }
  resolve(e: any): any {
    return ((ln as any).resolveCached as any)(this, e);
  }
  resolveNoCache(e: any): any {
    return ((ln as any).resolve as any)(this, e);
  }
  rangeHasMark(e: any, t: any, r: any): any {
    let s: any = !1;
    return (t as any) > (e as any) && ((this as any).nodesBetween as any)(e, t, (i: any): any => (((r as any).isInSet as any)((i as any).marks) && (s = !0), !s)), s;
  }
  get isBlock(): any {
    return ((this as any).type as any).isBlock;
  }
  get isTextblock(): any {
    return ((this as any).type as any).isTextblock;
  }
  get inlineContent(): any {
    return ((this as any).type as any).inlineContent;
  }
  get isInline(): any {
    return ((this as any).type as any).isInline;
  }
  get isText(): any {
    return ((this as any).type as any).isText;
  }
  get isLeaf(): any {
    return ((this as any).type as any).isLeaf;
  }
  get isAtom(): any {
    return ((this as any).type as any).isAtom;
  }
  toString(): any {
    if ((((this as any).type as any).spec as any).toDebugString) return ((((this as any).type as any).spec as any).toDebugString as any)(this);
    let e: any = ((this as any).type as any).name;
    return ((this as any).content as any).size && (e += (("(" as any) + ((((this as any).content as any).toStringInner as any)() as any) as any) + (")" as any)), (ml as any)((this as any).marks, e);
  }
  contentMatchAt(e: any): any {
    let t: any = ((((this as any).type as any).contentMatch as any).matchFragment as any)((this as any).content, 0, e);
    if (!t) throw new (Error as any)("Called contentMatchAt on a node with invalid content");
    return t;
  }
  canReplace(e: any, t: any, r: any = (k as any).empty, s: any = 0, i: any = (r as any).childCount): any {
    let o: any = ((((this as any).contentMatchAt as any)(e) as any).matchFragment as any)(r, s, i),
      l: any = o && ((o as any).matchFragment as any)((this as any).content, t);
    if (!l || !(l as any).validEnd) return !1;
    for (let a: any = s; (a as any) < (i as any); a++) if (!(((this as any).type as any).allowsMarks as any)((((r as any).child as any)(a) as any).marks)) return !1;
    return !0;
  }
  canReplaceWith(e: any, t: any, r: any, s: any): any {
    if (s && !(((this as any).type as any).allowsMarks as any)(s)) return !1;
    let i: any = ((((this as any).contentMatchAt as any)(e) as any).matchType as any)(r),
      o: any = i && ((i as any).matchFragment as any)((this as any).content, t);
    return o ? (o as any).validEnd : !1;
  }
  canAppend(e: any): any {
    return ((e as any).content as any).size ? ((this as any).canReplace as any)((this as any).childCount, (this as any).childCount, (e as any).content) : (((this as any).type as any).compatibleContent as any)((e as any).type);
  }
  check(): any {
    (((this as any).type as any).checkContent as any)((this as any).content), (((this as any).type as any).checkAttrs as any)((this as any).attrs);
    let e: any = (L as any).none;
    for (let t: any = 0; (t as any) < (((this as any).marks as any).length as any); t++) {
      let r: any = ((this as any).marks as any)[t];
      (((r as any).type as any).checkAttrs as any)((r as any).attrs), e = ((r as any).addToSet as any)(e);
    }
    if (!((L as any).sameSet as any)(e, (this as any).marks)) throw new (RangeError as any)(`Invalid collection of marks for node ${((this as any).type as any).name}: ${(((this as any).marks as any).map as any)((t: any): any => ((t as any).type as any).name)}`);
    (((this as any).content as any).forEach as any)((t: any): any => ((t as any).check as any)());
  }
  toJSON(): any {
    let e: any = {
      type: ((this as any).type as any).name
    };
    for (let t in (this as any).attrs) {
      (e as any).attrs = (this as any).attrs;
      break;
    }
    return ((this as any).content as any).size && ((e as any).content = (((this as any).content as any).toJSON as any)()), ((this as any).marks as any).length && ((e as any).marks = (((this as any).marks as any).map as any)((t: any): any => ((t as any).toJSON as any)())), e;
  }
  static fromJSON(e: any, t: any): any {
    if (!t) throw new (RangeError as any)("Invalid input for Node.fromJSON");
    let r: any;
    if ((t as any).marks) {
      if (!((Array as any).isArray as any)((t as any).marks)) throw new (RangeError as any)("Invalid mark data for Node.fromJSON");
      r = (((t as any).marks as any).map as any)((e as any).markFromJSON);
    }
    if (((t as any).type as any) == ("text" as any)) {
      if ((typeof (t as any).text as any) != ("string" as any)) throw new (RangeError as any)("Invalid text node in JSON");
      return ((e as any).text as any)((t as any).text, r);
    }
    let s: any = ((k as any).fromJSON as any)(e, (t as any).content),
      i: any = ((((e as any).nodeType as any)((t as any).type) as any).create as any)((t as any).attrs, s, r);
    return (((i as any).type as any).checkAttrs as any)((i as any).attrs), i;
  }
}
((Se as any).prototype as any).text = void 0;
class Vn extends (Se as any) {
  declare text: any;
  [key: string]: any;
  constructor(e: any, t: any, r: any, s: any) {
    if (super(e, t, null, s), !r) throw new (RangeError as any)("Empty text nodes are not allowed");
    (this as any).text = r;
  }
  toString(): any {
    return (((this as any).type as any).spec as any).toDebugString ? ((((this as any).type as any).spec as any).toDebugString as any)(this) : (ml as any)((this as any).marks, ((JSON as any).stringify as any)((this as any).text));
  }
  get textContent(): any {
    return (this as any).text;
  }
  textBetween(e: any, t: any): any {
    return (((this as any).text as any).slice as any)(e, t);
  }
  get nodeSize(): any {
    return ((this as any).text as any).length;
  }
  mark(e: any): any {
    return (e as any) == ((this as any).marks as any) ? this : new (Vn as any)((this as any).type, (this as any).attrs, (this as any).text, e);
  }
  withText(e: any): any {
    return (e as any) == ((this as any).text as any) ? this : new (Vn as any)((this as any).type, (this as any).attrs, e, (this as any).marks);
  }
  cut(e: any = 0, t: any = ((this as any).text as any).length): any {
    return (e as any) == (0 as any) && (t as any) == (((this as any).text as any).length as any) ? this : ((this as any).withText as any)((((this as any).text as any).slice as any)(e, t));
  }
  eq(e: any): any {
    return ((this as any).sameMarkup as any)(e) && ((this as any).text as any) == ((e as any).text as any);
  }
  toJSON(): any {
    let e: any = (super.toJSON as any)();
    return (e as any).text = (this as any).text, e;
  }
}
function ml(this: any, n: any, e: any): any {
  for (let t: any = ((n as any).length as any) - (1 as any); (t as any) >= (0 as any); t--) e = ((((((n as any)[t] as any).type as any).name as any) + ("(" as any) as any) + (e as any) as any) + (")" as any);
  return e;
}
class ht {
  declare wrapCache: any;
  declare next: any;
  declare validEnd: any;
  [key: string]: any;
  constructor(e: any) {
    (this as any).validEnd = e, (this as any).next = [], (this as any).wrapCache = [];
  }
  static parse(e: any, t: any): any {
    let r: any = new (Gc as any)(e, t);
    if (((r as any).next as any) == (null as any)) return (ht as any).empty;
    let s: any = (gl as any)(r);
    (r as any).next && ((r as any).err as any)("Unexpected trailing text");
    let i: any = (nu as any)((tu as any)(s));
    return (ru as any)(i, r), i;
  }
  matchType(e: any): any {
    for (let t: any = 0; (t as any) < (((this as any).next as any).length as any); t++) if (((((this as any).next as any)[t] as any).type as any) == (e as any)) return (((this as any).next as any)[t] as any).next;
    return null;
  }
  matchFragment(e: any, t: any = 0, r: any = (e as any).childCount): any {
    let s: any = this;
    for (let i: any = t; s && (i as any) < (r as any); i++) s = ((s as any).matchType as any)((((e as any).child as any)(i) as any).type);
    return s;
  }
  get inlineContent(): any {
    return (((this as any).next as any).length as any) != (0 as any) && ((((this as any).next as any)[0] as any).type as any).isInline;
  }
  get defaultType(): any {
    for (let e: any = 0; (e as any) < (((this as any).next as any).length as any); e++) {
      let {
        type: t
      }: any = ((this as any).next as any)[e];
      if (!((t as any).isText || ((t as any).hasRequiredAttrs as any)())) return t;
    }
    return null;
  }
  compatible(e: any): any {
    for (let t: any = 0; (t as any) < (((this as any).next as any).length as any); t++) for (let r: any = 0; (r as any) < (((e as any).next as any).length as any); r++) if (((((this as any).next as any)[t] as any).type as any) == ((((e as any).next as any)[r] as any).type as any)) return !0;
    return !1;
  }
  fillBefore(e: any, t: any = !1, r: any = 0): any {
    let s: any = [this];
    function i(this: any, o: any, l: any): any {
      let a: any = ((o as any).matchFragment as any)(e, r);
      if (a && (!t || (a as any).validEnd)) return ((k as any).from as any)(((l as any).map as any)((c: any): any => ((c as any).createAndFill as any)()));
      for (let c: any = 0; (c as any) < (((o as any).next as any).length as any); c++) {
        let {
          type: u,
          next: d
        }: any = ((o as any).next as any)[c];
        if (!((u as any).isText || ((u as any).hasRequiredAttrs as any)()) && (((s as any).indexOf as any)(d) as any) == (-1 as any)) {
          ((s as any).push as any)(d);
          let f: any = (i as any)(d, ((l as any).concat as any)(u));
          if (f) return f;
        }
      }
      return null;
    }
    return (i as any)(this, []);
  }
  findWrapping(e: any): any {
    for (let r: any = 0; (r as any) < (((this as any).wrapCache as any).length as any); r += 2) if ((((this as any).wrapCache as any)[r] as any) == (e as any)) return ((this as any).wrapCache as any)[(r as any) + (1 as any)];
    let t: any = ((this as any).computeWrapping as any)(e);
    return (((this as any).wrapCache as any).push as any)(e, t), t;
  }
  computeWrapping(e: any): any {
    let t: any = ((Object as any).create as any)(null),
      r: any = [{
        match: this,
        type: null,
        via: null
      }];
    for (; (r as any).length;) {
      let s: any = ((r as any).shift as any)(),
        i: any = (s as any).match;
      if (((i as any).matchType as any)(e)) {
        let o: any = [];
        for (let l: any = s; (l as any).type; l = (l as any).via) ((o as any).push as any)((l as any).type);
        return ((o as any).reverse as any)();
      }
      for (let o: any = 0; (o as any) < (((i as any).next as any).length as any); o++) {
        let {
          type: l,
          next: a
        }: any = ((i as any).next as any)[o];
        !(l as any).isLeaf && !((l as any).hasRequiredAttrs as any)() && !((l as any).name in t) && (!(s as any).type || (a as any).validEnd) && (((r as any).push as any)({
          match: (l as any).contentMatch,
          type: l,
          via: s
        }), (t as any)[(l as any).name] = !0);
      }
    }
    return null;
  }
  get edgeCount(): any {
    return ((this as any).next as any).length;
  }
  edge(e: any): any {
    if ((e as any) >= (((this as any).next as any).length as any)) throw new (RangeError as any)(`There's no ${e}th edge in this content match`);
    return ((this as any).next as any)[e];
  }
  toString(): any {
    let e: any = [];
    function t(this: any, r: any): any {
      ((e as any).push as any)(r);
      for (let s: any = 0; (s as any) < (((r as any).next as any).length as any); s++) (((e as any).indexOf as any)((((r as any).next as any)[s] as any).next) as any) == (-1 as any) && (t as any)((((r as any).next as any)[s] as any).next);
    }
    return (t as any)(this), ((((e as any).map as any)((r: any, s: any): any => {
      let i: any = ((s as any) + (((r as any).validEnd ? "*" : " ") as any) as any) + (" " as any);
      for (let o: any = 0; (o as any) < (((r as any).next as any).length as any); o++) i += ((((o ? ", " : "") as any) + (((((r as any).next as any)[o] as any).type as any).name as any) as any) + ("->" as any) as any) + (((e as any).indexOf as any)((((r as any).next as any)[o] as any).next) as any);
      return i;
    }) as any).join as any)(`
`);
  }
}
(ht as any).empty = new (ht as any)(!0);
class Gc {
  declare tokens: any;
  declare pos: any;
  declare inline: any;
  declare nodeTypes: any;
  declare string: any;
  [key: string]: any;
  constructor(e: any, t: any) {
    (this as any).string = e, (this as any).nodeTypes = t, (this as any).inline = null, (this as any).pos = 0, (this as any).tokens = ((e as any).split as any)(/\s*(?=\b|\W|$)/), (((this as any).tokens as any)[(((this as any).tokens as any).length as any) - (1 as any)] as any) == ("" as any) && (((this as any).tokens as any).pop as any)(), (((this as any).tokens as any)[0] as any) == ("" as any) && (((this as any).tokens as any).shift as any)();
  }
  get next(): any {
    return ((this as any).tokens as any)[(this as any).pos];
  }
  eat(e: any): any {
    return ((this as any).next as any) == (e as any) && ((this as any).pos++ || !0);
  }
  err(e: any): any {
    throw new (SyntaxError as any)((((e as any) + (" (in content expression '" as any) as any) + ((this as any).string as any) as any) + ("')" as any));
  }
}
function gl(this: any, n: any): any {
  let e: any = [];
  do ((e as any).push as any)((Yc as any)(n)); while (((n as any).eat as any)("|"));
  return ((e as any).length as any) == (1 as any) ? (e as any)[0] : {
    type: "choice",
    exprs: e
  };
}
function Yc(this: any, n: any): any {
  let e: any = [];
  do ((e as any).push as any)((Xc as any)(n)); while ((n as any).next && ((n as any).next as any) != (")" as any) && ((n as any).next as any) != ("|" as any));
  return ((e as any).length as any) == (1 as any) ? (e as any)[0] : {
    type: "seq",
    exprs: e
  };
}
function Xc(this: any, n: any): any {
  let e: any = (eu as any)(n);
  for (;;) if (((n as any).eat as any)("+")) e = {
    type: "plus",
    expr: e
  };else if (((n as any).eat as any)("*")) e = {
    type: "star",
    expr: e
  };else if (((n as any).eat as any)("?")) e = {
    type: "opt",
    expr: e
  };else if (((n as any).eat as any)("{")) e = (Qc as any)(n, e);else break;
  return e;
}
function Ii(this: any, n: any): any {
  ((/\D/ as any).test as any)((n as any).next) && ((n as any).err as any)((("Expected number, got '" as any) + ((n as any).next as any) as any) + ("'" as any));
  let e: any = (Number as any)((n as any).next);
  return (n as any).pos++, e;
}
function Qc(this: any, n: any, e: any): any {
  let t: any = (Ii as any)(n),
    r: any = t;
  return ((n as any).eat as any)(",") && (((n as any).next as any) != ("}" as any) ? r = (Ii as any)(n) : r = -1), ((n as any).eat as any)("}") || ((n as any).err as any)("Unclosed braced range"), {
    type: "range",
    min: t,
    max: r,
    expr: e
  };
}
function Zc(this: any, n: any, e: any): any {
  let t: any = (n as any).nodeTypes,
    r: any = (t as any)[e];
  if (r) return [r];
  let s: any = [];
  for (let i in t) {
    let o: any = (t as any)[i];
    ((o as any).isInGroup as any)(e) && ((s as any).push as any)(o);
  }
  return ((s as any).length as any) == (0 as any) && ((n as any).err as any)((("No node type or group '" as any) + (e as any) as any) + ("' found" as any)), s;
}
function eu(this: any, n: any): any {
  if (((n as any).eat as any)("(")) {
    let e: any = (gl as any)(n);
    return ((n as any).eat as any)(")") || ((n as any).err as any)("Missing closing paren"), e;
  } else if (((/\W/ as any).test as any)((n as any).next)) ((n as any).err as any)((("Unexpected token '" as any) + ((n as any).next as any) as any) + ("'" as any));else {
    let e: any = (((Zc as any)(n, (n as any).next) as any).map as any)((t: any): any => (((n as any).inline as any) == (null as any) ? (n as any).inline = (t as any).isInline : ((n as any).inline as any) != ((t as any).isInline as any) && ((n as any).err as any)("Mixing inline and block content"), {
      type: "name",
      value: t
    }));
    return (n as any).pos++, ((e as any).length as any) == (1 as any) ? (e as any)[0] : {
      type: "choice",
      exprs: e
    };
  }
}
function tu(this: any, n: any): any {
  let e: any = [[]];
  return (s as any)((i as any)(n, 0), (t as any)()), e;
  function t(this: any): any {
    return (((e as any).push as any)([]) as any) - (1 as any);
  }
  function r(this: any, o: any, l: any, a: any): any {
    let c: any = {
      term: a,
      to: l
    };
    return (((e as any)[o] as any).push as any)(c), c;
  }
  function s(this: any, o: any, l: any): any {
    ((o as any).forEach as any)((a: any): any => (a as any).to = l);
  }
  function i(this: any, o: any, l: any): any {
    if (((o as any).type as any) == ("choice" as any)) return (((o as any).exprs as any).reduce as any)((a: any, c: any): any => ((a as any).concat as any)((i as any)(c, l)), []);
    if (((o as any).type as any) == ("seq" as any)) for (let a: any = 0;; a++) {
      let c: any = (i as any)(((o as any).exprs as any)[a], l);
      if ((a as any) == ((((o as any).exprs as any).length as any) - (1 as any) as any)) return c;
      (s as any)(c, l = (t as any)());
    } else if (((o as any).type as any) == ("star" as any)) {
      let a: any = (t as any)();
      return (r as any)(l, a), (s as any)((i as any)((o as any).expr, a), a), [(r as any)(a)];
    } else if (((o as any).type as any) == ("plus" as any)) {
      let a: any = (t as any)();
      return (s as any)((i as any)((o as any).expr, l), a), (s as any)((i as any)((o as any).expr, a), a), [(r as any)(a)];
    } else {
      if (((o as any).type as any) == ("opt" as any)) return (([(r as any)(l)] as any).concat as any)((i as any)((o as any).expr, l));
      if (((o as any).type as any) == ("range" as any)) {
        let a: any = l;
        for (let c: any = 0; (c as any) < ((o as any).min as any); c++) {
          let u: any = (t as any)();
          (s as any)((i as any)((o as any).expr, a), u), a = u;
        }
        if (((o as any).max as any) == (-1 as any)) (s as any)((i as any)((o as any).expr, a), a);else for (let c: any = (o as any).min; (c as any) < ((o as any).max as any); c++) {
          let u: any = (t as any)();
          (r as any)(a, u), (s as any)((i as any)((o as any).expr, a), u), a = u;
        }
        return [(r as any)(a)];
      } else {
        if (((o as any).type as any) == ("name" as any)) return [(r as any)(l, void 0, (o as any).value)];
        throw new (Error as any)("Unknown expr type");
      }
    }
  }
}
function yl(this: any, n: any, e: any): any {
  return (e as any) - (n as any);
}
function Ri(this: any, n: any, e: any): any {
  let t: any = [];
  return (r as any)(e), ((t as any).sort as any)(yl);
  function r(this: any, s: any): any {
    let i: any = (n as any)[s];
    if (((i as any).length as any) == (1 as any) && !((i as any)[0] as any).term) return (r as any)(((i as any)[0] as any).to);
    ((t as any).push as any)(s);
    for (let o: any = 0; (o as any) < ((i as any).length as any); o++) {
      let {
        term: l,
        to: a
      }: any = (i as any)[o];
      !l && (((t as any).indexOf as any)(a) as any) == (-1 as any) && (r as any)(a);
    }
  }
}
function nu(this: any, n: any): any {
  let e: any = ((Object as any).create as any)(null);
  return (t as any)((Ri as any)(n, 0));
  function t(this: any, r: any): any {
    let s: any = [];
    ((r as any).forEach as any)((o: any): any => {
      (((n as any)[o] as any).forEach as any)(({
        term: l,
        to: a
      }: any): any => {
        if (!l) return;
        let c: any;
        for (let u: any = 0; (u as any) < ((s as any).length as any); u++) (((s as any)[u] as any)[0] as any) == (l as any) && (c = ((s as any)[u] as any)[1]);
        (((Ri as any)(n, a) as any).forEach as any)((u: any): any => {
          c || ((s as any).push as any)([l, c = []]), (((c as any).indexOf as any)(u) as any) == (-1 as any) && ((c as any).push as any)(u);
        });
      });
    });
    let i: any = (e as any)[((r as any).join as any)(",")] = new (ht as any)((((r as any).indexOf as any)(((n as any).length as any) - (1 as any)) as any) > (-1 as any));
    for (let o: any = 0; (o as any) < ((s as any).length as any); o++) {
      let l: any = ((((s as any)[o] as any)[1] as any).sort as any)(yl);
      (((i as any).next as any).push as any)({
        type: ((s as any)[o] as any)[0],
        next: (e as any)[((l as any).join as any)(",")] || (t as any)(l)
      });
    }
    return i;
  }
}
function ru(this: any, n: any, e: any): any {
  for (let t: any = 0, r: any = [n]; (t as any) < ((r as any).length as any); t++) {
    let s: any = (r as any)[t],
      i: any = !(s as any).validEnd,
      o: any = [];
    for (let l: any = 0; (l as any) < (((s as any).next as any).length as any); l++) {
      let {
        type: a,
        next: c
      }: any = ((s as any).next as any)[l];
      ((o as any).push as any)((a as any).name), i && !((a as any).isText || ((a as any).hasRequiredAttrs as any)()) && (i = !1), (((r as any).indexOf as any)(c) as any) == (-1 as any) && ((r as any).push as any)(c);
    }
    i && ((e as any).err as any)((("Only non-generatable nodes (" as any) + (((o as any).join as any)(", ") as any) as any) + (") in a required position (see https://prosemirror.net/docs/guide/#generatable)" as any));
  }
}
function kl(this: any, n: any): any {
  let e: any = ((Object as any).create as any)(null);
  for (let t in n) {
    let r: any = (n as any)[t];
    if (!(r as any).hasDefault) return null;
    (e as any)[t] = (r as any).default;
  }
  return e;
}
function bl(this: any, n: any, e: any): any {
  let t: any = ((Object as any).create as any)(null);
  for (let r in n) {
    let s: any = e && (e as any)[r];
    if ((s as any) === (void 0 as any)) {
      let i: any = (n as any)[r];
      if ((i as any).hasDefault) s = (i as any).default;else throw new (RangeError as any)(("No value supplied for attribute " as any) + (r as any));
    }
    (t as any)[r] = s;
  }
  return t;
}
function xl(this: any, n: any, e: any, t: any, r: any): any {
  for (let s in e) if (!(s in n)) throw new (RangeError as any)(`Unsupported attribute ${s} for ${t} of type ${s}`);
  for (let s in n) {
    let i: any = (n as any)[s];
    (i as any).validate && ((i as any).validate as any)((e as any)[s]);
  }
}
function Sl(this: any, n: any, e: any): any {
  let t: any = ((Object as any).create as any)(null);
  if (e) for (let r in e) (t as any)[r] = new (iu as any)(n, r, (e as any)[r]);
  return t;
}
let Pi: any = class wl {
  declare isText: any;
  declare isBlock: any;
  declare inlineContent: any;
  declare contentMatch: any;
  declare defaultAttrs: any;
  declare attrs: any;
  declare groups: any;
  declare markSet: any;
  declare spec: any;
  declare schema: any;
  declare name: any;
  [key: string]: any;
  constructor(e: any, t: any, r: any) {
    (this as any).name = e, (this as any).schema = t, (this as any).spec = r, (this as any).markSet = null, (this as any).groups = (r as any).group ? (((r as any).group as any).split as any)(" ") : [], (this as any).attrs = (Sl as any)(e, (r as any).attrs), (this as any).defaultAttrs = (kl as any)((this as any).attrs), (this as any).contentMatch = null, (this as any).inlineContent = null, (this as any).isBlock = !((r as any).inline || (e as any) == ("text" as any)), (this as any).isText = (e as any) == ("text" as any);
  }
  get isInline(): any {
    return !(this as any).isBlock;
  }
  get isTextblock(): any {
    return (this as any).isBlock && (this as any).inlineContent;
  }
  get isLeaf(): any {
    return ((this as any).contentMatch as any) == ((ht as any).empty as any);
  }
  get isAtom(): any {
    return (this as any).isLeaf || !!((this as any).spec as any).atom;
  }
  isInGroup(e: any): any {
    return ((((this as any).groups as any).indexOf as any)(e) as any) > (-1 as any);
  }
  get whitespace(): any {
    return ((this as any).spec as any).whitespace || (((this as any).spec as any).code ? "pre" : "normal");
  }
  hasRequiredAttrs(): any {
    for (let e in (this as any).attrs) if ((((this as any).attrs as any)[e] as any).isRequired) return !0;
    return !1;
  }
  compatibleContent(e: any): any {
    return (this as any) == (e as any) || (((this as any).contentMatch as any).compatible as any)((e as any).contentMatch);
  }
  computeAttrs(e: any): any {
    return !e && (this as any).defaultAttrs ? (this as any).defaultAttrs : (bl as any)((this as any).attrs, e);
  }
  create(e: any = null, t: any, r: any): any {
    if ((this as any).isText) throw new (Error as any)("NodeType.create can't construct text nodes");
    return new (Se as any)(this, ((this as any).computeAttrs as any)(e), ((k as any).from as any)(t), ((L as any).setFrom as any)(r));
  }
  createChecked(e: any = null, t: any, r: any): any {
    return t = ((k as any).from as any)(t), ((this as any).checkContent as any)(t), new (Se as any)(this, ((this as any).computeAttrs as any)(e), t, ((L as any).setFrom as any)(r));
  }
  createAndFill(e: any = null, t: any, r: any): any {
    if (e = ((this as any).computeAttrs as any)(e), t = ((k as any).from as any)(t), (t as any).size) {
      let o: any = (((this as any).contentMatch as any).fillBefore as any)(t);
      if (!o) return null;
      t = ((o as any).append as any)(t);
    }
    let s: any = (((this as any).contentMatch as any).matchFragment as any)(t),
      i: any = s && ((s as any).fillBefore as any)((k as any).empty, !0);
    return i ? new (Se as any)(this, e, ((t as any).append as any)(i), ((L as any).setFrom as any)(r)) : null;
  }
  validContent(e: any): any {
    let t: any = (((this as any).contentMatch as any).matchFragment as any)(e);
    if (!t || !(t as any).validEnd) return !1;
    for (let r: any = 0; (r as any) < ((e as any).childCount as any); r++) if (!((this as any).allowsMarks as any)((((e as any).child as any)(r) as any).marks)) return !1;
    return !0;
  }
  checkContent(e: any): any {
    if (!((this as any).validContent as any)(e)) throw new (RangeError as any)(`Invalid content for node ${(this as any).name}: ${((((e as any).toString as any)() as any).slice as any)(0, 50)}`);
  }
  checkAttrs(e: any): any {
    (xl as any)((this as any).attrs, e, "node", (this as any).name);
  }
  allowsMarkType(e: any): any {
    return ((this as any).markSet as any) == (null as any) || ((((this as any).markSet as any).indexOf as any)(e) as any) > (-1 as any);
  }
  allowsMarks(e: any): any {
    if (((this as any).markSet as any) == (null as any)) return !0;
    for (let t: any = 0; (t as any) < ((e as any).length as any); t++) if (!((this as any).allowsMarkType as any)(((e as any)[t] as any).type)) return !1;
    return !0;
  }
  allowedMarks(e: any): any {
    if (((this as any).markSet as any) == (null as any)) return e;
    let t: any;
    for (let r: any = 0; (r as any) < ((e as any).length as any); r++) ((this as any).allowsMarkType as any)(((e as any)[r] as any).type) ? t && ((t as any).push as any)((e as any)[r]) : t || (t = ((e as any).slice as any)(0, r));
    return t ? (t as any).length ? t : (L as any).none : e;
  }
  static compile(e: any, t: any): any {
    let r: any = ((Object as any).create as any)(null);
    ((e as any).forEach as any)((i: any, o: any): any => (r as any)[i] = new (wl as any)(i, t, o));
    let s: any = ((t as any).spec as any).topNode || "doc";
    if (!(r as any)[s]) throw new (RangeError as any)((("Schema is missing its top node type ('" as any) + (s as any) as any) + ("')" as any));
    if (!(r as any).text) throw new (RangeError as any)("Every schema needs a 'text' type");
    for (let i in ((r as any).text as any).attrs) throw new (RangeError as any)("The text node type should not have attributes");
    return r;
  }
};
function su(this: any, n: any, e: any, t: any): any {
  let r: any = ((t as any).split as any)("|");
  return (s: any): any => {
    let i: any = (s as any) === (null as any) ? "null" : typeof s;
    if ((((r as any).indexOf as any)(i) as any) < (0 as any)) throw new (RangeError as any)(`Expected value of type ${r} for attribute ${e} on type ${n}, got ${i}`);
  };
}
class iu {
  declare validate: any;
  declare default: any;
  declare hasDefault: any;
  [key: string]: any;
  constructor(e: any, t: any, r: any) {
    (this as any).hasDefault = ((((Object as any).prototype as any).hasOwnProperty as any).call as any)(r, "default"), (this as any).default = (r as any).default, (this as any).validate = (typeof (r as any).validate as any) == ("string" as any) ? (su as any)(e, t, (r as any).validate) : (r as any).validate;
  }
  get isRequired(): any {
    return !(this as any).hasDefault;
  }
}
class Er {
  declare instance: any;
  declare excluded: any;
  declare attrs: any;
  declare spec: any;
  declare schema: any;
  declare rank: any;
  declare name: any;
  [key: string]: any;
  constructor(e: any, t: any, r: any, s: any) {
    (this as any).name = e, (this as any).rank = t, (this as any).schema = r, (this as any).spec = s, (this as any).attrs = (Sl as any)(e, (s as any).attrs), (this as any).excluded = null;
    let i: any = (kl as any)((this as any).attrs);
    (this as any).instance = i ? new (L as any)(this, i) : null;
  }
  create(e: any = null): any {
    return !e && (this as any).instance ? (this as any).instance : new (L as any)(this, (bl as any)((this as any).attrs, e));
  }
  static compile(e: any, t: any): any {
    let r: any = ((Object as any).create as any)(null),
      s: any = 0;
    return ((e as any).forEach as any)((i: any, o: any): any => (r as any)[i] = new (Er as any)(i, s++, t, o)), r;
  }
  removeFromSet(e: any): any {
    for (var t: any = 0; (t as any) < ((e as any).length as any); t++) (((e as any)[t] as any).type as any) == (this as any) && (e = ((((e as any).slice as any)(0, t) as any).concat as any)(((e as any).slice as any)((t as any) + (1 as any))), t--);
    return e;
  }
  isInSet(e: any): any {
    for (let t: any = 0; (t as any) < ((e as any).length as any); t++) if ((((e as any)[t] as any).type as any) == (this as any)) return (e as any)[t];
  }
  checkAttrs(e: any): any {
    (xl as any)((this as any).attrs, e, "mark", (this as any).name);
  }
  excludes(e: any): any {
    return ((((this as any).excluded as any).indexOf as any)(e) as any) > (-1 as any);
  }
}
class Cl {
  declare topNodeType: any;
  declare marks: any;
  declare nodes: any;
  declare spec: any;
  declare cached: any;
  declare linebreakReplacement: any;
  [key: string]: any;
  constructor(e: any) {
    (this as any).linebreakReplacement = null, (this as any).cached = ((Object as any).create as any)(null);
    let t: any = (this as any).spec = {};
    for (let s in e) (t as any)[s] = (e as any)[s];
    (t as any).nodes = ((Y as any).from as any)((e as any).nodes), (t as any).marks = ((Y as any).from as any)((e as any).marks || {}), (this as any).nodes = ((Pi as any).compile as any)(((this as any).spec as any).nodes, this), (this as any).marks = ((Er as any).compile as any)(((this as any).spec as any).marks, this);
    let r: any = ((Object as any).create as any)(null);
    for (let s in (this as any).nodes) {
      if (s in (this as any).marks) throw new (RangeError as any)((s as any) + (" can not be both a node and a mark" as any));
      let i: any = ((this as any).nodes as any)[s],
        o: any = ((i as any).spec as any).content || "",
        l: any = ((i as any).spec as any).marks;
      if ((i as any).contentMatch = (r as any)[o] || ((r as any)[o] = ((ht as any).parse as any)(o, (this as any).nodes)), (i as any).inlineContent = ((i as any).contentMatch as any).inlineContent, ((i as any).spec as any).linebreakReplacement) {
        if ((this as any).linebreakReplacement) throw new (RangeError as any)("Multiple linebreak nodes defined");
        if (!(i as any).isInline || !(i as any).isLeaf) throw new (RangeError as any)("Linebreak replacement nodes must be inline leaf nodes");
        (this as any).linebreakReplacement = i;
      }
      (i as any).markSet = (l as any) == ("_" as any) ? null : l ? (Li as any)(this, ((l as any).split as any)(" ")) : (l as any) == ("" as any) || !(i as any).inlineContent ? [] : null;
    }
    for (let s in (this as any).marks) {
      let i: any = ((this as any).marks as any)[s],
        o: any = ((i as any).spec as any).excludes;
      (i as any).excluded = (o as any) == (null as any) ? [i] : (o as any) == ("" as any) ? [] : (Li as any)(this, ((o as any).split as any)(" "));
    }
    (this as any).nodeFromJSON = (((this as any).nodeFromJSON as any).bind as any)(this), (this as any).markFromJSON = (((this as any).markFromJSON as any).bind as any)(this), (this as any).topNodeType = ((this as any).nodes as any)[((this as any).spec as any).topNode || "doc"], ((this as any).cached as any).wrappings = ((Object as any).create as any)(null);
  }
  node(e: any, t: any = null, r: any, s: any): any {
    if ((typeof e as any) == ("string" as any)) e = ((this as any).nodeType as any)(e);else if (e instanceof Pi) {
      if (((e as any).schema as any) != (this as any)) throw new (RangeError as any)((("Node type from different schema used (" as any) + ((e as any).name as any) as any) + (")" as any));
    } else throw new (RangeError as any)(("Invalid node type: " as any) + (e as any));
    return ((e as any).createChecked as any)(t, r, s);
  }
  text(e: any, t: any): any {
    let r: any = ((this as any).nodes as any).text;
    return new (Vn as any)(r, (r as any).defaultAttrs, e, ((L as any).setFrom as any)(t));
  }
  mark(e: any, t: any): any {
    return (typeof e as any) == ("string" as any) && (e = ((this as any).marks as any)[e]), ((e as any).create as any)(t);
  }
  nodeFromJSON(e: any): any {
    return ((Se as any).fromJSON as any)(this, e);
  }
  markFromJSON(e: any): any {
    return ((L as any).fromJSON as any)(this, e);
  }
  nodeType(e: any): any {
    let t: any = ((this as any).nodes as any)[e];
    if (!t) throw new (RangeError as any)(("Unknown node type: " as any) + (e as any));
    return t;
  }
}
function Li(this: any, n: any, e: any): any {
  let t: any = [];
  for (let r: any = 0; (r as any) < ((e as any).length as any); r++) {
    let s: any = (e as any)[r],
      i: any = ((n as any).marks as any)[s],
      o: any = i;
    if (i) ((t as any).push as any)(i);else for (let l in (n as any).marks) {
      let a: any = ((n as any).marks as any)[l];
      ((s as any) == ("_" as any) || ((a as any).spec as any).group && (((((((a as any).spec as any).group as any).split as any)(" ") as any).indexOf as any)(s) as any) > (-1 as any)) && ((t as any).push as any)(o = a);
    }
    if (!o) throw new (SyntaxError as any)((("Unknown mark type: '" as any) + ((e as any)[r] as any) as any) + ("'" as any));
  }
  return t;
}
function ou(this: any, n: any): any {
  return ((n as any).tag as any) != (null as any);
}
function lu(this: any, n: any): any {
  return ((n as any).style as any) != (null as any);
}
class Le {
  declare normalizeLists: any;
  declare matchedStyles: any;
  declare styles: any;
  declare tags: any;
  declare rules: any;
  declare schema: any;
  [key: string]: any;
  constructor(e: any, t: any) {
    (this as any).schema = e, (this as any).rules = t, (this as any).tags = [], (this as any).styles = [];
    let r: any = (this as any).matchedStyles = [];
    ((t as any).forEach as any)((s: any): any => {
      if ((ou as any)(s)) (((this as any).tags as any).push as any)(s);else if ((lu as any)(s)) {
        let i: any = (((/[^=]*/ as any).exec as any)((s as any).style) as any)[0];
        (((r as any).indexOf as any)(i) as any) < (0 as any) && ((r as any).push as any)(i), (((this as any).styles as any).push as any)(s);
      }
    }), (this as any).normalizeLists = !(((this as any).tags as any).some as any)((s: any): any => {
      if (!((/^(ul|ol)\b/ as any).test as any)((s as any).tag) || !(s as any).node) return !1;
      let i: any = ((e as any).nodes as any)[(s as any).node];
      return (((i as any).contentMatch as any).matchType as any)(i);
    });
  }
  parse(e: any, t: any = {}): any {
    let r: any = new (Bi as any)(this, t, !1);
    return ((r as any).addAll as any)(e, (L as any).none, (t as any).from, (t as any).to), ((r as any).finish as any)();
  }
  parseSlice(e: any, t: any = {}): any {
    let r: any = new (Bi as any)(this, t, !0);
    return ((r as any).addAll as any)(e, (L as any).none, (t as any).from, (t as any).to), ((w as any).maxOpen as any)(((r as any).finish as any)());
  }
  matchTag(e: any, t: any, r: any): any {
    for (let s: any = r ? ((((this as any).tags as any).indexOf as any)(r) as any) + (1 as any) : 0; (s as any) < (((this as any).tags as any).length as any); s++) {
      let i: any = ((this as any).tags as any)[s];
      if ((uu as any)(e, (i as any).tag) && (((i as any).namespace as any) === (void 0 as any) || ((e as any).namespaceURI as any) == ((i as any).namespace as any)) && (!(i as any).context || ((t as any).matchesContext as any)((i as any).context))) {
        if ((i as any).getAttrs) {
          let o: any = ((i as any).getAttrs as any)(e);
          if ((o as any) === (!1 as any)) continue;
          (i as any).attrs = o || void 0;
        }
        return i;
      }
    }
  }
  matchStyle(e: any, t: any, r: any, s: any): any {
    for (let i: any = s ? ((((this as any).styles as any).indexOf as any)(s) as any) + (1 as any) : 0; (i as any) < (((this as any).styles as any).length as any); i++) {
      let o: any = ((this as any).styles as any)[i],
        l: any = (o as any).style;
      if (!((((l as any).indexOf as any)(e) as any) != (0 as any) || (o as any).context && !((r as any).matchesContext as any)((o as any).context) || ((l as any).length as any) > ((e as any).length as any) && ((((l as any).charCodeAt as any)((e as any).length) as any) != (61 as any) || (((l as any).slice as any)(((e as any).length as any) + (1 as any)) as any) != (t as any)))) {
        if ((o as any).getAttrs) {
          let a: any = ((o as any).getAttrs as any)(t);
          if ((a as any) === (!1 as any)) continue;
          (o as any).attrs = a || void 0;
        }
        return o;
      }
    }
  }
  static schemaRules(e: any): any {
    let t: any = [];
    function r(this: any, s: any): any {
      let i: any = ((s as any).priority as any) == (null as any) ? 50 : (s as any).priority,
        o: any = 0;
      for (; (o as any) < ((t as any).length as any); o++) {
        let l: any = (t as any)[o];
        if (((((l as any).priority as any) == (null as any) ? 50 : (l as any).priority) as any) < (i as any)) break;
      }
      ((t as any).splice as any)(o, 0, s);
    }
    for (let s in (e as any).marks) {
      let i: any = ((((e as any).marks as any)[s] as any).spec as any).parseDOM;
      i && ((i as any).forEach as any)((o: any): any => {
        (r as any)(o = ($i as any)(o)), (o as any).mark || (o as any).ignore || (o as any).clearMark || ((o as any).mark = s);
      });
    }
    for (let s in (e as any).nodes) {
      let i: any = ((((e as any).nodes as any)[s] as any).spec as any).parseDOM;
      i && ((i as any).forEach as any)((o: any): any => {
        (r as any)(o = ($i as any)(o)), (o as any).node || (o as any).ignore || (o as any).mark || ((o as any).node = s);
      });
    }
    return t;
  }
  static fromSchema(e: any): any {
    return ((e as any).cached as any).domParser || (((e as any).cached as any).domParser = new (Le as any)(e, ((Le as any).schemaRules as any)(e)));
  }
}
const Ml: any = {
    address: !0,
    article: !0,
    aside: !0,
    blockquote: !0,
    canvas: !0,
    dd: !0,
    div: !0,
    dl: !0,
    fieldset: !0,
    figcaption: !0,
    figure: !0,
    footer: !0,
    form: !0,
    h1: !0,
    h2: !0,
    h3: !0,
    h4: !0,
    h5: !0,
    h6: !0,
    header: !0,
    hgroup: !0,
    hr: !0,
    li: !0,
    noscript: !0,
    ol: !0,
    output: !0,
    p: !0,
    pre: !0,
    section: !0,
    table: !0,
    tfoot: !0,
    ul: !0
  },
  au: any = {
    head: !0,
    noscript: !0,
    object: !0,
    script: !0,
    style: !0,
    title: !0
  },
  El: any = {
    ol: !0,
    ul: !0
  },
  an: number = 1,
  ys: number = 2,
  Xt: number = 4;
function zi(this: any, n: any, e: any, t: any): any {
  return (e as any) != (null as any) ? ((e ? an : 0) as any) | (((e as any) === ("full" as any) ? ys : 0) as any) : n && ((n as any).whitespace as any) == ("pre" as any) ? (an as any) | (ys as any) : (t as any) & (~Xt as any);
}
class wn {
  declare match: any;
  declare activeMarks: any;
  declare content: any;
  declare options: any;
  declare solid: any;
  declare marks: any;
  declare attrs: any;
  declare type: any;
  [key: string]: any;
  constructor(e: any, t: any, r: any, s: any, i: any, o: any) {
    (this as any).type = e, (this as any).attrs = t, (this as any).marks = r, (this as any).solid = s, (this as any).options = o, (this as any).content = [], (this as any).activeMarks = (L as any).none, (this as any).match = i || ((o as any) & (Xt as any) ? null : (e as any).contentMatch);
  }
  findWrapping(e: any): any {
    if (!(this as any).match) {
      if (!(this as any).type) return [];
      let t: any = ((((this as any).type as any).contentMatch as any).fillBefore as any)(((k as any).from as any)(e));
      if (t) (this as any).match = ((((this as any).type as any).contentMatch as any).matchFragment as any)(t);else {
        let r: any = ((this as any).type as any).contentMatch,
          s: any;
        return (s = ((r as any).findWrapping as any)((e as any).type)) ? ((this as any).match = r, s) : null;
      }
    }
    return (((this as any).match as any).findWrapping as any)((e as any).type);
  }
  finish(e: any): any {
    if (!(((this as any).options as any) & (an as any))) {
      let r: any = ((this as any).content as any)[(((this as any).content as any).length as any) - (1 as any)],
        s: any;
      if (r && (r as any).isText && (s = ((/[ \t\r\n\u000c]+$/ as any).exec as any)((r as any).text))) {
        let i: any = r;
        (((r as any).text as any).length as any) == (((s as any)[0] as any).length as any) ? (((this as any).content as any).pop as any)() : ((this as any).content as any)[(((this as any).content as any).length as any) - (1 as any)] = ((i as any).withText as any)((((i as any).text as any).slice as any)(0, (((i as any).text as any).length as any) - (((s as any)[0] as any).length as any)));
      }
    }
    let t: any = ((k as any).from as any)((this as any).content);
    return !e && (this as any).match && (t = ((t as any).append as any)((((this as any).match as any).fillBefore as any)((k as any).empty, !0))), (this as any).type ? (((this as any).type as any).create as any)((this as any).attrs, t, (this as any).marks) : t;
  }
  inlineContext(e: any): any {
    return (this as any).type ? ((this as any).type as any).inlineContent : ((this as any).content as any).length ? (((this as any).content as any)[0] as any).isInline : (e as any).parentNode && !((Ml as any).hasOwnProperty as any)(((((e as any).parentNode as any).nodeName as any).toLowerCase as any)());
  }
}
class Bi {
  declare needsBlock: any;
  declare find: any;
  declare nodes: any;
  declare localPreserveWS: any;
  declare open: any;
  declare isOpen: any;
  declare options: any;
  declare parser: any;
  [key: string]: any;
  constructor(e: any, t: any, r: any) {
    (this as any).parser = e, (this as any).options = t, (this as any).isOpen = r, (this as any).open = 0, (this as any).localPreserveWS = !1;
    let s: any = (t as any).topNode,
      i: any,
      o: any = ((zi as any)(null, (t as any).preserveWhitespace, 0) as any) | ((r ? Xt : 0) as any);
    s ? i = new (wn as any)((s as any).type, (s as any).attrs, (L as any).none, !0, (t as any).topMatch || ((s as any).type as any).contentMatch, o) : r ? i = new (wn as any)(null, null, (L as any).none, !0, null, o) : i = new (wn as any)(((e as any).schema as any).topNodeType, null, (L as any).none, !0, null, o), (this as any).nodes = [i], (this as any).find = (t as any).findPositions, (this as any).needsBlock = !1;
  }
  get top(): any {
    return ((this as any).nodes as any)[(this as any).open];
  }
  addDOM(e: any, t: any): any {
    ((e as any).nodeType as any) == (3 as any) ? ((this as any).addTextNode as any)(e, t) : ((e as any).nodeType as any) == (1 as any) && ((this as any).addElement as any)(e, t);
  }
  addTextNode(e: any, t: any): any {
    let r: any = (e as any).nodeValue,
      s: any = (this as any).top,
      i: any = ((s as any).options as any) & (ys as any) ? "full" : (this as any).localPreserveWS || ((((s as any).options as any) & (an as any)) as any) > (0 as any);
    if ((i as any) === ("full" as any) || ((s as any).inlineContext as any)(e) || ((/[^ \t\r\n\u000c]/ as any).test as any)(r)) {
      if (i) (i as any) !== ("full" as any) ? r = ((r as any).replace as any)(/\r?\n|\r/g, " ") : r = ((r as any).replace as any)(/\r\n?/g, `
`);else if (r = ((r as any).replace as any)(/[ \t\r\n\u000c]+/g, " "), ((/^[ \t\r\n\u000c]/ as any).test as any)(r) && ((this as any).open as any) == ((((this as any).nodes as any).length as any) - (1 as any) as any)) {
        let o: any = ((s as any).content as any)[(((s as any).content as any).length as any) - (1 as any)],
          l: any = (e as any).previousSibling;
        (!o || l && ((l as any).nodeName as any) == ("BR" as any) || (o as any).isText && ((/[ \t\r\n\u000c]$/ as any).test as any)((o as any).text)) && (r = ((r as any).slice as any)(1));
      }
      r && ((this as any).insertNode as any)(((((this as any).parser as any).schema as any).text as any)(r), t, !((/\S/ as any).test as any)(r)), ((this as any).findInText as any)(e);
    } else ((this as any).findInside as any)(e);
  }
  addElement(e: any, t: any, r: any): any {
    let s: any = (this as any).localPreserveWS,
      i: any = (this as any).top;
    (((e as any).tagName as any) == ("PRE" as any) || ((/pre/ as any).test as any)((e as any).style && ((e as any).style as any).whiteSpace)) && ((this as any).localPreserveWS = !0);
    let o: any = (((e as any).nodeName as any).toLowerCase as any)(),
      l: any;
    ((El as any).hasOwnProperty as any)(o) && ((this as any).parser as any).normalizeLists && (cu as any)(e);
    let a: any = ((this as any).options as any).ruleFromNode && (((this as any).options as any).ruleFromNode as any)(e) || (l = (((this as any).parser as any).matchTag as any)(e, this, r));
    e: if (a ? (a as any).ignore : ((au as any).hasOwnProperty as any)(o)) ((this as any).findInside as any)(e), ((this as any).ignoreFallback as any)(e, t);else if (!a || (a as any).skip || (a as any).closeParent) {
      a && (a as any).closeParent ? (this as any).open = ((Math as any).max as any)(0, ((this as any).open as any) - (1 as any)) : a && ((a as any).skip as any).nodeType && (e = (a as any).skip);
      let c: any,
        u: any = (this as any).needsBlock;
      if (((Ml as any).hasOwnProperty as any)(o)) ((i as any).content as any).length && (((i as any).content as any)[0] as any).isInline && (this as any).open && ((this as any).open--, i = (this as any).top), c = !0, (i as any).type || ((this as any).needsBlock = !0);else if (!(e as any).firstChild) {
        ((this as any).leafFallback as any)(e, t);
        break e;
      }
      let d: any = a && (a as any).skip ? t : ((this as any).readStyles as any)(e, t);
      d && ((this as any).addAll as any)(e, d), c && ((this as any).sync as any)(i), (this as any).needsBlock = u;
    } else {
      let c: any = ((this as any).readStyles as any)(e, t);
      c && ((this as any).addElementByRule as any)(e, a, c, ((a as any).consuming as any) === (!1 as any) ? l : void 0);
    }
    (this as any).localPreserveWS = s;
  }
  leafFallback(e: any, t: any): any {
    ((e as any).nodeName as any) == ("BR" as any) && ((this as any).top as any).type && (((this as any).top as any).type as any).inlineContent && ((this as any).addTextNode as any)((((e as any).ownerDocument as any).createTextNode as any)(`
`), t);
  }
  ignoreFallback(e: any, t: any): any {
    ((e as any).nodeName as any) == ("BR" as any) && (!((this as any).top as any).type || !(((this as any).top as any).type as any).inlineContent) && ((this as any).findPlace as any)(((((this as any).parser as any).schema as any).text as any)("-"), t, !0);
  }
  readStyles(e: any, t: any): any {
    let r: any = (e as any).style;
    if (r && (r as any).length) for (let s: any = 0; (s as any) < ((((this as any).parser as any).matchedStyles as any).length as any); s++) {
      let i: any = (((this as any).parser as any).matchedStyles as any)[s],
        o: any = ((r as any).getPropertyValue as any)(i);
      if (o) for (let l: any = void 0;;) {
        let a: any = (((this as any).parser as any).matchStyle as any)(i, o, this, l);
        if (!a) break;
        if ((a as any).ignore) return null;
        if ((a as any).clearMark ? t = ((t as any).filter as any)((c: any): any => !((a as any).clearMark as any)(c)) : t = ((t as any).concat as any)(((((((this as any).parser as any).schema as any).marks as any)[(a as any).mark] as any).create as any)((a as any).attrs)), ((a as any).consuming as any) === (!1 as any)) l = a;else break;
      }
    }
    return t;
  }
  addElementByRule(e: any, t: any, r: any, s: any): any {
    let i: any, o: any;
    if ((t as any).node) {
      if (o = ((((this as any).parser as any).schema as any).nodes as any)[(t as any).node], (o as any).isLeaf) ((this as any).insertNode as any)(((o as any).create as any)((t as any).attrs), r, ((e as any).nodeName as any) == ("BR" as any)) || ((this as any).leafFallback as any)(e, r);else {
        let a: any = ((this as any).enter as any)(o, (t as any).attrs || null, r, (t as any).preserveWhitespace);
        a && (i = !0, r = a);
      }
    } else {
      let a: any = ((((this as any).parser as any).schema as any).marks as any)[(t as any).mark];
      r = ((r as any).concat as any)(((a as any).create as any)((t as any).attrs));
    }
    let l: any = (this as any).top;
    if (o && (o as any).isLeaf) ((this as any).findInside as any)(e);else if (s) ((this as any).addElement as any)(e, r, s);else if ((t as any).getContent) ((this as any).findInside as any)(e), ((((t as any).getContent as any)(e, ((this as any).parser as any).schema) as any).forEach as any)((a: any): any => ((this as any).insertNode as any)(a, r, !1));else {
      let a: any = e;
      (typeof (t as any).contentElement as any) == ("string" as any) ? a = ((e as any).querySelector as any)((t as any).contentElement) : (typeof (t as any).contentElement as any) == ("function" as any) ? a = ((t as any).contentElement as any)(e) : (t as any).contentElement && (a = (t as any).contentElement), ((this as any).findAround as any)(e, a, !0), ((this as any).addAll as any)(a, r), ((this as any).findAround as any)(e, a, !1);
    }
    i && ((this as any).sync as any)(l) && (this as any).open--;
  }
  addAll(e: any, t: any, r: any, s: any): any {
    let i: any = r || 0;
    for (let o: any = r ? ((e as any).childNodes as any)[r] : (e as any).firstChild, l: any = (s as any) == (null as any) ? null : ((e as any).childNodes as any)[s]; (o as any) != (l as any); o = (o as any).nextSibling, ++i) ((this as any).findAtPoint as any)(e, i), ((this as any).addDOM as any)(o, t);
    ((this as any).findAtPoint as any)(e, i);
  }
  findPlace(e: any, t: any, r: any): any {
    let s: any, i: any;
    for (let o: any = (this as any).open, l: any = 0; (o as any) >= (0 as any); o--) {
      let a: any = ((this as any).nodes as any)[o],
        c: any = ((a as any).findWrapping as any)(e);
      if (c && (!s || ((s as any).length as any) > (((c as any).length as any) + (l as any) as any)) && (s = c, i = a, !(c as any).length)) break;
      if ((a as any).solid) {
        if (r) break;
        l += 2;
      }
    }
    if (!s) return null;
    ((this as any).sync as any)(i);
    for (let o: any = 0; (o as any) < ((s as any).length as any); o++) t = ((this as any).enterInner as any)((s as any)[o], null, t, !1);
    return t;
  }
  insertNode(e: any, t: any, r: any): any {
    if ((e as any).isInline && (this as any).needsBlock && !((this as any).top as any).type) {
      let i: any = ((this as any).textblockFromContext as any)();
      i && (t = ((this as any).enterInner as any)(i, null, t));
    }
    let s: any = ((this as any).findPlace as any)(e, t, r);
    if (s) {
      ((this as any).closeExtra as any)();
      let i: any = (this as any).top;
      (i as any).match && ((i as any).match = (((i as any).match as any).matchType as any)((e as any).type));
      let o: any = (L as any).none;
      for (let l of ((s as any).concat as any)((e as any).marks)) ((i as any).type ? (((i as any).type as any).allowsMarkType as any)((l as any).type) : (Fi as any)((l as any).type, (e as any).type)) && (o = ((l as any).addToSet as any)(o));
      return (((i as any).content as any).push as any)(((e as any).mark as any)(o)), !0;
    }
    return !1;
  }
  enter(e: any, t: any, r: any, s: any): any {
    let i: any = ((this as any).findPlace as any)(((e as any).create as any)(t), r, !1);
    return i && (i = ((this as any).enterInner as any)(e, t, r, !0, s)), i;
  }
  enterInner(e: any, t: any, r: any, s: any = !1, i: any): any {
    ((this as any).closeExtra as any)();
    let o: any = (this as any).top;
    (o as any).match = (o as any).match && (((o as any).match as any).matchType as any)(e);
    let l: any = (zi as any)(e, i, (o as any).options);
    ((o as any).options as any) & (Xt as any) && (((o as any).content as any).length as any) == (0 as any) && (l |= Xt);
    let a: any = (L as any).none;
    return r = ((r as any).filter as any)((c: any): any => ((o as any).type ? (((o as any).type as any).allowsMarkType as any)((c as any).type) : (Fi as any)((c as any).type, e)) ? (a = ((c as any).addToSet as any)(a), !1) : !0), (((this as any).nodes as any).push as any)(new (wn as any)(e, t, a, s, null, l)), (this as any).open++, r;
  }
  closeExtra(e: any = !1): any {
    let t: any = (((this as any).nodes as any).length as any) - (1 as any);
    if ((t as any) > ((this as any).open as any)) {
      for (; (t as any) > ((this as any).open as any); t--) (((((this as any).nodes as any)[(t as any) - (1 as any)] as any).content as any).push as any)(((((this as any).nodes as any)[t] as any).finish as any)(e));
      ((this as any).nodes as any).length = ((this as any).open as any) + (1 as any);
    }
  }
  finish(): any {
    return (this as any).open = 0, ((this as any).closeExtra as any)((this as any).isOpen), ((((this as any).nodes as any)[0] as any).finish as any)(!!((this as any).isOpen || ((this as any).options as any).topOpen));
  }
  sync(e: any): any {
    for (let t: any = (this as any).open; (t as any) >= (0 as any); t--) {
      if ((((this as any).nodes as any)[t] as any) == (e as any)) return (this as any).open = t, !0;
      (this as any).localPreserveWS && ((((this as any).nodes as any)[t] as any).options |= an);
    }
    return !1;
  }
  get currentPos(): any {
    ((this as any).closeExtra as any)();
    let e: any = 0;
    for (let t: any = (this as any).open; (t as any) >= (0 as any); t--) {
      let r: any = (((this as any).nodes as any)[t] as any).content;
      for (let s: any = ((r as any).length as any) - (1 as any); (s as any) >= (0 as any); s--) e += ((r as any)[s] as any).nodeSize;
      t && e++;
    }
    return e;
  }
  findAtPoint(e: any, t: any): any {
    if ((this as any).find) for (let r: any = 0; (r as any) < (((this as any).find as any).length as any); r++) ((((this as any).find as any)[r] as any).node as any) == (e as any) && ((((this as any).find as any)[r] as any).offset as any) == (t as any) && ((((this as any).find as any)[r] as any).pos = (this as any).currentPos);
  }
  findInside(e: any): any {
    if ((this as any).find) for (let t: any = 0; (t as any) < (((this as any).find as any).length as any); t++) ((((this as any).find as any)[t] as any).pos as any) == (null as any) && ((e as any).nodeType as any) == (1 as any) && ((e as any).contains as any)((((this as any).find as any)[t] as any).node) && ((((this as any).find as any)[t] as any).pos = (this as any).currentPos);
  }
  findAround(e: any, t: any, r: any): any {
    if ((e as any) != (t as any) && (this as any).find) for (let s: any = 0; (s as any) < (((this as any).find as any).length as any); s++) ((((this as any).find as any)[s] as any).pos as any) == (null as any) && ((e as any).nodeType as any) == (1 as any) && ((e as any).contains as any)((((this as any).find as any)[s] as any).node) && (((t as any).compareDocumentPosition as any)((((this as any).find as any)[s] as any).node) as any) & ((r ? 2 : 4) as any) && ((((this as any).find as any)[s] as any).pos = (this as any).currentPos);
  }
  findInText(e: any): any {
    if ((this as any).find) for (let t: any = 0; (t as any) < (((this as any).find as any).length as any); t++) ((((this as any).find as any)[t] as any).node as any) == (e as any) && ((((this as any).find as any)[t] as any).pos = ((this as any).currentPos as any) - ((((e as any).nodeValue as any).length as any) - ((((this as any).find as any)[t] as any).offset as any) as any));
  }
  matchesContext(e: any): any {
    if ((((e as any).indexOf as any)("|") as any) > (-1 as any)) return ((((e as any).split as any)(/\s*\|\s*/) as any).some as any)((this as any).matchesContext, this);
    let t: any = ((e as any).split as any)("/"),
      r: any = ((this as any).options as any).context,
      s: any = !(this as any).isOpen && (!r || (((r as any).parent as any).type as any) == ((((this as any).nodes as any)[0] as any).type as any)),
      i: any = (-(r ? ((r as any).depth as any) + (1 as any) : 0) as any) + ((s ? 0 : 1) as any),
      o: any = (l: any, a: any): any => {
        for (; (l as any) >= (0 as any); l--) {
          let c: any = (t as any)[l];
          if ((c as any) == ("" as any)) {
            if ((l as any) == (((t as any).length as any) - (1 as any) as any) || (l as any) == (0 as any)) continue;
            for (; (a as any) >= (i as any); a--) if ((o as any)((l as any) - (1 as any), a)) return !0;
            return !1;
          } else {
            let u: any = (a as any) > (0 as any) || (a as any) == (0 as any) && s ? (((this as any).nodes as any)[a] as any).type : r && (a as any) >= (i as any) ? (((r as any).node as any)((a as any) - (i as any)) as any).type : null;
            if (!u || ((u as any).name as any) != (c as any) && !((u as any).isInGroup as any)(c)) return !1;
            a--;
          }
        }
        return !0;
      };
    return (o as any)(((t as any).length as any) - (1 as any), (this as any).open);
  }
  textblockFromContext(): any {
    let e: any = ((this as any).options as any).context;
    if (e) for (let t: any = (e as any).depth; (t as any) >= (0 as any); t--) {
      let r: any = (((((e as any).node as any)(t) as any).contentMatchAt as any)(((e as any).indexAfter as any)(t)) as any).defaultType;
      if (r && (r as any).isTextblock && (r as any).defaultAttrs) return r;
    }
    for (let t in (((this as any).parser as any).schema as any).nodes) {
      let r: any = ((((this as any).parser as any).schema as any).nodes as any)[t];
      if ((r as any).isTextblock && (r as any).defaultAttrs) return r;
    }
  }
}
function cu(this: any, n: any): any {
  for (let e: any = (n as any).firstChild, t: any = null; e; e = (e as any).nextSibling) {
    let r: any = ((e as any).nodeType as any) == (1 as any) ? (((e as any).nodeName as any).toLowerCase as any)() : null;
    r && ((El as any).hasOwnProperty as any)(r) && t ? (((t as any).appendChild as any)(e), e = t) : (r as any) == ("li" as any) ? t = e : r && (t = null);
  }
}
function uu(this: any, n: any, e: any): any {
  return ((((n as any).matches || (n as any).msMatchesSelector || (n as any).webkitMatchesSelector || (n as any).mozMatchesSelector) as any).call as any)(n, e);
}
function $i(this: any, n: any): any {
  let e: any = {};
  for (let t in n) (e as any)[t] = (n as any)[t];
  return e;
}
function Fi(this: any, n: any, e: any): any {
  let t: any = ((e as any).schema as any).nodes;
  for (let r in t) {
    let s: any = (t as any)[r];
    if (!((s as any).allowsMarkType as any)(n)) continue;
    let i: any = [],
      o: any = (l: any): any => {
        ((i as any).push as any)(l);
        for (let a: any = 0; (a as any) < ((l as any).edgeCount as any); a++) {
          let {
            type: c,
            next: u
          }: any = ((l as any).edge as any)(a);
          if ((c as any) == (e as any) || (((i as any).indexOf as any)(u) as any) < (0 as any) && (o as any)(u)) return !0;
        }
      };
    if ((o as any)((s as any).contentMatch)) return !0;
  }
}
class kt {
  declare marks: any;
  declare nodes: any;
  [key: string]: any;
  constructor(e: any, t: any) {
    (this as any).nodes = e, (this as any).marks = t;
  }
  serializeFragment(e: any, t: any = {}, r: any): any {
    r || (r = (((jr as any)(t) as any).createDocumentFragment as any)());
    let s: any = r,
      i: any = [];
    return ((e as any).forEach as any)((o: any): any => {
      if ((i as any).length || ((o as any).marks as any).length) {
        let l: any = 0,
          a: any = 0;
        for (; (l as any) < ((i as any).length as any) && (a as any) < (((o as any).marks as any).length as any);) {
          let c: any = ((o as any).marks as any)[a];
          if (!((this as any).marks as any)[((c as any).type as any).name]) {
            a++;
            continue;
          }
          if (!((c as any).eq as any)(((i as any)[l] as any)[0]) || ((((c as any).type as any).spec as any).spanning as any) === (!1 as any)) break;
          l++, a++;
        }
        for (; (l as any) < ((i as any).length as any);) s = (((i as any).pop as any)() as any)[1];
        for (; (a as any) < (((o as any).marks as any).length as any);) {
          let c: any = ((o as any).marks as any)[a++],
            u: any = ((this as any).serializeMark as any)(c, (o as any).isInline, t);
          u && (((i as any).push as any)([c, s]), ((s as any).appendChild as any)((u as any).dom), s = (u as any).contentDOM || (u as any).dom);
        }
      }
      ((s as any).appendChild as any)(((this as any).serializeNodeInner as any)(o, t));
    }), r;
  }
  serializeNodeInner(e: any, t: any): any {
    let {
      dom: r,
      contentDOM: s
    }: any = (In as any)((jr as any)(t), (((this as any).nodes as any)[((e as any).type as any).name] as any)(e), null, (e as any).attrs);
    if (s) {
      if ((e as any).isLeaf) throw new (RangeError as any)("Content hole not allowed in a leaf node spec");
      ((this as any).serializeFragment as any)((e as any).content, t, s);
    }
    return r;
  }
  serializeNode(e: any, t: any = {}): any {
    let r: any = ((this as any).serializeNodeInner as any)(e, t);
    for (let s: any = (((e as any).marks as any).length as any) - (1 as any); (s as any) >= (0 as any); s--) {
      let i: any = ((this as any).serializeMark as any)(((e as any).marks as any)[s], (e as any).isInline, t);
      i && (((((i as any).contentDOM || (i as any).dom) as any).appendChild as any)(r), r = (i as any).dom);
    }
    return r;
  }
  serializeMark(e: any, t: any, r: any = {}): any {
    let s: any = ((this as any).marks as any)[((e as any).type as any).name];
    return s && (In as any)((jr as any)(r), (s as any)(e, t), null, (e as any).attrs);
  }
  static renderSpec(e: any, t: any, r: any = null, s: any): any {
    return (In as any)(e, t, r, s);
  }
  static fromSchema(e: any): any {
    return ((e as any).cached as any).domSerializer || (((e as any).cached as any).domSerializer = new (kt as any)(((this as any).nodesFromSchema as any)(e), ((this as any).marksFromSchema as any)(e)));
  }
  static nodesFromSchema(e: any): any {
    let t: any = (Hi as any)((e as any).nodes);
    return (t as any).text || ((t as any).text = (r: any): any => (r as any).text), t;
  }
  static marksFromSchema(e: any): any {
    return (Hi as any)((e as any).marks);
  }
}
function Hi(this: any, n: any): any {
  let e: any = {};
  for (let t in n) {
    let r: any = (((n as any)[t] as any).spec as any).toDOM;
    r && ((e as any)[t] = r);
  }
  return e;
}
function jr(this: any, n: any): any {
  return (n as any).document || (window as any).document;
}
const Vi: any = new (WeakMap as any)();
function du(this: any, n: any): any {
  let e: any = ((Vi as any).get as any)(n);
  return (e as any) === (void 0 as any) && ((Vi as any).set as any)(n, e = (fu as any)(n)), e;
}
function fu(this: any, n: any): any {
  let e: any = null;
  function t(this: any, r: any): any {
    if (r && (typeof r as any) == ("object" as any)) if (((Array as any).isArray as any)(r)) {
      if ((typeof (r as any)[0] as any) == ("string" as any)) e || (e = []), ((e as any).push as any)(r);else for (let s: any = 0; (s as any) < ((r as any).length as any); s++) (t as any)((r as any)[s]);
    } else for (let s in r) (t as any)((r as any)[s]);
  }
  return (t as any)(n), e;
}
function In(this: any, n: any, e: any, t: any, r: any): any {
  if ((typeof e as any) == ("string" as any)) return {
    dom: ((n as any).createTextNode as any)(e)
  };
  if (((e as any).nodeType as any) != (null as any)) return {
    dom: e
  };
  if ((e as any).dom && (((e as any).dom as any).nodeType as any) != (null as any)) return e;
  let s: any = (e as any)[0],
    i: any;
  if ((typeof s as any) != ("string" as any)) throw new (RangeError as any)("Invalid array passed to renderSpec");
  if (r && (i = (du as any)(r)) && (((i as any).indexOf as any)(e) as any) > (-1 as any)) throw new (RangeError as any)("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
  let o: any = ((s as any).indexOf as any)(" ");
  (o as any) > (0 as any) && (t = ((s as any).slice as any)(0, o), s = ((s as any).slice as any)((o as any) + (1 as any)));
  let l: any,
    a: any = t ? ((n as any).createElementNS as any)(t, s) : ((n as any).createElement as any)(s),
    c: any = (e as any)[1],
    u: any = 1;
  if (c && (typeof c as any) == ("object" as any) && ((c as any).nodeType as any) == (null as any) && !((Array as any).isArray as any)(c)) {
    u = 2;
    for (let d in c) if (((c as any)[d] as any) != (null as any)) {
      let f: any = ((d as any).indexOf as any)(" ");
      (f as any) > (0 as any) ? ((a as any).setAttributeNS as any)(((d as any).slice as any)(0, f), ((d as any).slice as any)((f as any) + (1 as any)), (c as any)[d]) : ((a as any).setAttribute as any)(d, (c as any)[d]);
    }
  }
  for (let d: any = u; (d as any) < ((e as any).length as any); d++) {
    let f: any = (e as any)[d];
    if ((f as any) === (0 as any)) {
      if ((d as any) < (((e as any).length as any) - (1 as any) as any) || (d as any) > (u as any)) throw new (RangeError as any)("Content hole must be the only child of its parent node");
      return {
        dom: a,
        contentDOM: a
      };
    } else {
      let {
        dom: h,
        contentDOM: p
      }: any = (In as any)(n, f, t, r);
      if (((a as any).appendChild as any)(h), p) {
        if (l) throw new (RangeError as any)("Multiple content holes");
        l = p;
      }
    }
  }
  return {
    dom: a,
    contentDOM: l
  };
}
const vl: number = 65535,
  Tl: any = ((Math as any).pow as any)(2, 16);
function hu(this: any, n: any, e: any): any {
  return (n as any) + ((e as any) * (Tl as any) as any);
}
function ji(this: any, n: any): any {
  return (n as any) & (vl as any);
}
function pu(this: any, n: any): any {
  return ((n as any) - (((n as any) & (vl as any)) as any) as any) / (Tl as any);
}
const Al: number = 1,
  Nl: number = 2,
  Rn: number = 4,
  Ol: number = 8;
class ks {
  declare recover: any;
  declare delInfo: any;
  declare pos: any;
  [key: string]: any;
  constructor(e: any, t: any, r: any) {
    (this as any).pos = e, (this as any).delInfo = t, (this as any).recover = r;
  }
  get deleted(): any {
    return ((((this as any).delInfo as any) & (Ol as any)) as any) > (0 as any);
  }
  get deletedBefore(): any {
    return ((((this as any).delInfo as any) & (((Al as any) | (Rn as any)) as any)) as any) > (0 as any);
  }
  get deletedAfter(): any {
    return ((((this as any).delInfo as any) & (((Nl as any) | (Rn as any)) as any)) as any) > (0 as any);
  }
  get deletedAcross(): any {
    return ((((this as any).delInfo as any) & (Rn as any)) as any) > (0 as any);
  }
}
class ce {
  declare inverted: any;
  declare ranges: any;
  [key: string]: any;
  constructor(e: any, t: any = !1) {
    if ((this as any).ranges = e, (this as any).inverted = t, !(e as any).length && (ce as any).empty) return (ce as any).empty;
  }
  recover(e: any): any {
    let t: any = 0,
      r: any = (ji as any)(e);
    if (!(this as any).inverted) for (let s: any = 0; (s as any) < (r as any); s++) t += (((this as any).ranges as any)[((s as any) * (3 as any) as any) + (2 as any)] as any) - (((this as any).ranges as any)[((s as any) * (3 as any) as any) + (1 as any)] as any);
    return ((((this as any).ranges as any)[(r as any) * (3 as any)] as any) + (t as any) as any) + ((pu as any)(e) as any);
  }
  mapResult(e: any, t: any = 1): any {
    return ((this as any)._map as any)(e, t, !1);
  }
  map(e: any, t: any = 1): any {
    return ((this as any)._map as any)(e, t, !0);
  }
  _map(e: any, t: any, r: any): any {
    let s: any = 0,
      i: any = (this as any).inverted ? 2 : 1,
      o: any = (this as any).inverted ? 1 : 2;
    for (let l: any = 0; (l as any) < (((this as any).ranges as any).length as any); l += 3) {
      let a: any = (((this as any).ranges as any)[l] as any) - (((this as any).inverted ? s : 0) as any);
      if ((a as any) > (e as any)) break;
      let c: any = ((this as any).ranges as any)[(l as any) + (i as any)],
        u: any = ((this as any).ranges as any)[(l as any) + (o as any)],
        d: any = (a as any) + (c as any);
      if ((e as any) <= (d as any)) {
        let f: any = c ? (e as any) == (a as any) ? -1 : (e as any) == (d as any) ? 1 : t : t,
          h: any = ((a as any) + (s as any) as any) + (((f as any) < (0 as any) ? 0 : u) as any);
        if (r) return h;
        let p: any = (e as any) == (((t as any) < (0 as any) ? a : d) as any) ? null : (hu as any)((l as any) / (3 as any), (e as any) - (a as any)),
          m: any = (e as any) == (a as any) ? Nl : (e as any) == (d as any) ? Al : Rn;
        return ((t as any) < (0 as any) ? (e as any) != (a as any) : (e as any) != (d as any)) && (m |= Ol), new (ks as any)(h, m, p);
      }
      s += (u as any) - (c as any);
    }
    return r ? (e as any) + (s as any) : new (ks as any)((e as any) + (s as any), 0, null);
  }
  touches(e: any, t: any): any {
    let r: any = 0,
      s: any = (ji as any)(t),
      i: any = (this as any).inverted ? 2 : 1,
      o: any = (this as any).inverted ? 1 : 2;
    for (let l: any = 0; (l as any) < (((this as any).ranges as any).length as any); l += 3) {
      let a: any = (((this as any).ranges as any)[l] as any) - (((this as any).inverted ? r : 0) as any);
      if ((a as any) > (e as any)) break;
      let c: any = ((this as any).ranges as any)[(l as any) + (i as any)],
        u: any = (a as any) + (c as any);
      if ((e as any) <= (u as any) && (l as any) == ((s as any) * (3 as any) as any)) return !0;
      r += (((this as any).ranges as any)[(l as any) + (o as any)] as any) - (c as any);
    }
    return !1;
  }
  forEach(e: any): any {
    let t: any = (this as any).inverted ? 2 : 1,
      r: any = (this as any).inverted ? 1 : 2;
    for (let s: any = 0, i: any = 0; (s as any) < (((this as any).ranges as any).length as any); s += 3) {
      let o: any = ((this as any).ranges as any)[s],
        l: any = (o as any) - (((this as any).inverted ? i : 0) as any),
        a: any = (o as any) + (((this as any).inverted ? 0 : i) as any),
        c: any = ((this as any).ranges as any)[(s as any) + (t as any)],
        u: any = ((this as any).ranges as any)[(s as any) + (r as any)];
      (e as any)(l, (l as any) + (c as any), a, (a as any) + (u as any)), i += (u as any) - (c as any);
    }
  }
  invert(): any {
    return new (ce as any)((this as any).ranges, !(this as any).inverted);
  }
  toString(): any {
    return (((this as any).inverted ? "-" : "") as any) + (((JSON as any).stringify as any)((this as any).ranges) as any);
  }
  static offset(e: any): any {
    return (e as any) == (0 as any) ? (ce as any).empty : new (ce as any)((e as any) < (0 as any) ? [0, -e, 0] : [0, 0, e]);
  }
}
(ce as any).empty = new (ce as any)([]);
class cn {
  declare ownData: any;
  declare _maps: any;
  declare to: any;
  declare from: any;
  declare mirror: any;
  [key: string]: any;
  constructor(e: any, t: any, r: any = 0, s: any = e ? (e as any).length : 0) {
    (this as any).mirror = t, (this as any).from = r, (this as any).to = s, (this as any)._maps = e || [], (this as any).ownData = !(e || t);
  }
  get maps(): any {
    return (this as any)._maps;
  }
  slice(e: any = 0, t: any = ((this as any).maps as any).length): any {
    return new (cn as any)((this as any)._maps, (this as any).mirror, e, t);
  }
  appendMap(e: any, t: any): any {
    (this as any).ownData || ((this as any)._maps = (((this as any)._maps as any).slice as any)(), (this as any).mirror = (this as any).mirror && (((this as any).mirror as any).slice as any)(), (this as any).ownData = !0), (this as any).to = (((this as any)._maps as any).push as any)(e), (t as any) != (null as any) && ((this as any).setMirror as any)((((this as any)._maps as any).length as any) - (1 as any), t);
  }
  appendMapping(e: any): any {
    for (let t: any = 0, r: any = ((this as any)._maps as any).length; (t as any) < (((e as any)._maps as any).length as any); t++) {
      let s: any = ((e as any).getMirror as any)(t);
      ((this as any).appendMap as any)(((e as any)._maps as any)[t], (s as any) != (null as any) && (s as any) < (t as any) ? (r as any) + (s as any) : void 0);
    }
  }
  getMirror(e: any): any {
    if ((this as any).mirror) {
      for (let t: any = 0; (t as any) < (((this as any).mirror as any).length as any); t++) if ((((this as any).mirror as any)[t] as any) == (e as any)) return ((this as any).mirror as any)[(t as any) + (((t as any) % (2 as any) ? -1 : 1) as any)];
    }
  }
  setMirror(e: any, t: any): any {
    (this as any).mirror || ((this as any).mirror = []), (((this as any).mirror as any).push as any)(e, t);
  }
  appendMappingInverted(e: any): any {
    for (let t: any = (((e as any).maps as any).length as any) - (1 as any), r: any = (((this as any)._maps as any).length as any) + (((e as any)._maps as any).length as any); (t as any) >= (0 as any); t--) {
      let s: any = ((e as any).getMirror as any)(t);
      ((this as any).appendMap as any)(((((e as any)._maps as any)[t] as any).invert as any)(), (s as any) != (null as any) && (s as any) > (t as any) ? ((r as any) - (s as any) as any) - (1 as any) : void 0);
    }
  }
  invert(): any {
    let e: any = new (cn as any)();
    return ((e as any).appendMappingInverted as any)(this), e;
  }
  map(e: any, t: any = 1): any {
    if ((this as any).mirror) return ((this as any)._map as any)(e, t, !0);
    for (let r: any = (this as any).from; (r as any) < ((this as any).to as any); r++) e = ((((this as any)._maps as any)[r] as any).map as any)(e, t);
    return e;
  }
  mapResult(e: any, t: any = 1): any {
    return ((this as any)._map as any)(e, t, !1);
  }
  _map(e: any, t: any, r: any): any {
    let s: any = 0;
    for (let i: any = (this as any).from; (i as any) < ((this as any).to as any); i++) {
      let o: any = ((this as any)._maps as any)[i],
        l: any = ((o as any).mapResult as any)(e, t);
      if (((l as any).recover as any) != (null as any)) {
        let a: any = ((this as any).getMirror as any)(i);
        if ((a as any) != (null as any) && (a as any) > (i as any) && (a as any) < ((this as any).to as any)) {
          i = a, e = ((((this as any)._maps as any)[a] as any).recover as any)((l as any).recover);
          continue;
        }
      }
      s |= (l as any).delInfo, e = (l as any).pos;
    }
    return r ? e : new (ks as any)(e, s, null);
  }
}
const _r: any = ((Object as any).create as any)(null);
class te {
  [key: string]: any;
  getMap(): any {
    return (ce as any).empty;
  }
  merge(e: any): any {
    return null;
  }
  static fromJSON(e: any, t: any): any {
    if (!t || !(t as any).stepType) throw new (RangeError as any)("Invalid input for Step.fromJSON");
    let r: any = (_r as any)[(t as any).stepType];
    if (!r) throw new (RangeError as any)(`No step type ${(t as any).stepType} defined`);
    return ((r as any).fromJSON as any)(e, t);
  }
  static jsonID(e: any, t: any): any {
    if (e in _r) throw new (RangeError as any)(("Duplicate use of step JSON ID " as any) + (e as any));
    return (_r as any)[e] = t, ((t as any).prototype as any).jsonID = e, t;
  }
}
class j {
  declare failed: any;
  declare doc: any;
  [key: string]: any;
  constructor(e: any, t: any) {
    (this as any).doc = e, (this as any).failed = t;
  }
  static ok(e: any): any {
    return new (j as any)(e, null);
  }
  static fail(e: any): any {
    return new (j as any)(null, e);
  }
  static fromReplace(e: any, t: any, r: any, s: any): any {
    try {
      return ((j as any).ok as any)(((e as any).replace as any)(t, r, s));
    } catch (i: any) {
      if (i instanceof $n) return ((j as any).fail as any)((i as any).message);
      throw i;
    }
  }
}
function Ws(this: any, n: any, e: any, t: any): any {
  let r: any = [];
  for (let s: any = 0; (s as any) < ((n as any).childCount as any); s++) {
    let i: any = ((n as any).child as any)(s);
    ((i as any).content as any).size && (i = ((i as any).copy as any)((Ws as any)((i as any).content, e, i))), (i as any).isInline && (i = (e as any)(i, t, s)), ((r as any).push as any)(i);
  }
  return ((k as any).fromArray as any)(r);
}
class Ke extends (te as any) {
  declare mark: any;
  declare to: any;
  declare from: any;
  [key: string]: any;
  constructor(e: any, t: any, r: any) {
    super(), (this as any).from = e, (this as any).to = t, (this as any).mark = r;
  }
  apply(e: any): any {
    let t: any = ((e as any).slice as any)((this as any).from, (this as any).to),
      r: any = ((e as any).resolve as any)((this as any).from),
      s: any = ((r as any).node as any)(((r as any).sharedDepth as any)((this as any).to)),
      i: any = new (w as any)((Ws as any)((t as any).content, (o: any, l: any): any => !(o as any).isAtom || !(((l as any).type as any).allowsMarkType as any)(((this as any).mark as any).type) ? o : ((o as any).mark as any)((((this as any).mark as any).addToSet as any)((o as any).marks)), s), (t as any).openStart, (t as any).openEnd);
    return ((j as any).fromReplace as any)(e, (this as any).from, (this as any).to, i);
  }
  invert(): any {
    return new (xe as any)((this as any).from, (this as any).to, (this as any).mark);
  }
  map(e: any): any {
    let t: any = ((e as any).mapResult as any)((this as any).from, 1),
      r: any = ((e as any).mapResult as any)((this as any).to, -1);
    return (t as any).deleted && (r as any).deleted || ((t as any).pos as any) >= ((r as any).pos as any) ? null : new (Ke as any)((t as any).pos, (r as any).pos, (this as any).mark);
  }
  merge(e: any): any {
    return e instanceof Ke && (((e as any).mark as any).eq as any)((this as any).mark) && ((this as any).from as any) <= ((e as any).to as any) && ((this as any).to as any) >= ((e as any).from as any) ? new (Ke as any)(((Math as any).min as any)((this as any).from, (e as any).from), ((Math as any).max as any)((this as any).to, (e as any).to), (this as any).mark) : null;
  }
  toJSON(): any {
    return {
      stepType: "addMark",
      mark: (((this as any).mark as any).toJSON as any)(),
      from: (this as any).from,
      to: (this as any).to
    };
  }
  static fromJSON(e: any, t: any): any {
    if ((typeof (t as any).from as any) != ("number" as any) || (typeof (t as any).to as any) != ("number" as any)) throw new (RangeError as any)("Invalid input for AddMarkStep.fromJSON");
    return new (Ke as any)((t as any).from, (t as any).to, ((e as any).markFromJSON as any)((t as any).mark));
  }
}
((te as any).jsonID as any)("addMark", Ke);
class xe extends (te as any) {
  declare mark: any;
  declare to: any;
  declare from: any;
  [key: string]: any;
  constructor(e: any, t: any, r: any) {
    super(), (this as any).from = e, (this as any).to = t, (this as any).mark = r;
  }
  apply(e: any): any {
    let t: any = ((e as any).slice as any)((this as any).from, (this as any).to),
      r: any = new (w as any)((Ws as any)((t as any).content, (s: any): any => ((s as any).mark as any)((((this as any).mark as any).removeFromSet as any)((s as any).marks)), e), (t as any).openStart, (t as any).openEnd);
    return ((j as any).fromReplace as any)(e, (this as any).from, (this as any).to, r);
  }
  invert(): any {
    return new (Ke as any)((this as any).from, (this as any).to, (this as any).mark);
  }
  map(e: any): any {
    let t: any = ((e as any).mapResult as any)((this as any).from, 1),
      r: any = ((e as any).mapResult as any)((this as any).to, -1);
    return (t as any).deleted && (r as any).deleted || ((t as any).pos as any) >= ((r as any).pos as any) ? null : new (xe as any)((t as any).pos, (r as any).pos, (this as any).mark);
  }
  merge(e: any): any {
    return e instanceof xe && (((e as any).mark as any).eq as any)((this as any).mark) && ((this as any).from as any) <= ((e as any).to as any) && ((this as any).to as any) >= ((e as any).from as any) ? new (xe as any)(((Math as any).min as any)((this as any).from, (e as any).from), ((Math as any).max as any)((this as any).to, (e as any).to), (this as any).mark) : null;
  }
  toJSON(): any {
    return {
      stepType: "removeMark",
      mark: (((this as any).mark as any).toJSON as any)(),
      from: (this as any).from,
      to: (this as any).to
    };
  }
  static fromJSON(e: any, t: any): any {
    if ((typeof (t as any).from as any) != ("number" as any) || (typeof (t as any).to as any) != ("number" as any)) throw new (RangeError as any)("Invalid input for RemoveMarkStep.fromJSON");
    return new (xe as any)((t as any).from, (t as any).to, ((e as any).markFromJSON as any)((t as any).mark));
  }
}
((te as any).jsonID as any)("removeMark", xe);
class Ue extends (te as any) {
  declare mark: any;
  declare pos: any;
  [key: string]: any;
  constructor(e: any, t: any) {
    super(), (this as any).pos = e, (this as any).mark = t;
  }
  apply(e: any): any {
    let t: any = ((e as any).nodeAt as any)((this as any).pos);
    if (!t) return ((j as any).fail as any)("No node at mark step's position");
    let r: any = (((t as any).type as any).create as any)((t as any).attrs, null, (((this as any).mark as any).addToSet as any)((t as any).marks));
    return ((j as any).fromReplace as any)(e, (this as any).pos, ((this as any).pos as any) + (1 as any), new (w as any)(((k as any).from as any)(r), 0, (t as any).isLeaf ? 0 : 1));
  }
  invert(e: any): any {
    let t: any = ((e as any).nodeAt as any)((this as any).pos);
    if (t) {
      let r: any = (((this as any).mark as any).addToSet as any)((t as any).marks);
      if (((r as any).length as any) == (((t as any).marks as any).length as any)) {
        for (let s: any = 0; (s as any) < (((t as any).marks as any).length as any); s++) if (!((((t as any).marks as any)[s] as any).isInSet as any)(r)) return new (Ue as any)((this as any).pos, ((t as any).marks as any)[s]);
        return new (Ue as any)((this as any).pos, (this as any).mark);
      }
    }
    return new (pt as any)((this as any).pos, (this as any).mark);
  }
  map(e: any): any {
    let t: any = ((e as any).mapResult as any)((this as any).pos, 1);
    return (t as any).deletedAfter ? null : new (Ue as any)((t as any).pos, (this as any).mark);
  }
  toJSON(): any {
    return {
      stepType: "addNodeMark",
      pos: (this as any).pos,
      mark: (((this as any).mark as any).toJSON as any)()
    };
  }
  static fromJSON(e: any, t: any): any {
    if ((typeof (t as any).pos as any) != ("number" as any)) throw new (RangeError as any)("Invalid input for AddNodeMarkStep.fromJSON");
    return new (Ue as any)((t as any).pos, ((e as any).markFromJSON as any)((t as any).mark));
  }
}
((te as any).jsonID as any)("addNodeMark", Ue);
class pt extends (te as any) {
  declare mark: any;
  declare pos: any;
  [key: string]: any;
  constructor(e: any, t: any) {
    super(), (this as any).pos = e, (this as any).mark = t;
  }
  apply(e: any): any {
    let t: any = ((e as any).nodeAt as any)((this as any).pos);
    if (!t) return ((j as any).fail as any)("No node at mark step's position");
    let r: any = (((t as any).type as any).create as any)((t as any).attrs, null, (((this as any).mark as any).removeFromSet as any)((t as any).marks));
    return ((j as any).fromReplace as any)(e, (this as any).pos, ((this as any).pos as any) + (1 as any), new (w as any)(((k as any).from as any)(r), 0, (t as any).isLeaf ? 0 : 1));
  }
  invert(e: any): any {
    let t: any = ((e as any).nodeAt as any)((this as any).pos);
    return !t || !(((this as any).mark as any).isInSet as any)((t as any).marks) ? this : new (Ue as any)((this as any).pos, (this as any).mark);
  }
  map(e: any): any {
    let t: any = ((e as any).mapResult as any)((this as any).pos, 1);
    return (t as any).deletedAfter ? null : new (pt as any)((t as any).pos, (this as any).mark);
  }
  toJSON(): any {
    return {
      stepType: "removeNodeMark",
      pos: (this as any).pos,
      mark: (((this as any).mark as any).toJSON as any)()
    };
  }
  static fromJSON(e: any, t: any): any {
    if ((typeof (t as any).pos as any) != ("number" as any)) throw new (RangeError as any)("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new (pt as any)((t as any).pos, ((e as any).markFromJSON as any)((t as any).mark));
  }
}
((te as any).jsonID as any)("removeNodeMark", pt);
class K extends (te as any) {
  declare structure: any;
  declare slice: any;
  declare to: any;
  declare from: any;
  [key: string]: any;
  constructor(e: any, t: any, r: any, s: any = !1) {
    super(), (this as any).from = e, (this as any).to = t, (this as any).slice = r, (this as any).structure = s;
  }
  apply(e: any): any {
    return (this as any).structure && (bs as any)(e, (this as any).from, (this as any).to) ? ((j as any).fail as any)("Structure replace would overwrite content") : ((j as any).fromReplace as any)(e, (this as any).from, (this as any).to, (this as any).slice);
  }
  getMap(): any {
    return new (ce as any)([(this as any).from, ((this as any).to as any) - ((this as any).from as any), ((this as any).slice as any).size]);
  }
  invert(e: any): any {
    return new (K as any)((this as any).from, ((this as any).from as any) + (((this as any).slice as any).size as any), ((e as any).slice as any)((this as any).from, (this as any).to));
  }
  map(e: any): any {
    let t: any = ((e as any).mapResult as any)((this as any).from, 1),
      r: any = ((e as any).mapResult as any)((this as any).to, -1);
    return (t as any).deletedAcross && (r as any).deletedAcross ? null : new (K as any)((t as any).pos, ((Math as any).max as any)((t as any).pos, (r as any).pos), (this as any).slice, (this as any).structure);
  }
  merge(e: any): any {
    if (!(e instanceof K) || (e as any).structure || (this as any).structure) return null;
    if ((((this as any).from as any) + (((this as any).slice as any).size as any) as any) == ((e as any).from as any) && !((this as any).slice as any).openEnd && !((e as any).slice as any).openStart) {
      let t: any = ((((this as any).slice as any).size as any) + (((e as any).slice as any).size as any) as any) == (0 as any) ? (w as any).empty : new (w as any)(((((this as any).slice as any).content as any).append as any)(((e as any).slice as any).content), ((this as any).slice as any).openStart, ((e as any).slice as any).openEnd);
      return new (K as any)((this as any).from, ((this as any).to as any) + (((e as any).to as any) - ((e as any).from as any) as any), t, (this as any).structure);
    } else if (((e as any).to as any) == ((this as any).from as any) && !((this as any).slice as any).openStart && !((e as any).slice as any).openEnd) {
      let t: any = ((((this as any).slice as any).size as any) + (((e as any).slice as any).size as any) as any) == (0 as any) ? (w as any).empty : new (w as any)(((((e as any).slice as any).content as any).append as any)(((this as any).slice as any).content), ((e as any).slice as any).openStart, ((this as any).slice as any).openEnd);
      return new (K as any)((e as any).from, (this as any).to, t, (this as any).structure);
    } else return null;
  }
  toJSON(): any {
    let e: any = {
      stepType: "replace",
      from: (this as any).from,
      to: (this as any).to
    };
    return ((this as any).slice as any).size && ((e as any).slice = (((this as any).slice as any).toJSON as any)()), (this as any).structure && ((e as any).structure = !0), e;
  }
  static fromJSON(e: any, t: any): any {
    if ((typeof (t as any).from as any) != ("number" as any) || (typeof (t as any).to as any) != ("number" as any)) throw new (RangeError as any)("Invalid input for ReplaceStep.fromJSON");
    return new (K as any)((t as any).from, (t as any).to, ((w as any).fromJSON as any)(e, (t as any).slice), !!(t as any).structure);
  }
}
((te as any).jsonID as any)("replace", K);
class J extends (te as any) {
  declare structure: any;
  declare insert: any;
  declare slice: any;
  declare gapTo: any;
  declare gapFrom: any;
  declare to: any;
  declare from: any;
  [key: string]: any;
  constructor(e: any, t: any, r: any, s: any, i: any, o: any, l: any = !1) {
    super(), (this as any).from = e, (this as any).to = t, (this as any).gapFrom = r, (this as any).gapTo = s, (this as any).slice = i, (this as any).insert = o, (this as any).structure = l;
  }
  apply(e: any): any {
    if ((this as any).structure && ((bs as any)(e, (this as any).from, (this as any).gapFrom) || (bs as any)(e, (this as any).gapTo, (this as any).to))) return ((j as any).fail as any)("Structure gap-replace would overwrite content");
    let t: any = ((e as any).slice as any)((this as any).gapFrom, (this as any).gapTo);
    if ((t as any).openStart || (t as any).openEnd) return ((j as any).fail as any)("Gap is not a flat range");
    let r: any = (((this as any).slice as any).insertAt as any)((this as any).insert, (t as any).content);
    return r ? ((j as any).fromReplace as any)(e, (this as any).from, (this as any).to, r) : ((j as any).fail as any)("Content does not fit in gap");
  }
  getMap(): any {
    return new (ce as any)([(this as any).from, ((this as any).gapFrom as any) - ((this as any).from as any), (this as any).insert, (this as any).gapTo, ((this as any).to as any) - ((this as any).gapTo as any), (((this as any).slice as any).size as any) - ((this as any).insert as any)]);
  }
  invert(e: any): any {
    let t: any = ((this as any).gapTo as any) - ((this as any).gapFrom as any);
    return new (J as any)((this as any).from, (((this as any).from as any) + (((this as any).slice as any).size as any) as any) + (t as any), ((this as any).from as any) + ((this as any).insert as any), (((this as any).from as any) + ((this as any).insert as any) as any) + (t as any), ((((e as any).slice as any)((this as any).from, (this as any).to) as any).removeBetween as any)(((this as any).gapFrom as any) - ((this as any).from as any), ((this as any).gapTo as any) - ((this as any).from as any)), ((this as any).gapFrom as any) - ((this as any).from as any), (this as any).structure);
  }
  map(e: any): any {
    let t: any = ((e as any).mapResult as any)((this as any).from, 1),
      r: any = ((e as any).mapResult as any)((this as any).to, -1),
      s: any = ((this as any).from as any) == ((this as any).gapFrom as any) ? (t as any).pos : ((e as any).map as any)((this as any).gapFrom, -1),
      i: any = ((this as any).to as any) == ((this as any).gapTo as any) ? (r as any).pos : ((e as any).map as any)((this as any).gapTo, 1);
    return (t as any).deletedAcross && (r as any).deletedAcross || (s as any) < ((t as any).pos as any) || (i as any) > ((r as any).pos as any) ? null : new (J as any)((t as any).pos, (r as any).pos, s, i, (this as any).slice, (this as any).insert, (this as any).structure);
  }
  toJSON(): any {
    let e: any = {
      stepType: "replaceAround",
      from: (this as any).from,
      to: (this as any).to,
      gapFrom: (this as any).gapFrom,
      gapTo: (this as any).gapTo,
      insert: (this as any).insert
    };
    return ((this as any).slice as any).size && ((e as any).slice = (((this as any).slice as any).toJSON as any)()), (this as any).structure && ((e as any).structure = !0), e;
  }
  static fromJSON(e: any, t: any): any {
    if ((typeof (t as any).from as any) != ("number" as any) || (typeof (t as any).to as any) != ("number" as any) || (typeof (t as any).gapFrom as any) != ("number" as any) || (typeof (t as any).gapTo as any) != ("number" as any) || (typeof (t as any).insert as any) != ("number" as any)) throw new (RangeError as any)("Invalid input for ReplaceAroundStep.fromJSON");
    return new (J as any)((t as any).from, (t as any).to, (t as any).gapFrom, (t as any).gapTo, ((w as any).fromJSON as any)(e, (t as any).slice), (t as any).insert, !!(t as any).structure);
  }
}
((te as any).jsonID as any)("replaceAround", J);
function bs(this: any, n: any, e: any, t: any): any {
  let r: any = ((n as any).resolve as any)(e),
    s: any = (t as any) - (e as any),
    i: any = (r as any).depth;
  for (; (s as any) > (0 as any) && (i as any) > (0 as any) && (((r as any).indexAfter as any)(i) as any) == ((((r as any).node as any)(i) as any).childCount as any);) i--, s--;
  if ((s as any) > (0 as any)) {
    let o: any = ((((r as any).node as any)(i) as any).maybeChild as any)(((r as any).indexAfter as any)(i));
    for (; (s as any) > (0 as any);) {
      if (!o || (o as any).isLeaf) return !0;
      o = (o as any).firstChild, s--;
    }
  }
  return !1;
}
function mu(this: any, n: any, e: any, t: any, r: any): any {
  let s: any = [],
    i: any = [],
    o: any,
    l: any;
  (((n as any).doc as any).nodesBetween as any)(e, t, (a: any, c: any, u: any): any => {
    if (!(a as any).isInline) return;
    let d: any = (a as any).marks;
    if (!((r as any).isInSet as any)(d) && (((u as any).type as any).allowsMarkType as any)((r as any).type)) {
      let f: any = ((Math as any).max as any)(c, e),
        h: any = ((Math as any).min as any)((c as any) + ((a as any).nodeSize as any), t),
        p: any = ((r as any).addToSet as any)(d);
      for (let m: any = 0; (m as any) < ((d as any).length as any); m++) (((d as any)[m] as any).isInSet as any)(p) || (o && ((o as any).to as any) == (f as any) && (((o as any).mark as any).eq as any)((d as any)[m]) ? (o as any).to = h : ((s as any).push as any)(o = new (xe as any)(f, h, (d as any)[m])));
      l && ((l as any).to as any) == (f as any) ? (l as any).to = h : ((i as any).push as any)(l = new (Ke as any)(f, h, r));
    }
  }), ((s as any).forEach as any)((a: any): any => ((n as any).step as any)(a)), ((i as any).forEach as any)((a: any): any => ((n as any).step as any)(a));
}
function gu(this: any, n: any, e: any, t: any, r: any): any {
  let s: any = [],
    i: any = 0;
  (((n as any).doc as any).nodesBetween as any)(e, t, (o: any, l: any): any => {
    if (!(o as any).isInline) return;
    i++;
    let a: any = null;
    if (r instanceof Er) {
      let c: any = (o as any).marks,
        u: any;
      for (; u = ((r as any).isInSet as any)(c);) (((a || (a = [])) as any).push as any)(u), c = ((u as any).removeFromSet as any)(c);
    } else r ? ((r as any).isInSet as any)((o as any).marks) && (a = [r]) : a = (o as any).marks;
    if (a && (a as any).length) {
      let c: any = ((Math as any).min as any)((l as any) + ((o as any).nodeSize as any), t);
      for (let u: any = 0; (u as any) < ((a as any).length as any); u++) {
        let d: any = (a as any)[u],
          f: any;
        for (let h: any = 0; (h as any) < ((s as any).length as any); h++) {
          let p: any = (s as any)[h];
          ((p as any).step as any) == ((i as any) - (1 as any) as any) && ((d as any).eq as any)(((s as any)[h] as any).style) && (f = p);
        }
        f ? ((f as any).to = c, (f as any).step = i) : ((s as any).push as any)({
          style: d,
          from: ((Math as any).max as any)(l, e),
          to: c,
          step: i
        });
      }
    }
  }), ((s as any).forEach as any)((o: any): any => ((n as any).step as any)(new (xe as any)((o as any).from, (o as any).to, (o as any).style)));
}
function qs(this: any, n: any, e: any, t: any, r: any = (t as any).contentMatch, s: any = !0): any {
  let i: any = (((n as any).doc as any).nodeAt as any)(e),
    o: any = [],
    l: any = (e as any) + (1 as any);
  for (let a: any = 0; (a as any) < ((i as any).childCount as any); a++) {
    let c: any = ((i as any).child as any)(a),
      u: any = (l as any) + ((c as any).nodeSize as any),
      d: any = ((r as any).matchType as any)((c as any).type);
    if (!d) ((o as any).push as any)(new (K as any)(l, u, (w as any).empty));else {
      r = d;
      for (let f: any = 0; (f as any) < (((c as any).marks as any).length as any); f++) ((t as any).allowsMarkType as any)((((c as any).marks as any)[f] as any).type) || ((n as any).step as any)(new (xe as any)(l, u, ((c as any).marks as any)[f]));
      if (s && (c as any).isText && ((t as any).whitespace as any) != ("pre" as any)) {
        let f: any,
          h: any = /\r?\n|\r/g,
          p: any;
        for (; f = ((h as any).exec as any)((c as any).text);) p || (p = new (w as any)(((k as any).from as any)((((t as any).schema as any).text as any)(" ", ((t as any).allowedMarks as any)((c as any).marks))), 0, 0)), ((o as any).push as any)(new (K as any)((l as any) + ((f as any).index as any), ((l as any) + ((f as any).index as any) as any) + (((f as any)[0] as any).length as any), p));
      }
    }
    l = u;
  }
  if (!(r as any).validEnd) {
    let a: any = ((r as any).fillBefore as any)((k as any).empty, !0);
    ((n as any).replace as any)(l, l, new (w as any)(a, 0, 0));
  }
  for (let a: any = ((o as any).length as any) - (1 as any); (a as any) >= (0 as any); a--) ((n as any).step as any)((o as any)[a]);
}
function yu(this: any, n: any, e: any, t: any): any {
  return ((e as any) == (0 as any) || ((n as any).canReplace as any)(e, (n as any).childCount)) && ((t as any) == ((n as any).childCount as any) || ((n as any).canReplace as any)(0, t));
}
function Ht(this: any, n: any): any {
  let t: any = ((((n as any).parent as any).content as any).cutByIndex as any)((n as any).startIndex, (n as any).endIndex);
  for (let r: any = (n as any).depth, s: any = 0, i: any = 0;; --r) {
    let o: any = (((n as any).$from as any).node as any)(r),
      l: any = ((((n as any).$from as any).index as any)(r) as any) + (s as any),
      a: any = ((((n as any).$to as any).indexAfter as any)(r) as any) - (i as any);
    if ((r as any) < ((n as any).depth as any) && ((o as any).canReplace as any)(l, a, t)) return r;
    if ((r as any) == (0 as any) || (((o as any).type as any).spec as any).isolating || !(yu as any)(o, l, a)) break;
    l && (s = 1), (a as any) < ((o as any).childCount as any) && (i = 1);
  }
  return null;
}
function ku(this: any, n: any, e: any, t: any): any {
  let {
      $from: r,
      $to: s,
      depth: i
    }: any = e,
    o: any = ((r as any).before as any)((i as any) + (1 as any)),
    l: any = ((s as any).after as any)((i as any) + (1 as any)),
    a: any = o,
    c: any = l,
    u: any = (k as any).empty,
    d: any = 0;
  for (let p: any = i, m: any = !1; (p as any) > (t as any); p--) m || (((r as any).index as any)(p) as any) > (0 as any) ? (m = !0, u = ((k as any).from as any)(((((r as any).node as any)(p) as any).copy as any)(u)), d++) : a--;
  let f: any = (k as any).empty,
    h: any = 0;
  for (let p: any = i, m: any = !1; (p as any) > (t as any); p--) m || (((s as any).after as any)((p as any) + (1 as any)) as any) < (((s as any).end as any)(p) as any) ? (m = !0, f = ((k as any).from as any)(((((s as any).node as any)(p) as any).copy as any)(f)), h++) : c++;
  ((n as any).step as any)(new (J as any)(a, c, o, l, new (w as any)(((u as any).append as any)(f), d, h), ((u as any).size as any) - (d as any), !0));
}
function Ks(this: any, n: any, e: any, t: any = null, r: any = n): any {
  let s: any = (bu as any)(n, e),
    i: any = s && (xu as any)(r, e);
  return i ? ((((((s as any).map as any)(_i) as any).concat as any)({
    type: e,
    attrs: t
  }) as any).concat as any)(((i as any).map as any)(_i)) : null;
}
function _i(this: any, n: any): any {
  return {
    type: n,
    attrs: null
  };
}
function bu(this: any, n: any, e: any): any {
  let {
      parent: t,
      startIndex: r,
      endIndex: s
    }: any = n,
    i: any = ((((t as any).contentMatchAt as any)(r) as any).findWrapping as any)(e);
  if (!i) return null;
  let o: any = (i as any).length ? (i as any)[0] : e;
  return ((t as any).canReplaceWith as any)(r, s, o) ? i : null;
}
function xu(this: any, n: any, e: any): any {
  let {
      parent: t,
      startIndex: r,
      endIndex: s
    }: any = n,
    i: any = ((t as any).child as any)(r),
    o: any = (((e as any).contentMatch as any).findWrapping as any)((i as any).type);
  if (!o) return null;
  let a: any = (((o as any).length ? (o as any)[((o as any).length as any) - (1 as any)] : e) as any).contentMatch;
  for (let c: any = r; a && (c as any) < (s as any); c++) a = ((a as any).matchType as any)((((t as any).child as any)(c) as any).type);
  return !a || !(a as any).validEnd ? null : o;
}
function Su(this: any, n: any, e: any, t: any): any {
  let r: any = (k as any).empty;
  for (let o: any = ((t as any).length as any) - (1 as any); (o as any) >= (0 as any); o--) {
    if ((r as any).size) {
      let l: any = (((((t as any)[o] as any).type as any).contentMatch as any).matchFragment as any)(r);
      if (!l || !(l as any).validEnd) throw new (RangeError as any)("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    r = ((k as any).from as any)(((((t as any)[o] as any).type as any).create as any)(((t as any)[o] as any).attrs, r));
  }
  let s: any = (e as any).start,
    i: any = (e as any).end;
  ((n as any).step as any)(new (J as any)(s, i, s, i, new (w as any)(r, 0, 0), (t as any).length, !0));
}
function wu(this: any, n: any, e: any, t: any, r: any, s: any): any {
  if (!(r as any).isTextblock) throw new (RangeError as any)("Type given to setBlockType should be a textblock");
  let i: any = ((n as any).steps as any).length;
  (((n as any).doc as any).nodesBetween as any)(e, t, (o: any, l: any): any => {
    let a: any = (typeof s as any) == ("function" as any) ? (s as any)(o) : s;
    if ((o as any).isTextblock && !((o as any).hasMarkup as any)(r, a) && (Cu as any)((n as any).doc, (((((n as any).mapping as any).slice as any)(i) as any).map as any)(l), r)) {
      let c: any = null;
      if (((r as any).schema as any).linebreakReplacement) {
        let h: any = ((r as any).whitespace as any) == ("pre" as any),
          p: any = !!(((r as any).contentMatch as any).matchType as any)(((r as any).schema as any).linebreakReplacement);
        h && !p ? c = !1 : !h && p && (c = !0);
      }
      (c as any) === (!1 as any) && (Il as any)(n, o, l, i), (qs as any)(n, (((((n as any).mapping as any).slice as any)(i) as any).map as any)(l, 1), r, void 0, (c as any) === (null as any));
      let u: any = (((n as any).mapping as any).slice as any)(i),
        d: any = ((u as any).map as any)(l, 1),
        f: any = ((u as any).map as any)((l as any) + ((o as any).nodeSize as any), 1);
      return ((n as any).step as any)(new (J as any)(d, f, (d as any) + (1 as any), (f as any) - (1 as any), new (w as any)(((k as any).from as any)(((r as any).create as any)(a, null, (o as any).marks)), 0, 0), 1, !0)), (c as any) === (!0 as any) && (Dl as any)(n, o, l, i), !1;
    }
  });
}
function Dl(this: any, n: any, e: any, t: any, r: any): any {
  ((e as any).forEach as any)((s: any, i: any): any => {
    if ((s as any).isText) {
      let o: any,
        l: any = /\r?\n|\r/g;
      for (; o = ((l as any).exec as any)((s as any).text);) {
        let a: any = (((((n as any).mapping as any).slice as any)(r) as any).map as any)((((t as any) + (1 as any) as any) + (i as any) as any) + ((o as any).index as any));
        ((n as any).replaceWith as any)(a, (a as any) + (1 as any), (((((e as any).type as any).schema as any).linebreakReplacement as any).create as any)());
      }
    }
  });
}
function Il(this: any, n: any, e: any, t: any, r: any): any {
  ((e as any).forEach as any)((s: any, i: any): any => {
    if (((s as any).type as any) == ((((s as any).type as any).schema as any).linebreakReplacement as any)) {
      let o: any = (((((n as any).mapping as any).slice as any)(r) as any).map as any)(((t as any) + (1 as any) as any) + (i as any));
      ((n as any).replaceWith as any)(o, (o as any) + (1 as any), ((((e as any).type as any).schema as any).text as any)(`
`));
    }
  });
}
function Cu(this: any, n: any, e: any, t: any): any {
  let r: any = ((n as any).resolve as any)(e),
    s: any = ((r as any).index as any)();
  return (((r as any).parent as any).canReplaceWith as any)(s, (s as any) + (1 as any), t);
}
function Mu(this: any, n: any, e: any, t: any, r: any, s: any): any {
  let i: any = (((n as any).doc as any).nodeAt as any)(e);
  if (!i) throw new (RangeError as any)("No node at given position");
  t || (t = (i as any).type);
  let o: any = ((t as any).create as any)(r, null, s || (i as any).marks);
  if ((i as any).isLeaf) return ((n as any).replaceWith as any)(e, (e as any) + ((i as any).nodeSize as any), o);
  if (!((t as any).validContent as any)((i as any).content)) throw new (RangeError as any)(("Invalid content for node type " as any) + ((t as any).name as any));
  ((n as any).step as any)(new (J as any)(e, (e as any) + ((i as any).nodeSize as any), (e as any) + (1 as any), ((e as any) + ((i as any).nodeSize as any) as any) - (1 as any), new (w as any)(((k as any).from as any)(o), 0, 0), 1, !0));
}
function Ee(this: any, n: any, e: any, t: any = 1, r: any): any {
  let s: any = ((n as any).resolve as any)(e),
    i: any = ((s as any).depth as any) - (t as any),
    o: any = r && (r as any)[((r as any).length as any) - (1 as any)] || (s as any).parent;
  if ((i as any) < (0 as any) || ((((s as any).parent as any).type as any).spec as any).isolating || !(((s as any).parent as any).canReplace as any)(((s as any).index as any)(), ((s as any).parent as any).childCount) || !(((o as any).type as any).validContent as any)(((((s as any).parent as any).content as any).cutByIndex as any)(((s as any).index as any)(), ((s as any).parent as any).childCount))) return !1;
  for (let c: any = ((s as any).depth as any) - (1 as any), u: any = (t as any) - (2 as any); (c as any) > (i as any); c--, u--) {
    let d: any = ((s as any).node as any)(c),
      f: any = ((s as any).index as any)(c);
    if ((((d as any).type as any).spec as any).isolating) return !1;
    let h: any = (((d as any).content as any).cutByIndex as any)(f, (d as any).childCount),
      p: any = r && (r as any)[(u as any) + (1 as any)];
    p && (h = ((h as any).replaceChild as any)(0, (((p as any).type as any).create as any)((p as any).attrs)));
    let m: any = r && (r as any)[u] || d;
    if (!((d as any).canReplace as any)((f as any) + (1 as any), (d as any).childCount) || !(((m as any).type as any).validContent as any)(h)) return !1;
  }
  let l: any = ((s as any).indexAfter as any)(i),
    a: any = r && (r as any)[0];
  return ((((s as any).node as any)(i) as any).canReplaceWith as any)(l, l, a ? (a as any).type : (((s as any).node as any)((i as any) + (1 as any)) as any).type);
}
function Eu(this: any, n: any, e: any, t: any = 1, r: any): any {
  let s: any = (((n as any).doc as any).resolve as any)(e),
    i: any = (k as any).empty,
    o: any = (k as any).empty;
  for (let l: any = (s as any).depth, a: any = ((s as any).depth as any) - (t as any), c: any = (t as any) - (1 as any); (l as any) > (a as any); l--, c--) {
    i = ((k as any).from as any)(((((s as any).node as any)(l) as any).copy as any)(i));
    let u: any = r && (r as any)[c];
    o = ((k as any).from as any)(u ? (((u as any).type as any).create as any)((u as any).attrs, o) : ((((s as any).node as any)(l) as any).copy as any)(o));
  }
  ((n as any).step as any)(new (K as any)(e, e, new (w as any)(((i as any).append as any)(o), t, t), !0));
}
function et(this: any, n: any, e: any): any {
  let t: any = ((n as any).resolve as any)(e),
    r: any = ((t as any).index as any)();
  return (Rl as any)((t as any).nodeBefore, (t as any).nodeAfter) && (((t as any).parent as any).canReplace as any)(r, (r as any) + (1 as any));
}
function vu(this: any, n: any, e: any): any {
  ((e as any).content as any).size || (((n as any).type as any).compatibleContent as any)((e as any).type);
  let t: any = ((n as any).contentMatchAt as any)((n as any).childCount),
    {
      linebreakReplacement: r
    }: any = ((n as any).type as any).schema;
  for (let s: any = 0; (s as any) < ((e as any).childCount as any); s++) {
    let i: any = ((e as any).child as any)(s),
      o: any = ((i as any).type as any) == (r as any) ? ((((n as any).type as any).schema as any).nodes as any).text : (i as any).type;
    if (t = ((t as any).matchType as any)(o), !t || !(((n as any).type as any).allowsMarks as any)((i as any).marks)) return !1;
  }
  return (t as any).validEnd;
}
function Rl(this: any, n: any, e: any): any {
  return !!(n && e && !(n as any).isLeaf && (vu as any)(n, e));
}
function vr(this: any, n: any, e: any, t: any = -1): any {
  let r: any = ((n as any).resolve as any)(e);
  for (let s: any = (r as any).depth;; s--) {
    let i: any,
      o: any,
      l: any = ((r as any).index as any)(s);
    if ((s as any) == ((r as any).depth as any) ? (i = (r as any).nodeBefore, o = (r as any).nodeAfter) : (t as any) > (0 as any) ? (i = ((r as any).node as any)((s as any) + (1 as any)), l++, o = ((((r as any).node as any)(s) as any).maybeChild as any)(l)) : (i = ((((r as any).node as any)(s) as any).maybeChild as any)((l as any) - (1 as any)), o = ((r as any).node as any)((s as any) + (1 as any))), i && !(i as any).isTextblock && (Rl as any)(i, o) && ((((r as any).node as any)(s) as any).canReplace as any)(l, (l as any) + (1 as any))) return e;
    if ((s as any) == (0 as any)) break;
    e = (t as any) < (0 as any) ? ((r as any).before as any)(s) : ((r as any).after as any)(s);
  }
}
function Tu(this: any, n: any, e: any, t: any): any {
  let r: any = null,
    {
      linebreakReplacement: s
    }: any = (((n as any).doc as any).type as any).schema,
    i: any = (((n as any).doc as any).resolve as any)((e as any) - (t as any)),
    o: any = (((i as any).node as any)() as any).type;
  if (s && (o as any).inlineContent) {
    let u: any = ((o as any).whitespace as any) == ("pre" as any),
      d: any = !!(((o as any).contentMatch as any).matchType as any)(s);
    u && !d ? r = !1 : !u && d && (r = !0);
  }
  let l: any = ((n as any).steps as any).length;
  if ((r as any) === (!1 as any)) {
    let u: any = (((n as any).doc as any).resolve as any)((e as any) + (t as any));
    (Il as any)(n, ((u as any).node as any)(), ((u as any).before as any)(), l);
  }
  (o as any).inlineContent && (qs as any)(n, ((e as any) + (t as any) as any) - (1 as any), o, ((((i as any).node as any)() as any).contentMatchAt as any)(((i as any).index as any)()), (r as any) == (null as any));
  let a: any = (((n as any).mapping as any).slice as any)(l),
    c: any = ((a as any).map as any)((e as any) - (t as any));
  if (((n as any).step as any)(new (K as any)(c, ((a as any).map as any)((e as any) + (t as any), -1), (w as any).empty, !0)), (r as any) === (!0 as any)) {
    let u: any = (((n as any).doc as any).resolve as any)(c);
    (Dl as any)(n, ((u as any).node as any)(), ((u as any).before as any)(), ((n as any).steps as any).length);
  }
  return n;
}
function Au(this: any, n: any, e: any, t: any): any {
  let r: any = ((n as any).resolve as any)(e);
  if ((((r as any).parent as any).canReplaceWith as any)(((r as any).index as any)(), ((r as any).index as any)(), t)) return e;
  if (((r as any).parentOffset as any) == (0 as any)) for (let s: any = ((r as any).depth as any) - (1 as any); (s as any) >= (0 as any); s--) {
    let i: any = ((r as any).index as any)(s);
    if (((((r as any).node as any)(s) as any).canReplaceWith as any)(i, i, t)) return ((r as any).before as any)((s as any) + (1 as any));
    if ((i as any) > (0 as any)) return null;
  }
  if (((r as any).parentOffset as any) == ((((r as any).parent as any).content as any).size as any)) for (let s: any = ((r as any).depth as any) - (1 as any); (s as any) >= (0 as any); s--) {
    let i: any = ((r as any).indexAfter as any)(s);
    if (((((r as any).node as any)(s) as any).canReplaceWith as any)(i, i, t)) return ((r as any).after as any)((s as any) + (1 as any));
    if ((i as any) < ((((r as any).node as any)(s) as any).childCount as any)) return null;
  }
  return null;
}
function Pl(this: any, n: any, e: any, t: any): any {
  let r: any = ((n as any).resolve as any)(e);
  if (!((t as any).content as any).size) return e;
  let s: any = (t as any).content;
  for (let i: any = 0; (i as any) < ((t as any).openStart as any); i++) s = ((s as any).firstChild as any).content;
  for (let i: any = 1; (i as any) <= ((((t as any).openStart as any) == (0 as any) && (t as any).size ? 2 : 1) as any); i++) for (let o: any = (r as any).depth; (o as any) >= (0 as any); o--) {
    let l: any = (o as any) == ((r as any).depth as any) ? 0 : ((r as any).pos as any) <= (((((r as any).start as any)((o as any) + (1 as any)) as any) + (((r as any).end as any)((o as any) + (1 as any)) as any) as any) / (2 as any) as any) ? -1 : 1,
      a: any = (((r as any).index as any)(o) as any) + (((l as any) > (0 as any) ? 1 : 0) as any),
      c: any = ((r as any).node as any)(o),
      u: any = !1;
    if ((i as any) == (1 as any)) u = ((c as any).canReplace as any)(a, a, s);else {
      let d: any = ((((c as any).contentMatchAt as any)(a) as any).findWrapping as any)(((s as any).firstChild as any).type);
      u = d && ((c as any).canReplaceWith as any)(a, a, (d as any)[0]);
    }
    if (u) return (l as any) == (0 as any) ? (r as any).pos : (l as any) < (0 as any) ? ((r as any).before as any)((o as any) + (1 as any)) : ((r as any).after as any)((o as any) + (1 as any));
  }
  return null;
}
function Tr(this: any, n: any, e: any, t: any = e, r: any = (w as any).empty): any {
  if ((e as any) == (t as any) && !(r as any).size) return null;
  let s: any = ((n as any).resolve as any)(e),
    i: any = ((n as any).resolve as any)(t);
  return (Ll as any)(s, i, r) ? new (K as any)(e, t, r) : ((new (Nu as any)(s, i, r) as any).fit as any)();
}
function Ll(this: any, n: any, e: any, t: any): any {
  return !(t as any).openStart && !(t as any).openEnd && (((n as any).start as any)() as any) == (((e as any).start as any)() as any) && (((n as any).parent as any).canReplace as any)(((n as any).index as any)(), ((e as any).index as any)(), (t as any).content);
}
class Nu {
  declare placed: any;
  declare frontier: any;
  declare unplaced: any;
  declare $to: any;
  declare $from: any;
  [key: string]: any;
  constructor(e: any, t: any, r: any) {
    (this as any).$from = e, (this as any).$to = t, (this as any).unplaced = r, (this as any).frontier = [], (this as any).placed = (k as any).empty;
    for (let s: any = 0; (s as any) <= ((e as any).depth as any); s++) {
      let i: any = ((e as any).node as any)(s);
      (((this as any).frontier as any).push as any)({
        type: (i as any).type,
        match: ((i as any).contentMatchAt as any)(((e as any).indexAfter as any)(s))
      });
    }
    for (let s: any = (e as any).depth; (s as any) > (0 as any); s--) (this as any).placed = ((k as any).from as any)(((((e as any).node as any)(s) as any).copy as any)((this as any).placed));
  }
  get depth(): any {
    return (((this as any).frontier as any).length as any) - (1 as any);
  }
  fit(): any {
    for (; ((this as any).unplaced as any).size;) {
      let c: any = ((this as any).findFittable as any)();
      c ? ((this as any).placeNodes as any)(c) : ((this as any).openMore as any)() || ((this as any).dropNode as any)();
    }
    let e: any = ((this as any).mustMoveInline as any)(),
      t: any = ((((this as any).placed as any).size as any) - ((this as any).depth as any) as any) - (((this as any).$from as any).depth as any),
      r: any = (this as any).$from,
      s: any = ((this as any).close as any)((e as any) < (0 as any) ? (this as any).$to : (((r as any).doc as any).resolve as any)(e));
    if (!s) return null;
    let i: any = (this as any).placed,
      o: any = (r as any).depth,
      l: any = (s as any).depth;
    for (; o && l && ((i as any).childCount as any) == (1 as any);) i = ((i as any).firstChild as any).content, o--, l--;
    let a: any = new (w as any)(i, o, l);
    return (e as any) > (-1 as any) ? new (J as any)((r as any).pos, e, ((this as any).$to as any).pos, (((this as any).$to as any).end as any)(), a, t) : (a as any).size || ((r as any).pos as any) != (((this as any).$to as any).pos as any) ? new (K as any)((r as any).pos, (s as any).pos, a) : null;
  }
  findFittable(): any {
    let e: any = ((this as any).unplaced as any).openStart;
    for (let t: any = ((this as any).unplaced as any).content, r: any = 0, s: any = ((this as any).unplaced as any).openEnd; (r as any) < (e as any); r++) {
      let i: any = (t as any).firstChild;
      if (((t as any).childCount as any) > (1 as any) && (s = 0), (((i as any).type as any).spec as any).isolating && (s as any) <= (r as any)) {
        e = r;
        break;
      }
      t = (i as any).content;
    }
    for (let t: any = 1; (t as any) <= (2 as any); t++) for (let r: any = (t as any) == (1 as any) ? e : ((this as any).unplaced as any).openStart; (r as any) >= (0 as any); r--) {
      let s: any,
        i: any = null;
      r ? (i = ((Wr as any)(((this as any).unplaced as any).content, (r as any) - (1 as any)) as any).firstChild, s = (i as any).content) : s = ((this as any).unplaced as any).content;
      let o: any = (s as any).firstChild;
      for (let l: any = (this as any).depth; (l as any) >= (0 as any); l--) {
        let {
            type: a,
            match: c
          }: any = ((this as any).frontier as any)[l],
          u: any,
          d: any = null;
        if ((t as any) == (1 as any) && (o ? ((c as any).matchType as any)((o as any).type) || (d = ((c as any).fillBefore as any)(((k as any).from as any)(o), !1)) : i && ((a as any).compatibleContent as any)((i as any).type))) return {
          sliceDepth: r,
          frontierDepth: l,
          parent: i,
          inject: d
        };
        if ((t as any) == (2 as any) && o && (u = ((c as any).findWrapping as any)((o as any).type))) return {
          sliceDepth: r,
          frontierDepth: l,
          parent: i,
          wrap: u
        };
        if (i && ((c as any).matchType as any)((i as any).type)) break;
      }
    }
  }
  openMore(): any {
    let {
        content: e,
        openStart: t,
        openEnd: r
      }: any = (this as any).unplaced,
      s: any = (Wr as any)(e, t);
    return !(s as any).childCount || ((s as any).firstChild as any).isLeaf ? !1 : ((this as any).unplaced = new (w as any)(e, (t as any) + (1 as any), ((Math as any).max as any)(r, (((s as any).size as any) + (t as any) as any) >= (((e as any).size as any) - (r as any) as any) ? (t as any) + (1 as any) : 0)), !0);
  }
  dropNode(): any {
    let {
        content: e,
        openStart: t,
        openEnd: r
      }: any = (this as any).unplaced,
      s: any = (Wr as any)(e, t);
    if (((s as any).childCount as any) <= (1 as any) && (t as any) > (0 as any)) {
      let i: any = (((e as any).size as any) - (t as any) as any) <= ((t as any) + ((s as any).size as any) as any);
      (this as any).unplaced = new (w as any)((qt as any)(e, (t as any) - (1 as any), 1), (t as any) - (1 as any), i ? (t as any) - (1 as any) : r);
    } else (this as any).unplaced = new (w as any)((qt as any)(e, t, 1), t, r);
  }
  placeNodes({
    sliceDepth: e,
    frontierDepth: t,
    parent: r,
    inject: s,
    wrap: i
  }: any): any {
    for (; ((this as any).depth as any) > (t as any);) ((this as any).closeFrontierNode as any)();
    if (i) for (let m: any = 0; (m as any) < ((i as any).length as any); m++) ((this as any).openFrontierNode as any)((i as any)[m]);
    let o: any = (this as any).unplaced,
      l: any = r ? (r as any).content : (o as any).content,
      a: any = ((o as any).openStart as any) - (e as any),
      c: any = 0,
      u: any = [],
      {
        match: d,
        type: f
      }: any = ((this as any).frontier as any)[t];
    if (s) {
      for (let m: any = 0; (m as any) < ((s as any).childCount as any); m++) ((u as any).push as any)(((s as any).child as any)(m));
      d = ((d as any).matchFragment as any)(s);
    }
    let h: any = (((l as any).size as any) + (e as any) as any) - ((((o as any).content as any).size as any) - ((o as any).openEnd as any) as any);
    for (; (c as any) < ((l as any).childCount as any);) {
      let m: any = ((l as any).child as any)(c),
        g: any = ((d as any).matchType as any)((m as any).type);
      if (!g) break;
      c++, ((c as any) > (1 as any) || (a as any) == (0 as any) || ((m as any).content as any).size) && (d = g, ((u as any).push as any)((zl as any)(((m as any).mark as any)(((f as any).allowedMarks as any)((m as any).marks)), (c as any) == (1 as any) ? a : 0, (c as any) == ((l as any).childCount as any) ? h : -1)));
    }
    let p: any = (c as any) == ((l as any).childCount as any);
    p || (h = -1), (this as any).placed = (Kt as any)((this as any).placed, t, ((k as any).from as any)(u)), (((this as any).frontier as any)[t] as any).match = d, p && (h as any) < (0 as any) && r && ((r as any).type as any) == ((((this as any).frontier as any)[(this as any).depth] as any).type as any) && (((this as any).frontier as any).length as any) > (1 as any) && ((this as any).closeFrontierNode as any)();
    for (let m: any = 0, g: any = l; (m as any) < (h as any); m++) {
      let y: any = (g as any).lastChild;
      (((this as any).frontier as any).push as any)({
        type: (y as any).type,
        match: ((y as any).contentMatchAt as any)((y as any).childCount)
      }), g = (y as any).content;
    }
    (this as any).unplaced = p ? (e as any) == (0 as any) ? (w as any).empty : new (w as any)((qt as any)((o as any).content, (e as any) - (1 as any), 1), (e as any) - (1 as any), (h as any) < (0 as any) ? (o as any).openEnd : (e as any) - (1 as any)) : new (w as any)((qt as any)((o as any).content, e, c), (o as any).openStart, (o as any).openEnd);
  }
  mustMoveInline(): any {
    if (!(((this as any).$to as any).parent as any).isTextblock) return -1;
    let e: any = ((this as any).frontier as any)[(this as any).depth],
      t: any;
    if (!((e as any).type as any).isTextblock || !(qr as any)((this as any).$to, ((this as any).$to as any).depth, (e as any).type, (e as any).match, !1) || (((this as any).$to as any).depth as any) == ((this as any).depth as any) && (t = ((this as any).findCloseLevel as any)((this as any).$to)) && ((t as any).depth as any) == ((this as any).depth as any)) return -1;
    let {
        depth: r
      }: any = (this as any).$to,
      s: any = (((this as any).$to as any).after as any)(r);
    for (; (r as any) > (1 as any) && (s as any) == ((((this as any).$to as any).end as any)(--r) as any);) ++s;
    return s;
  }
  findCloseLevel(e: any): any {
    e: for (let t: any = ((Math as any).min as any)((this as any).depth, (e as any).depth); (t as any) >= (0 as any); t--) {
      let {
          match: r,
          type: s
        }: any = ((this as any).frontier as any)[t],
        i: any = (t as any) < ((e as any).depth as any) && (((e as any).end as any)((t as any) + (1 as any)) as any) == (((e as any).pos as any) + (((e as any).depth as any) - ((t as any) + (1 as any) as any) as any) as any),
        o: any = (qr as any)(e, t, s, r, i);
      if (o) {
        for (let l: any = (t as any) - (1 as any); (l as any) >= (0 as any); l--) {
          let {
              match: a,
              type: c
            }: any = ((this as any).frontier as any)[l],
            u: any = (qr as any)(e, l, c, a, !0);
          if (!u || (u as any).childCount) continue e;
        }
        return {
          depth: t,
          fit: o,
          move: i ? (((e as any).doc as any).resolve as any)(((e as any).after as any)((t as any) + (1 as any))) : e
        };
      }
    }
  }
  close(e: any): any {
    let t: any = ((this as any).findCloseLevel as any)(e);
    if (!t) return null;
    for (; ((this as any).depth as any) > ((t as any).depth as any);) ((this as any).closeFrontierNode as any)();
    ((t as any).fit as any).childCount && ((this as any).placed = (Kt as any)((this as any).placed, (t as any).depth, (t as any).fit)), e = (t as any).move;
    for (let r: any = ((t as any).depth as any) + (1 as any); (r as any) <= ((e as any).depth as any); r++) {
      let s: any = ((e as any).node as any)(r),
        i: any = ((((s as any).type as any).contentMatch as any).fillBefore as any)((s as any).content, !0, ((e as any).index as any)(r));
      ((this as any).openFrontierNode as any)((s as any).type, (s as any).attrs, i);
    }
    return e;
  }
  openFrontierNode(e: any, t: any = null, r: any): any {
    let s: any = ((this as any).frontier as any)[(this as any).depth];
    (s as any).match = (((s as any).match as any).matchType as any)(e), (this as any).placed = (Kt as any)((this as any).placed, (this as any).depth, ((k as any).from as any)(((e as any).create as any)(t, r))), (((this as any).frontier as any).push as any)({
      type: e,
      match: (e as any).contentMatch
    });
  }
  closeFrontierNode(): any {
    let t: any = ((((((this as any).frontier as any).pop as any)() as any).match as any).fillBefore as any)((k as any).empty, !0);
    (t as any).childCount && ((this as any).placed = (Kt as any)((this as any).placed, ((this as any).frontier as any).length, t));
  }
}
function qt(this: any, n: any, e: any, t: any): any {
  return (e as any) == (0 as any) ? ((n as any).cutByIndex as any)(t, (n as any).childCount) : ((n as any).replaceChild as any)(0, (((n as any).firstChild as any).copy as any)((qt as any)(((n as any).firstChild as any).content, (e as any) - (1 as any), t)));
}
function Kt(this: any, n: any, e: any, t: any): any {
  return (e as any) == (0 as any) ? ((n as any).append as any)(t) : ((n as any).replaceChild as any)(((n as any).childCount as any) - (1 as any), (((n as any).lastChild as any).copy as any)((Kt as any)(((n as any).lastChild as any).content, (e as any) - (1 as any), t)));
}
function Wr(this: any, n: any, e: any): any {
  for (let t: any = 0; (t as any) < (e as any); t++) n = ((n as any).firstChild as any).content;
  return n;
}
function zl(this: any, n: any, e: any, t: any): any {
  if ((e as any) <= (0 as any)) return n;
  let r: any = (n as any).content;
  return (e as any) > (1 as any) && (r = ((r as any).replaceChild as any)(0, (zl as any)((r as any).firstChild, (e as any) - (1 as any), ((r as any).childCount as any) == (1 as any) ? (t as any) - (1 as any) : 0))), (e as any) > (0 as any) && (r = ((((((n as any).type as any).contentMatch as any).fillBefore as any)(r) as any).append as any)(r), (t as any) <= (0 as any) && (r = ((r as any).append as any)(((((((n as any).type as any).contentMatch as any).matchFragment as any)(r) as any).fillBefore as any)((k as any).empty, !0)))), ((n as any).copy as any)(r);
}
function qr(this: any, n: any, e: any, t: any, r: any, s: any): any {
  let i: any = ((n as any).node as any)(e),
    o: any = s ? ((n as any).indexAfter as any)(e) : ((n as any).index as any)(e);
  if ((o as any) == ((i as any).childCount as any) && !((t as any).compatibleContent as any)((i as any).type)) return null;
  let l: any = ((r as any).fillBefore as any)((i as any).content, !0, o);
  return l && !(Ou as any)(t, (i as any).content, o) ? l : null;
}
function Ou(this: any, n: any, e: any, t: any): any {
  for (let r: any = t; (r as any) < ((e as any).childCount as any); r++) if (!((n as any).allowsMarks as any)((((e as any).child as any)(r) as any).marks)) return !0;
  return !1;
}
function Du(this: any, n: any): any {
  return ((n as any).spec as any).defining || ((n as any).spec as any).definingForContent;
}
function Iu(this: any, n: any, e: any, t: any, r: any): any {
  if (!(r as any).size) return ((n as any).deleteRange as any)(e, t);
  let s: any = (((n as any).doc as any).resolve as any)(e),
    i: any = (((n as any).doc as any).resolve as any)(t);
  if ((Ll as any)(s, i, r)) return ((n as any).step as any)(new (K as any)(e, t, r));
  let o: any = ($l as any)(s, i);
  ((o as any)[((o as any).length as any) - (1 as any)] as any) == (0 as any) && ((o as any).pop as any)();
  let l: any = -(((s as any).depth as any) + (1 as any));
  ((o as any).unshift as any)(l);
  for (let f: any = (s as any).depth, h: any = ((s as any).pos as any) - (1 as any); (f as any) > (0 as any); f--, h--) {
    let p: any = ((((s as any).node as any)(f) as any).type as any).spec;
    if ((p as any).defining || (p as any).definingAsContext || (p as any).isolating) break;
    (((o as any).indexOf as any)(f) as any) > (-1 as any) ? l = f : (((s as any).before as any)(f) as any) == (h as any) && ((o as any).splice as any)(1, 0, -f);
  }
  let a: any = ((o as any).indexOf as any)(l),
    c: any = [],
    u: any = (r as any).openStart;
  for (let f: any = (r as any).content, h: any = 0;; h++) {
    let p: any = (f as any).firstChild;
    if (((c as any).push as any)(p), (h as any) == ((r as any).openStart as any)) break;
    f = (p as any).content;
  }
  for (let f: any = (u as any) - (1 as any); (f as any) >= (0 as any); f--) {
    let h: any = (c as any)[f],
      p: any = (Du as any)((h as any).type);
    if (p && !((h as any).sameMarkup as any)(((s as any).node as any)((((Math as any).abs as any)(l) as any) - (1 as any)))) u = f;else if (p || !((h as any).type as any).isTextblock) break;
  }
  for (let f: any = (r as any).openStart; (f as any) >= (0 as any); f--) {
    let h: any = (((f as any) + (u as any) as any) + (1 as any) as any) % (((r as any).openStart as any) + (1 as any) as any),
      p: any = (c as any)[h];
    if (p) for (let m: any = 0; (m as any) < ((o as any).length as any); m++) {
      let g: any = (o as any)[((m as any) + (a as any) as any) % ((o as any).length as any)],
        y: any = !0;
      (g as any) < (0 as any) && (y = !1, g = -g);
      let b: any = ((s as any).node as any)((g as any) - (1 as any)),
        C: any = ((s as any).index as any)((g as any) - (1 as any));
      if (((b as any).canReplaceWith as any)(C, C, (p as any).type, (p as any).marks)) return ((n as any).replace as any)(((s as any).before as any)(g), y ? ((i as any).after as any)(g) : t, new (w as any)((Bl as any)((r as any).content, 0, (r as any).openStart, h), h, (r as any).openEnd));
    }
  }
  let d: any = ((n as any).steps as any).length;
  for (let f: any = ((o as any).length as any) - (1 as any); (f as any) >= (0 as any) && (((n as any).replace as any)(e, t, r), !((((n as any).steps as any).length as any) > (d as any))); f--) {
    let h: any = (o as any)[f];
    (h as any) < (0 as any) || (e = ((s as any).before as any)(h), t = ((i as any).after as any)(h));
  }
}
function Bl(this: any, n: any, e: any, t: any, r: any, s: any): any {
  if ((e as any) < (t as any)) {
    let i: any = (n as any).firstChild;
    n = ((n as any).replaceChild as any)(0, ((i as any).copy as any)((Bl as any)((i as any).content, (e as any) + (1 as any), t, r, i)));
  }
  if ((e as any) > (r as any)) {
    let i: any = ((s as any).contentMatchAt as any)(0),
      o: any = ((((i as any).fillBefore as any)(n) as any).append as any)(n);
    n = ((o as any).append as any)(((((i as any).matchFragment as any)(o) as any).fillBefore as any)((k as any).empty, !0));
  }
  return n;
}
function Ru(this: any, n: any, e: any, t: any, r: any): any {
  if (!(r as any).isInline && (e as any) == (t as any) && ((((((n as any).doc as any).resolve as any)(e) as any).parent as any).content as any).size) {
    let s: any = (Au as any)((n as any).doc, e, (r as any).type);
    (s as any) != (null as any) && (e = t = s);
  }
  ((n as any).replaceRange as any)(e, t, new (w as any)(((k as any).from as any)(r), 0, 0));
}
function Pu(this: any, n: any, e: any, t: any): any {
  let r: any = (((n as any).doc as any).resolve as any)(e),
    s: any = (((n as any).doc as any).resolve as any)(t),
    i: any = ($l as any)(r, s);
  for (let o: any = 0; (o as any) < ((i as any).length as any); o++) {
    let l: any = (i as any)[o],
      a: any = (o as any) == (((i as any).length as any) - (1 as any) as any);
    if (a && (l as any) == (0 as any) || (((((r as any).node as any)(l) as any).type as any).contentMatch as any).validEnd) return ((n as any).delete as any)(((r as any).start as any)(l), ((s as any).end as any)(l));
    if ((l as any) > (0 as any) && (a || ((((r as any).node as any)((l as any) - (1 as any)) as any).canReplace as any)(((r as any).index as any)((l as any) - (1 as any)), ((s as any).indexAfter as any)((l as any) - (1 as any))))) return ((n as any).delete as any)(((r as any).before as any)(l), ((s as any).after as any)(l));
  }
  for (let o: any = 1; (o as any) <= ((r as any).depth as any) && (o as any) <= ((s as any).depth as any); o++) if (((e as any) - (((r as any).start as any)(o) as any) as any) == (((r as any).depth as any) - (o as any) as any) && (t as any) > (((r as any).end as any)(o) as any) && ((((s as any).end as any)(o) as any) - (t as any) as any) != (((s as any).depth as any) - (o as any) as any) && (((r as any).start as any)((o as any) - (1 as any)) as any) == (((s as any).start as any)((o as any) - (1 as any)) as any) && ((((r as any).node as any)((o as any) - (1 as any)) as any).canReplace as any)(((r as any).index as any)((o as any) - (1 as any)), ((s as any).index as any)((o as any) - (1 as any)))) return ((n as any).delete as any)(((r as any).before as any)(o), t);
  ((n as any).delete as any)(e, t);
}
function $l(this: any, n: any, e: any): any {
  let t: any = [],
    r: any = ((Math as any).min as any)((n as any).depth, (e as any).depth);
  for (let s: any = r; (s as any) >= (0 as any); s--) {
    let i: any = ((n as any).start as any)(s);
    if ((i as any) < (((n as any).pos as any) - (((n as any).depth as any) - (s as any) as any) as any) || (((e as any).end as any)(s) as any) > (((e as any).pos as any) + (((e as any).depth as any) - (s as any) as any) as any) || (((((n as any).node as any)(s) as any).type as any).spec as any).isolating || (((((e as any).node as any)(s) as any).type as any).spec as any).isolating) break;
    ((i as any) == (((e as any).start as any)(s) as any) || (s as any) == ((n as any).depth as any) && (s as any) == ((e as any).depth as any) && ((n as any).parent as any).inlineContent && ((e as any).parent as any).inlineContent && s && (((e as any).start as any)((s as any) - (1 as any)) as any) == ((i as any) - (1 as any) as any)) && ((t as any).push as any)(s);
  }
  return t;
}
class Dt extends (te as any) {
  declare value: any;
  declare attr: any;
  declare pos: any;
  [key: string]: any;
  constructor(e: any, t: any, r: any) {
    super(), (this as any).pos = e, (this as any).attr = t, (this as any).value = r;
  }
  apply(e: any): any {
    let t: any = ((e as any).nodeAt as any)((this as any).pos);
    if (!t) return ((j as any).fail as any)("No node at attribute step's position");
    let r: any = ((Object as any).create as any)(null);
    for (let i in (t as any).attrs) (r as any)[i] = ((t as any).attrs as any)[i];
    (r as any)[(this as any).attr] = (this as any).value;
    let s: any = (((t as any).type as any).create as any)(r, null, (t as any).marks);
    return ((j as any).fromReplace as any)(e, (this as any).pos, ((this as any).pos as any) + (1 as any), new (w as any)(((k as any).from as any)(s), 0, (t as any).isLeaf ? 0 : 1));
  }
  getMap(): any {
    return (ce as any).empty;
  }
  invert(e: any): any {
    return new (Dt as any)((this as any).pos, (this as any).attr, ((((e as any).nodeAt as any)((this as any).pos) as any).attrs as any)[(this as any).attr]);
  }
  map(e: any): any {
    let t: any = ((e as any).mapResult as any)((this as any).pos, 1);
    return (t as any).deletedAfter ? null : new (Dt as any)((t as any).pos, (this as any).attr, (this as any).value);
  }
  toJSON(): any {
    return {
      stepType: "attr",
      pos: (this as any).pos,
      attr: (this as any).attr,
      value: (this as any).value
    };
  }
  static fromJSON(e: any, t: any): any {
    if ((typeof (t as any).pos as any) != ("number" as any) || (typeof (t as any).attr as any) != ("string" as any)) throw new (RangeError as any)("Invalid input for AttrStep.fromJSON");
    return new (Dt as any)((t as any).pos, (t as any).attr, (t as any).value);
  }
}
((te as any).jsonID as any)("attr", Dt);
class un extends (te as any) {
  declare value: any;
  declare attr: any;
  [key: string]: any;
  constructor(e: any, t: any) {
    super(), (this as any).attr = e, (this as any).value = t;
  }
  apply(e: any): any {
    let t: any = ((Object as any).create as any)(null);
    for (let s in (e as any).attrs) (t as any)[s] = ((e as any).attrs as any)[s];
    (t as any)[(this as any).attr] = (this as any).value;
    let r: any = (((e as any).type as any).create as any)(t, (e as any).content, (e as any).marks);
    return ((j as any).ok as any)(r);
  }
  getMap(): any {
    return (ce as any).empty;
  }
  invert(e: any): any {
    return new (un as any)((this as any).attr, ((e as any).attrs as any)[(this as any).attr]);
  }
  map(e: any): any {
    return this;
  }
  toJSON(): any {
    return {
      stepType: "docAttr",
      attr: (this as any).attr,
      value: (this as any).value
    };
  }
  static fromJSON(e: any, t: any): any {
    if ((typeof (t as any).attr as any) != ("string" as any)) throw new (RangeError as any)("Invalid input for DocAttrStep.fromJSON");
    return new (un as any)((t as any).attr, (t as any).value);
  }
}
((te as any).jsonID as any)("docAttr", un);
let Rt: any = class extends (Error as any) {
  [key: string]: any;
};
Rt = function n(this: any, e: any): any {
  let t: any = ((Error as any).call as any)(this, e);
  return (t as any).__proto__ = (n as any).prototype, t;
};
(Rt as any).prototype = ((Object as any).create as any)((Error as any).prototype);
((Rt as any).prototype as any).constructor = Rt;
((Rt as any).prototype as any).name = "TransformError";
class Fl {
  declare mapping: any;
  declare docs: any;
  declare steps: any;
  declare doc: any;
  [key: string]: any;
  constructor(e: any) {
    (this as any).doc = e, (this as any).steps = [], (this as any).docs = [], (this as any).mapping = new (cn as any)();
  }
  get before(): any {
    return ((this as any).docs as any).length ? ((this as any).docs as any)[0] : (this as any).doc;
  }
  step(e: any): any {
    let t: any = ((this as any).maybeStep as any)(e);
    if ((t as any).failed) throw new (Rt as any)((t as any).failed);
    return this;
  }
  maybeStep(e: any): any {
    let t: any = ((e as any).apply as any)((this as any).doc);
    return (t as any).failed || ((this as any).addStep as any)(e, (t as any).doc), t;
  }
  get docChanged(): any {
    return (((this as any).steps as any).length as any) > (0 as any);
  }
  addStep(e: any, t: any): any {
    (((this as any).docs as any).push as any)((this as any).doc), (((this as any).steps as any).push as any)(e), (((this as any).mapping as any).appendMap as any)(((e as any).getMap as any)()), (this as any).doc = t;
  }
  replace(e: any, t: any = e, r: any = (w as any).empty): any {
    let s: any = (Tr as any)((this as any).doc, e, t, r);
    return s && ((this as any).step as any)(s), this;
  }
  replaceWith(e: any, t: any, r: any): any {
    return ((this as any).replace as any)(e, t, new (w as any)(((k as any).from as any)(r), 0, 0));
  }
  delete(e: any, t: any): any {
    return ((this as any).replace as any)(e, t, (w as any).empty);
  }
  insert(e: any, t: any): any {
    return ((this as any).replaceWith as any)(e, e, t);
  }
  replaceRange(e: any, t: any, r: any): any {
    return (Iu as any)(this, e, t, r), this;
  }
  replaceRangeWith(e: any, t: any, r: any): any {
    return (Ru as any)(this, e, t, r), this;
  }
  deleteRange(e: any, t: any): any {
    return (Pu as any)(this, e, t), this;
  }
  lift(e: any, t: any): any {
    return (ku as any)(this, e, t), this;
  }
  join(e: any, t: any = 1): any {
    return (Tu as any)(this, e, t), this;
  }
  wrap(e: any, t: any): any {
    return (Su as any)(this, e, t), this;
  }
  setBlockType(e: any, t: any = e, r: any, s: any = null): any {
    return (wu as any)(this, e, t, r, s), this;
  }
  setNodeMarkup(e: any, t: any, r: any = null, s: any): any {
    return (Mu as any)(this, e, t, r, s), this;
  }
  setNodeAttribute(e: any, t: any, r: any): any {
    return ((this as any).step as any)(new (Dt as any)(e, t, r)), this;
  }
  setDocAttribute(e: any, t: any): any {
    return ((this as any).step as any)(new (un as any)(e, t)), this;
  }
  addNodeMark(e: any, t: any): any {
    return ((this as any).step as any)(new (Ue as any)(e, t)), this;
  }
  removeNodeMark(e: any, t: any): any {
    let r: any = (((this as any).doc as any).nodeAt as any)(e);
    if (!r) throw new (RangeError as any)(("No node at position " as any) + (e as any));
    if (t instanceof L) ((t as any).isInSet as any)((r as any).marks) && ((this as any).step as any)(new (pt as any)(e, t));else {
      let s: any = (r as any).marks,
        i: any,
        o: any = [];
      for (; i = ((t as any).isInSet as any)(s);) ((o as any).push as any)(new (pt as any)(e, i)), s = ((i as any).removeFromSet as any)(s);
      for (let l: any = ((o as any).length as any) - (1 as any); (l as any) >= (0 as any); l--) ((this as any).step as any)((o as any)[l]);
    }
    return this;
  }
  split(e: any, t: any = 1, r: any): any {
    return (Eu as any)(this, e, t, r), this;
  }
  addMark(e: any, t: any, r: any): any {
    return (mu as any)(this, e, t, r), this;
  }
  removeMark(e: any, t: any, r: any): any {
    return (gu as any)(this, e, t, r), this;
  }
  clearIncompatible(e: any, t: any, r: any): any {
    return (qs as any)(this, e, t, r), this;
  }
}
const Kr: any = ((Object as any).create as any)(null);
class O {
  declare ranges: any;
  declare $head: any;
  declare $anchor: any;
  [key: string]: any;
  constructor(e: any, t: any, r: any) {
    (this as any).$anchor = e, (this as any).$head = t, (this as any).ranges = r || [new (Lu as any)(((e as any).min as any)(t), ((e as any).max as any)(t))];
  }
  get anchor(): any {
    return ((this as any).$anchor as any).pos;
  }
  get head(): any {
    return ((this as any).$head as any).pos;
  }
  get from(): any {
    return ((this as any).$from as any).pos;
  }
  get to(): any {
    return ((this as any).$to as any).pos;
  }
  get $from(): any {
    return (((this as any).ranges as any)[0] as any).$from;
  }
  get $to(): any {
    return (((this as any).ranges as any)[0] as any).$to;
  }
  get empty(): any {
    let e: any = (this as any).ranges;
    for (let t: any = 0; (t as any) < ((e as any).length as any); t++) if (((((e as any)[t] as any).$from as any).pos as any) != ((((e as any)[t] as any).$to as any).pos as any)) return !1;
    return !0;
  }
  content(): any {
    return ((((this as any).$from as any).doc as any).slice as any)((this as any).from, (this as any).to, !0);
  }
  replace(e: any, t: any = (w as any).empty): any {
    let r: any = ((t as any).content as any).lastChild,
      s: any = null;
    for (let l: any = 0; (l as any) < ((t as any).openEnd as any); l++) s = r, r = (r as any).lastChild;
    let i: any = ((e as any).steps as any).length,
      o: any = (this as any).ranges;
    for (let l: any = 0; (l as any) < ((o as any).length as any); l++) {
      let {
          $from: a,
          $to: c
        }: any = (o as any)[l],
        u: any = (((e as any).mapping as any).slice as any)(i);
      ((e as any).replaceRange as any)(((u as any).map as any)((a as any).pos), ((u as any).map as any)((c as any).pos), l ? (w as any).empty : t), (l as any) == (0 as any) && (Ki as any)(e, i, (r ? (r as any).isInline : s && (s as any).isTextblock) ? -1 : 1);
    }
  }
  replaceWith(e: any, t: any): any {
    let r: any = ((e as any).steps as any).length,
      s: any = (this as any).ranges;
    for (let i: any = 0; (i as any) < ((s as any).length as any); i++) {
      let {
          $from: o,
          $to: l
        }: any = (s as any)[i],
        a: any = (((e as any).mapping as any).slice as any)(r),
        c: any = ((a as any).map as any)((o as any).pos),
        u: any = ((a as any).map as any)((l as any).pos);
      i ? ((e as any).deleteRange as any)(c, u) : (((e as any).replaceRangeWith as any)(c, u, t), (Ki as any)(e, r, (t as any).isInline ? -1 : 1));
    }
  }
  static findFrom(e: any, t: any, r: any = !1): any {
    let s: any = ((e as any).parent as any).inlineContent ? new (N as any)(e) : (vt as any)(((e as any).node as any)(0), (e as any).parent, (e as any).pos, ((e as any).index as any)(), t, r);
    if (s) return s;
    for (let i: any = ((e as any).depth as any) - (1 as any); (i as any) >= (0 as any); i--) {
      let o: any = (t as any) < (0 as any) ? (vt as any)(((e as any).node as any)(0), ((e as any).node as any)(i), ((e as any).before as any)((i as any) + (1 as any)), ((e as any).index as any)(i), t, r) : (vt as any)(((e as any).node as any)(0), ((e as any).node as any)(i), ((e as any).after as any)((i as any) + (1 as any)), (((e as any).index as any)(i) as any) + (1 as any), t, r);
      if (o) return o;
    }
    return null;
  }
  static near(e: any, t: any = 1): any {
    return ((this as any).findFrom as any)(e, t) || ((this as any).findFrom as any)(e, -t) || new (ue as any)(((e as any).node as any)(0));
  }
  static atStart(e: any): any {
    return (vt as any)(e, e, 0, 0, 1) || new (ue as any)(e);
  }
  static atEnd(e: any): any {
    return (vt as any)(e, e, ((e as any).content as any).size, (e as any).childCount, -1) || new (ue as any)(e);
  }
  static fromJSON(e: any, t: any): any {
    if (!t || !(t as any).type) throw new (RangeError as any)("Invalid input for Selection.fromJSON");
    let r: any = (Kr as any)[(t as any).type];
    if (!r) throw new (RangeError as any)(`No selection type ${(t as any).type} defined`);
    return ((r as any).fromJSON as any)(e, t);
  }
  static jsonID(e: any, t: any): any {
    if (e in Kr) throw new (RangeError as any)(("Duplicate use of selection JSON ID " as any) + (e as any));
    return (Kr as any)[e] = t, ((t as any).prototype as any).jsonID = e, t;
  }
  getBookmark(): any {
    return ((((N as any).between as any)((this as any).$anchor, (this as any).$head) as any).getBookmark as any)();
  }
}
((O as any).prototype as any).visible = !0;
class Lu {
  declare $to: any;
  declare $from: any;
  [key: string]: any;
  constructor(e: any, t: any) {
    (this as any).$from = e, (this as any).$to = t;
  }
}
let Wi: any = !1;
function qi(this: any, n: any): any {
  !Wi && !((n as any).parent as any).inlineContent && (Wi = !0, ((console as any).warn as any)((("TextSelection endpoint not pointing into a node with inline content (" as any) + ((((n as any).parent as any).type as any).name as any) as any) + (")" as any)));
}
class N extends (O as any) {
  [key: string]: any;
  constructor(e: any, t: any = e) {
    (qi as any)(e), (qi as any)(t), super(e, t);
  }
  get $cursor(): any {
    return (((this as any).$anchor as any).pos as any) == (((this as any).$head as any).pos as any) ? (this as any).$head : null;
  }
  map(e: any, t: any): any {
    let r: any = ((e as any).resolve as any)(((t as any).map as any)((this as any).head));
    if (!((r as any).parent as any).inlineContent) return ((O as any).near as any)(r);
    let s: any = ((e as any).resolve as any)(((t as any).map as any)((this as any).anchor));
    return new (N as any)(((s as any).parent as any).inlineContent ? s : r, r);
  }
  replace(e: any, t: any = (w as any).empty): any {
    if ((super.replace as any)(e, t), (t as any) == ((w as any).empty as any)) {
      let r: any = (((this as any).$from as any).marksAcross as any)((this as any).$to);
      r && ((e as any).ensureMarks as any)(r);
    }
  }
  eq(e: any): any {
    return e instanceof N && ((e as any).anchor as any) == ((this as any).anchor as any) && ((e as any).head as any) == ((this as any).head as any);
  }
  getBookmark(): any {
    return new (Ar as any)((this as any).anchor, (this as any).head);
  }
  toJSON(): any {
    return {
      type: "text",
      anchor: (this as any).anchor,
      head: (this as any).head
    };
  }
  static fromJSON(e: any, t: any): any {
    if ((typeof (t as any).anchor as any) != ("number" as any) || (typeof (t as any).head as any) != ("number" as any)) throw new (RangeError as any)("Invalid input for TextSelection.fromJSON");
    return new (N as any)(((e as any).resolve as any)((t as any).anchor), ((e as any).resolve as any)((t as any).head));
  }
  static create(e: any, t: any, r: any = t): any {
    let s: any = ((e as any).resolve as any)(t);
    return new (this as any)(s, (r as any) == (t as any) ? s : ((e as any).resolve as any)(r));
  }
  static between(e: any, t: any, r: any): any {
    let s: any = ((e as any).pos as any) - ((t as any).pos as any);
    if ((!r || s) && (r = (s as any) >= (0 as any) ? 1 : -1), !((t as any).parent as any).inlineContent) {
      let i: any = ((O as any).findFrom as any)(t, r, !0) || ((O as any).findFrom as any)(t, -r, !0);
      if (i) t = (i as any).$head;else return ((O as any).near as any)(t, r);
    }
    return ((e as any).parent as any).inlineContent || ((s as any) == (0 as any) ? e = t : (e = ((((O as any).findFrom as any)(e, -r, !0) || ((O as any).findFrom as any)(e, r, !0)) as any).$anchor, (((e as any).pos as any) < ((t as any).pos as any) as any) != ((s as any) < (0 as any) as any) && (e = t))), new (N as any)(e, t);
  }
}
((O as any).jsonID as any)("text", N);
class Ar {
  declare head: any;
  declare anchor: any;
  [key: string]: any;
  constructor(e: any, t: any) {
    (this as any).anchor = e, (this as any).head = t;
  }
  map(e: any): any {
    return new (Ar as any)(((e as any).map as any)((this as any).anchor), ((e as any).map as any)((this as any).head));
  }
  resolve(e: any): any {
    return ((N as any).between as any)(((e as any).resolve as any)((this as any).anchor), ((e as any).resolve as any)((this as any).head));
  }
}
class v extends (O as any) {
  declare node: any;
  [key: string]: any;
  constructor(e: any) {
    let t: any = (e as any).nodeAfter,
      r: any = ((((e as any).node as any)(0) as any).resolve as any)(((e as any).pos as any) + ((t as any).nodeSize as any));
    super(e, r), (this as any).node = t;
  }
  map(e: any, t: any): any {
    let {
        deleted: r,
        pos: s
      }: any = ((t as any).mapResult as any)((this as any).anchor),
      i: any = ((e as any).resolve as any)(s);
    return r ? ((O as any).near as any)(i) : new (v as any)(i);
  }
  content(): any {
    return new (w as any)(((k as any).from as any)((this as any).node), 0, 0);
  }
  eq(e: any): any {
    return e instanceof v && ((e as any).anchor as any) == ((this as any).anchor as any);
  }
  toJSON(): any {
    return {
      type: "node",
      anchor: (this as any).anchor
    };
  }
  getBookmark(): any {
    return new (Us as any)((this as any).anchor);
  }
  static fromJSON(e: any, t: any): any {
    if ((typeof (t as any).anchor as any) != ("number" as any)) throw new (RangeError as any)("Invalid input for NodeSelection.fromJSON");
    return new (v as any)(((e as any).resolve as any)((t as any).anchor));
  }
  static create(e: any, t: any): any {
    return new (v as any)(((e as any).resolve as any)(t));
  }
  static isSelectable(e: any): any {
    return !(e as any).isText && ((((e as any).type as any).spec as any).selectable as any) !== (!1 as any);
  }
}
((v as any).prototype as any).visible = !1;
((O as any).jsonID as any)("node", v);
class Us {
  declare anchor: any;
  [key: string]: any;
  constructor(e: any) {
    (this as any).anchor = e;
  }
  map(e: any): any {
    let {
      deleted: t,
      pos: r
    }: any = ((e as any).mapResult as any)((this as any).anchor);
    return t ? new (Ar as any)(r, r) : new (Us as any)(r);
  }
  resolve(e: any): any {
    let t: any = ((e as any).resolve as any)((this as any).anchor),
      r: any = (t as any).nodeAfter;
    return r && ((v as any).isSelectable as any)(r) ? new (v as any)(t) : ((O as any).near as any)(t);
  }
}
class ue extends (O as any) {
  [key: string]: any;
  constructor(e: any) {
    super(((e as any).resolve as any)(0), ((e as any).resolve as any)(((e as any).content as any).size));
  }
  replace(e: any, t: any = (w as any).empty): any {
    if ((t as any) == ((w as any).empty as any)) {
      ((e as any).delete as any)(0, (((e as any).doc as any).content as any).size);
      let r: any = ((O as any).atStart as any)((e as any).doc);
      ((r as any).eq as any)((e as any).selection) || ((e as any).setSelection as any)(r);
    } else (super.replace as any)(e, t);
  }
  toJSON(): any {
    return {
      type: "all"
    };
  }
  static fromJSON(e: any): any {
    return new (ue as any)(e);
  }
  map(e: any): any {
    return new (ue as any)(e);
  }
  eq(e: any): any {
    return e instanceof ue;
  }
  getBookmark(): any {
    return zu;
  }
}
((O as any).jsonID as any)("all", ue);
const zu: any = {
  map(): any {
    return this;
  },
  resolve(n: any): any {
    return new (ue as any)(n);
  }
};
function vt(this: any, n: any, e: any, t: any, r: any, s: any, i: any = !1): any {
  if ((e as any).inlineContent) return ((N as any).create as any)(n, t);
  for (let o: any = (r as any) - (((s as any) > (0 as any) ? 0 : 1) as any); (s as any) > (0 as any) ? (o as any) < ((e as any).childCount as any) : (o as any) >= (0 as any); o += s) {
    let l: any = ((e as any).child as any)(o);
    if ((l as any).isAtom) {
      if (!i && ((v as any).isSelectable as any)(l)) return ((v as any).create as any)(n, (t as any) - (((s as any) < (0 as any) ? (l as any).nodeSize : 0) as any));
    } else {
      let a: any = (vt as any)(n, l, (t as any) + (s as any), (s as any) < (0 as any) ? (l as any).childCount : 0, s, i);
      if (a) return a;
    }
    t += ((l as any).nodeSize as any) * (s as any);
  }
  return null;
}
function Ki(this: any, n: any, e: any, t: any): any {
  let r: any = (((n as any).steps as any).length as any) - (1 as any);
  if ((r as any) < (e as any)) return;
  let s: any = ((n as any).steps as any)[r];
  if (!(s instanceof K || s instanceof J)) return;
  let i: any = (((n as any).mapping as any).maps as any)[r],
    o: any;
  ((i as any).forEach as any)((l: any, a: any, c: any, u: any): any => {
    (o as any) == (null as any) && (o = u);
  }), ((n as any).setSelection as any)(((O as any).near as any)((((n as any).doc as any).resolve as any)(o), t));
}
const Ui: number = 1,
  Cn: number = 2,
  Ji: number = 4;
class Bu extends (Fl as any) {
  declare storedMarks: any;
  declare curSelection: any;
  declare time: any;
  declare meta: any;
  declare updated: any;
  declare curSelectionFor: any;
  [key: string]: any;
  constructor(e: any) {
    super((e as any).doc), (this as any).curSelectionFor = 0, (this as any).updated = 0, (this as any).meta = ((Object as any).create as any)(null), (this as any).time = ((Date as any).now as any)(), (this as any).curSelection = (e as any).selection, (this as any).storedMarks = (e as any).storedMarks;
  }
  get selection(): any {
    return ((this as any).curSelectionFor as any) < (((this as any).steps as any).length as any) && ((this as any).curSelection = (((this as any).curSelection as any).map as any)((this as any).doc, (((this as any).mapping as any).slice as any)((this as any).curSelectionFor)), (this as any).curSelectionFor = ((this as any).steps as any).length), (this as any).curSelection;
  }
  setSelection(e: any): any {
    if ((((e as any).$from as any).doc as any) != ((this as any).doc as any)) throw new (RangeError as any)("Selection passed to setSelection must point at the current document");
    return (this as any).curSelection = e, (this as any).curSelectionFor = ((this as any).steps as any).length, (this as any).updated = ((((this as any).updated as any) | (Ui as any)) as any) & (~Cn as any), (this as any).storedMarks = null, this;
  }
  get selectionSet(): any {
    return ((((this as any).updated as any) & (Ui as any)) as any) > (0 as any);
  }
  setStoredMarks(e: any): any {
    return (this as any).storedMarks = e, (this as any).updated |= Cn, this;
  }
  ensureMarks(e: any): any {
    return ((L as any).sameSet as any)((this as any).storedMarks || ((((this as any).selection as any).$from as any).marks as any)(), e) || ((this as any).setStoredMarks as any)(e), this;
  }
  addStoredMark(e: any): any {
    return ((this as any).ensureMarks as any)(((e as any).addToSet as any)((this as any).storedMarks || ((((this as any).selection as any).$head as any).marks as any)()));
  }
  removeStoredMark(e: any): any {
    return ((this as any).ensureMarks as any)(((e as any).removeFromSet as any)((this as any).storedMarks || ((((this as any).selection as any).$head as any).marks as any)()));
  }
  get storedMarksSet(): any {
    return ((((this as any).updated as any) & (Cn as any)) as any) > (0 as any);
  }
  addStep(e: any, t: any): any {
    (super.addStep as any)(e, t), (this as any).updated = ((this as any).updated as any) & (~Cn as any), (this as any).storedMarks = null;
  }
  setTime(e: any): any {
    return (this as any).time = e, this;
  }
  replaceSelection(e: any): any {
    return (((this as any).selection as any).replace as any)(this, e), this;
  }
  replaceSelectionWith(e: any, t: any = !0): any {
    let r: any = (this as any).selection;
    return t && (e = ((e as any).mark as any)((this as any).storedMarks || ((r as any).empty ? (((r as any).$from as any).marks as any)() : (((r as any).$from as any).marksAcross as any)((r as any).$to) || (L as any).none))), ((r as any).replaceWith as any)(this, e), this;
  }
  deleteSelection(): any {
    return (((this as any).selection as any).replace as any)(this), this;
  }
  insertText(e: any, t: any, r: any): any {
    let s: any = (((this as any).doc as any).type as any).schema;
    if ((t as any) == (null as any)) return e ? ((this as any).replaceSelectionWith as any)(((s as any).text as any)(e), !0) : ((this as any).deleteSelection as any)();
    {
      if ((r as any) == (null as any) && (r = t), !e) return ((this as any).deleteRange as any)(t, r);
      let i: any = (this as any).storedMarks;
      if (!i) {
        let o: any = (((this as any).doc as any).resolve as any)(t);
        i = (r as any) == (t as any) ? ((o as any).marks as any)() : ((o as any).marksAcross as any)((((this as any).doc as any).resolve as any)(r));
      }
      return ((this as any).replaceRangeWith as any)(t, r, ((s as any).text as any)(e, i)), !((this as any).selection as any).empty && (((this as any).selection as any).to as any) == ((t as any) + ((e as any).length as any) as any) && ((this as any).setSelection as any)(((O as any).near as any)(((this as any).selection as any).$to)), this;
    }
  }
  setMeta(e: any, t: any): any {
    return ((this as any).meta as any)[(typeof e as any) == ("string" as any) ? e : (e as any).key] = t, this;
  }
  getMeta(e: any): any {
    return ((this as any).meta as any)[(typeof e as any) == ("string" as any) ? e : (e as any).key];
  }
  get isGeneric(): any {
    for (let e in (this as any).meta) return !1;
    return !0;
  }
  scrollIntoView(): any {
    return (this as any).updated |= Ji, this;
  }
  get scrolledIntoView(): any {
    return ((((this as any).updated as any) & (Ji as any)) as any) > (0 as any);
  }
}
function Gi(this: any, n: any, e: any): any {
  return !e || !n ? n : ((n as any).bind as any)(e);
}
class Ut {
  declare apply: any;
  declare init: any;
  declare name: any;
  [key: string]: any;
  constructor(e: any, t: any, r: any) {
    (this as any).name = e, (this as any).init = (Gi as any)((t as any).init, r), (this as any).apply = (Gi as any)((t as any).apply, r);
  }
}
const $u: any = [new (Ut as any)("doc", {
  init(n: any): any {
    return (n as any).doc || ((((n as any).schema as any).topNodeType as any).createAndFill as any)();
  },
  apply(n: any): any {
    return (n as any).doc;
  }
}), new (Ut as any)("selection", {
  init(n: any, e: any): any {
    return (n as any).selection || ((O as any).atStart as any)((e as any).doc);
  },
  apply(n: any): any {
    return (n as any).selection;
  }
}), new (Ut as any)("storedMarks", {
  init(n: any): any {
    return (n as any).storedMarks || null;
  },
  apply(n: any, e: any, t: any, r: any): any {
    return ((r as any).selection as any).$cursor ? (n as any).storedMarks : null;
  }
}), new (Ut as any)("scrollToSelection", {
  init(): any {
    return 0;
  },
  apply(n: any, e: any): any {
    return (n as any).scrolledIntoView ? (e as any) + (1 as any) : e;
  }
})];
class Ur {
  declare fields: any;
  declare pluginsByKey: any;
  declare plugins: any;
  declare schema: any;
  [key: string]: any;
  constructor(e: any, t: any) {
    (this as any).schema = e, (this as any).plugins = [], (this as any).pluginsByKey = ((Object as any).create as any)(null), (this as any).fields = (($u as any).slice as any)(), t && ((t as any).forEach as any)((r: any): any => {
      if (((this as any).pluginsByKey as any)[(r as any).key]) throw new (RangeError as any)((("Adding different instances of a keyed plugin (" as any) + ((r as any).key as any) as any) + (")" as any));
      (((this as any).plugins as any).push as any)(r), ((this as any).pluginsByKey as any)[(r as any).key] = r, ((r as any).spec as any).state && (((this as any).fields as any).push as any)(new (Ut as any)((r as any).key, ((r as any).spec as any).state, r));
    });
  }
}
class Ot {
  declare config: any;
  [key: string]: any;
  constructor(e: any) {
    (this as any).config = e;
  }
  get schema(): any {
    return ((this as any).config as any).schema;
  }
  get plugins(): any {
    return ((this as any).config as any).plugins;
  }
  apply(e: any): any {
    return (((this as any).applyTransaction as any)(e) as any).state;
  }
  filterTransaction(e: any, t: any = -1): any {
    for (let r: any = 0; (r as any) < ((((this as any).config as any).plugins as any).length as any); r++) if ((r as any) != (t as any)) {
      let s: any = (((this as any).config as any).plugins as any)[r];
      if (((s as any).spec as any).filterTransaction && !((((s as any).spec as any).filterTransaction as any).call as any)(s, e, this)) return !1;
    }
    return !0;
  }
  applyTransaction(e: any): any {
    if (!((this as any).filterTransaction as any)(e)) return {
      state: this,
      transactions: []
    };
    let t: any = [e],
      r: any = ((this as any).applyInner as any)(e),
      s: any = null;
    for (;;) {
      let i: any = !1;
      for (let o: any = 0; (o as any) < ((((this as any).config as any).plugins as any).length as any); o++) {
        let l: any = (((this as any).config as any).plugins as any)[o];
        if (((l as any).spec as any).appendTransaction) {
          let a: any = s ? ((s as any)[o] as any).n : 0,
            c: any = s ? ((s as any)[o] as any).state : this,
            u: any = (a as any) < ((t as any).length as any) && ((((l as any).spec as any).appendTransaction as any).call as any)(l, a ? ((t as any).slice as any)(a) : t, c, r);
          if (u && ((r as any).filterTransaction as any)(u, o)) {
            if (((u as any).setMeta as any)("appendedTransaction", e), !s) {
              s = [];
              for (let d: any = 0; (d as any) < ((((this as any).config as any).plugins as any).length as any); d++) ((s as any).push as any)((d as any) < (o as any) ? {
                state: r,
                n: (t as any).length
              } : {
                state: this,
                n: 0
              });
            }
            ((t as any).push as any)(u), r = ((r as any).applyInner as any)(u), i = !0;
          }
          s && ((s as any)[o] = {
            state: r,
            n: (t as any).length
          });
        }
      }
      if (!i) return {
        state: r,
        transactions: t
      };
    }
  }
  applyInner(e: any): any {
    if (!(((e as any).before as any).eq as any)((this as any).doc)) throw new (RangeError as any)("Applying a mismatched transaction");
    let t: any = new (Ot as any)((this as any).config),
      r: any = ((this as any).config as any).fields;
    for (let s: any = 0; (s as any) < ((r as any).length as any); s++) {
      let i: any = (r as any)[s];
      (t as any)[(i as any).name] = ((i as any).apply as any)(e, (this as any)[(i as any).name], this, t);
    }
    return t;
  }
  get tr(): any {
    return new (Bu as any)(this);
  }
  static create(e: any): any {
    let t: any = new (Ur as any)((e as any).doc ? (((e as any).doc as any).type as any).schema : (e as any).schema, (e as any).plugins),
      r: any = new (Ot as any)(t);
    for (let s: any = 0; (s as any) < (((t as any).fields as any).length as any); s++) (r as any)[(((t as any).fields as any)[s] as any).name] = ((((t as any).fields as any)[s] as any).init as any)(e, r);
    return r;
  }
  reconfigure(e: any): any {
    let t: any = new (Ur as any)((this as any).schema, (e as any).plugins),
      r: any = (t as any).fields,
      s: any = new (Ot as any)(t);
    for (let i: any = 0; (i as any) < ((r as any).length as any); i++) {
      let o: any = ((r as any)[i] as any).name;
      (s as any)[o] = ((this as any).hasOwnProperty as any)(o) ? (this as any)[o] : (((r as any)[i] as any).init as any)(e, s);
    }
    return s;
  }
  toJSON(e: any): any {
    let t: any = {
      doc: (((this as any).doc as any).toJSON as any)(),
      selection: (((this as any).selection as any).toJSON as any)()
    };
    if ((this as any).storedMarks && ((t as any).storedMarks = (((this as any).storedMarks as any).map as any)((r: any): any => ((r as any).toJSON as any)())), e && (typeof e as any) == ("object" as any)) for (let r in e) {
      if ((r as any) == ("doc" as any) || (r as any) == ("selection" as any)) throw new (RangeError as any)("The JSON fields `doc` and `selection` are reserved");
      let s: any = (e as any)[r],
        i: any = ((s as any).spec as any).state;
      i && (i as any).toJSON && ((t as any)[r] = (((i as any).toJSON as any).call as any)(s, (this as any)[(s as any).key]));
    }
    return t;
  }
  static fromJSON(e: any, t: any, r: any): any {
    if (!t) throw new (RangeError as any)("Invalid input for EditorState.fromJSON");
    if (!(e as any).schema) throw new (RangeError as any)("Required config field 'schema' missing");
    let s: any = new (Ur as any)((e as any).schema, (e as any).plugins),
      i: any = new (Ot as any)(s);
    return (((s as any).fields as any).forEach as any)((o: any): any => {
      if (((o as any).name as any) == ("doc" as any)) (i as any).doc = ((Se as any).fromJSON as any)((e as any).schema, (t as any).doc);else if (((o as any).name as any) == ("selection" as any)) (i as any).selection = ((O as any).fromJSON as any)((i as any).doc, (t as any).selection);else if (((o as any).name as any) == ("storedMarks" as any)) (t as any).storedMarks && ((i as any).storedMarks = (((t as any).storedMarks as any).map as any)(((e as any).schema as any).markFromJSON));else {
        if (r) for (let l in r) {
          let a: any = (r as any)[l],
            c: any = ((a as any).spec as any).state;
          if (((a as any).key as any) == ((o as any).name as any) && c && (c as any).fromJSON && ((((Object as any).prototype as any).hasOwnProperty as any).call as any)(t, l)) {
            (i as any)[(o as any).name] = (((c as any).fromJSON as any).call as any)(a, e, (t as any)[l], i);
            return;
          }
        }
        (i as any)[(o as any).name] = ((o as any).init as any)(e, i);
      }
    }), i;
  }
}
function Hl(this: any, n: any, e: any, t: any): any {
  for (let r in n) {
    let s: any = (n as any)[r];
    s instanceof Function ? s = ((s as any).bind as any)(e) : (r as any) == ("handleDOMEvents" as any) && (s = (Hl as any)(s, e, {})), (t as any)[r] = s;
  }
  return t;
}
class $ {
  declare key: any;
  declare props: any;
  declare spec: any;
  [key: string]: any;
  constructor(e: any) {
    (this as any).spec = e, (this as any).props = {}, (e as any).props && (Hl as any)((e as any).props, this, (this as any).props), (this as any).key = (e as any).key ? ((e as any).key as any).key : (Vl as any)("plugin");
  }
  getState(e: any): any {
    return (e as any)[(this as any).key];
  }
}
const Jr: any = ((Object as any).create as any)(null);
function Vl(this: any, n: any): any {
  return n in Jr ? ((n as any) + ("$" as any) as any) + (++(Jr as any)[n] as any) : ((Jr as any)[n] = 0, (n as any) + ("$" as any));
}
class q {
  declare key: any;
  [key: string]: any;
  constructor(e: any = "key") {
    (this as any).key = (Vl as any)(e);
  }
  get(e: any): any {
    return (((e as any).config as any).pluginsByKey as any)[(this as any).key];
  }
  getState(e: any): any {
    return (e as any)[(this as any).key];
  }
}
const Js: any = (n: any, e: any): any => ((n as any).selection as any).empty ? !1 : (e && (e as any)((((((n as any).tr as any).deleteSelection as any)() as any).scrollIntoView as any)()), !0);
function jl(this: any, n: any, e: any): any {
  let {
    $cursor: t
  }: any = (n as any).selection;
  return !t || (e ? !((e as any).endOfTextblock as any)("backward", n) : ((t as any).parentOffset as any) > (0 as any)) ? null : t;
}
const _l: any = (n: any, e: any, t: any): any => {
    let r: any = (jl as any)(n, t);
    if (!r) return !1;
    let s: any = (Gs as any)(r);
    if (!s) {
      let o: any = ((r as any).blockRange as any)(),
        l: any = o && (Ht as any)(o);
      return (l as any) == (null as any) ? !1 : (e && (e as any)((((((n as any).tr as any).lift as any)(o, l) as any).scrollIntoView as any)()), !0);
    }
    let i: any = (s as any).nodeBefore;
    if ((Ql as any)(n, s, e, -1)) return !0;
    if (((((r as any).parent as any).content as any).size as any) == (0 as any) && ((Pt as any)(i, "end") || ((v as any).isSelectable as any)(i))) for (let o: any = (r as any).depth;; o--) {
      let l: any = (Tr as any)((n as any).doc, ((r as any).before as any)(o), ((r as any).after as any)(o), (w as any).empty);
      if (l && (((l as any).slice as any).size as any) < (((l as any).to as any) - ((l as any).from as any) as any)) {
        if (e) {
          let a: any = (((n as any).tr as any).step as any)(l);
          ((a as any).setSelection as any)((Pt as any)(i, "end") ? ((O as any).findFrom as any)((((a as any).doc as any).resolve as any)((((a as any).mapping as any).map as any)((s as any).pos, -1)), -1) : ((v as any).create as any)((a as any).doc, ((s as any).pos as any) - ((i as any).nodeSize as any))), (e as any)(((a as any).scrollIntoView as any)());
        }
        return !0;
      }
      if ((o as any) == (1 as any) || ((((r as any).node as any)((o as any) - (1 as any)) as any).childCount as any) > (1 as any)) break;
    }
    return (i as any).isAtom && ((s as any).depth as any) == (((r as any).depth as any) - (1 as any) as any) ? (e && (e as any)((((((n as any).tr as any).delete as any)(((s as any).pos as any) - ((i as any).nodeSize as any), (s as any).pos) as any).scrollIntoView as any)()), !0) : !1;
  },
  Fu: any = (n: any, e: any, t: any): any => {
    let r: any = (jl as any)(n, t);
    if (!r) return !1;
    let s: any = (Gs as any)(r);
    return s ? (Wl as any)(n, s, e) : !1;
  },
  Hu: any = (n: any, e: any, t: any): any => {
    let r: any = (Kl as any)(n, t);
    if (!r) return !1;
    let s: any = (Ys as any)(r);
    return s ? (Wl as any)(n, s, e) : !1;
  };
function Wl(this: any, n: any, e: any, t: any): any {
  let r: any = (e as any).nodeBefore,
    s: any = r,
    i: any = ((e as any).pos as any) - (1 as any);
  for (; !(s as any).isTextblock; i--) {
    if ((((s as any).type as any).spec as any).isolating) return !1;
    let u: any = (s as any).lastChild;
    if (!u) return !1;
    s = u;
  }
  let o: any = (e as any).nodeAfter,
    l: any = o,
    a: any = ((e as any).pos as any) + (1 as any);
  for (; !(l as any).isTextblock; a++) {
    if ((((l as any).type as any).spec as any).isolating) return !1;
    let u: any = (l as any).firstChild;
    if (!u) return !1;
    l = u;
  }
  let c: any = (Tr as any)((n as any).doc, i, a, (w as any).empty);
  if (!c || ((c as any).from as any) != (i as any) || c instanceof K && (((c as any).slice as any).size as any) >= ((a as any) - (i as any) as any)) return !1;
  if (t) {
    let u: any = (((n as any).tr as any).step as any)(c);
    ((u as any).setSelection as any)(((N as any).create as any)((u as any).doc, i)), (t as any)(((u as any).scrollIntoView as any)());
  }
  return !0;
}
function Pt(this: any, n: any, e: any, t: any = !1): any {
  for (let r: any = n; r; r = (e as any) == ("start" as any) ? (r as any).firstChild : (r as any).lastChild) {
    if ((r as any).isTextblock) return !0;
    if (t && ((r as any).childCount as any) != (1 as any)) return !1;
  }
  return !1;
}
const ql: any = (n: any, e: any, t: any): any => {
  let {
      $head: r,
      empty: s
    }: any = (n as any).selection,
    i: any = r;
  if (!s) return !1;
  if (((r as any).parent as any).isTextblock) {
    if (t ? !((t as any).endOfTextblock as any)("backward", n) : ((r as any).parentOffset as any) > (0 as any)) return !1;
    i = (Gs as any)(r);
  }
  let o: any = i && (i as any).nodeBefore;
  return !o || !((v as any).isSelectable as any)(o) ? !1 : (e && (e as any)((((((n as any).tr as any).setSelection as any)(((v as any).create as any)((n as any).doc, ((i as any).pos as any) - ((o as any).nodeSize as any))) as any).scrollIntoView as any)()), !0);
};
function Gs(this: any, n: any): any {
  if (!((((n as any).parent as any).type as any).spec as any).isolating) for (let e: any = ((n as any).depth as any) - (1 as any); (e as any) >= (0 as any); e--) {
    if ((((n as any).index as any)(e) as any) > (0 as any)) return (((n as any).doc as any).resolve as any)(((n as any).before as any)((e as any) + (1 as any)));
    if ((((((n as any).node as any)(e) as any).type as any).spec as any).isolating) break;
  }
  return null;
}
function Kl(this: any, n: any, e: any): any {
  let {
    $cursor: t
  }: any = (n as any).selection;
  return !t || (e ? !((e as any).endOfTextblock as any)("forward", n) : ((t as any).parentOffset as any) < ((((t as any).parent as any).content as any).size as any)) ? null : t;
}
const Ul: any = (n: any, e: any, t: any): any => {
    let r: any = (Kl as any)(n, t);
    if (!r) return !1;
    let s: any = (Ys as any)(r);
    if (!s) return !1;
    let i: any = (s as any).nodeAfter;
    if ((Ql as any)(n, s, e, 1)) return !0;
    if (((((r as any).parent as any).content as any).size as any) == (0 as any) && ((Pt as any)(i, "start") || ((v as any).isSelectable as any)(i))) {
      let o: any = (Tr as any)((n as any).doc, ((r as any).before as any)(), ((r as any).after as any)(), (w as any).empty);
      if (o && (((o as any).slice as any).size as any) < (((o as any).to as any) - ((o as any).from as any) as any)) {
        if (e) {
          let l: any = (((n as any).tr as any).step as any)(o);
          ((l as any).setSelection as any)((Pt as any)(i, "start") ? ((O as any).findFrom as any)((((l as any).doc as any).resolve as any)((((l as any).mapping as any).map as any)((s as any).pos)), 1) : ((v as any).create as any)((l as any).doc, (((l as any).mapping as any).map as any)((s as any).pos))), (e as any)(((l as any).scrollIntoView as any)());
        }
        return !0;
      }
    }
    return (i as any).isAtom && ((s as any).depth as any) == (((r as any).depth as any) - (1 as any) as any) ? (e && (e as any)((((((n as any).tr as any).delete as any)((s as any).pos, ((s as any).pos as any) + ((i as any).nodeSize as any)) as any).scrollIntoView as any)()), !0) : !1;
  },
  Jl: any = (n: any, e: any, t: any): any => {
    let {
        $head: r,
        empty: s
      }: any = (n as any).selection,
      i: any = r;
    if (!s) return !1;
    if (((r as any).parent as any).isTextblock) {
      if (t ? !((t as any).endOfTextblock as any)("forward", n) : ((r as any).parentOffset as any) < ((((r as any).parent as any).content as any).size as any)) return !1;
      i = (Ys as any)(r);
    }
    let o: any = i && (i as any).nodeAfter;
    return !o || !((v as any).isSelectable as any)(o) ? !1 : (e && (e as any)((((((n as any).tr as any).setSelection as any)(((v as any).create as any)((n as any).doc, (i as any).pos)) as any).scrollIntoView as any)()), !0);
  };
function Ys(this: any, n: any): any {
  if (!((((n as any).parent as any).type as any).spec as any).isolating) for (let e: any = ((n as any).depth as any) - (1 as any); (e as any) >= (0 as any); e--) {
    let t: any = ((n as any).node as any)(e);
    if (((((n as any).index as any)(e) as any) + (1 as any) as any) < ((t as any).childCount as any)) return (((n as any).doc as any).resolve as any)(((n as any).after as any)((e as any) + (1 as any)));
    if ((((t as any).type as any).spec as any).isolating) break;
  }
  return null;
}
const Vu: any = (n: any, e: any): any => {
    let t: any = (n as any).selection,
      r: any = t instanceof v,
      s: any;
    if (r) {
      if (((t as any).node as any).isTextblock || !(et as any)((n as any).doc, (t as any).from)) return !1;
      s = (t as any).from;
    } else if (s = (vr as any)((n as any).doc, (t as any).from, -1), (s as any) == (null as any)) return !1;
    if (e) {
      let i: any = (((n as any).tr as any).join as any)(s);
      r && ((i as any).setSelection as any)(((v as any).create as any)((i as any).doc, (s as any) - ((((((n as any).doc as any).resolve as any)(s) as any).nodeBefore as any).nodeSize as any))), (e as any)(((i as any).scrollIntoView as any)());
    }
    return !0;
  },
  ju: any = (n: any, e: any): any => {
    let t: any = (n as any).selection,
      r: any;
    if (t instanceof v) {
      if (((t as any).node as any).isTextblock || !(et as any)((n as any).doc, (t as any).to)) return !1;
      r = (t as any).to;
    } else if (r = (vr as any)((n as any).doc, (t as any).to, 1), (r as any) == (null as any)) return !1;
    return e && (e as any)((((((n as any).tr as any).join as any)(r) as any).scrollIntoView as any)()), !0;
  },
  _u: any = (n: any, e: any): any => {
    let {
        $from: t,
        $to: r
      }: any = (n as any).selection,
      s: any = ((t as any).blockRange as any)(r),
      i: any = s && (Ht as any)(s);
    return (i as any) == (null as any) ? !1 : (e && (e as any)((((((n as any).tr as any).lift as any)(s, i) as any).scrollIntoView as any)()), !0);
  },
  Gl: any = (n: any, e: any): any => {
    let {
      $head: t,
      $anchor: r
    }: any = (n as any).selection;
    return !((((t as any).parent as any).type as any).spec as any).code || !((t as any).sameParent as any)(r) ? !1 : (e && (e as any)((((((n as any).tr as any).insertText as any)(`
`) as any).scrollIntoView as any)()), !0);
  };
function Xs(this: any, n: any): any {
  for (let e: any = 0; (e as any) < ((n as any).edgeCount as any); e++) {
    let {
      type: t
    }: any = ((n as any).edge as any)(e);
    if ((t as any).isTextblock && !((t as any).hasRequiredAttrs as any)()) return t;
  }
  return null;
}
const Wu: any = (n: any, e: any): any => {
    let {
      $head: t,
      $anchor: r
    }: any = (n as any).selection;
    if (!((((t as any).parent as any).type as any).spec as any).code || !((t as any).sameParent as any)(r)) return !1;
    let s: any = ((t as any).node as any)(-1),
      i: any = ((t as any).indexAfter as any)(-1),
      o: any = (Xs as any)(((s as any).contentMatchAt as any)(i));
    if (!o || !((s as any).canReplaceWith as any)(i, i, o)) return !1;
    if (e) {
      let l: any = ((t as any).after as any)(),
        a: any = (((n as any).tr as any).replaceWith as any)(l, l, ((o as any).createAndFill as any)());
      ((a as any).setSelection as any)(((O as any).near as any)((((a as any).doc as any).resolve as any)(l), 1)), (e as any)(((a as any).scrollIntoView as any)());
    }
    return !0;
  },
  Yl: any = (n: any, e: any): any => {
    let t: any = (n as any).selection,
      {
        $from: r,
        $to: s
      }: any = t;
    if (t instanceof ue || ((r as any).parent as any).inlineContent || ((s as any).parent as any).inlineContent) return !1;
    let i: any = (Xs as any)((((s as any).parent as any).contentMatchAt as any)(((s as any).indexAfter as any)()));
    if (!i || !(i as any).isTextblock) return !1;
    if (e) {
      let o: any = ((!(r as any).parentOffset && (((s as any).index as any)() as any) < (((s as any).parent as any).childCount as any) ? r : s) as any).pos,
        l: any = (((n as any).tr as any).insert as any)(o, ((i as any).createAndFill as any)());
      ((l as any).setSelection as any)(((N as any).create as any)((l as any).doc, (o as any) + (1 as any))), (e as any)(((l as any).scrollIntoView as any)());
    }
    return !0;
  },
  Xl: any = (n: any, e: any): any => {
    let {
      $cursor: t
    }: any = (n as any).selection;
    if (!t || (((t as any).parent as any).content as any).size) return !1;
    if (((t as any).depth as any) > (1 as any) && (((t as any).after as any)() as any) != (((t as any).end as any)(-1) as any)) {
      let i: any = ((t as any).before as any)();
      if ((Ee as any)((n as any).doc, i)) return e && (e as any)((((((n as any).tr as any).split as any)(i) as any).scrollIntoView as any)()), !0;
    }
    let r: any = ((t as any).blockRange as any)(),
      s: any = r && (Ht as any)(r);
    return (s as any) == (null as any) ? !1 : (e && (e as any)((((((n as any).tr as any).lift as any)(r, s) as any).scrollIntoView as any)()), !0);
  };
function qu(this: any, n: any): any {
  return (e: any, t: any): any => {
    let {
      $from: r,
      $to: s
    }: any = (e as any).selection;
    if ((e as any).selection instanceof v && (((e as any).selection as any).node as any).isBlock) return !(r as any).parentOffset || !(Ee as any)((e as any).doc, (r as any).pos) ? !1 : (t && (t as any)((((((e as any).tr as any).split as any)((r as any).pos) as any).scrollIntoView as any)()), !0);
    if (!(r as any).depth) return !1;
    let i: any = [],
      o: any,
      l: any,
      a: any = !1,
      c: any = !1;
    for (let h: any = (r as any).depth;; h--) if ((((r as any).node as any)(h) as any).isBlock) {
      a = (((r as any).end as any)(h) as any) == (((r as any).pos as any) + (((r as any).depth as any) - (h as any) as any) as any), c = (((r as any).start as any)(h) as any) == (((r as any).pos as any) - (((r as any).depth as any) - (h as any) as any) as any), l = (Xs as any)(((((r as any).node as any)((h as any) - (1 as any)) as any).contentMatchAt as any)(((r as any).indexAfter as any)((h as any) - (1 as any)))), ((i as any).unshift as any)(a && l ? {
        type: l
      } : null), o = h;
      break;
    } else {
      if ((h as any) == (1 as any)) return !1;
      ((i as any).unshift as any)(null);
    }
    let u: any = (e as any).tr;
    ((e as any).selection instanceof N || (e as any).selection instanceof ue) && ((u as any).deleteSelection as any)();
    let d: any = (((u as any).mapping as any).map as any)((r as any).pos),
      f: any = (Ee as any)((u as any).doc, d, (i as any).length, i);
    if (f || ((i as any)[0] = l ? {
      type: l
    } : null, f = (Ee as any)((u as any).doc, d, (i as any).length, i)), !f) return !1;
    if (((u as any).split as any)(d, (i as any).length, i), !a && c && ((((r as any).node as any)(o) as any).type as any) != (l as any)) {
      let h: any = (((u as any).mapping as any).map as any)(((r as any).before as any)(o)),
        p: any = (((u as any).doc as any).resolve as any)(h);
      l && ((((r as any).node as any)((o as any) - (1 as any)) as any).canReplaceWith as any)(((p as any).index as any)(), (((p as any).index as any)() as any) + (1 as any), l) && ((u as any).setNodeMarkup as any)((((u as any).mapping as any).map as any)(((r as any).before as any)(o)), l);
    }
    return t && (t as any)(((u as any).scrollIntoView as any)()), !0;
  };
}
const Ku: any = (qu as any)(),
  Uu: any = (n: any, e: any): any => {
    let {
        $from: t,
        to: r
      }: any = (n as any).selection,
      s: any,
      i: any = ((t as any).sharedDepth as any)(r);
    return (i as any) == (0 as any) ? !1 : (s = ((t as any).before as any)(i), e && (e as any)((((n as any).tr as any).setSelection as any)(((v as any).create as any)((n as any).doc, s))), !0);
  };
function Ju(this: any, n: any, e: any, t: any): any {
  let r: any = (e as any).nodeBefore,
    s: any = (e as any).nodeAfter,
    i: any = ((e as any).index as any)();
  return !r || !s || !(((r as any).type as any).compatibleContent as any)((s as any).type) ? !1 : !((r as any).content as any).size && (((e as any).parent as any).canReplace as any)((i as any) - (1 as any), i) ? (t && (t as any)((((((n as any).tr as any).delete as any)(((e as any).pos as any) - ((r as any).nodeSize as any), (e as any).pos) as any).scrollIntoView as any)()), !0) : !(((e as any).parent as any).canReplace as any)(i, (i as any) + (1 as any)) || !((s as any).isTextblock || (et as any)((n as any).doc, (e as any).pos)) ? !1 : (t && (t as any)((((((n as any).tr as any).join as any)((e as any).pos) as any).scrollIntoView as any)()), !0);
}
function Ql(this: any, n: any, e: any, t: any, r: any): any {
  let s: any = (e as any).nodeBefore,
    i: any = (e as any).nodeAfter,
    o: any,
    l: any,
    a: any = (((s as any).type as any).spec as any).isolating || (((i as any).type as any).spec as any).isolating;
  if (!a && (Ju as any)(n, e, t)) return !0;
  let c: any = !a && (((e as any).parent as any).canReplace as any)(((e as any).index as any)(), (((e as any).index as any)() as any) + (1 as any));
  if (c && (o = (((l = ((s as any).contentMatchAt as any)((s as any).childCount)) as any).findWrapping as any)((i as any).type)) && (((l as any).matchType as any)((o as any)[0] || (i as any).type) as any).validEnd) {
    if (t) {
      let h: any = ((e as any).pos as any) + ((i as any).nodeSize as any),
        p: any = (k as any).empty;
      for (let y: any = ((o as any).length as any) - (1 as any); (y as any) >= (0 as any); y--) p = ((k as any).from as any)((((o as any)[y] as any).create as any)(null, p));
      p = ((k as any).from as any)(((s as any).copy as any)(p));
      let m: any = (((n as any).tr as any).step as any)(new (J as any)(((e as any).pos as any) - (1 as any), h, (e as any).pos, h, new (w as any)(p, 1, 0), (o as any).length, !0)),
        g: any = (((m as any).doc as any).resolve as any)((h as any) + ((2 as any) * ((o as any).length as any) as any));
      (g as any).nodeAfter && (((g as any).nodeAfter as any).type as any) == ((s as any).type as any) && (et as any)((m as any).doc, (g as any).pos) && ((m as any).join as any)((g as any).pos), (t as any)(((m as any).scrollIntoView as any)());
    }
    return !0;
  }
  let u: any = (((i as any).type as any).spec as any).isolating || (r as any) > (0 as any) && a ? null : ((O as any).findFrom as any)(e, 1),
    d: any = u && (((u as any).$from as any).blockRange as any)((u as any).$to),
    f: any = d && (Ht as any)(d);
  if ((f as any) != (null as any) && (f as any) >= ((e as any).depth as any)) return t && (t as any)((((((n as any).tr as any).lift as any)(d, f) as any).scrollIntoView as any)()), !0;
  if (c && (Pt as any)(i, "start", !0) && (Pt as any)(s, "end")) {
    let h: any = s,
      p: any = [];
    for (; ((p as any).push as any)(h), !(h as any).isTextblock;) h = (h as any).lastChild;
    let m: any = i,
      g: any = 1;
    for (; !(m as any).isTextblock; m = (m as any).firstChild) g++;
    if (((h as any).canReplace as any)((h as any).childCount, (h as any).childCount, (m as any).content)) {
      if (t) {
        let y: any = (k as any).empty;
        for (let C: any = ((p as any).length as any) - (1 as any); (C as any) >= (0 as any); C--) y = ((k as any).from as any)((((p as any)[C] as any).copy as any)(y));
        let b: any = (((n as any).tr as any).step as any)(new (J as any)(((e as any).pos as any) - ((p as any).length as any), ((e as any).pos as any) + ((i as any).nodeSize as any), ((e as any).pos as any) + (g as any), (((e as any).pos as any) + ((i as any).nodeSize as any) as any) - (g as any), new (w as any)(y, (p as any).length, 0), 0, !0));
        (t as any)(((b as any).scrollIntoView as any)());
      }
      return !0;
    }
  }
  return !1;
}
function Zl(this: any, n: any): any {
  return function (this: any, e: any, t: any): any {
    let r: any = (e as any).selection,
      s: any = (n as any) < (0 as any) ? (r as any).$from : (r as any).$to,
      i: any = (s as any).depth;
    for (; (((s as any).node as any)(i) as any).isInline;) {
      if (!i) return !1;
      i--;
    }
    return (((s as any).node as any)(i) as any).isTextblock ? (t && (t as any)((((e as any).tr as any).setSelection as any)(((N as any).create as any)((e as any).doc, (n as any) < (0 as any) ? ((s as any).start as any)(i) : ((s as any).end as any)(i)))), !0) : !1;
  };
}
const Gu: any = (Zl as any)(-1),
  Yu: any = (Zl as any)(1);
function Xu(this: any, n: any, e: any = null): any {
  return function (this: any, t: any, r: any): any {
    let {
        $from: s,
        $to: i
      }: any = (t as any).selection,
      o: any = ((s as any).blockRange as any)(i),
      l: any = o && (Ks as any)(o, n, e);
    return l ? (r && (r as any)((((((t as any).tr as any).wrap as any)(o, l) as any).scrollIntoView as any)()), !0) : !1;
  };
}
function Yi(this: any, n: any, e: any = null): any {
  return function (this: any, t: any, r: any): any {
    let s: any = !1;
    for (let i: any = 0; (i as any) < ((((t as any).selection as any).ranges as any).length as any) && !s; i++) {
      let {
        $from: {
          pos: o
        },
        $to: {
          pos: l
        }
      }: any = (((t as any).selection as any).ranges as any)[i];
      (((t as any).doc as any).nodesBetween as any)(o, l, (a: any, c: any): any => {
        if (s) return !1;
        if (!(!(a as any).isTextblock || ((a as any).hasMarkup as any)(n, e))) if (((a as any).type as any) == (n as any)) s = !0;else {
          let u: any = (((t as any).doc as any).resolve as any)(c),
            d: any = ((u as any).index as any)();
          s = (((u as any).parent as any).canReplaceWith as any)(d, (d as any) + (1 as any), n);
        }
      });
    }
    if (!s) return !1;
    if (r) {
      let i: any = (t as any).tr;
      for (let o: any = 0; (o as any) < ((((t as any).selection as any).ranges as any).length as any); o++) {
        let {
          $from: {
            pos: l
          },
          $to: {
            pos: a
          }
        }: any = (((t as any).selection as any).ranges as any)[o];
        ((i as any).setBlockType as any)(l, a, n, e);
      }
      (r as any)(((i as any).scrollIntoView as any)());
    }
    return !0;
  };
}
function Qs(this: any, ...n: any): any {
  return function (this: any, e: any, t: any, r: any): any {
    for (let s: any = 0; (s as any) < ((n as any).length as any); s++) if (((n as any)[s] as any)(e, t, r)) return !0;
    return !1;
  };
}
(Qs as any)(Js, _l, ql);
(Qs as any)(Js, Ul, Jl);
(Qs as any)(Gl, Yl, Xl, Ku);
(typeof navigator as any) < ("u" as any) ? ((/Mac|iP(hone|[oa]d)/ as any).test as any)((navigator as any).platform) : (typeof os as any) < ("u" as any) && (os as any).platform && (((os as any).platform as any)() as any) == ("darwin" as any);
function Qu(this: any, n: any, e: any = null): any {
  return function (this: any, t: any, r: any): any {
    let {
        $from: s,
        $to: i
      }: any = (t as any).selection,
      o: any = ((s as any).blockRange as any)(i);
    if (!o) return !1;
    let l: any = r ? (t as any).tr : null;
    return (Zu as any)(l, o, n, e) ? (r && (r as any)(((l as any).scrollIntoView as any)()), !0) : !1;
  };
}
function Zu(this: any, n: any, e: any, t: any, r: any = null): any {
  let s: any = !1,
    i: any = e,
    o: any = ((e as any).$from as any).doc;
  if (((e as any).depth as any) >= (2 as any) && ((((((e as any).$from as any).node as any)(((e as any).depth as any) - (1 as any)) as any).type as any).compatibleContent as any)(t) && ((e as any).startIndex as any) == (0 as any)) {
    if (((((e as any).$from as any).index as any)(((e as any).depth as any) - (1 as any)) as any) == (0 as any)) return !1;
    let a: any = ((o as any).resolve as any)(((e as any).start as any) - (2 as any));
    i = new (Hn as any)(a, a, (e as any).depth), ((e as any).endIndex as any) < (((e as any).parent as any).childCount as any) && (e = new (Hn as any)((e as any).$from, ((o as any).resolve as any)((((e as any).$to as any).end as any)((e as any).depth)), (e as any).depth)), s = !0;
  }
  let l: any = (Ks as any)(i, t, r, e);
  return l ? (n && (ed as any)(n, e, l, s, t), !0) : !1;
}
function ed(this: any, n: any, e: any, t: any, r: any, s: any): any {
  let i: any = (k as any).empty;
  for (let u: any = ((t as any).length as any) - (1 as any); (u as any) >= (0 as any); u--) i = ((k as any).from as any)(((((t as any)[u] as any).type as any).create as any)(((t as any)[u] as any).attrs, i));
  ((n as any).step as any)(new (J as any)(((e as any).start as any) - ((r ? 2 : 0) as any), (e as any).end, (e as any).start, (e as any).end, new (w as any)(i, 0, 0), (t as any).length, !0));
  let o: any = 0;
  for (let u: any = 0; (u as any) < ((t as any).length as any); u++) (((t as any)[u] as any).type as any) == (s as any) && (o = (u as any) + (1 as any));
  let l: any = ((t as any).length as any) - (o as any),
    a: any = (((e as any).start as any) + ((t as any).length as any) as any) - ((r ? 2 : 0) as any),
    c: any = (e as any).parent;
  for (let u: any = (e as any).startIndex, d: any = (e as any).endIndex, f: any = !0; (u as any) < (d as any); u++, f = !1) !f && (Ee as any)((n as any).doc, a, l) && (((n as any).split as any)(a, l), a += (2 as any) * (l as any)), a += (((c as any).child as any)(u) as any).nodeSize;
  return n;
}
function oy(this: any, n: any, e: any): any {
  return function (this: any, t: any, r: any): any {
    let {
      $from: s,
      $to: i,
      node: o
    }: any = (t as any).selection;
    if (o && (o as any).isBlock || ((s as any).depth as any) < (2 as any) || !((s as any).sameParent as any)(i)) return !1;
    let l: any = ((s as any).node as any)(-1);
    if (((l as any).type as any) != (n as any)) return !1;
    if (((((s as any).parent as any).content as any).size as any) == (0 as any) && ((((s as any).node as any)(-1) as any).childCount as any) == (((s as any).indexAfter as any)(-1) as any)) {
      if (((s as any).depth as any) == (3 as any) || ((((s as any).node as any)(-3) as any).type as any) != (n as any) || (((s as any).index as any)(-2) as any) != (((((s as any).node as any)(-2) as any).childCount as any) - (1 as any) as any)) return !1;
      if (r) {
        let d: any = (k as any).empty,
          f: any = ((s as any).index as any)(-1) ? 1 : ((s as any).index as any)(-2) ? 2 : 3;
        for (let y: any = ((s as any).depth as any) - (f as any); (y as any) >= (((s as any).depth as any) - (3 as any) as any); y--) d = ((k as any).from as any)(((((s as any).node as any)(y) as any).copy as any)(d));
        let h: any = (((s as any).indexAfter as any)(-1) as any) < ((((s as any).node as any)(-2) as any).childCount as any) ? 1 : (((s as any).indexAfter as any)(-2) as any) < ((((s as any).node as any)(-3) as any).childCount as any) ? 2 : 3;
        d = ((d as any).append as any)(((k as any).from as any)(((n as any).createAndFill as any)()));
        let p: any = ((s as any).before as any)(((s as any).depth as any) - ((f as any) - (1 as any) as any)),
          m: any = (((t as any).tr as any).replace as any)(p, ((s as any).after as any)(-h), new (w as any)(d, (4 as any) - (f as any), 0)),
          g: any = -1;
        (((m as any).doc as any).nodesBetween as any)(p, (((m as any).doc as any).content as any).size, (y: any, b: any): any => {
          if ((g as any) > (-1 as any)) return !1;
          (y as any).isTextblock && (((y as any).content as any).size as any) == (0 as any) && (g = (b as any) + (1 as any));
        }), (g as any) > (-1 as any) && ((m as any).setSelection as any)(((O as any).near as any)((((m as any).doc as any).resolve as any)(g))), (r as any)(((m as any).scrollIntoView as any)());
      }
      return !0;
    }
    let a: any = ((i as any).pos as any) == (((s as any).end as any)() as any) ? (((l as any).contentMatchAt as any)(0) as any).defaultType : null,
      c: any = (((t as any).tr as any).delete as any)((s as any).pos, (i as any).pos),
      u: any = a ? [null, {
        type: a
      }] : void 0;
    return (Ee as any)((c as any).doc, (s as any).pos, 2, u) ? (r && (r as any)(((((c as any).split as any)((s as any).pos, 2, u) as any).scrollIntoView as any)()), !0) : !1;
  };
}
function td(this: any, n: any): any {
  return function (this: any, e: any, t: any): any {
    let {
        $from: r,
        $to: s
      }: any = (e as any).selection,
      i: any = ((r as any).blockRange as any)(s, (o: any): any => ((o as any).childCount as any) > (0 as any) && (((o as any).firstChild as any).type as any) == (n as any));
    return i ? t ? ((((r as any).node as any)(((i as any).depth as any) - (1 as any)) as any).type as any) == (n as any) ? (nd as any)(e, t, n, i) : (rd as any)(e, t, i) : !0 : !1;
  };
}
function nd(this: any, n: any, e: any, t: any, r: any): any {
  let s: any = (n as any).tr,
    i: any = (r as any).end,
    o: any = (((r as any).$to as any).end as any)((r as any).depth);
  (i as any) < (o as any) && (((s as any).step as any)(new (J as any)((i as any) - (1 as any), o, i, o, new (w as any)(((k as any).from as any)(((t as any).create as any)(null, (((r as any).parent as any).copy as any)())), 1, 0), 1, !0)), r = new (Hn as any)((((s as any).doc as any).resolve as any)(((r as any).$from as any).pos), (((s as any).doc as any).resolve as any)(o), (r as any).depth));
  const l: any = (Ht as any)(r);
  if ((l as any) == (null as any)) return !1;
  ((s as any).lift as any)(r, l);
  let a: any = (((s as any).doc as any).resolve as any)(((((s as any).mapping as any).map as any)(i, -1) as any) - (1 as any));
  return (et as any)((s as any).doc, (a as any).pos) && (((a as any).nodeBefore as any).type as any) == (((a as any).nodeAfter as any).type as any) && ((s as any).join as any)((a as any).pos), (e as any)(((s as any).scrollIntoView as any)()), !0;
}
function rd(this: any, n: any, e: any, t: any): any {
  let r: any = (n as any).tr,
    s: any = (t as any).parent;
  for (let h: any = (t as any).end, p: any = ((t as any).endIndex as any) - (1 as any), m: any = (t as any).startIndex; (p as any) > (m as any); p--) h -= (((s as any).child as any)(p) as any).nodeSize, ((r as any).delete as any)((h as any) - (1 as any), (h as any) + (1 as any));
  let i: any = (((r as any).doc as any).resolve as any)((t as any).start),
    o: any = (i as any).nodeAfter;
  if (((((r as any).mapping as any).map as any)((t as any).end) as any) != (((t as any).start as any) + (((i as any).nodeAfter as any).nodeSize as any) as any)) return !1;
  let l: any = ((t as any).startIndex as any) == (0 as any),
    a: any = ((t as any).endIndex as any) == ((s as any).childCount as any),
    c: any = ((i as any).node as any)(-1),
    u: any = ((i as any).index as any)(-1);
  if (!((c as any).canReplace as any)((u as any) + ((l ? 0 : 1) as any), (u as any) + (1 as any), (((o as any).content as any).append as any)(a ? (k as any).empty : ((k as any).from as any)(s)))) return !1;
  let d: any = (i as any).pos,
    f: any = (d as any) + ((o as any).nodeSize as any);
  return ((r as any).step as any)(new (J as any)((d as any) - ((l ? 1 : 0) as any), (f as any) + ((a ? 1 : 0) as any), (d as any) + (1 as any), (f as any) - (1 as any), new (w as any)((((l ? (k as any).empty : ((k as any).from as any)(((s as any).copy as any)((k as any).empty))) as any).append as any)(a ? (k as any).empty : ((k as any).from as any)(((s as any).copy as any)((k as any).empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), (e as any)(((r as any).scrollIntoView as any)()), !0;
}
function sd(this: any, n: any): any {
  return function (this: any, e: any, t: any): any {
    let {
        $from: r,
        $to: s
      }: any = (e as any).selection,
      i: any = ((r as any).blockRange as any)(s, (c: any): any => ((c as any).childCount as any) > (0 as any) && (((c as any).firstChild as any).type as any) == (n as any));
    if (!i) return !1;
    let o: any = (i as any).startIndex;
    if ((o as any) == (0 as any)) return !1;
    let l: any = (i as any).parent,
      a: any = ((l as any).child as any)((o as any) - (1 as any));
    if (((a as any).type as any) != (n as any)) return !1;
    if (t) {
      let c: any = (a as any).lastChild && (((a as any).lastChild as any).type as any) == ((l as any).type as any),
        u: any = ((k as any).from as any)(c ? ((n as any).create as any)() : null),
        d: any = new (w as any)(((k as any).from as any)(((n as any).create as any)(null, ((k as any).from as any)((((l as any).type as any).create as any)(null, u)))), c ? 3 : 1, 0),
        f: any = (i as any).start,
        h: any = (i as any).end;
      (t as any)((((((e as any).tr as any).step as any)(new (J as any)((f as any) - ((c ? 3 : 1) as any), h, f, h, d, 1, !0)) as any).scrollIntoView as any)());
    }
    return !0;
  };
}
const X: any = function (this: any, n: any): any {
    for (var e: any = 0;; e++) if (n = (n as any).previousSibling, !n) return e;
  },
  Lt: any = function (this: any, n: any): any {
    let e: any = (n as any).assignedSlot || (n as any).parentNode;
    return e && ((e as any).nodeType as any) == (11 as any) ? (e as any).host : e;
  };
let xs: any = null;
const Ie: any = function (this: any, n: any, e: any, t: any): any {
    let r: any = xs || (xs = ((document as any).createRange as any)());
    return ((r as any).setEnd as any)(n, t ?? ((n as any).nodeValue as any).length), ((r as any).setStart as any)(n, e || 0), r;
  },
  id: any = function (this: any): any {
    xs = null;
  },
  mt: any = function (this: any, n: any, e: any, t: any, r: any): any {
    return t && ((Xi as any)(n, e, t, r, -1) || (Xi as any)(n, e, t, r, 1));
  },
  od: any = /^(img|br|input|textarea|hr)$/i;
function Xi(this: any, n: any, e: any, t: any, r: any, s: any): any {
  for (var i: any;;) {
    if ((n as any) == (t as any) && (e as any) == (r as any)) return !0;
    if ((e as any) == (((s as any) < (0 as any) ? 0 : (ge as any)(n)) as any)) {
      let o: any = (n as any).parentNode;
      if (!o || ((o as any).nodeType as any) != (1 as any) || (yn as any)(n) || ((od as any).test as any)((n as any).nodeName) || ((n as any).contentEditable as any) == ("false" as any)) return !1;
      e = ((X as any)(n) as any) + (((s as any) < (0 as any) ? 0 : 1) as any), n = o;
    } else if (((n as any).nodeType as any) == (1 as any)) {
      let o: any = ((n as any).childNodes as any)[(e as any) + (((s as any) < (0 as any) ? -1 : 0) as any)];
      if (((o as any).nodeType as any) == (1 as any) && ((o as any).contentEditable as any) == ("false" as any)) {
        if (!(((i = (o as any).pmViewDesc) as any) === (null as any) || (i as any) === (void 0 as any)) && (i as any).ignoreForSelection) e += s;else return !1;
      } else n = o, e = (s as any) < (0 as any) ? (ge as any)(n) : 0;
    } else return !1;
  }
}
function ge(this: any, n: any): any {
  return ((n as any).nodeType as any) == (3 as any) ? ((n as any).nodeValue as any).length : ((n as any).childNodes as any).length;
}
function ld(this: any, n: any, e: any): any {
  for (;;) {
    if (((n as any).nodeType as any) == (3 as any) && e) return n;
    if (((n as any).nodeType as any) == (1 as any) && (e as any) > (0 as any)) {
      if (((n as any).contentEditable as any) == ("false" as any)) return null;
      n = ((n as any).childNodes as any)[(e as any) - (1 as any)], e = (ge as any)(n);
    } else if ((n as any).parentNode && !(yn as any)(n)) e = (X as any)(n), n = (n as any).parentNode;else return null;
  }
}
function ad(this: any, n: any, e: any): any {
  for (;;) {
    if (((n as any).nodeType as any) == (3 as any) && (e as any) < (((n as any).nodeValue as any).length as any)) return n;
    if (((n as any).nodeType as any) == (1 as any) && (e as any) < (((n as any).childNodes as any).length as any)) {
      if (((n as any).contentEditable as any) == ("false" as any)) return null;
      n = ((n as any).childNodes as any)[e], e = 0;
    } else if ((n as any).parentNode && !(yn as any)(n)) e = ((X as any)(n) as any) + (1 as any), n = (n as any).parentNode;else return null;
  }
}
function cd(this: any, n: any, e: any, t: any): any {
  for (let r: any = (e as any) == (0 as any), s: any = (e as any) == ((ge as any)(n) as any); r || s;) {
    if ((n as any) == (t as any)) return !0;
    let i: any = (X as any)(n);
    if (n = (n as any).parentNode, !n) return !1;
    r = r && (i as any) == (0 as any), s = s && (i as any) == ((ge as any)(n) as any);
  }
}
function yn(this: any, n: any): any {
  let e: any;
  for (let t: any = n; t && !(e = (t as any).pmViewDesc); t = (t as any).parentNode);
  return e && (e as any).node && ((e as any).node as any).isBlock && (((e as any).dom as any) == (n as any) || ((e as any).contentDOM as any) == (n as any));
}
const Nr: any = function (this: any, n: any): any {
  return (n as any).focusNode && (mt as any)((n as any).focusNode, (n as any).focusOffset, (n as any).anchorNode, (n as any).anchorOffset);
};
function st(this: any, n: any, e: any): any {
  let t: any = ((document as any).createEvent as any)("Event");
  return ((t as any).initEvent as any)("keydown", !0, !0), (t as any).keyCode = n, (t as any).key = (t as any).code = e, t;
}
function ud(this: any, n: any): any {
  let e: any = (n as any).activeElement;
  for (; e && (e as any).shadowRoot;) e = ((e as any).shadowRoot as any).activeElement;
  return e;
}
function dd(this: any, n: any, e: any, t: any): any {
  if ((n as any).caretPositionFromPoint) try {
    let r: any = ((n as any).caretPositionFromPoint as any)(e, t);
    if (r) return {
      node: (r as any).offsetNode,
      offset: ((Math as any).min as any)((ge as any)((r as any).offsetNode), (r as any).offset)
    };
  } catch {}
  if ((n as any).caretRangeFromPoint) {
    let r: any = ((n as any).caretRangeFromPoint as any)(e, t);
    if (r) return {
      node: (r as any).startContainer,
      offset: ((Math as any).min as any)((ge as any)((r as any).startContainer), (r as any).startOffset)
    };
  }
}
const ve: any = (typeof navigator as any) < ("u" as any) ? navigator : null,
  Qi: any = (typeof document as any) < ("u" as any) ? document : null,
  tt: any = ve && (ve as any).userAgent || "",
  Ss: any = ((/Edge\/(\d+)/ as any).exec as any)(tt),
  ea: any = ((/MSIE \d/ as any).exec as any)(tt),
  ws: any = ((/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/ as any).exec as any)(tt),
  le: any = !!(ea || ws || Ss),
  Ge: any = ea ? (document as any).documentMode : ws ? +(ws as any)[1] : Ss ? +(Ss as any)[1] : 0,
  ye: any = !le && ((/gecko\/(\d+)/i as any).test as any)(tt);
ye && +((((/Firefox\/(\d+)/ as any).exec as any)(tt) || [0, 0]) as any)[1];
const Cs: any = !le && ((/Chrome\/(\d+)/ as any).exec as any)(tt),
  U: any = !!Cs,
  ta: any = Cs ? +(Cs as any)[1] : 0,
  ee: any = !le && !!ve && ((/Apple Computer/ as any).test as any)((ve as any).vendor),
  zt: any = ee && (((/Mobile\/\w+/ as any).test as any)(tt) || !!ve && ((ve as any).maxTouchPoints as any) > (2 as any)),
  me: any = zt || (ve ? ((/Mac/ as any).test as any)((ve as any).platform) : !1),
  na: any = ve ? ((/Win/ as any).test as any)((ve as any).platform) : !1,
  Re: any = ((/Android \d/ as any).test as any)(tt),
  kn: any = !!Qi && "webkitFontSmoothing" in ((Qi as any).documentElement as any).style,
  fd: any = kn ? +((((/\bAppleWebKit\/(\d+)/ as any).exec as any)((navigator as any).userAgent) || [0, 0]) as any)[1] : 0;
function hd(this: any, n: any): any {
  let e: any = (n as any).defaultView && ((n as any).defaultView as any).visualViewport;
  return e ? {
    left: 0,
    right: (e as any).width,
    top: 0,
    bottom: (e as any).height
  } : {
    left: 0,
    right: ((n as any).documentElement as any).clientWidth,
    top: 0,
    bottom: ((n as any).documentElement as any).clientHeight
  };
}
function Ae(this: any, n: any, e: any): any {
  return (typeof n as any) == ("number" as any) ? n : (n as any)[e];
}
function pd(this: any, n: any): any {
  let e: any = ((n as any).getBoundingClientRect as any)(),
    t: any = ((e as any).width as any) / ((n as any).offsetWidth as any) || 1,
    r: any = ((e as any).height as any) / ((n as any).offsetHeight as any) || 1;
  return {
    left: (e as any).left,
    right: ((e as any).left as any) + (((n as any).clientWidth as any) * (t as any) as any),
    top: (e as any).top,
    bottom: ((e as any).top as any) + (((n as any).clientHeight as any) * (r as any) as any)
  };
}
function Zi(this: any, n: any, e: any, t: any): any {
  let r: any = ((n as any).someProp as any)("scrollThreshold") || 0,
    s: any = ((n as any).someProp as any)("scrollMargin") || 5,
    i: any = ((n as any).dom as any).ownerDocument;
  for (let o: any = t || (n as any).dom; o;) {
    if (((o as any).nodeType as any) != (1 as any)) {
      o = (Lt as any)(o);
      continue;
    }
    let l: any = o,
      a: any = (l as any) == ((i as any).body as any),
      c: any = a ? (hd as any)(i) : (pd as any)(l),
      u: any = 0,
      d: any = 0;
    if (((e as any).top as any) < (((c as any).top as any) + ((Ae as any)(r, "top") as any) as any) ? d = -((((c as any).top as any) - ((e as any).top as any) as any) + ((Ae as any)(s, "top") as any)) : ((e as any).bottom as any) > (((c as any).bottom as any) - ((Ae as any)(r, "bottom") as any) as any) && (d = (((e as any).bottom as any) - ((e as any).top as any) as any) > (((c as any).bottom as any) - ((c as any).top as any) as any) ? (((e as any).top as any) + ((Ae as any)(s, "top") as any) as any) - ((c as any).top as any) : (((e as any).bottom as any) - ((c as any).bottom as any) as any) + ((Ae as any)(s, "bottom") as any)), ((e as any).left as any) < (((c as any).left as any) + ((Ae as any)(r, "left") as any) as any) ? u = -((((c as any).left as any) - ((e as any).left as any) as any) + ((Ae as any)(s, "left") as any)) : ((e as any).right as any) > (((c as any).right as any) - ((Ae as any)(r, "right") as any) as any) && (u = (((e as any).right as any) - ((c as any).right as any) as any) + ((Ae as any)(s, "right") as any)), u || d) if (a) (((i as any).defaultView as any).scrollBy as any)(u, d);else {
      let h: any = (l as any).scrollLeft,
        p: any = (l as any).scrollTop;
      d && ((l as any).scrollTop += d), u && ((l as any).scrollLeft += u);
      let m: any = ((l as any).scrollLeft as any) - (h as any),
        g: any = ((l as any).scrollTop as any) - (p as any);
      e = {
        left: ((e as any).left as any) - (m as any),
        top: ((e as any).top as any) - (g as any),
        right: ((e as any).right as any) - (m as any),
        bottom: ((e as any).bottom as any) - (g as any)
      };
    }
    let f: any = a ? "fixed" : ((getComputedStyle as any)(o) as any).position;
    if (((/^(fixed|sticky)$/ as any).test as any)(f)) break;
    o = (f as any) == ("absolute" as any) ? (o as any).offsetParent : (Lt as any)(o);
  }
}
function md(this: any, n: any): any {
  let e: any = (((n as any).dom as any).getBoundingClientRect as any)(),
    t: any = ((Math as any).max as any)(0, (e as any).top),
    r: any,
    s: any;
  for (let i: any = (((e as any).left as any) + ((e as any).right as any) as any) / (2 as any), o: any = (t as any) + (1 as any); (o as any) < (((Math as any).min as any)(innerHeight, (e as any).bottom) as any); o += 5) {
    let l: any = (((n as any).root as any).elementFromPoint as any)(i, o);
    if (!l || (l as any) == ((n as any).dom as any) || !(((n as any).dom as any).contains as any)(l)) continue;
    let a: any = ((l as any).getBoundingClientRect as any)();
    if (((a as any).top as any) >= ((t as any) - (20 as any) as any)) {
      r = l, s = (a as any).top;
      break;
    }
  }
  return {
    refDOM: r,
    refTop: s,
    stack: (ra as any)((n as any).dom)
  };
}
function ra(this: any, n: any): any {
  let e: any = [],
    t: any = (n as any).ownerDocument;
  for (let r: any = n; r && (((e as any).push as any)({
    dom: r,
    top: (r as any).scrollTop,
    left: (r as any).scrollLeft
  }), (n as any) != (t as any)); r = (Lt as any)(r));
  return e;
}
function gd(this: any, {
  refDOM: n,
  refTop: e,
  stack: t
}: any): any {
  let r: any = n ? (((n as any).getBoundingClientRect as any)() as any).top : 0;
  (sa as any)(t, (r as any) == (0 as any) ? 0 : (r as any) - (e as any));
}
function sa(this: any, n: any, e: any): any {
  for (let t: any = 0; (t as any) < ((n as any).length as any); t++) {
    let {
      dom: r,
      top: s,
      left: i
    }: any = (n as any)[t];
    ((r as any).scrollTop as any) != ((s as any) + (e as any) as any) && ((r as any).scrollTop = (s as any) + (e as any)), ((r as any).scrollLeft as any) != (i as any) && ((r as any).scrollLeft = i);
  }
}
let Mt: any = null;
function yd(this: any, n: any): any {
  if ((n as any).setActive) return ((n as any).setActive as any)();
  if (Mt) return ((n as any).focus as any)(Mt);
  let e: any = (ra as any)(n);
  ((n as any).focus as any)((Mt as any) == (null as any) ? {
    get preventScroll(): any {
      return Mt = {
        preventScroll: !0
      }, !0;
    }
  } : void 0), Mt || (Mt = !1, (sa as any)(e, 0));
}
function ia(this: any, n: any, e: any): any {
  let t: any,
    r: any = 2e8,
    s: any,
    i: any = 0,
    o: any = (e as any).top,
    l: any = (e as any).top,
    a: any,
    c: any;
  for (let u: any = (n as any).firstChild, d: any = 0; u; u = (u as any).nextSibling, d++) {
    let f: any;
    if (((u as any).nodeType as any) == (1 as any)) f = ((u as any).getClientRects as any)();else if (((u as any).nodeType as any) == (3 as any)) f = (((Ie as any)(u) as any).getClientRects as any)();else continue;
    for (let h: any = 0; (h as any) < ((f as any).length as any); h++) {
      let p: any = (f as any)[h];
      if (((p as any).top as any) <= (o as any) && ((p as any).bottom as any) >= (l as any)) {
        o = ((Math as any).max as any)((p as any).bottom, o), l = ((Math as any).min as any)((p as any).top, l);
        let m: any = ((p as any).left as any) > ((e as any).left as any) ? ((p as any).left as any) - ((e as any).left as any) : ((p as any).right as any) < ((e as any).left as any) ? ((e as any).left as any) - ((p as any).right as any) : 0;
        if ((m as any) < (r as any)) {
          t = u, r = m, s = m && ((t as any).nodeType as any) == (3 as any) ? {
            left: ((p as any).right as any) < ((e as any).left as any) ? (p as any).right : (p as any).left,
            top: (e as any).top
          } : e, ((u as any).nodeType as any) == (1 as any) && m && (i = (d as any) + ((((e as any).left as any) >= ((((p as any).left as any) + ((p as any).right as any) as any) / (2 as any) as any) ? 1 : 0) as any));
          continue;
        }
      } else ((p as any).top as any) > ((e as any).top as any) && !a && ((p as any).left as any) <= ((e as any).left as any) && ((p as any).right as any) >= ((e as any).left as any) && (a = u, c = {
        left: ((Math as any).max as any)((p as any).left, ((Math as any).min as any)((p as any).right, (e as any).left)),
        top: (p as any).top
      });
      !t && (((e as any).left as any) >= ((p as any).right as any) && ((e as any).top as any) >= ((p as any).top as any) || ((e as any).left as any) >= ((p as any).left as any) && ((e as any).top as any) >= ((p as any).bottom as any)) && (i = (d as any) + (1 as any));
    }
  }
  return !t && a && (t = a, s = c, r = 0), t && ((t as any).nodeType as any) == (3 as any) ? (kd as any)(t, s) : !t || r && ((t as any).nodeType as any) == (1 as any) ? {
    node: n,
    offset: i
  } : (ia as any)(t, s);
}
function kd(this: any, n: any, e: any): any {
  let t: any = ((n as any).nodeValue as any).length,
    r: any = ((document as any).createRange as any)(),
    s: any;
  for (let i: any = 0; (i as any) < (t as any); i++) {
    ((r as any).setEnd as any)(n, (i as any) + (1 as any)), ((r as any).setStart as any)(n, i);
    let o: any = (He as any)(r, 1);
    if (((o as any).top as any) != ((o as any).bottom as any) && (Zs as any)(e, o)) {
      s = {
        node: n,
        offset: (i as any) + ((((e as any).left as any) >= ((((o as any).left as any) + ((o as any).right as any) as any) / (2 as any) as any) ? 1 : 0) as any)
      };
      break;
    }
  }
  return ((r as any).detach as any)(), s || {
    node: n,
    offset: 0
  };
}
function Zs(this: any, n: any, e: any): any {
  return ((n as any).left as any) >= (((e as any).left as any) - (1 as any) as any) && ((n as any).left as any) <= (((e as any).right as any) + (1 as any) as any) && ((n as any).top as any) >= (((e as any).top as any) - (1 as any) as any) && ((n as any).top as any) <= (((e as any).bottom as any) + (1 as any) as any);
}
function bd(this: any, n: any, e: any): any {
  let t: any = (n as any).parentNode;
  return t && ((/^li$/i as any).test as any)((t as any).nodeName) && ((e as any).left as any) < ((((n as any).getBoundingClientRect as any)() as any).left as any) ? t : n;
}
function xd(this: any, n: any, e: any, t: any): any {
  let {
      node: r,
      offset: s
    }: any = (ia as any)(e, t),
    i: any = -1;
  if (((r as any).nodeType as any) == (1 as any) && !(r as any).firstChild) {
    let o: any = ((r as any).getBoundingClientRect as any)();
    i = ((o as any).left as any) != ((o as any).right as any) && ((t as any).left as any) > ((((o as any).left as any) + ((o as any).right as any) as any) / (2 as any) as any) ? 1 : -1;
  }
  return (((n as any).docView as any).posFromDOM as any)(r, s, i);
}
function Sd(this: any, n: any, e: any, t: any, r: any): any {
  let s: any = -1;
  for (let i: any = e, o: any = !1; (i as any) != ((n as any).dom as any);) {
    let l: any = (((n as any).docView as any).nearestDesc as any)(i, !0),
      a: any;
    if (!l) return null;
    if ((((l as any).dom as any).nodeType as any) == (1 as any) && (((l as any).node as any).isBlock && (l as any).parent || !(l as any).contentDOM) && (((a = (((l as any).dom as any).getBoundingClientRect as any)()) as any).width || (a as any).height) && (((l as any).node as any).isBlock && (l as any).parent && !((/^T(R|BODY|HEAD|FOOT)$/ as any).test as any)(((l as any).dom as any).nodeName) && (!o && ((a as any).left as any) > ((r as any).left as any) || ((a as any).top as any) > ((r as any).top as any) ? s = (l as any).posBefore : (!o && ((a as any).right as any) < ((r as any).left as any) || ((a as any).bottom as any) < ((r as any).top as any)) && (s = (l as any).posAfter), o = !0), !(l as any).contentDOM && (s as any) < (0 as any) && !((l as any).node as any).isText)) return (((l as any).node as any).isBlock ? ((r as any).top as any) < ((((a as any).top as any) + ((a as any).bottom as any) as any) / (2 as any) as any) : ((r as any).left as any) < ((((a as any).left as any) + ((a as any).right as any) as any) / (2 as any) as any)) ? (l as any).posBefore : (l as any).posAfter;
    i = ((l as any).dom as any).parentNode;
  }
  return (s as any) > (-1 as any) ? s : (((n as any).docView as any).posFromDOM as any)(e, t, -1);
}
function oa(this: any, n: any, e: any, t: any): any {
  let r: any = ((n as any).childNodes as any).length;
  if (r && ((t as any).top as any) < ((t as any).bottom as any)) for (let s: any = ((Math as any).max as any)(0, ((Math as any).min as any)((r as any) - (1 as any), (((Math as any).floor as any)(((r as any) * (((e as any).top as any) - ((t as any).top as any) as any) as any) / (((t as any).bottom as any) - ((t as any).top as any) as any)) as any) - (2 as any))), i: any = s;;) {
    let o: any = ((n as any).childNodes as any)[i];
    if (((o as any).nodeType as any) == (1 as any)) {
      let l: any = ((o as any).getClientRects as any)();
      for (let a: any = 0; (a as any) < ((l as any).length as any); a++) {
        let c: any = (l as any)[a];
        if ((Zs as any)(e, c)) return (oa as any)(o, e, c);
      }
    }
    if (((i = ((i as any) + (1 as any) as any) % (r as any)) as any) == (s as any)) break;
  }
  return n;
}
function wd(this: any, n: any, e: any): any {
  let t: any = ((n as any).dom as any).ownerDocument,
    r: any,
    s: any = 0,
    i: any = (dd as any)(t, (e as any).left, (e as any).top);
  i && ({
    node: r,
    offset: s
  } = i);
  let o: any = (((((n as any).root as any).elementFromPoint ? (n as any).root : t) as any).elementFromPoint as any)((e as any).left, (e as any).top),
    l: any;
  if (!o || !(((n as any).dom as any).contains as any)(((o as any).nodeType as any) != (1 as any) ? (o as any).parentNode : o)) {
    let c: any = (((n as any).dom as any).getBoundingClientRect as any)();
    if (!(Zs as any)(e, c) || (o = (oa as any)((n as any).dom, e, c), !o)) return null;
  }
  if (ee) for (let c: any = o; r && c; c = (Lt as any)(c)) (c as any).draggable && (r = void 0);
  if (o = (bd as any)(o, e), r) {
    if (ye && ((r as any).nodeType as any) == (1 as any) && (s = ((Math as any).min as any)(s, ((r as any).childNodes as any).length), (s as any) < (((r as any).childNodes as any).length as any))) {
      let u: any = ((r as any).childNodes as any)[s],
        d: any;
      ((u as any).nodeName as any) == ("IMG" as any) && (((d = ((u as any).getBoundingClientRect as any)()) as any).right as any) <= ((e as any).left as any) && ((d as any).bottom as any) > ((e as any).top as any) && s++;
    }
    let c: any;
    kn && s && ((r as any).nodeType as any) == (1 as any) && (((c = ((r as any).childNodes as any)[(s as any) - (1 as any)]) as any).nodeType as any) == (1 as any) && ((c as any).contentEditable as any) == ("false" as any) && ((((c as any).getBoundingClientRect as any)() as any).top as any) >= ((e as any).top as any) && s--, (r as any) == ((n as any).dom as any) && (s as any) == ((((r as any).childNodes as any).length as any) - (1 as any) as any) && (((r as any).lastChild as any).nodeType as any) == (1 as any) && ((e as any).top as any) > (((((r as any).lastChild as any).getBoundingClientRect as any)() as any).bottom as any) ? l = ((((n as any).state as any).doc as any).content as any).size : ((s as any) == (0 as any) || ((r as any).nodeType as any) != (1 as any) || ((((r as any).childNodes as any)[(s as any) - (1 as any)] as any).nodeName as any) != ("BR" as any)) && (l = (Sd as any)(n, r, s, e));
  }
  (l as any) == (null as any) && (l = (xd as any)(n, o, e));
  let a: any = (((n as any).docView as any).nearestDesc as any)(o, !0);
  return {
    pos: l,
    inside: a ? ((a as any).posAtStart as any) - ((a as any).border as any) : -1
  };
}
function eo(this: any, n: any): any {
  return ((n as any).top as any) < ((n as any).bottom as any) || ((n as any).left as any) < ((n as any).right as any);
}
function He(this: any, n: any, e: any): any {
  let t: any = ((n as any).getClientRects as any)();
  if ((t as any).length) {
    let r: any = (t as any)[(e as any) < (0 as any) ? 0 : ((t as any).length as any) - (1 as any)];
    if ((eo as any)(r)) return r;
  }
  return ((((Array as any).prototype as any).find as any).call as any)(t, eo) || ((n as any).getBoundingClientRect as any)();
}
const Cd: any = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function la(this: any, n: any, e: any, t: any): any {
  let {
      node: r,
      offset: s,
      atom: i
    }: any = (((n as any).docView as any).domFromPos as any)(e, (t as any) < (0 as any) ? -1 : 1),
    o: any = kn || ye;
  if (((r as any).nodeType as any) == (3 as any)) if (o && (((Cd as any).test as any)((r as any).nodeValue) || ((t as any) < (0 as any) ? !s : (s as any) == (((r as any).nodeValue as any).length as any)))) {
    let a: any = (He as any)((Ie as any)(r, s, s), t);
    if (ye && s && ((/\s/ as any).test as any)(((r as any).nodeValue as any)[(s as any) - (1 as any)]) && (s as any) < (((r as any).nodeValue as any).length as any)) {
      let c: any = (He as any)((Ie as any)(r, (s as any) - (1 as any), (s as any) - (1 as any)), -1);
      if (((c as any).top as any) == ((a as any).top as any)) {
        let u: any = (He as any)((Ie as any)(r, s, (s as any) + (1 as any)), -1);
        if (((u as any).top as any) != ((a as any).top as any)) return (jt as any)(u, ((u as any).left as any) < ((c as any).left as any));
      }
    }
    return a;
  } else {
    let a: any = s,
      c: any = s,
      u: any = (t as any) < (0 as any) ? 1 : -1;
    return (t as any) < (0 as any) && !s ? (c++, u = -1) : (t as any) >= (0 as any) && (s as any) == (((r as any).nodeValue as any).length as any) ? (a--, u = 1) : (t as any) < (0 as any) ? a-- : c++, (jt as any)((He as any)((Ie as any)(r, a, c), u), (u as any) < (0 as any));
  }
  if (!((((((n as any).state as any).doc as any).resolve as any)((e as any) - ((i || 0) as any)) as any).parent as any).inlineContent) {
    if ((i as any) == (null as any) && s && ((t as any) < (0 as any) || (s as any) == ((ge as any)(r) as any))) {
      let a: any = ((r as any).childNodes as any)[(s as any) - (1 as any)];
      if (((a as any).nodeType as any) == (1 as any)) return (Gr as any)(((a as any).getBoundingClientRect as any)(), !1);
    }
    if ((i as any) == (null as any) && (s as any) < ((ge as any)(r) as any)) {
      let a: any = ((r as any).childNodes as any)[s];
      if (((a as any).nodeType as any) == (1 as any)) return (Gr as any)(((a as any).getBoundingClientRect as any)(), !0);
    }
    return (Gr as any)(((r as any).getBoundingClientRect as any)(), (t as any) >= (0 as any));
  }
  if ((i as any) == (null as any) && s && ((t as any) < (0 as any) || (s as any) == ((ge as any)(r) as any))) {
    let a: any = ((r as any).childNodes as any)[(s as any) - (1 as any)],
      c: any = ((a as any).nodeType as any) == (3 as any) ? (Ie as any)(a, ((ge as any)(a) as any) - ((o ? 0 : 1) as any)) : ((a as any).nodeType as any) == (1 as any) && (((a as any).nodeName as any) != ("BR" as any) || !(a as any).nextSibling) ? a : null;
    if (c) return (jt as any)((He as any)(c, 1), !1);
  }
  if ((i as any) == (null as any) && (s as any) < ((ge as any)(r) as any)) {
    let a: any = ((r as any).childNodes as any)[s];
    for (; (a as any).pmViewDesc && ((a as any).pmViewDesc as any).ignoreForCoords;) a = (a as any).nextSibling;
    let c: any = a ? ((a as any).nodeType as any) == (3 as any) ? (Ie as any)(a, 0, o ? 0 : 1) : ((a as any).nodeType as any) == (1 as any) ? a : null : null;
    if (c) return (jt as any)((He as any)(c, -1), !0);
  }
  return (jt as any)((He as any)(((r as any).nodeType as any) == (3 as any) ? (Ie as any)(r) : r, -t), (t as any) >= (0 as any));
}
function jt(this: any, n: any, e: any): any {
  if (((n as any).width as any) == (0 as any)) return n;
  let t: any = e ? (n as any).left : (n as any).right;
  return {
    top: (n as any).top,
    bottom: (n as any).bottom,
    left: t,
    right: t
  };
}
function Gr(this: any, n: any, e: any): any {
  if (((n as any).height as any) == (0 as any)) return n;
  let t: any = e ? (n as any).top : (n as any).bottom;
  return {
    top: t,
    bottom: t,
    left: (n as any).left,
    right: (n as any).right
  };
}
function aa(this: any, n: any, e: any, t: any): any {
  let r: any = (n as any).state,
    s: any = ((n as any).root as any).activeElement;
  (r as any) != (e as any) && ((n as any).updateState as any)(e), (s as any) != ((n as any).dom as any) && ((n as any).focus as any)();
  try {
    return (t as any)();
  } finally {
    (r as any) != (e as any) && ((n as any).updateState as any)(r), (s as any) != ((n as any).dom as any) && s && ((s as any).focus as any)();
  }
}
function Md(this: any, n: any, e: any, t: any): any {
  let r: any = (e as any).selection,
    s: any = (t as any) == ("up" as any) ? (r as any).$from : (r as any).$to;
  return (aa as any)(n, e, (): any => {
    let {
      node: i
    }: any = (((n as any).docView as any).domFromPos as any)((s as any).pos, (t as any) == ("up" as any) ? -1 : 1);
    for (;;) {
      let l: any = (((n as any).docView as any).nearestDesc as any)(i, !0);
      if (!l) break;
      if (((l as any).node as any).isBlock) {
        i = (l as any).contentDOM || (l as any).dom;
        break;
      }
      i = ((l as any).dom as any).parentNode;
    }
    let o: any = (la as any)(n, (s as any).pos, 1);
    for (let l: any = (i as any).firstChild; l; l = (l as any).nextSibling) {
      let a: any;
      if (((l as any).nodeType as any) == (1 as any)) a = ((l as any).getClientRects as any)();else if (((l as any).nodeType as any) == (3 as any)) a = (((Ie as any)(l, 0, ((l as any).nodeValue as any).length) as any).getClientRects as any)();else continue;
      for (let c: any = 0; (c as any) < ((a as any).length as any); c++) {
        let u: any = (a as any)[c];
        if (((u as any).bottom as any) > (((u as any).top as any) + (1 as any) as any) && ((t as any) == ("up" as any) ? (((o as any).top as any) - ((u as any).top as any) as any) > ((((u as any).bottom as any) - ((o as any).top as any) as any) * (2 as any) as any) : (((u as any).bottom as any) - ((o as any).bottom as any) as any) > ((((o as any).bottom as any) - ((u as any).top as any) as any) * (2 as any) as any))) return !1;
      }
    }
    return !0;
  });
}
const Ed: any = /[\u0590-\u08ac]/;
function vd(this: any, n: any, e: any, t: any): any {
  let {
    $head: r
  }: any = (e as any).selection;
  if (!((r as any).parent as any).isTextblock) return !1;
  let s: any = (r as any).parentOffset,
    i: any = !s,
    o: any = (s as any) == ((((r as any).parent as any).content as any).size as any),
    l: any = ((n as any).domSelection as any)();
  return l ? !((Ed as any).test as any)(((r as any).parent as any).textContent) || !(l as any).modify ? (t as any) == ("left" as any) || (t as any) == ("backward" as any) ? i : o : (aa as any)(n, e, (): any => {
    let {
        focusNode: a,
        focusOffset: c,
        anchorNode: u,
        anchorOffset: d
      }: any = ((n as any).domSelectionRange as any)(),
      f: any = (l as any).caretBidiLevel;
    ((l as any).modify as any)("move", t, "character");
    let h: any = (r as any).depth ? (((n as any).docView as any).domAfterPos as any)(((r as any).before as any)()) : (n as any).dom,
      {
        focusNode: p,
        focusOffset: m
      }: any = ((n as any).domSelectionRange as any)(),
      g: any = p && !((h as any).contains as any)(((p as any).nodeType as any) == (1 as any) ? p : (p as any).parentNode) || (a as any) == (p as any) && (c as any) == (m as any);
    try {
      ((l as any).collapse as any)(u, d), a && ((a as any) != (u as any) || (c as any) != (d as any)) && (l as any).extend && ((l as any).extend as any)(a, c);
    } catch {}
    return (f as any) != (null as any) && ((l as any).caretBidiLevel = f), g;
  }) : ((r as any).pos as any) == (((r as any).start as any)() as any) || ((r as any).pos as any) == (((r as any).end as any)() as any);
}
let to: any = null,
  no: any = null,
  ro: any = !1;
function Td(this: any, n: any, e: any, t: any): any {
  return (to as any) == (e as any) && (no as any) == (t as any) ? ro : (to = e, no = t, ro = (t as any) == ("up" as any) || (t as any) == ("down" as any) ? (Md as any)(n, e, t) : (vd as any)(n, e, t));
}
const ke: number = 0,
  so: number = 1,
  it: number = 2,
  Te: number = 3;
class bn {
  declare dirty: any;
  declare contentDOM: any;
  declare dom: any;
  declare children: any;
  declare parent: any;
  [key: string]: any;
  constructor(e: any, t: any, r: any, s: any) {
    (this as any).parent = e, (this as any).children = t, (this as any).dom = r, (this as any).contentDOM = s, (this as any).dirty = ke, (r as any).pmViewDesc = this;
  }
  matchesWidget(e: any): any {
    return !1;
  }
  matchesMark(e: any): any {
    return !1;
  }
  matchesNode(e: any, t: any, r: any): any {
    return !1;
  }
  matchesHack(e: any): any {
    return !1;
  }
  parseRule(): any {
    return null;
  }
  stopEvent(e: any): any {
    return !1;
  }
  get size(): any {
    let e: any = 0;
    for (let t: any = 0; (t as any) < (((this as any).children as any).length as any); t++) e += (((this as any).children as any)[t] as any).size;
    return e;
  }
  get border(): any {
    return 0;
  }
  destroy(): any {
    (this as any).parent = void 0, (((this as any).dom as any).pmViewDesc as any) == (this as any) && (((this as any).dom as any).pmViewDesc = void 0);
    for (let e: any = 0; (e as any) < (((this as any).children as any).length as any); e++) ((((this as any).children as any)[e] as any).destroy as any)();
  }
  posBeforeChild(e: any): any {
    for (let t: any = 0, r: any = (this as any).posAtStart;; t++) {
      let s: any = ((this as any).children as any)[t];
      if ((s as any) == (e as any)) return r;
      r += (s as any).size;
    }
  }
  get posBefore(): any {
    return (((this as any).parent as any).posBeforeChild as any)(this);
  }
  get posAtStart(): any {
    return (this as any).parent ? ((((this as any).parent as any).posBeforeChild as any)(this) as any) + ((this as any).border as any) : 0;
  }
  get posAfter(): any {
    return ((this as any).posBefore as any) + ((this as any).size as any);
  }
  get posAtEnd(): any {
    return (((this as any).posAtStart as any) + ((this as any).size as any) as any) - ((2 as any) * ((this as any).border as any) as any);
  }
  localPosFromDOM(e: any, t: any, r: any): any {
    if ((this as any).contentDOM && (((this as any).contentDOM as any).contains as any)(((e as any).nodeType as any) == (1 as any) ? e : (e as any).parentNode)) if ((r as any) < (0 as any)) {
      let i: any, o: any;
      if ((e as any) == ((this as any).contentDOM as any)) i = ((e as any).childNodes as any)[(t as any) - (1 as any)];else {
        for (; ((e as any).parentNode as any) != ((this as any).contentDOM as any);) e = (e as any).parentNode;
        i = (e as any).previousSibling;
      }
      for (; i && !((o = (i as any).pmViewDesc) && ((o as any).parent as any) == (this as any));) i = (i as any).previousSibling;
      return i ? (((this as any).posBeforeChild as any)(o) as any) + ((o as any).size as any) : (this as any).posAtStart;
    } else {
      let i: any, o: any;
      if ((e as any) == ((this as any).contentDOM as any)) i = ((e as any).childNodes as any)[t];else {
        for (; ((e as any).parentNode as any) != ((this as any).contentDOM as any);) e = (e as any).parentNode;
        i = (e as any).nextSibling;
      }
      for (; i && !((o = (i as any).pmViewDesc) && ((o as any).parent as any) == (this as any));) i = (i as any).nextSibling;
      return i ? ((this as any).posBeforeChild as any)(o) : (this as any).posAtEnd;
    }
    let s: any;
    if ((e as any) == ((this as any).dom as any) && (this as any).contentDOM) s = (t as any) > ((X as any)((this as any).contentDOM) as any);else if ((this as any).contentDOM && ((this as any).contentDOM as any) != ((this as any).dom as any) && (((this as any).dom as any).contains as any)((this as any).contentDOM)) s = (((e as any).compareDocumentPosition as any)((this as any).contentDOM) as any) & (2 as any);else if (((this as any).dom as any).firstChild) {
      if ((t as any) == (0 as any)) for (let i: any = e;; i = (i as any).parentNode) {
        if ((i as any) == ((this as any).dom as any)) {
          s = !1;
          break;
        }
        if ((i as any).previousSibling) break;
      }
      if ((s as any) == (null as any) && (t as any) == (((e as any).childNodes as any).length as any)) for (let i: any = e;; i = (i as any).parentNode) {
        if ((i as any) == ((this as any).dom as any)) {
          s = !0;
          break;
        }
        if ((i as any).nextSibling) break;
      }
    }
    return s ?? (r as any) > (0 as any) ? (this as any).posAtEnd : (this as any).posAtStart;
  }
  nearestDesc(e: any, t: any = !1): any {
    for (let r: any = !0, s: any = e; s; s = (s as any).parentNode) {
      let i: any = ((this as any).getDesc as any)(s),
        o: any;
      if (i && (!t || (i as any).node)) if (r && (o = (i as any).nodeDOM) && !(((o as any).nodeType as any) == (1 as any) ? ((o as any).contains as any)(((e as any).nodeType as any) == (1 as any) ? e : (e as any).parentNode) : (o as any) == (e as any))) r = !1;else return i;
    }
  }
  getDesc(e: any): any {
    let t: any = (e as any).pmViewDesc;
    for (let r: any = t; r; r = (r as any).parent) if ((r as any) == (this as any)) return t;
  }
  posFromDOM(e: any, t: any, r: any): any {
    for (let s: any = e; s; s = (s as any).parentNode) {
      let i: any = ((this as any).getDesc as any)(s);
      if (i) return ((i as any).localPosFromDOM as any)(e, t, r);
    }
    return -1;
  }
  descAt(e: any): any {
    for (let t: any = 0, r: any = 0; (t as any) < (((this as any).children as any).length as any); t++) {
      let s: any = ((this as any).children as any)[t],
        i: any = (r as any) + ((s as any).size as any);
      if ((r as any) == (e as any) && (i as any) != (r as any)) {
        for (; !(s as any).border && ((s as any).children as any).length;) for (let o: any = 0; (o as any) < (((s as any).children as any).length as any); o++) {
          let l: any = ((s as any).children as any)[o];
          if ((l as any).size) {
            s = l;
            break;
          }
        }
        return s;
      }
      if ((e as any) < (i as any)) return ((s as any).descAt as any)(((e as any) - (r as any) as any) - ((s as any).border as any));
      r = i;
    }
  }
  domFromPos(e: any, t: any): any {
    if (!(this as any).contentDOM) return {
      node: (this as any).dom,
      offset: 0,
      atom: (e as any) + (1 as any)
    };
    let r: any = 0,
      s: any = 0;
    for (let i: any = 0; (r as any) < (((this as any).children as any).length as any); r++) {
      let o: any = ((this as any).children as any)[r],
        l: any = (i as any) + ((o as any).size as any);
      if ((l as any) > (e as any) || o instanceof ua) {
        s = (e as any) - (i as any);
        break;
      }
      i = l;
    }
    if (s) return ((((this as any).children as any)[r] as any).domFromPos as any)((s as any) - ((((this as any).children as any)[r] as any).border as any), t);
    for (let i: any; r && !((i = ((this as any).children as any)[(r as any) - (1 as any)]) as any).size && i instanceof ca && ((i as any).side as any) >= (0 as any); r--);
    if ((t as any) <= (0 as any)) {
      let i: any,
        o: any = !0;
      for (; i = r ? ((this as any).children as any)[(r as any) - (1 as any)] : null, !(!i || (((i as any).dom as any).parentNode as any) == ((this as any).contentDOM as any)); r--, o = !1);
      return i && t && o && !(i as any).border && !(i as any).domAtom ? ((i as any).domFromPos as any)((i as any).size, t) : {
        node: (this as any).contentDOM,
        offset: i ? ((X as any)((i as any).dom) as any) + (1 as any) : 0
      };
    } else {
      let i: any,
        o: any = !0;
      for (; i = (r as any) < (((this as any).children as any).length as any) ? ((this as any).children as any)[r] : null, !(!i || (((i as any).dom as any).parentNode as any) == ((this as any).contentDOM as any)); r++, o = !1);
      return i && o && !(i as any).border && !(i as any).domAtom ? ((i as any).domFromPos as any)(0, t) : {
        node: (this as any).contentDOM,
        offset: i ? (X as any)((i as any).dom) : (((this as any).contentDOM as any).childNodes as any).length
      };
    }
  }
  parseRange(e: any, t: any, r: any = 0): any {
    if ((((this as any).children as any).length as any) == (0 as any)) return {
      node: (this as any).contentDOM,
      from: e,
      to: t,
      fromOffset: 0,
      toOffset: (((this as any).contentDOM as any).childNodes as any).length
    };
    let s: any = -1,
      i: any = -1;
    for (let o: any = r, l: any = 0;; l++) {
      let a: any = ((this as any).children as any)[l],
        c: any = (o as any) + ((a as any).size as any);
      if ((s as any) == (-1 as any) && (e as any) <= (c as any)) {
        let u: any = (o as any) + ((a as any).border as any);
        if ((e as any) >= (u as any) && (t as any) <= ((c as any) - ((a as any).border as any) as any) && (a as any).node && (a as any).contentDOM && (((this as any).contentDOM as any).contains as any)((a as any).contentDOM)) return ((a as any).parseRange as any)(e, t, u);
        e = o;
        for (let d: any = l; (d as any) > (0 as any); d--) {
          let f: any = ((this as any).children as any)[(d as any) - (1 as any)];
          if ((f as any).size && (((f as any).dom as any).parentNode as any) == ((this as any).contentDOM as any) && !((f as any).emptyChildAt as any)(1)) {
            s = ((X as any)((f as any).dom) as any) + (1 as any);
            break;
          }
          e -= (f as any).size;
        }
        (s as any) == (-1 as any) && (s = 0);
      }
      if ((s as any) > (-1 as any) && ((c as any) > (t as any) || (l as any) == ((((this as any).children as any).length as any) - (1 as any) as any))) {
        t = c;
        for (let u: any = (l as any) + (1 as any); (u as any) < (((this as any).children as any).length as any); u++) {
          let d: any = ((this as any).children as any)[u];
          if ((d as any).size && (((d as any).dom as any).parentNode as any) == ((this as any).contentDOM as any) && !((d as any).emptyChildAt as any)(-1)) {
            i = (X as any)((d as any).dom);
            break;
          }
          t += (d as any).size;
        }
        (i as any) == (-1 as any) && (i = (((this as any).contentDOM as any).childNodes as any).length);
        break;
      }
      o = c;
    }
    return {
      node: (this as any).contentDOM,
      from: e,
      to: t,
      fromOffset: s,
      toOffset: i
    };
  }
  emptyChildAt(e: any): any {
    if ((this as any).border || !(this as any).contentDOM || !((this as any).children as any).length) return !1;
    let t: any = ((this as any).children as any)[(e as any) < (0 as any) ? 0 : (((this as any).children as any).length as any) - (1 as any)];
    return ((t as any).size as any) == (0 as any) || ((t as any).emptyChildAt as any)(e);
  }
  domAfterPos(e: any): any {
    let {
      node: t,
      offset: r
    }: any = ((this as any).domFromPos as any)(e, 0);
    if (((t as any).nodeType as any) != (1 as any) || (r as any) == (((t as any).childNodes as any).length as any)) throw new (RangeError as any)(("No node after pos " as any) + (e as any));
    return ((t as any).childNodes as any)[r];
  }
  setSelection(e: any, t: any, r: any, s: any = !1): any {
    let i: any = ((Math as any).min as any)(e, t),
      o: any = ((Math as any).max as any)(e, t);
    for (let h: any = 0, p: any = 0; (h as any) < (((this as any).children as any).length as any); h++) {
      let m: any = ((this as any).children as any)[h],
        g: any = (p as any) + ((m as any).size as any);
      if ((i as any) > (p as any) && (o as any) < (g as any)) return ((m as any).setSelection as any)(((e as any) - (p as any) as any) - ((m as any).border as any), ((t as any) - (p as any) as any) - ((m as any).border as any), r, s);
      p = g;
    }
    let l: any = ((this as any).domFromPos as any)(e, e ? -1 : 1),
      a: any = (t as any) == (e as any) ? l : ((this as any).domFromPos as any)(t, t ? -1 : 1),
      c: any = (((r as any).root as any).getSelection as any)(),
      u: any = ((r as any).domSelectionRange as any)(),
      d: any = !1;
    if ((ye || ee) && (e as any) == (t as any)) {
      let {
        node: h,
        offset: p
      }: any = l;
      if (((h as any).nodeType as any) == (3 as any)) {
        if (d = !!(p && (((h as any).nodeValue as any)[(p as any) - (1 as any)] as any) == (`
` as any)), d && (p as any) == (((h as any).nodeValue as any).length as any)) for (let m: any = h, g: any; m; m = (m as any).parentNode) {
          if (g = (m as any).nextSibling) {
            ((g as any).nodeName as any) == ("BR" as any) && (l = a = {
              node: (g as any).parentNode,
              offset: ((X as any)(g) as any) + (1 as any)
            });
            break;
          }
          let y: any = (m as any).pmViewDesc;
          if (y && (y as any).node && ((y as any).node as any).isBlock) break;
        }
      } else {
        let m: any = ((h as any).childNodes as any)[(p as any) - (1 as any)];
        d = m && (((m as any).nodeName as any) == ("BR" as any) || ((m as any).contentEditable as any) == ("false" as any));
      }
    }
    if (ye && (u as any).focusNode && ((u as any).focusNode as any) != ((a as any).node as any) && (((u as any).focusNode as any).nodeType as any) == (1 as any)) {
      let h: any = (((u as any).focusNode as any).childNodes as any)[(u as any).focusOffset];
      h && ((h as any).contentEditable as any) == ("false" as any) && (s = !0);
    }
    if (!(s || d && ee) && (mt as any)((l as any).node, (l as any).offset, (u as any).anchorNode, (u as any).anchorOffset) && (mt as any)((a as any).node, (a as any).offset, (u as any).focusNode, (u as any).focusOffset)) return;
    let f: any = !1;
    if (((c as any).extend || (e as any) == (t as any)) && !(d && ye)) {
      ((c as any).collapse as any)((l as any).node, (l as any).offset);
      try {
        (e as any) != (t as any) && ((c as any).extend as any)((a as any).node, (a as any).offset), f = !0;
      } catch {}
    }
    if (!f) {
      if ((e as any) > (t as any)) {
        let p: any = l;
        l = a, a = p;
      }
      let h: any = ((document as any).createRange as any)();
      ((h as any).setEnd as any)((a as any).node, (a as any).offset), ((h as any).setStart as any)((l as any).node, (l as any).offset), ((c as any).removeAllRanges as any)(), ((c as any).addRange as any)(h);
    }
  }
  ignoreMutation(e: any): any {
    return !(this as any).contentDOM && ((e as any).type as any) != ("selection" as any);
  }
  get contentLost(): any {
    return (this as any).contentDOM && ((this as any).contentDOM as any) != ((this as any).dom as any) && !(((this as any).dom as any).contains as any)((this as any).contentDOM);
  }
  markDirty(e: any, t: any): any {
    for (let r: any = 0, s: any = 0; (s as any) < (((this as any).children as any).length as any); s++) {
      let i: any = ((this as any).children as any)[s],
        o: any = (r as any) + ((i as any).size as any);
      if ((r as any) == (o as any) ? (e as any) <= (o as any) && (t as any) >= (r as any) : (e as any) < (o as any) && (t as any) > (r as any)) {
        let l: any = (r as any) + ((i as any).border as any),
          a: any = (o as any) - ((i as any).border as any);
        if ((e as any) >= (l as any) && (t as any) <= (a as any)) {
          (this as any).dirty = (e as any) == (r as any) || (t as any) == (o as any) ? it : so, (e as any) == (l as any) && (t as any) == (a as any) && ((i as any).contentLost || (((i as any).dom as any).parentNode as any) != ((this as any).contentDOM as any)) ? (i as any).dirty = Te : ((i as any).markDirty as any)((e as any) - (l as any), (t as any) - (l as any));
          return;
        } else (i as any).dirty = ((i as any).dom as any) == ((i as any).contentDOM as any) && (((i as any).dom as any).parentNode as any) == ((this as any).contentDOM as any) && !((i as any).children as any).length ? it : Te;
      }
      r = o;
    }
    (this as any).dirty = it;
  }
  markParentsDirty(): any {
    let e: any = 1;
    for (let t: any = (this as any).parent; t; t = (t as any).parent, e++) {
      let r: any = (e as any) == (1 as any) ? it : so;
      ((t as any).dirty as any) < (r as any) && ((t as any).dirty = r);
    }
  }
  get domAtom(): any {
    return !1;
  }
  get ignoreForCoords(): any {
    return !1;
  }
  get ignoreForSelection(): any {
    return !1;
  }
  isText(e: any): any {
    return !1;
  }
}
class ca extends (bn as any) {
  declare widget: any;
  [key: string]: any;
  constructor(e: any, t: any, r: any, s: any) {
    let i: any,
      o: any = ((t as any).type as any).toDOM;
    if ((typeof o as any) == ("function" as any) && (o = (o as any)(r, (): any => {
      if (!i) return s;
      if ((i as any).parent) return (((i as any).parent as any).posBeforeChild as any)(i);
    })), !(((t as any).type as any).spec as any).raw) {
      if (((o as any).nodeType as any) != (1 as any)) {
        let l: any = ((document as any).createElement as any)("span");
        ((l as any).appendChild as any)(o), o = l;
      }
      (o as any).contentEditable = "false", (((o as any).classList as any).add as any)("ProseMirror-widget");
    }
    super(e, [], o, null), (this as any).widget = t, (this as any).widget = t, i = this;
  }
  matchesWidget(e: any): any {
    return ((this as any).dirty as any) == (ke as any) && (((e as any).type as any).eq as any)(((this as any).widget as any).type);
  }
  parseRule(): any {
    return {
      ignore: !0
    };
  }
  stopEvent(e: any): any {
    let t: any = (((this as any).widget as any).spec as any).stopEvent;
    return t ? (t as any)(e) : !1;
  }
  ignoreMutation(e: any): any {
    return ((e as any).type as any) != ("selection" as any) || (((this as any).widget as any).spec as any).ignoreSelection;
  }
  destroy(): any {
    ((((this as any).widget as any).type as any).destroy as any)((this as any).dom), (super.destroy as any)();
  }
  get domAtom(): any {
    return !0;
  }
  get ignoreForSelection(): any {
    return !!((((this as any).widget as any).type as any).spec as any).relaxedSide;
  }
  get side(): any {
    return (((this as any).widget as any).type as any).side;
  }
}
class Ad extends (bn as any) {
  declare text: any;
  declare textDOM: any;
  [key: string]: any;
  constructor(e: any, t: any, r: any, s: any) {
    super(e, [], t, null), (this as any).textDOM = r, (this as any).text = s;
  }
  get size(): any {
    return ((this as any).text as any).length;
  }
  localPosFromDOM(e: any, t: any): any {
    return (e as any) != ((this as any).textDOM as any) ? ((this as any).posAtStart as any) + ((t ? (this as any).size : 0) as any) : ((this as any).posAtStart as any) + (t as any);
  }
  domFromPos(e: any): any {
    return {
      node: (this as any).textDOM,
      offset: e
    };
  }
  ignoreMutation(e: any): any {
    return ((e as any).type as any) === ("characterData" as any) && (((e as any).target as any).nodeValue as any) == ((e as any).oldValue as any);
  }
}
class gt extends (bn as any) {
  declare dirty: any;
  declare spec: any;
  declare mark: any;
  [key: string]: any;
  constructor(e: any, t: any, r: any, s: any, i: any) {
    super(e, [], r, s), (this as any).mark = t, (this as any).spec = i;
  }
  static create(e: any, t: any, r: any, s: any): any {
    let i: any = ((s as any).nodeViews as any)[((t as any).type as any).name],
      o: any = i && (i as any)(t, s, r);
    return (!o || !(o as any).dom) && (o = ((kt as any).renderSpec as any)(document, ((((t as any).type as any).spec as any).toDOM as any)(t, r), null, (t as any).attrs)), new (gt as any)(e, t, (o as any).dom, (o as any).contentDOM || (o as any).dom, o);
  }
  parseRule(): any {
    return ((this as any).dirty as any) & (Te as any) || ((((this as any).mark as any).type as any).spec as any).reparseInView ? null : {
      mark: (((this as any).mark as any).type as any).name,
      attrs: ((this as any).mark as any).attrs,
      contentElement: (this as any).contentDOM
    };
  }
  matchesMark(e: any): any {
    return ((this as any).dirty as any) != (Te as any) && (((this as any).mark as any).eq as any)(e);
  }
  markDirty(e: any, t: any): any {
    if ((super.markDirty as any)(e, t), ((this as any).dirty as any) != (ke as any)) {
      let r: any = (this as any).parent;
      for (; !(r as any).node;) r = (r as any).parent;
      ((r as any).dirty as any) < ((this as any).dirty as any) && ((r as any).dirty = (this as any).dirty), (this as any).dirty = ke;
    }
  }
  slice(e: any, t: any, r: any): any {
    let s: any = ((gt as any).create as any)((this as any).parent, (this as any).mark, !0, r),
      i: any = (this as any).children,
      o: any = (this as any).size;
    (t as any) < (o as any) && (i = (Es as any)(i, t, o, r)), (e as any) > (0 as any) && (i = (Es as any)(i, 0, e, r));
    for (let l: any = 0; (l as any) < ((i as any).length as any); l++) ((i as any)[l] as any).parent = s;
    return (s as any).children = i, s;
  }
  ignoreMutation(e: any): any {
    return ((this as any).spec as any).ignoreMutation ? (((this as any).spec as any).ignoreMutation as any)(e) : (super.ignoreMutation as any)(e);
  }
  destroy(): any {
    ((this as any).spec as any).destroy && (((this as any).spec as any).destroy as any)(), (super.destroy as any)();
  }
}
class Ye extends (bn as any) {
  declare dom: any;
  declare dirty: any;
  declare children: any;
  declare nodeDOM: any;
  declare innerDeco: any;
  declare outerDeco: any;
  declare node: any;
  [key: string]: any;
  constructor(e: any, t: any, r: any, s: any, i: any, o: any, l: any, a: any, c: any) {
    super(e, [], i, o), (this as any).node = t, (this as any).outerDeco = r, (this as any).innerDeco = s, (this as any).nodeDOM = l;
  }
  static create(e: any, t: any, r: any, s: any, i: any, o: any): any {
    let l: any = ((i as any).nodeViews as any)[((t as any).type as any).name],
      a: any,
      c: any = l && (l as any)(t, i, (): any => {
        if (!a) return o;
        if ((a as any).parent) return (((a as any).parent as any).posBeforeChild as any)(a);
      }, r, s),
      u: any = c && (c as any).dom,
      d: any = c && (c as any).contentDOM;
    if ((t as any).isText) {
      if (!u) u = ((document as any).createTextNode as any)((t as any).text);else if (((u as any).nodeType as any) != (3 as any)) throw new (RangeError as any)("Text must be rendered as a DOM text node");
    } else u || ({
      dom: u,
      contentDOM: d
    } = ((kt as any).renderSpec as any)(document, ((((t as any).type as any).spec as any).toDOM as any)(t), null, (t as any).attrs));
    !d && !(t as any).isText && ((u as any).nodeName as any) != ("BR" as any) && (((u as any).hasAttribute as any)("contenteditable") || ((u as any).contentEditable = "false"), (((t as any).type as any).spec as any).draggable && ((u as any).draggable = !0));
    let f: any = u;
    return u = (ha as any)(u, r, t), c ? a = new (Nd as any)(e, t, r, s, u, d || null, f, c, i, (o as any) + (1 as any)) : (t as any).isText ? new (Or as any)(e, t, r, s, u, f, i) : new (Ye as any)(e, t, r, s, u, d || null, f, i, (o as any) + (1 as any));
  }
  parseRule(): any {
    if (((((this as any).node as any).type as any).spec as any).reparseInView) return null;
    let e: any = {
      node: (((this as any).node as any).type as any).name,
      attrs: ((this as any).node as any).attrs
    };
    if (((((this as any).node as any).type as any).whitespace as any) == ("pre" as any) && ((e as any).preserveWhitespace = "full"), !(this as any).contentDOM) (e as any).getContent = (): any => ((this as any).node as any).content;else if (!(this as any).contentLost) (e as any).contentElement = (this as any).contentDOM;else {
      for (let t: any = (((this as any).children as any).length as any) - (1 as any); (t as any) >= (0 as any); t--) {
        let r: any = ((this as any).children as any)[t];
        if ((((this as any).dom as any).contains as any)(((r as any).dom as any).parentNode)) {
          (e as any).contentElement = ((r as any).dom as any).parentNode;
          break;
        }
      }
      (e as any).contentElement || ((e as any).getContent = (): any => (k as any).empty);
    }
    return e;
  }
  matchesNode(e: any, t: any, r: any): any {
    return ((this as any).dirty as any) == (ke as any) && ((e as any).eq as any)((this as any).node) && (jn as any)(t, (this as any).outerDeco) && ((r as any).eq as any)((this as any).innerDeco);
  }
  get size(): any {
    return ((this as any).node as any).nodeSize;
  }
  get border(): any {
    return ((this as any).node as any).isLeaf ? 0 : 1;
  }
  updateChildren(e: any, t: any): any {
    let r: any = ((this as any).node as any).inlineContent,
      s: any = t,
      i: any = (e as any).composing ? ((this as any).localCompositionInfo as any)(e, t) : null,
      o: any = i && ((i as any).pos as any) > (-1 as any) ? i : null,
      l: any = i && ((i as any).pos as any) < (0 as any),
      a: any = new (Dd as any)(this, o && (o as any).node, e);
    (Pd as any)((this as any).node, (this as any).innerDeco, (c: any, u: any, d: any): any => {
      ((c as any).spec as any).marks ? ((a as any).syncToMarks as any)(((c as any).spec as any).marks, r, e) : (((c as any).type as any).side as any) >= (0 as any) && !d && ((a as any).syncToMarks as any)((u as any) == (((this as any).node as any).childCount as any) ? (L as any).none : ((((this as any).node as any).child as any)(u) as any).marks, r, e), ((a as any).placeWidget as any)(c, e, s);
    }, (c: any, u: any, d: any, f: any): any => {
      ((a as any).syncToMarks as any)((c as any).marks, r, e);
      let h: any;
      ((a as any).findNodeMatch as any)(c, u, d, f) || l && ((((e as any).state as any).selection as any).from as any) > (s as any) && ((((e as any).state as any).selection as any).to as any) < ((s as any) + ((c as any).nodeSize as any) as any) && ((h = ((a as any).findIndexWithChild as any)((i as any).node)) as any) > (-1 as any) && ((a as any).updateNodeAt as any)(c, u, d, h, e) || ((a as any).updateNextNode as any)(c, u, d, e, f, s) || ((a as any).addNode as any)(c, u, d, e, s), s += (c as any).nodeSize;
    }), ((a as any).syncToMarks as any)([], r, e), ((this as any).node as any).isTextblock && ((a as any).addTextblockHacks as any)(), ((a as any).destroyRest as any)(), ((a as any).changed || ((this as any).dirty as any) == (it as any)) && (o && ((this as any).protectLocalComposition as any)(e, o), (da as any)((this as any).contentDOM, (this as any).children, e), zt && (Ld as any)((this as any).dom));
  }
  localCompositionInfo(e: any, t: any): any {
    let {
      from: r,
      to: s
    }: any = ((e as any).state as any).selection;
    if (!(((e as any).state as any).selection instanceof N) || (r as any) < (t as any) || (s as any) > ((t as any) + ((((this as any).node as any).content as any).size as any) as any)) return null;
    let i: any = ((e as any).input as any).compositionNode;
    if (!i || !(((this as any).dom as any).contains as any)((i as any).parentNode)) return null;
    if (((this as any).node as any).inlineContent) {
      let o: any = (i as any).nodeValue,
        l: any = (zd as any)(((this as any).node as any).content, o, (r as any) - (t as any), (s as any) - (t as any));
      return (l as any) < (0 as any) ? null : {
        node: i,
        pos: l,
        text: o
      };
    } else return {
      node: i,
      pos: -1,
      text: ""
    };
  }
  protectLocalComposition(e: any, {
    node: t,
    pos: r,
    text: s
  }: any): any {
    if (((this as any).getDesc as any)(t)) return;
    let i: any = t;
    for (; ((i as any).parentNode as any) != ((this as any).contentDOM as any); i = (i as any).parentNode) {
      for (; (i as any).previousSibling;) (((i as any).parentNode as any).removeChild as any)((i as any).previousSibling);
      for (; (i as any).nextSibling;) (((i as any).parentNode as any).removeChild as any)((i as any).nextSibling);
      (i as any).pmViewDesc && ((i as any).pmViewDesc = void 0);
    }
    let o: any = new (Ad as any)(this, i, t, s);
    ((((e as any).input as any).compositionNodes as any).push as any)(o), (this as any).children = (Es as any)((this as any).children, r, (r as any) + ((s as any).length as any), e, o);
  }
  update(e: any, t: any, r: any, s: any): any {
    return ((this as any).dirty as any) == (Te as any) || !((e as any).sameMarkup as any)((this as any).node) ? !1 : (((this as any).updateInner as any)(e, t, r, s), !0);
  }
  updateInner(e: any, t: any, r: any, s: any): any {
    ((this as any).updateOuterDeco as any)(t), (this as any).node = e, (this as any).innerDeco = r, (this as any).contentDOM && ((this as any).updateChildren as any)(s, (this as any).posAtStart), (this as any).dirty = ke;
  }
  updateOuterDeco(e: any): any {
    if ((jn as any)(e, (this as any).outerDeco)) return;
    let t: any = (((this as any).nodeDOM as any).nodeType as any) != (1 as any),
      r: any = (this as any).dom;
    (this as any).dom = (fa as any)((this as any).dom, (this as any).nodeDOM, (Ms as any)((this as any).outerDeco, (this as any).node, t), (Ms as any)(e, (this as any).node, t)), ((this as any).dom as any) != (r as any) && ((r as any).pmViewDesc = void 0, ((this as any).dom as any).pmViewDesc = this), (this as any).outerDeco = e;
  }
  selectNode(): any {
    (((this as any).nodeDOM as any).nodeType as any) == (1 as any) && (((((this as any).nodeDOM as any).classList as any).add as any)("ProseMirror-selectednode"), ((this as any).contentDOM || !((((this as any).node as any).type as any).spec as any).draggable) && (((this as any).nodeDOM as any).draggable = !0));
  }
  deselectNode(): any {
    (((this as any).nodeDOM as any).nodeType as any) == (1 as any) && (((((this as any).nodeDOM as any).classList as any).remove as any)("ProseMirror-selectednode"), ((this as any).contentDOM || !((((this as any).node as any).type as any).spec as any).draggable) && (((this as any).nodeDOM as any).removeAttribute as any)("draggable"));
  }
  get domAtom(): any {
    return ((this as any).node as any).isAtom;
  }
}
function io(this: any, n: any, e: any, t: any, r: any, s: any): any {
  (ha as any)(r, e, n);
  let i: any = new (Ye as any)(void 0, n, e, t, r, r, r, s, 0);
  return (i as any).contentDOM && ((i as any).updateChildren as any)(s, 0), i;
}
class Or extends (Ye as any) {
  declare dirty: any;
  declare node: any;
  [key: string]: any;
  constructor(e: any, t: any, r: any, s: any, i: any, o: any, l: any) {
    super(e, t, r, s, i, null, o, l, 0);
  }
  parseRule(): any {
    let e: any = ((this as any).nodeDOM as any).parentNode;
    for (; e && (e as any) != ((this as any).dom as any) && !(e as any).pmIsDeco;) e = (e as any).parentNode;
    return {
      skip: e || !0
    };
  }
  update(e: any, t: any, r: any, s: any): any {
    return ((this as any).dirty as any) == (Te as any) || ((this as any).dirty as any) != (ke as any) && !((this as any).inParent as any)() || !((e as any).sameMarkup as any)((this as any).node) ? !1 : (((this as any).updateOuterDeco as any)(t), (((this as any).dirty as any) != (ke as any) || ((e as any).text as any) != (((this as any).node as any).text as any)) && ((e as any).text as any) != (((this as any).nodeDOM as any).nodeValue as any) && (((this as any).nodeDOM as any).nodeValue = (e as any).text, ((s as any).trackWrites as any) == ((this as any).nodeDOM as any) && ((s as any).trackWrites = null)), (this as any).node = e, (this as any).dirty = ke, !0);
  }
  inParent(): any {
    let e: any = ((this as any).parent as any).contentDOM;
    for (let t: any = (this as any).nodeDOM; t; t = (t as any).parentNode) if ((t as any) == (e as any)) return !0;
    return !1;
  }
  domFromPos(e: any): any {
    return {
      node: (this as any).nodeDOM,
      offset: e
    };
  }
  localPosFromDOM(e: any, t: any, r: any): any {
    return (e as any) == ((this as any).nodeDOM as any) ? ((this as any).posAtStart as any) + (((Math as any).min as any)(t, (((this as any).node as any).text as any).length) as any) : (super.localPosFromDOM as any)(e, t, r);
  }
  ignoreMutation(e: any): any {
    return ((e as any).type as any) != ("characterData" as any) && ((e as any).type as any) != ("selection" as any);
  }
  slice(e: any, t: any, r: any): any {
    let s: any = (((this as any).node as any).cut as any)(e, t),
      i: any = ((document as any).createTextNode as any)((s as any).text);
    return new (Or as any)((this as any).parent, s, (this as any).outerDeco, (this as any).innerDeco, i, i, r);
  }
  markDirty(e: any, t: any): any {
    (super.markDirty as any)(e, t), ((this as any).dom as any) != ((this as any).nodeDOM as any) && ((e as any) == (0 as any) || (t as any) == ((((this as any).nodeDOM as any).nodeValue as any).length as any)) && ((this as any).dirty = Te);
  }
  get domAtom(): any {
    return !1;
  }
  isText(e: any): any {
    return (((this as any).node as any).text as any) == (e as any);
  }
}
class ua extends (bn as any) {
  [key: string]: any;
  parseRule(): any {
    return {
      ignore: !0
    };
  }
  matchesHack(e: any): any {
    return ((this as any).dirty as any) == (ke as any) && (((this as any).dom as any).nodeName as any) == (e as any);
  }
  get domAtom(): any {
    return !0;
  }
  get ignoreForCoords(): any {
    return (((this as any).dom as any).nodeName as any) == ("IMG" as any);
  }
}
class Nd extends (Ye as any) {
  declare spec: any;
  [key: string]: any;
  constructor(e: any, t: any, r: any, s: any, i: any, o: any, l: any, a: any, c: any, u: any) {
    super(e, t, r, s, i, o, l, c, u), (this as any).spec = a;
  }
  update(e: any, t: any, r: any, s: any): any {
    if (((this as any).dirty as any) == (Te as any)) return !1;
    if (((this as any).spec as any).update && ((((this as any).node as any).type as any) == ((e as any).type as any) || ((this as any).spec as any).multiType)) {
      let i: any = (((this as any).spec as any).update as any)(e, t, r);
      return i && ((this as any).updateInner as any)(e, t, r, s), i;
    } else return !(this as any).contentDOM && !(e as any).isLeaf ? !1 : (super.update as any)(e, t, r, s);
  }
  selectNode(): any {
    ((this as any).spec as any).selectNode ? (((this as any).spec as any).selectNode as any)() : (super.selectNode as any)();
  }
  deselectNode(): any {
    ((this as any).spec as any).deselectNode ? (((this as any).spec as any).deselectNode as any)() : (super.deselectNode as any)();
  }
  setSelection(e: any, t: any, r: any, s: any): any {
    ((this as any).spec as any).setSelection ? (((this as any).spec as any).setSelection as any)(e, t, (r as any).root) : (super.setSelection as any)(e, t, r, s);
  }
  destroy(): any {
    ((this as any).spec as any).destroy && (((this as any).spec as any).destroy as any)(), (super.destroy as any)();
  }
  stopEvent(e: any): any {
    return ((this as any).spec as any).stopEvent ? (((this as any).spec as any).stopEvent as any)(e) : !1;
  }
  ignoreMutation(e: any): any {
    return ((this as any).spec as any).ignoreMutation ? (((this as any).spec as any).ignoreMutation as any)(e) : (super.ignoreMutation as any)(e);
  }
}
function da(this: any, n: any, e: any, t: any): any {
  let r: any = (n as any).firstChild,
    s: any = !1;
  for (let i: any = 0; (i as any) < ((e as any).length as any); i++) {
    let o: any = (e as any)[i],
      l: any = (o as any).dom;
    if (((l as any).parentNode as any) == (n as any)) {
      for (; (l as any) != (r as any);) r = (oo as any)(r), s = !0;
      r = (r as any).nextSibling;
    } else s = !0, ((n as any).insertBefore as any)(l, r);
    if (o instanceof gt) {
      let a: any = r ? (r as any).previousSibling : (n as any).lastChild;
      (da as any)((o as any).contentDOM, (o as any).children, t), r = a ? (a as any).nextSibling : (n as any).firstChild;
    }
  }
  for (; r;) r = (oo as any)(r), s = !0;
  s && ((t as any).trackWrites as any) == (n as any) && ((t as any).trackWrites = null);
}
const Qt: any = function (this: any, n: any): any {
  n && ((this as any).nodeName = n);
};
(Qt as any).prototype = ((Object as any).create as any)(null);
const ot: any = [new (Qt as any)()];
function Ms(this: any, n: any, e: any, t: any): any {
  if (((n as any).length as any) == (0 as any)) return ot;
  let r: any = t ? (ot as any)[0] : new (Qt as any)(),
    s: any = [r];
  for (let i: any = 0; (i as any) < ((n as any).length as any); i++) {
    let o: any = (((n as any)[i] as any).type as any).attrs;
    if (o) {
      (o as any).nodeName && ((s as any).push as any)(r = new (Qt as any)((o as any).nodeName));
      for (let l in o) {
        let a: any = (o as any)[l];
        (a as any) != (null as any) && (t && ((s as any).length as any) == (1 as any) && ((s as any).push as any)(r = new (Qt as any)((e as any).isInline ? "span" : "div")), (l as any) == ("class" as any) ? (r as any).class = (((r as any).class ? ((r as any).class as any) + (" " as any) : "") as any) + (a as any) : (l as any) == ("style" as any) ? (r as any).style = (((r as any).style ? ((r as any).style as any) + (";" as any) : "") as any) + (a as any) : (l as any) != ("nodeName" as any) && ((r as any)[l] = a));
      }
    }
  }
  return s;
}
function fa(this: any, n: any, e: any, t: any, r: any): any {
  if ((t as any) == (ot as any) && (r as any) == (ot as any)) return e;
  let s: any = e;
  for (let i: any = 0; (i as any) < ((r as any).length as any); i++) {
    let o: any = (r as any)[i],
      l: any = (t as any)[i];
    if (i) {
      let a: any;
      l && ((l as any).nodeName as any) == ((o as any).nodeName as any) && (s as any) != (n as any) && (a = (s as any).parentNode) && ((((a as any).nodeName as any).toLowerCase as any)() as any) == ((o as any).nodeName as any) || (a = ((document as any).createElement as any)((o as any).nodeName), (a as any).pmIsDeco = !0, ((a as any).appendChild as any)(s), l = (ot as any)[0]), s = a;
    }
    (Od as any)(s, l || (ot as any)[0], o);
  }
  return s;
}
function Od(this: any, n: any, e: any, t: any): any {
  for (let r in e) (r as any) != ("class" as any) && (r as any) != ("style" as any) && (r as any) != ("nodeName" as any) && !(r in t) && ((n as any).removeAttribute as any)(r);
  for (let r in t) (r as any) != ("class" as any) && (r as any) != ("style" as any) && (r as any) != ("nodeName" as any) && ((t as any)[r] as any) != ((e as any)[r] as any) && ((n as any).setAttribute as any)(r, (t as any)[r]);
  if (((e as any).class as any) != ((t as any).class as any)) {
    let r: any = (e as any).class ? (((((e as any).class as any).split as any)(" ") as any).filter as any)(Boolean) : [],
      s: any = (t as any).class ? (((((t as any).class as any).split as any)(" ") as any).filter as any)(Boolean) : [];
    for (let i: any = 0; (i as any) < ((r as any).length as any); i++) (((s as any).indexOf as any)((r as any)[i]) as any) == (-1 as any) && (((n as any).classList as any).remove as any)((r as any)[i]);
    for (let i: any = 0; (i as any) < ((s as any).length as any); i++) (((r as any).indexOf as any)((s as any)[i]) as any) == (-1 as any) && (((n as any).classList as any).add as any)((s as any)[i]);
    (((n as any).classList as any).length as any) == (0 as any) && ((n as any).removeAttribute as any)("class");
  }
  if (((e as any).style as any) != ((t as any).style as any)) {
    if ((e as any).style) {
      let r: any = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g,
        s: any;
      for (; s = ((r as any).exec as any)((e as any).style);) (((n as any).style as any).removeProperty as any)((s as any)[1]);
    }
    (t as any).style && (((n as any).style as any).cssText += (t as any).style);
  }
}
function ha(this: any, n: any, e: any, t: any): any {
  return (fa as any)(n, n, ot, (Ms as any)(e, t, ((n as any).nodeType as any) != (1 as any)));
}
function jn(this: any, n: any, e: any): any {
  if (((n as any).length as any) != ((e as any).length as any)) return !1;
  for (let t: any = 0; (t as any) < ((n as any).length as any); t++) if (!((((n as any)[t] as any).type as any).eq as any)(((e as any)[t] as any).type)) return !1;
  return !0;
}
function oo(this: any, n: any): any {
  let e: any = (n as any).nextSibling;
  return (((n as any).parentNode as any).removeChild as any)(n), e;
}
class Dd {
  declare preMatch: any;
  declare top: any;
  declare changed: any;
  declare stack: any;
  declare index: any;
  declare view: any;
  declare lock: any;
  [key: string]: any;
  constructor(e: any, t: any, r: any) {
    (this as any).lock = t, (this as any).view = r, (this as any).index = 0, (this as any).stack = [], (this as any).changed = !1, (this as any).top = e, (this as any).preMatch = (Id as any)(((e as any).node as any).content, e);
  }
  destroyBetween(e: any, t: any): any {
    if ((e as any) != (t as any)) {
      for (let r: any = e; (r as any) < (t as any); r++) (((((this as any).top as any).children as any)[r] as any).destroy as any)();
      ((((this as any).top as any).children as any).splice as any)(e, (t as any) - (e as any)), (this as any).changed = !0;
    }
  }
  destroyRest(): any {
    ((this as any).destroyBetween as any)((this as any).index, (((this as any).top as any).children as any).length);
  }
  syncToMarks(e: any, t: any, r: any): any {
    let s: any = 0,
      i: any = (((this as any).stack as any).length as any) >> (1 as any),
      o: any = ((Math as any).min as any)(i, (e as any).length);
    for (; (s as any) < (o as any) && ((((s as any) == ((i as any) - (1 as any) as any) ? (this as any).top : ((this as any).stack as any)[((s as any) + (1 as any) as any) << (1 as any)]) as any).matchesMark as any)((e as any)[s]) && (((((e as any)[s] as any).type as any).spec as any).spanning as any) !== (!1 as any);) s++;
    for (; (s as any) < (i as any);) ((this as any).destroyRest as any)(), ((this as any).top as any).dirty = ke, (this as any).index = (((this as any).stack as any).pop as any)(), (this as any).top = (((this as any).stack as any).pop as any)(), i--;
    for (; (i as any) < ((e as any).length as any);) {
      (((this as any).stack as any).push as any)((this as any).top, ((this as any).index as any) + (1 as any));
      let l: any = -1;
      for (let a: any = (this as any).index; (a as any) < (((Math as any).min as any)(((this as any).index as any) + (3 as any), (((this as any).top as any).children as any).length) as any); a++) {
        let c: any = (((this as any).top as any).children as any)[a];
        if (((c as any).matchesMark as any)((e as any)[i]) && !((this as any).isLocked as any)((c as any).dom)) {
          l = a;
          break;
        }
      }
      if ((l as any) > (-1 as any)) (l as any) > ((this as any).index as any) && ((this as any).changed = !0, ((this as any).destroyBetween as any)((this as any).index, l)), (this as any).top = (((this as any).top as any).children as any)[(this as any).index];else {
        let a: any = ((gt as any).create as any)((this as any).top, (e as any)[i], t, r);
        ((((this as any).top as any).children as any).splice as any)((this as any).index, 0, a), (this as any).top = a, (this as any).changed = !0;
      }
      (this as any).index = 0, i++;
    }
  }
  findNodeMatch(e: any, t: any, r: any, s: any): any {
    let i: any = -1,
      o: any;
    if ((s as any) >= (((this as any).preMatch as any).index as any) && (((o = (((this as any).preMatch as any).matches as any)[(s as any) - (((this as any).preMatch as any).index as any)]) as any).parent as any) == ((this as any).top as any) && ((o as any).matchesNode as any)(e, t, r)) i = ((((this as any).top as any).children as any).indexOf as any)(o, (this as any).index);else for (let l: any = (this as any).index, a: any = ((Math as any).min as any)((((this as any).top as any).children as any).length, (l as any) + (5 as any)); (l as any) < (a as any); l++) {
      let c: any = (((this as any).top as any).children as any)[l];
      if (((c as any).matchesNode as any)(e, t, r) && !((((this as any).preMatch as any).matched as any).has as any)(c)) {
        i = l;
        break;
      }
    }
    return (i as any) < (0 as any) ? !1 : (((this as any).destroyBetween as any)((this as any).index, i), (this as any).index++, !0);
  }
  updateNodeAt(e: any, t: any, r: any, s: any, i: any): any {
    let o: any = (((this as any).top as any).children as any)[s];
    return ((o as any).dirty as any) == (Te as any) && ((o as any).dom as any) == ((o as any).contentDOM as any) && ((o as any).dirty = it), ((o as any).update as any)(e, t, r, i) ? (((this as any).destroyBetween as any)((this as any).index, s), (this as any).index++, !0) : !1;
  }
  findIndexWithChild(e: any): any {
    for (;;) {
      let t: any = (e as any).parentNode;
      if (!t) return -1;
      if ((t as any) == (((this as any).top as any).contentDOM as any)) {
        let r: any = (e as any).pmViewDesc;
        if (r) {
          for (let s: any = (this as any).index; (s as any) < ((((this as any).top as any).children as any).length as any); s++) if (((((this as any).top as any).children as any)[s] as any) == (r as any)) return s;
        }
        return -1;
      }
      e = t;
    }
  }
  updateNextNode(e: any, t: any, r: any, s: any, i: any, o: any): any {
    for (let l: any = (this as any).index; (l as any) < ((((this as any).top as any).children as any).length as any); l++) {
      let a: any = (((this as any).top as any).children as any)[l];
      if (a instanceof Ye) {
        let c: any = ((((this as any).preMatch as any).matched as any).get as any)(a);
        if ((c as any) != (null as any) && (c as any) != (i as any)) return !1;
        let u: any = (a as any).dom,
          d: any,
          f: any = ((this as any).isLocked as any)(u) && !((e as any).isText && (a as any).node && ((a as any).node as any).isText && (((a as any).nodeDOM as any).nodeValue as any) == ((e as any).text as any) && ((a as any).dirty as any) != (Te as any) && (jn as any)(t, (a as any).outerDeco));
        if (!f && ((a as any).update as any)(e, t, r, s)) return ((this as any).destroyBetween as any)((this as any).index, l), ((a as any).dom as any) != (u as any) && ((this as any).changed = !0), (this as any).index++, !0;
        if (!f && (d = ((this as any).recreateWrapper as any)(a, e, t, r, s, o))) return ((this as any).destroyBetween as any)((this as any).index, l), (((this as any).top as any).children as any)[(this as any).index] = d, (d as any).contentDOM && ((d as any).dirty = it, ((d as any).updateChildren as any)(s, (o as any) + (1 as any)), (d as any).dirty = ke), (this as any).changed = !0, (this as any).index++, !0;
        break;
      }
    }
    return !1;
  }
  recreateWrapper(e: any, t: any, r: any, s: any, i: any, o: any): any {
    if ((e as any).dirty || (t as any).isAtom || !((e as any).children as any).length || !((((e as any).node as any).content as any).eq as any)((t as any).content) || !(jn as any)(r, (e as any).outerDeco) || !((s as any).eq as any)((e as any).innerDeco)) return null;
    let l: any = ((Ye as any).create as any)((this as any).top, t, r, s, i, o);
    if ((l as any).contentDOM) {
      (l as any).children = (e as any).children, (e as any).children = [];
      for (let a of (l as any).children) (a as any).parent = l;
    }
    return ((e as any).destroy as any)(), l;
  }
  addNode(e: any, t: any, r: any, s: any, i: any): any {
    let o: any = ((Ye as any).create as any)((this as any).top, e, t, r, s, i);
    (o as any).contentDOM && ((o as any).updateChildren as any)(s, (i as any) + (1 as any)), ((((this as any).top as any).children as any).splice as any)((this as any).index++, 0, o), (this as any).changed = !0;
  }
  placeWidget(e: any, t: any, r: any): any {
    let s: any = ((this as any).index as any) < ((((this as any).top as any).children as any).length as any) ? (((this as any).top as any).children as any)[(this as any).index] : null;
    if (s && ((s as any).matchesWidget as any)(e) && ((e as any) == ((s as any).widget as any) || !((((s as any).widget as any).type as any).toDOM as any).parentNode)) (this as any).index++;else {
      let i: any = new (ca as any)((this as any).top, e, t, r);
      ((((this as any).top as any).children as any).splice as any)((this as any).index++, 0, i), (this as any).changed = !0;
    }
  }
  addTextblockHacks(): any {
    let e: any = (((this as any).top as any).children as any)[((this as any).index as any) - (1 as any)],
      t: any = (this as any).top;
    for (; e instanceof gt;) t = e, e = ((t as any).children as any)[(((t as any).children as any).length as any) - (1 as any)];
    (!e || !(e instanceof Or) || ((/\n$/ as any).test as any)(((e as any).node as any).text) || ((this as any).view as any).requiresGeckoHackNode && ((/\s$/ as any).test as any)(((e as any).node as any).text)) && ((ee || U) && e && (((e as any).dom as any).contentEditable as any) == ("false" as any) && ((this as any).addHackNode as any)("IMG", t), ((this as any).addHackNode as any)("BR", (this as any).top));
  }
  addHackNode(e: any, t: any): any {
    if ((t as any) == ((this as any).top as any) && ((this as any).index as any) < (((t as any).children as any).length as any) && ((((t as any).children as any)[(this as any).index] as any).matchesHack as any)(e)) (this as any).index++;else {
      let r: any = ((document as any).createElement as any)(e);
      (e as any) == ("IMG" as any) && ((r as any).className = "ProseMirror-separator", (r as any).alt = ""), (e as any) == ("BR" as any) && ((r as any).className = "ProseMirror-trailingBreak");
      let s: any = new (ua as any)((this as any).top, [], r, null);
      (t as any) != ((this as any).top as any) ? (((t as any).children as any).push as any)(s) : (((t as any).children as any).splice as any)((this as any).index++, 0, s), (this as any).changed = !0;
    }
  }
  isLocked(e: any): any {
    return (this as any).lock && ((e as any) == ((this as any).lock as any) || ((e as any).nodeType as any) == (1 as any) && ((e as any).contains as any)(((this as any).lock as any).parentNode));
  }
}
function Id(this: any, n: any, e: any): any {
  let t: any = e,
    r: any = ((t as any).children as any).length,
    s: any = (n as any).childCount,
    i: any = new (Map as any)(),
    o: any = [];
  e: for (; (s as any) > (0 as any);) {
    let l: any;
    for (;;) if (r) {
      let c: any = ((t as any).children as any)[(r as any) - (1 as any)];
      if (c instanceof gt) t = c, r = ((c as any).children as any).length;else {
        l = c, r--;
        break;
      }
    } else {
      if ((t as any) == (e as any)) break e;
      r = ((((t as any).parent as any).children as any).indexOf as any)(t), t = (t as any).parent;
    }
    let a: any = (l as any).node;
    if (a) {
      if ((a as any) != (((n as any).child as any)((s as any) - (1 as any)) as any)) break;
      --s, ((i as any).set as any)(l, s), ((o as any).push as any)(l);
    }
  }
  return {
    index: s,
    matched: i,
    matches: ((o as any).reverse as any)()
  };
}
function Rd(this: any, n: any, e: any): any {
  return (((n as any).type as any).side as any) - (((e as any).type as any).side as any);
}
function Pd(this: any, n: any, e: any, t: any, r: any): any {
  let s: any = ((e as any).locals as any)(n),
    i: any = 0;
  if (((s as any).length as any) == (0 as any)) {
    for (let c: any = 0; (c as any) < ((n as any).childCount as any); c++) {
      let u: any = ((n as any).child as any)(c);
      (r as any)(u, s, ((e as any).forChild as any)(i, u), c), i += (u as any).nodeSize;
    }
    return;
  }
  let o: any = 0,
    l: any = [],
    a: any = null;
  for (let c: any = 0;;) {
    let u: any, d: any;
    for (; (o as any) < ((s as any).length as any) && (((s as any)[o] as any).to as any) == (i as any);) {
      let g: any = (s as any)[o++];
      (g as any).widget && (u ? (((d || (d = [u])) as any).push as any)(g) : u = g);
    }
    if (u) if (d) {
      ((d as any).sort as any)(Rd);
      for (let g: any = 0; (g as any) < ((d as any).length as any); g++) (t as any)((d as any)[g], c, !!a);
    } else (t as any)(u, c, !!a);
    let f: any, h: any;
    if (a) h = -1, f = a, a = null;else if ((c as any) < ((n as any).childCount as any)) h = c, f = ((n as any).child as any)(c++);else break;
    for (let g: any = 0; (g as any) < ((l as any).length as any); g++) (((l as any)[g] as any).to as any) <= (i as any) && ((l as any).splice as any)(g--, 1);
    for (; (o as any) < ((s as any).length as any) && (((s as any)[o] as any).from as any) <= (i as any) && (((s as any)[o] as any).to as any) > (i as any);) ((l as any).push as any)((s as any)[o++]);
    let p: any = (i as any) + ((f as any).nodeSize as any);
    if ((f as any).isText) {
      let g: any = p;
      (o as any) < ((s as any).length as any) && (((s as any)[o] as any).from as any) < (g as any) && (g = ((s as any)[o] as any).from);
      for (let y: any = 0; (y as any) < ((l as any).length as any); y++) (((l as any)[y] as any).to as any) < (g as any) && (g = ((l as any)[y] as any).to);
      (g as any) < (p as any) && (a = ((f as any).cut as any)((g as any) - (i as any)), f = ((f as any).cut as any)(0, (g as any) - (i as any)), p = g, h = -1);
    } else for (; (o as any) < ((s as any).length as any) && (((s as any)[o] as any).to as any) < (p as any);) o++;
    let m: any = (f as any).isInline && !(f as any).isLeaf ? ((l as any).filter as any)((g: any): any => !(g as any).inline) : ((l as any).slice as any)();
    (r as any)(f, m, ((e as any).forChild as any)(i, f), h), i = p;
  }
}
function Ld(this: any, n: any): any {
  if (((n as any).nodeName as any) == ("UL" as any) || ((n as any).nodeName as any) == ("OL" as any)) {
    let e: any = ((n as any).style as any).cssText;
    ((n as any).style as any).cssText = (e as any) + ("; list-style: square !important" as any), (((window as any).getComputedStyle as any)(n) as any).listStyle, ((n as any).style as any).cssText = e;
  }
}
function zd(this: any, n: any, e: any, t: any, r: any): any {
  for (let s: any = 0, i: any = 0; (s as any) < ((n as any).childCount as any) && (i as any) <= (r as any);) {
    let o: any = ((n as any).child as any)(s++),
      l: any = i;
    if (i += (o as any).nodeSize, !(o as any).isText) continue;
    let a: any = (o as any).text;
    for (; (s as any) < ((n as any).childCount as any);) {
      let c: any = ((n as any).child as any)(s++);
      if (i += (c as any).nodeSize, !(c as any).isText) break;
      a += (c as any).text;
    }
    if ((i as any) >= (t as any)) {
      if ((i as any) >= (r as any) && (((a as any).slice as any)(((r as any) - ((e as any).length as any) as any) - (l as any), (r as any) - (l as any)) as any) == (e as any)) return (r as any) - ((e as any).length as any);
      let c: any = (l as any) < (r as any) ? ((a as any).lastIndexOf as any)(e, ((r as any) - (l as any) as any) - (1 as any)) : -1;
      if ((c as any) >= (0 as any) && (((c as any) + ((e as any).length as any) as any) + (l as any) as any) >= (t as any)) return (l as any) + (c as any);
      if ((t as any) == (r as any) && ((a as any).length as any) >= (((r as any) + ((e as any).length as any) as any) - (l as any) as any) && (((a as any).slice as any)((r as any) - (l as any), ((r as any) - (l as any) as any) + ((e as any).length as any)) as any) == (e as any)) return r;
    }
  }
  return -1;
}
function Es(this: any, n: any, e: any, t: any, r: any, s: any): any {
  let i: any = [];
  for (let o: any = 0, l: any = 0; (o as any) < ((n as any).length as any); o++) {
    let a: any = (n as any)[o],
      c: any = l,
      u: any = l += (a as any).size;
    (c as any) >= (t as any) || (u as any) <= (e as any) ? ((i as any).push as any)(a) : ((c as any) < (e as any) && ((i as any).push as any)(((a as any).slice as any)(0, (e as any) - (c as any), r)), s && (((i as any).push as any)(s), s = void 0), (u as any) > (t as any) && ((i as any).push as any)(((a as any).slice as any)((t as any) - (c as any), (a as any).size, r)));
  }
  return i;
}
function ei(this: any, n: any, e: any = null): any {
  let t: any = ((n as any).domSelectionRange as any)(),
    r: any = ((n as any).state as any).doc;
  if (!(t as any).focusNode) return null;
  let s: any = (((n as any).docView as any).nearestDesc as any)((t as any).focusNode),
    i: any = s && ((s as any).size as any) == (0 as any),
    o: any = (((n as any).docView as any).posFromDOM as any)((t as any).focusNode, (t as any).focusOffset, 1);
  if ((o as any) < (0 as any)) return null;
  let l: any = ((r as any).resolve as any)(o),
    a: any,
    c: any;
  if ((Nr as any)(t)) {
    for (a = o; s && !(s as any).node;) s = (s as any).parent;
    let d: any = (s as any).node;
    if (s && (d as any).isAtom && ((v as any).isSelectable as any)(d) && (s as any).parent && !((d as any).isInline && (cd as any)((t as any).focusNode, (t as any).focusOffset, (s as any).dom))) {
      let f: any = (s as any).posBefore;
      c = new (v as any)((o as any) == (f as any) ? l : ((r as any).resolve as any)(f));
    }
  } else {
    if (t instanceof ((((n as any).dom as any).ownerDocument as any).defaultView as any).Selection && ((t as any).rangeCount as any) > (1 as any)) {
      let d: any = o,
        f: any = o;
      for (let h: any = 0; (h as any) < ((t as any).rangeCount as any); h++) {
        let p: any = ((t as any).getRangeAt as any)(h);
        d = ((Math as any).min as any)(d, (((n as any).docView as any).posFromDOM as any)((p as any).startContainer, (p as any).startOffset, 1)), f = ((Math as any).max as any)(f, (((n as any).docView as any).posFromDOM as any)((p as any).endContainer, (p as any).endOffset, -1));
      }
      if ((d as any) < (0 as any)) return null;
      [a, o] = (f as any) == ((((n as any).state as any).selection as any).anchor as any) ? [f, d] : [d, f], l = ((r as any).resolve as any)(o);
    } else a = (((n as any).docView as any).posFromDOM as any)((t as any).anchorNode, (t as any).anchorOffset, 1);
    if ((a as any) < (0 as any)) return null;
  }
  let u: any = ((r as any).resolve as any)(a);
  if (!c) {
    let d: any = (e as any) == ("pointer" as any) || ((((n as any).state as any).selection as any).head as any) < ((l as any).pos as any) && !i ? 1 : -1;
    c = (ti as any)(n, u, l, d);
  }
  return c;
}
function pa(this: any, n: any): any {
  return (n as any).editable ? ((n as any).hasFocus as any)() : (ga as any)(n) && (document as any).activeElement && (((document as any).activeElement as any).contains as any)((n as any).dom);
}
function ze(this: any, n: any, e: any = !1): any {
  let t: any = ((n as any).state as any).selection;
  if ((ma as any)(n, t), !!(pa as any)(n)) {
    if (!e && ((n as any).input as any).mouseDown && (((n as any).input as any).mouseDown as any).allowDefault && U) {
      let r: any = ((n as any).domSelectionRange as any)(),
        s: any = ((n as any).domObserver as any).currentSelection;
      if ((r as any).anchorNode && (s as any).anchorNode && (mt as any)((r as any).anchorNode, (r as any).anchorOffset, (s as any).anchorNode, (s as any).anchorOffset)) {
        (((n as any).input as any).mouseDown as any).delayedSelectionSync = !0, (((n as any).domObserver as any).setCurSelection as any)();
        return;
      }
    }
    if ((((n as any).domObserver as any).disconnectSelection as any)(), (n as any).cursorWrapper) ($d as any)(n);else {
      let {
          anchor: r,
          head: s
        }: any = t,
        i: any,
        o: any;
      lo && !(t instanceof N) && ((((t as any).$from as any).parent as any).inlineContent || (i = (ao as any)(n, (t as any).from)), !(t as any).empty && !(((t as any).$from as any).parent as any).inlineContent && (o = (ao as any)(n, (t as any).to))), (((n as any).docView as any).setSelection as any)(r, s, n, e), lo && (i && (co as any)(i), o && (co as any)(o)), (t as any).visible ? ((((n as any).dom as any).classList as any).remove as any)("ProseMirror-hideselection") : (((((n as any).dom as any).classList as any).add as any)("ProseMirror-hideselection"), "onselectionchange" in document && (Bd as any)(n));
    }
    (((n as any).domObserver as any).setCurSelection as any)(), (((n as any).domObserver as any).connectSelection as any)();
  }
}
const lo: any = ee || U && (ta as any) < (63 as any);
function ao(this: any, n: any, e: any): any {
  let {
      node: t,
      offset: r
    }: any = (((n as any).docView as any).domFromPos as any)(e, 0),
    s: any = (r as any) < (((t as any).childNodes as any).length as any) ? ((t as any).childNodes as any)[r] : null,
    i: any = r ? ((t as any).childNodes as any)[(r as any) - (1 as any)] : null;
  if (ee && s && ((s as any).contentEditable as any) == ("false" as any)) return (Yr as any)(s);
  if ((!s || ((s as any).contentEditable as any) == ("false" as any)) && (!i || ((i as any).contentEditable as any) == ("false" as any))) {
    if (s) return (Yr as any)(s);
    if (i) return (Yr as any)(i);
  }
}
function Yr(this: any, n: any): any {
  return (n as any).contentEditable = "true", ee && (n as any).draggable && ((n as any).draggable = !1, (n as any).wasDraggable = !0), n;
}
function co(this: any, n: any): any {
  (n as any).contentEditable = "false", (n as any).wasDraggable && ((n as any).draggable = !0, (n as any).wasDraggable = null);
}
function Bd(this: any, n: any): any {
  let e: any = ((n as any).dom as any).ownerDocument;
  ((e as any).removeEventListener as any)("selectionchange", ((n as any).input as any).hideSelectionGuard);
  let t: any = ((n as any).domSelectionRange as any)(),
    r: any = (t as any).anchorNode,
    s: any = (t as any).anchorOffset;
  ((e as any).addEventListener as any)("selectionchange", ((n as any).input as any).hideSelectionGuard = (): any => {
    (((t as any).anchorNode as any) != (r as any) || ((t as any).anchorOffset as any) != (s as any)) && (((e as any).removeEventListener as any)("selectionchange", ((n as any).input as any).hideSelectionGuard), (setTimeout as any)((): any => {
      (!(pa as any)(n) || (((n as any).state as any).selection as any).visible) && ((((n as any).dom as any).classList as any).remove as any)("ProseMirror-hideselection");
    }, 20));
  });
}
function $d(this: any, n: any): any {
  let e: any = ((n as any).domSelection as any)();
  if (!e) return;
  let t: any = ((n as any).cursorWrapper as any).dom,
    r: any = ((t as any).nodeName as any) == ("IMG" as any);
  r ? ((e as any).collapse as any)((t as any).parentNode, ((X as any)(t) as any) + (1 as any)) : ((e as any).collapse as any)(t, 0), !r && !(((n as any).state as any).selection as any).visible && le && (Ge as any) <= (11 as any) && ((t as any).disabled = !0, (t as any).disabled = !1);
}
function ma(this: any, n: any, e: any): any {
  if (e instanceof v) {
    let t: any = (((n as any).docView as any).descAt as any)((e as any).from);
    (t as any) != ((n as any).lastSelectedViewDesc as any) && ((uo as any)(n), t && ((t as any).selectNode as any)(), (n as any).lastSelectedViewDesc = t);
  } else (uo as any)(n);
}
function uo(this: any, n: any): any {
  (n as any).lastSelectedViewDesc && (((n as any).lastSelectedViewDesc as any).parent && (((n as any).lastSelectedViewDesc as any).deselectNode as any)(), (n as any).lastSelectedViewDesc = void 0);
}
function ti(this: any, n: any, e: any, t: any, r: any): any {
  return ((n as any).someProp as any)("createSelectionBetween", (s: any): any => (s as any)(n, e, t)) || ((N as any).between as any)(e, t, r);
}
function fo(this: any, n: any): any {
  return (n as any).editable && !((n as any).hasFocus as any)() ? !1 : (ga as any)(n);
}
function ga(this: any, n: any): any {
  let e: any = ((n as any).domSelectionRange as any)();
  if (!(e as any).anchorNode) return !1;
  try {
    return (((n as any).dom as any).contains as any)((((e as any).anchorNode as any).nodeType as any) == (3 as any) ? ((e as any).anchorNode as any).parentNode : (e as any).anchorNode) && ((n as any).editable || (((n as any).dom as any).contains as any)((((e as any).focusNode as any).nodeType as any) == (3 as any) ? ((e as any).focusNode as any).parentNode : (e as any).focusNode));
  } catch {
    return !1;
  }
}
function Fd(this: any, n: any): any {
  let e: any = (((n as any).docView as any).domFromPos as any)((((n as any).state as any).selection as any).anchor, 0),
    t: any = ((n as any).domSelectionRange as any)();
  return (mt as any)((e as any).node, (e as any).offset, (t as any).anchorNode, (t as any).anchorOffset);
}
function vs(this: any, n: any, e: any): any {
  let {
      $anchor: t,
      $head: r
    }: any = (n as any).selection,
    s: any = (e as any) > (0 as any) ? ((t as any).max as any)(r) : ((t as any).min as any)(r),
    i: any = ((s as any).parent as any).inlineContent ? (s as any).depth ? (((n as any).doc as any).resolve as any)((e as any) > (0 as any) ? ((s as any).after as any)() : ((s as any).before as any)()) : null : s;
  return i && ((O as any).findFrom as any)(i, e);
}
function Ve(this: any, n: any, e: any): any {
  return ((n as any).dispatch as any)(((((((n as any).state as any).tr as any).setSelection as any)(e) as any).scrollIntoView as any)()), !0;
}
function ho(this: any, n: any, e: any, t: any): any {
  let r: any = ((n as any).state as any).selection;
  if (r instanceof N) {
    if ((((t as any).indexOf as any)("s") as any) > (-1 as any)) {
      let {
          $head: s
        }: any = r,
        i: any = (s as any).textOffset ? null : (e as any) < (0 as any) ? (s as any).nodeBefore : (s as any).nodeAfter;
      if (!i || (i as any).isText || !(i as any).isLeaf) return !1;
      let o: any = ((((n as any).state as any).doc as any).resolve as any)(((s as any).pos as any) + (((i as any).nodeSize as any) * (((e as any) < (0 as any) ? -1 : 1) as any) as any));
      return (Ve as any)(n, new (N as any)((r as any).$anchor, o));
    } else if ((r as any).empty) {
      if (((n as any).endOfTextblock as any)((e as any) > (0 as any) ? "forward" : "backward")) {
        let s: any = (vs as any)((n as any).state, e);
        return s && s instanceof v ? (Ve as any)(n, s) : !1;
      } else if (!(me && (((t as any).indexOf as any)("m") as any) > (-1 as any))) {
        let s: any = (r as any).$head,
          i: any = (s as any).textOffset ? null : (e as any) < (0 as any) ? (s as any).nodeBefore : (s as any).nodeAfter,
          o: any;
        if (!i || (i as any).isText) return !1;
        let l: any = (e as any) < (0 as any) ? ((s as any).pos as any) - ((i as any).nodeSize as any) : (s as any).pos;
        return (i as any).isAtom || (o = (((n as any).docView as any).descAt as any)(l)) && !(o as any).contentDOM ? ((v as any).isSelectable as any)(i) ? (Ve as any)(n, new (v as any)((e as any) < (0 as any) ? ((((n as any).state as any).doc as any).resolve as any)(((s as any).pos as any) - ((i as any).nodeSize as any)) : s)) : kn ? (Ve as any)(n, new (N as any)(((((n as any).state as any).doc as any).resolve as any)((e as any) < (0 as any) ? l : (l as any) + ((i as any).nodeSize as any)))) : !1 : !1;
      }
    } else return !1;
  } else {
    if (r instanceof v && ((r as any).node as any).isInline) return (Ve as any)(n, new (N as any)((e as any) > (0 as any) ? (r as any).$to : (r as any).$from));
    {
      let s: any = (vs as any)((n as any).state, e);
      return s ? (Ve as any)(n, s) : !1;
    }
  }
}
function _n(this: any, n: any): any {
  return ((n as any).nodeType as any) == (3 as any) ? ((n as any).nodeValue as any).length : ((n as any).childNodes as any).length;
}
function Zt(this: any, n: any, e: any): any {
  let t: any = (n as any).pmViewDesc;
  return t && ((t as any).size as any) == (0 as any) && ((e as any) < (0 as any) || (n as any).nextSibling || ((n as any).nodeName as any) != ("BR" as any));
}
function Et(this: any, n: any, e: any): any {
  return (e as any) < (0 as any) ? (Hd as any)(n) : (Vd as any)(n);
}
function Hd(this: any, n: any): any {
  let e: any = ((n as any).domSelectionRange as any)(),
    t: any = (e as any).focusNode,
    r: any = (e as any).focusOffset;
  if (!t) return;
  let s: any,
    i: any,
    o: any = !1;
  for (ye && ((t as any).nodeType as any) == (1 as any) && (r as any) < ((_n as any)(t) as any) && (Zt as any)(((t as any).childNodes as any)[r], -1) && (o = !0);;) if ((r as any) > (0 as any)) {
    if (((t as any).nodeType as any) != (1 as any)) break;
    {
      let l: any = ((t as any).childNodes as any)[(r as any) - (1 as any)];
      if ((Zt as any)(l, -1)) s = t, i = --r;else if (((l as any).nodeType as any) == (3 as any)) t = l, r = ((t as any).nodeValue as any).length;else break;
    }
  } else {
    if ((ya as any)(t)) break;
    {
      let l: any = (t as any).previousSibling;
      for (; l && (Zt as any)(l, -1);) s = (t as any).parentNode, i = (X as any)(l), l = (l as any).previousSibling;
      if (l) t = l, r = (_n as any)(t);else {
        if (t = (t as any).parentNode, (t as any) == ((n as any).dom as any)) break;
        r = 0;
      }
    }
  }
  o ? (Ts as any)(n, t, r) : s && (Ts as any)(n, s, i);
}
function Vd(this: any, n: any): any {
  let e: any = ((n as any).domSelectionRange as any)(),
    t: any = (e as any).focusNode,
    r: any = (e as any).focusOffset;
  if (!t) return;
  let s: any = (_n as any)(t),
    i: any,
    o: any;
  for (;;) if ((r as any) < (s as any)) {
    if (((t as any).nodeType as any) != (1 as any)) break;
    let l: any = ((t as any).childNodes as any)[r];
    if ((Zt as any)(l, 1)) i = t, o = ++r;else break;
  } else {
    if ((ya as any)(t)) break;
    {
      let l: any = (t as any).nextSibling;
      for (; l && (Zt as any)(l, 1);) i = (l as any).parentNode, o = ((X as any)(l) as any) + (1 as any), l = (l as any).nextSibling;
      if (l) t = l, r = 0, s = (_n as any)(t);else {
        if (t = (t as any).parentNode, (t as any) == ((n as any).dom as any)) break;
        r = s = 0;
      }
    }
  }
  i && (Ts as any)(n, i, o);
}
function ya(this: any, n: any): any {
  let e: any = (n as any).pmViewDesc;
  return e && (e as any).node && ((e as any).node as any).isBlock;
}
function jd(this: any, n: any, e: any): any {
  for (; n && (e as any) == (((n as any).childNodes as any).length as any) && !(yn as any)(n);) e = ((X as any)(n) as any) + (1 as any), n = (n as any).parentNode;
  for (; n && (e as any) < (((n as any).childNodes as any).length as any);) {
    let t: any = ((n as any).childNodes as any)[e];
    if (((t as any).nodeType as any) == (3 as any)) return t;
    if (((t as any).nodeType as any) == (1 as any) && ((t as any).contentEditable as any) == ("false" as any)) break;
    n = t, e = 0;
  }
}
function _d(this: any, n: any, e: any): any {
  for (; n && !e && !(yn as any)(n);) e = (X as any)(n), n = (n as any).parentNode;
  for (; n && e;) {
    let t: any = ((n as any).childNodes as any)[(e as any) - (1 as any)];
    if (((t as any).nodeType as any) == (3 as any)) return t;
    if (((t as any).nodeType as any) == (1 as any) && ((t as any).contentEditable as any) == ("false" as any)) break;
    n = t, e = ((n as any).childNodes as any).length;
  }
}
function Ts(this: any, n: any, e: any, t: any): any {
  if (((e as any).nodeType as any) != (3 as any)) {
    let i: any, o: any;
    (o = (jd as any)(e, t)) ? (e = o, t = 0) : (i = (_d as any)(e, t)) && (e = i, t = ((i as any).nodeValue as any).length);
  }
  let r: any = ((n as any).domSelection as any)();
  if (!r) return;
  if ((Nr as any)(r)) {
    let i: any = ((document as any).createRange as any)();
    ((i as any).setEnd as any)(e, t), ((i as any).setStart as any)(e, t), ((r as any).removeAllRanges as any)(), ((r as any).addRange as any)(i);
  } else (r as any).extend && ((r as any).extend as any)(e, t);
  (((n as any).domObserver as any).setCurSelection as any)();
  let {
    state: s
  }: any = n;
  (setTimeout as any)((): any => {
    ((n as any).state as any) == (s as any) && (ze as any)(n);
  }, 50);
}
function po(this: any, n: any, e: any): any {
  let t: any = ((((n as any).state as any).doc as any).resolve as any)(e);
  if (!(U || na) && ((t as any).parent as any).inlineContent) {
    let s: any = ((n as any).coordsAtPos as any)(e);
    if ((e as any) > (((t as any).start as any)() as any)) {
      let i: any = ((n as any).coordsAtPos as any)((e as any) - (1 as any)),
        o: any = (((i as any).top as any) + ((i as any).bottom as any) as any) / (2 as any);
      if ((o as any) > ((s as any).top as any) && (o as any) < ((s as any).bottom as any) && (((Math as any).abs as any)(((i as any).left as any) - ((s as any).left as any)) as any) > (1 as any)) return ((i as any).left as any) < ((s as any).left as any) ? "ltr" : "rtl";
    }
    if ((e as any) < (((t as any).end as any)() as any)) {
      let i: any = ((n as any).coordsAtPos as any)((e as any) + (1 as any)),
        o: any = (((i as any).top as any) + ((i as any).bottom as any) as any) / (2 as any);
      if ((o as any) > ((s as any).top as any) && (o as any) < ((s as any).bottom as any) && (((Math as any).abs as any)(((i as any).left as any) - ((s as any).left as any)) as any) > (1 as any)) return ((i as any).left as any) > ((s as any).left as any) ? "ltr" : "rtl";
    }
  }
  return (((getComputedStyle as any)((n as any).dom) as any).direction as any) == ("rtl" as any) ? "rtl" : "ltr";
}
function mo(this: any, n: any, e: any, t: any): any {
  let r: any = ((n as any).state as any).selection;
  if (r instanceof N && !(r as any).empty || (((t as any).indexOf as any)("s") as any) > (-1 as any) || me && (((t as any).indexOf as any)("m") as any) > (-1 as any)) return !1;
  let {
    $from: s,
    $to: i
  }: any = r;
  if (!((s as any).parent as any).inlineContent || ((n as any).endOfTextblock as any)((e as any) < (0 as any) ? "up" : "down")) {
    let o: any = (vs as any)((n as any).state, e);
    if (o && o instanceof v) return (Ve as any)(n, o);
  }
  if (!((s as any).parent as any).inlineContent) {
    let o: any = (e as any) < (0 as any) ? s : i,
      l: any = r instanceof ue ? ((O as any).near as any)(o, e) : ((O as any).findFrom as any)(o, e);
    return l ? (Ve as any)(n, l) : !1;
  }
  return !1;
}
function go(this: any, n: any, e: any): any {
  if (!(((n as any).state as any).selection instanceof N)) return !0;
  let {
    $head: t,
    $anchor: r,
    empty: s
  }: any = ((n as any).state as any).selection;
  if (!((t as any).sameParent as any)(r)) return !0;
  if (!s) return !1;
  if (((n as any).endOfTextblock as any)((e as any) > (0 as any) ? "forward" : "backward")) return !0;
  let i: any = !(t as any).textOffset && ((e as any) < (0 as any) ? (t as any).nodeBefore : (t as any).nodeAfter);
  if (i && !(i as any).isText) {
    let o: any = ((n as any).state as any).tr;
    return (e as any) < (0 as any) ? ((o as any).delete as any)(((t as any).pos as any) - ((i as any).nodeSize as any), (t as any).pos) : ((o as any).delete as any)((t as any).pos, ((t as any).pos as any) + ((i as any).nodeSize as any)), ((n as any).dispatch as any)(o), !0;
  }
  return !1;
}
function yo(this: any, n: any, e: any, t: any): any {
  (((n as any).domObserver as any).stop as any)(), (e as any).contentEditable = t, (((n as any).domObserver as any).start as any)();
}
function Wd(this: any, n: any): any {
  if (!ee || (((((n as any).state as any).selection as any).$head as any).parentOffset as any) > (0 as any)) return !1;
  let {
    focusNode: e,
    focusOffset: t
  }: any = ((n as any).domSelectionRange as any)();
  if (e && ((e as any).nodeType as any) == (1 as any) && (t as any) == (0 as any) && (e as any).firstChild && (((e as any).firstChild as any).contentEditable as any) == ("false" as any)) {
    let r: any = (e as any).firstChild;
    (yo as any)(n, r, "true"), (setTimeout as any)((): any => (yo as any)(n, r, "false"), 20);
  }
  return !1;
}
function qd(this: any, n: any): any {
  let e: any = "";
  return (n as any).ctrlKey && (e += "c"), (n as any).metaKey && (e += "m"), (n as any).altKey && (e += "a"), (n as any).shiftKey && (e += "s"), e;
}
function Kd(this: any, n: any, e: any): any {
  let t: any = (e as any).keyCode,
    r: any = (qd as any)(e);
  if ((t as any) == (8 as any) || me && (t as any) == (72 as any) && (r as any) == ("c" as any)) return (go as any)(n, -1) || (Et as any)(n, -1);
  if ((t as any) == (46 as any) && !(e as any).shiftKey || me && (t as any) == (68 as any) && (r as any) == ("c" as any)) return (go as any)(n, 1) || (Et as any)(n, 1);
  if ((t as any) == (13 as any) || (t as any) == (27 as any)) return !0;
  if ((t as any) == (37 as any) || me && (t as any) == (66 as any) && (r as any) == ("c" as any)) {
    let s: any = (t as any) == (37 as any) ? ((po as any)(n, (((n as any).state as any).selection as any).from) as any) == ("ltr" as any) ? -1 : 1 : -1;
    return (ho as any)(n, s, r) || (Et as any)(n, s);
  } else if ((t as any) == (39 as any) || me && (t as any) == (70 as any) && (r as any) == ("c" as any)) {
    let s: any = (t as any) == (39 as any) ? ((po as any)(n, (((n as any).state as any).selection as any).from) as any) == ("ltr" as any) ? 1 : -1 : 1;
    return (ho as any)(n, s, r) || (Et as any)(n, s);
  } else {
    if ((t as any) == (38 as any) || me && (t as any) == (80 as any) && (r as any) == ("c" as any)) return (mo as any)(n, -1, r) || (Et as any)(n, -1);
    if ((t as any) == (40 as any) || me && (t as any) == (78 as any) && (r as any) == ("c" as any)) return (Wd as any)(n) || (mo as any)(n, 1, r) || (Et as any)(n, 1);
    if ((r as any) == ((me ? "m" : "c") as any) && ((t as any) == (66 as any) || (t as any) == (73 as any) || (t as any) == (89 as any) || (t as any) == (90 as any))) return !0;
  }
  return !1;
}
function ni(this: any, n: any, e: any): any {
  ((n as any).someProp as any)("transformCopied", (h: any): any => {
    e = (h as any)(e, n);
  });
  let t: any = [],
    {
      content: r,
      openStart: s,
      openEnd: i
    }: any = e;
  for (; (s as any) > (1 as any) && (i as any) > (1 as any) && ((r as any).childCount as any) == (1 as any) && (((r as any).firstChild as any).childCount as any) == (1 as any);) {
    s--, i--;
    let h: any = (r as any).firstChild;
    ((t as any).push as any)(((h as any).type as any).name, ((h as any).attrs as any) != (((h as any).type as any).defaultAttrs as any) ? (h as any).attrs : null), r = (h as any).content;
  }
  let o: any = ((n as any).someProp as any)("clipboardSerializer") || ((kt as any).fromSchema as any)(((n as any).state as any).schema),
    l: any = (Ca as any)(),
    a: any = ((l as any).createElement as any)("div");
  ((a as any).appendChild as any)(((o as any).serializeFragment as any)(r, {
    document: l
  }));
  let c: any = (a as any).firstChild,
    u: any,
    d: any = 0;
  for (; c && ((c as any).nodeType as any) == (1 as any) && (u = (wa as any)[(((c as any).nodeName as any).toLowerCase as any)()]);) {
    for (let h: any = ((u as any).length as any) - (1 as any); (h as any) >= (0 as any); h--) {
      let p: any = ((l as any).createElement as any)((u as any)[h]);
      for (; (a as any).firstChild;) ((p as any).appendChild as any)((a as any).firstChild);
      ((a as any).appendChild as any)(p), d++;
    }
    c = (a as any).firstChild;
  }
  c && ((c as any).nodeType as any) == (1 as any) && ((c as any).setAttribute as any)("data-pm-slice", `${s} ${i}${d ? ` -${d}` : ""} ${((JSON as any).stringify as any)(t)}`);
  let f: any = ((n as any).someProp as any)("clipboardTextSerializer", (h: any): any => (h as any)(e, n)) || (((e as any).content as any).textBetween as any)(0, ((e as any).content as any).size, `

`);
  return {
    dom: a,
    text: f,
    slice: e
  };
}
function ka(this: any, n: any, e: any, t: any, r: any, s: any): any {
  let i: any = ((((s as any).parent as any).type as any).spec as any).code,
    o: any,
    l: any;
  if (!t && !e) return null;
  let a: any = !!e && (r || i || !t);
  if (a) {
    if (((n as any).someProp as any)("transformPastedText", (f: any): any => {
      e = (f as any)(e, i || r, n);
    }), i) return l = new (w as any)(((k as any).from as any)(((((n as any).state as any).schema as any).text as any)(((e as any).replace as any)(/\r\n?/g, `
`))), 0, 0), ((n as any).someProp as any)("transformPasted", (f: any): any => {
      l = (f as any)(l, n, !0);
    }), l;
    let d: any = ((n as any).someProp as any)("clipboardTextParser", (f: any): any => (f as any)(e, s, r, n));
    if (d) l = d;else {
      let f: any = ((s as any).marks as any)(),
        {
          schema: h
        }: any = (n as any).state,
        p: any = ((kt as any).fromSchema as any)(h);
      o = ((document as any).createElement as any)("div"), ((((e as any).split as any)(/(?:\r\n?|\n)+/) as any).forEach as any)((m: any): any => {
        let g: any = ((o as any).appendChild as any)(((document as any).createElement as any)("p"));
        m && ((g as any).appendChild as any)(((p as any).serializeNode as any)(((h as any).text as any)(m, f)));
      });
    }
  } else ((n as any).someProp as any)("transformPastedHTML", (d: any): any => {
    t = (d as any)(t, n);
  }), o = (Yd as any)(t), kn && (Xd as any)(o);
  let c: any = o && ((o as any).querySelector as any)("[data-pm-slice]"),
    u: any = c && ((/^(\d+) (\d+)(?: -(\d+))? (.*)/ as any).exec as any)(((c as any).getAttribute as any)("data-pm-slice") || "");
  if (u && (u as any)[3]) for (let d: any = +(u as any)[3]; (d as any) > (0 as any); d--) {
    let f: any = (o as any).firstChild;
    for (; f && ((f as any).nodeType as any) != (1 as any);) f = (f as any).nextSibling;
    if (!f) break;
    o = f;
  }
  if (l || (l = (((((n as any).someProp as any)("clipboardParser") || ((n as any).someProp as any)("domParser") || ((Le as any).fromSchema as any)(((n as any).state as any).schema)) as any).parseSlice as any)(o, {
    preserveWhitespace: !!(a || u),
    context: s,
    ruleFromNode(f: any): any {
      return ((f as any).nodeName as any) == ("BR" as any) && !(f as any).nextSibling && (f as any).parentNode && !((Ud as any).test as any)(((f as any).parentNode as any).nodeName) ? {
        ignore: !0
      } : null;
    }
  })), u) l = (Qd as any)((ko as any)(l, +(u as any)[1], +(u as any)[2]), (u as any)[4]);else if (l = ((w as any).maxOpen as any)((Jd as any)((l as any).content, s), !0), (l as any).openStart || (l as any).openEnd) {
    let d: any = 0,
      f: any = 0;
    for (let h: any = ((l as any).content as any).firstChild; (d as any) < ((l as any).openStart as any) && !(((h as any).type as any).spec as any).isolating; d++, h = (h as any).firstChild);
    for (let h: any = ((l as any).content as any).lastChild; (f as any) < ((l as any).openEnd as any) && !(((h as any).type as any).spec as any).isolating; f++, h = (h as any).lastChild);
    l = (ko as any)(l, d, f);
  }
  return ((n as any).someProp as any)("transformPasted", (d: any): any => {
    l = (d as any)(l, n, a);
  }), l;
}
const Ud: any = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function Jd(this: any, n: any, e: any): any {
  if (((n as any).childCount as any) < (2 as any)) return n;
  for (let t: any = (e as any).depth; (t as any) >= (0 as any); t--) {
    let s: any = ((((e as any).node as any)(t) as any).contentMatchAt as any)(((e as any).index as any)(t)),
      i: any,
      o: any = [];
    if (((n as any).forEach as any)((l: any): any => {
      if (!o) return;
      let a: any = ((s as any).findWrapping as any)((l as any).type),
        c: any;
      if (!a) return o = null;
      if (c = (o as any).length && (i as any).length && (xa as any)(a, i, l, (o as any)[((o as any).length as any) - (1 as any)], 0)) (o as any)[((o as any).length as any) - (1 as any)] = c;else {
        (o as any).length && ((o as any)[((o as any).length as any) - (1 as any)] = (Sa as any)((o as any)[((o as any).length as any) - (1 as any)], (i as any).length));
        let u: any = (ba as any)(l, a);
        ((o as any).push as any)(u), s = ((s as any).matchType as any)((u as any).type), i = a;
      }
    }), o) return ((k as any).from as any)(o);
  }
  return n;
}
function ba(this: any, n: any, e: any, t: any = 0): any {
  for (let r: any = ((e as any).length as any) - (1 as any); (r as any) >= (t as any); r--) n = (((e as any)[r] as any).create as any)(null, ((k as any).from as any)(n));
  return n;
}
function xa(this: any, n: any, e: any, t: any, r: any, s: any): any {
  if ((s as any) < ((n as any).length as any) && (s as any) < ((e as any).length as any) && ((n as any)[s] as any) == ((e as any)[s] as any)) {
    let i: any = (xa as any)(n, e, t, (r as any).lastChild, (s as any) + (1 as any));
    if (i) return ((r as any).copy as any)((((r as any).content as any).replaceChild as any)(((r as any).childCount as any) - (1 as any), i));
    if (((((r as any).contentMatchAt as any)((r as any).childCount) as any).matchType as any)((s as any) == (((n as any).length as any) - (1 as any) as any) ? (t as any).type : (n as any)[(s as any) + (1 as any)])) return ((r as any).copy as any)((((r as any).content as any).append as any)(((k as any).from as any)((ba as any)(t, n, (s as any) + (1 as any)))));
  }
}
function Sa(this: any, n: any, e: any): any {
  if ((e as any) == (0 as any)) return n;
  let t: any = (((n as any).content as any).replaceChild as any)(((n as any).childCount as any) - (1 as any), (Sa as any)((n as any).lastChild, (e as any) - (1 as any))),
    r: any = ((((n as any).contentMatchAt as any)((n as any).childCount) as any).fillBefore as any)((k as any).empty, !0);
  return ((n as any).copy as any)(((t as any).append as any)(r));
}
function As(this: any, n: any, e: any, t: any, r: any, s: any, i: any): any {
  let o: any = (e as any) < (0 as any) ? (n as any).firstChild : (n as any).lastChild,
    l: any = (o as any).content;
  return ((n as any).childCount as any) > (1 as any) && (i = 0), (s as any) < ((r as any) - (1 as any) as any) && (l = (As as any)(l, e, t, r, (s as any) + (1 as any), i)), (s as any) >= (t as any) && (l = (e as any) < (0 as any) ? ((((((o as any).contentMatchAt as any)(0) as any).fillBefore as any)(l, (i as any) <= (s as any)) as any).append as any)(l) : ((l as any).append as any)(((((o as any).contentMatchAt as any)((o as any).childCount) as any).fillBefore as any)((k as any).empty, !0))), ((n as any).replaceChild as any)((e as any) < (0 as any) ? 0 : ((n as any).childCount as any) - (1 as any), ((o as any).copy as any)(l));
}
function ko(this: any, n: any, e: any, t: any): any {
  return (e as any) < ((n as any).openStart as any) && (n = new (w as any)((As as any)((n as any).content, -1, e, (n as any).openStart, 0, (n as any).openEnd), e, (n as any).openEnd)), (t as any) < ((n as any).openEnd as any) && (n = new (w as any)((As as any)((n as any).content, 1, t, (n as any).openEnd, 0, 0), (n as any).openStart, t)), n;
}
const wa: any = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
let bo: any = null;
function Ca(this: any): any {
  return bo || (bo = (((document as any).implementation as any).createHTMLDocument as any)("title"));
}
let Xr: any = null;
function Gd(this: any, n: any): any {
  let e: any = (window as any).trustedTypes;
  return e ? (Xr || (Xr = (e as any).defaultPolicy || ((e as any).createPolicy as any)("ProseMirrorClipboard", {
    createHTML: (t: any): any => t
  })), ((Xr as any).createHTML as any)(n)) : n;
}
function Yd(this: any, n: any): any {
  let e: any = ((/^(\s*<meta [^>]*>)*/ as any).exec as any)(n);
  e && (n = ((n as any).slice as any)(((e as any)[0] as any).length));
  let t: any = (((Ca as any)() as any).createElement as any)("div"),
    r: any = ((/<([a-z][^>\s]+)/i as any).exec as any)(n),
    s: any;
  if ((s = r && (wa as any)[(((r as any)[1] as any).toLowerCase as any)()]) && (n = ((((((s as any).map as any)((i: any): any => (("<" as any) + (i as any) as any) + (">" as any)) as any).join as any)("") as any) + (n as any) as any) + (((((((s as any).map as any)((i: any): any => (("</" as any) + (i as any) as any) + (">" as any)) as any).reverse as any)() as any).join as any)("") as any)), (t as any).innerHTML = (Gd as any)(n), s) for (let i: any = 0; (i as any) < ((s as any).length as any); i++) t = ((t as any).querySelector as any)((s as any)[i]) || t;
  return t;
}
function Xd(this: any, n: any): any {
  let e: any = ((n as any).querySelectorAll as any)(U ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let t: any = 0; (t as any) < ((e as any).length as any); t++) {
    let r: any = (e as any)[t];
    (((r as any).childNodes as any).length as any) == (1 as any) && ((r as any).textContent as any) == (" " as any) && (r as any).parentNode && (((r as any).parentNode as any).replaceChild as any)((((n as any).ownerDocument as any).createTextNode as any)(" "), r);
  }
}
function Qd(this: any, n: any, e: any): any {
  if (!(n as any).size) return n;
  let t: any = ((((n as any).content as any).firstChild as any).type as any).schema,
    r: any;
  try {
    r = ((JSON as any).parse as any)(e);
  } catch {
    return n;
  }
  let {
    content: s,
    openStart: i,
    openEnd: o
  }: any = n;
  for (let l: any = ((r as any).length as any) - (2 as any); (l as any) >= (0 as any); l -= 2) {
    let a: any = ((t as any).nodes as any)[(r as any)[l]];
    if (!a || ((a as any).hasRequiredAttrs as any)()) break;
    s = ((k as any).from as any)(((a as any).create as any)((r as any)[(l as any) + (1 as any)], s)), i++, o++;
  }
  return new (w as any)(s, i, o);
}
const re: any = {},
  se: any = {},
  Zd: any = {
    touchstart: !0,
    touchmove: !0
  };
class ef {
  declare hideSelectionGuard: any;
  declare eventHandlers: any;
  declare domChangeCount: any;
  declare compositionPendingChanges: any;
  declare compositionID: any;
  declare compositionEndedAt: any;
  declare compositionNodes: any;
  declare composingTimeout: any;
  declare compositionNode: any;
  declare composing: any;
  declare lastChromeDelete: any;
  declare lastTouch: any;
  declare lastFocus: any;
  declare lastIOSEnterFallbackTimeout: any;
  declare lastIOSEnter: any;
  declare lastSelectionTime: any;
  declare lastSelectionOrigin: any;
  declare lastClick: any;
  declare lastKeyCodeTime: any;
  declare lastKeyCode: any;
  declare mouseDown: any;
  declare shiftKey: any;
  [key: string]: any;
  constructor() {
    (this as any).shiftKey = !1, (this as any).mouseDown = null, (this as any).lastKeyCode = null, (this as any).lastKeyCodeTime = 0, (this as any).lastClick = {
      time: 0,
      x: 0,
      y: 0,
      type: "",
      button: 0
    }, (this as any).lastSelectionOrigin = null, (this as any).lastSelectionTime = 0, (this as any).lastIOSEnter = 0, (this as any).lastIOSEnterFallbackTimeout = -1, (this as any).lastFocus = 0, (this as any).lastTouch = 0, (this as any).lastChromeDelete = 0, (this as any).composing = !1, (this as any).compositionNode = null, (this as any).composingTimeout = -1, (this as any).compositionNodes = [], (this as any).compositionEndedAt = -2e8, (this as any).compositionID = 1, (this as any).compositionPendingChanges = 0, (this as any).domChangeCount = 0, (this as any).eventHandlers = ((Object as any).create as any)(null), (this as any).hideSelectionGuard = null;
  }
}
function tf(this: any, n: any): any {
  for (let e in re) {
    let t: any = (re as any)[e];
    (((n as any).dom as any).addEventListener as any)(e, (((n as any).input as any).eventHandlers as any)[e] = (r: any): any => {
      (rf as any)(n, r) && !(ri as any)(n, r) && ((n as any).editable || !((r as any).type in se)) && (t as any)(n, r);
    }, (Zd as any)[e] ? {
      passive: !0
    } : void 0);
  }
  ee && (((n as any).dom as any).addEventListener as any)("input", (): any => null), (Ns as any)(n);
}
function Je(this: any, n: any, e: any): any {
  ((n as any).input as any).lastSelectionOrigin = e, ((n as any).input as any).lastSelectionTime = ((Date as any).now as any)();
}
function nf(this: any, n: any): any {
  (((n as any).domObserver as any).stop as any)();
  for (let e in ((n as any).input as any).eventHandlers) (((n as any).dom as any).removeEventListener as any)(e, (((n as any).input as any).eventHandlers as any)[e]);
  (clearTimeout as any)(((n as any).input as any).composingTimeout), (clearTimeout as any)(((n as any).input as any).lastIOSEnterFallbackTimeout);
}
function Ns(this: any, n: any): any {
  ((n as any).someProp as any)("handleDOMEvents", (e: any): any => {
    for (let t in e) (((n as any).input as any).eventHandlers as any)[t] || (((n as any).dom as any).addEventListener as any)(t, (((n as any).input as any).eventHandlers as any)[t] = (r: any): any => (ri as any)(n, r));
  });
}
function ri(this: any, n: any, e: any): any {
  return ((n as any).someProp as any)("handleDOMEvents", (t: any): any => {
    let r: any = (t as any)[(e as any).type];
    return r ? (r as any)(n, e) || (e as any).defaultPrevented : !1;
  });
}
function rf(this: any, n: any, e: any): any {
  if (!(e as any).bubbles) return !0;
  if ((e as any).defaultPrevented) return !1;
  for (let t: any = (e as any).target; (t as any) != ((n as any).dom as any); t = (t as any).parentNode) if (!t || ((t as any).nodeType as any) == (11 as any) || (t as any).pmViewDesc && (((t as any).pmViewDesc as any).stopEvent as any)(e)) return !1;
  return !0;
}
function sf(this: any, n: any, e: any): any {
  !(ri as any)(n, e) && (re as any)[(e as any).type] && ((n as any).editable || !((e as any).type in se)) && ((re as any)[(e as any).type] as any)(n, e);
}
(se as any).keydown = (n: any, e: any): any => {
  let t: any = e;
  if (((n as any).input as any).shiftKey = ((t as any).keyCode as any) == (16 as any) || (t as any).shiftKey, !(Ea as any)(n, t) && (((n as any).input as any).lastKeyCode = (t as any).keyCode, ((n as any).input as any).lastKeyCodeTime = ((Date as any).now as any)(), !(Re && U && ((t as any).keyCode as any) == (13 as any)))) if (((t as any).keyCode as any) != (229 as any) && (((n as any).domObserver as any).forceFlush as any)(), zt && ((t as any).keyCode as any) == (13 as any) && !(t as any).ctrlKey && !(t as any).altKey && !(t as any).metaKey) {
    let r: any = ((Date as any).now as any)();
    ((n as any).input as any).lastIOSEnter = r, ((n as any).input as any).lastIOSEnterFallbackTimeout = (setTimeout as any)((): any => {
      (((n as any).input as any).lastIOSEnter as any) == (r as any) && (((n as any).someProp as any)("handleKeyDown", (s: any): any => (s as any)(n, (st as any)(13, "Enter"))), ((n as any).input as any).lastIOSEnter = 0);
    }, 200);
  } else ((n as any).someProp as any)("handleKeyDown", (r: any): any => (r as any)(n, t)) || (Kd as any)(n, t) ? ((t as any).preventDefault as any)() : (Je as any)(n, "key");
};
(se as any).keyup = (n: any, e: any): any => {
  ((e as any).keyCode as any) == (16 as any) && (((n as any).input as any).shiftKey = !1);
};
(se as any).keypress = (n: any, e: any): any => {
  let t: any = e;
  if ((Ea as any)(n, t) || !(t as any).charCode || (t as any).ctrlKey && !(t as any).altKey || me && (t as any).metaKey) return;
  if (((n as any).someProp as any)("handleKeyPress", (s: any): any => (s as any)(n, t))) {
    ((t as any).preventDefault as any)();
    return;
  }
  let r: any = ((n as any).state as any).selection;
  if (!(r instanceof N) || !(((r as any).$from as any).sameParent as any)((r as any).$to)) {
    let s: any = ((String as any).fromCharCode as any)((t as any).charCode),
      i: any = (): any => ((((((n as any).state as any).tr as any).insertText as any)(s) as any).scrollIntoView as any)();
    !((/[\r\n]/ as any).test as any)(s) && !((n as any).someProp as any)("handleTextInput", (o: any): any => (o as any)(n, ((r as any).$from as any).pos, ((r as any).$to as any).pos, s, i)) && ((n as any).dispatch as any)((i as any)()), ((t as any).preventDefault as any)();
  }
};
function Dr(this: any, n: any): any {
  return {
    left: (n as any).clientX,
    top: (n as any).clientY
  };
}
function of(this: any, n: any, e: any): any {
  let t: any = ((e as any).x as any) - ((n as any).clientX as any),
    r: any = ((e as any).y as any) - ((n as any).clientY as any);
  return (((t as any) * (t as any) as any) + ((r as any) * (r as any) as any) as any) < (100 as any);
}
function si(this: any, n: any, e: any, t: any, r: any, s: any): any {
  if ((r as any) == (-1 as any)) return !1;
  let i: any = ((((n as any).state as any).doc as any).resolve as any)(r);
  for (let o: any = ((i as any).depth as any) + (1 as any); (o as any) > (0 as any); o--) if (((n as any).someProp as any)(e, (l: any): any => (o as any) > ((i as any).depth as any) ? (l as any)(n, t, (i as any).nodeAfter, ((i as any).before as any)(o), s, !0) : (l as any)(n, t, ((i as any).node as any)(o), ((i as any).before as any)(o), s, !1))) return !0;
  return !1;
}
function It(this: any, n: any, e: any, t: any): any {
  if ((n as any).focused || ((n as any).focus as any)(), ((((n as any).state as any).selection as any).eq as any)(e)) return;
  let r: any = ((((n as any).state as any).tr as any).setSelection as any)(e);
  ((r as any).setMeta as any)("pointer", !0), ((n as any).dispatch as any)(r);
}
function lf(this: any, n: any, e: any): any {
  if ((e as any) == (-1 as any)) return !1;
  let t: any = ((((n as any).state as any).doc as any).resolve as any)(e),
    r: any = (t as any).nodeAfter;
  return r && (r as any).isAtom && ((v as any).isSelectable as any)(r) ? ((It as any)(n, new (v as any)(t)), !0) : !1;
}
function af(this: any, n: any, e: any): any {
  if ((e as any) == (-1 as any)) return !1;
  let t: any = ((n as any).state as any).selection,
    r: any,
    s: any;
  t instanceof v && (r = (t as any).node);
  let i: any = ((((n as any).state as any).doc as any).resolve as any)(e);
  for (let o: any = ((i as any).depth as any) + (1 as any); (o as any) > (0 as any); o--) {
    let l: any = (o as any) > ((i as any).depth as any) ? (i as any).nodeAfter : ((i as any).node as any)(o);
    if (((v as any).isSelectable as any)(l)) {
      r && (((t as any).$from as any).depth as any) > (0 as any) && (o as any) >= (((t as any).$from as any).depth as any) && (((i as any).before as any)((((t as any).$from as any).depth as any) + (1 as any)) as any) == (((t as any).$from as any).pos as any) ? s = ((i as any).before as any)(((t as any).$from as any).depth) : s = ((i as any).before as any)(o);
      break;
    }
  }
  return (s as any) != (null as any) ? ((It as any)(n, ((v as any).create as any)(((n as any).state as any).doc, s)), !0) : !1;
}
function cf(this: any, n: any, e: any, t: any, r: any, s: any): any {
  return (si as any)(n, "handleClickOn", e, t, r) || ((n as any).someProp as any)("handleClick", (i: any): any => (i as any)(n, e, r)) || (s ? (af as any)(n, t) : (lf as any)(n, t));
}
function uf(this: any, n: any, e: any, t: any, r: any): any {
  return (si as any)(n, "handleDoubleClickOn", e, t, r) || ((n as any).someProp as any)("handleDoubleClick", (s: any): any => (s as any)(n, e, r));
}
function df(this: any, n: any, e: any, t: any, r: any): any {
  return (si as any)(n, "handleTripleClickOn", e, t, r) || ((n as any).someProp as any)("handleTripleClick", (s: any): any => (s as any)(n, e, r)) || (ff as any)(n, t, r);
}
function ff(this: any, n: any, e: any, t: any): any {
  if (((t as any).button as any) != (0 as any)) return !1;
  let r: any = ((n as any).state as any).doc;
  if ((e as any) == (-1 as any)) return (r as any).inlineContent ? ((It as any)(n, ((N as any).create as any)(r, 0, ((r as any).content as any).size)), !0) : !1;
  let s: any = ((r as any).resolve as any)(e);
  for (let i: any = ((s as any).depth as any) + (1 as any); (i as any) > (0 as any); i--) {
    let o: any = (i as any) > ((s as any).depth as any) ? (s as any).nodeAfter : ((s as any).node as any)(i),
      l: any = ((s as any).before as any)(i);
    if ((o as any).inlineContent) (It as any)(n, ((N as any).create as any)(r, (l as any) + (1 as any), ((l as any) + (1 as any) as any) + (((o as any).content as any).size as any)));else if (((v as any).isSelectable as any)(o)) (It as any)(n, ((v as any).create as any)(r, l));else continue;
    return !0;
  }
}
function ii(this: any, n: any): any {
  return (Wn as any)(n);
}
const Ma: any = me ? "metaKey" : "ctrlKey";
(re as any).mousedown = (n: any, e: any): any => {
  let t: any = e;
  ((n as any).input as any).shiftKey = (t as any).shiftKey;
  let r: any = (ii as any)(n),
    s: any = ((Date as any).now as any)(),
    i: any = "singleClick";
  ((s as any) - ((((n as any).input as any).lastClick as any).time as any) as any) < (500 as any) && (of as any)(t, ((n as any).input as any).lastClick) && !(t as any)[Ma] && ((((n as any).input as any).lastClick as any).button as any) == ((t as any).button as any) && (((((n as any).input as any).lastClick as any).type as any) == ("singleClick" as any) ? i = "doubleClick" : ((((n as any).input as any).lastClick as any).type as any) == ("doubleClick" as any) && (i = "tripleClick")), ((n as any).input as any).lastClick = {
    time: s,
    x: (t as any).clientX,
    y: (t as any).clientY,
    type: i,
    button: (t as any).button
  };
  let o: any = ((n as any).posAtCoords as any)((Dr as any)(t));
  o && ((i as any) == ("singleClick" as any) ? (((n as any).input as any).mouseDown && ((((n as any).input as any).mouseDown as any).done as any)(), ((n as any).input as any).mouseDown = new (hf as any)(n, o, t, !!r)) : (((i as any) == ("doubleClick" as any) ? uf : df) as any)(n, (o as any).pos, (o as any).inside, t) ? ((t as any).preventDefault as any)() : (Je as any)(n, "pointer"));
};
class hf {
  declare target: any;
  declare allowDefault: any;
  declare selectNode: any;
  declare startDoc: any;
  declare mightDrag: any;
  declare delayedSelectionSync: any;
  declare flushed: any;
  declare event: any;
  declare pos: any;
  declare view: any;
  [key: string]: any;
  constructor(e: any, t: any, r: any, s: any) {
    (this as any).view = e, (this as any).pos = t, (this as any).event = r, (this as any).flushed = s, (this as any).delayedSelectionSync = !1, (this as any).mightDrag = null, (this as any).startDoc = ((e as any).state as any).doc, (this as any).selectNode = !!(r as any)[Ma], (this as any).allowDefault = (r as any).shiftKey;
    let i: any, o: any;
    if (((t as any).inside as any) > (-1 as any)) i = ((((e as any).state as any).doc as any).nodeAt as any)((t as any).inside), o = (t as any).inside;else {
      let u: any = ((((e as any).state as any).doc as any).resolve as any)((t as any).pos);
      i = (u as any).parent, o = (u as any).depth ? ((u as any).before as any)() : 0;
    }
    const l: any = s ? null : (r as any).target,
      a: any = l ? (((e as any).docView as any).nearestDesc as any)(l, !0) : null;
    (this as any).target = a && (((a as any).nodeDOM as any).nodeType as any) == (1 as any) ? (a as any).nodeDOM : null;
    let {
      selection: c
    }: any = (e as any).state;
    (((r as any).button as any) == (0 as any) && (((i as any).type as any).spec as any).draggable && ((((i as any).type as any).spec as any).selectable as any) !== (!1 as any) || c instanceof v && ((c as any).from as any) <= (o as any) && ((c as any).to as any) > (o as any)) && ((this as any).mightDrag = {
      node: i,
      pos: o,
      addAttr: !!((this as any).target && !((this as any).target as any).draggable),
      setUneditable: !!((this as any).target && ye && !(((this as any).target as any).hasAttribute as any)("contentEditable"))
    }), (this as any).target && (this as any).mightDrag && (((this as any).mightDrag as any).addAttr || ((this as any).mightDrag as any).setUneditable) && (((((this as any).view as any).domObserver as any).stop as any)(), ((this as any).mightDrag as any).addAttr && (((this as any).target as any).draggable = !0), ((this as any).mightDrag as any).setUneditable && (setTimeout as any)((): any => {
      ((((this as any).view as any).input as any).mouseDown as any) == (this as any) && (((this as any).target as any).setAttribute as any)("contentEditable", "false");
    }, 20), ((((this as any).view as any).domObserver as any).start as any)()), (((e as any).root as any).addEventListener as any)("mouseup", (this as any).up = (((this as any).up as any).bind as any)(this)), (((e as any).root as any).addEventListener as any)("mousemove", (this as any).move = (((this as any).move as any).bind as any)(this)), (Je as any)(e, "pointer");
  }
  done(): any {
    ((((this as any).view as any).root as any).removeEventListener as any)("mouseup", (this as any).up), ((((this as any).view as any).root as any).removeEventListener as any)("mousemove", (this as any).move), (this as any).mightDrag && (this as any).target && (((((this as any).view as any).domObserver as any).stop as any)(), ((this as any).mightDrag as any).addAttr && (((this as any).target as any).removeAttribute as any)("draggable"), ((this as any).mightDrag as any).setUneditable && (((this as any).target as any).removeAttribute as any)("contentEditable"), ((((this as any).view as any).domObserver as any).start as any)()), (this as any).delayedSelectionSync && (setTimeout as any)((): any => (ze as any)((this as any).view)), (((this as any).view as any).input as any).mouseDown = null;
  }
  up(e: any): any {
    if (((this as any).done as any)(), !((((this as any).view as any).dom as any).contains as any)((e as any).target)) return;
    let t: any = (this as any).pos;
    ((((this as any).view as any).state as any).doc as any) != ((this as any).startDoc as any) && (t = (((this as any).view as any).posAtCoords as any)((Dr as any)(e))), ((this as any).updateAllowDefault as any)(e), (this as any).allowDefault || !t ? (Je as any)((this as any).view, "pointer") : (cf as any)((this as any).view, (t as any).pos, (t as any).inside, e, (this as any).selectNode) ? ((e as any).preventDefault as any)() : ((e as any).button as any) == (0 as any) && ((this as any).flushed || ee && (this as any).mightDrag && !(((this as any).mightDrag as any).node as any).isAtom || U && !((((this as any).view as any).state as any).selection as any).visible && (((Math as any).min as any)(((Math as any).abs as any)(((t as any).pos as any) - (((((this as any).view as any).state as any).selection as any).from as any)), ((Math as any).abs as any)(((t as any).pos as any) - (((((this as any).view as any).state as any).selection as any).to as any))) as any) <= (2 as any)) ? ((It as any)((this as any).view, ((O as any).near as any)((((((this as any).view as any).state as any).doc as any).resolve as any)((t as any).pos))), ((e as any).preventDefault as any)()) : (Je as any)((this as any).view, "pointer");
  }
  move(e: any): any {
    ((this as any).updateAllowDefault as any)(e), (Je as any)((this as any).view, "pointer"), ((e as any).buttons as any) == (0 as any) && ((this as any).done as any)();
  }
  updateAllowDefault(e: any): any {
    !(this as any).allowDefault && ((((Math as any).abs as any)((((this as any).event as any).x as any) - ((e as any).clientX as any)) as any) > (4 as any) || (((Math as any).abs as any)((((this as any).event as any).y as any) - ((e as any).clientY as any)) as any) > (4 as any)) && ((this as any).allowDefault = !0);
  }
}
(re as any).touchstart = (n: any): any => {
  ((n as any).input as any).lastTouch = ((Date as any).now as any)(), (ii as any)(n), (Je as any)(n, "pointer");
};
(re as any).touchmove = (n: any): any => {
  ((n as any).input as any).lastTouch = ((Date as any).now as any)(), (Je as any)(n, "pointer");
};
(re as any).contextmenu = (n: any): any => (ii as any)(n);
function Ea(this: any, n: any, e: any): any {
  return (n as any).composing ? !0 : ee && (((Math as any).abs as any)(((e as any).timeStamp as any) - (((n as any).input as any).compositionEndedAt as any)) as any) < (500 as any) ? (((n as any).input as any).compositionEndedAt = -2e8, !0) : !1;
}
const pf: any = Re ? 5e3 : -1;
(se as any).compositionstart = (se as any).compositionupdate = (n: any): any => {
  if (!(n as any).composing) {
    (((n as any).domObserver as any).flush as any)();
    let {
        state: e
      }: any = n,
      t: any = ((e as any).selection as any).$to;
    if ((e as any).selection instanceof N && ((e as any).storedMarks || !(t as any).textOffset && (t as any).parentOffset && ((((t as any).nodeBefore as any).marks as any).some as any)((r: any): any => ((((r as any).type as any).spec as any).inclusive as any) === (!1 as any)) || U && na && (mf as any)(n))) (n as any).markCursor = ((n as any).state as any).storedMarks || ((t as any).marks as any)(), (Wn as any)(n, !0), (n as any).markCursor = null;else if ((Wn as any)(n, !((e as any).selection as any).empty), ye && ((e as any).selection as any).empty && (t as any).parentOffset && !(t as any).textOffset && (((t as any).nodeBefore as any).marks as any).length) {
      let r: any = ((n as any).domSelectionRange as any)();
      for (let s: any = (r as any).focusNode, i: any = (r as any).focusOffset; s && ((s as any).nodeType as any) == (1 as any) && (i as any) != (0 as any);) {
        let o: any = (i as any) < (0 as any) ? (s as any).lastChild : ((s as any).childNodes as any)[(i as any) - (1 as any)];
        if (!o) break;
        if (((o as any).nodeType as any) == (3 as any)) {
          let l: any = ((n as any).domSelection as any)();
          l && ((l as any).collapse as any)(o, ((o as any).nodeValue as any).length);
          break;
        } else s = o, i = -1;
      }
    }
    ((n as any).input as any).composing = !0;
  }
  (va as any)(n, pf);
};
function mf(this: any, n: any): any {
  let {
    focusNode: e,
    focusOffset: t
  }: any = ((n as any).domSelectionRange as any)();
  if (!e || ((e as any).nodeType as any) != (1 as any) || (t as any) >= (((e as any).childNodes as any).length as any)) return !1;
  let r: any = ((e as any).childNodes as any)[t];
  return ((r as any).nodeType as any) == (1 as any) && ((r as any).contentEditable as any) == ("false" as any);
}
(se as any).compositionend = (n: any, e: any): any => {
  (n as any).composing && (((n as any).input as any).composing = !1, ((n as any).input as any).compositionEndedAt = (e as any).timeStamp, ((n as any).input as any).compositionPendingChanges = ((((n as any).domObserver as any).pendingRecords as any)() as any).length ? ((n as any).input as any).compositionID : 0, ((n as any).input as any).compositionNode = null, ((n as any).input as any).compositionPendingChanges && ((((Promise as any).resolve as any)() as any).then as any)((): any => (((n as any).domObserver as any).flush as any)()), ((n as any).input as any).compositionID++, (va as any)(n, 20));
};
function va(this: any, n: any, e: any): any {
  (clearTimeout as any)(((n as any).input as any).composingTimeout), (e as any) > (-1 as any) && (((n as any).input as any).composingTimeout = (setTimeout as any)((): any => (Wn as any)(n), e));
}
function Ta(this: any, n: any): any {
  for ((n as any).composing && (((n as any).input as any).composing = !1, ((n as any).input as any).compositionEndedAt = (yf as any)()); ((((n as any).input as any).compositionNodes as any).length as any) > (0 as any);) ((((((n as any).input as any).compositionNodes as any).pop as any)() as any).markParentsDirty as any)();
}
function gf(this: any, n: any): any {
  let e: any = ((n as any).domSelectionRange as any)();
  if (!(e as any).focusNode) return null;
  let t: any = (ld as any)((e as any).focusNode, (e as any).focusOffset),
    r: any = (ad as any)((e as any).focusNode, (e as any).focusOffset);
  if (t && r && (t as any) != (r as any)) {
    let s: any = (r as any).pmViewDesc,
      i: any = ((n as any).domObserver as any).lastChangedTextNode;
    if ((t as any) == (i as any) || (r as any) == (i as any)) return i;
    if (!s || !((s as any).isText as any)((r as any).nodeValue)) return r;
    if ((((n as any).input as any).compositionNode as any) == (r as any)) {
      let o: any = (t as any).pmViewDesc;
      if (!(!o || !((o as any).isText as any)((t as any).nodeValue))) return r;
    }
  }
  return t || r;
}
function yf(this: any): any {
  let n: any = ((document as any).createEvent as any)("Event");
  return ((n as any).initEvent as any)("event", !0, !0), (n as any).timeStamp;
}
function Wn(this: any, n: any, e: any = !1): any {
  if (!(Re && (((n as any).domObserver as any).flushingSoon as any) >= (0 as any))) {
    if ((((n as any).domObserver as any).forceFlush as any)(), (Ta as any)(n), e || (n as any).docView && ((n as any).docView as any).dirty) {
      let t: any = (ei as any)(n),
        r: any = ((n as any).state as any).selection;
      return t && !((t as any).eq as any)(r) ? ((n as any).dispatch as any)(((((n as any).state as any).tr as any).setSelection as any)(t)) : ((n as any).markCursor || e) && !((((r as any).$from as any).node as any)((((r as any).$from as any).sharedDepth as any)((r as any).to)) as any).inlineContent ? ((n as any).dispatch as any)(((((n as any).state as any).tr as any).deleteSelection as any)()) : ((n as any).updateState as any)((n as any).state), !0;
    }
    return !1;
  }
}
function kf(this: any, n: any, e: any): any {
  if (!((n as any).dom as any).parentNode) return;
  let t: any = ((((n as any).dom as any).parentNode as any).appendChild as any)(((document as any).createElement as any)("div"));
  ((t as any).appendChild as any)(e), ((t as any).style as any).cssText = "position: fixed; left: -10000px; top: 10px";
  let r: any = (getSelection as any)(),
    s: any = ((document as any).createRange as any)();
  ((s as any).selectNodeContents as any)(e), (((n as any).dom as any).blur as any)(), ((r as any).removeAllRanges as any)(), ((r as any).addRange as any)(s), (setTimeout as any)((): any => {
    (t as any).parentNode && (((t as any).parentNode as any).removeChild as any)(t), ((n as any).focus as any)();
  }, 50);
}
const dn: any = le && (Ge as any) < (15 as any) || zt && (fd as any) < (604 as any);
(re as any).copy = (se as any).cut = (n: any, e: any): any => {
  let t: any = e,
    r: any = ((n as any).state as any).selection,
    s: any = ((t as any).type as any) == ("cut" as any);
  if ((r as any).empty) return;
  let i: any = dn ? null : (t as any).clipboardData,
    o: any = ((r as any).content as any)(),
    {
      dom: l,
      text: a
    }: any = (ni as any)(n, o);
  i ? (((t as any).preventDefault as any)(), ((i as any).clearData as any)(), ((i as any).setData as any)("text/html", (l as any).innerHTML), ((i as any).setData as any)("text/plain", a)) : (kf as any)(n, l), s && ((n as any).dispatch as any)(((((((((n as any).state as any).tr as any).deleteSelection as any)() as any).scrollIntoView as any)() as any).setMeta as any)("uiEvent", "cut"));
};
function bf(this: any, n: any): any {
  return ((n as any).openStart as any) == (0 as any) && ((n as any).openEnd as any) == (0 as any) && (((n as any).content as any).childCount as any) == (1 as any) ? ((n as any).content as any).firstChild : null;
}
function xf(this: any, n: any, e: any): any {
  if (!((n as any).dom as any).parentNode) return;
  let t: any = ((n as any).input as any).shiftKey || (((((((n as any).state as any).selection as any).$from as any).parent as any).type as any).spec as any).code,
    r: any = ((((n as any).dom as any).parentNode as any).appendChild as any)(((document as any).createElement as any)(t ? "textarea" : "div"));
  t || ((r as any).contentEditable = "true"), ((r as any).style as any).cssText = "position: fixed; left: -10000px; top: 10px", ((r as any).focus as any)();
  let s: any = ((n as any).input as any).shiftKey && (((n as any).input as any).lastKeyCode as any) != (45 as any);
  (setTimeout as any)((): any => {
    ((n as any).focus as any)(), (r as any).parentNode && (((r as any).parentNode as any).removeChild as any)(r), t ? (fn as any)(n, (r as any).value, null, s, e) : (fn as any)(n, (r as any).textContent, (r as any).innerHTML, s, e);
  }, 50);
}
function fn(this: any, n: any, e: any, t: any, r: any, s: any): any {
  let i: any = (ka as any)(n, e, t, r, (((n as any).state as any).selection as any).$from);
  if (((n as any).someProp as any)("handlePaste", (a: any): any => (a as any)(n, s, i || (w as any).empty))) return !0;
  if (!i) return !1;
  let o: any = (bf as any)(i),
    l: any = o ? ((((n as any).state as any).tr as any).replaceSelectionWith as any)(o, r) : ((((n as any).state as any).tr as any).replaceSelection as any)(i);
  return ((n as any).dispatch as any)(((((((l as any).scrollIntoView as any)() as any).setMeta as any)("paste", !0) as any).setMeta as any)("uiEvent", "paste")), !0;
}
function Aa(this: any, n: any): any {
  let e: any = ((n as any).getData as any)("text/plain") || ((n as any).getData as any)("Text");
  if (e) return e;
  let t: any = ((n as any).getData as any)("text/uri-list");
  return t ? ((t as any).replace as any)(/\r?\n/g, " ") : "";
}
(se as any).paste = (n: any, e: any): any => {
  let t: any = e;
  if ((n as any).composing && !Re) return;
  let r: any = dn ? null : (t as any).clipboardData,
    s: any = ((n as any).input as any).shiftKey && (((n as any).input as any).lastKeyCode as any) != (45 as any);
  r && (fn as any)(n, (Aa as any)(r), ((r as any).getData as any)("text/html"), s, t) ? ((t as any).preventDefault as any)() : (xf as any)(n, t);
};
class Na {
  declare node: any;
  declare move: any;
  declare slice: any;
  [key: string]: any;
  constructor(e: any, t: any, r: any) {
    (this as any).slice = e, (this as any).move = t, (this as any).node = r;
  }
}
const Sf: any = me ? "altKey" : "ctrlKey";
function Oa(this: any, n: any, e: any): any {
  let t: any = ((n as any).someProp as any)("dragCopies", (r: any): any => !(r as any)(e));
  return t ?? !(e as any)[Sf];
}
(re as any).dragstart = (n: any, e: any): any => {
  let t: any = e,
    r: any = ((n as any).input as any).mouseDown;
  if (r && ((r as any).done as any)(), !(t as any).dataTransfer) return;
  let s: any = ((n as any).state as any).selection,
    i: any = (s as any).empty ? null : ((n as any).posAtCoords as any)((Dr as any)(t)),
    o: any;
  if (!(i && ((i as any).pos as any) >= ((s as any).from as any) && ((i as any).pos as any) <= ((s instanceof v ? ((s as any).to as any) - (1 as any) : (s as any).to) as any))) {
    if (r && (r as any).mightDrag) o = ((v as any).create as any)(((n as any).state as any).doc, ((r as any).mightDrag as any).pos);else if ((t as any).target && (((t as any).target as any).nodeType as any) == (1 as any)) {
      let d: any = (((n as any).docView as any).nearestDesc as any)((t as any).target, !0);
      d && ((((d as any).node as any).type as any).spec as any).draggable && (d as any) != ((n as any).docView as any) && (o = ((v as any).create as any)(((n as any).state as any).doc, (d as any).posBefore));
    }
  }
  let l: any = (((o || ((n as any).state as any).selection) as any).content as any)(),
    {
      dom: a,
      text: c,
      slice: u
    }: any = (ni as any)(n, l);
  (!(((t as any).dataTransfer as any).files as any).length || !U || (ta as any) > (120 as any)) && (((t as any).dataTransfer as any).clearData as any)(), (((t as any).dataTransfer as any).setData as any)(dn ? "Text" : "text/html", (a as any).innerHTML), ((t as any).dataTransfer as any).effectAllowed = "copyMove", dn || (((t as any).dataTransfer as any).setData as any)("text/plain", c), (n as any).dragging = new (Na as any)(u, (Oa as any)(n, t), o);
};
(re as any).dragend = (n: any): any => {
  let e: any = (n as any).dragging;
  ((window as any).setTimeout as any)((): any => {
    ((n as any).dragging as any) == (e as any) && ((n as any).dragging = null);
  }, 50);
};
(se as any).dragover = (se as any).dragenter = (n: any, e: any): any => ((e as any).preventDefault as any)();
(se as any).drop = (n: any, e: any): any => {
  try {
    (wf as any)(n, e, (n as any).dragging);
  } finally {
    (n as any).dragging = null;
  }
};
function wf(this: any, n: any, e: any, t: any): any {
  if (!(e as any).dataTransfer) return;
  let r: any = ((n as any).posAtCoords as any)((Dr as any)(e));
  if (!r) return;
  let s: any = ((((n as any).state as any).doc as any).resolve as any)((r as any).pos),
    i: any = t && (t as any).slice;
  i ? ((n as any).someProp as any)("transformPasted", (h: any): any => {
    i = (h as any)(i, n, !1);
  }) : i = (ka as any)(n, (Aa as any)((e as any).dataTransfer), dn ? null : (((e as any).dataTransfer as any).getData as any)("text/html"), !1, s);
  let o: any = !!(t && (Oa as any)(n, e));
  if (((n as any).someProp as any)("handleDrop", (h: any): any => (h as any)(n, e, i || (w as any).empty, o))) {
    ((e as any).preventDefault as any)();
    return;
  }
  if (!i) return;
  ((e as any).preventDefault as any)();
  let l: any = i ? (Pl as any)(((n as any).state as any).doc, (s as any).pos, i) : (s as any).pos;
  (l as any) == (null as any) && (l = (s as any).pos);
  let a: any = ((n as any).state as any).tr;
  if (o) {
    let {
      node: h
    }: any = t;
    h ? ((h as any).replace as any)(a) : ((a as any).deleteSelection as any)();
  }
  let c: any = (((a as any).mapping as any).map as any)(l),
    u: any = ((i as any).openStart as any) == (0 as any) && ((i as any).openEnd as any) == (0 as any) && (((i as any).content as any).childCount as any) == (1 as any),
    d: any = (a as any).doc;
  if (u ? ((a as any).replaceRangeWith as any)(c, c, ((i as any).content as any).firstChild) : ((a as any).replaceRange as any)(c, c, i), (((a as any).doc as any).eq as any)(d)) return;
  let f: any = (((a as any).doc as any).resolve as any)(c);
  if (u && ((v as any).isSelectable as any)(((i as any).content as any).firstChild) && (f as any).nodeAfter && (((f as any).nodeAfter as any).sameMarkup as any)(((i as any).content as any).firstChild)) ((a as any).setSelection as any)(new (v as any)(f));else {
    let h: any = (((a as any).mapping as any).map as any)(l);
    (((((a as any).mapping as any).maps as any)[((((a as any).mapping as any).maps as any).length as any) - (1 as any)] as any).forEach as any)((p: any, m: any, g: any, y: any): any => h = y), ((a as any).setSelection as any)((ti as any)(n, f, (((a as any).doc as any).resolve as any)(h)));
  }
  ((n as any).focus as any)(), ((n as any).dispatch as any)(((a as any).setMeta as any)("uiEvent", "drop"));
}
(re as any).focus = (n: any): any => {
  ((n as any).input as any).lastFocus = ((Date as any).now as any)(), (n as any).focused || ((((n as any).domObserver as any).stop as any)(), ((((n as any).dom as any).classList as any).add as any)("ProseMirror-focused"), (((n as any).domObserver as any).start as any)(), (n as any).focused = !0, (setTimeout as any)((): any => {
    (n as any).docView && ((n as any).hasFocus as any)() && !((((n as any).domObserver as any).currentSelection as any).eq as any)(((n as any).domSelectionRange as any)()) && (ze as any)(n);
  }, 20));
};
(re as any).blur = (n: any, e: any): any => {
  let t: any = e;
  (n as any).focused && ((((n as any).domObserver as any).stop as any)(), ((((n as any).dom as any).classList as any).remove as any)("ProseMirror-focused"), (((n as any).domObserver as any).start as any)(), (t as any).relatedTarget && (((n as any).dom as any).contains as any)((t as any).relatedTarget) && ((((n as any).domObserver as any).currentSelection as any).clear as any)(), (n as any).focused = !1);
};
(re as any).beforeinput = (n: any, e: any): any => {
  if (U && Re && ((e as any).inputType as any) == ("deleteContentBackward" as any)) {
    (((n as any).domObserver as any).flushSoon as any)();
    let {
      domChangeCount: r
    }: any = (n as any).input;
    (setTimeout as any)((): any => {
      if ((((n as any).input as any).domChangeCount as any) != (r as any) || ((((n as any).dom as any).blur as any)(), ((n as any).focus as any)(), ((n as any).someProp as any)("handleKeyDown", (i: any): any => (i as any)(n, (st as any)(8, "Backspace"))))) return;
      let {
        $cursor: s
      }: any = ((n as any).state as any).selection;
      s && ((s as any).pos as any) > (0 as any) && ((n as any).dispatch as any)(((((((n as any).state as any).tr as any).delete as any)(((s as any).pos as any) - (1 as any), (s as any).pos) as any).scrollIntoView as any)());
    }, 50);
  }
};
for (let n in se) (re as any)[n] = (se as any)[n];
function hn(this: any, n: any, e: any): any {
  if ((n as any) == (e as any)) return !0;
  for (let t in n) if (((n as any)[t] as any) !== ((e as any)[t] as any)) return !1;
  for (let t in e) if (!(t in n)) return !1;
  return !0;
}
class qn {
  declare side: any;
  declare spec: any;
  declare toDOM: any;
  [key: string]: any;
  constructor(e: any, t: any) {
    (this as any).toDOM = e, (this as any).spec = t || ut, (this as any).side = ((this as any).spec as any).side || 0;
  }
  map(e: any, t: any, r: any, s: any): any {
    let {
      pos: i,
      deleted: o
    }: any = ((e as any).mapResult as any)(((t as any).from as any) + (s as any), ((this as any).side as any) < (0 as any) ? -1 : 1);
    return o ? null : new (ne as any)((i as any) - (r as any), (i as any) - (r as any), this);
  }
  valid(): any {
    return !0;
  }
  eq(e: any): any {
    return (this as any) == (e as any) || e instanceof qn && (((this as any).spec as any).key && (((this as any).spec as any).key as any) == (((e as any).spec as any).key as any) || ((this as any).toDOM as any) == ((e as any).toDOM as any) && (hn as any)((this as any).spec, (e as any).spec));
  }
  destroy(e: any): any {
    ((this as any).spec as any).destroy && (((this as any).spec as any).destroy as any)(e);
  }
}
class Xe {
  declare spec: any;
  declare attrs: any;
  [key: string]: any;
  constructor(e: any, t: any) {
    (this as any).attrs = e, (this as any).spec = t || ut;
  }
  map(e: any, t: any, r: any, s: any): any {
    let i: any = (((e as any).map as any)(((t as any).from as any) + (s as any), ((this as any).spec as any).inclusiveStart ? -1 : 1) as any) - (r as any),
      o: any = (((e as any).map as any)(((t as any).to as any) + (s as any), ((this as any).spec as any).inclusiveEnd ? 1 : -1) as any) - (r as any);
    return (i as any) >= (o as any) ? null : new (ne as any)(i, o, this);
  }
  valid(e: any, t: any): any {
    return ((t as any).from as any) < ((t as any).to as any);
  }
  eq(e: any): any {
    return (this as any) == (e as any) || e instanceof Xe && (hn as any)((this as any).attrs, (e as any).attrs) && (hn as any)((this as any).spec, (e as any).spec);
  }
  static is(e: any): any {
    return (e as any).type instanceof Xe;
  }
  destroy(): any {}
}
class oi {
  declare spec: any;
  declare attrs: any;
  [key: string]: any;
  constructor(e: any, t: any) {
    (this as any).attrs = e, (this as any).spec = t || ut;
  }
  map(e: any, t: any, r: any, s: any): any {
    let i: any = ((e as any).mapResult as any)(((t as any).from as any) + (s as any), 1);
    if ((i as any).deleted) return null;
    let o: any = ((e as any).mapResult as any)(((t as any).to as any) + (s as any), -1);
    return (o as any).deleted || ((o as any).pos as any) <= ((i as any).pos as any) ? null : new (ne as any)(((i as any).pos as any) - (r as any), ((o as any).pos as any) - (r as any), this);
  }
  valid(e: any, t: any): any {
    let {
        index: r,
        offset: s
      }: any = (((e as any).content as any).findIndex as any)((t as any).from),
      i: any;
    return (s as any) == ((t as any).from as any) && !((i = ((e as any).child as any)(r)) as any).isText && ((s as any) + ((i as any).nodeSize as any) as any) == ((t as any).to as any);
  }
  eq(e: any): any {
    return (this as any) == (e as any) || e instanceof oi && (hn as any)((this as any).attrs, (e as any).attrs) && (hn as any)((this as any).spec, (e as any).spec);
  }
  destroy(): any {}
}
class ne {
  declare type: any;
  declare to: any;
  declare from: any;
  [key: string]: any;
  constructor(e: any, t: any, r: any) {
    (this as any).from = e, (this as any).to = t, (this as any).type = r;
  }
  copy(e: any, t: any): any {
    return new (ne as any)(e, t, (this as any).type);
  }
  eq(e: any, t: any = 0): any {
    return (((this as any).type as any).eq as any)((e as any).type) && (((this as any).from as any) + (t as any) as any) == ((e as any).from as any) && (((this as any).to as any) + (t as any) as any) == ((e as any).to as any);
  }
  map(e: any, t: any, r: any): any {
    return (((this as any).type as any).map as any)(e, this, t, r);
  }
  static widget(e: any, t: any, r: any): any {
    return new (ne as any)(e, e, new (qn as any)(t, r));
  }
  static inline(e: any, t: any, r: any, s: any): any {
    return new (ne as any)(e, t, new (Xe as any)(r, s));
  }
  static node(e: any, t: any, r: any, s: any): any {
    return new (ne as any)(e, t, new (oi as any)(r, s));
  }
  get spec(): any {
    return ((this as any).type as any).spec;
  }
  get inline(): any {
    return (this as any).type instanceof Xe;
  }
  get widget(): any {
    return (this as any).type instanceof qn;
  }
}
const Tt: any = [],
  ut: any = {};
class B {
  declare children: any;
  declare local: any;
  [key: string]: any;
  constructor(e: any, t: any) {
    (this as any).local = (e as any).length ? e : Tt, (this as any).children = (t as any).length ? t : Tt;
  }
  static create(e: any, t: any): any {
    return (t as any).length ? (Kn as any)(t, e, 0, ut) : Z;
  }
  find(e: any, t: any, r: any): any {
    let s: any = [];
    return ((this as any).findInner as any)(e ?? 0, t ?? 1e9, s, 0, r), s;
  }
  findInner(e: any, t: any, r: any, s: any, i: any): any {
    for (let o: any = 0; (o as any) < (((this as any).local as any).length as any); o++) {
      let l: any = ((this as any).local as any)[o];
      ((l as any).from as any) <= (t as any) && ((l as any).to as any) >= (e as any) && (!i || (i as any)((l as any).spec)) && ((r as any).push as any)(((l as any).copy as any)(((l as any).from as any) + (s as any), ((l as any).to as any) + (s as any)));
    }
    for (let o: any = 0; (o as any) < (((this as any).children as any).length as any); o += 3) if ((((this as any).children as any)[o] as any) < (t as any) && (((this as any).children as any)[(o as any) + (1 as any)] as any) > (e as any)) {
      let l: any = (((this as any).children as any)[o] as any) + (1 as any);
      ((((this as any).children as any)[(o as any) + (2 as any)] as any).findInner as any)((e as any) - (l as any), (t as any) - (l as any), r, (s as any) + (l as any), i);
    }
  }
  map(e: any, t: any, r: any): any {
    return (this as any) == (Z as any) || (((e as any).maps as any).length as any) == (0 as any) ? this : ((this as any).mapInner as any)(e, t, 0, 0, r || ut);
  }
  mapInner(e: any, t: any, r: any, s: any, i: any): any {
    let o: any;
    for (let l: any = 0; (l as any) < (((this as any).local as any).length as any); l++) {
      let a: any = ((((this as any).local as any)[l] as any).map as any)(e, r, s);
      a && (((a as any).type as any).valid as any)(t, a) ? (((o || (o = [])) as any).push as any)(a) : (i as any).onRemove && ((i as any).onRemove as any)((((this as any).local as any)[l] as any).spec);
    }
    return ((this as any).children as any).length ? (Cf as any)((this as any).children, o || [], e, t, r, s, i) : o ? new (B as any)(((o as any).sort as any)(dt), Tt) : Z;
  }
  add(e: any, t: any): any {
    return (t as any).length ? (this as any) == (Z as any) ? ((B as any).create as any)(e, t) : ((this as any).addInner as any)(e, t, 0) : this;
  }
  addInner(e: any, t: any, r: any): any {
    let s: any,
      i: any = 0;
    ((e as any).forEach as any)((l: any, a: any): any => {
      let c: any = (a as any) + (r as any),
        u: any;
      if (u = (Ia as any)(t, l, c)) {
        for (s || (s = (((this as any).children as any).slice as any)()); (i as any) < ((s as any).length as any) && ((s as any)[i] as any) < (a as any);) i += 3;
        ((s as any)[i] as any) == (a as any) ? (s as any)[(i as any) + (2 as any)] = (((s as any)[(i as any) + (2 as any)] as any).addInner as any)(l, u, (c as any) + (1 as any)) : ((s as any).splice as any)(i, 0, a, (a as any) + ((l as any).nodeSize as any), (Kn as any)(u, l, (c as any) + (1 as any), ut)), i += 3;
      }
    });
    let o: any = (Da as any)(i ? (Ra as any)(t) : t, -r);
    for (let l: any = 0; (l as any) < ((o as any).length as any); l++) ((((o as any)[l] as any).type as any).valid as any)(e, (o as any)[l]) || ((o as any).splice as any)(l--, 1);
    return new (B as any)((o as any).length ? (((((this as any).local as any).concat as any)(o) as any).sort as any)(dt) : (this as any).local, s || (this as any).children);
  }
  remove(e: any): any {
    return ((e as any).length as any) == (0 as any) || (this as any) == (Z as any) ? this : ((this as any).removeInner as any)(e, 0);
  }
  removeInner(e: any, t: any): any {
    let r: any = (this as any).children,
      s: any = (this as any).local;
    for (let i: any = 0; (i as any) < ((r as any).length as any); i += 3) {
      let o: any,
        l: any = ((r as any)[i] as any) + (t as any),
        a: any = ((r as any)[(i as any) + (1 as any)] as any) + (t as any);
      for (let u: any = 0, d: any; (u as any) < ((e as any).length as any); u++) (d = (e as any)[u]) && ((d as any).from as any) > (l as any) && ((d as any).to as any) < (a as any) && ((e as any)[u] = null, (((o || (o = [])) as any).push as any)(d));
      if (!o) continue;
      (r as any) == ((this as any).children as any) && (r = (((this as any).children as any).slice as any)());
      let c: any = (((r as any)[(i as any) + (2 as any)] as any).removeInner as any)(o, (l as any) + (1 as any));
      (c as any) != (Z as any) ? (r as any)[(i as any) + (2 as any)] = c : (((r as any).splice as any)(i, 3), i -= 3);
    }
    if ((s as any).length) {
      for (let i: any = 0, o: any; (i as any) < ((e as any).length as any); i++) if (o = (e as any)[i]) for (let l: any = 0; (l as any) < ((s as any).length as any); l++) (((s as any)[l] as any).eq as any)(o, t) && ((s as any) == ((this as any).local as any) && (s = (((this as any).local as any).slice as any)()), ((s as any).splice as any)(l--, 1));
    }
    return (r as any) == ((this as any).children as any) && (s as any) == ((this as any).local as any) ? this : (s as any).length || (r as any).length ? new (B as any)(s, r) : Z;
  }
  forChild(e: any, t: any): any {
    if ((this as any) == (Z as any)) return this;
    if ((t as any).isLeaf) return (B as any).empty;
    let r: any, s: any;
    for (let l: any = 0; (l as any) < (((this as any).children as any).length as any); l += 3) if ((((this as any).children as any)[l] as any) >= (e as any)) {
      (((this as any).children as any)[l] as any) == (e as any) && (r = ((this as any).children as any)[(l as any) + (2 as any)]);
      break;
    }
    let i: any = (e as any) + (1 as any),
      o: any = (i as any) + (((t as any).content as any).size as any);
    for (let l: any = 0; (l as any) < (((this as any).local as any).length as any); l++) {
      let a: any = ((this as any).local as any)[l];
      if (((a as any).from as any) < (o as any) && ((a as any).to as any) > (i as any) && (a as any).type instanceof Xe) {
        let c: any = (((Math as any).max as any)(i, (a as any).from) as any) - (i as any),
          u: any = (((Math as any).min as any)(o, (a as any).to) as any) - (i as any);
        (c as any) < (u as any) && (((s || (s = [])) as any).push as any)(((a as any).copy as any)(c, u));
      }
    }
    if (s) {
      let l: any = new (B as any)(((s as any).sort as any)(dt), Tt);
      return r ? new (We as any)([l, r]) : l;
    }
    return r || Z;
  }
  eq(e: any): any {
    if ((this as any) == (e as any)) return !0;
    if (!(e instanceof B) || (((this as any).local as any).length as any) != (((e as any).local as any).length as any) || (((this as any).children as any).length as any) != (((e as any).children as any).length as any)) return !1;
    for (let t: any = 0; (t as any) < (((this as any).local as any).length as any); t++) if (!((((this as any).local as any)[t] as any).eq as any)(((e as any).local as any)[t])) return !1;
    for (let t: any = 0; (t as any) < (((this as any).children as any).length as any); t += 3) if ((((this as any).children as any)[t] as any) != (((e as any).children as any)[t] as any) || (((this as any).children as any)[(t as any) + (1 as any)] as any) != (((e as any).children as any)[(t as any) + (1 as any)] as any) || !((((this as any).children as any)[(t as any) + (2 as any)] as any).eq as any)(((e as any).children as any)[(t as any) + (2 as any)])) return !1;
    return !0;
  }
  locals(e: any): any {
    return (li as any)(((this as any).localsInner as any)(e));
  }
  localsInner(e: any): any {
    if ((this as any) == (Z as any)) return Tt;
    if ((e as any).inlineContent || !(((this as any).local as any).some as any)((Xe as any).is)) return (this as any).local;
    let t: any = [];
    for (let r: any = 0; (r as any) < (((this as any).local as any).length as any); r++) (((this as any).local as any)[r] as any).type instanceof Xe || ((t as any).push as any)(((this as any).local as any)[r]);
    return t;
  }
  forEachSet(e: any): any {
    (e as any)(this);
  }
}
(B as any).empty = new (B as any)([], []);
(B as any).removeOverlap = li;
const Z: any = (B as any).empty;
class We {
  declare members: any;
  [key: string]: any;
  constructor(e: any) {
    (this as any).members = e;
  }
  map(e: any, t: any): any {
    const r: any = (((this as any).members as any).map as any)((s: any): any => ((s as any).map as any)(e, t, ut));
    return ((We as any).from as any)(r);
  }
  forChild(e: any, t: any): any {
    if ((t as any).isLeaf) return (B as any).empty;
    let r: any = [];
    for (let s: any = 0; (s as any) < (((this as any).members as any).length as any); s++) {
      let i: any = ((((this as any).members as any)[s] as any).forChild as any)(e, t);
      (i as any) != (Z as any) && (i instanceof We ? r = ((r as any).concat as any)((i as any).members) : ((r as any).push as any)(i));
    }
    return ((We as any).from as any)(r);
  }
  eq(e: any): any {
    if (!(e instanceof We) || (((e as any).members as any).length as any) != (((this as any).members as any).length as any)) return !1;
    for (let t: any = 0; (t as any) < (((this as any).members as any).length as any); t++) if (!((((this as any).members as any)[t] as any).eq as any)(((e as any).members as any)[t])) return !1;
    return !0;
  }
  locals(e: any): any {
    let t: any,
      r: any = !0;
    for (let s: any = 0; (s as any) < (((this as any).members as any).length as any); s++) {
      let i: any = ((((this as any).members as any)[s] as any).localsInner as any)(e);
      if ((i as any).length) if (!t) t = i;else {
        r && (t = ((t as any).slice as any)(), r = !1);
        for (let o: any = 0; (o as any) < ((i as any).length as any); o++) ((t as any).push as any)((i as any)[o]);
      }
    }
    return t ? (li as any)(r ? t : ((t as any).sort as any)(dt)) : Tt;
  }
  static from(e: any): any {
    switch ((e as any).length) {
      case 0:
        return Z;
      case 1:
        return (e as any)[0];
      default:
        return new (We as any)(((e as any).every as any)((t: any): any => t instanceof B) ? e : ((e as any).reduce as any)((t: any, r: any): any => ((t as any).concat as any)(r instanceof B ? r : (r as any).members), []));
    }
  }
  forEachSet(e: any): any {
    for (let t: any = 0; (t as any) < (((this as any).members as any).length as any); t++) ((((this as any).members as any)[t] as any).forEachSet as any)(e);
  }
}
function Cf(this: any, n: any, e: any, t: any, r: any, s: any, i: any, o: any): any {
  let l: any = ((n as any).slice as any)();
  for (let c: any = 0, u: any = i; (c as any) < (((t as any).maps as any).length as any); c++) {
    let d: any = 0;
    ((((t as any).maps as any)[c] as any).forEach as any)((f: any, h: any, p: any, m: any): any => {
      let g: any = ((m as any) - (p as any) as any) - ((h as any) - (f as any) as any);
      for (let y: any = 0; (y as any) < ((l as any).length as any); y += 3) {
        let b: any = (l as any)[(y as any) + (1 as any)];
        if ((b as any) < (0 as any) || (f as any) > (((b as any) + (u as any) as any) - (d as any) as any)) continue;
        let C: any = (((l as any)[y] as any) + (u as any) as any) - (d as any);
        (h as any) >= (C as any) ? (l as any)[(y as any) + (1 as any)] = (f as any) <= (C as any) ? -2 : -1 : (f as any) >= (u as any) && g && ((l as any)[y] += g, (l as any)[(y as any) + (1 as any)] += g);
      }
      d += g;
    }), u = ((((t as any).maps as any)[c] as any).map as any)(u, -1);
  }
  let a: any = !1;
  for (let c: any = 0; (c as any) < ((l as any).length as any); c += 3) if (((l as any)[(c as any) + (1 as any)] as any) < (0 as any)) {
    if (((l as any)[(c as any) + (1 as any)] as any) == (-2 as any)) {
      a = !0, (l as any)[(c as any) + (1 as any)] = -1;
      continue;
    }
    let u: any = ((t as any).map as any)(((n as any)[c] as any) + (i as any)),
      d: any = (u as any) - (s as any);
    if ((d as any) < (0 as any) || (d as any) >= (((r as any).content as any).size as any)) {
      a = !0;
      continue;
    }
    let f: any = ((t as any).map as any)(((n as any)[(c as any) + (1 as any)] as any) + (i as any), -1),
      h: any = (f as any) - (s as any),
      {
        index: p,
        offset: m
      }: any = (((r as any).content as any).findIndex as any)(d),
      g: any = ((r as any).maybeChild as any)(p);
    if (g && (m as any) == (d as any) && ((m as any) + ((g as any).nodeSize as any) as any) == (h as any)) {
      let y: any = (((l as any)[(c as any) + (2 as any)] as any).mapInner as any)(t, g, (u as any) + (1 as any), (((n as any)[c] as any) + (i as any) as any) + (1 as any), o);
      (y as any) != (Z as any) ? ((l as any)[c] = d, (l as any)[(c as any) + (1 as any)] = h, (l as any)[(c as any) + (2 as any)] = y) : ((l as any)[(c as any) + (1 as any)] = -2, a = !0);
    } else a = !0;
  }
  if (a) {
    let c: any = (Mf as any)(l, n, e, t, s, i, o),
      u: any = (Kn as any)(c, r, 0, o);
    e = (u as any).local;
    for (let d: any = 0; (d as any) < ((l as any).length as any); d += 3) ((l as any)[(d as any) + (1 as any)] as any) < (0 as any) && (((l as any).splice as any)(d, 3), d -= 3);
    for (let d: any = 0, f: any = 0; (d as any) < (((u as any).children as any).length as any); d += 3) {
      let h: any = ((u as any).children as any)[d];
      for (; (f as any) < ((l as any).length as any) && ((l as any)[f] as any) < (h as any);) f += 3;
      ((l as any).splice as any)(f, 0, ((u as any).children as any)[d], ((u as any).children as any)[(d as any) + (1 as any)], ((u as any).children as any)[(d as any) + (2 as any)]);
    }
  }
  return new (B as any)(((e as any).sort as any)(dt), l);
}
function Da(this: any, n: any, e: any): any {
  if (!e || !(n as any).length) return n;
  let t: any = [];
  for (let r: any = 0; (r as any) < ((n as any).length as any); r++) {
    let s: any = (n as any)[r];
    ((t as any).push as any)(new (ne as any)(((s as any).from as any) + (e as any), ((s as any).to as any) + (e as any), (s as any).type));
  }
  return t;
}
function Mf(this: any, n: any, e: any, t: any, r: any, s: any, i: any, o: any): any {
  function l(this: any, a: any, c: any): any {
    for (let u: any = 0; (u as any) < (((a as any).local as any).length as any); u++) {
      let d: any = ((((a as any).local as any)[u] as any).map as any)(r, s, c);
      d ? ((t as any).push as any)(d) : (o as any).onRemove && ((o as any).onRemove as any)((((a as any).local as any)[u] as any).spec);
    }
    for (let u: any = 0; (u as any) < (((a as any).children as any).length as any); u += 3) (l as any)(((a as any).children as any)[(u as any) + (2 as any)], ((((a as any).children as any)[u] as any) + (c as any) as any) + (1 as any));
  }
  for (let a: any = 0; (a as any) < ((n as any).length as any); a += 3) ((n as any)[(a as any) + (1 as any)] as any) == (-1 as any) && (l as any)((n as any)[(a as any) + (2 as any)], (((e as any)[a] as any) + (i as any) as any) + (1 as any));
  return t;
}
function Ia(this: any, n: any, e: any, t: any): any {
  if ((e as any).isLeaf) return null;
  let r: any = (t as any) + ((e as any).nodeSize as any),
    s: any = null;
  for (let i: any = 0, o: any; (i as any) < ((n as any).length as any); i++) (o = (n as any)[i]) && ((o as any).from as any) > (t as any) && ((o as any).to as any) < (r as any) && ((((s || (s = [])) as any).push as any)(o), (n as any)[i] = null);
  return s;
}
function Ra(this: any, n: any): any {
  let e: any = [];
  for (let t: any = 0; (t as any) < ((n as any).length as any); t++) ((n as any)[t] as any) != (null as any) && ((e as any).push as any)((n as any)[t]);
  return e;
}
function Kn(this: any, n: any, e: any, t: any, r: any): any {
  let s: any = [],
    i: any = !1;
  ((e as any).forEach as any)((l: any, a: any): any => {
    let c: any = (Ia as any)(n, l, (a as any) + (t as any));
    if (c) {
      i = !0;
      let u: any = (Kn as any)(c, l, ((t as any) + (a as any) as any) + (1 as any), r);
      (u as any) != (Z as any) && ((s as any).push as any)(a, (a as any) + ((l as any).nodeSize as any), u);
    }
  });
  let o: any = (((Da as any)(i ? (Ra as any)(n) : n, -t) as any).sort as any)(dt);
  for (let l: any = 0; (l as any) < ((o as any).length as any); l++) ((((o as any)[l] as any).type as any).valid as any)(e, (o as any)[l]) || ((r as any).onRemove && ((r as any).onRemove as any)(((o as any)[l] as any).spec), ((o as any).splice as any)(l--, 1));
  return (o as any).length || (s as any).length ? new (B as any)(o, s) : Z;
}
function dt(this: any, n: any, e: any): any {
  return ((n as any).from as any) - ((e as any).from as any) || ((n as any).to as any) - ((e as any).to as any);
}
function li(this: any, n: any): any {
  let e: any = n;
  for (let t: any = 0; (t as any) < (((e as any).length as any) - (1 as any) as any); t++) {
    let r: any = (e as any)[t];
    if (((r as any).from as any) != ((r as any).to as any)) for (let s: any = (t as any) + (1 as any); (s as any) < ((e as any).length as any); s++) {
      let i: any = (e as any)[s];
      if (((i as any).from as any) == ((r as any).from as any)) {
        ((i as any).to as any) != ((r as any).to as any) && ((e as any) == (n as any) && (e = ((n as any).slice as any)()), (e as any)[s] = ((i as any).copy as any)((i as any).from, (r as any).to), (xo as any)(e, (s as any) + (1 as any), ((i as any).copy as any)((r as any).to, (i as any).to)));
        continue;
      } else {
        ((i as any).from as any) < ((r as any).to as any) && ((e as any) == (n as any) && (e = ((n as any).slice as any)()), (e as any)[t] = ((r as any).copy as any)((r as any).from, (i as any).from), (xo as any)(e, s, ((r as any).copy as any)((i as any).from, (r as any).to)));
        break;
      }
    }
  }
  return e;
}
function xo(this: any, n: any, e: any, t: any): any {
  for (; (e as any) < ((n as any).length as any) && ((dt as any)(t, (n as any)[e]) as any) > (0 as any);) e++;
  ((n as any).splice as any)(e, 0, t);
}
function Qr(this: any, n: any): any {
  let e: any = [];
  return ((n as any).someProp as any)("decorations", (t: any): any => {
    let r: any = (t as any)((n as any).state);
    r && (r as any) != (Z as any) && ((e as any).push as any)(r);
  }), (n as any).cursorWrapper && ((e as any).push as any)(((B as any).create as any)(((n as any).state as any).doc, [((n as any).cursorWrapper as any).deco])), ((We as any).from as any)(e);
}
const Ef: any = {
    childList: !0,
    characterData: !0,
    characterDataOldValue: !0,
    attributes: !0,
    attributeOldValue: !0,
    subtree: !0
  },
  vf: any = le && (Ge as any) <= (11 as any);
class Tf {
  declare focusOffset: any;
  declare focusNode: any;
  declare anchorOffset: any;
  declare anchorNode: any;
  [key: string]: any;
  constructor() {
    (this as any).anchorNode = null, (this as any).anchorOffset = 0, (this as any).focusNode = null, (this as any).focusOffset = 0;
  }
  set(e: any): any {
    (this as any).anchorNode = (e as any).anchorNode, (this as any).anchorOffset = (e as any).anchorOffset, (this as any).focusNode = (e as any).focusNode, (this as any).focusOffset = (e as any).focusOffset;
  }
  clear(): any {
    (this as any).anchorNode = (this as any).focusNode = null;
  }
  eq(e: any): any {
    return ((e as any).anchorNode as any) == ((this as any).anchorNode as any) && ((e as any).anchorOffset as any) == ((this as any).anchorOffset as any) && ((e as any).focusNode as any) == ((this as any).focusNode as any) && ((e as any).focusOffset as any) == ((this as any).focusOffset as any);
  }
}
class Af {
  declare lastChangedTextNode: any;
  declare suppressingSelectionUpdates: any;
  declare onCharData: any;
  declare currentSelection: any;
  declare observer: any;
  declare flushingSoon: any;
  declare queue: any;
  declare handleDOMChange: any;
  declare view: any;
  [key: string]: any;
  constructor(e: any, t: any) {
    (this as any).view = e, (this as any).handleDOMChange = t, (this as any).queue = [], (this as any).flushingSoon = -1, (this as any).observer = null, (this as any).currentSelection = new (Tf as any)(), (this as any).onCharData = null, (this as any).suppressingSelectionUpdates = !1, (this as any).lastChangedTextNode = null, (this as any).observer = (window as any).MutationObserver && new ((window as any).MutationObserver as any)((r: any): any => {
      for (let s: any = 0; (s as any) < ((r as any).length as any); s++) (((this as any).queue as any).push as any)((r as any)[s]);
      le && (Ge as any) <= (11 as any) && ((r as any).some as any)((s: any): any => ((s as any).type as any) == ("childList" as any) && ((s as any).removedNodes as any).length || ((s as any).type as any) == ("characterData" as any) && (((s as any).oldValue as any).length as any) > ((((s as any).target as any).nodeValue as any).length as any)) ? ((this as any).flushSoon as any)() : ((this as any).flush as any)();
    }), vf && ((this as any).onCharData = (r: any): any => {
      (((this as any).queue as any).push as any)({
        target: (r as any).target,
        type: "characterData",
        oldValue: (r as any).prevValue
      }), ((this as any).flushSoon as any)();
    }), (this as any).onSelectionChange = (((this as any).onSelectionChange as any).bind as any)(this);
  }
  flushSoon(): any {
    ((this as any).flushingSoon as any) < (0 as any) && ((this as any).flushingSoon = ((window as any).setTimeout as any)((): any => {
      (this as any).flushingSoon = -1, ((this as any).flush as any)();
    }, 20));
  }
  forceFlush(): any {
    ((this as any).flushingSoon as any) > (-1 as any) && (((window as any).clearTimeout as any)((this as any).flushingSoon), (this as any).flushingSoon = -1, ((this as any).flush as any)());
  }
  start(): any {
    (this as any).observer && ((((this as any).observer as any).takeRecords as any)(), (((this as any).observer as any).observe as any)(((this as any).view as any).dom, Ef)), (this as any).onCharData && ((((this as any).view as any).dom as any).addEventListener as any)("DOMCharacterDataModified", (this as any).onCharData), ((this as any).connectSelection as any)();
  }
  stop(): any {
    if ((this as any).observer) {
      let e: any = (((this as any).observer as any).takeRecords as any)();
      if ((e as any).length) {
        for (let t: any = 0; (t as any) < ((e as any).length as any); t++) (((this as any).queue as any).push as any)((e as any)[t]);
        ((window as any).setTimeout as any)((): any => ((this as any).flush as any)(), 20);
      }
      (((this as any).observer as any).disconnect as any)();
    }
    (this as any).onCharData && ((((this as any).view as any).dom as any).removeEventListener as any)("DOMCharacterDataModified", (this as any).onCharData), ((this as any).disconnectSelection as any)();
  }
  connectSelection(): any {
    (((((this as any).view as any).dom as any).ownerDocument as any).addEventListener as any)("selectionchange", (this as any).onSelectionChange);
  }
  disconnectSelection(): any {
    (((((this as any).view as any).dom as any).ownerDocument as any).removeEventListener as any)("selectionchange", (this as any).onSelectionChange);
  }
  suppressSelectionUpdates(): any {
    (this as any).suppressingSelectionUpdates = !0, (setTimeout as any)((): any => (this as any).suppressingSelectionUpdates = !1, 50);
  }
  onSelectionChange(): any {
    if ((fo as any)((this as any).view)) {
      if ((this as any).suppressingSelectionUpdates) return (ze as any)((this as any).view);
      if (le && (Ge as any) <= (11 as any) && !((((this as any).view as any).state as any).selection as any).empty) {
        let e: any = (((this as any).view as any).domSelectionRange as any)();
        if ((e as any).focusNode && (mt as any)((e as any).focusNode, (e as any).focusOffset, (e as any).anchorNode, (e as any).anchorOffset)) return ((this as any).flushSoon as any)();
      }
      ((this as any).flush as any)();
    }
  }
  setCurSelection(): any {
    (((this as any).currentSelection as any).set as any)((((this as any).view as any).domSelectionRange as any)());
  }
  ignoreSelectionChange(e: any): any {
    if (!(e as any).focusNode) return !0;
    let t: any = new (Set as any)(),
      r: any;
    for (let i: any = (e as any).focusNode; i; i = (Lt as any)(i)) ((t as any).add as any)(i);
    for (let i: any = (e as any).anchorNode; i; i = (Lt as any)(i)) if (((t as any).has as any)(i)) {
      r = i;
      break;
    }
    let s: any = r && ((((this as any).view as any).docView as any).nearestDesc as any)(r);
    if (s && ((s as any).ignoreMutation as any)({
      type: "selection",
      target: ((r as any).nodeType as any) == (3 as any) ? (r as any).parentNode : r
    })) return ((this as any).setCurSelection as any)(), !0;
  }
  pendingRecords(): any {
    if ((this as any).observer) for (let e of (((this as any).observer as any).takeRecords as any)()) (((this as any).queue as any).push as any)(e);
    return (this as any).queue;
  }
  flush(): any {
    let {
      view: e
    }: any = this;
    if (!(e as any).docView || ((this as any).flushingSoon as any) > (-1 as any)) return;
    let t: any = ((this as any).pendingRecords as any)();
    (t as any).length && ((this as any).queue = []);
    let r: any = ((e as any).domSelectionRange as any)(),
      s: any = !(this as any).suppressingSelectionUpdates && !(((this as any).currentSelection as any).eq as any)(r) && (fo as any)(e) && !((this as any).ignoreSelectionChange as any)(r),
      i: any = -1,
      o: any = -1,
      l: any = !1,
      a: any = [];
    if ((e as any).editable) for (let u: any = 0; (u as any) < ((t as any).length as any); u++) {
      let d: any = ((this as any).registerMutation as any)((t as any)[u], a);
      d && (i = (i as any) < (0 as any) ? (d as any).from : ((Math as any).min as any)((d as any).from, i), o = (o as any) < (0 as any) ? (d as any).to : ((Math as any).max as any)((d as any).to, o), (d as any).typeOver && (l = !0));
    }
    if (ye && (a as any).length) {
      let u: any = ((a as any).filter as any)((d: any): any => ((d as any).nodeName as any) == ("BR" as any));
      if (((u as any).length as any) == (2 as any)) {
        let [d, f]: any = u;
        (d as any).parentNode && (((d as any).parentNode as any).parentNode as any) == ((f as any).parentNode as any) ? ((f as any).remove as any)() : ((d as any).remove as any)();
      } else {
        let {
          focusNode: d
        }: any = (this as any).currentSelection;
        for (let f of u) {
          let h: any = (f as any).parentNode;
          h && ((h as any).nodeName as any) == ("LI" as any) && (!d || ((Df as any)(e, d) as any) != (h as any)) && ((f as any).remove as any)();
        }
      }
    } else if ((U || ee) && ((a as any).some as any)((u: any): any => ((u as any).nodeName as any) == ("BR" as any)) && ((((e as any).input as any).lastKeyCode as any) == (8 as any) || (((e as any).input as any).lastKeyCode as any) == (46 as any))) {
      for (let u of a) if (((u as any).nodeName as any) == ("BR" as any) && (u as any).parentNode) {
        let d: any = (u as any).nextSibling;
        d && ((d as any).nodeType as any) == (1 as any) && ((d as any).contentEditable as any) == ("false" as any) && (((u as any).parentNode as any).removeChild as any)(u);
      }
    }
    let c: any = null;
    (i as any) < (0 as any) && s && (((e as any).input as any).lastFocus as any) > ((((Date as any).now as any)() as any) - (200 as any) as any) && (((Math as any).max as any)(((e as any).input as any).lastTouch, (((e as any).input as any).lastClick as any).time) as any) < ((((Date as any).now as any)() as any) - (300 as any) as any) && (Nr as any)(r) && (c = (ei as any)(e)) && ((c as any).eq as any)(((O as any).near as any)(((((e as any).state as any).doc as any).resolve as any)(0), 1)) ? (((e as any).input as any).lastFocus = 0, (ze as any)(e), (((this as any).currentSelection as any).set as any)(r), ((e as any).scrollToSelection as any)()) : ((i as any) > (-1 as any) || s) && ((i as any) > (-1 as any) && ((((e as any).docView as any).markDirty as any)(i, o), (Nf as any)(e)), ((this as any).handleDOMChange as any)(i, o, l, a), (e as any).docView && ((e as any).docView as any).dirty ? ((e as any).updateState as any)((e as any).state) : (((this as any).currentSelection as any).eq as any)(r) || (ze as any)(e), (((this as any).currentSelection as any).set as any)(r));
  }
  registerMutation(e: any, t: any): any {
    if ((((t as any).indexOf as any)((e as any).target) as any) > (-1 as any)) return null;
    let r: any = ((((this as any).view as any).docView as any).nearestDesc as any)((e as any).target);
    if (((e as any).type as any) == ("attributes" as any) && ((r as any) == (((this as any).view as any).docView as any) || ((e as any).attributeName as any) == ("contenteditable" as any) || ((e as any).attributeName as any) == ("style" as any) && !(e as any).oldValue && !(((e as any).target as any).getAttribute as any)("style")) || !r || ((r as any).ignoreMutation as any)(e)) return null;
    if (((e as any).type as any) == ("childList" as any)) {
      for (let u: any = 0; (u as any) < (((e as any).addedNodes as any).length as any); u++) {
        let d: any = ((e as any).addedNodes as any)[u];
        ((t as any).push as any)(d), ((d as any).nodeType as any) == (3 as any) && ((this as any).lastChangedTextNode = d);
      }
      if ((r as any).contentDOM && ((r as any).contentDOM as any) != ((r as any).dom as any) && !(((r as any).contentDOM as any).contains as any)((e as any).target)) return {
        from: (r as any).posBefore,
        to: (r as any).posAfter
      };
      let s: any = (e as any).previousSibling,
        i: any = (e as any).nextSibling;
      if (le && (Ge as any) <= (11 as any) && ((e as any).addedNodes as any).length) for (let u: any = 0; (u as any) < (((e as any).addedNodes as any).length as any); u++) {
        let {
          previousSibling: d,
          nextSibling: f
        }: any = ((e as any).addedNodes as any)[u];
        (!d || (((((Array as any).prototype as any).indexOf as any).call as any)((e as any).addedNodes, d) as any) < (0 as any)) && (s = d), (!f || (((((Array as any).prototype as any).indexOf as any).call as any)((e as any).addedNodes, f) as any) < (0 as any)) && (i = f);
      }
      let o: any = s && ((s as any).parentNode as any) == ((e as any).target as any) ? ((X as any)(s) as any) + (1 as any) : 0,
        l: any = ((r as any).localPosFromDOM as any)((e as any).target, o, -1),
        a: any = i && ((i as any).parentNode as any) == ((e as any).target as any) ? (X as any)(i) : (((e as any).target as any).childNodes as any).length,
        c: any = ((r as any).localPosFromDOM as any)((e as any).target, a, 1);
      return {
        from: l,
        to: c
      };
    } else return ((e as any).type as any) == ("attributes" as any) ? {
      from: ((r as any).posAtStart as any) - ((r as any).border as any),
      to: ((r as any).posAtEnd as any) + ((r as any).border as any)
    } : ((this as any).lastChangedTextNode = (e as any).target, {
      from: (r as any).posAtStart,
      to: (r as any).posAtEnd,
      typeOver: (((e as any).target as any).nodeValue as any) == ((e as any).oldValue as any)
    });
  }
}
let So: any = new (WeakMap as any)(),
  wo: any = !1;
function Nf(this: any, n: any): any {
  if (!((So as any).has as any)(n) && (((So as any).set as any)(n, null), (((["normal", "nowrap", "pre-line"] as any).indexOf as any)(((getComputedStyle as any)((n as any).dom) as any).whiteSpace) as any) !== (-1 as any))) {
    if ((n as any).requiresGeckoHackNode = ye, wo) return;
    ((console as any).warn as any)("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), wo = !0;
  }
}
function Co(this: any, n: any, e: any): any {
  let t: any = (e as any).startContainer,
    r: any = (e as any).startOffset,
    s: any = (e as any).endContainer,
    i: any = (e as any).endOffset,
    o: any = ((n as any).domAtPos as any)((((n as any).state as any).selection as any).anchor);
  return (mt as any)((o as any).node, (o as any).offset, s, i) && ([t, r, s, i] = [s, i, t, r]), {
    anchorNode: t,
    anchorOffset: r,
    focusNode: s,
    focusOffset: i
  };
}
function Of(this: any, n: any, e: any): any {
  if ((e as any).getComposedRanges) {
    let s: any = (((e as any).getComposedRanges as any)((n as any).root) as any)[0];
    if (s) return (Co as any)(n, s);
  }
  let t: any;
  function r(this: any, s: any): any {
    ((s as any).preventDefault as any)(), ((s as any).stopImmediatePropagation as any)(), t = (((s as any).getTargetRanges as any)() as any)[0];
  }
  return (((n as any).dom as any).addEventListener as any)("beforeinput", r, !0), ((document as any).execCommand as any)("indent"), (((n as any).dom as any).removeEventListener as any)("beforeinput", r, !0), t ? (Co as any)(n, t) : null;
}
function Df(this: any, n: any, e: any): any {
  for (let t: any = (e as any).parentNode; t && (t as any) != ((n as any).dom as any); t = (t as any).parentNode) {
    let r: any = (((n as any).docView as any).nearestDesc as any)(t, !0);
    if (r && ((r as any).node as any).isBlock) return t;
  }
  return null;
}
function If(this: any, n: any, e: any, t: any): any {
  let {
      node: r,
      fromOffset: s,
      toOffset: i,
      from: o,
      to: l
    }: any = (((n as any).docView as any).parseRange as any)(e, t),
    a: any = ((n as any).domSelectionRange as any)(),
    c: any,
    u: any = (a as any).anchorNode;
  if (u && (((n as any).dom as any).contains as any)(((u as any).nodeType as any) == (1 as any) ? u : (u as any).parentNode) && (c = [{
    node: u,
    offset: (a as any).anchorOffset
  }], (Nr as any)(a) || ((c as any).push as any)({
    node: (a as any).focusNode,
    offset: (a as any).focusOffset
  })), U && (((n as any).input as any).lastKeyCode as any) === (8 as any)) for (let g: any = i; (g as any) > (s as any); g--) {
    let y: any = ((r as any).childNodes as any)[(g as any) - (1 as any)],
      b: any = (y as any).pmViewDesc;
    if (((y as any).nodeName as any) == ("BR" as any) && !b) {
      i = g;
      break;
    }
    if (!b || (b as any).size) break;
  }
  let d: any = ((n as any).state as any).doc,
    f: any = ((n as any).someProp as any)("domParser") || ((Le as any).fromSchema as any)(((n as any).state as any).schema),
    h: any = ((d as any).resolve as any)(o),
    p: any = null,
    m: any = ((f as any).parse as any)(r, {
      topNode: (h as any).parent,
      topMatch: (((h as any).parent as any).contentMatchAt as any)(((h as any).index as any)()),
      topOpen: !0,
      from: s,
      to: i,
      preserveWhitespace: ((((h as any).parent as any).type as any).whitespace as any) == ("pre" as any) ? "full" : !0,
      findPositions: c,
      ruleFromNode: Rf,
      context: h
    });
  if (c && (((c as any)[0] as any).pos as any) != (null as any)) {
    let g: any = ((c as any)[0] as any).pos,
      y: any = (c as any)[1] && ((c as any)[1] as any).pos;
    (y as any) == (null as any) && (y = g), p = {
      anchor: (g as any) + (o as any),
      head: (y as any) + (o as any)
    };
  }
  return {
    doc: m,
    sel: p,
    from: o,
    to: l
  };
}
function Rf(this: any, n: any): any {
  let e: any = (n as any).pmViewDesc;
  if (e) return ((e as any).parseRule as any)();
  if (((n as any).nodeName as any) == ("BR" as any) && (n as any).parentNode) {
    if (ee && ((/^(ul|ol)$/i as any).test as any)(((n as any).parentNode as any).nodeName)) {
      let t: any = ((document as any).createElement as any)("div");
      return ((t as any).appendChild as any)(((document as any).createElement as any)("li")), {
        skip: t
      };
    } else if ((((n as any).parentNode as any).lastChild as any) == (n as any) || ee && ((/^(tr|table)$/i as any).test as any)(((n as any).parentNode as any).nodeName)) return {
      ignore: !0
    };
  } else if (((n as any).nodeName as any) == ("IMG" as any) && ((n as any).getAttribute as any)("mark-placeholder")) return {
    ignore: !0
  };
  return null;
}
const Pf: any = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function Lf(this: any, n: any, e: any, t: any, r: any, s: any): any {
  let i: any = ((n as any).input as any).compositionPendingChanges || ((n as any).composing ? ((n as any).input as any).compositionID : 0);
  if (((n as any).input as any).compositionPendingChanges = 0, (e as any) < (0 as any)) {
    let E: any = (((n as any).input as any).lastSelectionTime as any) > ((((Date as any).now as any)() as any) - (50 as any) as any) ? ((n as any).input as any).lastSelectionOrigin : null,
      I: any = (ei as any)(n, E);
    if (I && !((((n as any).state as any).selection as any).eq as any)(I)) {
      if (U && Re && (((n as any).input as any).lastKeyCode as any) === (13 as any) && ((((Date as any).now as any)() as any) - (100 as any) as any) < (((n as any).input as any).lastKeyCodeTime as any) && ((n as any).someProp as any)("handleKeyDown", (ae: any): any => (ae as any)(n, (st as any)(13, "Enter")))) return;
      let R: any = ((((n as any).state as any).tr as any).setSelection as any)(I);
      (E as any) == ("pointer" as any) ? ((R as any).setMeta as any)("pointer", !0) : (E as any) == ("key" as any) && ((R as any).scrollIntoView as any)(), i && ((R as any).setMeta as any)("composition", i), ((n as any).dispatch as any)(R);
    }
    return;
  }
  let o: any = ((((n as any).state as any).doc as any).resolve as any)(e),
    l: any = ((o as any).sharedDepth as any)(t);
  e = ((o as any).before as any)((l as any) + (1 as any)), t = ((((((n as any).state as any).doc as any).resolve as any)(t) as any).after as any)((l as any) + (1 as any));
  let a: any = ((n as any).state as any).selection,
    c: any = (If as any)(n, e, t),
    u: any = ((n as any).state as any).doc,
    d: any = ((u as any).slice as any)((c as any).from, (c as any).to),
    f: any,
    h: any;
  (((n as any).input as any).lastKeyCode as any) === (8 as any) && ((((Date as any).now as any)() as any) - (100 as any) as any) < (((n as any).input as any).lastKeyCodeTime as any) ? (f = (((n as any).state as any).selection as any).to, h = "end") : (f = (((n as any).state as any).selection as any).from, h = "start"), ((n as any).input as any).lastKeyCode = null;
  let p: any = ($f as any)((d as any).content, ((c as any).doc as any).content, (c as any).from, f, h);
  if (p && ((n as any).input as any).domChangeCount++, (zt && (((n as any).input as any).lastIOSEnter as any) > ((((Date as any).now as any)() as any) - (225 as any) as any) || Re) && ((s as any).some as any)((E: any): any => ((E as any).nodeType as any) == (1 as any) && !((Pf as any).test as any)((E as any).nodeName)) && (!p || ((p as any).endA as any) >= ((p as any).endB as any)) && ((n as any).someProp as any)("handleKeyDown", (E: any): any => (E as any)(n, (st as any)(13, "Enter")))) {
    ((n as any).input as any).lastIOSEnter = 0;
    return;
  }
  if (!p) if (r && a instanceof N && !(a as any).empty && (((a as any).$head as any).sameParent as any)((a as any).$anchor) && !(n as any).composing && !((c as any).sel && (((c as any).sel as any).anchor as any) != (((c as any).sel as any).head as any))) p = {
    start: (a as any).from,
    endA: (a as any).to,
    endB: (a as any).to
  };else {
    if ((c as any).sel) {
      let E: any = (Mo as any)(n, ((n as any).state as any).doc, (c as any).sel);
      if (E && !((E as any).eq as any)(((n as any).state as any).selection)) {
        let I: any = ((((n as any).state as any).tr as any).setSelection as any)(E);
        i && ((I as any).setMeta as any)("composition", i), ((n as any).dispatch as any)(I);
      }
    }
    return;
  }
  ((((n as any).state as any).selection as any).from as any) < ((((n as any).state as any).selection as any).to as any) && ((p as any).start as any) == ((p as any).endB as any) && ((n as any).state as any).selection instanceof N && (((p as any).start as any) > ((((n as any).state as any).selection as any).from as any) && ((p as any).start as any) <= (((((n as any).state as any).selection as any).from as any) + (2 as any) as any) && ((((n as any).state as any).selection as any).from as any) >= ((c as any).from as any) ? (p as any).start = (((n as any).state as any).selection as any).from : ((p as any).endA as any) < ((((n as any).state as any).selection as any).to as any) && ((p as any).endA as any) >= (((((n as any).state as any).selection as any).to as any) - (2 as any) as any) && ((((n as any).state as any).selection as any).to as any) <= ((c as any).to as any) && ((p as any).endB += ((((n as any).state as any).selection as any).to as any) - ((p as any).endA as any), (p as any).endA = (((n as any).state as any).selection as any).to)), le && (Ge as any) <= (11 as any) && ((p as any).endB as any) == (((p as any).start as any) + (1 as any) as any) && ((p as any).endA as any) == ((p as any).start as any) && ((p as any).start as any) > ((c as any).from as any) && ((((c as any).doc as any).textBetween as any)((((p as any).start as any) - ((c as any).from as any) as any) - (1 as any), (((p as any).start as any) - ((c as any).from as any) as any) + (1 as any)) as any) == ("  " as any) && ((p as any).start--, (p as any).endA--, (p as any).endB--);
  let m: any = (((c as any).doc as any).resolveNoCache as any)(((p as any).start as any) - ((c as any).from as any)),
    g: any = (((c as any).doc as any).resolveNoCache as any)(((p as any).endB as any) - ((c as any).from as any)),
    y: any = ((u as any).resolve as any)((p as any).start),
    b: any = ((m as any).sameParent as any)(g) && ((m as any).parent as any).inlineContent && (((y as any).end as any)() as any) >= ((p as any).endA as any);
  if ((zt && (((n as any).input as any).lastIOSEnter as any) > ((((Date as any).now as any)() as any) - (225 as any) as any) && (!b || ((s as any).some as any)((E: any): any => ((E as any).nodeName as any) == ("DIV" as any) || ((E as any).nodeName as any) == ("P" as any))) || !b && ((m as any).pos as any) < ((((c as any).doc as any).content as any).size as any) && (!((m as any).sameParent as any)(g) || !((m as any).parent as any).inlineContent) && ((m as any).pos as any) < ((g as any).pos as any) && !((/\S/ as any).test as any)((((c as any).doc as any).textBetween as any)((m as any).pos, (g as any).pos, "", ""))) && ((n as any).someProp as any)("handleKeyDown", (E: any): any => (E as any)(n, (st as any)(13, "Enter")))) {
    ((n as any).input as any).lastIOSEnter = 0;
    return;
  }
  if (((((n as any).state as any).selection as any).anchor as any) > ((p as any).start as any) && (Bf as any)(u, (p as any).start, (p as any).endA, m, g) && ((n as any).someProp as any)("handleKeyDown", (E: any): any => (E as any)(n, (st as any)(8, "Backspace")))) {
    Re && U && (((n as any).domObserver as any).suppressSelectionUpdates as any)();
    return;
  }
  U && ((p as any).endB as any) == ((p as any).start as any) && (((n as any).input as any).lastChromeDelete = ((Date as any).now as any)()), Re && !b && (((m as any).start as any)() as any) != (((g as any).start as any)() as any) && ((g as any).parentOffset as any) == (0 as any) && ((m as any).depth as any) == ((g as any).depth as any) && (c as any).sel && (((c as any).sel as any).anchor as any) == (((c as any).sel as any).head as any) && (((c as any).sel as any).head as any) == ((p as any).endA as any) && ((p as any).endB -= 2, g = (((c as any).doc as any).resolveNoCache as any)(((p as any).endB as any) - ((c as any).from as any)), (setTimeout as any)((): any => {
    ((n as any).someProp as any)("handleKeyDown", function (this: any, E: any): any {
      return (E as any)(n, (st as any)(13, "Enter"));
    });
  }, 20));
  let C: any = (p as any).start,
    M: any = (p as any).endA,
    S: any = (E: any): any => {
      let I: any = E || ((((n as any).state as any).tr as any).replace as any)(C, M, (((c as any).doc as any).slice as any)(((p as any).start as any) - ((c as any).from as any), ((p as any).endB as any) - ((c as any).from as any)));
      if ((c as any).sel) {
        let R: any = (Mo as any)(n, (I as any).doc, (c as any).sel);
        R && !(U && (n as any).composing && (R as any).empty && (((p as any).start as any) != ((p as any).endB as any) || (((n as any).input as any).lastChromeDelete as any) < ((((Date as any).now as any)() as any) - (100 as any) as any)) && (((R as any).head as any) == (C as any) || ((R as any).head as any) == (((((I as any).mapping as any).map as any)(M) as any) - (1 as any) as any)) || le && (R as any).empty && ((R as any).head as any) == (C as any)) && ((I as any).setSelection as any)(R);
      }
      return i && ((I as any).setMeta as any)("composition", i), ((I as any).scrollIntoView as any)();
    },
    A: any;
  if (b) {
    if (((m as any).pos as any) == ((g as any).pos as any)) {
      le && (Ge as any) <= (11 as any) && ((m as any).parentOffset as any) == (0 as any) && ((((n as any).domObserver as any).suppressSelectionUpdates as any)(), (setTimeout as any)((): any => (ze as any)(n), 20));
      let E: any = (S as any)(((((n as any).state as any).tr as any).delete as any)(C, M)),
        I: any = ((((u as any).resolve as any)((p as any).start) as any).marksAcross as any)(((u as any).resolve as any)((p as any).endA));
      I && ((E as any).ensureMarks as any)(I), ((n as any).dispatch as any)(E);
    } else if (((p as any).endA as any) == ((p as any).endB as any) && (A = (zf as any)(((((m as any).parent as any).content as any).cut as any)((m as any).parentOffset, (g as any).parentOffset), ((((y as any).parent as any).content as any).cut as any)((y as any).parentOffset, ((p as any).endA as any) - (((y as any).start as any)() as any))))) {
      let E: any = (S as any)(((n as any).state as any).tr);
      ((A as any).type as any) == ("add" as any) ? ((E as any).addMark as any)(C, M, (A as any).mark) : ((E as any).removeMark as any)(C, M, (A as any).mark), ((n as any).dispatch as any)(E);
    } else if (((((m as any).parent as any).child as any)(((m as any).index as any)()) as any).isText && (((m as any).index as any)() as any) == ((((g as any).index as any)() as any) - (((g as any).textOffset ? 0 : 1) as any) as any)) {
      let E: any = (((m as any).parent as any).textBetween as any)((m as any).parentOffset, (g as any).parentOffset),
        I: any = (): any => (S as any)(((((n as any).state as any).tr as any).insertText as any)(E, C, M));
      ((n as any).someProp as any)("handleTextInput", (R: any): any => (R as any)(n, C, M, E, I)) || ((n as any).dispatch as any)((I as any)());
    } else ((n as any).dispatch as any)((S as any)());
  } else ((n as any).dispatch as any)((S as any)());
}
function Mo(this: any, n: any, e: any, t: any): any {
  return (((Math as any).max as any)((t as any).anchor, (t as any).head) as any) > (((e as any).content as any).size as any) ? null : (ti as any)(n, ((e as any).resolve as any)((t as any).anchor), ((e as any).resolve as any)((t as any).head));
}
function zf(this: any, n: any, e: any): any {
  let t: any = ((n as any).firstChild as any).marks,
    r: any = ((e as any).firstChild as any).marks,
    s: any = t,
    i: any = r,
    o: any,
    l: any,
    a: any;
  for (let u: any = 0; (u as any) < ((r as any).length as any); u++) s = (((r as any)[u] as any).removeFromSet as any)(s);
  for (let u: any = 0; (u as any) < ((t as any).length as any); u++) i = (((t as any)[u] as any).removeFromSet as any)(i);
  if (((s as any).length as any) == (1 as any) && ((i as any).length as any) == (0 as any)) l = (s as any)[0], o = "add", a = (u: any): any => ((u as any).mark as any)(((l as any).addToSet as any)((u as any).marks));else if (((s as any).length as any) == (0 as any) && ((i as any).length as any) == (1 as any)) l = (i as any)[0], o = "remove", a = (u: any): any => ((u as any).mark as any)(((l as any).removeFromSet as any)((u as any).marks));else return null;
  let c: any = [];
  for (let u: any = 0; (u as any) < ((e as any).childCount as any); u++) ((c as any).push as any)((a as any)(((e as any).child as any)(u)));
  if (((((k as any).from as any)(c) as any).eq as any)(n)) return {
    mark: l,
    type: o
  };
}
function Bf(this: any, n: any, e: any, t: any, r: any, s: any): any {
  if (((t as any) - (e as any) as any) <= (((s as any).pos as any) - ((r as any).pos as any) as any) || ((Zr as any)(r, !0, !1) as any) < ((s as any).pos as any)) return !1;
  let i: any = ((n as any).resolve as any)(e);
  if (!((r as any).parent as any).isTextblock) {
    let l: any = (i as any).nodeAfter;
    return (l as any) != (null as any) && (t as any) == ((e as any) + ((l as any).nodeSize as any) as any);
  }
  if (((i as any).parentOffset as any) < ((((i as any).parent as any).content as any).size as any) || !((i as any).parent as any).isTextblock) return !1;
  let o: any = ((n as any).resolve as any)((Zr as any)(i, !0, !0));
  return !((o as any).parent as any).isTextblock || ((o as any).pos as any) > (t as any) || ((Zr as any)(o, !0, !1) as any) < (t as any) ? !1 : ((((((r as any).parent as any).content as any).cut as any)((r as any).parentOffset) as any).eq as any)(((o as any).parent as any).content);
}
function Zr(this: any, n: any, e: any, t: any): any {
  let r: any = (n as any).depth,
    s: any = e ? ((n as any).end as any)() : (n as any).pos;
  for (; (r as any) > (0 as any) && (e || (((n as any).indexAfter as any)(r) as any) == ((((n as any).node as any)(r) as any).childCount as any));) r--, s++, e = !1;
  if (t) {
    let i: any = ((((n as any).node as any)(r) as any).maybeChild as any)(((n as any).indexAfter as any)(r));
    for (; i && !(i as any).isLeaf;) i = (i as any).firstChild, s++;
  }
  return s;
}
function $f(this: any, n: any, e: any, t: any, r: any, s: any): any {
  let i: any = ((n as any).findDiffStart as any)(e, t);
  if ((i as any) == (null as any)) return null;
  let {
    a: o,
    b: l
  }: any = ((n as any).findDiffEnd as any)(e, (t as any) + ((n as any).size as any), (t as any) + ((e as any).size as any));
  if ((s as any) == ("end" as any)) {
    let a: any = ((Math as any).max as any)(0, (i as any) - (((Math as any).min as any)(o, l) as any));
    r -= ((o as any) + (a as any) as any) - (i as any);
  }
  if ((o as any) < (i as any) && ((n as any).size as any) < ((e as any).size as any)) {
    let a: any = (r as any) <= (i as any) && (r as any) >= (o as any) ? (i as any) - (r as any) : 0;
    i -= a, i && (i as any) < ((e as any).size as any) && (Eo as any)(((e as any).textBetween as any)((i as any) - (1 as any), (i as any) + (1 as any))) && (i += a ? 1 : -1), l = (i as any) + ((l as any) - (o as any) as any), o = i;
  } else if ((l as any) < (i as any)) {
    let a: any = (r as any) <= (i as any) && (r as any) >= (l as any) ? (i as any) - (r as any) : 0;
    i -= a, i && (i as any) < ((n as any).size as any) && (Eo as any)(((n as any).textBetween as any)((i as any) - (1 as any), (i as any) + (1 as any))) && (i += a ? 1 : -1), o = (i as any) + ((o as any) - (l as any) as any), l = i;
  }
  return {
    start: i,
    endA: o,
    endB: l
  };
}
function Eo(this: any, n: any): any {
  if (((n as any).length as any) != (2 as any)) return !1;
  let e: any = ((n as any).charCodeAt as any)(0),
    t: any = ((n as any).charCodeAt as any)(1);
  return (e as any) >= (56320 as any) && (e as any) <= (57343 as any) && (t as any) >= (55296 as any) && (t as any) <= (56319 as any);
}
class Pa {
  declare domObserver: any;
  declare docView: any;
  declare nodeViews: any;
  declare editable: any;
  declare dom: any;
  declare dispatch: any;
  declare directPlugins: any;
  declare state: any;
  declare _props: any;
  declare dragging: any;
  declare requiresGeckoHackNode: any;
  declare pluginViews: any;
  declare prevDirectPlugins: any;
  declare input: any;
  declare lastSelectedViewDesc: any;
  declare cursorWrapper: any;
  declare markCursor: any;
  declare mounted: any;
  declare trackWrites: any;
  declare focused: any;
  declare _root: any;
  [key: string]: any;
  constructor(e: any, t: any) {
    (this as any)._root = null, (this as any).focused = !1, (this as any).trackWrites = null, (this as any).mounted = !1, (this as any).markCursor = null, (this as any).cursorWrapper = null, (this as any).lastSelectedViewDesc = void 0, (this as any).input = new (ef as any)(), (this as any).prevDirectPlugins = [], (this as any).pluginViews = [], (this as any).requiresGeckoHackNode = !1, (this as any).dragging = null, (this as any)._props = t, (this as any).state = (t as any).state, (this as any).directPlugins = (t as any).plugins || [], (((this as any).directPlugins as any).forEach as any)(Oo), (this as any).dispatch = (((this as any).dispatch as any).bind as any)(this), (this as any).dom = e && (e as any).mount || ((document as any).createElement as any)("div"), e && ((e as any).appendChild ? ((e as any).appendChild as any)((this as any).dom) : (typeof e as any) == ("function" as any) ? (e as any)((this as any).dom) : (e as any).mount && ((this as any).mounted = !0)), (this as any).editable = (Ao as any)(this), (To as any)(this), (this as any).nodeViews = (No as any)(this), (this as any).docView = (io as any)(((this as any).state as any).doc, (vo as any)(this), (Qr as any)(this), (this as any).dom, this), (this as any).domObserver = new (Af as any)(this, (r: any, s: any, i: any, o: any): any => (Lf as any)(this, r, s, i, o)), (((this as any).domObserver as any).start as any)(), (tf as any)(this), ((this as any).updatePluginViews as any)();
  }
  get composing(): any {
    return ((this as any).input as any).composing;
  }
  get props(): any {
    if ((((this as any)._props as any).state as any) != ((this as any).state as any)) {
      let e: any = (this as any)._props;
      (this as any)._props = {};
      for (let t in e) ((this as any)._props as any)[t] = (e as any)[t];
      ((this as any)._props as any).state = (this as any).state;
    }
    return (this as any)._props;
  }
  update(e: any): any {
    ((e as any).handleDOMEvents as any) != (((this as any)._props as any).handleDOMEvents as any) && (Ns as any)(this);
    let t: any = (this as any)._props;
    (this as any)._props = e, (e as any).plugins && ((((e as any).plugins as any).forEach as any)(Oo), (this as any).directPlugins = (e as any).plugins), ((this as any).updateStateInner as any)((e as any).state, t);
  }
  setProps(e: any): any {
    let t: any = {};
    for (let r in (this as any)._props) (t as any)[r] = ((this as any)._props as any)[r];
    (t as any).state = (this as any).state;
    for (let r in e) (t as any)[r] = (e as any)[r];
    ((this as any).update as any)(t);
  }
  updateState(e: any): any {
    ((this as any).updateStateInner as any)(e, (this as any)._props);
  }
  updateStateInner(e: any, t: any): any {
    var r: any;
    let s: any = (this as any).state,
      i: any = !1,
      o: any = !1;
    (e as any).storedMarks && (this as any).composing && ((Ta as any)(this), o = !0), (this as any).state = e;
    let l: any = ((s as any).plugins as any) != ((e as any).plugins as any) || (((this as any)._props as any).plugins as any) != ((t as any).plugins as any);
    if (l || (((this as any)._props as any).plugins as any) != ((t as any).plugins as any) || (((this as any)._props as any).nodeViews as any) != ((t as any).nodeViews as any)) {
      let h: any = (No as any)(this);
      (Hf as any)(h, (this as any).nodeViews) && ((this as any).nodeViews = h, i = !0);
    }
    (l || ((t as any).handleDOMEvents as any) != (((this as any)._props as any).handleDOMEvents as any)) && (Ns as any)(this), (this as any).editable = (Ao as any)(this), (To as any)(this);
    let a: any = (Qr as any)(this),
      c: any = (vo as any)(this),
      u: any = ((s as any).plugins as any) != ((e as any).plugins as any) && !(((s as any).doc as any).eq as any)((e as any).doc) ? "reset" : ((e as any).scrollToSelection as any) > ((s as any).scrollToSelection as any) ? "to selection" : "preserve",
      d: any = i || !(((this as any).docView as any).matchesNode as any)((e as any).doc, c, a);
    (d || !(((e as any).selection as any).eq as any)((s as any).selection)) && (o = !0);
    let f: any = (u as any) == ("preserve" as any) && o && ((((this as any).dom as any).style as any).overflowAnchor as any) == (null as any) && (md as any)(this);
    if (o) {
      (((this as any).domObserver as any).stop as any)();
      let h: any = d && (le || U) && !(this as any).composing && !((s as any).selection as any).empty && !((e as any).selection as any).empty && (Ff as any)((s as any).selection, (e as any).selection);
      if (d) {
        let p: any = U ? (this as any).trackWrites = (((this as any).domSelectionRange as any)() as any).focusNode : null;
        (this as any).composing && (((this as any).input as any).compositionNode = (gf as any)(this)), (i || !(((this as any).docView as any).update as any)((e as any).doc, c, a, this)) && ((((this as any).docView as any).updateOuterDeco as any)(c), (((this as any).docView as any).destroy as any)(), (this as any).docView = (io as any)((e as any).doc, c, a, (this as any).dom, this)), p && !(this as any).trackWrites && (h = !0);
      }
      h || !(((this as any).input as any).mouseDown && ((((this as any).domObserver as any).currentSelection as any).eq as any)(((this as any).domSelectionRange as any)()) && (Fd as any)(this)) ? (ze as any)(this, h) : ((ma as any)(this, (e as any).selection), (((this as any).domObserver as any).setCurSelection as any)()), (((this as any).domObserver as any).start as any)();
    }
    ((this as any).updatePluginViews as any)(s), !(((r = (this as any).dragging) as any) === (null as any) || (r as any) === (void 0 as any)) && (r as any).node && !(((s as any).doc as any).eq as any)((e as any).doc) && ((this as any).updateDraggedNode as any)((this as any).dragging, s), (u as any) == ("reset" as any) ? ((this as any).dom as any).scrollTop = 0 : (u as any) == ("to selection" as any) ? ((this as any).scrollToSelection as any)() : f && (gd as any)(f);
  }
  scrollToSelection(): any {
    let e: any = (((this as any).domSelectionRange as any)() as any).focusNode;
    if (!(!e || !(((this as any).dom as any).contains as any)(((e as any).nodeType as any) == (1 as any) ? e : (e as any).parentNode))) {
      if (!((this as any).someProp as any)("handleScrollToSelection", (t: any): any => (t as any)(this))) if (((this as any).state as any).selection instanceof v) {
        let t: any = (((this as any).docView as any).domAfterPos as any)((((this as any).state as any).selection as any).from);
        ((t as any).nodeType as any) == (1 as any) && (Zi as any)(this, ((t as any).getBoundingClientRect as any)(), e);
      } else (Zi as any)(this, ((this as any).coordsAtPos as any)((((this as any).state as any).selection as any).head, 1), e);
    }
  }
  destroyPluginViews(): any {
    let e: any;
    for (; e = (((this as any).pluginViews as any).pop as any)();) (e as any).destroy && ((e as any).destroy as any)();
  }
  updatePluginViews(e: any): any {
    if (!e || ((e as any).plugins as any) != (((this as any).state as any).plugins as any) || ((this as any).directPlugins as any) != ((this as any).prevDirectPlugins as any)) {
      (this as any).prevDirectPlugins = (this as any).directPlugins, ((this as any).destroyPluginViews as any)();
      for (let t: any = 0; (t as any) < (((this as any).directPlugins as any).length as any); t++) {
        let r: any = ((this as any).directPlugins as any)[t];
        ((r as any).spec as any).view && (((this as any).pluginViews as any).push as any)((((r as any).spec as any).view as any)(this));
      }
      for (let t: any = 0; (t as any) < ((((this as any).state as any).plugins as any).length as any); t++) {
        let r: any = (((this as any).state as any).plugins as any)[t];
        ((r as any).spec as any).view && (((this as any).pluginViews as any).push as any)((((r as any).spec as any).view as any)(this));
      }
    } else for (let t: any = 0; (t as any) < (((this as any).pluginViews as any).length as any); t++) {
      let r: any = ((this as any).pluginViews as any)[t];
      (r as any).update && ((r as any).update as any)(this, e);
    }
  }
  updateDraggedNode(e: any, t: any): any {
    let r: any = (e as any).node,
      s: any = -1;
    if ((((((this as any).state as any).doc as any).nodeAt as any)((r as any).from) as any) == ((r as any).node as any)) s = (r as any).from;else {
      let i: any = ((r as any).from as any) + ((((((this as any).state as any).doc as any).content as any).size as any) - ((((t as any).doc as any).content as any).size as any) as any);
      (((i as any) > (0 as any) && ((((this as any).state as any).doc as any).nodeAt as any)(i)) as any) == ((r as any).node as any) && (s = i);
    }
    (this as any).dragging = new (Na as any)((e as any).slice, (e as any).move, (s as any) < (0 as any) ? void 0 : ((v as any).create as any)(((this as any).state as any).doc, s));
  }
  someProp(e: any, t: any): any {
    let r: any = (this as any)._props && ((this as any)._props as any)[e],
      s: any;
    if ((r as any) != (null as any) && (s = t ? (t as any)(r) : r)) return s;
    for (let o: any = 0; (o as any) < (((this as any).directPlugins as any).length as any); o++) {
      let l: any = ((((this as any).directPlugins as any)[o] as any).props as any)[e];
      if ((l as any) != (null as any) && (s = t ? (t as any)(l) : l)) return s;
    }
    let i: any = ((this as any).state as any).plugins;
    if (i) for (let o: any = 0; (o as any) < ((i as any).length as any); o++) {
      let l: any = (((i as any)[o] as any).props as any)[e];
      if ((l as any) != (null as any) && (s = t ? (t as any)(l) : l)) return s;
    }
  }
  hasFocus(): any {
    if (le) {
      let e: any = ((this as any).root as any).activeElement;
      if ((e as any) == ((this as any).dom as any)) return !0;
      if (!e || !(((this as any).dom as any).contains as any)(e)) return !1;
      for (; e && ((this as any).dom as any) != (e as any) && (((this as any).dom as any).contains as any)(e);) {
        if (((e as any).contentEditable as any) == ("false" as any)) return !1;
        e = (e as any).parentElement;
      }
      return !0;
    }
    return (((this as any).root as any).activeElement as any) == ((this as any).dom as any);
  }
  focus(): any {
    (((this as any).domObserver as any).stop as any)(), (this as any).editable && (yd as any)((this as any).dom), (ze as any)(this), (((this as any).domObserver as any).start as any)();
  }
  get root(): any {
    let e: any = (this as any)._root;
    if ((e as any) == (null as any)) {
      for (let t: any = ((this as any).dom as any).parentNode; t; t = (t as any).parentNode) if (((t as any).nodeType as any) == (9 as any) || ((t as any).nodeType as any) == (11 as any) && (t as any).host) return (t as any).getSelection || ((((Object as any).getPrototypeOf as any)(t) as any).getSelection = (): any => (((t as any).ownerDocument as any).getSelection as any)()), (this as any)._root = t;
    }
    return e || document;
  }
  updateRoot(): any {
    (this as any)._root = null;
  }
  posAtCoords(e: any): any {
    return (wd as any)(this, e);
  }
  coordsAtPos(e: any, t: any = 1): any {
    return (la as any)(this, e, t);
  }
  domAtPos(e: any, t: any = 0): any {
    return (((this as any).docView as any).domFromPos as any)(e, t);
  }
  nodeDOM(e: any): any {
    let t: any = (((this as any).docView as any).descAt as any)(e);
    return t ? (t as any).nodeDOM : null;
  }
  posAtDOM(e: any, t: any, r: any = -1): any {
    let s: any = (((this as any).docView as any).posFromDOM as any)(e, t, r);
    if ((s as any) == (null as any)) throw new (RangeError as any)("DOM position not inside the editor");
    return s;
  }
  endOfTextblock(e: any, t: any): any {
    return (Td as any)(this, t || (this as any).state, e);
  }
  pasteHTML(e: any, t: any): any {
    return (fn as any)(this, "", e, !1, t || new (ClipboardEvent as any)("paste"));
  }
  pasteText(e: any, t: any): any {
    return (fn as any)(this, e, null, !0, t || new (ClipboardEvent as any)("paste"));
  }
  serializeForClipboard(e: any): any {
    return (ni as any)(this, e);
  }
  destroy(): any {
    (this as any).docView && ((nf as any)(this), ((this as any).destroyPluginViews as any)(), (this as any).mounted ? ((((this as any).docView as any).update as any)(((this as any).state as any).doc, [], (Qr as any)(this), this), ((this as any).dom as any).textContent = "") : ((this as any).dom as any).parentNode && ((((this as any).dom as any).parentNode as any).removeChild as any)((this as any).dom), (((this as any).docView as any).destroy as any)(), (this as any).docView = null, (id as any)());
  }
  get isDestroyed(): any {
    return ((this as any).docView as any) == (null as any);
  }
  dispatchEvent(e: any): any {
    return (sf as any)(this, e);
  }
  domSelectionRange(): any {
    let e: any = ((this as any).domSelection as any)();
    return e ? ee && (((this as any).root as any).nodeType as any) === (11 as any) && ((ud as any)(((this as any).dom as any).ownerDocument) as any) == ((this as any).dom as any) && (Of as any)(this, e) || e : {
      focusNode: null,
      focusOffset: 0,
      anchorNode: null,
      anchorOffset: 0
    };
  }
  domSelection(): any {
    return (((this as any).root as any).getSelection as any)();
  }
}
((Pa as any).prototype as any).dispatch = function (this: any, n: any): any {
  let e: any = ((this as any)._props as any).dispatchTransaction;
  e ? ((e as any).call as any)(this, n) : ((this as any).updateState as any)((((this as any).state as any).apply as any)(n));
};
function vo(this: any, n: any): any {
  let e: any = ((Object as any).create as any)(null);
  return (e as any).class = "ProseMirror", (e as any).contenteditable = (String as any)((n as any).editable), ((n as any).someProp as any)("attributes", (t: any): any => {
    if ((typeof t as any) == ("function" as any) && (t = (t as any)((n as any).state)), t) for (let r in t) (r as any) == ("class" as any) ? (e as any).class += (" " as any) + ((t as any)[r] as any) : (r as any) == ("style" as any) ? (e as any).style = (((e as any).style ? ((e as any).style as any) + (";" as any) : "") as any) + ((t as any)[r] as any) : !(e as any)[r] && (r as any) != ("contenteditable" as any) && (r as any) != ("nodeName" as any) && ((e as any)[r] = (String as any)((t as any)[r]));
  }), (e as any).translate || ((e as any).translate = "no"), [((ne as any).node as any)(0, ((((n as any).state as any).doc as any).content as any).size, e)];
}
function To(this: any, n: any): any {
  if ((n as any).markCursor) {
    let e: any = ((document as any).createElement as any)("img");
    (e as any).className = "ProseMirror-separator", ((e as any).setAttribute as any)("mark-placeholder", "true"), ((e as any).setAttribute as any)("alt", ""), (n as any).cursorWrapper = {
      dom: e,
      deco: ((ne as any).widget as any)((((n as any).state as any).selection as any).from, e, {
        raw: !0,
        marks: (n as any).markCursor
      })
    };
  } else (n as any).cursorWrapper = null;
}
function Ao(this: any, n: any): any {
  return !((n as any).someProp as any)("editable", (e: any): any => ((e as any)((n as any).state) as any) === (!1 as any));
}
function Ff(this: any, n: any, e: any): any {
  let t: any = ((Math as any).min as any)((((n as any).$anchor as any).sharedDepth as any)((n as any).head), (((e as any).$anchor as any).sharedDepth as any)((e as any).head));
  return ((((n as any).$anchor as any).start as any)(t) as any) != ((((e as any).$anchor as any).start as any)(t) as any);
}
function No(this: any, n: any): any {
  let e: any = ((Object as any).create as any)(null);
  function t(this: any, r: any): any {
    for (let s in r) ((((Object as any).prototype as any).hasOwnProperty as any).call as any)(e, s) || ((e as any)[s] = (r as any)[s]);
  }
  return ((n as any).someProp as any)("nodeViews", t), ((n as any).someProp as any)("markViews", t), e;
}
function Hf(this: any, n: any, e: any): any {
  let t: any = 0,
    r: any = 0;
  for (let s in n) {
    if (((n as any)[s] as any) != ((e as any)[s] as any)) return !0;
    t++;
  }
  for (let s in e) r++;
  return (t as any) != (r as any);
}
function Oo(this: any, n: any): any {
  if (((n as any).spec as any).state || ((n as any).spec as any).filterTransaction || ((n as any).spec as any).appendTransaction) throw new (RangeError as any)("Plugins passed directly to the view must not have a state component");
}
var Qe: any = {
    8: "Backspace",
    9: "Tab",
    10: "Enter",
    12: "NumLock",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    44: "PrintScreen",
    45: "Insert",
    46: "Delete",
    59: ";",
    61: "=",
    91: "Meta",
    92: "Meta",
    106: "*",
    107: "+",
    108: ",",
    109: "-",
    110: ".",
    111: "/",
    144: "NumLock",
    145: "ScrollLock",
    160: "Shift",
    161: "Shift",
    162: "Control",
    163: "Control",
    164: "Alt",
    165: "Alt",
    173: "-",
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "/",
    192: "`",
    219: "[",
    220: "\\",
    221: "]",
    222: "'"
  },
  Un: any = {
    48: ")",
    49: "!",
    50: "@",
    51: "#",
    52: "$",
    53: "%",
    54: "^",
    55: "&",
    56: "*",
    57: "(",
    59: ":",
    61: "+",
    173: "_",
    186: ":",
    187: "+",
    188: "<",
    189: "_",
    190: ">",
    191: "?",
    192: "~",
    219: "{",
    220: "|",
    221: "}",
    222: '"'
  },
  Vf: any = (typeof navigator as any) < ("u" as any) && ((/Mac/ as any).test as any)((navigator as any).platform),
  jf: any = (typeof navigator as any) < ("u" as any) && ((/MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/ as any).exec as any)((navigator as any).userAgent);
for (var Q: any = 0; (Q as any) < (10 as any); Q++) (Qe as any)[(48 as any) + (Q as any)] = (Qe as any)[(96 as any) + (Q as any)] = (String as any)(Q);
for (var Q: any = 1; (Q as any) <= (24 as any); Q++) (Qe as any)[(Q as any) + (111 as any)] = ("F" as any) + (Q as any);
for (var Q: any = 65; (Q as any) <= (90 as any); Q++) (Qe as any)[Q] = ((String as any).fromCharCode as any)((Q as any) + (32 as any)), (Un as any)[Q] = ((String as any).fromCharCode as any)(Q);
for (es in Qe) ((Un as any).hasOwnProperty as any)(es) || ((Un as any)[es] = (Qe as any)[es]);
function _f(this: any, n: any): any {
  var e: any = Vf && (n as any).metaKey && (n as any).shiftKey && !(n as any).ctrlKey && !(n as any).altKey || jf && (n as any).shiftKey && (n as any).key && (((n as any).key as any).length as any) == (1 as any) || ((n as any).key as any) == ("Unidentified" as any),
    t: any = !e && (n as any).key || (((n as any).shiftKey ? Un : Qe) as any)[(n as any).keyCode] || (n as any).key || "Unidentified";
  return (t as any) == ("Esc" as any) && (t = "Escape"), (t as any) == ("Del" as any) && (t = "Delete"), (t as any) == ("Left" as any) && (t = "ArrowLeft"), (t as any) == ("Up" as any) && (t = "ArrowUp"), (t as any) == ("Right" as any) && (t = "ArrowRight"), (t as any) == ("Down" as any) && (t = "ArrowDown"), t;
}
const Wf: any = (typeof navigator as any) < ("u" as any) && ((/Mac|iP(hone|[oa]d)/ as any).test as any)((navigator as any).platform),
  qf: any = (typeof navigator as any) < ("u" as any) && ((/Win/ as any).test as any)((navigator as any).platform);
function Kf(this: any, n: any): any {
  let e: any = ((n as any).split as any)(/-(?!$)/),
    t: any = (e as any)[((e as any).length as any) - (1 as any)];
  (t as any) == ("Space" as any) && (t = " ");
  let r: any, s: any, i: any, o: any;
  for (let l: any = 0; (l as any) < (((e as any).length as any) - (1 as any) as any); l++) {
    let a: any = (e as any)[l];
    if (((/^(cmd|meta|m)$/i as any).test as any)(a)) o = !0;else if (((/^a(lt)?$/i as any).test as any)(a)) r = !0;else if (((/^(c|ctrl|control)$/i as any).test as any)(a)) s = !0;else if (((/^s(hift)?$/i as any).test as any)(a)) i = !0;else if (((/^mod$/i as any).test as any)(a)) Wf ? o = !0 : s = !0;else throw new (Error as any)(("Unrecognized modifier name: " as any) + (a as any));
  }
  return r && (t = ("Alt-" as any) + (t as any)), s && (t = ("Ctrl-" as any) + (t as any)), o && (t = ("Meta-" as any) + (t as any)), i && (t = ("Shift-" as any) + (t as any)), t;
}
function Uf(this: any, n: any): any {
  let e: any = ((Object as any).create as any)(null);
  for (let t in n) (e as any)[(Kf as any)(t)] = (n as any)[t];
  return e;
}
function ts(this: any, n: any, e: any, t: any = !0): any {
  return (e as any).altKey && (n = ("Alt-" as any) + (n as any)), (e as any).ctrlKey && (n = ("Ctrl-" as any) + (n as any)), (e as any).metaKey && (n = ("Meta-" as any) + (n as any)), t && (e as any).shiftKey && (n = ("Shift-" as any) + (n as any)), n;
}
function Jf(this: any, n: any): any {
  return new ($ as any)({
    props: {
      handleKeyDown: (La as any)(n)
    }
  });
}
function La(this: any, n: any): any {
  let e: any = (Uf as any)(n);
  return function (this: any, t: any, r: any): any {
    let s: any = (_f as any)(r),
      i: any,
      o: any = (e as any)[(ts as any)(s, r)];
    if (o && (o as any)((t as any).state, (t as any).dispatch, t)) return !0;
    if (((s as any).length as any) == (1 as any) && (s as any) != (" " as any)) {
      if ((r as any).shiftKey) {
        let l: any = (e as any)[(ts as any)(s, r, !1)];
        if (l && (l as any)((t as any).state, (t as any).dispatch, t)) return !0;
      }
      if (((r as any).altKey || (r as any).metaKey || (r as any).ctrlKey) && !(qf && (r as any).ctrlKey && (r as any).altKey) && (i = (Qe as any)[(r as any).keyCode]) && (i as any) != (s as any)) {
        let l: any = (e as any)[(ts as any)(i, r)];
        if (l && (l as any)((t as any).state, (t as any).dispatch, t)) return !0;
      }
    }
    return !1;
  };
}
var Gf: any = (Object as any).defineProperty,
  ai: any = (n: any, e: any): any => {
    var t: any;
    for (t in e) (Gf as any)(n, t, {
      get: (e as any)[t],
      enumerable: !0
    });
  };
function Ir(this: any, n: any): any {
  const {
    state: e,
    transaction: t
  }: any = n;
  let {
      selection: r
    }: any = t,
    {
      doc: s
    }: any = t,
    {
      storedMarks: i
    }: any = t;
  return {
    ...e,
    apply: (((e as any).apply as any).bind as any)(e),
    applyTransaction: (((e as any).applyTransaction as any).bind as any)(e),
    plugins: (e as any).plugins,
    schema: (e as any).schema,
    reconfigure: (((e as any).reconfigure as any).bind as any)(e),
    toJSON: (((e as any).toJSON as any).bind as any)(e),
    get storedMarks(): any {
      return i;
    },
    get selection(): any {
      return r;
    },
    get doc(): any {
      return s;
    },
    get tr(): any {
      return r = (t as any).selection, s = (t as any).doc, i = (t as any).storedMarks, t;
    }
  };
}
var Rr: any = class {
    declare customState: any;
    declare rawCommands: any;
    declare editor: any;
    [key: string]: any;
    constructor(n: any) {
      (this as any).editor = (n as any).editor, (this as any).rawCommands = (((this as any).editor as any).extensionManager as any).commands, (this as any).customState = (n as any).state;
    }
    get hasCustomState(): any {
      return !!(this as any).customState;
    }
    get state(): any {
      return (this as any).customState || ((this as any).editor as any).state;
    }
    get commands(): any {
      const {
          rawCommands: n,
          editor: e,
          state: t
        }: any = this,
        {
          view: r
        }: any = e,
        {
          tr: s
        }: any = t,
        i: any = ((this as any).buildProps as any)(s);
      return ((Object as any).fromEntries as any)(((((Object as any).entries as any)(n) as any).map as any)(([o, l]: any): any => [o, (...c: any): any => {
        const u: any = ((l as any)(...c) as any)(i);
        return !((s as any).getMeta as any)("preventDispatch") && !(this as any).hasCustomState && ((r as any).dispatch as any)(s), u;
      }]));
    }
    get chain(): any {
      return (): any => ((this as any).createChain as any)();
    }
    get can(): any {
      return (): any => ((this as any).createCan as any)();
    }
    createChain(n: any, e: any = !0): any {
      const {
          rawCommands: t,
          editor: r,
          state: s
        }: any = this,
        {
          view: i
        }: any = r,
        o: any = [],
        l: any = !!n,
        a: any = n || (s as any).tr,
        c: any = (): any => (!l && e && !((a as any).getMeta as any)("preventDispatch") && !(this as any).hasCustomState && ((i as any).dispatch as any)(a), ((o as any).every as any)((d: any): any => (d as any) === (!0 as any))),
        u: any = {
          ...((Object as any).fromEntries as any)(((((Object as any).entries as any)(t) as any).map as any)(([d, f]: any): any => [d, (...p: any): any => {
            const m: any = ((this as any).buildProps as any)(a, e),
              g: any = ((f as any)(...p) as any)(m);
            return ((o as any).push as any)(g), u;
          }])),
          run: c
        };
      return u;
    }
    createCan(n: any): any {
      const {
          rawCommands: e,
          state: t
        }: any = this,
        r: any = !1,
        s: any = n || (t as any).tr,
        i: any = ((this as any).buildProps as any)(s, r);
      return {
        ...((Object as any).fromEntries as any)(((((Object as any).entries as any)(e) as any).map as any)(([l, a]: any): any => [l, (...c: any): any => ((a as any)(...c) as any)({
          ...i,
          dispatch: void 0
        })])),
        chain: (): any => ((this as any).createChain as any)(s, r)
      };
    }
    buildProps(n: any, e: any = !0): any {
      const {
          rawCommands: t,
          editor: r,
          state: s
        }: any = this,
        {
          view: i
        }: any = r,
        o: any = {
          tr: n,
          editor: r,
          view: i,
          state: (Ir as any)({
            state: s,
            transaction: n
          }),
          dispatch: e ? (): any => {} : void 0,
          chain: (): any => ((this as any).createChain as any)(n, e),
          can: (): any => ((this as any).createCan as any)(n),
          get commands(): any {
            return ((Object as any).fromEntries as any)(((((Object as any).entries as any)(t) as any).map as any)(([l, a]: any): any => [l, (...c: any): any => ((a as any)(...c) as any)(o)]));
          }
        };
      return o;
    }
  },
  za: any = {};
(ai as any)(za, {
  blur: (): any => Yf,
  clearContent: (): any => Xf,
  clearNodes: (): any => Qf,
  command: (): any => Zf,
  createParagraphNear: (): any => eh,
  cut: (): any => th,
  deleteCurrentNode: (): any => nh,
  deleteNode: (): any => rh,
  deleteRange: (): any => sh,
  deleteSelection: (): any => ih,
  enter: (): any => oh,
  exitCode: (): any => lh,
  extendMarkRange: (): any => ah,
  first: (): any => ch,
  focus: (): any => uh,
  forEach: (): any => dh,
  insertContent: (): any => fh,
  insertContentAt: (): any => mh,
  joinBackward: (): any => kh,
  joinDown: (): any => yh,
  joinForward: (): any => bh,
  joinItemBackward: (): any => xh,
  joinItemForward: (): any => Sh,
  joinTextblockBackward: (): any => wh,
  joinTextblockForward: (): any => Ch,
  joinUp: (): any => gh,
  keyboardShortcut: (): any => Eh,
  lift: (): any => vh,
  liftEmptyBlock: (): any => Th,
  liftListItem: (): any => Ah,
  newlineInCode: (): any => Nh,
  resetAttributes: (): any => Oh,
  scrollIntoView: (): any => Dh,
  selectAll: (): any => Ih,
  selectNodeBackward: (): any => Rh,
  selectNodeForward: (): any => Ph,
  selectParentNode: (): any => Lh,
  selectTextblockEnd: (): any => zh,
  selectTextblockStart: (): any => Bh,
  setContent: (): any => $h,
  setMark: (): any => sp,
  setMeta: (): any => ip,
  setNode: (): any => op,
  setNodeSelection: (): any => lp,
  setTextDirection: (): any => ap,
  setTextSelection: (): any => cp,
  sinkListItem: (): any => up,
  splitBlock: (): any => dp,
  splitListItem: (): any => fp,
  toggleList: (): any => hp,
  toggleMark: (): any => pp,
  toggleNode: (): any => mp,
  toggleWrap: (): any => gp,
  undoInputRule: (): any => yp,
  unsetAllMarks: (): any => kp,
  unsetMark: (): any => bp,
  unsetTextDirection: (): any => xp,
  updateAttributes: (): any => Sp,
  wrapIn: (): any => wp,
  wrapInList: (): any => Cp
});
var Yf: any = (): any => ({
    editor: n,
    view: e
  }: any): any => ((requestAnimationFrame as any)((): any => {
    var t: any;
    (n as any).isDestroyed || ((((e as any).dom as any).blur as any)(), ((t = window?.getSelection()) as any) == (null as any) || ((t as any).removeAllRanges as any)());
  }), !0),
  Xf: any = (n: any = !0): any => ({
    commands: e
  }: any): any => ((e as any).setContent as any)("", {
    emitUpdate: n
  }),
  Qf: any = (): any => ({
    state: n,
    tr: e,
    dispatch: t
  }: any): any => {
    const {
        selection: r
      }: any = e,
      {
        ranges: s
      }: any = r;
    return t && ((s as any).forEach as any)(({
      $from: i,
      $to: o
    }: any): any => {
      (((n as any).doc as any).nodesBetween as any)((i as any).pos, (o as any).pos, (l: any, a: any): any => {
        if (((l as any).type as any).isText) return;
        const {
            doc: c,
            mapping: u
          }: any = e,
          d: any = ((c as any).resolve as any)(((u as any).map as any)(a)),
          f: any = ((c as any).resolve as any)(((u as any).map as any)((a as any) + ((l as any).nodeSize as any))),
          h: any = ((d as any).blockRange as any)(f);
        if (!h) return;
        const p: any = (Ht as any)(h);
        if (((l as any).type as any).isTextblock) {
          const {
            defaultType: m
          }: any = (((d as any).parent as any).contentMatchAt as any)(((d as any).index as any)());
          ((e as any).setNodeMarkup as any)((h as any).start, m);
        }
        (p || (p as any) === (0 as any)) && ((e as any).lift as any)(h, p);
      });
    }), !0;
  },
  Zf: any = (n: any): any => (e: any): any => (n as any)(e),
  eh: any = (): any => ({
    state: n,
    dispatch: e
  }: any): any => (Yl as any)(n, e),
  th: any = (n: any, e: any): any => ({
    editor: t,
    tr: r
  }: any): any => {
    const {
        state: s
      }: any = t,
      i: any = (((s as any).doc as any).slice as any)((n as any).from, (n as any).to);
    ((r as any).deleteRange as any)((n as any).from, (n as any).to);
    const o: any = (((r as any).mapping as any).map as any)(e);
    return ((r as any).insert as any)(o, (i as any).content), ((r as any).setSelection as any)(new (N as any)((((r as any).doc as any).resolve as any)(((Math as any).max as any)((o as any) - (1 as any), 0)))), !0;
  },
  nh: any = (): any => ({
    tr: n,
    dispatch: e
  }: any): any => {
    const {
        selection: t
      }: any = n,
      r: any = (((t as any).$anchor as any).node as any)();
    if ((((r as any).content as any).size as any) > (0 as any)) return !1;
    const s: any = ((n as any).selection as any).$anchor;
    for (let i: any = (s as any).depth; (i as any) > (0 as any); i -= 1) if (((((s as any).node as any)(i) as any).type as any) === ((r as any).type as any)) {
      if (e) {
        const l: any = ((s as any).before as any)(i),
          a: any = ((s as any).after as any)(i);
        ((((n as any).delete as any)(l, a) as any).scrollIntoView as any)();
      }
      return !0;
    }
    return !1;
  };
function _(this: any, n: any, e: any): any {
  if ((typeof n as any) == ("string" as any)) {
    if (!((e as any).nodes as any)[n]) throw (Error as any)(`There is no node type named '${n}'. Maybe you forgot to add the extension?`);
    return ((e as any).nodes as any)[n];
  }
  return n;
}
var rh: any = (n: any): any => ({
    tr: e,
    state: t,
    dispatch: r
  }: any): any => {
    const s: any = (_ as any)(n, (t as any).schema),
      i: any = ((e as any).selection as any).$anchor;
    for (let o: any = (i as any).depth; (o as any) > (0 as any); o -= 1) if (((((i as any).node as any)(o) as any).type as any) === (s as any)) {
      if (r) {
        const a: any = ((i as any).before as any)(o),
          c: any = ((i as any).after as any)(o);
        ((((e as any).delete as any)(a, c) as any).scrollIntoView as any)();
      }
      return !0;
    }
    return !1;
  },
  sh: any = (n: any): any => ({
    tr: e,
    dispatch: t
  }: any): any => {
    const {
      from: r,
      to: s
    }: any = n;
    return t && ((e as any).delete as any)(r, s), !0;
  },
  ih: any = (): any => ({
    state: n,
    dispatch: e
  }: any): any => (Js as any)(n, e),
  oh: any = (): any => ({
    commands: n
  }: any): any => ((n as any).keyboardShortcut as any)("Enter"),
  lh: any = (): any => ({
    state: n,
    dispatch: e
  }: any): any => (Wu as any)(n, e);
function ci(this: any, n: any): any {
  return (((((Object as any).prototype as any).toString as any).call as any)(n) as any) === ("[object RegExp]" as any);
}
function Jn(this: any, n: any, e: any, t: any = {
  strict: !0
}): any {
  const r: any = ((Object as any).keys as any)(e);
  return (r as any).length ? ((r as any).every as any)((s: any): any => (t as any).strict ? ((e as any)[s] as any) === ((n as any)[s] as any) : (ci as any)((e as any)[s]) ? (((e as any)[s] as any).test as any)((n as any)[s]) : ((e as any)[s] as any) === ((n as any)[s] as any)) : !0;
}
function Ba(this: any, n: any, e: any, t: any = {}): any {
  return ((n as any).find as any)((r: any): any => ((r as any).type as any) === (e as any) && (Jn as any)(((Object as any).fromEntries as any)(((((Object as any).keys as any)(t) as any).map as any)((s: any): any => [s, ((r as any).attrs as any)[s]])), t));
}
function Do(this: any, n: any, e: any, t: any = {}): any {
  return !!(Ba as any)(n, e, t);
}
function ui(this: any, n: any, e: any, t: any): any {
  var r: any;
  if (!n || !e) return;
  let s: any = (((n as any).parent as any).childAfter as any)((n as any).parentOffset);
  if ((!(s as any).node || !((((s as any).node as any).marks as any).some as any)((u: any): any => ((u as any).type as any) === (e as any))) && (s = (((n as any).parent as any).childBefore as any)((n as any).parentOffset)), !(s as any).node || !((((s as any).node as any).marks as any).some as any)((u: any): any => ((u as any).type as any) === (e as any)) || (t = t || (((r = (((s as any).node as any).marks as any)[0]) as any) == (null as any) ? void 0 : (r as any).attrs), !(Ba as any)([...((s as any).node as any).marks], e, t))) return;
  let o: any = (s as any).index,
    l: any = (((n as any).start as any)() as any) + ((s as any).offset as any),
    a: any = (o as any) + (1 as any),
    c: any = (l as any) + (((s as any).node as any).nodeSize as any);
  for (; (o as any) > (0 as any) && (Do as any)([...((((n as any).parent as any).child as any)((o as any) - (1 as any)) as any).marks], e, t);) o -= 1, l -= ((((n as any).parent as any).child as any)(o) as any).nodeSize;
  for (; (a as any) < (((n as any).parent as any).childCount as any) && (Do as any)([...((((n as any).parent as any).child as any)(a) as any).marks], e, t);) c += ((((n as any).parent as any).child as any)(a) as any).nodeSize, a += 1;
  return {
    from: l,
    to: c
  };
}
function Be(this: any, n: any, e: any): any {
  if ((typeof n as any) == ("string" as any)) {
    if (!((e as any).marks as any)[n]) throw (Error as any)(`There is no mark type named '${n}'. Maybe you forgot to add the extension?`);
    return ((e as any).marks as any)[n];
  }
  return n;
}
var ah: any = (n: any, e: any = {}): any => ({
    tr: t,
    state: r,
    dispatch: s
  }: any): any => {
    const i: any = (Be as any)(n, (r as any).schema),
      {
        doc: o,
        selection: l
      }: any = t,
      {
        $from: a,
        from: c,
        to: u
      }: any = l;
    if (s) {
      const d: any = (ui as any)(a, i, e);
      if (d && ((d as any).from as any) <= (c as any) && ((d as any).to as any) >= (u as any)) {
        const f: any = ((N as any).create as any)(o, (d as any).from, (d as any).to);
        ((t as any).setSelection as any)(f);
      }
    }
    return !0;
  },
  ch: any = (n: any): any => (e: any): any => {
    const t: any = (typeof n as any) == ("function" as any) ? (n as any)(e) : n;
    for (let r: any = 0; (r as any) < ((t as any).length as any); r += 1) if (((t as any)[r] as any)(e)) return !0;
    return !1;
  };
function $a(this: any, n: any): any {
  return n instanceof N;
}
function Pe(this: any, n: any = 0, e: any = 0, t: any = 0): any {
  return ((Math as any).min as any)(((Math as any).max as any)(n, e), t);
}
function Fa(this: any, n: any, e: any = null): any {
  if (!e) return null;
  const t: any = ((O as any).atStart as any)(n),
    r: any = ((O as any).atEnd as any)(n);
  if ((e as any) === ("start" as any) || (e as any) === (!0 as any)) return t;
  if ((e as any) === ("end" as any)) return r;
  const s: any = (t as any).from,
    i: any = (r as any).to;
  return (e as any) === ("all" as any) ? ((N as any).create as any)(n, (Pe as any)(0, s, i), (Pe as any)(((n as any).content as any).size, s, i)) : ((N as any).create as any)(n, (Pe as any)(e, s, i), (Pe as any)(e, s, i));
}
function Ha(this: any): any {
  return ((navigator as any).platform as any) === ("Android" as any) || ((/android/i as any).test as any)((navigator as any).userAgent);
}
function Pr(this: any): any {
  return ((["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"] as any).includes as any)((navigator as any).platform) || (((navigator as any).userAgent as any).includes as any)("Mac") && "ontouchend" in document;
}
var uh: any = (n: any = null, e: any = {}): any => ({
    editor: t,
    view: r,
    tr: s,
    dispatch: i
  }: any): any => {
    e = {
      scrollIntoView: !0,
      ...e
    };
    const o: any = (): any => {
      ((Pr as any)() || (Ha as any)()) && (((r as any).dom as any).focus as any)(), (requestAnimationFrame as any)((): any => {
        (t as any).isDestroyed || (((r as any).focus as any)(), e?.scrollIntoView && (((t as any).commands as any).scrollIntoView as any)());
      });
    };
    if (((r as any).hasFocus as any)() && (n as any) === (null as any) || (n as any) === (!1 as any)) return !0;
    if (i && (n as any) === (null as any) && !($a as any)(((t as any).state as any).selection)) return (o as any)(), !0;
    const l: any = (Fa as any)((s as any).doc, n) || ((t as any).state as any).selection,
      a: any = ((((t as any).state as any).selection as any).eq as any)(l);
    return i && (a || ((s as any).setSelection as any)(l), a && (s as any).storedMarks && ((s as any).setStoredMarks as any)((s as any).storedMarks), (o as any)()), !0;
  },
  dh: any = (n: any, e: any): any => (t: any): any => ((n as any).every as any)((r: any, s: any): any => (e as any)(r, {
    ...t,
    index: s
  })),
  fh: any = (n: any, e: any): any => ({
    tr: t,
    commands: r
  }: any): any => ((r as any).insertContentAt as any)({
    from: ((t as any).selection as any).from,
    to: ((t as any).selection as any).to
  }, n, e),
  Va: any = (n: any): any => {
    const e: any = (n as any).childNodes;
    for (let t: any = ((e as any).length as any) - (1 as any); (t as any) >= (0 as any); t -= 1) {
      const r: any = (e as any)[t];
      ((r as any).nodeType as any) === (3 as any) && (r as any).nodeValue && ((/^(\n\s\s|\n)$/ as any).test as any)((r as any).nodeValue) ? ((n as any).removeChild as any)(r) : ((r as any).nodeType as any) === (1 as any) && (Va as any)(r);
    }
    return n;
  };
function Jt(this: any, n: any): any {
  if ((typeof window as any) > ("u" as any)) throw new (Error as any)("[tiptap error]: there is no window object available, so this function cannot be used");
  const e: any = `<body>${n}</body>`,
    t: any = (((new ((window as any).DOMParser as any)() as any).parseFromString as any)(e, "text/html") as any).body;
  return (Va as any)(t);
}
function pn(this: any, n: any, e: any, t: any): any {
  if (n instanceof Se || n instanceof k) return n;
  t = {
    slice: !0,
    parseOptions: {},
    ...t
  };
  const r: any = (typeof n as any) == ("object" as any) && (n as any) !== (null as any),
    s: any = (typeof n as any) == ("string" as any);
  if (r) try {
    if (((Array as any).isArray as any)(n) && ((n as any).length as any) > (0 as any)) return ((k as any).fromArray as any)(((n as any).map as any)((l: any): any => ((e as any).nodeFromJSON as any)(l)));
    const o: any = ((e as any).nodeFromJSON as any)(n);
    return (t as any).errorOnInvalidContent && ((o as any).check as any)(), o;
  } catch (i: any) {
    if ((t as any).errorOnInvalidContent) throw new (Error as any)("[tiptap error]: Invalid JSON content", {
      cause: i
    });
    return ((console as any).warn as any)("[tiptap warn]: Invalid content.", "Passed value:", n, "Error:", i), (pn as any)("", e, t);
  }
  if (s) {
    if ((t as any).errorOnInvalidContent) {
      let o: any = !1,
        l: any = "";
      const a: any = new (Cl as any)({
        topNode: ((e as any).spec as any).topNode,
        marks: ((e as any).spec as any).marks,
        nodes: ((((e as any).spec as any).nodes as any).append as any)({
          __tiptap__private__unknown__catch__all__node: {
            content: "inline*",
            group: "block",
            parseDOM: [{
              tag: "*",
              getAttrs: (c: any): any => (o = !0, l = (typeof c as any) == ("string" as any) ? c : (c as any).outerHTML, null)
            }]
          }
        })
      });
      if ((t as any).slice ? ((((Le as any).fromSchema as any)(a) as any).parseSlice as any)((Jt as any)(n), (t as any).parseOptions) : ((((Le as any).fromSchema as any)(a) as any).parse as any)((Jt as any)(n), (t as any).parseOptions), (t as any).errorOnInvalidContent && o) throw new (Error as any)("[tiptap error]: Invalid HTML content", {
        cause: new (Error as any)(`Invalid element found: ${l}`)
      });
    }
    const i: any = ((Le as any).fromSchema as any)(e);
    return (t as any).slice ? (((i as any).parseSlice as any)((Jt as any)(n), (t as any).parseOptions) as any).content : ((i as any).parse as any)((Jt as any)(n), (t as any).parseOptions);
  }
  return (pn as any)("", e, t);
}
function hh(this: any, n: any, e: any, t: any): any {
  const r: any = (((n as any).steps as any).length as any) - (1 as any);
  if ((r as any) < (e as any)) return;
  const s: any = ((n as any).steps as any)[r];
  if (!(s instanceof K || s instanceof J)) return;
  const i: any = (((n as any).mapping as any).maps as any)[r];
  let o: any = 0;
  ((i as any).forEach as any)((l: any, a: any, c: any, u: any): any => {
    (o as any) === (0 as any) && (o = u);
  }), ((n as any).setSelection as any)(((O as any).near as any)((((n as any).doc as any).resolve as any)(o), t));
}
var ph: any = (n: any): any => !("type" in n),
  mh: any = (n: any, e: any, t: any): any => ({
    tr: r,
    dispatch: s,
    editor: i
  }: any): any => {
    var o: any;
    if (s) {
      t = {
        parseOptions: ((i as any).options as any).parseOptions,
        updateSelection: !0,
        applyInputRules: !1,
        applyPasteRules: !1,
        ...t
      };
      let l: any;
      const a: any = (g: any): any => {
          ((i as any).emit as any)("contentError", {
            editor: i,
            error: g,
            disableCollaboration: (): any => {
              "collaboration" in (i as any).storage && (typeof ((i as any).storage as any).collaboration as any) == ("object" as any) && ((i as any).storage as any).collaboration && ((((i as any).storage as any).collaboration as any).isDisabled = !0);
            }
          });
        },
        c: any = {
          preserveWhitespace: "full",
          ...(t as any).parseOptions
        };
      if (!(t as any).errorOnInvalidContent && !((i as any).options as any).enableContentCheck && ((i as any).options as any).emitContentError) try {
        (pn as any)(e, (i as any).schema, {
          parseOptions: c,
          errorOnInvalidContent: !0
        });
      } catch (g: any) {
        (a as any)(g);
      }
      try {
        l = (pn as any)(e, (i as any).schema, {
          parseOptions: c,
          errorOnInvalidContent: ((o = (t as any).errorOnInvalidContent) as any) != (null as any) ? o : ((i as any).options as any).enableContentCheck
        });
      } catch (g: any) {
        return (a as any)(g), !1;
      }
      let {
          from: u,
          to: d
        }: any = (typeof n as any) == ("number" as any) ? {
          from: n,
          to: n
        } : {
          from: (n as any).from,
          to: (n as any).to
        },
        f: any = !0,
        h: any = !0;
      if (((((ph as any)(l) ? l : [l]) as any).forEach as any)((g: any): any => {
        ((g as any).check as any)(), f = f ? (g as any).isText && (((g as any).marks as any).length as any) === (0 as any) : !1, h = h ? (g as any).isBlock : !1;
      }), (u as any) === (d as any) && h) {
        const {
          parent: g
        }: any = (((r as any).doc as any).resolve as any)(u);
        (g as any).isTextblock && !(((g as any).type as any).spec as any).code && !(g as any).childCount && (u -= 1, d += 1);
      }
      let m: any;
      if (f) {
        if (((Array as any).isArray as any)(e)) m = ((((e as any).map as any)((g: any): any => (g as any).text || "") as any).join as any)("");else if (e instanceof k) {
          let g: any = "";
          ((e as any).forEach as any)((y: any): any => {
            (y as any).text && (g += (y as any).text);
          }), m = g;
        } else (typeof e as any) == ("object" as any) && e && (e as any).text ? m = (e as any).text : m = e;
        ((r as any).insertText as any)(m, u, d);
      } else {
        m = l;
        const g: any = (((r as any).doc as any).resolve as any)(u),
          y: any = ((g as any).node as any)(),
          b: any = ((g as any).parentOffset as any) === (0 as any),
          C: any = (y as any).isText || (y as any).isTextblock,
          M: any = (((y as any).content as any).size as any) > (0 as any);
        b && C && M && (u = ((Math as any).max as any)(0, (u as any) - (1 as any))), ((r as any).replaceWith as any)(u, d, m);
      }
      (t as any).updateSelection && (hh as any)(r, (((r as any).steps as any).length as any) - (1 as any), -1), (t as any).applyInputRules && ((r as any).setMeta as any)("applyInputRules", {
        from: u,
        text: m
      }), (t as any).applyPasteRules && ((r as any).setMeta as any)("applyPasteRules", {
        from: u,
        text: m
      });
    }
    return !0;
  },
  gh: any = (): any => ({
    state: n,
    dispatch: e
  }: any): any => (Vu as any)(n, e),
  yh: any = (): any => ({
    state: n,
    dispatch: e
  }: any): any => (ju as any)(n, e),
  kh: any = (): any => ({
    state: n,
    dispatch: e
  }: any): any => (_l as any)(n, e),
  bh: any = (): any => ({
    state: n,
    dispatch: e
  }: any): any => (Ul as any)(n, e),
  xh: any = (): any => ({
    state: n,
    dispatch: e,
    tr: t
  }: any): any => {
    try {
      const r: any = (vr as any)((n as any).doc, (((n as any).selection as any).$from as any).pos, -1);
      return (r as any) == (null as any) ? !1 : (((t as any).join as any)(r, 2), e && (e as any)(t), !0);
    } catch {
      return !1;
    }
  },
  Sh: any = (): any => ({
    state: n,
    dispatch: e,
    tr: t
  }: any): any => {
    try {
      const r: any = (vr as any)((n as any).doc, (((n as any).selection as any).$from as any).pos, 1);
      return (r as any) == (null as any) ? !1 : (((t as any).join as any)(r, 2), e && (e as any)(t), !0);
    } catch {
      return !1;
    }
  },
  wh: any = (): any => ({
    state: n,
    dispatch: e
  }: any): any => (Fu as any)(n, e),
  Ch: any = (): any => ({
    state: n,
    dispatch: e
  }: any): any => (Hu as any)(n, e);
function ja(this: any): any {
  return (typeof navigator as any) < ("u" as any) ? ((/Mac/ as any).test as any)((navigator as any).platform) : !1;
}
function Mh(this: any, n: any): any {
  const e: any = ((n as any).split as any)(/-(?!$)/);
  let t: any = (e as any)[((e as any).length as any) - (1 as any)];
  (t as any) === ("Space" as any) && (t = " ");
  let r: any, s: any, i: any, o: any;
  for (let l: any = 0; (l as any) < (((e as any).length as any) - (1 as any) as any); l += 1) {
    const a: any = (e as any)[l];
    if (((/^(cmd|meta|m)$/i as any).test as any)(a)) o = !0;else if (((/^a(lt)?$/i as any).test as any)(a)) r = !0;else if (((/^(c|ctrl|control)$/i as any).test as any)(a)) s = !0;else if (((/^s(hift)?$/i as any).test as any)(a)) i = !0;else if (((/^mod$/i as any).test as any)(a)) (Pr as any)() || (ja as any)() ? o = !0 : s = !0;else throw new (Error as any)(`Unrecognized modifier name: ${a}`);
  }
  return r && (t = `Alt-${t}`), s && (t = `Ctrl-${t}`), o && (t = `Meta-${t}`), i && (t = `Shift-${t}`), t;
}
var Eh: any = (n: any): any => ({
  editor: e,
  view: t,
  tr: r,
  dispatch: s
}: any): any => {
  const i: any = (((Mh as any)(n) as any).split as any)(/-(?!$)/),
    o: any = ((i as any).find as any)((c: any): any => !((["Alt", "Ctrl", "Meta", "Shift"] as any).includes as any)(c)),
    l: any = new (KeyboardEvent as any)("keydown", {
      key: (o as any) === ("Space" as any) ? " " : o,
      altKey: ((i as any).includes as any)("Alt"),
      ctrlKey: ((i as any).includes as any)("Ctrl"),
      metaKey: ((i as any).includes as any)("Meta"),
      shiftKey: ((i as any).includes as any)("Shift"),
      bubbles: !0,
      cancelable: !0
    }),
    a: any = ((e as any).captureTransaction as any)((): any => {
      ((t as any).someProp as any)("handleKeyDown", (c: any): any => (c as any)(t, l));
    });
  return a?.steps.forEach((c: any): any => {
    const u: any = ((c as any).map as any)((r as any).mapping);
    u && s && ((r as any).maybeStep as any)(u);
  }), !0;
};
function Ze(this: any, n: any, e: any, t: any = {}): any {
  const {
      from: r,
      to: s,
      empty: i
    }: any = (n as any).selection,
    o: any = e ? (_ as any)(e, (n as any).schema) : null,
    l: any = [];
  (((n as any).doc as any).nodesBetween as any)(r, s, (d: any, f: any): any => {
    if ((d as any).isText) return;
    const h: any = ((Math as any).max as any)(r, f),
      p: any = ((Math as any).min as any)(s, (f as any) + ((d as any).nodeSize as any));
    ((l as any).push as any)({
      node: d,
      from: h,
      to: p
    });
  });
  const a: any = (s as any) - (r as any),
    c: any = ((((l as any).filter as any)((d: any): any => o ? ((o as any).name as any) === ((((d as any).node as any).type as any).name as any) : !0) as any).filter as any)((d: any): any => (Jn as any)(((d as any).node as any).attrs, t, {
      strict: !1
    }));
  return i ? !!(c as any).length : (((c as any).reduce as any)((d: any, f: any): any => ((d as any) + ((f as any).to as any) as any) - ((f as any).from as any), 0) as any) >= (a as any);
}
var vh: any = (n: any, e: any = {}): any => ({
    state: t,
    dispatch: r
  }: any): any => {
    const s: any = (_ as any)(n, (t as any).schema);
    return (Ze as any)(t, s, e) ? (_u as any)(t, r) : !1;
  },
  Th: any = (): any => ({
    state: n,
    dispatch: e
  }: any): any => (Xl as any)(n, e),
  Ah: any = (n: any): any => ({
    state: e,
    dispatch: t
  }: any): any => {
    const r: any = (_ as any)(n, (e as any).schema);
    return ((td as any)(r) as any)(e, t);
  },
  Nh: any = (): any => ({
    state: n,
    dispatch: e
  }: any): any => (Gl as any)(n, e);
function Lr(this: any, n: any, e: any): any {
  return ((e as any).nodes as any)[n] ? "node" : ((e as any).marks as any)[n] ? "mark" : null;
}
function Io(this: any, n: any, e: any): any {
  const t: any = (typeof e as any) == ("string" as any) ? [e] : e;
  return ((((Object as any).keys as any)(n) as any).reduce as any)((r: any, s: any): any => (((t as any).includes as any)(s) || ((r as any)[s] = (n as any)[s]), r), {});
}
var Oh: any = (n: any, e: any): any => ({
    tr: t,
    state: r,
    dispatch: s
  }: any): any => {
    let i: any = null,
      o: any = null;
    const l: any = (Lr as any)((typeof n as any) == ("string" as any) ? n : (n as any).name, (r as any).schema);
    if (!l) return !1;
    (l as any) === ("node" as any) && (i = (_ as any)(n, (r as any).schema)), (l as any) === ("mark" as any) && (o = (Be as any)(n, (r as any).schema));
    let a: any = !1;
    return ((((t as any).selection as any).ranges as any).forEach as any)((c: any): any => {
      (((r as any).doc as any).nodesBetween as any)(((c as any).$from as any).pos, ((c as any).$to as any).pos, (u: any, d: any): any => {
        i && (i as any) === ((u as any).type as any) && (a = !0, s && ((t as any).setNodeMarkup as any)(d, void 0, (Io as any)((u as any).attrs, e))), o && ((u as any).marks as any).length && (((u as any).marks as any).forEach as any)((f: any): any => {
          (o as any) === ((f as any).type as any) && (a = !0, s && ((t as any).addMark as any)(d, (d as any) + ((u as any).nodeSize as any), ((o as any).create as any)((Io as any)((f as any).attrs, e))));
        });
      });
    }), a;
  },
  Dh: any = (): any => ({
    tr: n,
    dispatch: e
  }: any): any => (e && ((n as any).scrollIntoView as any)(), !0),
  Ih: any = (): any => ({
    tr: n,
    dispatch: e
  }: any): any => {
    if (e) {
      const t: any = new (ue as any)((n as any).doc);
      ((n as any).setSelection as any)(t);
    }
    return !0;
  },
  Rh: any = (): any => ({
    state: n,
    dispatch: e
  }: any): any => (ql as any)(n, e),
  Ph: any = (): any => ({
    state: n,
    dispatch: e
  }: any): any => (Jl as any)(n, e),
  Lh: any = (): any => ({
    state: n,
    dispatch: e
  }: any): any => (Uu as any)(n, e),
  zh: any = (): any => ({
    state: n,
    dispatch: e
  }: any): any => (Yu as any)(n, e),
  Bh: any = (): any => ({
    state: n,
    dispatch: e
  }: any): any => (Gu as any)(n, e);
function Os(this: any, n: any, e: any, t: any = {}, r: any = {}): any {
  return (pn as any)(n, e, {
    slice: !1,
    parseOptions: t,
    errorOnInvalidContent: (r as any).errorOnInvalidContent
  });
}
var $h: any = (n: any, {
  errorOnInvalidContent: e,
  emitUpdate: t = !0,
  parseOptions: r = {}
}: any = {}): any => ({
  editor: s,
  tr: i,
  dispatch: o,
  commands: l
}: any): any => {
  const {
    doc: a
  }: any = i;
  if (((r as any).preserveWhitespace as any) !== ("full" as any)) {
    const c: any = (Os as any)(n, (s as any).schema, r, {
      errorOnInvalidContent: e ?? ((s as any).options as any).enableContentCheck
    });
    return o && ((((i as any).replaceWith as any)(0, ((a as any).content as any).size, c) as any).setMeta as any)("preventUpdate", !t), !0;
  }
  return o && ((i as any).setMeta as any)("preventUpdate", !t), ((l as any).insertContentAt as any)({
    from: 0,
    to: ((a as any).content as any).size
  }, n, {
    parseOptions: r,
    errorOnInvalidContent: e ?? ((s as any).options as any).enableContentCheck
  });
};
function _a(this: any, n: any, e: any): any {
  const t: any = (Be as any)(e, (n as any).schema),
    {
      from: r,
      to: s,
      empty: i
    }: any = (n as any).selection,
    o: any = [];
  i ? ((n as any).storedMarks && ((o as any).push as any)(...(n as any).storedMarks), ((o as any).push as any)(...((((n as any).selection as any).$head as any).marks as any)())) : (((n as any).doc as any).nodesBetween as any)(r, s, (a: any): any => {
    ((o as any).push as any)(...(a as any).marks);
  });
  const l: any = ((o as any).find as any)((a: any): any => (((a as any).type as any).name as any) === ((t as any).name as any));
  return l ? {
    ...(l as any).attrs
  } : {};
}
function Wa(this: any, n: any, e: any): any {
  const t: any = new (Fl as any)(n);
  return ((e as any).forEach as any)((r: any): any => {
    (((r as any).steps as any).forEach as any)((s: any): any => {
      ((t as any).step as any)(s);
    });
  }), t;
}
function Fh(this: any, n: any): any {
  for (let e: any = 0; (e as any) < ((n as any).edgeCount as any); e += 1) {
    const {
      type: t
    }: any = ((n as any).edge as any)(e);
    if ((t as any).isTextblock && !((t as any).hasRequiredAttrs as any)()) return t;
  }
  return null;
}
function Hh(this: any, n: any, e: any, t: any): any {
  const r: any = [];
  return ((n as any).nodesBetween as any)((e as any).from, (e as any).to, (s: any, i: any): any => {
    (t as any)(s) && ((r as any).push as any)({
      node: s,
      pos: i
    });
  }), r;
}
function Vh(this: any, n: any, e: any): any {
  for (let t: any = (n as any).depth; (t as any) > (0 as any); t -= 1) {
    const r: any = ((n as any).node as any)(t);
    if ((e as any)(r)) return {
      pos: (t as any) > (0 as any) ? ((n as any).before as any)(t) : 0,
      start: ((n as any).start as any)(t),
      depth: t,
      node: r
    };
  }
}
function zr(this: any, n: any): any {
  return (e: any): any => (Vh as any)((e as any).$from, n);
}
function T(this: any, n: any, e: any, t: any): any {
  return (((n as any).config as any)[e] as any) === (void 0 as any) && (n as any).parent ? (T as any)((n as any).parent, e, t) : (typeof ((n as any).config as any)[e] as any) == ("function" as any) ? ((((n as any).config as any)[e] as any).bind as any)({
    ...t,
    parent: (n as any).parent ? (T as any)((n as any).parent, e, t) : null
  }) : ((n as any).config as any)[e];
}
function di(this: any, n: any): any {
  return ((((n as any).map as any)((e: any): any => {
    const t: any = {
        name: (e as any).name,
        options: (e as any).options,
        storage: (e as any).storage
      },
      r: any = (T as any)(e, "addExtensions", t);
    return r ? [e, ...(di as any)((r as any)())] : e;
  }) as any).flat as any)(10);
}
function fi(this: any, n: any, e: any): any {
  const t: any = ((((kt as any).fromSchema as any)(e) as any).serializeFragment as any)(n),
    s: any = (((((document as any).implementation as any).createHTMLDocument as any)() as any).createElement as any)("div");
  return ((s as any).appendChild as any)(t), (s as any).innerHTML;
}
function qa(this: any, n: any): any {
  return (typeof n as any) == ("function" as any);
}
function P(this: any, n: any, e: any = void 0, ...t: any): any {
  return (qa as any)(n) ? e ? (((n as any).bind as any)(e) as any)(...t) : (n as any)(...t) : n;
}
function jh(this: any, n: any = {}): any {
  return ((((Object as any).keys as any)(n) as any).length as any) === (0 as any) && ((n as any).constructor as any) === (Object as any);
}
function Bt(this: any, n: any): any {
  const e: any = ((n as any).filter as any)((s: any): any => ((s as any).type as any) === ("extension" as any)),
    t: any = ((n as any).filter as any)((s: any): any => ((s as any).type as any) === ("node" as any)),
    r: any = ((n as any).filter as any)((s: any): any => ((s as any).type as any) === ("mark" as any));
  return {
    baseExtensions: e,
    nodeExtensions: t,
    markExtensions: r
  };
}
function Ka(this: any, n: any): any {
  const e: any = [],
    {
      nodeExtensions: t,
      markExtensions: r
    }: any = (Bt as any)(n),
    s: any = [...t, ...r],
    i: any = {
      default: null,
      validate: void 0,
      rendered: !0,
      renderHTML: null,
      parseHTML: null,
      keepOnSplit: !0,
      isRequired: !1
    };
  return ((n as any).forEach as any)((o: any): any => {
    const l: any = {
        name: (o as any).name,
        options: (o as any).options,
        storage: (o as any).storage,
        extensions: s
      },
      a: any = (T as any)(o, "addGlobalAttributes", l);
    if (!a) return;
    (((a as any)() as any).forEach as any)((u: any): any => {
      (((u as any).types as any).forEach as any)((d: any): any => {
        ((((Object as any).entries as any)((u as any).attributes) as any).forEach as any)(([f, h]: any): any => {
          ((e as any).push as any)({
            type: d,
            name: f,
            attribute: {
              ...i,
              ...h
            }
          });
        });
      });
    });
  }), ((s as any).forEach as any)((o: any): any => {
    const l: any = {
        name: (o as any).name,
        options: (o as any).options,
        storage: (o as any).storage
      },
      a: any = (T as any)(o, "addAttributes", l);
    if (!a) return;
    const c: any = (a as any)();
    ((((Object as any).entries as any)(c) as any).forEach as any)(([u, d]: any): any => {
      const f: any = {
        ...i,
        ...d
      };
      (typeof f?.default as any) == ("function" as any) && ((f as any).default = ((f as any).default as any)()), f?.isRequired && (f?.default as any) === (void 0 as any) && delete (f as any).default, ((e as any).push as any)({
        type: (o as any).name,
        name: u,
        attribute: f
      });
    });
  }), e;
}
function W(this: any, ...n: any): any {
  return ((((n as any).filter as any)((e: any): any => !!e) as any).reduce as any)((e: any, t: any): any => {
    const r: any = {
      ...e
    };
    return ((((Object as any).entries as any)(t) as any).forEach as any)(([s, i]: any): any => {
      if (!(r as any)[s]) {
        (r as any)[s] = i;
        return;
      }
      if ((s as any) === ("class" as any)) {
        const l: any = i ? (((String as any)(i) as any).split as any)(" ") : [],
          a: any = (r as any)[s] ? (((r as any)[s] as any).split as any)(" ") : [],
          c: any = ((l as any).filter as any)((u: any): any => !((a as any).includes as any)(u));
        (r as any)[s] = (([...a, ...c] as any).join as any)(" ");
      } else if ((s as any) === ("style" as any)) {
        const l: any = i ? ((((((i as any).split as any)(";") as any).map as any)((u: any): any => ((u as any).trim as any)()) as any).filter as any)(Boolean) : [],
          a: any = (r as any)[s] ? (((((((r as any)[s] as any).split as any)(";") as any).map as any)((u: any): any => ((u as any).trim as any)()) as any).filter as any)(Boolean) : [],
          c: any = new (Map as any)();
        ((a as any).forEach as any)((u: any): any => {
          const [d, f]: any = ((((u as any).split as any)(":") as any).map as any)((h: any): any => ((h as any).trim as any)());
          ((c as any).set as any)(d, f);
        }), ((l as any).forEach as any)((u: any): any => {
          const [d, f]: any = ((((u as any).split as any)(":") as any).map as any)((h: any): any => ((h as any).trim as any)());
          ((c as any).set as any)(d, f);
        }), (r as any)[s] = ((((((Array as any).from as any)(((c as any).entries as any)()) as any).map as any)(([u, d]: any): any => `${u}: ${d}`) as any).join as any)("; ");
      } else (r as any)[s] = i;
    }), r;
  }, {});
}
function Gn(this: any, n: any, e: any): any {
  return ((((((((e as any).filter as any)((t: any): any => ((t as any).type as any) === (((n as any).type as any).name as any)) as any).filter as any)((t: any): any => ((t as any).attribute as any).rendered) as any).map as any)((t: any): any => ((t as any).attribute as any).renderHTML ? (((t as any).attribute as any).renderHTML as any)((n as any).attrs) || {} : {
    [(t as any).name]: ((n as any).attrs as any)[(t as any).name]
  }) as any).reduce as any)((t: any, r: any): any => (W as any)(t, r), {});
}
function _h(this: any, n: any): any {
  return (typeof n as any) != ("string" as any) ? n : ((n as any).match as any)(/^[+-]?(?:\d*\.)?\d+$/) ? (Number as any)(n) : (n as any) === ("true" as any) ? !0 : (n as any) === ("false" as any) ? !1 : n;
}
function Ro(this: any, n: any, e: any): any {
  return "style" in n ? n : {
    ...n,
    getAttrs: (t: any): any => {
      const r: any = (n as any).getAttrs ? ((n as any).getAttrs as any)(t) : (n as any).attrs;
      if ((r as any) === (!1 as any)) return !1;
      const s: any = ((e as any).reduce as any)((i: any, o: any): any => {
        const l: any = ((o as any).attribute as any).parseHTML ? (((o as any).attribute as any).parseHTML as any)(t) : (_h as any)(((t as any).getAttribute as any)((o as any).name));
        return (l as any) == (null as any) ? i : {
          ...i,
          [(o as any).name]: l
        };
      }, {});
      return {
        ...r,
        ...s
      };
    }
  };
}
function Po(this: any, n: any): any {
  return ((Object as any).fromEntries as any)(((((Object as any).entries as any)(n) as any).filter as any)(([e, t]: any): any => (e as any) === ("attrs" as any) && (jh as any)(t) ? !1 : (t as any) != (null as any)));
}
function Lo(this: any, n: any): any {
  var e: any, t: any;
  const r: any = {};
  return !(((e = n?.attribute) as any) != (null as any) && (e as any).isRequired) && "default" in (n?.attribute || {}) && ((r as any).default = ((n as any).attribute as any).default), ((((t = n?.attribute) as any) == (null as any) ? void 0 : (t as any).validate) as any) !== (void 0 as any) && ((r as any).validate = ((n as any).attribute as any).validate), [(n as any).name, r];
}
function Ua(this: any, n: any, e: any): any {
  var t: any;
  const r: any = (Ka as any)(n),
    {
      nodeExtensions: s,
      markExtensions: i
    }: any = (Bt as any)(n),
    o: any = ((t = ((s as any).find as any)((c: any): any => (T as any)(c, "topNode"))) as any) == (null as any) ? void 0 : (t as any).name,
    l: any = ((Object as any).fromEntries as any)(((s as any).map as any)((c: any): any => {
      const u: any = ((r as any).filter as any)((y: any): any => ((y as any).type as any) === ((c as any).name as any)),
        d: any = {
          name: (c as any).name,
          options: (c as any).options,
          storage: (c as any).storage,
          editor: e
        },
        f: any = ((n as any).reduce as any)((y: any, b: any): any => {
          const C: any = (T as any)(b, "extendNodeSchema", d);
          return {
            ...y,
            ...(C ? (C as any)(c) : {})
          };
        }, {}),
        h: any = (Po as any)({
          ...f,
          content: (P as any)((T as any)(c, "content", d)),
          marks: (P as any)((T as any)(c, "marks", d)),
          group: (P as any)((T as any)(c, "group", d)),
          inline: (P as any)((T as any)(c, "inline", d)),
          atom: (P as any)((T as any)(c, "atom", d)),
          selectable: (P as any)((T as any)(c, "selectable", d)),
          draggable: (P as any)((T as any)(c, "draggable", d)),
          code: (P as any)((T as any)(c, "code", d)),
          whitespace: (P as any)((T as any)(c, "whitespace", d)),
          linebreakReplacement: (P as any)((T as any)(c, "linebreakReplacement", d)),
          defining: (P as any)((T as any)(c, "defining", d)),
          isolating: (P as any)((T as any)(c, "isolating", d)),
          attrs: ((Object as any).fromEntries as any)(((u as any).map as any)(Lo))
        }),
        p: any = (P as any)((T as any)(c, "parseHTML", d));
      p && ((h as any).parseDOM = ((p as any).map as any)((y: any): any => (Ro as any)(y, u)));
      const m: any = (T as any)(c, "renderHTML", d);
      m && ((h as any).toDOM = (y: any): any => (m as any)({
        node: y,
        HTMLAttributes: (Gn as any)(y, u)
      }));
      const g: any = (T as any)(c, "renderText", d);
      return g && ((h as any).toText = g), [(c as any).name, h];
    })),
    a: any = ((Object as any).fromEntries as any)(((i as any).map as any)((c: any): any => {
      const u: any = ((r as any).filter as any)((g: any): any => ((g as any).type as any) === ((c as any).name as any)),
        d: any = {
          name: (c as any).name,
          options: (c as any).options,
          storage: (c as any).storage,
          editor: e
        },
        f: any = ((n as any).reduce as any)((g: any, y: any): any => {
          const b: any = (T as any)(y, "extendMarkSchema", d);
          return {
            ...g,
            ...(b ? (b as any)(c) : {})
          };
        }, {}),
        h: any = (Po as any)({
          ...f,
          inclusive: (P as any)((T as any)(c, "inclusive", d)),
          excludes: (P as any)((T as any)(c, "excludes", d)),
          group: (P as any)((T as any)(c, "group", d)),
          spanning: (P as any)((T as any)(c, "spanning", d)),
          code: (P as any)((T as any)(c, "code", d)),
          attrs: ((Object as any).fromEntries as any)(((u as any).map as any)(Lo))
        }),
        p: any = (P as any)((T as any)(c, "parseHTML", d));
      p && ((h as any).parseDOM = ((p as any).map as any)((g: any): any => (Ro as any)(g, u)));
      const m: any = (T as any)(c, "renderHTML", d);
      return m && ((h as any).toDOM = (g: any): any => (m as any)({
        mark: g,
        HTMLAttributes: (Gn as any)(g, u)
      })), [(c as any).name, h];
    }));
  return new (Cl as any)({
    topNode: o,
    nodes: l,
    marks: a
  });
}
function Wh(this: any, n: any): any {
  const e: any = ((n as any).filter as any)((t: any, r: any): any => (((n as any).indexOf as any)(t) as any) !== (r as any));
  return ((Array as any).from as any)(new (Set as any)(e));
}
function hi(this: any, n: any): any {
  return ((n as any).sort as any)((t: any, r: any): any => {
    const s: any = (T as any)(t, "priority") || 100,
      i: any = (T as any)(r, "priority") || 100;
    return (s as any) > (i as any) ? -1 : (s as any) < (i as any) ? 1 : 0;
  });
}
function pi(this: any, n: any): any {
  const e: any = (hi as any)((di as any)(n)),
    t: any = (Wh as any)(((e as any).map as any)((r: any): any => (r as any).name));
  return (t as any).length && ((console as any).warn as any)(`[tiptap warn]: Duplicate extension names found: [${((((t as any).map as any)((r: any): any => `'${r}'`) as any).join as any)(", ")}]. This can lead to issues.`), e;
}
function qh(this: any, n: any, e: any): any {
  const t: any = (pi as any)(n);
  return (Ua as any)(t, e);
}
function ly(this: any, n: any, e: any): any {
  const t: any = (qh as any)(e),
    r: any = (Jt as any)(n);
  return ((((((Le as any).fromSchema as any)(t) as any).parse as any)(r) as any).toJSON as any)();
}
function Ja(this: any, n: any, e: any, t: any): any {
  const {
      from: r,
      to: s
    }: any = e,
    {
      blockSeparator: i = `

`,
      textSerializers: o = {}
    }: any = t || {};
  let l: any = "";
  return ((n as any).nodesBetween as any)(r, s, (a: any, c: any, u: any, d: any): any => {
    var f: any;
    (a as any).isBlock && (c as any) > (r as any) && (l += i);
    const h: any = o?.[((a as any).type as any).name];
    if (h) return u && (l += (h as any)({
      node: a,
      pos: c,
      parent: u,
      index: d,
      range: e
    })), !1;
    (a as any).isText && (l += ((f = a?.text) as any) == (null as any) ? void 0 : ((f as any).slice as any)((((Math as any).max as any)(r, c) as any) - (c as any), (s as any) - (c as any)));
  }), l;
}
function Kh(this: any, n: any, e: any): any {
  const t: any = {
    from: 0,
    to: ((n as any).content as any).size
  };
  return (Ja as any)(n, t, e);
}
function Ga(this: any, n: any): any {
  return ((Object as any).fromEntries as any)(((((((Object as any).entries as any)((n as any).nodes) as any).filter as any)(([, e]: any): any => ((e as any).spec as any).toText) as any).map as any)(([e, t]: any): any => [e, ((t as any).spec as any).toText]));
}
function Uh(this: any, n: any, e: any): any {
  const t: any = (_ as any)(e, (n as any).schema),
    {
      from: r,
      to: s
    }: any = (n as any).selection,
    i: any = [];
  (((n as any).doc as any).nodesBetween as any)(r, s, (l: any): any => {
    ((i as any).push as any)(l);
  });
  const o: any = ((((i as any).reverse as any)() as any).find as any)((l: any): any => (((l as any).type as any).name as any) === ((t as any).name as any));
  return o ? {
    ...(o as any).attrs
  } : {};
}
function Ya(this: any, n: any, e: any): any {
  const t: any = (Lr as any)((typeof e as any) == ("string" as any) ? e : (e as any).name, (n as any).schema);
  return (t as any) === ("node" as any) ? (Uh as any)(n, e) : (t as any) === ("mark" as any) ? (_a as any)(n, e) : {};
}
function Jh(this: any, n: any, e: any = (JSON as any).stringify): any {
  const t: any = {};
  return ((n as any).filter as any)((r: any): any => {
    const s: any = (e as any)(r);
    return ((((Object as any).prototype as any).hasOwnProperty as any).call as any)(t, s) ? !1 : (t as any)[s] = !0;
  });
}
function Gh(this: any, n: any): any {
  const e: any = (Jh as any)(n);
  return ((e as any).length as any) === (1 as any) ? e : ((e as any).filter as any)((t: any, r: any): any => !((((e as any).filter as any)((i: any, o: any): any => (o as any) !== (r as any)) as any).some as any)((i: any): any => (((t as any).oldRange as any).from as any) >= (((i as any).oldRange as any).from as any) && (((t as any).oldRange as any).to as any) <= (((i as any).oldRange as any).to as any) && (((t as any).newRange as any).from as any) >= (((i as any).newRange as any).from as any) && (((t as any).newRange as any).to as any) <= (((i as any).newRange as any).to as any)));
}
function Xa(this: any, n: any): any {
  const {
      mapping: e,
      steps: t
    }: any = n,
    r: any = [];
  return (((e as any).maps as any).forEach as any)((s: any, i: any): any => {
    const o: any = [];
    if (((s as any).ranges as any).length) ((s as any).forEach as any)((l: any, a: any): any => {
      ((o as any).push as any)({
        from: l,
        to: a
      });
    });else {
      const {
        from: l,
        to: a
      }: any = (t as any)[i];
      if ((l as any) === (void 0 as any) || (a as any) === (void 0 as any)) return;
      ((o as any).push as any)({
        from: l,
        to: a
      });
    }
    ((o as any).forEach as any)(({
      from: l,
      to: a
    }: any): any => {
      const c: any = ((((e as any).slice as any)(i) as any).map as any)(l, -1),
        u: any = ((((e as any).slice as any)(i) as any).map as any)(a),
        d: any = ((((e as any).invert as any)() as any).map as any)(c, -1),
        f: any = ((((e as any).invert as any)() as any).map as any)(u);
      ((r as any).push as any)({
        oldRange: {
          from: d,
          to: f
        },
        newRange: {
          from: c,
          to: u
        }
      });
    });
  }), (Gh as any)(r);
}
function mi(this: any, n: any, e: any, t: any): any {
  const r: any = [];
  return (n as any) === (e as any) ? ((((((t as any).resolve as any)(n) as any).marks as any)() as any).forEach as any)((s: any): any => {
    const i: any = ((t as any).resolve as any)(n),
      o: any = (ui as any)(i, (s as any).type);
    o && ((r as any).push as any)({
      mark: s,
      ...o
    });
  }) : ((t as any).nodesBetween as any)(n, e, (s: any, i: any): any => {
    !s || (s?.nodeSize as any) === (void 0 as any) || ((r as any).push as any)(...(((s as any).marks as any).map as any)((o: any): any => ({
      from: i,
      to: (i as any) + ((s as any).nodeSize as any),
      mark: o
    })));
  }), r;
}
var Yh: any = (n: any, e: any, t: any, r: any = 20): any => {
  const s: any = (((n as any).doc as any).resolve as any)(t);
  let i: any = r,
    o: any = null;
  for (; (i as any) > (0 as any) && (o as any) === (null as any);) {
    const l: any = ((s as any).node as any)(i);
    (l?.type.name as any) === (e as any) ? o = l : i -= 1;
  }
  return [o, i];
};
function ns(this: any, n: any, e: any): any {
  return ((e as any).nodes as any)[n] || ((e as any).marks as any)[n] || null;
}
function Pn(this: any, n: any, e: any, t: any): any {
  return ((Object as any).fromEntries as any)(((((Object as any).entries as any)(t) as any).filter as any)(([r]: any): any => {
    const s: any = ((n as any).find as any)((i: any): any => ((i as any).type as any) === (e as any) && ((i as any).name as any) === (r as any));
    return s ? ((s as any).attribute as any).keepOnSplit : !1;
  }));
}
var Xh: any = (n: any, e: any = 500): any => {
  let t: any = "";
  const r: any = (n as any).parentOffset;
  return (((n as any).parent as any).nodesBetween as any)(((Math as any).max as any)(0, (r as any) - (e as any)), r, (s: any, i: any, o: any, l: any): any => {
    var a: any, c: any;
    const u: any = (((c = ((a = ((s as any).type as any).spec) as any).toText) as any) == (null as any) ? void 0 : ((c as any).call as any)(a, {
      node: s,
      pos: i,
      parent: o,
      index: l
    })) || (s as any).textContent || "%leaf%";
    t += (s as any).isAtom && !(s as any).isText ? u : ((u as any).slice as any)(0, ((Math as any).max as any)(0, (r as any) - (i as any)));
  }), t;
};
function Ds(this: any, n: any, e: any, t: any = {}): any {
  const {
      empty: r,
      ranges: s
    }: any = (n as any).selection,
    i: any = e ? (Be as any)(e, (n as any).schema) : null;
  if (r) return !!((((((n as any).storedMarks || ((((n as any).selection as any).$from as any).marks as any)()) as any).filter as any)((d: any): any => i ? ((i as any).name as any) === (((d as any).type as any).name as any) : !0) as any).find as any)((d: any): any => (Jn as any)((d as any).attrs, t, {
    strict: !1
  }));
  let o: any = 0;
  const l: any = [];
  if (((s as any).forEach as any)(({
    $from: d,
    $to: f
  }: any): any => {
    const h: any = (d as any).pos,
      p: any = (f as any).pos;
    (((n as any).doc as any).nodesBetween as any)(h, p, (m: any, g: any): any => {
      if (!(m as any).isText && !((m as any).marks as any).length) return;
      const y: any = ((Math as any).max as any)(h, g),
        b: any = ((Math as any).min as any)(p, (g as any) + ((m as any).nodeSize as any)),
        C: any = (b as any) - (y as any);
      o += C, ((l as any).push as any)(...(((m as any).marks as any).map as any)((M: any): any => ({
        mark: M,
        from: y,
        to: b
      })));
    });
  }), (o as any) === (0 as any)) return !1;
  const a: any = ((((((l as any).filter as any)((d: any): any => i ? ((i as any).name as any) === ((((d as any).mark as any).type as any).name as any) : !0) as any).filter as any)((d: any): any => (Jn as any)(((d as any).mark as any).attrs, t, {
      strict: !1
    })) as any).reduce as any)((d: any, f: any): any => ((d as any) + ((f as any).to as any) as any) - ((f as any).from as any), 0),
    c: any = ((((l as any).filter as any)((d: any): any => i ? (((d as any).mark as any).type as any) !== (i as any) && ((((d as any).mark as any).type as any).excludes as any)(i) : !0) as any).reduce as any)((d: any, f: any): any => ((d as any) + ((f as any).to as any) as any) - ((f as any).from as any), 0);
  return (((a as any) > (0 as any) ? (a as any) + (c as any) : a) as any) >= (o as any);
}
function Qh(this: any, n: any, e: any, t: any = {}): any {
  if (!e) return (Ze as any)(n, null, t) || (Ds as any)(n, null, t);
  const r: any = (Lr as any)(e, (n as any).schema);
  return (r as any) === ("node" as any) ? (Ze as any)(n, e, t) : (r as any) === ("mark" as any) ? (Ds as any)(n, e, t) : !1;
}
var Zh: any = (n: any, e: any): any => {
    const {
      $from: t,
      $to: r,
      $anchor: s
    }: any = (n as any).selection;
    if (e) {
      const i: any = ((zr as any)((l: any): any => (((l as any).type as any).name as any) === (e as any)) as any)((n as any).selection);
      if (!i) return !1;
      const o: any = (((n as any).doc as any).resolve as any)(((i as any).pos as any) + (1 as any));
      return (((s as any).pos as any) + (1 as any) as any) === (((o as any).end as any)() as any);
    }
    return !(((r as any).parentOffset as any) < ((((r as any).parent as any).nodeSize as any) - (2 as any) as any) || ((t as any).pos as any) !== ((r as any).pos as any));
  },
  ep: any = (n: any): any => {
    const {
      $from: e,
      $to: t
    }: any = (n as any).selection;
    return !(((e as any).parentOffset as any) > (0 as any) || ((e as any).pos as any) !== ((t as any).pos as any));
  };
function zo(this: any, n: any, e: any): any {
  return ((Array as any).isArray as any)(e) ? ((e as any).some as any)((t: any): any => (((typeof t as any) == ("string" as any) ? t : (t as any).name) as any) === ((n as any).name as any)) : e;
}
function Bo(this: any, n: any, e: any): any {
  const {
      nodeExtensions: t
    }: any = (Bt as any)(e),
    r: any = ((t as any).find as any)((o: any): any => ((o as any).name as any) === (n as any));
  if (!r) return !1;
  const s: any = {
      name: (r as any).name,
      options: (r as any).options,
      storage: (r as any).storage
    },
    i: any = (P as any)((T as any)(r, "group", s));
  return (typeof i as any) != ("string" as any) ? !1 : ((((i as any).split as any)(" ") as any).includes as any)("list");
}
function Br(this: any, n: any, {
  checkChildren: e = !0,
  ignoreWhitespace: t = !1
}: any = {}): any {
  var r: any;
  if (t) {
    if ((((n as any).type as any).name as any) === ("hardBreak" as any)) return !0;
    if ((n as any).isText) return ((/^\s*$/m as any).test as any)(((r = (n as any).text) as any) != (null as any) ? r : "");
  }
  if ((n as any).isText) return !(n as any).text;
  if ((n as any).isAtom || (n as any).isLeaf) return !1;
  if ((((n as any).content as any).childCount as any) === (0 as any)) return !0;
  if (e) {
    let s: any = !0;
    return (((n as any).content as any).forEach as any)((i: any): any => {
      (s as any) !== (!1 as any) && ((Br as any)(i, {
        ignoreWhitespace: t,
        checkChildren: e
      }) || (s = !1));
    }), s;
  }
  return !1;
}
function Qa(this: any, n: any): any {
  return n instanceof v;
}
var Za: any = class ec {
  declare position: any;
  [key: string]: any;
  constructor(e: any) {
    (this as any).position = e;
  }
  static fromJSON(e: any): any {
    return new (ec as any)((e as any).position);
  }
  toJSON(): any {
    return {
      position: (this as any).position
    };
  }
};
function tp(this: any, n: any, e: any): any {
  const t: any = (((e as any).mapping as any).mapResult as any)((n as any).position);
  return {
    position: new (Za as any)((t as any).pos),
    mapResult: t
  };
}
function np(this: any, n: any): any {
  return new (Za as any)(n);
}
function ay(this: any, n: any, e: any, t: any): any {
  const s: any = ((((n as any).state as any).doc as any).content as any).size,
    i: any = (Pe as any)(e, 0, s),
    o: any = (Pe as any)(t, 0, s),
    l: any = ((n as any).coordsAtPos as any)(i),
    a: any = ((n as any).coordsAtPos as any)(o, -1),
    c: any = ((Math as any).min as any)((l as any).top, (a as any).top),
    u: any = ((Math as any).max as any)((l as any).bottom, (a as any).bottom),
    d: any = ((Math as any).min as any)((l as any).left, (a as any).left),
    f: any = ((Math as any).max as any)((l as any).right, (a as any).right),
    h: any = (f as any) - (d as any),
    p: any = (u as any) - (c as any),
    y: any = {
      top: c,
      bottom: u,
      left: d,
      right: f,
      width: h,
      height: p,
      x: d,
      y: c
    };
  return {
    ...y,
    toJSON: (): any => y
  };
}
function rp(this: any, n: any, e: any, t: any): any {
  var r: any;
  const {
    selection: s
  }: any = e;
  let i: any = null;
  if (($a as any)(s) && (i = (s as any).$cursor), i) {
    const l: any = ((r = (n as any).storedMarks) as any) != (null as any) ? r : ((i as any).marks as any)();
    return ((((i as any).parent as any).type as any).allowsMarkType as any)(t) && (!!((t as any).isInSet as any)(l) || !((l as any).some as any)((c: any): any => (((c as any).type as any).excludes as any)(t)));
  }
  const {
    ranges: o
  }: any = s;
  return ((o as any).some as any)(({
    $from: l,
    $to: a
  }: any): any => {
    let c: any = ((l as any).depth as any) === (0 as any) ? ((n as any).doc as any).inlineContent && ((((n as any).doc as any).type as any).allowsMarkType as any)(t) : !1;
    return (((n as any).doc as any).nodesBetween as any)((l as any).pos, (a as any).pos, (u: any, d: any, f: any): any => {
      if (c) return !1;
      if ((u as any).isInline) {
        const h: any = !f || (((f as any).type as any).allowsMarkType as any)(t),
          p: any = !!((t as any).isInSet as any)((u as any).marks) || !(((u as any).marks as any).some as any)((m: any): any => (((m as any).type as any).excludes as any)(t));
        c = h && p;
      }
      return !c;
    }), c;
  });
}
var sp: any = (n: any, e: any = {}): any => ({
    tr: t,
    state: r,
    dispatch: s
  }: any): any => {
    const {
        selection: i
      }: any = t,
      {
        empty: o,
        ranges: l
      }: any = i,
      a: any = (Be as any)(n, (r as any).schema);
    if (s) if (o) {
      const c: any = (_a as any)(r, a);
      ((t as any).addStoredMark as any)(((a as any).create as any)({
        ...c,
        ...e
      }));
    } else ((l as any).forEach as any)((c: any): any => {
      const u: any = ((c as any).$from as any).pos,
        d: any = ((c as any).$to as any).pos;
      (((r as any).doc as any).nodesBetween as any)(u, d, (f: any, h: any): any => {
        const p: any = ((Math as any).max as any)(h, u),
          m: any = ((Math as any).min as any)((h as any) + ((f as any).nodeSize as any), d);
        (((f as any).marks as any).find as any)((y: any): any => ((y as any).type as any) === (a as any)) ? (((f as any).marks as any).forEach as any)((y: any): any => {
          (a as any) === ((y as any).type as any) && ((t as any).addMark as any)(p, m, ((a as any).create as any)({
            ...(y as any).attrs,
            ...e
          }));
        }) : ((t as any).addMark as any)(p, m, ((a as any).create as any)(e));
      });
    });
    return (rp as any)(r, t, a);
  },
  ip: any = (n: any, e: any): any => ({
    tr: t
  }: any): any => (((t as any).setMeta as any)(n, e), !0),
  op: any = (n: any, e: any = {}): any => ({
    state: t,
    dispatch: r,
    chain: s
  }: any): any => {
    const i: any = (_ as any)(n, (t as any).schema);
    let o: any;
    return ((((t as any).selection as any).$anchor as any).sameParent as any)(((t as any).selection as any).$head) && (o = ((((t as any).selection as any).$anchor as any).parent as any).attrs), (i as any).isTextblock ? (((((((s as any)() as any).command as any)(({
      commands: l
    }: any): any => ((Yi as any)(i, {
      ...o,
      ...e
    }) as any)(t) ? !0 : ((l as any).clearNodes as any)()) as any).command as any)(({
      state: l
    }: any): any => ((Yi as any)(i, {
      ...o,
      ...e
    }) as any)(l, r)) as any).run as any)() : (((console as any).warn as any)('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
  },
  lp: any = (n: any): any => ({
    tr: e,
    dispatch: t
  }: any): any => {
    if (t) {
      const {
          doc: r
        }: any = e,
        s: any = (Pe as any)(n, 0, ((r as any).content as any).size),
        i: any = ((v as any).create as any)(r, s);
      ((e as any).setSelection as any)(i);
    }
    return !0;
  },
  ap: any = (n: any, e: any): any => ({
    tr: t,
    state: r,
    dispatch: s
  }: any): any => {
    const {
      selection: i
    }: any = r;
    let o: any, l: any;
    return (typeof e as any) == ("number" as any) ? (o = e, l = e) : e && "from" in e && "to" in e ? (o = (e as any).from, l = (e as any).to) : (o = (i as any).from, l = (i as any).to), s && (((t as any).doc as any).nodesBetween as any)(o, l, (a: any, c: any): any => {
      (a as any).isText || ((t as any).setNodeMarkup as any)(c, void 0, {
        ...(a as any).attrs,
        dir: n
      });
    }), !0;
  },
  cp: any = (n: any): any => ({
    tr: e,
    dispatch: t
  }: any): any => {
    if (t) {
      const {
          doc: r
        }: any = e,
        {
          from: s,
          to: i
        }: any = (typeof n as any) == ("number" as any) ? {
          from: n,
          to: n
        } : n,
        o: any = (((N as any).atStart as any)(r) as any).from,
        l: any = (((N as any).atEnd as any)(r) as any).to,
        a: any = (Pe as any)(s, o, l),
        c: any = (Pe as any)(i, o, l),
        u: any = ((N as any).create as any)(r, a, c);
      ((e as any).setSelection as any)(u);
    }
    return !0;
  },
  up: any = (n: any): any => ({
    state: e,
    dispatch: t
  }: any): any => {
    const r: any = (_ as any)(n, (e as any).schema);
    return ((sd as any)(r) as any)(e, t);
  };
function $o(this: any, n: any, e: any): any {
  const t: any = (n as any).storedMarks || (((n as any).selection as any).$to as any).parentOffset && ((((n as any).selection as any).$from as any).marks as any)();
  if (t) {
    const r: any = ((t as any).filter as any)((s: any): any => e?.includes(((s as any).type as any).name));
    (((n as any).tr as any).ensureMarks as any)(r);
  }
}
var dp: any = ({
    keepMarks: n = !0
  }: any = {}): any => ({
    tr: e,
    state: t,
    dispatch: r,
    editor: s
  }: any): any => {
    const {
        selection: i,
        doc: o
      }: any = e,
      {
        $from: l,
        $to: a
      }: any = i,
      c: any = ((s as any).extensionManager as any).attributes,
      u: any = (Pn as any)(c, ((((l as any).node as any)() as any).type as any).name, (((l as any).node as any)() as any).attrs);
    if (i instanceof v && ((i as any).node as any).isBlock) return !(l as any).parentOffset || !(Ee as any)(o, (l as any).pos) ? !1 : (r && (n && ($o as any)(t, ((s as any).extensionManager as any).splittableMarks), ((((e as any).split as any)((l as any).pos) as any).scrollIntoView as any)()), !0);
    if (!((l as any).parent as any).isBlock) return !1;
    const d: any = ((a as any).parentOffset as any) === ((((a as any).parent as any).content as any).size as any),
      f: any = ((l as any).depth as any) === (0 as any) ? void 0 : (Fh as any)(((((l as any).node as any)(-1) as any).contentMatchAt as any)(((l as any).indexAfter as any)(-1)));
    let h: any = d && f ? [{
        type: f,
        attrs: u
      }] : void 0,
      p: any = (Ee as any)((e as any).doc, (((e as any).mapping as any).map as any)((l as any).pos), 1, h);
    if (!h && !p && (Ee as any)((e as any).doc, (((e as any).mapping as any).map as any)((l as any).pos), 1, f ? [{
      type: f
    }] : void 0) && (p = !0, h = f ? [{
      type: f,
      attrs: u
    }] : void 0), r) {
      if (p && (i instanceof N && ((e as any).deleteSelection as any)(), ((e as any).split as any)((((e as any).mapping as any).map as any)((l as any).pos), 1, h), f && !d && !(l as any).parentOffset && (((l as any).parent as any).type as any) !== (f as any))) {
        const m: any = (((e as any).mapping as any).map as any)(((l as any).before as any)()),
          g: any = (((e as any).doc as any).resolve as any)(m);
        ((((l as any).node as any)(-1) as any).canReplaceWith as any)(((g as any).index as any)(), (((g as any).index as any)() as any) + (1 as any), f) && ((e as any).setNodeMarkup as any)((((e as any).mapping as any).map as any)(((l as any).before as any)()), f);
      }
      n && ($o as any)(t, ((s as any).extensionManager as any).splittableMarks), ((e as any).scrollIntoView as any)();
    }
    return p;
  },
  fp: any = (n: any, e: any = {}): any => ({
    tr: t,
    state: r,
    dispatch: s,
    editor: i
  }: any): any => {
    var o: any;
    const l: any = (_ as any)(n, (r as any).schema),
      {
        $from: a,
        $to: c
      }: any = (r as any).selection,
      u: any = ((r as any).selection as any).node;
    if (u && (u as any).isBlock || ((a as any).depth as any) < (2 as any) || !((a as any).sameParent as any)(c)) return !1;
    const d: any = ((a as any).node as any)(-1);
    if (((d as any).type as any) !== (l as any)) return !1;
    const f: any = ((i as any).extensionManager as any).attributes;
    if (((((a as any).parent as any).content as any).size as any) === (0 as any) && ((((a as any).node as any)(-1) as any).childCount as any) === (((a as any).indexAfter as any)(-1) as any)) {
      if (((a as any).depth as any) === (2 as any) || ((((a as any).node as any)(-3) as any).type as any) !== (l as any) || (((a as any).index as any)(-2) as any) !== (((((a as any).node as any)(-2) as any).childCount as any) - (1 as any) as any)) return !1;
      if (s) {
        let y: any = (k as any).empty;
        const b: any = ((a as any).index as any)(-1) ? 1 : ((a as any).index as any)(-2) ? 2 : 3;
        for (let I: any = ((a as any).depth as any) - (b as any); (I as any) >= (((a as any).depth as any) - (3 as any) as any); I -= 1) y = ((k as any).from as any)(((((a as any).node as any)(I) as any).copy as any)(y));
        const C: any = (((a as any).indexAfter as any)(-1) as any) < ((((a as any).node as any)(-2) as any).childCount as any) ? 1 : (((a as any).indexAfter as any)(-2) as any) < ((((a as any).node as any)(-3) as any).childCount as any) ? 2 : 3,
          M: any = {
            ...(Pn as any)(f, ((((a as any).node as any)() as any).type as any).name, (((a as any).node as any)() as any).attrs),
            ...e
          },
          S: any = (((o = ((l as any).contentMatch as any).defaultType) as any) == (null as any) ? void 0 : ((o as any).createAndFill as any)(M)) || void 0;
        y = ((y as any).append as any)(((k as any).from as any)(((l as any).createAndFill as any)(null, S) || void 0));
        const A: any = ((a as any).before as any)(((a as any).depth as any) - ((b as any) - (1 as any) as any));
        ((t as any).replace as any)(A, ((a as any).after as any)(-C), new (w as any)(y, (4 as any) - (b as any), 0));
        let E: any = -1;
        (((t as any).doc as any).nodesBetween as any)(A, (((t as any).doc as any).content as any).size, (I: any, R: any): any => {
          if ((E as any) > (-1 as any)) return !1;
          (I as any).isTextblock && (((I as any).content as any).size as any) === (0 as any) && (E = (R as any) + (1 as any));
        }), (E as any) > (-1 as any) && ((t as any).setSelection as any)(((N as any).near as any)((((t as any).doc as any).resolve as any)(E))), ((t as any).scrollIntoView as any)();
      }
      return !0;
    }
    const h: any = ((c as any).pos as any) === (((a as any).end as any)() as any) ? (((d as any).contentMatchAt as any)(0) as any).defaultType : null,
      p: any = {
        ...(Pn as any)(f, ((d as any).type as any).name, (d as any).attrs),
        ...e
      },
      m: any = {
        ...(Pn as any)(f, ((((a as any).node as any)() as any).type as any).name, (((a as any).node as any)() as any).attrs),
        ...e
      };
    ((t as any).delete as any)((a as any).pos, (c as any).pos);
    const g: any = h ? [{
      type: l,
      attrs: p
    }, {
      type: h,
      attrs: m
    }] : [{
      type: l,
      attrs: p
    }];
    if (!(Ee as any)((t as any).doc, (a as any).pos, 2)) return !1;
    if (s) {
      const {
          selection: y,
          storedMarks: b
        }: any = r,
        {
          splittableMarks: C
        }: any = (i as any).extensionManager,
        M: any = b || ((y as any).$to as any).parentOffset && (((y as any).$from as any).marks as any)();
      if (((((t as any).split as any)((a as any).pos, 2, g) as any).scrollIntoView as any)(), !M || !s) return !0;
      const S: any = ((M as any).filter as any)((A: any): any => ((C as any).includes as any)(((A as any).type as any).name));
      ((t as any).ensureMarks as any)(S);
    }
    return !0;
  },
  rs: any = (n: any, e: any): any => {
    const t: any = ((zr as any)((o: any): any => ((o as any).type as any) === (e as any)) as any)((n as any).selection);
    if (!t) return !0;
    const r: any = (((((n as any).doc as any).resolve as any)(((Math as any).max as any)(0, ((t as any).pos as any) - (1 as any))) as any).before as any)((t as any).depth);
    if ((r as any) === (void 0 as any)) return !0;
    const s: any = (((n as any).doc as any).nodeAt as any)(r);
    return (((t as any).node as any).type as any) === (s?.type as any) && (et as any)((n as any).doc, (t as any).pos) && ((n as any).join as any)((t as any).pos), !0;
  },
  ss: any = (n: any, e: any): any => {
    const t: any = ((zr as any)((o: any): any => ((o as any).type as any) === (e as any)) as any)((n as any).selection);
    if (!t) return !0;
    const r: any = (((((n as any).doc as any).resolve as any)((t as any).start) as any).after as any)((t as any).depth);
    if ((r as any) === (void 0 as any)) return !0;
    const s: any = (((n as any).doc as any).nodeAt as any)(r);
    return (((t as any).node as any).type as any) === (s?.type as any) && (et as any)((n as any).doc, r) && ((n as any).join as any)(r), !0;
  },
  hp: any = (n: any, e: any, t: any, r: any = {}): any => ({
    editor: s,
    tr: i,
    state: o,
    dispatch: l,
    chain: a,
    commands: c,
    can: u
  }: any): any => {
    const {
        extensions: d,
        splittableMarks: f
      }: any = (s as any).extensionManager,
      h: any = (_ as any)(n, (o as any).schema),
      p: any = (_ as any)(e, (o as any).schema),
      {
        selection: m,
        storedMarks: g
      }: any = o,
      {
        $from: y,
        $to: b
      }: any = m,
      C: any = ((y as any).blockRange as any)(b),
      M: any = g || ((m as any).$to as any).parentOffset && (((m as any).$from as any).marks as any)();
    if (!C) return !1;
    const S: any = ((zr as any)((A: any): any => (Bo as any)(((A as any).type as any).name, d)) as any)(m);
    if (((C as any).depth as any) >= (1 as any) && S && (((C as any).depth as any) - ((S as any).depth as any) as any) <= (1 as any)) {
      if ((((S as any).node as any).type as any) === (h as any)) return ((c as any).liftListItem as any)(p);
      if ((Bo as any)((((S as any).node as any).type as any).name, d) && ((h as any).validContent as any)(((S as any).node as any).content) && l) return (((((((((a as any)() as any).command as any)((): any => (((i as any).setNodeMarkup as any)((S as any).pos, h), !0)) as any).command as any)((): any => (rs as any)(i, h)) as any).command as any)((): any => (ss as any)(i, h)) as any).run as any)();
    }
    return !t || !M || !l ? (((((((((((a as any)() as any).command as any)((): any => (((u as any)() as any).wrapInList as any)(h, r) ? !0 : ((c as any).clearNodes as any)()) as any).wrapInList as any)(h, r) as any).command as any)((): any => (rs as any)(i, h)) as any).command as any)((): any => (ss as any)(i, h)) as any).run as any)() : (((((((((((a as any)() as any).command as any)((): any => {
      const A: any = (((u as any)() as any).wrapInList as any)(h, r),
        E: any = ((M as any).filter as any)((I: any): any => ((f as any).includes as any)(((I as any).type as any).name));
      return ((i as any).ensureMarks as any)(E), A ? !0 : ((c as any).clearNodes as any)();
    }) as any).wrapInList as any)(h, r) as any).command as any)((): any => (rs as any)(i, h)) as any).command as any)((): any => (ss as any)(i, h)) as any).run as any)();
  },
  pp: any = (n: any, e: any = {}, t: any = {}): any => ({
    state: r,
    commands: s
  }: any): any => {
    const {
        extendEmptyMarkRange: i = !1
      }: any = t,
      o: any = (Be as any)(n, (r as any).schema);
    return (Ds as any)(r, o, e) ? ((s as any).unsetMark as any)(o, {
      extendEmptyMarkRange: i
    }) : ((s as any).setMark as any)(o, e);
  },
  mp: any = (n: any, e: any, t: any = {}): any => ({
    state: r,
    commands: s
  }: any): any => {
    const i: any = (_ as any)(n, (r as any).schema),
      o: any = (_ as any)(e, (r as any).schema),
      l: any = (Ze as any)(r, i, t);
    let a: any;
    return ((((r as any).selection as any).$anchor as any).sameParent as any)(((r as any).selection as any).$head) && (a = ((((r as any).selection as any).$anchor as any).parent as any).attrs), l ? ((s as any).setNode as any)(o, a) : ((s as any).setNode as any)(i, {
      ...a,
      ...t
    });
  },
  gp: any = (n: any, e: any = {}): any => ({
    state: t,
    commands: r
  }: any): any => {
    const s: any = (_ as any)(n, (t as any).schema);
    return (Ze as any)(t, s, e) ? ((r as any).lift as any)(s) : ((r as any).wrapIn as any)(s, e);
  },
  yp: any = (): any => ({
    state: n,
    dispatch: e
  }: any): any => {
    const t: any = (n as any).plugins;
    for (let r: any = 0; (r as any) < ((t as any).length as any); r += 1) {
      const s: any = (t as any)[r];
      let i: any;
      if (((s as any).spec as any).isInputRules && (i = ((s as any).getState as any)(n))) {
        if (e) {
          const o: any = (n as any).tr,
            l: any = (i as any).transform;
          for (let a: any = (((l as any).steps as any).length as any) - (1 as any); (a as any) >= (0 as any); a -= 1) ((o as any).step as any)(((((l as any).steps as any)[a] as any).invert as any)(((l as any).docs as any)[a]));
          if ((i as any).text) {
            const a: any = (((((o as any).doc as any).resolve as any)((i as any).from) as any).marks as any)();
            ((o as any).replaceWith as any)((i as any).from, (i as any).to, (((n as any).schema as any).text as any)((i as any).text, a));
          } else ((o as any).delete as any)((i as any).from, (i as any).to);
        }
        return !0;
      }
    }
    return !1;
  },
  kp: any = (): any => ({
    tr: n,
    dispatch: e
  }: any): any => {
    const {
        selection: t
      }: any = n,
      {
        empty: r,
        ranges: s
      }: any = t;
    return r || e && ((s as any).forEach as any)((i: any): any => {
      ((n as any).removeMark as any)(((i as any).$from as any).pos, ((i as any).$to as any).pos);
    }), !0;
  },
  bp: any = (n: any, e: any = {}): any => ({
    tr: t,
    state: r,
    dispatch: s
  }: any): any => {
    var i: any;
    const {
        extendEmptyMarkRange: o = !1
      }: any = e,
      {
        selection: l
      }: any = t,
      a: any = (Be as any)(n, (r as any).schema),
      {
        $from: c,
        empty: u,
        ranges: d
      }: any = l;
    if (!s) return !0;
    if (u && o) {
      let {
        from: f,
        to: h
      }: any = l;
      const p: any = ((i = ((((c as any).marks as any)() as any).find as any)((g: any): any => ((g as any).type as any) === (a as any))) as any) == (null as any) ? void 0 : (i as any).attrs,
        m: any = (ui as any)(c, a, p);
      m && (f = (m as any).from, h = (m as any).to), ((t as any).removeMark as any)(f, h, a);
    } else ((d as any).forEach as any)((f: any): any => {
      ((t as any).removeMark as any)(((f as any).$from as any).pos, ((f as any).$to as any).pos, a);
    });
    return ((t as any).removeStoredMark as any)(a), !0;
  },
  xp: any = (n: any): any => ({
    tr: e,
    state: t,
    dispatch: r
  }: any): any => {
    const {
      selection: s
    }: any = t;
    let i: any, o: any;
    return (typeof n as any) == ("number" as any) ? (i = n, o = n) : n && "from" in n && "to" in n ? (i = (n as any).from, o = (n as any).to) : (i = (s as any).from, o = (s as any).to), r && (((e as any).doc as any).nodesBetween as any)(i, o, (l: any, a: any): any => {
      if ((l as any).isText) return;
      const c: any = {
        ...(l as any).attrs
      };
      delete (c as any).dir, ((e as any).setNodeMarkup as any)(a, void 0, c);
    }), !0;
  },
  Sp: any = (n: any, e: any = {}): any => ({
    tr: t,
    state: r,
    dispatch: s
  }: any): any => {
    let i: any = null,
      o: any = null;
    const l: any = (Lr as any)((typeof n as any) == ("string" as any) ? n : (n as any).name, (r as any).schema);
    if (!l) return !1;
    (l as any) === ("node" as any) && (i = (_ as any)(n, (r as any).schema)), (l as any) === ("mark" as any) && (o = (Be as any)(n, (r as any).schema));
    let a: any = !1;
    return ((((t as any).selection as any).ranges as any).forEach as any)((c: any): any => {
      const u: any = ((c as any).$from as any).pos,
        d: any = ((c as any).$to as any).pos;
      let f: any, h: any, p: any, m: any;
      ((t as any).selection as any).empty ? (((r as any).doc as any).nodesBetween as any)(u, d, (g: any, y: any): any => {
        i && (i as any) === ((g as any).type as any) && (a = !0, p = ((Math as any).max as any)(y, u), m = ((Math as any).min as any)((y as any) + ((g as any).nodeSize as any), d), f = y, h = g);
      }) : (((r as any).doc as any).nodesBetween as any)(u, d, (g: any, y: any): any => {
        (y as any) < (u as any) && i && (i as any) === ((g as any).type as any) && (a = !0, p = ((Math as any).max as any)(y, u), m = ((Math as any).min as any)((y as any) + ((g as any).nodeSize as any), d), f = y, h = g), (y as any) >= (u as any) && (y as any) <= (d as any) && (i && (i as any) === ((g as any).type as any) && (a = !0, s && ((t as any).setNodeMarkup as any)(y, void 0, {
          ...(g as any).attrs,
          ...e
        })), o && ((g as any).marks as any).length && (((g as any).marks as any).forEach as any)((b: any): any => {
          if ((o as any) === ((b as any).type as any) && (a = !0, s)) {
            const C: any = ((Math as any).max as any)(y, u),
              M: any = ((Math as any).min as any)((y as any) + ((g as any).nodeSize as any), d);
            ((t as any).addMark as any)(C, M, ((o as any).create as any)({
              ...(b as any).attrs,
              ...e
            }));
          }
        }));
      }), h && ((f as any) !== (void 0 as any) && s && ((t as any).setNodeMarkup as any)(f, void 0, {
        ...(h as any).attrs,
        ...e
      }), o && ((h as any).marks as any).length && (((h as any).marks as any).forEach as any)((g: any): any => {
        (o as any) === ((g as any).type as any) && s && ((t as any).addMark as any)(p, m, ((o as any).create as any)({
          ...(g as any).attrs,
          ...e
        }));
      }));
    }), a;
  },
  wp: any = (n: any, e: any = {}): any => ({
    state: t,
    dispatch: r
  }: any): any => {
    const s: any = (_ as any)(n, (t as any).schema);
    return ((Xu as any)(s, e) as any)(t, r);
  },
  Cp: any = (n: any, e: any = {}): any => ({
    state: t,
    dispatch: r
  }: any): any => {
    const s: any = (_ as any)(n, (t as any).schema);
    return ((Qu as any)(s, e) as any)(t, r);
  },
  Mp: any = class {
    declare callbacks: any;
    [key: string]: any;
    constructor() {
      (this as any).callbacks = {};
    }
    on(n: any, e: any): any {
      return ((this as any).callbacks as any)[n] || (((this as any).callbacks as any)[n] = []), ((((this as any).callbacks as any)[n] as any).push as any)(e), this;
    }
    emit(n: any, ...e: any): any {
      const t: any = ((this as any).callbacks as any)[n];
      return t && ((t as any).forEach as any)((r: any): any => ((r as any).apply as any)(this, e)), this;
    }
    off(n: any, e: any): any {
      const t: any = ((this as any).callbacks as any)[n];
      return t && (e ? ((this as any).callbacks as any)[n] = ((t as any).filter as any)((r: any): any => (r as any) !== (e as any)) : delete ((this as any).callbacks as any)[n]), this;
    }
    once(n: any, e: any): any {
      const t: any = (...r: any): any => {
        ((this as any).off as any)(n, t), ((e as any).apply as any)(this, r);
      };
      return ((this as any).on as any)(n, t);
    }
    removeAllListeners(): any {
      (this as any).callbacks = {};
    }
  },
  $r: any = class {
    declare undoable: any;
    declare handler: any;
    declare find: any;
    [key: string]: any;
    constructor(n: any) {
      var e: any;
      (this as any).find = (n as any).find, (this as any).handler = (n as any).handler, (this as any).undoable = ((e = (n as any).undoable) as any) != (null as any) ? e : !0;
    }
  },
  Ep: any = (n: any, e: any): any => {
    if ((ci as any)(e)) return ((e as any).exec as any)(n);
    const t: any = (e as any)(n);
    if (!t) return null;
    const r: any = [(t as any).text];
    return (r as any).index = (t as any).index, (r as any).input = n, (r as any).data = (t as any).data, (t as any).replaceWith && ((((t as any).text as any).includes as any)((t as any).replaceWith) || ((console as any).warn as any)('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), ((r as any).push as any)((t as any).replaceWith)), r;
  };
function Mn(this: any, n: any): any {
  var e: any;
  const {
      editor: t,
      from: r,
      to: s,
      text: i,
      rules: o,
      plugin: l
    }: any = n,
    {
      view: a
    }: any = t;
  if ((a as any).composing) return !1;
  const c: any = ((((a as any).state as any).doc as any).resolve as any)(r);
  if (((((c as any).parent as any).type as any).spec as any).code || ((e = (c as any).nodeBefore || (c as any).nodeAfter) as any) != (null as any) && (((e as any).marks as any).find as any)((f: any): any => (((f as any).type as any).spec as any).code)) return !1;
  let u: any = !1;
  const d: any = ((Xh as any)(c) as any) + (i as any);
  return ((o as any).forEach as any)((f: any): any => {
    if (u) return;
    const h: any = (Ep as any)(d, (f as any).find);
    if (!h) return;
    const p: any = ((a as any).state as any).tr,
      m: any = (Ir as any)({
        state: (a as any).state,
        transaction: p
      }),
      g: any = {
        from: (r as any) - ((((h as any)[0] as any).length as any) - ((i as any).length as any) as any),
        to: s
      },
      {
        commands: y,
        chain: b,
        can: C
      }: any = new (Rr as any)({
        editor: t,
        state: m
      });
    (((f as any).handler as any)({
      state: m,
      range: g,
      match: h,
      commands: y,
      chain: b,
      can: C
    }) as any) === (null as any) || !((p as any).steps as any).length || ((f as any).undoable && ((p as any).setMeta as any)(l, {
      transform: p,
      from: r,
      to: s,
      text: i
    }), ((a as any).dispatch as any)(p), u = !0);
  }), u;
}
function vp(this: any, n: any): any {
  const {
      editor: e,
      rules: t
    }: any = n,
    r: any = new ($ as any)({
      state: {
        init(): any {
          return null;
        },
        apply(s: any, i: any, o: any): any {
          const l: any = ((s as any).getMeta as any)(r);
          if (l) return l;
          const a: any = ((s as any).getMeta as any)("applyInputRules");
          return a && (setTimeout as any)((): any => {
            let {
              text: u
            }: any = a;
            (typeof u as any) == ("string" as any) ? u = u : u = (fi as any)(((k as any).from as any)(u), (o as any).schema);
            const {
                from: d
              }: any = a,
              f: any = (d as any) + ((u as any).length as any);
            (Mn as any)({
              editor: e,
              from: d,
              to: f,
              text: u,
              rules: t,
              plugin: r
            });
          }), (s as any).selectionSet || (s as any).docChanged ? null : i;
        }
      },
      props: {
        handleTextInput(s: any, i: any, o: any, l: any): any {
          return (Mn as any)({
            editor: e,
            from: i,
            to: o,
            text: l,
            rules: t,
            plugin: r
          });
        },
        handleDOMEvents: {
          compositionend: (s: any): any => ((setTimeout as any)((): any => {
            const {
              $cursor: i
            }: any = ((s as any).state as any).selection;
            i && (Mn as any)({
              editor: e,
              from: (i as any).pos,
              to: (i as any).pos,
              text: "",
              rules: t,
              plugin: r
            });
          }), !1)
        },
        handleKeyDown(s: any, i: any): any {
          if (((i as any).key as any) !== ("Enter" as any)) return !1;
          const {
            $cursor: o
          }: any = ((s as any).state as any).selection;
          return o ? (Mn as any)({
            editor: e,
            from: (o as any).pos,
            to: (o as any).pos,
            text: `
`,
            rules: t,
            plugin: r
          }) : !1;
        }
      },
      isInputRules: !0
    });
  return r;
}
function Tp(this: any, n: any): any {
  return ((((((Object as any).prototype as any).toString as any).call as any)(n) as any).slice as any)(8, -1);
}
function En(this: any, n: any): any {
  return ((Tp as any)(n) as any) !== ("Object" as any) ? !1 : ((n as any).constructor as any) === (Object as any) && (((Object as any).getPrototypeOf as any)(n) as any) === ((Object as any).prototype as any);
}
function tc(this: any, n: any, e: any): any {
  const t: any = {
    ...n
  };
  return (En as any)(n) && (En as any)(e) && ((((Object as any).keys as any)(e) as any).forEach as any)((r: any): any => {
    (En as any)((e as any)[r]) && (En as any)((n as any)[r]) ? (t as any)[r] = (tc as any)((n as any)[r], (e as any)[r]) : (t as any)[r] = (e as any)[r];
  }), t;
}
var gi: any = class {
    declare config: any;
    declare name: any;
    declare child: any;
    declare parent: any;
    declare type: any;
    [key: string]: any;
    constructor(n: any = {}) {
      (this as any).type = "extendable", (this as any).parent = null, (this as any).child = null, (this as any).name = "", (this as any).config = {
        name: (this as any).name
      }, (this as any).config = {
        ...(this as any).config,
        ...n
      }, (this as any).name = ((this as any).config as any).name;
    }
    get options(): any {
      return {
        ...((P as any)((T as any)(this, "addOptions", {
          name: (this as any).name
        })) || {})
      };
    }
    get storage(): any {
      return {
        ...((P as any)((T as any)(this, "addStorage", {
          name: (this as any).name,
          options: (this as any).options
        })) || {})
      };
    }
    configure(n: any = {}): any {
      const e: any = ((this as any).extend as any)({
        ...(this as any).config,
        addOptions: (): any => (tc as any)((this as any).options, n)
      });
      return (e as any).name = (this as any).name, (e as any).parent = (this as any).parent, e;
    }
    extend(n: any = {}): any {
      const e: any = new ((this as any).constructor as any)({
        ...(this as any).config,
        ...n
      });
      return (e as any).parent = this, (this as any).child = e, (e as any).name = "name" in n ? (n as any).name : ((e as any).parent as any).name, e;
    }
  },
  bt: any = class nc extends (gi as any) {
    declare type: any;
    [key: string]: any;
    constructor() {
      super(...arguments), (this as any).type = "mark";
    }
    static create(e: any = {}): any {
      const t: any = (typeof e as any) == ("function" as any) ? (e as any)() : e;
      return new (nc as any)(t);
    }
    static handleExit({
      editor: e,
      mark: t
    }: any): any {
      const {
          tr: r
        }: any = (e as any).state,
        s: any = (((e as any).state as any).selection as any).$from;
      if (((s as any).pos as any) === (((s as any).end as any)() as any)) {
        const o: any = ((s as any).marks as any)();
        if (!!!((o as any).find as any)((c: any): any => (c?.type.name as any) === ((t as any).name as any))) return !1;
        const a: any = ((o as any).find as any)((c: any): any => (c?.type.name as any) === ((t as any).name as any));
        return a && ((r as any).removeStoredMark as any)(a), ((r as any).insertText as any)(" ", (s as any).pos), (((e as any).view as any).dispatch as any)(r), !0;
      }
      return !1;
    }
    configure(e: any): any {
      return (super.configure as any)(e);
    }
    extend(e: any): any {
      const t: any = (typeof e as any) == ("function" as any) ? (e as any)() : e;
      return (super.extend as any)(t);
    }
  };
function Ap(this: any, n: any): any {
  return (typeof n as any) == ("number" as any);
}
var Np: any = class {
    declare handler: any;
    declare find: any;
    [key: string]: any;
    constructor(n: any) {
      (this as any).find = (n as any).find, (this as any).handler = (n as any).handler;
    }
  },
  Op: any = (n: any, e: any, t: any): any => {
    if ((ci as any)(e)) return [...((n as any).matchAll as any)(e)];
    const r: any = (e as any)(n, t);
    return r ? ((r as any).map as any)((s: any): any => {
      const i: any = [(s as any).text];
      return (i as any).index = (s as any).index, (i as any).input = n, (i as any).data = (s as any).data, (s as any).replaceWith && ((((s as any).text as any).includes as any)((s as any).replaceWith) || ((console as any).warn as any)('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), ((i as any).push as any)((s as any).replaceWith)), i;
    }) : [];
  };
function Dp(this: any, n: any): any {
  const {
      editor: e,
      state: t,
      from: r,
      to: s,
      rule: i,
      pasteEvent: o,
      dropEvent: l
    }: any = n,
    {
      commands: a,
      chain: c,
      can: u
    }: any = new (Rr as any)({
      editor: e,
      state: t
    }),
    d: any = [];
  return (((t as any).doc as any).nodesBetween as any)(r, s, (h: any, p: any): any => {
    var m: any, g: any, y: any, b: any, C: any;
    if (((g = ((m = (h as any).type) as any) == (null as any) ? void 0 : (m as any).spec) as any) != (null as any) && (g as any).code || !((h as any).isText || (h as any).isTextblock || (h as any).isInline)) return;
    const M: any = ((C = ((b = ((y = (h as any).content) as any) == (null as any) ? void 0 : (y as any).size) as any) != (null as any) ? b : (h as any).nodeSize) as any) != (null as any) ? C : 0,
      S: any = ((Math as any).max as any)(r, p),
      A: any = ((Math as any).min as any)(s, (p as any) + (M as any));
    if ((S as any) >= (A as any)) return;
    const E: any = (h as any).isText ? (h as any).text || "" : ((h as any).textBetween as any)((S as any) - (p as any), (A as any) - (p as any), void 0, "\uFFFC");
    (((Op as any)(E, (i as any).find, o) as any).forEach as any)((R: any): any => {
      if (((R as any).index as any) === (void 0 as any)) return;
      const ae: any = ((S as any) + ((R as any).index as any) as any) + (1 as any),
        St: any = (ae as any) + (((R as any)[0] as any).length as any),
        $e: any = {
          from: ((((t as any).tr as any).mapping as any).map as any)(ae),
          to: ((((t as any).tr as any).mapping as any).map as any)(St)
        },
        wt: any = ((i as any).handler as any)({
          state: t,
          range: $e,
          match: R,
          commands: a,
          chain: c,
          can: u,
          pasteEvent: o,
          dropEvent: l
        });
      ((d as any).push as any)(wt);
    });
  }), ((d as any).every as any)((h: any): any => (h as any) !== (null as any));
}
var vn: any = null,
  Ip: any = (n: any): any => {
    var e: any;
    const t: any = new (ClipboardEvent as any)("paste", {
      clipboardData: new (DataTransfer as any)()
    });
    return ((e = (t as any).clipboardData) as any) == (null as any) || ((e as any).setData as any)("text/html", n), t;
  };
function Rp(this: any, n: any): any {
  const {
    editor: e,
    rules: t
  }: any = n;
  let r: any = null,
    s: any = !1,
    i: any = !1,
    o: any = (typeof ClipboardEvent as any) < ("u" as any) ? new (ClipboardEvent as any)("paste") : null,
    l: any;
  try {
    l = (typeof DragEvent as any) < ("u" as any) ? new (DragEvent as any)("drop") : null;
  } catch {
    l = null;
  }
  const a: any = ({
    state: u,
    from: d,
    to: f,
    rule: h,
    pasteEvt: p
  }: any): any => {
    const m: any = (u as any).tr,
      g: any = (Ir as any)({
        state: u,
        transaction: m
      });
    if (!(!(Dp as any)({
      editor: e,
      state: g,
      from: ((Math as any).max as any)((d as any) - (1 as any), 0),
      to: ((f as any).b as any) - (1 as any),
      rule: h,
      pasteEvent: p,
      dropEvent: l
    }) || !((m as any).steps as any).length)) {
      try {
        l = (typeof DragEvent as any) < ("u" as any) ? new (DragEvent as any)("drop") : null;
      } catch {
        l = null;
      }
      return o = (typeof ClipboardEvent as any) < ("u" as any) ? new (ClipboardEvent as any)("paste") : null, m;
    }
  };
  return ((t as any).map as any)((u: any): any => new ($ as any)({
    view(d: any): any {
      const f: any = (p: any): any => {
          var m: any;
          r = ((m = ((d as any).dom as any).parentElement) as any) != (null as any) && ((m as any).contains as any)((p as any).target) ? ((d as any).dom as any).parentElement : null, r && (vn = e);
        },
        h: any = (): any => {
          vn && (vn = null);
        };
      return ((window as any).addEventListener as any)("dragstart", f), ((window as any).addEventListener as any)("dragend", h), {
        destroy(): any {
          ((window as any).removeEventListener as any)("dragstart", f), ((window as any).removeEventListener as any)("dragend", h);
        }
      };
    },
    props: {
      handleDOMEvents: {
        drop: (d: any, f: any): any => {
          if (i = (r as any) === (((d as any).dom as any).parentElement as any), l = f, !i) {
            const h: any = vn;
            h?.isEditable && (setTimeout as any)((): any => {
              const p: any = ((h as any).state as any).selection;
              p && (((h as any).commands as any).deleteRange as any)({
                from: (p as any).from,
                to: (p as any).to
              });
            }, 10);
          }
          return !1;
        },
        paste: (d: any, f: any): any => {
          var h: any;
          const p: any = ((h = (f as any).clipboardData) as any) == (null as any) ? void 0 : ((h as any).getData as any)("text/html");
          return o = f, s = !!p?.includes("data-pm-slice"), !1;
        }
      }
    },
    appendTransaction: (d: any, f: any, h: any): any => {
      const p: any = (d as any)[0],
        m: any = (((p as any).getMeta as any)("uiEvent") as any) === ("paste" as any) && !s,
        g: any = (((p as any).getMeta as any)("uiEvent") as any) === ("drop" as any) && !i,
        y: any = ((p as any).getMeta as any)("applyPasteRules"),
        b: any = !!y;
      if (!m && !g && !b) return;
      if (b) {
        let {
          text: S
        }: any = y;
        (typeof S as any) == ("string" as any) ? S = S : S = (fi as any)(((k as any).from as any)(S), (h as any).schema);
        const {
            from: A
          }: any = y,
          E: any = (A as any) + ((S as any).length as any),
          I: any = (Ip as any)(S);
        return (a as any)({
          rule: u,
          state: h,
          from: A,
          to: {
            b: E
          },
          pasteEvt: I
        });
      }
      const C: any = ((((f as any).doc as any).content as any).findDiffStart as any)(((h as any).doc as any).content),
        M: any = ((((f as any).doc as any).content as any).findDiffEnd as any)(((h as any).doc as any).content);
      if (!(!(Ap as any)(C) || !M || (C as any) === ((M as any).b as any))) return (a as any)({
        rule: u,
        state: h,
        from: C,
        to: M,
        pasteEvt: o
      });
    }
  }));
}
var Fr: any = class {
  declare schema: any;
  declare extensions: any;
  declare baseExtensions: any;
  declare editor: any;
  declare splittableMarks: any;
  [key: string]: any;
  constructor(n: any, e: any) {
    (this as any).splittableMarks = [], (this as any).editor = e, (this as any).baseExtensions = n, (this as any).extensions = (pi as any)(n), (this as any).schema = (Ua as any)((this as any).extensions, e), ((this as any).setupExtensions as any)();
  }
  get commands(): any {
    return (((this as any).extensions as any).reduce as any)((n: any, e: any): any => {
      const t: any = {
          name: (e as any).name,
          options: (e as any).options,
          storage: (((this as any).editor as any).extensionStorage as any)[(e as any).name],
          editor: (this as any).editor,
          type: (ns as any)((e as any).name, (this as any).schema)
        },
        r: any = (T as any)(e, "addCommands", t);
      return r ? {
        ...n,
        ...(r as any)()
      } : n;
    }, {});
  }
  get plugins(): any {
    const {
      editor: n
    }: any = this;
    return (((hi as any)((([...(this as any).extensions] as any).reverse as any)()) as any).flatMap as any)((r: any): any => {
      const s: any = {
          name: (r as any).name,
          options: (r as any).options,
          storage: (((this as any).editor as any).extensionStorage as any)[(r as any).name],
          editor: n,
          type: (ns as any)((r as any).name, (this as any).schema)
        },
        i: any = [],
        o: any = (T as any)(r, "addKeyboardShortcuts", s);
      let l: any = {};
      if (((r as any).type as any) === ("mark" as any) && (T as any)(r, "exitable", s) && ((l as any).ArrowRight = (): any => ((bt as any).handleExit as any)({
        editor: n,
        mark: r
      })), o) {
        const f: any = ((Object as any).fromEntries as any)(((((Object as any).entries as any)((o as any)()) as any).map as any)(([h, p]: any): any => [h, (): any => (p as any)({
          editor: n
        })]));
        l = {
          ...l,
          ...f
        };
      }
      const a: any = (Jf as any)(l);
      ((i as any).push as any)(a);
      const c: any = (T as any)(r, "addInputRules", s);
      if ((zo as any)(r, ((n as any).options as any).enableInputRules) && c) {
        const f: any = (c as any)();
        if (f && (f as any).length) {
          const h: any = (vp as any)({
              editor: n,
              rules: f
            }),
            p: any = ((Array as any).isArray as any)(h) ? h : [h];
          ((i as any).push as any)(...p);
        }
      }
      const u: any = (T as any)(r, "addPasteRules", s);
      if ((zo as any)(r, ((n as any).options as any).enablePasteRules) && u) {
        const f: any = (u as any)();
        if (f && (f as any).length) {
          const h: any = (Rp as any)({
            editor: n,
            rules: f
          });
          ((i as any).push as any)(...h);
        }
      }
      const d: any = (T as any)(r, "addProseMirrorPlugins", s);
      if (d) {
        const f: any = (d as any)();
        ((i as any).push as any)(...f);
      }
      return i;
    });
  }
  get attributes(): any {
    return (Ka as any)((this as any).extensions);
  }
  get nodeViews(): any {
    const {
        editor: n
      }: any = this,
      {
        nodeExtensions: e
      }: any = (Bt as any)((this as any).extensions);
    return ((Object as any).fromEntries as any)(((((e as any).filter as any)((t: any): any => !!(T as any)(t, "addNodeView")) as any).map as any)((t: any): any => {
      const r: any = (((this as any).attributes as any).filter as any)((a: any): any => ((a as any).type as any) === ((t as any).name as any)),
        s: any = {
          name: (t as any).name,
          options: (t as any).options,
          storage: (((this as any).editor as any).extensionStorage as any)[(t as any).name],
          editor: n,
          type: (_ as any)((t as any).name, (this as any).schema)
        },
        i: any = (T as any)(t, "addNodeView", s);
      if (!i) return [];
      const o: any = (i as any)();
      if (!o) return [];
      const l: any = (a: any, c: any, u: any, d: any, f: any): any => {
        const h: any = (Gn as any)(a, r);
        return (o as any)({
          node: a,
          view: c,
          getPos: u,
          decorations: d,
          innerDecorations: f,
          editor: n,
          extension: t,
          HTMLAttributes: h
        });
      };
      return [(t as any).name, l];
    }));
  }
  get markViews(): any {
    const {
        editor: n
      }: any = this,
      {
        markExtensions: e
      }: any = (Bt as any)((this as any).extensions);
    return ((Object as any).fromEntries as any)(((((e as any).filter as any)((t: any): any => !!(T as any)(t, "addMarkView")) as any).map as any)((t: any): any => {
      const r: any = (((this as any).attributes as any).filter as any)((l: any): any => ((l as any).type as any) === ((t as any).name as any)),
        s: any = {
          name: (t as any).name,
          options: (t as any).options,
          storage: (((this as any).editor as any).extensionStorage as any)[(t as any).name],
          editor: n,
          type: (Be as any)((t as any).name, (this as any).schema)
        },
        i: any = (T as any)(t, "addMarkView", s);
      if (!i) return [];
      const o: any = (l: any, a: any, c: any): any => {
        const u: any = (Gn as any)(l, r);
        return ((i as any)() as any)({
          mark: l,
          view: a,
          inline: c,
          editor: n,
          extension: t,
          HTMLAttributes: u,
          updateAttributes: (d: any): any => {
            (Up as any)(l, n, d);
          }
        });
      };
      return [(t as any).name, o];
    }));
  }
  setupExtensions(): any {
    const n: any = (this as any).extensions;
    ((this as any).editor as any).extensionStorage = ((Object as any).fromEntries as any)(((n as any).map as any)((e: any): any => [(e as any).name, (e as any).storage])), ((n as any).forEach as any)((e: any): any => {
      var t: any;
      const r: any = {
        name: (e as any).name,
        options: (e as any).options,
        storage: (((this as any).editor as any).extensionStorage as any)[(e as any).name],
        editor: (this as any).editor,
        type: (ns as any)((e as any).name, (this as any).schema)
      };
      ((e as any).type as any) === ("mark" as any) && (((t = (P as any)((T as any)(e, "keepOnSplit", r))) as any) == (null as any) || t) && (((this as any).splittableMarks as any).push as any)((e as any).name);
      const s: any = (T as any)(e, "onBeforeCreate", r),
        i: any = (T as any)(e, "onCreate", r),
        o: any = (T as any)(e, "onUpdate", r),
        l: any = (T as any)(e, "onSelectionUpdate", r),
        a: any = (T as any)(e, "onTransaction", r),
        c: any = (T as any)(e, "onFocus", r),
        u: any = (T as any)(e, "onBlur", r),
        d: any = (T as any)(e, "onDestroy", r);
      s && (((this as any).editor as any).on as any)("beforeCreate", s), i && (((this as any).editor as any).on as any)("create", i), o && (((this as any).editor as any).on as any)("update", o), l && (((this as any).editor as any).on as any)("selectionUpdate", l), a && (((this as any).editor as any).on as any)("transaction", a), c && (((this as any).editor as any).on as any)("focus", c), u && (((this as any).editor as any).on as any)("blur", u), d && (((this as any).editor as any).on as any)("destroy", d);
    });
  }
};
(Fr as any).resolve = pi;
(Fr as any).sort = hi;
(Fr as any).flatten = di;
var Pp: any = {};
(ai as any)(Pp, {
  ClipboardTextSerializer: (): any => sc,
  Commands: (): any => ic,
  Delete: (): any => oc,
  Drop: (): any => lc,
  Editable: (): any => ac,
  FocusEvents: (): any => uc,
  Keymap: (): any => dc,
  Paste: (): any => fc,
  Tabindex: (): any => hc,
  TextDirection: (): any => pc,
  focusEventsPluginKey: (): any => cc
});
var V: any = class rc extends (gi as any) {
    declare type: any;
    [key: string]: any;
    constructor() {
      super(...arguments), (this as any).type = "extension";
    }
    static create(e: any = {}): any {
      const t: any = (typeof e as any) == ("function" as any) ? (e as any)() : e;
      return new (rc as any)(t);
    }
    configure(e: any): any {
      return (super.configure as any)(e);
    }
    extend(e: any): any {
      const t: any = (typeof e as any) == ("function" as any) ? (e as any)() : e;
      return (super.extend as any)(t);
    }
  },
  sc: any = ((V as any).create as any)({
    name: "clipboardTextSerializer",
    addOptions(): any {
      return {
        blockSeparator: void 0
      };
    },
    addProseMirrorPlugins(): any {
      return [new ($ as any)({
        key: new (q as any)("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: (): any => {
            const {
                editor: n
              }: any = this,
              {
                state: e,
                schema: t
              }: any = n,
              {
                doc: r,
                selection: s
              }: any = e,
              {
                ranges: i
              }: any = s,
              o: any = ((Math as any).min as any)(...((i as any).map as any)((u: any): any => ((u as any).$from as any).pos)),
              l: any = ((Math as any).max as any)(...((i as any).map as any)((u: any): any => ((u as any).$to as any).pos)),
              a: any = (Ga as any)(t);
            return (Ja as any)(r, {
              from: o,
              to: l
            }, {
              ...((((this as any).options as any).blockSeparator as any) !== (void 0 as any) ? {
                blockSeparator: ((this as any).options as any).blockSeparator
              } : {}),
              textSerializers: a
            });
          }
        }
      })];
    }
  }),
  ic: any = ((V as any).create as any)({
    name: "commands",
    addCommands(): any {
      return {
        ...za
      };
    }
  }),
  oc: any = ((V as any).create as any)({
    name: "delete",
    onUpdate({
      transaction: n,
      appendedTransactions: e
    }: any): any {
      var t: any, r: any, s: any;
      const i: any = (): any => {
        var o: any, l: any, a: any, c: any;
        if (((c = ((a = ((l = ((o = (((this as any).editor as any).options as any).coreExtensionOptions) as any) == (null as any) ? void 0 : (o as any).delete) as any) == (null as any) ? void 0 : (l as any).filterTransaction) as any) == (null as any) ? void 0 : ((a as any).call as any)(l, n)) as any) != (null as any) ? c : ((n as any).getMeta as any)("y-sync$")) return;
        const u: any = (Wa as any)((n as any).before, [n, ...e]);
        (((Xa as any)(u) as any).forEach as any)((h: any): any => {
          ((((u as any).mapping as any).mapResult as any)(((h as any).oldRange as any).from) as any).deletedAfter && ((((u as any).mapping as any).mapResult as any)(((h as any).oldRange as any).to) as any).deletedBefore && (((u as any).before as any).nodesBetween as any)(((h as any).oldRange as any).from, ((h as any).oldRange as any).to, (p: any, m: any): any => {
            const g: any = ((m as any) + ((p as any).nodeSize as any) as any) - (2 as any),
              y: any = (((h as any).oldRange as any).from as any) <= (m as any) && (g as any) <= (((h as any).oldRange as any).to as any);
            (((this as any).editor as any).emit as any)("delete", {
              type: "node",
              node: p,
              from: m,
              to: g,
              newFrom: (((u as any).mapping as any).map as any)(m),
              newTo: (((u as any).mapping as any).map as any)(g),
              deletedRange: (h as any).oldRange,
              newRange: (h as any).newRange,
              partial: !y,
              editor: (this as any).editor,
              transaction: n,
              combinedTransform: u
            });
          });
        });
        const f: any = (u as any).mapping;
        (((u as any).steps as any).forEach as any)((h: any, p: any): any => {
          var m: any, g: any;
          if (h instanceof xe) {
            const y: any = ((((f as any).slice as any)(p) as any).map as any)((h as any).from, -1),
              b: any = ((((f as any).slice as any)(p) as any).map as any)((h as any).to),
              C: any = ((((f as any).invert as any)() as any).map as any)(y, -1),
              M: any = ((((f as any).invert as any)() as any).map as any)(b),
              S: any = ((m = (((u as any).doc as any).nodeAt as any)((y as any) - (1 as any))) as any) == (null as any) ? void 0 : (((m as any).marks as any).some as any)((E: any): any => ((E as any).eq as any)((h as any).mark)),
              A: any = ((g = (((u as any).doc as any).nodeAt as any)(b)) as any) == (null as any) ? void 0 : (((g as any).marks as any).some as any)((E: any): any => ((E as any).eq as any)((h as any).mark));
            (((this as any).editor as any).emit as any)("delete", {
              type: "mark",
              mark: (h as any).mark,
              from: (h as any).from,
              to: (h as any).to,
              deletedRange: {
                from: C,
                to: M
              },
              newRange: {
                from: y,
                to: b
              },
              partial: !!(A || S),
              editor: (this as any).editor,
              transaction: n,
              combinedTransform: u
            });
          }
        });
      };
      ((s = ((r = ((t = (((this as any).editor as any).options as any).coreExtensionOptions) as any) == (null as any) ? void 0 : (t as any).delete) as any) == (null as any) ? void 0 : (r as any).async) as any) == (null as any) || s ? (setTimeout as any)(i, 0) : (i as any)();
    }
  }),
  lc: any = ((V as any).create as any)({
    name: "drop",
    addProseMirrorPlugins(): any {
      return [new ($ as any)({
        key: new (q as any)("tiptapDrop"),
        props: {
          handleDrop: (n: any, e: any, t: any, r: any): any => {
            (((this as any).editor as any).emit as any)("drop", {
              editor: (this as any).editor,
              event: e,
              slice: t,
              moved: r
            });
          }
        }
      })];
    }
  }),
  ac: any = ((V as any).create as any)({
    name: "editable",
    addProseMirrorPlugins(): any {
      return [new ($ as any)({
        key: new (q as any)("editable"),
        props: {
          editable: (): any => (((this as any).editor as any).options as any).editable
        }
      })];
    }
  }),
  cc: any = new (q as any)("focusEvents"),
  uc: any = ((V as any).create as any)({
    name: "focusEvents",
    addProseMirrorPlugins(): any {
      const {
        editor: n
      }: any = this;
      return [new ($ as any)({
        key: cc,
        props: {
          handleDOMEvents: {
            focus: (e: any, t: any): any => {
              (n as any).isFocused = !0;
              const r: any = ((((((n as any).state as any).tr as any).setMeta as any)("focus", {
                event: t
              }) as any).setMeta as any)("addToHistory", !1);
              return ((e as any).dispatch as any)(r), !1;
            },
            blur: (e: any, t: any): any => {
              (n as any).isFocused = !1;
              const r: any = ((((((n as any).state as any).tr as any).setMeta as any)("blur", {
                event: t
              }) as any).setMeta as any)("addToHistory", !1);
              return ((e as any).dispatch as any)(r), !1;
            }
          }
        }
      })];
    }
  }),
  dc: any = ((V as any).create as any)({
    name: "keymap",
    addKeyboardShortcuts(): any {
      const n: any = (): any => ((((this as any).editor as any).commands as any).first as any)(({
          commands: o
        }: any): any => [(): any => ((o as any).undoInputRule as any)(), (): any => ((o as any).command as any)(({
          tr: l
        }: any): any => {
          const {
              selection: a,
              doc: c
            }: any = l,
            {
              empty: u,
              $anchor: d
            }: any = a,
            {
              pos: f,
              parent: h
            }: any = d,
            p: any = ((d as any).parent as any).isTextblock && (f as any) > (0 as any) ? (((l as any).doc as any).resolve as any)((f as any) - (1 as any)) : d,
            m: any = ((((p as any).parent as any).type as any).spec as any).isolating,
            g: any = ((d as any).pos as any) - ((d as any).parentOffset as any),
            y: any = m && (((p as any).parent as any).childCount as any) === (1 as any) ? (g as any) === ((d as any).pos as any) : ((((O as any).atStart as any)(c) as any).from as any) === (f as any);
          return !u || !((h as any).type as any).isTextblock || ((h as any).textContent as any).length || !y || y && ((((d as any).parent as any).type as any).name as any) === ("paragraph" as any) ? !1 : ((o as any).clearNodes as any)();
        }), (): any => ((o as any).deleteSelection as any)(), (): any => ((o as any).joinBackward as any)(), (): any => ((o as any).selectNodeBackward as any)()]),
        e: any = (): any => ((((this as any).editor as any).commands as any).first as any)(({
          commands: o
        }: any): any => [(): any => ((o as any).deleteSelection as any)(), (): any => ((o as any).deleteCurrentNode as any)(), (): any => ((o as any).joinForward as any)(), (): any => ((o as any).selectNodeForward as any)()]),
        r: any = {
          Enter: (): any => ((((this as any).editor as any).commands as any).first as any)(({
            commands: o
          }: any): any => [(): any => ((o as any).newlineInCode as any)(), (): any => ((o as any).createParagraphNear as any)(), (): any => ((o as any).liftEmptyBlock as any)(), (): any => ((o as any).splitBlock as any)()]),
          "Mod-Enter": (): any => ((((this as any).editor as any).commands as any).exitCode as any)(),
          Backspace: n,
          "Mod-Backspace": n,
          "Shift-Backspace": n,
          Delete: e,
          "Mod-Delete": e,
          "Mod-a": (): any => ((((this as any).editor as any).commands as any).selectAll as any)()
        },
        s: any = {
          ...r
        },
        i: any = {
          ...r,
          "Ctrl-h": n,
          "Alt-Backspace": n,
          "Ctrl-d": e,
          "Ctrl-Alt-Backspace": e,
          "Alt-Delete": e,
          "Alt-d": e,
          "Ctrl-a": (): any => ((((this as any).editor as any).commands as any).selectTextblockStart as any)(),
          "Ctrl-e": (): any => ((((this as any).editor as any).commands as any).selectTextblockEnd as any)()
        };
      return (Pr as any)() || (ja as any)() ? i : s;
    },
    addProseMirrorPlugins(): any {
      return [new ($ as any)({
        key: new (q as any)("clearDocument"),
        appendTransaction: (n: any, e: any, t: any): any => {
          if (((n as any).some as any)((m: any): any => ((m as any).getMeta as any)("composition"))) return;
          const r: any = ((n as any).some as any)((m: any): any => (m as any).docChanged) && !(((e as any).doc as any).eq as any)((t as any).doc),
            s: any = ((n as any).some as any)((m: any): any => ((m as any).getMeta as any)("preventClearDocument"));
          if (!r || s) return;
          const {
              empty: i,
              from: o,
              to: l
            }: any = (e as any).selection,
            a: any = (((O as any).atStart as any)((e as any).doc) as any).from,
            c: any = (((O as any).atEnd as any)((e as any).doc) as any).to;
          if (i || !((o as any) === (a as any) && (l as any) === (c as any)) || !(Br as any)((t as any).doc)) return;
          const f: any = (t as any).tr,
            h: any = (Ir as any)({
              state: t,
              transaction: f
            }),
            {
              commands: p
            }: any = new (Rr as any)({
              editor: (this as any).editor,
              state: h
            });
          if (((p as any).clearNodes as any)(), !!((f as any).steps as any).length) return f;
        }
      })];
    }
  }),
  fc: any = ((V as any).create as any)({
    name: "paste",
    addProseMirrorPlugins(): any {
      return [new ($ as any)({
        key: new (q as any)("tiptapPaste"),
        props: {
          handlePaste: (n: any, e: any, t: any): any => {
            (((this as any).editor as any).emit as any)("paste", {
              editor: (this as any).editor,
              event: e,
              slice: t
            });
          }
        }
      })];
    }
  }),
  hc: any = ((V as any).create as any)({
    name: "tabindex",
    addProseMirrorPlugins(): any {
      return [new ($ as any)({
        key: new (q as any)("tabindex"),
        props: {
          attributes: (): any => ((this as any).editor as any).isEditable ? {
            tabindex: "0"
          } : {}
        }
      })];
    }
  }),
  pc: any = ((V as any).create as any)({
    name: "textDirection",
    addOptions(): any {
      return {
        direction: void 0
      };
    },
    addGlobalAttributes(): any {
      if (!((this as any).options as any).direction) return [];
      const {
        nodeExtensions: n
      }: any = (Bt as any)((this as any).extensions);
      return [{
        types: ((((n as any).filter as any)((e: any): any => ((e as any).name as any) !== ("text" as any)) as any).map as any)((e: any): any => (e as any).name),
        attributes: {
          dir: {
            default: ((this as any).options as any).direction,
            parseHTML: (e: any): any => {
              const t: any = ((e as any).getAttribute as any)("dir");
              return t && ((t as any) === ("ltr" as any) || (t as any) === ("rtl" as any) || (t as any) === ("auto" as any)) ? t : ((this as any).options as any).direction;
            },
            renderHTML: (e: any): any => (e as any).dir ? {
              dir: (e as any).dir
            } : {}
          }
        }
      }];
    },
    addProseMirrorPlugins(): any {
      return [new ($ as any)({
        key: new (q as any)("textDirection"),
        props: {
          attributes: (): any => {
            const n: any = ((this as any).options as any).direction;
            return n ? {
              dir: n
            } : {};
          }
        }
      })];
    }
  }),
  Lp: any = class At {
    declare editor: any;
    declare resolvedPos: any;
    declare isBlock: any;
    declare actualDepth: any;
    declare currentNode: any;
    [key: string]: any;
    constructor(e: any, t: any, r: any = !1, s: any = null) {
      (this as any).currentNode = null, (this as any).actualDepth = null, (this as any).isBlock = r, (this as any).resolvedPos = e, (this as any).editor = t, (this as any).currentNode = s;
    }
    get name(): any {
      return (((this as any).node as any).type as any).name;
    }
    get node(): any {
      return (this as any).currentNode || (((this as any).resolvedPos as any).node as any)();
    }
    get element(): any {
      return (((((this as any).editor as any).view as any).domAtPos as any)((this as any).pos) as any).node;
    }
    get depth(): any {
      var e: any;
      return ((e = (this as any).actualDepth) as any) != (null as any) ? e : ((this as any).resolvedPos as any).depth;
    }
    get pos(): any {
      return ((this as any).resolvedPos as any).pos;
    }
    get content(): any {
      return ((this as any).node as any).content;
    }
    set content(e: any) {
      let t: any = (this as any).from,
        r: any = (this as any).to;
      if ((this as any).isBlock) {
        if ((((this as any).content as any).size as any) === (0 as any)) {
          ((console as any).error as any)(`You can\u2019t set content on a block node. Tried to set content on ${(this as any).name} at ${(this as any).pos}`);
          return;
        }
        t = ((this as any).from as any) + (1 as any), r = ((this as any).to as any) - (1 as any);
      }
      ((((this as any).editor as any).commands as any).insertContentAt as any)({
        from: t,
        to: r
      }, e);
    }
    get attributes(): any {
      return ((this as any).node as any).attrs;
    }
    get textContent(): any {
      return ((this as any).node as any).textContent;
    }
    get size(): any {
      return ((this as any).node as any).nodeSize;
    }
    get from(): any {
      return (this as any).isBlock ? (this as any).pos : (((this as any).resolvedPos as any).start as any)(((this as any).resolvedPos as any).depth);
    }
    get range(): any {
      return {
        from: (this as any).from,
        to: (this as any).to
      };
    }
    get to(): any {
      return (this as any).isBlock ? ((this as any).pos as any) + ((this as any).size as any) : ((((this as any).resolvedPos as any).end as any)(((this as any).resolvedPos as any).depth) as any) + ((((this as any).node as any).isText ? 0 : 1) as any);
    }
    get parent(): any {
      if (((this as any).depth as any) === (0 as any)) return null;
      const e: any = (((this as any).resolvedPos as any).start as any)((((this as any).resolvedPos as any).depth as any) - (1 as any)),
        t: any = ((((this as any).resolvedPos as any).doc as any).resolve as any)(e);
      return new (At as any)(t, (this as any).editor);
    }
    get before(): any {
      let e: any = ((((this as any).resolvedPos as any).doc as any).resolve as any)(((this as any).from as any) - (((this as any).isBlock ? 1 : 2) as any));
      return ((e as any).depth as any) !== ((this as any).depth as any) && (e = ((((this as any).resolvedPos as any).doc as any).resolve as any)(((this as any).from as any) - (3 as any))), new (At as any)(e, (this as any).editor);
    }
    get after(): any {
      let e: any = ((((this as any).resolvedPos as any).doc as any).resolve as any)(((this as any).to as any) + (((this as any).isBlock ? 2 : 1) as any));
      return ((e as any).depth as any) !== ((this as any).depth as any) && (e = ((((this as any).resolvedPos as any).doc as any).resolve as any)(((this as any).to as any) + (3 as any))), new (At as any)(e, (this as any).editor);
    }
    get children(): any {
      const e: any = [];
      return ((((this as any).node as any).content as any).forEach as any)((t: any, r: any): any => {
        const s: any = (t as any).isBlock && !(t as any).isTextblock,
          i: any = (t as any).isAtom && !(t as any).isText,
          o: any = (((this as any).pos as any) + (r as any) as any) + ((i ? 0 : 1) as any);
        if ((o as any) < (0 as any) || (o as any) > (((((this as any).resolvedPos as any).doc as any).nodeSize as any) - (2 as any) as any)) return;
        const l: any = ((((this as any).resolvedPos as any).doc as any).resolve as any)(o);
        if (!s && ((l as any).depth as any) <= ((this as any).depth as any)) return;
        const a: any = new (At as any)(l, (this as any).editor, s, s ? t : null);
        s && ((a as any).actualDepth = ((this as any).depth as any) + (1 as any)), ((e as any).push as any)(new (At as any)(l, (this as any).editor, s, s ? t : null));
      }), e;
    }
    get firstChild(): any {
      return ((this as any).children as any)[0] || null;
    }
    get lastChild(): any {
      const e: any = (this as any).children;
      return (e as any)[((e as any).length as any) - (1 as any)] || null;
    }
    closest(e: any, t: any = {}): any {
      let r: any = null,
        s: any = (this as any).parent;
      for (; s && !r;) {
        if (((((s as any).node as any).type as any).name as any) === (e as any)) if (((((Object as any).keys as any)(t) as any).length as any) > (0 as any)) {
          const i: any = ((s as any).node as any).attrs,
            o: any = ((Object as any).keys as any)(t);
          for (let l: any = 0; (l as any) < ((o as any).length as any); l += 1) {
            const a: any = (o as any)[l];
            if (((i as any)[a] as any) !== ((t as any)[a] as any)) break;
          }
        } else r = s;
        s = (s as any).parent;
      }
      return r;
    }
    querySelector(e: any, t: any = {}): any {
      return (((this as any).querySelectorAll as any)(e, t, !0) as any)[0] || null;
    }
    querySelectorAll(e: any, t: any = {}, r: any = !1): any {
      let s: any = [];
      if (!(this as any).children || (((this as any).children as any).length as any) === (0 as any)) return s;
      const i: any = ((Object as any).keys as any)(t);
      return (((this as any).children as any).forEach as any)((o: any): any => {
        r && ((s as any).length as any) > (0 as any) || (((((o as any).node as any).type as any).name as any) === (e as any) && ((i as any).every as any)((a: any): any => ((t as any)[a] as any) === ((((o as any).node as any).attrs as any)[a] as any)) && ((s as any).push as any)(o), !(r && ((s as any).length as any) > (0 as any)) && (s = ((s as any).concat as any)(((o as any).querySelectorAll as any)(e, t, r))));
      }), s;
    }
    setAttribute(e: any): any {
      const {
        tr: t
      }: any = ((this as any).editor as any).state;
      ((t as any).setNodeMarkup as any)((this as any).from, void 0, {
        ...((this as any).node as any).attrs,
        ...e
      }), ((((this as any).editor as any).view as any).dispatch as any)(t);
    }
  },
  zp: any = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}`;
function Bp(this: any, n: any, e: any, t: any): any {
  const r: any = ((document as any).querySelector as any)("style[data-tiptap-style]");
  if ((r as any) !== (null as any)) return r;
  const s: any = ((document as any).createElement as any)("style");
  return e && ((s as any).setAttribute as any)("nonce", e), ((s as any).setAttribute as any)("data-tiptap-style", ""), (s as any).innerHTML = n, (((((document as any).getElementsByTagName as any)("head") as any)[0] as any).appendChild as any)(s), s;
}
var cy: any = class extends (Mp as any) {
  declare schema: any;
  declare commandManager: any;
  declare extensionManager: any;
  declare editorState: any;
  declare utils: any;
  declare capturedTransaction: any;
  declare isCapturingTransaction: any;
  declare options: any;
  declare instanceId: any;
  declare extensionStorage: any;
  declare isInitialized: any;
  declare isFocused: any;
  declare editorView: any;
  declare className: any;
  declare css: any;
  [key: string]: any;
  constructor(n: any = {}) {
    super(), (this as any).css = null, (this as any).className = "tiptap", (this as any).editorView = null, (this as any).isFocused = !1, (this as any).isInitialized = !1, (this as any).extensionStorage = {}, (this as any).instanceId = ((((((Math as any).random as any)() as any).toString as any)(36) as any).slice as any)(2, 9), (this as any).options = {
      element: (typeof document as any) < ("u" as any) ? ((document as any).createElement as any)("div") : null,
      content: "",
      injectCSS: !0,
      injectNonce: void 0,
      extensions: [],
      autofocus: !1,
      editable: !0,
      textDirection: void 0,
      editorProps: {},
      parseOptions: {},
      coreExtensionOptions: {},
      enableInputRules: !0,
      enablePasteRules: !0,
      enableCoreExtensions: !0,
      enableContentCheck: !1,
      emitContentError: !1,
      onBeforeCreate: (): any => null,
      onCreate: (): any => null,
      onMount: (): any => null,
      onUnmount: (): any => null,
      onUpdate: (): any => null,
      onSelectionUpdate: (): any => null,
      onTransaction: (): any => null,
      onFocus: (): any => null,
      onBlur: (): any => null,
      onDestroy: (): any => null,
      onContentError: ({
        error: r
      }: any): any => {
        throw r;
      },
      onPaste: (): any => null,
      onDrop: (): any => null,
      onDelete: (): any => null
    }, (this as any).isCapturingTransaction = !1, (this as any).capturedTransaction = null, (this as any).utils = {
      getUpdatedPosition: tp,
      createMappablePosition: np
    }, ((this as any).setOptions as any)(n), ((this as any).createExtensionManager as any)(), ((this as any).createCommandManager as any)(), ((this as any).createSchema as any)(), ((this as any).on as any)("beforeCreate", ((this as any).options as any).onBeforeCreate), ((this as any).emit as any)("beforeCreate", {
      editor: this
    }), ((this as any).on as any)("mount", ((this as any).options as any).onMount), ((this as any).on as any)("unmount", ((this as any).options as any).onUnmount), ((this as any).on as any)("contentError", ((this as any).options as any).onContentError), ((this as any).on as any)("create", ((this as any).options as any).onCreate), ((this as any).on as any)("update", ((this as any).options as any).onUpdate), ((this as any).on as any)("selectionUpdate", ((this as any).options as any).onSelectionUpdate), ((this as any).on as any)("transaction", ((this as any).options as any).onTransaction), ((this as any).on as any)("focus", ((this as any).options as any).onFocus), ((this as any).on as any)("blur", ((this as any).options as any).onBlur), ((this as any).on as any)("destroy", ((this as any).options as any).onDestroy), ((this as any).on as any)("drop", ({
      event: r,
      slice: s,
      moved: i
    }: any): any => (((this as any).options as any).onDrop as any)(r, s, i)), ((this as any).on as any)("paste", ({
      event: r,
      slice: s
    }: any): any => (((this as any).options as any).onPaste as any)(r, s)), ((this as any).on as any)("delete", ((this as any).options as any).onDelete);
    const e: any = ((this as any).createDoc as any)(),
      t: any = (Fa as any)(e, ((this as any).options as any).autofocus);
    (this as any).editorState = ((Ot as any).create as any)({
      doc: e,
      schema: (this as any).schema,
      selection: t || void 0
    }), ((this as any).options as any).element && ((this as any).mount as any)(((this as any).options as any).element);
  }
  mount(n: any): any {
    if ((typeof document as any) > ("u" as any)) throw new (Error as any)("[tiptap error]: The editor cannot be mounted because there is no 'document' defined in this environment.");
    ((this as any).createView as any)(n), ((this as any).emit as any)("mount", {
      editor: this
    }), (this as any).css && !(((document as any).head as any).contains as any)((this as any).css) && (((document as any).head as any).appendChild as any)((this as any).css), ((window as any).setTimeout as any)((): any => {
      (this as any).isDestroyed || ((((this as any).options as any).autofocus as any) !== (!1 as any) && (((this as any).options as any).autofocus as any) !== (null as any) && (((this as any).commands as any).focus as any)(((this as any).options as any).autofocus), ((this as any).emit as any)("create", {
        editor: this
      }), (this as any).isInitialized = !0);
    }, 0);
  }
  unmount(): any {
    if ((this as any).editorView) {
      const n: any = ((this as any).editorView as any).dom;
      n?.editor && delete (n as any).editor, (((this as any).editorView as any).destroy as any)();
    }
    if ((this as any).editorView = null, (this as any).isInitialized = !1, (this as any).css && !(((document as any).querySelectorAll as any)(`.${(this as any).className}`) as any).length) try {
      (typeof ((this as any).css as any).remove as any) == ("function" as any) ? (((this as any).css as any).remove as any)() : ((this as any).css as any).parentNode && ((((this as any).css as any).parentNode as any).removeChild as any)((this as any).css);
    } catch (n: any) {
      ((console as any).warn as any)("Failed to remove CSS element:", n);
    }
    (this as any).css = null, ((this as any).emit as any)("unmount", {
      editor: this
    });
  }
  get storage(): any {
    return (this as any).extensionStorage;
  }
  get commands(): any {
    return ((this as any).commandManager as any).commands;
  }
  chain(): any {
    return (((this as any).commandManager as any).chain as any)();
  }
  can(): any {
    return (((this as any).commandManager as any).can as any)();
  }
  injectCSS(): any {
    ((this as any).options as any).injectCSS && (typeof document as any) < ("u" as any) && ((this as any).css = (Bp as any)(zp, ((this as any).options as any).injectNonce));
  }
  setOptions(n: any = {}): any {
    (this as any).options = {
      ...(this as any).options,
      ...n
    }, !(!(this as any).editorView || !(this as any).state || (this as any).isDestroyed) && (((this as any).options as any).editorProps && (((this as any).view as any).setProps as any)(((this as any).options as any).editorProps), (((this as any).view as any).updateState as any)((this as any).state));
  }
  setEditable(n: any, e: any = !0): any {
    ((this as any).setOptions as any)({
      editable: n
    }), e && ((this as any).emit as any)("update", {
      editor: this,
      transaction: ((this as any).state as any).tr,
      appendedTransactions: []
    });
  }
  get isEditable(): any {
    return ((this as any).options as any).editable && (this as any).view && ((this as any).view as any).editable;
  }
  get view(): any {
    return (this as any).editorView ? (this as any).editorView : new (Proxy as any)({
      state: (this as any).editorState,
      updateState: (n: any): any => {
        (this as any).editorState = n;
      },
      dispatch: (n: any): any => {
        ((this as any).dispatchTransaction as any)(n);
      },
      composing: !1,
      dragging: null,
      editable: !0,
      isDestroyed: !1
    }, {
      get: (n: any, e: any): any => {
        if ((this as any).editorView) return ((this as any).editorView as any)[e];
        if ((e as any) === ("state" as any)) return (this as any).editorState;
        if (e in n) return ((Reflect as any).get as any)(n, e);
        throw new (Error as any)(`[tiptap error]: The editor view is not available. Cannot access view['${e}']. The editor may not be mounted yet.`);
      }
    });
  }
  get state(): any {
    return (this as any).editorView && ((this as any).editorState = ((this as any).view as any).state), (this as any).editorState;
  }
  registerPlugin(n: any, e: any): any {
    const t: any = (qa as any)(e) ? (e as any)(n, [...((this as any).state as any).plugins]) : [...((this as any).state as any).plugins, n],
      r: any = (((this as any).state as any).reconfigure as any)({
        plugins: t
      });
    return (((this as any).view as any).updateState as any)(r), r;
  }
  unregisterPlugin(n: any): any {
    if ((this as any).isDestroyed) return;
    const e: any = ((this as any).state as any).plugins;
    let t: any = e;
    if ((((([] as any).concat as any)(n) as any).forEach as any)((s: any): any => {
      const i: any = (typeof s as any) == ("string" as any) ? `${s}$` : (s as any).key;
      t = ((t as any).filter as any)((o: any): any => !(((o as any).key as any).startsWith as any)(i));
    }), ((e as any).length as any) === ((t as any).length as any)) return;
    const r: any = (((this as any).state as any).reconfigure as any)({
      plugins: t
    });
    return (((this as any).view as any).updateState as any)(r), r;
  }
  createExtensionManager(): any {
    var n: any, e: any;
    const r: any = (([...(((this as any).options as any).enableCoreExtensions ? (([ac, ((sc as any).configure as any)({
      blockSeparator: ((e = ((n = ((this as any).options as any).coreExtensionOptions) as any) == (null as any) ? void 0 : (n as any).clipboardTextSerializer) as any) == (null as any) ? void 0 : (e as any).blockSeparator
    }), ic, uc, dc, hc, lc, fc, oc, ((pc as any).configure as any)({
      direction: ((this as any).options as any).textDirection
    })] as any).filter as any)((s: any): any => (typeof ((this as any).options as any).enableCoreExtensions as any) == ("object" as any) ? ((((this as any).options as any).enableCoreExtensions as any)[(s as any).name] as any) !== (!1 as any) : !0) : []), ...((this as any).options as any).extensions] as any).filter as any)((s: any): any => ((["extension", "node", "mark"] as any).includes as any)(s?.type));
    (this as any).extensionManager = new (Fr as any)(r, this);
  }
  createCommandManager(): any {
    (this as any).commandManager = new (Rr as any)({
      editor: this
    });
  }
  createSchema(): any {
    (this as any).schema = ((this as any).extensionManager as any).schema;
  }
  createDoc(): any {
    let n: any;
    try {
      n = (Os as any)(((this as any).options as any).content, (this as any).schema, ((this as any).options as any).parseOptions, {
        errorOnInvalidContent: ((this as any).options as any).enableContentCheck
      });
    } catch (e: any) {
      if (!(e instanceof Error) || !((["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"] as any).includes as any)((e as any).message)) throw e;
      ((this as any).emit as any)("contentError", {
        editor: this,
        error: e,
        disableCollaboration: (): any => {
          "collaboration" in (this as any).storage && (typeof ((this as any).storage as any).collaboration as any) == ("object" as any) && ((this as any).storage as any).collaboration && ((((this as any).storage as any).collaboration as any).isDisabled = !0), ((this as any).options as any).extensions = ((((this as any).options as any).extensions as any).filter as any)((t: any): any => ((t as any).name as any) !== ("collaboration" as any)), ((this as any).createExtensionManager as any)();
        }
      }), n = (Os as any)(((this as any).options as any).content, (this as any).schema, ((this as any).options as any).parseOptions, {
        errorOnInvalidContent: !1
      });
    }
    return n;
  }
  createView(n: any): any {
    var e: any;
    (this as any).editorView = new (Pa as any)(n, {
      ...((this as any).options as any).editorProps,
      attributes: {
        role: "textbox",
        ...(((e = ((this as any).options as any).editorProps) as any) == (null as any) ? void 0 : (e as any).attributes)
      },
      dispatchTransaction: (((this as any).dispatchTransaction as any).bind as any)(this),
      state: (this as any).editorState,
      markViews: ((this as any).extensionManager as any).markViews,
      nodeViews: ((this as any).extensionManager as any).nodeViews
    });
    const t: any = (((this as any).state as any).reconfigure as any)({
      plugins: ((this as any).extensionManager as any).plugins
    });
    (((this as any).view as any).updateState as any)(t), ((this as any).prependClass as any)(), ((this as any).injectCSS as any)();
    const r: any = ((this as any).view as any).dom;
    (r as any).editor = this;
  }
  createNodeViews(): any {
    ((this as any).view as any).isDestroyed || (((this as any).view as any).setProps as any)({
      markViews: ((this as any).extensionManager as any).markViews,
      nodeViews: ((this as any).extensionManager as any).nodeViews
    });
  }
  prependClass(): any {
    (((this as any).view as any).dom as any).className = `${(this as any).className} ${(((this as any).view as any).dom as any).className}`;
  }
  captureTransaction(n: any): any {
    (this as any).isCapturingTransaction = !0, (n as any)(), (this as any).isCapturingTransaction = !1;
    const e: any = (this as any).capturedTransaction;
    return (this as any).capturedTransaction = null, e;
  }
  dispatchTransaction(n: any): any {
    if (((this as any).view as any).isDestroyed) return;
    if ((this as any).isCapturingTransaction) {
      if (!(this as any).capturedTransaction) {
        (this as any).capturedTransaction = n;
        return;
      }
      (((n as any).steps as any).forEach as any)((c: any): any => {
        var u: any;
        return ((u = (this as any).capturedTransaction) as any) == (null as any) ? void 0 : ((u as any).step as any)(c);
      });
      return;
    }
    const {
        state: e,
        transactions: t
      }: any = (((this as any).state as any).applyTransaction as any)(n),
      r: any = !((((this as any).state as any).selection as any).eq as any)((e as any).selection),
      s: any = ((t as any).includes as any)(n),
      i: any = (this as any).state;
    if (((this as any).emit as any)("beforeTransaction", {
      editor: this,
      transaction: n,
      nextState: e
    }), !s) return;
    (((this as any).view as any).updateState as any)(e), ((this as any).emit as any)("transaction", {
      editor: this,
      transaction: n,
      appendedTransactions: ((t as any).slice as any)(1)
    }), r && ((this as any).emit as any)("selectionUpdate", {
      editor: this,
      transaction: n
    });
    const o: any = ((t as any).findLast as any)((c: any): any => ((c as any).getMeta as any)("focus") || ((c as any).getMeta as any)("blur")),
      l: any = o?.getMeta("focus"),
      a: any = o?.getMeta("blur");
    l && ((this as any).emit as any)("focus", {
      editor: this,
      event: (l as any).event,
      transaction: o
    }), a && ((this as any).emit as any)("blur", {
      editor: this,
      event: (a as any).event,
      transaction: o
    }), !(((n as any).getMeta as any)("preventUpdate") || !((t as any).some as any)((c: any): any => (c as any).docChanged) || (((i as any).doc as any).eq as any)((e as any).doc)) && ((this as any).emit as any)("update", {
      editor: this,
      transaction: n,
      appendedTransactions: ((t as any).slice as any)(1)
    });
  }
  getAttributes(n: any): any {
    return (Ya as any)((this as any).state, n);
  }
  isActive(n: any, e: any): any {
    const t: any = (typeof n as any) == ("string" as any) ? n : null,
      r: any = (typeof n as any) == ("string" as any) ? e : n;
    return (Qh as any)((this as any).state, t, r);
  }
  getJSON(): any {
    return ((((this as any).state as any).doc as any).toJSON as any)();
  }
  getHTML(): any {
    return (fi as any)((((this as any).state as any).doc as any).content, (this as any).schema);
  }
  getText(n: any): any {
    const {
      blockSeparator: e = `

`,
      textSerializers: t = {}
    }: any = n || {};
    return (Kh as any)(((this as any).state as any).doc, {
      blockSeparator: e,
      textSerializers: {
        ...(Ga as any)((this as any).schema),
        ...t
      }
    });
  }
  get isEmpty(): any {
    return (Br as any)(((this as any).state as any).doc);
  }
  destroy(): any {
    ((this as any).emit as any)("destroy"), ((this as any).unmount as any)(), ((this as any).removeAllListeners as any)();
  }
  get isDestroyed(): any {
    var n: any, e: any;
    return ((e = ((n = (this as any).editorView) as any) == (null as any) ? void 0 : (n as any).isDestroyed) as any) != (null as any) ? e : !0;
  }
  $node(n: any, e: any): any {
    var t: any;
    return (((t = (this as any).$doc) as any) == (null as any) ? void 0 : ((t as any).querySelector as any)(n, e)) || null;
  }
  $nodes(n: any, e: any): any {
    var t: any;
    return (((t = (this as any).$doc) as any) == (null as any) ? void 0 : ((t as any).querySelectorAll as any)(n, e)) || null;
  }
  $pos(n: any): any {
    const e: any = ((((this as any).state as any).doc as any).resolve as any)(n);
    return new (Lp as any)(e, this);
  }
  get $doc(): any {
    return ((this as any).$pos as any)(0);
  }
};
function $t(this: any, n: any): any {
  return new ($r as any)({
    find: (n as any).find,
    handler: ({
      state: e,
      range: t,
      match: r
    }: any): any => {
      const s: any = (P as any)((n as any).getAttributes, void 0, r);
      if ((s as any) === (!1 as any) || (s as any) === (null as any)) return null;
      const {
          tr: i
        }: any = e,
        o: any = (r as any)[((r as any).length as any) - (1 as any)],
        l: any = (r as any)[0];
      if (o) {
        const a: any = ((l as any).search as any)(/\S/),
          c: any = ((t as any).from as any) + (((l as any).indexOf as any)(o) as any),
          u: any = (c as any) + ((o as any).length as any);
        if (((((((mi as any)((t as any).from, (t as any).to, (e as any).doc) as any).filter as any)((h: any): any => (((((h as any).mark as any).type as any).excluded as any).find as any)((m: any): any => (m as any) === ((n as any).type as any) && (m as any) !== (((h as any).mark as any).type as any))) as any).filter as any)((h: any): any => ((h as any).to as any) > (c as any)) as any).length) return null;
        (u as any) < ((t as any).to as any) && ((i as any).delete as any)(u, (t as any).to), (c as any) > ((t as any).from as any) && ((i as any).delete as any)(((t as any).from as any) + (a as any), c);
        const f: any = (((t as any).from as any) + (a as any) as any) + ((o as any).length as any);
        ((i as any).addMark as any)(((t as any).from as any) + (a as any), f, (((n as any).type as any).create as any)(s || {})), ((i as any).removeStoredMark as any)((n as any).type);
      }
    },
    undoable: (n as any).undoable
  });
}
function $p(this: any, n: any): any {
  return new ($r as any)({
    find: (n as any).find,
    handler: ({
      state: e,
      range: t,
      match: r
    }: any): any => {
      const s: any = (P as any)((n as any).getAttributes, void 0, r) || {},
        {
          tr: i
        }: any = e,
        o: any = (t as any).from;
      let l: any = (t as any).to;
      const a: any = (((n as any).type as any).create as any)(s);
      if ((r as any)[1]) {
        const c: any = (((r as any)[0] as any).lastIndexOf as any)((r as any)[1]);
        let u: any = (o as any) + (c as any);
        (u as any) > (l as any) ? u = l : l = (u as any) + (((r as any)[1] as any).length as any);
        const d: any = ((r as any)[0] as any)[(((r as any)[0] as any).length as any) - (1 as any)];
        ((i as any).insertText as any)(d, ((o as any) + (((r as any)[0] as any).length as any) as any) - (1 as any)), ((i as any).replaceWith as any)(u, l, a);
      } else if ((r as any)[0]) {
        const c: any = ((n as any).type as any).isInline ? o : (o as any) - (1 as any);
        ((((i as any).insert as any)(c, (((n as any).type as any).create as any)(s)) as any).delete as any)((((i as any).mapping as any).map as any)(o), (((i as any).mapping as any).map as any)(l));
      }
      ((i as any).scrollIntoView as any)();
    },
    undoable: (n as any).undoable
  });
}
function Is(this: any, n: any): any {
  return new ($r as any)({
    find: (n as any).find,
    handler: ({
      state: e,
      range: t,
      match: r
    }: any): any => {
      const s: any = (((e as any).doc as any).resolve as any)((t as any).from),
        i: any = (P as any)((n as any).getAttributes, void 0, r) || {};
      if (!((((s as any).node as any)(-1) as any).canReplaceWith as any)(((s as any).index as any)(-1), ((s as any).indexAfter as any)(-1), (n as any).type)) return null;
      (((((e as any).tr as any).delete as any)((t as any).from, (t as any).to) as any).setBlockType as any)((t as any).from, (t as any).from, (n as any).type, i);
    },
    undoable: (n as any).undoable
  });
}
function Ft(this: any, n: any): any {
  return new ($r as any)({
    find: (n as any).find,
    handler: ({
      state: e,
      range: t,
      match: r,
      chain: s
    }: any): any => {
      const i: any = (P as any)((n as any).getAttributes, void 0, r) || {},
        o: any = (((e as any).tr as any).delete as any)((t as any).from, (t as any).to),
        a: any = (((((o as any).doc as any).resolve as any)((t as any).from) as any).blockRange as any)(),
        c: any = a && (Ks as any)(a, (n as any).type, i);
      if (!c) return null;
      if (((o as any).wrap as any)(a, c), (n as any).keepMarks && (n as any).editor) {
        const {
            selection: d,
            storedMarks: f
          }: any = e,
          {
            splittableMarks: h
          }: any = ((n as any).editor as any).extensionManager,
          p: any = f || ((d as any).$to as any).parentOffset && (((d as any).$from as any).marks as any)();
        if (p) {
          const m: any = ((p as any).filter as any)((g: any): any => ((h as any).includes as any)(((g as any).type as any).name));
          ((o as any).ensureMarks as any)(m);
        }
      }
      if ((n as any).keepAttributes) {
        const d: any = (((n as any).type as any).name as any) === ("bulletList" as any) || (((n as any).type as any).name as any) === ("orderedList" as any) ? "listItem" : "taskList";
        (((((s as any)() as any).updateAttributes as any)(d, i) as any).run as any)();
      }
      const u: any = ((((o as any).doc as any).resolve as any)(((t as any).from as any) - (1 as any)) as any).nodeBefore;
      u && ((u as any).type as any) === ((n as any).type as any) && (et as any)((o as any).doc, ((t as any).from as any) - (1 as any)) && (!(n as any).joinPredicate || ((n as any).joinPredicate as any)(r, u)) && ((o as any).join as any)(((t as any).from as any) - (1 as any));
    },
    undoable: (n as any).undoable
  });
}
var Fp: any = (n: any): any => "touches" in n,
  uy: any = class {
    declare container: any;
    declare wrapper: any;
    declare createCustomHandle: any;
    declare maxSize: any;
    declare onUpdate: any;
    declare onCommit: any;
    declare onResize: any;
    declare getPos: any;
    declare contentElement: any;
    declare element: any;
    declare editor: any;
    declare node: any;
    declare handleKeyUp: any;
    declare handleKeyDown: any;
    declare handleMouseUp: any;
    declare handleTouchMove: any;
    declare handleMouseMove: any;
    declare handleMap: any;
    declare lastEditableState: any;
    declare isShiftKeyPressed: any;
    declare startHeight: any;
    declare startWidth: any;
    declare startY: any;
    declare startX: any;
    declare activeHandle: any;
    declare isResizing: any;
    declare aspectRatio: any;
    declare initialHeight: any;
    declare initialWidth: any;
    declare classNames: any;
    declare preserveAspectRatio: any;
    declare minSize: any;
    declare directions: any;
    [key: string]: any;
    constructor(n: any) {
      (this as any).directions = ["bottom-left", "bottom-right", "top-left", "top-right"], (this as any).minSize = {
        height: 8,
        width: 8
      }, (this as any).preserveAspectRatio = !1, (this as any).classNames = {
        container: "",
        wrapper: "",
        handle: "",
        resizing: ""
      }, (this as any).initialWidth = 0, (this as any).initialHeight = 0, (this as any).aspectRatio = 1, (this as any).isResizing = !1, (this as any).activeHandle = null, (this as any).startX = 0, (this as any).startY = 0, (this as any).startWidth = 0, (this as any).startHeight = 0, (this as any).isShiftKeyPressed = !1, (this as any).lastEditableState = void 0, (this as any).handleMap = new (Map as any)(), (this as any).handleMouseMove = (l: any): any => {
        if (!(this as any).isResizing || !(this as any).activeHandle) return;
        const a: any = ((l as any).clientX as any) - ((this as any).startX as any),
          c: any = ((l as any).clientY as any) - ((this as any).startY as any);
        ((this as any).handleResize as any)(a, c);
      }, (this as any).handleTouchMove = (l: any): any => {
        if (!(this as any).isResizing || !(this as any).activeHandle) return;
        const a: any = ((l as any).touches as any)[0];
        if (!a) return;
        const c: any = ((a as any).clientX as any) - ((this as any).startX as any),
          u: any = ((a as any).clientY as any) - ((this as any).startY as any);
        ((this as any).handleResize as any)(c, u);
      }, (this as any).handleMouseUp = (): any => {
        if (!(this as any).isResizing) return;
        const l: any = ((this as any).element as any).offsetWidth,
          a: any = ((this as any).element as any).offsetHeight;
        ((this as any).onCommit as any)(l, a), (this as any).isResizing = !1, (this as any).activeHandle = null, (((this as any).container as any).dataset as any).resizeState = "false", ((this as any).classNames as any).resizing && ((((this as any).container as any).classList as any).remove as any)(((this as any).classNames as any).resizing), ((document as any).removeEventListener as any)("mousemove", (this as any).handleMouseMove), ((document as any).removeEventListener as any)("mouseup", (this as any).handleMouseUp), ((document as any).removeEventListener as any)("keydown", (this as any).handleKeyDown), ((document as any).removeEventListener as any)("keyup", (this as any).handleKeyUp);
      }, (this as any).handleKeyDown = (l: any): any => {
        ((l as any).key as any) === ("Shift" as any) && ((this as any).isShiftKeyPressed = !0);
      }, (this as any).handleKeyUp = (l: any): any => {
        ((l as any).key as any) === ("Shift" as any) && ((this as any).isShiftKeyPressed = !1);
      };
      var e: any, t: any, r: any, s: any, i: any, o: any;
      (this as any).node = (n as any).node, (this as any).editor = (n as any).editor, (this as any).element = (n as any).element, (this as any).contentElement = (n as any).contentElement, (this as any).getPos = (n as any).getPos, (this as any).onResize = (n as any).onResize, (this as any).onCommit = (n as any).onCommit, (this as any).onUpdate = (n as any).onUpdate, ((e = (n as any).options) as any) != (null as any) && (e as any).min && ((this as any).minSize = {
        ...(this as any).minSize,
        ...((n as any).options as any).min
      }), ((t = (n as any).options) as any) != (null as any) && (t as any).max && ((this as any).maxSize = ((n as any).options as any).max), ((r = n?.options) as any) != (null as any) && (r as any).directions && ((this as any).directions = ((n as any).options as any).directions), ((s = (n as any).options) as any) != (null as any) && (s as any).preserveAspectRatio && ((this as any).preserveAspectRatio = ((n as any).options as any).preserveAspectRatio), ((i = (n as any).options) as any) != (null as any) && (i as any).className && ((this as any).classNames = {
        container: (((n as any).options as any).className as any).container || "",
        wrapper: (((n as any).options as any).className as any).wrapper || "",
        handle: (((n as any).options as any).className as any).handle || "",
        resizing: (((n as any).options as any).className as any).resizing || ""
      }), ((o = (n as any).options) as any) != (null as any) && (o as any).createCustomHandle && ((this as any).createCustomHandle = ((n as any).options as any).createCustomHandle), (this as any).wrapper = ((this as any).createWrapper as any)(), (this as any).container = ((this as any).createContainer as any)(), ((this as any).applyInitialSize as any)(), ((this as any).attachHandles as any)(), (((this as any).editor as any).on as any)("update", (((this as any).handleEditorUpdate as any).bind as any)(this));
    }
    get dom(): any {
      return (this as any).container;
    }
    get contentDOM(): any {
      return (this as any).contentElement;
    }
    handleEditorUpdate(): any {
      const n: any = ((this as any).editor as any).isEditable;
      (n as any) !== ((this as any).lastEditableState as any) && ((this as any).lastEditableState = n, n ? n && (((this as any).handleMap as any).size as any) === (0 as any) && ((this as any).attachHandles as any)() : ((this as any).removeHandles as any)());
    }
    update(n: any, e: any, t: any): any {
      return ((n as any).type as any) !== (((this as any).node as any).type as any) ? !1 : ((this as any).node = n, (this as any).onUpdate ? ((this as any).onUpdate as any)(n, e, t) : !0);
    }
    destroy(): any {
      (this as any).isResizing && ((((this as any).container as any).dataset as any).resizeState = "false", ((this as any).classNames as any).resizing && ((((this as any).container as any).classList as any).remove as any)(((this as any).classNames as any).resizing), ((document as any).removeEventListener as any)("mousemove", (this as any).handleMouseMove), ((document as any).removeEventListener as any)("mouseup", (this as any).handleMouseUp), ((document as any).removeEventListener as any)("keydown", (this as any).handleKeyDown), ((document as any).removeEventListener as any)("keyup", (this as any).handleKeyUp), (this as any).isResizing = !1, (this as any).activeHandle = null), (((this as any).editor as any).off as any)("update", (((this as any).handleEditorUpdate as any).bind as any)(this)), (((this as any).container as any).remove as any)();
    }
    createContainer(): any {
      const n: any = ((document as any).createElement as any)("div");
      return ((n as any).dataset as any).resizeContainer = "", ((n as any).dataset as any).node = (((this as any).node as any).type as any).name, ((n as any).style as any).display = "flex", ((this as any).classNames as any).container && ((n as any).className = ((this as any).classNames as any).container), ((n as any).appendChild as any)((this as any).wrapper), n;
    }
    createWrapper(): any {
      const n: any = ((document as any).createElement as any)("div");
      return ((n as any).style as any).position = "relative", ((n as any).style as any).display = "block", ((n as any).dataset as any).resizeWrapper = "", ((this as any).classNames as any).wrapper && ((n as any).className = ((this as any).classNames as any).wrapper), ((n as any).appendChild as any)((this as any).element), n;
    }
    createHandle(n: any): any {
      const e: any = ((document as any).createElement as any)("div");
      return ((e as any).dataset as any).resizeHandle = n, ((e as any).style as any).position = "absolute", ((this as any).classNames as any).handle && ((e as any).className = ((this as any).classNames as any).handle), e;
    }
    positionHandle(n: any, e: any): any {
      const t: any = ((e as any).includes as any)("top"),
        r: any = ((e as any).includes as any)("bottom"),
        s: any = ((e as any).includes as any)("left"),
        i: any = ((e as any).includes as any)("right");
      t && (((n as any).style as any).top = "0"), r && (((n as any).style as any).bottom = "0"), s && (((n as any).style as any).left = "0"), i && (((n as any).style as any).right = "0"), ((e as any) === ("top" as any) || (e as any) === ("bottom" as any)) && (((n as any).style as any).left = "0", ((n as any).style as any).right = "0"), ((e as any) === ("left" as any) || (e as any) === ("right" as any)) && (((n as any).style as any).top = "0", ((n as any).style as any).bottom = "0");
    }
    attachHandles(): any {
      (((this as any).directions as any).forEach as any)((n: any): any => {
        let e: any;
        (this as any).createCustomHandle ? e = ((this as any).createCustomHandle as any)(n) : e = ((this as any).createHandle as any)(n), e instanceof HTMLElement || (((console as any).warn as any)(`[ResizableNodeView] createCustomHandle("${n}") did not return an HTMLElement. Falling back to default handle.`), e = ((this as any).createHandle as any)(n)), (this as any).createCustomHandle || ((this as any).positionHandle as any)(e, n), ((e as any).addEventListener as any)("mousedown", (t: any): any => ((this as any).handleResizeStart as any)(t, n)), ((e as any).addEventListener as any)("touchstart", (t: any): any => ((this as any).handleResizeStart as any)(t, n)), (((this as any).handleMap as any).set as any)(n, e), (((this as any).wrapper as any).appendChild as any)(e);
      });
    }
    removeHandles(): any {
      (((this as any).handleMap as any).forEach as any)((n: any): any => ((n as any).remove as any)()), (((this as any).handleMap as any).clear as any)();
    }
    applyInitialSize(): any {
      const n: any = (((this as any).node as any).attrs as any).width,
        e: any = (((this as any).node as any).attrs as any).height;
      n ? ((((this as any).element as any).style as any).width = `${n}px`, (this as any).initialWidth = n) : (this as any).initialWidth = ((this as any).element as any).offsetWidth, e ? ((((this as any).element as any).style as any).height = `${e}px`, (this as any).initialHeight = e) : (this as any).initialHeight = ((this as any).element as any).offsetHeight, ((this as any).initialWidth as any) > (0 as any) && ((this as any).initialHeight as any) > (0 as any) && ((this as any).aspectRatio = ((this as any).initialWidth as any) / ((this as any).initialHeight as any));
    }
    handleResizeStart(n: any, e: any): any {
      ((n as any).preventDefault as any)(), ((n as any).stopPropagation as any)(), (this as any).isResizing = !0, (this as any).activeHandle = e, (Fp as any)(n) ? ((this as any).startX = (((n as any).touches as any)[0] as any).clientX, (this as any).startY = (((n as any).touches as any)[0] as any).clientY) : ((this as any).startX = (n as any).clientX, (this as any).startY = (n as any).clientY), (this as any).startWidth = ((this as any).element as any).offsetWidth, (this as any).startHeight = ((this as any).element as any).offsetHeight, ((this as any).startWidth as any) > (0 as any) && ((this as any).startHeight as any) > (0 as any) && ((this as any).aspectRatio = ((this as any).startWidth as any) / ((this as any).startHeight as any)), ((this as any).getPos as any)(), (((this as any).container as any).dataset as any).resizeState = "true", ((this as any).classNames as any).resizing && ((((this as any).container as any).classList as any).add as any)(((this as any).classNames as any).resizing), ((document as any).addEventListener as any)("mousemove", (this as any).handleMouseMove), ((document as any).addEventListener as any)("touchmove", (this as any).handleTouchMove), ((document as any).addEventListener as any)("mouseup", (this as any).handleMouseUp), ((document as any).addEventListener as any)("keydown", (this as any).handleKeyDown), ((document as any).addEventListener as any)("keyup", (this as any).handleKeyUp);
    }
    handleResize(n: any, e: any): any {
      if (!(this as any).activeHandle) return;
      const t: any = (this as any).preserveAspectRatio || (this as any).isShiftKeyPressed,
        {
          width: r,
          height: s
        }: any = ((this as any).calculateNewDimensions as any)((this as any).activeHandle, n, e),
        i: any = ((this as any).applyConstraints as any)(r, s, t);
      (((this as any).element as any).style as any).width = `${(i as any).width}px`, (((this as any).element as any).style as any).height = `${(i as any).height}px`, (this as any).onResize && ((this as any).onResize as any)((i as any).width, (i as any).height);
    }
    calculateNewDimensions(n: any, e: any, t: any): any {
      let r: any = (this as any).startWidth,
        s: any = (this as any).startHeight;
      const i: any = ((n as any).includes as any)("right"),
        o: any = ((n as any).includes as any)("left"),
        l: any = ((n as any).includes as any)("bottom"),
        a: any = ((n as any).includes as any)("top");
      return i ? r = ((this as any).startWidth as any) + (e as any) : o && (r = ((this as any).startWidth as any) - (e as any)), l ? s = ((this as any).startHeight as any) + (t as any) : a && (s = ((this as any).startHeight as any) - (t as any)), ((n as any) === ("right" as any) || (n as any) === ("left" as any)) && (r = ((this as any).startWidth as any) + ((i ? e : -e) as any)), ((n as any) === ("top" as any) || (n as any) === ("bottom" as any)) && (s = ((this as any).startHeight as any) + ((l ? t : -t) as any)), (this as any).preserveAspectRatio || (this as any).isShiftKeyPressed ? ((this as any).applyAspectRatio as any)(r, s, n) : {
        width: r,
        height: s
      };
    }
    applyConstraints(n: any, e: any, t: any): any {
      var r: any, s: any, i: any, o: any;
      if (!t) {
        let c: any = ((Math as any).max as any)(((this as any).minSize as any).width, n),
          u: any = ((Math as any).max as any)(((this as any).minSize as any).height, e);
        return ((r = (this as any).maxSize) as any) != (null as any) && (r as any).width && (c = ((Math as any).min as any)(((this as any).maxSize as any).width, c)), ((s = (this as any).maxSize) as any) != (null as any) && (s as any).height && (u = ((Math as any).min as any)(((this as any).maxSize as any).height, u)), {
          width: c,
          height: u
        };
      }
      let l: any = n,
        a: any = e;
      return (l as any) < (((this as any).minSize as any).width as any) && (l = ((this as any).minSize as any).width, a = (l as any) / ((this as any).aspectRatio as any)), (a as any) < (((this as any).minSize as any).height as any) && (a = ((this as any).minSize as any).height, l = (a as any) * ((this as any).aspectRatio as any)), ((i = (this as any).maxSize) as any) != (null as any) && (i as any).width && (l as any) > (((this as any).maxSize as any).width as any) && (l = ((this as any).maxSize as any).width, a = (l as any) / ((this as any).aspectRatio as any)), ((o = (this as any).maxSize) as any) != (null as any) && (o as any).height && (a as any) > (((this as any).maxSize as any).height as any) && (a = ((this as any).maxSize as any).height, l = (a as any) * ((this as any).aspectRatio as any)), {
        width: l,
        height: a
      };
    }
    applyAspectRatio(n: any, e: any, t: any): any {
      const r: any = (t as any) === ("left" as any) || (t as any) === ("right" as any),
        s: any = (t as any) === ("top" as any) || (t as any) === ("bottom" as any);
      return r ? {
        width: n,
        height: (n as any) / ((this as any).aspectRatio as any)
      } : s ? {
        width: (e as any) * ((this as any).aspectRatio as any),
        height: e
      } : {
        width: n,
        height: (n as any) / ((this as any).aspectRatio as any)
      };
    }
  };
function Hp(this: any, n: any, e: any): any {
  const {
      selection: t
    }: any = n,
    {
      $from: r
    }: any = t;
  if (t instanceof v) {
    const i: any = ((r as any).index as any)();
    return (((r as any).parent as any).canReplaceWith as any)(i, (i as any) + (1 as any), e);
  }
  let s: any = (r as any).depth;
  for (; (s as any) >= (0 as any);) {
    const i: any = ((r as any).index as any)(s);
    if (((((((r as any).node as any)(s) as any).contentMatchAt as any)(i) as any).matchType as any)(e)) return !0;
    s -= 1;
  }
  return !1;
}
function dy(this: any, n: any): any {
  return ((n as any).replace as any)(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var Vp: any = {};
(ai as any)(Vp, {
  createAtomBlockMarkdownSpec: (): any => jp,
  createBlockMarkdownSpec: (): any => _p,
  createInlineMarkdownSpec: (): any => Kp,
  parseAttributes: (): any => yi,
  parseIndentedBlocks: (): any => Rs,
  renderNestedMarkdownContent: (): any => bi,
  serializeAttributes: (): any => ki
});
function yi(this: any, n: any): any {
  if (!n?.trim()) return {};
  const e: any = {},
    t: any = [],
    r: any = ((n as any).replace as any)(/["']([^"']*)["']/g, (c: any): any => (((t as any).push as any)(c), `__QUOTED_${((t as any).length as any) - (1 as any)}__`)),
    s: any = ((r as any).match as any)(/(?:^|\s)\.([a-zA-Z][\w-]*)/g);
  if (s) {
    const c: any = ((s as any).map as any)((u: any): any => ((((u as any).trim as any)() as any).slice as any)(1));
    (e as any).class = ((c as any).join as any)(" ");
  }
  const i: any = ((r as any).match as any)(/(?:^|\s)#([a-zA-Z][\w-]*)/);
  i && ((e as any).id = (i as any)[1]);
  const o: any = /([a-zA-Z][\w-]*)\s*=\s*(__QUOTED_\d+__)/g;
  ((((Array as any).from as any)(((r as any).matchAll as any)(o)) as any).forEach as any)(([, c, u]: any): any => {
    var d: any;
    const f: any = (parseInt as any)((((d = ((u as any).match as any)(/__QUOTED_(\d+)__/)) as any) == (null as any) ? void 0 : (d as any)[1]) || "0", 10),
      h: any = (t as any)[f];
    h && ((e as any)[c] = ((h as any).slice as any)(1, -1));
  });
  const a: any = ((((((((r as any).replace as any)(/(?:^|\s)\.([a-zA-Z][\w-]*)/g, "") as any).replace as any)(/(?:^|\s)#([a-zA-Z][\w-]*)/g, "") as any).replace as any)(/([a-zA-Z][\w-]*)\s*=\s*__QUOTED_\d+__/g, "") as any).trim as any)();
  return a && ((((((a as any).split as any)(/\s+/) as any).filter as any)(Boolean) as any).forEach as any)((u: any): any => {
    ((u as any).match as any)(/^[a-zA-Z][\w-]*$/) && ((e as any)[u] = !0);
  }), e;
}
function ki(this: any, n: any): any {
  if (!n || ((((Object as any).keys as any)(n) as any).length as any) === (0 as any)) return "";
  const e: any = [];
  return (n as any).class && (((((((String as any)((n as any).class) as any).split as any)(/\s+/) as any).filter as any)(Boolean) as any).forEach as any)((r: any): any => ((e as any).push as any)(`.${r}`)), (n as any).id && ((e as any).push as any)(`#${(n as any).id}`), ((((Object as any).entries as any)(n) as any).forEach as any)(([t, r]: any): any => {
    (t as any) === ("class" as any) || (t as any) === ("id" as any) || ((r as any) === (!0 as any) ? ((e as any).push as any)(t) : (r as any) !== (!1 as any) && (r as any) != (null as any) && ((e as any).push as any)(`${t}="${(String as any)(r)}"`));
  }), ((e as any).join as any)(" ");
}
function jp(this: any, n: any): any {
  const {
      nodeName: e,
      name: t,
      parseAttributes: r = yi,
      serializeAttributes: s = ki,
      defaultAttributes: i = {},
      requiredAttributes: o = [],
      allowedAttributes: l
    }: any = n,
    a: any = t || e,
    c: any = (u: any): any => {
      if (!l) return u;
      const d: any = {};
      return ((l as any).forEach as any)((f: any): any => {
        f in u && ((d as any)[f] = (u as any)[f]);
      }), d;
    };
  return {
    parseMarkdown: (u: any, d: any): any => {
      const f: any = {
        ...i,
        ...(u as any).attributes
      };
      return ((d as any).createNode as any)(e, f, []);
    },
    markdownTokenizer: {
      name: e,
      level: "block",
      start(u: any): any {
        var d: any;
        const f: any = new (RegExp as any)(`^:::${a}(?:\\s|$)`, "m"),
          h: any = ((d = ((u as any).match as any)(f)) as any) == (null as any) ? void 0 : (d as any).index;
        return (h as any) !== (void 0 as any) ? h : -1;
      },
      tokenize(u: any, d: any, f: any): any {
        const h: any = new (RegExp as any)(`^:::${a}(?:\\s+\\{([^}]*)\\})?\\s*:::(?:\\n|$)`),
          p: any = ((u as any).match as any)(h);
        if (!p) return;
        const m: any = (p as any)[1] || "",
          g: any = (r as any)(m);
        if (!((o as any).find as any)((b: any): any => !(b in g))) return {
          type: e,
          raw: (p as any)[0],
          attributes: g
        };
      }
    },
    renderMarkdown: (u: any): any => {
      const d: any = (c as any)((u as any).attrs || {}),
        f: any = (s as any)(d),
        h: any = f ? ` {${f}}` : "";
      return `:::${a}${h} :::`;
    }
  };
}
function _p(this: any, n: any): any {
  const {
      nodeName: e,
      name: t,
      getContent: r,
      parseAttributes: s = yi,
      serializeAttributes: i = ki,
      defaultAttributes: o = {},
      content: l = "block",
      allowedAttributes: a
    }: any = n,
    c: any = t || e,
    u: any = (d: any): any => {
      if (!a) return d;
      const f: any = {};
      return ((a as any).forEach as any)((h: any): any => {
        h in d && ((f as any)[h] = (d as any)[h]);
      }), f;
    };
  return {
    parseMarkdown: (d: any, f: any): any => {
      let h: any;
      if (r) {
        const m: any = (r as any)(d);
        h = (typeof m as any) == ("string" as any) ? [{
          type: "text",
          text: m
        }] : m;
      } else (l as any) === ("block" as any) ? h = ((f as any).parseChildren as any)((d as any).tokens || []) : h = ((f as any).parseInline as any)((d as any).tokens || []);
      const p: any = {
        ...o,
        ...(d as any).attributes
      };
      return ((f as any).createNode as any)(e, p, h);
    },
    markdownTokenizer: {
      name: e,
      level: "block",
      start(d: any): any {
        var f: any;
        const h: any = new (RegExp as any)(`^:::${c}`, "m"),
          p: any = ((f = ((d as any).match as any)(h)) as any) == (null as any) ? void 0 : (f as any).index;
        return (p as any) !== (void 0 as any) ? p : -1;
      },
      tokenize(d: any, f: any, h: any): any {
        var p: any;
        const m: any = new (RegExp as any)(`^:::${c}(?:\\s+\\{([^}]*)\\})?\\s*\\n`),
          g: any = ((d as any).match as any)(m);
        if (!g) return;
        const [y, b = ""]: any = g,
          C: any = (s as any)(b);
        let M: any = 1;
        const S: any = (y as any).length;
        let A: any = "";
        const E: any = /^:::([\w-]*)(\s.*)?/gm,
          I: any = ((d as any).slice as any)(S);
        for ((E as any).lastIndex = 0;;) {
          const R: any = ((E as any).exec as any)(I);
          if ((R as any) === (null as any)) break;
          const ae: any = (R as any).index,
            St: any = (R as any)[1];
          if (!(((p = (R as any)[2]) as any) != (null as any) && ((p as any).endsWith as any)(":::"))) {
            if (St) M += 1;else if (M -= 1, (M as any) === (0 as any)) {
              const $e: any = ((I as any).slice as any)(0, ae);
              A = (($e as any).trim as any)();
              const wt: any = ((d as any).slice as any)(0, ((S as any) + (ae as any) as any) + (((R as any)[0] as any).length as any));
              let fe: any = [];
              if (A) if ((l as any) === ("block" as any)) for (fe = ((h as any).blockTokens as any)($e), ((fe as any).forEach as any)((ie: any): any => {
                (ie as any).text && (!(ie as any).tokens || (((ie as any).tokens as any).length as any) === (0 as any)) && ((ie as any).tokens = ((h as any).inlineTokens as any)((ie as any).text));
              }); ((fe as any).length as any) > (0 as any);) {
                const ie: any = (fe as any)[((fe as any).length as any) - (1 as any)];
                if (((ie as any).type as any) === ("paragraph" as any) && (!(ie as any).text || ((((ie as any).text as any).trim as any)() as any) === ("" as any))) ((fe as any).pop as any)();else break;
              } else fe = ((h as any).inlineTokens as any)(A);
              return {
                type: e,
                raw: wt,
                attributes: C,
                content: A,
                tokens: fe
              };
            }
          }
        }
      }
    },
    renderMarkdown: (d: any, f: any): any => {
      const h: any = (u as any)((d as any).attrs || {}),
        p: any = (i as any)(h),
        m: any = p ? ` {${p}}` : "",
        g: any = ((f as any).renderChildren as any)((d as any).content || [], `

`);
      return `:::${c}${m}

${g}

:::`;
    }
  };
}
function Wp(this: any, n: any): any {
  if (!((n as any).trim as any)()) return {};
  const e: any = {},
    t: any = /(\w+)=(?:"([^"]*)"|'([^']*)')/g;
  let r: any = ((t as any).exec as any)(n);
  for (; (r as any) !== (null as any);) {
    const [, s, i, o]: any = r;
    (e as any)[s] = i || o, r = ((t as any).exec as any)(n);
  }
  return e;
}
function qp(this: any, n: any): any {
  return ((((((((Object as any).entries as any)(n) as any).filter as any)(([, e]: any): any => (e as any) != (null as any)) as any).map as any)(([e, t]: any): any => `${e}="${t}"`) as any).join as any)(" ");
}
function Kp(this: any, n: any): any {
  const {
      nodeName: e,
      name: t,
      getContent: r,
      parseAttributes: s = Wp,
      serializeAttributes: i = qp,
      defaultAttributes: o = {},
      selfClosing: l = !1,
      allowedAttributes: a
    }: any = n,
    c: any = t || e,
    u: any = (f: any): any => {
      if (!a) return f;
      const h: any = {};
      return ((a as any).forEach as any)((p: any): any => {
        const m: any = (typeof p as any) == ("string" as any) ? p : (p as any).name,
          g: any = (typeof p as any) == ("string" as any) ? void 0 : (p as any).skipIfDefault;
        if (m in f) {
          const y: any = (f as any)[m];
          if ((g as any) !== (void 0 as any) && (y as any) === (g as any)) return;
          (h as any)[m] = y;
        }
      }), h;
    },
    d: any = ((c as any).replace as any)(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return {
    parseMarkdown: (f: any, h: any): any => {
      const p: any = {
        ...o,
        ...(f as any).attributes
      };
      if (l) return ((h as any).createNode as any)(e, p);
      const m: any = r ? (r as any)(f) : (f as any).content || "";
      return m ? ((h as any).createNode as any)(e, p, [((h as any).createTextNode as any)(m)]) : ((h as any).createNode as any)(e, p, []);
    },
    markdownTokenizer: {
      name: e,
      level: "inline",
      start(f: any): any {
        const h: any = l ? new (RegExp as any)(`\\[${d}\\s*[^\\]]*\\]`) : new (RegExp as any)(`\\[${d}\\s*[^\\]]*\\][\\s\\S]*?\\[\\/${d}\\]`),
          p: any = ((f as any).match as any)(h),
          m: any = p?.index;
        return (m as any) !== (void 0 as any) ? m : -1;
      },
      tokenize(f: any, h: any, p: any): any {
        const m: any = l ? new (RegExp as any)(`^\\[${d}\\s*([^\\]]*)\\]`) : new (RegExp as any)(`^\\[${d}\\s*([^\\]]*)\\]([\\s\\S]*?)\\[\\/${d}\\]`),
          g: any = ((f as any).match as any)(m);
        if (!g) return;
        let y: any = "",
          b: any = "";
        if (l) {
          const [, M]: any = g;
          b = M;
        } else {
          const [, M, S]: any = g;
          b = M, y = S || "";
        }
        const C: any = (s as any)(((b as any).trim as any)());
        return {
          type: e,
          raw: (g as any)[0],
          content: ((y as any).trim as any)(),
          attributes: C
        };
      }
    },
    renderMarkdown: (f: any): any => {
      let h: any = "";
      r ? h = (r as any)(f) : (f as any).content && (((f as any).content as any).length as any) > (0 as any) && (h = (((((((f as any).content as any).filter as any)((y: any): any => ((y as any).type as any) === ("text" as any)) as any).map as any)((y: any): any => (y as any).text) as any).join as any)(""));
      const p: any = (u as any)((f as any).attrs || {}),
        m: any = (i as any)(p),
        g: any = m ? ` ${m}` : "";
      return l ? `[${c}${g}]` : `[${c}${g}]${h}[/${c}]`;
    }
  };
}
function Rs(this: any, n: any, e: any, t: any): any {
  var r: any, s: any, i: any, o: any;
  const l: any = ((n as any).split as any)(`
`),
    a: any = [];
  let c: any = "",
    u: any = 0;
  const d: any = (e as any).baseIndentSize || 2;
  for (; (u as any) < ((l as any).length as any);) {
    const f: any = (l as any)[u],
      h: any = ((f as any).match as any)((e as any).itemPattern);
    if (!h) {
      if (((a as any).length as any) > (0 as any)) break;
      if ((((f as any).trim as any)() as any) === ("" as any)) {
        u += 1, c = `${c}${f}
`;
        continue;
      } else return;
    }
    const p: any = ((e as any).extractItemData as any)(h),
      {
        indentLevel: m,
        mainContent: g
      }: any = p;
    c = `${c}${f}
`;
    const y: any = [g];
    for (u += 1; (u as any) < ((l as any).length as any);) {
      const S: any = (l as any)[u];
      if ((((S as any).trim as any)() as any) === ("" as any)) {
        const E: any = ((((l as any).slice as any)((u as any) + (1 as any)) as any).findIndex as any)((ae: any): any => (((ae as any).trim as any)() as any) !== ("" as any));
        if ((E as any) === (-1 as any)) break;
        if ((((((s = ((r = (((l as any)[((u as any) + (1 as any) as any) + (E as any)] as any).match as any)(/^(\s*)/)) as any) == (null as any) ? void 0 : (r as any)[1]) as any) == (null as any) ? void 0 : (s as any).length) || 0) as any) > (m as any)) {
          ((y as any).push as any)(S), c = `${c}${S}
`, u += 1;
          continue;
        } else break;
      }
      if ((((((o = ((i = ((S as any).match as any)(/^(\s*)/)) as any) == (null as any) ? void 0 : (i as any)[1]) as any) == (null as any) ? void 0 : (o as any).length) || 0) as any) > (m as any)) ((y as any).push as any)(S), c = `${c}${S}
`, u += 1;else break;
    }
    let b: any;
    const C: any = ((y as any).slice as any)(1);
    if (((C as any).length as any) > (0 as any)) {
      const S: any = ((((C as any).map as any)((A: any): any => ((A as any).slice as any)((m as any) + (d as any))) as any).join as any)(`
`);
      ((S as any).trim as any)() && ((e as any).customNestedParser ? b = ((e as any).customNestedParser as any)(S) : b = ((t as any).blockTokens as any)(S));
    }
    const M: any = ((e as any).createToken as any)(p, b);
    ((a as any).push as any)(M);
  }
  if (((a as any).length as any) !== (0 as any)) return {
    items: a,
    raw: c
  };
}
function bi(this: any, n: any, e: any, t: any, r: any): any {
  if (!n || !((Array as any).isArray as any)((n as any).content)) return "";
  const s: any = (typeof t as any) == ("function" as any) ? (t as any)(r) : t,
    [i, ...o]: any = (n as any).content,
    l: any = ((e as any).renderChildren as any)([i]),
    a: any = [`${s}${l}`];
  return o && ((o as any).length as any) > (0 as any) && ((o as any).forEach as any)((c: any): any => {
    const u: any = ((e as any).renderChildren as any)([c]);
    if (u) {
      const d: any = ((((((u as any).split as any)(`
`) as any).map as any)((f: any): any => f ? ((e as any).indent as any)(f) : "") as any).join as any)(`
`);
      ((a as any).push as any)(d);
    }
  }), ((a as any).join as any)(`
`);
}
function Up(this: any, n: any, e: any, t: any = {}): any {
  const {
      state: r
    }: any = e,
    {
      doc: s,
      tr: i
    }: any = r,
    o: any = n;
  ((s as any).descendants as any)((l: any, a: any): any => {
    const c: any = (((i as any).mapping as any).map as any)(a),
      u: any = ((((i as any).mapping as any).map as any)(a) as any) + ((l as any).nodeSize as any);
    let d: any = null;
    if ((((l as any).marks as any).forEach as any)((h: any): any => {
      if ((h as any) !== (o as any)) return !1;
      d = h;
    }), !d) return;
    let f: any = !1;
    if (((((Object as any).keys as any)(t) as any).forEach as any)((h: any): any => {
      ((t as any)[h] as any) !== (((d as any).attrs as any)[h] as any) && (f = !0);
    }), f) {
      const h: any = (((n as any).type as any).create as any)({
        ...(n as any).attrs,
        ...t
      });
      ((i as any).removeMark as any)(c, u, (n as any).type), ((i as any).addMark as any)(c, u, h);
    }
  }), (i as any).docChanged && (((e as any).view as any).dispatch as any)(i);
}
var de: any = class mc extends (gi as any) {
    declare type: any;
    [key: string]: any;
    constructor() {
      super(...arguments), (this as any).type = "node";
    }
    static create(e: any = {}): any {
      const t: any = (typeof e as any) == ("function" as any) ? (e as any)() : e;
      return new (mc as any)(t);
    }
    configure(e: any): any {
      return (super.configure as any)(e);
    }
    extend(e: any): any {
      const t: any = (typeof e as any) == ("function" as any) ? (e as any)() : e;
      return (super.extend as any)(t);
    }
  },
  fy: any = class {
    declare getPos: any;
    declare HTMLAttributes: any;
    declare view: any;
    declare innerDecorations: any;
    declare decorations: any;
    declare node: any;
    declare extension: any;
    declare options: any;
    declare editor: any;
    declare component: any;
    declare isDragging: any;
    [key: string]: any;
    constructor(n: any, e: any, t: any) {
      (this as any).isDragging = !1, (this as any).component = n, (this as any).editor = (e as any).editor, (this as any).options = {
        stopEvent: null,
        ignoreMutation: null,
        ...t
      }, (this as any).extension = (e as any).extension, (this as any).node = (e as any).node, (this as any).decorations = (e as any).decorations, (this as any).innerDecorations = (e as any).innerDecorations, (this as any).view = (e as any).view, (this as any).HTMLAttributes = (e as any).HTMLAttributes, (this as any).getPos = (e as any).getPos, ((this as any).mount as any)();
    }
    mount(): any {}
    get dom(): any {
      return (((this as any).editor as any).view as any).dom;
    }
    get contentDOM(): any {
      return null;
    }
    onDragStart(n: any): any {
      var e: any, t: any, r: any, s: any, i: any, o: any, l: any;
      const {
          view: a
        }: any = (this as any).editor,
        c: any = (n as any).target,
        u: any = ((c as any).nodeType as any) === (3 as any) ? ((e = (c as any).parentElement) as any) == (null as any) ? void 0 : ((e as any).closest as any)("[data-drag-handle]") : ((c as any).closest as any)("[data-drag-handle]");
      if (!(this as any).dom || ((t = (this as any).contentDOM) as any) != (null as any) && ((t as any).contains as any)(c) || !u) return;
      let d: any = 0,
        f: any = 0;
      if (((this as any).dom as any) !== (u as any)) {
        const b: any = (((this as any).dom as any).getBoundingClientRect as any)(),
          C: any = ((u as any).getBoundingClientRect as any)(),
          M: any = ((s = (n as any).offsetX) as any) != (null as any) ? s : ((r = (n as any).nativeEvent) as any) == (null as any) ? void 0 : (r as any).offsetX,
          S: any = ((o = (n as any).offsetY) as any) != (null as any) ? o : ((i = (n as any).nativeEvent) as any) == (null as any) ? void 0 : (i as any).offsetY;
        d = (((C as any).x as any) - ((b as any).x as any) as any) + (M as any), f = (((C as any).y as any) - ((b as any).y as any) as any) + (S as any);
      }
      const h: any = (((this as any).dom as any).cloneNode as any)(!0);
      try {
        const b: any = (((this as any).dom as any).getBoundingClientRect as any)();
        ((h as any).style as any).width = `${((Math as any).round as any)((b as any).width)}px`, ((h as any).style as any).height = `${((Math as any).round as any)((b as any).height)}px`, ((h as any).style as any).boxSizing = "border-box", ((h as any).style as any).pointerEvents = "none";
      } catch {}
      let p: any = null;
      try {
        p = ((document as any).createElement as any)("div"), ((p as any).style as any).position = "absolute", ((p as any).style as any).top = "-9999px", ((p as any).style as any).left = "-9999px", ((p as any).style as any).pointerEvents = "none", ((p as any).appendChild as any)(h), (((document as any).body as any).appendChild as any)(p), ((l = (n as any).dataTransfer) as any) == (null as any) || ((l as any).setDragImage as any)(h, d, f);
      } finally {
        p && (setTimeout as any)((): any => {
          try {
            p?.remove();
          } catch {}
        }, 0);
      }
      const m: any = ((this as any).getPos as any)();
      if ((typeof m as any) != ("number" as any)) return;
      const g: any = ((v as any).create as any)(((a as any).state as any).doc, m),
        y: any = ((((a as any).state as any).tr as any).setSelection as any)(g);
      ((a as any).dispatch as any)(y);
    }
    stopEvent(n: any): any {
      var e: any;
      if (!(this as any).dom) return !1;
      if ((typeof ((this as any).options as any).stopEvent as any) == ("function" as any)) return (((this as any).options as any).stopEvent as any)({
        event: n
      });
      const t: any = (n as any).target;
      if (!((((this as any).dom as any).contains as any)(t) && !(((e = (this as any).contentDOM) as any) != (null as any) && ((e as any).contains as any)(t)))) return !1;
      const s: any = (((n as any).type as any).startsWith as any)("drag"),
        i: any = ((n as any).type as any) === ("drop" as any);
      if ((((["INPUT", "BUTTON", "SELECT", "TEXTAREA"] as any).includes as any)((t as any).tagName) || (t as any).isContentEditable) && !i && !s) return !0;
      const {
          isEditable: l
        }: any = (this as any).editor,
        {
          isDragging: a
        }: any = this,
        c: any = !!((((this as any).node as any).type as any).spec as any).draggable,
        u: any = ((v as any).isSelectable as any)((this as any).node),
        d: any = ((n as any).type as any) === ("copy" as any),
        f: any = ((n as any).type as any) === ("paste" as any),
        h: any = ((n as any).type as any) === ("cut" as any),
        p: any = ((n as any).type as any) === ("mousedown" as any);
      if (!c && u && s && ((n as any).target as any) === ((this as any).dom as any) && ((n as any).preventDefault as any)(), c && s && !a && ((n as any).target as any) === ((this as any).dom as any)) return ((n as any).preventDefault as any)(), !1;
      if (c && l && !a && p) {
        const m: any = ((t as any).closest as any)("[data-drag-handle]");
        m && (((this as any).dom as any) === (m as any) || (((this as any).dom as any).contains as any)(m)) && ((this as any).isDragging = !0, ((document as any).addEventListener as any)("dragend", (): any => {
          (this as any).isDragging = !1;
        }, {
          once: !0
        }), ((document as any).addEventListener as any)("drop", (): any => {
          (this as any).isDragging = !1;
        }, {
          once: !0
        }), ((document as any).addEventListener as any)("mouseup", (): any => {
          (this as any).isDragging = !1;
        }, {
          once: !0
        }));
      }
      return !(a || i || d || f || h || p && u);
    }
    ignoreMutation(n: any): any {
      return !(this as any).dom || !(this as any).contentDOM ? !0 : (typeof ((this as any).options as any).ignoreMutation as any) == ("function" as any) ? (((this as any).options as any).ignoreMutation as any)({
        mutation: n
      }) : ((this as any).node as any).isLeaf || ((this as any).node as any).isAtom ? !0 : ((n as any).type as any) === ("selection" as any) || (((this as any).dom as any).contains as any)((n as any).target) && ((n as any).type as any) === ("childList" as any) && ((Pr as any)() || (Ha as any)()) && ((this as any).editor as any).isFocused && (([...((Array as any).from as any)((n as any).addedNodes), ...((Array as any).from as any)((n as any).removedNodes)] as any).every as any)((t: any): any => (t as any).isContentEditable) ? !1 : ((this as any).contentDOM as any) === ((n as any).target as any) && ((n as any).type as any) === ("attributes" as any) ? !0 : !(((this as any).contentDOM as any).contains as any)((n as any).target);
    }
    updateAttributes(n: any): any {
      ((((this as any).editor as any).commands as any).command as any)(({
        tr: e
      }: any): any => {
        const t: any = ((this as any).getPos as any)();
        return (typeof t as any) != ("number" as any) ? !1 : (((e as any).setNodeMarkup as any)(t, void 0, {
          ...((this as any).node as any).attrs,
          ...n
        }), !0);
      });
    }
    deleteNode(): any {
      const n: any = ((this as any).getPos as any)();
      if ((typeof n as any) != ("number" as any)) return;
      const e: any = (n as any) + (((this as any).node as any).nodeSize as any);
      ((((this as any).editor as any).commands as any).deleteRange as any)({
        from: n,
        to: e
      });
    }
  };
function yt(this: any, n: any): any {
  return new (Np as any)({
    find: (n as any).find,
    handler: ({
      state: e,
      range: t,
      match: r,
      pasteEvent: s
    }: any): any => {
      const i: any = (P as any)((n as any).getAttributes, void 0, r, s);
      if ((i as any) === (!1 as any) || (i as any) === (null as any)) return null;
      const {
          tr: o
        }: any = e,
        l: any = (r as any)[((r as any).length as any) - (1 as any)],
        a: any = (r as any)[0];
      let c: any = (t as any).to;
      if (l) {
        const u: any = ((a as any).search as any)(/\S/),
          d: any = ((t as any).from as any) + (((a as any).indexOf as any)(l) as any),
          f: any = (d as any) + ((l as any).length as any);
        if (((((((mi as any)((t as any).from, (t as any).to, (e as any).doc) as any).filter as any)((p: any): any => (((((p as any).mark as any).type as any).excluded as any).find as any)((g: any): any => (g as any) === ((n as any).type as any) && (g as any) !== (((p as any).mark as any).type as any))) as any).filter as any)((p: any): any => ((p as any).to as any) > (d as any)) as any).length) return null;
        (f as any) < ((t as any).to as any) && ((o as any).delete as any)(f, (t as any).to), (d as any) > ((t as any).from as any) && ((o as any).delete as any)(((t as any).from as any) + (u as any), d), c = (((t as any).from as any) + (u as any) as any) + ((l as any).length as any), ((o as any).addMark as any)(((t as any).from as any) + (u as any), c, (((n as any).type as any).create as any)(i || {})), ((o as any).removeStoredMark as any)((n as any).type);
      }
    }
  });
}
var Jp: any = (Object as any).getOwnPropertyNames,
  Gp: any = (Object as any).getOwnPropertySymbols,
  Yp: any = ((Object as any).prototype as any).hasOwnProperty;
function Fo(this: any, n: any, e: any): any {
  return function (this: any, r: any, s: any, i: any): any {
    return (n as any)(r, s, i) && (e as any)(r, s, i);
  };
}
function Tn(this: any, n: any): any {
  return function (this: any, t: any, r: any, s: any): any {
    if (!t || !r || (typeof t as any) != ("object" as any) || (typeof r as any) != ("object" as any)) return (n as any)(t, r, s);
    var i: any = (s as any).cache,
      o: any = ((i as any).get as any)(t),
      l: any = ((i as any).get as any)(r);
    if (o && l) return (o as any) === (r as any) && (l as any) === (t as any);
    ((i as any).set as any)(t, r), ((i as any).set as any)(r, t);
    var a: any = (n as any)(t, r, s);
    return ((i as any).delete as any)(t), ((i as any).delete as any)(r), a;
  };
}
function Xp(this: any, n: any): any {
  return n?.[(Symbol as any).toStringTag];
}
function Ho(this: any, n: any): any {
  return (((Jp as any)(n) as any).concat as any)((Gp as any)(n));
}
var Qp: any = (Object as any).hasOwn || function (this: any, n: any, e: any): any {
  return ((Yp as any).call as any)(n, e);
};
function xt(this: any, n: any, e: any): any {
  return (n as any) === (e as any) || !n && !e && (n as any) !== (n as any) && (e as any) !== (e as any);
}
var Zp: string = "__v",
  em: string = "__o",
  tm: string = "_owner",
  Vo: any = (Object as any).getOwnPropertyDescriptor,
  jo: any = (Object as any).keys;
function nm(this: any, n: any, e: any, t: any): any {
  var r: any = (n as any).length;
  if (((e as any).length as any) !== (r as any)) return !1;
  for (; (r-- as any) > (0 as any);) if (!((t as any).equals as any)((n as any)[r], (e as any)[r], r, r, n, e, t)) return !1;
  return !0;
}
function rm(this: any, n: any, e: any): any {
  return (xt as any)(((n as any).getTime as any)(), ((e as any).getTime as any)());
}
function sm(this: any, n: any, e: any): any {
  return ((n as any).name as any) === ((e as any).name as any) && ((n as any).message as any) === ((e as any).message as any) && ((n as any).cause as any) === ((e as any).cause as any) && ((n as any).stack as any) === ((e as any).stack as any);
}
function im(this: any, n: any, e: any): any {
  return (n as any) === (e as any);
}
function _o(this: any, n: any, e: any, t: any): any {
  var r: any = (n as any).size;
  if ((r as any) !== ((e as any).size as any)) return !1;
  if (!r) return !0;
  for (var s: any = new (Array as any)(r), i: any = ((n as any).entries as any)(), o: any, l: any, a: any = 0; (o = ((i as any).next as any)()) && !(o as any).done;) {
    for (var c: any = ((e as any).entries as any)(), u: any = !1, d: any = 0; (l = ((c as any).next as any)()) && !(l as any).done;) {
      if ((s as any)[d]) {
        d++;
        continue;
      }
      var f: any = (o as any).value,
        h: any = (l as any).value;
      if (((t as any).equals as any)((f as any)[0], (h as any)[0], a, d, n, e, t) && ((t as any).equals as any)((f as any)[1], (h as any)[1], (f as any)[0], (h as any)[0], n, e, t)) {
        u = (s as any)[d] = !0;
        break;
      }
      d++;
    }
    if (!u) return !1;
    a++;
  }
  return !0;
}
var om: any = xt;
function lm(this: any, n: any, e: any, t: any): any {
  var r: any = (jo as any)(n),
    s: any = (r as any).length;
  if ((((jo as any)(e) as any).length as any) !== (s as any)) return !1;
  for (; (s-- as any) > (0 as any);) if (!(gc as any)(n, e, t, (r as any)[s])) return !1;
  return !0;
}
function _t(this: any, n: any, e: any, t: any): any {
  var r: any = (Ho as any)(n),
    s: any = (r as any).length;
  if ((((Ho as any)(e) as any).length as any) !== (s as any)) return !1;
  for (var i: any, o: any, l: any; (s-- as any) > (0 as any);) if (i = (r as any)[s], !(gc as any)(n, e, t, i) || (o = (Vo as any)(n, i), l = (Vo as any)(e, i), (o || l) && (!o || !l || ((o as any).configurable as any) !== ((l as any).configurable as any) || ((o as any).enumerable as any) !== ((l as any).enumerable as any) || ((o as any).writable as any) !== ((l as any).writable as any)))) return !1;
  return !0;
}
function am(this: any, n: any, e: any): any {
  return (xt as any)(((n as any).valueOf as any)(), ((e as any).valueOf as any)());
}
function cm(this: any, n: any, e: any): any {
  return ((n as any).source as any) === ((e as any).source as any) && ((n as any).flags as any) === ((e as any).flags as any);
}
function Wo(this: any, n: any, e: any, t: any): any {
  var r: any = (n as any).size;
  if ((r as any) !== ((e as any).size as any)) return !1;
  if (!r) return !0;
  for (var s: any = new (Array as any)(r), i: any = ((n as any).values as any)(), o: any, l: any; (o = ((i as any).next as any)()) && !(o as any).done;) {
    for (var a: any = ((e as any).values as any)(), c: any = !1, u: any = 0; (l = ((a as any).next as any)()) && !(l as any).done;) {
      if (!(s as any)[u] && ((t as any).equals as any)((o as any).value, (l as any).value, (o as any).value, (l as any).value, n, e, t)) {
        c = (s as any)[u] = !0;
        break;
      }
      u++;
    }
    if (!c) return !1;
  }
  return !0;
}
function um(this: any, n: any, e: any): any {
  var t: any = (n as any).length;
  if (((e as any).length as any) !== (t as any)) return !1;
  for (; (t-- as any) > (0 as any);) if (((n as any)[t] as any) !== ((e as any)[t] as any)) return !1;
  return !0;
}
function dm(this: any, n: any, e: any): any {
  return ((n as any).hostname as any) === ((e as any).hostname as any) && ((n as any).pathname as any) === ((e as any).pathname as any) && ((n as any).protocol as any) === ((e as any).protocol as any) && ((n as any).port as any) === ((e as any).port as any) && ((n as any).hash as any) === ((e as any).hash as any) && ((n as any).username as any) === ((e as any).username as any) && ((n as any).password as any) === ((e as any).password as any);
}
function gc(this: any, n: any, e: any, t: any, r: any): any {
  return ((r as any) === (tm as any) || (r as any) === (em as any) || (r as any) === (Zp as any)) && ((n as any).$$typeof || (e as any).$$typeof) ? !0 : (Qp as any)(e, r) && ((t as any).equals as any)((n as any)[r], (e as any)[r], r, r, n, e, t);
}
var fm: string = "[object Arguments]",
  hm: string = "[object Boolean]",
  pm: string = "[object Date]",
  mm: string = "[object Error]",
  gm: string = "[object Map]",
  ym: string = "[object Number]",
  km: string = "[object Object]",
  bm: string = "[object RegExp]",
  xm: string = "[object Set]",
  Sm: string = "[object String]",
  wm: string = "[object URL]",
  Cm: any = (Array as any).isArray,
  qo: any = (typeof ArrayBuffer as any) < ("u" as any) && (typeof (ArrayBuffer as any).isView as any) == ("function" as any) ? (ArrayBuffer as any).isView : null,
  Ko: any = (Object as any).assign,
  Mm: any = (((((Object as any).prototype as any).toString as any).call as any).bind as any)(((Object as any).prototype as any).toString);
function Em(this: any, n: any): any {
  var e: any = (n as any).areArraysEqual,
    t: any = (n as any).areDatesEqual,
    r: any = (n as any).areErrorsEqual,
    s: any = (n as any).areFunctionsEqual,
    i: any = (n as any).areMapsEqual,
    o: any = (n as any).areNumbersEqual,
    l: any = (n as any).areObjectsEqual,
    a: any = (n as any).arePrimitiveWrappersEqual,
    c: any = (n as any).areRegExpsEqual,
    u: any = (n as any).areSetsEqual,
    d: any = (n as any).areTypedArraysEqual,
    f: any = (n as any).areUrlsEqual,
    h: any = (n as any).unknownTagComparators;
  return function (this: any, m: any, g: any, y: any): any {
    if ((m as any) === (g as any)) return !0;
    if ((m as any) == (null as any) || (g as any) == (null as any)) return !1;
    var b: any = typeof m;
    if ((b as any) !== (typeof g as any)) return !1;
    if ((b as any) !== ("object" as any)) return (b as any) === ("number" as any) ? (o as any)(m, g, y) : (b as any) === ("function" as any) ? (s as any)(m, g, y) : !1;
    var C: any = (m as any).constructor;
    if ((C as any) !== ((g as any).constructor as any)) return !1;
    if ((C as any) === (Object as any)) return (l as any)(m, g, y);
    if ((Cm as any)(m)) return (e as any)(m, g, y);
    if ((qo as any) != (null as any) && (qo as any)(m)) return (d as any)(m, g, y);
    if ((C as any) === (Date as any)) return (t as any)(m, g, y);
    if ((C as any) === (RegExp as any)) return (c as any)(m, g, y);
    if ((C as any) === (Map as any)) return (i as any)(m, g, y);
    if ((C as any) === (Set as any)) return (u as any)(m, g, y);
    var M: any = (Mm as any)(m);
    if ((M as any) === (pm as any)) return (t as any)(m, g, y);
    if ((M as any) === (bm as any)) return (c as any)(m, g, y);
    if ((M as any) === (gm as any)) return (i as any)(m, g, y);
    if ((M as any) === (xm as any)) return (u as any)(m, g, y);
    if ((M as any) === (km as any)) return (typeof (m as any).then as any) != ("function" as any) && (typeof (g as any).then as any) != ("function" as any) && (l as any)(m, g, y);
    if ((M as any) === (wm as any)) return (f as any)(m, g, y);
    if ((M as any) === (mm as any)) return (r as any)(m, g, y);
    if ((M as any) === (fm as any)) return (l as any)(m, g, y);
    if ((M as any) === (hm as any) || (M as any) === (ym as any) || (M as any) === (Sm as any)) return (a as any)(m, g, y);
    if (h) {
      var S: any = (h as any)[M];
      if (!S) {
        var A: any = (Xp as any)(m);
        A && (S = (h as any)[A]);
      }
      if (S) return (S as any)(m, g, y);
    }
    return !1;
  };
}
function vm(this: any, n: any): any {
  var e: any = (n as any).circular,
    t: any = (n as any).createCustomConfig,
    r: any = (n as any).strict,
    s: any = {
      areArraysEqual: r ? _t : nm,
      areDatesEqual: rm,
      areErrorsEqual: sm,
      areFunctionsEqual: im,
      areMapsEqual: r ? (Fo as any)(_o, _t) : _o,
      areNumbersEqual: om,
      areObjectsEqual: r ? _t : lm,
      arePrimitiveWrappersEqual: am,
      areRegExpsEqual: cm,
      areSetsEqual: r ? (Fo as any)(Wo, _t) : Wo,
      areTypedArraysEqual: r ? _t : um,
      areUrlsEqual: dm,
      unknownTagComparators: void 0
    };
  if (t && (s = (Ko as any)({}, s, (t as any)(s))), e) {
    var i: any = (Tn as any)((s as any).areArraysEqual),
      o: any = (Tn as any)((s as any).areMapsEqual),
      l: any = (Tn as any)((s as any).areObjectsEqual),
      a: any = (Tn as any)((s as any).areSetsEqual);
    s = (Ko as any)({}, s, {
      areArraysEqual: i,
      areMapsEqual: o,
      areObjectsEqual: l,
      areSetsEqual: a
    });
  }
  return s;
}
function Tm(this: any, n: any): any {
  return function (this: any, e: any, t: any, r: any, s: any, i: any, o: any, l: any): any {
    return (n as any)(e, t, l);
  };
}
function Am(this: any, n: any): any {
  var e: any = (n as any).circular,
    t: any = (n as any).comparator,
    r: any = (n as any).createState,
    s: any = (n as any).equals,
    i: any = (n as any).strict;
  if (r) return function (this: any, a: any, c: any): any {
    var u: any = (r as any)(),
      d: any = (u as any).cache,
      f: any = (d as any) === (void 0 as any) ? e ? new (WeakMap as any)() : void 0 : d,
      h: any = (u as any).meta;
    return (t as any)(a, c, {
      cache: f,
      equals: s,
      meta: h,
      strict: i
    });
  };
  if (e) return function (this: any, a: any, c: any): any {
    return (t as any)(a, c, {
      cache: new (WeakMap as any)(),
      equals: s,
      meta: void 0,
      strict: i
    });
  };
  var o: any = {
    cache: void 0,
    equals: s,
    meta: void 0,
    strict: i
  };
  return function (this: any, a: any, c: any): any {
    return (t as any)(a, c, o);
  };
}
var hy: any = (nt as any)();
(nt as any)({
  strict: !0
});
(nt as any)({
  circular: !0
});
(nt as any)({
  circular: !0,
  strict: !0
});
(nt as any)({
  createInternalComparator: function (this: any): any {
    return xt;
  }
});
(nt as any)({
  strict: !0,
  createInternalComparator: function (this: any): any {
    return xt;
  }
});
(nt as any)({
  circular: !0,
  createInternalComparator: function (this: any): any {
    return xt;
  }
});
(nt as any)({
  circular: !0,
  createInternalComparator: function (this: any): any {
    return xt;
  },
  strict: !0
});
function nt(this: any, n: any): any {
  (n as any) === (void 0 as any) && (n = {});
  var e: any = (n as any).circular,
    t: any = (e as any) === (void 0 as any) ? !1 : e,
    r: any = (n as any).createInternalComparator,
    s: any = (n as any).createState,
    i: any = (n as any).strict,
    o: any = (i as any) === (void 0 as any) ? !1 : i,
    l: any = (vm as any)(n),
    a: any = (Em as any)(l),
    c: any = r ? (r as any)(a) : (Tm as any)(a);
  return (Am as any)({
    circular: t,
    comparator: a,
    createState: s,
    equals: c,
    strict: o
  });
}
const Nm: string = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2",
  Om: string = "\u03B5\u03BB1\u03C52\u0431\u04331\u0435\u043B3\u0434\u0435\u0442\u04384\u0435\u044E2\u043A\u0430\u0442\u043E\u043B\u0438\u043A6\u043E\u043C3\u043C\u043A\u04342\u043E\u043D1\u0441\u043A\u0432\u04306\u043E\u043D\u043B\u0430\u0439\u043D5\u0440\u04333\u0440\u0443\u04412\u04442\u0441\u0430\u0439\u04423\u0440\u04313\u0443\u043A\u04403\u049B\u0430\u04373\u0570\u0561\u05753\u05D9\u05E9\u05E8\u05D0\u05DC5\u05E7\u05D5\u05DD3\u0627\u0628\u0648\u0638\u0628\u064A5\u0631\u0627\u0645\u0643\u06485\u0644\u0627\u0631\u062F\u06464\u0628\u062D\u0631\u064A\u06465\u062C\u0632\u0627\u0626\u06315\u0633\u0639\u0648\u062F\u064A\u06296\u0639\u0644\u064A\u0627\u06465\u0645\u063A\u0631\u06285\u0645\u0627\u0631\u0627\u062A5\u06CC\u0631\u0627\u06465\u0628\u0627\u0631\u062A2\u0632\u0627\u06314\u064A\u062A\u06433\u06BE\u0627\u0631\u062A5\u062A\u0648\u0646\u06334\u0633\u0648\u062F\u0627\u06463\u0631\u064A\u06295\u0634\u0628\u0643\u06294\u0639\u0631\u0627\u06422\u06282\u0645\u0627\u06464\u0641\u0644\u0633\u0637\u064A\u06466\u0642\u0637\u06313\u0643\u0627\u062B\u0648\u0644\u064A\u06436\u0648\u06453\u0645\u0635\u06312\u0644\u064A\u0633\u064A\u06275\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u06277\u0642\u06394\u0647\u0645\u0631\u0627\u06475\u067E\u0627\u06A9\u0633\u062A\u0627\u06467\u0680\u0627\u0631\u062A4\u0915\u0949\u092E3\u0928\u0947\u091F3\u092D\u093E\u0930\u09240\u092E\u094D3\u094B\u09245\u0938\u0902\u0917\u0920\u09285\u09AC\u09BE\u0982\u09B2\u09BE5\u09AD\u09BE\u09B0\u09A42\u09F0\u09A44\u0A2D\u0A3E\u0A30\u0A244\u0AAD\u0ABE\u0AB0\u0AA44\u0B2D\u0B3E\u0B30\u0B244\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE6\u0BB2\u0B99\u0BCD\u0B95\u0BC86\u0B9A\u0BBF\u0B99\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0BC2\u0BB0\u0BCD11\u0C2D\u0C3E\u0C30\u0C24\u0C4D5\u0CAD\u0CBE\u0CB0\u0CA44\u0D2D\u0D3E\u0D30\u0D24\u0D025\u0DBD\u0D82\u0D9A\u0DCF4\u0E04\u0E2D\u0E213\u0E44\u0E17\u0E223\u0EA5\u0EB2\u0EA73\u10D2\u10D42\u307F\u3093\u306A3\u30A2\u30DE\u30BE\u30F34\u30AF\u30E9\u30A6\u30C94\u30B0\u30FC\u30B0\u30EB4\u30B3\u30E02\u30B9\u30C8\u30A23\u30BB\u30FC\u30EB3\u30D5\u30A1\u30C3\u30B7\u30E7\u30F36\u30DD\u30A4\u30F3\u30C84\u4E16\u754C2\u4E2D\u4FE11\u56FD1\u570B1\u6587\u7F513\u4E9A\u9A6C\u900A3\u4F01\u4E1A2\u4F5B\u5C712\u4FE1\u606F2\u5065\u5EB72\u516B\u53662\u516C\u53F81\u76CA2\u53F0\u6E7E1\u70632\u5546\u57CE1\u5E971\u68072\u5609\u91CC0\u5927\u9152\u5E975\u5728\u7EBF2\u5927\u62FF2\u5929\u4E3B\u65593\u5A31\u4E502\u5BB6\u96FB2\u5E7F\u4E1C2\u5FAE\u535A2\u6148\u55842\u6211\u7231\u4F603\u624B\u673A2\u62DB\u80582\u653F\u52A11\u5E9C2\u65B0\u52A0\u57612\u95FB2\u65F6\u5C1A2\u66F8\u7C4D2\u673A\u67842\u6DE1\u9A6C\u95213\u6E38\u620F2\u6FB3\u95802\u70B9\u770B2\u79FB\u52A82\u7EC4\u7EC7\u673A\u67844\u7F51\u57401\u5E971\u7AD91\u7EDC2\u8054\u901A2\u8C37\u6B4C2\u8D2D\u72692\u901A\u8CA92\u96C6\u56E22\u96FB\u8A0A\u76C8\u79D14\u98DE\u5229\u6D663\u98DF\u54C12\u9910\u53852\u9999\u683C\u91CC\u62C93\u6E2F2\uB2F7\uB1371\uCEF42\uC0BC\uC1312\uD55C\uAD6D2",
  Ps: string = "numeric",
  Ls: string = "ascii",
  zs: string = "alpha",
  en: string = "asciinumeric",
  Gt: string = "alphanumeric",
  Bs: string = "domain",
  yc: string = "emoji",
  Dm: string = "scheme",
  Im: string = "slashscheme",
  is: string = "whitespace";
function Rm(this: any, n: any, e: any): any {
  return n in e || ((e as any)[n] = []), (e as any)[n];
}
function lt(this: any, n: any, e: any, t: any): any {
  (e as any)[Ps] && ((e as any)[en] = !0, (e as any)[Gt] = !0), (e as any)[Ls] && ((e as any)[en] = !0, (e as any)[zs] = !0), (e as any)[en] && ((e as any)[Gt] = !0), (e as any)[zs] && ((e as any)[Gt] = !0), (e as any)[Gt] && ((e as any)[Bs] = !0), (e as any)[yc] && ((e as any)[Bs] = !0);
  for (const r in e) {
    const s: any = (Rm as any)(r, t);
    (((s as any).indexOf as any)(n) as any) < (0 as any) && ((s as any).push as any)(n);
  }
}
function Pm(this: any, n: any, e: any): any {
  const t: any = {};
  for (const r in e) ((((e as any)[r] as any).indexOf as any)(n) as any) >= (0 as any) && ((t as any)[r] = !0);
  return t;
}
function oe(this: any, n: any = null): any {
  (this as any).j = {}, (this as any).jr = [], (this as any).jd = null, (this as any).t = n;
}
(oe as any).groups = {};
(oe as any).prototype = {
  accepts(): any {
    return !!(this as any).t;
  },
  go(n: any): any {
    const e: any = this,
      t: any = ((e as any).j as any)[n];
    if (t) return t;
    for (let r: any = 0; (r as any) < (((e as any).jr as any).length as any); r++) {
      const s: any = (((e as any).jr as any)[r] as any)[0],
        i: any = (((e as any).jr as any)[r] as any)[1];
      if (i && ((s as any).test as any)(n)) return i;
    }
    return (e as any).jd;
  },
  has(n: any, e: any = !1): any {
    return e ? n in (this as any).j : !!((this as any).go as any)(n);
  },
  ta(n: any, e: any, t: any, r: any): any {
    for (let s: any = 0; (s as any) < ((n as any).length as any); s++) ((this as any).tt as any)((n as any)[s], e, t, r);
  },
  tr(n: any, e: any, t: any, r: any): any {
    r = r || (oe as any).groups;
    let s: any;
    return e && (e as any).j ? s = e : (s = new (oe as any)(e), t && r && (lt as any)(e, t, r)), (((this as any).jr as any).push as any)([n, s]), s;
  },
  ts(n: any, e: any, t: any, r: any): any {
    let s: any = this;
    const i: any = (n as any).length;
    if (!i) return s;
    for (let o: any = 0; (o as any) < ((i as any) - (1 as any) as any); o++) s = ((s as any).tt as any)((n as any)[o]);
    return ((s as any).tt as any)((n as any)[(i as any) - (1 as any)], e, t, r);
  },
  tt(n: any, e: any, t: any, r: any): any {
    r = r || (oe as any).groups;
    const s: any = this;
    if (e && (e as any).j) return ((s as any).j as any)[n] = e, e;
    const i: any = e;
    let o: any,
      l: any = ((s as any).go as any)(n);
    if (l ? (o = new (oe as any)(), ((Object as any).assign as any)((o as any).j, (l as any).j), ((((o as any).jr as any).push as any).apply as any)((o as any).jr, (l as any).jr), (o as any).jd = (l as any).jd, (o as any).t = (l as any).t) : o = new (oe as any)(), i) {
      if (r) if ((o as any).t && (typeof (o as any).t as any) == ("string" as any)) {
        const a: any = ((Object as any).assign as any)((Pm as any)((o as any).t, r), t);
        (lt as any)(i, a, r);
      } else t && (lt as any)(i, t, r);
      (o as any).t = i;
    }
    return ((s as any).j as any)[n] = o, o;
  }
};
const D: any = (n: any, e: any, t: any, r: any, s: any): any => ((n as any).ta as any)(e, t, r, s),
  F: any = (n: any, e: any, t: any, r: any, s: any): any => ((n as any).tr as any)(e, t, r, s),
  Uo: any = (n: any, e: any, t: any, r: any, s: any): any => ((n as any).ts as any)(e, t, r, s),
  x: any = (n: any, e: any, t: any, r: any, s: any): any => ((n as any).tt as any)(e, t, r, s),
  De: string = "WORD",
  $s: string = "UWORD",
  kc: string = "ASCIINUMERICAL",
  bc: string = "ALPHANUMERICAL",
  mn: string = "LOCALHOST",
  Fs: string = "TLD",
  Hs: string = "UTLD",
  Ln: string = "SCHEME",
  Nt: string = "SLASH_SCHEME",
  xi: string = "NUM",
  Vs: string = "WS",
  Si: string = "NL",
  tn: string = "OPENBRACE",
  nn: string = "CLOSEBRACE",
  Yn: string = "OPENBRACKET",
  Xn: string = "CLOSEBRACKET",
  Qn: string = "OPENPAREN",
  Zn: string = "CLOSEPAREN",
  er: string = "OPENANGLEBRACKET",
  tr: string = "CLOSEANGLEBRACKET",
  nr: string = "FULLWIDTHLEFTPAREN",
  rr: string = "FULLWIDTHRIGHTPAREN",
  sr: string = "LEFTCORNERBRACKET",
  ir: string = "RIGHTCORNERBRACKET",
  or: string = "LEFTWHITECORNERBRACKET",
  lr: string = "RIGHTWHITECORNERBRACKET",
  ar: string = "FULLWIDTHLESSTHAN",
  cr: string = "FULLWIDTHGREATERTHAN",
  ur: string = "AMPERSAND",
  dr: string = "APOSTROPHE",
  fr: string = "ASTERISK",
  je: string = "AT",
  hr: string = "BACKSLASH",
  pr: string = "BACKTICK",
  mr: string = "CARET",
  qe: string = "COLON",
  wi: string = "COMMA",
  gr: string = "DOLLAR",
  we: string = "DOT",
  yr: string = "EQUALS",
  Ci: string = "EXCLAMATION",
  pe: string = "HYPHEN",
  rn: string = "PERCENT",
  kr: string = "PIPE",
  br: string = "PLUS",
  xr: string = "POUND",
  sn: string = "QUERY",
  Mi: string = "QUOTE",
  xc: string = "FULLWIDTHMIDDLEDOT",
  Ei: string = "SEMI",
  Ce: string = "SLASH",
  on: string = "TILDE",
  Sr: string = "UNDERSCORE",
  Sc: string = "EMOJI",
  wr: string = "SYM";
var wc: any = ((Object as any).freeze as any)({
  __proto__: null,
  ALPHANUMERICAL: bc,
  AMPERSAND: ur,
  APOSTROPHE: dr,
  ASCIINUMERICAL: kc,
  ASTERISK: fr,
  AT: je,
  BACKSLASH: hr,
  BACKTICK: pr,
  CARET: mr,
  CLOSEANGLEBRACKET: tr,
  CLOSEBRACE: nn,
  CLOSEBRACKET: Xn,
  CLOSEPAREN: Zn,
  COLON: qe,
  COMMA: wi,
  DOLLAR: gr,
  DOT: we,
  EMOJI: Sc,
  EQUALS: yr,
  EXCLAMATION: Ci,
  FULLWIDTHGREATERTHAN: cr,
  FULLWIDTHLEFTPAREN: nr,
  FULLWIDTHLESSTHAN: ar,
  FULLWIDTHMIDDLEDOT: xc,
  FULLWIDTHRIGHTPAREN: rr,
  HYPHEN: pe,
  LEFTCORNERBRACKET: sr,
  LEFTWHITECORNERBRACKET: or,
  LOCALHOST: mn,
  NL: Si,
  NUM: xi,
  OPENANGLEBRACKET: er,
  OPENBRACE: tn,
  OPENBRACKET: Yn,
  OPENPAREN: Qn,
  PERCENT: rn,
  PIPE: kr,
  PLUS: br,
  POUND: xr,
  QUERY: sn,
  QUOTE: Mi,
  RIGHTCORNERBRACKET: ir,
  RIGHTWHITECORNERBRACKET: lr,
  SCHEME: Ln,
  SEMI: Ei,
  SLASH: Ce,
  SLASH_SCHEME: Nt,
  SYM: wr,
  TILDE: on,
  TLD: Fs,
  UNDERSCORE: Sr,
  UTLD: Hs,
  UWORD: $s,
  WORD: De,
  WS: Vs
});
const Ne: any = /[a-z]/,
  Wt: any = new (RegExp as any)("\\p{L}", "u"),
  ls: any = new (RegExp as any)("\\p{Emoji}", "u"),
  Oe: any = /\d/,
  as: any = /\s/,
  Jo: string = "\r",
  cs: any = `
`,
  Lm: string = "\uFE0F",
  zm: string = "\u200D",
  us: string = "\uFFFC";
let An: any = null,
  Nn: any = null;
function Bm(this: any, n: any = []): any {
  const e: any = {};
  (oe as any).groups = e;
  const t: any = new (oe as any)();
  (An as any) == (null as any) && (An = (Go as any)(Nm)), (Nn as any) == (null as any) && (Nn = (Go as any)(Om)), (x as any)(t, "'", dr), (x as any)(t, "{", tn), (x as any)(t, "}", nn), (x as any)(t, "[", Yn), (x as any)(t, "]", Xn), (x as any)(t, "(", Qn), (x as any)(t, ")", Zn), (x as any)(t, "<", er), (x as any)(t, ">", tr), (x as any)(t, "\uFF08", nr), (x as any)(t, "\uFF09", rr), (x as any)(t, "\u300C", sr), (x as any)(t, "\u300D", ir), (x as any)(t, "\u300E", or), (x as any)(t, "\u300F", lr), (x as any)(t, "\uFF1C", ar), (x as any)(t, "\uFF1E", cr), (x as any)(t, "&", ur), (x as any)(t, "*", fr), (x as any)(t, "@", je), (x as any)(t, "`", pr), (x as any)(t, "^", mr), (x as any)(t, ":", qe), (x as any)(t, ",", wi), (x as any)(t, "$", gr), (x as any)(t, ".", we), (x as any)(t, "=", yr), (x as any)(t, "!", Ci), (x as any)(t, "-", pe), (x as any)(t, "%", rn), (x as any)(t, "|", kr), (x as any)(t, "+", br), (x as any)(t, "#", xr), (x as any)(t, "?", sn), (x as any)(t, '"', Mi), (x as any)(t, "/", Ce), (x as any)(t, ";", Ei), (x as any)(t, "~", on), (x as any)(t, "_", Sr), (x as any)(t, "\\", hr), (x as any)(t, "\u30FB", xc);
  const r: any = (F as any)(t, Oe, xi, {
    [Ps]: !0
  });
  (F as any)(r, Oe, r);
  const s: any = (F as any)(r, Ne, kc, {
      [en]: !0
    }),
    i: any = (F as any)(r, Wt, bc, {
      [Gt]: !0
    }),
    o: any = (F as any)(t, Ne, De, {
      [Ls]: !0
    });
  (F as any)(o, Oe, s), (F as any)(o, Ne, o), (F as any)(s, Oe, s), (F as any)(s, Ne, s);
  const l: any = (F as any)(t, Wt, $s, {
    [zs]: !0
  });
  (F as any)(l, Ne), (F as any)(l, Oe, i), (F as any)(l, Wt, l), (F as any)(i, Oe, i), (F as any)(i, Ne), (F as any)(i, Wt, i);
  const a: any = (x as any)(t, cs, Si, {
      [is]: !0
    }),
    c: any = (x as any)(t, Jo, Vs, {
      [is]: !0
    }),
    u: any = (F as any)(t, as, Vs, {
      [is]: !0
    });
  (x as any)(t, us, u), (x as any)(c, cs, a), (x as any)(c, us, u), (F as any)(c, as, u), (x as any)(u, Jo), (x as any)(u, cs), (F as any)(u, as, u), (x as any)(u, us, u);
  const d: any = (F as any)(t, ls, Sc, {
    [yc]: !0
  });
  (x as any)(d, "#"), (F as any)(d, ls, d), (x as any)(d, Lm, d);
  const f: any = (x as any)(d, zm);
  (x as any)(f, "#"), (F as any)(f, ls, d);
  const h: any = [[Ne, o], [Oe, s]],
    p: any = [[Ne, null], [Wt, l], [Oe, i]];
  for (let m: any = 0; (m as any) < ((An as any).length as any); m++) (Fe as any)(t, (An as any)[m], Fs, De, h);
  for (let m: any = 0; (m as any) < ((Nn as any).length as any); m++) (Fe as any)(t, (Nn as any)[m], Hs, $s, p);
  (lt as any)(Fs, {
    tld: !0,
    ascii: !0
  }, e), (lt as any)(Hs, {
    utld: !0,
    alpha: !0
  }, e), (Fe as any)(t, "file", Ln, De, h), (Fe as any)(t, "mailto", Ln, De, h), (Fe as any)(t, "http", Nt, De, h), (Fe as any)(t, "https", Nt, De, h), (Fe as any)(t, "ftp", Nt, De, h), (Fe as any)(t, "ftps", Nt, De, h), (lt as any)(Ln, {
    scheme: !0,
    ascii: !0
  }, e), (lt as any)(Nt, {
    slashscheme: !0,
    ascii: !0
  }, e), n = ((n as any).sort as any)((m: any, g: any): any => ((m as any)[0] as any) > ((g as any)[0] as any) ? 1 : -1);
  for (let m: any = 0; (m as any) < ((n as any).length as any); m++) {
    const g: any = ((n as any)[m] as any)[0],
      b: any = ((n as any)[m] as any)[1] ? {
        [Dm]: !0
      } : {
        [Im]: !0
      };
    (((g as any).indexOf as any)("-") as any) >= (0 as any) ? (b as any)[Bs] = !0 : ((Ne as any).test as any)(g) ? ((Oe as any).test as any)(g) ? (b as any)[en] = !0 : (b as any)[Ls] = !0 : (b as any)[Ps] = !0, (Uo as any)(t, g, g, b);
  }
  return (Uo as any)(t, "localhost", mn, {
    ascii: !0
  }), (t as any).jd = new (oe as any)(wr), {
    start: t,
    tokens: ((Object as any).assign as any)({
      groups: e
    }, wc)
  };
}
function Cc(this: any, n: any, e: any): any {
  const t: any = ($m as any)(((e as any).replace as any)(/[A-Z]/g, (l: any): any => ((l as any).toLowerCase as any)())),
    r: any = (t as any).length,
    s: any = [];
  let i: any = 0,
    o: any = 0;
  for (; (o as any) < (r as any);) {
    let l: any = n,
      a: any = null,
      c: any = 0,
      u: any = null,
      d: any = -1,
      f: any = -1;
    for (; (o as any) < (r as any) && (a = ((l as any).go as any)((t as any)[o]));) l = a, ((l as any).accepts as any)() ? (d = 0, f = 0, u = l) : (d as any) >= (0 as any) && (d += ((t as any)[o] as any).length, f++), c += ((t as any)[o] as any).length, i += ((t as any)[o] as any).length, o++;
    i -= d, o -= f, c -= d, ((s as any).push as any)({
      t: (u as any).t,
      v: ((e as any).slice as any)((i as any) - (c as any), i),
      s: (i as any) - (c as any),
      e: i
    });
  }
  return s;
}
function $m(this: any, n: any): any {
  const e: any = [],
    t: any = (n as any).length;
  let r: any = 0;
  for (; (r as any) < (t as any);) {
    let s: any = ((n as any).charCodeAt as any)(r),
      i: any,
      o: any = (s as any) < (55296 as any) || (s as any) > (56319 as any) || ((r as any) + (1 as any) as any) === (t as any) || ((i = ((n as any).charCodeAt as any)((r as any) + (1 as any))) as any) < (56320 as any) || (i as any) > (57343 as any) ? (n as any)[r] : ((n as any).slice as any)(r, (r as any) + (2 as any));
    ((e as any).push as any)(o), r += (o as any).length;
  }
  return e;
}
function Fe(this: any, n: any, e: any, t: any, r: any, s: any): any {
  let i: any;
  const o: any = (e as any).length;
  for (let l: any = 0; (l as any) < ((o as any) - (1 as any) as any); l++) {
    const a: any = (e as any)[l];
    ((n as any).j as any)[a] ? i = ((n as any).j as any)[a] : (i = new (oe as any)(r), (i as any).jr = ((s as any).slice as any)(), ((n as any).j as any)[a] = i), n = i;
  }
  return i = new (oe as any)(t), (i as any).jr = ((s as any).slice as any)(), ((n as any).j as any)[(e as any)[(o as any) - (1 as any)]] = i, i;
}
function Go(this: any, n: any): any {
  const e: any = [],
    t: any = [];
  let r: any = 0,
    s: string = "0123456789";
  for (; (r as any) < ((n as any).length as any);) {
    let i: any = 0;
    for (; (((s as any).indexOf as any)((n as any)[(r as any) + (i as any)]) as any) >= (0 as any);) i++;
    if ((i as any) > (0 as any)) {
      ((e as any).push as any)(((t as any).join as any)(""));
      for (let o: any = (parseInt as any)(((n as any).substring as any)(r, (r as any) + (i as any)), 10); (o as any) > (0 as any); o--) ((t as any).pop as any)();
      r += i;
    } else ((t as any).push as any)((n as any)[r]), r++;
  }
  return e;
}
const gn: any = {
  defaultProtocol: "http",
  events: null,
  format: Yo,
  formatHref: Yo,
  nl2br: !1,
  tagName: "a",
  target: null,
  rel: null,
  validate: !0,
  truncate: (1 as any) / (0 as any),
  className: null,
  attributes: null,
  ignoreTags: [],
  render: null
};
function vi(this: any, n: any, e: any = null): any {
  let t: any = ((Object as any).assign as any)({}, gn);
  n && (t = ((Object as any).assign as any)(t, n instanceof vi ? (n as any).o : n));
  const r: any = (t as any).ignoreTags,
    s: any = [];
  for (let i: any = 0; (i as any) < ((r as any).length as any); i++) ((s as any).push as any)((((r as any)[i] as any).toUpperCase as any)());
  (this as any).o = t, e && ((this as any).defaultRender = e), (this as any).ignoreTags = s;
}
(vi as any).prototype = {
  o: gn,
  ignoreTags: [],
  defaultRender(n: any): any {
    return n;
  },
  check(n: any): any {
    return ((this as any).get as any)("validate", ((n as any).toString as any)(), n);
  },
  get(n: any, e: any, t: any): any {
    const r: any = (e as any) != (null as any);
    let s: any = ((this as any).o as any)[n];
    return s && ((typeof s as any) == ("object" as any) ? (s = (t as any).t in s ? (s as any)[(t as any).t] : (gn as any)[n], (typeof s as any) == ("function" as any) && r && (s = (s as any)(e, t))) : (typeof s as any) == ("function" as any) && r && (s = (s as any)(e, (t as any).t, t)), s);
  },
  getObj(n: any, e: any, t: any): any {
    let r: any = ((this as any).o as any)[n];
    return (typeof r as any) == ("function" as any) && (e as any) != (null as any) && (r = (r as any)(e, (t as any).t, t)), r;
  },
  render(n: any): any {
    const e: any = ((n as any).render as any)(this);
    return ((((this as any).get as any)("render", null, n) || (this as any).defaultRender) as any)(e, (n as any).t, n);
  }
};
function Yo(this: any, n: any): any {
  return n;
}
function Mc(this: any, n: any, e: any): any {
  (this as any).t = "token", (this as any).v = n, (this as any).tk = e;
}
(Mc as any).prototype = {
  isLink: !1,
  toString(): any {
    return (this as any).v;
  },
  toHref(n: any): any {
    return ((this as any).toString as any)();
  },
  toFormattedString(n: any): any {
    const e: any = ((this as any).toString as any)(),
      t: any = ((n as any).get as any)("truncate", e, this),
      r: any = ((n as any).get as any)("format", e, this);
    return t && ((r as any).length as any) > (t as any) ? (((r as any).substring as any)(0, t) as any) + ("\u2026" as any) : r;
  },
  toFormattedHref(n: any): any {
    return ((n as any).get as any)("formatHref", ((this as any).toHref as any)(((n as any).get as any)("defaultProtocol")), this);
  },
  startIndex(): any {
    return (((this as any).tk as any)[0] as any).s;
  },
  endIndex(): any {
    return (((this as any).tk as any)[(((this as any).tk as any).length as any) - (1 as any)] as any).e;
  },
  toObject(n: any = (gn as any).defaultProtocol): any {
    return {
      type: (this as any).t,
      value: ((this as any).toString as any)(),
      isLink: (this as any).isLink,
      href: ((this as any).toHref as any)(n),
      start: ((this as any).startIndex as any)(),
      end: ((this as any).endIndex as any)()
    };
  },
  toFormattedObject(n: any): any {
    return {
      type: (this as any).t,
      value: ((this as any).toFormattedString as any)(n),
      isLink: (this as any).isLink,
      href: ((this as any).toFormattedHref as any)(n),
      start: ((this as any).startIndex as any)(),
      end: ((this as any).endIndex as any)()
    };
  },
  validate(n: any): any {
    return ((n as any).get as any)("validate", ((this as any).toString as any)(), this);
  },
  render(n: any): any {
    const e: any = this,
      t: any = ((this as any).toHref as any)(((n as any).get as any)("defaultProtocol")),
      r: any = ((n as any).get as any)("formatHref", t, this),
      s: any = ((n as any).get as any)("tagName", t, e),
      i: any = ((this as any).toFormattedString as any)(n),
      o: any = {},
      l: any = ((n as any).get as any)("className", t, e),
      a: any = ((n as any).get as any)("target", t, e),
      c: any = ((n as any).get as any)("rel", t, e),
      u: any = ((n as any).getObj as any)("attributes", t, e),
      d: any = ((n as any).getObj as any)("events", t, e);
    return (o as any).href = r, l && ((o as any).class = l), a && ((o as any).target = a), c && ((o as any).rel = c), u && ((Object as any).assign as any)(o, u), {
      tagName: s,
      attributes: o,
      content: i,
      eventListeners: d
    };
  }
};
function Hr(this: any, n: any, e: any): any {
  class t extends (Mc as any) {
    declare t: any;
    [key: string]: any;
    constructor(s: any, i: any) {
      super(s, i), (this as any).t = n;
    }
  }
  for (const r in e) ((t as any).prototype as any)[r] = (e as any)[r];
  return (t as any).t = n, t;
}
const Xo: any = (Hr as any)("email", {
    isLink: !0,
    toHref(): any {
      return ("mailto:" as any) + (((this as any).toString as any)() as any);
    }
  }),
  Qo: any = (Hr as any)("text"),
  Fm: any = (Hr as any)("nl"),
  On: any = (Hr as any)("url", {
    isLink: !0,
    toHref(n: any = (gn as any).defaultProtocol): any {
      return ((this as any).hasProtocol as any)() ? (this as any).v : `${n}://${(this as any).v}`;
    },
    hasProtocol(): any {
      const n: any = (this as any).tk;
      return ((n as any).length as any) >= (2 as any) && (((n as any)[0] as any).t as any) !== (mn as any) && (((n as any)[1] as any).t as any) === (qe as any);
    }
  }),
  he: any = (n: any): any => new (oe as any)(n);
function Hm(this: any, {
  groups: n
}: any): any {
  const e: any = (((n as any).domain as any).concat as any)([ur, fr, je, hr, pr, mr, gr, yr, pe, xi, rn, kr, br, xr, Ce, wr, on, Sr]),
    t: any = [dr, qe, wi, we, Ci, rn, sn, Mi, Ei, er, tr, tn, nn, Xn, Yn, Qn, Zn, nr, rr, sr, ir, or, lr, ar, cr],
    r: any = [ur, dr, fr, hr, pr, mr, gr, yr, pe, tn, nn, rn, kr, br, xr, sn, Ce, wr, on, Sr],
    s: any = (he as any)(),
    i: any = (x as any)(s, on);
  (D as any)(i, r, i), (D as any)(i, (n as any).domain, i);
  const o: any = (he as any)(),
    l: any = (he as any)(),
    a: any = (he as any)();
  (D as any)(s, (n as any).domain, o), (D as any)(s, (n as any).scheme, l), (D as any)(s, (n as any).slashscheme, a), (D as any)(o, r, i), (D as any)(o, (n as any).domain, o);
  const c: any = (x as any)(o, je);
  (x as any)(i, je, c), (x as any)(l, je, c), (x as any)(a, je, c);
  const u: any = (x as any)(i, we);
  (D as any)(u, r, i), (D as any)(u, (n as any).domain, i);
  const d: any = (he as any)();
  (D as any)(c, (n as any).domain, d), (D as any)(d, (n as any).domain, d);
  const f: any = (x as any)(d, we);
  (D as any)(f, (n as any).domain, d);
  const h: any = (he as any)(Xo);
  (D as any)(f, (n as any).tld, h), (D as any)(f, (n as any).utld, h), (x as any)(c, mn, h);
  const p: any = (x as any)(d, pe);
  (x as any)(p, pe, p), (D as any)(p, (n as any).domain, d), (D as any)(h, (n as any).domain, d), (x as any)(h, we, f), (x as any)(h, pe, p);
  const m: any = (x as any)(h, qe);
  (D as any)(m, (n as any).numeric, Xo);
  const g: any = (x as any)(o, pe),
    y: any = (x as any)(o, we);
  (x as any)(g, pe, g), (D as any)(g, (n as any).domain, o), (D as any)(y, r, i), (D as any)(y, (n as any).domain, o);
  const b: any = (he as any)(On);
  (D as any)(y, (n as any).tld, b), (D as any)(y, (n as any).utld, b), (D as any)(b, (n as any).domain, o), (D as any)(b, r, i), (x as any)(b, we, y), (x as any)(b, pe, g), (x as any)(b, je, c);
  const C: any = (x as any)(b, qe),
    M: any = (he as any)(On);
  (D as any)(C, (n as any).numeric, M);
  const S: any = (he as any)(On),
    A: any = (he as any)();
  (D as any)(S, e, S), (D as any)(S, t, A), (D as any)(A, e, S), (D as any)(A, t, A), (x as any)(b, Ce, S), (x as any)(M, Ce, S);
  const E: any = (x as any)(l, qe),
    I: any = (x as any)(a, qe),
    R: any = (x as any)(I, Ce),
    ae: any = (x as any)(R, Ce);
  (D as any)(l, (n as any).domain, o), (x as any)(l, we, y), (x as any)(l, pe, g), (D as any)(a, (n as any).domain, o), (x as any)(a, we, y), (x as any)(a, pe, g), (D as any)(E, (n as any).domain, S), (x as any)(E, Ce, S), (x as any)(E, sn, S), (D as any)(ae, (n as any).domain, S), (D as any)(ae, e, S), (x as any)(ae, Ce, S);
  const St: any = [[tn, nn], [Yn, Xn], [Qn, Zn], [er, tr], [nr, rr], [sr, ir], [or, lr], [ar, cr]];
  for (let $e: any = 0; ($e as any) < ((St as any).length as any); $e++) {
    const [wt, fe]: any = (St as any)[$e],
      ie: any = (x as any)(S, wt);
    (x as any)(A, wt, ie), (x as any)(ie, fe, S);
    const Ct: any = (he as any)(On);
    (D as any)(ie, e, Ct);
    const Vt: any = (he as any)();
    (D as any)(ie, t), (D as any)(Ct, e, Ct), (D as any)(Ct, t, Vt), (D as any)(Vt, e, Ct), (D as any)(Vt, t, Vt), (x as any)(Ct, fe, S), (x as any)(Vt, fe, S);
  }
  return (x as any)(s, mn, b), (x as any)(s, Si, Fm), {
    start: s,
    tokens: wc
  };
}
function Vm(this: any, n: any, e: any, t: any): any {
  let r: any = (t as any).length,
    s: any = 0,
    i: any = [],
    o: any = [];
  for (; (s as any) < (r as any);) {
    let l: any = n,
      a: any = null,
      c: any = null,
      u: any = 0,
      d: any = null,
      f: any = -1;
    for (; (s as any) < (r as any) && !(a = ((l as any).go as any)(((t as any)[s] as any).t));) ((o as any).push as any)((t as any)[s++]);
    for (; (s as any) < (r as any) && (c = a || ((l as any).go as any)(((t as any)[s] as any).t));) a = null, l = c, ((l as any).accepts as any)() ? (f = 0, d = l) : (f as any) >= (0 as any) && f++, s++, u++;
    if ((f as any) < (0 as any)) s -= u, (s as any) < (r as any) && (((o as any).push as any)((t as any)[s]), s++);else {
      ((o as any).length as any) > (0 as any) && (((i as any).push as any)((ds as any)(Qo, e, o)), o = []), s -= f, u -= f;
      const h: any = (d as any).t,
        p: any = ((t as any).slice as any)((s as any) - (u as any), s);
      ((i as any).push as any)((ds as any)(h, e, p));
    }
  }
  return ((o as any).length as any) > (0 as any) && ((i as any).push as any)((ds as any)(Qo, e, o)), i;
}
function ds(this: any, n: any, e: any, t: any): any {
  const r: any = ((t as any)[0] as any).s,
    s: any = ((t as any)[((t as any).length as any) - (1 as any)] as any).e,
    i: any = ((e as any).slice as any)(r, s);
  return new (n as any)(i, t);
}
const jm: any = (typeof console as any) < ("u" as any) && console && (console as any).warn || ((): any => {}),
  _m: string = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.",
  z: any = {
    scanner: null,
    parser: null,
    tokenQueue: [],
    pluginQueue: [],
    customSchemes: [],
    initialized: !1
  };
function Wm(this: any): any {
  return (oe as any).groups = {}, (z as any).scanner = null, (z as any).parser = null, (z as any).tokenQueue = [], (z as any).pluginQueue = [], (z as any).customSchemes = [], (z as any).initialized = !1, z;
}
function Zo(this: any, n: any, e: any = !1): any {
  if ((z as any).initialized && (jm as any)(`linkifyjs: already initialized - will not register custom scheme "${n}" ${_m}`), !((/^[0-9a-z]+(-[0-9a-z]+)*$/ as any).test as any)(n)) throw new (Error as any)(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
  (((z as any).customSchemes as any).push as any)([n, e]);
}
function qm(this: any): any {
  (z as any).scanner = (Bm as any)((z as any).customSchemes);
  for (let n: any = 0; (n as any) < (((z as any).tokenQueue as any).length as any); n++) ((((z as any).tokenQueue as any)[n] as any)[1] as any)({
    scanner: (z as any).scanner
  });
  (z as any).parser = (Hm as any)(((z as any).scanner as any).tokens);
  for (let n: any = 0; (n as any) < (((z as any).pluginQueue as any).length as any); n++) ((((z as any).pluginQueue as any)[n] as any)[1] as any)({
    scanner: (z as any).scanner,
    parser: (z as any).parser
  });
  return (z as any).initialized = !0, z;
}
function Ti(this: any, n: any): any {
  return (z as any).initialized || (qm as any)(), (Vm as any)(((z as any).parser as any).start, n, (Cc as any)(((z as any).scanner as any).start, n));
}
(Ti as any).scan = Cc;
function Ec(this: any, n: any, e: any = null, t: any = null): any {
  if (e && (typeof e as any) == ("object" as any)) {
    if (t) throw (Error as any)(`linkifyjs: Invalid link type ${e}; must be a string`);
    t = e, e = null;
  }
  const r: any = new (vi as any)(t),
    s: any = (Ti as any)(n),
    i: any = [];
  for (let o: any = 0; (o as any) < ((s as any).length as any); o++) {
    const l: any = (s as any)[o];
    (l as any).isLink && (!e || ((l as any).t as any) === (e as any)) && ((r as any).check as any)(l) && ((i as any).push as any)(((l as any).toFormattedObject as any)(r));
  }
  return i;
}
var Ai: string = "[\0-  \u1680\u180E\u2000-\u2029\u205F\u3000]",
  Km: any = new (RegExp as any)(Ai),
  Um: any = new (RegExp as any)(`${Ai}$`),
  Jm: any = new (RegExp as any)(Ai, "g");
function Gm(this: any, n: any): any {
  return ((n as any).length as any) === (1 as any) ? ((n as any)[0] as any).isLink : ((n as any).length as any) === (3 as any) && ((n as any)[1] as any).isLink ? ((["()", "[]"] as any).includes as any)((((n as any)[0] as any).value as any) + (((n as any)[2] as any).value as any)) : !1;
}
function Ym(this: any, n: any): any {
  return new ($ as any)({
    key: new (q as any)("autolink"),
    appendTransaction: (e: any, t: any, r: any): any => {
      const s: any = ((e as any).some as any)((c: any): any => (c as any).docChanged) && !(((t as any).doc as any).eq as any)((r as any).doc),
        i: any = ((e as any).some as any)((c: any): any => ((c as any).getMeta as any)("preventAutolink"));
      if (!s || i) return;
      const {
          tr: o
        }: any = r,
        l: any = (Wa as any)((t as any).doc, [...e]);
      if ((((Xa as any)(l) as any).forEach as any)(({
        newRange: c
      }: any): any => {
        const u: any = (Hh as any)((r as any).doc, c, (h: any): any => (h as any).isTextblock);
        let d: any, f: any;
        if (((u as any).length as any) > (1 as any)) d = (u as any)[0], f = (((r as any).doc as any).textBetween as any)((d as any).pos, ((d as any).pos as any) + (((d as any).node as any).nodeSize as any), void 0, " ");else if ((u as any).length) {
          const h: any = (((r as any).doc as any).textBetween as any)((c as any).from, (c as any).to, " ", " ");
          if (!((Um as any).test as any)(h)) return;
          d = (u as any)[0], f = (((r as any).doc as any).textBetween as any)((d as any).pos, (c as any).to, void 0, " ");
        }
        if (d && f) {
          const h: any = ((((f as any).split as any)(Km) as any).filter as any)(Boolean);
          if (((h as any).length as any) <= (0 as any)) return !1;
          const p: any = (h as any)[((h as any).length as any) - (1 as any)],
            m: any = ((d as any).pos as any) + (((f as any).lastIndexOf as any)(p) as any);
          if (!p) return !1;
          const g: any = (((Ti as any)(p) as any).map as any)((y: any): any => ((y as any).toObject as any)((n as any).defaultProtocol));
          if (!(Gm as any)(g)) return !1;
          ((((((((((((g as any).filter as any)((y: any): any => (y as any).isLink) as any).map as any)((y: any): any => ({
            ...y,
            from: ((m as any) + ((y as any).start as any) as any) + (1 as any),
            to: ((m as any) + ((y as any).end as any) as any) + (1 as any)
          })) as any).filter as any)((y: any): any => (((r as any).schema as any).marks as any).code ? !(((r as any).doc as any).rangeHasMark as any)((y as any).from, (y as any).to, (((r as any).schema as any).marks as any).code) : !0) as any).filter as any)((y: any): any => ((n as any).validate as any)((y as any).value)) as any).filter as any)((y: any): any => ((n as any).shouldAutoLink as any)((y as any).value)) as any).forEach as any)((y: any): any => {
            (((mi as any)((y as any).from, (y as any).to, (r as any).doc) as any).some as any)((b: any): any => (((b as any).mark as any).type as any) === ((n as any).type as any)) || ((o as any).addMark as any)((y as any).from, (y as any).to, (((n as any).type as any).create as any)({
              href: (y as any).href
            }));
          });
        }
      }), !!((o as any).steps as any).length) return o;
    }
  });
}
function Xm(this: any, n: any): any {
  return new ($ as any)({
    key: new (q as any)("handleClickLink"),
    props: {
      handleClick: (e: any, t: any, r: any): any => {
        var s: any, i: any;
        if (((r as any).button as any) !== (0 as any) || !(e as any).editable) return !1;
        let o: any = !1;
        if ((n as any).enableClickSelection && (o = ((((n as any).editor as any).commands as any).extendMarkRange as any)(((n as any).type as any).name)), (n as any).openOnClick) {
          let l: any = null;
          if ((r as any).target instanceof HTMLAnchorElement) l = (r as any).target;else {
            let d: any = (r as any).target;
            const f: any = [];
            for (; ((d as any).nodeName as any) !== ("DIV" as any);) ((f as any).push as any)(d), d = (d as any).parentNode;
            l = ((f as any).find as any)((h: any): any => ((h as any).nodeName as any) === ("A" as any));
          }
          if (!l) return o;
          const a: any = (Ya as any)((e as any).state, ((n as any).type as any).name),
            c: any = ((s = l?.href) as any) != (null as any) ? s : (a as any).href,
            u: any = ((i = l?.target) as any) != (null as any) ? i : (a as any).target;
          l && c && (((window as any).open as any)(c, u), o = !0);
        }
        return o;
      }
    }
  });
}
function Qm(this: any, n: any): any {
  return new ($ as any)({
    key: new (q as any)("handlePasteLink"),
    props: {
      handlePaste: (e: any, t: any, r: any): any => {
        const {
            shouldAutoLink: s
          }: any = n,
          {
            state: i
          }: any = e,
          {
            selection: o
          }: any = i,
          {
            empty: l
          }: any = o;
        if (l) return !1;
        let a: any = "";
        (((r as any).content as any).forEach as any)((u: any): any => {
          a += (u as any).textContent;
        });
        const c: any = (((Ec as any)(a, {
          defaultProtocol: (n as any).defaultProtocol
        }) as any).find as any)((u: any): any => (u as any).isLink && ((u as any).value as any) === (a as any));
        return !a || !c || (s as any) !== (void 0 as any) && !(s as any)((c as any).href) ? !1 : ((((n as any).editor as any).commands as any).setMark as any)((n as any).type, {
          href: (c as any).href
        });
      }
    }
  });
}
function rt(this: any, n: any, e: any): any {
  const t: any = ["http", "https", "ftp", "ftps", "mailto", "tel", "callto", "sms", "cid", "xmpp"];
  return e && ((e as any).forEach as any)((r: any): any => {
    const s: any = (typeof r as any) == ("string" as any) ? r : (r as any).scheme;
    s && ((t as any).push as any)(s);
  }), !n || ((((n as any).replace as any)(Jm, "") as any).match as any)(new (RegExp as any)(`^(?:(?:${((t as any).join as any)("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`, "i"));
}
var vc: any = ((bt as any).create as any)({
    name: "link",
    priority: 1e3,
    keepOnSplit: !1,
    exitable: !0,
    onCreate(): any {
      ((this as any).options as any).validate && !((this as any).options as any).shouldAutoLink && (((this as any).options as any).shouldAutoLink = ((this as any).options as any).validate, ((console as any).warn as any)("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), ((((this as any).options as any).protocols as any).forEach as any)((n: any): any => {
        if ((typeof n as any) == ("string" as any)) {
          (Zo as any)(n);
          return;
        }
        (Zo as any)((n as any).scheme, (n as any).optionalSlashes);
      });
    },
    onDestroy(): any {
      (Wm as any)();
    },
    inclusive(): any {
      return ((this as any).options as any).autolink;
    },
    addOptions(): any {
      return {
        openOnClick: !0,
        enableClickSelection: !1,
        linkOnPaste: !0,
        autolink: !0,
        protocols: [],
        defaultProtocol: "http",
        HTMLAttributes: {
          target: "_blank",
          rel: "noopener noreferrer nofollow",
          class: null
        },
        isAllowedUri: (n: any, e: any): any => !!(rt as any)(n, (e as any).protocols),
        validate: (n: any): any => !!n,
        shouldAutoLink: (n: any): any => !!n
      };
    },
    addAttributes(): any {
      return {
        href: {
          default: null,
          parseHTML(n: any): any {
            return ((n as any).getAttribute as any)("href");
          }
        },
        target: {
          default: (((this as any).options as any).HTMLAttributes as any).target
        },
        rel: {
          default: (((this as any).options as any).HTMLAttributes as any).rel
        },
        class: {
          default: (((this as any).options as any).HTMLAttributes as any).class
        }
      };
    },
    parseHTML(): any {
      return [{
        tag: "a[href]",
        getAttrs: (n: any): any => {
          const e: any = ((n as any).getAttribute as any)("href");
          return !e || !(((this as any).options as any).isAllowedUri as any)(e, {
            defaultValidate: (t: any): any => !!(rt as any)(t, ((this as any).options as any).protocols),
            protocols: ((this as any).options as any).protocols,
            defaultProtocol: ((this as any).options as any).defaultProtocol
          }) ? !1 : null;
        }
      }];
    },
    renderHTML({
      HTMLAttributes: n
    }: any): any {
      return (((this as any).options as any).isAllowedUri as any)((n as any).href, {
        defaultValidate: (e: any): any => !!(rt as any)(e, ((this as any).options as any).protocols),
        protocols: ((this as any).options as any).protocols,
        defaultProtocol: ((this as any).options as any).defaultProtocol
      }) ? ["a", (W as any)(((this as any).options as any).HTMLAttributes, n), 0] : ["a", (W as any)(((this as any).options as any).HTMLAttributes, {
        ...n,
        href: ""
      }), 0];
    },
    markdownTokenName: "link",
    parseMarkdown: (n: any, e: any): any => ((e as any).applyMark as any)("link", ((e as any).parseInline as any)((n as any).tokens || []), {
      href: (n as any).href,
      title: (n as any).title || null
    }),
    renderMarkdown: (n: any, e: any): any => {
      var t: any;
      const r: any = (((t = (n as any).attrs) as any) == (null as any) ? void 0 : (t as any).href) || "";
      return `[${((e as any).renderChildren as any)(n)}](${r})`;
    },
    addCommands(): any {
      return {
        setLink: (n: any): any => ({
          chain: e
        }: any): any => {
          const {
            href: t
          }: any = n;
          return (((this as any).options as any).isAllowedUri as any)(t, {
            defaultValidate: (r: any): any => !!(rt as any)(r, ((this as any).options as any).protocols),
            protocols: ((this as any).options as any).protocols,
            defaultProtocol: ((this as any).options as any).defaultProtocol
          }) ? (((((((e as any)() as any).setMark as any)((this as any).name, n) as any).setMeta as any)("preventAutolink", !0) as any).run as any)() : !1;
        },
        toggleLink: (n: any): any => ({
          chain: e
        }: any): any => {
          const {
            href: t
          }: any = n || {};
          return t && !(((this as any).options as any).isAllowedUri as any)(t, {
            defaultValidate: (r: any): any => !!(rt as any)(r, ((this as any).options as any).protocols),
            protocols: ((this as any).options as any).protocols,
            defaultProtocol: ((this as any).options as any).defaultProtocol
          }) ? !1 : (((((((e as any)() as any).toggleMark as any)((this as any).name, n, {
            extendEmptyMarkRange: !0
          }) as any).setMeta as any)("preventAutolink", !0) as any).run as any)();
        },
        unsetLink: (): any => ({
          chain: n
        }: any): any => (((((((n as any)() as any).unsetMark as any)((this as any).name, {
          extendEmptyMarkRange: !0
        }) as any).setMeta as any)("preventAutolink", !0) as any).run as any)()
      };
    },
    addPasteRules(): any {
      return [(yt as any)({
        find: (n: any): any => {
          const e: any = [];
          if (n) {
            const {
                protocols: t,
                defaultProtocol: r
              }: any = (this as any).options,
              s: any = (((Ec as any)(n) as any).filter as any)((i: any): any => (i as any).isLink && (((this as any).options as any).isAllowedUri as any)((i as any).value, {
                defaultValidate: (o: any): any => !!(rt as any)(o, t),
                protocols: t,
                defaultProtocol: r
              }));
            (s as any).length && ((s as any).forEach as any)((i: any): any => {
              (((this as any).options as any).shouldAutoLink as any)((i as any).value) && ((e as any).push as any)({
                text: (i as any).value,
                data: {
                  href: (i as any).href
                },
                index: (i as any).start
              });
            });
          }
          return e;
        },
        type: (this as any).type,
        getAttributes: (n: any): any => {
          var e: any;
          return {
            href: ((e = (n as any).data) as any) == (null as any) ? void 0 : (e as any).href
          };
        }
      })];
    },
    addProseMirrorPlugins(): any {
      const n: any = [],
        {
          protocols: e,
          defaultProtocol: t
        }: any = (this as any).options;
      return ((this as any).options as any).autolink && ((n as any).push as any)((Ym as any)({
        type: (this as any).type,
        defaultProtocol: ((this as any).options as any).defaultProtocol,
        validate: (r: any): any => (((this as any).options as any).isAllowedUri as any)(r, {
          defaultValidate: (s: any): any => !!(rt as any)(s, e),
          protocols: e,
          defaultProtocol: t
        }),
        shouldAutoLink: ((this as any).options as any).shouldAutoLink
      })), ((n as any).push as any)((Xm as any)({
        type: (this as any).type,
        editor: (this as any).editor,
        openOnClick: (((this as any).options as any).openOnClick as any) === ("whenNotEditable" as any) ? !0 : ((this as any).options as any).openOnClick,
        enableClickSelection: ((this as any).options as any).enableClickSelection
      })), ((this as any).options as any).linkOnPaste && ((n as any).push as any)((Qm as any)({
        editor: (this as any).editor,
        defaultProtocol: ((this as any).options as any).defaultProtocol,
        type: (this as any).type,
        shouldAutoLink: ((this as any).options as any).shouldAutoLink
      })), n;
    }
  }),
  py: any = vc,
  Zm: any = (Object as any).defineProperty,
  eg: any = (n: any, e: any): any => {
    var t: any;
    for (t in e) (Zm as any)(n, t, {
      get: (e as any)[t],
      enumerable: !0
    });
  },
  tg: string = "listItem",
  el: string = "textStyle",
  tl: any = /^\s*([-+*])\s$/,
  Tc: any = ((de as any).create as any)({
    name: "bulletList",
    addOptions(): any {
      return {
        itemTypeName: "listItem",
        HTMLAttributes: {},
        keepMarks: !1,
        keepAttributes: !1
      };
    },
    group: "block list",
    content(): any {
      return `${((this as any).options as any).itemTypeName}+`;
    },
    parseHTML(): any {
      return [{
        tag: "ul"
      }];
    },
    renderHTML({
      HTMLAttributes: n
    }: any): any {
      return ["ul", (W as any)(((this as any).options as any).HTMLAttributes, n), 0];
    },
    markdownTokenName: "list",
    parseMarkdown: (n: any, e: any): any => ((n as any).type as any) !== ("list" as any) || (n as any).ordered ? [] : {
      type: "bulletList",
      content: (n as any).items ? ((e as any).parseChildren as any)((n as any).items) : []
    },
    renderMarkdown: (n: any, e: any): any => (n as any).content ? ((e as any).renderChildren as any)((n as any).content, `
`) : "",
    markdownOptions: {
      indentsContent: !0
    },
    addCommands(): any {
      return {
        toggleBulletList: (): any => ({
          commands: n,
          chain: e
        }: any): any => ((this as any).options as any).keepAttributes ? (((((((e as any)() as any).toggleList as any)((this as any).name, ((this as any).options as any).itemTypeName, ((this as any).options as any).keepMarks) as any).updateAttributes as any)(tg, (((this as any).editor as any).getAttributes as any)(el)) as any).run as any)() : ((n as any).toggleList as any)((this as any).name, ((this as any).options as any).itemTypeName, ((this as any).options as any).keepMarks)
      };
    },
    addKeyboardShortcuts(): any {
      return {
        "Mod-Shift-8": (): any => ((((this as any).editor as any).commands as any).toggleBulletList as any)()
      };
    },
    addInputRules(): any {
      let n: any = (Ft as any)({
        find: tl,
        type: (this as any).type
      });
      return (((this as any).options as any).keepMarks || ((this as any).options as any).keepAttributes) && (n = (Ft as any)({
        find: tl,
        type: (this as any).type,
        keepMarks: ((this as any).options as any).keepMarks,
        keepAttributes: ((this as any).options as any).keepAttributes,
        getAttributes: (): any => (((this as any).editor as any).getAttributes as any)(el),
        editor: (this as any).editor
      })), [n];
    }
  }),
  Ac: any = ((de as any).create as any)({
    name: "listItem",
    addOptions(): any {
      return {
        HTMLAttributes: {},
        bulletListTypeName: "bulletList",
        orderedListTypeName: "orderedList"
      };
    },
    content: "paragraph block*",
    defining: !0,
    parseHTML(): any {
      return [{
        tag: "li"
      }];
    },
    renderHTML({
      HTMLAttributes: n
    }: any): any {
      return ["li", (W as any)(((this as any).options as any).HTMLAttributes, n), 0];
    },
    markdownTokenName: "list_item",
    parseMarkdown: (n: any, e: any): any => {
      if (((n as any).type as any) !== ("list_item" as any)) return [];
      let t: any = [];
      if ((n as any).tokens && (((n as any).tokens as any).length as any) > (0 as any)) if ((((n as any).tokens as any).some as any)((s: any): any => ((s as any).type as any) === ("paragraph" as any))) t = ((e as any).parseChildren as any)((n as any).tokens);else {
        const s: any = ((n as any).tokens as any)[0];
        if (s && ((s as any).type as any) === ("text" as any) && (s as any).tokens && (((s as any).tokens as any).length as any) > (0 as any)) {
          if (t = [{
            type: "paragraph",
            content: ((e as any).parseInline as any)((s as any).tokens)
          }], (((n as any).tokens as any).length as any) > (1 as any)) {
            const o: any = (((n as any).tokens as any).slice as any)(1),
              l: any = ((e as any).parseChildren as any)(o);
            ((t as any).push as any)(...l);
          }
        } else t = ((e as any).parseChildren as any)((n as any).tokens);
      }
      return ((t as any).length as any) === (0 as any) && (t = [{
        type: "paragraph",
        content: []
      }]), {
        type: "listItem",
        content: t
      };
    },
    renderMarkdown: (n: any, e: any, t: any): any => (bi as any)(n, e, (r: any): any => ((r as any).parentType as any) === ("bulletList" as any) ? "- " : ((r as any).parentType as any) === ("orderedList" as any) ? `${((r as any).index as any) + (1 as any)}. ` : "- ", t),
    addKeyboardShortcuts(): any {
      return {
        Enter: (): any => ((((this as any).editor as any).commands as any).splitListItem as any)((this as any).name),
        Tab: (): any => ((((this as any).editor as any).commands as any).sinkListItem as any)((this as any).name),
        "Shift-Tab": (): any => ((((this as any).editor as any).commands as any).liftListItem as any)((this as any).name)
      };
    }
  }),
  ng: any = {};
(eg as any)(ng, {
  findListItemPos: (): any => xn,
  getNextListDepth: (): any => Ni,
  handleBackspace: (): any => js,
  handleDelete: (): any => _s,
  hasListBefore: (): any => Nc,
  hasListItemAfter: (): any => rg,
  hasListItemBefore: (): any => Oc,
  listItemHasSubList: (): any => Dc,
  nextListIsDeeper: (): any => Ic,
  nextListIsHigher: (): any => Rc
});
var xn: any = (n: any, e: any): any => {
    const {
        $from: t
      }: any = (e as any).selection,
      r: any = (_ as any)(n, (e as any).schema);
    let s: any = null,
      i: any = (t as any).depth,
      o: any = (t as any).pos,
      l: any = null;
    for (; (i as any) > (0 as any) && (l as any) === (null as any);) s = ((t as any).node as any)(i), ((s as any).type as any) === (r as any) ? l = i : (i -= 1, o -= 1);
    return (l as any) === (null as any) ? null : {
      $pos: (((e as any).doc as any).resolve as any)(o),
      depth: l
    };
  },
  Ni: any = (n: any, e: any): any => {
    const t: any = (xn as any)(n, e);
    if (!t) return !1;
    const [, r]: any = (Yh as any)(e, n, (((t as any).$pos as any).pos as any) + (4 as any));
    return r;
  },
  Nc: any = (n: any, e: any, t: any): any => {
    const {
        $anchor: r
      }: any = (n as any).selection,
      s: any = ((Math as any).max as any)(0, ((r as any).pos as any) - (2 as any)),
      i: any = (((((n as any).doc as any).resolve as any)(s) as any).node as any)();
    return !(!i || !((t as any).includes as any)(((i as any).type as any).name));
  },
  Oc: any = (n: any, e: any): any => {
    var t: any;
    const {
        $anchor: r
      }: any = (e as any).selection,
      s: any = (((e as any).doc as any).resolve as any)(((r as any).pos as any) - (2 as any));
    return !((((s as any).index as any)() as any) === (0 as any) || ((((t = (s as any).nodeBefore) as any) == (null as any) ? void 0 : ((t as any).type as any).name) as any) !== (n as any));
  },
  Dc: any = (n: any, e: any, t: any): any => {
    if (!t) return !1;
    const r: any = (_ as any)(n, (e as any).schema);
    let s: any = !1;
    return ((t as any).descendants as any)((i: any): any => {
      ((i as any).type as any) === (r as any) && (s = !0);
    }), s;
  },
  js: any = (n: any, e: any, t: any): any => {
    if ((((n as any).commands as any).undoInputRule as any)()) return !0;
    if (((((n as any).state as any).selection as any).from as any) !== ((((n as any).state as any).selection as any).to as any)) return !1;
    if (!(Ze as any)((n as any).state, e) && (Nc as any)((n as any).state, e, t)) {
      const {
          $anchor: l
        }: any = ((n as any).state as any).selection,
        a: any = ((((n as any).state as any).doc as any).resolve as any)((((l as any).before as any)() as any) - (1 as any)),
        c: any = [];
      ((((a as any).node as any)() as any).descendants as any)((f: any, h: any): any => {
        (((f as any).type as any).name as any) === (e as any) && ((c as any).push as any)({
          node: f,
          pos: h
        });
      });
      const u: any = ((c as any).at as any)(-1);
      if (!u) return !1;
      const d: any = ((((n as any).state as any).doc as any).resolve as any)(((((a as any).start as any)() as any) + ((u as any).pos as any) as any) + (1 as any));
      return ((((((((n as any).chain as any)() as any).cut as any)({
        from: (((l as any).start as any)() as any) - (1 as any),
        to: (((l as any).end as any)() as any) + (1 as any)
      }, ((d as any).end as any)()) as any).joinForward as any)() as any).run as any)();
    }
    if (!(Ze as any)((n as any).state, e) || !(ep as any)((n as any).state)) return !1;
    const r: any = (xn as any)(e, (n as any).state);
    if (!r) return !1;
    const i: any = ((((((n as any).state as any).doc as any).resolve as any)((((r as any).$pos as any).pos as any) - (2 as any)) as any).node as any)((r as any).depth),
      o: any = (Dc as any)(e, (n as any).state, i);
    return (Oc as any)(e, (n as any).state) && !o ? (((n as any).commands as any).joinItemBackward as any)() : ((((((n as any).chain as any)() as any).liftListItem as any)(e) as any).run as any)();
  },
  Ic: any = (n: any, e: any): any => {
    const t: any = (Ni as any)(n, e),
      r: any = (xn as any)(n, e);
    return !r || !t ? !1 : (t as any) > ((r as any).depth as any);
  },
  Rc: any = (n: any, e: any): any => {
    const t: any = (Ni as any)(n, e),
      r: any = (xn as any)(n, e);
    return !r || !t ? !1 : (t as any) < ((r as any).depth as any);
  },
  _s: any = (n: any, e: any): any => {
    if (!(Ze as any)((n as any).state, e) || !(Zh as any)((n as any).state, e)) return !1;
    const {
        selection: t
      }: any = (n as any).state,
      {
        $from: r,
        $to: s
      }: any = t;
    return !(t as any).empty && ((r as any).sameParent as any)(s) ? !1 : (Ic as any)(e, (n as any).state) ? ((((((((((n as any).chain as any)() as any).focus as any)(((((n as any).state as any).selection as any).from as any) + (4 as any)) as any).lift as any)(e) as any).joinBackward as any)() as any).run as any)() : (Rc as any)(e, (n as any).state) ? ((((((((n as any).chain as any)() as any).joinForward as any)() as any).joinBackward as any)() as any).run as any)() : (((n as any).commands as any).joinItemForward as any)();
  },
  rg: any = (n: any, e: any): any => {
    var t: any;
    const {
        $anchor: r
      }: any = (e as any).selection,
      s: any = (((e as any).doc as any).resolve as any)((((r as any).pos as any) - ((r as any).parentOffset as any) as any) - (2 as any));
    return !((((s as any).index as any)() as any) === ((((s as any).parent as any).childCount as any) - (1 as any) as any) || ((((t = (s as any).nodeAfter) as any) == (null as any) ? void 0 : ((t as any).type as any).name) as any) !== (n as any));
  },
  Pc: any = ((V as any).create as any)({
    name: "listKeymap",
    addOptions(): any {
      return {
        listTypes: [{
          itemName: "listItem",
          wrapperNames: ["bulletList", "orderedList"]
        }, {
          itemName: "taskItem",
          wrapperNames: ["taskList"]
        }]
      };
    },
    addKeyboardShortcuts(): any {
      return {
        Delete: ({
          editor: n
        }: any): any => {
          let e: any = !1;
          return ((((this as any).options as any).listTypes as any).forEach as any)(({
            itemName: t
          }: any): any => {
            (((((n as any).state as any).schema as any).nodes as any)[t] as any) !== (void 0 as any) && (_s as any)(n, t) && (e = !0);
          }), e;
        },
        "Mod-Delete": ({
          editor: n
        }: any): any => {
          let e: any = !1;
          return ((((this as any).options as any).listTypes as any).forEach as any)(({
            itemName: t
          }: any): any => {
            (((((n as any).state as any).schema as any).nodes as any)[t] as any) !== (void 0 as any) && (_s as any)(n, t) && (e = !0);
          }), e;
        },
        Backspace: ({
          editor: n
        }: any): any => {
          let e: any = !1;
          return ((((this as any).options as any).listTypes as any).forEach as any)(({
            itemName: t,
            wrapperNames: r
          }: any): any => {
            (((((n as any).state as any).schema as any).nodes as any)[t] as any) !== (void 0 as any) && (js as any)(n, t, r) && (e = !0);
          }), e;
        },
        "Mod-Backspace": ({
          editor: n
        }: any): any => {
          let e: any = !1;
          return ((((this as any).options as any).listTypes as any).forEach as any)(({
            itemName: t,
            wrapperNames: r
          }: any): any => {
            (((((n as any).state as any).schema as any).nodes as any)[t] as any) !== (void 0 as any) && (js as any)(n, t, r) && (e = !0);
          }), e;
        }
      };
    }
  }),
  nl: any = /^(\s*)(\d+)\.\s+(.*)$/,
  sg: any = /^\s/;
function ig(this: any, n: any): any {
  const e: any = [];
  let t: any = 0,
    r: any = 0;
  for (; (t as any) < ((n as any).length as any);) {
    const s: any = (n as any)[t],
      i: any = ((s as any).match as any)(nl);
    if (!i) break;
    const [, o, l, a]: any = i,
      c: any = (o as any).length;
    let u: any = a,
      d: any = (t as any) + (1 as any);
    const f: any = [s];
    for (; (d as any) < ((n as any).length as any);) {
      const h: any = (n as any)[d];
      if (((h as any).match as any)(nl)) break;
      if ((((h as any).trim as any)() as any) === ("" as any)) ((f as any).push as any)(h), u += `
`, d += 1;else if (((h as any).match as any)(sg)) ((f as any).push as any)(h), u += `
${((h as any).slice as any)((c as any) + (2 as any))}`, d += 1;else break;
    }
    ((e as any).push as any)({
      indent: c,
      number: (parseInt as any)(l, 10),
      content: ((u as any).trim as any)(),
      raw: ((f as any).join as any)(`
`)
    }), r = d, t = d;
  }
  return [e, r];
}
function Lc(this: any, n: any, e: any, t: any): any {
  var r: any;
  const s: any = [];
  let i: any = 0;
  for (; (i as any) < ((n as any).length as any);) {
    const o: any = (n as any)[i];
    if (((o as any).indent as any) === (e as any)) {
      const l: any = (((o as any).content as any).split as any)(`
`),
        a: any = (((r = (l as any)[0]) as any) == (null as any) ? void 0 : ((r as any).trim as any)()) || "",
        c: any = [];
      a && ((c as any).push as any)({
        type: "paragraph",
        raw: a,
        tokens: ((t as any).inlineTokens as any)(a)
      });
      const u: any = ((((((l as any).slice as any)(1) as any).join as any)(`
`) as any).trim as any)();
      if (u) {
        const h: any = ((t as any).blockTokens as any)(u);
        ((c as any).push as any)(...h);
      }
      let d: any = (i as any) + (1 as any);
      const f: any = [];
      for (; (d as any) < ((n as any).length as any) && (((n as any)[d] as any).indent as any) > (e as any);) ((f as any).push as any)((n as any)[d]), d += 1;
      if (((f as any).length as any) > (0 as any)) {
        const h: any = ((Math as any).min as any)(...((f as any).map as any)((m: any): any => (m as any).indent)),
          p: any = (Lc as any)(f, h, t);
        ((c as any).push as any)({
          type: "list",
          ordered: !0,
          start: ((f as any)[0] as any).number,
          items: p,
          raw: ((((f as any).map as any)((m: any): any => (m as any).raw) as any).join as any)(`
`)
        });
      }
      ((s as any).push as any)({
        type: "list_item",
        raw: (o as any).raw,
        tokens: c
      }), i = d;
    } else i += 1;
  }
  return s;
}
function og(this: any, n: any, e: any): any {
  return ((n as any).map as any)((t: any): any => {
    if (((t as any).type as any) !== ("list_item" as any)) return (((e as any).parseChildren as any)([t]) as any)[0];
    const r: any = [];
    return (t as any).tokens && (((t as any).tokens as any).length as any) > (0 as any) && (((t as any).tokens as any).forEach as any)((s: any): any => {
      if (((s as any).type as any) === ("paragraph" as any) || ((s as any).type as any) === ("list" as any) || ((s as any).type as any) === ("blockquote" as any) || ((s as any).type as any) === ("code" as any)) ((r as any).push as any)(...((e as any).parseChildren as any)([s]));else if (((s as any).type as any) === ("text" as any) && (s as any).tokens) {
        const i: any = ((e as any).parseChildren as any)([s]);
        ((r as any).push as any)({
          type: "paragraph",
          content: i
        });
      } else {
        const i: any = ((e as any).parseChildren as any)([s]);
        ((i as any).length as any) > (0 as any) && ((r as any).push as any)(...i);
      }
    }), {
      type: "listItem",
      content: r
    };
  });
}
var lg: string = "listItem",
  rl: string = "textStyle",
  sl: any = /^(\d+)\.\s$/,
  zc: any = ((de as any).create as any)({
    name: "orderedList",
    addOptions(): any {
      return {
        itemTypeName: "listItem",
        HTMLAttributes: {},
        keepMarks: !1,
        keepAttributes: !1
      };
    },
    group: "block list",
    content(): any {
      return `${((this as any).options as any).itemTypeName}+`;
    },
    addAttributes(): any {
      return {
        start: {
          default: 1,
          parseHTML: (n: any): any => ((n as any).hasAttribute as any)("start") ? (parseInt as any)(((n as any).getAttribute as any)("start") || "", 10) : 1
        },
        type: {
          default: null,
          parseHTML: (n: any): any => ((n as any).getAttribute as any)("type")
        }
      };
    },
    parseHTML(): any {
      return [{
        tag: "ol"
      }];
    },
    renderHTML({
      HTMLAttributes: n
    }: any): any {
      const {
        start: e,
        ...t
      }: any = n;
      return (e as any) === (1 as any) ? ["ol", (W as any)(((this as any).options as any).HTMLAttributes, t), 0] : ["ol", (W as any)(((this as any).options as any).HTMLAttributes, n), 0];
    },
    markdownTokenName: "list",
    parseMarkdown: (n: any, e: any): any => {
      if (((n as any).type as any) !== ("list" as any) || !(n as any).ordered) return [];
      const t: any = (n as any).start || 1,
        r: any = (n as any).items ? (og as any)((n as any).items, e) : [];
      return (t as any) !== (1 as any) ? {
        type: "orderedList",
        attrs: {
          start: t
        },
        content: r
      } : {
        type: "orderedList",
        content: r
      };
    },
    renderMarkdown: (n: any, e: any): any => (n as any).content ? ((e as any).renderChildren as any)((n as any).content, `
`) : "",
    markdownTokenizer: {
      name: "orderedList",
      level: "block",
      start: (n: any): any => {
        const e: any = ((n as any).match as any)(/^(\s*)(\d+)\.\s+/),
          t: any = e?.index;
        return (t as any) !== (void 0 as any) ? t : -1;
      },
      tokenize: (n: any, e: any, t: any): any => {
        var r: any;
        const s: any = ((n as any).split as any)(`
`),
          [i, o]: any = (ig as any)(s);
        if (((i as any).length as any) === (0 as any)) return;
        const l: any = (Lc as any)(i, 0, t);
        return ((l as any).length as any) === (0 as any) ? void 0 : {
          type: "list",
          ordered: !0,
          start: (((r = (i as any)[0]) as any) == (null as any) ? void 0 : (r as any).number) || 1,
          items: l,
          raw: ((((s as any).slice as any)(0, o) as any).join as any)(`
`)
        };
      }
    },
    markdownOptions: {
      indentsContent: !0
    },
    addCommands(): any {
      return {
        toggleOrderedList: (): any => ({
          commands: n,
          chain: e
        }: any): any => ((this as any).options as any).keepAttributes ? (((((((e as any)() as any).toggleList as any)((this as any).name, ((this as any).options as any).itemTypeName, ((this as any).options as any).keepMarks) as any).updateAttributes as any)(lg, (((this as any).editor as any).getAttributes as any)(rl)) as any).run as any)() : ((n as any).toggleList as any)((this as any).name, ((this as any).options as any).itemTypeName, ((this as any).options as any).keepMarks)
      };
    },
    addKeyboardShortcuts(): any {
      return {
        "Mod-Shift-7": (): any => ((((this as any).editor as any).commands as any).toggleOrderedList as any)()
      };
    },
    addInputRules(): any {
      let n: any = (Ft as any)({
        find: sl,
        type: (this as any).type,
        getAttributes: (e: any): any => ({
          start: +(e as any)[1]
        }),
        joinPredicate: (e: any, t: any): any => (((t as any).childCount as any) + (((t as any).attrs as any).start as any) as any) === (+(e as any)[1] as any)
      });
      return (((this as any).options as any).keepMarks || ((this as any).options as any).keepAttributes) && (n = (Ft as any)({
        find: sl,
        type: (this as any).type,
        keepMarks: ((this as any).options as any).keepMarks,
        keepAttributes: ((this as any).options as any).keepAttributes,
        getAttributes: (e: any): any => ({
          start: +(e as any)[1],
          ...(((this as any).editor as any).getAttributes as any)(rl)
        }),
        joinPredicate: (e: any, t: any): any => (((t as any).childCount as any) + (((t as any).attrs as any).start as any) as any) === (+(e as any)[1] as any),
        editor: (this as any).editor
      })), [n];
    }
  }),
  ag: any = /^\s*(\[([( |x])?\])\s$/,
  cg: any = ((de as any).create as any)({
    name: "taskItem",
    addOptions(): any {
      return {
        nested: !1,
        HTMLAttributes: {},
        taskListTypeName: "taskList",
        a11y: void 0
      };
    },
    content(): any {
      return ((this as any).options as any).nested ? "paragraph block*" : "paragraph+";
    },
    defining: !0,
    addAttributes(): any {
      return {
        checked: {
          default: !1,
          keepOnSplit: !1,
          parseHTML: (n: any): any => {
            const e: any = ((n as any).getAttribute as any)("data-checked");
            return (e as any) === ("" as any) || (e as any) === ("true" as any);
          },
          renderHTML: (n: any): any => ({
            "data-checked": (n as any).checked
          })
        }
      };
    },
    parseHTML(): any {
      return [{
        tag: `li[data-type="${(this as any).name}"]`,
        priority: 51
      }];
    },
    renderHTML({
      node: n,
      HTMLAttributes: e
    }: any): any {
      return ["li", (W as any)(((this as any).options as any).HTMLAttributes, e, {
        "data-type": (this as any).name
      }), ["label", ["input", {
        type: "checkbox",
        checked: ((n as any).attrs as any).checked ? "checked" : null
      }], ["span"]], ["div", 0]];
    },
    parseMarkdown: (n: any, e: any): any => {
      const t: any = [];
      if ((n as any).tokens && (((n as any).tokens as any).length as any) > (0 as any) ? ((t as any).push as any)(((e as any).createNode as any)("paragraph", {}, ((e as any).parseInline as any)((n as any).tokens))) : (n as any).text ? ((t as any).push as any)(((e as any).createNode as any)("paragraph", {}, [((e as any).createNode as any)("text", {
        text: (n as any).text
      })])) : ((t as any).push as any)(((e as any).createNode as any)("paragraph", {}, [])), (n as any).nestedTokens && (((n as any).nestedTokens as any).length as any) > (0 as any)) {
        const r: any = ((e as any).parseChildren as any)((n as any).nestedTokens);
        ((t as any).push as any)(...r);
      }
      return ((e as any).createNode as any)("taskItem", {
        checked: (n as any).checked || !1
      }, t);
    },
    renderMarkdown: (n: any, e: any): any => {
      var t: any;
      const s: any = `- [${((t = (n as any).attrs) as any) != (null as any) && (t as any).checked ? "x" : " "}] `;
      return (bi as any)(n, e, s);
    },
    addKeyboardShortcuts(): any {
      const n: any = {
        Enter: (): any => ((((this as any).editor as any).commands as any).splitListItem as any)((this as any).name),
        "Shift-Tab": (): any => ((((this as any).editor as any).commands as any).liftListItem as any)((this as any).name)
      };
      return ((this as any).options as any).nested ? {
        ...n,
        Tab: (): any => ((((this as any).editor as any).commands as any).sinkListItem as any)((this as any).name)
      } : n;
    },
    addNodeView(): any {
      return ({
        node: n,
        HTMLAttributes: e,
        getPos: t,
        editor: r
      }: any): any => {
        const s: any = ((document as any).createElement as any)("li"),
          i: any = ((document as any).createElement as any)("label"),
          o: any = ((document as any).createElement as any)("span"),
          l: any = ((document as any).createElement as any)("input"),
          a: any = ((document as any).createElement as any)("div"),
          c: any = (u: any): any => {
            var d: any, f: any;
            (l as any).ariaLabel = (((f = ((d = ((this as any).options as any).a11y) as any) == (null as any) ? void 0 : (d as any).checkboxLabel) as any) == (null as any) ? void 0 : ((f as any).call as any)(d, u, (l as any).checked)) || `Task item checkbox for ${(u as any).textContent || "empty task item"}`;
          };
        return (c as any)(n), (i as any).contentEditable = "false", (l as any).type = "checkbox", ((l as any).addEventListener as any)("mousedown", (u: any): any => ((u as any).preventDefault as any)()), ((l as any).addEventListener as any)("change", (u: any): any => {
          if (!(r as any).isEditable && !((this as any).options as any).onReadOnlyChecked) {
            (l as any).checked = !(l as any).checked;
            return;
          }
          const {
            checked: d
          }: any = (u as any).target;
          (r as any).isEditable && (typeof t as any) == ("function" as any) && ((((((((r as any).chain as any)() as any).focus as any)(void 0, {
            scrollIntoView: !1
          }) as any).command as any)(({
            tr: f
          }: any): any => {
            const h: any = (t as any)();
            if ((typeof h as any) != ("number" as any)) return !1;
            const p: any = (((f as any).doc as any).nodeAt as any)(h);
            return ((f as any).setNodeMarkup as any)(h, void 0, {
              ...p?.attrs,
              checked: d
            }), !0;
          }) as any).run as any)(), !(r as any).isEditable && ((this as any).options as any).onReadOnlyChecked && ((((this as any).options as any).onReadOnlyChecked as any)(n, d) || ((l as any).checked = !(l as any).checked));
        }), ((((Object as any).entries as any)(((this as any).options as any).HTMLAttributes) as any).forEach as any)(([u, d]: any): any => {
          ((s as any).setAttribute as any)(u, d);
        }), ((s as any).dataset as any).checked = ((n as any).attrs as any).checked, (l as any).checked = ((n as any).attrs as any).checked, ((i as any).append as any)(l, o), ((s as any).append as any)(i, a), ((((Object as any).entries as any)(e) as any).forEach as any)(([u, d]: any): any => {
          ((s as any).setAttribute as any)(u, d);
        }), {
          dom: s,
          contentDOM: a,
          update: (u: any): any => ((u as any).type as any) !== ((this as any).type as any) ? !1 : (((s as any).dataset as any).checked = ((u as any).attrs as any).checked, (l as any).checked = ((u as any).attrs as any).checked, (c as any)(u), !0)
        };
      };
    },
    addInputRules(): any {
      return [(Ft as any)({
        find: ag,
        type: (this as any).type,
        getAttributes: (n: any): any => ({
          checked: ((n as any)[((n as any).length as any) - (1 as any)] as any) === ("x" as any)
        })
      })];
    }
  }),
  ug: any = ((de as any).create as any)({
    name: "taskList",
    addOptions(): any {
      return {
        itemTypeName: "taskItem",
        HTMLAttributes: {}
      };
    },
    group: "block list",
    content(): any {
      return `${((this as any).options as any).itemTypeName}+`;
    },
    parseHTML(): any {
      return [{
        tag: `ul[data-type="${(this as any).name}"]`,
        priority: 51
      }];
    },
    renderHTML({
      HTMLAttributes: n
    }: any): any {
      return ["ul", (W as any)(((this as any).options as any).HTMLAttributes, n, {
        "data-type": (this as any).name
      }), 0];
    },
    parseMarkdown: (n: any, e: any): any => ((e as any).createNode as any)("taskList", {}, ((e as any).parseChildren as any)((n as any).items || [])),
    renderMarkdown: (n: any, e: any): any => (n as any).content ? ((e as any).renderChildren as any)((n as any).content, `
`) : "",
    markdownTokenizer: {
      name: "taskList",
      level: "block",
      start(n: any): any {
        var e: any;
        const t: any = ((e = ((n as any).match as any)(/^\s*[-+*]\s+\[([ xX])\]\s+/)) as any) == (null as any) ? void 0 : (e as any).index;
        return (t as any) !== (void 0 as any) ? t : -1;
      },
      tokenize(n: any, e: any, t: any): any {
        const r: any = (i: any): any => {
            const o: any = (Rs as any)(i, {
              itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
              extractItemData: (l: any): any => ({
                indentLevel: ((l as any)[1] as any).length,
                mainContent: (l as any)[4],
                checked: ((((l as any)[3] as any).toLowerCase as any)() as any) === ("x" as any)
              }),
              createToken: (l: any, a: any): any => ({
                type: "taskItem",
                raw: "",
                mainContent: (l as any).mainContent,
                indentLevel: (l as any).indentLevel,
                checked: (l as any).checked,
                text: (l as any).mainContent,
                tokens: ((t as any).inlineTokens as any)((l as any).mainContent),
                nestedTokens: a
              }),
              customNestedParser: r
            }, t);
            return o ? [{
              type: "taskList",
              raw: (o as any).raw,
              items: (o as any).items
            }] : ((t as any).blockTokens as any)(i);
          },
          s: any = (Rs as any)(n, {
            itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
            extractItemData: (i: any): any => ({
              indentLevel: ((i as any)[1] as any).length,
              mainContent: (i as any)[4],
              checked: ((((i as any)[3] as any).toLowerCase as any)() as any) === ("x" as any)
            }),
            createToken: (i: any, o: any): any => ({
              type: "taskItem",
              raw: "",
              mainContent: (i as any).mainContent,
              indentLevel: (i as any).indentLevel,
              checked: (i as any).checked,
              text: (i as any).mainContent,
              tokens: ((t as any).inlineTokens as any)((i as any).mainContent),
              nestedTokens: o
            }),
            customNestedParser: r
          }, t);
        if (s) return {
          type: "taskList",
          raw: (s as any).raw,
          items: (s as any).items
        };
      }
    },
    markdownOptions: {
      indentsContent: !0
    },
    addCommands(): any {
      return {
        toggleTaskList: (): any => ({
          commands: n
        }: any): any => ((n as any).toggleList as any)((this as any).name, ((this as any).options as any).itemTypeName)
      };
    },
    addKeyboardShortcuts(): any {
      return {
        "Mod-Shift-9": (): any => ((((this as any).editor as any).commands as any).toggleTaskList as any)()
      };
    }
  });
((V as any).create as any)({
  name: "listKit",
  addExtensions(): any {
    const n: any = [];
    return (((this as any).options as any).bulletList as any) !== (!1 as any) && ((n as any).push as any)(((Tc as any).configure as any)(((this as any).options as any).bulletList)), (((this as any).options as any).listItem as any) !== (!1 as any) && ((n as any).push as any)(((Ac as any).configure as any)(((this as any).options as any).listItem)), (((this as any).options as any).listKeymap as any) !== (!1 as any) && ((n as any).push as any)(((Pc as any).configure as any)(((this as any).options as any).listKeymap)), (((this as any).options as any).orderedList as any) !== (!1 as any) && ((n as any).push as any)(((zc as any).configure as any)(((this as any).options as any).orderedList)), (((this as any).options as any).taskItem as any) !== (!1 as any) && ((n as any).push as any)(((cg as any).configure as any)(((this as any).options as any).taskItem)), (((this as any).options as any).taskList as any) !== (!1 as any) && ((n as any).push as any)(((ug as any).configure as any)(((this as any).options as any).taskList)), n;
  }
});
var Cr: any = (n: any, e: any): any => {
    if ((n as any) === ("slot" as any)) return 0;
    if (n instanceof Function) return (n as any)(e);
    const {
      children: t,
      ...r
    }: any = e ?? {};
    if ((n as any) === ("svg" as any)) throw new (Error as any)("SVG elements are not supported in the JSX syntax, use the array syntax instead");
    return [n, r, t];
  },
  dg: any = /^\s*>\s$/,
  fg: any = ((de as any).create as any)({
    name: "blockquote",
    addOptions(): any {
      return {
        HTMLAttributes: {}
      };
    },
    content: "block+",
    group: "block",
    defining: !0,
    parseHTML(): any {
      return [{
        tag: "blockquote"
      }];
    },
    renderHTML({
      HTMLAttributes: n
    }: any): any {
      return (Cr as any)("blockquote", {
        ...(W as any)(((this as any).options as any).HTMLAttributes, n),
        children: (Cr as any)("slot", {})
      });
    },
    parseMarkdown: (n: any, e: any): any => ((e as any).createNode as any)("blockquote", void 0, ((e as any).parseChildren as any)((n as any).tokens || [])),
    renderMarkdown: (n: any, e: any): any => {
      if (!(n as any).content) return "";
      const t: string = ">",
        r: any = [];
      return (((n as any).content as any).forEach as any)((s: any): any => {
        const l: any = ((((((e as any).renderChildren as any)([s]) as any).split as any)(`
`) as any).map as any)((a: any): any => (((a as any).trim as any)() as any) === ("" as any) ? t : `${t} ${a}`);
        ((r as any).push as any)(((l as any).join as any)(`
`));
      }), ((r as any).join as any)(`
${t}
`);
    },
    addCommands(): any {
      return {
        setBlockquote: (): any => ({
          commands: n
        }: any): any => ((n as any).wrapIn as any)((this as any).name),
        toggleBlockquote: (): any => ({
          commands: n
        }: any): any => ((n as any).toggleWrap as any)((this as any).name),
        unsetBlockquote: (): any => ({
          commands: n
        }: any): any => ((n as any).lift as any)((this as any).name)
      };
    },
    addKeyboardShortcuts(): any {
      return {
        "Mod-Shift-b": (): any => ((((this as any).editor as any).commands as any).toggleBlockquote as any)()
      };
    },
    addInputRules(): any {
      return [(Ft as any)({
        find: dg,
        type: (this as any).type
      })];
    }
  }),
  hg: any = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/,
  pg: any = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g,
  mg: any = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/,
  gg: any = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g,
  yg: any = ((bt as any).create as any)({
    name: "bold",
    addOptions(): any {
      return {
        HTMLAttributes: {}
      };
    },
    parseHTML(): any {
      return [{
        tag: "strong"
      }, {
        tag: "b",
        getAttrs: (n: any): any => (((n as any).style as any).fontWeight as any) !== ("normal" as any) && null
      }, {
        style: "font-weight=400",
        clearMark: (n: any): any => (((n as any).type as any).name as any) === ((this as any).name as any)
      }, {
        style: "font-weight",
        getAttrs: (n: any): any => ((/^(bold(er)?|[5-9]\d{2,})$/ as any).test as any)(n) && null
      }];
    },
    renderHTML({
      HTMLAttributes: n
    }: any): any {
      return (Cr as any)("strong", {
        ...(W as any)(((this as any).options as any).HTMLAttributes, n),
        children: (Cr as any)("slot", {})
      });
    },
    markdownTokenName: "strong",
    parseMarkdown: (n: any, e: any): any => ((e as any).applyMark as any)("bold", ((e as any).parseInline as any)((n as any).tokens || [])),
    renderMarkdown: (n: any, e: any): any => `**${((e as any).renderChildren as any)(n)}**`,
    addCommands(): any {
      return {
        setBold: (): any => ({
          commands: n
        }: any): any => ((n as any).setMark as any)((this as any).name),
        toggleBold: (): any => ({
          commands: n
        }: any): any => ((n as any).toggleMark as any)((this as any).name),
        unsetBold: (): any => ({
          commands: n
        }: any): any => ((n as any).unsetMark as any)((this as any).name)
      };
    },
    addKeyboardShortcuts(): any {
      return {
        "Mod-b": (): any => ((((this as any).editor as any).commands as any).toggleBold as any)(),
        "Mod-B": (): any => ((((this as any).editor as any).commands as any).toggleBold as any)()
      };
    },
    addInputRules(): any {
      return [($t as any)({
        find: hg,
        type: (this as any).type
      }), ($t as any)({
        find: mg,
        type: (this as any).type
      })];
    },
    addPasteRules(): any {
      return [(yt as any)({
        find: pg,
        type: (this as any).type
      }), (yt as any)({
        find: gg,
        type: (this as any).type
      })];
    }
  }),
  kg: any = /(^|[^`])`([^`]+)`(?!`)$/,
  bg: any = /(^|[^`])`([^`]+)`(?!`)/g,
  xg: any = ((bt as any).create as any)({
    name: "code",
    addOptions(): any {
      return {
        HTMLAttributes: {}
      };
    },
    excludes: "_",
    code: !0,
    exitable: !0,
    parseHTML(): any {
      return [{
        tag: "code"
      }];
    },
    renderHTML({
      HTMLAttributes: n
    }: any): any {
      return ["code", (W as any)(((this as any).options as any).HTMLAttributes, n), 0];
    },
    markdownTokenName: "codespan",
    parseMarkdown: (n: any, e: any): any => ((e as any).applyMark as any)("code", [{
      type: "text",
      text: (n as any).text || ""
    }]),
    renderMarkdown: (n: any, e: any): any => (n as any).content ? `\`${((e as any).renderChildren as any)((n as any).content)}\`` : "",
    addCommands(): any {
      return {
        setCode: (): any => ({
          commands: n
        }: any): any => ((n as any).setMark as any)((this as any).name),
        toggleCode: (): any => ({
          commands: n
        }: any): any => ((n as any).toggleMark as any)((this as any).name),
        unsetCode: (): any => ({
          commands: n
        }: any): any => ((n as any).unsetMark as any)((this as any).name)
      };
    },
    addKeyboardShortcuts(): any {
      return {
        "Mod-e": (): any => ((((this as any).editor as any).commands as any).toggleCode as any)()
      };
    },
    addInputRules(): any {
      return [($t as any)({
        find: kg,
        type: (this as any).type
      })];
    },
    addPasteRules(): any {
      return [(yt as any)({
        find: bg,
        type: (this as any).type
      })];
    }
  }),
  fs: number = 4,
  Sg: any = /^```([a-z]+)?[\s\n]$/,
  wg: any = /^~~~([a-z]+)?[\s\n]$/,
  Cg: any = ((de as any).create as any)({
    name: "codeBlock",
    addOptions(): any {
      return {
        languageClassPrefix: "language-",
        exitOnTripleEnter: !0,
        exitOnArrowDown: !0,
        defaultLanguage: null,
        enableTabIndentation: !1,
        tabSize: fs,
        HTMLAttributes: {}
      };
    },
    content: "text*",
    marks: "",
    group: "block",
    code: !0,
    defining: !0,
    addAttributes(): any {
      return {
        language: {
          default: ((this as any).options as any).defaultLanguage,
          parseHTML: (n: any): any => {
            var e: any;
            const {
              languageClassPrefix: t
            }: any = (this as any).options;
            if (!t) return null;
            const i: any = ((((([...((((e = (n as any).firstElementChild) as any) == (null as any) ? void 0 : (e as any).classList) || [])] as any).filter as any)((o: any): any => ((o as any).startsWith as any)(t)) as any).map as any)((o: any): any => ((o as any).replace as any)(t, "")) as any)[0];
            return i || null;
          },
          rendered: !1
        }
      };
    },
    parseHTML(): any {
      return [{
        tag: "pre",
        preserveWhitespace: "full"
      }];
    },
    renderHTML({
      node: n,
      HTMLAttributes: e
    }: any): any {
      return ["pre", (W as any)(((this as any).options as any).HTMLAttributes, e), ["code", {
        class: ((n as any).attrs as any).language ? (((this as any).options as any).languageClassPrefix as any) + (((n as any).attrs as any).language as any) : null
      }, 0]];
    },
    markdownTokenName: "code",
    parseMarkdown: (n: any, e: any): any => {
      var t: any;
      return ((((t = (n as any).raw) as any) == (null as any) ? void 0 : ((t as any).startsWith as any)("```")) as any) === (!1 as any) && ((n as any).codeBlockStyle as any) !== ("indented" as any) ? [] : ((e as any).createNode as any)("codeBlock", {
        language: (n as any).lang || null
      }, (n as any).text ? [((e as any).createTextNode as any)((n as any).text)] : []);
    },
    renderMarkdown: (n: any, e: any): any => {
      var t: any;
      let r: any = "";
      const s: any = (((t = (n as any).attrs) as any) == (null as any) ? void 0 : (t as any).language) || "";
      return (n as any).content ? r = (([`\`\`\`${s}`, ((e as any).renderChildren as any)((n as any).content), "```"] as any).join as any)(`
`) : r = `\`\`\`${s}

\`\`\``, r;
    },
    addCommands(): any {
      return {
        setCodeBlock: (n: any): any => ({
          commands: e
        }: any): any => ((e as any).setNode as any)((this as any).name, n),
        toggleCodeBlock: (n: any): any => ({
          commands: e
        }: any): any => ((e as any).toggleNode as any)((this as any).name, "paragraph", n)
      };
    },
    addKeyboardShortcuts(): any {
      return {
        "Mod-Alt-c": (): any => ((((this as any).editor as any).commands as any).toggleCodeBlock as any)(),
        Backspace: (): any => {
          const {
              empty: n,
              $anchor: e
            }: any = (((this as any).editor as any).state as any).selection,
            t: any = ((e as any).pos as any) === (1 as any);
          return !n || ((((e as any).parent as any).type as any).name as any) !== ((this as any).name as any) ? !1 : t || !(((e as any).parent as any).textContent as any).length ? ((((this as any).editor as any).commands as any).clearNodes as any)() : !1;
        },
        Tab: ({
          editor: n
        }: any): any => {
          var e: any;
          if (!((this as any).options as any).enableTabIndentation) return !1;
          const t: any = ((e = ((this as any).options as any).tabSize) as any) != (null as any) ? e : fs,
            {
              state: r
            }: any = n,
            {
              selection: s
            }: any = r,
            {
              $from: i,
              empty: o
            }: any = s;
          if ((((i as any).parent as any).type as any) !== ((this as any).type as any)) return !1;
          const l: any = ((" " as any).repeat as any)(t);
          return o ? (((n as any).commands as any).insertContent as any)(l) : (((n as any).commands as any).command as any)(({
            tr: a
          }: any): any => {
            const {
                from: c,
                to: u
              }: any = s,
              h: any = (((((((((r as any).doc as any).textBetween as any)(c, u, `
`, `
`) as any).split as any)(`
`) as any).map as any)((p: any): any => (l as any) + (p as any)) as any).join as any)(`
`);
            return ((a as any).replaceWith as any)(c, u, (((r as any).schema as any).text as any)(h)), !0;
          });
        },
        "Shift-Tab": ({
          editor: n
        }: any): any => {
          var e: any;
          if (!((this as any).options as any).enableTabIndentation) return !1;
          const t: any = ((e = ((this as any).options as any).tabSize) as any) != (null as any) ? e : fs,
            {
              state: r
            }: any = n,
            {
              selection: s
            }: any = r,
            {
              $from: i,
              empty: o
            }: any = s;
          return (((i as any).parent as any).type as any) !== ((this as any).type as any) ? !1 : o ? (((n as any).commands as any).command as any)(({
            tr: l
          }: any): any => {
            var a: any;
            const {
                pos: c
              }: any = i,
              u: any = ((i as any).start as any)(),
              d: any = ((i as any).end as any)(),
              h: any = (((((r as any).doc as any).textBetween as any)(u, d, `
`, `
`) as any).split as any)(`
`);
            let p: any = 0,
              m: any = 0;
            const g: any = (c as any) - (u as any);
            for (let A: any = 0; (A as any) < ((h as any).length as any); A += 1) {
              if (((m as any) + (((h as any)[A] as any).length as any) as any) >= (g as any)) {
                p = A;
                break;
              }
              m += (((h as any)[A] as any).length as any) + (1 as any);
            }
            const b: any = (((a = (((h as any)[p] as any).match as any)(/^ */)) as any) == (null as any) ? void 0 : (a as any)[0]) || "",
              C: any = ((Math as any).min as any)((b as any).length, t);
            if ((C as any) === (0 as any)) return !0;
            let M: any = u;
            for (let A: any = 0; (A as any) < (p as any); A += 1) M += (((h as any)[A] as any).length as any) + (1 as any);
            return ((l as any).delete as any)(M, (M as any) + (C as any)), ((c as any) - (M as any) as any) <= (C as any) && ((l as any).setSelection as any)(((N as any).create as any)((l as any).doc, M)), !0;
          }) : (((n as any).commands as any).command as any)(({
            tr: l
          }: any): any => {
            const {
                from: a,
                to: c
              }: any = s,
              f: any = (((((((((r as any).doc as any).textBetween as any)(a, c, `
`, `
`) as any).split as any)(`
`) as any).map as any)((h: any): any => {
                var p: any;
                const m: any = (((p = ((h as any).match as any)(/^ */)) as any) == (null as any) ? void 0 : (p as any)[0]) || "",
                  g: any = ((Math as any).min as any)((m as any).length, t);
                return ((h as any).slice as any)(g);
              }) as any).join as any)(`
`);
            return ((l as any).replaceWith as any)(a, c, (((r as any).schema as any).text as any)(f)), !0;
          });
        },
        Enter: ({
          editor: n
        }: any): any => {
          if (!((this as any).options as any).exitOnTripleEnter) return !1;
          const {
              state: e
            }: any = n,
            {
              selection: t
            }: any = e,
            {
              $from: r,
              empty: s
            }: any = t;
          if (!s || (((r as any).parent as any).type as any) !== ((this as any).type as any)) return !1;
          const i: any = ((r as any).parentOffset as any) === ((((r as any).parent as any).nodeSize as any) - (2 as any) as any),
            o: any = ((((r as any).parent as any).textContent as any).endsWith as any)(`

`);
          return !i || !o ? !1 : ((((((((n as any).chain as any)() as any).command as any)(({
            tr: l
          }: any): any => (((l as any).delete as any)(((r as any).pos as any) - (2 as any), (r as any).pos), !0)) as any).exitCode as any)() as any).run as any)();
        },
        ArrowDown: ({
          editor: n
        }: any): any => {
          if (!((this as any).options as any).exitOnArrowDown) return !1;
          const {
              state: e
            }: any = n,
            {
              selection: t,
              doc: r
            }: any = e,
            {
              $from: s,
              empty: i
            }: any = t;
          if (!i || (((s as any).parent as any).type as any) !== ((this as any).type as any) || !(((s as any).parentOffset as any) === ((((s as any).parent as any).nodeSize as any) - (2 as any) as any))) return !1;
          const l: any = ((s as any).after as any)();
          return (l as any) === (void 0 as any) ? !1 : ((r as any).nodeAt as any)(l) ? (((n as any).commands as any).command as any)(({
            tr: c
          }: any): any => (((c as any).setSelection as any)(((O as any).near as any)(((r as any).resolve as any)(l))), !0)) : (((n as any).commands as any).exitCode as any)();
        }
      };
    },
    addInputRules(): any {
      return [(Is as any)({
        find: Sg,
        type: (this as any).type,
        getAttributes: (n: any): any => ({
          language: (n as any)[1]
        })
      }), (Is as any)({
        find: wg,
        type: (this as any).type,
        getAttributes: (n: any): any => ({
          language: (n as any)[1]
        })
      })];
    },
    addProseMirrorPlugins(): any {
      return [new ($ as any)({
        key: new (q as any)("codeBlockVSCodeHandler"),
        props: {
          handlePaste: (n: any, e: any): any => {
            if (!(e as any).clipboardData || (((this as any).editor as any).isActive as any)(((this as any).type as any).name)) return !1;
            const t: any = (((e as any).clipboardData as any).getData as any)("text/plain"),
              r: any = (((e as any).clipboardData as any).getData as any)("vscode-editor-data"),
              s: any = r ? ((JSON as any).parse as any)(r) : void 0,
              i: any = s?.mode;
            if (!t || !i) return !1;
            const {
                tr: o,
                schema: l
              }: any = (n as any).state,
              a: any = ((l as any).text as any)(((t as any).replace as any)(/\r\n?/g, `
`));
            return ((o as any).replaceSelectionWith as any)((((this as any).type as any).create as any)({
              language: i
            }, a)), (((((o as any).selection as any).$from as any).parent as any).type as any) !== ((this as any).type as any) && ((o as any).setSelection as any)(((N as any).near as any)((((o as any).doc as any).resolve as any)(((Math as any).max as any)(0, (((o as any).selection as any).from as any) - (2 as any))))), ((o as any).setMeta as any)("paste", !0), ((n as any).dispatch as any)(o), !0;
          }
        }
      })];
    }
  }),
  Mg: any = ((de as any).create as any)({
    name: "doc",
    topNode: !0,
    content: "block+",
    renderMarkdown: (n: any, e: any): any => (n as any).content ? ((e as any).renderChildren as any)((n as any).content, `

`) : ""
  }),
  Eg: any = ((de as any).create as any)({
    name: "hardBreak",
    markdownTokenName: "br",
    addOptions(): any {
      return {
        keepMarks: !0,
        HTMLAttributes: {}
      };
    },
    inline: !0,
    group: "inline",
    selectable: !1,
    linebreakReplacement: !0,
    parseHTML(): any {
      return [{
        tag: "br"
      }];
    },
    renderHTML({
      HTMLAttributes: n
    }: any): any {
      return ["br", (W as any)(((this as any).options as any).HTMLAttributes, n)];
    },
    renderText(): any {
      return `
`;
    },
    renderMarkdown: (): any => `  
`,
    parseMarkdown: (): any => ({
      type: "hardBreak"
    }),
    addCommands(): any {
      return {
        setHardBreak: (): any => ({
          commands: n,
          chain: e,
          state: t,
          editor: r
        }: any): any => ((n as any).first as any)([(): any => ((n as any).exitCode as any)(), (): any => ((n as any).command as any)((): any => {
          const {
            selection: s,
            storedMarks: i
          }: any = t;
          if ((((((s as any).$from as any).parent as any).type as any).spec as any).isolating) return !1;
          const {
              keepMarks: o
            }: any = (this as any).options,
            {
              splittableMarks: l
            }: any = (r as any).extensionManager,
            a: any = i || ((s as any).$to as any).parentOffset && (((s as any).$from as any).marks as any)();
          return (((((((e as any)() as any).insertContent as any)({
            type: (this as any).name
          }) as any).command as any)(({
            tr: c,
            dispatch: u
          }: any): any => {
            if (u && a && o) {
              const d: any = ((a as any).filter as any)((f: any): any => ((l as any).includes as any)(((f as any).type as any).name));
              ((c as any).ensureMarks as any)(d);
            }
            return !0;
          }) as any).run as any)();
        })])
      };
    },
    addKeyboardShortcuts(): any {
      return {
        "Mod-Enter": (): any => ((((this as any).editor as any).commands as any).setHardBreak as any)(),
        "Shift-Enter": (): any => ((((this as any).editor as any).commands as any).setHardBreak as any)()
      };
    }
  }),
  vg: any = ((de as any).create as any)({
    name: "heading",
    addOptions(): any {
      return {
        levels: [1, 2, 3, 4, 5, 6],
        HTMLAttributes: {}
      };
    },
    content: "inline*",
    group: "block",
    defining: !0,
    addAttributes(): any {
      return {
        level: {
          default: 1,
          rendered: !1
        }
      };
    },
    parseHTML(): any {
      return ((((this as any).options as any).levels as any).map as any)((n: any): any => ({
        tag: `h${n}`,
        attrs: {
          level: n
        }
      }));
    },
    renderHTML({
      node: n,
      HTMLAttributes: e
    }: any): any {
      return [`h${((((this as any).options as any).levels as any).includes as any)(((n as any).attrs as any).level) ? ((n as any).attrs as any).level : (((this as any).options as any).levels as any)[0]}`, (W as any)(((this as any).options as any).HTMLAttributes, e), 0];
    },
    parseMarkdown: (n: any, e: any): any => ((e as any).createNode as any)("heading", {
      level: (n as any).depth || 1
    }, ((e as any).parseInline as any)((n as any).tokens || [])),
    renderMarkdown: (n: any, e: any): any => {
      var t: any;
      const r: any = ((t = (n as any).attrs) as any) != (null as any) && (t as any).level ? (parseInt as any)(((n as any).attrs as any).level, 10) : 1,
        s: any = (("#" as any).repeat as any)(r);
      return (n as any).content ? `${s} ${((e as any).renderChildren as any)((n as any).content)}` : "";
    },
    addCommands(): any {
      return {
        setHeading: (n: any): any => ({
          commands: e
        }: any): any => ((((this as any).options as any).levels as any).includes as any)((n as any).level) ? ((e as any).setNode as any)((this as any).name, n) : !1,
        toggleHeading: (n: any): any => ({
          commands: e
        }: any): any => ((((this as any).options as any).levels as any).includes as any)((n as any).level) ? ((e as any).toggleNode as any)((this as any).name, "paragraph", n) : !1
      };
    },
    addKeyboardShortcuts(): any {
      return ((((this as any).options as any).levels as any).reduce as any)((n: any, e: any): any => ({
        ...n,
        [`Mod-Alt-${e}`]: (): any => ((((this as any).editor as any).commands as any).toggleHeading as any)({
          level: e
        })
      }), {});
    },
    addInputRules(): any {
      return ((((this as any).options as any).levels as any).map as any)((n: any): any => (Is as any)({
        find: new (RegExp as any)(`^(#{${((Math as any).min as any)(...((this as any).options as any).levels)},${n}})\\s$`),
        type: (this as any).type,
        getAttributes: {
          level: n
        }
      }));
    }
  }),
  Tg: any = ((de as any).create as any)({
    name: "horizontalRule",
    addOptions(): any {
      return {
        HTMLAttributes: {},
        nextNodeType: "paragraph"
      };
    },
    group: "block",
    parseHTML(): any {
      return [{
        tag: "hr"
      }];
    },
    renderHTML({
      HTMLAttributes: n
    }: any): any {
      return ["hr", (W as any)(((this as any).options as any).HTMLAttributes, n)];
    },
    markdownTokenName: "hr",
    parseMarkdown: (n: any, e: any): any => ((e as any).createNode as any)("horizontalRule"),
    renderMarkdown: (): any => "---",
    addCommands(): any {
      return {
        setHorizontalRule: (): any => ({
          chain: n,
          state: e
        }: any): any => {
          if (!(Hp as any)(e, (((e as any).schema as any).nodes as any)[(this as any).name])) return !1;
          const {
              selection: t
            }: any = e,
            {
              $to: r
            }: any = t,
            s: any = (n as any)();
          return (Qa as any)(t) ? ((s as any).insertContentAt as any)((r as any).pos, {
            type: (this as any).name
          }) : ((s as any).insertContent as any)({
            type: (this as any).name
          }), ((((s as any).command as any)(({
            state: i,
            tr: o,
            dispatch: l
          }: any): any => {
            if (l) {
              const {
                  $to: a
                }: any = (o as any).selection,
                c: any = ((a as any).end as any)();
              if ((a as any).nodeAfter) ((a as any).nodeAfter as any).isTextblock ? ((o as any).setSelection as any)(((N as any).create as any)((o as any).doc, ((a as any).pos as any) + (1 as any))) : ((a as any).nodeAfter as any).isBlock ? ((o as any).setSelection as any)(((v as any).create as any)((o as any).doc, (a as any).pos)) : ((o as any).setSelection as any)(((N as any).create as any)((o as any).doc, (a as any).pos));else {
                const u: any = (((i as any).schema as any).nodes as any)[((this as any).options as any).nextNodeType] || ((((a as any).parent as any).type as any).contentMatch as any).defaultType,
                  d: any = u?.create();
                d && (((o as any).insert as any)(c, d), ((o as any).setSelection as any)(((N as any).create as any)((o as any).doc, (c as any) + (1 as any))));
              }
              ((o as any).scrollIntoView as any)();
            }
            return !0;
          }) as any).run as any)();
        }
      };
    },
    addInputRules(): any {
      return [($p as any)({
        find: /^(?:---|\u2014-|___\s|\*\*\*\s)$/,
        type: (this as any).type
      })];
    }
  }),
  Ag: any = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/,
  Ng: any = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g,
  Og: any = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/,
  Dg: any = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g,
  Ig: any = ((bt as any).create as any)({
    name: "italic",
    addOptions(): any {
      return {
        HTMLAttributes: {}
      };
    },
    parseHTML(): any {
      return [{
        tag: "em"
      }, {
        tag: "i",
        getAttrs: (n: any): any => (((n as any).style as any).fontStyle as any) !== ("normal" as any) && null
      }, {
        style: "font-style=normal",
        clearMark: (n: any): any => (((n as any).type as any).name as any) === ((this as any).name as any)
      }, {
        style: "font-style=italic"
      }];
    },
    renderHTML({
      HTMLAttributes: n
    }: any): any {
      return ["em", (W as any)(((this as any).options as any).HTMLAttributes, n), 0];
    },
    addCommands(): any {
      return {
        setItalic: (): any => ({
          commands: n
        }: any): any => ((n as any).setMark as any)((this as any).name),
        toggleItalic: (): any => ({
          commands: n
        }: any): any => ((n as any).toggleMark as any)((this as any).name),
        unsetItalic: (): any => ({
          commands: n
        }: any): any => ((n as any).unsetMark as any)((this as any).name)
      };
    },
    markdownTokenName: "em",
    parseMarkdown: (n: any, e: any): any => ((e as any).applyMark as any)("italic", ((e as any).parseInline as any)((n as any).tokens || [])),
    renderMarkdown: (n: any, e: any): any => `*${((e as any).renderChildren as any)(n)}*`,
    addKeyboardShortcuts(): any {
      return {
        "Mod-i": (): any => ((((this as any).editor as any).commands as any).toggleItalic as any)(),
        "Mod-I": (): any => ((((this as any).editor as any).commands as any).toggleItalic as any)()
      };
    },
    addInputRules(): any {
      return [($t as any)({
        find: Ag,
        type: (this as any).type
      }), ($t as any)({
        find: Og,
        type: (this as any).type
      })];
    },
    addPasteRules(): any {
      return [(yt as any)({
        find: Ng,
        type: (this as any).type
      }), (yt as any)({
        find: Dg,
        type: (this as any).type
      })];
    }
  }),
  Bc: any = ((de as any).create as any)({
    name: "paragraph",
    priority: 1e3,
    addOptions(): any {
      return {
        HTMLAttributes: {}
      };
    },
    group: "block",
    content: "inline*",
    parseHTML(): any {
      return [{
        tag: "p"
      }];
    },
    renderHTML({
      HTMLAttributes: n
    }: any): any {
      return ["p", (W as any)(((this as any).options as any).HTMLAttributes, n), 0];
    },
    parseMarkdown: (n: any, e: any): any => {
      const t: any = (n as any).tokens || [];
      return ((t as any).length as any) === (1 as any) && (((t as any)[0] as any).type as any) === ("image" as any) ? ((e as any).parseChildren as any)([(t as any)[0]]) : ((e as any).createNode as any)("paragraph", void 0, ((e as any).parseInline as any)(t));
    },
    renderMarkdown: (n: any, e: any): any => !n || !((Array as any).isArray as any)((n as any).content) ? "" : ((e as any).renderChildren as any)((n as any).content),
    addCommands(): any {
      return {
        setParagraph: (): any => ({
          commands: n
        }: any): any => ((n as any).setNode as any)((this as any).name)
      };
    },
    addKeyboardShortcuts(): any {
      return {
        "Mod-Alt-0": (): any => ((((this as any).editor as any).commands as any).setParagraph as any)()
      };
    }
  }),
  my: any = Bc,
  Rg: any = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/,
  Pg: any = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g,
  Lg: any = ((bt as any).create as any)({
    name: "strike",
    addOptions(): any {
      return {
        HTMLAttributes: {}
      };
    },
    parseHTML(): any {
      return [{
        tag: "s"
      }, {
        tag: "del"
      }, {
        tag: "strike"
      }, {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (n: any): any => ((n as any).includes as any)("line-through") ? {} : !1
      }];
    },
    renderHTML({
      HTMLAttributes: n
    }: any): any {
      return ["s", (W as any)(((this as any).options as any).HTMLAttributes, n), 0];
    },
    markdownTokenName: "del",
    parseMarkdown: (n: any, e: any): any => ((e as any).applyMark as any)("strike", ((e as any).parseInline as any)((n as any).tokens || [])),
    renderMarkdown: (n: any, e: any): any => `~~${((e as any).renderChildren as any)(n)}~~`,
    addCommands(): any {
      return {
        setStrike: (): any => ({
          commands: n
        }: any): any => ((n as any).setMark as any)((this as any).name),
        toggleStrike: (): any => ({
          commands: n
        }: any): any => ((n as any).toggleMark as any)((this as any).name),
        unsetStrike: (): any => ({
          commands: n
        }: any): any => ((n as any).unsetMark as any)((this as any).name)
      };
    },
    addKeyboardShortcuts(): any {
      return {
        "Mod-Shift-s": (): any => ((((this as any).editor as any).commands as any).toggleStrike as any)()
      };
    },
    addInputRules(): any {
      return [($t as any)({
        find: Rg,
        type: (this as any).type
      })];
    },
    addPasteRules(): any {
      return [(yt as any)({
        find: Pg,
        type: (this as any).type
      })];
    }
  }),
  zg: any = ((de as any).create as any)({
    name: "text",
    group: "inline",
    parseMarkdown: (n: any): any => ({
      type: "text",
      text: (n as any).text || ""
    }),
    renderMarkdown: (n: any): any => (n as any).text || ""
  }),
  Bg: any = ((bt as any).create as any)({
    name: "underline",
    addOptions(): any {
      return {
        HTMLAttributes: {}
      };
    },
    parseHTML(): any {
      return [{
        tag: "u"
      }, {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (n: any): any => ((n as any).includes as any)("underline") ? {} : !1
      }];
    },
    renderHTML({
      HTMLAttributes: n
    }: any): any {
      return ["u", (W as any)(((this as any).options as any).HTMLAttributes, n), 0];
    },
    parseMarkdown(n: any, e: any): any {
      return ((e as any).applyMark as any)((this as any).name || "underline", ((e as any).parseInline as any)((n as any).tokens || []));
    },
    renderMarkdown(n: any, e: any): any {
      return `++${((e as any).renderChildren as any)(n)}++`;
    },
    markdownTokenizer: {
      name: "underline",
      level: "inline",
      start(n: any): any {
        return ((n as any).indexOf as any)("++");
      },
      tokenize(n: any, e: any, t: any): any {
        const s: any = ((/^(\+\+)([\s\S]+?)(\+\+)/ as any).exec as any)(n);
        if (!s) return;
        const i: any = (((s as any)[2] as any).trim as any)();
        return {
          type: "underline",
          raw: (s as any)[0],
          text: i,
          tokens: ((t as any).inlineTokens as any)(i)
        };
      }
    },
    addCommands(): any {
      return {
        setUnderline: (): any => ({
          commands: n
        }: any): any => ((n as any).setMark as any)((this as any).name),
        toggleUnderline: (): any => ({
          commands: n
        }: any): any => ((n as any).toggleMark as any)((this as any).name),
        unsetUnderline: (): any => ({
          commands: n
        }: any): any => ((n as any).unsetMark as any)((this as any).name)
      };
    },
    addKeyboardShortcuts(): any {
      return {
        "Mod-u": (): any => ((((this as any).editor as any).commands as any).toggleUnderline as any)(),
        "Mod-U": (): any => ((((this as any).editor as any).commands as any).toggleUnderline as any)()
      };
    }
  });
function $g(this: any, n: any = {}): any {
  return new ($ as any)({
    view(e: any): any {
      return new (Fg as any)(e, n);
    }
  });
}
class Fg {
  declare handlers: any;
  declare class: any;
  declare color: any;
  declare width: any;
  declare timeout: any;
  declare element: any;
  declare cursorPos: any;
  declare editorView: any;
  [key: string]: any;
  constructor(e: any, t: any) {
    var r: any;
    (this as any).editorView = e, (this as any).cursorPos = null, (this as any).element = null, (this as any).timeout = -1, (this as any).width = ((r = (t as any).width) as any) !== (null as any) && (r as any) !== (void 0 as any) ? r : 1, (this as any).color = ((t as any).color as any) === (!1 as any) ? void 0 : (t as any).color || "black", (this as any).class = (t as any).class, (this as any).handlers = ((["dragover", "dragend", "drop", "dragleave"] as any).map as any)((s: any): any => {
      let i: any = (o: any): any => {
        ((this as any)[s] as any)(o);
      };
      return (((e as any).dom as any).addEventListener as any)(s, i), {
        name: s,
        handler: i
      };
    });
  }
  destroy(): any {
    (((this as any).handlers as any).forEach as any)(({
      name: e,
      handler: t
    }: any): any => ((((this as any).editorView as any).dom as any).removeEventListener as any)(e, t));
  }
  update(e: any, t: any): any {
    ((this as any).cursorPos as any) != (null as any) && ((t as any).doc as any) != (((e as any).state as any).doc as any) && (((this as any).cursorPos as any) > (((((e as any).state as any).doc as any).content as any).size as any) ? ((this as any).setCursor as any)(null) : ((this as any).updateOverlay as any)());
  }
  setCursor(e: any): any {
    (e as any) != ((this as any).cursorPos as any) && ((this as any).cursorPos = e, (e as any) == (null as any) ? (((((this as any).element as any).parentNode as any).removeChild as any)((this as any).element), (this as any).element = null) : ((this as any).updateOverlay as any)());
  }
  updateOverlay(): any {
    let e: any = (((((this as any).editorView as any).state as any).doc as any).resolve as any)((this as any).cursorPos),
      t: any = !((e as any).parent as any).inlineContent,
      r: any,
      s: any = ((this as any).editorView as any).dom,
      i: any = ((s as any).getBoundingClientRect as any)(),
      o: any = ((i as any).width as any) / ((s as any).offsetWidth as any),
      l: any = ((i as any).height as any) / ((s as any).offsetHeight as any);
    if (t) {
      let d: any = (e as any).nodeBefore,
        f: any = (e as any).nodeAfter;
      if (d || f) {
        let h: any = (((this as any).editorView as any).nodeDOM as any)(((this as any).cursorPos as any) - ((d ? (d as any).nodeSize : 0) as any));
        if (h) {
          let p: any = ((h as any).getBoundingClientRect as any)(),
            m: any = d ? (p as any).bottom : (p as any).top;
          d && f && (m = ((m as any) + (((((((this as any).editorView as any).nodeDOM as any)((this as any).cursorPos) as any).getBoundingClientRect as any)() as any).top as any) as any) / (2 as any));
          let g: any = (((this as any).width as any) / (2 as any) as any) * (l as any);
          r = {
            left: (p as any).left,
            right: (p as any).right,
            top: (m as any) - (g as any),
            bottom: (m as any) + (g as any)
          };
        }
      }
    }
    if (!r) {
      let d: any = (((this as any).editorView as any).coordsAtPos as any)((this as any).cursorPos),
        f: any = (((this as any).width as any) / (2 as any) as any) * (o as any);
      r = {
        left: ((d as any).left as any) - (f as any),
        right: ((d as any).left as any) + (f as any),
        top: (d as any).top,
        bottom: (d as any).bottom
      };
    }
    let a: any = (((this as any).editorView as any).dom as any).offsetParent;
    (this as any).element || ((this as any).element = ((a as any).appendChild as any)(((document as any).createElement as any)("div")), (this as any).class && (((this as any).element as any).className = (this as any).class), (((this as any).element as any).style as any).cssText = "position: absolute; z-index: 50; pointer-events: none;", (this as any).color && ((((this as any).element as any).style as any).backgroundColor = (this as any).color)), ((((this as any).element as any).classList as any).toggle as any)("prosemirror-dropcursor-block", t), ((((this as any).element as any).classList as any).toggle as any)("prosemirror-dropcursor-inline", !t);
    let c: any, u: any;
    if (!a || (a as any) == ((document as any).body as any) && (((getComputedStyle as any)(a) as any).position as any) == ("static" as any)) c = -pageXOffset, u = -pageYOffset;else {
      let d: any = ((a as any).getBoundingClientRect as any)(),
        f: any = ((d as any).width as any) / ((a as any).offsetWidth as any),
        h: any = ((d as any).height as any) / ((a as any).offsetHeight as any);
      c = ((d as any).left as any) - (((a as any).scrollLeft as any) * (f as any) as any), u = ((d as any).top as any) - (((a as any).scrollTop as any) * (h as any) as any);
    }
    (((this as any).element as any).style as any).left = ((((r as any).left as any) - (c as any) as any) / (o as any) as any) + ("px" as any), (((this as any).element as any).style as any).top = ((((r as any).top as any) - (u as any) as any) / (l as any) as any) + ("px" as any), (((this as any).element as any).style as any).width = ((((r as any).right as any) - ((r as any).left as any) as any) / (o as any) as any) + ("px" as any), (((this as any).element as any).style as any).height = ((((r as any).bottom as any) - ((r as any).top as any) as any) / (l as any) as any) + ("px" as any);
  }
  scheduleRemoval(e: any): any {
    (clearTimeout as any)((this as any).timeout), (this as any).timeout = (setTimeout as any)((): any => ((this as any).setCursor as any)(null), e);
  }
  dragover(e: any): any {
    if (!((this as any).editorView as any).editable) return;
    let t: any = (((this as any).editorView as any).posAtCoords as any)({
        left: (e as any).clientX,
        top: (e as any).clientY
      }),
      r: any = t && ((t as any).inside as any) >= (0 as any) && (((((this as any).editorView as any).state as any).doc as any).nodeAt as any)((t as any).inside),
      s: any = r && (((r as any).type as any).spec as any).disableDropCursor,
      i: any = (typeof s as any) == ("function" as any) ? (s as any)((this as any).editorView, t, e) : s;
    if (t && !i) {
      let o: any = (t as any).pos;
      if (((this as any).editorView as any).dragging && (((this as any).editorView as any).dragging as any).slice) {
        let l: any = (Pl as any)((((this as any).editorView as any).state as any).doc, o, (((this as any).editorView as any).dragging as any).slice);
        (l as any) != (null as any) && (o = l);
      }
      ((this as any).setCursor as any)(o), ((this as any).scheduleRemoval as any)(5e3);
    }
  }
  dragend(): any {
    ((this as any).scheduleRemoval as any)(20);
  }
  drop(): any {
    ((this as any).scheduleRemoval as any)(20);
  }
  dragleave(e: any): any {
    ((((this as any).editorView as any).dom as any).contains as any)((e as any).relatedTarget) || ((this as any).setCursor as any)(null);
  }
}
class H extends (O as any) {
  [key: string]: any;
  constructor(e: any) {
    super(e, e);
  }
  map(e: any, t: any): any {
    let r: any = ((e as any).resolve as any)(((t as any).map as any)((this as any).head));
    return ((H as any).valid as any)(r) ? new (H as any)(r) : ((O as any).near as any)(r);
  }
  content(): any {
    return (w as any).empty;
  }
  eq(e: any): any {
    return e instanceof H && ((e as any).head as any) == ((this as any).head as any);
  }
  toJSON(): any {
    return {
      type: "gapcursor",
      pos: (this as any).head
    };
  }
  static fromJSON(e: any, t: any): any {
    if ((typeof (t as any).pos as any) != ("number" as any)) throw new (RangeError as any)("Invalid input for GapCursor.fromJSON");
    return new (H as any)(((e as any).resolve as any)((t as any).pos));
  }
  getBookmark(): any {
    return new (Oi as any)((this as any).anchor);
  }
  static valid(e: any): any {
    let t: any = (e as any).parent;
    if ((t as any).isTextblock || !(Hg as any)(e) || !(Vg as any)(e)) return !1;
    let r: any = (((t as any).type as any).spec as any).allowGapCursor;
    if ((r as any) != (null as any)) return r;
    let s: any = (((t as any).contentMatchAt as any)(((e as any).index as any)()) as any).defaultType;
    return s && (s as any).isTextblock;
  }
  static findGapCursorFrom(e: any, t: any, r: any = !1): any {
    e: for (;;) {
      if (!r && ((H as any).valid as any)(e)) return e;
      let s: any = (e as any).pos,
        i: any = null;
      for (let o: any = (e as any).depth;; o--) {
        let l: any = ((e as any).node as any)(o);
        if ((t as any) > (0 as any) ? (((e as any).indexAfter as any)(o) as any) < ((l as any).childCount as any) : (((e as any).index as any)(o) as any) > (0 as any)) {
          i = ((l as any).child as any)((t as any) > (0 as any) ? ((e as any).indexAfter as any)(o) : (((e as any).index as any)(o) as any) - (1 as any));
          break;
        } else if ((o as any) == (0 as any)) return null;
        s += t;
        let a: any = (((e as any).doc as any).resolve as any)(s);
        if (((H as any).valid as any)(a)) return a;
      }
      for (;;) {
        let o: any = (t as any) > (0 as any) ? (i as any).firstChild : (i as any).lastChild;
        if (!o) {
          if ((i as any).isAtom && !(i as any).isText && !((v as any).isSelectable as any)(i)) {
            e = (((e as any).doc as any).resolve as any)((s as any) + (((i as any).nodeSize as any) * (t as any) as any)), r = !1;
            continue e;
          }
          break;
        }
        i = o, s += t;
        let l: any = (((e as any).doc as any).resolve as any)(s);
        if (((H as any).valid as any)(l)) return l;
      }
      return null;
    }
  }
}
((H as any).prototype as any).visible = !1;
(H as any).findFrom = (H as any).findGapCursorFrom;
((O as any).jsonID as any)("gapcursor", H);
class Oi {
  declare pos: any;
  [key: string]: any;
  constructor(e: any) {
    (this as any).pos = e;
  }
  map(e: any): any {
    return new (Oi as any)(((e as any).map as any)((this as any).pos));
  }
  resolve(e: any): any {
    let t: any = ((e as any).resolve as any)((this as any).pos);
    return ((H as any).valid as any)(t) ? new (H as any)(t) : ((O as any).near as any)(t);
  }
}
function $c(this: any, n: any): any {
  return (n as any).isAtom || ((n as any).spec as any).isolating || ((n as any).spec as any).createGapCursor;
}
function Hg(this: any, n: any): any {
  for (let e: any = (n as any).depth; (e as any) >= (0 as any); e--) {
    let t: any = ((n as any).index as any)(e),
      r: any = ((n as any).node as any)(e);
    if ((t as any) == (0 as any)) {
      if ((((r as any).type as any).spec as any).isolating) return !0;
      continue;
    }
    for (let s: any = ((r as any).child as any)((t as any) - (1 as any));; s = (s as any).lastChild) {
      if (((s as any).childCount as any) == (0 as any) && !(s as any).inlineContent || ($c as any)((s as any).type)) return !0;
      if ((s as any).inlineContent) return !1;
    }
  }
  return !0;
}
function Vg(this: any, n: any): any {
  for (let e: any = (n as any).depth; (e as any) >= (0 as any); e--) {
    let t: any = ((n as any).indexAfter as any)(e),
      r: any = ((n as any).node as any)(e);
    if ((t as any) == ((r as any).childCount as any)) {
      if ((((r as any).type as any).spec as any).isolating) return !0;
      continue;
    }
    for (let s: any = ((r as any).child as any)(t);; s = (s as any).firstChild) {
      if (((s as any).childCount as any) == (0 as any) && !(s as any).inlineContent || ($c as any)((s as any).type)) return !0;
      if ((s as any).inlineContent) return !1;
    }
  }
  return !0;
}
function jg(this: any): any {
  return new ($ as any)({
    props: {
      decorations: Kg,
      createSelectionBetween(n: any, e: any, t: any): any {
        return ((e as any).pos as any) == ((t as any).pos as any) && ((H as any).valid as any)(t) ? new (H as any)(t) : null;
      },
      handleClick: Wg,
      handleKeyDown: _g,
      handleDOMEvents: {
        beforeinput: qg
      }
    }
  });
}
const _g: any = (La as any)({
  ArrowLeft: (Dn as any)("horiz", -1),
  ArrowRight: (Dn as any)("horiz", 1),
  ArrowUp: (Dn as any)("vert", -1),
  ArrowDown: (Dn as any)("vert", 1)
});
function Dn(this: any, n: any, e: any): any {
  const t: any = (n as any) == ("vert" as any) ? (e as any) > (0 as any) ? "down" : "up" : (e as any) > (0 as any) ? "right" : "left";
  return function (this: any, r: any, s: any, i: any): any {
    let o: any = (r as any).selection,
      l: any = (e as any) > (0 as any) ? (o as any).$to : (o as any).$from,
      a: any = (o as any).empty;
    if (o instanceof N) {
      if (!((i as any).endOfTextblock as any)(t) || ((l as any).depth as any) == (0 as any)) return !1;
      a = !1, l = (((r as any).doc as any).resolve as any)((e as any) > (0 as any) ? ((l as any).after as any)() : ((l as any).before as any)());
    }
    let c: any = ((H as any).findGapCursorFrom as any)(l, e, a);
    return c ? (s && (s as any)((((r as any).tr as any).setSelection as any)(new (H as any)(c))), !0) : !1;
  };
}
function Wg(this: any, n: any, e: any, t: any): any {
  if (!n || !(n as any).editable) return !1;
  let r: any = ((((n as any).state as any).doc as any).resolve as any)(e);
  if (!((H as any).valid as any)(r)) return !1;
  let s: any = ((n as any).posAtCoords as any)({
    left: (t as any).clientX,
    top: (t as any).clientY
  });
  return s && ((s as any).inside as any) > (-1 as any) && ((v as any).isSelectable as any)(((((n as any).state as any).doc as any).nodeAt as any)((s as any).inside)) ? !1 : (((n as any).dispatch as any)(((((n as any).state as any).tr as any).setSelection as any)(new (H as any)(r))), !0);
}
function qg(this: any, n: any, e: any): any {
  if (((e as any).inputType as any) != ("insertCompositionText" as any) || !(((n as any).state as any).selection instanceof H)) return !1;
  let {
      $from: t
    }: any = ((n as any).state as any).selection,
    r: any = (((((t as any).parent as any).contentMatchAt as any)(((t as any).index as any)()) as any).findWrapping as any)(((((n as any).state as any).schema as any).nodes as any).text);
  if (!r) return !1;
  let s: any = (k as any).empty;
  for (let o: any = ((r as any).length as any) - (1 as any); (o as any) >= (0 as any); o--) s = ((k as any).from as any)((((r as any)[o] as any).createAndFill as any)(null, s));
  let i: any = ((((n as any).state as any).tr as any).replace as any)((t as any).pos, (t as any).pos, new (w as any)(s, 0, 0));
  return ((i as any).setSelection as any)(((N as any).near as any)((((i as any).doc as any).resolve as any)(((t as any).pos as any) + (1 as any)))), ((n as any).dispatch as any)(i), !1;
}
function Kg(this: any, n: any): any {
  if (!((n as any).selection instanceof H)) return null;
  let e: any = ((document as any).createElement as any)("div");
  return (e as any).className = "ProseMirror-gapcursor", ((B as any).create as any)((n as any).doc, [((ne as any).widget as any)(((n as any).selection as any).head, e, {
    key: "gapcursor"
  })]);
}
var Mr: number = 200,
  G: any = function (this: any): any {};
((G as any).prototype as any).append = function (this: any, e: any): any {
  return (e as any).length ? (e = ((G as any).from as any)(e), !(this as any).length && e || ((e as any).length as any) < (Mr as any) && ((this as any).leafAppend as any)(e) || ((this as any).length as any) < (Mr as any) && ((e as any).leafPrepend as any)(this) || ((this as any).appendInner as any)(e)) : this;
};
((G as any).prototype as any).prepend = function (this: any, e: any): any {
  return (e as any).length ? ((((G as any).from as any)(e) as any).append as any)(this) : this;
};
((G as any).prototype as any).appendInner = function (this: any, e: any): any {
  return new (Ug as any)(this, e);
};
((G as any).prototype as any).slice = function (this: any, e: any, t: any): any {
  return (e as any) === (void 0 as any) && (e = 0), (t as any) === (void 0 as any) && (t = (this as any).length), (e as any) >= (t as any) ? (G as any).empty : ((this as any).sliceInner as any)(((Math as any).max as any)(0, e), ((Math as any).min as any)((this as any).length, t));
};
((G as any).prototype as any).get = function (this: any, e: any): any {
  if (!((e as any) < (0 as any) || (e as any) >= ((this as any).length as any))) return ((this as any).getInner as any)(e);
};
((G as any).prototype as any).forEach = function (this: any, e: any, t: any, r: any): any {
  (t as any) === (void 0 as any) && (t = 0), (r as any) === (void 0 as any) && (r = (this as any).length), (t as any) <= (r as any) ? ((this as any).forEachInner as any)(e, t, r, 0) : ((this as any).forEachInvertedInner as any)(e, t, r, 0);
};
((G as any).prototype as any).map = function (this: any, e: any, t: any, r: any): any {
  (t as any) === (void 0 as any) && (t = 0), (r as any) === (void 0 as any) && (r = (this as any).length);
  var s: any = [];
  return ((this as any).forEach as any)(function (this: any, i: any, o: any): any {
    return ((s as any).push as any)((e as any)(i, o));
  }, t, r), s;
};
(G as any).from = function (this: any, e: any): any {
  return e instanceof G ? e : e && (e as any).length ? new (Fc as any)(e) : (G as any).empty;
};
var Fc: any = (function (this: any, n: any): any {
  function e(this: any, r: any): any {
    ((n as any).call as any)(this), (this as any).values = r;
  }
  n && ((e as any).__proto__ = n), (e as any).prototype = ((Object as any).create as any)(n && (n as any).prototype), ((e as any).prototype as any).constructor = e;
  var t: any = {
    length: {
      configurable: !0
    },
    depth: {
      configurable: !0
    }
  };
  return ((e as any).prototype as any).flatten = function (this: any): any {
    return (this as any).values;
  }, ((e as any).prototype as any).sliceInner = function (this: any, s: any, i: any): any {
    return (s as any) == (0 as any) && (i as any) == ((this as any).length as any) ? this : new (e as any)((((this as any).values as any).slice as any)(s, i));
  }, ((e as any).prototype as any).getInner = function (this: any, s: any): any {
    return ((this as any).values as any)[s];
  }, ((e as any).prototype as any).forEachInner = function (this: any, s: any, i: any, o: any, l: any): any {
    for (var a: any = i; (a as any) < (o as any); a++) if (((s as any)(((this as any).values as any)[a], (l as any) + (a as any)) as any) === (!1 as any)) return !1;
  }, ((e as any).prototype as any).forEachInvertedInner = function (this: any, s: any, i: any, o: any, l: any): any {
    for (var a: any = (i as any) - (1 as any); (a as any) >= (o as any); a--) if (((s as any)(((this as any).values as any)[a], (l as any) + (a as any)) as any) === (!1 as any)) return !1;
  }, ((e as any).prototype as any).leafAppend = function (this: any, s: any): any {
    if ((((this as any).length as any) + ((s as any).length as any) as any) <= (Mr as any)) return new (e as any)((((this as any).values as any).concat as any)(((s as any).flatten as any)()));
  }, ((e as any).prototype as any).leafPrepend = function (this: any, s: any): any {
    if ((((this as any).length as any) + ((s as any).length as any) as any) <= (Mr as any)) return new (e as any)(((((s as any).flatten as any)() as any).concat as any)((this as any).values));
  }, ((t as any).length as any).get = function (this: any): any {
    return ((this as any).values as any).length;
  }, ((t as any).depth as any).get = function (this: any): any {
    return 0;
  }, ((Object as any).defineProperties as any)((e as any).prototype, t), e;
} as any)(G);
(G as any).empty = new (Fc as any)([]);
var Ug: any = (function (this: any, n: any): any {
  function e(this: any, t: any, r: any): any {
    ((n as any).call as any)(this), (this as any).left = t, (this as any).right = r, (this as any).length = ((t as any).length as any) + ((r as any).length as any), (this as any).depth = (((Math as any).max as any)((t as any).depth, (r as any).depth) as any) + (1 as any);
  }
  return n && ((e as any).__proto__ = n), (e as any).prototype = ((Object as any).create as any)(n && (n as any).prototype), ((e as any).prototype as any).constructor = e, ((e as any).prototype as any).flatten = function (this: any): any {
    return (((((this as any).left as any).flatten as any)() as any).concat as any)((((this as any).right as any).flatten as any)());
  }, ((e as any).prototype as any).getInner = function (this: any, r: any): any {
    return (r as any) < (((this as any).left as any).length as any) ? (((this as any).left as any).get as any)(r) : (((this as any).right as any).get as any)((r as any) - (((this as any).left as any).length as any));
  }, ((e as any).prototype as any).forEachInner = function (this: any, r: any, s: any, i: any, o: any): any {
    var l: any = ((this as any).left as any).length;
    if ((s as any) < (l as any) && ((((this as any).left as any).forEachInner as any)(r, s, ((Math as any).min as any)(i, l), o) as any) === (!1 as any) || (i as any) > (l as any) && ((((this as any).right as any).forEachInner as any)(r, ((Math as any).max as any)((s as any) - (l as any), 0), (((Math as any).min as any)((this as any).length, i) as any) - (l as any), (o as any) + (l as any)) as any) === (!1 as any)) return !1;
  }, ((e as any).prototype as any).forEachInvertedInner = function (this: any, r: any, s: any, i: any, o: any): any {
    var l: any = ((this as any).left as any).length;
    if ((s as any) > (l as any) && ((((this as any).right as any).forEachInvertedInner as any)(r, (s as any) - (l as any), (((Math as any).max as any)(i, l) as any) - (l as any), (o as any) + (l as any)) as any) === (!1 as any) || (i as any) < (l as any) && ((((this as any).left as any).forEachInvertedInner as any)(r, ((Math as any).min as any)(s, l), i, o) as any) === (!1 as any)) return !1;
  }, ((e as any).prototype as any).sliceInner = function (this: any, r: any, s: any): any {
    if ((r as any) == (0 as any) && (s as any) == ((this as any).length as any)) return this;
    var i: any = ((this as any).left as any).length;
    return (s as any) <= (i as any) ? (((this as any).left as any).slice as any)(r, s) : (r as any) >= (i as any) ? (((this as any).right as any).slice as any)((r as any) - (i as any), (s as any) - (i as any)) : (((((this as any).left as any).slice as any)(r, i) as any).append as any)((((this as any).right as any).slice as any)(0, (s as any) - (i as any)));
  }, ((e as any).prototype as any).leafAppend = function (this: any, r: any): any {
    var s: any = (((this as any).right as any).leafAppend as any)(r);
    if (s) return new (e as any)((this as any).left, s);
  }, ((e as any).prototype as any).leafPrepend = function (this: any, r: any): any {
    var s: any = (((this as any).left as any).leafPrepend as any)(r);
    if (s) return new (e as any)(s, (this as any).right);
  }, ((e as any).prototype as any).appendInner = function (this: any, r: any): any {
    return (((this as any).left as any).depth as any) >= ((((Math as any).max as any)(((this as any).right as any).depth, (r as any).depth) as any) + (1 as any) as any) ? new (e as any)((this as any).left, new (e as any)((this as any).right, r)) : new (e as any)(this, r);
  }, e;
} as any)(G);
const Jg: number = 500;
class be {
  declare eventCount: any;
  declare items: any;
  [key: string]: any;
  constructor(e: any, t: any) {
    (this as any).items = e, (this as any).eventCount = t;
  }
  popEvent(e: any, t: any): any {
    if (((this as any).eventCount as any) == (0 as any)) return null;
    let r: any = ((this as any).items as any).length;
    for (;; r--) if (((((this as any).items as any).get as any)((r as any) - (1 as any)) as any).selection) {
      --r;
      break;
    }
    let s: any, i: any;
    t && (s = ((this as any).remapping as any)(r, ((this as any).items as any).length), i = ((s as any).maps as any).length);
    let o: any = (e as any).tr,
      l: any,
      a: any,
      c: any = [],
      u: any = [];
    return (((this as any).items as any).forEach as any)((d: any, f: any): any => {
      if (!(d as any).step) {
        s || (s = ((this as any).remapping as any)(r, (f as any) + (1 as any)), i = ((s as any).maps as any).length), i--, ((u as any).push as any)(d);
        return;
      }
      if (s) {
        ((u as any).push as any)(new (Me as any)((d as any).map));
        let h: any = (((d as any).step as any).map as any)(((s as any).slice as any)(i)),
          p: any;
        h && (((o as any).maybeStep as any)(h) as any).doc && (p = (((o as any).mapping as any).maps as any)[((((o as any).mapping as any).maps as any).length as any) - (1 as any)], ((c as any).push as any)(new (Me as any)(p, void 0, void 0, ((c as any).length as any) + ((u as any).length as any)))), i--, p && ((s as any).appendMap as any)(p, i);
      } else ((o as any).maybeStep as any)((d as any).step);
      if ((d as any).selection) return l = s ? (((d as any).selection as any).map as any)(((s as any).slice as any)(i)) : (d as any).selection, a = new (be as any)((((((this as any).items as any).slice as any)(0, r) as any).append as any)(((((u as any).reverse as any)() as any).concat as any)(c)), ((this as any).eventCount as any) - (1 as any)), !1;
    }, ((this as any).items as any).length, 0), {
      remaining: a,
      transform: o,
      selection: l
    };
  }
  addTransform(e: any, t: any, r: any, s: any): any {
    let i: any = [],
      o: any = (this as any).eventCount,
      l: any = (this as any).items,
      a: any = !s && (l as any).length ? ((l as any).get as any)(((l as any).length as any) - (1 as any)) : null;
    for (let u: any = 0; (u as any) < (((e as any).steps as any).length as any); u++) {
      let d: any = ((((e as any).steps as any)[u] as any).invert as any)(((e as any).docs as any)[u]),
        f: any = new (Me as any)((((e as any).mapping as any).maps as any)[u], d, t),
        h: any;
      (h = a && ((a as any).merge as any)(f)) && (f = h, u ? ((i as any).pop as any)() : l = ((l as any).slice as any)(0, ((l as any).length as any) - (1 as any))), ((i as any).push as any)(f), t && (o++, t = void 0), s || (a = f);
    }
    let c: any = (o as any) - ((r as any).depth as any);
    return (c as any) > (Yg as any) && (l = (Gg as any)(l, c), o -= c), new (be as any)(((l as any).append as any)(i), o);
  }
  remapping(e: any, t: any): any {
    let r: any = new (cn as any)();
    return (((this as any).items as any).forEach as any)((s: any, i: any): any => {
      let o: any = ((s as any).mirrorOffset as any) != (null as any) && ((i as any) - ((s as any).mirrorOffset as any) as any) >= (e as any) ? (((r as any).maps as any).length as any) - ((s as any).mirrorOffset as any) : void 0;
      ((r as any).appendMap as any)((s as any).map, o);
    }, e, t), r;
  }
  addMaps(e: any): any {
    return ((this as any).eventCount as any) == (0 as any) ? this : new (be as any)((((this as any).items as any).append as any)(((e as any).map as any)((t: any): any => new (Me as any)(t))), (this as any).eventCount);
  }
  rebased(e: any, t: any): any {
    if (!(this as any).eventCount) return this;
    let r: any = [],
      s: any = ((Math as any).max as any)(0, (((this as any).items as any).length as any) - (t as any)),
      i: any = (e as any).mapping,
      o: any = ((e as any).steps as any).length,
      l: any = (this as any).eventCount;
    (((this as any).items as any).forEach as any)((f: any): any => {
      (f as any).selection && l--;
    }, s);
    let a: any = t;
    (((this as any).items as any).forEach as any)((f: any): any => {
      let h: any = ((i as any).getMirror as any)(--a);
      if ((h as any) == (null as any)) return;
      o = ((Math as any).min as any)(o, h);
      let p: any = ((i as any).maps as any)[h];
      if ((f as any).step) {
        let m: any = ((((e as any).steps as any)[h] as any).invert as any)(((e as any).docs as any)[h]),
          g: any = (f as any).selection && (((f as any).selection as any).map as any)(((i as any).slice as any)((a as any) + (1 as any), h));
        g && l++, ((r as any).push as any)(new (Me as any)(p, m, g));
      } else ((r as any).push as any)(new (Me as any)(p));
    }, s);
    let c: any = [];
    for (let f: any = t; (f as any) < (o as any); f++) ((c as any).push as any)(new (Me as any)(((i as any).maps as any)[f]));
    let u: any = (((((((this as any).items as any).slice as any)(0, s) as any).append as any)(c) as any).append as any)(r),
      d: any = new (be as any)(u, l);
    return (((d as any).emptyItemCount as any)() as any) > (Jg as any) && (d = ((d as any).compress as any)((((this as any).items as any).length as any) - ((r as any).length as any))), d;
  }
  emptyItemCount(): any {
    let e: any = 0;
    return (((this as any).items as any).forEach as any)((t: any): any => {
      (t as any).step || e++;
    }), e;
  }
  compress(e: any = ((this as any).items as any).length): any {
    let t: any = ((this as any).remapping as any)(0, e),
      r: any = ((t as any).maps as any).length,
      s: any = [],
      i: any = 0;
    return (((this as any).items as any).forEach as any)((o: any, l: any): any => {
      if ((l as any) >= (e as any)) ((s as any).push as any)(o), (o as any).selection && i++;else if ((o as any).step) {
        let a: any = (((o as any).step as any).map as any)(((t as any).slice as any)(r)),
          c: any = a && ((a as any).getMap as any)();
        if (r--, c && ((t as any).appendMap as any)(c, r), a) {
          let u: any = (o as any).selection && (((o as any).selection as any).map as any)(((t as any).slice as any)(r));
          u && i++;
          let d: any = new (Me as any)(((c as any).invert as any)(), a, u),
            f: any,
            h: any = ((s as any).length as any) - (1 as any);
          (f = (s as any).length && (((s as any)[h] as any).merge as any)(d)) ? (s as any)[h] = f : ((s as any).push as any)(d);
        }
      } else (o as any).map && r--;
    }, ((this as any).items as any).length, 0), new (be as any)(((G as any).from as any)(((s as any).reverse as any)()), i);
  }
}
(be as any).empty = new (be as any)((G as any).empty, 0);
function Gg(this: any, n: any, e: any): any {
  let t: any;
  return ((n as any).forEach as any)((r: any, s: any): any => {
    if ((r as any).selection && (e-- as any) == (0 as any)) return t = s, !1;
  }), ((n as any).slice as any)(t);
}
class Me {
  declare mirrorOffset: any;
  declare selection: any;
  declare step: any;
  declare map: any;
  [key: string]: any;
  constructor(e: any, t: any, r: any, s: any) {
    (this as any).map = e, (this as any).step = t, (this as any).selection = r, (this as any).mirrorOffset = s;
  }
  merge(e: any): any {
    if ((this as any).step && (e as any).step && !(e as any).selection) {
      let t: any = (((e as any).step as any).merge as any)((this as any).step);
      if (t) return new (Me as any)(((((t as any).getMap as any)() as any).invert as any)(), t, (this as any).selection);
    }
  }
}
class _e {
  declare prevComposition: any;
  declare prevTime: any;
  declare prevRanges: any;
  declare undone: any;
  declare done: any;
  [key: string]: any;
  constructor(e: any, t: any, r: any, s: any, i: any) {
    (this as any).done = e, (this as any).undone = t, (this as any).prevRanges = r, (this as any).prevTime = s, (this as any).prevComposition = i;
  }
}
const Yg: number = 20;
function Xg(this: any, n: any, e: any, t: any, r: any): any {
  let s: any = ((t as any).getMeta as any)(ft),
    i: any;
  if (s) return (s as any).historyState;
  ((t as any).getMeta as any)(Hc) && (n = new (_e as any)((n as any).done, (n as any).undone, null, 0, -1));
  let o: any = ((t as any).getMeta as any)("appendedTransaction");
  if ((((t as any).steps as any).length as any) == (0 as any)) return n;
  if (o && ((o as any).getMeta as any)(ft)) return (((o as any).getMeta as any)(ft) as any).redo ? new (_e as any)((((n as any).done as any).addTransform as any)(t, void 0, r, (zn as any)(e)), (n as any).undone, (il as any)(((t as any).mapping as any).maps), (n as any).prevTime, (n as any).prevComposition) : new (_e as any)((n as any).done, (((n as any).undone as any).addTransform as any)(t, void 0, r, (zn as any)(e)), null, (n as any).prevTime, (n as any).prevComposition);
  if ((((t as any).getMeta as any)("addToHistory") as any) !== (!1 as any) && !(o && (((o as any).getMeta as any)("addToHistory") as any) === (!1 as any))) {
    let l: any = ((t as any).getMeta as any)("composition"),
      a: any = ((n as any).prevTime as any) == (0 as any) || !o && ((n as any).prevComposition as any) != (l as any) && (((n as any).prevTime as any) < ((((t as any).time || 0) as any) - ((r as any).newGroupDelay as any) as any) || !(Qg as any)(t, (n as any).prevRanges)),
      c: any = o ? (hs as any)((n as any).prevRanges, (t as any).mapping) : (il as any)(((t as any).mapping as any).maps);
    return new (_e as any)((((n as any).done as any).addTransform as any)(t, a ? (((e as any).selection as any).getBookmark as any)() : void 0, r, (zn as any)(e)), (be as any).empty, c, (t as any).time, l ?? (n as any).prevComposition);
  } else return (i = ((t as any).getMeta as any)("rebased")) ? new (_e as any)((((n as any).done as any).rebased as any)(t, i), (((n as any).undone as any).rebased as any)(t, i), (hs as any)((n as any).prevRanges, (t as any).mapping), (n as any).prevTime, (n as any).prevComposition) : new (_e as any)((((n as any).done as any).addMaps as any)(((t as any).mapping as any).maps), (((n as any).undone as any).addMaps as any)(((t as any).mapping as any).maps), (hs as any)((n as any).prevRanges, (t as any).mapping), (n as any).prevTime, (n as any).prevComposition);
}
function Qg(this: any, n: any, e: any): any {
  if (!e) return !1;
  if (!(n as any).docChanged) return !0;
  let t: any = !1;
  return (((((n as any).mapping as any).maps as any)[0] as any).forEach as any)((r: any, s: any): any => {
    for (let i: any = 0; (i as any) < ((e as any).length as any); i += 2) (r as any) <= ((e as any)[(i as any) + (1 as any)] as any) && (s as any) >= ((e as any)[i] as any) && (t = !0);
  }), t;
}
function il(this: any, n: any): any {
  let e: any = [];
  for (let t: any = ((n as any).length as any) - (1 as any); (t as any) >= (0 as any) && ((e as any).length as any) == (0 as any); t--) (((n as any)[t] as any).forEach as any)((r: any, s: any, i: any, o: any): any => ((e as any).push as any)(i, o));
  return e;
}
function hs(this: any, n: any, e: any): any {
  if (!n) return null;
  let t: any = [];
  for (let r: any = 0; (r as any) < ((n as any).length as any); r += 2) {
    let s: any = ((e as any).map as any)((n as any)[r], 1),
      i: any = ((e as any).map as any)((n as any)[(r as any) + (1 as any)], -1);
    (s as any) <= (i as any) && ((t as any).push as any)(s, i);
  }
  return t;
}
function Zg(this: any, n: any, e: any, t: any): any {
  let r: any = (zn as any)(e),
    s: any = ((((ft as any).get as any)(e) as any).spec as any).config,
    i: any = (((t ? (n as any).undone : (n as any).done) as any).popEvent as any)(e, r);
  if (!i) return null;
  let o: any = (((i as any).selection as any).resolve as any)(((i as any).transform as any).doc),
    l: any = (((t ? (n as any).done : (n as any).undone) as any).addTransform as any)((i as any).transform, (((e as any).selection as any).getBookmark as any)(), s, r),
    a: any = new (_e as any)(t ? l : (i as any).remaining, t ? (i as any).remaining : l, null, 0, -1);
  return (((((i as any).transform as any).setSelection as any)(o) as any).setMeta as any)(ft, {
    redo: t,
    historyState: a
  });
}
let ps: any = !1,
  ol: any = null;
function zn(this: any, n: any): any {
  let e: any = (n as any).plugins;
  if ((ol as any) != (e as any)) {
    ps = !1, ol = e;
    for (let t: any = 0; (t as any) < ((e as any).length as any); t++) if ((((e as any)[t] as any).spec as any).historyPreserveItems) {
      ps = !0;
      break;
    }
  }
  return ps;
}
function gy(this: any, n: any): any {
  return ((n as any).setMeta as any)(Hc, !0);
}
const ft: any = new (q as any)("history"),
  Hc: any = new (q as any)("closeHistory");
function ey(this: any, n: any = {}): any {
  return n = {
    depth: (n as any).depth || 100,
    newGroupDelay: (n as any).newGroupDelay || 500
  }, new ($ as any)({
    key: ft,
    state: {
      init(): any {
        return new (_e as any)((be as any).empty, (be as any).empty, null, 0, -1);
      },
      apply(e: any, t: any, r: any): any {
        return (Xg as any)(t, r, e, n);
      }
    },
    config: n,
    props: {
      handleDOMEvents: {
        beforeinput(e: any, t: any): any {
          let r: any = (t as any).inputType,
            s: any = (r as any) == ("historyUndo" as any) ? jc : (r as any) == ("historyRedo" as any) ? _c : null;
          return !s || !(e as any).editable ? !1 : (((t as any).preventDefault as any)(), (s as any)((e as any).state, (e as any).dispatch));
        }
      }
    }
  });
}
function Vc(this: any, n: any, e: any): any {
  return (t: any, r: any): any => {
    let s: any = ((ft as any).getState as any)(t);
    if (!s || (((n ? (s as any).undone : (s as any).done) as any).eventCount as any) == (0 as any)) return !1;
    if (r) {
      let i: any = (Zg as any)(s, t, n);
      i && (r as any)(e ? ((i as any).scrollIntoView as any)() : i);
    }
    return !0;
  };
}
const jc: any = (Vc as any)(!1, !0),
  _c: any = (Vc as any)(!0, !0);
((V as any).create as any)({
  name: "characterCount",
  addOptions(): any {
    return {
      limit: null,
      mode: "textSize",
      textCounter: (n: any): any => (n as any).length,
      wordCounter: (n: any): any => (((((n as any).split as any)(" ") as any).filter as any)((e: any): any => (e as any) !== ("" as any)) as any).length
    };
  },
  addStorage(): any {
    return {
      characters: (): any => 0,
      words: (): any => 0
    };
  },
  onBeforeCreate(): any {
    ((this as any).storage as any).characters = (n: any): any => {
      const e: any = n?.node || (((this as any).editor as any).state as any).doc;
      if (((n?.mode || ((this as any).options as any).mode) as any) === ("textSize" as any)) {
        const r: any = ((e as any).textBetween as any)(0, ((e as any).content as any).size, void 0, " ");
        return (((this as any).options as any).textCounter as any)(r);
      }
      return (e as any).nodeSize;
    }, ((this as any).storage as any).words = (n: any): any => {
      const e: any = n?.node || (((this as any).editor as any).state as any).doc,
        t: any = ((e as any).textBetween as any)(0, ((e as any).content as any).size, " ", " ");
      return (((this as any).options as any).wordCounter as any)(t);
    };
  },
  addProseMirrorPlugins(): any {
    let n: any = !1;
    return [new ($ as any)({
      key: new (q as any)("characterCount"),
      appendTransaction: (e: any, t: any, r: any): any => {
        if (n) return;
        const s: any = ((this as any).options as any).limit;
        if ((s as any) == (null as any) || (s as any) === (0 as any)) {
          n = !0;
          return;
        }
        const i: any = (((this as any).storage as any).characters as any)({
          node: (r as any).doc
        });
        if ((i as any) > (s as any)) {
          const o: any = (i as any) - (s as any),
            l: number = 0,
            a: any = o;
          ((console as any).warn as any)(`[CharacterCount] Initial content exceeded limit of ${s} characters. Content was automatically trimmed.`);
          const c: any = (((r as any).tr as any).deleteRange as any)(l, a);
          return n = !0, c;
        }
        n = !0;
      },
      filterTransaction: (e: any, t: any): any => {
        const r: any = ((this as any).options as any).limit;
        if (!(e as any).docChanged || (r as any) === (0 as any) || (r as any) === (null as any) || (r as any) === (void 0 as any)) return !0;
        const s: any = (((this as any).storage as any).characters as any)({
            node: (t as any).doc
          }),
          i: any = (((this as any).storage as any).characters as any)({
            node: (e as any).doc
          });
        if ((i as any) <= (r as any) || (s as any) > (r as any) && (i as any) > (r as any) && (i as any) <= (s as any)) return !0;
        if ((s as any) > (r as any) && (i as any) > (r as any) && (i as any) > (s as any) || !((e as any).getMeta as any)("paste")) return !1;
        const l: any = (((e as any).selection as any).$head as any).pos,
          a: any = (i as any) - (r as any),
          c: any = (l as any) - (a as any),
          u: any = l;
        return ((e as any).deleteRange as any)(c, u), !(((((this as any).storage as any).characters as any)({
          node: (e as any).doc
        }) as any) > (r as any));
      }
    })];
  }
});
var ty: any = ((V as any).create as any)({
  name: "dropCursor",
  addOptions(): any {
    return {
      color: "currentColor",
      width: 1,
      class: void 0
    };
  },
  addProseMirrorPlugins(): any {
    return [($g as any)((this as any).options)];
  }
});
((V as any).create as any)({
  name: "focus",
  addOptions(): any {
    return {
      className: "has-focus",
      mode: "all"
    };
  },
  addProseMirrorPlugins(): any {
    return [new ($ as any)({
      key: new (q as any)("focus"),
      props: {
        decorations: ({
          doc: n,
          selection: e
        }: any): any => {
          const {
              isEditable: t,
              isFocused: r
            }: any = (this as any).editor,
            {
              anchor: s
            }: any = e,
            i: any = [];
          if (!t || !r) return ((B as any).create as any)(n, []);
          let o: any = 0;
          (((this as any).options as any).mode as any) === ("deepest" as any) && ((n as any).descendants as any)((a: any, c: any): any => {
            if ((a as any).isText) return;
            if (!((s as any) >= (c as any) && (s as any) <= (((c as any) + ((a as any).nodeSize as any) as any) - (1 as any) as any))) return !1;
            o += 1;
          });
          let l: any = 0;
          return ((n as any).descendants as any)((a: any, c: any): any => {
            if ((a as any).isText || !((s as any) >= (c as any) && (s as any) <= (((c as any) + ((a as any).nodeSize as any) as any) - (1 as any) as any))) return !1;
            if (l += 1, (((this as any).options as any).mode as any) === ("deepest" as any) && ((o as any) - (l as any) as any) > (0 as any) || (((this as any).options as any).mode as any) === ("shallowest" as any) && (l as any) > (1 as any)) return (((this as any).options as any).mode as any) === ("deepest" as any);
            ((i as any).push as any)(((ne as any).node as any)(c, (c as any) + ((a as any).nodeSize as any), {
              class: ((this as any).options as any).className
            }));
          }), ((B as any).create as any)(n, i);
        }
      }
    })];
  }
});
var ny: any = ((V as any).create as any)({
    name: "gapCursor",
    addProseMirrorPlugins(): any {
      return [(jg as any)()];
    },
    extendNodeSchema(n: any): any {
      var e: any;
      const t: any = {
        name: (n as any).name,
        options: (n as any).options,
        storage: (n as any).storage
      };
      return {
        allowGapCursor: ((e = (P as any)((T as any)(n, "allowGapCursor", t))) as any) != (null as any) ? e : null
      };
    }
  }),
  yy: any = ((V as any).create as any)({
    name: "placeholder",
    addOptions(): any {
      return {
        emptyEditorClass: "is-editor-empty",
        emptyNodeClass: "is-empty",
        placeholder: "Write something \u2026",
        showOnlyWhenEditable: !0,
        showOnlyCurrent: !0,
        includeChildren: !1
      };
    },
    addProseMirrorPlugins(): any {
      return [new ($ as any)({
        key: new (q as any)("placeholder"),
        props: {
          decorations: ({
            doc: n,
            selection: e
          }: any): any => {
            const t: any = ((this as any).editor as any).isEditable || !((this as any).options as any).showOnlyWhenEditable,
              {
                anchor: r
              }: any = e,
              s: any = [];
            if (!t) return null;
            const i: any = ((this as any).editor as any).isEmpty;
            return ((n as any).descendants as any)((o: any, l: any): any => {
              const a: any = (r as any) >= (l as any) && (r as any) <= ((l as any) + ((o as any).nodeSize as any) as any),
                c: any = !(o as any).isLeaf && (Br as any)(o);
              if ((a || !((this as any).options as any).showOnlyCurrent) && c) {
                const u: any = [((this as any).options as any).emptyNodeClass];
                i && ((u as any).push as any)(((this as any).options as any).emptyEditorClass);
                const d: any = ((ne as any).node as any)(l, (l as any) + ((o as any).nodeSize as any), {
                  class: ((u as any).join as any)(" "),
                  "data-placeholder": (typeof ((this as any).options as any).placeholder as any) == ("function" as any) ? (((this as any).options as any).placeholder as any)({
                    editor: (this as any).editor,
                    node: o,
                    pos: l,
                    hasAnchor: a
                  }) : ((this as any).options as any).placeholder
                });
                ((s as any).push as any)(d);
              }
              return ((this as any).options as any).includeChildren;
            }), ((B as any).create as any)(n, s);
          }
        }
      })];
    }
  });
((V as any).create as any)({
  name: "selection",
  addOptions(): any {
    return {
      className: "selection"
    };
  },
  addProseMirrorPlugins(): any {
    const {
      editor: n,
      options: e
    }: any = this;
    return [new ($ as any)({
      key: new (q as any)("selection"),
      props: {
        decorations(t: any): any {
          return ((t as any).selection as any).empty || (n as any).isFocused || !(n as any).isEditable || (Qa as any)((t as any).selection) || ((n as any).view as any).dragging ? null : ((B as any).create as any)((t as any).doc, [((ne as any).inline as any)(((t as any).selection as any).from, ((t as any).selection as any).to, {
            class: (e as any).className
          })]);
        }
      }
    })];
  }
});
function ll(this: any, {
  types: n,
  node: e
}: any): any {
  return e && ((Array as any).isArray as any)(n) && ((n as any).includes as any)((e as any).type) || (e?.type as any) === (n as any);
}
var ry: any = ((V as any).create as any)({
    name: "trailingNode",
    addOptions(): any {
      return {
        node: void 0,
        notAfter: []
      };
    },
    addProseMirrorPlugins(): any {
      var n: any;
      const e: any = new (q as any)((this as any).name),
        t: any = ((this as any).options as any).node || (((n = (((((this as any).editor as any).schema as any).topNodeType as any).contentMatch as any).defaultType) as any) == (null as any) ? void 0 : (n as any).name) || "paragraph",
        r: any = ((((((Object as any).entries as any)((((this as any).editor as any).schema as any).nodes) as any).map as any)(([, s]: any): any => s) as any).filter as any)((s: any): any => (((((((this as any).options as any).notAfter || []) as any).concat as any)(t) as any).includes as any)((s as any).name));
      return [new ($ as any)({
        key: e,
        appendTransaction: (s: any, i: any, o: any): any => {
          const {
              doc: l,
              tr: a,
              schema: c
            }: any = o,
            u: any = ((e as any).getState as any)(o),
            d: any = ((l as any).content as any).size,
            f: any = ((c as any).nodes as any)[t];
          if (u) return ((a as any).insert as any)(d, ((f as any).create as any)());
        },
        state: {
          init: (s: any, i: any): any => {
            const o: any = (((i as any).tr as any).doc as any).lastChild;
            return !(ll as any)({
              node: o,
              types: r
            });
          },
          apply: (s: any, i: any): any => {
            if (!(s as any).docChanged || ((s as any).getMeta as any)("__uniqueIDTransaction")) return i;
            const o: any = ((s as any).doc as any).lastChild;
            return !(ll as any)({
              node: o,
              types: r
            });
          }
        }
      })];
    }
  }),
  sy: any = ((V as any).create as any)({
    name: "undoRedo",
    addOptions(): any {
      return {
        depth: 100,
        newGroupDelay: 500
      };
    },
    addCommands(): any {
      return {
        undo: (): any => ({
          state: n,
          dispatch: e
        }: any): any => (jc as any)(n, e),
        redo: (): any => ({
          state: n,
          dispatch: e
        }: any): any => (_c as any)(n, e)
      };
    },
    addProseMirrorPlugins(): any {
      return [(ey as any)((this as any).options)];
    },
    addKeyboardShortcuts(): any {
      return {
        "Mod-z": (): any => ((((this as any).editor as any).commands as any).undo as any)(),
        "Shift-Mod-z": (): any => ((((this as any).editor as any).commands as any).redo as any)(),
        "Mod-y": (): any => ((((this as any).editor as any).commands as any).redo as any)(),
        "Mod-\u044F": (): any => ((((this as any).editor as any).commands as any).undo as any)(),
        "Shift-Mod-\u044F": (): any => ((((this as any).editor as any).commands as any).redo as any)()
      };
    }
  }),
  iy: any = ((V as any).create as any)({
    name: "starterKit",
    addExtensions(): any {
      var n: any, e: any, t: any, r: any;
      const s: any = [];
      return (((this as any).options as any).bold as any) !== (!1 as any) && ((s as any).push as any)(((yg as any).configure as any)(((this as any).options as any).bold)), (((this as any).options as any).blockquote as any) !== (!1 as any) && ((s as any).push as any)(((fg as any).configure as any)(((this as any).options as any).blockquote)), (((this as any).options as any).bulletList as any) !== (!1 as any) && ((s as any).push as any)(((Tc as any).configure as any)(((this as any).options as any).bulletList)), (((this as any).options as any).code as any) !== (!1 as any) && ((s as any).push as any)(((xg as any).configure as any)(((this as any).options as any).code)), (((this as any).options as any).codeBlock as any) !== (!1 as any) && ((s as any).push as any)(((Cg as any).configure as any)(((this as any).options as any).codeBlock)), (((this as any).options as any).document as any) !== (!1 as any) && ((s as any).push as any)(((Mg as any).configure as any)(((this as any).options as any).document)), (((this as any).options as any).dropcursor as any) !== (!1 as any) && ((s as any).push as any)(((ty as any).configure as any)(((this as any).options as any).dropcursor)), (((this as any).options as any).gapcursor as any) !== (!1 as any) && ((s as any).push as any)(((ny as any).configure as any)(((this as any).options as any).gapcursor)), (((this as any).options as any).hardBreak as any) !== (!1 as any) && ((s as any).push as any)(((Eg as any).configure as any)(((this as any).options as any).hardBreak)), (((this as any).options as any).heading as any) !== (!1 as any) && ((s as any).push as any)(((vg as any).configure as any)(((this as any).options as any).heading)), (((this as any).options as any).undoRedo as any) !== (!1 as any) && ((s as any).push as any)(((sy as any).configure as any)(((this as any).options as any).undoRedo)), (((this as any).options as any).horizontalRule as any) !== (!1 as any) && ((s as any).push as any)(((Tg as any).configure as any)(((this as any).options as any).horizontalRule)), (((this as any).options as any).italic as any) !== (!1 as any) && ((s as any).push as any)(((Ig as any).configure as any)(((this as any).options as any).italic)), (((this as any).options as any).listItem as any) !== (!1 as any) && ((s as any).push as any)(((Ac as any).configure as any)(((this as any).options as any).listItem)), (((this as any).options as any).listKeymap as any) !== (!1 as any) && ((s as any).push as any)(((Pc as any).configure as any)(((n = (this as any).options) as any) == (null as any) ? void 0 : (n as any).listKeymap)), (((this as any).options as any).link as any) !== (!1 as any) && ((s as any).push as any)(((vc as any).configure as any)(((e = (this as any).options) as any) == (null as any) ? void 0 : (e as any).link)), (((this as any).options as any).orderedList as any) !== (!1 as any) && ((s as any).push as any)(((zc as any).configure as any)(((this as any).options as any).orderedList)), (((this as any).options as any).paragraph as any) !== (!1 as any) && ((s as any).push as any)(((Bc as any).configure as any)(((this as any).options as any).paragraph)), (((this as any).options as any).strike as any) !== (!1 as any) && ((s as any).push as any)(((Lg as any).configure as any)(((this as any).options as any).strike)), (((this as any).options as any).text as any) !== (!1 as any) && ((s as any).push as any)(((zg as any).configure as any)(((this as any).options as any).text)), (((this as any).options as any).underline as any) !== (!1 as any) && ((s as any).push as any)(((Bg as any).configure as any)(((t = (this as any).options) as any) == (null as any) ? void 0 : (t as any).underline)), (((this as any).options as any).trailingNode as any) !== (!1 as any) && ((s as any).push as any)(((ry as any).configure as any)(((r = (this as any).options) as any) == (null as any) ? void 0 : (r as any).trailingNode)), s;
    }
  }),
  ky: any = iy;
export { uy as $, La as A, Lu as B, v as C, B as D, cy as E, k as F, Fl as G, P as H, $r as I, T as J, Vh as K, $a as L, L as M, fy as N, ay as O, $ as P, ui as Q, za as R, w as S, N as T, di as U, ly as V, _c as W, jc as X, cg as Y, ug as Z, $p as _, q as a, my as a0, kt as a1, ne as b, de as c, hy as d, dy as e, Kp as f, Gn as g, Se as h, yy as i, V as j, oy as k, td as l, W as m, ky as n, py as o, Np as p, Br as q, Ja as r, sd as s, Ga as t, Kh as u, qh as v, Os as w, Ot as x, O as y, gy as z };
//# debugId=d8dbd570-ddc5-4452-b69d-1377d9d89f0c
