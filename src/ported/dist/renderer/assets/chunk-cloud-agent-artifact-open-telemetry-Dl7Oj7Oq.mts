declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "03ce6d60-4004-40f1-9915-4ffd9f4f4025", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-03ce6d60-4004-40f1-9915-4ffd9f4f4025");
  } catch (e: any) {}
} as any)();
import { ce as i } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./index.eager-vendor-Qbf9YA6n.js";
function u(this: any, t: any): any {
  const n: any = (i as any)((t as any).source);
  if ((n as any) == (null as any)) return;
  const o: any = ((t as any).knownRunId as any)((n as any).bcId);
  (o as any) != (null as any) && ((t as any).report as any)({
    stage: (t as any).stage,
    agentId: (t as any).agentId,
    bcId: o,
    kind: (n as any).kind
  });
}
export { u as reportCloudAgentArtifactStage };
//# debugId=03ce6d60-4004-40f1-9915-4ffd9f4f4025
