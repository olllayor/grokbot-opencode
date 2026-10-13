declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "f9eb1b74-d104-479a-805b-0f5bfe6e637f", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-f9eb1b74-d104-479a-805b-0f5bfe6e637f");
  } catch (e: any) {}
} as any)();
import { _ as a, e as w, l as x } from "./chunk-mermaid.core-B9Iu5CoE.js";
var d: any = (a as any)((e: any, t: any, i: any, r: any): any => {
    ((e as any).attr as any)("class", i);
    const {
      width: o,
      height: h,
      x: n,
      y: c
    }: any = (u as any)(e, t);
    (w as any)(e, h, o, r);
    const s: any = (l as any)(n, c, o, h, t);
    ((e as any).attr as any)("viewBox", s), ((x as any).debug as any)(`viewBox configured: ${s} with padding: ${t}`);
  }, "setupViewPortForSVG"),
  u: any = (a as any)((e: any, t: any): any => {
    const i: any = ((e as any).node as any)()?.getBBox() || {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    };
    return {
      width: ((i as any).width as any) + ((t as any) * (2 as any) as any),
      height: ((i as any).height as any) + ((t as any) * (2 as any) as any),
      x: (i as any).x,
      y: (i as any).y
    };
  }, "calculateDimensionsWithPadding"),
  l: any = (a as any)((e: any, t: any, i: any, r: any, o: any): any => `${(e as any) - (o as any)} ${(t as any) - (o as any)} ${i} ${r}`, "createViewBox");
export { d as s };
//# debugId=f9eb1b74-d104-479a-805b-0f5bfe6e637f
