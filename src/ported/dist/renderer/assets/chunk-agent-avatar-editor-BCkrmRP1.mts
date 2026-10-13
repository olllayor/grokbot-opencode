declare var FileReader: any;
declare var HTMLInputElement: any;
declare var HTMLTextAreaElement: any;
declare var Image: any;
declare var document: any;
declare var global: any;
declare var key: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "dc48026d-3df2-49c5-b7ab-b6f7702db958", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-dc48026d-3df2-49c5-b7ab-b6f7702db958");
  } catch (e: any) {}
} as any)();
import { i as X, c as Ia, u as qa, r as O, j as a, T as R, p as Ne } from "./index.eager-vendor-Qbf9YA6n.js";
import { J as xa } from "./index.eager-common-CdCvBQNJ.js";
import { dr as Ta, b7 as Ea, ds as Ra, b8 as Ma, E as Pa, r as He, dt as ua, du as fa, aK as v, dv as ha, dw as ga, dx as Da, ab as Ua, bB as Ba, dy as Qe, dz as Fa } from "./index.eager-app-Cj5f8Gby.js";
import { aY as Se } from "./index.eager-platform-Dcfeegfw.js";
import { W as ya, g as $ } from "./index-ZYxf-aBb.js";
import { u as Wa, A as Oa } from "./chunk-agent-character-picker-DUX3hpCp.js";
class Xa extends (Error as any) {
  [key: string]: any;
}
const Ga: any = {
  id: "sUxahT"
};
function Ya(this: any, l: any): any {
  return (((((l as any).type as any).toLowerCase as any)() as any).startsWith as any)("image/");
}
function Ka(this: any, l: any): any {
  if ((l as any) == (null as any)) return null;
  for (let e: any = 0; (e as any) < (((l as any).items as any).length as any); e += 1) {
    const s: any = ((l as any).items as any)[e];
    if ((s?.kind as any) !== ("file" as any) || !(((((s as any).type as any).toLowerCase as any)() as any).startsWith as any)("image/")) continue;
    const c: any = ((s as any).getAsFile as any)();
    if ((c as any) != (null as any)) return c;
  }
  for (let e: any = 0; (e as any) < (((l as any).files as any).length as any); e += 1) {
    const s: any = (((l as any).files as any).item as any)(e);
    if ((s as any) != (null as any) && (Ya as any)(s)) return s;
  }
  return null;
}
function La(this: any, l: any): any {
  if ((Ta as any)((l as any).size)) throw new (Xa as any)(((X as any)._ as any)(Ga));
}
class pa extends (Error as any) {
  [key: string]: any;
}
const Ve: number = 96,
  B: any = {
    tab: {
      kysU6D: "sand-jyslct",
      k3lkva: "sand-1lugfcp",
      k1xSpc: "sand-78zum5",
      kGNEyG: "sand-6s0dn4",
      kB7OPa: "sand-9f619",
      kLKAdn: "sand-f6zju3",
      kwRFfy: "sand-196pc8s",
      kGO01o: "sand-cnij5n",
      kZCmMZ: "sand-22095l",
      keoZOQ: "sand-dj266r",
      k71WvV: "sand-14z9mp",
      k1K539: "sand-at24cr",
      keTefX: "sand-1lziwak",
      kMzoRj: "sand-c342km",
      ksu8eU: "sand-ng3xce",
      kaIpWk: "sand-1043rbw",
      kMwMTN: "sand-19aaqeu",
      kMv6JI: "sand-jb2p0i",
      kGuDYH: "sand-11wthnw",
      kLWn49: "sand-1ja60sm",
      kkrTdU: "sand-1ypdohk",
      khDVqt: "sand-uxw1ft",
      $$css: !0
    },
    tabActive: {
      kWkggS: "sand-i07v4r sand-oli092",
      kMwMTN: "sand-1wd3ewq",
      $$css: !0
    },
    resetButton: {
      kaIpWk: "sand-1043rbw",
      kGuDYH: "sand-11wthnw",
      kLWn49: "sand-1ja60sm",
      $$css: !0
    },
    zoomButton: {
      kysU6D: "sand-jyslct",
      k3lkva: "sand-1lugfcp",
      k1xSpc: "sand-3nfvp2",
      kGNEyG: "sand-6s0dn4",
      kjj79g: "sand-l56j7k",
      kmVPX3: "sand-9ms5i6",
      kMzoRj: "sand-c342km",
      ksu8eU: "sand-ng3xce",
      kaIpWk: "sand-1043rbw",
      kWkggS: "sand-jbqb8w sand-1iuyybk",
      kMwMTN: "sand-1heor9g",
      kkrTdU: "sand-1ypdohk",
      $$css: !0
    },
    promptInput: {
      kB7OPa: "sand-9f619",
      kzqmXN: "sand-h8yej3",
      kzQI83: "sand-1iyjqo2",
      kAzted: "sand-bwy6ji",
      kHenm0: "sand-tt52l0",
      kLKAdn: "sand-13ly8rp",
      kwRFfy: "sand-1fg0g13",
      kGO01o: "sand-1xlntvz",
      kZCmMZ: "sand-1tajz9i",
      kMzoRj: "sand-mkeg23",
      ksu8eU: "sand-1y0btm7",
      kVAM5u: "sand-13747pv",
      kaIpWk: "sand-1m7fhj7",
      kWkggS: "sand-1ua6jya",
      kMwMTN: "sand-1wd3ewq",
      kMv6JI: "sand-jb2p0i",
      kGuDYH: "sand-fc7y3v",
      kLWn49: "sand-1yxxptd",
      k3XXqK: "sand-1t137rt",
      k8Qsv1: "sand-ltfok3",
      $$css: !0
    }
  },
  ba: number = 1024;
function Za(this: any, l: any): any {
  return new (Promise as any)((e: any, s: any): any => {
    const c: any = new (Image as any)();
    (c as any).onload = (): any => {
      if (((c as any).naturalWidth as any) <= (0 as any) || ((c as any).naturalHeight as any) <= (0 as any)) {
        (s as any)(new (Error as any)(((X as any)._ as any)({
          id: "QzjTo3"
        })));
        return;
      }
      (e as any)(c);
    }, (c as any).onerror = (): any => (s as any)(new (Error as any)(((X as any)._ as any)({
      id: "QzjTo3"
    }))), (c as any).src = l;
  });
}
async function wa(this: any, l: any): Promise<any> {
  const e: any = await (Za as any)(l),
    s: any = (e as any).naturalWidth,
    c: any = (e as any).naturalHeight,
    h: any = ((Math as any).max as any)(s, c);
  if ((h as any) <= (ba as any)) return {
    dataUrl: l,
    width: s,
    height: c
  };
  const p: any = (ba as any) / (h as any),
    t: any = ((document as any).createElement as any)("canvas");
  (t as any).width = ((Math as any).max as any)(1, ((Math as any).round as any)((s as any) * (p as any))), (t as any).height = ((Math as any).max as any)(1, ((Math as any).round as any)((c as any) * (p as any)));
  const i: any = ((t as any).getContext as any)("2d");
  if ((i as any) == (null as any)) throw new (pa as any)(((X as any)._ as any)({
    id: "QzjTo3"
  }));
  return (i as any).imageSmoothingEnabled = !0, (i as any).imageSmoothingQuality = "high", ((i as any).drawImage as any)(e, 0, 0, (t as any).width, (t as any).height), {
    dataUrl: ((t as any).toDataURL as any)("image/png"),
    width: (t as any).width,
    height: (t as any).height
  };
}
function ka(this: any, l: any): any {
  return (La as any)(l), new (Promise as any)((e: any, s: any): any => {
    const c: any = new (FileReader as any)();
    (c as any).onload = (): any => {
      const h: any = (c as any).result;
      if ((typeof h as any) == ("string" as any)) {
        (e as any)(h);
        return;
      }
      (s as any)(new (Error as any)(((X as any)._ as any)({
        id: "4qmctu"
      })));
    }, (c as any).onerror = (): any => (s as any)(new (Error as any)(((X as any)._ as any)({
      id: "4qmctu"
    }))), ((c as any).readAsDataURL as any)(l);
  });
}
async function ja(this: any, l: any, e: any): Promise<any> {
  const s: any = await new (Promise as any)((G: any, m: any): any => {
      const w: any = new (Image as any)();
      (w as any).onload = (): any => (G as any)(w), (w as any).onerror = (): any => (m as any)(new (Error as any)(((X as any)._ as any)({
        id: "QzjTo3"
      }))), (w as any).src = (l as any).dataUrl;
    }),
    c: any = ((document as any).createElement as any)("canvas");
  (c as any).width = Qe, (c as any).height = Qe;
  const h: any = ((c as any).getContext as any)("2d");
  if ((h as any) == (null as any)) throw new (pa as any)(((X as any)._ as any)({
    id: "9vUUUt"
  }));
  (h as any).imageSmoothingEnabled = !0, (h as any).imageSmoothingQuality = "high";
  const p: any = (Fa as any)((l as any).width, (l as any).height, e);
  ((h as any).drawImage as any)(s, (p as any).x, (p as any).y, (p as any).width, (p as any).height, 0, 0, Qe, Qe);
  const t: any = ((c as any).toDataURL as any)("image/png"),
    i: any = ((t as any).slice as any)((((t as any).indexOf as any)(",") as any) + (1 as any));
  if (((i as any).length as any) === (0 as any)) throw new (pa as any)(((X as any)._ as any)({
    id: "9vUUUt"
  }));
  return i;
}
const $a: any = new (Set as any)(["email", "number", "password", "search", "tel", "text", "url"]);
function Ha(this: any, l: any): any {
  return l instanceof HTMLTextAreaElement ? !0 : l instanceof HTMLInputElement && (($a as any).has as any)((l as any).type);
}
async function H(this: any, l: any, e: any): Promise<any> {
  try {
    await (l as any)();
  } catch (s: any) {
    (e as any)((xa as any)(s));
  }
}
async function Qa(this: any, {
  generateImage: l,
  description: e,
  selectionSeqRef: s,
  isEditorClosed: c,
  commitDismissedResult: h,
  setCandidate: p,
  setError: t,
  setIsGenerating: i
}: any): Promise<any> {
  const G: any = ++(s as any).current;
  try {
    const m: any = await (l as any)({
      description: e
    });
    if (((s as any).current as any) !== (G as any)) return;
    const w: any = await (wa as any)(m);
    if (((s as any).current as any) !== (G as any)) return;
    if ((c as any)()) {
      try {
        await (h as any)(w);
      } catch (ve: any) {
        (Ba as any)(ve);
      }
      return;
    }
    (p as any)({
      source: w,
      crop: (ha as any)((w as any).width, (w as any).height),
      fileName: null
    });
  } catch (m: any) {
    ((s as any).current as any) === (G as any) && (t as any)((xa as any)(m));
  } finally {
    ((s as any).current as any) === (G as any) && (i as any)(!1);
  }
}
function Va(this: any, l: any): any {
  (Va as any).d = 61;
  const e: any = ((Ia as any).c as any)(211),
    {
      agent: s,
      stagedCharacter: c,
      onStageCharacter: h,
      onClose: p
    }: any = l,
    {
      _: t
    }: any = (qa as any)(),
    [i, G]: any = ((O as any).useState as any)((s as any).isGroup ? "upload" : "bot"),
    [m, w]: any = ((O as any).useState as any)(null),
    [ve, Je]: any = ((O as any).useState as any)(!1),
    [E, Na]: any = ((O as any).useState as any)(""),
    [ze, Ce]: any = ((O as any).useState as any)(!1),
    [Ae, y]: any = ((O as any).useState as any)(null),
    ea: any = ((O as any).useRef as any)(null),
    _e: any = ((O as any).useRef as any)(null),
    Y: any = ((O as any).useRef as any)(0),
    {
      roster: Ie
    }: any = (Ea as any)(),
    Q: any = (Ra as any)(),
    {
      run: M,
      isPending: S
    }: any = (Ma as any)((Ie as any).setAgentAvatarBytes),
    b: any = (Wa as any)(s),
    aa: any = (Pa as any)();
  let qe: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (qe = (n: any): any => {
    if ((ea as any).current = n, (n as any) != (null as any)) return ((n as any).focus as any)({
      preventScroll: !0
    }), (): any => {
      (ea as any).current = null;
    };
  }, (e as any)[0] = qe) : qe = (e as any)[0];
  const va: any = qe;
  let Te: any;
  ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Te = async (n: any, o: any): Promise<any> => {
    const j: any = (Y as any).current = ((Y as any).current as any) + (1 as any),
      f: any = await (wa as any)(n);
    ((Y as any).current as any) === (j as any) && (w as any)({
      source: f,
      crop: (ha as any)((f as any).width, (f as any).height),
      fileName: o
    });
  }, (e as any)[1] = Te) : Te = (e as any)[1];
  const sa: any = Te;
  let Ee: any;
  ((e as any)[2] as any) !== (Q as any) ? (Ee = (): any => {
    (y as any)(null), (H as any)(async (): Promise<any> => {
      const n: any = await ((Q as any).pickFile as any)();
      (n as any) != (null as any) && (await (sa as any)((n as any).dataUrl, (n as any).fileName));
    }, y);
  }, (e as any)[2] = Q, (e as any)[3] = Ee) : Ee = (e as any)[3];
  const ta: any = Ee;
  let Re: any;
  ((e as any)[4] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Re = (n: any): any => {
    ((n as any).preventDefault as any)(), (Je as any)(!1), (y as any)(null);
    const o: any = ((((n as any).dataTransfer as any).files as any).item as any)(0);
    (o as any) != (null as any) && (H as any)(async (): Promise<any> => {
      await (sa as any)(await (ka as any)(o), (o as any).name);
    }, y);
  }, (e as any)[4] = Re) : Re = (e as any)[4];
  const Sa: any = Re;
  let Me: any;
  ((e as any)[5] as any) !== ((s as any).id as any) || ((e as any)[6] as any) !== (Q as any) || ((e as any)[7] as any) !== (ze as any) || ((e as any)[8] as any) !== (E as any) || ((e as any)[9] as any) !== (Ie as any) ? (Me = (): any => {
    const n: any = ((E as any).trim as any)();
    ((n as any).length as any) === (0 as any) || ze || ((y as any)(null), (Ce as any)(!0), (Qa as any)({
      generateImage: (Q as any).generateImage,
      description: n,
      selectionSeqRef: Y,
      isEditorClosed: (): any => ((ea as any).current as any) == (null as any),
      commitDismissedResult: async (o: any): Promise<any> => {
        const j: any = await (ja as any)(o, (ha as any)((o as any).width, (o as any).height));
        await ((Ie as any).setAgentAvatarBytes as any)({
          id: (s as any).id,
          pngBase64: j
        });
      },
      setCandidate: w,
      setError: y,
      setIsGenerating: Ce
    }));
  }, (e as any)[5] = (s as any).id, (e as any)[6] = Q, (e as any)[7] = ze, (e as any)[8] = E, (e as any)[9] = Ie, (e as any)[10] = Me) : Me = (e as any)[10];
  const V: any = Me;
  let J: any, ee: any, ae: any, se: any, te: any, ne: any, le: any, re: any, A: any, K: any;
  if (((e as any)[11] as any) !== (t as any) || ((e as any)[12] as any) !== ((s as any).id as any) || ((e as any)[13] as any) !== (m as any) || ((e as any)[14] as any) !== (S as any) || ((e as any)[15] as any) !== (p as any) || ((e as any)[16] as any) !== (h as any) || ((e as any)[17] as any) !== (M as any) || ((e as any)[18] as any) !== (i as any)) {
    J = (r: any): any => {
      if ((Ha as any)((r as any).target)) return;
      const d: any = (Ka as any)((r as any).clipboardData);
      if ((d as any) == (null as any)) {
        ((r as any).stopPropagation as any)(), (i as any) !== ("upload" as any) && (A as any)("upload");
        return;
      }
      ((r as any).preventDefault as any)(), ((r as any).stopPropagation as any)(), (i as any) !== ("upload" as any) && (A as any)("upload"), (y as any)(null), (H as any)(async (): Promise<any> => {
        await (sa as any)(await (ka as any)(d), (((d as any).name as any).length as any) > (0 as any) ? (d as any).name : (t as any)({
          id: "xD1In1"
        }));
      }, y);
    }, ee = Ja;
    let n: any;
    ((e as any)[29] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (n = (): any => {
      (Y as any).current = ((Y as any).current as any) + (1 as any), (w as any)(null), (Ce as any)(!1), (y as any)(null);
    }, (e as any)[29] = n) : n = (e as any)[29], ae = n;
    let o: any;
    ((e as any)[30] as any) !== ((s as any).id as any) || ((e as any)[31] as any) !== (m as any) || ((e as any)[32] as any) !== (S as any) || ((e as any)[33] as any) !== (p as any) || ((e as any)[34] as any) !== (M as any) ? (o = (): any => {
      (m as any) == (null as any) || S || ((y as any)(null), (H as any)(async (): Promise<any> => {
        const r: any = await (ja as any)((m as any).source, (m as any).crop);
        await (M as any)({
          id: (s as any).id,
          pngBase64: r
        }), (p as any)();
      }, y));
    }, (e as any)[30] = (s as any).id, (e as any)[31] = m, (e as any)[32] = S, (e as any)[33] = p, (e as any)[34] = M, (e as any)[35] = o) : o = (e as any)[35], te = o;
    let j: any;
    ((e as any)[36] as any) !== ((s as any).id as any) || ((e as any)[37] as any) !== (S as any) || ((e as any)[38] as any) !== (h as any) || ((e as any)[39] as any) !== (M as any) ? (j = (): any => {
      S || ((h as any)(null), (y as any)(null), (H as any)(async (): Promise<any> => {
        await (M as any)({
          id: (s as any).id,
          pngBase64: null
        });
      }, y));
    }, (e as any)[36] = (s as any).id, (e as any)[37] = S, (e as any)[38] = h, (e as any)[39] = M, (e as any)[40] = j) : j = (e as any)[40], se = j;
    let f: any;
    ((e as any)[41] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = (r: any): any => {
      (w as any)((d: any): any => {
        if ((d as any) == (null as any)) return d;
        const q: any = {
          zoom: (Da as any)(r),
          centerX: ((d as any).crop as any).centerX,
          centerY: ((d as any).crop as any).centerY
        };
        return {
          ...d,
          crop: {
            zoom: (q as any).zoom,
            ...(ga as any)(q, ((d as any).source as any).width, ((d as any).source as any).height)
          }
        };
      });
    }, (e as any)[41] = f) : f = (e as any)[41], K = f;
    let k: any;
    ((e as any)[42] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (k = (r: any): any => {
      (((r as any).currentTarget as any).setPointerCapture as any)((r as any).pointerId), (_e as any).current = {
        pointerId: (r as any).pointerId,
        lastX: (r as any).clientX,
        lastY: (r as any).clientY
      };
    }, (e as any)[42] = k) : k = (e as any)[42], ne = k;
    let T: any;
    ((e as any)[43] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (T = (r: any): any => {
      const d: any = (_e as any).current;
      if ((d as any) == (null as any) || ((d as any).pointerId as any) !== ((r as any).pointerId as any)) return;
      const q: any = ((r as any).clientX as any) - ((d as any).lastX as any),
        L: any = ((r as any).clientY as any) - ((d as any).lastY as any);
      (d as any).lastX = (r as any).clientX, (d as any).lastY = (r as any).clientY, (w as any)((x: any): any => {
        if ((x as any) == (null as any)) return x;
        const u: any = ((Math as any).min as any)(((x as any).source as any).width, ((x as any).source as any).height),
          g: any = ((Ve as any) / (u as any) as any) * (((x as any).crop as any).zoom as any),
          C: any = {
            zoom: ((x as any).crop as any).zoom,
            centerX: (((x as any).crop as any).centerX as any) - ((q as any) / (g as any) as any),
            centerY: (((x as any).crop as any).centerY as any) - ((L as any) / (g as any) as any)
          };
        return {
          ...x,
          crop: {
            zoom: ((x as any).crop as any).zoom,
            ...(ga as any)(C, ((x as any).source as any).width, ((x as any).source as any).height)
          }
        };
      });
    }, (e as any)[43] = T) : T = (e as any)[43], le = T;
    let z: any;
    ((e as any)[44] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (z = (r: any): any => {
      const d: any = (_e as any).current;
      (d as any) == (null as any) || ((d as any).pointerId as any) !== ((r as any).pointerId as any) || ((_e as any).current = null, (((r as any).currentTarget as any).hasPointerCapture as any)((r as any).pointerId) && (((r as any).currentTarget as any).releasePointerCapture as any)((r as any).pointerId));
    }, (e as any)[44] = z) : z = (e as any)[44], re = z, A = (r: any): any => {
      (Y as any).current = ((Y as any).current as any) + (1 as any), (G as any)(r), (w as any)(null), (h as any)(null), (Ce as any)(!1), (y as any)(null);
    }, (e as any)[11] = t, (e as any)[12] = (s as any).id, (e as any)[13] = m, (e as any)[14] = S, (e as any)[15] = p, (e as any)[16] = h, (e as any)[17] = M, (e as any)[18] = i, (e as any)[19] = J, (e as any)[20] = ee, (e as any)[21] = ae, (e as any)[22] = se, (e as any)[23] = te, (e as any)[24] = ne, (e as any)[25] = le, (e as any)[26] = re, (e as any)[27] = A, (e as any)[28] = K;
  } else J = (e as any)[19], ee = (e as any)[20], ae = (e as any)[21], se = (e as any)[22], te = (e as any)[23], ne = (e as any)[24], le = (e as any)[25], re = (e as any)[26], A = (e as any)[27], K = (e as any)[28];
  const F: any = ((((s as any).avatarDataUrl ?? "") as any).length as any) > (0 as any),
    _: any = S,
    I: any = F ? c : null;
  let Pe: any;
  ((e as any)[45] as any) !== (b as any) || ((e as any)[46] as any) !== (F as any) || ((e as any)[47] as any) !== (h as any) || ((e as any)[48] as any) !== (I as any) ? (Pe = {
    commitCharacter: (n: any): any => {
      if (F) {
        (h as any)({
          ...I,
          ...n
        });
        return;
      }
      (y as any)(null), (H as any)((): any => ((b as any).commitCharacter as any)(n), y);
    }
  }, (e as any)[45] = b, (e as any)[46] = F, (e as any)[47] = h, (e as any)[48] = I, (e as any)[49] = Pe) : Pe = (e as any)[49];
  const na: any = Pe;
  let De: any;
  ((e as any)[50] as any) !== ((s as any).id as any) || ((e as any)[51] as any) !== (b as any) || ((e as any)[52] as any) !== (_ as any) || ((e as any)[53] as any) !== (p as any) || ((e as any)[54] as any) !== (M as any) || ((e as any)[55] as any) !== (I as any) ? (De = (): any => {
    (I as any) == (null as any) || _ || (b as any).isCommitting || ((y as any)(null), (H as any)(async (): Promise<any> => {
      await ((b as any).commitCharacter as any)(I), await (M as any)({
        id: (s as any).id,
        pngBase64: null
      }), (p as any)();
    }, y));
  }, (e as any)[50] = (s as any).id, (e as any)[51] = b, (e as any)[52] = _, (e as any)[53] = p, (e as any)[54] = M, (e as any)[55] = I, (e as any)[56] = De) : De = (e as any)[56];
  const la: any = De,
    za: any = ((s as any).avatarShape as any) != (null as any) || ((s as any).avatarColor as any) != (null as any);
  let Ue: any;
  e: {
    if (F) {
      let f: any;
      ((e as any)[57] as any) !== (t as any) || ((e as any)[58] as any) !== ((s as any).isGroup as any) ? (f = (s as any).isGroup ? (t as any)({
        id: "bpkpZv"
      }) : (t as any)({
        id: "mjLbra"
      }), (e as any)[57] = t, (e as any)[58] = (s as any).isGroup, (e as any)[59] = f) : f = (e as any)[59];
      let k: any;
      ((e as any)[60] as any) !== (se as any) || ((e as any)[61] as any) !== (_ as any) || ((e as any)[62] as any) !== (f as any) ? (k = {
        label: f,
        disabled: _,
        run: se
      }, (e as any)[60] = se, (e as any)[61] = _, (e as any)[62] = f, (e as any)[63] = k) : k = (e as any)[63], Ue = k;
      break e;
    }
    if ((i as any) !== ("bot" as any) || !za) {
      Ue = null;
      break e;
    }
    let n: any;
    ((e as any)[64] as any) !== (t as any) ? (n = (t as any)({
      id: "xdBJIU"
    }), (e as any)[64] = t, (e as any)[65] = n) : n = (e as any)[65];
    let o: any;
    ((e as any)[66] as any) !== (b as any) ? (o = (): any => {
      ((b as any).commitCharacter as any)({
        avatarShape: "",
        avatarColor: ""
      });
    }, (e as any)[66] = b, (e as any)[67] = o) : o = (e as any)[67];
    let j: any;
    ((e as any)[68] as any) !== ((b as any).isCommitting as any) || ((e as any)[69] as any) !== (o as any) || ((e as any)[70] as any) !== (n as any) ? (j = {
      label: n,
      disabled: (b as any).isCommitting,
      run: o
    }, (e as any)[68] = (b as any).isCommitting, (e as any)[69] = o, (e as any)[70] = n, (e as any)[71] = j) : j = (e as any)[71], Ue = j;
  }
  const ie: any = Ue;
  let ra: any;
  e: {
    if ((m as any) == (null as any)) {
      ra = null;
      break e;
    }
    const {
        source: n,
        crop: o
      }: any = m,
      j: any = ((Math as any).min as any)((n as any).width, (n as any).height),
      f: any = ((Ve as any) / (j as any) as any) * ((o as any).zoom as any),
      k: any = ((Ve as any) / (2 as any) as any) - (((o as any).centerX as any) * (f as any) as any),
      T: any = ((Ve as any) / (2 as any) as any) - (((o as any).centerY as any) * (f as any) as any),
      z: any = ((n as any).width as any) * (f as any),
      r: any = ((n as any).height as any) * (f as any),
      d: any = `translate(${k}px, ${T}px)`;
    let q: any;
    ((e as any)[72] as any) !== (z as any) || ((e as any)[73] as any) !== (r as any) || ((e as any)[74] as any) !== (d as any) ? (q = {
      width: z,
      height: r,
      transform: d
    }, (e as any)[72] = z, (e as any)[73] = r, (e as any)[74] = d, (e as any)[75] = q) : q = (e as any)[75], ra = q;
  }
  const Be: any = ra;
  let Fe: any;
  ((e as any)[76] as any) !== (t as any) || ((e as any)[77] as any) !== (m as any) || ((e as any)[78] as any) !== (ae as any) || ((e as any)[79] as any) !== (te as any) || ((e as any)[80] as any) !== (ne as any) || ((e as any)[81] as any) !== (le as any) || ((e as any)[82] as any) !== (re as any) || ((e as any)[83] as any) !== (_ as any) || ((e as any)[84] as any) !== (S as any) || ((e as any)[85] as any) !== (K as any) || ((e as any)[86] as any) !== (Be as any) ? (Fe = (m as any) != (null as any) && (Be as any) != (null as any) ? ((a as any).jsxs as any)("div", {
    className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-ehausa",
    children: [((a as any).jsxs as any)("div", {
      "aria-label": (t as any)({
        id: "SyPDzB"
      }),
      className: (He as any)("sand-avatar-editor__stage", "sand-1n2onr6 sand-13oubkp sand-jp8j0k sand-16rqkct sand-b3r6kr sand-i07v4r sand-1jm3nie sand-ch2mbi sand-5ve5x3 sand-87ps6o sand-1t137rt"),
      onPointerDown: ne,
      onPointerMove: le,
      onPointerUp: re,
      role: "img",
      children: [((a as any).jsx as any)("img", {
        alt: "",
        className: "sand-10l6tqk sand-13vifvy sand-u96u03 sand-1x1rfll sand-47corl sand-87ps6o sand-1so62im",
        draggable: !1,
        src: ((m as any).source as any).dataUrl,
        style: Be
      }), ((a as any).jsx as any)("span", {
        "aria-hidden": !0,
        className: "sand-10l6tqk sand-10a8y8t sand-16rqkct sand-24fn8l sand-47corl"
      })]
    }), ((a as any).jsxs as any)("div", {
      className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-137clkk sand-2b8uid",
      children: [((m as any).fileName as any) != (null as any) ? ((a as any).jsx as any)(Se, {
        as: "span",
        color: "secondary",
        size: "md",
        children: (t as any)({
          id: "hEBKgT",
          values: {
            0: (m as any).fileName,
            1: ((m as any).source as any).width,
            2: ((m as any).source as any).height
          }
        })
      }) : null, ((a as any).jsx as any)(Se, {
        as: "span",
        color: "tertiary",
        size: "md",
        children: ((a as any).jsx as any)(R, {
          id: "SyPDzB"
        })
      })]
    }), ((a as any).jsxs as any)("div", {
      className: (He as any)("sand-avatar-editor__zoom", "sand-78zum5 sand-6s0dn4 sand-ehausa sand-19aaqeu"),
      style: {
        width: "100%"
      },
      children: [((a as any).jsx as any)("button", {
        "aria-label": (t as any)({
          id: "FjkaiT"
        }),
        className: ((Ne as any)((B as any).zoomButton, (v as any).keyboardFocus) as any).className,
        onClick: (): any => (K as any)((((m as any).crop as any).zoom as any) - (((ua as any) - (fa as any) as any) / (8 as any) as any)),
        type: "button",
        children: ((a as any).jsx as any)(ya, {
          name: "minus",
          size: "base"
        })
      }), ((a as any).jsx as any)("input", {
        "aria-label": (t as any)({
          id: "Qwg3u4"
        }),
        className: "sand-1iyjqo2 sand-s83m0k sand-euugli sand-1ghz6dp sand-1ypdohk sand-jyslct sand-1lugfcp sand-jbqb8w sand-1t137rt sand-13m05e8 sand-1ysdatd sand-tk3z5d sand-ibs45w sand-1hzk0bc sand-3cp4ko sand-e55cdc sand-jfutqj sand-fiu4hc sand-13y9dww sand-5pni9w",
        max: ua,
        min: fa,
        onChange: (n: any): any => (K as any)(((Number as any).parseFloat as any)(((n as any).currentTarget as any).value)),
        step: .01,
        type: "range",
        value: ((m as any).crop as any).zoom
      }), ((a as any).jsx as any)("button", {
        "aria-label": (t as any)({
          id: "AWOSPo"
        }),
        className: ((Ne as any)((B as any).zoomButton, (v as any).keyboardFocus) as any).className,
        onClick: (): any => (K as any)((((m as any).crop as any).zoom as any) + (((ua as any) - (fa as any) as any) / (8 as any) as any)),
        type: "button",
        children: ((a as any).jsx as any)(ya, {
          name: "plus",
          size: "base"
        })
      })]
    }), ((a as any).jsxs as any)("div", {
      className: "sand-78zum5 sand-1qjc9v5 sand-ehausa",
      style: {
        width: "100%"
      },
      children: [((a as any).jsx as any)($, {
        className: "sand-1iyjqo2 sand-s83m0k sand-1r8uery sand-euugli",
        disabled: _,
        onClick: ae,
        rootStyle: (v as any).buttonRadius,
        variant: "secondary",
        children: ((a as any).jsx as any)(R, {
          id: "6z9W13"
        })
      }), ((a as any).jsx as any)($, {
        className: "sand-1iyjqo2 sand-s83m0k sand-1r8uery sand-euugli",
        tone: "monochrome",
        disabled: _,
        onClick: te,
        rootStyle: (v as any).buttonRadius,
        variant: "primary",
        children: (t as any)(S ? {
          id: "K/F6pa"
        } : {
          id: "eCtMfe"
        })
      })]
    })]
  }) : null, (e as any)[76] = t, (e as any)[77] = m, (e as any)[78] = ae, (e as any)[79] = te, (e as any)[80] = ne, (e as any)[81] = le, (e as any)[82] = re, (e as any)[83] = _, (e as any)[84] = S, (e as any)[85] = K, (e as any)[86] = Be, (e as any)[87] = Fe) : Fe = (e as any)[87];
  const Ca: any = Fe;
  let oe: any;
  e: {
    if ((i as any) === ("bot" as any)) {
      const u: any = !F || (I as any) != (null as any);
      let g: any;
      ((e as any)[88] as any) !== (s as any) || ((e as any)[89] as any) !== (na as any) || ((e as any)[90] as any) !== (I as any) || ((e as any)[91] as any) !== (u as any) ? (g = ((a as any).jsx as any)(Oa, {
        agent: s,
        character: na,
        isCharacterActive: u,
        staged: I
      }), (e as any)[88] = s, (e as any)[89] = na, (e as any)[90] = I, (e as any)[91] = u, (e as any)[92] = g) : g = (e as any)[92];
      let C: any;
      ((e as any)[93] as any) !== (t as any) || ((e as any)[94] as any) !== (b as any) || ((e as any)[95] as any) !== (la as any) || ((e as any)[96] as any) !== (F as any) || ((e as any)[97] as any) !== (_ as any) || ((e as any)[98] as any) !== (S as any) || ((e as any)[99] as any) !== (p as any) || ((e as any)[100] as any) !== (I as any) ? (C = F ? ((a as any).jsxs as any)("div", {
        className: "sand-78zum5 sand-1qjc9v5 sand-ehausa",
        children: [((a as any).jsx as any)($, {
          className: "sand-1iyjqo2 sand-s83m0k sand-1r8uery sand-euugli",
          disabled: _ || (b as any).isCommitting,
          onClick: p,
          rootStyle: (v as any).buttonRadius,
          variant: "secondary",
          children: ((a as any).jsx as any)(R, {
            id: "dEgA5A"
          })
        }), ((a as any).jsx as any)($, {
          className: "sand-1iyjqo2 sand-s83m0k sand-1r8uery sand-euugli",
          tone: "monochrome",
          disabled: (I as any) == (null as any) || _ || (b as any).isCommitting,
          onClick: la,
          rootStyle: (v as any).buttonRadius,
          variant: "primary",
          children: S || (b as any).isCommitting ? (t as any)({
            id: "K/F6pa"
          }) : (t as any)({
            id: "eCtMfe"
          })
        })]
      }) : null, (e as any)[93] = t, (e as any)[94] = b, (e as any)[95] = la, (e as any)[96] = F, (e as any)[97] = _, (e as any)[98] = S, (e as any)[99] = p, (e as any)[100] = I, (e as any)[101] = C) : C = (e as any)[101];
      let N: any;
      ((e as any)[102] as any) !== (g as any) || ((e as any)[103] as any) !== (C as any) ? (N = ((a as any).jsxs as any)((a as any).Fragment, {
        children: [g, C]
      }), (e as any)[102] = g, (e as any)[103] = C, (e as any)[104] = N) : N = (e as any)[104], oe = N;
      break e;
    }
    if ((m as any) != (null as any)) {
      oe = Ca;
      break e;
    }
    if ((i as any) === ("upload" as any)) {
      let u: any;
      ((e as any)[105] as any) !== (ve as any) ? (u = (He as any)("sand-avatar-editor__dropzone", (({
        0: {
          className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-l56j7k sand-ehausa sand-9f619 sand-1iyjqo2 sand-1awnzvw sand-8fiw5y sand-t1q3vd sand-mkeg23 sand-bsl7fq sand-13747pv sand-1m7fhj7 sand-2b8uid"
        },
        1: {
          className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-l56j7k sand-ehausa sand-9f619 sand-1iyjqo2 sand-1awnzvw sand-8fiw5y sand-t1q3vd sand-mkeg23 sand-bsl7fq sand-1m7fhj7 sand-2b8uid sand-1xmqp4p sand-i07v4r"
        }
      } as any)[(!!ve as any) << (0 as any)] as any).className), (e as any)[105] = ve, (e as any)[106] = u) : u = (e as any)[106];
      let g: any, C: any;
      ((e as any)[107] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (g = (): any => (Je as any)(!1), C = (Z: any): any => {
        ((Z as any).preventDefault as any)(), (Je as any)(!0);
      }, (e as any)[107] = g, (e as any)[108] = C) : (g = (e as any)[107], C = (e as any)[108]);
      let N: any;
      ((e as any)[109] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (N = ((a as any).jsx as any)(Se, {
        as: "span",
        color: "secondary",
        size: "lg",
        children: ((a as any).jsx as any)(R, {
          id: "fRyHYd"
        })
      }), (e as any)[109] = N) : N = (e as any)[109];
      let P: any;
      ((e as any)[110] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (P = ((a as any).jsx as any)(Se, {
        as: "span",
        color: "tertiary",
        size: "lg",
        children: ((a as any).jsx as any)(R, {
          id: "BzEFor"
        })
      }), (e as any)[110] = P) : P = (e as any)[110];
      let D: any;
      ((e as any)[111] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (D = ((a as any).jsx as any)(R, {
        id: "JYj5R2"
      }), (e as any)[111] = D) : D = (e as any)[111];
      let U: any;
      ((e as any)[112] as any) !== (ta as any) ? (U = ((a as any).jsx as any)($, {
        onClick: ta,
        rootStyle: (v as any).buttonRadius,
        variant: "secondary",
        children: D
      }), (e as any)[112] = ta, (e as any)[113] = U) : U = (e as any)[113];
      let W: any;
      ((e as any)[114] as any) !== (u as any) || ((e as any)[115] as any) !== (U as any) ? (W = ((a as any).jsxs as any)("div", {
        className: u,
        onDragLeave: g,
        onDragOver: C,
        onDrop: Sa,
        children: [N, P, U]
      }), (e as any)[114] = u, (e as any)[115] = U, (e as any)[116] = W) : W = (e as any)[116], oe = W;
      break e;
    }
    if (ze) {
      let u: any;
      ((e as any)[117] as any) !== (t as any) ? (u = (t as any)({
        id: "IVpf8Z"
      }), (e as any)[117] = t, (e as any)[118] = u) : u = (e as any)[118];
      let g: any;
      ((e as any)[119] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (g = {
        className: "sand-9f619 sand-h8yej3 sand-c9qbxq sand-exx8yu sand-1fg0g13 sand-18d9i69 sand-1tajz9i sand-mkeg23 sand-1y0btm7 sand-13747pv sand-1m7fhj7 sand-1ua6jya sand-1wd3ewq sand-jb2p0i sand-fc7y3v sand-1yxxptd sand-lyipyv sand-1t137rt"
      }, (e as any)[119] = g) : g = (e as any)[119];
      const C: any = (g as any).className;
      let N: any;
      ((e as any)[120] as any) !== (E as any) ? (N = ((((E as any).replace as any)(/\s+/g, " ") as any).trim as any)(), (e as any)[120] = E, (e as any)[121] = N) : N = (e as any)[121];
      let P: any;
      ((e as any)[122] as any) !== (u as any) || ((e as any)[123] as any) !== (N as any) ? (P = ((a as any).jsx as any)("input", {
        "aria-label": u,
        className: C,
        readOnly: !0,
        type: "text",
        value: N
      }), (e as any)[122] = u, (e as any)[123] = N, (e as any)[124] = P) : P = (e as any)[124];
      let D: any;
      ((e as any)[125] as any) !== (t as any) ? (D = (t as any)({
        id: "lhKkFq"
      }), (e as any)[125] = t, (e as any)[126] = D) : D = (e as any)[126];
      let U: any;
      ((e as any)[127] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (U = {
        className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-t9g0qb sand-20eq2h"
      }, (e as any)[127] = U) : U = (e as any)[127];
      let W: any;
      ((e as any)[128] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (W = ((a as any).jsx as any)("span", {
        className: "sand-13oubkp sand-jp8j0k sand-16rqkct sand-i07v4r sand-c79vkq sand-1aquc0h sand-njfjcd sand-a4qsjk sand-4hg4is"
      }), (e as any)[128] = W) : W = (e as any)[128];
      let Z: any;
      ((e as any)[129] as any) !== (D as any) ? (Z = ((a as any).jsx as any)("div", {
        "aria-label": D,
        className: (U as any).className,
        role: "status",
        children: W
      }), (e as any)[129] = D, (e as any)[130] = Z) : Z = (e as any)[130];
      let Ze: any;
      ((e as any)[131] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Ze = ((a as any).jsx as any)($, {
        disabled: !0,
        rootStyle: (v as any).buttonRadius,
        variant: "secondary",
        children: ((a as any).jsx as any)(R, {
          id: "B1MVWs"
        })
      }), (e as any)[131] = Ze) : Ze = (e as any)[131];
      let $e: any;
      ((e as any)[132] as any) !== (P as any) || ((e as any)[133] as any) !== (Z as any) ? ($e = ((a as any).jsxs as any)((a as any).Fragment, {
        children: [P, Z, Ze]
      }), (e as any)[132] = P, (e as any)[133] = Z, (e as any)[134] = $e) : $e = (e as any)[134], oe = $e;
      break e;
    }
    let n: any;
    ((e as any)[135] as any) !== (t as any) ? (n = (t as any)({
      id: "IVpf8Z"
    }), (e as any)[135] = t, (e as any)[136] = n) : n = (e as any)[136];
    let o: any;
    ((e as any)[137] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (o = (Ne as any)((B as any).promptInput, (v as any).thinScrollbar), (e as any)[137] = o) : o = (e as any)[137];
    const j: any = (o as any).className;
    let f: any;
    ((e as any)[138] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (f = (u: any): any => (Na as any)(((u as any).currentTarget as any).value), (e as any)[138] = f) : f = (e as any)[138];
    let k: any;
    ((e as any)[139] as any) !== (V as any) ? (k = (u: any): any => {
      ((u as any).key as any) === ("Enter" as any) && ((u as any).metaKey || (u as any).ctrlKey) && (((u as any).preventDefault as any)(), (V as any)());
    }, (e as any)[139] = V, (e as any)[140] = k) : k = (e as any)[140];
    let T: any;
    ((e as any)[141] as any) !== (t as any) ? (T = (t as any)({
      id: "7KrBp7"
    }), (e as any)[141] = t, (e as any)[142] = T) : T = (e as any)[142];
    let z: any;
    ((e as any)[143] as any) !== (E as any) || ((e as any)[144] as any) !== (n as any) || ((e as any)[145] as any) !== (k as any) || ((e as any)[146] as any) !== (T as any) ? (z = ((a as any).jsx as any)("textarea", {
      "aria-label": n,
      className: j,
      onChange: f,
      onKeyDown: k,
      placeholder: T,
      value: E
    }), (e as any)[143] = E, (e as any)[144] = n, (e as any)[145] = k, (e as any)[146] = T, (e as any)[147] = z) : z = (e as any)[147];
    let r: any;
    ((e as any)[148] as any) !== (E as any) ? (r = ((E as any).trim as any)(), (e as any)[148] = E, (e as any)[149] = r) : r = (e as any)[149];
    const d: any = ((r as any).length as any) === (0 as any);
    let q: any;
    ((e as any)[150] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (q = ((a as any).jsx as any)(R, {
      id: "ziAjHi"
    }), (e as any)[150] = q) : q = (e as any)[150];
    let L: any;
    ((e as any)[151] as any) !== (V as any) || ((e as any)[152] as any) !== (d as any) ? (L = ((a as any).jsx as any)($, {
      tone: "monochrome",
      disabled: d,
      onClick: V,
      rootStyle: (v as any).buttonRadius,
      variant: "primary",
      children: q
    }), (e as any)[151] = V, (e as any)[152] = d, (e as any)[153] = L) : L = (e as any)[153];
    let x: any;
    ((e as any)[154] as any) !== (z as any) || ((e as any)[155] as any) !== (L as any) ? (x = ((a as any).jsxs as any)((a as any).Fragment, {
      children: [z, L]
    }), (e as any)[154] = z, (e as any)[155] = L, (e as any)[156] = x) : x = (e as any)[156], oe = x;
  }
  const ia: any = oe;
  let de: any;
  ((e as any)[157] as any) !== (t as any) ? (de = (t as any)({
    id: "p9Xy+W"
  }), (e as any)[157] = t, (e as any)[158] = de) : de = (e as any)[158];
  let We: any;
  ((e as any)[159] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (We = (He as any)("sand-avatar-editor", "sand-10l6tqk sand-wwefxd sand-1nrll8i sand-uuh30 sand-1n327nk sand-78zum5 sand-dt5ytf sand-37ym55 sand-1afcbsf sand-1828qc5 sand-4hv7ue sand-1y0btm7 sand-qz0629 sand-f1vpex sand-1bioihg sand-b3r6kr"), (e as any)[159] = We) : We = (e as any)[159];
  let Oe: any;
  ((e as any)[160] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Oe = {
    className: "sand-78zum5 sand-6s0dn4 sand-ehausa sand-2lah0s sand-9f619 sand-13ly8rp sand-196pc8s sand-1xlntvz sand-22095l sand-1co6499 sand-1q0q8m5 sand-17fyfba"
  }, (e as any)[160] = Oe) : Oe = (e as any)[160];
  const Aa: any = (Oe as any).className;
  let ce: any;
  ((e as any)[161] as any) !== (t as any) ? (ce = (t as any)({
    id: "ciFwRi"
  }), (e as any)[161] = t, (e as any)[162] = ce) : ce = (e as any)[162];
  let Xe: any;
  ((e as any)[163] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Xe = {
    className: "sand-78zum5 sand-6s0dn4 sand-137clkk sand-1iyjqo2 sand-euugli"
  }, (e as any)[163] = Xe) : Xe = (e as any)[163];
  const _a: any = (Xe as any).className;
  let me: any;
  ((e as any)[164] as any) !== ((s as any).isGroup as any) || ((e as any)[165] as any) !== (A as any) || ((e as any)[166] as any) !== (i as any) ? (me = (s as any).isGroup ? null : ((a as any).jsx as any)("button", {
    "aria-selected": (i as any) === ("bot" as any),
    className: ((Ne as any)((B as any).tab, (v as any).interactive, (v as any).keyboardFocus, (i as any) === ("bot" as any) && (B as any).tabActive) as any).className,
    onClick: (): any => (A as any)("bot"),
    role: "tab",
    tabIndex: (i as any) === ("bot" as any) ? 0 : -1,
    type: "button",
    children: ((a as any).jsx as any)(R, {
      id: "ixkTse"
    })
  }), (e as any)[164] = (s as any).isGroup, (e as any)[165] = A, (e as any)[166] = i, (e as any)[167] = me) : me = (e as any)[167];
  const oa: any = (i as any) === ("generate" as any);
  let ue: any;
  ((e as any)[168] as any) !== (i as any) ? (ue = (Ne as any)((B as any).tab, (v as any).interactive, (v as any).keyboardFocus, (i as any) === ("generate" as any) && (B as any).tabActive), (e as any)[168] = i, (e as any)[169] = ue) : ue = (e as any)[169];
  let fe: any;
  ((e as any)[170] as any) !== (A as any) ? (fe = (): any => (A as any)("generate"), (e as any)[170] = A, (e as any)[171] = fe) : fe = (e as any)[171];
  const da: any = (i as any) === ("generate" as any) ? 0 : -1;
  let Ge: any;
  ((e as any)[172] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Ge = ((a as any).jsx as any)(R, {
    id: "ziAjHi"
  }), (e as any)[172] = Ge) : Ge = (e as any)[172];
  let he: any;
  ((e as any)[173] as any) !== (oa as any) || ((e as any)[174] as any) !== ((ue as any).className as any) || ((e as any)[175] as any) !== (fe as any) || ((e as any)[176] as any) !== (da as any) ? (he = ((a as any).jsx as any)("button", {
    "aria-selected": oa,
    className: (ue as any).className,
    onClick: fe,
    role: "tab",
    tabIndex: da,
    type: "button",
    children: Ge
  }), (e as any)[173] = oa, (e as any)[174] = (ue as any).className, (e as any)[175] = fe, (e as any)[176] = da, (e as any)[177] = he) : he = (e as any)[177];
  const ca: any = (i as any) === ("upload" as any);
  let pe: any;
  ((e as any)[178] as any) !== (i as any) ? (pe = (Ne as any)((B as any).tab, (v as any).interactive, (v as any).keyboardFocus, (i as any) === ("upload" as any) && (B as any).tabActive), (e as any)[178] = i, (e as any)[179] = pe) : pe = (e as any)[179];
  let ge: any;
  ((e as any)[180] as any) !== (A as any) ? (ge = (): any => (A as any)("upload"), (e as any)[180] = A, (e as any)[181] = ge) : ge = (e as any)[181];
  const ma: any = (i as any) === ("upload" as any) ? 0 : -1;
  let Ye: any;
  ((e as any)[182] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Ye = ((a as any).jsx as any)(R, {
    id: "ONWvwQ"
  }), (e as any)[182] = Ye) : Ye = (e as any)[182];
  let ye: any;
  ((e as any)[183] as any) !== (ca as any) || ((e as any)[184] as any) !== ((pe as any).className as any) || ((e as any)[185] as any) !== (ge as any) || ((e as any)[186] as any) !== (ma as any) ? (ye = ((a as any).jsx as any)("button", {
    "aria-selected": ca,
    className: (pe as any).className,
    onClick: ge,
    role: "tab",
    tabIndex: ma,
    type: "button",
    children: Ye
  }), (e as any)[183] = ca, (e as any)[184] = (pe as any).className, (e as any)[185] = ge, (e as any)[186] = ma, (e as any)[187] = ye) : ye = (e as any)[187];
  let be: any;
  ((e as any)[188] as any) !== (ce as any) || ((e as any)[189] as any) !== (me as any) || ((e as any)[190] as any) !== (he as any) || ((e as any)[191] as any) !== (ye as any) ? (be = ((a as any).jsxs as any)("div", {
    "aria-label": ce,
    className: _a,
    onKeyDown: Ua,
    role: "tablist",
    children: [me, he, ye]
  }), (e as any)[188] = ce, (e as any)[189] = me, (e as any)[190] = he, (e as any)[191] = ye, (e as any)[192] = be) : be = (e as any)[192];
  let ke: any;
  ((e as any)[193] as any) !== (ie as any) ? (ke = (ie as any) != (null as any) ? ((a as any).jsx as any)($, {
    "aria-label": (ie as any).label,
    disabled: (ie as any).disabled,
    onClick: (ie as any).run,
    rootStyle: (B as any).resetButton,
    size: "xs",
    variant: "ghost",
    children: ((a as any).jsx as any)(R, {
      id: "OfhWJH"
    })
  }) : null, (e as any)[193] = ie, (e as any)[194] = ke) : ke = (e as any)[194];
  let je: any;
  ((e as any)[195] as any) !== (aa as any) || ((e as any)[196] as any) !== (be as any) || ((e as any)[197] as any) !== (ke as any) ? (je = ((a as any).jsxs as any)("div", {
    className: Aa,
    ref: aa,
    children: [be, ke]
  }), (e as any)[195] = aa, (e as any)[196] = be, (e as any)[197] = ke, (e as any)[198] = je) : je = (e as any)[198];
  let Ke: any;
  ((e as any)[199] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (Ke = {
    className: "sand-78zum5 sand-dt5ytf sand-1oot3zn sand-9f619 sand-1ficeh5 sand-1t8xvyj sand-t1q3vd sand-usxwy5 sand-8fiw5y"
  }, (e as any)[199] = Ke) : Ke = (e as any)[199];
  let xe: any;
  ((e as any)[200] as any) !== (Ae as any) ? (xe = (Ae as any) != (null as any) ? ((a as any).jsx as any)(Se, {
    as: "div",
    color: "red",
    size: "sm",
    children: Ae
  }) : null, (e as any)[200] = Ae, (e as any)[201] = xe) : xe = (e as any)[201];
  let we: any;
  ((e as any)[202] as any) !== (ia as any) || ((e as any)[203] as any) !== (xe as any) ? (we = ((a as any).jsxs as any)("div", {
    className: (Ke as any).className,
    children: [ia, xe]
  }), (e as any)[202] = ia, (e as any)[203] = xe, (e as any)[204] = we) : we = (e as any)[204];
  let Le: any;
  return ((e as any)[205] as any) !== (J as any) || ((e as any)[206] as any) !== (ee as any) || ((e as any)[207] as any) !== (de as any) || ((e as any)[208] as any) !== (je as any) || ((e as any)[209] as any) !== (we as any) ? (Le = ((a as any).jsxs as any)("div", {
    "aria-label": de,
    className: We,
    onKeyDownCapture: ee,
    onPasteCapture: J,
    ref: va,
    role: "dialog",
    tabIndex: -1,
    children: [je, we]
  }), (e as any)[205] = J, (e as any)[206] = ee, (e as any)[207] = de, (e as any)[208] = je, (e as any)[209] = we, (e as any)[210] = Le) : Le = (e as any)[210], Le;
}
function Ja(this: any, l: any): any {
  !((l as any).metaKey || (l as any).ctrlKey) || (l as any).altKey || ((((l as any).key as any).toLowerCase as any)() as any) !== ("v" as any) || ((l as any).stopPropagation as any)();
}
export { Va as AgentAvatarEditor, pa as SandAvatarImageError, Ha as isTextEntryTarget };
//# debugId=dc48026d-3df2-49c5-b7ab-b6f7702db958
