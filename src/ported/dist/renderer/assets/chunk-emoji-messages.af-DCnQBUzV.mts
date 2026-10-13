declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "88c06817-e9c6-49f4-a24a-8954916ed343", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-88c06817-e9c6-49f4-a24a-8954916ed343");
  } catch (e: any) {}
} as any)();
const e: any = [{
    key: "smileys-emotion",
    message: "Glimlaggies en emosies",
    order: 0
  }, {
    key: "people-body",
    message: "Mense en liggaam",
    order: 1
  }, {
    key: "component",
    message: "Komponente",
    order: 2
  }, {
    key: "animals-nature",
    message: "Diere en natuur",
    order: 3
  }, {
    key: "food-drink",
    message: "Kos en drank",
    order: 4
  }, {
    key: "travel-places",
    message: "Reis en plekke",
    order: 5
  }, {
    key: "activities",
    message: "Aktiwiteite",
    order: 6
  }, {
    key: "objects",
    message: "Voorwerpe",
    order: 7
  }, {
    key: "symbols",
    message: "Simbole",
    order: 8
  }, {
    key: "flags",
    message: "Vlae",
    order: 9
  }],
  s: any = {
    groups: e
  };
export { s as default, e as groups };
//# debugId=88c06817-e9c6-49f4-a24a-8954916ed343
