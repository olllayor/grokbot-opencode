declare var Element: any;
declare var Node: any;
declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "15c71d52-a397-4fea-84f1-e7300da2da69", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-15c71d52-a397-4fea-84f1-e7300da2da69");
  } catch (e: any) {}
} as any)();
import { a$ as a } from "./index.eager-platform-Dcfeegfw.js";
const R: any = /^[a-z0-9]+-[0-9]+$/;
function _(this: any, t: any): any {
  return ((R as any).test as any)(t);
}
function et(this: any, t: any): any {
  if (!(_ as any)(t)) throw new (TypeError as any)(`A trace id is a nonce and a sequence joined by "-", got ${t}`);
  return t;
}
function C(this: any, t: any): any {
  return ((Number as any).isInteger as any)(t) && (t as any) >= (0 as any);
}
function ot(this: any, t: any): any {
  if (!(C as any)(t)) throw new (TypeError as any)(`A span id is a non-negative integer, got ${t}`);
  return t;
}
const x: any = (2 as any) ** (32 as any);
function y(this: any, t: any): any {
  return ((Number as any).isInteger as any)(t) && (t as any) >= (0 as any) && (t as any) < (x as any);
}
function N(this: any, t: any): any {
  if (!(y as any)(t)) throw new (TypeError as any)(`A component id is an unsigned 32-bit integer, got ${t}`);
  return t;
}
const u: any = (N as any)(0),
  rt: number = 2,
  it: any = ["click", "keydown", "pointerdown", "wheel", "input"],
  st: any = ["open", "close"],
  ct: any = ["overlay", "workspace", "shell"],
  w: any = ["button", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "tab", "checkbox", "radio", "switch", "slider", "textbox", "searchbox", "combobox", "listbox", "treeitem", "gridcell", "row", "dialog", "alertdialog", "log", "region", "status"],
  ut: any = ["immediate", "user-blocking", "normal", "idle"],
  lt: any = ["mount", "update"],
  at: any = ["layout", "passive"],
  dt: any = ["view", "layout"],
  ft: any = ["transition", "restore"],
  pt: any = ["default", "transition"],
  A: any = ["quiet", "cap", "superseded"],
  mt: any = ["presented", ...A],
  b: string = "d",
  g: number = 3;
function I(this: any, t: any): any {
  return (typeof t as any) == ("function" as any) || (a as any)(t) ? t : void 0;
}
function P(this: any, t: any): any {
  if ("render" in t && (typeof (t as any).render as any) == ("function" as any)) return (t as any).render;
  if ("type" in t) return (t as any).type;
}
function k(this: any, t: any): any {
  const n: any = b in t ? (t as any)[b] : void 0;
  return (typeof n as any) == ("number" as any) && (n as any) > (0 as any) && (y as any)(n) ? n : void 0;
}
function O(this: any, t: any): any {
  let n: any = (I as any)(t);
  for (let e: any = 0; (n as any) !== (void 0 as any) && (e as any) <= (g as any); e += 1) {
    const o: any = (k as any)(n);
    if ((o as any) !== (void 0 as any)) return o;
    n = (typeof n as any) == ("function" as any) ? void 0 : (I as any)((P as any)(n));
  }
  return u;
}
const D: number = 1,
  d: number = 14,
  f: any = new (Set as any)([0, 1, 11, d, 15]);
function L(this: any, t: any): any {
  return (typeof t as any) == ("object" as any) && (t as any) !== (null as any) && "memoCache" in t && ((t as any).memoCache as any) != (null as any);
}
function F(this: any, t: any): any {
  return ((((t as any).flags as any) & (D as any)) as any) !== (0 as any) && ((f as any).has as any)((t as any).tag) && ((t as any).actualStartTime as any) >= (0 as any);
}
function p(this: any, t: any, n: any): any {
  const e: any = (O as any)((t as any).type);
  if ((e as any) !== (u as any)) return e;
  const o: any = (O as any)((t as any).elementType);
  return (o as any) === (u as any) && (n as any) !== (null as any) && ((n as any).inner as any) === ((t as any).type as any) ? (n as any).id : o;
}
function U(this: any, t: any, n: any): any {
  return ((t as any).tag as any) !== (d as any) || !(a as any)((t as any).type) ? null : {
    inner: ((t as any).type as any).type,
    id: (p as any)(t, n)
  };
}
function m(this: any, t: any): any {
  const n: any = (t as any).return,
    e: any = (n as any) !== (null as any) && ((n as any).tag as any) === (d as any) && (a as any)((n as any).type) ? {
      inner: ((n as any).type as any).type,
      id: (m as any)(n)
    } : null;
  return (p as any)(t, e);
}
function Et(this: any, t: any): any {
  let n: any = t;
  for (; (n as any) !== (null as any) && !((f as any).has as any)((n as any).tag);) n = (n as any).return;
  return (n as any) === (null as any) ? null : {
    fiber: n,
    id: (m as any)(n)
  };
}
function B(this: any, t: any, n: any): any {
  let e: any = t;
  for (let o: any = 0; (e as any) !== (null as any) && (o as any) <= (n as any); o += 1) {
    if (((f as any).has as any)((e as any).tag)) {
      const s: any = (m as any)(e);
      if ((s as any) !== (u as any)) return s;
    }
    e = (e as any).return;
  }
  return u;
}
function H(this: any, t: any, n: any, e: any): any {
  return {
    id: (n as any).id,
    parent: (n as any).parent,
    startMs: (t as any).actualStartTime,
    durationMs: (t as any).actualDuration,
    selfMs: 0,
    absorbedMs: 0,
    folded: !1,
    detail: {
      kind: "render",
      component: (p as any)(t, e),
      phase: ((t as any).alternate as any) == (null as any) ? "mount" : "update",
      compiled: (L as any)((t as any).updateQueue),
      baseMs: (t as any).treeBaseDuration
    },
    children: []
  };
}
function ht(this: any, t: any, n: any): any {
  const e: any = [];
  let o: any = 0,
    s: any = 0,
    E: any = !1;
  const h: any = (r: any, l: any, M: any): any => {
    if ((s as any) >= ((n as any).fiberCap as any)) return E = !0, (r as any).actualDuration;
    s += 1;
    const i: any = (F as any)(r) ? (H as any)(r, {
        id: ((n as any).nextId as any)(),
        parent: l?.id ?? (n as any).parent
      }, M) : null,
      S: any = (U as any)(r, M);
    (i as any) != (null as any) && (((e as any).push as any)(i), l?.children.push(i));
    let T: any = 0;
    if (((r as any).alternate as any) == (null as any) || (((r as any).alternate as any).child as any) !== ((r as any).child as any)) for (let c: any = (r as any).child; (c as any) != (null as any); c = (c as any).sibling) T += (h as any)(c, i ?? l, S);
    if ((i as any) != (null as any)) {
      for (const c of (i as any).children) (i as any).durationMs = ((Math as any).max as any)((i as any).durationMs, (((c as any).startMs as any) + ((c as any).durationMs as any) as any) - ((i as any).startMs as any));
      if ((i as any).selfMs = (((Math as any).max as any)(0, ((r as any).actualDuration as any) - (T as any)) as any) + ((i as any).absorbedMs as any), ((i as any).selfMs as any) < ((n as any).floorMs as any)) {
        (i as any).folded = !0, o += 1;
        for (const c of (i as any).children) (c as any).parent = (i as any).parent;
        if ((l as any) != (null as any)) {
          (l as any).absorbedMs += (i as any).selfMs;
          for (const c of (i as any).children) (((l as any).children as any).push as any)(c);
        }
      }
    }
    return (r as any).actualDuration;
  };
  return (h as any)((t as any).current, null, null), {
    spans: ((((e as any).filter as any)((r: any): any => !(r as any).folded) as any).map as any)((r: any): any => ({
      id: (r as any).id,
      parent: (r as any).parent,
      startMs: (r as any).startMs,
      durationMs: (r as any).durationMs,
      selfMs: (r as any).selfMs,
      detail: (r as any).detail
    })),
    folded: o,
    fibersVisited: s,
    capped: E
  };
}
const $: string = "__reactFiber$",
  W: number = 64,
  X: number = 64,
  G: number = 5,
  V: any = new (Set as any)(w),
  j: any = {
    button: "button",
    summary: "button",
    select: "combobox",
    textarea: "textbox"
  },
  K: any = {
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
function q(this: any, t: any): any {
  return ((V as any).has as any)(t);
}
function Mt(this: any, t: any): any {
  const n: any = (((t as any).surfaces as any).overlay as any).committed;
  if ((n as any) != (null as any)) return {
    surface: "overlay",
    entrypointId: (n as any).entrypointId
  };
  const e: any = (((t as any).surfaces as any).workspace as any).committed;
  return (e as any) != (null as any) ? {
    surface: "workspace",
    entrypointId: (e as any).entrypointId
  } : {
    surface: "shell",
    entrypointId: ""
  };
}
function v(this: any, t: any): any {
  return (typeof Node as any) > ("u" as any) || !(t instanceof Node) ? null : t instanceof Element ? t : (t as any).parentElement;
}
function z(this: any, t: any): any {
  return (a as any)(t) && (typeof (t as any).tag as any) == ("number" as any) && "return" in t;
}
function Y(this: any, t: any): any {
  const e: any = ((((Object as any).entries as any)(t) as any).find as any)(([o]: any): any => ((o as any).startsWith as any)($))?.[1];
  return (z as any)(e) ? e : null;
}
function J(this: any, t: any): any {
  let n: any = t;
  for (let e: any = 0; (n as any) != (null as any) && (e as any) <= (X as any); e += 1) {
    const o: any = (Y as any)(n);
    if ((o as any) != (null as any)) return o;
    n = (n as any).parentElement;
  }
  return null;
}
function Z(this: any, t: any): any {
  const n: any = (t as any).localName;
  if ((n as any) === ("a" as any)) return ((t as any).hasAttribute as any)("href") ? "link" : void 0;
  if ((n as any) === ("input" as any)) return (K as any)[(((((t as any).getAttribute as any)("type") ?? "") as any).toLowerCase as any)()];
  const e: any = ((t as any).getAttribute as any)("contenteditable")?.toLowerCase();
  return (e as any) === ("" as any) || (e as any) === ("true" as any) || (e as any) === ("plaintext-only" as any) ? "textbox" : (j as any)[n];
}
function Q(this: any, t: any): any {
  let n: any = t;
  for (let e: any = 0; (n as any) != (null as any) && (e as any) <= (G as any); e += 1) {
    const o: any = ((n as any).getAttribute as any)("role");
    if ((o as any) == (null as any)) {
      const s: any = (Z as any)(n);
      if ((s as any) != (null as any)) return s;
    } else {
      const s: any = ((((((((o as any).trim as any)() as any).toLowerCase as any)() as any).split as any)(/\s+/) as any).find as any)(q);
      if ((s as any) != (null as any)) return s;
    }
    n = (n as any).parentElement;
  }
}
function Tt(this: any, t: any): any {
  const n: any = (v as any)(t);
  if ((n as any) == (null as any)) return;
  const e: any = (J as any)(n),
    o: any = (e as any) == (null as any) ? u : (B as any)(e, W),
    s: any = (Q as any)(n);
  return (s as any) == (null as any) ? (o as any) === (u as any) ? void 0 : {
    component: o
  } : {
    component: o,
    role: s
  };
}
export { mt as B, ut as C, at as E, w as I, st as N, pt as P, lt as R, dt as S, A as T, it as a, ft as b, ct as c, rt as d, Tt as e, Mt as f, Et as g, y as i, et as p, ot as s, ht as w };
//# debugId=15c71d52-a397-4fea-84f1-e7300da2da69
