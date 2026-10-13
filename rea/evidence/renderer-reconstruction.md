# Renderer TypeScript reconstruction

Target: shipped `rea/recovered/dist/renderer/assets/index-ZYxf-aBb.js` (1,874,854 bytes) and `index.eager-app-Cj5f8Gby.js` (1,638,291 bytes). The renderer HTML identifies the first as its module entry. Root worker owns REA MCP application analysis; this worker read the REA skill and reused the extracted artifact rather than opening a duplicate full analysis. Conclusions below are static observations; no renderer runtime/UI acceptance is claimed.

## Recovered modules and symbol mapping

| TypeScript module | Shipped symbols | Coverage |
| --- | --- | --- |
| `src/renderer/boot-presentation.ts` | startup `x6`, `BRe`, `GRe`, `VRe` | First-box failure gate, app-view release gate, initial/restored chrome preview, setup/connect busy label |
| `src/renderer/persistence-keys.ts` | eager-app `kp`, `YL`, `Pb`, `Hs`, `el`, `ZL`, `ly`, `wd`, `QL`; `JL.stage` | Include/exclude precedence, account-isolated storage namespace, escaped map keys, envelope parse, quota classification, account staging policy |
| `src/renderer/persistence-registry.ts` | eager-app class `JL`, report helpers `gd`/`cy`, enum `ug` | Slice ownership, receipts, corrupt/I/O/quota reporting, scalar/map storage, legacy roots, cloud-peer segment retirement, account invalidation |
| `src/renderer/account-boot.ts` | eager-app `nn`, `Qhe`, `fce`, `pce` | Auth identity fallback, persisted account-slot codec/receipt and version/current-slot test |
| `src/renderer/voice-settings.ts` | eager-app `USe`, `GSe`, constants `Rv`, `Uh` | Device selection store, queued persistence, restore codec/schema and disposal guards |
| `src/renderer/deferred-startup.ts` | eager-app `xFe` (imported as startup `cle`) | Root-population settle timer, never-populated fallback, one-time deferred tasks and release promise |

These are authored typed modules with recovered names and contracts. They are not copies of the minified bundles with `.ts` extensions. They have no `ts-nocheck`. Remaining shipped modules must remain in the package for full UI functionality.

## Entry/boot observations

Startup marks `sand.boot.entry`, creates deferred tasks with 100 ms settling and a 3,000 ms fallback, requires `#root`, obtains desktop capability and adapter, sets CSS `--sand-zoom-factor`, subscribes notification sounds, constructs a port-backed client, and starts it. Browser online/offline and visibility listeners return explicit unsubscribe closures. Account restoration begins/fails/completes the transport identity change. Client theme and experiments update theme styling; a settled locale change reloads the window. Client boot changes record performance marks, reset UI state outside `ready`, and notify account changes during `restoring`. React creates a strict root with localization, error boundary, menu/client/navigation providers and shell overlays. `noteRendererAlive` follows root render.

Readable evidence copies: `rea/evidence/renderer-startup-readable.js`, `rea/evidence/renderer-app-readable.js`. The symbol mapping above was established from parsed syntax and export/import declarations, not guessed from filenames.

## Verification

`node rea/evidence/verify-renderer.mjs` parses the original shipped bundle with Babel, extracts actual function/class declarations into isolated VM contexts, compiles reconstructed TS with esbuild, and compares outcomes.

Passed: 30,720 combinations of boot status/generation, first-box and first-run phases and eight booleans; persistence key escaping/account isolation, envelope parsing, include/exclude precedence and quota cases; deferred startup timer/release lifecycle; registry reads/writes/maps, receipt once-only classification, account staging, retire rejection/acceptance and invalidation.

Passed strict compilation: `node_modules/.bin/tsc --noEmit --strict --target es2022 --module nodenext --moduleResolution nodenext --skipLibCheck src/renderer/*.ts`.

## Integration and limits

Compile modules into renderer ESM assets and import their exports into the two shipped bundles. Replace the mapped functions/class using AST-aware edits while retaining all unmapped declarations, imports, exports and lazy chunks. Export aliases that point to replaced declarations retain their existing wire symbols. Root worker owns packaging/integration.

The persistence registry preserves storage and report behavior covered by differential scenarios. Ownership and account namespace assertions accept an invariant adapter. Integrate class `JL` as a subclass of reconstructed `PersistenceRegistry` whose constructor calls `super(port, onOutcome, st)`. For standalone `Hs`, call reconstructed `sliceKey(definition, accountSlot, st)`. This retains shipped invariant telemetry. Voice-settings factory likewise accepts original snapshot factory `ke` and queue factory `sn`: `GSe(e) { return createVoiceSettings({...e, createSnapshots: ke, createQueue: sn}); }`. Negative I/O/quota paths are implemented from shipped code but are not covered by the lifecycle differential scenario. Full React compiled UI, hooks, client implementation, transports, localization and vendor code remain residual JavaScript. No claim of complete original TypeScript source recovery, source maps, original component names or runtime parity is made.

## Scoped REA MCP evidence

`rea/evidence/rea-renderer-scoped.json` records a successful isolated REA 6.3.0 MCP `analyze_javascript_application` invocation over 19 inert declarations, not the full multi-megabyte renderer. Evidence ID: `ev_d08ba5edfc12d63f9c8df98e7ae79654865b26f8a65bd2ecdb81e4ed34709574`; subject SHA256: `d1ab118b37371570eb10ab612b5023ef939732a61527f8a10ecd6c1c86539534`. `rea/evidence/rea-input/renderer/provenance.json` records exact original file offsets and per-declaration SHA256. REA parsed inert code without executing bootstrap and its static relationships do not establish runtime execution; dynamic/obfuscated relationships may remain unresolved.

Additional account boot and voice settings differential comparisons passed (auth ID/email precedence, persisted slot classification/version and device store restoration/update/disposal).

`rea/evidence/rea-voice-settings.json` records a second focused MCP analysis of the two voice store declarations. Evidence ID: `ev_9e9e1df71466073999f63e419d3d8fbb214642ed512bcf7538e2597aef95f435`; subject SHA256: `df1c1d057098230a10ef45ae9fbe6a48ee2f9d647dc39448412294fa2a1d84c8`. Original offsets/digests are in `rea/evidence/rea-input/voice-settings/provenance.json`.

## Entrypoint lifecycle reconstruction

`src/renderer/renderer-startup.ts` recovers the actual startup block, from `performance.mark("sand.boot.entry")` through `Vc.noteRendererAlive()`. It owns startup ordering, deferred task release, root assertion, desktop capability/adapter construction, zoom CSS and sound events, port-backed client options, browser connectivity/visibility subscriptions and unsubscribe closures, account restoration callbacks, persistence/restore diagnostics, deep-link handling, theme/typeface refresh, locale reload, client start, development pagehide cleanup, focus lock policy, boot-state resets, root population and mount ordering. Specialized client observers and the exact React provider/component tree remain supplied through adapters.

`rea/evidence/renderer-startup-adapter.js` is the generated integration snippet. It preserves shipped factories, specialized observers and the full original render expression. Declare original module-level bindings before calling bootstrap and assign client/capability/desktop bindings inside factory adapters; this preserves visibility to shipped callbacks during initialization. Replace the exact original AST statement span with this adapter and import `bootstrapRenderer` from the compiled TS entry. `rea/evidence/create-renderer-startup-adapter.mjs` regenerates the snippet and provenance from the unchanged shipped bundle.

Entrypoint provenance: original byte offsets 1864863 through 1872146 in `index-ZYxf-aBb.js`; 7,283 bytes of shipped code. REA MCP evidence `ev_1e402501d1536fdb780638748f22f02d6cf2bb47c1dae39f2572bc8b65fef3e4` is retained in `rea/evidence/rea-renderer-startup.json`, subject SHA256 `4f441ea4ee63ef4a012299bf6fd0409402cc95b67ce40c3de93eb947315251e9`. Extracted inert span and original offset/digest provenance are in `rea/evidence/rea-input/renderer-startup/`.

`node rea/evidence/verify-renderer-startup.mjs` executes the extracted original entrypoint and the compiled TS bootstrap plus integration adapter in separate mocked browser contexts. It compares startup call order and exercises online/offline and visibility subscriptions/removal, identity restoration, zoom and notification events, focus while unlocked/locked/reconnecting, restoring boot, development pagehide persisted/non-persisted handling, locale changes and theme/experiment updates. Passed. This is differential lifecycle verification under mocks; it is not an authenticated app runtime or rendered UI acceptance test.
