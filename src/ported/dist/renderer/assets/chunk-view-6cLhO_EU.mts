declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "6cbc830d-b313-4881-9c55-9fc42a60803d", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-6cbc830d-b313-4881-9c55-9fc42a60803d");
  } catch (e: any) {}
} as any)();
import { c as j, j as _ } from "./index.eager-vendor-Qbf9YA6n.js";
import { i as C } from "./index.eager-platform-Dcfeegfw.js";
import { b9 as A, bT as y, b7 as E, bU as M } from "./index.eager-app-Cj5f8Gby.js";
import { an as P, ah as F, ao as R, a5 as T, a6 as k } from "./index-ZYxf-aBb.js";
import "./index.eager-common-CdCvBQNJ.js";
function w(this: any, S: any): any {
  (w as any).d = 322;
  const s: any = ((j as any).c as any)(26),
    {
      entry: t,
      adjacency: m
    }: any = S,
    x: any = (P as any)(),
    {
      isReadOnly: r
    }: any = (F as any)(),
    G: any = (A as any)("grok_bot_publish_confirm_card"),
    d: any = (y as any)();
  let n: any;
  ((s as any)[0] as any) !== (d as any) || ((s as any)[1] as any) !== (r as any) ? (n = (): any => (r || (d as any)("grok_bot_publish_confirm_card"), q), (s as any)[0] = d, (s as any)[1] = r, (s as any)[2] = n) : n = (s as any)[2], (C as any)(n);
  const e: any = r || !G,
    {
      publish: f
    }: any = ((E as any)() as any).cloudAgents,
    g: any = (((t as any).message as any).approval as any).bcId;
  let i: any;
  ((s as any)[3] as any) !== (g as any) || ((s as any)[4] as any) !== ((((t as any).message as any).approval as any).proposalId as any) || ((s as any)[5] as any) !== (e as any) || ((s as any)[6] as any) !== (f as any) ? (i = (): any => e ? O : ((f as any).attach as any)(g, (((t as any).message as any).approval as any).proposalId), (s as any)[3] = g, (s as any)[4] = (((t as any).message as any).approval as any).proposalId, (s as any)[5] = e, (s as any)[6] = f, (s as any)[7] = i) : i = (s as any)[7], (C as any)(i);
  const b: any = e ? null : x;
  let p: any;
  ((s as any)[8] as any) !== (((t as any).message as any).approval as any) || ((s as any)[9] as any) !== (b as any) ? (p = {
    agentId: b,
    snapshot: ((t as any).message as any).approval
  }, (s as any)[8] = ((t as any).message as any).approval, (s as any)[9] = b, (s as any)[10] = p) : p = (s as any)[10];
  const l: any = (M as any)(p, !e),
    h: any = G ? "not_owner" : "off";
  let c: any;
  ((s as any)[11] as any) !== (h as any) || ((s as any)[12] as any) !== (e as any) || ((s as any)[13] as any) !== (l as any) ? (c = e ? {
    ...l,
    access: h
  } : l, (s as any)[11] = h, (s as any)[12] = e, (s as any)[13] = l, (s as any)[14] = c) : c = (s as any)[14];
  const I: any = c,
    v: any = e ? null : x;
  let a: any;
  ((s as any)[15] as any) !== ((t as any).id as any) || ((s as any)[16] as any) !== (v as any) || ((s as any)[17] as any) !== (I as any) ? (a = ((_ as any).jsx as any)(R, {
    agentId: v,
    entryId: (t as any).id,
    view: I
  }), (s as any)[15] = (t as any).id, (s as any)[16] = v, (s as any)[17] = I, (s as any)[18] = a) : a = (s as any)[18];
  let o: any;
  ((s as any)[19] as any) !== ((m as any).isGroupStart as any) || ((s as any)[20] as any) !== ((t as any).timestampMs as any) || ((s as any)[21] as any) !== (a as any) ? (o = ((_ as any).jsx as any)(T, {
    isGroupStart: (m as any).isGroupStart,
    timestampMs: (t as any).timestampMs,
    variant: "question",
    children: a
  }), (s as any)[19] = (m as any).isGroupStart, (s as any)[20] = (t as any).timestampMs, (s as any)[21] = a, (s as any)[22] = o) : o = (s as any)[22];
  let u: any;
  return ((s as any)[23] as any) !== (t as any) || ((s as any)[24] as any) !== (o as any) ? (u = ((_ as any).jsx as any)(k, {
    entry: t,
    children: o
  }), (s as any)[23] = t, (s as any)[24] = o, (s as any)[25] = u) : u = (s as any)[25], u;
}
function O(this: any): any {}
function q(this: any): any {}
export { w as default };
//# debugId=6cbc830d-b313-4881-9c55-9fc42a60803d
