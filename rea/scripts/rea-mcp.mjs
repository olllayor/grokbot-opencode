import { spawn } from "node:child_process";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { createInterface } from "node:readline";
import path from "node:path";

// An isolated stdio MCP connection: does not read or change client registrations.
const [
  tool = "binary_session",
  input = "{}",
  output = "rea/evidence/rea-session.json",
] = process.argv.slice(2);
const args = JSON.parse(
  input.startsWith("@") ? await readFile(input.slice(1), "utf8") : input,
);
const command = process.env.REA_LOCAL_ENTRY ? process.execPath : "npx";
const commandArgs = process.env.REA_LOCAL_ENTRY
  ? [process.env.REA_LOCAL_ENTRY, "mcp"]
  : ["-y", "rea-agents@6.3.0", "mcp"];
const child = spawn(command, commandArgs, {
  stdio: ["pipe", "pipe", "pipe"],
});
let sequence = 0;
const pending = new Map();
const stderr = [];
child.stderr.on("data", (chunk) => stderr.push(String(chunk)));
const lines = createInterface({ input: child.stdout });
lines.on("line", (line) => {
  let message;
  try {
    message = JSON.parse(line);
  } catch {
    return;
  }
  const waiter = pending.get(message.id);
  if (waiter) {
    pending.delete(message.id);
    message.error
      ? waiter.reject(new Error(JSON.stringify(message.error)))
      : waiter.resolve(message.result);
  }
});
child.on("exit", (code, signal) => {
  for (const waiter of pending.values())
    waiter.reject(
      new Error(
        `REA MCP exited (${code ?? signal}): ${stderr.join("").slice(-4000)}`,
      ),
    );
  pending.clear();
});
function send(method, params, notification = false) {
  const id = notification ? undefined : ++sequence;
  const request = {
    jsonrpc: "2.0",
    ...(id === undefined ? {} : { id }),
    method,
    params,
  };
  const response = notification
    ? Promise.resolve()
    : new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
  child.stdin.write(JSON.stringify(request) + "\n");
  return response;
}
const timeout = setTimeout(() => child.kill("SIGTERM"), 600_000);
try {
  const identity = await send("initialize", {
    protocolVersion: "2025-03-26",
    capabilities: {},
    clientInfo: { name: "grokbot-reconstruction", version: "1.0.0" },
  });
  await send("notifications/initialized", {}, true);
  const catalog = await send("tools/list", {});
  const declared = catalog.tools.find((item) => item.name === tool);
  if (!declared) throw new Error(`REA server does not advertise ${tool}`);
  const result = await send("tools/call", { name: tool, arguments: args });
  await mkdir(path.dirname(output), { recursive: true });
  await writeFile(
    output,
    JSON.stringify(
      { server: identity.serverInfo, tool, arguments: args, result },
      null,
      2,
    ) + "\n",
  );
  if (process.env.REA_EXPORT_BUNDLE) {
    const exported = await send("tools/call", {
      name: "export_evidence_bundle",
      arguments: {
        path: path.resolve(process.env.REA_EXPORT_BUNDLE),
        overwrite: true,
      },
    });
    await writeFile(
      output.replace(/\.json$/, "-export.json"),
      JSON.stringify(exported, null, 2) + "\n",
    );
  }
  const evidence =
    result.structuredContent ??
    result.content
      ?.filter((item) => item.type === "text")
      .map((item) => {
        try {
          return JSON.parse(item.text);
        } catch {
          return item.text;
        }
      });
  const primary = Array.isArray(evidence) ? evidence[0] : evidence;
  console.log(
    JSON.stringify(
      {
        output,
        server: identity.serverInfo,
        isError: result.isError ?? false,
        evidence_id: primary?.evidence_id,
        statistics: primary?.normalized_result?.statistics,
        status: primary?.normalized_result?.status,
        exit: primary?.normalized_result?.exit,
        limitations:
          primary?.limitations ?? primary?.normalized_result?.limitations,
        error: primary?.error,
      },
      null,
      2,
    ),
  );
} finally {
  clearTimeout(timeout);
  child.stdin.end();
  child.kill("SIGTERM");
}
