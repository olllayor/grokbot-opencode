/** Recovered eager-app helpers nn, Qhe, fce, pce used by MFe account boot. */
import type { EnvelopeWithReceipt } from "./persistence-registry.js";
export interface AuthStatus {
  kind: string;
  authId?: string | null;
  email?: string | null;
}
export const ACCOUNT_SLOT_DEFINITION = {
  slice: "client-meta.account-slot",
  schemaVersion: 1,
  scope: "client-persisted",
  accountSensitive: false,
};
export function resolveAuthAccountSlot(status: AuthStatus): string | null {
  if (status.kind !== "logged-in") return null;
  const slot = status.authId ?? status.email;
  return slot == null || slot.length === 0 ? null : slot;
}
export function resolveAccountIdentity(
  status: AuthStatus,
): { slot: string; email: string | null } | null {
  if (status.kind !== "logged-in") return null;
  const slot = resolveAuthAccountSlot(status);
  return slot == null ? null : { slot, email: status.email ?? null };
}
export function readPersistedAccountSlot(
  result: EnvelopeWithReceipt,
): { kind: "corrupt" } | { kind: "ok"; value: string | null } {
  if (result.kind === "corrupt") return { kind: "corrupt" };
  if (result.kind === "absent") return { kind: "ok", value: null };
  const value = result.envelope.value;
  const parsed: { kind: "corrupt" } | { kind: "ok"; value: string | null } =
    value === null || (typeof value === "string" && value.length > 0)
      ? { kind: "ok", value }
      : { kind: "corrupt" };
  result.receipt.classify(parsed.kind);
  return parsed;
}
export function isPersistedAccountSlotCurrent(
  result: EnvelopeWithReceipt,
  slot: string | null,
): boolean {
  return (
    result.kind === "envelope" &&
    result.envelope.schemaVersion === ACCOUNT_SLOT_DEFINITION.schemaVersion &&
    result.envelope.value === slot
  );
}
