declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "c61630b8-e166-40a1-88fd-c90006a9ec1f", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-c61630b8-e166-40a1-88fd-c90006a9ec1f");
  } catch (e: any) {}
} as any)();
import u from "./chunk-katex-CBoxBzRj.js";
const i: any = /\\(emph|text|textbf|textit|textmd|textnormal|textrm|textsf|texttt|textup)([ \t\r\n]*)\{([^{}]*)\}/g,
  f: any = /\$|\\[()]|\\verb|%/;
function d(this: any, r: any): any {
  let e: any = "",
    t: any = 0;
  for (const n of r) {
    if ((n as any) === ("\\" as any)) {
      e += n, t += 1;
      continue;
    }
    (n as any) === ("_" as any) && ((t as any) % (2 as any) as any) === (0 as any) ? e += "\\_" : e += n, t = 0;
  }
  return e;
}
function l(this: any, r: any): any {
  return ((r as any).replace as any)(i, (e: any, t: any, n: any, c: any): any => ((f as any).test as any)(c) ? e : `\\${t}${n}{${(d as any)(c)}}`);
}
function a(this: any, r: any, e: any): any {
  try {
    return ((u as any).renderToString as any)(r, {
      displayMode: e,
      throwOnError: !0
    }), !0;
  } catch {
    return !1;
  }
}
function m(this: any, r: any, e: any = !1): any {
  const t: any = (l as any)(r);
  return (t as any) === (r as any) || (a as any)(r, e) || !(a as any)(t, e) ? r : t;
}
const E: number = 256,
  o: any = new (Map as any)();
function x(this: any, r: any, e: any): any {
  const t: any = `${e ? 1 : 0}\0${r}`,
    n: any = ((o as any).get as any)(t);
  if ((n as any) !== (void 0 as any)) return ((o as any).delete as any)(t), ((o as any).set as any)(t, n), n;
  const c: any = ((u as any).renderToString as any)((m as any)(r, e), {
    displayMode: e,
    throwOnError: !1,
    trust: !1
  });
  if (((o as any).set as any)(t, c), ((o as any).size as any) > (E as any)) {
    const s: any = (((((o as any).keys as any)() as any).next as any)() as any).value;
    (s as any) != (null as any) && ((o as any).delete as any)(s);
  }
  return c;
}
export { x as renderMathHtml };
//# debugId=c61630b8-e166-40a1-88fd-c90006a9ec1f
