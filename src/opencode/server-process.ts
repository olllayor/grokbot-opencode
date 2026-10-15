import { execSync, spawn, type ChildProcess } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { createOpencodeClient, type OpencodeClient } from "@opencode-ai/sdk/v2";

export interface ServerConnection {
  url: string;
  password: string;
  client: OpencodeClient;
  process: ChildProcess | null;
  version?: string;
}

export interface OpenCodeServiceRegistration {
  id?: string;
  version?: string;
  url: string;
  pid: number;
  password?: string;
}

export interface ServerLease {
  id: string;
  release(): void;
}

export interface HealthDetails {
  ok: boolean;
  version?: string;
  healthy?: boolean;
}

export function isCompatibleVersion(versionStr?: string): boolean {
  if (!versionStr) return true;
  const match = versionStr.match(/^(\d+)\.(\d+)\.(\d+)/);
  if (!match) return true;
  const major = parseInt(match[1], 10);
  const minor = parseInt(match[2], 10);
  const patch = parseInt(match[3], 10);
  if (major > 2) return true;
  if (major === 2) {
    if (minor > 0) return true;
    if (minor === 0 && patch >= 18) return true;
  }
  return false;
}

export class OpenCodeServerManager {
  private static cachedBinaryPath: string | null = null;
  private childProcess: ChildProcess | null = null;
  private connection: ServerConnection | null = null;
  private connectionPromise: Promise<ServerConnection> | null = null;
  private activeLeases = new Set<string>();
  private idleTimer: NodeJS.Timeout | null = null;
  private idleTtlMs = 300_000; // 5 min idle lease timeout

  constructor(options?: { idleTimeoutMs?: number }) {
    if (options?.idleTimeoutMs !== undefined) {
      this.idleTtlMs = options.idleTimeoutMs;
    }
    this.registerProcessCleanups();
  }

  public getLeaseCount(): number {
    return this.activeLeases.size;
  }

  public isCompatibleVersion(versionStr?: string): boolean {
    return isCompatibleVersion(versionStr);
  }

  private registerProcessCleanups(): void {
    const cleanup = () => {
      if (this.childProcess && !this.childProcess.killed) {
        try {
          this.childProcess.kill("SIGTERM");
        } catch {}
      }
    };
    process.once("exit", cleanup);
    process.once("SIGTERM", cleanup);
    process.once("SIGINT", cleanup);
  }

  public getServiceFilePath(): string {
    if (process.env.OPENCODE_SERVICE_FILE) {
      return process.env.OPENCODE_SERVICE_FILE;
    }
    const stateHome =
      process.env.XDG_STATE_HOME ||
      path.join(os.homedir(), ".local", "state");
    return path.join(stateHome, "opencode", "service.json");
  }

  public readServiceRegistration(filePath: string): OpenCodeServiceRegistration | null {
    try {
      if (!existsSync(filePath)) {
        return null;
      }
      const raw = readFileSync(filePath, "utf8");
      const parsed = JSON.parse(raw);
      if (
        parsed &&
        typeof parsed === "object" &&
        typeof parsed.url === "string" &&
        typeof parsed.pid === "number"
      ) {
        return {
          id: typeof parsed.id === "string" ? parsed.id : undefined,
          version: typeof parsed.version === "string" ? parsed.version : undefined,
          url: parsed.url,
          pid: parsed.pid,
          password: typeof parsed.password === "string" ? parsed.password : undefined,
        };
      }
      return null;
    } catch {
      return null;
    }
  }

  public isPidAlive(pid: number): boolean {
    if (!pid || pid <= 0) return false;
    try {
      process.kill(pid, 0);
      return true;
    } catch (err: any) {
      return err?.code === "EPERM";
    }
  }

  public async getHealthDetails(
    url: string,
    password?: string,
    timeoutMs = 2000
  ): Promise<HealthDetails> {
    const cleanUrl = url.replace(/\/+$/, "");
    const headers: Record<string, string> = {
      Accept: "application/json",
    };
    if (password) {
      headers.Authorization =
        "Basic " + Buffer.from(`opencode:${password}`).toString("base64");
    }

    // Try /global/health (OpenCode v2) first
    try {
      const res = await fetch(new URL("/global/health", cleanUrl), {
        headers,
        signal: AbortSignal.timeout(timeoutMs),
      });
      const contentType = res.headers.get("content-type") || "";
      if (res.ok && contentType.includes("application/json")) {
        const json: any = await res.json().catch(() => null);
        if (json && typeof json === "object") {
          return {
            ok: true,
            healthy: json.healthy ?? true,
            version: json.version,
          };
        }
      }
    } catch {}

    // Fallback to /api/info
    try {
      const res = await fetch(new URL("/api/info", cleanUrl), {
        headers,
        signal: AbortSignal.timeout(timeoutMs),
      });
      const contentType = res.headers.get("content-type") || "";
      if (res.ok && contentType.includes("application/json")) {
        const json: any = await res.json().catch(() => null);
        if (json && typeof json === "object") {
          return {
            ok: true,
            healthy: true,
            version: json.version,
          };
        }
      }
    } catch {}

    return { ok: false };
  }

  public async probeService(
    url: string,
    password?: string,
    timeoutMs = 2000
  ): Promise<boolean> {
    const health = await this.getHealthDetails(url, password, timeoutMs);
    return health.ok;
  }

  public findBinary(): string {
    if (OpenCodeServerManager.cachedBinaryPath && existsSync(OpenCodeServerManager.cachedBinaryPath)) {
      return OpenCodeServerManager.cachedBinaryPath;
    }
    if (process.env.OPENCODE_BIN_PATH && existsSync(process.env.OPENCODE_BIN_PATH)) {
      OpenCodeServerManager.cachedBinaryPath = process.env.OPENCODE_BIN_PATH;
      return process.env.OPENCODE_BIN_PATH;
    }
    const home = os.homedir();
    const candidates = [
      path.join(home, ".opencode", "bin", "opencode"),
      path.join(home, ".local", "bin", "opencode"),
      "/opt/homebrew/bin/opencode",
      "/usr/local/bin/opencode",
      "/usr/bin/opencode",
    ].filter((p): p is string => Boolean(p && existsSync(p)));

    if (candidates.length > 0) {
      OpenCodeServerManager.cachedBinaryPath = candidates[0];
      return candidates[0];
    }

    if (process.platform === "darwin") {
      try {
        const out = execSync("/bin/zsh -ilc 'which opencode 2>/dev/null'", {
          encoding: "utf8",
          timeout: 2000,
        }).trim();
        if (out && existsSync(out)) {
          OpenCodeServerManager.cachedBinaryPath = out;
          return out;
        }
      } catch {}
    }

    return "opencode";
  }

  private buildConnection(
    url: string,
    password: string,
    proc: ChildProcess | null,
    version?: string
  ): ServerConnection {
    const cleanUrl = url.replace(/\/+$/, "");
    const client = createOpencodeClient({
      baseUrl: cleanUrl,
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(`opencode:${password}`).toString("base64"),
      },
    });

    const conn: ServerConnection = {
      url: cleanUrl,
      password,
      client,
      process: proc,
      version,
    };
    this.connection = conn;
    return conn;
  }

  public acquireLease(tag = "lease"): ServerLease {
    const leaseId = `${tag}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    this.activeLeases.add(leaseId);
    if (this.idleTimer) {
      clearTimeout(this.idleTimer);
      this.idleTimer = null;
    }
    let released = false;
    return {
      id: leaseId,
      release: () => {
        if (released) return;
        released = true;
        this.activeLeases.delete(leaseId);
        if (this.activeLeases.size === 0) {
          this.scheduleIdleStop();
        }
      },
    };
  }

  public async withLease<T>(
    fn: (conn: ServerConnection) => Promise<T>,
    tag = "turn"
  ): Promise<T> {
    const conn = await this.start();
    const lease = this.acquireLease(tag);
    try {
      return await fn(conn);
    } finally {
      lease.release();
    }
  }

  private scheduleIdleStop(): void {
    if (this.idleTimer) {
      clearTimeout(this.idleTimer);
    }
    // Only stop if child process was spawned by this manager (not external incumbent)
    if (!this.childProcess) {
      return;
    }
    this.idleTimer = setTimeout(() => {
      if (this.activeLeases.size === 0) {
        this.stop().catch(() => {});
      }
    }, this.idleTtlMs);
  }

  public async start(): Promise<ServerConnection> {
    if (this.connection) {
      return this.connection;
    }
    if (this.connectionPromise) {
      return this.connectionPromise;
    }

    const initPromise = (async () => {
      const serviceFile = this.getServiceFilePath();

      // 1. Check for a responsive incumbent service
      const incumbent = this.readServiceRegistration(serviceFile);
      if (incumbent && this.isPidAlive(incumbent.pid)) {
        const password = incumbent.password || process.env.OPENCODE_SERVER_PASSWORD || "";
        const health = await this.getHealthDetails(incumbent.url, password, 2000);
        if (health.ok) {
          return this.buildConnection(incumbent.url, password, null, health.version ?? incumbent.version);
        }
      }

      // 2. Spawn opencode serve --service and wait for service.json or stdout lines
      return new Promise<ServerConnection>((resolve, reject) => {
        const binary = this.findBinary();
        const projectCwd =
          process.env.OPENCODE_PROJECT_DIR ||
          process.env.WORKSPACE_DIR ||
          process.cwd();
        const child = spawn(binary, ["serve", "--service"], {
          cwd: projectCwd,
          stdio: ["ignore", "pipe", "pipe"],
          env: { ...process.env },
        });

        this.childProcess = child;

        let detectedUrl: string | null = null;
        let detectedPassword: string | null = null;
        let resolved = false;
        let pollTimer: NodeJS.Timeout | null = null;

        const timeout = setTimeout(() => {
          if (!resolved) {
            cleanup();
            reject(new Error("Timeout waiting for OpenCode server to initialize"));
          }
        }, 15000);

        const cleanup = () => {
          clearTimeout(timeout);
          if (pollTimer) {
            clearInterval(pollTimer);
            pollTimer = null;
          }
          child.stdout?.removeAllListeners("data");
          child.stderr?.removeAllListeners("data");
        };

        const tryResolve = (url: string, password: string, proc: ChildProcess | null, version?: string) => {
          if (resolved) return;
          resolved = true;
          cleanup();
          const conn = this.buildConnection(url, password, proc, version);
          resolve(conn);
        };

        // Poll service.json
        const pollServiceFile = async () => {
          if (resolved) return;
          const reg = this.readServiceRegistration(serviceFile);
          if (reg && this.isPidAlive(reg.pid)) {
            const pw = reg.password || process.env.OPENCODE_SERVER_PASSWORD || "";
            const health = await this.getHealthDetails(reg.url, pw, 1000);
            if (health.ok && !resolved) {
              tryResolve(reg.url, pw, child, health.version ?? reg.version);
            }
          }
        };

        pollTimer = setInterval(() => {
          pollServiceFile().catch(() => {});
        }, 200);
        pollServiceFile().catch(() => {});

        const onLine = (line: string) => {
          const trimmed = line.trim();
          if (trimmed.includes("listening on")) {
            detectedUrl = trimmed.split("listening on").pop()?.trim() ?? null;
          } else if (trimmed.includes("password")) {
            detectedPassword = trimmed.split("password").pop()?.trim() ?? null;
          }
          if (detectedUrl && detectedPassword && !resolved) {
            tryResolve(detectedUrl, detectedPassword, child);
          }
        };

        let stdoutBuffer = "";
        child.stdout?.on("data", (chunk: Buffer) => {
          stdoutBuffer += chunk.toString("utf8");
          const lines = stdoutBuffer.split("\n");
          stdoutBuffer = lines.pop() ?? "";
          for (const line of lines) {
            onLine(line);
          }
        });

        child.stderr?.on("data", (chunk: Buffer) => {
          const msg = chunk.toString("utf8");
          process.stderr.write(`[opencode-stderr] ${msg}`);
        });

        child.on("error", (err) => {
          if (!resolved) {
            cleanup();
            reject(err);
          }
        });

        child.on("exit", async (code, signal) => {
          this.childProcess = null;
          if (!resolved) {
            // Check if service registration is present and responsive
            const reg = this.readServiceRegistration(serviceFile);
            if (reg && this.isPidAlive(reg.pid)) {
              const pw = reg.password || process.env.OPENCODE_SERVER_PASSWORD || "";
              const health = await this.getHealthDetails(reg.url, pw, 1000);
              if (health.ok && !resolved) {
                tryResolve(reg.url, pw, null, health.version ?? reg.version);
                return;
              }
            }
            cleanup();
            this.connection = null;
            this.connectionPromise = null;
            reject(
              new Error(
                `OpenCode server exited before becoming ready (code=${code}, signal=${signal})`
              )
            );
          }
        });
      });
    })();

    this.connectionPromise = initPromise.catch((err) => {
      this.connectionPromise = null;
      throw err;
    });

    return this.connectionPromise;
  }

  public async stop(): Promise<void> {
    if (this.idleTimer) {
      clearTimeout(this.idleTimer);
      this.idleTimer = null;
    }
    if (this.childProcess) {
      try {
        this.childProcess.kill("SIGTERM");
        // Force kill after 3 seconds if process did not exit
        const proc = this.childProcess;
        setTimeout(() => {
          if (proc && !proc.killed) {
            try {
              proc.kill("SIGKILL");
            } catch {}
          }
        }, 3000).unref();
      } catch {}
      this.childProcess = null;
    }
    this.connection = null;
    this.connectionPromise = null;
    this.activeLeases.clear();
  }

  public getChildProcess(): ChildProcess | null {
    return this.childProcess;
  }

  public getPid(): number | null {
    return this.childProcess?.pid ?? null;
  }
}
