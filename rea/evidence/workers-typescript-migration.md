# Worker and helper TypeScript reconstruction

`src/reconstructed-workers/chrome-import-worker.ts` fully replaces the shipped Chrome cookie import worker. `chrome-cookie-import.ts` reconstructs its application behavior using explicit types and Node built-ins: contained-profile enumeration and symlink rejection, Local State validation, temporary SQLite copy/cleanup, cookie-row validation, Chromium time conversion, v10/v11 key derivation, CBC decrypt/padding/host-hash handling, macOS Finder copy fallback, safe-storage platform adapters, worker message dispatch and error serialization. No installed Chrome profile, keychain entry or actual cookie was read for verification.

`node scripts/workers-ts-verify.mjs` passes 318 synthetic differential cases against the original shipped functions. `node scripts/workers-ts-services-verify.mjs` passes 25 service composition and OnePassword policy differential cases. Neither test claims authenticated real-browser import or live OnePassword/meeting integration.

`meetings-service.ts` reconstructs the exported public MeetingsService composition and lifecycle through typed factories. Its concrete media runtime, window adapter, stream STT, backend and census implementations remain application JavaScript pending reconstruction, not vendor code.

`onepassword-policy.ts` reconstructs token validation, ConnectError detail projection, provisioning error classification and outcome mapping. `onepassword-connection.ts` additionally reconstructs the full connection service and default construction factory: bridge memoization, backend refresh/sync/disconnect, readiness preparation, concurrent mint ownership, token connect/reauth, vault selection/creation, generation validation, telemetry and delivery cleanup.

`onepassword-cli-runtime.ts` reconstructs the concrete CLI installer/runtime: launcher verification, candidate selection, managed version enforcement, bounded download timeout, staged exclusive file creation, sync/signature checks, abort before commit, atomic rename, verification after commit, cleanup and architecture selection. Existing archive parsing, byte download/process execution adapters and environment scrubber remain injected dependencies.

`onepassword-provisioning.ts` reconstructs the concrete provisioning bridge: readiness/managed upgrade, account/vault discovery, conflict handling, mutations and busy/cancellation fencing, credential mint arguments, delivery timeout and indeterminate-outcome fencing, verified launcher execution and JSON parsing. `onepassword-validation.ts` reconstructs semantic version selection, input/output schemas, account HTTPS URL validation, duplicate rejection, expiration policy and token validation.

Machine-readable integration is `src/reconstructed-workers/source-output-map.json`: one full worker entrypoint, one MeetingsService class, three concrete OnePassword service/runtime/bridge classes, the default construction function, eighteen policy/validation functions, and explicit retained dependencies. Build owner must wire these replacements; these files do not independently alter root build scripts. Chrome worker entrypoint has no bundled third-party dependencies. PDF worker is third-party PDF processing and belongs in retained vendor artifacts.

Sentry bundle debug-ID prologue and the generated NODE_PATH bootstrap are not authored worker business logic. The Chrome TS entrypoint does not need NODE_PATH initialization because all its imports are built-ins; packaging instrumentation can add a generated debug-ID prologue independently.

Additional final checks:

- `node scripts/workers-ts-connection-verify.mjs`: 21 connection/default-factory differential lifecycle scenarios.
- `node scripts/workers-ts-cli-verify.mjs`: 10 CLI lifecycle scenarios, including installed, install, malformed version, download error/timeout, unsupported platform/architecture, candidate access, launcher requirements and abort; all filesystem/process/download operations are mocks.
- `node scripts/workers-ts-provisioning-verify.mjs`: 18 provisioning lifecycle scenarios and 17 validation cases; no real credential is minted/delivered.
- `npx tsc --noEmit`: passes strict project typechecking.

CLI runtime and provisioning classes were originally assigned inside lazy initialization closures (`Ze` and `We`). Integration must replace their class RHS at the original initialization site; moving dependency evaluation earlier changes runtime initialization. Factory wrappers for hoisted functions resolve application dependencies at call time.
