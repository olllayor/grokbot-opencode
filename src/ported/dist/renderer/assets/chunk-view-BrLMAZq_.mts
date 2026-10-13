declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "1c67672f-3a54-49a7-8556-8c613cb6f369", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-1c67672f-3a54-49a7-8556-8c613cb6f369");
  } catch (e: any) {}
} as any)();
function e(this: any): any {
  return (e as any).d = 971, null;
}
export { e as default };
//# debugId=1c67672f-3a54-49a7-8556-8c613cb6f369
