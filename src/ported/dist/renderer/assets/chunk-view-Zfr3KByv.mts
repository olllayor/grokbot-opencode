declare var HTMLInputElement: any;
declare var HTMLSelectElement: any;
declare var HTMLTextAreaElement: any;
declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "70995af2-86f9-4933-911d-baf019877517", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-70995af2-86f9-4933-911d-baf019877517");
  } catch (e: any) {}
} as any)();
import { c as ke, u as Ne, j as d, p as Ve, r as We } from "./index.eager-vendor-Qbf9YA6n.js";
import { b9 as ze, W as Ke, bl as Qe, bm as Ye, aA as Je, ag as Xe, an as Ze, ah as et, a5 as tt, a6 as it } from "./index-ZYxf-aBb.js";
import { aK as st, bt as nt, b$ as at, em as lt, b7 as ot, aU as Pe, en as rt, eo as Ae, ep as qe, aZ as Ge, eq as dt, cb as ct, d0 as ft, er as ve, bB as Re, y as ut } from "./index.eager-app-Cj5f8Gby.js";
import { aY as je } from "./index.eager-platform-Dcfeegfw.js";
import { b as pt, S as mt } from "./chunk-settled-message-card-BSNKlGh6.js";
import { u as gt, a as yt } from "./chunk-provider-team-policy-CBjUAi-4.js";
import "./index.eager-common-CdCvBQNJ.js";
const ht: string = "#278eff",
  Le: any = {
    recipient: {
      k1xSpc: "sand-3nfvp2",
      kGNEyG: "sand-6s0dn4",
      kAzted: "sand-jwf9q1",
      k7Eaqz: "sand-euugli",
      kg3NbH: "sand-dqyycr",
      kaIpWk: "sand-149ho13",
      kWkggS: "sand-1tiofj7",
      kHjlTd: "sand-j0a0fe",
      $$css: !0
    },
    handle: {
      k7Eaqz: "sand-euugli",
      kHjlTd: "sand-j0a0fe",
      $$css: !0
    },
    bubbleText: {
      kskxy: "sand-1sspnmo",
      k8WAf4: "sand-ifx94n",
      kORKVm: "sand-1odjw0f",
      $$css: !0
    }
  };
function Ue(this: any): any {
  (Ue as any).d = 511;
  const i: any = ((ke as any).c as any)(1);
  let e: any;
  return ((i as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (e = ((d as any).jsx as any)("svg", {
    "aria-hidden": !0,
    height: 16,
    viewBox: "310.933 62.5814 27.927 19.6526",
    width: 23,
    className: "sand-10l6tqk sand-8knxv4 sand-1ey2m1c sand-13niomq sand-fr5ud3",
    children: ((d as any).jsx as any)("path", {
      d: "M330.229 66.3282C330.463 65.1153 330.586 63.8627 330.586 62.5814H310.933V82.234C315.692 82.234 320.056 80.5425 323.456 77.7278C326.849 79.9878 332.288 82.1361 338.86 80.9411C337.05 80.1654 330.068 75.5108 330.327 66.2017C330.296 66.2448 330.263 66.287 330.229 66.3282Z",
      fill: ht
    })
  }), (i as any)[0] = e) : e = (i as any)[0], e;
}
function Oe(this: any, i: any): any {
  (Oe as any).d = 512;
  const e: any = ((ke as any).c as any)(4),
    {
      url: s
    }: any = i;
  if ((s as any) === (null as any)) {
    let I: any;
    return ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (I = ((d as any).jsx as any)(Ke, {
      "aria-hidden": !0,
      color: "green",
      name: "chat-bubble",
      size: "base"
    }), (e as any)[0] = I) : I = (e as any)[0], I;
  }
  let t: any;
  ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (t = {
    className: "sand-1lliihq sand-2lah0s sand-w4jnvo sand-1qx5ct2 sand-19kjcj4"
  }, (e as any)[1] = t) : t = (e as any)[1];
  let l: any;
  return ((e as any)[2] as any) !== (s as any) ? (l = ((d as any).jsx as any)("img", {
    alt: "",
    draggable: !1,
    height: 20,
    src: s,
    width: 20,
    ...t
  }), (e as any)[2] = s, (e as any)[3] = l) : l = (e as any)[3], l;
}
function Fe(this: any, i: any): any {
  (Fe as any).d = 514;
  const e: any = ((ke as any).c as any)(29),
    {
      appIconUrl: s,
      target: t,
      recipientName: l,
      alwaysAllowed: I
    }: any = i,
    b: any = (I as any) === (void 0 as any) ? !1 : I,
    {
      _: n
    }: any = (Ne as any)();
  let o: any, m: any, v: any, T: any, S: any, a: any;
  if (((e as any)[0] as any) !== (n as any) || ((e as any)[1] as any) !== (s as any) || ((e as any)[2] as any) !== (l as any) || ((e as any)[3] as any) !== ((t as any).recipient as any) || ((e as any)[4] as any) !== ((t as any).text as any)) {
    const V: any = (pt as any)((t as any).text);
    m = l ?? (t as any).recipient, o = mt, ((e as any)[11] as any) !== (s as any) ? (v = ((d as any).jsx as any)(Oe, {
      url: s
    }), (e as any)[11] = s, (e as any)[12] = v) : v = (e as any)[12], T = !0, ((e as any)[13] as any) !== (n as any) ? (S = (n as any)({
      id: "h69WC6"
    }), (e as any)[13] = n, (e as any)[14] = S) : S = (e as any)[14], a = (n as any)({
      id: "p0Rg3/",
      values: {
        0: l ?? (t as any).recipient,
        firstLine: V
      }
    }), (e as any)[0] = n, (e as any)[1] = s, (e as any)[2] = l, (e as any)[3] = (t as any).recipient, (e as any)[4] = (t as any).text, (e as any)[5] = o, (e as any)[6] = m, (e as any)[7] = v, (e as any)[8] = T, (e as any)[9] = S, (e as any)[10] = a;
  } else o = (e as any)[5], m = (e as any)[6], v = (e as any)[7], T = (e as any)[8], S = (e as any)[9], a = (e as any)[10];
  let g: any;
  ((e as any)[15] as any) !== (n as any) || ((e as any)[16] as any) !== (b as any) || ((e as any)[17] as any) !== (m as any) ? (g = b ? {
    note: (n as any)({
      id: "ONZQOq",
      values: {
        recipient: m
      }
    })
  } : {}, (e as any)[15] = n, (e as any)[16] = b, (e as any)[17] = m, (e as any)[18] = g) : g = (e as any)[18];
  let f: any;
  ((e as any)[19] as any) !== (n as any) ? (f = (n as any)({
    id: "t7TeQU"
  }), (e as any)[19] = n, (e as any)[20] = f) : f = (e as any)[20];
  let k: any;
  return ((e as any)[21] as any) !== (o as any) || ((e as any)[22] as any) !== (v as any) || ((e as any)[23] as any) !== (T as any) || ((e as any)[24] as any) !== (S as any) || ((e as any)[25] as any) !== (a as any) || ((e as any)[26] as any) !== (g as any) || ((e as any)[27] as any) !== (f as any) ? (k = ((d as any).jsx as any)(o, {
    leading: v,
    showStatusDot: T,
    status: S,
    summary: a,
    ...g,
    title: f,
    tone: "success"
  }), (e as any)[21] = o, (e as any)[22] = v, (e as any)[23] = T, (e as any)[24] = S, (e as any)[25] = a, (e as any)[26] = g, (e as any)[27] = f, (e as any)[28] = k) : k = (e as any)[28], k;
}
function $e(this: any, i: any): any {
  ($e as any).d = 513;
  const e: any = ((ke as any).c as any)(69),
    {
      appIconUrl: s,
      entryId: t,
      target: l,
      recipientName: I,
      origin: b,
      send: n,
      alwaysAllow: o,
      dontSend: m,
      policyNote: v,
      failureNote: T,
      rootRef: S
    }: any = i,
    {
      _: a
    }: any = (Ne as any)();
  let g: any;
  e: switch ((b as any).kind) {
    case "this-computer":
      {
        let D: any;
        ((e as any)[0] as any) !== (a as any) ? (D = (a as any)({
          id: "K/nVBm"
        }), (e as any)[0] = a, (e as any)[1] = D) : D = (e as any)[1], g = D;
        break e;
      }
    case "machine":
      {
        const D: any = (b as any).label;
        let ee: any;
        ((e as any)[2] as any) !== (a as any) || ((e as any)[3] as any) !== (D as any) ? (ee = (a as any)({
          id: "6SnR1w",
          values: {
            machineLabel: D
          }
        }), (e as any)[2] = a, (e as any)[3] = D, (e as any)[4] = ee) : ee = (e as any)[4], g = ee;
        break e;
      }
  }
  let f: any;
  ((e as any)[5] as any) !== (a as any) ? (f = (a as any)({
    id: "+zYUxF"
  }), (e as any)[5] = a, (e as any)[6] = f) : f = (e as any)[6];
  let k: any;
  ((e as any)[7] as any) !== (m as any) || ((e as any)[8] as any) !== (f as any) ? (k = {
    label: f,
    ...m
  }, (e as any)[7] = m, (e as any)[8] = f, (e as any)[9] = k) : k = (e as any)[9];
  const V: any = k;
  let ie: any;
  ((e as any)[10] as any) !== (a as any) ? (ie = (a as any)({
    id: "JlFcis"
  }), (e as any)[10] = a, (e as any)[11] = ie) : ie = (e as any)[11];
  let se: any;
  ((e as any)[12] as any) !== (n as any) || ((e as any)[13] as any) !== (ie as any) ? (se = {
    label: ie,
    variant: "primary",
    ...n
  }, (e as any)[12] = n, (e as any)[13] = ie, (e as any)[14] = se) : se = (e as any)[14];
  let re: any;
  ((e as any)[15] as any) !== (o as any) ? (re = (o as any) === (void 0 as any) ? [] : [o], (e as any)[15] = o, (e as any)[16] = re) : re = (e as any)[16];
  let R: any;
  ((e as any)[17] as any) !== (V as any) || ((e as any)[18] as any) !== (se as any) || ((e as any)[19] as any) !== (re as any) ? (R = [se, ...re, V], (e as any)[17] = V, (e as any)[18] = se, (e as any)[19] = re, (e as any)[20] = R) : R = (e as any)[20];
  let w: any;
  ((e as any)[21] as any) !== (v as any) ? (w = (v as any) === (void 0 as any) ? {} : {
    answeredNote: v
  }, (e as any)[21] = v, (e as any)[22] = w) : w = (e as any)[22];
  let ne: any;
  ((e as any)[23] as any) !== (a as any) ? (ne = (a as any)({
    id: "qM5wI6"
  }), (e as any)[23] = a, (e as any)[24] = ne) : ne = (e as any)[24];
  let P: any, _: any;
  ((e as any)[25] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (_ = {
    className: "sand-78zum5 sand-dt5ytf sand-167g77z sand-9f619 sand-h8yej3 sand-euugli sand-7z7khe sand-mkeg23 sand-1y0btm7 sand-q03nf1 sand-4pepcl sand-13l7odt"
  }, P = {
    className: "sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-euugli"
  }, (e as any)[25] = P, (e as any)[26] = _) : (P = (e as any)[25], _ = (e as any)[26]);
  let W: any;
  ((e as any)[27] as any) !== (a as any) ? (W = (a as any)({
    id: "/jQctM"
  }), (e as any)[27] = a, (e as any)[28] = W) : W = (e as any)[28];
  let L: any;
  ((e as any)[29] as any) !== (W as any) ? (L = ((d as any).jsx as any)(je, {
    color: "secondary",
    size: "md",
    children: W
  }), (e as any)[29] = W, (e as any)[30] = L) : L = (e as any)[30];
  let y: any;
  ((e as any)[31] as any) !== (I as any) || ((e as any)[32] as any) !== ((l as any).recipient as any) ? (y = (I as any) === (void 0 as any) ? ((d as any).jsx as any)(je, {
    rootStyle: (Le as any).recipient,
    size: "sm",
    weight: "medium",
    children: ((d as any).jsx as any)("bdi", {
      dir: "ltr",
      children: (l as any).recipient
    })
  }) : ((d as any).jsxs as any)((d as any).Fragment, {
    children: [((d as any).jsx as any)(je, {
      rootStyle: (Le as any).recipient,
      size: "sm",
      weight: "medium",
      children: ((d as any).jsx as any)("bdi", {
        children: I
      })
    }), ((d as any).jsx as any)(je, {
      color: "secondary",
      rootStyle: (Le as any).handle,
      size: "sm",
      children: ((d as any).jsx as any)("bdi", {
        dir: "ltr",
        children: (l as any).recipient
      })
    })]
  }), (e as any)[31] = I, (e as any)[32] = (l as any).recipient, (e as any)[33] = y) : y = (e as any)[33];
  let j: any;
  ((e as any)[34] as any) !== (L as any) || ((e as any)[35] as any) !== (y as any) ? (j = ((d as any).jsxs as any)("div", {
    ...P,
    children: [L, y]
  }), (e as any)[34] = L, (e as any)[35] = y, (e as any)[36] = j) : j = (e as any)[36];
  let q: any;
  ((e as any)[37] as any) !== ((l as any).text as any) ? (q = (((l as any).text as any).length as any) === (0 as any) ? null : ((d as any).jsx as any)("div", {
    className: "sand-78zum5 sand-13a6bvl sand-1im30kd",
    children: ((d as any).jsxs as any)("div", {
      className: "sand-1n2onr6 sand-c8icb0 sand-r6dmxw sand-aope02 sand-gqmno8 sand-1g2026g sand-fungia sand-fc7y3v sand-uy8w9f sand-1k6tqyu sand-126k92a sand-j0a0fe",
      children: [((d as any).jsx as any)("div", {
        dir: "auto",
        ...(Ve as any)((Le as any).bubbleText, (st as any).thinScrollbar),
        children: (l as any).text
      }), ((d as any).jsx as any)(Ue, {})]
    })
  }), (e as any)[37] = (l as any).text, (e as any)[38] = q) : q = (e as any)[38];
  let Q: any;
  ((e as any)[39] as any) !== (j as any) || ((e as any)[40] as any) !== (q as any) ? (Q = ((d as any).jsxs as any)("div", {
    ..._,
    children: [j, q]
  }), (e as any)[39] = j, (e as any)[40] = q, (e as any)[41] = Q) : Q = (e as any)[41];
  let h: any;
  ((e as any)[42] as any) !== (g as any) ? (h = (g as any) === (void 0 as any) ? {} : {
    description: g
  }, (e as any)[42] = g, (e as any)[43] = h) : h = (e as any)[43];
  let Y: any;
  ((e as any)[44] as any) !== (a as any) ? (Y = (a as any)({
    id: "93lvUi"
  }), (e as any)[44] = a, (e as any)[45] = Y) : Y = (e as any)[45];
  let x: any;
  ((e as any)[46] as any) !== (V as any) || ((e as any)[47] as any) !== (Y as any) ? (x = {
    ...V,
    tooltip: Y
  }, (e as any)[46] = V, (e as any)[47] = Y, (e as any)[48] = x) : x = (e as any)[48];
  let J: any;
  ((e as any)[49] as any) !== (T as any) ? (J = (T as any) === (void 0 as any) ? {} : {
    failureNote: T
  }, (e as any)[49] = T, (e as any)[50] = J) : J = (e as any)[50];
  let c: any;
  ((e as any)[51] as any) !== (s as any) ? (c = ((d as any).jsx as any)(Oe, {
    url: s
  }), (e as any)[51] = s, (e as any)[52] = c) : c = (e as any)[52];
  let X: any;
  ((e as any)[53] as any) !== (S as any) ? (X = (S as any) === (void 0 as any) ? {} : {
    rootRef: S
  }, (e as any)[53] = S, (e as any)[54] = X) : X = (e as any)[54];
  let Z: any;
  ((e as any)[55] as any) !== (a as any) ? (Z = (a as any)({
    id: "rRtbxf"
  }), (e as any)[55] = a, (e as any)[56] = Z) : Z = (e as any)[56];
  let G: any;
  return ((e as any)[57] as any) !== (t as any) || ((e as any)[58] as any) !== (Q as any) || ((e as any)[59] as any) !== (h as any) || ((e as any)[60] as any) !== (x as any) || ((e as any)[61] as any) !== (J as any) || ((e as any)[62] as any) !== (c as any) || ((e as any)[63] as any) !== (X as any) || ((e as any)[64] as any) !== (Z as any) || ((e as any)[65] as any) !== (R as any) || ((e as any)[66] as any) !== (w as any) || ((e as any)[67] as any) !== (ne as any) ? (G = ((d as any).jsx as any)(ze, {
    actions: R,
    ...w,
    ariaLabel: ne,
    body: Q,
    ...h,
    dismiss: x,
    entryId: t,
    ...J,
    hideBadge: !0,
    leading: c,
    ...X,
    title: Z
  }), (e as any)[57] = t, (e as any)[58] = Q, (e as any)[59] = h, (e as any)[60] = x, (e as any)[61] = J, (e as any)[62] = c, (e as any)[63] = X, (e as any)[64] = Z, (e as any)[65] = R, (e as any)[66] = w, (e as any)[67] = ne, (e as any)[68] = G) : G = (e as any)[68], G;
}
const vt: any = {
    id: "svTEGM"
  },
  bt: any = {
    id: "a9tTHW"
  },
  De: any = {
    id: "2ltcq2"
  },
  St: any = {
    id: "2pfonj"
  },
  wt: any = {
    id: "TDaQFx"
  },
  It: any = {
    id: "rek4Fs"
  },
  Tt: any = {
    id: "g3D+vR"
  },
  Be: any = {
    id: "sSMHtl"
  },
  xt: any = {
    id: "QqKsGg"
  },
  kt: any = {
    kind: "idle"
  },
  At: any = {
    kind: "failed"
  };
function Me(this: any, i: any): any {
  return (i as any) === ("denied" as any) || (i as any) === ("never" as any) || (i as any) === ("expired" as any);
}
function He(this: any, i: any): any {
  return ((i as any).action as any) === ("send-imessage" as any) && ((i as any).status as any) !== ("pending" as any) && !(Me as any)((i as any).status);
}
function Et(this: any, i: any): any {
  return ((i as any).standingGrant?.kind as any) === ("offered" as any);
}
function jt(this: any, i: any, e: any): any {
  return (i as any) !== ("global" as any) ? "offered" : (e as any).ready ? (ct as any)("always", (e as any).value) ? "forbidden-by-team" : "offered" : "pending-team-policy";
}
function Lt(this: any, i: any, e: any): any {
  switch (e) {
    case "team-policy":
      return (i as any)({
        id: "ABBYa1"
      });
    case "group-chat":
      return (i as any)({
        id: "sluTWr"
      });
    case "invalid-recipient":
    case "machine-unsupported":
    case "harness-cannot-persist":
      return;
  }
}
function Nt(this: any, i: any): any {
  return i instanceof HTMLInputElement || i instanceof HTMLTextAreaElement || i instanceof HTMLSelectElement;
}
function _t(this: any, i: any, e: any, s: any): any {
  if (((((s as any).trim as any)() as any).length as any) !== (0 as any)) return {
    label: (i as any)((e as any) === ("run-command" as any) ? {
      id: "oWoQSS"
    } : {
      id: "OStQrX"
    }),
    detail: {
      kind: "text",
      text: s
    }
  };
}
function Mt(this: any, i: any, e: any): any {
  const s: any = (e as any).description?.replace(/\s+/g, " ").trim();
  if ((s as any) !== (void 0 as any) && ((s as any).length as any) > (0 as any)) return ((s as any).replace as any)(/[.!?]+$/u, "");
  const t: any = (((((e as any).target as any).replace as any)(/\s+/g, " ") as any).trim as any)();
  switch ((e as any).action) {
    case "run-command":
      return;
    case "send-input":
      return (i as any)({
        id: "tH+U6E"
      });
    case "read-file":
    case "read-ai-tool-setup":
      return ((t as any).length as any) > (0 as any) ? (i as any)({
        id: "kQzX+T",
        values: {
          target: t
        }
      }) : (i as any)({
        id: "RK5AcV"
      });
    case "list-directory":
      return ((t as any).length as any) > (0 as any) ? (i as any)({
        id: "KbFZpy",
        values: {
          target: t
        }
      }) : (i as any)({
        id: "BKLcD+"
      });
    case "write-file":
      return ((t as any).length as any) > (0 as any) ? (i as any)({
        id: "j0vvBP",
        values: {
          target: t
        }
      }) : (i as any)({
        id: "EF1t/Y"
      });
    case "read-messages":
      return (i as any)({
        id: "Htzxqs"
      });
    case "send-imessage":
      return (i as any)({
        id: "RmCL2p"
      });
  }
}
function Ct(this: any, i: any, e: any): any {
  return (e as any) !== (void 0 as any) ? {
    kind: "machine",
    label: e
  } : ((i as any).machineId as any) === (void 0 as any) ? {
    kind: "this-computer"
  } : {
    kind: "unnamed-machine"
  };
}
function Ot(this: any, i: any): any {
  switch ((Ae as any)(i)) {
    case "global":
      return {
        title: vt,
        description: bt
      };
    case "setting":
      return {
        title: De,
        description: St
      };
    case "subject":
      return {
        title: De,
        description: wt
      };
  }
}
function Pt(this: any, i: any, e: any): any {
  return ((Ae as any)((e as any).action) as any) !== ("global" as any) ? ((e as any).status as any) === ("always" as any) ? (i as any)({
    id: "UJAP1D"
  }) : ((e as any).status as any) === ("never" as any) ? (i as any)({
    id: "oxUMTM"
  }) : (Me as any)((e as any).status) ? (i as any)({
    id: "cdGXuM"
  }) : (i as any)({
    id: "f9pa67"
  }) : ((e as any).status as any) === ("always" as any) ? (i as any)({
    id: "0dyBiF"
  }) : ((e as any).status as any) === ("never" as any) ? (i as any)({
    id: "HHczaN"
  }) : (Me as any)((e as any).status) ? (i as any)({
    id: "2PF7X0"
  }) : (i as any)({
    id: "U3KtfK"
  });
}
async function qt(this: any, i: any): Promise<any> {
  const {
      ask: e
    }: any = i,
    s: any = (Ae as any)((e as any).action);
  let t: any = (i as any).resolution,
    l: any = !1;
  if ((s as any) === ("subject" as any) && (t as any) === ("always" as any) && !(Et as any)(e) && (t = "allow-once"), (s as any) !== ("global" as any) && (t as any) === ("never" as any) && (t = ve), (s as any) === ("global" as any) && ((t as any) === ("always" as any) || (t as any) === ("never" as any))) try {
    ((await ((i as any).setPermission as any)(t, (e as any).machineId)) as any) !== (t as any) && (t = (t as any) === ("always" as any) ? "allow-once" : ve);
  } catch (b: any) {
    (Re as any)(b), t = (t as any) === ("always" as any) ? "allow-once" : ve, l = !0;
  }
  if ((s as any) === ("subject" as any) && (t as any) === ("always" as any) && ((e as any).standingGrant?.kind as any) === ("offered" as any)) if (!(i as any).recordApprovalLocally) t = "allow-once";else try {
    const {
      stored: b
    }: any = await ((i as any).recordStandingGrant as any)({
      action: (e as any).action,
      recipient: ((e as any).standingGrant as any).recipient,
      ...(((e as any).machineId as any) === (void 0 as any) ? {} : {
        machineId: (e as any).machineId
      })
    });
    b || (t = "allow-once");
  } catch (b: any) {
    (Re as any)(b), t = "allow-once";
  }
  return ((t as any) === ("allow-once" as any) || (t as any) === ("always" as any) && (s as any) === ("subject" as any)) && (i as any).recordApprovalLocally && (((e as any).machineId as any) === (void 0 as any) ? await ((i as any).recordApproval as any)((e as any).requestId, (e as any).action, (e as any).target) : await ((i as any).recordApproval as any)((e as any).requestId, (e as any).action, (e as any).target, (e as any).machineId)), await ((i as any).resolveLocalToolPermission as any)({
    entryId: (i as any).entryId,
    requestId: (e as any).requestId,
    resolution: t,
    agentId: (i as any).agentId,
    ...((((i as any).sessionId as any).length as any) > (0 as any) ? {
      sessionId: (i as any).sessionId
    } : {})
  }), {
    sent: t,
    standingSaveFailed: l
  };
}
function Gt(this: any, i: any, e: any): any {
  return ((e as any).kind as any) !== ("answered" as any) || ((Ae as any)((i as any).action) as any) !== ("global" as any) ? !1 : (e as any).standingSaveFailed ? !0 : ((e as any).sent as any) === ("always" as any) && ((i as any).machineId as any) !== (void 0 as any) && ((i as any).status as any) === ("allowed" as any);
}
function Ce(this: any, i: any): any {
  (Ce as any).d = 497;
  const e: any = ((ke as any).c as any)(215),
    {
      entryId: s,
      ask: t,
      agentId: l,
      isEscapeTarget: I
    }: any = i,
    b: any = (I as any) === (void 0 as any) ? !1 : I,
    {
      i18n: n,
      _: o
    }: any = (Ne as any)(),
    {
      _: m
    }: any = (Ne as any)(),
    {
      resolveLocalToolPermission: v
    }: any = (nt as any)(),
    T: any = (at as any)(l),
    S: any = (Qe as any)(),
    a: any = (Ye as any)(),
    {
      setPermission: g
    }: any = (Je as any)(),
    f: any = (lt as any)(),
    k: any = (ot as any)(),
    V: any = ((t as any).status as any) === ("pending" as any);
  (Pe as any)(V ? ((k as any).teamPolicy as any).refresh : ((k as any).teamPolicy as any).load);
  const ie: any = (gt as any)(),
    se: any = (yt as any)();
  (Pe as any)(((k as any).localToolPermission as any).loadMessagesAppIcon);
  const re: any = (rt as any)(),
    R: any = ((re as any).status as any) === ("ready" as any) ? (re as any).value : null,
    [w, ne]: any = ((We as any).useState as any)(kt),
    P: any = V && (((w as any).kind as any) === ("idle" as any) || ((w as any).kind as any) === ("failed" as any)) && (l as any) != (null as any);
  let _: any = ((f as any).status as any) === ("ready" as any) ? (f as any).value : void 0;
  (((f as any).status as any) === ("loading" as any) || ((f as any).status as any) === ("failed" as any)) && (_ = (f as any).previous);
  let W: any;
  ((e as any)[0] as any) !== (_ as any) ? (W = _?.find(Rt), (e as any)[0] = _, (e as any)[1] = W) : W = (e as any)[1];
  const L: any = W,
    y: any = ((t as any).machineId as any) === (void 0 as any) || (L?.machineId as any) === ((t as any).machineId as any),
    j: any = P,
    q: any = P;
  let Q: any;
  ((e as any)[2] as any) !== ((t as any).machineId as any) || ((e as any)[3] as any) !== ((t as any).machineLabel as any) || ((e as any)[4] as any) !== (_ as any) ? (Q = (t as any).machineLabel ?? _?.find((u: any): any => ((u as any).machineId as any) === ((t as any).machineId as any))?.label, (e as any)[2] = (t as any).machineId, (e as any)[3] = (t as any).machineLabel, (e as any)[4] = _, (e as any)[5] = Q) : Q = (e as any)[5];
  const h: any = Q;
  let Y: any;
  ((e as any)[6] as any) !== ((t as any).action as any) || ((e as any)[7] as any) !== (ie as any) || ((e as any)[8] as any) !== (se as any) ? (Y = (jt as any)((Ae as any)((t as any).action), {
    ready: se,
    value: ie
  }), (e as any)[6] = (t as any).action, (e as any)[7] = ie, (e as any)[8] = se, (e as any)[9] = Y) : Y = (e as any)[9];
  const x: any = Y;
  let J: any;
  ((e as any)[10] as any) !== (l as any) || ((e as any)[11] as any) !== (x as any) || ((e as any)[12] as any) !== (t as any) || ((e as any)[13] as any) !== (j as any) || ((e as any)[14] as any) !== (q as any) || ((e as any)[15] as any) !== (P as any) || ((e as any)[16] as any) !== (s as any) || ((e as any)[17] as any) !== (y as any) || ((e as any)[18] as any) !== (S as any) || ((e as any)[19] as any) !== (a as any) || ((e as any)[20] as any) !== (v as any) || ((e as any)[21] as any) !== (T as any) || ((e as any)[22] as any) !== (g as any) ? (J = (u: any): any => {
    let p: any = j;
    (u as any) === (ve as any) ? p = P : (u as any) === ("allow-once" as any) && (p = q), !(!p || (l as any) == (null as any)) && ((u as any) === ("always" as any) && (x as any) !== ("offered" as any) || ((ne as any)({
      kind: "submitting",
      resolution: u
    }), (((qt as any)({
      setPermission: g,
      recordApproval: S,
      recordStandingGrant: a,
      resolveLocalToolPermission: v,
      entryId: s,
      agentId: l,
      sessionId: T,
      ask: t,
      recordApprovalLocally: y,
      resolution: u
    }) as any).then as any)((r: any): any => (ne as any)({
      kind: "answered",
      ...r
    }), (r: any): any => {
      (ft as any)(r, {
        tags: {
          sand_area: "local-tool-permission"
        }
      }), (ne as any)(At);
    })));
  }, (e as any)[10] = l, (e as any)[11] = x, (e as any)[12] = t, (e as any)[13] = j, (e as any)[14] = q, (e as any)[15] = P, (e as any)[16] = s, (e as any)[17] = y, (e as any)[18] = S, (e as any)[19] = a, (e as any)[20] = v, (e as any)[21] = T, (e as any)[22] = g, (e as any)[23] = J) : J = (e as any)[23];
  const c: any = J;
  let X: any;
  ((e as any)[24] as any) !== (l as any) || ((e as any)[25] as any) !== (c as any) ? (X = (u: any): any => {
    if ((u as any) == (null as any) || (l as any) == (null as any)) return;
    const p: any = (r: any): any => {
      ((r as any).key as any) !== ("Escape" as any) || (r as any).repeat || (r as any).defaultPrevented || (r as any).metaKey || (r as any).ctrlKey || (r as any).altKey || (r as any).shiftKey || (Nt as any)((r as any).target) || ((u as any).checkVisibility?.({
        visibilityProperty: !0
      }) ?? !0) && ((ut as any)() || (((r as any).preventDefault as any)(), ((r as any).stopPropagation as any)(), (c as any)(ve)));
    };
    return ((window as any).addEventListener as any)("keydown", p, {
      capture: !0
    }), (): any => ((window as any).removeEventListener as any)("keydown", p, {
      capture: !0
    });
  }, (e as any)[24] = l, (e as any)[25] = c, (e as any)[26] = X) : X = (e as any)[26];
  const Z: any = X;
  if (!V) {
    if ((He as any)(t)) {
      const C: any = ((t as any).status as any) === ("always" as any);
      let O: any;
      ((e as any)[27] as any) !== ((t as any).target as any) ? (O = (qe as any)((t as any).target), (e as any)[27] = (t as any).target, (e as any)[28] = O) : O = (e as any)[28];
      let A: any;
      ((e as any)[29] as any) !== ((t as any).recipientName as any) ? (A = ((t as any).recipientName as any) === (void 0 as any) ? {} : {
        recipientName: (t as any).recipientName
      }, (e as any)[29] = (t as any).recipientName, (e as any)[30] = A) : A = (e as any)[30];
      let E: any;
      return ((e as any)[31] as any) !== (R as any) || ((e as any)[32] as any) !== (C as any) || ((e as any)[33] as any) !== (O as any) || ((e as any)[34] as any) !== (A as any) ? (E = ((d as any).jsx as any)(Fe, {
        alwaysAllowed: C,
        appIconUrl: R,
        target: O,
        ...A
      }), (e as any)[31] = R, (e as any)[32] = C, (e as any)[33] = O, (e as any)[34] = A, (e as any)[35] = E) : E = (e as any)[35], E;
    }
    let u: any;
    ((e as any)[36] as any) !== (m as any) || ((e as any)[37] as any) !== (t as any) ? (u = (Pt as any)(m, t), (e as any)[36] = m, (e as any)[37] = t, (e as any)[38] = u) : u = (e as any)[38];
    const p: any = u;
    let r: any;
    ((e as any)[39] as any) !== (p as any) ? (r = ((d as any).jsx as any)(Ge, {
      isTruncating: !0,
      title: p,
      children: p
    }), (e as any)[39] = p, (e as any)[40] = r) : r = (e as any)[40];
    let M: any;
    ((e as any)[41] as any) !== (t as any) || ((e as any)[42] as any) !== (n as any) || ((e as any)[43] as any) !== (w as any) ? (M = (Gt as any)(t, w) ? ((d as any).jsx as any)(Ge, {
      tone: "tertiary",
      children: ((n as any)._ as any)(xt)
    }) : null, (e as any)[41] = t, (e as any)[42] = n, (e as any)[43] = w, (e as any)[44] = M) : M = (e as any)[44];
    let N: any;
    return ((e as any)[45] as any) !== (r as any) || ((e as any)[46] as any) !== (M as any) ? (N = ((d as any).jsxs as any)(Xe, {
      className: "sand-local-tool-permission-outcome",
      children: [r, M]
    }), (e as any)[45] = r, (e as any)[46] = M, (e as any)[47] = N) : N = (e as any)[47], N;
  }
  if (((t as any).action as any) === ("send-imessage" as any)) {
    let u: any;
    ((e as any)[48] as any) !== (t as any) || ((e as any)[49] as any) !== (h as any) ? (u = (Ct as any)(t, h), (e as any)[48] = t, (e as any)[49] = h, (e as any)[50] = u) : u = (e as any)[50];
    const p: any = u,
      r: any = (t as any).standingGrant,
      M: any = (r?.kind as any) === ("offered" as any) ? (t as any).recipientName ?? (r as any).recipient : void 0;
    let N: any;
    ((e as any)[51] as any) !== (L as any) || ((e as any)[52] as any) !== (y as any) || ((e as any)[53] as any) !== (p as any) ? (N = !y && (L as any) !== (void 0 as any) && ((p as any).kind as any) === ("machine" as any) ? {
      tooltip: (p as any).label
    } : {}, (e as any)[51] = L, (e as any)[52] = y, (e as any)[53] = p, (e as any)[54] = N) : N = (e as any)[54];
    const C: any = N;
    let O: any;
    ((e as any)[55] as any) !== (m as any) || ((e as any)[56] as any) !== (r as any) ? (O = (r?.kind as any) === ("unavailable" as any) ? (Lt as any)(m, (r as any).reason) : void 0, (e as any)[55] = m, (e as any)[56] = r, (e as any)[57] = O) : O = (e as any)[57];
    const A: any = O;
    let E: any;
    ((e as any)[58] as any) !== ((t as any).target as any) ? (E = (qe as any)((t as any).target), (e as any)[58] = (t as any).target, (e as any)[59] = E) : E = (e as any)[59];
    let B: any;
    ((e as any)[60] as any) !== ((t as any).recipientName as any) ? (B = ((t as any).recipientName as any) === (void 0 as any) ? {} : {
      recipientName: (t as any).recipientName
    }, (e as any)[60] = (t as any).recipientName, (e as any)[61] = B) : B = (e as any)[61];
    let ae: any;
    ((e as any)[62] as any) !== (c as any) ? (ae = (): any => (c as any)("allow-once"), (e as any)[62] = c, (e as any)[63] = ae) : ae = (e as any)[63];
    const le: any = !q;
    let z: any;
    ((e as any)[64] as any) !== (C as any) || ((e as any)[65] as any) !== (ae as any) || ((e as any)[66] as any) !== (le as any) ? (z = {
      onClick: ae,
      disabled: le,
      ...C
    }, (e as any)[64] = C, (e as any)[65] = ae, (e as any)[66] = le, (e as any)[67] = z) : z = (e as any)[67];
    let K: any;
    ((e as any)[68] as any) !== (o as any) || ((e as any)[69] as any) !== (j as any) || ((e as any)[70] as any) !== (M as any) || ((e as any)[71] as any) !== (y as any) || ((e as any)[72] as any) !== (_ as any) || ((e as any)[73] as any) !== (C as any) || ((e as any)[74] as any) !== (c as any) ? (K = (M as any) === (void 0 as any) ? {} : {
      alwaysAllow: {
        label: (o as any)({
          id: "iPJV+y",
          values: {
            grantRecipient: M
          }
        }),
        onClick: (): any => (c as any)("always"),
        disabled: !j || (_ as any) === (void 0 as any) || !y,
        ...C
      }
    }, (e as any)[68] = o, (e as any)[69] = j, (e as any)[70] = M, (e as any)[71] = y, (e as any)[72] = _, (e as any)[73] = C, (e as any)[74] = c, (e as any)[75] = K) : K = (e as any)[75];
    let U: any;
    ((e as any)[76] as any) !== (c as any) ? (U = (): any => (c as any)(ve), (e as any)[76] = c, (e as any)[77] = U) : U = (e as any)[77];
    const he: any = !P;
    let F: any;
    ((e as any)[78] as any) !== (U as any) || ((e as any)[79] as any) !== (he as any) ? (F = {
      onClick: U,
      disabled: he
    }, (e as any)[78] = U, (e as any)[79] = he, (e as any)[80] = F) : F = (e as any)[80];
    let $: any;
    ((e as any)[81] as any) !== (A as any) ? ($ = (A as any) === (void 0 as any) ? {} : {
      policyNote: A
    }, (e as any)[81] = A, (e as any)[82] = $) : $ = (e as any)[82];
    let H: any;
    ((e as any)[83] as any) !== (n as any) || ((e as any)[84] as any) !== ((w as any).kind as any) ? (H = ((w as any).kind as any) === ("failed" as any) ? ((n as any)._ as any)(Be) : void 0, (e as any)[83] = n, (e as any)[84] = (w as any).kind, (e as any)[85] = H) : H = (e as any)[85];
    const oe: any = b ? Z : void 0;
    let te: any;
    return ((e as any)[86] as any) !== (s as any) || ((e as any)[87] as any) !== (R as any) || ((e as any)[88] as any) !== (p as any) || ((e as any)[89] as any) !== (E as any) || ((e as any)[90] as any) !== (B as any) || ((e as any)[91] as any) !== (z as any) || ((e as any)[92] as any) !== (K as any) || ((e as any)[93] as any) !== (F as any) || ((e as any)[94] as any) !== ($ as any) || ((e as any)[95] as any) !== (H as any) || ((e as any)[96] as any) !== (oe as any) ? (te = ((d as any).jsx as any)($e, {
      appIconUrl: R,
      entryId: s,
      target: E,
      ...B,
      origin: p,
      send: z,
      ...K,
      dontSend: F,
      ...$,
      failureNote: H,
      rootRef: oe
    }), (e as any)[86] = s, (e as any)[87] = R, (e as any)[88] = p, (e as any)[89] = E, (e as any)[90] = B, (e as any)[91] = z, (e as any)[92] = K, (e as any)[93] = F, (e as any)[94] = $, (e as any)[95] = H, (e as any)[96] = oe, (e as any)[97] = te) : te = (e as any)[97], te;
  }
  let G: any, D: any;
  if (((e as any)[98] as any) !== (m as any) || ((e as any)[99] as any) !== (t as any)) {
    const u: any = (dt as any)(t);
    G = (_t as any)(m, (t as any).action, u), D = (Mt as any)(m, {
      action: (t as any).action,
      target: u
    }), (e as any)[98] = m, (e as any)[99] = t, (e as any)[100] = G, (e as any)[101] = D;
  } else G = (e as any)[100], D = (e as any)[101];
  const ee: any = D;
  let be: any, Se: any, de: any, ce: any, fe: any, ue: any, pe: any, we: any, Ie: any, me: any, Te: any, ge: any, ye: any;
  if (((e as any)[102] as any) !== (o as any) || ((e as any)[103] as any) !== (x as any) || ((e as any)[104] as any) !== ((t as any).action as any) || ((e as any)[105] as any) !== (j as any) || ((e as any)[106] as any) !== (q as any) || ((e as any)[107] as any) !== (P as any) || ((e as any)[108] as any) !== (L as any) || ((e as any)[109] as any) !== (G as any) || ((e as any)[110] as any) !== (s as any) || ((e as any)[111] as any) !== (n as any) || ((e as any)[112] as any) !== (y as any) || ((e as any)[113] as any) !== (c as any) || ((e as any)[114] as any) !== ((w as any).kind as any) || ((e as any)[115] as any) !== (ee as any) || ((e as any)[116] as any) !== (h as any)) {
    const u: any = (Ot as any)((t as any).action);
    let p: any;
    ((e as any)[130] as any) !== (o as any) ? (p = (o as any)({
      id: "NoKBgy"
    }), (e as any)[130] = o, (e as any)[131] = p) : p = (e as any)[131];
    let r: any;
    ((e as any)[132] as any) !== (c as any) ? (r = (): any => (c as any)("always"), (e as any)[132] = c, (e as any)[133] = r) : r = (e as any)[133];
    const M: any = !j || (x as any) === ("pending-team-policy" as any);
    let N: any;
    ((e as any)[134] as any) !== (o as any) || ((e as any)[135] as any) !== (x as any) ? (N = (x as any) === ("pending-team-policy" as any) ? {
      tooltip: (o as any)({
        id: "31dM0K"
      })
    } : {}, (e as any)[134] = o, (e as any)[135] = x, (e as any)[136] = N) : N = (e as any)[136];
    let C: any;
    ((e as any)[137] as any) !== (p as any) || ((e as any)[138] as any) !== (r as any) || ((e as any)[139] as any) !== (M as any) || ((e as any)[140] as any) !== (N as any) ? (C = {
      label: p,
      onClick: r,
      disabled: M,
      ...N,
      variant: "primary"
    }, (e as any)[137] = p, (e as any)[138] = r, (e as any)[139] = M, (e as any)[140] = N, (e as any)[141] = C) : C = (e as any)[141];
    const O: any = C;
    be = ze;
    let A: any;
    ((e as any)[142] as any) !== (O as any) || ((e as any)[143] as any) !== (x as any) ? (A = (x as any) === ("forbidden-by-team" as any) ? [] : [O], (e as any)[142] = O, (e as any)[143] = x, (e as any)[144] = A) : A = (e as any)[144];
    let E: any;
    ((e as any)[145] as any) !== (o as any) ? (E = (o as any)({
      id: "pFfO26"
    }), (e as any)[145] = o, (e as any)[146] = E) : E = (e as any)[146];
    let B: any;
    ((e as any)[147] as any) !== (c as any) ? (B = (): any => (c as any)("allow-once"), (e as any)[147] = c, (e as any)[148] = B) : B = (e as any)[148];
    const ae: any = !q;
    let le: any;
    ((e as any)[149] as any) !== (L as any) || ((e as any)[150] as any) !== (y as any) || ((e as any)[151] as any) !== (h as any) ? (le = !y && (L as any) !== (void 0 as any) && (h as any) !== (void 0 as any) ? {
      tooltip: h
    } : {}, (e as any)[149] = L, (e as any)[150] = y, (e as any)[151] = h, (e as any)[152] = le) : le = (e as any)[152];
    let z: any;
    ((e as any)[153] as any) !== (E as any) || ((e as any)[154] as any) !== (B as any) || ((e as any)[155] as any) !== (ae as any) || ((e as any)[156] as any) !== (le as any) ? (z = {
      label: E,
      onClick: B,
      disabled: ae,
      ...le
    }, (e as any)[153] = E, (e as any)[154] = B, (e as any)[155] = ae, (e as any)[156] = le, (e as any)[157] = z) : z = (e as any)[157];
    let K: any;
    ((e as any)[158] as any) !== (o as any) ? (K = (o as any)({
      id: "qqeAJM"
    }), (e as any)[158] = o, (e as any)[159] = K) : K = (e as any)[159];
    let U: any;
    ((e as any)[160] as any) !== (c as any) ? (U = (): any => (c as any)("never"), (e as any)[160] = c, (e as any)[161] = U) : U = (e as any)[161];
    const he: any = !j;
    let F: any;
    ((e as any)[162] as any) !== (y as any) || ((e as any)[163] as any) !== (h as any) ? (F = !y && (h as any) !== (void 0 as any) ? {
      tooltip: h
    } : {}, (e as any)[162] = y, (e as any)[163] = h, (e as any)[164] = F) : F = (e as any)[164];
    let $: any;
    ((e as any)[165] as any) !== (K as any) || ((e as any)[166] as any) !== (U as any) || ((e as any)[167] as any) !== (he as any) || ((e as any)[168] as any) !== (F as any) ? ($ = {
      label: K,
      onClick: U,
      disabled: he,
      ...F
    }, (e as any)[165] = K, (e as any)[166] = U, (e as any)[167] = he, (e as any)[168] = F, (e as any)[169] = $) : $ = (e as any)[169], ((e as any)[170] as any) !== (A as any) || ((e as any)[171] as any) !== (z as any) || ((e as any)[172] as any) !== ($ as any) ? (ge = [...A, z, $], (e as any)[170] = A, (e as any)[171] = z, (e as any)[172] = $, (e as any)[173] = ge) : ge = (e as any)[173], ((e as any)[174] as any) !== (o as any) ? (ye = (o as any)({
      id: "qM5wI6"
    }), (e as any)[174] = o, (e as any)[175] = ye) : ye = (e as any)[175], Se = ((n as any)._ as any)((u as any).description), ((e as any)[176] as any) !== (h as any) ? (de = (h as any) === (void 0 as any) ? {} : {
      location: h
    }, (e as any)[176] = h, (e as any)[177] = de) : de = (e as any)[177], ((e as any)[178] as any) !== (ee as any) ? (ce = (ee as any) === (void 0 as any) ? {} : {
      summary: ee
    }, (e as any)[178] = ee, (e as any)[179] = ce) : ce = (e as any)[179], ((e as any)[180] as any) !== (G as any) ? (fe = (G as any) === (void 0 as any) ? {} : {
      disclosure: G
    }, (e as any)[180] = G, (e as any)[181] = fe) : fe = (e as any)[181], ((e as any)[182] as any) !== (n as any) || ((e as any)[183] as any) !== ((w as any).kind as any) ? (ue = ((w as any).kind as any) === ("failed" as any) ? {
      failureNote: ((n as any)._ as any)(Be)
    } : {}, (e as any)[182] = n, (e as any)[183] = (w as any).kind, (e as any)[184] = ue) : ue = (e as any)[184];
    let H: any;
    ((e as any)[185] as any) !== (n as any) ? (H = ((n as any)._ as any)(It), (e as any)[185] = n, (e as any)[186] = H) : H = (e as any)[186];
    let oe: any;
    ((e as any)[187] as any) !== (n as any) ? (oe = ((n as any)._ as any)(Tt), (e as any)[187] = n, (e as any)[188] = oe) : oe = (e as any)[188];
    let te: any;
    ((e as any)[189] as any) !== (c as any) ? (te = (): any => (c as any)(ve), (e as any)[189] = c, (e as any)[190] = te) : te = (e as any)[190];
    const _e: any = !P;
    ((e as any)[191] as any) !== (H as any) || ((e as any)[192] as any) !== (oe as any) || ((e as any)[193] as any) !== (te as any) || ((e as any)[194] as any) !== (_e as any) ? (pe = {
      label: H,
      tooltip: oe,
      onClick: te,
      disabled: _e
    }, (e as any)[191] = H, (e as any)[192] = oe, (e as any)[193] = te, (e as any)[194] = _e, (e as any)[195] = pe) : pe = (e as any)[195], we = s, Ie = !0, ((e as any)[196] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (me = ((d as any).jsx as any)(Ke, {
      "aria-hidden": !0,
      color: "orange",
      name: "exclamation-triangle",
      size: "base"
    }), (e as any)[196] = me) : me = (e as any)[196], Te = ((n as any)._ as any)((u as any).title), (e as any)[102] = o, (e as any)[103] = x, (e as any)[104] = (t as any).action, (e as any)[105] = j, (e as any)[106] = q, (e as any)[107] = P, (e as any)[108] = L, (e as any)[109] = G, (e as any)[110] = s, (e as any)[111] = n, (e as any)[112] = y, (e as any)[113] = c, (e as any)[114] = (w as any).kind, (e as any)[115] = ee, (e as any)[116] = h, (e as any)[117] = be, (e as any)[118] = Se, (e as any)[119] = de, (e as any)[120] = ce, (e as any)[121] = fe, (e as any)[122] = ue, (e as any)[123] = pe, (e as any)[124] = we, (e as any)[125] = Ie, (e as any)[126] = me, (e as any)[127] = Te, (e as any)[128] = ge, (e as any)[129] = ye;
  } else be = (e as any)[117], Se = (e as any)[118], de = (e as any)[119], ce = (e as any)[120], fe = (e as any)[121], ue = (e as any)[122], pe = (e as any)[123], we = (e as any)[124], Ie = (e as any)[125], me = (e as any)[126], Te = (e as any)[127], ge = (e as any)[128], ye = (e as any)[129];
  let xe: any;
  ((e as any)[197] as any) !== (Z as any) || ((e as any)[198] as any) !== (b as any) ? (xe = b ? {
    rootRef: Z
  } : {}, (e as any)[197] = Z, (e as any)[198] = b, (e as any)[199] = xe) : xe = (e as any)[199];
  let Ee: any;
  return ((e as any)[200] as any) !== (be as any) || ((e as any)[201] as any) !== (Se as any) || ((e as any)[202] as any) !== (de as any) || ((e as any)[203] as any) !== (ce as any) || ((e as any)[204] as any) !== (fe as any) || ((e as any)[205] as any) !== (ue as any) || ((e as any)[206] as any) !== (pe as any) || ((e as any)[207] as any) !== (we as any) || ((e as any)[208] as any) !== (Ie as any) || ((e as any)[209] as any) !== (me as any) || ((e as any)[210] as any) !== (Te as any) || ((e as any)[211] as any) !== (xe as any) || ((e as any)[212] as any) !== (ge as any) || ((e as any)[213] as any) !== (ye as any) ? (Ee = ((d as any).jsx as any)(be, {
    actions: ge,
    ariaLabel: ye,
    description: Se,
    ...de,
    ...ce,
    ...fe,
    ...ue,
    dismiss: pe,
    entryId: we,
    hideBadge: Ie,
    leading: me,
    title: Te,
    ...xe
  }), (e as any)[200] = be, (e as any)[201] = Se, (e as any)[202] = de, (e as any)[203] = ce, (e as any)[204] = fe, (e as any)[205] = ue, (e as any)[206] = pe, (e as any)[207] = we, (e as any)[208] = Ie, (e as any)[209] = me, (e as any)[210] = Te, (e as any)[211] = xe, (e as any)[212] = ge, (e as any)[213] = ye, (e as any)[214] = Ee) : Ee = (e as any)[214], Ee;
}
function Rt(this: any, i: any): any {
  return (i as any).isCurrent;
}
function Dt(this: any, i: any): any {
  (Dt as any).d = 320;
  const e: any = ((ke as any).c as any)(19),
    {
      entry: s,
      adjacency: t,
      isKeyboardTarget: l
    }: any = i,
    I: any = (Ze as any)(),
    {
      isReadOnly: b
    }: any = (et as any)(),
    {
      ask: n
    }: any = (s as any).message,
    o: any = ((n as any).status as any) === ("pending" as any);
  if (o || (He as any)(n)) {
    const T: any = o ? "widget" : "question",
      S: any = b ? void 0 : I ?? void 0;
    let a: any;
    ((e as any)[0] as any) !== (l as any) ? (a = (l as any) === (void 0 as any) ? {} : {
      isEscapeTarget: l
    }, (e as any)[0] = l, (e as any)[1] = a) : a = (e as any)[1];
    let g: any;
    ((e as any)[2] as any) !== (n as any) || ((e as any)[3] as any) !== ((s as any).id as any) || ((e as any)[4] as any) !== (S as any) || ((e as any)[5] as any) !== (a as any) ? (g = ((d as any).jsx as any)(Ce, {
      agentId: S,
      ask: n,
      entryId: (s as any).id,
      ...a
    }), (e as any)[2] = n, (e as any)[3] = (s as any).id, (e as any)[4] = S, (e as any)[5] = a, (e as any)[6] = g) : g = (e as any)[6];
    let f: any;
    ((e as any)[7] as any) !== ((t as any).isGroupStart as any) || ((e as any)[8] as any) !== ((s as any).timestampMs as any) || ((e as any)[9] as any) !== (T as any) || ((e as any)[10] as any) !== (g as any) ? (f = ((d as any).jsx as any)(tt, {
      isGroupStart: (t as any).isGroupStart,
      timestampMs: (s as any).timestampMs,
      variant: T,
      children: g
    }), (e as any)[7] = (t as any).isGroupStart, (e as any)[8] = (s as any).timestampMs, (e as any)[9] = T, (e as any)[10] = g, (e as any)[11] = f) : f = (e as any)[11];
    let k: any;
    return ((e as any)[12] as any) !== (s as any) || ((e as any)[13] as any) !== (f as any) ? (k = ((d as any).jsx as any)(it, {
      entry: s,
      children: f
    }), (e as any)[12] = s, (e as any)[13] = f, (e as any)[14] = k) : k = (e as any)[14], k;
  }
  const m: any = b ? void 0 : I ?? void 0;
  let v: any;
  return ((e as any)[15] as any) !== (n as any) || ((e as any)[16] as any) !== ((s as any).id as any) || ((e as any)[17] as any) !== (m as any) ? (v = ((d as any).jsx as any)(Ce, {
    agentId: m,
    ask: n,
    entryId: (s as any).id
  }), (e as any)[15] = n, (e as any)[16] = (s as any).id, (e as any)[17] = m, (e as any)[18] = v) : v = (e as any)[18], v;
}
export { Dt as default };
//# debugId=70995af2-86f9-4933-911d-baf019877517
