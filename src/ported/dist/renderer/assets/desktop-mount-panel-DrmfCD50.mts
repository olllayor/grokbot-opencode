declare var Element: any;
declare var HTMLButtonElement: any;
declare var HTMLElement: any;
declare var HTMLFormElement: any;
declare var HTMLImageElement: any;
declare var HTMLTemplateElement: any;
declare var HTMLTextAreaElement: any;
declare var Node: any;
declare var document: any;
declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "67091c97-aa47-407b-ba7e-f0771add3792", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-67091c97-aa47-407b-ba7e-f0771add3792");
  } catch (e: any) {}
} as any)();
import { i as w, e as C, K as B } from "./index.eager-common-CdCvBQNJ.js";
function H(this: any, t: any): any {
  const e: any = ((t as any).getElementById as any)("panel"),
    r: any = ((t as any).getElementById as any)("mount-trigger"),
    n: any = ((t as any).getElementById as any)("mark"),
    o: any = ((t as any).getElementById as any)("bot-menu"),
    i: any = ((t as any).getElementById as any)("bot-menu-item"),
    u: any = ((t as any).getElementById as any)("composer"),
    p: any = ((t as any).getElementById as any)("prompt"),
    s: any = ((t as any).getElementById as any)("send");
  return (w as any)(e instanceof HTMLElement && r instanceof HTMLButtonElement && n instanceof HTMLImageElement && o instanceof HTMLElement && i instanceof HTMLTemplateElement && u instanceof HTMLFormElement && p instanceof HTMLTextAreaElement && s instanceof HTMLButtonElement, "desktop mount panel: document skeleton missing"), {
    root: e,
    trigger: r,
    mark: n,
    menu: o,
    menuItem: i,
    composer: u,
    prompt: p,
    send: s
  };
}
function D(this: any, t: any): any {
  delete (((t as any).root as any).dataset as any).state, delete (((t as any).root as any).dataset as any).failure;
}
function b(this: any, t: any): any {
  return ((((t as any).root as any).dataset as any).expanded as any) != (null as any);
}
function I(this: any, t: any, e: any): any {
  e ? (((t as any).root as any).dataset as any).expanded = "true" : delete (((t as any).root as any).dataset as any).expanded, (((t as any).trigger as any).setAttribute as any)("aria-expanded", (String as any)(e)), (((t as any).composer as any).toggleAttribute as any)("inert", !e), e && (((t as any).prompt as any).focus as any)();
}
function m(this: any, t: any, e: any): any {
  (((t as any).root as any).dataset as any).state = "failed", (((t as any).root as any).dataset as any).failure = (C as any)(e);
}
const A: number = 44,
  S: number = 52;
function y(this: any, t: any): any {
  ((t as any).style as any).height = "auto";
  const e: any = ((Math as any).min as any)(((Math as any).max as any)((t as any).scrollHeight, A), 140);
  ((t as any).style as any).height = `${e}px`, (e as any) > (S as any) ? ((t as any).dataset as any).expanded = "true" : delete ((t as any).dataset as any).expanded;
}
const R: number = 12;
function T(this: any, t: any): any {
  for (const e of (P as any)((t as any).menu)) ((e as any).setAttribute as any)("aria-checked", (String as any)((((e as any).dataset as any).agentId as any) === ((((t as any).root as any).dataset as any).agentId as any)));
}
function _(this: any, t: any, e: any): any {
  (((t as any).menu as any).replaceChildren as any)(...((e as any).map as any)((r: any): any => {
    const n: any = (((t as any).menuItem as any).content as any).firstElementChild?.cloneNode(!0);
    (w as any)(n instanceof HTMLButtonElement, "desktop mount panel: menu item template missing"), ((n as any).dataset as any).agentId = (r as any).agentId, ((n as any).querySelector as any)("img")?.setAttribute("src", (r as any).markSvgDataUrl);
    const o: any = ((n as any).querySelector as any)(".bot-menu-name");
    return (o as any) != (null as any) && ((o as any).textContent = (r as any).name), n;
  })), (T as any)(t);
}
function X(this: any, t: any, e: any): any {
  if (((t as any).root as any).hidden = ((e as any).mount as any) == (null as any), ((e as any).mount as any) == (null as any)) {
    delete (((t as any).root as any).dataset as any).agentId, (I as any)(t, !1);
    return;
  }
  (((t as any).root as any).dataset as any).agentId = ((e as any).mount as any).agentId, (T as any)(t), ((t as any).mark as any).src = ((e as any).mount as any).markSvgDataUrl, ((t as any).prompt as any).placeholder = ((e as any).mount as any).name, (D as any)(t);
}
function P(this: any, t: any): any {
  return (([...((t as any).querySelectorAll as any)("button.bot-menu-item")] as any).filter as any)((e: any): any => e instanceof HTMLButtonElement);
}
function G(this: any, t: any, e: any, r: any): any {
  switch (t) {
    case "ArrowDown":
      return ((e as any) + (1 as any) as any) % (r as any);
    case "ArrowUp":
      return (e as any) <= (0 as any) ? (r as any) - (1 as any) : (e as any) - (1 as any);
    case "Home":
      return 0;
    case "End":
      return (r as any) - (1 as any);
    default:
      return null;
  }
}
function F(this: any, t: any): any {
  const e: any = (t as any).offsetParent;
  return (e as any) == (null as any) ? (((t as any).getBoundingClientRect as any)() as any).top : (((((e as any).getBoundingClientRect as any)() as any).top as any) + ((e as any).clientTop as any) as any) + ((t as any).offsetTop as any);
}
function U(this: any, t: any): any {
  return ((Math as any).max as any)(0, ((Math as any).ceil as any)((R as any) - (t as any)));
}
function K(this: any, t: any, e: any, r: any): any {
  const {
      menu: n,
      trigger: o
    }: any = t,
    i: any = (n as any).ownerDocument;
  let u: any = 0;
  const p: any = (): any => !(n as any).hidden,
    s: any = (): any => {
      if (!(p as any)()) return;
      u += 1;
      const a: any = ((n as any).contains as any)((i as any).activeElement);
      (n as any).hidden = !0, delete ((n as any).dataset as any).open, ((((e as any).reachForMenu as any)({
        heightPx: 0
      }) as any).catch as any)((d: any): any => (m as any)(t, d)), a && ((o as any).focus as any)();
    },
    E: any = (): any => {
      const a: any = (P as any)(n);
      if (((a as any).length as any) === (0 as any)) return;
      const d: any = ++u;
      (n as any).hidden = !1;
      const k: any = (U as any)((F as any)(n));
      ((((e as any).reachForMenu as any)({
        heightPx: k
      }) as any).then as any)((): any => {
        if ((d as any) !== (u as any)) return;
        ((n as any).dataset as any).open = "true", (((a as any).find as any)((M: any): any => (((M as any).getAttribute as any)("aria-checked") as any) === ("true" as any)) ?? (a as any)[0])?.focus();
      }, (g: any): any => {
        (d as any) === (u as any) && (s as any)(), (m as any)(t, g);
      });
    },
    v: any = (a: any): any => {
      const d: any = ((a as any).dataset as any).agentId,
        k: any = (((a as any).getAttribute as any)("aria-checked") as any) === ("true" as any);
      (s as any)(), !((d as any) == (null as any) || k) && ((((e as any).switchTo as any)({
        agentId: d
      }) as any).catch as any)((g: any): any => (m as any)(t, g));
    },
    f: any = (a: any): any => {
      ((a as any).preventDefault as any)(), (p as any)() ? (s as any)() : (E as any)();
    },
    l: any = (): any => (s as any)(),
    c: any = (a: any): any => {
      const d: any = (a as any).target instanceof Element ? (((a as any).target as any).closest as any)("button.bot-menu-item") : null;
      d instanceof HTMLButtonElement && (v as any)(d);
    },
    h: any = (a: any): any => {
      if (((a as any).key as any) === ("Escape" as any) || ((a as any).key as any) === ("Tab" as any)) {
        ((a as any).preventDefault as any)(), ((a as any).stopPropagation as any)(), (s as any)();
        return;
      }
      const d: any = (P as any)(n),
        k: any = ((d as any).findIndex as any)((M: any): any => (M as any) === ((i as any).activeElement as any)),
        g: any = (G as any)((a as any).key, k, (d as any).length);
      (g as any) != (null as any) && (((a as any).preventDefault as any)(), (d as any)[g]?.focus());
    },
    L: any = (a: any): any => {
      !(p as any)() || !((a as any).target instanceof Node) || ((n as any).contains as any)((a as any).target) || ((o as any).contains as any)((a as any).target) && ((a as any).button as any) !== (0 as any) || (s as any)();
    };
  return ((o as any).addEventListener as any)("contextmenu", f), ((o as any).addEventListener as any)("click", l), ((n as any).addEventListener as any)("click", c), ((n as any).addEventListener as any)("keydown", h), ((i as any).addEventListener as any)("pointerdown", L), r?.addEventListener("blur", s), (): any => {
    ((o as any).removeEventListener as any)("contextmenu", f), ((o as any).removeEventListener as any)("click", l), ((n as any).removeEventListener as any)("click", c), ((n as any).removeEventListener as any)("keydown", h), ((i as any).removeEventListener as any)("pointerdown", L), r?.removeEventListener("blur", s);
  };
}
const N: number = 4;
function O(this: any, t: any, e: any): any {
  const {
    root: r,
    trigger: n
  }: any = t;
  let o: any = null,
    i: any = !1;
  const u: any = (c: any): any => (m as any)(t, c),
    p: any = (): any => {
      const c: any = (o?.dragging as any) === (!0 as any);
      return o = null, delete ((r as any).dataset as any).dragging, c && ((((e as any).endPanelMove as any)() as any).catch as any)(u), c;
    },
    s: any = (c: any): any => {
      ((c as any).button as any) === (0 as any) && (i = !1, o = {
        pointerId: (c as any).pointerId,
        screenX: (c as any).screenX,
        screenY: (c as any).screenY,
        dragging: !1
      }, ((n as any).setPointerCapture as any)((c as any).pointerId));
    },
    E: any = (c: any): any => {
      if ((o as any) == (null as any) || ((c as any).pointerId as any) !== ((o as any).pointerId as any)) return;
      const h: any = ((Math as any).round as any)(((c as any).screenX as any) - ((o as any).screenX as any)),
        L: any = ((Math as any).round as any)(((c as any).screenY as any) - ((o as any).screenY as any));
      if (!(o as any).dragging) {
        if ((((Math as any).hypot as any)(h, L) as any) < (N as any)) return;
        (o as any).dragging = !0, ((r as any).dataset as any).dragging = "true";
      }
      ((((e as any).movePanel as any)({
        dx: h,
        dy: L
      }) as any).catch as any)(u);
    },
    v: any = (c: any): any => {
      (o as any) == (null as any) || ((c as any).pointerId as any) !== ((o as any).pointerId as any) || (i = (p as any)());
    },
    f: any = (c: any): any => {
      (o as any) == (null as any) || ((c as any).pointerId as any) !== ((o as any).pointerId as any) || (p as any)();
    },
    l: any = (c: any): any => {
      i && (i = !1, ((c as any).preventDefault as any)(), ((c as any).stopPropagation as any)());
    };
  return ((n as any).addEventListener as any)("pointerdown", s), ((n as any).addEventListener as any)("pointermove", E), ((n as any).addEventListener as any)("pointerup", v), ((n as any).addEventListener as any)("pointercancel", f), ((n as any).addEventListener as any)("lostpointercapture", f), ((r as any).addEventListener as any)("click", l, !0), (): any => {
    (p as any)(), ((n as any).removeEventListener as any)("pointerdown", s), ((n as any).removeEventListener as any)("pointermove", E), ((n as any).removeEventListener as any)("pointerup", v), ((n as any).removeEventListener as any)("pointercancel", f), ((n as any).removeEventListener as any)("lostpointercapture", f), ((r as any).removeEventListener as any)("click", l, !0);
  };
}
function Y(this: any, t: any, e: any): any {
  const r: any = (): any => (I as any)(t, !(b as any)(t)),
    n: any = (i: any): any => {
      ((i as any).key as any) !== ("Escape" as any) || !(b as any)(t) || ((I as any)(t, !1), (((t as any).trigger as any).focus as any)());
    },
    o: any = (): any => {
      ((t as any).prompt as any).disabled || ((((((t as any).prompt as any).value as any).trim as any)() as any).length as any) > (0 as any) || (I as any)(t, !1);
    };
  return (((t as any).trigger as any).addEventListener as any)("click", r), (((t as any).root as any).addEventListener as any)("keydown", n), e?.addEventListener("blur", o), (): any => {
    (((t as any).trigger as any).removeEventListener as any)("click", r), (((t as any).root as any).removeEventListener as any)("keydown", n), e?.removeEventListener("blur", o);
  };
}
function q(this: any, t: any, e: any): any {
  const r: any = (): any => {
      if (((t as any).prompt as any).disabled) return;
      const i: any = ((((t as any).prompt as any).value as any).trim as any)();
      ((i as any).length as any) !== (0 as any) && (((t as any).prompt as any).disabled = !0, ((t as any).send as any).disabled = !0, (D as any)(t), (((((e as any)({
        prompt: i
      }) as any).then as any)((): any => {
        ((t as any).prompt as any).value = "", (y as any)((t as any).prompt), (I as any)(t, !1);
      }, (u: any): any => (m as any)(t, u)) as any).finally as any)((): any => {
        ((t as any).prompt as any).disabled = !1, ((t as any).send as any).disabled = !1, (b as any)(t) && (((t as any).prompt as any).focus as any)();
      }));
    },
    n: any = (i: any): any => {
      ((i as any).key as any) !== ("Enter" as any) || (i as any).shiftKey || (i as any).isComposing || (((i as any).preventDefault as any)(), (r as any)());
    },
    o: any = (i: any): any => {
      ((i as any).preventDefault as any)(), (r as any)();
    };
  return (((t as any).prompt as any).addEventListener as any)("keydown", n), (((t as any).composer as any).addEventListener as any)("submit", o), (): any => {
    (((t as any).prompt as any).removeEventListener as any)("keydown", n), (((t as any).composer as any).removeEventListener as any)("submit", o);
  };
}
function W(this: any, t: any): any {
  const e: any = (): any => (y as any)((t as any).prompt);
  return (((t as any).prompt as any).addEventListener as any)("input", e), (y as any)((t as any).prompt), (): any => (((t as any).prompt as any).removeEventListener as any)("input", e);
}
function V(this: any, t: any, e: any, r: any = (t as any).defaultView): any {
  const n: any = (H as any)(t),
    o: any = (l: any): any => (X as any)(n, l),
    i: any = (l: any): any => (_ as any)(n, l),
    u: any = ((e as any).subscribe as any)({
      changed: o,
      "choices-changed": i
    });
  ((((e as any).read as any)() as any).then as any)(o, (l: any): any => (m as any)(n, l)), ((((e as any).readChoices as any)() as any).then as any)(i, (l: any): any => (m as any)(n, l));
  const p: any = (Y as any)(n, r),
    s: any = (q as any)(n, (e as any).submitPrompt),
    E: any = (W as any)(n),
    v: any = (K as any)(n, e, r),
    f: any = (O as any)(n, e);
  return (): any => {
    (f as any)(), (u as any)(), (p as any)(), (s as any)(), (E as any)(), (v as any)();
  };
}
const x: any = (B as any)();
(w as any)((x as any) != (null as any), "desktop mount panel: preload did not expose window.desktopMount");
(V as any)(document, x);
//# debugId=67091c97-aa47-407b-ba7e-f0771add3792
