import { registerDebugId } from "./debug-metadata.js";
registerDebugId("e319eecf-a005-49ca-a732-b35e444c4bdd");
export type ConnectorStatus = "connected" | "disconnected" | "error" | "initializing" | "needsAuth" | "needsGrant" | "disabledByTeamAdminPolicy";
export type ConnectorTone = "connected" | "warn" | "danger" | "neutral";
const statusMessages: Record<ConnectorStatus, string> = { connected: "QHcLEN", disconnected: "ZYnwzF", error: "SlfejT", initializing: "l6GfXr", needsAuth: "tHbuQ4", needsGrant: "f8c8eA", disabledByTeamAdminPolicy: "OYx6pi" };
export function a(translate: (descriptor: { id: string }) => string, status: string): string {
  // Preserve forward-compatible unknown status strings rather than assuming exhaustiveness.
  if (Object.hasOwn(statusMessages, status)) return translate({ id: statusMessages[status as ConnectorStatus] });
  return status;
}
export function g(status: string): ConnectorTone {
  switch (status) {
    case "connected": return "connected";
    case "needsAuth": case "needsGrant": return "warn";
    case "error": return "danger";
    default: return "neutral";
  }
}
