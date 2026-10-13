/** Recovered from eager-app xFe, invoked by startup cle. */
export interface Clock {
  schedule(delayMs: number, task: () => void): { dispose(): void };
}
export interface DeferredStartupOptions {
  clock: Clock;
  settleMs: number;
  rootNeverPopulatedFallbackMs: number;
  tasks: readonly (() => void)[];
}
export function deferStartupTasks({
  clock,
  settleMs,
  rootNeverPopulatedFallbackMs,
  tasks,
}: DeferredStartupOptions): {
  released: Promise<void>;
  noteRootPopulated(): void;
} {
  let hasReleased = false;
  let resolveReleased: () => void = () => {};
  const released = new Promise<void>((resolve) => {
    resolveReleased = resolve;
  });
  const release = () => {
    if (!hasReleased) {
      hasReleased = true;
      for (const task of tasks) task();
      resolveReleased();
    }
  };
  const fallback = clock.schedule(rootNeverPopulatedFallbackMs, release);
  return {
    released,
    noteRootPopulated: () => {
      if (!hasReleased) {
        fallback.dispose();
        clock.schedule(settleMs, release);
      }
    },
  };
}
