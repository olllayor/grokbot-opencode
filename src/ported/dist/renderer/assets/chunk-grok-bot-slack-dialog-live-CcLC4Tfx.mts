declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "a8b3142e-2d49-4025-9a7b-4c0d1858b107", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-a8b3142e-2d49-4025-9a7b-4c0d1858b107");
  } catch (e: any) {}
} as any)();
import { c as q, p as z, j as t, T as o, r as xe, u as O } from "./index.eager-vendor-Qbf9YA6n.js";
import { i as ve } from "./index.eager-platform-Dcfeegfw.js";
import { bA as Q, a_ as R, t as Y, f as ye, a$ as ge, aP as be, dC as we, dD as Se, cq as Ne, dE as Ae, bc as Ce, dF as qe, cr as H } from "./index.eager-app-Cj5f8Gby.js";
import { W as L, z as $e, x as y } from "./index-ZYxf-aBb.js";
const K: string = "https://cursor.com/bot/slack-auto-approve",
  Fe: any = {
    tip: {
      k1xSpc: "sand-78zum5",
      kGNEyG: "sand-1cy8zhl",
      kOIVth: "sand-883omv",
      kogj98: "sand-1ghz6dp",
      k8WAf4: "sand-p59q4u",
      kg3NbH: "sand-aope02",
      kaIpWk: "sand-hojbe8",
      kWkggS: "sand-8c2ked",
      kMwMTN: "sand-1o0liin",
      $$css: !0
    }
  };
function J(this: any, i: any): any {
  (J as any).d = 939;
  const e: any = ((q as any).c as any)(7),
    {
      step: s
    }: any = i,
    n: any = (Q as any)();
  if (!((((s as any).kind as any) === ("pending_admin_approval" as any) || ((s as any).kind as any) === ("pending_reinstall_approval" as any)) && (s as any).approvalRequestFiled) && ((s as any).kind as any) !== ("cursor_approval_required" as any)) return null;
  let l: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (l = (z as any)((R as any).body2, (Fe as any).tip), (e as any)[0] = l) : l = (e as any)[0];
  let r: any;
  ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (r = ((t as any).jsx as any)("span", {
    "aria-hidden": !0,
    className: "sand-78zum5 sand-6s0dn4 sand-2lah0s sand-g2ss61",
    children: ((t as any).jsx as any)(L, {
      color: "tertiary",
      name: "info",
      size: "sm"
    })
  }), (e as any)[1] = r) : r = (e as any)[1];
  let c: any;
  ((e as any)[2] as any) !== (n as any) ? (c = (Y as any)(K, n), (e as any)[2] = n, (e as any)[3] = c) : c = (e as any)[3];
  let p: any;
  ((e as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (p = {
    className: "sand-tyxrsu sand-ujl8zx"
  }, (e as any)[4] = p) : p = (e as any)[4];
  let h: any;
  return ((e as any)[5] as any) !== (c as any) ? (h = ((t as any).jsxs as any)("p", {
    ...l,
    children: [r, ((t as any).jsx as any)("span", {
      children: ((t as any).jsx as any)(o, {
        id: "ygYnVo",
        components: {
          0: ((t as any).jsx as any)("a", {
            ...c,
            ...p,
            href: K,
            rel: "noopener noreferrer",
            target: "_blank"
          })
        }
      })
    })]
  }), (e as any)[5] = c, (e as any)[6] = h) : h = (e as any)[6], h;
}
const X: string = "https://docs.slack.dev/admins/managing-app-approvals",
  Re: number = 54,
  $: any = {
    heroTitle: {
      kogj98: "sand-1ghz6dp",
      kMwMTN: "sand-tyxrsu",
      $$css: !0
    },
    heroDescription: {
      kogj98: "sand-1ghz6dp",
      kMwMTN: "sand-1o0liin",
      $$css: !0
    },
    connectWorkspace: {
      kzqmXN: "sand-h8yej3",
      kjj79g: "sand-l56j7k",
      $$css: !0
    },
    workspaceOption: {
      k1xSpc: "sand-78zum5",
      kGNEyG: "sand-6s0dn4",
      kOIVth: "sand-883omv",
      kzqmXN: "sand-h8yej3",
      kB7OPa: "sand-9f619",
      kZKoxP: "sand-1vqgdyp",
      k8WAf4: "sand-t970qd",
      kg3NbH: "sand-aope02",
      kMzoRj: "sand-c342km",
      kaIpWk: "sand-hojbe8",
      kWkggS: "sand-jbqb8w",
      kMwMTN: "sand-tyxrsu",
      k9WMMc: "sand-1yc453h",
      kkrTdU: "sand-1ypdohk",
      $$css: !0
    },
    workspaceOptionSelected: {
      kWkggS: "sand-1b8i4yy",
      $$css: !0
    },
    connectAnother: {
      k1xSpc: "sand-78zum5",
      kGNEyG: "sand-6s0dn4",
      kOIVth: "sand-167g77z",
      kzqmXN: "sand-h8yej3",
      kB7OPa: "sand-9f619",
      kZKoxP: "sand-1vqgdyp",
      k8WAf4: "sand-t970qd",
      kg3NbH: "sand-aope02",
      kMzoRj: "sand-c342km",
      kaIpWk: "sand-hojbe8",
      kWkggS: "sand-jbqb8w sand-aalx5g",
      kMwMTN: "sand-1o0liin",
      k9WMMc: "sand-1yc453h",
      kkrTdU: "sand-1ypdohk",
      $$css: !0
    },
    heroLead: {
      kogj98: "sand-1ghz6dp",
      kMwMTN: "sand-tyxrsu",
      $$css: !0
    },
    ghostDanger: {
      kGVxlE: "sand-1gnnqk1",
      $$css: !0
    },
    ghostDismiss: {
      kGVxlE: "sand-1gnnqk1",
      kMwMTN: "sand-1o0liin",
      $$css: !0
    },
    bodyContain: {
      ktR8K2: "sand-41o525",
      $$css: !0
    },
    actionBar: {
      kwnvtZ: "sand-1a02dak",
      $$css: !0
    },
    workspaceAction: {
      ks0D6T: "sand-193iq5w",
      $$css: !0
    },
    detail: {
      kogj98: "sand-1ghz6dp",
      kMv6JI: "sand-1mb2qyg",
      kMwMTN: "sand-169k319",
      $$css: !0
    },
    note: {
      kogj98: "sand-1ghz6dp",
      kMwMTN: "sand-1o0liin",
      $$css: !0
    },
    problem: {
      kogj98: "sand-1ghz6dp",
      kMwMTN: "sand-6rl5ky",
      $$css: !0
    }
  };
function ze(this: any, i: any, e: any): any {
  const s: any = new (Map as any)();
  return ((i as any).map as any)((n: any): any => {
    const a: any = (n as any).slackTeamName ?? e;
    if (((((i as any).filter as any)((c: any): any => (((c as any).slackTeamName ?? e) as any) === (a as any)) as any).length as any) === (1 as any)) return {
      workspace: n,
      label: a
    };
    const r: any = ((((s as any).get as any)(a) ?? 0) as any) + (1 as any);
    return ((s as any).set as any)(a, r), {
      workspace: n,
      label: `${a} (${r})`
    };
  });
}
function I(this: any, i: any): any {
  (I as any).d = 918;
  const e: any = ((q as any).c as any)(5),
    {
      children: s
    }: any = i;
  let n: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = {
    className: "sand-78zum5 sand-6s0dn4 sand-883omv sand-21xpn4"
  }, (e as any)[0] = n) : n = (e as any)[0];
  let a: any, l: any;
  ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = ((t as any).jsx as any)(be, {
    size: 18
  }), l = (z as any)((R as any).body1, ($ as any).note), (e as any)[1] = a, (e as any)[2] = l) : (a = (e as any)[1], l = (e as any)[2]);
  let r: any;
  return ((e as any)[3] as any) !== (s as any) ? (r = ((t as any).jsxs as any)("div", {
    ...n,
    role: "status",
    children: [a, ((t as any).jsx as any)("span", {
      ...l,
      children: s
    })]
  }), (e as any)[3] = s, (e as any)[4] = r) : r = (e as any)[4], r;
}
function Z(this: any, i: any): any {
  (Z as any).d = 930;
  const e: any = ((q as any).c as any)(3),
    {
      children: s
    }: any = i;
  let n: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = (z as any)((R as any).body1, ($ as any).problem), (e as any)[0] = n) : n = (e as any)[0];
  let a: any;
  return ((e as any)[1] as any) !== (s as any) ? (a = ((t as any).jsx as any)("p", {
    role: "alert",
    ...n,
    children: s
  }), (e as any)[1] = s, (e as any)[2] = a) : a = (e as any)[2], a;
}
function B(this: any): any {
  (B as any).d = 926;
  const i: any = ((q as any).c as any)(1);
  let e: any;
  return ((i as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (e = ((t as any).jsx as any)(o, {
    id: "f6VKmJ"
  }), (i as any)[0] = e) : e = (i as any)[0], e;
}
function ee(this: any): any {
  (ee as any).d = 921;
  const i: any = ((q as any).c as any)(8),
    e: any = (Q as any)();
  let s: any;
  ((i as any)[0] as any) !== (e as any) ? (s = (Y as any)(X, e), (i as any)[0] = e, (i as any)[1] = s) : s = (i as any)[1];
  let n: any;
  ((i as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = {
    className: "sand-1heor9g sand-ujl8zx sand-1ypdohk"
  }, (i as any)[2] = n) : n = (i as any)[2];
  let a: any;
  ((i as any)[3] as any) !== (s as any) ? (a = {
    ...s,
    ...n,
    href: X
  }, (i as any)[3] = s, (i as any)[4] = a) : a = (i as any)[4];
  const l: any = a;
  let r: any;
  ((i as any)[5] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (r = ((t as any).jsx as any)(o, {
    id: "1+68GC"
  }), (i as any)[5] = r) : r = (i as any)[5];
  let c: any;
  return ((i as any)[6] as any) !== (l as any) ? (c = ((t as any).jsxs as any)((t as any).Fragment, {
    children: [r, " ", ((t as any).jsx as any)(o, {
      id: "QYPG6T",
      components: {
        0: ((t as any).jsx as any)("a", {
          ...l,
          rel: "noopener noreferrer",
          target: "_blank"
        })
      }
    })]
  }), (i as any)[6] = l, (i as any)[7] = c) : c = (i as any)[7], c;
}
function ne(this: any, i: any): any {
  (ne as any).d = 931;
  const e: any = ((q as any).c as any)(2),
    {
      reason: s
    }: any = i;
  let n: any;
  return ((e as any)[0] as any) !== (s as any) ? (n = (s as any) === ("insufficient_scopes" as any) ? ((t as any).jsx as any)(B, {}) : ((t as any).jsx as any)(o, {
    id: "8RofV4"
  }), (e as any)[0] = s, (e as any)[1] = n) : n = (e as any)[1], n;
}
function se(this: any, i: any): any {
  (se as any).d = 917;
  const e: any = ((q as any).c as any)(16),
    {
      agentName: s,
      step: n
    }: any = i;
  if (((n as any).reason as any) === ("install_conflict" as any)) {
    let a: any;
    return ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = ((t as any).jsx as any)(o, {
      id: "JJGun8"
    }), (e as any)[0] = a) : a = (e as any)[0], a;
  }
  if (((n as any).reason as any) === ("rate_limited" as any)) {
    let a: any;
    return ((e as any)[1] as any) !== (s as any) || ((e as any)[2] as any) !== ((n as any).retrying as any) ? (a = ((n as any).retrying as any) === (!0 as any) ? ((t as any).jsx as any)(o, {
      id: "o5SuUd",
      values: {
        agentName: s
      }
    }) : ((t as any).jsx as any)(o, {
      id: "C2GIhH"
    }), (e as any)[1] = s, (e as any)[2] = (n as any).retrying, (e as any)[3] = a) : a = (e as any)[3], a;
  }
  switch ((n as any).slackError) {
    case "collaborator_required":
      {
        let a: any;
        return ((e as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = ((t as any).jsx as any)(o, {
          id: "w8pUaS"
        }), (e as any)[4] = a) : a = (e as any)[4], a;
      }
    case "creator_account_required":
      {
        let a: any;
        return ((e as any)[5] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = ((t as any).jsx as any)(o, {
          id: "+aoj6r"
        }), (e as any)[5] = a) : a = (e as any)[5], a;
      }
    case "insufficient_scopes":
      {
        let a: any;
        return ((e as any)[6] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = ((t as any).jsx as any)(B, {}), (e as any)[6] = a) : a = (e as any)[6], a;
      }
    case "app_limit_reached":
      {
        let a: any;
        return ((e as any)[7] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = ((t as any).jsx as any)(o, {
          id: "Tqyvtn"
        }), (e as any)[7] = a) : a = (e as any)[7], a;
      }
    case "install_denied":
      {
        let a: any;
        return ((e as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = ((t as any).jsx as any)(o, {
          id: "gMlRzy"
        }), (e as any)[8] = a) : a = (e as any)[8], a;
      }
    case "approval_denied":
      {
        let a: any;
        return ((e as any)[9] as any) !== ((n as any).appRemoved as any) ? (a = (n as any).appRemoved ? ((t as any).jsx as any)(o, {
          id: "dYfmuh"
        }) : ((t as any).jsx as any)(o, {
          id: "52CRRT"
        }), (e as any)[9] = (n as any).appRemoved, (e as any)[10] = a) : a = (e as any)[10], a;
      }
    case "app_missing":
      {
        let a: any;
        return ((e as any)[11] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = ((t as any).jsx as any)(o, {
          id: "vgnkb6"
        }), (e as any)[11] = a) : a = (e as any)[11], a;
      }
    case "foreign_manager":
      {
        let a: any;
        return ((e as any)[12] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = ((t as any).jsx as any)(o, {
          id: "MKN2+r"
        }), (e as any)[12] = a) : a = (e as any)[12], a;
      }
    case "install_unsupported":
      {
        let a: any;
        return ((e as any)[13] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = ((t as any).jsx as any)(o, {
          id: "o6yXCq"
        }), (e as any)[13] = a) : a = (e as any)[13], a;
      }
    case "network_blocked":
      {
        let a: any;
        return ((e as any)[14] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = ((t as any).jsx as any)(o, {
          id: "O7UFCq"
        }), (e as any)[14] = a) : a = (e as any)[14], a;
      }
    case "unknown":
    case null:
      {
        let a: any;
        return ((e as any)[15] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = ((t as any).jsx as any)(o, {
          id: "tb19Dh"
        }), (e as any)[15] = a) : a = (e as any)[15], a;
      }
  }
}
function te(this: any, i: any): any {
  (te as any).d = 936;
  const e: any = ((q as any).c as any)(20),
    {
      workspaces: s,
      selectedId: n,
      onSelect: a,
      onConnectAnother: l
    }: any = i,
    {
      _: r
    }: any = (O as any)();
  let c: any, p: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (c = {
    className: "sand-78zum5 sand-dt5ytf sand-1jnr06f"
  }, p = {
    className: "sand-78zum5 sand-dt5ytf sand-1jnr06f sand-1ghz6dp sand-1717udv sand-e8uvvx"
  }, (e as any)[0] = c, (e as any)[1] = p) : (c = (e as any)[0], p = (e as any)[1]);
  let h: any;
  ((e as any)[2] as any) !== (r as any) ? (h = (r as any)({
    id: "+yDAfB"
  }), (e as any)[2] = r, (e as any)[3] = h) : h = (e as any)[3];
  let w: any;
  if (((e as any)[4] as any) !== (r as any) || ((e as any)[5] as any) !== (a as any) || ((e as any)[6] as any) !== (n as any) || ((e as any)[7] as any) !== (s as any)) {
    let v: any;
    ((e as any)[9] as any) !== (a as any) || ((e as any)[10] as any) !== (n as any) ? (v = (S: any): any => {
      const {
          workspace: k,
          label: N
        }: any = S,
        b: any = ((k as any).slackTeamId as any) === (n as any);
      return ((t as any).jsx as any)("li", {
        children: ((t as any).jsxs as any)("button", {
          "aria-pressed": b,
          onClick: (): any => (a as any)((k as any).slackTeamId),
          type: "button",
          ...(z as any)((R as any).body1, ($ as any).workspaceOption, b && ($ as any).workspaceOptionSelected),
          children: [((t as any).jsx as any)("span", {
            "aria-hidden": !0,
            ...({
              0: {
                className: "sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-9f619 sand-1kky2od sand-lup9mm sand-1i6gnc1 sand-vndefy sand-1y0btm7 sand-1b7rqjq sand-jbqb8w sand-xcaa6e"
              },
              1: {
                className: "sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-9f619 sand-1kky2od sand-lup9mm sand-1i6gnc1 sand-vndefy sand-1y0btm7 sand-xcaa6e sand-1newj2f sand-1wclgxm"
              }
            } as any)[(!!b as any) << (0 as any)],
            children: b ? ((t as any).jsx as any)(L, {
              name: "check",
              size: "xs"
            }) : null
          }), ((t as any).jsx as any)("span", {
            className: "sand-1iyjqo2 sand-s83m0k sand-dl72j9 sand-euugli sand-b3r6kr sand-lyipyv sand-uxw1ft",
            children: N
          })]
        })
      }, (k as any).slackTeamId);
    }, (e as any)[9] = a, (e as any)[10] = n, (e as any)[11] = v) : v = (e as any)[11], w = (((ze as any)(s, (r as any)({
      id: "1z1n9n"
    })) as any).map as any)(v), (e as any)[4] = r, (e as any)[5] = a, (e as any)[6] = n, (e as any)[7] = s, (e as any)[8] = w;
  } else w = (e as any)[8];
  let g: any;
  ((e as any)[12] as any) !== (h as any) || ((e as any)[13] as any) !== (w as any) ? (g = ((t as any).jsx as any)("ul", {
    ...p,
    "aria-label": h,
    children: w
  }), (e as any)[12] = h, (e as any)[13] = w, (e as any)[14] = g) : g = (e as any)[14];
  let _: any;
  ((e as any)[15] as any) !== (l as any) ? (_ = (l as any) == (null as any) ? null : ((t as any).jsxs as any)("button", {
    onClick: l,
    type: "button",
    ...(z as any)((R as any).body1, ($ as any).connectAnother),
    children: [((t as any).jsx as any)(L, {
      "aria-hidden": !0,
      name: "plus",
      size: "sm"
    }), ((t as any).jsx as any)(o, {
      id: "cahLyK"
    })]
  }), (e as any)[15] = l, (e as any)[16] = _) : _ = (e as any)[16];
  let x: any;
  return ((e as any)[17] as any) !== (g as any) || ((e as any)[18] as any) !== (_ as any) ? (x = ((t as any).jsxs as any)("div", {
    ...c,
    children: [g, _]
  }), (e as any)[17] = g, (e as any)[18] = _, (e as any)[19] = x) : x = (e as any)[19], x;
}
function Me(this: any, i: any): any {
  return ((i as any).kind as any) === ("ready" as any) ? [(i as any).workspace] : ((i as any).kind as any) === ("choose_workspace" as any) || ((i as any).kind as any) === ("connection_lost" as any) && (((i as any).workspaces as any).length as any) > (1 as any) ? (i as any).workspaces : [];
}
function ae(this: any, i: any): any {
  (ae as any).d = 920;
  const e: any = ((q as any).c as any)(3),
    {
      agentName: s,
      workspaceName: n
    }: any = i;
  let a: any;
  return ((e as any)[0] as any) !== (s as any) || ((e as any)[1] as any) !== (n as any) ? (a = (n as any) == (null as any) ? ((t as any).jsx as any)(o, {
    id: "8Q6hjd",
    values: {
      agentName: s
    }
  }) : ((t as any).jsx as any)(o, {
    id: "e4UeSX",
    values: {
      agentName: s,
      workspaceName: n
    }
  }), (e as any)[0] = s, (e as any)[1] = n, (e as any)[2] = a) : a = (e as any)[2], a;
}
function le(this: any, i: any): any {
  (le as any).d = 937;
  const e: any = ((q as any).c as any)(3),
    {
      agentName: s,
      workspaceName: n
    }: any = i;
  let a: any;
  return ((e as any)[0] as any) !== (s as any) || ((e as any)[1] as any) !== (n as any) ? (a = (n as any) == (null as any) ? ((t as any).jsx as any)(o, {
    id: "RKGFEO",
    values: {
      agentName: s
    }
  }) : ((t as any).jsx as any)(o, {
    id: "1ts7u/",
    values: {
      agentName: s,
      workspaceName: n
    }
  }), (e as any)[0] = s, (e as any)[1] = n, (e as any)[2] = a) : a = (e as any)[2], a;
}
function ie(this: any, i: any): any {
  (ie as any).d = 919;
  const e: any = ((q as any).c as any)(4),
    {
      step: s
    }: any = i;
  switch ((s as any).failure) {
    case "cancelled":
      {
        let n: any;
        return ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = ((t as any).jsx as any)(o, {
          id: "ahxtFe"
        }), (e as any)[0] = n) : n = (e as any)[0], n;
      }
    case "org_install":
      {
        let n: any;
        return ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = ((t as any).jsx as any)(o, {
          id: "70Zmvh"
        }), (e as any)[1] = n) : n = (e as any)[1], n;
      }
    case "wrong_cursor_account":
      {
        let n: any;
        return ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = ((t as any).jsx as any)(o, {
          id: "+7hmw5"
        }), (e as any)[2] = n) : n = (e as any)[2], n;
      }
    case "incomplete":
      {
        let n: any;
        return ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = ((t as any).jsx as any)(o, {
          id: "EhI7uU"
        }), (e as any)[3] = n) : n = (e as any)[3], n;
      }
  }
}
function re(this: any, i: any): any {
  (re as any).d = 928;
  const e: any = ((q as any).c as any)(9),
    {
      notice: s,
      agentName: n
    }: any = i;
  if (((s as any).kind as any) === ("forgotten" as any)) {
    let c: any;
    return ((e as any)[0] as any) !== (s as any) ? (c = ((t as any).jsx as any)(G, {
      notice: s
    }), (e as any)[0] = s, (e as any)[1] = c) : c = (e as any)[1], c;
  }
  let a: any;
  ((e as any)[2] as any) !== (s as any) ? (a = ((t as any).jsx as any)(G, {
    notice: s
  }), (e as any)[2] = s, (e as any)[3] = a) : a = (e as any)[3];
  let l: any;
  ((e as any)[4] as any) !== (n as any) ? (l = ((t as any).jsx as any)(o, {
    id: "6fyYbn",
    values: {
      agentName: n
    }
  }), (e as any)[4] = n, (e as any)[5] = l) : l = (e as any)[5];
  let r: any;
  return ((e as any)[6] as any) !== (a as any) || ((e as any)[7] as any) !== (l as any) ? (r = ((t as any).jsxs as any)((t as any).Fragment, {
    children: [a, " ", l]
  }), (e as any)[6] = a, (e as any)[7] = l, (e as any)[8] = r) : r = (e as any)[8], r;
}
function G(this: any, i: any): any {
  (G as any).d = 929;
  const e: any = ((q as any).c as any)(7),
    {
      notice: s
    }: any = i,
    n: any = ((s as any).kind as any) === ("moved" as any) ? ((s as any).previousApp as any).workspaceName : (s as any).workspaceName,
    a: any = ((s as any).kind as any) === ("forgotten" as any) || ((s as any).previousApp as any).forgotten;
  if ((n as any) == (null as any)) {
    let r: any;
    return ((e as any)[0] as any) !== (a as any) ? (r = a ? ((t as any).jsx as any)(o, {
      id: "pAfcqM"
    }) : null, (e as any)[0] = a, (e as any)[1] = r) : r = (e as any)[1], r;
  }
  if (((s as any).kind as any) === ("forgotten" as any)) {
    let r: any;
    return ((e as any)[2] as any) !== (n as any) ? (r = ((t as any).jsx as any)(o, {
      id: "qwRuhE",
      values: {
        previousName: n
      }
    }), (e as any)[2] = n, (e as any)[3] = r) : r = (e as any)[3], r;
  }
  let l: any;
  return ((e as any)[4] as any) !== (a as any) || ((e as any)[5] as any) !== (n as any) ? (l = a ? ((t as any).jsx as any)(o, {
    id: "NehSeb",
    values: {
      previousName: n
    }
  }) : ((t as any).jsx as any)(o, {
    id: "5S8XbC",
    values: {
      previousName: n
    }
  }), (e as any)[4] = a, (e as any)[5] = n, (e as any)[6] = l) : l = (e as any)[6], l;
}
function Te(this: any, i: any): any {
  return ((i as any).reduce as any)((e: any, s: any): any => (e as any) == (null as any) || ((s as any).managerAuthUpdatedAtMs as any) > ((e as any).managerAuthUpdatedAtMs as any) ? s : e, void 0);
}
function ce(this: any, i: any): any {
  (ce as any).d = 935;
  const e: any = ((q as any).c as any)(13),
    {
      agentName: s,
      step: n
    }: any = i;
  switch ((n as any).kind) {
    case "loading":
      {
        let a: any;
        return ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = ((t as any).jsx as any)(I, {
          children: ((t as any).jsx as any)(o, {
            id: "yQE2r9"
          })
        }), (e as any)[0] = a) : a = (e as any)[0], a;
      }
    case "installing":
      {
        let a: any;
        return ((e as any)[1] as any) !== (s as any) ? (a = ((t as any).jsx as any)(I, {
          children: ((t as any).jsx as any)(o, {
            id: "rqHPhc",
            values: {
              agentName: s
            }
          })
        }), (e as any)[1] = s, (e as any)[2] = a) : a = (e as any)[2], a;
      }
    case "updating":
      {
        let a: any;
        return ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = ((t as any).jsx as any)(I, {
          children: ((t as any).jsx as any)(o, {
            id: "2tmo8N"
          })
        }), (e as any)[3] = a) : a = (e as any)[3], a;
      }
    case "disconnecting":
      {
        let a: any;
        return ((e as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = ((t as any).jsx as any)(I, {
          children: ((t as any).jsx as any)(o, {
            id: "xRrDaI"
          })
        }), (e as any)[4] = a) : a = (e as any)[4], a;
      }
    case "unavailable":
      {
        let a: any;
        ((e as any)[5] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = (z as any)((R as any).body1, ($ as any).note), (e as any)[5] = a) : a = (e as any)[5];
        let l: any;
        return ((e as any)[6] as any) !== ((n as any).reason as any) ? (l = ((t as any).jsx as any)("p", {
          ...a,
          children: ((n as any).reason as any) === ("not_published" as any) ? ((t as any).jsx as any)(o, {
            id: "TEn4Cw"
          }) : ((t as any).jsx as any)(o, {
            id: "qwT/SC"
          })
        }), (e as any)[6] = (n as any).reason, (e as any)[7] = l) : l = (e as any)[7], l;
      }
    case "not_connected":
      {
        let a: any;
        return ((e as any)[8] as any) !== ((n as any).timedOut as any) ? (a = (n as any).timedOut ? ((t as any).jsx as any)(Z, {
          children: ((t as any).jsx as any)(o, {
            id: "7OAgLY"
          })
        }) : null, (e as any)[8] = (n as any).timedOut, (e as any)[9] = a) : a = (e as any)[9], a;
      }
    case "blocked":
      {
        let a: any;
        return ((e as any)[10] as any) !== ((n as any).slackError as any) || ((e as any)[11] as any) !== ((n as any).slackErrorCode as any) ? (a = ((n as any).slackError as any) === ("unknown" as any) && ((n as any).slackErrorCode as any) != (null as any) ? ((t as any).jsx as any)("p", {
          ...(z as any)((R as any).body2, ($ as any).detail),
          children: (n as any).slackErrorCode
        }) : null, (e as any)[10] = (n as any).slackError, (e as any)[11] = (n as any).slackErrorCode, (e as any)[12] = a) : a = (e as any)[12], a;
      }
    default:
      return null;
  }
}
function We(this: any, i: any): any {
  return ((i as any).kind as any) === ("not_connected" as any) || ((i as any).kind as any) === ("ready" as any) || ((i as any).kind as any) === ("choose_workspace" as any) || ((i as any).kind as any) === ("installing" as any);
}
function oe(this: any, i: any): any {
  return (((i as any).kind as any) === ("blocked" as any) || ((i as any).kind as any) === ("failed" as any)) && (((i as any).retry as any).kind as any) === ("load_state" as any);
}
function D(this: any, i: any): any {
  return ((i as any).kind as any) === ("recreate_required" as any) ? !0 : ((i as any).kind as any) === ("blocked" as any) && (((i as any).slackError as any) === ("app_missing" as any) || ((i as any).slackError as any) === ("foreign_manager" as any));
}
function de(this: any, i: any): any {
  return ((i as any).kind as any) !== ("blocked" as any) && ((i as any).kind as any) !== ("failed" as any) ? !1 : (((i as any).retry as any).kind as any) === ("reinstall_app" as any);
}
function ue(this: any, i: any): any {
  return (((i as any).kind as any) === ("blocked" as any) || ((i as any).kind as any) === ("failed" as any)) && ((((i as any).retry as any).kind as any) === ("uninstall_app" as any) || (((i as any).retry as any).kind as any) === ("forget_app" as any));
}
function V(this: any, i: any): any {
  return (de as any)(i) && !(D as any)(i);
}
function U(this: any): any {
  (U as any).d = 932;
  const i: any = ((q as any).c as any)(1);
  let e: any;
  return ((i as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (e = ((t as any).jsxs as any)((t as any).Fragment, {
    children: [" ", ((t as any).jsx as any)(o, {
      id: "eeR2Nw"
    })]
  }), (i as any)[0] = e) : e = (i as any)[0], e;
}
function Ie(this: any, i: any, e: any): any {
  const {
    _: s
  }: any = (O as any)();
  switch ((i as any).kind) {
    case "loading":
    case "unavailable":
      return (s as any)({
        id: "hpFCeH",
        values: {
          agentName: e
        }
      });
    case "not_connected":
    case "ready":
    case "choose_workspace":
    case "installing":
      return (s as any)({
        id: "vQNUMS",
        values: {
          agentName: e
        }
      });
    case "awaiting_workspace":
      return (s as any)({
        id: "injdPp"
      });
    case "cursor_approval_required":
      return (s as any)({
        id: "Q9Iep3"
      });
    case "pending_admin_approval":
    case "pending_reinstall_approval":
      return (i as any).approvalRequestFiled ? (s as any)({
        id: "a+Esqm"
      }) : (s as any)({
        id: "0itG/G"
      });
    case "approval_denied":
      return (s as any)({
        id: "tQNelN",
        values: {
          agentName: e
        }
      });
    case "connected":
      {
        const n: any = (i as any).workspaceName;
        return (n as any) == (null as any) ? (s as any)({
          id: "XN3SEb"
        }) : (s as any)({
          id: "t/sk7a",
          values: {
            workspaceName: n
          }
        });
      }
    case "removed_in_slack":
      {
        const n: any = (i as any).workspaceName;
        return (n as any) == (null as any) ? (s as any)({
          id: "lOnMJD"
        }) : (s as any)({
          id: "qbzZQD",
          values: {
            workspaceName: n
          }
        });
      }
    case "updating":
      return (s as any)({
        id: "2tmo8N"
      });
    case "disconnecting":
      return (s as any)({
        id: "ko5Sq5"
      });
    case "reconnect_required":
      return (s as any)({
        id: "ez+trO"
      });
    case "connection_lost":
      {
        const n: any = (i as any).workspaceName;
        return (n as any) == (null as any) ? (s as any)({
          id: "ez+trO"
        }) : (s as any)({
          id: "sSFnb4",
          values: {
            workspaceName: n
          }
        });
      }
    case "workspace_mismatch":
      {
        const n: any = ((i as any).arrived as any).slackTeamName ?? (s as any)({
          id: "1z1n9n"
        });
        return (s as any)({
          id: "m+HA7R",
          values: {
            arrivedName: n
          }
        });
      }
    case "connect_failed":
      return ((i as any).failure as any) === ("cancelled" as any) ? (s as any)({
        id: "hpFCeH",
        values: {
          agentName: e
        }
      }) : (s as any)({
        id: "FGWsd4"
      });
    case "recreate_required":
    case "blocked":
    case "failed":
      return (oe as any)(i) ? (s as any)({
        id: "hpFCeH",
        values: {
          agentName: e
        }
      }) : (ue as any)(i) ? (s as any)({
        id: "iqzc0p"
      }) : ((i as any).kind as any) === ("blocked" as any) && ((i as any).reason as any) === ("rate_limited" as any) ? (s as any)({
        id: "hpFCeH",
        values: {
          agentName: e
        }
      }) : (s as any)({
        id: "FGWsd4"
      });
  }
}
function me(this: any, i: any): any {
  (me as any).d = 933;
  const e: any = ((q as any).c as any)(7),
    {
      agentName: s,
      workspaceName: n,
      isOnceConnected: a
    }: any = i;
  if (a) {
    let r: any;
    return ((e as any)[0] as any) !== (s as any) ? (r = ((t as any).jsx as any)(o, {
      id: "uXWoUp",
      values: {
        agentName: s
      }
    }), (e as any)[0] = s, (e as any)[1] = r) : r = (e as any)[1], r;
  }
  if ((n as any) != (null as any)) {
    let r: any;
    return ((e as any)[2] as any) !== (s as any) || ((e as any)[3] as any) !== (n as any) ? (r = ((t as any).jsx as any)(o, {
      id: "+B04qv",
      values: {
        agentName: s,
        workspaceName: n
      }
    }), (e as any)[2] = s, (e as any)[3] = n, (e as any)[4] = r) : r = (e as any)[4], r;
  }
  let l: any;
  return ((e as any)[5] as any) !== (s as any) ? (l = ((t as any).jsx as any)(o, {
    id: "r1WIyd",
    values: {
      agentName: s
    }
  }), (e as any)[5] = s, (e as any)[6] = l) : l = (e as any)[6], l;
}
function P(this: any, i: any): any {
  (P as any).d = 916;
  const e: any = ((q as any).c as any)(1),
    {
      step: s
    }: any = i;
  if ((s as any).approvalRequestFiled) {
    let n: any;
    return ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = ((t as any).jsxs as any)((t as any).Fragment, {
      children: [" ", ((t as any).jsx as any)(o, {
        id: "SknRxp"
      })]
    }), (e as any)[0] = n) : n = (e as any)[0], n;
  }
  return null;
}
function fe(this: any, i: any): any {
  (fe as any).d = 925;
  const e: any = ((q as any).c as any)(50),
    {
      step: s,
      agentName: n,
      creatorName: a
    }: any = i;
  switch ((s as any).kind) {
    case "awaiting_workspace":
      {
        let l: any;
        return ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (l = ((t as any).jsx as any)(o, {
          id: "xUlqiy"
        }), (e as any)[0] = l) : l = (e as any)[0], l;
      }
    case "cursor_approval_required":
      {
        let l: any;
        return ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (l = ((t as any).jsx as any)(ee, {}), (e as any)[1] = l) : l = (e as any)[1], l;
      }
    case "pending_admin_approval":
      {
        let l: any;
        return ((e as any)[2] as any) !== (n as any) || ((e as any)[3] as any) !== (s as any) ? (l = (s as any).approvalRequestFiled ? ((t as any).jsxs as any)((t as any).Fragment, {
          children: [((t as any).jsx as any)(o, {
            id: "XEgBUH",
            values: {
              agentName: n
            }
          }), ((t as any).jsx as any)(P, {
            step: s
          })]
        }) : ((t as any).jsx as any)(o, {
          id: "LRssh1",
          values: {
            agentName: n
          }
        }), (e as any)[2] = n, (e as any)[3] = s, (e as any)[4] = l) : l = (e as any)[4], l;
      }
    case "pending_reinstall_approval":
      {
        let l: any;
        ((e as any)[5] as any) !== (n as any) ? (l = ((t as any).jsx as any)(o, {
          id: "RiAew1",
          values: {
            agentName: n
          }
        }), (e as any)[5] = n, (e as any)[6] = l) : l = (e as any)[6];
        let r: any;
        ((e as any)[7] as any) !== (s as any) ? (r = ((t as any).jsx as any)(P, {
          step: s
        }), (e as any)[7] = s, (e as any)[8] = r) : r = (e as any)[8];
        let c: any;
        return ((e as any)[9] as any) !== (l as any) || ((e as any)[10] as any) !== (r as any) ? (c = ((t as any).jsxs as any)((t as any).Fragment, {
          children: [l, r]
        }), (e as any)[9] = l, (e as any)[10] = r, (e as any)[11] = c) : c = (e as any)[11], c;
      }
    case "approval_denied":
      {
        let l: any;
        return ((e as any)[12] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (l = ((t as any).jsx as any)(o, {
          id: "jNmwyr"
        }), (e as any)[12] = l) : l = (e as any)[12], l;
      }
    case "connected":
      {
        let l: any;
        return ((e as any)[13] as any) !== (n as any) || ((e as any)[14] as any) !== ((s as any).needsManifestUpdate as any) ? (l = (s as any).needsManifestUpdate ? ((t as any).jsx as any)(o, {
          id: "45Q60H",
          values: {
            agentName: n
          }
        }) : null, (e as any)[13] = n, (e as any)[14] = (s as any).needsManifestUpdate, (e as any)[15] = l) : l = (e as any)[15], l;
      }
    case "removed_in_slack":
      {
        let l: any;
        return ((e as any)[16] as any) !== (n as any) ? (l = ((t as any).jsx as any)(o, {
          id: "nGKPkj",
          values: {
            agentName: n
          }
        }), (e as any)[16] = n, (e as any)[17] = l) : l = (e as any)[17], l;
      }
    case "reconnect_required":
      {
        let l: any;
        return ((e as any)[18] as any) !== (a as any) || ((e as any)[19] as any) !== ((s as any).reason as any) ? (l = (a as any) == (null as any) ? ((t as any).jsx as any)(ne, {
          reason: (s as any).reason
        }) : ((t as any).jsx as any)(o, {
          id: "+buBKe",
          values: {
            creatorName: a
          }
        }), (e as any)[18] = a, (e as any)[19] = (s as any).reason, (e as any)[20] = l) : l = (e as any)[20], l;
      }
    case "connection_lost":
      {
        let l: any;
        ((e as any)[21] as any) !== (n as any) || ((e as any)[22] as any) !== ((s as any).workspaceName as any) ? (l = ((t as any).jsx as any)(ae, {
          agentName: n,
          workspaceName: (s as any).workspaceName
        }), (e as any)[21] = n, (e as any)[22] = (s as any).workspaceName, (e as any)[23] = l) : l = (e as any)[23];
        let r: any;
        ((e as any)[24] as any) !== (a as any) ? (r = (a as any) == (null as any) ? null : ((t as any).jsxs as any)((t as any).Fragment, {
          children: [" ", ((t as any).jsx as any)(o, {
            id: "+buBKe",
            values: {
              creatorName: a
            }
          })]
        }), (e as any)[24] = a, (e as any)[25] = r) : r = (e as any)[25];
        let c: any;
        return ((e as any)[26] as any) !== (l as any) || ((e as any)[27] as any) !== (r as any) ? (c = ((t as any).jsxs as any)((t as any).Fragment, {
          children: [l, r]
        }), (e as any)[26] = l, (e as any)[27] = r, (e as any)[28] = c) : c = (e as any)[28], c;
      }
    case "workspace_mismatch":
      {
        let l: any;
        return ((e as any)[29] as any) !== (n as any) || ((e as any)[30] as any) !== ((s as any).workspaceName as any) ? (l = ((t as any).jsx as any)(le, {
          agentName: n,
          workspaceName: (s as any).workspaceName
        }), (e as any)[29] = n, (e as any)[30] = (s as any).workspaceName, (e as any)[31] = l) : l = (e as any)[31], l;
      }
    case "connect_failed":
      {
        let l: any;
        return ((e as any)[32] as any) !== (s as any) ? (l = ((t as any).jsx as any)(ie, {
          step: s
        }), (e as any)[32] = s, (e as any)[33] = l) : l = (e as any)[33], l;
      }
    case "recreate_required":
      {
        let l: any;
        return ((e as any)[34] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (l = ((t as any).jsx as any)(o, {
          id: "cazSHh"
        }), (e as any)[34] = l) : l = (e as any)[34], l;
      }
    case "blocked":
      {
        let l: any;
        ((e as any)[35] as any) !== (n as any) || ((e as any)[36] as any) !== (s as any) ? (l = ((t as any).jsx as any)(se, {
          agentName: n,
          step: s
        }), (e as any)[35] = n, (e as any)[36] = s, (e as any)[37] = l) : l = (e as any)[37];
        let r: any;
        ((e as any)[38] as any) !== (s as any) ? (r = (V as any)(s) ? ((t as any).jsx as any)(U, {}) : null, (e as any)[38] = s, (e as any)[39] = r) : r = (e as any)[39];
        let c: any;
        return ((e as any)[40] as any) !== (l as any) || ((e as any)[41] as any) !== (r as any) ? (c = ((t as any).jsxs as any)((t as any).Fragment, {
          children: [l, r]
        }), (e as any)[40] = l, (e as any)[41] = r, (e as any)[42] = c) : c = (e as any)[42], c;
      }
    case "failed":
      {
        let l: any;
        ((e as any)[43] as any) !== (((s as any).failure as any).display?.detail as any) ? (l = ((s as any).failure as any).display?.detail ?? ((t as any).jsx as any)(o, {
          id: "kf83Ld"
        }), (e as any)[43] = ((s as any).failure as any).display?.detail, (e as any)[44] = l) : l = (e as any)[44];
        let r: any;
        ((e as any)[45] as any) !== (s as any) ? (r = (V as any)(s) ? ((t as any).jsx as any)(U, {}) : null, (e as any)[45] = s, (e as any)[46] = r) : r = (e as any)[46];
        let c: any;
        return ((e as any)[47] as any) !== (l as any) || ((e as any)[48] as any) !== (r as any) ? (c = ((t as any).jsxs as any)((t as any).Fragment, {
          children: [l, r]
        }), (e as any)[47] = l, (e as any)[48] = r, (e as any)[49] = c) : c = (e as any)[49], c;
      }
    default:
      return null;
  }
}
function Oe(this: any, i: any): any {
  return ((i as any).kind as any) === ("blocked" as any) || ((i as any).kind as any) === ("failed" as any) || ((i as any).kind as any) === ("recreate_required" as any) || ((i as any).kind as any) === ("reconnect_required" as any) || ((i as any).kind as any) === ("removed_in_slack" as any) || ((i as any).kind as any) === ("cursor_approval_required" as any) || ((i as any).kind as any) === ("connection_lost" as any) || ((i as any).kind as any) === ("workspace_mismatch" as any) || ((i as any).kind as any) === ("connect_failed" as any) || ((i as any).kind as any) === ("approval_denied" as any);
}
function Ee(this: any, i: any): any {
  return ((i as any).kind as any) === ("connect_failed" as any) && ((i as any).failure as any) === ("cancelled" as any) ? "status" : (Oe as any)(i) ? "alert" : void 0;
}
function Le(this: any, i: any): any {
  switch ((i as any).kind) {
    case "awaiting_workspace":
    case "cursor_approval_required":
    case "pending_admin_approval":
    case "pending_reinstall_approval":
    case "approval_denied":
    case "reconnect_required":
    case "recreate_required":
    case "blocked":
    case "failed":
    case "connection_lost":
    case "workspace_mismatch":
    case "connect_failed":
    case "removed_in_slack":
      return !0;
    case "connected":
      return ((i as any).needsManifestUpdate as any) === (!0 as any);
    default:
      return !1;
  }
}
function Ge(this: any, i: any): any {
  if ((We as any)(i)) return {
    isOnceConnected: !1,
    workspaceName: null
  };
  switch ((i as any).kind) {
    case "connected":
      return {
        isOnceConnected: !1,
        workspaceName: (i as any).workspaceName
      };
    case "pending_admin_approval":
      return (i as any).approvalRequestFiled ? {
        isOnceConnected: !0,
        workspaceName: null
      } : null;
    case "awaiting_workspace":
    case "cursor_approval_required":
    case "blocked":
    case "failed":
      return (oe as any)(i) || (ue as any)(i) ? null : {
        isOnceConnected: !0,
        workspaceName: null
      };
    default:
      return null;
  }
}
function pe(this: any, i: any): any {
  (pe as any).d = 924;
  const e: any = ((q as any).c as any)(29),
    {
      step: s,
      agentName: n,
      creatorName: a,
      notice: l
    }: any = i,
    r: any = (Ie as any)(s, n);
  let c: any;
  ((e as any)[0] as any) !== (s as any) ? (c = (Ge as any)(s), (e as any)[0] = s, (e as any)[1] = c) : c = (e as any)[1];
  const p: any = c;
  let h: any;
  ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (h = {
    className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-1v2ro7d sand-2b8uid"
  }, (e as any)[2] = h) : h = (e as any)[2];
  let w: any, g: any;
  ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (w = ((t as any).jsx as any)("span", {
    "aria-hidden": !0,
    className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-15yg21f sand-nnlda6 sand-hojbe8 sand-10e981r sand-755cs3",
    children: ((t as any).jsx as any)(ye, {
      name: "slack",
      sizePx: Re
    })
  }), g = {
    className: "sand-78zum5 sand-dt5ytf sand-1jnr06f"
  }, (e as any)[3] = w, (e as any)[4] = g) : (w = (e as any)[3], g = (e as any)[4]);
  let _: any;
  ((e as any)[5] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (_ = [(R as any).heading3, (ge as any).medium, ($ as any).heroTitle], (e as any)[5] = _) : _ = (e as any)[5];
  let x: any;
  ((e as any)[6] as any) !== (r as any) ? (x = ((t as any).jsx as any)((y as any).Title, {
    style: _,
    children: r
  }), (e as any)[6] = r, (e as any)[7] = x) : x = (e as any)[7];
  let v: any;
  ((e as any)[8] as any) !== (n as any) || ((e as any)[9] as any) !== (a as any) || ((e as any)[10] as any) !== (s as any) ? (v = (Le as any)(s) ? ((t as any).jsx as any)("p", {
    ...(z as any)((R as any).body1, ($ as any).heroLead),
    role: (Ee as any)(s),
    children: ((t as any).jsx as any)(fe, {
      agentName: n,
      creatorName: a,
      step: s
    })
  }) : null, (e as any)[8] = n, (e as any)[9] = a, (e as any)[10] = s, (e as any)[11] = v) : v = (e as any)[11];
  let S: any;
  ((e as any)[12] as any) !== (a as any) || ((e as any)[13] as any) !== (s as any) ? (S = (a as any) == (null as any) || ((s as any).kind as any) === ("loading" as any) ? null : ((t as any).jsx as any)("p", {
    ...(z as any)((R as any).body2, ($ as any).note),
    children: ((t as any).jsx as any)(o, {
      id: "2/EXp7",
      values: {
        creatorName: a
      }
    })
  }), (e as any)[12] = a, (e as any)[13] = s, (e as any)[14] = S) : S = (e as any)[14];
  let k: any;
  ((e as any)[15] as any) !== (n as any) || ((e as any)[16] as any) !== (l as any) ? (k = (l as any) == (null as any) ? null : ((t as any).jsx as any)("p", {
    ...(z as any)((R as any).body1, ($ as any).note),
    role: "status",
    children: ((t as any).jsx as any)(re, {
      agentName: n,
      notice: l
    })
  }), (e as any)[15] = n, (e as any)[16] = l, (e as any)[17] = k) : k = (e as any)[17];
  let N: any;
  ((e as any)[18] as any) !== (x as any) || ((e as any)[19] as any) !== (v as any) || ((e as any)[20] as any) !== (S as any) || ((e as any)[21] as any) !== (k as any) ? (N = ((t as any).jsxs as any)("div", {
    ...g,
    children: [x, v, S, k]
  }), (e as any)[18] = x, (e as any)[19] = v, (e as any)[20] = S, (e as any)[21] = k, (e as any)[22] = N) : N = (e as any)[22];
  let b: any;
  ((e as any)[23] as any) !== (n as any) || ((e as any)[24] as any) !== (p as any) ? (b = (p as any) == (null as any) ? null : ((t as any).jsx as any)("p", {
    ...(z as any)((R as any).body1, ($ as any).heroDescription),
    children: ((t as any).jsx as any)(me, {
      agentName: n,
      isOnceConnected: (p as any).isOnceConnected,
      workspaceName: (p as any).workspaceName
    })
  }), (e as any)[23] = n, (e as any)[24] = p, (e as any)[25] = b) : b = (e as any)[25];
  let C: any;
  return ((e as any)[26] as any) !== (N as any) || ((e as any)[27] as any) !== (b as any) ? (C = ((t as any).jsxs as any)("div", {
    ...h,
    children: [w, N, b]
  }), (e as any)[26] = N, (e as any)[27] = b, (e as any)[28] = C) : C = (e as any)[28], C;
}
function ke(this: any, i: any): any {
  (ke as any).d = 934;
  const e: any = ((q as any).c as any)(126),
    {
      step: s,
      commands: n,
      selectedWorkspaceId: a,
      canConnect: l
    }: any = i,
    {
      _: r
    }: any = (O as any)(),
    c: any = Ue,
    p: any = De;
  let h: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (h = ((t as any).jsx as any)(o, {
    id: "jLmqPD"
  }), (e as any)[0] = h) : h = (e as any)[0];
  let w: any;
  ((e as any)[1] as any) !== (n as any) ? (w = (p as any)(h, (): any => {
    ((n as any).disconnect as any)();
  }), (e as any)[1] = n, (e as any)[2] = w) : w = (e as any)[2];
  const g: any = w;
  let _: any;
  ((e as any)[3] as any) !== (n as any) ? (_ = (): any => {
    ((n as any).retry as any)();
  }, (e as any)[3] = n, (e as any)[4] = _) : _ = (e as any)[4];
  let x: any;
  ((e as any)[5] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (x = ((t as any).jsx as any)(o, {
    id: "KDw4GX"
  }), (e as any)[5] = x) : x = (e as any)[5];
  let v: any;
  ((e as any)[6] as any) !== (_ as any) ? (v = ((t as any).jsx as any)((y as any).Action, {
    onClick: _,
    variant: "primary",
    children: x
  }), (e as any)[6] = _, (e as any)[7] = v) : v = (e as any)[7];
  const S: any = v;
  let k: any;
  ((e as any)[8] as any) !== (n as any) ? (k = (): any => {
    ((n as any).openApprovalUrl as any)();
  }, (e as any)[8] = n, (e as any)[9] = k) : k = (e as any)[9];
  let N: any;
  ((e as any)[10] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (N = ((t as any).jsx as any)(o, {
    id: "yKrR+U"
  }), (e as any)[10] = N) : N = (e as any)[10];
  let b: any;
  ((e as any)[11] as any) !== (k as any) ? (b = ((t as any).jsx as any)((y as any).Action, {
    onClick: k,
    variant: "primary",
    children: N
  }), (e as any)[11] = k, (e as any)[12] = b) : b = (e as any)[12];
  const C: any = b;
  switch ((s as any).kind) {
    case "not_connected":
    case "loading":
    case "unavailable":
    case "installing":
    case "updating":
    case "disconnecting":
      return null;
    case "ready":
    case "choose_workspace":
      {
        let d: any;
        ((e as any)[13] as any) !== ((n as any).close as any) ? (d = (c as any)((n as any).close), (e as any)[13] = (n as any).close, (e as any)[14] = d) : d = (e as any)[14];
        let u: any;
        ((e as any)[15] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (u = ((t as any).jsx as any)((y as any).ActionSpacer, {}), (e as any)[15] = u) : u = (e as any)[15];
        const m: any = (a as any) == (null as any);
        let f: any;
        ((e as any)[16] as any) !== (n as any) || ((e as any)[17] as any) !== (a as any) ? (f = (): any => {
          (a as any) != (null as any) && ((n as any).install as any)(a);
        }, (e as any)[16] = n, (e as any)[17] = a, (e as any)[18] = f) : f = (e as any)[18];
        let j: any;
        ((e as any)[19] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (j = ((t as any).jsx as any)(o, {
          id: "iSLIjg"
        }), (e as any)[19] = j) : j = (e as any)[19];
        let A: any;
        ((e as any)[20] as any) !== (m as any) || ((e as any)[21] as any) !== (f as any) ? (A = ((t as any).jsx as any)((y as any).Action, {
          disabled: m,
          onClick: f,
          variant: "primary",
          children: j
        }), (e as any)[20] = m, (e as any)[21] = f, (e as any)[22] = A) : A = (e as any)[22];
        let F: any;
        return ((e as any)[23] as any) !== (A as any) || ((e as any)[24] as any) !== (d as any) ? (F = ((t as any).jsxs as any)((t as any).Fragment, {
          children: [d, u, A]
        }), (e as any)[23] = A, (e as any)[24] = d, (e as any)[25] = F) : F = (e as any)[25], F;
      }
    case "awaiting_workspace":
      {
        let d: any;
        ((e as any)[26] as any) !== ((n as any).cancelWaiting as any) ? (d = (c as any)((n as any).cancelWaiting), (e as any)[26] = (n as any).cancelWaiting, (e as any)[27] = d) : d = (e as any)[27];
        let u: any;
        ((e as any)[28] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (u = ((t as any).jsx as any)((y as any).ActionSpacer, {}), (e as any)[28] = u) : u = (e as any)[28];
        let m: any;
        ((e as any)[29] as any) !== (n as any) ? (m = (): any => {
          ((n as any).openConsentUrl as any)();
        }, (e as any)[29] = n, (e as any)[30] = m) : m = (e as any)[30];
        let f: any;
        ((e as any)[31] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = ((t as any).jsx as any)(o, {
          id: "Edth28"
        }), (e as any)[31] = f) : f = (e as any)[31];
        let j: any;
        ((e as any)[32] as any) !== (m as any) ? (j = ((t as any).jsx as any)((y as any).Action, {
          onClick: m,
          variant: "secondary",
          children: f
        }), (e as any)[32] = m, (e as any)[33] = j) : j = (e as any)[33];
        let A: any;
        return ((e as any)[34] as any) !== (j as any) || ((e as any)[35] as any) !== (d as any) ? (A = ((t as any).jsxs as any)((t as any).Fragment, {
          children: [d, u, j]
        }), (e as any)[34] = j, (e as any)[35] = d, (e as any)[36] = A) : A = (e as any)[36], A;
      }
    case "cursor_approval_required":
    case "connect_failed":
      {
        let d: any;
        return ((e as any)[37] as any) !== (l as any) || ((e as any)[38] as any) !== (n as any) ? (d = l ? ((t as any).jsx as any)((y as any).Action, {
          onClick: (): any => {
            ((n as any).connectWorkspace as any)();
          },
          variant: "primary",
          children: ((t as any).jsx as any)(o, {
            id: "i6h2zt"
          })
        }) : null, (e as any)[37] = l, (e as any)[38] = n, (e as any)[39] = d) : d = (e as any)[39], d;
      }
    case "pending_admin_approval":
      {
        let d: any;
        return ((e as any)[40] as any) !== (n as any) || ((e as any)[41] as any) !== (C as any) || ((e as any)[42] as any) !== ((s as any).approvalRequestFiled as any) ? (d = (s as any).approvalRequestFiled ? ((t as any).jsxs as any)((t as any).Fragment, {
          children: [(p as any)(((t as any).jsx as any)(o, {
            id: "HoYkSd"
          }), (): any => {
            ((n as any).disconnect as any)();
          }), ((t as any).jsx as any)((y as any).Action, {
            onClick: (): any => {
              ((n as any).install as any)(null);
            },
            variant: "primary",
            children: ((t as any).jsx as any)(o, {
              id: "2WWIfe"
            })
          })]
        }) : ((t as any).jsxs as any)((t as any).Fragment, {
          children: [(p as any)(((t as any).jsx as any)(o, {
            id: "MMkabv"
          }), (): any => {
            ((n as any).disconnect as any)();
          }), C]
        }), (e as any)[40] = n, (e as any)[41] = C, (e as any)[42] = (s as any).approvalRequestFiled, (e as any)[43] = d) : d = (e as any)[43], d;
      }
    case "pending_reinstall_approval":
      {
        let d: any;
        return ((e as any)[44] as any) !== (n as any) || ((e as any)[45] as any) !== (C as any) || ((e as any)[46] as any) !== ((s as any).approvalRequestFiled as any) ? (d = (s as any).approvalRequestFiled ? ((t as any).jsxs as any)((t as any).Fragment, {
          children: [(p as any)(((t as any).jsx as any)(o, {
            id: "+IS0oS"
          }), (): any => {
            ((n as any).disconnect as any)();
          }), ((t as any).jsx as any)((y as any).Action, {
            onClick: (): any => {
              ((n as any).reinstall as any)();
            },
            variant: "primary",
            children: ((t as any).jsx as any)(o, {
              id: "2WWIfe"
            })
          })]
        }) : ((t as any).jsxs as any)((t as any).Fragment, {
          children: [(p as any)(((t as any).jsx as any)(o, {
            id: "+IS0oS"
          }), (): any => {
            ((n as any).disconnect as any)();
          }), ((t as any).jsx as any)((y as any).ActionSpacer, {}), ((t as any).jsx as any)((y as any).Action, {
            onClick: (): any => {
              ((n as any).reinstall as any)();
            },
            variant: "secondary",
            children: ((t as any).jsx as any)(o, {
              id: "2WWIfe"
            })
          }), C]
        }), (e as any)[44] = n, (e as any)[45] = C, (e as any)[46] = (s as any).approvalRequestFiled, (e as any)[47] = d) : d = (e as any)[47], d;
      }
    case "approval_denied":
      {
        let d: any;
        ((e as any)[48] as any) !== (n as any) ? (d = (): any => {
          ((n as any).askAgain as any)();
        }, (e as any)[48] = n, (e as any)[49] = d) : d = (e as any)[49];
        let u: any;
        ((e as any)[50] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (u = ((t as any).jsx as any)(o, {
          id: "v8oKVq"
        }), (e as any)[50] = u) : u = (e as any)[50];
        let m: any;
        ((e as any)[51] as any) !== (d as any) ? (m = ((t as any).jsx as any)((y as any).Action, {
          onClick: d,
          variant: "primary",
          children: u
        }), (e as any)[51] = d, (e as any)[52] = m) : m = (e as any)[52];
        let f: any;
        return ((e as any)[53] as any) !== (g as any) || ((e as any)[54] as any) !== (m as any) ? (f = ((t as any).jsxs as any)((t as any).Fragment, {
          children: [g, m]
        }), (e as any)[53] = g, (e as any)[54] = m, (e as any)[55] = f) : f = (e as any)[55], f;
      }
    case "connected":
      {
        let d: any;
        ((e as any)[56] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = ((t as any).jsx as any)(o, {
          id: "+IS0oS"
        }), (e as any)[56] = d) : d = (e as any)[56];
        let u: any;
        ((e as any)[57] as any) !== (n as any) ? (u = (p as any)(d, (): any => {
          ((n as any).disconnect as any)();
        }), (e as any)[57] = n, (e as any)[58] = u) : u = (e as any)[58];
        let m: any;
        ((e as any)[59] as any) !== (n as any) || ((e as any)[60] as any) !== ((s as any).needsManifestUpdate as any) ? (m = (s as any).needsManifestUpdate ? ((t as any).jsx as any)((y as any).Action, {
          onClick: (): any => {
            ((n as any).reinstall as any)();
          },
          variant: "primary",
          children: ((t as any).jsx as any)(o, {
            id: "nCl23t"
          })
        }) : ((t as any).jsx as any)((y as any).Action, {
          onClick: (n as any).close,
          variant: "primary",
          children: ((t as any).jsx as any)(o, {
            id: "DPfwMq"
          })
        }), (e as any)[59] = n, (e as any)[60] = (s as any).needsManifestUpdate, (e as any)[61] = m) : m = (e as any)[61];
        let f: any;
        return ((e as any)[62] as any) !== (u as any) || ((e as any)[63] as any) !== (m as any) ? (f = ((t as any).jsxs as any)((t as any).Fragment, {
          children: [u, m]
        }), (e as any)[62] = u, (e as any)[63] = m, (e as any)[64] = f) : f = (e as any)[64], f;
      }
    case "removed_in_slack":
      {
        let d: any;
        ((e as any)[65] as any) !== (n as any) ? (d = (): any => {
          ((n as any).install as any)(null);
        }, (e as any)[65] = n, (e as any)[66] = d) : d = (e as any)[66];
        let u: any;
        ((e as any)[67] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (u = ((t as any).jsx as any)(o, {
          id: "0imJDH"
        }), (e as any)[67] = u) : u = (e as any)[67];
        let m: any;
        ((e as any)[68] as any) !== (d as any) ? (m = ((t as any).jsx as any)((y as any).Action, {
          onClick: d,
          variant: "primary",
          children: u
        }), (e as any)[68] = d, (e as any)[69] = m) : m = (e as any)[69];
        let f: any;
        return ((e as any)[70] as any) !== (g as any) || ((e as any)[71] as any) !== (m as any) ? (f = ((t as any).jsxs as any)((t as any).Fragment, {
          children: [g, m]
        }), (e as any)[70] = g, (e as any)[71] = m, (e as any)[72] = f) : f = (e as any)[72], f;
      }
    case "reconnect_required":
      {
        let d: any;
        return ((e as any)[73] as any) !== (l as any) || ((e as any)[74] as any) !== (n as any) ? (d = l ? ((t as any).jsx as any)((y as any).Action, {
          onClick: (): any => {
            ((n as any).connectWorkspace as any)();
          },
          variant: "primary",
          children: ((t as any).jsx as any)(o, {
            id: "gcoiFh"
          })
        }) : null, (e as any)[73] = l, (e as any)[74] = n, (e as any)[75] = d) : d = (e as any)[75], d;
      }
    case "connection_lost":
      {
        let d: any;
        ((e as any)[76] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = ((t as any).jsx as any)(o, {
          id: "3+3Gw/"
        }), (e as any)[76] = d) : d = (e as any)[76];
        let u: any;
        ((e as any)[77] as any) !== (n as any) ? (u = (p as any)(d, (): any => {
          ((n as any).forget as any)();
        }), (e as any)[77] = n, (e as any)[78] = u) : u = (e as any)[78];
        let m: any;
        ((e as any)[79] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (m = ((t as any).jsx as any)((y as any).ActionSpacer, {}), (e as any)[79] = m) : m = (e as any)[79];
        let f: any;
        ((e as any)[80] as any) !== (l as any) || ((e as any)[81] as any) !== (n as any) ? (f = l ? ((t as any).jsx as any)((y as any).Action, {
          onClick: (): any => {
            ((n as any).connectWorkspace as any)();
          },
          variant: "secondary",
          children: ((t as any).jsx as any)(o, {
            id: "gcoiFh"
          })
        }) : null, (e as any)[80] = l, (e as any)[81] = n, (e as any)[82] = f) : f = (e as any)[82];
        let j: any;
        ((e as any)[83] as any) !== (l as any) || ((e as any)[84] as any) !== (n as any) || ((e as any)[85] as any) !== (a as any) || ((e as any)[86] as any) !== (s as any) ? (j = ((t as any).jsx as any)(_e, {
          canConnect: l,
          commands: n,
          selectedWorkspaceId: a,
          step: s
        }), (e as any)[83] = l, (e as any)[84] = n, (e as any)[85] = a, (e as any)[86] = s, (e as any)[87] = j) : j = (e as any)[87];
        let A: any;
        return ((e as any)[88] as any) !== (u as any) || ((e as any)[89] as any) !== (f as any) || ((e as any)[90] as any) !== (j as any) ? (A = ((t as any).jsxs as any)((t as any).Fragment, {
          children: [u, m, f, j]
        }), (e as any)[88] = u, (e as any)[89] = f, (e as any)[90] = j, (e as any)[91] = A) : A = (e as any)[91], A;
      }
    case "workspace_mismatch":
      {
        let d: any;
        ((e as any)[92] as any) !== (r as any) || ((e as any)[93] as any) !== (((s as any).arrived as any).slackTeamName as any) ? (d = ((s as any).arrived as any).slackTeamName ?? (r as any)({
          id: "1z1n9n"
        }), (e as any)[92] = r, (e as any)[93] = ((s as any).arrived as any).slackTeamName, (e as any)[94] = d) : d = (e as any)[94];
        const u: any = d,
          m: any = ((s as any).arrived as any).slackTeamId;
        let f: any;
        ((e as any)[95] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = ((t as any).jsx as any)(o, {
          id: "3+3Gw/"
        }), (e as any)[95] = f) : f = (e as any)[95];
        let j: any;
        ((e as any)[96] as any) !== (n as any) ? (j = (p as any)(f, (): any => {
          ((n as any).forget as any)();
        }), (e as any)[96] = n, (e as any)[97] = j) : j = (e as any)[97];
        let A: any;
        ((e as any)[98] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (A = ((t as any).jsx as any)((y as any).ActionSpacer, {}), (e as any)[98] = A) : A = (e as any)[98];
        let F: any;
        ((e as any)[99] as any) !== (l as any) || ((e as any)[100] as any) !== (n as any) ? (F = l ? ((t as any).jsx as any)((y as any).Action, {
          onClick: (): any => {
            ((n as any).connectWorkspace as any)();
          },
          variant: "secondary",
          children: ((t as any).jsx as any)(o, {
            id: "KDw4GX"
          })
        }) : null, (e as any)[99] = l, (e as any)[100] = n, (e as any)[101] = F) : F = (e as any)[101];
        let M: any;
        ((e as any)[102] as any) !== (m as any) || ((e as any)[103] as any) !== (n as any) ? (M = (): any => {
          ((n as any).move as any)(m);
        }, (e as any)[102] = m, (e as any)[103] = n, (e as any)[104] = M) : M = (e as any)[104];
        let T: any;
        ((e as any)[105] as any) !== (u as any) ? (T = ((t as any).jsx as any)(o, {
          id: "e850CL",
          values: {
            workspaceName: u
          }
        }), (e as any)[105] = u, (e as any)[106] = T) : T = (e as any)[106];
        let W: any;
        ((e as any)[107] as any) !== (M as any) || ((e as any)[108] as any) !== (T as any) ? (W = ((t as any).jsx as any)((y as any).Action, {
          onClick: M,
          style: ($ as any).workspaceAction,
          variant: "primary",
          children: T
        }), (e as any)[107] = M, (e as any)[108] = T, (e as any)[109] = W) : W = (e as any)[109];
        let E: any;
        return ((e as any)[110] as any) !== (j as any) || ((e as any)[111] as any) !== (F as any) || ((e as any)[112] as any) !== (W as any) ? (E = ((t as any).jsxs as any)((t as any).Fragment, {
          children: [j, A, F, W]
        }), (e as any)[110] = j, (e as any)[111] = F, (e as any)[112] = W, (e as any)[113] = E) : E = (e as any)[113], E;
      }
    case "recreate_required":
    case "blocked":
    case "failed":
      {
        if (((s as any).kind as any) === ("blocked" as any) && ((s as any).retrying as any) === (!0 as any)) {
          let f: any;
          ((e as any)[114] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = ((t as any).jsx as any)(o, {
            id: "yz7wBu"
          }), (e as any)[114] = f) : f = (e as any)[114];
          let j: any;
          return ((e as any)[115] as any) !== ((n as any).close as any) ? (j = ((t as any).jsx as any)((y as any).Action, {
            onClick: (n as any).close,
            variant: "primary",
            children: f
          }), (e as any)[115] = (n as any).close, (e as any)[116] = j) : j = (e as any)[116], j;
        }
        let d: any;
        ((e as any)[117] as any) !== (g as any) || ((e as any)[118] as any) !== (s as any) ? (d = (D as any)(s) || (de as any)(s) ? g : null, (e as any)[117] = g, (e as any)[118] = s, (e as any)[119] = d) : d = (e as any)[119];
        let u: any;
        ((e as any)[120] as any) !== (s as any) || ((e as any)[121] as any) !== (S as any) ? (u = (D as any)(s) ? null : S, (e as any)[120] = s, (e as any)[121] = S, (e as any)[122] = u) : u = (e as any)[122];
        let m: any;
        return ((e as any)[123] as any) !== (u as any) || ((e as any)[124] as any) !== (d as any) ? (m = ((t as any).jsxs as any)((t as any).Fragment, {
          children: [d, u]
        }), (e as any)[123] = u, (e as any)[124] = d, (e as any)[125] = m) : m = (e as any)[125], m;
      }
  }
}
function De(this: any, i: any, e: any): any {
  return ((t as any).jsx as any)((y as any).Action, {
    destructive: !0,
    onClick: e,
    style: ($ as any).ghostDanger,
    variant: "tertiary",
    children: i
  });
}
function Ue(this: any, i: any): any {
  return ((t as any).jsx as any)((y as any).Action, {
    onClick: i,
    style: ($ as any).ghostDismiss,
    variant: "tertiary",
    children: ((t as any).jsx as any)(o, {
      id: "dEgA5A"
    })
  });
}
function _e(this: any, i: any): any {
  (_e as any).d = 927;
  const e: any = ((q as any).c as any)(21),
    {
      step: s,
      commands: n,
      selectedWorkspaceId: a,
      canConnect: l
    }: any = i,
    {
      _: r
    }: any = (O as any)(),
    c: any = (((s as any).workspaces as any).length as any) === (1 as any) ? ((s as any).workspaces as any)[0] : void 0;
  if ((((s as any).workspaces as any).length as any) === (0 as any)) {
    let _: any;
    return ((e as any)[0] as any) !== (l as any) || ((e as any)[1] as any) !== (n as any) ? (_ = l ? ((t as any).jsx as any)((y as any).Action, {
      onClick: (): any => {
        ((n as any).connectWorkspaceForMove as any)();
      },
      variant: "primary",
      children: ((t as any).jsx as any)(o, {
        id: "l6bXmL"
      })
    }) : null, (e as any)[0] = l, (e as any)[1] = n, (e as any)[2] = _) : _ = (e as any)[2], _;
  }
  if ((c as any) != (null as any)) {
    let _: any;
    ((e as any)[3] as any) !== (r as any) || ((e as any)[4] as any) !== ((c as any).slackTeamName as any) ? (_ = (c as any).slackTeamName ?? (r as any)({
      id: "1z1n9n"
    }), (e as any)[3] = r, (e as any)[4] = (c as any).slackTeamName, (e as any)[5] = _) : _ = (e as any)[5];
    const x: any = _;
    let v: any;
    ((e as any)[6] as any) !== (n as any) || ((e as any)[7] as any) !== ((c as any).slackTeamId as any) ? (v = (): any => {
      ((n as any).move as any)((c as any).slackTeamId);
    }, (e as any)[6] = n, (e as any)[7] = (c as any).slackTeamId, (e as any)[8] = v) : v = (e as any)[8];
    let S: any;
    ((e as any)[9] as any) !== (x as any) ? (S = ((t as any).jsx as any)(o, {
      id: "e850CL",
      values: {
        workspaceName: x
      }
    }), (e as any)[9] = x, (e as any)[10] = S) : S = (e as any)[10];
    let k: any;
    return ((e as any)[11] as any) !== (v as any) || ((e as any)[12] as any) !== (S as any) ? (k = ((t as any).jsx as any)((y as any).Action, {
      onClick: v,
      style: ($ as any).workspaceAction,
      variant: "primary",
      children: S
    }), (e as any)[11] = v, (e as any)[12] = S, (e as any)[13] = k) : k = (e as any)[13], k;
  }
  const p: any = (a as any) == (null as any);
  let h: any;
  ((e as any)[14] as any) !== (n as any) || ((e as any)[15] as any) !== (a as any) ? (h = (): any => {
    (a as any) != (null as any) && ((n as any).move as any)(a);
  }, (e as any)[14] = n, (e as any)[15] = a, (e as any)[16] = h) : h = (e as any)[16];
  let w: any;
  ((e as any)[17] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (w = ((t as any).jsx as any)(o, {
    id: "QWdKwH"
  }), (e as any)[17] = w) : w = (e as any)[17];
  let g: any;
  return ((e as any)[18] as any) !== (p as any) || ((e as any)[19] as any) !== (h as any) ? (g = ((t as any).jsx as any)((y as any).Action, {
    disabled: p,
    onClick: h,
    variant: "primary",
    children: w
  }), (e as any)[18] = p, (e as any)[19] = h, (e as any)[20] = g) : g = (e as any)[20], g;
}
function Pe(this: any, i: any, e: any): any {
  switch ((i as any).kind) {
    case "not_connected":
    case "loading":
    case "unavailable":
    case "installing":
    case "updating":
    case "disconnecting":
      return !1;
    case "ready":
    case "choose_workspace":
    case "awaiting_workspace":
    case "pending_admin_approval":
    case "pending_reinstall_approval":
    case "approval_denied":
    case "connected":
    case "removed_in_slack":
    case "connection_lost":
    case "workspace_mismatch":
    case "recreate_required":
    case "blocked":
    case "failed":
      return !0;
    case "reconnect_required":
    case "cursor_approval_required":
    case "connect_failed":
      return e;
  }
}
function he(this: any, i: any): any {
  (he as any).d = 923;
  const e: any = ((q as any).c as any)(47),
    {
      agentName: s,
      creatorName: n,
      session: a,
      commands: l
    }: any = i,
    r: any = (n as any) == (null as any),
    c: any = (a as any).step,
    p: any = (Me as any)(c),
    [h, w]: any = ((xe as any).useState as any)(null),
    g: any = (h?.step as any) === (c as any) ? (h as any).slackTeamId : null,
    _: any = ((p as any).find as any)((F: any): any => ((F as any).slackTeamId as any) === (g as any))?.slackTeamId ?? (Te as any)(p)?.slackTeamId ?? null;
  let x: any;
  ((e as any)[0] as any) !== (r as any) || ((e as any)[1] as any) !== (l as any) || ((e as any)[2] as any) !== (_ as any) || ((e as any)[3] as any) !== (c as any) ? (x = ((t as any).jsx as any)(ke, {
    canConnect: r,
    commands: l,
    selectedWorkspaceId: _,
    step: c
  }), (e as any)[0] = r, (e as any)[1] = l, (e as any)[2] = _, (e as any)[3] = c, (e as any)[4] = x) : x = (e as any)[4];
  const v: any = x;
  let S: any;
  ((e as any)[5] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (S = ((t as any).jsx as any)((y as any).CloseButton, {}), (e as any)[5] = S) : S = (e as any)[5];
  let k: any;
  ((e as any)[6] as any) !== ((c as any).kind as any) ? (k = ({
    0: {
      className: "sand-78zum5 sand-dt5ytf sand-ou54vl sand-1miatn0 sand-x6bls6"
    },
    1: {
      className: "sand-78zum5 sand-dt5ytf sand-ou54vl sand-1miatn0 sand-x6bls6 sand-1lpwdgh sand-1nhvcw1"
    }
  } as any)[((((c as any).kind as any) === ("loading" as any)) as any) << (0 as any)], (e as any)[6] = (c as any).kind, (e as any)[7] = k) : k = (e as any)[7];
  let N: any;
  ((e as any)[8] as any) !== (s as any) || ((e as any)[9] as any) !== (n as any) || ((e as any)[10] as any) !== ((a as any).notice as any) || ((e as any)[11] as any) !== (c as any) ? (N = ((t as any).jsx as any)(pe, {
    agentName: s,
    creatorName: n,
    notice: (a as any).notice,
    step: c
  }), (e as any)[8] = s, (e as any)[9] = n, (e as any)[10] = (a as any).notice, (e as any)[11] = c, (e as any)[12] = N) : N = (e as any)[12];
  let b: any;
  ((e as any)[13] as any) !== (r as any) || ((e as any)[14] as any) !== (l as any) || ((e as any)[15] as any) !== (_ as any) || ((e as any)[16] as any) !== (w as any) || ((e as any)[17] as any) !== (c as any) || ((e as any)[18] as any) !== (p as any) ? (b = ((p as any).length as any) > (0 as any) ? ((t as any).jsx as any)(te, {
    onConnectAnother: r ? (): any => {
      ((c as any).kind as any) === ("connection_lost" as any) ? ((l as any).connectWorkspaceForMove as any)() : ((l as any).connectWorkspace as any)();
    } : null,
    onSelect: (F: any): any => (w as any)({
      step: c,
      slackTeamId: F
    }),
    selectedId: _,
    workspaces: p
  }) : null, (e as any)[13] = r, (e as any)[14] = l, (e as any)[15] = _, (e as any)[16] = w, (e as any)[17] = c, (e as any)[18] = p, (e as any)[19] = b) : b = (e as any)[19];
  let C: any;
  ((e as any)[20] as any) !== (s as any) || ((e as any)[21] as any) !== (c as any) ? (C = ((t as any).jsx as any)(ce, {
    agentName: s,
    step: c
  }), (e as any)[20] = s, (e as any)[21] = c, (e as any)[22] = C) : C = (e as any)[22];
  let d: any;
  ((e as any)[23] as any) !== (c as any) ? (d = ((t as any).jsx as any)(J, {
    step: c
  }), (e as any)[23] = c, (e as any)[24] = d) : d = (e as any)[24];
  let u: any;
  ((e as any)[25] as any) !== (r as any) || ((e as any)[26] as any) !== (l as any) || ((e as any)[27] as any) !== ((c as any).kind as any) ? (u = ((c as any).kind as any) === ("not_connected" as any) && r ? ((t as any).jsx as any)($e, {
    onClick: (): any => {
      ((l as any).connectWorkspace as any)();
    },
    size: "lg",
    style: ($ as any).connectWorkspace,
    type: "button",
    variant: "primary",
    children: ((t as any).jsx as any)(o, {
      id: "l6bXmL"
    })
  }) : null, (e as any)[25] = r, (e as any)[26] = l, (e as any)[27] = (c as any).kind, (e as any)[28] = u) : u = (e as any)[28];
  let m: any;
  ((e as any)[29] as any) !== (n as any) || ((e as any)[30] as any) !== ((c as any).kind as any) ? (m = ((c as any).kind as any) === ("not_connected" as any) && (n as any) != (null as any) ? ((t as any).jsx as any)("p", {
    ...(z as any)((R as any).body1, ($ as any).note),
    role: "status",
    children: ((t as any).jsx as any)(o, {
      id: "ReVTwW",
      values: {
        creatorName: n
      }
    })
  }) : null, (e as any)[29] = n, (e as any)[30] = (c as any).kind, (e as any)[31] = m) : m = (e as any)[31];
  let f: any;
  ((e as any)[32] as any) !== (k as any) || ((e as any)[33] as any) !== (N as any) || ((e as any)[34] as any) !== (b as any) || ((e as any)[35] as any) !== (C as any) || ((e as any)[36] as any) !== (d as any) || ((e as any)[37] as any) !== (u as any) || ((e as any)[38] as any) !== (m as any) ? (f = ((t as any).jsx as any)((y as any).Body, {
    style: ($ as any).bodyContain,
    children: ((t as any).jsxs as any)("div", {
      ...k,
      children: [N, b, C, d, u, m]
    })
  }), (e as any)[32] = k, (e as any)[33] = N, (e as any)[34] = b, (e as any)[35] = C, (e as any)[36] = d, (e as any)[37] = u, (e as any)[38] = m, (e as any)[39] = f) : f = (e as any)[39];
  let j: any;
  ((e as any)[40] as any) !== (v as any) || ((e as any)[41] as any) !== (r as any) || ((e as any)[42] as any) !== (c as any) ? (j = (Pe as any)(c, r) ? ((t as any).jsx as any)((y as any).ActionBar, {
    style: ($ as any).actionBar,
    children: v
  }) : null, (e as any)[40] = v, (e as any)[41] = r, (e as any)[42] = c, (e as any)[43] = j) : j = (e as any)[43];
  let A: any;
  return ((e as any)[44] as any) !== (f as any) || ((e as any)[45] as any) !== (j as any) ? (A = ((t as any).jsxs as any)((t as any).Fragment, {
    children: [S, f, j]
  }), (e as any)[44] = f, (e as any)[45] = j, (e as any)[46] = A) : A = (e as any)[46], A;
}
function je(this: any, i: any): any {
  (je as any).d = 922;
  const e: any = ((q as any).c as any)(10),
    {
      agentName: s,
      creatorName: n,
      session: a,
      commands: l
    }: any = i;
  let r: any;
  ((e as any)[0] as any) !== (l as any) ? (r = (h: any): any => {
    h || ((l as any).close as any)();
  }, (e as any)[0] = l, (e as any)[1] = r) : r = (e as any)[1];
  let c: any;
  ((e as any)[2] as any) !== (s as any) || ((e as any)[3] as any) !== (l as any) || ((e as any)[4] as any) !== (n as any) || ((e as any)[5] as any) !== (a as any) ? (c = ((t as any).jsx as any)(he, {
    agentName: s,
    commands: l,
    creatorName: n,
    session: a
  }), (e as any)[2] = s, (e as any)[3] = l, (e as any)[4] = n, (e as any)[5] = a, (e as any)[6] = c) : c = (e as any)[6];
  let p: any;
  return ((e as any)[7] as any) !== (r as any) || ((e as any)[8] as any) !== (c as any) ? (p = ((t as any).jsx as any)((y as any).Root, {
    onOpenChange: r,
    open: !0,
    variant: "rich",
    width: "wide",
    children: c
  }), (e as any)[7] = r, (e as any)[8] = c, (e as any)[9] = p) : p = (e as any)[9], p;
}
const Be: any = {
  step: {
    kind: "loading"
  }
};
function He(this: any, i: any, e: any): any {
  const s: any = ((q as any).c as any)(34),
    {
      _: n
    }: any = (O as any)(),
    a: any = (we as any)(),
    l: any = (Se as any)(),
    r: any = (Ne as any)(),
    {
      close: c,
      open: p,
      disconnect: h,
      forget: w
    }: any = l,
    g: any = (Ae as any)(i),
    _: any = g ? (i as any).id : null,
    x: any = ((i as any).viewerIsOwner as any) === (!1 as any);
  let v: any;
  if (((s as any)[0] as any) !== (_ as any) || ((s as any)[1] as any) !== (c as any) || ((s as any)[2] as any) !== (p as any) || ((s as any)[3] as any) !== (x as any) ? (v = (): any => (_ as any) == (null as any) ? Ke : ((p as any)({
    agentId: _,
    harness: (qe as any).temporal,
    usesCreatorConnection: x
  }), c), (s as any)[0] = _, (s as any)[1] = c, (s as any)[2] = p, (s as any)[3] = x, (s as any)[4] = v) : v = (s as any)[4], (ve as any)(v), !g) return null;
  let S: any;
  ((s as any)[5] as any) !== (i as any) ? (S = (Ce as any)(i), (s as any)[5] = i, (s as any)[6] = S) : S = (s as any)[6];
  const k: any = S;
  let N: any;
  ((s as any)[7] as any) !== (n as any) || ((s as any)[8] as any) !== ((i as any).ownerDisplayName as any) || ((s as any)[9] as any) !== (x as any) ? (N = x ? {
    creatorName: (i as any).ownerDisplayName ?? (n as any)({
      id: "zA9YJC"
    })
  } : {}, (s as any)[7] = n, (s as any)[8] = (i as any).ownerDisplayName, (s as any)[9] = x, (s as any)[10] = N) : N = (s as any)[10];
  let b: any;
  ((s as any)[11] as any) !== ((i as any).id as any) || ((s as any)[12] as any) !== (a as any) ? (b = a ?? {
    agentId: (i as any).id,
    ...Be
  }, (s as any)[11] = (i as any).id, (s as any)[12] = a, (s as any)[13] = b) : b = (s as any)[13];
  let C: any;
  ((s as any)[14] as any) !== (n as any) || ((s as any)[15] as any) !== (k as any) || ((s as any)[16] as any) !== (r as any) || ((s as any)[17] as any) !== (h as any) ? (C = async (): Promise<any> => {
    (await (r as any)((H as any)({
      title: (n as any)({
        id: "WyB12j",
        values: {
          agentName: k
        }
      }),
      description: (n as any)({
        id: "ojmp9z",
        values: {
          agentName: k
        }
      }),
      confirmLabel: (n as any)({
        id: "t/YqKh"
      }),
      cancelLabel: (n as any)({
        id: "dEgA5A"
      })
    }))) && (await (h as any)());
  }, (s as any)[14] = n, (s as any)[15] = k, (s as any)[16] = r, (s as any)[17] = h, (s as any)[18] = C) : C = (s as any)[18];
  let d: any;
  ((s as any)[19] as any) !== (n as any) || ((s as any)[20] as any) !== (k as any) || ((s as any)[21] as any) !== (r as any) || ((s as any)[22] as any) !== (w as any) ? (d = async (): Promise<any> => {
    (await (r as any)((H as any)({
      title: (n as any)({
        id: "v/3uCP",
        values: {
          agentName: k
        }
      }),
      description: (n as any)({
        id: "DIHxUE",
        values: {
          agentName: k
        }
      }),
      confirmLabel: (n as any)({
        id: "8ayiy8"
      }),
      cancelLabel: (n as any)({
        id: "dEgA5A"
      })
    }))) && (await (w as any)());
  }, (s as any)[19] = n, (s as any)[20] = k, (s as any)[21] = r, (s as any)[22] = w, (s as any)[23] = d) : d = (s as any)[23];
  let u: any;
  ((s as any)[24] as any) !== (l as any) || ((s as any)[25] as any) !== (e as any) || ((s as any)[26] as any) !== (C as any) || ((s as any)[27] as any) !== (d as any) ? (u = {
    ...l,
    close: e,
    disconnect: C,
    forget: d
  }, (s as any)[24] = l, (s as any)[25] = e, (s as any)[26] = C, (s as any)[27] = d, (s as any)[28] = u) : u = (s as any)[28];
  let m: any;
  return ((s as any)[29] as any) !== (k as any) || ((s as any)[30] as any) !== (N as any) || ((s as any)[31] as any) !== (b as any) || ((s as any)[32] as any) !== (u as any) ? (m = {
    agentName: k,
    ...N,
    session: b,
    commands: u
  }, (s as any)[29] = k, (s as any)[30] = N, (s as any)[31] = b, (s as any)[32] = u, (s as any)[33] = m) : m = (s as any)[33], m;
}
function Ke(this: any): any {}
function Xe(this: any, i: any): any {
  (Xe as any).d = 915;
  const e: any = ((q as any).c as any)(5),
    {
      agent: s,
      onClose: n
    }: any = i,
    a: any = (He as any)(s, n);
  if ((a as any) == (null as any)) return null;
  let l: any;
  return ((e as any)[0] as any) !== ((a as any).agentName as any) || ((e as any)[1] as any) !== ((a as any).commands as any) || ((e as any)[2] as any) !== ((a as any).creatorName as any) || ((e as any)[3] as any) !== ((a as any).session as any) ? (l = ((t as any).jsx as any)(je, {
    agentName: (a as any).agentName,
    commands: (a as any).commands,
    creatorName: (a as any).creatorName,
    session: (a as any).session
  }), (e as any)[0] = (a as any).agentName, (e as any)[1] = (a as any).commands, (e as any)[2] = (a as any).creatorName, (e as any)[3] = (a as any).session, (e as any)[4] = l) : l = (e as any)[4], l;
}
export { Xe as G, he as a, He as u };
//# debugId=a8b3142e-2d49-4025-9a7b-4c0d1858b107
