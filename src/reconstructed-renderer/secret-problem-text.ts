import { u as useTranslation } from "./index.eager-vendor-Qbf9YA6n.js";
import { registerDebugId } from "./debug-metadata.js";
registerDebugId("f0c7c999-093d-48b2-9f1d-10eebb8d9b58");
export const G = 128;
export const a = 500;
export const d = 8;
export const c = 4;
export type NameProblem = { kind: "empty" | "long" | "format" | "reserved-sandbox" } | { kind: "reserved-name"; name: string } | { kind: "reserved-prefix"; prefix: string };
export type ValueProblem = { kind: "empty" | "short" | "long" };
const reservedNames = new Set(["PATH", "HOME", "USER", "SHELL", "TERM", "PWD", "DISPLAY", "HTTP_PROXY", "HTTPS_PROXY", "ALL_PROXY", "NO_PROXY"]);
const reservedPrefixes = ["LD_", "CURSOR_", "CLOUD_AGENT_", "SAND_"];
export function v(name: string): NameProblem | null {
  if (name.length === 0) return { kind: "empty" };
  if (name.length > G) return { kind: "long" };
  if (!/^[A-Z][A-Z0-9_]*$/.test(name)) return { kind: "format" };
  if (reservedNames.has(name)) return { kind: "reserved-name", name };
  const prefix = reservedPrefixes.find(prefix => name.startsWith(prefix));
  if (prefix !== undefined) return { kind: "reserved-prefix", prefix };
  if (/CURSOR_SANDBOX/i.test(name)) return { kind: "reserved-sandbox" };
  return null;
}
export function b(value: string): ValueProblem | null {
  if (value.length === 0) return { kind: "empty" };
  if (value.length < d) return { kind: "short" };
  if (new TextEncoder().encode(value).byteLength > c * 1024) return { kind: "long" };
  return null;
}
export function u(): { name: (problem: NameProblem) => string; value: (problem: ValueProblem) => string } {
  const { _ } = useTranslation();
  return {
    name(problem) {
      switch (problem.kind) {
        case "empty": return _({ id: "BRNg7+" });
        case "long": return _({ id: "uzgMt8", values: { GROK_BOT_SECRET_NAME_MAX_LENGTH: G } });
        case "format": return _({ id: "T+UZQR" });
        case "reserved-name": return _({ id: "Owytij", values: { 0: problem.name } });
        case "reserved-prefix": return _({ id: "m8zVtt", values: { 0: problem.prefix } });
        case "reserved-sandbox": return _({ id: "kSvB29" });
      }
    },
    value(problem) {
      switch (problem.kind) {
        case "empty": return _({ id: "qNV794" });
        case "short": return _({ id: "Cr5BJv", values: { GROK_BOT_SECRET_VALUE_MIN_LENGTH: d } });
        case "long": return _({ id: "jTBLMU", values: { GROK_BOT_SECRET_VALUE_MAX_KIB: c } });
      }
    }
  };
}
