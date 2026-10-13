# Update subsystem TypeScript reconstruction

Observed source: `rea/recovered/dist/electron-main/main-app.cjs`; selected original declarations and original SHA256/offsets: `rea/evidence/rea-input/update/`. REA MCP Evidence `ev_5de96d35654a32ceef2cec933ac6181f95b136167da66cf273862f10fbbd5f32` in `rea/evidence/rea-update.json` parsed 1,746 AST nodes / 8,130 text bytes with no parse failures. Coverage is scoped to extracted inert declarations; shared reliability/error/telemetry dependencies are explicit injected adapters. This is static evidence, not live updater execution.

Typed modules implement:

- `idle.ts`: agr/sgr/yot/_ot/Eot idle gates and periodic lifecycle, 600-second idle threshold, host confirmation and post-probe readiness recheck.
- `feed-server.ts`: A1/bot local Squirrel HTTP feed, GET-only routes, ZIP streaming, release metadata, stop/restart.
- `download.ts`: Mot/dgr/ugr/pgr/fgr/mgr/Pot/ggr/Agr/yw/wot/Sw/tie. Strong ETag/last-modified resume validators, range checks, partial cleanup, streaming progress/backpressure, resumed-length/SHA256 checks, atomic placement and bounded Windows transient retry.

The build injects shipped retry/clock/error/telemetry dependencies and error constructors to retain original domain-error identity. It does not reconstruct the remote release feed, complete updater orchestrator or native platform installers.

Six differential tests in `tests/update.test.mjs` pass against AST-extracted shipped implementations: idle policy/periodic order, validators/ranges, fresh/resumed downloads with bytes/hash/progress/requests/cleanup, negative range/hash failures, Windows placement retry and real loopback HTTP feed route/status/ZIP behavior. Fetches are controlled local fixtures; no application update is installed. Cancellation/interrupted-stream behavior is reconstructed but not comprehensively runtime-verified by these scenarios.
