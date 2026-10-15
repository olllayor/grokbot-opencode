import assert from "node:assert/strict";
import { execSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { OpenCodeAgentManager } from "../src/opencode/agent-manager.ts";
import { OpenCodeServerManager } from "../src/opencode/server-process.ts";

test("Live E2E Smoke Test against installed opencode binary", async () => {
  const serverManager = new OpenCodeServerManager({
    idleTtlMs: 1000,
  });

  const binary = serverManager.findBinary();
  console.log(`[smoke-test] Discovered opencode binary: ${binary}`);

  if (!fs.existsSync(binary) && binary === "opencode") {
    console.log("[smoke-test] opencode binary not installed; skipping live test.");
    return;
  }

  // Check version directly
  const versionOut = execSync(`"${binary}" --version`, { encoding: "utf8" }).trim();
  console.log(`[smoke-test] CLI version: ${versionOut}`);
  assert.ok(versionOut.includes("opencode v2."), `Expected v2, got: ${versionOut}`);

  // Connect to service (incumbent or spawned)
  const lease = serverManager.acquireLease("smoke-test");
  const conn = await serverManager.start();

  assert.ok(conn.url.startsWith("http://127.0.0.1:"), `Unexpected URL: ${conn.url}`);
  assert.ok(conn.client != null, "Client should be initialized");

  // Health and Version Probe
  const health = await serverManager.getHealthDetails(conn.url, conn.password, 3000);
  console.log("[smoke-test] Health probe result:", health);
  assert.equal(health.ok, true, "Server health check must report ok");
  assert.ok(health.version != null, "Version must be reported");

  // Test OpenCodeAgentManager against live server
  const tmpStore = path.join(os.tmpdir(), `smoke-sessions-${Date.now()}.json`);
  const events = [];
  const agentManager = new OpenCodeAgentManager(conn.client, (ev) => events.push(ev), {
    sessionStorePath: tmpStore,
  });

  // Query live agents roster
  const roster = await agentManager.getServerAgentRoster();
  console.log(`[smoke-test] Discovered ${roster.agents.length} live agents:`, roster.agents.map((a) => a.id));
  assert.equal(roster.status, "ready");
  assert.ok(roster.agents.length >= 1, "Roster must have at least 1 agent");

  // Verify default agent session creation
  const binding = await agentManager.ensureAgentSession("main-opencode-agent");
  assert.ok(binding.sessionId != null, "Session ID must be assigned by OpenCode server");
  assert.ok(binding.sessionId.startsWith("ses_"), `Session ID should start with ses_: ${binding.sessionId}`);
  console.log(`[smoke-test] Live session created: ${binding.sessionId}`);

  // Test updating agent model and cwd
  const updated = await agentManager.updateAgent({
    id: "main-opencode-agent",
    profile: {
      name: "GrokBot OpenCode",
      role: "Lead Software Architect",
      model: "big-pickle",
      cwd: process.cwd(),
    },
  });

  assert.equal(updated.agent.name, "GrokBot OpenCode");
  assert.equal(updated.agent.role, "Lead Software Architect");
  assert.equal(updated.agent.model, "big-pickle");
  assert.equal(updated.agent.cwd, process.cwd());

  // Verify persistence on disk
  assert.ok(fs.existsSync(tmpStore));
  const savedState = JSON.parse(fs.readFileSync(tmpStore, "utf8"));
  assert.equal(savedState["main-opencode-agent"]?.title, "GrokBot OpenCode");
  assert.equal(savedState["main-opencode-agent"]?.model, "big-pickle");
  assert.equal(savedState["main-opencode-agent"]?.cwd, process.cwd());

  // Clean up session if possible
  try {
    if (typeof conn.client?.v2?.session?.delete === "function") {
      await conn.client.v2.session.delete({ sessionID: binding.sessionId });
      console.log("[smoke-test] Live session cleaned up");
    }
  } catch {}

  // Release lease and stop
  lease.release();
  await serverManager.stop();

  // Verify no orphaned subprocess created by this manager
  assert.equal(serverManager.getPid(), null, "Subprocess should be null after stop");

  // Clean up tmpStore
  try {
    fs.unlinkSync(tmpStore);
  } catch {}

  console.log("[smoke-test] Live E2E smoke test completed successfully.");
});
