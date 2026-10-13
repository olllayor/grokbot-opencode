# Executable TypeScript source ports

The original ASAR JavaScript is the semantic reference. The port generator builds a TypeScript AST from those exact files rather than relying on lossy decompiler transformations. It adds explicit parameter, binding, field and return annotations, type-only ambient declarations, and type assertions, plus small control-flow transformations whose equivalence is checked. Bindings with a primitive initializer and no statically observed reassignment receive string, number or boolean annotations; unknown application, library and global boundaries use explicit `any`. This is a complete executable source port when the manifest covers every artifact, not recovery of the unavailable upstream TypeScript types or module names.

Every file is checked with strict TypeScript, independently as a module. Imports are checked through explicit dynamic declaration boundaries, and each referenced artifact in the inventory is independently checked. The checker does not skip the body of any executable reference file. This checks TypeScript syntax and explicit boundaries; `any` does not prove domain correctness. The authored reconstructed modules supply more precise types where the behavior has been established.

Before canonicalization, initialized for-in declarations are rejected. Catch aliases also require a manual reconstruction rather than being silently renamed or moved.

The manifest records original byte hashes, generated TypeScript byte hashes, canonical erased JavaScript AST hashes, primitive counts, dynamic annotation/assertion counts, ambient names and import-boundary names. Generation aborts on any strict diagnostic or mismatched erased AST. Verification can recheck all bodies and ASTs without regenerating source.

Type erasure uses esbuild with the original module form and import references preserved. Both original and erased JavaScript first pass through the same esbuild syntax canonicalization. AST equality then permits these documented normalizations:

- Ignored operands in comma expressions may be wrapped in `void`, which preserves operand evaluation and the final value. This makes the original JavaScript comma idioms acceptable to TypeScript.
- Contiguous logical operators are normalized by associativity, preserving the evaluation order and short-circuit behavior.
- Printer-inserted singleton blocks around nested conditionals or loops are normalized when the wrapper has no directives or direct bindings.
- `var` declarations in `for...in` headers are hoisted without initialization to their existing function, static-block or program scope. The loop assigns the same binding; the canonical comparison verifies each scope has the same var-binding set and unchanged evaluated expressions. Catch parameter aliasing and initialized for-in declarations are explicitly rejected. Global var visibility and static-block scope are covered by regression fixtures.
- A getter without a value-returning statement may receive a final `return void 0`; this has the same undefined result as falling through. The canonical comparison removes only a final getter return of a pure numeric-literal void expression.
- AST metadata and object-key serialization order are excluded from comparison.

Runtime fixtures verify function arity, constructor/prototype identity behavior, getters, inheritance and private fields, method receivers, direct eval, comma evaluation, loops, catch bindings and class field initialization order. AST equality supports preservation of unexercised paths, but is not a substitute for authenticated UI acceptance or native integration tests.

Commands:

```sh
node --max-old-space-size=6144 rea/scripts/ts-port-tree.mjs recovered src/ported
node --max-old-space-size=6144 rea/scripts/ts-port-verify.mjs recovered src/ported full
node rea/scripts/ts-port-test.mjs
```
