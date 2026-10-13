import { readFile, mkdir } from 'node:fs/promises';
import { build } from 'esbuild';
const manifest = JSON.parse(await readFile('src/reconstructed-renderer/entry-manifest.json', 'utf8'));
const output = process.argv[2] ?? 'build/reconstructed-renderer';
await mkdir(output, { recursive: true });
for (const entry of manifest.entries) await build({ entryPoints: [entry.typescript], outfile: `${output}/${entry.file}`, bundle: true, format: 'esm', platform: 'browser', target: 'es2023', sourcemap: true, plugins: [{ name: 'preserve-runtime-assets', setup(api) { api.onResolve({ filter: /^\.\// }, args => args.kind === 'entry-point' || args.path.endsWith('debug-metadata.js') ? undefined : { path: args.path, external: true }); } }] });
console.log(`Compiled ${manifest.entries.length} renderer asset replacements to ${output}.`);
