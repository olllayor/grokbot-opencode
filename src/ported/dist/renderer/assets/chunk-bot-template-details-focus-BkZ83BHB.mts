declare var HTMLElement: any;
declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "3f153a89-e6d3-45bb-8ff0-56bc5e98ac2e", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-3f153a89-e6d3-45bb-8ff0-56bc5e98ac2e");
  } catch (e: any) {}
} as any)();
function r(this: any, n: any, t: any): any {
  if ((n as any) == (null as any)) return null;
  for (const e of ((n as any).querySelectorAll as any)("[data-details-pane]")) if (e instanceof HTMLElement && (((e as any).getAttribute as any)("data-details-pane") as any) === (t as any)) return e;
  return null;
}
function l(this: any, n: any, t: any): any {
  if (((n as any).kind as any) === ("row" as any)) {
    const e: any = (r as any)((t as any).incoming, (n as any).paneKey);
    if ((e as any) != (null as any)) return e;
  }
  return (t as any).back ?? (t as any).title ?? (t as any).fallback;
}
export { l as r };
//# debugId=3f153a89-e6d3-45bb-8ff0-56bc5e98ac2e
