declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "14f0879b-521a-4ae2-b85d-60f21724980c", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-14f0879b-521a-4ae2-b85d-60f21724980c");
  } catch (e: any) {}
} as any)();
function u(this: any, e: any, t: any): any {
  return ((e as any).teamRank as any) !== (void 0 as any) && ((t as any).teamRank as any) !== (void 0 as any) && ((e as any).teamRank as any) !== ((t as any).teamRank as any) ? ((e as any).teamRank as any) - ((t as any).teamRank as any) : ((e as any).teamRank as any) !== (void 0 as any) && ((t as any).teamRank as any) === (void 0 as any) ? -1 : ((e as any).teamRank as any) === (void 0 as any) && ((t as any).teamRank as any) !== (void 0 as any) ? 1 : ((t as any).createdAt as any) - ((e as any).createdAt as any);
}
function l(this: any, e: any): any {
  return (([...e] as any).sort as any)(u);
}
function s(this: any, e: any): any {
  if (((e as any).viewerIsOwner as any) === (!0 as any)) return "you";
  if (((e as any).viewerIsOwner as any) !== (!1 as any)) return null;
  const t: any = (e as any).ownerDisplayName?.trim() ?? "";
  return ((t as any).length as any) === (0 as any) ? null : t;
}
function c(this: any, e: any): any {
  const t: any = (s as any)(e);
  if ((t as any) === (null as any) || (t as any) === ("you" as any)) return t;
  const [n = "", ...o]: any = ((((t as any).normalize as any)("NFC") as any).split as any)(/\s+/u);
  if (((n as any).length as any) === (0 as any)) return null;
  const r: any = ((((o as any).reverse as any)() as any).find as any)((i: any): any => ((new (RegExp as any)("^\\p{L}", "u") as any).test as any)(i)) ?? "",
    [a]: any = ((Array as any).from as any)(r);
  return (a as any) === (void 0 as any) ? n : `${n} ${a}`;
}
function m(this: any, e: any, t: any): any {
  return t ? (e as any).title?.trim() ?? "" : "";
}
function f(this: any, e: any, t: any, n: any, o: any): any {
  const r: any = ((((t as any).trim as any)() as any).toLowerCase as any)();
  return ((r as any).length as any) === (0 as any) ? !0 : (([(n as any)(e), (m as any)(e, o), (e as any).description ?? "", (e as any).ownerDisplayName ?? ""] as any).some as any)((a: any): any => ((((a as any).toLowerCase as any)() as any).includes as any)(r));
}
export { m as a, s as b, f as m, l as o, c as t };
//# debugId=14f0879b-521a-4ae2-b85d-60f21724980c
