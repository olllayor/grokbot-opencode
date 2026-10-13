export interface StartupDependencies {
  monotonicNow(): number;
  report(level: 'info' | 'warn' | 'error', fields: Record<string, string | undefined>): void;
  captureFailure(error: unknown, phase: string): void;
  markTimeline(name: string): void;
  scheduleStuck(callback: () => void): void;
  translated: string;
  bootCohort(): { hwAccel: string; osSandbox: string };
  bootLanguage(): { preference: string; resolved: string };
  certificateRecoveryStarted(): boolean;
}
export function translationStatus(input: { platform: string; runningUnderArm64Translation(): boolean }): string {
  return input.platform !== 'darwin' ? 'unknown' : input.runningUnderArm64Translation() ? 'true' : 'false';
}
export function createDesktopStartup(deps: StartupDependencies) {
  const started = deps.monotonicNow();
  let phase = 'app_ready_wait', phaseStarted = started, windowStarted: number | undefined;
  let window: {kind:'untracked'} | {kind:'loading'} | {kind:'loaded';at:number} = {kind:'untracked'};
  let rendererAlive = false, serviceDone = false, outcome: 'ready' | 'failed' | 'cancelled' | undefined, watchdogArmed = false;
  const cohort = () => { const value = deps.bootCohort(); return {hw_accel:value.hwAccel,os_sandbox:value.osSandbox}; };
  const language = () => { const value = deps.bootLanguage(); return {language_preference:value.preference,language_resolved:value.resolved}; };
  const elapsed = () => String(Math.round(deps.monotonicNow()-started));
  const mark = (name: string) => deps.markTimeline(`sand.desktop.startup.${name}`);
  deps.report('info',{outcome:'start',phase,translated:deps.translated,...cohort(),...language()});
  function reconcile(): void {
    if (outcome != null || !serviceDone) return;
    if(window.kind==='loading') { phase='window';phaseStarted=windowStarted??deps.monotonicNow();return; }
    if(window.kind==='loaded'&&!rendererAlive) { phase='renderer';phaseStarted=window.at;return; }
    outcome='ready';const now=deps.monotonicNow();mark('ready');
    deps.report('info',{outcome:'ready',phase,translated:deps.translated,...cohort(),...language(),ca_recovery:deps.certificateRecoveryStarted()?'true':'false',duration_ms:String(Math.round(now-started)),window_ms:windowStarted===undefined?undefined:String(Math.round((window.kind==='loaded'?window.at:now)-windowStarted))});
  }
  function failed(error: unknown, atPhase: string): void {
    if(outcome != null)return;outcome='failed';
    deps.report('error',{outcome:'failed',translated:deps.translated,...cohort(),...language(),duration_ms:elapsed(),error_code:'SAND-E0601',error_domain:'desktop',error_retryable:'false',phase:atPhase});
    deps.captureFailure(error,atPhase);
  }
  return {
    markPhase(next: string) { if(outcome != null)return;phase=next;phaseStarted=deps.monotonicNow();mark(next);if(next==='window')windowStarted=phaseStarted; },
    armStuckWatchdog() { if(watchdogArmed||outcome != null)return;watchdogArmed=true;deps.scheduleStuck(()=>{if(outcome==null)deps.report('warn',{outcome:'stuck',translated:deps.translated,...cohort(),...language(),elapsed_ms:elapsed(),phase_elapsed_ms:String(Math.round(deps.monotonicNow()-phaseStarted)),error_code:'SAND-E0602',error_domain:'desktop',error_retryable:'true',phase});}); },
    trackWindowLoad(load: Promise<unknown>): Promise<void> { window={kind:'loading'};mark('window_load');return load.then(()=>{window={kind:'loaded',at:deps.monotonicNow()};mark('window_loaded');reconcile();},error=>failed(error,'window')); },
    noteRendererAlive() { if(rendererAlive||outcome!=null)return;rendererAlive=true;mark('renderer_alive');reconcile(); },
    isRendererAlive() {return rendererAlive;},
    noteReady() {if(outcome==null){serviceDone=true;reconcile();}},
    noteFailed(error: unknown) {failed(error,phase);},
    cancel() {if(outcome==null)outcome='cancelled';},
  };
}
