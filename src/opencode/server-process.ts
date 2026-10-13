import { spawn, type ChildProcess } from "node:child_process";
import { existsSync } from "node:fs";
import { createOpencodeClient, type OpencodeClient } from "@opencode-ai/sdk/v2";

export interface ServerConnection {
  url: string;
  password: string;
  client: OpencodeClient;
  process: ChildProcess;
}

export class OpenCodeServerManager {
  private childProcess: ChildProcess | null = null;
  private connection: ServerConnection | null = null;
  private connectionPromise: Promise<ServerConnection> | null = null;

  private findBinary(): string {
    const candidates = [
      "/opt/homebrew/bin/opencode",
      "/usr/local/bin/opencode",
      process.env.OPENCODE_BIN_PATH,
    ].filter((p): p is string => Boolean(p && existsSync(p)));

    if (candidates.length > 0) {
      return candidates[0];
    }
    return "opencode";
  }

  public async start(): Promise<ServerConnection> {
    if (this.connection) {
      return this.connection;
    }
    if (this.connectionPromise) {
      return this.connectionPromise;
    }

    this.connectionPromise = new Promise<ServerConnection>((resolve, reject) => {
      const binary = this.findBinary();
      const child = spawn(binary, ["serve", "--hostname=127.0.0.1", "--port=0"], {
        stdio: ["ignore", "pipe", "pipe"],
        env: { ...process.env },
      });

      this.childProcess = child;

      let detectedUrl: string | null = null;
      let detectedPassword: string | null = null;
      let resolved = false;

      const timeout = setTimeout(() => {
        if (!resolved) {
          cleanup();
          reject(new Error("Timeout waiting for OpenCode server to initialize"));
        }
      }, 15000);

      const cleanup = () => {
        clearTimeout(timeout);
        child.stdout?.removeAllListeners("data");
        child.stderr?.removeAllListeners("data");
      };

      const checkReady = () => {
        if (detectedUrl && detectedPassword && !resolved) {
          resolved = true;
          cleanup();

          const client = createOpencodeClient({
            baseUrl: detectedUrl,
            headers: {
              Authorization:
                "Basic " +
                Buffer.from(`opencode:${detectedPassword}`).toString("base64"),
            },
          });

          const conn: ServerConnection = {
            url: detectedUrl,
            password: detectedPassword,
            client,
            process: child,
          };

          this.connection = conn;
          resolve(conn);
        }
      };

      const onLine = (line: string) => {
        const trimmed = line.trim();
        if (trimmed.includes("listening on")) {
          detectedUrl = trimmed.split("listening on").pop()?.trim() ?? null;
          checkReady();
        } else if (trimmed.includes("password")) {
          detectedPassword = trimmed.split("password").pop()?.trim() ?? null;
          checkReady();
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

      child.on("exit", (code, signal) => {
        this.connection = null;
        this.connectionPromise = null;
        this.childProcess = null;
        if (!resolved) {
          cleanup();
          reject(
            new Error(
              `OpenCode server exited before becoming ready (code=${code}, signal=${signal})`
            )
          );
        }
      });
    });

    return this.connectionPromise;
  }

  public async stop(): Promise<void> {
    if (this.childProcess) {
      try {
        this.childProcess.kill("SIGTERM");
      } catch {}
      this.childProcess = null;
      this.connection = null;
      this.connectionPromise = null;
    }
  }
}
