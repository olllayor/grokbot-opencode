declare var global: any;
declare var navigator: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "a88cc663-ea12-476e-aa9b-0dbb976cc85d", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-a88cc663-ea12-476e-aa9b-0dbb976cc85d");
  } catch (e: any) {}
} as any)();
import { c as z, u as B, j as i } from "./index.eager-vendor-Qbf9YA6n.js";
import { i as F } from "./index.eager-platform-Dcfeegfw.js";
import { bY as L, b$ as O, b9 as D, bT as K, c0 as Y, c1 as H, bs as J, c2 as Q, c3 as U, c4 as X } from "./index.eager-app-Cj5f8Gby.js";
import { an as Z, ah as ee, a6 as P, a9 as $, a5 as se } from "./index-ZYxf-aBb.js";
import { S as te, a as ae, b as ie } from "./chunk-widget-BJbdljQ9.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./chunk-card-field-BW4hZ8b8.js";
function ne(this: any, q: any): any {
  (ne as any).d = 360;
  const e: any = ((z as any).c as any)(59),
    {
      entry: s,
      adjacency: n,
      isStale: y,
      isKeyboardTarget: x
    }: any = q,
    {
      i18n: j
    }: any = (B as any)(),
    d: any = (Z as any)(),
    {
      isReadOnly: W,
      canAnswerCards: k
    }: any = (ee as any)(),
    G: any = (L as any)(d),
    R: any = (O as any)(d),
    p: any = (D as any)("sand_widget_v0"),
    V: any = (K as any)();
  let v: any;
  ((e as any)[0] as any) !== (V as any) ? (v = (): any => ((V as any)("sand_widget_v0"), re), (e as any)[0] = V, (e as any)[1] = v) : v = (e as any)[1], (F as any)(v);
  let h: any;
  ((e as any)[2] as any) !== (R as any) || ((e as any)[3] as any) !== (G as any) || ((e as any)[4] as any) !== (k as any) || ((e as any)[5] as any) !== (W as any) ? (h = !W || (k as any) === (!0 as any) || (Y as any)(G, R), (e as any)[2] = R, (e as any)[3] = G, (e as any)[4] = k, (e as any)[5] = W, (e as any)[6] = h) : h = (e as any)[6];
  const E: any = h;
  let _: any;
  ((e as any)[7] as any) !== (d as any) || ((e as any)[8] as any) !== ((s as any).id as any) ? (_ = {
    agentId: d,
    entryId: (s as any).id
  }, (e as any)[7] = d, (e as any)[8] = (s as any).id, (e as any)[9] = _) : _ = (e as any)[9];
  const S: any = (H as any)("widget", _),
    t: any = ((s as any).message as any).widget;
  let r: any, f: any, g: any;
  if (((e as any)[10] as any) !== (n as any) || ((e as any)[11] as any) !== (d as any) || ((e as any)[12] as any) !== (s as any) || ((e as any)[13] as any) !== (j as any) || ((e as any)[14] as any) !== (E as any) || ((e as any)[15] as any) !== (x as any) || ((e as any)[16] as any) !== (y as any) || ((e as any)[17] as any) !== (p as any) || ((e as any)[18] as any) !== (S as any) || ((e as any)[19] as any) !== (t as any)) {
    g = ((Symbol as any).for as any)("react.early_return_sentinel");
    e: {
      const A: any = (J as any)(j, t);
      let C: any;
      ((e as any)[23] as any) !== (s as any) || ((e as any)[24] as any) !== (y as any) || ((e as any)[25] as any) !== (p as any) || ((e as any)[26] as any) !== (S as any) ? (C = (Q as any)(s, S, y, {
        isComposerAnswerPath: p
      }), (e as any)[23] = s, (e as any)[24] = y, (e as any)[25] = p, (e as any)[26] = S, (e as any)[27] = C) : C = (e as any)[27];
      const l: any = C,
        N: any = (): any => {
          (((navigator as any).clipboard as any).writeText as any)(A);
        };
      if (((l as any).kind as any) === ("question" as any)) {
        g = ((i as any).jsx as any)(P, {
          entry: s,
          onCopy: N,
          children: ((i as any).jsx as any)($, {
            adjacency: n,
            content: A,
            isSourceTrusted: !0,
            timestampMs: (s as any).timestampMs
          })
        });
        break e;
      }
      const o: any = p ? "elevated" : "bubble";
      let I: any;
      s: {
        if (((l as any).kind as any) === ("resolved" as any)) {
          let a: any;
          ((e as any)[28] as any) !== ((l as any).answer as any) || ((e as any)[29] as any) !== (o as any) || ((e as any)[30] as any) !== (t as any) ? (a = ((i as any).jsx as any)(te, {
            answer: (l as any).answer,
            surface: o,
            widget: t
          }), (e as any)[28] = (l as any).answer, (e as any)[29] = o, (e as any)[30] = t, (e as any)[31] = a) : a = (e as any)[31], I = a;
          break s;
        }
        if (((l as any).kind as any) === ("dismissed" as any)) {
          let a: any;
          ((e as any)[32] as any) !== (o as any) || ((e as any)[33] as any) !== (t as any) ? (a = ((i as any).jsx as any)(ie, {
            surface: o,
            widget: t
          }), (e as any)[32] = o, (e as any)[33] = t, (e as any)[34] = a) : a = (e as any)[34], I = a;
          break s;
        }
        const c: any = d ?? void 0,
          m: any = !E;
        let u: any;
        ((e as any)[35] as any) !== ((s as any).id as any) || ((e as any)[36] as any) !== (x as any) || ((e as any)[37] as any) !== (o as any) || ((e as any)[38] as any) !== (c as any) || ((e as any)[39] as any) !== (m as any) || ((e as any)[40] as any) !== (t as any) ? (u = ((i as any).jsx as any)(ae, {
          agentId: c,
          entryId: (s as any).id,
          isKeyboardTarget: x,
          isReadOnly: m,
          surface: o,
          widget: t
        }), (e as any)[35] = (s as any).id, (e as any)[36] = x, (e as any)[37] = o, (e as any)[38] = c, (e as any)[39] = m, (e as any)[40] = t, (e as any)[41] = u) : u = (e as any)[41], I = u;
      }
      if (r = I, f = ((l as any).kind as any) === ("resolved" as any) ? (): any => {
        (((navigator as any).clipboard as any).writeText as any)(`${A}
${(U as any)(j, t, (l as any).answer)}`);
      } : void 0, p) {
        let c: any;
        ((e as any)[42] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (c = {
          className: "sand-78zum5 sand-dt5ytf sand-1cy8zhl sand-h8yej3 sand-euugli"
        }, (e as any)[42] = c) : c = (e as any)[42];
        let m: any;
        ((e as any)[43] as any) !== (n as any) ? (m = {
          ...n,
          isContinuedToNext: !1
        }, (e as any)[43] = n, (e as any)[44] = m) : m = (e as any)[44];
        const u: any = ((i as any).jsx as any)($, {
          adjacency: m,
          content: (X as any)(A, (t as any).helpText),
          isSourceTrusted: !0,
          timestampMs: (s as any).timestampMs
        });
        let a: any;
        ((e as any)[45] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (a = {
          className: "sand-78zum5 sand-dt5ytf sand-h8yej3 sand-1q8iv8g sand-1om1abp"
        }, (e as any)[45] = a) : a = (e as any)[45];
        let w: any;
        ((e as any)[46] as any) !== (r as any) ? (w = ((i as any).jsx as any)("div", {
          ...a,
          children: r
        }), (e as any)[46] = r, (e as any)[47] = w) : w = (e as any)[47];
        let M: any;
        ((e as any)[48] as any) !== (w as any) || ((e as any)[49] as any) !== (u as any) ? (M = ((i as any).jsxs as any)("div", {
          ...c,
          children: [u, w]
        }), (e as any)[48] = w, (e as any)[49] = u, (e as any)[50] = M) : M = (e as any)[50], g = ((i as any).jsx as any)(P, {
          entry: s,
          onCopy: f ?? N,
          children: M
        });
        break e;
      }
    }
    (e as any)[10] = n, (e as any)[11] = d, (e as any)[12] = s, (e as any)[13] = j, (e as any)[14] = E, (e as any)[15] = x, (e as any)[16] = y, (e as any)[17] = p, (e as any)[18] = S, (e as any)[19] = t, (e as any)[20] = r, (e as any)[21] = f, (e as any)[22] = g;
  } else r = (e as any)[20], f = (e as any)[21], g = (e as any)[22];
  if ((g as any) !== (((Symbol as any).for as any)("react.early_return_sentinel") as any)) return g;
  let b: any;
  ((e as any)[51] as any) !== ((n as any).isGroupStart as any) || ((e as any)[52] as any) !== (r as any) || ((e as any)[53] as any) !== ((s as any).timestampMs as any) ? (b = ((i as any).jsx as any)(se, {
    className: "sand-widget-wrap",
    isGroupStart: (n as any).isGroupStart,
    timestampMs: (s as any).timestampMs,
    variant: "question",
    children: r
  }), (e as any)[51] = (n as any).isGroupStart, (e as any)[52] = r, (e as any)[53] = (s as any).timestampMs, (e as any)[54] = b) : b = (e as any)[54];
  let T: any;
  return ((e as any)[55] as any) !== (s as any) || ((e as any)[56] as any) !== (f as any) || ((e as any)[57] as any) !== (b as any) ? (T = ((i as any).jsx as any)(P, {
    entry: s,
    onCopy: f,
    children: b
  }), (e as any)[55] = s, (e as any)[56] = f, (e as any)[57] = b, (e as any)[58] = T) : T = (e as any)[58], T;
}
function re(this: any): any {}
export { ne as default };
//# debugId=a88cc663-ea12-476e-aa9b-0dbb976cc85d
