# Renderer TypeScript reconstruction

Status: partial. The user's requested complete application conversion is not achieved by this tranche. Nothing here claims original TS names, interfaces, project architecture, or UI verification.

Eleven whole renderer asset chunks now have authored, executable TypeScript replacements under `src/reconstructed-renderer/`. They cover secret validation and localized failure messages; MCP connector status text/tone; focus destination selection; cloud artifact open telemetry; team-policy retained snapshots and lock rules; team-agent ranking, Unicode owner labels and search; keyboard-driven active option scrolling; the card checkbox React component; and the complete credential-provider hooks, renewal/mint lifecycle, approval functions, pending state and error classification; and listener integration hooks, Slack linking, repository access and connect/reconnect/disconnect actions.

The credential reconstruction preserves subtle shipped behavior, including the difference between a rejected mint promise and an unsuccessful mint response that throws in a fulfillment callback. Hooks retain their cache indices, memo object identity, callback closure dependencies, store observation and state sequencing. The checkbox uses the existing React JSX runtime directly and preserves component debug field, classes, optional prop defaults, element tree and memoized object identity. Neither React itself nor design-system component dependencies are replaced.

## Inputs and exact integration

Original behavior reference: `rea/recovered/dist/renderer/assets/*.js`. REA/Wakaru-readable context: corresponding `rea/decompiled/renderer/*/modules/bundle.js`. The original shipped executable remains the differential oracle; raw Wakaru modules are not blindly substituted.

`src/reconstructed-renderer/entry-manifest.json` inventories every one of the 482 renderer JS assets: bytes, SHA256, exact exported names, typed entry mapping or explicit residual record. The manifest is machine-readable for root build integration. It lists 471 remaining assets, rather than counting dependencies as reconstructed application source.

Build with `node scripts/renderer-ts-build.mjs <asset-output-directory>`. This compiles each typed entry to the exact shipped filename, bundles only the authored debug metadata helper, and preserves original relative import URLs to dependency assets. Debug IDs remain registered; source-map stacks necessarily refer to rebuilt locations.

## Verification

`node scripts/renderer-ts-verify.mjs` passes 240 differential comparisons over eleven exact export surfaces, including:

- Secret ASCII name and UTF8 byte-length limits, reserved names/prefixes, localization descriptors.
- All known status values, unknown values, prototype property names.
- Focus search and fallback ordering; keyboard scroll marking, null refs and consumption.
- Team ranks, timestamps, owner visibility/name normalization and search fields.
- All policy statuses with retained previous values and memo reference identity.
- Credential snapshot/loading/failure states and successful, unsuccessful and rejected mint/renewal requests, token and account request construction, held connection completion and refresh traces.
- Listener integration retained snapshots, Slack linking, repository fallback stores and OAuth reconnect command arguments.
- Checkbox element tree/defaults, updates, component debug tag and reference identity.

Standalone strict checking passes with `tsc --noEmit --strict --skipLibCheck --module NodeNext --moduleResolution NodeNext --target ES2023 src/reconstructed-renderer/*.ts`. No suppression directives, unchecked source files or implicit-any conversion.

## Dynamic boundaries and remaining work

Runtime declaration contracts describe the exact exports consumed from retained assets. Domain types unavailable in these bundles (credential directory data, readiness payload, mint result, permission ceiling, review rules and backend command arguments) remain explicit `unknown` boundaries. They are not asserted to be recovered original schemas. React memo cache storage is `unknown[]` with localized assertions corresponding to the written slots; DOM element types and credential state unions are explicit.

The inventory marks files containing vendor content markers as `vendor-or-mixed-content-review-needed`. That category is provisional: eager app/UI modules can contain bundled libraries. It does not excuse application logic hidden inside a mixed chunk. Others are explicitly `unreconstructed-application-or-unclassified`. Accurate separation requires per-module attribution, not filename guessing.

Major residuals include the 1.87 MB root renderer, 1.64 MB eager application services, 0.43 MB eager platform layer, document and agent screens, authorization and connector screens, protocol/backend clients, editor and rich document integrations. Third-party grammar definitions, Mermaid, PDF, spreadsheet, React and design dependencies should be separated and versioned as dependencies where attribution is established. TypeScript conversion of those application modules needs callsite-derived contracts and behavior checks. A bulk rename or generic pervasive-any converter would conceal that unfinished work.

Packaged authenticated renderer interaction and full UI acceptance were not exercised by this worker. The root build remains responsible for integrating the manifest and validating the complete application.
