# Grok Bot TypeScript reconstruction

This workspace reconstructs the installed **Grok Bot 0.66.0** desktop application from `/Applications/Grok Bot.app` using the REA reverse-engineering skill and actual REA 6.3.0 MCP analyses. Its Electron runtime is **42.1.0**, verified from the installed framework.

All 540 executable JavaScript files now have a compiler-checked TypeScript source port, plus the extracted RPC domain adapter. Authored modules provide meaningful contracts for reconstructed application boundaries; `src/ported/` covers the remaining application, client, protobuf and vendor bundles. The latter uses inferred primitive types and explicit dynamic types where original contracts cannot be recovered. Original source maps were absent, so this is not the original upstream TypeScript project. The build manifest records source coverage and every substitution.

## Build and checks

```sh
npm ci --ignore-scripts
node node_modules/electron/install.js
npm run typecheck
npm test
npm run test:typed
npm run test:port
npm run port:verify
npm run build
npm run verify
npm run smoke
```

`npm start` opens the reconstructed UI in development Electron with a separate persistent profile under `build/development-profile`.

`build/Grok Bot.app` is an ad-hoc signed local build. `build/application/` contains its compiled application payload. The build reuses the installed Electron/framework/native runtime, so the installed app must remain available as a template (override with `GROKBOT_TEMPLATE`). Build outputs are written in this workspace. Development checks use the npm Electron runtime to avoid the packaged app’s move-to-Applications behavior. The currently installed ASAR matches an earlier hybrid build, so the committed `rea/recovered/` snapshot supplies the original JavaScript reference; the installed ASAR is not used as that reference.

`npm run smoke` launches `build/application` in the development Electron runtime with an isolated profile, checks process survival and detected JavaScript/preload failures, and stops its own process group. `node rea/scripts/inspect-runtime.mjs` adds passive REA MCP inspection via a loopback CDP endpoint. These checks establish development renderer loading, not authenticated backend behavior or packaged native UI acceptance.

## Reconstructed TypeScript

| Source | Executable responsibility |
| --- | --- |
| `src/electron-main/` | User-data selection, chained errors, atomic writes, V8 cache loading/pruning, main bootstrap |
| `src/main-core/` | Startup readiness/failure control, geometry/window restore, hardware policy, data paths and migrations, secure schemes/navigation, desktop settings generations |
| `src/electron-preload/` | Public desktop bridge, coordinator/render-trace ports, boot gating, attachment staging and event subscriptions |
| `src/rpc/` | Standard Schema combinators, typed executable request declarations, trust/validation/envelopes/probes/broadcasts/teardown |
| `src/auxiliary-preloads/` | Desktop mount, avatar, webview/passkeys, VNC lifecycle, meetings audio/page/avatar controllers |
| `src/renderer/` | Actual renderer startup orchestration, boot presentation, account identity, persistence registry/keys and voice settings |
| `src/reconstructed-main/` | Complete durable settings/accounts, schemas, theme/language and release-track services |
| `src/reconstructed-renderer/` | Eleven complete renderer helper chunks, with original import/export contracts |
| `src/reconstructed-workers/` | Chrome cookie import, meetings orchestration, OnePassword policy/connection/CLI lifecycle |
| `src/ported/` | Remaining executable bundles with explicit dynamic types and erased AST equality |
| `src/update/` | Idle update policy, resumable downloads/integrity/placement, local Squirrel feed server |

The build uses AST-aware replacement of exact program-scope bindings and the actual renderer entrypoint block, retaining their shipped closure dependencies where required. TypeScript entrypoints are compiled with source maps. Authored modules use project-wide strict checking. The source-port tier uses independent strict checks with recorded dynamic import boundaries; `npm run port:verify` repeats those checks.

`src/ported/domain/domain-adapter.cts` supplies the executable domain predicates behind the RPC schema declarations. The original `src/rpc/domain-adapter.cjs` remains a provenance and differential-test reference, with extraction hashes/ranges recorded alongside it. The page-world programs injected by meeting/VNC controllers are JavaScript source strings with typed host builders because Electron executes JavaScript in that separate world.

## Evidence and verification

REA MCP output is saved in `rea/evidence/rea-*.json` and the auxiliary canonical export. `rea/scripts/rea-mcp.mjs` creates an isolated version-pinned stdio MCP session, discovers the advertised tools and calls the requested operation. It does not change MCP registration or global settings. Large analyses were narrowed after the original full-ASAR analysis timed out; each scoped extraction records original artifact hashes and offsets.

Differential verification executes selected actual shipped declarations and compares them with the compiled TypeScript in controlled fixtures. The checks cover bootstrap/filesystem/cache, window/startup/migrations/security, all 307 desktop public functions, 3,312 request schema cases, 22 RPC outcomes, 30,720 boot states, persistence/voice/account flows, renderer startup ordering/events and mocked auxiliary entrypoint lifecycles. Mocked tests do not establish live device, camera, audio, noVNC, WebAuthn or signed-in backend parity.

Detailed scope and limitations:

- `rea/evidence/bootstrap-reconstruction.md`
- `rea/evidence/main-core-reconstruction.md`
- `rea/evidence/preload-reconstruction.md`
- `rea/evidence/rpc-server-reconstruction.md`
- `rea/evidence/renderer-reconstruction.md`
- `rea/evidence/auxiliary-preloads-reconstruction.md`
- `rea/evidence/update-reconstruction.md`
- `rea/evidence/main-typescript-migration.md`
- `rea/evidence/renderer-typescript-migration.md`
- `rea/evidence/workers-typescript-migration.md`
- `rea/evidence/typescript-source-port.md`

The initial ASAR integrity check observed a declared/actual SHA256 mismatch in the unpacked `cursor_proclist.node`. It was recorded rather than presented as verified original integrity. The rebuild packs the observed local bytes with fresh ASAR/header integrity and signs the derived application. Static REA evidence establishes syntax/relationships within its declared scope; it does not establish runtime reachability or full application equivalence.

The final development-runtime REA observation (`rea/evidence/runtime-inspection-result.json`) found 145 DOM nodes and the loaded compiled `reconstructed-renderer.js`. This confirms renderer loading in the isolated development runtime; it does not establish authenticated functionality or packaged UI equivalence.

## Live web bundle analysis

`npm run rea:web` serves the original recovered renderer on an ephemeral loopback HTTP port and captures it through REA in a hidden, disposable Electron window. The resulting source hashes match the recovered files. See `rea/evidence/web-bundle-tools.md` and `rea/evidence/rea-web-bundle-summary.json` for coverage. This HTTP capture supports REA's web analyzer; it does not provide Electron host functionality or decompile modules through Wakaru.

## Wakaru source recovery

`npm run rea:decompile` runs REA's actual MCP source-recovery tool in a local Linux amd64 Docker image with Wakaru 1.13.0. Readable generated JavaScript/JSX and transformation source maps live under `rea/decompiled/renderer/`; the executable build compiles the TypeScript source port and applies the authored TypeScript substitutions. Wakaru output is evidence rather than a runtime input because decompilation can change semantics. `rea/decompiled/README.md` documents extraction limits, the local adapter fix, and a separately preserved syntax repair. Run `npm run rea:verify-decompiled` for coverage, digest, range, source-map-format and syntax checks.

REA tooling, recovered references, and analysis evidence are grouped in [`rea/`](rea/README.md).
