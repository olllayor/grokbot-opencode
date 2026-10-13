import { readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";
const wrapper = JSON.parse(
  await readFile("rea/evidence/rea-web-bundle-http.json", "utf8"),
);
const result = wrapper.result;
if (result.isError) throw new Error("Web bundle analysis failed");
const evidence =
  result.structuredContent ??
  JSON.parse(result.content.find((item) => item.type === "text").text);
const analysis = evidence.normalized_result;
const matches = [];
for (const chunk of analysis.observations.chunks.nodes) {
  const relative = new URL(chunk.url).pathname.replace(/^\//, "");
  const source = await readFile(path.join("rea/recovered/dist/renderer", relative));
  const sha256 = createHash("sha256").update(source).digest("hex");
  matches.push({
    file: relative,
    bytes: source.length,
    sha256,
    matchesCapturedSource: sha256 === chunk.artifact_sha256,
  });
}
if (matches.some((item) => !item.matchesCapturedSource))
  throw new Error("Captured script differs from recovered artifact");
const summary = {
  evidenceId: evidence.evidence_id,
  scriptsObserved: analysis.capture.scripts_observed,
  scriptsAnalyzed: analysis.capture.scripts_analyzed,
  completeness: analysis.completeness,
  chunkEdges: analysis.observations.chunks.edges.length,
  routeCandidates: analysis.observations.routes.length,
  endpointCandidates: analysis.observations.endpoints.length,
  matches,
  limitations: evidence.limitations,
};
await writeFile(
  "rea/evidence/rea-web-bundle-summary.json",
  JSON.stringify(summary, null, 2) + "\n",
);
console.log(
  JSON.stringify(
    {
      ...summary,
      matches: `${matches.length} captured scripts match original recovered SHA256`,
    },
    null,
    2,
  ),
);
