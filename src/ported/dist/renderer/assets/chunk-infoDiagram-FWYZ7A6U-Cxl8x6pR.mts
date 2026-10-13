declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "08284fa5-b2f7-4a23-a5a3-1c2cb1163e1f", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-08284fa5-b2f7-4a23-a5a3-1c2cb1163e1f");
  } catch (e: any) {}
} as any)();
import { _ as a, l as s, F as o, e as i } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { p as g } from "./chunk-cynefin-VYW2F7L2-ChVxrOa1.js";
import "./index.eager-vendor-Qbf9YA6n.js";
var p: any = {
    parse: (a as any)(async (r: any): Promise<any> => {
      const e: any = await (g as any)("info", r);
      ((s as any).debug as any)(e);
    }, "parse")
  },
  v: any = {
    version: "11.16.0"
  },
  d: any = (a as any)((): any => (v as any).version, "getVersion"),
  m: any = {
    getVersion: d
  },
  c: any = (a as any)((r: any, e: any, n: any): any => {
    ((s as any).debug as any)((`rendering info diagram
` as any) + (r as any));
    const t: any = (o as any)(e);
    (i as any)(t, 100, 400, !0), ((((((((((((((((t as any).append as any)("g") as any).append as any)("text") as any).attr as any)("x", 100) as any).attr as any)("y", 40) as any).attr as any)("class", "version") as any).attr as any)("font-size", 32) as any).style as any)("text-anchor", "middle") as any).text as any)(`v${n}`);
  }, "draw"),
  l: any = {
    draw: c
  },
  b: any = {
    parser: p,
    db: m,
    renderer: l
  };
export { b as diagram };
//# debugId=08284fa5-b2f7-4a23-a5a3-1c2cb1163e1f
