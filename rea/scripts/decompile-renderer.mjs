import { readdir, mkdir, readFile, writeFile, access } from "node:fs/promises";
import { createReaSession } from "./rea-session.mjs";

import path from "node:path";

const root = process.cwd();
const source = path.join(root, "rea/recovered/dist/renderer/assets");
const output = path.join(root, "rea/decompiled/renderer");
await mkdir(output, { recursive: true });
await mkdir("rea/evidence/wakaru", { recursive: true });
const files = (await readdir(source))
  .filter((file) => file.endsWith(".js"))
  .sort(
    (a, b) =>
      Number(b.startsWith("index")) - Number(a.startsWith("index")) ||
      a.localeCompare(b),
  );
let outcomes = [];
try {
  outcomes = JSON.parse(
    await readFile("rea/evidence/wakaru/outcomes.json", "utf8"),
  );
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}
let adapterPatch = null;
try {
  adapterPatch = JSON.parse(
    await readFile("/opt/rea/local-adapter-patch.json", "utf8"),
  );
  await writeFile(
    "rea/evidence/wakaru/adapter-patch.json",
    JSON.stringify(adapterPatch, null, 2) + "\n",
  );
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}
let operations = 0;
const session = await createReaSession();
try {
  for (const file of files) {
    const name = file.replace(/\.js$/, "");
    const destination = path.join(output, name);
    const report = path.join(root, "rea/evidence/wakaru", name + ".json");
    try {
      await access(path.join(destination, "manifest.json"));
      console.log("Existing output, skipping: " + file);
      continue;
    } catch {}
    const args = {
      path: path.join(source, file),
      output_directory: destination,
      extraction_mode: "structural",
      rewrite_level: "standard",
    };
    const result = await session.call("recover_javascript_sources", args);
    operations++;
    const wrapper = {
      server: session.identity.serverInfo,
      adapterPatch,
      tool: "recover_javascript_sources",
      arguments: args,
      result,
    };
    await writeFile(report, JSON.stringify(wrapper, null, 2) + "\n");
    const evidence =
      wrapper.result.structuredContent ??
      JSON.parse(
        wrapper.result.content.find((item) => item.type === "text").text,
      );
    const row = {
      file,
      isError: wrapper.result.isError ?? false,
      evidenceId: evidence.evidence_id,
      error: evidence.error,
    };
    outcomes = outcomes.filter((previous) => previous.file !== file);
    outcomes.push(row);
    console.log(JSON.stringify(row));
    await writeFile(
      "rea/evidence/wakaru/outcomes.json",
      JSON.stringify(outcomes, null, 2) + "\n",
    );
    if (row.isError && evidence.error?.details?.reported_limits?.evidence_id) {
      await session.call("export_evidence_bundle", {
        path: report.replace(".json", "-canonical.json"),
        overwrite: true,
      });
    }
    if (row.isError && !evidence.error?.details?.reported_limits?.evidence_id)
      throw new Error(
        "Recovery failed: " + file + " " + JSON.stringify(evidence.error),
      );
  }

  if (operations > 0) {
    const exported = await session.call("export_evidence_bundle", {
      path: path.join(root, `rea/evidence/wakaru/rea-canonical-${Date.now()}.json`),
      overwrite: true,
    });
    await writeFile(
      "rea/evidence/wakaru/rea-export.json",
      JSON.stringify(exported, null, 2) + "\n",
    );
  }
} finally {
  session.close();
}
