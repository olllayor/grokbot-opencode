declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "e319eecf-a005-49ca-a732-b35e444c4bdd", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-e319eecf-a005-49ca-a732-b35e444c4bdd");
  } catch (e: any) {}
} as any)();
function t(this: any, e: any, n: any): any {
  switch (n) {
    case "connected":
      return (e as any)({
        id: "QHcLEN"
      });
    case "disconnected":
      return (e as any)({
        id: "ZYnwzF"
      });
    case "error":
      return (e as any)({
        id: "SlfejT"
      });
    case "initializing":
      return (e as any)({
        id: "l6GfXr"
      });
    case "needsAuth":
      return (e as any)({
        id: "tHbuQ4"
      });
    case "needsGrant":
      return (e as any)({
        id: "f8c8eA"
      });
    case "disabledByTeamAdminPolicy":
      return (e as any)({
        id: "OYx6pi"
      });
    default:
      return n;
  }
}
function r(this: any, e: any): any {
  switch (e) {
    case "connected":
      return null;
    case "needsAuth":
    case "needsGrant":
      return "warn";
    case "error":
      return "danger";
    case "initializing":
    case "disconnected":
    case "disabledByTeamAdminPolicy":
      return "neutral";
    default:
      return e;
  }
}
function i(this: any, e: any): any {
  if ((e as any) === ("connected" as any)) return "connected";
  switch ((r as any)(e)) {
    case "warn":
      return "warn";
    case "danger":
      return "danger";
    default:
      return "neutral";
  }
}
export { t as a, i as g };
//# debugId=e319eecf-a005-49ca-a732-b35e444c4bdd
