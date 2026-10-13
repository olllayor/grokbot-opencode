declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "15dc224c-caf8-45e1-8ecd-d3e59e86e7ee", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-15dc224c-caf8-45e1-8ecd-d3e59e86e7ee");
  } catch (e: any) {}
} as any)();
const e: any = [{
    key: "smileys-emotion",
    message: "Smajlíky a emoce",
    order: 0
  }, {
    key: "people-body",
    message: "Lidé a t\u011Blo",
    order: 1
  }, {
    key: "component",
    message: "Komponenty",
    order: 2
  }, {
    key: "animals-nature",
    message: "Zví\u0159ata a p\u0159íroda",
    order: 3
  }, {
    key: "food-drink",
    message: "Jídlo a pití",
    order: 4
  }, {
    key: "travel-places",
    message: "Cestování a místa",
    order: 5
  }, {
    key: "activities",
    message: "Aktivity",
    order: 6
  }, {
    key: "objects",
    message: "P\u0159edm\u011Bty",
    order: 7
  }, {
    key: "symbols",
    message: "Symboly",
    order: 8
  }, {
    key: "flags",
    message: "Vlajky",
    order: 9
  }],
  s: any = {
    groups: e
  };
export { s as default, e as groups };
//# debugId=15dc224c-caf8-45e1-8ecd-d3e59e86e7ee
