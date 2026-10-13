declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "9c90859c-0289-4eb4-967c-d5a0390c149d", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-9c90859c-0289-4eb4-967c-d5a0390c149d");
  } catch (e: any) {}
} as any)();
const __vite__mapDeps: any = (i: any, m: any = __vite__mapDeps, d: any = (m as any).f || ((m as any).f = ["./chunk-team-bot-overview-panel-CPbjqjze.js", "./index.eager-vendor-Qbf9YA6n.js", "./index.eager-app-Cj5f8Gby.js", "./index.eager-platform-Dcfeegfw.js", "./index.eager-common-CdCvBQNJ.js", "./index-ZYxf-aBb.js", "./index-B9V4agTc.css", "./chunk-team-bot-plugins-dialog-D6-x2Byv.js", "./chunk-grok-bot-secret-problem-text-DKm2VrEb.js", "./chunk-use-team-bot-access-BG6AYhPN.js", "./chunk-team-bot-carry-over-plugin-selection-Df2qNGBt.js", "./chunk-plugins-rows-2d0UrD7L.js", "./chunk-mcp-connector-status-DhhAF8A6.js", "./chunk-SegmentedControl-Bj94OhnT.js", "./chunk-team-setup-pills-7uDu4vf1.js", "./chunk-team-bot-context-dialog-9mLHC6gW.js", "./chunk-team-setup-new-skill-dialog-sf9oPof1.js", "./chunk-get-file-icon-ZAkFyGfn.js", "./chunk-team-bot-details-dialog-CX2a_NHB.js", "./chunk-wipe-navigation-B3wgZxtA.js", "./chunk-bot-template-details-focus-BkZ83BHB.js", "./chunk-team-bot-setup-grid-Bn3gQfbU.js", "./chunk-team-bot-details-rows-zXlABTd_.js", "./chunk-grok-bot-slack-dialog-live-CcLC4Tfx.js", "./chunk-team-setup-new-secret-dialog-BMvn0nac.js"])): any => ((i as any).map as any)((i: any): any => (d as any)[i]);
import { c as I, i as F, j as o, u as U, r as H, T as $, p as Be, _ as Te } from "./index.eager-vendor-Qbf9YA6n.js";
import { e as Oe, i as K } from "./index.eager-platform-Dcfeegfw.js";
import { b7 as ie, bP as Pe, bT as oe, b9 as Z, cq as Ie, fu as Ae, bh as X, aK as Me, fv as Ce, fw as Ee, af as Le, a$ as Ne, a_ as $e, cR as ze, cf as Fe, d2 as D, dD as Re, fx as Ge, dC as Ke, fy as De, ba as Ue, fz as ee, ay as qe, az as Qe, cg as Ve, cw as We, fA as He, eY as Ye, h as Je } from "./index.eager-app-Cj5f8Gby.js";
import { bC as Y, bD as re, aS as te, bE as ce, bx as Ze, p as Xe, aL as et, t as se, z as J, bF as tt, bG as ue, bw as de, bH as st, b2 as nt, bI as lt, bJ as at, I as it, ay as ot, bK as fe, bL as rt, bM as ct, aZ as ut, aV as dt, bN as ft } from "./index-ZYxf-aBb.js";
import { O as ne, T as mt, a as pt, b as le } from "./chunk-team-bot-setup-grid-Bn3gQfbU.js";
import { t as me, a as W, b as gt, T as bt, i as ht, c as St } from "./chunk-team-bot-details-rows-zXlABTd_.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./chunk-team-setup-pills-7uDu4vf1.js";
const ae: any = new (WeakMap as any)();
function kt(this: any, a: any, e: any): any {
  let t: any = ((ae as any).get as any)(a);
  (t as any) == (null as any) && (t = new (Map as any)(), ((ae as any).set as any)(a, t));
  let l: any = ((t as any).get as any)(e);
  return (l as any) == (null as any) && (l = (Oe as any)({
    read: (): any => (((a as any).desktop as any).listGrokBotAgentManagers as any)({
      serverId: e
    })
  }), ((t as any).set as any)(e, l)), l;
}
function xt(this: any, a: any): any {
  const e: any = ((I as any).c as any)(20),
    t: any = (ie as any)();
  let l: any;
  ((e as any)[0] as any) !== (t as any) || ((e as any)[1] as any) !== (a as any) ? (l = (kt as any)(t, a), (e as any)[0] = t, (e as any)[1] = a, (e as any)[2] = l) : l = (e as any)[2];
  const s: any = l;
  let i: any;
  ((e as any)[3] as any) !== (s as any) ? (i = (d: any): any => ((d as any).finally as any)((): any => ((s as any).refresh as any)()), (e as any)[3] = s, (e as any)[4] = i) : i = (e as any)[4];
  const n: any = i,
    r: any = (Pe as any)((s as any).snapshots);
  let u: any;
  ((e as any)[5] as any) !== (s as any) ? (u = (): any => {
    ((s as any).load as any)();
  }, (e as any)[5] = s, (e as any)[6] = u) : u = (e as any)[6];
  let c: any, f: any;
  ((e as any)[7] as any) !== (t as any) || ((e as any)[8] as any) !== (n as any) || ((e as any)[9] as any) !== (a as any) ? (c = (d: any): any => (n as any)((((t as any).desktop as any).addGrokBotAgentManager as any)({
    serverId: a,
    userId: d
  })), f = (d: any): any => (n as any)((((t as any).desktop as any).removeGrokBotAgentManager as any)({
    serverId: a,
    userId: d
  })), (e as any)[7] = t, (e as any)[8] = n, (e as any)[9] = a, (e as any)[10] = c, (e as any)[11] = f) : (c = (e as any)[10], f = (e as any)[11]);
  let m: any;
  ((e as any)[12] as any) !== (s as any) ? (m = (): any => {
    ((s as any).refresh as any)();
  }, (e as any)[12] = s, (e as any)[13] = m) : m = (e as any)[13];
  let p: any;
  return ((e as any)[14] as any) !== (r as any) || ((e as any)[15] as any) !== (u as any) || ((e as any)[16] as any) !== (c as any) || ((e as any)[17] as any) !== (f as any) || ((e as any)[18] as any) !== (m as any) ? (p = {
    state: r,
    load: u,
    add: c,
    remove: f,
    retry: m
  }, (e as any)[14] = r, (e as any)[15] = u, (e as any)[16] = c, (e as any)[17] = f, (e as any)[18] = m, (e as any)[19] = p) : p = (e as any)[19], p;
}
async function pe(this: any, a: any): Promise<any> {
  try {
    return await (a as any)(), null;
  } catch {
    return ((F as any)._ as any)({
      id: "D2AZQg"
    });
  }
}
function jt(this: any, {
  name: a,
  addManager: e
}: any): any {
  return {
    title: ((F as any)._ as any)({
      id: "ZQvSYg",
      values: {
        name: a
      }
    }),
    description: ((F as any)._ as any)({
      id: "UGVwbH"
    }),
    confirmLabel: ((F as any)._ as any)({
      id: "ErwyLe"
    }),
    cancelLabel: ((F as any)._ as any)({
      id: "dEgA5A"
    }),
    perform: (): any => (pe as any)(e)
  };
}
function _t(this: any, {
  name: a,
  removeManager: e
}: any): any {
  return {
    title: ((F as any)._ as any)({
      id: "oj3qs7",
      values: {
        name: a
      }
    }),
    description: ((F as any)._ as any)({
      id: "dzP3fS"
    }),
    confirmLabel: ((F as any)._ as any)({
      id: "t/YqKh"
    }),
    pendingLabel: ((F as any)._ as any)({
      id: "M5RhXF"
    }),
    cancelLabel: ((F as any)._ as any)({
      id: "dEgA5A"
    }),
    destructive: !0,
    perform: (): any => (pe as any)(e)
  };
}
function yt(this: any, a: any, e: any): any {
  const t: any = new (Set as any)(e);
  return (((a as any).members as any).filter as any)((l: any): any => ((l as any).userId as any) !== ((a as any).selfUserId as any) && !((t as any).has as any)((l as any).userId));
}
const wt: any = {
  list: {
    kskxy: "sand-o0cisl",
    kORKVm: "sand-1odjw0f",
    $$css: !0
  }
};
function ge(this: any, a: any): any {
  (ge as any).d = 1017;
  const e: any = ((I as any).c as any)(7),
    {
      agent: t
    }: any = a,
    {
      serverId: l,
      teamId: s
    }: any = t,
    i: any = ((t as any).viewerIsOwner as any) !== (!1 as any),
    n: any = ((t as any).published as any) === (!0 as any) && (l as any) != (null as any) && (s as any) != (null as any) && (i || ((t as any).viewerCanManage as any) === (!0 as any)),
    r: any = (oe as any)();
  let u: any;
  if (((e as any)[0] as any) !== (r as any) || ((e as any)[1] as any) !== (n as any) ? (u = (): any => (n && (r as any)("grok_bot_team_bot_managers"), vt), (e as any)[0] = r, (e as any)[1] = n, (e as any)[2] = u) : u = (e as any)[2], (K as any)(u), !(Z as any)("grok_bot_team_bot_managers") || !n) return null;
  let f: any;
  return ((e as any)[3] as any) !== (i as any) || ((e as any)[4] as any) !== (l as any) || ((e as any)[5] as any) !== (s as any) ? (f = ((o as any).jsx as any)(be, {
    isCreator: i,
    serverId: l,
    teamId: s
  }), (e as any)[3] = i, (e as any)[4] = l, (e as any)[5] = s, (e as any)[6] = f) : f = (e as any)[6], f;
}
function vt(this: any): any {}
function be(this: any, a: any): any {
  (be as any).d = 1016;
  const e: any = ((I as any).c as any)(35),
    {
      isCreator: t,
      serverId: l,
      teamId: s
    }: any = a,
    {
      _: i
    }: any = (U as any)(),
    n: any = ((H as any).useId as any)(),
    r: any = (ie as any)(),
    u: any = (Ie as any)(),
    c: any = (xt as any)(l),
    f: any = (Ae as any)(s);
  let m: any;
  ((e as any)[0] as any) !== (r as any) || ((e as any)[1] as any) !== (c as any) || ((e as any)[2] as any) !== (s as any) ? (m = (): any => (((c as any).load as any)(), (Ce as any)(r, s), Tt), (e as any)[0] = r, (e as any)[1] = c, (e as any)[2] = s, (e as any)[3] = m) : m = (e as any)[3], (K as any)(m);
  let p: any, d: any, h: any, w: any;
  if (((e as any)[4] as any) !== (i as any) || ((e as any)[5] as any) !== (u as any) || ((e as any)[6] as any) !== (r as any) || ((e as any)[7] as any) !== (n as any) || ((e as any)[8] as any) !== (t as any) || ((e as any)[9] as any) !== (c as any) || ((e as any)[10] as any) !== (f as any) || ((e as any)[11] as any) !== (s as any)) {
    const x: any = (X as any)((c as any).state) ?? null,
      v: any = (X as any)(f) ?? null;
    d = (((c as any).state as any).status as any) === ("failed" as any) || ((f as any).status as any) === ("failed" as any);
    let j: any;
    if (((e as any)[16] as any) !== (r as any) || ((e as any)[17] as any) !== (c as any) || ((e as any)[18] as any) !== (s as any) ? (j = (): any => {
      ((c as any).retry as any)(), (Ee as any)(r, s);
    }, (e as any)[16] = r, (e as any)[17] = c, (e as any)[18] = s, (e as any)[19] = j) : j = (e as any)[19], h = j, p = null, (x as any) != (null as any) && (v as any) != (null as any)) {
      const B: any = new (Map as any)((((v as any).members as any).map as any)(Bt)),
        O: any = ((x as any).map as any)((y: any): any => ((B as any).get as any)(y) ?? {
          userId: y,
          name: (i as any)({
            id: "j/bht1"
          }),
          email: ""
        });
      p = ((O as any).length as any) === (0 as any) ? ((o as any).jsx as any)(Y, {
        children: ((o as any).jsx as any)($, {
          id: "EdQY6l"
        })
      }) : ((o as any).jsx as any)(re, {
        labelledBy: n,
        style: [(wt as any).list, (Me as any).thinScrollbar],
        children: ((O as any).map as any)((y: any): any => {
          const T: any = (te as any)(y);
          return ((o as any).jsx as any)(ce, {
            lead: ((o as any).jsx as any)(et, {
              person: y,
              sizePx: 24
            }),
            title: T,
            ...((((y as any).email as any).length as any) > (0 as any) ? {
              meta: (y as any).email
            } : {}),
            ...(t ? {
              trailing: ((o as any).jsx as any)(Ze, {
                content: (i as any)({
                  id: "+4tG0u"
                }),
                children: ((o as any).jsx as any)(Xe, {
                  "aria-label": (i as any)({
                    id: "HLazKQ",
                    values: {
                      name: T
                    }
                  }),
                  icon: "trash",
                  onClick: (): any => {
                    (u as any)((_t as any)({
                      name: T,
                      removeManager: (): any => ((c as any).remove as any)((y as any).userId)
                    }));
                  },
                  size: "sm"
                })
              })
            } : {})
          }, (y as any).userId);
        })
      });
    } else if (!d) {
      let B: any;
      ((e as any)[20] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (B = ((o as any).jsx as any)(Y, {
        children: ((o as any).jsx as any)($, {
          id: "yQE2r9"
        })
      }), (e as any)[20] = B) : B = (e as any)[20], p = B;
    }
    w = t && (x as any) != (null as any) && (v as any) != (null as any) ? (yt as any)(v, x) : [], (e as any)[4] = i, (e as any)[5] = u, (e as any)[6] = r, (e as any)[7] = n, (e as any)[8] = t, (e as any)[9] = c, (e as any)[10] = f, (e as any)[11] = s, (e as any)[12] = p, (e as any)[13] = d, (e as any)[14] = h, (e as any)[15] = w;
  } else p = (e as any)[12], d = (e as any)[13], h = (e as any)[14], w = (e as any)[15];
  const b: any = w;
  let _: any;
  ((e as any)[21] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (_ = ((o as any).jsx as any)($, {
    id: "AH9j3K"
  }), (e as any)[21] = _) : _ = (e as any)[21];
  let g: any;
  ((e as any)[22] as any) !== (i as any) || ((e as any)[23] as any) !== (u as any) || ((e as any)[24] as any) !== (b as any) || ((e as any)[25] as any) !== (c as any) ? (g = ((b as any).length as any) > (0 as any) ? {
    headingTrailing: ((o as any).jsx as any)("span", {
      className: "sand-1rdy4ex sand-4vbgl9 sand-vc5jky",
      children: ((o as any).jsxs as any)(se, {
        placement: "bottom-end",
        children: [((o as any).jsx as any)((se as any).Trigger, {
          children: ((o as any).jsx as any)(J, {
            "aria-label": (i as any)({
              id: "ErwyLe"
            }),
            size: "sm",
            variant: "secondary",
            children: ((o as any).jsx as any)($, {
              id: "m16xKo"
            })
          })
        }), ((o as any).jsx as any)(tt, {
          candidates: b,
          label: (i as any)({
            id: "ErwyLe"
          }),
          onAdd: (x: any): any => {
            const v: any = ((b as any).find as any)((j: any): any => ((j as any).userId as any) === (x as any));
            (v as any) != (null as any) && (u as any)((jt as any)({
              name: (te as any)(v),
              addManager: (): any => ((c as any).add as any)(x)
            }));
          }
        })]
      })
    })
  } : {}, (e as any)[22] = i, (e as any)[23] = u, (e as any)[24] = b, (e as any)[25] = c, (e as any)[26] = g) : g = (e as any)[26];
  let S: any;
  ((e as any)[27] as any) !== (d as any) || ((e as any)[28] as any) !== (h as any) ? (S = d ? ((o as any).jsxs as any)(Y, {
    children: [((o as any).jsx as any)($, {
      id: "Ke/QF9"
    }), " ", ((o as any).jsx as any)(J, {
      onClick: h,
      size: "sm",
      variant: "secondary",
      children: ((o as any).jsx as any)($, {
        id: "6gRgw8"
      })
    })]
  }) : null, (e as any)[27] = d, (e as any)[28] = h, (e as any)[29] = S) : S = (e as any)[29];
  let k: any;
  return ((e as any)[30] as any) !== (p as any) || ((e as any)[31] as any) !== (n as any) || ((e as any)[32] as any) !== (g as any) || ((e as any)[33] as any) !== (S as any) ? (k = ((o as any).jsxs as any)(ue, {
    heading: _,
    headingId: n,
    ...g,
    children: [p, S]
  }), (e as any)[30] = p, (e as any)[31] = n, (e as any)[32] = g, (e as any)[33] = S, (e as any)[34] = k) : k = (e as any)[34], k;
}
function Bt(this: any, a: any): any {
  return [(a as any).userId, a];
}
function Tt(this: any): any {}
const Ot: any = {
  draftCopy: {
    kzQI83: "sand-1iyjqo2",
    kogj98: "sand-1ghz6dp",
    kMwMTN: "sand-1o0liin",
    $$css: !0
  }
};
function he(this: any, a: any): any {
  (he as any).d = 1051;
  const e: any = ((I as any).c as any)(13),
    {
      agentId: t
    }: any = a,
    {
      _: l
    }: any = (U as any)(),
    s: any = (de as any)(),
    i: any = (st as any)();
  let n: any;
  ((e as any)[0] as any) !== (l as any) || ((e as any)[1] as any) !== (s as any) ? (n = (): any => (s as any)({
    kind: "error",
    text: (l as any)({
      id: "HfEDmM"
    })
  }), (e as any)[0] = l, (e as any)[1] = s, (e as any)[2] = n) : n = (e as any)[2];
  let r: any;
  ((e as any)[3] as any) !== (t as any) || ((e as any)[4] as any) !== (i as any) ? (r = (): any => {
    (Le as any)() || (i?.holdMarkState(t, "happy"), (lt as any)(t, (): any => {
      i?.releaseMarkState(t);
    }));
  }, (e as any)[3] = t, (e as any)[4] = i, (e as any)[5] = r) : r = (e as any)[5];
  let u: any;
  ((e as any)[6] as any) !== (n as any) || ((e as any)[7] as any) !== (r as any) ? (u = {
    onFailure: n,
    onPublished: r
  }, (e as any)[6] = n, (e as any)[7] = r, (e as any)[8] = u) : u = (e as any)[8];
  const {
      status: c,
      publish: f
    }: any = (nt as any)(t, u),
    m: any = (c as any) === ("publishing" as any);
  let p: any;
  ((e as any)[9] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (p = ((o as any).jsx as any)($, {
    id: "EEYbdt"
  }), (e as any)[9] = p) : p = (e as any)[9];
  let d: any;
  return ((e as any)[10] as any) !== (f as any) || ((e as any)[11] as any) !== (m as any) ? (d = ((o as any).jsx as any)(J, {
    onClick: f,
    pending: m,
    size: "lg",
    style: (at as any).root,
    type: "button",
    variant: "secondary",
    children: p
  }), (e as any)[10] = f, (e as any)[11] = m, (e as any)[12] = d) : d = (e as any)[12], d;
}
function Se(this: any): any {
  (Se as any).d = 1052;
  const a: any = ((I as any).c as any)(1);
  let e: any;
  return ((a as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (e = ((o as any).jsxs as any)("section", {
    className: "sand-1n2onr6 sand-78zum5 sand-4hv7ue sand-1y0btm7 sand-fnq37j sand-hojbe8 sand-b3r6kr sand-1q0g3np sand-1cy8zhl sand-17d4w8g sand-1o4c39c sand-du1ouj sand-1p9h3wb sand-18v3q8p",
    children: [((o as any).jsx as any)("span", {
      className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-vy4d1p sand-xk0z11 sand-1kgmq87 sand-mgb6t1 sand-1o0liin",
      children: ((o as any).jsx as any)(it, {
        name: "hammer",
        size: "lg"
      })
    }), ((o as any).jsx as any)("p", {
      ...(Be as any)(($e as any).body2, (Ne as any).regular, (Ot as any).draftCopy),
      children: ((o as any).jsx as any)($, {
        id: "rHDc6J"
      })
    })]
  }), (a as any)[0] = e) : e = (a as any)[0], e;
}
const ke: any = (qe as any)((): any => (Te as any)((): any => import("./chunk-team-bot-overview-panel-CPbjqjze.js"), (__vite__mapDeps as any)([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]), (import.meta as any).url)),
  xe: any = ((ke as any).component as any)((a: any): any => (a as any).TeamBotOverviewPanel);
function je(this: any, a: any): any {
  (je as any).d = 1025;
  const e: any = ((I as any).c as any)(7),
    {
      status: t,
      names: l
    }: any = a;
  switch ((t as any).kind) {
    case "loading":
      {
        let s: any;
        return ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (s = ((o as any).jsx as any)($, {
          id: "yQE2r9"
        }), (e as any)[0] = s) : s = (e as any)[0], s;
      }
    case "failed":
      {
        let s: any;
        return ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (s = ((o as any).jsx as any)($, {
          id: "Ke/QF9"
        }), (e as any)[1] = s) : s = (e as any)[1], s;
      }
    case "empty":
      {
        let s: any;
        return ((e as any)[2] as any) !== (l as any) ? (s = ((o as any).jsx as any)(le, {
          count: 0,
          names: l
        }), (e as any)[2] = l, (e as any)[3] = s) : s = (e as any)[3], s;
      }
    case "count":
      {
        let s: any;
        return ((e as any)[4] as any) !== (l as any) || ((e as any)[5] as any) !== ((t as any).count as any) ? (s = ((o as any).jsx as any)(le, {
          count: (t as any).count,
          names: l
        }), (e as any)[4] = l, (e as any)[5] = (t as any).count, (e as any)[6] = s) : s = (e as any)[6], s;
      }
  }
}
function G(this: any, a: any): any {
  (G as any).d = 1024;
  const e: any = ((I as any).c as any)(9),
    {
      icon: t,
      label: l,
      rowId: s,
      status: i,
      names: n,
      onOpen: r
    }: any = a;
  let u: any;
  ((e as any)[0] as any) !== (n as any) || ((e as any)[1] as any) !== (i as any) ? (u = ((o as any).jsx as any)(je, {
    names: n,
    status: i
  }), (e as any)[0] = n, (e as any)[1] = i, (e as any)[2] = u) : u = (e as any)[2];
  let c: any;
  return ((e as any)[3] as any) !== (t as any) || ((e as any)[4] as any) !== (l as any) || ((e as any)[5] as any) !== (r as any) || ((e as any)[6] as any) !== (s as any) || ((e as any)[7] as any) !== (u as any) ? (c = ((o as any).jsx as any)(mt, {
    icon: t,
    onOpen: r,
    paneKey: s,
    subtitle: u,
    title: l
  }), (e as any)[3] = t, (e as any)[4] = l, (e as any)[5] = r, (e as any)[6] = s, (e as any)[7] = u, (e as any)[8] = c) : c = (e as any)[8], c;
}
function _e(this: any, a: any): any {
  (_e as any).d = 1028;
  const e: any = ((I as any).c as any)(48),
    {
      pluginStatus: t,
      secretsStatus: l,
      skillsStatus: s,
      filesStatus: i,
      pluginNames: n,
      secretNames: r,
      skillNames: u,
      fileNames: c,
      header: f,
      onOpenPlugins: m,
      onOpenSecrets: p,
      onOpenSkills: d,
      onOpenFiles: h
    }: any = a;
  let w: any;
  ((e as any)[0] as any) !== (n as any) ? (w = (n as any) === (void 0 as any) ? [] : n, (e as any)[0] = n, (e as any)[1] = w) : w = (e as any)[1];
  const b: any = w;
  let _: any;
  ((e as any)[2] as any) !== (r as any) ? (_ = (r as any) === (void 0 as any) ? [] : r, (e as any)[2] = r, (e as any)[3] = _) : _ = (e as any)[3];
  const g: any = _;
  let S: any;
  ((e as any)[4] as any) !== (u as any) ? (S = (u as any) === (void 0 as any) ? [] : u, (e as any)[4] = u, (e as any)[5] = S) : S = (e as any)[5];
  const k: any = S;
  let x: any;
  ((e as any)[6] as any) !== (c as any) ? (x = (c as any) === (void 0 as any) ? [] : c, (e as any)[6] = c, (e as any)[7] = x) : x = (e as any)[7];
  const v: any = x,
    {
      _: j
    }: any = (U as any)(),
    B: any = ((H as any).useId as any)();
  let O: any;
  ((e as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (O = {
    className: "sand-78zum5 sand-dt5ytf sand-mt3bw4"
  }, (e as any)[8] = O) : O = (e as any)[8];
  let y: any;
  ((e as any)[9] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (y = ((o as any).jsx as any)($, {
    id: "RDjuBN"
  }), (e as any)[9] = y) : y = (e as any)[9];
  let T: any;
  ((e as any)[10] as any) !== (j as any) ? (T = (j as any)({
    id: "ohUJJM"
  }), (e as any)[10] = j, (e as any)[11] = T) : T = (e as any)[11];
  let A: any;
  ((e as any)[12] as any) !== (m as any) || ((e as any)[13] as any) !== (b as any) || ((e as any)[14] as any) !== (t as any) || ((e as any)[15] as any) !== (T as any) ? (A = ((o as any).jsx as any)(G, {
    icon: "plug",
    label: T,
    names: b,
    onOpen: m,
    rowId: "team-plugins",
    status: t
  }), (e as any)[12] = m, (e as any)[13] = b, (e as any)[14] = t, (e as any)[15] = T, (e as any)[16] = A) : A = (e as any)[16];
  let M: any;
  ((e as any)[17] as any) !== (j as any) || ((e as any)[18] as any) !== (p as any) || ((e as any)[19] as any) !== (g as any) || ((e as any)[20] as any) !== (l as any) ? (M = (l as any) == (null as any) ? null : ((o as any).jsx as any)(G, {
    icon: (ne as any).secrets,
    label: (j as any)({
      id: "MAv87s"
    }),
    names: g,
    onOpen: p,
    rowId: "team-secrets",
    status: l
  }), (e as any)[17] = j, (e as any)[18] = p, (e as any)[19] = g, (e as any)[20] = l, (e as any)[21] = M) : M = (e as any)[21];
  let C: any;
  ((e as any)[22] as any) !== (j as any) ? (C = (j as any)({
    id: "PCSkw2"
  }), (e as any)[22] = j, (e as any)[23] = C) : C = (e as any)[23];
  let E: any;
  ((e as any)[24] as any) !== (d as any) || ((e as any)[25] as any) !== (k as any) || ((e as any)[26] as any) !== (s as any) || ((e as any)[27] as any) !== (C as any) ? (E = ((o as any).jsx as any)(G, {
    icon: "cube",
    label: C,
    names: k,
    onOpen: d,
    rowId: "team-skills",
    status: s
  }), (e as any)[24] = d, (e as any)[25] = k, (e as any)[26] = s, (e as any)[27] = C, (e as any)[28] = E) : E = (e as any)[28];
  let L: any;
  ((e as any)[29] as any) !== (j as any) ? (L = (j as any)({
    id: "sER+bs"
  }), (e as any)[29] = j, (e as any)[30] = L) : L = (e as any)[30];
  let N: any;
  ((e as any)[31] as any) !== (v as any) || ((e as any)[32] as any) !== (i as any) || ((e as any)[33] as any) !== (h as any) || ((e as any)[34] as any) !== (L as any) ? (N = ((o as any).jsx as any)(G, {
    icon: (ne as any).files,
    label: L,
    names: v,
    onOpen: h,
    rowId: "team-files",
    status: i
  }), (e as any)[31] = v, (e as any)[32] = i, (e as any)[33] = h, (e as any)[34] = L, (e as any)[35] = N) : N = (e as any)[35];
  let z: any;
  ((e as any)[36] as any) !== (B as any) || ((e as any)[37] as any) !== (A as any) || ((e as any)[38] as any) !== (M as any) || ((e as any)[39] as any) !== (E as any) || ((e as any)[40] as any) !== (N as any) ? (z = ((o as any).jsxs as any)(pt, {
    labelledBy: B,
    children: [A, M, E, N]
  }), (e as any)[36] = B, (e as any)[37] = A, (e as any)[38] = M, (e as any)[39] = E, (e as any)[40] = N, (e as any)[41] = z) : z = (e as any)[41];
  let P: any;
  ((e as any)[42] as any) !== (B as any) || ((e as any)[43] as any) !== (z as any) ? (P = ((o as any).jsx as any)(ue, {
    heading: y,
    headingId: B,
    children: z
  }), (e as any)[42] = B, (e as any)[43] = z, (e as any)[44] = P) : P = (e as any)[44];
  let R: any;
  return ((e as any)[45] as any) !== (f as any) || ((e as any)[46] as any) !== (P as any) ? (R = ((o as any).jsxs as any)("div", {
    ...O,
    children: [f, P]
  }), (e as any)[45] = f, (e as any)[46] = P, (e as any)[47] = R) : R = (e as any)[47], R;
}
function ye(this: any, a: any): any {
  (ye as any).d = 1031;
  const e: any = ((I as any).c as any)(15),
    {
      status: t,
      isPublished: l,
      onOpen: s
    }: any = a,
    {
      _: i
    }: any = (U as any)(),
    n: any = l && (t as any) === ("none" as any);
  let r: any;
  ((e as any)[0] as any) !== (t as any) ? (r = (t as any) === ("not_published" as any) || (ht as any)(t), (e as any)[0] = t, (e as any)[1] = r) : r = (e as any)[1];
  let u: any;
  ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (u = ((o as any).jsx as any)(Je, {
    sizePx: 16
  }), (e as any)[2] = u) : u = (e as any)[2];
  let c: any;
  ((e as any)[3] as any) !== (n as any) || ((e as any)[4] as any) !== (t as any) ? (c = n ? ((o as any).jsx as any)($, {
    id: "qNfVdp"
  }) : ((o as any).jsx as any)(St, {
    status: t
  }), (e as any)[3] = n, (e as any)[4] = t, (e as any)[5] = c) : c = (e as any)[5];
  let f: any;
  ((e as any)[6] as any) !== (i as any) || ((e as any)[7] as any) !== (n as any) ? (f = (i as any)(n ? {
    id: "CVtI2N"
  } : {
    id: "lyjq5X"
  }), (e as any)[6] = i, (e as any)[7] = n, (e as any)[8] = f) : f = (e as any)[8];
  let m: any;
  return ((e as any)[9] as any) !== (n as any) || ((e as any)[10] as any) !== (s as any) || ((e as any)[11] as any) !== (r as any) || ((e as any)[12] as any) !== (c as any) || ((e as any)[13] as any) !== (f as any) ? (m = ((o as any).jsx as any)(re, {
    children: ((o as any).jsx as any)(ce, {
      isDisabled: r,
      isMetaWrapped: n,
      lead: u,
      meta: c,
      onOpen: s,
      paneKey: "team-slack",
      title: f
    })
  }), (e as any)[9] = n, (e as any)[10] = s, (e as any)[11] = r, (e as any)[12] = c, (e as any)[13] = f, (e as any)[14] = m) : m = (e as any)[14], m;
}
function we(this: any, a: any): any {
  (we as any).d = 1026;
  const e: any = ((I as any).c as any)(9),
    {
      slackStatus: t,
      isPublished: l,
      unpublish: s,
      onOpenSlack: i
    }: any = a;
  let n: any;
  ((e as any)[0] as any) !== (l as any) || ((e as any)[1] as any) !== (i as any) || ((e as any)[2] as any) !== (t as any) ? (n = ((o as any).jsx as any)(ye, {
    isPublished: l,
    onOpen: i,
    status: t
  }), (e as any)[0] = l, (e as any)[1] = i, (e as any)[2] = t, (e as any)[3] = n) : n = (e as any)[3];
  let r: any;
  ((e as any)[4] as any) !== (s as any) ? (r = (s as any) == (null as any) ? null : ((o as any).jsx as any)(bt, {
    unpublish: s
  }), (e as any)[4] = s, (e as any)[5] = r) : r = (e as any)[5];
  let u: any;
  return ((e as any)[6] as any) !== (n as any) || ((e as any)[7] as any) !== (r as any) ? (u = ((o as any).jsxs as any)((o as any).Fragment, {
    children: [n, r]
  }), (e as any)[6] = n, (e as any)[7] = r, (e as any)[8] = u) : u = (e as any)[8], u;
}
function Pt(this: any, a: any): any {
  (Pt as any).d = 1030;
  const e: any = ((I as any).c as any)(10),
    {
      agent: t
    }: any = a,
    l: any = (Z as any)("grok_bot_multiplayer");
  let s: any;
  ((e as any)[0] as any) !== (t as any) || ((e as any)[1] as any) !== (l as any) ? (s = (Ue as any)(t, l), (e as any)[0] = t, (e as any)[1] = l, (e as any)[2] = s) : s = (e as any)[2];
  const i: any = s;
  let n: any;
  ((e as any)[3] as any) !== (t as any) || ((e as any)[4] as any) !== (i as any) ? (n = i && !(D as any)(t), (e as any)[3] = t, (e as any)[4] = i, (e as any)[5] = n) : n = (e as any)[5];
  const r: any = (fe as any)(t, n);
  if (!i) return null;
  const u: any = (me as any)({
    isPublished: (D as any)(t),
    isPublishable: r
  });
  if ((u as any) === ("ready" as any)) {
    let c: any;
    return ((e as any)[6] as any) !== ((t as any).id as any) ? (c = ((o as any).jsx as any)(he, {
      agentId: (t as any).id
    }), (e as any)[6] = (t as any).id, (e as any)[7] = c) : c = (e as any)[7], c;
  }
  if ((u as any) === ("published" as any)) {
    let c: any;
    return ((e as any)[8] as any) !== ((t as any).id as any) ? (c = ((o as any).jsx as any)(ct, {
      agentId: (t as any).id
    }), (e as any)[8] = (t as any).id, (e as any)[9] = c) : c = (e as any)[9], c;
  }
  return null;
}
function ve(this: any, a: any): any {
  const e: any = ((I as any).c as any)(8),
    t: any = (Z as any)("grok_bot_multiplayer"),
    l: any = (oe as any)();
  let s: any;
  ((e as any)[0] as any) !== (a as any) || ((e as any)[1] as any) !== (l as any) ? (s = (): any => ((ee as any)(a, !0) && (l as any)("grok_bot_multiplayer"), At), (e as any)[0] = a, (e as any)[1] = l, (e as any)[2] = s) : s = (e as any)[2], (K as any)(s);
  let i: any;
  ((e as any)[3] as any) !== (a as any) || ((e as any)[4] as any) !== (t as any) ? (i = (ee as any)(a, t), (e as any)[3] = a, (e as any)[4] = t, (e as any)[5] = i) : i = (e as any)[5];
  const n: any = i;
  let r: any;
  return ((e as any)[6] as any) !== (n as any) ? (r = (): any => (n && (Qe as any)(((ke as any).preload as any)(), "team-bot-overview-panel-import"), It), (e as any)[6] = n, (e as any)[7] = r) : r = (e as any)[7], (K as any)(r), n;
}
function It(this: any): any {}
function At(this: any): any {}
function Mt(this: any, a: any): any {
  (Mt as any).d = 1029;
  const e: any = ((I as any).c as any)(64),
    {
      agent: t
    }: any = a,
    l: any = (ve as any)(t),
    s: any = (ze as any)(l ? (t as any).id : null),
    i: any = (Fe as any)(l ? (t as any).id : null),
    n: any = (ot as any)(l ? (t as any).serverId : null);
  let r: any;
  ((e as any)[0] as any) !== (t as any) || ((e as any)[1] as any) !== (l as any) ? (r = l && ((t as any).viewerIsOwner as any) !== (!1 as any) && !(D as any)(t), (e as any)[0] = t, (e as any)[1] = l, (e as any)[2] = r) : r = (e as any)[2];
  const u: any = (fe as any)(t, r),
    [c, f]: any = ((H as any).useState as any)(null);
  if (!l) return null;
  const m: any = (c?.agentId as any) === ((t as any).id as any) ? (c as any).kind : null;
  let p: any;
  ((e as any)[3] as any) !== ((t as any).id as any) ? (p = (P: any): any => {
    (f as any)({
      agentId: (t as any).id,
      kind: (((P as any).status as any).kind as any) === ("empty" as any) ? (P as any).addKind : {
        details: (P as any).section
      }
    });
  }, (e as any)[3] = (t as any).id, (e as any)[4] = p) : p = (e as any)[4];
  const d: any = p;
  let h: any, w: any, b: any, _: any, g: any, S: any, k: any, x: any;
  if (((e as any)[5] as any) !== (n as any) || ((e as any)[6] as any) !== ((i as any).plugins as any) || ((e as any)[7] as any) !== (s as any)) {
    const P: any = ((ut as any)(s) as any).load,
      R: any = (dt as any)((i as any).plugins);
    let q: any;
    ((e as any)[16] as any) !== (n?.secrets as any) ? (q = n?.secrets ?? [], (e as any)[16] = n?.secrets, (e as any)[17] = q) : q = (e as any)[17], _ = q;
    const Q: any = (Ve as any)((i as any).plugins);
    b = (W as any)(P, (R as any).length);
    let V: any;
    ((e as any)[18] as any) !== (n as any) || ((e as any)[19] as any) !== ((_ as any).length as any) ? (V = (n as any) == (null as any) ? null : (W as any)((n as any).load, (_ as any).length), (e as any)[18] = n, (e as any)[19] = (_ as any).length, (e as any)[20] = V) : V = (e as any)[20], g = V, k = (W as any)(P, ((Q as any).librarySkills as any).length), h = (W as any)(P, ((Q as any).fileSkills as any).length), w = ((R as any).map as any)(Lt), S = (((Q as any).librarySkills as any).map as any)(Et), x = (((Q as any).fileSkills as any).map as any)(We), (e as any)[5] = n, (e as any)[6] = (i as any).plugins, (e as any)[7] = s, (e as any)[8] = h, (e as any)[9] = w, (e as any)[10] = b, (e as any)[11] = _, (e as any)[12] = g, (e as any)[13] = S, (e as any)[14] = k, (e as any)[15] = x;
  } else h = (e as any)[8], w = (e as any)[9], b = (e as any)[10], _ = (e as any)[11], g = (e as any)[12], S = (e as any)[13], k = (e as any)[14], x = (e as any)[15];
  const v: any = x;
  let j: any;
  ((e as any)[21] as any) !== (t as any) || ((e as any)[22] as any) !== (u as any) ? (j = (me as any)({
    isPublished: (D as any)(t),
    isPublishable: u
  }), (e as any)[21] = t, (e as any)[22] = u, (e as any)[23] = j) : j = (e as any)[23];
  const B: any = j;
  let O: any;
  ((e as any)[24] as any) !== ((t as any).viewerIsOwner as any) || ((e as any)[25] as any) !== (B as any) ? (O = ((t as any).viewerIsOwner as any) !== (!1 as any) && (B as any) === ("not_ready" as any) ? ((o as any).jsx as any)(Se, {}) : null, (e as any)[24] = (t as any).viewerIsOwner, (e as any)[25] = B, (e as any)[26] = O) : O = (e as any)[26];
  let y: any;
  ((e as any)[27] as any) !== (_ as any) ? (y = ((_ as any).map as any)(Ct), (e as any)[27] = _, (e as any)[28] = y) : y = (e as any)[28];
  let T: any;
  ((e as any)[29] as any) !== (h as any) || ((e as any)[30] as any) !== (d as any) ? (T = (): any => (d as any)({
    addKind: "files",
    section: "files",
    status: h
  }), (e as any)[29] = h, (e as any)[30] = d, (e as any)[31] = T) : T = (e as any)[31];
  let A: any;
  ((e as any)[32] as any) !== (d as any) || ((e as any)[33] as any) !== (b as any) ? (A = (): any => (d as any)({
    addKind: "plugins",
    section: "integrations",
    status: b
  }), (e as any)[32] = d, (e as any)[33] = b, (e as any)[34] = A) : A = (e as any)[34];
  let M: any;
  ((e as any)[35] as any) !== (d as any) || ((e as any)[36] as any) !== (g as any) ? (M = (): any => {
    (g as any) != (null as any) && (d as any)({
      addKind: "secrets",
      section: "secrets",
      status: g
    });
  }, (e as any)[35] = d, (e as any)[36] = g, (e as any)[37] = M) : M = (e as any)[37];
  let C: any;
  ((e as any)[38] as any) !== (d as any) || ((e as any)[39] as any) !== (k as any) ? (C = (): any => (d as any)({
    addKind: "skills",
    section: "skills",
    status: k
  }), (e as any)[38] = d, (e as any)[39] = k, (e as any)[40] = C) : C = (e as any)[40];
  let E: any;
  ((e as any)[41] as any) !== (v as any) || ((e as any)[42] as any) !== (h as any) || ((e as any)[43] as any) !== (w as any) || ((e as any)[44] as any) !== (b as any) || ((e as any)[45] as any) !== (g as any) || ((e as any)[46] as any) !== (S as any) || ((e as any)[47] as any) !== (k as any) || ((e as any)[48] as any) !== (C as any) || ((e as any)[49] as any) !== (O as any) || ((e as any)[50] as any) !== (y as any) || ((e as any)[51] as any) !== (T as any) || ((e as any)[52] as any) !== (A as any) || ((e as any)[53] as any) !== (M as any) ? (E = ((o as any).jsx as any)(_e, {
    fileNames: v,
    header: O,
    filesStatus: h,
    pluginNames: w,
    secretNames: y,
    skillNames: S,
    onOpenFiles: T,
    onOpenPlugins: A,
    onOpenSecrets: M,
    onOpenSkills: C,
    pluginStatus: b,
    secretsStatus: g,
    skillsStatus: k
  }), (e as any)[41] = v, (e as any)[42] = h, (e as any)[43] = w, (e as any)[44] = b, (e as any)[45] = g, (e as any)[46] = S, (e as any)[47] = k, (e as any)[48] = C, (e as any)[49] = O, (e as any)[50] = y, (e as any)[51] = T, (e as any)[52] = A, (e as any)[53] = M, (e as any)[54] = E) : E = (e as any)[54];
  let L: any;
  ((e as any)[55] as any) !== (t as any) ? (L = ((o as any).jsx as any)(ge, {
    agent: t
  }), (e as any)[55] = t, (e as any)[56] = L) : L = (e as any)[56];
  let N: any;
  ((e as any)[57] as any) !== (t as any) || ((e as any)[58] as any) !== (m as any) ? (N = (m as any) != (null as any) ? ((o as any).jsx as any)(xe, {
    agent: t,
    onClose: (): any => (f as any)(null),
    panel: m
  }) : null, (e as any)[57] = t, (e as any)[58] = m, (e as any)[59] = N) : N = (e as any)[59];
  let z: any;
  return ((e as any)[60] as any) !== (E as any) || ((e as any)[61] as any) !== (L as any) || ((e as any)[62] as any) !== (N as any) ? (z = ((o as any).jsxs as any)((o as any).Fragment, {
    children: [E, L, N]
  }), (e as any)[60] = E, (e as any)[61] = L, (e as any)[62] = N, (e as any)[63] = z) : z = (e as any)[63], z;
}
function Ct(this: any, a: any): any {
  return (a as any).name;
}
function Et(this: any, a: any): any {
  return (He as any)(a, (Ye as any)());
}
function Lt(this: any, a: any): any {
  return (ft as any)(a);
}
function Nt(this: any, a: any): any {
  (Nt as any).d = 1027;
  const e: any = ((I as any).c as any)(26),
    {
      agent: t
    }: any = a,
    {
      _: l
    }: any = (U as any)(),
    s: any = (ve as any)(t),
    i: any = (D as any)(t),
    n: any = (de as any)();
  let r: any;
  ((e as any)[0] as any) !== (l as any) || ((e as any)[1] as any) !== (n as any) ? (r = {
    onFailure: (): any => (n as any)({
      kind: "error",
      text: (l as any)({
        id: "D2AZQg"
      })
    })
  }, (e as any)[0] = l, (e as any)[1] = n, (e as any)[2] = r) : r = (e as any)[2];
  const {
      status: u,
      unpublish: c
    }: any = (rt as any)((t as any).id, r),
    {
      autoUpdate: f
    }: any = (Re as any)(),
    m: any = (Ge as any)(),
    p: any = (Ke as any)(),
    d: any = (De as any)(t);
  let h: any;
  ((e as any)[3] as any) !== (f as any) || ((e as any)[4] as any) !== (d as any) ? (h = (): any => ((d as any) != (null as any) && (f as any)(d), $t), (e as any)[3] = f, (e as any)[4] = d, (e as any)[5] = h) : h = (e as any)[5], (K as any)(h);
  const [w, b]: any = ((H as any).useState as any)(null);
  if (!s) return null;
  const _: any = (gt as any)({
    serverStatus: (t as any).slackStatus ?? "none",
    isPublished: i,
    isAutoUpdating: (m as any) === ((t as any).id as any),
    step: (p?.agentId as any) === ((t as any).id as any) ? (p as any).step : null
  });
  let g: any;
  ((e as any)[6] as any) !== ((t as any).id as any) || ((e as any)[7] as any) !== (b as any) ? (g = (): any => (b as any)((t as any).id), (e as any)[6] = (t as any).id, (e as any)[7] = b, (e as any)[8] = g) : g = (e as any)[8];
  let S: any;
  ((e as any)[9] as any) !== ((t as any).viewerIsOwner as any) || ((e as any)[10] as any) !== (i as any) || ((e as any)[11] as any) !== (c as any) || ((e as any)[12] as any) !== (u as any) ? (S = i && ((t as any).viewerIsOwner as any) !== (!1 as any) ? {
    unpublish: {
      isPending: (u as any) === ("unpublishing" as any),
      onUnpublish: c
    }
  } : {}, (e as any)[9] = (t as any).viewerIsOwner, (e as any)[10] = i, (e as any)[11] = c, (e as any)[12] = u, (e as any)[13] = S) : S = (e as any)[13];
  let k: any;
  ((e as any)[14] as any) !== (i as any) || ((e as any)[15] as any) !== (_ as any) || ((e as any)[16] as any) !== (g as any) || ((e as any)[17] as any) !== (S as any) ? (k = ((o as any).jsx as any)(we, {
    isPublished: i,
    onOpenSlack: g,
    slackStatus: _,
    ...S
  }), (e as any)[14] = i, (e as any)[15] = _, (e as any)[16] = g, (e as any)[17] = S, (e as any)[18] = k) : k = (e as any)[18];
  let x: any;
  ((e as any)[19] as any) !== (t as any) || ((e as any)[20] as any) !== (b as any) || ((e as any)[21] as any) !== (w as any) ? (x = (w as any) === ((t as any).id as any) ? ((o as any).jsx as any)(xe, {
    agent: t,
    onClose: (): any => (b as any)(null),
    panel: "slack"
  }) : null, (e as any)[19] = t, (e as any)[20] = b, (e as any)[21] = w, (e as any)[22] = x) : x = (e as any)[22];
  let v: any;
  return ((e as any)[23] as any) !== (k as any) || ((e as any)[24] as any) !== (x as any) ? (v = ((o as any).jsxs as any)((o as any).Fragment, {
    children: [k, x]
  }), (e as any)[23] = k, (e as any)[24] = x, (e as any)[25] = v) : v = (e as any)[25], v;
}
function $t(this: any): any {}
export { we as TeamBotDetailsFooter, Nt as TeamBotDetailsFooterLive, _e as TeamBotOverviewSection, Mt as TeamBotOverviewSectionLive, Pt as TeamBotSidebarPublishActionLive };
//# debugId=9c90859c-0289-4eb4-967c-d5a0390c149d
