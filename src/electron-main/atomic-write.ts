import fs from 'node:fs';
import { randomInt } from 'node:crypto';
import { basename, dirname, isAbsolute, join, relative, resolve, sep } from 'node:path';
import { promisify } from 'node:util';
import { directErrorCode } from './errors.js';
export type NoFollowReason = 'target-link' | 'parent-link' | 'not-a-file';
const reasons: Record<NoFollowReason, string> = { 'target-link': 'a symbolic link at the target path', 'parent-link': 'a symbolic link at the parent path', 'not-a-file': 'a non-regular file at the target path' };
export class NoFollowRefusedError extends Error {
  constructor(public readonly reason: NoFollowReason, public readonly path: string) {
    super(`refused ${reasons[reason]} ${path}`); this.name = 'NoFollowRefusedError';
  }
}
const { O_RDONLY, O_WRONLY, O_CREAT, O_EXCL, O_DIRECTORY = 0, O_NOFOLLOW = 0 } = fs.constants;
const queues = new Map<string, (() => void)[]>();
export interface AtomicWriteOptions { mode?: number; noFollow?: { root: string } }
interface ParentHandle { entry(name: string): string; close(): void; name: string; shown: string }
interface WriteTarget { temp: string; target: string; mode?: number; checkTarget?: () => void }
function acquire(path: string): { ready: Promise<void>; leave(): void } {
  const queue = queues.get(path) ?? []; queues.set(path, queue);
  const ready = new Promise<void>(done => queue.push(done));
  if (queue.length === 1) queue[0]?.();
  return { ready, leave() { queue.shift(); if (!queue.length) queues.delete(path); else queue[0]?.(); } };
}
export function temporaryFileTarget(name: string): string | undefined { return /^(.+)\.\d{1,10}$/.exec(name)?.[1]; }
const temporaryPath = (path: string): string => `${path}.${randomInt(2 ** 32)}`;
function mkdirOne(path: string): void {
  try { fs.mkdirSync(path); } catch (error) { if (directErrorCode(error) !== 'EEXIST') throw error; }
}
function assertTarget(handle: ParentHandle): void {
  if (fs.lstatSync(handle.entry(handle.name), { throwIfNoEntry: false })?.isSymbolicLink() === true) throw new NoFollowRefusedError('target-link', handle.shown);
}
function openParent(path: string, root: string): ParentHandle {
  const resolvedRoot = resolve(root), target = resolve(path), rel = relative(resolvedRoot, target);
  if (rel === '' || rel === '..' || rel.startsWith(`..${sep}`) || isAbsolute(rel)) throw new RangeError(`${target} is not below the no-follow root ${resolvedRoot}`);
  fs.mkdirSync(resolvedRoot, { recursive: true });
  const parts = dirname(rel) === '.' ? [] : dirname(rel).split(sep);
  let entry: (name: string) => string, close: () => void;
  if (process.platform === 'linux') {
    let fd = fs.openSync(resolvedRoot, O_RDONLY | O_DIRECTORY), shown = resolvedRoot;
    try {
      for (const part of parts) {
        shown = join(shown, part);
        const path = `/proc/self/fd/${fd}/${part}`;
        mkdirOne(path);
        let next: number;
        try { next = fs.openSync(path, O_RDONLY | O_DIRECTORY | O_NOFOLLOW); }
        catch (error) {
          const code = directErrorCode(error), stat = fs.lstatSync(path, { throwIfNoEntry: false });
          if (code === 'ELOOP' || (code === 'ENOTDIR' && !(stat && !stat.isSymbolicLink() && !stat.isDirectory()))) throw new NoFollowRefusedError('parent-link', shown);
          throw error;
        }
        fs.closeSync(fd); fd = next;
      }
    } catch (error) { fs.closeSync(fd); throw error; }
    const held = fd; entry = name => `/proc/self/fd/${held}/${name}`; close = () => fs.closeSync(held);
  } else {
    const parent = parts.reduce((current, part) => {
      const path = join(current, part); mkdirOne(path);
      if (fs.lstatSync(path, { throwIfNoEntry: false })?.isSymbolicLink() === true) throw new NoFollowRefusedError('parent-link', path);
      return path;
    }, resolvedRoot);
    entry = name => join(parent, name); close = () => {};
  }
  return { entry, close, name: basename(rel), shown: target };
}
function ignoreUnsupportedChmod(error: unknown): void {
  const code = directErrorCode(error);
  if (!(code === 'ENOSYS' || ((process.getuid === undefined || process.getuid() !== 0) && (code === 'EINVAL' || code === 'EPERM')))) throw error;
}
async function writeTarget({ temp, target, mode, checkTarget }: WriteTarget, data: string | Uint8Array): Promise<void> {
  const fd = await promisify(fs.open)(temp, O_WRONLY | O_CREAT | O_EXCL | O_NOFOLLOW, mode ?? 0o666);
  try {
    try {
      await promisify(fs.writeFile)(fd, data);
      if (mode !== undefined) await promisify(fs.fchmod)(fd, mode).catch(ignoreUnsupportedChmod);
      await promisify(fs.fsync)(fd);
    } finally { await promisify(fs.close)(fd); }
    checkTarget?.(); await promisify(fs.rename)(temp, target);
  } catch (error) { await promisify(fs.rm)(temp, { force: true }); throw error; }
}
export async function atomicWrite(path: string, data: string | Uint8Array, options: AtomicWriteOptions = {}): Promise<void> {
  if (options.noFollow === undefined) fs.mkdirSync(dirname(path), { recursive: true });
  const lock = acquire(resolve(path)); await lock.ready;
  try {
    if (options.noFollow === undefined) {
      let target: string;
      try { target = await promisify(fs.realpath)(path); } catch (error) { if (directErrorCode(error) !== 'ENOENT') throw error; target = path; }
      let mode = options.mode;
      if (mode === undefined) {
        try { mode = (await promisify(fs.stat)(target)).mode; } catch (error) { if (directErrorCode(error) !== 'ENOENT') throw error; }
      }
      await writeTarget({ target, temp: temporaryPath(target), mode }, data);
    } else {
      const handle = openParent(path, options.noFollow.root);
      try {
        assertTarget(handle); const target = handle.entry(handle.name);
        await writeTarget({ target, temp: temporaryPath(target), mode: options.mode ?? 0o600, checkTarget: () => assertTarget(handle) }, data);
      } finally { handle.close(); }
    }
  } finally { lock.leave(); }
}
