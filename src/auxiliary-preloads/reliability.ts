export interface Disposable {
  dispose(): void;
}
export interface Clock {
  now(): number;
  monotonicNow(): number;
  schedule(
    delayMs: number,
    callback: () => void,
    options?: { keepEventLoopAlive?: boolean },
  ): Disposable;
}
function nonnegative(value: number, field: string): void {
  if (!Number.isFinite(value) || value < 0)
    throw new RangeError(`${field} must be a finite non-negative number`);
}
function policyName(name: string): void {
  if (!/^[a-z0-9]+([-.][a-z0-9]+)*$/.test(name))
    throw new TypeError(
      `name must be lowercase segments joined by "-" or ".", got ${JSON.stringify(name)}`,
    );
}
export const clock: Clock = {
  now: () => Date.now(),
  monotonicNow: () => performance.now(),
  schedule(delayMs, callback, options) {
    nonnegative(delayMs, "delayMs");
    let active = true;
    const handle = globalThis.setTimeout(() => {
      if (active) {
        active = false;
        callback();
      }
    }, delayMs);
    if (
      options?.keepEventLoopAlive !== true &&
      typeof handle === "object" &&
      "unref" in handle
    )
      handle.unref();
    return {
      dispose() {
        if (active) {
          active = false;
          globalThis.clearTimeout(handle);
        }
      },
    };
  },
};
export class DeadlineExceededError extends Error {
  readonly code = "deadline_exceeded";
  constructor(readonly policyName: string) {
    super(`Deadline exceeded for ${policyName}`);
    this.name = "DeadlineExceededError";
  }
}
function abortReason(signal: AbortSignal, name: string): unknown {
  if (signal.reason != null) return signal.reason;
  const error = new Error(`Operation aborted for ${name}`);
  error.name = "AbortError";
  return error;
}
export function deadline(options: {
  name: string;
  timeoutMs: number;
  clock?: Clock;
}) {
  policyName(options.name);
  nonnegative(options.timeoutMs, "timeoutMs");
  const time = options.clock ?? clock;
  return {
    name: options.name,
    async run<T>(
      operation: (signal: AbortSignal) => PromiseLike<T>,
      signal?: AbortSignal,
    ): Promise<T> {
      if (signal?.aborted) throw abortReason(signal, options.name);
      const controller = new AbortController();
      let rejectDeadline: (reason: unknown) => void = () => {};
      const expired = new Promise<never>((_, reject) => {
        rejectDeadline = reject;
      });
      let rejectAbort: (reason: unknown) => void = () => {};
      const aborted = new Promise<never>((_, reject) => {
        rejectAbort = reject;
      });
      const onAbort = () => {
        const reason = abortReason(signal!, options.name);
        rejectAbort(reason);
        controller.abort(reason);
      };
      signal?.addEventListener("abort", onAbort, { once: true });
      const timer = time.schedule(options.timeoutMs, () => {
        const reason = new DeadlineExceededError(options.name);
        rejectDeadline(reason);
        controller.abort(reason);
      });
      try {
        return await Promise.race([
          operation(controller.signal),
          expired,
          aborted,
        ]);
      } finally {
        timer.dispose();
        signal?.removeEventListener("abort", onAbort);
      }
    },
  };
}
export interface LoopStop {
  policyName: string;
  reason: "disposed" | "tick-failed";
  cause?: unknown;
}
export function interval(options: {
  name: string;
  intervalMs: number;
  clock?: Clock;
  leading?: boolean;
  report?: (report: {
    policyName: string;
    reason: string;
    errorClass: string;
  }) => void;
}) {
  policyName(options.name);
  nonnegative(options.intervalMs, "intervalMs");
  if (options.intervalMs === 0)
    throw new RangeError(`${options.name}: intervalMs must be greater than 0`);
  const time = options.clock ?? clock;
  return {
    name: options.name,
    start(
      tick: () => PromiseLike<unknown>,
      signal?: AbortSignal,
    ): Disposable & { stopped: Promise<LoopStop> } {
      let disposed = false;
      let timer: Disposable | null = null;
      let resolveStop: (stop: LoopStop) => void = () => {};
      const stopped = new Promise<LoopStop>((resolve) => {
        resolveStop = resolve;
      });
      const stop = (result: LoopStop) => {
        if (disposed) return false;
        disposed = true;
        timer?.dispose();
        signal?.removeEventListener("abort", dispose);
        resolveStop(result);
        return true;
      };
      const dispose = () => {
        stop({ policyName: options.name, reason: "disposed" });
      };
      const failed = (cause: unknown) => {
        if (stop({ policyName: options.name, reason: "tick-failed", cause }))
          options.report?.({
            policyName: options.name,
            reason: "tick-failed",
            errorClass: cause instanceof Error ? cause.name : typeof cause,
          });
      };
      const arm = () => {
        if (!disposed) timer = time.schedule(options.intervalMs, run);
      };
      const run = () => {
        timer = null;
        if (disposed) return;
        let result: PromiseLike<unknown>;
        try {
          result = tick();
        } catch (cause) {
          failed(cause);
          return;
        }
        result.then(arm, failed);
      };
      if (signal?.aborted) dispose();
      else {
        signal?.addEventListener("abort", dispose, { once: true });
        if (options.leading ?? true) run();
        else arm();
      }
      return { dispose, stopped };
    },
  };
}
