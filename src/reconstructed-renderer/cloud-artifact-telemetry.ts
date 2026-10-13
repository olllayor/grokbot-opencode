import { ce as classifyArtifactSource } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./index.eager-vendor-Qbf9YA6n.js";
import { registerDebugId } from "./debug-metadata.js";
registerDebugId("03ce6d60-4004-40f1-9915-4ffd9f4f4025");
export interface ArtifactStageReport { stage: string; agentId: string; bcId: string; kind: string }
export interface ArtifactStageInput { source: unknown; stage: string; agentId: string; knownRunId(id: string): string | null | undefined; report(event: ArtifactStageReport): void }
export function reportCloudAgentArtifactStage(input: ArtifactStageInput): void {
  const source = classifyArtifactSource(input.source);
  if (source == null) return;
  const bcId = input.knownRunId(source.bcId);
  if (bcId != null) input.report({ stage: input.stage, agentId: input.agentId, bcId, kind: source.kind });
}
