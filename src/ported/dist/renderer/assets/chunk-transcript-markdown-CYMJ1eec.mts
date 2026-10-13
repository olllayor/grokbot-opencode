declare var Node: any;
declare var URL: any;
declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "844d7733-0b0b-4668-a0bd-ea018c5bd262", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-844d7733-0b0b-4668-a0bd-ea018c5bd262");
  } catch (e: any) {}
} as any)();
import { c as b, r as _, u as S, j as d, p as v } from "./index.eager-vendor-Qbf9YA6n.js";
import { b7 as J, be as Ke, h4 as We, c_ as ee, cZ as Ge, h5 as Ze, h6 as ne, h7 as Ve, h8 as Xe, h9 as Qe, ha as Ye, hb as Je, hc as te, bm as en, hd as nn, he as tn, dc as sn, hf as an, r as L, hg as ln, hh as rn, hi as on, hj as cn, hk as dn, eE as un, hl as fn, g as pn, hm as mn, hn as se, ho as ae, hp as D, hq as le, hr as hn, hs as gn, ht as kn, bb as re, hu as xn, hv as Nn } from "./index.eager-app-Cj5f8Gby.js";
import { i as yn, ba as U } from "./index.eager-platform-Dcfeegfw.js";
import { R as A, Z as Tn, as as bn, b4 as ie, c0 as oe, c1 as B, ah as jn, c2 as wn, c3 as Sn, c4 as _n, c5 as In, c6 as Ln, c7 as Rn, c8 as Cn, a2 as E, c9 as $, I as vn, ca as ce, cb as $n, $ as Mn, cc as Pn, cd as An, a0 as En, a1 as On, ce as zn, af as qn, cf as Dn, cg as Hn, ch as Bn, ci as Un, an as de } from "./index-ZYxf-aBb.js";
import { b as Fn } from "./chunk-team-bot-share-card-CeroIs_e.js";
import { r as Kn, a as Wn, c as Gn, d as Zn, g as N, M as Vn } from "./chunk-markdown-math-D9a2zKdp.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./chunk-bot-template-share-card-frame-gOKZUO-a.js";
import "./chunk-team-bot-details-pane-CISL5cWF.js";
import "./chunk-index-C0dBjfzC.js";
function Xn(this: any, t: any): any {
  const e: any = ((b as any).c as any)(3),
    n: any = (J as any)();
  let s: any;
  ((e as any)[0] as any) !== (t as any) || ((e as any)[1] as any) !== ((n as any).originPrStatus as any) ? (s = (((n as any).originPrStatus as any).stateFor as any)(t), (e as any)[0] = t, (e as any)[1] = (n as any).originPrStatus, (e as any)[2] = s) : s = (e as any)[2];
  const a: any = s,
    l: any = ((_ as any).useSyncExternalStore as any)((a as any).subscribe, (a as any).get, (a as any).get);
  return ((l as any).status as any) === ("ready" as any) ? (l as any).value : null;
}
function ue(this: any, t: any): any {
  (ue as any).d = 1339;
  const e: any = ((b as any).c as any)(2),
    {
      workflowId: n,
      label: s,
      agentId: a
    }: any = t,
    {
      i18n: l,
      _: r
    }: any = (S as any)(),
    o: any = (Ke as any)(),
    c: any = (We as any)(),
    i: any = (ee as any)((Ge as any)(a), []);
  let u: any;
  ((e as any)[0] as any) !== (n as any) ? (u = (k: any): any => ((k as any).id as any) === (n as any), (e as any)[0] = n, (e as any)[1] = u) : u = (e as any)[1];
  const h: any = ((i as any).find as any)(u)?.name ?? ((s as any) != (null as any) && ((s as any).length as any) > (0 as any) ? s : (r as any)({
      id: "OZJeTZ"
    })),
    m: any = (Ze as any)({
      id: n,
      label: h
    }, l),
    f: any = function (this: any, x: any): any {
      ((x as any).preventDefault as any)(), o?.({
        kind: "skill",
        workflowId: n
      }, m);
    };
  return (c as any) == (null as any) ? ((d as any).jsx as any)("button", {
    className: "sand-pill sand-pill--skill",
    onClick: f,
    type: "button",
    children: m
  }) : ((c as any).renderReferencePill as any)({
    iconName: "cube",
    iconSize: "prose",
    label: m,
    onClick: f,
    title: (r as any)({
      id: "kn2XvK"
    }),
    variantClassName: "sand-pill--skill"
  });
}
const Qn: any = ["/tmp/", "/workspace/", "/home/", "/root/"],
  Yn: any = ["/sand-data/", "/agent-data/", "/.grokbot/", "/.cursor/sand"],
  Jn: any = /[\s"'<>|]/;
function et(this: any, t: any): any {
  if (!((URL as any).canParse as any)(t)) return null;
  const e: any = new (URL as any)(t);
  return ((e as any).protocol as any) !== ("file:" as any) || (((e as any).username as any).length as any) > (0 as any) || (((e as any).password as any).length as any) > (0 as any) || (((e as any).hostname as any).length as any) > (0 as any) && ((e as any).hostname as any) !== ("localhost" as any) || (((e as any).pathname as any).length as any) === (0 as any) ? null : (e as any).pathname;
}
function nt(this: any, t: any): any {
  return ((Yn as any).some as any)((e: any): any => ((t as any).includes as any)(e));
}
function fe(this: any, t: any): any {
  const e: any = ((t as any).trim as any)();
  if (((e as any).length as any) === (0 as any) || ((e as any).length as any) > (4096 as any) || ((e as any).includes as any)("\0") || ((e as any).includes as any)(`
`) || ((e as any).includes as any)("\r")) return null;
  const n: any = ((/^file:/i as any).test as any)(e) ? (et as any)(e) : e;
  if ((n as any) == (null as any) || !((n as any).startsWith as any)("/") || ((n as any).includes as any)("\\")) return null;
  const s: any = ((n as any).split as any)("/");
  if (((s as any).length as any) < (3 as any) || ((s as any).some as any)((l: any, r: any): any => (r as any) > (0 as any) && (((l as any).length as any) === (0 as any) || (l as any) === ("." as any) || (l as any) === (".." as any)))) return null;
  const a: any = `/${((((s as any).slice as any)(1) as any).join as any)("/")}`;
  return !((Qn as any).some as any)((l: any): any => ((a as any).startsWith as any)(l)) || (nt as any)(a) || ((ne as any)(a) as any) === ("unknown" as any) ? null : a;
}
function tt(this: any, t: any): any {
  if (((t as any).length as any) < (2 as any)) return t;
  const e: any = (t as any)[0],
    n: any = (t as any)[((t as any).length as any) - (1 as any)];
  return ((e as any) === ('"' as any) || (e as any) === ("'" as any) || (e as any) === ("`" as any)) && (e as any) === (n as any) ? ((t as any).slice as any)(1, -1) : t;
}
function st(this: any, t: any): any {
  return ((t as any).replace as any)(/[).,;:\]]+$/u, "");
}
function at(this: any, t: any, e: any): any {
  const n: any = ((t as any).slice as any)(e),
    s: any = ((/(?:^|[\s"'`(])((?:file:\/\/\/|\/(?:tmp|workspace|home|root)\/))/u as any).exec as any)(n);
  return (s as any) == (null as any) || ((s as any).index as any) < (0 as any) || ((s as any)[1] as any) == (null as any) ? -1 : ((e as any) + ((s as any).index as any) as any) + ((((s as any)[0] as any).length as any) - (((s as any)[1] as any).length as any) as any);
}
function lt(this: any, t: any, e: any): any {
  let n: any = e;
  for (; (n as any) < ((t as any).length as any) && !((Jn as any).test as any)((t as any)[n] ?? "");) n += 1;
  const s: any = ((t as any).slice as any)(e, n),
    a: any = (st as any)(s),
    l: any = (fe as any)(a);
  return (l as any) == (null as any) || ((a as any).length as any) === (0 as any) ? null : {
    end: (e as any) + ((a as any).length as any),
    path: l
  };
}
function O(this: any, t: any, e: any): any {
  if (((e as any).length as any) === (0 as any)) return;
  const n: any = (t as any)[((t as any).length as any) - (1 as any)];
  if ((n as any) != (null as any) && ((n as any).kind as any) === ("text" as any)) {
    (t as any)[((t as any).length as any) - (1 as any)] = {
      kind: "text",
      text: ((n as any).text as any) + (e as any)
    };
    return;
  }
  ((t as any).push as any)({
    kind: "text",
    text: e
  });
}
function pe(this: any, t: any): any {
  const e: any = ((t as any).trim as any)(),
    n: any = (tt as any)(e),
    s: any = (fe as any)(n);
  if ((s as any) != (null as any) && ((n as any) === (e as any) || (((n as any).length as any) + (2 as any) as any) === ((e as any).length as any))) return [{
    kind: "path",
    path: s,
    text: n
  }];
  const a: any = [];
  let l: any = 0;
  for (; (l as any) < ((t as any).length as any);) {
    const r: any = (at as any)(t, l);
    if ((r as any) < (0 as any)) {
      (O as any)(a, ((t as any).slice as any)(l));
      break;
    }
    (r as any) > (l as any) && (O as any)(a, ((t as any).slice as any)(l, r));
    const o: any = (lt as any)(t, r);
    if ((o as any) == (null as any)) {
      (O as any)(a, ((t as any).slice as any)(r, (r as any) + (1 as any))), l = (r as any) + (1 as any);
      continue;
    }
    ((a as any).push as any)({
      kind: "path",
      path: (o as any).path,
      text: ((t as any).slice as any)(r, (o as any).end)
    }), l = (o as any).end;
  }
  return a;
}
function rt(this: any, t: any): any {
  return (((pe as any)(t) as any).some as any)((e: any): any => ((e as any).kind as any) === ("path" as any));
}
const F: any = /^[A-Za-z0-9_.-]+$/,
  it: any = new (Set as any)(["cursor.com", "staging.cursor.com"]);
function ot(this: any, {
  portalHost: t,
  owner: e,
  repo: n,
  prNumberSegment: s
}: any): any {
  if (!((F as any).test as any)(e) || !((F as any).test as any)(n)) return null;
  const a: any = ((Number as any).parseInt as any)(s, 10);
  return !((a as any) > (0 as any)) || ((String as any)(a) as any) !== (s as any) ? null : {
    prNumber: a,
    canonicalOriginUrl: `https://${t}/codebase/${((e as any).toLowerCase as any)()}/${((n as any).toLowerCase as any)()}/pull/${a}`
  };
}
function ct(this: any, t: any): any {
  if ((t as any) == (null as any) || !((URL as any).canParse as any)(t)) return null;
  const e: any = new (URL as any)(t);
  if (((e as any).protocol as any) !== ("http:" as any) && ((e as any).protocol as any) !== ("https:" as any)) return null;
  const n: any = (((e as any).hostname as any).toLowerCase as any)(),
    s: any = (((((e as any).pathname as any).split as any)("/") as any).filter as any)((a: any): any => ((a as any).length as any) > (0 as any));
  return !((it as any).has as any)(n) || ((e as any).protocol as any) !== ("https:" as any) || ((e as any).port as any) !== ("" as any) ? null : ((s as any).length as any) === (5 as any) && ((s as any)[0] as any) === ("codebase" as any) && ((s as any)[3] as any) === ("pull" as any) ? (ot as any)({
    portalHost: n,
    owner: (s as any)[1] ?? "",
    repo: (s as any)[2] ?? "",
    prNumberSegment: (s as any)[4] ?? ""
  }) : null;
}
function me(this: any, t: any): any {
  (me as any).d = 587;
  const e: any = ((b as any).c as any)(12),
    {
      bcId: n
    }: any = t,
    {
      _: s
    }: any = (S as any)(),
    {
      name: a
    }: any = (Ve as any)(n),
    l: any = (Xe as any)();
  let r: any;
  ((e as any)[0] as any) !== (s as any) || ((e as any)[1] as any) !== (a as any) ? (r = ((a as any).length as any) > (0 as any) ? a : (s as any)({
    id: "jozt9B"
  }), (e as any)[0] = s, (e as any)[1] = a, (e as any)[2] = r) : r = (e as any)[2];
  const o: any = r;
  let c: any;
  ((e as any)[3] as any) !== (n as any) || ((e as any)[4] as any) !== (l as any) ? (c = function (this: any, m: any): any {
    ((m as any).preventDefault as any)(), (l as any)({
      bcId: n
    });
  }, (e as any)[3] = n, (e as any)[4] = l, (e as any)[5] = c) : c = (e as any)[5];
  const i: any = c;
  let u: any;
  ((e as any)[6] as any) !== (s as any) ? (u = (s as any)({
    id: "T1AZp3"
  }), (e as any)[6] = s, (e as any)[7] = u) : u = (e as any)[7];
  let p: any;
  return ((e as any)[8] as any) !== (o as any) || ((e as any)[9] as any) !== (i as any) || ((e as any)[10] as any) !== (u as any) ? (p = ((d as any).jsx as any)(A, {
    iconName: "agent",
    label: o,
    onClick: i,
    title: u,
    variantClassName: "sand-pill--cursor-agent"
  }), (e as any)[8] = o, (e as any)[9] = i, (e as any)[10] = u, (e as any)[11] = p) : p = (e as any)[11], p;
}
const dt: any = {
    open: {
      name: "git-pull-request",
      color: "git-added"
    },
    draft: {
      name: "git-pull-request-draft",
      color: "tertiary"
    },
    merged: {
      name: "git-merge",
      color: "purple"
    },
    closed: {
      name: "git-pull-request-closed",
      color: "git-removed"
    }
  },
  ut: any = {
    name: "git-pull-request",
    color: "secondary"
  };
function he(this: any, t: any): any {
  (he as any).d = 603;
  const e: any = ((b as any).c as any)(16),
    {
      href: n,
      prLink: s
    }: any = t,
    {
      _: a
    }: any = (S as any)(),
    l: any = (Qe as any)(),
    r: any = (J as any)();
  let o: any;
  ((e as any)[0] as any) !== ((r as any).originPrStatus as any) || ((e as any)[1] as any) !== ((s as any).canonicalOriginUrl as any) ? (o = (): any => ((((r as any).originPrStatus as any).load as any)((s as any).canonicalOriginUrl), ft), (e as any)[0] = (r as any).originPrStatus, (e as any)[1] = (s as any).canonicalOriginUrl, (e as any)[2] = o) : o = (e as any)[2], (yn as any)(o);
  const c: any = (Xn as any)((s as any).canonicalOriginUrl),
    i: any = (c as any) == (null as any) ? ut : (dt as any)[(c as any).status],
    u: any = (c as any) == (null as any) ? `#${(s as any).prNumber}` : `#${(s as any).prNumber} · ${(c as any).title}`,
    p: any = c?.status,
    h: any = (i as any).color,
    m: any = (i as any).name;
  let f: any;
  ((e as any)[3] as any) !== (n as any) || ((e as any)[4] as any) !== (l as any) ? (f = (T: any): any => {
    ((T as any).preventDefault as any)(), (l as any)(n);
  }, (e as any)[3] = n, (e as any)[4] = l, (e as any)[5] = f) : f = (e as any)[5];
  let k: any;
  ((e as any)[6] as any) !== (a as any) ? (k = (a as any)({
    id: "aigYxz"
  }), (e as any)[6] = a, (e as any)[7] = k) : k = (e as any)[7];
  let x: any;
  return ((e as any)[8] as any) !== (u as any) || ((e as any)[9] as any) !== (n as any) || ((e as any)[10] as any) !== ((i as any).color as any) || ((e as any)[11] as any) !== ((i as any).name as any) || ((e as any)[12] as any) !== (p as any) || ((e as any)[13] as any) !== (f as any) || ((e as any)[14] as any) !== (k as any) ? (x = ((d as any).jsx as any)(A, {
    "data-pr-status": p,
    "data-sand-copy-url": n,
    iconColor: h,
    iconName: m,
    iconVariant: "filled",
    label: u,
    onClick: f,
    title: k,
    variantClassName: "sand-pill--origin-pr",
    weight: "semibold"
  }), (e as any)[8] = u, (e as any)[9] = n, (e as any)[10] = (i as any).color, (e as any)[11] = (i as any).name, (e as any)[12] = p, (e as any)[13] = f, (e as any)[14] = k, (e as any)[15] = x) : x = (e as any)[15], x;
}
function ft(this: any): any {}
const K: number = 48;
function z(this: any, t: any): any {
  const e: any = ((((t as any).replace as any)(/\s+/g, " ") as any).trim as any)();
  return ((e as any).length as any) <= (K as any) ? e : `${((((e as any).slice as any)(0, (K as any) - (1 as any)) as any).trimEnd as any)()}\u2026`;
}
function ge(this: any, t: any, e: any): any {
  switch ((e as any).kind) {
    case "user-text":
    case "assistant-text":
      {
        const s: any = (z as any)((an as any)((e as any).text));
        return ((s as any).length as any) > (0 as any) ? s : (t as any)({
          id: "ncwQad"
        });
      }
    case "image":
      return (t as any)({
        id: "qa9cy4"
      });
    case "file":
      return (z as any)(((e as any).name as any) != (null as any) && (((e as any).name as any).length as any) > (0 as any) ? (e as any).name : (_n as any)((e as any).url));
    case "link":
      return (z as any)((Sn as any)((e as any).url));
    case "missing":
      return (t as any)({
        id: "nfGMXM"
      });
  }
  return e;
}
function P(this: any, t: any): any {
  return ((t as any).length as any) === (0 as any) || (Je as any)(t) || ((te as any)(t) as any) != (null as any);
}
function pt(this: any, t: any, e: any, n: any): any {
  const s: any = ((((e as any).replace as any)(/\s+/g, " ") as any).trim as any)();
  return (n as any) == (null as any) || !(oe as any)(n) ? (P as any)(s) ? {
    kind: "none"
  } : {
    kind: "text",
    text: s
  } : {
    kind: "chip",
    label: (P as any)(s) ? (ge as any)(t, (B as any)(n)) : s,
    entry: n
  };
}
function mt(this: any, t: any, e: any, n: any): any {
  const s: any = n ?? (t as any)({
    id: "ixkTse"
  });
  switch ((e as any).kind) {
    case "message":
      return ((e as any).fromAgent as any) != (null as any) ? ((e as any).fromAgent as any).name : ((e as any).role as any) === ("user" as any) ? (t as any)({
        id: "kWJmRL"
      }) : s;
    case "send-message":
      return (e as any).author?.name ?? s;
    case "user-attachment":
    case "voice-call":
      return (t as any)({
        id: "kWJmRL"
      });
    case "tool-call":
    case "mcp-app":
    case "notice":
    case "event":
    case "feedback":
      return s;
  }
  return e;
}
function ke(this: any, t: any): any {
  (ke as any).d = 749;
  const e: any = ((b as any).c as any)(26),
    {
      authorName: n,
      timestampMs: s,
      preview: a
    }: any = t,
    {
      _: l
    }: any = (S as any)();
  let r: any, o: any, c: any, i: any, u: any;
  if (((e as any)[0] as any) !== (l as any) || ((e as any)[1] as any) !== (n as any) || ((e as any)[2] as any) !== (s as any)) {
    const k: any = (ln as any)(s);
    let x: any;
    ((e as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (x = {
      className: "sand-78zum5 sand-dt5ytf sand-1jnr06f sand-euugli"
    }, i = (L as any)("sand-message-ref-preview", (x as any).className), (e as any)[8] = x, (e as any)[9] = i) : (x = (e as any)[8], i = (e as any)[9]), u = (x as any).style;
    let T: any;
    ((e as any)[10] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (T = {
      className: "sand-78zum5 sand-1pha0wt sand-167g77z sand-euugli"
    }, (e as any)[10] = T) : T = (e as any)[10], r = (T as any).className;
    let j: any;
    ((e as any)[11] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (j = {
      className: "sand-euugli sand-b3r6kr sand-lyipyv sand-uxw1ft sand-1iyjqo2 sand-1wd3ewq sand-1wm8ruf sand-spwq11 sand-xzm5a7"
    }, (e as any)[11] = j) : j = (e as any)[11], ((e as any)[12] as any) !== (n as any) ? (o = ((d as any).jsx as any)("span", {
      className: (j as any).className,
      children: n
    }), (e as any)[12] = n, (e as any)[13] = o) : o = (e as any)[13], c = (k as any) != (null as any) ? ((d as any).jsx as any)("span", {
      className: "sand-2lah0s sand-4b2ntj sand-y5h43f sand-spwq11 sand-uxw1ft",
      children: (Ln as any)(l, k)
    }) : null, (e as any)[0] = l, (e as any)[1] = n, (e as any)[2] = s, (e as any)[3] = r, (e as any)[4] = o, (e as any)[5] = c, (e as any)[6] = i, (e as any)[7] = u;
  } else r = (e as any)[3], o = (e as any)[4], c = (e as any)[5], i = (e as any)[6], u = (e as any)[7];
  let p: any;
  ((e as any)[14] as any) !== (r as any) || ((e as any)[15] as any) !== (o as any) || ((e as any)[16] as any) !== (c as any) ? (p = ((d as any).jsxs as any)("div", {
    className: r,
    children: [o, c]
  }), (e as any)[14] = r, (e as any)[15] = o, (e as any)[16] = c, (e as any)[17] = p) : p = (e as any)[17];
  let h: any;
  ((e as any)[18] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (h = {
    className: "sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-euugli sand-19aaqeu sand-1wm8ruf sand-spwq11"
  }, (e as any)[18] = h) : h = (e as any)[18];
  let m: any;
  ((e as any)[19] as any) !== (a as any) ? (m = ((d as any).jsx as any)("div", {
    className: (h as any).className,
    children: ((d as any).jsx as any)(Rn, {
      preview: a,
      variant: "quote"
    })
  }), (e as any)[19] = a, (e as any)[20] = m) : m = (e as any)[20];
  let f: any;
  return ((e as any)[21] as any) !== (i as any) || ((e as any)[22] as any) !== (u as any) || ((e as any)[23] as any) !== (p as any) || ((e as any)[24] as any) !== (m as any) ? (f = ((d as any).jsxs as any)("div", {
    className: i,
    style: u,
    children: [p, m]
  }), (e as any)[21] = i, (e as any)[22] = u, (e as any)[23] = p, (e as any)[24] = m, (e as any)[25] = f) : f = (e as any)[25], f;
}
function xe(this: any, t: any): any {
  (xe as any).d = 750;
  const e: any = ((b as any).c as any)(21),
    {
      entry: n,
      label: s
    }: any = t,
    {
      _: a
    }: any = (S as any)(),
    {
      _: l
    }: any = (S as any)(),
    {
      scrollToEntry: r,
      revealEntry: o,
      agentId: c
    }: any = (jn as any)(),
    {
      isEntryInScope: i
    }: any = (wn as any)(),
    u: any = (sn as any)();
  let p: any;
  ((e as any)[0] as any) !== (c as any) || ((e as any)[1] as any) !== (u as any) ? (p = ((u as any).find as any)((w: any): any => ((w as any).id as any) === (c as any))?.name ?? null, (e as any)[0] = c, (e as any)[1] = u, (e as any)[2] = p) : p = (e as any)[2];
  const h: any = p;
  let m: any;
  ((e as any)[3] as any) !== ((n as any).id as any) || ((e as any)[4] as any) !== (i as any) || ((e as any)[5] as any) !== (o as any) || ((e as any)[6] as any) !== (r as any) ? (m = (w: any): any => {
    ((w as any).preventDefault as any)(), (i as any)((n as any).id) ? (r as any)((n as any).id) : (o as any)((n as any).id);
  }, (e as any)[3] = (n as any).id, (e as any)[4] = i, (e as any)[5] = o, (e as any)[6] = r, (e as any)[7] = m) : m = (e as any)[7];
  const f: any = m;
  let k: any;
  ((e as any)[8] as any) !== (a as any) ? (k = (a as any)({
    id: "22I5dk"
  }), (e as any)[8] = a, (e as any)[9] = k) : k = (e as any)[9];
  let x: any;
  ((e as any)[10] as any) !== (l as any) || ((e as any)[11] as any) !== (h as any) || ((e as any)[12] as any) !== (n as any) ? (x = (): any => ((d as any).jsx as any)(ke, {
    authorName: (mt as any)(l, n, h),
    preview: (B as any)(n),
    timestampMs: (n as any).timestampMs
  }), (e as any)[10] = l, (e as any)[11] = h, (e as any)[12] = n, (e as any)[13] = x) : x = (e as any)[13];
  let T: any;
  ((e as any)[14] as any) !== (f as any) || ((e as any)[15] as any) !== (s as any) ? (T = ((d as any).jsx as any)(A, {
    iconName: "arrow-u-up-left",
    label: s,
    onClick: f,
    title: "",
    variantClassName: "sand-pill--message-ref"
  }), (e as any)[14] = f, (e as any)[15] = s, (e as any)[16] = T) : T = (e as any)[16];
  let j: any;
  return ((e as any)[17] as any) !== (k as any) || ((e as any)[18] as any) !== (x as any) || ((e as any)[19] as any) !== (T as any) ? (j = ((d as any).jsx as any)(In, {
    "aria-label": k,
    content: x,
    width: 248,
    children: T
  }), (e as any)[17] = k, (e as any)[18] = x, (e as any)[19] = T, (e as any)[20] = j) : j = (e as any)[20], j;
}
function ht(this: any, t: any, e: any, n: any, s: any): any {
  const a: any = ((((e as any).replace as any)(/\s+/g, " ") as any).trim as any)();
  return (P as any)(a) ? (n as any) != (null as any) && (oe as any)(n) ? (ge as any)(t, (B as any)(n)) : s ?? (t as any)({
    id: "pwZVlK"
  }) : a;
}
function Ne(this: any, t: any): any {
  (Ne as any).d = 751;
  const e: any = ((b as any).c as any)(11),
    {
      agentId: n,
      taskId: s,
      address: a,
      label: l
    }: any = t,
    {
      _: r
    }: any = (S as any)(),
    {
      openThread: o
    }: any = (en as any)(),
    c: any = (ie as any)()?.resolveEntry(a);
  let i: any;
  ((e as any)[0] as any) !== (s as any) ? (i = (k: any): any => ((k as any).id as any) === (s as any), (e as any)[0] = s, (e as any)[1] = i) : i = (e as any)[1];
  const u: any = (((ee as any)((nn as any)(n), []) as any).find as any)(i),
    p: any = (tn as any)(n, s),
    h: any = (ht as any)(r, l, c, (u ?? p)?.name);
  let m: any;
  ((e as any)[2] as any) !== (a as any) || ((e as any)[3] as any) !== (n as any) || ((e as any)[4] as any) !== (o as any) || ((e as any)[5] as any) !== (s as any) ? (m = (k: any): any => {
    ((k as any).preventDefault as any)(), ((k as any).stopPropagation as any)(), (o as any)({
      agentId: n,
      taskId: s,
      focusEntryId: a
    });
  }, (e as any)[2] = a, (e as any)[3] = n, (e as any)[4] = o, (e as any)[5] = s, (e as any)[6] = m) : m = (e as any)[6];
  let f: any;
  return ((e as any)[7] as any) !== (a as any) || ((e as any)[8] as any) !== (h as any) || ((e as any)[9] as any) !== (m as any) ? (f = ((d as any).jsx as any)(A, {
    "data-thread-message-ref": a,
    iconName: "arrow-u-up-left",
    label: h,
    onClick: m,
    title: "",
    variantClassName: "sand-pill--message-ref"
  }), (e as any)[7] = a, (e as any)[8] = h, (e as any)[9] = m, (e as any)[10] = f) : f = (e as any)[10], f;
}
function ye(this: any, t: any): any {
  (ye as any).d = 748;
  const e: any = ((b as any).c as any)(10),
    {
      address: n,
      label: s
    }: any = t;
  let a: any;
  ((e as any)[0] as any) !== (n as any) ? (a = (Ye as any)(n), (e as any)[0] = n, (e as any)[1] = a) : a = (e as any)[1];
  const l: any = a,
    r: any = (Tn as any)()?.agentId,
    o: any = (bn as any)();
  if ((l as any) === (void 0 as any)) {
    let i: any;
    return ((e as any)[2] as any) !== (n as any) || ((e as any)[3] as any) !== (s as any) ? (i = ((d as any).jsx as any)(Te, {
      address: n,
      label: s
    }), (e as any)[2] = n, (e as any)[3] = s, (e as any)[4] = i) : i = (e as any)[4], i;
  }
  if ((r as any) == (null as any) || (o as any) != (null as any)) return (P as any)(((s as any).trim as any)()) ? null : s;
  let c: any;
  return ((e as any)[5] as any) !== (n as any) || ((e as any)[6] as any) !== (r as any) || ((e as any)[7] as any) !== (s as any) || ((e as any)[8] as any) !== (l as any) ? (c = ((d as any).jsx as any)(Ne, {
    address: n,
    agentId: r,
    label: s,
    taskId: l
  }), (e as any)[5] = n, (e as any)[6] = r, (e as any)[7] = s, (e as any)[8] = l, (e as any)[9] = c) : c = (e as any)[9], c;
}
function Te(this: any, t: any): any {
  (Te as any).d = 747;
  const e: any = ((b as any).c as any)(8),
    {
      address: n,
      label: s
    }: any = t,
    {
      _: a
    }: any = (S as any)(),
    l: any = (ie as any)();
  let r: any;
  ((e as any)[0] as any) !== (a as any) || ((e as any)[1] as any) !== (n as any) || ((e as any)[2] as any) !== (s as any) || ((e as any)[3] as any) !== (l as any) ? (r = (pt as any)(a, s, l?.resolveEntry(n)), (e as any)[0] = a, (e as any)[1] = n, (e as any)[2] = s, (e as any)[3] = l, (e as any)[4] = r) : r = (e as any)[4];
  const o: any = r;
  switch ((o as any).kind) {
    case "none":
      return null;
    case "text":
      return (o as any).text;
    case "chip":
      {
        let i: any;
        return ((e as any)[5] as any) !== ((o as any).entry as any) || ((e as any)[6] as any) !== ((o as any).label as any) ? (i = ((d as any).jsx as any)(xe, {
          entry: (o as any).entry,
          label: (o as any).label
        }), (e as any)[5] = (o as any).entry, (e as any)[6] = (o as any).label, (e as any)[7] = i) : i = (e as any)[7], i;
      }
  }
  return o;
}
function gt(this: any, t: any): any {
  const e: any = ((window as any).getSelection as any)();
  return (e as any) == (null as any) || (e as any).isCollapsed || ((e as any).rangeCount as any) === (0 as any) || !(t instanceof Node) ? !1 : ((((e as any).getRangeAt as any)(0) as any).intersectsNode as any)(t);
}
function be(this: any, t: any): any {
  (be as any).d = 612;
  const e: any = ((b as any).c as any)(22),
    {
      path: n,
      text: s
    }: any = t,
    {
      _: a
    }: any = (S as any)(),
    [l, r]: any = ((_ as any).useState as any)(!1),
    o: any = s;
  let c: any;
  ((e as any)[0] as any) !== (n as any) ? (c = (rn as any)(n), (e as any)[0] = n, (e as any)[1] = c) : c = (e as any)[1];
  const i: any = c;
  let u: any;
  ((e as any)[2] as any) !== (a as any) || ((e as any)[3] as any) !== (o as any) ? (u = (a as any)({
    id: "BGZ26c",
    values: {
      displayName: o
    }
  }), (e as any)[2] = a, (e as any)[3] = o, (e as any)[4] = u) : u = (e as any)[4];
  let p: any, h: any;
  ((e as any)[5] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (p = (w: any): any => {
    (gt as any)((w as any).currentTarget) || (r as any)(!0);
  }, h = (w: any): any => {
    (((w as any).key as any) === ("Enter" as any) || ((w as any).key as any) === (" " as any)) && (((w as any).preventDefault as any)(), (r as any)(!0));
  }, (e as any)[5] = p, (e as any)[6] = h) : (p = (e as any)[5], h = (e as any)[6]);
  let m: any;
  ((e as any)[7] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (m = {
    className: "sand-1ypdohk sand-krqix3 sand-1sur9pj"
  }, (e as any)[7] = m) : m = (e as any)[7];
  let f: any;
  ((e as any)[8] as any) !== (u as any) || ((e as any)[9] as any) !== (s as any) ? (f = ((d as any).jsx as any)("span", {
    "aria-label": u,
    dir: "ltr",
    onClick: p,
    onKeyDown: h,
    role: "button",
    tabIndex: 0,
    ...m,
    children: s
  }), (e as any)[8] = u, (e as any)[9] = s, (e as any)[10] = f) : f = (e as any)[10];
  let k: any;
  ((e as any)[11] as any) !== (n as any) ? (k = (ne as any)(n), (e as any)[11] = n, (e as any)[12] = k) : k = (e as any)[12];
  let x: any;
  ((e as any)[13] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (x = (): any => (r as any)(!1), (e as any)[13] = x) : x = (e as any)[13];
  let T: any;
  ((e as any)[14] as any) !== (i as any) || ((e as any)[15] as any) !== (l as any) || ((e as any)[16] as any) !== (n as any) || ((e as any)[17] as any) !== (k as any) ? (T = ((d as any).jsx as any)(Cn, {
    downloadName: i,
    isOpen: l,
    kind: k,
    name: i,
    onClose: x,
    source: n
  }), (e as any)[14] = i, (e as any)[15] = l, (e as any)[16] = n, (e as any)[17] = k, (e as any)[18] = T) : T = (e as any)[18];
  let j: any;
  return ((e as any)[19] as any) !== (f as any) || ((e as any)[20] as any) !== (T as any) ? (j = ((d as any).jsxs as any)((d as any).Fragment, {
    children: [f, T]
  }), (e as any)[19] = f, (e as any)[20] = T, (e as any)[21] = j) : j = (e as any)[21], j;
}
function je(this: any, t: any): any {
  (je as any).d = 613;
  const e: any = ((b as any).c as any)(4),
    {
      runs: n
    }: any = t;
  let s: any;
  ((e as any)[0] as any) !== (n as any) ? (s = ((n as any).map as any)(kt), (e as any)[0] = n, (e as any)[1] = s) : s = (e as any)[1];
  let a: any;
  return ((e as any)[2] as any) !== (s as any) ? (a = ((d as any).jsx as any)((d as any).Fragment, {
    children: s
  }), (e as any)[2] = s, (e as any)[3] = a) : a = (e as any)[3], a;
}
function kt(this: any, t: any, e: any): any {
  return ((t as any).kind as any) === ("path" as any) ? ((d as any).jsx as any)(be, {
    path: (t as any).path,
    text: (t as any).text
  }, `${e}:${(t as any).path}`) : (t as any).text;
}
const we: any = (String as any).raw`[\p{scx=Han}\p{scx=Hiragana}\p{scx=Katakana}\p{scx=Hangul}\u3000-\u303f\uff00-\uffef]`,
  xt: any = new (RegExp as any)(we, "u"),
  Nt: any = new (RegExp as any)((String as any).raw`(?<=\.[a-z\d-]+)${we}[^.]*$`, "iu"),
  yt: any = /^((?:https?:\/\/)?)([\p{L}\p{N}\p{M}._-]*)/iu,
  W: any = new (RegExp as any)("(?<![a-z])https?:\\/\\/(?=[\\p{L}\\p{N}\\p{M}])|(?<=[(*_~[\\]])www\\.(?=[\\p{L}\\p{N}\\p{M}])", "giu"),
  Tt: any = /^https?:\/\//i,
  bt: any = `!"'*,.:;<?]_~`;
function G(this: any, t: any, e: any): any {
  return ((((t as any).split as any)(e) as any).length as any) - (1 as any);
}
function jt(this: any, t: any): any {
  const [, e = "", n = ""]: any = ((yt as any).exec as any)(t) ?? [],
    s: any = ((e as any).length as any) + ((n as any).length as any),
    a: any = ((Nt as any).exec as any)(n),
    l: any = ((xt as any).exec as any)(((t as any).slice as any)(s));
  let r: any = (t as any).length;
  (a as any) !== (null as any) ? r = ((e as any).length as any) + ((a as any).index as any) : (l as any) !== (null as any) && (r = (s as any) + ((l as any).index as any));
  const o: any = ((t as any).slice as any)(0, r);
  let c: any = ((G as any)(o, ")") as any) - ((G as any)(o, "(") as any);
  for (; (r as any) > (0 as any);) {
    const i: any = ((t as any).charAt as any)((r as any) - (1 as any));
    if ((i as any) === (")" as any) && (c as any) > (0 as any)) c -= 1;else if (!((bt as any).includes as any)(i)) break;
    r -= 1;
  }
  return r;
}
function Se(this: any, t: any, e: any, n: any): any {
  const s: any = (jt as any)(t),
    a: any = ((t as any).slice as any)(0, s);
  (W as any).lastIndex = s;
  const l: any = ((W as any).exec as any)(t)?.index ?? (t as any).length,
    r: any = {
      url: (e as any) + (a as any),
      label: a,
      after: ((t as any).slice as any)(s, l),
      start: n
    };
  if ((l as any) === ((t as any).length as any)) return [r];
  const o: any = ((t as any).slice as any)(l);
  return [r, ...(Se as any)(o, ((Tt as any).test as any)(o) ? "" : "http://", (n as any) + (l as any))];
}
function Z(this: any, {
  line: t,
  column: e,
  offset: n
}: any, s: any): any {
  return {
    line: t,
    column: (e as any) + (s as any),
    offset: (n as any) === (void 0 as any) ? void 0 : (n as any) + (s as any)
  };
}
function V(this: any, {
  after: t
}: any): any {
  return (t as any) === ("" as any) ? [] : [{
    type: "text",
    value: t
  }];
}
function wt(this: any, t: any): any {
  const [e, ...n]: any = (t as any).children ?? [],
    {
      url: s,
      position: a
    }: any = t;
  if ((e?.type as any) !== ("text" as any) || ((e as any).value as any) === (void 0 as any) || ((n as any).length as any) > (0 as any)) return [t];
  if ((s as any) === (void 0 as any) || !((s as any).endsWith as any)((e as any).value)) return [t];
  if ((a as any) !== (void 0 as any)) {
    const {
      start: c,
      end: i
    }: any = a;
    if (((c as any).offset as any) === (void 0 as any) || ((i as any).offset as any) === (void 0 as any)) return [t];
    if ((((i as any).offset as any) - ((c as any).offset as any) as any) !== (((e as any).value as any).length as any)) return [t];
  }
  const l: any = ((s as any).slice as any)(0, ((s as any).length as any) - (((e as any).value as any).length as any)),
    [r, ...o]: any = (Se as any)((e as any).value, l, 0);
  return (e as any).value = (r as any).label, (t as any).url = (r as any).url, [t, ...(V as any)(r), ...((o as any).flatMap as any)((c: any): any => [{
    type: "link",
    url: (c as any).url,
    position: a && {
      start: (Z as any)((a as any).start, (c as any).start),
      end: (Z as any)((a as any).start, ((c as any).start as any) + (((c as any).label as any).length as any))
    },
    children: [{
      type: "text",
      value: (c as any).label
    }]
  }, ...(V as any)(c)])];
}
function _e(this: any, t: any): any {
  const e: any = (t as any).children ?? [];
  for (let n: any = 0; (n as any) < ((e as any).length as any); n += 1) {
    const s: any = (e as any)[n];
    if ((s as any) === (void 0 as any)) continue;
    if (((s as any).type as any) !== ("link" as any)) {
      (_e as any)(s);
      continue;
    }
    const a: any = (wt as any)(s),
      l: any = ((a as any).at as any)(-1),
      r: any = (e as any)[(n as any) + (1 as any)];
    (l?.type as any) === ("text" as any) && (r?.type as any) === ("text" as any) && ((r as any).value = (((l as any).value ?? "") as any) + (((r as any).value ?? "") as any), ((a as any).pop as any)()), ((e as any).splice as any)(n, 1, ...a), n += ((a as any).length as any) - (1 as any);
  }
}
function St(this: any): any {
  return (t: any): any => {
    (_e as any)(t);
  };
}
function Ie(this: any, t: any): any {
  const {
    children: e
  }: any = t;
  for (let n: any = 0; (n as any) < ((e as any).length as any); n += 1) {
    const s: any = (e as any)[n];
    if ((s as any) === (void 0 as any) || ((s as any).type as any) !== ("element" as any) || ((Ie as any)(s), ((s as any).tagName as any) !== ("br" as any))) continue;
    const a: any = (e as any)[(n as any) + (1 as any)];
    (a?.type as any) !== ("text" as any) || !(((a as any).value as any).startsWith as any)(`
`) || (((a as any).value as any) === (`
` as any) ? ((e as any).splice as any)((n as any) + (1 as any), 1) : (a as any).value = (((a as any).value as any).slice as any)(1));
  }
}
function _t(this: any): any {
  return Ie;
}
const It: any = /^<(\/?)([a-zA-Z]+)\s*(\/)?>$/;
function Lt(this: any, t: any): any {
  if (((t as any).type as any) !== ("raw" as any)) return null;
  const e: any = ((It as any).exec as any)((t as any).value),
    n: any = e?.[2]?.toLowerCase();
  if ((n as any) === (void 0 as any)) return null;
  const s: any = ((on as any).get as any)(n);
  if ((s as any) === (void 0 as any)) return null;
  const a: any = (e?.[1] as any) === ("/" as any),
    l: any = (e?.[3] as any) === ("/" as any),
    r: any = ((cn as any).has as any)(n);
  return l && (a || !r) ? null : {
    isClose: a,
    isVoid: r,
    tag: n,
    canonicalTag: s
  };
}
function Le(this: any, t: any): any {
  const e: any = [];
  let n: any = 0;
  for (;;) {
    const s: any = (t as any)[n];
    if ((s as any) === (void 0 as any)) break;
    const a: any = (Lt as any)(s);
    if ((a as any) === (null as any)) {
      n += 1;
      continue;
    }
    if ((a as any).isVoid) {
      if (!(a as any).isClose) {
        ((t as any).splice as any)(n, 1, {
          type: "element",
          tagName: (a as any).canonicalTag,
          properties: {},
          children: []
        }), n += 1;
        continue;
      }
      ((t as any).splice as any)(n, 1);
      continue;
    }
    if (!(a as any).isClose) {
      ((e as any).push as any)({
        tag: (a as any).tag,
        index: n
      }), n += 1;
      continue;
    }
    const l: any = ((e as any).at as any)(-1);
    if ((l as any) === (void 0 as any) || ((l as any).tag as any) !== ((a as any).tag as any)) {
      n += 1;
      continue;
    }
    ((e as any).pop as any)(), ((t as any).splice as any)((l as any).index, ((n as any) - ((l as any).index as any) as any) + (1 as any), {
      type: "element",
      tagName: (a as any).canonicalTag,
      properties: {},
      children: ((t as any).slice as any)(((l as any).index as any) + (1 as any), n)
    }), n = ((l as any).index as any) + (1 as any);
  }
  for (const s of t) ((s as any).type as any) === ("element" as any) && (Le as any)((s as any).children);
}
function Rt(this: any, t: any): any {
  return (typeof t as any) == ("object" as any) && (t as any) !== (null as any) && "type" in t && ((t as any).type as any) === ("root" as any) && "children" in t && ((Array as any).isArray as any)((t as any).children);
}
function Ct(this: any): any {
  return function (this: any, e: any): any {
    (Rt as any)(e) && (Le as any)((e as any).children);
  };
}
const Re: any = /^ {0,3}(?:`{3,}|~{3,})/,
  vt: any = /^ {0,3}(\d{1,9})[.)](?: |\t|$)/,
  $t: any = /^ {0,3}(?:[-*+]|\d{1,9}[.)])(?: |\t|$)/,
  X: any = /^(?: {2,}|\t)/,
  Mt: any = /^( {0,3})[\u2022\u25E6\u25AA](?=[ \t])/;
function Pt(this: any, t: any): any {
  if (!((/(?:^|\n) {0,3}[\u2022\u25E6\u25AA][ \t]/ as any).test as any)(t)) return t;
  const e: any = [];
  let n: any = !1;
  for (const s of ((t as any).split as any)(`
`)) {
    if (((Re as any).test as any)(s)) {
      n = !n, ((e as any).push as any)(s);
      continue;
    }
    ((e as any).push as any)(n ? s : ((s as any).replace as any)(Mt, "$1-"));
  }
  return ((e as any).join as any)(`
`);
}
function At(this: any, t: any): any {
  if (!((/\n {0,3}\d{1,9}[.)](?: |\t|\n|$)/ as any).test as any)(t)) return t;
  const e: any = ((t as any).split as any)(`
`),
    n: any = [];
  let s: any = !1,
    a: any = !1,
    l: any = !0;
  for (const r of e) {
    if (((Re as any).test as any)(r)) {
      s = !s, ((X as any).test as any)(r) || (a = !1), l = !s, ((n as any).push as any)(r);
      continue;
    }
    if (s) {
      l = !1, ((n as any).push as any)(r);
      continue;
    }
    if ((((r as any).trim as any)() as any) === ("" as any)) {
      l = !0, ((n as any).push as any)(r);
      continue;
    }
    if (!(($t as any).test as any)(r)) {
      l && !((X as any).test as any)(r) && (a = !1), l = !1, ((n as any).push as any)(r);
      continue;
    }
    const o: any = ((vt as any).exec as any)(r);
    (o as any) !== (null as any) && ((Number as any)((o as any)[1]) as any) >= (2 as any) && !a && !l && ((n as any).push as any)(""), a = !0, l = !1, ((n as any).push as any)(r);
  }
  return ((n as any).join as any)(`
`);
}
const Q: number = 18,
  M: any = {
    anchor: {
      kMwMTN: "sand-1heor9g",
      k63SB2: "sand-1rhlpx6",
      kMnn75: "sand-krqix3",
      $$css: !0
    },
    tile: {
      k1xSpc: "sand-1lliihq",
      kB7OPa: "sand-9f619",
      kzqmXN: "sand-1xp8n7a",
      kZKoxP: "sand-mix8c7",
      kaIpWk: "sand-1sxf85j",
      kWkggS: "sand-83z2og",
      $$css: !0
    },
    image: {
      kVIFPx: "sand-19kjcj4",
      kfzvcC: "sand-47corl",
      kfSwDN: "sand-87ps6o",
      $$css: !0
    },
    faviconInset: {
      kmVPX3: "sand-1i3ajwb",
      $$css: !0
    },
    globe: {
      k1xSpc: "sand-78zum5",
      kB7OPa: "sand-9f619",
      kzqmXN: "sand-1xp8n7a",
      kZKoxP: "sand-mix8c7",
      kmVPX3: "sand-yf9f8g",
      kMwMTN: "sand-169k319",
      $$css: !0
    }
  };
function Et(this: any, t: any): any {
  return ((URL as any).canParse as any)(t) ? (((new (URL as any)(t) as any).hostname as any).toLowerCase as any)() : null;
}
function H(this: any, t: any): any {
  (H as any).d = 654;
  const e: any = ((b as any).c as any)(9),
    {
      src: n,
      insetStyle: s,
      onUnusable: a
    }: any = t;
  let l: any;
  ((e as any)[0] as any) !== (a as any) ? (l = (c: any): any => {
    const {
      naturalWidth: i,
      naturalHeight: u
    }: any = (c as any).currentTarget;
    ((i as any) <= (1 as any) || (u as any) <= (1 as any)) && a?.();
  }, (e as any)[0] = a, (e as any)[1] = l) : l = (e as any)[1];
  let r: any;
  ((e as any)[2] as any) !== (s as any) ? (r = (v as any)((M as any).tile, (M as any).image, s), (e as any)[2] = s, (e as any)[3] = r) : r = (e as any)[3];
  let o: any;
  return ((e as any)[4] as any) !== (a as any) || ((e as any)[5] as any) !== (n as any) || ((e as any)[6] as any) !== (l as any) || ((e as any)[7] as any) !== (r as any) ? (o = ((d as any).jsx as any)("img", {
    alt: "",
    "aria-hidden": !0,
    draggable: !1,
    height: Q,
    onError: a,
    onLoad: l,
    src: n,
    width: Q,
    ...r
  }), (e as any)[4] = a, (e as any)[5] = n, (e as any)[6] = l, (e as any)[7] = r, (e as any)[8] = o) : o = (e as any)[8], o;
}
function Ce(this: any, t: any): any {
  (Ce as any).d = 653;
  const e: any = ((b as any).c as any)(15),
    {
      href: n
    }: any = t,
    {
      data: s
    }: any = (un as any)(n),
    a: any = (fn as any)(),
    [l, r]: any = ((_ as any).useState as any)(null),
    o: any = s?.faviconDataUrl;
  let c: any;
  if (((e as any)[0] as any) !== (n as any) || ((e as any)[1] as any) !== (a as any)) {
    const f: any = (Et as any)(n);
    c = a && (f as any) != (null as any) ? (pn as any)(f) : null, (e as any)[0] = n, (e as any)[1] = a, (e as any)[2] = c;
  } else c = (e as any)[2];
  const i: any = c;
  let u: any;
  if ((o as any) != (null as any) && (o as any) !== (l as any)) {
    let f: any;
    ((e as any)[3] as any) !== (o as any) ? (f = (): any => (r as any)(o), (e as any)[3] = o, (e as any)[4] = f) : f = (e as any)[4];
    let k: any;
    ((e as any)[5] as any) !== (o as any) || ((e as any)[6] as any) !== (f as any) ? (k = ((d as any).jsx as any)(H, {
      insetStyle: (M as any).faviconInset,
      onUnusable: f,
      src: o
    }), (e as any)[5] = o, (e as any)[6] = f, (e as any)[7] = k) : k = (e as any)[7], u = k;
  } else if ((o as any) == (null as any) && (i as any) != (null as any)) {
    let f: any;
    ((e as any)[8] as any) !== (i as any) ? (f = ((d as any).jsx as any)(H, {
      src: i
    }), (e as any)[8] = i, (e as any)[9] = f) : f = (e as any)[9], u = f;
  } else {
    let f: any;
    ((e as any)[10] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = ((d as any).jsx as any)(vn, {
      "aria-hidden": !0,
      name: "globe",
      size: "lg",
      style: (M as any).globe
    }), (e as any)[10] = f) : f = (e as any)[10], u = f;
  }
  let p: any, h: any;
  ((e as any)[11] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (p = {
    [mn]: ""
  }, h = {
    className: "sand--default-marker sand-1rg5ohu sand-b3r6kr sand-1xp8n7a sand-mix8c7 sand-snsww1 sand-43o282"
  }, (e as any)[11] = p, (e as any)[12] = h) : (p = (e as any)[11], h = (e as any)[12]);
  let m: any;
  return ((e as any)[13] as any) !== (u as any) ? (m = ((d as any).jsx as any)("span", {
    "aria-hidden": !0,
    ...p,
    ...h,
    children: u
  }), (e as any)[13] = u, (e as any)[14] = m) : m = (e as any)[14], m;
}
function Ot(this: any, {
  href: t,
  linkSyntax: e,
  children: n
}: any): any {
  return (e as any) === ("autolink" as any) || (((($ as any)(n) as any).trim as any)() as any) === (((t as any).trim as any)() as any) ? (dn as any)(t) : n;
}
function ve(this: any, t: any): any {
  (ve as any).d = 652;
  const e: any = ((b as any).c as any)(26);
  let n: any, s: any, a: any, l: any, r: any;
  ((e as any)[0] as any) !== (t as any) ? ({
    href: s,
    linkSyntax: l,
    leafStyle: a,
    children: n,
    ...r
  } = t, (e as any)[0] = t, (e as any)[1] = n, (e as any)[2] = s, (e as any)[3] = a, (e as any)[4] = l, (e as any)[5] = r) : (n = (e as any)[1], s = (e as any)[2], a = (e as any)[3], l = (e as any)[4], r = (e as any)[5]);
  let o: any;
  ((e as any)[6] as any) !== (a as any) ? (o = [a, (M as any).anchor], (e as any)[6] = a, (e as any)[7] = o) : o = (e as any)[7];
  let c: any;
  ((e as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (c = {
    className: "sand-uxw1ft"
  }, (e as any)[8] = c) : c = (e as any)[8];
  let i: any;
  ((e as any)[9] as any) !== (s as any) ? (i = ((d as any).jsx as any)(Ce, {
    href: s
  }), (e as any)[9] = s, (e as any)[10] = i) : i = (e as any)[10];
  let u: any;
  ((e as any)[11] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (u = {
    className: "sand-eaf4i8 sand-ujl8zx sand-6ur5ct sand-yi4chj sand-da060z sand-193ixag sand-9ojkr9 sand-nzelb4"
  }, (e as any)[11] = u) : u = (e as any)[11];
  let p: any;
  ((e as any)[12] as any) !== (n as any) || ((e as any)[13] as any) !== (s as any) || ((e as any)[14] as any) !== (l as any) ? (p = (Ot as any)({
    href: s,
    linkSyntax: l,
    children: n
  }), (e as any)[12] = n, (e as any)[13] = s, (e as any)[14] = l, (e as any)[15] = p) : p = (e as any)[15];
  let h: any;
  ((e as any)[16] as any) !== (p as any) ? (h = ((d as any).jsx as any)("span", {
    ...u,
    children: p
  }), (e as any)[16] = p, (e as any)[17] = h) : h = (e as any)[17];
  let m: any;
  ((e as any)[18] as any) !== (i as any) || ((e as any)[19] as any) !== (h as any) ? (m = ((d as any).jsxs as any)("span", {
    ...c,
    children: [i, h]
  }), (e as any)[18] = i, (e as any)[19] = h, (e as any)[20] = m) : m = (e as any)[20];
  let f: any;
  return ((e as any)[21] as any) !== (s as any) || ((e as any)[22] as any) !== (r as any) || ((e as any)[23] as any) !== (o as any) || ((e as any)[24] as any) !== (m as any) ? (f = ((d as any).jsx as any)(E, {
    ...r,
    anchorStyle: o,
    href: s,
    children: m
  }), (e as any)[21] = s, (e as any)[22] = r, (e as any)[23] = o, (e as any)[24] = m, (e as any)[25] = f) : f = (e as any)[25], f;
}
const g: any = {
  leaf: {
    keoZOQ: "sand-dj266r",
    k1K539: "sand-at24cr",
    $$css: !0
  },
  proseBlock: {
    ks0D6T: "sand-10y958y",
    $$css: !0
  },
  listText: {
    khDVqt: "sand-eaf4i8",
    $$css: !0
  },
  heading: {
    kMwMTN: "sand-1heor9g",
    k63SB2: "sand-xzm5a7",
    $$css: !0
  },
  heading1: {
    kGuDYH: "sand-1i1m3gp",
    kLWn49: "sand-gif2c7",
    kb6lSQ: "sand-1hi0czg",
    $$css: !0
  },
  heading2: {
    kGuDYH: "sand-19d36u7",
    kLWn49: "sand-1o2sk6j",
    kb6lSQ: "sand-1deyeav",
    keoZOQ: "sand-1e66mq1 sand-14l7nz5",
    $$css: !0
  },
  headingMinor: {
    kGuDYH: "sand-1qlqyl8",
    keoZOQ: "sand-1e66mq1 sand-14l7nz5",
    $$css: !0
  },
  list: {
    kZCmMZ: "sand-92arao",
    kLWn49: "sand-1rlwhtf",
    kpqbRz: "sand-43c9pm",
    $$css: !0
  },
  nestedList: {
    keoZOQ: "sand-1om1abp",
    kZCmMZ: "sand-7ru5ko",
    $$css: !0
  },
  wideMarkerGutter: (t: any): any => [{
    kZCmMZ: (t as any) != (null as any) ? "sand-nvo3vl" : t,
    $$css: !0
  }, {
    "--x-paddingInlineStart": (((e: any): any => (typeof e as any) == ("number" as any) ? (e as any) + ("px" as any) : e ?? void 0) as any)(t)
  }],
  unorderedListDisc: {
    kH6xsr: "sand-taz4m5",
    $$css: !0
  },
  unorderedListCircle: {
    kH6xsr: "sand-rylv2j",
    $$css: !0
  },
  unorderedListSquare: {
    kH6xsr: "sand-152237o",
    $$css: !0
  },
  orderedList: {
    kH6xsr: "sand-3yw8vx",
    $$css: !0
  },
  orderedListAlpha: {
    kH6xsr: "sand-1rrqm6h",
    $$css: !0
  },
  orderedListRoman: {
    kH6xsr: "sand-19k9dhg",
    $$css: !0
  },
  listItem: {
    kguItW: "sand-1xnkbjl",
    $$css: !0
  },
  followingListItem: {
    keoZOQ: "sand-1om1abp",
    $$css: !0
  },
  link: {
    kMwMTN: "sand-l1v4ol",
    kMnn75: "sand-krqix3 sand-1sur9pj",
    $$css: !0
  },
  pre: {
    k8WAf4: "sand-12ffz05",
    kg3NbH: "sand-1m31zm8",
    kaIpWk: "sand-ur7f20",
    kWkggS: "sand-1ciwos8",
    kMwMTN: "sand-19aaqeu",
    kLWn49: "sand-1fc57z9",
    $$css: !0
  },
  codeFallback: {
    k8WAf4: "sand-xndluk",
    kg3NbH: "sand-1m31zm8",
    kaIpWk: "sand-ur7f20",
    kWkggS: "sand-1ciwos8",
    kMwMTN: "sand-19aaqeu",
    kMv6JI: "sand-67nlm8",
    kGuDYH: "sand-1wm8ruf",
    kLWn49: "sand-1ja60sm",
    $$css: !0
  },
  image: {
    ks0D6T: "sand-193iq5w",
    kZKoxP: "sand-t7dq6l",
    kaIpWk: "sand-12oqio5",
    $$css: !0
  },
  taskList: {
    kZCmMZ: "sand-tw3t59",
    kH6xsr: "sand-3ct3a4",
    kGuDYH: "sand-11wthnw",
    kLWn49: "sand-d4r4e8",
    $$css: !0
  },
  followingTaskItem: {
    keoZOQ: "sand-1e66mq1",
    $$css: !0
  }
};
function $e(this: any, t: any): any {
  ($e as any).d = 689;
  const e: any = ((b as any).c as any)(4),
    {
      workflowId: n,
      label: s
    }: any = t,
    a: any = (de as any)();
  let l: any;
  return ((e as any)[0] as any) !== (a as any) || ((e as any)[1] as any) !== (s as any) || ((e as any)[2] as any) !== (n as any) ? (l = ((d as any).jsx as any)(ue, {
    agentId: a,
    label: s,
    workflowId: n
  }), (e as any)[0] = a, (e as any)[1] = s, (e as any)[2] = n, (e as any)[3] = l) : l = (e as any)[3], l;
}
function Me(this: any, t: any): any {
  (Me as any).d = 685;
  const e: any = ((b as any).c as any)(7),
    {
      href: n,
      linkAgentId: s,
      children: a,
      anchorProps: l
    }: any = t;
  if (((de as any)() as any) === (s as any)) {
    let i: any;
    return ((e as any)[0] as any) !== (n as any) ? (i = ((d as any).jsx as any)(Fn, {
      href: n
    }), (e as any)[0] = n, (e as any)[1] = i) : i = (e as any)[1], i;
  }
  let o: any;
  ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (o = [(g as any).leaf, (g as any).link], (e as any)[2] = o) : o = (e as any)[2];
  let c: any;
  return ((e as any)[3] as any) !== (l as any) || ((e as any)[4] as any) !== (a as any) || ((e as any)[5] as any) !== (n as any) ? (c = ((d as any).jsx as any)(E, {
    anchorStyle: o,
    href: n,
    ...l,
    children: a
  }), (e as any)[3] = l, (e as any)[4] = a, (e as any)[5] = n, (e as any)[6] = c) : c = (e as any)[6], c;
}
function Pe(this: any, t: any): any {
  const e: any = (ct as any)(t);
  if ((e as any) != (null as any)) return {
    kind: "origin",
    origin: e
  };
  const n: any = (t as any) == (null as any) ? void 0 : (kn as any)(t);
  if ((n as any) == (null as any) || ((n as any).suffix as any) !== ("" as any) && ((n as any).suffix as any) !== ("/" as any)) return null;
  const s: any = (Bn as any)((n as any).prNumber);
  return (s as any) == (null as any) ? null : {
    kind: "github",
    prNumber: s
  };
}
function zt(this: any, {
  linkText: t,
  href: e
}: any): any {
  return ((ce as any)(e) as any) == (null as any) || ((se as any)(e) as any) != (null as any) || ((ae as any)(e) as any) != (null as any) || ((D as any)(e) as any) != (null as any) || ((Pe as any)(e) as any) != (null as any) || ((le as any)(e) as any) != (null as any) ? null : ($n as any)({
    title: t,
    url: e
  }) ?? null;
}
const Ae: any = ((_ as any).createContext as any)(null);
function R(this: any, t: any): any {
  (R as any).d = 663;
  const e: any = ((b as any).c as any)(3),
    {
      children: n
    }: any = t,
    s: any = ((_ as any).useContext as any)(Ae);
  let a: any;
  return ((e as any)[0] as any) !== (n as any) || ((e as any)[1] as any) !== (s as any) ? (a = (s as any) == (null as any) ? n : (Un as any)(n, s), (e as any)[0] = n, (e as any)[1] = s, (e as any)[2] = a) : a = (e as any)[2], a;
}
function C(this: any, t: any, e: any): any {
  return function (this: any, {
    node: s,
    children: a,
    className: l,
    ...r
  }: any): any {
    (N as any)(s);
    const o: any = (v as any)((g as any).leaf, (g as any).proseBlock, (g as any).heading, e);
    return ((_ as any).createElement as any)(t, {
      ...r,
      className: (L as any)(l, (o as any).className),
      style: (o as any).style
    }, ((d as any).jsx as any)(R, {
      children: a
    }));
  };
}
function qt(this: any, t: any): any {
  return (t as any) === (0 as any) ? (g as any).orderedList : (t as any) === (1 as any) ? (g as any).orderedListAlpha : (g as any).orderedListRoman;
}
const Dt: number = 2;
function Ht(this: any, t: any, e: any): any {
  const n: any = ((Math as any).max as any)(((t as any) + (e as any) as any) - (1 as any), 1);
  return ((Math as any).max as any)((((String as any)(n) as any).length as any) - (Dt as any), 0);
}
function Bt(this: any, t: any): any {
  return (t as any) === (0 as any) ? (g as any).unorderedListDisc : (t as any) === (1 as any) ? (g as any).unorderedListCircle : (g as any).unorderedListSquare;
}
function Ee(this: any, t: any): any {
  return ((t as any).type as any) === ("text" as any) ? (t as any).value : ((t as any).type as any) === ("element" as any) ? (((((t as any).children as any).map as any)(Ee) as any).join as any)("") : "";
}
function Oe(this: any, t: any): any {
  return (((t as any).children as any).filter as any)((e: any): any => ((e as any).type as any) !== ("text" as any) || (((((e as any).value as any).trim as any)() as any).length as any) > (0 as any));
}
function Ut(this: any, t: any): any {
  if (((t as any).tagName as any) !== ("p" as any)) return null;
  const e: any = (Oe as any)(t);
  if (((e as any).length as any) !== (1 as any)) return null;
  const n: any = (e as any)[0];
  if ((n as any) == (null as any) || ((n as any).type as any) !== ("element" as any) || ((n as any).tagName as any) !== ("a" as any)) return null;
  const s: any = (typeof ((n as any).properties as any).href as any) == ("string" as any) ? ((n as any).properties as any).href : void 0;
  if ((s as any) == (null as any)) return null;
  const a: any = (zt as any)({
    linkText: (((((n as any).children as any).map as any)(Ee) as any).join as any)(""),
    href: s
  });
  return (a as any) == (null as any) ? null : {
    url: s,
    title: a
  };
}
function ze(this: any, t: any): any {
  (t as any).position = void 0, "children" in t && (((t as any).children as any).forEach as any)(ze);
}
function Ft(this: any): any {
  return ze;
}
function qe(this: any, t: any): any {
  return [Ct, _t, [Zn, {
    classifyProseCard: t ? Ut : void 0
  }], hn, Ft];
}
const Kt: any = (qe as any)(!0),
  De: any = (qe as any)(!1),
  He: any = [[Kn, {
    singleTilde: !1
  }], St, ...Wn],
  Wt: any = (C as any)("h1", (g as any).heading1),
  Gt: any = (C as any)("h2", (g as any).heading2),
  Zt: any = (C as any)("h3", (g as any).headingMinor),
  Vt: any = (C as any)("h4", (g as any).headingMinor),
  Xt: any = (C as any)("h5", (g as any).headingMinor),
  Qt: any = (C as any)("h6", (g as any).headingMinor);
function Be(this: any, t: any): any {
  (Be as any).d = 686;
  const e: any = ((b as any).c as any)(28);
  let n: any, s: any, a: any, l: any;
  ((e as any)[0] as any) !== (t as any) ? ({
    node: a,
    children: n,
    className: s,
    ...l
  } = t, (e as any)[0] = t, (e as any)[1] = n, (e as any)[2] = s, (e as any)[3] = a, (e as any)[4] = l) : (n = (e as any)[1], s = (e as any)[2], a = (e as any)[3], l = (e as any)[4]);
  const r: any = (Hn as any)();
  let o: any;
  ((e as any)[5] as any) !== (a as any) ? (o = (N as any)(a), (e as any)[5] = a, (e as any)[6] = o) : o = (e as any)[6];
  const c: any = o;
  let i: any, u: any, p: any, h: any;
  if (((e as any)[7] as any) !== (n as any) || ((e as any)[8] as any) !== (s as any) || ((e as any)[9] as any) !== (r as any) || ((e as any)[10] as any) !== (l as any) || ((e as any)[11] as any) !== ((c as any).parentTag as any)) {
    i = ({
      0: {
        className: "sand-dj266r sand-at24cr sand-67nlm8 sand-1gojbwh sand-12oo3zp"
      },
      2: {
        className: "sand-dj266r sand-at24cr sand-67nlm8 sand-1gojbwh sand-12oo3zp sand-4on0b6 sand-1tiofj7 sand-yh5bb9 sand-1e1y6u3 sand-mpze1h"
      },
      1: {
        className: "sand-dj266r sand-at24cr sand-67nlm8 sand-12oo3zp sand-11wthnw sand-1fc57z9"
      },
      3: {
        className: "sand-dj266r sand-at24cr sand-67nlm8 sand-12oo3zp sand-4on0b6 sand-1tiofj7 sand-yh5bb9 sand-1e1y6u3 sand-mpze1h sand-11wthnw sand-1fc57z9"
      }
    } as any)[(((((c as any).parentTag as any) !== ("pre" as any)) as any) << (1 as any) as any) | (((((c as any).parentTag as any) === ("pre" as any)) as any) << (0 as any) as any)];
    let k: any;
    if (((e as any)[16] as any) !== (n as any) || ((e as any)[17] as any) !== (r as any) || ((e as any)[18] as any) !== ((c as any).parentTag as any)) {
      const x: any = ($ as any)(n);
      k = r && ((c as any).parentTag as any) !== ("pre" as any) && (rt as any)(x) ? (pe as any)(x) : null, (e as any)[16] = n, (e as any)[17] = r, (e as any)[18] = (c as any).parentTag, (e as any)[19] = k;
    } else k = (e as any)[19];
    u = k, p = l, h = (L as any)(s, (i as any).className), (e as any)[7] = n, (e as any)[8] = s, (e as any)[9] = r, (e as any)[10] = l, (e as any)[11] = (c as any).parentTag, (e as any)[12] = i, (e as any)[13] = u, (e as any)[14] = p, (e as any)[15] = h;
  } else i = (e as any)[12], u = (e as any)[13], p = (e as any)[14], h = (e as any)[15];
  let m: any;
  ((e as any)[20] as any) !== (n as any) || ((e as any)[21] as any) !== (u as any) ? (m = (u as any) == (null as any) ? n : ((d as any).jsx as any)(je, {
    runs: u
  }), (e as any)[20] = n, (e as any)[21] = u, (e as any)[22] = m) : m = (e as any)[22];
  let f: any;
  return ((e as any)[23] as any) !== ((i as any).style as any) || ((e as any)[24] as any) !== (p as any) || ((e as any)[25] as any) !== (h as any) || ((e as any)[26] as any) !== (m as any) ? (f = ((d as any).jsx as any)("code", {
    ...p,
    className: h,
    dir: "ltr",
    style: (i as any).style,
    children: m
  }), (e as any)[23] = (i as any).style, (e as any)[24] = p, (e as any)[25] = h, (e as any)[26] = m, (e as any)[27] = f) : f = (e as any)[27], f;
}
const y: any = {
    a({
      node: t,
      children: e,
      href: n,
      ...s
    }: any): any {
      ((y as any).a as any).d = 665;
      const a: any = (N as any)(t);
      if ((n as any) != (null as any) && (gn as any)(n)) return ((d as any).jsx as any)(zn, {
        href: n,
        label: ($ as any)(e)
      });
      const l: any = (se as any)(n);
      if ((l as any) != (null as any)) return ((d as any).jsx as any)(me, {
        bcId: l
      });
      const r: any = (ae as any)(n);
      if ((r as any) != (null as any)) return ((d as any).jsx as any)($e, {
        label: ($ as any)(e),
        workflowId: r
      });
      const o: any = (te as any)(n);
      if ((o as any) != (null as any)) return ((d as any).jsx as any)(ye, {
        address: o,
        label: ($ as any)(e)
      });
      const c: any = (D as any)(n);
      if ((c as any) != (null as any)) {
        const h: any = (typeof e as any) == ("string" as any) ? e : void 0;
        return ((d as any).jsx as any)(qn, {
          href: c,
          label: h,
          placement: "prose"
        });
      }
      const i: any = (Pe as any)(n);
      if ((n as any) != (null as any) && (i as any) != (null as any)) return ((i as any).kind as any) === ("origin" as any) ? ((d as any).jsx as any)(he, {
        href: n,
        prLink: (i as any).origin
      }) : ((d as any).jsx as any)(Dn, {
        prNumber: (i as any).prNumber,
        url: n
      });
      const u: any = (n as any) == (null as any) ? null : (le as any)(n);
      if ((n as any) != (null as any) && (u as any) != (null as any)) return ((d as any).jsx as any)(Me, {
        anchorProps: s,
        href: n,
        linkAgentId: u,
        children: e
      });
      const p: any = (ce as any)(n);
      return (p as any) != (null as any) ? ((d as any).jsx as any)(ve, {
        ...s,
        href: p,
        leafStyle: (g as any).leaf,
        linkSyntax: (a as any).linkSyntax,
        children: e
      }) : ((d as any).jsx as any)(E, {
        anchorStyle: [(g as any).leaf, (g as any).link],
        href: n,
        ...s,
        children: e
      });
    },
    blockquote({
      node: t,
      children: e,
      ...n
    }: any): any {
      return ((y as any).blockquote as any).d = 666, (N as any)(t), ((d as any).jsx as any)("blockquote", {
        ...n,
        className: "sand-dj266r sand-at24cr sand-10y958y sand-1n2onr6 sand-78zum5 sand-dt5ytf sand-pkkfsy sand-rxpjvj sand-11jd7i5 sand-1czcfko sand-8fiw5y sand-1o0liin sand-1cpjm7i sand-1hmns74 sand-2x245j sand-ltjwvw sand-juy2up sand-vl6qna sand-14qx2bj",
        children: e
      });
    },
    br({
      node: t,
      ...e
    }: any): any {
      return ((y as any).br as any).d = 667, (N as any)(t), ((d as any).jsx as any)("br", {
        ...e,
        className: "sand-dj266r sand-at24cr"
      });
    },
    code: Be,
    del({
      node: t,
      children: e,
      ...n
    }: any): any {
      return ((y as any).del as any).d = 668, (N as any)(t), ((d as any).jsx as any)("del", {
        ...n,
        className: "sand-dj266r sand-at24cr sand-4b2ntj",
        children: e
      });
    },
    em({
      node: t,
      children: e,
      ...n
    }: any): any {
      return ((y as any).em as any).d = 669, (N as any)(t), ((d as any).jsx as any)("em", {
        ...n,
        className: "sand-dj266r sand-at24cr",
        children: e
      });
    },
    h1: Wt,
    h2: Gt,
    h3: Zt,
    h4: Vt,
    h5: Xt,
    h6: Qt,
    hr({
      node: t,
      ...e
    }: any): any {
      return ((y as any).hr as any).d = 670, (N as any)(t), ((d as any).jsx as any)("hr", {
        ...e,
        className: "sand-dj266r sand-at24cr sand-10y958y sand-178xt8z sand-13fuv20 sand-2kampu sand-18oe1m7 sand-1sy0etr sand-stzfhl"
      });
    },
    img({
      node: t,
      src: e,
      alt: n
    }: any): any {
      return ((y as any).img as any).d = 671, (N as any)(t), (typeof e as any) != ("string" as any) || ((e as any).length as any) === (0 as any) ? null : ((d as any).jsx as any)(On, {
        accessibleName: n,
        imageStyle: [(g as any).leaf, (g as any).image],
        rootStyle: [(g as any).leaf, (g as any).proseBlock],
        url: e
      });
    },
    input({
      node: t,
      ...e
    }: any): any {
      ((y as any).input as any).d = 672;
      const n: any = (N as any)(t);
      return (((n as any).task as any).kind as any) === ("checkbox" as any) ? ((d as any).jsx as any)(En, {
        isChecked: ((n as any).task as any).checked
      }) : ((d as any).jsx as any)("input", {
        ...e,
        className: "sand-dj266r sand-at24cr"
      });
    },
    li({
      node: t,
      children: e,
      className: n,
      ...s
    }: any): any {
      ((y as any).li as any).d = 673;
      const a: any = (N as any)(t),
        l: any = !((a as any).elementSibling as any).isFirst && (((a as any).parentTag as any) === ("ul" as any) || ((a as any).parentTag as any) === ("ol" as any)),
        r: any = (v as any)((g as any).leaf, (g as any).listText, (g as any).listItem, l && ((((a as any).task as any).kind as any) === ("item" as any) ? (g as any).followingTaskItem : (g as any).followingListItem));
      return ((d as any).jsx as any)("li", {
        ...s,
        className: (L as any)(n, (r as any).className),
        style: (r as any).style,
        children: ((d as any).jsx as any)(R, {
          children: e
        })
      });
    },
    ol({
      node: t,
      children: e,
      className: n,
      start: s,
      ...a
    }: any): any {
      ((y as any).ol as any).d = 674;
      const l: any = (N as any)(t),
        r: any = (((l as any).listDepth as any).total as any) - (((l as any).listDepth as any).unordered as any),
        o: any = ((l as any).parentTag as any) === ("li" as any),
        c: any = (t as any) === (void 0 as any) ? 0 : ((((t as any).children as any).filter as any)((p: any): any => ((p as any).type as any) === ("element" as any) && ((p as any).tagName as any) === ("li" as any)) as any).length,
        i: any = (r as any) === (0 as any) ? (Ht as any)((typeof s as any) == ("number" as any) ? s : 1, c) : 0,
        u: any = (v as any)((g as any).leaf, (g as any).proseBlock, (g as any).list, (qt as any)(r), o && (g as any).nestedList, (i as any) > (0 as any) && ((g as any).wideMarkerGutter as any)(`calc(${o ? (U as any)["--cursor-spacing-4"] : (U as any)["--cursor-spacing-5"]} + ${i}ch)`));
      return ((d as any).jsx as any)("ol", {
        ...a,
        className: (L as any)(n, (u as any).className),
        start: s,
        style: (u as any).style,
        children: e
      });
    },
    p({
      node: t,
      children: e,
      className: n,
      ...s
    }: any): any {
      ((y as any).p as any).d = 675;
      const a: any = (N as any)(t);
      if ((((a as any).proseCard as any).kind as any) === ("card" as any)) {
        const {
          card: i,
          run: u
        }: any = (a as any).proseCard;
        return ((d as any).jsx as any)(Pn, {
          run: u,
          title: (i as any).title,
          url: (i as any).url
        });
      }
      const l: any = (t as any) === (void 0 as any) ? [] : (Oe as any)(t),
        r: any = ((l as any).length as any) > (0 as any) && ((l as any).every as any)((i: any): any => ((i as any).type as any) === ("element" as any) && ((i as any).tagName as any) === ("img" as any));
      if (((l as any).length as any) > (0 as any) && ((l as any).every as any)((i: any): any => ((i as any).type as any) === ("element" as any) && ((i as any).tagName as any) === ("a" as any) && ((D as any)((typeof ((i as any).properties as any).href as any) == ("string" as any) ? ((i as any).properties as any).href : void 0) as any) != (null as any))) return ((d as any).jsx as any)((d as any).Fragment, {
        children: e
      });
      if (r) {
        const i: any = (((((_ as any).Children as any).toArray as any)(e) as any).filter as any)((_ as any).isValidElement);
        return ((i as any).length as any) >= (2 as any) ? ((d as any).jsx as any)(An, {
          host: "prose",
          children: i
        }) : ((d as any).jsx as any)((d as any).Fragment, {
          children: i
        });
      }
      const c: any = ({
        0: {
          className: "sand-dj266r sand-at24cr sand-10y958y sand-126k92a"
        },
        1: {
          className: "sand-dj266r sand-at24cr sand-10y958y sand-eaf4i8"
        }
      } as any)[((((a as any).parentTag as any) === ("li" as any)) as any) << (0 as any)];
      return ((d as any).jsx as any)("p", {
        ...s,
        className: (L as any)(n, (c as any).className),
        style: (c as any).style,
        children: ((d as any).jsx as any)(R, {
          children: e
        })
      });
    },
    pre({
      node: t,
      ...e
    }: any): any {
      return ((y as any).pre as any).d = 676, (N as any)(t), ((d as any).jsx as any)(Mn, {
        ...e,
        codeBlockStyle: [(g as any).leaf, (g as any).proseBlock],
        fallbackStyle: [(g as any).leaf, (g as any).codeFallback],
        node: t,
        preStyle: [(g as any).leaf, (g as any).pre]
      });
    },
    span: Gn,
    strong({
      node: t,
      children: e,
      ...n
    }: any): any {
      return ((y as any).strong as any).d = 677, (N as any)(t), ((d as any).jsx as any)("strong", {
        ...n,
        className: "sand-dj266r sand-at24cr sand-xzm5a7",
        children: e
      });
    },
    table({
      node: t,
      children: e,
      ...n
    }: any): any {
      return ((y as any).table as any).d = 678, (N as any)(t), ((d as any).jsx as any)("div", {
        className: "sand-dj266r sand-at24cr sand-193iq5w sand-w2csxc sand-493x5y",
        dir: (n as any).dir,
        children: ((d as any).jsx as any)("table", {
          ...n,
          className: "sand-ezivpi sand-gqtt45 sand-r426mx sand-1mwwwfo sand-11wthnw sand-d4r4e8",
          children: e
        })
      });
    },
    tbody({
      node: t,
      children: e,
      ...n
    }: any): any {
      return ((y as any).tbody as any).d = 679, (N as any)(t), ((d as any).jsx as any)("tbody", {
        ...n,
        className: "sand-dj266r sand-at24cr",
        children: e
      });
    },
    td({
      node: t,
      children: e,
      ...n
    }: any): any {
      ((y as any).td as any).d = 680;
      const s: any = (N as any)(t);
      return ((d as any).jsx as any)("td", {
        ...n,
        ...({
          0: {
            className: "sand-dj266r sand-at24cr sand-17ak5pl sand-so031l sand-1q0q8m5 sand-19145p9 sand-1yc453h sand-16dsc37 sand-1mzt3pk"
          },
          1: {
            className: "sand-dj266r sand-at24cr sand-17ak5pl sand-19145p9 sand-1yc453h sand-16dsc37 sand-1mzt3pk sand-1qhh985 sand-1sy0etr"
          }
        } as any)[(!!(s as any).isFinalBodyRow as any) << (0 as any)],
        children: ((d as any).jsx as any)(R, {
          children: e
        })
      });
    },
    th({
      node: t,
      children: e,
      ...n
    }: any): any {
      ((y as any).th as any).d = 681;
      const s: any = (N as any)(t);
      return ((d as any).jsx as any)("th", {
        ...n,
        ...({
          0: {
            className: "sand-dj266r sand-at24cr sand-17ak5pl sand-so031l sand-1q0q8m5 sand-19145p9 sand-1yc453h sand-16dsc37 sand-1mzt3pk sand-1rhlpx6"
          },
          1: {
            className: "sand-dj266r sand-at24cr sand-17ak5pl sand-19145p9 sand-1yc453h sand-16dsc37 sand-1mzt3pk sand-1rhlpx6 sand-1qhh985 sand-1sy0etr"
          }
        } as any)[(!!(s as any).isBlankTableHeaderCell as any) << (0 as any)],
        children: ((d as any).jsx as any)(R, {
          children: e
        })
      });
    },
    thead({
      node: t,
      children: e,
      ...n
    }: any): any {
      return ((y as any).thead as any).d = 682, (N as any)(t), ((d as any).jsx as any)("thead", {
        ...n,
        className: "sand-dj266r sand-at24cr",
        children: e
      });
    },
    tr({
      node: t,
      children: e,
      ...n
    }: any): any {
      return ((y as any).tr as any).d = 683, (N as any)(t), ((d as any).jsx as any)("tr", {
        ...n,
        className: "sand-dj266r sand-at24cr",
        children: e
      });
    },
    ul({
      node: t,
      children: e,
      className: n,
      ...s
    }: any): any {
      ((y as any).ul as any).d = 684;
      const a: any = (N as any)(t),
        l: any = (v as any)((g as any).leaf, (g as any).proseBlock, (g as any).list, (Bt as any)(((a as any).listDepth as any).unordered), ((a as any).parentTag as any) === ("li" as any) && (g as any).nestedList, (((a as any).task as any).kind as any) === ("list" as any) && (g as any).taskList);
      return ((d as any).jsx as any)("ul", {
        ...s,
        className: (L as any)(n, (l as any).className),
        style: (l as any).style,
        children: e
      });
    }
  },
  Ue: any = Vn,
  Yt: number = 200,
  Y: any = (1024 as any) * (1024 as any),
  I: any = new (Map as any)();
let q: any = 0;
function Jt(this: any, {
  content: t,
  promoteStandaloneLinks: e,
  isCacheable: n
}: any): any {
  const s: any = n && ((t as any).length as any) <= (Y as any) ? `${e ? "p" : "-"}\0${t}` : null;
  if ((s as any) != (null as any)) {
    const l: any = ((I as any).get as any)(s);
    if ((l as any) !== (void 0 as any)) return ((I as any).delete as any)(s), ((I as any).set as any)(s, l), l;
  }
  const a: any = (Ue as any)({
    components: y,
    rehypePlugins: e ? Kt : De,
    remarkPlugins: He,
    urlTransform: re,
    children: (At as any)((Pt as any)(t))
  });
  if ((s as any) != (null as any) && (a as any) !== (void 0 as any)) for (((I as any).set as any)(s, a), q += (s as any).length; ((I as any).size as any) > (Yt as any) || (q as any) > (Y as any);) {
    const l: any = (((((I as any).keys as any)() as any).next as any)() as any).value;
    if ((l as any) === (void 0 as any)) break;
    ((I as any).delete as any)(l), q -= (l as any).length;
  }
  return a;
}
function es(this: any, t: any): any {
  (es as any).d = 688;
  const e: any = ((b as any).c as any)(10),
    {
      content: n,
      matcher: s,
      promoteStandaloneLinks: a,
      isStreaming: l
    }: any = t,
    r: any = (a as any) === (void 0 as any) ? !0 : a,
    o: any = (l as any) === (void 0 as any) ? !1 : l,
    c: any = !o;
  let i: any;
  ((e as any)[0] as any) !== (n as any) || ((e as any)[1] as any) !== (r as any) || ((e as any)[2] as any) !== (c as any) ? (i = (Jt as any)({
    content: n,
    promoteStandaloneLinks: r,
    isCacheable: c
  }), (e as any)[0] = n, (e as any)[1] = r, (e as any)[2] = c, (e as any)[3] = i) : i = (e as any)[3];
  const u: any = i,
    p: any = !o;
  let h: any;
  ((e as any)[4] as any) !== (u as any) || ((e as any)[5] as any) !== (p as any) ? (h = ((d as any).jsx as any)(xn, {
    isStable: p,
    children: u
  }), (e as any)[4] = u, (e as any)[5] = p, (e as any)[6] = h) : h = (e as any)[6];
  let m: any;
  return ((e as any)[7] as any) !== (s as any) || ((e as any)[8] as any) !== (h as any) ? (m = ((d as any).jsx as any)((Ae as any).Provider, {
    value: s,
    children: h
  }), (e as any)[7] = s, (e as any)[8] = h, (e as any)[9] = m) : m = (e as any)[9], m;
}
const ns: any = ["a", "br", "code", "del", "em", "strong"],
  Fe: any = {
    ...y,
    a({
      node: t,
      children: e,
      href: n,
      ...s
    }: any): any {
      return ((Fe as any).a as any).d = 664, (N as any)(t), ((Nn as any)(n) as any) == (null as any) ? e : ((d as any).jsx as any)(E, {
        anchorStyle: [(g as any).leaf, (g as any).link],
        href: n,
        ...s,
        children: e
      });
    }
  };
function ts(this: any, {
  content: t
}: any): any {
  return (ts as any).d = 687, (Ue as any)({
    allowedElements: ns,
    components: Fe,
    rehypePlugins: De,
    remarkPlugins: He,
    unwrapDisallowed: !0,
    urlTransform: re,
    children: t
  });
}
export { y as TRANSCRIPT_MARKDOWN_COMPONENTS, Kt as TRANSCRIPT_MARKDOWN_REHYPE_PLUGINS, He as TRANSCRIPT_MARKDOWN_REMARK_PLUGINS, ts as TranscriptInlineMarkdown, es as TranscriptMarkdown, Ut as classifyTranscriptProseCard, se as extractCloudAgentLinkId, ae as extractSkillRefId, re as markdownUrlTransform, Ht as orderedMarkerExtraCh, zt as staticLinkCardTitle };
//# debugId=844d7733-0b0b-4668-a0bd-ea018c5bd262
