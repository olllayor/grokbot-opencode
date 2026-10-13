declare var URL: any;
declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "ab5f3af5-286e-458f-8200-084f9ac7e1bf", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-ab5f3af5-286e-458f-8200-084f9ac7e1bf");
  } catch (e: any) {}
} as any)();
import { eY as g, fB as j, eT as M, eU as W, eZ as Z } from "./index.eager-app-Cj5f8Gby.js";
import { i as f } from "./index.eager-vendor-Qbf9YA6n.js";
import { bO as $ } from "./index-ZYxf-aBb.js";
const R: any = {
    team: 0,
    affinity: 1
  },
  Q: number = .5;
function v(this: any, e: any, t: any): any {
  return (j as any)((((e as any).category as any).trim as any)(), t);
}
function J(this: any, e: any, t: any, n: any): any {
  const i: any = new (Map as any)();
  for (const o of e) {
    if (!(t as any)(o)) continue;
    const s: any = (v as any)(o, n);
    ((s as any).length as any) !== (0 as any) && ((i as any).set as any)(s, ((((i as any).get as any)(s) ?? 0) as any) + (1 as any));
  }
  return i;
}
function ee(this: any, e: any, t: any, n: any, i: any): any {
  const o: any = (v as any)(e, i);
  return {
    entry: e,
    teammateCount: ((t as any).teamInstallCounts as any)[(e as any).id] ?? 0,
    affinityStrength: ((o as any).length as any) === (0 as any) ? 0 : ((n as any).get as any)(o) ?? 0
  };
}
function te(this: any, e: any, t: any): any {
  const n: any = (g as any)(),
    i: any = new ((Intl as any).Collator as any)(n),
    o: any = (r: any, c: any): any => ((i as any).compare as any)(((r as any).entry as any).displayName, ((c as any).entry as any).displayName),
    s: any = (J as any)((e as any).catalog, (e as any).isInstalled, n),
    l: any = (((((e as any).catalog as any).filter as any)((r: any): any => !((e as any).isInstalled as any)(r)) as any).map as any)((r: any): any => (ee as any)(r, e, s, n)),
    a: any = ((((l as any).filter as any)((r: any): any => ((r as any).teammateCount as any) > (0 as any)) as any).sort as any)((r: any, c: any): any => ((c as any).teammateCount as any) - ((r as any).teammateCount as any) || (o as any)(r, c)),
    A: any = ((((l as any).filter as any)((r: any): any => ((r as any).affinityStrength as any) > (0 as any)) as any).sort as any)((r: any, c: any): any => ((c as any).affinityStrength as any) - ((r as any).affinityStrength as any) || ((c as any).teammateCount as any) - ((r as any).teammateCount as any) || (o as any)(r, c)),
    p: any = new (Set as any)(),
    u: any = [],
    m: any = (r: any, c: any): any => {
      ((p as any).has as any)(((r as any).entry as any).id) || ((u as any).length as any) === (t as any) || (((p as any).add as any)(((r as any).entry as any).id), ((u as any).push as any)({
        entry: (r as any).entry,
        signal: c
      }));
    },
    h: any = ((Math as any).max as any)(1, ((Math as any).floor as any)((t as any) * (Q as any)));
  for (const r of ((a as any).slice as any)(0, h)) (m as any)(r, {
    kind: "team",
    teammateCount: (r as any).teammateCount
  });
  for (const r of A) (m as any)(r, {
    kind: "affinity"
  });
  for (const r of a) (m as any)(r, {
    kind: "team",
    teammateCount: (r as any).teammateCount
  });
  return ((u as any).sort as any)((r: any, c: any): any => ((R as any)[((r as any).signal as any).kind] as any) - ((R as any)[((c as any).signal as any).kind] as any));
}
const E: any = {
  FEATURED: {
    id: "FkMol5"
  },
  INFRASTRUCTURE: {
    id: "Mo77P4"
  },
  DATA_ANALYTICS: {
    id: "svH45G"
  },
  PRODUCTIVITY: {
    id: "N42ane"
  },
  PAYMENTS: {
    id: "H0ShEF"
  },
  AGENT_ORCHESTRATION: {
    id: "byAjqm"
  },
  CANVAS: {
    id: "Zty/IJ"
  },
  INBOX_AND_COLLABORATION: {
    id: "IzFMeN"
  },
  SCHEDULING: {
    id: "DbZMYM"
  },
  DOCUMENTS_AND_FILES: {
    id: "gDShYL"
  },
  SALES: {
    id: "mUv9U4"
  },
  CUSTOMER_SUPPORT: {
    id: "n+xLOH"
  },
  FINANCE_AND_LEGAL: {
    id: "hxm6On"
  },
  RESEARCH: {
    id: "bdztP2"
  },
  DESIGN: {
    id: "f8fH8W"
  },
  LOGIN_AND_CREDENTIAL_MANAGEMENT: {
    id: "3Ia71M"
  }
};
function ne(this: any, e: any): any {
  switch ((e as any).kind) {
    case "search":
    case "category-filter":
    case "plugin-section":
      return !0;
    case "plugin":
    case "installed":
    case "skill":
    case "setup":
    case "bot":
      return !1;
  }
}
function Ke(this: any, e: any): any {
  return ((e as any).kind as any) === ("search" as any) ? (e as any).query : (e as any).title;
}
function He(this: any, e: any): any {
  switch ((e as any).kind) {
    case "search":
      return "search";
    case "category-filter":
      return (e as any).filterKey;
    case "plugin-section":
      return (e as any).sectionKey;
    case "plugin":
    case "setup":
      return (e as any).entryId;
    case "installed":
      return (e as any).serverId;
    case "bot":
      return (e as any).botSlug;
    case "skill":
      return (e as any).workflowId;
  }
}
const ie: string = "featured",
  y: string = "team-plugins",
  w: string = "popular-plugins",
  k: string = "category:featured",
  P: any = {
    id: "qMEYke"
  },
  oe: any = {
    id: "f8rAaL"
  },
  D: any = {
    id: "8mCD93"
  };
function Ye(this: any, e: any, t: any, n: any = []): any {
  return (t as any) === (k as any) ? (e as any)(P) : (t as any) === (w as any) ? (e as any)(oe) : (t as any) === (y as any) ? (e as any)(D) : ((n as any).find as any)((i: any): any => ((i as any).key as any) === (t as any))?.label ?? (e as any)({
    id: "Zt5PUS"
  });
}
function xe(this: any, e: any): any {
  const t: any = (e as any).publisher;
  return (t as any) == (null as any) || !(t as any).isUserOwned || ((e as any).marketplace as any) == (null as any) ? null : t;
}
function G(this: any, e: any): any {
  const t: any = (g as any)();
  return ((e as any).replace as any)(/\S+/g, (n: any): any => (((((n as any).charAt as any)(0) as any).toLocaleUpperCase as any)(t) as any) + (((n as any).slice as any)(1) as any));
}
function b(this: any, e: any, t: any): any {
  if (((t as any).marketplace as any) != (null as any)) return {
    key: y,
    title: (e as any)(D),
    rank: 1
  };
  const n: any = (t as any).categoryKey;
  if ((M as any)(E, n)) return {
    key: `category:${((n as any).toLowerCase as any)()}`,
    title: (e as any)((n as any) === ("FEATURED" as any) ? P : (E as any)[n]),
    rank: (n as any) === ("FEATURED" as any) ? 0 : 2
  };
  const i: any = ((((t as any).category as any).toLowerCase as any)() as any) === (ie as any),
    o: any = i ? (e as any)(P) : (G as any)((t as any).category);
  return {
    key: `category:${(((t as any).category as any).toLowerCase as any)()}`,
    title: o,
    rank: i ? 0 : 2
  };
}
function Be(this: any, e: any, t: any): any {
  const n: any = (t as any).categoryKey;
  if ((M as any)(E, n)) return (e as any)((E as any)[n]);
  const i: any = (((t as any).category as any).trim as any)();
  return ((i as any).length as any) === (0 as any) ? null : (G as any)(i);
}
function S(this: any, e: any, t: any): any {
  return ((b as any)(e, t) as any).key;
}
function F(this: any, e: any, t: any): any {
  const n: any = new (Map as any)();
  for (const i of t) {
    const o: any = (b as any)(e, i),
      s: any = ((n as any).get as any)((o as any).key);
    (s as any) == (null as any) ? ((n as any).set as any)((o as any).key, {
      title: (o as any).title,
      rank: (o as any).rank,
      items: [i]
    }) : (((s as any).items as any).push as any)(i);
  }
  return (((([...n] as any).sort as any)(([, i]: any, [, o]: any): any => ((i as any).rank as any) - ((o as any).rank as any) || (((i as any).title as any).localeCompare as any)((o as any).title, (g as any)())) as any).map as any)(([i, o]: any): any => ({
    sectionKey: i,
    category: (o as any).title,
    items: (o as any).items
  }));
}
function re(this: any, e: any, t: any, n: any): any {
  return ((((t as any).filter as any)((i: any): any => {
    const o: any = (S as any)(e, i);
    return (o as any) !== (k as any) && (o as any) !== (y as any) && (((n as any)[(i as any).id] ?? 0) as any) > (0 as any);
  }) as any).sort as any)((i: any, o: any): any => (((n as any)[(o as any).id] ?? 0) as any) - (((n as any)[(i as any).id] ?? 0) as any) || (((i as any).displayName as any).localeCompare as any)((o as any).displayName, (g as any)()));
}
function se(this: any, e: any, t: any): any {
  return ((((e as any).filter as any)((n: any): any => ((n as any).marketplace as any) != (null as any)) as any).sort as any)((n: any, i: any): any => (((t as any)[(i as any).id] ?? 0) as any) - (((t as any)[(n as any).id] ?? 0) as any) || (((n as any).displayName as any).localeCompare as any)((i as any).displayName, (g as any)()));
}
function ae(this: any, e: any, t: any): any {
  return (((F as any)(e, t) as any).map as any)((n: any): any => ({
    key: (n as any).sectionKey,
    label: (n as any).category
  }));
}
function Ve(this: any, e: any): any {
  return ((((e as any).filter as any)((t: any): any => (K as any)(t)) as any).sort as any)((t: any, n: any): any => (((t as any).name as any).localeCompare as any)((n as any).name, (g as any)(), {
    sensitivity: "base"
  }));
}
function K(this: any, e: any): any {
  return ((e as any).source as any) === ("workflow" as any) ? !0 : ((e as any).source as any) === ("plugin" as any) && (e as any).publishedByCurrentUser;
}
function qe(this: any, e: any): any {
  return (K as any)(e) || ((e as any).source as any) === ("managed" as any);
}
const ce: string = "https://cursor.com/marketplace";
function ze(this: any, e: any): any {
  const t: any = new (URL as any)(ce);
  return (((t as any).searchParams as any).set as any)("pluginId", e), ((t as any).toString as any)();
}
const Xe: number = 6,
  le: number = 4,
  je: number = 6,
  ue: number = 20;
function We(this: any, e: any): any {
  return `entry:${e}`;
}
function de(this: any, e: any, t: any, n: any): any {
  return t || ((e as any).length as any) <= (n as any) ? {
    visible: e,
    hiddenCount: 0
  } : {
    visible: ((e as any).slice as any)(0, n),
    hiddenCount: ((e as any).length as any) - (n as any)
  };
}
function Ze(this: any, e: any, t: any): any {
  for (const n of [e, t]) if (!((n as any) == (null as any) || ((n as any).length as any) === (0 as any))) try {
    return (new (URL as any)(n) as any).hostname;
  } catch {}
  return null;
}
function fe(this: any, e: any, t: any): any {
  if (((e as any).cursorScmProvider as any) != (null as any)) return ((t as any).find as any)((o: any): any => ((o as any).builtinServerIdentifier as any) === ((e as any).rowServerIdentifier as any));
  const n: any = ((t as any).filter as any)((o: any): any => ((o as any).builtinServerIdentifier as any) == (null as any));
  if (((e as any).pluginId as any) != (null as any)) {
    const o: any = ((n as any).find as any)((s: any): any => ((s as any).id as any) === ((e as any).pluginId as any));
    if ((o as any) != (null as any)) return o;
  }
  const i: any = (((e as any).name as any).toLowerCase as any)();
  return ((n as any).find as any)((o: any): any => ((((o as any).name as any).toLowerCase as any)() as any) === (i as any) || ((((o as any).displayName as any).toLowerCase as any)() as any) === (i as any));
}
function $e(this: any, e: any, t: any): any {
  return !(((((e as any).fields ?? []) as any).length as any) === (0 as any) || (t?.hasTeamConfiguredVariables as any) === (!0 as any));
}
function ge(this: any, e: any): any {
  return ((e as any).connectors as any) == (null as any) ? [{
    name: (e as any).name,
    description: ""
  }] : (e as any).connectors;
}
function pe(this: any, e: any): any {
  return {
    connectors: ((ge as any)(e) as any).length,
    skills: (e as any).skills?.length ?? null
  };
}
function T(this: any, e: any, t: any): any {
  switch (t) {
    case "connector":
      return ((f as any)._ as any)({
        id: "d5N5Il",
        values: {
          count: e
        }
      });
    case "skill":
      return ((f as any)._ as any)({
        id: "m+pG3Q",
        values: {
          count: e
        }
      });
    case "command":
      return ((f as any)._ as any)({
        id: "MKRcMS",
        values: {
          count: e
        }
      });
  }
}
function me(this: any, e: any, t: any): any {
  const n: any = [];
  return ((t as any).connectors as any) > (0 as any) && ((n as any).push as any)((T as any)((t as any).connectors, "connector")), ((t as any).skills as any) != (null as any) && ((t as any).skills as any) > (0 as any) && ((n as any).push as any)((T as any)((t as any).skills, "skill")), ((t as any).commands as any) != (null as any) && ((t as any).commands as any) > (0 as any) && ((n as any).push as any)((T as any)((t as any).commands, "command")), ((n as any).length as any) > (0 as any) ? (Z as any)(n) : (e as any)({
    id: "31tnaC"
  });
}
function Qe(this: any, e: any, t: any, n: any): any {
  const i: any = (fe as any)(t, n),
    o: any = (i as any) != (null as any) ? (pe as any)(i) : {
      connectors: 1,
      skills: null
    };
  return (me as any)(e, {
    ...o,
    commands: null
  });
}
function he(this: any, e: any): any {
  if (((e as any).length as any) < (2 as any)) return "";
  let t: any = 0;
  const n: any = (e as any)[0] ?? "";
  for (; (t as any) < ((n as any).length as any) && ((e as any).every as any)((l: any): any => ((l as any)[t] as any) === ((n as any)[t] as any));) t += 1;
  const i: any = ((n as any).slice as any)(0, t),
    o: any = ((Math as any).max as any)(((i as any).lastIndexOf as any)("-"), ((i as any).lastIndexOf as any)("_"), ((i as any).lastIndexOf as any)("."));
  if ((o as any) < (0 as any)) return "";
  const s: any = ((i as any).slice as any)(0, (o as any) + (1 as any));
  return ((e as any).every as any)((l: any): any => ((l as any).length as any) > ((s as any).length as any)) ? s : "";
}
function ye(this: any, e: any): any {
  const t: any = ((((e as any).replace as any)(/[-_.]+/g, " ") as any).trim as any)();
  return ((t as any).length as any) === (0 as any) ? e : (((((t as any).charAt as any)(0) as any).toLocaleUpperCase as any)((g as any)()) as any) + (((t as any).slice as any)(1) as any);
}
function Je(this: any, e: any): any {
  const t: any = (he as any)(((e as any).map as any)((n: any): any => (n as any).name));
  return new (Map as any)(((e as any).map as any)((n: any): any => [(n as any).name, (n as any).title ?? (ye as any)((((n as any).name as any).slice as any)((t as any).length))]));
}
const Ae: any = {
    id: "Hc3Gxt"
  },
  H: string = "plugin-auth",
  Se: any = {
    id: "uUsUEv"
  },
  Ee: string = "Some of my installed plugins can't be fetched. Their content lives in a private git repository, and your computer \u2014 the machine Shell and Read act on, not mine \u2014 has no credentials to read it. Set that up on your computer: run `gh auth login` there, then `gh auth setup-git` so git itself uses the credential. When a step needs me (a device code, a password, 2FA, an OAuth approval), hand your computer over with request_box_help instead of guessing. Then verify with a read-only `git ls-remote` against one of those plugin repositories and tell me whether it worked. Don't change my repositories or any other credentials.";
function Ie(this: any, e: any): any {
  return ((e as any).find as any)((t: any): any => ((t as any).purpose as any) === (H as any))?.id ?? null;
}
async function et(this: any, e: any, t: any): Promise<any> {
  const n: any = ((t as any).beginCreation as any)({
    name: (e as any).name,
    expectsContent: !0,
    kind: "plugin-auth"
  });
  try {
    const {
      agent: i
    }: any = await ((t as any).createAgent as any)({
      clientNonce: (n as any).clientNonce,
      name: (e as any).name,
      description: (e as any).description,
      purpose: (e as any).purpose,
      isIntroductionSuppressed: !0
    });
    return ((n as any).setAgentId as any)((i as any).id), ((n as any).isCurrentAccount as any)() ? (((n as any).isAbandoned as any)() || ((t as any).selectAgent as any)((i as any).id), ((n as any).noteSendingFirstMessage as any)(), await ((t as any).sendPrompt as any)({
      agentId: (i as any).id,
      prompt: (e as any).request,
      initiator: "plugin_setup"
    }), (i as any).id) : null;
  } catch (i: any) {
    throw ((n as any).fail as any)(), i;
  }
}
function _e(this: any): any {
  let e: any = null;
  return {
    launch: (t: any): any => {
      if ((e as any) != (null as any)) return e;
      const n: any = (Ie as any)((t as any).agents);
      if ((n as any) != (null as any)) return ((t as any).selectAgent as any)(n), ((Promise as any).resolve as any)({
        agentId: n
      });
      if (!(t as any).isRosterComplete) return ((Promise as any).resolve as any)({
        agentId: null
      });
      const i: any = ((((t as any).launchNewAgent as any)({
        name: ((f as any)._ as any)(Ae),
        description: ((f as any)._ as any)(Se),
        request: Ee,
        purpose: H
      }) as any).then as any)((s: any): any => ({
        agentId: s
      }));
      e = i;
      const o: any = (): any => {
        (e as any) === (i as any) && (e = null);
      };
      return ((i as any).then as any)(o, o), i;
    }
  };
}
const tt: any = (_e as any)();
function nt(this: any, e: any): any {
  const t: any = ((((e as any).map as any)((i: any): any => (i as any).pluginName) as any).filter as any)((i: any): any => ((i as any).length as any) > (0 as any));
  if (((t as any).length as any) === (0 as any) || ((t as any).length as any) > (3 as any)) {
    const i: any = (e as any).length;
    return ((f as any)._ as any)({
      id: "nX8uII",
      values: {
        count: i
      }
    });
  }
  const n: any = (W as any)(t);
  return ((f as any)._ as any)({
    id: "tK2iFA",
    values: {
      0: (t as any).length,
      joinedNames: n
    }
  });
}
const Ce: any = ["credentials", "productivity", "communication", "design", "code", "data", "sales", "finance", "research", "support"],
  Le: any = {
    LOGIN_AND_CREDENTIAL_MANAGEMENT: "credentials",
    PRODUCTIVITY: "productivity",
    INBOX_AND_COLLABORATION: "communication",
    SCHEDULING: "communication",
    SALES: "sales",
    CUSTOMER_SUPPORT: "support",
    PAYMENTS: "finance",
    FINANCE_AND_LEGAL: "finance",
    DATA_ANALYTICS: "data",
    DESIGN: "design",
    CANVAS: "design",
    DOCUMENTS_AND_FILES: "productivity",
    INFRASTRUCTURE: "code",
    RESEARCH: "research"
  },
  Ne: any = {
    marketing: "sales",
    sales: "sales",
    design: "design",
    engineering: "code",
    product: "productivity",
    operations: "productivity",
    "recruiting & people": "productivity",
    productivity: "productivity",
    research: "research"
  },
  Te: any = {
    slack: ["communication"],
    notion: ["productivity"],
    "notion-workspace": ["productivity"],
    linear: ["productivity"],
    figma: ["design"],
    tldraw: ["design"],
    github: ["code"],
    "github-plugin": ["code"],
    runlayer: ["code"],
    langfuse: ["data"],
    parallel: ["research", "data"],
    superpowers: ["code"],
    "compound-engineering": ["code"],
    "create-plugin": ["code"],
    "context7-plugin": ["research"],
    context7: ["research"]
  },
  Pe: string = "marketplace:category:";
function Y(this: any, e: any): any {
  return ((e as any).toLocaleLowerCase as any)("en-US");
}
function ke(this: any, e: any): any {
  return ((((((((((e as any).trim as any)() as any).toUpperCase as any)() as any).replace as any)(/&/gu, " AND ") as any).replace as any)(/[^A-Z0-9]+/gu, "_") as any).replace as any)(/^_+|_+$/gu, "");
}
function x(this: any, e: any): any {
  return [...new (Set as any)(e)];
}
function Ue(this: any, e: any): any {
  for (const t of [(e as any).pluginName, (e as any).name]) {
    if ((t as any) === (void 0 as any)) continue;
    const n: any = (Te as any)[(Y as any)(((t as any).trim as any)())];
    if ((n as any) !== (void 0 as any)) return n;
  }
}
function Oe(this: any, e: any): any {
  const t: any = new (Set as any)(),
    n: any = [],
    i: any = (((e as any).categories as any).length as any) > (0 as any) ? (e as any).categories : [(e as any).category];
  for (const o of i) {
    const s: any = ((o as any).trim as any)();
    ((s as any).length as any) === (0 as any) || ((t as any).has as any)(s) || (((t as any).add as any)(s), ((n as any).push as any)(s));
  }
  return n;
}
function B(this: any, e: any): any {
  return `${Pe}${e}`;
}
function it(this: any, e: any): any {
  return (B as any)(e);
}
function Re(this: any, e: any): any {
  const t: any = (Ue as any)(e);
  if ((t as any) !== (void 0 as any)) return t;
  const n: any = (e as any).categoryKeys ?? (((e as any).categoryKey as any) === (void 0 as any) ? [(e as any).category] : [(e as any).categoryKey]);
  return (x as any)(((n as any).flatMap as any)((i: any): any => {
    const o: any = (Le as any)[(ke as any)(i)];
    return (o as any) === (void 0 as any) ? [] : [o];
  }));
}
function Me(this: any, e: any): any {
  return (x as any)((((Oe as any)(e) as any).flatMap as any)((t: any): any => {
    const n: any = (Ne as any)[(Y as any)(((t as any).trim as any)())];
    return (n as any) === (void 0 as any) ? [] : [n];
  }));
}
function ve(this: any, e: any, t: any): any {
  const n: any = new (Map as any)(),
    i: any = new (Map as any)();
  for (const o of t) for (const s of (Me as any)(o)) {
    const l: any = ((i as any).get as any)(s) ?? [];
    ((l as any).push as any)(o), ((i as any).set as any)(s, l);
  }
  for (const o of e) if (((o as any).marketplace as any) === (void 0 as any)) for (const s of (Re as any)(o)) {
    const l: any = ((n as any).get as any)(s) ?? [];
    ((l as any).push as any)(o), ((n as any).set as any)(s, l);
  }
  return ((Ce as any).flatMap as any)((o: any): any => ((n as any).has as any)(o) || ((i as any).has as any)(o) ? [{
    id: o,
    filterKey: (B as any)(o),
    plugins: ((n as any).get as any)(o) ?? [],
    bots: ((i as any).get as any)(o) ?? []
  }] : []);
}
const we: any = {
  credentials: {
    id: "3Ia71M"
  },
  productivity: {
    id: "N42ane"
  },
  communication: {
    id: "hZotg6"
  },
  design: {
    id: "f8fH8W"
  },
  code: {
    id: "EWPtMO"
  },
  data: {
    id: "HKH+W+"
  },
  sales: {
    id: "mUv9U4"
  },
  finance: {
    id: "8V6XO3"
  },
  research: {
    id: "bdztP2"
  },
  support: {
    id: "XYLcNv"
  }
};
function V(this: any, e: any, t: any): any {
  return (((ve as any)(t, []) as any).map as any)((n: any): any => ({
    category: {
      key: (n as any).filterKey,
      label: (e as any)((we as any)[(n as any).id])
    },
    plugins: (n as any).plugins
  }));
}
function ot(this: any, e: any, t: any): any {
  return (((V as any)(e, t) as any).map as any)((n: any): any => (n as any).category);
}
const q: number = 4;
function z(this: any, e: any, {
  catalog: t,
  teamInstallCounts: n,
  query: i,
  detail: o,
  legacySectionKey: s,
  isUnified: l
}: any): any {
  const a: any = (o as any) != (null as any) && (ne as any)(o) ? o : null,
    A: any = (ae as any)(e, t),
    p: any = (a?.kind as any) === ("plugin-section" as any) ? (a as any).sectionKey : s,
    u: any = (p as any) === (w as any),
    m: any = (re as any)(e, t, n),
    h: any = (se as any)(t, n),
    r: any = u || ((A as any).some as any)((d: any): any => ((d as any).key as any) === (p as any)) ? p : null;
  let c: any;
  u ? c = ((m as any).slice as any)(0, ue) : (r as any) === (y as any) ? c = h : (r as any) == (null as any) ? c = t : c = ((t as any).filter as any)((d: any): any => ((S as any)(e, d) as any) === (r as any));
  const I: any = ((((i as any).trim as any)() as any).length as any) > (0 as any),
    U: any = l && (I || (a?.kind as any) === ("category-filter" as any)),
    _: any = U ? [] : ($ as any)(c, i),
    C: any = (r as any) == (null as any) && !I ? h : [],
    L: any = ((C as any).length as any) === (0 as any) ? _ : ((_ as any).filter as any)((d: any): any => ((S as any)(e, d) as any) !== (y as any)),
    N: any = (o as any) == (null as any) && (r as any) == (null as any) && !I,
    O: any = ((L as any).filter as any)((d: any): any => ((S as any)(e, d) as any) === (k as any)),
    X: any = !(((C as any).length as any) > (0 as any) && ((L as any).length as any) === (0 as any)) && !(N && ((O as any).length as any) === (0 as any));
  return {
    page: a,
    sectionOptions: A,
    popularPlugins: m,
    teamPlugins: h,
    selectedSectionKey: r,
    isPopularSection: u,
    isHomepage: N,
    isUnifiedSearch: U,
    browseItems: _,
    hoistedTeamItems: C,
    trailingBrowseItems: L,
    homepagePluginItems: O,
    showsTrailingBrowse: X,
    showsPluginCatalogStatus: l && N && ((t as any).length as any) === (0 as any)
  };
}
function De(this: any, e: any, t: any): any {
  const {
      catalog: n,
      teamInstallCounts: i
    }: any = t,
    o: any = (z as any)(e, {
      catalog: n,
      teamInstallCounts: i,
      query: "",
      detail: null,
      legacySectionKey: null,
      isUnified: !0
    }),
    s: any = (a: any): any => ((de as any)(a, !1, le) as any).visible,
    l: any = [...(((te as any)(t, q) as any).map as any)(({
      entry: a
    }: any): any => a), ...(s as any)((o as any).homepagePluginItems), ...(((F as any)(e, (o as any).hoistedTeamItems) as any).flatMap as any)((a: any): any => (s as any)((a as any).items)), ...(s as any)((o as any).popularPlugins), ...(((V as any)(e, n) as any).flatMap as any)((a: any): any => (s as any)((a as any).plugins))];
  return [...new (Set as any)(((l as any).flatMap as any)((a: any): any => (a as any).iconUrl ? [(a as any).iconUrl] : []))];
}
const rt: any = ((Object as any).freeze as any)(((Object as any).defineProperty as any)({
  __proto__: null,
  FOR_YOU_ROW_LIMIT: q,
  deriveMarketplaceBrowseModel: z,
  marketplaceHomepageLogoUrls: De
}, (Symbol as any).toStringTag, {
  value: "Module"
}));
export { He as A, ot as B, Ke as C, Qe as D, rt as E, q as F, Xe as I, je as L, le as M, w as P, nt as a, tt as b, me as c, pe as d, ge as e, fe as f, te as g, F as h, de as i, Re as j, it as k, et as l, We as m, Ye as n, V as o, Be as p, k as q, Ze as r, Ve as s, Je as t, xe as u, ze as v, $e as w, ne as x, z as y, qe as z };
//# debugId=ab5f3af5-286e-458f-8200-084f9ac7e1bf
