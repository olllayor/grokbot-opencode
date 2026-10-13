declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "ea3c6dc0-1a52-4f34-a18f-234b7bc573a4", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-ea3c6dc0-1a52-4f34-a18f-234b7bc573a4");
  } catch (e: any) {}
} as any)();
const e: any = [{
    key: "smileys-emotion",
    message: "الوجوه التعبيرية والمشاعر",
    order: 0
  }, {
    key: "people-body",
    message: "الأشخاص والجسم",
    order: 1
  }, {
    key: "component",
    message: "المكوّن",
    order: 2
  }, {
    key: "animals-nature",
    message: "الحيوانات والطبيعة",
    order: 3
  }, {
    key: "food-drink",
    message: "الطعام والشراب",
    order: 4
  }, {
    key: "travel-places",
    message: "السفر والأماكن",
    order: 5
  }, {
    key: "activities",
    message: "الأنشطة",
    order: 6
  }, {
    key: "objects",
    message: "الأشياء",
    order: 7
  }, {
    key: "symbols",
    message: "الرموز",
    order: 8
  }, {
    key: "flags",
    message: "الأعلام",
    order: 9
  }],
  s: any = {
    groups: e
  };
export { s as default, e as groups };
//# debugId=ea3c6dc0-1a52-4f34-a18f-234b7bc573a4
