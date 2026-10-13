# Main-process settings and preferences TypeScript migration

Source artifact: `rea/recovered/dist/electron-main/main-core.cjs`, SHA-256 `e7728657b60ce27ee3c3334a9ab6be41352b74e35c364fbfa2613ae3671538e0`. `rea/evidence/main-core-readable.cjs` is the readable observation view; the extraction/verification scripts parse the actual original bundle directly.

## Authored executable scope

`src/reconstructed-main/settings.ts` exports the following strictly checked modules:

- `settings-contracts.ts`: durable desktop/account settings, user preferences, permission/model choices, file ownership/I/O, schema and dependency contracts.
- `settings-store.ts`: complete shipped `Dm` class behavior, including all public settings accessors/mutators, unreadable-file refusal and explicit restrictive overwrite, owner reporting, stable persistence, onboarding/team selection, account park/restore/forget, MCP instruction migration, notifications, per-machine permissions, auto-review, and sidebar section storage. This composes with the previously reconstructed `Bm` subclass.
- `settings-policy.ts`: default/account settings and normalization, permission ceilings, review truncation/deduplication limits, server/tool map filtering, folds, stable JSON and optional-string policies.
- `settings-schema.ts`: application settings/account/model schema declarations and legacy account-scope migration. Exact shipped Zod runtime is injected as a third-party vendor dependency; domain enum constants are explicit adapter inputs. The result crossing the vendor boundary is narrowed to the evidenced Settings contract. This replaces application schema declarations; it does not claim reconstruction of the third-party schema library.
- `settings-io.ts`: file reading, atomic-write host calls, exclusive nofollow corruption backups, 0600 permissions, backup-content deduplication and timestamp collision handling. Secure root-bound reading (`Rl`) and the existing atomic filesystem writer (`En`) remain explicit host dependencies.
- `preferences.ts`: complete shipped `Um` theme lifecycle and `Lm` language service, deferred explicit theme changes, native theme/accent observation, preference error propagation, duplicate broadcast suppression, release-track visibility/management, durable owner deduplicated reporting.

`settings-store.ts` is a selective class reconstruction, not the bundle renamed to TypeScript. The source extraction helper preserves observed method algorithms, supplies explicit application contracts, replaces every closed-over app dependency with a named typed dependency, and replaces normalization/default/account policy with authored TypeScript modules. The original local variable names are retained inside this class to keep source correlation reviewable. There is no `ts-nocheck`, `ts-ignore`, or blanket `any` boundary.

## Integration

Machine-readable mappings: `src/reconstructed-main/integration.json`. The same mappings are exported by `scripts/main-ts-mapping.mjs`.

Target is program-scope bindings in `dist/electron-main/main-core.cjs`: `Dm`, `bm`, `Pm`, `Mee`, `hw`, `xT`, `Um`, `Lm`, `Om`, `Nee`, `TT`, `gw`, `kee`, `Sw`, `_w`, `fa`. They use namespace `__grokbotMain` compiled from `src/reconstructed-main/settings.ts`. Initializer and function selectors must match actual AST bindings; original unrelated bundled names are not globally rewritten. Existing `Bm` is retained as the previously typed subclass and receives the new base store.

The class extraction helper is `rea/scripts/main-ts-settings-extract.mjs`. It reads the shipped AST, emits only Dm with evidenced method parameter contracts and injected dependencies; it does not copy the whole bundled artifact into a TS file.

## Verification

`node scripts/main-ts-verify-settings.mjs` passes:

1. 270 operations against the actual shipped Dm class with identical injected I/O and deterministic schema fixtures. Five initial conditions cover absent, malformed, unsupported-version, duplicate-server and account/permission state. Result/error traces and every persisted byte are compared, including owner reporting and deduplicated refused writes. Explicit exception restoration and restrictive damaged-file overwrite are checked.
2. 48 schema acceptance/output cases execute the actual shipped Zod implementation, original settings schema and typed schema declarations. Coverage includes defaults, legacy scope migration, unsupported versions, selected-team catches, model trim validation, permission/enums, sidebar and account scopes, notifications and disabled tools.
3. Real temporary files compare exact backup names/content/permissions against original xT: content deduplication, exclusive timestamp collision and 0600 copies.
4. Shipped theme/language services and track/owner helpers compare observed state transitions, deferred themes, duplicate native updates, accent normalization, window background, language normalization/activation and event/log deduplication.

Standalone strict compilation passes:

`npx tsc --noEmit --strict --skipLibCheck --target ES2023 --module NodeNext --moduleResolution NodeNext src/reconstructed-main/settings.ts`

## Exact scope limits

This ledger concerns the settings/preferences responsibility only. Unrelated main-app orchestration, backend clients, worker and renderer modules are outside this pass. Vendor Zod, app enum/default data, existing secure-read and atomic-write primitives, error formatting/localized language resolution/theme colors and Electron native APIs are injected dependencies. Tests do not certify native GUI behavior, live managed policy changes, cross-process write races, or platform-specific filesystem implementations. Whole-project packaging and runtime validation are owned by the parent build integration.

## Integrated build validation

The build owner integrated this scope in `scripts/reconstruct.mjs` alongside the complete source-port layer and renderer/worker overrides. `node scripts/reconstruct.mjs` completed successfully after the port engine reported all 540 source units strictly checked and canonically equivalent after erasure. Output includes 8 main/preload/worker entrypoint overrides, 11 renderer asset entrypoint overrides, 162 binding replacements, and 6 typed aggregates. This broader source-port coverage does not recover upstream types and is distinct from the hand-reconstructed responsibility scope above.

The six AST-patched bundles retain composed maps to their `.cts`/`.mts` ported TypeScript sources. Original emitted JS is parsed before inserting adapter nodes, so suffix source positions remain correct. Generated adapter/replacement nodes carry no invented original locations. Maps and output hashes are recorded in the reconstruction manifest. The settings/worker selectors were independently checked against the original artifact AST before integration; all 39 existed, and both lazy class initializers had exactly one assignment in the expected program binding scope.

Packaging/signature and native runtime checks are separate parent-owned validation steps.
