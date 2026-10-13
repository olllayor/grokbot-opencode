declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "05be072b-8750-4489-81ff-6344a9333660", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-05be072b-8750-4489-81ff-6344a9333660");
  } catch (e: any) {}
} as any)();
function t(this: any, e: any, a: any): any {
  switch ((arguments as any).length) {
    case 0:
      break;
    case 1:
      ((this as any).range as any)(e);
      break;
    default:
      ((((this as any).range as any)(a) as any).domain as any)(e);
      break;
  }
  return this;
}
export { t as i };
//# debugId=05be072b-8750-4489-81ff-6344a9333660
