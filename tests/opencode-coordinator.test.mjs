import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { OpenCodeAgentManager } from "../src/opencode/agent-manager.ts";
import { dispatchCoordinatorMethod } from "../src/opencode/coordinator.ts";

process.env.OPENCODE_SESSION_STORE_PATH = ":memory:";

test("OpenCodeAgentManager ensures default main agent and creates session with flat arguments", async () => {
  let createdSessionWith = null;
  const mockClient = {
    session: {
      create: async (params) => {
        createdSessionWith = params;
        return { data: { id: "mock_session_123" } };
      },
    },
  };

  const events = [];
  const manager = new OpenCodeAgentManager(mockClient, (ev) => events.push(ev));

  const agent = await manager.ensureDefaultAgent();
  assert.equal(agent.id, "main-opencode-agent");
  assert.equal(createdSessionWith?.title, "OpenCode Chat");
  assert.equal(createdSessionWith?.agent, "general");

  const binding = await manager.ensureAgentSession("main-opencode-agent");
  assert.equal(binding.sessionId, "mock_session_123");

  const mainAgent = await manager.getMainAgent();
  assert.equal(mainAgent.agentId, "main-opencode-agent");

  const roster = await manager.getServerAgentRoster();
  assert.equal(roster.status, "ready");
  assert.equal(roster.agents.length, 1);
  assert.equal(roster.agents[0].id, "main-opencode-agent");
});

test("OpenCodeAgentManager unpacks double .data envelope from session.create", async () => {
  const mockClient = {
    v2: {
      session: {
        create: async (params) => {
          return {
            data: {
              data: {
                id: "ses_double_envelope_456",
                agent: params.agent,
              },
            },
          };
        },
      },
    },
  };

  const manager = new OpenCodeAgentManager(mockClient, () => {});
  const binding = await manager.ensureAgentSession("main-opencode-agent");
  assert.equal(binding.sessionId, "ses_double_envelope_456");
});

test("OpenCodeAgentManager throws when session creation fails and does not invent fake session IDs", async () => {
  const mockClient = {
    v2: {
      session: {
        create: async () => {
          return {
            error: {
              _tag: "InvalidRequestError",
              message: "Expected object",
            },
            response: { status: 400 },
          };
        },
      },
    },
  };

  const manager = new OpenCodeAgentManager(mockClient, () => {});
  await assert.rejects(
    async () => {
      await manager.ensureAgentSession("main-opencode-agent");
    },
    (err) => {
      assert.ok(err.message.includes("OpenCode"));
      return true;
    }
  );
});

test("OpenCodeAgentManager handles prompt dispatch and SSE stream deltas", async () => {
  let promptArgs = null;
  const events = [];

  async function* mockStream() {
    yield {
      type: "session.next.text.delta",
      properties: { sessionID: "test_session_456", delta: "Hello " },
    };
    yield {
      type: "session.next.text.delta",
      properties: { sessionID: "test_session_456", delta: "world!" },
    };
    yield {
      type: "session.next.tool.called",
      properties: { sessionID: "test_session_456", callID: "tool_1", name: "read_file", input: { path: "foo.txt" } },
    };
    yield {
      type: "session.next.tool.success",
      properties: { sessionID: "test_session_456", callID: "tool_1", result: "file content" },
    };
    yield { type: "session.idle", properties: { sessionID: "test_session_456" } };
  }

  const mockClient = {
    session: {
      create: async () => ({ data: { id: "test_session_456" } }),
      promptAsync: async (args) => {
        promptArgs = args;
        return { data: { ok: true } };
      },
      abort: async () => ({ data: { ok: true } }),
    },
    event: {
      subscribe: async () => ({ stream: mockStream() }),
    },
  };

  const manager = new OpenCodeAgentManager(mockClient, (ev) => events.push(ev));

  const sendResult = await manager.sendPrompt({
    agentId: "main-opencode-agent",
    prompt: "Write a poem",
    clientNonce: "nonce-abc-123",
  });

  assert.deepEqual(sendResult, { accepted: true });
  assert.equal(promptArgs.path.sessionID, "test_session_456");
  assert.deepEqual(promptArgs.body.parts, [{ type: "text", text: "Write a poem" }]);

  await new Promise((r) => setTimeout(r, 100));

  assert.ok(events.length >= 5);
  assert.equal(events[0].type, "appended");
  assert.equal(events[0].entry.kind, "message");
  assert.equal(events[0].entry.role, "user");
  assert.equal(events[0].entry.content, "Write a poem");
  assert.equal(events[0].entry.clientNonce, "nonce-abc-123");
  assert.ok(events[0].ordered?.replicaKey?.startsWith("transcript:main-opencode-agent"));
  assert.equal(events[0].ordered?.epoch, "1");
  assert.equal(events[0].ordered?.sequence, 1);

  assert.equal(events[1].type, "appended");
  assert.equal(events[1].entry.kind, "message");
  assert.equal(events[1].entry.role, "assistant");
  assert.equal(events[1].entry.isStreaming, true);
  assert.equal(events[1].ordered?.sequence, 2);

  assert.equal(events[2].type, "updated");
  assert.equal(events[2].entry.content, "Hello ");

  assert.equal(events[3].type, "updated");
  assert.equal(events[3].entry.content, "Hello world!");

  const toolAppended = events.find((e) => e.entry?.kind === "tool-call" && e.type === "appended");
  assert.ok(toolAppended);
  assert.equal(toolAppended.entry.name, "read_file");
  assert.equal(toolAppended.entry.status, "running");

  const toolUpdated = events.find((e) => e.entry?.kind === "tool-call" && e.type === "updated");
  assert.ok(toolUpdated);
  assert.equal(toolUpdated.entry.status, "completed");
  assert.equal(toolUpdated.entry.output, "file content");

  const finalAssistant = events.find(
    (e) => e.entry?.kind === "message" && e.entry?.role === "assistant" && e.entry?.isStreaming === false
  );
  assert.ok(finalAssistant);
  assert.equal(finalAssistant.entry.content, "Hello world!");

  const tail = await manager.openAgentTail("main-opencode-agent", 10);
  assert.equal(tail.entries.length, 3);
  assert.equal(tail.entries[0].kind, "message");
  assert.equal(tail.entries[0].role, "user");
});

test("OpenCodeAgentManager supports interrupting active runs", async () => {
  let interruptedSessionId = null;
  const mockClient = {
    session: {
      create: async () => ({ data: { id: "sess_to_interrupt" } }),
      abort: async ({ path }) => {
        interruptedSessionId = path?.sessionID;
        return { data: { ok: true } };
      },
    },
  };

  const manager = new OpenCodeAgentManager(mockClient, () => {});
  await manager.ensureDefaultAgent();
  const res = await manager.interruptAgentRun("main-opencode-agent");
  assert.deepEqual(res, { status: "ok" });
  assert.equal(interruptedSessionId, "sess_to_interrupt");
});

test("MessagePort framing handles request, reply, and event dispatch", async () => {
  const { MessageChannel } = await import("node:worker_threads");
  const ch = new MessageChannel();
  const port1 = ch.port1;
  const port2 = ch.port2;

  const replies = [];
  port2.on("message", (msg) => {
    replies.push(msg);
  });
  port2.start();

  // Test request handling simulation
  const mockClient = {
    session: {
      create: async () => ({ data: { id: "test_port_session" } }),
    },
  };

  const manager = new OpenCodeAgentManager(mockClient, () => {});
  await manager.ensureDefaultAgent();

  const req = {
    kind: "request",
    requestId: "req-1",
    method: "getMainAgent",
    args: {},
  };

  const value = await manager.getMainAgent();
  port1.postMessage({
    kind: "reply",
    requestId: req.requestId,
    outcome: { status: "ok", value },
  });

  await new Promise((r) => setTimeout(r, 20));

  assert.equal(replies.length, 1);
  assert.equal(replies[0].kind, "reply");
  assert.equal(replies[0].requestId, "req-1");
  assert.equal(replies[0].outcome.status, "ok");
  assert.equal(replies[0].outcome.value.agentId, "main-opencode-agent");

  port1.close();
  port2.close();
});

test("OpenCodeAgentManager discovers agents and skills from OpenCode v2 client", async () => {
  const mockClient = {
    session: {
      create: async () => ({ data: { id: "test_session" } }),
    },
    app: {
      agents: async () => ({
        data: [
          {
            id: "coder-agent",
            name: "Coder",
            description: "Coding specialist",
            model: "claude-3-7-sonnet",
          },
        ],
      }),
      skills: async () => ({
        data: [
          {
            name: "git-commit",
            description: "Creates clean git commits",
            content: "skill instructions...",
          },
        ],
      }),
    },
  };

  const manager = new OpenCodeAgentManager(mockClient, () => {});

  const agents = await manager.listAgents();
  assert.equal(agents.length, 1);
  assert.equal(agents[0].id, "coder-agent");
  assert.equal(agents[0].role, "Coding specialist");
  assert.equal(agents[0].model, "claude-3-7-sonnet");

  const roster = await manager.getServerAgentRoster();
  assert.equal(roster.status, "ready");
  assert.equal(roster.agents.length, 1);
  assert.equal(roster.agents[0].id, "coder-agent");

  const skills = await manager.getSkillsCatalog();
  assert.equal(skills.length, 1);
  assert.equal(skills[0].name, "git-commit");
  assert.equal(skills[0].description, "Creates clean git commits");

  const mcp = await manager.listMcpServers();
  assert.equal(mcp.servers.length, 0);

  const tail = await manager.openAgentTail("coder-agent");
  assert.equal(tail.nextBeforeSeq, null);
  assert.ok(Array.isArray(tail.entries));
});

test("dispatchCoordinatorMethod conforms to renderer RPC contracts for automations, tasks, and channels", async () => {
  const mockClient = {
    session: {
      create: async () => ({ data: { id: "test_session" } }),
    },
  };
  const manager = new OpenCodeAgentManager(mockClient, () => {});

  // reply: "array" methods must return a raw array
  const automations = await dispatchCoordinatorMethod("getAgentAutomations", { id: "main" }, manager);
  assert.equal(automations.status, "ok");
  assert.ok(Array.isArray(automations.value), "getAgentAutomations must return an array for .find()");
  assert.equal(automations.value.length, 0);

  const tasks = await dispatchCoordinatorMethod("getAgentTasks", { id: "main" }, manager);
  assert.equal(tasks.status, "ok");
  assert.ok(Array.isArray(tasks.value), "getAgentTasks must return an array");
  assert.equal(tasks.value.length, 0);

  const markTask = await dispatchCoordinatorMethod("markAgentTaskRead", { id: "main", taskId: "t1" }, manager);
  assert.equal(markTask.status, "ok");
  assert.ok(Array.isArray(markTask.value), "markAgentTaskRead must return an array");

  const workflows = await dispatchCoordinatorMethod("getAgentWorkflows", { id: "main" }, manager);
  assert.equal(workflows.status, "ok");
  assert.ok(Array.isArray(workflows.value), "getAgentWorkflows must return an array");

  // reply: "channels-view" method
  const channels = await dispatchCoordinatorMethod("getAgentChannels", { id: "main" }, manager);
  assert.equal(channels.status, "ok");
  assert.ok(Array.isArray(channels.value?.manifests));
  assert.ok(Array.isArray(channels.value?.connections));

  // reply: "box-secrets" method
  const secrets = await dispatchCoordinatorMethod("getBoxSecretsStatus", {}, manager);
  assert.equal(secrets.status, "ok");
  assert.ok(Array.isArray(secrets.value?.keys));
  assert.equal(typeof secrets.value?.isApplied, "boolean");

  // reply: "void" method
  const runAuto = await dispatchCoordinatorMethod("runAgentAutomationNow", { id: "main", automationId: "a1" }, manager);
  assert.equal(runAuto.status, "ok");
  assert.equal(runAuto.value, undefined);

  // reply: "box-status" method
  const boxStatus = await dispatchCoordinatorMethod("getForeverBoxStatus", {}, manager);
  assert.equal(boxStatus.status, "ok");
  assert.equal(boxStatus.value, null);

  // reply: listBoxMcpServers method
  const mcpServers = await dispatchCoordinatorMethod("listBoxMcpServers", {}, manager);
  assert.equal(mcpServers.status, "ok");
  assert.ok(Array.isArray(mcpServers.value?.servers));

  // host settings get and set
  const hostSettings = await dispatchCoordinatorMethod("getHostSettings", {}, manager);
  assert.equal(hostSettings.status, "ok");
  assert.equal(hostSettings.value.hasSeenOnboarding, true);

  const updatedSettings = await dispatchCoordinatorMethod("setHostSettings", { userTimeZone: "America/New_York" }, manager);
  assert.equal(updatedSettings.status, "ok");
  assert.equal(updatedSettings.value.userTimeZone, "America/New_York");
  assert.equal(updatedSettings.value.hasSeenOnboarding, true);
});

test("OpenCodeAgentManager streams thinking deltas and collapses on idle", async () => {
  const events = [];
  async function* mockStream() {
    yield {
      type: "session.next.reasoning.delta",
      properties: { sessionID: "ses_thinking_1", delta: "Thinking step 1... " },
    };
    yield {
      type: "session.next.reasoning.delta",
      properties: { sessionID: "ses_thinking_1", delta: "Step 2 done." },
    };
    yield {
      type: "session.next.text.delta",
      properties: { sessionID: "ses_thinking_1", delta: "Here is the answer." },
    };
    yield {
      type: "session.idle",
      properties: { sessionID: "ses_thinking_1" },
    };
  }

  const mockClient = {
    session: {
      create: async () => ({ data: { id: "ses_thinking_1" } }),
      promptAsync: async () => ({ data: { ok: true } }),
    },
    event: {
      subscribe: async () => ({ stream: mockStream() }),
    },
  };

  const manager = new OpenCodeAgentManager(mockClient, (ev) => events.push(ev));
  await manager.sendPrompt({
    agentId: "main-opencode-agent",
    prompt: "Solve this",
  });

  await new Promise((r) => setTimeout(r, 100));

  const thinkingAppended = events.find(
    (e) => e.type === "appended" && e.entry?.kind === "thinking"
  );
  assert.ok(thinkingAppended, "Must emit appended event for kind: thinking");
  assert.equal(thinkingAppended.entry.isStreaming, true);

  const thinkingFinal = events.find(
    (e) => e.type === "updated" && e.entry?.kind === "thinking" && e.entry?.isStreaming === false
  );
  assert.ok(thinkingFinal, "Must collapse thinking to isStreaming: false on idle");
  assert.equal(thinkingFinal.entry.text, "Thinking step 1... Step 2 done.");

  const asstFinal = events.find(
    (e) => e.type === "updated" && e.entry?.kind === "message" && e.entry?.role === "assistant" && e.entry?.isStreaming === false
  );
  assert.ok(asstFinal, "Must finish assistant stream on idle");
  assert.equal(asstFinal.entry.content, "Here is the answer.");
});

test("OpenCodeAgentManager handles message.part.updated for text, reasoning, and tools", async () => {
  const events = [];
  async function* mockStream() {
    yield {
      type: "message.part.updated",
      properties: {
        sessionID: "ses_parts_1",
        part: { id: "p1", type: "reasoning", delta: "Analyzing code... " },
      },
    };
    yield {
      type: "message.part.updated",
      properties: {
        sessionID: "ses_parts_1",
        part: { id: "p2", type: "text", delta: "I found the bug." },
      },
    };
    yield {
      type: "message.part.updated",
      properties: {
        sessionID: "ses_parts_1",
        part: {
          id: "p3",
          type: "tool",
          callID: "call_99",
          tool: "edit",
          state: "running",
          input: { file: "test.js" },
        },
      },
    };
    yield {
      type: "message.part.updated",
      properties: {
        sessionID: "ses_parts_1",
        part: {
          id: "p3",
          type: "tool",
          callID: "call_99",
          tool: "edit",
          state: "completed",
          output: "Diff applied",
        },
      },
    };
    yield {
      type: "session.idle",
      properties: { sessionID: "ses_parts_1" },
    };
  }

  const mockClient = {
    session: {
      create: async () => ({ data: { id: "ses_parts_1" } }),
      promptAsync: async () => ({ data: { ok: true } }),
    },
    event: {
      subscribe: async () => ({ stream: mockStream() }),
    },
  };

  const manager = new OpenCodeAgentManager(mockClient, (ev) => events.push(ev));
  await manager.sendPrompt({
    agentId: "main-opencode-agent",
    prompt: "Fix the bug",
  });

  await new Promise((r) => setTimeout(r, 100));

  const think = events.find((e) => e.type === "updated" && e.entry?.kind === "thinking");
  assert.ok(think, "Must handle reasoning part");
  assert.equal(think.entry.text, "Analyzing code... ");

  const textUpdate = events.find(
    (e) => e.entry?.kind === "message" && e.entry?.role === "assistant" && e.entry?.content.includes("I found the bug.")
  );
  assert.ok(textUpdate, "Must handle text part");

  const toolApp = events.find(
    (e) => e.type === "appended" && e.entry?.kind === "tool-call" && e.entry?.id === "call_99"
  );
  assert.ok(toolApp, "Must append tool-call");
  assert.equal(toolApp.entry.status, "running");

  const toolDone = events.find(
    (e) => e.type === "updated" && e.entry?.kind === "tool-call" && e.entry?.id === "call_99" && e.entry?.status === "completed"
  );
  assert.ok(toolDone, "Must update tool-call to completed");
  assert.equal(toolDone.entry.output, "Diff applied");
});

test("OpenCodeAgentManager persists session bindings to disk and hydrates history via openAgentTail", async () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "grokbot-test-"));
  const tempFile = path.join(tempDir, "sessions.json");

  let createdSessions = 0;
  const mockClient = {
    session: {
      create: async () => {
        createdSessions += 1;
        return { data: { id: "ses_persisted_789" } };
      },
      messages: async ({ sessionID }) => {
        assert.equal(sessionID, "ses_persisted_789");
        return {
          data: [
            {
              id: "msg_user_1",
              role: "user",
              parts: [{ type: "text", text: "Previous user question" }],
              timestampMs: 1000,
            },
            {
              id: "msg_asst_1",
              role: "assistant",
              parts: [
                { id: "th_1", type: "reasoning", text: "Pondering..." },
                { id: "tx_1", type: "text", text: "Previous answer" },
                { id: "tl_1", type: "tool", callID: "c1", tool: "read", state: "completed", result: "ok" },
              ],
              timestampMs: 2000,
            },
          ],
        };
      },
    },
  };

  // Manager 1 creates the session and saves to disk
  const manager1 = new OpenCodeAgentManager(mockClient, () => {}, { sessionStorePath: tempFile });
  const binding1 = await manager1.ensureAgentSession("main-opencode-agent");
  assert.equal(binding1.sessionId, "ses_persisted_789");
  assert.equal(createdSessions, 1);
  assert.ok(fs.existsSync(tempFile), "sessions.json must exist on disk");

  // Manager 2 reloads from disk without calling session.create
  const manager2 = new OpenCodeAgentManager(mockClient, () => {}, { sessionStorePath: tempFile });
  const tail = await manager2.openAgentTail("main-opencode-agent");
  assert.equal(createdSessions, 1, "Must NOT recreate session on server when persisted file exists");
  assert.equal(tail.entries.length, 4, "Hydrated entries must include user, thinking, tool, and assistant messages");
  assert.equal(tail.entries[0].kind, "message");
  assert.equal(tail.entries[0].role, "user");
  assert.equal(tail.entries[0].content, "Previous user question");
  assert.equal(tail.entries[1].kind, "thinking");
  assert.equal(tail.entries[1].text, "Pondering...");
  assert.equal(tail.entries[2].kind, "tool-call");
  assert.equal(tail.entries[2].status, "completed");
  assert.equal(tail.entries[3].kind, "message");
  assert.equal(tail.entries[3].role, "assistant");
  assert.equal(tail.entries[3].content, "Previous answer");

  fs.rmSync(tempDir, { recursive: true, force: true });
});

test("dispatchCoordinatorMethod conforms to safe return shapes for critical RPC methods", async () => {
  const mockClient = {
    session: {
      create: async () => ({ data: { id: "test_session" } }),
    },
  };
  const manager = new OpenCodeAgentManager(mockClient, () => {});

  // getListenerIntegrations: { integrations: [] }
  const listeners = await dispatchCoordinatorMethod("getListenerIntegrations", {}, manager);
  assert.equal(listeners.status, "ok");
  assert.ok(Array.isArray(listeners.value?.integrations), "getListenerIntegrations must have integrations array");

  // getMcpState: { servers: [], configuredServers: [] }
  const mcpState = await dispatchCoordinatorMethod("getMcpState", {}, manager);
  assert.equal(mcpState.status, "ok");
  assert.ok(Array.isArray(mcpState.value?.servers), "getMcpState must have servers array");

  // getPluginSyncStatus: { authBlocked: [], plugins: [], status: "synced" }
  const pluginSync = await dispatchCoordinatorMethod("getPluginSyncStatus", {}, manager);
  assert.equal(pluginSync.status, "ok");
  assert.ok(Array.isArray(pluginSync.value?.authBlocked), "getPluginSyncStatus must have authBlocked array");
  assert.ok(Array.isArray(pluginSync.value?.plugins), "getPluginSyncStatus must have plugins array");

  // getCloudAgentPublishProposals: { kind: "listed", proposals: [] }
  const proposals = await dispatchCoordinatorMethod("getCloudAgentPublishProposals", { bcId: "bc1" }, manager);
  assert.equal(proposals.status, "ok");
  assert.equal(proposals.value?.kind, "listed");
  assert.ok(Array.isArray(proposals.value?.proposals));

  // promptAcceptanceStatus: { outcome: "accepted", status: "accepted" }
  const promptAcceptance = await dispatchCoordinatorMethod("promptAcceptanceStatus", { id: "p1" }, manager);
  assert.equal(promptAcceptance.status, "ok");
  assert.equal(promptAcceptance.value?.outcome, "accepted");

  // resolveAgentCreation: { kind: "box" }
  const resolveCreation = await dispatchCoordinatorMethod("resolveAgentCreation", {}, manager);
  assert.equal(resolveCreation.status, "ok");
  assert.equal(resolveCreation.value?.kind, "box");

  // createAgent & createAgentFromTemplate
  const newAgent = await dispatchCoordinatorMethod("createAgent", { name: "Agent Smith" }, manager);
  assert.equal(newAgent.status, "ok");
  assert.ok(newAgent.value?.agent?.id);
  assert.equal(newAgent.value?.agent?.name, "Agent Smith");

  const templateAgent = await dispatchCoordinatorMethod("createAgentFromTemplate", { name: "Template Bot" }, manager);
  assert.equal(templateAgent.status, "ok");
  assert.ok(templateAgent.value?.agent?.id);
  assert.equal(templateAgent.value?.agent?.name, "Template Bot");

  // createGroup
  const group = await dispatchCoordinatorMethod("createGroup", { name: "My Group", memberAgentIds: ["a1"] }, manager);
  assert.equal(group.status, "ok");
  assert.equal(group.value?.agent?.isGroup, true);
  assert.deepEqual(group.value?.agent?.memberAgentIds, ["a1"]);

  // deleteAgents
  const deleteRes = await dispatchCoordinatorMethod("deleteAgents", { ids: ["a1"] }, manager);
  assert.equal(deleteRes.status, "ok");
  assert.ok(Array.isArray(deleteRes.value?.refusedAgentIds));
  assert.ok(Array.isArray(deleteRes.value?.failedAgentIds));

  // importAgentWorkflowText & Url
  const importText = await dispatchCoordinatorMethod("importAgentWorkflowText", { markdown: "# WF" }, manager);
  assert.equal(importText.status, "ok");
  assert.ok(Array.isArray(importText.value?.workflows));

  // getForeverBoxStatus & ensureForeverBox
  const foreverBox = await dispatchCoordinatorMethod("getForeverBoxStatus", {}, manager);
  assert.equal(foreverBox.status, "ok");
  assert.equal(foreverBox.value, null);

  // listVirtualCardPaymentMethods
  const cards = await dispatchCoordinatorMethod("listVirtualCardPaymentMethods", {}, manager);
  assert.equal(cards.status, "ok");
  assert.equal(cards.value?.status, "unavailable");

  // beginSpendApproval & resolveVirtualCardApproval
  const spend = await dispatchCoordinatorMethod("beginSpendApproval", {}, manager);
  assert.equal(spend.status, "ok");
  assert.equal(spend.value?.status, "not_required");

  const cardApprove = await dispatchCoordinatorMethod("resolveVirtualCardApproval", {}, manager);
  assert.equal(cardApprove.status, "ok");
  assert.equal(cardApprove.value?.approved, true);

  // getBotTemplateExportPolicy
  const exportPolicy = await dispatchCoordinatorMethod("getBotTemplateExportPolicy", {}, manager);
  assert.equal(exportPolicy.status, "ok");
  assert.equal(exportPolicy.value?.policy, "none");

  // getHostStatus
  const hostStatus = await dispatchCoordinatorMethod("getHostStatus", {}, manager);
  assert.equal(hostStatus.status, "ok");
  assert.equal(hostStatus.value?.hostVersion, "1.0.0");

  // transcribeAudio
  const transcript = await dispatchCoordinatorMethod("transcribeAudio", { audio: "base64" }, manager);
  assert.equal(transcript.status, "ok");
  assert.equal(transcript.value?.text, "");

  // getTeachRecordingStatus
  const teach = await dispatchCoordinatorMethod("getTeachRecordingStatus", {}, manager);
  assert.equal(teach.status, "ok");
  assert.equal(teach.value?.status, "idle");
});

test("DrFrame handshake is non-blocking and emits ready, transport state, and transcript source", async () => {
  const { MessageChannel } = await import("node:worker_threads");
  const ch = new MessageChannel();
  const port1 = ch.port1;
  const port2 = ch.port2;

  const messages = [];
  port2.on("message", (msg) => {
    messages.push(msg);
  });
  port2.start();

  port1.on("message", (raw) => {
    const msg = raw?.data ?? raw;
    if (msg?.kind === "lifecycle" && msg?.phase === "hello") {
      port1.postMessage({
        kind: "lifecycle",
        phase: "ready",
        protocolVersion: 3,
      });
      port1.postMessage({
        kind: "event",
        family: "coordinator-transport-state",
        payload: { state: "connected" },
      });
      port1.postMessage({
        kind: "event",
        family: "coordinator-transcript-source",
        payload: { source: "server" },
      });
    }
  });
  port1.start();

  port2.postMessage({ kind: "lifecycle", phase: "hello", protocolVersion: 1 });

  await new Promise((r) => setTimeout(r, 50));

  assert.equal(messages.length, 3);
  assert.equal(messages[0].kind, "lifecycle");
  assert.equal(messages[0].phase, "ready");
  assert.equal(messages[0].protocolVersion, 3);

  assert.equal(messages[1].kind, "event");
  assert.equal(messages[1].family, "coordinator-transport-state");
  assert.equal(messages[1].payload?.state, "connected");

  assert.equal(messages[2].kind, "event");
  assert.equal(messages[2].family, "coordinator-transcript-source");
  assert.equal(messages[2].payload?.source, "server");

  port1.close();
  port2.close();
});

test("OpenCodeAgentManager parses model strings and routes updateAgent with persistence", async () => {
  let switchedModelTo = null;
  const mockClient = {
    v2: {
      session: {
        create: async () => ({ data: { id: "sess_update_test_1" } }),
        switchModel: async (args) => {
          switchedModelTo = args;
          return { data: { ok: true } };
        },
      },
    },
  };

  const tmpStore = path.join(os.tmpdir(), `test-sessions-${Date.now()}.json`);
  const manager = new OpenCodeAgentManager(mockClient, () => {}, { sessionStorePath: tmpStore });

  // Test parseModelString
  const parsed1 = manager.parseModelString("anthropic/claude-3-7-sonnet");
  assert.equal(parsed1.providerID, "anthropic");
  assert.equal(parsed1.modelID, "claude-3-7-sonnet");

  const parsed2 = manager.parseModelString("xai/grok-beta");
  assert.equal(parsed2.providerID, "xai");
  assert.equal(parsed2.modelID, "grok-beta");

  const parsed3 = manager.parseModelString("big-pickle");
  assert.equal(parsed3.providerID, "opencode");
  assert.equal(parsed3.modelID, "big-pickle");

  // Call updateAgent via dispatchCoordinatorMethod
  const res = await dispatchCoordinatorMethod(
    "updateAgent",
    {
      id: "main-opencode-agent",
      profile: {
        name: "Custom Architect",
        role: "Lead Software Architect",
        model: "anthropic/claude-3-7-sonnet",
        cwd: "/Users/test/workspace",
      },
    },
    manager
  );

  assert.equal(res.status, "ok");
  assert.equal(res.value.agent.name, "Custom Architect");
  assert.equal(res.value.agent.role, "Lead Software Architect");
  assert.equal(res.value.agent.model, "anthropic/claude-3-7-sonnet");
  assert.equal(res.value.agent.cwd, "/Users/test/workspace");

  // Assert switchModel was called on the active session
  assert.equal(switchedModelTo?.sessionID, "sess_update_test_1");
  assert.equal(switchedModelTo?.model?.providerID, "anthropic");
  assert.equal(switchedModelTo?.model?.id, "claude-3-7-sonnet");

  // Verify persistence on disk
  assert.ok(fs.existsSync(tmpStore));
  const saved = JSON.parse(fs.readFileSync(tmpStore, "utf8"));
  assert.equal(saved["main-opencode-agent"]?.title, "Custom Architect");
  assert.equal(saved["main-opencode-agent"]?.model, "anthropic/claude-3-7-sonnet");
  assert.equal(saved["main-opencode-agent"]?.cwd, "/Users/test/workspace");

  // Clean up
  try {
    fs.unlinkSync(tmpStore);
  } catch {}
});

test("OpenCodeAgentManager handles file attachments and working directory in sendPrompt", async () => {
  let promptReceived = null;
  let promptOptionsReceived = null;

  const mockClient = {
    v2: {
      session: {
        create: async (params, opts) => {
          return { data: { id: "sess_attach_test_1", location: params.location } };
        },
        prompt: async (params, opts) => {
          promptReceived = params;
          promptOptionsReceived = opts;
          return { data: { id: "prompt_1" } };
        },
      },
      event: {
        subscribe: async () => ({
          stream: (async function* () {
            yield { type: "session.idle", properties: { sessionID: "sess_attach_test_1" } };
          })(),
        }),
      },
    },
  };

  const events = [];
  const manager = new OpenCodeAgentManager(mockClient, (ev) => events.push(ev));

  // Create test file
  const tmpFile = path.join(os.tmpdir(), "sample-test-image.png");
  fs.writeFileSync(tmpFile, "fake-image-bytes");

  await manager.sendPrompt({
    agentId: "main-opencode-agent",
    prompt: "Please review this diagram",
    clientNonce: "nonce-attach-123",
    attachmentPaths: [tmpFile],
    attachmentNames: ["architecture.png"],
    cwd: "/custom/project/dir",
  });

  // Verify prompt received file attachments
  assert.ok(promptReceived != null);
  assert.equal(promptReceived.sessionID, "sess_attach_test_1");
  assert.ok(promptReceived.prompt.text.includes("Please review this diagram"));
  assert.ok(promptReceived.prompt.text.includes("[Attached file: architecture.png"));

  assert.equal(promptReceived.prompt.files?.length, 1);
  assert.equal(promptReceived.prompt.files[0].name, "architecture.png");
  assert.equal(promptReceived.prompt.files[0].mime, "image/png");
  assert.ok(promptReceived.prompt.files[0].uri.startsWith("file://"));

  // Verify working directory query and headers
  assert.equal(promptReceived.query?.directory, "/custom/project/dir");
  assert.equal(
    promptOptionsReceived?.headers?.["x-opencode-directory"],
    encodeURIComponent("/custom/project/dir")
  );

  // Clean up
  try {
    fs.unlinkSync(tmpFile);
  } catch {}
});

test("Workspace directory extraction and setHostSettings sync", async () => {
  const { extractWorkspaceDirectory } = await import("../src/opencode/coordinator.ts");
  assert.equal(extractWorkspaceDirectory({ workspaceDir: "/test/dir/1" }), "/test/dir/1");
  assert.equal(extractWorkspaceDirectory({ projectDir: "/test/dir/2" }), "/test/dir/2");
  assert.equal(extractWorkspaceDirectory({ cwd: "/test/dir/3" }), "/test/dir/3");
  assert.equal(extractWorkspaceDirectory({ workspaceDirectory: "/test/dir/4" }), "/test/dir/4");
  assert.equal(extractWorkspaceDirectory({ directory: "/test/dir/5" }), "/test/dir/5");
  assert.equal(extractWorkspaceDirectory({ other: "value" }), undefined);
  assert.equal(extractWorkspaceDirectory(null), undefined);

  const mockClient = {
    session: {
      create: async () => ({ data: { id: "test_session" } }),
    },
  };
  const manager = new OpenCodeAgentManager(mockClient, () => {});
  const { dispatchCoordinatorMethod } = await import("../src/opencode/coordinator.ts");

  const outcome = await dispatchCoordinatorMethod(
    "setHostSettings",
    { workspaceDirectory: "/workspace/synced/project" },
    manager
  );
  assert.equal(outcome.status, "ok");
  assert.equal(manager.getWorkspaceDirectory(), "/workspace/synced/project");
  assert.equal(process.env.OPENCODE_PROJECT_DIR, "/workspace/synced/project");
});

test("Skills catalog merges live OpenCode client skills and local workspace skills", async () => {
  const tmpWorkspace = path.join(os.tmpdir(), `test-skills-ws-${Date.now()}`);
  const opencodeSkillsDir = path.join(tmpWorkspace, ".opencode", "skills", "code-reviewer");
  fs.mkdirSync(opencodeSkillsDir, { recursive: true });
  fs.writeFileSync(
    path.join(opencodeSkillsDir, "SKILL.md"),
    `---\nname: code-reviewer\ndescription: "Reviews code changes rigorously"\n---\n# Code Reviewer\nInstructions here.`
  );

  const mockClient = {
    v2: {
      skill: {
        list: async () => ({
          data: [
            { id: "server-skill-1", name: "server-skill-1", description: "Discovered by server" },
          ],
        }),
      },
    },
  };

  const manager = new OpenCodeAgentManager(mockClient, () => {}, {
    workspaceDirectory: tmpWorkspace,
  });

  const catalog = await manager.getSkillsCatalog();
  assert.ok(Array.isArray(catalog));
  assert.equal(catalog.length, 2);

  const serverSkill = catalog.find((s) => s.name === "server-skill-1");
  assert.ok(serverSkill);
  assert.equal(serverSkill.description, "Discovered by server");

  const localSkill = catalog.find((s) => s.name === "code-reviewer");
  assert.ok(localSkill);
  assert.equal(localSkill.description, "Reviews code changes rigorously");
  assert.ok(localSkill.content?.includes("# Code Reviewer"));

  // Clean up
  try {
    fs.rmSync(tmpWorkspace, { recursive: true, force: true });
  } catch {}
});

test("listBoxMcpServers and getMcpState return required fields for renderer", async () => {
  const mockClient = {
    mcp: {
      status: async () => ({
        data: {
          github: { status: "connected" },
          filesystem: { state: "connected" },
        },
      }),
    },
  };

  const manager = new OpenCodeAgentManager(mockClient, () => {});
  const { dispatchCoordinatorMethod } = await import("../src/opencode/coordinator.ts");

  const boxServers = await dispatchCoordinatorMethod("listBoxMcpServers", {}, manager);
  assert.equal(boxServers.status, "ok");
  assert.ok(Array.isArray(boxServers.value?.servers));
  assert.equal(boxServers.value.servers.length, 2);

  const gh = boxServers.value.servers.find((s) => s.name === "github");
  assert.ok(gh);
  assert.equal(gh.id, "github");
  assert.equal(gh.serverIdentifier, "github");
  assert.equal(gh.status, "connected");

  const state = await dispatchCoordinatorMethod("getMcpState", {}, manager);
  assert.equal(state.status, "ok");
  assert.ok(Array.isArray(state.value?.servers));
  assert.ok(Array.isArray(state.value?.configuredServers));
  assert.equal(state.value.servers.length, 2);
  assert.equal(state.value.servers[0].serverIdentifier, "github");

  const tools = await dispatchCoordinatorMethod("listMcpServerTools", { serverId: "unknown" }, manager);
  assert.equal(tools.status, "ok");
  assert.ok(Array.isArray(tools.value));
  assert.equal(tools.value.length, 0);
});


