import assert from "node:assert/strict";
import { test } from "node:test";
import { OpenCodeAgentManager } from "../src/opencode/agent-manager.ts";
import { dispatchCoordinatorMethod } from "../src/opencode/coordinator.ts";

process.env.OPENCODE_SESSION_STORE_PATH = ":memory:";
delete process.env.OPENCODE_PROJECT_DIR;
delete process.env.WORKSPACE_DIR;

test("workspace directory pushed from Electron main is used for new sessions", async () => {
  let createdWith = null;
  const mockClient = {
    v2: {
      session: {
        create: async (params) => {
          createdWith = params;
          return { data: { data: { id: "ses_ws_1" } } };
        },
      },
    },
  };
  const manager = new OpenCodeAgentManager(mockClient, () => {});
  manager.setWorkspaceDirectory("/Users/test/selected-project");
  assert.equal(manager.getWorkspaceDirectory(), "/Users/test/selected-project");
  const binding = await manager.ensureAgentSession("main-opencode-agent");
  assert.equal(binding.sessionId, "ses_ws_1");
  assert.equal(createdWith?.location?.directory, "/Users/test/selected-project");
  assert.equal(binding.cwd, "/Users/test/selected-project");
});

test("per-request cwd still overrides the pushed workspace directory", async () => {
  let promptQuery = null;
  const mockClient = {
    v2: {
      session: {
        create: async () => ({ data: { id: "ses_ws_2" } }),
        prompt: async (params) => {
          promptQuery = params;
          return { data: { ok: true } };
        },
      },
      event: {
        subscribe: async () => ({
          stream: (async function* () {
            yield { type: "session.idle", properties: { sessionID: "ses_ws_2" } };
          })(),
        }),
      },
    },
  };
  const manager = new OpenCodeAgentManager(mockClient, () => {}, {
    workspaceDirectory: "/Users/test/selected-project",
  });
  await manager.sendPrompt({
    agentId: "main-opencode-agent",
    prompt: "hi",
    clientNonce: "n1",
    cwd: "/Users/test/other-dir",
  });
  assert.equal(promptQuery?.query?.directory, "/Users/test/other-dir");
});

test("dispatchCoordinatorMethod accepts workspace sync methods over mainPort", async () => {
  const mockClient = {
    v2: {
      session: {
        create: async () => ({ data: { id: "ses_ws_3" } }),
      },
    },
  };
  const manager = new OpenCodeAgentManager(mockClient, () => {});
  const res = await dispatchCoordinatorMethod(
    "setWorkspaceDirectory",
    { directory: "/Users/test/from-main-port" },
    manager
  );
  assert.equal(res.status, "ok");
  assert.equal(res.value?.directory, "/Users/test/from-main-port");
  assert.equal(manager.getWorkspaceDirectory(), "/Users/test/from-main-port");
});

test("skillsCatalog maps the live v2 { location, data } envelope", async () => {
  const mockClient = {
    v2: {
      skill: {
        list: async () => ({
          data: {
            location: { directory: "/Users/test/proj" },
            data: [
              { id: "opencode", name: "OpenCode", description: "d", content: "c" },
            ],
          },
        }),
      },
    },
  };
  const manager = new OpenCodeAgentManager(mockClient, () => {});
  const skills = await manager.getSkillsCatalog();
  assert.equal(skills.length, 1);
  assert.equal(skills[0].name, "OpenCode");
  const empty = await new OpenCodeAgentManager({}, () => {}).getSkillsCatalog();
  assert.deepEqual(empty, []);
});

test("MCP discovery queries live /api/mcp and maps bundle shapes, tools fall back to []", async () => {
  const origFetch = globalThis.fetch;
  globalThis.fetch = async (url) => {
    assert.ok(String(url).includes("/api/mcp"));
    return {
      ok: true,
      json: async () => ({
        location: { directory: "/Users/test/proj" },
        data: [
          { name: "rea", status: { status: "connected" } },
          { name: "cloudflare", status: { status: "connected" }, integrationID: "mcp_x" },
        ],
      }),
    };
  };
  try {
    const mockClient = {
      client: {
        getConfig: () => ({
          baseUrl: "http://127.0.0.1:9",
          headers: { Authorization: "Basic eA==" },
        }),
      },
    };
    const manager = new OpenCodeAgentManager(mockClient, () => {}, {
      workspaceDirectory: "/Users/test/proj",
    });
    const list = await manager.listMcpServers();
    assert.equal(list.servers.length, 2);
    assert.equal(list.servers[0].name, "rea");
    assert.equal(list.servers[0].status, "connected");

    const state = await manager.getMcpState();
    assert.ok(Array.isArray(state.servers));
    assert.equal(state.servers.length, 2);
    assert.equal(state.servers[0].serverIdentifier, "rea");
    assert.ok(Array.isArray(state.configuredServers));

    const res = await dispatchCoordinatorMethod("getMcpState", {}, manager);
    assert.equal(res.status, "ok");
    assert.ok(Array.isArray(res.value?.servers));

    const tools = await dispatchCoordinatorMethod(
      "listMcpServerTools",
      { serverId: "rea" },
      manager
    );
    assert.equal(tools.status, "ok");
    assert.ok(Array.isArray(tools.value));
  } finally {
    globalThis.fetch = origFetch;
  }
});

test("MCP discovery falls back gracefully when the server is unreachable", async () => {
  const manager = new OpenCodeAgentManager({}, () => {});
  const list = await manager.listMcpServers();
  assert.deepEqual(list, { servers: [] });
  const state = await manager.getMcpState();
  assert.deepEqual(state, { servers: [], configuredServers: [] });
  const tools = await manager.listMcpServerTools("rea");
  assert.deepEqual(tools, []);
  const noId = await manager.listMcpServerTools();
  assert.deepEqual(noId, []);
});
