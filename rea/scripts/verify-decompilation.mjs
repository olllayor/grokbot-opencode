import { readFile, readdir, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";
import { parse } from "@babel/parser";
const hash = (data) => createHash("sha256").update(data).digest("hex");
// Archived manifests retain their original paths; resolve them in the current layout.
const local = (p) => {
  const relative = p.startsWith('/workspace/') ? p.slice('/workspace/'.length) : p;
  return relative.replace(/^(recovered|decompiled|evidence)\//, 'rea/$1/');
};
const names = (await readdir("rea/decompiled/renderer")).filter(
  (name) => !name.startsWith("."),
);
const rows = [];
const syntaxFailures = [];
for (const name of names) {
  let m;
  try {
    m = JSON.parse(
      await readFile(
        path.join("rea/decompiled/renderer", name, "manifest.json"),
        "utf8",
      ),
    );
  } catch (error) {
    if (error.code === "ENOENT") continue;
    throw error;
  }
  const paths = [
    m.source.published_copy,
    ...m.modules.flatMap((module) => [
      module.artifact,
      ...(module.source_map ? [module.source_map] : []),
    ]),
  ];
  if (hash(await readFile(local(m.source.path))) !== m.source.sha256)
    throw Error("Original source digest mismatch: " + name);
  for (const artifact of paths) {
    const data = await readFile(local(artifact.path));
    if (data.length !== artifact.bytes || hash(data) !== artifact.sha256)
      throw Error("Derived artifact digest mismatch: " + artifact.path);
  }
  for (const module of m.modules) {
    try {
      parse(await readFile(local(module.artifact.path), "utf8"), {
        sourceType: "unambiguous",
        plugins: ["jsx"],
        allowUndeclaredExports: true,
      });
    } catch (error) {
      syntaxFailures.push({
        file: local(module.artifact.path),
        reason: error.reasonCode,
        message: error.message,
        line: error.loc?.line,
        column: error.loc?.column,
      });
    }
    if (module.source_map) {
      const map = JSON.parse(
        await readFile(local(module.source_map.path), "utf8"),
      );
      if (map.version !== 3) throw Error("Invalid source map version");
    }
    for (const range of module.provenance.byte_ranges)
      if (
        range.start < 0 ||
        range.end > m.source.bytes ||
        range.end < range.start
      )
        throw Error("Invalid extraction range");
  }
  rows.push({
    file: name + ".js",
    status: m.status,
    total: m.total,
    failed: m.failed,
    modules: m.modules.length,
    sourceMaps: m.modules.filter((module) => module.source_map).length,
    strategy: m.reported_strategy,
    format: m.reported_format,
    warnings: m.warnings.length,
    originalSha256: m.source.sha256,
  });
}
const expected = (await readdir("rea/recovered/dist/renderer/assets")).filter(
  (name) => name.endsWith(".js"),
);
const missing = expected.filter(
  (file) => !rows.some((row) => row.file === file),
);
const repairedSyntaxCandidates = [];
for (const repairName of ["chunk-index-CPur7w6O", "chunk-pdf-CyhaVadp"]) {
  try {
    const repair = JSON.parse(
      await readFile(`rea/decompiled/repairs/${repairName}/repair.json`, "utf8"),
    );
    if (
      hash(await readFile(local(repair.input))) !== repair.inputSha256 ||
      hash(await readFile(local(repair.original))) !== repair.originalSha256 ||
      hash(await readFile(local(repair.output))) !== repair.outputSha256
    )
      throw Error("Repair artifact digest mismatch");
    const ast = parse(await readFile(local(repair.output), "utf8"), {
      sourceType: "module",
      plugins: ["jsx"],
      allowUndeclaredExports: true,
    });
    const names = ast.program.body
      .filter((node) => node.type === "ExportNamedDeclaration")
      .flatMap((node) =>
        node.declaration
          ? node.declaration.type === "VariableDeclaration"
            ? node.declaration.declarations.map((item) => item.id.name)
            : [node.declaration.id.name]
          : node.specifiers.map(
              (item) => item.exported.name ?? item.exported.value,
            ),
      )
      .sort();
    if (
      repair.publicExportNames &&
      JSON.stringify(names) !== JSON.stringify(repair.publicExportNames)
    )
      throw Error("Repair export-name set mismatch");
    repairedSyntaxCandidates.push({
      input: repair.input,
      output: repair.output,
      status: repair.status,
      outputSha256: repair.outputSha256,
      runtimeEquivalence: "unknown",
    });
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
}
const unresolvedSyntaxFailures = syntaxFailures.filter(
  (failure) =>
    !repairedSyntaxCandidates.some((repair) => repair.input === failure.file),
);
const summary = {
  bundlesVerified: rows.length,
  bundlesExpected: expected.length,
  missing,
  modules: rows.reduce((sum, row) => sum + row.modules, 0),
  sourceMaps: rows.reduce((sum, row) => sum + row.sourceMaps, 0),
  failures: rows.reduce((sum, row) => sum + row.failed, 0),
  warnings: rows.reduce((sum, row) => sum + row.warnings, 0),
  syntaxFailures,
  repairedSyntaxCandidates,
  unresolvedSyntaxFailures,
  runtimeEquivalence: "unknown",
  rows,
};
await writeFile(
  "rea/evidence/wakaru/verification.json",
  JSON.stringify(summary, null, 2) + "\n",
);
console.log(JSON.stringify({ ...summary, rows: undefined }, null, 2));
if (missing.length || summary.failures || unresolvedSyntaxFailures.length)
  process.exitCode = 1;
