declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "0c5804d3-e265-4284-a81a-f42bae9e4c1f", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-0c5804d3-e265-4284-a81a-f42bae9e4c1f");
  } catch (e: any) {}
} as any)();
import { s as a, c as s, a as e, C as t } from "./chunk-chunk-V7JOEXUC-CALFiiwu.js";
import { _ as i } from "./chunk-mermaid.core-B9Iu5CoE.js";
import "./chunk-chunk-5VM5RSS4-CTCaRfNa.js";
import "./chunk-chunk-XXDRQBXY-DVdINg3t.js";
import "./chunk-chunk-VR4S4FIN-HF2Hbh9A.js";
import "./chunk-chunk-32BRIVSS-CL4hvhVG.js";
import "./index.eager-vendor-Qbf9YA6n.js";
var n: any = {
  parser: e,
  get db(): any {
    return new (t as any)();
  },
  renderer: s,
  styles: a,
  init: (i as any)((r: any): any => {
    (r as any).class || ((r as any).class = {}), ((r as any).class as any).arrowMarkerAbsolute = (r as any).arrowMarkerAbsolute;
  }, "init")
};
export { n as diagram };
//# debugId=0c5804d3-e265-4284-a81a-f42bae9e4c1f
