import { $r, Fr, Ot, Pa, Za, kt, v } from "./entry.js";
export function Ks(n, e, attrs = null, r = n) {
    let s = bu(n, e);
    let i = s && xu(r, e);
    if (i) {
        return s.map(_i).concat({
            type: e,
            attrs
        }).concat(i.map(_i));
    }
    return null;
}
function _i(type) {
    return {
        type,
        attrs: null
    };
}
function bu(n, e) {
    let { parent, startIndex, endIndex } = n;
    let i = parent.contentMatchAt(startIndex).findWrapping(e);
    if (!i) {
        return null;
    }
    let o = i.length ? i[0] : e;
    if (parent.canReplaceWith(startIndex, endIndex, o)) {
        return i;
    }
    return null;
}
function xu(n, e) {
    let { parent, startIndex, endIndex } = n;
    let i = parent.child(startIndex);
    let o = e.contentMatch.findWrapping(i.type);
    if (!o) {
        return null;
    }
    let contentMatch = (o.length ? o[o.length - 1] : e).contentMatch;
    for(let c = startIndex; contentMatch && c < endIndex; c++){
        contentMatch = contentMatch.matchType(parent.child(c).type);
    }
    if (!contentMatch || !contentMatch.validEnd) {
        return null;
    }
    return o;
}
export function et(n, e) {
    let t = n.resolve(e);
    let r = t.index();
    return Rl(t.nodeBefore, t.nodeAfter) && t.parent.canReplace(r, r + 1);
}
function vu(n, e) {
    if (!e.content.size) {
        n.type.compatibleContent(e.type);
    }
    let t = n.contentMatchAt(n.childCount);
    let { linebreakReplacement } = n.type.schema;
    for(let s = 0; s < e.childCount; s++){
        let i = e.child(s);
        let o = i.type == linebreakReplacement ? n.type.schema.nodes.text : i.type;
        t = t.matchType(o);
        if (!t || !n.type.allowsMarks(i.marks)) {
            return false;
        }
    }
    return t.validEnd;
}
export function Rl(n, e) {
    return !!(n && e && !n.isLeaf && vu(n, e));
}
export function Ir(n) {
    const { state, transaction } = n;
    let { selection } = transaction;
    let { doc } = transaction;
    let { storedMarks } = transaction;
    return {
        ...state,
        apply: state.apply.bind(state),
        applyTransaction: state.applyTransaction.bind(state),
        plugins: state.plugins,
        schema: state.schema,
        reconfigure: state.reconfigure.bind(state),
        toJSON: state.toJSON.bind(state),
        get storedMarks () {
            return storedMarks;
        },
        get selection () {
            return selection;
        },
        get doc () {
            return doc;
        },
        get tr () {
            selection = transaction.selection;
            doc = transaction.doc;
            storedMarks = transaction.storedMarks;
            return transaction;
        }
    };
}
export function _(n, e) {
    if (typeof n === "string") {
        if (!e.nodes[n]) {
            throw Error(`There is no node type named '${n}'. Maybe you forgot to add the extension?`);
        }
        return e.nodes[n];
    }
    return n;
}
export function ci(n) {
    return Object.prototype.toString.call(n) === "[object RegExp]";
}
function Jn(n, e, t = {
    strict: true
}) {
    const r = Object.keys(e);
    if (r.length) {
        return r.every((s)=>{
            if (t.strict) {
                return e[s] === n[s];
            }
            if (ci(e[s])) {
                return e[s].test(n[s]);
            }
            return e[s] === n[s];
        });
    }
    return true;
}
function Ba(n, e, t = {}) {
    return n.find((r)=>r.type === e && Jn(Object.fromEntries(Object.keys(t).map((s)=>[
                s,
                r.attrs[s]
            ])), t));
}
function Do(n, e, t = {}) {
    return !!Ba(n, e, t);
}
export function ui(n, e, t) {
    let r;
    if (!n || !e) {
        return;
    }
    let s = n.parent.childAfter(n.parentOffset);
    if (!s.node || !s.node.marks.some((u)=>u.type === e)) {
        s = n.parent.childBefore(n.parentOffset);
    }
    if (!s.node || !s.node.marks.some((u)=>u.type === e) || (t = t || ((r = s.node.marks[0]) == null ? undefined : r.attrs), !Ba([
        ...s.node.marks
    ], e, t))) {
        return;
    }
    let s_index = s.index;
    let l = n.start() + s.offset;
    let a = s_index + 1;
    let c = l + s.node.nodeSize;
    while(s_index > 0 && Do([
        ...n.parent.child(s_index - 1).marks
    ], e, t)){
        s_index -= 1;
        l -= n.parent.child(s_index).nodeSize;
    }
    while(a < n.parent.childCount && Do([
        ...n.parent.child(a).marks
    ], e, t)){
        c += n.parent.child(a).nodeSize;
        a += 1;
    }
    return {
        from: l,
        to: c
    };
}
export function Be(n, e) {
    if (typeof n === "string") {
        if (!e.marks[n]) {
            throw Error(`There is no mark type named '${n}'. Maybe you forgot to add the extension?`);
        }
        return e.marks[n];
    }
    return n;
}
export function $a(n) {
    return n instanceof N;
}
export function Pe(n = 0, e = 0, t = 0) {
    return Math.min(Math.max(n, e), t);
}
export function Fa(n, e = null) {
    if (!e) {
        return null;
    }
    const t = O.atStart(n);
    const r = O.atEnd(n);
    if (e === "start" || e === true) {
        return t;
    }
    if (e === "end") {
        return r;
    }
    const t_from = t.from;
    const i = r.to;
    if (e === "all") {
        return N.create(n, Pe(0, t_from, i), Pe(n.content.size, t_from, i));
    }
    return N.create(n, Pe(e, t_from, i), Pe(e, t_from, i));
}
export function Ha() {
    return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
export function Pr() {
    return [
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod"
    ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
export var Va = (n)=>{
    const n_childNodes = n.childNodes;
    for(let t = n_childNodes.length - 1; t >= 0; t -= 1){
        const r = n_childNodes[t];
        if (r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue)) {
            n.removeChild(r);
        } else if (r.nodeType === 1) {
            Va(r);
        }
    }
    return n;
};
export function Jt(n) {
    if (typeof window === "undefined") {
        throw new Error("[tiptap error]: there is no window object available, so this function cannot be used");
    }
    const e = `<body>${n}</body>`;
    const body = new window.DOMParser().parseFromString(e, "text/html").body;
    return Va(body);
}
export function pn(n, e, t) {
    if (n instanceof Se || n instanceof k) {
        return n;
    }
    t = {
        slice: true,
        parseOptions: {},
        ...t
    };
    const r = typeof n === "object" && n !== null;
    const s = typeof n === "string";
    if (r) {
        try {
            if (Array.isArray(n) && n.length > 0) {
                return k.fromArray(n.map((l)=>e.nodeFromJSON(l)));
            }
            const o = e.nodeFromJSON(n);
            if (t.errorOnInvalidContent) {
                o.check();
            }
            return o;
        } catch (cause) {
            if (t.errorOnInvalidContent) {
                throw new Error("[tiptap error]: Invalid JSON content", {
                    cause
                });
            }
            console.warn("[tiptap warn]: Invalid content.", "Passed value:", n, "Error:", cause);
            return pn("", e, t);
        }
    }
    if (s) {
        if (t.errorOnInvalidContent) {
            let o = false;
            let l = "";
            const a = new Cl({
                topNode: e.spec.topNode,
                marks: e.spec.marks,
                nodes: e.spec.nodes.append({
                    __tiptap__private__unknown__catch__all__node: {
                        content: "inline*",
                        group: "block",
                        parseDOM: [
                            {
                                tag: "*",
                                getAttrs: (c)=>{
                                    o = true;
                                    l = typeof c === "string" ? c : c.outerHTML;
                                    return null;
                                }
                            }
                        ]
                    }
                })
            });
            if (t.slice) {
                Le.fromSchema(a).parseSlice(Jt(n), t.parseOptions);
            } else {
                Le.fromSchema(a).parse(Jt(n), t.parseOptions);
            }
            if (t.errorOnInvalidContent && o) {
                throw new Error("[tiptap error]: Invalid HTML content", {
                    cause: new Error(`Invalid element found: ${l}`)
                });
            }
        }
        const i = Le.fromSchema(e);
        if (t.slice) {
            return i.parseSlice(Jt(n), t.parseOptions).content;
        }
        return i.parse(Jt(n), t.parseOptions);
    }
    return pn("", e, t);
}
export function ja() {
    if (typeof navigator !== "undefined") {
        return /Mac/.test(navigator.platform);
    }
    return false;
}
export function Ze(n, e, t = {}) {
    const { from, to, empty } = n.selection;
    const o = e ? _(e, n.schema) : null;
    const l = [];
    n.doc.nodesBetween(from, to, (d, f)=>{
        if (d.isText) {
            return;
        }
        const h = Math.max(from, f);
        const p = Math.min(to, f + d.nodeSize);
        l.push({
            node: d,
            from: h,
            to: p
        });
    });
    const a = to - from;
    const c = l.filter((d)=>{
        if (o) {
            return o.name === d.node.type.name;
        }
        return true;
    }).filter((d)=>Jn(d.node.attrs, t, {
            strict: false
        }));
    if (empty) {
        return !!c.length;
    }
    return c.reduce((acc, item)=>acc + item.to - item.from, 0) >= a;
}
export function Lr(n, e) {
    if (e.nodes[n]) {
        return "node";
    }
    if (e.marks[n]) {
        return "mark";
    }
    return null;
}
export function Os(n, e, parseOptions = {}, r = {}) {
    return pn(n, e, {
        slice: false,
        parseOptions,
        errorOnInvalidContent: r.errorOnInvalidContent
    });
}
export function _a(n, e) {
    const t = Be(e, n.schema);
    const { from, to, empty } = n.selection;
    const o = [];
    if (empty) {
        if (n.storedMarks) {
            o.push(...n.storedMarks);
        }
        o.push(...n.selection.$head.marks());
    } else {
        n.doc.nodesBetween(from, to, (a)=>{
            o.push(...a.marks);
        });
    }
    const l = o.find((a)=>a.type.name === t.name);
    if (l) {
        return {
            ...l.attrs
        };
    }
    return {};
}
export function Wa(n, e) {
    const t = new Fl(n);
    e.forEach((r)=>{
        r.steps.forEach((s)=>{
            t.step(s);
        });
    });
    return t;
}
export function fi(n, e) {
    const t = kt.fromSchema(e).serializeFragment(n);
    const s = document.implementation.createHTMLDocument().createElement("div");
    s.appendChild(t);
    return s.innerHTML;
}
function qa(n) {
    return typeof n === "function";
}
export function P(n, e = undefined, ...t) {
    if (qa(n)) {
        if (e) {
            return n.bind(e)(...t);
        }
        return n(...t);
    }
    return n;
}
export function Bt(n) {
    const baseExtensions = n.filter((s)=>s.type === "extension");
    const nodeExtensions = n.filter((s)=>s.type === "node");
    const markExtensions = n.filter((s)=>s.type === "mark");
    return {
        baseExtensions,
        nodeExtensions,
        markExtensions
    };
}
export function Ja(n, range, t) {
    const { from, to } = range;
    const { blockSeparator = `

`, textSerializers = {} } = t || {};
    let l = "";
    n.nodesBetween(from, to, (a, pos, parent, index)=>{
        var f;
        if (a.isBlock && pos > from) {
            l += blockSeparator;
        }
        const h = textSerializers?.[a.type.name];
        if (h) {
            if (parent) {
                l += h({
                    node: a,
                    pos,
                    parent,
                    index,
                    range
                });
            }
            return false;
        }
        if (a.isText) {
            l += (f = a?.text) == null ? undefined : f.slice(Math.max(from, pos) - pos, to - pos);
        }
    });
    return l;
}
export function Kh(n, e) {
    const t = {
        from: 0,
        to: n.content.size
    };
    return Ja(n, t, e);
}
export function Ga(n) {
    return Object.fromEntries(Object.entries(n.nodes).filter(([, e])=>e.spec.toText).map(([e, t])=>[
            e,
            t.spec.toText
        ]));
}
function Uh(n, e) {
    const t = _(e, n.schema);
    const { from, to } = n.selection;
    const i = [];
    n.doc.nodesBetween(from, to, (l)=>{
        i.push(l);
    });
    const o = i.reverse().find((l)=>l.type.name === t.name);
    if (o) {
        return {
            ...o.attrs
        };
    }
    return {};
}
export function Ya(n, e) {
    const t = Lr(typeof e === "string" ? e : e.name, n.schema);
    switch(t){
        case "node":
            return Uh(n, e);
        case "mark":
            return _a(n, e);
        default:
            return {};
    }
}
function Jh(n, e = JSON.stringify) {
    const t = {};
    return n.filter((r)=>{
        const s = e(r);
        if (Object.prototype.hasOwnProperty.call(t, s)) {
            return false;
        }
        return t[s] = true;
    });
}
function Gh(n) {
    const e = Jh(n);
    if (e.length === 1) {
        return e;
    }
    return e.filter((t, r)=>!e.filter((i, o)=>o !== r).some((i)=>t.oldRange.from >= i.oldRange.from && t.oldRange.to <= i.oldRange.to && t.newRange.from >= i.newRange.from && t.newRange.to <= i.newRange.to));
}
export function Xa(n) {
    const { mapping, steps } = n;
    const r = [];
    mapping.maps.forEach((s, i)=>{
        const o = [];
        if (s.ranges.length) {
            s.forEach((l, a)=>{
                o.push({
                    from: l,
                    to: a
                });
            });
        } else {
            const { from, to } = steps[i];
            if (from === undefined || to === undefined) {
                return;
            }
            o.push({
                from,
                to
            });
        }
        o.forEach(({ from, to })=>{
            const c = mapping.slice(i).map(from, -1);
            const u = mapping.slice(i).map(to);
            const d = mapping.invert().map(c, -1);
            const f = mapping.invert().map(u);
            r.push({
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
    });
    return Gh(r);
}
export function mi(n, e, t) {
    const r = [];
    if (n === e) {
        t.resolve(n).marks().forEach((s)=>{
            const i = t.resolve(n);
            const o = ui(i, s.type);
            if (o) {
                r.push({
                    mark: s,
                    ...o
                });
            }
        });
    } else {
        t.nodesBetween(n, e, (s, i)=>{
            if (!(!s || s?.nodeSize === undefined)) {
                r.push(...s.marks.map((o)=>({
                        from: i,
                        to: i + s.nodeSize,
                        mark: o
                    })));
            }
        });
    }
    return r;
}
export function Ds(n, e, t = {}) {
    const { empty, ranges } = n.selection;
    const i = e ? Be(e, n.schema) : null;
    if (empty) {
        return !!(n.storedMarks || n.selection.$from.marks()).filter((d)=>{
            if (i) {
                return i.name === d.type.name;
            }
            return true;
        }).find((d)=>Jn(d.attrs, t, {
                strict: false
            }));
    }
    let o = 0;
    const l = [];
    ranges.forEach(({ $from, $to })=>{
        const $from_pos = $from.pos;
        const $to_pos = $to.pos;
        n.doc.nodesBetween($from_pos, $to_pos, (m, g)=>{
            if (!m.isText && !m.marks.length) {
                return;
            }
            const y = Math.max($from_pos, g);
            const b = Math.min($to_pos, g + m.nodeSize);
            const C = b - y;
            o += C;
            l.push(...m.marks.map((M)=>({
                    mark: M,
                    from: y,
                    to: b
                })));
        });
    });
    if (o === 0) {
        return false;
    }
    const a = l.filter((d)=>{
        if (i) {
            return i.name === d.mark.type.name;
        }
        return true;
    }).filter((d)=>Jn(d.mark.attrs, t, {
            strict: false
        })).reduce((acc, item)=>acc + item.to - item.from, 0);
    const c = l.filter((d)=>{
        if (i) {
            return d.mark.type !== i && d.mark.type.excludes(i);
        }
        return true;
    }).reduce((acc, item)=>acc + item.to - item.from, 0);
    return (a > 0 ? a + c : a) >= o;
}
function Qh(state, e, t = {}) {
    if (!e) {
        return Ze(state, null, t) || Ds(state, null, t);
    }
    const r = Lr(e, state.schema);
    switch(r){
        case "node":
            return Ze(state, e, t);
        case "mark":
            return Ds(state, e, t);
        default:
            return false;
    }
}
export function Br(n, { checkChildren = true, ignoreWhitespace = false } = {}) {
    let r;
    if (ignoreWhitespace) {
        if (n.type.name === "hardBreak") {
            return true;
        }
        if (n.isText) {
            return /^\s*$/m.test((r = n.text) != null ? r : "");
        }
    }
    if (n.isText) {
        return !n.text;
    }
    if (n.isAtom || n.isLeaf) {
        return false;
    }
    if (n.content.childCount === 0) {
        return true;
    }
    if (checkChildren) {
        let s = true;
        n.content.forEach((i)=>{
            s !== false && (Br(i, {
                ignoreWhitespace,
                checkChildren
            }) || (s = false));
        });
        return s;
    }
    return false;
}
function getUpdatedPosition(n, e) {
    const mapResult = e.mapping.mapResult(n.position);
    return {
        position: new Za(mapResult.pos),
        mapResult
    };
}
function createMappablePosition(n) {
    return new Za(n);
}
var V = class rc extends gi {
    constructor(){
        super(...arguments);
        this.type = "extension";
    }
    static create(e = {}) {
        const t = typeof e === "function" ? e() : e;
        return new rc(t);
    }
    configure(e) {
        return super.configure(e);
    }
    extend(e) {
        const t = typeof e === "function" ? e() : e;
        return super.extend(t);
    }
};
var ClipboardTextSerializer = V.create({
    name: "clipboardTextSerializer",
    addOptions () {
        return {
            blockSeparator: undefined
        };
    },
    addProseMirrorPlugins () {
        return [
            new $({
                key: new q("clipboardTextSerializer"),
                props: {
                    clipboardTextSerializer: ()=>{
                        const { editor } = this;
                        const { state, schema } = editor;
                        const { doc, selection } = state;
                        const { ranges } = selection;
                        const o = Math.min(...ranges.map((u)=>u.$from.pos));
                        const l = Math.max(...ranges.map((u)=>u.$to.pos));
                        const textSerializers = Ga(schema);
                        return Ja(doc, {
                            from: o,
                            to: l
                        }, {
                            ...this.options.blockSeparator !== undefined ? {
                                blockSeparator: this.options.blockSeparator
                            } : {},
                            textSerializers
                        });
                    }
                }
            })
        ];
    }
});
var Commands = V.create({
    name: "commands",
    addCommands () {
        return {
            ...za
        };
    }
});
var oc = V.create({
    name: "delete",
    onUpdate ({ transaction, appendedTransactions }) {
        let t;
        let r;
        let s;
        const i = ()=>{
            var o;
            var l;
            var a;
            var c;
            if ((c = (a = (l = (o = this.editor.options.coreExtensionOptions) == null ? undefined : o.delete) == null ? undefined : l.filterTransaction) == null ? undefined : a.call(l, transaction)) != null ? c : transaction.getMeta("y-sync$")) {
                return;
            }
            const combinedTransform = Wa(transaction.before, [
                transaction,
                ...appendedTransactions
            ]);
            Xa(combinedTransform).forEach((h)=>{
                if (combinedTransform.mapping.mapResult(h.oldRange.from).deletedAfter && combinedTransform.mapping.mapResult(h.oldRange.to).deletedBefore) {
                    combinedTransform.before.nodesBetween(h.oldRange.from, h.oldRange.to, (p, m)=>{
                        const g = m + p.nodeSize - 2;
                        const y = h.oldRange.from <= m && g <= h.oldRange.to;
                        this.editor.emit("delete", {
                            type: "node",
                            node: p,
                            from: m,
                            to: g,
                            newFrom: combinedTransform.mapping.map(m),
                            newTo: combinedTransform.mapping.map(g),
                            deletedRange: h.oldRange,
                            newRange: h.newRange,
                            partial: !y,
                            editor: this.editor,
                            transaction,
                            combinedTransform
                        });
                    });
                }
            });
            const u_mapping = combinedTransform.mapping;
            combinedTransform.steps.forEach((h, p)=>{
                var m;
                var g;
                if (h instanceof xe) {
                    const y = u_mapping.slice(p).map(h.from, -1);
                    const b = u_mapping.slice(p).map(h.to);
                    const C = u_mapping.invert().map(y, -1);
                    const M = u_mapping.invert().map(b);
                    const S = (m = combinedTransform.doc.nodeAt(y - 1)) == null ? undefined : m.marks.some((E)=>E.eq(h.mark));
                    const A = (g = combinedTransform.doc.nodeAt(b)) == null ? undefined : g.marks.some((E)=>E.eq(h.mark));
                    this.editor.emit("delete", {
                        type: "mark",
                        mark: h.mark,
                        from: h.from,
                        to: h.to,
                        deletedRange: {
                            from: C,
                            to: M
                        },
                        newRange: {
                            from: y,
                            to: b
                        },
                        partial: !!(A || S),
                        editor: this.editor,
                        transaction,
                        combinedTransform
                    });
                }
            });
        };
        if ((s = (r = (t = this.editor.options.coreExtensionOptions) == null ? undefined : t.delete) == null ? undefined : r.async) == null || s) {
            setTimeout(i, 0);
        } else {
            i();
        }
    }
});
var Drop = V.create({
    name: "drop",
    addProseMirrorPlugins () {
        return [
            new $({
                key: new q("tiptapDrop"),
                props: {
                    handleDrop: (n, e, t, moved)=>{
                        this.editor.emit("drop", {
                            editor: this.editor,
                            event: e,
                            slice: t,
                            moved
                        });
                    }
                }
            })
        ];
    }
});
var Editable = V.create({
    name: "editable",
    addProseMirrorPlugins () {
        return [
            new $({
                key: new q("editable"),
                props: {
                    editable: ()=>this.editor.options.editable
                }
            })
        ];
    }
});
var cc = new q("focusEvents");
var FocusEvents = V.create({
    name: "focusEvents",
    addProseMirrorPlugins () {
        const { editor } = this;
        return [
            new $({
                key: cc,
                props: {
                    handleDOMEvents: {
                        focus: (e, t)=>{
                            editor.isFocused = true;
                            const r = editor.state.tr.setMeta("focus", {
                                event: t
                            }).setMeta("addToHistory", false);
                            e.dispatch(r);
                            return false;
                        },
                        blur: (e, t)=>{
                            editor.isFocused = false;
                            const r = editor.state.tr.setMeta("blur", {
                                event: t
                            }).setMeta("addToHistory", false);
                            e.dispatch(r);
                            return false;
                        }
                    }
                }
            })
        ];
    }
});
var Keymap = V.create({
    name: "keymap",
    addKeyboardShortcuts () {
        const Backspace = ()=>this.editor.commands.first(({ commands })=>[
                    ()=>commands.undoInputRule(),
                    ()=>commands.command(({ tr })=>{
                            const { selection, doc } = tr;
                            const { empty, $anchor } = selection;
                            const { pos, parent } = $anchor;
                            const p = $anchor.parent.isTextblock && pos > 0 ? tr.doc.resolve(pos - 1) : $anchor;
                            const isolating = p.parent.type.spec.isolating;
                            const g = $anchor.pos - $anchor.parentOffset;
                            const y = isolating && p.parent.childCount === 1 ? g === $anchor.pos : O.atStart(doc).from === pos;
                            if (!empty || !parent.type.isTextblock || parent.textContent.length || !y || y && $anchor.parent.type.name === "paragraph") {
                                return false;
                            }
                            return commands.clearNodes();
                        }),
                    ()=>commands.deleteSelection(),
                    ()=>commands.joinBackward(),
                    ()=>commands.selectNodeBackward()
                ]);
        const e = ()=>this.editor.commands.first(({ commands })=>[
                    ()=>commands.deleteSelection(),
                    ()=>commands.deleteCurrentNode(),
                    ()=>commands.joinForward(),
                    ()=>commands.selectNodeForward()
                ]);
        const r = {
            Enter: ()=>this.editor.commands.first(({ commands })=>[
                        ()=>commands.newlineInCode(),
                        ()=>commands.createParagraphNear(),
                        ()=>commands.liftEmptyBlock(),
                        ()=>commands.splitBlock()
                    ]),
            "Mod-Enter": ()=>this.editor.commands.exitCode(),
            Backspace,
            "Mod-Backspace": Backspace,
            "Shift-Backspace": Backspace,
            Delete: e,
            "Mod-Delete": e,
            "Mod-a": ()=>this.editor.commands.selectAll()
        };
        const s = {
            ...r
        };
        const i = {
            ...r,
            "Ctrl-h": Backspace,
            "Alt-Backspace": Backspace,
            "Ctrl-d": e,
            "Ctrl-Alt-Backspace": e,
            "Alt-Delete": e,
            "Alt-d": e,
            "Ctrl-a": ()=>this.editor.commands.selectTextblockStart(),
            "Ctrl-e": ()=>this.editor.commands.selectTextblockEnd()
        };
        if (Pr() || ja()) {
            return i;
        }
        return s;
    },
    addProseMirrorPlugins () {
        return [
            new $({
                key: new q("clearDocument"),
                appendTransaction: (n, e, t)=>{
                    if (n.some((m)=>m.getMeta("composition"))) {
                        return;
                    }
                    const r = n.some((m)=>m.docChanged) && !e.doc.eq(t.doc);
                    const s = n.some((m)=>m.getMeta("preventClearDocument"));
                    if (!r || s) {
                        return;
                    }
                    const { empty, from, to } = e.selection;
                    const from_1 = O.atStart(e.doc).from;
                    const c = O.atEnd(e.doc).to;
                    if (empty || !(from === from_1 && to === c) || !Br(t.doc)) {
                        return;
                    }
                    const f = t.tr;
                    const state = Ir({
                        state: t,
                        transaction: f
                    });
                    const { commands } = new Rr({
                        editor: this.editor,
                        state
                    });
                    commands.clearNodes();
                    if (f.steps.length) {
                        return f;
                    }
                }
            })
        ];
    }
});
var Paste = V.create({
    name: "paste",
    addProseMirrorPlugins () {
        return [
            new $({
                key: new q("tiptapPaste"),
                props: {
                    handlePaste: (n, e, t)=>{
                        this.editor.emit("paste", {
                            editor: this.editor,
                            event: e,
                            slice: t
                        });
                    }
                }
            })
        ];
    }
});
var Tabindex = V.create({
    name: "tabindex",
    addProseMirrorPlugins () {
        return [
            new $({
                key: new q("tabindex"),
                props: {
                    attributes: ()=>{
                        if (this.editor.isEditable) {
                            return {
                                tabindex: "0"
                            };
                        }
                        return {};
                    }
                }
            })
        ];
    }
});
var TextDirection = V.create({
    name: "textDirection",
    addOptions () {
        return {
            direction: undefined
        };
    },
    addGlobalAttributes () {
        if (!this.options.direction) {
            return [];
        }
        const { nodeExtensions } = Bt(this.extensions);
        return [
            {
                types: nodeExtensions.filter((e)=>e.name !== "text").map((e)=>e.name),
                attributes: {
                    dir: {
                        default: this.options.direction,
                        parseHTML: (e)=>{
                            const t = e.getAttribute("dir");
                            if (t && (t === "ltr" || t === "rtl" || t === "auto")) {
                                return t;
                            }
                            return this.options.direction;
                        },
                        renderHTML: (e)=>{
                            if (e.dir) {
                                return {
                                    dir: e.dir
                                };
                            }
                            return {};
                        }
                    }
                }
            }
        ];
    },
    addProseMirrorPlugins () {
        return [
            new $({
                key: new q("textDirection"),
                props: {
                    attributes: ()=>{
                        const direction = this.options.direction;
                        if (direction) {
                            return {
                                dir: direction
                            };
                        }
                        return {};
                    }
                }
            })
        ];
    }
});
const Lp = class At {
    constructor(e, t, r = false, s = null){
        this.currentNode = null;
        this.actualDepth = null;
        this.isBlock = r;
        this.resolvedPos = e;
        this.editor = t;
        this.currentNode = s;
    }
    get name() {
        return this.node.type.name;
    }
    get node() {
        return this.currentNode || this.resolvedPos.node();
    }
    get element() {
        return this.editor.view.domAtPos(this.pos).node;
    }
    get depth() {
        let e;
        if ((e = this.actualDepth) != null) {
            return e;
        }
        return this.resolvedPos.depth;
    }
    get pos() {
        return this.resolvedPos.pos;
    }
    get content() {
        return this.node.content;
    }
    set content(e) {
        let from = this.from;
        let r = this.to;
        if (this.isBlock) {
            if (this.content.size === 0) {
                console.error(`You can\u2019t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
                return;
            }
            from = this.from + 1;
            r = this.to - 1;
        }
        this.editor.commands.insertContentAt({
            from,
            to: r
        }, e);
    }
    get attributes() {
        return this.node.attrs;
    }
    get textContent() {
        return this.node.textContent;
    }
    get size() {
        return this.node.nodeSize;
    }
    get from() {
        if (this.isBlock) {
            return this.pos;
        }
        return this.resolvedPos.start(this.resolvedPos.depth);
    }
    get range() {
        return {
            from: this.from,
            to: this.to
        };
    }
    get to() {
        if (this.isBlock) {
            return this.pos + this.size;
        }
        return this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1);
    }
    get parent() {
        if (this.depth === 0) {
            return null;
        }
        const e = this.resolvedPos.start(this.resolvedPos.depth - 1);
        const t = this.resolvedPos.doc.resolve(e);
        return new At(t, this.editor);
    }
    get before() {
        let e = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
        if (e.depth !== this.depth) {
            e = this.resolvedPos.doc.resolve(this.from - 3);
        }
        return new At(e, this.editor);
    }
    get after() {
        let e = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
        if (e.depth !== this.depth) {
            e = this.resolvedPos.doc.resolve(this.to + 3);
        }
        return new At(e, this.editor);
    }
    get children() {
        const e = [];
        this.node.content.forEach((t, r)=>{
            const s = t.isBlock && !t.isTextblock;
            const i = t.isAtom && !t.isText;
            const o = this.pos + r + (i ? 0 : 1);
            if (o < 0 || o > this.resolvedPos.doc.nodeSize - 2) {
                return;
            }
            const l = this.resolvedPos.doc.resolve(o);
            if (!s && l.depth <= this.depth) {
                return;
            }
            const a = new At(l, this.editor, s, s ? t : null);
            if (s) {
                a.actualDepth = this.depth + 1;
            }
            e.push(new At(l, this.editor, s, s ? t : null));
        });
        return e;
    }
    get firstChild() {
        return this.children[0] || null;
    }
    get lastChild() {
        const children = this.children;
        return children[children.length - 1] || null;
    }
    closest(e, t = {}) {
        let r = null;
        let parent = this.parent;
        while(parent && !r){
            if (parent.node.type.name === e) {
                if (Object.keys(t).length > 0) {
                    const i = parent.node.attrs;
                    const o = Object.keys(t);
                    for(let l = 0; l < o.length; l += 1){
                        const a = o[l];
                        if (i[a] !== t[a]) {
                            break;
                        }
                    }
                } else {
                    r = parent;
                }
            }
            parent = parent.parent;
        }
        return r;
    }
    querySelector(e, t = {}) {
        return this.querySelectorAll(e, t, true)[0] || null;
    }
    querySelectorAll(e, t = {}, r = false) {
        let s = [];
        if (!this.children || this.children.length === 0) {
            return s;
        }
        const i = Object.keys(t);
        this.children.forEach((o)=>{
            r && s.length > 0 || (o.node.type.name === e && i.every((a)=>t[a] === o.node.attrs[a]) && s.push(o), !(r && s.length > 0) && (s = s.concat(o.querySelectorAll(e, t, r))));
        });
        return s;
    }
    setAttribute(e) {
        const { tr } = this.editor.state;
        tr.setNodeMarkup(this.from, undefined, {
            ...this.node.attrs,
            ...e
        });
        this.editor.view.dispatch(tr);
    }
};
const zp = `.ProseMirror {
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
function Bp(n, injectNonce, t) {
    const r = document.querySelector("style[data-tiptap-style]");
    if (r !== null) {
        return r;
    }
    const s = document.createElement("style");
    if (injectNonce) {
        s.setAttribute("nonce", injectNonce);
    }
    s.setAttribute("data-tiptap-style", "");
    s.innerHTML = n;
    document.getElementsByTagName("head")[0].appendChild(s);
    return s;
}
export var cy = class extends Mp {
    constructor(n = {}){
        super();
        this.css = null;
        this.className = "tiptap";
        this.editorView = null;
        this.isFocused = false;
        this.isInitialized = false;
        this.extensionStorage = {};
        this.instanceId = Math.random().toString(36).slice(2, 9);
        this.options = {
            element: typeof document !== "undefined" ? document.createElement("div") : null,
            content: "",
            injectCSS: true,
            injectNonce: undefined,
            extensions: [],
            autofocus: false,
            editable: true,
            textDirection: undefined,
            editorProps: {},
            parseOptions: {},
            coreExtensionOptions: {},
            enableInputRules: true,
            enablePasteRules: true,
            enableCoreExtensions: true,
            enableContentCheck: false,
            emitContentError: false,
            onBeforeCreate: ()=>null,
            onCreate: ()=>null,
            onMount: ()=>null,
            onUnmount: ()=>null,
            onUpdate: ()=>null,
            onSelectionUpdate: ()=>null,
            onTransaction: ()=>null,
            onFocus: ()=>null,
            onBlur: ()=>null,
            onDestroy: ()=>null,
            onContentError: ({ error })=>{
                throw error;
            },
            onPaste: ()=>null,
            onDrop: ()=>null,
            onDelete: ()=>null
        };
        this.isCapturingTransaction = false;
        this.capturedTransaction = null;
        this.utils = {
            getUpdatedPosition,
            createMappablePosition
        };
        this.setOptions(n);
        this.createExtensionManager();
        this.createCommandManager();
        this.createSchema();
        this.on("beforeCreate", this.options.onBeforeCreate);
        this.emit("beforeCreate", {
            editor: this
        });
        this.on("mount", this.options.onMount);
        this.on("unmount", this.options.onUnmount);
        this.on("contentError", this.options.onContentError);
        this.on("create", this.options.onCreate);
        this.on("update", this.options.onUpdate);
        this.on("selectionUpdate", this.options.onSelectionUpdate);
        this.on("transaction", this.options.onTransaction);
        this.on("focus", this.options.onFocus);
        this.on("blur", this.options.onBlur);
        this.on("destroy", this.options.onDestroy);
        this.on("drop", ({ event, slice, moved })=>this.options.onDrop(event, slice, moved));
        this.on("paste", ({ event, slice })=>this.options.onPaste(event, slice));
        this.on("delete", this.options.onDelete);
        const doc = this.createDoc();
        const t = Fa(doc, this.options.autofocus);
        this.editorState = Ot.create({
            doc,
            schema: this.schema,
            selection: t || undefined
        });
        if (this.options.element) {
            this.mount(this.options.element);
        }
    }
    mount(n) {
        if (typeof document === "undefined") {
            throw new Error("[tiptap error]: The editor cannot be mounted because there is no 'document' defined in this environment.");
        }
        this.createView(n);
        this.emit("mount", {
            editor: this
        });
        if (this.css && !document.head.contains(this.css)) {
            document.head.appendChild(this.css);
        }
        window.setTimeout(()=>{
            if (!this.isDestroyed) {
                if (this.options.autofocus !== false && this.options.autofocus !== null) {
                    this.commands.focus(this.options.autofocus);
                }
                this.emit("create", {
                    editor: this
                });
                this.isInitialized = true;
            }
        }, 0);
    }
    unmount() {
        if (this.editorView) {
            const n = this.editorView.dom;
            n?.editor && delete n.editor;
            this.editorView.destroy();
        }
        this.editorView = null;
        this.isInitialized = false;
        if (this.css && !document.querySelectorAll(`.${this.className}`).length) {
            try {
                if (typeof this.css.remove === "function") {
                    this.css.remove();
                } else if (this.css.parentNode) {
                    this.css.parentNode.removeChild(this.css);
                }
            } catch (error) {
                console.warn("Failed to remove CSS element:", error);
            }
        }
        this.css = null;
        this.emit("unmount", {
            editor: this
        });
    }
    get storage() {
        return this.extensionStorage;
    }
    get commands() {
        return this.commandManager.commands;
    }
    chain() {
        return this.commandManager.chain();
    }
    can() {
        return this.commandManager.can();
    }
    injectCSS() {
        if (this.options.injectCSS && typeof document !== "undefined") {
            this.css = Bp(zp, this.options.injectNonce);
        }
    }
    setOptions(n = {}) {
        this.options = {
            ...this.options,
            ...n
        };
        if (!(!this.editorView || !this.state || this.isDestroyed)) {
            if (this.options.editorProps) {
                this.view.setProps(this.options.editorProps);
            }
            this.view.updateState(this.state);
        }
    }
    setEditable(editable, e = true) {
        this.setOptions({
            editable
        });
        if (e) {
            this.emit("update", {
                editor: this,
                transaction: this.state.tr,
                appendedTransactions: []
            });
        }
    }
    get isEditable() {
        return this.options.editable && this.view && this.view.editable;
    }
    get view() {
        if (this.editorView) {
            return this.editorView;
        }
        return new Proxy({
            state: this.editorState,
            updateState: (n)=>{
                this.editorState = n;
            },
            dispatch: (n)=>{
                this.dispatchTransaction(n);
            },
            composing: false,
            dragging: null,
            editable: true,
            isDestroyed: false
        }, {
            get: (n, e)=>{
                if (this.editorView) {
                    return this.editorView[e];
                }
                if (e === "state") {
                    return this.editorState;
                }
                if (e in n) {
                    return Reflect.get(n, e);
                }
                throw new Error(`[tiptap error]: The editor view is not available. Cannot access view['${e}']. The editor may not be mounted yet.`);
            }
        });
    }
    get state() {
        if (this.editorView) {
            this.editorState = this.view.state;
        }
        return this.editorState;
    }
    registerPlugin(n, e) {
        const plugins = qa(e) ? e(n, [
            ...this.state.plugins
        ]) : [
            ...this.state.plugins,
            n
        ];
        const r = this.state.reconfigure({
            plugins
        });
        this.view.updateState(r);
        return r;
    }
    unregisterPlugin(n) {
        if (this.isDestroyed) {
            return;
        }
        const plugins = this.state.plugins;
        let t = plugins;
        [].concat(n).forEach((s)=>{
            const i = typeof s === "string" ? `${s}$` : s.key;
            t = t.filter((o)=>!o.key.startsWith(i));
        });
        if (plugins.length === t.length) {
            return;
        }
        const r = this.state.reconfigure({
            plugins: t
        });
        this.view.updateState(r);
        return r;
    }
    createExtensionManager() {
        let n;
        let e;
        const r = [
            ...this.options.enableCoreExtensions ? [
                Editable,
                ClipboardTextSerializer.configure({
                    blockSeparator: (e = (n = this.options.coreExtensionOptions) == null ? undefined : n.clipboardTextSerializer) == null ? undefined : e.blockSeparator
                }),
                Commands,
                FocusEvents,
                Keymap,
                Tabindex,
                Drop,
                Paste,
                oc,
                TextDirection.configure({
                    direction: this.options.textDirection
                })
            ].filter((s)=>{
                if (typeof this.options.enableCoreExtensions === "object") {
                    return this.options.enableCoreExtensions[s.name] !== false;
                }
                return true;
            }) : [],
            ...this.options.extensions
        ].filter((s)=>[
                "extension",
                "node",
                "mark"
            ].includes(s?.type));
        this.extensionManager = new Fr(r, this);
    }
    createCommandManager() {
        this.commandManager = new Rr({
            editor: this
        });
    }
    createSchema() {
        this.schema = this.extensionManager.schema;
    }
    createDoc() {
        let n;
        try {
            n = Os(this.options.content, this.schema, this.options.parseOptions, {
                errorOnInvalidContent: this.options.enableContentCheck
            });
        } catch (error) {
            if (!(error instanceof Error) || ![
                "[tiptap error]: Invalid JSON content",
                "[tiptap error]: Invalid HTML content"
            ].includes(error.message)) {
                throw error;
            }
            this.emit("contentError", {
                editor: this,
                error,
                disableCollaboration: ()=>{
                    if ("collaboration" in this.storage && typeof this.storage.collaboration === "object" && this.storage.collaboration) {
                        this.storage.collaboration.isDisabled = true;
                    }
                    this.options.extensions = this.options.extensions.filter((t)=>t.name !== "collaboration");
                    this.createExtensionManager();
                }
            });
            n = Os(this.options.content, this.schema, this.options.parseOptions, {
                errorOnInvalidContent: false
            });
        }
        return n;
    }
    createView(n) {
        let e;
        this.editorView = new Pa(n, {
            ...this.options.editorProps,
            attributes: {
                role: "textbox",
                ...(e = this.options.editorProps) == null ? undefined : e.attributes
            },
            dispatchTransaction: this.dispatchTransaction.bind(this),
            state: this.editorState,
            markViews: this.extensionManager.markViews,
            nodeViews: this.extensionManager.nodeViews
        });
        const t = this.state.reconfigure({
            plugins: this.extensionManager.plugins
        });
        this.view.updateState(t);
        this.prependClass();
        this.injectCSS();
        const dom = this.view.dom;
        dom.editor = this;
    }
    createNodeViews() {
        if (!this.view.isDestroyed) {
            this.view.setProps({
                markViews: this.extensionManager.markViews,
                nodeViews: this.extensionManager.nodeViews
            });
        }
    }
    prependClass() {
        this.view.dom.className = `${this.className} ${this.view.dom.className}`;
    }
    captureTransaction(n) {
        this.isCapturingTransaction = true;
        n();
        this.isCapturingTransaction = false;
        const capturedTransaction = this.capturedTransaction;
        this.capturedTransaction = null;
        return capturedTransaction;
    }
    dispatchTransaction(n) {
        if (this.view.isDestroyed) {
            return;
        }
        if (this.isCapturingTransaction) {
            if (!this.capturedTransaction) {
                this.capturedTransaction = n;
                return;
            }
            n.steps.forEach((c)=>{
                var u;
                if ((u = this.capturedTransaction) == null) {
                    return undefined;
                }
                return u.step(c);
            });
            return;
        }
        const { state, transactions } = this.state.applyTransaction(n);
        const r = !this.state.selection.eq(state.selection);
        const s = transactions.includes(n);
        const state_1 = this.state;
        this.emit("beforeTransaction", {
            editor: this,
            transaction: n,
            nextState: state
        });
        if (!s) {
            return;
        }
        this.view.updateState(state);
        this.emit("transaction", {
            editor: this,
            transaction: n,
            appendedTransactions: transactions.slice(1)
        });
        if (r) {
            this.emit("selectionUpdate", {
                editor: this,
                transaction: n
            });
        }
        const o = transactions.findLast((c)=>c.getMeta("focus") || c.getMeta("blur"));
        const l = o?.getMeta("focus");
        const a = o?.getMeta("blur");
        if (l) {
            this.emit("focus", {
                editor: this,
                event: l.event,
                transaction: o
            });
        }
        if (a) {
            this.emit("blur", {
                editor: this,
                event: a.event,
                transaction: o
            });
        }
        if (!(n.getMeta("preventUpdate") || !transactions.some((c)=>c.docChanged) || state_1.doc.eq(state.doc))) {
            this.emit("update", {
                editor: this,
                transaction: n,
                appendedTransactions: transactions.slice(1)
            });
        }
    }
    getAttributes(n) {
        return Ya(this.state, n);
    }
    isActive(n, e) {
        const t = typeof n === "string" ? n : null;
        const r = typeof n === "string" ? e : n;
        return Qh(this.state, t, r);
    }
    getJSON() {
        return this.state.doc.toJSON();
    }
    getHTML() {
        return fi(this.state.doc.content, this.schema);
    }
    getText(n) {
        const { blockSeparator = `

`, textSerializers = {} } = n || {};
        return Kh(this.state.doc, {
            blockSeparator,
            textSerializers: {
                ...Ga(this.schema),
                ...textSerializers
            }
        });
    }
    get isEmpty() {
        return Br(this.state.doc);
    }
    destroy() {
        this.emit("destroy");
        this.unmount();
        this.removeAllListeners();
    }
    get isDestroyed() {
        let n;
        let e;
        if ((e = (n = this.editorView) == null ? undefined : n.isDestroyed) != null) {
            return e;
        }
        return true;
    }
    $node(n, e) {
        let t;
        return ((t = this.$doc) == null ? undefined : t.querySelector(n, e)) || null;
    }
    $nodes(n, e) {
        let t;
        return ((t = this.$doc) == null ? undefined : t.querySelectorAll(n, e)) || null;
    }
    $pos(n) {
        const e = this.state.doc.resolve(n);
        return new Lp(e, this);
    }
    get $doc() {
        return this.$pos(0);
    }
};
export function $t(n) {
    return new $r({
        find: n.find,
        handler: ({ state, range, match })=>{
            const s = P(n.getAttributes, undefined, match);
            if (s === false || s === null) {
                return null;
            }
            const { tr } = state;
            const o = match[match.length - 1];
            const l = match[0];
            if (o) {
                const a = l.search(/\S/);
                const c = range.from + l.indexOf(o);
                const u = c + o.length;
                if (mi(range.from, range.to, state.doc).filter((h)=>h.mark.type.excluded.find((m)=>m === n.type && m !== h.mark.type)).filter((h)=>h.to > c).length) {
                    return null;
                }
                if (u < range.to) {
                    tr.delete(u, range.to);
                }
                if (c > range.from) {
                    tr.delete(range.from + a, c);
                }
                const f = range.from + a + o.length;
                tr.addMark(range.from + a, f, n.type.create(s || {}));
                tr.removeStoredMark(n.type);
            }
        },
        undoable: n.undoable
    });
}
export function $p(n) {
    return new $r({
        find: n.find,
        handler: ({ state, range, match })=>{
            const s = P(n.getAttributes, undefined, match) || {};
            const { tr } = state;
            const range_from = range.from;
            let range_to = range.to;
            const a = n.type.create(s);
            if (match[1]) {
                const c = match[0].lastIndexOf(match[1]);
                let u = range_from + c;
                if (u > range_to) {
                    u = range_to;
                } else {
                    range_to = u + match[1].length;
                }
                const d = match[0][match[0].length - 1];
                tr.insertText(d, range_from + match[0].length - 1);
                tr.replaceWith(u, range_to, a);
            } else if (match[0]) {
                const c = n.type.isInline ? range_from : range_from - 1;
                tr.insert(c, n.type.create(s)).delete(tr.mapping.map(range_from), tr.mapping.map(range_to));
            }
            tr.scrollIntoView();
        },
        undoable: n.undoable
    });
}
export function Is(n) {
    return new $r({
        find: n.find,
        handler: ({ state, range, match })=>{
            const s = state.doc.resolve(range.from);
            const i = P(n.getAttributes, undefined, match) || {};
            if (!s.node(-1).canReplaceWith(s.index(-1), s.indexAfter(-1), n.type)) {
                return null;
            }
            state.tr.delete(range.from, range.to).setBlockType(range.from, range.from, n.type, i);
        },
        undoable: n.undoable
    });
}
export function Ft(n) {
    return new $r({
        find: n.find,
        handler: ({ state, range, match, chain })=>{
            const i = P(n.getAttributes, undefined, match) || {};
            const o = state.tr.delete(range.from, range.to);
            const a = o.doc.resolve(range.from).blockRange();
            const c = a && Ks(a, n.type, i);
            if (!c) {
                return null;
            }
            o.wrap(a, c);
            if (n.keepMarks && n.editor) {
                const { selection, storedMarks } = state;
                const { splittableMarks } = n.editor.extensionManager;
                const p = storedMarks || selection.$to.parentOffset && selection.$from.marks();
                if (p) {
                    const m = p.filter((g)=>splittableMarks.includes(g.type.name));
                    o.ensureMarks(m);
                }
            }
            if (n.keepAttributes) {
                const d = n.type.name === "bulletList" || n.type.name === "orderedList" ? "listItem" : "taskList";
                chain().updateAttributes(d, i).run();
            }
            const nodeBefore = o.doc.resolve(range.from - 1).nodeBefore;
            if (nodeBefore && nodeBefore.type === n.type && et(o.doc, range.from - 1) && (!n.joinPredicate || n.joinPredicate(match, nodeBefore))) {
                o.join(range.from - 1);
            }
        },
        undoable: n.undoable
    });
}
const Fp = (n)=>"touches" in n;
var uy = class {
    constructor(n){
        this.directions = [
            "bottom-left",
            "bottom-right",
            "top-left",
            "top-right"
        ];
        this.minSize = {
            height: 8,
            width: 8
        };
        this.preserveAspectRatio = false;
        this.classNames = {
            container: "",
            wrapper: "",
            handle: "",
            resizing: ""
        };
        this.initialWidth = 0;
        this.initialHeight = 0;
        this.aspectRatio = 1;
        this.isResizing = false;
        this.activeHandle = null;
        this.startX = 0;
        this.startY = 0;
        this.startWidth = 0;
        this.startHeight = 0;
        this.isShiftKeyPressed = false;
        this.lastEditableState = undefined;
        this.handleMap = new Map;
        this.handleMouseMove = (l)=>{
            if (!this.isResizing || !this.activeHandle) {
                return;
            }
            const a = l.clientX - this.startX;
            const c = l.clientY - this.startY;
            this.handleResize(a, c);
        };
        this.handleTouchMove = (l)=>{
            if (!this.isResizing || !this.activeHandle) {
                return;
            }
            const a = l.touches[0];
            if (!a) {
                return;
            }
            const c = a.clientX - this.startX;
            const u = a.clientY - this.startY;
            this.handleResize(c, u);
        };
        this.handleMouseUp = ()=>{
            if (!this.isResizing) {
                return;
            }
            const offsetWidth = this.element.offsetWidth;
            const offsetHeight = this.element.offsetHeight;
            this.onCommit(offsetWidth, offsetHeight);
            this.isResizing = false;
            this.activeHandle = null;
            this.container.dataset.resizeState = "false";
            if (this.classNames.resizing) {
                this.container.classList.remove(this.classNames.resizing);
            }
            document.removeEventListener("mousemove", this.handleMouseMove);
            document.removeEventListener("mouseup", this.handleMouseUp);
            document.removeEventListener("keydown", this.handleKeyDown);
            document.removeEventListener("keyup", this.handleKeyUp);
        };
        this.handleKeyDown = (l)=>{
            if (l.key === "Shift") {
                this.isShiftKeyPressed = true;
            }
        };
        this.handleKeyUp = (l)=>{
            if (l.key === "Shift") {
                this.isShiftKeyPressed = false;
            }
        };
        var e;
        var t;
        var r;
        var s;
        var i;
        var o;
        this.node = n.node;
        this.editor = n.editor;
        this.element = n.element;
        this.contentElement = n.contentElement;
        this.getPos = n.getPos;
        this.onResize = n.onResize;
        this.onCommit = n.onCommit;
        this.onUpdate = n.onUpdate;
        if ((e = n.options) != null && e.min) {
            this.minSize = {
                ...this.minSize,
                ...n.options.min
            };
        }
        if ((t = n.options) != null && t.max) {
            this.maxSize = n.options.max;
        }
        if ((r = n?.options) != null && r.directions) {
            this.directions = n.options.directions;
        }
        if ((s = n.options) != null && s.preserveAspectRatio) {
            this.preserveAspectRatio = n.options.preserveAspectRatio;
        }
        if ((i = n.options) != null && i.className) {
            this.classNames = {
                container: n.options.className.container || "",
                wrapper: n.options.className.wrapper || "",
                handle: n.options.className.handle || "",
                resizing: n.options.className.resizing || ""
            };
        }
        if ((o = n.options) != null && o.createCustomHandle) {
            this.createCustomHandle = n.options.createCustomHandle;
        }
        this.wrapper = this.createWrapper();
        this.container = this.createContainer();
        this.applyInitialSize();
        this.attachHandles();
        this.editor.on("update", this.handleEditorUpdate.bind(this));
    }
    get dom() {
        return this.container;
    }
    get contentDOM() {
        return this.contentElement;
    }
    handleEditorUpdate() {
        const isEditable = this.editor.isEditable;
        if (isEditable !== this.lastEditableState) {
            this.lastEditableState = isEditable;
            if (isEditable) {
                if (isEditable && this.handleMap.size === 0) {
                    this.attachHandles();
                }
            } else {
                this.removeHandles();
            }
        }
    }
    update(n, e, t) {
        if (n.type !== this.node.type) {
            return false;
        }
        this.node = n;
        if (this.onUpdate) {
            return this.onUpdate(n, e, t);
        }
        return true;
    }
    destroy() {
        if (this.isResizing) {
            this.container.dataset.resizeState = "false";
            if (this.classNames.resizing) {
                this.container.classList.remove(this.classNames.resizing);
            }
            document.removeEventListener("mousemove", this.handleMouseMove);
            document.removeEventListener("mouseup", this.handleMouseUp);
            document.removeEventListener("keydown", this.handleKeyDown);
            document.removeEventListener("keyup", this.handleKeyUp);
            this.isResizing = false;
            this.activeHandle = null;
        }
        this.editor.off("update", this.handleEditorUpdate.bind(this));
        this.container.remove();
    }
    createContainer() {
        const n = document.createElement("div");
        n.dataset.resizeContainer = "";
        n.dataset.node = this.node.type.name;
        n.style.display = "flex";
        if (this.classNames.container) {
            n.className = this.classNames.container;
        }
        n.appendChild(this.wrapper);
        return n;
    }
    createWrapper() {
        const n = document.createElement("div");
        n.style.position = "relative";
        n.style.display = "block";
        n.dataset.resizeWrapper = "";
        if (this.classNames.wrapper) {
            n.className = this.classNames.wrapper;
        }
        n.appendChild(this.element);
        return n;
    }
    createHandle(n) {
        const e = document.createElement("div");
        e.dataset.resizeHandle = n;
        e.style.position = "absolute";
        if (this.classNames.handle) {
            e.className = this.classNames.handle;
        }
        return e;
    }
    positionHandle(n, e) {
        const t = e.includes("top");
        const r = e.includes("bottom");
        const s = e.includes("left");
        const i = e.includes("right");
        if (t) {
            n.style.top = "0";
        }
        if (r) {
            n.style.bottom = "0";
        }
        if (s) {
            n.style.left = "0";
        }
        if (i) {
            n.style.right = "0";
        }
        if (e === "top" || e === "bottom") {
            n.style.left = "0";
            n.style.right = "0";
        }
        if (e === "left" || e === "right") {
            n.style.top = "0";
            n.style.bottom = "0";
        }
    }
    attachHandles() {
        this.directions.forEach((n)=>{
            let e;
            if (this.createCustomHandle) {
                e = this.createCustomHandle(n);
            } else {
                e = this.createHandle(n);
            }
            if (!(e instanceof HTMLElement)) {
                console.warn(`[ResizableNodeView] createCustomHandle("${n}") did not return an HTMLElement. Falling back to default handle.`);
                e = this.createHandle(n);
            }
            if (!this.createCustomHandle) {
                this.positionHandle(e, n);
            }
            e.addEventListener("mousedown", (t)=>this.handleResizeStart(t, n));
            e.addEventListener("touchstart", (t)=>this.handleResizeStart(t, n));
            this.handleMap.set(n, e);
            this.wrapper.appendChild(e);
        });
    }
    removeHandles() {
        this.handleMap.forEach((n)=>n.remove());
        this.handleMap.clear();
    }
    applyInitialSize() {
        const width = this.node.attrs.width;
        const height = this.node.attrs.height;
        if (width) {
            this.element.style.width = `${width}px`;
            this.initialWidth = width;
        } else {
            this.initialWidth = this.element.offsetWidth;
        }
        if (height) {
            this.element.style.height = `${height}px`;
            this.initialHeight = height;
        } else {
            this.initialHeight = this.element.offsetHeight;
        }
        if (this.initialWidth > 0 && this.initialHeight > 0) {
            this.aspectRatio = this.initialWidth / this.initialHeight;
        }
    }
    handleResizeStart(n, e) {
        n.preventDefault();
        n.stopPropagation();
        this.isResizing = true;
        this.activeHandle = e;
        if (Fp(n)) {
            this.startX = n.touches[0].clientX;
            this.startY = n.touches[0].clientY;
        } else {
            this.startX = n.clientX;
            this.startY = n.clientY;
        }
        this.startWidth = this.element.offsetWidth;
        this.startHeight = this.element.offsetHeight;
        if (this.startWidth > 0 && this.startHeight > 0) {
            this.aspectRatio = this.startWidth / this.startHeight;
        }
        this.getPos();
        this.container.dataset.resizeState = "true";
        if (this.classNames.resizing) {
            this.container.classList.add(this.classNames.resizing);
        }
        document.addEventListener("mousemove", this.handleMouseMove);
        document.addEventListener("touchmove", this.handleTouchMove);
        document.addEventListener("mouseup", this.handleMouseUp);
        document.addEventListener("keydown", this.handleKeyDown);
        document.addEventListener("keyup", this.handleKeyUp);
    }
    handleResize(n, e) {
        if (!this.activeHandle) {
            return;
        }
        const t = this.preserveAspectRatio || this.isShiftKeyPressed;
        const { width, height } = this.calculateNewDimensions(this.activeHandle, n, e);
        const i = this.applyConstraints(width, height, t);
        this.element.style.width = `${i.width}px`;
        this.element.style.height = `${i.height}px`;
        if (this.onResize) {
            this.onResize(i.width, i.height);
        }
    }
    calculateNewDimensions(n, e, t) {
        let startWidth = this.startWidth;
        let startHeight = this.startHeight;
        const i = n.includes("right");
        const o = n.includes("left");
        const l = n.includes("bottom");
        const a = n.includes("top");
        if (i) {
            startWidth = this.startWidth + e;
        } else if (o) {
            startWidth = this.startWidth - e;
        }
        if (l) {
            startHeight = this.startHeight + t;
        } else if (a) {
            startHeight = this.startHeight - t;
        }
        if (n === "right" || n === "left") {
            startWidth = this.startWidth + (i ? e : -e);
        }
        if (n === "top" || n === "bottom") {
            startHeight = this.startHeight + (l ? t : -t);
        }
        if (this.preserveAspectRatio || this.isShiftKeyPressed) {
            return this.applyAspectRatio(startWidth, startHeight, n);
        }
        return {
            width: startWidth,
            height: startHeight
        };
    }
    applyConstraints(n, e, t) {
        let r;
        let s;
        let i;
        let o;
        if (!t) {
            let c = Math.max(this.minSize.width, n);
            let u = Math.max(this.minSize.height, e);
            if ((r = this.maxSize) != null && r.width) {
                c = Math.min(this.maxSize.width, c);
            }
            if ((s = this.maxSize) != null && s.height) {
                u = Math.min(this.maxSize.height, u);
            }
            return {
                width: c,
                height: u
            };
        }
        let l = n;
        let a = e;
        if (l < this.minSize.width) {
            l = this.minSize.width;
            a = l / this.aspectRatio;
        }
        if (a < this.minSize.height) {
            a = this.minSize.height;
            l = a * this.aspectRatio;
        }
        if ((i = this.maxSize) != null && i.width && l > this.maxSize.width) {
            l = this.maxSize.width;
            a = l / this.aspectRatio;
        }
        if ((o = this.maxSize) != null && o.height && a > this.maxSize.height) {
            a = this.maxSize.height;
            l = a * this.aspectRatio;
        }
        return {
            width: l,
            height: a
        };
    }
    applyAspectRatio(n, e, t) {
        const r = t === "left" || t === "right";
        const s = t === "top" || t === "bottom";
        if (r) {
            return {
                width: n,
                height: n / this.aspectRatio
            };
        }
        if (s) {
            return {
                width: e * this.aspectRatio,
                height: e
            };
        }
        return {
            width: n,
            height: n / this.aspectRatio
        };
    }
};
export function Hp(n, e) {
    const { selection } = n;
    const { $from } = selection;
    if (selection instanceof v) {
        const i = $from.index();
        return $from.parent.canReplaceWith(i, i + 1, e);
    }
    let $from_depth = $from.depth;
    while($from_depth >= 0){
        const i = $from.index($from_depth);
        if ($from.node($from_depth).contentMatchAt(i).matchType(e)) {
            return true;
        }
        $from_depth -= 1;
    }
    return false;
}
export function dy(n) {
    return n.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
export { V, Editable as ac, cc, Keymap as dc, Paste as fc, Tabindex as hc, Commands as ic, Drop as lc, oc, TextDirection as pc, ClipboardTextSerializer as sc, FocusEvents as uc, uy };
export var Pp = {
    get ClipboardTextSerializer () {
        return ClipboardTextSerializer;
    },
    get Commands () {
        return Commands;
    },
    get Delete () {
        return oc;
    },
    get Drop () {
        return Drop;
    },
    get Editable () {
        return Editable;
    },
    get FocusEvents () {
        return FocusEvents;
    },
    get Keymap () {
        return Keymap;
    },
    get Paste () {
        return Paste;
    },
    get Tabindex () {
        return Tabindex;
    },
    get TextDirection () {
        return TextDirection;
    },
    get focusEventsPluginKey () {
        return cc;
    }
};
