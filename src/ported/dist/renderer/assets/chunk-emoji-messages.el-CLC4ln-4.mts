declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "6a67f704-6a2e-4332-8b05-0fe308518f8f", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-6a67f704-6a2e-4332-8b05-0fe308518f8f");
  } catch (e: any) {}
} as any)();
const e: any = [{
    key: "smileys-emotion",
    message: "Φατσούλες και συναισθήματα",
    order: 0
  }, {
    key: "people-body",
    message: "Άνθρωποι και σώμα",
    order: 1
  }, {
    key: "component",
    message: "Στοιχεία",
    order: 2
  }, {
    key: "animals-nature",
    message: "Ζώα και φύση",
    order: 3
  }, {
    key: "food-drink",
    message: "Φαγητό και ποτό",
    order: 4
  }, {
    key: "travel-places",
    message: "Ταξίδια και τοποθεσίες",
    order: 5
  }, {
    key: "activities",
    message: "Δραστηριότητες",
    order: 6
  }, {
    key: "objects",
    message: "Αντικείμενα",
    order: 7
  }, {
    key: "symbols",
    message: "Σύμβολα",
    order: 8
  }, {
    key: "flags",
    message: "Σημαίες",
    order: 9
  }],
  s: any = {
    groups: e
  };
export { s as default, e as groups };
//# debugId=6a67f704-6a2e-4332-8b05-0fe308518f8f
