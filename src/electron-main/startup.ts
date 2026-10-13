import { invariant } from './errors.js';
import type { BundleResult, CodeCache } from './code-cache.js';
interface CoreExports { remainderDue: Promise<unknown>; noteStartupFailed(error: unknown): unknown }
interface AppExports { reportMainCodeCache(cache: CodeCache): unknown }
export function hasCoreExports(value: unknown): value is CoreExports {
  return typeof value === 'object' && value !== null && 'remainderDue' in value && value.remainderDue instanceof Promise && 'noteStartupFailed' in value && typeof value.noteStartupFailed === 'function';
}
export function hasAppExports(value: unknown): value is AppExports {
  return typeof value === 'object' && value !== null && 'reportMainCodeCache' in value && typeof value.reportMainCodeCache === 'function';
}
export function startMain({ runBundle }: { runBundle(name: 'main-core' | 'main-app'): BundleResult }): Promise<unknown> {
  const core = runBundle('main-core');
  invariant(hasCoreExports(core.exports), 'main-core.cjs does not export remainderDue and noteStartupFailed.');
  const { remainderDue, noteStartupFailed } = core.exports;
  return remainderDue.then(() => {
    const app = runBundle('main-app');
    invariant(hasAppExports(app.exports), 'main-app.cjs does not export reportMainCodeCache.');
    app.exports.reportMainCodeCache(core.codeCache); app.exports.reportMainCodeCache(app.codeCache);
  }).catch(error => noteStartupFailed(error));
}
