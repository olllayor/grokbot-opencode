declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "c1d02d51-2fc8-4d52-ba5b-b15716057a20", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-c1d02d51-2fc8-4d52-ba5b-b15716057a20");
  } catch (e: any) {}
} as any)();
import { _ as a, d as o } from "./chunk-mermaid.core-B9Iu5CoE.js";
var d: any = (a as any)((t: any, e: any): any => {
  let n: any;
  return (e as any) === ("sandbox" as any) && (n = (o as any)(("#i" as any) + (t as any))), ((((e as any) === ("sandbox" as any) ? (o as any)((((((n as any).nodes as any)() as any)[0] as any).contentDocument as any).body) : (o as any)("body")) as any).select as any)(`[id="${t}"]`);
}, "getDiagramElement");
export { d as g };
//# debugId=c1d02d51-2fc8-4d52-ba5b-b15716057a20
