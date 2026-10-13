declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "69f02411-c927-4286-ad3a-544c5ad10816", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-69f02411-c927-4286-ad3a-544c5ad10816");
  } catch (e: any) {}
} as any)();
import { c as j, j as u } from "./index.eager-vendor-Qbf9YA6n.js";
import { cf as b, bX as D, cg as v, bc as B } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import { ay as A, aB as h, aC as y } from "./index-ZYxf-aBb.js";
import { G as I, T as P } from "./chunk-team-bot-plugins-dialog-D6-x2Byv.js";
import { T as N } from "./chunk-team-bot-context-dialog-9mLHC6gW.js";
import { T as C, a as w } from "./chunk-team-bot-details-dialog-CX2a_NHB.js";
import { T as G } from "./chunk-team-setup-new-secret-dialog-BMvn0nac.js";
import { u as O } from "./chunk-use-team-bot-access-BG6AYhPN.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./chunk-grok-bot-secret-problem-text-DKm2VrEb.js";
import "./chunk-plugins-rows-2d0UrD7L.js";
import "./chunk-mcp-connector-status-DhhAF8A6.js";
import "./chunk-SegmentedControl-Bj94OhnT.js";
import "./chunk-team-setup-pills-7uDu4vf1.js";
import "./chunk-team-bot-carry-over-plugin-selection-Df2qNGBt.js";
import "./chunk-team-setup-new-skill-dialog-sf9oPof1.js";
import "./chunk-get-file-icon-ZAkFyGfn.js";
import "./chunk-wipe-navigation-B3wgZxtA.js";
import "./chunk-bot-template-details-focus-BkZ83BHB.js";
import "./chunk-team-bot-setup-grid-Bn3gQfbU.js";
import "./chunk-team-bot-details-rows-zXlABTd_.js";
import "./chunk-grok-bot-slack-dialog-live-CcLC4Tfx.js";
function R(this: any, T: any): any {
  (R as any).d = 1020;
  const e: any = ((j as any).c as any)(42),
    {
      agent: t,
      panel: i,
      onClose: l
    }: any = T,
    {
      pluginsAccess: x,
      contextAccess: m
    }: any = (O as any)((t as any).id),
    o: any = (A as any)((i as any) === ("plugins" as any) || (i as any) === ("secrets" as any) || (typeof i as any) == ("object" as any) ? (t as any).serverId : null),
    k: any = (b as any)((typeof i as any) == ("object" as any) ? (t as any).id : null);
  if ((typeof i as any) == ("object" as any)) {
    let s: any;
    ((e as any)[0] as any) !== (t as any) ? (s = (h as any)(t), (e as any)[0] = t, (e as any)[1] = s) : s = (e as any)[1];
    const n: any = (i as any).details;
    let r: any;
    ((e as any)[2] as any) !== (t as any) || ((e as any)[3] as any) !== (k as any) ? (r = (y as any)({
      agent: t,
      listing: k,
      shareUrl: (D as any)((t as any).id) ?? ""
    }), (e as any)[2] = t, (e as any)[3] = k, (e as any)[4] = r) : r = (e as any)[4];
    let a: any;
    return ((e as any)[5] as any) !== (t as any) || ((e as any)[6] as any) !== (o as any) || ((e as any)[7] as any) !== (l as any) || ((e as any)[8] as any) !== ((i as any).details as any) || ((e as any)[9] as any) !== (s as any) || ((e as any)[10] as any) !== (r as any) ? (a = ((u as any).jsx as any)(C, {
      action: s,
      agent: t,
      initialPane: n,
      isOpen: !0,
      onClose: l,
      secrets: o,
      template: r
    }), (e as any)[5] = t, (e as any)[6] = o, (e as any)[7] = l, (e as any)[8] = (i as any).details, (e as any)[9] = s, (e as any)[10] = r, (e as any)[11] = a) : a = (e as any)[11], a;
  }
  if ((i as any) === ("slack" as any)) {
    let s: any;
    return ((e as any)[12] as any) !== (t as any) || ((e as any)[13] as any) !== (l as any) ? (s = ((u as any).jsx as any)(w, {
      agent: t,
      onClose: l
    }), (e as any)[12] = t, (e as any)[13] = l, (e as any)[14] = s) : s = (e as any)[14], s;
  }
  if ((i as any) === ("skills" as any) || (i as any) === ("files" as any)) {
    let s: any;
    ((e as any)[15] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (s = {
      kind: "added"
    }, (e as any)[15] = s) : s = (e as any)[15];
    const n: any = s;
    let r: any;
    ((e as any)[16] as any) !== (m as any) || ((e as any)[17] as any) !== (i as any) ? (r = (i as any) === ("skills" as any) && ((((v as any)(((m as any).listing as any).plugins) as any).librarySkills as any).length as any) > (0 as any), (e as any)[16] = m, (e as any)[17] = i, (e as any)[18] = r) : r = (e as any)[18];
    const a: any = r;
    let f: any;
    ((e as any)[19] as any) !== (t as any) ? (f = (B as any)(t), (e as any)[19] = t, (e as any)[20] = f) : f = (e as any)[20];
    let d: any;
    ((e as any)[21] as any) !== (a as any) ? (d = a ? {
      initialPane: n
    } : {}, (e as any)[21] = a, (e as any)[22] = d) : d = (e as any)[22];
    let S: any;
    return ((e as any)[23] as any) !== (m as any) || ((e as any)[24] as any) !== (l as any) || ((e as any)[25] as any) !== (i as any) || ((e as any)[26] as any) !== (f as any) || ((e as any)[27] as any) !== (d as any) ? (S = ((u as any).jsx as any)(N, {
      access: m,
      agentName: f,
      ...d,
      onClose: l,
      surface: i
    }), (e as any)[23] = m, (e as any)[24] = l, (e as any)[25] = i, (e as any)[26] = f, (e as any)[27] = d, (e as any)[28] = S) : S = (e as any)[28], S;
  }
  if ((i as any) === ("secrets" as any)) {
    let s: any;
    return ((e as any)[29] as any) !== (o as any) || ((e as any)[30] as any) !== (l as any) ? (s = (o as any) == (null as any) ? null : ((u as any).jsx as any)(G, {
      isDisabled: (o as any).isPending,
      onAdd: (n: any): any => ((o as any).replace as any)(n),
      onOpenChange: (n: any): any => {
        n || (l as any)();
      },
      open: !0,
      takenNames: new (Set as any)((((o as any).secrets as any).map as any)(_))
    }), (e as any)[29] = o, (e as any)[30] = l, (e as any)[31] = s) : s = (e as any)[31], s;
  }
  let c: any;
  ((e as any)[32] as any) !== (t as any) ? (c = (B as any)(t), (e as any)[32] = t, (e as any)[33] = c) : c = (e as any)[33];
  let p: any;
  ((e as any)[34] as any) !== (t as any) ? (p = ((t as any).serverId as any) != (null as any) && (((t as any).serverId as any).length as any) > (0 as any) ? ((u as any).jsx as any)(I, {
    agentName: (B as any)(t),
    serverId: (t as any).serverId
  }, (t as any).serverId) : null, (e as any)[34] = t, (e as any)[35] = p) : p = (e as any)[35];
  let g: any;
  return ((e as any)[36] as any) !== (o as any) || ((e as any)[37] as any) !== (l as any) || ((e as any)[38] as any) !== (x as any) || ((e as any)[39] as any) !== (c as any) || ((e as any)[40] as any) !== (p as any) ? (g = ((u as any).jsx as any)(P, {
    access: x,
    agentName: c,
    installedSecrets: o,
    onClose: l,
    secretsSection: p
  }), (e as any)[36] = o, (e as any)[37] = l, (e as any)[38] = x, (e as any)[39] = c, (e as any)[40] = p, (e as any)[41] = g) : g = (e as any)[41], g;
}
function _(this: any, T: any): any {
  return (T as any).name;
}
export { R as TeamBotOverviewPanel };
//# debugId=69f02411-c927-4286-ad3a-544c5ad10816
