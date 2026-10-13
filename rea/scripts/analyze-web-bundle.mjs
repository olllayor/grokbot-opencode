import { spawn, execFile } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { promisify } from "node:util";
import path from "node:path";
import { fileURLToPath } from "node:url";
const run = promisify(execFile);
const root = path.dirname(path.dirname(path.dirname(fileURLToPath(import.meta.url))));
const profile = path.join(root, "build", "web-bundle-profile");
await mkdir(profile, { recursive: true });
const child = spawn(
  path.join(
    root,
    "node_modules",
    "electron",
    "dist",
    "Electron.app",
    "Contents",
    "MacOS",
    "Electron",
  ),
  [
    path.join(root, "rea/scripts", "web-bundle-harness.cjs"),
    `--user-data-dir=${profile}`,
    "--remote-debugging-address=127.0.0.1",
    "--remote-debugging-port=0",
  ],
  {
    detached: true,
    env: {
      ...process.env,
      GROKBOT_RENDERER_ROOT: path.join(root, "rea/recovered", "dist", "renderer"),
    },
    stdio: ["ignore", "pipe", "pipe"],
  },
);
let log = "",
  exit = null;
child.stdout.on("data", (part) => (log += String(part)));
child.stderr.on("data", (part) => (log += String(part)));
const exited = new Promise((resolve) =>
  child.on("exit", (code, signal) => {
    exit = { code, signal };
    resolve();
  }),
);
function evidence(wrapper) {
  const result = wrapper.result;
  return (
    result.structuredContent ??
    JSON.parse(result.content.find((item) => item.type === "text").text)
  );
}
async function call(tool, args, file) {
  const output = path.join(root, "rea/evidence", file);
  await run(
    process.execPath,
    [
      path.join(root, "rea/scripts", "rea-mcp.mjs"),
      tool,
      JSON.stringify(args),
      output,
    ],
    {
      cwd: root,
      timeout: 180000,
      maxBuffer: 1024 * 1024,
      env: {
        ...process.env,
        REA_EXPORT_BUNDLE: path.join(
          root,
          "rea/evidence",
          "rea-web-bundle-canonical.json",
        ),
      },
    },
  );
  const wrapper = JSON.parse(await readFile(output, "utf8"));
  const data = evidence(wrapper);
  if (wrapper.result.isError && data.error?.category !== "output")
    console.log("REA inline response: " + data.error?.code);
  if (
    wrapper.result.isError &&
    !data.error?.details?.reported_limits?.evidence_id
  )
    throw new Error(`${tool}: ${data.error?.message ?? JSON.stringify(data)}`);
  return data;
}
try {
  let endpoint;
  for (let attempt = 0; attempt < 60; attempt++) {
    const match = /DevTools listening on ws:\/\/127\.0\.0\.1:(\d+)\//.exec(log);
    if (match) {
      endpoint = `http://127.0.0.1:${match[1]}`;
      break;
    }
    if (exit)
      throw new Error(
        `Application exited before CDP (${JSON.stringify(exit)})`,
      );
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  if (!endpoint) throw new Error("No isolated-app CDP endpoint appeared");
  let discovery = [];
  for (let attempt = 0; attempt < 60; attempt++) {
    discovery = await fetch(`${endpoint}/json/list`, {
      signal: AbortSignal.timeout(10000),
    }).then((response) => response.json());
    if (discovery.length || exit) break;
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  await writeFile(
    path.join(root, "rea/evidence", "web-cdp-discovery.json"),
    JSON.stringify(discovery, null, 2) + "\n",
  );
  console.log(
    `Isolated CDP endpoint reports ${discovery.length} page targets.`,
  );
  const target = discovery.find(
    (item) => item.type === "page" && item.url.startsWith("http://127.0.0.1:"),
  );
  if (!target) throw new Error("Loopback web target missing");
  const bundle = await call(
    "analyze_web_bundle",
    {
      cdp_endpoint: endpoint,
      target_id: target.id,
      observation_ms: 4000,
      include_script_sources: true,
      fetch_source_maps: false,
    },
    "rea-web-bundle-http.json",
  );
  console.log(
    JSON.stringify(
      {
        operation: bundle.operation,
        evidenceId: bundle.evidence_id,
        limitations: bundle.limitations,
      },
      null,
      2,
    ),
  );
} finally {
  await writeFile(
    path.join(root, "rea/evidence", "web-bundle-inspection.log"),
    log,
  );
  try {
    process.kill(-child.pid, "SIGTERM");
  } catch {}
  await Promise.race([
    exited,
    new Promise((resolve) => setTimeout(resolve, 2000)),
  ]);
  try {
    process.kill(-child.pid, "SIGKILL");
  } catch {}
  child.stdout.destroy();
  child.stderr.destroy();
  child.unref();
}
