declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "5298a2c8-a6f7-44a8-8537-b8f520d02302", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-5298a2c8-a6f7-44a8-8537-b8f520d02302");
  } catch (e: any) {}
} as any)();
import { c as n, j as c } from "./index.eager-vendor-Qbf9YA6n.js";
import { aZ as p } from "./index.eager-platform-Dcfeegfw.js";
import { bl as u, b9 as f, ba as g, bc as x, c8 as A } from "./index.eager-app-Cj5f8Gby.js";
import "./index-ZYxf-aBb.js";
import { T } from "./chunk-team-bot-context-dialog-9mLHC6gW.js";
import { u as b } from "./chunk-use-team-bot-access-BG6AYhPN.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./chunk-plugins-rows-2d0UrD7L.js";
import "./chunk-mcp-connector-status-DhhAF8A6.js";
import "./chunk-team-setup-new-skill-dialog-sf9oPof1.js";
import "./chunk-team-bot-carry-over-plugin-selection-Df2qNGBt.js";
import "./chunk-get-file-icon-ZAkFyGfn.js";
import "./chunk-team-setup-pills-7uDu4vf1.js";
function E(this: any): any {
  (E as any).d = 968;
  const e: any = ((n as any).c as any)(8),
    t: any = (u as any)(),
    m: any = (f as any)("grok_bot_multiplayer"),
    l: any = (g as any)(t, m),
    {
      contextAccess: i
    }: any = (b as any)(l && (t as any) != (null as any) ? (t as any).id : null),
    {
      close: r
    }: any = (p as any)();
  if (!l || (t as any) == (null as any)) return null;
  let o: any;
  ((e as any)[0] as any) !== (t as any) ? (o = (x as any)(t), (e as any)[0] = t, (e as any)[1] = o) : o = (e as any)[1];
  let s: any;
  ((e as any)[2] as any) !== (r as any) ? (s = (): any => (r as any)(A), (e as any)[2] = r, (e as any)[3] = s) : s = (e as any)[3];
  let a: any;
  return ((e as any)[4] as any) !== (i as any) || ((e as any)[5] as any) !== (o as any) || ((e as any)[6] as any) !== (s as any) ? (a = ((c as any).jsx as any)(T, {
    access: i,
    agentName: o,
    onClose: s,
    surface: "files"
  }), (e as any)[4] = i, (e as any)[5] = o, (e as any)[6] = s, (e as any)[7] = a) : a = (e as any)[7], a;
}
export { E as default };
//# debugId=5298a2c8-a6f7-44a8-8537-b8f520d02302
