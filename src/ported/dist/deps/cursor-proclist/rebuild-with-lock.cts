declare var __dirname: any;
declare var clearInterval: any;
declare var console: any;
declare var process: any;
declare var require: any;
declare var setInterval: any;
declare var setTimeout: any;
// Copyright Anysphere Inc.

/**
 * Serializes `node-gyp rebuild` runs for this module across concurrent
 * installers.
 *
 * cursor-proclist is a `file:` dependency of both vscode/package.json and
 * vscode/remote/package.json, so npm symlinks BOTH node_modules entries to
 * this one physical directory. vscode's postinstall (build/npm/postinstall.js)
 * runs the per-directory npm installs AND build/npm/postinstall_anysphere.js
 * in parallel, which used to let two `node-gyp rebuild` invocations race in
 * this directory. `rebuild` starts with a `clean` (rm -rf build), so each run
 * deletes the other's in-progress configure/build state — observed as
 * "gyp ERR! ... `gyp` failed with exit code: null", missing .deps files, or
 * ENOENT on build/node_gyp_bins, depending on where the loser was killed.
 *
 * The module is N-API (node-addon-api), so whichever rebuild lands last (Node
 * or Electron headers) loads fine in both runtimes for the node ABI; the only
 * problem this lock solves is the concurrent overlap. Last-wins is not true
 * for libc — the Alpine REH still needs a later musl rebuild.
 *
 * The lock mirrors tools/anycli/src/lib/fileLock.ts in dependency-free CJS:
 * an atomically published lock file whose content (pids + timestamp) is the
 * ownership token. The holder records both its own pid and the spawned
 * node-gyp child's pid and refreshes the file's mtime while the build runs;
 * waiters steal only when every recorded pid is dead (the mtime backstop
 * applies only when no pid is parseable), and both steal and release delete
 * the file only while it still contains the exact judged content — so a live
 * holder (or its orphaned build, if the wrapper is SIGKILL'd) is never stolen
 * from, and a stolen-then-reacquired lock is never deleted by the previous
 * holder's exit.
 *
 * Usage:
 *   node rebuild-with-lock.js                  -> resolves a node-gyp JS
 *                                                 entrypoint (see
 *                                                 resolveNodeGypJs) and runs
 *                                                 `node <entry> rebuild`
 *                                                 (npm install-script path)
 *   node rebuild-with-lock.js <node-gyp.js>    -> `node <node-gyp.js> rebuild`
 *                                                 (postinstall_anysphere path)
 */

'use strict';

const cp: any = (require as any)('child_process');
const fs: any = (require as any)('fs');
const path: any = (require as any)('path');
const LOCK_FILE: any = ((path as any).join as any)(__dirname, '.gyp-build.lock');
// Backstop for a holder that died without releasing AND whose pid can no
// longer be judged (unparseable content, pid recycled by another user's
// process). The holder refreshes mtime every REFRESH_INTERVAL_MS, so a live
// build never trips this no matter how long it takes.
const STALE_LOCK_MS: any = ((10 as any) * (60 as any) as any) * (1000 as any);
const REFRESH_INTERVAL_MS: any = ((Math as any).floor as any)((STALE_LOCK_MS as any) / (4 as any));
const POLL_INTERVAL_MS: number = 500;
// Give up eventually if a live holder never finishes (hung build).
const MAX_WAIT_MS: any = ((30 as any) * (60 as any) as any) * (1000 as any);
function isPidRunning(this: any, pid: any): any {
  try {
    ((process as any).kill as any)(pid, 0);
    return true;
  } catch (err: any) {
    // EPERM: the pid exists but belongs to another user.
    return ((err as any).code as any) === ('EPERM' as any);
  }
}

/**
 * Atomically publish the lock file with its content already in place (tmp
 * file + link, so a waiter never reads an empty half-written lock and wrongly
 * judges it stale). Returns true when the lock was acquired.
 */
function tryAcquire(this: any, content: any): any {
  const tmpPath: any = `${LOCK_FILE}.${(process as any).pid}.${((((((Math as any).random as any)() as any).toString as any)(36) as any).slice as any)(2)}.tmp`;
  ((fs as any).writeFileSync as any)(tmpPath, content);
  try {
    ((fs as any).linkSync as any)(tmpPath, LOCK_FILE);
    return true;
  } catch (err: any) {
    if (((err as any).code as any) !== ('EEXIST' as any)) {
      throw err;
    }
    return false;
  } finally {
    try {
      ((fs as any).unlinkSync as any)(tmpPath);
    } catch {
      // best effort
    }
  }
}

/**
 * All pids recorded in a lock file: line 1 is the wrapper pid, and a
 * `child:<pid>` line (appended once node-gyp is spawned) is the detached
 * build process-group leader.
 */
function parseLockPids(this: any, raw: any): any {
  const pids: any = [];
  const lines: any = ((raw as any).split as any)('\n');
  const wrapperPid: any = ((Number as any).parseInt as any)((lines as any)[0] ?? '', 10);
  if (((Number as any).isFinite as any)(wrapperPid) && (wrapperPid as any) > (0 as any)) {
    ((pids as any).push as any)(wrapperPid);
  }
  for (const line of lines) {
    const match: any = ((/^child:(\d+)$/ as any).exec as any)(line);
    if (match) {
      const childPid: any = ((Number as any).parseInt as any)((match as any)[1], 10);
      if (((Number as any).isFinite as any)(childPid) && (childPid as any) > (0 as any)) {
        ((pids as any).push as any)(childPid);
      }
    }
  }
  return pids;
}

/**
 * When the lock is stale (every recorded pid dead, or mtime unrefreshed past
 * the stale window), return its exact content for a guarded reclaim;
 * otherwise return undefined. Both the wrapper pid AND the recorded child pid
 * must be dead: the child is a detached process-group leader, so a SIGKILL'd
 * or crashed wrapper leaves it building — stealing on the wrapper pid alone
 * would restart the exact overlapping rebuild this lock prevents. Never
 * judges a live holder stale on mtime alone unless no pid is parseable.
 */
function readStaleLockContent(this: any): any {
  try {
    const mtimeMs: any = (((fs as any).statSync as any)(LOCK_FILE) as any).mtimeMs;
    const raw: any = ((fs as any).readFileSync as any)(LOCK_FILE, 'utf8');
    const pids: any = (parseLockPids as any)(raw);
    if (((pids as any).length as any) > (0 as any)) {
      return ((pids as any).some as any)(isPidRunning) ? undefined : raw;
    }
    // No parseable pid: fall back to the mtime backstop only.
    return ((((Date as any).now as any)() as any) - (mtimeMs as any) as any) > (STALE_LOCK_MS as any) ? raw : undefined;
  } catch {
    // ENOENT (already released) or transient read error: nothing to steal.
    return undefined;
  }
}

/**
 * Delete the lock only while it still holds `expectedContent` (our ownership
 * token, or the exact stale content a reclaim judged). Compare-then-unlink
 * has a tiny TOCTOU window, but content is unique per holder (pid +
 * timestamp), which shrinks "any waiter deletes any holder's lock" to a
 * sub-millisecond race — same trade-off as tools/anycli's fileLock.
 */
function unlinkIfContentMatches(this: any, expectedContent: any): any {
  try {
    if ((((fs as any).readFileSync as any)(LOCK_FILE, 'utf8') as any) === (expectedContent as any)) {
      ((fs as any).unlinkSync as any)(LOCK_FILE);
    }
  } catch {
    // ENOENT: already released/reclaimed.
  }
}
function sleep(this: any, ms: any): any {
  return new (Promise as any)((resolve: any): any => (setTimeout as any)(resolve, ms));
}

/**
 * Acquire the lock; resolves to `{ release, recordChildPid }`.
 * `recordChildPid` appends a `child:<pid>` line to the held lock so waiters'
 * staleness checks also see the detached build process (see
 * readStaleLockContent).
 */
async function acquireLock(this: any): Promise<any> {
  let content: any = `${(process as any).pid}\n${((new (Date as any)() as any).toISOString as any)()}\ncursor-proclist rebuild\n`;
  const start: any = ((Date as any).now as any)();
  let waiting: any = false;
  while (!(tryAcquire as any)(content)) {
    const staleContent: any = (readStaleLockContent as any)();
    if ((staleContent as any) !== (undefined as any)) {
      ((console as any).log as any)('[cursor-proclist] removing stale build lock (holder is gone)');
      (unlinkIfContentMatches as any)(staleContent);
      continue;
    }
    if (((((Date as any).now as any)() as any) - (start as any) as any) > (MAX_WAIT_MS as any)) {
      throw new (Error as any)(`timed out waiting for build lock at ${LOCK_FILE}`);
    }
    if (!waiting) {
      waiting = true;
      ((console as any).log as any)('[cursor-proclist] another node-gyp rebuild is in progress, waiting for it to finish...');
    }
    await (sleep as any)(POLL_INTERVAL_MS);
  }

  // Keep the mtime fresh while the build runs so the stale backstop never
  // fires against a live holder; refresh only while the content is still
  // ours (never keep alive a lock someone force-reclaimed and reacquired).
  const refreshTimer: any = (setInterval as any)((): any => {
    try {
      if ((((fs as any).readFileSync as any)(LOCK_FILE, 'utf8') as any) === (content as any)) {
        const now: any = new (Date as any)();
        ((fs as any).utimesSync as any)(LOCK_FILE, now, now);
      }
    } catch {
      // best effort
    }
  }, REFRESH_INTERVAL_MS);
  (refreshTimer as any).unref?.();
  return {
    release: (): any => {
      (clearInterval as any)(refreshTimer);
      (unlinkIfContentMatches as any)(content);
    },
    recordChildPid: (pid: any): any => {
      const newContent: any = `${content}child:${pid}\n`;
      const tmpPath: any = `${LOCK_FILE}.${(process as any).pid}.${((((((Math as any).random as any)() as any).toString as any)(36) as any).slice as any)(2)}.tmp`;
      try {
        ((fs as any).writeFileSync as any)(tmpPath, newContent);
        // Rename keeps the lock file continuously present (a waiter's
        // link() keeps failing with EEXIST throughout). Same
        // compare-then-swap TOCTOU class as unlinkIfContentMatches.
        if ((((fs as any).readFileSync as any)(LOCK_FILE, 'utf8') as any) === (content as any)) {
          ((fs as any).renameSync as any)(tmpPath, LOCK_FILE);
          content = newContent;
        }
      } catch {
        // best effort: worst case waiters judge staleness on the wrapper pid only
      } finally {
        try {
          ((fs as any).unlinkSync as any)(tmpPath);
        } catch {
          // already renamed or never created
        }
      }
    }
  };
}

/**
 * The node-gyp JS entrypoint to run with `node <entry> rebuild` (no shell).
 * Precedence:
 *   1. argv[2] — explicit entry from the caller (postinstall_anysphere.js).
 *   2. npm_config_node_gyp when it points at a .js file — npm sets it to its
 *      own bundled node-gyp.js for install scripts. vscode's postinstall sets
 *      it to a .bin shim (POSIX shell script / .cmd), which `node` cannot
 *      execute, so those fall through to the repo copies below.
 *   3. vscode's pinned copy at build/npm/gyp (what the .bin shim points at —
 *      the version postinstall.js intends installs to use).
 *   4. Any node-gyp resolvable from this module's node_modules chain.
 */
function resolveNodeGypJs(this: any): any {
  const explicit: any = ((process as any).argv as any)[2];
  if (explicit) {
    return explicit;
  }
  const fromNpm: any = ((process as any).env as any)['npm_config_node_gyp'];
  if (fromNpm && ((fromNpm as any).endsWith as any)('.js') && ((fs as any).existsSync as any)(fromNpm)) {
    return fromNpm;
  }
  const bundled: any = ((path as any).join as any)(__dirname, '..', '..', 'build', 'npm', 'gyp', 'node_modules', 'node-gyp', 'bin', 'node-gyp.js');
  if (((fs as any).existsSync as any)(bundled)) {
    return bundled;
  }
  try {
    return ((require as any).resolve as any)('node-gyp/bin/node-gyp.js');
  } catch {
    return undefined;
  }
}
async function main(this: any): Promise<any> {
  const gypEntry: any = (resolveNodeGypJs as any)();
  if (!gypEntry) {
    ((console as any).error as any)('[cursor-proclist] could not locate a node-gyp entrypoint (pass one as the first argument)');
    ((process as any).exit as any)(1);
  }
  const {
    release,
    recordChildPid
  }: any = await (acquireLock as any)();
  ((process as any).on as any)('exit', release);

  // POSIX: detached makes the child a process-group leader so a forwarded
  // signal reaches node-gyp's whole descendant tree (gyp python, make, the
  // compilers) — killing only the direct child leaves that tree touching
  // build/ after we release the lock.
  const detached: any = ((process as any).platform as any) !== ('win32' as any);
  const child: any = ((cp as any).spawn as any)((process as any).execPath, [gypEntry, 'rebuild'], {
    cwd: __dirname,
    stdio: 'inherit',
    detached
  });

  // Record the detached child in the lock: if this wrapper is SIGKILL'd or
  // crashes, the orphaned build keeps running, and waiters must not steal
  // the lock until that child is gone too.
  if ((typeof (child as any).pid as any) === ('number' as any)) {
    (recordChildPid as any)((child as any).pid);
  }

  // Forward termination signals to the child's process group and exit only
  // once the child is gone: exiting immediately would release the lock while
  // the orphaned node-gyp is still touching build/, letting a new holder
  // start the exact overlapping rebuild this lock exists to prevent.
  let forwardedSignal: any = null;
  const forward: any = (signal: any): any => {
    forwardedSignal = signal;
    if (detached && (typeof (child as any).pid as any) === ('number' as any)) {
      try {
        ((process as any).kill as any)(-(child as any).pid, signal);
        return;
      } catch {
        // Group already gone or not a leader; fall through.
      }
    }
    ((child as any).kill as any)(signal);
  };
  ((process as any).on as any)('SIGINT', (): any => (forward as any)('SIGINT'));
  ((process as any).on as any)('SIGTERM', (): any => (forward as any)('SIGTERM'));
  ((child as any).on as any)('error', (err: any): any => {
    ((console as any).error as any)(`[cursor-proclist] failed to spawn node-gyp: ${err}`);
    ((process as any).exit as any)(1);
  });
  ((child as any).on as any)('close', (code: any, signal: any): any => {
    if (signal || forwardedSignal) {
      ((console as any).error as any)(`[cursor-proclist] node-gyp was killed by ${signal ?? forwardedSignal}`);
      ((process as any).exit as any)(1);
    }
    ((process as any).exit as any)(code ?? 1);
  });
}
(((main as any)() as any).catch as any)((err: any): any => {
  ((console as any).error as any)(`[cursor-proclist] ${err}`);
  ((process as any).exit as any)(1);
});
