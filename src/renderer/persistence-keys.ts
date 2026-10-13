/** Recovered from index.eager-app-Cj5f8Gby.js: kp, YL, Pb, Hs, el, ZL, ly, wd, QL. */
export const STORAGE_PREFIX = "sand.";
export const SLICE_PREFIX = "sand.client.slice.";
export interface SliceDefinition {
  slice: string;
  schemaVersion: number;
  scope: string;
  accountSensitive: boolean;
}
export interface StagePolicy {
  include: readonly string[];
  exclude: readonly string[];
}
export function matchesStagePolicy(policy: StagePolicy, key: string): boolean {
  const longest = (prefixes: readonly string[]) =>
    Math.max(
      -1,
      ...prefixes
        .filter((prefix) => key.startsWith(prefix))
        .map((prefix) => prefix.length),
    );
  const included = longest(policy.include);
  return included >= 0 && included >= longest(policy.exclude);
}
export function includesWholePrefix(
  policy: StagePolicy,
  prefix: string,
): boolean {
  return (
    matchesStagePolicy(policy, prefix) &&
    !policy.exclude.some(
      (exclusion) =>
        exclusion.length > prefix.length && exclusion.startsWith(prefix),
    )
  );
}
export function encodeKeyPart(value: string): string {
  return encodeURIComponent(value).replaceAll(".", "%2E");
}
export function sliceKey(
  definition: SliceDefinition,
  accountSlot?: string | null,
  invariant: (condition: boolean, message: () => string) => void = (
    condition,
    message,
  ) => {
    if (!condition) throw new Error(message());
  },
): string {
  if (!definition.accountSensitive) return `${SLICE_PREFIX}${definition.slice}`;
  invariant(
    accountSlot != null && accountSlot.length > 0,
    () =>
      `persistence: account-sensitive slice "${definition.slice}" needs a resolved account slot`,
  );
  return `${SLICE_PREFIX}account.${encodeKeyPart(accountSlot as string)}.${definition.slice}`;
}
export function accountPrefix(accountSlot: string): string {
  return `${SLICE_PREFIX}account.${encodeKeyPart(accountSlot)}.`;
}
export function decodeSubKey(encoded: string): string | null {
  if (encoded.includes(".")) return null;
  try {
    return decodeURIComponent(encoded);
  } catch {
    return null;
  }
}
export interface Envelope {
  schemaVersion: number;
  value: unknown;
}
export type EnvelopeResult =
  | { kind: "absent" }
  | { kind: "corrupt" }
  | { kind: "envelope"; envelope: Envelope };
export function parseEnvelope(raw: string | null | undefined): EnvelopeResult {
  if (raw == null) return { kind: "absent" };
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return { kind: "corrupt" };
  }
  if (
    parsed === null ||
    typeof parsed !== "object" ||
    Array.isArray(parsed) ||
    !("schemaVersion" in parsed) ||
    typeof parsed.schemaVersion !== "number" ||
    !("value" in parsed)
  )
    return { kind: "corrupt" };
  return {
    kind: "envelope",
    envelope: { schemaVersion: parsed.schemaVersion, value: parsed.value },
  };
}
export function isQuotaFailure(error: unknown): boolean {
  const name = error instanceof Error ? error.name : "";
  const message = error instanceof Error ? error.message : "";
  return (
    name === "QuotaExceededError" ||
    /ENOSPC|EDQUOT|QuotaExceeded/i.test(message)
  );
}
export function stagingPolicy(
  accountSlot: string | null | undefined,
): StagePolicy {
  return {
    include:
      accountSlot == null
        ? [STORAGE_PREFIX]
        : [STORAGE_PREFIX, accountPrefix(accountSlot)],
    exclude: [
      `${SLICE_PREFIX}account.`,
      ...(accountSlot == null
        ? []
        : [`${accountPrefix(accountSlot)}transcript.replicas.`]),
    ],
  };
}
