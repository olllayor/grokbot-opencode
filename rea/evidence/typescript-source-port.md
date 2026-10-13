# TypeScript executable source coverage

The committed decompilation checkpoint is `a3da8b4`. REA/Wakaru renderer artifacts remain evidence: two separately repaired decompiler defects demonstrate why transformed decompiler output is not the executable semantic reference.

The complete source-port tier is generated from the committed `rea/recovered/` JavaScript reference. Its inventory is `src/ported/port-manifest.json`; every executable `.js`, `.cjs`, and `.mjs` reference has a corresponding `.cts` or `.mts` source. The RPC domain adapter extracted during earlier reconstruction also has a `.cts` source under `src/ported/domain/` and is now imported by executable schema declarations.

This tier supplies explicit annotations and assertions, rather than renaming files or adding suppression directives. Immutable primitive bindings receive inferred primitive types. Unknown values, host globals, minified application contracts and vendor boundaries use explicit `any`. Every module body is checked in strict TypeScript; imported names use recorded dynamic declaration boundaries, while their local source units are independently checked. This does not recover or validate unknown upstream cross-module contracts. `src/port-runtime/README.md` documents the erasure comparison and allowed semantic normalizations.

The build first compiles all source-port units to their original runtime paths and module forms. It then substitutes authored TypeScript bootstrap/preload entrypoints, main-process settings and services, the RPC layer, renderer orchestration and eleven complete renderer helper chunks, the Chrome import worker, meetings composition, and OnePassword policy/connection/CLI/provisioning lifecycles. `build/reconstruction-manifest.json` records original/source/output digests and binding adapters. `scripts/verify-source-coverage.mjs` rejects executable output files without TypeScript build provenance.

Run `npm run port:verify` to independently repeat strict checking, byte-digest verification and erased JavaScript AST comparison for every reference module. Run `npm test`, `npm run test:typed` and `npm run test:port` for differential runtime fixtures and authored behavior checks. `npm run build` creates the application; `npm run verify` checks source coverage, exact ASAR payload bytes, ASAR header integrity and ad-hoc signature.

The native helpers, Electron runtime, fonts and other non-JavaScript resources are reused. Original TypeScript names, source boundaries and types are unavailable because shipped source maps were absent. Development smoke and passive REA page inspection establish executable renderer loading; they do not establish signed-in backend, physical device, credential, meeting/audio or packaged native UI equivalence.

The currently installed ASAR matches an earlier hybrid build. Its bytes are not used as the original source reference. Development smoke uses the npm Electron runtime to avoid the packaged move-to-Applications gate.

## Verified coverage totals

The inventory covers 540 original executable files (36,681,451 bytes) in 62,111,502 bytes of TypeScript. It records 5,787 inferred primitive bindings, 1,994,266 explicit dynamic annotations/assertions and 1,604 dynamic import boundaries. Classification identifies 12 dependency/vendor artifacts and 528 application or mixed bundles. The additional RPC adapter has 4,409 dynamic annotations/assertions and 17 primitive bindings. These numbers describe source coverage and explicit uncertainty, not recovery of the original types.

## Integrated build checks

The final build emits 546 JavaScript outputs, all with TypeScript provenance: 540 original runtime paths plus six authored aggregates. It integrates eight authored main/preload/worker entrypoints, eleven renderer entrypoints and 162 exact binding replacements. Archive verification checks all 1,163 payload files, the ASAR integrity header and the ad-hoc signature. The development runtime survives the 12-second smoke with no detected JavaScript/preload failures. A warm REA MCP session observes the rebuilt renderer (145 DOM nodes) and the loaded compiled startup aggregate. The first cold-session attempt lost its target before observation; the repeatable inspection now initializes REA before starting the app. This remains passive development runtime verification, not authenticated or packaged UI acceptance.
