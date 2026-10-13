declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "5d36d6b3-9b81-40b8-a26b-4bc21c9a902b", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-5d36d6b3-9b81-40b8-a26b-4bc21c9a902b");
  } catch (e: any) {}
} as any)();
import { c as Ce, u as Ie, r as _e, j as o } from "./index.eager-vendor-Qbf9YA6n.js";
import { bt as Se, b$ as je, d0 as ke, aZ as Ae, aK as ye, b9 as Ee } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import { t as Q, z as we, b9 as Ge, ag as Le, I as Ne, an as Te, ah as Me, a5 as Oe, a6 as ze } from "./index-ZYxf-aBb.js";
import { a as Be, b as De } from "./chunk-group-chat-connect-waiting-Cu67aNHe.js";
import "./index.eager-common-CdCvBQNJ.js";
const Re: any = {
    id: "sSMHtl"
  },
  qe: any = {
    kind: "idle"
  },
  Fe: any = {
    kind: "failed"
  },
  Ue: any = {
    splitChevron: {
      kZCmMZ: "sand-25sj25",
      kwRFfy: "sand-1icxu4v",
      $$css: !0
    }
  };
function xe(this: any, de: any): any {
  (xe as any).d = 474;
  const e: any = ((Ce as any).c as any)(136),
    {
      entryId: i,
      ask: s,
      agentId: g,
      groupChat: X
    }: any = de,
    {
      i18n: h,
      _: t
    }: any = (Ie as any)(),
    {
      resolveConnectorGrant: m
    }: any = (Se as any)(),
    Y: any = (je as any)(g),
    v: any = X?.sessionId ?? Y,
    r: any = X?.waitingOn,
    [f, _]: any = ((_e as any).useState as any)(qe),
    [l, b]: any = ((_e as any).useState as any)("always_this_bot"),
    N: any = ((s as any).status as any) === ("pending" as any),
    d: any = N && ((f as any).kind as any) !== ("submitting" as any) && (g as any) != (null as any) && (r as any) === (void 0 as any);
  let p: any;
  ((e as any)[0] as any) !== (t as any) || ((e as any)[1] as any) !== (r as any) ? (p = (r as any) === (void 0 as any) ? {} : {
    tooltip: (t as any)({
      id: "wiJDLs",
      values: {
        waitingOn: r
      }
    })
  }, (e as any)[0] = t, (e as any)[1] = r, (e as any)[2] = p) : p = (e as any)[2];
  const c: any = p;
  let ee: any;
  ((e as any)[3] as any) !== (g as any) || ((e as any)[4] as any) !== ((s as any).requestId as any) || ((e as any)[5] as any) !== (d as any) || ((e as any)[6] as any) !== (i as any) || ((e as any)[7] as any) !== (m as any) || ((e as any)[8] as any) !== (v as any) ? (ee = (u: any): any => {
    !d || (g as any) == (null as any) || ((_ as any)({
      kind: "submitting",
      resolution: u
    }), (((m as any)({
      entryId: i,
      requestId: (s as any).requestId,
      resolution: u,
      agentId: g,
      ...(((v as any).length as any) > (0 as any) ? {
        sessionId: v
      } : {})
    }) as any).catch as any)((V: any): any => {
      (ke as any)(V, {
        tags: {
          sand_area: "connector-grant"
        }
      }), (_ as any)(Fe);
    }));
  }, (e as any)[3] = g, (e as any)[4] = (s as any).requestId, (e as any)[5] = d, (e as any)[6] = i, (e as any)[7] = m, (e as any)[8] = v, (e as any)[9] = ee) : ee = (e as any)[9];
  const n: any = ee;
  if (!N) {
    let u: any;
    const V: any = (s as any).interruptedBy?.name;
    if (((s as any).status as any) === ("skipped" as any)) {
      let a: any;
      ((e as any)[10] as any) !== (t as any) || ((e as any)[11] as any) !== ((s as any).serverName as any) ? (a = (t as any)({
        id: "ZDcAvU",
        values: {
          0: (s as any).serverName
        }
      }), (e as any)[10] = t, (e as any)[11] = (s as any).serverName, (e as any)[12] = a) : a = (e as any)[12], u = a;
    } else if (((s as any).status as any) !== ("allowed" as any)) {
      let a: any;
      ((e as any)[13] as any) !== (t as any) || ((e as any)[14] as any) !== ((s as any).serverName as any) || ((e as any)[15] as any) !== (V as any) ? (a = (t as any)((V as any) === (void 0 as any) ? {
        id: "w0CbH9",
        values: {
          0: (s as any).serverName
        }
      } : {
        id: "xOEYeg",
        values: {
          0: (s as any).serverName,
          interrupter: V
        }
      }), (e as any)[13] = t, (e as any)[14] = (s as any).serverName, (e as any)[15] = V, (e as any)[16] = a) : a = (e as any)[16], u = a;
    } else if (((s as any).remembered as any) === ("this_bot" as any)) {
      let a: any;
      ((e as any)[17] as any) !== (t as any) || ((e as any)[18] as any) !== ((s as any).serverName as any) ? (a = (t as any)({
        id: "wflxKA",
        values: {
          0: (s as any).serverName
        }
      }), (e as any)[17] = t, (e as any)[18] = (s as any).serverName, (e as any)[19] = a) : a = (e as any)[19], u = a;
    } else if (((s as any).remembered as any) === ("all_team_bots" as any)) {
      let a: any;
      ((e as any)[20] as any) !== (t as any) || ((e as any)[21] as any) !== ((s as any).serverName as any) ? (a = (t as any)({
        id: "xu4cS5",
        values: {
          0: (s as any).serverName
        }
      }), (e as any)[20] = t, (e as any)[21] = (s as any).serverName, (e as any)[22] = a) : a = (e as any)[22], u = a;
    } else {
      let a: any;
      ((e as any)[23] as any) !== (t as any) || ((e as any)[24] as any) !== ((s as any).serverName as any) ? (a = (t as any)({
        id: "jgmJhH",
        values: {
          0: (s as any).serverName
        }
      }), (e as any)[23] = t, (e as any)[24] = (s as any).serverName, (e as any)[25] = a) : a = (e as any)[25], u = a;
    }
    let oe: any;
    return ((e as any)[26] as any) !== (u as any) ? (oe = ((o as any).jsx as any)(Le, {
      children: ((o as any).jsx as any)(Ae, {
        isTruncating: !0,
        title: u,
        children: u
      })
    }), (e as any)[26] = u, (e as any)[27] = oe) : oe = (e as any)[27], oe;
  }
  let te: any;
  ((e as any)[28] as any) !== (t as any) ? (te = (t as any)({
    id: "NoKBgy"
  }), (e as any)[28] = t, (e as any)[29] = te) : te = (e as any)[29];
  const y: any = te;
  let se: any;
  ((e as any)[30] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (se = {
    className: "sand-3nfvp2 sand-1qjc9v5"
  }, (e as any)[30] = se) : se = (e as any)[30];
  const ce: any = !d;
  let w: any;
  ((e as any)[31] as any) !== (l as any) || ((e as any)[32] as any) !== (n as any) ? (w = (): any => (n as any)(l), (e as any)[31] = l, (e as any)[32] = n, (e as any)[33] = w) : w = (e as any)[33];
  let C: any;
  ((e as any)[34] as any) !== (y as any) || ((e as any)[35] as any) !== (ce as any) || ((e as any)[36] as any) !== (w as any) ? (C = ((o as any).jsx as any)(we, {
    disabled: ce,
    onClick: w,
    style: (ye as any).splitControlLeading,
    type: "button",
    variant: "primary",
    children: y
  }), (e as any)[34] = y, (e as any)[35] = ce, (e as any)[36] = w, (e as any)[37] = C) : C = (e as any)[37];
  let x: any;
  ((e as any)[38] as any) !== (t as any) || ((e as any)[39] as any) !== ((s as any).serverName as any) ? (x = (t as any)({
    id: "t8B0wp",
    values: {
      0: (s as any).serverName
    }
  }), (e as any)[38] = t, (e as any)[39] = (s as any).serverName, (e as any)[40] = x) : x = (e as any)[40];
  const me: any = !d;
  let ae: any;
  ((e as any)[41] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ae = [(ye as any).splitControlTrailing, (Ue as any).splitChevron], (e as any)[41] = ae) : ae = (e as any)[41];
  let le: any;
  ((e as any)[42] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (le = ((o as any).jsx as any)(Ne, {
    "aria-hidden": !0,
    name: "chevron-down",
    size: "sm"
  }), (e as any)[42] = le) : le = (e as any)[42];
  let I: any;
  ((e as any)[43] as any) !== (x as any) || ((e as any)[44] as any) !== (me as any) ? (I = ((o as any).jsx as any)((Q as any).Trigger, {
    children: ((o as any).jsx as any)(we, {
      "aria-label": x,
      disabled: me,
      style: ae,
      type: "button",
      variant: "primary",
      children: le
    })
  }), (e as any)[43] = x, (e as any)[44] = me, (e as any)[45] = I) : I = (e as any)[45];
  let S: any;
  ((e as any)[46] as any) !== (t as any) || ((e as any)[47] as any) !== ((s as any).serverName as any) ? (S = (t as any)({
    id: "zyu01W",
    values: {
      0: (s as any).serverName
    }
  }), (e as any)[46] = t, (e as any)[47] = (s as any).serverName, (e as any)[48] = S) : S = (e as any)[48];
  let j: any;
  ((e as any)[49] as any) !== (n as any) ? (j = (): any => {
    (b as any)("always_this_bot"), (n as any)("always_this_bot");
  }, (e as any)[49] = n, (e as any)[50] = j) : j = (e as any)[50];
  const ue: any = (l as any) === ("always_this_bot" as any);
  let k: any;
  ((e as any)[51] as any) !== (l as any) ? (k = (l as any) === ("always_this_bot" as any) ? ((o as any).jsx as any)(Ne, {
    name: "check",
    size: "md"
  }) : null, (e as any)[51] = l, (e as any)[52] = k) : k = (e as any)[52];
  let A: any;
  ((e as any)[53] as any) !== (t as any) ? (A = (t as any)({
    id: "xI/7Jw"
  }), (e as any)[53] = t, (e as any)[54] = A) : A = (e as any)[54];
  let E: any;
  ((e as any)[55] as any) !== (j as any) || ((e as any)[56] as any) !== (ue as any) || ((e as any)[57] as any) !== (k as any) || ((e as any)[58] as any) !== (A as any) ? (E = ((o as any).jsx as any)((Q as any).Item, {
    onSelect: j,
    radioChecked: ue,
    trailing: k,
    children: A
  }), (e as any)[55] = j, (e as any)[56] = ue, (e as any)[57] = k, (e as any)[58] = A, (e as any)[59] = E) : E = (e as any)[59];
  let G: any;
  ((e as any)[60] as any) !== (n as any) ? (G = (): any => {
    (b as any)("always_all_team_bots"), (n as any)("always_all_team_bots");
  }, (e as any)[60] = n, (e as any)[61] = G) : G = (e as any)[61];
  const ve: any = (l as any) === ("always_all_team_bots" as any);
  let L: any;
  ((e as any)[62] as any) !== (l as any) ? (L = (l as any) === ("always_all_team_bots" as any) ? ((o as any).jsx as any)(Ne, {
    name: "check",
    size: "md"
  }) : null, (e as any)[62] = l, (e as any)[63] = L) : L = (e as any)[63];
  let T: any;
  ((e as any)[64] as any) !== (t as any) ? (T = (t as any)({
    id: "D2LRHl"
  }), (e as any)[64] = t, (e as any)[65] = T) : T = (e as any)[65];
  let M: any;
  ((e as any)[66] as any) !== (G as any) || ((e as any)[67] as any) !== (ve as any) || ((e as any)[68] as any) !== (L as any) || ((e as any)[69] as any) !== (T as any) ? (M = ((o as any).jsx as any)((Q as any).Item, {
    onSelect: G,
    radioChecked: ve,
    trailing: L,
    children: T
  }), (e as any)[66] = G, (e as any)[67] = ve, (e as any)[68] = L, (e as any)[69] = T, (e as any)[70] = M) : M = (e as any)[70];
  let O: any;
  ((e as any)[71] as any) !== (S as any) || ((e as any)[72] as any) !== (E as any) || ((e as any)[73] as any) !== (M as any) ? (O = ((o as any).jsxs as any)((Q as any).Content, {
    "aria-label": S,
    minWidth: 240,
    size: "md",
    children: [E, M]
  }), (e as any)[71] = S, (e as any)[72] = E, (e as any)[73] = M, (e as any)[74] = O) : O = (e as any)[74];
  let z: any;
  ((e as any)[75] as any) !== (I as any) || ((e as any)[76] as any) !== (O as any) ? (z = ((o as any).jsxs as any)(Q, {
    placement: "bottom-start",
    children: [I, O]
  }), (e as any)[75] = I, (e as any)[76] = O, (e as any)[77] = z) : z = (e as any)[77];
  let ie: any;
  ((e as any)[78] as any) !== (z as any) || ((e as any)[79] as any) !== (C as any) ? (ie = ((o as any).jsxs as any)("span", {
    ...se,
    children: [C, z]
  }), (e as any)[78] = z, (e as any)[79] = C, (e as any)[80] = ie) : ie = (e as any)[80];
  const fe: any = ie;
  let B: any;
  ((e as any)[81] as any) !== (l as any) || ((e as any)[82] as any) !== (n as any) ? (B = (): any => (n as any)(l), (e as any)[81] = l, (e as any)[82] = n, (e as any)[83] = B) : B = (e as any)[83];
  const pe: any = !d;
  let D: any;
  ((e as any)[84] as any) !== (fe as any) || ((e as any)[85] as any) !== (y as any) || ((e as any)[86] as any) !== (c as any) || ((e as any)[87] as any) !== (B as any) || ((e as any)[88] as any) !== (pe as any) ? (D = {
    label: y,
    onClick: B,
    disabled: pe,
    variant: "primary",
    control: fe,
    ...c
  }, (e as any)[84] = fe, (e as any)[85] = y, (e as any)[86] = c, (e as any)[87] = B, (e as any)[88] = pe, (e as any)[89] = D) : D = (e as any)[89];
  let R: any;
  ((e as any)[90] as any) !== (t as any) ? (R = (t as any)({
    id: "pFfO26"
  }), (e as any)[90] = t, (e as any)[91] = R) : R = (e as any)[91];
  let q: any;
  ((e as any)[92] as any) !== (n as any) ? (q = (): any => (n as any)("allowed"), (e as any)[92] = n, (e as any)[93] = q) : q = (e as any)[93];
  const ge: any = !d;
  let F: any;
  ((e as any)[94] as any) !== (c as any) || ((e as any)[95] as any) !== (R as any) || ((e as any)[96] as any) !== (q as any) || ((e as any)[97] as any) !== (ge as any) ? (F = {
    label: R,
    onClick: q,
    disabled: ge,
    ...c
  }, (e as any)[94] = c, (e as any)[95] = R, (e as any)[96] = q, (e as any)[97] = ge, (e as any)[98] = F) : F = (e as any)[98];
  let U: any;
  ((e as any)[99] as any) !== (t as any) ? (U = (t as any)({
    id: "6Uau97"
  }), (e as any)[99] = t, (e as any)[100] = U) : U = (e as any)[100];
  let $: any;
  ((e as any)[101] as any) !== (n as any) ? ($ = (): any => (n as any)("skipped"), (e as any)[101] = n, (e as any)[102] = $) : $ = (e as any)[102];
  const he: any = !d;
  let H: any;
  ((e as any)[103] as any) !== (c as any) || ((e as any)[104] as any) !== (U as any) || ((e as any)[105] as any) !== ($ as any) || ((e as any)[106] as any) !== (he as any) ? (H = {
    label: U,
    onClick: $,
    disabled: he,
    ...c
  }, (e as any)[103] = c, (e as any)[104] = U, (e as any)[105] = $, (e as any)[106] = he, (e as any)[107] = H) : H = (e as any)[107];
  let re: any;
  ((e as any)[108] as any) !== (D as any) || ((e as any)[109] as any) !== (F as any) || ((e as any)[110] as any) !== (H as any) ? (re = [D, F, H], (e as any)[108] = D, (e as any)[109] = F, (e as any)[110] = H, (e as any)[111] = re) : re = (e as any)[111];
  const be: any = re;
  let W: any;
  ((e as any)[112] as any) !== (t as any) || ((e as any)[113] as any) !== ((s as any).serverName as any) ? (W = (t as any)({
    id: "l75dBG",
    values: {
      0: (s as any).serverName
    }
  }), (e as any)[112] = t, (e as any)[113] = (s as any).serverName, (e as any)[114] = W) : W = (e as any)[114];
  let Z: any;
  ((e as any)[115] as any) !== (t as any) || ((e as any)[116] as any) !== ((s as any).serverName as any) ? (Z = (t as any)({
    id: "uzODrR",
    values: {
      0: (s as any).serverName
    }
  }), (e as any)[115] = t, (e as any)[116] = (s as any).serverName, (e as any)[117] = Z) : Z = (e as any)[117];
  let J: any;
  ((e as any)[118] as any) !== (t as any) || ((e as any)[119] as any) !== ((s as any).serverName as any) || ((e as any)[120] as any) !== (r as any) ? (J = (t as any)((r as any) === (void 0 as any) ? {
    id: "Pz7Lcp",
    values: {
      0: (s as any).serverName,
      1: (s as any).serverName
    }
  } : {
    id: "DnmsLb",
    values: {
      0: (s as any).serverName,
      waitingOn: r
    }
  }), (e as any)[118] = t, (e as any)[119] = (s as any).serverName, (e as any)[120] = r, (e as any)[121] = J) : J = (e as any)[121];
  let K: any;
  ((e as any)[122] as any) !== (h as any) || ((e as any)[123] as any) !== ((f as any).kind as any) ? (K = ((f as any).kind as any) === ("failed" as any) ? {
    failureNote: ((h as any)._ as any)(Re)
  } : {}, (e as any)[122] = h, (e as any)[123] = (f as any).kind, (e as any)[124] = K) : K = (e as any)[124];
  let P: any;
  ((e as any)[125] as any) !== (t as any) || ((e as any)[126] as any) !== (r as any) ? (P = (r as any) === (void 0 as any) ? void 0 : (t as any)({
    id: "wShbj+",
    values: {
      waitingOn: r
    }
  }), (e as any)[125] = t, (e as any)[126] = r, (e as any)[127] = P) : P = (e as any)[127];
  let ne: any;
  return ((e as any)[128] as any) !== (be as any) || ((e as any)[129] as any) !== (i as any) || ((e as any)[130] as any) !== (W as any) || ((e as any)[131] as any) !== (Z as any) || ((e as any)[132] as any) !== (J as any) || ((e as any)[133] as any) !== (K as any) || ((e as any)[134] as any) !== (P as any) ? (ne = ((o as any).jsx as any)(Ge, {
    ariaLabel: W,
    entryId: i,
    title: Z,
    description: J,
    ...K,
    answeredNote: P,
    actions: be
  }), (e as any)[128] = be, (e as any)[129] = i, (e as any)[130] = W, (e as any)[131] = Z, (e as any)[132] = J, (e as any)[133] = K, (e as any)[134] = P, (e as any)[135] = ne) : ne = (e as any)[135], ne;
}
function $e(this: any, de: any): any {
  ($e as any).d = 312;
  const e: any = ((Ce as any).c as any)(21),
    {
      entry: i,
      adjacency: s
    }: any = de,
    g: any = (Te as any)(),
    {
      isReadOnly: X,
      viewerAuthId: h
    }: any = (Me as any)(),
    t: any = (Ee as any)("grok_bot_group_chats"),
    {
      ask: m
    }: any = (i as any).message,
    Y: any = g ?? void 0;
  let v: any;
  ((e as any)[0] as any) !== ((i as any).targeted as any) || ((e as any)[1] as any) !== (Y as any) || ((e as any)[2] as any) !== (h as any) ? (v = (Be as any)({
    targeted: (i as any).targeted,
    viewerAuthId: h,
    transcriptAgentId: Y
  }), (e as any)[0] = (i as any).targeted, (e as any)[1] = Y, (e as any)[2] = h, (e as any)[3] = v) : v = (e as any)[3];
  const r: any = v,
    f: any = (r as any).groupChat?.waitingOn;
  if (t && ((m as any).status as any) === ("pending" as any) && (f as any) !== (void 0 as any)) {
    let c: any;
    return ((e as any)[4] as any) !== ((m as any).serverName as any) || ((e as any)[5] as any) !== (f as any) ? (c = ((o as any).jsx as any)(De, {
      name: f,
      serverName: (m as any).serverName
    }), (e as any)[4] = (m as any).serverName, (e as any)[5] = f, (e as any)[6] = c) : c = (e as any)[6], c;
  }
  const _: any = X ? void 0 : (r as any).agentId;
  let l: any;
  ((e as any)[7] as any) !== ((r as any).groupChat as any) ? (l = ((r as any).groupChat as any) === (void 0 as any) ? {} : {
    groupChat: (r as any).groupChat
  }, (e as any)[7] = (r as any).groupChat, (e as any)[8] = l) : l = (e as any)[8];
  let b: any;
  ((e as any)[9] as any) !== (m as any) || ((e as any)[10] as any) !== ((i as any).id as any) || ((e as any)[11] as any) !== (_ as any) || ((e as any)[12] as any) !== (l as any) ? (b = ((o as any).jsx as any)(xe, {
    agentId: _,
    ask: m,
    entryId: (i as any).id,
    ...l
  }), (e as any)[9] = m, (e as any)[10] = (i as any).id, (e as any)[11] = _, (e as any)[12] = l, (e as any)[13] = b) : b = (e as any)[13];
  const N: any = b;
  if (((m as any).status as any) !== ("pending" as any)) return N;
  let d: any;
  ((e as any)[14] as any) !== ((s as any).isGroupStart as any) || ((e as any)[15] as any) !== ((i as any).timestampMs as any) || ((e as any)[16] as any) !== (N as any) ? (d = ((o as any).jsx as any)(Oe, {
    isGroupStart: (s as any).isGroupStart,
    timestampMs: (i as any).timestampMs,
    variant: "widget",
    children: N
  }), (e as any)[14] = (s as any).isGroupStart, (e as any)[15] = (i as any).timestampMs, (e as any)[16] = N, (e as any)[17] = d) : d = (e as any)[17];
  let p: any;
  return ((e as any)[18] as any) !== (i as any) || ((e as any)[19] as any) !== (d as any) ? (p = ((o as any).jsx as any)(ze, {
    entry: i,
    children: d
  }), (e as any)[18] = i, (e as any)[19] = d, (e as any)[20] = p) : p = (e as any)[20], p;
}
export { $e as default };
//# debugId=5d36d6b3-9b81-40b8-a26b-4bc21c9a902b
