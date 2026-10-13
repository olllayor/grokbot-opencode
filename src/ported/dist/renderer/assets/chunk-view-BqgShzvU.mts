declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "475e40e4-e834-4f62-887f-be1e49683f37", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-475e40e4-e834-4f62-887f-be1e49683f37");
  } catch (e: any) {}
} as any)();
function e(this: any): any {
  return (e as any).d = 851, null;
}
export { e as default };
//# debugId=475e40e4-e834-4f62-887f-be1e49683f37
