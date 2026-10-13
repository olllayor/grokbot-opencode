import { readdir, readFile, writeFile } from 'node:fs/promises';
import { parse } from '@babel/parser';
import crypto from 'node:crypto';
const root = 'rea/recovered/dist/renderer/assets';
const replacements = {
 'chunk-provider-listener-integrations-CR9f28xA.js': 'provider-listener-integrations.ts',
 'chunk-provider-credentials-yP7QsOsy.js': 'provider-credentials.ts',
 'chunk-grok-bot-secret-problem-text-DKm2VrEb.js': 'secret-problem-text.ts',
 'chunk-mcp-connector-status-DhhAF8A6.js': 'mcp-connector-status.ts',
 'chunk-bot-template-details-focus-BkZ83BHB.js': 'details-focus.ts',
 'chunk-load-failure-copy-g-dfAdrV.js': 'load-failure-copy.ts',
 'chunk-cloud-agent-artifact-open-telemetry-Dl7Oj7Oq.js': 'cloud-artifact-telemetry.ts',
 'chunk-provider-team-policy-CBjUAi-4.js': 'provider-team-policy.ts',
 'chunk-team-agent-rows-BhWKSjqA.js': 'team-agent-rows.ts',
 'chunk-use-active-option-scroll-B1hXdW5d.js': 'active-option-scroll.ts',
 'chunk-card-check-row-BW31sDfY.js': 'card-check-row.ts',
};
const files = [];
for (const file of (await readdir(root)).filter(f => f.endsWith('.js')).sort()) {
 const source = await readFile(`${root}/${file}`, 'utf8');
 const ast = parse(source, { sourceType: 'module' });
 const exports = [];
 for (const node of ast.program.body) {
  if (node.type === 'ExportNamedDeclaration') {
   for (const specifier of node.specifiers) exports.push(specifier.exported.name ?? specifier.exported.value);
   if (node.declaration?.id) exports.push(node.declaration.id.name);
   for (const declaration of node.declaration?.declarations ?? []) if (declaration.id.type === 'Identifier') exports.push(declaration.id.name);
  } else if (node.type === 'ExportDefaultDeclaration') exports.push('default');
 }
 // Content markers establish likely dependencies; no name-only grammar assumptions.
 const vendorMarker = /scopeName:\s*["'](?:source|text)\.|name:\s*["'][^"']+["'],aliases:|mermaid|pdfjs|PDFJS|react\.production|@license|d3-|CodeMirror/;
 const category = replacements[file] ? 'reconstructed-application' : vendorMarker.test(source) ? 'vendor-or-mixed-content-review-needed' : 'unreconstructed-application-or-unclassified';
 files.push({ file, bytes: Buffer.byteLength(source), sha256: crypto.createHash('sha256').update(source).digest('hex'), exports: exports.sort(), category, ...(replacements[file] ? { typescript: `src/reconstructed-renderer/${replacements[file]}` } : {}) });
}
await writeFile('src/reconstructed-renderer/entry-manifest.json', JSON.stringify({ version: 1, targetRoot: root, status: 'partial', externalImportPolicy: 'Preserve original relative runtime asset imports; bundle authored debug metadata internally.', entries: files.filter(f => f.typescript), residuals: files.filter(f => !f.typescript), counts: { total: files.length, reconstructed: files.filter(f => f.typescript).length, residual: files.filter(f => !f.typescript).length } }, null, 2)+'\n');
console.log(`Inventoried ${files.length} bundles; ${Object.keys(replacements).length} executable typed replacements; ${files.length-Object.keys(replacements).length} explicit residuals.`);
