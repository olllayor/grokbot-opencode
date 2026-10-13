# REA reconstruction workspace

Run commands from the repository root. `npm run rea:web`, `npm run rea:decompile`, and `npm run rea:verify-decompiled` use this folder.

- `recovered/`: original extracted application reference.
- `decompiled/`: REA/Wakaru output and separately verified repairs.
- `evidence/`: analysis records, extraction fixtures, and reconstruction verification helpers.
- `scripts/`: REA automation, extraction, and TypeScript port tooling.
- `tools/`: pinned Linux decompiler environment.

Archived evidence and decompiler manifests preserve their original recorded paths and hashes. Verification resolves those paths into this layout. Application TypeScript remains in `src/`; application build and launch scripts remain in the root `scripts/` folder.
