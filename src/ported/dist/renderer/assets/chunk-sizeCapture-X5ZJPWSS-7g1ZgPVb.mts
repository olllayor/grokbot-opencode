declare var global: any;
declare var location: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "5ea3fae5-8080-4eb7-9b09-0df3ad1683ff", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-5ea3fae5-8080-4eb7-9b09-0df3ad1683ff");
  } catch (e: any) {}
} as any)();
import { _ as o } from "./chunk-mermaid.core-B9Iu5CoE.js";
import "./index.eager-vendor-Qbf9YA6n.js";
var c: number = 1;
function i(this: any): any {
  if (!((typeof globalThis as any) > ("u" as any))) return globalThis;
}
(o as any)(i, "getCaptureGlobal");
function p(this: any): any {
  return !!(i as any)()?.mermaidCaptureSizes;
}
(o as any)(p, "shouldCaptureSizes");
function u(this: any): any {
  return (typeof location as any) > ("u" as any) ? "browser-dev" : `${(location as any).pathname}${(location as any).search}`;
}
(o as any)(u, "capturedFromLocation");
function d(this: any, n: any, r: any): any {
  const t: any = (i as any)();
  if (!t) return;
  const e: any = ((r as any).node as any)(),
    s: any = ((e && "ownerSVGElement" in e ? (e as any).ownerSVGElement : null) ?? e)?.id ?? "(unknown)";
  (t as any).mermaidCapturedSizes ??= [];
  const a: any = {
    svgId: s,
    sizes: n
  };
  (((t as any).mermaidCapturedSizes as any).push as any)(a), (t as any).mermaidLastCapturedSizes = a;
}
(o as any)(d, "emitCapturedSizes");
function m(this: any, n: any, r: any): any {
  const t: any = [];
  for (const e of (r as any).nodes) (e as any).isGroup || ((t as any).push as any)({
    id: (e as any).id,
    width: (e as any).width ?? 0,
    height: (e as any).height ?? 0
  });
  ((t as any).length as any) !== (0 as any) && (d as any)({
    metadata: {
      captureVersion: c,
      capturedAt: ((new (Date as any)() as any).toISOString as any)(),
      capturedFrom: (u as any)()
    },
    nodes: t
  }, n);
}
(o as any)(m, "captureNodeSizes");
export { m as captureNodeSizes, p as shouldCaptureSizes };
//# debugId=5ea3fae5-8080-4eb7-9b09-0df3ad1683ff
