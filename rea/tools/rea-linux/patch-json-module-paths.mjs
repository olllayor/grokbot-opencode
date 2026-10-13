import { readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
const file =
  "/opt/rea/node_modules/rea-agents/dist/javascript/recovery/WakaruReport.js";
const before = await readFile(file, "utf8");
const needle = "!/\\.(?:js|mjs|cjs)$/u.test(path)";
if (before.split(needle).length !== 2)
  throw Error("REA 6.3.0 adapter patch does not match expected source");
const after = before.replace(needle, "!/\\.(?:js|mjs|cjs|json)$/u.test(path)");
await writeFile(file, after);
const sha256 = (s) => createHash("sha256").update(s).digest("hex");
await writeFile(
  "/opt/rea/local-adapter-patch.json",
  JSON.stringify(
    {
      reaVersion: "6.3.0",
      file,
      beforeSha256: sha256(before),
      afterSha256: sha256(after),
      change:
        "Allow safe relative .json filenames for modules explicitly reported as JavaScript by Wakaru. Path normalization, path registry, artifact-set validation, provenance and UTF-8 range checks remain in force.",
    },
    null,
    2,
  ) + "\n",
);
