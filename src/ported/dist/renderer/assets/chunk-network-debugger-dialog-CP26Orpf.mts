declare var DOMException: any;
declare var global: any;
declare var self: any;
declare var showSaveFilePicker: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "780fe180-b557-4f77-ac1c-62e1dedc6aca", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-780fe180-b557-4f77-ac1c-62e1dedc6aca");
  } catch (e: any) {}
} as any)();
import { c as de, r as se, j as t, T as i } from "./index.eager-vendor-Qbf9YA6n.js";
import { i as ae, aY as C } from "./index.eager-platform-Dcfeegfw.js";
import { e as oe } from "./index.eager-common-CdCvBQNJ.js";
import { dA as ue, aT as me, dB as fe, bT as pe } from "./index.eager-app-Cj5f8Gby.js";
import { z as he, x as m, W as ne } from "./index-ZYxf-aBb.js";
const re: any = [{
    id: "cursor-services",
    domain: "*.cursor.sh"
  }, {
    id: "cursor-cdn",
    domain: "*.cursor-cdn.com"
  }, {
    id: "cursor-api",
    domain: "*.cursorapi.com"
  }, {
    id: "cursorvm",
    domain: "*.cursorvm.com"
  }, {
    id: "cursorvm-nested",
    domain: "*.*.cursorvm.com"
  }, {
    id: "cursor-website",
    domain: "cursor.com"
  }, {
    id: "downloads",
    domain: "downloads.cursor.com"
  }],
  ge: string = "voice-realtime";
function xe(this: any, a: any, e: any): any {
  return e ? a : ((a as any).filter as any)((n: any): any => ((n as any).id as any) !== (ge as any));
}
function ye(this: any, a: any, e: any): any {
  return `${((JSON as any).stringify as any)({
    kind: "grok-bot-network-debugger",
    startedAtMs: (a as any).startedAtMs,
    durationMs: (a as any).durationMs,
    allowlist: ((re as any).map as any)(({
      domain: n
    }: any): any => n),
    checks: ((e as any).map as any)((n: any): any => ({
      id: (n as any).id,
      protocol: (n as any).protocol,
      status: (n as any).status,
      target: (n as any).target,
      durationMs: (n as any).durationMs,
      ...(((n as any).detail as any) == (null as any) ? {} : {
        detail: (n as any).detail
      })
    }))
  }, null, 2)}
`;
}
function je(this: any, a: any): any {
  return `grok-bot-network-debugger-${(a as any).startedAtMs}.json`;
}
function we(this: any, a: any): any {
  const e: any = [["id", (a as any).id], ["status", (a as any).status], ["protocol", (a as any).protocol], ["target", (a as any).target], ["durationMs", (String as any)((a as any).durationMs)]];
  return ((a as any).detail as any) != (null as any) && ((e as any).push as any)(["detail", (a as any).detail]), ((((e as any).map as any)(([n, s]: any): any => ((n as any) + (": " as any) as any) + (s as any)) as any).join as any)(`
`);
}
const ke: any = {
    passed: "check-circle",
    warning: "warning",
    failed: "x-circle",
    skipped: "minus-circle"
  },
  be: string = "ms",
  ie: any = ((((re as any).map as any)(({
    domain: a
  }: any): any => a) as any).join as any)(`
`),
  Se: any = ((["*.cursorvm.com", "*.*.cursorvm.com"] as any).join as any)(`
`),
  _e: any = new (Set as any)(["computer-dns", "computer-tls", "computer-health", "computer-events", "computer-screen-websocket"]),
  ve: any = new (Set as any)(["api", "dns", "http", "https", "sse", "tls", "websocket"]);
function te(this: any, a: any): any {
  return ((((((a as any).split as any)("-") as any).map as any)((e: any, n: any): any => ((ve as any).has as any)(e) ? ((e as any).toUpperCase as any)() : (n as any) === (0 as any) ? `${((((e as any).slice as any)(0, 1) as any).toUpperCase as any)()}${((e as any).slice as any)(1)}` : e) as any).join as any)(" ");
}
function Ne(this: any, a: any): any {
  const [e, ...n]: any = ((a as any).split as any)(":");
  return (([(te as any)(e ?? a), ...n] as any).join as any)(": ");
}
const d: any = {
  header: {
    kt9PQ7: "sand-so031l",
    kfdmCh: "sand-1q0q8m5",
    kL6WhQ: "sand-13u5rpf",
    $$css: !0
  },
  guidanceParagraph: {
    kogj98: "sand-1ghz6dp",
    $$css: !0
  },
  chevron: {
    kMwMTN: "sand-4b2ntj",
    $$css: !0
  },
  remediationCopy: {
    kogj98: "sand-1ghz6dp",
    $$css: !0
  },
  resultDetail: {
    kMwMTN: "sand-4b2ntj",
    kHjlTd: "sand-j0a0fe",
    $$css: !0
  },
  resultMeta: {
    kMwMTN: "sand-1e4uaio",
    khDVqt: "sand-uxw1ft",
    $$css: !0
  },
  passed: {
    kMwMTN: "sand-1le6hhr",
    $$css: !0
  },
  warning: {
    kMwMTN: "sand-vak8d5",
    $$css: !0
  },
  failed: {
    kMwMTN: "sand-6rl5ky",
    $$css: !0
  },
  skipped: {
    kMwMTN: "sand-1e4uaio",
    $$css: !0
  }
};
function ze(this: any, a: any): any {
  switch (a) {
    case "passed":
      return (d as any).passed;
    case "warning":
      return (d as any).warning;
    case "failed":
      return (d as any).failed;
    case "skipped":
      return (d as any).skipped;
  }
}
function Ce(this: any, a: any): any {
  return (a as any) === ("failed" as any) || (a as any) === ("warning" as any);
}
function le(this: any, a: any): any {
  (le as any).d = 1087;
  const e: any = ((de as any).c as any)(48),
    {
      isLast: n,
      result: s
    }: any = a;
  let f: any;
  ((e as any)[0] as any) !== ((s as any).status as any) ? (f = (Ce as any)((s as any).status), (e as any)[0] = (s as any).status, (e as any)[1] = f) : f = (e as any)[1];
  const [w, F]: any = ((se as any).useState as any)(f);
  let o: any;
  ((e as any)[2] as any) !== ((s as any).id as any) ? (o = (te as any)((s as any).id), (e as any)[2] = (s as any).id, (e as any)[3] = o) : o = (e as any)[3];
  const D: any = o;
  let M: any;
  ((e as any)[4] as any) !== ((s as any).status as any) ? (M = (te as any)((s as any).status), (e as any)[4] = (s as any).status, (e as any)[5] = M) : M = (e as any)[5];
  const k: any = M,
    p: any = `network-check-details-${(s as any).id}`;
  let h: any;
  ((e as any)[6] as any) !== ((s as any).id as any) || ((e as any)[7] as any) !== ((s as any).status as any) ? (h = ((s as any).status as any) === ("failed" as any) && ((_e as any).has as any)((s as any).id), (e as any)[6] = (s as any).id, (e as any)[7] = (s as any).status, (e as any)[8] = h) : h = (e as any)[8];
  const b: any = h,
    v: any = `${D}: ${k}`,
    T: any = w ? "true" : "false",
    N: any = (s as any).id,
    Z: any = (s as any).status;
  let S: any;
  ((e as any)[9] as any) !== (n as any) ? (S = ({
    0: {
      className: "sand-78zum5 sand-dt5ytf sand-3dhcaw sand-so031l sand-1q0q8m5 sand-13u5rpf"
    },
    1: {
      className: "sand-78zum5 sand-dt5ytf sand-3dhcaw sand-1q0q8m5 sand-13u5rpf sand-1qhh985"
    }
  } as any)[(!!n as any) << (0 as any)], (e as any)[9] = n, (e as any)[10] = S) : S = (e as any)[10];
  let E: any;
  ((e as any)[11] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (E = (): any => (F as any)(Me), (e as any)[11] = E) : E = (e as any)[11];
  let O: any;
  ((e as any)[12] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (O = {
    className: "sand-jyslct sand-1lugfcp sand-rvj5dj sand-1rizz8m sand-6s0dn4 sand-vptqrk sand-h8yej3 sand-1ghz6dp sand-17ak5pl sand-c342km sand-ng3xce sand-jbqb8w sand-aalx5g sand-1heor9g sand-jb2p0i sand-1qlqyl8 sand-1t35e8 sand-1pd3egz sand-15bjb6t sand-1yc453h sand-1ypdohk sand-1t137rt sand-9v5kkp sand-1k57tk5 sand-784prv sand-1wfwxd8 sand-1bqaal sand-1uczgqu sand-1iolv91"
  }, (e as any)[12] = O) : O = (e as any)[12];
  const z: any = w ? "chevron-down-small" : "chevron-right-small";
  let r: any;
  ((e as any)[13] as any) !== (z as any) ? (r = ((t as any).jsx as any)(ne, {
    "aria-hidden": !0,
    name: z,
    rootStyle: (d as any).chevron,
    size: "xs"
  }), (e as any)[13] = z, (e as any)[14] = r) : r = (e as any)[14];
  const $: any = (ke as any)[(s as any).status];
  let _: any;
  ((e as any)[15] as any) !== ((s as any).status as any) ? (_ = (ze as any)((s as any).status), (e as any)[15] = (s as any).status, (e as any)[16] = _) : _ = (e as any)[16];
  let l: any;
  ((e as any)[17] as any) !== (k as any) || ((e as any)[18] as any) !== ($ as any) || ((e as any)[19] as any) !== (_ as any) ? (l = ((t as any).jsx as any)(ne, {
    "aria-label": k,
    name: $,
    rootStyle: _,
    size: "sm"
  }), (e as any)[17] = k, (e as any)[18] = $, (e as any)[19] = _, (e as any)[20] = l) : l = (e as any)[20];
  let g: any;
  ((e as any)[21] as any) !== (D as any) ? (g = ((t as any).jsx as any)(C, {
    as: "span",
    size: "sm",
    weight: "medium",
    children: D
  }), (e as any)[21] = D, (e as any)[22] = g) : g = (e as any)[22];
  let x: any;
  ((e as any)[23] as any) !== ((s as any).protocol as any) ? (x = (((s as any).protocol as any).toUpperCase as any)(), (e as any)[23] = (s as any).protocol, (e as any)[24] = x) : x = (e as any)[24];
  let c: any;
  ((e as any)[25] as any) !== ((s as any).durationMs as any) || ((e as any)[26] as any) !== (x as any) ? (c = ((t as any).jsxs as any)(C, {
    as: "span",
    rootStyle: (d as any).resultMeta,
    size: "xs",
    children: [x, " · ", (s as any).durationMs, be]
  }), (e as any)[25] = (s as any).durationMs, (e as any)[26] = x, (e as any)[27] = c) : c = (e as any)[27];
  let y: any;
  ((e as any)[28] as any) !== (p as any) || ((e as any)[29] as any) !== (w as any) || ((e as any)[30] as any) !== (r as any) || ((e as any)[31] as any) !== (l as any) || ((e as any)[32] as any) !== (g as any) || ((e as any)[33] as any) !== (c as any) ? (y = ((t as any).jsxs as any)("button", {
    "aria-controls": p,
    "aria-expanded": w,
    onClick: E,
    type: "button",
    ...O,
    children: [r, l, g, c]
  }), (e as any)[28] = p, (e as any)[29] = w, (e as any)[30] = r, (e as any)[31] = l, (e as any)[32] = g, (e as any)[33] = c, (e as any)[34] = y) : y = (e as any)[34];
  let u: any;
  ((e as any)[35] as any) !== (p as any) || ((e as any)[36] as any) !== (w as any) || ((e as any)[37] as any) !== (b as any) || ((e as any)[38] as any) !== (s as any) ? (u = w ? ((t as any).jsx as any)("div", {
    id: p,
    className: "sand-rvj5dj sand-1uuqd9p sand-vptqrk sand-196pc8s sand-1xlntvz sand-22095l",
    children: ((t as any).jsxs as any)("div", {
      className: "sand-78zum5 sand-dt5ytf sand-11twubx sand-1k3v4rp sand-euugli",
      children: [b ? ((t as any).jsxs as any)("div", {
        "data-network-remediation": !0,
        className: "sand-78zum5 sand-dt5ytf sand-11twubx sand-1om1abp sand-1e1y6u3 sand-6y9aml sand-17ak5pl",
        children: [((t as any).jsx as any)(C, {
          as: "p",
          color: "red",
          rootStyle: (d as any).remediationCopy,
          size: "xs",
          weight: "medium",
          children: ((t as any).jsx as any)(i, {
            id: "Jq6deq"
          })
        }), ((t as any).jsx as any)("pre", {
          className: "sand-1ghz6dp sand-s338yg sand-y5h43f sand-1evy7pa sand-126k92a",
          children: Se
        }), ((t as any).jsx as any)(C, {
          as: "p",
          color: "secondary",
          rootStyle: (d as any).remediationCopy,
          size: "xs",
          children: ((t as any).jsx as any)(i, {
            id: "M9OOz1"
          })
        })]
      }) : null, ((t as any).jsxs as any)(C, {
        as: "span",
        "data-network-tested-endpoint": b ? "" : void 0,
        rootStyle: (d as any).resultDetail,
        size: "xs",
        children: [b ? ((t as any).jsx as any)(i, {
          id: "zwZaZg",
          values: {
            0: (s as any).target
          }
        }) : (s as any).target, ((s as any).detail as any) == (null as any) ? "" : ` · ${(Ne as any)((s as any).detail)}`]
      }), ((t as any).jsx as any)("pre", {
        className: "sand-1ghz6dp sand-19aaqeu sand-s338yg sand-y5h43f sand-1evy7pa sand-126k92a sand-j0a0fe",
        children: (we as any)(s)
      })]
    })
  }) : null, (e as any)[35] = p, (e as any)[36] = w, (e as any)[37] = b, (e as any)[38] = s, (e as any)[39] = u) : u = (e as any)[39];
  let j: any;
  return ((e as any)[40] as any) !== ((s as any).id as any) || ((e as any)[41] as any) !== ((s as any).status as any) || ((e as any)[42] as any) !== (y as any) || ((e as any)[43] as any) !== (u as any) || ((e as any)[44] as any) !== (v as any) || ((e as any)[45] as any) !== (T as any) || ((e as any)[46] as any) !== (S as any) ? (j = ((t as any).jsxs as any)("div", {
    "aria-label": v,
    "data-expanded": T,
    "data-network-check": N,
    "data-status": Z,
    role: "listitem",
    ...S,
    children: [y, u]
  }), (e as any)[40] = (s as any).id, (e as any)[41] = (s as any).status, (e as any)[42] = y, (e as any)[43] = u, (e as any)[44] = v, (e as any)[45] = T, (e as any)[46] = S, (e as any)[47] = j) : j = (e as any)[47], j;
}
function Me(this: any, a: any): any {
  return !a;
}
function Te(this: any, a: any): any {
  return a instanceof DOMException && ((a as any).name as any) === ("AbortError" as any);
}
async function $e(this: any, a: any, e: any): Promise<any> {
  let n: any;
  try {
    n = await (showSaveFilePicker as any)({
      suggestedName: (je as any)(a),
      startIn: "downloads"
    });
  } catch (f: any) {
    if ((Te as any)(f)) return;
    throw f;
  }
  const s: any = await ((n as any).createWritable as any)();
  try {
    await ((s as any).write as any)((ye as any)(a, e));
  } finally {
    await ((s as any).close as any)();
  }
}
function De(this: any, a: any): any {
  (De as any).d = 1086;
  const e: any = ((de as any).c as any)(60),
    {
      onClose: n
    }: any = a,
    s: any = (ue as any)(),
    f: any = (me as any)(),
    w: any = (fe as any)(),
    F: any = (pe as any)(),
    [o, D]: any = ((se as any).useState as any)(null),
    M: any = ((se as any).useRef as any)(!1),
    k: any = (o as any) == (null as any) ? [] : (xe as any)((o as any).results, w);
  let p: any;
  ((e as any)[0] as any) !== (s as any) ? (p = (): any => {
    ((((s as any).run as any)() as any).then as any)(D, qe);
  }, (e as any)[0] = s, (e as any)[1] = p) : p = (e as any)[1];
  const h: any = p;
  let b: any;
  ((e as any)[2] as any) !== (h as any) ? (b = (): any => ((M as any).current || ((M as any).current = !0, (h as any)()), Re), (e as any)[2] = h, (e as any)[3] = b) : b = (e as any)[3], (ae as any)(b);
  let v: any;
  ((e as any)[4] as any) !== (F as any) ? (v = (): any => ((F as any)("sand_voice_call"), Oe), (e as any)[4] = F, (e as any)[5] = v) : v = (e as any)[5], (ae as any)(v);
  const T: any = m;
  let N: any;
  ((e as any)[6] as any) !== (n as any) ? (N = (Y: any): any => {
    Y || (n as any)();
  }, (e as any)[6] = n, (e as any)[7] = N) : N = (e as any)[7];
  const Z: any = !0,
    S: any = d,
    E: string = "rich",
    O: number = 608;
  let z: any;
  ((e as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (z = ((t as any).jsx as any)((m as any).Title, {
    children: ((t as any).jsx as any)(i, {
      id: "QVjG8n"
    })
  }), (e as any)[8] = z) : z = (e as any)[8];
  let r: any;
  ((e as any)[9] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (r = ((t as any).jsxs as any)((m as any).Header, {
    style: (d as any).header,
    children: [z, ((t as any).jsx as any)((m as any).Description, {
      children: ((t as any).jsx as any)(i, {
        id: "vhgAB7"
      })
    }), ((t as any).jsx as any)((m as any).CloseButton, {})]
  }), (e as any)[9] = r) : r = (e as any)[9];
  const $: any = m,
    _: any = d;
  let l: any, g: any;
  ((e as any)[10] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (l = {
    className: "sand-78zum5 sand-dt5ytf sand-ehausa"
  }, g = {
    className: "sand-78zum5 sand-6s0dn4 sand-1qughib sand-1oot3zn"
  }, (e as any)[10] = l, (e as any)[11] = g) : (l = (e as any)[10], g = (e as any)[11]);
  let x: any;
  ((e as any)[12] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (x = ((t as any).jsx as any)(C, {
    as: "h3",
    size: "sm",
    weight: "semibold",
    children: ((t as any).jsx as any)(i, {
      id: "URmyfc"
    })
  }), (e as any)[12] = x) : x = (e as any)[12];
  let c: any;
  ((e as any)[13] as any) !== (f as any) ? (c = (): any => ((f as any).copy as any)(ie), (e as any)[13] = f, (e as any)[14] = c) : c = (e as any)[14];
  let y: any;
  ((e as any)[15] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (y = ((t as any).jsx as any)(i, {
    id: "QwmSiq"
  }), (e as any)[15] = y) : y = (e as any)[15];
  let u: any;
  ((e as any)[16] as any) !== (c as any) ? (u = ((t as any).jsxs as any)("div", {
    ...g,
    children: [x, ((t as any).jsx as any)(he, {
      onClick: c,
      size: "sm",
      variant: "secondary",
      children: y
    })]
  }), (e as any)[16] = c, (e as any)[17] = u) : u = (e as any)[17];
  let j: any, K: any;
  ((e as any)[18] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (j = ((t as any).jsx as any)("pre", {
    className: "sand-1ghz6dp sand-1wd3ewq sand-s338yg sand-1wm8ruf sand-11m8ghp sand-126k92a",
    children: ie
  }), K = {
    className: "sand-78zum5 sand-dt5ytf sand-11twubx"
  }, (e as any)[18] = j, (e as any)[19] = K) : (j = (e as any)[18], K = (e as any)[19]);
  let V: any;
  ((e as any)[20] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (V = ((t as any).jsx as any)(C, {
    as: "p",
    color: "secondary",
    rootStyle: (d as any).guidanceParagraph,
    size: "xs",
    children: ((t as any).jsx as any)(i, {
      id: "5s5wDd"
    })
  }), (e as any)[20] = V) : V = (e as any)[20];
  let R: any;
  ((e as any)[21] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (R = ((t as any).jsxs as any)("div", {
    ...K,
    children: [V, ((t as any).jsx as any)(C, {
      as: "p",
      color: "secondary",
      rootStyle: (d as any).guidanceParagraph,
      size: "xs",
      children: ((t as any).jsx as any)(i, {
        id: "M9OOz1"
      })
    })]
  }), (e as any)[21] = R) : R = (e as any)[21];
  let q: any;
  ((e as any)[22] as any) !== ((s as any).failure as any) ? (q = ((s as any).failure as any) == (null as any) ? null : ((t as any).jsx as any)("div", {
    role: "alert",
    className: "sand-1043rbw sand-6y9aml sand-6rl5ky sand-17ak5pl",
    children: ((t as any).jsx as any)(i, {
      id: "iwuQtT"
    })
  }), (e as any)[22] = (s as any).failure, (e as any)[23] = q) : q = (e as any)[23];
  const X: any = (o as any) == (null as any) ? null : ((t as any).jsx as any)("div", {
    "aria-live": "polite",
    role: "list",
    className: "sand-78zum5 sand-dt5ytf sand-12mrbbr sand-mkeg23 sand-1y0btm7 sand-1atdlfd sand-1043rbw sand-b3r6kr",
    children: ((k as any).map as any)((Y: any, ce: any): any => ((t as any).jsx as any)(le, {
      isLast: (ce as any) === (((k as any).length as any) - (1 as any) as any),
      result: Y
    }, (Y as any).id))
  });
  let A: any;
  ((e as any)[24] as any) !== (l as any) || ((e as any)[25] as any) !== (u as any) || ((e as any)[26] as any) !== (j as any) || ((e as any)[27] as any) !== (R as any) || ((e as any)[28] as any) !== (q as any) || ((e as any)[29] as any) !== (X as any) ? (A = ((t as any).jsxs as any)("section", {
    ...l,
    children: [u, j, R, q, X]
  }), (e as any)[24] = l, (e as any)[25] = u, (e as any)[26] = j, (e as any)[27] = R, (e as any)[28] = q, (e as any)[29] = X, (e as any)[30] = A) : A = (e as any)[30];
  let I: any;
  ((e as any)[31] as any) !== (($ as any).Body as any) || ((e as any)[32] as any) !== ((_ as any).body as any) || ((e as any)[33] as any) !== (A as any) ? (I = ((t as any).jsx as any)(($ as any).Body, {
    style: (_ as any).body,
    children: A
  }), (e as any)[31] = ($ as any).Body, (e as any)[32] = (_ as any).body, (e as any)[33] = A, (e as any)[34] = I) : I = (e as any)[34];
  const ee: any = (o as any) == (null as any);
  let L: any;
  ((e as any)[35] as any) !== (o as any) || ((e as any)[36] as any) !== (k as any) ? (L = (): any => {
    (o as any) != (null as any) && ((($e as any)(o, k) as any).catch as any)(Ee);
  }, (e as any)[35] = o, (e as any)[36] = k, (e as any)[37] = L) : L = (e as any)[37];
  let Q: any;
  ((e as any)[38] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Q = ((t as any).jsx as any)(i, {
    id: "/T7kQE"
  }), (e as any)[38] = Q) : Q = (e as any)[38];
  let P: any;
  ((e as any)[39] as any) !== (ee as any) || ((e as any)[40] as any) !== (L as any) ? (P = ((t as any).jsx as any)((m as any).Action, {
    disabled: ee,
    onClick: L,
    children: Q
  }), (e as any)[39] = ee, (e as any)[40] = L, (e as any)[41] = P) : P = (e as any)[41];
  let G: any;
  ((e as any)[42] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (G = ((t as any).jsx as any)((m as any).ActionSpacer, {}), (e as any)[42] = G) : G = (e as any)[42];
  let H: any;
  ((e as any)[43] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (H = ((t as any).jsx as any)(i, {
    id: "yz7wBu"
  }), (e as any)[43] = H) : H = (e as any)[43];
  let U: any;
  ((e as any)[44] as any) !== (n as any) ? (U = ((t as any).jsx as any)((m as any).Action, {
    onClick: n,
    children: H
  }), (e as any)[44] = n, (e as any)[45] = U) : U = (e as any)[45];
  let B: any;
  ((e as any)[46] as any) !== ((s as any).isPending as any) || ((e as any)[47] as any) !== (h as any) ? (B = (s as any).isPending ? ((t as any).jsx as any)((m as any).Action, {
    disabled: !0,
    leadingIcon: {
      name: "loading",
      modifier: "spin"
    },
    pending: !0,
    variant: "primary",
    children: ((t as any).jsx as any)(i, {
      id: "WU6xzS"
    })
  }) : ((t as any).jsx as any)((m as any).Action, {
    onClick: h,
    variant: "primary",
    children: ((t as any).jsx as any)(i, {
      id: "gTcK5g"
    })
  }), (e as any)[46] = (s as any).isPending, (e as any)[47] = h, (e as any)[48] = B) : B = (e as any)[48];
  let W: any;
  ((e as any)[49] as any) !== (P as any) || ((e as any)[50] as any) !== (U as any) || ((e as any)[51] as any) !== (B as any) ? (W = ((t as any).jsxs as any)((m as any).ActionBar, {
    children: [P, G, U, B]
  }), (e as any)[49] = P, (e as any)[50] = U, (e as any)[51] = B, (e as any)[52] = W) : W = (e as any)[52];
  let J: any;
  return ((e as any)[53] as any) !== (r as any) || ((e as any)[54] as any) !== (I as any) || ((e as any)[55] as any) !== (W as any) || ((e as any)[56] as any) !== ((T as any).Root as any) || ((e as any)[57] as any) !== (N as any) || ((e as any)[58] as any) !== ((S as any).surface as any) ? (J = ((t as any).jsxs as any)((T as any).Root, {
    onOpenChange: N,
    open: Z,
    surfaceStyle: (S as any).surface,
    variant: E,
    width: O,
    children: [r, I, W]
  }), (e as any)[53] = r, (e as any)[54] = I, (e as any)[55] = W, (e as any)[56] = (T as any).Root, (e as any)[57] = N, (e as any)[58] = (S as any).surface, (e as any)[59] = J) : J = (e as any)[59], J;
}
function Ee(this: any, a: any): any {
  (oe as any)(a);
}
function Oe(this: any): any {}
function Re(this: any): any {}
function qe(this: any, a: any): any {
  (oe as any)(a);
}
export { De as NetworkDebuggerDialog };
//# debugId=780fe180-b557-4f77-ac1c-62e1dedc6aca
