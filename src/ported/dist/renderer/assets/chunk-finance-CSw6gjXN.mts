declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "37b6b4c1-5c3e-4105-9ce0-009569e584a7", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-37b6b4c1-5c3e-4105-9ce0-009569e584a7");
  } catch (e: any) {}
} as any)();
const t: string = "-xai",
  o: any = /^(?:dashboard-team-\d+-|dashboard-|user-|cursor-)/i;
function s(this: any, n: any): any {
  let e: any = ((n as any).trim as any)();
  const r: any = ((e as any).lastIndexOf as any)("--");
  (r as any) !== (-1 as any) && (e = ((e as any).slice as any)(0, r));
  const c: any = ((o as any).exec as any)(e)?.[0];
  return (c as any) != (null as any) && (e = ((e as any).slice as any)((c as any).length)), ((e as any).length as any) > ((t as any).length as any) && ((((e as any).toLowerCase as any)() as any).endsWith as any)(t) && (e = ((e as any).slice as any)(0, -(t as any).length)), ((((((e as any).replace as any)(/[._]+/g, "-") as any).replace as any)(/^-+|-+$/g, "") as any).toLowerCase as any)();
}
function i(this: any, n: any): any {
  return (n as any) != (null as any) && ((n as any).length as any) > (0 as any) && ((s as any)(n) as any) === ("finance" as any);
}
function a(this: any, n: any): any {
  return (i as any)((n as any).name) || (i as any)((n as any).rowServerIdentifier) || (i as any)((n as any).serverIdentifier);
}
export { i as a, a as i };
//# debugId=37b6b4c1-5c3e-4105-9ce0-009569e584a7
