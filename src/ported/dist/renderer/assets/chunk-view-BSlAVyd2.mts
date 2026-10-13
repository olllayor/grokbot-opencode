declare var Event: any;
declare var HTMLElement: any;
declare var ResizeObserver: any;
declare var global: any;
declare var navigator: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "7967ad07-c5b8-49d1-98d3-25481635e736", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-7967ad07-c5b8-49d1-98d3-25481635e736");
  } catch (e: any) {}
} as any)();
import { c as T, u as U, r as ee, j as a, p as ye, T as Q } from "./index.eager-vendor-Qbf9YA6n.js";
import { cl as lt, W as as, ba as xs, cm as it, cn as dt, z as fe, co as ot, H as Le, bx as ys, I as Ce, p as rs, E as Te, cp as Be, G as ct, cq as rt, cr as ut, bZ as ft } from "./index-ZYxf-aBb.js";
import { ip as mt, aP as ht, fd as bt, cq as De, iq as pt, b9 as ze, ir as vt, b7 as $e, aU as _e, is as xt, it as yt, iu as kt, iv as gt, bT as ls, iw as ks, r as ce, a4 as jt, a$ as us, a_ as re, aV as _t, ix as St, iy as wt, iz as Nt, iA as It, iB as Et, dl as gs, iC as At, iD as js, ew as Ct, iE as Tt, aK as zt, iF as fs, cm as Pt, fB as He, eY as is, ad as Rt, em as Lt, iG as Dt, iH as $t, iI as qt, gz as _s, iJ as Ot, iK as Mt, iL as Bt, bz as Ft, iM as Ut, iN as Gt, iO as Wt, iP as Vt, iQ as Kt, iR as Ht, iS as Xe, iT as Xt, iU as Qt, iV as Zt, iW as Yt, iX as Jt, bh as en, iY as sn, iZ as tn, i_ as nn, i$ as an, j0 as ln, j1 as dn, j2 as ms, D as on, j3 as cn, j4 as rn, dh as un, di as Ss, cc as ws, cr as fn, fh as mn, j5 as hn, j6 as bn, j7 as pn, j8 as vn, j9 as xn, ja as yn, jb as kn, gT as gn, bA as jn, jc as _n, dn as Sn } from "./index.eager-app-Cj5f8Gby.js";
import { i as Pe, aY as Ee, l as Ns, c as wn } from "./index.eager-platform-Dcfeegfw.js";
import { S as Nn } from "./chunk-scroll-pane-CoxKzaOs.js";
import { c as In } from "./chunk-provider-team-policy-CBjUAi-4.js";
import { a as ae, G as je, S as En } from "./chunk-settings-row-I8ggwIzt.js";
import { L as An } from "./chunk-local-tools-row-BLtLBTlf.js";
import { c as Cn, a as Tn } from "./chunk-provider-listener-integrations-CR9f28xA.js";
import "./index.eager-common-CdCvBQNJ.js";
function Is(this: any, s: any): any {
  (Is as any).d = 1234;
  const e: any = ((T as any).c as any)(29),
    {
      children: t,
      updateProfilePhoto: l
    }: any = s,
    {
      _: n
    }: any = (U as any)(),
    d: any = (lt as any)(),
    m: any = ((ee as any).useRef as any)(null),
    [i, o]: any = ((ee as any).useState as any)(!1);
  let u: any;
  ((e as any)[0] as any) !== (n as any) ? (u = (k: any): any => {
    switch ((k as any).kind) {
      case "updated":
        return {
          kind: "success",
          text: (n as any)({
            id: "kVzOFh"
          })
        };
      case "superseded":
        return null;
      case "failed":
        return {
          kind: "error",
          text: (n as any)({
            id: "dWPnw4"
          })
        };
      case "refused":
        switch ((k as any).refusal) {
          case "unsupported-type":
            return {
              kind: "error",
              text: (n as any)({
                id: "V+eTNE"
              })
            };
          case "too-large":
            return {
              kind: "error",
              text: (n as any)({
                id: "Rjk5Ve"
              })
            };
          case "empty":
            return {
              kind: "error",
              text: (n as any)({
                id: "kLCn9/"
              })
            };
        }
    }
  }, (e as any)[0] = n, (e as any)[1] = u) : u = (e as any)[1];
  const c: any = u;
  let r: any;
  ((e as any)[2] as any) !== (c as any) || ((e as any)[3] as any) !== (d as any) || ((e as any)[4] as any) !== (l as any) ? (r = async (k: any): Promise<any> => {
    const N: any = ((k as any).currentTarget as any).files?.item(0) ?? null;
    if (((k as any).currentTarget as any).value = "", (N as any) == (null as any)) return;
    (o as any)(!0);
    const A: any = await (l as any)(N);
    (o as any)(!1);
    const I: any = (c as any)(A);
    (I as any) != (null as any) && (d as any)(I);
  }, (e as any)[2] = c, (e as any)[3] = d, (e as any)[4] = l, (e as any)[5] = r) : r = (e as any)[5];
  const f: any = r;
  let h: any;
  ((e as any)[6] as any) !== (n as any) || ((e as any)[7] as any) !== (i as any) ? (h = (n as any)(i ? {
    id: "vUlhzq"
  } : {
    id: "7Oqlib"
  }), (e as any)[6] = n, (e as any)[7] = i, (e as any)[8] = h) : h = (e as any)[8];
  let p: any;
  ((e as any)[9] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (p = {
    className: "sand--default-marker sand-1n2onr6 sand-3nfvp2 sand-2lah0s sand-1717udv sand-c342km sand-ng3xce sand-149ho13 sand-jbqb8w sand-1ypdohk sand-1ar62m4 sand-1t137rt sand-9v5kkp sand-1k57tk5 sand-784prv sand-1hl8ikr sand-4sht9k"
  }, (e as any)[9] = p) : p = (e as any)[9];
  let b: any;
  ((e as any)[10] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (b = (): any => (m as any).current?.click(), (e as any)[10] = b) : b = (e as any)[10];
  let v: any;
  ((e as any)[11] as any) !== (i as any) ? (v = ({
    0: {
      className: "sand-10l6tqk sand-10a8y8t sand-78zum5 sand-6s0dn4 sand-l56j7k sand-149ho13 sand-a44r0r sand-fungia sand-g01cxk sand-1t642l6 sand-1i7crgf sand-19991ni sand-1uacuc8 sand-wji4o3 sand-47corl"
    },
    1: {
      className: "sand-10l6tqk sand-10a8y8t sand-78zum5 sand-6s0dn4 sand-l56j7k sand-149ho13 sand-a44r0r sand-fungia sand-19991ni sand-1uacuc8 sand-wji4o3 sand-47corl sand-1hc1fzr"
    }
  } as any)[(!!i as any) << (0 as any)], (e as any)[11] = i, (e as any)[12] = v) : v = (e as any)[12];
  let y: any;
  ((e as any)[13] as any) !== (i as any) ? (y = i ? ((a as any).jsx as any)(ht, {
    borderWidth: 2,
    inheritColor: !0,
    size: 16
  }) : ((a as any).jsx as any)(as, {
    name: "pencil",
    size: 16
  }), (e as any)[13] = i, (e as any)[14] = y) : y = (e as any)[14];
  let j: any;
  ((e as any)[15] as any) !== (v as any) || ((e as any)[16] as any) !== (y as any) ? (j = ((a as any).jsx as any)("span", {
    "aria-hidden": !0,
    "data-testid": "account-photo-overlay",
    ...v,
    children: y
  }), (e as any)[15] = v, (e as any)[16] = y, (e as any)[17] = j) : j = (e as any)[17];
  let x: any;
  ((e as any)[18] as any) !== (t as any) || ((e as any)[19] as any) !== (i as any) || ((e as any)[20] as any) !== (h as any) || ((e as any)[21] as any) !== (j as any) ? (x = ((a as any).jsxs as any)("button", {
    "aria-busy": i,
    "aria-label": h,
    ...p,
    "data-testid": "account-photo-button",
    disabled: i,
    onClick: b,
    type: "button",
    children: [t, j]
  }), (e as any)[18] = t, (e as any)[19] = i, (e as any)[20] = h, (e as any)[21] = j, (e as any)[22] = x) : x = (e as any)[22];
  let g: any;
  ((e as any)[23] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (g = {
    className: "sand-1s85apg"
  }, (e as any)[23] = g) : g = (e as any)[23];
  let _: any;
  ((e as any)[24] as any) !== (f as any) ? (_ = ((a as any).jsx as any)("input", {
    accept: mt,
    ...g,
    "data-testid": "account-photo-input",
    onChange: (k: any): any => {
      (f as any)(k);
    },
    ref: m,
    tabIndex: -1,
    type: "file"
  }), (e as any)[24] = f, (e as any)[25] = _) : _ = (e as any)[25];
  let w: any;
  return ((e as any)[26] as any) !== (_ as any) || ((e as any)[27] as any) !== (x as any) ? (w = ((a as any).jsxs as any)((a as any).Fragment, {
    children: [x, _]
  }), (e as any)[26] = _, (e as any)[27] = x, (e as any)[28] = w) : w = (e as any)[28], w;
}
const hs: string = "sand_profile_photo_edit",
  Ie: any = {
    name: {
      kB7OPa: "sand-9f619",
      kVQacm: "sand-b3r6kr",
      kMwMTN: "sand-tyxrsu",
      kg5iWk: "sand-lyipyv",
      khDVqt: "sand-uxw1ft",
      $$css: !0
    },
    meta: {
      kB7OPa: "sand-9f619",
      k1xSpc: "sand-78zum5",
      kGNEyG: "sand-6s0dn4",
      kOIVth: "sand-167g77z",
      k7Eaqz: "sand-euugli",
      kMwMTN: "sand-1o0liin",
      $$css: !0
    },
    actionWeakBorder: {
      kGVxlE: "sand-lkpa4b",
      $$css: !0
    },
    teamLabel: {
      kMwMTN: "sand-169k319",
      $$css: !0
    },
    teamName: {
      kMwMTN: "sand-tyxrsu",
      kVQacm: "sand-b3r6kr",
      kg5iWk: "sand-lyipyv",
      khDVqt: "sand-uxw1ft",
      k7Eaqz: "sand-euugli",
      $$css: !0
    }
  };
function Ue(this: any, s: any): any {
  (Ue as any).d = 1236;
  const e: any = ((T as any).c as any)(6),
    {
      className: t,
      testId: l,
      children: n
    }: any = s;
  let d: any;
  ((e as any)[0] as any) !== (t as any) ? (d = (ce as any)(t, "sand-9f619 sand-pmgbkh"), (e as any)[0] = t, (e as any)[1] = d) : d = (e as any)[1];
  let m: any;
  return ((e as any)[2] as any) !== (n as any) || ((e as any)[3] as any) !== (d as any) || ((e as any)[4] as any) !== (l as any) ? (m = ((a as any).jsx as any)(Ee, {
    as: "p",
    className: d,
    color: "red",
    "data-testid": l,
    size: "sm",
    children: n
  }), (e as any)[2] = n, (e as any)[3] = d, (e as any)[4] = l, (e as any)[5] = m) : m = (e as any)[5], m;
}
function zn(this: any, s: any): any {
  if ((s as any) == (null as any)) return null;
  const e: any = ((s as any).indexOf as any)("|");
  return (e as any) <= (0 as any) || (e as any) >= (((s as any).length as any) - (1 as any) as any) ? null : {
    subject: ((s as any).slice as any)((e as any) + (1 as any))
  };
}
function Qe(this: any, s: any): any {
  (Qe as any).d = 1235;
  const e: any = ((T as any).c as any)(27),
    {
      dataUrl: t,
      name: l,
      isSignedIn: n
    }: any = s;
  if (!n) {
    let f: any, h: any;
    ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = {
      className: "sand-9f619 sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-187nhsf sand-n3w4p2 sand-4hv7ue sand-1y0btm7 sand-1atdlfd sand-149ho13 sand-b3r6kr sand-i07v4r sand-87ps6o sand-4b2ntj"
    }, h = (ce as any)("sand-account-card__avatar", (f as any).className), (e as any)[0] = f, (e as any)[1] = h) : (f = (e as any)[0], h = (e as any)[1]);
    let p: any;
    ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (p = ((a as any).jsx as any)(as, {
      name: "person",
      size: 20
    }), (e as any)[2] = p) : p = (e as any)[2];
    let b: any;
    return ((e as any)[3] as any) !== ((f as any).style as any) || ((e as any)[4] as any) !== (h as any) ? (b = ((a as any).jsx as any)("span", {
      className: h,
      "data-empty": !0,
      style: (f as any).style,
      children: p
    }), (e as any)[3] = (f as any).style, (e as any)[4] = h, (e as any)[5] = b) : b = (e as any)[5], b;
  }
  if ((t as any) == (null as any) || ((t as any).length as any) === (0 as any)) {
    let f: any, h: any;
    ((e as any)[6] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = {
      className: "sand-9f619 sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-187nhsf sand-n3w4p2 sand-4hv7ue sand-1y0btm7 sand-1atdlfd sand-149ho13 sand-b3r6kr sand-87ps6o sand-1b8i4yy sand-1o0liin sand-19d36u7 sand-1rhlpx6"
    }, h = (ce as any)("sand-account-card__avatar", (f as any).className), (e as any)[6] = f, (e as any)[7] = h) : (f = (e as any)[6], h = (e as any)[7]);
    const p: any = (f as any).style;
    let b: any;
    ((e as any)[8] as any) !== (l as any) ? (b = (St as any)(l), (e as any)[8] = l, (e as any)[9] = b) : b = (e as any)[9];
    let v: any;
    return ((e as any)[10] as any) !== ((f as any).style as any) || ((e as any)[11] as any) !== (h as any) || ((e as any)[12] as any) !== (b as any) ? (v = ((a as any).jsx as any)("span", {
      className: h,
      style: p,
      children: b
    }), (e as any)[10] = (f as any).style, (e as any)[11] = h, (e as any)[12] = b, (e as any)[13] = v) : v = (e as any)[13], v;
  }
  let d: any, m: any, i: any, o: any, u: any;
  if (((e as any)[14] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any)) {
    const f: any = {
      className: "sand-9f619 sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-187nhsf sand-n3w4p2 sand-4hv7ue sand-1y0btm7 sand-1atdlfd sand-149ho13 sand-b3r6kr sand-i07v4r sand-87ps6o"
    };
    d = {
      className: "sand-9f619 sand-h8yej3 sand-5yr21d sand-l1xv1r"
    }, o = (ce as any)("sand-account-card__avatar", (f as any).className), u = (f as any).style, m = "", i = (ce as any)("sand-account-card__avatar-image", (d as any).className), (e as any)[14] = d, (e as any)[15] = m, (e as any)[16] = i, (e as any)[17] = o, (e as any)[18] = u;
  } else d = (e as any)[14], m = (e as any)[15], i = (e as any)[16], o = (e as any)[17], u = (e as any)[18];
  let c: any;
  ((e as any)[19] as any) !== (t as any) || ((e as any)[20] as any) !== ((d as any).style as any) || ((e as any)[21] as any) !== (i as any) ? (c = ((a as any).jsx as any)("img", {
    alt: m,
    className: i,
    src: t,
    style: (d as any).style
  }), (e as any)[19] = t, (e as any)[20] = (d as any).style, (e as any)[21] = i, (e as any)[22] = c) : c = (e as any)[22];
  let r: any;
  return ((e as any)[23] as any) !== (o as any) || ((e as any)[24] as any) !== (u as any) || ((e as any)[25] as any) !== (c as any) ? (r = ((a as any).jsx as any)("span", {
    className: o,
    style: u,
    children: c
  }), (e as any)[23] = o, (e as any)[24] = u, (e as any)[25] = c, (e as any)[26] = r) : r = (e as any)[26], r;
}
const Pn: any = {
  email: "sand-account-card__copy-email",
  "team-id": "sand-account-team__copy-id"
};
function Ze(this: any, s: any): any {
  (Ze as any).d = 1238;
  const e: any = ((T as any).c as any)(12),
    {
      ariaLabel: t,
      subject: l,
      value: n
    }: any = s,
    [d, m]: any = (_t as any)(),
    i: any = (Pn as any)[l];
  let o: any;
  ((e as any)[0] as any) !== (i as any) ? (o = (ce as any)(i, "sand-9f619 sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-w4jnvo sand-1qx5ct2 sand-1717udv sand-c342km sand-ng3xce sand-t9pb60 sand-jbqb8w sand-tfy4bk sand-1o0liin sand-n4ifyr sand-1ypdohk"), (e as any)[0] = i, (e as any)[1] = o) : o = (e as any)[1];
  let u: any;
  ((e as any)[2] as any) !== (m as any) || ((e as any)[3] as any) !== (n as any) ? (u = (): any => (m as any)(n), (e as any)[2] = m, (e as any)[3] = n, (e as any)[4] = u) : u = (e as any)[4];
  const c: any = d ? "check" : "copy";
  let r: any;
  ((e as any)[5] as any) !== (c as any) ? (r = ((a as any).jsx as any)(as, {
    "aria-hidden": !0,
    name: c,
    size: 14
  }), (e as any)[5] = c, (e as any)[6] = r) : r = (e as any)[6];
  let f: any;
  return ((e as any)[7] as any) !== (t as any) || ((e as any)[8] as any) !== (o as any) || ((e as any)[9] as any) !== (u as any) || ((e as any)[10] as any) !== (r as any) ? (f = ((a as any).jsx as any)("button", {
    "aria-label": t,
    className: o,
    onClick: u,
    type: "button",
    children: r
  }), (e as any)[7] = t, (e as any)[8] = o, (e as any)[9] = u, (e as any)[10] = r, (e as any)[11] = f) : f = (e as any)[11], f;
}
function Es(this: any, s: any): any {
  (Es as any).d = 1239;
  const e: any = ((T as any).c as any)(31),
    {
      error: t,
      hasRemoveFailed: l,
      isBusy: n,
      onRemove: d,
      saved: m
    }: any = s,
    {
      _: i
    }: any = (U as any)(),
    {
      _: o
    }: any = (U as any)(),
    u: any = (De as any)();
  let c: any;
  ((e as any)[0] as any) !== (i as any) || ((e as any)[1] as any) !== (t as any) ? (c = (t as any) == (null as any) ? null : (ks as any)(i, t), (e as any)[0] = i, (e as any)[1] = t, (e as any)[2] = c) : c = (e as any)[2];
  const r: any = c;
  let f: any;
  ((e as any)[3] as any) !== (o as any) || ((e as any)[4] as any) !== (r as any) || ((e as any)[5] as any) !== (l as any) ? (f = l ? (o as any)({
    id: "8MU7+l"
  }) : r, (e as any)[3] = o, (e as any)[4] = r, (e as any)[5] = l, (e as any)[6] = f) : f = (e as any)[6];
  const h: any = f;
  let p: any;
  ((e as any)[7] as any) !== (u as any) || ((e as any)[8] as any) !== (d as any) ? (p = async (w: any): Promise<any> => {
    (await (u as any)((Nt as any)())) && (d as any)(w);
  }, (e as any)[7] = u, (e as any)[8] = d, (e as any)[9] = p) : p = (e as any)[9];
  const b: any = p;
  let v: any, y: any, j: any, x: any;
  if (((e as any)[10] as any) !== (o as any) || ((e as any)[11] as any) !== (b as any) || ((e as any)[12] as any) !== (n as any) || ((e as any)[13] as any) !== (h as any) || ((e as any)[14] as any) !== (m as any)) {
    x = ((Symbol as any).for as any)("react.early_return_sentinel");
    e: {
      const w: any = (wt as any)(m) ? (((m as any).accounts as any).filter as any)((N: any): any => ((N as any).id as any) !== ((m as any).activeAccountId as any)) : [];
      if (((w as any).length as any) === (0 as any) && (h as any) == (null as any)) {
        x = null;
        break e;
      }
      ((e as any)[19] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (v = (ce as any)("sand-account-saved", "sand-9f619 sand-78zum5 sand-dt5ytf sand-195vfkc sand-1iorvi4 sand-v54qhq sand-1a8lsjc sand-f7dkkf"), (e as any)[19] = v) : v = (e as any)[19], y = "saved-accounts";
      let k: any;
      ((e as any)[20] as any) !== (o as any) || ((e as any)[21] as any) !== (b as any) || ((e as any)[22] as any) !== (n as any) ? (k = (N: any): any => {
        const A: any = (N as any).email?.trim() || (N as any).name?.trim();
        return ((a as any).jsx as any)(dt, {
          account: N,
          fallbackLabel: (o as any)({
            id: "XCrgCo"
          }),
          size: "settings",
          trailing: ((a as any).jsx as any)(fe, {
            "aria-label": (o as any)(A ? {
              id: "6f5U0u",
              values: {
                target: A
              }
            } : {
              id: "Nmbj3M"
            }),
            disabled: n,
            onClick: (): any => {
              (b as any)((N as any).id);
            },
            sentiment: "danger",
            size: "sm",
            variant: "secondary",
            children: ((a as any).jsx as any)(Q, {
              id: "t/YqKh"
            })
          })
        }, (N as any).id);
      }, (e as any)[20] = o, (e as any)[21] = b, (e as any)[22] = n, (e as any)[23] = k) : k = (e as any)[23], j = ((w as any).map as any)(k);
    }
    (e as any)[10] = o, (e as any)[11] = b, (e as any)[12] = n, (e as any)[13] = h, (e as any)[14] = m, (e as any)[15] = v, (e as any)[16] = y, (e as any)[17] = j, (e as any)[18] = x;
  } else v = (e as any)[15], y = (e as any)[16], j = (e as any)[17], x = (e as any)[18];
  if ((x as any) !== (((Symbol as any).for as any)("react.early_return_sentinel") as any)) return x;
  let g: any;
  ((e as any)[24] as any) !== (h as any) ? (g = (h as any) != (null as any) ? ((a as any).jsx as any)(Ue, {
    testId: "account-error-notice",
    children: h
  }) : null, (e as any)[24] = h, (e as any)[25] = g) : g = (e as any)[25];
  let _: any;
  return ((e as any)[26] as any) !== (v as any) || ((e as any)[27] as any) !== (y as any) || ((e as any)[28] as any) !== (j as any) || ((e as any)[29] as any) !== (g as any) ? (_ = ((a as any).jsxs as any)("div", {
    className: v,
    "data-testid": y,
    children: [j, g]
  }), (e as any)[26] = v, (e as any)[27] = y, (e as any)[28] = j, (e as any)[29] = g, (e as any)[30] = _) : _ = (e as any)[30], _;
}
function As(this: any, s: any): any {
  (As as any).d = 1237;
  const e: any = ((T as any).c as any)(110),
    {
      auth: t
    }: any = s;
  (xs as any)("account");
  const {
      _: l
    }: any = (U as any)(),
    {
      _: n
    }: any = (U as any)(),
    d: any = (bt as any)(),
    m: any = (De as any)(),
    i: any = (it as any)(),
    o: any = (pt as any)(),
    u: any = (ze as any)(hs),
    c: any = ((vt as any)() as any) != (null as any),
    r: any = ($e as any)();
  (_e as any)(((r as any).savedAccounts as any).refresh);
  const {
      saved: f
    }: any = (xt as any)(),
    h: any = (yt as any)(),
    {
      status: p
    }: any = t,
    b: any = ((p as any).kind as any) === ("logged-in" as any),
    v: any = (((kt as any)(b) as any).filter as any)(gt);
  let y: any;
  ((e as any)[0] as any) !== (r as any) || ((e as any)[1] as any) !== (b as any) ? (y = (): any => (b && (It as any)(r), Ln), (e as any)[0] = r, (e as any)[1] = b, (e as any)[2] = y) : y = (e as any)[2], (Pe as any)(y);
  const j: any = (ls as any)();
  let x: any;
  ((e as any)[3] as any) !== (j as any) || ((e as any)[4] as any) !== (b as any) ? (x = (): any => (b && (j as any)(hs), Rn), (e as any)[3] = j, (e as any)[4] = b, (e as any)[5] = x) : x = (e as any)[5], (Pe as any)(x);
  const g: any = ((p as any).kind as any) === ("logging-in" as any) || (t as any).isPending;
  let _: any;
  ((e as any)[6] as any) !== (l as any) || ((e as any)[7] as any) !== ((t as any).error as any) ? (_ = ((t as any).error as any) == (null as any) ? null : (ks as any)(l, (t as any).error), (e as any)[6] = l, (e as any)[7] = (t as any).error, (e as any)[8] = _) : _ = (e as any)[8];
  const w: any = _,
    k: any = b && (f as any) != (null as any) && (((f as any).accounts as any).length as any) > (0 as any) ? f : null,
    N: any = ((v as any).find as any)((S: any): any => ((S as any).id as any) === (h as any)) ?? null,
    A: any = (((t as any).flight as any).kind as any) === ("waiting-for-browser" as any) && (((t as any).flight as any).flow as any) === ("add-account" as any),
    I: any = (t as any).isPending || (o as any).isPending;
  let C: any;
  ((e as any)[9] as any) !== (n as any) ? (C = (n as any)({
    id: "c6o3E/"
  }), (e as any)[9] = n, (e as any)[10] = C) : C = (e as any)[10];
  let Z: any = C,
    P: any = "primary";
  if (b) {
    let S: any;
    ((e as any)[11] as any) !== (n as any) ? (S = (n as any)({
      id: "bHYIks"
    }), (e as any)[11] = n, (e as any)[12] = S) : S = (e as any)[12], Z = S, P = "secondary";
  } else if (g) {
    let S: any;
    ((e as any)[13] as any) !== (n as any) ? (S = (n as any)({
      id: "dEgA5A"
    }), (e as any)[13] = n, (e as any)[14] = S) : S = (e as any)[14], Z = S, P = "tertiary";
  }
  let q: any;
  ((e as any)[15] as any) !== (m as any) || ((e as any)[16] as any) !== (t as any) || ((e as any)[17] as any) !== (b as any) || ((e as any)[18] as any) !== (g as any) ? (q = async (): Promise<any> => {
    if (b) {
      (await (m as any)(Et)) && (await ((t as any).logout as any)());
      return;
    }
    if (g) {
      await ((t as any).cancelLoginFlight as any)();
      return;
    }
    await ((t as any).login as any)();
  }, (e as any)[15] = m, (e as any)[16] = t, (e as any)[17] = b, (e as any)[18] = g, (e as any)[19] = q) : q = (e as any)[19];
  const z: any = q;
  let W: any;
  ((e as any)[20] as any) !== (b as any) || ((e as any)[21] as any) !== ((p as any).authId as any) ? (W = b ? (zn as any)((p as any).authId) : null, (e as any)[20] = b, (e as any)[21] = (p as any).authId, (e as any)[22] = W) : W = (e as any)[22];
  const O: any = W;
  let R: any, K: any;
  if (b) {
    let S: any;
    ((e as any)[23] as any) !== (d as any) || ((e as any)[24] as any) !== ((p as any).displayName as any) || ((e as any)[25] as any) !== ((p as any).email as any) ? (S = ((d as any).resolveAccountDisplay as any)({
      displayName: (p as any).displayName,
      email: (p as any).email
    }), (e as any)[23] = d, (e as any)[24] = (p as any).displayName, (e as any)[25] = (p as any).email, (e as any)[26] = S) : S = (e as any)[26];
    const $: any = S;
    R = ($ as any).name;
    const oe: any = ($ as any).secondary,
      ne: any = oe ?? ((O as any) != (null as any) ? `#${(O as any).subject}` : null);
    let ge: any;
    ((e as any)[27] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ge = (ce as any)("sand-account-card__id", "sand-9f619 sand-b3r6kr sand-euugli sand-lyipyv sand-uxw1ft"), (e as any)[27] = ge) : ge = (e as any)[27];
    let Se: any;
    ((e as any)[28] as any) !== (n as any) || ((e as any)[29] as any) !== (ne as any) ? (Se = (ne as any) != (null as any) ? ((a as any).jsx as any)(jt, {
      dir: "ltr",
      text: ne,
      token: ne
    }) : (n as any)({
      id: "2xWX7o"
    }), (e as any)[28] = n, (e as any)[29] = ne, (e as any)[30] = Se) : Se = (e as any)[30];
    let we: any;
    ((e as any)[31] as any) !== (ge as any) || ((e as any)[32] as any) !== (Se as any) ? (we = ((a as any).jsx as any)("span", {
      className: ge,
      children: Se
    }), (e as any)[31] = ge, (e as any)[32] = Se, (e as any)[33] = we) : we = (e as any)[33];
    let Ne: any;
    ((e as any)[34] as any) !== (n as any) || ((e as any)[35] as any) !== (oe as any) ? (Ne = (oe as any) != (null as any) ? ((a as any).jsx as any)(Ze, {
      ariaLabel: (n as any)({
        id: "/lLfdi"
      }),
      subject: "email",
      value: oe
    }) : null, (e as any)[34] = n, (e as any)[35] = oe, (e as any)[36] = Ne) : Ne = (e as any)[36];
    let qe: any;
    ((e as any)[37] as any) !== (we as any) || ((e as any)[38] as any) !== (Ne as any) ? (qe = ((a as any).jsxs as any)((a as any).Fragment, {
      children: [we, Ne]
    }), (e as any)[37] = we, (e as any)[38] = Ne, (e as any)[39] = qe) : qe = (e as any)[39], K = qe;
  } else if (g) {
    let S: any;
    ((e as any)[40] as any) !== (n as any) ? (S = (n as any)({
      id: "5pYsL1"
    }), (e as any)[40] = n, (e as any)[41] = S) : S = (e as any)[41], R = S;
    let $: any;
    ((e as any)[42] as any) !== (n as any) ? ($ = (n as any)({
      id: "96E02j"
    }), (e as any)[42] = n, (e as any)[43] = $) : $ = (e as any)[43], K = $;
  } else {
    let S: any;
    ((e as any)[44] as any) !== (n as any) ? (S = (n as any)({
      id: "95+rix"
    }), (e as any)[44] = n, (e as any)[45] = S) : S = (e as any)[45], R = S;
    let $: any;
    ((e as any)[46] as any) !== (n as any) ? ($ = (n as any)({
      id: "2Jy5wv"
    }), (e as any)[46] = n, (e as any)[47] = $) : $ = (e as any)[47], K = $;
  }
  let Y: any, M: any, ue: any;
  ((e as any)[48] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Y = (ce as any)("sand-account", "sand-9f619 sand-78zum5 sand-dt5ytf sand-1v2ro7d"), M = (gs as any)("account"), ue = (ce as any)("sand-account-card", "sand-9f619 sand-78zum5 sand-1a02dak sand-6s0dn4 sand-1af02g3 sand-yinxu5 sand-v54qhq sand-1g2khh7 sand-f7dkkf"), (e as any)[48] = Y, (e as any)[49] = M, (e as any)[50] = ue) : (Y = (e as any)[48], M = (e as any)[49], ue = (e as any)[50]);
  const be: any = (p as any).kind;
  let me: any;
  ((e as any)[51] as any) !== ((t as any).avatarDataUrl as any) || ((e as any)[52] as any) !== ((t as any).updateProfilePhoto as any) || ((e as any)[53] as any) !== (b as any) || ((e as any)[54] as any) !== (u as any) || ((e as any)[55] as any) !== (R as any) ? (me = b && u ? ((a as any).jsx as any)(Is, {
    updateProfilePhoto: (t as any).updateProfilePhoto,
    children: ((a as any).jsx as any)(Qe, {
      dataUrl: (t as any).avatarDataUrl,
      isSignedIn: !0,
      name: R
    })
  }) : ((a as any).jsx as any)(Qe, {
    dataUrl: b ? (t as any).avatarDataUrl : null,
    isSignedIn: b,
    name: R
  }), (e as any)[51] = (t as any).avatarDataUrl, (e as any)[52] = (t as any).updateProfilePhoto, (e as any)[53] = b, (e as any)[54] = u, (e as any)[55] = R, (e as any)[56] = me) : me = (e as any)[56];
  let B: any;
  ((e as any)[57] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (B = (ce as any)("sand-account-card__body", "sand-9f619 sand-78zum5 sand-1iyjqo2 sand-s83m0k sand-1r8uery sand-dt5ytf sand-xhr3t sand-17y4j5z"), (e as any)[57] = B) : B = (e as any)[57];
  let se: any;
  ((e as any)[58] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (se = (ce as any)("sand-account-card__name", ((ye as any)((Ie as any).name, (re as any).body2, (us as any).medium) as any).className), (e as any)[58] = se) : se = (e as any)[58];
  let H: any;
  ((e as any)[59] as any) !== (R as any) ? (H = ((a as any).jsx as any)("span", {
    className: se,
    children: R
  }), (e as any)[59] = R, (e as any)[60] = H) : H = (e as any)[60];
  let J: any;
  ((e as any)[61] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (J = (ce as any)("sand-account-card__meta", ((ye as any)((Ie as any).meta, (re as any).body2) as any).className), (e as any)[61] = J) : J = (e as any)[61];
  let le: any;
  ((e as any)[62] as any) !== (K as any) ? (le = ((a as any).jsx as any)("span", {
    className: J,
    children: K
  }), (e as any)[62] = K, (e as any)[63] = le) : le = (e as any)[63];
  let F: any;
  ((e as any)[64] as any) !== (H as any) || ((e as any)[65] as any) !== (le as any) ? (F = ((a as any).jsxs as any)("div", {
    "aria-live": "polite",
    className: B,
    role: "status",
    children: [H, le]
  }), (e as any)[64] = H, (e as any)[65] = le, (e as any)[66] = F) : F = (e as any)[66];
  let V: any;
  ((e as any)[67] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (V = (ce as any)("sand-account-card__actions", "sand-9f619 sand-78zum5 sand-1a02dak sand-6s0dn4 sand-13a6bvl sand-ehausa sand-vc5jky"), (e as any)[67] = V) : V = (e as any)[67];
  let E: any;
  ((e as any)[68] as any) !== (i as any) || ((e as any)[69] as any) !== (t as any) || ((e as any)[70] as any) !== (A as any) || ((e as any)[71] as any) !== (I as any) || ((e as any)[72] as any) !== (k as any) ? (E = (k as any) != (null as any) ? ((a as any).jsx as any)(fe, {
    disabled: I,
    onClick: A ? (): any => {
      ((t as any).cancelLoginFlight as any)();
    } : (): any => {
      (i as any)();
    },
    size: "md",
    style: (Ie as any).actionWeakBorder,
    variant: "secondary",
    children: A ? ((a as any).jsx as any)(Q, {
      id: "dEgA5A"
    }) : ((a as any).jsx as any)(Q, {
      id: "MPPZ54"
    })
  }) : null, (e as any)[68] = i, (e as any)[69] = t, (e as any)[70] = A, (e as any)[71] = I, (e as any)[72] = k, (e as any)[73] = E) : E = (e as any)[73];
  const X: any = !(t as any).isLoaded || b && (t as any).isPending;
  let D: any;
  ((e as any)[74] as any) !== (z as any) ? (D = (): any => {
    (z as any)();
  }, (e as any)[74] = z, (e as any)[75] = D) : D = (e as any)[75];
  const ie: any = b ? (Ie as any).actionWeakBorder : null;
  let G: any;
  ((e as any)[76] as any) !== (Z as any) || ((e as any)[77] as any) !== (P as any) || ((e as any)[78] as any) !== (X as any) || ((e as any)[79] as any) !== (D as any) || ((e as any)[80] as any) !== (ie as any) ? (G = ((a as any).jsx as any)(fe, {
    className: "sand-account-card__action",
    disabled: X,
    onClick: D,
    size: "md",
    style: ie,
    variant: P,
    children: Z
  }), (e as any)[76] = Z, (e as any)[77] = P, (e as any)[78] = X, (e as any)[79] = D, (e as any)[80] = ie, (e as any)[81] = G) : G = (e as any)[81];
  let te: any;
  ((e as any)[82] as any) !== (E as any) || ((e as any)[83] as any) !== (G as any) ? (te = ((a as any).jsxs as any)("div", {
    className: V,
    children: [E, G]
  }), (e as any)[82] = E, (e as any)[83] = G, (e as any)[84] = te) : te = (e as any)[84];
  let de: any;
  ((e as any)[85] as any) !== ((p as any).kind as any) || ((e as any)[86] as any) !== (me as any) || ((e as any)[87] as any) !== (F as any) || ((e as any)[88] as any) !== (te as any) ? (de = ((a as any).jsxs as any)("div", {
    className: ue,
    "data-state": be,
    children: [me, F, te]
  }), (e as any)[85] = (p as any).kind, (e as any)[86] = me, (e as any)[87] = F, (e as any)[88] = te, (e as any)[89] = de) : de = (e as any)[89];
  let L: any;
  ((e as any)[90] as any) !== (n as any) || ((e as any)[91] as any) !== (N as any) || ((e as any)[92] as any) !== (c as any) ? (L = (N as any) != (null as any) ? ((a as any).jsxs as any)("div", {
    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-167g77z sand-1y1aw1k sand-v54qhq sand-wib8y2 sand-f7dkkf",
    "data-testid": "acting-team",
    children: [((a as any).jsx as any)("span", {
      ...(ye as any)((Ie as any).teamLabel, (re as any).body2),
      children: ((a as any).jsx as any)(Q, {
        id: "KM6m8p"
      })
    }), ((a as any).jsxs as any)("span", {
      className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-167g77z sand-euugli sand-1iyjqo2",
      children: [((a as any).jsx as any)("span", {
        ...(ye as any)((Ie as any).teamName, (re as any).body2, (us as any).medium),
        children: (N as any).name
      }), c ? ((a as any).jsx as any)(Ze, {
        ariaLabel: (n as any)({
          id: "30CLl6"
        }),
        subject: "team-id",
        value: (String as any)((N as any).id)
      }) : null]
    })]
  }) : null, (e as any)[90] = n, (e as any)[91] = N, (e as any)[92] = c, (e as any)[93] = L) : L = (e as any)[93];
  let he: any;
  ((e as any)[94] as any) !== ((t as any).error as any) || ((e as any)[95] as any) !== (I as any) || ((e as any)[96] as any) !== (o as any) || ((e as any)[97] as any) !== (k as any) ? (he = (k as any) != (null as any) ? ((a as any).jsx as any)(Es, {
    error: (t as any).error,
    hasRemoveFailed: ((o as any).failure as any) != (null as any),
    isBusy: I,
    onRemove: (o as any).removeAccount,
    saved: k
  }) : null, (e as any)[94] = (t as any).error, (e as any)[95] = I, (e as any)[96] = o, (e as any)[97] = k, (e as any)[98] = he) : he = (e as any)[98];
  let pe: any;
  ((e as any)[99] as any) !== (f?.corrupt as any) ? (pe = (f?.corrupt as any) === (!0 as any) ? ((a as any).jsx as any)(Ue, {
    className: "sand-account__corrupt",
    testId: "saved-accounts-corrupt",
    children: ((a as any).jsx as any)(Q, {
      id: "7kTh1F"
    })
  }) : null, (e as any)[99] = f?.corrupt, (e as any)[100] = pe) : pe = (e as any)[100];
  let ve: any;
  ((e as any)[101] as any) !== (w as any) || ((e as any)[102] as any) !== (k as any) ? (ve = (w as any) != (null as any) && (k as any) == (null as any) ? ((a as any).jsx as any)(Ue, {
    className: "sand-account__error",
    children: w
  }) : null, (e as any)[101] = w, (e as any)[102] = k, (e as any)[103] = ve) : ve = (e as any)[103];
  let ke: any;
  return ((e as any)[104] as any) !== (de as any) || ((e as any)[105] as any) !== (L as any) || ((e as any)[106] as any) !== (he as any) || ((e as any)[107] as any) !== (pe as any) || ((e as any)[108] as any) !== (ve as any) ? (ke = ((a as any).jsxs as any)("div", {
    className: Y,
    id: M,
    children: [de, L, he, pe, ve]
  }), (e as any)[104] = de, (e as any)[105] = L, (e as any)[106] = he, (e as any)[107] = pe, (e as any)[108] = ve, (e as any)[109] = ke) : ke = (e as any)[109], ke;
}
function Rn(this: any): any {}
function Ln(this: any): any {}
function Cs(this: any): any {
  (Cs as any).d = 1316;
  const s: any = ((T as any).c as any)(24),
    {
      _: e
    }: any = (U as any)(),
    t: any = (At as any)(),
    l: any = (De as any)(),
    {
      clear: n
    }: any = (ot as any)(),
    [d, m]: any = ((ee as any).useState as any)(!1);
  if (!t) return null;
  let i: any;
  ((s as any)[0] as any) !== (e as any) || ((s as any)[1] as any) !== (l as any) || ((s as any)[2] as any) !== (n as any) ? (i = async (): Promise<any> => {
    (await (l as any)({
      title: (e as any)({
        id: "dei+5f"
      }),
      description: (e as any)({
        id: "7O7nXp"
      }),
      confirmLabel: (e as any)({
        id: "xCJdfg"
      }),
      pendingLabel: (e as any)({
        id: "ubqkP9"
      }),
      cancelLabel: (e as any)({
        id: "dEgA5A"
      }),
      destructive: !0,
      perform: async (): Promise<any> => (await (n as any)(), null)
    })) && (m as any)(!0);
  }, (s as any)[0] = e, (s as any)[1] = l, (s as any)[2] = n, (s as any)[3] = i) : i = (s as any)[3];
  const o: any = i;
  let u: any;
  ((s as any)[4] as any) !== (e as any) ? (u = (e as any)({
    id: "8Ri8tN"
  }), (s as any)[4] = e, (s as any)[5] = u) : u = (s as any)[5];
  let c: any;
  ((s as any)[6] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (c = ((a as any).jsx as any)(Ts, {}), (s as any)[6] = c) : c = (s as any)[6];
  let r: any;
  ((s as any)[7] as any) !== (e as any) ? (r = (e as any)({
    id: "FTN9h/"
  }), (s as any)[7] = e, (s as any)[8] = r) : r = (s as any)[8];
  let f: any;
  ((s as any)[9] as any) !== (o as any) ? (f = (): any => {
    (o as any)();
  }, (s as any)[9] = o, (s as any)[10] = f) : f = (s as any)[10];
  let h: any;
  ((s as any)[11] as any) !== (e as any) || ((s as any)[12] as any) !== (d as any) ? (h = (e as any)(d ? {
    id: "FWxdTT"
  } : {
    id: "xCJdfg"
  }), (s as any)[11] = e, (s as any)[12] = d, (s as any)[13] = h) : h = (s as any)[13];
  let p: any;
  ((s as any)[14] as any) !== (d as any) || ((s as any)[15] as any) !== (f as any) || ((s as any)[16] as any) !== (h as any) ? (p = ((a as any).jsx as any)(fe, {
    disabled: d,
    onClick: f,
    size: "md",
    style: (re as any).body2,
    type: "button",
    variant: "secondary",
    children: h
  }), (s as any)[14] = d, (s as any)[15] = f, (s as any)[16] = h, (s as any)[17] = p) : p = (s as any)[17];
  let b: any;
  ((s as any)[18] as any) !== (r as any) || ((s as any)[19] as any) !== (p as any) ? (b = ((a as any).jsx as any)(ae, {
    anchorId: "team-bot-connector-preferences",
    description: r,
    variant: "card",
    children: p
  }), (s as any)[18] = r, (s as any)[19] = p, (s as any)[20] = b) : b = (s as any)[20];
  let v: any;
  return ((s as any)[21] as any) !== (u as any) || ((s as any)[22] as any) !== (b as any) ? (v = ((a as any).jsxs as any)(je, {
    title: u,
    children: [c, b]
  }), (s as any)[21] = u, (s as any)[22] = b, (s as any)[23] = v) : v = (s as any)[23], v;
}
function Ts(this: any): any {
  (Ts as any).d = 1315;
  const s: any = ((T as any).c as any)(16),
    {
      _: e
    }: any = (U as any)(),
    t: any = (De as any)(),
    {
      isLinked: l,
      isLoading: n
    }: any = (Cn as any)(),
    {
      connect: d,
      disconnect: m,
      isPending: i
    }: any = (Tn as any)();
  let o: any;
  ((s as any)[0] as any) !== (e as any) || ((s as any)[1] as any) !== (t as any) || ((s as any)[2] as any) !== (m as any) ? (o = async (): Promise<any> => {
    await (t as any)({
      title: (e as any)({
        id: "Gvan1Y"
      }),
      description: (e as any)({
        id: "M/Y8bO"
      }),
      confirmLabel: (e as any)({
        id: "5NcO7h"
      }),
      pendingLabel: (e as any)({
        id: "s+7hxs"
      }),
      cancelLabel: (e as any)({
        id: "dEgA5A"
      }),
      destructive: !0,
      perform: async (): Promise<any> => (await (m as any)("slack"), null)
    });
  }, (s as any)[0] = e, (s as any)[1] = t, (s as any)[2] = m, (s as any)[3] = o) : o = (s as any)[3];
  const u: any = o;
  let c: any;
  ((s as any)[4] as any) !== (e as any) ? (c = (e as any)({
    id: "bYJccz"
  }), (s as any)[4] = e, (s as any)[5] = c) : c = (s as any)[5];
  let r: any;
  ((s as any)[6] as any) !== (e as any) || ((s as any)[7] as any) !== (u as any) || ((s as any)[8] as any) !== (d as any) || ((s as any)[9] as any) !== (l as any) || ((s as any)[10] as any) !== (n as any) || ((s as any)[11] as any) !== (i as any) ? (r = l ? ((a as any).jsx as any)(fe, {
    disabled: i,
    onClick: (): any => {
      (u as any)();
    },
    size: "md",
    style: (re as any).body2,
    type: "button",
    variant: "secondary",
    children: (e as any)({
      id: "5NcO7h"
    })
  }) : ((a as any).jsx as any)(fe, {
    disabled: i || n,
    onClick: (): any => {
      (d as any)("slack");
    },
    size: "md",
    style: (re as any).body2,
    type: "button",
    variant: "secondary",
    children: (e as any)({
      id: "+iht1R"
    })
  }), (s as any)[6] = e, (s as any)[7] = u, (s as any)[8] = d, (s as any)[9] = l, (s as any)[10] = n, (s as any)[11] = i, (s as any)[12] = r) : r = (s as any)[12];
  let f: any;
  return ((s as any)[13] as any) !== (c as any) || ((s as any)[14] as any) !== (r as any) ? (f = ((a as any).jsx as any)(ae, {
    anchorId: "team-bot-slack-link",
    description: c,
    variant: "card",
    children: r
  }), (s as any)[13] = c, (s as any)[14] = r, (s as any)[15] = f) : f = (s as any)[15], f;
}
function Ae(this: any, s: any, e: any): any {
  return (e as any) === ("allow" as any) ? (s as any).allowInstructions : (s as any).blockInstructions;
}
function Fe(this: any, s: any, e: any, t: any): any {
  return (e as any) === ("allow" as any) ? {
    ...s,
    allowInstructions: t
  } : {
    ...s,
    blockInstructions: t
  };
}
function Dn(this: any, s: any): any {
  return [...(((s as any).allowInstructions as any).map as any)((e: any): any => ({
    behavior: "allow",
    text: e
  })), ...(((s as any).blockInstructions as any).map as any)((e: any): any => ({
    behavior: "ask",
    text: e
  }))];
}
function $n(this: any, s: any): any {
  return [...(((s as any).allowInstructions as any).map as any)((e: any, t: any): any => ({
    behavior: "allow",
    text: e,
    listIndex: t
  })), ...(((s as any).blockInstructions as any).map as any)((e: any, t: any): any => ({
    behavior: "ask",
    text: e,
    listIndex: t
  }))];
}
function zs(this: any, s: any, e: any): any {
  const t: any = (Ae as any)(s, (e as any).behavior);
  return (Fe as any)(s, (e as any).behavior, ((t as any).filter as any)((l: any, n: any): any => (n as any) !== ((e as any).listIndex as any)));
}
function bs(this: any, s: any, e: any): any {
  return ((s as any).behavior as any) === ((e as any).behavior as any) && ((s as any).text as any) === ((e as any).text as any);
}
function qn(this: any, s: any, e: any): any {
  const l: any = (((Ae as any)(e, (s as any).behavior) as any).indexOf as any)((s as any).text);
  return (l as any) === (-1 as any) ? null : (l as any) === ((s as any).listIndex as any) ? s : {
    behavior: (s as any).behavior,
    text: (s as any).text,
    listIndex: l
  };
}
function Ge(this: any, s: any): any {
  return ((s as any).length as any) >= (js as any);
}
function Oe(this: any, s: any): any {
  const {
      instructions: e,
      text: t,
      behavior: l,
      editing: n
    }: any = s,
    d: any = (Ae as any)(e, l),
    m: any = (n as any) != (null as any) && ((n as any).behavior as any) === (l as any);
  if (((d as any).some as any)((c: any, r: any): any => (c as any) === (t as any) && !(m && (r as any) === ((n as any).listIndex as any)))) return null;
  if ((n as any) == (null as any)) return (Ge as any)(d) ? null : (Fe as any)(e, l, [...d, t]);
  if (m) {
    const c: any = [...d];
    return (c as any)[(n as any).listIndex] = t, (Fe as any)(e, l, c);
  }
  if ((Ge as any)(d)) return null;
  const o: any = (zs as any)(e, n),
    u: any = (Ae as any)(o, l);
  return (Fe as any)(o, l, [...u, t]);
}
const We: any = {
    allow: {
      id: "H+RaRS"
    },
    ask: {
      id: "4YjKLA"
    }
  },
  On: any = [{
    value: "allow",
    label: (We as any).allow
  }, {
    value: "ask",
    label: (We as any).ask
  }],
  Ye: any = {
    ruleLock: {
      kB7OPa: "sand-9f619",
      k1xSpc: "sand-3nfvp2",
      kGNEyG: "sand-6s0dn4",
      kjj79g: "sand-l56j7k",
      kmuXW: "sand-2lah0s",
      kzqmXN: "sand-w4jnvo",
      kZKoxP: "sand-1qx5ct2",
      kaIpWk: "sand-1kogg8i",
      kMwMTN: "sand-1o0liin",
      kkrTdU: "sand-t0e3qv",
      $$css: !0
    },
    composerButton: {
      kB7OPa: "sand-9f619",
      kZKoxP: "sand-1fgtraw",
      $$css: !0
    }
  };
function Je(this: any, s: any): any {
  (Je as any).d = 1245;
  const e: any = ((T as any).c as any)(68),
    {
      draft: t,
      behavior: l,
      disabled: n,
      canSubmit: d,
      showEntryLimit: m,
      submitLabel: i,
      submitAriaLabel: o,
      draftAriaLabel: u,
      behaviorAriaLabel: c,
      placeholder: r,
      autoFocus: f,
      onCancel: h,
      onDraftChange: p,
      onBehaviorChange: b,
      onSubmit: v
    }: any = s,
    y: any = (f as any) === (void 0 as any) ? !1 : f,
    {
      i18n: j,
      _: x
    }: any = (U as any)(),
    g: any = ((ee as any).useId as any)();
  let _: any;
  ((e as any)[0] as any) !== (p as any) ? (_ = (L: any): any => {
    const he: any = ((L as any).target as any).value;
    (p as any)(((he as any).length as any) <= (fs as any) ? he : ((he as any).slice as any)(0, fs));
  }, (e as any)[0] = p, (e as any)[1] = _) : _ = (e as any)[1];
  const w: any = _;
  let k: any;
  ((e as any)[2] as any) !== (l as any) || ((e as any)[3] as any) !== (t as any) || ((e as any)[4] as any) !== (b as any) || ((e as any)[5] as any) !== (h as any) || ((e as any)[6] as any) !== (p as any) || ((e as any)[7] as any) !== (v as any) ? (k = (L: any): any => {
    ((L as any).key as any) === ("Enter" as any) && ((L as any).metaKey || (L as any).ctrlKey) && (((L as any).preventDefault as any)(), (v as any)()), ((L as any).key as any) === ("Escape" as any) && ((h as any) != (null as any) ? (((L as any).preventDefault as any)(), (h as any)()) : ((t as any) !== ("" as any) || (l as any) !== ("allow" as any)) && (((L as any).preventDefault as any)(), (p as any)(""), (b as any)("allow")));
  }, (e as any)[2] = l, (e as any)[3] = t, (e as any)[4] = b, (e as any)[5] = h, (e as any)[6] = p, (e as any)[7] = v, (e as any)[8] = k) : k = (e as any)[8];
  const N: any = k;
  let A: any;
  ((e as any)[9] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (A = {
    className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-ehausa sand-h8yej3"
  }, (e as any)[9] = A) : A = (e as any)[9];
  const I: any = (A as any).className;
  let C: any;
  ((e as any)[10] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (C = {
    className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-11twubx sand-h8yej3"
  }, (e as any)[10] = C) : C = (e as any)[10];
  const Z: any = (C as any).className;
  let P: any;
  ((e as any)[11] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (P = {
    className: "sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak"
  }, (e as any)[11] = P) : P = (e as any)[11];
  let q: any;
  ((e as any)[12] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (q = ((a as any).jsx as any)(Ee, {
    as: "span",
    color: "primary",
    size: "md",
    children: ((a as any).jsx as any)(Q, {
      id: "8X0v3P"
    })
  }), (e as any)[12] = q) : q = (e as any)[12];
  let z: any;
  ((e as any)[13] as any) !== (g as any) ? (z = ((a as any).jsx as any)("label", {
    className: (P as any).className,
    htmlFor: g,
    children: q
  }), (e as any)[13] = g, (e as any)[14] = z) : z = (e as any)[14];
  let W: any;
  ((e as any)[15] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (W = {
    className: "sand-9f619 sand-h8yej3 sand-5f5z56 sand-u97haq sand-lrnmfh sand-uve7l6 sand-1fg0g13 sand-1rgtt3y sand-1tajz9i sand-mkeg23 sand-1y0btm7 sand-qz0629 sand-1043rbw sand-13l7odt sand-1wd3ewq sand-jb2p0i sand-11wthnw sand-frs9s4 sand-tt52l0 sand-1odjw0f sand-1t137rt sand-ltfok3"
  }, (e as any)[15] = W) : W = (e as any)[15];
  let O: any;
  ((e as any)[16] as any) !== (y as any) || ((e as any)[17] as any) !== (n as any) || ((e as any)[18] as any) !== (t as any) || ((e as any)[19] as any) !== (u as any) || ((e as any)[20] as any) !== (w as any) || ((e as any)[21] as any) !== (N as any) || ((e as any)[22] as any) !== (r as any) || ((e as any)[23] as any) !== (g as any) ? (O = ((a as any).jsx as any)("textarea", {
    "aria-label": u,
    autoFocus: y,
    className: (W as any).className,
    disabled: n,
    id: g,
    onChange: w,
    onKeyDown: N,
    placeholder: r,
    rows: 1,
    value: t
  }), (e as any)[16] = y, (e as any)[17] = n, (e as any)[18] = t, (e as any)[19] = u, (e as any)[20] = w, (e as any)[21] = N, (e as any)[22] = r, (e as any)[23] = g, (e as any)[24] = O) : O = (e as any)[24];
  let R: any;
  ((e as any)[25] as any) !== (z as any) || ((e as any)[26] as any) !== (O as any) ? (R = ((a as any).jsxs as any)("div", {
    className: Z,
    children: [z, O]
  }), (e as any)[25] = z, (e as any)[26] = O, (e as any)[27] = R) : R = (e as any)[27];
  let K: any;
  ((e as any)[28] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (K = {
    className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-11twubx sand-h8yej3"
  }, (e as any)[28] = K) : K = (e as any)[28];
  const Y: any = (K as any).className;
  let M: any;
  ((e as any)[29] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (M = {
    className: "sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak"
  }, (e as any)[29] = M) : M = (e as any)[29];
  let ue: any, be: any;
  ((e as any)[30] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ue = ((a as any).jsx as any)(Ee, {
    as: "span",
    className: (M as any).className,
    color: "primary",
    size: "md",
    children: ((a as any).jsx as any)(Q, {
      id: "nFnkzP"
    })
  }), be = {
    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-ehausa"
  }, (e as any)[30] = ue, (e as any)[31] = be) : (ue = (e as any)[30], be = (e as any)[31]);
  const me: any = (be as any).className;
  let B: any;
  ((e as any)[32] as any) !== (b as any) ? (B = (L: any): any => {
    (L as any) != (null as any) && (b as any)(L);
  }, (e as any)[32] = b, (e as any)[33] = B) : B = (e as any)[33];
  let se: any;
  ((e as any)[34] as any) !== (j as any) ? (se = ((On as any).map as any)((L: any): any => ({
    ...L,
    label: ((j as any)._ as any)((L as any).label)
  })), (e as any)[34] = j, (e as any)[35] = se) : se = (e as any)[35];
  let H: any;
  ((e as any)[36] as any) !== (l as any) || ((e as any)[37] as any) !== (c as any) || ((e as any)[38] as any) !== (n as any) || ((e as any)[39] as any) !== (B as any) || ((e as any)[40] as any) !== (se as any) ? (H = ((a as any).jsx as any)(Te, {
    "aria-label": c,
    disabled: n,
    onValueChange: B,
    options: se,
    placement: "bottom-start",
    size: "lg",
    value: l,
    variant: "ghost"
  }), (e as any)[36] = l, (e as any)[37] = c, (e as any)[38] = n, (e as any)[39] = B, (e as any)[40] = se, (e as any)[41] = H) : H = (e as any)[41];
  let J: any;
  ((e as any)[42] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (J = {
    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-13a6bvl sand-2lah0s sand-ehausa sand-euugli"
  }, (e as any)[42] = J) : J = (e as any)[42];
  const le: any = (J as any).className;
  let F: any;
  ((e as any)[43] as any) !== (x as any) || ((e as any)[44] as any) !== (m as any) ? (F = m ? ((a as any).jsx as any)("span", {
    className: "sand-y5h43f sand-wn7fz2 sand-uxw1ft sand-8bfsz3",
    children: (x as any)({
      id: "/B44yX",
      values: {
        SAND_AUTO_REVIEW_INSTRUCTION_MAX_ENTRIES: js
      }
    })
  }) : null, (e as any)[43] = x, (e as any)[44] = m, (e as any)[45] = F) : F = (e as any)[45];
  let V: any;
  ((e as any)[46] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (V = {
    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-2lah0s sand-ehausa"
  }, (e as any)[46] = V) : V = (e as any)[46];
  let E: any;
  ((e as any)[47] as any) !== (x as any) || ((e as any)[48] as any) !== (n as any) || ((e as any)[49] as any) !== (h as any) ? (E = (h as any) != (null as any) ? ((a as any).jsx as any)(fe, {
    "aria-label": (x as any)({
      id: "1tYiQU"
    }),
    disabled: n,
    onClick: h,
    size: "md",
    style: (Ye as any).composerButton,
    variant: "secondary",
    children: ((a as any).jsx as any)(Q, {
      id: "dEgA5A"
    })
  }) : null, (e as any)[47] = x, (e as any)[48] = n, (e as any)[49] = h, (e as any)[50] = E) : E = (e as any)[50];
  const X: any = !d;
  let D: any;
  ((e as any)[51] as any) !== (v as any) || ((e as any)[52] as any) !== (o as any) || ((e as any)[53] as any) !== (i as any) || ((e as any)[54] as any) !== (X as any) ? (D = ((a as any).jsx as any)(fe, {
    "aria-label": o,
    disabled: X,
    onClick: v,
    size: "md",
    style: (Ye as any).composerButton,
    variant: "primary",
    children: i
  }), (e as any)[51] = v, (e as any)[52] = o, (e as any)[53] = i, (e as any)[54] = X, (e as any)[55] = D) : D = (e as any)[55];
  let ie: any;
  ((e as any)[56] as any) !== (E as any) || ((e as any)[57] as any) !== (D as any) ? (ie = ((a as any).jsxs as any)("div", {
    className: (V as any).className,
    children: [E, D]
  }), (e as any)[56] = E, (e as any)[57] = D, (e as any)[58] = ie) : ie = (e as any)[58];
  let G: any;
  ((e as any)[59] as any) !== (F as any) || ((e as any)[60] as any) !== (ie as any) ? (G = ((a as any).jsxs as any)("div", {
    className: le,
    children: [F, ie]
  }), (e as any)[59] = F, (e as any)[60] = ie, (e as any)[61] = G) : G = (e as any)[61];
  let te: any;
  ((e as any)[62] as any) !== (H as any) || ((e as any)[63] as any) !== (G as any) ? (te = ((a as any).jsxs as any)("div", {
    className: Y,
    children: [ue, ((a as any).jsxs as any)("div", {
      className: me,
      children: [H, G]
    })]
  }), (e as any)[62] = H, (e as any)[63] = G, (e as any)[64] = te) : te = (e as any)[64];
  let de: any;
  return ((e as any)[65] as any) !== (R as any) || ((e as any)[66] as any) !== (te as any) ? (de = ((a as any).jsxs as any)("div", {
    className: I,
    children: [R, te]
  }), (e as any)[65] = R, (e as any)[66] = te, (e as any)[67] = de) : de = (e as any)[67], de;
}
function Ps(this: any, s: any): any {
  (Ps as any).d = 1244;
  const e: any = ((T as any).c as any)(8),
    {
      text: t
    }: any = s,
    [l, n]: any = ((ee as any).useState as any)(!1);
  let d: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = (): any => (r: any): any => {
    if ((r as any) == (null as any)) return;
    const f: any = (): any => (n as any)(((r as any).scrollWidth as any) > ((r as any).clientWidth as any));
    (f as any)();
    const h: any = new (ResizeObserver as any)(f);
    return ((h as any).observe as any)(r), (): any => ((h as any).disconnect as any)();
  }, (e as any)[0] = d) : d = (e as any)[0];
  const [m]: any = ((ee as any).useState as any)(d),
    i: any = !l;
  let o: any;
  ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (o = {
    className: "sand-9f619 sand-euugli sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-11wthnw sand-1xfvgam sand-1wd3ewq sand-b3r6kr sand-lyipyv sand-uxw1ft"
  }, (e as any)[1] = o) : o = (e as any)[1];
  let u: any;
  ((e as any)[2] as any) !== (t as any) ? (u = ((a as any).jsx as any)("p", {
    ...o,
    ref: m,
    role: "cell",
    children: t
  }), (e as any)[2] = t, (e as any)[3] = u) : u = (e as any)[3];
  let c: any;
  return ((e as any)[4] as any) !== (i as any) || ((e as any)[5] as any) !== (u as any) || ((e as any)[6] as any) !== (t as any) ? (c = ((a as any).jsx as any)(ys, {
    content: t,
    disabled: i,
    children: u
  }), (e as any)[4] = i, (e as any)[5] = u, (e as any)[6] = t, (e as any)[7] = c) : c = (e as any)[7], c;
}
function es(this: any, s: any): any {
  (es as any).d = 1246;
  const e: any = ((T as any).c as any)(14),
    {
      text: t,
      behaviorLabel: l,
      actions: n,
      locked: d
    }: any = s,
    m: any = (d as any) === (void 0 as any) ? !1 : d;
  let i: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (i = (ce as any)("sand-auto-review-rule", "sand-9f619 sand-rvj5dj sand-1pam42o sand-6s0dn4 sand-tqikln sand-1yrsyyn sand-19bzwdx sand-10b6aqq sand-v853mj sand-1e1y6u3 sand-jbqb8w sand-1s9i74l"), (e as any)[0] = i) : i = (e as any)[0];
  let o: any;
  ((e as any)[1] as any) !== (m as any) || ((e as any)[2] as any) !== (t as any) ? (o = m ? ((a as any).jsx as any)(Ps, {
    text: t
  }) : ((a as any).jsx as any)("p", {
    className: "sand-9f619 sand-euugli sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-11wthnw sand-1xfvgam sand-1wd3ewq sand-b3r6kr sand-lyipyv sand-uxw1ft",
    role: "cell",
    title: t,
    children: t
  }), (e as any)[1] = m, (e as any)[2] = t, (e as any)[3] = o) : o = (e as any)[3];
  let u: any;
  ((e as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (u = {
    className: "sand-9f619 sand-euugli sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-11wthnw sand-1xfvgam sand-1wd3ewq sand-b3r6kr sand-lyipyv sand-uxw1ft"
  }, (e as any)[4] = u) : u = (e as any)[4];
  let c: any;
  ((e as any)[5] as any) !== (l as any) ? (c = ((a as any).jsx as any)("p", {
    className: (u as any).className,
    role: "cell",
    children: l
  }), (e as any)[5] = l, (e as any)[6] = c) : c = (e as any)[6];
  let r: any;
  ((e as any)[7] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (r = {
    className: "sand-9f619 sand-78zum5 sand-2lah0s sand-13a6bvl sand-6s0dn4 sand-17d4w8g"
  }, (e as any)[7] = r) : r = (e as any)[7];
  let f: any;
  ((e as any)[8] as any) !== (n as any) ? (f = ((a as any).jsx as any)("div", {
    className: (r as any).className,
    role: "cell",
    children: n
  }), (e as any)[8] = n, (e as any)[9] = f) : f = (e as any)[9];
  let h: any;
  return ((e as any)[10] as any) !== (o as any) || ((e as any)[11] as any) !== (c as any) || ((e as any)[12] as any) !== (f as any) ? (h = ((a as any).jsxs as any)("div", {
    className: i,
    role: "row",
    children: [o, c, f]
  }), (e as any)[10] = o, (e as any)[11] = c, (e as any)[12] = f, (e as any)[13] = h) : h = (e as any)[13], h;
}
function Rs(this: any, s: any): any {
  (Rs as any).d = 1247;
  const e: any = ((T as any).c as any)(50),
    {
      instructions: t,
      teamRules: l,
      disabled: n,
      onChange: d
    }: any = s,
    {
      i18n: m,
      _: i
    }: any = (U as any)(),
    [o, u]: any = ((ee as any).useState as any)(""),
    [c, r]: any = ((ee as any).useState as any)("allow"),
    [f, h]: any = ((ee as any).useState as any)(null);
  let p: any;
  if (((e as any)[0] as any) !== (i as any) || ((e as any)[1] as any) !== (n as any) || ((e as any)[2] as any) !== (o as any) || ((e as any)[3] as any) !== (c as any) || ((e as any)[4] as any) !== (m as any) || ((e as any)[5] as any) !== (f as any) || ((e as any)[6] as any) !== (t as any) || ((e as any)[7] as any) !== (d as any) || ((e as any)[8] as any) !== (l as any)) {
    const b: any = (f as any) == (null as any) ? null : (qn as any)((f as any).rule, t);
    (f as any) != (null as any) && (b as any) == (null as any) && (h as any)(null);
    const v: any = (f as any) != (null as any) && (b as any) != (null as any) ? {
        ...f,
        rule: b
      } : null,
      y: any = (Dn as any)(l),
      j: any = ($n as any)(t),
      x: any = (y as any).length;
    let g: any;
    ((e as any)[10] as any) !== (i as any) ? (g = (i as any)({
      id: "aoONzQ"
    }), (e as any)[10] = i, (e as any)[11] = g) : g = (e as any)[11];
    const _: any = g,
      w: any = ((o as any).trim as any)();
    let k: any;
    if (((e as any)[12] as any) !== (c as any) || ((e as any)[13] as any) !== (t as any)) {
      const E: any = (Ae as any)(t, c);
      k = (Ge as any)(E), (e as any)[12] = c, (e as any)[13] = t, (e as any)[14] = k;
    } else k = (e as any)[14];
    const N: any = k,
      A: any = !n && (v as any) == (null as any) && ((w as any).length as any) > (0 as any) && ((Oe as any)({
        instructions: t,
        text: w,
        behavior: c,
        editing: null
      }) as any) != (null as any),
      I: any = (v as any) != (null as any) && (((v as any).rule as any).behavior as any) !== ((v as any).draftBehavior as any) && (Ge as any)((Ae as any)(t, (v as any).draftBehavior));
    let C: any;
    ((e as any)[15] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (C = (): any => {
      (u as any)(""), (r as any)("allow");
    }, (e as any)[15] = C) : C = (e as any)[15];
    const Z: any = C;
    let P: any;
    ((e as any)[16] as any) !== (A as any) || ((e as any)[17] as any) !== (c as any) || ((e as any)[18] as any) !== (t as any) || ((e as any)[19] as any) !== (d as any) || ((e as any)[20] as any) !== (w as any) ? (P = (): any => {
      if (!A) return;
      const E: any = (Oe as any)({
        instructions: t,
        text: w,
        behavior: c,
        editing: null
      });
      (E as any) != (null as any) && ((d as any)(E), (Z as any)());
    }, (e as any)[16] = A, (e as any)[17] = c, (e as any)[18] = t, (e as any)[19] = d, (e as any)[20] = w, (e as any)[21] = P) : P = (e as any)[21];
    const q: any = P;
    let z: any;
    ((e as any)[22] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (z = (E: any): any => {
      (h as any)({
        rule: E,
        draftText: (E as any).text,
        draftBehavior: (E as any).behavior
      });
    }, (e as any)[22] = z) : z = (e as any)[22];
    const W: any = z;
    let O: any;
    ((e as any)[23] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (O = (): any => {
      (h as any)(null);
    }, (e as any)[23] = O) : O = (e as any)[23];
    const R: any = O,
      K: any = (): any => {
        if ((v as any) == (null as any) || n) return;
        const E: any = (((v as any).draftText as any).trim as any)();
        if (((E as any).length as any) === (0 as any)) return;
        const X: any = (Oe as any)({
          instructions: t,
          text: E,
          behavior: (v as any).draftBehavior,
          editing: (v as any).rule
        });
        (X as any) != (null as any) && ((d as any)(X), (h as any)(null));
      };
    let Y: any;
    ((e as any)[24] as any) !== (t as any) || ((e as any)[25] as any) !== (d as any) ? (Y = (E: any): any => {
      (d as any)((zs as any)(t, E)), (h as any)((X: any): any => (X as any) == (null as any) || (bs as any)((X as any).rule, E) ? null : X);
    }, (e as any)[24] = t, (e as any)[25] = d, (e as any)[26] = Y) : Y = (e as any)[26];
    const M: any = Y,
      ue: any = (v as any) != (null as any) && !n && (((((v as any).draftText as any).trim as any)() as any).length as any) > (0 as any) && ((Oe as any)({
        instructions: t,
        text: (((v as any).draftText as any).trim as any)(),
        behavior: (v as any).draftBehavior,
        editing: (v as any).rule
      }) as any) != (null as any);
    let be: any;
    ((e as any)[27] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (be = {
      className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-3qzy4x sand-h8yej3"
    }, (e as any)[27] = be) : be = (e as any)[27];
    const me: any = (be as any).className;
    let B: any;
    ((e as any)[28] as any) !== (i as any) ? (B = (i as any)({
      id: "j74EnZ"
    }), (e as any)[28] = i, (e as any)[29] = B) : B = (e as any)[29];
    const se: any = n || (v as any) != (null as any);
    let H: any;
    ((e as any)[30] as any) !== (i as any) ? (H = (i as any)({
      id: "oUa4Ur"
    }), (e as any)[30] = i, (e as any)[31] = H) : H = (e as any)[31];
    let J: any;
    ((e as any)[32] as any) !== (i as any) ? (J = (i as any)({
      id: "TWBOU+"
    }), (e as any)[32] = i, (e as any)[33] = J) : J = (e as any)[33];
    let le: any;
    ((e as any)[34] as any) !== (i as any) ? (le = (i as any)({
      id: "O8tK4v"
    }), (e as any)[34] = i, (e as any)[35] = le) : le = (e as any)[35];
    let F: any;
    ((e as any)[36] as any) !== (i as any) ? (F = (i as any)({
      id: "bmQLn5"
    }), (e as any)[36] = i, (e as any)[37] = F) : F = (e as any)[37];
    let V: any;
    ((e as any)[38] as any) !== (q as any) || ((e as any)[39] as any) !== (A as any) || ((e as any)[40] as any) !== (o as any) || ((e as any)[41] as any) !== (c as any) || ((e as any)[42] as any) !== (N as any) || ((e as any)[43] as any) !== (B as any) || ((e as any)[44] as any) !== (se as any) || ((e as any)[45] as any) !== (H as any) || ((e as any)[46] as any) !== (J as any) || ((e as any)[47] as any) !== (le as any) || ((e as any)[48] as any) !== (F as any) ? (V = ((a as any).jsx as any)(Je, {
      behavior: c,
      behaviorAriaLabel: B,
      canSubmit: A,
      disabled: se,
      draft: o,
      draftAriaLabel: H,
      onBehaviorChange: r,
      onDraftChange: u,
      onSubmit: q,
      placeholder: J,
      showEntryLimit: N,
      submitAriaLabel: le,
      submitLabel: F
    }), (e as any)[38] = q, (e as any)[39] = A, (e as any)[40] = o, (e as any)[41] = c, (e as any)[42] = N, (e as any)[43] = B, (e as any)[44] = se, (e as any)[45] = H, (e as any)[46] = J, (e as any)[47] = le, (e as any)[48] = F, (e as any)[49] = V) : V = (e as any)[49], p = ((a as any).jsxs as any)("div", {
      className: me,
      children: [V, ((y as any).length as any) > (0 as any) || ((j as any).length as any) > (0 as any) ? ((a as any).jsxs as any)("div", {
        "aria-label": (i as any)({
          id: "7KwN2p"
        }),
        className: (ce as any)("sand-auto-review-rules-table", "sand-9f619 sand-78zum5 sand-dt5ytf sand-h8yej3 sand-exx8yu sand-196pc8s sand-1xlntvz sand-22095l sand-4hv7ue sand-1y0btm7 sand-fnq37j sand-1043rbw"),
        role: "table",
        children: [((a as any).jsxs as any)("div", {
          className: "sand-9f619 sand-rvj5dj sand-1pam42o sand-6s0dn4 sand-tqikln sand-1t8xvyj sand-19bzwdx sand-2lprc sand-v853mj",
          role: "row",
          children: [((a as any).jsx as any)("div", {
            className: "sand-1wm8ruf sand-wn7fz2 sand-4b2ntj",
            role: "columnheader",
            children: ((a as any).jsx as any)(Q, {
              id: "bwRvnp"
            })
          }), ((a as any).jsx as any)("div", {
            className: "sand-1wm8ruf sand-wn7fz2 sand-4b2ntj",
            role: "columnheader",
            children: ((a as any).jsx as any)(Q, {
              id: "tK9OCv"
            })
          }), ((a as any).jsx as any)("div", {
            "aria-hidden": !0
          })]
        }), ((a as any).jsxs as any)("div", {
          className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-uve7l6",
          role: "rowgroup",
          children: [((y as any).map as any)((E: any, X: any): any => ((a as any).jsx as any)(es, {
            actions: ((a as any).jsx as any)(ys, {
              content: _,
              children: ((a as any).jsx as any)("span", {
                "aria-label": _,
                role: "img",
                tabIndex: 0,
                ...(ye as any)((Ye as any).ruleLock, (zt as any).controlRing),
                children: ((a as any).jsx as any)(Ce, {
                  name: "lock-locked",
                  size: "sm"
                })
              })
            }),
            behaviorLabel: ((m as any)._ as any)((We as any)[(E as any).behavior]),
            locked: !0,
            text: (E as any).text
          }, `team:${(E as any).behavior}:${X}:${(E as any).text}`)), ((j as any).map as any)((E: any, X: any): any => {
            const D: any = (x as any) + (X as any);
            return (v as any) != (null as any) && (bs as any)((v as any).rule, E) && (v as any) != (null as any) ? ((a as any).jsx as any)("div", {
              className: (ce as any)("sand-auto-review-rule", "sand-9f619 sand-1t8xvyj sand-t1q3vd sand-usxwy5 sand-8fiw5y sand-4hv7ue sand-1y0btm7 sand-fnq37j sand-1e1y6u3"),
              role: "row",
              children: ((a as any).jsx as any)(Je, {
                autoFocus: !0,
                behavior: (v as any).draftBehavior,
                behaviorAriaLabel: (i as any)({
                  id: "Dreb42",
                  values: {
                    0: (D as any) + (1 as any)
                  }
                }),
                canSubmit: ue,
                disabled: n,
                draft: (v as any).draftText,
                draftAriaLabel: (i as any)({
                  id: "iqx6+R",
                  values: {
                    0: (D as any) + (1 as any)
                  }
                }),
                onBehaviorChange: (G: any): any => {
                  (h as any)({
                    ...v,
                    draftBehavior: G
                  });
                },
                onCancel: R,
                onDraftChange: (G: any): any => {
                  (h as any)({
                    ...v,
                    draftText: G
                  });
                },
                onSubmit: K,
                placeholder: (i as any)({
                  id: "TWBOU+"
                }),
                showEntryLimit: I,
                submitAriaLabel: (i as any)({
                  id: "c+k1s0",
                  values: {
                    0: (D as any) + (1 as any)
                  }
                }),
                submitLabel: (i as any)({
                  id: "LvKmBo"
                })
              })
            }, `${(E as any).behavior}:${(E as any).listIndex}:${(E as any).text}`) : ((a as any).jsx as any)(es, {
              actions: ((a as any).jsxs as any)((a as any).Fragment, {
                children: [((a as any).jsx as any)(rs, {
                  "aria-label": (i as any)({
                    id: "23JPFP",
                    values: {
                      0: (D as any) + (1 as any)
                    }
                  }),
                  disabled: n || (v as any) != (null as any),
                  icon: "pencil-square",
                  onClick: (): any => (W as any)(E),
                  shape: "square",
                  size: "xs",
                  variant: "ghost"
                }), ((a as any).jsx as any)(rs, {
                  "aria-label": (i as any)({
                    id: "NcUUHs",
                    values: {
                      0: (D as any) + (1 as any)
                    }
                  }),
                  disabled: n,
                  icon: "trash",
                  onClick: (): any => (M as any)(E),
                  shape: "square",
                  size: "xs",
                  variant: "ghost"
                })]
              }),
              behaviorLabel: ((m as any)._ as any)((We as any)[(E as any).behavior]),
              text: (E as any).text
            }, `${(E as any).behavior}:${(E as any).listIndex}:${(E as any).text}`);
          })]
        })]
      }) : null]
    }), (e as any)[0] = i, (e as any)[1] = n, (e as any)[2] = o, (e as any)[3] = c, (e as any)[4] = m, (e as any)[5] = f, (e as any)[6] = t, (e as any)[7] = d, (e as any)[8] = l, (e as any)[9] = p;
  } else p = (e as any)[9];
  return p;
}
function Ls(this: any): any {
  (Ls as any).d = 1242;
  const s: any = ((T as any).c as any)(1);
  let e: any;
  return ((s as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (e = ((a as any).jsx as any)(Ds, {}), (s as any)[0] = e) : e = (s as any)[0], e;
}
function Ds(this: any): any {
  (Ds as any).d = 1243;
  const s: any = ((T as any).c as any)(33);
  (xs as any)("auto-review-rules");
  const {
      _: e
    }: any = (U as any)(),
    t: any = ($e as any)();
  (_e as any)(((t as any).autoReviewInstructions as any).load);
  const l: any = (Ct as any)(),
    {
      setInstructions: n,
      isPending: d,
      failure: m
    }: any = (Tt as any)();
  (_e as any)(((t as any).teamPolicy as any).load);
  const i: any = (In as any)(),
    o: any = (l as any).isEnabled || ((i as any).lock as any) === ("held" as any),
    u: any = ((((i as any).rules as any).allowInstructions as any).length as any) > (0 as any) || ((((i as any).rules as any).blockInstructions as any).length as any) > (0 as any);
  let c: any;
  ((s as any)[0] as any) !== (n as any) ? (c = (w: any): any => {
    (n as any)(w);
  }, (s as any)[0] = n, (s as any)[1] = c) : c = (s as any)[1];
  const r: any = c;
  let f: any;
  ((s as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = (gs as any)("auto-review-rules"), (s as any)[2] = f) : f = (s as any)[2];
  let h: any;
  ((s as any)[3] as any) !== (e as any) || ((s as any)[4] as any) !== (m as any) ? (h = (m as any) == (null as any) ? (e as any)({
    id: "De8ppO"
  }) : (e as any)({
    id: "QqKsGg"
  }), (s as any)[3] = e, (s as any)[4] = m, (s as any)[5] = h) : h = (s as any)[5];
  let p: any;
  ((s as any)[6] as any) !== (e as any) || ((s as any)[7] as any) !== ((i as any).lock as any) ? (p = ((i as any).lock as any) === ("held" as any) ? {
    heldReason: (e as any)({
      id: "HrUSV3"
    })
  } : {}, (s as any)[6] = e, (s as any)[7] = (i as any).lock, (s as any)[8] = p) : p = (s as any)[8];
  const b: any = d || ((i as any).lock as any) === ("unknown" as any);
  let v: any;
  ((s as any)[9] as any) !== (e as any) ? (v = (e as any)({
    id: "RkLueX"
  }), (s as any)[9] = e, (s as any)[10] = v) : v = (s as any)[10];
  let y: any;
  ((s as any)[11] as any) !== (l as any) || ((s as any)[12] as any) !== (r as any) ? (y = (): any => (r as any)({
    ...l,
    isEnabled: !(l as any).isEnabled
  }), (s as any)[11] = l, (s as any)[12] = r, (s as any)[13] = y) : y = (s as any)[13];
  let j: any;
  ((s as any)[14] as any) !== (o as any) || ((s as any)[15] as any) !== (p as any) || ((s as any)[16] as any) !== (b as any) || ((s as any)[17] as any) !== (v as any) || ((s as any)[18] as any) !== (y as any) ? (j = ((a as any).jsx as any)(Le, {
    ...p,
    isChecked: o,
    isDisabled: b,
    label: v,
    onToggle: y,
    size: "md"
  }), (s as any)[14] = o, (s as any)[15] = p, (s as any)[16] = b, (s as any)[17] = v, (s as any)[18] = y, (s as any)[19] = j) : j = (s as any)[19];
  let x: any;
  ((s as any)[20] as any) !== (h as any) || ((s as any)[21] as any) !== (j as any) ? (x = ((a as any).jsx as any)(ae, {
    anchorId: "auto-review",
    description: h,
    variant: "card",
    children: j
  }), (s as any)[20] = h, (s as any)[21] = j, (s as any)[22] = x) : x = (s as any)[22];
  let g: any;
  ((s as any)[23] as any) !== (u as any) || ((s as any)[24] as any) !== (l as any) || ((s as any)[25] as any) !== (o as any) || ((s as any)[26] as any) !== (d as any) || ((s as any)[27] as any) !== (r as any) || ((s as any)[28] as any) !== ((i as any).rules as any) ? (g = o ? ((a as any).jsxs as any)("div", {
    className: "sand-9f619 sand-1n2onr6 sand-78zum5 sand-dt5ytf sand-1qqbgdy sand-h8yej3 sand-1t8xvyj sand-1n9uuka sand-usxwy5 sand-cssynl",
    children: [((a as any).jsxs as any)("div", {
      className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-137clkk",
      children: [((a as any).jsx as any)(Ee, {
        as: "h3",
        color: "primary",
        size: "md",
        children: ((a as any).jsx as any)(Q, {
          id: "LgRXPe"
        })
      }), ((a as any).jsx as any)(En, {
        children: ((a as any).jsx as any)(Q, {
          id: "NFRGrQ"
        })
      })]
    }), ((a as any).jsx as any)(Rs, {
      disabled: d,
      instructions: l,
      onChange: r,
      teamRules: (i as any).rules
    }), ((a as any).jsx as any)(Ee, {
      as: "span",
      color: "tertiary",
      size: "md",
      children: u ? ((a as any).jsx as any)(Q, {
        id: "jFU9Pu"
      }) : ((a as any).jsx as any)(Q, {
        id: "n9YiIv"
      })
    })]
  }) : null, (s as any)[23] = u, (s as any)[24] = l, (s as any)[25] = o, (s as any)[26] = d, (s as any)[27] = r, (s as any)[28] = (i as any).rules, (s as any)[29] = g) : g = (s as any)[29];
  let _: any;
  return ((s as any)[30] as any) !== (x as any) || ((s as any)[31] as any) !== (g as any) ? (_ = ((a as any).jsxs as any)("div", {
    id: f,
    children: [x, g]
  }), (s as any)[30] = x, (s as any)[31] = g, (s as any)[32] = _) : _ = (s as any)[32], _;
}
const Mn: any = {
    kVAEAm: "sand-1n2onr6",
    kZKoxP: "sand-16ye13r",
    kmuXW: "sand-2lah0s",
    $$css: !0
  },
  Bn: any = {
    kVAEAm: "sand-10l6tqk",
    k87sOh: "sand-5mnzd7",
    kLqNvP: "sand-rr41r3",
    kt4wiu: "sand-1f889gz",
    kzqmXN: "sand-14atkfc",
    kZKoxP: "sand-1gnnpzl",
    $$css: !0
  },
  $s: number = 30,
  qs: number = 2,
  Ve: any = ($s as any) + (qs as any),
  ss: number = 6,
  Fn: number = 480,
  xe: any = {
    panel: {
      kLKAdn: "sand-exx8yu",
      kwRFfy: "sand-yri2b",
      kGO01o: "sand-18d9i69",
      kZCmMZ: "sand-1c1uobl",
      kVQacm: "sand-b3r6kr",
      kWkggS: "sand-10e981r",
      kEafiO: "sand-1hc762m",
      kLZC3w: "sand-s351rv",
      ke9TFa: "sand-qm0940",
      kBCPoo: "sand-bz7umk",
      kt9PQ7: "sand-1hkp6id",
      kL6WhQ: "sand-1kp61ed",
      k2ei4v: "sand-1sd92yl",
      kGJrpR: "sand-g1r0qo",
      kaIpWk: "sand-hojbe8",
      $$css: !0
    },
    panelWidth: (s: any): any => [{
      kzqmXN: (s as any) != (null as any) ? "sand-5lhr3w" : s,
      ks0D6T: (s as any) != (null as any) ? "sand-f68679" : s,
      $$css: !0
    }, {
      "--x-width": (((e: any): any => (typeof e as any) == ("number" as any) ? (e as any) + ("px" as any) : e ?? void 0) as any)(s),
      "--x-maxWidth": (((e: any): any => (typeof e as any) == ("number" as any) ? (e as any) + ("px" as any) : e ?? void 0) as any)(s)
    }],
    searchIcon: {
      kMwMTN: "sand-169k319",
      $$css: !0
    },
    searchInput: {
      kB7OPa: "sand-9f619",
      kzQI83: "sand-1iyjqo2",
      kmuXW: "sand-s83m0k",
      kCS8Yb: "sand-dl72j9",
      k7Eaqz: "sand-euugli",
      kMzoRj: "sand-c342km",
      k3XXqK: "sand-1t137rt",
      kWkggS: "sand-jbqb8w",
      kMwMTN: "sand-tyxrsu",
      kMv6JI: "sand-jb2p0i",
      k63SB2: "sand-1k6tqyu",
      k8Qsv1: "sand-1h7ufjq",
      $$css: !0
    },
    windowList: (s: any): any => [Mn, {
      "--x-height": (((e: any): any => (typeof e as any) == ("number" as any) ? (e as any) + ("px" as any) : e ?? void 0) as any)((((ss as any) * (2 as any) as any) + ((s as any) * (Ve as any) as any) as any) - (qs as any))
    }],
    windowItem: (s: any): any => [Bn, {
      "--x-insetBlockStart": (((e: any): any => (typeof e as any) == ("number" as any) ? (e as any) + ("px" as any) : e ?? void 0) as any)((ss as any) + ((s as any) * (Ve as any) as any))
    }],
    option: {
      kB7OPa: "sand-9f619",
      k1xSpc: "sand-78zum5",
      kGNEyG: "sand-6s0dn4",
      kjj79g: "sand-1qughib",
      kOIVth: "sand-ou54vl",
      kzqmXN: "sand-h8yej3",
      kAzted: "sand-110b6j0",
      kwRFfy: "sand-f159sx",
      kZCmMZ: "sand-mzvs34",
      kMzoRj: "sand-c342km",
      kaIpWk: "sand-t9pb60",
      kMeerF: "sand-t08umf",
      k3XXqK: "sand-1t137rt sand-9v5kkp",
      kjBf7l: "sand-4sht9k",
      kInvED: "sand-1g40iwv",
      kWkggS: "sand-jbqb8w sand-aalx5g sand-1nef6xh",
      kMwMTN: "sand-tyxrsu",
      kMv6JI: "sand-jb2p0i",
      k63SB2: "sand-1k6tqyu",
      k9WMMc: "sand-1yc453h",
      kkrTdU: "sand-1ypdohk",
      $$css: !0
    },
    check: {
      kMwMTN: "sand-tyxrsu",
      $$css: !0
    },
    empty: {
      k1xSpc: "sand-78zum5",
      kGNEyG: "sand-6s0dn4",
      kjj79g: "sand-l56j7k",
      kAzted: "sand-110b6j0",
      kMwMTN: "sand-1o0liin",
      $$css: !0
    },
    emptyInset: {
      kogj98: "sand-1f8r7k0",
      $$css: !0
    }
  };
function Un(this: any, s: any, e: any): any {
  const t: any = (is as any)();
  return (((He as any)((s as any).label, t) as any).includes as any)(e) || ((s as any).searchText as any) != (null as any) && (((He as any)((s as any).searchText, t) as any).includes as any)(e);
}
function Gn(this: any, s: any): any {
  const e: any = ((T as any).c as any)(6),
    [t, l]: any = ((ee as any).useState as any)("");
  let n: any;
  if (((e as any)[0] as any) !== (s as any) || ((e as any)[1] as any) !== (t as any)) {
    const i: any = (He as any)(((t as any).trim as any)(), (is as any)());
    n = (i as any) === ("" as any) ? s : ((s as any).filter as any)((o: any): any => (Un as any)(o, i)), (e as any)[0] = s, (e as any)[1] = t, (e as any)[2] = n;
  } else n = (e as any)[2];
  const d: any = n;
  let m: any;
  return ((e as any)[3] as any) !== (t as any) || ((e as any)[4] as any) !== (d as any) ? (m = {
    query: t,
    setQuery: l,
    shownEntries: d
  }, (e as any)[3] = t, (e as any)[4] = d, (e as any)[5] = m) : m = (e as any)[5], m;
}
function Wn(this: any, {
  rowWindow: s,
  rowCount: e,
  selectedIndex: t,
  tabStopIndex: l
}: any): any {
  const n: any = new (Set as any)();
  for (let d: any = (s as any).start; (d as any) < ((s as any).end as any); d += 1) ((n as any).add as any)(d);
  for (const d of [t, (l as any) - (1 as any), l, (l as any) + (1 as any)]) (d as any) >= (0 as any) && (d as any) < (e as any) && ((n as any).add as any)(d);
  return (([...n] as any).sort as any)((d: any, m: any): any => (d as any) - (m as any));
}
function Vn(this: any, s: any): any {
  s?.scrollIntoView({
    block: "nearest"
  });
}
function Kn(this: any, s: any): any {
  if ((s as any).altKey || (s as any).ctrlKey || (s as any).metaKey || (s as any).shiftKey || ((s as any).key as any) !== ("ArrowDown" as any) && ((s as any).key as any) !== ("ArrowUp" as any) || !((s as any).target instanceof HTMLElement)) return;
  const e: any = [...(((s as any).currentTarget as any).querySelectorAll as any)('[role="option"]')],
    t: any = ((e as any).indexOf as any)((s as any).target);
  if ((t as any) < (0 as any)) return;
  ((s as any).preventDefault as any)();
  const l: any = (e as any)[(Rt as any)(t, (e as any).length, ((s as any).key as any) === ("ArrowDown" as any) ? 1 : -1)];
  l?.focus({
    preventScroll: !0
  }), l?.scrollIntoView({
    block: "nearest"
  });
}
function Os(this: any, s: any): any {
  (Os as any).d = 1304;
  const e: any = ((T as any).c as any)(15),
    {
      searchPlaceholder: t,
      searchInputRef: l,
      query: n,
      onQueryChange: d,
      closeLabel: m
    }: any = s;
  let i: any, o: any, u: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (i = {
    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-167g77z sand-n3w4p2 sand-1pic42t sand-1onr9mi sand-1hkp6id sand-1q0q8m5 sand-13u5rpf"
  }, o = ((a as any).jsx as any)(Ce, {
    name: "search",
    size: "sm",
    style: (xe as any).searchIcon
  }), u = (ye as any)((re as any).body1, (xe as any).searchInput), (e as any)[0] = i, (e as any)[1] = o, (e as any)[2] = u) : (i = (e as any)[0], o = (e as any)[1], u = (e as any)[2]);
  let c: any;
  ((e as any)[3] as any) !== (d as any) ? (c = (p: any): any => (d as any)(((p as any).currentTarget as any).value), (e as any)[3] = d, (e as any)[4] = c) : c = (e as any)[4];
  let r: any;
  ((e as any)[5] as any) !== (n as any) || ((e as any)[6] as any) !== (l as any) || ((e as any)[7] as any) !== (t as any) || ((e as any)[8] as any) !== (c as any) ? (r = ((a as any).jsx as any)("input", {
    ...u,
    "aria-label": t,
    onChange: c,
    placeholder: t,
    ref: l,
    spellCheck: !1,
    type: "text",
    value: n
  }), (e as any)[5] = n, (e as any)[6] = l, (e as any)[7] = t, (e as any)[8] = c, (e as any)[9] = r) : r = (e as any)[9];
  let f: any;
  ((e as any)[10] as any) !== (m as any) ? (f = (m as any) != (null as any) ? ((a as any).jsx as any)((Be as any).Close, {
    render: ((a as any).jsx as any)("button", {
      className: "sand-9f619 sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-vy4d1p sand-xk0z11 sand-exx8yu sand-yri2b sand-18d9i69 sand-1c1uobl sand-c342km sand-1qmwy7c sand-t08umf sand-1t137rt sand-9v5kkp sand-4sht9k sand-1g40iwv sand-jbqb8w sand-aalx5g sand-1nef6xh sand-169k319 sand-1ypdohk",
      "aria-label": m,
      type: "button"
    }),
    children: ((a as any).jsx as any)(Ce, {
      name: "close",
      size: "sm"
    })
  }) : null, (e as any)[10] = m, (e as any)[11] = f) : f = (e as any)[11];
  let h: any;
  return ((e as any)[12] as any) !== (r as any) || ((e as any)[13] as any) !== (f as any) ? (h = ((a as any).jsxs as any)("div", {
    ...i,
    children: [o, r, f]
  }), (e as any)[12] = r, (e as any)[13] = f, (e as any)[14] = h) : h = (e as any)[14], h;
}
function Ms(this: any, s: any): any {
  (Ms as any).d = 1303;
  const e: any = ((T as any).c as any)(5),
    {
      windowRows: t
    }: any = s;
  let l: any;
  ((e as any)[0] as any) !== (t as any) ? (l = (ye as any)((re as any).body2, (xe as any).empty, t && (xe as any).emptyInset), (e as any)[0] = t, (e as any)[1] = l) : l = (e as any)[1];
  let n: any;
  ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = ((a as any).jsx as any)(Q, {
    id: "Ev2r9A"
  }), (e as any)[2] = n) : n = (e as any)[2];
  let d: any;
  return ((e as any)[3] as any) !== (l as any) ? (d = ((a as any).jsx as any)("div", {
    ...l,
    role: "status",
    children: n
  }), (e as any)[3] = l, (e as any)[4] = d) : d = (e as any)[4], d;
}
function ds(this: any, s: any): any {
  (ds as any).d = 1305;
  const e: any = ((T as any).c as any)(75),
    {
      entries: t,
      value: l,
      onValueChange: n,
      disabled: d,
      label: m,
      searchPlaceholder: i,
      closeLabel: o,
      panelWidth: u,
      onOpenChange: c,
      renderMeta: r,
      windowRows: f
    }: any = s,
    h: any = (u as any) === (void 0 as any) ? 320 : u,
    p: any = (f as any) === (void 0 as any) ? !1 : f,
    [b, v]: any = ((ee as any).useState as any)(!1),
    [y, j]: any = ((ee as any).useState as any)(0),
    [x, g]: any = ((ee as any).useState as any)(null),
    [_, w]: any = ((ee as any).useState as any)(null),
    k: any = ((ee as any).useRef as any)(null),
    {
      query: N,
      setQuery: A,
      shownEntries: I
    }: any = (Gn as any)(t),
    C: any = ((ee as any).useRef as any)(null);
  let Z: any;
  ((e as any)[0] as any) !== (t as any) || ((e as any)[1] as any) !== (l as any) ? (Z = ((t as any).find as any)((S: any): any => ((S as any).value as any) === (l as any))?.label ?? l, (e as any)[0] = t, (e as any)[1] = l, (e as any)[2] = Z) : Z = (e as any)[2];
  const P: any = Z;
  let q: any;
  ((e as any)[3] as any) !== (_ as any) || ((e as any)[4] as any) !== (I as any) ? (q = ((I as any).some as any)((S: any): any => ((S as any).value as any) === (_ as any)) ? _ : (I as any)[0]?.value, (e as any)[3] = _, (e as any)[4] = I, (e as any)[5] = q) : q = (e as any)[5];
  const z: any = q;
  let W: any;
  ((e as any)[6] as any) !== (l as any) ? (W = (S: any): any => ((S as any).value as any) === (l as any), (e as any)[6] = l, (e as any)[7] = W) : W = (e as any)[7];
  const O: any = ((I as any).findIndex as any)(W),
    R: any = p ? x : null,
    K: any = p && b && (O as any) >= (0 as any) ? {
      kind: "row",
      key: `${y}:${l}`,
      rowTopPx: (O as any) * (Ve as any),
      heightPx: $s
    } : null;
  let Y: any;
  ((e as any)[8] as any) !== ((I as any).length as any) || ((e as any)[9] as any) !== (R as any) || ((e as any)[10] as any) !== (K as any) ? (Y = {
    scrollEl: R,
    rowCount: (I as any).length,
    rowPitchPx: Ve,
    leadingOffsetPx: ss,
    initialViewportPx: Fn,
    reveal: K
  }, (e as any)[8] = (I as any).length, (e as any)[9] = R, (e as any)[10] = K, (e as any)[11] = Y) : Y = (e as any)[11];
  const M: any = (Pt as any)(Y);
  let ue: any;
  ((e as any)[12] as any) !== (z as any) ? (ue = (S: any): any => ((S as any).value as any) === (z as any), (e as any)[12] = z, (e as any)[13] = ue) : ue = (e as any)[13];
  const be: any = (Wn as any)({
    rowWindow: M,
    rowCount: (I as any).length,
    selectedIndex: O,
    tabStopIndex: ((I as any).findIndex as any)(ue)
  });
  let me: any;
  ((e as any)[14] as any) !== (c as any) || ((e as any)[15] as any) !== (A as any) ? (me = (S: any): any => {
    (v as any)(S), S && (j as any)(Hn), S || ((A as any)(""), (w as any)(null)), c?.(S);
  }, (e as any)[14] = c, (e as any)[15] = A, (e as any)[16] = me) : me = (e as any)[16];
  const B: any = me;
  let se: any;
  ((e as any)[17] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (se = (S: any): any => {
    (k as any).current = S, (g as any)(S);
  }, (e as any)[17] = se) : se = (e as any)[17];
  const H: any = se;
  let J: any;
  ((e as any)[18] as any) !== (A as any) ? (J = (S: any): any => {
    (A as any)(S);
    const $: any = (k as any).current;
    ($ as any) != (null as any) && (($ as any).scrollTop = 0, (($ as any).dispatchEvent as any)(new (Event as any)("scroll")));
  }, (e as any)[18] = A, (e as any)[19] = J) : J = (e as any)[19];
  const le: any = J;
  let F: any;
  ((e as any)[20] as any) !== (B as any) || ((e as any)[21] as any) !== (n as any) ? (F = (S: any): any => {
    (n as any)(S), (B as any)(!1);
  }, (e as any)[20] = B, (e as any)[21] = n, (e as any)[22] = F) : F = (e as any)[22];
  const V: any = F;
  let E: any;
  if (((I as any).length as any) === (0 as any)) {
    let S: any;
    ((e as any)[23] as any) !== (p as any) ? (S = ((a as any).jsx as any)(Ms, {
      windowRows: p
    }), (e as any)[23] = p, (e as any)[24] = S) : S = (e as any)[24], E = S;
  } else if (p) {
    let S: any;
    ((e as any)[25] as any) !== ((I as any).length as any) ? (S = (ye as any)(((xe as any).windowList as any)((I as any).length)), (e as any)[25] = (I as any).length, (e as any)[26] = S) : S = (e as any)[26];
    let $: any;
    ((e as any)[27] as any) !== (r as any) || ((e as any)[28] as any) !== (V as any) || ((e as any)[29] as any) !== (I as any) || ((e as any)[30] as any) !== (z as any) || ((e as any)[31] as any) !== (l as any) ? ($ = (oe: any): any => {
      const ne: any = (I as any)[oe];
      if ((ne as any) == (null as any)) return null;
      const ge: any = ((ne as any).value as any) === (l as any);
      return ((ee as any).createElement as any)("button", {
        ...(ye as any)((re as any).body2, (xe as any).option, ((xe as any).windowItem as any)(oe)),
        "aria-label": (ne as any).label,
        "aria-posinset": (oe as any) + (1 as any),
        "aria-selected": ge,
        "aria-setsize": (I as any).length,
        key: (ne as any).value,
        onClick: (): any => (V as any)((ne as any).value),
        onFocus: (): any => (w as any)((ne as any).value),
        role: "option",
        tabIndex: ((ne as any).value as any) === (z as any) ? 0 : -1,
        type: "button"
      }, ((a as any).jsx as any)("span", {
        className: "sand-euugli sand-b3r6kr sand-lyipyv sand-uxw1ft",
        children: (ne as any).label
      }), ((a as any).jsxs as any)("span", {
        className: "sand-3nfvp2 sand-6s0dn4 sand-13a6bvl sand-2lah0s sand-167g77z sand-16xo4sp sand-1o0liin sand-uxw1ft",
        children: [(r as any) != (null as any) ? (r as any)(ne) : (ne as any).meta, ge ? ((a as any).jsx as any)(Ce, {
          name: "check",
          size: "sm",
          style: (xe as any).check
        }) : null]
      }));
    }, (e as any)[27] = r, (e as any)[28] = V, (e as any)[29] = I, (e as any)[30] = z, (e as any)[31] = l, (e as any)[32] = $) : $ = (e as any)[32], E = ((a as any).jsx as any)("div", {
      ...S,
      children: ((be as any).map as any)($)
    });
  } else {
    let S: any;
    if (((e as any)[33] as any) !== (V as any) || ((e as any)[34] as any) !== (I as any) || ((e as any)[35] as any) !== (z as any) || ((e as any)[36] as any) !== (l as any)) {
      let $: any;
      ((e as any)[38] as any) !== (V as any) || ((e as any)[39] as any) !== (z as any) || ((e as any)[40] as any) !== (l as any) ? ($ = (oe: any): any => {
        const ne: any = ((oe as any).value as any) === (l as any);
        return ((ee as any).createElement as any)("button", {
          ...(ye as any)((re as any).body2, (xe as any).option),
          "aria-label": (oe as any).label,
          "aria-selected": ne,
          key: (oe as any).value,
          onClick: (): any => (V as any)((oe as any).value),
          onFocus: (): any => (w as any)((oe as any).value),
          ref: ne ? Vn : void 0,
          role: "option",
          tabIndex: ((oe as any).value as any) === (z as any) ? 0 : -1,
          type: "button"
        }, ((a as any).jsx as any)("span", {
          className: "sand-euugli sand-b3r6kr sand-lyipyv sand-uxw1ft",
          children: (oe as any).label
        }), ((a as any).jsxs as any)("span", {
          className: "sand-3nfvp2 sand-6s0dn4 sand-13a6bvl sand-2lah0s sand-167g77z sand-16xo4sp sand-1o0liin sand-uxw1ft",
          children: [(oe as any).meta, ne ? ((a as any).jsx as any)(Ce, {
            name: "check",
            size: "sm",
            style: (xe as any).check
          }) : null]
        }));
      }, (e as any)[38] = V, (e as any)[39] = z, (e as any)[40] = l, (e as any)[41] = $) : $ = (e as any)[41], S = ((I as any).map as any)($), (e as any)[33] = V, (e as any)[34] = I, (e as any)[35] = z, (e as any)[36] = l, (e as any)[37] = S;
    } else S = (e as any)[37];
    E = S;
  }
  const X: any = `${m}, ${P}`;
  let D: any;
  ((e as any)[42] as any) !== (d as any) || ((e as any)[43] as any) !== (P as any) || ((e as any)[44] as any) !== (X as any) ? (D = ((a as any).jsx as any)(ct, {
    "aria-label": X,
    disabled: d,
    size: "lg",
    title: P,
    variant: "ghost"
  }), (e as any)[42] = d, (e as any)[43] = P, (e as any)[44] = X, (e as any)[45] = D) : D = (e as any)[45];
  let ie: any;
  ((e as any)[46] as any) !== (P as any) || ((e as any)[47] as any) !== (D as any) ? (ie = ((a as any).jsx as any)((Be as any).Trigger, {
    render: D,
    children: P
  }), (e as any)[46] = P, (e as any)[47] = D, (e as any)[48] = ie) : ie = (e as any)[48];
  let G: any;
  ((e as any)[49] as any) !== (h as any) ? (G = ((xe as any).panelWidth as any)(h), (e as any)[49] = h, (e as any)[50] = G) : G = (e as any)[50];
  let te: any;
  ((e as any)[51] as any) !== (G as any) ? (te = [(xe as any).panel, G], (e as any)[51] = G, (e as any)[52] = te) : te = (e as any)[52];
  let de: any;
  ((e as any)[53] as any) !== (o as any) || ((e as any)[54] as any) !== (le as any) || ((e as any)[55] as any) !== (N as any) || ((e as any)[56] as any) !== (i as any) ? (de = ((a as any).jsx as any)(Os, {
    closeLabel: o,
    onQueryChange: le,
    query: N,
    searchInputRef: C,
    searchPlaceholder: i
  }), (e as any)[53] = o, (e as any)[54] = le, (e as any)[55] = N, (e as any)[56] = i, (e as any)[57] = de) : de = (e as any)[57];
  let L: any;
  ((e as any)[58] as any) !== (p as any) ? (L = ({
    0: {
      className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-195vfkc sand-e91c59 sand-1yrsyyn sand-1icxu4v sand-10b6aqq sand-25sj25 sand-1odjw0f"
    },
    1: {
      className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-195vfkc sand-e91c59 sand-1odjw0f sand-exx8yu sand-yri2b sand-18d9i69 sand-1c1uobl"
    }
  } as any)[(!!p as any) << (0 as any)], (e as any)[58] = p, (e as any)[59] = L) : L = (e as any)[59];
  const he: any = p ? H : void 0;
  let pe: any;
  ((e as any)[60] as any) !== (m as any) || ((e as any)[61] as any) !== (E as any) || ((e as any)[62] as any) !== (L as any) || ((e as any)[63] as any) !== (he as any) ? (pe = ((a as any).jsx as any)("div", {
    ...L,
    "aria-label": m,
    onKeyDown: Kn,
    ref: he,
    role: "listbox",
    children: E
  }), (e as any)[60] = m, (e as any)[61] = E, (e as any)[62] = L, (e as any)[63] = he, (e as any)[64] = pe) : pe = (e as any)[64];
  let ve: any;
  ((e as any)[65] as any) !== (m as any) || ((e as any)[66] as any) !== (te as any) || ((e as any)[67] as any) !== (de as any) || ((e as any)[68] as any) !== (pe as any) ? (ve = ((a as any).jsxs as any)((Be as any).Popup, {
    "aria-label": m,
    initialFocus: C,
    offset: 4,
    placement: "bottom-end",
    surfaceStyle: te,
    children: [de, pe]
  }), (e as any)[65] = m, (e as any)[66] = te, (e as any)[67] = de, (e as any)[68] = pe, (e as any)[69] = ve) : ve = (e as any)[69];
  let ke: any;
  return ((e as any)[70] as any) !== (B as any) || ((e as any)[71] as any) !== (b as any) || ((e as any)[72] as any) !== (ie as any) || ((e as any)[73] as any) !== (ve as any) ? (ke = ((a as any).jsxs as any)((Be as any).Root, {
    modal: "trap-focus",
    onOpenChange: B,
    open: b,
    children: [ie, ve]
  }), (e as any)[70] = B, (e as any)[71] = b, (e as any)[72] = ie, (e as any)[73] = ve, (e as any)[74] = ke) : ke = (e as any)[74], ke;
}
function Hn(this: any, s: any): any {
  return (s as any) + (1 as any);
}
const Me: string = "auto",
  Xn: number = 424;
function ts(this: any, s: any): any {
  return ((s as any).replaceAll as any)("_", " ");
}
function Bs(this: any, s: any): any {
  return `${((((s as any).toLowerCase as any)() as any).replaceAll as any)("_", " ")} ${s}`;
}
const Qn: any = (_s as any)((): any => new (Map as any)());
function Zn(this: any, s: any, e: any): any {
  try {
    return new ((Intl as any).DateTimeFormat as any)(s, {
      timeStyle: "short",
      timeZone: e
    });
  } catch {
    return null;
  }
}
function Yn(this: any, s: any): any {
  const e: any = (Qn as any)();
  return ((e as any).has as any)(s) || ((e as any).set as any)(s, (Zn as any)((is as any)(), s)), ((e as any).get as any)(s) ?? null;
}
function Jn(this: any, s: any, e: any): any {
  if ((s as any) === (null as any) || (e as any) === (null as any)) return;
  const t: any = (Yn as any)(s)?.format(e);
  return (t as any) === (void 0 as any) ? void 0 : ((a as any).jsx as any)(Ee, {
    as: "span",
    color: "tertiary",
    size: "inherit",
    children: t
  });
}
function ea(this: any): any {
  try {
    return ((Intl as any).supportedValuesOf as any)("timeZone");
  } catch {
    return [];
  }
}
function Fs(this: any): any {
  (Fs as any).d = 1241;
  const s: any = ((T as any).c as any)(21),
    {
      _: e
    }: any = (U as any)(),
    t: any = ($e as any)();
  (_e as any)(((t as any).timeZone as any).load);
  const {
      detectedTimeZone: l,
      overrideTimeZone: n
    }: any = ($t as any)(),
    {
      setOverride: d,
      isPending: m,
      failure: i
    }: any = (qt as any)(),
    o: any = (ea as any)(),
    [u, c]: any = ((ee as any).useState as any)(null);
  let r: any;
  ((s as any)[0] as any) !== (d as any) ? (r = (N: any): any => {
    (d as any)((N as any) === (Me as any) ? null : N);
  }, (s as any)[0] = d, (s as any)[1] = r) : r = (s as any)[1];
  const f: any = r;
  let h: any;
  ((s as any)[2] as any) !== (e as any) || ((s as any)[3] as any) !== (l as any) ? (h = (l as any) != (null as any) ? (e as any)({
    id: "SprHbY",
    values: {
      0: (ts as any)(l)
    }
  }) : (e as any)({
    id: "pEb1UY"
  }), (s as any)[2] = e, (s as any)[3] = l, (s as any)[4] = h) : h = (s as any)[4];
  const p: any = h;
  let b: any;
  ((s as any)[5] as any) !== (p as any) ? (b = {
    value: Me,
    label: p
  }, (s as any)[5] = p, (s as any)[6] = b) : b = (s as any)[6];
  const v: any = [b, ...((n as any) != (null as any) && !((o as any).includes as any)(n) ? [{
    value: n,
    label: (ts as any)(n),
    searchText: (Bs as any)(n)
  }] : []), ...((o as any).map as any)(sa)];
  let y: any;
  ((s as any)[7] as any) !== (l as any) || ((s as any)[8] as any) !== (u as any) ? (y = (N: any): any => (Jn as any)(((N as any).value as any) === (Me as any) ? l : (N as any).value, u), (s as any)[7] = l, (s as any)[8] = u, (s as any)[9] = y) : y = (s as any)[9];
  const j: any = y;
  let x: any;
  ((s as any)[10] as any) !== (e as any) || ((s as any)[11] as any) !== (i as any) ? (x = (i as any) != (null as any) ? (e as any)({
    id: "QqKsGg"
  }) : void 0, (s as any)[10] = e, (s as any)[11] = i, (s as any)[12] = x) : x = (s as any)[12];
  let g: any;
  ((s as any)[13] as any) !== (e as any) ? (g = (e as any)({
    id: "OVO7HN"
  }), (s as any)[13] = e, (s as any)[14] = g) : g = (s as any)[14];
  let _: any;
  ((s as any)[15] as any) !== (c as any) ? (_ = (N: any): any => {
    N && (c as any)(new (Date as any)());
  }, (s as any)[15] = c, (s as any)[16] = _) : _ = (s as any)[16];
  let w: any;
  ((s as any)[17] as any) !== (e as any) ? (w = (e as any)({
    id: "40Gx0U"
  }), (s as any)[17] = e, (s as any)[18] = w) : w = (s as any)[18];
  let k: any;
  return ((s as any)[19] as any) !== (e as any) ? (k = (e as any)({
    id: "prDuBY"
  }), (s as any)[19] = e, (s as any)[20] = k) : k = (s as any)[20], ((a as any).jsx as any)(ae, {
    anchorId: "timezone",
    description: x,
    variant: "card",
    children: ((a as any).jsx as any)(ds, {
      closeLabel: g,
      disabled: m,
      onOpenChange: _,
      entries: v,
      label: w,
      renderMeta: j,
      windowRows: !0,
      onValueChange: f,
      panelWidth: Xn,
      searchPlaceholder: k,
      value: n ?? Me
    })
  });
}
function sa(this: any, s: any): any {
  return {
    value: s,
    label: (ts as any)(s),
    searchText: (Bs as any)(s)
  };
}
function Us(this: any): any {
  (Us as any).d = 1240;
  const s: any = ((T as any).c as any)(9),
    {
      _: e
    }: any = (U as any)(),
    t: any = (Ns as any)((Lt as any)()),
    l: any = je;
  let n: any;
  ((s as any)[0] as any) !== (e as any) ? (n = (e as any)({
    id: "ixkTse"
  }), (s as any)[0] = e, (s as any)[1] = n) : n = (s as any)[1];
  let d: any;
  ((s as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = ((a as any).jsx as any)(Fs, {}), (s as any)[2] = d) : d = (s as any)[2];
  const m: any = ((Dt as any)("local-execution", t) as any) === ("general" as any) ? ((a as any).jsx as any)(An, {}) : null;
  let i: any;
  ((s as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (i = ((a as any).jsx as any)(Ls, {}), (s as any)[3] = i) : i = (s as any)[3];
  let o: any;
  return ((s as any)[4] as any) !== (l as any) || ((s as any)[5] as any) !== (n as any) || ((s as any)[6] as any) !== (d as any) || ((s as any)[7] as any) !== (m as any) ? (o = ((a as any).jsxs as any)(l, {
    title: n,
    children: [d, m, i]
  }), (s as any)[4] = l, (s as any)[5] = n, (s as any)[6] = d, (s as any)[7] = m, (s as any)[8] = o) : o = (s as any)[8], o;
}
const ta: any = {
    "zh-CN": "zh-Hans",
    "zh-TW": "zh-Hant"
  },
  na: any = (_s as any)((s: any): any => {
    const e: any = new ((Intl as any).DisplayNames as any)(s, {
        type: "language",
        fallback: "none"
      }),
      t: any = new ((Intl as any).Collator as any)(s);
    return ((((((Bt as any).map as any)((l: any): any => ({
      row: l,
      name: ((e as any).of as any)((ta as any)[(l as any).tag] ?? (l as any).tag) ?? (l as any).englishName
    })) as any).toSorted as any)((l: any, n: any): any => ((t as any).compare as any)((l as any).name, (n as any).name)) as any).map as any)(({
      row: l,
      name: n
    }: any): any => ({
      value: (l as any).tag,
      label: (l as any).endonym,
      searchText: (n as any) === ((l as any).englishName as any) ? n : `${n} ${(l as any).englishName}`,
      meta: n
    }));
  });
function Gs(this: any, s: any): any {
  (Gs as any).d = 1285;
  const e: any = ((T as any).c as any)(18),
    {
      disabled: t,
      preference: l,
      onPreferenceChange: n
    }: any = s,
    {
      _: d
    }: any = (U as any)();
  let m: any;
  ((e as any)[0] as any) !== (d as any) ? (m = (d as any)({
    id: "Ea4oxV"
  }), (e as any)[0] = d, (e as any)[1] = m) : m = (e as any)[1];
  let i: any;
  ((e as any)[2] as any) !== (m as any) ? (i = [{
    value: (Mt as any)[0],
    label: m,
    searchText: Ot,
    meta: null
  }, ...(na as any)()], (e as any)[2] = m, (e as any)[3] = i) : i = (e as any)[3];
  const o: any = i;
  let u: any;
  ((e as any)[4] as any) !== (d as any) ? (u = (d as any)({
    id: "RoIbhu"
  }), (e as any)[4] = d, (e as any)[5] = u) : u = (e as any)[5];
  let c: any;
  ((e as any)[6] as any) !== (d as any) ? (c = (d as any)({
    id: "vXIe7J"
  }), (e as any)[6] = d, (e as any)[7] = c) : c = (e as any)[7];
  let r: any;
  ((e as any)[8] as any) !== (d as any) ? (r = (d as any)({
    id: "RNnopd"
  }), (e as any)[8] = d, (e as any)[9] = r) : r = (e as any)[9];
  let f: any;
  return ((e as any)[10] as any) !== (t as any) || ((e as any)[11] as any) !== (o as any) || ((e as any)[12] as any) !== (n as any) || ((e as any)[13] as any) !== (l as any) || ((e as any)[14] as any) !== (u as any) || ((e as any)[15] as any) !== (c as any) || ((e as any)[16] as any) !== (r as any) ? (f = ((a as any).jsx as any)(ds, {
    closeLabel: u,
    disabled: t,
    entries: o,
    label: c,
    onValueChange: n,
    searchPlaceholder: r,
    value: l
  }), (e as any)[10] = t, (e as any)[11] = o, (e as any)[12] = n, (e as any)[13] = l, (e as any)[14] = u, (e as any)[15] = c, (e as any)[16] = r, (e as any)[17] = f) : f = (e as any)[17], f;
}
const aa: any = {
    system: {
      id: "Ea4oxV"
    },
    light: {
      id: "1njn7W"
    },
    dark: {
      id: "pvnfJD"
    }
  },
  la: any = {
    black: {
      id: "THokF3"
    },
    "bot-color": {
      id: "p7v5PZ"
    }
  };
function Ws(this: any): any {
  (Ws as any).d = 1283;
  const s: any = ((T as any).c as any)(26),
    {
      i18n: e,
      _: t
    }: any = (U as any)(),
    l: any = ($e as any)();
  (_e as any)(((l as any).spellCheck as any).load);
  const {
      state: n,
      reload: d
    }: any = (Yt as any)(),
    {
      setEnabled: m,
      isPending: i,
      failure: o
    }: any = (Jt as any)();
  if (((n as any).status as any) === ("unavailable" as any)) return null;
  let u: any;
  ((s as any)[0] as any) !== (n as any) ? (u = (en as any)(n), (s as any)[0] = n, (s as any)[1] = u) : u = (s as any)[1];
  const c: any = u;
  if (((n as any).status as any) === ("failed" as any) && (c as any) == (null as any)) {
    let j: any;
    ((s as any)[2] as any) !== (t as any) ? (j = (t as any)({
      id: "mmzR7e"
    }), (s as any)[2] = t, (s as any)[3] = j) : j = (s as any)[3];
    let x: any;
    ((s as any)[4] as any) !== (d as any) ? (x = (): any => (d as any)(), (s as any)[4] = d, (s as any)[5] = x) : x = (s as any)[5];
    let g: any;
    ((s as any)[6] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (g = ((a as any).jsx as any)(Q, {
      id: "6gRgw8"
    }), (s as any)[6] = g) : g = (s as any)[6];
    let _: any;
    ((s as any)[7] as any) !== (x as any) ? (_ = ((a as any).jsx as any)(fe, {
      onClick: x,
      size: "md",
      style: (re as any).body2,
      type: "button",
      variant: "secondary",
      children: g
    }), (s as any)[7] = x, (s as any)[8] = _) : _ = (s as any)[8];
    let w: any;
    return ((s as any)[9] as any) !== (j as any) || ((s as any)[10] as any) !== (_ as any) ? (w = ((a as any).jsx as any)(ae, {
      anchorId: "spell-check",
      description: j,
      variant: "card",
      children: _
    }), (s as any)[9] = j, (s as any)[10] = _, (s as any)[11] = w) : w = (s as any)[11], w;
  }
  let r: any;
  ((s as any)[12] as any) !== (t as any) || ((s as any)[13] as any) !== (o as any) || ((s as any)[14] as any) !== ((n as any).status as any) ? (r = (o as any) != (null as any) || ((n as any).status as any) === ("failed" as any) ? (t as any)({
    id: "QqKsGg"
  }) : void 0, (s as any)[12] = t, (s as any)[13] = o, (s as any)[14] = (n as any).status, (s as any)[15] = r) : r = (s as any)[15];
  const f: any = r,
    h: any = c ?? sn,
    p: any = (c as any) == (null as any) || i;
  let b: any;
  ((s as any)[16] as any) !== (e as any) ? (b = ((e as any)._ as any)(((Xe as any)["spell-check"] as any).label), (s as any)[16] = e, (s as any)[17] = b) : b = (s as any)[17];
  let v: any;
  ((s as any)[18] as any) !== (m as any) || ((s as any)[19] as any) !== (h as any) || ((s as any)[20] as any) !== (p as any) || ((s as any)[21] as any) !== (b as any) ? (v = ((a as any).jsx as any)(Le, {
    isChecked: h,
    isDisabled: p,
    label: b,
    onToggle: m,
    size: "md"
  }), (s as any)[18] = m, (s as any)[19] = h, (s as any)[20] = p, (s as any)[21] = b, (s as any)[22] = v) : v = (s as any)[22];
  let y: any;
  return ((s as any)[23] as any) !== (f as any) || ((s as any)[24] as any) !== (v as any) ? (y = ((a as any).jsx as any)(ae, {
    anchorId: "spell-check",
    description: f,
    variant: "card",
    children: v
  }), (s as any)[23] = f, (s as any)[24] = v, (s as any)[25] = y) : y = (s as any)[25], y;
}
function Vs(this: any): any {
  (Vs as any).d = 1282;
  const s: any = ((T as any).c as any)(50),
    {
      i18n: e,
      _: t
    }: any = (U as any)(),
    {
      preference: l
    }: any = (Ft as any)(),
    {
      setPreference: n,
      isPending: d,
      failure: m
    }: any = (Ut as any)(),
    {
      preference: i
    }: any = (Gt as any)(),
    {
      setPreference: o,
      isPending: u,
      failure: c
    }: any = (Wt as any)(),
    r: any = (ze as any)("sand_enable_accent_theming"),
    f: any = (ze as any)("grok_bot_all_bots_color_theming"),
    h: any = (Vt as any)({
      preference: (Kt as any)(),
      isDefaultOn: f
    }),
    {
      setEnabled: p,
      isPending: b,
      failure: v
    }: any = (Ht as any)();
  let y: any;
  ((s as any)[0] as any) !== (e as any) ? (y = ((e as any)._ as any)(((Xe as any).theme as any).label), (s as any)[0] = e, (s as any)[1] = y) : y = (s as any)[1];
  const j: any = y;
  let x: any;
  ((s as any)[2] as any) !== (e as any) ? (x = ((e as any)._ as any)(((Xe as any).accent as any).label), (s as any)[2] = e, (s as any)[3] = x) : x = (s as any)[3];
  const g: any = x;
  let _: any;
  ((s as any)[4] as any) !== (e as any) ? (_ = ((Xt as any).map as any)((M: any): any => ({
    value: M,
    label: ((e as any)._ as any)((aa as any)[M])
  })), (s as any)[4] = e, (s as any)[5] = _) : _ = (s as any)[5];
  const w: any = _;
  let k: any;
  ((s as any)[6] as any) !== (e as any) ? (k = ((Qt as any).map as any)((M: any): any => ({
    value: M,
    label: ((e as any)._ as any)((la as any)[M])
  })), (s as any)[6] = e, (s as any)[7] = k) : k = (s as any)[7];
  const N: any = k,
    A: any = (Zt as any)(h);
  let I: any;
  ((s as any)[8] as any) !== (t as any) ? (I = (t as any)({
    id: "aAIQg2"
  }), (s as any)[8] = t, (s as any)[9] = I) : I = (s as any)[9];
  let C: any;
  ((s as any)[10] as any) !== (t as any) || ((s as any)[11] as any) !== (m as any) ? (C = (m as any) != (null as any) ? (t as any)({
    id: "QqKsGg"
  }) : void 0, (s as any)[10] = t, (s as any)[11] = m, (s as any)[12] = C) : C = (s as any)[12];
  let Z: any;
  ((s as any)[13] as any) !== (n as any) ? (Z = (M: any): any => {
    (M as any) !== (null as any) && (n as any)(M);
  }, (s as any)[13] = n, (s as any)[14] = Z) : Z = (s as any)[14];
  let P: any;
  ((s as any)[15] as any) !== (d as any) || ((s as any)[16] as any) !== (Z as any) || ((s as any)[17] as any) !== (j as any) || ((s as any)[18] as any) !== (w as any) || ((s as any)[19] as any) !== (l as any) ? (P = ((a as any).jsx as any)(Te, {
    "aria-label": j,
    disabled: d,
    onValueChange: Z,
    options: w,
    placement: "bottom-end",
    size: "lg",
    value: l,
    variant: "ghost"
  }), (s as any)[15] = d, (s as any)[16] = Z, (s as any)[17] = j, (s as any)[18] = w, (s as any)[19] = l, (s as any)[20] = P) : P = (s as any)[20];
  let q: any;
  ((s as any)[21] as any) !== (C as any) || ((s as any)[22] as any) !== (P as any) ? (q = ((a as any).jsx as any)(ae, {
    anchorId: "theme",
    description: C,
    variant: "card",
    children: P
  }), (s as any)[21] = C, (s as any)[22] = P, (s as any)[23] = q) : q = (s as any)[23];
  let z: any;
  ((s as any)[24] as any) !== (t as any) || ((s as any)[25] as any) !== (g as any) || ((s as any)[26] as any) !== (N as any) || ((s as any)[27] as any) !== (A as any) || ((s as any)[28] as any) !== (v as any) || ((s as any)[29] as any) !== (r as any) || ((s as any)[30] as any) !== (f as any) || ((s as any)[31] as any) !== (b as any) || ((s as any)[32] as any) !== (p as any) ? (z = r || f ? ((a as any).jsx as any)(ae, {
    anchorId: "accent",
    description: (v as any) != (null as any) ? (t as any)({
      id: "QqKsGg"
    }) : void 0,
    variant: "card",
    children: ((a as any).jsx as any)(Te, {
      "aria-label": g,
      disabled: b,
      onValueChange: (M: any): any => {
        (M as any) !== (null as any) && (p as any)((M as any) === ("bot-color" as any));
      },
      options: N,
      placement: "bottom-end",
      size: "lg",
      value: A,
      variant: "ghost"
    })
  }) : null, (s as any)[24] = t, (s as any)[25] = g, (s as any)[26] = N, (s as any)[27] = A, (s as any)[28] = v, (s as any)[29] = r, (s as any)[30] = f, (s as any)[31] = b, (s as any)[32] = p, (s as any)[33] = z) : z = (s as any)[33];
  let W: any;
  ((s as any)[34] as any) !== (t as any) || ((s as any)[35] as any) !== (c as any) ? (W = (c as any) != (null as any) ? (t as any)({
    id: "QqKsGg"
  }) : void 0, (s as any)[34] = t, (s as any)[35] = c, (s as any)[36] = W) : W = (s as any)[36];
  let O: any;
  ((s as any)[37] as any) !== (u as any) || ((s as any)[38] as any) !== (i as any) || ((s as any)[39] as any) !== (o as any) ? (O = ((a as any).jsx as any)(Gs, {
    disabled: u,
    onPreferenceChange: o,
    preference: i
  }), (s as any)[37] = u, (s as any)[38] = i, (s as any)[39] = o, (s as any)[40] = O) : O = (s as any)[40];
  let R: any;
  ((s as any)[41] as any) !== (W as any) || ((s as any)[42] as any) !== (O as any) ? (R = ((a as any).jsx as any)(ae, {
    anchorId: "language",
    description: W,
    variant: "card",
    children: O
  }), (s as any)[41] = W, (s as any)[42] = O, (s as any)[43] = R) : R = (s as any)[43];
  let K: any;
  ((s as any)[44] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (K = ((a as any).jsx as any)(Ws, {}), (s as any)[44] = K) : K = (s as any)[44];
  let Y: any;
  return ((s as any)[45] as any) !== (R as any) || ((s as any)[46] as any) !== (I as any) || ((s as any)[47] as any) !== (q as any) || ((s as any)[48] as any) !== (z as any) ? (Y = ((a as any).jsxs as any)(je, {
    title: I,
    children: [q, z, R, K]
  }), (s as any)[45] = R, (s as any)[46] = I, (s as any)[47] = q, (s as any)[48] = z, (s as any)[49] = Y) : Y = (s as any)[49], Y;
}
function Ks(this: any): any {
  (Ks as any).d = 1295;
  const s: any = ((T as any).c as any)(40),
    {
      i18n: e,
      _: t
    }: any = (U as any)(),
    l: any = (nn as any)(),
    {
      setPreferences: n,
      isPending: d,
      failure: m
    }: any = (an as any)(),
    i: any = ((l as any).status as any) === ("ready" as any) ? (l as any).value : ("previous" in l ? (l as any).previous : void 0) ?? ln,
    o: any = d || ((l as any).status as any) === ("loading" as any) || ((l as any).status as any) === ("unavailable" as any);
  let u: any;
  ((s as any)[0] as any) !== (n as any) ? (u = (C: any): any => (n as any)(C), (s as any)[0] = n, (s as any)[1] = u) : u = (s as any)[1];
  const c: any = u;
  let r: any;
  ((s as any)[2] as any) !== (e as any) ? (r = ((dn as any).map as any)((C: any): any => ({
    value: (C as any).id,
    label: ((e as any)._ as any)((C as any).label)
  })), (s as any)[2] = e, (s as any)[3] = r) : r = (s as any)[3];
  const f: any = r;
  let h: any;
  ((s as any)[4] as any) !== (t as any) || ((s as any)[5] as any) !== (m as any) || ((s as any)[6] as any) !== ((l as any).status as any) ? (h = (m as any) != (null as any) || ((l as any).status as any) === ("failed" as any) ? (t as any)({
    id: "QqKsGg"
  }) : null, (s as any)[4] = t, (s as any)[5] = m, (s as any)[6] = (l as any).status, (s as any)[7] = h) : h = (s as any)[7];
  const p: any = h;
  let b: any;
  ((s as any)[8] as any) !== (t as any) ? (b = (t as any)({
    id: "iDNBZe"
  }), (s as any)[8] = t, (s as any)[9] = b) : b = (s as any)[9];
  let v: any;
  ((s as any)[10] as any) !== (b as any) ? (v = ((a as any).jsx as any)(on, {
    children: b
  }), (s as any)[10] = b, (s as any)[11] = v) : v = (s as any)[11];
  const y: any = (i as any).playSound;
  let j: any;
  ((s as any)[12] as any) !== (t as any) ? (j = (ms as any)((t as any)({
    id: "6EhUT7"
  })), (s as any)[12] = t, (s as any)[13] = j) : j = (s as any)[13];
  let x: any;
  ((s as any)[14] as any) !== (i as any) || ((s as any)[15] as any) !== (c as any) ? (x = (): any => {
    (i as any).playSound && (cn as any)(), (c as any)({
      ...i,
      playSound: !(i as any).playSound
    });
  }, (s as any)[14] = i, (s as any)[15] = c, (s as any)[16] = x) : x = (s as any)[16];
  let g: any;
  ((s as any)[17] as any) !== (o as any) || ((s as any)[18] as any) !== ((i as any).playSound as any) || ((s as any)[19] as any) !== (j as any) || ((s as any)[20] as any) !== (x as any) ? (g = ((a as any).jsx as any)(Le, {
    isChecked: y,
    isDisabled: o,
    label: j,
    onToggle: x,
    size: "md"
  }), (s as any)[17] = o, (s as any)[18] = (i as any).playSound, (s as any)[19] = j, (s as any)[20] = x, (s as any)[21] = g) : g = (s as any)[21];
  let _: any;
  ((s as any)[22] as any) !== (p as any) || ((s as any)[23] as any) !== (g as any) ? (_ = ((a as any).jsx as any)(ae, {
    anchorId: "notification-sound-enabled",
    description: p,
    variant: "card",
    children: g
  }), (s as any)[22] = p, (s as any)[23] = g, (s as any)[24] = _) : _ = (s as any)[24];
  let w: any;
  ((s as any)[25] as any) !== (t as any) ? (w = (ms as any)((t as any)({
    id: "wm7RV4"
  })), (s as any)[25] = t, (s as any)[26] = w) : w = (s as any)[26];
  const k: any = o || !(i as any).playSound;
  let N: any;
  ((s as any)[27] as any) !== (i as any) || ((s as any)[28] as any) !== (c as any) ? (N = (C: any): any => {
    (C as any) != (null as any) && ((c as any)({
      ...i,
      sound: C
    }), (rn as any)(C));
  }, (s as any)[27] = i, (s as any)[28] = c, (s as any)[29] = N) : N = (s as any)[29];
  let A: any;
  ((s as any)[30] as any) !== (f as any) || ((s as any)[31] as any) !== ((i as any).sound as any) || ((s as any)[32] as any) !== (w as any) || ((s as any)[33] as any) !== (k as any) || ((s as any)[34] as any) !== (N as any) ? (A = ((a as any).jsx as any)(ae, {
    anchorId: "notification-sound",
    variant: "card",
    children: ((a as any).jsx as any)(Te, {
      "aria-label": w,
      disabled: k,
      onValueChange: N,
      options: f,
      placement: "bottom-end",
      size: "lg",
      value: (i as any).sound,
      variant: "ghost"
    })
  }), (s as any)[30] = f, (s as any)[31] = (i as any).sound, (s as any)[32] = w, (s as any)[33] = k, (s as any)[34] = N, (s as any)[35] = A) : A = (s as any)[35];
  let I: any;
  return ((s as any)[36] as any) !== (A as any) || ((s as any)[37] as any) !== (v as any) || ((s as any)[38] as any) !== (_ as any) ? (I = ((a as any).jsxs as any)(je, {
    title: v,
    children: [_, A]
  }), (s as any)[36] = A, (s as any)[37] = v, (s as any)[38] = _, (s as any)[39] = I) : I = (s as any)[39], I;
}
function Hs(this: any): any {
  (Hs as any).d = 1296;
  const s: any = ((T as any).c as any)(2),
    e: any = (tn as any)();
  let t: any;
  return ((s as any)[0] as any) !== (e as any) ? (t = e ? ((a as any).jsx as any)(Ks, {}) : null, (s as any)[0] = e, (s as any)[1] = t) : t = (s as any)[1], t;
}
const ps: string = "grok_bot_spend_approval_passkey";
function Xs(this: any, s: any): any {
  (Xs as any).d = 1300;
  const e: any = ((T as any).c as any)(24),
    {
      passkey: t
    }: any = s,
    {
      i18n: l,
      _: n
    }: any = (U as any)(),
    d: any = (De as any)(),
    {
      revoke: m,
      isRevoking: i,
      revokeFailure: o
    }: any = (Ss as any)();
  let u: any;
  if (((e as any)[0] as any) !== (n as any) || ((e as any)[1] as any) !== (l as any) || ((e as any)[2] as any) !== ((t as any).backedUp as any) || ((e as any)[3] as any) !== ((t as any).createdAtMs as any) || ((e as any)[4] as any) !== ((t as any).lastUsedAtMs as any)) {
    const v: any = ((l as any).date as any)(new (Date as any)((t as any).createdAtMs), {
      dateStyle: "medium"
    });
    u = ((t as any).lastUsedAtMs as any) == (null as any) ? (n as any)({
      id: "YGg4Ab",
      values: {
        added: v
      }
    }) : (n as any)({
      id: "WwZac5",
      values: {
        0: ((l as any).date as any)(new (Date as any)((t as any).lastUsedAtMs), {
          dateStyle: "medium"
        }),
        added: v
      }
    }), (t as any).backedUp && (u = (n as any)({
      id: "rktTfb",
      values: {
        description: u
      }
    })), (e as any)[0] = n, (e as any)[1] = l, (e as any)[2] = (t as any).backedUp, (e as any)[3] = (t as any).createdAtMs, (e as any)[4] = (t as any).lastUsedAtMs, (e as any)[5] = u;
  } else u = (e as any)[5];
  if ((o as any) != (null as any)) {
    let v: any;
    ((e as any)[6] as any) !== (n as any) ? (v = (n as any)({
      id: "U3VC9i"
    }), (e as any)[6] = n, (e as any)[7] = v) : v = (e as any)[7], u = v;
  }
  let c: any;
  ((e as any)[8] as any) !== (n as any) || ((e as any)[9] as any) !== (d as any) || ((e as any)[10] as any) !== ((t as any).credentialId as any) || ((e as any)[11] as any) !== ((t as any).name as any) || ((e as any)[12] as any) !== (m as any) ? (c = async (): Promise<any> => {
    (await (d as any)((fn as any)({
      title: (n as any)({
        id: "LGsvdS"
      }),
      description: (n as any)({
        id: "zJhZD5",
        values: {
          0: (t as any).name
        }
      }),
      confirmLabel: (n as any)({
        id: "t/YqKh"
      }),
      cancelLabel: (n as any)({
        id: "dEgA5A"
      })
    }))) && (m as any)((t as any).credentialId);
  }, (e as any)[8] = n, (e as any)[9] = d, (e as any)[10] = (t as any).credentialId, (e as any)[11] = (t as any).name, (e as any)[12] = m, (e as any)[13] = c) : c = (e as any)[13];
  const r: any = c;
  let f: any;
  ((e as any)[14] as any) !== (r as any) ? (f = (): any => {
    (r as any)();
  }, (e as any)[14] = r, (e as any)[15] = f) : f = (e as any)[15];
  let h: any;
  ((e as any)[16] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (h = ((a as any).jsx as any)(Q, {
    id: "t/YqKh"
  }), (e as any)[16] = h) : h = (e as any)[16];
  let p: any;
  ((e as any)[17] as any) !== (i as any) || ((e as any)[18] as any) !== (f as any) ? (p = ((a as any).jsx as any)(fe, {
    disabled: i,
    onClick: f,
    sentiment: "danger",
    size: "md",
    style: (re as any).body2,
    type: "button",
    variant: "secondary",
    children: h
  }), (e as any)[17] = i, (e as any)[18] = f, (e as any)[19] = p) : p = (e as any)[19];
  let b: any;
  return ((e as any)[20] as any) !== (u as any) || ((e as any)[21] as any) !== ((t as any).name as any) || ((e as any)[22] as any) !== (p as any) ? (b = ((a as any).jsx as any)(ae, {
    anchorId: ws,
    description: u,
    label: (t as any).name,
    variant: "card",
    children: p
  }), (e as any)[20] = u, (e as any)[21] = (t as any).name, (e as any)[22] = p, (e as any)[23] = b) : b = (e as any)[23], b;
}
function Qs(this: any): any {
  (Qs as any).d = 1302;
  const s: any = ((T as any).c as any)(21),
    {
      _: e
    }: any = (U as any)(),
    {
      passkeys: t
    }: any = (un as any)(),
    {
      loadPasskeys: l,
      retryPasskeys: n
    }: any = (Ss as any)(),
    d: any = (rt as any)();
  (_e as any)(l);
  let m: any;
  if (((s as any)[0] as any) !== (e as any) || ((s as any)[1] as any) !== (d as any) || ((s as any)[2] as any) !== (n as any) || ((s as any)[3] as any) !== ((t as any).previous as any) || ((s as any)[4] as any) !== ((t as any).status as any) || ((s as any)[5] as any) !== ((t as any).value as any)) {
    let i: any = [],
      o: any = null,
      u: any = !1;
    e: switch ((t as any).status) {
      case "loading":
        {
          i = (t as any).previous ?? [], o = ((i as any).length as any) === (0 as any) ? (e as any)({
            id: "Pwqkdw"
          }) : null;
          break e;
        }
      case "ready":
        {
          i = (t as any).value;
          break e;
        }
      case "unavailable":
        {
          let p: any;
          ((s as any)[7] as any) !== (e as any) ? (p = (e as any)({
            id: "0BvlbM"
          }), (s as any)[7] = e, (s as any)[8] = p) : p = (s as any)[8], o = p;
          break e;
        }
      case "failed":
        {
          i = (t as any).previous ?? [];
          let p: any;
          ((s as any)[9] as any) !== (e as any) ? (p = (e as any)({
            id: "gMTXM2"
          }), (s as any)[9] = e, (s as any)[10] = p) : p = (s as any)[10], o = p, u = !0;
          break e;
        }
    }
    const c: any = o ?? (((i as any).length as any) === (0 as any) ? (e as any)({
      id: "RnIHB3"
    }) : (e as any)({
      id: "mI2MkV"
    }));
    let r: any;
    ((s as any)[11] as any) !== (e as any) ? (r = (e as any)({
      id: "UZKLEA"
    }), (s as any)[11] = e, (s as any)[12] = r) : r = (s as any)[12];
    let f: any;
    ((s as any)[13] as any) !== (u as any) || ((s as any)[14] as any) !== (d as any) || ((s as any)[15] as any) !== (n as any) || ((s as any)[16] as any) !== ((t as any).status as any) ? (f = u ? ((a as any).jsx as any)(fe, {
      onClick: n,
      size: "md",
      style: (re as any).body2,
      type: "button",
      variant: "secondary",
      children: ((a as any).jsx as any)(Q, {
        id: "6gRgw8"
      })
    }) : ((a as any).jsx as any)(fe, {
      disabled: ((t as any).status as any) === ("unavailable" as any),
      onClick: (): any => {
        (d as any)();
      },
      size: "md",
      style: (re as any).body2,
      type: "button",
      variant: "primary",
      children: ((a as any).jsx as any)(Q, {
        id: "w3zmQl"
      })
    }), (s as any)[13] = u, (s as any)[14] = d, (s as any)[15] = n, (s as any)[16] = (t as any).status, (s as any)[17] = f) : f = (s as any)[17];
    let h: any;
    ((s as any)[18] as any) !== (c as any) || ((s as any)[19] as any) !== (f as any) ? (h = ((a as any).jsx as any)(ae, {
      anchorId: "passkeys",
      description: c,
      variant: "card",
      children: f
    }), (s as any)[18] = c, (s as any)[19] = f, (s as any)[20] = h) : h = (s as any)[20], m = ((a as any).jsxs as any)(je, {
      title: r,
      children: [h, (((([...i] as any).sort as any)(da) as any).map as any)(ia)]
    }), (s as any)[0] = e, (s as any)[1] = d, (s as any)[2] = n, (s as any)[3] = (t as any).previous, (s as any)[4] = (t as any).status, (s as any)[5] = (t as any).value, (s as any)[6] = m;
  } else m = (s as any)[6];
  return m;
}
function ia(this: any, s: any): any {
  return ((a as any).jsx as any)(Xs, {
    passkey: s
  }, (s as any).credentialId);
}
function da(this: any, s: any, e: any): any {
  return ((e as any).createdAtMs as any) - ((s as any).createdAtMs as any);
}
function Zs(this: any): any {
  (Zs as any).d = 1301;
  const s: any = ((T as any).c as any)(4),
    e: any = (ze as any)(ps),
    t: any = (ls as any)();
  let l: any;
  ((s as any)[0] as any) !== (t as any) ? (l = (): any => ((t as any)(ps), oa), (s as any)[0] = t, (s as any)[1] = l) : l = (s as any)[1], (Pe as any)(l);
  let n: any;
  return ((s as any)[2] as any) !== (e as any) ? (n = e ? ((a as any).jsx as any)(Qs, {}) : null, (s as any)[2] = e, (s as any)[3] = n) : n = (s as any)[3], n;
}
function oa(this: any): any {}
const ca: any = ["darwin", "win32"];
function ra(this: any, s: any): any {
  return ((ca as any).includes as any)(s);
}
function Ys(this: any): any {
  (Ys as any).d = 1306;
  const s: any = ((T as any).c as any)(26),
    {
      _: e
    }: any = (U as any)(),
    {
      platform: t
    }: any = (mn as any)(),
    l: any = (hn as any)(),
    {
      setEnabled: n,
      isPending: d,
      failure: m
    }: any = (bn as any)();
  let i: any;
  ((s as any)[0] as any) !== (t as any) ? (i = (ra as any)(t), (s as any)[0] = t, (s as any)[1] = i) : i = (s as any)[1];
  const o: any = i,
    u: any = l && o;
  let c: any;
  if ((m as any) != (null as any)) {
    let x: any;
    ((s as any)[2] as any) !== (e as any) ? (x = (e as any)({
      id: "QqKsGg"
    }), (s as any)[2] = e, (s as any)[3] = x) : x = (s as any)[3], c = x;
  } else if (o) {
    let x: any;
    ((s as any)[4] as any) !== (e as any) ? (x = (e as any)({
      id: "rmVuan"
    }), (s as any)[4] = e, (s as any)[5] = x) : x = (s as any)[5], c = x;
  } else {
    let x: any;
    ((s as any)[6] as any) !== (e as any) ? (x = (e as any)({
      id: "TmxDiI"
    }), (s as any)[6] = e, (s as any)[7] = x) : x = (s as any)[7], c = x;
  }
  let r: any;
  ((s as any)[8] as any) !== (e as any) ? (r = (e as any)({
    id: "0qyGnO"
  }), (s as any)[8] = e, (s as any)[9] = r) : r = (s as any)[9];
  const f: any = c,
    h: any = d || !o;
  let p: any;
  ((s as any)[10] as any) !== (e as any) ? (p = (e as any)({
    id: "VUEkDl"
  }), (s as any)[10] = e, (s as any)[11] = p) : p = (s as any)[11];
  let b: any;
  ((s as any)[12] as any) !== (n as any) || ((s as any)[13] as any) !== (l as any) ? (b = (): any => (n as any)(!l), (s as any)[12] = n, (s as any)[13] = l, (s as any)[14] = b) : b = (s as any)[14];
  let v: any;
  ((s as any)[15] as any) !== (h as any) || ((s as any)[16] as any) !== (p as any) || ((s as any)[17] as any) !== (b as any) || ((s as any)[18] as any) !== (u as any) ? (v = ((a as any).jsx as any)(Le, {
    isChecked: u,
    isDisabled: h,
    label: p,
    onToggle: b,
    size: "md"
  }), (s as any)[15] = h, (s as any)[16] = p, (s as any)[17] = b, (s as any)[18] = u, (s as any)[19] = v) : v = (s as any)[19];
  let y: any;
  ((s as any)[20] as any) !== (v as any) || ((s as any)[21] as any) !== (c as any) ? (y = ((a as any).jsx as any)(ae, {
    anchorId: "security-keys",
    description: f,
    variant: "card",
    children: v
  }), (s as any)[20] = v, (s as any)[21] = c, (s as any)[22] = y) : y = (s as any)[22];
  let j: any;
  return ((s as any)[23] as any) !== (r as any) || ((s as any)[24] as any) !== (y as any) ? (j = ((a as any).jsx as any)(je, {
    title: r,
    children: y
  }), (s as any)[23] = r, (s as any)[24] = y, (s as any)[25] = j) : j = (s as any)[25], j;
}
const os: any = [],
  Re: any = (wn as any)(os);
let Ke: any = null,
  ns: any = 0;
function cs(this: any): any {
  if ((typeof navigator as any) > ("u" as any)) return null;
  const s: any = (navigator as any).mediaDevices;
  return (typeof s?.enumerateDevices as any) == ("function" as any) ? s : null;
}
function ua(this: any, s: any): any {
  return ((((s as any).filter as any)((e: any): any => ((e as any).kind as any) === ("audioinput" as any)) as any).map as any)((e: any): any => ({
    deviceId: (e as any).deviceId,
    label: (e as any).label
  }));
}
function fa(this: any, s: any, e: any): any {
  return ((s as any).length as any) === ((e as any).length as any) && ((s as any).every as any)((t: any, l: any): any => ((t as any).deviceId as any) === ((e as any)[l]?.deviceId as any) && ((t as any).label as any) === ((e as any)[l]?.label as any));
}
function ma(this: any): any {
  return null;
}
async function ha(this: any, s: any): Promise<any> {
  const e: any = ++ns,
    t: any = await ((((s as any).enumerateDevices as any)() as any).then as any)(ua, ma);
  (t as any) != (null as any) && ((s as any) !== (Ke as any) || (e as any) !== (ns as any) || (fa as any)(((Re as any).get as any)(), t) || ((Re as any).set as any)(t));
}
function ba(this: any): any {
  const s: any = (cs as any)();
  if ((s as any) == (null as any)) return (): any => {};
  (s as any) !== (Ke as any) && (Ke = s, ((Re as any).set as any)(os), ns += 1);
  const e: any = (): any => {
    (ha as any)(s);
  };
  return ((s as any).addEventListener as any)("devicechange", e), (e as any)(), (): any => {
    ((s as any).removeEventListener as any)("devicechange", e);
  };
}
function vs(this: any): any {
  const s: any = (cs as any)();
  return (s as any) != (null as any) && (s as any) === (Ke as any) ? ((Re as any).get as any)() : os;
}
function Js(this: any): any {
  (Js as any).d = 1294;
  const s: any = ((T as any).c as any)(22),
    {
      _: e
    }: any = (U as any)(),
    {
      inputDeviceId: t
    }: any = (pn as any)(),
    l: any = (vn as any)();
  (Pe as any)(ba);
  const n: any = ((ee as any).useSyncExternalStore as any)((Re as any).subscribe, vs, vs);
  if (((cs as any)() as any) == (null as any)) return null;
  let d: any;
  ((s as any)[0] as any) !== (e as any) ? (d = (e as any)({
    id: "1iY5xv"
  }), (s as any)[0] = e, (s as any)[1] = d) : d = (s as any)[1];
  const m: any = d;
  let i: any;
  ((s as any)[2] as any) !== (n as any) || ((s as any)[3] as any) !== (t as any) ? (i = (t as any) != (null as any) && ((n as any).some as any)((b: any): any => ((b as any).deviceId as any) === (t as any)) ? t : "", (s as any)[2] = n, (s as any)[3] = t, (s as any)[4] = i) : i = (s as any)[4];
  const o: any = i;
  let u: any;
  ((s as any)[5] as any) !== (e as any) ? (u = (e as any)({
    id: "9YHrNC"
  }), (s as any)[5] = e, (s as any)[6] = u) : u = (s as any)[6];
  let c: any;
  ((s as any)[7] as any) !== (u as any) ? (c = {
    value: "",
    label: u
  }, (s as any)[7] = u, (s as any)[8] = c) : c = (s as any)[8];
  let r: any;
  if (((s as any)[9] as any) !== (e as any) || ((s as any)[10] as any) !== (n as any) || ((s as any)[11] as any) !== (c as any)) {
    let b: any;
    ((s as any)[13] as any) !== (e as any) ? (b = (v: any, y: any): any => ({
      value: (v as any).deviceId,
      label: (v as any).label || (e as any)({
        id: "IBi8Io",
        values: {
          0: (y as any) + (1 as any)
        }
      })
    }), (s as any)[13] = e, (s as any)[14] = b) : b = (s as any)[14], r = [c, ...((n as any).map as any)(b)], (s as any)[9] = e, (s as any)[10] = n, (s as any)[11] = c, (s as any)[12] = r;
  } else r = (s as any)[12];
  const f: any = r;
  let h: any;
  ((s as any)[15] as any) !== (l as any) ? (h = (b: any): any => {
    (b as any) !== (null as any) && (l as any)((b as any) === ("" as any) ? null : b);
  }, (s as any)[15] = l, (s as any)[16] = h) : h = (s as any)[16];
  let p: any;
  return ((s as any)[17] as any) !== (m as any) || ((s as any)[18] as any) !== (f as any) || ((s as any)[19] as any) !== (h as any) || ((s as any)[20] as any) !== (o as any) ? (p = ((a as any).jsx as any)(ae, {
    anchorId: "microphone",
    variant: "card",
    children: ((a as any).jsx as any)(Te, {
      "aria-label": m,
      onValueChange: h,
      options: f,
      placement: "bottom-end",
      size: "lg",
      value: o,
      variant: "ghost"
    })
  }), (s as any)[17] = m, (s as any)[18] = f, (s as any)[19] = h, (s as any)[20] = o, (s as any)[21] = p) : p = (s as any)[21], p;
}
function et(this: any): any {
  (et as any).d = 1312;
  const s: any = ((T as any).c as any)(36),
    {
      _: e
    }: any = (U as any)(),
    t: any = ($e as any)();
  (_e as any)(((t as any).hardwareAcceleration as any).load);
  const {
      state: l,
      reload: n
    }: any = (xn as any)(),
    {
      setEnabled: d,
      isPending: m,
      failure: i
    }: any = (yn as any)(),
    {
      relaunch: o,
      isPending: u,
      failure: c
    }: any = (kn as any)();
  if (((l as any).status as any) === ("unavailable" as any) || ((l as any).status as any) === ("empty" as any)) return null;
  const r: any = ((l as any).status as any) === ("ready" as any) ? (l as any).value : (l as any).previous ?? null;
  if (((l as any).status as any) === ("failed" as any) && (r as any) == (null as any)) {
    let k: any;
    ((s as any)[0] as any) !== (e as any) ? (k = (e as any)({
      id: "mmzR7e"
    }), (s as any)[0] = e, (s as any)[1] = k) : k = (s as any)[1];
    let N: any;
    ((s as any)[2] as any) !== (n as any) ? (N = (): any => (n as any)(), (s as any)[2] = n, (s as any)[3] = N) : N = (s as any)[3];
    let A: any;
    ((s as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (A = ((a as any).jsx as any)(Q, {
      id: "6gRgw8"
    }), (s as any)[4] = A) : A = (s as any)[4];
    let I: any;
    ((s as any)[5] as any) !== (N as any) ? (I = ((a as any).jsx as any)(fe, {
      onClick: N,
      size: "md",
      style: (re as any).body2,
      type: "button",
      variant: "secondary",
      children: A
    }), (s as any)[5] = N, (s as any)[6] = I) : I = (s as any)[6];
    let C: any;
    return ((s as any)[7] as any) !== (k as any) || ((s as any)[8] as any) !== (I as any) ? (C = ((a as any).jsx as any)(ae, {
      anchorId: "hardware-acceleration",
      description: k,
      variant: "card",
      children: I
    }), (s as any)[7] = k, (s as any)[8] = I, (s as any)[9] = C) : C = (s as any)[9], C;
  }
  let f: any;
  if ((i as any) != (null as any) || ((l as any).status as any) === ("failed" as any) && (r as any) != (null as any)) {
    let k: any;
    ((s as any)[10] as any) !== (e as any) ? (k = (e as any)({
      id: "QqKsGg"
    }), (s as any)[10] = e, (s as any)[11] = k) : k = (s as any)[11], f = k;
  } else if (((l as any).status as any) === ("loading" as any) && (r as any) == (null as any)) {
    let k: any;
    ((s as any)[12] as any) !== (e as any) ? (k = (e as any)({
      id: "Pwqkdw"
    }), (s as any)[12] = e, (s as any)[13] = k) : k = (s as any)[13], f = k;
  }
  const h: any = (r as any) != (null as any) && ((r as any).enabled as any) !== ((r as any).enabledAtLaunch as any),
    p: any = f,
    b: any = r?.enabled ?? !1,
    v: any = (r as any) == (null as any) || m;
  let y: any;
  ((s as any)[14] as any) !== (e as any) ? (y = (e as any)({
    id: "gkVAUt"
  }), (s as any)[14] = e, (s as any)[15] = y) : y = (s as any)[15];
  let j: any;
  ((s as any)[16] as any) !== (d as any) || ((s as any)[17] as any) !== (r as any) ? (j = (): any => {
    (r as any) != (null as any) && (d as any)(!(r as any).enabled);
  }, (s as any)[16] = d, (s as any)[17] = r, (s as any)[18] = j) : j = (s as any)[18];
  let x: any;
  ((s as any)[19] as any) !== (b as any) || ((s as any)[20] as any) !== (v as any) || ((s as any)[21] as any) !== (y as any) || ((s as any)[22] as any) !== (j as any) ? (x = ((a as any).jsx as any)(Le, {
    isChecked: b,
    isDisabled: v,
    label: y,
    onToggle: j,
    size: "md"
  }), (s as any)[19] = b, (s as any)[20] = v, (s as any)[21] = y, (s as any)[22] = j, (s as any)[23] = x) : x = (s as any)[23];
  let g: any;
  ((s as any)[24] as any) !== (f as any) || ((s as any)[25] as any) !== (x as any) ? (g = ((a as any).jsx as any)(ae, {
    anchorId: "hardware-acceleration",
    description: p,
    variant: "card",
    children: x
  }), (s as any)[24] = f, (s as any)[25] = x, (s as any)[26] = g) : g = (s as any)[26];
  let _: any;
  ((s as any)[27] as any) !== (e as any) || ((s as any)[28] as any) !== (u as any) || ((s as any)[29] as any) !== (h as any) || ((s as any)[30] as any) !== (o as any) || ((s as any)[31] as any) !== (c as any) ? (_ = h ? ((a as any).jsx as any)(ae, {
    anchorId: "hardware-acceleration-restart",
    description: (c as any) != (null as any) ? (e as any)({
      id: "MVyXqf"
    }) : (e as any)({
      id: "jZlVjK"
    }),
    variant: "card",
    children: ((a as any).jsx as any)(fe, {
      disabled: u,
      onClick: (): any => (o as any)(),
      sentiment: "accent",
      size: "md",
      style: (re as any).body2,
      type: "button",
      variant: "primary",
      children: ((a as any).jsx as any)(Q, {
        id: "u6QeR6"
      })
    })
  }) : null, (s as any)[27] = e, (s as any)[28] = u, (s as any)[29] = h, (s as any)[30] = o, (s as any)[31] = c, (s as any)[32] = _) : _ = (s as any)[32];
  let w: any;
  return ((s as any)[33] as any) !== (g as any) || ((s as any)[34] as any) !== (_ as any) ? (w = ((a as any).jsxs as any)((a as any).Fragment, {
    children: [g, _]
  }), (s as any)[33] = g, (s as any)[34] = _, (s as any)[35] = w) : w = (s as any)[35], w;
}
function st(this: any): any {
  (st as any).d = 1313;
  const s: any = ((T as any).c as any)(11),
    {
      _: e
    }: any = (U as any)(),
    [t, l]: any = ((ee as any).useState as any)(!1);
  let n: any;
  ((s as any)[0] as any) !== (e as any) ? (n = (e as any)({
    id: "vhgAB7"
  }), (s as any)[0] = e, (s as any)[1] = n) : n = (s as any)[1];
  let d: any;
  ((s as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = (): any => (l as any)(!0), (s as any)[2] = d) : d = (s as any)[2];
  let m: any;
  ((s as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (m = ((a as any).jsx as any)(fe, {
    onClick: d,
    size: "md",
    style: (re as any).body2,
    type: "button",
    variant: "secondary",
    children: ((a as any).jsx as any)(Q, {
      id: "QVjG8n"
    })
  }), (s as any)[3] = m) : m = (s as any)[3];
  let i: any;
  ((s as any)[4] as any) !== (n as any) ? (i = ((a as any).jsx as any)(ae, {
    anchorId: "network-debugger",
    description: n,
    variant: "card",
    children: m
  }), (s as any)[4] = n, (s as any)[5] = i) : i = (s as any)[5];
  let o: any;
  ((s as any)[6] as any) !== (t as any) ? (o = t ? ((a as any).jsx as any)(ut, {
    onClose: (): any => (l as any)(!1)
  }) : null, (s as any)[6] = t, (s as any)[7] = o) : o = (s as any)[7];
  let u: any;
  return ((s as any)[8] as any) !== (i as any) || ((s as any)[9] as any) !== (o as any) ? (u = ((a as any).jsxs as any)((a as any).Fragment, {
    children: [i, o]
  }), (s as any)[8] = i, (s as any)[9] = o, (s as any)[10] = u) : u = (s as any)[10], u;
}
function tt(this: any): any {
  (tt as any).d = 1314;
  const s: any = ((T as any).c as any)(11),
    {
      _: e
    }: any = (U as any)(),
    t: any = (ze as any)("grok_bot_network_debugger"),
    l: any = (ls as any)();
  let n: any;
  ((s as any)[0] as any) !== (l as any) ? (n = (): any => ((l as any)("grok_bot_network_debugger"), pa), (s as any)[0] = l, (s as any)[1] = n) : n = (s as any)[1], (Pe as any)(n);
  let d: any;
  ((s as any)[2] as any) !== (e as any) ? (d = (e as any)({
    id: "D+NlUC"
  }), (s as any)[2] = e, (s as any)[3] = d) : d = (s as any)[3];
  let m: any, i: any;
  ((s as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (m = ((a as any).jsx as any)(Js, {}), i = ((a as any).jsx as any)(et, {}), (s as any)[4] = m, (s as any)[5] = i) : (m = (s as any)[4], i = (s as any)[5]);
  let o: any;
  ((s as any)[6] as any) !== (t as any) ? (o = t ? ((a as any).jsx as any)(st, {}) : null, (s as any)[6] = t, (s as any)[7] = o) : o = (s as any)[7];
  let u: any;
  return ((s as any)[8] as any) !== (d as any) || ((s as any)[9] as any) !== (o as any) ? (u = ((a as any).jsxs as any)(je, {
    title: d,
    children: [m, i, o]
  }), (s as any)[8] = d, (s as any)[9] = o, (s as any)[10] = u) : u = (s as any)[10], u;
}
function pa(this: any): any {}
function va(this: any, s: any): any {
  const e: any = (Ns as any)(s);
  return (e as any) === (null as any) ? null : (_n as any)(e);
}
function nt(this: any): any {
  (nt as any).d = 1317;
  const s: any = ((T as any).c as any)(23),
    {
      _: e
    }: any = (U as any)(),
    t: any = (gn as any)();
  let l: any;
  ((s as any)[0] as any) !== (t as any) ? (l = (va as any)(t), (s as any)[0] = t, (s as any)[1] = l) : l = (s as any)[1];
  const n: any = l,
    d: any = (jn as any)();
  if ((n as any) === (null as any)) return null;
  let m: any;
  ((s as any)[2] as any) !== (e as any) ? (m = (e as any)({
    id: "GdgCoi"
  }), (s as any)[2] = e, (s as any)[3] = m) : m = (s as any)[3];
  let i: any;
  ((s as any)[4] as any) !== (e as any) ? (i = (e as any)({
    id: "LpqpbB"
  }), (s as any)[4] = e, (s as any)[5] = i) : i = (s as any)[5];
  let o: any;
  ((s as any)[6] as any) !== (e as any) ? (o = (e as any)({
    id: "FRc2UR"
  }), (s as any)[6] = e, (s as any)[7] = o) : o = (s as any)[7];
  let u: any;
  ((s as any)[8] as any) !== ((n as any).href as any) || ((s as any)[9] as any) !== (d as any) ? (u = (): any => {
    (d as any)((n as any).href);
  }, (s as any)[8] = (n as any).href, (s as any)[9] = d, (s as any)[10] = u) : u = (s as any)[10];
  let c: any;
  ((s as any)[11] as any) !== (e as any) ? (c = (e as any)({
    id: "eDBYeI"
  }), (s as any)[11] = e, (s as any)[12] = c) : c = (s as any)[12];
  let r: any;
  ((s as any)[13] as any) !== (u as any) || ((s as any)[14] as any) !== (c as any) ? (r = ((a as any).jsx as any)(fe, {
    onClick: u,
    size: "sm",
    variant: "primary",
    children: c
  }), (s as any)[13] = u, (s as any)[14] = c, (s as any)[15] = r) : r = (s as any)[15];
  let f: any;
  ((s as any)[16] as any) !== (i as any) || ((s as any)[17] as any) !== (o as any) || ((s as any)[18] as any) !== (r as any) ? (f = ((a as any).jsx as any)("div", {
    "data-sand-unified-plan-migration": "",
    children: ((a as any).jsx as any)(ae, {
      anchorId: ws,
      description: i,
      label: o,
      variant: "card",
      children: r
    })
  }), (s as any)[16] = i, (s as any)[17] = o, (s as any)[18] = r, (s as any)[19] = f) : f = (s as any)[19];
  let h: any;
  return ((s as any)[20] as any) !== (m as any) || ((s as any)[21] as any) !== (f as any) ? (h = ((a as any).jsx as any)(je, {
    title: m,
    children: f
  }), (s as any)[20] = m, (s as any)[21] = f, (s as any)[22] = h) : h = (s as any)[22], h;
}
function at(this: any): any {
  (at as any).d = 1222;
  const s: any = ((T as any).c as any)(18),
    {
      _: e
    }: any = (U as any)(),
    {
      cursorAuth: t
    }: any = (Sn as any)();
  let l: any;
  ((s as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (l = (ce as any)("sand-settings-general", "sand-9f619 sand-78zum5 sand-dt5ytf sand-3qzy4x"), (s as any)[0] = l) : l = (s as any)[0];
  let n: any;
  ((s as any)[1] as any) !== (e as any) ? (n = (e as any)({
    id: "AeXO77"
  }), (s as any)[1] = e, (s as any)[2] = n) : n = (s as any)[2];
  let d: any;
  ((s as any)[3] as any) !== (t as any) ? (d = ((a as any).jsx as any)(As, {
    auth: t
  }), (s as any)[3] = t, (s as any)[4] = d) : d = (s as any)[4];
  let m: any;
  ((s as any)[5] as any) !== (n as any) || ((s as any)[6] as any) !== (d as any) ? (m = ((a as any).jsx as any)(je, {
    title: n,
    children: d
  }), (s as any)[5] = n, (s as any)[6] = d, (s as any)[7] = m) : m = (s as any)[7];
  let i: any, o: any, u: any, c: any, r: any, f: any, h: any, p: any;
  ((s as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (u = ((a as any).jsx as any)(nt, {}), c = ((a as any).jsx as any)(Vs, {}), r = ((a as any).jsx as any)(Hs, {}), f = ((a as any).jsx as any)(tt, {}), h = ((a as any).jsx as any)(Us, {}), p = ((a as any).jsx as any)(Ys, {}), i = ((a as any).jsx as any)(Cs, {}), o = ((a as any).jsx as any)(Zs, {}), (s as any)[8] = i, (s as any)[9] = o, (s as any)[10] = u, (s as any)[11] = c, (s as any)[12] = r, (s as any)[13] = f, (s as any)[14] = h, (s as any)[15] = p) : (i = (s as any)[8], o = (s as any)[9], u = (s as any)[10], c = (s as any)[11], r = (s as any)[12], f = (s as any)[13], h = (s as any)[14], p = (s as any)[15]);
  let b: any;
  return ((s as any)[16] as any) !== (m as any) ? (b = ((a as any).jsx as any)(Nn, {
    children: ((a as any).jsxs as any)("div", {
      className: l,
      children: [m, u, c, r, f, h, p, i, o]
    })
  }), (s as any)[16] = m, (s as any)[17] = b) : b = (s as any)[17], b;
}
function xa(this: any, s: any): any {
  (xa as any).d = 1229;
  const e: any = ((T as any).c as any)(3),
    {
      params: t
    }: any = s,
    l: any = (t as any).focusSetting ?? null;
  let n: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = ((a as any).jsx as any)(at, {}), (e as any)[0] = n) : n = (e as any)[0];
  let d: any;
  return ((e as any)[1] as any) !== (l as any) ? (d = ((a as any).jsx as any)(ft, {
    focus: l,
    children: n
  }), (e as any)[1] = l, (e as any)[2] = d) : d = (e as any)[2], d;
}
export { xa as default };
//# debugId=7967ad07-c5b8-49d1-98d3-25481635e736
