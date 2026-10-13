declare var HTMLElement: any;
declare var ResizeObserver: any;
declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "6a2876c9-da82-4263-919a-a81003065c8c", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-6a2876c9-da82-4263-919a-a81003065c8c");
  } catch (e: any) {}
} as any)();
import { c as y, u as fe, j as f, p as U } from "./index.eager-vendor-Qbf9YA6n.js";
import { i as Ee } from "./index.eager-platform-Dcfeegfw.js";
import { i as Ae } from "./index.eager-common-CdCvBQNJ.js";
import { dH as Ye, dI as Ue, dJ as Ke, dK as Ze, dL as Qe, b9 as pe, dM as qe, dN as Je, dO as es, bY as ss, dP as ts, dQ as ns, dR as as, dS as os, bT as is, dT as ds, dU as rs, a_ as K, dV as ls, dW as cs, dX as $e, dY as us, dZ as ms, d_ as ps, aP as fs, d$ as ks, e0 as gs, e1 as hs, d as Ms, e2 as xs } from "./index.eager-app-Cj5f8Gby.js";
import { bf as Ts, bg as bs, bh as _s, _ as ys, bi as Ce, bj as vs, bk as Is, at as v, p as Ss } from "./index-ZYxf-aBb.js";
import { c as Ns } from "./chunk-voice-memo-waveform-Bfx_1R7r.js";
function ws(this: any, t: any): any {
  switch ((t as any).status) {
    case "playing":
    case "paused":
      {
        const e: any = (t as any).segmentDurationsMs,
          s: any = (t as any).charTimesMs;
        return {
          positionMs: (t as any).positionMs,
          durationMs: (t as any).durationMs,
          ...((e as any) == (null as any) ? {} : {
            measuredMs: e
          }),
          ...((s as any) == (null as any) ? {} : {
            charTimesMs: s
          })
        };
      }
    case "idle":
    case "preparing":
    case "failed":
      return null;
  }
}
function ze(this: any, t: any): any {
  (ze as any).d = 836;
  const e: any = ((y as any).c as any)(7),
    {
      text: s,
      playback: o,
      onSeek: n
    }: any = t,
    {
      _: a
    }: any = (fe as any)();
  let l: any;
  if (((e as any)[0] as any) !== (a as any) || ((e as any)[1] as any) !== (n as any) || ((e as any)[2] as any) !== (o as any) || ((e as any)[3] as any) !== (s as any)) {
    const d: any = (ws as any)(o),
      u: any = (Ye as any)(s),
      k: any = (d as any) == (null as any) ? -1 : (Ue as any)({
        text: s,
        positionMs: (d as any).positionMs,
        durationMs: (d as any).durationMs,
        ...(((d as any).measuredMs as any) == (null as any) ? {} : {
          measuredMs: (d as any).measuredMs
        }),
        ...(((d as any).charTimesMs as any) == (null as any) ? {} : {
          charTimesMs: (d as any).charTimesMs
        })
      }),
      m: any = (k as any) < (0 as any) ? -1 : (Ke as any)(u, k),
      c: any = (p: any): any => (m as any) < (0 as any) ? "idle" : (p as any) < (m as any) ? "past" : (p as any) === (m as any) ? "current" : "future";
    l = ((u as any).map as any)((p: any, i: any): any => {
      const h: any = (c as any)(i);
      if (!(p as any).spoken) return ((f as any).jsx as any)("span", {
        "data-karaoke-gap": !0,
        children: (p as any).text
      }, `${(p as any).start}:${(p as any).end}`);
      const g: any = (h as any) === ("current" as any);
      return ((f as any).jsx as any)("button", {
        "aria-current": g || void 0,
        "aria-label": (a as any)({
          id: "M9a/vQ"
        }),
        "data-karaoke-token": h,
        onClick: (): any => (n as any)((Ze as any)({
          text: s,
          offset: (p as any).start,
          durationMs: d?.durationMs ?? 0,
          ...((d?.measuredMs as any) == (null as any) ? {} : {
            measuredMs: (d as any).measuredMs
          }),
          ...((d?.charTimesMs as any) == (null as any) ? {} : {
            charTimesMs: (d as any).charTimesMs
          })
        })),
        type: "button",
        ...({
          0: {
            className: "sand-c342km sand-ng3xce sand-1ghz6dp sand-1717udv sand-ln7xf2 sand-1heor9g sand-jbqb8w sand-1ypdohk sand-18zih8k"
          },
          4: {
            className: "sand-c342km sand-ng3xce sand-1ghz6dp sand-1717udv sand-ln7xf2 sand-jbqb8w sand-1ypdohk sand-18zih8k sand-tyxrsu"
          },
          2: {
            className: "sand-c342km sand-ng3xce sand-1ghz6dp sand-1717udv sand-ln7xf2 sand-jbqb8w sand-1ypdohk sand-18zih8k sand-tyxrsu"
          },
          6: {
            className: "sand-c342km sand-ng3xce sand-1ghz6dp sand-1717udv sand-ln7xf2 sand-jbqb8w sand-1ypdohk sand-18zih8k sand-tyxrsu"
          },
          1: {
            className: "sand-c342km sand-ng3xce sand-1ghz6dp sand-1717udv sand-ln7xf2 sand-jbqb8w sand-1ypdohk sand-18zih8k sand-1o0liin"
          },
          5: {
            className: "sand-c342km sand-ng3xce sand-1ghz6dp sand-1717udv sand-ln7xf2 sand-jbqb8w sand-1ypdohk sand-18zih8k sand-1o0liin"
          },
          3: {
            className: "sand-c342km sand-ng3xce sand-1ghz6dp sand-1717udv sand-ln7xf2 sand-jbqb8w sand-1ypdohk sand-18zih8k sand-1o0liin"
          },
          7: {
            className: "sand-c342km sand-ng3xce sand-1ghz6dp sand-1717udv sand-ln7xf2 sand-jbqb8w sand-1ypdohk sand-18zih8k sand-1o0liin"
          }
        } as any)[((((((h as any) === ("past" as any)) as any) << (2 as any) as any) | ((((h as any) === ("current" as any)) as any) << (1 as any) as any)) as any) | ((((h as any) === ("future" as any)) as any) << (0 as any) as any)],
        children: (p as any).text
      }, `${(p as any).start}:${(p as any).end}`);
    }), (e as any)[0] = a, (e as any)[1] = n, (e as any)[2] = o, (e as any)[3] = s, (e as any)[4] = l;
  } else l = (e as any)[4];
  let r: any;
  return ((e as any)[5] as any) !== (l as any) ? (r = ((f as any).jsx as any)((f as any).Fragment, {
    children: l
  }), (e as any)[5] = l, (e as any)[6] = r) : r = (e as any)[6], r;
}
function Pe(this: any, t: any): any {
  return `sand-voice-memo-transcript-${t}`;
}
function Le(this: any, t: any): any {
  (Le as any).d = 837;
  const e: any = ((y as any).c as any)(10),
    {
      entry: s
    }: any = t,
    o: any = (bs as any)();
  let n: any;
  ((e as any)[0] as any) !== (s as any) ? (n = (Qe as any)(s), (e as any)[0] = s, (e as any)[1] = n) : n = (e as any)[1];
  const a: any = n,
    l: any = ((s as any).channel as any) == (null as any),
    r: any = ((a as any).kind as any) === ("teach-recording" as any) ? (a as any).content : void 0;
  let d: any;
  ((e as any)[2] as any) !== ((a as any).content as any) || ((e as any)[3] as any) !== ((s as any).richText as any) || ((e as any)[4] as any) !== (o as any) || ((e as any)[5] as any) !== (r as any) ? (d = ((f as any).jsx as any)(_s, {
    content: (a as any).content,
    contentBeforeRichText: r,
    isOnUserBubble: !0,
    matcher: o,
    richText: (s as any).richText
  }), (e as any)[2] = (a as any).content, (e as any)[3] = (s as any).richText, (e as any)[4] = o, (e as any)[5] = r, (e as any)[6] = d) : d = (e as any)[6];
  let u: any;
  return ((e as any)[7] as any) !== (l as any) || ((e as any)[8] as any) !== (d as any) ? (u = ((f as any).jsx as any)(ys, {
    isTrusted: l,
    children: d
  }), (e as any)[7] = l, (e as any)[8] = d, (e as any)[9] = u) : u = (e as any)[9], u;
}
function De(this: any, t: any): any {
  (De as any).d = 838;
  const e: any = ((y as any).c as any)(22),
    {
      entryId: s,
      voice: o
    }: any = t;
  if (((o as any).tone as any) === ("user" as any)) {
    let i: any;
    ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (i = {
      className: "sand-euugli sand-1rlwhtf sand-j0a0fe sand-1hx0egp sand-27l2si"
    }, (e as any)[0] = i) : i = (e as any)[0];
    let h: any;
    ((e as any)[1] as any) !== (s as any) ? (h = (Pe as any)(s), (e as any)[1] = s, (e as any)[2] = h) : h = (e as any)[2];
    let g: any;
    ((e as any)[3] as any) !== ((o as any).entry as any) ? (g = ((f as any).jsx as any)(Le, {
      entry: (o as any).entry
    }), (e as any)[3] = (o as any).entry, (e as any)[4] = g) : g = (e as any)[4];
    let x: any;
    return ((e as any)[5] as any) !== (h as any) || ((e as any)[6] as any) !== (g as any) ? (x = ((f as any).jsx as any)("div", {
      ...i,
      "data-speaker": "user",
      "data-voice-memo-transcript": !0,
      id: h,
      children: g
    }), (e as any)[5] = h, (e as any)[6] = g, (e as any)[7] = x) : x = (e as any)[7], x;
  }
  const n: any = (o as any).spokenText,
    a: any = (o as any).playback,
    l: any = (o as any).onSeek,
    r: any = (n as any) != (null as any) && ((n as any).length as any) > (0 as any) && (l as any) != (null as any) && (a as any) != (null as any) && (((a as any).status as any) === ("playing" as any) || ((a as any).status as any) === ("paused" as any));
  let d: any;
  ((e as any)[8] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = {
    className: "sand-euugli sand-1rlwhtf sand-j0a0fe sand-1hx0egp sand-27l2si"
  }, (e as any)[8] = d) : d = (e as any)[8];
  const u: any = r || void 0,
    k: any = r ? "auto" : void 0;
  let m: any;
  ((e as any)[9] as any) !== (s as any) ? (m = (Pe as any)(s), (e as any)[9] = s, (e as any)[10] = m) : m = (e as any)[10];
  let c: any;
  ((e as any)[11] as any) !== (l as any) || ((e as any)[12] as any) !== (a as any) || ((e as any)[13] as any) !== (r as any) || ((e as any)[14] as any) !== (n as any) || ((e as any)[15] as any) !== ((o as any).content as any) ? (c = r && (n as any) != (null as any) && (a as any) != (null as any) && (l as any) != (null as any) ? ((f as any).jsx as any)(ze, {
    onSeek: l,
    playback: a,
    text: n
  }) : ((f as any).jsx as any)(Ts, {
    content: (o as any).content,
    isSourceTrusted: !0,
    isStreaming: !1
  }), (e as any)[11] = l, (e as any)[12] = a, (e as any)[13] = r, (e as any)[14] = n, (e as any)[15] = (o as any).content, (e as any)[16] = c) : c = (e as any)[16];
  let p: any;
  return ((e as any)[17] as any) !== (u as any) || ((e as any)[18] as any) !== (k as any) || ((e as any)[19] as any) !== (m as any) || ((e as any)[20] as any) !== (c as any) ? (p = ((f as any).jsx as any)("div", {
    ...d,
    "data-karaoke": u,
    "data-speaker": "assistant",
    "data-voice-memo-transcript": !0,
    dir: k,
    id: m,
    children: c
  }), (e as any)[17] = u, (e as any)[18] = k, (e as any)[19] = m, (e as any)[20] = c, (e as any)[21] = p) : p = (e as any)[21], p;
}
const js: number = 8,
  Ps: number = 28,
  Re: number = 20,
  Cs: number = 16,
  Es: number = 2.75,
  As: any = ((((Ps as any) - (Re as any) as any) / (2 as any) as any) + (((Re as any) - (Cs as any) as any) / (2 as any) as any) as any) + (Es as any),
  Rs: any = (js as any) + (As as any),
  Os: number = .5,
  Vs: any = (Rs as any) - (Os as any),
  qs: number = 8,
  $s: any = (Vs as any) - (qs as any),
  zs: string = "data-voice-memo-transcript-overflow",
  Ls: string = "data-voice-memo-transcript-well",
  Ds: string = "data-voice-memo-transcript",
  Hs: string = "--sand-voice-memo-transcript-fade",
  Fs: number = 24,
  He: number = 1;
function Xs(this: any, t: any): any {
  return ((t as any).deltaY as any) < (0 as any) ? ((t as any).scrollTop as any) > (0 as any) : ((t as any).deltaY as any) > (0 as any) ? (((t as any).scrollTop as any) + ((t as any).clientHeight as any) as any) < (((t as any).scrollHeight as any) - (1 as any) as any) : !1;
}
function Oe(this: any, t: any): any {
  const e: any = (t as any).currentTarget;
  e instanceof HTMLElement && (Xs as any)({
    deltaY: (t as any).deltaY,
    scrollTop: (e as any).scrollTop,
    clientHeight: (e as any).clientHeight,
    scrollHeight: (e as any).scrollHeight
  }) && ((t as any).stopPropagation as any)();
}
function Ws(this: any, t: any): any {
  return (((t as any).proseHeight as any) - ((t as any).wellHeight as any) as any) > (He as any);
}
function Bs(this: any, t: any): any {
  const e: any = ((t as any) - (He as any) as any) / (Fs as any);
  return ((Math as any).min as any)(1, ((Math as any).max as any)(0, (((Math as any).round as any)((e as any) * (100 as any)) as any) / (100 as any)));
}
function Gs(this: any, t: any): any {
  if ((t as any) == (null as any)) return;
  const e: any = ((t as any).querySelector as any)(`[${Ls}]`);
  (Ae as any)((e as any) != (null as any), "voice memo transcript frame without its scroller");
  const s: any = ((e as any).querySelector as any)(`[${Ds}]`);
  (Ae as any)((s as any) != (null as any), "voice memo transcript scroller without its prose");
  let o: any = !1,
    n: any = 0,
    a: any = -1;
  const l: any = (): any => {
      const u: any = ((n as any) - ((e as any).scrollTop as any) as any) - ($s as any),
        k: any = o ? (Bs as any)(u) : 0;
      (k as any) !== (a as any) && (a = k, (((t as any).style as any).setProperty as any)(Hs, (String as any)(k)));
    },
    r: any = (): any => {
      o = (Ws as any)({
        proseHeight: (((s as any).getBoundingClientRect as any)() as any).height,
        wellHeight: (e as any).clientHeight
      }), ((t as any).toggleAttribute as any)(zs, o), n = ((e as any).scrollHeight as any) - ((e as any).clientHeight as any), (l as any)();
    };
  ((e as any).addEventListener as any)("wheel", Oe, {
    capture: !0,
    passive: !0
  }), ((e as any).addEventListener as any)("scroll", l, {
    passive: !0
  });
  const d: any = new (ResizeObserver as any)(r);
  return ((d as any).observe as any)(e, {
    box: "border-box"
  }), ((d as any).observe as any)(s, {
    box: "border-box"
  }), (): any => {
    ((d as any).disconnect as any)(), ((e as any).removeEventListener as any)("scroll", l), ((e as any).removeEventListener as any)("wheel", Oe, {
      capture: !0
    });
  };
}
const T: any = {
  pellet: {
    k1xSpc: "sand-78zum5",
    kXwgrk: "sand-dt5ytf",
    kGNEyG: "sand-1qjc9v5",
    kzqmXN: "sand-eq5yr9",
    ks0D6T: "sand-193iq5w",
    kLKAdn: "sand-1yrsyyn",
    kwRFfy: "sand-f159sx",
    kGO01o: "sand-10b6aqq",
    kZCmMZ: "sand-mzvs34",
    $$css: !0
  },
  pelletOpen: {
    kGO01o: "sand-wib8y2",
    $$css: !0
  },
  pelletAgent: {
    kaIpWk: "sand-1m3ak92",
    kWkggS: "sand-18f60m8",
    $$css: !0
  },
  pelletAgentWithSpeed: {
    kaIpWk: "sand-rnuji5",
    $$css: !0
  },
  control: {
    kMwMTN: "sand-1heor9g sand-15akisz",
    kWkggS: "sand-jbqb8w sand-8pkhp4",
    $$css: !0
  },
  duration: {
    kmuXW: "sand-2lah0s",
    k7Eaqz: "sand-13n9wmd",
    k9WMMc: "sand-p4054r",
    kcqcaj: "sand-ss6m8b",
    kMwMTN: "sand-1heor9g",
    kSiTet: "sand-iiclqw",
    $$css: !0
  },
  durationAgent: {
    kGuDYH: "sand-1k6wstc",
    kLWn49: "sand-1xxsxie",
    kSiTet: "sand-197sbye",
    $$css: !0
  },
  durationUnderSpeed: {
    k9WMMc: "sand-2b8uid",
    $$css: !0
  },
  speed: {
    k1xSpc: "sand-3nfvp2",
    kGNEyG: "sand-6s0dn4",
    kjj79g: "sand-l56j7k",
    kzqmXN: "sand-1guw455",
    kZKoxP: "sand-17rw0jw",
    kogj98: "sand-1ghz6dp",
    khDVqt: "sand-uxw1ft",
    kMzoRj: "sand-c342km",
    ksu8eU: "sand-ng3xce",
    kaIpWk: "sand-149ho13",
    kcqcaj: "sand-ss6m8b",
    kkrTdU: "sand-1ypdohk",
    kMwMTN: "sand-ngo0nf",
    kWkggS: "sand-e8d49r sand-1ash6b9",
    $$css: !0
  },
  failure: {
    keoZOQ: "sand-1om1abp",
    kZCmMZ: "sand-tw3t59",
    kMwMTN: "sand-1heor9g",
    kSiTet: "sand-iiclqw",
    $$css: !0
  },
  abridged: {
    keoZOQ: "sand-1om1abp",
    kZCmMZ: "sand-tw3t59",
    kMwMTN: "sand-1heor9g",
    kSiTet: "sand-1ks1olk",
    $$css: !0
  }
};
function lt(this: any, t: any): any {
  const e: any = ((y as any).c as any)(3),
    s: any = (pe as any)("sand_voice_memos"),
    o: any = (qe as any)(((Ce as any)() as any).agentId);
  if (!s || ((t as any).clientNonce as any) == (null as any)) return null;
  let n: any;
  return ((e as any)[0] as any) !== (o as any) || ((e as any)[1] as any) !== ((t as any).clientNonce as any) ? (n = (ps as any)({
    agentMemos: o,
    clientNonce: (t as any).clientNonce
  }), (e as any)[0] = o, (e as any)[1] = (t as any).clientNonce, (e as any)[2] = n) : n = (e as any)[2], n;
}
const Ve: any = new (WeakMap as any)();
function Ys(this: any, t: any, e: any): any {
  const s: any = ((Ve as any).get as any)(t);
  if ((s?.content as any) === (e as any)) return s;
  const o: any = ($e as any)(e),
    n: any = {
      content: e,
      text: (o as any).text,
      isTruncated: (o as any).isTruncated,
      textDigest: (ms as any)((o as any).text),
      estimated: (us as any)({
        seed: (t as any).id,
        text: (o as any).text
      })
    };
  return ((Ve as any).set as any)(t, n), n;
}
function ct(this: any, t: any, e: any): any {
  const s: any = ((y as any).c as any)(25),
    o: any = (pe as any)("sand_voice_memos"),
    {
      agentId: n,
      owner: a
    }: any = (Ce as any)(),
    l: any = (qe as any)(n);
  let r: any;
  ((s as any)[0] as any) !== (n as any) || ((s as any)[1] as any) !== ((t as any).id as any) ? (r = {
    agentId: n,
    key: (t as any).id
  }, (s as any)[0] = n, (s as any)[1] = (t as any).id, (s as any)[2] = r) : r = (s as any)[2];
  const d: any = (Je as any)(r),
    {
      toggle: u,
      seek: k
    }: any = (es as any)(),
    m: any = (ss as any)(n)?.voiceId;
  if (!o || (n as any) == (null as any) || ((t as any).streaming as any) === (!0 as any) || !(vs as any)(t)) return null;
  let c: any, p: any, i: any;
  if (((s as any)[3] as any) !== (l as any) || ((s as any)[4] as any) !== (e as any) || ((s as any)[5] as any) !== (t as any)) {
    i = ((Symbol as any).for as any)("react.early_return_sentinel");
    e: {
      if (c = (Ys as any)(t, e), (((c as any).text as any).length as any) === (0 as any)) {
        i = null;
        break e;
      }
      p = (ts as any)({
        agentMemos: l,
        key: (t as any).id,
        textDigest: (c as any).textDigest,
        estimated: (c as any).estimated
      });
    }
    (s as any)[3] = l, (s as any)[4] = e, (s as any)[5] = t, (s as any)[6] = c, (s as any)[7] = p, (s as any)[8] = i;
  } else c = (s as any)[6], p = (s as any)[7], i = (s as any)[8];
  if ((i as any) !== (((Symbol as any).for as any)("react.early_return_sentinel") as any)) return i;
  const h: any = p;
  let g: any;
  ((s as any)[9] as any) !== (n as any) || ((s as any)[10] as any) !== ((t as any).id as any) || ((s as any)[11] as any) !== (h as any) || ((s as any)[12] as any) !== (a as any) || ((s as any)[13] as any) !== ((c as any).text as any) || ((s as any)[14] as any) !== ((c as any).textDigest as any) || ((s as any)[15] as any) !== (u as any) || ((s as any)[16] as any) !== (m as any) ? (g = (): any => (u as any)({
    agentId: n,
    key: (t as any).id,
    text: (c as any).text,
    textDigest: (c as any).textDigest,
    durationMs: (h as any).durationMs,
    owner: a,
    ...((m as any) == (null as any) ? {} : {
      voiceId: m
    })
  }), (s as any)[9] = n, (s as any)[10] = (t as any).id, (s as any)[11] = h, (s as any)[12] = a, (s as any)[13] = (c as any).text, (s as any)[14] = (c as any).textDigest, (s as any)[15] = u, (s as any)[16] = m, (s as any)[17] = g) : g = (s as any)[17];
  let x: any;
  return ((s as any)[18] as any) !== ((t as any).id as any) || ((s as any)[19] as any) !== (h as any) || ((s as any)[20] as any) !== (d as any) || ((s as any)[21] as any) !== (k as any) || ((s as any)[22] as any) !== ((c as any).isTruncated as any) || ((s as any)[23] as any) !== (g as any) ? (x = {
    entryId: (t as any).id,
    memo: h,
    isTruncated: (c as any).isTruncated,
    playback: d,
    onToggle: g,
    onSeek: k
  }, (s as any)[18] = (t as any).id, (s as any)[19] = h, (s as any)[20] = d, (s as any)[21] = k, (s as any)[22] = (c as any).isTruncated, (s as any)[23] = g, (s as any)[24] = x) : x = (s as any)[24], x;
}
function Us(this: any, t: any): any {
  switch ((t as any).status) {
    case "playing":
    case "paused":
      return ((t as any).durationMs as any) <= (0 as any) ? 0 : ((Math as any).min as any)(1, ((Math as any).max as any)(0, ((t as any).positionMs as any) / ((t as any).durationMs as any)));
    case "idle":
    case "preparing":
    case "failed":
      return 0;
  }
}
function Ks(this: any, t: any): any {
  switch ((t as any).status) {
    case "playing":
    case "paused":
      return {
        positionMs: (t as any).positionMs,
        durationMs: (t as any).durationMs
      };
    case "preparing":
    case "idle":
    case "failed":
      return null;
  }
}
function Zs(this: any, t: any, e: any): any {
  switch ((t as any).status) {
    case "playing":
    case "paused":
      return ((Math as any).max as any)(0, ((t as any).durationMs as any) - ((t as any).positionMs as any));
    case "idle":
    case "preparing":
    case "failed":
      return e;
  }
}
function Qs(this: any, t: any): any {
  return ((t as any).status as any) === ("failed" as any) && (((t as any).failure as any).retry as any) == (null as any);
}
function Fe(this: any, t: any): any {
  (Fe as any).d = 772;
  const e: any = ((y as any).c as any)(15),
    {
      playback: s,
      onToggle: o
    }: any = t,
    {
      _: n
    }: any = (fe as any)();
  let a: any;
  ((e as any)[0] as any) !== (s as any) ? (a = (Qs as any)(s), (e as any)[0] = s, (e as any)[1] = a) : a = (e as any)[1];
  const l: any = a,
    r: any = l ? "idle" : (s as any).status;
  let d: any;
  ((e as any)[2] as any) !== (n as any) || ((e as any)[3] as any) !== (r as any) ? (d = (((): any => {
    switch (r) {
      case "playing":
        return {
          label: (n as any)({
            id: "RH7WEB"
          }),
          icon: "pause"
        };
      case "preparing":
        return {
          label: (n as any)({
            id: "YPa5jn"
          }),
          icon: "play"
        };
      case "failed":
        return {
          label: (n as any)({
            id: "eX001i"
          }),
          icon: "play"
        };
      case "idle":
      case "paused":
        return {
          label: (n as any)({
            id: "dlWMMo"
          }),
          icon: "play"
        };
    }
  }) as any)(), (e as any)[2] = n, (e as any)[3] = r, (e as any)[4] = d) : d = (e as any)[4];
  const u: any = d,
    k: any = (r as any) === ("preparing" as any),
    m: any = k || void 0;
  let c: any;
  ((e as any)[5] as any) !== (k as any) ? (c = k ? ((f as any).jsx as any)(fs, {
    inheritColor: !0,
    size: 16
  }) : void 0, (e as any)[5] = k, (e as any)[6] = c) : c = (e as any)[6];
  const p: any = k ? void 0 : "filled";
  let i: any;
  return ((e as any)[7] as any) !== ((u as any).icon as any) || ((e as any)[8] as any) !== ((u as any).label as any) || ((e as any)[9] as any) !== (l as any) || ((e as any)[10] as any) !== (o as any) || ((e as any)[11] as any) !== (m as any) || ((e as any)[12] as any) !== (c as any) || ((e as any)[13] as any) !== (p as any) ? (i = ((f as any).jsx as any)(Ss, {
    "aria-busy": m,
    "aria-label": (u as any).label,
    disabled: l,
    glyph: c,
    icon: (u as any).icon,
    iconVariant: p,
    onClick: o,
    shape: "circle",
    size: "md",
    style: (T as any).control
  }), (e as any)[7] = (u as any).icon, (e as any)[8] = (u as any).label, (e as any)[9] = l, (e as any)[10] = o, (e as any)[11] = m, (e as any)[12] = c, (e as any)[13] = p, (e as any)[14] = i) : i = (e as any)[14], i;
}
function Xe(this: any): any {
  (Xe as any).d = 774;
  const t: any = ((y as any).c as any)(17),
    {
      _: e
    }: any = (fe as any)(),
    s: any = (ks as any)(),
    {
      setPlaybackRate: o
    }: any = (gs as any)();
  let n: any;
  ((t as any)[0] as any) !== (e as any) ? (n = (m: any): any => (e as any)({
    id: "ha5Bzw",
    values: {
      playbackRate: m
    }
  }), (t as any)[0] = e, (t as any)[1] = n) : n = (t as any)[1];
  const a: any = n;
  let l: any;
  ((t as any)[2] as any) !== (s as any) || ((t as any)[3] as any) !== (a as any) ? (l = (a as any)(s), (t as any)[2] = s, (t as any)[3] = a, (t as any)[4] = l) : l = (t as any)[4];
  let r: any;
  ((t as any)[5] as any) !== (s as any) || ((t as any)[6] as any) !== (o as any) || ((t as any)[7] as any) !== (a as any) ? (r = (): any => {
    const m: any = (hs as any)(xs, s);
    (o as any)(m), (Ms as any)((a as any)(m));
  }, (t as any)[5] = s, (t as any)[6] = o, (t as any)[7] = a, (t as any)[8] = r) : r = (t as any)[8];
  let d: any;
  ((t as any)[9] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (d = (U as any)((K as any).label, (T as any).speed), (t as any)[9] = d) : d = (t as any)[9];
  let u: any;
  ((t as any)[10] as any) !== (e as any) || ((t as any)[11] as any) !== (s as any) ? (u = (e as any)({
    id: "vCGjjN",
    values: {
      playbackRate: s
    }
  }), (t as any)[10] = e, (t as any)[11] = s, (t as any)[12] = u) : u = (t as any)[12];
  let k: any;
  return ((t as any)[13] as any) !== (l as any) || ((t as any)[14] as any) !== (r as any) || ((t as any)[15] as any) !== (u as any) ? (k = ((f as any).jsx as any)("button", {
    "aria-label": l,
    "data-voice-memo-speed": "",
    onClick: r,
    type: "button",
    ...d,
    children: u
  }), (t as any)[13] = l, (t as any)[14] = r, (t as any)[15] = u, (t as any)[16] = k) : k = (t as any)[16], k;
}
function Js(this: any, t: any): any {
  (Js as any).d = 773;
  const e: any = ((y as any).c as any)(128),
    {
      voice: s,
      memo: o,
      adjacency: n
    }: any = t,
    {
      _: a
    }: any = (fe as any)(),
    l: any = (Is as any)()?.trim() || (a as any)({
      id: "ixkTse"
    }),
    {
      agentId: r,
      scope: d,
      shownEntryId: u,
      findEntryId: k
    }: any = (Ce as any)(),
    m: any = (ns as any)(),
    c: any = (as as any)(),
    p: any = (os as any)(),
    i: any = (u as any) === ((s as any).entryId as any),
    h: any = (k as any) === ((s as any).entryId as any),
    g: any = ((s as any).tone as any) === ("user" as any),
    x: any = (pe as any)("sand_chat_prose_15px"),
    We: any = (pe as any)("sand_voice_memo_speed"),
    ke: any = (is as any)(),
    M: any = ((s as any).tone as any) === ("agent" as any) ? (s as any).playback : ds;
  let Z: any;
  ((e as any)[0] as any) !== (r as any) || ((e as any)[1] as any) !== ((s as any).entryId as any) ? (Z = {
    agentId: r,
    key: (s as any).entryId
  }, (e as any)[0] = r, (e as any)[1] = (s as any).entryId, (e as any)[2] = Z) : Z = (e as any)[2];
  const ge: any = (rs as any)(Z);
  let Q: any;
  ((e as any)[3] as any) !== (M as any) || ((e as any)[4] as any) !== ((s as any).tone as any) ? (Q = ((s as any).tone as any) === ("agent" as any) ? (Ks as any)(M) : null, (e as any)[3] = M, (e as any)[4] = (s as any).tone, (e as any)[5] = Q) : Q = (e as any)[5];
  const I: any = Q;
  let J: any;
  ((e as any)[6] as any) !== (r as any) || ((e as any)[7] as any) !== ((s as any).entryId as any) || ((e as any)[8] as any) !== ((s as any).tone as any) ? (J = ((s as any).tone as any) === ("agent" as any) && (r as any) != (null as any) ? {
    agentId: r,
    key: (s as any).entryId
  } : null, (e as any)[6] = r, (e as any)[7] = (s as any).entryId, (e as any)[8] = (s as any).tone, (e as any)[9] = J) : J = (e as any)[9];
  const _: any = J,
    ee: any = ((s as any).tone as any) === ("agent" as any),
    b: any = ee && We;
  let se: any;
  ((e as any)[10] as any) !== (c as any) || ((e as any)[11] as any) !== (p as any) || ((e as any)[12] as any) !== (_ as any) ? (se = (): any => ((_ as any) != (null as any) && (p as any) != (null as any) && ((c as any).offered as any)(_), st), (e as any)[10] = c, (e as any)[11] = p, (e as any)[12] = _, (e as any)[13] = se) : se = (e as any)[13], (Ee as any)(se);
  let te: any;
  ((e as any)[14] as any) !== (ke as any) || ((e as any)[15] as any) !== (ee as any) ? (te = (): any => (ee && (ke as any)("sand_voice_memo_speed"), et), (e as any)[14] = ke, (e as any)[15] = ee, (e as any)[16] = te) : te = (e as any)[16], (Ee as any)(te);
  let ne: any;
  ((e as any)[17] as any) !== (m as any) || ((e as any)[18] as any) !== (h as any) || ((e as any)[19] as any) !== (i as any) || ((e as any)[20] as any) !== (d as any) || ((e as any)[21] as any) !== (c as any) || ((e as any)[22] as any) !== (_ as any) || ((e as any)[23] as any) !== ((s as any).entryId as any) ? (ne = (): any => {
    if ((d as any) != (null as any)) {
      if ((_ as any) != (null as any) && ((c as any).transcriptToggled as any)({
        ..._,
        action: i ? "collapsed" : "expanded"
      }), i) {
        h ? ((m as any).foldTranscript as any)({
          scope: d,
          entryId: (s as any).entryId
        }) : ((m as any).closeTranscript as any)();
        return;
      }
      ((m as any).revealTranscript as any)({
        scope: d,
        entryId: (s as any).entryId
      });
    }
  }, (e as any)[17] = m, (e as any)[18] = h, (e as any)[19] = i, (e as any)[20] = d, (e as any)[21] = c, (e as any)[22] = _, (e as any)[23] = (s as any).entryId, (e as any)[24] = ne) : ne = (e as any)[24];
  const S: any = ne;
  let ae: any;
  ((e as any)[25] as any) !== ((s as any).entryId as any) ? (ae = (Pe as any)((s as any).entryId), (e as any)[25] = (s as any).entryId, (e as any)[26] = ae) : ae = (e as any)[26];
  const he: any = ae;
  let oe: any;
  ((e as any)[27] as any) !== (i as any) || ((e as any)[28] as any) !== (s as any) ? (oe = ((s as any).tone as any) === ("user" as any) ? {
    tone: "user",
    entry: (s as any).entry
  } : (tt as any)(s, i), (e as any)[27] = i, (e as any)[28] = s, (e as any)[29] = oe) : oe = (e as any)[29];
  const Me: any = oe;
  let Y: any;
  if (((s as any).tone as any) === ("agent" as any) && (I as any) != (null as any)) {
    let G: any;
    ((e as any)[30] as any) !== (a as any) ? (G = (a as any)({
      id: "0zvfOc"
    }), (e as any)[30] = a, (e as any)[31] = G) : G = (e as any)[31];
    const je: any = ((I as any).durationMs as any) > (0 as any) ? (I as any).durationMs : (o as any).durationMs;
    let me: any;
    ((e as any)[32] as any) !== ((I as any).positionMs as any) || ((e as any)[33] as any) !== (je as any) || ((e as any)[34] as any) !== (G as any) || ((e as any)[35] as any) !== ((s as any).onSeek as any) ? (me = {
      label: G,
      positionMs: (I as any).positionMs,
      durationMs: je,
      onSeek: (s as any).onSeek
    }, (e as any)[32] = (I as any).positionMs, (e as any)[33] = je, (e as any)[34] = G, (e as any)[35] = (s as any).onSeek, (e as any)[36] = me) : me = (e as any)[36], Y = me;
  }
  let N: any;
  ((e as any)[37] as any) !== ((n as any).isContinuedFromPrev as any) || ((e as any)[38] as any) !== ((n as any).isContinuedToNext as any) || ((e as any)[39] as any) !== (b as any) || ((e as any)[40] as any) !== (x as any) || ((e as any)[41] as any) !== (i as any) || ((e as any)[42] as any) !== (g as any) ? (N = (U as any)((K as any).body1, (v as any).message, x && (v as any).proseFontSize, g && (v as any).user, (T as any).pellet, !g && (T as any).pelletAgent, b && !i && (T as any).pelletAgentWithSpeed, i && (T as any).pelletOpen, (n as any).isContinuedFromPrev && (g ? (v as any).userContinuedPrev : (v as any).assistantContinuedPrev), (n as any).isContinuedToNext && (g ? (v as any).userContinuedNext : (v as any).assistantContinuedNext)), (e as any)[37] = (n as any).isContinuedFromPrev, (e as any)[38] = (n as any).isContinuedToNext, (e as any)[39] = b, (e as any)[40] = x, (e as any)[41] = i, (e as any)[42] = g, (e as any)[43] = N) : N = (e as any)[43];
  const xe: any = ((M as any).status as any) === ("preparing" as any) || ((s as any).tone as any) === ("agent" as any) && ((M as any).status as any) === ("idle" as any) && (ge as any) === ("warming" as any) || void 0,
    Te: any = (a as any)(g ? {
      id: "5VG8Gj"
    } : {
      id: "Dc4qN0",
      values: {
        assistantName: l
      }
    }),
    be: any = (n as any).isContinuedToNext || void 0,
    _e: any = (n as any).isContinuedFromPrev || void 0,
    ye: any = i || void 0,
    ve: any = ((s as any).tone as any) === ("agent" as any) && (ge as any) !== ("idle" as any) ? ge : void 0,
    Be: any = (M as any).status,
    Ie: any = g ? "user" : "assistant";
  let ie: any;
  ((e as any)[44] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ie = {
    className: "sand-78zum5 sand-6s0dn4 sand-ehausa sand-euugli sand-zicqy"
  }, (e as any)[44] = ie) : ie = (e as any)[44];
  let w: any;
  ((e as any)[45] as any) !== ((s as any).onToggle as any) || ((e as any)[46] as any) !== ((s as any).playback as any) || ((e as any)[47] as any) !== ((s as any).tone as any) ? (w = ((s as any).tone as any) === ("agent" as any) ? ((f as any).jsx as any)(Fe, {
    onToggle: (s as any).onToggle,
    playback: (s as any).playback
  }) : null, (e as any)[45] = (s as any).onToggle, (e as any)[46] = (s as any).playback, (e as any)[47] = (s as any).tone, (e as any)[48] = w) : w = (e as any)[48];
  const Ge: any = (o as any).peaks;
  let j: any;
  ((e as any)[49] as any) !== (M as any) ? (j = (Us as any)(M), (e as any)[49] = M, (e as any)[50] = j) : j = (e as any)[50];
  let P: any;
  ((e as any)[51] as any) !== (Y as any) ? (P = (Y as any) == (null as any) ? {} : {
    seek: Y
  }, (e as any)[51] = Y, (e as any)[52] = P) : P = (e as any)[52];
  let C: any;
  ((e as any)[53] as any) !== ((o as any).peaks as any) || ((e as any)[54] as any) !== (j as any) || ((e as any)[55] as any) !== (P as any) || ((e as any)[56] as any) !== (S as any) ? (C = ((f as any).jsx as any)(Ns, {
    onTap: S,
    peaks: Ge,
    progress: j,
    ...P
  }), (e as any)[53] = (o as any).peaks, (e as any)[54] = j, (e as any)[55] = P, (e as any)[56] = S, (e as any)[57] = C) : C = (e as any)[57];
  let de: any;
  ((e as any)[58] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (de = {
    className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-1ed6fcf sand-2lah0s sand-euugli"
  }, (e as any)[58] = de) : de = (e as any)[58];
  let E: any;
  ((e as any)[59] as any) !== (b as any) ? (E = b ? ((f as any).jsx as any)(Xe, {}) : null, (e as any)[59] = b, (e as any)[60] = E) : E = (e as any)[60];
  let A: any;
  ((e as any)[61] as any) !== (a as any) || ((e as any)[62] as any) !== (i as any) ? (A = (a as any)(i ? {
    id: "9uXmKJ"
  } : {
    id: "iko5Ih"
  }), (e as any)[61] = a, (e as any)[62] = i, (e as any)[63] = A) : A = (e as any)[63];
  let re: any;
  ((e as any)[64] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (re = {
    className: "sand-78zum5 sand-6s0dn4 sand-euugli sand-1ghz6dp sand-1717udv sand-c342km sand-ng3xce sand-jbqb8w sand-1heor9g sand-ln7xf2 sand-1ypdohk"
  }, (e as any)[64] = re) : re = (e as any)[64];
  let R: any;
  ((e as any)[65] as any) !== (b as any) || ((e as any)[66] as any) !== (g as any) ? (R = (U as any)((K as any).caption, (T as any).duration, !g && (T as any).durationAgent, b && (T as any).durationUnderSpeed), (e as any)[65] = b, (e as any)[66] = g, (e as any)[67] = R) : R = (e as any)[67];
  let O: any;
  ((e as any)[68] as any) !== ((o as any).durationMs as any) || ((e as any)[69] as any) !== (M as any) ? (O = (ls as any)((Zs as any)(M, (o as any).durationMs)), (e as any)[68] = (o as any).durationMs, (e as any)[69] = M, (e as any)[70] = O) : O = (e as any)[70];
  let V: any;
  ((e as any)[71] as any) !== (R as any) || ((e as any)[72] as any) !== (O as any) ? (V = ((f as any).jsx as any)("span", {
    ...R,
    "data-voice-memo-duration": !0,
    children: O
  }), (e as any)[71] = R, (e as any)[72] = O, (e as any)[73] = V) : V = (e as any)[73];
  let q: any;
  ((e as any)[74] as any) !== (i as any) || ((e as any)[75] as any) !== (A as any) || ((e as any)[76] as any) !== (V as any) || ((e as any)[77] as any) !== (S as any) || ((e as any)[78] as any) !== (he as any) ? (q = ((f as any).jsx as any)("button", {
    "aria-controls": he,
    "aria-expanded": i,
    "aria-label": A,
    onClick: S,
    type: "button",
    ...re,
    children: V
  }), (e as any)[74] = i, (e as any)[75] = A, (e as any)[76] = V, (e as any)[77] = S, (e as any)[78] = he, (e as any)[79] = q) : q = (e as any)[79];
  let $: any;
  ((e as any)[80] as any) !== (E as any) || ((e as any)[81] as any) !== (q as any) ? ($ = ((f as any).jsxs as any)("div", {
    ...de,
    children: [E, q]
  }), (e as any)[80] = E, (e as any)[81] = q, (e as any)[82] = $) : $ = (e as any)[82];
  let z: any;
  ((e as any)[83] as any) !== (w as any) || ((e as any)[84] as any) !== (C as any) || ((e as any)[85] as any) !== ($ as any) ? (z = ((f as any).jsxs as any)("div", {
    ...ie,
    children: [w, C, $]
  }), (e as any)[83] = w, (e as any)[84] = C, (e as any)[85] = $, (e as any)[86] = z) : z = (e as any)[86];
  const Se: any = i ? void 0 : !0,
    Ne: any = i ? void 0 : "",
    we: any = i ? void 0 : !0;
  let L: any;
  ((e as any)[87] as any) !== (i as any) ? (L = ({
    0: {
      className: "sand-rvj5dj sand-ihq33y sand-nalus7 sand-gqtt45 sand-47corl sand-1qn9uv2 sand-4wkmsb sand-1da2sx9 sand-1e6nqfh"
    },
    1: {
      className: "sand-rvj5dj sand-nalus7 sand-gqtt45 sand-1qn9uv2 sand-4wkmsb sand-1da2sx9 sand-1e6nqfh sand-1tu4anv sand-67bb7w"
    }
  } as any)[(!!i as any) << (0 as any)], (e as any)[87] = i, (e as any)[88] = L) : L = (e as any)[88];
  let le: any;
  ((e as any)[89] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (le = {
    className: "sand-2lwn1j sand-b3r6kr"
  }, (e as any)[89] = le) : le = (e as any)[89];
  let D: any;
  ((e as any)[90] as any) !== (i as any) ? (D = ({
    0: {
      className: "sand--default-marker sand-1anpbxc sand-euugli sand-1v49fql sand-11xpdln sand-4wkmsb sand-1da2sx9 sand-1e6nqfh"
    },
    1: {
      className: "sand--default-marker sand-1anpbxc sand-euugli sand-11xpdln sand-4wkmsb sand-1da2sx9 sand-1e6nqfh sand-nn1q72"
    }
  } as any)[(!!i as any) << (0 as any)], (e as any)[90] = i, (e as any)[91] = D) : D = (e as any)[91];
  let ce: any;
  ((e as any)[92] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (ce = {
    className: "sand-1w2wdq1 sand-1odjw0f sand-1rohswg sand-1g39ed sand-zicqy sand-30c7nb sand-18d9i69 sand-1k0tb1a sand-1kzaylv sand-1aecepv sand-5t95al sand-euugli sand-j0a0fe"
  }, (e as any)[92] = ce) : ce = (e as any)[92];
  let H: any;
  ((e as any)[93] as any) !== (Me as any) || ((e as any)[94] as any) !== ((s as any).entryId as any) ? (H = ((f as any).jsx as any)("div", {
    "data-voice-memo-transcript-well": "",
    ...ce,
    children: ((f as any).jsx as any)(De, {
      entryId: (s as any).entryId,
      voice: Me
    })
  }), (e as any)[93] = Me, (e as any)[94] = (s as any).entryId, (e as any)[95] = H) : H = (e as any)[95];
  let F: any;
  ((e as any)[96] as any) !== (D as any) || ((e as any)[97] as any) !== (H as any) ? (F = ((f as any).jsx as any)("div", {
    ...le,
    children: ((f as any).jsx as any)("div", {
      ...D,
      ref: Gs,
      children: H
    })
  }), (e as any)[96] = D, (e as any)[97] = H, (e as any)[98] = F) : F = (e as any)[98];
  let X: any;
  ((e as any)[99] as any) !== (Se as any) || ((e as any)[100] as any) !== (Ne as any) || ((e as any)[101] as any) !== (we as any) || ((e as any)[102] as any) !== (L as any) || ((e as any)[103] as any) !== (F as any) ? (X = ((f as any).jsx as any)("div", {
    "aria-hidden": Se,
    "data-find-skip": Ne,
    "data-voice-memo-inline-transcript": "",
    inert: we,
    ...L,
    children: F
  }), (e as any)[99] = Se, (e as any)[100] = Ne, (e as any)[101] = we, (e as any)[102] = L, (e as any)[103] = F, (e as any)[104] = X) : X = (e as any)[104];
  let W: any;
  ((e as any)[105] as any) !== (a as any) || ((e as any)[106] as any) !== (i as any) || ((e as any)[107] as any) !== ((s as any).isTruncated as any) || ((e as any)[108] as any) !== ((s as any).tone as any) ? (W = ((s as any).tone as any) === ("agent" as any) && (s as any).isTruncated && !i ? ((f as any).jsx as any)("span", {
    ...(U as any)((K as any).label, (T as any).abridged),
    "data-voice-memo-abridged": !0,
    children: (a as any)({
      id: "QdUZjx"
    })
  }) : null, (e as any)[105] = a, (e as any)[106] = i, (e as any)[107] = (s as any).isTruncated, (e as any)[108] = (s as any).tone, (e as any)[109] = W) : W = (e as any)[109];
  let B: any;
  ((e as any)[110] as any) !== (a as any) || ((e as any)[111] as any) !== ((M as any).failure as any) || ((e as any)[112] as any) !== ((M as any).status as any) ? (B = ((M as any).status as any) === ("failed" as any) ? ((f as any).jsx as any)("span", {
    ...(U as any)((K as any).label, (T as any).failure),
    role: "status",
    children: (((M as any).failure as any).code as any) === (cs as any) ? (a as any)({
      id: "41Sc6H"
    }) : (a as any)({
      id: "MfurAn"
    })
  }) : null, (e as any)[110] = a, (e as any)[111] = (M as any).failure, (e as any)[112] = (M as any).status, (e as any)[113] = B) : B = (e as any)[113];
  let ue: any;
  return ((e as any)[114] as any) !== ((M as any).status as any) || ((e as any)[115] as any) !== (xe as any) || ((e as any)[116] as any) !== (Te as any) || ((e as any)[117] as any) !== (be as any) || ((e as any)[118] as any) !== (_e as any) || ((e as any)[119] as any) !== (ye as any) || ((e as any)[120] as any) !== (ve as any) || ((e as any)[121] as any) !== (Ie as any) || ((e as any)[122] as any) !== (z as any) || ((e as any)[123] as any) !== (X as any) || ((e as any)[124] as any) !== (W as any) || ((e as any)[125] as any) !== (B as any) || ((e as any)[126] as any) !== (N as any) ? (ue = ((f as any).jsxs as any)("div", {
    ...N,
    "aria-busy": xe,
    "aria-label": Te,
    "data-continued-next": be,
    "data-continued-prev": _e,
    "data-expanded": ye,
    "data-lead": ve,
    "data-playback": Be,
    "data-role": Ie,
    "data-voice-memo": !0,
    role: "group",
    children: [z, X, W, B]
  }), (e as any)[114] = (M as any).status, (e as any)[115] = xe, (e as any)[116] = Te, (e as any)[117] = be, (e as any)[118] = _e, (e as any)[119] = ye, (e as any)[120] = ve, (e as any)[121] = Ie, (e as any)[122] = z, (e as any)[123] = X, (e as any)[124] = W, (e as any)[125] = B, (e as any)[126] = N, (e as any)[127] = ue) : ue = (e as any)[127], ue;
}
function et(this: any): any {}
function st(this: any): any {}
function tt(this: any, t: any, e: any): any {
  return e ? {
    tone: "agent",
    content: (t as any).content,
    spokenText: (($e as any)((t as any).content) as any).text,
    playback: (t as any).playback,
    onSeek: (t as any).onSeek
  } : {
    tone: "agent",
    content: (t as any).content
  };
}
export { Js as V, ct as a, lt as u };
//# debugId=6a2876c9-da82-4263-919a-a81003065c8c
