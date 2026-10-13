declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "8bd6dc94-a68d-4003-aa3d-c36359733b47", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-8bd6dc94-a68d-4003-aa3d-c36359733b47");
  } catch (e: any) {}
} as any)();
import { c as s } from "./index.eager-vendor-Qbf9YA6n.js";
import { b9 as n, ba as l } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import { Z as p } from "./index-ZYxf-aBb.js";
function d(this: any, i: any): any {
  const e: any = ((s as any).c as any)(3),
    t: any = (p as any)()?.openPane,
    o: any = (n as any)("sand_simplified_right_pane"),
    a: any = (n as any)("grok_bot_multiplayer");
  if ((t as any) == (null as any) || !o || !(l as any)(i, a)) return null;
  let r: any;
  return ((e as any)[0] as any) !== ((i as any).id as any) || ((e as any)[1] as any) !== (t as any) ? (r = (): any => (t as any)({
    agentId: (i as any).id,
    overviewTab: "overview"
  }), (e as any)[0] = (i as any).id, (e as any)[1] = t, (e as any)[2] = r) : r = (e as any)[2], r;
}
export { d as u };
//# debugId=8bd6dc94-a68d-4003-aa3d-c36359733b47
