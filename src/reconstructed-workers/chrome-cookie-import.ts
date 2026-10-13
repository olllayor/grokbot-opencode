import * as fs from "node:fs";
import * as promises from "node:fs/promises";
import * as path from "node:path";
import * as os from "node:os";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { createHash, createDecipheriv, pbkdf2Sync } from "node:crypto";
import { DatabaseSync } from "node:sqlite";
export interface ChromeProfile {
  id: string;
  displayName: string;
}
export interface ImportSystem {
  platform: string;
  homeDir: string;
  safeStoragePassword?: string;
}
export interface StorageReaders {
  readMacSafeStoragePassword(): Promise<string>;
  readLinuxSafeStoragePassword(): Promise<string | null>;
}
export interface Cookie {
  name: string;
  value: string;
  domain: string;
  path: string;
  expires: number;
  httpOnly: boolean;
  secure: boolean;
  sameSite?: string;
  session?: true;
  priority?: string;
}
export class ChromeCookieImportPermissionError extends Error {
  override name = "ChromeCookieImportPermissionError";
  constructor(message = "macOS Finder could not copy Chrome's cookie file") {
    super(message);
  }
}
export class ChromeCookieImportUnknownProfileError extends Error {
  override name = "ChromeCookieImportUnknownProfileError";
}
export class ChromeLocalStateParseError extends Error {
  override name = "ChromeLocalStateParseError";
}
export class ChromeCookieRowParseError extends Error {
  override name = "ChromeCookieRowParseError";
}
export class ChromeCookieImportUnsupportedError extends Error {
  override name = "ChromeCookieImportUnsupportedError";
}
export class ChromeImportWorkerProtocolError extends Error {
  override name = "ChromeImportWorkerProtocolError";
}
export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
export function systemErrorCode(error: unknown): string | undefined {
  const seen = new Set<object>();
  let current = error;
  while (isRecord(current) && !seen.has(current)) {
    seen.add(current);
    if (typeof current.code === "string" && /^E[A-Z_]+$/.test(current.code))
      return current.code;
    current = current.cause;
  }
  return undefined;
}
const finderScript = `on run argv
  set src to (POSIX file (item 1 of argv)) as alias
  set dest to (POSIX file (item 2 of argv)) as alias
  tell application "Finder"
    duplicate src to dest replacing yes
  end tell
end run
`;
export function finderDuplicate(
  source: string,
  destination: string,
): Promise<void> {
  return new Promise((resolve, reject) => {
    execFile(
      "/usr/bin/osascript",
      ["-", source, destination],
      { timeout: 120000, encoding: "utf8" },
      (error) => (error == null ? resolve() : reject(error)),
    ).stdin?.end(finderScript);
  });
}
export async function destinationExists(destination: string): Promise<boolean> {
  try {
    await promises.access(destination);
    return true;
  } catch (error) {
    if (systemErrorCode(error) === "ENOENT") return false;
    throw error;
  }
}
export interface CopyDependencies {
  copyFile?: (source: string, dest: string) => Promise<void>;
  platform?: string;
  runFinderDuplicate?: typeof finderDuplicate;
  destExists?: typeof destinationExists;
}
export async function copyCookieFile(
  input: { source: string; dest: string },
  dependencies: CopyDependencies = {},
): Promise<void> {
  const { source, dest } = input;
  try {
    await (dependencies.copyFile ?? promises.copyFile)(source, dest);
    return;
  } catch (error) {
    if (
      (dependencies.platform ?? process.platform) !== "darwin" ||
      !isRecord(error) ||
      !["EPERM", "EACCES"].includes(String(error.code)) ||
      !new Set(["Cookies", "Cookies-wal", "Cookies-shm"]).has(
        path.basename(source),
      ) ||
      path.basename(dest) !== path.basename(source)
    )
      throw error;
  }
  try {
    await (dependencies.runFinderDuplicate ?? finderDuplicate)(
      source,
      path.dirname(dest),
    );
  } catch {
    throw new ChromeCookieImportPermissionError();
  }
  if (!(await (dependencies.destExists ?? destinationExists)(dest)))
    throw new ChromeCookieImportPermissionError();
}
export function deriveKey(password: string, iterations: number): Buffer {
  return pbkdf2Sync(password, "saltysalt", iterations, 16, "sha1");
}
export function encryptedVersion(value: Buffer): "v10" | "v11" | null {
  if (value.length < 3) return null;
  const prefix = value.subarray(0, 3);
  return prefix.equals(Buffer.from("v10", "latin1"))
    ? "v10"
    : prefix.equals(Buffer.from("v11", "latin1"))
      ? "v11"
      : null;
}
export function removePadding(value: Buffer): Buffer | null {
  if (value.length === 0) return null;
  const length = value[value.length - 1]!;
  if (length < 1 || length > 16 || length > value.length) return null;
  for (let index = value.length - length; index < value.length; index++)
    if (value[index] !== length) return null;
  return value.subarray(0, value.length - length);
}
export function removeHostHash(value: Buffer, host: string): Buffer {
  if (value.length < 32) return value;
  return value
    .subarray(0, 32)
    .equals(createHash("sha256").update(host, "utf8").digest())
    ? value.subarray(32)
    : value;
}
export function decryptCookie(input: {
  encryptedValue: Buffer;
  keys: { v10: Buffer; v11?: Buffer };
  host: string;
}): string | null {
  const version = encryptedVersion(input.encryptedValue);
  if (version === null) return null;
  const key = input.keys[version];
  if (key == null) return null;
  const ciphertext = input.encryptedValue.subarray(3);
  if (ciphertext.length === 0 || ciphertext.length % 16 !== 0) return null;
  const cipher = createDecipheriv("aes-128-cbc", key, Buffer.alloc(16, 32));
  cipher.setAutoPadding(false);
  const plaintext = removePadding(
    Buffer.concat([cipher.update(ciphertext), cipher.final()]),
  );
  return plaintext === null
    ? null
    : removeHostHash(plaintext, input.host).toString("utf8");
}
const epoch = 11644473600000000n;
export interface CookieAttributes {
  name: string;
  hostKey: string;
  path: string;
  expiresUtc: bigint;
  isPersistent: number;
  isHttpOnly: number;
  isSecure: number;
  sameSite: number;
  priority: number;
}
export function convertCookie(row: CookieAttributes, value: string): Cookie {
  const session = row.isPersistent === 0;
  const sameSite: Record<number, string> = { 0: "None", 1: "Lax", 2: "Strict" };
  const priorities: Record<number, string> = {
    0: "Low",
    1: "Medium",
    2: "High",
  };
  return {
    name: row.name,
    value,
    domain: row.hostKey,
    path: row.path,
    expires: session ? -1 : Number(row.expiresUtc - epoch) / 1e6,
    httpOnly: row.isHttpOnly !== 0,
    secure: row.isSecure !== 0,
    ...(sameSite[row.sameSite] != null
      ? { sameSite: sameSite[row.sameSite] }
      : {}),
    ...(session ? { session: true as const } : {}),
    ...(priorities[row.priority] != null
      ? { priority: priorities[row.priority] }
      : {}),
  };
}
export function parseLocalState(value: unknown): {
  profile?: { info_cache?: Record<string, { name?: string }> };
} {
  if (!isRecord(value))
    throw new ChromeLocalStateParseError("Local State is not a JSON object.");
  if (value.profile === undefined) return {};
  if (!isRecord(value.profile))
    throw new ChromeLocalStateParseError(
      "Local State has a non-object `profile` section.",
    );
  if (value.profile.info_cache === undefined) return { profile: {} };
  if (!isRecord(value.profile.info_cache))
    throw new ChromeLocalStateParseError(
      "Local State has a non-object `profile.info_cache`.",
    );
  const cache: Record<string, { name?: string }> = {};
  for (const [id, item] of Object.entries(value.profile.info_cache))
    cache[id] =
      isRecord(item) && typeof item.name === "string"
        ? { name: item.name }
        : {};
  return { profile: { info_cache: cache } };
}
export function profileIdValid(id: string): boolean {
  return id.length > 0 && id !== "." && id !== ".." && !/[\\/\0]/.test(id);
}
export function containedChild(root: string, child: string): boolean {
  const relative = path.relative(root, child);
  return (
    relative.length > 0 &&
    relative !== ".." &&
    !relative.startsWith(`..${path.sep}`) &&
    !path.isAbsolute(relative)
  );
}
export function resolveProfile(root: string, id: string): string | null {
  if (!profileIdValid(id)) return null;
  const resolved = path.resolve(root),
    profile = path.resolve(resolved, id);
  if (path.dirname(profile) !== resolved) return null;
  try {
    return containedChild(fs.realpathSync(resolved), fs.realpathSync(profile))
      ? profile
      : null;
  } catch {
    return null;
  }
}
export function listProfiles(root: string): ChromeProfile[] {
  const file = path.join(root, "Local State");
  if (!fs.existsSync(file)) return [];
  let value: unknown;
  try {
    value = JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (error) {
    throw new ChromeLocalStateParseError(
      `Local State is not valid JSON: ${String(error)}`,
      { cause: error },
    );
  }
  const cache = parseLocalState(value).profile?.info_cache;
  if (cache == null) return [];
  const profiles: ChromeProfile[] = [];
  for (const [id, item] of Object.entries(cache)) {
    if (resolveProfile(root, id) == null) continue;
    profiles.push({
      id,
      displayName: item.name != null && item.name.length > 0 ? item.name : id,
    });
  }
  return profiles.sort((a, b) =>
    a.id === "Default"
      ? -1
      : b.id === "Default"
        ? 1
        : a.displayName.localeCompare(b.displayName),
  );
}
export function cookieDatabase(profile: string): string | null {
  for (const candidate of [
    path.join(profile, "Network", "Cookies"),
    path.join(profile, "Cookies"),
  ])
    if (fs.existsSync(candidate)) return candidate;
  return null;
}
export function chromeRoot(platform: string, home: string): string | null {
  return platform === "darwin"
    ? path.join(home, "Library", "Application Support", "Google", "Chrome")
    : platform === "linux"
      ? path.join(home, ".config", "google-chrome")
      : null;
}
export function chromeNow(): bigint {
  return BigInt(Date.now()) * 1000n + epoch;
}
export async function copyDatabase(
  source: string,
  destination: string,
): Promise<string> {
  const target = path.join(destination, "Cookies");
  await copyCookieFile({ source, dest: target });
  for (const suffix of ["-wal", "-shm"])
    if (fs.existsSync(source + suffix))
      await copyCookieFile({ source: source + suffix, dest: target + suffix });
  return target;
}
function rowType(value: unknown): string {
  return value === null ? "NULL" : typeof value;
}
function rowText(value: unknown, field: string): string {
  if (typeof value !== "string")
    throw new ChromeCookieRowParseError(
      `cookie row ${field}: expected TEXT, got ${rowType(value)}`,
    );
  return value;
}
function rowInteger(value: unknown, field: string): bigint {
  if (typeof value !== "bigint")
    throw new ChromeCookieRowParseError(
      `cookie row ${field}: expected INTEGER, got ${rowType(value)}`,
    );
  return value;
}
export interface CookieRow {
  host_key: string;
  name: string;
  encrypted_value: Uint8Array | null;
  path: string;
  expires_utc: bigint;
  is_secure: bigint;
  is_httponly: bigint;
  samesite: bigint;
  is_persistent: bigint;
  priority: bigint;
}
export function parseCookieRow(value: unknown): CookieRow {
  if (!isRecord(value))
    throw new ChromeCookieRowParseError(
      `cookie row: expected an object, got ${rowType(value)}`,
    );
  const blob = value.encrypted_value;
  if (blob !== null && !(blob instanceof Uint8Array))
    throw new ChromeCookieRowParseError(
      `cookie row encrypted_value: expected a BLOB, got ${rowType(blob)}`,
    );
  return {
    host_key: rowText(value.host_key, "host_key"),
    name: rowText(value.name, "name"),
    encrypted_value: blob,
    path: rowText(value.path, "path"),
    expires_utc: rowInteger(value.expires_utc, "expires_utc"),
    is_secure: rowInteger(value.is_secure, "is_secure"),
    is_httponly: rowInteger(value.is_httponly, "is_httponly"),
    samesite: rowInteger(value.samesite, "samesite"),
    is_persistent: rowInteger(value.is_persistent, "is_persistent"),
    priority: rowInteger(value.priority, "priority"),
  };
}
export function parseAllowRow(value: unknown): {
  hostKey: string;
  name: string;
  path: string;
} {
  if (!isRecord(value))
    throw new ChromeCookieRowParseError(
      `cookie row: expected an object, got ${rowType(value)}`,
    );
  return {
    hostKey: rowText(value.host_key, "host_key"),
    name: rowText(value.name, "name"),
    path: rowText(value.path, "path"),
  };
}
const activeWhere = " WHERE is_persistent = 0 OR expires_utc > ?";
export async function listProfileAllowItems(
  root: string,
  profile: ChromeProfile,
) {
  const directory = resolveProfile(root, profile.id);
  if (directory == null)
    throw new ChromeCookieImportUnknownProfileError(
      "Chrome cookie import refused a profile id that is not a contained child.",
    );
  const file = cookieDatabase(directory);
  if (file === null) return [];
  const scratch = fs.mkdtempSync(
    path.join(os.tmpdir(), "sand-chrome-cookies-"),
  );
  try {
    const database = new DatabaseSync(await copyDatabase(file, scratch));
    try {
      return database
        .prepare("SELECT host_key, name, path FROM cookies" + activeWhere)
        .all(chromeNow())
        .map((value) => {
          const row = parseAllowRow(value);
          return {
            profileId: profile.id,
            profileDisplayName: profile.displayName,
            domain: row.hostKey,
            name: row.name,
            path: row.path,
          };
        });
    } finally {
      database.close();
    }
  } finally {
    fs.rmSync(scratch, { recursive: true, force: true });
  }
}
export async function collectProfileCookies(input: {
  userDataDir: string;
  profileId: string;
  safeStoragePasswords: { v10: string; v11?: string };
  iterations: number;
}): Promise<{ cookies: Cookie[]; undecryptable: number }> {
  const directory = resolveProfile(input.userDataDir, input.profileId);
  if (directory == null)
    throw new ChromeCookieImportUnknownProfileError(
      "Chrome cookie import refused a profile id that is not a contained child.",
    );
  const file = cookieDatabase(directory);
  if (file === null) return { cookies: [], undecryptable: 0 };
  const passwords = input.safeStoragePasswords,
    keys = {
      v10: deriveKey(passwords.v10, input.iterations),
      ...(passwords.v11 != null
        ? { v11: deriveKey(passwords.v11, input.iterations) }
        : {}),
    };
  const scratch = fs.mkdtempSync(
    path.join(os.tmpdir(), "sand-chrome-cookies-"),
  );
  try {
    const database = new DatabaseSync(await copyDatabase(file, scratch));
    try {
      const statement = database.prepare(
        "SELECT host_key, name, encrypted_value, path, expires_utc, is_secure, is_httponly, samesite, is_persistent, priority FROM cookies" +
          activeWhere,
      );
      statement.setReadBigInts(true);
      const rows = statement.all(chromeNow()).map(parseCookieRow),
        cookies: Cookie[] = [];
      let undecryptable = 0;
      for (const row of rows) {
        if (row.encrypted_value === null) {
          undecryptable++;
          continue;
        }
        let value: string | null;
        try {
          value = decryptCookie({
            encryptedValue: Buffer.from(row.encrypted_value),
            keys,
            host: row.host_key,
          });
        } catch {
          undecryptable++;
          continue;
        }
        if (value === null) {
          undecryptable++;
          continue;
        }
        cookies.push(
          convertCookie(
            {
              hostKey: row.host_key,
              name: row.name,
              path: row.path,
              expiresUtc: row.expires_utc,
              isSecure: Number(row.is_secure),
              isHttpOnly: Number(row.is_httponly),
              sameSite: Number(row.samesite),
              isPersistent: Number(row.is_persistent),
              priority: Number(row.priority),
            },
            value,
          ),
        );
      }
      return { cookies, undecryptable };
    } finally {
      database.close();
    }
  } finally {
    fs.rmSync(scratch, { recursive: true, force: true });
  }
}
export async function storageKeys(
  system: ImportSystem & StorageReaders,
): Promise<{
  passwords: { v10: string; v11?: string };
  iterations: number;
} | null> {
  const supplied = system.safeStoragePassword;
  if (system.platform === "darwin")
    return {
      passwords: {
        v10:
          supplied != null && supplied.length > 0
            ? supplied
            : await system.readMacSafeStoragePassword(),
      },
      iterations: 1003,
    };
  if (system.platform === "linux") {
    const password =
      supplied != null && supplied.length > 0
        ? supplied
        : await system.readLinuxSafeStoragePassword();
    return {
      passwords: {
        v10: "peanuts",
        ...(password != null && password.length > 0 ? { v11: password } : {}),
      },
      iterations: 1,
    };
  }
  return null;
}
export function createChromeImporter(system: ImportSystem & StorageReaders) {
  return {
    listProfiles: () => {
      if (system.platform !== "darwin" && system.platform !== "linux")
        return [];
      const root = chromeRoot(system.platform, system.homeDir);
      return root === null ? [] : listProfiles(root);
    },
    listCookieAllowItems: async () => {
      if (system.platform !== "darwin" && system.platform !== "linux")
        return [];
      const root = chromeRoot(system.platform, system.homeDir);
      if (root === null) return [];
      const items = [];
      for (const profile of listProfiles(root))
        items.push(...(await listProfileAllowItems(root, profile)));
      return items;
    },
    collectProfileCookies: async (id: string) => {
      const root = chromeRoot(system.platform, system.homeDir),
        keys = await storageKeys(system);
      if (root === null || keys === null)
        throw new ChromeCookieImportUnsupportedError(
          "Chrome cookie import is not supported on this operating system yet.",
        );
      if (!listProfiles(root).some((profile) => profile.id === id))
        throw new ChromeCookieImportUnknownProfileError(
          `"${id}" is not an enumerated Chrome profile.`,
        );
      return collectProfileCookies({
        userDataDir: root,
        profileId: id,
        safeStoragePasswords: keys.passwords,
        iterations: keys.iterations,
      });
    },
  };
}
const executeFile = promisify(execFile);
export async function readMacSafeStoragePassword(): Promise<string> {
  const { stdout } = await executeFile(
    "/usr/bin/security",
    ["find-generic-password", "-ws", "Chrome Safe Storage"],
    { encoding: "utf-8", timeout: 120000 },
  );
  return stdout.trim();
}
export function readSecretTool(application: string): Promise<string | null> {
  return new Promise((resolve) =>
    execFile(
      "secret-tool",
      ["lookup", "application", application],
      { encoding: "utf-8", timeout: 5000 },
      (error, stdout) => {
        if (error != null) {
          resolve(null);
          return;
        }
        const value = stdout.trim();
        resolve(value.length > 0 ? value : null);
      },
    ),
  );
}
export async function readLinuxSafeStoragePassword(): Promise<string | null> {
  for (const application of ["chrome", "chromium"]) {
    const value = await readSecretTool(application);
    if (value !== null) return value;
  }
  return null;
}
export function serializeWorkerError(error: unknown): {
  name: string;
  message: string;
  code?: string;
} {
  const code =
    isRecord(error) && typeof error.code === "string" ? error.code : undefined;
  return {
    name: error instanceof Error ? error.name : "Error",
    message: error instanceof Error ? error.message : String(error),
    ...(code != null ? { code } : {}),
  };
}
export interface WorkerInput {
  system: ImportSystem;
  kind: string;
  profileId: string;
}
export interface ParentPort {
  postMessage(value: unknown): void;
  close(): void;
}
export async function runChromeImportWorker(
  port: ParentPort | null,
  input: WorkerInput,
  readers: StorageReaders = {
    readMacSafeStoragePassword,
    readLinuxSafeStoragePassword,
  },
): Promise<void> {
  if (port === null)
    throw new ChromeImportWorkerProtocolError(
      "Chrome import worker requires a parent port.",
    );
  const importer = createChromeImporter({ ...input.system, ...readers });
  let response: unknown;
  try {
    response =
      input.kind === "list-profiles"
        ? { kind: "profiles", profiles: importer.listProfiles() }
        : input.kind === "list-cookie-allow-items"
          ? {
              kind: "cookie-allow-items",
              items: await importer.listCookieAllowItems(),
            }
          : {
              kind: "profile-cookies",
              result: await importer.collectProfileCookies(input.profileId),
            };
  } catch (error) {
    response = { kind: "error", error: serializeWorkerError(error) };
  }
  port.postMessage(response);
  port.close();
}
