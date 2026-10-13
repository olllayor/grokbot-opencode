/** main-app.cjs: agr, sgr, yot, _ot, Eot. */
export type HostIdle = { kind: 'confirmed-idle' | 'busy' | 'unavailable' };
export interface IdleState {
  screenLocked: boolean;
  screensaverActive: boolean;
  systemIdleSeconds: number;
  idleThresholdSeconds: number;
}
export function hostIsIdle(host: HostIdle): boolean {
  return host.kind === 'confirmed-idle';
}
export function systemIsIdle(state: IdleState): boolean {
  return (state.screenLocked || state.screensaverActive) && state.systemIdleSeconds >= state.idleThresholdSeconds;
}
export function canApplyIdleUpdate(state: IdleState & { autoUpdateWhenIdle: boolean; updateStaged: boolean; hostIdle: HostIdle }): boolean {
  return state.autoUpdateWhenIdle && state.updateStaged && systemIsIdle(state) && hostIsIdle(state.hostIdle);
}
export interface IdleRelaunchSignals {
  probeHostIdle(): Promise<HostIdle>;
  getScreensaverActive(): Promise<boolean>;
  getScreenLocked(): boolean;
  getSystemIdleSeconds(): number;
}
export type IdleApplyResult = 'skipped' | 'relaunched';
export async function applyUpdateWhenIdle(options: {
  updateReady: boolean;
  autoUpdateWhenIdle: boolean;
  signals?: IdleRelaunchSignals | null;
  stillReady(): boolean;
  quitAndInstall(): boolean;
}): Promise<IdleApplyResult> {
  if (!options.updateReady) return 'skipped';
  const signals = options.signals;
  if (!options.autoUpdateWhenIdle || signals == null) return 'skipped';
  const hostIdle = await signals.probeHostIdle();
  const screensaverActive = await signals.getScreensaverActive();
  return !options.stillReady() || !canApplyIdleUpdate({
    autoUpdateWhenIdle: options.autoUpdateWhenIdle,
    updateStaged: true,
    screenLocked: signals.getScreenLocked(),
    screensaverActive,
    systemIdleSeconds: signals.getSystemIdleSeconds(),
    idleThresholdSeconds: 600,
    hostIdle,
  }) ? 'skipped' : options.quitAndInstall() ? 'relaunched' : 'skipped';
}
export async function periodicUpdateCheck(options: {
  applyWhenIdle(): Promise<IdleApplyResult>;
  cancelRearm(): void;
  isDisposed(): boolean;
  refreshFeed(): Promise<unknown>;
  log?(message: string): void;
}, errorLogTag: (error: unknown) => string): Promise<void> {
  const apply = async (): Promise<IdleApplyResult> => {
    try { return await options.applyWhenIdle(); }
    catch (error) {
      options.log?.(`auto-update-when-idle: idle probe failed: ${errorLogTag(error)}`);
      return 'skipped';
    }
  };
  if (await apply() === 'relaunched') { options.cancelRearm(); return; }
  if (options.isDisposed()) return;
  try { await options.refreshFeed(); }
  catch (error) { options.log?.(`auto-update-when-idle: periodic check failed: ${errorLogTag(error)}`); }
  if (options.isDisposed()) return;
  if (await apply() === 'relaunched') options.cancelRearm();
}
