# REA web bundle tool attempts

Checkpoint before these attempts: `55c6e69`.

Both operations were called through an initialized REA 6.3.0 stdio MCP session using the advertised tool schemas.

- `recover_javascript_sources`: original `rea/recovered/dist/renderer/assets/index-ZYxf-aBb.js`, structural extraction, standard rewrite. REA returned `capability_unavailable`: it requires an absolute `REA_WAKARU_COMMAND` pointing to Wakaru 1.13.0 on Linux x64. Current host is macOS arm64. Docker CLI exists but its daemon is unavailable. No recovered output directory was produced. Raw result: `rea-web-source-recovery.json`.
- `analyze_web_bundle`: selected isolated Electron renderer CDP target, script sources requested, source-map fetching disabled. REA returned `target_unavailable` with reason `target_not_allowed` for its `file://` page. Raw result: `rea-web-bundle.json`.

These operations did not decompile additional application source. The existing Electron-specific passive inspector still succeeded, observing 1177 DOM nodes and the compiled reconstructed renderer module. That result does not substitute for successful web-bundle recovery.

The runtime inspection script supports `--web-bundle` to reproduce the analyzer attempt and propagates MCP error results explicitly. No global REA configuration was changed.

## Successful loopback capture

Run `npm run rea:web` after installing the pinned development Electron runtime (`node node_modules/electron/install.js`). The harness serves the original recovered renderer read-only over an ephemeral 127.0.0.1 HTTP port, opens a hidden sandboxed window in its own profile, blocks non-loopback HTTP requests and exposes a loopback-only CDP endpoint. It stops its own process group after capture. No application preload or user credentials are injected.

Repeated reloads caused stale Debugger script IDs. A stable load succeeded: REA evidence `ev_c5aedf879c94a73a3ab6ee8cd4a752fcdb329d5808fad39ed8b18056bcf32f54` analyzed 32 scripts, zero parse failures, 1,592,139 AST nodes, 477 chunk edges, 15 route candidates and 11 endpoint candidates. Every captured script SHA256 matches its original recovered renderer file. Completeness applies to the captured scripts, not all lazy-loaded application code.

Raw result: `rea-web-bundle-http.json`; deterministic same-session export: `rea-web-bundle-canonical.json`; artifact matching and counts: `rea-web-bundle-summary.json`. This is successful static bundle analysis of captured sources, not Wakaru module decompilation or a complete TypeScript reconstruction. The earlier errors remain preserved as provenance.

## Successful static recovery

The Linux x64 requirement was satisfied with a pinned local Docker image containing REA 6.3.0, Wakaru 1.13.0, util-linux and procps. `npm run rea:decompile` recovered all 482 renderer JavaScript bundles into 534 derived modules with 534 source maps. The local adapter path fix and two preserved syntax corrections are documented in `rea/decompiled/README.md`. `npm run rea:verify-decompiled` passes with full coverage, no missing bundles, no reported recovery failures/warnings and no unresolved syntax defects after considering the separate verified candidates. This does not establish complete TypeScript reconstruction or runtime equivalence.
