declare var global: any;
declare var navigator: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "ddd4d5aa-ccde-4e89-9527-e1981586b67c", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-ddd4d5aa-ccde-4e89-9527-e1981586b67c");
  } catch (e: any) {}
} as any)();
import { c as j, j as a } from "./index.eager-vendor-Qbf9YA6n.js";
import { bH as G, bI as C, bJ as S, bK as E } from "./index.eager-app-Cj5f8Gby.js";
import { a7 as U, a8 as k, a9 as h, a5 as b, a6 as M, aa as w, ab as B, ac as T } from "./index-ZYxf-aBb.js";
import { u as P, V as $ } from "./chunk-voice-memo-bubble-DS-O9kmx.js";
import "./index.eager-platform-Dcfeegfw.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./chunk-voice-memo-waveform-Bfx_1R7r.js";
function y(this: any, f: any): any {
  (y as any).d = 305;
  const t: any = ((j as any).c as any)(14),
    {
      entry: e,
      adjacency: n
    }: any = f;
  let i: any;
  ((t as any)[0] as any) !== ((e as any).content as any) ? (i = (): any => {
    (((navigator as any).clipboard as any).writeText as any)((e as any).content);
  }, (t as any)[0] = (e as any).content, (t as any)[1] = i) : i = (t as any)[1];
  const r: any = (e as any).content,
    m: any = (e as any).images;
  let s: any;
  ((t as any)[2] as any) !== (e as any) ? (s = (S as any)(e), (t as any)[2] = e, (t as any)[3] = s) : s = (t as any)[3];
  let o: any;
  ((t as any)[4] as any) !== (n as any) || ((t as any)[5] as any) !== ((e as any).content as any) || ((t as any)[6] as any) !== ((e as any).images as any) || ((t as any)[7] as any) !== ((e as any).timestampMs as any) || ((t as any)[8] as any) !== (s as any) ? (o = ((a as any).jsx as any)(h, {
    adjacency: n,
    content: r,
    images: m,
    isStandaloneEmoji: s,
    timestampMs: (e as any).timestampMs
  }), (t as any)[4] = n, (t as any)[5] = (e as any).content, (t as any)[6] = (e as any).images, (t as any)[7] = (e as any).timestampMs, (t as any)[8] = s, (t as any)[9] = o) : o = (t as any)[9];
  let u: any;
  return ((t as any)[10] as any) !== (e as any) || ((t as any)[11] as any) !== (i as any) || ((t as any)[12] as any) !== (o as any) ? (u = ((a as any).jsx as any)(M, {
    entry: e,
    onCopy: i,
    children: o
  }), (t as any)[10] = e, (t as any)[11] = i, (t as any)[12] = o, (t as any)[13] = u) : u = (t as any)[13], u;
}
function v(this: any, f: any): any {
  (v as any).d = 307;
  const t: any = ((j as any).c as any)(37),
    {
      entry: e,
      adjacency: n
    }: any = f;
  let i: any;
  ((t as any)[0] as any) !== (e as any) ? (i = (E as any)(e), (t as any)[0] = e, (t as any)[1] = i) : i = (t as any)[1];
  const r: any = i,
    m: any = (P as any)(e);
  if ((r as any) != (null as any)) {
    let l: any;
    ((t as any)[2] as any) !== (r as any) ? (l = ((a as any).jsx as any)(w, {
      url: r,
      whenUnavailable: "url-card"
    }), (t as any)[2] = r, (t as any)[3] = l) : l = (t as any)[3];
    let c: any;
    ((t as any)[4] as any) !== ((n as any).isGroupStart as any) || ((t as any)[5] as any) !== ((e as any).timestampMs as any) || ((t as any)[6] as any) !== (l as any) ? (c = ((a as any).jsx as any)(b, {
      className: "sand-link-card-wrap",
      isGroupStart: (n as any).isGroupStart,
      timestampMs: (e as any).timestampMs,
      variant: "link",
      children: l
    }), (t as any)[4] = (n as any).isGroupStart, (t as any)[5] = (e as any).timestampMs, (t as any)[6] = l, (t as any)[7] = c) : c = (t as any)[7];
    let p: any;
    return ((t as any)[8] as any) !== (e as any) || ((t as any)[9] as any) !== (c as any) ? (p = ((a as any).jsx as any)(M, {
      entry: e,
      children: c
    }), (t as any)[8] = e, (t as any)[9] = c, (t as any)[10] = p) : p = (t as any)[10], p;
  }
  let s: any;
  ((t as any)[11] as any) !== ((e as any).content as any) ? (s = (): any => {
    (((navigator as any).clipboard as any).writeText as any)((e as any).content);
  }, (t as any)[11] = (e as any).content, (t as any)[12] = s) : s = (t as any)[12];
  const o: any = s;
  if ((m as any) != (null as any)) {
    let l: any;
    ((t as any)[13] as any) !== (e as any) ? (l = {
      tone: "user",
      entryId: (e as any).id,
      entry: e
    }, (t as any)[13] = e, (t as any)[14] = l) : l = (t as any)[14];
    let c: any;
    ((t as any)[15] as any) !== (n as any) || ((t as any)[16] as any) !== (l as any) || ((t as any)[17] as any) !== (m as any) ? (c = ((a as any).jsx as any)($, {
      adjacency: n,
      memo: m,
      voice: l
    }), (t as any)[15] = n, (t as any)[16] = l, (t as any)[17] = m, (t as any)[18] = c) : c = (t as any)[18];
    let p: any;
    ((t as any)[19] as any) !== ((n as any).isGroupStart as any) || ((t as any)[20] as any) !== ((e as any).timestampMs as any) || ((t as any)[21] as any) !== (c as any) ? (p = ((a as any).jsx as any)(b, {
      isGroupStart: (n as any).isGroupStart,
      timestampMs: (e as any).timestampMs,
      variant: "voice-memo",
      children: c
    }), (t as any)[19] = (n as any).isGroupStart, (t as any)[20] = (e as any).timestampMs, (t as any)[21] = c, (t as any)[22] = p) : p = (t as any)[22];
    let g: any;
    return ((t as any)[23] as any) !== (e as any) || ((t as any)[24] as any) !== (o as any) || ((t as any)[25] as any) !== (p as any) ? (g = ((a as any).jsx as any)(M, {
      entry: e,
      onCopy: o,
      children: p
    }), (t as any)[23] = e, (t as any)[24] = o, (t as any)[25] = p, (t as any)[26] = g) : g = (t as any)[26], g;
  }
  let u: any;
  ((t as any)[27] as any) !== (e as any) ? (u = (S as any)(e), (t as any)[27] = e, (t as any)[28] = u) : u = (t as any)[28];
  let d: any;
  ((t as any)[29] as any) !== (n as any) || ((t as any)[30] as any) !== (e as any) || ((t as any)[31] as any) !== (u as any) ? (d = ((a as any).jsx as any)(B, {
    adjacency: n,
    entry: e,
    isStandaloneEmoji: u
  }), (t as any)[29] = n, (t as any)[30] = e, (t as any)[31] = u, (t as any)[32] = d) : d = (t as any)[32];
  let x: any;
  return ((t as any)[33] as any) !== (e as any) || ((t as any)[34] as any) !== (o as any) || ((t as any)[35] as any) !== (d as any) ? (x = ((a as any).jsx as any)(M, {
    entry: e,
    onCopy: o,
    children: d
  }), (t as any)[33] = e, (t as any)[34] = o, (t as any)[35] = d, (t as any)[36] = x) : x = (t as any)[36], x;
}
function A(this: any, f: any): any {
  (A as any).d = 304;
  const t: any = ((j as any).c as any)(12),
    {
      entry: e,
      adjacency: n
    }: any = f;
  let i: any;
  ((t as any)[0] as any) !== ((e as any).content as any) || ((t as any)[1] as any) !== ((e as any).isStreaming as any) ? (i = (): any => (T as any)((e as any).content, (e as any).isStreaming), (t as any)[0] = (e as any).content, (t as any)[1] = (e as any).isStreaming, (t as any)[2] = i) : i = (t as any)[2];
  let r: any;
  ((t as any)[3] as any) !== (n as any) || ((t as any)[4] as any) !== ((e as any).content as any) || ((t as any)[5] as any) !== ((e as any).isStreaming as any) || ((t as any)[6] as any) !== ((e as any).timestampMs as any) ? (r = ((a as any).jsx as any)(h, {
    adjacency: n,
    content: (e as any).content,
    isSourceTrusted: !0,
    isStreaming: (e as any).isStreaming,
    timestampMs: (e as any).timestampMs
  }), (t as any)[3] = n, (t as any)[4] = (e as any).content, (t as any)[5] = (e as any).isStreaming, (t as any)[6] = (e as any).timestampMs, (t as any)[7] = r) : r = (t as any)[7];
  let m: any;
  return ((t as any)[8] as any) !== (e as any) || ((t as any)[9] as any) !== (i as any) || ((t as any)[10] as any) !== (r as any) ? (m = ((a as any).jsx as any)(M, {
    entry: e,
    onCopy: i,
    children: r
  }), (t as any)[8] = e, (t as any)[9] = i, (t as any)[10] = r, (t as any)[11] = m) : m = (t as any)[11], m;
}
function L(this: any, f: any): any {
  (L as any).d = 306;
  const t: any = ((j as any).c as any)(11),
    {
      entry: e,
      adjacency: n
    }: any = f,
    i: any = (G as any)(e, (U as any)());
  if ((C as any)(e)) {
    let s: any;
    return ((t as any)[0] as any) !== (e as any) ? (s = ((a as any).jsx as any)(k, {
      entry: e
    }), (t as any)[0] = e, (t as any)[1] = s) : s = (t as any)[1], s;
  }
  if ((i as any) == (null as any) ? ((e as any).role as any) === ("user" as any) && ((e as any).fromUser as any) != (null as any) : ((i as any).kind as any) !== ("own" as any)) {
    let s: any;
    return ((t as any)[2] as any) !== (n as any) || ((t as any)[3] as any) !== (e as any) ? (s = ((a as any).jsx as any)(y, {
      adjacency: n,
      entry: e
    }), (t as any)[2] = n, (t as any)[3] = e, (t as any)[4] = s) : s = (t as any)[4], s;
  }
  switch ((e as any).role) {
    case "user":
      {
        let s: any;
        return ((t as any)[5] as any) !== (n as any) || ((t as any)[6] as any) !== (e as any) ? (s = ((a as any).jsx as any)(v, {
          adjacency: n,
          entry: e
        }), (t as any)[5] = n, (t as any)[6] = e, (t as any)[7] = s) : s = (t as any)[7], s;
      }
    case "assistant":
      {
        let s: any;
        return ((t as any)[8] as any) !== (n as any) || ((t as any)[9] as any) !== (e as any) ? (s = ((a as any).jsx as any)(A, {
          adjacency: n,
          entry: e
        }), (t as any)[8] = n, (t as any)[9] = e, (t as any)[10] = s) : s = (t as any)[10], s;
      }
  }
  return (e as any).role;
}
export { L as default };
//# debugId=ddd4d5aa-ccde-4e89-9527-e1981586b67c
