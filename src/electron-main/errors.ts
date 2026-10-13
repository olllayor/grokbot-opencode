export function findChainedErrorCode(error: unknown, pattern: RegExp): string | undefined {
  const seen = new Set<object>();
  let current = error;
  while (current !== null && typeof current === 'object' && !seen.has(current)) {
    seen.add(current);
    const item = current as { code?: unknown; cause?: unknown };
    if (typeof item.code === 'string' && pattern.test(item.code)) return item.code;
    current = item.cause;
  }
  return undefined;
}
export const systemErrorCode = (error: unknown): string | undefined => findChainedErrorCode(error, /^E[A-Z_]+$/);
export function directErrorCode(error: unknown): string | undefined {
  return error instanceof Error && 'code' in error && typeof error.code === 'string' ? error.code : undefined;
}
export type Attempt<T> = { ok: true; value: T } | { ok: false; error: unknown };
export function attempt<T>(operation: () => T): Attempt<T> {
  try { return { ok: true, value: operation() }; } catch (error) { return { ok: false, error }; }
}
export function errorClass(error: unknown): string {
  return error instanceof Error ? error.name.length > 0 ? error.name : 'Error' : typeof error;
}
export class SandInvariantViolation extends Error {
  constructor() {
    super('Invariant violation (message stripped in packaged builds; the stack identifies the site)');
    this.name = 'SandInvariantViolation';
  }
}
export function invariant(value: unknown, _message: string): asserts value {
  if (value) return;
  const error = new SandInvariantViolation();
  Error.captureStackTrace?.(error, invariant);
  throw error;
}
