import { readFile, writeFile, mkdir } from "node:fs/promises";
import { parse } from "@babel/parser";
import generateModule from "@babel/generator";
import { createHash } from "node:crypto";
import vm from "node:vm";
import assert from "node:assert/strict";
const generate = generateModule.default ?? generateModule;
const source = "rea/recovered/dist/renderer/assets/chunk-pdf-CyhaVadp.js";
const raw = "rea/decompiled/renderer/chunk-pdf-CyhaVadp/modules/bundle.js";
const directory = "rea/decompiled/repairs/chunk-pdf-CyhaVadp";
const original = await readFile(source, "utf8"),
  recovered = await readFile(raw, "utf8");
const options = {
  sourceType: "module",
  plugins: ["jsx"],
  allowUndeclaredExports: true,
};
const originalAst = parse(original, { ...options, sourceFilename: source });
const ast = parse(recovered, {
  ...options,
  errorRecovery: true,
  sourceFilename: raw,
});
if (ast.errors.length !== 1 || ast.errors[0].reasonCode !== "VarRedeclaration")
  throw Error("Unexpected parser errors");
const originalClass = originalAst.program.body.find(
  (node) => node.type === "ClassDeclaration" && node.id.name === "Ci",
);
const derivedClass = ast.program.body.find(
  (node) => node.type === "ClassDeclaration" && node.id.name === "Ci",
);
if (
  !originalClass ||
  !derivedClass ||
  originalClass.superClass.name !== "ks" ||
  derivedClass.superClass.name !== "ks"
)
  throw Error("Expected PDF class unavailable");
const constructor = originalClass.body.body.find(
  (node) => node.kind === "constructor",
);
const index = derivedClass.body.body.findIndex(
  (node) => node.kind === "constructor",
);
if (!constructor || index < 0) throw Error("Expected constructor unavailable");
derivedClass.body.body[index] = structuredClone(constructor);
const output = generate(
  ast,
  { sourceMaps: true },
  { [raw]: recovered, [source]: original },
);
parse(output.code, options);
const instantiate = (node) =>
  vm.runInNewContext(generate(node).code + ";Ci", {
    ks: class {},
    structuredClone,
    G: (message) => {
      throw Error(message);
    },
  });
const originalType = instantiate(originalClass),
  candidateType = instantiate(derivedClass);
for (const transferEnabled of [false, true]) {
  const make = () => {
    const buffer = new ArrayBuffer(4);
    new Uint8Array(buffer).set([1, 2, 3, 4]);
    return {
      serializable: {
        map: new Map([["annotation", { buffer }]]),
        hash: "fixture",
        transfer: transferEnabled ? [buffer] : undefined,
      },
    };
  };
  const left = make(),
    right = make();
  const a = new originalType(left).serializable,
    b = new candidateType(right).serializable;
  assert.equal(a.hash, b.hash);
  assert.equal(a.map.size, b.map.size);
  assert.deepEqual(
    [...new Uint8Array(a.map.get("annotation").buffer)],
    [...new Uint8Array(b.map.get("annotation").buffer)],
  );
  assert.equal(
    left.serializable.map.get("annotation").buffer.byteLength,
    right.serializable.map.get("annotation").buffer.byteLength,
  );
  assert.notEqual(b.map, right.serializable.map);
}
await mkdir(directory, { recursive: true });
await writeFile(directory + "/bundle.js", output.code + "\n");
await writeFile(
  directory + "/bundle.js.map",
  JSON.stringify(output.map) + "\n",
);
const hash = (s) => createHash("sha256").update(s).digest("hex");
const report = {
  status: "syntax-and-constructor-differential-verified",
  input: raw,
  inputSha256: hash(recovered),
  original: source,
  originalSha256: hash(original),
  output: directory + "/bundle.js",
  outputSha256: hash(output.code + "\n"),
  rawRecoveryUnchanged: true,
  runtimeEquivalence: "unknown",
  constructorMatchesShippedAst: true,
  differentialCases: 2,
  reason:
    "Wakaru assigns both the incoming map and structured clone to const map. Replace only class Ci constructor with its exact shipped AST; preserve raw recovery. Verify clone/transfer behavior against the original class.",
};
await writeFile(
  directory + "/repair.json",
  JSON.stringify(report, null, 2) + "\n",
);
console.log(
  JSON.stringify({ status: report.status, differentialCases: 2 }, null, 2),
);
