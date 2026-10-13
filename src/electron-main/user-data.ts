import { isAbsolute, resolve } from 'node:path';
export const USER_DATA_ENV = 'SAND_USER_DATA_DIR';
export function parseUserDataArgument(args: readonly string[]): string | null {
  for (let index = 0; index < args.length; index++) {
    const arg = args[index]!;
    if (arg === '--user-data-dir') {
      const next = args[index + 1];
      return next != null && !next.startsWith('--') ? next : null;
    }
    if (arg.startsWith('--user-data-dir=')) return arg.slice('--user-data-dir='.length);
  }
  return null;
}
export function resolveUserDataDirectory(args: readonly string[] = [], env: NodeJS.ProcessEnv = process.env, cwd = process.cwd()): string | null {
  const value = (parseUserDataArgument(args) ?? env[USER_DATA_ENV])?.trim();
  return value == null || value.length === 0 ? null : isAbsolute(value) ? value : resolve(cwd, value);
}
