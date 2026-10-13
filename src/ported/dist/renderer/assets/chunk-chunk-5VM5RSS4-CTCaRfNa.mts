declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "e443966d-3e10-4a90-b8ac-b276536e6992", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-e443966d-3e10-4a90-b8ac-b276536e6992");
  } catch (e: any) {}
} as any)();
import { _ as e } from "./chunk-mermaid.core-B9Iu5CoE.js";
var l: any = (e as any)((): any => `
  /* Font Awesome icon styling - consolidated */
  .label-icon {
    display: inline-block;
    height: 1em;
    overflow: visible;
    vertical-align: -0.125em;
  }
  
  .node .label-icon path {
    fill: currentColor;
    stroke: revert;
    stroke-width: revert;
  }
`, "getIconStyles");
export { l as g };
//# debugId=e443966d-3e10-4a90-b8ac-b276536e6992
