/** Recovered from eager-app Rv, Uh, USe, GSe. Factory adapters retain shipped stores/queue. */
import type { PersistenceRegistry } from "./persistence-registry.js";
export interface VoiceSettings {
  inputDeviceId: string | null;
}
export interface SnapshotStore<T> {
  get(): T;
  set(value: T): void;
  subscribe(listener: () => void): () => void;
}
export interface PersistenceQueue {
  post(task: () => Promise<void>): unknown;
  settled(): Promise<unknown>;
}
export const VOICE_SETTINGS_DEFINITION = {
  slice: "voice-settings",
  schemaVersion: 1,
  scope: "client-persisted",
  accountSensitive: false,
};
export const DEFAULT_VOICE_SETTINGS: VoiceSettings = { inputDeviceId: null };
export function parseVoiceSettings(value: unknown): VoiceSettings | null {
  if (typeof value !== "object" || value == null || !("inputDeviceId" in value))
    return null;
  const id = value.inputDeviceId;
  return id === null
    ? DEFAULT_VOICE_SETTINGS
    : typeof id !== "string" || id.length === 0
      ? null
      : { inputDeviceId: id };
}
export function createVoiceSettings({
  registry,
  createSnapshots,
  createQueue,
}: {
  registry: Pick<PersistenceRegistry, "register">;
  createSnapshots: (seed: VoiceSettings) => SnapshotStore<VoiceSettings>;
  createQueue: () => PersistenceQueue;
}) {
  const slice = registry.register(VOICE_SETTINGS_DEFINITION),
    snapshots = createSnapshots(DEFAULT_VOICE_SETTINGS);
  let isDisposed = false;
  const queue = createQueue();
  const reset = () => {
    snapshots.set(DEFAULT_VOICE_SETTINGS);
  };
  return {
    snapshots,
    setInputDeviceId: (id: string | null) => {
      if (isDisposed || snapshots.get().inputDeviceId === id) return;
      const value = { inputDeviceId: id };
      snapshots.set(value);
      queue.post(() => slice.write({ accountSlot: null, value }));
    },
    restore: async () => {
      if (isDisposed || (await queue.settled(), isDisposed)) return;
      const loaded = await slice.read(null);
      if (isDisposed) return;
      if (loaded.kind === "corrupt") {
        if ((await slice.clear(null), isDisposed)) return;
        reset();
        return;
      }
      if (loaded.kind === "absent") {
        reset();
        return;
      }
      if (
        loaded.envelope.schemaVersion !==
        VOICE_SETTINGS_DEFINITION.schemaVersion
      ) {
        reset();
        return;
      }
      const parsed = parseVoiceSettings(loaded.envelope.value);
      if (parsed == null) {
        if (
          (loaded.receipt.classify("corrupt"),
          await slice.clear(null),
          isDisposed)
        )
          return;
        reset();
        return;
      }
      loaded.receipt.classify("ok");
      snapshots.set(parsed);
    },
    dispose: () => {
      isDisposed = true;
    },
  };
}
