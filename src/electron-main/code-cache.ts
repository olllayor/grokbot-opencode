import { readFileSync } from 'node:fs';
import { readdir, stat, rm } from 'node:fs/promises';
import Module, { createRequire } from 'node:module';
import path from 'node:path';
import vm from 'node:vm';
import { atomicWrite, temporaryFileTarget } from './atomic-write.js';
import { attempt, errorClass, invariant, systemErrorCode, type Attempt } from './errors.js';
export type CacheReadStatus = { kind: 'hit' | 'rejected' | 'absent' } | { kind: 'unreadable'; errorClass: string };
export interface CodeCache { read: CacheReadStatus; persist(cacheDir: string): Promise<number> }
export interface BundleResult { exports: unknown; codeCache: CodeCache }
export const codeCacheDirectory = (userData: string): string => path.join(userData, 'v8-code-cache');
export function cacheFilePath({ cacheDir, bundleName, buildId }: { cacheDir: string; bundleName: string; buildId: string }): string {
  return path.format({ dir: cacheDir, name: `${bundleName}-${buildId}`, ext: '.v8' });
}
export function cacheReadStatus(read: Attempt<unknown>, rejected: boolean | undefined): CacheReadStatus {
  if (read.ok) return rejected === true ? { kind: 'rejected' } : { kind: 'hit' };
  const code = systemErrorCode(read.error);
  return code === 'ENOENT' ? { kind: 'absent' } : { kind: 'unreadable', errorClass: code ?? errorClass(read.error) };
}
export const wrapCommonJS = (source: string): string => `(function (exports, require, module, __filename, __dirname) { ${source}\n});`;
type CommonJSWrapper = (this: unknown, exports: unknown, require: NodeJS.Require, module: Module, filename: string, dirname: string) => void;
export function loadCachedBundle({ bundlePath, cacheDir, buildId }: { bundlePath: string; cacheDir: string; buildId: string }): BundleResult {
  const bundleName = path.basename(bundlePath, path.extname(bundlePath));
  const read = attempt(() => readFileSync(cacheFilePath({ cacheDir, bundleName, buildId })));
  const script = new vm.Script(wrapCommonJS(readFileSync(bundlePath, 'utf8')), {
    filename: bundlePath, cachedData: read.ok ? read.value : undefined,
    importModuleDynamically: vm.constants.USE_MAIN_CONTEXT_DEFAULT_LOADER,
  });
  const module = new Module(bundlePath); module.filename = bundlePath;
  const wrapper: unknown = script.runInThisContext();
  invariant(typeof wrapper === 'function', 'The CommonJS wrapper did not evaluate to a function.');
  (wrapper as CommonJSWrapper).call(module.exports, module.exports, createRequire(bundlePath), module, bundlePath, path.dirname(bundlePath));
  module.loaded = true;
  return { exports: module.exports, codeCache: {
    read: cacheReadStatus(read, script.cachedDataRejected),
    async persist(directory) {
      const data = script.createCachedData();
      const file = cacheFilePath({ cacheDir: directory, bundleName, buildId });
      await atomicWrite(file, data); await pruneCodeCache(directory, bundleName, path.basename(file));
      return data.byteLength;
    },
  } };
}
export async function pruneCodeCache(cacheDir: string, bundleName: string, currentFile: string): Promise<void> {
  const now = Date.now(), names = await readdir(cacheDir);
  const isCache = (name: string): boolean => name.startsWith(`${bundleName}-`) && /\.v8$/.test(name);
  const entries = (predicate: (name: string) => boolean, fallback: number) => Promise.all(names.filter(name => name !== currentFile && predicate(name)).map(async name => ({ name, mtimeMs: await stat(path.join(cacheDir, name)).then(value => value.mtimeMs, () => fallback) })));
  const oldCaches = (await entries(isCache, 0)).sort((a, b) => b.mtimeMs - a.mtimeMs).slice(2).map(value => value.name);
  const staleTemps = (await entries(name => { const target = temporaryFileTarget(name); return target !== undefined && isCache(target); }, now)).filter(value => now - value.mtimeMs > 3600 * 1000).map(value => value.name);
  await Promise.all([...oldCaches, ...staleTemps].map(name => rm(path.join(cacheDir, name), { force: true })));
}
