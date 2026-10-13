declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "3f06adea-801f-48d7-a080-2cc098878a77", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-3f06adea-801f-48d7-a080-2cc098878a77");
  } catch (e: any) {}
} as any)();
import { c as b, r as w, j as t, T as d, u as M } from "./index.eager-vendor-Qbf9YA6n.js";
import { aY as S, aZ as O, i as B } from "./index.eager-platform-Dcfeegfw.js";
import { df as v, aP as q, dg as G, dh as Y, di as U, b7 as V } from "./index.eager-app-Cj5f8Gby.js";
import { x as j, aX as A } from "./index-ZYxf-aBb.js";
import "./index.eager-common-CdCvBQNJ.js";
const z: any = {
    codeInputSurface: {
      kWkggS: "sand-13l7odt",
      $$css: !0
    },
    codeText: {
      kcqcaj: "sand-ss6m8b",
      kb6lSQ: "sand-xteldw",
      $$css: !0
    }
  },
  F: string = "passkey-enrollment-code";
function C(this: any, o: any): any {
  (C as any).d = 1123;
  const e: any = ((b as any).c as any)(4),
    {
      children: l
    }: any = o;
  let s: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (s = {
    className: "sand-78zum5 sand-6s0dn4 sand-883omv sand-21xpn4"
  }, (e as any)[0] = s) : s = (e as any)[0];
  let a: any;
  ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = ((t as any).jsx as any)(q, {
    size: 18
  }), (e as any)[1] = a) : a = (e as any)[1];
  let u: any;
  return ((e as any)[2] as any) !== (l as any) ? (u = ((t as any).jsxs as any)("div", {
    ...s,
    role: "status",
    children: [a, ((t as any).jsx as any)(S, {
      as: "span",
      color: "secondary",
      size: "sm",
      children: l
    })]
  }), (e as any)[2] = l, (e as any)[3] = u) : u = (e as any)[3], u;
}
function k(this: any, o: any): any {
  (k as any).d = 1129;
  const e: any = ((b as any).c as any)(2),
    {
      children: l
    }: any = o;
  let s: any;
  return ((e as any)[0] as any) !== (l as any) ? (s = ((t as any).jsx as any)(S, {
    as: "p",
    color: "red",
    role: "alert",
    size: "sm",
    children: l
  }), (e as any)[0] = l, (e as any)[1] = s) : s = (e as any)[1], s;
}
function P(this: any, o: any): any {
  (P as any).d = 1126;
  const e: any = ((b as any).c as any)(4),
    {
      problem: l
    }: any = o;
  switch (l) {
    case "rejected":
      {
        let s: any;
        return ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (s = ((t as any).jsx as any)(d, {
          id: "ug/tVL"
        }), (e as any)[0] = s) : s = (e as any)[0], s;
      }
    case "expired":
      {
        let s: any;
        return ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (s = ((t as any).jsx as any)(d, {
          id: "vfQ7wz"
        }), (e as any)[1] = s) : s = (e as any)[1], s;
      }
    case "locked":
      {
        let s: any;
        return ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (s = ((t as any).jsx as any)(d, {
          id: "I/UfWP"
        }), (e as any)[2] = s) : s = (e as any)[2], s;
      }
    case "cooldown":
      {
        let s: any;
        return ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (s = ((t as any).jsx as any)(d, {
          id: "5M3gzq"
        }), (e as any)[3] = s) : s = (e as any)[3], s;
      }
  }
}
function $(this: any, o: any): any {
  ($ as any).d = 1124;
  const e: any = ((b as any).c as any)(4),
    {
      reason: l
    }: any = o;
  switch (l) {
    case "cancelled":
      {
        let s: any;
        return ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (s = ((t as any).jsx as any)(d, {
          id: "IF7AGW"
        }), (e as any)[0] = s) : s = (e as any)[0], s;
      }
    case "expired":
      {
        let s: any;
        return ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (s = ((t as any).jsx as any)(d, {
          id: "tMIwgc"
        }), (e as any)[1] = s) : s = (e as any)[1], s;
      }
    case "failed":
      {
        let s: any;
        return ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (s = ((t as any).jsx as any)(d, {
          id: "UqfpBk"
        }), (e as any)[2] = s) : s = (e as any)[2], s;
      }
    case "unavailable":
      {
        let s: any;
        return ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (s = ((t as any).jsx as any)(d, {
          id: "eiLp6/"
        }), (e as any)[3] = s) : s = (e as any)[3], s;
      }
  }
}
function D(this: any, o: any): any {
  (D as any).d = 1130;
  const e: any = ((b as any).c as any)(2),
    {
      reason: l
    }: any = o;
  switch (l) {
    case "no_email":
      {
        let s: any;
        return ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (s = ((t as any).jsx as any)(d, {
          id: "Fm3hDv"
        }), (e as any)[0] = s) : s = (e as any)[0], s;
      }
    case "limit":
      {
        let s: any;
        return ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (s = ((t as any).jsx as any)(d, {
          id: "1XFMZt"
        }), (e as any)[1] = s) : s = (e as any)[1], s;
      }
  }
}
function I(this: any, o: any): any {
  (I as any).d = 1125;
  const e: any = ((b as any).c as any)(24),
    {
      step: l,
      commands: s,
      code: a,
      onCodeChange: u
    }: any = o,
    {
      _: n
    }: any = (M as any)(),
    f: any = ((l as any).problem as any) === ("locked" as any);
  let _: any;
  ((e as any)[0] as any) !== (a as any) || ((e as any)[1] as any) !== (s as any) || ((e as any)[2] as any) !== (f as any) ? (_ = (E: any): any => {
    ((E as any).preventDefault as any)(), !(f || !(G as any)(a)) && ((s as any).verifyCode as any)(a);
  }, (e as any)[0] = a, (e as any)[1] = s, (e as any)[2] = f, (e as any)[3] = _) : _ = (e as any)[3];
  const r: any = _;
  let c: any;
  ((e as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (c = {
    className: "sand-78zum5 sand-dt5ytf sand-167g77z"
  }, (e as any)[4] = c) : c = (e as any)[4];
  let i: any;
  ((e as any)[5] as any) !== ((l as any).resent as any) ? (i = ((t as any).jsx as any)(S, {
    as: "p",
    color: "secondary",
    size: "sm",
    children: (l as any).resent ? ((t as any).jsx as any)(d, {
      id: "okJQvm",
      values: {
        SAND_PASSKEY_ENROLLMENT_CODE_LENGTH: v
      }
    }) : ((t as any).jsx as any)(d, {
      id: "UvYyCZ",
      values: {
        SAND_PASSKEY_ENROLLMENT_CODE_LENGTH: v
      }
    })
  }), (e as any)[5] = (l as any).resent, (e as any)[6] = i) : i = (e as any)[6];
  let m: any;
  ((e as any)[7] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (m = {
    className: "sand-zjbwwf"
  }, (e as any)[7] = m) : m = (e as any)[7];
  let y: any;
  ((e as any)[8] as any) !== (n as any) ? (y = (n as any)({
    id: "RqkLb0",
    values: {
      SAND_PASSKEY_ENROLLMENT_CODE_LENGTH: v
    }
  }), (e as any)[8] = n, (e as any)[9] = y) : y = (e as any)[9];
  let h: any;
  ((e as any)[10] as any) !== (u as any) ? (h = (E: any): any => (u as any)(((((((E as any).currentTarget as any).value as any).replace as any)(/\D/g, "") as any).slice as any)(0, v)), (e as any)[10] = u, (e as any)[11] = h) : h = (e as any)[11];
  let x: any;
  ((e as any)[12] as any) !== (a as any) || ((e as any)[13] as any) !== (f as any) || ((e as any)[14] as any) !== (y as any) || ((e as any)[15] as any) !== (h as any) ? (x = ((t as any).jsx as any)("div", {
    ...m,
    children: ((t as any).jsx as any)(A, {
      rootStyle: (z as any).codeInputSurface,
      size: "lg",
      children: ((t as any).jsx as any)((A as any).Input, {
        "aria-label": y,
        autoComplete: "one-time-code",
        autoFocus: !0,
        disabled: f,
        inputMode: "numeric",
        onChange: h,
        rootStyle: (z as any).codeText,
        value: a
      })
    })
  }), (e as any)[12] = a, (e as any)[13] = f, (e as any)[14] = y, (e as any)[15] = h, (e as any)[16] = x) : x = (e as any)[16];
  let p: any;
  ((e as any)[17] as any) !== ((l as any).problem as any) ? (p = ((l as any).problem as any) == (null as any) ? null : ((t as any).jsx as any)(k, {
    children: ((t as any).jsx as any)(P, {
      problem: (l as any).problem
    })
  }), (e as any)[17] = (l as any).problem, (e as any)[18] = p) : p = (e as any)[18];
  let g: any;
  return ((e as any)[19] as any) !== (r as any) || ((e as any)[20] as any) !== (i as any) || ((e as any)[21] as any) !== (x as any) || ((e as any)[22] as any) !== (p as any) ? (g = ((t as any).jsxs as any)("form", {
    id: F,
    onSubmit: r,
    ...c,
    children: [i, x, p]
  }), (e as any)[19] = r, (e as any)[20] = i, (e as any)[21] = x, (e as any)[22] = p, (e as any)[23] = g) : g = (e as any)[23], g;
}
function L(this: any, o: any): any {
  (L as any).d = 1132;
  const e: any = ((b as any).c as any)(19),
    {
      step: l,
      commands: s,
      code: a,
      onCodeChange: u
    }: any = o;
  switch ((l as any).kind) {
    case "intro":
      {
        let n: any;
        return ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = ((t as any).jsx as any)(S, {
          as: "p",
          color: "secondary",
          size: "sm",
          children: ((t as any).jsx as any)(d, {
            id: "wkpm4d"
          })
        }), (e as any)[0] = n) : n = (e as any)[0], n;
      }
    case "sending_code":
      {
        let n: any;
        return ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = ((t as any).jsx as any)(C, {
          children: ((t as any).jsx as any)(d, {
            id: "0UebIq"
          })
        }), (e as any)[1] = n) : n = (e as any)[1], n;
      }
    case "enter_code":
      {
        let n: any;
        return ((e as any)[2] as any) !== (a as any) || ((e as any)[3] as any) !== (s as any) || ((e as any)[4] as any) !== (u as any) || ((e as any)[5] as any) !== (l as any) ? (n = ((t as any).jsx as any)(I, {
          code: a,
          commands: s,
          onCodeChange: u,
          step: l
        }), (e as any)[2] = a, (e as any)[3] = s, (e as any)[4] = u, (e as any)[5] = l, (e as any)[6] = n) : n = (e as any)[6], n;
      }
    case "verifying_code":
      {
        let n: any;
        return ((e as any)[7] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = ((t as any).jsx as any)(C, {
          children: ((t as any).jsx as any)(d, {
            id: "bWJm0L"
          })
        }), (e as any)[7] = n) : n = (e as any)[7], n;
      }
    case "ready_to_register":
      {
        let n: any;
        return ((e as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = ((t as any).jsx as any)(S, {
          as: "p",
          color: "secondary",
          size: "sm",
          children: ((t as any).jsx as any)(d, {
            id: "IoxmQr"
          })
        }), (e as any)[8] = n) : n = (e as any)[8], n;
      }
    case "registering":
      {
        let n: any;
        ((e as any)[9] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = ((t as any).jsx as any)(C, {
          children: ((t as any).jsx as any)(d, {
            id: "DAl02L"
          })
        }), (e as any)[9] = n) : n = (e as any)[9];
        let f: any;
        return ((e as any)[10] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = ((t as any).jsxs as any)((t as any).Fragment, {
          children: [n, ((t as any).jsx as any)(S, {
            as: "p",
            color: "tertiary",
            size: "sm",
            children: ((t as any).jsx as any)(d, {
              id: "R2H8d2"
            })
          })]
        }), (e as any)[10] = f) : f = (e as any)[10], f;
      }
    case "done":
      {
        let n: any;
        return ((e as any)[11] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = ((t as any).jsx as any)(S, {
          as: "p",
          color: "secondary",
          size: "sm",
          children: ((t as any).jsx as any)(d, {
            id: "+CYUlV"
          })
        }), (e as any)[11] = n) : n = (e as any)[11], n;
      }
    case "refused":
      {
        let n: any;
        return ((e as any)[12] as any) !== ((l as any).reason as any) ? (n = ((t as any).jsx as any)(k, {
          children: ((t as any).jsx as any)(D, {
            reason: (l as any).reason
          })
        }), (e as any)[12] = (l as any).reason, (e as any)[13] = n) : n = (e as any)[13], n;
      }
    case "failed":
      {
        let n: any;
        ((e as any)[14] as any) !== ((l as any).ceremony as any) || ((e as any)[15] as any) !== ((l as any).failure as any) ? (n = ((l as any).ceremony as any) != (null as any) ? ((t as any).jsx as any)($, {
          reason: (l as any).ceremony
        }) : ((l as any).failure as any).display?.detail ?? ((t as any).jsx as any)(d, {
          id: "nwtY4N"
        }), (e as any)[14] = (l as any).ceremony, (e as any)[15] = (l as any).failure, (e as any)[16] = n) : n = (e as any)[16];
        let f: any;
        return ((e as any)[17] as any) !== (n as any) ? (f = ((t as any).jsx as any)(k, {
          children: n
        }), (e as any)[17] = n, (e as any)[18] = f) : f = (e as any)[18], f;
      }
  }
}
function N(this: any, o: any): any {
  (N as any).d = 1131;
  const e: any = ((b as any).c as any)(45),
    {
      step: l,
      commands: s,
      onClose: a,
      onFinish: u
    }: any = o;
  let n: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = ((t as any).jsx as any)(d, {
    id: "dEgA5A"
  }), (e as any)[0] = n) : n = (e as any)[0];
  let f: any;
  ((e as any)[1] as any) !== (a as any) ? (f = ((t as any).jsx as any)((j as any).Action, {
    onClick: a,
    children: n
  }), (e as any)[1] = a, (e as any)[2] = f) : f = (e as any)[2];
  const _: any = f;
  switch ((l as any).kind) {
    case "intro":
      {
        let r: any;
        ((e as any)[3] as any) !== (s as any) ? (r = (): any => {
          ((s as any).sendCode as any)();
        }, (e as any)[3] = s, (e as any)[4] = r) : r = (e as any)[4];
        let c: any;
        ((e as any)[5] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (c = ((t as any).jsx as any)(d, {
          id: "pfwAG5"
        }), (e as any)[5] = c) : c = (e as any)[5];
        let i: any;
        ((e as any)[6] as any) !== (r as any) ? (i = ((t as any).jsx as any)((j as any).Action, {
          onClick: r,
          variant: "primary",
          children: c
        }), (e as any)[6] = r, (e as any)[7] = i) : i = (e as any)[7];
        let m: any;
        return ((e as any)[8] as any) !== (_ as any) || ((e as any)[9] as any) !== (i as any) ? (m = ((t as any).jsxs as any)((t as any).Fragment, {
          children: [_, i]
        }), (e as any)[8] = _, (e as any)[9] = i, (e as any)[10] = m) : m = (e as any)[10], m;
      }
    case "sending_code":
    case "verifying_code":
    case "registering":
      return _;
    case "enter_code":
      {
        let r: any;
        ((e as any)[11] as any) !== (s as any) ? (r = (): any => {
          ((s as any).sendCode as any)();
        }, (e as any)[11] = s, (e as any)[12] = r) : r = (e as any)[12];
        let c: any;
        ((e as any)[13] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (c = ((t as any).jsx as any)(d, {
          id: "mdeIOH"
        }), (e as any)[13] = c) : c = (e as any)[13];
        let i: any;
        ((e as any)[14] as any) !== (r as any) ? (i = ((t as any).jsx as any)((j as any).Action, {
          onClick: r,
          children: c
        }), (e as any)[14] = r, (e as any)[15] = i) : i = (e as any)[15];
        const m: any = ((l as any).problem as any) === ("locked" as any);
        let y: any;
        ((e as any)[16] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (y = ((t as any).jsx as any)(d, {
          id: "xGVfLh"
        }), (e as any)[16] = y) : y = (e as any)[16];
        let h: any;
        ((e as any)[17] as any) !== (m as any) ? (h = ((t as any).jsx as any)((j as any).Action, {
          disabled: m,
          form: F,
          type: "submit",
          variant: "primary",
          children: y
        }), (e as any)[17] = m, (e as any)[18] = h) : h = (e as any)[18];
        let x: any;
        return ((e as any)[19] as any) !== (_ as any) || ((e as any)[20] as any) !== (i as any) || ((e as any)[21] as any) !== (h as any) ? (x = ((t as any).jsxs as any)((t as any).Fragment, {
          children: [_, i, h]
        }), (e as any)[19] = _, (e as any)[20] = i, (e as any)[21] = h, (e as any)[22] = x) : x = (e as any)[22], x;
      }
    case "ready_to_register":
      {
        let r: any;
        ((e as any)[23] as any) !== (s as any) ? (r = (): any => {
          ((s as any).register as any)();
        }, (e as any)[23] = s, (e as any)[24] = r) : r = (e as any)[24];
        let c: any;
        ((e as any)[25] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (c = ((t as any).jsx as any)(d, {
          id: "injdPp"
        }), (e as any)[25] = c) : c = (e as any)[25];
        let i: any;
        ((e as any)[26] as any) !== (r as any) ? (i = ((t as any).jsx as any)((j as any).Action, {
          onClick: r,
          variant: "primary",
          children: c
        }), (e as any)[26] = r, (e as any)[27] = i) : i = (e as any)[27];
        let m: any;
        return ((e as any)[28] as any) !== (_ as any) || ((e as any)[29] as any) !== (i as any) ? (m = ((t as any).jsxs as any)((t as any).Fragment, {
          children: [_, i]
        }), (e as any)[28] = _, (e as any)[29] = i, (e as any)[30] = m) : m = (e as any)[30], m;
      }
    case "done":
      {
        let r: any;
        ((e as any)[31] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (r = ((t as any).jsx as any)(d, {
          id: "DPfwMq"
        }), (e as any)[31] = r) : r = (e as any)[31];
        let c: any;
        return ((e as any)[32] as any) !== (u as any) ? (c = ((t as any).jsx as any)((j as any).Action, {
          onClick: u,
          variant: "primary",
          children: r
        }), (e as any)[32] = u, (e as any)[33] = c) : c = (e as any)[33], c;
      }
    case "refused":
      {
        let r: any;
        ((e as any)[34] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (r = ((t as any).jsx as any)(d, {
          id: "yz7wBu"
        }), (e as any)[34] = r) : r = (e as any)[34];
        let c: any;
        return ((e as any)[35] as any) !== (a as any) ? (c = ((t as any).jsx as any)((j as any).Action, {
          onClick: a,
          variant: "primary",
          children: r
        }), (e as any)[35] = a, (e as any)[36] = c) : c = (e as any)[36], c;
      }
    case "failed":
      {
        let r: any;
        ((e as any)[37] as any) !== (s as any) ? (r = (): any => {
          ((s as any).retryEnrollment as any)();
        }, (e as any)[37] = s, (e as any)[38] = r) : r = (e as any)[38];
        let c: any;
        ((e as any)[39] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (c = ((t as any).jsx as any)(d, {
          id: "KDw4GX"
        }), (e as any)[39] = c) : c = (e as any)[39];
        let i: any;
        ((e as any)[40] as any) !== (r as any) ? (i = ((t as any).jsx as any)((j as any).Action, {
          onClick: r,
          variant: "primary",
          children: c
        }), (e as any)[40] = r, (e as any)[41] = i) : i = (e as any)[41];
        let m: any;
        return ((e as any)[42] as any) !== (_ as any) || ((e as any)[43] as any) !== (i as any) ? (m = ((t as any).jsxs as any)((t as any).Fragment, {
          children: [_, i]
        }), (e as any)[42] = _, (e as any)[43] = i, (e as any)[44] = m) : m = (e as any)[44], m;
      }
  }
}
function R(this: any, o: any): any {
  (R as any).d = 1127;
  const e: any = ((b as any).c as any)(3),
    {
      step: l
    }: any = o;
  switch ((l as any).kind) {
    case "intro":
    case "sending_code":
    case "enter_code":
    case "verifying_code":
    case "refused":
    case "failed":
      {
        let s: any;
        return ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (s = ((t as any).jsx as any)(d, {
          id: "6uNoaV"
        }), (e as any)[0] = s) : s = (e as any)[0], s;
      }
    case "ready_to_register":
    case "registering":
      {
        let s: any;
        return ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (s = ((t as any).jsx as any)(d, {
          id: "+CFZFv"
        }), (e as any)[1] = s) : s = (e as any)[1], s;
      }
    case "done":
      {
        let s: any;
        return ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (s = ((t as any).jsx as any)(d, {
          id: "/R28hh"
        }), (e as any)[2] = s) : s = (e as any)[2], s;
      }
  }
}
function H(this: any, {
  previous: o,
  next: e
}: any): any {
  return ((o as any).kind as any) === ("sending_code" as any) && ((e as any).kind as any) === ("enter_code" as any) && ((e as any).problem as any) === (null as any);
}
function T(this: any, o: any): any {
  (T as any).d = 1128;
  const e: any = ((b as any).c as any)(21),
    {
      session: l,
      commands: s,
      onClose: a,
      onFinish: u
    }: any = o,
    {
      step: n
    }: any = l,
    [f, _]: any = ((w as any).useState as any)(""),
    [r, c]: any = ((w as any).useState as any)(n);
  (r as any) !== (n as any) && ((c as any)(n), (H as any)({
    previous: r,
    next: n
  }) && (_ as any)(""));
  let i: any;
  ((e as any)[0] as any) !== (a as any) || ((e as any)[1] as any) !== (u as any) || ((e as any)[2] as any) !== (n as any) ? (i = (g: any): any => {
    g || (((n as any).kind as any) === ("done" as any) ? (u as any)() : (a as any)());
  }, (e as any)[0] = a, (e as any)[1] = u, (e as any)[2] = n, (e as any)[3] = i) : i = (e as any)[3];
  let m: any;
  ((e as any)[4] as any) !== (n as any) ? (m = ((t as any).jsx as any)((j as any).Header, {
    children: ((t as any).jsx as any)((j as any).Title, {
      children: ((t as any).jsx as any)(R, {
        step: n
      })
    })
  }), (e as any)[4] = n, (e as any)[5] = m) : m = (e as any)[5];
  let y: any;
  ((e as any)[6] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (y = {
    className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d"
  }, (e as any)[6] = y) : y = (e as any)[6];
  let h: any;
  ((e as any)[7] as any) !== (f as any) || ((e as any)[8] as any) !== (s as any) || ((e as any)[9] as any) !== (n as any) ? (h = ((t as any).jsx as any)((j as any).Body, {
    children: ((t as any).jsx as any)("div", {
      ...y,
      children: ((t as any).jsx as any)(L, {
        code: f,
        commands: s,
        onCodeChange: _,
        step: n
      })
    })
  }), (e as any)[7] = f, (e as any)[8] = s, (e as any)[9] = n, (e as any)[10] = h) : h = (e as any)[10];
  let x: any;
  ((e as any)[11] as any) !== (s as any) || ((e as any)[12] as any) !== (a as any) || ((e as any)[13] as any) !== (u as any) || ((e as any)[14] as any) !== (n as any) ? (x = ((t as any).jsx as any)((j as any).ActionBar, {
    children: ((t as any).jsx as any)(N, {
      commands: s,
      onClose: a,
      onFinish: u,
      step: n
    })
  }), (e as any)[11] = s, (e as any)[12] = a, (e as any)[13] = u, (e as any)[14] = n, (e as any)[15] = x) : x = (e as any)[15];
  let p: any;
  return ((e as any)[16] as any) !== (i as any) || ((e as any)[17] as any) !== (m as any) || ((e as any)[18] as any) !== (h as any) || ((e as any)[19] as any) !== (x as any) ? (p = ((t as any).jsxs as any)((j as any).Root, {
    onOpenChange: i,
    open: !0,
    variant: "rich",
    width: 440,
    children: [m, h, x]
  }), (e as any)[16] = i, (e as any)[17] = m, (e as any)[18] = h, (e as any)[19] = x, (e as any)[20] = p) : p = (e as any)[20], p;
}
function Q(this: any): any {
  (Q as any).d = 1122;
  const o: any = ((b as any).c as any)(8),
    {
      enrollment: e
    }: any = (Y as any)(),
    l: any = (U as any)(),
    s: any = (O as any)(),
    a: any = ((V as any)() as any).passkey,
    u: any = ((w as any).useRef as any)(!1),
    n: any = (e as any) == (null as any),
    f: any = !!((s as any).pending as any).overlay;
  let _: any;
  if (((o as any)[0] as any) !== (s as any) || ((o as any)[1] as any) !== (f as any) || ((o as any)[2] as any) !== (n as any) || ((o as any)[3] as any) !== (a as any) ? (_ = (): any => (n ? !(u as any).current && !f && ((((a as any).enrollment as any).get as any)() as any) == (null as any) && ((u as any).current = !0, (Z as any)(s)) : (u as any).current = !1, W), (o as any)[0] = s, (o as any)[1] = f, (o as any)[2] = n, (o as any)[3] = a, (o as any)[4] = _) : _ = (o as any)[4], (B as any)(_), (e as any) == (null as any)) return null;
  let r: any;
  return ((o as any)[5] as any) !== (l as any) || ((o as any)[6] as any) !== (e as any) ? (r = ((t as any).jsx as any)(T, {
    commands: l,
    onClose: (l as any).cancelEnrollment,
    onFinish: (l as any).finishEnrollment,
    session: e
  }), (o as any)[5] = l, (o as any)[6] = e, (o as any)[7] = r) : r = (o as any)[7], r;
}
function W(this: any): any {}
function Z(this: any, o: any): any {
  const e: any = (((o as any).history as any).entries as any)[(((o as any).history as any).index as any) - (1 as any)];
  if ((e as any) != (null as any) && ((e as any).overlay?.entrypointId as any) !== ((o as any).overlay?.entrypointId as any)) {
    ((o as any).back as any)();
    return;
  }
  ((o as any).close as any)("overlay");
}
export { Q as default };
//# debugId=3f06adea-801f-48d7-a080-2cc098878a77
