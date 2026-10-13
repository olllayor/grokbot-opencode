declare var MutationObserver: any;
declare var document: any;
declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "cd5231a7-1790-40f9-a052-b7a58521f5df", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-cd5231a7-1790-40f9-a052-b7a58521f5df");
  } catch (e: any) {}
} as any)();
import { c as S, r as j, p as y, j as $ } from "./index.eager-vendor-Qbf9YA6n.js";
import { u as V } from "./index.eager-platform-Dcfeegfw.js";
import { af as q } from "./index.eager-app-Cj5f8Gby.js";
const c: any = {
    viewport: {
      kVAEAm: "sand-1n2onr6",
      kHBbk8: "sand-c8icb0",
      k7Eaqz: "sand-euugli",
      kzQI83: "sand-1iyjqo2",
      kmuXW: "sand-2lah0s",
      kXHlph: "sand-6ikm8r",
      kORKVm: "sand-10wlt62",
      kWkggS: "sand-10e981r",
      $$css: !0
    },
    incoming: {
      kVAEAm: "sand-1n2onr6",
      kY2c9j: "sand-1ja2u2z",
      kB7OPa: "sand-9f619",
      k1xSpc: "sand-78zum5",
      kXwgrk: "sand-dt5ytf",
      k7Eaqz: "sand-euugli",
      kAzted: "sand-1us19tq",
      kzqmXN: "sand-h8yej3",
      kZKoxP: "sand-5yr21d",
      kWkggS: "sand-gcd1z6",
      $$css: !0
    },
    incomingPush: {
      kY2c9j: "sand-1vjfegm",
      kKVMdj: "sand-1p0om8u",
      k44tkh: "sand-rez4as",
      kyAemX: "sand-q56fva",
      $$css: !0
    },
    incomingPop: {
      kKVMdj: "sand-ovk6sj",
      k44tkh: "sand-rez4as",
      kyAemX: "sand-q56fva",
      $$css: !0
    },
    outgoing: {
      kVAEAm: "sand-10l6tqk",
      k87sOh: "sand-13vifvy",
      krVfgx: "sand-1ey2m1c",
      kLqNvP: "sand-1o0tod",
      kt4wiu: "sand-tijo5x",
      kY2c9j: "sand-1ja2u2z",
      kB7OPa: "sand-9f619",
      k1xSpc: "sand-78zum5",
      kXwgrk: "sand-dt5ytf",
      k7Eaqz: "sand-euugli",
      kWkggS: "sand-gcd1z6",
      kfzvcC: "sand-47corl",
      k44tkh: "sand-rez4as",
      kyAemX: "sand-q56fva",
      kWV6AL: "sand-10e4vud",
      $$css: !0
    },
    outgoingPush: {
      kKVMdj: "sand-4gu42u",
      $$css: !0
    },
    outgoingPop: {
      kY2c9j: "sand-1vjfegm",
      kKVMdj: "sand-2lu41s",
      $$css: !0
    },
    incomingCrossfadePush: {
      kY2c9j: "sand-1vjfegm",
      kKVMdj: "sand-vi7102",
      k44tkh: "sand-11c07rx",
      kyAemX: "sand-q56fva",
      $$css: !0
    },
    incomingCrossfadePop: {
      kY2c9j: "sand-1vjfegm",
      kKVMdj: "sand-y57tle",
      k44tkh: "sand-11c07rx",
      kyAemX: "sand-q56fva",
      $$css: !0
    },
    outgoingCrossfadePush: {
      kKVMdj: "sand-ljavfh",
      k44tkh: "sand-11c07rx",
      $$css: !0
    },
    outgoingCrossfadePop: {
      kKVMdj: "sand-1lcmlh9",
      k44tkh: "sand-11c07rx",
      $$css: !0
    }
  },
  K: string = 'h1, h2, h3, h4, h5, h6, [role="heading"]',
  P: string = '[aria-hidden="true"], [inert]';
function x(this: any): any {
  const e: any = (document as any).activeElement;
  return (e as any) == (null as any) || (e as any) === ((document as any).body as any) || (((e as any).closest as any)("[inert]") as any) != (null as any);
}
function A(this: any, e: any): any {
  if (((e as any).hasAttribute as any)("tabindex")) {
    ((e as any).focus as any)({
      preventScroll: !0
    });
    return;
  }
  ((e as any).setAttribute as any)("tabindex", "-1"), ((e as any).focus as any)({
    preventScroll: !0
  }), ((document as any).activeElement as any) === (e as any) ? ((e as any).addEventListener as any)("blur", (): any => ((e as any).removeAttribute as any)("tabindex"), {
    once: !0
  }) : ((e as any).removeAttribute as any)("tabindex");
}
function E(this: any, e: any): any {
  return ((((Array as any).from as any)(((e as any).querySelectorAll as any)(K)) as any).find as any)((n: any): any => (((n as any).closest as any)(P) as any) == (null as any)) ?? null;
}
function C(this: any, e: any, n: any): any {
  const t: any = new (MutationObserver as any)((): any => {
    ((n as any).matches as any)(P) || (((t as any).disconnect as any)(), (e as any).isConnected && (x as any)() && (z as any)(e));
  });
  ((t as any).observe as any)(n, {
    attributeFilter: ["aria-hidden", "inert"]
  });
}
function z(this: any, e: any): any {
  const n: any = ((e as any).closest as any)(P);
  if ((n as any) != (null as any)) {
    (C as any)(e, n);
    return;
  }
  const t: any = (E as any)(e);
  if ((t as any) != (null as any) && (A as any)(t), !(x as any)() || ((A as any)(e), ((document as any).activeElement as any) !== (e as any))) return;
  const s: any = new (MutationObserver as any)((): any => {
    const o: any = (E as any)(e);
    (o as any) != (null as any) && (((s as any).disconnect as any)(), (A as any)(o));
  });
  ((s as any).observe as any)(e, {
    childList: !0,
    subtree: !0
  }), ((e as any).addEventListener as any)("blur", (): any => ((s as any).disconnect as any)(), {
    once: !0
  });
}
function O(this: any, e: any): any {
  const n: any = ((S as any).c as any)(10),
    {
      current: t,
      paneKey: s,
      resolveFocus: o
    }: any = e,
    v: any = ((j as any).useRef as any)(null),
    l: any = ((j as any).useRef as any)(null),
    [f, i]: any = ((j as any).useState as any)(null);
  let g: any;
  ((n as any)[0] as any) !== (o as any) ? (g = (): any => {
    const d: any = (l as any).current;
    if ((d as any) == (null as any)) return;
    (l as any).current = null;
    const a: any = (v as any).current;
    (o as any)(d, a)?.focus({
      preventScroll: !0
    }), (a as any) != (null as any) && (x as any)() && (z as any)(a);
  }, (n as any)[0] = o, (n as any)[1] = g) : g = (n as any)[1], (V as any)(g);
  let k: any;
  ((n as any)[2] as any) !== (t as any) ? (k = (d: any): any => {
    const {
      direction: a,
      landing: m
    }: any = d;
    (l as any).current = m, (i as any)((q as any)() ? null : {
      direction: a,
      from: t
    });
  }, (n as any)[2] = t, (n as any)[3] = k) : k = (n as any)[3];
  let u: any;
  ((n as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (u = (): any => (i as any)(null), (n as any)[4] = u) : u = (n as any)[4];
  let r: any;
  return ((n as any)[5] as any) !== (t as any) || ((n as any)[6] as any) !== (s as any) || ((n as any)[7] as any) !== (k as any) || ((n as any)[8] as any) !== (f as any) ? (r = {
    current: t,
    transition: f,
    currentRef: v,
    paneKey: s,
    navigate: k,
    endTransition: u
  }, (n as any)[5] = t, (n as any)[6] = s, (n as any)[7] = k, (n as any)[8] = f, (n as any)[9] = r) : r = (n as any)[9], r;
}
function M(this: any, e: any, n: any): any {
  return (n as any) === ("crossfade" as any) ? (e as any) === ("push" as any) ? (c as any).incomingCrossfadePush : (c as any).incomingCrossfadePop : (e as any) === ("push" as any) ? (c as any).incomingPush : (c as any).incomingPop;
}
function w(this: any, e: any, n: any): any {
  return (n as any) === ("crossfade" as any) ? (e as any) === ("push" as any) ? (c as any).outgoingCrossfadePush : (c as any).outgoingCrossfadePop : (e as any) === ("push" as any) ? (c as any).outgoingPush : (c as any).outgoingPop;
}
function R(this: any, e: any, n: any): any {
  return (e as any) === (n as any) ? `out:${e}` : e;
}
function X(this: any, e: any): any {
  (X as any).d = 1465;
  const n: any = ((S as any).c as any)(27),
    {
      navigation: t,
      renderPane: s,
      style: o,
      variant: v
    }: any = e,
    l: any = (v as any) === (void 0 as any) ? "wipe" : v,
    {
      current: f,
      transition: i,
      paneKey: g,
      currentRef: k
    }: any = t;
  let u: any, r: any, d: any;
  ((n as any)[0] as any) !== (f as any) || ((n as any)[1] as any) !== (t as any) || ((n as any)[2] as any) !== (g as any) || ((n as any)[3] as any) !== (s as any) || ((n as any)[4] as any) !== (o as any) || ((n as any)[5] as any) !== (i as any) || ((n as any)[6] as any) !== (l as any) ? (u = (g as any)(f), ((n as any)[10] as any) !== (o as any) ? (r = (y as any)((c as any).viewport, o), (n as any)[10] = o, (n as any)[11] = r) : r = (n as any)[11], d = (i as any) == (null as any) ? null : (($ as any).jsx as any)("div", {
    "aria-hidden": !0,
    inert: !0,
    onAnimationEnd: (b: any): any => {
      ((b as any).target as any) === ((b as any).currentTarget as any) && ((t as any).endTransition as any)();
    },
    ...(y as any)((c as any).outgoing, (w as any)((i as any).direction, l)),
    children: (s as any)((i as any).from, !1)
  }, (R as any)((g as any)((i as any).from), u)), (n as any)[0] = f, (n as any)[1] = t, (n as any)[2] = g, (n as any)[3] = s, (n as any)[4] = o, (n as any)[5] = i, (n as any)[6] = l, (n as any)[7] = u, (n as any)[8] = r, (n as any)[9] = d) : (u = (n as any)[7], r = (n as any)[8], d = (n as any)[9]);
  let a: any;
  ((n as any)[12] as any) !== (i as any) || ((n as any)[13] as any) !== (l as any) ? (a = (y as any)((c as any).incoming, (i as any) != (null as any) && (M as any)((i as any).direction, l)), (n as any)[12] = i, (n as any)[13] = l, (n as any)[14] = a) : a = (n as any)[14];
  let m: any;
  ((n as any)[15] as any) !== (f as any) || ((n as any)[16] as any) !== (s as any) ? (m = (s as any)(f, !0), (n as any)[15] = f, (n as any)[16] = s, (n as any)[17] = m) : m = (n as any)[17];
  let h: any;
  ((n as any)[18] as any) !== (k as any) || ((n as any)[19] as any) !== (u as any) || ((n as any)[20] as any) !== (a as any) || ((n as any)[21] as any) !== (m as any) ? (h = (($ as any).jsx as any)("div", {
    ref: k,
    ...a,
    children: m
  }, u), (n as any)[18] = k, (n as any)[19] = u, (n as any)[20] = a, (n as any)[21] = m, (n as any)[22] = h) : h = (n as any)[22];
  let p: any;
  return ((n as any)[23] as any) !== (r as any) || ((n as any)[24] as any) !== (d as any) || ((n as any)[25] as any) !== (h as any) ? (p = (($ as any).jsxs as any)("div", {
    ...r,
    children: [d, h]
  }), (n as any)[23] = r, (n as any)[24] = d, (n as any)[25] = h, (n as any)[26] = p) : p = (n as any)[26], p;
}
export { X as W, O as u };
//# debugId=cd5231a7-1790-40f9-a052-b7a58521f5df
