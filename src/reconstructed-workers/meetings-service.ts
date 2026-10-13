/** Service composition and public lifecycle, reconstructed from meetings-main.cjs.
 * Concrete media/window/backend implementations enter through typed factories. */
export interface MeetingRuntime {
  start(): void;
  stop(): Promise<void>;
  census(): unknown;
  meetings(): unknown;
  leave(meeting: unknown): void;
  joinUrl(...arguments_: unknown[]): unknown;
  observability(): unknown;
  captureWindow(window: unknown): unknown;
}
export interface CensusMonitor {
  start(): void;
  stop(): void;
  sweep(): void;
}
export interface MeetingsBackend {
  streamStt: unknown;
}
export interface MeetingsOptions {
  backend: MeetingsBackend;
  preloadPath: string;
  avatarDocumentUrl?: string;
  lookupAvatar?: unknown;
  onFailure: unknown;
  emitDesktopLog: unknown;
  emitMeetingsChanged(meetings: unknown): void;
  report: unknown;
}
export interface MeetingsFactories {
  createBackend(backend: MeetingsBackend): {
    pull(request: unknown): unknown;
    report(request: unknown): unknown;
  };
  createRuntime(options: {
    pull(request: unknown): unknown;
    report(request: unknown): unknown;
    openWindow(request: unknown): unknown;
    createStt(request: Record<string, unknown>): unknown;
    preloadPath: string;
    avatarDocumentUrl?: string;
    lookupAvatar?: unknown;
    onFailure: unknown;
    emitDesktopLog: unknown;
    onMeetingsChanged: MeetingsOptions["emitMeetingsChanged"];
  }): MeetingRuntime;
  openWindow(request: unknown): unknown;
  createStt(options: Record<string, unknown>): unknown;
  createMonitor(options: {
    read(): unknown;
    report: unknown;
    onChanged(): void;
  }): CensusMonitor;
}
export function createMeetingsServiceClass(factories: MeetingsFactories) {
  return class MeetingsService {
    constructor(
      readonly runtime: MeetingRuntime,
      readonly censusMonitor: CensusMonitor,
    ) {}
    static start(options: MeetingsOptions) {
      const backend = factories.createBackend(options.backend);
      const runtime = factories.createRuntime({
        pull: (request) => backend.pull(request),
        report: (request) => backend.report(request),
        openWindow: (request) => factories.openWindow(request),
        createStt: (request) =>
          factories.createStt({
            ...request,
            streamStt: options.backend.streamStt,
          }),
        preloadPath: options.preloadPath,
        ...(options.avatarDocumentUrl === undefined
          ? {}
          : { avatarDocumentUrl: options.avatarDocumentUrl }),
        ...(options.lookupAvatar === undefined
          ? {}
          : { lookupAvatar: options.lookupAvatar }),
        onFailure: options.onFailure,
        emitDesktopLog: options.emitDesktopLog,
        onMeetingsChanged: options.emitMeetingsChanged,
      });
      const monitor = factories.createMonitor({
        read: () => runtime.census(),
        report: options.report,
        onChanged: () => options.emitMeetingsChanged(runtime.meetings()),
      });
      runtime.start();
      monitor.start();
      return new this(runtime, monitor);
    }
    async stop() {
      await this.runtime.stop();
      this.censusMonitor.stop();
    }
    meetings() {
      return this.runtime.meetings();
    }
    census() {
      return this.runtime.census();
    }
    leave(meeting: unknown) {
      this.runtime.leave(meeting);
      this.censusMonitor.sweep();
    }
    joinUrl(...arguments_: unknown[]) {
      const result = this.runtime.joinUrl(...arguments_);
      this.censusMonitor.sweep();
      return result;
    }
    observability() {
      return this.runtime.observability();
    }
    captureWindow(window: unknown) {
      return this.runtime.captureWindow(window);
    }
  };
}
