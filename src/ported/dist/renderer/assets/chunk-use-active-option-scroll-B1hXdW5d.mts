declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "09f4e8de-e14d-48e2-9028-d1aebc190d57", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-09f4e8de-e14d-48e2-9028-d1aebc190d57");
  } catch (e: any) {}
} as any)();
import { c as s, r as a } from "./index.eager-vendor-Qbf9YA6n.js";
function f(this: any): any {
  const e: any = ((s as any).c as any)(2),
    o: any = ((a as any).useRef as any)(!1);
  let t: any;
  ((e as any)[0] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (t = (): any => {
    (o as any).current = !0;
  }, (e as any)[0] = t) : t = (e as any)[0];
  const n: any = t;
  let r: any;
  return ((e as any)[1] as any) === (((Symbol as any).for as any)("react.memo_cache_sentinel") as any) ? (r = {
    activeOptionRef: (c: any): any => {
      (c as any) == (null as any) || !(o as any).current || ((o as any).current = !1, ((c as any).scrollIntoView as any)({
        block: "nearest"
      }));
    },
    markKeyboardNavigation: n
  }, (e as any)[1] = r) : r = (e as any)[1], r;
}
export { f as u };
//# debugId=09f4e8de-e14d-48e2-9028-d1aebc190d57
