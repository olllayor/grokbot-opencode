declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "4cf3aec3-13b1-4aa8-ba9c-0a5d6d49720c", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-4cf3aec3-13b1-4aa8-ba9c-0a5d6d49720c");
  } catch (e: any) {}
} as any)();
import { c as M, u as L, r as q, j as t, T as v, p as J, i as ls } from "./index.eager-vendor-Qbf9YA6n.js";
import { z as Q, x as z, I as Ie, C as is, b_ as as, H as je, aX as we, p as rs, bZ as os } from "./index-ZYxf-aBb.js";
import { b9 as be, ge as ds, fh as ue, gf as cs, a_ as $, gg as us, gh as Re, gi as fs, fB as Ae, eY as $e, aK as ms, a$ as fe, gj as hs, gk as ps, dk as ks, gl as gs, gm as ys, gn as xs, aU as ne, b7 as le, go as js, em as Ee, gp as bs, cc as Ss, gq as vs, gr as _s, bh as me, gs as ws, gt as Cs, cb as zs, dn as Is } from "./index.eager-app-Cj5f8Gby.js";
import { a_ as Rs, aY as ce, aZ as As } from "./index.eager-platform-Dcfeegfw.js";
import { S as $s } from "./chunk-scroll-pane-CoxKzaOs.js";
import { a as W, G as he, S as Me } from "./chunk-settings-row-I8ggwIzt.js";
import { b as Es, u as Ms, a as Ts } from "./chunk-provider-team-policy-CBjUAi-4.js";
import { L as Ps } from "./chunk-local-tools-row-BLtLBTlf.js";
import "./index.eager-common-CdCvBQNJ.js";
function Ns(this: any, s: any): any {
  return ((s as any).length as any) !== (1 as any) ? null : (s as any)[0]?.profileId ?? null;
}
function Ce(this: any, s: any, e: any): any {
  return ((s as any).kind as any) === ("auto" as any) ? (Ns as any)(e) : (s as any).profileId;
}
function Ds(this: any, s: any, e: any, n: any): any {
  return (s?.kind as any) !== ("pick" as any) || ((s as any).generation as any) !== (n as any) ? s : ((e as any).kind as any) === ("cookies" as any) ? {
    kind: "pick",
    cookies: (e as any).cookies,
    generation: n
  } : {
    kind: "failed",
    reason: "list-cookies",
    failure: (e as any).failure
  };
}
function qs(this: any, s: any): any {
  const e: any = ((((s as any).replace as any)(/[^A-Za-z0-9_-]+/g, "-") as any).replace as any)(/^-+|-+$/g, "");
  return `chrome-cookie-sites-${(e as any) === ("" as any) ? "0" : e}`;
}
const A: any = {
  pickSurface: {
    kZKoxP: "sand-sl4cvy",
    $$css: !0
  },
  header: {
    kLKAdn: "sand-z9dl7a",
    kwRFfy: "sand-2vl965",
    kGO01o: "sand-sag5q8",
    kL6WhQ: "sand-19145p9",
    $$css: !0
  },
  description: {
    kMwMTN: "sand-1o0liin",
    $$css: !0
  },
  pickBody: {
    k1xSpc: "sand-78zum5",
    kXwgrk: "sand-dt5ytf",
    kzQI83: "sand-1iyjqo2",
    kAzted: "sand-2lwn1j",
    kOIVth: "sand-883omv",
    kXHlph: "sand-6ikm8r",
    kORKVm: "sand-1odjw0f",
    kLKAdn: "sand-1t8xvyj",
    kGO01o: "sand-usxwy5",
    $$css: !0
  },
  pickActions: {
    kLZC3w: "sand-t8lcch",
    $$css: !0
  },
  message: {
    keoZOQ: "sand-dj266r",
    k71WvV: "sand-14z9mp",
    k1K539: "sand-at24cr",
    keTefX: "sand-1lziwak",
    $$css: !0
  },
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
    k8Qsv1: "sand-1h7ufjq",
    $$css: !0
  },
  profileName: {
    keoZOQ: "sand-dj266r",
    k71WvV: "sand-14z9mp",
    k1K539: "sand-at24cr",
    keTefX: "sand-1lziwak",
    k7Eaqz: "sand-euugli",
    kVQacm: "sand-b3r6kr",
    kg5iWk: "sand-lyipyv",
    khDVqt: "sand-uxw1ft",
    kMwMTN: "sand-tyxrsu",
    $$css: !0
  },
  profileMeta: {
    keoZOQ: "sand-dj266r",
    k71WvV: "sand-14z9mp",
    k1K539: "sand-at24cr",
    keTefX: "sand-1lziwak",
    kMwMTN: "sand-1o0liin",
    $$css: !0
  },
  deselect: {
    kBCFzs: "sand-1npkx4u",
    kVAEAm: "sand-1n2onr6",
    kY2c9j: "sand-1vjfegm",
    $$css: !0
  },
  chevron: {
    kBCFzs: "sand-1k3v4rp",
    kMwMTN: "sand-169k319",
    kfzvcC: "sand-47corl",
    $$css: !0
  },
  siteList: {
    k71WvV: "sand-6xdu4z",
    k1K539: "sand-14q74kp",
    keTefX: "sand-1m7rdgf",
    kLKAdn: "sand-1t8xvyj",
    kwRFfy: "sand-t1q3vd",
    kGO01o: "sand-usxwy5",
    kZCmMZ: "sand-8fiw5y",
    kMzoRj: "sand-4hv7ue",
    ksu8eU: "sand-1y0btm7",
    kVAM5u: "sand-fnq37j",
    kaIpWk: "sand-1qmwy7c",
    $$css: !0
  },
  siteListContent: {
    kOIVth: "sand-883omv",
    $$css: !0
  },
  empty: {
    k1xSpc: "sand-78zum5",
    kGNEyG: "sand-6s0dn4",
    kjj79g: "sand-l56j7k",
    kAzted: "sand-1ba4aug",
    kLKAdn: "sand-oyc9vk",
    kGO01o: "sand-2lprc",
    kMwMTN: "sand-1o0liin",
    $$css: !0
  },
  helper: {
    keoZOQ: "sand-dj266r",
    k71WvV: "sand-14z9mp",
    k1K539: "sand-at24cr",
    keTefX: "sand-1lziwak",
    kmuXW: "sand-2lah0s",
    kLKAdn: "sand-uve7l6",
    kwRFfy: "sand-196pc8s",
    kGO01o: "sand-1xlntvz",
    kZCmMZ: "sand-22095l",
    kMwMTN: "sand-1o0liin",
    $$css: !0
  }
};
function te(this: any, s: any): any {
  (te as any).d = 1249;
  const e: any = ((M as any).c as any)(3),
    {
      children: n,
      role: i
    }: any = s;
  let a: any;
  return ((e as any)[0] as any) !== (n as any) || ((e as any)[1] as any) !== (i as any) ? (a = ((t as any).jsx as any)(ce, {
    as: "p",
    color: "secondary",
    role: i,
    rootStyle: (A as any).message,
    size: "sm",
    children: n
  }), (e as any)[0] = n, (e as any)[1] = i, (e as any)[2] = a) : a = (e as any)[2], a;
}
function Ls(this: any, s: any, e: any): any {
  return (ps as any)((Re as any)(s), e);
}
function Os(this: any, s: any, e: any): any {
  let n: any = 0;
  for (const i of s) ((e as any).has as any)((i as any).key) && (n += ((i as any).cookies as any).length);
  return n;
}
function Ws(this: any, s: any, e: any): any {
  return (e as any) === ("" as any) ? !0 : (((((s as any).host as any).toLowerCase as any)() as any).includes as any)(e) || (((Ae as any)((s as any).profileDisplayName, ($e as any)()) as any).includes as any)(e);
}
function Te(this: any, s: any): any {
  (Te as any).d = 1255;
  const e: any = ((M as any).c as any)(9),
    {
      query: n,
      placeholder: i,
      onQueryChange: a
    }: any = s;
  let l: any, r: any, o: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (l = {
    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-2lah0s sand-1jnr06f sand-tsj531 sand-11lfxj5 sand-mzvs34 sand-mkeg23 sand-1y0btm7 sand-fnq37j sand-1qmwy7c sand-vvtkfd"
  }, r = ((t as any).jsx as any)(Ie, {
    name: "search",
    size: "md",
    style: (A as any).searchIcon
  }), o = (J as any)(($ as any).body1, (A as any).searchInput), (e as any)[0] = l, (e as any)[1] = r, (e as any)[2] = o) : (l = (e as any)[0], r = (e as any)[1], o = (e as any)[2]);
  let u: any;
  ((e as any)[3] as any) !== (a as any) ? (u = (d: any): any => (a as any)(((d as any).currentTarget as any).value), (e as any)[3] = a, (e as any)[4] = u) : u = (e as any)[4];
  let c: any;
  return ((e as any)[5] as any) !== (i as any) || ((e as any)[6] as any) !== (n as any) || ((e as any)[7] as any) !== (u as any) ? (c = ((t as any).jsxs as any)("div", {
    ...l,
    children: [r, ((t as any).jsx as any)("input", {
      ...o,
      "aria-label": i,
      autoComplete: "off",
      onChange: u,
      placeholder: i,
      spellCheck: !1,
      type: "text",
      value: n
    })]
  }), (e as any)[5] = i, (e as any)[6] = n, (e as any)[7] = u, (e as any)[8] = c) : c = (e as any)[8], c;
}
function Pe(this: any, s: any): any {
  (Pe as any).d = 1252;
  const e: any = ((M as any).c as any)(66),
    {
      cookies: n,
      onImport: i,
      onClose: a
    }: any = s,
    {
      _: l
    }: any = (L as any)(),
    r: any = (((ue as any)() as any).platform as any) === ("darwin" as any),
    [o, u]: any = ((q as any).useState as any)(null),
    [c, d]: any = ((q as any).useState as any)("");
  let h: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (h = {
    kind: "auto"
  }, (e as any)[0] = h) : h = (e as any)[0];
  const [g, f]: any = ((q as any).useState as any)(h),
    m: any = ((q as any).useRef as any)(!1);
  let y: any, p: any, j: any, x: any;
  if (((e as any)[1] as any) !== (l as any) || ((e as any)[2] as any) !== (n as any) || ((e as any)[3] as any) !== (g as any) || ((e as any)[4] as any) !== (r as any) || ((e as any)[5] as any) !== (i as any) || ((e as any)[6] as any) !== (c as any) || ((e as any)[7] as any) !== (o as any)) {
    const re: any = n ?? [],
      K: any = (Re as any)(re),
      pe: any = (fs as any)(K),
      ee: any = o ?? new (Set as any)(((K as any).map as any)(Ks));
    j = (ee as any).size;
    const Se: any = (Ae as any)(((c as any).trim as any)(), ($e as any)()),
      ke: any = (Se as any) !== ("" as any),
      ve: any = ((pe as any).flatMap as any)((b: any): any => {
        const R: any = (((b as any).hosts as any).filter as any)((N: any): any => (Ws as any)(N, Se));
        return ((R as any).length as any) === (0 as any) ? [] : [{
          profile: b,
          shownHosts: R
        }];
      }),
      Ue: any = (Ce as any)(g, pe),
      Ye: any = (b: any, R: any): any => {
        (u as any)((N: any): any => {
          const B: any = N ?? new (Set as any)(((K as any).map as any)(Bs)),
            D: any = new (Set as any)(B);
          return R ? ((D as any).add as any)(b) : ((D as any).delete as any)(b), D;
        });
      },
      Je: any = (b: any, R: any): any => {
        (u as any)((N: any): any => {
          const B: any = N ?? new (Set as any)(((K as any).map as any)(Fs)),
            D: any = new (Set as any)(B);
          for (const O of b) R ? ((D as any).add as any)((O as any).key) : ((D as any).delete as any)((O as any).key);
          return D;
        });
      },
      es: any = (b: any): any => {
        ke || (f as any)((R: any): any => ({
          kind: "chosen",
          profileId: ((Ce as any)(R, pe) as any) === (b as any) ? null : b
        }));
      };
    if (y = (): any => {
      (m as any).current || (j as any) === (0 as any) || ((m as any).current = !0, (i as any)((Ls as any)(re, ee)));
    }, (n as any) == (null as any)) {
      let b: any;
      ((e as any)[12] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (b = ((t as any).jsx as any)(v, {
        id: "1O0Zig"
      }), (e as any)[12] = b) : b = (e as any)[12], x = b;
    } else if (((K as any).length as any) === (0 as any)) {
      let b: any;
      ((e as any)[13] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (b = ((t as any).jsx as any)(v, {
        id: "t5RKFj"
      }), (e as any)[13] = b) : b = (e as any)[13], x = b;
    } else x = (l as any)({
      id: "gD6YFu",
      values: {
        0: (K as any).length
      }
    });
    if ((n as any) == (null as any)) {
      let b: any;
      ((e as any)[14] as any) !== (l as any) ? (b = (l as any)({
        id: "i2NxmJ"
      }), (e as any)[14] = l, (e as any)[15] = b) : b = (e as any)[15];
      let R: any;
      ((e as any)[16] as any) !== (b as any) ? (R = ((t as any).jsx as any)(te, {
        role: "status",
        children: b
      }), (e as any)[16] = b, (e as any)[17] = R) : R = (e as any)[17], p = R;
    } else if (((K as any).length as any) === (0 as any)) {
      let b: any;
      ((e as any)[18] as any) !== (l as any) ? (b = (l as any)({
        id: "DxrY/W"
      }), (e as any)[18] = l, (e as any)[19] = b) : b = (e as any)[19];
      let R: any;
      ((e as any)[20] as any) !== (b as any) ? (R = ((t as any).jsx as any)(te, {
        role: "status",
        children: b
      }), (e as any)[20] = b, (e as any)[21] = R) : R = (e as any)[21], p = R;
    } else {
      let b: any;
      ((e as any)[22] as any) !== (l as any) ? (b = (l as any)({
        id: "2R65Ge"
      }), (e as any)[22] = l, (e as any)[23] = b) : b = (e as any)[23];
      let R: any;
      ((e as any)[24] as any) !== (c as any) || ((e as any)[25] as any) !== (b as any) ? (R = ((t as any).jsx as any)(Te, {
        onQueryChange: d,
        placeholder: b,
        query: c
      }), (e as any)[24] = c, (e as any)[25] = b, (e as any)[26] = R) : R = (e as any)[26];
      let N: any, B: any;
      ((e as any)[27] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (N = {
        className: "sand-78zum5 sand-dt5ytf sand-2lah0s"
      }, B = {
        className: "sand-78zum5 sand-dt5ytf sand-2lah0s sand-13ly8rp sand-1xlntvz sand-4hv7ue sand-1y0btm7 sand-fnq37j sand-hojbe8"
      }, (e as any)[27] = N, (e as any)[28] = B) : (N = (e as any)[27], B = (e as any)[28]);
      const D: any = ((ve as any).length as any) === (0 as any) ? ((t as any).jsx as any)("div", {
        ...(J as any)(($ as any).body1, (A as any).empty),
        role: "status",
        children: ((t as any).jsx as any)(v, {
          id: "Ev2r9A"
        })
      }) : ((ve as any).map as any)((ss: any): any => {
        const {
            profile: V,
            shownHosts: ge
          }: any = ss,
          U: any = (V as any).profileDisplayName,
          _e: any = (qs as any)((V as any).profileId),
          se: any = ke || (Ue as any) === ((V as any).profileId as any),
          ye: any = ((ge as any).every as any)((Y: any): any => ((ee as any).has as any)((Y as any).key)),
          ts: any = (Os as any)((V as any).hosts, ee);
        return ((t as any).jsxs as any)("div", {
          children: [((t as any).jsxs as any)("div", {
            className: "sand-1n2onr6 sand-rvj5dj sand-8sxmsg sand-6s0dn4 sand-fex06f sand-oyc9vk sand-1fg0g13 sand-2lprc sand-1tajz9i",
            children: [ke ? null : ((t as any).jsx as any)("button", {
              className: "sand-jyslct sand-1lugfcp sand-10l6tqk sand-13vifvy sand-tijo5x sand-1ey2m1c sand-1o0tod sand-h8yej3 sand-5yr21d sand-exx8yu sand-yri2b sand-18d9i69 sand-1c1uobl sand-c342km sand-1qmwy7c sand-t08umf sand-1t137rt sand-9v5kkp sand-4sht9k sand-1g40iwv sand-jbqb8w sand-1ypdohk",
              "aria-controls": se ? _e : void 0,
              "aria-expanded": se,
              "aria-label": (l as any)(se ? {
                id: "WfH+Jc",
                values: {
                  name: U
                }
              } : {
                id: "MTKAIK",
                values: {
                  name: U
                }
              }),
              onClick: (): any => (es as any)((V as any).profileId),
              type: "button"
            }), ((t as any).jsxs as any)("div", {
              className: "sand-78zum5 sand-dt5ytf sand-gkxs2y sand-xhr3t sand-euugli sand-47corl",
              children: [((t as any).jsx as any)("p", {
                ...(J as any)(($ as any).body2, (A as any).profileName),
                children: U
              }), ((t as any).jsx as any)("p", {
                ...(J as any)(($ as any).body2, (A as any).profileMeta),
                children: ((ls as any)._ as any)({
                  id: "O2Py6m",
                  values: {
                    cookieCount: ts
                  }
                })
              })]
            }), ((t as any).jsx as any)(Q, {
              "aria-label": (l as any)(ye ? {
                id: "8/Aml1",
                values: {
                  name: U
                }
              } : {
                id: "1gbiYF",
                values: {
                  name: U
                }
              }),
              onClick: (): any => (Je as any)(ge, !ye),
              size: "sm",
              style: [(A as any).deselect, ($ as any).body2, (ms as any).controlEdge],
              type: "button",
              variant: "secondary",
              children: (l as any)(ye ? {
                id: "U+R4tW"
              } : {
                id: "wgNoIs"
              })
            }), ((t as any).jsx as any)(Ie, {
              name: se ? "chevron-down" : "chevron-right",
              size: "sm",
              style: (A as any).chevron
            })]
          }), se ? ((t as any).jsx as any)(Rs, {
            "aria-label": U,
            contentStyle: (A as any).siteListContent,
            id: _e,
            maxHeight: 182,
            role: "group",
            rootStyle: (A as any).siteList,
            scrollbarVisibility: "hover",
            children: ((ge as any).map as any)((Y: any): any => ((t as any).jsxs as any)("label", {
              className: "sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-euugli sand-1ypdohk",
              children: [((t as any).jsx as any)(is, {
                isChecked: ((ee as any).has as any)((Y as any).key),
                onChange: (ns: any): any => (Ye as any)((Y as any).key, ns)
              }), ((t as any).jsx as any)("span", {
                ...(J as any)(($ as any).body2, (A as any).profileName),
                children: (Y as any).host
              })]
            }, (Y as any).key))
          }) : null]
        }, (V as any).profileId);
      });
      let O: any;
      ((e as any)[29] as any) !== (D as any) ? (O = ((t as any).jsx as any)("div", {
        ...B,
        children: D
      }), (e as any)[29] = D, (e as any)[30] = O) : O = (e as any)[30];
      let oe: any;
      ((e as any)[31] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (oe = (J as any)(($ as any).label, (A as any).helper), (e as any)[31] = oe) : oe = (e as any)[31];
      let G: any;
      ((e as any)[32] as any) !== (r as any) ? (G = ((t as any).jsx as any)("p", {
        ...oe,
        children: r ? ((t as any).jsx as any)(v, {
          id: "N8GWP2"
        }) : ((t as any).jsx as any)(v, {
          id: "SrIXTu"
        })
      }), (e as any)[32] = r, (e as any)[33] = G) : G = (e as any)[33];
      let Z: any;
      ((e as any)[34] as any) !== (G as any) || ((e as any)[35] as any) !== (O as any) ? (Z = ((t as any).jsxs as any)("div", {
        ...N,
        children: [O, G]
      }), (e as any)[34] = G, (e as any)[35] = O, (e as any)[36] = Z) : Z = (e as any)[36];
      let de: any;
      ((e as any)[37] as any) !== (Z as any) || ((e as any)[38] as any) !== (R as any) ? (de = ((t as any).jsxs as any)((t as any).Fragment, {
        children: [R, Z]
      }), (e as any)[37] = Z, (e as any)[38] = R, (e as any)[39] = de) : de = (e as any)[39], p = de;
    }
    (e as any)[1] = l, (e as any)[2] = n, (e as any)[3] = g, (e as any)[4] = r, (e as any)[5] = i, (e as any)[6] = c, (e as any)[7] = o, (e as any)[8] = y, (e as any)[9] = p, (e as any)[10] = j, (e as any)[11] = x;
  } else y = (e as any)[8], p = (e as any)[9], j = (e as any)[10], x = (e as any)[11];
  let k: any;
  ((e as any)[40] as any) !== (a as any) ? (k = (re: any): any => {
    re || (a as any)();
  }, (e as any)[40] = a, (e as any)[41] = k) : k = (e as any)[41];
  let w: any;
  ((e as any)[42] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (w = [($ as any).body1, (fe as any).medium], (e as any)[42] = w) : w = (e as any)[42];
  let C: any;
  ((e as any)[43] as any) !== (x as any) ? (C = ((t as any).jsx as any)((z as any).Title, {
    style: w,
    children: x
  }), (e as any)[43] = x, (e as any)[44] = C) : C = (e as any)[44];
  let I: any, _: any;
  ((e as any)[45] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (I = ((t as any).jsx as any)((z as any).Description, {
    style: [($ as any).body1, (A as any).description],
    children: ((t as any).jsx as any)(v, {
      id: "rT1HKu"
    })
  }), _ = ((t as any).jsx as any)((z as any).CloseButton, {}), (e as any)[45] = I, (e as any)[46] = _) : (I = (e as any)[45], _ = (e as any)[46]);
  let S: any;
  ((e as any)[47] as any) !== (C as any) ? (S = ((t as any).jsxs as any)((z as any).Header, {
    style: (A as any).header,
    children: [C, I, _]
  }), (e as any)[47] = C, (e as any)[48] = S) : S = (e as any)[48];
  let T: any;
  ((e as any)[49] as any) !== (p as any) ? (T = ((t as any).jsx as any)((z as any).Body, {
    style: (A as any).pickBody,
    children: p
  }), (e as any)[49] = p, (e as any)[50] = T) : T = (e as any)[50];
  let P: any;
  ((e as any)[51] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (P = ((t as any).jsx as any)(v, {
    id: "dEgA5A"
  }), (e as any)[51] = P) : P = (e as any)[51];
  let E: any;
  ((e as any)[52] as any) !== (a as any) ? (E = ((t as any).jsx as any)((z as any).Action, {
    onClick: a,
    children: P
  }), (e as any)[52] = a, (e as any)[53] = E) : E = (e as any)[53];
  const F: any = (j as any) === (0 as any);
  let ie: any;
  ((e as any)[54] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ie = ((t as any).jsx as any)(v, {
    id: "r7Ey/Z"
  }), (e as any)[54] = ie) : ie = (e as any)[54];
  let X: any;
  ((e as any)[55] as any) !== (y as any) || ((e as any)[56] as any) !== (F as any) ? (X = ((t as any).jsx as any)((z as any).Action, {
    disabled: F,
    onClick: y,
    variant: "primary",
    children: ie
  }), (e as any)[55] = y, (e as any)[56] = F, (e as any)[57] = X) : X = (e as any)[57];
  let H: any;
  ((e as any)[58] as any) !== (E as any) || ((e as any)[59] as any) !== (X as any) ? (H = ((t as any).jsxs as any)((z as any).ActionBar, {
    style: (A as any).pickActions,
    children: [E, X]
  }), (e as any)[58] = E, (e as any)[59] = X, (e as any)[60] = H) : H = (e as any)[60];
  let ae: any;
  return ((e as any)[61] as any) !== (H as any) || ((e as any)[62] as any) !== (k as any) || ((e as any)[63] as any) !== (S as any) || ((e as any)[64] as any) !== (T as any) ? (ae = ((t as any).jsxs as any)((z as any).Root, {
    onOpenChange: k,
    open: !0,
    surfaceStyle: (A as any).pickSurface,
    variant: "rich",
    width: 520,
    children: [S, T, H]
  }), (e as any)[61] = H, (e as any)[62] = k, (e as any)[63] = S, (e as any)[64] = T, (e as any)[65] = ae) : ae = (e as any)[65], ae;
}
function Fs(this: any, s: any): any {
  return (s as any).key;
}
function Bs(this: any, s: any): any {
  return (s as any).key;
}
function Ks(this: any, s: any): any {
  return (s as any).key;
}
function Ne(this: any): any {
  (Ne as any).d = 1253;
  const s: any = ((M as any).c as any)(6),
    {
      _: e
    }: any = (L as any)();
  let n: any;
  ((s as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = ((t as any).jsx as any)((z as any).Title, {
    style: [($ as any).body1, (fe as any).medium],
    children: ((t as any).jsx as any)(v, {
      id: "y0nv6p"
    })
  }), (s as any)[0] = n) : n = (s as any)[0];
  let i: any;
  ((s as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (i = ((t as any).jsxs as any)((z as any).Header, {
    style: (A as any).header,
    children: [n, ((t as any).jsx as any)((z as any).Description, {
      style: [($ as any).body1, (A as any).description],
      children: ((t as any).jsx as any)(v, {
        id: "loJtyj"
      })
    })]
  }), (s as any)[1] = i) : i = (s as any)[1];
  let a: any;
  ((s as any)[2] as any) !== (e as any) ? (a = (e as any)({
    id: "skj9zM"
  }), (s as any)[2] = e, (s as any)[3] = a) : a = (s as any)[3];
  let l: any;
  return ((s as any)[4] as any) !== (a as any) ? (l = ((t as any).jsxs as any)((z as any).Root, {
    closeOnBackdropClick: !1,
    closeOnEscape: !1,
    closeOnOutsidePress: !1,
    open: !0,
    variant: "rich",
    width: 520,
    children: [i, ((t as any).jsx as any)((z as any).ActionBar, {
      children: ((t as any).jsx as any)((z as any).Action, {
        disabled: !0,
        pending: !0,
        variant: "primary",
        children: a
      })
    })]
  }), (s as any)[4] = a, (s as any)[5] = l) : l = (s as any)[5], l;
}
function Qs(this: any, s: any): any {
  switch (s) {
    case "empty-selection":
      return {
        title: ((t as any).jsx as any)(v, {
          id: "IDhw1X"
        }),
        description: ((t as any).jsx as any)(v, {
          id: "eJgdna"
        })
      };
    case "allow-id-mismatch":
      return {
        title: ((t as any).jsx as any)(v, {
          id: "IDhw1X"
        }),
        description: ((t as any).jsx as any)(v, {
          id: "CIrATl"
        })
      };
    case "host-chrome-locked":
      return {
        title: ((t as any).jsx as any)(v, {
          id: "IDhw1X"
        }),
        description: ((t as any).jsx as any)(v, {
          id: "xgJuol"
        })
      };
    case "read-empty":
      return {
        title: ((t as any).jsx as any)(v, {
          id: "IDhw1X"
        }),
        description: ((t as any).jsx as any)(v, {
          id: "0D4tUx"
        })
      };
    case "chrome-open-cdp-missing":
      return {
        title: ((t as any).jsx as any)(v, {
          id: "Wrr903"
        }),
        description: ((t as any).jsx as any)(v, {
          id: "tFOc7D"
        })
      };
    case "inject-rejected":
      return {
        title: ((t as any).jsx as any)(v, {
          id: "IDhw1X"
        }),
        description: ((t as any).jsx as any)(v, {
          id: "MUQf5o"
        })
      };
  }
}
function De(this: any, s: any): any {
  (De as any).d = 1254;
  const e: any = ((M as any).c as any)(35),
    {
      imported: n,
      sites: i,
      undecryptable: a,
      dbscWarning: l,
      skipReason: r,
      onClose: o
    }: any = s,
    {
      _: u
    }: any = (L as any)(),
    c: any = (n as any) === (0 as any),
    d: any = (r as any) === ("none" as any) || (r as any) === ("chrome-closed" as any) ? "read-empty" : r;
  let h: any;
  ((e as any)[0] as any) !== (d as any) ? (h = (Qs as any)(d), (e as any)[0] = d, (e as any)[1] = h) : h = (e as any)[1];
  const g: any = h;
  let f: any;
  ((e as any)[2] as any) !== (o as any) ? (f = (P: any): any => {
    P || (o as any)();
  }, (e as any)[2] = o, (e as any)[3] = f) : f = (e as any)[3];
  let m: any;
  ((e as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (m = [($ as any).body1, (fe as any).medium], (e as any)[4] = m) : m = (e as any)[4];
  let y: any;
  ((e as any)[5] as any) !== (g as any) || ((e as any)[6] as any) !== (c as any) ? (y = c ? (g as any).title : ((t as any).jsx as any)(v, {
    id: "6DuwlP"
  }), (e as any)[5] = g, (e as any)[6] = c, (e as any)[7] = y) : y = (e as any)[7];
  let p: any;
  ((e as any)[8] as any) !== (y as any) ? (p = ((t as any).jsx as any)((z as any).Title, {
    style: m,
    children: y
  }), (e as any)[8] = y, (e as any)[9] = p) : p = (e as any)[9];
  let j: any;
  ((e as any)[10] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (j = [($ as any).body1, (A as any).description], (e as any)[10] = j) : j = (e as any)[10];
  let x: any;
  ((e as any)[11] as any) !== (u as any) || ((e as any)[12] as any) !== (g as any) || ((e as any)[13] as any) !== (n as any) || ((e as any)[14] as any) !== (c as any) || ((e as any)[15] as any) !== (i as any) ? (x = c ? (g as any).description : (u as any)({
    id: "9jczxJ",
    values: {
      imported: n,
      sites: i
    }
  }), (e as any)[11] = u, (e as any)[12] = g, (e as any)[13] = n, (e as any)[14] = c, (e as any)[15] = i, (e as any)[16] = x) : x = (e as any)[16];
  let k: any;
  ((e as any)[17] as any) !== (x as any) ? (k = ((t as any).jsx as any)((z as any).Description, {
    style: j,
    children: x
  }), (e as any)[17] = x, (e as any)[18] = k) : k = (e as any)[18];
  let w: any;
  ((e as any)[19] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (w = ((t as any).jsx as any)((z as any).CloseButton, {}), (e as any)[19] = w) : w = (e as any)[19];
  let C: any;
  ((e as any)[20] as any) !== (p as any) || ((e as any)[21] as any) !== (k as any) ? (C = ((t as any).jsxs as any)((z as any).Header, {
    style: (A as any).header,
    children: [p, k, w]
  }), (e as any)[20] = p, (e as any)[21] = k, (e as any)[22] = C) : C = (e as any)[22];
  let I: any;
  ((e as any)[23] as any) !== (u as any) || ((e as any)[24] as any) !== (l as any) || ((e as any)[25] as any) !== (a as any) ? (I = (a as any) > (0 as any) || l ? ((t as any).jsx as any)((z as any).Body, {
    children: ((t as any).jsxs as any)("div", {
      className: "sand-78zum5 sand-dt5ytf sand-883omv",
      children: [(a as any) > (0 as any) ? ((t as any).jsx as any)(te, {
        children: (u as any)({
          id: "CNQb0t",
          values: {
            undecryptable: a
          }
        })
      }) : null, l ? ((t as any).jsx as any)(te, {
        role: "alert",
        children: ((t as any).jsx as any)(v, {
          id: "uEtCpR"
        })
      }) : null]
    })
  }) : null, (e as any)[23] = u, (e as any)[24] = l, (e as any)[25] = a, (e as any)[26] = I) : I = (e as any)[26];
  let _: any;
  ((e as any)[27] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (_ = ((t as any).jsx as any)(v, {
    id: "DPfwMq"
  }), (e as any)[27] = _) : _ = (e as any)[27];
  let S: any;
  ((e as any)[28] as any) !== (o as any) ? (S = ((t as any).jsx as any)((z as any).ActionBar, {
    children: ((t as any).jsx as any)((z as any).Action, {
      onClick: o,
      variant: "primary",
      children: _
    })
  }), (e as any)[28] = o, (e as any)[29] = S) : S = (e as any)[29];
  let T: any;
  return ((e as any)[30] as any) !== (C as any) || ((e as any)[31] as any) !== (I as any) || ((e as any)[32] as any) !== (S as any) || ((e as any)[33] as any) !== (f as any) ? (T = ((t as any).jsxs as any)((z as any).Root, {
    onOpenChange: f,
    open: !0,
    variant: "rich",
    width: 520,
    children: [C, I, S]
  }), (e as any)[30] = C, (e as any)[31] = I, (e as any)[32] = S, (e as any)[33] = f, (e as any)[34] = T) : T = (e as any)[34], T;
}
function qe(this: any, s: any): any {
  (qe as any).d = 1250;
  const e: any = ((M as any).c as any)(28),
    {
      reason: n,
      failure: i,
      onRetry: a,
      onClose: l
    }: any = s,
    r: any = (((ue as any)() as any).platform as any) === ("darwin" as any),
    o: any = (n as any) === ("list-cookies" as any),
    u: any = r && (us as any)(i);
  let c: any;
  if (u) {
    let _: any;
    ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (_ = ((t as any).jsx as any)(v, {
      id: "xibDFX"
    }), (e as any)[0] = _) : _ = (e as any)[0], c = _;
  } else if (o) {
    let _: any;
    ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (_ = ((t as any).jsx as any)(v, {
      id: "bRLZyA"
    }), (e as any)[1] = _) : _ = (e as any)[1], c = _;
  } else {
    let _: any;
    ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (_ = ((t as any).jsx as any)(v, {
      id: "4nmIIy"
    }), (e as any)[2] = _) : _ = (e as any)[2], c = _;
  }
  let d: any;
  ((e as any)[3] as any) !== (l as any) ? (d = (_: any): any => {
    _ || (l as any)();
  }, (e as any)[3] = l, (e as any)[4] = d) : d = (e as any)[4];
  let h: any;
  ((e as any)[5] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (h = [($ as any).body1, (fe as any).medium], (e as any)[5] = h) : h = (e as any)[5];
  let g: any;
  ((e as any)[6] as any) !== (o as any) ? (g = ((t as any).jsx as any)((z as any).Title, {
    style: h,
    children: o ? ((t as any).jsx as any)(v, {
      id: "YQhH4p"
    }) : ((t as any).jsx as any)(v, {
      id: "Wrr903"
    })
  }), (e as any)[6] = o, (e as any)[7] = g) : g = (e as any)[7];
  let f: any;
  ((e as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = [($ as any).body1, (A as any).description], (e as any)[8] = f) : f = (e as any)[8];
  let m: any;
  ((e as any)[9] as any) !== (c as any) ? (m = ((t as any).jsx as any)((z as any).Description, {
    style: f,
    children: c
  }), (e as any)[9] = c, (e as any)[10] = m) : m = (e as any)[10];
  let y: any;
  ((e as any)[11] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (y = ((t as any).jsx as any)((z as any).CloseButton, {}), (e as any)[11] = y) : y = (e as any)[11];
  let p: any;
  ((e as any)[12] as any) !== (g as any) || ((e as any)[13] as any) !== (m as any) ? (p = ((t as any).jsxs as any)((z as any).Header, {
    style: (A as any).header,
    children: [g, m, y]
  }), (e as any)[12] = g, (e as any)[13] = m, (e as any)[14] = p) : p = (e as any)[14];
  let j: any;
  ((e as any)[15] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (j = ((t as any).jsx as any)(v, {
    id: "yz7wBu"
  }), (e as any)[15] = j) : j = (e as any)[15];
  let x: any;
  ((e as any)[16] as any) !== (l as any) ? (x = ((t as any).jsx as any)((z as any).Action, {
    onClick: l,
    children: j
  }), (e as any)[16] = l, (e as any)[17] = x) : x = (e as any)[17];
  let k: any;
  ((e as any)[18] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (k = ((t as any).jsx as any)(v, {
    id: "6gRgw8"
  }), (e as any)[18] = k) : k = (e as any)[18];
  let w: any;
  ((e as any)[19] as any) !== (a as any) ? (w = ((t as any).jsx as any)((z as any).Action, {
    onClick: a,
    variant: "primary",
    children: k
  }), (e as any)[19] = a, (e as any)[20] = w) : w = (e as any)[20];
  let C: any;
  ((e as any)[21] as any) !== (w as any) || ((e as any)[22] as any) !== (x as any) ? (C = ((t as any).jsxs as any)((z as any).ActionBar, {
    children: [x, w]
  }), (e as any)[21] = w, (e as any)[22] = x, (e as any)[23] = C) : C = (e as any)[23];
  let I: any;
  return ((e as any)[24] as any) !== (d as any) || ((e as any)[25] as any) !== (C as any) || ((e as any)[26] as any) !== (p as any) ? (I = ((t as any).jsxs as any)((z as any).Root, {
    onOpenChange: d,
    open: !0,
    variant: "rich",
    width: 520,
    children: [p, C]
  }), (e as any)[24] = d, (e as any)[25] = C, (e as any)[26] = p, (e as any)[27] = I) : I = (e as any)[27], I;
}
function Le(this: any, s: any): any {
  (Le as any).d = 1251;
  const e: any = ((M as any).c as any)(22),
    {
      step: n,
      store: i,
      setStep: a,
      onRetry: l
    }: any = s;
  let r: any;
  ((e as any)[0] as any) !== (a as any) ? (r = (): any => (a as any)(null), (e as any)[0] = a, (e as any)[1] = r) : r = (e as any)[1];
  const o: any = r;
  let u: any;
  ((e as any)[2] as any) !== (a as any) || ((e as any)[3] as any) !== (i as any) ? (u = (d: any): any => {
    (a as any)({
      kind: "progress"
    }), ((((i as any).importFrom as any)(d) as any).then as any)((h: any): any => {
      (a as any)((g: any): any => (g?.kind as any) !== ("progress" as any) ? g : ((h as any).kind as any) === ("imported" as any) ? {
        kind: "result",
        ...(hs as any)((h as any).result),
        undecryptable: ((h as any).result as any).undecryptable,
        dbscWarning: ((h as any).result as any).dbscWarning,
        skipReason: ((h as any).result as any).skipReason
      } : {
        kind: "failed",
        reason: "import-cookies",
        failure: (h as any).failure
      });
    });
  }, (e as any)[2] = a, (e as any)[3] = i, (e as any)[4] = u) : u = (e as any)[4];
  const c: any = u;
  switch ((n as any).kind) {
    case "pick":
      {
        let d: any;
        return ((e as any)[5] as any) !== (o as any) || ((e as any)[6] as any) !== (c as any) || ((e as any)[7] as any) !== ((n as any).cookies as any) ? (d = ((t as any).jsx as any)(Pe, {
          cookies: (n as any).cookies,
          onClose: o,
          onImport: c
        }), (e as any)[5] = o, (e as any)[6] = c, (e as any)[7] = (n as any).cookies, (e as any)[8] = d) : d = (e as any)[8], d;
      }
    case "progress":
      {
        let d: any;
        return ((e as any)[9] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = ((t as any).jsx as any)(Ne, {}), (e as any)[9] = d) : d = (e as any)[9], d;
      }
    case "result":
      {
        let d: any;
        return ((e as any)[10] as any) !== (o as any) || ((e as any)[11] as any) !== ((n as any).dbscWarning as any) || ((e as any)[12] as any) !== ((n as any).imported as any) || ((e as any)[13] as any) !== ((n as any).sites as any) || ((e as any)[14] as any) !== ((n as any).skipReason as any) || ((e as any)[15] as any) !== ((n as any).undecryptable as any) ? (d = ((t as any).jsx as any)(De, {
          dbscWarning: (n as any).dbscWarning,
          imported: (n as any).imported,
          onClose: o,
          sites: (n as any).sites,
          skipReason: (n as any).skipReason,
          undecryptable: (n as any).undecryptable
        }), (e as any)[10] = o, (e as any)[11] = (n as any).dbscWarning, (e as any)[12] = (n as any).imported, (e as any)[13] = (n as any).sites, (e as any)[14] = (n as any).skipReason, (e as any)[15] = (n as any).undecryptable, (e as any)[16] = d) : d = (e as any)[16], d;
      }
    case "failed":
      {
        let d: any;
        return ((e as any)[17] as any) !== (o as any) || ((e as any)[18] as any) !== (l as any) || ((e as any)[19] as any) !== ((n as any).failure as any) || ((e as any)[20] as any) !== ((n as any).reason as any) ? (d = ((t as any).jsx as any)(qe, {
          failure: (n as any).failure,
          onClose: o,
          onRetry: l,
          reason: (n as any).reason
        }), (e as any)[17] = o, (e as any)[18] = l, (e as any)[19] = (n as any).failure, (e as any)[20] = (n as any).reason, (e as any)[21] = d) : d = (e as any)[21], d;
      }
  }
}
function Oe(this: any): any {
  (Oe as any).d = 1248;
  const s: any = ((M as any).c as any)(23),
    {
      _: e
    }: any = (L as any)(),
    n: any = (be as any)("sand_import_chrome_cookies"),
    i: any = (ds as any)(),
    a: any = ((ue as any)() as any).platform,
    [l, r]: any = ((q as any).useState as any)(null),
    o: any = ((q as any).useRef as any)(0);
  if (!n || !(i as any).available || !(cs as any)(a)) return null;
  let u: any;
  ((s as any)[0] as any) !== (i as any) ? (u = (): any => {
    const x: any = ((o as any).current as any) + (1 as any);
    (o as any).current = x, (r as any)({
      kind: "pick",
      cookies: null,
      generation: x
    }), ((((i as any).listCookieAllowItems as any)() as any).then as any)((k: any): any => {
      (r as any)((w: any): any => (Ds as any)(w, k, x));
    });
  }, (s as any)[0] = i, (s as any)[1] = u) : u = (s as any)[1];
  const c: any = u;
  let d: any;
  ((s as any)[2] as any) !== (e as any) ? (d = (e as any)({
    id: "30XQ+/"
  }), (s as any)[2] = e, (s as any)[3] = d) : d = (s as any)[3];
  let h: any;
  ((s as any)[4] as any) !== (e as any) ? (h = (e as any)({
    id: "3EQoxv"
  }), (s as any)[4] = e, (s as any)[5] = h) : h = (s as any)[5];
  let g: any;
  ((s as any)[6] as any) !== (e as any) ? (g = (e as any)({
    id: "1O0Zig"
  }), (s as any)[6] = e, (s as any)[7] = g) : g = (s as any)[7];
  let f: any;
  ((s as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = ((t as any).jsx as any)(v, {
    id: "l3s5ri"
  }), (s as any)[8] = f) : f = (s as any)[8];
  let m: any;
  ((s as any)[9] as any) !== (c as any) ? (m = ((t as any).jsx as any)(Q, {
    onClick: c,
    size: "md",
    style: ($ as any).body2,
    type: "button",
    variant: "secondary",
    children: f
  }), (s as any)[9] = c, (s as any)[10] = m) : m = (s as any)[10];
  let y: any;
  ((s as any)[11] as any) !== (h as any) || ((s as any)[12] as any) !== (g as any) || ((s as any)[13] as any) !== (m as any) ? (y = ((t as any).jsx as any)(W, {
    anchorId: "chrome-cookie-import",
    description: h,
    label: g,
    variant: "card",
    children: m
  }), (s as any)[11] = h, (s as any)[12] = g, (s as any)[13] = m, (s as any)[14] = y) : y = (s as any)[14];
  let p: any;
  ((s as any)[15] as any) !== (c as any) || ((s as any)[16] as any) !== (l as any) || ((s as any)[17] as any) !== (i as any) ? (p = (l as any) == (null as any) ? null : ((t as any).jsx as any)(Le, {
    onRetry: c,
    setStep: r,
    step: l,
    store: i
  }), (s as any)[15] = c, (s as any)[16] = l, (s as any)[17] = i, (s as any)[18] = p) : p = (s as any)[18];
  let j: any;
  return ((s as any)[19] as any) !== (d as any) || ((s as any)[20] as any) !== (y as any) || ((s as any)[21] as any) !== (p as any) ? (j = ((t as any).jsxs as any)(he, {
    title: d,
    children: [y, p]
  }), (s as any)[19] = d, (s as any)[20] = y, (s as any)[21] = p, (s as any)[22] = j) : j = (s as any)[22], j;
}
function We(this: any, s: any): any {
  (We as any).d = 1318;
  const e: any = ((M as any).c as any)(10),
    {
      children: n
    }: any = s,
    i: any = (As as any)();
  let a: any;
  ((e as any)[0] as any) !== (i as any) ? (a = (d: any): any => {
    ((d as any).preventDefault as any)(), ((i as any).open as any)((as as any)("updates", {
      focusSetting: {
        anchor: "update-computer",
        arrival: ((Date as any).now as any)()
      }
    }));
  }, (e as any)[0] = i, (e as any)[1] = a) : a = (e as any)[1];
  const l: any = a;
  let r: any, o: any;
  ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (r = {
    className: "sand-kbann2 sand-1ypdohk sand-ujl8zx"
  }, o = (ks as any)("update-computer"), (e as any)[2] = r, (e as any)[3] = o) : (r = (e as any)[2], o = (e as any)[3]);
  let u: any;
  ((e as any)[4] as any) !== (l as any) ? (u = (d: any): any => {
    ((d as any).button as any) === (1 as any) && (l as any)(d);
  }, (e as any)[4] = l, (e as any)[5] = u) : u = (e as any)[5];
  let c: any;
  return ((e as any)[6] as any) !== (n as any) || ((e as any)[7] as any) !== (l as any) || ((e as any)[8] as any) !== (u as any) ? (c = ((t as any).jsx as any)("a", {
    ...r,
    href: o,
    onAuxClick: u,
    onClick: l,
    children: n
  }), (e as any)[6] = n, (e as any)[7] = l, (e as any)[8] = u, (e as any)[9] = c) : c = (e as any)[9], c;
}
function Xs(this: any, s: any, e: any): any {
  switch ((e as any).state) {
    case "connected":
      return (s as any)({
        id: "4s4XZC",
        values: {
          0: (e as any).relayedStreams
        }
      });
    case "connecting":
      return (s as any)({
        id: "bRhqyb"
      });
    case "off":
      return (s as any)({
        id: "kxkRej"
      });
    case "standby":
      return (s as any)({
        id: "1Pw5TN"
      });
  }
}
function Fe(this: any): any {
  (Fe as any).d = 1272;
  const s: any = ((M as any).c as any)(30),
    {
      _: e
    }: any = (L as any)(),
    {
      _: n
    }: any = (L as any)(),
    i: any = (be as any)("sand_box_egress_tunnel"),
    a: any = (gs as any)(),
    l: any = (ys as any)(),
    r: any = (xs as any)();
  (ne as any)((((le as any)() as any).teamPolicy as any).load);
  const o: any = (Es as any)(),
    u: any = (o as any) !== ("held" as any),
    {
      setEnabled: c,
      isPending: d,
      failure: h
    }: any = (js as any)(),
    g: any = i && a;
  let f: any;
  if ((h as any) != (null as any)) {
    let S: any;
    ((s as any)[0] as any) !== (n as any) ? (S = (n as any)({
      id: "QqKsGg"
    }), (s as any)[0] = n, (s as any)[1] = S) : S = (s as any)[1], f = S;
  } else if (u && l) {
    let S: any;
    ((s as any)[2] as any) !== (e as any) || ((s as any)[3] as any) !== (r as any) ? (S = (Xs as any)(e, r), (s as any)[2] = e, (s as any)[3] = r, (s as any)[4] = S) : S = (s as any)[4], f = S;
  } else if (g) {
    let S: any;
    ((s as any)[5] as any) !== (n as any) ? (S = (n as any)({
      id: "n25eM1"
    }), (s as any)[5] = n, (s as any)[6] = S) : S = (s as any)[6], f = S;
  } else {
    let S: any;
    ((s as any)[7] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (S = ((t as any).jsx as any)(v, {
      id: "esB4Ci",
      components: {
        0: ((t as any).jsx as any)(We, {})
      }
    }), (s as any)[7] = S) : S = (s as any)[7], f = S;
  }
  if (!(i || l)) return null;
  let m: any;
  ((s as any)[8] as any) !== (n as any) ? (m = (n as any)({
    id: "OR475H"
  }), (s as any)[8] = n, (s as any)[9] = m) : m = (s as any)[9];
  const y: any = f;
  let p: any;
  ((s as any)[10] as any) !== (n as any) || ((s as any)[11] as any) !== (o as any) ? (p = (o as any) === ("held" as any) ? {
    heldReason: (n as any)({
      id: "/Mb+jM"
    })
  } : {}, (s as any)[10] = n, (s as any)[11] = o, (s as any)[12] = p) : p = (s as any)[12];
  const j: any = u && l,
    x: any = d || (o as any) === ("unknown" as any) || !g && !l;
  let k: any;
  ((s as any)[13] as any) !== (n as any) ? (k = (n as any)({
    id: "OarWo6"
  }), (s as any)[13] = n, (s as any)[14] = k) : k = (s as any)[14];
  let w: any;
  ((s as any)[15] as any) !== (l as any) || ((s as any)[16] as any) !== (c as any) ? (w = (): any => (c as any)(!l), (s as any)[15] = l, (s as any)[16] = c, (s as any)[17] = w) : w = (s as any)[17];
  let C: any;
  ((s as any)[18] as any) !== (p as any) || ((s as any)[19] as any) !== (j as any) || ((s as any)[20] as any) !== (x as any) || ((s as any)[21] as any) !== (k as any) || ((s as any)[22] as any) !== (w as any) ? (C = ((t as any).jsx as any)(je, {
    ...p,
    isChecked: j,
    isDisabled: x,
    label: k,
    onToggle: w,
    size: "md"
  }), (s as any)[18] = p, (s as any)[19] = j, (s as any)[20] = x, (s as any)[21] = k, (s as any)[22] = w, (s as any)[23] = C) : C = (s as any)[23];
  let I: any;
  ((s as any)[24] as any) !== (f as any) || ((s as any)[25] as any) !== (C as any) ? (I = ((t as any).jsx as any)(W, {
    anchorId: "egress",
    description: y,
    variant: "card",
    children: C
  }), (s as any)[24] = f, (s as any)[25] = C, (s as any)[26] = I) : I = (s as any)[26];
  let _: any;
  return ((s as any)[27] as any) !== (m as any) || ((s as any)[28] as any) !== (I as any) ? (_ = ((t as any).jsx as any)(he, {
    title: m,
    children: I
  }), (s as any)[27] = m, (s as any)[28] = I, (s as any)[29] = _) : _ = (s as any)[29], _;
}
const ze: number = 100,
  Hs: any = {
    inputSurface: {
      kWkggS: "sand-13l7odt",
      $$css: !0
    }
  };
function Be(this: any, s: any): any {
  (Be as any).d = 1287;
  const e: any = ((M as any).c as any)(43),
    {
      machine: n,
      name: i,
      anchorId: a
    }: any = s,
    {
      _: l
    }: any = (L as any)(),
    r: any = (vs as any)(),
    [o, u]: any = ((q as any).useState as any)((n as any).label),
    [c, d]: any = ((q as any).useState as any)(null);
  let h: any;
  ((e as any)[0] as any) !== (l as any) || ((e as any)[1] as any) !== (o as any) || ((e as any)[2] as any) !== ((n as any).label as any) || ((e as any)[3] as any) !== ((n as any).machineId as any) || ((e as any)[4] as any) !== (r as any) ? (h = (E: any): any => {
    ((E as any).preventDefault as any)();
    const F: any = ((o as any).trim as any)();
    if (((F as any).length as any) === (0 as any) || (([...F] as any).length as any) > (ze as any)) {
      (d as any)((l as any)({
        id: "x0xLUo",
        values: {
          SAND_MACHINE_LABEL_MAX_LENGTH: ze
        }
      }));
      return;
    }
    (F as any) !== ((n as any).label as any) && ((d as any)(null), ((r as any).updateLabel as any)({
      machineId: (n as any).machineId,
      label: F
    }));
  }, (e as any)[0] = l, (e as any)[1] = o, (e as any)[2] = (n as any).label, (e as any)[3] = (n as any).machineId, (e as any)[4] = r, (e as any)[5] = h) : h = (e as any)[5];
  const g: any = h;
  let f: any = c;
  if ((f as any) == (null as any) && ((r as any).failure as any) != (null as any)) {
    let E: any;
    ((e as any)[6] as any) !== (l as any) ? (E = (l as any)({
      id: "QqKsGg"
    }), (e as any)[6] = l, (e as any)[7] = E) : E = (e as any)[7], f = E;
  } else if ((f as any) == (null as any) && (n as any).isCurrent) {
    let E: any;
    ((e as any)[8] as any) !== (l as any) ? (E = (l as any)({
      id: "XS+vEF"
    }), (e as any)[8] = l, (e as any)[9] = E) : E = (e as any)[9], f = E;
  }
  const m: any = f ?? void 0;
  let y: any;
  ((e as any)[10] as any) !== (l as any) || ((e as any)[11] as any) !== ((n as any).isCurrent as any) ? (y = (n as any).isCurrent ? (l as any)({
    id: "0umRmi"
  }) : (l as any)({
    id: "9lzViG"
  }), (e as any)[10] = l, (e as any)[11] = (n as any).isCurrent, (e as any)[12] = y) : y = (e as any)[12];
  let p: any, j: any;
  ((e as any)[13] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (p = {
    className: "sand-78zum5 sand-6s0dn4 sand-ehausa"
  }, j = {
    className: "sand-16grhtn"
  }, (e as any)[13] = p, (e as any)[14] = j) : (p = (e as any)[13], j = (e as any)[14]);
  let x: any;
  ((e as any)[15] as any) !== (l as any) || ((e as any)[16] as any) !== (i as any) ? (x = (l as any)({
    id: "lNfw6n",
    values: {
      name: i
    }
  }), (e as any)[15] = l, (e as any)[16] = i, (e as any)[17] = x) : x = (e as any)[17];
  let k: any;
  ((e as any)[18] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (k = (E: any): any => (u as any)(((E as any).currentTarget as any).value), (e as any)[18] = k) : k = (e as any)[18];
  let w: any;
  ((e as any)[19] as any) !== (o as any) || ((e as any)[20] as any) !== (x as any) || ((e as any)[21] as any) !== ((r as any).isPending as any) ? (w = ((t as any).jsx as any)("div", {
    ...j,
    children: ((t as any).jsx as any)(we, {
      rootStyle: (Hs as any).inputSurface,
      size: "lg",
      children: ((t as any).jsx as any)((we as any).Input, {
        "aria-label": x,
        disabled: (r as any).isPending,
        onChange: k,
        value: o
      })
    })
  }), (e as any)[19] = o, (e as any)[20] = x, (e as any)[21] = (r as any).isPending, (e as any)[22] = w) : w = (e as any)[22];
  let C: any;
  ((e as any)[23] as any) !== (l as any) || ((e as any)[24] as any) !== (i as any) ? (C = (l as any)({
    id: "FUYkYT",
    values: {
      name: i
    }
  }), (e as any)[23] = l, (e as any)[24] = i, (e as any)[25] = C) : C = (e as any)[25];
  let I: any;
  ((e as any)[26] as any) !== (o as any) || ((e as any)[27] as any) !== ((n as any).label as any) || ((e as any)[28] as any) !== ((r as any).isPending as any) ? (I = (r as any).isPending || (((o as any).trim as any)() as any) === ((n as any).label as any), (e as any)[26] = o, (e as any)[27] = (n as any).label, (e as any)[28] = (r as any).isPending, (e as any)[29] = I) : I = (e as any)[29];
  let _: any;
  ((e as any)[30] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (_ = ((t as any).jsx as any)(v, {
    id: "tfDRzk"
  }), (e as any)[30] = _) : _ = (e as any)[30];
  let S: any;
  ((e as any)[31] as any) !== (I as any) || ((e as any)[32] as any) !== (C as any) ? (S = ((t as any).jsx as any)(Q, {
    "aria-label": C,
    disabled: I,
    size: "md",
    style: ($ as any).body2,
    type: "submit",
    variant: "primary",
    children: _
  }), (e as any)[31] = I, (e as any)[32] = C, (e as any)[33] = S) : S = (e as any)[33];
  let T: any;
  ((e as any)[34] as any) !== (g as any) || ((e as any)[35] as any) !== (S as any) || ((e as any)[36] as any) !== (w as any) ? (T = ((t as any).jsxs as any)("form", {
    onSubmit: g,
    ...p,
    children: [w, S]
  }), (e as any)[34] = g, (e as any)[35] = S, (e as any)[36] = w, (e as any)[37] = T) : T = (e as any)[37];
  let P: any;
  return ((e as any)[38] as any) !== (a as any) || ((e as any)[39] as any) !== (T as any) || ((e as any)[40] as any) !== (m as any) || ((e as any)[41] as any) !== (y as any) ? (P = ((t as any).jsx as any)(W, {
    anchorId: a,
    description: m,
    label: y,
    variant: "card",
    children: T
  }), (e as any)[38] = a, (e as any)[39] = T, (e as any)[40] = m, (e as any)[41] = y, (e as any)[42] = P) : P = (e as any)[42], P;
}
function Gs(this: any, s: any, e: any): any {
  const n: any = new (Set as any)();
  return ((e as any).map as any)((i: any): any => {
    let a: any = (i as any).label;
    for (let r: any = 2; ((n as any).has as any)(a) && (r as any) <= (((n as any).size as any) + (1 as any) as any); r += 1) {
      const o: any = ((s as any).number as any)(r);
      a = ((s as any)._ as any)({
        id: "vN4XyY",
        values: {
          0: (i as any).label,
          number: o
        }
      });
    }
    ((n as any).add as any)(a);
    const l: any = (i as any).isCurrent ? ((s as any)._ as any)({
      id: "kvhz1P"
    }) : ((s as any)._ as any)({
      id: "8bwi7d",
      values: {
        name: a
      }
    });
    return {
      machine: i,
      name: a,
      executionLabel: l
    };
  });
}
function Ke(this: any): any {
  (Ke as any).d = 1288;
  const s: any = ((M as any).c as any)(31),
    {
      i18n: e,
      _: n
    }: any = (L as any)(),
    i: any = (Ee as any)(),
    a: any = (bs as any)();
  let l: any, r: any, o: any, u: any;
  if (((s as any)[0] as any) !== (n as any) || ((s as any)[1] as any) !== (e as any) || ((s as any)[2] as any) !== (a as any) || ((s as any)[3] as any) !== ((i as any).previous as any) || ((s as any)[4] as any) !== ((i as any).status as any) || ((s as any)[5] as any) !== ((i as any).value as any)) {
    let d: any = [],
      h: any = null,
      g: any = null;
    if (((i as any).status as any) === ("loading" as any)) {
      d = (i as any).previous ?? [];
      let m: any;
      ((s as any)[10] as any) !== (n as any) ? (m = (n as any)({
        id: "Pwqkdw"
      }), (s as any)[10] = n, (s as any)[11] = m) : m = (s as any)[11], h = ((t as any).jsx as any)(W, {
        anchorId: "computers",
        description: m,
        variant: "card",
        children: null
      });
    } else if (((i as any).status as any) === ("ready" as any) && (((i as any).value as any).length as any) > (0 as any)) {
      if (d = (i as any).value, !((d as any).some as any)(Zs)) {
        let m: any;
        ((s as any)[12] as any) !== (n as any) ? (m = (n as any)({
          id: "mmzR7e"
        }), (s as any)[12] = n, (s as any)[13] = m) : m = (s as any)[13], g = m;
      }
    } else if (((i as any).status as any) === ("unavailable" as any)) {
      let m: any;
      ((s as any)[14] as any) !== (n as any) ? (m = (n as any)({
        id: "0BvlbM"
      }), (s as any)[14] = n, (s as any)[15] = m) : m = (s as any)[15], h = ((t as any).jsx as any)(W, {
        anchorId: "computers",
        description: m,
        variant: "card",
        children: null
      });
    } else {
      ((i as any).status as any) === ("failed" as any) && (d = (i as any).previous ?? []);
      let m: any;
      ((s as any)[16] as any) !== (n as any) ? (m = (n as any)({
        id: "mmzR7e"
      }), (s as any)[16] = n, (s as any)[17] = m) : m = (s as any)[17], g = m;
    }
    if ((g as any) != (null as any)) {
      let m: any;
      ((s as any)[18] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (m = ((t as any).jsx as any)(v, {
        id: "6gRgw8"
      }), (s as any)[18] = m) : m = (s as any)[18];
      let y: any;
      ((s as any)[19] as any) !== ((a as any).isPending as any) || ((s as any)[20] as any) !== ((a as any).refresh as any) ? (y = ((t as any).jsx as any)(Q, {
        disabled: (a as any).isPending,
        onClick: (a as any).refresh,
        size: "md",
        style: ($ as any).body2,
        type: "button",
        variant: "secondary",
        children: m
      }), (s as any)[19] = (a as any).isPending, (s as any)[20] = (a as any).refresh, (s as any)[21] = y) : y = (s as any)[21], h = ((t as any).jsx as any)(W, {
        anchorId: "computers",
        description: g,
        variant: "card",
        children: y
      });
    }
    l = he, ((s as any)[22] as any) !== (n as any) ? (r = (n as any)({
      id: "d57qnR"
    }), (s as any)[22] = n, (s as any)[23] = r) : r = (s as any)[23], o = h;
    let f: any;
    ((s as any)[24] as any) !== (h as any) ? (f = (m: any, y: any): any => {
      const {
        machine: p,
        name: j,
        executionLabel: x
      }: any = m;
      return ((t as any).jsxs as any)((q as any).Fragment, {
        children: [((t as any).jsx as any)(Be, {
          anchorId: (h as any) == (null as any) && (y as any) === (0 as any) ? "computers" : Ss,
          machine: p,
          name: j
        }), ((t as any).jsx as any)(Ps, {
          executionLabel: x,
          machine: p
        })]
      }, (p as any).machineId);
    }, (s as any)[24] = h, (s as any)[25] = f) : f = (s as any)[25], u = (((Gs as any)(e, d) as any).map as any)(f), (s as any)[0] = n, (s as any)[1] = e, (s as any)[2] = a, (s as any)[3] = (i as any).previous, (s as any)[4] = (i as any).status, (s as any)[5] = (i as any).value, (s as any)[6] = l, (s as any)[7] = r, (s as any)[8] = o, (s as any)[9] = u;
  } else l = (s as any)[6], r = (s as any)[7], o = (s as any)[8], u = (s as any)[9];
  let c: any;
  return ((s as any)[26] as any) !== (l as any) || ((s as any)[27] as any) !== (r as any) || ((s as any)[28] as any) !== (o as any) || ((s as any)[29] as any) !== (u as any) ? (c = ((t as any).jsxs as any)(l, {
    title: r,
    children: [o, u]
  }), (s as any)[26] = l, (s as any)[27] = r, (s as any)[28] = o, (s as any)[29] = u, (s as any)[30] = c) : c = (s as any)[30], c;
}
function Zs(this: any, s: any): any {
  return (s as any).isCurrent;
}
const xe: any = {
  recipientText: {
    k7Eaqz: "sand-euugli",
    kVQacm: "sand-b3r6kr",
    kg5iWk: "sand-lyipyv",
    khDVqt: "sand-uxw1ft",
    $$css: !0
  }
};
function Qe(this: any): any {
  (Qe as any).d = 1289;
  const s: any = ((M as any).c as any)(19),
    {
      _: e
    }: any = (L as any)(),
    {
      recipients: n,
      revoke: i,
      retry: a,
      isRevokePending: l,
      revokeFailure: r
    }: any = (_s as any)();
  (ne as any)((((le as any)() as any).messagesAccess as any).loadAllowedRecipients);
  const o: any = ((q as any).useId as any)(),
    [u, c]: any = ((q as any).useState as any)(!1);
  let d: any, h: any;
  if (((s as any)[0] as any) !== (e as any) || ((s as any)[1] as any) !== (u as any) || ((s as any)[2] as any) !== (l as any) || ((s as any)[3] as any) !== (o as any) || ((s as any)[4] as any) !== (a as any) || ((s as any)[5] as any) !== (i as any) || ((s as any)[6] as any) !== (r as any) || ((s as any)[7] as any) !== (n as any)) {
    h = ((Symbol as any).for as any)("react.early_return_sentinel");
    e: {
      const g: any = (me as any)(n) ?? [],
        f: any = ((n as any).status as any) === ("failed" as any);
      if (((g as any).length as any) === (0 as any) && !f) {
        h = null;
        break e;
      }
      const m: any = u && (((g as any).length as any) > (0 as any) || (r as any) != (null as any));
      let y: any;
      ((s as any)[10] as any) !== (e as any) || ((s as any)[11] as any) !== (f as any) ? (y = (e as any)(f ? {
        id: "mmzR7e"
      } : {
        id: "tgdJj5"
      }), (s as any)[10] = e, (s as any)[11] = f, (s as any)[12] = y) : y = (s as any)[12];
      let p: any;
      ((s as any)[13] as any) !== (e as any) ? (p = (e as any)({
        id: "S+1Zzr"
      }), (s as any)[13] = e, (s as any)[14] = p) : p = (s as any)[14];
      const j: any = f ? ((t as any).jsx as any)(Q, {
        onClick: a,
        size: "md",
        style: ($ as any).body2,
        type: "button",
        variant: "secondary",
        children: ((t as any).jsx as any)(v, {
          id: "6gRgw8"
        })
      }) : ((t as any).jsx as any)(Q, {
        "aria-controls": m ? o : void 0,
        "aria-expanded": u,
        onClick: (): any => (c as any)(Vs),
        size: "md",
        style: ($ as any).body2,
        trailingIcon: u ? "chevron-up" : "chevron-down",
        type: "button",
        variant: "secondary",
        children: (e as any)({
          id: "71pZse",
          values: {
            0: (g as any).length
          }
        })
      });
      let x: any;
      ((s as any)[15] as any) !== (y as any) || ((s as any)[16] as any) !== (p as any) || ((s as any)[17] as any) !== (j as any) ? (x = ((t as any).jsx as any)(W, {
        anchorId: "messages-allowed-recipients",
        description: y,
        label: p,
        variant: "card",
        children: j
      }), (s as any)[15] = y, (s as any)[16] = p, (s as any)[17] = j, (s as any)[18] = x) : x = (s as any)[18], d = ((t as any).jsxs as any)((t as any).Fragment, {
        children: [x, m ? ((t as any).jsxs as any)("div", {
          id: o,
          className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-h8yej3 sand-1n9uuka sand-usxwy5 sand-cssynl",
          children: [((g as any).length as any) > (0 as any) ? ((t as any).jsx as any)("ul", {
            "aria-label": (e as any)({
              id: "S+1Zzr"
            }),
            className: "sand-78zum5 sand-dt5ytf sand-h8yej3 sand-3ct3a4 sand-9f619 sand-1ghz6dp sand-4hv7ue sand-1y0btm7 sand-fnq37j sand-1043rbw sand-1lqmthn sand-13e3tqs",
            children: ((g as any).map as any)((k: any): any => {
              const w: any = (k as any).name ?? (k as any).recipient;
              return ((t as any).jsxs as any)("li", {
                className: "sand-78zum5 sand-6s0dn4 sand-e0p6wg sand-1v2ro7d sand-1t0vds8 sand-4q8mmk",
                children: [((t as any).jsx as any)("span", {
                  className: "sand-78zum5 sand-1pha0wt sand-1iyjqo2 sand-s83m0k sand-euugli sand-167g77z",
                  children: ((k as any).name as any) === (null as any) ? ((t as any).jsx as any)(ce, {
                    rootStyle: (xe as any).recipientText,
                    size: "sm",
                    weight: "medium",
                    children: ((t as any).jsx as any)("bdi", {
                      dir: "ltr",
                      children: (k as any).recipient
                    })
                  }) : ((t as any).jsxs as any)((t as any).Fragment, {
                    children: [((t as any).jsx as any)(ce, {
                      rootStyle: (xe as any).recipientText,
                      size: "sm",
                      weight: "medium",
                      children: ((t as any).jsx as any)("bdi", {
                        children: (k as any).name
                      })
                    }), ((t as any).jsx as any)(ce, {
                      color: "secondary",
                      rootStyle: (xe as any).recipientText,
                      size: "sm",
                      children: ((t as any).jsx as any)("bdi", {
                        dir: "ltr",
                        children: (k as any).recipient
                      })
                    })]
                  })
                }), ((t as any).jsx as any)("span", {
                  className: "sand-78zum5 sand-2lah0s sand-17d4w8g",
                  children: ((t as any).jsx as any)(rs, {
                    "aria-label": (e as any)({
                      id: "6f5U0u",
                      values: {
                        target: w
                      }
                    }),
                    disabled: l,
                    icon: "trash",
                    onClick: (): any => (i as any)((k as any).recipient),
                    shape: "square",
                    size: "xs",
                    variant: "ghost"
                  })
                })]
              }, (k as any).recipient);
            })
          }) : null, (r as any) != (null as any) && ((t as any).jsx as any)("div", {
            role: "alert",
            className: "sand-12ffz05",
            children: ((t as any).jsx as any)(Me, {
              children: ((t as any).jsx as any)(v, {
                id: "XWKrq0"
              })
            })
          })]
        }) : null]
      });
    }
    (s as any)[0] = e, (s as any)[1] = u, (s as any)[2] = l, (s as any)[3] = o, (s as any)[4] = a, (s as any)[5] = i, (s as any)[6] = r, (s as any)[7] = n, (s as any)[8] = d, (s as any)[9] = h;
  } else d = (s as any)[8], h = (s as any)[9];
  return (h as any) !== (((Symbol as any).for as any)("react.early_return_sentinel") as any) ? h : d;
}
function Vs(this: any, s: any): any {
  return !s;
}
function Xe(this: any): any {
  (Xe as any).d = 1290;
  const s: any = ((M as any).c as any)(1),
    e: any = (be as any)("sand_messages_tools"),
    n: any = (((ue as any)() as any).platform as any) === ("darwin" as any);
  if (!e || !n) return null;
  let i: any;
  return ((s as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (i = ((t as any).jsx as any)(He, {}), (s as any)[0] = i) : i = (s as any)[0], i;
}
function He(this: any): any {
  (He as any).d = 1291;
  const s: any = ((M as any).c as any)(31),
    {
      _: e
    }: any = (L as any)(),
    n: any = (ws as any)();
  (ne as any)((((le as any)() as any).messagesAccess as any).loadEnablement);
  let i: any;
  ((s as any)[0] as any) !== ((n as any).enablement as any) ? (i = (me as any)((n as any).enablement), (s as any)[0] = (n as any).enablement, (s as any)[1] = i) : i = (s as any)[1];
  const a: any = i;
  let l: any;
  ((s as any)[2] as any) !== (e as any) ? (l = (e as any)({
    id: "jusBAO"
  }), (s as any)[2] = e, (s as any)[3] = l) : l = (s as any)[3];
  let r: any = l;
  if (((n as any).setFailure as any) != (null as any)) {
    let f: any;
    ((s as any)[4] as any) !== (e as any) ? (f = (e as any)({
      id: "QqKsGg"
    }), (s as any)[4] = e, (s as any)[5] = f) : f = (s as any)[5], r = f;
  } else if ((((n as any).enablement as any).status as any) === ("failed" as any)) {
    let f: any;
    ((s as any)[6] as any) !== (e as any) ? (f = (e as any)({
      id: "mmzR7e"
    }), (s as any)[6] = e, (s as any)[7] = f) : f = (s as any)[7], r = f;
  } else if ((((n as any).enablement as any).status as any) === ("unavailable" as any) || (((n as any).enablement as any).status as any) === ("empty" as any)) {
    let f: any;
    ((s as any)[8] as any) !== (e as any) ? (f = (e as any)({
      id: "0BvlbM"
    }), (s as any)[8] = e, (s as any)[9] = f) : f = (s as any)[9], r = f;
  } else if ((a as any) == (null as any)) {
    let f: any;
    ((s as any)[10] as any) !== (e as any) ? (f = (e as any)({
      id: "Pwqkdw"
    }), (s as any)[10] = e, (s as any)[11] = f) : f = (s as any)[11], r = f;
  }
  const o: any = (((n as any).enablement as any).status as any) === ("failed" as any);
  let u: any;
  ((s as any)[12] as any) !== (e as any) ? (u = (e as any)({
    id: "t7TeQU"
  }), (s as any)[12] = e, (s as any)[13] = u) : u = (s as any)[13];
  let c: any;
  ((s as any)[14] as any) !== (e as any) || ((s as any)[15] as any) !== ((n as any).isSetPending as any) || ((s as any)[16] as any) !== ((n as any).retryEnablement as any) || ((s as any)[17] as any) !== ((n as any).setEnabled as any) || ((s as any)[18] as any) !== (o as any) || ((s as any)[19] as any) !== (a as any) ? (c = o ? ((t as any).jsx as any)(Q, {
    onClick: (n as any).retryEnablement,
    size: "md",
    style: ($ as any).body2,
    type: "button",
    variant: "secondary",
    children: ((t as any).jsx as any)(v, {
      id: "6gRgw8"
    })
  }) : ((t as any).jsx as any)(je, {
    isChecked: (a as any) === (!0 as any),
    isDisabled: (a as any) == (null as any) || (n as any).isSetPending,
    label: (e as any)({
      id: "ISQkak"
    }),
    onToggle: (n as any).setEnabled,
    size: "md"
  }), (s as any)[14] = e, (s as any)[15] = (n as any).isSetPending, (s as any)[16] = (n as any).retryEnablement, (s as any)[17] = (n as any).setEnabled, (s as any)[18] = o, (s as any)[19] = a, (s as any)[20] = c) : c = (s as any)[20];
  let d: any;
  ((s as any)[21] as any) !== (r as any) || ((s as any)[22] as any) !== (c as any) ? (d = ((t as any).jsx as any)(W, {
    anchorId: "messages",
    description: r,
    variant: "card",
    children: c
  }), (s as any)[21] = r, (s as any)[22] = c, (s as any)[23] = d) : d = (s as any)[23];
  let h: any;
  ((s as any)[24] as any) !== ((n as any).isSetPending as any) || ((s as any)[25] as any) !== (a as any) ? (h = (a as any) === (!0 as any) && !(n as any).isSetPending ? ((t as any).jsx as any)(Ge, {}) : null, (s as any)[24] = (n as any).isSetPending, (s as any)[25] = a, (s as any)[26] = h) : h = (s as any)[26];
  let g: any;
  return ((s as any)[27] as any) !== (u as any) || ((s as any)[28] as any) !== (d as any) || ((s as any)[29] as any) !== (h as any) ? (g = ((t as any).jsxs as any)(he, {
    title: u,
    children: [d, h]
  }), (s as any)[27] = u, (s as any)[28] = d, (s as any)[29] = h, (s as any)[30] = g) : g = (s as any)[30], g;
}
function Ge(this: any): any {
  (Ge as any).d = 1292;
  const s: any = ((M as any).c as any)(9),
    e: any = (le as any)();
  (ne as any)(((e as any).messagesAccess as any).loadSendStanding);
  const n: any = (Cs as any)();
  let i: any;
  ((s as any)[0] as any) !== ((n as any).sendStanding as any) ? (i = (me as any)((n as any).sendStanding), (s as any)[0] = (n as any).sendStanding, (s as any)[1] = i) : i = (s as any)[1];
  const a: any = i;
  let l: any;
  ((s as any)[2] as any) !== (n as any) ? (l = ((t as any).jsx as any)(Ze, {
    standing: n
  }), (s as any)[2] = n, (s as any)[3] = l) : l = (s as any)[3];
  let r: any;
  ((s as any)[4] as any) !== (a as any) ? (r = (a as any) === (!1 as any) ? ((t as any).jsx as any)(Qe, {}) : null, (s as any)[4] = a, (s as any)[5] = r) : r = (s as any)[5];
  let o: any;
  return ((s as any)[6] as any) !== (l as any) || ((s as any)[7] as any) !== (r as any) ? (o = ((t as any).jsxs as any)((t as any).Fragment, {
    children: [l, r]
  }), (s as any)[6] = l, (s as any)[7] = r, (s as any)[8] = o) : o = (s as any)[8], o;
}
function Ze(this: any, s: any): any {
  (Ze as any).d = 1293;
  const e: any = ((M as any).c as any)(27),
    {
      standing: n
    }: any = s,
    {
      _: i
    }: any = (L as any)();
  (ne as any)((((le as any)() as any).teamPolicy as any).load);
  const a: any = (Ms as any)(),
    l: any = (Ts as any)();
  let r: any;
  ((e as any)[0] as any) !== (a as any) ? (r = (zs as any)("always", a), (e as any)[0] = a, (e as any)[1] = r) : r = (e as any)[1];
  const o: any = r;
  let u: any;
  ((e as any)[2] as any) !== ((n as any).sendStanding as any) ? (u = (me as any)((n as any).sendStanding), (e as any)[2] = (n as any).sendStanding, (e as any)[3] = u) : u = (e as any)[3];
  const c: any = u;
  let d: any;
  ((e as any)[4] as any) !== (i as any) ? (d = (i as any)({
    id: "3qTGok"
  }), (e as any)[4] = i, (e as any)[5] = d) : d = (e as any)[5];
  let h: any = d;
  if (((n as any).setFailure as any) != (null as any)) {
    let k: any;
    ((e as any)[6] as any) !== (i as any) ? (k = (i as any)({
      id: "QqKsGg"
    }), (e as any)[6] = i, (e as any)[7] = k) : k = (e as any)[7], h = k;
  } else if ((((n as any).sendStanding as any).status as any) === ("failed" as any)) {
    let k: any;
    ((e as any)[8] as any) !== (i as any) ? (k = (i as any)({
      id: "mmzR7e"
    }), (e as any)[8] = i, (e as any)[9] = k) : k = (e as any)[9], h = k;
  } else if ((c as any) == (null as any)) {
    let k: any;
    ((e as any)[10] as any) !== (i as any) ? (k = (i as any)({
      id: "Pwqkdw"
    }), (e as any)[10] = i, (e as any)[11] = k) : k = (e as any)[11], h = k;
  }
  let g: any;
  ((e as any)[12] as any) !== (i as any) ? (g = (i as any)({
    id: "jO0zrH"
  }), (e as any)[12] = i, (e as any)[13] = g) : g = (e as any)[13];
  const f: any = g;
  let m: any;
  ((e as any)[14] as any) !== (i as any) || ((e as any)[15] as any) !== (a as any) ? (m = (a as any) === (void 0 as any) ? null : ((t as any).jsx as any)(Me, {
    children: (i as any)({
      id: "68SHzZ",
      values: {
        ceiling: a
      }
    })
  }), (e as any)[14] = i, (e as any)[15] = a, (e as any)[16] = m) : m = (e as any)[16];
  const y: any = (c as any) === (!0 as any),
    p: any = (c as any) == (null as any) || !l || o && (c as any) !== (!0 as any);
  let j: any;
  ((e as any)[17] as any) !== (f as any) || ((e as any)[18] as any) !== ((n as any).setSendStanding as any) || ((e as any)[19] as any) !== (y as any) || ((e as any)[20] as any) !== (p as any) ? (j = ((t as any).jsx as any)(je, {
    isChecked: y,
    isDisabled: p,
    label: f,
    onToggle: (n as any).setSendStanding,
    size: "md"
  }), (e as any)[17] = f, (e as any)[18] = (n as any).setSendStanding, (e as any)[19] = y, (e as any)[20] = p, (e as any)[21] = j) : j = (e as any)[21];
  let x: any;
  return ((e as any)[22] as any) !== (h as any) || ((e as any)[23] as any) !== (f as any) || ((e as any)[24] as any) !== (m as any) || ((e as any)[25] as any) !== (j as any) ? (x = ((t as any).jsx as any)(W, {
    anchorId: "messages-send-without-asking",
    description: h,
    extraCopy: m,
    label: f,
    variant: "card",
    children: j
  }), (e as any)[22] = h, (e as any)[23] = f, (e as any)[24] = m, (e as any)[25] = j, (e as any)[26] = x) : x = (e as any)[26], x;
}
function Ve(this: any): any {
  (Ve as any).d = 1220;
  const s: any = ((M as any).c as any)(9),
    e: any = (Is as any)(),
    n: any = (Ee as any)(),
    i: any = ((n as any).status as any) !== ("unavailable" as any) && !(((n as any).status as any) === ("loading" as any) && ((n as any).previous as any) == (null as any));
  let a: any;
  ((s as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = {
    className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-3qzy4x"
  }, (s as any)[0] = a) : a = (s as any)[0];
  let l: any;
  ((s as any)[1] as any) !== (i as any) || ((s as any)[2] as any) !== ((((e as any).cursorAuth as any).status as any).kind as any) ? (l = ((((e as any).cursorAuth as any).status as any).kind as any) === ("logged-in" as any) && i ? ((t as any).jsx as any)(Ke, {}) : null, (s as any)[1] = i, (s as any)[2] = (((e as any).cursorAuth as any).status as any).kind, (s as any)[3] = l) : l = (s as any)[3];
  let r: any, o: any, u: any;
  ((s as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (r = ((t as any).jsx as any)(Oe, {}), o = ((t as any).jsx as any)(Xe, {}), u = ((t as any).jsx as any)(Fe, {}), (s as any)[4] = r, (s as any)[5] = o, (s as any)[6] = u) : (r = (s as any)[4], o = (s as any)[5], u = (s as any)[6]);
  let c: any;
  return ((s as any)[7] as any) !== (l as any) ? (c = ((t as any).jsx as any)($s, {
    children: ((t as any).jsxs as any)("div", {
      ...a,
      children: [l, r, o, u]
    })
  }), (s as any)[7] = l, (s as any)[8] = c) : c = (s as any)[8], c;
}
function Us(this: any, s: any): any {
  (Us as any).d = 1221;
  const e: any = ((M as any).c as any)(3),
    {
      params: n
    }: any = s,
    i: any = (n as any).focusSetting ?? null;
  let a: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = ((t as any).jsx as any)(Ve, {}), (e as any)[0] = a) : a = (e as any)[0];
  let l: any;
  return ((e as any)[1] as any) !== (i as any) ? (l = ((t as any).jsx as any)(os, {
    focus: i,
    children: a
  }), (e as any)[1] = i, (e as any)[2] = l) : l = (e as any)[2], l;
}
export { Us as default };
//# debugId=4cf3aec3-13b1-4aa8-ba9c-0a5d6d49720c
