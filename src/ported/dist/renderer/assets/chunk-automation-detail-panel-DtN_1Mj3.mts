declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "ab8b8de6-bc92-4cdd-a06b-2b342437f7e7", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-ab8b8de6-bc92-4cdd-a06b-2b342437f7e7");
  } catch (e: any) {}
} as any)();
import { j as t, i as J, c as se, u as Fe, r as z, p as we, T } from "./index.eager-vendor-Qbf9YA6n.js";
import { be as ts, aY as Ke, i as ns, a_ as as, c as ls } from "./index.eager-platform-Dcfeegfw.js";
import { f as Le, fL as is, aV as os, a_ as ne, fM as rs, fN as ds, fO as cs, cq as us, b8 as He, b$ as ms, fP as fs, fQ as hs, fR as ks, fS as ys, ak as gs, r as bs, fT as vs, d0 as ps, dd as xs, fU as js } from "./index.eager-app-Cj5f8Gby.js";
import { w as _s } from "./index.eager-common-CdCvBQNJ.js";
import { I as Ee, bS as Ss, bx as ws, bT as zs, z as Me, p as As } from "./index-ZYxf-aBb.js";
import { u as Ts } from "./chunk-load-failure-copy-g-dfAdrV.js";
function De(this: any, {
  size: l = 24,
  title: e = "Microsoft Teams",
  variant: n = "monochrome",
  ...s
}: any): any {
  (De as any).d = 2858161715;
  const o: any = (n as any) === ("brand" as any);
  return ((t as any).jsxs as any)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: l,
    height: l,
    fill: o ? void 0 : "currentColor",
    role: "img",
    "aria-label": e,
    ...s,
    children: [((t as any).jsx as any)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M15.5 5A3 3 0 0 1 14 7.599V7.5a2 2 0 0 0-2-2H9.541A3 3 0 1 1 15.5 5Zm6.25 1a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-3.294 11.732A3.25 3.25 0 0 0 23 14.75v-4.361a.889.889 0 0 0-.889-.889h-3.879c.17.294.268.636.268 1V17c0 .248-.015.492-.044.732ZM8.169 19.5A5 5 0 0 0 17.5 17v-6.5a1 1 0 0 0-1-1H14v8a2 2 0 0 1-2 2H8.169Z",
      fill: o ? "#5059C9" : void 0
    }), ((t as any).jsx as any)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1 17.5v-10a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Zm6.75-6.75H9.5v-1.5h-5v1.5h1.75v4.75h1.5v-4.75Z",
      fill: o ? "#7B83EB" : void 0
    })]
  });
}
function Ue(this: any, {
  size: l = 24,
  title: e = "PagerDuty",
  variant: n = "monochrome",
  ...s
}: any): any {
  (Ue as any).d = 2022216294;
  const o: any = (n as any) === ("brand" as any);
  return ((t as any).jsx as any)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: l,
    height: l,
    fill: o ? void 0 : "currentColor",
    role: "img",
    "aria-label": e,
    ...s,
    children: ((t as any).jsx as any)("g", {
      transform: "translate(-2.23 0)",
      children: ((t as any).jsx as any)("path", {
        d: "M15.59 0H5.65v16.08h3.56V3.39h6.12c2.37 0 4.23 1.28 4.23 3.86 0 2.47-1.67 3.97-4.23 3.97H12.1v3.21h3.56c4.49 0 7.15-2.93 7.15-7.1C22.81 2.97 20.28 0 15.59 0zM5.65 20.4h3.56V24H5.65z",
        fill: o ? "#06AC38" : void 0
      })
    })
  });
}
function We(this: any, {
  size: l = 24,
  title: e = "Sentry",
  variant: n = "monochrome",
  ...s
}: any): any {
  return (We as any).d = 956094295, ((t as any).jsx as any)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: l,
    height: l,
    role: "img",
    "aria-label": e,
    ...s,
    children: ((t as any).jsx as any)("path", {
      fill: (n as any) === ("brand" as any) ? "#6E47AE" : "currentColor",
      d: "m23.663 19.246-9.72-16.71C13.497 1.798 12.749 1.5 12 1.5s-1.495.444-1.943 1.036l-3.14 5.471.748.444a14.735 14.735 0 0 1 5.682 5.619c1.197 2.071 1.944 4.288 2.094 6.656h-2.243a13.066 13.066 0 0 0-1.794-5.621c-1.047-2.07-2.692-3.697-4.785-4.88l-.749-.443-2.99 5.028.747.444c1.944 1.182 3.29 3.104 3.589 5.323H2.281c-.149 0-.3-.148-.3-.148s-.148-.148 0-.296l1.348-2.367c-.449-.442-1.048-.74-1.646-.886L.337 19.247c-.449.74-.449 1.479 0 2.219.448.738 1.046 1.034 1.943 1.034h6.879v-.886c0-1.627-.449-3.106-1.196-4.586-.599-1.182-1.496-2.07-2.542-2.808l1.047-1.924c1.347 1.034 2.543 2.218 3.439 3.698 1.047 1.773 1.496 3.697 1.496 5.619v.886h5.831v-.886c0-2.957-.747-5.916-2.392-8.577-1.197-2.368-3.141-4.289-5.385-5.768L11.7 3.424c.152-.149.3-.149.3-.149.15 0 .15 0 .299.148l9.721 16.709c.148.146 0 .296 0 .296s-.15.148-.3.148h-2.243v1.775h2.243c.896.147 1.495-.148 1.943-.886.449-.739.449-1.479 0-2.219z"
    })
  });
}
function Rs(this: any, {
  name: l,
  remove: e,
  onFailure: n
}: any): any {
  return {
    title: ((J as any)._ as any)({
      id: "TNRo9Q",
      values: {
        name: l
      }
    }),
    description: ((J as any)._ as any)({
      id: "VAgxC4"
    }),
    confirmLabel: ((J as any)._ as any)({
      id: "cnGeoo"
    }),
    pendingLabel: ((J as any)._ as any)({
      id: "EF2EU9"
    }),
    cancelLabel: ((J as any)._ as any)({
      id: "dEgA5A"
    }),
    destructive: !0,
    perform: async (): Promise<any> => {
      try {
        return await (e as any)(), null;
      } catch (s: any) {
        return (n as any)(s), ((J as any)._ as any)({
          id: "GX6bhk"
        });
      }
    }
  };
}
const ee: number = 16,
  Pe: any = {
    glyph: {
      kzqmXN: "sand-1kky2od",
      kZKoxP: "sand-lup9mm",
      $$css: !0
    }
  };
function Xe(this: any, l: any): any {
  (Xe as any).d = 57;
  const e: any = ((se as any).c as any)(9),
    {
      type: n
    }: any = l;
  switch (n) {
    case "cron":
      {
        let s: any;
        return ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (s = ((t as any).jsx as any)(Ee, {
          name: "clock",
          size: "md",
          style: (Pe as any).glyph
        }), (e as any)[0] = s) : s = (e as any)[0], s;
      }
    case "slack":
      {
        let s: any;
        return ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (s = ((t as any).jsx as any)(Le, {
          name: "slack",
          sizePx: ee
        }), (e as any)[1] = s) : s = (e as any)[1], s;
      }
    case "github":
      {
        let s: any;
        return ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (s = ((t as any).jsx as any)(Le, {
          name: "github",
          sizePx: ee
        }), (e as any)[2] = s) : s = (e as any)[2], s;
      }
    case "microsoftTeams":
      {
        let s: any;
        return ((e as any)[3] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (s = ((t as any).jsx as any)(De, {
          size: ee,
          variant: "brand"
        }), (e as any)[3] = s) : s = (e as any)[3], s;
      }
    case "linear":
      {
        let s: any;
        return ((e as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (s = ((t as any).jsx as any)(ts, {
          size: ee,
          variant: "brand"
        }), (e as any)[4] = s) : s = (e as any)[4], s;
      }
    case "sentry":
      {
        let s: any;
        return ((e as any)[5] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (s = ((t as any).jsx as any)(We, {
          size: ee,
          variant: "brand"
        }), (e as any)[5] = s) : s = (e as any)[5], s;
      }
    case "pagerduty":
      {
        let s: any;
        return ((e as any)[6] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (s = ((t as any).jsx as any)(Ue, {
          size: ee,
          variant: "brand"
        }), (e as any)[6] = s) : s = (e as any)[6], s;
      }
    case "email":
      {
        let s: any;
        return ((e as any)[7] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (s = ((t as any).jsx as any)(Ee, {
          name: "mail",
          size: "md",
          style: (Pe as any).glyph
        }), (e as any)[7] = s) : s = (e as any)[7], s;
      }
    case "origin":
    case "webhook":
      {
        let s: any;
        return ((e as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (s = ((t as any).jsx as any)(Ee, {
          name: "globe",
          size: "md",
          style: (Pe as any).glyph
        }), (e as any)[8] = s) : s = (e as any)[8], s;
      }
  }
}
const Oe: any = {
  field: {
    kB7OPa: "sand-9f619",
    kzQI83: "sand-1iyjqo2",
    kmuXW: "sand-s83m0k",
    k7Eaqz: "sand-187xtus",
    kZKoxP: "sand-d7y6wv",
    kLKAdn: "sand-yqdw3p",
    kwRFfy: "sand-1icxu4v",
    kGO01o: "sand-g8j3zb",
    kZCmMZ: "sand-25sj25",
    kMzoRj: "sand-4hv7ue",
    ksu8eU: "sand-1y0btm7",
    kVAM5u: "sand-qz0629",
    kaIpWk: "sand-1kogg8i",
    kWkggS: "sand-1tiofj7",
    kMwMTN: "sand-tyxrsu",
    kMv6JI: "sand-jb2p0i",
    k3XXqK: "sand-1t137rt",
    kVQacm: "sand-b3r6kr",
    kg5iWk: "sand-lyipyv",
    k8Qsv1: "sand-1h7ufjq",
    $$css: !0
  },
  fieldCopyable: {
    kkrTdU: "sand-8zifdi",
    $$css: !0
  }
};
function Ve(this: any, l: any): any {
  return {
    url: {
      kind: "placeholder",
      text: l
    },
    key: {
      kind: "placeholder",
      text: l
    }
  };
}
function Qe(this: any, l: any): any {
  (Qe as any).d = 59;
  const e: any = ((se as any).c as any)(27),
    {
      "aria-label": n,
      content: s,
      tooltip: o
    }: any = l,
    [i, d]: any = (os as any)(),
    c: any = ((z as any).useRef as any)(!1);
  let a: any;
  ((e as any)[0] as any) !== ((s as any).kind as any) || ((e as any)[1] as any) !== ((s as any).value as any) || ((e as any)[2] as any) !== (d as any) ? (a = (w: any): any => {
    ((s as any).kind as any) === ("value" as any) && (((w as any).select as any)(), (d as any)((s as any).value));
  }, (e as any)[0] = (s as any).kind, (e as any)[1] = (s as any).value, (e as any)[2] = d, (e as any)[3] = a) : a = (e as any)[3];
  const k: any = a;
  let f: any;
  ((e as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = (): any => {
    (c as any).current = !1;
  }, (e as any)[4] = f) : f = (e as any)[4];
  let h: any, y: any;
  ((e as any)[5] as any) !== (k as any) ? (h = (w: any): any => {
    (c as any).current = !1, (k as any)((w as any).currentTarget);
  }, y = (w: any): any => {
    (c as any).current || (k as any)((w as any).currentTarget);
  }, (e as any)[5] = k, (e as any)[6] = h, (e as any)[7] = y) : (h = (e as any)[6], y = (e as any)[7]);
  let v: any, g: any;
  ((e as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (v = (): any => {
    (c as any).current = !1;
  }, g = (): any => {
    (c as any).current = !0;
  }, (e as any)[8] = v, (e as any)[9] = g) : (v = (e as any)[8], g = (e as any)[9]);
  const _: any = ((s as any).kind as any) === ("placeholder" as any) ? (s as any).text : "",
    x: any = ((s as any).kind as any) === ("value" as any) ? (s as any).value : "";
  let b: any;
  ((e as any)[10] as any) !== ((s as any).kind as any) ? (b = (we as any)((ne as any).body2, (Oe as any).field, ((s as any).kind as any) === ("value" as any) && (Oe as any).fieldCopyable), (e as any)[10] = (s as any).kind, (e as any)[11] = b) : b = (e as any)[11];
  let r: any;
  ((e as any)[12] as any) !== (n as any) || ((e as any)[13] as any) !== (h as any) || ((e as any)[14] as any) !== (y as any) || ((e as any)[15] as any) !== (_ as any) || ((e as any)[16] as any) !== (x as any) || ((e as any)[17] as any) !== (b as any) ? (r = ((t as any).jsx as any)("input", {
    "aria-label": n,
    onBlur: f,
    onClick: h,
    onFocus: y,
    onPointerCancel: v,
    onPointerDown: g,
    placeholder: _,
    readOnly: !0,
    type: "text",
    value: x,
    ...b
  }), (e as any)[12] = n, (e as any)[13] = h, (e as any)[14] = y, (e as any)[15] = _, (e as any)[16] = x, (e as any)[17] = b, (e as any)[18] = r) : r = (e as any)[18];
  const u: any = r;
  let m: any;
  ((e as any)[19] as any) !== (u as any) || ((e as any)[20] as any) !== (o as any) ? (m = (o as any) == (null as any) ? u : ((t as any).jsx as any)(ws, {
    content: o,
    children: u
  }), (e as any)[19] = u, (e as any)[20] = o, (e as any)[21] = m) : m = (e as any)[21];
  let p: any;
  ((e as any)[22] as any) !== (i as any) ? (p = i ? ((t as any).jsx as any)(Ke, {
    as: "span",
    color: "secondary",
    size: "sm",
    children: ((t as any).jsx as any)(T, {
      id: "6V3Ea3"
    })
  }) : null, (e as any)[22] = i, (e as any)[23] = p) : p = (e as any)[23];
  let S: any;
  return ((e as any)[24] as any) !== (m as any) || ((e as any)[25] as any) !== (p as any) ? (S = ((t as any).jsxs as any)((t as any).Fragment, {
    children: [m, p]
  }), (e as any)[24] = m, (e as any)[25] = p, (e as any)[26] = S) : S = (e as any)[26], S;
}
function _e(this: any, l: any): any {
  (_e as any).d = 60;
  const e: any = ((se as any).c as any)(15),
    {
      target: n,
      connector: s,
      content: o,
      tooltip: i
    }: any = l;
  ((Ss as any).useRowFocus as any)(n);
  const d: any = (is as any)(n);
  let c: any;
  ((e as any)[0] as any) !== (n as any) ? (c = (rs as any)(n), (e as any)[0] = n, (e as any)[1] = c) : c = (e as any)[1];
  let a: any;
  ((e as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = {
    className: "sand-78zum5 sand-1a02dak sand-6s0dn4 sand-17d4w8g"
  }, (e as any)[2] = a) : a = (e as any)[2];
  let k: any;
  ((e as any)[3] as any) !== (s as any) ? (k = ((t as any).jsx as any)(Ke, {
    as: "span",
    color: "secondary",
    size: "md",
    children: s
  }), (e as any)[3] = s, (e as any)[4] = k) : k = (e as any)[4];
  let f: any;
  ((e as any)[5] as any) !== (i as any) ? (f = (i as any) == (null as any) ? {} : {
    tooltip: i
  }, (e as any)[5] = i, (e as any)[6] = f) : f = (e as any)[6];
  let h: any;
  ((e as any)[7] as any) !== (o as any) || ((e as any)[8] as any) !== (d as any) || ((e as any)[9] as any) !== (f as any) ? (h = ((t as any).jsx as any)(Qe, {
    "aria-label": d,
    content: o,
    ...f
  }), (e as any)[7] = o, (e as any)[8] = d, (e as any)[9] = f, (e as any)[10] = h) : h = (e as any)[10];
  let y: any;
  return ((e as any)[11] as any) !== (c as any) || ((e as any)[12] as any) !== (k as any) || ((e as any)[13] as any) !== (h as any) ? (y = ((t as any).jsxs as any)("div", {
    id: c,
    ...a,
    children: [k, h]
  }), (e as any)[11] = c, (e as any)[12] = k, (e as any)[13] = h, (e as any)[14] = y) : y = (e as any)[14], y;
}
function Ye(this: any, l: any): any {
  (Ye as any).d = 58;
  const e: any = ((se as any).c as any)(39),
    {
      credential: n
    }: any = l,
    {
      _: s
    }: any = (Fe as any)(),
    o: any = (Ts as any)();
  let i: any;
  e: switch ((n as any).kind) {
    case "unsaved":
    case "loading":
      {
        let r: any;
        ((e as any)[0] as any) !== (s as any) ? (r = (Ve as any)((s as any)({
          id: "Pwqkdw"
        })), (e as any)[0] = s, (e as any)[1] = r) : r = (e as any)[1], i = r;
        break e;
      }
    case "failed":
      {
        let r: any;
        ((e as any)[2] as any) !== (o as any) ? (r = (Ve as any)(o), (e as any)[2] = o, (e as any)[3] = r) : r = (e as any)[3], i = r;
        break e;
      }
    case "minting":
      {
        let r: any;
        ((e as any)[4] as any) !== ((n as any).url as any) ? (r = {
          kind: "value",
          value: (n as any).url
        }, (e as any)[4] = (n as any).url, (e as any)[5] = r) : r = (e as any)[5];
        let u: any;
        ((e as any)[6] as any) !== (s as any) ? (u = (s as any)({
          id: "B1MVWs"
        }), (e as any)[6] = s, (e as any)[7] = u) : u = (e as any)[7];
        let m: any;
        ((e as any)[8] as any) !== (u as any) ? (m = {
          kind: "placeholder",
          text: u
        }, (e as any)[8] = u, (e as any)[9] = m) : m = (e as any)[9];
        let p: any;
        ((e as any)[10] as any) !== (r as any) || ((e as any)[11] as any) !== (m as any) ? (p = {
          url: r,
          key: m
        }, (e as any)[10] = r, (e as any)[11] = m, (e as any)[12] = p) : p = (e as any)[12], i = p;
        break e;
      }
    case "ready":
      {
        let r: any;
        ((e as any)[13] as any) !== ((n as any).url as any) ? (r = {
          kind: "value",
          value: (n as any).url
        }, (e as any)[13] = (n as any).url, (e as any)[14] = r) : r = (e as any)[14];
        let u: any;
        ((e as any)[15] as any) !== ((n as any).key as any) ? (u = {
          kind: "value",
          value: (n as any).key
        }, (e as any)[15] = (n as any).key, (e as any)[16] = u) : u = (e as any)[16];
        let m: any;
        ((e as any)[17] as any) !== (r as any) || ((e as any)[18] as any) !== (u as any) ? (m = {
          url: r,
          key: u
        }, (e as any)[17] = r, (e as any)[18] = u, (e as any)[19] = m) : m = (e as any)[19], i = m;
      }
  }
  let d: any;
  ((e as any)[20] as any) !== ((i as any).key as any) ? (d = (((i as any).key as any).kind as any) === ("value" as any) ? {
    kind: "value",
    value: `Authorization: Bearer ${((i as any).key as any).value}`
  } : (i as any).key, (e as any)[20] = (i as any).key, (e as any)[21] = d) : d = (e as any)[21];
  const c: any = d;
  let a: any;
  ((e as any)[22] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = {
    className: "sand-78zum5 sand-dt5ytf sand-167g77z sand-f159sx sand-mzvs34"
  }, (e as any)[22] = a) : a = (e as any)[22];
  let k: any;
  ((e as any)[23] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (k = ((t as any).jsx as any)(T, {
    id: "aGIdSd"
  }), (e as any)[23] = k) : k = (e as any)[23];
  let f: any;
  ((e as any)[24] as any) !== ((i as any).url as any) ? (f = ((t as any).jsx as any)(_e, {
    connector: k,
    content: (i as any).url,
    target: "webhook-url"
  }), (e as any)[24] = (i as any).url, (e as any)[25] = f) : f = (e as any)[25];
  let h: any;
  ((e as any)[26] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (h = ((t as any).jsx as any)(T, {
    id: "4NH4hr"
  }), (e as any)[26] = h) : h = (e as any)[26];
  const y: any = (i as any).key;
  let v: any;
  ((e as any)[27] as any) !== (s as any) ? (v = (s as any)({
    id: "/ZL2S7"
  }), (e as any)[27] = s, (e as any)[28] = v) : v = (e as any)[28];
  let g: any;
  ((e as any)[29] as any) !== ((i as any).key as any) || ((e as any)[30] as any) !== (v as any) ? (g = ((t as any).jsx as any)(_e, {
    connector: h,
    content: y,
    target: "webhook-key",
    tooltip: v
  }), (e as any)[29] = (i as any).key, (e as any)[30] = v, (e as any)[31] = g) : g = (e as any)[31];
  let _: any;
  ((e as any)[32] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (_ = ((t as any).jsx as any)(T, {
    id: "pZ7BTT"
  }), (e as any)[32] = _) : _ = (e as any)[32];
  let x: any;
  ((e as any)[33] as any) !== (c as any) ? (x = ((t as any).jsx as any)(_e, {
    connector: _,
    content: c,
    target: "webhook-header"
  }), (e as any)[33] = c, (e as any)[34] = x) : x = (e as any)[34];
  let b: any;
  return ((e as any)[35] as any) !== (x as any) || ((e as any)[36] as any) !== (f as any) || ((e as any)[37] as any) !== (g as any) ? (b = ((t as any).jsxs as any)("div", {
    ...a,
    children: [f, g, x]
  }), (e as any)[35] = x, (e as any)[36] = f, (e as any)[37] = g, (e as any)[38] = b) : b = (e as any)[38], b;
}
const A: any = {
  sectionHeader: {
    kB7OPa: "sand-9f619",
    kZKoxP: "sand-1gnnpzl",
    kLKAdn: "sand-1y1aw1k",
    kwRFfy: "sand-f159sx",
    kGO01o: "sand-10b6aqq",
    kZCmMZ: "sand-mzvs34",
    kMwMTN: "sand-1o0liin",
    $$css: !0
  },
  instruction: {
    kwRFfy: "sand-f159sx",
    kZCmMZ: "sand-mzvs34",
    $$css: !0
  },
  trigger: {
    k1xSpc: "sand-78zum5",
    kGNEyG: "sand-6s0dn4",
    kOIVth: "sand-1jnr06f",
    kB7OPa: "sand-9f619",
    kAzted: "sand-1rz828m",
    kLKAdn: "sand-1yrsyyn",
    kwRFfy: "sand-1icxu4v",
    kGO01o: "sand-10b6aqq",
    kZCmMZ: "sand-mzvs34",
    kMwMTN: "sand-1o0liin",
    $$css: !0
  },
  failure: {
    kwRFfy: "sand-f159sx",
    kZCmMZ: "sand-mzvs34",
    kMwMTN: "sand-6rl5ky",
    $$css: !0
  },
  action: {
    kzQI83: "sand-1iyjqo2",
    kmuXW: "sand-s83m0k",
    kCS8Yb: "sand-1r8uery",
    k7Eaqz: "sand-euugli",
    kMzoRj: "sand-qjedn3",
    ksu8eU: "sand-1y0btm7",
    kVAM5u: "sand-q03nf1",
    $$css: !0
  },
  deleteAction: {
    kzqmXN: "sand-14atkfc",
    kZKoxP: "sand-t7dq6l",
    kOBAk4: "sand-1plog1",
    kMzoRj: "sand-qjedn3",
    ksu8eU: "sand-1y0btm7",
    kVAM5u: "sand-q03nf1",
    $$css: !0
  }
};
function Se(this: any, l: any): any {
  (Se as any).d = 55;
  const e: any = ((se as any).c as any)(7),
    {
      title: n,
      children: s
    }: any = l;
  let o: any, i: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (o = {
    className: "sand-78zum5 sand-dt5ytf"
  }, i = (we as any)((ne as any).label, (A as any).sectionHeader), (e as any)[0] = o, (e as any)[1] = i) : (o = (e as any)[0], i = (e as any)[1]);
  let d: any;
  ((e as any)[2] as any) !== (n as any) ? (d = ((t as any).jsx as any)("div", {
    ...i,
    children: n
  }), (e as any)[2] = n, (e as any)[3] = d) : d = (e as any)[3];
  let c: any;
  return ((e as any)[4] as any) !== (s as any) || ((e as any)[5] as any) !== (d as any) ? (c = ((t as any).jsxs as any)("div", {
    ...o,
    children: [d, s]
  }), (e as any)[4] = s, (e as any)[5] = d, (e as any)[6] = c) : c = (e as any)[6], c;
}
function Ns(this: any, l: any): any {
  return l instanceof xs && (((l as any).failure as any).code as any) === (js as any) ? (l as any).message : null;
}
function Ge(this: any, l: any): any {
  (ps as any)(l, {
    tags: {
      sand_area: "automations"
    }
  });
}
const Cs: any = (_s as any)({
  name: "automation-failure-seen",
  park: "hidden"
});
function qs(this: any, l: any): any {
  const e: any = (ls as any)(null);
  return {
    watch(n: any): any {
      const s: any = ((l as any).arm as any)((o: any): any => ((o as any).frame as any) === (0 as any) ? "continue" : (((e as any).set as any)(n), "done"));
      return (): any => ((s as any).cancel as any)();
    },
    subscribe: (e as any).subscribe,
    read: (e as any).get
  };
}
function Es(this: any, l: any): any {
  (Es as any).d = 54;
  const e: any = ((se as any).c as any)(110),
    {
      agentId: n,
      automation: s,
      isServerOwned: o,
      isPaneHidden: i,
      onSeedPrompt: d
    }: any = l,
    c: any = (i as any) === (void 0 as any) ? !1 : i,
    {
      _: a
    }: any = (Fe as any)(),
    {
      _: k
    }: any = (Fe as any)(),
    {
      renderMarkdown: f
    }: any = (ds as any)(),
    h: any = (zs as any)(),
    y: any = (cs as any)(),
    v: any = (us as any)(),
    g: any = (He as any)((y as any).setEnabled),
    _: any = (He as any)((y as any).runNow),
    x: any = (ms as any)(n);
  let b: any;
  ((e as any)[0] as any) !== (n as any) || ((e as any)[1] as any) !== ((s as any).id as any) ? (b = {
    agentId: n,
    automationId: (s as any).id
  }, (e as any)[0] = n, (e as any)[1] = (s as any).id, (e as any)[2] = b) : b = (e as any)[2];
  const r: any = (fs as any)(b);
  let u: any;
  ((e as any)[3] as any) !== ((s as any).trigger as any) ? (u = (hs as any)((s as any).trigger, ks), (e as any)[3] = (s as any).trigger, (e as any)[4] = u) : u = (e as any)[4];
  const m: any = u,
    p: any = m ? (s as any).id : null;
  let S: any;
  ((e as any)[5] as any) !== (n as any) || ((e as any)[6] as any) !== (p as any) ? (S = {
    agentId: n,
    automationId: p
  }, (e as any)[5] = n, (e as any)[6] = p, (e as any)[7] = S) : S = (e as any)[7];
  const w: any = (ys as any)(S),
    [j, te]: any = ((z as any).useState as any)(null),
    ae: any = (gs as any)("info-pane") || c,
    [R]: any = ((z as any).useState as any)($s),
    le: any = ((z as any).useSyncExternalStore as any)((R as any).subscribe, (R as any).read, (R as any).read);
  let ie: any;
  ((e as any)[8] as any) !== (j as any) || ((e as any)[9] as any) !== (R as any) || ((e as any)[10] as any) !== (ae as any) || ((e as any)[11] as any) !== (le as any) ? (ie = (): any => (j as any) == (null as any) || ae || (le as any) === (j as any) ? Fs : ((R as any).watch as any)(j), (e as any)[8] = j, (e as any)[9] = R, (e as any)[10] = ae, (e as any)[11] = le, (e as any)[12] = ie) : ie = (e as any)[12], (ns as any)(ie);
  const [$e, Je]: any = ((z as any).useState as any)(null);
  (j as any) != (null as any) && (le as any) === (j as any) && ae && ($e as any) !== (j as any) && (Je as any)(j);
  const oe: any = ($e as any) !== (j as any),
    [ze, Ie]: any = ((z as any).useState as any)(null),
    [Ae, Te]: any = ((z as any).useState as any)(null),
    Ze: any = ((z as any).useRef as any)(0);
  (Ae as any) != (null as any) && ((Ae as any).isEnabled as any) === ((s as any).isEnabled as any) && (Te as any)(null);
  const N: any = Ae?.isEnabled ?? (s as any).isEnabled,
    re: any = (_ as any).isPending || r || (((s as any).runs as any)[0]?.status as any) === ("running" as any);
  let de: any;
  ((e as any)[13] as any) !== (n as any) || ((e as any)[14] as any) !== ((s as any).id as any) || ((e as any)[15] as any) !== (N as any) || ((e as any)[16] as any) !== (g as any) ? (de = (): any => {
    const Y: any = {
      seq: (Ze as any).current = ((Ze as any).current as any) + (1 as any),
      isEnabled: !N
    };
    (te as any)(null), (Te as any)(Y), ((((g as any).run as any)(n, (s as any).id, (Y as any).isEnabled) as any).then as any)(Ps, (ss: any): any => {
      (Ge as any)(ss), (Te as any)((Be: any): any => (Be?.seq as any) === ((Y as any).seq as any) ? null : Be), (te as any)({
        kind: (Y as any).isEnabled ? "resume" : "pause"
      });
    });
  }, (e as any)[13] = n, (e as any)[14] = (s as any).id, (e as any)[15] = N, (e as any)[16] = g, (e as any)[17] = de) : de = (e as any)[17];
  const Re: any = de;
  let ce: any;
  ((e as any)[18] as any) !== (x as any) || ((e as any)[19] as any) !== (n as any) || ((e as any)[20] as any) !== ((s as any).id as any) || ((e as any)[21] as any) !== (_ as any) ? (ce = (): any => {
    (te as any)(null), (Ie as any)(null), ((((_ as any).run as any)(n, (s as any).id, {
      sessionId: x
    }) as any).catch as any)((Y: any): any => {
      (Ie as any)((Ns as any)(Y)), (te as any)({
        kind: "test-run"
      });
    });
  }, (e as any)[18] = x, (e as any)[19] = n, (e as any)[20] = (s as any).id, (e as any)[21] = _, (e as any)[22] = ce) : ce = (e as any)[22];
  const Ne: any = ce;
  let ue: any;
  ((e as any)[23] as any) !== (n as any) || ((e as any)[24] as any) !== ((s as any).id as any) || ((e as any)[25] as any) !== ((s as any).name as any) || ((e as any)[26] as any) !== (y as any) || ((e as any)[27] as any) !== (v as any) ? (ue = (): any => {
    (te as any)(null), (v as any)((Rs as any)({
      name: (s as any).name,
      remove: (): any => ((y as any).remove as any)(n, (s as any).id),
      onFailure: Ge
    }));
  }, (e as any)[23] = n, (e as any)[24] = (s as any).id, (e as any)[25] = (s as any).name, (e as any)[26] = y, (e as any)[27] = v, (e as any)[28] = ue) : ue = (e as any)[28];
  const Ce: any = ue;
  let me: any, fe: any;
  ((e as any)[29] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (me = ((t as any).jsx as any)(T, {
    id: "JKdhhI"
  }), fe = ((t as any).jsx as any)(T, {
    id: "v+fmj9"
  }), (e as any)[29] = me, (e as any)[30] = fe) : (me = (e as any)[29], fe = (e as any)[30]);
  let C: any;
  ((e as any)[31] as any) !== (ze as any) ? (C = ze ?? ((t as any).jsx as any)(T, {
    id: "EuB6Ib"
  }), (e as any)[31] = ze, (e as any)[32] = C) : C = (e as any)[32];
  let he: any;
  ((e as any)[33] as any) !== (C as any) ? (he = {
    pause: me,
    resume: fe,
    "test-run": C
  }, (e as any)[33] = C, (e as any)[34] = he) : he = (e as any)[34];
  const qe: any = he;
  let ke: any;
  ((e as any)[35] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ke = (bs as any)("sand-automation-detail", "sand-78zum5 sand-dt5ytf sand-1iyjqo2 sand-s83m0k sand-dl72j9 sand-2lwn1j sand-5yr21d"), (e as any)[35] = ke) : ke = (e as any)[35];
  let ye: any;
  ((e as any)[36] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ye = {
    className: "sand-1iyjqo2 sand-s83m0k sand-dl72j9 sand-2lwn1j"
  }, (e as any)[36] = ye) : ye = (e as any)[36];
  const es: any = (ye as any).className;
  let ge: any;
  ((e as any)[37] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ge = {
    className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d sand-9f619 sand-pdmqnj sand-wxc41k sand-1g0dm76"
  }, (e as any)[37] = ge) : ge = (e as any)[37];
  let q: any;
  ((e as any)[38] as any) !== (a as any) ? (q = (a as any)({
    id: "p7xApR"
  }), (e as any)[38] = a, (e as any)[39] = q) : q = (e as any)[39];
  let E: any;
  ((e as any)[40] as any) !== ((s as any).prompt as any) || ((e as any)[41] as any) !== (f as any) ? (E = (f as any)((s as any).prompt, [(ne as any).body2, (A as any).instruction]), (e as any)[40] = (s as any).prompt, (e as any)[41] = f, (e as any)[42] = E) : E = (e as any)[42];
  let M: any;
  ((e as any)[43] as any) !== (q as any) || ((e as any)[44] as any) !== (E as any) ? (M = ((t as any).jsx as any)(Se, {
    title: q,
    children: E
  }), (e as any)[43] = q, (e as any)[44] = E, (e as any)[45] = M) : M = (e as any)[45];
  let P: any;
  ((e as any)[46] as any) !== (a as any) ? (P = (a as any)({
    id: "1bU8gN"
  }), (e as any)[46] = a, (e as any)[47] = P) : P = (e as any)[47];
  let F: any;
  ((e as any)[48] as any) !== (a as any) ? (F = (a as any)({
    id: "1bU8gN"
  }), (e as any)[48] = a, (e as any)[49] = F) : F = (e as any)[49];
  let be: any;
  ((e as any)[50] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (be = {
    className: "sand-e8uvvx sand-78zum5 sand-dt5ytf sand-195vfkc sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-1717udv"
  }, (e as any)[50] = be) : be = (e as any)[50];
  let $: any;
  ((e as any)[51] as any) !== (k as any) || ((e as any)[52] as any) !== (s as any) || ((e as any)[53] as any) !== (h as any) ? ($ = (((vs as any)(k, s, h) as any).map as any)(Ms), (e as any)[51] = k, (e as any)[52] = s, (e as any)[53] = h, (e as any)[54] = $) : $ = (e as any)[54];
  let I: any;
  ((e as any)[55] as any) !== (F as any) || ((e as any)[56] as any) !== ($ as any) ? (I = ((t as any).jsx as any)("ul", {
    "aria-label": F,
    ...be,
    children: $
  }), (e as any)[55] = F, (e as any)[56] = $, (e as any)[57] = I) : I = (e as any)[57];
  let Z: any;
  ((e as any)[58] as any) !== (P as any) || ((e as any)[59] as any) !== (I as any) ? (Z = ((t as any).jsx as any)(Se, {
    title: P,
    children: I
  }), (e as any)[58] = P, (e as any)[59] = I, (e as any)[60] = Z) : Z = (e as any)[60];
  let B: any;
  ((e as any)[61] as any) !== (a as any) || ((e as any)[62] as any) !== (m as any) || ((e as any)[63] as any) !== (w as any) ? (B = m ? ((t as any).jsx as any)(Se, {
    title: (a as any)({
      id: "TRDppN"
    }),
    children: ((t as any).jsx as any)(Ye, {
      credential: w
    })
  }) : null, (e as any)[61] = a, (e as any)[62] = m, (e as any)[63] = w, (e as any)[64] = B) : B = (e as any)[64];
  let L: any;
  ((e as any)[65] as any) !== (M as any) || ((e as any)[66] as any) !== (Z as any) || ((e as any)[67] as any) !== (B as any) ? (L = ((t as any).jsx as any)(as, {
    className: es,
    children: ((t as any).jsxs as any)("div", {
      ...ge,
      children: [M, Z, B]
    })
  }), (e as any)[65] = M, (e as any)[66] = Z, (e as any)[67] = B, (e as any)[68] = L) : L = (e as any)[68];
  let ve: any;
  ((e as any)[69] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ve = {
    className: "sand-78zum5 sand-dt5ytf sand-167g77z sand-2lah0s sand-pdmqnj sand-sag5q8 sand-1g0dm76"
  }, (e as any)[69] = ve) : ve = (e as any)[69];
  let H: any;
  ((e as any)[70] as any) !== (j as any) || ((e as any)[71] as any) !== (qe as any) || ((e as any)[72] as any) !== (oe as any) ? (H = (j as any) == (null as any) ? null : ((t as any).jsx as any)("div", {
    ...(we as any)((ne as any).body2, (A as any).failure),
    "aria-live": oe ? "assertive" : void 0,
    role: oe ? "alert" : void 0,
    children: (qe as any)[(j as any).kind]
  }), (e as any)[70] = j, (e as any)[71] = qe, (e as any)[72] = oe, (e as any)[73] = H) : H = (e as any)[73];
  let pe: any;
  ((e as any)[74] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (pe = {
    className: "sand-78zum5 sand-1qjc9v5 sand-167g77z"
  }, (e as any)[74] = pe) : pe = (e as any)[74];
  let O: any;
  ((e as any)[75] as any) !== (a as any) || ((e as any)[76] as any) !== (N as any) ? (O = (a as any)(N ? {
    id: "IgrLD/"
  } : {
    id: "v39wLo"
  }), (e as any)[75] = a, (e as any)[76] = N, (e as any)[77] = O) : O = (e as any)[77];
  let V: any;
  ((e as any)[78] as any) !== (Re as any) || ((e as any)[79] as any) !== (O as any) || ((e as any)[80] as any) !== ((g as any).isPending as any) ? (V = ((t as any).jsx as any)(Me, {
    onClick: Re,
    pending: (g as any).isPending,
    style: (A as any).action,
    variant: "secondary",
    children: O
  }), (e as any)[78] = Re, (e as any)[79] = O, (e as any)[80] = (g as any).isPending, (e as any)[81] = V) : V = (e as any)[81];
  let G: any;
  ((e as any)[82] as any) !== (a as any) || ((e as any)[83] as any) !== (Ne as any) || ((e as any)[84] as any) !== (re as any) || ((e as any)[85] as any) !== (o as any) ? (G = o ? null : ((t as any).jsx as any)(Me, {
    onClick: Ne,
    pending: re,
    style: (A as any).action,
    variant: "secondary",
    children: (a as any)(re ? {
      id: "lziBgy"
    } : {
      id: "NnH3pK"
    })
  }), (e as any)[82] = a, (e as any)[83] = Ne, (e as any)[84] = re, (e as any)[85] = o, (e as any)[86] = G) : G = (e as any)[86];
  let K: any;
  ((e as any)[87] as any) !== (a as any) || ((e as any)[88] as any) !== ((s as any).name as any) || ((e as any)[89] as any) !== (d as any) ? (K = (): any => (d as any)((a as any)({
    id: "hsz5he",
    values: {
      0: (s as any).name
    }
  })), (e as any)[87] = a, (e as any)[88] = (s as any).name, (e as any)[89] = d, (e as any)[90] = K) : K = (e as any)[90];
  let xe: any;
  ((e as any)[91] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (xe = ((t as any).jsx as any)(T, {
    id: "ePK91l"
  }), (e as any)[91] = xe) : xe = (e as any)[91];
  let D: any;
  ((e as any)[92] as any) !== (K as any) ? (D = ((t as any).jsx as any)(Me, {
    onClick: K,
    style: (A as any).action,
    variant: "secondary",
    children: xe
  }), (e as any)[92] = K, (e as any)[93] = D) : D = (e as any)[93];
  let U: any;
  ((e as any)[94] as any) !== (a as any) ? (U = (a as any)({
    id: "VSXqhr"
  }), (e as any)[94] = a, (e as any)[95] = U) : U = (e as any)[95];
  let W: any;
  ((e as any)[96] as any) !== (Ce as any) || ((e as any)[97] as any) !== (U as any) ? (W = ((t as any).jsx as any)(As, {
    "aria-label": U,
    icon: "trash",
    onClick: Ce,
    shape: "circle",
    style: (A as any).deleteAction,
    variant: "secondary"
  }), (e as any)[96] = Ce, (e as any)[97] = U, (e as any)[98] = W) : W = (e as any)[98];
  let X: any;
  ((e as any)[99] as any) !== (V as any) || ((e as any)[100] as any) !== (G as any) || ((e as any)[101] as any) !== (D as any) || ((e as any)[102] as any) !== (W as any) ? (X = ((t as any).jsxs as any)("div", {
    ...pe,
    children: [V, G, D, W]
  }), (e as any)[99] = V, (e as any)[100] = G, (e as any)[101] = D, (e as any)[102] = W, (e as any)[103] = X) : X = (e as any)[103];
  let Q: any;
  ((e as any)[104] as any) !== (H as any) || ((e as any)[105] as any) !== (X as any) ? (Q = ((t as any).jsxs as any)("div", {
    ...ve,
    children: [H, X]
  }), (e as any)[104] = H, (e as any)[105] = X, (e as any)[106] = Q) : Q = (e as any)[106];
  let je: any;
  return ((e as any)[107] as any) !== (L as any) || ((e as any)[108] as any) !== (Q as any) ? (je = ((t as any).jsxs as any)("div", {
    className: ke,
    children: [L, Q]
  }), (e as any)[107] = L, (e as any)[108] = Q, (e as any)[109] = je) : je = (e as any)[109], je;
}
function Ms(this: any, l: any, e: any): any {
  return ((t as any).jsxs as any)("li", {
    ...(we as any)((ne as any).body2, (A as any).trigger),
    children: [((t as any).jsx as any)("span", {
      "aria-hidden": !0,
      className: "sand-3nfvp2 sand-2lah0s",
      children: ((t as any).jsx as any)(Xe, {
        type: (l as any).type
      })
    }), (l as any).text]
  }, e);
}
function Ps(this: any): any {}
function Fs(this: any): any {}
function $s(this: any): any {
  return (qs as any)(Cs);
}
export { Es as AutomationDetailPanel };
//# debugId=ab8b8de6-bc92-4cdd-a06b-2b342437f7e7
