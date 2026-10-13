declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "4a1595e0-2e28-4524-a73a-6b177fda1cd1", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-4a1595e0-2e28-4524-a73a-6b177fda1cd1");
  } catch (e: any) {}
} as any)();
import { s as r, b as e, a, S as s } from "./chunk-chunk-EX3LRPZG-CXrsEYy0.js";
import { _ as i } from "./chunk-mermaid.core-B9Iu5CoE.js";
import "./chunk-chunk-XXDRQBXY-DVdINg3t.js";
import "./chunk-chunk-VR4S4FIN-HF2Hbh9A.js";
import "./chunk-chunk-32BRIVSS-CL4hvhVG.js";
import "./index.eager-vendor-Qbf9YA6n.js";
var u: any = {
  parser: a,
  get db(): any {
    return new (s as any)(2);
  },
  renderer: e,
  styles: r,
  init: (i as any)((t: any): any => {
    (t as any).state || ((t as any).state = {}), ((t as any).state as any).arrowMarkerAbsolute = (t as any).arrowMarkerAbsolute;
  }, "init")
};
export { u as diagram };
//# debugId=4a1595e0-2e28-4524-a73a-6b177fda1cd1
