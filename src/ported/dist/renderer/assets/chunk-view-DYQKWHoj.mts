declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "b23f1f1d-6ffe-4ea0-8e4a-df24f4cb3db8", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-b23f1f1d-6ffe-4ea0-8e4a-df24f4cb3db8");
  } catch (e: any) {}
} as any)();
import { c as f, j as u } from "./index.eager-vendor-Qbf9YA6n.js";
import { aZ as g } from "./index.eager-platform-Dcfeegfw.js";
import { bl as v, b9 as S, ba as T, bc as p, c8 as A } from "./index.eager-app-Cj5f8Gby.js";
import { ay as B } from "./index-ZYxf-aBb.js";
import { G as I, T as b } from "./chunk-team-bot-plugins-dialog-D6-x2Byv.js";
import { u as x } from "./chunk-use-team-bot-access-BG6AYhPN.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./chunk-grok-bot-secret-problem-text-DKm2VrEb.js";
import "./chunk-plugins-rows-2d0UrD7L.js";
import "./chunk-mcp-connector-status-DhhAF8A6.js";
import "./chunk-SegmentedControl-Bj94OhnT.js";
import "./chunk-team-setup-pills-7uDu4vf1.js";
import "./chunk-team-bot-carry-over-plugin-selection-Df2qNGBt.js";
function E(this: any): any {
  (E as any).d = 969;
  const e: any = ((f as any).c as any)(12),
    t: any = (v as any)(),
    d: any = (S as any)("grok_bot_multiplayer"),
    c: any = (T as any)(t, d),
    {
      pluginsAccess: l
    }: any = (x as any)(c && (t as any) != (null as any) ? (t as any).id : null),
    i: any = (B as any)(t?.serverId),
    {
      close: n
    }: any = (g as any)();
  if (!c || (t as any) == (null as any)) return null;
  let r: any;
  ((e as any)[0] as any) !== (t as any) ? (r = ((t as any).serverId as any) != (null as any) && (((t as any).serverId as any).length as any) > (0 as any) ? ((u as any).jsx as any)(I, {
    agentName: (p as any)(t),
    serverId: (t as any).serverId
  }, (t as any).serverId) : null, (e as any)[0] = t, (e as any)[1] = r) : r = (e as any)[1];
  const m: any = r;
  let s: any;
  ((e as any)[2] as any) !== (t as any) ? (s = (p as any)(t), (e as any)[2] = t, (e as any)[3] = s) : s = (e as any)[3];
  let o: any;
  ((e as any)[4] as any) !== (n as any) ? (o = (): any => (n as any)(A), (e as any)[4] = n, (e as any)[5] = o) : o = (e as any)[5];
  let a: any;
  return ((e as any)[6] as any) !== (i as any) || ((e as any)[7] as any) !== (l as any) || ((e as any)[8] as any) !== (m as any) || ((e as any)[9] as any) !== (s as any) || ((e as any)[10] as any) !== (o as any) ? (a = ((u as any).jsx as any)(b, {
    access: l,
    agentName: s,
    installedSecrets: i,
    onClose: o,
    secretsSection: m
  }), (e as any)[6] = i, (e as any)[7] = l, (e as any)[8] = m, (e as any)[9] = s, (e as any)[10] = o, (e as any)[11] = a) : a = (e as any)[11], a;
}
export { E as default };
//# debugId=b23f1f1d-6ffe-4ea0-8e4a-df24f4cb3db8
