# Main-core service reconstruction

Observed artifact: `rea/recovered/dist/electron-main/main-core.cjs` (812 KB); readable evidence: `rea/evidence/main-core-readable.cjs`. Babel extracts named original function declarations directly for differential tests; reconstruction remains authored strict TypeScript, not a renamed full bundle.

## Original-to-TypeScript integration mapping

| Shipped binding | Typed export | Module |
| --- | --- | --- |
| RU | createDesktopStartup | desktop-startup.ts |
| TU | translationStatus | desktop-startup.ts |
| e0 | startupAssets | remainder.ts |
| n0 | waitForRemainder | remainder.ts |
| aM | hardwareAccelerationEnabled | hardware.ts |
| iM | applyHardwareAcceleration | hardware.ts |
| sM | hardwareAccelerationState | hardware.ts |
| Ine | parseWindowState | window-state.ts |
| PM | restoreWindowBounds | window-state.ts |
| zm | WindowStateStore | window-state.ts |
| Ym | preloadFilename | window-policy.ts |
| WM | windowIcon | window-policy.ts |
| ZM | v8CachePolicy | window-policy.ts |
| QM | sameDocumentLocation | window-policy.ts |

Adapter-required bindings: `Dne(window,bounds)` → `trackWindowState(window,bounds,zT)`; `JM(window,restore)` → `applyWindowRestore(window,restore,zT)`; `Zm(window,devServerUrl)` → `loadMainWindow(window,devServerUrl,wne)`. The store and renderer path are captured shipped dependencies, explicitly provided by these adapters.

Observed startup semantics: core initializes single-instance and environment policy before Electron readiness, then performs move/data-root checks, creates themes/languages and settings IPC, creates/restores the main window, registers roster-photo and attachment protocols, publishes services through `EM`, and resolves `WCe`/exported `remainderDue` only after `n0` settles without quitting. `NI`/exported `noteStartupFailed` records failure through `Wo` and releases pending UI via `Ez`. These two top-level exports remain bound to shipped dependency composition; they are not fabricated independent service implementations.

Reconstructed state machine tracks phase, window-load and renderer/service readiness, one-shot failure/cancellation outcomes and watchdog telemetry (`SAND-E0601`/`SAND-E0602`). Remainder gating removes completed startup assets, recognizes terminal document/load/window events, ignores aborted main-frame loads (`-3`), and yields across the scheduler boundary while honoring quit. Window restore validates integers, selects maximum overlap, rejects insufficient visibility and clamps size/position. Hardware policy applies before readiness and defaults on only for macOS.

Validation: four passing differential tests in `tests/main-core.test.mjs`; strict standalone TypeScript compilation passes. Tests cover geometry across displays/offscreen bounds, platform/preload/cache/navigation policy, readiness/failure/cancel/watchdog telemetry, asset/document/failure/quit remainder settlement. `WindowStateStore` and Electron event wiring are statically reconstructed; full Electron startup and data-root migration/protocol services are not reconstructed or runtime-verified by this bounded module pass.

REA bootstrap evidence: `rea/evidence/rea-bootstrap.json`, `ev_0dc80bdb24792b2fc0a6b7313160d7b6b57a6383c212b7ae66ee262579a8ed39` establishes bootstrap artifact analysis. It does not cover this main-core bundle; this ledger distinguishes Babel-shipped observations from that MCP scope.

## Expanded migration, security, and settings pass

REA MCP scoped evidence: `rea/evidence/rea-core-migration-security.json`, ID `ev_815b08e96c72a93f1e9092bf2d721cbaa26554fb01554cdd1da467b1ae2af31e`: 1,134 AST nodes, 19 findings, zero parse failures. Input `rea/evidence/rea-input/core-migration-security/provenance.json` retains original artifact SHA-256 and exact function byte offsets. This input is an inert declaration extraction; closed-over dependencies remain unresolved. It is not evidence of whole-app graph completeness or runtime execution.

Additional strictly typed modules:

- `data-paths.ts`: `rl → isBelowRoot`, `Cf → fileURLPath`, `cy → applicationVariant`, `Pf → canonicalDataRoot`, `uy → legacyDataRoot`, `ol → dataRootOverride`, `Je → dataRoot`, `Z9 → portablePathSuffix`, `kf → rebaseDataPath`, `XC → computerUseRoot`, `JC → hostTokenPath`, `Df → localToolApprovalsPath`, `ZC → localToolStandingGrantsPath`.
- `user-data-migration.ts`: `eM → userDataRoots`, `Km/ma → directoryKind`, `jT → hasUserDataMarker`, `tM → markUserDataRoot`, `dne/Ote → removeEmptyDirectory`, `lne → directoryIsEmpty`, `une → sameWindowsPath`, `pne → migrateUserDataRoots`, `fne → settleUserDataRoot`, `nM → applyUserDataSettlement`.
- `data-root-migration.ts`: `xte → processCommand`, `bL → isSandHostProcess`, `Ite → isProcessAlive`, `Wm → hasDataRootMarker`, `UT → markDataRoot`, `Cte → isDaemonRecord`, `Nte → legacyDaemonStatus`, `Pte → legacyHostStatus`, `kte → classifyDataRootContents`, `Dte → settleCanonicalDataRoot`, `wte → migrateDataRoots`, `Lte → settleDataRoot`, `IL → existingProductionRoot`, `OL → applyDataRootSettlement`.
- `protocol-security.ts`: `jy → isMcpAppURL`, `Nk → blocksMcpFrameNavigation`, `oT → isHtmlPreviewURL`, `_Z → isCanvasURL`, `oD → isCanvasInitialNavigation`, `aD → shouldOpenPreviewExternally`, `gl → isExternalHttpURL`, `Qm → guardWindowNavigation`. `rD` adapter calls `registerSecureSchemes(nD.protocol)`.
- `desktop-settings.ts`: full shipped `Bm` subclass layer over settings base `Dm`, reconstructed through `createDesktopSettingsClass(Dm,{createIO:xT,reportFailure:H})`. This preserves write/permission generations, same-permission invalidation, account changes, Messages cleanup and local approval clearing, including failure ownership. The underlying `Dm` schema/account durable-store implementation remains shipped.
- `startup-services.ts`: `rM` adapter supplies `initializeUserData` with Electron app, argv/platform, `QL` updated-launch detection, `rt` reporter and logger; `oM` supplies `initializeDataRoot` with app packaging, `IL`, `OL`, reporter; `GCe` calls `focusStartupWindow({lateFocus:$o.focusMainWindow,window:SE})`; `Ez` calls `markMainEdge` with `CI` getter/setter, `SE`, `UN`; `NI` calls `startupFailed` with `Wo.noteFailed` and `Ez`.

Additional validation: `tests/main-core-security.test.mjs` contains five passing differential tests against actual shipped declarations. Real temporary files exercise Windows user-data migration (fresh, migration, awaiting update, empty canonical, conflict, marker, unsafe symlink, injected rename failure) and host-data migration (fresh, migration, foreign canonical, live host, idle/busy/unknown/dead daemon, existing marker). URL/path cases include invalid URLs, percent encoding, custom protocols, parent-frame restrictions and path containment; navigation compares event effects; settings tests execute the shipped `Bm` class and reconstructed subclass against the same injected base. All authored main-core modules pass standalone strict TypeScript compilation.

Remaining limits: full Electron startup/UI behavior is owned by root runtime validation. Migration tests run on macOS filesystem with injected Windows policy; actual Windows filesystem case-insensitivity and cross-process rename races were not exercised. REA scoped declaration analysis does not include later data-root helpers; those are source-grounded by original artifact AST and differential tests. Main-app services and base `Dm` settings schema/account methods remain packaged residual dependencies.
