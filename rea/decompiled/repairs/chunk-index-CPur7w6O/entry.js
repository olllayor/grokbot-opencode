import { $a, $p, $t, Be, Br, Bt, Ds, Fa, Ft, Ga, Ha, Hp, Ir, Is, Ja, Jt, Kh, Ks, Lr, Os, P, Pe, Pr, Rl, V, Va, Wa, Xa, Ya, Ze, _, _a, ac as Editable, cc as focusEventsPluginKey, ci, cy, dc as Keymap, dy, et, fc as Paste, fi, hc as Tabindex, ic as Commands, ja, lc as Drop, mi, oc as Delete, pc as TextDirection, pn, sc as ClipboardTextSerializer, uc as FocusEvents, ui, uy } from "./Pp.js";
import { Kp as createInlineMarkdownSpec, Rs as parseIndentedBlocks, _p as createBlockMarkdownSpec, bi as renderNestedMarkdownContent, jp as createAtomBlockMarkdownSpec, ki as serializeAttributes, yi as parseAttributes } from "./Vp.js";
const Pp = {
  get ClipboardTextSerializer() {
    return ClipboardTextSerializer;
  },
  get Commands() {
    return Commands;
  },
  get Delete() {
    return Delete;
  },
  get Drop() {
    return Drop;
  },
  get Editable() {
    return Editable;
  },
  get FocusEvents() {
    return FocusEvents;
  },
  get Keymap() {
    return Keymap;
  },
  get Paste() {
    return Paste;
  },
  get Tabindex() {
    return Tabindex;
  },
  get TextDirection() {
    return TextDirection;
  },
  get focusEventsPluginKey() {
    return focusEventsPluginKey;
  }
};
const Vp = {
  get createAtomBlockMarkdownSpec() {
    return createAtomBlockMarkdownSpec;
  },
  get createBlockMarkdownSpec() {
    return createBlockMarkdownSpec;
  },
  get createInlineMarkdownSpec() {
    return createInlineMarkdownSpec;
  },
  get parseAttributes() {
    return parseAttributes;
  },
  get parseIndentedBlocks() {
    return parseIndentedBlocks;
  },
  get renderNestedMarkdownContent() {
    return renderNestedMarkdownContent;
  },
  get serializeAttributes() {
    return serializeAttributes;
  }
};
!(() => {
  try {
    const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    const n = new e.Error().stack;
    if (n) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[n] = "d8dbd570-ddc5-4452-b69d-1377d9d89f0c";
      e._sentryDebugIdIdentifier = "sentry-dbid-d8dbd570-ddc5-4452-b69d-1377d9d89f0c";
    }
  } catch (e) {}
})();
function constructor(n) {
  this.content = n;
}
constructor.prototype = {
  constructor,
  find(n) {
    for (let e = 0; e < this.content.length; e += 2) {
      if (this.content[e] === n) {
        return e;
      }
    }
    return -1;
  },
  get(n) {
    const e = this.find(n);
    if (e == -1) {
      return undefined;
    }
    return this.content[e + 1];
  },
  update(n, e, t) {
    const r = t && t != n ? this.remove(t) : this;
    const s = r.find(n);
    const i = r.content.slice();
    if (s == -1) {
      i.push(t || n, e);
    } else {
      i[s + 1] = e;
      if (t) {
        i[s] = t;
      }
    }
    return new constructor(i);
  },
  remove(n) {
    const e = this.find(n);
    if (e == -1) {
      return this;
    }
    const t = this.content.slice();
    t.splice(e, 2);
    return new constructor(t);
  },
  addToStart(n, e) {
    return new constructor([n, e].concat(this.remove(n).content));
  },
  addToEnd(n, e) {
    const t = this.remove(n).content.slice();
    t.push(n, e);
    return new constructor(t);
  },
  addBefore(n, e, t) {
    const r = this.remove(e);
    const s = r.content.slice();
    const i = r.find(n);
    s.splice(i == -1 ? s.length : i, 0, e, t);
    return new constructor(s);
  },
  forEach(n) {
    for (let e = 0; e < this.content.length; e += 2) {
      n(this.content[e], this.content[e + 1]);
    }
  },
  prepend(n) {
    n = constructor.from(n);
    if (n.size) {
      return new constructor(n.content.concat(this.subtract(n).content));
    }
    return this;
  },
  append(n) {
    n = constructor.from(n);
    if (n.size) {
      return new constructor(this.subtract(n).content.concat(n.content));
    }
    return this;
  },
  subtract(n) {
    let e = this;
    n = constructor.from(n);
    for (let t = 0; t < n.content.length; t += 2) {
      e = e.remove(n.content[t]);
    }
    return e;
  },
  toObject() {
    const n = {};
    this.forEach((e, t) => {
      n[e] = t;
    });
    return n;
  },
  get size() {
    return this.content.length >> 1;
  }
};
constructor.from = n => {
  if (n instanceof constructor) {
    return n;
  }
  const e = [];
  if (n) {
    for (const t in n) {
      e.push(t, n[t]);
    }
  }
  return new constructor(e);
};
function al(n, e, t) {
  for (let r = 0;; r++) {
    if (r == n.childCount || r == e.childCount) {
      if (n.childCount == e.childCount) {
        return null;
      }
      return t;
    }
    let s = n.child(r);
    let i = e.child(r);
    if (s == i) {
      t += s.nodeSize;
      continue;
    }
    if (!s.sameMarkup(i)) {
      return t;
    }
    if (s.isText && s.text != i.text) {
      for (let o = 0; s.text[o] == i.text[o]; o++) {
        t++;
      }
      return t;
    }
    if (s.content.size || i.content.size) {
      let o = al(s.content, i.content, t + 1);
      if (o != null) {
        return o;
      }
    }
    t += s.nodeSize;
  }
}
function cl(n, e, a_1, b) {
  for (let s = n.childCount, i = e.childCount;;) {
    if (s == 0 || i == 0) {
      if (s == i) {
        return null;
      }
      return {
        a: a_1,
        b
      };
    }
    let o = n.child(--s);
    let l = e.child(--i);
    let a = o.nodeSize;
    if (o == l) {
      a_1 -= a;
      b -= a;
      continue;
    }
    if (!o.sameMarkup(l)) {
      return {
        a: a_1,
        b
      };
    }
    if (o.isText && o.text != l.text) {
      let c = 0;
      let u = Math.min(o.text.length, l.text.length);
      while (c < u && o.text[o.text.length - c - 1] == l.text[l.text.length - c - 1]) {
        c++;
        a_1--;
        b--;
      }
      return {
        a: a_1,
        b
      };
    }
    if (o.content.size || l.content.size) {
      let c = cl(o.content, l.content, a_1 - 1, b - 1);
      if (c) {
        return c;
      }
    }
    a_1 -= a;
    b -= a;
  }
}
class k {
  constructor(e, t) {
    this.content = e;
    this.size = t || 0;
    if (t == null) {
      for (let r = 0; r < e.length; r++) {
        this.size += e[r].nodeSize;
      }
    }
  }
  nodesBetween(e, t, r, s = 0, i) {
    for (let o = 0, l = 0; l < t; o++) {
      let a = this.content[o];
      let c = l + a.nodeSize;
      if (c > e && r(a, s + l, i || null, o) !== false && a.content.size) {
        let u = l + 1;
        a.nodesBetween(Math.max(0, e - u), Math.min(a.content.size, t - u), r, s + u);
      }
      l = c;
    }
  }
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  textBetween(e, t, r, s) {
    let i = "";
    let o = true;
    this.nodesBetween(e, t, (l, a) => {
      let c = l.isText ? l.text.slice(Math.max(e, a) - a, t - a) : l.isLeaf ? s ? typeof s === "function" ? s(l) : s : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : "";
      l.isBlock && (l.isLeaf && c || l.isTextblock) && r && (o ? o = false : i += r);
      i += c;
    }, 0);
    return i;
  }
  append(e) {
    if (!e.size) {
      return this;
    }
    if (!this.size) {
      return e;
    }
    let lastChild = this.lastChild;
    let e_firstChild = e.firstChild;
    let s = this.content.slice();
    let i = 0;
    for (lastChild.isText && lastChild.sameMarkup(e_firstChild) && (s[s.length - 1] = lastChild.withText(lastChild.text + e_firstChild.text), i = 1); i < e.content.length; i++) {
      s.push(e.content[i]);
    }
    return new k(s, this.size + e.size);
  }
  cut(e, t = this.size) {
    if (e == 0 && t == this.size) {
      return this;
    }
    let r = [];
    let s = 0;
    if (t > e) {
      for (let i = 0, o = 0; o < t; i++) {
        let l = this.content[i];
        let a = o + l.nodeSize;
        if (a > e) {
          (o < e || a > t) && (l.isText ? l = l.cut(Math.max(0, e - o), Math.min(l.text.length, t - o)) : l = l.cut(Math.max(0, e - o - 1), Math.min(l.content.size, t - o - 1)));
          r.push(l);
          s += l.nodeSize;
        }
        o = a;
      }
    }
    return new k(r, s);
  }
  cutByIndex(e, t) {
    if (e == t) {
      return k.empty;
    }
    if (e == 0 && t == this.content.length) {
      return this;
    }
    return new k(this.content.slice(e, t));
  }
  replaceChild(e, t) {
    let r = this.content[e];
    if (r == t) {
      return this;
    }
    let s = this.content.slice();
    let i = this.size + t.nodeSize - r.nodeSize;
    s[e] = t;
    return new k(s, i);
  }
  addToStart(e) {
    return new k([e].concat(this.content), this.size + e.nodeSize);
  }
  addToEnd(e) {
    return new k(this.content.concat(e), this.size + e.nodeSize);
  }
  eq(e) {
    if (this.content.length != e.content.length) {
      return false;
    }
    for (let t = 0; t < this.content.length; t++) {
      if (!this.content[t].eq(e.content[t])) {
        return false;
      }
    }
    return true;
  }
  get firstChild() {
    if (this.content.length) {
      return this.content[0];
    }
    return null;
  }
  get lastChild() {
    if (this.content.length) {
      return this.content[this.content.length - 1];
    }
    return null;
  }
  get childCount() {
    return this.content.length;
  }
  child(e) {
    let t = this.content[e];
    if (!t) {
      throw new RangeError(`Index ${e} out of range for ${this}`);
    }
    return t;
  }
  maybeChild(e) {
    return this.content[e] || null;
  }
  forEach(e) {
    for (let t = 0, r = 0; t < this.content.length; t++) {
      let s = this.content[t];
      e(s, r, t);
      r += s.nodeSize;
    }
  }
  findDiffStart(e, t = 0) {
    return al(this, e, t);
  }
  findDiffEnd(e, t = this.size, r = e.size) {
    return cl(this, e, t, r);
  }
  findIndex(e, t = -1) {
    if (e == 0) {
      return Sn(0, e);
    }
    if (e == this.size) {
      return Sn(this.content.length, e);
    }
    if (e > this.size || e < 0) {
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    }
    for (let r = 0, s = 0;; r++) {
      let i = this.child(r);
      let o = s + i.nodeSize;
      if (o >= e) {
        if (o == e || t > 0) {
          return Sn(r + 1, o);
        }
        return Sn(r, s);
      }
      s = o;
    }
  }
  toString() {
    return `<${this.toStringInner()}>`;
  }
  toStringInner() {
    return this.content.join(", ");
  }
  toJSON() {
    if (this.content.length) {
      return this.content.map(e => e.toJSON());
    }
    return null;
  }
  static fromJSON(e, t) {
    if (!t) {
      return k.empty;
    }
    if (!Array.isArray(t)) {
      throw new RangeError("Invalid input for Fragment.fromJSON");
    }
    return new k(t.map(e.nodeFromJSON));
  }
  static fromArray(e) {
    if (!e.length) {
      return k.empty;
    }
    let t;
    let r = 0;
    for (let s = 0; s < e.length; s++) {
      let i = e[s];
      r += i.nodeSize;
      if (s && i.isText && e[s - 1].sameMarkup(i)) {
        if (!t) {
          t = e.slice(0, s);
        }
        t[t.length - 1] = i.withText(t[t.length - 1].text + i.text);
      } else if (t) {
        t.push(i);
      }
    }
    return new k(t || e, r);
  }
  static from(e) {
    if (!e) {
      return k.empty;
    }
    if (e instanceof k) {
      return e;
    }
    if (Array.isArray(e)) {
      return this.fromArray(e);
    }
    if (e.attrs) {
      return new k([e], e.nodeSize);
    }
    throw new RangeError(`Can not convert ${e} to a Fragment${e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""}`);
  }
}
k.empty = new k([], 0);
const Vr = {
  index: 0,
  offset: 0
};
function Sn(n, e) {
  Vr.index = n;
  Vr.offset = e;
  return Vr;
}
function Bn(n, e) {
  if (n === e) {
    return true;
  }
  if (!(n && typeof n === "object") || !(e && typeof e === "object")) {
    return false;
  }
  let t = Array.isArray(n);
  if (Array.isArray(e) != t) {
    return false;
  }
  if (t) {
    if (n.length != e.length) {
      return false;
    }
    for (let r = 0; r < n.length; r++) {
      if (!Bn(n[r], e[r])) {
        return false;
      }
    }
  } else {
    for (let r in n) {
      if (!(r in e) || !Bn(n[r], e[r])) {
        return false;
      }
    }
    for (let r in e) {
      if (!(r in n)) {
        return false;
      }
    }
  }
  return true;
}
export let M = class ms {
  constructor(e, t) {
    this.type = e;
    this.attrs = t;
  }
  addToSet(e) {
    let t;
    let r = false;
    for (let s = 0; s < e.length; s++) {
      let i = e[s];
      if (this.eq(i)) {
        return e;
      }
      if (this.type.excludes(i.type)) {
        if (!t) {
          t = e.slice(0, s);
        }
      } else {
        if (i.type.excludes(this.type)) {
          return e;
        }
        if (!r && i.type.rank > this.type.rank) {
          if (!t) {
            t = e.slice(0, s);
          }
          t.push(this);
          r = true;
        }
        if (t) {
          t.push(i);
        }
      }
    }
    if (!t) {
      t = e.slice();
    }
    if (!r) {
      t.push(this);
    }
    return t;
  }
  removeFromSet(e) {
    for (let t = 0; t < e.length; t++) {
      if (this.eq(e[t])) {
        return e.slice(0, t).concat(e.slice(t + 1));
      }
    }
    return e;
  }
  isInSet(e) {
    for (let t = 0; t < e.length; t++) {
      if (this.eq(e[t])) {
        return true;
      }
    }
    return false;
  }
  eq(e) {
    return this == e || this.type == e.type && Bn(this.attrs, e.attrs);
  }
  toJSON() {
    let e = {
      type: this.type.name
    };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  static fromJSON(e, t) {
    if (!t) {
      throw new RangeError("Invalid input for Mark.fromJSON");
    }
    let r = e.marks[t.type];
    if (!r) {
      throw new RangeError(`There is no mark type ${t.type} in this schema`);
    }
    let s = r.create(t.attrs);
    r.checkAttrs(s.attrs);
    return s;
  }
  static sameSet(e, t) {
    if (e == t) {
      return true;
    }
    if (e.length != t.length) {
      return false;
    }
    for (let r = 0; r < e.length; r++) {
      if (!e[r].eq(t[r])) {
        return false;
      }
    }
    return true;
  }
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0) {
      return ms.none;
    }
    if (e instanceof ms) {
      return [e];
    }
    let t = e.slice();
    t.sort((r, s) => r.type.rank - s.type.rank);
    return t;
  }
};
M.none = [];
class $n extends Error {}
class w {
  constructor(e, t, r) {
    this.content = e;
    this.openStart = t;
    this.openEnd = r;
  }
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  insertAt(e, t) {
    let r = dl(this.content, e + this.openStart, t);
    return r && new w(r, this.openStart, this.openEnd);
  }
  removeBetween(e, t) {
    return new w(ul(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd);
  }
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  toString() {
    return `${this.content}(${this.openStart},${this.openEnd})`;
  }
  toJSON() {
    if (!this.content.size) {
      return null;
    }
    let e = {
      content: this.content.toJSON()
    };
    if (this.openStart > 0) {
      e.openStart = this.openStart;
    }
    if (this.openEnd > 0) {
      e.openEnd = this.openEnd;
    }
    return e;
  }
  static fromJSON(e, t) {
    if (!t) {
      return w.empty;
    }
    let r = t.openStart || 0;
    let s = t.openEnd || 0;
    if (typeof r !== "number" || typeof s !== "number") {
      throw new RangeError("Invalid input for Slice.fromJSON");
    }
    return new w(k.fromJSON(e, t.content), r, s);
  }
  static maxOpen(e, t = true) {
    let r = 0;
    let s = 0;
    for (let i = e.firstChild; i && !i.isLeaf && (t || !i.type.spec.isolating); i = i.firstChild) {
      r++;
    }
    for (let i = e.lastChild; i && !i.isLeaf && (t || !i.type.spec.isolating); i = i.lastChild) {
      s++;
    }
    return new w(e, r, s);
  }
}
w.empty = new w(k.empty, 0, 0);
function ul(content, e, t) {
  let {
    index,
    offset
  } = content.findIndex(e);
  let i = content.maybeChild(index);
  let {
    index: index_1,
    offset: offset_1
  } = content.findIndex(t);
  if (offset == e || i.isText) {
    if (offset_1 != t && !content.child(index_1).isText) {
      throw new RangeError("Removing non-flat range");
    }
    return content.cut(0, e).append(content.cut(t));
  }
  if (index != index_1) {
    throw new RangeError("Removing non-flat range");
  }
  return content.replaceChild(index, i.copy(ul(i.content, e - offset - 1, t - offset - 1)));
}
function dl(content, e, t, r) {
  let {
    index,
    offset
  } = content.findIndex(e);
  let o = content.maybeChild(index);
  if (offset == e || o.isText) {
    return content.cut(0, e).append(t).append(content.cut(e));
  }
  let l = dl(o.content, e - offset - 1, t);
  return l && content.replaceChild(index, o.copy(l));
}
function Wc(n, e, t) {
  if (t.openStart > n.depth) {
    throw new $n("Inserted content deeper than insertion position");
  }
  if (n.depth - t.openStart != e.depth - t.openEnd) {
    throw new $n("Inconsistent open depths");
  }
  return fl(n, e, t, 0);
}
function fl(n, e, t, r) {
  let s = n.index(r);
  let i = n.node(r);
  if (s == e.index(r) && r < n.depth - t.openStart) {
    let o = fl(n, e, t, r + 1);
    return i.copy(i.content.replaceChild(s, o));
  } else if (t.content.size) {
    if (!t.openStart && !t.openEnd && n.depth == r && e.depth == r) {
      let o = n.parent;
      let l = o.content;
      return ct(o, l.cut(0, n.parentOffset).append(t.content).append(l.cut(e.parentOffset)));
    } else {
      let {
        start,
        end
      } = qc(t, n);
      return ct(i, pl(n, start, end, e, r));
    }
  } else {
    return ct(i, Fn(n, e, r));
  }
}
function hl(n, e) {
  if (!e.type.compatibleContent(n.type)) {
    throw new $n(`Cannot join ${e.type.name} onto ${n.type.name}`);
  }
}
function gs(n, e, t) {
  let r = n.node(t);
  hl(r, e.node(t));
  return r;
}
function at(n, e) {
  let t = e.length - 1;
  if (t >= 0 && n.isText && n.sameMarkup(e[t])) {
    e[t] = n.withText(e[t].text + n.text);
  } else {
    e.push(n);
  }
}
function Yt(n, e, t, r) {
  let s = (e || n).node(t);
  let i = 0;
  let o = e ? e.index(t) : s.childCount;
  if (n) {
    i = n.index(t);
    n.depth > t ? i++ : n.textOffset && (at(n.nodeAfter, r), i++);
  }
  for (let l = i; l < o; l++) {
    at(s.child(l), r);
  }
  if (e && e.depth == t && e.textOffset) {
    at(e.nodeBefore, r);
  }
}
function ct(n, e) {
  n.type.checkContent(e);
  return n.copy(e);
}
function pl(n, e, t, r, s) {
  let i = n.depth > s && gs(n, e, s + 1);
  let o = r.depth > s && gs(t, r, s + 1);
  let l = [];
  Yt(null, n, s, l);
  if (i && o && e.index(s) == t.index(s)) {
    hl(i, o);
    at(ct(i, pl(n, e, t, r, s + 1)), l);
  } else {
    if (i) {
      at(ct(i, Fn(n, e, s + 1)), l);
    }
    Yt(e, t, s, l);
    if (o) {
      at(ct(o, Fn(t, r, s + 1)), l);
    }
  }
  Yt(r, null, s, l);
  return new k(l);
}
function Fn(n, e, t) {
  let r = [];
  Yt(null, n, t, r);
  if (n.depth > t) {
    let s = gs(n, e, t + 1);
    at(ct(s, Fn(n, e, t + 1)), r);
  }
  Yt(e, null, t, r);
  return new k(r);
}
function qc(n, e) {
  let t = e.depth - n.openStart;
  let s = e.node(t).copy(n.content);
  for (let i = t - 1; i >= 0; i--) {
    s = e.node(i).copy(k.from(s));
  }
  return {
    start: s.resolveNoCache(n.openStart + t),
    end: s.resolveNoCache(s.content.size - n.openEnd - t)
  };
}
class ln {
  constructor(e, t, r) {
    this.pos = e;
    this.path = t;
    this.parentOffset = r;
    this.depth = t.length / 3 - 1;
  }
  resolveDepth(e) {
    if (e == null) {
      return this.depth;
    }
    if (e < 0) {
      return this.depth + e;
    }
    return e;
  }
  get parent() {
    return this.node(this.depth);
  }
  get doc() {
    return this.node(0);
  }
  node(e) {
    return this.path[this.resolveDepth(e) * 3];
  }
  index(e) {
    return this.path[this.resolveDepth(e) * 3 + 1];
  }
  indexAfter(e) {
    e = this.resolveDepth(e);
    return this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
  }
  start(e) {
    e = this.resolveDepth(e);
    if (e == 0) {
      return 0;
    }
    return this.path[e * 3 - 1] + 1;
  }
  end(e) {
    e = this.resolveDepth(e);
    return this.start(e) + this.node(e).content.size;
  }
  before(e) {
    e = this.resolveDepth(e);
    if (!e) {
      throw new RangeError("There is no position before the top-level node");
    }
    if (e == this.depth + 1) {
      return this.pos;
    }
    return this.path[e * 3 - 1];
  }
  after(e) {
    e = this.resolveDepth(e);
    if (!e) {
      throw new RangeError("There is no position after the top-level node");
    }
    if (e == this.depth + 1) {
      return this.pos;
    }
    return this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
  }
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  get nodeAfter() {
    let parent = this.parent;
    let t = this.index(this.depth);
    if (t == parent.childCount) {
      return null;
    }
    let r = this.pos - this.path[this.path.length - 1];
    let s = parent.child(t);
    if (r) {
      return parent.child(t).cut(r);
    }
    return s;
  }
  get nodeBefore() {
    let e = this.index(this.depth);
    let t = this.pos - this.path[this.path.length - 1];
    if (t) {
      return this.parent.child(e).cut(0, t);
    }
    if (e == 0) {
      return null;
    }
    return this.parent.child(e - 1);
  }
  posAtIndex(e, t) {
    t = this.resolveDepth(t);
    let r = this.path[t * 3];
    let s = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
    for (let i = 0; i < e; i++) {
      s += r.child(i).nodeSize;
    }
    return s;
  }
  marks() {
    let parent = this.parent;
    let t = this.index();
    if (parent.content.size == 0) {
      return M.none;
    }
    if (this.textOffset) {
      return parent.child(t).marks;
    }
    let r = parent.maybeChild(t - 1);
    let s = parent.maybeChild(t);
    if (!r) {
      let l = r;
      r = s;
      s = l;
    }
    let r_marks = r.marks;
    for (let o = 0; o < r_marks.length; o++) {
      if (r_marks[o].type.spec.inclusive === false && (!s || !r_marks[o].isInSet(s.marks))) {
        r_marks = r_marks[o--].removeFromSet(r_marks);
      }
    }
    return r_marks;
  }
  marksAcross(e) {
    let t = this.parent.maybeChild(this.index());
    if (!t || !t.isInline) {
      return null;
    }
    let t_marks = t.marks;
    let s = e.parent.maybeChild(e.index());
    for (let i = 0; i < t_marks.length; i++) {
      if (t_marks[i].type.spec.inclusive === false && (!s || !t_marks[i].isInSet(s.marks))) {
        t_marks = t_marks[i--].removeFromSet(t_marks);
      }
    }
    return t_marks;
  }
  sharedDepth(e) {
    for (let t = this.depth; t > 0; t--) {
      if (this.start(t) <= e && this.end(t) >= e) {
        return t;
      }
    }
    return 0;
  }
  blockRange(e = this, t) {
    if (e.pos < this.pos) {
      return e.blockRange(this);
    }
    for (let r = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); r >= 0; r--) {
      if (e.pos <= this.end(r) && (!t || t(this.node(r)))) {
        return new Hn(this, e, r);
      }
    }
    return null;
  }
  sameParent(e) {
    return this.pos - this.parentOffset == e.pos - e.parentOffset;
  }
  max(e) {
    if (e.pos > this.pos) {
      return e;
    }
    return this;
  }
  min(e) {
    if (e.pos < this.pos) {
      return e;
    }
    return this;
  }
  toString() {
    let e = "";
    for (let t = 1; t <= this.depth; t++) {
      e += `${(e ? "/" : "") + this.node(t).type.name}_${this.index(t - 1)}`;
    }
    return `${e}:${this.parentOffset}`;
  }
  static resolve(e, t) {
    if (!(t >= 0 && t <= e.content.size)) {
      throw new RangeError(`Position ${t} out of range`);
    }
    let r = [];
    let s = 0;
    let i = t;
    for (let o = e;;) {
      let {
        index,
        offset
      } = o.content.findIndex(i);
      let c = i - offset;
      r.push(o, index, s + offset);
      if (!c || (o = o.child(index), o.isText)) {
        break;
      }
      i = c - 1;
      s += offset + 1;
    }
    return new ln(t, r, i);
  }
  static resolveCached(e, t) {
    let r = Di.get(e);
    if (r) {
      for (let i = 0; i < r.elts.length; i++) {
        let elt = r.elts[i];
        if (elt.pos == t) {
          return elt;
        }
      }
    } else {
      Di.set(e, r = new Kc());
    }
    let s = r.elts[r.i] = ln.resolve(e, t);
    r.i = (r.i + 1) % Uc;
    return s;
  }
}
class Kc {
  constructor() {
    this.elts = [];
    this.i = 0;
  }
}
const Uc = 12;
const Di = new WeakMap();
class Hn {
  constructor(e, t, r) {
    this.$from = e;
    this.$to = t;
    this.depth = r;
  }
  get start() {
    return this.$from.before(this.depth + 1);
  }
  get end() {
    return this.$to.after(this.depth + 1);
  }
  get parent() {
    return this.$from.node(this.depth);
  }
  get startIndex() {
    return this.$from.index(this.depth);
  }
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
const Jc = Object.create(null);
class Se {
  constructor(e, t, r, s = M.none) {
    this.type = e;
    this.attrs = t;
    this.marks = s;
    this.content = r || k.empty;
  }
  get children() {
    return this.content.content;
  }
  get nodeSize() {
    if (this.isLeaf) {
      return 1;
    }
    return 2 + this.content.size;
  }
  get childCount() {
    return this.content.childCount;
  }
  child(e) {
    return this.content.child(e);
  }
  maybeChild(e) {
    return this.content.maybeChild(e);
  }
  forEach(e) {
    this.content.forEach(e);
  }
  nodesBetween(e, t, r, s = 0) {
    this.content.nodesBetween(e, t, r, s, this);
  }
  descendants(e) {
    this.nodesBetween(0, this.content.size, e);
  }
  get textContent() {
    if (this.isLeaf && this.type.spec.leafText) {
      return this.type.spec.leafText(this);
    }
    return this.textBetween(0, this.content.size, "");
  }
  textBetween(e, t, r, s) {
    return this.content.textBetween(e, t, r, s);
  }
  get firstChild() {
    return this.content.firstChild;
  }
  get lastChild() {
    return this.content.lastChild;
  }
  eq(e) {
    return this == e || this.sameMarkup(e) && this.content.eq(e.content);
  }
  sameMarkup(e) {
    return this.hasMarkup(e.type, e.attrs, e.marks);
  }
  hasMarkup(e, t, r) {
    return this.type == e && Bn(this.attrs, t || e.defaultAttrs || Jc) && M.sameSet(this.marks, r || M.none);
  }
  copy(e = null) {
    if (e == this.content) {
      return this;
    }
    return new Se(this.type, this.attrs, e, this.marks);
  }
  mark(e) {
    if (e == this.marks) {
      return this;
    }
    return new Se(this.type, this.attrs, this.content, e);
  }
  cut(e, t = this.content.size) {
    if (e == 0 && t == this.content.size) {
      return this;
    }
    return this.copy(this.content.cut(e, t));
  }
  slice(e, t = this.content.size, r = false) {
    if (e == t) {
      return w.empty;
    }
    let s = this.resolve(e);
    let i = this.resolve(t);
    let o = r ? 0 : s.sharedDepth(t);
    let l = s.start(o);
    let c = s.node(o).content.cut(s.pos - l, i.pos - l);
    return new w(c, s.depth - o, i.depth - o);
  }
  replace(e, t, r) {
    return Wc(this.resolve(e), this.resolve(t), r);
  }
  nodeAt(e) {
    for (let t = this;;) {
      let {
        index,
        offset
      } = t.content.findIndex(e);
      t = t.maybeChild(index);
      if (!t) {
        return null;
      }
      if (offset == e || t.isText) {
        return t;
      }
      e -= offset + 1;
    }
  }
  childAfter(e) {
    let {
      index,
      offset
    } = this.content.findIndex(e);
    return {
      node: this.content.maybeChild(index),
      index,
      offset
    };
  }
  childBefore(e) {
    if (e == 0) {
      return {
        node: null,
        index: 0,
        offset: 0
      };
    }
    let {
      index,
      offset
    } = this.content.findIndex(e);
    if (offset < e) {
      return {
        node: this.content.child(index),
        index,
        offset
      };
    }
    let s = this.content.child(index - 1);
    return {
      node: s,
      index: index - 1,
      offset: offset - s.nodeSize
    };
  }
  resolve(e) {
    return ln.resolveCached(this, e);
  }
  resolveNoCache(e) {
    return ln.resolve(this, e);
  }
  rangeHasMark(e, t, r) {
    let s = false;
    if (t > e) {
      this.nodesBetween(e, t, i => {
        if (r.isInSet(i.marks)) {
          s = true;
        }
        return !s;
      });
    }
    return s;
  }
  get isBlock() {
    return this.type.isBlock;
  }
  get isTextblock() {
    return this.type.isTextblock;
  }
  get inlineContent() {
    return this.type.inlineContent;
  }
  get isInline() {
    return this.type.isInline;
  }
  get isText() {
    return this.type.isText;
  }
  get isLeaf() {
    return this.type.isLeaf;
  }
  get isAtom() {
    return this.type.isAtom;
  }
  toString() {
    if (this.type.spec.toDebugString) {
      return this.type.spec.toDebugString(this);
    }
    let name = this.type.name;
    if (this.content.size) {
      name += `(${this.content.toStringInner()})`;
    }
    return ml(this.marks, name);
  }
  contentMatchAt(e) {
    let t = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!t) {
      throw new Error("Called contentMatchAt on a node with invalid content");
    }
    return t;
  }
  canReplace(e, t, r = k.empty, s = 0, i = r.childCount) {
    let o = this.contentMatchAt(e).matchFragment(r, s, i);
    let l = o && o.matchFragment(this.content, t);
    if (!l || !l.validEnd) {
      return false;
    }
    for (let a = s; a < i; a++) {
      if (!this.type.allowsMarks(r.child(a).marks)) {
        return false;
      }
    }
    return true;
  }
  canReplaceWith(e, t, r, s) {
    if (s && !this.type.allowsMarks(s)) {
      return false;
    }
    let i = this.contentMatchAt(e).matchType(r);
    let o = i && i.matchFragment(this.content, t);
    if (o) {
      return o.validEnd;
    }
    return false;
  }
  canAppend(e) {
    if (e.content.size) {
      return this.canReplace(this.childCount, this.childCount, e.content);
    }
    return this.type.compatibleContent(e.type);
  }
  check() {
    this.type.checkContent(this.content);
    this.type.checkAttrs(this.attrs);
    let M_none = M.none;
    for (let t = 0; t < this.marks.length; t++) {
      let mark = this.marks[t];
      mark.type.checkAttrs(mark.attrs);
      M_none = mark.addToSet(M_none);
    }
    if (!M.sameSet(M_none, this.marks)) {
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map(t => t.type.name)}`);
    }
    this.content.forEach(t => t.check());
  }
  toJSON() {
    let e = {
      type: this.type.name
    };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    if (this.content.size) {
      e.content = this.content.toJSON();
    }
    if (this.marks.length) {
      e.marks = this.marks.map(t => t.toJSON());
    }
    return e;
  }
  static fromJSON(e, t) {
    if (!t) {
      throw new RangeError("Invalid input for Node.fromJSON");
    }
    let r;
    if (t.marks) {
      if (!Array.isArray(t.marks)) {
        throw new RangeError("Invalid mark data for Node.fromJSON");
      }
      r = t.marks.map(e.markFromJSON);
    }
    if (t.type == "text") {
      if (typeof t.text !== "string") {
        throw new RangeError("Invalid text node in JSON");
      }
      return e.text(t.text, r);
    }
    let s = k.fromJSON(e, t.content);
    let i = e.nodeType(t.type).create(t.attrs, s, r);
    i.type.checkAttrs(i.attrs);
    return i;
  }
}
Se.prototype.text = undefined;
class Vn extends Se {
  constructor(e, t, r, s) {
    super(e, t, null, s);
    if (!r) {
      throw new RangeError("Empty text nodes are not allowed");
    }
    this.text = r;
  }
  toString() {
    if (this.type.spec.toDebugString) {
      return this.type.spec.toDebugString(this);
    }
    return ml(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, t) {
    return this.text.slice(e, t);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(e) {
    if (e == this.marks) {
      return this;
    }
    return new Vn(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    if (e == this.text) {
      return this;
    }
    return new Vn(this.type, this.attrs, e, this.marks);
  }
  cut(e = 0, t = this.text.length) {
    if (e == 0 && t == this.text.length) {
      return this;
    }
    return this.withText(this.text.slice(e, t));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    e.text = this.text;
    return e;
  }
}
function ml(marks, e) {
  for (let t = marks.length - 1; t >= 0; t--) {
    e = `${marks[t].type.name}(${e})`;
  }
  return e;
}
class ht {
  constructor(e) {
    this.validEnd = e;
    this.next = [];
    this.wrapCache = [];
  }
  static parse(e, t) {
    let r = new Gc(e, t);
    if (r.next == null) {
      return ht.empty;
    }
    let s = gl(r);
    if (r.next) {
      r.err("Unexpected trailing text");
    }
    let i = nu(tu(s));
    ru(i, r);
    return i;
  }
  matchType(e) {
    for (let t = 0; t < this.next.length; t++) {
      if (this.next[t].type == e) {
        return this.next[t].next;
      }
    }
    return null;
  }
  matchFragment(e, t = 0, r = e.childCount) {
    let s = this;
    for (let i = t; s && i < r; i++) {
      s = s.matchType(e.child(i).type);
    }
    return s;
  }
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let {
        type
      } = this.next[e];
      if (!(type.isText || type.hasRequiredAttrs())) {
        return type;
      }
    }
    return null;
  }
  compatible(e) {
    for (let t = 0; t < this.next.length; t++) {
      for (let r = 0; r < e.next.length; r++) {
        if (this.next[t].type == e.next[r].type) {
          return true;
        }
      }
    }
    return false;
  }
  fillBefore(e, t = false, r = 0) {
    let s = [this];
    function i(o, l) {
      let a = o.matchFragment(e, r);
      if (a && (!t || a.validEnd)) {
        return k.from(l.map(c => c.createAndFill()));
      }
      for (let c = 0; c < o.next.length; c++) {
        let {
          type,
          next
        } = o.next[c];
        if (!(type.isText || type.hasRequiredAttrs()) && s.indexOf(next) == -1) {
          s.push(next);
          let f = i(next, l.concat(type));
          if (f) {
            return f;
          }
        }
      }
      return null;
    }
    return i(this, []);
  }
  findWrapping(e) {
    for (let r = 0; r < this.wrapCache.length; r += 2) {
      if (this.wrapCache[r] == e) {
        return this.wrapCache[r + 1];
      }
    }
    let t = this.computeWrapping(e);
    this.wrapCache.push(e, t);
    return t;
  }
  computeWrapping(e) {
    let t = Object.create(null);
    let r = [{
      match: this,
      type: null,
      via: null
    }];
    while (r.length) {
      let via = r.shift();
      let i = via.match;
      if (i.matchType(e)) {
        let o = [];
        for (let l = via; l.type; l = l.via) {
          o.push(l.type);
        }
        return o.reverse();
      }
      for (let o = 0; o < i.next.length; o++) {
        let {
          type,
          next
        } = i.next[o];
        if (!type.isLeaf && !type.hasRequiredAttrs() && !(type.name in t) && (!via.type || next.validEnd)) {
          r.push({
            match: type.contentMatch,
            type,
            via
          });
          t[type.name] = true;
        }
      }
    }
    return null;
  }
  get edgeCount() {
    return this.next.length;
  }
  edge(e) {
    if (e >= this.next.length) {
      throw new RangeError(`There's no ${e}th edge in this content match`);
    }
    return this.next[e];
  }
  toString() {
    let e = [];
    function t(r) {
      e.push(r);
      for (let s = 0; s < r.next.length; s++) {
        if (e.indexOf(r.next[s].next) == -1) {
          t(r.next[s].next);
        }
      }
    }
    t(this);
    return e.map((r, s) => {
      let i = `${s + (r.validEnd ? "*" : " ")} `;
      for (let o = 0; o < r.next.length; o++) {
        i += `${(o ? ", " : "") + r.next[o].type.name}->${e.indexOf(r.next[o].next)}`;
      }
      return i;
    }).join(`
`);
  }
}
ht.empty = new ht(true);
class Gc {
  constructor(e, t) {
    this.string = e;
    this.nodeTypes = t;
    this.inline = null;
    this.pos = 0;
    this.tokens = e.split(/\s*(?=\b|\W|$)/);
    if (this.tokens[this.tokens.length - 1] == "") {
      this.tokens.pop();
    }
    if (this.tokens[0] == "") {
      this.tokens.shift();
    }
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || true);
  }
  err(e) {
    throw new SyntaxError(`${e} (in content expression '${this.string}')`);
  }
}
function gl(n) {
  let e = [];
  do {
    e.push(Yc(n));
  } while (n.eat("|"));
  if (e.length == 1) {
    return e[0];
  }
  return {
    type: "choice",
    exprs: e
  };
}
function Yc(n) {
  let e = [];
  do {
    e.push(Xc(n));
  } while (n.next && n.next != ")" && n.next != "|");
  if (e.length == 1) {
    return e[0];
  }
  return {
    type: "seq",
    exprs: e
  };
}
function Xc(n) {
  let expr = eu(n);
  while (true) {
    if (n.eat("+")) {
      expr = {
        type: "plus",
        expr
      };
    } else if (n.eat("*")) {
      expr = {
        type: "star",
        expr
      };
    } else if (n.eat("?")) {
      expr = {
        type: "opt",
        expr
      };
    } else if (n.eat("{")) {
      expr = Qc(n, expr);
    } else {
      break;
    }
  }
  return expr;
}
function Ii(n) {
  if (/\D/.test(n.next)) {
    n.err(`Expected number, got '${n.next}'`);
  }
  let e = Number(n.next);
  n.pos++;
  return e;
}
function Qc(n, expr) {
  let min = Ii(n);
  let max = min;
  n.eat(",") && (n.next != "}" ? max = Ii(n) : max = -1);
  if (!n.eat("}")) {
    n.err("Unclosed braced range");
  }
  return {
    type: "range",
    min,
    max,
    expr
  };
}
function Zc(n, next) {
  let n_nodeTypes = n.nodeTypes;
  let r = n_nodeTypes[next];
  if (r) {
    return [r];
  }
  let s = [];
  for (let i in n_nodeTypes) {
    let o = n_nodeTypes[i];
    if (o.isInGroup(next)) {
      s.push(o);
    }
  }
  if (s.length == 0) {
    n.err(`No node type or group '${next}' found`);
  }
  return s;
}
function eu(n) {
  if (n.eat("(")) {
    let e = gl(n);
    if (!n.eat(")")) {
      n.err("Missing closing paren");
    }
    return e;
  } else if (/\W/.test(n.next)) {
    n.err(`Unexpected token '${n.next}'`);
  } else {
    let e = Zc(n, n.next).map(t => {
      if (n.inline == null) {
        n.inline = t.isInline;
      } else if (n.inline != t.isInline) {
        n.err("Mixing inline and block content");
      }
      return {
        type: "name",
        value: t
      };
    });
    n.pos++;
    if (e.length == 1) {
      return e[0];
    }
    return {
      type: "choice",
      exprs: e
    };
  }
}
function tu(n) {
  let e = [[]];
  s(i(n, 0), t());
  return e;
  function t() {
    return e.push([]) - 1;
  }
  function r(o, l, term) {
    let c = {
      term,
      to: l
    };
    e[o].push(c);
    return c;
  }
  function s(o, l) {
    o.forEach(a => a.to = l);
  }
  function i(o, l) {
    if (o.type == "choice") {
      return o.exprs.reduce((acc, expr) => acc.concat(i(expr, l)), []);
    }
    if (o.type == "seq") {
      for (let a = 0;; a++) {
        let c = i(o.exprs[a], l);
        if (a == o.exprs.length - 1) {
          return c;
        }
        s(c, l = t());
      }
    } else if (o.type == "star") {
      let a = t();
      r(l, a);
      s(i(o.expr, a), a);
      return [r(a)];
    } else if (o.type == "plus") {
      let a = t();
      s(i(o.expr, l), a);
      s(i(o.expr, a), a);
      return [r(a)];
    } else {
      if (o.type == "opt") {
        return [r(l)].concat(i(o.expr, l));
      }
      if (o.type == "range") {
        let a = l;
        for (let c = 0; c < o.min; c++) {
          let u = t();
          s(i(o.expr, a), u);
          a = u;
        }
        if (o.max == -1) {
          s(i(o.expr, a), a);
        } else {
          for (let c = o.min; c < o.max; c++) {
            let u = t();
            r(a, u);
            s(i(o.expr, a), u);
            a = u;
          }
        }
        return [r(a)];
      } else {
        if (o.type == "name") {
          return [r(l, undefined, o.value)];
        }
        throw new Error("Unknown expr type");
      }
    }
  }
}
function yl(n, e) {
  return e - n;
}
function Ri(n, e) {
  let t = [];
  r(e);
  return t.sort(yl);
  function r(s) {
    let i = n[s];
    if (i.length == 1 && !i[0].term) {
      return r(i[0].to);
    }
    t.push(s);
    for (let o = 0; o < i.length; o++) {
      let {
        term,
        to
      } = i[o];
      if (!term && t.indexOf(to) == -1) {
        r(to);
      }
    }
  }
}
function nu(n) {
  let e = Object.create(null);
  return t(Ri(n, 0));
  function t(r) {
    let s = [];
    r.forEach(o => {
      n[o].forEach(({
        term,
        to
      }) => {
        if (!term) {
          return;
        }
        let c;
        for (let u = 0; u < s.length; u++) {
          if (s[u][0] == term) {
            c = s[u][1];
          }
        }
        Ri(n, to).forEach(u => {
          if (!c) {
            s.push([term, c = []]);
          }
          if (c.indexOf(u) == -1) {
            c.push(u);
          }
        });
      });
    });
    let i = e[r.join(",")] = new ht(r.indexOf(n.length - 1) > -1);
    for (let o = 0; o < s.length; o++) {
      let l = s[o][1].sort(yl);
      i.next.push({
        type: s[o][0],
        next: e[l.join(",")] || t(l)
      });
    }
    return i;
  }
}
function ru(n, e) {
  for (let t = 0, r = [n]; t < r.length; t++) {
    let s = r[t];
    let i = !s.validEnd;
    let o = [];
    for (let l = 0; l < s.next.length; l++) {
      let {
        type,
        next
      } = s.next[l];
      o.push(type.name);
      if (i && !(type.isText || type.hasRequiredAttrs())) {
        i = false;
      }
      if (r.indexOf(next) == -1) {
        r.push(next);
      }
    }
    if (i) {
      e.err(`Only non-generatable nodes (${o.join(", ")}) in a required position (see https://prosemirror.net/docs/guide/#generatable)`);
    }
  }
}
function kl(attrs) {
  let e = Object.create(null);
  for (let t in attrs) {
    let r = attrs[t];
    if (!r.hasDefault) {
      return null;
    }
    e[t] = r.default;
  }
  return e;
}
function bl(attrs, e) {
  let t = Object.create(null);
  for (let r in attrs) {
    let s = e && e[r];
    if (s === undefined) {
      let i = attrs[r];
      if (i.hasDefault) {
        s = i.default;
      } else {
        throw new RangeError(`No value supplied for attribute ${r}`);
      }
    }
    t[r] = s;
  }
  return t;
}
function xl(attrs, e, t, r) {
  for (let s in e) {
    if (!(s in attrs)) {
      throw new RangeError(`Unsupported attribute ${s} for ${t} of type ${s}`);
    }
  }
  for (let s in attrs) {
    let i = attrs[s];
    if (i.validate) {
      i.validate(e[s]);
    }
  }
}
function Sl(n, attrs) {
  let t = Object.create(null);
  if (attrs) {
    for (let r in attrs) {
      t[r] = new iu(n, r, attrs[r]);
    }
  }
  return t;
}
let Pi = class wl {
  constructor(e, t, r) {
    this.name = e;
    this.schema = t;
    this.spec = r;
    this.markSet = null;
    this.groups = r.group ? r.group.split(" ") : [];
    this.attrs = Sl(e, r.attrs);
    this.defaultAttrs = kl(this.attrs);
    this.contentMatch = null;
    this.inlineContent = null;
    this.isBlock = !(r.inline || e == "text");
    this.isText = e == "text";
  }
  get isInline() {
    return !this.isBlock;
  }
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  get isLeaf() {
    return this.contentMatch == ht.empty;
  }
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  isInGroup(e) {
    return this.groups.indexOf(e) > -1;
  }
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  hasRequiredAttrs() {
    for (let e in this.attrs) {
      if (this.attrs[e].isRequired) {
        return true;
      }
    }
    return false;
  }
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  computeAttrs(e) {
    if (!e && this.defaultAttrs) {
      return this.defaultAttrs;
    }
    return bl(this.attrs, e);
  }
  create(e = null, t, r) {
    if (this.isText) {
      throw new Error("NodeType.create can't construct text nodes");
    }
    return new Se(this, this.computeAttrs(e), k.from(t), M.setFrom(r));
  }
  createChecked(e = null, t, r) {
    t = k.from(t);
    this.checkContent(t);
    return new Se(this, this.computeAttrs(e), t, M.setFrom(r));
  }
  createAndFill(e = null, t, r) {
    e = this.computeAttrs(e);
    t = k.from(t);
    if (t.size) {
      let o = this.contentMatch.fillBefore(t);
      if (!o) {
        return null;
      }
      t = o.append(t);
    }
    let s = this.contentMatch.matchFragment(t);
    let i = s && s.fillBefore(k.empty, true);
    if (i) {
      return new Se(this, e, t.append(i), M.setFrom(r));
    }
    return null;
  }
  validContent(e) {
    let t = this.contentMatch.matchFragment(e);
    if (!t || !t.validEnd) {
      return false;
    }
    for (let r = 0; r < e.childCount; r++) {
      if (!this.allowsMarks(e.child(r).marks)) {
        return false;
      }
    }
    return true;
  }
  checkContent(e) {
    if (!this.validContent(e)) {
      throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
    }
  }
  checkAttrs(e) {
    xl(this.attrs, e, "node", this.name);
  }
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  allowsMarks(e) {
    if (this.markSet == null) {
      return true;
    }
    for (let t = 0; t < e.length; t++) {
      if (!this.allowsMarkType(e[t].type)) {
        return false;
      }
    }
    return true;
  }
  allowedMarks(e) {
    if (this.markSet == null) {
      return e;
    }
    let t;
    for (let r = 0; r < e.length; r++) {
      this.allowsMarkType(e[r].type) ? t && t.push(e[r]) : t || (t = e.slice(0, r));
    }
    if (t) {
      if (t.length) {
        return t;
      }
      return M.none;
    }
    return e;
  }
  static compile(e, t) {
    let r = Object.create(null);
    e.forEach((i, o) => r[i] = new wl(i, t, o));
    let s = t.spec.topNode || "doc";
    if (!r[s]) {
      throw new RangeError(`Schema is missing its top node type ('${s}')`);
    }
    if (!r.text) {
      throw new RangeError("Every schema needs a 'text' type");
    }
    for (let i in r.text.attrs) {
      throw new RangeError("The text node type should not have attributes");
    }
    return r;
  }
};
function su(n, e, validate) {
  let r = validate.split("|");
  return s => {
    let i = s === null ? "null" : typeof s;
    if (r.indexOf(i) < 0) {
      throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${n}, got ${i}`);
    }
  };
}
class iu {
  constructor(e, t, r) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(r, "default");
    this.default = r.default;
    this.validate = typeof r.validate === "string" ? su(e, t, r.validate) : r.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class Er {
  constructor(e, t, r, s) {
    this.name = e;
    this.rank = t;
    this.schema = r;
    this.spec = s;
    this.attrs = Sl(e, s.attrs);
    this.excluded = null;
    let i = kl(this.attrs);
    this.instance = i ? new M(this, i) : null;
  }
  create(e = null) {
    if (!e && this.instance) {
      return this.instance;
    }
    return new M(this, bl(this.attrs, e));
  }
  static compile(e, t) {
    let r = Object.create(null);
    let s = 0;
    e.forEach((i, o) => r[i] = new Er(i, s++, t, o));
    return r;
  }
  removeFromSet(e) {
    for (let t = 0; t < e.length; t++) {
      if (e[t].type == this) {
        e = e.slice(0, t).concat(e.slice(t + 1));
        t--;
      }
    }
    return e;
  }
  isInSet(e) {
    for (let t = 0; t < e.length; t++) {
      if (e[t].type == this) {
        return e[t];
      }
    }
  }
  checkAttrs(e) {
    xl(this.attrs, e, "mark", this.name);
  }
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class Cl {
  constructor(e) {
    this.linebreakReplacement = null;
    this.cached = Object.create(null);
    let t = this.spec = {};
    for (let s in e) {
      t[s] = e[s];
    }
    t.nodes = constructor.from(e.nodes);
    t.marks = constructor.from(e.marks || {});
    this.nodes = Pi.compile(this.spec.nodes, this);
    this.marks = Er.compile(this.spec.marks, this);
    let r = Object.create(null);
    for (let s in this.nodes) {
      if (s in this.marks) {
        throw new RangeError(`${s} can not be both a node and a mark`);
      }
      let i = this.nodes[s];
      let o = i.spec.content || "";
      let l = i.spec.marks;
      i.contentMatch = r[o] || (r[o] = ht.parse(o, this.nodes));
      i.inlineContent = i.contentMatch.inlineContent;
      if (i.spec.linebreakReplacement) {
        if (this.linebreakReplacement) {
          throw new RangeError("Multiple linebreak nodes defined");
        }
        if (!i.isInline || !i.isLeaf) {
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        }
        this.linebreakReplacement = i;
      }
      i.markSet = l == "_" ? null : l ? Li(this, l.split(" ")) : l == "" || !i.inlineContent ? [] : null;
    }
    for (let s in this.marks) {
      let i = this.marks[s];
      let o = i.spec.excludes;
      i.excluded = o == null ? [i] : o == "" ? [] : Li(this, o.split(" "));
    }
    this.nodeFromJSON = this.nodeFromJSON.bind(this);
    this.markFromJSON = this.markFromJSON.bind(this);
    this.topNodeType = this.nodes[this.spec.topNode || "doc"];
    this.cached.wrappings = Object.create(null);
  }
  node(e, t = null, r, s) {
    if (typeof e === "string") {
      e = this.nodeType(e);
    } else if (e instanceof Pi) {
      if (e.schema != this) {
        throw new RangeError(`Node type from different schema used (${e.name})`);
      }
    } else {
      throw new RangeError(`Invalid node type: ${e}`);
    }
    return e.createChecked(t, r, s);
  }
  text(e, t) {
    let text = this.nodes.text;
    return new Vn(text, text.defaultAttrs, e, M.setFrom(t));
  }
  mark(e, t) {
    if (typeof e === "string") {
      e = this.marks[e];
    }
    return e.create(t);
  }
  nodeFromJSON(e) {
    return Se.fromJSON(this, e);
  }
  markFromJSON(e) {
    return M.fromJSON(this, e);
  }
  nodeType(e) {
    let t = this.nodes[e];
    if (!t) {
      throw new RangeError(`Unknown node type: ${e}`);
    }
    return t;
  }
}
function Li(n, e) {
  let t = [];
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    let i = n.marks[s];
    let o = i;
    if (i) {
      t.push(i);
    } else {
      for (let l in n.marks) {
        let a = n.marks[l];
        if (s == "_" || a.spec.group && a.spec.group.split(" ").indexOf(s) > -1) {
          t.push(o = a);
        }
      }
    }
    if (!o) {
      throw new SyntaxError(`Unknown mark type: '${e[r]}'`);
    }
  }
  return t;
}
function ou(n) {
  return n.tag != null;
}
function lu(n) {
  return n.style != null;
}
class Le {
  constructor(e, t) {
    this.schema = e;
    this.rules = t;
    this.tags = [];
    this.styles = [];
    let r = this.matchedStyles = [];
    t.forEach(s => {
      if (ou(s)) {
        this.tags.push(s);
      } else if (lu(s)) {
        let i = /[^=]*/.exec(s.style)[0];
        if (r.indexOf(i) < 0) {
          r.push(i);
        }
        this.styles.push(s);
      }
    });
    this.normalizeLists = !this.tags.some(s => {
      if (!/^(ul|ol)\b/.test(s.tag) || !s.node) {
        return false;
      }
      let i = e.nodes[s.node];
      return i.contentMatch.matchType(i);
    });
  }
  parse(e, t = {}) {
    let r = new Bi(this, t, false);
    r.addAll(e, M.none, t.from, t.to);
    return r.finish();
  }
  parseSlice(e, t = {}) {
    let r = new Bi(this, t, true);
    r.addAll(e, M.none, t.from, t.to);
    return w.maxOpen(r.finish());
  }
  matchTag(e, t, r) {
    for (let s = r ? this.tags.indexOf(r) + 1 : 0; s < this.tags.length; s++) {
      let tag = this.tags[s];
      if (uu(e, tag.tag) && (tag.namespace === undefined || e.namespaceURI == tag.namespace) && (!tag.context || t.matchesContext(tag.context))) {
        if (tag.getAttrs) {
          let o = tag.getAttrs(e);
          if (o === false) {
            continue;
          }
          tag.attrs = o || undefined;
        }
        return tag;
      }
    }
  }
  matchStyle(e, t, r, s) {
    for (let i = s ? this.styles.indexOf(s) + 1 : 0; i < this.styles.length; i++) {
      let style = this.styles[i];
      let l = style.style;
      if (!(l.indexOf(e) != 0 || style.context && !r.matchesContext(style.context) || l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != t))) {
        if (style.getAttrs) {
          let a = style.getAttrs(t);
          if (a === false) {
            continue;
          }
          style.attrs = a || undefined;
        }
        return style;
      }
    }
  }
  static schemaRules(e) {
    let t = [];
    function r(s) {
      let i = s.priority ?? 50;
      let o = 0;
      for (; o < t.length; o++) {
        let l = t[o];
        if ((l.priority ?? 50) < i) {
          break;
        }
      }
      t.splice(o, 0, s);
    }
    for (let s in e.marks) {
      let i = e.marks[s].spec.parseDOM;
      if (i) {
        i.forEach(o => {
          r(o = $i(o));
          if (!(o.mark || o.ignore || o.clearMark)) {
            o.mark = s;
          }
        });
      }
    }
    for (let s in e.nodes) {
      let i = e.nodes[s].spec.parseDOM;
      if (i) {
        i.forEach(o => {
          r(o = $i(o));
          if (!(o.node || o.ignore || o.mark)) {
            o.node = s;
          }
        });
      }
    }
    return t;
  }
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new Le(e, Le.schemaRules(e)));
  }
}
const Ml = {
  address: true,
  article: true,
  aside: true,
  blockquote: true,
  canvas: true,
  dd: true,
  div: true,
  dl: true,
  fieldset: true,
  figcaption: true,
  figure: true,
  footer: true,
  form: true,
  h1: true,
  h2: true,
  h3: true,
  h4: true,
  h5: true,
  h6: true,
  header: true,
  hgroup: true,
  hr: true,
  li: true,
  noscript: true,
  ol: true,
  output: true,
  p: true,
  pre: true,
  section: true,
  table: true,
  tfoot: true,
  ul: true
};
const au = {
  head: true,
  noscript: true,
  object: true,
  script: true,
  style: true,
  title: true
};
const El = {
  ol: true,
  ul: true
};
const an = 1;
const ys = 2;
const Xt = 4;
function zi(n, e, t) {
  if (e != null) {
    return (e ? an : 0) | (e === "full" ? ys : 0);
  }
  if (n && n.whitespace == "pre") {
    return an | ys;
  }
  return t & ~Xt;
}
class wn {
  constructor(e, t, r, s, i, o) {
    this.type = e;
    this.attrs = t;
    this.marks = r;
    this.solid = s;
    this.options = o;
    this.content = [];
    this.activeMarks = M.none;
    this.match = i || (o & Xt ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type) {
        return [];
      }
      let t = this.type.contentMatch.fillBefore(k.from(e));
      if (t) {
        this.match = this.type.contentMatch.matchFragment(t);
      } else {
        let r = this.type.contentMatch;
        let s;
        if (s = r.findWrapping(e.type)) {
          this.match = r;
          return s;
        }
        return null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & an)) {
      let r = this.content[this.content.length - 1];
      let s;
      if (r && r.isText && (s = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let i = r;
        if (r.text.length == s[0].length) {
          this.content.pop();
        } else {
          this.content[this.content.length - 1] = i.withText(i.text.slice(0, i.text.length - s[0].length));
        }
      }
    }
    let t = k.from(this.content);
    if (!e && this.match) {
      t = t.append(this.match.fillBefore(k.empty, true));
    }
    if (this.type) {
      return this.type.create(this.attrs, t, this.marks);
    }
    return t;
  }
  inlineContext(e) {
    if (this.type) {
      return this.type.inlineContent;
    }
    if (this.content.length) {
      return this.content[0].isInline;
    }
    return e.parentNode && !Ml.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class Bi {
  constructor(e, t, r) {
    this.parser = e;
    this.options = t;
    this.isOpen = r;
    this.open = 0;
    this.localPreserveWS = false;
    let s = t.topNode;
    let i;
    let o = zi(null, t.preserveWhitespace, 0) | (r ? Xt : 0);
    if (s) {
      i = new wn(s.type, s.attrs, M.none, true, t.topMatch || s.type.contentMatch, o);
    } else if (r) {
      i = new wn(null, null, M.none, true, null, o);
    } else {
      i = new wn(e.schema.topNodeType, null, M.none, true, null, o);
    }
    this.nodes = [i];
    this.find = t.findPositions;
    this.needsBlock = false;
  }
  get top() {
    return this.nodes[this.open];
  }
  addDOM(e, t) {
    if (e.nodeType == 3) {
      this.addTextNode(e, t);
    } else if (e.nodeType == 1) {
      this.addElement(e, t);
    }
  }
  addTextNode(e, t) {
    let e_nodeValue = e.nodeValue;
    let top = this.top;
    let i = top.options & ys ? "full" : this.localPreserveWS || (top.options & an) > 0;
    if (i === "full" || top.inlineContext(e) || /[^ \t\r\n\u000c]/.test(e_nodeValue)) {
      if (i) {
        if (i !== "full") {
          e_nodeValue = e_nodeValue.replace(/\r?\n|\r/g, " ");
        } else {
          e_nodeValue = e_nodeValue.replace(/\r\n?/g, `
`);
        }
      } else {
        e_nodeValue = e_nodeValue.replace(/[ \t\r\n\u000c]+/g, " ");
        if (/^[ \t\r\n\u000c]/.test(e_nodeValue) && this.open == this.nodes.length - 1) {
          let o = top.content[top.content.length - 1];
          let l = e.previousSibling;
          if (!o || l && l.nodeName == "BR" || o.isText && /[ \t\r\n\u000c]$/.test(o.text)) {
            e_nodeValue = e_nodeValue.slice(1);
          }
        }
      }
      if (e_nodeValue) {
        this.insertNode(this.parser.schema.text(e_nodeValue), t, !/\S/.test(e_nodeValue));
      }
      this.findInText(e);
    } else {
      this.findInside(e);
    }
  }
  addElement(e, t, r) {
    let localPreserveWS = this.localPreserveWS;
    let top = this.top;
    if (e.tagName == "PRE" || /pre/.test(e.style && e.style.whiteSpace)) {
      this.localPreserveWS = true;
    }
    let o = e.nodeName.toLowerCase();
    let l;
    if (El.hasOwnProperty(o) && this.parser.normalizeLists) {
      cu(e);
    }
    let a = this.options.ruleFromNode && this.options.ruleFromNode(e) || (l = this.parser.matchTag(e, this, r));
    e: if (a ? a.ignore : au.hasOwnProperty(o)) {
      this.findInside(e);
      this.ignoreFallback(e, t);
    } else if (!a || a.skip || a.closeParent) {
      if (a && a.closeParent) {
        this.open = Math.max(0, this.open - 1);
      } else if (a && a.skip.nodeType) {
        e = a.skip;
      }
      let c;
      let u = this.needsBlock;
      if (Ml.hasOwnProperty(o)) {
        if (top.content.length && top.content[0].isInline && this.open) {
          this.open--;
          top = this.top;
        }
        c = true;
        if (!top.type) {
          this.needsBlock = true;
        }
      } else if (!e.firstChild) {
        this.leafFallback(e, t);
        break e;
      }
      let d = a && a.skip ? t : this.readStyles(e, t);
      if (d) {
        this.addAll(e, d);
      }
      if (c) {
        this.sync(top);
      }
      this.needsBlock = u;
    } else {
      let c = this.readStyles(e, t);
      if (c) {
        this.addElementByRule(e, a, c, a.consuming === false ? l : undefined);
      }
    }
    this.localPreserveWS = localPreserveWS;
  }
  leafFallback(e, t) {
    if (e.nodeName == "BR" && this.top.type && this.top.type.inlineContent) {
      this.addTextNode(e.ownerDocument.createTextNode(`
`), t);
    }
  }
  ignoreFallback(e, t) {
    if (e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent)) {
      this.findPlace(this.parser.schema.text("-"), t, true);
    }
  }
  readStyles({
    style
  }, t) {
    if (style && style.length) {
      for (let s = 0; s < this.parser.matchedStyles.length; s++) {
        let matchedStyle = this.parser.matchedStyles[s];
        let o = style.getPropertyValue(matchedStyle);
        if (o) {
          for (let l;;) {
            let a = this.parser.matchStyle(matchedStyle, o, this, l);
            if (!a) {
              break;
            }
            if (a.ignore) {
              return null;
            }
            if (a.clearMark) {
              t = t.filter(c => !a.clearMark(c));
            } else {
              t = t.concat(this.parser.schema.marks[a.mark].create(a.attrs));
            }
            if (a.consuming === false) {
              l = a;
            } else {
              break;
            }
          }
        }
      }
    }
    return t;
  }
  addElementByRule(e, t, r, s) {
    let i;
    let o;
    if (t.node) {
      o = this.parser.schema.nodes[t.node];
      if (o.isLeaf) {
        if (!this.insertNode(o.create(t.attrs), r, e.nodeName == "BR")) {
          this.leafFallback(e, r);
        }
      } else {
        let a = this.enter(o, t.attrs || null, r, t.preserveWhitespace);
        if (a) {
          i = true;
          r = a;
        }
      }
    } else {
      let a = this.parser.schema.marks[t.mark];
      r = r.concat(a.create(t.attrs));
    }
    let top = this.top;
    if (o && o.isLeaf) {
      this.findInside(e);
    } else if (s) {
      this.addElement(e, r, s);
    } else if (t.getContent) {
      this.findInside(e);
      t.getContent(e, this.parser.schema).forEach(a => this.insertNode(a, r, false));
    } else {
      let a = e;
      if (typeof t.contentElement === "string") {
        a = e.querySelector(t.contentElement);
      } else if (typeof t.contentElement === "function") {
        a = t.contentElement(e);
      } else if (t.contentElement) {
        a = t.contentElement;
      }
      this.findAround(e, a, true);
      this.addAll(a, r);
      this.findAround(e, a, false);
    }
    i && this.sync(top) && this.open--;
  }
  addAll(e, t, r, s) {
    let i = r || 0;
    for (let o = r ? e.childNodes[r] : e.firstChild, l = s == null ? null : e.childNodes[s]; o != l; o = o.nextSibling, ++i) {
      this.findAtPoint(e, i);
      this.addDOM(o, t);
    }
    this.findAtPoint(e, i);
  }
  findPlace(e, t, r) {
    let s;
    let i;
    for (let o = this.open, l = 0; o >= 0; o--) {
      let a = this.nodes[o];
      let c = a.findWrapping(e);
      if (c && (!s || s.length > c.length + l) && (s = c, i = a, !c.length)) {
        break;
      }
      if (a.solid) {
        if (r) {
          break;
        }
        l += 2;
      }
    }
    if (!s) {
      return null;
    }
    this.sync(i);
    for (let o = 0; o < s.length; o++) {
      t = this.enterInner(s[o], null, t, false);
    }
    return t;
  }
  insertNode(e, t, r) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let i = this.textblockFromContext();
      if (i) {
        t = this.enterInner(i, null, t);
      }
    }
    let s = this.findPlace(e, t, r);
    if (s) {
      this.closeExtra();
      let i = this.top;
      if (i.match) {
        i.match = i.match.matchType(e.type);
      }
      let o = M.none;
      for (let l of s.concat(e.marks)) {
        if (i.type ? i.type.allowsMarkType(l.type) : Fi(l.type, e.type)) {
          o = l.addToSet(o);
        }
      }
      i.content.push(e.mark(o));
      return true;
    }
    return false;
  }
  enter(e, t, r, s) {
    let i = this.findPlace(e.create(t), r, false);
    if (i) {
      i = this.enterInner(e, t, r, true, s);
    }
    return i;
  }
  enterInner(e, t, r, s = false, i) {
    this.closeExtra();
    let top = this.top;
    top.match = top.match && top.match.matchType(e);
    let l = zi(e, i, top.options);
    if (top.options & Xt && top.content.length == 0) {
      l |= Xt;
    }
    let M_none = M.none;
    r = r.filter(c => {
      if (top.type ? top.type.allowsMarkType(c.type) : Fi(c.type, e)) {
        M_none = c.addToSet(M_none);
        return false;
      }
      return true;
    });
    this.nodes.push(new wn(e, t, M_none, s, null, l));
    this.open++;
    return r;
  }
  closeExtra(e = false) {
    let t = this.nodes.length - 1;
    if (t > this.open) {
      for (; t > this.open; t--) {
        this.nodes[t - 1].content.push(this.nodes[t].finish(e));
      }
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    this.open = 0;
    this.closeExtra(this.isOpen);
    return this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
  }
  sync(e) {
    for (let t = this.open; t >= 0; t--) {
      if (this.nodes[t] == e) {
        this.open = t;
        return true;
      }
      if (this.localPreserveWS) {
        this.nodes[t].options |= an;
      }
    }
    return false;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let t = this.open; t >= 0; t--) {
      let r = this.nodes[t].content;
      for (let s = r.length - 1; s >= 0; s--) {
        e += r[s].nodeSize;
      }
      t && e++;
    }
    return e;
  }
  findAtPoint(e, t) {
    if (this.find) {
      for (let r = 0; r < this.find.length; r++) {
        if (this.find[r].node == e && this.find[r].offset == t) {
          this.find[r].pos = this.currentPos;
        }
      }
    }
  }
  findInside(e) {
    if (this.find) {
      for (let t = 0; t < this.find.length; t++) {
        if (this.find[t].pos == null && e.nodeType == 1 && e.contains(this.find[t].node)) {
          this.find[t].pos = this.currentPos;
        }
      }
    }
  }
  findAround(e, t, r) {
    if (e != t && this.find) {
      for (let s = 0; s < this.find.length; s++) {
        if (this.find[s].pos == null && e.nodeType == 1 && e.contains(this.find[s].node) && t.compareDocumentPosition(this.find[s].node) & (r ? 2 : 4)) {
          this.find[s].pos = this.currentPos;
        }
      }
    }
  }
  findInText(e) {
    if (this.find) {
      for (let t = 0; t < this.find.length; t++) {
        if (this.find[t].node == e) {
          this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset);
        }
      }
    }
  }
  matchesContext(e) {
    if (e.indexOf("|") > -1) {
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    }
    let t = e.split("/");
    let context = this.options.context;
    let s = !this.isOpen && (!context || context.parent.type == this.nodes[0].type);
    let i = -(context ? context.depth + 1 : 0) + (s ? 0 : 1);
    let o = (l, a) => {
      for (; l >= 0; l--) {
        let c = t[l];
        if (c == "") {
          if (l == t.length - 1 || l == 0) {
            continue;
          }
          for (; a >= i; a--) {
            if (o(l - 1, a)) {
              return true;
            }
          }
          return false;
        } else {
          let u = a > 0 || a == 0 && s ? this.nodes[a].type : context && a >= i ? context.node(a - i).type : null;
          if (!u || u.name != c && !u.isInGroup(c)) {
            return false;
          }
          a--;
        }
      }
      return true;
    };
    return o(t.length - 1, this.open);
  }
  textblockFromContext() {
    let context = this.options.context;
    if (context) {
      for (let t = context.depth; t >= 0; t--) {
        let r = context.node(t).contentMatchAt(context.indexAfter(t)).defaultType;
        if (r && r.isTextblock && r.defaultAttrs) {
          return r;
        }
      }
    }
    for (let t in this.parser.schema.nodes) {
      let r = this.parser.schema.nodes[t];
      if (r.isTextblock && r.defaultAttrs) {
        return r;
      }
    }
  }
}
function cu(n) {
  for (let e = n.firstChild, t = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    if (r && El.hasOwnProperty(r) && t) {
      t.appendChild(e);
      e = t;
    } else if (r == "li") {
      t = e;
    } else if (r) {
      t = null;
    }
  }
}
function uu(n, tag) {
  return (n.matches || n.msMatchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector).call(n, tag);
}
function $i(n) {
  let e = {};
  for (let t in n) {
    e[t] = n[t];
  }
  return e;
}
function Fi(n, e) {
  let nodes = e.schema.nodes;
  for (let r in nodes) {
    let s = nodes[r];
    if (!s.allowsMarkType(n)) {
      continue;
    }
    let i = [];
    let o = l => {
      i.push(l);
      for (let a = 0; a < l.edgeCount; a++) {
        let {
          type,
          next
        } = l.edge(a);
        if (type == e || i.indexOf(next) < 0 && o(next)) {
          return true;
        }
      }
    };
    if (o(s.contentMatch)) {
      return true;
    }
  }
}
export class a1 {
  constructor(e, t) {
    this.nodes = e;
    this.marks = t;
  }
  serializeFragment(e, t = {}, r) {
    if (!r) {
      r = jr(t).createDocumentFragment();
    }
    let s = r;
    let i = [];
    e.forEach(o => {
      if (i.length || o.marks.length) {
        let l = 0;
        let a = 0;
        while (l < i.length && a < o.marks.length) {
          let c = o.marks[a];
          if (!this.marks[c.type.name]) {
            a++;
            continue;
          }
          if (!c.eq(i[l][0]) || c.type.spec.spanning === false) {
            break;
          }
          l++;
          a++;
        }
        while (l < i.length) {
          s = i.pop()[1];
        }
        while (a < o.marks.length) {
          let c = o.marks[a++];
          let u = this.serializeMark(c, o.isInline, t);
          if (u) {
            i.push([c, s]);
            s.appendChild(u.dom);
            s = u.contentDOM || u.dom;
          }
        }
      }
      s.appendChild(this.serializeNodeInner(o, t));
    });
    return r;
  }
  serializeNodeInner(e, t) {
    let {
      dom,
      contentDOM
    } = In(jr(t), this.nodes[e.type.name](e), null, e.attrs);
    if (contentDOM) {
      if (e.isLeaf) {
        throw new RangeError("Content hole not allowed in a leaf node spec");
      }
      this.serializeFragment(e.content, t, contentDOM);
    }
    return dom;
  }
  serializeNode(e, t = {}) {
    let r = this.serializeNodeInner(e, t);
    for (let s = e.marks.length - 1; s >= 0; s--) {
      let i = this.serializeMark(e.marks[s], e.isInline, t);
      if (i) {
        (i.contentDOM || i.dom).appendChild(r);
        r = i.dom;
      }
    }
    return r;
  }
  serializeMark(e, t, r = {}) {
    let s = this.marks[e.type.name];
    return s && In(jr(r), s(e, t), null, e.attrs);
  }
  static renderSpec(e, t, r = null, s) {
    return In(e, t, r, s);
  }
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new a1(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  static nodesFromSchema(e) {
    let t = Hi(e.nodes);
    if (!t.text) {
      t.text = r => r.text;
    }
    return t;
  }
  static marksFromSchema(e) {
    return Hi(e.marks);
  }
}
function Hi(n) {
  let e = {};
  for (let t in n) {
    let r = n[t].spec.toDOM;
    if (r) {
      e[t] = r;
    }
  }
  return e;
}
function jr(n) {
  return n.document || window.document;
}
const Vi = new WeakMap();
function du(n) {
  let e = Vi.get(n);
  if (e === undefined) {
    Vi.set(n, e = fu(n));
  }
  return e;
}
function fu(n) {
  let e = null;
  function t(r) {
    if (r && typeof r === "object") {
      if (Array.isArray(r)) {
        if (typeof r[0] === "string") {
          if (!e) {
            e = [];
          }
          e.push(r);
        } else {
          for (let s = 0; s < r.length; s++) {
            t(r[s]);
          }
        }
      } else {
        for (let s in r) {
          t(r[s]);
        }
      }
    }
  }
  t(n);
  return e;
}
function In(n, e, t, r) {
  if (typeof e === "string") {
    return {
      dom: n.createTextNode(e)
    };
  }
  if (e.nodeType != null) {
    return {
      dom: e
    };
  }
  if (e.dom && e.dom.nodeType != null) {
    return e;
  }
  let s = e[0];
  let i;
  if (typeof s !== "string") {
    throw new RangeError("Invalid array passed to renderSpec");
  }
  if (r && (i = du(r)) && i.indexOf(e) > -1) {
    throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
  }
  let o = s.indexOf(" ");
  if (o > 0) {
    t = s.slice(0, o);
    s = s.slice(o + 1);
  }
  let l;
  let a = t ? n.createElementNS(t, s) : n.createElement(s);
  let c = e[1];
  let u = 1;
  if (c && typeof c === "object" && c.nodeType == null && !Array.isArray(c)) {
    u = 2;
    for (let d in c) {
      if (c[d] != null) {
        let f = d.indexOf(" ");
        if (f > 0) {
          a.setAttributeNS(d.slice(0, f), d.slice(f + 1), c[d]);
        } else {
          a.setAttribute(d, c[d]);
        }
      }
    }
  }
  for (let d = u; d < e.length; d++) {
    let f = e[d];
    if (f === 0) {
      if (d < e.length - 1 || d > u) {
        throw new RangeError("Content hole must be the only child of its parent node");
      }
      return {
        dom: a,
        contentDOM: a
      };
    } else {
      let {
        dom,
        contentDOM
      } = In(n, f, t, r);
      a.appendChild(dom);
      if (contentDOM) {
        if (l) {
          throw new RangeError("Multiple content holes");
        }
        l = contentDOM;
      }
    }
  }
  return {
    dom: a,
    contentDOM: l
  };
}
const vl = 65535;
const Tl = 2 ** 16;
function hu(n, e) {
  return n + e * Tl;
}
function ji(n) {
  return n & vl;
}
function pu(n) {
  return (n - (n & vl)) / Tl;
}
const Al = 1;
const Nl = 2;
const Rn = 4;
const Ol = 8;
class ks {
  constructor(e, t, r) {
    this.pos = e;
    this.delInfo = t;
    this.recover = r;
  }
  get deleted() {
    return (this.delInfo & Ol) > 0;
  }
  get deletedBefore() {
    return (this.delInfo & (Al | Rn)) > 0;
  }
  get deletedAfter() {
    return (this.delInfo & (Nl | Rn)) > 0;
  }
  get deletedAcross() {
    return (this.delInfo & Rn) > 0;
  }
}
class ce {
  constructor(e, t = false) {
    this.ranges = e;
    this.inverted = t;
    if (!e.length && ce.empty) {
      return ce.empty;
    }
  }
  recover(e) {
    let t = 0;
    let r = ji(e);
    if (!this.inverted) {
      for (let s = 0; s < r; s++) {
        t += this.ranges[s * 3 + 2] - this.ranges[s * 3 + 1];
      }
    }
    return this.ranges[r * 3] + t + pu(e);
  }
  mapResult(e, t = 1) {
    return this._map(e, t, false);
  }
  map(e, t = 1) {
    return this._map(e, t, true);
  }
  _map(e, t, r) {
    let s = 0;
    let i = this.inverted ? 2 : 1;
    let o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? s : 0);
      if (a > e) {
        break;
      }
      let c = this.ranges[l + i];
      let u = this.ranges[l + o];
      let d = a + c;
      if (e <= d) {
        let f = c ? e == a ? -1 : e == d ? 1 : t : t;
        let h = a + s + (f < 0 ? 0 : u);
        if (r) {
          return h;
        }
        let p = e == (t < 0 ? a : d) ? null : hu(l / 3, e - a);
        let m = e == a ? Nl : e == d ? Al : Rn;
        if (t < 0 ? e != a : e != d) {
          m |= Ol;
        }
        return new ks(h, m, p);
      }
      s += u - c;
    }
    if (r) {
      return e + s;
    }
    return new ks(e + s, 0, null);
  }
  touches(e, t) {
    let r = 0;
    let s = ji(t);
    let i = this.inverted ? 2 : 1;
    let o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? r : 0);
      if (a > e) {
        break;
      }
      let c = this.ranges[l + i];
      let u = a + c;
      if (e <= u && l == s * 3) {
        return true;
      }
      r += this.ranges[l + o] - c;
    }
    return false;
  }
  forEach(e) {
    let t = this.inverted ? 2 : 1;
    let r = this.inverted ? 1 : 2;
    for (let s = 0, i = 0; s < this.ranges.length; s += 3) {
      let range = this.ranges[s];
      let l = range - (this.inverted ? i : 0);
      let a = range + (this.inverted ? 0 : i);
      let c = this.ranges[s + t];
      let u = this.ranges[s + r];
      e(l, l + c, a, a + u);
      i += u - c;
    }
  }
  invert() {
    return new ce(this.ranges, !this.inverted);
  }
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  static offset(e) {
    if (e == 0) {
      return ce.empty;
    }
    return new ce(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
ce.empty = new ce([]);
class cn {
  constructor(e, t, r = 0, s = e ? e.length : 0) {
    this.mirror = t;
    this.from = r;
    this.to = s;
    this._maps = e || [];
    this.ownData = !(e || t);
  }
  get maps() {
    return this._maps;
  }
  slice(e = 0, t = this.maps.length) {
    return new cn(this._maps, this.mirror, e, t);
  }
  appendMap(e, t) {
    if (!this.ownData) {
      this._maps = this._maps.slice();
      this.mirror = this.mirror && this.mirror.slice();
      this.ownData = true;
    }
    this.to = this._maps.push(e);
    if (t != null) {
      this.setMirror(this._maps.length - 1, t);
    }
  }
  appendMapping(e) {
    for (let t = 0, r = this._maps.length; t < e._maps.length; t++) {
      let s = e.getMirror(t);
      this.appendMap(e._maps[t], s != null && s < t ? r + s : undefined);
    }
  }
  getMirror(e) {
    if (this.mirror) {
      for (let t = 0; t < this.mirror.length; t++) {
        if (this.mirror[t] == e) {
          return this.mirror[t + (t % 2 ? -1 : 1)];
        }
      }
    }
  }
  setMirror(e, t) {
    if (!this.mirror) {
      this.mirror = [];
    }
    this.mirror.push(e, t);
  }
  appendMappingInverted(e) {
    for (let t = e.maps.length - 1, r = this._maps.length + e._maps.length; t >= 0; t--) {
      let s = e.getMirror(t);
      this.appendMap(e._maps[t].invert(), s != null && s > t ? r - s - 1 : undefined);
    }
  }
  invert() {
    let e = new cn();
    e.appendMappingInverted(this);
    return e;
  }
  map(e, t = 1) {
    if (this.mirror) {
      return this._map(e, t, true);
    }
    for (let r = this.from; r < this.to; r++) {
      e = this._maps[r].map(e, t);
    }
    return e;
  }
  mapResult(e, t = 1) {
    return this._map(e, t, false);
  }
  _map(e, t, r) {
    let s = 0;
    for (let i = this.from; i < this.to; i++) {
      let o = this._maps[i];
      let l = o.mapResult(e, t);
      if (l.recover != null) {
        let a = this.getMirror(i);
        if (a != null && a > i && a < this.to) {
          i = a;
          e = this._maps[a].recover(l.recover);
          continue;
        }
      }
      s |= l.delInfo;
      e = l.pos;
    }
    if (r) {
      return e;
    }
    return new ks(e, s, null);
  }
}
const _r = Object.create(null);
class te {
  getMap() {
    return ce.empty;
  }
  merge(e) {
    return null;
  }
  static fromJSON(e, t) {
    if (!t || !t.stepType) {
      throw new RangeError("Invalid input for Step.fromJSON");
    }
    let r = _r[t.stepType];
    if (!r) {
      throw new RangeError(`No step type ${t.stepType} defined`);
    }
    return r.fromJSON(e, t);
  }
  static jsonID(e, t) {
    if (e in _r) {
      throw new RangeError(`Duplicate use of step JSON ID ${e}`);
    }
    _r[e] = t;
    t.prototype.jsonID = e;
    return t;
  }
}
class j {
  constructor(e, t) {
    this.doc = e;
    this.failed = t;
  }
  static ok(e) {
    return new j(e, null);
  }
  static fail(e) {
    return new j(null, e);
  }
  static fromReplace(e, t, r, s) {
    try {
      return j.ok(e.replace(t, r, s));
    } catch (error) {
      if (error instanceof $n) {
        return j.fail(error.message);
      }
      throw error;
    }
  }
}
function Ws(content, e, t) {
  let r = [];
  for (let s = 0; s < content.childCount; s++) {
    let i = content.child(s);
    if (i.content.size) {
      i = i.copy(Ws(i.content, e, i));
    }
    if (i.isInline) {
      i = e(i, t, s);
    }
    r.push(i);
  }
  return k.fromArray(r);
}
class Ke extends te {
  constructor(e, t, r) {
    super();
    this.from = e;
    this.to = t;
    this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to);
    let r = e.resolve(this.from);
    let s = r.node(r.sharedDepth(this.to));
    let i = new w(Ws(t.content, (o, l) => {
      if (!o.isAtom || !l.type.allowsMarkType(this.mark.type)) {
        return o;
      }
      return o.mark(this.mark.addToSet(o.marks));
    }, s), t.openStart, t.openEnd);
    return j.fromReplace(e, this.from, this.to, i);
  }
  invert() {
    return new xe(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1);
    let r = e.mapResult(this.to, -1);
    if (t.deleted && r.deleted || t.pos >= r.pos) {
      return null;
    }
    return new Ke(t.pos, r.pos, this.mark);
  }
  merge(e) {
    if (e instanceof Ke && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from) {
      return new Ke(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark);
    }
    return null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  static fromJSON(e, t) {
    if (typeof t.from !== "number" || typeof t.to !== "number") {
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    }
    return new Ke(t.from, t.to, e.markFromJSON(t.mark));
  }
}
te.jsonID("addMark", Ke);
class xe extends te {
  constructor(e, t, r) {
    super();
    this.from = e;
    this.to = t;
    this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to);
    let r = new w(Ws(t.content, s => s.mark(this.mark.removeFromSet(s.marks)), e), t.openStart, t.openEnd);
    return j.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new Ke(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1);
    let r = e.mapResult(this.to, -1);
    if (t.deleted && r.deleted || t.pos >= r.pos) {
      return null;
    }
    return new xe(t.pos, r.pos, this.mark);
  }
  merge(e) {
    if (e instanceof xe && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from) {
      return new xe(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark);
    }
    return null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  static fromJSON(e, t) {
    if (typeof t.from !== "number" || typeof t.to !== "number") {
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    }
    return new xe(t.from, t.to, e.markFromJSON(t.mark));
  }
}
te.jsonID("removeMark", xe);
class Ue extends te {
  constructor(e, t) {
    super();
    this.pos = e;
    this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t) {
      return j.fail("No node at mark step's position");
    }
    let r = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
    return j.fromReplace(e, this.pos, this.pos + 1, new w(k.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    if (t) {
      let r = this.mark.addToSet(t.marks);
      if (r.length == t.marks.length) {
        for (let s = 0; s < t.marks.length; s++) {
          if (!t.marks[s].isInSet(r)) {
            return new Ue(this.pos, t.marks[s]);
          }
        }
        return new Ue(this.pos, this.mark);
      }
    }
    return new pt(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    if (t.deletedAfter) {
      return null;
    }
    return new Ue(t.pos, this.mark);
  }
  toJSON() {
    return {
      stepType: "addNodeMark",
      pos: this.pos,
      mark: this.mark.toJSON()
    };
  }
  static fromJSON(e, t) {
    if (typeof t.pos !== "number") {
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    }
    return new Ue(t.pos, e.markFromJSON(t.mark));
  }
}
te.jsonID("addNodeMark", Ue);
class pt extends te {
  constructor(e, t) {
    super();
    this.pos = e;
    this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t) {
      return j.fail("No node at mark step's position");
    }
    let r = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
    return j.fromReplace(e, this.pos, this.pos + 1, new w(k.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    if (!t || !this.mark.isInSet(t.marks)) {
      return this;
    }
    return new Ue(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    if (t.deletedAfter) {
      return null;
    }
    return new pt(t.pos, this.mark);
  }
  toJSON() {
    return {
      stepType: "removeNodeMark",
      pos: this.pos,
      mark: this.mark.toJSON()
    };
  }
  static fromJSON(e, t) {
    if (typeof t.pos !== "number") {
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    }
    return new pt(t.pos, e.markFromJSON(t.mark));
  }
}
te.jsonID("removeNodeMark", pt);
class K extends te {
  constructor(e, t, r, s = false) {
    super();
    this.from = e;
    this.to = t;
    this.slice = r;
    this.structure = s;
  }
  apply(e) {
    if (this.structure && bs(e, this.from, this.to)) {
      return j.fail("Structure replace would overwrite content");
    }
    return j.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new ce([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new K(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let t = e.mapResult(this.from, 1);
    let r = e.mapResult(this.to, -1);
    if (t.deletedAcross && r.deletedAcross) {
      return null;
    }
    return new K(t.pos, Math.max(t.pos, r.pos), this.slice, this.structure);
  }
  merge(e) {
    if (!(e instanceof K) || e.structure || this.structure) {
      return null;
    }
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let t = this.slice.size + e.slice.size == 0 ? w.empty : new w(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new K(this.from, this.to + (e.to - e.from), t, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let t = this.slice.size + e.slice.size == 0 ? w.empty : new w(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new K(e.from, this.to, t, this.structure);
    } else {
      return null;
    }
  }
  toJSON() {
    let e = {
      stepType: "replace",
      from: this.from,
      to: this.to
    };
    if (this.slice.size) {
      e.slice = this.slice.toJSON();
    }
    if (this.structure) {
      e.structure = true;
    }
    return e;
  }
  static fromJSON(e, t) {
    if (typeof t.from !== "number" || typeof t.to !== "number") {
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    }
    return new K(t.from, t.to, w.fromJSON(e, t.slice), !!t.structure);
  }
}
te.jsonID("replace", K);
class J extends te {
  constructor(e, t, r, s, i, o, l = false) {
    super();
    this.from = e;
    this.to = t;
    this.gapFrom = r;
    this.gapTo = s;
    this.slice = i;
    this.insert = o;
    this.structure = l;
  }
  apply(e) {
    if (this.structure && (bs(e, this.from, this.gapFrom) || bs(e, this.gapTo, this.to))) {
      return j.fail("Structure gap-replace would overwrite content");
    }
    let t = e.slice(this.gapFrom, this.gapTo);
    if (t.openStart || t.openEnd) {
      return j.fail("Gap is not a flat range");
    }
    let r = this.slice.insertAt(this.insert, t.content);
    if (r) {
      return j.fromReplace(e, this.from, this.to, r);
    }
    return j.fail("Content does not fit in gap");
  }
  getMap() {
    return new ce([this.from, this.gapFrom - this.from, this.insert, this.gapTo, this.to - this.gapTo, this.slice.size - this.insert]);
  }
  invert(e) {
    let t = this.gapTo - this.gapFrom;
    return new J(this.from, this.from + this.slice.size + t, this.from + this.insert, this.from + this.insert + t, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let t = e.mapResult(this.from, 1);
    let r = e.mapResult(this.to, -1);
    let s = this.from == this.gapFrom ? t.pos : e.map(this.gapFrom, -1);
    let i = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
    if (t.deletedAcross && r.deletedAcross || s < t.pos || i > r.pos) {
      return null;
    }
    return new J(t.pos, r.pos, s, i, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    if (this.slice.size) {
      e.slice = this.slice.toJSON();
    }
    if (this.structure) {
      e.structure = true;
    }
    return e;
  }
  static fromJSON(e, t) {
    if (typeof t.from !== "number" || typeof t.to !== "number" || typeof t.gapFrom !== "number" || typeof t.gapTo !== "number" || typeof t.insert !== "number") {
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    }
    return new J(t.from, t.to, t.gapFrom, t.gapTo, w.fromJSON(e, t.slice), t.insert, !!t.structure);
  }
}
te.jsonID("replaceAround", J);
function bs(n, e, t) {
  let r = n.resolve(e);
  let s = t - e;
  let r_depth = r.depth;
  while (s > 0 && r_depth > 0 && r.indexAfter(r_depth) == r.node(r_depth).childCount) {
    r_depth--;
    s--;
  }
  if (s > 0) {
    let o = r.node(r_depth).maybeChild(r.indexAfter(r_depth));
    while (s > 0) {
      if (!o || o.isLeaf) {
        return true;
      }
      o = o.firstChild;
      s--;
    }
  }
  return false;
}
function mu(n, e, t, r) {
  let s = [];
  let i = [];
  let o;
  let l;
  n.doc.nodesBetween(e, t, (a, c, u) => {
    if (!a.isInline) {
      return;
    }
    let a_marks = a.marks;
    if (!r.isInSet(a_marks) && u.type.allowsMarkType(r.type)) {
      let f = Math.max(c, e);
      let h = Math.min(c + a.nodeSize, t);
      let p = r.addToSet(a_marks);
      for (let m = 0; m < a_marks.length; m++) {
        a_marks[m].isInSet(p) || (o && o.to == f && o.mark.eq(a_marks[m]) ? o.to = h : s.push(o = new xe(f, h, a_marks[m])));
      }
      if (l && l.to == f) {
        l.to = h;
      } else {
        i.push(l = new Ke(f, h, r));
      }
    }
  });
  s.forEach(a => n.step(a));
  i.forEach(a => n.step(a));
}
function gu(n, e, t, r) {
  let s = [];
  let step = 0;
  n.doc.nodesBetween(e, t, (o, l) => {
    if (!o.isInline) {
      return;
    }
    step++;
    let a = null;
    if (r instanceof Er) {
      let c = o.marks;
      let u;
      while (u = r.isInSet(c)) {
        (a || (a = [])).push(u);
        c = u.removeFromSet(c);
      }
    } else {
      if (r) {
        if (r.isInSet(o.marks)) {
          a = [r];
        }
      } else {
        a = o.marks;
      }
    }
    if (a && a.length) {
      let c = Math.min(l + o.nodeSize, t);
      for (const style of a) {
        let f;
        for (let h = 0; h < s.length; h++) {
          let p = s[h];
          if (p.step == step - 1 && style.eq(s[h].style)) {
            f = p;
          }
        }
        if (f) {
          f.to = c;
          f.step = step;
        } else {
          s.push({
            style,
            from: Math.max(l, e),
            to: c,
            step
          });
        }
      }
    }
  });
  s.forEach(o => n.step(new xe(o.from, o.to, o.style)));
}
function qs(n, e, t, r = t.contentMatch, s = true) {
  let i = n.doc.nodeAt(e);
  let o = [];
  let l = e + 1;
  for (let a = 0; a < i.childCount; a++) {
    let c = i.child(a);
    let u = l + c.nodeSize;
    let d = r.matchType(c.type);
    if (!d) {
      o.push(new K(l, u, w.empty));
    } else {
      r = d;
      for (let f = 0; f < c.marks.length; f++) {
        if (!t.allowsMarkType(c.marks[f].type)) {
          n.step(new xe(l, u, c.marks[f]));
        }
      }
      if (s && c.isText && t.whitespace != "pre") {
        let f;
        let h = /\r?\n|\r/g;
        let p;
        while (f = h.exec(c.text)) {
          if (!p) {
            p = new w(k.from(t.schema.text(" ", t.allowedMarks(c.marks))), 0, 0);
          }
          o.push(new K(l + f.index, l + f.index + f[0].length, p));
        }
      }
    }
    l = u;
  }
  if (!r.validEnd) {
    let a = r.fillBefore(k.empty, true);
    n.replace(l, l, new w(a, 0, 0));
  }
  for (let a = o.length - 1; a >= 0; a--) {
    n.step(o[a]);
  }
}
function yu(n, e, t) {
  return (e == 0 || n.canReplace(e, n.childCount)) && (t == n.childCount || n.canReplace(0, t));
}
function Ht(n) {
  let t = n.parent.content.cutByIndex(n.startIndex, n.endIndex);
  for (let r = n.depth, s = 0, i = 0;; --r) {
    let o = n.$from.node(r);
    let l = n.$from.index(r) + s;
    let a = n.$to.indexAfter(r) - i;
    if (r < n.depth && o.canReplace(l, a, t)) {
      return r;
    }
    if (r == 0 || o.type.spec.isolating || !yu(o, l, a)) {
      break;
    }
    if (l) {
      s = 1;
    }
    if (a < o.childCount) {
      i = 1;
    }
  }
  return null;
}
function ku(n, {
  $from,
  $to,
  depth
}, t) {
  let o = $from.before(depth + 1);
  let l = $to.after(depth + 1);
  let a = o;
  let c = l;
  let k_empty = k.empty;
  let d = 0;
  for (let p = depth, m = false; p > t; p--) {
    if (m || $from.index(p) > 0) {
      m = true;
      k_empty = k.from($from.node(p).copy(k_empty));
      d++;
    } else {
      a--;
    }
  }
  let k_empty_1 = k.empty;
  let h = 0;
  for (let p = depth, m = false; p > t; p--) {
    if (m || $to.after(p + 1) < $to.end(p)) {
      m = true;
      k_empty_1 = k.from($to.node(p).copy(k_empty_1));
      h++;
    } else {
      c++;
    }
  }
  n.step(new J(a, c, o, l, new w(k_empty.append(k_empty_1), d, h), k_empty.size - d, true));
}
function Su(n, e, t) {
  let k_empty = k.empty;
  for (let o = t.length - 1; o >= 0; o--) {
    if (k_empty.size) {
      let l = t[o].type.contentMatch.matchFragment(k_empty);
      if (!l || !l.validEnd) {
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
      }
    }
    k_empty = k.from(t[o].type.create(t[o].attrs, k_empty));
  }
  let e_start = e.start;
  let e_end = e.end;
  n.step(new J(e_start, e_end, e_start, e_end, new w(k_empty, 0, 0), t.length, true));
}
function wu(n, e, t, r, s) {
  if (!r.isTextblock) {
    throw new RangeError("Type given to setBlockType should be a textblock");
  }
  let length = n.steps.length;
  n.doc.nodesBetween(e, t, (o, l) => {
    let a = typeof s === "function" ? s(o) : s;
    if (o.isTextblock && !o.hasMarkup(r, a) && Cu(n.doc, n.mapping.slice(length).map(l), r)) {
      let c = null;
      if (r.schema.linebreakReplacement) {
        let h = r.whitespace == "pre";
        let p = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
        if (h && !p) {
          c = false;
        } else if (!h && p) {
          c = true;
        }
      }
      if (c === false) {
        Il(n, o, l, length);
      }
      qs(n, n.mapping.slice(length).map(l, 1), r, undefined, c === null);
      let u = n.mapping.slice(length);
      let d = u.map(l, 1);
      let f = u.map(l + o.nodeSize, 1);
      n.step(new J(d, f, d + 1, f - 1, new w(k.from(r.create(a, null, o.marks)), 0, 0), 1, true));
      if (c === true) {
        Dl(n, o, l, length);
      }
      return false;
    }
  });
}
function Dl(n, e, t, r) {
  e.forEach((s, i) => {
    if (s.isText) {
      let o;
      let l = /\r?\n|\r/g;
      while (o = l.exec(s.text)) {
        let a = n.mapping.slice(r).map(t + 1 + i + o.index);
        n.replaceWith(a, a + 1, e.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function Il(n, e, t, r) {
  e.forEach((s, i) => {
    if (s.type == s.type.schema.linebreakReplacement) {
      let o = n.mapping.slice(r).map(t + 1 + i);
      n.replaceWith(o, o + 1, e.type.schema.text(`
`));
    }
  });
}
function Cu(doc, e, t) {
  let r = doc.resolve(e);
  let s = r.index();
  return r.parent.canReplaceWith(s, s + 1, t);
}
function Mu(n, e, t, r, s) {
  let i = n.doc.nodeAt(e);
  if (!i) {
    throw new RangeError("No node at given position");
  }
  if (!t) {
    t = i.type;
  }
  let o = t.create(r, null, s || i.marks);
  if (i.isLeaf) {
    return n.replaceWith(e, e + i.nodeSize, o);
  }
  if (!t.validContent(i.content)) {
    throw new RangeError(`Invalid content for node type ${t.name}`);
  }
  n.step(new J(e, e + i.nodeSize, e + 1, e + i.nodeSize - 1, new w(k.from(o), 0, 0), 1, true));
}
function Ee(doc, e, t = 1, r) {
  let s = doc.resolve(e);
  let i = s.depth - t;
  let o = r && r[r.length - 1] || s.parent;
  if (i < 0 || s.parent.type.spec.isolating || !s.parent.canReplace(s.index(), s.parent.childCount) || !o.type.validContent(s.parent.content.cutByIndex(s.index(), s.parent.childCount))) {
    return false;
  }
  for (let c = s.depth - 1, u = t - 2; c > i; c--, u--) {
    let d = s.node(c);
    let f = s.index(c);
    if (d.type.spec.isolating) {
      return false;
    }
    let h = d.content.cutByIndex(f, d.childCount);
    let p = r && r[u + 1];
    if (p) {
      h = h.replaceChild(0, p.type.create(p.attrs));
    }
    let m = r && r[u] || d;
    if (!d.canReplace(f + 1, d.childCount) || !m.type.validContent(h)) {
      return false;
    }
  }
  let l = s.indexAfter(i);
  let a = r && r[0];
  return s.node(i).canReplaceWith(l, l, a ? a.type : s.node(i + 1).type);
}
function Eu(n, e, t = 1, r) {
  let s = n.doc.resolve(e);
  let k_empty = k.empty;
  let k_empty_1 = k.empty;
  for (let l = s.depth, a = s.depth - t, c = t - 1; l > a; l--, c--) {
    k_empty = k.from(s.node(l).copy(k_empty));
    let u = r && r[c];
    k_empty_1 = k.from(u ? u.type.create(u.attrs, k_empty_1) : s.node(l).copy(k_empty_1));
  }
  n.step(new K(e, e, new w(k_empty.append(k_empty_1), t, t), true));
}
function vr(doc, e, t = -1) {
  let r = doc.resolve(e);
  for (let s = r.depth;; s--) {
    let i;
    let o;
    let l = r.index(s);
    if (s == r.depth) {
      i = r.nodeBefore;
      o = r.nodeAfter;
    } else if (t > 0) {
      i = r.node(s + 1);
      l++;
      o = r.node(s).maybeChild(l);
    } else {
      i = r.node(s).maybeChild(l - 1);
      o = r.node(s + 1);
    }
    if (i && !i.isTextblock && Rl(i, o) && r.node(s).canReplace(l, l + 1)) {
      return e;
    }
    if (s == 0) {
      break;
    }
    e = t < 0 ? r.before(s) : r.after(s);
  }
}
function Tu(n, e, t) {
  let r = null;
  let {
    linebreakReplacement
  } = n.doc.type.schema;
  let i = n.doc.resolve(e - t);
  let type = i.node().type;
  if (linebreakReplacement && type.inlineContent) {
    let u = type.whitespace == "pre";
    let d = !!type.contentMatch.matchType(linebreakReplacement);
    if (u && !d) {
      r = false;
    } else if (!u && d) {
      r = true;
    }
  }
  let length = n.steps.length;
  if (r === false) {
    let u = n.doc.resolve(e + t);
    Il(n, u.node(), u.before(), length);
  }
  if (type.inlineContent) {
    qs(n, e + t - 1, type, i.node().contentMatchAt(i.index()), r == null);
  }
  let a = n.mapping.slice(length);
  let c = a.map(e - t);
  n.step(new K(c, a.map(e + t, -1), w.empty, true));
  if (r === true) {
    let u = n.doc.resolve(c);
    Dl(n, u.node(), u.before(), n.steps.length);
  }
  return n;
}
function Au(doc, e, type) {
  let r = doc.resolve(e);
  if (r.parent.canReplaceWith(r.index(), r.index(), type)) {
    return e;
  }
  if (r.parentOffset == 0) {
    for (let s = r.depth - 1; s >= 0; s--) {
      let i = r.index(s);
      if (r.node(s).canReplaceWith(i, i, type)) {
        return r.before(s + 1);
      }
      if (i > 0) {
        return null;
      }
    }
  }
  if (r.parentOffset == r.parent.content.size) {
    for (let s = r.depth - 1; s >= 0; s--) {
      let i = r.indexAfter(s);
      if (r.node(s).canReplaceWith(i, i, type)) {
        return r.after(s + 1);
      }
      if (i < r.node(s).childCount) {
        return null;
      }
    }
  }
  return null;
}
function Pl(doc, e, t) {
  let r = doc.resolve(e);
  if (!t.content.size) {
    return e;
  }
  let t_content = t.content;
  for (let i = 0; i < t.openStart; i++) {
    t_content = t_content.firstChild.content;
  }
  for (let i = 1; i <= (t.openStart == 0 && t.size ? 2 : 1); i++) {
    for (let o = r.depth; o >= 0; o--) {
      let l = o == r.depth ? 0 : r.pos <= (r.start(o + 1) + r.end(o + 1)) / 2 ? -1 : 1;
      let a = r.index(o) + (l > 0 ? 1 : 0);
      let c = r.node(o);
      let u = false;
      if (i == 1) {
        u = c.canReplace(a, a, t_content);
      } else {
        let d = c.contentMatchAt(a).findWrapping(t_content.firstChild.type);
        u = d && c.canReplaceWith(a, a, d[0]);
      }
      if (u) {
        if (l == 0) {
          return r.pos;
        }
        if (l < 0) {
          return r.before(o + 1);
        }
        return r.after(o + 1);
      }
    }
  }
  return null;
}
function Tr(doc, e, t = e, r = w.empty) {
  if (e == t && !r.size) {
    return null;
  }
  let s = doc.resolve(e);
  let i = doc.resolve(t);
  if (Ll(s, i, r)) {
    return new K(e, t, r);
  }
  return new Nu(s, i, r).fit();
}
function Ll(n, e, t) {
  return !t.openStart && !t.openEnd && n.start() == e.start() && n.parent.canReplace(n.index(), e.index(), t.content);
}
class Nu {
  constructor(e, t, r) {
    this.$from = e;
    this.$to = t;
    this.unplaced = r;
    this.frontier = [];
    this.placed = k.empty;
    for (let s = 0; s <= e.depth; s++) {
      let i = e.node(s);
      this.frontier.push({
        type: i.type,
        match: i.contentMatchAt(e.indexAfter(s))
      });
    }
    for (let s = e.depth; s > 0; s--) {
      this.placed = k.from(e.node(s).copy(this.placed));
    }
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    while (this.unplaced.size) {
      let c = this.findFittable();
      if (c) {
        this.placeNodes(c);
      } else if (!this.openMore()) {
        this.dropNode();
      }
    }
    let e = this.mustMoveInline();
    let t = this.placed.size - this.depth - this.$from.depth;
    let $from = this.$from;
    let s = this.close(e < 0 ? this.$to : $from.doc.resolve(e));
    if (!s) {
      return null;
    }
    let placed = this.placed;
    let r_depth = $from.depth;
    let s_depth = s.depth;
    while (r_depth && s_depth && placed.childCount == 1) {
      placed = placed.firstChild.content;
      r_depth--;
      s_depth--;
    }
    let a = new w(placed, r_depth, s_depth);
    if (e > -1) {
      return new J($from.pos, e, this.$to.pos, this.$to.end(), a, t);
    }
    if (a.size || $from.pos != this.$to.pos) {
      return new K($from.pos, s.pos, a);
    }
    return null;
  }
  findFittable() {
    let openStart = this.unplaced.openStart;
    for (let t = this.unplaced.content, r = 0, s = this.unplaced.openEnd; r < openStart; r++) {
      let i = t.firstChild;
      if (t.childCount > 1) {
        s = 0;
      }
      if (i.type.spec.isolating && s <= r) {
        openStart = r;
        break;
      }
      t = i.content;
    }
    for (let t = 1; t <= 2; t++) {
      for (let sliceDepth = t == 1 ? openStart : this.unplaced.openStart; sliceDepth >= 0; sliceDepth--) {
        let s;
        let parent = null;
        if (sliceDepth) {
          parent = Wr(this.unplaced.content, sliceDepth - 1).firstChild;
          s = parent.content;
        } else {
          s = this.unplaced.content;
        }
        let o = s.firstChild;
        for (let frontierDepth = this.depth; frontierDepth >= 0; frontierDepth--) {
          let {
            type,
            match
          } = this.frontier[frontierDepth];
          let wrap;
          let inject = null;
          if (t == 1 && (o ? match.matchType(o.type) || (inject = match.fillBefore(k.from(o), false)) : parent && type.compatibleContent(parent.type))) {
            return {
              sliceDepth,
              frontierDepth,
              parent,
              inject
            };
          }
          if (t == 2 && o && (wrap = match.findWrapping(o.type))) {
            return {
              sliceDepth,
              frontierDepth,
              parent,
              wrap
            };
          }
          if (parent && match.matchType(parent.type)) {
            break;
          }
        }
      }
    }
  }
  openMore() {
    let {
      content,
      openStart,
      openEnd
    } = this.unplaced;
    let s = Wr(content, openStart);
    if (!s.childCount || s.firstChild.isLeaf) {
      return false;
    }
    this.unplaced = new w(content, openStart + 1, Math.max(openEnd, s.size + openStart >= content.size - openEnd ? openStart + 1 : 0));
    return true;
  }
  dropNode() {
    let {
      content,
      openStart,
      openEnd
    } = this.unplaced;
    let s = Wr(content, openStart);
    if (s.childCount <= 1 && openStart > 0) {
      let i = content.size - openStart <= openStart + s.size;
      this.unplaced = new w(qt(content, openStart - 1, 1), openStart - 1, i ? openStart - 1 : openEnd);
    } else {
      this.unplaced = new w(qt(content, openStart, 1), openStart, openEnd);
    }
  }
  placeNodes({
    sliceDepth,
    frontierDepth,
    parent,
    inject,
    wrap
  }) {
    while (this.depth > frontierDepth) {
      this.closeFrontierNode();
    }
    if (wrap) {
      for (let m = 0; m < wrap.length; m++) {
        this.openFrontierNode(wrap[m]);
      }
    }
    let unplaced = this.unplaced;
    let l = parent ? parent.content : unplaced.content;
    let a = unplaced.openStart - sliceDepth;
    let c = 0;
    let u = [];
    let {
      match,
      type
    } = this.frontier[frontierDepth];
    if (inject) {
      for (let m = 0; m < inject.childCount; m++) {
        u.push(inject.child(m));
      }
      match = match.matchFragment(inject);
    }
    let h = l.size + sliceDepth - (unplaced.content.size - unplaced.openEnd);
    while (c < l.childCount) {
      let m = l.child(c);
      let g = match.matchType(m.type);
      if (!g) {
        break;
      }
      c++;
      if (c > 1 || a == 0 || m.content.size) {
        match = g;
        u.push(zl(m.mark(type.allowedMarks(m.marks)), c == 1 ? a : 0, c == l.childCount ? h : -1));
      }
    }
    let p = c == l.childCount;
    if (!p) {
      h = -1;
    }
    this.placed = Kt(this.placed, frontierDepth, k.from(u));
    this.frontier[frontierDepth].match = match;
    if (p && h < 0 && parent && parent.type == this.frontier[this.depth].type && this.frontier.length > 1) {
      this.closeFrontierNode();
    }
    for (let m = 0, g = l; m < h; m++) {
      let y = g.lastChild;
      this.frontier.push({
        type: y.type,
        match: y.contentMatchAt(y.childCount)
      });
      g = y.content;
    }
    this.unplaced = p ? sliceDepth == 0 ? w.empty : new w(qt(unplaced.content, sliceDepth - 1, 1), sliceDepth - 1, h < 0 ? unplaced.openEnd : sliceDepth - 1) : new w(qt(unplaced.content, sliceDepth, c), unplaced.openStart, unplaced.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock) {
      return -1;
    }
    let e = this.frontier[this.depth];
    let t;
    if (!e.type.isTextblock || !qr(this.$to, this.$to.depth, e.type, e.match, false) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth) {
      return -1;
    }
    let {
      depth
    } = this.$to;
    let s = this.$to.after(depth);
    while (depth > 1 && s == this.$to.end(--depth)) {
      ++s;
    }
    return s;
  }
  findCloseLevel(e) {
    e: for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
      let {
        match,
        type
      } = this.frontier[t];
      let i = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1));
      let fit = qr(e, t, type, match, i);
      if (fit) {
        for (let l = t - 1; l >= 0; l--) {
          let {
            match: match_1,
            type: type_1
          } = this.frontier[l];
          let u = qr(e, l, type_1, match_1, true);
          if (!u || u.childCount) {
            continue e;
          }
        }
        return {
          depth: t,
          fit,
          move: i ? e.doc.resolve(e.after(t + 1)) : e
        };
      }
    }
  }
  close(e) {
    let t = this.findCloseLevel(e);
    if (!t) {
      return null;
    }
    while (this.depth > t.depth) {
      this.closeFrontierNode();
    }
    if (t.fit.childCount) {
      this.placed = Kt(this.placed, t.depth, t.fit);
    }
    e = t.move;
    for (let r = t.depth + 1; r <= e.depth; r++) {
      let s = e.node(r);
      let i = s.type.contentMatch.fillBefore(s.content, true, e.index(r));
      this.openFrontierNode(s.type, s.attrs, i);
    }
    return e;
  }
  openFrontierNode(e, t = null, r) {
    let s = this.frontier[this.depth];
    s.match = s.match.matchType(e);
    this.placed = Kt(this.placed, this.depth, k.from(e.create(t, r)));
    this.frontier.push({
      type: e,
      match: e.contentMatch
    });
  }
  closeFrontierNode() {
    let t = this.frontier.pop().match.fillBefore(k.empty, true);
    if (t.childCount) {
      this.placed = Kt(this.placed, this.frontier.length, t);
    }
  }
}
function qt(content, e, t) {
  if (e == 0) {
    return content.cutByIndex(t, content.childCount);
  }
  return content.replaceChild(0, content.firstChild.copy(qt(content.firstChild.content, e - 1, t)));
}
function Kt(n, e, t) {
  if (e == 0) {
    return n.append(t);
  }
  return n.replaceChild(n.childCount - 1, n.lastChild.copy(Kt(n.lastChild.content, e - 1, t)));
}
function Wr(n, e) {
  for (let t = 0; t < e; t++) {
    n = n.firstChild.content;
  }
  return n;
}
function zl(n, e, t) {
  if (e <= 0) {
    return n;
  }
  let n_content = n.content;
  if (e > 1) {
    n_content = n_content.replaceChild(0, zl(n_content.firstChild, e - 1, n_content.childCount == 1 ? t - 1 : 0));
  }
  if (e > 0) {
    n_content = n.type.contentMatch.fillBefore(n_content).append(n_content);
    if (t <= 0) {
      n_content = n_content.append(n.type.contentMatch.matchFragment(n_content).fillBefore(k.empty, true));
    }
  }
  return n.copy(n_content);
}
function qr(n, e, type, match, s) {
  let i = n.node(e);
  let o = s ? n.indexAfter(e) : n.index(e);
  if (o == i.childCount && !type.compatibleContent(i.type)) {
    return null;
  }
  let l = match.fillBefore(i.content, true, o);
  if (l && !Ou(type, i.content, o)) {
    return l;
  }
  return null;
}
function Ou(type, content, t) {
  for (let r = t; r < content.childCount; r++) {
    if (!type.allowsMarks(content.child(r).marks)) {
      return true;
    }
  }
  return false;
}
function Du(type) {
  return type.spec.defining || type.spec.definingForContent;
}
function Iu(n, e, t, r) {
  if (!r.size) {
    return n.deleteRange(e, t);
  }
  let s = n.doc.resolve(e);
  let i = n.doc.resolve(t);
  if (Ll(s, i, r)) {
    return n.step(new K(e, t, r));
  }
  let o = $l(s, i);
  if (o[o.length - 1] == 0) {
    o.pop();
  }
  let l = -(s.depth + 1);
  o.unshift(l);
  for (let f = s.depth, h = s.pos - 1; f > 0; f--, h--) {
    let p = s.node(f).type.spec;
    if (p.defining || p.definingAsContext || p.isolating) {
      break;
    }
    if (o.indexOf(f) > -1) {
      l = f;
    } else if (s.before(f) == h) {
      o.splice(1, 0, -f);
    }
  }
  let a = o.indexOf(l);
  let c = [];
  let r_openStart = r.openStart;
  for (let f = r.content, h = 0;; h++) {
    let p = f.firstChild;
    c.push(p);
    if (h == r.openStart) {
      break;
    }
    f = p.content;
  }
  for (let f = r_openStart - 1; f >= 0; f--) {
    let h = c[f];
    let p = Du(h.type);
    if (p && !h.sameMarkup(s.node(Math.abs(l) - 1))) {
      r_openStart = f;
    } else if (p || !h.type.isTextblock) {
      break;
    }
  }
  for (let f = r.openStart; f >= 0; f--) {
    let h = (f + r_openStart + 1) % (r.openStart + 1);
    let p = c[h];
    if (p) {
      for (let m = 0; m < o.length; m++) {
        let g = o[(m + a) % o.length];
        let y = true;
        if (g < 0) {
          y = false;
          g = -g;
        }
        let b = s.node(g - 1);
        let C = s.index(g - 1);
        if (b.canReplaceWith(C, C, p.type, p.marks)) {
          return n.replace(s.before(g), y ? i.after(g) : t, new w(Bl(r.content, 0, r.openStart, h), h, r.openEnd));
        }
      }
    }
  }
  let length = n.steps.length;
  for (let f = o.length - 1; f >= 0 && (n.replace(e, t, r), !(n.steps.length > length)); f--) {
    let h = o[f];
    if (!(h < 0)) {
      e = s.before(h);
      t = i.after(h);
    }
  }
}
function Bl(n, e, t, r, s) {
  if (e < t) {
    let i = n.firstChild;
    n = n.replaceChild(0, i.copy(Bl(i.content, e + 1, t, r, i)));
  }
  if (e > r) {
    let i = s.contentMatchAt(0);
    let o = i.fillBefore(n).append(n);
    n = o.append(i.matchFragment(o).fillBefore(k.empty, true));
  }
  return n;
}
function Ru(n, e, t, r) {
  if (!r.isInline && e == t && n.doc.resolve(e).parent.content.size) {
    let s = Au(n.doc, e, r.type);
    if (s != null) {
      t = s;
      e = s;
    }
  }
  n.replaceRange(e, t, new w(k.from(r), 0, 0));
}
function Pu(n, e, t) {
  let r = n.doc.resolve(e);
  let s = n.doc.resolve(t);
  let i = $l(r, s);
  for (let o = 0; o < i.length; o++) {
    let l = i[o];
    let a = o == i.length - 1;
    if (a && l == 0 || r.node(l).type.contentMatch.validEnd) {
      return n.delete(r.start(l), s.end(l));
    }
    if (l > 0 && (a || r.node(l - 1).canReplace(r.index(l - 1), s.indexAfter(l - 1)))) {
      return n.delete(r.before(l), s.after(l));
    }
  }
  for (let o = 1; o <= r.depth && o <= s.depth; o++) {
    if (e - r.start(o) == r.depth - o && t > r.end(o) && s.end(o) - t != s.depth - o && r.start(o - 1) == s.start(o - 1) && r.node(o - 1).canReplace(r.index(o - 1), s.index(o - 1))) {
      return n.delete(r.before(o), t);
    }
  }
  n.delete(e, t);
}
function $l(n, e) {
  let t = [];
  let r = Math.min(n.depth, e.depth);
  for (let s = r; s >= 0; s--) {
    let i = n.start(s);
    if (i < n.pos - (n.depth - s) || e.end(s) > e.pos + (e.depth - s) || n.node(s).type.spec.isolating || e.node(s).type.spec.isolating) {
      break;
    }
    if (i == e.start(s) || s == n.depth && s == e.depth && n.parent.inlineContent && e.parent.inlineContent && s && e.start(s - 1) == i - 1) {
      t.push(s);
    }
  }
  return t;
}
class Dt extends te {
  constructor(e, t, r) {
    super();
    this.pos = e;
    this.attr = t;
    this.value = r;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t) {
      return j.fail("No node at attribute step's position");
    }
    let r = Object.create(null);
    for (let i in t.attrs) {
      r[i] = t.attrs[i];
    }
    r[this.attr] = this.value;
    let s = t.type.create(r, null, t.marks);
    return j.fromReplace(e, this.pos, this.pos + 1, new w(k.from(s), 0, t.isLeaf ? 0 : 1));
  }
  getMap() {
    return ce.empty;
  }
  invert(e) {
    return new Dt(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    if (t.deletedAfter) {
      return null;
    }
    return new Dt(t.pos, this.attr, this.value);
  }
  toJSON() {
    return {
      stepType: "attr",
      pos: this.pos,
      attr: this.attr,
      value: this.value
    };
  }
  static fromJSON(e, t) {
    if (typeof t.pos !== "number" || typeof t.attr !== "string") {
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    }
    return new Dt(t.pos, t.attr, t.value);
  }
}
te.jsonID("attr", Dt);
class un extends te {
  constructor(e, t) {
    super();
    this.attr = e;
    this.value = t;
  }
  apply(e) {
    let t = Object.create(null);
    for (let s in e.attrs) {
      t[s] = e.attrs[s];
    }
    t[this.attr] = this.value;
    let r = e.type.create(t, e.content, e.marks);
    return j.ok(r);
  }
  getMap() {
    return ce.empty;
  }
  invert(e) {
    return new un(this.attr, e.attrs[this.attr]);
  }
  map(e) {
    return this;
  }
  toJSON() {
    return {
      stepType: "docAttr",
      attr: this.attr,
      value: this.value
    };
  }
  static fromJSON(e, t) {
    if (typeof t.attr !== "string") {
      throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    }
    return new un(t.attr, t.value);
  }
}
te.jsonID("docAttr", un);
let Rt = class extends Error {};
Rt = function n(e) {
  let t = Error.call(this, e);
  t.__proto__ = n.prototype;
  return t;
};
Rt.prototype = Object.create(Error.prototype);
Rt.prototype.constructor = Rt;
Rt.prototype.name = "TransformError";
class Fl {
  constructor(e) {
    this.doc = e;
    this.steps = [];
    this.docs = [];
    this.mapping = new cn();
  }
  get before() {
    if (this.docs.length) {
      return this.docs[0];
    }
    return this.doc;
  }
  step(e) {
    let t = this.maybeStep(e);
    if (t.failed) {
      throw new Rt(t.failed);
    }
    return this;
  }
  maybeStep(e) {
    let t = e.apply(this.doc);
    if (!t.failed) {
      this.addStep(e, t.doc);
    }
    return t;
  }
  get docChanged() {
    return this.steps.length > 0;
  }
  addStep(e, t) {
    this.docs.push(this.doc);
    this.steps.push(e);
    this.mapping.appendMap(e.getMap());
    this.doc = t;
  }
  replace(e, t = e, r = w.empty) {
    let s = Tr(this.doc, e, t, r);
    if (s) {
      this.step(s);
    }
    return this;
  }
  replaceWith(e, t, r) {
    return this.replace(e, t, new w(k.from(r), 0, 0));
  }
  delete(e, t) {
    return this.replace(e, t, w.empty);
  }
  insert(e, t) {
    return this.replaceWith(e, e, t);
  }
  replaceRange(e, t, r) {
    Iu(this, e, t, r);
    return this;
  }
  replaceRangeWith(e, t, r) {
    Ru(this, e, t, r);
    return this;
  }
  deleteRange(e, t) {
    Pu(this, e, t);
    return this;
  }
  lift(e, t) {
    ku(this, e, t);
    return this;
  }
  join(e, t = 1) {
    Tu(this, e, t);
    return this;
  }
  wrap(e, t) {
    Su(this, e, t);
    return this;
  }
  setBlockType(e, t = e, r, s = null) {
    wu(this, e, t, r, s);
    return this;
  }
  setNodeMarkup(e, t, r = null, s) {
    Mu(this, e, t, r, s);
    return this;
  }
  setNodeAttribute(e, t, r) {
    this.step(new Dt(e, t, r));
    return this;
  }
  setDocAttribute(e, t) {
    this.step(new un(e, t));
    return this;
  }
  addNodeMark(e, t) {
    this.step(new Ue(e, t));
    return this;
  }
  removeNodeMark(e, t) {
    let r = this.doc.nodeAt(e);
    if (!r) {
      throw new RangeError(`No node at position ${e}`);
    }
    if (t instanceof M) {
      if (t.isInSet(r.marks)) {
        this.step(new pt(e, t));
      }
    } else {
      let s = r.marks;
      let i;
      let o = [];
      while (i = t.isInSet(s)) {
        o.push(new pt(e, i));
        s = i.removeFromSet(s);
      }
      for (let l = o.length - 1; l >= 0; l--) {
        this.step(o[l]);
      }
    }
    return this;
  }
  split(e, t = 1, r) {
    Eu(this, e, t, r);
    return this;
  }
  addMark(e, t, r) {
    mu(this, e, t, r);
    return this;
  }
  removeMark(e, t, r) {
    gu(this, e, t, r);
    return this;
  }
  clearIncompatible(e, t, r) {
    qs(this, e, t, r);
    return this;
  }
}
const Kr = Object.create(null);
class O {
  constructor(e, t, r) {
    this.$anchor = e;
    this.$head = t;
    this.ranges = r || [new Lu(e.min(t), e.max(t))];
  }
  get anchor() {
    return this.$anchor.pos;
  }
  get head() {
    return this.$head.pos;
  }
  get from() {
    return this.$from.pos;
  }
  get to() {
    return this.$to.pos;
  }
  get $from() {
    return this.ranges[0].$from;
  }
  get $to() {
    return this.ranges[0].$to;
  }
  get empty() {
    let ranges = this.ranges;
    for (let t = 0; t < ranges.length; t++) {
      if (ranges[t].$from.pos != ranges[t].$to.pos) {
        return false;
      }
    }
    return true;
  }
  content() {
    return this.$from.doc.slice(this.from, this.to, true);
  }
  replace(e, t = w.empty) {
    let lastChild = t.content.lastChild;
    let s = null;
    for (let l = 0; l < t.openEnd; l++) {
      s = lastChild;
      lastChild = lastChild.lastChild;
    }
    let length = e.steps.length;
    let ranges = this.ranges;
    for (let l = 0; l < ranges.length; l++) {
      let {
        $from,
        $to
      } = ranges[l];
      let u = e.mapping.slice(length);
      e.replaceRange(u.map($from.pos), u.map($to.pos), l ? w.empty : t);
      if (l == 0) {
        Ki(e, length, (lastChild ? lastChild.isInline : s && s.isTextblock) ? -1 : 1);
      }
    }
  }
  replaceWith(e, t) {
    let length = e.steps.length;
    let ranges = this.ranges;
    for (let i = 0; i < ranges.length; i++) {
      let {
        $from,
        $to
      } = ranges[i];
      let a = e.mapping.slice(length);
      let c = a.map($from.pos);
      let u = a.map($to.pos);
      if (i) {
        e.deleteRange(c, u);
      } else {
        e.replaceRangeWith(c, u, t);
        Ki(e, length, t.isInline ? -1 : 1);
      }
    }
  }
  static findFrom(e, t, r = false) {
    let s = e.parent.inlineContent ? new N(e) : vt(e.node(0), e.parent, e.pos, e.index(), t, r);
    if (s) {
      return s;
    }
    for (let i = e.depth - 1; i >= 0; i--) {
      let o = t < 0 ? vt(e.node(0), e.node(i), e.before(i + 1), e.index(i), t, r) : vt(e.node(0), e.node(i), e.after(i + 1), e.index(i) + 1, t, r);
      if (o) {
        return o;
      }
    }
    return null;
  }
  static near(e, t = 1) {
    return this.findFrom(e, t) || this.findFrom(e, -t) || new ue(e.node(0));
  }
  static atStart(e) {
    return vt(e, e, 0, 0, 1) || new ue(e);
  }
  static atEnd(e) {
    return vt(e, e, e.content.size, e.childCount, -1) || new ue(e);
  }
  static fromJSON(e, t) {
    if (!t || !t.type) {
      throw new RangeError("Invalid input for Selection.fromJSON");
    }
    let r = Kr[t.type];
    if (!r) {
      throw new RangeError(`No selection type ${t.type} defined`);
    }
    return r.fromJSON(e, t);
  }
  static jsonID(e, t) {
    if (e in Kr) {
      throw new RangeError(`Duplicate use of selection JSON ID ${e}`);
    }
    Kr[e] = t;
    t.prototype.jsonID = e;
    return t;
  }
  getBookmark() {
    return N.between(this.$anchor, this.$head).getBookmark();
  }
}
O.prototype.visible = true;
class Lu {
  constructor(e, t) {
    this.$from = e;
    this.$to = t;
  }
}
let Wi = false;
function qi(n) {
  if (!Wi && !n.parent.inlineContent) {
    Wi = true;
    console.warn(`TextSelection endpoint not pointing into a node with inline content (${n.parent.type.name})`);
  }
}
class N extends O {
  constructor(e, t = e) {
    qi(e);
    qi(t);
    super(e, t);
  }
  get $cursor() {
    if (this.$anchor.pos == this.$head.pos) {
      return this.$head;
    }
    return null;
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    if (!r.parent.inlineContent) {
      return O.near(r);
    }
    let s = e.resolve(t.map(this.anchor));
    return new N(s.parent.inlineContent ? s : r, r);
  }
  replace(e, t = w.empty) {
    super.replace(e, t);
    if (t == w.empty) {
      let r = this.$from.marksAcross(this.$to);
      if (r) {
        e.ensureMarks(r);
      }
    }
  }
  eq(e) {
    return e instanceof N && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new Ar(this.anchor, this.head);
  }
  toJSON() {
    return {
      type: "text",
      anchor: this.anchor,
      head: this.head
    };
  }
  static fromJSON(e, t) {
    if (typeof t.anchor !== "number" || typeof t.head !== "number") {
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    }
    return new N(e.resolve(t.anchor), e.resolve(t.head));
  }
  static create(e, t, r = t) {
    let s = e.resolve(t);
    return new this(s, r == t ? s : e.resolve(r));
  }
  static between(e, t, r) {
    let s = e.pos - t.pos;
    if (!r || s) {
      r = s >= 0 ? 1 : -1;
    }
    if (!t.parent.inlineContent) {
      let i = O.findFrom(t, r, true) || O.findFrom(t, -r, true);
      if (i) {
        t = i.$head;
      } else {
        return O.near(t, r);
      }
    }
    e.parent.inlineContent || (s == 0 ? e = t : (e = (O.findFrom(e, -r, true) || O.findFrom(e, r, true)).$anchor, e.pos < t.pos != s < 0 && (e = t)));
    return new N(e, t);
  }
}
O.jsonID("text", N);
class Ar {
  constructor(e, t) {
    this.anchor = e;
    this.head = t;
  }
  map(e) {
    return new Ar(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return N.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
export class C extends O {
  constructor(e) {
    let t = e.nodeAfter;
    let r = e.node(0).resolve(e.pos + t.nodeSize);
    super(e, r);
    this.node = t;
  }
  map(e, t) {
    let {
      deleted,
      pos
    } = t.mapResult(this.anchor);
    let i = e.resolve(pos);
    if (deleted) {
      return O.near(i);
    }
    return new C(i);
  }
  content() {
    return new w(k.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof C && e.anchor == this.anchor;
  }
  toJSON() {
    return {
      type: "node",
      anchor: this.anchor
    };
  }
  getBookmark() {
    return new Us(this.anchor);
  }
  static fromJSON(e, t) {
    if (typeof t.anchor !== "number") {
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    }
    return new C(e.resolve(t.anchor));
  }
  static create(e, t) {
    return new C(e.resolve(t));
  }
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== false;
  }
}
C.prototype.visible = false;
O.jsonID("node", C);
class Us {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let {
      deleted,
      pos
    } = e.mapResult(this.anchor);
    if (deleted) {
      return new Ar(pos, pos);
    }
    return new Us(pos);
  }
  resolve(e) {
    let t = e.resolve(this.anchor);
    let t_nodeAfter = t.nodeAfter;
    if (t_nodeAfter && C.isSelectable(t_nodeAfter)) {
      return new C(t);
    }
    return O.near(t);
  }
}
class ue extends O {
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, t = w.empty) {
    if (t == w.empty) {
      e.delete(0, e.doc.content.size);
      let r = O.atStart(e.doc);
      if (!r.eq(e.selection)) {
        e.setSelection(r);
      }
    } else {
      super.replace(e, t);
    }
  }
  toJSON() {
    return {
      type: "all"
    };
  }
  static fromJSON(e) {
    return new ue(e);
  }
  map(e) {
    return new ue(e);
  }
  eq(e) {
    return e instanceof ue;
  }
  getBookmark() {
    return zu;
  }
}
O.jsonID("all", ue);
const zu = {
  map() {
    return this;
  },
  resolve(n) {
    return new ue(n);
  }
};
function vt(n, e, t, r, s, i = false) {
  if (e.inlineContent) {
    return N.create(n, t);
  }
  for (let o = r - (s > 0 ? 0 : 1); s > 0 ? o < e.childCount : o >= 0; o += s) {
    let l = e.child(o);
    if (l.isAtom) {
      if (!i && C.isSelectable(l)) {
        return C.create(n, t - (s < 0 ? l.nodeSize : 0));
      }
    } else {
      let a = vt(n, l, t + s, s < 0 ? l.childCount : 0, s, i);
      if (a) {
        return a;
      }
    }
    t += l.nodeSize * s;
  }
  return null;
}
function Ki(n, e, t) {
  let r = n.steps.length - 1;
  if (r < e) {
    return;
  }
  let s = n.steps[r];
  if (!(s instanceof K || s instanceof J)) {
    return;
  }
  let i = n.mapping.maps[r];
  let o;
  i.forEach((l, a, c, u) => {
    if (o == null) {
      o = u;
    }
  });
  n.setSelection(O.near(n.doc.resolve(o), t));
}
const Ui = 1;
const Cn = 2;
const Ji = 4;
class Bu extends Fl {
  constructor(e) {
    super(e.doc);
    this.curSelectionFor = 0;
    this.updated = 0;
    this.meta = Object.create(null);
    this.time = Date.now();
    this.curSelection = e.selection;
    this.storedMarks = e.storedMarks;
  }
  get selection() {
    if (this.curSelectionFor < this.steps.length) {
      this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor));
      this.curSelectionFor = this.steps.length;
    }
    return this.curSelection;
  }
  setSelection(e) {
    if (e.$from.doc != this.doc) {
      throw new RangeError("Selection passed to setSelection must point at the current document");
    }
    this.curSelection = e;
    this.curSelectionFor = this.steps.length;
    this.updated = (this.updated | Ui) & ~Cn;
    this.storedMarks = null;
    return this;
  }
  get selectionSet() {
    return (this.updated & Ui) > 0;
  }
  setStoredMarks(e) {
    this.storedMarks = e;
    this.updated |= Cn;
    return this;
  }
  ensureMarks(e) {
    if (!M.sameSet(this.storedMarks || this.selection.$from.marks(), e)) {
      this.setStoredMarks(e);
    }
    return this;
  }
  addStoredMark(e) {
    return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
  }
  removeStoredMark(e) {
    return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
  }
  get storedMarksSet() {
    return (this.updated & Cn) > 0;
  }
  addStep(e, t) {
    super.addStep(e, t);
    this.updated = this.updated & ~Cn;
    this.storedMarks = null;
  }
  setTime(e) {
    this.time = e;
    return this;
  }
  replaceSelection(e) {
    this.selection.replace(this, e);
    return this;
  }
  replaceSelectionWith(e, t = true) {
    let selection = this.selection;
    if (t) {
      e = e.mark(this.storedMarks || (selection.empty ? selection.$from.marks() : selection.$from.marksAcross(selection.$to) || M.none));
    }
    selection.replaceWith(this, e);
    return this;
  }
  deleteSelection() {
    this.selection.replace(this);
    return this;
  }
  insertText(e, t, r) {
    let schema = this.doc.type.schema;
    if (t == null) {
      if (e) {
        return this.replaceSelectionWith(schema.text(e), true);
      }
      return this.deleteSelection();
    }
    {
      if (r == null) {
        r = t;
      }
      if (!e) {
        return this.deleteRange(t, r);
      }
      let i = this.storedMarks;
      if (!i) {
        let o = this.doc.resolve(t);
        i = r == t ? o.marks() : o.marksAcross(this.doc.resolve(r));
      }
      this.replaceRangeWith(t, r, schema.text(e, i));
      if (!this.selection.empty && this.selection.to == t + e.length) {
        this.setSelection(O.near(this.selection.$to));
      }
      return this;
    }
  }
  setMeta(e, t) {
    this.meta[typeof e === "string" ? e : e.key] = t;
    return this;
  }
  getMeta(e) {
    return this.meta[typeof e === "string" ? e : e.key];
  }
  get isGeneric() {
    for (let e in this.meta) {
      return false;
    }
    return true;
  }
  scrollIntoView() {
    this.updated |= Ji;
    return this;
  }
  get scrolledIntoView() {
    return (this.updated & Ji) > 0;
  }
}
function Gi(n, e) {
  if (!e || !n) {
    return n;
  }
  return n.bind(e);
}
class Ut {
  constructor(e, t, r) {
    this.name = e;
    this.init = Gi(t.init, r);
    this.apply = Gi(t.apply, r);
  }
}
const $u = [new Ut("doc", {
  init(n) {
    return n.doc || n.schema.topNodeType.createAndFill();
  },
  apply(n) {
    return n.doc;
  }
}), new Ut("selection", {
  init(n, e) {
    return n.selection || O.atStart(e.doc);
  },
  apply(n) {
    return n.selection;
  }
}), new Ut("storedMarks", {
  init(n) {
    return n.storedMarks || null;
  },
  apply(n, e, t, r) {
    if (r.selection.$cursor) {
      return n.storedMarks;
    }
    return null;
  }
}), new Ut("scrollToSelection", {
  init() {
    return 0;
  },
  apply(n, e) {
    if (n.scrolledIntoView) {
      return e + 1;
    }
    return e;
  }
})];
class Ur {
  constructor(e, t) {
    this.schema = e;
    this.plugins = [];
    this.pluginsByKey = Object.create(null);
    this.fields = $u.slice();
    if (t) {
      t.forEach(r => {
        if (this.pluginsByKey[r.key]) {
          throw new RangeError(`Adding different instances of a keyed plugin (${r.key})`);
        }
        this.plugins.push(r);
        this.pluginsByKey[r.key] = r;
        if (r.spec.state) {
          this.fields.push(new Ut(r.key, r.spec.state, r));
        }
      });
    }
  }
}
class Ot {
  constructor(e) {
    this.config = e;
  }
  get schema() {
    return this.config.schema;
  }
  get plugins() {
    return this.config.plugins;
  }
  apply(e) {
    return this.applyTransaction(e).state;
  }
  filterTransaction(e, t = -1) {
    for (let r = 0; r < this.config.plugins.length; r++) {
      if (r != t) {
        let s = this.config.plugins[r];
        if (s.spec.filterTransaction && !s.spec.filterTransaction.call(s, e, this)) {
          return false;
        }
      }
    }
    return true;
  }
  applyTransaction(e) {
    if (!this.filterTransaction(e)) {
      return {
        state: this,
        transactions: []
      };
    }
    let transactions = [e];
    let r = this.applyInner(e);
    let s = null;
    while (true) {
      let i = false;
      for (let o = 0; o < this.config.plugins.length; o++) {
        let plugin = this.config.plugins[o];
        if (plugin.spec.appendTransaction) {
          let a = s ? s[o].n : 0;
          let c = s ? s[o].state : this;
          let u = a < transactions.length && plugin.spec.appendTransaction.call(plugin, a ? transactions.slice(a) : transactions, c, r);
          if (u && r.filterTransaction(u, o)) {
            u.setMeta("appendedTransaction", e);
            if (!s) {
              s = [];
              for (let d = 0; d < this.config.plugins.length; d++) {
                s.push(d < o ? {
                  state: r,
                  n: transactions.length
                } : {
                  state: this,
                  n: 0
                });
              }
            }
            transactions.push(u);
            r = r.applyInner(u);
            i = true;
          }
          if (s) {
            s[o] = {
              state: r,
              n: transactions.length
            };
          }
        }
      }
      if (!i) {
        return {
          state: r,
          transactions
        };
      }
    }
  }
  applyInner(e) {
    if (!e.before.eq(this.doc)) {
      throw new RangeError("Applying a mismatched transaction");
    }
    let t = new Ot(this.config);
    let fields = this.config.fields;
    for (const i of fields) {
      t[i.name] = i.apply(e, this[i.name], this, t);
    }
    return t;
  }
  get tr() {
    return new Bu(this);
  }
  static create(e) {
    let t = new Ur(e.doc ? e.doc.type.schema : e.schema, e.plugins);
    let r = new Ot(t);
    for (let s = 0; s < t.fields.length; s++) {
      r[t.fields[s].name] = t.fields[s].init(e, r);
    }
    return r;
  }
  reconfigure(e) {
    let t = new Ur(this.schema, e.plugins);
    let t_fields = t.fields;
    let s = new Ot(t);
    for (let i = 0; i < t_fields.length; i++) {
      let o = t_fields[i].name;
      s[o] = this.hasOwnProperty(o) ? this[o] : t_fields[i].init(e, s);
    }
    return s;
  }
  toJSON(e) {
    let t = {
      doc: this.doc.toJSON(),
      selection: this.selection.toJSON()
    };
    if (this.storedMarks) {
      t.storedMarks = this.storedMarks.map(r => r.toJSON());
    }
    if (e && typeof e === "object") {
      for (let r in e) {
        if (r == "doc" || r == "selection") {
          throw new RangeError("The JSON fields `doc` and `selection` are reserved");
        }
        let s = e[r];
        let i = s.spec.state;
        if (i && i.toJSON) {
          t[r] = i.toJSON.call(s, this[s.key]);
        }
      }
    }
    return t;
  }
  static fromJSON(e, t, r) {
    if (!t) {
      throw new RangeError("Invalid input for EditorState.fromJSON");
    }
    if (!e.schema) {
      throw new RangeError("Required config field 'schema' missing");
    }
    let s = new Ur(e.schema, e.plugins);
    let i = new Ot(s);
    s.fields.forEach(o => {
      if (o.name == "doc") {
        i.doc = Se.fromJSON(e.schema, t.doc);
      } else if (o.name == "selection") {
        i.selection = O.fromJSON(i.doc, t.selection);
      } else if (o.name == "storedMarks") {
        if (t.storedMarks) {
          i.storedMarks = t.storedMarks.map(e.schema.markFromJSON);
        }
      } else {
        if (r) {
          for (let l in r) {
            let a = r[l];
            let c = a.spec.state;
            if (a.key == o.name && c && c.fromJSON && Object.prototype.hasOwnProperty.call(t, l)) {
              i[o.name] = c.fromJSON.call(a, e, t[l], i);
              return;
            }
          }
        }
        i[o.name] = o.init(e, i);
      }
    });
    return i;
  }
}
function Hl(n, e, t) {
  for (let r in n) {
    let s = n[r];
    if (s instanceof Function) {
      s = s.bind(e);
    } else if (r == "handleDOMEvents") {
      s = Hl(s, e, {});
    }
    t[r] = s;
  }
  return t;
}
class $ {
  constructor(e) {
    this.spec = e;
    this.props = {};
    if (e.props) {
      Hl(e.props, this, this.props);
    }
    this.key = e.key ? e.key.key : Vl("plugin");
  }
  getState(e) {
    return e[this.key];
  }
}
const Jr = Object.create(null);
function Vl(n) {
  if (n in Jr) {
    return `${n}\$${++Jr[n]}`;
  }
  Jr[n] = 0;
  return `${n}\$`;
}
export class a {
  constructor(e = "key") {
    this.key = Vl(e);
  }
  get(e) {
    return e.config.pluginsByKey[this.key];
  }
  getState(e) {
    return e[this.key];
  }
}
const Js = (n, e) => {
  if (n.selection.empty) {
    return false;
  }
  if (e) {
    e(n.tr.deleteSelection().scrollIntoView());
  }
  return true;
};
function jl(n, e) {
  let {
    $cursor
  } = n.selection;
  if (!$cursor || (e ? !e.endOfTextblock("backward", n) : $cursor.parentOffset > 0)) {
    return null;
  }
  return $cursor;
}
const _l = (n, e, t) => {
  let r = jl(n, t);
  if (!r) {
    return false;
  }
  let s = Gs(r);
  if (!s) {
    let o = r.blockRange();
    let l = o && Ht(o);
    if (l == null) {
      return false;
    }
    if (e) {
      e(n.tr.lift(o, l).scrollIntoView());
    }
    return true;
  }
  let s_nodeBefore = s.nodeBefore;
  if (Ql(n, s, e, -1)) {
    return true;
  }
  if (r.parent.content.size == 0 && (Pt(s_nodeBefore, "end") || C.isSelectable(s_nodeBefore))) {
    for (let o = r.depth;; o--) {
      let l = Tr(n.doc, r.before(o), r.after(o), w.empty);
      if (l && l.slice.size < l.to - l.from) {
        if (e) {
          let a = n.tr.step(l);
          a.setSelection(Pt(s_nodeBefore, "end") ? O.findFrom(a.doc.resolve(a.mapping.map(s.pos, -1)), -1) : C.create(a.doc, s.pos - s_nodeBefore.nodeSize));
          e(a.scrollIntoView());
        }
        return true;
      }
      if (o == 1 || r.node(o - 1).childCount > 1) {
        break;
      }
    }
  }
  if (s_nodeBefore.isAtom && s.depth == r.depth - 1) {
    if (e) {
      e(n.tr.delete(s.pos - s_nodeBefore.nodeSize, s.pos).scrollIntoView());
    }
    return true;
  }
  return false;
};
const Fu = (state, dispatch, t) => {
  let r = jl(state, t);
  if (!r) {
    return false;
  }
  let s = Gs(r);
  if (s) {
    return Wl(state, s, dispatch);
  }
  return false;
};
const Hu = (state, dispatch, t) => {
  let r = Kl(state, t);
  if (!r) {
    return false;
  }
  let s = Ys(r);
  if (s) {
    return Wl(state, s, dispatch);
  }
  return false;
};
function Wl(state, e, dispatch) {
  let e_nodeBefore = e.nodeBefore;
  let s = e_nodeBefore;
  let i = e.pos - 1;
  for (; !s.isTextblock; i--) {
    if (s.type.spec.isolating) {
      return false;
    }
    let u = s.lastChild;
    if (!u) {
      return false;
    }
    s = u;
  }
  let e_nodeAfter = e.nodeAfter;
  let l = e_nodeAfter;
  let a = e.pos + 1;
  for (; !l.isTextblock; a++) {
    if (l.type.spec.isolating) {
      return false;
    }
    let u = l.firstChild;
    if (!u) {
      return false;
    }
    l = u;
  }
  let c = Tr(state.doc, i, a, w.empty);
  if (!c || c.from != i || c instanceof K && c.slice.size >= a - i) {
    return false;
  }
  if (dispatch) {
    let u = state.tr.step(c);
    u.setSelection(N.create(u.doc, i));
    dispatch(u.scrollIntoView());
  }
  return true;
}
function Pt(n, e, t = false) {
  for (let r = n; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock) {
      return true;
    }
    if (t && r.childCount != 1) {
      return false;
    }
  }
  return false;
}
const ql = (n, e, t) => {
  let {
    $head,
    empty
  } = n.selection;
  let i = $head;
  if (!empty) {
    return false;
  }
  if ($head.parent.isTextblock) {
    if (t ? !t.endOfTextblock("backward", n) : $head.parentOffset > 0) {
      return false;
    }
    i = Gs($head);
  }
  let o = i && i.nodeBefore;
  if (!o || !C.isSelectable(o)) {
    return false;
  }
  if (e) {
    e(n.tr.setSelection(C.create(n.doc, i.pos - o.nodeSize)).scrollIntoView());
  }
  return true;
};
function Gs(n) {
  if (!n.parent.type.spec.isolating) {
    for (let e = n.depth - 1; e >= 0; e--) {
      if (n.index(e) > 0) {
        return n.doc.resolve(n.before(e + 1));
      }
      if (n.node(e).type.spec.isolating) {
        break;
      }
    }
  }
  return null;
}
function Kl(n, e) {
  let {
    $cursor
  } = n.selection;
  if (!$cursor || (e ? !e.endOfTextblock("forward", n) : $cursor.parentOffset < $cursor.parent.content.size)) {
    return null;
  }
  return $cursor;
}
const Ul = (n, e, t) => {
  let r = Kl(n, t);
  if (!r) {
    return false;
  }
  let s = Ys(r);
  if (!s) {
    return false;
  }
  let s_nodeAfter = s.nodeAfter;
  if (Ql(n, s, e, 1)) {
    return true;
  }
  if (r.parent.content.size == 0 && (Pt(s_nodeAfter, "start") || C.isSelectable(s_nodeAfter))) {
    let o = Tr(n.doc, r.before(), r.after(), w.empty);
    if (o && o.slice.size < o.to - o.from) {
      if (e) {
        let l = n.tr.step(o);
        l.setSelection(Pt(s_nodeAfter, "start") ? O.findFrom(l.doc.resolve(l.mapping.map(s.pos)), 1) : C.create(l.doc, l.mapping.map(s.pos)));
        e(l.scrollIntoView());
      }
      return true;
    }
  }
  if (s_nodeAfter.isAtom && s.depth == r.depth - 1) {
    if (e) {
      e(n.tr.delete(s.pos, s.pos + s_nodeAfter.nodeSize).scrollIntoView());
    }
    return true;
  }
  return false;
};
const Jl = (n, e, t) => {
  let {
    $head,
    empty
  } = n.selection;
  let i = $head;
  if (!empty) {
    return false;
  }
  if ($head.parent.isTextblock) {
    if (t ? !t.endOfTextblock("forward", n) : $head.parentOffset < $head.parent.content.size) {
      return false;
    }
    i = Ys($head);
  }
  let o = i && i.nodeAfter;
  if (!o || !C.isSelectable(o)) {
    return false;
  }
  if (e) {
    e(n.tr.setSelection(C.create(n.doc, i.pos)).scrollIntoView());
  }
  return true;
};
function Ys(n) {
  if (!n.parent.type.spec.isolating) {
    for (let e = n.depth - 1; e >= 0; e--) {
      let t = n.node(e);
      if (n.index(e) + 1 < t.childCount) {
        return n.doc.resolve(n.after(e + 1));
      }
      if (t.type.spec.isolating) {
        break;
      }
    }
  }
  return null;
}
const Vu = (state, dispatch) => {
  let n_selection = state.selection;
  let r = n_selection instanceof C;
  let s;
  if (r) {
    if (n_selection.node.isTextblock || !et(state.doc, n_selection.from)) {
      return false;
    }
    s = n_selection.from;
  } else {
    s = vr(state.doc, n_selection.from, -1);
    if (s == null) {
      return false;
    }
  }
  if (dispatch) {
    let i = state.tr.join(s);
    if (r) {
      i.setSelection(C.create(i.doc, s - state.doc.resolve(s).nodeBefore.nodeSize));
    }
    dispatch(i.scrollIntoView());
  }
  return true;
};
const ju = (state, dispatch) => {
  let n_selection = state.selection;
  let r;
  if (n_selection instanceof C) {
    if (n_selection.node.isTextblock || !et(state.doc, n_selection.to)) {
      return false;
    }
    r = n_selection.to;
  } else {
    r = vr(state.doc, n_selection.to, 1);
    if (r == null) {
      return false;
    }
  }
  if (dispatch) {
    dispatch(state.tr.join(r).scrollIntoView());
  }
  return true;
};
const _u = (state, dispatch) => {
  let {
    $from,
    $to
  } = state.selection;
  let s = $from.blockRange($to);
  let i = s && Ht(s);
  if (i == null) {
    return false;
  }
  if (dispatch) {
    dispatch(state.tr.lift(s, i).scrollIntoView());
  }
  return true;
};
const Gl = (n, e) => {
  let {
    $head,
    $anchor
  } = n.selection;
  if (!$head.parent.type.spec.code || !$head.sameParent($anchor)) {
    return false;
  }
  if (e) {
    e(n.tr.insertText(`
`).scrollIntoView());
  }
  return true;
};
function Xs(n) {
  for (let e = 0; e < n.edgeCount; e++) {
    let {
      type
    } = n.edge(e);
    if (type.isTextblock && !type.hasRequiredAttrs()) {
      return type;
    }
  }
  return null;
}
const Wu = (state, dispatch) => {
  let {
    $head,
    $anchor
  } = state.selection;
  if (!$head.parent.type.spec.code || !$head.sameParent($anchor)) {
    return false;
  }
  let s = $head.node(-1);
  let i = $head.indexAfter(-1);
  let o = Xs(s.contentMatchAt(i));
  if (!o || !s.canReplaceWith(i, i, o)) {
    return false;
  }
  if (dispatch) {
    let l = $head.after();
    let a = state.tr.replaceWith(l, l, o.createAndFill());
    a.setSelection(O.near(a.doc.resolve(l), 1));
    dispatch(a.scrollIntoView());
  }
  return true;
};
const Yl = (n, e) => {
  let n_selection = n.selection;
  let {
    $from,
    $to
  } = n_selection;
  if (n_selection instanceof ue || $from.parent.inlineContent || $to.parent.inlineContent) {
    return false;
  }
  let i = Xs($to.parent.contentMatchAt($to.indexAfter()));
  if (!i || !i.isTextblock) {
    return false;
  }
  if (e) {
    let o = (!$from.parentOffset && $to.index() < $to.parent.childCount ? $from : $to).pos;
    let l = n.tr.insert(o, i.createAndFill());
    l.setSelection(N.create(l.doc, o + 1));
    e(l.scrollIntoView());
  }
  return true;
};
const Xl = (n, e) => {
  let {
    $cursor
  } = n.selection;
  if (!$cursor || $cursor.parent.content.size) {
    return false;
  }
  if ($cursor.depth > 1 && $cursor.after() != $cursor.end(-1)) {
    let i = $cursor.before();
    if (Ee(n.doc, i)) {
      if (e) {
        e(n.tr.split(i).scrollIntoView());
      }
      return true;
    }
  }
  let r = $cursor.blockRange();
  let s = r && Ht(r);
  if (s == null) {
    return false;
  }
  if (e) {
    e(n.tr.lift(r, s).scrollIntoView());
  }
  return true;
};
function qu(n) {
  return (e, t) => {
    let {
      $from,
      $to
    } = e.selection;
    if (e.selection instanceof C && e.selection.node.isBlock) {
      if (!$from.parentOffset || !Ee(e.doc, $from.pos)) {
        return false;
      }
      if (t) {
        t(e.tr.split($from.pos).scrollIntoView());
      }
      return true;
    }
    if (!$from.depth) {
      return false;
    }
    let i = [];
    let o;
    let l;
    let a = false;
    let c = false;
    for (let h = $from.depth;; h--) {
      if ($from.node(h).isBlock) {
        a = $from.end(h) == $from.pos + ($from.depth - h);
        c = $from.start(h) == $from.pos - ($from.depth - h);
        l = Xs($from.node(h - 1).contentMatchAt($from.indexAfter(h - 1)));
        i.unshift(a && l ? {
          type: l
        } : null);
        o = h;
        break;
      } else {
        if (h == 1) {
          return false;
        }
        i.unshift(null);
      }
    }
    let u = e.tr;
    if (e.selection instanceof N || e.selection instanceof ue) {
      u.deleteSelection();
    }
    let d = u.mapping.map($from.pos);
    let f = Ee(u.doc, d, i.length, i);
    if (!f) {
      i[0] = l ? {
        type: l
      } : null;
      f = Ee(u.doc, d, i.length, i);
    }
    if (!f) {
      return false;
    }
    u.split(d, i.length, i);
    if (!a && c && $from.node(o).type != l) {
      let h = u.mapping.map($from.before(o));
      let p = u.doc.resolve(h);
      if (l && $from.node(o - 1).canReplaceWith(p.index(), p.index() + 1, l)) {
        u.setNodeMarkup(u.mapping.map($from.before(o)), l);
      }
    }
    if (t) {
      t(u.scrollIntoView());
    }
    return true;
  };
}
const Ku = qu();
const Uu = (state, dispatch) => {
  let {
    $from,
    to
  } = state.selection;
  let s;
  let i = $from.sharedDepth(to);
  if (i == 0) {
    return false;
  }
  s = $from.before(i);
  if (dispatch) {
    dispatch(state.tr.setSelection(C.create(state.doc, s)));
  }
  return true;
};
function Ju(n, e, t) {
  let e_nodeBefore = e.nodeBefore;
  let e_nodeAfter = e.nodeAfter;
  let i = e.index();
  if (!e_nodeBefore || !e_nodeAfter || !e_nodeBefore.type.compatibleContent(e_nodeAfter.type)) {
    return false;
  }
  if (!e_nodeBefore.content.size && e.parent.canReplace(i - 1, i)) {
    if (t) {
      t(n.tr.delete(e.pos - e_nodeBefore.nodeSize, e.pos).scrollIntoView());
    }
    return true;
  }
  if (!e.parent.canReplace(i, i + 1) || !(e_nodeAfter.isTextblock || et(n.doc, e.pos))) {
    return false;
  }
  if (t) {
    t(n.tr.join(e.pos).scrollIntoView());
  }
  return true;
}
function Ql(n, e, t, r) {
  let e_nodeBefore = e.nodeBefore;
  let e_nodeAfter = e.nodeAfter;
  let o;
  let l;
  let a = e_nodeBefore.type.spec.isolating || e_nodeAfter.type.spec.isolating;
  if (!a && Ju(n, e, t)) {
    return true;
  }
  let c = !a && e.parent.canReplace(e.index(), e.index() + 1);
  if (c && (o = (l = e_nodeBefore.contentMatchAt(e_nodeBefore.childCount)).findWrapping(e_nodeAfter.type)) && l.matchType(o[0] || e_nodeAfter.type).validEnd) {
    if (t) {
      let h = e.pos + e_nodeAfter.nodeSize;
      let p = k.empty;
      for (let y = o.length - 1; y >= 0; y--) {
        p = k.from(o[y].create(null, p));
      }
      p = k.from(e_nodeBefore.copy(p));
      let m = n.tr.step(new J(e.pos - 1, h, e.pos, h, new w(p, 1, 0), o.length, true));
      let g = m.doc.resolve(h + 2 * o.length);
      if (g.nodeAfter && g.nodeAfter.type == e_nodeBefore.type && et(m.doc, g.pos)) {
        m.join(g.pos);
      }
      t(m.scrollIntoView());
    }
    return true;
  }
  let u = e_nodeAfter.type.spec.isolating || r > 0 && a ? null : O.findFrom(e, 1);
  let d = u && u.$from.blockRange(u.$to);
  let f = d && Ht(d);
  if (f != null && f >= e.depth) {
    if (t) {
      t(n.tr.lift(d, f).scrollIntoView());
    }
    return true;
  }
  if (c && Pt(e_nodeAfter, "start", true) && Pt(e_nodeBefore, "end")) {
    let h = e_nodeBefore;
    let p = [];
    while (p.push(h), !h.isTextblock) {
      h = h.lastChild;
    }
    let m = e_nodeAfter;
    let g = 1;
    for (; !m.isTextblock; m = m.firstChild) {
      g++;
    }
    if (h.canReplace(h.childCount, h.childCount, m.content)) {
      if (t) {
        let y = k.empty;
        for (let C = p.length - 1; C >= 0; C--) {
          y = k.from(p[C].copy(y));
        }
        let b = n.tr.step(new J(e.pos - p.length, e.pos + e_nodeAfter.nodeSize, e.pos + g, e.pos + e_nodeAfter.nodeSize - g, new w(y, p.length, 0), 0, true));
        t(b.scrollIntoView());
      }
      return true;
    }
  }
  return false;
}
function Zl(n) {
  return (e, t) => {
    let e_selection = e.selection;
    let s = n < 0 ? e_selection.$from : e_selection.$to;
    let s_depth = s.depth;
    while (s.node(s_depth).isInline) {
      if (!s_depth) {
        return false;
      }
      s_depth--;
    }
    if (s.node(s_depth).isTextblock) {
      if (t) {
        t(e.tr.setSelection(N.create(e.doc, n < 0 ? s.start(s_depth) : s.end(s_depth))));
      }
      return true;
    }
    return false;
  };
}
const Gu = Zl(-1);
const Yu = Zl(1);
function Xu(n, e = null) {
  return (t, r) => {
    let {
      $from,
      $to
    } = t.selection;
    let o = $from.blockRange($to);
    let l = o && Ks(o, n, e);
    if (l) {
      if (r) {
        r(t.tr.wrap(o, l).scrollIntoView());
      }
      return true;
    }
    return false;
  };
}
function Yi(n, e = null) {
  return (t, r) => {
    let s = false;
    for (let i = 0; i < t.selection.ranges.length && !s; i++) {
      let {
        $from: {
          pos
        },
        $to: {
          pos: pos_1
        }
      } = t.selection.ranges[i];
      t.doc.nodesBetween(pos, pos_1, (a, c) => {
        if (s) {
          return false;
        }
        if (!(!a.isTextblock || a.hasMarkup(n, e))) {
          if (a.type == n) {
            s = true;
          } else {
            let u = t.doc.resolve(c);
            let d = u.index();
            s = u.parent.canReplaceWith(d, d + 1, n);
          }
        }
      });
    }
    if (!s) {
      return false;
    }
    if (r) {
      let i = t.tr;
      for (let o = 0; o < t.selection.ranges.length; o++) {
        let {
          $from: {
            pos
          },
          $to: {
            pos: pos_1
          }
        } = t.selection.ranges[o];
        i.setBlockType(pos, pos_1, n, e);
      }
      r(i.scrollIntoView());
    }
    return true;
  };
}
function Qs(...n) {
  return (e, t, r) => {
    for (let s = 0; s < n.length; s++) {
      if (n[s](e, t, r)) {
        return true;
      }
    }
    return false;
  };
}
Qs(Js, _l, ql);
Qs(Js, Ul, Jl);
Qs(Gl, Yl, Xl, Ku);
if (typeof navigator !== "undefined") {
  /Mac|iP(hone|[oa]d)/.test(navigator.platform);
} else {
  typeof os !== "undefined" && os.platform && os.platform() == "darwin";
}
function Qu(n, e = null) {
  return (t, r) => {
    let {
      $from,
      $to
    } = t.selection;
    let o = $from.blockRange($to);
    if (!o) {
      return false;
    }
    let l = r ? t.tr : null;
    if (Zu(l, o, n, e)) {
      if (r) {
        r(l.scrollIntoView());
      }
      return true;
    }
    return false;
  };
}
function Zu(n, e, t, r = null) {
  let s = false;
  let i = e;
  let doc = e.$from.doc;
  if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(t) && e.startIndex == 0) {
    if (e.$from.index(e.depth - 1) == 0) {
      return false;
    }
    let a = doc.resolve(e.start - 2);
    i = new Hn(a, a, e.depth);
    if (e.endIndex < e.parent.childCount) {
      e = new Hn(e.$from, doc.resolve(e.$to.end(e.depth)), e.depth);
    }
    s = true;
  }
  let l = Ks(i, t, r, e);
  if (l) {
    if (n) {
      ed(n, e, l, s, t);
    }
    return true;
  }
  return false;
}
function ed(n, e, t, r, s) {
  let k_empty = k.empty;
  for (let u = t.length - 1; u >= 0; u--) {
    k_empty = k.from(t[u].type.create(t[u].attrs, k_empty));
  }
  n.step(new J(e.start - (r ? 2 : 0), e.end, e.start, e.end, new w(k_empty, 0, 0), t.length, true));
  let o = 0;
  for (let u = 0; u < t.length; u++) {
    if (t[u].type == s) {
      o = u + 1;
    }
  }
  let l = t.length - o;
  let a = e.start + t.length - (r ? 2 : 0);
  let e_parent = e.parent;
  for (let u = e.startIndex, d = e.endIndex, f = true; u < d; u++, f = false) {
    if (!f && Ee(n.doc, a, l)) {
      n.split(a, l);
      a += 2 * l;
    }
    a += e_parent.child(u).nodeSize;
  }
  return n;
}
function oy(n, e) {
  return (t, r) => {
    let {
      $from,
      $to,
      node
    } = t.selection;
    if (node && node.isBlock || $from.depth < 2 || !$from.sameParent($to)) {
      return false;
    }
    let l = $from.node(-1);
    if (l.type != n) {
      return false;
    }
    if ($from.parent.content.size == 0 && $from.node(-1).childCount == $from.indexAfter(-1)) {
      if ($from.depth == 3 || $from.node(-3).type != n || $from.index(-2) != $from.node(-2).childCount - 1) {
        return false;
      }
      if (r) {
        let d = k.empty;
        let f = $from.index(-1) ? 1 : $from.index(-2) ? 2 : 3;
        for (let y = $from.depth - f; y >= $from.depth - 3; y--) {
          d = k.from($from.node(y).copy(d));
        }
        let h = $from.indexAfter(-1) < $from.node(-2).childCount ? 1 : $from.indexAfter(-2) < $from.node(-3).childCount ? 2 : 3;
        d = d.append(k.from(n.createAndFill()));
        let p = $from.before($from.depth - (f - 1));
        let m = t.tr.replace(p, $from.after(-h), new w(d, 4 - f, 0));
        let g = -1;
        m.doc.nodesBetween(p, m.doc.content.size, (y, b) => {
          if (g > -1) {
            return false;
          }
          if (y.isTextblock && y.content.size == 0) {
            g = b + 1;
          }
        });
        if (g > -1) {
          m.setSelection(O.near(m.doc.resolve(g)));
        }
        r(m.scrollIntoView());
      }
      return true;
    }
    let a = $to.pos == $from.end() ? l.contentMatchAt(0).defaultType : null;
    let c = t.tr.delete($from.pos, $to.pos);
    let u = a ? [null, {
      type: a
    }] : undefined;
    if (Ee(c.doc, $from.pos, 2, u)) {
      if (r) {
        r(c.split($from.pos, 2, u).scrollIntoView());
      }
      return true;
    }
    return false;
  };
}
function td(n) {
  return (e, t) => {
    let {
      $from,
      $to
    } = e.selection;
    let i = $from.blockRange($to, o => o.childCount > 0 && o.firstChild.type == n);
    if (i) {
      if (t) {
        if ($from.node(i.depth - 1).type == n) {
          return nd(e, t, n, i);
        }
        return rd(e, t, i);
      }
      return true;
    }
    return false;
  };
}
function nd({
  tr
}, e, t, r) {
  let r_end = r.end;
  let o = r.$to.end(r.depth);
  if (r_end < o) {
    tr.step(new J(r_end - 1, o, r_end, o, new w(k.from(t.create(null, r.parent.copy())), 1, 0), 1, true));
    r = new Hn(tr.doc.resolve(r.$from.pos), tr.doc.resolve(o), r.depth);
  }
  const l = Ht(r);
  if (l == null) {
    return false;
  }
  tr.lift(r, l);
  let a = tr.doc.resolve(tr.mapping.map(r_end, -1) - 1);
  if (et(tr.doc, a.pos) && a.nodeBefore.type == a.nodeAfter.type) {
    tr.join(a.pos);
  }
  e(tr.scrollIntoView());
  return true;
}
function rd({
  tr
}, e, t) {
  let t_parent = t.parent;
  for (let h = t.end, p = t.endIndex - 1, m = t.startIndex; p > m; p--) {
    h -= t_parent.child(p).nodeSize;
    tr.delete(h - 1, h + 1);
  }
  let i = tr.doc.resolve(t.start);
  let i_nodeAfter = i.nodeAfter;
  if (tr.mapping.map(t.end) != t.start + i.nodeAfter.nodeSize) {
    return false;
  }
  let l = t.startIndex == 0;
  let a = t.endIndex == t_parent.childCount;
  let c = i.node(-1);
  let u = i.index(-1);
  if (!c.canReplace(u + (l ? 0 : 1), u + 1, i_nodeAfter.content.append(a ? k.empty : k.from(t_parent)))) {
    return false;
  }
  let i_pos = i.pos;
  let f = i_pos + i_nodeAfter.nodeSize;
  tr.step(new J(i_pos - (l ? 1 : 0), f + (a ? 1 : 0), i_pos + 1, f - 1, new w((l ? k.empty : k.from(t_parent.copy(k.empty))).append(a ? k.empty : k.from(t_parent.copy(k.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1));
  e(tr.scrollIntoView());
  return true;
}
function sd(n) {
  return (e, t) => {
    let {
      $from,
      $to
    } = e.selection;
    let i = $from.blockRange($to, c => c.childCount > 0 && c.firstChild.type == n);
    if (!i) {
      return false;
    }
    let i_startIndex = i.startIndex;
    if (i_startIndex == 0) {
      return false;
    }
    let i_parent = i.parent;
    let a = i_parent.child(i_startIndex - 1);
    if (a.type != n) {
      return false;
    }
    if (t) {
      let c = a.lastChild && a.lastChild.type == i_parent.type;
      let u = k.from(c ? n.create() : null);
      let d = new w(k.from(n.create(null, k.from(i_parent.type.create(null, u)))), c ? 3 : 1, 0);
      let f = i.start;
      let h = i.end;
      t(e.tr.step(new J(f - (c ? 3 : 1), h, f, h, d, 1, true)).scrollIntoView());
    }
    return true;
  };
}
const X = n => {
  for (let e = 0;; e++) {
    n = n.previousSibling;
    if (!n) {
      return e;
    }
  }
};
const Lt = n => {
  let e = n.assignedSlot || n.parentNode;
  if (e && e.nodeType == 11) {
    return e.host;
  }
  return e;
};
let xs = null;
const Ie = (n, e, t) => {
  let r = xs || (xs = document.createRange());
  r.setEnd(n, t ?? n.nodeValue.length);
  r.setStart(n, e || 0);
  return r;
};
const id = () => {
  xs = null;
};
const mt = (n, e, t, r) => t && (Xi(n, e, t, r, -1) || Xi(n, e, t, r, 1));
const od = /^(img|br|input|textarea|hr)$/i;
function Xi(n, e, t, r, s) {
  let i;
  while (true) {
    if (n == t && e == r) {
      return true;
    }
    if (e == (s < 0 ? 0 : ge(n))) {
      let o = n.parentNode;
      if (!o || o.nodeType != 1 || yn(n) || od.test(n.nodeName) || n.contentEditable == "false") {
        return false;
      }
      e = X(n) + (s < 0 ? 0 : 1);
      n = o;
    } else if (n.nodeType == 1) {
      let o = n.childNodes[e + (s < 0 ? -1 : 0)];
      if (o.nodeType == 1 && o.contentEditable == "false") {
        if (!((i = o.pmViewDesc) === null || i === undefined) && i.ignoreForSelection) {
          e += s;
        } else {
          return false;
        }
      } else {
        n = o;
        e = s < 0 ? ge(n) : 0;
      }
    } else {
      return false;
    }
  }
}
function ge(n) {
  if (n.nodeType == 3) {
    return n.nodeValue.length;
  }
  return n.childNodes.length;
}
function ld(n, e) {
  while (true) {
    if (n.nodeType == 3 && e) {
      return n;
    }
    if (n.nodeType == 1 && e > 0) {
      if (n.contentEditable == "false") {
        return null;
      }
      n = n.childNodes[e - 1];
      e = ge(n);
    } else if (n.parentNode && !yn(n)) {
      e = X(n);
      n = n.parentNode;
    } else {
      return null;
    }
  }
}
function ad(n, e) {
  while (true) {
    if (n.nodeType == 3 && e < n.nodeValue.length) {
      return n;
    }
    if (n.nodeType == 1 && e < n.childNodes.length) {
      if (n.contentEditable == "false") {
        return null;
      }
      n = n.childNodes[e];
      e = 0;
    } else if (n.parentNode && !yn(n)) {
      e = X(n) + 1;
      n = n.parentNode;
    } else {
      return null;
    }
  }
}
function cd(n, focusOffset, dom) {
  for (let r = focusOffset == 0, s = focusOffset == ge(n); r || s;) {
    if (n == dom) {
      return true;
    }
    let i = X(n);
    n = n.parentNode;
    if (!n) {
      return false;
    }
    r = r && i == 0;
    s = s && i == ge(n);
  }
}
function yn(n) {
  let e;
  for (let t = n; t && !(e = t.pmViewDesc); t = t.parentNode);
  return e && e.node && e.node.isBlock && (e.dom == n || e.contentDOM == n);
}
const Nr = n => n.focusNode && mt(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset);
function st(n, e) {
  let t = document.createEvent("Event");
  t.initEvent("keydown", true, true);
  t.keyCode = n;
  t.key = t.code = e;
  return t;
}
function ud({
  activeElement
}) {
  while (activeElement && activeElement.shadowRoot) {
    activeElement = activeElement.shadowRoot.activeElement;
  }
  return activeElement;
}
function dd(ownerDocument, left, top) {
  if (ownerDocument.caretPositionFromPoint) {
    try {
      let r = ownerDocument.caretPositionFromPoint(left, top);
      if (r) {
        return {
          node: r.offsetNode,
          offset: Math.min(ge(r.offsetNode), r.offset)
        };
      }
    } catch {}
  }
  if (ownerDocument.caretRangeFromPoint) {
    let r = ownerDocument.caretRangeFromPoint(left, top);
    if (r) {
      return {
        node: r.startContainer,
        offset: Math.min(ge(r.startContainer), r.startOffset)
      };
    }
  }
}
const ve = typeof navigator !== "undefined" ? navigator : null;
const Qi = typeof document !== "undefined" ? document : null;
const tt = ve && ve.userAgent || "";
const Ss = /Edge\/(\d+)/.exec(tt);
const ea = /MSIE \d/.exec(tt);
const ws = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(tt);
const le = !!(ea || ws || Ss);
const Ge = ea ? document.documentMode : ws ? +ws[1] : Ss ? +Ss[1] : 0;
const ye = !le && /gecko\/(\d+)/i.test(tt);
ye && +(/Firefox\/(\d+)/.exec(tt) || [0, 0])[1];
const Cs = !le && /Chrome\/(\d+)/.exec(tt);
const U = !!Cs;
const ta = Cs ? +Cs[1] : 0;
const ee = !le && !!ve && /Apple Computer/.test(ve.vendor);
const zt = ee && (/Mobile\/\w+/.test(tt) || !!ve && ve.maxTouchPoints > 2);
const me = zt || (ve ? /Mac/.test(ve.platform) : false);
const na = ve ? /Win/.test(ve.platform) : false;
const Re = /Android \d/.test(tt);
const kn = !!Qi && "webkitFontSmoothing" in Qi.documentElement.style;
const fd = kn ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function hd(ownerDocument) {
  let e = ownerDocument.defaultView && ownerDocument.defaultView.visualViewport;
  if (e) {
    return {
      left: 0,
      right: e.width,
      top: 0,
      bottom: e.height
    };
  }
  return {
    left: 0,
    right: ownerDocument.documentElement.clientWidth,
    top: 0,
    bottom: ownerDocument.documentElement.clientHeight
  };
}
function Ae(n, e) {
  if (typeof n === "number") {
    return n;
  }
  return n[e];
}
function pd(n) {
  let e = n.getBoundingClientRect();
  let t = e.width / n.offsetWidth || 1;
  let r = e.height / n.offsetHeight || 1;
  return {
    left: e.left,
    right: e.left + n.clientWidth * t,
    top: e.top,
    bottom: e.top + n.clientHeight * r
  };
}
function Zi(n, e, focusNode) {
  let r = n.someProp("scrollThreshold") || 0;
  let s = n.someProp("scrollMargin") || 5;
  let ownerDocument = n.dom.ownerDocument;
  for (let o = focusNode || n.dom; o;) {
    if (o.nodeType != 1) {
      o = Lt(o);
      continue;
    }
    let l = o;
    let a = l == ownerDocument.body;
    let c = a ? hd(ownerDocument) : pd(l);
    let u = 0;
    let d = 0;
    if (e.top < c.top + Ae(r, "top")) {
      d = -(c.top - e.top + Ae(s, "top"));
    } else if (e.bottom > c.bottom - Ae(r, "bottom")) {
      d = e.bottom - e.top > c.bottom - c.top ? e.top + Ae(s, "top") - c.top : e.bottom - c.bottom + Ae(s, "bottom");
    }
    if (e.left < c.left + Ae(r, "left")) {
      u = -(c.left - e.left + Ae(s, "left"));
    } else if (e.right > c.right - Ae(r, "right")) {
      u = e.right - c.right + Ae(s, "right");
    }
    if (u || d) {
      if (a) {
        ownerDocument.defaultView.scrollBy(u, d);
      } else {
        let h = l.scrollLeft;
        let p = l.scrollTop;
        if (d) {
          l.scrollTop += d;
        }
        if (u) {
          l.scrollLeft += u;
        }
        let m = l.scrollLeft - h;
        let g = l.scrollTop - p;
        e = {
          left: e.left - m,
          top: e.top - g,
          right: e.right - m,
          bottom: e.bottom - g
        };
      }
    }
    let f = a ? "fixed" : getComputedStyle(o).position;
    if (/^(fixed|sticky)$/.test(f)) {
      break;
    }
    o = f == "absolute" ? o.offsetParent : Lt(o);
  }
}
function md(n) {
  let e = n.dom.getBoundingClientRect();
  let t = Math.max(0, e.top);
  let refDOM;
  let refTop;
  for (let i = (e.left + e.right) / 2, o = t + 1; o < Math.min(innerHeight, e.bottom); o += 5) {
    let l = n.root.elementFromPoint(i, o);
    if (!l || l == n.dom || !n.dom.contains(l)) {
      continue;
    }
    let a = l.getBoundingClientRect();
    if (a.top >= t - 20) {
      refDOM = l;
      refTop = a.top;
      break;
    }
  }
  return {
    refDOM,
    refTop,
    stack: ra(n.dom)
  };
}
function ra(dom) {
  let e = [];
  let n_ownerDocument = dom.ownerDocument;
  for (let r = dom; r && (e.push({
    dom: r,
    top: r.scrollTop,
    left: r.scrollLeft
  }), dom != n_ownerDocument); r = Lt(r));
  return e;
}
function gd({
  refDOM,
  refTop,
  stack
}) {
  let r = refDOM ? refDOM.getBoundingClientRect().top : 0;
  sa(stack, r == 0 ? 0 : r - refTop);
}
function sa(n, e) {
  for (let t = 0; t < n.length; t++) {
    let {
      dom,
      top,
      left
    } = n[t];
    if (dom.scrollTop != top + e) {
      dom.scrollTop = top + e;
    }
    if (dom.scrollLeft != left) {
      dom.scrollLeft = left;
    }
  }
}
let Mt = null;
function yd(dom) {
  if (dom.setActive) {
    return dom.setActive();
  }
  if (Mt) {
    return dom.focus(Mt);
  }
  let e = ra(dom);
  dom.focus(Mt == null ? {
    get preventScroll() {
      Mt = {
        preventScroll: true
      };
      return true;
    }
  } : undefined);
  if (!Mt) {
    Mt = false;
    sa(e, 0);
  }
}
function ia(n, e) {
  let t;
  let r = 200000000;
  let s;
  let i = 0;
  let e_top = e.top;
  let e_top_1 = e.top;
  let a;
  let c;
  for (let u = n.firstChild, d = 0; u; u = u.nextSibling, d++) {
    let f;
    if (u.nodeType == 1) {
      f = u.getClientRects();
    } else if (u.nodeType == 3) {
      f = Ie(u).getClientRects();
    } else {
      continue;
    }
    for (const p of f) {
      if (p.top <= e_top && p.bottom >= e_top_1) {
        e_top = Math.max(p.bottom, e_top);
        e_top_1 = Math.min(p.top, e_top_1);
        let m = p.left > e.left ? p.left - e.left : p.right < e.left ? e.left - p.right : 0;
        if (m < r) {
          t = u;
          r = m;
          s = m && t.nodeType == 3 ? {
            left: p.right < e.left ? p.right : p.left,
            top: e.top
          } : e;
          if (u.nodeType == 1 && m) {
            i = d + (e.left >= (p.left + p.right) / 2 ? 1 : 0);
          }
          continue;
        }
      } else {
        if (p.top > e.top && !a && p.left <= e.left && p.right >= e.left) {
          a = u;
          c = {
            left: Math.max(p.left, Math.min(p.right, e.left)),
            top: p.top
          };
        }
      }
      if (!t && (e.left >= p.right && e.top >= p.top || e.left >= p.left && e.top >= p.bottom)) {
        i = d + 1;
      }
    }
  }
  if (!t && a) {
    t = a;
    s = c;
    r = 0;
  }
  if (t && t.nodeType == 3) {
    return kd(t, s);
  }
  if (!t || r && t.nodeType == 1) {
    return {
      node: n,
      offset: i
    };
  }
  return ia(t, s);
}
function kd(n, e) {
  let length = n.nodeValue.length;
  let r = document.createRange();
  let s;
  for (let i = 0; i < length; i++) {
    r.setEnd(n, i + 1);
    r.setStart(n, i);
    let o = He(r, 1);
    if (o.top != o.bottom && Zs(e, o)) {
      s = {
        node: n,
        offset: i + (e.left >= (o.left + o.right) / 2 ? 1 : 0)
      };
      break;
    }
  }
  r.detach();
  return s || {
    node: n,
    offset: 0
  };
}
function Zs(n, e) {
  return n.left >= e.left - 1 && n.left <= e.right + 1 && n.top >= e.top - 1 && n.top <= e.bottom + 1;
}
function bd(n, e) {
  let n_parentNode = n.parentNode;
  if (n_parentNode && /^li$/i.test(n_parentNode.nodeName) && e.left < n.getBoundingClientRect().left) {
    return n_parentNode;
  }
  return n;
}
function xd(n, e, t) {
  let {
    node,
    offset
  } = ia(e, t);
  let i = -1;
  if (node.nodeType == 1 && !node.firstChild) {
    let o = node.getBoundingClientRect();
    i = o.left != o.right && t.left > (o.left + o.right) / 2 ? 1 : -1;
  }
  return n.docView.posFromDOM(node, offset, i);
}
function Sd(n, e, t, r) {
  let s = -1;
  for (let i = e, o = false; i != n.dom;) {
    let l = n.docView.nearestDesc(i, true);
    let a;
    if (!l) {
      return null;
    }
    if (l.dom.nodeType == 1 && (l.node.isBlock && l.parent || !l.contentDOM) && ((a = l.dom.getBoundingClientRect()).width || a.height) && (l.node.isBlock && l.parent && !/^T(R|BODY|HEAD|FOOT)$/.test(l.dom.nodeName) && (!o && a.left > r.left || a.top > r.top ? s = l.posBefore : (!o && a.right < r.left || a.bottom < r.top) && (s = l.posAfter), o = true), !l.contentDOM && s < 0 && !l.node.isText)) {
      if (l.node.isBlock ? r.top < (a.top + a.bottom) / 2 : r.left < (a.left + a.right) / 2) {
        return l.posBefore;
      }
      return l.posAfter;
    }
    i = l.dom.parentNode;
  }
  if (s > -1) {
    return s;
  }
  return n.docView.posFromDOM(e, t, -1);
}
function oa(n, e, t) {
  let length = n.childNodes.length;
  if (length && t.top < t.bottom) {
    for (let s = Math.max(0, Math.min(length - 1, Math.floor(length * (e.top - t.top) / (t.bottom - t.top)) - 2)), i = s;;) {
      let o = n.childNodes[i];
      if (o.nodeType == 1) {
        let l = o.getClientRects();
        for (const c of l) {
          if (Zs(e, c)) {
            return oa(o, e, c);
          }
        }
      }
      if ((i = (i + 1) % length) == s) {
        break;
      }
    }
  }
  return n;
}
function wd(n, e) {
  let ownerDocument = n.dom.ownerDocument;
  let r;
  let s = 0;
  let i = dd(ownerDocument, e.left, e.top);
  if (i) {
    ({
      node: r,
      offset: s
    } = i);
  }
  let o = (n.root.elementFromPoint ? n.root : ownerDocument).elementFromPoint(e.left, e.top);
  let l;
  if (!o || !n.dom.contains(o.nodeType != 1 ? o.parentNode : o)) {
    let c = n.dom.getBoundingClientRect();
    if (!Zs(e, c) || (o = oa(n.dom, e, c), !o)) {
      return null;
    }
  }
  if (ee) {
    for (let c = o; r && c; c = Lt(c)) {
      if (c.draggable) {
        r = undefined;
      }
    }
  }
  o = bd(o, e);
  if (r) {
    if (ye && r.nodeType == 1 && (s = Math.min(s, r.childNodes.length), s < r.childNodes.length)) {
      let u = r.childNodes[s];
      let d;
      u.nodeName == "IMG" && (d = u.getBoundingClientRect()).right <= e.left && d.bottom > e.top && s++;
    }
    let c;
    kn && s && r.nodeType == 1 && (c = r.childNodes[s - 1]).nodeType == 1 && c.contentEditable == "false" && c.getBoundingClientRect().top >= e.top && s--;
    if (r == n.dom && s == r.childNodes.length - 1 && r.lastChild.nodeType == 1 && e.top > r.lastChild.getBoundingClientRect().bottom) {
      l = n.state.doc.content.size;
    } else if (s == 0 || r.nodeType != 1 || r.childNodes[s - 1].nodeName != "BR") {
      l = Sd(n, r, s, e);
    }
  }
  if (l == null) {
    l = xd(n, o, e);
  }
  let a = n.docView.nearestDesc(o, true);
  return {
    pos: l,
    inside: a ? a.posAtStart - a.border : -1
  };
}
function eo(n) {
  return n.top < n.bottom || n.left < n.right;
}
function He(n, e) {
  let t = n.getClientRects();
  if (t.length) {
    let r = t[e < 0 ? 0 : t.length - 1];
    if (eo(r)) {
      return r;
    }
  }
  return Array.prototype.find.call(t, eo) || n.getBoundingClientRect();
}
const Cd = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function la(n, e, t) {
  let {
    node,
    offset,
    atom
  } = n.docView.domFromPos(e, t < 0 ? -1 : 1);
  let o = kn || ye;
  if (node.nodeType == 3) {
    if (o && (Cd.test(node.nodeValue) || (t < 0 ? !offset : offset == node.nodeValue.length))) {
      let a = He(Ie(node, offset, offset), t);
      if (ye && offset && /\s/.test(node.nodeValue[offset - 1]) && offset < node.nodeValue.length) {
        let c = He(Ie(node, offset - 1, offset - 1), -1);
        if (c.top == a.top) {
          let u = He(Ie(node, offset, offset + 1), -1);
          if (u.top != a.top) {
            return jt(u, u.left < c.left);
          }
        }
      }
      return a;
    } else {
      let a = offset;
      let c = offset;
      let u = t < 0 ? 1 : -1;
      if (t < 0 && !offset) {
        c++;
        u = -1;
      } else if (t >= 0 && offset == node.nodeValue.length) {
        a--;
        u = 1;
      } else if (t < 0) {
        a--;
      } else {
        c++;
      }
      return jt(He(Ie(node, a, c), u), u < 0);
    }
  }
  if (!n.state.doc.resolve(e - (atom || 0)).parent.inlineContent) {
    if (atom == null && offset && (t < 0 || offset == ge(node))) {
      let a = node.childNodes[offset - 1];
      if (a.nodeType == 1) {
        return Gr(a.getBoundingClientRect(), false);
      }
    }
    if (atom == null && offset < ge(node)) {
      let a = node.childNodes[offset];
      if (a.nodeType == 1) {
        return Gr(a.getBoundingClientRect(), true);
      }
    }
    return Gr(node.getBoundingClientRect(), t >= 0);
  }
  if (atom == null && offset && (t < 0 || offset == ge(node))) {
    let a = node.childNodes[offset - 1];
    let c = a.nodeType == 3 ? Ie(a, ge(a) - (o ? 0 : 1)) : a.nodeType == 1 && (a.nodeName != "BR" || !a.nextSibling) ? a : null;
    if (c) {
      return jt(He(c, 1), false);
    }
  }
  if (atom == null && offset < ge(node)) {
    let a = node.childNodes[offset];
    while (a.pmViewDesc && a.pmViewDesc.ignoreForCoords) {
      a = a.nextSibling;
    }
    let c = a ? a.nodeType == 3 ? Ie(a, 0, o ? 0 : 1) : a.nodeType == 1 ? a : null : null;
    if (c) {
      return jt(He(c, -1), true);
    }
  }
  return jt(He(node.nodeType == 3 ? Ie(node) : node, -t), t >= 0);
}
function jt(n, e) {
  if (n.width == 0) {
    return n;
  }
  let t = e ? n.left : n.right;
  return {
    top: n.top,
    bottom: n.bottom,
    left: t,
    right: t
  };
}
function Gr(n, e) {
  if (n.height == 0) {
    return n;
  }
  let t = e ? n.top : n.bottom;
  return {
    top: t,
    bottom: t,
    left: n.left,
    right: n.right
  };
}
function aa(n, e, t) {
  let n_state = n.state;
  let activeElement = n.root.activeElement;
  if (n_state != e) {
    n.updateState(e);
  }
  if (activeElement != n.dom) {
    n.focus();
  }
  try {
    return t();
  } finally {
    if (n_state != e) {
      n.updateState(n_state);
    }
    if (activeElement != n.dom && activeElement) {
      activeElement.focus();
    }
  }
}
function Md(n, e, t) {
  let e_selection = e.selection;
  let s = t == "up" ? e_selection.$from : e_selection.$to;
  return aa(n, e, () => {
    let {
      node
    } = n.docView.domFromPos(s.pos, t == "up" ? -1 : 1);
    while (true) {
      let l = n.docView.nearestDesc(node, true);
      if (!l) {
        break;
      }
      if (l.node.isBlock) {
        node = l.contentDOM || l.dom;
        break;
      }
      node = l.dom.parentNode;
    }
    let o = la(n, s.pos, 1);
    for (let l = node.firstChild; l; l = l.nextSibling) {
      let a;
      if (l.nodeType == 1) {
        a = l.getClientRects();
      } else if (l.nodeType == 3) {
        a = Ie(l, 0, l.nodeValue.length).getClientRects();
      } else {
        continue;
      }
      for (const u of a) {
        if (u.bottom > u.top + 1 && (t == "up" ? o.top - u.top > (u.bottom - o.top) * 2 : u.bottom - o.bottom > (o.bottom - u.top) * 2)) {
          return false;
        }
      }
    }
    return true;
  });
}
const Ed = /[\u0590-\u08ac]/;
function vd(n, e, t) {
  let {
    $head
  } = e.selection;
  if (!$head.parent.isTextblock) {
    return false;
  }
  let $head_parentOffset = $head.parentOffset;
  let i = !$head_parentOffset;
  let o = $head_parentOffset == $head.parent.content.size;
  let l = n.domSelection();
  if (l) {
    if (!Ed.test($head.parent.textContent) || !l.modify) {
      if (t == "left" || t == "backward") {
        return i;
      }
      return o;
    }
    return aa(n, e, () => {
      let {
        focusNode,
        focusOffset,
        anchorNode,
        anchorOffset
      } = n.domSelectionRange();
      let l_caretBidiLevel = l.caretBidiLevel;
      l.modify("move", t, "character");
      let h = $head.depth ? n.docView.domAfterPos($head.before()) : n.dom;
      let {
        focusNode: focusNode_1,
        focusOffset: focusOffset_1
      } = n.domSelectionRange();
      let g = focusNode_1 && !h.contains(focusNode_1.nodeType == 1 ? focusNode_1 : focusNode_1.parentNode) || focusNode == focusNode_1 && focusOffset == focusOffset_1;
      try {
        l.collapse(anchorNode, anchorOffset);
        if (focusNode && (focusNode != anchorNode || focusOffset != anchorOffset) && l.extend) {
          l.extend(focusNode, focusOffset);
        }
      } catch {}
      if (l_caretBidiLevel != null) {
        l.caretBidiLevel = l_caretBidiLevel;
      }
      return g;
    });
  }
  return $head.pos == $head.start() || $head.pos == $head.end();
}
let to = null;
let no = null;
let ro = false;
function Td(n, e, t) {
  if (to == e && no == t) {
    return ro;
  }
  to = e;
  no = t;
  return ro = t == "up" || t == "down" ? Md(n, e, t) : vd(n, e, t);
}
const ke = 0;
const so = 1;
const it = 2;
const Te = 3;
class bn {
  constructor(e, t, r, s) {
    this.parent = e;
    this.children = t;
    this.dom = r;
    this.contentDOM = s;
    this.dirty = ke;
    r.pmViewDesc = this;
  }
  matchesWidget(e) {
    return false;
  }
  matchesMark(e) {
    return false;
  }
  matchesNode(e, t, r) {
    return false;
  }
  matchesHack(e) {
    return false;
  }
  parseRule() {
    return null;
  }
  stopEvent(e) {
    return false;
  }
  get size() {
    let e = 0;
    for (let t = 0; t < this.children.length; t++) {
      e += this.children[t].size;
    }
    return e;
  }
  get border() {
    return 0;
  }
  destroy() {
    this.parent = undefined;
    if (this.dom.pmViewDesc == this) {
      this.dom.pmViewDesc = undefined;
    }
    for (let e = 0; e < this.children.length; e++) {
      this.children[e].destroy();
    }
  }
  posBeforeChild(e) {
    for (let t = 0, r = this.posAtStart;; t++) {
      let s = this.children[t];
      if (s == e) {
        return r;
      }
      r += s.size;
    }
  }
  get posBefore() {
    return this.parent.posBeforeChild(this);
  }
  get posAtStart() {
    if (this.parent) {
      return this.parent.posBeforeChild(this) + this.border;
    }
    return 0;
  }
  get posAfter() {
    return this.posBefore + this.size;
  }
  get posAtEnd() {
    return this.posAtStart + this.size - 2 * this.border;
  }
  localPosFromDOM(e, t, r) {
    if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode)) {
      if (r < 0) {
        let i;
        let o;
        if (e == this.contentDOM) {
          i = e.childNodes[t - 1];
        } else {
          while (e.parentNode != this.contentDOM) {
            e = e.parentNode;
          }
          i = e.previousSibling;
        }
        while (i && !((o = i.pmViewDesc) && o.parent == this)) {
          i = i.previousSibling;
        }
        if (i) {
          return this.posBeforeChild(o) + o.size;
        }
        return this.posAtStart;
      } else {
        let i;
        let o;
        if (e == this.contentDOM) {
          i = e.childNodes[t];
        } else {
          while (e.parentNode != this.contentDOM) {
            e = e.parentNode;
          }
          i = e.nextSibling;
        }
        while (i && !((o = i.pmViewDesc) && o.parent == this)) {
          i = i.nextSibling;
        }
        if (i) {
          return this.posBeforeChild(o);
        }
        return this.posAtEnd;
      }
    }
    let s;
    if (e == this.dom && this.contentDOM) {
      s = t > X(this.contentDOM);
    } else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM)) {
      s = e.compareDocumentPosition(this.contentDOM) & 2;
    } else if (this.dom.firstChild) {
      if (t == 0) {
        for (let i = e;; i = i.parentNode) {
          if (i == this.dom) {
            s = false;
            break;
          }
          if (i.previousSibling) {
            break;
          }
        }
      }
      if (s == null && t == e.childNodes.length) {
        for (let i = e;; i = i.parentNode) {
          if (i == this.dom) {
            s = true;
            break;
          }
          if (i.nextSibling) {
            break;
          }
        }
      }
    }
    if (s ?? r > 0) {
      return this.posAtEnd;
    }
    return this.posAtStart;
  }
  nearestDesc(e, t = false) {
    for (let r = true, s = e; s; s = s.parentNode) {
      let i = this.getDesc(s);
      let o;
      if (i && (!t || i.node)) {
        if (r && (o = i.nodeDOM) && !(o.nodeType == 1 ? o.contains(e.nodeType == 1 ? e : e.parentNode) : o == e)) {
          r = false;
        } else {
          return i;
        }
      }
    }
  }
  getDesc({
    pmViewDesc
  }) {
    for (let r = pmViewDesc; r; r = r.parent) {
      if (r == this) {
        return pmViewDesc;
      }
    }
  }
  posFromDOM(e, t, r) {
    for (let s = e; s; s = s.parentNode) {
      let i = this.getDesc(s);
      if (i) {
        return i.localPosFromDOM(e, t, r);
      }
    }
    return -1;
  }
  descAt(e) {
    for (let t = 0, r = 0; t < this.children.length; t++) {
      let s = this.children[t];
      let i = r + s.size;
      if (r == e && i != r) {
        while (!s.border && s.children.length) {
          for (let o = 0; o < s.children.length; o++) {
            let child = s.children[o];
            if (child.size) {
              s = child;
              break;
            }
          }
        }
        return s;
      }
      if (e < i) {
        return s.descAt(e - r - s.border);
      }
      r = i;
    }
  }
  domFromPos(e, t) {
    if (!this.contentDOM) {
      return {
        node: this.dom,
        offset: 0,
        atom: e + 1
      };
    }
    let r = 0;
    let s = 0;
    for (let i = 0; r < this.children.length; r++) {
      let o = this.children[r];
      let l = i + o.size;
      if (l > e || o instanceof ua) {
        s = e - i;
        break;
      }
      i = l;
    }
    if (s) {
      return this.children[r].domFromPos(s - this.children[r].border, t);
    }
    for (let i; r && !(i = this.children[r - 1]).size && i instanceof ca && i.side >= 0; r--);
    if (t <= 0) {
      let i;
      let o = true;
      for (; i = r ? this.children[r - 1] : null, !(!i || i.dom.parentNode == this.contentDOM); r--, o = false);
      if (i && t && o && !i.border && !i.domAtom) {
        return i.domFromPos(i.size, t);
      }
      return {
        node: this.contentDOM,
        offset: i ? X(i.dom) + 1 : 0
      };
    } else {
      let i;
      let o = true;
      for (; i = r < this.children.length ? this.children[r] : null, !(!i || i.dom.parentNode == this.contentDOM); r++, o = false);
      if (i && o && !i.border && !i.domAtom) {
        return i.domFromPos(0, t);
      }
      return {
        node: this.contentDOM,
        offset: i ? X(i.dom) : this.contentDOM.childNodes.length
      };
    }
  }
  parseRange(e, t, r = 0) {
    if (this.children.length == 0) {
      return {
        node: this.contentDOM,
        from: e,
        to: t,
        fromOffset: 0,
        toOffset: this.contentDOM.childNodes.length
      };
    }
    let fromOffset = -1;
    let toOffset = -1;
    for (let o = r, l = 0;; l++) {
      let a = this.children[l];
      let c = o + a.size;
      if (fromOffset == -1 && e <= c) {
        let u = o + a.border;
        if (e >= u && t <= c - a.border && a.node && a.contentDOM && this.contentDOM.contains(a.contentDOM)) {
          return a.parseRange(e, t, u);
        }
        e = o;
        for (let d = l; d > 0; d--) {
          let f = this.children[d - 1];
          if (f.size && f.dom.parentNode == this.contentDOM && !f.emptyChildAt(1)) {
            fromOffset = X(f.dom) + 1;
            break;
          }
          e -= f.size;
        }
        if (fromOffset == -1) {
          fromOffset = 0;
        }
      }
      if (fromOffset > -1 && (c > t || l == this.children.length - 1)) {
        t = c;
        for (let u = l + 1; u < this.children.length; u++) {
          let child = this.children[u];
          if (child.size && child.dom.parentNode == this.contentDOM && !child.emptyChildAt(-1)) {
            toOffset = X(child.dom);
            break;
          }
          t += child.size;
        }
        if (toOffset == -1) {
          toOffset = this.contentDOM.childNodes.length;
        }
        break;
      }
      o = c;
    }
    return {
      node: this.contentDOM,
      from: e,
      to: t,
      fromOffset,
      toOffset
    };
  }
  emptyChildAt(e) {
    if (this.border || !this.contentDOM || !this.children.length) {
      return false;
    }
    let t = this.children[e < 0 ? 0 : this.children.length - 1];
    return t.size == 0 || t.emptyChildAt(e);
  }
  domAfterPos(e) {
    let {
      node,
      offset
    } = this.domFromPos(e, 0);
    if (node.nodeType != 1 || offset == node.childNodes.length) {
      throw new RangeError(`No node after pos ${e}`);
    }
    return node.childNodes[offset];
  }
  setSelection(e, t, r, s = false) {
    let i = Math.min(e, t);
    let o = Math.max(e, t);
    for (let h = 0, p = 0; h < this.children.length; h++) {
      let child = this.children[h];
      let g = p + child.size;
      if (i > p && o < g) {
        return child.setSelection(e - p - child.border, t - p - child.border, r, s);
      }
      p = g;
    }
    let l = this.domFromPos(e, e ? -1 : 1);
    let a = t == e ? l : this.domFromPos(t, t ? -1 : 1);
    let c = r.root.getSelection();
    let u = r.domSelectionRange();
    let d = false;
    if ((ye || ee) && e == t) {
      let {
        node,
        offset
      } = l;
      if (node.nodeType == 3) {
        d = !!(offset && node.nodeValue[offset - 1] == `
`);
        if (d && offset == node.nodeValue.length) {
          for (let m = node, g; m; m = m.parentNode) {
            if (g = m.nextSibling) {
              if (g.nodeName == "BR") {
                l = a = {
                  node: g.parentNode,
                  offset: X(g) + 1
                };
              }
              break;
            }
            let y = m.pmViewDesc;
            if (y && y.node && y.node.isBlock) {
              break;
            }
          }
        }
      } else {
        let m = node.childNodes[offset - 1];
        d = m && (m.nodeName == "BR" || m.contentEditable == "false");
      }
    }
    if (ye && u.focusNode && u.focusNode != a.node && u.focusNode.nodeType == 1) {
      let h = u.focusNode.childNodes[u.focusOffset];
      if (h && h.contentEditable == "false") {
        s = true;
      }
    }
    if (!(s || d && ee) && mt(l.node, l.offset, u.anchorNode, u.anchorOffset) && mt(a.node, a.offset, u.focusNode, u.focusOffset)) {
      return;
    }
    let f = false;
    if ((c.extend || e == t) && !(d && ye)) {
      c.collapse(l.node, l.offset);
      try {
        if (e != t) {
          c.extend(a.node, a.offset);
        }
        f = true;
      } catch {}
    }
    if (!f) {
      if (e > t) {
        let p = l;
        l = a;
        a = p;
      }
      let h = document.createRange();
      h.setEnd(a.node, a.offset);
      h.setStart(l.node, l.offset);
      c.removeAllRanges();
      c.addRange(h);
    }
  }
  ignoreMutation(e) {
    return !this.contentDOM && e.type != "selection";
  }
  get contentLost() {
    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
  }
  markDirty(e, t) {
    for (let r = 0, s = 0; s < this.children.length; s++) {
      let i = this.children[s];
      let o = r + i.size;
      if (r == o ? e <= o && t >= r : e < o && t > r) {
        let l = r + i.border;
        let a = o - i.border;
        if (e >= l && t <= a) {
          this.dirty = e == r || t == o ? it : so;
          if (e == l && t == a && (i.contentLost || i.dom.parentNode != this.contentDOM)) {
            i.dirty = Te;
          } else {
            i.markDirty(e - l, t - l);
          }
          return;
        } else {
          i.dirty = i.dom == i.contentDOM && i.dom.parentNode == this.contentDOM && !i.children.length ? it : Te;
        }
      }
      r = o;
    }
    this.dirty = it;
  }
  markParentsDirty() {
    let e = 1;
    for (let t = this.parent; t; t = t.parent, e++) {
      let r = e == 1 ? it : so;
      if (t.dirty < r) {
        t.dirty = r;
      }
    }
  }
  get domAtom() {
    return false;
  }
  get ignoreForCoords() {
    return false;
  }
  get ignoreForSelection() {
    return false;
  }
  isText(e) {
    return false;
  }
}
class ca extends bn {
  constructor(e, t, r, s) {
    let i;
    let o = t.type.toDOM;
    if (typeof o === "function") {
      o = o(r, () => {
        if (!i) {
          return s;
        }
        if (i.parent) {
          return i.parent.posBeforeChild(i);
        }
      });
    }
    if (!t.type.spec.raw) {
      if (o.nodeType != 1) {
        let l = document.createElement("span");
        l.appendChild(o);
        o = l;
      }
      o.contentEditable = "false";
      o.classList.add("ProseMirror-widget");
    }
    super(e, [], o, null);
    this.widget = t;
    this.widget = t;
    i = this;
  }
  matchesWidget(e) {
    return this.dirty == ke && e.type.eq(this.widget.type);
  }
  parseRule() {
    return {
      ignore: true
    };
  }
  stopEvent(e) {
    let stopEvent = this.widget.spec.stopEvent;
    if (stopEvent) {
      return stopEvent(e);
    }
    return false;
  }
  ignoreMutation(e) {
    return e.type != "selection" || this.widget.spec.ignoreSelection;
  }
  destroy() {
    this.widget.type.destroy(this.dom);
    super.destroy();
  }
  get domAtom() {
    return true;
  }
  get ignoreForSelection() {
    return !!this.widget.type.spec.relaxedSide;
  }
  get side() {
    return this.widget.type.side;
  }
}
class Ad extends bn {
  constructor(e, t, r, s) {
    super(e, [], t, null);
    this.textDOM = r;
    this.text = s;
  }
  get size() {
    return this.text.length;
  }
  localPosFromDOM(e, t) {
    if (e != this.textDOM) {
      return this.posAtStart + (t ? this.size : 0);
    }
    return this.posAtStart + t;
  }
  domFromPos(e) {
    return {
      node: this.textDOM,
      offset: e
    };
  }
  ignoreMutation(e) {
    return e.type === "characterData" && e.target.nodeValue == e.oldValue;
  }
}
class gt extends bn {
  constructor(e, t, r, s, i) {
    super(e, [], r, s);
    this.mark = t;
    this.spec = i;
  }
  static create(e, t, r, s) {
    let i = s.nodeViews[t.type.name];
    let o = i && i(t, s, r);
    if (!o || !o.dom) {
      o = a1.renderSpec(document, t.type.spec.toDOM(t, r), null, t.attrs);
    }
    return new gt(e, t, o.dom, o.contentDOM || o.dom, o);
  }
  parseRule() {
    if (this.dirty & Te || this.mark.type.spec.reparseInView) {
      return null;
    }
    return {
      mark: this.mark.type.name,
      attrs: this.mark.attrs,
      contentElement: this.contentDOM
    };
  }
  matchesMark(e) {
    return this.dirty != Te && this.mark.eq(e);
  }
  markDirty(e, t) {
    super.markDirty(e, t);
    if (this.dirty != ke) {
      let r = this.parent;
      while (!r.node) {
        r = r.parent;
      }
      if (r.dirty < this.dirty) {
        r.dirty = this.dirty;
      }
      this.dirty = ke;
    }
  }
  slice(e, t, r) {
    let s = gt.create(this.parent, this.mark, true, r);
    let children = this.children;
    let size = this.size;
    if (t < size) {
      children = Es(children, t, size, r);
    }
    if (e > 0) {
      children = Es(children, 0, e, r);
    }
    for (let l = 0; l < children.length; l++) {
      children[l].parent = s;
    }
    s.children = children;
    return s;
  }
  ignoreMutation(e) {
    if (this.spec.ignoreMutation) {
      return this.spec.ignoreMutation(e);
    }
    return super.ignoreMutation(e);
  }
  destroy() {
    if (this.spec.destroy) {
      this.spec.destroy();
    }
    super.destroy();
  }
}
class Ye extends bn {
  constructor(e, t, r, s, i, o, l, a, c) {
    super(e, [], i, o);
    this.node = t;
    this.outerDeco = r;
    this.innerDeco = s;
    this.nodeDOM = l;
  }
  static create(e, t, r, s, i, o) {
    let l = i.nodeViews[t.type.name];
    let a;
    let c = l && l(t, i, () => {
      if (!a) {
        return o;
      }
      if (a.parent) {
        return a.parent.posBeforeChild(a);
      }
    }, r, s);
    let u = c && c.dom;
    let d = c && c.contentDOM;
    if (t.isText) {
      if (!u) {
        u = document.createTextNode(t.text);
      } else if (u.nodeType != 3) {
        throw new RangeError("Text must be rendered as a DOM text node");
      }
    } else {
      if (!u) {
        ({
          dom: u,
          contentDOM: d
        } = a1.renderSpec(document, t.type.spec.toDOM(t), null, t.attrs));
      }
    }
    !d && !t.isText && u.nodeName != "BR" && (u.hasAttribute("contenteditable") || (u.contentEditable = "false"), t.type.spec.draggable && (u.draggable = true));
    let f = u;
    u = ha(u, r, t);
    if (c) {
      return a = new Nd(e, t, r, s, u, d || null, f, c, i, o + 1);
    }
    if (t.isText) {
      return new Or(e, t, r, s, u, f, i);
    }
    return new Ye(e, t, r, s, u, d || null, f, i, o + 1);
  }
  parseRule() {
    if (this.node.type.spec.reparseInView) {
      return null;
    }
    let e = {
      node: this.node.type.name,
      attrs: this.node.attrs
    };
    if (this.node.type.whitespace == "pre") {
      e.preserveWhitespace = "full";
    }
    if (!this.contentDOM) {
      e.getContent = () => this.node.content;
    } else if (!this.contentLost) {
      e.contentElement = this.contentDOM;
    } else {
      for (let t = this.children.length - 1; t >= 0; t--) {
        let r = this.children[t];
        if (this.dom.contains(r.dom.parentNode)) {
          e.contentElement = r.dom.parentNode;
          break;
        }
      }
      if (!e.contentElement) {
        e.getContent = () => k.empty;
      }
    }
    return e;
  }
  matchesNode(e, t, r) {
    return this.dirty == ke && e.eq(this.node) && jn(t, this.outerDeco) && r.eq(this.innerDeco);
  }
  get size() {
    return this.node.nodeSize;
  }
  get border() {
    if (this.node.isLeaf) {
      return 0;
    }
    return 1;
  }
  updateChildren(e, t) {
    let inlineContent = this.node.inlineContent;
    let s = t;
    let i = e.composing ? this.localCompositionInfo(e, t) : null;
    let o = i && i.pos > -1 ? i : null;
    let l = i && i.pos < 0;
    let a = new Dd(this, o && o.node, e);
    Pd(this.node, this.innerDeco, (c, u, d) => {
      if (c.spec.marks) {
        a.syncToMarks(c.spec.marks, inlineContent, e);
      } else if (c.type.side >= 0 && !d) {
        a.syncToMarks(u == this.node.childCount ? M.none : this.node.child(u).marks, inlineContent, e);
      }
      a.placeWidget(c, e, s);
    }, (c, u, d, f) => {
      a.syncToMarks(c.marks, inlineContent, e);
      let h;
      if (!(a.findNodeMatch(c, u, d, f) || l && e.state.selection.from > s && e.state.selection.to < s + c.nodeSize && (h = a.findIndexWithChild(i.node)) > -1 && a.updateNodeAt(c, u, d, h, e) || a.updateNextNode(c, u, d, e, f, s))) {
        a.addNode(c, u, d, e, s);
      }
      s += c.nodeSize;
    });
    a.syncToMarks([], inlineContent, e);
    if (this.node.isTextblock) {
      a.addTextblockHacks();
    }
    a.destroyRest();
    if (a.changed || this.dirty == it) {
      if (o) {
        this.protectLocalComposition(e, o);
      }
      da(this.contentDOM, this.children, e);
      if (zt) {
        Ld(this.dom);
      }
    }
  }
  localCompositionInfo(e, t) {
    let {
      from,
      to
    } = e.state.selection;
    if (!(e.state.selection instanceof N) || from < t || to > t + this.node.content.size) {
      return null;
    }
    let compositionNode = e.input.compositionNode;
    if (!compositionNode || !this.dom.contains(compositionNode.parentNode)) {
      return null;
    }
    if (this.node.inlineContent) {
      let o = compositionNode.nodeValue;
      let l = zd(this.node.content, o, from - t, to - t);
      if (l < 0) {
        return null;
      }
      return {
        node: compositionNode,
        pos: l,
        text: o
      };
    } else {
      return {
        node: compositionNode,
        pos: -1,
        text: ""
      };
    }
  }
  protectLocalComposition(e, {
    node,
    pos,
    text
  }) {
    if (this.getDesc(node)) {
      return;
    }
    let i = node;
    for (; i.parentNode != this.contentDOM; i = i.parentNode) {
      while (i.previousSibling) {
        i.parentNode.removeChild(i.previousSibling);
      }
      while (i.nextSibling) {
        i.parentNode.removeChild(i.nextSibling);
      }
      if (i.pmViewDesc) {
        i.pmViewDesc = undefined;
      }
    }
    let o = new Ad(this, i, node, text);
    e.input.compositionNodes.push(o);
    this.children = Es(this.children, pos, pos + text.length, e, o);
  }
  update(e, t, r, s) {
    if (this.dirty == Te || !e.sameMarkup(this.node)) {
      return false;
    }
    this.updateInner(e, t, r, s);
    return true;
  }
  updateInner(e, t, r, s) {
    this.updateOuterDeco(t);
    this.node = e;
    this.innerDeco = r;
    if (this.contentDOM) {
      this.updateChildren(s, this.posAtStart);
    }
    this.dirty = ke;
  }
  updateOuterDeco(e) {
    if (jn(e, this.outerDeco)) {
      return;
    }
    let t = this.nodeDOM.nodeType != 1;
    let dom = this.dom;
    this.dom = fa(this.dom, this.nodeDOM, Ms(this.outerDeco, this.node, t), Ms(e, this.node, t));
    if (this.dom != dom) {
      dom.pmViewDesc = undefined;
      this.dom.pmViewDesc = this;
    }
    this.outerDeco = e;
  }
  selectNode() {
    if (this.nodeDOM.nodeType == 1) {
      this.nodeDOM.classList.add("ProseMirror-selectednode");
      if (this.contentDOM || !this.node.type.spec.draggable) {
        this.nodeDOM.draggable = true;
      }
    }
  }
  deselectNode() {
    if (this.nodeDOM.nodeType == 1) {
      this.nodeDOM.classList.remove("ProseMirror-selectednode");
      if (this.contentDOM || !this.node.type.spec.draggable) {
        this.nodeDOM.removeAttribute("draggable");
      }
    }
  }
  get domAtom() {
    return this.node.isAtom;
  }
}
function io(doc, e, t, dom, s) {
  ha(dom, e, doc);
  let i = new Ye(undefined, doc, e, t, dom, dom, dom, s, 0);
  if (i.contentDOM) {
    i.updateChildren(s, 0);
  }
  return i;
}
class Or extends Ye {
  constructor(e, t, r, s, i, o, l) {
    super(e, t, r, s, i, null, o, l, 0);
  }
  parseRule() {
    let parentNode = this.nodeDOM.parentNode;
    while (parentNode && parentNode != this.dom && !parentNode.pmIsDeco) {
      parentNode = parentNode.parentNode;
    }
    return {
      skip: parentNode || true
    };
  }
  update(e, t, r, s) {
    if (this.dirty == Te || this.dirty != ke && !this.inParent() || !e.sameMarkup(this.node)) {
      return false;
    }
    this.updateOuterDeco(t);
    if ((this.dirty != ke || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue) {
      this.nodeDOM.nodeValue = e.text;
      if (s.trackWrites == this.nodeDOM) {
        s.trackWrites = null;
      }
    }
    this.node = e;
    this.dirty = ke;
    return true;
  }
  inParent() {
    let contentDOM = this.parent.contentDOM;
    for (let t = this.nodeDOM; t; t = t.parentNode) {
      if (t == contentDOM) {
        return true;
      }
    }
    return false;
  }
  domFromPos(e) {
    return {
      node: this.nodeDOM,
      offset: e
    };
  }
  localPosFromDOM(e, t, r) {
    if (e == this.nodeDOM) {
      return this.posAtStart + Math.min(t, this.node.text.length);
    }
    return super.localPosFromDOM(e, t, r);
  }
  ignoreMutation(e) {
    return e.type != "characterData" && e.type != "selection";
  }
  slice(e, t, r) {
    let s = this.node.cut(e, t);
    let i = document.createTextNode(s.text);
    return new Or(this.parent, s, this.outerDeco, this.innerDeco, i, i, r);
  }
  markDirty(e, t) {
    super.markDirty(e, t);
    if (this.dom != this.nodeDOM && (e == 0 || t == this.nodeDOM.nodeValue.length)) {
      this.dirty = Te;
    }
  }
  get domAtom() {
    return false;
  }
  isText(e) {
    return this.node.text == e;
  }
}
class ua extends bn {
  parseRule() {
    return {
      ignore: true
    };
  }
  matchesHack(e) {
    return this.dirty == ke && this.dom.nodeName == e;
  }
  get domAtom() {
    return true;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
}
class Nd extends Ye {
  constructor(e, t, r, s, i, o, l, a, c, u) {
    super(e, t, r, s, i, o, l, c, u);
    this.spec = a;
  }
  update(e, t, r, s) {
    if (this.dirty == Te) {
      return false;
    }
    if (this.spec.update && (this.node.type == e.type || this.spec.multiType)) {
      let i = this.spec.update(e, t, r);
      if (i) {
        this.updateInner(e, t, r, s);
      }
      return i;
    } else {
      if (!this.contentDOM && !e.isLeaf) {
        return false;
      }
      return super.update(e, t, r, s);
    }
  }
  selectNode() {
    if (this.spec.selectNode) {
      this.spec.selectNode();
    } else {
      super.selectNode();
    }
  }
  deselectNode() {
    if (this.spec.deselectNode) {
      this.spec.deselectNode();
    } else {
      super.deselectNode();
    }
  }
  setSelection(e, t, r, s) {
    if (this.spec.setSelection) {
      this.spec.setSelection(e, t, r.root);
    } else {
      super.setSelection(e, t, r, s);
    }
  }
  destroy() {
    if (this.spec.destroy) {
      this.spec.destroy();
    }
    super.destroy();
  }
  stopEvent(e) {
    if (this.spec.stopEvent) {
      return this.spec.stopEvent(e);
    }
    return false;
  }
  ignoreMutation(e) {
    if (this.spec.ignoreMutation) {
      return this.spec.ignoreMutation(e);
    }
    return super.ignoreMutation(e);
  }
}
function da(contentDOM, children, t) {
  let n_firstChild = contentDOM.firstChild;
  let s = false;
  for (const o of children) {
    let l = o.dom;
    if (l.parentNode == contentDOM) {
      while (l != n_firstChild) {
        n_firstChild = oo(n_firstChild);
        s = true;
      }
      n_firstChild = n_firstChild.nextSibling;
    } else {
      s = true;
      contentDOM.insertBefore(l, n_firstChild);
    }
    if (o instanceof gt) {
      let a = n_firstChild ? n_firstChild.previousSibling : contentDOM.lastChild;
      da(o.contentDOM, o.children, t);
      n_firstChild = a ? a.nextSibling : contentDOM.firstChild;
    }
  }
  while (n_firstChild) {
    n_firstChild = oo(n_firstChild);
    s = true;
  }
  if (s && t.trackWrites == contentDOM) {
    t.trackWrites = null;
  }
}
const Qt = function (n) {
  if (n) {
    this.nodeName = n;
  }
};
Qt.prototype = Object.create(null);
const ot = [new Qt()];
function Ms(n, e, t) {
  if (n.length == 0) {
    return ot;
  }
  let r = t ? ot[0] : new Qt();
  let s = [r];
  for (let i = 0; i < n.length; i++) {
    let o = n[i].type.attrs;
    if (o) {
      if (o.nodeName) {
        s.push(r = new Qt(o.nodeName));
      }
      for (let l in o) {
        let a = o[l];
        a != null && (t && s.length == 1 && s.push(r = new Qt(e.isInline ? "span" : "div")), l == "class" ? r.class = (r.class ? `${r.class} ` : "") + a : l == "style" ? r.style = (r.style ? `${r.style};` : "") + a : l != "nodeName" && (r[l] = a));
      }
    }
  }
  return s;
}
function fa(n, e, t, r) {
  if (t == ot && r == ot) {
    return e;
  }
  let s = e;
  for (let i = 0; i < r.length; i++) {
    let o = r[i];
    let l = t[i];
    if (i) {
      let a;
      if (!(l && l.nodeName == o.nodeName && s != n && (a = s.parentNode) && a.nodeName.toLowerCase() == o.nodeName)) {
        a = document.createElement(o.nodeName);
        a.pmIsDeco = true;
        a.appendChild(s);
        l = ot[0];
      }
      s = a;
    }
    Od(s, l || ot[0], o);
  }
  return s;
}
function Od(n, e, t) {
  for (let r in e) {
    if (r != "class" && r != "style" && r != "nodeName" && !(r in t)) {
      n.removeAttribute(r);
    }
  }
  for (let r in t) {
    if (r != "class" && r != "style" && r != "nodeName" && t[r] != e[r]) {
      n.setAttribute(r, t[r]);
    }
  }
  if (e.class != t.class) {
    let r = e.class ? e.class.split(" ").filter(Boolean) : [];
    let s = t.class ? t.class.split(" ").filter(Boolean) : [];
    for (let i = 0; i < r.length; i++) {
      if (s.indexOf(r[i]) == -1) {
        n.classList.remove(r[i]);
      }
    }
    for (let i = 0; i < s.length; i++) {
      if (r.indexOf(s[i]) == -1) {
        n.classList.add(s[i]);
      }
    }
    if (n.classList.length == 0) {
      n.removeAttribute("class");
    }
  }
  if (e.style != t.style) {
    if (e.style) {
      let r = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g;
      let s;
      while (s = r.exec(e.style)) {
        n.style.removeProperty(s[1]);
      }
    }
    if (t.style) {
      n.style.cssText += t.style;
    }
  }
}
function ha(n, e, t) {
  return fa(n, n, ot, Ms(e, t, n.nodeType != 1));
}
function jn(n, outerDeco) {
  if (n.length != outerDeco.length) {
    return false;
  }
  for (let t = 0; t < n.length; t++) {
    if (!n[t].type.eq(outerDeco[t].type)) {
      return false;
    }
  }
  return true;
}
function oo(n) {
  let n_nextSibling = n.nextSibling;
  n.parentNode.removeChild(n);
  return n_nextSibling;
}
class Dd {
  constructor(e, t, r) {
    this.lock = t;
    this.view = r;
    this.index = 0;
    this.stack = [];
    this.changed = false;
    this.top = e;
    this.preMatch = Id(e.node.content, e);
  }
  destroyBetween(e, t) {
    if (e != t) {
      for (let r = e; r < t; r++) {
        this.top.children[r].destroy();
      }
      this.top.children.splice(e, t - e);
      this.changed = true;
    }
  }
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  syncToMarks(e, t, r) {
    let s = 0;
    let i = this.stack.length >> 1;
    let o = Math.min(i, e.length);
    while (s < o && (s == i - 1 ? this.top : this.stack[s + 1 << 1]).matchesMark(e[s]) && e[s].type.spec.spanning !== false) {
      s++;
    }
    while (s < i) {
      this.destroyRest();
      this.top.dirty = ke;
      this.index = this.stack.pop();
      this.top = this.stack.pop();
      i--;
    }
    while (i < e.length) {
      this.stack.push(this.top, this.index + 1);
      let l = -1;
      for (let a = this.index; a < Math.min(this.index + 3, this.top.children.length); a++) {
        let c = this.top.children[a];
        if (c.matchesMark(e[i]) && !this.isLocked(c.dom)) {
          l = a;
          break;
        }
      }
      if (l > -1) {
        if (l > this.index) {
          this.changed = true;
          this.destroyBetween(this.index, l);
        }
        this.top = this.top.children[this.index];
      } else {
        let a = gt.create(this.top, e[i], t, r);
        this.top.children.splice(this.index, 0, a);
        this.top = a;
        this.changed = true;
      }
      this.index = 0;
      i++;
    }
  }
  findNodeMatch(e, t, r, s) {
    let i = -1;
    let o;
    if (s >= this.preMatch.index && (o = this.preMatch.matches[s - this.preMatch.index]).parent == this.top && o.matchesNode(e, t, r)) {
      i = this.top.children.indexOf(o, this.index);
    } else {
      for (let l = this.index, a = Math.min(this.top.children.length, l + 5); l < a; l++) {
        let c = this.top.children[l];
        if (c.matchesNode(e, t, r) && !this.preMatch.matched.has(c)) {
          i = l;
          break;
        }
      }
    }
    if (i < 0) {
      return false;
    }
    this.destroyBetween(this.index, i);
    this.index++;
    return true;
  }
  updateNodeAt(e, t, r, s, i) {
    let o = this.top.children[s];
    if (o.dirty == Te && o.dom == o.contentDOM) {
      o.dirty = it;
    }
    if (o.update(e, t, r, i)) {
      this.destroyBetween(this.index, s);
      this.index++;
      return true;
    }
    return false;
  }
  findIndexWithChild(e) {
    while (true) {
      let t = e.parentNode;
      if (!t) {
        return -1;
      }
      if (t == this.top.contentDOM) {
        let r = e.pmViewDesc;
        if (r) {
          for (let s = this.index; s < this.top.children.length; s++) {
            if (this.top.children[s] == r) {
              return s;
            }
          }
        }
        return -1;
      }
      e = t;
    }
  }
  updateNextNode(e, t, r, s, i, o) {
    for (let l = this.index; l < this.top.children.length; l++) {
      let child = this.top.children[l];
      if (child instanceof Ye) {
        let c = this.preMatch.matched.get(child);
        if (c != null && c != i) {
          return false;
        }
        let u = child.dom;
        let d;
        let f = this.isLocked(u) && !(e.isText && child.node && child.node.isText && child.nodeDOM.nodeValue == e.text && child.dirty != Te && jn(t, child.outerDeco));
        if (!f && child.update(e, t, r, s)) {
          this.destroyBetween(this.index, l);
          if (child.dom != u) {
            this.changed = true;
          }
          this.index++;
          return true;
        }
        if (!f && (d = this.recreateWrapper(child, e, t, r, s, o))) {
          this.destroyBetween(this.index, l);
          this.top.children[this.index] = d;
          if (d.contentDOM) {
            d.dirty = it;
            d.updateChildren(s, o + 1);
            d.dirty = ke;
          }
          this.changed = true;
          this.index++;
          return true;
        }
        break;
      }
    }
    return false;
  }
  recreateWrapper(e, t, r, s, i, o) {
    if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content) || !jn(r, e.outerDeco) || !s.eq(e.innerDeco)) {
      return null;
    }
    let l = Ye.create(this.top, t, r, s, i, o);
    if (l.contentDOM) {
      l.children = e.children;
      e.children = [];
      for (let a of l.children) {
        a.parent = l;
      }
    }
    e.destroy();
    return l;
  }
  addNode(e, t, r, s, i) {
    let o = Ye.create(this.top, e, t, r, s, i);
    if (o.contentDOM) {
      o.updateChildren(s, i + 1);
    }
    this.top.children.splice(this.index++, 0, o);
    this.changed = true;
  }
  placeWidget(e, t, r) {
    let s = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (s && s.matchesWidget(e) && (e == s.widget || !s.widget.type.toDOM.parentNode)) {
      this.index++;
    } else {
      let i = new ca(this.top, e, t, r);
      this.top.children.splice(this.index++, 0, i);
      this.changed = true;
    }
  }
  addTextblockHacks() {
    let e = this.top.children[this.index - 1];
    let top = this.top;
    while (e instanceof gt) {
      top = e;
      e = top.children[top.children.length - 1];
    }
    if (!e || !(e instanceof Or) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) {
      if ((ee || U) && e && e.dom.contentEditable == "false") {
        this.addHackNode("IMG", top);
      }
      this.addHackNode("BR", this.top);
    }
  }
  addHackNode(e, t) {
    if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e)) {
      this.index++;
    } else {
      let r = document.createElement(e);
      if (e == "IMG") {
        r.className = "ProseMirror-separator";
        r.alt = "";
      }
      if (e == "BR") {
        r.className = "ProseMirror-trailingBreak";
      }
      let s = new ua(this.top, [], r, null);
      if (t != this.top) {
        t.children.push(s);
      } else {
        t.children.splice(this.index++, 0, s);
      }
      this.changed = true;
    }
  }
  isLocked(e) {
    return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode));
  }
}
function Id(content, e) {
  let t = e;
  let length = t.children.length;
  let n_childCount = content.childCount;
  let matched = new Map();
  let o = [];
  e: while (n_childCount > 0) {
    let l;
    while (true) {
      if (length) {
        let c = t.children[length - 1];
        if (c instanceof gt) {
          t = c;
          length = c.children.length;
        } else {
          l = c;
          length--;
          break;
        }
      } else {
        if (t == e) {
          break e;
        }
        length = t.parent.children.indexOf(t);
        t = t.parent;
      }
    }
    let a = l.node;
    if (a) {
      if (a != content.child(n_childCount - 1)) {
        break;
      }
      --n_childCount;
      matched.set(l, n_childCount);
      o.push(l);
    }
  }
  return {
    index: n_childCount,
    matched,
    matches: o.reverse()
  };
}
function Rd(n, e) {
  return n.type.side - e.type.side;
}
function Pd(node, innerDeco, t, r) {
  let s = innerDeco.locals(node);
  let i = 0;
  if (s.length == 0) {
    for (let c = 0; c < node.childCount; c++) {
      let u = node.child(c);
      r(u, s, innerDeco.forChild(i, u), c);
      i += u.nodeSize;
    }
    return;
  }
  let o = 0;
  let l = [];
  let a = null;
  for (let c = 0;;) {
    let u;
    let d;
    while (o < s.length && s[o].to == i) {
      let g = s[o++];
      g.widget && (u ? (d || (d = [u])).push(g) : u = g);
    }
    if (u) {
      if (d) {
        d.sort(Rd);
        for (let g = 0; g < d.length; g++) {
          t(d[g], c, !!a);
        }
      } else {
        t(u, c, !!a);
      }
    }
    let f;
    let h;
    if (a) {
      h = -1;
      f = a;
      a = null;
    } else if (c < node.childCount) {
      h = c;
      f = node.child(c++);
    } else {
      break;
    }
    for (let g = 0; g < l.length; g++) {
      if (l[g].to <= i) {
        l.splice(g--, 1);
      }
    }
    while (o < s.length && s[o].from <= i && s[o].to > i) {
      l.push(s[o++]);
    }
    let p = i + f.nodeSize;
    if (f.isText) {
      let g = p;
      if (o < s.length && s[o].from < g) {
        g = s[o].from;
      }
      for (let y = 0; y < l.length; y++) {
        if (l[y].to < g) {
          g = l[y].to;
        }
      }
      if (g < p) {
        a = f.cut(g - i);
        f = f.cut(0, g - i);
        p = g;
        h = -1;
      }
    } else {
      while (o < s.length && s[o].to < p) {
        o++;
      }
    }
    let m = f.isInline && !f.isLeaf ? l.filter(g => !g.inline) : l.slice();
    r(f, m, innerDeco.forChild(i, f), h);
    i = p;
  }
}
function Ld(dom) {
  if (dom.nodeName == "UL" || dom.nodeName == "OL") {
    let e = dom.style.cssText;
    dom.style.cssText = `${e}; list-style: square !important`;
    window.getComputedStyle(dom).listStyle;
    dom.style.cssText = e;
  }
}
function zd(content, e, t, r) {
  for (let s = 0, i = 0; s < content.childCount && i <= r;) {
    let o = content.child(s++);
    let l = i;
    i += o.nodeSize;
    if (!o.isText) {
      continue;
    }
    let a = o.text;
    while (s < content.childCount) {
      let c = content.child(s++);
      i += c.nodeSize;
      if (!c.isText) {
        break;
      }
      a += c.text;
    }
    if (i >= t) {
      if (i >= r && a.slice(r - e.length - l, r - l) == e) {
        return r - e.length;
      }
      let c = l < r ? a.lastIndexOf(e, r - l - 1) : -1;
      if (c >= 0 && c + e.length + l >= t) {
        return l + c;
      }
      if (t == r && a.length >= r + e.length - l && a.slice(r - l, r - l + e.length) == e) {
        return r;
      }
    }
  }
  return -1;
}
function Es(children, e, t, r, s) {
  let i = [];
  for (let o = 0, l = 0; o < children.length; o++) {
    let child = children[o];
    let c = l;
    let u = l += child.size;
    if (c >= t || u <= e) {
      i.push(child);
    } else {
      if (c < e) {
        i.push(child.slice(0, e - c, r));
      }
      if (s) {
        i.push(s);
        s = undefined;
      }
      if (u > t) {
        i.push(child.slice(t - c, child.size, r));
      }
    }
  }
  return i;
}
function ei(n, e = null) {
  let t = n.domSelectionRange();
  let doc = n.state.doc;
  if (!t.focusNode) {
    return null;
  }
  let s = n.docView.nearestDesc(t.focusNode);
  let i = s && s.size == 0;
  let o = n.docView.posFromDOM(t.focusNode, t.focusOffset, 1);
  if (o < 0) {
    return null;
  }
  let l = doc.resolve(o);
  let a;
  let c;
  if (Nr(t)) {
    for (a = o; s && !s.node;) {
      s = s.parent;
    }
    let d = s.node;
    if (s && d.isAtom && C.isSelectable(d) && s.parent && !(d.isInline && cd(t.focusNode, t.focusOffset, s.dom))) {
      let f = s.posBefore;
      c = new C(o == f ? l : doc.resolve(f));
    }
  } else {
    if (t instanceof n.dom.ownerDocument.defaultView.Selection && t.rangeCount > 1) {
      let d = o;
      let f = o;
      for (let h = 0; h < t.rangeCount; h++) {
        let p = t.getRangeAt(h);
        d = Math.min(d, n.docView.posFromDOM(p.startContainer, p.startOffset, 1));
        f = Math.max(f, n.docView.posFromDOM(p.endContainer, p.endOffset, -1));
      }
      if (d < 0) {
        return null;
      }
      [a, o] = f == n.state.selection.anchor ? [f, d] : [d, f];
      l = doc.resolve(o);
    } else {
      a = n.docView.posFromDOM(t.anchorNode, t.anchorOffset, 1);
    }
    if (a < 0) {
      return null;
    }
  }
  let u = doc.resolve(a);
  if (!c) {
    let d = e == "pointer" || n.state.selection.head < l.pos && !i ? 1 : -1;
    c = ti(n, u, l, d);
  }
  return c;
}
function pa(n) {
  if (n.editable) {
    return n.hasFocus();
  }
  return ga(n) && document.activeElement && document.activeElement.contains(n.dom);
}
function ze(n, e = false) {
  let selection = n.state.selection;
  ma(n, selection);
  if (pa(n)) {
    if (!e && n.input.mouseDown && n.input.mouseDown.allowDefault && U) {
      let r = n.domSelectionRange();
      let s = n.domObserver.currentSelection;
      if (r.anchorNode && s.anchorNode && mt(r.anchorNode, r.anchorOffset, s.anchorNode, s.anchorOffset)) {
        n.input.mouseDown.delayedSelectionSync = true;
        n.domObserver.setCurSelection();
        return;
      }
    }
    n.domObserver.disconnectSelection();
    if (n.cursorWrapper) {
      $d(n);
    } else {
      let {
        anchor,
        head
      } = selection;
      let i;
      let o;
      lo && !(selection instanceof N) && (selection.$from.parent.inlineContent || (i = ao(n, selection.from)), !selection.empty && !selection.$from.parent.inlineContent && (o = ao(n, selection.to)));
      n.docView.setSelection(anchor, head, n, e);
      lo && (i && co(i), o && co(o));
      if (selection.visible) {
        n.dom.classList.remove("ProseMirror-hideselection");
      } else {
        n.dom.classList.add("ProseMirror-hideselection");
        if ("onselectionchange" in document) {
          Bd(n);
        }
      }
    }
    n.domObserver.setCurSelection();
    n.domObserver.connectSelection();
  }
}
const lo = ee || U && ta < 63;
function ao(n, e) {
  let {
    node,
    offset
  } = n.docView.domFromPos(e, 0);
  let s = offset < node.childNodes.length ? node.childNodes[offset] : null;
  let i = offset ? node.childNodes[offset - 1] : null;
  if (ee && s && s.contentEditable == "false") {
    return Yr(s);
  }
  if ((!s || s.contentEditable == "false") && (!i || i.contentEditable == "false")) {
    if (s) {
      return Yr(s);
    }
    if (i) {
      return Yr(i);
    }
  }
}
function Yr(n) {
  n.contentEditable = "true";
  if (ee && n.draggable) {
    n.draggable = false;
    n.wasDraggable = true;
  }
  return n;
}
function co(n) {
  n.contentEditable = "false";
  if (n.wasDraggable) {
    n.draggable = true;
    n.wasDraggable = null;
  }
}
function Bd(n) {
  let ownerDocument = n.dom.ownerDocument;
  ownerDocument.removeEventListener("selectionchange", n.input.hideSelectionGuard);
  let t = n.domSelectionRange();
  let t_anchorNode = t.anchorNode;
  let t_anchorOffset = t.anchorOffset;
  ownerDocument.addEventListener("selectionchange", n.input.hideSelectionGuard = () => {
    if (t.anchorNode != t_anchorNode || t.anchorOffset != t_anchorOffset) {
      ownerDocument.removeEventListener("selectionchange", n.input.hideSelectionGuard);
      setTimeout(() => {
        if (!pa(n) || n.state.selection.visible) {
          n.dom.classList.remove("ProseMirror-hideselection");
        }
      }, 20);
    }
  });
}
function $d(n) {
  let e = n.domSelection();
  if (!e) {
    return;
  }
  let dom = n.cursorWrapper.dom;
  let r = dom.nodeName == "IMG";
  if (r) {
    e.collapse(dom.parentNode, X(dom) + 1);
  } else {
    e.collapse(dom, 0);
  }
  if (!r && !n.state.selection.visible && le && Ge <= 11) {
    dom.disabled = true;
    dom.disabled = false;
  }
}
function ma(n, selection) {
  if (selection instanceof C) {
    let t = n.docView.descAt(selection.from);
    if (t != n.lastSelectedViewDesc) {
      uo(n);
      if (t) {
        t.selectNode();
      }
      n.lastSelectedViewDesc = t;
    }
  } else {
    uo(n);
  }
}
function uo(n) {
  if (n.lastSelectedViewDesc) {
    if (n.lastSelectedViewDesc.parent) {
      n.lastSelectedViewDesc.deselectNode();
    }
    n.lastSelectedViewDesc = undefined;
  }
}
function ti(n, e, t, r) {
  return n.someProp("createSelectionBetween", s => s(n, e, t)) || N.between(e, t, r);
}
function fo(view) {
  if (view.editable && !view.hasFocus()) {
    return false;
  }
  return ga(view);
}
function ga(n) {
  let e = n.domSelectionRange();
  if (!e.anchorNode) {
    return false;
  }
  try {
    return n.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (n.editable || n.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return false;
  }
}
function Fd(n) {
  let e = n.docView.domFromPos(n.state.selection.anchor, 0);
  let t = n.domSelectionRange();
  return mt(e.node, e.offset, t.anchorNode, t.anchorOffset);
}
function vs(state, e) {
  let {
    $anchor,
    $head
  } = state.selection;
  let s = e > 0 ? $anchor.max($head) : $anchor.min($head);
  let i = s.parent.inlineContent ? s.depth ? state.doc.resolve(e > 0 ? s.after() : s.before()) : null : s;
  return i && O.findFrom(i, e);
}
function Ve(n, e) {
  n.dispatch(n.state.tr.setSelection(e).scrollIntoView());
  return true;
}
function ho(n, e, t) {
  let selection = n.state.selection;
  if (selection instanceof N) {
    if (t.indexOf("s") > -1) {
      let {
        $head
      } = selection;
      let i = $head.textOffset ? null : e < 0 ? $head.nodeBefore : $head.nodeAfter;
      if (!i || i.isText || !i.isLeaf) {
        return false;
      }
      let o = n.state.doc.resolve($head.pos + i.nodeSize * (e < 0 ? -1 : 1));
      return Ve(n, new N(selection.$anchor, o));
    } else if (selection.empty) {
      if (n.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let s = vs(n.state, e);
        if (s && s instanceof C) {
          return Ve(n, s);
        }
        return false;
      } else if (!(me && t.indexOf("m") > -1)) {
        let s = selection.$head;
        let i = s.textOffset ? null : e < 0 ? s.nodeBefore : s.nodeAfter;
        let o;
        if (!i || i.isText) {
          return false;
        }
        let l = e < 0 ? s.pos - i.nodeSize : s.pos;
        if (i.isAtom || (o = n.docView.descAt(l)) && !o.contentDOM) {
          if (C.isSelectable(i)) {
            return Ve(n, new C(e < 0 ? n.state.doc.resolve(s.pos - i.nodeSize) : s));
          }
          if (kn) {
            return Ve(n, new N(n.state.doc.resolve(e < 0 ? l : l + i.nodeSize)));
          }
          return false;
        }
        return false;
      }
    } else {
      return false;
    }
  } else {
    if (selection instanceof C && selection.node.isInline) {
      return Ve(n, new N(e > 0 ? selection.$to : selection.$from));
    }
    {
      let s = vs(n.state, e);
      if (s) {
        return Ve(n, s);
      }
      return false;
    }
  }
}
function _n(n) {
  if (n.nodeType == 3) {
    return n.nodeValue.length;
  }
  return n.childNodes.length;
}
function Zt(n, e) {
  let n_pmViewDesc = n.pmViewDesc;
  return n_pmViewDesc && n_pmViewDesc.size == 0 && (e < 0 || n.nextSibling || n.nodeName != "BR");
}
function Et(n, e) {
  if (e < 0) {
    return Hd(n);
  }
  return Vd(n);
}
function Hd(n) {
  let e = n.domSelectionRange();
  let e_focusNode = e.focusNode;
  let e_focusOffset = e.focusOffset;
  if (!e_focusNode) {
    return;
  }
  let s;
  let i;
  let o = false;
  for (ye && e_focusNode.nodeType == 1 && e_focusOffset < _n(e_focusNode) && Zt(e_focusNode.childNodes[e_focusOffset], -1) && (o = true);;) {
    if (e_focusOffset > 0) {
      if (e_focusNode.nodeType != 1) {
        break;
      }
      {
        let l = e_focusNode.childNodes[e_focusOffset - 1];
        if (Zt(l, -1)) {
          s = e_focusNode;
          i = --e_focusOffset;
        } else if (l.nodeType == 3) {
          e_focusNode = l;
          e_focusOffset = e_focusNode.nodeValue.length;
        } else {
          break;
        }
      }
    } else {
      if (ya(e_focusNode)) {
        break;
      }
      {
        let l = e_focusNode.previousSibling;
        while (l && Zt(l, -1)) {
          s = e_focusNode.parentNode;
          i = X(l);
          l = l.previousSibling;
        }
        if (l) {
          e_focusNode = l;
          e_focusOffset = _n(e_focusNode);
        } else {
          e_focusNode = e_focusNode.parentNode;
          if (e_focusNode == n.dom) {
            break;
          }
          e_focusOffset = 0;
        }
      }
    }
  }
  if (o) {
    Ts(n, e_focusNode, e_focusOffset);
  } else if (s) {
    Ts(n, s, i);
  }
}
function Vd(n) {
  let e = n.domSelectionRange();
  let e_focusNode = e.focusNode;
  let e_focusOffset = e.focusOffset;
  if (!e_focusNode) {
    return;
  }
  let s = _n(e_focusNode);
  let i;
  let o;
  while (true) {
    if (e_focusOffset < s) {
      if (e_focusNode.nodeType != 1) {
        break;
      }
      let l = e_focusNode.childNodes[e_focusOffset];
      if (Zt(l, 1)) {
        i = e_focusNode;
        o = ++e_focusOffset;
      } else {
        break;
      }
    } else {
      if (ya(e_focusNode)) {
        break;
      }
      {
        let l = e_focusNode.nextSibling;
        while (l && Zt(l, 1)) {
          i = l.parentNode;
          o = X(l) + 1;
          l = l.nextSibling;
        }
        if (l) {
          e_focusNode = l;
          e_focusOffset = 0;
          s = _n(e_focusNode);
        } else {
          e_focusNode = e_focusNode.parentNode;
          if (e_focusNode == n.dom) {
            break;
          }
          s = 0;
          e_focusOffset = 0;
        }
      }
    }
  }
  if (i) {
    Ts(n, i, o);
  }
}
function ya({
  pmViewDesc
}) {
  return pmViewDesc && pmViewDesc.node && pmViewDesc.node.isBlock;
}
function jd(n, e) {
  while (n && e == n.childNodes.length && !yn(n)) {
    e = X(n) + 1;
    n = n.parentNode;
  }
  while (n && e < n.childNodes.length) {
    let t = n.childNodes[e];
    if (t.nodeType == 3) {
      return t;
    }
    if (t.nodeType == 1 && t.contentEditable == "false") {
      break;
    }
    n = t;
    e = 0;
  }
}
function _d(n, e) {
  while (n && !e && !yn(n)) {
    e = X(n);
    n = n.parentNode;
  }
  while (n && e) {
    let t = n.childNodes[e - 1];
    if (t.nodeType == 3) {
      return t;
    }
    if (t.nodeType == 1 && t.contentEditable == "false") {
      break;
    }
    n = t;
    e = n.childNodes.length;
  }
}
function Ts(n, e, t) {
  if (e.nodeType != 3) {
    let i;
    let o;
    if (o = jd(e, t)) {
      e = o;
      t = 0;
    } else if (i = _d(e, t)) {
      e = i;
      t = i.nodeValue.length;
    }
  }
  let r = n.domSelection();
  if (!r) {
    return;
  }
  if (Nr(r)) {
    let i = document.createRange();
    i.setEnd(e, t);
    i.setStart(e, t);
    r.removeAllRanges();
    r.addRange(i);
  } else {
    if (r.extend) {
      r.extend(e, t);
    }
  }
  n.domObserver.setCurSelection();
  let {
    state
  } = n;
  setTimeout(() => {
    if (n.state == state) {
      ze(n);
    }
  }, 50);
}
function po(n, from) {
  let t = n.state.doc.resolve(from);
  if (!(U || na) && t.parent.inlineContent) {
    let s = n.coordsAtPos(from);
    if (from > t.start()) {
      let i = n.coordsAtPos(from - 1);
      let o = (i.top + i.bottom) / 2;
      if (o > s.top && o < s.bottom && Math.abs(i.left - s.left) > 1) {
        if (i.left < s.left) {
          return "ltr";
        }
        return "rtl";
      }
    }
    if (from < t.end()) {
      let i = n.coordsAtPos(from + 1);
      let o = (i.top + i.bottom) / 2;
      if (o > s.top && o < s.bottom && Math.abs(i.left - s.left) > 1) {
        if (i.left > s.left) {
          return "ltr";
        }
        return "rtl";
      }
    }
  }
  if (getComputedStyle(n.dom).direction == "rtl") {
    return "rtl";
  }
  return "ltr";
}
function mo(n, e, t) {
  let selection = n.state.selection;
  if (selection instanceof N && !selection.empty || t.indexOf("s") > -1 || me && t.indexOf("m") > -1) {
    return false;
  }
  let {
    $from,
    $to
  } = selection;
  if (!$from.parent.inlineContent || n.endOfTextblock(e < 0 ? "up" : "down")) {
    let o = vs(n.state, e);
    if (o && o instanceof C) {
      return Ve(n, o);
    }
  }
  if (!$from.parent.inlineContent) {
    let o = e < 0 ? $from : $to;
    let l = selection instanceof ue ? O.near(o, e) : O.findFrom(o, e);
    if (l) {
      return Ve(n, l);
    }
    return false;
  }
  return false;
}
function go(n, e) {
  if (!(n.state.selection instanceof N)) {
    return true;
  }
  let {
    $head,
    $anchor,
    empty
  } = n.state.selection;
  if (!$head.sameParent($anchor)) {
    return true;
  }
  if (!empty) {
    return false;
  }
  if (n.endOfTextblock(e > 0 ? "forward" : "backward")) {
    return true;
  }
  let i = !$head.textOffset && (e < 0 ? $head.nodeBefore : $head.nodeAfter);
  if (i && !i.isText) {
    let o = n.state.tr;
    if (e < 0) {
      o.delete($head.pos - i.nodeSize, $head.pos);
    } else {
      o.delete($head.pos, $head.pos + i.nodeSize);
    }
    n.dispatch(o);
    return true;
  }
  return false;
}
function yo(n, e, t) {
  n.domObserver.stop();
  e.contentEditable = t;
  n.domObserver.start();
}
function Wd(n) {
  if (!ee || n.state.selection.$head.parentOffset > 0) {
    return false;
  }
  let {
    focusNode,
    focusOffset
  } = n.domSelectionRange();
  if (focusNode && focusNode.nodeType == 1 && focusOffset == 0 && focusNode.firstChild && focusNode.firstChild.contentEditable == "false") {
    let r = focusNode.firstChild;
    yo(n, r, "true");
    setTimeout(() => yo(n, r, "false"), 20);
  }
  return false;
}
function qd(n) {
  let e = "";
  if (n.ctrlKey) {
    e += "c";
  }
  if (n.metaKey) {
    e += "m";
  }
  if (n.altKey) {
    e += "a";
  }
  if (n.shiftKey) {
    e += "s";
  }
  return e;
}
function Kd(n, e) {
  let e_keyCode = e.keyCode;
  let r = qd(e);
  if (e_keyCode == 8 || me && e_keyCode == 72 && r == "c") {
    return go(n, -1) || Et(n, -1);
  }
  if (e_keyCode == 46 && !e.shiftKey || me && e_keyCode == 68 && r == "c") {
    return go(n, 1) || Et(n, 1);
  }
  if (e_keyCode == 13 || e_keyCode == 27) {
    return true;
  }
  if (e_keyCode == 37 || me && e_keyCode == 66 && r == "c") {
    let s = e_keyCode == 37 ? po(n, n.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return ho(n, s, r) || Et(n, s);
  } else if (e_keyCode == 39 || me && e_keyCode == 70 && r == "c") {
    let s = e_keyCode == 39 ? po(n, n.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return ho(n, s, r) || Et(n, s);
  } else {
    if (e_keyCode == 38 || me && e_keyCode == 80 && r == "c") {
      return mo(n, -1, r) || Et(n, -1);
    }
    if (e_keyCode == 40 || me && e_keyCode == 78 && r == "c") {
      return Wd(n) || mo(n, 1, r) || Et(n, 1);
    }
    if (r == (me ? "m" : "c") && (e_keyCode == 66 || e_keyCode == 73 || e_keyCode == 89 || e_keyCode == 90)) {
      return true;
    }
  }
  return false;
}
function ni(n, slice) {
  n.someProp("transformCopied", h => {
    slice = h(slice, n);
  });
  let t = [];
  let {
    content,
    openStart,
    openEnd
  } = slice;
  while (openStart > 1 && openEnd > 1 && content.childCount == 1 && content.firstChild.childCount == 1) {
    openStart--;
    openEnd--;
    let h = content.firstChild;
    t.push(h.type.name, h.attrs != h.type.defaultAttrs ? h.attrs : null);
    content = h.content;
  }
  let o = n.someProp("clipboardSerializer") || a1.fromSchema(n.state.schema);
  let document = Ca();
  let a = document.createElement("div");
  a.appendChild(o.serializeFragment(content, {
    document
  }));
  let a_firstChild = a.firstChild;
  let u;
  let d = 0;
  while (a_firstChild && a_firstChild.nodeType == 1 && (u = wa[a_firstChild.nodeName.toLowerCase()])) {
    for (let h = u.length - 1; h >= 0; h--) {
      let p = document.createElement(u[h]);
      while (a.firstChild) {
        p.appendChild(a.firstChild);
      }
      a.appendChild(p);
      d++;
    }
    a_firstChild = a.firstChild;
  }
  if (a_firstChild && a_firstChild.nodeType == 1) {
    a_firstChild.setAttribute("data-pm-slice", `${openStart} ${openEnd}${d ? ` -${d}` : ""} ${JSON.stringify(t)}`);
  }
  let f = n.someProp("clipboardTextSerializer", h => h(slice, n)) || slice.content.textBetween(0, slice.content.size, `

`);
  return {
    dom: a,
    text: f,
    slice
  };
}
function ka(n, e, t, r, s) {
  let code = s.parent.type.spec.code;
  let o;
  let l;
  if (!t && !e) {
    return null;
  }
  let a = !!e && (r || code || !t);
  if (a) {
    n.someProp("transformPastedText", f => {
      e = f(e, code || r, n);
    });
    if (code) {
      l = new w(k.from(n.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0);
      n.someProp("transformPasted", f => {
        l = f(l, n, true);
      });
      return l;
    }
    let d = n.someProp("clipboardTextParser", f => f(e, s, r, n));
    if (d) {
      l = d;
    } else {
      let f = s.marks();
      let {
        schema
      } = n.state;
      let p = a1.fromSchema(schema);
      o = document.createElement("div");
      e.split(/(?:\r\n?|\n)+/).forEach(m => {
        let g = o.appendChild(document.createElement("p"));
        if (m) {
          g.appendChild(p.serializeNode(schema.text(m, f)));
        }
      });
    }
  } else {
    n.someProp("transformPastedHTML", d => {
      t = d(t, n);
    });
    o = Yd(t);
    if (kn) {
      Xd(o);
    }
  }
  let c = o && o.querySelector("[data-pm-slice]");
  let u = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
  if (u && u[3]) {
    for (let d = +u[3]; d > 0; d--) {
      let f = o.firstChild;
      while (f && f.nodeType != 1) {
        f = f.nextSibling;
      }
      if (!f) {
        break;
      }
      o = f;
    }
  }
  if (!l) {
    l = (n.someProp("clipboardParser") || n.someProp("domParser") || Le.fromSchema(n.state.schema)).parseSlice(o, {
      preserveWhitespace: !!(a || u),
      context: s,
      ruleFromNode(f) {
        if (f.nodeName == "BR" && !f.nextSibling && f.parentNode && !Ud.test(f.parentNode.nodeName)) {
          return {
            ignore: true
          };
        }
        return null;
      }
    });
  }
  if (u) {
    l = Qd(ko(l, +u[1], +u[2]), u[4]);
  } else {
    l = w.maxOpen(Jd(l.content, s), true);
    if (l.openStart || l.openEnd) {
      let d = 0;
      let f = 0;
      for (let h = l.content.firstChild; d < l.openStart && !h.type.spec.isolating; d++, h = h.firstChild);
      for (let h = l.content.lastChild; f < l.openEnd && !h.type.spec.isolating; f++, h = h.lastChild);
      l = ko(l, d, f);
    }
  }
  n.someProp("transformPasted", d => {
    l = d(l, n, a);
  });
  return l;
}
const Ud = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function Jd(content, e) {
  if (content.childCount < 2) {
    return content;
  }
  for (let t = e.depth; t >= 0; t--) {
    let s = e.node(t).contentMatchAt(e.index(t));
    let i;
    let o = [];
    content.forEach(l => {
      if (!o) {
        return;
      }
      let a = s.findWrapping(l.type);
      let c;
      if (!a) {
        return o = null;
      }
      if (c = o.length && i.length && xa(a, i, l, o[o.length - 1], 0)) {
        o[o.length - 1] = c;
      } else {
        if (o.length) {
          o[o.length - 1] = Sa(o[o.length - 1], i.length);
        }
        let u = ba(l, a);
        o.push(u);
        s = s.matchType(u.type);
        i = a;
      }
    });
    if (o) {
      return k.from(o);
    }
  }
  return content;
}
function ba(n, e, t = 0) {
  for (let r = e.length - 1; r >= t; r--) {
    n = e[r].create(null, k.from(n));
  }
  return n;
}
function xa(n, e, t, r, s) {
  if (s < n.length && s < e.length && n[s] == e[s]) {
    let i = xa(n, e, t, r.lastChild, s + 1);
    if (i) {
      return r.copy(r.content.replaceChild(r.childCount - 1, i));
    }
    if (r.contentMatchAt(r.childCount).matchType(s == n.length - 1 ? t.type : n[s + 1])) {
      return r.copy(r.content.append(k.from(ba(t, n, s + 1))));
    }
  }
}
function Sa(n, e) {
  if (e == 0) {
    return n;
  }
  let t = n.content.replaceChild(n.childCount - 1, Sa(n.lastChild, e - 1));
  let r = n.contentMatchAt(n.childCount).fillBefore(k.empty, true);
  return n.copy(t.append(r));
}
function As(n, e, t, r, s, i) {
  let o = e < 0 ? n.firstChild : n.lastChild;
  let o_content = o.content;
  if (n.childCount > 1) {
    i = 0;
  }
  if (s < r - 1) {
    o_content = As(o_content, e, t, r, s + 1, i);
  }
  if (s >= t) {
    o_content = e < 0 ? o.contentMatchAt(0).fillBefore(o_content, i <= s).append(o_content) : o_content.append(o.contentMatchAt(o.childCount).fillBefore(k.empty, true));
  }
  return n.replaceChild(e < 0 ? 0 : n.childCount - 1, o.copy(o_content));
}
function ko(n, e, t) {
  if (e < n.openStart) {
    n = new w(As(n.content, -1, e, n.openStart, 0, n.openEnd), e, n.openEnd);
  }
  if (t < n.openEnd) {
    n = new w(As(n.content, 1, t, n.openEnd, 0, 0), n.openStart, t);
  }
  return n;
}
const wa = {
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
let bo = null;
function Ca() {
  return bo || (bo = document.implementation.createHTMLDocument("title"));
}
let Xr = null;
function Gd(n) {
  let window_trustedTypes = window.trustedTypes;
  if (window_trustedTypes) {
    if (!Xr) {
      Xr = window_trustedTypes.defaultPolicy || window_trustedTypes.createPolicy("ProseMirrorClipboard", {
        createHTML: t => t
      });
    }
    return Xr.createHTML(n);
  }
  return n;
}
function Yd(n) {
  let e = /^(\s*<meta [^>]*>)*/.exec(n);
  if (e) {
    n = n.slice(e[0].length);
  }
  let t = Ca().createElement("div");
  let r = /<([a-z][^>\s]+)/i.exec(n);
  let s;
  if (s = r && wa[r[1].toLowerCase()]) {
    n = s.map(i => `<${i}>`).join("") + n + s.map(i => `</${i}>`).reverse().join("");
  }
  t.innerHTML = Gd(n);
  if (s) {
    for (let i = 0; i < s.length; i++) {
      t = t.querySelector(s[i]) || t;
    }
  }
  return t;
}
function Xd(n) {
  let e = n.querySelectorAll(U ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (const r of e) {
    if (r.childNodes.length == 1 && r.textContent == " " && r.parentNode) {
      r.parentNode.replaceChild(n.ownerDocument.createTextNode(" "), r);
    }
  }
}
function Qd(n, e) {
  if (!n.size) {
    return n;
  }
  let schema = n.content.firstChild.type.schema;
  let r;
  try {
    r = JSON.parse(e);
  } catch {
    return n;
  }
  let {
    content,
    openStart,
    openEnd
  } = n;
  for (let l = r.length - 2; l >= 0; l -= 2) {
    let a = schema.nodes[r[l]];
    if (!a || a.hasRequiredAttrs()) {
      break;
    }
    content = k.from(a.create(r[l + 1], content));
    openStart++;
    openEnd++;
  }
  return new w(content, openStart, openEnd);
}
const re = {};
const se = {};
const Zd = {
  touchstart: true,
  touchmove: true
};
class ef {
  constructor() {
    this.shiftKey = false;
    this.mouseDown = null;
    this.lastKeyCode = null;
    this.lastKeyCodeTime = 0;
    this.lastClick = {
      time: 0,
      x: 0,
      y: 0,
      type: "",
      button: 0
    };
    this.lastSelectionOrigin = null;
    this.lastSelectionTime = 0;
    this.lastIOSEnter = 0;
    this.lastIOSEnterFallbackTimeout = -1;
    this.lastFocus = 0;
    this.lastTouch = 0;
    this.lastChromeDelete = 0;
    this.composing = false;
    this.compositionNode = null;
    this.composingTimeout = -1;
    this.compositionNodes = [];
    this.compositionEndedAt = -200000000;
    this.compositionID = 1;
    this.compositionPendingChanges = 0;
    this.domChangeCount = 0;
    this.eventHandlers = Object.create(null);
    this.hideSelectionGuard = null;
  }
}
function tf(n) {
  for (let e in re) {
    let t = re[e];
    n.dom.addEventListener(e, n.input.eventHandlers[e] = r => {
      if (rf(n, r) && !ri(n, r) && (n.editable || !(r.type in se))) {
        t(n, r);
      }
    }, Zd[e] ? {
      passive: true
    } : undefined);
  }
  if (ee) {
    n.dom.addEventListener("input", () => null);
  }
  Ns(n);
}
function Je(n, e) {
  n.input.lastSelectionOrigin = e;
  n.input.lastSelectionTime = Date.now();
}
function nf(n) {
  n.domObserver.stop();
  for (let e in n.input.eventHandlers) {
    n.dom.removeEventListener(e, n.input.eventHandlers[e]);
  }
  clearTimeout(n.input.composingTimeout);
  clearTimeout(n.input.lastIOSEnterFallbackTimeout);
}
function Ns(n) {
  n.someProp("handleDOMEvents", e => {
    for (let t in e) {
      if (!n.input.eventHandlers[t]) {
        n.dom.addEventListener(t, n.input.eventHandlers[t] = r => ri(n, r));
      }
    }
  });
}
function ri(n, e) {
  return n.someProp("handleDOMEvents", t => {
    let r = t[e.type];
    if (r) {
      return r(n, e) || e.defaultPrevented;
    }
    return false;
  });
}
function rf(n, e) {
  if (!e.bubbles) {
    return true;
  }
  if (e.defaultPrevented) {
    return false;
  }
  for (let t = e.target; t != n.dom; t = t.parentNode) {
    if (!t || t.nodeType == 11 || t.pmViewDesc && t.pmViewDesc.stopEvent(e)) {
      return false;
    }
  }
  return true;
}
function sf(n, e) {
  if (!ri(n, e) && re[e.type] && (n.editable || !(e.type in se))) {
    re[e.type](n, e);
  }
}
se.keydown = (n, e) => {
  let t = e;
  n.input.shiftKey = t.keyCode == 16 || t.shiftKey;
  if (!Ea(n, t) && (n.input.lastKeyCode = t.keyCode, n.input.lastKeyCodeTime = Date.now(), !(Re && U && t.keyCode == 13))) {
    if (t.keyCode != 229) {
      n.domObserver.forceFlush();
    }
    if (zt && t.keyCode == 13 && !t.ctrlKey && !t.altKey && !t.metaKey) {
      let r = Date.now();
      n.input.lastIOSEnter = r;
      n.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        if (n.input.lastIOSEnter == r) {
          n.someProp("handleKeyDown", s => s(n, st(13, "Enter")));
          n.input.lastIOSEnter = 0;
        }
      }, 200);
    } else {
      if (n.someProp("handleKeyDown", r => r(n, t)) || Kd(n, t)) {
        t.preventDefault();
      } else {
        Je(n, "key");
      }
    }
  }
};
se.keyup = (n, e) => {
  if (e.keyCode == 16) {
    n.input.shiftKey = false;
  }
};
se.keypress = (n, e) => {
  let t = e;
  if (Ea(n, t) || !t.charCode || t.ctrlKey && !t.altKey || me && t.metaKey) {
    return;
  }
  if (n.someProp("handleKeyPress", s => s(n, t))) {
    t.preventDefault();
    return;
  }
  let selection = n.state.selection;
  if (!(selection instanceof N) || !selection.$from.sameParent(selection.$to)) {
    let s = String.fromCharCode(t.charCode);
    let i = () => n.state.tr.insertText(s).scrollIntoView();
    if (!/[\r\n]/.test(s) && !n.someProp("handleTextInput", o => o(n, selection.$from.pos, selection.$to.pos, s, i))) {
      n.dispatch(i());
    }
    t.preventDefault();
  }
};
function Dr(n) {
  return {
    left: n.clientX,
    top: n.clientY
  };
}
function of(n, lastClick) {
  let t = lastClick.x - n.clientX;
  let r = lastClick.y - n.clientY;
  return t * t + r * r < 100;
}
function si(n, e, t, r, s) {
  if (r == -1) {
    return false;
  }
  let i = n.state.doc.resolve(r);
  for (let o = i.depth + 1; o > 0; o--) {
    if (n.someProp(e, l => {
      if (o > i.depth) {
        return l(n, t, i.nodeAfter, i.before(o), s, true);
      }
      return l(n, t, i.node(o), i.before(o), s, false);
    })) {
      return true;
    }
  }
  return false;
}
function It(n, e, t) {
  if (!n.focused) {
    n.focus();
  }
  if (n.state.selection.eq(e)) {
    return;
  }
  let r = n.state.tr.setSelection(e);
  r.setMeta("pointer", true);
  n.dispatch(r);
}
function lf(view, inside) {
  if (inside == -1) {
    return false;
  }
  let t = view.state.doc.resolve(inside);
  let t_nodeAfter = t.nodeAfter;
  if (t_nodeAfter && t_nodeAfter.isAtom && C.isSelectable(t_nodeAfter)) {
    It(view, new C(t));
    return true;
  }
  return false;
}
function af(view, inside) {
  if (inside == -1) {
    return false;
  }
  let selection = view.state.selection;
  let r;
  let s;
  if (selection instanceof C) {
    r = selection.node;
  }
  let i = view.state.doc.resolve(inside);
  for (let o = i.depth + 1; o > 0; o--) {
    let l = o > i.depth ? i.nodeAfter : i.node(o);
    if (C.isSelectable(l)) {
      if (r && selection.$from.depth > 0 && o >= selection.$from.depth && i.before(selection.$from.depth + 1) == selection.$from.pos) {
        s = i.before(selection.$from.depth);
      } else {
        s = i.before(o);
      }
      break;
    }
  }
  if (s != null) {
    It(view, C.create(view.state.doc, s));
    return true;
  }
  return false;
}
function cf(view, pos, inside, r, selectNode) {
  return si(view, "handleClickOn", pos, inside, r) || view.someProp("handleClick", i => i(view, pos, r)) || (selectNode ? af(view, inside) : lf(view, inside));
}
function uf(n, e, t, r) {
  return si(n, "handleDoubleClickOn", e, t, r) || n.someProp("handleDoubleClick", s => s(n, e, r));
}
function df(n, e, t, r) {
  return si(n, "handleTripleClickOn", e, t, r) || n.someProp("handleTripleClick", s => s(n, e, r)) || ff(n, t, r);
}
function ff(n, e, t) {
  if (t.button != 0) {
    return false;
  }
  let doc = n.state.doc;
  if (e == -1) {
    if (doc.inlineContent) {
      It(n, N.create(doc, 0, doc.content.size));
      return true;
    }
    return false;
  }
  let s = doc.resolve(e);
  for (let i = s.depth + 1; i > 0; i--) {
    let o = i > s.depth ? s.nodeAfter : s.node(i);
    let l = s.before(i);
    if (o.inlineContent) {
      It(n, N.create(doc, l + 1, l + 1 + o.content.size));
    } else if (C.isSelectable(o)) {
      It(n, C.create(doc, l));
    } else {
      continue;
    }
    return true;
  }
}
function ii(n) {
  return Wn(n);
}
const Ma = me ? "metaKey" : "ctrlKey";
re.mousedown = (n, e) => {
  let t = e;
  n.input.shiftKey = t.shiftKey;
  let r = ii(n);
  let time = Date.now();
  let i = "singleClick";
  time - n.input.lastClick.time < 500 && of(t, n.input.lastClick) && !t[Ma] && n.input.lastClick.button == t.button && (n.input.lastClick.type == "singleClick" ? i = "doubleClick" : n.input.lastClick.type == "doubleClick" && (i = "tripleClick"));
  n.input.lastClick = {
    time,
    x: t.clientX,
    y: t.clientY,
    type: i,
    button: t.button
  };
  let o = n.posAtCoords(Dr(t));
  o && (i == "singleClick" ? (n.input.mouseDown && n.input.mouseDown.done(), n.input.mouseDown = new hf(n, o, t, !!r)) : (i == "doubleClick" ? uf : df)(n, o.pos, o.inside, t) ? t.preventDefault() : Je(n, "pointer"));
};
class hf {
  constructor(e, t, r, s) {
    this.view = e;
    this.pos = t;
    this.event = r;
    this.flushed = s;
    this.delayedSelectionSync = false;
    this.mightDrag = null;
    this.startDoc = e.state.doc;
    this.selectNode = !!r[Ma];
    this.allowDefault = r.shiftKey;
    let i;
    let o;
    if (t.inside > -1) {
      i = e.state.doc.nodeAt(t.inside);
      o = t.inside;
    } else {
      let u = e.state.doc.resolve(t.pos);
      i = u.parent;
      o = u.depth ? u.before() : 0;
    }
    const l = s ? null : r.target;
    const a = l ? e.docView.nearestDesc(l, true) : null;
    this.target = a && a.nodeDOM.nodeType == 1 ? a.nodeDOM : null;
    let {
      selection
    } = e.state;
    if (r.button == 0 && i.type.spec.draggable && i.type.spec.selectable !== false || selection instanceof C && selection.from <= o && selection.to > o) {
      this.mightDrag = {
        node: i,
        pos: o,
        addAttr: !!(this.target && !this.target.draggable),
        setUneditable: !!(this.target && ye && !this.target.hasAttribute("contentEditable"))
      };
    }
    if (this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable)) {
      this.view.domObserver.stop();
      if (this.mightDrag.addAttr) {
        this.target.draggable = true;
      }
      if (this.mightDrag.setUneditable) {
        setTimeout(() => {
          if (this.view.input.mouseDown == this) {
            this.target.setAttribute("contentEditable", "false");
          }
        }, 20);
      }
      this.view.domObserver.start();
    }
    e.root.addEventListener("mouseup", this.up = this.up.bind(this));
    e.root.addEventListener("mousemove", this.move = this.move.bind(this));
    Je(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up);
    this.view.root.removeEventListener("mousemove", this.move);
    if (this.mightDrag && this.target) {
      this.view.domObserver.stop();
      if (this.mightDrag.addAttr) {
        this.target.removeAttribute("draggable");
      }
      if (this.mightDrag.setUneditable) {
        this.target.removeAttribute("contentEditable");
      }
      this.view.domObserver.start();
    }
    if (this.delayedSelectionSync) {
      setTimeout(() => ze(this.view));
    }
    this.view.input.mouseDown = null;
  }
  up(e) {
    this.done();
    if (!this.view.dom.contains(e.target)) {
      return;
    }
    let pos = this.pos;
    if (this.view.state.doc != this.startDoc) {
      pos = this.view.posAtCoords(Dr(e));
    }
    this.updateAllowDefault(e);
    if (this.allowDefault || !pos) {
      Je(this.view, "pointer");
    } else if (cf(this.view, pos.pos, pos.inside, e, this.selectNode)) {
      e.preventDefault();
    } else if (e.button == 0 && (this.flushed || ee && this.mightDrag && !this.mightDrag.node.isAtom || U && !this.view.state.selection.visible && Math.min(Math.abs(pos.pos - this.view.state.selection.from), Math.abs(pos.pos - this.view.state.selection.to)) <= 2)) {
      It(this.view, O.near(this.view.state.doc.resolve(pos.pos)));
      e.preventDefault();
    } else {
      Je(this.view, "pointer");
    }
  }
  move(e) {
    this.updateAllowDefault(e);
    Je(this.view, "pointer");
    if (e.buttons == 0) {
      this.done();
    }
  }
  updateAllowDefault(e) {
    if (!this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4)) {
      this.allowDefault = true;
    }
  }
}
re.touchstart = n => {
  n.input.lastTouch = Date.now();
  ii(n);
  Je(n, "pointer");
};
re.touchmove = n => {
  n.input.lastTouch = Date.now();
  Je(n, "pointer");
};
re.contextmenu = n => ii(n);
function Ea(n, e) {
  if (n.composing) {
    return true;
  }
  if (ee && Math.abs(e.timeStamp - n.input.compositionEndedAt) < 500) {
    n.input.compositionEndedAt = -200000000;
    return true;
  }
  return false;
}
const pf = Re ? 5000 : -1;
se.compositionstart = se.compositionupdate = n => {
  if (!n.composing) {
    n.domObserver.flush();
    let {
      state
    } = n;
    let t = state.selection.$to;
    if (state.selection instanceof N && (state.storedMarks || !t.textOffset && t.parentOffset && t.nodeBefore.marks.some(r => r.type.spec.inclusive === false) || U && na && mf(n))) {
      n.markCursor = n.state.storedMarks || t.marks();
      Wn(n, true);
      n.markCursor = null;
    } else {
      Wn(n, !state.selection.empty);
      if (ye && state.selection.empty && t.parentOffset && !t.textOffset && t.nodeBefore.marks.length) {
        let r = n.domSelectionRange();
        for (let s = r.focusNode, i = r.focusOffset; s && s.nodeType == 1 && i != 0;) {
          let o = i < 0 ? s.lastChild : s.childNodes[i - 1];
          if (!o) {
            break;
          }
          if (o.nodeType == 3) {
            let l = n.domSelection();
            if (l) {
              l.collapse(o, o.nodeValue.length);
            }
            break;
          } else {
            s = o;
            i = -1;
          }
        }
      }
    }
    n.input.composing = true;
  }
  va(n, pf);
};
function mf(n) {
  let {
    focusNode,
    focusOffset
  } = n.domSelectionRange();
  if (!focusNode || focusNode.nodeType != 1 || focusOffset >= focusNode.childNodes.length) {
    return false;
  }
  let r = focusNode.childNodes[focusOffset];
  return r.nodeType == 1 && r.contentEditable == "false";
}
se.compositionend = (n, e) => {
  if (n.composing) {
    n.input.composing = false;
    n.input.compositionEndedAt = e.timeStamp;
    n.input.compositionPendingChanges = n.domObserver.pendingRecords().length ? n.input.compositionID : 0;
    n.input.compositionNode = null;
    if (n.input.compositionPendingChanges) {
      Promise.resolve().then(() => n.domObserver.flush());
    }
    n.input.compositionID++;
    va(n, 20);
  }
};
function va(n, e) {
  clearTimeout(n.input.composingTimeout);
  if (e > -1) {
    n.input.composingTimeout = setTimeout(() => Wn(n), e);
  }
}
function Ta(n) {
  for (n.composing && (n.input.composing = false, n.input.compositionEndedAt = yf()); n.input.compositionNodes.length > 0;) {
    n.input.compositionNodes.pop().markParentsDirty();
  }
}
function gf(n) {
  let e = n.domSelectionRange();
  if (!e.focusNode) {
    return null;
  }
  let t = ld(e.focusNode, e.focusOffset);
  let r = ad(e.focusNode, e.focusOffset);
  if (t && r && t != r) {
    let s = r.pmViewDesc;
    let i = n.domObserver.lastChangedTextNode;
    if (t == i || r == i) {
      return i;
    }
    if (!s || !s.isText(r.nodeValue)) {
      return r;
    }
    if (n.input.compositionNode == r) {
      let o = t.pmViewDesc;
      if (!(!o || !o.isText(t.nodeValue))) {
        return r;
      }
    }
  }
  return t || r;
}
function yf() {
  let n = document.createEvent("Event");
  n.initEvent("event", true, true);
  return n.timeStamp;
}
function Wn(n, e = false) {
  if (!(Re && n.domObserver.flushingSoon >= 0)) {
    n.domObserver.forceFlush();
    Ta(n);
    if (e || n.docView && n.docView.dirty) {
      let t = ei(n);
      let r = n.state.selection;
      if (t && !t.eq(r)) {
        n.dispatch(n.state.tr.setSelection(t));
      } else if ((n.markCursor || e) && !r.$from.node(r.$from.sharedDepth(r.to)).inlineContent) {
        n.dispatch(n.state.tr.deleteSelection());
      } else {
        n.updateState(n.state);
      }
      return true;
    }
    return false;
  }
}
function kf(n, dom) {
  if (!n.dom.parentNode) {
    return;
  }
  let t = n.dom.parentNode.appendChild(document.createElement("div"));
  t.appendChild(dom);
  t.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection();
  let s = document.createRange();
  s.selectNodeContents(dom);
  n.dom.blur();
  r.removeAllRanges();
  r.addRange(s);
  setTimeout(() => {
    if (t.parentNode) {
      t.parentNode.removeChild(t);
    }
    n.focus();
  }, 50);
}
const dn = le && Ge < 15 || zt && fd < 604;
re.copy = se.cut = (n, e) => {
  let t = e;
  let selection = n.state.selection;
  let s = t.type == "cut";
  if (selection.empty) {
    return;
  }
  let i = dn ? null : t.clipboardData;
  let o = selection.content();
  let {
    dom,
    text
  } = ni(n, o);
  if (i) {
    t.preventDefault();
    i.clearData();
    i.setData("text/html", dom.innerHTML);
    i.setData("text/plain", text);
  } else {
    kf(n, dom);
  }
  if (s) {
    n.dispatch(n.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
  }
};
function bf(n) {
  if (n.openStart == 0 && n.openEnd == 0 && n.content.childCount == 1) {
    return n.content.firstChild;
  }
  return null;
}
function xf(n, e) {
  if (!n.dom.parentNode) {
    return;
  }
  let t = n.input.shiftKey || n.state.selection.$from.parent.type.spec.code;
  let r = n.dom.parentNode.appendChild(document.createElement(t ? "textarea" : "div"));
  if (!t) {
    r.contentEditable = "true";
  }
  r.style.cssText = "position: fixed; left: -10000px; top: 10px";
  r.focus();
  let s = n.input.shiftKey && n.input.lastKeyCode != 45;
  setTimeout(() => {
    n.focus();
    if (r.parentNode) {
      r.parentNode.removeChild(r);
    }
    if (t) {
      fn(n, r.value, null, s, e);
    } else {
      fn(n, r.textContent, r.innerHTML, s, e);
    }
  }, 50);
}
function fn(n, e, t, r, s) {
  let i = ka(n, e, t, r, n.state.selection.$from);
  if (n.someProp("handlePaste", a => a(n, s, i || w.empty))) {
    return true;
  }
  if (!i) {
    return false;
  }
  let o = bf(i);
  let l = o ? n.state.tr.replaceSelectionWith(o, r) : n.state.tr.replaceSelection(i);
  n.dispatch(l.scrollIntoView().setMeta("paste", true).setMeta("uiEvent", "paste"));
  return true;
}
function Aa(n) {
  let e = n.getData("text/plain") || n.getData("Text");
  if (e) {
    return e;
  }
  let t = n.getData("text/uri-list");
  if (t) {
    return t.replace(/\r?\n/g, " ");
  }
  return "";
}
se.paste = (n, e) => {
  let t = e;
  if (n.composing && !Re) {
    return;
  }
  let r = dn ? null : t.clipboardData;
  let s = n.input.shiftKey && n.input.lastKeyCode != 45;
  if (r && fn(n, Aa(r), r.getData("text/html"), s, t)) {
    t.preventDefault();
  } else {
    xf(n, t);
  }
};
class Na {
  constructor(e, t, r) {
    this.slice = e;
    this.move = t;
    this.node = r;
  }
}
const Sf = me ? "altKey" : "ctrlKey";
function Oa(n, e) {
  let t = n.someProp("dragCopies", r => !r(e));
  return t ?? !e[Sf];
}
re.dragstart = (n, e) => {
  let t = e;
  let mouseDown = n.input.mouseDown;
  if (mouseDown) {
    mouseDown.done();
  }
  if (!t.dataTransfer) {
    return;
  }
  let selection = n.state.selection;
  let i = selection.empty ? null : n.posAtCoords(Dr(t));
  let o;
  if (!(i && i.pos >= selection.from && i.pos <= (selection instanceof C ? selection.to - 1 : selection.to))) {
    if (mouseDown && mouseDown.mightDrag) {
      o = C.create(n.state.doc, mouseDown.mightDrag.pos);
    } else if (t.target && t.target.nodeType == 1) {
      let d = n.docView.nearestDesc(t.target, true);
      if (d && d.node.type.spec.draggable && d != n.docView) {
        o = C.create(n.state.doc, d.posBefore);
      }
    }
  }
  let l = (o || n.state.selection).content();
  let {
    dom,
    text,
    slice
  } = ni(n, l);
  if (!t.dataTransfer.files.length || !U || ta > 120) {
    t.dataTransfer.clearData();
  }
  t.dataTransfer.setData(dn ? "Text" : "text/html", dom.innerHTML);
  t.dataTransfer.effectAllowed = "copyMove";
  if (!dn) {
    t.dataTransfer.setData("text/plain", text);
  }
  n.dragging = new Na(slice, Oa(n, t), o);
};
re.dragend = n => {
  let n_dragging = n.dragging;
  window.setTimeout(() => {
    if (n.dragging == n_dragging) {
      n.dragging = null;
    }
  }, 50);
};
se.dragover = se.dragenter = (n, e) => e.preventDefault();
se.drop = (n, e) => {
  try {
    wf(n, e, n.dragging);
  } finally {
    n.dragging = null;
  }
};
function wf(n, e, dragging) {
  if (!e.dataTransfer) {
    return;
  }
  let r = n.posAtCoords(Dr(e));
  if (!r) {
    return;
  }
  let s = n.state.doc.resolve(r.pos);
  let i = dragging && dragging.slice;
  if (i) {
    n.someProp("transformPasted", h => {
      i = h(i, n, false);
    });
  } else {
    i = ka(n, Aa(e.dataTransfer), dn ? null : e.dataTransfer.getData("text/html"), false, s);
  }
  let o = !!(dragging && Oa(n, e));
  if (n.someProp("handleDrop", h => h(n, e, i || w.empty, o))) {
    e.preventDefault();
    return;
  }
  if (!i) {
    return;
  }
  e.preventDefault();
  let l = i ? Pl(n.state.doc, s.pos, i) : s.pos;
  if (l == null) {
    l = s.pos;
  }
  let a = n.state.tr;
  if (o) {
    let {
      node
    } = dragging;
    if (node) {
      node.replace(a);
    } else {
      a.deleteSelection();
    }
  }
  let c = a.mapping.map(l);
  let u = i.openStart == 0 && i.openEnd == 0 && i.content.childCount == 1;
  let a_doc = a.doc;
  if (u) {
    a.replaceRangeWith(c, c, i.content.firstChild);
  } else {
    a.replaceRange(c, c, i);
  }
  if (a.doc.eq(a_doc)) {
    return;
  }
  let f = a.doc.resolve(c);
  if (u && C.isSelectable(i.content.firstChild) && f.nodeAfter && f.nodeAfter.sameMarkup(i.content.firstChild)) {
    a.setSelection(new C(f));
  } else {
    let h = a.mapping.map(l);
    a.mapping.maps[a.mapping.maps.length - 1].forEach((p, m, g, y) => h = y);
    a.setSelection(ti(n, f, a.doc.resolve(h)));
  }
  n.focus();
  n.dispatch(a.setMeta("uiEvent", "drop"));
}
re.focus = n => {
  n.input.lastFocus = Date.now();
  if (!n.focused) {
    n.domObserver.stop();
    n.dom.classList.add("ProseMirror-focused");
    n.domObserver.start();
    n.focused = true;
    setTimeout(() => {
      if (n.docView && n.hasFocus() && !n.domObserver.currentSelection.eq(n.domSelectionRange())) {
        ze(n);
      }
    }, 20);
  }
};
re.blur = (n, e) => {
  let t = e;
  if (n.focused) {
    n.domObserver.stop();
    n.dom.classList.remove("ProseMirror-focused");
    n.domObserver.start();
    if (t.relatedTarget && n.dom.contains(t.relatedTarget)) {
      n.domObserver.currentSelection.clear();
    }
    n.focused = false;
  }
};
re.beforeinput = (n, e) => {
  if (U && Re && e.inputType == "deleteContentBackward") {
    n.domObserver.flushSoon();
    let {
      domChangeCount
    } = n.input;
    setTimeout(() => {
      if (n.input.domChangeCount != domChangeCount || (n.dom.blur(), n.focus(), n.someProp("handleKeyDown", i => i(n, st(8, "Backspace"))))) {
        return;
      }
      let {
        $cursor
      } = n.state.selection;
      if ($cursor && $cursor.pos > 0) {
        n.dispatch(n.state.tr.delete($cursor.pos - 1, $cursor.pos).scrollIntoView());
      }
    }, 50);
  }
};
for (let n in se) {
  re[n] = se[n];
}
function hn(n, e) {
  if (n == e) {
    return true;
  }
  for (let t in n) {
    if (n[t] !== e[t]) {
      return false;
    }
  }
  for (let t in e) {
    if (!(t in n)) {
      return false;
    }
  }
  return true;
}
class qn {
  constructor(e, t) {
    this.toDOM = e;
    this.spec = t || ut;
    this.side = this.spec.side || 0;
  }
  map(e, t, r, s) {
    let {
      pos,
      deleted
    } = e.mapResult(t.from + s, this.side < 0 ? -1 : 1);
    if (deleted) {
      return null;
    }
    return new ne(pos - r, pos - r, this);
  }
  valid() {
    return true;
  }
  eq(e) {
    return this == e || e instanceof qn && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && hn(this.spec, e.spec));
  }
  destroy(e) {
    if (this.spec.destroy) {
      this.spec.destroy(e);
    }
  }
}
class Xe {
  constructor(e, t) {
    this.attrs = e;
    this.spec = t || ut;
  }
  map(e, t, r, s) {
    let i = e.map(t.from + s, this.spec.inclusiveStart ? -1 : 1) - r;
    let o = e.map(t.to + s, this.spec.inclusiveEnd ? 1 : -1) - r;
    if (i >= o) {
      return null;
    }
    return new ne(i, o, this);
  }
  valid(e, t) {
    return t.from < t.to;
  }
  eq(e) {
    return this == e || e instanceof Xe && hn(this.attrs, e.attrs) && hn(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof Xe;
  }
  destroy() {}
}
class oi {
  constructor(e, t) {
    this.attrs = e;
    this.spec = t || ut;
  }
  map(e, t, r, s) {
    let i = e.mapResult(t.from + s, 1);
    if (i.deleted) {
      return null;
    }
    let o = e.mapResult(t.to + s, -1);
    if (o.deleted || o.pos <= i.pos) {
      return null;
    }
    return new ne(i.pos - r, o.pos - r, this);
  }
  valid(e, t) {
    let {
      index,
      offset
    } = e.content.findIndex(t.from);
    let i;
    return offset == t.from && !(i = e.child(index)).isText && offset + i.nodeSize == t.to;
  }
  eq(e) {
    return this == e || e instanceof oi && hn(this.attrs, e.attrs) && hn(this.spec, e.spec);
  }
  destroy() {}
}
class ne {
  constructor(e, t, r) {
    this.from = e;
    this.to = t;
    this.type = r;
  }
  copy(e, t) {
    return new ne(e, t, this.type);
  }
  eq(e, t = 0) {
    return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to;
  }
  map(e, t, r) {
    return this.type.map(e, this, t, r);
  }
  static widget(e, t, r) {
    return new ne(e, e, new qn(t, r));
  }
  static inline(e, t, r, s) {
    return new ne(e, t, new Xe(r, s));
  }
  static node(e, t, r, s) {
    return new ne(e, t, new oi(r, s));
  }
  get spec() {
    return this.type.spec;
  }
  get inline() {
    return this.type instanceof Xe;
  }
  get widget() {
    return this.type instanceof qn;
  }
}
const Tt = [];
const ut = {};
class B {
  constructor(e, t) {
    this.local = e.length ? e : Tt;
    this.children = t.length ? t : Tt;
  }
  static create(e, t) {
    if (t.length) {
      return Kn(t, e, 0, ut);
    }
    return B_empty;
  }
  find(e, t, r) {
    let s = [];
    this.findInner(e ?? 0, t ?? 1000000000, s, 0, r);
    return s;
  }
  findInner(e, t, r, s, i) {
    for (let o = 0; o < this.local.length; o++) {
      let l = this.local[o];
      if (l.from <= t && l.to >= e && (!i || i(l.spec))) {
        r.push(l.copy(l.from + s, l.to + s));
      }
    }
    for (let o = 0; o < this.children.length; o += 3) {
      if (this.children[o] < t && this.children[o + 1] > e) {
        let l = this.children[o] + 1;
        this.children[o + 2].findInner(e - l, t - l, r, s + l, i);
      }
    }
  }
  map(e, t, r) {
    if (this == B_empty || e.maps.length == 0) {
      return this;
    }
    return this.mapInner(e, t, 0, 0, r || ut);
  }
  mapInner(e, t, r, s, i) {
    let o;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l].map(e, r, s);
      if (a && a.type.valid(t, a)) {
        (o || (o = [])).push(a);
      } else if (i.onRemove) {
        i.onRemove(this.local[l].spec);
      }
    }
    if (this.children.length) {
      return Cf(this.children, o || [], e, t, r, s, i);
    }
    if (o) {
      return new B(o.sort(dt), Tt);
    }
    return B_empty;
  }
  add(e, t) {
    if (t.length) {
      if (this == B_empty) {
        return B.create(e, t);
      }
      return this.addInner(e, t, 0);
    }
    return this;
  }
  addInner(e, t, r) {
    let s;
    let i = 0;
    e.forEach((l, a) => {
      let c = a + r;
      let u;
      if (u = Ia(t, l, c)) {
        for (s || (s = this.children.slice()); i < s.length && s[i] < a;) {
          i += 3;
        }
        if (s[i] == a) {
          s[i + 2] = s[i + 2].addInner(l, u, c + 1);
        } else {
          s.splice(i, 0, a, a + l.nodeSize, Kn(u, l, c + 1, ut));
        }
        i += 3;
      }
    });
    let o = Da(i ? Ra(t) : t, -r);
    for (let l = 0; l < o.length; l++) {
      if (!o[l].type.valid(e, o[l])) {
        o.splice(l--, 1);
      }
    }
    return new B(o.length ? this.local.concat(o).sort(dt) : this.local, s || this.children);
  }
  remove(e) {
    if (e.length == 0 || this == B_empty) {
      return this;
    }
    return this.removeInner(e, 0);
  }
  removeInner(e, t) {
    let children = this.children;
    let local = this.local;
    for (let i = 0; i < children.length; i += 3) {
      let o;
      let l = children[i] + t;
      let a = children[i + 1] + t;
      for (let u = 0, d; u < e.length; u++) {
        if ((d = e[u]) && d.from > l && d.to < a) {
          e[u] = null;
          (o || (o = [])).push(d);
        }
      }
      if (!o) {
        continue;
      }
      if (children == this.children) {
        children = this.children.slice();
      }
      let c = children[i + 2].removeInner(o, l + 1);
      if (c != B_empty) {
        children[i + 2] = c;
      } else {
        children.splice(i, 3);
        i -= 3;
      }
    }
    if (local.length) {
      for (let i = 0, o; i < e.length; i++) {
        if (o = e[i]) {
          for (let l = 0; l < local.length; l++) {
            if (local[l].eq(o, t)) {
              if (local == this.local) {
                local = this.local.slice();
              }
              local.splice(l--, 1);
            }
          }
        }
      }
    }
    if (children == this.children && local == this.local) {
      return this;
    }
    if (local.length || children.length) {
      return new B(local, children);
    }
    return B_empty;
  }
  forChild(e, t) {
    if (this == B_empty) {
      return this;
    }
    if (t.isLeaf) {
      return B.empty;
    }
    let r;
    let s;
    for (let l = 0; l < this.children.length; l += 3) {
      if (this.children[l] >= e) {
        if (this.children[l] == e) {
          r = this.children[l + 2];
        }
        break;
      }
    }
    let i = e + 1;
    let o = i + t.content.size;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l];
      if (a.from < o && a.to > i && a.type instanceof Xe) {
        let c = Math.max(i, a.from) - i;
        let u = Math.min(o, a.to) - i;
        if (c < u) {
          (s || (s = [])).push(a.copy(c, u));
        }
      }
    }
    if (s) {
      let l = new B(s.sort(dt), Tt);
      if (r) {
        return new We([l, r]);
      }
      return l;
    }
    return r || B_empty;
  }
  eq(e) {
    if (this == e) {
      return true;
    }
    if (!(e instanceof B) || this.local.length != e.local.length || this.children.length != e.children.length) {
      return false;
    }
    for (let t = 0; t < this.local.length; t++) {
      if (!this.local[t].eq(e.local[t])) {
        return false;
      }
    }
    for (let t = 0; t < this.children.length; t += 3) {
      if (this.children[t] != e.children[t] || this.children[t + 1] != e.children[t + 1] || !this.children[t + 2].eq(e.children[t + 2])) {
        return false;
      }
    }
    return true;
  }
  locals(e) {
    return li(this.localsInner(e));
  }
  localsInner(e) {
    if (this == B_empty) {
      return Tt;
    }
    if (e.inlineContent || !this.local.some(Xe.is)) {
      return this.local;
    }
    let t = [];
    for (let r = 0; r < this.local.length; r++) {
      if (!(this.local[r].type instanceof Xe)) {
        t.push(this.local[r]);
      }
    }
    return t;
  }
  forEachSet(e) {
    e(this);
  }
}
B.empty = new B([], []);
B.removeOverlap = li;
const B_empty = B.empty;
class We {
  constructor(e) {
    this.members = e;
  }
  map(e, t) {
    const r = this.members.map(s => s.map(e, t, ut));
    return We.from(r);
  }
  forChild(e, t) {
    if (t.isLeaf) {
      return B.empty;
    }
    let r = [];
    for (let s = 0; s < this.members.length; s++) {
      let i = this.members[s].forChild(e, t);
      i != B_empty && (i instanceof We ? r = r.concat(i.members) : r.push(i));
    }
    return We.from(r);
  }
  eq(e) {
    if (!(e instanceof We) || e.members.length != this.members.length) {
      return false;
    }
    for (let t = 0; t < this.members.length; t++) {
      if (!this.members[t].eq(e.members[t])) {
        return false;
      }
    }
    return true;
  }
  locals(e) {
    let t;
    let r = true;
    for (let s = 0; s < this.members.length; s++) {
      let i = this.members[s].localsInner(e);
      if (i.length) {
        if (!t) {
          t = i;
        } else {
          if (r) {
            t = t.slice();
            r = false;
          }
          for (let o = 0; o < i.length; o++) {
            t.push(i[o]);
          }
        }
      }
    }
    if (t) {
      return li(r ? t : t.sort(dt));
    }
    return Tt;
  }
  static from(e) {
    switch (e.length) {
      case 0:
        return B_empty;
      case 1:
        return e[0];
      default:
        return new We(e.every(t => t instanceof B) ? e : e.reduce((acc, item) => acc.concat(item instanceof B ? item : item.members), []));
    }
  }
  forEachSet(e) {
    for (let t = 0; t < this.members.length; t++) {
      this.members[t].forEachSet(e);
    }
  }
}
function Cf(children, e, t, r, s, i, o) {
  let l = children.slice();
  for (let c = 0, u = i; c < t.maps.length; c++) {
    let d = 0;
    t.maps[c].forEach((f, h, p, m) => {
      let g = m - p - (h - f);
      for (let y = 0; y < l.length; y += 3) {
        let b = l[y + 1];
        if (b < 0 || f > b + u - d) {
          continue;
        }
        let C = l[y] + u - d;
        if (h >= C) {
          l[y + 1] = f <= C ? -2 : -1;
        } else if (f >= u && g) {
          l[y] += g;
          l[y + 1] += g;
        }
      }
      d += g;
    });
    u = t.maps[c].map(u, -1);
  }
  let a = false;
  for (let c = 0; c < l.length; c += 3) {
    if (l[c + 1] < 0) {
      if (l[c + 1] == -2) {
        a = true;
        l[c + 1] = -1;
        continue;
      }
      let u = t.map(children[c] + i);
      let d = u - s;
      if (d < 0 || d >= r.content.size) {
        a = true;
        continue;
      }
      let f = t.map(children[c + 1] + i, -1);
      let h = f - s;
      let {
        index,
        offset
      } = r.content.findIndex(d);
      let g = r.maybeChild(index);
      if (g && offset == d && offset + g.nodeSize == h) {
        let y = l[c + 2].mapInner(t, g, u + 1, children[c] + i + 1, o);
        if (y != B_empty) {
          l[c] = d;
          l[c + 1] = h;
          l[c + 2] = y;
        } else {
          l[c + 1] = -2;
          a = true;
        }
      } else {
        a = true;
      }
    }
  }
  if (a) {
    let c = Mf(l, children, e, t, s, i, o);
    let u = Kn(c, r, 0, o);
    e = u.local;
    for (let d = 0; d < l.length; d += 3) {
      if (l[d + 1] < 0) {
        l.splice(d, 3);
        d -= 3;
      }
    }
    for (let d = 0, f = 0; d < u.children.length; d += 3) {
      let child = u.children[d];
      while (f < l.length && l[f] < child) {
        f += 3;
      }
      l.splice(f, 0, u.children[d], u.children[d + 1], u.children[d + 2]);
    }
  }
  return new B(e.sort(dt), l);
}
function Da(n, e) {
  if (!e || !n.length) {
    return n;
  }
  let t = [];
  for (const s of n) {
    t.push(new ne(s.from + e, s.to + e, s.type));
  }
  return t;
}
function Mf(n, children, t, r, s, i, o) {
  function l(a, c) {
    for (let u = 0; u < a.local.length; u++) {
      let d = a.local[u].map(r, s, c);
      if (d) {
        t.push(d);
      } else if (o.onRemove) {
        o.onRemove(a.local[u].spec);
      }
    }
    for (let u = 0; u < a.children.length; u += 3) {
      l(a.children[u + 2], a.children[u] + c + 1);
    }
  }
  for (let a = 0; a < n.length; a += 3) {
    if (n[a + 1] == -1) {
      l(n[a + 2], children[a] + i + 1);
    }
  }
  return t;
}
function Ia(n, e, t) {
  if (e.isLeaf) {
    return null;
  }
  let r = t + e.nodeSize;
  let s = null;
  for (let i = 0, o; i < n.length; i++) {
    if ((o = n[i]) && o.from > t && o.to < r) {
      (s || (s = [])).push(o);
      n[i] = null;
    }
  }
  return s;
}
function Ra(n) {
  let e = [];
  for (let t = 0; t < n.length; t++) {
    if (n[t] != null) {
      e.push(n[t]);
    }
  }
  return e;
}
function Kn(n, e, t, r) {
  let s = [];
  let i = false;
  e.forEach((l, a) => {
    let c = Ia(n, l, a + t);
    if (c) {
      i = true;
      let u = Kn(c, l, t + a + 1, r);
      if (u != B_empty) {
        s.push(a, a + l.nodeSize, u);
      }
    }
  });
  let o = Da(i ? Ra(n) : n, -t).sort(dt);
  for (let l = 0; l < o.length; l++) {
    if (!o[l].type.valid(e, o[l])) {
      if (r.onRemove) {
        r.onRemove(o[l].spec);
      }
      o.splice(l--, 1);
    }
  }
  if (o.length || s.length) {
    return new B(o, s);
  }
  return B_empty;
}
function dt(n, e) {
  return n.from - e.from || n.to - e.to;
}
function li(n) {
  let e = n;
  for (let t = 0; t < e.length - 1; t++) {
    let r = e[t];
    if (r.from != r.to) {
      for (let s = t + 1; s < e.length; s++) {
        let i = e[s];
        if (i.from == r.from) {
          if (i.to != r.to) {
            if (e == n) {
              e = n.slice();
            }
            e[s] = i.copy(i.from, r.to);
            xo(e, s + 1, i.copy(r.to, i.to));
          }
          continue;
        } else {
          if (i.from < r.to) {
            if (e == n) {
              e = n.slice();
            }
            e[t] = r.copy(r.from, i.from);
            xo(e, s, r.copy(i.from, r.to));
          }
          break;
        }
      }
    }
  }
  return e;
}
function xo(n, e, t) {
  while (e < n.length && dt(t, n[e]) > 0) {
    e++;
  }
  n.splice(e, 0, t);
}
function Qr(n) {
  let e = [];
  n.someProp("decorations", t => {
    let r = t(n.state);
    if (r && r != B_empty) {
      e.push(r);
    }
  });
  if (n.cursorWrapper) {
    e.push(B.create(n.state.doc, [n.cursorWrapper.deco]));
  }
  return We.from(e);
}
const Ef = {
  childList: true,
  characterData: true,
  characterDataOldValue: true,
  attributes: true,
  attributeOldValue: true,
  subtree: true
};
const vf = le && Ge <= 11;
class Tf {
  constructor() {
    this.anchorNode = null;
    this.anchorOffset = 0;
    this.focusNode = null;
    this.focusOffset = 0;
  }
  set(e) {
    this.anchorNode = e.anchorNode;
    this.anchorOffset = e.anchorOffset;
    this.focusNode = e.focusNode;
    this.focusOffset = e.focusOffset;
  }
  clear() {
    this.anchorNode = this.focusNode = null;
  }
  eq(e) {
    return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset;
  }
}
class Af {
  constructor(e, t) {
    this.view = e;
    this.handleDOMChange = t;
    this.queue = [];
    this.flushingSoon = -1;
    this.observer = null;
    this.currentSelection = new Tf();
    this.onCharData = null;
    this.suppressingSelectionUpdates = false;
    this.lastChangedTextNode = null;
    this.observer = window.MutationObserver && new window.MutationObserver(r => {
      for (let s = 0; s < r.length; s++) {
        this.queue.push(r[s]);
      }
      if (le && Ge <= 11 && r.some(s => s.type == "childList" && s.removedNodes.length || s.type == "characterData" && s.oldValue.length > s.target.nodeValue.length)) {
        this.flushSoon();
      } else {
        this.flush();
      }
    });
    if (vf) {
      this.onCharData = r => {
        this.queue.push({
          target: r.target,
          type: "characterData",
          oldValue: r.prevValue
        });
        this.flushSoon();
      };
    }
    this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  flushSoon() {
    if (this.flushingSoon < 0) {
      this.flushingSoon = window.setTimeout(() => {
        this.flushingSoon = -1;
        this.flush();
      }, 20);
    }
  }
  forceFlush() {
    if (this.flushingSoon > -1) {
      window.clearTimeout(this.flushingSoon);
      this.flushingSoon = -1;
      this.flush();
    }
  }
  start() {
    if (this.observer) {
      this.observer.takeRecords();
      this.observer.observe(this.view.dom, Ef);
    }
    if (this.onCharData) {
      this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData);
    }
    this.connectSelection();
  }
  stop() {
    if (this.observer) {
      let e = this.observer.takeRecords();
      if (e.length) {
        for (let t = 0; t < e.length; t++) {
          this.queue.push(e[t]);
        }
        window.setTimeout(() => this.flush(), 20);
      }
      this.observer.disconnect();
    }
    if (this.onCharData) {
      this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData);
    }
    this.disconnectSelection();
  }
  connectSelection() {
    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
  }
  disconnectSelection() {
    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
  }
  suppressSelectionUpdates() {
    this.suppressingSelectionUpdates = true;
    setTimeout(() => this.suppressingSelectionUpdates = false, 50);
  }
  onSelectionChange() {
    if (fo(this.view)) {
      if (this.suppressingSelectionUpdates) {
        return ze(this.view);
      }
      if (le && Ge <= 11 && !this.view.state.selection.empty) {
        let e = this.view.domSelectionRange();
        if (e.focusNode && mt(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)) {
          return this.flushSoon();
        }
      }
      this.flush();
    }
  }
  setCurSelection() {
    this.currentSelection.set(this.view.domSelectionRange());
  }
  ignoreSelectionChange(e) {
    if (!e.focusNode) {
      return true;
    }
    let t = new Set();
    let r;
    for (let i = e.focusNode; i; i = Lt(i)) {
      t.add(i);
    }
    for (let i = e.anchorNode; i; i = Lt(i)) {
      if (t.has(i)) {
        r = i;
        break;
      }
    }
    let s = r && this.view.docView.nearestDesc(r);
    if (s && s.ignoreMutation({
      type: "selection",
      target: r.nodeType == 3 ? r.parentNode : r
    })) {
      this.setCurSelection();
      return true;
    }
  }
  pendingRecords() {
    if (this.observer) {
      for (let e of this.observer.takeRecords()) {
        this.queue.push(e);
      }
    }
    return this.queue;
  }
  flush() {
    let {
      view
    } = this;
    if (!view.docView || this.flushingSoon > -1) {
      return;
    }
    let t = this.pendingRecords();
    if (t.length) {
      this.queue = [];
    }
    let r = view.domSelectionRange();
    let s = !this.suppressingSelectionUpdates && !this.currentSelection.eq(r) && fo(view) && !this.ignoreSelectionChange(r);
    let i = -1;
    let o = -1;
    let l = false;
    let a = [];
    if (view.editable) {
      for (let u = 0; u < t.length; u++) {
        let d = this.registerMutation(t[u], a);
        if (d) {
          i = i < 0 ? d.from : Math.min(d.from, i);
          o = o < 0 ? d.to : Math.max(d.to, o);
          if (d.typeOver) {
            l = true;
          }
        }
      }
    }
    if (ye && a.length) {
      let u = a.filter(d => d.nodeName == "BR");
      if (u.length == 2) {
        let [d, f] = u;
        if (d.parentNode && d.parentNode.parentNode == f.parentNode) {
          f.remove();
        } else {
          d.remove();
        }
      } else {
        let {
          focusNode
        } = this.currentSelection;
        for (let f of u) {
          let h = f.parentNode;
          if (h && h.nodeName == "LI" && (!focusNode || Df(view, focusNode) != h)) {
            f.remove();
          }
        }
      }
    } else if ((U || ee) && a.some(u => u.nodeName == "BR") && (view.input.lastKeyCode == 8 || view.input.lastKeyCode == 46)) {
      for (let u of a) {
        if (u.nodeName == "BR" && u.parentNode) {
          let d = u.nextSibling;
          if (d && d.nodeType == 1 && d.contentEditable == "false") {
            u.parentNode.removeChild(u);
          }
        }
      }
    }
    let c = null;
    if (i < 0 && s && view.input.lastFocus > Date.now() - 200 && Math.max(view.input.lastTouch, view.input.lastClick.time) < Date.now() - 300 && Nr(r) && (c = ei(view)) && c.eq(O.near(view.state.doc.resolve(0), 1))) {
      view.input.lastFocus = 0;
      ze(view);
      this.currentSelection.set(r);
      view.scrollToSelection();
    } else if (i > -1 || s) {
      if (i > -1) {
        view.docView.markDirty(i, o);
        Nf(view);
      }
      this.handleDOMChange(i, o, l, a);
      if (view.docView && view.docView.dirty) {
        view.updateState(view.state);
      } else if (!this.currentSelection.eq(r)) {
        ze(view);
      }
      this.currentSelection.set(r);
    }
  }
  registerMutation(e, t) {
    if (t.indexOf(e.target) > -1) {
      return null;
    }
    let r = this.view.docView.nearestDesc(e.target);
    if (e.type == "attributes" && (r == this.view.docView || e.attributeName == "contenteditable" || e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !r || r.ignoreMutation(e)) {
      return null;
    }
    if (e.type == "childList") {
      for (let u = 0; u < e.addedNodes.length; u++) {
        let addedNode = e.addedNodes[u];
        t.push(addedNode);
        if (addedNode.nodeType == 3) {
          this.lastChangedTextNode = addedNode;
        }
      }
      if (r.contentDOM && r.contentDOM != r.dom && !r.contentDOM.contains(e.target)) {
        return {
          from: r.posBefore,
          to: r.posAfter
        };
      }
      let s = e.previousSibling;
      let i = e.nextSibling;
      if (le && Ge <= 11 && e.addedNodes.length) {
        for (let u = 0; u < e.addedNodes.length; u++) {
          let {
            previousSibling,
            nextSibling
          } = e.addedNodes[u];
          if (!previousSibling || Array.prototype.indexOf.call(e.addedNodes, previousSibling) < 0) {
            s = previousSibling;
          }
          if (!nextSibling || Array.prototype.indexOf.call(e.addedNodes, nextSibling) < 0) {
            i = nextSibling;
          }
        }
      }
      let o = s && s.parentNode == e.target ? X(s) + 1 : 0;
      let l = r.localPosFromDOM(e.target, o, -1);
      let a = i && i.parentNode == e.target ? X(i) : e.target.childNodes.length;
      let c = r.localPosFromDOM(e.target, a, 1);
      return {
        from: l,
        to: c
      };
    } else {
      if (e.type == "attributes") {
        return {
          from: r.posAtStart - r.border,
          to: r.posAtEnd + r.border
        };
      }
      this.lastChangedTextNode = e.target;
      return {
        from: r.posAtStart,
        to: r.posAtEnd,
        typeOver: e.target.nodeValue == e.oldValue
      };
    }
  }
}
let So = new WeakMap();
let wo = false;
function Nf(view) {
  if (!So.has(view) && (So.set(view, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(view.dom).whiteSpace) !== -1)) {
    view.requiresGeckoHackNode = ye;
    if (wo) {
      return;
    }
    console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package.");
    wo = true;
  }
}
function Co(n, {
  startContainer,
  startOffset,
  endContainer,
  endOffset
}) {
  let o = n.domAtPos(n.state.selection.anchor);
  if (mt(o.node, o.offset, endContainer, endOffset)) {
    [startContainer, startOffset, endContainer, endOffset] = [endContainer, endOffset, startContainer, startOffset];
  }
  return {
    anchorNode: startContainer,
    anchorOffset: startOffset,
    focusNode: endContainer,
    focusOffset: endOffset
  };
}
function Of(n, e) {
  if (e.getComposedRanges) {
    let s = e.getComposedRanges(n.root)[0];
    if (s) {
      return Co(n, s);
    }
  }
  let t;
  function r(s) {
    s.preventDefault();
    s.stopImmediatePropagation();
    t = s.getTargetRanges()[0];
  }
  n.dom.addEventListener("beforeinput", r, true);
  document.execCommand("indent");
  n.dom.removeEventListener("beforeinput", r, true);
  if (t) {
    return Co(n, t);
  }
  return null;
}
function Df(view, focusNode) {
  for (let t = focusNode.parentNode; t && t != view.dom; t = t.parentNode) {
    let r = view.docView.nearestDesc(t, true);
    if (r && r.node.isBlock) {
      return t;
    }
  }
  return null;
}
function If(n, e, t) {
  let {
    node,
    fromOffset,
    toOffset,
    from,
    to
  } = n.docView.parseRange(e, t);
  let a = n.domSelectionRange();
  let findPositions;
  let a_anchorNode = a.anchorNode;
  if (a_anchorNode && n.dom.contains(a_anchorNode.nodeType == 1 ? a_anchorNode : a_anchorNode.parentNode)) {
    findPositions = [{
      node: a_anchorNode,
      offset: a.anchorOffset
    }];
    if (!Nr(a)) {
      findPositions.push({
        node: a.focusNode,
        offset: a.focusOffset
      });
    }
  }
  if (U && n.input.lastKeyCode === 8) {
    for (let g = toOffset; g > fromOffset; g--) {
      let y = node.childNodes[g - 1];
      let b = y.pmViewDesc;
      if (y.nodeName == "BR" && !b) {
        toOffset = g;
        break;
      }
      if (!b || b.size) {
        break;
      }
    }
  }
  let doc = n.state.doc;
  let f = n.someProp("domParser") || Le.fromSchema(n.state.schema);
  let h = doc.resolve(from);
  let sel = null;
  let doc_1 = f.parse(node, {
    topNode: h.parent,
    topMatch: h.parent.contentMatchAt(h.index()),
    topOpen: true,
    from: fromOffset,
    to: toOffset,
    preserveWhitespace: h.parent.type.whitespace == "pre" ? "full" : true,
    findPositions,
    ruleFromNode,
    context: h
  });
  if (findPositions && findPositions[0].pos != null) {
    let g = findPositions[0].pos;
    let y = findPositions[1] && findPositions[1].pos;
    if (y == null) {
      y = g;
    }
    sel = {
      anchor: g + from,
      head: y + from
    };
  }
  return {
    doc: doc_1,
    sel,
    from,
    to
  };
}
function ruleFromNode(n) {
  let n_pmViewDesc = n.pmViewDesc;
  if (n_pmViewDesc) {
    return n_pmViewDesc.parseRule();
  }
  if (n.nodeName == "BR" && n.parentNode) {
    if (ee && /^(ul|ol)$/i.test(n.parentNode.nodeName)) {
      let skip = document.createElement("div");
      skip.appendChild(document.createElement("li"));
      return {
        skip
      };
    } else if (n.parentNode.lastChild == n || ee && /^(tr|table)$/i.test(n.parentNode.nodeName)) {
      return {
        ignore: true
      };
    }
  } else if (n.nodeName == "IMG" && n.getAttribute("mark-placeholder")) {
    return {
      ignore: true
    };
  }
  return null;
}
const Pf = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function Lf(n, e, t, r, s) {
  let i = n.input.compositionPendingChanges || (n.composing ? n.input.compositionID : 0);
  n.input.compositionPendingChanges = 0;
  if (e < 0) {
    let E = n.input.lastSelectionTime > Date.now() - 50 ? n.input.lastSelectionOrigin : null;
    let I = ei(n, E);
    if (I && !n.state.selection.eq(I)) {
      if (U && Re && n.input.lastKeyCode === 13 && Date.now() - 100 < n.input.lastKeyCodeTime && n.someProp("handleKeyDown", ae => ae(n, st(13, "Enter")))) {
        return;
      }
      let R = n.state.tr.setSelection(I);
      if (E == "pointer") {
        R.setMeta("pointer", true);
      } else if (E == "key") {
        R.scrollIntoView();
      }
      if (i) {
        R.setMeta("composition", i);
      }
      n.dispatch(R);
    }
    return;
  }
  let o = n.state.doc.resolve(e);
  let l = o.sharedDepth(t);
  e = o.before(l + 1);
  t = n.state.doc.resolve(t).after(l + 1);
  let selection = n.state.selection;
  let c = If(n, e, t);
  let doc = n.state.doc;
  let d = doc.slice(c.from, c.to);
  let f;
  let h;
  if (n.input.lastKeyCode === 8 && Date.now() - 100 < n.input.lastKeyCodeTime) {
    f = n.state.selection.to;
    h = "end";
  } else {
    f = n.state.selection.from;
    h = "start";
  }
  n.input.lastKeyCode = null;
  let p = $f(d.content, c.doc.content, c.from, f, h);
  p && n.input.domChangeCount++;
  if ((zt && n.input.lastIOSEnter > Date.now() - 225 || Re) && s.some(E => E.nodeType == 1 && !Pf.test(E.nodeName)) && (!p || p.endA >= p.endB) && n.someProp("handleKeyDown", E => E(n, st(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (!p) {
    if (r && selection instanceof N && !selection.empty && selection.$head.sameParent(selection.$anchor) && !n.composing && !(c.sel && c.sel.anchor != c.sel.head)) {
      p = {
        start: selection.from,
        endA: selection.to,
        endB: selection.to
      };
    } else {
      if (c.sel) {
        let E = Mo(n, n.state.doc, c.sel);
        if (E && !E.eq(n.state.selection)) {
          let I = n.state.tr.setSelection(E);
          if (i) {
            I.setMeta("composition", i);
          }
          n.dispatch(I);
        }
      }
      return;
    }
  }
  n.state.selection.from < n.state.selection.to && p.start == p.endB && n.state.selection instanceof N && (p.start > n.state.selection.from && p.start <= n.state.selection.from + 2 && n.state.selection.from >= c.from ? p.start = n.state.selection.from : p.endA < n.state.selection.to && p.endA >= n.state.selection.to - 2 && n.state.selection.to <= c.to && (p.endB += n.state.selection.to - p.endA, p.endA = n.state.selection.to));
  le && Ge <= 11 && p.endB == p.start + 1 && p.endA == p.start && p.start > c.from && c.doc.textBetween(p.start - c.from - 1, p.start - c.from + 1) == "  " && (p.start--, p.endA--, p.endB--);
  let m = c.doc.resolveNoCache(p.start - c.from);
  let g = c.doc.resolveNoCache(p.endB - c.from);
  let y = doc.resolve(p.start);
  let b = m.sameParent(g) && m.parent.inlineContent && y.end() >= p.endA;
  if ((zt && n.input.lastIOSEnter > Date.now() - 225 && (!b || s.some(E => E.nodeName == "DIV" || E.nodeName == "P")) || !b && m.pos < c.doc.content.size && (!m.sameParent(g) || !m.parent.inlineContent) && m.pos < g.pos && !/\S/.test(c.doc.textBetween(m.pos, g.pos, "", ""))) && n.someProp("handleKeyDown", E => E(n, st(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (n.state.selection.anchor > p.start && Bf(doc, p.start, p.endA, m, g) && n.someProp("handleKeyDown", E => E(n, st(8, "Backspace")))) {
    if (Re && U) {
      n.domObserver.suppressSelectionUpdates();
    }
    return;
  }
  if (U && p.endB == p.start) {
    n.input.lastChromeDelete = Date.now();
  }
  if (Re && !b && m.start() != g.start() && g.parentOffset == 0 && m.depth == g.depth && c.sel && c.sel.anchor == c.sel.head && c.sel.head == p.endA) {
    p.endB -= 2;
    g = c.doc.resolveNoCache(p.endB - c.from);
    setTimeout(() => {
      n.someProp("handleKeyDown", E => E(n, st(13, "Enter")));
    }, 20);
  }
  let p_start = p.start;
  let p_endA = p.endA;
  let S = E => {
    let I = E || n.state.tr.replace(p_start, p_endA, c.doc.slice(p.start - c.from, p.endB - c.from));
    if (c.sel) {
      let R = Mo(n, I.doc, c.sel);
      if (R && !(U && n.composing && R.empty && (p.start != p.endB || n.input.lastChromeDelete < Date.now() - 100) && (R.head == p_start || R.head == I.mapping.map(p_endA) - 1) || le && R.empty && R.head == p_start)) {
        I.setSelection(R);
      }
    }
    if (i) {
      I.setMeta("composition", i);
    }
    return I.scrollIntoView();
  };
  let A;
  if (b) {
    if (m.pos == g.pos) {
      if (le && Ge <= 11 && m.parentOffset == 0) {
        n.domObserver.suppressSelectionUpdates();
        setTimeout(() => ze(n), 20);
      }
      let E = S(n.state.tr.delete(p_start, p_endA));
      let I = doc.resolve(p.start).marksAcross(doc.resolve(p.endA));
      if (I) {
        E.ensureMarks(I);
      }
      n.dispatch(E);
    } else if (p.endA == p.endB && (A = zf(m.parent.content.cut(m.parentOffset, g.parentOffset), y.parent.content.cut(y.parentOffset, p.endA - y.start())))) {
      let E = S(n.state.tr);
      if (A.type == "add") {
        E.addMark(p_start, p_endA, A.mark);
      } else {
        E.removeMark(p_start, p_endA, A.mark);
      }
      n.dispatch(E);
    } else if (m.parent.child(m.index()).isText && m.index() == g.index() - (g.textOffset ? 0 : 1)) {
      let E = m.parent.textBetween(m.parentOffset, g.parentOffset);
      let I = () => S(n.state.tr.insertText(E, p_start, p_endA));
      if (!n.someProp("handleTextInput", R => R(n, p_start, p_endA, E, I))) {
        n.dispatch(I());
      }
    } else {
      n.dispatch(S());
    }
  } else {
    n.dispatch(S());
  }
}
function Mo(n, doc, sel) {
  if (Math.max(sel.anchor, sel.head) > doc.content.size) {
    return null;
  }
  return ti(n, doc.resolve(sel.anchor), doc.resolve(sel.head));
}
function zf(n, e) {
  let marks = n.firstChild.marks;
  let marks_1 = e.firstChild.marks;
  let s = marks;
  let i = marks_1;
  let o;
  let l;
  let a;
  for (let u = 0; u < marks_1.length; u++) {
    s = marks_1[u].removeFromSet(s);
  }
  for (let u = 0; u < marks.length; u++) {
    i = marks[u].removeFromSet(i);
  }
  if (s.length == 1 && i.length == 0) {
    l = s[0];
    o = "add";
    a = u => u.mark(l.addToSet(u.marks));
  } else if (s.length == 0 && i.length == 1) {
    l = i[0];
    o = "remove";
    a = u => u.mark(l.removeFromSet(u.marks));
  } else {
    return null;
  }
  let c = [];
  for (let u = 0; u < e.childCount; u++) {
    c.push(a(e.child(u)));
  }
  if (k.from(c).eq(n)) {
    return {
      mark: l,
      type: o
    };
  }
}
function Bf(doc, start, endA, r, s) {
  if (endA - start <= s.pos - r.pos || Zr(r, true, false) < s.pos) {
    return false;
  }
  let i = doc.resolve(start);
  if (!r.parent.isTextblock) {
    let l = i.nodeAfter;
    return l != null && endA == start + l.nodeSize;
  }
  if (i.parentOffset < i.parent.content.size || !i.parent.isTextblock) {
    return false;
  }
  let o = doc.resolve(Zr(i, true, true));
  if (!o.parent.isTextblock || o.pos > endA || Zr(o, true, false) < endA) {
    return false;
  }
  return r.parent.content.cut(r.parentOffset).eq(o.parent.content);
}
function Zr(n, e, t) {
  let n_depth = n.depth;
  let s = e ? n.end() : n.pos;
  while (n_depth > 0 && (e || n.indexAfter(n_depth) == n.node(n_depth).childCount)) {
    n_depth--;
    s++;
    e = false;
  }
  if (t) {
    let i = n.node(n_depth).maybeChild(n.indexAfter(n_depth));
    while (i && !i.isLeaf) {
      i = i.firstChild;
      s++;
    }
  }
  return s;
}
function $f(content, e, from, r, s) {
  let i = content.findDiffStart(e, from);
  if (i == null) {
    return null;
  }
  let {
    a: a_1,
    b
  } = content.findDiffEnd(e, from + content.size, from + e.size);
  if (s == "end") {
    let a = Math.max(0, i - Math.min(a_1, b));
    r -= a_1 + a - i;
  }
  if (a_1 < i && content.size < e.size) {
    let a = r <= i && r >= a_1 ? i - r : 0;
    i -= a;
    if (i && i < e.size && Eo(e.textBetween(i - 1, i + 1))) {
      i += a ? 1 : -1;
    }
    b = i + (b - a_1);
    a_1 = i;
  } else if (b < i) {
    let a = r <= i && r >= b ? i - r : 0;
    i -= a;
    if (i && i < content.size && Eo(content.textBetween(i - 1, i + 1))) {
      i += a ? 1 : -1;
    }
    a_1 = i + (a_1 - b);
    b = i;
  }
  return {
    start: i,
    endA: a_1,
    endB: b
  };
}
function Eo(n) {
  if (n.length != 2) {
    return false;
  }
  let e = n.charCodeAt(0);
  let t = n.charCodeAt(1);
  return e >= 56320 && e <= 57343 && t >= 55296 && t <= 56319;
}
class Pa {
  constructor(e, t) {
    this._root = null;
    this.focused = false;
    this.trackWrites = null;
    this.mounted = false;
    this.markCursor = null;
    this.cursorWrapper = null;
    this.lastSelectedViewDesc = undefined;
    this.input = new ef();
    this.prevDirectPlugins = [];
    this.pluginViews = [];
    this.requiresGeckoHackNode = false;
    this.dragging = null;
    this._props = t;
    this.state = t.state;
    this.directPlugins = t.plugins || [];
    this.directPlugins.forEach(Oo);
    this.dispatch = this.dispatch.bind(this);
    this.dom = e && e.mount || document.createElement("div");
    e && (e.appendChild ? e.appendChild(this.dom) : typeof e === "function" ? e(this.dom) : e.mount && (this.mounted = true));
    this.editable = Ao(this);
    To(this);
    this.nodeViews = No(this);
    this.docView = io(this.state.doc, vo(this), Qr(this), this.dom, this);
    this.domObserver = new Af(this, (r, s, i, o) => Lf(this, r, s, i, o));
    this.domObserver.start();
    tf(this);
    this.updatePluginViews();
  }
  get composing() {
    return this.input.composing;
  }
  get props() {
    if (this._props.state != this.state) {
      let e = this._props;
      this._props = {};
      for (let t in e) {
        this._props[t] = e[t];
      }
      this._props.state = this.state;
    }
    return this._props;
  }
  update(e) {
    if (e.handleDOMEvents != this._props.handleDOMEvents) {
      Ns(this);
    }
    let _props = this._props;
    this._props = e;
    if (e.plugins) {
      e.plugins.forEach(Oo);
      this.directPlugins = e.plugins;
    }
    this.updateStateInner(e.state, _props);
  }
  setProps(e) {
    let t = {};
    for (let r in this._props) {
      t[r] = this._props[r];
    }
    t.state = this.state;
    for (let r in e) {
      t[r] = e[r];
    }
    this.update(t);
  }
  updateState(e) {
    this.updateStateInner(e, this._props);
  }
  updateStateInner(e, t) {
    let r;
    let state = this.state;
    let i = false;
    let o = false;
    if (e.storedMarks && this.composing) {
      Ta(this);
      o = true;
    }
    this.state = e;
    let l = state.plugins != e.plugins || this._props.plugins != t.plugins;
    if (l || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
      let h = No(this);
      if (Hf(h, this.nodeViews)) {
        this.nodeViews = h;
        i = true;
      }
    }
    if (l || t.handleDOMEvents != this._props.handleDOMEvents) {
      Ns(this);
    }
    this.editable = Ao(this);
    To(this);
    let a = Qr(this);
    let c = vo(this);
    let u = state.plugins != e.plugins && !state.doc.eq(e.doc) ? "reset" : e.scrollToSelection > state.scrollToSelection ? "to selection" : "preserve";
    let d = i || !this.docView.matchesNode(e.doc, c, a);
    if (d || !e.selection.eq(state.selection)) {
      o = true;
    }
    let f = u == "preserve" && o && this.dom.style.overflowAnchor == null && md(this);
    if (o) {
      this.domObserver.stop();
      let h = d && (le || U) && !this.composing && !state.selection.empty && !e.selection.empty && Ff(state.selection, e.selection);
      if (d) {
        let p = U ? this.trackWrites = this.domSelectionRange().focusNode : null;
        if (this.composing) {
          this.input.compositionNode = gf(this);
        }
        if (i || !this.docView.update(e.doc, c, a, this)) {
          this.docView.updateOuterDeco(c);
          this.docView.destroy();
          this.docView = io(e.doc, c, a, this.dom, this);
        }
        if (p && !this.trackWrites) {
          h = true;
        }
      }
      if (h || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && Fd(this))) {
        ze(this, h);
      } else {
        ma(this, e.selection);
        this.domObserver.setCurSelection();
      }
      this.domObserver.start();
    }
    this.updatePluginViews(state);
    if (!((r = this.dragging) === null || r === undefined) && r.node && !state.doc.eq(e.doc)) {
      this.updateDraggedNode(this.dragging, state);
    }
    if (u == "reset") {
      this.dom.scrollTop = 0;
    } else if (u == "to selection") {
      this.scrollToSelection();
    } else if (f) {
      gd(f);
    }
  }
  scrollToSelection() {
    let focusNode = this.domSelectionRange().focusNode;
    if (!(!focusNode || !this.dom.contains(focusNode.nodeType == 1 ? focusNode : focusNode.parentNode))) {
      if (!this.someProp("handleScrollToSelection", t => t(this))) {
        if (this.state.selection instanceof C) {
          let t = this.docView.domAfterPos(this.state.selection.from);
          if (t.nodeType == 1) {
            Zi(this, t.getBoundingClientRect(), focusNode);
          }
        } else {
          Zi(this, this.coordsAtPos(this.state.selection.head, 1), focusNode);
        }
      }
    }
  }
  destroyPluginViews() {
    let e;
    while (e = this.pluginViews.pop()) {
      if (e.destroy) {
        e.destroy();
      }
    }
  }
  updatePluginViews(e) {
    if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
      this.prevDirectPlugins = this.directPlugins;
      this.destroyPluginViews();
      for (let t = 0; t < this.directPlugins.length; t++) {
        let directPlugin = this.directPlugins[t];
        if (directPlugin.spec.view) {
          this.pluginViews.push(directPlugin.spec.view(this));
        }
      }
      for (let t = 0; t < this.state.plugins.length; t++) {
        let plugin = this.state.plugins[t];
        if (plugin.spec.view) {
          this.pluginViews.push(plugin.spec.view(this));
        }
      }
    } else {
      for (let t = 0; t < this.pluginViews.length; t++) {
        let pluginView = this.pluginViews[t];
        if (pluginView.update) {
          pluginView.update(this, e);
        }
      }
    }
  }
  updateDraggedNode(e, t) {
    let e_node = e.node;
    let s = -1;
    if (this.state.doc.nodeAt(e_node.from) == e_node.node) {
      s = e_node.from;
    } else {
      let i = e_node.from + (this.state.doc.content.size - t.doc.content.size);
      if ((i > 0 && this.state.doc.nodeAt(i)) == e_node.node) {
        s = i;
      }
    }
    this.dragging = new Na(e.slice, e.move, s < 0 ? undefined : C.create(this.state.doc, s));
  }
  someProp(e, t) {
    let r = this._props && this._props[e];
    let s;
    if (r != null && (s = t ? t(r) : r)) {
      return s;
    }
    for (let o = 0; o < this.directPlugins.length; o++) {
      let l = this.directPlugins[o].props[e];
      if (l != null && (s = t ? t(l) : l)) {
        return s;
      }
    }
    let plugins = this.state.plugins;
    if (plugins) {
      for (let o = 0; o < plugins.length; o++) {
        let l = plugins[o].props[e];
        if (l != null && (s = t ? t(l) : l)) {
          return s;
        }
      }
    }
  }
  hasFocus() {
    if (le) {
      let e = this.root.activeElement;
      if (e == this.dom) {
        return true;
      }
      if (!e || !this.dom.contains(e)) {
        return false;
      }
      while (e && this.dom != e && this.dom.contains(e)) {
        if (e.contentEditable == "false") {
          return false;
        }
        e = e.parentElement;
      }
      return true;
    }
    return this.root.activeElement == this.dom;
  }
  focus() {
    this.domObserver.stop();
    if (this.editable) {
      yd(this.dom);
    }
    ze(this);
    this.domObserver.start();
  }
  get root() {
    let _root = this._root;
    if (_root == null) {
      for (let t = this.dom.parentNode; t; t = t.parentNode) {
        if (t.nodeType == 9 || t.nodeType == 11 && t.host) {
          if (!t.getSelection) {
            Object.getPrototypeOf(t).getSelection = () => t.ownerDocument.getSelection();
          }
          return this._root = t;
        }
      }
    }
    return _root || document;
  }
  updateRoot() {
    this._root = null;
  }
  posAtCoords(e) {
    return wd(this, e);
  }
  coordsAtPos(e, t = 1) {
    return la(this, e, t);
  }
  domAtPos(e, t = 0) {
    return this.docView.domFromPos(e, t);
  }
  nodeDOM(e) {
    let t = this.docView.descAt(e);
    if (t) {
      return t.nodeDOM;
    }
    return null;
  }
  posAtDOM(e, t, r = -1) {
    let s = this.docView.posFromDOM(e, t, r);
    if (s == null) {
      throw new RangeError("DOM position not inside the editor");
    }
    return s;
  }
  endOfTextblock(e, t) {
    return Td(this, t || this.state, e);
  }
  pasteHTML(e, t) {
    return fn(this, "", e, false, t || new ClipboardEvent("paste"));
  }
  pasteText(e, t) {
    return fn(this, e, null, true, t || new ClipboardEvent("paste"));
  }
  serializeForClipboard(e) {
    return ni(this, e);
  }
  destroy() {
    if (this.docView) {
      nf(this);
      this.destroyPluginViews();
      if (this.mounted) {
        this.docView.update(this.state.doc, [], Qr(this), this);
        this.dom.textContent = "";
      } else if (this.dom.parentNode) {
        this.dom.parentNode.removeChild(this.dom);
      }
      this.docView.destroy();
      this.docView = null;
      id();
    }
  }
  get isDestroyed() {
    return this.docView == null;
  }
  dispatchEvent(e) {
    return sf(this, e);
  }
  domSelectionRange() {
    let e = this.domSelection();
    if (e) {
      return ee && this.root.nodeType === 11 && ud(this.dom.ownerDocument) == this.dom && Of(this, e) || e;
    }
    return {
      focusNode: null,
      focusOffset: 0,
      anchorNode: null,
      anchorOffset: 0
    };
  }
  domSelection() {
    return this.root.getSelection();
  }
}
Pa.prototype.dispatch = function (n) {
  let dispatchTransaction = this._props.dispatchTransaction;
  if (dispatchTransaction) {
    dispatchTransaction.call(this, n);
  } else {
    this.updateState(this.state.apply(n));
  }
};
function vo(n) {
  let e = Object.create(null);
  e.class = "ProseMirror";
  e.contenteditable = String(n.editable);
  n.someProp("attributes", t => {
    if (typeof t === "function") {
      t = t(n.state);
    }
    if (t) {
      for (let r in t) {
        if (r == "class") {
          e.class += ` ${t[r]}`;
        } else if (r == "style") {
          e.style = (e.style ? `${e.style};` : "") + t[r];
        } else if (!e[r] && r != "contenteditable" && r != "nodeName") {
          e[r] = String(t[r]);
        }
      }
    }
  });
  if (!e.translate) {
    e.translate = "no";
  }
  return [ne.node(0, n.state.doc.content.size, e)];
}
function To(n) {
  if (n.markCursor) {
    let e = document.createElement("img");
    e.className = "ProseMirror-separator";
    e.setAttribute("mark-placeholder", "true");
    e.setAttribute("alt", "");
    n.cursorWrapper = {
      dom: e,
      deco: ne.widget(n.state.selection.from, e, {
        raw: true,
        marks: n.markCursor
      })
    };
  } else {
    n.cursorWrapper = null;
  }
}
function Ao(n) {
  return !n.someProp("editable", e => e(n.state) === false);
}
function Ff(selection, e) {
  let t = Math.min(selection.$anchor.sharedDepth(selection.head), e.$anchor.sharedDepth(e.head));
  return selection.$anchor.start(t) != e.$anchor.start(t);
}
function No(n) {
  let e = Object.create(null);
  function t(r) {
    for (let s in r) {
      if (!Object.prototype.hasOwnProperty.call(e, s)) {
        e[s] = r[s];
      }
    }
  }
  n.someProp("nodeViews", t);
  n.someProp("markViews", t);
  return e;
}
function Hf(n, nodeViews) {
  let t = 0;
  let r = 0;
  for (let s in n) {
    if (n[s] != nodeViews[s]) {
      return true;
    }
    t++;
  }
  for (let s in nodeViews) {
    r++;
  }
  return t != r;
}
function Oo(n) {
  if (n.spec.state || n.spec.filterTransaction || n.spec.appendTransaction) {
    throw new RangeError("Plugins passed directly to the view must not have a state component");
  }
}
const Qe = {
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
};
const Un = {
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
};
const Vf = typeof navigator !== "undefined" && /Mac/.test(navigator.platform);
const jf = typeof navigator !== "undefined" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var Q = 0; Q < 10; Q++) {
  Qe[48 + Q] = Qe[96 + Q] = String(Q);
}
for (var Q = 1; Q <= 24; Q++) {
  Qe[Q + 111] = `F${Q}`;
}
for (var Q = 65; Q <= 90; Q++) {
  Qe[Q] = String.fromCharCode(Q + 32);
  Un[Q] = String.fromCharCode(Q);
}
for (const es in Qe) {
  if (!Un.hasOwnProperty(es)) {
    Un[es] = Qe[es];
  }
}
function _f(n) {
  const e = Vf && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || jf && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified";
  let t = !e && n.key || (n.shiftKey ? Un : Qe)[n.keyCode] || n.key || "Unidentified";
  if (t == "Esc") {
    t = "Escape";
  }
  if (t == "Del") {
    t = "Delete";
  }
  if (t == "Left") {
    t = "ArrowLeft";
  }
  if (t == "Up") {
    t = "ArrowUp";
  }
  if (t == "Right") {
    t = "ArrowRight";
  }
  if (t == "Down") {
    t = "ArrowDown";
  }
  return t;
}
const Wf = typeof navigator !== "undefined" && /Mac|iP(hone|[oa]d)/.test(navigator.platform);
const qf = typeof navigator !== "undefined" && /Win/.test(navigator.platform);
function Kf(n) {
  let e = n.split(/-(?!$)/);
  let t = e[e.length - 1];
  if (t == "Space") {
    t = " ";
  }
  let r;
  let s;
  let i;
  let o;
  for (let l = 0; l < e.length - 1; l++) {
    let a = e[l];
    if (/^(cmd|meta|m)$/i.test(a)) {
      o = true;
    } else if (/^a(lt)?$/i.test(a)) {
      r = true;
    } else if (/^(c|ctrl|control)$/i.test(a)) {
      s = true;
    } else if (/^s(hift)?$/i.test(a)) {
      i = true;
    } else if (/^mod$/i.test(a)) {
      if (Wf) {
        o = true;
      } else {
        s = true;
      }
    } else {
      throw new Error(`Unrecognized modifier name: ${a}`);
    }
  }
  if (r) {
    t = `Alt-${t}`;
  }
  if (s) {
    t = `Ctrl-${t}`;
  }
  if (o) {
    t = `Meta-${t}`;
  }
  if (i) {
    t = `Shift-${t}`;
  }
  return t;
}
function Uf(n) {
  let e = Object.create(null);
  for (let t in n) {
    e[Kf(t)] = n[t];
  }
  return e;
}
function ts(n, e, t = true) {
  if (e.altKey) {
    n = `Alt-${n}`;
  }
  if (e.ctrlKey) {
    n = `Ctrl-${n}`;
  }
  if (e.metaKey) {
    n = `Meta-${n}`;
  }
  if (t && e.shiftKey) {
    n = `Shift-${n}`;
  }
  return n;
}
function Jf(n) {
  return new $({
    props: {
      handleKeyDown: La(n)
    }
  });
}
function La(n) {
  let e = Uf(n);
  return (t, r) => {
    let s = _f(r);
    let i;
    let o = e[ts(s, r)];
    if (o && o(t.state, t.dispatch, t)) {
      return true;
    }
    if (s.length == 1 && s != " ") {
      if (r.shiftKey) {
        let l = e[ts(s, r, false)];
        if (l && l(t.state, t.dispatch, t)) {
          return true;
        }
      }
      if ((r.altKey || r.metaKey || r.ctrlKey) && !(qf && r.ctrlKey && r.altKey) && (i = Qe[r.keyCode]) && i != s) {
        let l = e[ts(i, r)];
        if (l && l(t.state, t.dispatch, t)) {
          return true;
        }
      }
    }
    return false;
  };
}
const ai = (n, e) => {
  for (var t in e) {
    Object.defineProperty(n, t, {
      get: e[t],
      enumerable: true
    });
  }
};
class Rr {
  constructor(n) {
    this.editor = n.editor;
    this.rawCommands = this.editor.extensionManager.commands;
    this.customState = n.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const {
      rawCommands,
      editor,
      state
    } = this;
    const {
      view
    } = editor;
    const {
      tr
    } = state;
    const i = this.buildProps(tr);
    return Object.fromEntries(Object.entries(rawCommands).map(([o, l]) => [o, (...c) => {
      const u = l(...c)(i);
      if (!tr.getMeta("preventDispatch") && !this.hasCustomState) {
        view.dispatch(tr);
      }
      return u;
    }]));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(n, e = true) {
    const {
      rawCommands,
      editor,
      state
    } = this;
    const {
      view
    } = editor;
    const o = [];
    const l = !!n;
    const a = n || state.tr;
    const run = () => {
      if (!l && e && !a.getMeta("preventDispatch") && !this.hasCustomState) {
        view.dispatch(a);
      }
      return o.every(d => d === true);
    };
    const u = {
      ...Object.fromEntries(Object.entries(rawCommands).map(([d, f]) => [d, (...p) => {
        const m = this.buildProps(a, e);
        const g = f(...p)(m);
        o.push(g);
        return u;
      }])),
      run
    };
    return u;
  }
  createCan(n) {
    const {
      rawCommands,
      state
    } = this;
    const r = false;
    const s = n || state.tr;
    const i = this.buildProps(s, r);
    return {
      ...Object.fromEntries(Object.entries(rawCommands).map(([l, a]) => [l, (...c) => a(...c)({
        ...i,
        dispatch: undefined
      })])),
      chain: () => this.createChain(s, r)
    };
  }
  buildProps(n, e = true) {
    const {
      rawCommands,
      editor,
      state
    } = this;
    const {
      view
    } = editor;
    const o = {
      tr: n,
      editor,
      view,
      state: Ir({
        state,
        transaction: n
      }),
      dispatch: e ? () => {} : undefined,
      chain: () => this.createChain(n, e),
      can: () => this.createCan(n),
      get commands() {
        return Object.fromEntries(Object.entries(rawCommands).map(([l, a]) => [l, (...c) => a(...c)(o)]));
      }
    };
    return o;
  }
}
const za = {};
ai(za, {
  blur: () => Yf,
  clearContent: () => Xf,
  clearNodes: () => Qf,
  command: () => Zf,
  createParagraphNear: () => eh,
  cut: () => th,
  deleteCurrentNode: () => nh,
  deleteNode: () => rh,
  deleteRange: () => sh,
  deleteSelection: () => ih,
  enter: () => oh,
  exitCode: () => lh,
  extendMarkRange: () => ah,
  first: () => ch,
  focus: () => uh,
  forEach: () => dh,
  insertContent: () => fh,
  insertContentAt: () => mh,
  joinBackward: () => kh,
  joinDown: () => yh,
  joinForward: () => bh,
  joinItemBackward: () => xh,
  joinItemForward: () => Sh,
  joinTextblockBackward: () => wh,
  joinTextblockForward: () => Ch,
  joinUp: () => gh,
  keyboardShortcut: () => Eh,
  lift: () => vh,
  liftEmptyBlock: () => Th,
  liftListItem: () => Ah,
  newlineInCode: () => Nh,
  resetAttributes: () => Oh,
  scrollIntoView: () => Dh,
  selectAll: () => Ih,
  selectNodeBackward: () => Rh,
  selectNodeForward: () => Ph,
  selectParentNode: () => Lh,
  selectTextblockEnd: () => zh,
  selectTextblockStart: () => Bh,
  setContent: () => $h,
  setMark: () => sp,
  setMeta: () => ip,
  setNode: () => op,
  setNodeSelection: () => lp,
  setTextDirection: () => ap,
  setTextSelection: () => cp,
  sinkListItem: () => up,
  splitBlock: () => dp,
  splitListItem: () => fp,
  toggleList: () => hp,
  toggleMark: () => pp,
  toggleNode: () => mp,
  toggleWrap: () => gp,
  undoInputRule: () => yp,
  unsetAllMarks: () => kp,
  unsetMark: () => bp,
  unsetTextDirection: () => xp,
  updateAttributes: () => Sp,
  wrapIn: () => wp,
  wrapInList: () => Cp
});
var Yf = () => ({
  editor,
  view
}) => {
  requestAnimationFrame(() => {
    var t;
    if (!editor.isDestroyed) {
      view.dom.blur();
      if (!((t = window?.getSelection()) == null)) {
        t.removeAllRanges();
      }
    }
  });
  return true;
};
var Xf = (emitUpdate = true) => ({
  commands
}) => commands.setContent("", {
  emitUpdate
});
var Qf = () => ({
  state,
  tr,
  dispatch
}) => {
  const {
    selection
  } = tr;
  const {
    ranges
  } = selection;
  if (dispatch) {
    ranges.forEach(({
      $from,
      $to
    }) => {
      state.doc.nodesBetween($from.pos, $to.pos, (l, a) => {
        if (l.type.isText) {
          return;
        }
        const {
          doc,
          mapping
        } = tr;
        const d = doc.resolve(mapping.map(a));
        const f = doc.resolve(mapping.map(a + l.nodeSize));
        const h = d.blockRange(f);
        if (!h) {
          return;
        }
        const p = Ht(h);
        if (l.type.isTextblock) {
          const {
            defaultType
          } = d.parent.contentMatchAt(d.index());
          tr.setNodeMarkup(h.start, defaultType);
        }
        if (p || p === 0) {
          tr.lift(h, p);
        }
      });
    });
  }
  return true;
};
var Zf = n => e => n(e);
var eh = () => ({
  state,
  dispatch
}) => Yl(state, dispatch);
var th = (n, e) => ({
  editor,
  tr
}) => {
  const {
    state
  } = editor;
  const i = state.doc.slice(n.from, n.to);
  tr.deleteRange(n.from, n.to);
  const o = tr.mapping.map(e);
  tr.insert(o, i.content);
  tr.setSelection(new N(tr.doc.resolve(Math.max(o - 1, 0))));
  return true;
};
var nh = () => ({
  tr,
  dispatch
}) => {
  const {
    selection
  } = tr;
  const r = selection.$anchor.node();
  if (r.content.size > 0) {
    return false;
  }
  const $anchor = tr.selection.$anchor;
  for (let i = $anchor.depth; i > 0; i -= 1) {
    if ($anchor.node(i).type === r.type) {
      if (dispatch) {
        const l = $anchor.before(i);
        const a = $anchor.after(i);
        tr.delete(l, a).scrollIntoView();
      }
      return true;
    }
  }
  return false;
};
var rh = n => ({
  tr,
  state,
  dispatch
}) => {
  const s = _(n, state.schema);
  const $anchor = tr.selection.$anchor;
  for (let o = $anchor.depth; o > 0; o -= 1) {
    if ($anchor.node(o).type === s) {
      if (dispatch) {
        const a = $anchor.before(o);
        const c = $anchor.after(o);
        tr.delete(a, c).scrollIntoView();
      }
      return true;
    }
  }
  return false;
};
var sh = n => ({
  tr,
  dispatch
}) => {
  const {
    from,
    to
  } = n;
  if (dispatch) {
    tr.delete(from, to);
  }
  return true;
};
var ih = () => ({
  state,
  dispatch
}) => Js(state, dispatch);
var oh = () => ({
  commands
}) => commands.keyboardShortcut("Enter");
var lh = () => ({
  state,
  dispatch
}) => Wu(state, dispatch);
var ah = (n, e = {}) => ({
  tr,
  state,
  dispatch
}) => {
  const i = Be(n, state.schema);
  const {
    doc,
    selection
  } = tr;
  const {
    $from,
    from,
    to
  } = selection;
  if (dispatch) {
    const d = ui($from, i, e);
    if (d && d.from <= from && d.to >= to) {
      const f = N.create(doc, d.from, d.to);
      tr.setSelection(f);
    }
  }
  return true;
};
var ch = n => e => {
  const t = typeof n === "function" ? n(e) : n;
  for (let r = 0; r < t.length; r += 1) {
    if (t[r](e)) {
      return true;
    }
  }
  return false;
};
var uh = (n = null, e = {}) => ({
  editor,
  view,
  tr,
  dispatch
}) => {
  e = {
    scrollIntoView: true,
    ...e
  };
  const o = () => {
    if (Pr() || Ha()) {
      view.dom.focus();
    }
    requestAnimationFrame(() => {
      if (!editor.isDestroyed) {
        view.focus();
        if (e?.scrollIntoView) {
          editor.commands.scrollIntoView();
        }
      }
    });
  };
  if (view.hasFocus() && n === null || n === false) {
    return true;
  }
  if (dispatch && n === null && !$a(editor.state.selection)) {
    o();
    return true;
  }
  const l = Fa(tr.doc, n) || editor.state.selection;
  const a = editor.state.selection.eq(l);
  if (dispatch) {
    if (!a) {
      tr.setSelection(l);
    }
    if (a && tr.storedMarks) {
      tr.setStoredMarks(tr.storedMarks);
    }
    o();
  }
  return true;
};
var dh = (n, e) => t => n.every((r, s) => e(r, {
  ...t,
  index: s
}));
var fh = (n, e) => ({
  tr,
  commands
}) => commands.insertContentAt({
  from: tr.selection.from,
  to: tr.selection.to
}, n, e);
function hh(n, e, t) {
  const r = n.steps.length - 1;
  if (r < e) {
    return;
  }
  const s = n.steps[r];
  if (!(s instanceof K || s instanceof J)) {
    return;
  }
  const i = n.mapping.maps[r];
  let o = 0;
  i.forEach((l, a, c, u) => {
    if (o === 0) {
      o = u;
    }
  });
  n.setSelection(O.near(n.doc.resolve(o), t));
}
const ph = n => !("type" in n);
var mh = (n, e, t) => ({
  tr,
  dispatch,
  editor
}) => {
  if (dispatch) {
    t = {
      parseOptions: editor.options.parseOptions,
      updateSelection: true,
      applyInputRules: false,
      applyPasteRules: false,
      ...t
    };
    let l;
    const a = error => {
      editor.emit("contentError", {
        editor,
        error,
        disableCollaboration: () => {
          if ("collaboration" in editor.storage && typeof editor.storage.collaboration === "object" && editor.storage.collaboration) {
            editor.storage.collaboration.isDisabled = true;
          }
        }
      });
    };
    const parseOptions = {
      preserveWhitespace: "full",
      ...t.parseOptions
    };
    if (!t.errorOnInvalidContent && !editor.options.enableContentCheck && editor.options.emitContentError) {
      try {
        pn(e, editor.schema, {
          parseOptions,
          errorOnInvalidContent: true
        });
      } catch (error) {
        a(error);
      }
    }
    try {
      l = pn(e, editor.schema, {
        parseOptions,
        errorOnInvalidContent: t.errorOnInvalidContent ?? editor.options.enableContentCheck
      });
    } catch (error) {
      a(error);
      return false;
    }
    let {
      from,
      to
    } = typeof n === "number" ? {
      from: n,
      to: n
    } : {
      from: n.from,
      to: n.to
    };
    let f = true;
    let h = true;
    (ph(l) ? l : [l]).forEach(g => {
      g.check();
      f = f ? g.isText && g.marks.length === 0 : false;
      h = h ? g.isBlock : false;
    });
    if (from === to && h) {
      const {
        parent
      } = tr.doc.resolve(from);
      if (parent.isTextblock && !parent.type.spec.code && !parent.childCount) {
        from -= 1;
        to += 1;
      }
    }
    let m;
    if (f) {
      if (Array.isArray(e)) {
        m = e.map(g => g.text || "").join("");
      } else if (e instanceof k) {
        let g = "";
        e.forEach(y => {
          if (y.text) {
            g += y.text;
          }
        });
        m = g;
      } else {
        if (typeof e === "object" && e && e.text) {
          m = e.text;
        } else {
          m = e;
        }
      }
      tr.insertText(m, from, to);
    } else {
      m = l;
      const g = tr.doc.resolve(from);
      const y = g.node();
      const b = g.parentOffset === 0;
      const C = y.isText || y.isTextblock;
      const M = y.content.size > 0;
      if (b && C && M) {
        from = Math.max(0, from - 1);
      }
      tr.replaceWith(from, to, m);
    }
    if (t.updateSelection) {
      hh(tr, tr.steps.length - 1, -1);
    }
    if (t.applyInputRules) {
      tr.setMeta("applyInputRules", {
        from,
        text: m
      });
    }
    if (t.applyPasteRules) {
      tr.setMeta("applyPasteRules", {
        from,
        text: m
      });
    }
  }
  return true;
};
var gh = () => ({
  state,
  dispatch
}) => Vu(state, dispatch);
var yh = () => ({
  state,
  dispatch
}) => ju(state, dispatch);
var kh = () => ({
  state,
  dispatch
}) => _l(state, dispatch);
var bh = () => ({
  state,
  dispatch
}) => Ul(state, dispatch);
var xh = () => ({
  state,
  dispatch,
  tr
}) => {
  try {
    const r = vr(state.doc, state.selection.$from.pos, -1);
    if (r == null) {
      return false;
    }
    tr.join(r, 2);
    if (dispatch) {
      dispatch(tr);
    }
    return true;
  } catch {
    return false;
  }
};
var Sh = () => ({
  state,
  dispatch,
  tr
}) => {
  try {
    const r = vr(state.doc, state.selection.$from.pos, 1);
    if (r == null) {
      return false;
    }
    tr.join(r, 2);
    if (dispatch) {
      dispatch(tr);
    }
    return true;
  } catch {
    return false;
  }
};
var wh = () => ({
  state,
  dispatch
}) => Fu(state, dispatch);
var Ch = () => ({
  state,
  dispatch
}) => Hu(state, dispatch);
function Mh(n) {
  const e = n.split(/-(?!$)/);
  let t = e[e.length - 1];
  if (t === "Space") {
    t = " ";
  }
  let r;
  let s;
  let i;
  let o;
  for (let l = 0; l < e.length - 1; l += 1) {
    const a = e[l];
    if (/^(cmd|meta|m)$/i.test(a)) {
      o = true;
    } else if (/^a(lt)?$/i.test(a)) {
      r = true;
    } else if (/^(c|ctrl|control)$/i.test(a)) {
      s = true;
    } else if (/^s(hift)?$/i.test(a)) {
      i = true;
    } else if (/^mod$/i.test(a)) {
      if (Pr() || ja()) {
        o = true;
      } else {
        s = true;
      }
    } else {
      throw new Error(`Unrecognized modifier name: ${a}`);
    }
  }
  if (r) {
    t = `Alt-${t}`;
  }
  if (s) {
    t = `Ctrl-${t}`;
  }
  if (o) {
    t = `Meta-${t}`;
  }
  if (i) {
    t = `Shift-${t}`;
  }
  return t;
}
var Eh = n => ({
  editor,
  view,
  tr,
  dispatch
}) => {
  const i = Mh(n).split(/-(?!$)/);
  const o = i.find(c => !["Alt", "Ctrl", "Meta", "Shift"].includes(c));
  const l = new KeyboardEvent("keydown", {
    key: o === "Space" ? " " : o,
    altKey: i.includes("Alt"),
    ctrlKey: i.includes("Ctrl"),
    metaKey: i.includes("Meta"),
    shiftKey: i.includes("Shift"),
    bubbles: true,
    cancelable: true
  });
  const a = editor.captureTransaction(() => {
    view.someProp("handleKeyDown", c => c(view, l));
  });
  a?.steps.forEach(c => {
    const u = c.map(tr.mapping);
    if (u && dispatch) {
      tr.maybeStep(u);
    }
  });
  return true;
};
var vh = (n, e = {}) => ({
  state,
  dispatch
}) => {
  const s = _(n, state.schema);
  if (Ze(state, s, e)) {
    return _u(state, dispatch);
  }
  return false;
};
var Th = () => ({
  state,
  dispatch
}) => Xl(state, dispatch);
var Ah = n => ({
  state,
  dispatch
}) => {
  const r = _(n, state.schema);
  return td(r)(state, dispatch);
};
var Nh = () => ({
  state,
  dispatch
}) => Gl(state, dispatch);
function Io(attrs, e) {
  const t = typeof e === "string" ? [e] : e;
  return Object.keys(attrs).reduce((acc, key) => {
    if (!t.includes(key)) {
      acc[key] = attrs[key];
    }
    return acc;
  }, {});
}
var Oh = (n, e) => ({
  tr,
  state,
  dispatch
}) => {
  let i = null;
  let o = null;
  const l = Lr(typeof n === "string" ? n : n.name, state.schema);
  if (!l) {
    return false;
  }
  if (l === "node") {
    i = _(n, state.schema);
  }
  if (l === "mark") {
    o = Be(n, state.schema);
  }
  let a = false;
  tr.selection.ranges.forEach(c => {
    state.doc.nodesBetween(c.$from.pos, c.$to.pos, (u, d) => {
      if (i && i === u.type) {
        a = true;
        if (dispatch) {
          tr.setNodeMarkup(d, undefined, Io(u.attrs, e));
        }
      }
      if (o && u.marks.length) {
        u.marks.forEach(f => {
          if (o === f.type) {
            a = true;
            if (dispatch) {
              tr.addMark(d, d + u.nodeSize, o.create(Io(f.attrs, e)));
            }
          }
        });
      }
    });
  });
  return a;
};
var Dh = () => ({
  tr,
  dispatch
}) => {
  if (dispatch) {
    tr.scrollIntoView();
  }
  return true;
};
var Ih = () => ({
  tr,
  dispatch
}) => {
  if (dispatch) {
    const t = new ue(tr.doc);
    tr.setSelection(t);
  }
  return true;
};
var Rh = () => ({
  state,
  dispatch
}) => ql(state, dispatch);
var Ph = () => ({
  state,
  dispatch
}) => Jl(state, dispatch);
var Lh = () => ({
  state,
  dispatch
}) => Uu(state, dispatch);
var zh = () => ({
  state,
  dispatch
}) => Yu(state, dispatch);
var Bh = () => ({
  state,
  dispatch
}) => Gu(state, dispatch);
var $h = (n, {
  errorOnInvalidContent,
  emitUpdate = true,
  parseOptions = {}
} = {}) => ({
  editor,
  tr,
  dispatch,
  commands
}) => {
  const {
    doc
  } = tr;
  if (parseOptions.preserveWhitespace !== "full") {
    const c = Os(n, editor.schema, parseOptions, {
      errorOnInvalidContent: errorOnInvalidContent ?? editor.options.enableContentCheck
    });
    if (dispatch) {
      tr.replaceWith(0, doc.content.size, c).setMeta("preventUpdate", !emitUpdate);
    }
    return true;
  }
  if (dispatch) {
    tr.setMeta("preventUpdate", !emitUpdate);
  }
  return commands.insertContentAt({
    from: 0,
    to: doc.content.size
  }, n, {
    parseOptions,
    errorOnInvalidContent: errorOnInvalidContent ?? editor.options.enableContentCheck
  });
};
function Fh(n) {
  for (let e = 0; e < n.edgeCount; e += 1) {
    const {
      type
    } = n.edge(e);
    if (type.isTextblock && !type.hasRequiredAttrs()) {
      return type;
    }
  }
  return null;
}
function Hh(doc, newRange, t) {
  const r = [];
  doc.nodesBetween(newRange.from, newRange.to, (s, i) => {
    if (t(s)) {
      r.push({
        node: s,
        pos: i
      });
    }
  });
  return r;
}
function Vh(n, e) {
  for (let t = n.depth; t > 0; t -= 1) {
    const r = n.node(t);
    if (e(r)) {
      return {
        pos: t > 0 ? n.before(t) : 0,
        start: n.start(t),
        depth: t,
        node: r
      };
    }
  }
}
function zr(n) {
  return e => Vh(e.$from, n);
}
function T(n, e, t) {
  if (n.config[e] === undefined && n.parent) {
    return T(n.parent, e, t);
  }
  if (typeof n.config[e] === "function") {
    return n.config[e].bind({
      ...t,
      parent: n.parent ? T(n.parent, e, t) : null
    });
  }
  return n.config[e];
}
function di(n) {
  return n.map(e => {
    const t = {
      name: e.name,
      options: e.options,
      storage: e.storage
    };
    const r = T(e, "addExtensions", t);
    if (r) {
      return [e, ...di(r())];
    }
    return e;
  }).flat(10);
}
function jh(n = {}) {
  return Object.keys(n).length === 0 && n.constructor === Object;
}
function Ka(n) {
  const e = [];
  const {
    nodeExtensions,
    markExtensions
  } = Bt(n);
  const extensions = [...nodeExtensions, ...markExtensions];
  const i = {
    default: null,
    validate: undefined,
    rendered: true,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: true,
    isRequired: false
  };
  n.forEach(o => {
    const l = {
      name: o.name,
      options: o.options,
      storage: o.storage,
      extensions
    };
    const a = T(o, "addGlobalAttributes", l);
    if (!a) {
      return;
    }
    a().forEach(u => {
      u.types.forEach(type => {
        Object.entries(u.attributes).forEach(([f, h]) => {
          e.push({
            type,
            name: f,
            attribute: {
              ...i,
              ...h
            }
          });
        });
      });
    });
  });
  extensions.forEach(o => {
    const l = {
      name: o.name,
      options: o.options,
      storage: o.storage
    };
    const a = T(o, "addAttributes", l);
    if (!a) {
      return;
    }
    const c = a();
    Object.entries(c).forEach(([u, d]) => {
      const attribute = {
        ...i,
        ...d
      };
      if (typeof attribute?.default === "function") {
        attribute.default = attribute.default();
      }
      attribute?.isRequired && attribute?.default === undefined && delete attribute.default;
      e.push({
        type: o.name,
        name: u,
        attribute
      });
    });
  });
  return e;
}
export function m(...n) {
  return n.filter(e => !!e).reduce((acc, item) => {
    const r = {
      ...acc
    };
    Object.entries(item).forEach(([s, i]) => {
      if (!r[s]) {
        r[s] = i;
        return;
      }
      if (s === "class") {
        const l = i ? String(i).split(" ") : [];
        const a = r[s] ? r[s].split(" ") : [];
        const c = l.filter(u => !a.includes(u));
        r[s] = [...a, ...c].join(" ");
      } else if (s === "style") {
        const l = i ? i.split(";").map(u => u.trim()).filter(Boolean) : [];
        const a = r[s] ? r[s].split(";").map(u => u.trim()).filter(Boolean) : [];
        const c = new Map();
        a.forEach(u => {
          const [d, f] = u.split(":").map(h => h.trim());
          c.set(d, f);
        });
        l.forEach(u => {
          const [d, f] = u.split(":").map(h => h.trim());
          c.set(d, f);
        });
        r[s] = Array.from(c.entries()).map(([u, d]) => `${u}: ${d}`).join("; ");
      } else {
        r[s] = i;
      }
    });
    return r;
  }, {});
}
function Gn(n, e) {
  return e.filter(t => t.type === n.type.name).filter(t => t.attribute.rendered).map(t => {
    if (t.attribute.renderHTML) {
      return t.attribute.renderHTML(n.attrs) || {};
    }
    return {
      [t.name]: n.attrs[t.name]
    };
  }).reduce((acc, item) => m(acc, item), {});
}
function _h(n) {
  if (typeof n !== "string") {
    return n;
  }
  if (n.match(/^[+-]?(?:\d*\.)?\d+$/)) {
    return Number(n);
  }
  if (n === "true") {
    return true;
  }
  if (n === "false") {
    return false;
  }
  return n;
}
function Ro(n, e) {
  if ("style" in n) {
    return n;
  }
  return {
    ...n,
    getAttrs: t => {
      const r = n.getAttrs ? n.getAttrs(t) : n.attrs;
      if (r === false) {
        return false;
      }
      const s = e.reduce((acc, item) => {
        const l = item.attribute.parseHTML ? item.attribute.parseHTML(t) : _h(t.getAttribute(item.name));
        if (l == null) {
          return acc;
        }
        return {
          ...acc,
          [item.name]: l
        };
      }, {});
      return {
        ...r,
        ...s
      };
    }
  };
}
function Po(n) {
  return Object.fromEntries(Object.entries(n).filter(([e, t]) => {
    if (e === "attrs" && jh(t)) {
      return false;
    }
    return t != null;
  }));
}
function Lo(n) {
  let e;
  const r = {};
  if (!((e = n?.attribute) != null && e.isRequired) && "default" in (n?.attribute || {})) {
    r.default = n.attribute.default;
  }
  if (n?.attribute?.validate !== undefined) {
    r.validate = n.attribute.validate;
  }
  return [n.name, r];
}
function Ua(n, editor) {
  const r = Ka(n);
  const {
    nodeExtensions,
    markExtensions
  } = Bt(n);
  const topNode = nodeExtensions.find(c => T(c, "topNode"))?.name;
  const nodes = Object.fromEntries(nodeExtensions.map(c => {
    const u = r.filter(y => y.type === c.name);
    const d = {
      name: c.name,
      options: c.options,
      storage: c.storage,
      editor
    };
    const f = n.reduce((acc, item) => {
      const C = T(item, "extendNodeSchema", d);
      return {
        ...acc,
        ...(C ? C(c) : {})
      };
    }, {});
    const h = Po({
      ...f,
      content: P(T(c, "content", d)),
      marks: P(T(c, "marks", d)),
      group: P(T(c, "group", d)),
      inline: P(T(c, "inline", d)),
      atom: P(T(c, "atom", d)),
      selectable: P(T(c, "selectable", d)),
      draggable: P(T(c, "draggable", d)),
      code: P(T(c, "code", d)),
      whitespace: P(T(c, "whitespace", d)),
      linebreakReplacement: P(T(c, "linebreakReplacement", d)),
      defining: P(T(c, "defining", d)),
      isolating: P(T(c, "isolating", d)),
      attrs: Object.fromEntries(u.map(Lo))
    });
    const p = P(T(c, "parseHTML", d));
    if (p) {
      h.parseDOM = p.map(y => Ro(y, u));
    }
    const m = T(c, "renderHTML", d);
    if (m) {
      h.toDOM = y => m({
        node: y,
        HTMLAttributes: Gn(y, u)
      });
    }
    const g = T(c, "renderText", d);
    if (g) {
      h.toText = g;
    }
    return [c.name, h];
  }));
  const marks = Object.fromEntries(markExtensions.map(c => {
    const u = r.filter(g => g.type === c.name);
    const d = {
      name: c.name,
      options: c.options,
      storage: c.storage,
      editor
    };
    const f = n.reduce((acc, item) => {
      const b = T(item, "extendMarkSchema", d);
      return {
        ...acc,
        ...(b ? b(c) : {})
      };
    }, {});
    const h = Po({
      ...f,
      inclusive: P(T(c, "inclusive", d)),
      excludes: P(T(c, "excludes", d)),
      group: P(T(c, "group", d)),
      spanning: P(T(c, "spanning", d)),
      code: P(T(c, "code", d)),
      attrs: Object.fromEntries(u.map(Lo))
    });
    const p = P(T(c, "parseHTML", d));
    if (p) {
      h.parseDOM = p.map(g => Ro(g, u));
    }
    const m = T(c, "renderHTML", d);
    if (m) {
      h.toDOM = g => m({
        mark: g,
        HTMLAttributes: Gn(g, u)
      });
    }
    return [c.name, h];
  }));
  return new Cl({
    topNode,
    nodes,
    marks
  });
}
function Wh(n) {
  const e = n.filter((t, r) => n.indexOf(t) !== r);
  return Array.from(new Set(e));
}
function hi(n) {
  return n.sort((t, r) => {
    const s = T(t, "priority") || 100;
    const i = T(r, "priority") || 100;
    if (s > i) {
      return -1;
    }
    if (s < i) {
      return 1;
    }
    return 0;
  });
}
function pi(n) {
  const e = hi(di(n));
  const t = Wh(e.map(r => r.name));
  if (t.length) {
    console.warn(`[tiptap warn]: Duplicate extension names found: [${t.map(r => `'${r}'`).join(", ")}]. This can lead to issues.`);
  }
  return e;
}
function qh(n, e) {
  const t = pi(n);
  return Ua(t, e);
}
function ly(n, e) {
  const t = qh(e);
  const r = Jt(n);
  return Le.fromSchema(t).parse(r).toJSON();
}
const Yh = (n, e, t, r = 20) => {
  const s = n.doc.resolve(t);
  let i = r;
  let o = null;
  while (i > 0 && o === null) {
    const l = s.node(i);
    if (l?.type.name === e) {
      o = l;
    } else {
      i -= 1;
    }
  }
  return [o, i];
};
function ns(name, schema) {
  return schema.nodes[name] || schema.marks[name] || null;
}
function Pn(attributes, name, attrs) {
  return Object.fromEntries(Object.entries(attrs).filter(([r]) => {
    const s = attributes.find(i => i.type === name && i.name === r);
    if (s) {
      return s.attribute.keepOnSplit;
    }
    return false;
  }));
}
const Xh = (n, e = 500) => {
  let t = "";
  const n_parentOffset = n.parentOffset;
  n.parent.nodesBetween(Math.max(0, n_parentOffset - e), n_parentOffset, (s, i, parent, l) => {
    const u = s.type.spec.toText?.({
      node: s,
      pos: i,
      parent,
      index: l
    }) || s.textContent || "%leaf%";
    t += s.isAtom && !s.isText ? u : u.slice(0, Math.max(0, n_parentOffset - i));
  });
  return t;
};
const Zh = (state, e) => {
  const {
    $from,
    $to,
    $anchor
  } = state.selection;
  if (e) {
    const i = zr(l => l.type.name === e)(state.selection);
    if (!i) {
      return false;
    }
    const o = state.doc.resolve(i.pos + 1);
    return $anchor.pos + 1 === o.end();
  }
  return !($to.parentOffset < $to.parent.nodeSize - 2 || $from.pos !== $to.pos);
};
const ep = state => {
  const {
    $from,
    $to
  } = state.selection;
  return !($from.parentOffset > 0 || $from.pos !== $to.pos);
};
function zo(n, e) {
  if (Array.isArray(e)) {
    return e.some(t => (typeof t === "string" ? t : t.name) === n.name);
  }
  return e;
}
function Bo(name, extensions) {
  const {
    nodeExtensions
  } = Bt(extensions);
  const r = nodeExtensions.find(o => o.name === name);
  if (!r) {
    return false;
  }
  const s = {
    name: r.name,
    options: r.options,
    storage: r.storage
  };
  const i = P(T(r, "group", s));
  if (typeof i !== "string") {
    return false;
  }
  return i.split(" ").includes("list");
}
function Qa(selection) {
  return selection instanceof C;
}
const Za = class ec {
  constructor(e) {
    this.position = e;
  }
  static fromJSON(e) {
    return new ec(e.position);
  }
  toJSON() {
    return {
      position: this.position
    };
  }
};
function ay(n, e, t) {
  const size = n.state.doc.content.size;
  const i = Pe(e, 0, size);
  const o = Pe(t, 0, size);
  const l = n.coordsAtPos(i);
  const a = n.coordsAtPos(o, -1);
  const c = Math.min(l.top, a.top);
  const bottom = Math.max(l.bottom, a.bottom);
  const d = Math.min(l.left, a.left);
  const right = Math.max(l.right, a.right);
  const width = right - d;
  const height = bottom - c;
  const y = {
    top: c,
    bottom,
    left: d,
    right,
    width,
    height,
    x: d,
    y: c
  };
  return {
    ...y,
    toJSON: () => y
  };
}
function rp(state, {
  selection
}, t) {
  let i = null;
  if ($a(selection)) {
    i = selection.$cursor;
  }
  if (i) {
    const l = state.storedMarks ?? i.marks();
    return i.parent.type.allowsMarkType(t) && (!!t.isInSet(l) || !l.some(c => c.type.excludes(t)));
  }
  const {
    ranges
  } = selection;
  return ranges.some(({
    $from,
    $to
  }) => {
    let c = $from.depth === 0 ? state.doc.inlineContent && state.doc.type.allowsMarkType(t) : false;
    state.doc.nodesBetween($from.pos, $to.pos, (u, d, f) => {
      if (c) {
        return false;
      }
      if (u.isInline) {
        const h = !f || f.type.allowsMarkType(t);
        const p = !!t.isInSet(u.marks) || !u.marks.some(m => m.type.excludes(t));
        c = h && p;
      }
      return !c;
    });
    return c;
  });
}
var sp = (n, e = {}) => ({
  tr,
  state,
  dispatch
}) => {
  const {
    selection
  } = tr;
  const {
    empty,
    ranges
  } = selection;
  const a = Be(n, state.schema);
  if (dispatch) {
    if (empty) {
      const c = _a(state, a);
      tr.addStoredMark(a.create({
        ...c,
        ...e
      }));
    } else {
      ranges.forEach(c => {
        const pos = c.$from.pos;
        const pos_1 = c.$to.pos;
        state.doc.nodesBetween(pos, pos_1, (f, h) => {
          const p = Math.max(h, pos);
          const m = Math.min(h + f.nodeSize, pos_1);
          if (f.marks.find(y => y.type === a)) {
            f.marks.forEach(y => {
              if (a === y.type) {
                tr.addMark(p, m, a.create({
                  ...y.attrs,
                  ...e
                }));
              }
            });
          } else {
            tr.addMark(p, m, a.create(e));
          }
        });
      });
    }
  }
  return rp(state, tr, a);
};
var ip = (n, e) => ({
  tr
}) => {
  tr.setMeta(n, e);
  return true;
};
var op = (n, e = {}) => ({
  state,
  dispatch,
  chain
}) => {
  const i = _(n, state.schema);
  let o;
  if (state.selection.$anchor.sameParent(state.selection.$head)) {
    o = state.selection.$anchor.parent.attrs;
  }
  if (i.isTextblock) {
    return chain().command(({
      commands
    }) => {
      if (Yi(i, {
        ...o,
        ...e
      })(state)) {
        return true;
      }
      return commands.clearNodes();
    }).command(({
      state
    }) => Yi(i, {
      ...o,
      ...e
    })(state, dispatch)).run();
  }
  console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.');
  return false;
};
var lp = n => ({
  tr,
  dispatch
}) => {
  if (dispatch) {
    const {
      doc
    } = tr;
    const s = Pe(n, 0, doc.content.size);
    const i = C.create(doc, s);
    tr.setSelection(i);
  }
  return true;
};
var ap = (dir, e) => ({
  tr,
  state,
  dispatch
}) => {
  const {
    selection
  } = state;
  let o;
  let l;
  if (typeof e === "number") {
    o = e;
    l = e;
  } else if (e && "from" in e && "to" in e) {
    o = e.from;
    l = e.to;
  } else {
    o = selection.from;
    l = selection.to;
  }
  if (dispatch) {
    tr.doc.nodesBetween(o, l, (a, c) => {
      if (!a.isText) {
        tr.setNodeMarkup(c, undefined, {
          ...a.attrs,
          dir
        });
      }
    });
  }
  return true;
};
var cp = n => ({
  tr,
  dispatch
}) => {
  if (dispatch) {
    const {
      doc
    } = tr;
    const {
      from,
      to
    } = typeof n === "number" ? {
      from: n,
      to: n
    } : n;
    const o = N.atStart(doc).from;
    const l = N.atEnd(doc).to;
    const a = Pe(from, o, l);
    const c = Pe(to, o, l);
    const u = N.create(doc, a, c);
    tr.setSelection(u);
  }
  return true;
};
var up = n => ({
  state,
  dispatch
}) => {
  const r = _(n, state.schema);
  return sd(r)(state, dispatch);
};
function $o(state, splittableMarks) {
  const t = state.storedMarks || state.selection.$to.parentOffset && state.selection.$from.marks();
  if (t) {
    const r = t.filter(s => splittableMarks?.includes(s.type.name));
    state.tr.ensureMarks(r);
  }
}
var dp = ({
  keepMarks = true
} = {}) => ({
  tr,
  state,
  dispatch,
  editor
}) => {
  const {
    selection,
    doc
  } = tr;
  const {
    $from,
    $to
  } = selection;
  const attributes = editor.extensionManager.attributes;
  const u = Pn(attributes, $from.node().type.name, $from.node().attrs);
  if (selection instanceof C && selection.node.isBlock) {
    if (!$from.parentOffset || !Ee(doc, $from.pos)) {
      return false;
    }
    if (dispatch) {
      if (keepMarks) {
        $o(state, editor.extensionManager.splittableMarks);
      }
      tr.split($from.pos).scrollIntoView();
    }
    return true;
  }
  if (!$from.parent.isBlock) {
    return false;
  }
  const d = $to.parentOffset === $to.parent.content.size;
  const f = $from.depth === 0 ? undefined : Fh($from.node(-1).contentMatchAt($from.indexAfter(-1)));
  let h = d && f ? [{
    type: f,
    attrs: u
  }] : undefined;
  let p = Ee(tr.doc, tr.mapping.map($from.pos), 1, h);
  if (!h && !p && Ee(tr.doc, tr.mapping.map($from.pos), 1, f ? [{
    type: f
  }] : undefined)) {
    p = true;
    h = f ? [{
      type: f,
      attrs: u
    }] : undefined;
  }
  if (dispatch) {
    if (p && (selection instanceof N && tr.deleteSelection(), tr.split(tr.mapping.map($from.pos), 1, h), f && !d && !$from.parentOffset && $from.parent.type !== f)) {
      const m = tr.mapping.map($from.before());
      const g = tr.doc.resolve(m);
      if ($from.node(-1).canReplaceWith(g.index(), g.index() + 1, f)) {
        tr.setNodeMarkup(tr.mapping.map($from.before()), f);
      }
    }
    if (keepMarks) {
      $o(state, editor.extensionManager.splittableMarks);
    }
    tr.scrollIntoView();
  }
  return p;
};
var fp = (n, e = {}) => ({
  tr,
  state,
  dispatch,
  editor
}) => {
  const l = _(n, state.schema);
  const {
    $from,
    $to
  } = state.selection;
  const node = state.selection.node;
  if (node && node.isBlock || $from.depth < 2 || !$from.sameParent($to)) {
    return false;
  }
  const d = $from.node(-1);
  if (d.type !== l) {
    return false;
  }
  const attributes = editor.extensionManager.attributes;
  if ($from.parent.content.size === 0 && $from.node(-1).childCount === $from.indexAfter(-1)) {
    if ($from.depth === 2 || $from.node(-3).type !== l || $from.index(-2) !== $from.node(-2).childCount - 1) {
      return false;
    }
    if (dispatch) {
      let y = k.empty;
      const b = $from.index(-1) ? 1 : $from.index(-2) ? 2 : 3;
      for (let I = $from.depth - b; I >= $from.depth - 3; I -= 1) {
        y = k.from($from.node(I).copy(y));
      }
      const C = $from.indexAfter(-1) < $from.node(-2).childCount ? 1 : $from.indexAfter(-2) < $from.node(-3).childCount ? 2 : 3;
      const M = {
        ...Pn(attributes, $from.node().type.name, $from.node().attrs),
        ...e
      };
      const S = l.contentMatch.defaultType?.createAndFill(M) || undefined;
      y = y.append(k.from(l.createAndFill(null, S) || undefined));
      const A = $from.before($from.depth - (b - 1));
      tr.replace(A, $from.after(-C), new w(y, 4 - b, 0));
      let E = -1;
      tr.doc.nodesBetween(A, tr.doc.content.size, (I, R) => {
        if (E > -1) {
          return false;
        }
        if (I.isTextblock && I.content.size === 0) {
          E = R + 1;
        }
      });
      if (E > -1) {
        tr.setSelection(N.near(tr.doc.resolve(E)));
      }
      tr.scrollIntoView();
    }
    return true;
  }
  const h = $to.pos === $from.end() ? d.contentMatchAt(0).defaultType : null;
  const p = {
    ...Pn(attributes, d.type.name, d.attrs),
    ...e
  };
  const m = {
    ...Pn(attributes, $from.node().type.name, $from.node().attrs),
    ...e
  };
  tr.delete($from.pos, $to.pos);
  const g = h ? [{
    type: l,
    attrs: p
  }, {
    type: h,
    attrs: m
  }] : [{
    type: l,
    attrs: p
  }];
  if (!Ee(tr.doc, $from.pos, 2)) {
    return false;
  }
  if (dispatch) {
    const {
      selection,
      storedMarks
    } = state;
    const {
      splittableMarks
    } = editor.extensionManager;
    const M = storedMarks || selection.$to.parentOffset && selection.$from.marks();
    tr.split($from.pos, 2, g).scrollIntoView();
    if (!M || !dispatch) {
      return true;
    }
    const S = M.filter(A => splittableMarks.includes(A.type.name));
    tr.ensureMarks(S);
  }
  return true;
};
const rs = (n, e) => {
  const t = zr(o => o.type === e)(n.selection);
  if (!t) {
    return true;
  }
  const r = n.doc.resolve(Math.max(0, t.pos - 1)).before(t.depth);
  if (r === undefined) {
    return true;
  }
  const s = n.doc.nodeAt(r);
  if (t.node.type === s?.type && et(n.doc, t.pos)) {
    n.join(t.pos);
  }
  return true;
};
const ss = (n, e) => {
  const t = zr(o => o.type === e)(n.selection);
  if (!t) {
    return true;
  }
  const r = n.doc.resolve(t.start).after(t.depth);
  if (r === undefined) {
    return true;
  }
  const s = n.doc.nodeAt(r);
  if (t.node.type === s?.type && et(n.doc, r)) {
    n.join(r);
  }
  return true;
};
var hp = (n, e, t, r = {}) => ({
  editor,
  tr,
  state,
  dispatch,
  chain,
  commands,
  can
}) => {
  const {
    extensions,
    splittableMarks
  } = editor.extensionManager;
  const h = _(n, state.schema);
  const p = _(e, state.schema);
  const {
    selection,
    storedMarks
  } = state;
  const {
    $from,
    $to
  } = selection;
  const C = $from.blockRange($to);
  const M = storedMarks || selection.$to.parentOffset && selection.$from.marks();
  if (!C) {
    return false;
  }
  const S = zr(A => Bo(A.type.name, extensions))(selection);
  if (C.depth >= 1 && S && C.depth - S.depth <= 1) {
    if (S.node.type === h) {
      return commands.liftListItem(p);
    }
    if (Bo(S.node.type.name, extensions) && h.validContent(S.node.content) && dispatch) {
      return chain().command(() => {
        tr.setNodeMarkup(S.pos, h);
        return true;
      }).command(() => rs(tr, h)).command(() => ss(tr, h)).run();
    }
  }
  if (!t || !M || !dispatch) {
    return chain().command(() => {
      if (can().wrapInList(h, r)) {
        return true;
      }
      return commands.clearNodes();
    }).wrapInList(h, r).command(() => rs(tr, h)).command(() => ss(tr, h)).run();
  }
  return chain().command(() => {
    const A = can().wrapInList(h, r);
    const E = M.filter(I => splittableMarks.includes(I.type.name));
    tr.ensureMarks(E);
    if (A) {
      return true;
    }
    return commands.clearNodes();
  }).wrapInList(h, r).command(() => rs(tr, h)).command(() => ss(tr, h)).run();
};
var pp = (n, e = {}, t = {}) => ({
  state,
  commands
}) => {
  const {
    extendEmptyMarkRange = false
  } = t;
  const o = Be(n, state.schema);
  if (Ds(state, o, e)) {
    return commands.unsetMark(o, {
      extendEmptyMarkRange
    });
  }
  return commands.setMark(o, e);
};
var mp = (n, e, t = {}) => ({
  state,
  commands
}) => {
  const i = _(n, state.schema);
  const o = _(e, state.schema);
  const l = Ze(state, i, t);
  let a;
  if (state.selection.$anchor.sameParent(state.selection.$head)) {
    a = state.selection.$anchor.parent.attrs;
  }
  if (l) {
    return commands.setNode(o, a);
  }
  return commands.setNode(i, {
    ...a,
    ...t
  });
};
var gp = (n, e = {}) => ({
  state,
  commands
}) => {
  const s = _(n, state.schema);
  if (Ze(state, s, e)) {
    return commands.lift(s);
  }
  return commands.wrapIn(s, e);
};
var yp = () => ({
  state,
  dispatch
}) => {
  const state_plugins = state.plugins;
  for (let r = 0; r < state_plugins.length; r += 1) {
    const state_plugin = state_plugins[r];
    let i;
    if (state_plugin.spec.isInputRules && (i = state_plugin.getState(state))) {
      if (dispatch) {
        const o = state.tr;
        const l = i.transform;
        for (let a = l.steps.length - 1; a >= 0; a -= 1) {
          o.step(l.steps[a].invert(l.docs[a]));
        }
        if (i.text) {
          const a = o.doc.resolve(i.from).marks();
          o.replaceWith(i.from, i.to, state.schema.text(i.text, a));
        } else {
          o.delete(i.from, i.to);
        }
      }
      return true;
    }
  }
  return false;
};
var kp = () => ({
  tr,
  dispatch
}) => {
  const {
    selection
  } = tr;
  const {
    empty,
    ranges
  } = selection;
  empty || dispatch && ranges.forEach(i => {
    tr.removeMark(i.$from.pos, i.$to.pos);
  });
  return true;
};
var bp = (n, e = {}) => ({
  tr,
  state,
  dispatch
}) => {
  const {
    extendEmptyMarkRange = false
  } = e;
  const {
    selection
  } = tr;
  const a = Be(n, state.schema);
  const {
    $from,
    empty,
    ranges
  } = selection;
  if (!dispatch) {
    return true;
  }
  if (empty && extendEmptyMarkRange) {
    let {
      from,
      to
    } = selection;
    const p = $from.marks().find(g => g.type === a)?.attrs;
    const m = ui($from, a, p);
    if (m) {
      from = m.from;
      to = m.to;
    }
    tr.removeMark(from, to, a);
  } else {
    ranges.forEach(f => {
      tr.removeMark(f.$from.pos, f.$to.pos, a);
    });
  }
  tr.removeStoredMark(a);
  return true;
};
var xp = n => ({
  tr,
  state,
  dispatch
}) => {
  const {
    selection
  } = state;
  let i;
  let o;
  if (typeof n === "number") {
    i = n;
    o = n;
  } else if (n && "from" in n && "to" in n) {
    i = n.from;
    o = n.to;
  } else {
    i = selection.from;
    o = selection.to;
  }
  if (dispatch) {
    tr.doc.nodesBetween(i, o, (l, a) => {
      if (l.isText) {
        return;
      }
      const c = {
        ...l.attrs
      };
      delete c.dir;
      tr.setNodeMarkup(a, undefined, c);
    });
  }
  return true;
};
var Sp = (n, e = {}) => ({
  tr,
  state,
  dispatch
}) => {
  let i = null;
  let o = null;
  const l = Lr(typeof n === "string" ? n : n.name, state.schema);
  if (!l) {
    return false;
  }
  if (l === "node") {
    i = _(n, state.schema);
  }
  if (l === "mark") {
    o = Be(n, state.schema);
  }
  let a = false;
  tr.selection.ranges.forEach(c => {
    const pos = c.$from.pos;
    const pos_1 = c.$to.pos;
    let f;
    let h;
    let p;
    let m;
    if (tr.selection.empty) {
      state.doc.nodesBetween(pos, pos_1, (g, y) => {
        if (i && i === g.type) {
          a = true;
          p = Math.max(y, pos);
          m = Math.min(y + g.nodeSize, pos_1);
          f = y;
          h = g;
        }
      });
    } else {
      state.doc.nodesBetween(pos, pos_1, (g, y) => {
        if (y < pos && i && i === g.type) {
          a = true;
          p = Math.max(y, pos);
          m = Math.min(y + g.nodeSize, pos_1);
          f = y;
          h = g;
        }
        y >= pos && y <= pos_1 && (i && i === g.type && (a = true, dispatch && tr.setNodeMarkup(y, undefined, {
          ...g.attrs,
          ...e
        })), o && g.marks.length && g.marks.forEach(b => {
          if (o === b.type && (a = true, dispatch)) {
            const C = Math.max(y, pos);
            const M = Math.min(y + g.nodeSize, pos_1);
            tr.addMark(C, M, o.create({
              ...b.attrs,
              ...e
            }));
          }
        }));
      });
    }
    h && (f !== undefined && dispatch && tr.setNodeMarkup(f, undefined, {
      ...h.attrs,
      ...e
    }), o && h.marks.length && h.marks.forEach(g => {
      if (o === g.type && dispatch) {
        tr.addMark(p, m, o.create({
          ...g.attrs,
          ...e
        }));
      }
    }));
  });
  return a;
};
var wp = (n, e = {}) => ({
  state,
  dispatch
}) => {
  const s = _(n, state.schema);
  return Xu(s, e)(state, dispatch);
};
var Cp = (n, e = {}) => ({
  state,
  dispatch
}) => {
  const s = _(n, state.schema);
  return Qu(s, e)(state, dispatch);
};
class Mp {
  constructor() {
    this.callbacks = {};
  }
  on(n, e) {
    if (!this.callbacks[n]) {
      this.callbacks[n] = [];
    }
    this.callbacks[n].push(e);
    return this;
  }
  emit(n, ...e) {
    const t = this.callbacks[n];
    if (t) {
      t.forEach(r => r.apply(this, e));
    }
    return this;
  }
  off(n, e) {
    const t = this.callbacks[n];
    t && (e ? this.callbacks[n] = t.filter(r => r !== e) : delete this.callbacks[n]);
    return this;
  }
  once(n, e) {
    const t = (...r) => {
      this.off(n, t);
      e.apply(this, r);
    };
    return this.on(n, t);
  }
  removeAllListeners() {
    this.callbacks = {};
  }
}
class $r {
  constructor(n) {
    this.find = n.find;
    this.handler = n.handler;
    this.undoable = n.undoable ?? true;
  }
}
const Ep = (n, find) => {
  if (ci(find)) {
    return find.exec(n);
  }
  const t = find(n);
  if (!t) {
    return null;
  }
  const r = [t.text];
  r.index = t.index;
  r.input = n;
  r.data = t.data;
  if (t.replaceWith) {
    if (!t.text.includes(t.replaceWith)) {
      console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".');
    }
    r.push(t.replaceWith);
  }
  return r;
};
function Mn({
  editor,
  from,
  to,
  text,
  rules,
  plugin
}) {
  let e;
  const {
    view
  } = editor;
  if (view.composing) {
    return false;
  }
  const c = view.state.doc.resolve(from);
  if (c.parent.type.spec.code || (e = c.nodeBefore || c.nodeAfter) != null && e.marks.find(f => f.type.spec.code)) {
    return false;
  }
  let u = false;
  const d = Xh(c) + text;
  rules.forEach(f => {
    if (u) {
      return;
    }
    const h = Ep(d, f.find);
    if (!h) {
      return;
    }
    const p = view.state.tr;
    const m = Ir({
      state: view.state,
      transaction: p
    });
    const g = {
      from: from - (h[0].length - text.length),
      to
    };
    const {
      commands,
      chain,
      can
    } = new Rr({
      editor,
      state: m
    });
    if (!(f.handler({
      state: m,
      range: g,
      match: h,
      commands,
      chain,
      can
    }) === null || !p.steps.length)) {
      if (f.undoable) {
        p.setMeta(plugin, {
          transform: p,
          from,
          to,
          text
        });
      }
      view.dispatch(p);
      u = true;
    }
  });
  return u;
}
function vp({
  editor,
  rules
}) {
  const plugin = new $({
    state: {
      init() {
        return null;
      },
      apply(s, i, o) {
        const l = s.getMeta(plugin);
        if (l) {
          return l;
        }
        const a = s.getMeta("applyInputRules");
        if (a) {
          setTimeout(() => {
            let {
              text
            } = a;
            if (typeof text === "string") {
              text = text;
            } else {
              text = fi(k.from(text), o.schema);
            }
            const {
              from
            } = a;
            const f = from + text.length;
            Mn({
              editor,
              from,
              to: f,
              text,
              rules,
              plugin
            });
          });
        }
        if (s.selectionSet || s.docChanged) {
          return null;
        }
        return i;
      }
    },
    props: {
      handleTextInput(s, i, o, l) {
        return Mn({
          editor,
          from: i,
          to: o,
          text: l,
          rules,
          plugin
        });
      },
      handleDOMEvents: {
        compositionend: s => {
          setTimeout(() => {
            const {
              $cursor
            } = s.state.selection;
            if ($cursor) {
              Mn({
                editor,
                from: $cursor.pos,
                to: $cursor.pos,
                text: "",
                rules,
                plugin
              });
            }
          });
          return false;
        }
      },
      handleKeyDown(s, i) {
        if (i.key !== "Enter") {
          return false;
        }
        const {
          $cursor
        } = s.state.selection;
        if ($cursor) {
          return Mn({
            editor,
            from: $cursor.pos,
            to: $cursor.pos,
            text: `
`,
            rules,
            plugin
          });
        }
        return false;
      }
    },
    isInputRules: true
  });
  return plugin;
}
function Tp(n) {
  return Object.prototype.toString.call(n).slice(8, -1);
}
function En(n) {
  if (Tp(n) !== "Object") {
    return false;
  }
  return n.constructor === Object && Object.getPrototypeOf(n) === Object.prototype;
}
function tc(n, e) {
  const t = {
    ...n
  };
  if (En(n) && En(e)) {
    Object.keys(e).forEach(r => {
      if (En(e[r]) && En(n[r])) {
        t[r] = tc(n[r], e[r]);
      } else {
        t[r] = e[r];
      }
    });
  }
  return t;
}
class gi {
  constructor(n = {}) {
    this.type = "extendable";
    this.parent = null;
    this.child = null;
    this.name = "";
    this.config = {
      name: this.name
    };
    this.config = {
      ...this.config,
      ...n
    };
    this.name = this.config.name;
  }
  get options() {
    return {
      ...(P(T(this, "addOptions", {
        name: this.name
      })) || {})
    };
  }
  get storage() {
    return {
      ...(P(T(this, "addStorage", {
        name: this.name,
        options: this.options
      })) || {})
    };
  }
  configure(n = {}) {
    const e = this.extend({
      ...this.config,
      addOptions: () => tc(this.options, n)
    });
    e.name = this.name;
    e.parent = this.parent;
    return e;
  }
  extend(n = {}) {
    const e = new this.constructor({
      ...this.config,
      ...n
    });
    e.parent = this;
    this.child = e;
    e.name = "name" in n ? n.name : e.parent.name;
    return e;
  }
}
const bt = class nc extends gi {
  constructor() {
    super(...arguments);
    this.type = "mark";
  }
  static create(e = {}) {
    const t = typeof e === "function" ? e() : e;
    return new nc(t);
  }
  static handleExit({
    editor,
    mark
  }) {
    const {
      tr
    } = editor.state;
    const $from = editor.state.selection.$from;
    if ($from.pos === $from.end()) {
      const o = $from.marks();
      if (!o.find(c => c?.type.name === mark.name)) {
        return false;
      }
      const a = o.find(c => c?.type.name === mark.name);
      if (a) {
        tr.removeStoredMark(a);
      }
      tr.insertText(" ", $from.pos);
      editor.view.dispatch(tr);
      return true;
    }
    return false;
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const t = typeof e === "function" ? e() : e;
    return super.extend(t);
  }
};
function Ap(n) {
  return typeof n === "number";
}
class Np {
  constructor(n) {
    this.find = n.find;
    this.handler = n.handler;
  }
}
const Op = (n, find, pasteEvent) => {
  if (ci(find)) {
    return [...n.matchAll(find)];
  }
  const r = find(n, pasteEvent);
  if (r) {
    return r.map(s => {
      const i = [s.text];
      i.index = s.index;
      i.input = n;
      i.data = s.data;
      if (s.replaceWith) {
        if (!s.text.includes(s.replaceWith)) {
          console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".');
        }
        i.push(s.replaceWith);
      }
      return i;
    });
  }
  return [];
};
function Dp({
  editor,
  state,
  from,
  to,
  rule,
  pasteEvent,
  dropEvent
}) {
  const {
    commands,
    chain,
    can
  } = new Rr({
    editor,
    state
  });
  const d = [];
  state.doc.nodesBetween(from, to, (h, p) => {
    var g;
    if ((g = h.type?.spec) != null && g.code || !(h.isText || h.isTextblock || h.isInline)) {
      return;
    }
    const M = h.content?.size ?? h.nodeSize ?? 0;
    const S = Math.max(from, p);
    const A = Math.min(to, p + M);
    if (S >= A) {
      return;
    }
    const E = h.isText ? h.text || "" : h.textBetween(S - p, A - p, undefined, "\uFFFC");
    Op(E, rule.find, pasteEvent).forEach(R => {
      if (R.index === undefined) {
        return;
      }
      const ae = S + R.index + 1;
      const St = ae + R[0].length;
      const $e = {
        from: state.tr.mapping.map(ae),
        to: state.tr.mapping.map(St)
      };
      const wt = rule.handler({
        state,
        range: $e,
        match: R,
        commands,
        chain,
        can,
        pasteEvent,
        dropEvent
      });
      d.push(wt);
    });
  });
  return d.every(h => h !== null);
}
let vn = null;
const Ip = text => {
  var e;
  const t = new ClipboardEvent("paste", {
    clipboardData: new DataTransfer()
  });
  if (!((e = t.clipboardData) == null)) {
    e.setData("text/html", text);
  }
  return t;
};
function Rp({
  editor,
  rules
}) {
  let r = null;
  let s = false;
  let i = false;
  let pasteEvt_1 = typeof ClipboardEvent !== "undefined" ? new ClipboardEvent("paste") : null;
  let dropEvent;
  try {
    dropEvent = typeof DragEvent !== "undefined" ? new DragEvent("drop") : null;
  } catch {
    dropEvent = null;
  }
  const a = ({
    state,
    from,
    to,
    rule,
    pasteEvt
  }) => {
    const state_tr = state.tr;
    const g = Ir({
      state,
      transaction: state_tr
    });
    if (!(!Dp({
      editor,
      state: g,
      from: Math.max(from - 1, 0),
      to: to.b - 1,
      rule,
      pasteEvent: pasteEvt,
      dropEvent
    }) || !state_tr.steps.length)) {
      try {
        dropEvent = typeof DragEvent !== "undefined" ? new DragEvent("drop") : null;
      } catch {
        dropEvent = null;
      }
      pasteEvt_1 = typeof ClipboardEvent !== "undefined" ? new ClipboardEvent("paste") : null;
      return state_tr;
    }
  };
  return rules.map(rule => new $({
    view(d) {
      const f = p => {
        var m;
        r = (m = d.dom.parentElement) != null && m.contains(p.target) ? d.dom.parentElement : null;
        if (r) {
          vn = editor;
        }
      };
      const h = () => {
        if (vn) {
          vn = null;
        }
      };
      window.addEventListener("dragstart", f);
      window.addEventListener("dragend", h);
      return {
        destroy() {
          window.removeEventListener("dragstart", f);
          window.removeEventListener("dragend", h);
        }
      };
    },
    props: {
      handleDOMEvents: {
        drop: (d, f) => {
          i = r === d.dom.parentElement;
          dropEvent = f;
          if (!i) {
            const h = vn;
            if (h?.isEditable) {
              setTimeout(() => {
                const selection = h.state.selection;
                if (selection) {
                  h.commands.deleteRange({
                    from: selection.from,
                    to: selection.to
                  });
                }
              }, 10);
            }
          }
          return false;
        },
        paste: (d, f) => {
          const p = f.clipboardData?.getData("text/html");
          pasteEvt_1 = f;
          s = !!p?.includes("data-pm-slice");
          return false;
        }
      }
    },
    appendTransaction: (d, f, h) => {
      const p = d[0];
      const m = p.getMeta("uiEvent") === "paste" && !s;
      const g = p.getMeta("uiEvent") === "drop" && !i;
      const y = p.getMeta("applyPasteRules");
      const b = !!y;
      if (!m && !g && !b) {
        return;
      }
      if (b) {
        let {
          text
        } = y;
        if (typeof text === "string") {
          text = text;
        } else {
          text = fi(k.from(text), h.schema);
        }
        const {
          from
        } = y;
        const b_1 = from + text.length;
        const pasteEvt = Ip(text);
        return a({
          rule,
          state: h,
          from,
          to: {
            b: b_1
          },
          pasteEvt
        });
      }
      const C = f.doc.content.findDiffStart(h.doc.content);
      const M = f.doc.content.findDiffEnd(h.doc.content);
      if (!(!Ap(C) || !M || C === M.b)) {
        return a({
          rule,
          state: h,
          from: C,
          to: M,
          pasteEvt: pasteEvt_1
        });
      }
    }
  }));
}
class Fr {
  constructor(n, e) {
    this.splittableMarks = [];
    this.editor = e;
    this.baseExtensions = n;
    this.extensions = pi(n);
    this.schema = Ua(this.extensions, e);
    this.setupExtensions();
  }
  get commands() {
    return this.extensions.reduce((acc, extension) => {
      const t = {
        name: extension.name,
        options: extension.options,
        storage: this.editor.extensionStorage[extension.name],
        editor: this.editor,
        type: ns(extension.name, this.schema)
      };
      const r = T(extension, "addCommands", t);
      if (r) {
        return {
          ...acc,
          ...r()
        };
      }
      return acc;
    }, {});
  }
  get plugins() {
    const {
      editor
    } = this;
    return hi([...this.extensions].reverse()).flatMap(r => {
      const s = {
        name: r.name,
        options: r.options,
        storage: this.editor.extensionStorage[r.name],
        editor,
        type: ns(r.name, this.schema)
      };
      const i = [];
      const o = T(r, "addKeyboardShortcuts", s);
      let l = {};
      if (r.type === "mark" && T(r, "exitable", s)) {
        l.ArrowRight = () => bt.handleExit({
          editor,
          mark: r
        });
      }
      if (o) {
        const f = Object.fromEntries(Object.entries(o()).map(([h, p]) => [h, () => p({
          editor
        })]));
        l = {
          ...l,
          ...f
        };
      }
      const a = Jf(l);
      i.push(a);
      const c = T(r, "addInputRules", s);
      if (zo(r, editor.options.enableInputRules) && c) {
        const f = c();
        if (f && f.length) {
          const h = vp({
            editor,
            rules: f
          });
          const p = Array.isArray(h) ? h : [h];
          i.push(...p);
        }
      }
      const u = T(r, "addPasteRules", s);
      if (zo(r, editor.options.enablePasteRules) && u) {
        const f = u();
        if (f && f.length) {
          const h = Rp({
            editor,
            rules: f
          });
          i.push(...h);
        }
      }
      const d = T(r, "addProseMirrorPlugins", s);
      if (d) {
        const f = d();
        i.push(...f);
      }
      return i;
    });
  }
  get attributes() {
    return Ka(this.extensions);
  }
  get nodeViews() {
    const {
      editor
    } = this;
    const {
      nodeExtensions
    } = Bt(this.extensions);
    return Object.fromEntries(nodeExtensions.filter(t => !!T(t, "addNodeView")).map(t => {
      const r = this.attributes.filter(a => a.type === t.name);
      const s = {
        name: t.name,
        options: t.options,
        storage: this.editor.extensionStorage[t.name],
        editor,
        type: _(t.name, this.schema)
      };
      const i = T(t, "addNodeView", s);
      if (!i) {
        return [];
      }
      const o = i();
      if (!o) {
        return [];
      }
      const l = (a, c, getPos, d, innerDecorations) => {
        const h = Gn(a, r);
        return o({
          node: a,
          view: c,
          getPos,
          decorations: d,
          innerDecorations,
          editor,
          extension: t,
          HTMLAttributes: h
        });
      };
      return [t.name, l];
    }));
  }
  get markViews() {
    const {
      editor
    } = this;
    const {
      markExtensions
    } = Bt(this.extensions);
    return Object.fromEntries(markExtensions.filter(t => !!T(t, "addMarkView")).map(t => {
      const r = this.attributes.filter(l => l.type === t.name);
      const s = {
        name: t.name,
        options: t.options,
        storage: this.editor.extensionStorage[t.name],
        editor,
        type: Be(t.name, this.schema)
      };
      const i = T(t, "addMarkView", s);
      if (!i) {
        return [];
      }
      const o = (l, a, inline) => {
        const u = Gn(l, r);
        return i()({
          mark: l,
          view: a,
          inline,
          editor,
          extension: t,
          HTMLAttributes: u,
          updateAttributes: d => {
            Up(l, editor, d);
          }
        });
      };
      return [t.name, o];
    }));
  }
  setupExtensions() {
    const extensions = this.extensions;
    this.editor.extensionStorage = Object.fromEntries(extensions.map(e => [e.name, e.storage]));
    extensions.forEach(e => {
      var t;
      const r = {
        name: e.name,
        options: e.options,
        storage: this.editor.extensionStorage[e.name],
        editor: this.editor,
        type: ns(e.name, this.schema)
      };
      if (e.type === "mark" && ((t = P(T(e, "keepOnSplit", r))) == null || t)) {
        this.splittableMarks.push(e.name);
      }
      const s = T(e, "onBeforeCreate", r);
      const i = T(e, "onCreate", r);
      const o = T(e, "onUpdate", r);
      const l = T(e, "onSelectionUpdate", r);
      const a = T(e, "onTransaction", r);
      const c = T(e, "onFocus", r);
      const u = T(e, "onBlur", r);
      const d = T(e, "onDestroy", r);
      if (s) {
        this.editor.on("beforeCreate", s);
      }
      if (i) {
        this.editor.on("create", i);
      }
      if (o) {
        this.editor.on("update", o);
      }
      if (l) {
        this.editor.on("selectionUpdate", l);
      }
      if (a) {
        this.editor.on("transaction", a);
      }
      if (c) {
        this.editor.on("focus", c);
      }
      if (u) {
        this.editor.on("blur", u);
      }
      if (d) {
        this.editor.on("destroy", d);
      }
    });
  }
}
Fr.resolve = pi;
Fr.sort = hi;
Fr.flatten = di;
function Up(n, editor, t = {}) {
  const {
    state
  } = editor;
  const {
    doc,
    tr
  } = state;
  const o = n;
  doc.descendants((l, a) => {
    const c = tr.mapping.map(a);
    const u = tr.mapping.map(a) + l.nodeSize;
    let d = null;
    l.marks.forEach(h => {
      if (h !== o) {
        return false;
      }
      d = h;
    });
    if (!d) {
      return;
    }
    let f = false;
    Object.keys(t).forEach(h => {
      if (t[h] !== d.attrs[h]) {
        f = true;
      }
    });
    if (f) {
      const h = n.type.create({
        ...n.attrs,
        ...t
      });
      tr.removeMark(c, u, n.type);
      tr.addMark(c, u, h);
    }
  });
  if (tr.docChanged) {
    editor.view.dispatch(tr);
  }
}
const de = class mc extends gi {
  constructor() {
    super(...arguments);
    this.type = "node";
  }
  static create(e = {}) {
    const t = typeof e === "function" ? e() : e;
    return new mc(t);
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const t = typeof e === "function" ? e() : e;
    return super.extend(t);
  }
};
class fy {
  constructor(n, e, t) {
    this.isDragging = false;
    this.component = n;
    this.editor = e.editor;
    this.options = {
      stopEvent: null,
      ignoreMutation: null,
      ...t
    };
    this.extension = e.extension;
    this.node = e.node;
    this.decorations = e.decorations;
    this.innerDecorations = e.innerDecorations;
    this.view = e.view;
    this.HTMLAttributes = e.HTMLAttributes;
    this.getPos = e.getPos;
    this.mount();
  }
  mount() {}
  get dom() {
    return this.editor.view.dom;
  }
  get contentDOM() {
    return null;
  }
  onDragStart(n) {
    let t;
    let l;
    const {
      view
    } = this.editor;
    const n_target = n.target;
    const u = n_target.nodeType === 3 ? n_target.parentElement?.closest("[data-drag-handle]") : n_target.closest("[data-drag-handle]");
    if (!this.dom || (t = this.contentDOM) != null && t.contains(n_target) || !u) {
      return;
    }
    let d = 0;
    let f = 0;
    if (this.dom !== u) {
      const b = this.dom.getBoundingClientRect();
      const C = u.getBoundingClientRect();
      const M = n.offsetX ?? n.nativeEvent?.offsetX;
      const S = n.offsetY ?? n.nativeEvent?.offsetY;
      d = C.x - b.x + M;
      f = C.y - b.y + S;
    }
    const h = this.dom.cloneNode(true);
    try {
      const b = this.dom.getBoundingClientRect();
      h.style.width = `${Math.round(b.width)}px`;
      h.style.height = `${Math.round(b.height)}px`;
      h.style.boxSizing = "border-box";
      h.style.pointerEvents = "none";
    } catch {}
    let p = null;
    try {
      p = document.createElement("div");
      p.style.position = "absolute";
      p.style.top = "-9999px";
      p.style.left = "-9999px";
      p.style.pointerEvents = "none";
      p.appendChild(h);
      document.body.appendChild(p);
      if (!((l = n.dataTransfer) == null)) {
        l.setDragImage(h, d, f);
      }
    } finally {
      if (p) {
        setTimeout(() => {
          try {
            p?.remove();
          } catch {}
        }, 0);
      }
    }
    const m = this.getPos();
    if (typeof m !== "number") {
      return;
    }
    const g = C.create(view.state.doc, m);
    const y = view.state.tr.setSelection(g);
    view.dispatch(y);
  }
  stopEvent(event) {
    let e;
    if (!this.dom) {
      return false;
    }
    if (typeof this.options.stopEvent === "function") {
      return this.options.stopEvent({
        event
      });
    }
    const n_target = event.target;
    if (!(this.dom.contains(n_target) && !((e = this.contentDOM) != null && e.contains(n_target)))) {
      return false;
    }
    const s = event.type.startsWith("drag");
    const i = event.type === "drop";
    if ((["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(n_target.tagName) || n_target.isContentEditable) && !i && !s) {
      return true;
    }
    const {
      isEditable
    } = this.editor;
    const {
      isDragging
    } = this;
    const c = !!this.node.type.spec.draggable;
    const u = C.isSelectable(this.node);
    const d = event.type === "copy";
    const f = event.type === "paste";
    const h = event.type === "cut";
    const p = event.type === "mousedown";
    if (!c && u && s && event.target === this.dom) {
      event.preventDefault();
    }
    if (c && s && !isDragging && event.target === this.dom) {
      event.preventDefault();
      return false;
    }
    if (c && isEditable && !isDragging && p) {
      const m = n_target.closest("[data-drag-handle]");
      if (m && (this.dom === m || this.dom.contains(m))) {
        this.isDragging = true;
        document.addEventListener("dragend", () => {
          this.isDragging = false;
        }, {
          once: true
        });
        document.addEventListener("drop", () => {
          this.isDragging = false;
        }, {
          once: true
        });
        document.addEventListener("mouseup", () => {
          this.isDragging = false;
        }, {
          once: true
        });
      }
    }
    return !(isDragging || i || d || f || h || p && u);
  }
  ignoreMutation(mutation) {
    if (!this.dom || !this.contentDOM) {
      return true;
    }
    if (typeof this.options.ignoreMutation === "function") {
      return this.options.ignoreMutation({
        mutation
      });
    }
    if (this.node.isLeaf || this.node.isAtom) {
      return true;
    }
    if (mutation.type === "selection" || this.dom.contains(mutation.target) && mutation.type === "childList" && (Pr() || Ha()) && this.editor.isFocused && [...Array.from(mutation.addedNodes), ...Array.from(mutation.removedNodes)].every(t => t.isContentEditable)) {
      return false;
    }
    if (this.contentDOM === mutation.target && mutation.type === "attributes") {
      return true;
    }
    return !this.contentDOM.contains(mutation.target);
  }
  updateAttributes(n) {
    this.editor.commands.command(({
      tr
    }) => {
      const t = this.getPos();
      if (typeof t !== "number") {
        return false;
      }
      tr.setNodeMarkup(t, undefined, {
        ...this.node.attrs,
        ...n
      });
      return true;
    });
  }
  deleteNode() {
    const n = this.getPos();
    if (typeof n !== "number") {
      return;
    }
    const e = n + this.node.nodeSize;
    this.editor.commands.deleteRange({
      from: n,
      to: e
    });
  }
}
function yt(n) {
  return new Np({
    find: n.find,
    handler: ({
      state,
      range,
      match,
      pasteEvent
    }) => {
      const i = P(n.getAttributes, undefined, match, pasteEvent);
      if (i === false || i === null) {
        return null;
      }
      const {
        tr
      } = state;
      const l = match[match.length - 1];
      const a = match[0];
      let range_to = range.to;
      if (l) {
        const u = a.search(/\S/);
        const d = range.from + a.indexOf(l);
        const f = d + l.length;
        if (mi(range.from, range.to, state.doc).filter(p => p.mark.type.excluded.find(g => g === n.type && g !== p.mark.type)).filter(p => p.to > d).length) {
          return null;
        }
        if (f < range.to) {
          tr.delete(f, range.to);
        }
        if (d > range.from) {
          tr.delete(range.from + u, d);
        }
        range_to = range.from + u + l.length;
        tr.addMark(range.from + u, range_to, n.type.create(i || {}));
        tr.removeStoredMark(n.type);
      }
    }
  });
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
function Fo(n, e) {
  return (r, s, i) => n(r, s, i) && e(r, s, i);
}
function Tn(n) {
  return (t, r, s) => {
    if (!t || !r || typeof t !== "object" || typeof r !== "object") {
      return n(t, r, s);
    }
    const s_cache = s.cache;
    const o = s_cache.get(t);
    const l = s_cache.get(r);
    if (o && l) {
      return o === r && l === t;
    }
    s_cache.set(t, r);
    s_cache.set(r, t);
    const a = n(t, r, s);
    s_cache.delete(t);
    s_cache.delete(r);
    return a;
  };
}
function Xp(n) {
  return n?.[Symbol.toStringTag];
}
function Ho(n) {
  return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n));
}
const Qp = Object.hasOwn || ((n, e) => hasOwnProperty.call(n, e));
function xt(n, e) {
  return n === e || !n && !e && n !== n && e !== e;
}
const Zp = "__v";
const em = "__o";
const tm = "_owner";
function nm(n, e, t) {
  let n_length = n.length;
  if (e.length !== n_length) {
    return false;
  }
  while (n_length-- > 0) {
    if (!t.equals(n[n_length], e[n_length], n_length, n_length, n, e, t)) {
      return false;
    }
  }
  return true;
}
function areDatesEqual(n, e) {
  return xt(n.getTime(), e.getTime());
}
function areErrorsEqual(n, e) {
  return n.name === e.name && n.message === e.message && n.cause === e.cause && n.stack === e.stack;
}
function areFunctionsEqual(n, e) {
  return n === e;
}
function _o(n, e, t) {
  const n_size = n.size;
  if (n_size !== e.size) {
    return false;
  }
  if (!n_size) {
    return true;
  }
  const s = new Array(n_size);
  let l;
  for (let i = n.entries(), o, a = 0; (o = i.next()) && !o.done;) {
    for (var c = e.entries(), u = false, d = 0; (l = c.next()) && !l.done;) {
      if (s[d]) {
        d++;
        continue;
      }
      const f = o.value;
      const h = l.value;
      if (t.equals(f[0], h[0], a, d, n, e, t) && t.equals(f[1], h[1], f[0], h[0], n, e, t)) {
        u = s[d] = true;
        break;
      }
      d++;
    }
    if (!u) {
      return false;
    }
    a++;
  }
  return true;
}
const areNumbersEqual = xt;
function lm(n, e, t) {
  const r = Object.keys(n);
  let r_length = r.length;
  if (Object.keys(e).length !== r_length) {
    return false;
  }
  while (r_length-- > 0) {
    if (!gc(n, e, t, r[r_length])) {
      return false;
    }
  }
  return true;
}
function _t(n, e, t) {
  const r = Ho(n);
  let r_length = r.length;
  if (Ho(e).length !== r_length) {
    return false;
  }
  let i;
  let o;
  let l;
  while (r_length-- > 0) {
    i = r[r_length];
    if (!gc(n, e, t, i) || (o = Object.getOwnPropertyDescriptor(n, i), l = Object.getOwnPropertyDescriptor(e, i), (o || l) && (!o || !l || o.configurable !== l.configurable || o.enumerable !== l.enumerable || o.writable !== l.writable))) {
      return false;
    }
  }
  return true;
}
function arePrimitiveWrappersEqual(n, e) {
  return xt(n.valueOf(), e.valueOf());
}
function areRegExpsEqual(n, e) {
  return n.source === e.source && n.flags === e.flags;
}
function Wo(n, e, t) {
  const n_size = n.size;
  if (n_size !== e.size) {
    return false;
  }
  if (!n_size) {
    return true;
  }
  const s = new Array(n_size);
  let l;
  for (let i = n.values(), o; (o = i.next()) && !o.done;) {
    for (var a = e.values(), c = false, u = 0; (l = a.next()) && !l.done;) {
      if (!s[u] && t.equals(o.value, l.value, o.value, l.value, n, e, t)) {
        c = s[u] = true;
        break;
      }
      u++;
    }
    if (!c) {
      return false;
    }
  }
  return true;
}
function um(n, e) {
  let n_length = n.length;
  if (e.length !== n_length) {
    return false;
  }
  while (n_length-- > 0) {
    if (n[n_length] !== e[n_length]) {
      return false;
    }
  }
  return true;
}
function areUrlsEqual(n, e) {
  return n.hostname === e.hostname && n.pathname === e.pathname && n.protocol === e.protocol && n.port === e.port && n.hash === e.hash && n.username === e.username && n.password === e.password;
}
function gc(n, e, t, r) {
  if ((r === tm || r === em || r === Zp) && (n.$$typeof || e.$$typeof)) {
    return true;
  }
  return Qp(e, r) && t.equals(n[r], e[r], r, r, n, e, t);
}
const fm = "[object Arguments]";
const hm = "[object Boolean]";
const pm = "[object Date]";
const mm = "[object Error]";
const gm = "[object Map]";
const ym = "[object Number]";
const km = "[object Object]";
const bm = "[object RegExp]";
const xm = "[object Set]";
const Sm = "[object String]";
const wm = "[object URL]";
const qo = typeof ArrayBuffer !== "undefined" && typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView : null;
const Mm = Object.prototype.toString.call.bind(Object.prototype.toString);
function Em({
  areArraysEqual,
  areDatesEqual,
  areErrorsEqual,
  areFunctionsEqual,
  areMapsEqual,
  areNumbersEqual,
  areObjectsEqual,
  arePrimitiveWrappersEqual,
  areRegExpsEqual,
  areSetsEqual,
  areTypedArraysEqual,
  areUrlsEqual,
  unknownTagComparators
}) {
  return (m, g, y) => {
    if (m === g) {
      return true;
    }
    if (m == null || g == null) {
      return false;
    }
    const b = typeof m;
    if (b !== typeof g) {
      return false;
    }
    if (b !== "object") {
      switch (b) {
        case "number":
          return areNumbersEqual(m, g, y);
        case "function":
          return areFunctionsEqual(m, g, y);
        default:
          return false;
      }
    }
    const m_constructor = m.constructor;
    if (m_constructor !== g.constructor) {
      return false;
    }
    if (m_constructor === Object) {
      return areObjectsEqual(m, g, y);
    }
    if (Array.isArray(m)) {
      return areArraysEqual(m, g, y);
    }
    if (qo != null && qo(m)) {
      return areTypedArraysEqual(m, g, y);
    }
    if (m_constructor === Date) {
      return areDatesEqual(m, g, y);
    }
    if (m_constructor === RegExp) {
      return areRegExpsEqual(m, g, y);
    }
    if (m_constructor === Map) {
      return areMapsEqual(m, g, y);
    }
    if (m_constructor === Set) {
      return areSetsEqual(m, g, y);
    }
    const M = Mm(m);
    if (M === pm) {
      return areDatesEqual(m, g, y);
    }
    if (M === bm) {
      return areRegExpsEqual(m, g, y);
    }
    if (M === gm) {
      return areMapsEqual(m, g, y);
    }
    if (M === xm) {
      return areSetsEqual(m, g, y);
    }
    if (M === km) {
      return typeof m.then !== "function" && typeof g.then !== "function" && areObjectsEqual(m, g, y);
    }
    if (M === wm) {
      return areUrlsEqual(m, g, y);
    }
    if (M === mm) {
      return areErrorsEqual(m, g, y);
    }
    if (M === fm) {
      return areObjectsEqual(m, g, y);
    }
    if (M === hm || M === ym || M === Sm) {
      return arePrimitiveWrappersEqual(m, g, y);
    }
    if (unknownTagComparators) {
      let S = unknownTagComparators[M];
      if (!S) {
        const A = Xp(m);
        if (A) {
          S = unknownTagComparators[A];
        }
      }
      if (S) {
        return S(m, g, y);
      }
    }
    return false;
  };
}
function vm({
  circular,
  createCustomConfig,
  strict
}) {
  let s = {
    areArraysEqual: strict ? _t : nm,
    areDatesEqual,
    areErrorsEqual,
    areFunctionsEqual,
    areMapsEqual: strict ? Fo(_o, _t) : _o,
    areNumbersEqual,
    areObjectsEqual: strict ? _t : lm,
    arePrimitiveWrappersEqual,
    areRegExpsEqual,
    areSetsEqual: strict ? Fo(Wo, _t) : Wo,
    areTypedArraysEqual: strict ? _t : um,
    areUrlsEqual,
    unknownTagComparators: undefined
  };
  if (createCustomConfig) {
    s = {
      ...s,
      ...createCustomConfig(s)
    };
  }
  if (circular) {
    const areArraysEqual = Tn(s.areArraysEqual);
    const areMapsEqual = Tn(s.areMapsEqual);
    const areObjectsEqual = Tn(s.areObjectsEqual);
    const areSetsEqual = Tn(s.areSetsEqual);
    s = {
      ...s,
      areArraysEqual,
      areMapsEqual,
      areObjectsEqual,
      areSetsEqual
    };
  }
  return s;
}
function Tm(comparator) {
  return (e, t, r, s, i, o, l) => comparator(e, t, l);
}
function Am({
  circular,
  comparator,
  createState,
  equals,
  strict
}) {
  if (createState) {
    return (a, c) => {
      const {
        cache = circular ? new WeakMap() : undefined,
        meta
      } = createState();
      return comparator(a, c, {
        cache,
        equals,
        meta,
        strict
      });
    };
  }
  if (circular) {
    return (a, c) => comparator(a, c, {
      cache: new WeakMap(),
      equals,
      meta: undefined,
      strict
    });
  }
  const o = {
    cache: undefined,
    equals,
    meta: undefined,
    strict
  };
  return (a, c) => comparator(a, c, o);
}
const hy = nt();
nt({
  strict: true
});
nt({
  circular: true
});
nt({
  circular: true,
  strict: true
});
nt({
  createInternalComparator() {
    return xt;
  }
});
nt({
  strict: true,
  createInternalComparator() {
    return xt;
  }
});
nt({
  circular: true,
  createInternalComparator() {
    return xt;
  }
});
nt({
  circular: true,
  createInternalComparator() {
    return xt;
  },
  strict: true
});
function nt(n = {}) {
  const n_circular = n.circular;
  const circular = n_circular === undefined ? false : n_circular;
  const {
    createInternalComparator,
    createState,
    strict
  } = n;
  const strict_1 = strict === undefined ? false : strict;
  const l = vm(n);
  const comparator = Em(l);
  const equals = createInternalComparator ? createInternalComparator(comparator) : Tm(comparator);
  return Am({
    circular,
    comparator,
    createState,
    equals,
    strict: strict_1
  });
}
const Nm = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2";
const Om = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2";
const Ps = "numeric";
const Ls = "ascii";
const zs = "alpha";
const en = "asciinumeric";
const Gt = "alphanumeric";
const Bs = "domain";
const yc = "emoji";
const Dm = "scheme";
const Im = "slashscheme";
const is = "whitespace";
function Rm(n, e) {
  if (!(n in e)) {
    e[n] = [];
  }
  return e[n];
}
function lt(n, e, t) {
  if (e[Ps]) {
    e[en] = true;
    e[Gt] = true;
  }
  if (e[Ls]) {
    e[en] = true;
    e[zs] = true;
  }
  if (e[en]) {
    e[Gt] = true;
  }
  if (e[zs]) {
    e[Gt] = true;
  }
  if (e[Gt]) {
    e[Bs] = true;
  }
  if (e[yc]) {
    e[Bs] = true;
  }
  for (const r in e) {
    const s = Rm(r, t);
    if (s.indexOf(n) < 0) {
      s.push(n);
    }
  }
}
function Pm(n, e) {
  const t = {};
  for (const r in e) {
    if (e[r].indexOf(n) >= 0) {
      t[r] = true;
    }
  }
  return t;
}
function oe(n = null) {
  this.j = {};
  this.jr = [];
  this.jd = null;
  this.t = n;
}
oe.groups = {};
oe.prototype = {
  accepts() {
    return !!this.t;
  },
  go(n) {
    const e = this;
    const t = e.j[n];
    if (t) {
      return t;
    }
    for (let r = 0; r < e.jr.length; r++) {
      const s = e.jr[r][0];
      const i = e.jr[r][1];
      if (i && s.test(n)) {
        return i;
      }
    }
    return e.jd;
  },
  has(n, e = false) {
    if (e) {
      return n in this.j;
    }
    return !!this.go(n);
  },
  ta(n, e, t, r) {
    for (let s = 0; s < n.length; s++) {
      this.tt(n[s], e, t, r);
    }
  },
  tr(n, e, t, r) {
    r = r || oe.groups;
    let s;
    if (e && e.j) {
      s = e;
    } else {
      s = new oe(e);
      if (t && r) {
        lt(e, t, r);
      }
    }
    this.jr.push([n, s]);
    return s;
  },
  ts(n, e, t, r) {
    let s = this;
    const n_length = n.length;
    if (!n_length) {
      return s;
    }
    for (let o = 0; o < n_length - 1; o++) {
      s = s.tt(n[o]);
    }
    return s.tt(n[n_length - 1], e, t, r);
  },
  tt(n, e, t, r) {
    r = r || oe.groups;
    const s = this;
    if (e && e.j) {
      s.j[n] = e;
      return e;
    }
    const i = e;
    let o;
    let l = s.go(n);
    if (l) {
      o = new oe();
      Object.assign(o.j, l.j);
      o.jr.push.apply(o.jr, l.jr);
      o.jd = l.jd;
      o.t = l.t;
    } else {
      o = new oe();
    }
    if (i) {
      if (r) {
        if (o.t && typeof o.t === "string") {
          const a = Object.assign(Pm(o.t, r), t);
          lt(i, a, r);
        } else {
          if (t) {
            lt(i, t, r);
          }
        }
      }
      o.t = i;
    }
    s.j[n] = o;
    return o;
  }
};
const D = (n, e, t, r, s) => n.ta(e, t, r, s);
const F = (n, e, t, r, s) => n.tr(e, t, r, s);
const Uo = (n, e, t, r, s) => n.ts(e, t, r, s);
const x = (n, e, t, r, s) => n.tt(e, t, r, s);
const WORD = "WORD";
const UWORD = "UWORD";
const ASCIINUMERICAL = "ASCIINUMERICAL";
const ALPHANUMERICAL = "ALPHANUMERICAL";
const LOCALHOST = "LOCALHOST";
const TLD = "TLD";
const UTLD = "UTLD";
const SCHEME = "SCHEME";
const SLASH_SCHEME = "SLASH_SCHEME";
const NUM = "NUM";
const WS = "WS";
const NL = "NL";
const OPENBRACE = "OPENBRACE";
const CLOSEBRACE = "CLOSEBRACE";
const OPENBRACKET = "OPENBRACKET";
const CLOSEBRACKET = "CLOSEBRACKET";
const OPENPAREN = "OPENPAREN";
const CLOSEPAREN = "CLOSEPAREN";
const OPENANGLEBRACKET = "OPENANGLEBRACKET";
const CLOSEANGLEBRACKET = "CLOSEANGLEBRACKET";
const FULLWIDTHLEFTPAREN = "FULLWIDTHLEFTPAREN";
const FULLWIDTHRIGHTPAREN = "FULLWIDTHRIGHTPAREN";
const LEFTCORNERBRACKET = "LEFTCORNERBRACKET";
const RIGHTCORNERBRACKET = "RIGHTCORNERBRACKET";
const LEFTWHITECORNERBRACKET = "LEFTWHITECORNERBRACKET";
const RIGHTWHITECORNERBRACKET = "RIGHTWHITECORNERBRACKET";
const FULLWIDTHLESSTHAN = "FULLWIDTHLESSTHAN";
const FULLWIDTHGREATERTHAN = "FULLWIDTHGREATERTHAN";
const AMPERSAND = "AMPERSAND";
const APOSTROPHE = "APOSTROPHE";
const ASTERISK = "ASTERISK";
const AT = "AT";
const BACKSLASH = "BACKSLASH";
const BACKTICK = "BACKTICK";
const CARET = "CARET";
const COLON = "COLON";
const COMMA = "COMMA";
const DOLLAR = "DOLLAR";
const DOT = "DOT";
const EQUALS = "EQUALS";
const EXCLAMATION = "EXCLAMATION";
const HYPHEN = "HYPHEN";
const PERCENT = "PERCENT";
const PIPE = "PIPE";
const PLUS = "PLUS";
const POUND = "POUND";
const QUERY = "QUERY";
const QUOTE = "QUOTE";
const FULLWIDTHMIDDLEDOT = "FULLWIDTHMIDDLEDOT";
const SEMI = "SEMI";
const SLASH = "SLASH";
const TILDE = "TILDE";
const UNDERSCORE = "UNDERSCORE";
const EMOJI = "EMOJI";
const SYM = "SYM";
const wc = Object.freeze({
  __proto__: null,
  ALPHANUMERICAL,
  AMPERSAND,
  APOSTROPHE,
  ASCIINUMERICAL,
  ASTERISK,
  AT,
  BACKSLASH,
  BACKTICK,
  CARET,
  CLOSEANGLEBRACKET,
  CLOSEBRACE,
  CLOSEBRACKET,
  CLOSEPAREN,
  COLON,
  COMMA,
  DOLLAR,
  DOT,
  EMOJI,
  EQUALS,
  EXCLAMATION,
  FULLWIDTHGREATERTHAN,
  FULLWIDTHLEFTPAREN,
  FULLWIDTHLESSTHAN,
  FULLWIDTHMIDDLEDOT,
  FULLWIDTHRIGHTPAREN,
  HYPHEN,
  LEFTCORNERBRACKET,
  LEFTWHITECORNERBRACKET,
  LOCALHOST,
  NL,
  NUM,
  OPENANGLEBRACKET,
  OPENBRACE,
  OPENBRACKET,
  OPENPAREN,
  PERCENT,
  PIPE,
  PLUS,
  POUND,
  QUERY,
  QUOTE,
  RIGHTCORNERBRACKET,
  RIGHTWHITECORNERBRACKET,
  SCHEME,
  SEMI,
  SLASH,
  SLASH_SCHEME,
  SYM,
  TILDE,
  TLD,
  UNDERSCORE,
  UTLD,
  UWORD,
  WORD,
  WS
});
const Ne = /[a-z]/;
const Wt = new RegExp("\\p{L}", "u");
const ls = new RegExp("\\p{Emoji}", "u");
const Oe = /\d/;
const as = /\s/;
const Jo = "\r";
const cs = `
`;
const Lm = "\uFE0F";
const zm = "\u200D";
const us = "\uFFFC";
let An = null;
let Nn = null;
function Bm(n = []) {
  const groups = {};
  oe.groups = groups;
  const t = new oe();
  if (An == null) {
    An = Go(Nm);
  }
  if (Nn == null) {
    Nn = Go(Om);
  }
  x(t, "'", APOSTROPHE);
  x(t, "{", OPENBRACE);
  x(t, "}", CLOSEBRACE);
  x(t, "[", OPENBRACKET);
  x(t, "]", CLOSEBRACKET);
  x(t, "(", OPENPAREN);
  x(t, ")", CLOSEPAREN);
  x(t, "<", OPENANGLEBRACKET);
  x(t, ">", CLOSEANGLEBRACKET);
  x(t, "（", FULLWIDTHLEFTPAREN);
  x(t, "）", FULLWIDTHRIGHTPAREN);
  x(t, "「", LEFTCORNERBRACKET);
  x(t, "」", RIGHTCORNERBRACKET);
  x(t, "『", LEFTWHITECORNERBRACKET);
  x(t, "』", RIGHTWHITECORNERBRACKET);
  x(t, "＜", FULLWIDTHLESSTHAN);
  x(t, "＞", FULLWIDTHGREATERTHAN);
  x(t, "&", AMPERSAND);
  x(t, "*", ASTERISK);
  x(t, "@", AT);
  x(t, "`", BACKTICK);
  x(t, "^", CARET);
  x(t, ":", COLON);
  x(t, ",", COMMA);
  x(t, "$", DOLLAR);
  x(t, ".", DOT);
  x(t, "=", EQUALS);
  x(t, "!", EXCLAMATION);
  x(t, "-", HYPHEN);
  x(t, "%", PERCENT);
  x(t, "|", PIPE);
  x(t, "+", PLUS);
  x(t, "#", POUND);
  x(t, "?", QUERY);
  x(t, '"', QUOTE);
  x(t, "/", SLASH);
  x(t, ";", SEMI);
  x(t, "~", TILDE);
  x(t, "_", UNDERSCORE);
  x(t, "\\", BACKSLASH);
  x(t, "・", FULLWIDTHMIDDLEDOT);
  const r = F(t, Oe, NUM, {
    [Ps]: true
  });
  F(r, Oe, r);
  const s = F(r, Ne, ASCIINUMERICAL, {
    [en]: true
  });
  const i = F(r, Wt, ALPHANUMERICAL, {
    [Gt]: true
  });
  const o = F(t, Ne, WORD, {
    [Ls]: true
  });
  F(o, Oe, s);
  F(o, Ne, o);
  F(s, Oe, s);
  F(s, Ne, s);
  const l = F(t, Wt, UWORD, {
    [zs]: true
  });
  F(l, Ne);
  F(l, Oe, i);
  F(l, Wt, l);
  F(i, Oe, i);
  F(i, Ne);
  F(i, Wt, i);
  const a = x(t, cs, NL, {
    [is]: true
  });
  const c = x(t, Jo, WS, {
    [is]: true
  });
  const u = F(t, as, WS, {
    [is]: true
  });
  x(t, us, u);
  x(c, cs, a);
  x(c, us, u);
  F(c, as, u);
  x(u, Jo);
  x(u, cs);
  F(u, as, u);
  x(u, us, u);
  const d = F(t, ls, EMOJI, {
    [yc]: true
  });
  x(d, "#");
  F(d, ls, d);
  x(d, Lm, d);
  const f = x(d, zm);
  x(f, "#");
  F(f, ls, d);
  const h = [[Ne, o], [Oe, s]];
  const p = [[Ne, null], [Wt, l], [Oe, i]];
  for (let m = 0; m < An.length; m++) {
    Fe(t, An[m], TLD, WORD, h);
  }
  for (let m = 0; m < Nn.length; m++) {
    Fe(t, Nn[m], UTLD, UWORD, p);
  }
  lt(TLD, {
    tld: true,
    ascii: true
  }, groups);
  lt(UTLD, {
    utld: true,
    alpha: true
  }, groups);
  Fe(t, "file", SCHEME, WORD, h);
  Fe(t, "mailto", SCHEME, WORD, h);
  Fe(t, "http", SLASH_SCHEME, WORD, h);
  Fe(t, "https", SLASH_SCHEME, WORD, h);
  Fe(t, "ftp", SLASH_SCHEME, WORD, h);
  Fe(t, "ftps", SLASH_SCHEME, WORD, h);
  lt(SCHEME, {
    scheme: true,
    ascii: true
  }, groups);
  lt(SLASH_SCHEME, {
    slashscheme: true,
    ascii: true
  }, groups);
  n = n.sort((m, g) => {
    if (m[0] > g[0]) {
      return 1;
    }
    return -1;
  });
  for (let m = 0; m < n.length; m++) {
    const g = n[m][0];
    const b = n[m][1] ? {
      [Dm]: true
    } : {
      [Im]: true
    };
    if (g.indexOf("-") >= 0) {
      b[Bs] = true;
    } else if (Ne.test(g)) {
      if (Oe.test(g)) {
        b[en] = true;
      } else {
        b[Ls] = true;
      }
    } else {
      b[Ps] = true;
    }
    Uo(t, g, g, b);
  }
  Uo(t, "localhost", LOCALHOST, {
    ascii: true
  });
  t.jd = new oe(SYM);
  return {
    start: t,
    tokens: {
      groups,
      ...wc
    }
  };
}
function Cc(n, e) {
  const t = $m(e.replace(/[A-Z]/g, l => l.toLowerCase()));
  const t_length = t.length;
  const s = [];
  let e_1 = 0;
  let o = 0;
  while (o < t_length) {
    let l = n;
    let a = null;
    let c = 0;
    let u = null;
    let d = -1;
    let f = -1;
    while (o < t_length && (a = l.go(t[o]))) {
      l = a;
      if (l.accepts()) {
        d = 0;
        f = 0;
        u = l;
      } else if (d >= 0) {
        d += t[o].length;
        f++;
      }
      c += t[o].length;
      e_1 += t[o].length;
      o++;
    }
    e_1 -= d;
    o -= f;
    c -= d;
    s.push({
      t: u.t,
      v: e.slice(e_1 - c, e_1),
      s: e_1 - c,
      e: e_1
    });
  }
  return s;
}
function $m(n) {
  const e = [];
  const n_length = n.length;
  let r = 0;
  while (r < n_length) {
    let s = n.charCodeAt(r);
    let i;
    let o = s < 55296 || s > 56319 || r + 1 === n_length || (i = n.charCodeAt(r + 1)) < 56320 || i > 57343 ? n[r] : n.slice(r, r + 2);
    e.push(o);
    r += o.length;
  }
  return e;
}
function Fe(n, e, t, r, s) {
  let i;
  const e_length = e.length;
  for (let l = 0; l < e_length - 1; l++) {
    const a = e[l];
    if (n.j[a]) {
      i = n.j[a];
    } else {
      i = new oe(r);
      i.jr = s.slice();
      n.j[a] = i;
    }
    n = i;
  }
  i = new oe(t);
  i.jr = s.slice();
  n.j[e[e_length - 1]] = i;
  return i;
}
function Go(n) {
  const e = [];
  const t = [];
  let r = 0;
  let s = "0123456789";
  while (r < n.length) {
    let i = 0;
    while (s.indexOf(n[r + i]) >= 0) {
      i++;
    }
    if (i > 0) {
      e.push(t.join(""));
      for (let o = parseInt(n.substring(r, r + i), 10); o > 0; o--) {
        t.pop();
      }
      r += i;
    } else {
      t.push(n[r]);
      r++;
    }
  }
  return e;
}
const o_1 = {
  defaultProtocol: "http",
  events: null,
  format: Yo,
  formatHref: Yo,
  nl2br: false,
  tagName: "a",
  target: null,
  rel: null,
  validate: true,
  truncate: Infinity,
  className: null,
  attributes: null,
  ignoreTags: [],
  render: null
};
function vi(n, e = null) {
  let t = {
    ...o_1
  };
  if (n) {
    t = Object.assign(t, n instanceof vi ? n.o : n);
  }
  const t_ignoreTags = t.ignoreTags;
  const s = [];
  for (let i = 0; i < t_ignoreTags.length; i++) {
    s.push(t_ignoreTags[i].toUpperCase());
  }
  this.o = t;
  if (e) {
    this.defaultRender = e;
  }
  this.ignoreTags = s;
}
vi.prototype = {
  o: o_1,
  ignoreTags: [],
  defaultRender(n) {
    return n;
  },
  check(n) {
    return this.get("validate", n.toString(), n);
  },
  get(n, e, t) {
    const r = e != null;
    let s = this.o[n];
    return s && (typeof s === "object" ? (s = t.t in s ? s[t.t] : o_1[n], typeof s === "function" && r && (s = s(e, t))) : typeof s === "function" && r && (s = s(e, t.t, t)), s);
  },
  getObj(n, e, t) {
    let r = this.o[n];
    if (typeof r === "function" && e != null) {
      r = r(e, t.t, t);
    }
    return r;
  },
  render(n) {
    const e = n.render(this);
    return (this.get("render", null, n) || this.defaultRender)(e, n.t, n);
  }
};
function Yo(n) {
  return n;
}
function Mc(n, e) {
  this.t = "token";
  this.v = n;
  this.tk = e;
}
Mc.prototype = {
  isLink: false,
  toString() {
    return this.v;
  },
  toHref(n) {
    return this.toString();
  },
  toFormattedString(n) {
    const e = this.toString();
    const t = n.get("truncate", e, this);
    const r = n.get("format", e, this);
    if (t && r.length > t) {
      return `${r.substring(0, t)}…`;
    }
    return r;
  },
  toFormattedHref(n) {
    return n.get("formatHref", this.toHref(n.get("defaultProtocol")), this);
  },
  startIndex() {
    return this.tk[0].s;
  },
  endIndex() {
    return this.tk[this.tk.length - 1].e;
  },
  toObject(n = o_1.defaultProtocol) {
    return {
      type: this.t,
      value: this.toString(),
      isLink: this.isLink,
      href: this.toHref(n),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  toFormattedObject(n) {
    return {
      type: this.t,
      value: this.toFormattedString(n),
      isLink: this.isLink,
      href: this.toFormattedHref(n),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  validate(n) {
    return n.get("validate", this.toString(), this);
  },
  render(n) {
    const e = this;
    const t = this.toHref(n.get("defaultProtocol"));
    const r = n.get("formatHref", t, this);
    const tagName = n.get("tagName", t, e);
    const i = this.toFormattedString(n);
    const attributes = {};
    const l = n.get("className", t, e);
    const a = n.get("target", t, e);
    const c = n.get("rel", t, e);
    const u = n.getObj("attributes", t, e);
    const eventListeners = n.getObj("events", t, e);
    attributes.href = r;
    if (l) {
      attributes.class = l;
    }
    if (a) {
      attributes.target = a;
    }
    if (c) {
      attributes.rel = c;
    }
    if (u) {
      Object.assign(attributes, u);
    }
    return {
      tagName,
      attributes,
      content: i,
      eventListeners
    };
  }
};
function Hr(n, e) {
  class t extends Mc {
    constructor(s, i) {
      super(s, i);
      this.t = n;
    }
  }
  for (const r in e) {
    t.prototype[r] = e[r];
  }
  t.t = n;
  return t;
}
const Xo = Hr("email", {
  isLink: true,
  toHref() {
    return `mailto:${this.toString()}`;
  }
});
const Qo = Hr("text");
const Fm = Hr("nl");
const On = Hr("url", {
  isLink: true,
  toHref(n = o_1.defaultProtocol) {
    if (this.hasProtocol()) {
      return this.v;
    }
    return `${n}://${this.v}`;
  },
  hasProtocol() {
    const n = this.tk;
    return n.length >= 2 && n[0].t !== LOCALHOST && n[1].t === COLON;
  }
});
const he = n => new oe(n);
function Hm({
  groups
}) {
  const e = groups.domain.concat([AMPERSAND, ASTERISK, AT, BACKSLASH, BACKTICK, CARET, DOLLAR, EQUALS, HYPHEN, NUM, PERCENT, PIPE, PLUS, POUND, SLASH, SYM, TILDE, UNDERSCORE]);
  const t = [APOSTROPHE, COLON, COMMA, DOT, EXCLAMATION, PERCENT, QUERY, QUOTE, SEMI, OPENANGLEBRACKET, CLOSEANGLEBRACKET, OPENBRACE, CLOSEBRACE, CLOSEBRACKET, OPENBRACKET, OPENPAREN, CLOSEPAREN, FULLWIDTHLEFTPAREN, FULLWIDTHRIGHTPAREN, LEFTCORNERBRACKET, RIGHTCORNERBRACKET, LEFTWHITECORNERBRACKET, RIGHTWHITECORNERBRACKET, FULLWIDTHLESSTHAN, FULLWIDTHGREATERTHAN];
  const r = [AMPERSAND, APOSTROPHE, ASTERISK, BACKSLASH, BACKTICK, CARET, DOLLAR, EQUALS, HYPHEN, OPENBRACE, CLOSEBRACE, PERCENT, PIPE, PLUS, POUND, QUERY, SLASH, SYM, TILDE, UNDERSCORE];
  const s = he();
  const i = x(s, TILDE);
  D(i, r, i);
  D(i, groups.domain, i);
  const o = he();
  const l = he();
  const a = he();
  D(s, groups.domain, o);
  D(s, groups.scheme, l);
  D(s, groups.slashscheme, a);
  D(o, r, i);
  D(o, groups.domain, o);
  const c = x(o, AT);
  x(i, AT, c);
  x(l, AT, c);
  x(a, AT, c);
  const u = x(i, DOT);
  D(u, r, i);
  D(u, groups.domain, i);
  const d = he();
  D(c, groups.domain, d);
  D(d, groups.domain, d);
  const f = x(d, DOT);
  D(f, groups.domain, d);
  const h = he(Xo);
  D(f, groups.tld, h);
  D(f, groups.utld, h);
  x(c, LOCALHOST, h);
  const p = x(d, HYPHEN);
  x(p, HYPHEN, p);
  D(p, groups.domain, d);
  D(h, groups.domain, d);
  x(h, DOT, f);
  x(h, HYPHEN, p);
  const m = x(h, COLON);
  D(m, groups.numeric, Xo);
  const g = x(o, HYPHEN);
  const y = x(o, DOT);
  x(g, HYPHEN, g);
  D(g, groups.domain, o);
  D(y, r, i);
  D(y, groups.domain, o);
  const b = he(On);
  D(y, groups.tld, b);
  D(y, groups.utld, b);
  D(b, groups.domain, o);
  D(b, r, i);
  x(b, DOT, y);
  x(b, HYPHEN, g);
  x(b, AT, c);
  const C = x(b, COLON);
  const M = he(On);
  D(C, groups.numeric, M);
  const S = he(On);
  const A = he();
  D(S, e, S);
  D(S, t, A);
  D(A, e, S);
  D(A, t, A);
  x(b, SLASH, S);
  x(M, SLASH, S);
  const E = x(l, COLON);
  const I = x(a, COLON);
  const R = x(I, SLASH);
  const ae = x(R, SLASH);
  D(l, groups.domain, o);
  x(l, DOT, y);
  x(l, HYPHEN, g);
  D(a, groups.domain, o);
  x(a, DOT, y);
  x(a, HYPHEN, g);
  D(E, groups.domain, S);
  x(E, SLASH, S);
  x(E, QUERY, S);
  D(ae, groups.domain, S);
  D(ae, e, S);
  x(ae, SLASH, S);
  const St = [[OPENBRACE, CLOSEBRACE], [OPENBRACKET, CLOSEBRACKET], [OPENPAREN, CLOSEPAREN], [OPENANGLEBRACKET, CLOSEANGLEBRACKET], [FULLWIDTHLEFTPAREN, FULLWIDTHRIGHTPAREN], [LEFTCORNERBRACKET, RIGHTCORNERBRACKET], [LEFTWHITECORNERBRACKET, RIGHTWHITECORNERBRACKET], [FULLWIDTHLESSTHAN, FULLWIDTHGREATERTHAN]];
  for (let $e = 0; $e < St.length; $e++) {
    const [wt, fe] = St[$e];
    const ie = x(S, wt);
    x(A, wt, ie);
    x(ie, fe, S);
    const Ct = he(On);
    D(ie, e, Ct);
    const Vt = he();
    D(ie, t);
    D(Ct, e, Ct);
    D(Ct, t, Vt);
    D(Vt, e, Ct);
    D(Vt, t, Vt);
    x(Ct, fe, S);
    x(Vt, fe, S);
  }
  x(s, LOCALHOST, b);
  x(s, NL, Fm);
  return {
    start: s,
    tokens: wc
  };
}
function Vm(start, e, t) {
  let t_length = t.length;
  let s = 0;
  let i = [];
  let o = [];
  while (s < t_length) {
    let l = start;
    let a = null;
    let c = null;
    let u = 0;
    let d = null;
    let f = -1;
    while (s < t_length && !(a = l.go(t[s].t))) {
      o.push(t[s++]);
    }
    while (s < t_length && (c = a || l.go(t[s].t))) {
      a = null;
      l = c;
      if (l.accepts()) {
        f = 0;
        d = l;
      } else {
        f >= 0 && f++;
      }
      s++;
      u++;
    }
    if (f < 0) {
      s -= u;
      if (s < t_length) {
        o.push(t[s]);
        s++;
      }
    } else {
      if (o.length > 0) {
        i.push(ds(Qo, e, o));
        o = [];
      }
      s -= f;
      u -= f;
      const h = d.t;
      const p = t.slice(s - u, s);
      i.push(ds(h, e, p));
    }
  }
  if (o.length > 0) {
    i.push(ds(Qo, e, o));
  }
  return i;
}
function ds(n, e, t) {
  const r = t[0].s;
  const s = t[t.length - 1].e;
  const i = e.slice(r, s);
  return new n(i, t);
}
const jm = typeof console !== "undefined" && console && console.warn || (() => {});
const _m = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.";
const z = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: false
};
function Wm() {
  oe.groups = {};
  z.scanner = null;
  z.parser = null;
  z.tokenQueue = [];
  z.pluginQueue = [];
  z.customSchemes = [];
  z.initialized = false;
  return z;
}
function Zo(n, e = false) {
  if (z.initialized) {
    jm(`linkifyjs: already initialized - will not register custom scheme "${n}" ${_m}`);
  }
  if (!/^[0-9a-z]+(-[0-9a-z]+)*$/.test(n)) {
    throw new Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
  }
  z.customSchemes.push([n, e]);
}
function qm() {
  z.scanner = Bm(z.customSchemes);
  for (let n = 0; n < z.tokenQueue.length; n++) {
    z.tokenQueue[n][1]({
      scanner: z.scanner
    });
  }
  z.parser = Hm(z.scanner.tokens);
  for (let n = 0; n < z.pluginQueue.length; n++) {
    z.pluginQueue[n][1]({
      scanner: z.scanner,
      parser: z.parser
    });
  }
  z.initialized = true;
  return z;
}
function Ti(n) {
  if (!z.initialized) {
    qm();
  }
  return Vm(z.parser.start, n, Cc(z.scanner.start, n));
}
Ti.scan = Cc;
function Ec(n, e = null, t = null) {
  if (e && typeof e === "object") {
    if (t) {
      throw Error(`linkifyjs: Invalid link type ${e}; must be a string`);
    }
    t = e;
    e = null;
  }
  const r = new vi(t);
  const s = Ti(n);
  const i = [];
  for (const l of s) {
    if (l.isLink && (!e || l.t === e) && r.check(l)) {
      i.push(l.toFormattedObject(r));
    }
  }
  return i;
}
const Ai = "[\0-  \u1680\u180E\u2000-\u2029\u205F\u3000]";
const Km = new RegExp(Ai);
const Um = new RegExp(`${Ai}$`);
const Jm = new RegExp(Ai, "g");
function Gm(n) {
  if (n.length === 1) {
    return n[0].isLink;
  }
  if (n.length === 3 && n[1].isLink) {
    return ["()", "[]"].includes(n[0].value + n[2].value);
  }
  return false;
}
function Ym(n) {
  return new $({
    key: new a("autolink"),
    appendTransaction: (e, t, r) => {
      const s = e.some(c => c.docChanged) && !t.doc.eq(r.doc);
      const i = e.some(c => c.getMeta("preventAutolink"));
      if (!s || i) {
        return;
      }
      const {
        tr
      } = r;
      const l = Wa(t.doc, [...e]);
      Xa(l).forEach(({
        newRange
      }) => {
        const u = Hh(r.doc, newRange, h => h.isTextblock);
        let d;
        let f;
        if (u.length > 1) {
          d = u[0];
          f = r.doc.textBetween(d.pos, d.pos + d.node.nodeSize, undefined, " ");
        } else if (u.length) {
          const h = r.doc.textBetween(newRange.from, newRange.to, " ", " ");
          if (!Um.test(h)) {
            return;
          }
          d = u[0];
          f = r.doc.textBetween(d.pos, newRange.to, undefined, " ");
        }
        if (d && f) {
          const h = f.split(Km).filter(Boolean);
          if (h.length <= 0) {
            return false;
          }
          const p = h[h.length - 1];
          const m = d.pos + f.lastIndexOf(p);
          if (!p) {
            return false;
          }
          const g = Ti(p).map(y => y.toObject(n.defaultProtocol));
          if (!Gm(g)) {
            return false;
          }
          g.filter(y => y.isLink).map(y => ({
            ...y,
            from: m + y.start + 1,
            to: m + y.end + 1
          })).filter(y => {
            if (r.schema.marks.code) {
              return !r.doc.rangeHasMark(y.from, y.to, r.schema.marks.code);
            }
            return true;
          }).filter(y => n.validate(y.value)).filter(y => n.shouldAutoLink(y.value)).forEach(y => {
            if (!mi(y.from, y.to, r.doc).some(b => b.mark.type === n.type)) {
              tr.addMark(y.from, y.to, n.type.create({
                href: y.href
              }));
            }
          });
        }
      });
      if (tr.steps.length) {
        return tr;
      }
    }
  });
}
function Xm(n) {
  return new $({
    key: new a("handleClickLink"),
    props: {
      handleClick: (e, t, r) => {
        if (r.button !== 0 || !e.editable) {
          return false;
        }
        let o = false;
        if (n.enableClickSelection) {
          o = n.editor.commands.extendMarkRange(n.type.name);
        }
        if (n.openOnClick) {
          let l = null;
          if (r.target instanceof HTMLAnchorElement) {
            l = r.target;
          } else {
            let d = r.target;
            const f = [];
            while (d.nodeName !== "DIV") {
              f.push(d);
              d = d.parentNode;
            }
            l = f.find(h => h.nodeName === "A");
          }
          if (!l) {
            return o;
          }
          const a = Ya(e.state, n.type.name);
          const c = l?.href ?? a.href;
          const u = l?.target ?? a.target;
          if (l && c) {
            window.open(c, u);
            o = true;
          }
        }
        return o;
      }
    }
  });
}
function Qm(n) {
  return new $({
    key: new a("handlePasteLink"),
    props: {
      handlePaste: (e, t, r) => {
        const {
          shouldAutoLink
        } = n;
        const {
          state
        } = e;
        const {
          selection
        } = state;
        const {
          empty
        } = selection;
        if (empty) {
          return false;
        }
        let a = "";
        r.content.forEach(u => {
          a += u.textContent;
        });
        const c = Ec(a, {
          defaultProtocol: n.defaultProtocol
        }).find(u => u.isLink && u.value === a);
        if (!a || !c || shouldAutoLink !== undefined && !shouldAutoLink(c.href)) {
          return false;
        }
        return n.editor.commands.setMark(n.type, {
          href: c.href
        });
      }
    }
  });
}
function rt(n, protocols) {
  const t = ["http", "https", "ftp", "ftps", "mailto", "tel", "callto", "sms", "cid", "xmpp"];
  if (protocols) {
    protocols.forEach(r => {
      const s = typeof r === "string" ? r : r.scheme;
      if (s) {
        t.push(s);
      }
    });
  }
  return !n || n.replace(Jm, "").match(new RegExp(`^(?:(?:${t.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`, "i"));
}
const vc = bt.create({
  name: "link",
  priority: 1000,
  keepOnSplit: false,
  exitable: true,
  onCreate() {
    if (this.options.validate && !this.options.shouldAutoLink) {
      this.options.shouldAutoLink = this.options.validate;
      console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.");
    }
    this.options.protocols.forEach(n => {
      if (typeof n === "string") {
        Zo(n);
        return;
      }
      Zo(n.scheme, n.optionalSlashes);
    });
  },
  onDestroy() {
    Wm();
  },
  inclusive() {
    return this.options.autolink;
  },
  addOptions() {
    return {
      openOnClick: true,
      enableClickSelection: false,
      linkOnPaste: true,
      autolink: true,
      protocols: [],
      defaultProtocol: "http",
      HTMLAttributes: {
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        class: null
      },
      isAllowedUri: (n, e) => !!rt(n, e.protocols),
      validate: n => !!n,
      shouldAutoLink: n => !!n
    };
  },
  addAttributes() {
    return {
      href: {
        default: null,
        parseHTML(n) {
          return n.getAttribute("href");
        }
      },
      target: {
        default: this.options.HTMLAttributes.target
      },
      rel: {
        default: this.options.HTMLAttributes.rel
      },
      class: {
        default: this.options.HTMLAttributes.class
      }
    };
  },
  parseHTML() {
    return [{
      tag: "a[href]",
      getAttrs: n => {
        const e = n.getAttribute("href");
        if (!e || !this.options.isAllowedUri(e, {
          defaultValidate: t => !!rt(t, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        })) {
          return false;
        }
        return null;
      }
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    if (this.options.isAllowedUri(HTMLAttributes.href, {
      defaultValidate: e => !!rt(e, this.options.protocols),
      protocols: this.options.protocols,
      defaultProtocol: this.options.defaultProtocol
    })) {
      return ["a", m(this.options.HTMLAttributes, HTMLAttributes), 0];
    }
    return ["a", m(this.options.HTMLAttributes, {
      ...HTMLAttributes,
      href: ""
    }), 0];
  },
  markdownTokenName: "link",
  parseMarkdown: (n, e) => e.applyMark("link", e.parseInline(n.tokens || []), {
    href: n.href,
    title: n.title || null
  }),
  renderMarkdown: (n, e) => {
    const r = n.attrs?.href || "";
    return `[${e.renderChildren(n)}](${r})`;
  },
  addCommands() {
    return {
      setLink: n => ({
        chain
      }) => {
        const {
          href
        } = n;
        if (this.options.isAllowedUri(href, {
          defaultValidate: r => !!rt(r, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        })) {
          return chain().setMark(this.name, n).setMeta("preventAutolink", true).run();
        }
        return false;
      },
      toggleLink: n => ({
        chain
      }) => {
        const {
          href
        } = n || {};
        if (href && !this.options.isAllowedUri(href, {
          defaultValidate: r => !!rt(r, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        })) {
          return false;
        }
        return chain().toggleMark(this.name, n, {
          extendEmptyMarkRange: true
        }).setMeta("preventAutolink", true).run();
      },
      unsetLink: () => ({
        chain
      }) => chain().unsetMark(this.name, {
        extendEmptyMarkRange: true
      }).setMeta("preventAutolink", true).run()
    };
  },
  addPasteRules() {
    return [yt({
      find: n => {
        const e = [];
        if (n) {
          const {
            protocols,
            defaultProtocol
          } = this.options;
          const s = Ec(n).filter(i => i.isLink && this.options.isAllowedUri(i.value, {
            defaultValidate: o => !!rt(o, protocols),
            protocols,
            defaultProtocol
          }));
          if (s.length) {
            s.forEach(i => {
              if (this.options.shouldAutoLink(i.value)) {
                e.push({
                  text: i.value,
                  data: {
                    href: i.href
                  },
                  index: i.start
                });
              }
            });
          }
        }
        return e;
      },
      type: this.type,
      getAttributes: n => ({
        href: n.data?.href
      })
    })];
  },
  addProseMirrorPlugins() {
    const n = [];
    const {
      protocols,
      defaultProtocol
    } = this.options;
    if (this.options.autolink) {
      n.push(Ym({
        type: this.type,
        defaultProtocol: this.options.defaultProtocol,
        validate: r => this.options.isAllowedUri(r, {
          defaultValidate: s => !!rt(s, protocols),
          protocols,
          defaultProtocol
        }),
        shouldAutoLink: this.options.shouldAutoLink
      }));
    }
    n.push(Xm({
      type: this.type,
      editor: this.editor,
      openOnClick: this.options.openOnClick === "whenNotEditable" ? true : this.options.openOnClick,
      enableClickSelection: this.options.enableClickSelection
    }));
    if (this.options.linkOnPaste) {
      n.push(Qm({
        editor: this.editor,
        defaultProtocol: this.options.defaultProtocol,
        type: this.type,
        shouldAutoLink: this.options.shouldAutoLink
      }));
    }
    return n;
  }
});
const py = vc;
const eg = (n, e) => {
  for (var t in e) {
    Object.defineProperty(n, t, {
      get: e[t],
      enumerable: true
    });
  }
};
const tg = "listItem";
const el = "textStyle";
const tl = /^\s*([-+*])\s$/;
const Tc = de.create({
  name: "bulletList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: false,
      keepAttributes: false
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [{
      tag: "ul"
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["ul", m(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  markdownTokenName: "list",
  parseMarkdown: (n, e) => {
    if (n.type !== "list" || n.ordered) {
      return [];
    }
    return {
      type: "bulletList",
      content: n.items ? e.parseChildren(n.items) : []
    };
  },
  renderMarkdown: (n, e) => {
    if (n.content) {
      return e.renderChildren(n.content, `
`);
    }
    return "";
  },
  markdownOptions: {
    indentsContent: true
  },
  addCommands() {
    return {
      toggleBulletList: () => ({
        commands,
        chain
      }) => {
        if (this.options.keepAttributes) {
          return chain().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(tg, this.editor.getAttributes(el)).run();
        }
        return commands.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let n = Ft({
      find: tl,
      type: this.type
    });
    if (this.options.keepMarks || this.options.keepAttributes) {
      n = Ft({
        find: tl,
        type: this.type,
        keepMarks: this.options.keepMarks,
        keepAttributes: this.options.keepAttributes,
        getAttributes: () => this.editor.getAttributes(el),
        editor: this.editor
      });
    }
    return [n];
  }
});
const Ac = de.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: true,
  parseHTML() {
    return [{
      tag: "li"
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["li", m(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  markdownTokenName: "list_item",
  parseMarkdown: (n, e) => {
    if (n.type !== "list_item") {
      return [];
    }
    let t = [];
    if (n.tokens && n.tokens.length > 0) {
      if (n.tokens.some(s => s.type === "paragraph")) {
        t = e.parseChildren(n.tokens);
      } else {
        const s = n.tokens[0];
        if (s && s.type === "text" && s.tokens && s.tokens.length > 0) {
          t = [{
            type: "paragraph",
            content: e.parseInline(s.tokens)
          }];
          if (n.tokens.length > 1) {
            const o = n.tokens.slice(1);
            const l = e.parseChildren(o);
            t.push(...l);
          }
        } else {
          t = e.parseChildren(n.tokens);
        }
      }
    }
    if (t.length === 0) {
      t = [{
        type: "paragraph",
        content: []
      }];
    }
    return {
      type: "listItem",
      content: t
    };
  },
  renderMarkdown: (n, e, t) => renderNestedMarkdownContent(n, e, r => {
    if (r.parentType === "bulletList") {
      return "- ";
    }
    if (r.parentType === "orderedList") {
      return `${r.index + 1}. `;
    }
    return "- ";
  }, t),
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
});
const ng = {};
eg(ng, {
  findListItemPos: () => xn,
  getNextListDepth: () => Ni,
  handleBackspace: () => js,
  handleDelete: () => _s,
  hasListBefore: () => Nc,
  hasListItemAfter: () => rg,
  hasListItemBefore: () => Oc,
  listItemHasSubList: () => Dc,
  nextListIsDeeper: () => Ic,
  nextListIsHigher: () => Rc
});
var xn = (n, e) => {
  const {
    $from
  } = e.selection;
  const r = _(n, e.schema);
  let s = null;
  let $from_depth = $from.depth;
  let $from_pos = $from.pos;
  let l = null;
  while ($from_depth > 0 && l === null) {
    s = $from.node($from_depth);
    if (s.type === r) {
      l = $from_depth;
    } else {
      $from_depth -= 1;
      $from_pos -= 1;
    }
  }
  if (l === null) {
    return null;
  }
  return {
    $pos: e.doc.resolve($from_pos),
    depth: l
  };
};
var Ni = (n, e) => {
  const t = xn(n, e);
  if (!t) {
    return false;
  }
  const [, r] = Yh(e, n, t.$pos.pos + 4);
  return r;
};
var Nc = (n, e, t) => {
  const {
    $anchor
  } = n.selection;
  const s = Math.max(0, $anchor.pos - 2);
  const i = n.doc.resolve(s).node();
  return !(!i || !t.includes(i.type.name));
};
var Oc = (n, e) => {
  const {
    $anchor
  } = e.selection;
  const s = e.doc.resolve($anchor.pos - 2);
  return !(s.index() === 0 || s.nodeBefore?.type.name !== n);
};
var Dc = (n, e, t) => {
  if (!t) {
    return false;
  }
  const r = _(n, e.schema);
  let s = false;
  t.descendants(i => {
    if (i.type === r) {
      s = true;
    }
  });
  return s;
};
var js = (n, e, t) => {
  if (n.commands.undoInputRule()) {
    return true;
  }
  if (n.state.selection.from !== n.state.selection.to) {
    return false;
  }
  if (!Ze(n.state, e) && Nc(n.state, e, t)) {
    const {
      $anchor
    } = n.state.selection;
    const a = n.state.doc.resolve($anchor.before() - 1);
    const c = [];
    a.node().descendants((f, h) => {
      if (f.type.name === e) {
        c.push({
          node: f,
          pos: h
        });
      }
    });
    const u = c.at(-1);
    if (!u) {
      return false;
    }
    const d = n.state.doc.resolve(a.start() + u.pos + 1);
    return n.chain().cut({
      from: $anchor.start() - 1,
      to: $anchor.end() + 1
    }, d.end()).joinForward().run();
  }
  if (!Ze(n.state, e) || !ep(n.state)) {
    return false;
  }
  const r = xn(e, n.state);
  if (!r) {
    return false;
  }
  const i = n.state.doc.resolve(r.$pos.pos - 2).node(r.depth);
  const o = Dc(e, n.state, i);
  if (Oc(e, n.state) && !o) {
    return n.commands.joinItemBackward();
  }
  return n.chain().liftListItem(e).run();
};
var Ic = (n, e) => {
  const t = Ni(n, e);
  const r = xn(n, e);
  if (!r || !t) {
    return false;
  }
  return t > r.depth;
};
var Rc = (n, e) => {
  const t = Ni(n, e);
  const r = xn(n, e);
  if (!r || !t) {
    return false;
  }
  return t < r.depth;
};
var _s = (n, e) => {
  if (!Ze(n.state, e) || !Zh(n.state, e)) {
    return false;
  }
  const {
    selection
  } = n.state;
  const {
    $from,
    $to
  } = selection;
  if (!selection.empty && $from.sameParent($to)) {
    return false;
  }
  if (Ic(e, n.state)) {
    return n.chain().focus(n.state.selection.from + 4).lift(e).joinBackward().run();
  }
  if (Rc(e, n.state)) {
    return n.chain().joinForward().joinBackward().run();
  }
  return n.commands.joinItemForward();
};
var rg = (n, e) => {
  const {
    $anchor
  } = e.selection;
  const s = e.doc.resolve($anchor.pos - $anchor.parentOffset - 2);
  return !(s.index() === s.parent.childCount - 1 || s.nodeAfter?.type.name !== n);
};
const Pc = V.create({
  name: "listKeymap",
  addOptions() {
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
  addKeyboardShortcuts() {
    return {
      Delete: ({
        editor
      }) => {
        let e = false;
        this.options.listTypes.forEach(({
          itemName
        }) => {
          if (editor.state.schema.nodes[itemName] !== undefined && _s(editor, itemName)) {
            e = true;
          }
        });
        return e;
      },
      "Mod-Delete": ({
        editor
      }) => {
        let e = false;
        this.options.listTypes.forEach(({
          itemName
        }) => {
          if (editor.state.schema.nodes[itemName] !== undefined && _s(editor, itemName)) {
            e = true;
          }
        });
        return e;
      },
      Backspace: ({
        editor
      }) => {
        let e = false;
        this.options.listTypes.forEach(({
          itemName,
          wrapperNames
        }) => {
          if (editor.state.schema.nodes[itemName] !== undefined && js(editor, itemName, wrapperNames)) {
            e = true;
          }
        });
        return e;
      },
      "Mod-Backspace": ({
        editor
      }) => {
        let e = false;
        this.options.listTypes.forEach(({
          itemName,
          wrapperNames
        }) => {
          if (editor.state.schema.nodes[itemName] !== undefined && js(editor, itemName, wrapperNames)) {
            e = true;
          }
        });
        return e;
      }
    };
  }
});
const nl = /^(\s*)(\d+)\.\s+(.*)$/;
const sg = /^\s/;
function ig(n) {
  const e = [];
  let t = 0;
  let r = 0;
  while (t < n.length) {
    const s = n[t];
    const i = s.match(nl);
    if (!i) {
      break;
    }
    const [, o, l, a] = i;
    const indent = o.length;
    let u = a;
    let d = t + 1;
    const f = [s];
    while (d < n.length) {
      const h = n[d];
      if (h.match(nl)) {
        break;
      }
      if (h.trim() === "") {
        f.push(h);
        u += `
`;
        d += 1;
      } else if (h.match(sg)) {
        f.push(h);
        u += `
${h.slice(indent + 2)}`;
        d += 1;
      } else {
        break;
      }
    }
    e.push({
      indent,
      number: parseInt(l, 10),
      content: u.trim(),
      raw: f.join(`
`)
    });
    r = d;
    t = d;
  }
  return [e, r];
}
function Lc(n, e, t) {
  const s = [];
  let i = 0;
  while (i < n.length) {
    const o = n[i];
    if (o.indent === e) {
      const l = o.content.split(`
`);
      const raw = l[0]?.trim() || "";
      const c = [];
      if (raw) {
        c.push({
          type: "paragraph",
          raw,
          tokens: t.inlineTokens(raw)
        });
      }
      const u = l.slice(1).join(`
`).trim();
      if (u) {
        const h = t.blockTokens(u);
        c.push(...h);
      }
      let d = i + 1;
      const f = [];
      while (d < n.length && n[d].indent > e) {
        f.push(n[d]);
        d += 1;
      }
      if (f.length > 0) {
        const h = Math.min(...f.map(m => m.indent));
        const items = Lc(f, h, t);
        c.push({
          type: "list",
          ordered: true,
          start: f[0].number,
          items,
          raw: f.map(m => m.raw).join(`
`)
        });
      }
      s.push({
        type: "list_item",
        raw: o.raw,
        tokens: c
      });
      i = d;
    } else {
      i += 1;
    }
  }
  return s;
}
function og(items, e) {
  return items.map(t => {
    if (t.type !== "list_item") {
      return e.parseChildren([t])[0];
    }
    const r = [];
    if (t.tokens && t.tokens.length > 0) {
      t.tokens.forEach(s => {
        if (s.type === "paragraph" || s.type === "list" || s.type === "blockquote" || s.type === "code") {
          r.push(...e.parseChildren([s]));
        } else if (s.type === "text" && s.tokens) {
          const i = e.parseChildren([s]);
          r.push({
            type: "paragraph",
            content: i
          });
        } else {
          const i = e.parseChildren([s]);
          if (i.length > 0) {
            r.push(...i);
          }
        }
      });
    }
    return {
      type: "listItem",
      content: r
    };
  });
}
const lg = "listItem";
const rl = "textStyle";
const sl = /^(\d+)\.\s$/;
const zc = de.create({
  name: "orderedList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: false,
      keepAttributes: false
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  addAttributes() {
    return {
      start: {
        default: 1,
        parseHTML: n => {
          if (n.hasAttribute("start")) {
            return parseInt(n.getAttribute("start") || "", 10);
          }
          return 1;
        }
      },
      type: {
        default: null,
        parseHTML: n => n.getAttribute("type")
      }
    };
  },
  parseHTML() {
    return [{
      tag: "ol"
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    const {
      start,
      ...rest
    } = HTMLAttributes;
    if (start === 1) {
      return ["ol", m(this.options.HTMLAttributes, rest), 0];
    }
    return ["ol", m(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  markdownTokenName: "list",
  parseMarkdown: (n, e) => {
    if (n.type !== "list" || !n.ordered) {
      return [];
    }
    const t = n.start || 1;
    const r = n.items ? og(n.items, e) : [];
    if (t !== 1) {
      return {
        type: "orderedList",
        attrs: {
          start: t
        },
        content: r
      };
    }
    return {
      type: "orderedList",
      content: r
    };
  },
  renderMarkdown: (n, e) => {
    if (n.content) {
      return e.renderChildren(n.content, `
`);
    }
    return "";
  },
  markdownTokenizer: {
    name: "orderedList",
    level: "block",
    start: n => {
      const e = n.match(/^(\s*)(\d+)\.\s+/);
      const t = e?.index;
      if (t !== undefined) {
        return t;
      }
      return -1;
    },
    tokenize: (n, e, t) => {
      const s = n.split(`
`);
      const [i, o] = ig(s);
      if (i.length === 0) {
        return;
      }
      const items = Lc(i, 0, t);
      if (items.length === 0) {
        return undefined;
      }
      return {
        type: "list",
        ordered: true,
        start: i[0]?.number || 1,
        items,
        raw: s.slice(0, o).join(`
`)
      };
    }
  },
  markdownOptions: {
    indentsContent: true
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({
        commands,
        chain
      }) => {
        if (this.options.keepAttributes) {
          return chain().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(lg, this.editor.getAttributes(rl)).run();
        }
        return commands.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    let n = Ft({
      find: sl,
      type: this.type,
      getAttributes: e => ({
        start: +e[1]
      }),
      joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1]
    });
    if (this.options.keepMarks || this.options.keepAttributes) {
      n = Ft({
        find: sl,
        type: this.type,
        keepMarks: this.options.keepMarks,
        keepAttributes: this.options.keepAttributes,
        getAttributes: e => ({
          start: +e[1],
          ...this.editor.getAttributes(rl)
        }),
        joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1],
        editor: this.editor
      });
    }
    return [n];
  }
});
const ag = /^\s*(\[([( |x])?\])\s$/;
const cg = de.create({
  name: "taskItem",
  addOptions() {
    return {
      nested: false,
      HTMLAttributes: {},
      taskListTypeName: "taskList",
      a11y: undefined
    };
  },
  content() {
    if (this.options.nested) {
      return "paragraph block*";
    }
    return "paragraph+";
  },
  defining: true,
  addAttributes() {
    return {
      checked: {
        default: false,
        keepOnSplit: false,
        parseHTML: n => {
          const e = n.getAttribute("data-checked");
          return e === "" || e === "true";
        },
        renderHTML: n => ({
          "data-checked": n.checked
        })
      }
    };
  },
  parseHTML() {
    return [{
      tag: `li[data-type="${this.name}"]`,
      priority: 51
    }];
  },
  renderHTML({
    node,
    HTMLAttributes
  }) {
    return ["li", m(this.options.HTMLAttributes, HTMLAttributes, {
      "data-type": this.name
    }), ["label", ["input", {
      type: "checkbox",
      checked: node.attrs.checked ? "checked" : null
    }], ["span"]], ["div", 0]];
  },
  parseMarkdown: (n, e) => {
    const t = [];
    if (n.tokens && n.tokens.length > 0) {
      t.push(e.createNode("paragraph", {}, e.parseInline(n.tokens)));
    } else if (n.text) {
      t.push(e.createNode("paragraph", {}, [e.createNode("text", {
        text: n.text
      })]));
    } else {
      t.push(e.createNode("paragraph", {}, []));
    }
    if (n.nestedTokens && n.nestedTokens.length > 0) {
      const r = e.parseChildren(n.nestedTokens);
      t.push(...r);
    }
    return e.createNode("taskItem", {
      checked: n.checked || false
    }, t);
  },
  renderMarkdown: (n, e) => {
    var t;
    const s = `- [${(t = n.attrs) != null && t.checked ? "x" : " "}] `;
    return renderNestedMarkdownContent(n, e, s);
  },
  addKeyboardShortcuts() {
    const n = {
      Enter: () => this.editor.commands.splitListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
    if (this.options.nested) {
      return {
        ...n,
        Tab: () => this.editor.commands.sinkListItem(this.name)
      };
    }
    return n;
  },
  addNodeView() {
    return ({
      node,
      HTMLAttributes,
      getPos,
      editor
    }) => {
      const s = document.createElement("li");
      const i = document.createElement("label");
      const o = document.createElement("span");
      const l = document.createElement("input");
      const a = document.createElement("div");
      const c = u => {
        l.ariaLabel = this.options.a11y?.checkboxLabel?.(u, l.checked) || `Task item checkbox for ${u.textContent || "empty task item"}`;
      };
      c(node);
      i.contentEditable = "false";
      l.type = "checkbox";
      l.addEventListener("mousedown", u => u.preventDefault());
      l.addEventListener("change", u => {
        if (!editor.isEditable && !this.options.onReadOnlyChecked) {
          l.checked = !l.checked;
          return;
        }
        const {
          checked
        } = u.target;
        if (editor.isEditable && typeof getPos === "function") {
          editor.chain().focus(undefined, {
            scrollIntoView: false
          }).command(({
            tr
          }) => {
            const h = getPos();
            if (typeof h !== "number") {
              return false;
            }
            const p = tr.doc.nodeAt(h);
            tr.setNodeMarkup(h, undefined, {
              ...p?.attrs,
              checked
            });
            return true;
          }).run();
        }
        !editor.isEditable && this.options.onReadOnlyChecked && (this.options.onReadOnlyChecked(node, checked) || (l.checked = !l.checked));
      });
      Object.entries(this.options.HTMLAttributes).forEach(([u, d]) => {
        s.setAttribute(u, d);
      });
      s.dataset.checked = node.attrs.checked;
      l.checked = node.attrs.checked;
      i.append(l, o);
      s.append(i, a);
      Object.entries(HTMLAttributes).forEach(([u, d]) => {
        s.setAttribute(u, d);
      });
      return {
        dom: s,
        contentDOM: a,
        update: u => {
          if (u.type !== this.type) {
            return false;
          }
          s.dataset.checked = u.attrs.checked;
          l.checked = u.attrs.checked;
          c(u);
          return true;
        }
      };
    };
  },
  addInputRules() {
    return [Ft({
      find: ag,
      type: this.type,
      getAttributes: n => ({
        checked: n[n.length - 1] === "x"
      })
    })];
  }
});
const ug = de.create({
  name: "taskList",
  addOptions() {
    return {
      itemTypeName: "taskItem",
      HTMLAttributes: {}
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [{
      tag: `ul[data-type="${this.name}"]`,
      priority: 51
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["ul", m(this.options.HTMLAttributes, HTMLAttributes, {
      "data-type": this.name
    }), 0];
  },
  parseMarkdown: (n, e) => e.createNode("taskList", {}, e.parseChildren(n.items || [])),
  renderMarkdown: (n, e) => {
    if (n.content) {
      return e.renderChildren(n.content, `
`);
    }
    return "";
  },
  markdownTokenizer: {
    name: "taskList",
    level: "block",
    start(n) {
      const t = n.match(/^\s*[-+*]\s+\[([ xX])\]\s+/)?.index;
      if (t !== undefined) {
        return t;
      }
      return -1;
    },
    tokenize(n, e, t) {
      const customNestedParser = i => {
        const o = parseIndentedBlocks(i, {
          itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
          extractItemData: l => ({
            indentLevel: l[1].length,
            mainContent: l[4],
            checked: l[3].toLowerCase() === "x"
          }),
          createToken: (l, a) => ({
            type: "taskItem",
            raw: "",
            mainContent: l.mainContent,
            indentLevel: l.indentLevel,
            checked: l.checked,
            text: l.mainContent,
            tokens: t.inlineTokens(l.mainContent),
            nestedTokens: a
          }),
          customNestedParser
        }, t);
        if (o) {
          return [{
            type: "taskList",
            raw: o.raw,
            items: o.items
          }];
        }
        return t.blockTokens(i);
      };
      const s = parseIndentedBlocks(n, {
        itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
        extractItemData: i => ({
          indentLevel: i[1].length,
          mainContent: i[4],
          checked: i[3].toLowerCase() === "x"
        }),
        createToken: (i, o) => ({
          type: "taskItem",
          raw: "",
          mainContent: i.mainContent,
          indentLevel: i.indentLevel,
          checked: i.checked,
          text: i.mainContent,
          tokens: t.inlineTokens(i.mainContent),
          nestedTokens: o
        }),
        customNestedParser
      }, t);
      if (s) {
        return {
          type: "taskList",
          raw: s.raw,
          items: s.items
        };
      }
    }
  },
  markdownOptions: {
    indentsContent: true
  },
  addCommands() {
    return {
      toggleTaskList: () => ({
        commands
      }) => commands.toggleList(this.name, this.options.itemTypeName)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-9": () => this.editor.commands.toggleTaskList()
    };
  }
});
V.create({
  name: "listKit",
  addExtensions() {
    const n = [];
    if (this.options.bulletList !== false) {
      n.push(Tc.configure(this.options.bulletList));
    }
    if (this.options.listItem !== false) {
      n.push(Ac.configure(this.options.listItem));
    }
    if (this.options.listKeymap !== false) {
      n.push(Pc.configure(this.options.listKeymap));
    }
    if (this.options.orderedList !== false) {
      n.push(zc.configure(this.options.orderedList));
    }
    if (this.options.taskItem !== false) {
      n.push(cg.configure(this.options.taskItem));
    }
    if (this.options.taskList !== false) {
      n.push(ug.configure(this.options.taskList));
    }
    return n;
  }
});
const Cr = (n, e) => {
  if (n === "slot") {
    return 0;
  }
  if (n instanceof Function) {
    return n(e);
  }
  const {
    children,
    ...rest
  } = e ?? {};
  if (n === "svg") {
    throw new Error("SVG elements are not supported in the JSX syntax, use the array syntax instead");
  }
  return [n, rest, children];
};
const dg = /^\s*>\s$/;
const fg = de.create({
  name: "blockquote",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  group: "block",
  defining: true,
  parseHTML() {
    return [{
      tag: "blockquote"
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return Cr("blockquote", {
      ...m(this.options.HTMLAttributes, HTMLAttributes),
      children: Cr("slot", {})
    });
  },
  parseMarkdown: (n, e) => e.createNode("blockquote", undefined, e.parseChildren(n.tokens || [])),
  renderMarkdown: (n, e) => {
    if (!n.content) {
      return "";
    }
    const t = ">";
    const r = [];
    n.content.forEach(s => {
      const l = e.renderChildren([s]).split(`
`).map(a => {
        if (a.trim() === "") {
          return t;
        }
        return `${t} ${a}`;
      });
      r.push(l.join(`
`));
    });
    return r.join(`
${t}
`);
  },
  addCommands() {
    return {
      setBlockquote: () => ({
        commands
      }) => commands.wrapIn(this.name),
      toggleBlockquote: () => ({
        commands
      }) => commands.toggleWrap(this.name),
      unsetBlockquote: () => ({
        commands
      }) => commands.lift(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-b": () => this.editor.commands.toggleBlockquote()
    };
  },
  addInputRules() {
    return [Ft({
      find: dg,
      type: this.type
    })];
  }
});
const hg = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/;
const pg = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g;
const mg = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/;
const gg = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g;
const yg = bt.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [{
      tag: "strong"
    }, {
      tag: "b",
      getAttrs: n => n.style.fontWeight !== "normal" && null
    }, {
      style: "font-weight=400",
      clearMark: n => n.type.name === this.name
    }, {
      style: "font-weight",
      getAttrs: n => /^(bold(er)?|[5-9]\d{2,})$/.test(n) && null
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return Cr("strong", {
      ...m(this.options.HTMLAttributes, HTMLAttributes),
      children: Cr("slot", {})
    });
  },
  markdownTokenName: "strong",
  parseMarkdown: (n, e) => e.applyMark("bold", e.parseInline(n.tokens || [])),
  renderMarkdown: (n, e) => `**${e.renderChildren(n)}**`,
  addCommands() {
    return {
      setBold: () => ({
        commands
      }) => commands.setMark(this.name),
      toggleBold: () => ({
        commands
      }) => commands.toggleMark(this.name),
      unsetBold: () => ({
        commands
      }) => commands.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold()
    };
  },
  addInputRules() {
    return [$t({
      find: hg,
      type: this.type
    }), $t({
      find: mg,
      type: this.type
    })];
  },
  addPasteRules() {
    return [yt({
      find: pg,
      type: this.type
    }), yt({
      find: gg,
      type: this.type
    })];
  }
});
const kg = /(^|[^`])`([^`]+)`(?!`)$/;
const bg = /(^|[^`])`([^`]+)`(?!`)/g;
const xg = bt.create({
  name: "code",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  excludes: "_",
  code: true,
  exitable: true,
  parseHTML() {
    return [{
      tag: "code"
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["code", m(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  markdownTokenName: "codespan",
  parseMarkdown: (n, e) => e.applyMark("code", [{
    type: "text",
    text: n.text || ""
  }]),
  renderMarkdown: (n, e) => {
    if (n.content) {
      return `\`${e.renderChildren(n.content)}\``;
    }
    return "";
  },
  addCommands() {
    return {
      setCode: () => ({
        commands
      }) => commands.setMark(this.name),
      toggleCode: () => ({
        commands
      }) => commands.toggleMark(this.name),
      unsetCode: () => ({
        commands
      }) => commands.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-e": () => this.editor.commands.toggleCode()
    };
  },
  addInputRules() {
    return [$t({
      find: kg,
      type: this.type
    })];
  },
  addPasteRules() {
    return [yt({
      find: bg,
      type: this.type
    })];
  }
});
const tabSize = 4;
const Sg = /^```([a-z]+)?[\s\n]$/;
const wg = /^~~~([a-z]+)?[\s\n]$/;
const Cg = de.create({
  name: "codeBlock",
  addOptions() {
    return {
      languageClassPrefix: "language-",
      exitOnTripleEnter: true,
      exitOnArrowDown: true,
      defaultLanguage: null,
      enableTabIndentation: false,
      tabSize,
      HTMLAttributes: {}
    };
  },
  content: "text*",
  marks: "",
  group: "block",
  code: true,
  defining: true,
  addAttributes() {
    return {
      language: {
        default: this.options.defaultLanguage,
        parseHTML: n => {
          const {
            languageClassPrefix
          } = this.options;
          if (!languageClassPrefix) {
            return null;
          }
          const i = [...(n.firstElementChild?.classList || [])].filter(o => o.startsWith(languageClassPrefix)).map(o => o.replace(languageClassPrefix, ""))[0];
          return i || null;
        },
        rendered: false
      }
    };
  },
  parseHTML() {
    return [{
      tag: "pre",
      preserveWhitespace: "full"
    }];
  },
  renderHTML({
    node,
    HTMLAttributes
  }) {
    return ["pre", m(this.options.HTMLAttributes, HTMLAttributes), ["code", {
      class: node.attrs.language ? this.options.languageClassPrefix + node.attrs.language : null
    }, 0]];
  },
  markdownTokenName: "code",
  parseMarkdown: (n, e) => {
    if (n.raw?.startsWith("```") === false && n.codeBlockStyle !== "indented") {
      return [];
    }
    return e.createNode("codeBlock", {
      language: n.lang || null
    }, n.text ? [e.createTextNode(n.text)] : []);
  },
  renderMarkdown: (n, e) => {
    let r = "";
    const s = n.attrs?.language || "";
    if (n.content) {
      r = [`\`\`\`${s}`, e.renderChildren(n.content), "```"].join(`
`);
    } else {
      r = `\`\`\`${s}

\`\`\``;
    }
    return r;
  },
  addCommands() {
    return {
      setCodeBlock: n => ({
        commands
      }) => commands.setNode(this.name, n),
      toggleCodeBlock: n => ({
        commands
      }) => commands.toggleNode(this.name, "paragraph", n)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
      Backspace: () => {
        const {
          empty,
          $anchor
        } = this.editor.state.selection;
        const t = $anchor.pos === 1;
        if (!empty || $anchor.parent.type.name !== this.name) {
          return false;
        }
        if (t || !$anchor.parent.textContent.length) {
          return this.editor.commands.clearNodes();
        }
        return false;
      },
      Tab: ({
        editor
      }) => {
        if (!this.options.enableTabIndentation) {
          return false;
        }
        const t = this.options.tabSize ?? tabSize;
        const {
          state
        } = editor;
        const {
          selection
        } = state;
        const {
          $from,
          empty
        } = selection;
        if ($from.parent.type !== this.type) {
          return false;
        }
        const l = " ".repeat(t);
        if (empty) {
          return editor.commands.insertContent(l);
        }
        return editor.commands.command(({
          tr
        }) => {
          const {
            from,
            to
          } = selection;
          const h = state.doc.textBetween(from, to, `
`, `
`).split(`
`).map(p => l + p).join(`
`);
          tr.replaceWith(from, to, state.schema.text(h));
          return true;
        });
      },
      "Shift-Tab": ({
        editor
      }) => {
        if (!this.options.enableTabIndentation) {
          return false;
        }
        const t = this.options.tabSize ?? tabSize;
        const {
          state
        } = editor;
        const {
          selection
        } = state;
        const {
          $from,
          empty
        } = selection;
        if ($from.parent.type !== this.type) {
          return false;
        }
        if (empty) {
          return editor.commands.command(({
            tr
          }) => {
            const {
              pos
            } = $from;
            const u = $from.start();
            const d = $from.end();
            const h = state.doc.textBetween(u, d, `
`, `
`).split(`
`);
            let p = 0;
            let m = 0;
            const g = pos - u;
            for (let A = 0; A < h.length; A += 1) {
              if (m + h[A].length >= g) {
                p = A;
                break;
              }
              m += h[A].length + 1;
            }
            const b = h[p].match(/^ */)?.[0] || "";
            const C = Math.min(b.length, t);
            if (C === 0) {
              return true;
            }
            let M = u;
            for (let A = 0; A < p; A += 1) {
              M += h[A].length + 1;
            }
            tr.delete(M, M + C);
            if (pos - M <= C) {
              tr.setSelection(N.create(tr.doc, M));
            }
            return true;
          });
        }
        return editor.commands.command(({
          tr
        }) => {
          const {
            from,
            to
          } = selection;
          const f = state.doc.textBetween(from, to, `
`, `
`).split(`
`).map(h => {
            const m = h.match(/^ */)?.[0] || "";
            const g = Math.min(m.length, t);
            return h.slice(g);
          }).join(`
`);
          tr.replaceWith(from, to, state.schema.text(f));
          return true;
        });
      },
      Enter: ({
        editor
      }) => {
        if (!this.options.exitOnTripleEnter) {
          return false;
        }
        const {
          state
        } = editor;
        const {
          selection
        } = state;
        const {
          $from,
          empty
        } = selection;
        if (!empty || $from.parent.type !== this.type) {
          return false;
        }
        const i = $from.parentOffset === $from.parent.nodeSize - 2;
        const o = $from.parent.textContent.endsWith(`

`);
        if (!i || !o) {
          return false;
        }
        return editor.chain().command(({
          tr
        }) => {
          tr.delete($from.pos - 2, $from.pos);
          return true;
        }).exitCode().run();
      },
      ArrowDown: ({
        editor
      }) => {
        if (!this.options.exitOnArrowDown) {
          return false;
        }
        const {
          state
        } = editor;
        const {
          selection,
          doc
        } = state;
        const {
          $from,
          empty
        } = selection;
        if (!empty || $from.parent.type !== this.type || !($from.parentOffset === $from.parent.nodeSize - 2)) {
          return false;
        }
        const l = $from.after();
        if (l === undefined) {
          return false;
        }
        if (doc.nodeAt(l)) {
          return editor.commands.command(({
            tr
          }) => {
            tr.setSelection(O.near(doc.resolve(l)));
            return true;
          });
        }
        return editor.commands.exitCode();
      }
    };
  },
  addInputRules() {
    return [Is({
      find: Sg,
      type: this.type,
      getAttributes: n => ({
        language: n[1]
      })
    }), Is({
      find: wg,
      type: this.type,
      getAttributes: n => ({
        language: n[1]
      })
    })];
  },
  addProseMirrorPlugins() {
    return [new $({
      key: new a("codeBlockVSCodeHandler"),
      props: {
        handlePaste: (n, e) => {
          if (!e.clipboardData || this.editor.isActive(this.type.name)) {
            return false;
          }
          const t = e.clipboardData.getData("text/plain");
          const r = e.clipboardData.getData("vscode-editor-data");
          const s = r ? JSON.parse(r) : undefined;
          const language = s?.mode;
          if (!t || !language) {
            return false;
          }
          const {
            tr,
            schema
          } = n.state;
          const a = schema.text(t.replace(/\r\n?/g, `
`));
          tr.replaceSelectionWith(this.type.create({
            language
          }, a));
          if (tr.selection.$from.parent.type !== this.type) {
            tr.setSelection(N.near(tr.doc.resolve(Math.max(0, tr.selection.from - 2))));
          }
          tr.setMeta("paste", true);
          n.dispatch(tr);
          return true;
        }
      }
    })];
  }
});
const Mg = de.create({
  name: "doc",
  topNode: true,
  content: "block+",
  renderMarkdown: (n, e) => {
    if (n.content) {
      return e.renderChildren(n.content, `

`);
    }
    return "";
  }
});
const Eg = de.create({
  name: "hardBreak",
  markdownTokenName: "br",
  addOptions() {
    return {
      keepMarks: true,
      HTMLAttributes: {}
    };
  },
  inline: true,
  group: "inline",
  selectable: false,
  linebreakReplacement: true,
  parseHTML() {
    return [{
      tag: "br"
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["br", m(this.options.HTMLAttributes, HTMLAttributes)];
  },
  renderText() {
    return `
`;
  },
  renderMarkdown: () => `  
`,
  parseMarkdown: () => ({
    type: "hardBreak"
  }),
  addCommands() {
    return {
      setHardBreak: () => ({
        commands,
        chain,
        state,
        editor
      }) => commands.first([() => commands.exitCode(), () => commands.command(() => {
        const {
          selection,
          storedMarks
        } = state;
        if (selection.$from.parent.type.spec.isolating) {
          return false;
        }
        const {
          keepMarks
        } = this.options;
        const {
          splittableMarks
        } = editor.extensionManager;
        const a = storedMarks || selection.$to.parentOffset && selection.$from.marks();
        return chain().insertContent({
          type: this.name
        }).command(({
          tr,
          dispatch
        }) => {
          if (dispatch && a && keepMarks) {
            const d = a.filter(f => splittableMarks.includes(f.type.name));
            tr.ensureMarks(d);
          }
          return true;
        }).run();
      })])
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Enter": () => this.editor.commands.setHardBreak(),
      "Shift-Enter": () => this.editor.commands.setHardBreak()
    };
  }
});
const vg = de.create({
  name: "heading",
  addOptions() {
    return {
      levels: [1, 2, 3, 4, 5, 6],
      HTMLAttributes: {}
    };
  },
  content: "inline*",
  group: "block",
  defining: true,
  addAttributes() {
    return {
      level: {
        default: 1,
        rendered: false
      }
    };
  },
  parseHTML() {
    return this.options.levels.map(n => ({
      tag: `h${n}`,
      attrs: {
        level: n
      }
    }));
  },
  renderHTML({
    node,
    HTMLAttributes
  }) {
    return [`h${this.options.levels.includes(node.attrs.level) ? node.attrs.level : this.options.levels[0]}`, m(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  parseMarkdown: (n, e) => e.createNode("heading", {
    level: n.depth || 1
  }, e.parseInline(n.tokens || [])),
  renderMarkdown: (n, e) => {
    var t;
    const r = (t = n.attrs) != null && t.level ? parseInt(n.attrs.level, 10) : 1;
    const s = "#".repeat(r);
    if (n.content) {
      return `${s} ${e.renderChildren(n.content)}`;
    }
    return "";
  },
  addCommands() {
    return {
      setHeading: n => ({
        commands
      }) => {
        if (this.options.levels.includes(n.level)) {
          return commands.setNode(this.name, n);
        }
        return false;
      },
      toggleHeading: n => ({
        commands
      }) => {
        if (this.options.levels.includes(n.level)) {
          return commands.toggleNode(this.name, "paragraph", n);
        }
        return false;
      }
    };
  },
  addKeyboardShortcuts() {
    return this.options.levels.reduce((acc, level) => ({
      ...acc,
      [`Mod-Alt-${level}`]: () => this.editor.commands.toggleHeading({
        level
      })
    }), {});
  },
  addInputRules() {
    return this.options.levels.map(n => Is({
      find: new RegExp(`^(#{${Math.min(...this.options.levels)},${n}})\\s$`),
      type: this.type,
      getAttributes: {
        level: n
      }
    }));
  }
});
const Tg = de.create({
  name: "horizontalRule",
  addOptions() {
    return {
      HTMLAttributes: {},
      nextNodeType: "paragraph"
    };
  },
  group: "block",
  parseHTML() {
    return [{
      tag: "hr"
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["hr", m(this.options.HTMLAttributes, HTMLAttributes)];
  },
  markdownTokenName: "hr",
  parseMarkdown: (n, e) => e.createNode("horizontalRule"),
  renderMarkdown: () => "---",
  addCommands() {
    return {
      setHorizontalRule: () => ({
        chain,
        state
      }) => {
        if (!Hp(state, state.schema.nodes[this.name])) {
          return false;
        }
        const {
          selection
        } = state;
        const {
          $to
        } = selection;
        const s = chain();
        if (Qa(selection)) {
          s.insertContentAt($to.pos, {
            type: this.name
          });
        } else {
          s.insertContent({
            type: this.name
          });
        }
        return s.command(({
          state,
          tr,
          dispatch
        }) => {
          if (dispatch) {
            const {
              $to
            } = tr.selection;
            const c = $to.end();
            if ($to.nodeAfter) {
              if ($to.nodeAfter.isTextblock) {
                tr.setSelection(N.create(tr.doc, $to.pos + 1));
              } else if ($to.nodeAfter.isBlock) {
                tr.setSelection(C.create(tr.doc, $to.pos));
              } else {
                tr.setSelection(N.create(tr.doc, $to.pos));
              }
            } else {
              const u = state.schema.nodes[this.options.nextNodeType] || $to.parent.type.contentMatch.defaultType;
              const d = u?.create();
              if (d) {
                tr.insert(c, d);
                tr.setSelection(N.create(tr.doc, c + 1));
              }
            }
            tr.scrollIntoView();
          }
          return true;
        }).run();
      }
    };
  },
  addInputRules() {
    return [$p({
      find: /^(?:---|\u2014-|___\s|\*\*\*\s)$/,
      type: this.type
    })];
  }
});
const Ag = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/;
const Ng = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g;
const Og = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/;
const Dg = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g;
const Ig = bt.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [{
      tag: "em"
    }, {
      tag: "i",
      getAttrs: n => n.style.fontStyle !== "normal" && null
    }, {
      style: "font-style=normal",
      clearMark: n => n.type.name === this.name
    }, {
      style: "font-style=italic"
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["em", m(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({
        commands
      }) => commands.setMark(this.name),
      toggleItalic: () => ({
        commands
      }) => commands.toggleMark(this.name),
      unsetItalic: () => ({
        commands
      }) => commands.unsetMark(this.name)
    };
  },
  markdownTokenName: "em",
  parseMarkdown: (n, e) => e.applyMark("italic", e.parseInline(n.tokens || [])),
  renderMarkdown: (n, e) => `*${e.renderChildren(n)}*`,
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [$t({
      find: Ag,
      type: this.type
    }), $t({
      find: Og,
      type: this.type
    })];
  },
  addPasteRules() {
    return [yt({
      find: Ng,
      type: this.type
    }), yt({
      find: Dg,
      type: this.type
    })];
  }
});
export const a0 = de.create({
  name: "paragraph",
  priority: 1000,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [{
      tag: "p"
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["p", m(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  parseMarkdown: (n, e) => {
    const t = n.tokens || [];
    if (t.length === 1 && t[0].type === "image") {
      return e.parseChildren([t[0]]);
    }
    return e.createNode("paragraph", undefined, e.parseInline(t));
  },
  renderMarkdown: (n, e) => {
    if (!n || !Array.isArray(n.content)) {
      return "";
    }
    return e.renderChildren(n.content);
  },
  addCommands() {
    return {
      setParagraph: () => ({
        commands
      }) => commands.setNode(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
});
const Rg = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/;
const Pg = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g;
const Lg = bt.create({
  name: "strike",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [{
      tag: "s"
    }, {
      tag: "del"
    }, {
      tag: "strike"
    }, {
      style: "text-decoration",
      consuming: false,
      getAttrs: n => {
        if (n.includes("line-through")) {
          return {};
        }
        return false;
      }
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["s", m(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  markdownTokenName: "del",
  parseMarkdown: (n, e) => e.applyMark("strike", e.parseInline(n.tokens || [])),
  renderMarkdown: (n, e) => `~~${e.renderChildren(n)}~~`,
  addCommands() {
    return {
      setStrike: () => ({
        commands
      }) => commands.setMark(this.name),
      toggleStrike: () => ({
        commands
      }) => commands.toggleMark(this.name),
      unsetStrike: () => ({
        commands
      }) => commands.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-s": () => this.editor.commands.toggleStrike()
    };
  },
  addInputRules() {
    return [$t({
      find: Rg,
      type: this.type
    })];
  },
  addPasteRules() {
    return [yt({
      find: Pg,
      type: this.type
    })];
  }
});
const zg = de.create({
  name: "text",
  group: "inline",
  parseMarkdown: n => ({
    type: "text",
    text: n.text || ""
  }),
  renderMarkdown: n => n.text || ""
});
const Bg = bt.create({
  name: "underline",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [{
      tag: "u"
    }, {
      style: "text-decoration",
      consuming: false,
      getAttrs: n => {
        if (n.includes("underline")) {
          return {};
        }
        return false;
      }
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["u", m(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  parseMarkdown(n, e) {
    return e.applyMark(this.name || "underline", e.parseInline(n.tokens || []));
  },
  renderMarkdown(n, e) {
    return `++${e.renderChildren(n)}++`;
  },
  markdownTokenizer: {
    name: "underline",
    level: "inline",
    start(n) {
      return n.indexOf("++");
    },
    tokenize(n, e, t) {
      const s = /^(\+\+)([\s\S]+?)(\+\+)/.exec(n);
      if (!s) {
        return;
      }
      const i = s[2].trim();
      return {
        type: "underline",
        raw: s[0],
        text: i,
        tokens: t.inlineTokens(i)
      };
    }
  },
  addCommands() {
    return {
      setUnderline: () => ({
        commands
      }) => commands.setMark(this.name),
      toggleUnderline: () => ({
        commands
      }) => commands.toggleMark(this.name),
      unsetUnderline: () => ({
        commands
      }) => commands.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-u": () => this.editor.commands.toggleUnderline(),
      "Mod-U": () => this.editor.commands.toggleUnderline()
    };
  }
});
function $g(n = {}) {
  return new $({
    view(e) {
      return new Fg(e, n);
    }
  });
}
class Fg {
  constructor(e, t) {
    this.editorView = e;
    this.cursorPos = null;
    this.element = null;
    this.timeout = -1;
    this.width = t.width ?? 1;
    this.color = t.color === false ? undefined : t.color || "black";
    this.class = t.class;
    this.handlers = ["dragover", "dragend", "drop", "dragleave"].map(s => {
      let handler = o => {
        this[s](o);
      };
      e.dom.addEventListener(s, handler);
      return {
        name: s,
        handler
      };
    });
  }
  destroy() {
    this.handlers.forEach(({
      name,
      handler
    }) => this.editorView.dom.removeEventListener(name, handler));
  }
  update(e, t) {
    this.cursorPos != null && t.doc != e.state.doc && (this.cursorPos > e.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
  }
  setCursor(e) {
    if (e != this.cursorPos) {
      this.cursorPos = e;
      if (e == null) {
        this.element.parentNode.removeChild(this.element);
        this.element = null;
      } else {
        this.updateOverlay();
      }
    }
  }
  updateOverlay() {
    let e = this.editorView.state.doc.resolve(this.cursorPos);
    let t = !e.parent.inlineContent;
    let r;
    let dom = this.editorView.dom;
    let i = dom.getBoundingClientRect();
    let o = i.width / dom.offsetWidth;
    let l = i.height / dom.offsetHeight;
    if (t) {
      let d = e.nodeBefore;
      let f = e.nodeAfter;
      if (d || f) {
        let h = this.editorView.nodeDOM(this.cursorPos - (d ? d.nodeSize : 0));
        if (h) {
          let p = h.getBoundingClientRect();
          let m = d ? p.bottom : p.top;
          if (d && f) {
            m = (m + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2;
          }
          let g = this.width / 2 * l;
          r = {
            left: p.left,
            right: p.right,
            top: m - g,
            bottom: m + g
          };
        }
      }
    }
    if (!r) {
      let d = this.editorView.coordsAtPos(this.cursorPos);
      let f = this.width / 2 * o;
      r = {
        left: d.left - f,
        right: d.left + f,
        top: d.top,
        bottom: d.bottom
      };
    }
    let offsetParent = this.editorView.dom.offsetParent;
    if (!this.element) {
      this.element = offsetParent.appendChild(document.createElement("div"));
      if (this.class) {
        this.element.className = this.class;
      }
      this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;";
      if (this.color) {
        this.element.style.backgroundColor = this.color;
      }
    }
    this.element.classList.toggle("prosemirror-dropcursor-block", t);
    this.element.classList.toggle("prosemirror-dropcursor-inline", !t);
    let c;
    let u;
    if (!offsetParent || offsetParent == document.body && getComputedStyle(offsetParent).position == "static") {
      c = -pageXOffset;
      u = -pageYOffset;
    } else {
      let d = offsetParent.getBoundingClientRect();
      let f = d.width / offsetParent.offsetWidth;
      let h = d.height / offsetParent.offsetHeight;
      c = d.left - offsetParent.scrollLeft * f;
      u = d.top - offsetParent.scrollTop * h;
    }
    this.element.style.left = `${(r.left - c) / o}px`;
    this.element.style.top = `${(r.top - u) / l}px`;
    this.element.style.width = `${(r.right - r.left) / o}px`;
    this.element.style.height = `${(r.bottom - r.top) / l}px`;
  }
  scheduleRemoval(e) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.setCursor(null), e);
  }
  dragover(e) {
    if (!this.editorView.editable) {
      return;
    }
    let t = this.editorView.posAtCoords({
      left: e.clientX,
      top: e.clientY
    });
    let r = t && t.inside >= 0 && this.editorView.state.doc.nodeAt(t.inside);
    let s = r && r.type.spec.disableDropCursor;
    let i = typeof s === "function" ? s(this.editorView, t, e) : s;
    if (t && !i) {
      let o = t.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice) {
        let l = Pl(this.editorView.state.doc, o, this.editorView.dragging.slice);
        if (l != null) {
          o = l;
        }
      }
      this.setCursor(o);
      this.scheduleRemoval(5000);
    }
  }
  dragend() {
    this.scheduleRemoval(20);
  }
  drop() {
    this.scheduleRemoval(20);
  }
  dragleave(e) {
    if (!this.editorView.dom.contains(e.relatedTarget)) {
      this.setCursor(null);
    }
  }
}
class H extends O {
  constructor(e) {
    super(e, e);
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    if (H.valid(r)) {
      return new H(r);
    }
    return O.near(r);
  }
  content() {
    return w.empty;
  }
  eq(e) {
    return e instanceof H && e.head == this.head;
  }
  toJSON() {
    return {
      type: "gapcursor",
      pos: this.head
    };
  }
  static fromJSON(e, t) {
    if (typeof t.pos !== "number") {
      throw new RangeError("Invalid input for GapCursor.fromJSON");
    }
    return new H(e.resolve(t.pos));
  }
  getBookmark() {
    return new Oi(this.anchor);
  }
  static valid(e) {
    let e_parent = e.parent;
    if (e_parent.isTextblock || !Hg(e) || !Vg(e)) {
      return false;
    }
    let allowGapCursor = e_parent.type.spec.allowGapCursor;
    if (allowGapCursor != null) {
      return allowGapCursor;
    }
    let defaultType = e_parent.contentMatchAt(e.index()).defaultType;
    return defaultType && defaultType.isTextblock;
  }
  static findGapCursorFrom(e, t, r = false) {
    e: while (true) {
      if (!r && H.valid(e)) {
        return e;
      }
      let s = e.pos;
      let i = null;
      for (let o = e.depth;; o--) {
        let l = e.node(o);
        if (t > 0 ? e.indexAfter(o) < l.childCount : e.index(o) > 0) {
          i = l.child(t > 0 ? e.indexAfter(o) : e.index(o) - 1);
          break;
        } else if (o == 0) {
          return null;
        }
        s += t;
        let a = e.doc.resolve(s);
        if (H.valid(a)) {
          return a;
        }
      }
      while (true) {
        let o = t > 0 ? i.firstChild : i.lastChild;
        if (!o) {
          if (i.isAtom && !i.isText && !C.isSelectable(i)) {
            e = e.doc.resolve(s + i.nodeSize * t);
            r = false;
            continue e;
          }
          break;
        }
        i = o;
        s += t;
        let l = e.doc.resolve(s);
        if (H.valid(l)) {
          return l;
        }
      }
      return null;
    }
  }
}
H.prototype.visible = false;
H.findFrom = H.findGapCursorFrom;
O.jsonID("gapcursor", H);
class Oi {
  constructor(e) {
    this.pos = e;
  }
  map(e) {
    return new Oi(e.map(this.pos));
  }
  resolve(e) {
    let t = e.resolve(this.pos);
    if (H.valid(t)) {
      return new H(t);
    }
    return O.near(t);
  }
}
function $c(type) {
  return type.isAtom || type.spec.isolating || type.spec.createGapCursor;
}
function Hg(n) {
  for (let e = n.depth; e >= 0; e--) {
    let t = n.index(e);
    let r = n.node(e);
    if (t == 0) {
      if (r.type.spec.isolating) {
        return true;
      }
      continue;
    }
    for (let s = r.child(t - 1);; s = s.lastChild) {
      if (s.childCount == 0 && !s.inlineContent || $c(s.type)) {
        return true;
      }
      if (s.inlineContent) {
        return false;
      }
    }
  }
  return true;
}
function Vg(n) {
  for (let e = n.depth; e >= 0; e--) {
    let t = n.indexAfter(e);
    let r = n.node(e);
    if (t == r.childCount) {
      if (r.type.spec.isolating) {
        return true;
      }
      continue;
    }
    for (let s = r.child(t);; s = s.firstChild) {
      if (s.childCount == 0 && !s.inlineContent || $c(s.type)) {
        return true;
      }
      if (s.inlineContent) {
        return false;
      }
    }
  }
  return true;
}
function jg() {
  return new $({
    props: {
      decorations: Kg,
      createSelectionBetween(n, e, t) {
        if (e.pos == t.pos && H.valid(t)) {
          return new H(t);
        }
        return null;
      },
      handleClick,
      handleKeyDown,
      handleDOMEvents: {
        beforeinput
      }
    }
  });
}
const handleKeyDown = La({
  ArrowLeft: Dn("horiz", -1),
  ArrowRight: Dn("horiz", 1),
  ArrowUp: Dn("vert", -1),
  ArrowDown: Dn("vert", 1)
});
function Dn(n, e) {
  const t = n == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
  return (r, s, i) => {
    let r_selection = r.selection;
    let l = e > 0 ? r_selection.$to : r_selection.$from;
    let o_empty = r_selection.empty;
    if (r_selection instanceof N) {
      if (!i.endOfTextblock(t) || l.depth == 0) {
        return false;
      }
      o_empty = false;
      l = r.doc.resolve(e > 0 ? l.after() : l.before());
    }
    let c = H.findGapCursorFrom(l, e, o_empty);
    if (c) {
      if (s) {
        s(r.tr.setSelection(new H(c)));
      }
      return true;
    }
    return false;
  };
}
function handleClick(n, e, t) {
  if (!n || !n.editable) {
    return false;
  }
  let r = n.state.doc.resolve(e);
  if (!H.valid(r)) {
    return false;
  }
  let s = n.posAtCoords({
    left: t.clientX,
    top: t.clientY
  });
  if (s && s.inside > -1 && C.isSelectable(n.state.doc.nodeAt(s.inside))) {
    return false;
  }
  n.dispatch(n.state.tr.setSelection(new H(r)));
  return true;
}
function beforeinput(n, e) {
  if (e.inputType != "insertCompositionText" || !(n.state.selection instanceof H)) {
    return false;
  }
  let {
    $from
  } = n.state.selection;
  let r = $from.parent.contentMatchAt($from.index()).findWrapping(n.state.schema.nodes.text);
  if (!r) {
    return false;
  }
  let k_empty = k.empty;
  for (let o = r.length - 1; o >= 0; o--) {
    k_empty = k.from(r[o].createAndFill(null, k_empty));
  }
  let i = n.state.tr.replace($from.pos, $from.pos, new w(k_empty, 0, 0));
  i.setSelection(N.near(i.doc.resolve($from.pos + 1)));
  n.dispatch(i);
  return false;
}
function Kg(n) {
  if (!(n.selection instanceof H)) {
    return null;
  }
  let e = document.createElement("div");
  e.className = "ProseMirror-gapcursor";
  return B.create(n.doc, [ne.widget(n.selection.head, e, {
    key: "gapcursor"
  })]);
}
const Mr = 200;
class G {
  append(e) {
    if (e.length) {
      e = G.from(e);
      return !this.length && e || e.length < Mr && this.leafAppend(e) || this.length < Mr && e.leafPrepend(this) || this.appendInner(e);
    }
    return this;
  }
  prepend(e) {
    if (e.length) {
      return G.from(e).append(this);
    }
    return this;
  }
  appendInner(e) {
    return new Ug(this, e);
  }
  slice(e = 0, t = this.length) {
    if (e >= t) {
      return G.empty;
    }
    return this.sliceInner(Math.max(0, e), Math.min(this.length, t));
  }
  get(e) {
    if (!(e < 0 || e >= this.length)) {
      return this.getInner(e);
    }
  }
  forEach(e, t = 0, r = this.length) {
    if (t <= r) {
      this.forEachInner(e, t, r, 0);
    } else {
      this.forEachInvertedInner(e, t, r, 0);
    }
  }
  map(e, t = 0, r = this.length) {
    const s = [];
    this.forEach((i, o) => s.push(e(i, o)), t, r);
    return s;
  }
  static from(e) {
    if (e instanceof G) {
      return e;
    }
    if (e && e.length) {
      return new Fc(e);
    }
    return G.empty;
  }
}
var Fc = function (n) {
  class e extends n {
    constructor(r) {
      super();
      this.values = r;
    }
    flatten() {
      return this.values;
    }
    sliceInner(s, i) {
      if (s == 0 && i == this.length) {
        return this;
      }
      return new e(this.values.slice(s, i));
    }
    getInner(s) {
      return this.values[s];
    }
    forEachInner(s, i, o, l) {
      for (let a = i; a < o; a++) {
        if (s(this.values[a], l + a) === false) {
          return false;
        }
      }
    }
    forEachInvertedInner(s, i, o, l) {
      for (let a = i - 1; a >= o; a--) {
        if (s(this.values[a], l + a) === false) {
          return false;
        }
      }
    }
    leafAppend(s) {
      if (this.length + s.length <= Mr) {
        return new e(this.values.concat(s.flatten()));
      }
    }
    leafPrepend(s) {
      if (this.length + s.length <= Mr) {
        return new e(s.flatten().concat(this.values));
      }
    }
  }
  if (n) {
    e.__proto__ = n;
  }
  const t = {
    length: {
      configurable: true
    },
    depth: {
      configurable: true
    }
  };
  t.length.get = function () {
    return this.values.length;
  };
  t.depth.get = () => 0;
  Object.defineProperties(e.prototype, t);
  return e;
}(G);
G.empty = new Fc([]);
var Ug = function (n) {
  class e extends n {
    constructor(t, r) {
      super();
      this.left = t;
      this.right = r;
      this.length = t.length + r.length;
      this.depth = Math.max(t.depth, r.depth) + 1;
    }
    flatten() {
      return this.left.flatten().concat(this.right.flatten());
    }
    getInner(r) {
      if (r < this.left.length) {
        return this.left.get(r);
      }
      return this.right.get(r - this.left.length);
    }
    forEachInner(r, s, i, o) {
      const length = this.left.length;
      if (s < length && this.left.forEachInner(r, s, Math.min(i, length), o) === false || i > length && this.right.forEachInner(r, Math.max(s - length, 0), Math.min(this.length, i) - length, o + length) === false) {
        return false;
      }
    }
    forEachInvertedInner(r, s, i, o) {
      const length = this.left.length;
      if (s > length && this.right.forEachInvertedInner(r, s - length, Math.max(i, length) - length, o + length) === false || i < length && this.left.forEachInvertedInner(r, Math.min(s, length), i, o) === false) {
        return false;
      }
    }
    sliceInner(r, s) {
      if (r == 0 && s == this.length) {
        return this;
      }
      const length = this.left.length;
      if (s <= length) {
        return this.left.slice(r, s);
      }
      if (r >= length) {
        return this.right.slice(r - length, s - length);
      }
      return this.left.slice(r, length).append(this.right.slice(0, s - length));
    }
    leafAppend(r) {
      const s = this.right.leafAppend(r);
      if (s) {
        return new e(this.left, s);
      }
    }
    leafPrepend(r) {
      const s = this.left.leafPrepend(r);
      if (s) {
        return new e(s, this.right);
      }
    }
    appendInner(r) {
      if (this.left.depth >= Math.max(this.right.depth, r.depth) + 1) {
        return new e(this.left, new e(this.right, r));
      }
      return new e(this, r);
    }
  }
  if (n) {
    e.__proto__ = n;
  }
  return e;
}(G);
const Jg = 500;
class be {
  constructor(e, t) {
    this.items = e;
    this.eventCount = t;
  }
  popEvent(e, t) {
    if (this.eventCount == 0) {
      return null;
    }
    let length = this.items.length;
    for (;; length--) {
      if (this.items.get(length - 1).selection) {
        --length;
        break;
      }
    }
    let s;
    let i;
    if (t) {
      s = this.remapping(length, this.items.length);
      i = s.maps.length;
    }
    let transform = e.tr;
    let selection;
    let remaining;
    let c = [];
    let u = [];
    this.items.forEach((d, f) => {
      if (!d.step) {
        if (!s) {
          s = this.remapping(length, f + 1);
          i = s.maps.length;
        }
        i--;
        u.push(d);
        return;
      }
      if (s) {
        u.push(new Me(d.map));
        let h = d.step.map(s.slice(i));
        let p;
        if (h && transform.maybeStep(h).doc) {
          p = transform.mapping.maps[transform.mapping.maps.length - 1];
          c.push(new Me(p, undefined, undefined, c.length + u.length));
        }
        i--;
        if (p) {
          s.appendMap(p, i);
        }
      } else {
        transform.maybeStep(d.step);
      }
      if (d.selection) {
        selection = s ? d.selection.map(s.slice(i)) : d.selection;
        remaining = new be(this.items.slice(0, length).append(u.reverse().concat(c)), this.eventCount - 1);
        return false;
      }
    }, this.items.length, 0);
    return {
      remaining,
      transform,
      selection
    };
  }
  addTransform(e, t, r, s) {
    let i = [];
    let eventCount = this.eventCount;
    let items = this.items;
    let a = !s && items.length ? items.get(items.length - 1) : null;
    for (let u = 0; u < e.steps.length; u++) {
      let d = e.steps[u].invert(e.docs[u]);
      let f = new Me(e.mapping.maps[u], d, t);
      let h;
      if (h = a && a.merge(f)) {
        f = h;
        if (u) {
          i.pop();
        } else {
          items = items.slice(0, items.length - 1);
        }
      }
      i.push(f);
      if (t) {
        eventCount++;
        t = undefined;
      }
      if (!s) {
        a = f;
      }
    }
    let c = eventCount - r.depth;
    if (c > Yg) {
      items = Gg(items, c);
      eventCount -= c;
    }
    return new be(items.append(i), eventCount);
  }
  remapping(e, t) {
    let r = new cn();
    this.items.forEach((s, i) => {
      let o = s.mirrorOffset != null && i - s.mirrorOffset >= e ? r.maps.length - s.mirrorOffset : undefined;
      r.appendMap(s.map, o);
    }, e, t);
    return r;
  }
  addMaps(e) {
    if (this.eventCount == 0) {
      return this;
    }
    return new be(this.items.append(e.map(t => new Me(t))), this.eventCount);
  }
  rebased(e, t) {
    if (!this.eventCount) {
      return this;
    }
    let r = [];
    let s = Math.max(0, this.items.length - t);
    let e_mapping = e.mapping;
    let length = e.steps.length;
    let eventCount = this.eventCount;
    this.items.forEach(f => {
      f.selection && eventCount--;
    }, s);
    let a = t;
    this.items.forEach(f => {
      let h = e_mapping.getMirror(--a);
      if (h == null) {
        return;
      }
      length = Math.min(length, h);
      let p = e_mapping.maps[h];
      if (f.step) {
        let m = e.steps[h].invert(e.docs[h]);
        let g = f.selection && f.selection.map(e_mapping.slice(a + 1, h));
        g && eventCount++;
        r.push(new Me(p, m, g));
      } else {
        r.push(new Me(p));
      }
    }, s);
    let c = [];
    for (let f = t; f < length; f++) {
      c.push(new Me(e_mapping.maps[f]));
    }
    let u = this.items.slice(0, s).append(c).append(r);
    let d = new be(u, eventCount);
    if (d.emptyItemCount() > Jg) {
      d = d.compress(this.items.length - r.length);
    }
    return d;
  }
  emptyItemCount() {
    let e = 0;
    this.items.forEach(t => {
      t.step || e++;
    });
    return e;
  }
  compress(e = this.items.length) {
    let t = this.remapping(0, e);
    let length = t.maps.length;
    let s = [];
    let i = 0;
    this.items.forEach((o, l) => {
      if (l >= e) {
        s.push(o);
        o.selection && i++;
      } else if (o.step) {
        let a = o.step.map(t.slice(length));
        let c = a && a.getMap();
        length--;
        if (c) {
          t.appendMap(c, length);
        }
        if (a) {
          let u = o.selection && o.selection.map(t.slice(length));
          u && i++;
          let d = new Me(c.invert(), a, u);
          let f;
          let h = s.length - 1;
          if (f = s.length && s[h].merge(d)) {
            s[h] = f;
          } else {
            s.push(d);
          }
        }
      } else {
        o.map && length--;
      }
    }, this.items.length, 0);
    return new be(G.from(s.reverse()), i);
  }
}
be.empty = new be(G.empty, 0);
function Gg(items, e) {
  let t;
  items.forEach((r, s) => {
    if (r.selection && e-- == 0) {
      t = s;
      return false;
    }
  });
  return items.slice(t);
}
class Me {
  constructor(e, t, r, s) {
    this.map = e;
    this.step = t;
    this.selection = r;
    this.mirrorOffset = s;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let t = e.step.merge(this.step);
      if (t) {
        return new Me(t.getMap().invert(), t, this.selection);
      }
    }
  }
}
class _e {
  constructor(e, t, r, s, i) {
    this.done = e;
    this.undone = t;
    this.prevRanges = r;
    this.prevTime = s;
    this.prevComposition = i;
  }
}
const Yg = 20;
function Xg(n, e, t, config) {
  let s = t.getMeta(ft);
  let i;
  if (s) {
    return s.historyState;
  }
  if (t.getMeta(Hc)) {
    n = new _e(n.done, n.undone, null, 0, -1);
  }
  let o = t.getMeta("appendedTransaction");
  if (t.steps.length == 0) {
    return n;
  }
  if (o && o.getMeta(ft)) {
    if (o.getMeta(ft).redo) {
      return new _e(n.done.addTransform(t, undefined, config, zn(e)), n.undone, il(t.mapping.maps), n.prevTime, n.prevComposition);
    }
    return new _e(n.done, n.undone.addTransform(t, undefined, config, zn(e)), null, n.prevTime, n.prevComposition);
  }
  if (t.getMeta("addToHistory") !== false && !(o && o.getMeta("addToHistory") === false)) {
    let l = t.getMeta("composition");
    let a = n.prevTime == 0 || !o && n.prevComposition != l && (n.prevTime < (t.time || 0) - config.newGroupDelay || !Qg(t, n.prevRanges));
    let c = o ? hs(n.prevRanges, t.mapping) : il(t.mapping.maps);
    return new _e(n.done.addTransform(t, a ? e.selection.getBookmark() : undefined, config, zn(e)), be.empty, c, t.time, l ?? n.prevComposition);
  } else {
    if (i = t.getMeta("rebased")) {
      return new _e(n.done.rebased(t, i), n.undone.rebased(t, i), hs(n.prevRanges, t.mapping), n.prevTime, n.prevComposition);
    }
    return new _e(n.done.addMaps(t.mapping.maps), n.undone.addMaps(t.mapping.maps), hs(n.prevRanges, t.mapping), n.prevTime, n.prevComposition);
  }
}
function Qg(n, prevRanges) {
  if (!prevRanges) {
    return false;
  }
  if (!n.docChanged) {
    return true;
  }
  let t = false;
  n.mapping.maps[0].forEach((r, s) => {
    for (let i = 0; i < prevRanges.length; i += 2) {
      if (r <= prevRanges[i + 1] && s >= prevRanges[i]) {
        t = true;
      }
    }
  });
  return t;
}
function il(maps) {
  let e = [];
  for (let t = maps.length - 1; t >= 0 && e.length == 0; t--) {
    maps[t].forEach((r, s, i, o) => e.push(i, o));
  }
  return e;
}
function hs(prevRanges, mapping) {
  if (!prevRanges) {
    return null;
  }
  let t = [];
  for (let r = 0; r < prevRanges.length; r += 2) {
    let s = mapping.map(prevRanges[r], 1);
    let i = mapping.map(prevRanges[r + 1], -1);
    if (s <= i) {
      t.push(s, i);
    }
  }
  return t;
}
function Zg(n, e, redo) {
  let r = zn(e);
  let config = ft.get(e).spec.config;
  let i = (redo ? n.undone : n.done).popEvent(e, r);
  if (!i) {
    return null;
  }
  let o = i.selection.resolve(i.transform.doc);
  let l = (redo ? n.done : n.undone).addTransform(i.transform, e.selection.getBookmark(), config, r);
  let historyState = new _e(redo ? l : i.remaining, redo ? i.remaining : l, null, 0, -1);
  return i.transform.setSelection(o).setMeta(ft, {
    redo,
    historyState
  });
}
let ps = false;
let ol = null;
function zn({
  plugins
}) {
  if (ol != plugins) {
    ps = false;
    ol = plugins;
    for (let t = 0; t < plugins.length; t++) {
      if (plugins[t].spec.historyPreserveItems) {
        ps = true;
        break;
      }
    }
  }
  return ps;
}
function gy(n) {
  return n.setMeta(Hc, true);
}
const ft = new a("history");
const Hc = new a("closeHistory");
function ey(config = {}) {
  config = {
    depth: config.depth || 100,
    newGroupDelay: config.newGroupDelay || 500
  };
  return new $({
    key: ft,
    state: {
      init() {
        return new _e(be.empty, be.empty, null, 0, -1);
      },
      apply(e, t, r) {
        return Xg(t, r, e, config);
      }
    },
    config,
    props: {
      handleDOMEvents: {
        beforeinput(e, t) {
          let t_inputType = t.inputType;
          let s = t_inputType == "historyUndo" ? jc : t_inputType == "historyRedo" ? _c : null;
          if (!s || !e.editable) {
            return false;
          }
          t.preventDefault();
          return s(e.state, e.dispatch);
        }
      }
    }
  });
}
function Vc(n, e) {
  return (t, r) => {
    let s = ft.getState(t);
    if (!s || (n ? s.undone : s.done).eventCount == 0) {
      return false;
    }
    if (r) {
      let i = Zg(s, t, n);
      if (i) {
        r(e ? i.scrollIntoView() : i);
      }
    }
    return true;
  };
}
const jc = Vc(false, true);
const _c = Vc(true, true);
V.create({
  name: "characterCount",
  addOptions() {
    return {
      limit: null,
      mode: "textSize",
      textCounter: n => n.length,
      wordCounter: n => n.split(" ").filter(e => e !== "").length
    };
  },
  addStorage() {
    return {
      characters: () => 0,
      words: () => 0
    };
  },
  onBeforeCreate() {
    this.storage.characters = n => {
      const e = n?.node || this.editor.state.doc;
      if ((n?.mode || this.options.mode) === "textSize") {
        const r = e.textBetween(0, e.content.size, undefined, " ");
        return this.options.textCounter(r);
      }
      return e.nodeSize;
    };
    this.storage.words = n => {
      const e = n?.node || this.editor.state.doc;
      const t = e.textBetween(0, e.content.size, " ", " ");
      return this.options.wordCounter(t);
    };
  },
  addProseMirrorPlugins() {
    let n = false;
    return [new $({
      key: new a("characterCount"),
      appendTransaction: (e, t, r) => {
        if (n) {
          return;
        }
        const limit = this.options.limit;
        if (limit == null || limit === 0) {
          n = true;
          return;
        }
        const i = this.storage.characters({
          node: r.doc
        });
        if (i > limit) {
          const o = i - limit;
          const l = 0;
          const a = o;
          console.warn(`[CharacterCount] Initial content exceeded limit of ${limit} characters. Content was automatically trimmed.`);
          const c = r.tr.deleteRange(l, a);
          n = true;
          return c;
        }
        n = true;
      },
      filterTransaction: (e, t) => {
        const limit = this.options.limit;
        if (!e.docChanged || limit === 0 || limit === null || limit === undefined) {
          return true;
        }
        const s = this.storage.characters({
          node: t.doc
        });
        const i = this.storage.characters({
          node: e.doc
        });
        if (i <= limit || s > limit && i > limit && i <= s) {
          return true;
        }
        if (s > limit && i > limit && i > s || !e.getMeta("paste")) {
          return false;
        }
        const pos = e.selection.$head.pos;
        const a = i - limit;
        const c = pos - a;
        e.deleteRange(c, pos);
        return !(this.storage.characters({
          node: e.doc
        }) > limit);
      }
    })];
  }
});
const ty = V.create({
  name: "dropCursor",
  addOptions() {
    return {
      color: "currentColor",
      width: 1,
      class: undefined
    };
  },
  addProseMirrorPlugins() {
    return [$g(this.options)];
  }
});
V.create({
  name: "focus",
  addOptions() {
    return {
      className: "has-focus",
      mode: "all"
    };
  },
  addProseMirrorPlugins() {
    return [new $({
      key: new a("focus"),
      props: {
        decorations: ({
          doc,
          selection
        }) => {
          const {
            isEditable,
            isFocused
          } = this.editor;
          const {
            anchor
          } = selection;
          const i = [];
          if (!isEditable || !isFocused) {
            return B.create(doc, []);
          }
          let o = 0;
          if (this.options.mode === "deepest") {
            doc.descendants((a, c) => {
              if (a.isText) {
                return;
              }
              if (!(anchor >= c && anchor <= c + a.nodeSize - 1)) {
                return false;
              }
              o += 1;
            });
          }
          let l = 0;
          doc.descendants((a, c) => {
            if (a.isText || !(anchor >= c && anchor <= c + a.nodeSize - 1)) {
              return false;
            }
            l += 1;
            if (this.options.mode === "deepest" && o - l > 0 || this.options.mode === "shallowest" && l > 1) {
              return this.options.mode === "deepest";
            }
            i.push(ne.node(c, c + a.nodeSize, {
              class: this.options.className
            }));
          });
          return B.create(doc, i);
        }
      }
    })];
  }
});
const ny = V.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [jg()];
  },
  extendNodeSchema(n) {
    const t = {
      name: n.name,
      options: n.options,
      storage: n.storage
    };
    return {
      allowGapCursor: P(T(n, "allowGapCursor", t)) ?? null
    };
  }
});
const yy = V.create({
  name: "placeholder",
  addOptions() {
    return {
      emptyEditorClass: "is-editor-empty",
      emptyNodeClass: "is-empty",
      placeholder: "Write something …",
      showOnlyWhenEditable: true,
      showOnlyCurrent: true,
      includeChildren: false
    };
  },
  addProseMirrorPlugins() {
    return [new $({
      key: new a("placeholder"),
      props: {
        decorations: ({
          doc,
          selection
        }) => {
          const t = this.editor.isEditable || !this.options.showOnlyWhenEditable;
          const {
            anchor
          } = selection;
          const s = [];
          if (!t) {
            return null;
          }
          const isEmpty = this.editor.isEmpty;
          doc.descendants((o, l) => {
            const hasAnchor = anchor >= l && anchor <= l + o.nodeSize;
            const c = !o.isLeaf && Br(o);
            if ((hasAnchor || !this.options.showOnlyCurrent) && c) {
              const u = [this.options.emptyNodeClass];
              if (isEmpty) {
                u.push(this.options.emptyEditorClass);
              }
              const d = ne.node(l, l + o.nodeSize, {
                class: u.join(" "),
                "data-placeholder": typeof this.options.placeholder === "function" ? this.options.placeholder({
                  editor: this.editor,
                  node: o,
                  pos: l,
                  hasAnchor
                }) : this.options.placeholder
              });
              s.push(d);
            }
            return this.options.includeChildren;
          });
          return B.create(doc, s);
        }
      }
    })];
  }
});
V.create({
  name: "selection",
  addOptions() {
    return {
      className: "selection"
    };
  },
  addProseMirrorPlugins() {
    const {
      editor,
      options
    } = this;
    return [new $({
      key: new a("selection"),
      props: {
        decorations(t) {
          if (t.selection.empty || editor.isFocused || !editor.isEditable || Qa(t.selection) || editor.view.dragging) {
            return null;
          }
          return B.create(t.doc, [ne.inline(t.selection.from, t.selection.to, {
            class: options.className
          })]);
        }
      }
    })];
  }
});
function ll({
  types,
  node
}) {
  return node && Array.isArray(types) && types.includes(node.type) || node?.type === types;
}
const ry = V.create({
  name: "trailingNode",
  addOptions() {
    return {
      node: undefined,
      notAfter: []
    };
  },
  addProseMirrorPlugins() {
    const e = new a(this.name);
    const t = this.options.node || this.editor.schema.topNodeType.contentMatch.defaultType?.name || "paragraph";
    const types = Object.entries(this.editor.schema.nodes).map(([, s]) => s).filter(s => (this.options.notAfter || []).concat(t).includes(s.name));
    return [new $({
      key: e,
      appendTransaction: (s, i, o) => {
        const {
          doc,
          tr,
          schema
        } = o;
        const u = e.getState(o);
        const size = doc.content.size;
        const f = schema.nodes[t];
        if (u) {
          return tr.insert(size, f.create());
        }
      },
      state: {
        init: (s, i) => {
          const lastChild = i.tr.doc.lastChild;
          return !ll({
            node: lastChild,
            types
          });
        },
        apply: (s, i) => {
          if (!s.docChanged || s.getMeta("__uniqueIDTransaction")) {
            return i;
          }
          const lastChild = s.doc.lastChild;
          return !ll({
            node: lastChild,
            types
          });
        }
      }
    })];
  }
});
const sy = V.create({
  name: "undoRedo",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({
        state,
        dispatch
      }) => jc(state, dispatch),
      redo: () => ({
        state,
        dispatch
      }) => _c(state, dispatch)
    };
  },
  addProseMirrorPlugins() {
    return [ey(this.options)];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Mod-y": () => this.editor.commands.redo(),
      "Mod-я": () => this.editor.commands.undo(),
      "Shift-Mod-я": () => this.editor.commands.redo()
    };
  }
});
const iy = V.create({
  name: "starterKit",
  addExtensions() {
    const s = [];
    if (this.options.bold !== false) {
      s.push(yg.configure(this.options.bold));
    }
    if (this.options.blockquote !== false) {
      s.push(fg.configure(this.options.blockquote));
    }
    if (this.options.bulletList !== false) {
      s.push(Tc.configure(this.options.bulletList));
    }
    if (this.options.code !== false) {
      s.push(xg.configure(this.options.code));
    }
    if (this.options.codeBlock !== false) {
      s.push(Cg.configure(this.options.codeBlock));
    }
    if (this.options.document !== false) {
      s.push(Mg.configure(this.options.document));
    }
    if (this.options.dropcursor !== false) {
      s.push(ty.configure(this.options.dropcursor));
    }
    if (this.options.gapcursor !== false) {
      s.push(ny.configure(this.options.gapcursor));
    }
    if (this.options.hardBreak !== false) {
      s.push(Eg.configure(this.options.hardBreak));
    }
    if (this.options.heading !== false) {
      s.push(vg.configure(this.options.heading));
    }
    if (this.options.undoRedo !== false) {
      s.push(sy.configure(this.options.undoRedo));
    }
    if (this.options.horizontalRule !== false) {
      s.push(Tg.configure(this.options.horizontalRule));
    }
    if (this.options.italic !== false) {
      s.push(Ig.configure(this.options.italic));
    }
    if (this.options.listItem !== false) {
      s.push(Ac.configure(this.options.listItem));
    }
    if (this.options.listKeymap !== false) {
      s.push(Pc.configure(this.options?.listKeymap));
    }
    if (this.options.link !== false) {
      s.push(vc.configure(this.options?.link));
    }
    if (this.options.orderedList !== false) {
      s.push(zc.configure(this.options.orderedList));
    }
    if (this.options.paragraph !== false) {
      s.push(a0.configure(this.options.paragraph));
    }
    if (this.options.strike !== false) {
      s.push(Lg.configure(this.options.strike));
    }
    if (this.options.text !== false) {
      s.push(zg.configure(this.options.text));
    }
    if (this.options.underline !== false) {
      s.push(Bg.configure(this.options?.underline));
    }
    if (this.options.trailingNode !== false) {
      s.push(ry.configure(this.options?.trailingNode));
    }
    return s;
  }
});
const ky = iy;
export { uy as $, La as A, Lu as B, B as D, cy as E, k as F, Fl as G, P as H, $r as I, T as J, Vh as K, $a as L, fy as N, ay as O, $ as P, ui as Q, za as R, w as S, N as T, di as U, ly as V, _c as W, jc as X, cg as Y, ug as Z, $p as _, ne as b, de as c, hy as d, dy as e, createInlineMarkdownSpec as f, Gn as g, Se as h, yy as i, V as j, oy as k, td as l, ky as n, py as o, Np as p, Br as q, Ja as r, sd as s, Ga as t, Kh as u, qh as v, Os as w, Ot as x, O as y, gy as z };
