/** Reconstructed startup lifecycle from index-ZYxf-aBb.js entry block.
 * Shipped React/provider and desktop factories are supplied as adapters.
 */
import { deferStartupTasks, type Clock } from "./deferred-startup.js";
export interface ReadableStore<T> {
  get(): T;
  subscribe(listener: () => void): unknown;
}
export interface StartupClient {
  theme: {
    snapshots: ReadableStore<{ resolved: unknown; systemAccentColor: unknown }>;
  };
  experiments: {
    snapshots: ReadableStore<
      { featureGates?: Record<string, unknown> } | null | undefined
    >;
  };
  language: { snapshots: ReadableStore<{ resolved: string }> };
  boot: ReadableStore<{ status: string; generation: number }>;
  computerRebuild: {
    lockSnapshots: ReadableStore<{ isLocked: boolean; kind: string }>;
  };
  desktopWindow: { subscribeWindowFocus(listener: () => void): unknown };
  listenerIntegrations: {
    completeScmConnect(value: unknown): Promise<unknown>;
  };
  start(): void;
  noteWindowFocus(): void;
}
export interface DesktopEvents {
  "zoom-factor-changed": { factor: number };
  "notification-sound": { sound: unknown };
  "deep-link": unknown;
}
export interface StartupDesktop {
  initialEnvironment: { platform: string };
  initialZoomFactor: number;
  subscribe<K extends keyof DesktopEvents>(
    listeners: Partial<{ [P in K]: (event: DesktopEvents[P]) => void }>,
  ): unknown;
  reportReactionAck(value: unknown): Promise<unknown>;
  getCursorAuthStatus(): Promise<unknown>;
}
export interface IdentityTransport {
  source: unknown;
  beginIdentityChange(): void;
  failIdentityChange(): void;
  completeIdentityChange(options: { acceptPort: boolean }): void;
}
export interface TelemetryLoader {
  load(): unknown;
  setTag(key: string, value: unknown): void;
}
export interface StartupCapability {
  telemetry: unknown;
  noteRendererAlive(): void;
}
export type ScheduleTimeout = (delay: number, task: () => void) => () => void;
export interface BrowserStatePort {
  subscribe(listener: (value: boolean) => void): () => void;
}
export interface ClientStartupOptions<D extends StartupDesktop> {
  source: unknown;
  desktop: D;
  isDocumentVisible(): boolean;
  persistence: unknown;
  voiceCallTransport: unknown;
  unifiedBillingRuntime(): Promise<unknown>;
  unifiedCreditsOpener: { open(view: unknown): unknown };
  voicePreviewPlayer: unknown;
  documentAssetUrls: {
    create(
      bytes: ArrayBufferLike | ArrayLike<number>,
      mimeType: string,
    ): string;
    revoke(url: string): void;
  };
  voiceMemoAudioPort: { createAudio(): HTMLAudioElement; createClip: unknown };
  connectivity: BrowserStatePort & { isOnline(): boolean };
  visibility: BrowserStatePort & { isVisible(): boolean };
  resolveAccountSlot(): unknown;
  onIdentityRestoreBegin(): void;
  onIdentityRestoreFailed(): void;
  onIdentityRestoreComplete(value: { accountSlot: string | null }): void;
  onSendDiagnostic(value: unknown): void;
  onSendQueuedFlush: unknown;
  onPersistenceOutcome(value: unknown): void;
  onSidebarSectionsDiagnostic(value: unknown): void;
  onLoginFlightReadFailure(value: unknown): void;
  onRestoreStage(stage: string): void;
  clock: Clock;
}
export interface RendererStartupDependencies<
  C extends StartupClient,
  D extends StartupDesktop,
  K extends StartupCapability,
  W,
> {
  window: Window;
  performance: Pick<Performance, "mark">;
  clock: Clock;
  createTelemetryLoader(window: Window): TelemetryLoader;
  deferredTasks: readonly (() => void)[];
  loadAnimationFeatures(): unknown;
  installInvariantReporter(report: (value: unknown) => void): void;
  assert(condition: boolean, message: string): void;
  createCapability(): K;
  createDesktop(capability: K): D;
  installFailureReporter(desktop: D): void;
  installEntrypointDiagnostics(): void;
  setPlatform(platform: string): void;
  playNotificationSound(sound: unknown): void;
  createPortBridge(): unknown;
  createIdentityTransport(options: { portBridge: unknown }): IdentityTransport;
  installReactionAck(options: {
    report(value: unknown): void;
    scheduleTimeout: ScheduleTimeout;
  }): void;
  createPersistence(options: { capability: K; storage: Storage }): unknown;
  wrapSource(source: unknown): unknown;
  createClient(options: ClientStartupOptions<D>): C;
  voiceCallTransport: unknown;
  loadUnifiedBilling(): Promise<unknown>;
  openCredits(view: unknown): unknown;
  createVoicePreviewPlayer(): unknown;
  createVoiceMemoClip: unknown;
  resolveAccountSlot(read: () => Promise<unknown>): unknown;
  onSendQueuedFlush: unknown;
  reportPersistence(value: unknown): void;
  report(...args: unknown[]): void;
  installDraftPersistence(options: {
    client: C;
    window: Window;
    reportFailure(value: unknown): void;
  }): void;
  initializeClient(client: C): void;
  initializeAccountFlow(client: C): void;
  isDeepLink(value: unknown): boolean;
  isScmConnectLink(value: unknown): boolean;
  scmConnectPayload(value: unknown): unknown;
  reportScmFailure(value: unknown): void;
  dispatchDeepLink(value: unknown, client: C): void;
  installClientObservers(client: C): void;
  applyTheme(
    theme: unknown,
    accent: unknown,
    useExperimentalTypeface: boolean,
  ): void;
  activateLocale(locale: string): Promise<unknown>;
  currentLocale(): string;
  initializeSelectionTelemetry(
    client: C,
    loader: TelemetryLoader,
    capability: K,
  ): void;
  initializeExperimentBindings(client: C): void;
  devPort: unknown;
  connectDevPort(client: C, port: unknown): () => void;
  connectRenderTracing(client: C): void;
  beforeWaking(client: C): void;
  createWakingHandle(client: C, scheduleTimeout: ScheduleTimeout): W;
  initializeAfterWaking(
    client: C,
    waking: W,
    scheduleTimeout: ScheduleTimeout,
  ): void;
  clearNonReadyState(): void;
  resetRestoringState(): void;
  noteAccountChange(waking: W): void;
  initializeFirstRunAndHeap(client: C, capability: K): void;
  observeRootPopulation(root: HTMLElement, noteRootPopulated: () => void): void;
  mountApp(
    root: HTMLElement,
    client: C,
    waking: W,
    features: () => Promise<unknown>,
  ): void;
}
export function bootstrapRenderer<
  C extends StartupClient,
  D extends StartupDesktop,
  K extends StartupCapability,
  W,
>(deps: RendererStartupDependencies<C, D, K, W>) {
  const { window, performance, clock } = deps;
  const document = window.document;
  performance.mark("sand.boot.entry");
  const telemetry = deps.createTelemetryLoader(window);
  const deferred = deferStartupTasks({
    clock,
    settleMs: 100,
    rootNeverPopulatedFallbackMs: 3000,
    tasks: [
      () => {
        telemetry.load();
      },
      ...deps.deferredTasks,
    ],
  });
  const animationFeatures = async () => {
    await deferred.released;
    return deps.loadAnimationFeatures();
  };
  deps.installInvariantReporter((value) =>
    deps.report("invariant_violation", value),
  );
  const root = document.getElementById("root");
  deps.assert(root != null, "Root element not found.");
  const capability = deps.createCapability(),
    desktop = deps.createDesktop(capability);
  deps.installFailureReporter(desktop);
  deps.installEntrypointDiagnostics();
  deps.setPlatform(desktop.initialEnvironment.platform);
  const setZoomFactor = (factor: number) => {
    document.documentElement.style.setProperty(
      "--sand-zoom-factor",
      String(factor),
    );
  };
  setZoomFactor(desktop.initialZoomFactor);
  desktop.subscribe({
    "zoom-factor-changed": ({ factor }) => setZoomFactor(factor),
  });
  desktop.subscribe({
    "notification-sound": ({ sound }) => {
      deps.playNotificationSound(sound);
    },
  });
  const transport = deps.createIdentityTransport({
    portBridge: deps.createPortBridge(),
  });
  const scheduleTimeout: ScheduleTimeout = (delay, task) => {
    const scheduled = clock.schedule(delay, task);
    return () => scheduled.dispose();
  };
  deps.installReactionAck({
    report: (value) => {
      desktop
        .reportReactionAck(value)
        .catch((error) => deps.report("reaction_ack", error));
    },
    scheduleTimeout,
  });
  const persistence = deps.createPersistence({
    capability,
    storage: window.localStorage,
  });
  const client = deps.createClient({
    source: deps.wrapSource(transport.source),
    desktop,
    isDocumentVisible: () => document.visibilityState === "visible",
    persistence,
    voiceCallTransport: deps.voiceCallTransport,
    unifiedBillingRuntime: deps.loadUnifiedBilling,
    unifiedCreditsOpener: { open: (view) => deps.openCredits(view) },
    voicePreviewPlayer: deps.createVoicePreviewPlayer(),
    documentAssetUrls: {
      create: (bytes, mimeType) =>
        URL.createObjectURL(
          new Blob([new Uint8Array(bytes as ArrayBuffer)], { type: mimeType }),
        ),
      revoke: (url) => URL.revokeObjectURL(url),
    },
    voiceMemoAudioPort: {
      createAudio: () => new Audio(),
      createClip: deps.createVoiceMemoClip,
    },
    connectivity: {
      isOnline: () => window.navigator.onLine,
      subscribe: (listener) => {
        const online = () => listener(true),
          offline = () => listener(false);
        window.addEventListener("online", online);
        window.addEventListener("offline", offline);
        return () => {
          window.removeEventListener("online", online);
          window.removeEventListener("offline", offline);
        };
      },
    },
    visibility: {
      isVisible: () => document.visibilityState === "visible",
      subscribe: (listener) => {
        const changed = () => listener(document.visibilityState === "visible");
        document.addEventListener("visibilitychange", changed);
        return () => document.removeEventListener("visibilitychange", changed);
      },
    },
    resolveAccountSlot: () =>
      deps.resolveAccountSlot(() => desktop.getCursorAuthStatus()),
    onIdentityRestoreBegin: () => transport.beginIdentityChange(),
    onIdentityRestoreFailed: () => transport.failIdentityChange(),
    onIdentityRestoreComplete: ({ accountSlot }) =>
      transport.completeIdentityChange({ acceptPort: accountSlot != null }),
    onSendDiagnostic: (value) => deps.report("send_journal", value),
    onSendQueuedFlush: deps.onSendQueuedFlush,
    onPersistenceOutcome: (value) => {
      deps.reportPersistence(value);
      deps.report("client_persistence", value);
    },
    onSidebarSectionsDiagnostic: (value) =>
      deps.report("sidebar_sections", value),
    onLoginFlightReadFailure: (value) =>
      deps.report("login_flight_read", value),
    onRestoreStage: (stage) => {
      performance.mark(`sand.boot.restore.${stage}`);
    },
    clock,
  });
  deps.installDraftPersistence({
    client,
    window,
    reportFailure: (value) =>
      deps.report("window_command", "draft_persistence", value),
  });
  performance.mark("sand.boot.client-created");
  deps.initializeClient(client);
  deps.initializeAccountFlow(client);
  desktop.subscribe({
    "deep-link": (value) => {
      if (deps.isDeepLink(value) && deps.isScmConnectLink(value))
        client.listenerIntegrations
          .completeScmConnect(deps.scmConnectPayload(value))
          .catch(deps.reportScmFailure);
      deps.dispatchDeepLink(value, client);
    },
  });
  deps.installClientObservers(client);
  const updateTheme = () => {
    const theme = client.theme.snapshots.get(),
      experimental =
        client.experiments.snapshots.get()?.featureGates?.sand_xvf_typeface ===
        true;
    deps.applyTheme(theme.resolved, theme.systemAccentColor, experimental);
  };
  updateTheme();
  client.theme.snapshots.subscribe(updateTheme);
  client.experiments.snapshots.subscribe(updateTheme);
  deps
    .activateLocale(client.language.snapshots.get().resolved)
    .catch((error) => deps.report("locale_activation", error));
  client.language.snapshots.subscribe(() => {
    if (client.language.snapshots.get().resolved !== deps.currentLocale())
      window.location.reload();
  });
  deps.initializeSelectionTelemetry(client, telemetry, capability);
  deps.initializeExperimentBindings(client);
  performance.mark("sand.boot.start");
  client.start();
  if (deps.devPort != null) {
    const dispose = deps.connectDevPort(client, deps.devPort);
    window.addEventListener("pagehide", (event) => {
      if (!event.persisted) dispose();
    });
  }
  deps.connectRenderTracing(client);
  client.desktopWindow.subscribeWindowFocus(() => {
    const lock = client.computerRebuild.lockSnapshots.get();
    if (!(lock.isLocked && lock.kind !== "reconnecting"))
      client.noteWindowFocus();
  });
  deps.beforeWaking(client);
  const waking = deps.createWakingHandle(client, scheduleTimeout);
  deps.initializeAfterWaking(client, waking, scheduleTimeout);
  client.boot.subscribe(() => {
    const status = client.boot.get().status;
    performance.mark(`sand.boot.${status}`);
    if (status !== "ready") deps.clearNonReadyState();
    if (status === "restoring") {
      deps.resetRestoringState();
      deps.noteAccountChange(waking);
    }
  });
  deps.initializeFirstRunAndHeap(client, capability);
  deps.observeRootPopulation(root as HTMLElement, deferred.noteRootPopulated);
  deps.mountApp(root as HTMLElement, client, waking, animationFeatures);
  capability.noteRendererAlive();
  return {
    telemetry,
    deferred,
    animationFeatures,
    root,
    capability,
    desktop,
    setZoomFactor,
    transport,
    scheduleTimeout,
    persistence,
    client,
    updateTheme,
    waking,
  };
}
