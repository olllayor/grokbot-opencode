declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "1571d660-520c-4036-a047-52b4ee1c2ba1", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-1571d660-520c-4036-a047-52b4ee1c2ba1");
  } catch (e: any) {}
} as any)();
import { c as y, j as t, T as b, u as B, p as $, r as L } from "./index.eager-vendor-Qbf9YA6n.js";
import { cq as ee, a_ as T, a$ as E, h as W, cr as ne, s as se } from "./index.eager-app-Cj5f8Gby.js";
import { aY as ae } from "./index.eager-platform-Dcfeegfw.js";
import { x as I, z as V, L as te, q as de, I as F, P as ie } from "./index-ZYxf-aBb.js";
import { T as le } from "./chunk-team-setup-pills-7uDu4vf1.js";
function qe(this: any, d: any, e: any): any {
  return (d as any) === ("loading" as any) ? {
    kind: "loading"
  } : (d as any) === ("failed" as any) ? {
    kind: "failed"
  } : (e as any) === (0 as any) ? {
    kind: "empty"
  } : {
    kind: "count",
    count: e
  };
}
function ze(this: any, {
  isPublished: d,
  isPublishable: e
}: any): any {
  return d ? "published" : (e as any) === (null as any) ? null : e ? "ready" : "not_ready";
}
function ce(this: any, d: any): any {
  switch ((d as any).kind) {
    case "installing":
      return "connecting";
    case "updating":
      return "updating";
    case "disconnecting":
      return "removing";
    case "pending_admin_approval":
    case "pending_reinstall_approval":
      return (d as any).approvalRequestFiled ? "pending" : "request_unsent";
    case "approval_denied":
      return "declined";
    case "connected":
      return ((d as any).needsManifestUpdate as any) === (!0 as any) ? "needs_update" : "connected";
    case "removed_in_slack":
      return "removed";
    case "recreate_required":
      return "failed";
    case "connection_lost":
    case "workspace_mismatch":
      return "reconnect";
    case "loading":
    case "unavailable":
    case "not_connected":
    case "ready":
    case "choose_workspace":
    case "awaiting_workspace":
    case "reconnect_required":
    case "cursor_approval_required":
    case "connect_failed":
    case "blocked":
    case "failed":
      return null;
  }
}
function oe(this: any, d: any): any {
  switch ((d as any).kind) {
    case "awaiting_workspace":
      return (((d as any).intent as any).kind as any) === ("install" as any) ? "connecting" : null;
    case "reconnect_required":
      return (((d as any).intent as any).kind as any) === ("install" as any) ? "reconnect" : null;
    case "cursor_approval_required":
      return (((d as any).intent as any).kind as any) === ("install" as any) ? "failed" : null;
    case "connect_failed":
      return (((d as any).intent as any).kind as any) === ("install" as any) && ((d as any).failure as any) !== ("cancelled" as any) ? "failed" : null;
    case "blocked":
    case "failed":
      return (((d as any).retry as any).kind as any) === ("install_app" as any) || (((d as any).retry as any).kind as any) === ("move_app" as any) ? "failed" : null;
    case "loading":
    case "unavailable":
    case "not_connected":
    case "ready":
    case "choose_workspace":
    case "installing":
    case "pending_admin_approval":
    case "pending_reinstall_approval":
    case "approval_denied":
    case "connected":
    case "updating":
    case "disconnecting":
    case "recreate_required":
    case "connection_lost":
    case "workspace_mismatch":
    case "removed_in_slack":
      return null;
  }
}
function re(this: any, d: any): any {
  return (d as any) === ("connected" as any) || (d as any) === ("needs_update" as any);
}
function Se(this: any, {
  serverStatus: d,
  isPublished: e,
  isAutoUpdating: s,
  step: n
}: any): any {
  if (!e) return "not_published";
  if (s) return "updating";
  if ((n as any) == (null as any)) return d;
  const a: any = (re as any)(d) ? null : (oe as any)(n);
  return (ce as any)(n) ?? a ?? d;
}
function ue(this: any, d: any): any {
  return (d as any) === ("connecting" as any) || (d as any) === ("updating" as any) || (d as any) === ("removing" as any);
}
const me: number = 24,
  x: any = {
    slackTitle: {
      kogj98: "sand-1ghz6dp",
      kMwMTN: "sand-tyxrsu",
      $$css: !0
    },
    slackText: {
      kogj98: "sand-1ghz6dp",
      kMwMTN: "sand-1o0liin",
      $$css: !0
    },
    slackChevron: {
      kmuXW: "sand-2lah0s",
      kMwMTN: "sand-1o0liin",
      $$css: !0
    },
    detailsRow: {
      kAzted: "sand-3sc9yq",
      kZKoxP: "sand-t7dq6l",
      kLKAdn: "sand-889kno",
      kwRFfy: "sand-2vl965",
      kGO01o: "sand-1a8lsjc",
      kZCmMZ: "sand-e2zdcy",
      $$css: !0
    },
    rowChevron: {
      kmuXW: "sand-2lah0s",
      $$css: !0
    },
    listIntro: {
      keoZOQ: "sand-dj266r",
      k71WvV: "sand-14z9mp",
      k1K539: "sand-1yztbdb",
      keTefX: "sand-1lziwak",
      k9WMMc: "sand-2b8uid",
      kMwMTN: "sand-1o0liin",
      $$css: !0
    },
    ghostCancel: {
      kGVxlE: "sand-1gnnqk1",
      kMwMTN: "sand-1o0liin",
      $$css: !0
    },
    listCount: {
      keoZOQ: "sand-dj266r",
      k71WvV: "sand-14z9mp",
      k1K539: "sand-1e56ztr",
      keTefX: "sand-1lziwak",
      kMwMTN: "sand-1o0liin",
      $$css: !0
    },
    manageName: {
      kzQI83: "sand-1iyjqo2",
      k7Eaqz: "sand-euugli",
      kVQacm: "sand-b3r6kr",
      kg5iWk: "sand-lyipyv",
      khDVqt: "sand-uxw1ft",
      $$css: !0
    },
    manageDescription: {
      k1xSpc: "sand-104kibb",
      kgKLqz: "sand-1ua5tub",
      kJFfOR: "sand-1h7i4cw",
      kdZRtv: "sand-1l13ptj",
      kVQacm: "sand-b3r6kr",
      kMwMTN: "sand-1o0liin",
      kHjlTd: "sand-j0a0fe",
      $$css: !0
    },
    manageRemove: {
      kVAEAm: "sand-1n2onr6",
      kY2c9j: "sand-1vjfegm",
      kSiTet: "sand-g01cxk sand-25t5g8",
      kMwMTN: "sand-1o0liin",
      $$css: !0
    },
    manageRemoveVisible: {
      kSiTet: "sand-1hc1fzr",
      $$css: !0
    },
    actionBar: {
      kLKAdn: "sand-889kno",
      kGO01o: "sand-sag5q8",
      kEafiO: "sand-1hc762m",
      kPef9Z: "sand-13fuv20",
      kLZC3w: "sand-t8lcch",
      $$css: !0
    }
  };
function K(this: any, d: any): any {
  (K as any).d = 997;
  const e: any = ((y as any).c as any)(2),
    {
      children: s
    }: any = d;
  let n: any;
  return ((e as any)[0] as any) !== (s as any) ? (n = ((t as any).jsx as any)((I as any).ActionBar, {
    style: (x as any).actionBar,
    children: s
  }), (e as any)[0] = s, (e as any)[1] = n) : n = (e as any)[1], n;
}
function U(this: any, d: any): any {
  (U as any).d = 999;
  const e: any = ((y as any).c as any)(9),
    {
      children: s,
      surface: n
    }: any = d,
    a: any = (n as any) === (void 0 as any) ? "filled" : n;
  let l: any, c: any;
  if (((e as any)[0] as any) !== (s as any) || ((e as any)[1] as any) !== (a as any)) {
    const o: any = (((L as any).Children as any).toArray as any)(s);
    ((e as any)[4] as any) !== (a as any) ? (l = ({
      0: {
        className: "sand-78zum5 sand-dt5ytf sand-euugli sand-1iorvi4 sand-11lfxj5 sand-jkvuk6 sand-135b78x sand-hojbe8 sand-1b8i4yy sand-b3r6kr"
      },
      1: {
        className: "sand-78zum5 sand-dt5ytf sand-euugli sand-1iorvi4 sand-11lfxj5 sand-jkvuk6 sand-135b78x sand-hojbe8 sand-b3r6kr sand-4hv7ue sand-1y0btm7 sand-fnq37j sand-jbqb8w"
      }
    } as any)[(((a as any) === ("outlined" as any)) as any) << (0 as any)], (e as any)[4] = a, (e as any)[5] = l) : l = (e as any)[5], c = ((o as any).map as any)(fe), (e as any)[0] = s, (e as any)[1] = a, (e as any)[2] = l, (e as any)[3] = c;
  } else l = (e as any)[2], c = (e as any)[3];
  let i: any;
  return ((e as any)[6] as any) !== (l as any) || ((e as any)[7] as any) !== (c as any) ? (i = ((t as any).jsx as any)("div", {
    ...l,
    children: c
  }), (e as any)[6] = l, (e as any)[7] = c, (e as any)[8] = i) : i = (e as any)[8], i;
}
function fe(this: any, d: any, e: any): any {
  return ((t as any).jsxs as any)((L as any).Fragment, {
    children: [(e as any) > (0 as any) ? ((t as any).jsx as any)("div", {
      className: "sand-f159sx sand-mzvs34",
      children: ((t as any).jsx as any)(se, {})
    }) : null, d]
  }, e);
}
function X(this: any, d: any): any {
  (X as any).d = 1e3;
  const e: any = ((y as any).c as any)(21),
    {
      label: s,
      icon: n,
      leading: a,
      status: l,
      isDisabled: c,
      onOpen: i,
      paneKey: o
    }: any = d,
    r: any = (c as any) === (void 0 as any) ? !1 : c,
    u: any = r || (i as any) == (null as any);
  let f: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = {
    className: "sand-78zum5 sand-6s0dn4 sand-13a6bvl sand-17d4w8g sand-1iyjqo2 sand-s83m0k sand-1r8uery sand-euugli sand-b3r6kr"
  }, (e as any)[0] = f) : f = (e as any)[0];
  let g: any;
  ((e as any)[1] as any) !== (l as any) ? (g = ((t as any).jsx as any)(de, {
    size: "body",
    children: l
  }), (e as any)[1] = l, (e as any)[2] = g) : g = (e as any)[2];
  let h: any;
  ((e as any)[3] as any) !== (r as any) || ((e as any)[4] as any) !== (i as any) ? (h = (i as any) == (null as any) || r ? null : ((t as any).jsx as any)(F, {
    "aria-hidden": !0,
    name: "chevron-right",
    size: "xs",
    style: (x as any).rowChevron
  }), (e as any)[3] = r, (e as any)[4] = i, (e as any)[5] = h) : h = (e as any)[5];
  let k: any;
  ((e as any)[6] as any) !== (g as any) || ((e as any)[7] as any) !== (h as any) ? (k = ((t as any).jsxs as any)("span", {
    ...f,
    children: [g, h]
  }), (e as any)[6] = g, (e as any)[7] = h, (e as any)[8] = k) : k = (e as any)[8];
  let p: any;
  ((e as any)[9] as any) !== (n as any) ? (p = (n as any) == (null as any) ? {} : {
    icon: n
  }, (e as any)[9] = n, (e as any)[10] = p) : p = (e as any)[10];
  let m: any;
  ((e as any)[11] as any) !== (a as any) ? (m = (a as any) == (null as any) ? {} : {
    leading: a
  }, (e as any)[11] = a, (e as any)[12] = m) : m = (e as any)[12];
  let j: any;
  return ((e as any)[13] as any) !== (s as any) || ((e as any)[14] as any) !== (i as any) || ((e as any)[15] as any) !== (o as any) || ((e as any)[16] as any) !== (u as any) || ((e as any)[17] as any) !== (k as any) || ((e as any)[18] as any) !== (p as any) || ((e as any)[19] as any) !== (m as any) ? (j = ((t as any).jsx as any)(te, {
    "data-details-pane": o,
    disabled: u,
    label: s,
    size: "lg",
    style: (x as any).detailsRow,
    onClick: i,
    trailing: k,
    ...p,
    ...m
  }), (e as any)[13] = s, (e as any)[14] = i, (e as any)[15] = o, (e as any)[16] = u, (e as any)[17] = k, (e as any)[18] = p, (e as any)[19] = m, (e as any)[20] = j) : j = (e as any)[20], j;
}
function he(this: any, d: any): any {
  (he as any).d = 1004;
  const e: any = ((y as any).c as any)(8),
    {
      name: s,
      pluginId: n,
      resolve: a
    }: any = d;
  let l: any;
  ((e as any)[0] as any) !== (s as any) || ((e as any)[1] as any) !== (n as any) || ((e as any)[2] as any) !== (a as any) ? (l = (a as any)(s) ?? (a as any)(n), (e as any)[0] = s, (e as any)[1] = n, (e as any)[2] = a, (e as any)[3] = l) : l = (e as any)[3];
  const c: any = l,
    i: any = c?.iconId,
    o: any = c?.iconUrl;
  let r: any;
  return ((e as any)[4] as any) !== (s as any) || ((e as any)[5] as any) !== (i as any) || ((e as any)[6] as any) !== (o as any) ? (r = ((t as any).jsx as any)(ie, {
    iconId: i,
    iconUrl: o,
    monoFallback: "plug",
    name: s,
    size: me
  }), (e as any)[4] = s, (e as any)[5] = i, (e as any)[6] = o, (e as any)[7] = r) : r = (e as any)[7], r;
}
function ke(this: any, d: any): any {
  (ke as any).d = 1001;
  const e: any = ((y as any).c as any)(3),
    {
      name: s
    }: any = d;
  let n: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = {
    className: "sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-vy4d1p sand-xk0z11 sand-1o0liin"
  }, (e as any)[0] = n) : n = (e as any)[0];
  let a: any;
  return ((e as any)[1] as any) !== (s as any) ? (a = ((t as any).jsx as any)("span", {
    ...n,
    children: ((t as any).jsx as any)(F, {
      "aria-hidden": !0,
      name: s,
      size: "lg"
    })
  }), (e as any)[1] = s, (e as any)[2] = a) : a = (e as any)[2], a;
}
function G(this: any, d: any): any {
  (G as any).d = 1002;
  const e: any = ((y as any).c as any)(43),
    {
      item: s,
      isPending: n,
      removesWithTrash: a,
      onOpen: l,
      onRemove: c,
      leading: i
    }: any = d,
    {
      _: o
    }: any = (B as any)(),
    [r, u]: any = ((L as any).useState as any)(!1),
    [f, g]: any = ((L as any).useState as any)(!1),
    h: any = r || f,
    k: any = (s as any).title;
  let p: any;
  ((e as any)[0] as any) !== ((s as any).description as any) ? (p = (s as any).description?.trim() ?? "", (e as any)[0] = (s as any).description, (e as any)[1] = p) : p = (e as any)[1];
  const m: any = p;
  let j: any;
  ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (j = ($ as any)((T as any).body1, (E as any).regular, (x as any).manageName), (e as any)[2] = j) : j = (e as any)[2];
  let _: any;
  ((e as any)[3] as any) !== ((s as any).title as any) ? (_ = ((t as any).jsx as any)("span", {
    ...j,
    children: (s as any).title
  }), (e as any)[3] = (s as any).title, (e as any)[4] = _) : _ = (e as any)[4];
  const w: any = _;
  let v: any;
  ((e as any)[5] as any) !== (m as any) || ((e as any)[6] as any) !== (w as any) ? (v = ((m as any).length as any) === (0 as any) ? w : ((t as any).jsxs as any)("span", {
    className: "sand-78zum5 sand-dt5ytf sand-1iyjqo2 sand-euugli",
    children: [w, ((t as any).jsx as any)("span", {
      ...($ as any)((T as any).body2, (x as any).manageDescription),
      children: m
    })]
  }), (e as any)[5] = m, (e as any)[6] = w, (e as any)[7] = v) : v = (e as any)[7];
  let C: any;
  ((e as any)[8] as any) !== (i as any) || ((e as any)[9] as any) !== (v as any) ? (C = ((t as any).jsxs as any)((t as any).Fragment, {
    children: [i, v]
  }), (e as any)[8] = i, (e as any)[9] = v, (e as any)[10] = C) : C = (e as any)[10];
  const M: any = C;
  let q: any;
  ((e as any)[11] as any) !== ((m as any).length as any) ? (q = ({
    0: {
      className: "sand-1n2onr6 sand-78zum5 sand-6s0dn4 sand-167g77z sand-9f619 sand-euugli sand-c9qbxq sand-u0aao5 sand-1yrsyyn sand-f159sx sand-10b6aqq sand-mzvs34 sand-1qmwy7c sand-jbqb8w sand-aalx5g"
    },
    1: {
      className: "sand-1n2onr6 sand-78zum5 sand-6s0dn4 sand-167g77z sand-9f619 sand-euugli sand-u0aao5 sand-f159sx sand-mzvs34 sand-1qmwy7c sand-jbqb8w sand-aalx5g sand-t7dq6l sand-1y1aw1k sand-wib8y2"
    }
  } as any)[(((m as any).length as any) > (0 as any) as any) << (0 as any)], (e as any)[11] = (m as any).length, (e as any)[12] = q) : q = (e as any)[12];
  let R: any, A: any, O: any, P: any;
  ((e as any)[13] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (A = (Z: any): any => {
    (((Z as any).currentTarget as any).contains as any)((Z as any).relatedTarget) || (g as any)(!1);
  }, O = (): any => (g as any)(!0), P = (): any => (u as any)(!0), R = (): any => (u as any)(!1), (e as any)[13] = R, (e as any)[14] = A, (e as any)[15] = O, (e as any)[16] = P) : (R = (e as any)[13], A = (e as any)[14], O = (e as any)[15], P = (e as any)[16]);
  let z: any;
  ((e as any)[17] as any) !== (o as any) || ((e as any)[18] as any) !== ((s as any).key as any) || ((e as any)[19] as any) !== (M as any) || ((e as any)[20] as any) !== (k as any) || ((e as any)[21] as any) !== (l as any) ? (z = (l as any) == (null as any) ? M : ((t as any).jsx as any)("button", {
    "aria-label": (o as any)({
      id: "T9mwDN",
      values: {
        name: k
      }
    }),
    onClick: (): any => (l as any)((s as any).key),
    type: "button",
    className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-1iyjqo2 sand-euugli sand-1717udv sand-c342km sand-jbqb8w sand-1heor9g sand-jb2p0i sand-1yc453h sand-1ypdohk sand-1t137rt sand-1s928wv sand-1j6awrg sand-arstr8 sand-7cl8nr sand-9cqkzs",
    children: M
  }), (e as any)[17] = o, (e as any)[18] = (s as any).key, (e as any)[19] = M, (e as any)[20] = k, (e as any)[21] = l, (e as any)[22] = z) : z = (e as any)[22];
  let S: any;
  ((e as any)[23] as any) !== (h as any) || ((e as any)[24] as any) !== (n as any) || ((e as any)[25] as any) !== ((s as any).key as any) || ((e as any)[26] as any) !== ((s as any).title as any) || ((e as any)[27] as any) !== (c as any) || ((e as any)[28] as any) !== (a as any) ? (S = (c as any) != (null as any) && a ? ((t as any).jsx as any)("span", {
    className: "sand-1n2onr6 sand-1vjfegm sand-3nfvp2 sand-2lah0s",
    children: ((t as any).jsx as any)(le, {
      disabled: n,
      name: (s as any).title,
      onDelete: (): any => (c as any)((s as any).key),
      showsTrash: h
    })
  }) : null, (e as any)[23] = h, (e as any)[24] = n, (e as any)[25] = (s as any).key, (e as any)[26] = (s as any).title, (e as any)[27] = c, (e as any)[28] = a, (e as any)[29] = S) : S = (e as any)[29];
  let N: any;
  ((e as any)[30] as any) !== (o as any) || ((e as any)[31] as any) !== (h as any) || ((e as any)[32] as any) !== (n as any) || ((e as any)[33] as any) !== ((s as any).key as any) || ((e as any)[34] as any) !== ((s as any).title as any) || ((e as any)[35] as any) !== (c as any) || ((e as any)[36] as any) !== (a as any) ? (N = (c as any) == (null as any) || a ? null : ((t as any).jsx as any)(V, {
    "aria-label": (o as any)({
      id: "w61W3L",
      values: {
        0: (s as any).title
      }
    }),
    disabled: n,
    onClick: (): any => (c as any)((s as any).key),
    size: "sm",
    style: [(x as any).manageRemove, h && (x as any).manageRemoveVisible],
    type: "button",
    variant: "tertiary",
    children: ((t as any).jsx as any)(b, {
      id: "t/YqKh"
    })
  }), (e as any)[30] = o, (e as any)[31] = h, (e as any)[32] = n, (e as any)[33] = (s as any).key, (e as any)[34] = (s as any).title, (e as any)[35] = c, (e as any)[36] = a, (e as any)[37] = N) : N = (e as any)[37];
  let D: any;
  return ((e as any)[38] as any) !== (z as any) || ((e as any)[39] as any) !== (S as any) || ((e as any)[40] as any) !== (N as any) || ((e as any)[41] as any) !== (q as any) ? (D = ((t as any).jsxs as any)("div", {
    ...q,
    onBlur: A,
    onFocus: O,
    onMouseEnter: P,
    onMouseLeave: R,
    children: [z, S, N]
  }), (e as any)[38] = z, (e as any)[39] = S, (e as any)[40] = N, (e as any)[41] = q, (e as any)[42] = D) : D = (e as any)[42], D;
}
function pe(this: any, d: any): any {
  (pe as any).d = 1003;
  const e: any = ((y as any).c as any)(33),
    {
      items: s,
      intro: n,
      actions: a,
      leadingOf: l,
      removesWithTrash: c
    }: any = d,
    i: any = (c as any) === (void 0 as any) ? !1 : c,
    {
      _: o
    }: any = (B as any)();
  let r: any, u: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (r = {
    className: "sand-78zum5 sand-dt5ytf sand-euugli"
  }, u = ($ as any)((T as any).body2, (x as any).listIntro), (e as any)[0] = r, (e as any)[1] = u) : (r = (e as any)[0], u = (e as any)[1]);
  let f: any;
  ((e as any)[2] as any) !== (n as any) ? (f = ((t as any).jsx as any)("p", {
    ...u,
    children: n
  }), (e as any)[2] = n, (e as any)[3] = f) : f = (e as any)[3];
  let g: any;
  ((e as any)[4] as any) !== ((a as any).dropZone as any) ? (g = ((a as any).dropZone as any) == (null as any) ? null : ((t as any).jsx as any)("div", {
    className: "sand-1yztbdb",
    children: (a as any).dropZone
  }), (e as any)[4] = (a as any).dropZone, (e as any)[5] = g) : g = (e as any)[5];
  let h: any;
  ((e as any)[6] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (h = ($ as any)((T as any).body2, (x as any).listCount), (e as any)[6] = h) : h = (e as any)[6];
  let k: any;
  ((e as any)[7] as any) !== (o as any) || ((e as any)[8] as any) !== ((s as any).length as any) ? (k = ((s as any).length as any) === (0 as any) ? ((t as any).jsx as any)(b, {
    id: "Vq6/r4"
  }) : (o as any)({
    id: "kRr3s3",
    values: {
      0: (s as any).length
    }
  }), (e as any)[7] = o, (e as any)[8] = (s as any).length, (e as any)[9] = k) : k = (e as any)[9];
  let p: any;
  ((e as any)[10] as any) !== (k as any) ? (p = ((t as any).jsx as any)("p", {
    ...h,
    children: k
  }), (e as any)[10] = k, (e as any)[11] = p) : p = (e as any)[11];
  let m: any;
  if (((e as any)[12] as any) !== ((a as any).isPending as any) || ((e as any)[13] as any) !== ((a as any).onOpen as any) || ((e as any)[14] as any) !== ((a as any).onRemove as any) || ((e as any)[15] as any) !== (s as any) || ((e as any)[16] as any) !== (l as any) || ((e as any)[17] as any) !== (i as any)) {
    let w: any;
    ((e as any)[19] as any) !== ((a as any).isPending as any) || ((e as any)[20] as any) !== ((a as any).onOpen as any) || ((e as any)[21] as any) !== ((a as any).onRemove as any) || ((e as any)[22] as any) !== (l as any) || ((e as any)[23] as any) !== (i as any) ? (w = (v: any): any => ((t as any).jsx as any)(G, {
      isPending: ((a as any).isPending as any) === (!0 as any),
      item: v,
      leading: l?.(v) ?? null,
      removesWithTrash: i,
      ...(((a as any).onOpen as any) == (null as any) ? {} : {
        onOpen: (a as any).onOpen
      }),
      ...(((a as any).onRemove as any) == (null as any) ? {} : {
        onRemove: (a as any).onRemove
      })
    }, (v as any).key), (e as any)[19] = (a as any).isPending, (e as any)[20] = (a as any).onOpen, (e as any)[21] = (a as any).onRemove, (e as any)[22] = l, (e as any)[23] = i, (e as any)[24] = w) : w = (e as any)[24], m = ((s as any).map as any)(w), (e as any)[12] = (a as any).isPending, (e as any)[13] = (a as any).onOpen, (e as any)[14] = (a as any).onRemove, (e as any)[15] = s, (e as any)[16] = l, (e as any)[17] = i, (e as any)[18] = m;
  } else m = (e as any)[18];
  let j: any;
  ((e as any)[25] as any) !== ((a as any).writeFailed as any) ? (j = ((a as any).writeFailed as any) === (!0 as any) ? ((t as any).jsx as any)("div", {
    className: "sand-1y1aw1k sand-f159sx sand-18d9i69 sand-mzvs34",
    children: ((t as any).jsx as any)(ae, {
      as: "p",
      color: "red",
      role: "alert",
      size: "sm",
      children: ((t as any).jsx as any)(b, {
        id: "D2AZQg"
      })
    })
  }) : null, (e as any)[25] = (a as any).writeFailed, (e as any)[26] = j) : j = (e as any)[26];
  let _: any;
  return ((e as any)[27] as any) !== (j as any) || ((e as any)[28] as any) !== (f as any) || ((e as any)[29] as any) !== (g as any) || ((e as any)[30] as any) !== (p as any) || ((e as any)[31] as any) !== (m as any) ? (_ = ((t as any).jsxs as any)("div", {
    ...r,
    children: [f, g, p, m, j]
  }), (e as any)[27] = j, (e as any)[28] = f, (e as any)[29] = g, (e as any)[30] = p, (e as any)[31] = m, (e as any)[32] = _) : _ = (e as any)[32], _;
}
function Q(this: any, d: any): any {
  (Q as any).d = 998;
  const e: any = ((y as any).c as any)(6),
    {
      onClick: s,
      disabled: n,
      label: a
    }: any = d,
    l: any = (n as any) === (void 0 as any) ? !1 : n;
  let c: any;
  ((e as any)[0] as any) !== (a as any) ? (c = a ?? ((t as any).jsx as any)(b, {
    id: "dEgA5A"
  }), (e as any)[0] = a, (e as any)[1] = c) : c = (e as any)[1];
  let i: any;
  return ((e as any)[2] as any) !== (l as any) || ((e as any)[3] as any) !== (s as any) || ((e as any)[4] as any) !== (c as any) ? (i = ((t as any).jsx as any)((I as any).Action, {
    disabled: l,
    onClick: s,
    style: (x as any).ghostCancel,
    variant: "tertiary",
    children: c
  }), (e as any)[2] = l, (e as any)[3] = s, (e as any)[4] = c, (e as any)[5] = i) : i = (e as any)[5], i;
}
function ge(this: any, d: any): any {
  (ge as any).d = 996;
  const e: any = ((y as any).c as any)(10),
    {
      onAddMore: s,
      onCancel: n,
      label: a,
      variant: l
    }: any = d,
    c: any = (l as any) === (void 0 as any) ? "secondary" : l;
  let i: any;
  ((e as any)[0] as any) !== (n as any) ? (i = (n as any) == (null as any) ? null : ((t as any).jsx as any)(Q, {
    onClick: n
  }), (e as any)[0] = n, (e as any)[1] = i) : i = (e as any)[1];
  let o: any;
  ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (o = ((t as any).jsx as any)((I as any).ActionSpacer, {}), (e as any)[2] = o) : o = (e as any)[2];
  let r: any;
  ((e as any)[3] as any) !== (a as any) || ((e as any)[4] as any) !== (s as any) || ((e as any)[5] as any) !== (c as any) ? (r = ((t as any).jsx as any)((I as any).Action, {
    onClick: s,
    variant: c,
    children: a
  }), (e as any)[3] = a, (e as any)[4] = s, (e as any)[5] = c, (e as any)[6] = r) : r = (e as any)[6];
  let u: any;
  return ((e as any)[7] as any) !== (i as any) || ((e as any)[8] as any) !== (r as any) ? (u = ((t as any).jsxs as any)(K, {
    children: [i, o, r]
  }), (e as any)[7] = i, (e as any)[8] = r, (e as any)[9] = u) : u = (e as any)[9], u;
}
function H(this: any, d: any): any {
  (H as any).d = 1008;
  const e: any = ((y as any).c as any)(13),
    {
      status: s
    }: any = d;
  switch (s) {
    case "none":
      {
        let n: any;
        return ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = ((t as any).jsx as any)(b, {
          id: "iSLIjg"
        }), (e as any)[0] = n) : n = (e as any)[0], n;
      }
    case "request_unsent":
      {
        let n: any;
        return ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = ((t as any).jsx as any)(b, {
          id: "w3griw"
        }), (e as any)[1] = n) : n = (e as any)[1], n;
      }
    case "pending":
      {
        let n: any;
        return ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = ((t as any).jsx as any)(b, {
          id: "a+Esqm"
        }), (e as any)[2] = n) : n = (e as any)[2], n;
      }
    case "declined":
      {
        let n: any;
        return ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = ((t as any).jsx as any)(b, {
          id: "vE/BXC"
        }), (e as any)[3] = n) : n = (e as any)[3], n;
      }
    case "connected":
      {
        let n: any;
        return ((e as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = ((t as any).jsx as any)(b, {
          id: "QHcLEN"
        }), (e as any)[4] = n) : n = (e as any)[4], n;
      }
    case "needs_update":
      {
        let n: any;
        return ((e as any)[5] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = ((t as any).jsx as any)(b, {
          id: "M/YmjX"
        }), (e as any)[5] = n) : n = (e as any)[5], n;
      }
    case "updating":
      {
        let n: any;
        return ((e as any)[6] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = ((t as any).jsx as any)(b, {
          id: "Jqe+Dc"
        }), (e as any)[6] = n) : n = (e as any)[6], n;
      }
    case "not_published":
      {
        let n: any;
        return ((e as any)[7] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = ((t as any).jsx as any)(b, {
          id: "rDxVOJ"
        }), (e as any)[7] = n) : n = (e as any)[7], n;
      }
    case "connecting":
      {
        let n: any;
        return ((e as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = ((t as any).jsx as any)(b, {
          id: "JrFTcr"
        }), (e as any)[8] = n) : n = (e as any)[8], n;
      }
    case "failed":
      {
        let n: any;
        return ((e as any)[9] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = ((t as any).jsx as any)(b, {
          id: "FGWsd4"
        }), (e as any)[9] = n) : n = (e as any)[9], n;
      }
    case "reconnect":
      {
        let n: any;
        return ((e as any)[10] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = ((t as any).jsx as any)(b, {
          id: "XsIxsL"
        }), (e as any)[10] = n) : n = (e as any)[10], n;
      }
    case "removed":
      {
        let n: any;
        return ((e as any)[11] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = ((t as any).jsx as any)(b, {
          id: "N1pR+j"
        }), (e as any)[11] = n) : n = (e as any)[11], n;
      }
    case "removing":
      {
        let n: any;
        return ((e as any)[12] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = ((t as any).jsx as any)(b, {
          id: "APfagk"
        }), (e as any)[12] = n) : n = (e as any)[12], n;
      }
  }
}
function J(this: any, d: any): any {
  (J as any).d = 1006;
  const e: any = ((y as any).c as any)(13),
    {
      paneKey: s,
      surface: n,
      onOpen: a
    }: any = d,
    l: any = (n as any) === ("outlined" as any),
    c: any = (a as any) == (null as any);
  let i: any;
  ((e as any)[0] as any) !== (l as any) || ((e as any)[1] as any) !== (a as any) ? (i = ({
    0: {
      className: "sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-h8yej3 sand-9f619 sand-yinxu5 sand-1pic42t sand-1g2khh7 sand-1onr9mi sand-c342km sand-hojbe8 sand-1b8i4yy sand-10sgm2k sand-1heor9g sand-jb2p0i sand-1yc453h sand-1ypdohk"
    },
    4: {
      className: "sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-h8yej3 sand-9f619 sand-yinxu5 sand-1pic42t sand-1g2khh7 sand-1onr9mi sand-c342km sand-hojbe8 sand-1heor9g sand-jb2p0i sand-1yc453h sand-1b8i4yy sand-urtx8w sand-t0e3qv"
    },
    2: {
      className: "sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-h8yej3 sand-9f619 sand-yinxu5 sand-1pic42t sand-1g2khh7 sand-1onr9mi sand-hojbe8 sand-1heor9g sand-jb2p0i sand-1yc453h sand-1ypdohk sand-4hv7ue sand-1y0btm7 sand-fnq37j sand-jbqb8w sand-aalx5g"
    },
    6: {
      className: "sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-h8yej3 sand-9f619 sand-yinxu5 sand-1pic42t sand-1g2khh7 sand-1onr9mi sand-hojbe8 sand-1heor9g sand-jb2p0i sand-1yc453h sand-t0e3qv sand-4hv7ue sand-1y0btm7 sand-fnq37j sand-jbqb8w sand-aalx5g"
    },
    1: {
      className: "sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-h8yej3 sand-9f619 sand-yinxu5 sand-1pic42t sand-1g2khh7 sand-1onr9mi sand-c342km sand-hojbe8 sand-1heor9g sand-jb2p0i sand-1yc453h sand-1ypdohk sand-jbqb8w sand-1n5bzlp"
    },
    5: {
      className: "sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-h8yej3 sand-9f619 sand-yinxu5 sand-1pic42t sand-1g2khh7 sand-1onr9mi sand-c342km sand-hojbe8 sand-1heor9g sand-jb2p0i sand-1yc453h sand-t0e3qv sand-jbqb8w sand-1n5bzlp"
    },
    3: {
      className: "sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-h8yej3 sand-9f619 sand-yinxu5 sand-1pic42t sand-1g2khh7 sand-1onr9mi sand-hojbe8 sand-1heor9g sand-jb2p0i sand-1yc453h sand-1ypdohk sand-4hv7ue sand-1y0btm7 sand-fnq37j sand-jbqb8w sand-1n5bzlp"
    },
    7: {
      className: "sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-h8yej3 sand-9f619 sand-yinxu5 sand-1pic42t sand-1g2khh7 sand-1onr9mi sand-hojbe8 sand-1heor9g sand-jb2p0i sand-1yc453h sand-t0e3qv sand-4hv7ue sand-1y0btm7 sand-fnq37j sand-jbqb8w sand-1n5bzlp"
    }
  } as any)[((((((a as any) == (null as any)) as any) << (2 as any) as any) | ((!!l as any) << (1 as any) as any)) as any) | ((!!(l && (a as any) == (null as any)) as any) << (0 as any) as any)], (e as any)[0] = l, (e as any)[1] = a, (e as any)[2] = i) : i = (e as any)[2];
  let o: any, r: any;
  ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (o = ((t as any).jsx as any)("span", {
    className: "sand-qcrz7y sand-2lah0s sand-4p5aij",
    children: ((t as any).jsx as any)(W, {
      sizePx: 20
    })
  }), r = ((t as any).jsxs as any)("span", {
    className: "sand-78zum5 sand-dt5ytf sand-195vfkc sand-1iyjqo2 sand-euugli",
    children: [((t as any).jsx as any)("span", {
      ...($ as any)((T as any).body1, (E as any).regular, (x as any).slackTitle),
      children: ((t as any).jsx as any)(b, {
        id: "CVtI2N"
      })
    }), ((t as any).jsx as any)("span", {
      ...($ as any)((T as any).body2, (x as any).slackText),
      children: ((t as any).jsx as any)(b, {
        id: "qNfVdp"
      })
    })]
  }), (e as any)[3] = o, (e as any)[4] = r) : (o = (e as any)[3], r = (e as any)[4]);
  let u: any;
  ((e as any)[5] as any) !== (a as any) ? (u = (a as any) == (null as any) ? null : ((t as any).jsx as any)(F, {
    "aria-hidden": !0,
    name: "chevron-right",
    size: "xs",
    style: (x as any).slackChevron
  }), (e as any)[5] = a, (e as any)[6] = u) : u = (e as any)[6];
  let f: any;
  return ((e as any)[7] as any) !== (a as any) || ((e as any)[8] as any) !== (s as any) || ((e as any)[9] as any) !== (c as any) || ((e as any)[10] as any) !== (i as any) || ((e as any)[11] as any) !== (u as any) ? (f = ((t as any).jsxs as any)("button", {
    "data-details-pane": s,
    disabled: c,
    onClick: a,
    type: "button",
    ...i,
    children: [o, r, u]
  }), (e as any)[7] = a, (e as any)[8] = s, (e as any)[9] = c, (e as any)[10] = i, (e as any)[11] = u, (e as any)[12] = f) : f = (e as any)[12], f;
}
function Y(this: any): any {
  (Y as any).d = 1005;
  const d: any = ((y as any).c as any)(1);
  let e: any;
  return ((d as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (e = ((t as any).jsx as any)(W, {
    sizePx: 20
  }), (d as any)[0] = e) : e = (d as any)[0], e;
}
function be(this: any, d: any): any {
  (be as any).d = 1007;
  const e: any = ((y as any).c as any)(22),
    {
      status: s,
      paneKey: n,
      surface: a,
      onOpen: l
    }: any = d,
    c: any = (a as any) === (void 0 as any) ? "filled" : a,
    {
      _: i
    }: any = (B as any)();
  let o: any;
  ((e as any)[0] as any) !== (l as any) ? (o = (l as any) == (null as any) ? {} : {
    onOpen: l
  }, (e as any)[0] = l, (e as any)[1] = o) : o = (e as any)[1];
  const r: any = o;
  if ((s as any) === ("none" as any)) {
    let m: any;
    return ((e as any)[2] as any) !== (r as any) || ((e as any)[3] as any) !== (n as any) || ((e as any)[4] as any) !== (c as any) ? (m = ((t as any).jsx as any)(J, {
      paneKey: n,
      surface: c,
      ...r
    }), (e as any)[2] = r, (e as any)[3] = n, (e as any)[4] = c, (e as any)[5] = m) : m = (e as any)[5], m;
  }
  let u: any;
  ((e as any)[6] as any) !== (s as any) ? (u = (s as any) === ("not_published" as any) || (ue as any)(s), (e as any)[6] = s, (e as any)[7] = u) : u = (e as any)[7];
  let f: any;
  ((e as any)[8] as any) !== (i as any) ? (f = (i as any)({
    id: "lyjq5X"
  }), (e as any)[8] = i, (e as any)[9] = f) : f = (e as any)[9];
  let g: any;
  ((e as any)[10] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (g = ((t as any).jsx as any)(Y, {}), (e as any)[10] = g) : g = (e as any)[10];
  let h: any;
  ((e as any)[11] as any) !== (s as any) ? (h = ((t as any).jsx as any)(H, {
    status: s
  }), (e as any)[11] = s, (e as any)[12] = h) : h = (e as any)[12];
  let k: any;
  ((e as any)[13] as any) !== (r as any) || ((e as any)[14] as any) !== (n as any) || ((e as any)[15] as any) !== (u as any) || ((e as any)[16] as any) !== (f as any) || ((e as any)[17] as any) !== (h as any) ? (k = ((t as any).jsx as any)(X, {
    isDisabled: u,
    label: f,
    leading: g,
    paneKey: n,
    status: h,
    ...r
  }), (e as any)[13] = r, (e as any)[14] = n, (e as any)[15] = u, (e as any)[16] = f, (e as any)[17] = h, (e as any)[18] = k) : k = (e as any)[18];
  let p: any;
  return ((e as any)[19] as any) !== (c as any) || ((e as any)[20] as any) !== (k as any) ? (p = ((t as any).jsx as any)(U, {
    surface: c,
    children: k
  }), (e as any)[19] = c, (e as any)[20] = k, (e as any)[21] = p) : p = (e as any)[21], p;
}
function je(this: any, d: any): any {
  (je as any).d = 1009;
  const e: any = ((y as any).c as any)(12),
    {
      unpublish: s
    }: any = d,
    {
      _: n
    }: any = (B as any)(),
    a: any = (ee as any)();
  let l: any;
  ((e as any)[0] as any) !== (n as any) || ((e as any)[1] as any) !== (a as any) || ((e as any)[2] as any) !== (s as any) ? (l = async (): Promise<any> => {
    (await (a as any)((ne as any)({
      title: (n as any)({
        id: "MEelZJ"
      }),
      description: (n as any)({
        id: "lgxknF"
      }),
      confirmLabel: (n as any)({
        id: "4DLZUa"
      }),
      cancelLabel: (n as any)({
        id: "dEgA5A"
      })
    }))) && ((s as any).onUnpublish as any)();
  }, (e as any)[0] = n, (e as any)[1] = a, (e as any)[2] = s, (e as any)[3] = l) : l = (e as any)[3];
  const c: any = l;
  let i: any;
  ((e as any)[4] as any) !== (c as any) ? (i = (): any => {
    (c as any)();
  }, (e as any)[4] = c, (e as any)[5] = i) : i = (e as any)[5];
  let o: any;
  ((e as any)[6] as any) !== ((s as any).isPending as any) ? (o = (s as any).isPending ? ((t as any).jsx as any)(b, {
    id: "jvDsYK"
  }) : ((t as any).jsx as any)(b, {
    id: "4DLZUa"
  }), (e as any)[6] = (s as any).isPending, (e as any)[7] = o) : o = (e as any)[7];
  let r: any;
  return ((e as any)[8] as any) !== (i as any) || ((e as any)[9] as any) !== (o as any) || ((e as any)[10] as any) !== ((s as any).isPending as any) ? (r = ((t as any).jsx as any)(V, {
    disabled: (s as any).isPending,
    onClick: i,
    sentiment: "danger",
    size: "lg",
    variant: "tertiary",
    children: o
  }), (e as any)[8] = i, (e as any)[9] = o, (e as any)[10] = (s as any).isPending, (e as any)[11] = r) : r = (e as any)[11], r;
}
export { ge as A, Q as D, pe as M, he as P, je as T, qe as a, Se as b, H as c, be as d, ke as e, K as f, ue as i, ze as t };
//# debugId=1571d660-520c-4036-a047-52b4ee1c2ba1
