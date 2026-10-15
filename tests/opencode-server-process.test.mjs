import assert from "node:assert/strict";
import { test } from "node:test";
import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import { OpenCodeServerManager } from "../src/opencode/server-process.ts";

test("OpenCodeServerManager reuses incumbent service from service.json", async () => {
  let receivedAuth = null;
  const server = http.createServer((req, res) => {
    if (req.url === "/api/info") {
      receivedAuth = req.headers.authorization;
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ version: "2.0.28", pid: process.pid }));
      return;
    }
    res.writeHead(404);
    res.end();
  });

  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const port = server.address().port;
  const url = `http://127.0.0.1:${port}`;
  const password = "incumbent-secret-pw";

  const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "opencode-test-"));
  const serviceFile = path.join(tmpDir, "service.json");
  await fs.writeFile(
    serviceFile,
    JSON.stringify({
      id: "incumbent-test-id",
      version: "2.0.28",
      url,
      pid: process.pid,
      password,
    })
  );

  const prevEnv = process.env.OPENCODE_SERVICE_FILE;
  process.env.OPENCODE_SERVICE_FILE = serviceFile;

  try {
    const mgr = new OpenCodeServerManager();
    const conn = await mgr.start();

    assert.equal(conn.url, url);
    assert.equal(conn.password, password);
    assert.ok(conn.client);
    const expectedAuth = "Basic " + Buffer.from(`opencode:${password}`).toString("base64");
    assert.equal(receivedAuth, expectedAuth);

    await mgr.stop();
  } finally {
    if (prevEnv !== undefined) {
      process.env.OPENCODE_SERVICE_FILE = prevEnv;
    } else {
      delete process.env.OPENCODE_SERVICE_FILE;
    }
    server.close();
    await fs.rm(tmpDir, { recursive: true, force: true });
  }
});

test("OpenCodeServerManager spawns service and polls service.json when no incumbent exists", async () => {
  const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "opencode-spawn-test-"));
  const serviceFile = path.join(tmpDir, "service.json");
  const mockScript = path.join(tmpDir, "mock-opencode.mjs");

  const scriptContent = `
import http from "node:http";
import fs from "node:fs";

const server = http.createServer((req, res) => {
  if (req.url === "/api/info") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ version: "2.0.28", pid: process.pid }));
    return;
  }
  res.writeHead(404);
  res.end();
});

server.listen(0, "127.0.0.1", () => {
  const port = server.address().port;
  const payload = {
    id: "spawned-id",
    version: "2.0.28",
    url: "http://127.0.0.1:" + port,
    pid: process.pid,
    password: "spawned-password",
  };
  fs.writeFileSync(process.env.OPENCODE_SERVICE_FILE, JSON.stringify(payload));
});

process.on("SIGTERM", () => {
  server.close(() => process.exit(0));
});
`;
  await fs.writeFile(mockScript, scriptContent);
  await fs.chmod(mockScript, 0o755);

  const mockBin = path.join(tmpDir, "mock-opencode.sh");
  await fs.writeFile(mockBin, `#!/bin/sh\nexec node "${mockScript}" "$@"\n`);
  await fs.chmod(mockBin, 0o755);

  const prevServiceFile = process.env.OPENCODE_SERVICE_FILE;
  const prevBin = process.env.OPENCODE_BIN_PATH;
  process.env.OPENCODE_SERVICE_FILE = serviceFile;
  process.env.OPENCODE_BIN_PATH = mockBin;

  try {
    const mgr = new OpenCodeServerManager();
    const conn = await mgr.start();

    assert.ok(conn.url.startsWith("http://127.0.0.1:"));
    assert.equal(conn.password, "spawned-password");
    assert.ok(conn.client);
    assert.ok(conn.process);

    await mgr.stop();
  } finally {
    if (prevServiceFile !== undefined) {
      process.env.OPENCODE_SERVICE_FILE = prevServiceFile;
    } else {
      delete process.env.OPENCODE_SERVICE_FILE;
    }
    if (prevBin !== undefined) {
      process.env.OPENCODE_BIN_PATH = prevBin;
    } else {
      delete process.env.OPENCODE_BIN_PATH;
    }
    await fs.rm(tmpDir, { recursive: true, force: true });
  }
});

test("OpenCodeServerManager rejects if child exits before becoming ready", async () => {
  const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "opencode-exit-test-"));
  const serviceFile = path.join(tmpDir, "nonexistent-service.json");
  const mockBin = path.join(tmpDir, "failing-opencode.sh");

  await fs.writeFile(mockBin, `#!/bin/sh\nexit 1\n`);
  await fs.chmod(mockBin, 0o755);

  const prevServiceFile = process.env.OPENCODE_SERVICE_FILE;
  const prevBin = process.env.OPENCODE_BIN_PATH;
  process.env.OPENCODE_SERVICE_FILE = serviceFile;
  process.env.OPENCODE_BIN_PATH = mockBin;

  try {
    const mgr = new OpenCodeServerManager();
    await assert.rejects(
      async () => {
        await mgr.start();
      },
      (err) => {
        assert.ok(err.message.includes("OpenCode server exited before becoming ready"));
        return true;
      }
    );
  } finally {
    if (prevServiceFile !== undefined) {
      process.env.OPENCODE_SERVICE_FILE = prevServiceFile;
    } else {
      delete process.env.OPENCODE_SERVICE_FILE;
    }
    if (prevBin !== undefined) {
      process.env.OPENCODE_BIN_PATH = prevBin;
    } else {
      delete process.env.OPENCODE_BIN_PATH;
    }
    await fs.rm(tmpDir, { recursive: true, force: true });
  }
});

test("OpenCodeServerManager manages reference-counted lease pool", async () => {
  const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "opencode-lease-test-"));
  const serviceFile = path.join(tmpDir, "service.json");
  const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ version: "2.0.28", pid: process.pid, healthy: true }));
  });
  await new Promise((r) => server.listen(0, "127.0.0.1", r));
  const port = server.address().port;
  await fs.writeFile(
    serviceFile,
    JSON.stringify({
      id: "lease-test-id",
      version: "2.0.28",
      url: `http://127.0.0.1:${port}`,
      pid: process.pid,
      password: "pass",
    })
  );

  const prevEnv = process.env.OPENCODE_SERVICE_FILE;
  process.env.OPENCODE_SERVICE_FILE = serviceFile;

  try {
    const mgr = new OpenCodeServerManager({ idleTimeoutMs: 100 });
    assert.equal(mgr.getLeaseCount(), 0);

    const lease1 = mgr.acquireLease();
    assert.equal(mgr.getLeaseCount(), 1);

    const lease2 = mgr.acquireLease();
    assert.equal(mgr.getLeaseCount(), 2);

    lease1.release();
    assert.equal(mgr.getLeaseCount(), 1);

    await mgr.withLease(async (conn) => {
      assert.equal(mgr.getLeaseCount(), 2);
      assert.ok(conn.url);
    });
    assert.equal(mgr.getLeaseCount(), 1);

    lease2.release();
    assert.equal(mgr.getLeaseCount(), 0);

    await mgr.stop();
  } finally {
    if (prevEnv !== undefined) {
      process.env.OPENCODE_SERVICE_FILE = prevEnv;
    } else {
      delete process.env.OPENCODE_SERVICE_FILE;
    }
    server.close();
    await fs.rm(tmpDir, { recursive: true, force: true });
  }
});

test("OpenCodeServerManager probes /global/health and validates version compatibility", async () => {
  let probedHealth = false;
  const server = http.createServer((req, res) => {
    if (req.url === "/global/health") {
      probedHealth = true;
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ version: "2.0.28", healthy: true }));
      return;
    }
    res.writeHead(404);
    res.end();
  });
  await new Promise((r) => server.listen(0, "127.0.0.1", r));
  const port = server.address().port;
  const url = `http://127.0.0.1:${port}`;

  const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "opencode-health-test-"));
  const serviceFile = path.join(tmpDir, "service.json");
  await fs.writeFile(
    serviceFile,
    JSON.stringify({
      id: "health-test",
      version: "2.0.28",
      url,
      pid: process.pid,
      password: "pass",
    })
  );

  const prevEnv = process.env.OPENCODE_SERVICE_FILE;
  process.env.OPENCODE_SERVICE_FILE = serviceFile;

  try {
    const mgr = new OpenCodeServerManager();
    const conn = await mgr.start();
    const health = await mgr.getHealthDetails(conn.url, conn.password);
    assert.ok(probedHealth, "Must probe /global/health");
    assert.equal(health.healthy, true);
    assert.equal(health.version, "2.0.28");
    assert.equal(mgr.isCompatibleVersion("2.0.28"), true);
    assert.equal(mgr.isCompatibleVersion("2.0.18"), true);
    assert.equal(mgr.isCompatibleVersion("1.19.0"), false);
    await mgr.stop();
  } finally {
    if (prevEnv !== undefined) {
      process.env.OPENCODE_SERVICE_FILE = prevEnv;
    } else {
      delete process.env.OPENCODE_SERVICE_FILE;
    }
    server.close();
    await fs.rm(tmpDir, { recursive: true, force: true });
  }
});


