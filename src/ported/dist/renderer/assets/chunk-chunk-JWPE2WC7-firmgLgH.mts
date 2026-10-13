declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "ea6a2031-e5a8-44ce-8f9c-58bca88188ff", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-ea6a2031-e5a8-44ce-8f9c-58bca88188ff");
  } catch (e: any) {}
} as any)();
import { _ as i } from "./chunk-mermaid.core-B9Iu5CoE.js";
function t(this: any, c: any, e: any): any {
  (c as any).accDescr && (e as any).setAccDescription?.((c as any).accDescr), (c as any).accTitle && (e as any).setAccTitle?.((c as any).accTitle), (c as any).title && (e as any).setDiagramTitle?.((c as any).title);
}
(i as any)(t, "populateCommonDb");
export { t as p };
//# debugId=ea6a2031-e5a8-44ce-8f9c-58bca88188ff
