import { createHash } from 'node:crypto';
import { createReadStream, createWriteStream, type WriteStream } from 'node:fs';
import * as fs from 'node:fs/promises';

/** Shipped updater's injected reliability/error dependencies remain owned by its application. */
export interface RetrySchedule { elapsed: Promise<unknown>; dispose(): void }
export interface Clock { monotonicNow(): number }
export interface DownloadDependencies {
  createRetryPolicy(options: { name: string; maxAttempts?: number; mode?: string; initialDelayMs: number; maxDelayMs: number; clock?: Clock }): { schedule(attempt: number, signal?: AbortSignal): RetrySchedule };
  realClock: Clock;
  elapsedMs(start: number, end: number): number;
  findSystemErrno(error: unknown): string | undefined;
  isMissingPathError(error: unknown): boolean;
  DownloadError: new (message: string) => Error;
  IntegrityError: new (message: string) => Error;
  reportDesktopEdgeFailure(edge: string, operation: string, error: unknown): void;
}
export interface UpdateDownload {
  url: string;
  partialPath: string;
  destinationPath: string;
  sha256?: string | null;
  signal?: AbortSignal;
  clock?: Clock;
  fetchImpl?: typeof fetch;
  platform?: string;
  rename?: typeof fs.rename;
  onProgress?(progress: { receivedBytes: number; totalBytes: number | null }): void;
}
export interface ResumeRecord { url: string; validator: string }
export interface ResumeRange { offset: number; validator: string }
export type DownloadAttempt = { kind: 'complete'; resumedTotal: number | null } | { kind: 'interrupted'; error: unknown; responded: boolean; wroteBytes: boolean };
export const resumePath = (partial: string): string => `${partial}.resume`;
export function responseValidator(headers: Headers): string | null {
  const etag = headers.get('etag');
  return etag != null ? etag.startsWith('W/') ? null : etag : headers.get('last-modified');
}
export function parseContentRange(value: string | null): { start: number; total: number | null } | null {
  const [, start, total] = /^bytes (\d+)-\d+\/(\d+|\*)$/.exec(value ?? '') ?? [];
  return start === undefined || total === undefined ? null : { start: Number(start), total: total === '*' ? null : Number(total) };
}
export function finishWrite(stream: WriteStream): Promise<void> {
  return new Promise((resolve, reject) => stream.end((error?: Error | null) => error == null ? resolve() : reject(error)));
}
export async function cleanupFile(file: string, dependencies: DownloadDependencies): Promise<void> {
  await fs.rm(file, { force: true }).catch(error => dependencies.reportDesktopEdgeFailure('update', 'download-cleanup', error));
}
export async function cleanupPartial(partial: string, dependencies: DownloadDependencies): Promise<void> {
  await cleanupFile(partial, dependencies); await cleanupFile(resumePath(partial), dependencies);
}
export async function readResume(partial: string, dependencies: DownloadDependencies): Promise<ResumeRecord | null> {
  let text: string;
  try { text = await fs.readFile(resumePath(partial), 'utf8'); }
  catch (error) { if (dependencies.isMissingPathError(error)) return null; throw error; }
  const [url, validator, ...extra] = text.split('\n');
  return url === undefined || validator === undefined || extra.length > 0 ? null : { url, validator };
}
export async function resumeRange(options: UpdateDownload, dependencies: DownloadDependencies): Promise<ResumeRange | null> {
  const record = await readResume(options.partialPath, dependencies);
  if (record == null || record.url !== options.url) return null;
  try { const { size } = await fs.stat(options.partialPath); return size > 0 ? { offset: size, validator: record.validator } : null; }
  catch (error) { if (dependencies.isMissingPathError(error)) return null; throw error; }
}
export async function resolveResponse(options: UpdateDownload, response: Response, resume: ResumeRange | null, dependencies: DownloadDependencies): Promise<{ offset: number; totalBytes: number | null }> {
  if (response.status === 206) {
    const range = parseContentRange(response.headers.get('content-range'));
    if (resume == null || range == null || range.start !== resume.offset) {
      await cleanupPartial(options.partialPath, dependencies);
      throw new dependencies.DownloadError(`Update download failed: unexpected Content-Range for ${options.url}`);
    }
    return { offset: resume.offset, totalBytes: range.total };
  }
  if (!response.ok) {
    if (response.status === 416) await cleanupPartial(options.partialPath, dependencies);
    throw new dependencies.DownloadError(`Update download failed: HTTP ${response.status} for ${options.url}`);
  }
  const validator = responseValidator(response.headers);
  if (validator == null) await fs.rm(resumePath(options.partialPath), { force: true });
  else await fs.writeFile(resumePath(options.partialPath), `${options.url}\n${validator}`);
  const length = response.headers.get('content-length');
  return { offset: 0, totalBytes: length != null && /^\d+$/.test(length) ? Number(length) : null };
}
export async function downloadAttempt(options: UpdateDownload, dependencies: DownloadDependencies): Promise<DownloadAttempt> {
  const resume = await resumeRange(options, dependencies);
  let response: Response;
  try { response = await (options.fetchImpl ?? fetch)(options.url, {
    redirect: 'follow', signal: options.signal,
    ...(resume == null ? {} : { headers: { range: `bytes=${resume.offset}-`, 'if-range': resume.validator } }),
  }); } catch (error) {
    if (options.signal?.aborted === true) throw error;
    return { kind: 'interrupted', error, responded: false, wroteBytes: false };
  }
  const resolved = await resolveResponse(options, response, resume, dependencies);
  if (response.body == null) throw new dependencies.DownloadError(`Update download failed: empty response for ${options.url}`);
  let received = resolved.offset;
  let wroteBytes = false;
  const stream = createWriteStream(options.partialPath, { flags: resolved.offset > 0 ? 'a' : 'w' });
  try {
    const reader = response.body.getReader();
    for (;;) {
      let item: ReadableStreamReadResult<Uint8Array>;
      try { item = await reader.read(); }
      catch (error) {
        if (options.signal?.aborted === true) throw error;
        await finishWrite(stream);
        return { kind: 'interrupted', error, responded: true, wroteBytes };
      }
      if (item.done) break;
      received += item.value.byteLength;
      wroteBytes = true;
      options.onProgress?.({ receivedBytes: received, totalBytes: resolved.totalBytes });
      if (!stream.write(item.value)) await new Promise<void>((resolve, reject) => {
        stream.once('drain', resolve); stream.once('error', reject);
      });
    }
    await finishWrite(stream);
  } catch (error) { stream.destroy(); throw error; }
  return { kind: 'complete', resumedTotal: resolved.offset > 0 ? resolved.totalBytes : null };
}
export async function placeDownload(options: UpdateDownload, dependencies: DownloadDependencies): Promise<void> {
  const rename = options.rename ?? fs.rename;
  if ((options.platform ?? process.platform) !== 'win32') { await rename(options.partialPath, options.destinationPath); return; }
  const clock = options.clock ?? dependencies.realClock;
  const policy = dependencies.createRetryPolicy({ name: 'sand-update-place', mode: 'until-signal', initialDelayMs: 10, maxDelayMs: 100, clock });
  const start = clock.monotonicNow();
  for (let attempt = 1; ; attempt++) {
    try { await rename(options.partialPath, options.destinationPath); return; }
    catch (error) {
      if (!new Set(['EPERM', 'EBUSY', 'EACCES']).has(dependencies.findSystemErrno(error) ?? '') || dependencies.elapsedMs(start, clock.monotonicNow()) >= 60_000) throw error;
    }
    const scheduled = policy.schedule(attempt, options.signal);
    try { await scheduled.elapsed; } finally { scheduled.dispose(); }
  }
}
export async function verifyAndPlace(options: UpdateDownload, resumedTotal: number | null, dependencies: DownloadDependencies): Promise<{ sha256: string }> {
  const hash = createHash('sha256');
  const stream = createReadStream(options.partialPath);
  for await (const bytes of stream) hash.update(bytes);
  const length = stream.bytesRead;
  const sha256 = hash.digest('hex');
  if (resumedTotal != null && length !== resumedTotal) {
    await cleanupPartial(options.partialPath, dependencies);
    throw new dependencies.IntegrityError(`Update download failed integrity check: expected ${resumedTotal} bytes, got ${length}`);
  }
  if (options.sha256 != null && sha256 !== options.sha256) {
    await cleanupPartial(options.partialPath, dependencies);
    throw new dependencies.IntegrityError(`Update download failed integrity check: expected sha256 ${options.sha256}, got ${sha256}`);
  }
  await placeDownload(options, dependencies); await cleanupFile(resumePath(options.partialPath), dependencies);
  return { sha256 };
}
export async function downloadUpdate(options: UpdateDownload, dependencies: DownloadDependencies): Promise<{ sha256: string }> {
  const policy = dependencies.createRetryPolicy({ name: 'sand-update-download', maxAttempts: 15, initialDelayMs: 1000, maxDelayMs: 60_000, clock: options.clock });
  const record = await readResume(options.partialPath, dependencies);
  if (record != null && record.url !== options.url) await cleanupPartial(options.partialPath, dependencies);
  let responded = false;
  let emptyAttempts = 0;
  for (;;) {
    const attempt = await downloadAttempt(options, dependencies);
    if (attempt.kind === 'complete') return await verifyAndPlace(options, attempt.resumedTotal, dependencies);
    responded ||= attempt.responded;
    emptyAttempts = attempt.wroteBytes ? 0 : emptyAttempts + 1;
    if (!responded || emptyAttempts > 15) throw attempt.error;
    if (emptyAttempts > 0) {
      const scheduled = policy.schedule(emptyAttempts, options.signal);
      try { await scheduled.elapsed; } finally { scheduled.dispose(); }
    }
  }
}
