import { spawn } from "node:child_process";
import { createInterface } from "node:readline";
export async function createReaSession() {
  const command = process.env.REA_LOCAL_ENTRY ? process.execPath : "npx";
  const args = process.env.REA_LOCAL_ENTRY ? [process.env.REA_LOCAL_ENTRY, "mcp"] : ["-y", "rea-agents@6.3.0", "mcp"];
  const child = spawn(command, args, {
    stdio: ["pipe", "pipe", "pipe"],
  });
  const pending = new Map();
  let sequence = 0;
  let diagnostics = "";
  child.stderr.on("data", (data) => {
    diagnostics = (diagnostics + data).slice(-4000);
  });
  const lines = createInterface({ input: child.stdout });
  lines.on("line", (line) => {
    let message;
    try {
      message = JSON.parse(line);
    } catch {
      return;
    }
    const waiter = pending.get(message.id);
    if (!waiter) return;
    pending.delete(message.id);
    clearTimeout(waiter.timer);
    message.error
      ? waiter.reject(Error(JSON.stringify(message.error)))
      : waiter.resolve(message.result);
  });
  child.on("exit", (code, signal) => {
    for (const waiter of pending.values()) {
      clearTimeout(waiter.timer);
      waiter.reject(Error(`REA exited ${code ?? signal}: ${diagnostics}`));
    }
    pending.clear();
  });
  function send(method, params, notification = false) {
    const id = notification ? undefined : ++sequence;
    const result = notification
      ? Promise.resolve()
      : new Promise((resolve, reject) => {
          const timer = setTimeout(() => {
            pending.delete(id);
            reject(Error("REA MCP request deadline"));
            child.kill("SIGTERM");
          }, 180000);
          pending.set(id, { resolve, reject, timer });
        });
    child.stdin.write(
      JSON.stringify({
        jsonrpc: "2.0",
        ...(id === undefined ? {} : { id }),
        method,
        params,
      }) + "\n",
    );
    return result;
  }
  const identity = await send("initialize", {
    protocolVersion: "2025-03-26",
    capabilities: {},
    clientInfo: { name: "grokbot-decompiler", version: "1.0.0" },
  });
  await send("notifications/initialized", {}, true);
  const catalog = await send("tools/list", {});
  if (!catalog.tools.some((tool) => tool.name === "recover_javascript_sources"))
    throw Error("Recovery tool not advertised");
  return {
    identity,
    call: (name, args) => send("tools/call", { name, arguments: args }),
    close() {
      child.stdin.end();
      child.kill("SIGTERM");
      lines.close();
    },
  };
}
