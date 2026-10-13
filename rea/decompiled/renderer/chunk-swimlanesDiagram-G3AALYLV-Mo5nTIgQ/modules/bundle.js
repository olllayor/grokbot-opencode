import { c, s } from "./chunk-flowDiagram-23GEKE2U-CVKDJ8ZV.js";
import { _ } from "./chunk-mermaid.core-B9Iu5CoE.js";
import "./chunk-chunk-5VM5RSS4-CTCaRfNa.js";
import "./chunk-chunk-XXDRQBXY-DVdINg3t.js";
import "./chunk-chunk-VR4S4FIN-HF2Hbh9A.js";
import "./chunk-chunk-32BRIVSS-CL4hvhVG.js";
import "./chunk-channel-Bm516PE5.js";
import "./index.eager-vendor-Qbf9YA6n.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "f99d1902-bba2-4274-952b-a9748eb1906f";
            e._sentryDebugIdIdentifier = "sentry-dbid-f99d1902-bba2-4274-952b-a9748eb1906f";
        }
    } catch (e) {}
})();
const o = _((t)=>`${s(t)}
  .swimlane.cluster rect {
    stroke: ${t.clusterBorder} !important;
  }
  [data-look="neo"].cluster rect {
    filter: none;
  }
`, "getStyles");
const styles = o;
export const diagram = c({
    defaultLayout: "swimlane",
    styles
});
