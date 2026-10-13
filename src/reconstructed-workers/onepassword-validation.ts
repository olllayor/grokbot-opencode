import type { OperationErrorConstructor } from "./onepassword-policy.js";
import type { CliCandidate, CliInspection } from "./onepassword-cli-runtime.js";
import type {
  ProvisioningAccount,
  ProvisioningVault,
} from "./onepassword-provisioning.js";
export function parseSemanticVersion(version: string): number[] | null {
  if (!/^\d+\.\d+\.\d+$/.test(version)) return null;
  const components = version
    .split(".")
    .map((value) => Number.parseInt(value, 10));
  return components.every(Number.isSafeInteger) ? components : null;
}
export function versionAtLeast(actual: number[], minimum: number[]): boolean {
  for (let index = 0; index < minimum.length; index++) {
    const a = actual[index] ?? 0,
      b = minimum[index] ?? 0;
    if (a > b) return true;
    if (a < b) return false;
  }
  return true;
}
export function supportedCandidate(
  candidate: CliCandidate,
  minimum: number[] = [2, 35, 0],
): boolean {
  const version = parseSemanticVersion(candidate.version!);
  return version !== null && versionAtLeast(version, minimum);
}
export function chooseSupportedCli(
  inspection: CliInspection,
): CliCandidate | null {
  const candidates = inspection.candidates.filter(
    (candidate) => candidate.state === "ready",
  );
  if (
    inspection.selected !== null &&
    !candidates.some(
      (candidate) => candidate.path === inspection.selected?.path,
    )
  )
    candidates.unshift(inspection.selected);
  return (
    candidates.find(
      (candidate) =>
        candidate.source === "system" && supportedCandidate(candidate),
    ) ??
    candidates.find(
      (candidate) =>
        candidate.source === "managed" && supportedCandidate(candidate),
    ) ??
    null
  );
}
export function boundedString(value: unknown, limit: number): string | null {
  if (typeof value !== "string") return null;
  const text = value.trim();
  return text.length > 0 && text.length <= limit ? text : null;
}
export function accountUrl(value: unknown): string | null {
  const text = boundedString(value, 2048);
  if (text === null) return null;
  try {
    const qualified = /^[A-Za-z][A-Za-z0-9+.-]*:/.test(text),
      url = new URL(qualified ? text : `https://${text}`);
    return url.protocol === "https:" &&
      url.hostname !== "" &&
      url.username === "" &&
      url.password === ""
      ? url.toString()
      : null;
  } catch {
    return null;
  }
}
function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
export function createOnePasswordValidators(
  OperationError: OperationErrorConstructor,
) {
  function identifier(value: unknown, label: string): string {
    if (
      typeof value !== "string" ||
      !/^[A-Za-z0-9_.-]+$/.test(value) ||
      value.length > 256
    )
      throw new OperationError("invalid-input", `The ${label} is invalid.`);
    return value;
  }
  function name(value: unknown, label: string): string {
    const text = typeof value === "string" ? value.trim() : "";
    if (
      text.length === 0 ||
      text.length > 256 ||
      text.startsWith("-") ||
      /[\u0000-\u001f\u007f]/.test(text)
    )
      throw new OperationError("invalid-input", `The ${label} is invalid.`);
    return text;
  }
  function accounts(value: unknown): ProvisioningAccount[] {
    const error = () =>
      new OperationError(
        "invalid-output",
        "1Password returned an invalid account list.",
      );
    if (!Array.isArray(value) || value.length > 50) throw error();
    const accounts: ProvisioningAccount[] = [],
      seen = new Set<string>();
    for (const item of value) {
      if (!isRecord(item)) throw error();
      const id = boundedString(item.account_uuid, 256),
        email = boundedString(item.email, 320),
        url = accountUrl(item.url);
      if (
        id === null ||
        !/^[A-Za-z0-9_.-]+$/.test(id) ||
        email === null ||
        url === null ||
        seen.has(id)
      )
        throw error();
      seen.add(id);
      accounts.push({ accountUuid: id, email, url });
    }
    return accounts;
  }
  function vaults(value: unknown): ProvisioningVault[] {
    const error = () =>
      new OperationError(
        "invalid-output",
        "1Password returned an invalid vault list.",
      );
    if (!Array.isArray(value) || value.length > 1000) throw error();
    const vaults: ProvisioningVault[] = [],
      seen = new Set<string>();
    for (const item of value) {
      if (!isRecord(item)) throw error();
      const id = boundedString(item.id, 256),
        name = boundedString(item.name, 256);
      if (
        id === null ||
        !/^[A-Za-z0-9_.-]+$/.test(id) ||
        name === null ||
        seen.has(id)
      )
        throw error();
      seen.add(id);
      vaults.push({ vaultId: id, vaultName: name });
    }
    return vaults;
  }
  function vault(value: unknown): ProvisioningVault {
    const error = () =>
      new OperationError(
        "invalid-output",
        "1Password did not return the created vault.",
      );
    if (!isRecord(value)) throw error();
    const id = boundedString(value.id, 256),
      name = boundedString(value.name, 256);
    if (id === null || !/^[A-Za-z0-9_.-]+$/.test(id) || name === null)
      throw error();
    return { vaultId: id, vaultName: name };
  }
  function expiration(value: unknown): number {
    if (
      typeof value !== "number" ||
      !Number.isSafeInteger(value) ||
      value < 60 ||
      value > 365 * 24 * 60 * 60
    )
      throw new OperationError(
        "invalid-input",
        "The provisioning policy returned an invalid expiration duration.",
      );
    return value;
  }
  function token(output: string): string {
    const token = output.trim();
    if (
      token.length === 0 ||
      token.length > 16384 ||
      !/^ops_[A-Za-z0-9_-]+$/.test(token)
    )
      throw new OperationError(
        "invalid-output",
        "1Password did not return a valid service-account credential.",
      );
    return token;
  }
  return { identifier, name, accounts, vaults, vault, expiration, token };
}
