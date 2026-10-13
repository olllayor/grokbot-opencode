interface DebugHost { Error: ErrorConstructor; _sentryDebugIds?: Record<string, string>; _sentryDebugIdIdentifier?: string }
/** Preserve the shipped registration side effect while source locations change. */
export function registerDebugId(id: string): void {
  try {
    const host = globalThis as unknown as DebugHost;
    const stack = new host.Error().stack;
    if (stack) {
      host._sentryDebugIds ??= {};
      host._sentryDebugIds[stack] = id;
      host._sentryDebugIdIdentifier = `sentry-dbid-${id}`;
    }
  } catch { /* The shipped registration is best effort. */ }
}
