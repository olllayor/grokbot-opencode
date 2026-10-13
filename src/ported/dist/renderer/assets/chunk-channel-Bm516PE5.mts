declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "e355671d-86a3-4e3f-b968-2702fb224f60", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-e355671d-86a3-4e3f-b968-2702fb224f60");
  } catch (e: any) {}
} as any)();
import { U as a, C as n } from "./chunk-mermaid.core-B9Iu5CoE.js";
const t: any = (r: any, o: any): any => (((a as any).lang as any).round as any)((((n as any).parse as any)(r) as any)[o]);
export { t as c };
//# debugId=e355671d-86a3-4e3f-b968-2702fb224f60
