declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "765f220f-8a82-4549-a174-2093cbbedfe1", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-765f220f-8a82-4549-a174-2093cbbedfe1");
  } catch (e: any) {}
} as any)();
import { u as e } from "./index.eager-vendor-Qbf9YA6n.js";
function i(this: any): any {
  const {
    _: u
  }: any = (e as any)();
  return (u as any)({
    id: "Ke/QF9"
  });
}
export { i as u };
//# debugId=765f220f-8a82-4549-a174-2093cbbedfe1
