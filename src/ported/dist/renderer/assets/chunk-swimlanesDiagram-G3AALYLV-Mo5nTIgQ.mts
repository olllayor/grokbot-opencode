declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "f99d1902-bba2-4274-952b-a9748eb1906f", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-f99d1902-bba2-4274-952b-a9748eb1906f");
  } catch (e: any) {}
} as any)();
import { c as r, s as e } from "./chunk-flowDiagram-23GEKE2U-CVKDJ8ZV.js";
import { _ as a } from "./chunk-mermaid.core-B9Iu5CoE.js";
import "./chunk-chunk-5VM5RSS4-CTCaRfNa.js";
import "./chunk-chunk-XXDRQBXY-DVdINg3t.js";
import "./chunk-chunk-VR4S4FIN-HF2Hbh9A.js";
import "./chunk-chunk-32BRIVSS-CL4hvhVG.js";
import "./chunk-channel-Bm516PE5.js";
import "./index.eager-vendor-Qbf9YA6n.js";
var o: any = (a as any)((t: any): any => `${(e as any)(t)}
  .swimlane.cluster rect {
    stroke: ${(t as any).clusterBorder} !important;
  }
  [data-look="neo"].cluster rect {
    filter: none;
  }
`, "getStyles"),
  s: any = o,
  n: any = (r as any)({
    defaultLayout: "swimlane",
    styles: s
  });
export { n as diagram };
//# debugId=f99d1902-bba2-4274-952b-a9748eb1906f
