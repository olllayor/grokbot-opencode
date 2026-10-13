declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "fce4060d-f3de-4687-8fe2-a2c820c40944", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-fce4060d-f3de-4687-8fe2-a2c820c40944");
  } catch (e: any) {}
} as any)();
const e: any = [{
    key: "smileys-emotion",
    message: "סמיילים ורגשות",
    order: 0
  }, {
    key: "people-body",
    message: "אנשים וגוף",
    order: 1
  }, {
    key: "component",
    message: "רכיבים",
    order: 2
  }, {
    key: "animals-nature",
    message: "חיות וטבע",
    order: 3
  }, {
    key: "food-drink",
    message: "אוכל ושתייה",
    order: 4
  }, {
    key: "travel-places",
    message: "נסיעות ומקומות",
    order: 5
  }, {
    key: "activities",
    message: "פעילויות",
    order: 6
  }, {
    key: "objects",
    message: "חפצים",
    order: 7
  }, {
    key: "symbols",
    message: "סמלים",
    order: 8
  }, {
    key: "flags",
    message: "דגלים",
    order: 9
  }],
  s: any = {
    groups: e
  };
export { s as default, e as groups };
//# debugId=fce4060d-f3de-4687-8fe2-a2c820c40944
