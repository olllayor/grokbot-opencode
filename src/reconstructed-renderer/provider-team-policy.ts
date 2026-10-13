import { c as memo } from "./index.eager-vendor-Qbf9YA6n.js";
import { bP as useSnapshot, b7 as useServices, bR as defaultRules, type PolicyState } from "./index.eager-app-Cj5f8Gby.js";
import { registerDebugId } from "./debug-metadata.js";
registerDebugId("9dac7a24-6cc1-4e1f-b89d-2fbe58d5a9fa");
type Policy = Extract<PolicyState, { status: "ready" }>["value"];
export interface AutoReviewPolicy { lock: "free" | "held" | "unknown"; rules: unknown }
function snapshot(): PolicyState { return useSnapshot(useServices().teamPolicy.snapshots); }
function retainedPolicy(state: PolicyState): Policy | undefined {
  switch (state.status) {
    case "ready": return state.value;
    case "loading": case "failed": return state.previous;
    default: return undefined;
  }
}
function settled(state: PolicyState): boolean { return retainedPolicy(state) !== undefined || state.status === "empty" || state.status === "unavailable"; }
export function u(): unknown { return retainedPolicy(snapshot())?.localToolPermissionCeiling; }
export function a(): boolean {
  const cache = memo.c(2);
  const state = snapshot();
  if (cache[0] !== state) { cache[0] = state; cache[1] = settled(state); }
  return cache[1] as boolean;
}
export function b(): "free" | "held" | "unknown" {
  const state = snapshot();
  const policy = retainedPolicy(state);
  return policy === undefined ? settled(state) ? "free" : "unknown" : policy.localEgressAllowed ? "free" : "held";
}
export function c(): AutoReviewPolicy {
  const cache = memo.c(7);
  const state = snapshot();
  if (cache[0] !== state) { cache[0] = state; cache[1] = retainedPolicy(state); }
  const policy = cache[1] as Policy | undefined;
  if (policy === undefined) {
    const lock = settled(state) ? "free" : "unknown";
    if (cache[2] !== lock) { cache[2] = lock; cache[3] = { lock, rules: defaultRules }; }
    return cache[3] as AutoReviewPolicy;
  }
  const lock = policy.autoReviewTeamEnforced ? "held" : "free";
  const rules = policy.autoReviewTeamEnforced ? policy.autoReviewTeamRules : defaultRules;
  if (cache[4] !== lock || cache[5] !== rules) { cache[4] = lock; cache[5] = rules; cache[6] = { lock, rules }; }
  return cache[6] as AutoReviewPolicy;
}
