declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "0b9dbf66-35b5-4d9f-b668-ecad697b1f5b", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-0b9dbf66-35b5-4d9f-b668-ecad697b1f5b");
  } catch (e: any) {}
} as any)();
import { c as I, r as K, p as N, j as a, T as P } from "./index.eager-vendor-Qbf9YA6n.js";
import { u as W, aK as V, a$ as F, a_ as X, O as B, Q as D } from "./index.eager-app-Cj5f8Gby.js";
import { X as Q, Q as U, Y as G, U as O } from "./index-ZYxf-aBb.js";
import { aY as R } from "./index.eager-platform-Dcfeegfw.js";
const A: number = 80,
  q: any = {
    card: {
      kVAEAm: "sand-1n2onr6",
      k1xSpc: "sand-78zum5",
      kXwgrk: "sand-dt5ytf",
      kOIVth: "sand-1v2ro7d",
      kzqmXN: "sand-1cvmir6",
      ks0D6T: "sand-193iq5w",
      k7Eaqz: "sand-euugli",
      kmVPX3: "sand-c7ga6q",
      kaIpWk: "sand-gqmno8",
      k9WMMc: "sand-1yc453h",
      $$css: !0
    },
    title: {
      k7Eaqz: "sand-euugli",
      kVQacm: "sand-b3r6kr",
      kg5iWk: "sand-lyipyv",
      khDVqt: "sand-uxw1ft",
      kMwMTN: "sand-1wd3ewq",
      $$css: !0
    },
    body: {
      kqGvvJ: "sand-10im51j",
      k7Eaqz: "sand-euugli",
      kMwMTN: "sand-1o0liin",
      k1xSpc: "sand-104kibb",
      kJFfOR: "sand-1h7i4cw",
      kgKLqz: "sand-1ua5tub",
      kVQacm: "sand-b3r6kr",
      kg5iWk: "sand-lyipyv",
      kTgw9: "sand-13faqbe",
      $$css: !0
    },
    actionSecondary: {
      kMzoRj: "sand-qjedn3",
      kVAM5u: "sand-q03nf1",
      kWkggS: "sand-1tiofj7 sand-ex9vrg",
      kMwMTN: "sand-tyxrsu",
      $$css: !0
    }
  },
  J: any = {
    state: "idle",
    isPaused: !0,
    isFollowingPointer: !1,
    spinSignal: 0
  };
function Y(this: any, E: any): any {
  (Y as any).d = 271;
  const s: any = ((I as any).c as any)(30),
    {
      template: e,
      isPublished: n,
      photoUrl: b,
      mark: S,
      meta: $,
      footer: c
    }: any = E,
    m: any = (S as any) === (void 0 as any) ? J : S,
    M: any = {
      id: (e as any).shareId,
      avatarShape: (e as any).avatarShape ?? null,
      avatarColor: (e as any).avatarColor ?? null
    },
    T: any = (b as any) != (null as any) && ((b as any).length as any) > (0 as any),
    _: any = T ? (Q as any).color : (U as any)(M),
    h: any = ((K as any).useId as any)(),
    z: any = (W as any)(h);
  let k: any;
  ((s as any)[0] as any) !== ((e as any).description as any) ? (k = (((((e as any).description as any).replace as any)(/\s+/g, " ") as any).trim as any)(), (s as any)[0] = (e as any).description, (s as any)[1] = k) : k = (s as any)[1];
  const u: any = k,
    C: any = (e as any).name;
  let g: any, f: any;
  ((s as any)[2] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (g = (N as any)((q as any).card, (V as any).transcriptWidget), f = {
    className: "sand-78zum5 sand-6s0dn4 sand-1qughib sand-17d4w8g"
  }, (s as any)[2] = g, (s as any)[3] = f) : (g = (s as any)[2], f = (s as any)[3]);
  let d: any;
  ((s as any)[4] as any) !== (z as any) || ((s as any)[5] as any) !== ((e as any).name as any) || ((s as any)[6] as any) !== (h as any) ? (d = ((a as any).jsx as any)(R, {
    dir: "auto",
    id: h,
    ref: z,
    rootStyle: (q as any).title,
    size: "lg",
    weight: "semibold",
    children: (e as any).name
  }), (s as any)[4] = z, (s as any)[5] = (e as any).name, (s as any)[6] = h, (s as any)[7] = d) : d = (s as any)[7];
  let p: any;
  ((s as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (p = {
    className: "sand-78zum5 sand-6s0dn4 sand-2lah0s sand-17d4w8g"
  }, (s as any)[8] = p) : p = (s as any)[8];
  let t: any;
  ((s as any)[9] as any) !== (n as any) ? (t = ({
    0: {
      className: "sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-2lah0s sand-1nn3v0j sand-f159sx sand-1120s5i sand-mzvs34 sand-149ho13 sand-1b8i4yy sand-4on0b6"
    },
    1: {
      className: "sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-2lah0s sand-1nn3v0j sand-f159sx sand-1120s5i sand-mzvs34 sand-149ho13 sand-yjcdl2 sand-1le6hhr"
    }
  } as any)[(!!n as any) << (0 as any)], (s as any)[9] = n, (s as any)[10] = t) : t = (s as any)[10];
  let l: any;
  ((s as any)[11] as any) !== (n as any) ? (l = ({
    0: {
      className: "sand-1v4s8kt sand-ols6we sand-149ho13 sand-2lah0s sand-3zn3jg"
    },
    1: {
      className: "sand-1v4s8kt sand-ols6we sand-149ho13 sand-2lah0s sand-1rm5x0x"
    }
  } as any)[(!!n as any) << (0 as any)], (s as any)[11] = n, (s as any)[12] = l) : l = (s as any)[12];
  let i: any;
  ((s as any)[13] as any) !== (l as any) ? (i = ((a as any).jsx as any)("span", {
    "aria-hidden": !0,
    ...l
  }), (s as any)[13] = l, (s as any)[14] = i) : i = (s as any)[14];
  let x: any;
  ((s as any)[15] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (x = (N as any)((X as any).body2, (F as any).medium), (s as any)[15] = x) : x = (s as any)[15];
  let r: any;
  ((s as any)[16] as any) !== (n as any) ? (r = ((a as any).jsx as any)("span", {
    ...x,
    children: n ? ((a as any).jsx as any)(P, {
      id: "u3wRF+"
    }) : ((a as any).jsx as any)(P, {
      id: "ejZKhw"
    })
  }), (s as any)[16] = n, (s as any)[17] = r) : r = (s as any)[17];
  let o: any;
  ((s as any)[18] as any) !== (i as any) || ((s as any)[19] as any) !== (r as any) || ((s as any)[20] as any) !== (t as any) ? (o = ((a as any).jsx as any)("div", {
    ...p,
    children: ((a as any).jsxs as any)("div", {
      ...t,
      children: [i, r]
    })
  }), (s as any)[18] = i, (s as any)[19] = r, (s as any)[20] = t, (s as any)[21] = o) : o = (s as any)[21];
  let j: any;
  ((s as any)[22] as any) !== (o as any) || ((s as any)[23] as any) !== (d as any) ? (j = ((a as any).jsxs as any)("div", {
    ...f,
    children: [d, o]
  }), (s as any)[22] = o, (s as any)[23] = d, (s as any)[24] = j) : j = (s as any)[24];
  let y: any;
  ((s as any)[25] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (y = {
    className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-h8yej3 sand-euugli sand-q48mlj sand-9f619 sand-1qmwy7c sand-qjedn3 sand-1y0btm7 sand-q03nf1 sand-10e981r sand-b3r6kr"
  }, (s as any)[25] = y) : y = (s as any)[25];
  let v: any;
  ((s as any)[26] as any) !== (u as any) ? (v = ((u as any).length as any) > (0 as any) ? ((a as any).jsx as any)(R, {
    as: "p",
    dir: "auto",
    rootStyle: (q as any).body,
    size: "lg",
    children: u
  }) : null, (s as any)[26] = u, (s as any)[27] = v) : v = (s as any)[27];
  let w: any;
  return ((s as any)[28] as any) !== (c as any) ? (w = (c as any) === (void 0 as any) ? null : ((a as any).jsx as any)("div", {
    className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-h8yej3",
    children: c
  }), (s as any)[28] = c, (s as any)[29] = w) : w = (s as any)[29], ((a as any).jsxs as any)("article", {
    "aria-label": C,
    ...g,
    children: [j, ((a as any).jsx as any)("div", {
      ...y,
      style: {
        backgroundImage: (B as any)(_)
      },
      children: T ? ((a as any).jsx as any)(G, {
        avatarKey: (e as any).shareId,
        dataUrl: b,
        fillPx: A
      }) : ((a as any).jsx as any)(D, {
        color: _,
        isFollowingPointer: (m as any).isFollowingPointer,
        isPaused: (m as any).isPaused,
        shape: (O as any)(M),
        sizePx: A,
        spinSignal: (m as any).spinSignal,
        state: (m as any).state
      })
    }), v, $, w]
  });
}
export { Y as B, q as s };
//# debugId=0b9dbf66-35b5-4d9f-b668-ecad697b1f5b
