import { a$ } from "./index.eager-platform-Dcfeegfw.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "15c71d52-a397-4fea-84f1-e7300da2da69";
            e._sentryDebugIdIdentifier = "sentry-dbid-15c71d52-a397-4fea-84f1-e7300da2da69";
        }
    } catch (e) {}
})();
const R = /^[a-z0-9]+-[0-9]+$/;
function _(t) {
    return R.test(t);
}
function et(t) {
    if (!_(t)) {
        throw new TypeError(`A trace id is a nonce and a sequence joined by "-", got ${t}`);
    }
    return t;
}
function C(t) {
    return Number.isInteger(t) && t >= 0;
}
function ot(t) {
    if (!C(t)) {
        throw new TypeError(`A span id is a non-negative integer, got ${t}`);
    }
    return t;
}
const x = 2 ** 32;
export function i(t) {
    return Number.isInteger(t) && t >= 0 && t < x;
}
function N(t) {
    if (!i(t)) {
        throw new TypeError(`A component id is an unsigned 32-bit integer, got ${t}`);
    }
    return t;
}
const u = N(0);
const rt = 2;
const it = [
    "click",
    "keydown",
    "pointerdown",
    "wheel",
    "input"
];
const st = [
    "open",
    "close"
];
const ct = [
    "overlay",
    "workspace",
    "shell"
];
const w = [
    "button",
    "link",
    "menuitem",
    "menuitemcheckbox",
    "menuitemradio",
    "option",
    "tab",
    "checkbox",
    "radio",
    "switch",
    "slider",
    "textbox",
    "searchbox",
    "combobox",
    "listbox",
    "treeitem",
    "gridcell",
    "row",
    "dialog",
    "alertdialog",
    "log",
    "region",
    "status"
];
const ut = [
    "immediate",
    "user-blocking",
    "normal",
    "idle"
];
const lt = [
    "mount",
    "update"
];
const at = [
    "layout",
    "passive"
];
const dt = [
    "view",
    "layout"
];
const ft = [
    "transition",
    "restore"
];
const pt = [
    "default",
    "transition"
];
export const T = [
    "quiet",
    "cap",
    "superseded"
];
const mt = [
    "presented",
    ...T
];
const b = "d";
const g = 3;
function I(t) {
    if (typeof t === "function" || a$(t)) {
        return t;
    }
}
function P(t) {
    if ("render" in t && typeof t.render === "function") {
        return t.render;
    }
    if ("type" in t) {
        return t.type;
    }
}
function k(t) {
    const n = b in t ? t[b] : undefined;
    if (typeof n === "number" && n > 0 && i(n)) {
        return n;
    }
}
function O(t) {
    let n = I(t);
    for(let e = 0; n !== undefined && e <= g; e += 1){
        const o = k(n);
        if (o !== undefined) {
            return o;
        }
        n = typeof n === "function" ? undefined : I(P(n));
    }
    return u;
}
const D = 1;
const d = 14;
const f = new Set([
    0,
    1,
    11,
    d,
    15
]);
function L(updateQueue) {
    return typeof updateQueue === "object" && updateQueue !== null && "memoCache" in updateQueue && updateQueue.memoCache != null;
}
function F(t) {
    return (t.flags & D) !== 0 && f.has(t.tag) && t.actualStartTime >= 0;
}
function p(t, n) {
    const e = O(t.type);
    if (e !== u) {
        return e;
    }
    const o = O(t.elementType);
    if (o === u && n !== null && n.inner === t.type) {
        return n.id;
    }
    return o;
}
function U(t, n) {
    if (t.tag !== d || !a$(t.type)) {
        return null;
    }
    return {
        inner: t.type.type,
        id: p(t, n)
    };
}
function m(t) {
    const t_return = t.return;
    const e = t_return !== null && t_return.tag === d && a$(t_return.type) ? {
        inner: t_return.type.type,
        id: m(t_return)
    } : null;
    return p(t, e);
}
function Et(t) {
    let fiber = t;
    while(fiber !== null && !f.has(fiber.tag)){
        fiber = fiber.return;
    }
    if (fiber === null) {
        return null;
    }
    return {
        fiber,
        id: m(fiber)
    };
}
function B(t, n) {
    let e = t;
    for(let o = 0; e !== null && o <= n; o += 1){
        if (f.has(e.tag)) {
            const s = m(e);
            if (s !== u) {
                return s;
            }
        }
        e = e.return;
    }
    return u;
}
function H(t, n, e) {
    return {
        id: n.id,
        parent: n.parent,
        startMs: t.actualStartTime,
        durationMs: t.actualDuration,
        selfMs: 0,
        absorbedMs: 0,
        folded: false,
        detail: {
            kind: "render",
            component: p(t, e),
            phase: t.alternate == null ? "mount" : "update",
            compiled: L(t.updateQueue),
            baseMs: t.treeBaseDuration
        },
        children: []
    };
}
function ht(t, n) {
    const e = [];
    let folded = 0;
    let fibersVisited = 0;
    let capped = false;
    const h = (r, l, M)=>{
        if (fibersVisited >= n.fiberCap) {
            capped = true;
            return r.actualDuration;
        }
        fibersVisited += 1;
        const i = F(r) ? H(r, {
            id: n.nextId(),
            parent: l?.id ?? n.parent
        }, M) : null;
        const S = U(r, M);
        if (i != null) {
            e.push(i);
            l?.children.push(i);
        }
        let T = 0;
        if (r.alternate == null || r.alternate.child !== r.child) {
            for(let c = r.child; c != null; c = c.sibling){
                T += h(c, i ?? l, S);
            }
        }
        if (i != null) {
            for (const c of i.children){
                i.durationMs = Math.max(i.durationMs, c.startMs + c.durationMs - i.startMs);
            }
            i.selfMs = Math.max(0, r.actualDuration - T) + i.absorbedMs;
            if (i.selfMs < n.floorMs) {
                i.folded = true;
                folded += 1;
                for (const c of i.children){
                    c.parent = i.parent;
                }
                if (l != null) {
                    l.absorbedMs += i.selfMs;
                    for (const c of i.children){
                        l.children.push(c);
                    }
                }
            }
        }
        return r.actualDuration;
    };
    h(t.current, null, null);
    return {
        spans: e.filter((r)=>!r.folded).map((r)=>({
                id: r.id,
                parent: r.parent,
                startMs: r.startMs,
                durationMs: r.durationMs,
                selfMs: r.selfMs,
                detail: r.detail
            })),
        folded,
        fibersVisited,
        capped
    };
}
const $ = "__reactFiber$";
const W = 64;
const X = 64;
const G = 5;
const V = new Set(w);
const j = {
    button: "button",
    summary: "button",
    select: "combobox",
    textarea: "textbox"
};
const K = {
    "": "textbox",
    text: "textbox",
    email: "textbox",
    tel: "textbox",
    url: "textbox",
    search: "searchbox",
    checkbox: "checkbox",
    radio: "radio",
    range: "slider",
    button: "button",
    submit: "button",
    reset: "button",
    image: "button"
};
function q(t) {
    return V.has(t);
}
function Mt(t) {
    const committed = t.surfaces.overlay.committed;
    if (committed != null) {
        return {
            surface: "overlay",
            entrypointId: committed.entrypointId
        };
    }
    const committed_1 = t.surfaces.workspace.committed;
    if (committed_1 != null) {
        return {
            surface: "workspace",
            entrypointId: committed_1.entrypointId
        };
    }
    return {
        surface: "shell",
        entrypointId: ""
    };
}
function v(t) {
    if (typeof Node === "undefined" || !(t instanceof Node)) {
        return null;
    }
    if (t instanceof Element) {
        return t;
    }
    return t.parentElement;
}
function z(t) {
    return a$(t) && typeof t.tag === "number" && "return" in t;
}
function Y(t) {
    const e = Object.entries(t).find(([o])=>o.startsWith($))?.[1];
    if (z(e)) {
        return e;
    }
    return null;
}
function J(t) {
    let n = t;
    for(let e = 0; n != null && e <= X; e += 1){
        const o = Y(n);
        if (o != null) {
            return o;
        }
        n = n.parentElement;
    }
    return null;
}
function Z(t) {
    const t_localName = t.localName;
    if (t_localName === "a") {
        if (t.hasAttribute("href")) {
            return "link";
        }
        return undefined;
    }
    if (t_localName === "input") {
        return K[(t.getAttribute("type") ?? "").toLowerCase()];
    }
    const e = t.getAttribute("contenteditable")?.toLowerCase();
    if (e === "" || e === "true" || e === "plaintext-only") {
        return "textbox";
    }
    return j[t_localName];
}
function Q(t) {
    let n = t;
    for(let e = 0; n != null && e <= G; e += 1){
        const o = n.getAttribute("role");
        if (o == null) {
            const s = Z(n);
            if (s != null) {
                return s;
            }
        } else {
            const s = o.trim().toLowerCase().split(/\s+/).find(q);
            if (s != null) {
                return s;
            }
        }
        n = n.parentElement;
    }
}
function Tt(t) {
    const n = v(t);
    if (n == null) {
        return;
    }
    const e = J(n);
    const component = e == null ? u : B(e, W);
    const role = Q(n);
    if (role == null) {
        if (component === u) {
            return undefined;
        }
        return {
            component
        };
    }
    return {
        component,
        role
    };
}
export { mt as B, ut as C, at as E, w as I, st as N, pt as P, lt as R, dt as S, it as a, ft as b, ct as c, rt as d, Tt as e, Mt as f, Et as g, et as p, ot as s, ht as w };
