# Dune RPC reconstruction

REA MCP evidence: `rea/evidence/rea-rpc-server.json`, Evidence ID `ev_cb14ec9ee603c453c432903820a2c8986498475fd85d330b5affc83215fbb6d8`. The input is an inert scoped extraction of shipped `main-app.cjs` functions, with original file SHA-256 and exact character ranges in `src/rpc/shipped-rea/evidence/provenance.json`. REA parsed 1,057 AST nodes across one JavaScript file, with complete coverage inside this extraction. Its generic Electron recognizer reported zero IPC findings because these functions call a transport abstraction, not Electron directly. This result establishes static parsing of the scoped artifact, not runtime behavior or complete application coverage.

`src/rpc/schema.ts` reconstructs the Standard Schema v1 adapter and field combinators. Object schemas omit undeclared fields and absent optional fields; number schemas reject non-finite values; errors retain paths and observed type descriptions. `src/rpc/server.ts` reconstructs per-method trust policies, validation/transform handling, envelopes, probes, broadcast channels and idempotent handler removal.

AST mapping from shipped main-app symbols:

| Shipped symbol | Typed export or function |
| --- | --- |
| `w` | `rpcMethod` |
| `Po` | `declareEdge` |
| `f4` | `failureFactory` |
| `m4` | `isEdgeFailure` |
| `Sl` | `trustHandlerFactory` (returns `trustHandlers`) |
| `w0t`, `NRe`, `T0t` | `methodChannel`, `eventChannel`, `probeChannel` |
| `g4`, `R0t`, `x0t`, `xh` | private `truncate`, `issuePath`, `issueDetail`, `validatorFailure` |
| `M0t` | `validateArguments` |
| `P0t` | `probeMethod` |
| `B0t` | `serveMethods` |
| `D0t`, `_l` | method normalization inside `serveEdge`, `serveEdge` |
| `ar`, `xC` | `EdgeCallFailure`, `EdgeTrustPolicyMissingError` |

Core combinators were corroborated against the preload's inline copies (`K`, `s`, `P`, `y`, `p`, `c`, `W`, `I`, `R`, `m`, `se`, `De`, `ln`, `f`, `te`). The packaged main-app imports the same primitive schema API through its external module slot; that dependency was not independently executed.

Validation: strict TypeScript checking passes. `node src/rpc/verify-reconstruction.mjs` compares extracted original functions against the typed reconstruction in controlled VM contexts: 22 validator-envelope/probe/registration outcomes, trust denial before handler invocation, argument transformation, broadcast names, and idempotent teardown. The preload's separate differential check confirms all 307 public desktop functions and nine representative IPC argument traces.

Limits: the shared protocol and preload request declarations are executable. Application-specific transforms use a typed injected adapter over extracted shipped domain predicates, with provenance in `src/rpc/domain-provenance.json`; their original TypeScript source remains unavailable. Full application handlers, native Electron sender provenance and actual backend services remain owned by the recovered main runtime until wired to typed replacements. A trust predicate or denial-report callback that throws escapes the handler before the handler catch, matching the observed implementation. Registering later methods can leave earlier handlers installed when an undeclared trust policy throws; the reconstruction preserves that ordering rather than introducing unobserved rollback.

`src/rpc/declarations.ts` provides executable `mainDeclaration` and `mountDeclaration`, combining typed reconstructed schema primitives with the isolated pure-domain adapter. The preload developer-tools hook consumes those declarations. Every non-null request schema passed 3,312 differential validation comparisons against the shipped preload.
