declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "7dd74d8c-afa2-45e1-b017-b091c3d75772", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-7dd74d8c-afa2-45e1-b017-b091c3d75772");
  } catch (e: any) {}
} as any)();
const e: any = [{
    key: "smileys-emotion",
    message: "مسکراہٹیں اور جذبات",
    order: 0
  }, {
    key: "people-body",
    message: "لوگ اور جسم",
    order: 1
  }, {
    key: "component",
    message: "اجزا",
    order: 2
  }, {
    key: "animals-nature",
    message: "جانور اور فطرت",
    order: 3
  }, {
    key: "food-drink",
    message: "کھانا اور مشروبات",
    order: 4
  }, {
    key: "travel-places",
    message: "سفر اور مقامات",
    order: 5
  }, {
    key: "activities",
    message: "سرگرمیاں",
    order: 6
  }, {
    key: "objects",
    message: "اشیا",
    order: 7
  }, {
    key: "symbols",
    message: "علامتیں",
    order: 8
  }, {
    key: "flags",
    message: "پرچم",
    order: 9
  }],
  s: any = {
    groups: e
  };
export { s as default, e as groups };
//# debugId=7dd74d8c-afa2-45e1-b017-b091c3d75772
