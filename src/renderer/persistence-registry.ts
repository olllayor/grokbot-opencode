/** Recovered from index.eager-app-Cj5f8Gby.js class JL. */
import {
  accountPrefix,
  decodeSubKey,
  encodeKeyPart,
  isQuotaFailure,
  parseEnvelope,
  SLICE_PREFIX,
  sliceKey,
  stagingPolicy,
  type EnvelopeResult,
  type SliceDefinition,
  type StagePolicy,
} from "./persistence-keys.js";
export interface PersistencePort {
  read(key: string): Promise<string | null | undefined>;
  write(key: string, value: string): Promise<void>;
  remove(key: string): Promise<void>;
  listKeys(prefix: string): Promise<string[]>;
  stage(policy: StagePolicy): unknown;
}
export interface PersistenceReport {
  op: "load" | "persist" | "writeback";
  slice: string;
  outcome: "ok" | "corrupt" | "io_error" | "quota";
  bytes?: number;
  error?: { code: string; errno?: string };
}
export type OutcomeSink = (outcome: {
  report: PersistenceReport;
  thrown?: unknown;
}) => void;
const reportableSlices = new Set([
  "bot-templates.deleted-shares",
  "client-meta.account-slot",
  "cloud-agents.infos",
  "composer-drafts",
  "host-settings.onboarding",
  "roster.agent-avatars",
  "roster.last-roster",
  "selection.last-agent",
  "send-journal",
  "sidebar.last-sections",
  "transcript.replicas",
  "ui-agent-refs",
  "ui-layout",
  "usage-warning.dismissal",
  "other",
]);
const recognizedErrnos = new Set([
  "ECONNREFUSED",
  "ECONNRESET",
  "ECONNABORTED",
  "ETIMEDOUT",
  "EPIPE",
  "ENETRESET",
  "ENETDOWN",
  "ENETUNREACH",
  "EHOSTUNREACH",
  "EHOSTDOWN",
  "EAI_AGAIN",
  "ENOTFOUND",
  "EADDRINUSE",
  "EACCES",
  "EPERM",
  "ENOENT",
  "ENOSPC",
  "EDQUOT",
  "EROFS",
  "EBUSY",
  "EMFILE",
  "EIO",
]);
function assert(condition: boolean, message: string): asserts condition {
  if (!condition) throw new Error(message);
}
export type LoadResult<T> =
  | { ok: true; value: T }
  | { ok: false; thrown: unknown };
export type EnvelopeWithReceipt =
  | Exclude<EnvelopeResult, { kind: "envelope" }>
  | (Extract<EnvelopeResult, { kind: "envelope" }> & {
      receipt: { classify(outcome: "ok" | "corrupt"): void };
    });
export class PersistenceRegistry {
  definitions = new Map<string, SliceDefinition>();
  mapSlices = new Set<string>();
  constructor(
    public port: PersistencePort,
    public onOutcome?: OutcomeSink,
    public invariant: (condition: boolean, message: () => string) => void = (
      condition,
      message,
    ) => assert(condition, message()),
  ) {}
  reportLoad(
    definition: SliceDefinition,
    outcome: "ok" | "corrupt",
    bytes?: number,
  ) {
    if (this.onOutcome == null) return;
    const common = {
      op: "load" as const,
      slice: reportableSlices.has(definition.slice)
        ? definition.slice
        : "other",
      ...(bytes === undefined ? {} : { bytes }),
    };
    this.onOutcome({
      report:
        outcome === "ok"
          ? { ...common, outcome }
          : { ...common, outcome, error: { code: "SAND-E0700" } },
    });
  }
  reportWriteback(definition: SliceDefinition) {
    this.onOutcome?.({
      report: {
        op: "writeback",
        outcome: "ok",
        slice: reportableSlices.has(definition.slice)
          ? definition.slice
          : "other",
      },
    });
  }
  reportThrown(
    definition: SliceDefinition,
    op: "load" | "persist",
    thrown: unknown,
    bytes?: number,
  ) {
    if (this.onOutcome == null) return;
    const candidate = /\b(E[A-Z_]{2,14})\b/.exec(
      thrown instanceof Error ? thrown.message : "",
    )?.[1];
    const quota = op !== "load" && isQuotaFailure(thrown);
    this.onOutcome({
      report: {
        op,
        outcome: quota ? "quota" : "io_error",
        slice: reportableSlices.has(definition.slice)
          ? definition.slice
          : "other",
        ...(bytes === undefined ? {} : { bytes }),
        error: quota
          ? { code: "SAND-E0702" }
          : {
              code: "SAND-E0701",
              errno:
                candidate != null && recognizedErrnos.has(candidate)
                  ? candidate
                  : "E_OTHER",
            },
      },
      thrown,
    });
  }
  loadReceipt(definition: SliceDefinition, bytes?: number) {
    let classified = false;
    return {
      classify: (outcome: "ok" | "corrupt") => {
        if (!classified) {
          classified = true;
          this.reportLoad(definition, outcome, bytes);
        }
      },
    };
  }
  async load<T>(
    definition: SliceDefinition,
    read: () => Promise<T>,
  ): Promise<LoadResult<T>> {
    try {
      return { ok: true, value: await read() };
    } catch (thrown) {
      this.reportThrown(definition, "load", thrown);
      return { ok: false, thrown };
    }
  }
  async loadEnvelope(
    definition: SliceDefinition,
    key: string,
  ): Promise<LoadResult<EnvelopeWithReceipt>> {
    const loaded = await this.load(definition, () => this.port.read(key));
    if (!loaded.ok) return loaded;
    const raw = loaded.value,
      result = parseEnvelope(raw);
    if (result.kind === "corrupt")
      this.reportLoad(definition, "corrupt", raw?.length ?? 0);
    else if (result.kind === "envelope")
      return {
        ok: true,
        value: {
          ...result,
          receipt: this.loadReceipt(definition, raw?.length ?? 0),
        },
      };
    return { ok: true, value: result };
  }
  async writeKey(definition: SliceDefinition, key: string, value: unknown) {
    const serialized = JSON.stringify({
      schemaVersion: definition.schemaVersion,
      value,
    });
    try {
      await this.port.write(key, serialized);
    } catch (thrown) {
      this.reportThrown(definition, "persist", thrown, serialized.length);
      throw thrown;
    }
  }
  async removeKey(definition: SliceDefinition, key: string) {
    try {
      await this.port.remove(key);
    } catch (thrown) {
      this.reportThrown(definition, "persist", thrown);
      throw thrown;
    }
  }
  claim(definition: SliceDefinition) {
    this.invariant(
      !this.definitions.has(definition.slice),
      () => `persistence: slice "${definition.slice}" already has an owner`,
    );
    this.invariant(
      !definition.slice.startsWith("account."),
      () =>
        `persistence: slice "${definition.slice}" collides with the reserved "account." key namespace`,
    );
    for (const mapSlice of this.mapSlices)
      this.invariant(
        !definition.slice.startsWith(`${mapSlice}.`),
        () =>
          `persistence: slice "${definition.slice}" is inside map slice "${mapSlice}"'s sub-key namespace`,
      );
    this.definitions.set(definition.slice, definition);
  }
  register(definition: SliceDefinition) {
    this.claim(definition);
    return {
      definition,
      read: async (accountSlot?: string | null) => {
        const result = await this.loadEnvelope(
          definition,
          sliceKey(definition, accountSlot, this.invariant),
        );
        if (!result.ok) throw result.thrown;
        return result.value;
      },
      readOrAbsent: async (
        accountSlot?: string | null,
      ): Promise<EnvelopeWithReceipt> => {
        const result = await this.loadEnvelope(
          definition,
          sliceKey(definition, accountSlot, this.invariant),
        );
        return result.ok ? result.value : { kind: "absent" };
      },
      write: async ({
        accountSlot,
        value,
      }: {
        accountSlot?: string | null;
        value: unknown;
      }) =>
        this.writeKey(
          definition,
          sliceKey(definition, accountSlot, this.invariant),
          value,
        ),
      clear: async (accountSlot?: string | null) =>
        this.removeKey(
          definition,
          sliceKey(definition, accountSlot, this.invariant),
        ),
      noteWriteback: () => this.reportWriteback(definition),
    };
  }
  registerMap(definition: SliceDefinition) {
    this.claim(definition);
    this.mapSlices.add(definition.slice);
    const subKeyFor = (
      accountSlot: string | null | undefined,
      subKey: string,
    ) => {
      this.invariant(
        subKey.length > 0,
        () =>
          `persistence: map slice "${definition.slice}" needs a non-empty sub-key`,
      );
      return `${sliceKey(definition, accountSlot, this.invariant)}.${encodeKeyPart(subKey)}`;
    };
    return {
      definition,
      readSub: async ({
        accountSlot,
        subKey,
      }: {
        accountSlot?: string | null;
        subKey: string;
      }) => {
        const key = subKeyFor(accountSlot, subKey),
          loaded = await this.load(definition, () => this.port.read(key));
        if (!loaded.ok) throw loaded.thrown;
        const parsed = parseEnvelope(loaded.value);
        if (parsed.kind === "corrupt")
          this.reportLoad(definition, "corrupt", loaded.value?.length ?? 0);
        return parsed;
      },
      writeSub: async ({
        accountSlot,
        subKey,
        value,
      }: {
        accountSlot?: string | null;
        subKey: string;
        value: unknown;
      }) => this.writeKey(definition, subKeyFor(accountSlot, subKey), value),
      removeSub: async ({
        accountSlot,
        subKey,
      }: {
        accountSlot?: string | null;
        subKey: string;
      }) => this.removeKey(definition, subKeyFor(accountSlot, subKey)),
      listSubKeys: async (accountSlot?: string | null) => {
        const prefix = `${sliceKey(definition, accountSlot, this.invariant)}.`,
          loaded = await this.load(definition, () =>
            this.port.listKeys(prefix),
          );
        if (!loaded.ok) throw loaded.thrown;
        const keys: string[] = [];
        for (const key of loaded.value) {
          const decoded = decodeSubKey(key.slice(prefix.length));
          if (decoded != null) keys.push(decoded);
        }
        return keys;
      },
      readLegacyRoot: async (accountSlot?: string | null) => {
        const loaded = await this.loadEnvelope(
          definition,
          sliceKey(definition, accountSlot, this.invariant),
        );
        if (!loaded.ok) throw loaded.thrown;
        return loaded.value;
      },
      removeLegacyRoot: async (accountSlot?: string | null) =>
        this.removeKey(
          definition,
          sliceKey(definition, accountSlot, this.invariant),
        ),
      noteValueRejected: () => this.reportLoad(definition, "corrupt"),
    };
  }
  stage(accountSlot?: string | null) {
    return this.port.stage(stagingPolicy(accountSlot));
  }
  async retireSegments(
    accountSlot: string | null | undefined,
    accept: (rows: RetiredSegment[]) => Promise<boolean> = async () => true,
  ): Promise<RetiredSegment[]> {
    if (accountSlot == null) return [];
    const segment = "transcript.cloud-agent-peers",
      prefix = `${accountPrefix(accountSlot)}${segment}.`;
    const keys = await this.port.listKeys(prefix);
    const candidates = (
      await Promise.all(
        keys.map(async (key) => {
          const definition: SliceDefinition = {
            slice: segment,
            schemaVersion: 1,
            scope: "client-persisted",
            accountSensitive: true,
          };
          const subKey = decodeSubKey(key.slice(prefix.length));
          let raw: string | null | undefined;
          try {
            raw = await this.port.read(key);
          } catch (thrown) {
            this.reportThrown(definition, "load", thrown);
            return null;
          }
          const parsed = parseEnvelope(raw);
          const row =
            subKey == null || parsed.kind !== "envelope"
              ? null
              : { segment, subKey, value: parsed.envelope.value };
          return { key, definition, row };
        }),
      )
    ).filter((candidate) => candidate != null);
    const rows = candidates
      .map((candidate) => candidate.row)
      .filter((row) => row != null);
    let approved: boolean;
    try {
      approved = await accept(rows);
    } catch (thrown) {
      this.reportThrown(
        {
          slice: segment,
          schemaVersion: 1,
          scope: "client-persisted",
          accountSensitive: true,
        },
        "persist",
        thrown,
      );
      approved = false;
    }
    if (approved)
      await Promise.all(
        candidates.map(({ key, definition }) =>
          this.port.remove(key).catch((thrown) => {
            this.reportThrown(definition, "persist", thrown);
          }),
        ),
      );
    return rows;
  }
  async invalidateAccountSlot(accountSlot: string) {
    const keys = await this.port.listKeys(accountPrefix(accountSlot));
    await Promise.all(keys.map((key) => this.port.remove(key)));
  }
  async invalidateAllAccountSlots() {
    const keys = await this.port.listKeys(`${SLICE_PREFIX}account.`);
    await Promise.all(keys.map((key) => this.port.remove(key)));
  }
}
export interface RetiredSegment {
  segment: string;
  subKey: string;
  value: unknown;
}
