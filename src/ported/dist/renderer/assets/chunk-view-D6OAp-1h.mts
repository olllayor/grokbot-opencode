declare var URL: any;
declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "dec7d943-7bad-4280-a133-e37f07fb9a38", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-dec7d943-7bad-4280-a133-e37f07fb9a38");
  } catch (e: any) {}
} as any)();
import { c as ee, u as re, j as f, r as fe } from "./index.eager-vendor-Qbf9YA6n.js";
import { b0 as J, bt as me, b$ as we, b7 as ye, aU as ge, ew as Ae, c1 as he, ex as ke, ey as be, ez as Ie, d0 as ae, eA as Se, eB as Re, eC as xe, dd as Ce, bB as Ne, b9 as _e, eD as je } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import { b9 as le, I as Me, an as Te, ah as Pe, a5 as qe, a6 as Oe } from "./index-ZYxf-aBb.js";
import { c as Ee } from "./chunk-group-chat-connect-waiting-Cu67aNHe.js";
import "./index.eager-common-CdCvBQNJ.js";
function $e(this: any, a: any): any {
  return ((((((((a as any).replace as any)(/https?:\/\/[^\s"'`]+/gi, (e: any): any => {
    try {
      const t: any = (((new (URL as any)(e) as any).href as any).replace as any)(/^(https?:\/\/)[^/?#]*@/i, "$1"),
        i: any = (((t as any).split as any)("#") as any)[0] ?? t;
      return (((i as any).split as any)("?") as any)[0] ?? i;
    } catch {
      return e;
    }
  }) as any).replace as any)(/((?:--)?(?:api[_-]?key|authorization|credential|password|secret|signature|token)\s*(?:=|:|\s)\s*)(?:"[^"]*"|'[^']*'|[^\s]+)/gi, "$1\u2026") as any).replace as any)(/\bBearer\s+[^\s"'`]+/gi, "Bearer \u2026") as any).replace as any)(/\b(?:sk[-_]|gh[pousr]_|xox[baprs]-|AIza)[A-Za-z0-9+/_=-]+/gi, "\u2026");
}
const X: any = {
  toLabel: {
    kMwMTN: "sand-1o0liin",
    $$css: !0
  },
  destination: {
    k1xSpc: "sand-3nfvp2",
    kGNEyG: "sand-6s0dn4",
    kAzted: "sand-jwf9q1",
    k7Eaqz: "sand-euugli",
    kg3NbH: "sand-dqyycr",
    kaIpWk: "sand-149ho13",
    kWkggS: "sand-1tiofj7",
    kMwMTN: "sand-tyxrsu",
    kHjlTd: "sand-j0a0fe",
    $$css: !0
  },
  request: {
    kB7OPa: "sand-9f619",
    kzqmXN: "sand-h8yej3",
    k7Eaqz: "sand-euugli",
    kmVPX3: "sand-7z7khe",
    kMzoRj: "sand-mkeg23",
    ksu8eU: "sand-1y0btm7",
    kVAM5u: "sand-q03nf1",
    kaIpWk: "sand-4pepcl",
    kWkggS: "sand-13l7odt",
    kMwMTN: "sand-tyxrsu",
    khDVqt: "sand-126k92a",
    kHjlTd: "sand-j0a0fe",
    $$css: !0
  },
  consequence: {
    kMwMTN: "sand-1o0liin",
    $$css: !0
  }
};
function de(this: any, a: any): any {
  (de as any).d = 498;
  const e: any = ((ee as any).c as any)(46),
    {
      entryId: t,
      destination: i,
      request: n,
      notice: g,
      actions: s,
      status: h,
      settledNote: r,
      answeredNote: S
    }: any = a,
    {
      _: o
    }: any = (re as any)(),
    R: any = (s as any) === (void 0 as any);
  let l: any;
  ((e as any)[0] as any) !== (o as any) || ((e as any)[1] as any) !== (s as any) || ((e as any)[2] as any) !== (i as any) || ((e as any)[3] as any) !== (R as any) || ((e as any)[4] as any) !== (h as any) ? (l = R ? {
    status: h,
    description: (o as any)({
      id: "rQJPIM",
      values: {
        destination: i
      }
    })
  } : {
    actions: s
  }, (e as any)[0] = o, (e as any)[1] = s, (e as any)[2] = i, (e as any)[3] = R, (e as any)[4] = h, (e as any)[5] = l) : l = (e as any)[5];
  let d: any;
  ((e as any)[6] as any) !== (o as any) ? (d = (o as any)({
    id: "NWvYSE"
  }), (e as any)[6] = o, (e as any)[7] = d) : d = (e as any)[7];
  let m: any;
  ((e as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (m = {
    className: "sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-euugli"
  }, (e as any)[8] = m) : m = (e as any)[8];
  let v: any;
  ((e as any)[9] as any) !== (o as any) ? (v = (o as any)({
    id: "/jQctM"
  }), (e as any)[9] = o, (e as any)[10] = v) : v = (e as any)[10];
  let k: any;
  ((e as any)[11] as any) !== (v as any) ? (k = ((f as any).jsx as any)(J, {
    level: "body2",
    style: (X as any).toLabel,
    children: v
  }), (e as any)[11] = v, (e as any)[12] = k) : k = (e as any)[12];
  let c: any;
  ((e as any)[13] as any) !== (i as any) ? (c = ((f as any).jsx as any)(J, {
    level: "body2",
    style: (X as any).destination,
    weight: "medium",
    children: ((f as any).jsx as any)("bdi", {
      dir: "ltr",
      children: i
    })
  }), (e as any)[13] = i, (e as any)[14] = c) : c = (e as any)[14];
  let u: any;
  ((e as any)[15] as any) !== (k as any) || ((e as any)[16] as any) !== (c as any) ? (u = ((f as any).jsxs as any)("div", {
    ...m,
    children: [k, c]
  }), (e as any)[15] = k, (e as any)[16] = c, (e as any)[17] = u) : u = (e as any)[17];
  let w: any;
  ((e as any)[18] as any) !== (n as any) ? (w = ((f as any).jsx as any)(J, {
    as: "div",
    dir: "auto",
    level: "body2",
    style: (X as any).request,
    children: n
  }), (e as any)[18] = n, (e as any)[19] = w) : w = (e as any)[19];
  let A: any;
  ((e as any)[20] as any) !== (o as any) ? (A = (o as any)({
    id: "vKyPFY"
  }), (e as any)[20] = o, (e as any)[21] = A) : A = (e as any)[21];
  let b: any;
  ((e as any)[22] as any) !== (A as any) ? (b = ((f as any).jsx as any)(J, {
    as: "div",
    level: "body2",
    style: (X as any).consequence,
    children: A
  }), (e as any)[22] = A, (e as any)[23] = b) : b = (e as any)[23];
  let y: any;
  ((e as any)[24] as any) !== (b as any) || ((e as any)[25] as any) !== (u as any) || ((e as any)[26] as any) !== (w as any) ? (y = ((f as any).jsxs as any)((f as any).Fragment, {
    children: [u, w, b]
  }), (e as any)[24] = b, (e as any)[25] = u, (e as any)[26] = w, (e as any)[27] = y) : y = (e as any)[27];
  let x: any;
  ((e as any)[28] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (x = ((f as any).jsx as any)(Me, {
    name: "headset",
    size: "sm"
  }), (e as any)[28] = x) : x = (e as any)[28];
  let C: any;
  ((e as any)[29] as any) !== (r as any) ? (C = (r as any) === (void 0 as any) ? {} : {
    settledNote: r
  }, (e as any)[29] = r, (e as any)[30] = C) : C = (e as any)[30];
  let I: any;
  ((e as any)[31] as any) !== (S as any) ? (I = (S as any) === (void 0 as any) ? {} : {
    answeredNote: S
  }, (e as any)[31] = S, (e as any)[32] = I) : I = (e as any)[32];
  let p: any;
  ((e as any)[33] as any) !== (g as any) ? (p = (g as any) === (void 0 as any) ? {} : {
    summary: g
  }, (e as any)[33] = g, (e as any)[34] = p) : p = (e as any)[34];
  let N: any;
  ((e as any)[35] as any) !== (o as any) ? (N = (o as any)({
    id: "emKTy2"
  }), (e as any)[35] = o, (e as any)[36] = N) : N = (e as any)[36];
  let _: any;
  return ((e as any)[37] as any) !== (t as any) || ((e as any)[38] as any) !== (l as any) || ((e as any)[39] as any) !== (y as any) || ((e as any)[40] as any) !== (C as any) || ((e as any)[41] as any) !== (I as any) || ((e as any)[42] as any) !== (p as any) || ((e as any)[43] as any) !== (N as any) || ((e as any)[44] as any) !== (d as any) ? (_ = ((f as any).jsx as any)(le, {
    ...l,
    ariaLabel: d,
    body: y,
    entryId: t,
    leading: x,
    ...C,
    ...I,
    ...p,
    title: N
  }), (e as any)[37] = t, (e as any)[38] = l, (e as any)[39] = y, (e as any)[40] = C, (e as any)[41] = I, (e as any)[42] = p, (e as any)[43] = N, (e as any)[44] = d, (e as any)[45] = _) : _ = (e as any)[45], _;
}
const Z: number = 340,
  ze: any = /[.!?\u2026\u3002\uFF01\uFF1F]+$/u;
function Fe(this: any, a: any, e: any): any {
  const t: any = (((Se as any)(e) as any).replace as any)(ze, "");
  return (a as any)({
    id: "gNO4Vk",
    values: {
      summary: t
    }
  });
}
function Ge(this: any, a: any, e: any): any {
  if (((e as any).length as any) <= (Z as any)) return e;
  const t: any = ((e as any).length as any) - (Z as any);
  return (a as any)({
    id: "pxPNa6",
    values: {
      0: ((e as any).slice as any)(0, Z),
      omitted: t
    }
  });
}
function Le(this: any, a: any, e: any): any {
  switch (e) {
    case "pending":
      return (a as any)({
        id: "d3O6NK"
      });
    case "approved":
    case "always":
      return (a as any)({
        id: "z0ekBu"
      });
    case "denied":
      return (a as any)({
        id: "2rI1+N"
      });
    case "expired":
      return (a as any)({
        id: "TpP+jq"
      });
    default:
      return (a as any)({
        id: "d3O6NK"
      });
  }
}
function ie(this: any, a: any, e: any): any {
  switch (e) {
    case "approved":
      return {
        kind: "success",
        label: (a as any)({
          id: "gk2v4K"
        })
      };
    case "always":
      return {
        kind: "success",
        label: (a as any)({
          id: "gBhy/k"
        })
      };
    case "denied":
      return {
        kind: "danger",
        label: (a as any)({
          id: "JsY1p5"
        })
      };
    case "expired":
      return {
        kind: "muted",
        label: (a as any)({
          id: "M1RnFv"
        })
      };
    case "pending":
      return;
    default:
      return {
        kind: "muted",
        label: (a as any)({
          id: "PS2Itk"
        })
      };
  }
}
function Be(this: any, a: any): any {
  switch ((a as any).status) {
    case "ready":
      return (a as any).value;
    case "loading":
    case "failed":
      return (a as any).previous;
    case "empty":
    case "unavailable":
      return;
  }
}
function ne(this: any, a: any, e: any, t: any): any {
  if ((e as any) === ("pending" as any)) return;
  if ((e as any) !== ("always" as any)) return (a as any)({
    id: "29OkUG"
  });
  const i: any = (a as any)({
    id: "a8MGYp"
  });
  return (t as any) === (void 0 as any) ? i : (a as any)({
    id: "NP9SA4",
    values: {
      base: i,
      allowRule: t
    }
  });
}
function Ke(this: any, a: any): any {
  const e: any = (a as any).proposedRule?.trim();
  if ((e as any) === (void 0 as any) || ((e as any).length as any) === (0 as any)) return;
  const t: any = ((((($e as any)(e) as any).replace as any)(/\s+/g, " ") as any).trim as any)();
  return ((t as any).length as any) > (0 as any) ? t : void 0;
}
async function oe(this: any, a: any, e: any): Promise<any> {
  if ((e as any) === (void 0 as any)) return "approved";
  try {
    await ((a as any).load as any)();
    const t: any = (Be as any)((((a as any).snapshots as any).get as any)());
    return (t as any) == (null as any) ? "approved" : (await ((a as any).setInstructions as any)((xe as any)(t, e)), "always");
  } catch (t: any) {
    return t instanceof Ce || (Ne as any)(t), "approved";
  }
}
async function Ue(this: any, a: any): Promise<any> {
  const {
    agentId: e,
    entryId: t,
    requestId: i,
    resolution: n,
    loadAlwaysAllow: g,
    localAnswers: s,
    resolveAutoReviewApproval: h
  }: any = a;
  let r: any = n;
  (n as any) === ("always" as any) && (r = await (g as any)());
  try {
    const S: any = await (h as any)({
      entryId: t,
      requestId: i,
      resolution: r,
      agentId: e,
      approvalPlatform: Re,
      ...((((a as any).sessionId as any).length as any) > (0 as any) ? {
        sessionId: (a as any).sessionId
      } : {})
    });
    ((s as any).record as any)("auto-review", {
      agentId: e,
      entryId: t
    }, (S as any) === ("stale" as any) ? "expired" : r);
  } catch {
    ((s as any).clear as any)("auto-review", {
      agentId: e,
      entryId: t
    });
  }
}
function ce(this: any, a: any): any {
  (ce as any).d = 457;
  const e: any = ((ee as any).c as any)(76),
    {
      agentId: t,
      entryId: i,
      approval: n,
      groupChat: g
    }: any = a,
    {
      _: s
    }: any = (re as any)(),
    [h, r]: any = ((fe as any).useState as any)(),
    {
      resolveAutoReviewApproval: S
    }: any = (me as any)(),
    o: any = (we as any)(t),
    R: any = g?.sessionId ?? o,
    l: any = g?.waitingOn,
    d: any = (ye as any)();
  (ge as any)(((d as any).autoReviewInstructions as any).load);
  const m: any = (Ae as any)();
  let v: any;
  ((e as any)[0] as any) !== (t as any) || ((e as any)[1] as any) !== (i as any) ? (v = {
    agentId: t,
    entryId: i
  }, (e as any)[0] = t, (e as any)[1] = i, (e as any)[2] = v) : v = (e as any)[2];
  const k: any = (he as any)("auto-review", v),
    c: any = ((n as any).status as any) !== ("pending" as any) ? (n as any).status : k ?? "pending",
    u: any = (c as any) === ("pending" as any),
    w: any = u && (h as any) === (void 0 as any) && (t as any) != (null as any) && (l as any) === (void 0 as any);
  let A: any, b: any, y: any, x: any, C: any, I: any, p: any;
  if (((e as any)[3] as any) !== (s as any) || ((e as any)[4] as any) !== (t as any) || ((e as any)[5] as any) !== (n as any) || ((e as any)[6] as any) !== (w as any) || ((e as any)[7] as any) !== ((d as any).autoReviewInstructions as any) || ((e as any)[8] as any) !== ((d as any).localAnswers as any) || ((e as any)[9] as any) !== (i as any) || ((e as any)[10] as any) !== (g as any) || ((e as any)[11] as any) !== (m as any) || ((e as any)[12] as any) !== (u as any) || ((e as any)[13] as any) !== (S as any) || ((e as any)[14] as any) !== (R as any) || ((e as any)[15] as any) !== (c as any) || ((e as any)[16] as any) !== (h as any) || ((e as any)[17] as any) !== (l as any)) {
    I = ((Symbol as any).for as any)("react.early_return_sentinel");
    e: {
      const K: any = (l as any) === (void 0 as any) ? {} : {
        tooltip: (s as any)({
          id: "wiJDLs",
          values: {
            waitingOn: l
          }
        })
      };
      let U: any;
      ((e as any)[25] as any) !== (s as any) || ((e as any)[26] as any) !== (u as any) || ((e as any)[27] as any) !== (l as any) ? (U = u && (l as any) !== (void 0 as any) ? (s as any)({
        id: "wShbj+",
        values: {
          waitingOn: l
        }
      }) : void 0, (e as any)[25] = s, (e as any)[26] = u, (e as any)[27] = l, (e as any)[28] = U) : U = (e as any)[28], p = U;
      const j: any = (g as any) === (void 0 as any) ? (Ke as any)(n) : void 0;
      y = (c as any) === ("expired" as any) && (j as any) !== (void 0 as any);
      const te: any = (j as any) !== (void 0 as any) && (ke as any)(m, j),
        L: any = (M: any): any => {
          !w || (t as any) == (null as any) || ((((d as any).localAnswers as any).get as any)("auto-review", {
            agentId: t,
            entryId: i
          }) as any) == (null as any) && ((r as any)(M), (((Ue as any)({
            agentId: t,
            entryId: i,
            requestId: (n as any).requestId,
            resolution: M,
            sessionId: R,
            loadAlwaysAllow: (): any => (oe as any)((d as any).autoReviewInstructions, j),
            localAnswers: (d as any).localAnswers,
            resolveAutoReviewApproval: S
          }) as any).then as any)((): any => (r as any)(void 0), (Q: any): any => {
            (ae as any)(Q, {
              tags: {
                sand_area: "auto-review-approval"
              }
            }), (r as any)(void 0);
          }));
        },
        ue: any = (): any => {
          !y || te || (h as any) !== (void 0 as any) || ((r as any)("always"), (((oe as any)((d as any).autoReviewInstructions, j) as any).then as any)((): any => (r as any)(void 0), (M: any): any => {
            (ae as any)(M, {
              tags: {
                sand_area: "auto-review-approval"
              }
            }), (r as any)(void 0);
          }));
        };
      let V: any;
      ((e as any)[29] as any) !== ((n as any).summaryCopy as any) ? (V = (be as any)((n as any).summaryCopy), (e as any)[29] = (n as any).summaryCopy, (e as any)[30] = V) : V = (e as any)[30];
      const se: any = V;
      if ((se?.kind as any) === ("phone_call" as any)) {
        const M: any = (ne as any)(s, c, j),
          {
            destination: Q,
            notice: H,
            request: ve
          }: any = (se as any).params;
        let W: any;
        ((e as any)[31] as any) !== (p as any) ? (W = (p as any) === (void 0 as any) ? {} : {
          answeredNote: p
        }, (e as any)[31] = p, (e as any)[32] = W) : W = (e as any)[32];
        let Y: any;
        ((e as any)[33] as any) !== (H as any) ? (Y = (H as any) === (void 0 as any) ? {} : {
          notice: H
        }, (e as any)[33] = H, (e as any)[34] = Y) : Y = (e as any)[34], I = ((f as any).jsx as any)(de, {
          ...(u ? {
            actions: [{
              label: (s as any)({
                id: "8hvxGX"
              }),
              onClick: (): any => (L as any)("approved"),
              disabled: !w,
              variant: "primary",
              ...K
            }, {
              label: (s as any)({
                id: "4fBv6H"
              }),
              onClick: (): any => (L as any)("denied"),
              disabled: !w,
              ...K
            }]
          } : {
            status: (ie as any)(s, c)
          }),
          ...W,
          destination: Q,
          entryId: i,
          ...Y,
          request: ve,
          ...((M as any) === (void 0 as any) ? {} : {
            settledNote: M
          })
        });
        break e;
      }
      const pe: any = {
        label: (s as any)({
          id: "NoKBgy"
        }),
        onClick: (): any => (L as any)("always"),
        disabled: !w,
        variant: "primary"
      };
      x = [...((j as any) === (void 0 as any) ? [] : [pe]), {
        label: (s as any)({
          id: "pFfO26"
        }),
        onClick: (): any => (L as any)("approved"),
        disabled: !w,
        variant: (j as any) === (void 0 as any) ? "primary" : "secondary",
        ...K
      }, {
        label: (s as any)({
          id: "cFCKYZ"
        }),
        onClick: (): any => (L as any)("denied"),
        disabled: !w,
        variant: "tertiary",
        ...K
      }];
      let D: any;
      ((e as any)[35] as any) !== (s as any) || ((e as any)[36] as any) !== ((n as any).command as any) ? (D = ((n as any).command as any) === (void 0 as any) ? void 0 : {
        kind: "text",
        text: (Ge as any)(s, (n as any).command),
        copyText: (n as any).command
      }, (e as any)[35] = s, (e as any)[36] = (n as any).command, (e as any)[37] = D) : D = (e as any)[37], A = D, b = te ? {
        label: (s as any)({
          id: "wHA55r"
        }),
        onClick: Ve,
        disabled: !0,
        variant: "secondary",
        leadingIcon: "check"
      } : {
        label: (s as any)({
          id: "nKpP3+"
        }),
        onClick: ue,
        disabled: (h as any) !== (void 0 as any),
        variant: "secondary"
      }, C = y ? void 0 : (ne as any)(s, c, j);
    }
    (e as any)[3] = s, (e as any)[4] = t, (e as any)[5] = n, (e as any)[6] = w, (e as any)[7] = (d as any).autoReviewInstructions, (e as any)[8] = (d as any).localAnswers, (e as any)[9] = i, (e as any)[10] = g, (e as any)[11] = m, (e as any)[12] = u, (e as any)[13] = S, (e as any)[14] = R, (e as any)[15] = c, (e as any)[16] = h, (e as any)[17] = l, (e as any)[18] = A, (e as any)[19] = b, (e as any)[20] = y, (e as any)[21] = x, (e as any)[22] = C, (e as any)[23] = I, (e as any)[24] = p;
  } else A = (e as any)[18], b = (e as any)[19], y = (e as any)[20], x = (e as any)[21], C = (e as any)[22], I = (e as any)[23], p = (e as any)[24];
  if ((I as any) !== (((Symbol as any).for as any)("react.early_return_sentinel") as any)) return I;
  const N: any = C;
  let _: any;
  ((e as any)[38] as any) !== (s as any) || ((e as any)[39] as any) !== (u as any) || ((e as any)[40] as any) !== (x as any) || ((e as any)[41] as any) !== (c as any) ? (_ = u ? {
    actions: x
  } : {
    status: (ie as any)(s, c)
  }, (e as any)[38] = s, (e as any)[39] = u, (e as any)[40] = x, (e as any)[41] = c, (e as any)[42] = _) : _ = (e as any)[42];
  let T: any;
  ((e as any)[43] as any) !== (b as any) || ((e as any)[44] as any) !== (y as any) ? (T = y ? {
    settledActions: [b]
  } : {}, (e as any)[43] = b, (e as any)[44] = y, (e as any)[45] = T) : T = (e as any)[45];
  let P: any;
  ((e as any)[46] as any) !== (s as any) ? (P = (s as any)({
    id: "U3Kd/c"
  }), (e as any)[46] = s, (e as any)[47] = P) : P = (e as any)[47];
  let q: any;
  ((e as any)[48] as any) !== (s as any) || ((e as any)[49] as any) !== (n as any) ? (q = (Fe as any)(s, n), (e as any)[48] = s, (e as any)[49] = n, (e as any)[50] = q) : q = (e as any)[50];
  let O: any;
  ((e as any)[51] as any) !== (s as any) ? (O = (s as any)({
    id: "5+TRII"
  }), (e as any)[51] = s, (e as any)[52] = O) : O = (e as any)[52];
  let E: any;
  ((e as any)[53] as any) !== (n as any) ? (E = (Ie as any)(n), (e as any)[53] = n, (e as any)[54] = E) : E = (e as any)[54];
  let $: any;
  ((e as any)[55] as any) !== (A as any) ? ($ = (A as any) === (void 0 as any) ? {} : {
    detail: A
  }, (e as any)[55] = A, (e as any)[56] = $) : $ = (e as any)[56];
  let z: any;
  ((e as any)[57] as any) !== ($ as any) || ((e as any)[58] as any) !== (O as any) || ((e as any)[59] as any) !== (E as any) ? (z = {
    label: O,
    note: E,
    ...$
  }, (e as any)[57] = $, (e as any)[58] = O, (e as any)[59] = E, (e as any)[60] = z) : z = (e as any)[60];
  let F: any;
  ((e as any)[61] as any) !== (N as any) ? (F = (N as any) === (void 0 as any) ? {} : {
    settledNote: N
  }, (e as any)[61] = N, (e as any)[62] = F) : F = (e as any)[62];
  let G: any;
  ((e as any)[63] as any) !== (s as any) || ((e as any)[64] as any) !== (c as any) ? (G = (Le as any)(s, c), (e as any)[63] = s, (e as any)[64] = c, (e as any)[65] = G) : G = (e as any)[65];
  let B: any;
  return ((e as any)[66] as any) !== (i as any) || ((e as any)[67] as any) !== (z as any) || ((e as any)[68] as any) !== (F as any) || ((e as any)[69] as any) !== (G as any) || ((e as any)[70] as any) !== (_ as any) || ((e as any)[71] as any) !== (T as any) || ((e as any)[72] as any) !== (P as any) || ((e as any)[73] as any) !== (q as any) || ((e as any)[74] as any) !== (p as any) ? (B = ((f as any).jsx as any)(le, {
    ..._,
    ...T,
    answeredNote: p,
    ariaLabel: P,
    description: q,
    disclosure: z,
    entryId: i,
    ...F,
    title: G
  }), (e as any)[66] = i, (e as any)[67] = z, (e as any)[68] = F, (e as any)[69] = G, (e as any)[70] = _, (e as any)[71] = T, (e as any)[72] = P, (e as any)[73] = q, (e as any)[74] = p, (e as any)[75] = B) : B = (e as any)[75], B;
}
function Ve(this: any): any {}
function De(this: any, a: any): any {
  (De as any).d = 310;
  const e: any = ((ee as any).c as any)(17),
    {
      entry: t,
      adjacency: i
    }: any = a,
    n: any = (Te as any)(),
    {
      isReadOnly: g,
      viewerAuthId: s
    }: any = (Pe as any)(),
    h: any = (_e as any)("grok_bot_group_chats");
  if ((je as any)(t)) return null;
  const {
      targeted: r
    }: any = t,
    S: any = r?.answerAt.agentId ?? n ?? void 0,
    o: any = (r?.forUser.authId as any) === (s as any) ? void 0 : r?.forUser.name;
  if (h && ((((t as any).message as any).approval as any).status as any) === ("pending" as any) && (o as any) !== (void 0 as any)) {
    let k: any;
    return ((e as any)[0] as any) !== (o as any) ? (k = ((f as any).jsx as any)(Ee, {
      name: o
    }), (e as any)[0] = o, (e as any)[1] = k) : k = (e as any)[1], k;
  }
  const R: any = g ? void 0 : S;
  let l: any;
  ((e as any)[2] as any) !== (r as any) || ((e as any)[3] as any) !== (o as any) ? (l = (r as any) === (void 0 as any) ? {} : {
    groupChat: {
      sessionId: ((r as any).answerAt as any).sessionId,
      waitingOn: o
    }
  }, (e as any)[2] = r, (e as any)[3] = o, (e as any)[4] = l) : l = (e as any)[4];
  let d: any;
  ((e as any)[5] as any) !== ((t as any).id as any) || ((e as any)[6] as any) !== (((t as any).message as any).approval as any) || ((e as any)[7] as any) !== (R as any) || ((e as any)[8] as any) !== (l as any) ? (d = ((f as any).jsx as any)(ce, {
    agentId: R,
    approval: ((t as any).message as any).approval,
    entryId: (t as any).id,
    ...l
  }), (e as any)[5] = (t as any).id, (e as any)[6] = ((t as any).message as any).approval, (e as any)[7] = R, (e as any)[8] = l, (e as any)[9] = d) : d = (e as any)[9];
  let m: any;
  ((e as any)[10] as any) !== ((i as any).isGroupStart as any) || ((e as any)[11] as any) !== ((t as any).timestampMs as any) || ((e as any)[12] as any) !== (d as any) ? (m = ((f as any).jsx as any)(qe, {
    className: "sand-auto-review-approval-wrap",
    isGroupStart: (i as any).isGroupStart,
    timestampMs: (t as any).timestampMs,
    variant: "widget",
    children: d
  }), (e as any)[10] = (i as any).isGroupStart, (e as any)[11] = (t as any).timestampMs, (e as any)[12] = d, (e as any)[13] = m) : m = (e as any)[13];
  let v: any;
  return ((e as any)[14] as any) !== (t as any) || ((e as any)[15] as any) !== (m as any) ? (v = ((f as any).jsx as any)(Oe, {
    entry: t,
    children: m
  }), (e as any)[14] = t, (e as any)[15] = m, (e as any)[16] = v) : v = (e as any)[16], v;
}
export { De as default };
//# debugId=dec7d943-7bad-4280-a133-e37f07fb9a38
