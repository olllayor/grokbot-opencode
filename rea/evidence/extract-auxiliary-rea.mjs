import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { parse } from "@babel/parser";
import generateModule from "@babel/generator";
const generate = generateModule.default ?? generateModule;
const output = "rea/evidence/rea-input/auxiliary-controllers";
fs.mkdirSync(output, { recursive: true });
const provenance = [];
function extract(name, selected) {
  const file = `rea/recovered/dist/electron-preload/preload-${name}.cjs`;
  const source = fs.readFileSync(file, "utf8");
  const ast = parse(source);
  const nodes = ast.program.body.flatMap((node) =>
    node.type === "FunctionDeclaration" && selected.has(node.id.name)
      ? [node]
      : node.type === "VariableDeclaration"
        ? node.declarations
            .filter((declaration) => selected.has(declaration.id.name))
            .map((declaration) => ({ ...node, declarations: [declaration] }))
        : [],
  );
  fs.writeFileSync(
    path.join(output, `${name}-controllers.cjs`),
    nodes.map((node) => generate(node).code).join("\n") + "\n",
  );
  provenance.push({
    source: file,
    sha256: createHash("sha256").update(source).digest("hex"),
    extraction:
      "inert AST-selected top-level declarations; dependencies may be deliberately excluded",
    selectedDeclarations: [...selected],
  });
}
extract(
  "vnc",
  new Set([
    "de",
    "rn",
    "on",
    "pn",
    "fn",
    "M",
    "Tn",
    "Tt",
    "xt",
    "wt",
    "Ct",
    "It",
    "Mt",
    "At",
    "Ot",
    "wn",
  ]),
);
extract("meeting", new Set(["V", "R", "re", "ie", "z", "J"]));
const webview = "rea/recovered/dist/electron-preload/preload-webview.cjs";
fs.copyFileSync(webview, path.join(output, "webview-entry.cjs"));
provenance.push({
  source: webview,
  sha256: createHash("sha256").update(fs.readFileSync(webview)).digest("hex"),
  extraction: "complete original inert entrypoint",
});
fs.writeFileSync(
  path.join(output, "provenance.json"),
  JSON.stringify(
    {
      scope: "auxiliary-controller-reconstruction",
      nonExecution: true,
      provenance,
    },
    null,
    2,
  ) + "\n",
);
