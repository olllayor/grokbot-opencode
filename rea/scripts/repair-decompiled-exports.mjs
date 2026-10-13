import { readFile, writeFile, mkdir } from "node:fs/promises";
import { parse } from "@babel/parser";
import generateModule from "@babel/generator";
import { createHash } from "node:crypto";
const generate = generateModule.default ?? generateModule;
const source = "rea/recovered/dist/renderer/assets/chunk-index-CPur7w6O.js";
const raw = "rea/decompiled/renderer/chunk-index-CPur7w6O/modules/entry.js";
const directory = "rea/decompiled/repairs/chunk-index-CPur7w6O";
const original = await readFile(source, "utf8");
const recovered = await readFile(raw, "utf8");
const options = {
  sourceType: "module",
  plugins: ["jsx"],
  allowUndeclaredExports: true,
};
const originalAst = parse(original, options);
const ast = parse(recovered, { ...options, errorRecovery: true });
if (ast.errors.some((error) => error.reasonCode !== "DuplicateExport"))
  throw Error("Unexpected parser error; refusing focused repair");
const originalExports = originalAst.program.body.filter((node) =>
  node.type.startsWith("Export"),
);
if (
  originalExports.some(
    (node) =>
      node.type !== "ExportNamedDeclaration" || node.declaration || node.source,
  )
)
  throw Error("Original export form differs");
const getNames = (nodes) =>
  nodes
    .flatMap((node) =>
      node.specifiers.map(
        (specifier) => specifier.exported.name ?? specifier.exported.value,
      ),
    )
    .sort();
const specifierLists = ast.program.body.filter(
  (node) => node.type === "ExportNamedDeclaration" && !node.declaration,
);
const finalList = specifierLists.at(-1);
const originalNames = new Set(getNames(originalExports));
const explicitNames = new Set(getNames([finalList]));
const stripped = [];
let removedInferredSpecifierLists = 0;
const namesOfDeclaration = (node) =>
  node.type === "VariableDeclaration"
    ? node.declarations.map((item) => item.id.name)
    : [node.id?.name];
ast.program.body = ast.program.body.flatMap((node) => {
  if (node.type !== "ExportNamedDeclaration") return [node];
  if (!node.declaration) {
    if (node === finalList) return [node];
    removedInferredSpecifierLists++;
    return [];
  }
  const names = namesOfDeclaration(node.declaration);
  if (
    names.every((name) => originalNames.has(name) && !explicitNames.has(name))
  )
    return [node];
  stripped.push({ start: node.start, end: node.end });
  return [node.declaration];
});
const repairedNames = ast.program.body
  .filter((node) => node.type === "ExportNamedDeclaration")
  .flatMap((node) =>
    node.declaration ? namesOfDeclaration(node.declaration) : getNames([node]),
  )
  .sort();
if (JSON.stringify([...originalNames].sort()) !== JSON.stringify(repairedNames))
  throw Error("Repair would change shipped export-name set");
const output = generate(
  ast,
  {
    sourceMaps: true,
    sourceFileName: "../../renderer/chunk-index-CPur7w6O/modules/entry.js",
  },
  recovered,
);
parse(output.code, options);
await mkdir(directory, { recursive: true });
await writeFile(directory + "/entry.js", output.code + "\n");
await writeFile(directory + "/entry.js.map", JSON.stringify(output.map) + "\n");
const hash = (text) => createHash("sha256").update(text).digest("hex");
const report = {
  status: "syntax-and-export-shape-verified",
  input: raw,
  inputSha256: hash(recovered),
  original: source,
  originalSha256: hash(original),
  output: directory + "/entry.js",
  outputSha256: hash(output.code + "\n"),
  removedInferredDeclarationExports: stripped.length,
  removedInferredSpecifierLists,
  publicExportNames: getNames(originalExports),
  rawRecoveryUnchanged: true,
  runtimeEquivalence: "unknown",
  reason:
    "Wakaru added declaration exports to an extracted entry module that retains the shipped export-specifier list. Some inferred names collide with shipped aliases. Remove inferred export wrappers and earlier inferred specifier lists while retaining the final shipped aliases and declarations that represent shipped direct exports. Verify the complete public export-name set matches the original.",
};
await writeFile(
  directory + "/repair.json",
  JSON.stringify(report, null, 2) + "\n",
);
console.log(
  JSON.stringify(
    {
      status: report.status,
      removedInferredDeclarationExports: stripped.length,
      removedInferredSpecifierLists,
      publicExports: report.publicExportNames.length,
    },
    null,
    2,
  ),
);
