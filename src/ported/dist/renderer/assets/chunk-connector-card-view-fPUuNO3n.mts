declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "c9d87d1b-ab7d-4b58-9dfd-71f23fa51390", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-c9d87d1b-ab7d-4b58-9dfd-71f23fa51390");
  } catch (e: any) {}
} as any)();
import { c as Ns, u as Ss, j as a, T as S, r as Bs, p as Ds } from "./index.eager-vendor-Qbf9YA6n.js";
import { r as t, bd as Fs, u as Ms, aT as Ls, aK as Is } from "./index.eager-app-Cj5f8Gby.js";
import { W as C, g as bs } from "./index-ZYxf-aBb.js";
import { aY as _ } from "./index.eager-platform-Dcfeegfw.js";
import { a as Ps } from "./chunk-mcp-connector-status-DhhAF8A6.js";
function gs(this: any, i: any): any {
  return ((((i as any).toLowerCase as any)() as any).replace as any)(/[^a-z0-9]/g, "");
}
function is(this: any, i: any, s: any): any {
  const e: any = (gs as any)(i);
  return ((e as any).length as any) > (0 as any) && (e as any) === ((gs as any)(s) as any);
}
function Rs(this: any, i: any, s: any, e: any, r: any): any {
  const c: any = ((i as any).find as any)(e);
  if ((c as any) != (null as any)) return {
    kind: "resolved",
    target: c
  };
  const l: any = ((i as any).filter as any)((d: any): any => (is as any)((d as any).name, s)),
    [h]: any = l;
  return (h as any) == (null as any) ? {
    kind: "missing"
  } : ((l as any).length as any) === (1 as any) ? {
    kind: "resolved",
    target: h
  } : {
    kind: "ambiguous",
    targets: l,
    preferredTarget: ((l as any).find as any)(r) ?? h
  };
}
function Ys(this: any, i: any, s: any): any {
  const e: any = ((i as any).find as any)((l: any): any => ((l as any).serverIdentifier as any) === (s as any));
  if ((e as any) != (null as any)) {
    const l: any = ((i as any).filter as any)((h: any): any => ((h as any).id as any) === ((e as any).id as any));
    return ((l as any).length as any) > (1 as any) ? {
      kind: "ambiguous",
      targets: l,
      preferredTarget: e
    } : {
      kind: "resolved",
      target: e
    };
  }
  const r: any = ((i as any).filter as any)((l: any): any => ((l as any).id as any) === (s as any)),
    [c]: any = r;
  return (c as any) != (null as any) ? ((r as any).length as any) === (1 as any) ? {
    kind: "resolved",
    target: c
  } : {
    kind: "ambiguous",
    targets: r,
    preferredTarget: ((r as any).find as any)((l: any): any => !(l as any).isTeamServer) ?? c
  } : (Rs as any)(i, s, (): any => !1, (l: any): any => !(l as any).isTeamServer);
}
function sa(this: any, i: any): any {
  const s: any = (i as any)[0];
  return (s as any) != (null as any) && ((i as any).length as any) > (1 as any) && ((i as any).every as any)((e: any): any => ((e as any).id as any) === ((s as any).id as any));
}
function Es(this: any, i: any): any {
  return ((i as any).some as any)((s: any): any => ((s as any).status as any) !== ("connected" as any) && ((s as any).status as any) !== ("disabledByTeamAdminPolicy" as any));
}
function aa(this: any, i: any): any {
  const s: any = new (Map as any)();
  for (const r of i) {
    const c: any = ((s as any).get as any)((r as any).id);
    (c as any) == (null as any) ? ((s as any).set as any)((r as any).id, [r]) : ((c as any).push as any)(r);
  }
  if (((s as any).size as any) < (2 as any)) return;
  const e: any = (([...((s as any).values as any)()] as any).filter as any)(Es);
  return ((e as any).length as any) === (1 as any) ? (e as any)[0] : void 0;
}
const $s: number = 4;
function Ks(this: any, i: any, s: any): any {
  return ((i as any).find as any)((e: any): any => ((e as any).native as any) == (null as any) && ((is as any)((e as any).displayName, s) || (is as any)((e as any).name, s)));
}
function ea(this: any, i: any): any {
  return ((i as any).fields as any) != (null as any) && (((i as any).fields as any).length as any) > (0 as any);
}
function na(this: any, i: any, s: any, e: any, r: any): any {
  const c: any = [],
    l: any = new (Set as any)();
  for (const h of r) {
    const d: any = (Ks as any)(i, h);
    if ((d as any) != (null as any) && !((is as any)((d as any).displayName, e) || (is as any)((d as any).name, e)) && !(((s as any).has as any)((gs as any)((d as any).displayName)) || ((s as any).has as any)((gs as any)((d as any).name))) && !((l as any).has as any)((d as any).id) && (((l as any).add as any)((d as any).id), ((c as any).push as any)(d), ((c as any).length as any) >= ($s as any))) break;
  }
  return c;
}
function As(this: any, i: any): any {
  (As as any).d = 884;
  const s: any = ((Ns as any).c as any)(16),
    {
      chrome: e,
      onBrowseMore: r,
      suggestions: c
    }: any = i,
    {
      _: l
    }: any = (Ss as any)();
  let h: any;
  ((s as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (h = (t as any)("sand-connector-card__discovery", "sand-78zum5 sand-6s0dn4 sand-1a02dak sand-17d4w8g"), (s as any)[0] = h) : h = (s as any)[0];
  let d: any;
  if (((s as any)[1] as any) !== (l as any) || ((s as any)[2] as any) !== (e as any) || ((s as any)[3] as any) !== (c as any)) {
    let v: any;
    ((s as any)[5] as any) !== (l as any) || ((s as any)[6] as any) !== (e as any) ? (v = (y: any): any => ((a as any).jsxs as any)("button", {
      className: (t as any)("sand-connector-card__chip", "sand-3nfvp2 sand-6s0dn4 sand-17d4w8g sand-1iorvi4 sand-jkvuk6 sand-25sj25 sand-f159sx sand-mkeg23 sand-1y0btm7 sand-qz0629 sand-149ho13 sand-1ua6jya sand-ch1371 sand-19aaqeu sand-1ypdohk sand-jb2p0i sand-1t137rt sand-js6kxj sand-15406qy sand-1firant sand-wji4o3"),
      onClick: (y as any).onOpen,
      title: (l as any)({
        id: "XuVQrE",
        values: {
          0: (y as any).displayName
        }
      }),
      type: "button",
      children: [((e as any).renderConnectorIcon as any)({
        ...(((y as any).iconId as any) == (null as any) ? {} : {
          iconId: (y as any).iconId
        }),
        ...(((y as any).iconUrl as any) == (null as any) ? {} : {
          iconUrl: (y as any).iconUrl
        })
      }, (y as any).displayName, 18), ((a as any).jsx as any)(_, {
        className: (t as any)("sand-1yqkkiu sand-b3r6kr sand-lyipyv sand-uxw1ft"),
        size: "xs",
        weight: "medium",
        children: (y as any).displayName
      }), ((a as any).jsx as any)(C, {
        "aria-hidden": !0,
        className: (t as any)("sand-4b2ntj sand-2lah0s"),
        name: "plus",
        size: "xs"
      })]
    }, (y as any).key), (s as any)[5] = l, (s as any)[6] = e, (s as any)[7] = v) : v = (s as any)[7], d = ((c as any).map as any)(v), (s as any)[1] = l, (s as any)[2] = e, (s as any)[3] = c, (s as any)[4] = d;
  } else d = (s as any)[4];
  let x: any;
  ((s as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (x = (t as any)("sand-connector-card__browse-more", "sand-3nfvp2 sand-6s0dn4 sand-1ed6fcf sand-vc5jky sand-1iorvi4 sand-jkvuk6 sand-yiysdx sand-14vy60q sand-jbqb8w sand-ng3xce sand-4b2ntj sand-1buwdsh sand-1ypdohk sand-jb2p0i sand-1t137rt sand-t3l3uh sand-1firant sand-wji4o3"), (s as any)[8] = x) : x = (s as any)[8];
  let j: any, q: any;
  ((s as any)[9] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (j = ((a as any).jsx as any)("span", {
    className: (t as any)("sand-1wm8ruf sand-1rhlpx6 sand-1heor9g"),
    children: ((a as any).jsx as any)(S, {
      id: "Lrv2Lo"
    })
  }), q = ((a as any).jsx as any)(C, {
    "aria-hidden": !0,
    name: "arrow-right",
    size: "xs"
  }), (s as any)[9] = j, (s as any)[10] = q) : (j = (s as any)[9], q = (s as any)[10]);
  let u: any;
  ((s as any)[11] as any) !== (r as any) ? (u = ((a as any).jsxs as any)("button", {
    className: x,
    onClick: r,
    type: "button",
    children: [j, q]
  }), (s as any)[11] = r, (s as any)[12] = u) : u = (s as any)[12];
  let N: any;
  return ((s as any)[13] as any) !== (d as any) || ((s as any)[14] as any) !== (u as any) ? (N = ((a as any).jsxs as any)("div", {
    className: h,
    children: [d, u]
  }), (s as any)[13] = d, (s as any)[14] = u, (s as any)[15] = N) : N = (s as any)[15], N;
}
const D: any = {
    card: {
      k1xSpc: "sand-78zum5",
      kXwgrk: "sand-dt5ytf",
      kOIVth: "sand-883omv",
      kzqmXN: "sand-h8yej3",
      k7Eaqz: "sand-euugli",
      kmVPX3: "sand-c7ga6q",
      kaIpWk: "sand-gqmno8",
      kfSwDN: "sand-1hx0egp",
      $$css: !0
    },
    action: {
      kmuXW: "sand-2lah0s",
      $$css: !0
    },
    actionPill: {
      kZKoxP: "sand-10w6t97",
      kwRFfy: "sand-pdmqnj",
      kZCmMZ: "sand-1g0dm76",
      $$css: !0
    },
    accountPill: {
      k1xSpc: "sand-3nfvp2",
      kGNEyG: "sand-6s0dn4",
      kOIVth: "sand-17d4w8g",
      kZKoxP: "sand-t7dq6l",
      kLKAdn: "sand-123j3cw",
      kGO01o: "sand-s9asl8",
      kZCmMZ: "sand-e2zdcy",
      kwRFfy: "sand-2vl965",
      kMzoRj: "sand-mkeg23",
      ksu8eU: "sand-1y0btm7",
      kVAM5u: "sand-qz0629",
      kaIpWk: "sand-149ho13",
      kWkggS: "sand-1ua6jya",
      kMwMTN: "sand-19aaqeu",
      kMv6JI: "sand-jb2p0i",
      $$css: !0
    },
    accountPillAction: {
      kWkggS: "sand-1ua6jya sand-13awvlr",
      k3XXqK: "sand-1t137rt",
      kGVxlE: "sand-js6kxj",
      k1ekBW: "sand-15406qy",
      kIyJzY: "sand-1firant",
      kAMwcw: "sand-wji4o3",
      $$css: !0
    }
  },
  Vs: any = {
    className: "sand-jm9jq1 sand-18xomjl sand-bcz3fp sand-iw1gut"
  },
  Us: any = {
    className: "sand-78zum5 sand-6s0dn4 sand-1a02dak sand-17d4w8g"
  },
  Ws: any = {
    className: "sand-3nfvp2 sand-6s0dn4 sand-1ed6fcf sand-vc5jky sand-1nn3v0j sand-1120s5i sand-yiysdx sand-14vy60q sand-jbqb8w sand-ng3xce sand-4b2ntj sand-1xms8e4 sand-1ypdohk sand-1s07b3s sand-1hc1fzr sand-uhm2yv sand-jb2p0i sand-1t137rt sand-t3l3uh sand-1firant sand-wji4o3"
  },
  Gs: any = {
    className: "sand-1wm8ruf sand-1rhlpx6 sand-1heor9g"
  };
function Ts(this: any, i: any): any {
  (Ts as any).d = 885;
  const s: any = ((Ns as any).c as any)(7),
    {
      glyph: e,
      glyphColor: r,
      isBusy: c
    }: any = i;
  let l: any;
  ((s as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (l = (t as any)("sand-3nfvp2 sand-2lah0s sand-4b2ntj"), (s as any)[0] = l) : l = (s as any)[0];
  const h: any = l;
  if (c || (e as any) === ("loading" as any)) {
    let j: any;
    return ((s as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (j = ((a as any).jsx as any)(C, {
      "aria-hidden": !0,
      className: h,
      modifier: "spin",
      name: "loading",
      size: "xs"
    }), (s as any)[1] = j) : j = (s as any)[1], j;
  }
  if ((e as any) == (null as any)) return null;
  let d: any;
  ((s as any)[2] as any) !== (r as any) ? (d = (r as any) == (null as any) ? {} : {
    color: r
  }, (s as any)[2] = r, (s as any)[3] = d) : d = (s as any)[3];
  let x: any;
  return ((s as any)[4] as any) !== (e as any) || ((s as any)[5] as any) !== (d as any) ? (x = ((a as any).jsx as any)(C, {
    "aria-hidden": !0,
    className: h,
    ...d,
    name: e,
    size: "xs"
  }), (s as any)[4] = e, (s as any)[5] = d, (s as any)[6] = x) : x = (s as any)[6], x;
}
function ls(this: any, i: any): any {
  (ls as any).d = 886;
  const s: any = ((Ns as any).c as any)(24),
    {
      ariaLabel: e,
      glyph: r,
      glyphColor: c,
      isBusy: l,
      isDisabled: h,
      label: d,
      onClick: x,
      title: j,
      treatment: q
    }: any = i,
    u: any = (q as any) === ("account" as any);
  let N: any;
  ((s as any)[0] as any) !== (e as any) ? (N = (e as any) == (null as any) ? {} : {
    "aria-label": e
  }, (s as any)[0] = e, (s as any)[1] = N) : N = (s as any)[1];
  const v: any = l || void 0;
  let y: any;
  ((s as any)[2] as any) !== (u as any) ? (y = u ? {
    className: "sand-connector-card__account"
  } : {}, (s as any)[2] = u, (s as any)[3] = y) : y = (s as any)[3];
  const m: any = h || l;
  let w: any;
  ((s as any)[4] as any) !== (u as any) ? (w = u ? [(D as any).accountPill, (D as any).accountPillAction] : [(D as any).action, (Is as any).askCardButtonTinted, (D as any).actionPill], (s as any)[4] = u, (s as any)[5] = w) : w = (s as any)[5];
  const $: any = u ? "sm" : "md";
  let B: any;
  ((s as any)[6] as any) !== (j as any) ? (B = (j as any) == (null as any) ? {} : {
    title: j
  }, (s as any)[6] = j, (s as any)[7] = B) : B = (s as any)[7];
  let p: any;
  ((s as any)[8] as any) !== (r as any) || ((s as any)[9] as any) !== (c as any) || ((s as any)[10] as any) !== (u as any) || ((s as any)[11] as any) !== (l as any) || ((s as any)[12] as any) !== (d as any) ? (p = u ? ((a as any).jsxs as any)((a as any).Fragment, {
    children: [((a as any).jsx as any)(_, {
      className: (t as any)("sand-1f0l55g sand-b3r6kr sand-lyipyv sand-uxw1ft"),
      size: "sm",
      weight: "medium",
      children: d
    }), ((a as any).jsx as any)(Ts, {
      glyph: r,
      glyphColor: c,
      isBusy: l
    })]
  }) : ((a as any).jsxs as any)("span", {
    className: (t as any)("sand-wz0xwf sand-1ku5rj1"),
    children: [((a as any).jsx as any)("span", {
      className: (t as any)((({
        0: {
          className: "sand-1agbcgv sand-crlgei"
        },
        1: {
          className: "sand-1agbcgv sand-crlgei sand-lshs6z"
        }
      } as any)[(!!l as any) << (0 as any)] as any).className),
      children: d
    }), l ? ((a as any).jsx as any)(C, {
      className: (t as any)("sand-1agbcgv sand-crlgei sand-3nfvp2"),
      modifier: "spin",
      name: "loading",
      size: "sm"
    }) : null]
  }), (s as any)[8] = r, (s as any)[9] = c, (s as any)[10] = u, (s as any)[11] = l, (s as any)[12] = d, (s as any)[13] = p) : p = (s as any)[13];
  let I: any;
  return ((s as any)[14] as any) !== (x as any) || ((s as any)[15] as any) !== (N as any) || ((s as any)[16] as any) !== (v as any) || ((s as any)[17] as any) !== (y as any) || ((s as any)[18] as any) !== (m as any) || ((s as any)[19] as any) !== (w as any) || ((s as any)[20] as any) !== ($ as any) || ((s as any)[21] as any) !== (B as any) || ((s as any)[22] as any) !== (p as any) ? (I = ((a as any).jsx as any)(bs, {
    ...N,
    "aria-busy": v,
    ...y,
    disabled: m,
    onClick: x,
    rootStyle: w,
    shape: "pill",
    size: $,
    ...B,
    type: "button",
    variant: "outline",
    children: p
  }), (s as any)[14] = x, (s as any)[15] = N, (s as any)[16] = v, (s as any)[17] = y, (s as any)[18] = m, (s as any)[19] = w, (s as any)[20] = $, (s as any)[21] = B, (s as any)[22] = p, (s as any)[23] = I) : I = (s as any)[23], I;
}
function Xs(this: any, i: any): any {
  (Xs as any).d = 887;
  const s: any = ((Ns as any).c as any)(111),
    {
      displayName: e,
      iconId: r,
      iconUrl: c,
      icon: l,
      isTeam: h,
      description: d,
      toolCount: x,
      isConnected: j,
      connectedLabel: q,
      isAdminDisabled: u,
      actionLabel: N,
      isActionPending: v,
      onAction: y,
      handoff: m,
      accountFooter: w,
      pendingAccountKey: $,
      authorizeFailure: B,
      labelInput: p,
      onAddAccount: I,
      addBank: A,
      suggestions: rs,
      onBrowseMore: ks
    }: any = i,
    ds: any = ($ as any) === (void 0 as any) ? null : $,
    ts: any = (B as any) === (void 0 as any) ? null : B,
    {
      _: o
    }: any = (Ss as any)(),
    {
      _: z
    }: any = (Ss as any)(),
    K: any = (Fs as any)(),
    F: any = ((Bs as any).useId as any)(),
    vs: any = (Ms as any)(F),
    cs: any = (Ls as any)();
  let os: any;
  ((s as any)[0] as any) !== (z as any) || ((s as any)[1] as any) !== (x as any) ? (os = (x as any) > (0 as any) ? (z as any)({
    id: "RIjnws",
    values: {
      toolCount: x
    }
  }) : null, (s as any)[0] = z, (s as any)[1] = x, (s as any)[2] = os) : os = (s as any)[2];
  const us: any = os,
    M: any = !u && (p as any) != (null as any),
    ws: any = !j && !u && !M && (m as any) != (null as any),
    L: any = (m?.status as any) === ("openFailed" as any) ? (m as any).signInUrl : void 0;
  let P: any = null,
    V: any = m?.failureDetail ?? m?.portConflictDetail ?? null;
  if ((m?.status as any) === ("waiting" as any)) {
    let n: any;
    ((s as any)[3] as any) !== (o as any) || ((s as any)[4] as any) !== (e as any) ? (n = (o as any)({
      id: "wfJAKj",
      values: {
        displayName: e
      }
    }), (s as any)[3] = o, (s as any)[4] = e, (s as any)[5] = n) : n = (s as any)[5], P = n, V = (m as any).portConflictDetail ?? null;
  } else if ((m?.status as any) === ("openFailed" as any)) {
    let n: any;
    ((s as any)[6] as any) !== (o as any) || ((s as any)[7] as any) !== (e as any) ? (n = (o as any)({
      id: "08fv1/",
      values: {
        displayName: e
      }
    }), (s as any)[6] = o, (s as any)[7] = e, (s as any)[8] = n) : n = (s as any)[8], P = n;
    let f: any;
    ((s as any)[9] as any) !== (o as any) || ((s as any)[10] as any) !== (L as any) ? (f = (L as any) == (null as any) ? null : (o as any)({
      id: "nVjuaq"
    }), (s as any)[9] = o, (s as any)[10] = L, (s as any)[11] = f) : f = (s as any)[11], V = f;
  } else if ((m?.failureDetail as any) != (null as any)) {
    let n: any;
    ((s as any)[12] as any) !== (o as any) || ((s as any)[13] as any) !== (e as any) ? (n = (o as any)({
      id: "8BWxKJ",
      values: {
        displayName: e
      }
    }), (s as any)[12] = o, (s as any)[13] = e, (s as any)[14] = n) : n = (s as any)[14], P = n;
  } else if ((m as any) != (null as any)) {
    let n: any;
    ((s as any)[15] as any) !== (o as any) || ((s as any)[16] as any) !== (e as any) ? (n = (o as any)({
      id: "j7klSo",
      values: {
        displayName: e
      }
    }), (s as any)[15] = o, (s as any)[16] = e, (s as any)[17] = n) : n = (s as any)[17], P = n;
  }
  const R: any = !u && (w as any) != (null as any),
    zs: any = !j && !u && (m as any) == (null as any) && !M && !R && ((rs as any).length as any) > (0 as any),
    _s: any = R && !M && (I as any) != (null as any),
    Cs: any = j && !u && !R && (A as any) != (null as any),
    qs: any = v || void 0;
  let ms: any, fs: any, hs: any;
  ((s as any)[18] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ms = (t as any)("sand-connector-card", ((Ds as any)((Is as any).transcriptWidget, (D as any).card) as any).className), fs = (t as any)("sand-connector-card__header", "sand-78zum5 sand-6s0dn4 sand-1v2ro7d"), hs = (t as any)("sand-2lah0s sand-78zum5"), (s as any)[18] = ms, (s as any)[19] = fs, (s as any)[20] = hs) : (ms = (s as any)[18], fs = (s as any)[19], hs = (s as any)[20]);
  let U: any;
  ((s as any)[21] as any) !== (K as any) || ((s as any)[22] as any) !== (e as any) || ((s as any)[23] as any) !== (l as any) || ((s as any)[24] as any) !== (r as any) || ((s as any)[25] as any) !== (c as any) ? (U = l ?? ((K as any).renderConnectorIcon as any)({
    ...((r as any) == (null as any) ? {} : {
      iconId: r
    }),
    ...((c as any) == (null as any) ? {} : {
      iconUrl: c
    })
  }, e, 40), (s as any)[21] = K, (s as any)[22] = e, (s as any)[23] = l, (s as any)[24] = r, (s as any)[25] = c, (s as any)[26] = U) : U = (s as any)[26];
  let W: any;
  ((s as any)[27] as any) !== (U as any) ? (W = ((a as any).jsx as any)("span", {
    className: hs,
    children: U
  }), (s as any)[27] = U, (s as any)[28] = W) : W = (s as any)[28];
  let ys: any, ps: any;
  ((s as any)[29] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ys = (t as any)("sand-connector-card__text", "sand-78zum5 sand-dt5ytf sand-1iyjqo2 sand-s83m0k sand-1r8uery sand-euugli"), ps = (t as any)("sand-78zum5 sand-6s0dn4 sand-1jnr06f sand-euugli"), (s as any)[29] = ys, (s as any)[30] = ps) : (ys = (s as any)[29], ps = (s as any)[30]);
  let js: any;
  ((s as any)[31] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (js = (t as any)("sand-euugli sand-1wd3ewq sand-b3r6kr sand-lyipyv sand-uxw1ft"), (s as any)[31] = js) : js = (s as any)[31];
  let G: any;
  ((s as any)[32] as any) !== (vs as any) || ((s as any)[33] as any) !== (e as any) || ((s as any)[34] as any) !== (F as any) ? (G = ((a as any).jsx as any)(_, {
    className: js,
    id: F,
    ref: vs,
    size: "md",
    weight: "medium",
    children: e
  }), (s as any)[32] = vs, (s as any)[33] = e, (s as any)[34] = F, (s as any)[35] = G) : G = (s as any)[35];
  let X: any;
  ((s as any)[36] as any) !== (h as any) ? (X = h ? ((a as any).jsx as any)("span", {
    className: (t as any)("sand-connector-card__team", "sand-2lah0s sand-4p5aij sand-1j85h84 sand-25sj25 sand-1icxu4v sand-149ho13 sand-mkeg23 sand-1y0btm7 sand-qz0629 sand-4b2ntj sand-1k6wstc sand-xzm5a7 sand-1xxsxie sand-16q24ku sand-tvhhri"),
    children: ((a as any).jsx as any)(S, {
      id: "KM6m8p"
    })
  }) : null, (s as any)[36] = h, (s as any)[37] = X) : X = (s as any)[37];
  let O: any;
  ((s as any)[38] as any) !== (G as any) || ((s as any)[39] as any) !== (X as any) ? (O = ((a as any).jsxs as any)("div", {
    className: ps,
    children: [G, X]
  }), (s as any)[38] = G, (s as any)[39] = X, (s as any)[40] = O) : O = (s as any)[40];
  let Z: any;
  ((s as any)[41] as any) !== (d as any) ? (Z = (d as any) != (null as any) && ((d as any).length as any) > (0 as any) ? ((a as any).jsx as any)(_, {
    className: (t as any)("sand-euugli sand-b3r6kr sand-lyipyv sand-uxw1ft"),
    color: "secondary",
    size: "md",
    title: d,
    children: d
  }) : null, (s as any)[41] = d, (s as any)[42] = Z) : Z = (s as any)[42];
  let J: any;
  ((s as any)[43] as any) !== (us as any) ? (J = (us as any) != (null as any) ? ((a as any).jsx as any)(_, {
    className: (t as any)("sand-euugli sand-b3r6kr sand-lyipyv sand-uxw1ft"),
    color: "tertiary",
    size: "sm",
    children: us
  }) : null, (s as any)[43] = us, (s as any)[44] = J) : J = (s as any)[44];
  let H: any;
  ((s as any)[45] as any) !== (O as any) || ((s as any)[46] as any) !== (Z as any) || ((s as any)[47] as any) !== (J as any) ? (H = ((a as any).jsxs as any)("div", {
    className: ys,
    children: [O, Z, J]
  }), (s as any)[45] = O, (s as any)[46] = Z, (s as any)[47] = J, (s as any)[48] = H) : H = (s as any)[48];
  let E: any;
  s: {
    if (j) {
      let f: any;
      ((s as any)[49] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = (t as any)("sand-connector-card__status", "sand-3nfvp2 sand-6s0dn4 sand-2lah0s sand-1jnr06f sand-1yrsyyn sand-pdmqnj sand-10b6aqq sand-1g0dm76 sand-149ho13 sand-1buh4up sand-1w5rjie"), (s as any)[49] = f) : f = (s as any)[49];
      let b: any;
      ((s as any)[50] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (b = ((a as any).jsx as any)(C, {
        "aria-hidden": !0,
        name: "check",
        size: "sm"
      }), (s as any)[50] = b) : b = (s as any)[50];
      let k: any;
      ((s as any)[51] as any) !== (q as any) ? (k = q ?? ((a as any).jsx as any)(S, {
        id: "hp8OtS"
      }), (s as any)[51] = q, (s as any)[52] = k) : k = (s as any)[52];
      let g: any;
      ((s as any)[53] as any) !== (k as any) ? (g = ((a as any).jsx as any)(_, {
        color: "green",
        size: "lg",
        weight: "medium",
        children: k
      }), (s as any)[53] = k, (s as any)[54] = g) : g = (s as any)[54];
      let T: any;
      ((s as any)[55] as any) !== (f as any) || ((s as any)[56] as any) !== (g as any) ? (T = ((a as any).jsxs as any)("span", {
        className: f,
        role: "status",
        children: [b, g]
      }), (s as any)[55] = f, (s as any)[56] = g, (s as any)[57] = T) : T = (s as any)[57], E = T;
      break s;
    }
    if (u) {
      let f: any;
      ((s as any)[58] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = (t as any)("sand-connector-card__status", "sand-3nfvp2 sand-6s0dn4 sand-2lah0s sand-1jnr06f sand-1yrsyyn sand-pdmqnj sand-10b6aqq sand-1g0dm76 sand-149ho13 sand-59yu97 sand-4b2ntj"), (s as any)[58] = f) : f = (s as any)[58];
      let b: any;
      ((s as any)[59] as any) !== (o as any) ? (b = (Ps as any)(o, "disabledByTeamAdminPolicy"), (s as any)[59] = o, (s as any)[60] = b) : b = (s as any)[60];
      let k: any;
      ((s as any)[61] as any) !== (b as any) ? (k = ((a as any).jsx as any)(_, {
        color: "tertiary",
        size: "lg",
        weight: "medium",
        children: b
      }), (s as any)[61] = b, (s as any)[62] = k) : k = (s as any)[62];
      let g: any;
      ((s as any)[63] as any) !== (f as any) || ((s as any)[64] as any) !== (k as any) ? (g = ((a as any).jsx as any)("span", {
        className: f,
        role: "status",
        children: k
      }), (s as any)[63] = f, (s as any)[64] = k, (s as any)[65] = g) : g = (s as any)[65], E = g;
      break s;
    }
    if ((m as any) != (null as any) || M || R) {
      E = null;
      break s;
    }
    let n: any;
    ((s as any)[66] as any) !== (N as any) || ((s as any)[67] as any) !== (v as any) || ((s as any)[68] as any) !== (y as any) ? (n = ((a as any).jsx as any)(ls, {
      glyph: null,
      isBusy: v,
      isDisabled: !1,
      label: N,
      onClick: y,
      treatment: "primary"
    }), (s as any)[66] = N, (s as any)[67] = v, (s as any)[68] = y, (s as any)[69] = n) : n = (s as any)[69], E = n;
  }
  let Q: any;
  ((s as any)[70] as any) !== (H as any) || ((s as any)[71] as any) !== (E as any) || ((s as any)[72] as any) !== (W as any) ? (Q = ((a as any).jsxs as any)("div", {
    className: fs,
    children: [W, H, E]
  }), (s as any)[70] = H, (s as any)[71] = E, (s as any)[72] = W, (s as any)[73] = Q) : Q = (s as any)[73];
  let Y: any;
  ((s as any)[74] as any) !== (L as any) || ((s as any)[75] as any) !== (m as any) || ((s as any)[76] as any) !== (V as any) || ((s as any)[77] as any) !== (P as any) || ((s as any)[78] as any) !== (ws as any) || ((s as any)[79] as any) !== (cs as any) ? (Y = ws ? ((a as any).jsxs as any)("div", {
    className: (t as any)("sand-connector-card__handoff", "sand-78zum5 sand-6s0dn4 sand-167g77z sand-euugli"),
    children: [((m as any).status as any) === ("waiting" as any) ? ((a as any).jsx as any)(C, {
      "aria-hidden": !0,
      className: (t as any)("sand-2lah0s"),
      modifier: "spin",
      name: "loading",
      size: "sm"
    }) : ((a as any).jsx as any)(C, {
      "aria-hidden": !0,
      className: (t as any)("sand-2lah0s"),
      color: "yellow",
      name: "exclamation-circle",
      size: "sm"
    }), ((a as any).jsxs as any)("div", {
      className: (t as any)("sand-1iyjqo2 sand-s83m0k sand-euugli sand-13faqbe"),
      children: [((a as any).jsx as any)(_, {
        as: "div",
        color: "secondary",
        size: "sm",
        children: P
      }), (V as any) != (null as any) ? ((a as any).jsx as any)(_, {
        as: "div",
        color: "tertiary",
        size: "xs",
        children: V
      }) : null]
    }), (L as any) != (null as any) ? ((a as any).jsx as any)(bs, {
      onClick: (): any => ((cs as any).copy as any)(L),
      rootStyle: (D as any).action,
      size: "sm",
      type: "button",
      variant: "secondary",
      children: ((cs as any).status as any) === ("copied" as any) ? ((a as any).jsx as any)(S, {
        id: "6V3Ea3"
      }) : ((a as any).jsx as any)(S, {
        id: "y1eoq1"
      })
    }) : null, ((m as any).status as any) === ("waiting" as any) ? ((a as any).jsx as any)(bs, {
      onClick: (m as any).onReopen,
      rootStyle: (D as any).action,
      size: "sm",
      type: "button",
      variant: "secondary",
      children: ((a as any).jsx as any)(S, {
        id: "M7SqjM"
      })
    }) : ((a as any).jsx as any)(bs, {
      onClick: (m as any).onRetry,
      rootStyle: (D as any).action,
      size: "sm",
      type: "button",
      variant: "secondary",
      children: ((a as any).jsx as any)(S, {
        id: "6gRgw8"
      })
    })]
  }) : null, (s as any)[74] = L, (s as any)[75] = m, (s as any)[76] = V, (s as any)[77] = P, (s as any)[78] = ws, (s as any)[79] = cs, (s as any)[80] = Y) : Y = (s as any)[80];
  let ss: any;
  ((s as any)[81] as any) !== (z as any) || ((s as any)[82] as any) !== (p as any) || ((s as any)[83] as any) !== (M as any) ? (ss = M && (p as any) != (null as any) ? ((a as any).jsxs as any)("div", {
    className: (t as any)("sand-connector-card__label-input", "sand-78zum5 sand-6s0dn4 sand-167g77z sand-euugli"),
    children: [((a as any).jsx as any)("input", {
      "aria-label": (z as any)({
        id: "XHpefl"
      }),
      autoFocus: !0,
      className: (t as any)("sand-1iyjqo2 sand-s83m0k sand-euugli sand-1fgtraw sand-mzvs34 sand-f159sx sand-ur7f20 sand-mkeg23 sand-1y0btm7 sand-qz0629 sand-1ua6jya sand-1wd3ewq sand-jb2p0i sand-1wm8ruf sand-1t137rt"),
      disabled: (p as any).isBusy,
      onChange: (n: any): any => ((p as any).onChange as any)(((n as any).target as any).value),
      onKeyDown: (n: any): any => {
        ((n as any).key as any) === ("Enter" as any) && !(p as any).isDisabled && ((p as any).onSubmit as any)(), ((n as any).key as any) === ("Escape" as any) && ((p as any).onCancel as any)();
      },
      placeholder: (z as any)({
        id: "ngp/Wy"
      }),
      type: "text",
      value: (p as any).value
    }), ((a as any).jsx as any)(ls, {
      glyph: null,
      isBusy: (p as any).isBusy,
      isDisabled: (p as any).isDisabled,
      label: (z as any)({
        id: "yIVrHZ"
      }),
      onClick: (p as any).onSubmit,
      treatment: "primary"
    })]
  }) : null, (s as any)[81] = z, (s as any)[82] = p, (s as any)[83] = M, (s as any)[84] = ss) : ss = (s as any)[84];
  let as: any;
  ((s as any)[85] as any) !== (o as any) || ((s as any)[86] as any) !== (z as any) || ((s as any)[87] as any) !== (w as any) || ((s as any)[88] as any) !== (ts as any) || ((s as any)[89] as any) !== (I as any) || ((s as any)[90] as any) !== (ds as any) || ((s as any)[91] as any) !== (R as any) || ((s as any)[92] as any) !== (_s as any) ? (as = R && (w as any) != (null as any) ? ((a as any).jsxs as any)((a as any).Fragment, {
    children: [((a as any).jsx as any)("div", {
      "aria-hidden": !0,
      className: (t as any)("sand-connector-card__divider", "sand-jm9jq1 sand-18xomjl sand-bcz3fp sand-iw1gut")
    }), ((a as any).jsxs as any)("div", {
      className: (t as any)("sand-connector-card__accounts", "sand-78zum5 sand-6s0dn4 sand-1a02dak sand-17d4w8g"),
      children: [((w as any).map as any)((n: any): any => {
        if ((n as any).isConnected) return ((a as any).jsxs as any)("span", {
          className: (t as any)("sand-connector-card__account", "sand-3nfvp2 sand-6s0dn4 sand-17d4w8g sand-t7dq6l sand-123j3cw sand-s9asl8 sand-e2zdcy sand-2vl965 sand-mkeg23 sand-1y0btm7 sand-qz0629 sand-149ho13 sand-1ua6jya sand-19aaqeu sand-jb2p0i"),
          role: "status",
          title: (z as any)({
            id: "QHcLEN"
          }),
          children: [((a as any).jsx as any)(_, {
            className: (t as any)("sand-1f0l55g sand-b3r6kr sand-lyipyv sand-uxw1ft"),
            size: "sm",
            weight: "medium",
            children: (n as any).label
          }), ((a as any).jsx as any)("span", {
            className: (t as any)("sand-3nfvp2 sand-2lah0s sand-1w5rjie"),
            children: ((a as any).jsx as any)(C, {
              "aria-hidden": !0,
              name: "check",
              size: "xs"
            })
          })]
        }, (n as any).key);
        const f: any = (ts as any) != (null as any) && ((ts as any).accountKey as any) === ((n as any).key as any) ? ts : null,
          b: any = (f as any) == (null as any) && ((n as any).handoff?.status as any) === ("waiting" as any),
          k: any = !b,
          g: any = (ds as any) === ((n as any).key as any),
          T: any = k && !g && (ds as any) != (null as any);
        return (f as any) != (null as any) ? ((a as any).jsx as any)(ls, {
          ariaLabel: (o as any)({
            id: "Vvllg0",
            values: {
              0: (n as any).label
            }
          }),
          glyph: "exclamation-circle",
          glyphColor: "danger",
          isBusy: g,
          isDisabled: T,
          label: (n as any).label,
          onClick: (n as any).onAuthorize,
          title: (f as any).detail ?? (o as any)({
            id: "eifFQq"
          }),
          treatment: "account"
        }, (n as any).key) : ((n as any).handoff as any) != (null as any) ? ((Bs as any).createElement as any)(ls, {
          ariaLabel: (o as any)(b ? {
            id: "3jCYwT",
            values: {
              0: (n as any).label
            }
          } : {
            id: "Vvllg0",
            values: {
              0: (n as any).label
            }
          }),
          glyph: b ? "loading" : "exclamation-circle",
          ...(b ? {} : {
            glyphColor: "yellow"
          }),
          isBusy: g,
          isDisabled: T,
          key: (n as any).key,
          label: (n as any).label,
          onClick: b ? ((n as any).handoff as any).onReopen : ((n as any).handoff as any).onRetry,
          title: b ? ((n as any).handoff as any).portConflictDetail ?? (o as any)({
            id: "9EUU+T"
          }) : (((n as any).handoff as any).status as any) === ("openFailed" as any) ? (o as any)({
            id: "Cm4nAb"
          }) : ((n as any).handoff as any).failureDetail ?? ((n as any).handoff as any).portConflictDetail ?? (o as any)({
            id: "0FVrvJ"
          }),
          treatment: "account"
        }) : ((a as any).jsx as any)(ls, {
          ariaLabel: (o as any)({
            id: "t4Dt8N",
            values: {
              0: (n as any).label
            }
          }),
          glyph: "plus",
          isBusy: g,
          isDisabled: T,
          label: (n as any).label,
          onClick: (n as any).onAuthorize,
          title: (n as any).statusLabel,
          treatment: "account"
        }, (n as any).key);
      }), _s ? ((a as any).jsxs as any)("button", {
        className: (t as any)("sand-connector-card__add-account", "sand-3nfvp2 sand-6s0dn4 sand-1ed6fcf sand-vc5jky sand-1nn3v0j sand-1120s5i sand-yiysdx sand-14vy60q sand-jbqb8w sand-ng3xce sand-4b2ntj sand-1xms8e4 sand-1ypdohk sand-1s07b3s sand-1hc1fzr sand-uhm2yv sand-jb2p0i sand-1t137rt sand-t3l3uh sand-1firant sand-wji4o3"),
        disabled: (ds as any) != (null as any),
        onClick: I,
        type: "button",
        children: [((a as any).jsx as any)(C, {
          "aria-hidden": !0,
          name: "plus",
          size: "xs"
        }), ((a as any).jsx as any)("span", {
          className: (t as any)("sand-1wm8ruf sand-1rhlpx6 sand-1heor9g"),
          children: ((a as any).jsx as any)(S, {
            id: "O5JHbm"
          })
        })]
      }) : null]
    })]
  }) : null, (s as any)[85] = o, (s as any)[86] = z, (s as any)[87] = w, (s as any)[88] = ts, (s as any)[89] = I, (s as any)[90] = ds, (s as any)[91] = R, (s as any)[92] = _s, (s as any)[93] = as) : as = (s as any)[93];
  let es: any;
  ((s as any)[94] as any) !== (A as any) || ((s as any)[95] as any) !== (Cs as any) ? (es = Cs ? ((a as any).jsxs as any)((a as any).Fragment, {
    children: [((a as any).jsx as any)("div", {
      "aria-hidden": !0,
      ...Vs
    }), ((a as any).jsxs as any)("div", {
      ...Us,
      children: [(A as any).hasFailed ? ((a as any).jsx as any)(_, {
        color: "secondary",
        role: "alert",
        size: "sm",
        children: ((a as any).jsx as any)(S, {
          id: "Bjts9t"
        })
      }) : null, ((a as any).jsxs as any)("button", {
        ...Ws,
        disabled: (A as any).isBusy,
        onClick: (A as any).onAdd,
        type: "button",
        children: [((a as any).jsx as any)(C, {
          "aria-hidden": !0,
          ...((A as any).isBusy ? {
            modifier: "spin"
          } : {}),
          name: (A as any).isBusy ? "loading" : "plus",
          size: "xs"
        }), ((a as any).jsx as any)("span", {
          ...Gs,
          children: ((a as any).jsx as any)(S, {
            id: "bau/Kl"
          })
        })]
      })]
    })]
  }) : null, (s as any)[94] = A, (s as any)[95] = Cs, (s as any)[96] = es) : es = (s as any)[96];
  let ns: any;
  ((s as any)[97] as any) !== (K as any) || ((s as any)[98] as any) !== (ks as any) || ((s as any)[99] as any) !== (zs as any) || ((s as any)[100] as any) !== (rs as any) ? (ns = zs ? ((a as any).jsxs as any)((a as any).Fragment, {
    children: [((a as any).jsx as any)("div", {
      "aria-hidden": !0,
      className: (t as any)("sand-connector-card__divider", "sand-jm9jq1 sand-18xomjl sand-bcz3fp sand-iw1gut")
    }), ((a as any).jsx as any)(As, {
      chrome: K,
      onBrowseMore: ks,
      suggestions: rs
    })]
  }) : null, (s as any)[97] = K, (s as any)[98] = ks, (s as any)[99] = zs, (s as any)[100] = rs, (s as any)[101] = ns) : ns = (s as any)[101];
  let xs: any;
  return ((s as any)[102] as any) !== (Q as any) || ((s as any)[103] as any) !== (Y as any) || ((s as any)[104] as any) !== (ss as any) || ((s as any)[105] as any) !== (as as any) || ((s as any)[106] as any) !== (es as any) || ((s as any)[107] as any) !== (ns as any) || ((s as any)[108] as any) !== (qs as any) || ((s as any)[109] as any) !== (F as any) ? (xs = ((a as any).jsxs as any)("article", {
    "aria-busy": qs,
    "aria-labelledby": F,
    className: ms,
    children: [Q, Y, ss, as, es, ns]
  }), (s as any)[102] = Q, (s as any)[103] = Y, (s as any)[104] = ss, (s as any)[105] = as, (s as any)[106] = es, (s as any)[107] = ns, (s as any)[108] = qs, (s as any)[109] = F, (s as any)[110] = xs) : xs = (s as any)[110], xs;
}
export { Xs as C, na as a, gs as b, is as c, ea as e, Ks as f, sa as i, aa as n, Ys as r };
//# debugId=c9d87d1b-ab7d-4b58-9dfd-71f23fa51390
