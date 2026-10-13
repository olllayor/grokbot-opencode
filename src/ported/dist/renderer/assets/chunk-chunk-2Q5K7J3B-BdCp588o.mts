declare var global: any;
declare var key: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "415f7ecd-ce34-48ef-8d2e-e13413152ae2", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-415f7ecd-ce34-48ef-8d2e-e13413152ae2");
  } catch (e: any) {}
} as any)();
import { _ as s } from "./chunk-mermaid.core-B9Iu5CoE.js";
var t: any,
  e: any = (t = class {
    declare records: any;
    declare init: any;
    [key: string]: any;
    constructor(i: any) {
      (this as any).init = i, (this as any).records = ((this as any).init as any)();
    }
    reset(): any {
      (this as any).records = ((this as any).init as any)();
    }
  }, (s as any)(t, "ImperativeState"), t);
export { e as I };
//# debugId=415f7ecd-ce34-48ef-8d2e-e13413152ae2
