import assert from "node:assert/strict";
import { test } from "node:test";
import { OpenCodeAgentManager } from "../src/opencode/agent-manager.ts";

test("OpenCodeAgentManager ensures default main agent and creates session", async () => {
  let createdSessionWith = null;
  const mockClient = {
    v2: {
      session: {
        create: async (params) => {
          createdSessionWith = params;
          return { data: { data: { id: "mock_session_123" } } };
        },
      },
    },
  };

  const events = [];
  const manager = new OpenCodeAgentManager(mockClient, (ev) => events.push(ev));

  const agent = await manager.ensureDefaultAgent();
  assert.equal(agent.id, "main-opencode-agent");
  assert.equal(createdSessionWith?.agent, "general");

  const mainAgent = await manager.getMainAgent();
  assert.equal(mainAgent.agentId, "main-opencode-agent");

  const roster = await manager.getServerAgentRoster();
  assert.equal(roster.status, "ready");
  assert.equal(roster.agents.length, 1);
  assert.equal(roster.agents[0].id, "main-opencode-agent");
});

test("OpenCodeAgentManager handles prompt dispatch and SSE stream deltas", async () => {
  let promptArgs = null;
  const events = [];

  async function* mockStream() {
    yield { type: "session.next.text.delta", data: { delta: "Hello " } };
    yield { type: "session.next.text.delta", data: { delta: "world!" } };
    yield {
      type: "session.next.tool.called",
      data: { callId: "tool_1", name: "read_file", arguments: { path: "foo.txt" } },
    };
    yield {
      type: "session.next.tool.success",
      data: { callId: "tool_1", result: "file content" },
    };
    yield { type: "session.idle", data: {} };
  }

  const mockClient = {
    v2: {
      session: {
        create: async () => ({ data: { data: { id: "test_session_456" } } }),
        events: async () => ({ stream: mockStream() }),
        prompt: async (args) => {
          promptArgs = args;
          return { data: { ok: true } };
        },
        interrupt: async () => ({ data: { ok: true } }),
      },
    },
  };

  const manager = new OpenCodeAgentManager(mockClient, (ev) => events.push(ev));

  const sendResult = await manager.sendPrompt({
    agentId: "main-opencode-agent",
    prompt: "Write a poem",
    clientNonce: "nonce-abc-123",
  });

  assert.deepEqual(sendResult, { status: "ok" });
  assert.equal(promptArgs.sessionID, "test_session_456");
  assert.equal(promptArgs.prompt.text, "Write a poem");

  await new Promise((r) => setTimeout(r, 100));

  assert.ok(events.length >= 5);
  assert.equal(events[0].type, "appended");
  assert.equal(events[0].entry.kind, "message");
  assert.equal(events[0].entry.role, "user");
  assert.equal(events[0].entry.content, "Write a poem");
  assert.equal(events[0].entry.clientNonce, "nonce-abc-123");

  assert.equal(events[1].type, "appended");
  assert.equal(events[1].entry.kind, "message");
  assert.equal(events[1].entry.role, "assistant");
  assert.equal(events[1].entry.isStreaming, true);

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
    v2: {
      session: {
        create: async () => ({ data: { data: { id: "sess_to_interrupt" } } }),
        interrupt: async ({ sessionID }) => {
          interruptedSessionId = sessionID;
          return { data: { ok: true } };
        },
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
    v2: {
      session: {
        create: async () => ({ data: { data: { id: "test_port_session" } } }),
      },
    },
  };

  const manager = new OpenCodeAgentManager(mockClient, () => {});
  const agent = await manager.ensureDefaultAgent();

  // Simulate coordinator handling a request
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
