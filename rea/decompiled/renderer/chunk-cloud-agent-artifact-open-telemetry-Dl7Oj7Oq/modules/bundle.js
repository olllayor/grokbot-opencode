import { ce } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./index.eager-vendor-Qbf9YA6n.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "03ce6d60-4004-40f1-9915-4ffd9f4f4025";
            e._sentryDebugIdIdentifier = "sentry-dbid-03ce6d60-4004-40f1-9915-4ffd9f4f4025";
        }
    } catch (e) {}
})();
export function reportCloudAgentArtifactStage(t) {
    const n = ce(t.source);
    if (n == null) {
        return;
    }
    const bcId = t.knownRunId(n.bcId);
    if (bcId != null) {
        t.report({
            stage: t.stage,
            agentId: t.agentId,
            bcId,
            kind: n.kind
        });
    }
}
