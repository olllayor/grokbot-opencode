declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "092e9de1-61ae-4751-b224-525b9906be7e", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-092e9de1-61ae-4751-b224-525b9906be7e");
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
  (E as any).d = 970;
  const t: any = ((n as any).c as any)(8),
    e: any = (u as any)(),
    m: any = (f as any)("grok_bot_multiplayer"),
    l: any = (g as any)(e, m),
    {
      contextAccess: i
    }: any = (b as any)(l && (e as any) != (null as any) ? (e as any).id : null),
    {
      close: r
    }: any = (p as any)();
  if (!l || (e as any) == (null as any)) return null;
  let o: any;
  ((t as any)[0] as any) !== (e as any) ? (o = (x as any)(e), (t as any)[0] = e, (t as any)[1] = o) : o = (t as any)[1];
  let s: any;
  ((t as any)[2] as any) !== (r as any) ? (s = (): any => (r as any)(A), (t as any)[2] = r, (t as any)[3] = s) : s = (t as any)[3];
  let a: any;
  return ((t as any)[4] as any) !== (i as any) || ((t as any)[5] as any) !== (o as any) || ((t as any)[6] as any) !== (s as any) ? (a = ((c as any).jsx as any)(T, {
    access: i,
    agentName: o,
    onClose: s,
    surface: "skills"
  }), (t as any)[4] = i, (t as any)[5] = o, (t as any)[6] = s, (t as any)[7] = a) : a = (t as any)[7], a;
}
export { E as default };
//# debugId=092e9de1-61ae-4751-b224-525b9906be7e
