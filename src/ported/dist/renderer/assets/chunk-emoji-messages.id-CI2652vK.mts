declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "02a57e1e-d33a-484b-9336-fed047976217", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-02a57e1e-d33a-484b-9336-fed047976217");
  } catch (e: any) {}
} as any)();
const e: any = [{
    key: "smileys-emotion",
    message: "Smiley dan emosi",
    order: 0
  }, {
    key: "people-body",
    message: "Orang dan tubuh",
    order: 1
  }, {
    key: "component",
    message: "Komponen",
    order: 2
  }, {
    key: "animals-nature",
    message: "Hewan dan alam",
    order: 3
  }, {
    key: "food-drink",
    message: "Makanan dan minuman",
    order: 4
  }, {
    key: "travel-places",
    message: "Perjalanan dan tempat",
    order: 5
  }, {
    key: "activities",
    message: "Aktivitas",
    order: 6
  }, {
    key: "objects",
    message: "Objek",
    order: 7
  }, {
    key: "symbols",
    message: "Simbol",
    order: 8
  }, {
    key: "flags",
    message: "Bendera",
    order: 9
  }],
  a: any = {
    groups: e
  };
export { a as default, e as groups };
//# debugId=02a57e1e-d33a-484b-9336-fed047976217
