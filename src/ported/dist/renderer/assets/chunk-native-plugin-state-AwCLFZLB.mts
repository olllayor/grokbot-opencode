declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "96769695-59be-459e-9c85-f3dd98ee1555", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-96769695-59be-459e-9c85-f3dd98ee1555");
  } catch (e: any) {}
} as any)();
import { c as l } from "./index.eager-vendor-Qbf9YA6n.js";
import { bg as c, b7 as o, bP as m, b8 as d, cs as b, ct as f, cu as p, cv as I } from "./index.eager-app-Cj5f8Gby.js";
import { l as g } from "./index.eager-platform-Dcfeegfw.js";
import { u as v } from "./chunk-provider-credentials-yP7QsOsy.js";
function k(this: any): any {
  return (m as any)((((o as any)() as any).grokBotEmailInbox as any).snapshots);
}
function x(this: any): any {
  return (c as any)((((o as any)() as any).grokBotEmailInbox as any).snapshots, C);
}
function C(this: any, e: any): any {
  return ((((g as any)(e) ?? []) as any).length as any) > (0 as any);
}
function G(this: any): any {
  const e: any = ((l as any).c as any)(3),
    n: any = (d as any)((((o as any)() as any).grokBotEmailInbox as any).create);
  let t: any;
  return ((e as any)[0] as any) !== ((n as any).isPending as any) || ((e as any)[1] as any) !== ((n as any).run as any) ? (t = {
    create: (n as any).run,
    isPending: (n as any).isPending
  }, (e as any)[0] = (n as any).isPending, (e as any)[1] = (n as any).run, (e as any)[2] = t) : t = (e as any)[2], t;
}
function E(this: any, e: any, n: any): any {
  switch (e) {
    case "onepassword":
      return (n as any).isCredentialsConnected;
    case "email":
      return (n as any).hasEmailInbox;
  }
}
function N(this: any): any {
  const e: any = ((l as any).c as any)(4),
    n: any = (v as any)(),
    t: any = (x as any)(),
    i: any = ((b as any)() as any).state?.servers ?? [];
  let s: any;
  return ((e as any)[0] as any) !== (t as any) || ((e as any)[1] as any) !== (n as any) || ((e as any)[2] as any) !== (i as any) ? (s = (r: any): any => {
    if (((r as any).builtinServerIdentifier as any) != (null as any)) {
      const u: any = (f as any)(r, i);
      return (u as any) != (null as any) && (p as any)(u);
    }
    const a: any = (I as any)((r as any).native);
    return (a as any) == (null as any) ? null : (E as any)(a, {
      isCredentialsConnected: n,
      hasEmailInbox: t
    });
  }, (e as any)[0] = t, (e as any)[1] = n, (e as any)[2] = i, (e as any)[3] = s) : s = (e as any)[3], s;
}
export { k as a, G as b, N as u };
//# debugId=96769695-59be-459e-9c85-f3dd98ee1555
