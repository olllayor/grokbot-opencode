import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import type { OpencodeClient } from "@opencode-ai/sdk/v2";
import type {
  AgentDescriptor,
  McpServerDescriptor,
  PromptFileAttachment,
  SendPromptArgs,
  SkillDescriptor,
  TranscriptEntry,
  TranscriptFeedEvent,
  TranscriptMessageEntry,
  TranscriptOrderedStamp,
  TranscriptThinkingEntry,
  TranscriptToolCallEntry,
} from "./types.js";

export type EventBroadcaster = (event: TranscriptFeedEvent) => void;

interface AgentSessionBinding {
  agent: AgentDescriptor;
  sessionId: string;
  entries: TranscriptEntry[];
  sequenceCounter: number;
  abortController: AbortController | null;
  epoch: string;
  cwd?: string;
  nextCursor?: string | null;
}

function detectMimeType(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".gif":
      return "image/gif";
    case ".webp":
      return "image/webp";
    case ".svg":
      return "image/svg+xml";
    case ".pdf":
      return "application/pdf";
    case ".json":
      return "application/json";
    case ".txt":
      return "text/plain";
    case ".md":
      return "text/markdown";
    case ".ts":
    case ".mts":
    case ".cts":
      return "text/typescript";
    case ".js":
    case ".mjs":
    case ".cjs":
      return "text/javascript";
    case ".html":
    case ".htm":
      return "text/html";
    case ".css":
      return "text/css";
    case ".csv":
      return "text/csv";
    default:
      return "application/octet-stream";
  }
}

function getSessionStorePath(): string {
  if (process.env.OPENCODE_SESSION_STORE_PATH) {
    return process.env.OPENCODE_SESSION_STORE_PATH;
  }
  const stateHome =
    process.env.XDG_STATE_HOME ||
    path.join(os.homedir(), ".local", "state");
  return path.join(stateHome, "opencode", "grokbot-sessions.json");
}

export class OpenCodeAgentManager {
  private client: OpencodeClient;
  private broadcaster: EventBroadcaster;
  private sessions = new Map<string, AgentSessionBinding>();
  private defaultAgentId = "main-opencode-agent";
  private customSessionStorePath?: string;
  private workspaceDirectory?: string;

  // In-memory cache for persisted sessions to eliminate repeated disk reads
  private persistedCache: Record<
    string,
    { sessionId: string; model?: string; title?: string; role?: string; cwd?: string }
  > | null = null;
  private saveDebounceTimer: NodeJS.Timeout | null = null;

  // In-flight coalescing and response caches for high-frequency RPCs
  private inFlightEnsureSession = new Map<string, Promise<AgentSessionBinding>>();
  private cachedAgents: AgentDescriptor[] | null = null;
  private cachedAgentsExpiresAt = 0;
  private inFlightListAgentsPromise: Promise<AgentDescriptor[]> | null = null;

  private cachedSkills: SkillDescriptor[] | null = null;
  private cachedSkillsExpiresAt = 0;
  private inFlightSkillsPromise: Promise<SkillDescriptor[]> | null = null;

  private cachedMcpServers: McpServerDescriptor[] | null = null;
  private cachedMcpExpiresAt = 0;
  private inFlightMcpPromise: Promise<{ servers: McpServerDescriptor[] }> | null = null;

  private cachedActiveModel: string | null = null;
  private cachedActiveModelExpiresAt = 0;
  private inFlightModelPromise: Promise<string> | null = null;

  constructor(
    client: OpencodeClient,
    broadcaster: EventBroadcaster,
    options?: { sessionStorePath?: string; workspaceDirectory?: string }
  ) {
    this.client = client;
    this.broadcaster = broadcaster;
    this.customSessionStorePath = options?.sessionStorePath;
    if (options?.workspaceDirectory) {
      this.workspaceDirectory = options.workspaceDirectory;
    }
    this.loadPersistedSessions();
  }

  public setBroadcaster(broadcaster: EventBroadcaster): void {
    this.broadcaster = broadcaster;
  }

  /**
   * Update the active workspace/project directory pushed from the Electron
   * main process (project folder selection) or coordinator bootstrap config.
   * Future sessions use it; per-request cwd/directory still overrides.
   */
  public setWorkspaceDirectory(directory: string): void {
    if (typeof directory === "string" && directory.length > 0) {
      this.workspaceDirectory = directory;
      // Invalidate skills cache when workspace changes
      this.cachedSkills = null;
      this.cachedSkillsExpiresAt = 0;
      this.cachedMcpServers = null;
      this.cachedMcpExpiresAt = 0;
    }
  }

  public getWorkspaceDirectory(): string {
    return (
      this.workspaceDirectory ||
      process.env.OPENCODE_PROJECT_DIR ||
      process.env.WORKSPACE_DIR ||
      process.cwd()
    );
  }

  private getStorePath(): string {
    if (this.customSessionStorePath) {
      return this.customSessionStorePath;
    }
    return getSessionStorePath();
  }

  private loadPersistedSessions(): Record<
    string,
    { sessionId: string; model?: string; title?: string; role?: string; cwd?: string }
  > {
    if (this.persistedCache !== null) {
      return this.persistedCache;
    }
    try {
      const filePath = this.getStorePath();
      if (filePath === ":memory:") {
        this.persistedCache = {};
        return this.persistedCache;
      }
      if (existsSync(filePath)) {
        const raw = readFileSync(filePath, "utf8");
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") {
          const cache = parsed as Record<
            string,
            { sessionId: string; model?: string; title?: string; role?: string; cwd?: string }
          >;
          this.persistedCache = cache;
          return cache;
        }
      }
    } catch {}
    this.persistedCache = {};
    return this.persistedCache;
  }

  private savePersistedSessions(immediate = false): void {
    try {
      const filePath = this.getStorePath();
      if (filePath === ":memory:") {
        return;
      }
      const data: Record<string, any> = {};
      for (const [agentId, binding] of this.sessions.entries()) {
        data[agentId] = {
          sessionId: binding.sessionId,
          title: binding.agent.name,
          model: binding.agent.model,
          role: binding.agent.role,
          cwd: binding.cwd,
        };
      }
      this.persistedCache = data;

      const flush = () => {
        try {
          mkdirSync(path.dirname(filePath), { recursive: true });
          writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
        } catch {}
      };

      if (immediate) {
        if (this.saveDebounceTimer) {
          clearTimeout(this.saveDebounceTimer);
          this.saveDebounceTimer = null;
        }
        flush();
      } else {
        if (this.saveDebounceTimer) {
          clearTimeout(this.saveDebounceTimer);
        }
        this.saveDebounceTimer = setTimeout(() => {
          this.saveDebounceTimer = null;
          flush();
        }, 100);
      }
    } catch {}
  }

  public parseModelString(modelStr?: string): { providerID: string; modelID: string } {
    if (!modelStr) {
      return { providerID: "opencode", modelID: "big-pickle" };
    }
    if (modelStr.includes("/")) {
      const slashIdx = modelStr.indexOf("/");
      const prov = modelStr.slice(0, slashIdx);
      const mod = modelStr.slice(slashIdx + 1);
      return { providerID: prov || "opencode", modelID: mod || modelStr };
    }
    return { providerID: "opencode", modelID: modelStr };
  }

  private nextSequence(binding: AgentSessionBinding): TranscriptOrderedStamp {
    binding.sequenceCounter += 1;
    const replicaKey = binding.sessionId
      ? `transcript:${binding.agent.id}\0${binding.sessionId}`
      : `transcript:${binding.agent.id}`;
    return {
      replicaKey,
      epoch: binding.epoch || "1",
      sequence: binding.sequenceCounter,
    };
  }

  public async getActiveModel(): Promise<string> {
    if (this.cachedActiveModel && Date.now() < this.cachedActiveModelExpiresAt) {
      return this.cachedActiveModel;
    }
    if (this.inFlightModelPromise) {
      return this.inFlightModelPromise;
    }
    this.inFlightModelPromise = (async () => {
      try {
        if ((this.client as any).v2?.model?.list) {
          const res = await (this.client as any).v2.model.list();
          const models = res?.data?.data ?? res?.data;
          if (Array.isArray(models) && models.length > 0) {
            const candidates = models.filter((m: any) => {
              const cost = Array.isArray(m.cost) ? m.cost[0] : m.cost;
              const isZeroCost = cost && cost.input === 0 && cost.output === 0;
              const id = String(m.id || "").toLowerCase();
              const name = String(m.name || "").toLowerCase();
              return isZeroCost || id.includes("free") || id.includes("pickle") || name.includes("free");
            });
            const best =
              candidates.find((m: any) => String(m.id).includes("mimo-v2.6-flash-free")) ||
              candidates.find((m: any) => String(m.id).includes("cat-jam-free")) ||
              candidates.find((m: any) => String(m.id).includes("big-pickle")) ||
              candidates[0];
            if (best) {
              const id = best.id || best.name;
              const prov = best.providerID || "opencode";
              const result = id.includes("/") ? id : `${prov}/${id}`;
              this.cachedActiveModel = result;
              this.cachedActiveModelExpiresAt = Date.now() + 60_000;
              return result;
            }
            const first = models[0];
            const fallback = first?.id ?? first?.name ?? "opencode/mimo-v2.6-flash-free";
            this.cachedActiveModel = fallback;
            this.cachedActiveModelExpiresAt = Date.now() + 60_000;
            return fallback;
          }
        }
      } catch {}
      return "opencode/mimo-v2.6-flash-free";
    })();

    try {
      return await this.inFlightModelPromise;
    } finally {
      this.inFlightModelPromise = null;
    }
  }

  public async ensureAgentSession(agentId: string): Promise<AgentSessionBinding> {
    const existing = this.sessions.get(agentId);
    if (existing) {
      return existing;
    }

    const inFlight = this.inFlightEnsureSession.get(agentId);
    if (inFlight) {
      return inFlight;
    }

    const promise = this._doEnsureAgentSession(agentId);
    this.inFlightEnsureSession.set(agentId, promise);
    try {
      return await promise;
    } finally {
      this.inFlightEnsureSession.delete(agentId);
    }
  }

  private async _doEnsureAgentSession(agentId: string): Promise<AgentSessionBinding> {
    const persistedMap = this.loadPersistedSessions();
    const persisted = persistedMap[agentId];

    let agent: AgentDescriptor;
    if (agentId === this.defaultAgentId) {
      agent = {
        id: this.defaultAgentId,
        name: persisted?.title || "OpenCode Assistant",
        harness: "temporal",
        role: persisted?.role || "General Software Engineer",
        model: persisted?.model,
        memberIds: [],
        memberAgentIds: [],
        isGroup: false,
      };
    } else {
      const allAgents = await this.listAgents();
      const matched = allAgents.find((a) => a.id === agentId || a.name === agentId);
      agent = matched ?? {
        id: agentId,
        name: persisted?.title || agentId,
        harness: "temporal",
        role: persisted?.role || "OpenCode Agent",
        model: persisted?.model,
        memberIds: [],
        memberAgentIds: [],
        isGroup: false,
      };
      if (persisted?.title) agent.name = persisted.title;
      if (persisted?.role) agent.role = persisted.role;
      if (persisted?.model) agent.model = persisted.model;
    }

    const effectiveCwd =
      persisted?.cwd || agent.cwd || this.getWorkspaceDirectory();
    agent.cwd = effectiveCwd;

    let sessionId: string | null = persisted?.sessionId ?? null;

    if (!sessionId) {
      const targetAgent = agentId === this.defaultAgentId ? "general" : agentId;
      const createParams: any = {
        agent: targetAgent,
        title: agentId === this.defaultAgentId ? "OpenCode Chat" : agent.name || "OpenCode Chat",
        location: { directory: effectiveCwd },
      };
      const createOptions: any = {
        throwOnError: true,
        query: { directory: effectiveCwd },
        headers: { "x-opencode-directory": encodeURIComponent(effectiveCwd) },
      };

      if (typeof (this.client as any).v2?.session?.create === "function") {
        const sessRes = await (this.client as any).v2.session.create(createParams, createOptions);
        if (sessRes?.error) {
          throw new Error(
            `OpenCode session creation failed: ${sessRes.error?.message ?? sessRes.response?.status ?? 400}`
          );
        }
        sessionId =
          (sessRes as any)?.data?.data?.id ??
          (sessRes as any)?.data?.id ??
          (sessRes as any)?.id ??
          null;
      } else if (typeof (this.client as any).session?.create === "function") {
        const sessRes = await (this.client as any).session.create(createParams, createOptions);
        if (sessRes?.error) {
          throw new Error(
            `OpenCode session creation failed: ${sessRes.error?.message ?? sessRes.response?.status ?? 400}`
          );
        }
        sessionId =
          (sessRes as any)?.data?.data?.id ??
          (sessRes as any)?.data?.id ??
          (sessRes as any)?.id ??
          null;
      } else {
        const cfg =
          (this.client as any).client?.getConfig?.() ??
          (this.client as any).getConfig?.();
        const baseUrl = cfg?.baseUrl;
        if (baseUrl) {
          const headers = new Headers(cfg.headers);
          headers.set("Content-Type", "application/json");
          headers.set("x-opencode-directory", encodeURIComponent(effectiveCwd));
          const url = new URL(`${baseUrl}/api/session`);
          url.searchParams.set("directory", effectiveCwd);
          const res = await fetch(url.toString(), {
            method: "POST",
            headers,
            body: JSON.stringify(createParams),
          });
          if (!res.ok) {
            const errText = await res.text().catch(() => "");
            throw new Error(`OpenCode session creation failed (${res.status}): ${errText}`);
          }
          const json: any = await res.json();
          sessionId = json?.data?.data?.id ?? json?.data?.id ?? json?.id ?? null;
        }
      }
    }

    if (!sessionId) {
      throw new Error(`Failed to create OpenCode session for agent "${agentId}": server returned no session ID`);
    }

    let activeModel = agent.model;
    if (!activeModel || activeModel.includes("argon")) {
      activeModel = await this.getActiveModel();
    }
    agent.model = activeModel;

    // Only switch model if newly created or model changed from persisted
    if (activeModel && sessionId && (!persisted?.model || persisted.model !== activeModel)) {
      const { providerID, modelID } = this.parseModelString(activeModel);
      try {
        if (typeof (this.client as any).v2?.session?.switchModel === "function") {
          await (this.client as any).v2.session.switchModel({
            sessionID: sessionId,
            model: { id: modelID, providerID },
          });
        } else {
          const api = this.getApiBase();
          if (api) {
            const reqHeaders = new Headers();
            for (const [k, v] of Object.entries(api.headers)) {
              reqHeaders.set(k, v);
            }
            reqHeaders.set("content-type", "application/json");
            await fetch(`${api.baseUrl}/api/session/${sessionId}/model`, {
              method: "POST",
              headers: reqHeaders,
              body: JSON.stringify({
                model: { id: modelID, providerID },
              }),
            });
          }
        }
      } catch (err) {
        console.warn("[opencode-agent-manager] model sync error:", err);
      }
    }

    const binding: AgentSessionBinding = {
      agent,
      sessionId,
      entries: [],
      sequenceCounter: 0,
      abortController: null,
      epoch: "1",
      cwd: effectiveCwd,
      nextCursor: null,
    };

    this.sessions.set(agentId, binding);
    this.savePersistedSessions(true);
    return binding;
  }

  public async ensureDefaultAgent(): Promise<AgentDescriptor> {
    const binding = await this.ensureAgentSession(this.defaultAgentId);
    return binding.agent;
  }

  public async getMainAgent(): Promise<{ agentId: string | null }> {
    const agent = await this.ensureDefaultAgent();
    return { agentId: agent.id };
  }

  public async listAgents(): Promise<AgentDescriptor[]> {
    if (this.cachedAgents && Date.now() < this.cachedAgentsExpiresAt) {
      return this.cachedAgents;
    }
    if (this.inFlightListAgentsPromise) {
      return this.inFlightListAgentsPromise;
    }

    this.inFlightListAgentsPromise = (async () => {
      try {
        let raw: any = null;
        const hasV2 = typeof (this.client as any).v2?.agent?.list === "function";
        const hasApp = typeof (this.client as any).app?.agents === "function";

        if (hasV2) {
          const res = await (this.client as any).v2.agent.list();
          raw = res?.data?.data ?? res?.data;
        } else if (hasApp) {
          const res = await (this.client as any).app.agents();
          raw = res?.data ?? res;
        }

        const items = Array.isArray(raw?.data)
          ? raw.data
          : Array.isArray(raw)
          ? raw
          : [];

        if (items.length > 0) {
          const mapped = items.map((a: any) => ({
            id: a.id || a.name,
            name: a.name || a.id,
            harness: "temporal" as const,
            role: a.description || "OpenCode Agent",
            model: typeof a.model === "string" ? a.model : a.model?.name ?? a.model?.id,
            memberIds: Array.isArray(a.memberIds) ? a.memberIds : [],
            memberAgentIds: Array.isArray(a.memberAgentIds) ? a.memberAgentIds : [],
            isGroup: Boolean(a.isGroup),
          }));
          this.cachedAgents = mapped;
          this.cachedAgentsExpiresAt = Date.now() + 10_000;
          return mapped;
        }
      } catch (err) {
        console.warn("[opencode-agent-manager] listAgents error:", err);
      }

      const defaultAgent = await this.ensureDefaultAgent();
      const fallback = [defaultAgent];
      this.cachedAgents = fallback;
      this.cachedAgentsExpiresAt = Date.now() + 2_000;
      return fallback;
    })();

    try {
      return await this.inFlightListAgentsPromise;
    } finally {
      this.inFlightListAgentsPromise = null;
    }
  }

  public async getServerAgentRoster(): Promise<{ status: "ready"; agents: AgentDescriptor[] }> {
    const agents = await this.listAgents();
    return {
      status: "ready",
      agents,
    };
  }

  public async createAgent(args: any): Promise<AgentDescriptor> {
    const id =
      args?.id ||
      args?.agentId ||
      `agent-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
    const name = args?.name || "OpenCode Agent";
    const role = args?.description || args?.role || "General Assistant";
    const cwd = args?.cwd || args?.directory || args?.workingDirectory;
    const agent: AgentDescriptor = {
      id,
      name,
      harness: "temporal",
      role,
      cwd,
      memberIds: Array.isArray(args?.memberIds) ? args.memberIds : [],
      memberAgentIds: Array.isArray(args?.memberAgentIds) ? args.memberAgentIds : [],
      isGroup: Boolean(args?.isGroup),
      model: typeof args?.model === "string" ? args.model : args?.model?.name ?? args?.model?.id,
    };
    await this.ensureAgentSession(id);
    const existing = this.sessions.get(id);
    if (existing) {
      existing.agent = agent;
      if (cwd) existing.cwd = cwd;
      this.savePersistedSessions(true);
    }
    // Invalidate agents cache
    this.cachedAgents = null;
    this.cachedAgentsExpiresAt = 0;
    return agent;
  }

  public async updateAgent(args: any): Promise<{ agent: AgentDescriptor }> {
    const id = args?.id || args?.agentId || this.defaultAgentId;
    const binding = await this.ensureAgentSession(id);
    const profile = args?.profile && typeof args.profile === "object" ? args.profile : args;

    if (profile.name && typeof profile.name === "string") {
      binding.agent.name = profile.name;
    }
    if (profile.title && typeof profile.title === "string") {
      binding.agent.name = profile.title;
    }
    if (profile.role && typeof profile.role === "string") {
      binding.agent.role = profile.role;
    }
    if (profile.description && typeof profile.description === "string") {
      binding.agent.role = profile.description;
    }
    if (profile.model) {
      const modelStr =
        typeof profile.model === "string"
          ? profile.model
          : (profile.model?.name ?? profile.model?.id ?? String(profile.model));
      binding.agent.model = modelStr;

      if (binding.sessionId) {
        const { providerID, modelID } = this.parseModelString(modelStr);
        try {
          if (typeof (this.client as any).v2?.session?.switchModel === "function") {
            await (this.client as any).v2.session.switchModel({
              sessionID: binding.sessionId,
              model: { id: modelID, providerID },
            });
          } else {
            const api = this.getApiBase();
            if (api) {
              const reqHeaders = new Headers();
              for (const [k, v] of Object.entries(api.headers)) {
                reqHeaders.set(k, v);
              }
              reqHeaders.set("content-type", "application/json");
              await fetch(`${api.baseUrl}/api/session/${binding.sessionId}/model`, {
                method: "POST",
                headers: reqHeaders,
                body: JSON.stringify({
                  model: { id: modelID, providerID },
                }),
              });
            }
          }
        } catch (err) {
          console.warn("[opencode-agent-manager] switchModel warning:", err);
        }
      }
    }

    const newCwd = profile.cwd || profile.directory || profile.workingDirectory;
    if (newCwd && typeof newCwd === "string") {
      binding.cwd = newCwd;
      binding.agent.cwd = newCwd;
    }

    this.savePersistedSessions(true);
    this.cachedAgents = null;
    this.cachedAgentsExpiresAt = 0;
    return { agent: binding.agent };
  }

  public deleteAgents(ids: string[]): { refusedAgentIds: string[]; failedAgentIds: string[] } {
    for (const id of ids) {
      this.sessions.delete(id);
    }
    this.savePersistedSessions(true);
    this.cachedAgents = null;
    this.cachedAgentsExpiresAt = 0;
    return { refusedAgentIds: [], failedAgentIds: [] };
  }

  public async getSkillsCatalog(): Promise<SkillDescriptor[]> {
    if (this.cachedSkills && Date.now() < this.cachedSkillsExpiresAt) {
      return this.cachedSkills;
    }
    if (this.inFlightSkillsPromise) {
      return this.inFlightSkillsPromise;
    }

    this.inFlightSkillsPromise = (async () => {
      const skillsMap = new Map<string, SkillDescriptor>();

      // 1. Query live OpenCode v2 client
      try {
        let raw: any = null;
        if ((this.client as any).v2?.skill?.list) {
          const res = await (this.client as any).v2.skill.list();
          raw = res?.data?.data ?? res?.data;
        } else if ((this.client as any).app?.skills) {
          const res = await (this.client as any).app.skills();
          raw = res?.data ?? res;
        }
        const items = Array.isArray(raw?.data)
          ? raw.data
          : Array.isArray(raw)
          ? raw
          : [];
        for (const s of items) {
          const name = s.name || s.id;
          if (name) {
            skillsMap.set(name, {
              name,
              description: s.description ?? "",
              content: s.content ?? "",
            });
          }
        }
      } catch (err) {
        console.warn("[opencode-agent-manager] getSkillsCatalog error:", err);
      }

      // 2. Fall back / merge workspace-local skills (.opencode/skills or .claude/skills)
      try {
        const workspaceDir = this.getWorkspaceDirectory();
        const localRoots = [
          path.join(workspaceDir, ".opencode", "skills"),
          path.join(workspaceDir, ".claude", "skills"),
        ];
        for (const root of localRoots) {
          if (existsSync(root)) {
            const entries = readdirSync(root, { withFileTypes: true });
            for (const ent of entries) {
              let skillFile: string | null = null;
              let skillName = ent.name;
              if (ent.isDirectory()) {
                const cand = path.join(root, ent.name, "SKILL.md");
                if (existsSync(cand)) {
                  skillFile = cand;
                }
              } else if (ent.isFile() && ent.name.endsWith(".md")) {
                skillFile = path.join(root, ent.name);
                skillName = ent.name.replace(/\.md$/, "");
              }
              if (skillFile && !skillsMap.has(skillName)) {
                try {
                  const content = readFileSync(skillFile, "utf8");
                  let description = "";
                  const match = content.match(/^---\s*[\r\n]+([\s\S]*?)[\r\n]+---/);
                  if (match) {
                    const descMatch = match[1].match(/description:\s*(.+)/);
                    if (descMatch) {
                      description = descMatch[1].trim().replace(/^['"]|['"]$/g, "");
                    }
                  }
                  skillsMap.set(skillName, {
                    name: skillName,
                    description,
                    content,
                  });
                } catch {}
              }
            }
          }
        }
      } catch {}

      const result = Array.from(skillsMap.values());
      this.cachedSkills = result;
      this.cachedSkillsExpiresAt = Date.now() + 15_000; // 15s TTL
      return result;
    })();

    try {
      return await this.inFlightSkillsPromise;
    } finally {
      this.inFlightSkillsPromise = null;
    }
  }

  private getApiBase(): { baseUrl: string; headers: Record<string, string> } | null {
    try {
      const cfg =
        (this.client as any).client?.getConfig?.() ??
        (this.client as any).getConfig?.();
      const baseUrl = typeof cfg?.baseUrl === "string" ? cfg.baseUrl.replace(/\/+$/, "") : null;
      if (!baseUrl) return null;
      const headers: Record<string, string> = {};
      const rawHeaders = cfg?.headers;
      if (rawHeaders instanceof Headers) {
        rawHeaders.forEach((v, k) => {
          headers[k] = v;
        });
      } else if (rawHeaders && typeof rawHeaders === "object") {
        Object.assign(headers, rawHeaders);
      }
      return { baseUrl, headers };
    } catch {
      return null;
    }
  }

  private mapMcpStatusValue(status: any): McpServerDescriptor["status"] {
    const s = typeof status === "string" ? status : status?.status ?? status?.state;
    if (s === "connected" || s === "connecting" || s === "error" || s === "disabled") {
      return s;
    }
    return "connected";
  }

  /**
   * Live MCP server list with caching.
   */
  public async listMcpServers(): Promise<{ servers: McpServerDescriptor[] }> {
    if (this.cachedMcpServers && Date.now() < this.cachedMcpExpiresAt) {
      return { servers: this.cachedMcpServers };
    }
    if (this.inFlightMcpPromise) {
      return this.inFlightMcpPromise;
    }

    this.inFlightMcpPromise = (async () => {
      const directory = this.getWorkspaceDirectory();
      try {
        const api = this.getApiBase();
        if (api) {
          const url = new URL(`${api.baseUrl}/api/mcp`);
          url.searchParams.set("directory", directory);
          const res = await fetch(url.toString(), { headers: api.headers });
          if (res.ok) {
            const json: any = await res.json().catch(() => null);
            const items = json?.data ?? json;
            if (Array.isArray(items)) {
              const servers = items.map((s: any) => {
                const name = s.name || s.id || String(s);
                return {
                  id: name,
                  serverIdentifier: name,
                  name,
                  status: this.mapMcpStatusValue(s.status),
                };
              });
              this.cachedMcpServers = servers;
              this.cachedMcpExpiresAt = Date.now() + 10_000;
              return { servers };
            }
          }
        }
      } catch {}
      try {
        if ((this.client as any).mcp?.status) {
          const res = await (this.client as any).mcp.status();
          const data = res?.data ?? res;
          const servers: McpServerDescriptor[] = [];
          if (data && typeof data === "object") {
            for (const [name, info] of Object.entries(data)) {
              servers.push({
                id: name,
                serverIdentifier: name,
                name,
                status: this.mapMcpStatusValue(info),
              });
            }
          }
          this.cachedMcpServers = servers;
          this.cachedMcpExpiresAt = Date.now() + 10_000;
          return { servers };
        }
      } catch {}
      const fallback: McpServerDescriptor[] = [];
      this.cachedMcpServers = fallback;
      this.cachedMcpExpiresAt = Date.now() + 2_000;
      return { servers: fallback };
    })();

    try {
      return await this.inFlightMcpPromise;
    } finally {
      this.inFlightMcpPromise = null;
    }
  }

  public async getMcpState(): Promise<{
    servers: Array<{
      id: string;
      serverIdentifier: string;
      name: string;
      status: string;
    }>;
    configuredServers: unknown[];
  }> {
    try {
      const { servers } = await this.listMcpServers();
      return {
        servers: servers.map((s) => ({
          id: s.id ?? s.name,
          serverIdentifier: s.serverIdentifier ?? s.name,
          name: s.name,
          status: s.status ?? "connected",
        })),
        configuredServers: [],
      };
    } catch {
      return { servers: [], configuredServers: [] };
    }
  }

  public async listMcpServerTools(
    serverId?: string
  ): Promise<Array<{ name: string; description?: string }>> {
    if (!serverId) return [];
    try {
      const api = this.getApiBase();
      if (api) {
        const url = new URL(
          `${api.baseUrl}/api/mcp/${encodeURIComponent(serverId)}/tools`
        );
        url.searchParams.set("directory", this.getWorkspaceDirectory());
        const res = await fetch(url.toString(), { headers: api.headers });
        if (res.ok) {
          const json: any = await res.json().catch(() => null);
          const items = json?.data ?? json;
          if (Array.isArray(items)) {
            return items.map((t: any) =>
              typeof t === "string"
                ? { name: t }
                : { name: t.name ?? t.id ?? String(t), description: t.description }
            );
          }
        }
      }
    } catch {}
    return [];
  }

  private convertRawMessagesToEntries(rawMessages: any[]): TranscriptEntry[] {
    if (!Array.isArray(rawMessages) || rawMessages.length === 0) return [];
    const sorted = [...rawMessages].sort((a, b) => {
      const tA = a?.time?.created ?? a?.info?.timestampMs ?? a?.timestampMs ?? 0;
      const tB = b?.time?.created ?? b?.info?.timestampMs ?? b?.timestampMs ?? 0;
      return tA - tB;
    });

    const entries: TranscriptEntry[] = [];
    for (const item of sorted) {
      const role = item?.info?.role ?? item?.role ?? item?.type;
      const msgId = item?.info?.id ?? item?.id ?? `msg-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
      const timestampMs = item?.time?.created ?? item?.info?.timestampMs ?? item?.timestampMs ?? Date.now();

      if (role === "user") {
        let userText = "";
        if (typeof item?.text === "string") {
          userText = item.text;
        } else if (typeof item?.payload?.text === "string") {
          userText = item.payload.text;
        } else if (Array.isArray(item?.parts)) {
          userText = item.parts.find((p: any) => p.type === "text")?.text ?? "";
        } else if (typeof item?.content === "string") {
          userText = item.content;
        }
        entries.push({
          kind: "message",
          id: msgId,
          role: "user",
          content: userText,
          isStreaming: false,
          timestampMs,
        });
      } else if (role === "assistant") {
        let assistantContent = "";
        const contentParts = Array.isArray(item?.content)
          ? item.content
          : Array.isArray(item?.parts)
          ? item.parts
          : null;

        if (contentParts) {
          for (const p of contentParts) {
            if (p.type === "text") {
              assistantContent += p.text ?? "";
            } else if (p.type === "reasoning") {
              entries.push({
                kind: "thinking",
                id: p.id ?? `think-${msgId}`,
                text: p.text ?? "",
                isStreaming: false,
                timestampMs,
              });
            } else if (p.type === "tool") {
              entries.push({
                kind: "tool-call",
                id: p.callID ?? `tool-${msgId}`,
                name: p.tool ?? p.name ?? "tool",
                status: p.state === "failed" ? "failed" : "completed",
                input: p.input,
                output: p.output ?? p.result,
                timestampMs,
              });
            }
          }
        } else if (typeof item?.content === "string") {
          assistantContent = item.content;
        } else if (typeof item?.text === "string") {
          assistantContent = item.text;
        }

        if (item?.error) {
          const errMsg = item.error.message || "Execution error";
          assistantContent = assistantContent
            ? `${assistantContent}\n\n[Error: ${errMsg}]`
            : `Error: ${errMsg}`;
        }

        if (assistantContent) {
          entries.push({
            kind: "message",
            id: msgId,
            role: "assistant",
            content: assistantContent,
            isStreaming: false,
            timestampMs,
          });
        }
      }
    }
    return entries;
  }

  private async hydrateSessionHistory(
    binding: AgentSessionBinding,
    limit = 50
  ): Promise<void> {
    try {
      let rawMessages: any[] = [];
      const api = this.getApiBase();
      if (api && binding.sessionId) {
        try {
          const res = await fetch(`${api.baseUrl}/api/session/${binding.sessionId}/message`, {
            headers: api.headers,
          });
          if (res.ok) {
            const json: any = await res.json();
            rawMessages = json?.data?.data ?? json?.data ?? [];
            if (json?.cursor?.next) {
              binding.nextCursor = json.cursor.next;
            } else {
              binding.nextCursor = null;
            }
          }
        } catch {}
      }

      if (rawMessages.length === 0) {
        if (typeof (this.client as any).v2?.session?.messages === "function") {
          const res = await (this.client as any).v2.session.messages({
            sessionID: binding.sessionId,
          });
          rawMessages = res?.data?.data ?? res?.data ?? [];
        } else if (typeof (this.client as any).session?.messages === "function") {
          const res = await (this.client as any).session.messages({
            sessionID: binding.sessionId,
            path: { sessionID: binding.sessionId },
          });
          rawMessages = res?.data?.data ?? res?.data ?? [];
        }
      }

      if (Array.isArray(rawMessages) && rawMessages.length > 0) {
        const entries = this.convertRawMessagesToEntries(rawMessages);
        binding.entries = entries;
        binding.sequenceCounter = Math.max(binding.sequenceCounter, entries.length);
      }
    } catch (err) {
      console.warn("[opencode-agent-manager] hydrateSessionHistory error:", err);
    }
  }

  private async fetchOlderMessages(
    binding: AgentSessionBinding,
    limit = 50
  ): Promise<number> {
    if (!binding.nextCursor || !binding.sessionId) return 0;
    try {
      const api = this.getApiBase();
      if (!api) return 0;
      const url = new URL(`${api.baseUrl}/api/session/${binding.sessionId}/message`);
      url.searchParams.set("cursor", binding.nextCursor);
      url.searchParams.set("limit", String(limit));
      const res = await fetch(url.toString(), { headers: api.headers });
      if (res.ok) {
        const json: any = await res.json();
        const olderRaw = json?.data?.data ?? json?.data ?? [];
        binding.nextCursor = json?.cursor?.next ?? null;
        if (Array.isArray(olderRaw) && olderRaw.length > 0) {
          const olderEntries = this.convertRawMessagesToEntries(olderRaw);
          // Prepend older entries
          binding.entries = [...olderEntries, ...binding.entries];
          binding.sequenceCounter = Math.max(binding.sequenceCounter, binding.entries.length);
          return olderEntries.length;
        }
      }
    } catch (err) {
      console.warn("[opencode-agent-manager] fetchOlderMessages error:", err);
    }
    binding.nextCursor = null;
    return 0;
  }

  /**
   * Fast paginated transcript retrieval for smooth scrolling and instant screen opening.
   */
  public async getAgentTranscriptTail(
    agentId: string,
    limit = 50,
    beforeSeq?: number
  ): Promise<{
    entries: TranscriptEntry[];
    nextBeforeSeq: number | null;
    precedingTimestampMs: number | null;
    hasMore: boolean;
    unreadBoundarySeq: number;
  }> {
    const binding = await this.ensureAgentSession(agentId);
    if (binding.entries.length === 0 && binding.sessionId) {
      await this.hydrateSessionHistory(binding, limit);
    }

    const total = binding.entries.length;

    // Case 1: Initial tail (when screen opens or no beforeSeq provided)
    if (beforeSeq === undefined || beforeSeq === null) {
      const start = Math.max(0, total - limit);
      const sliced = binding.entries.slice(start);
      const hasOlder = start > 0 || Boolean(binding.nextCursor);
      const nextBeforeSeq = start > 0 ? start : binding.nextCursor ? 0 : null;
      const precedingTimestampMs =
        start > 0 ? (binding.entries[start - 1]?.timestampMs ?? null) : null;

      return {
        entries: sliced,
        nextBeforeSeq,
        precedingTimestampMs,
        hasMore: hasOlder,
        unreadBoundarySeq: 0,
      };
    }

    // Case 2: Scrolling up to load older content before beforeSeq
    let effectiveBeforeSeq = typeof beforeSeq === "number" ? beforeSeq : total;

    // If reaching the top of current memory and more pages exist on server, fetch older
    if (effectiveBeforeSeq <= 0 && binding.nextCursor && binding.sessionId) {
      const added = await this.fetchOlderMessages(binding, limit);
      effectiveBeforeSeq += added;
    }

    const end = Math.max(0, Math.min(effectiveBeforeSeq, binding.entries.length));
    const start = Math.max(0, end - limit);
    const sliced = binding.entries.slice(start, end);

    const hasOlder = start > 0 || Boolean(binding.nextCursor);
    const nextBeforeSeq = start > 0 ? start : binding.nextCursor ? 0 : null;
    const precedingTimestampMs =
      start > 0 ? (binding.entries[start - 1]?.timestampMs ?? null) : null;

    return {
      entries: sliced,
      nextBeforeSeq,
      precedingTimestampMs,
      hasMore: hasOlder,
      unreadBoundarySeq: 0,
    };
  }

  public async openAgentTail(
    agentId: string,
    limit = 50,
    beforeSeq?: number
  ): Promise<{
    entries: TranscriptEntry[];
    nextBeforeSeq: number | null;
    precedingTimestampMs: number | null;
    hasMore: boolean;
    unreadBoundarySeq: number;
  }> {
    return this.getAgentTranscriptTail(agentId, limit, beforeSeq);
  }

  public async sendPrompt(args: SendPromptArgs): Promise<{ accepted: true }> {
    const binding = await this.ensureAgentSession(args.agentId);

    const passedCwd = args.cwd || args.directory || args.workingDirectory;
    if (passedCwd) {
      binding.cwd = passedCwd;
      binding.agent.cwd = passedCwd;
    }

    const attachmentPaths = Array.isArray(args.attachmentPaths) ? args.attachmentPaths : [];
    const attachmentNames = Array.isArray(args.attachmentNames) ? args.attachmentNames : [];
    const promptFiles: PromptFileAttachment[] = [];
    const fileParts: any[] = [];

    const effectiveCwd = binding.cwd || process.cwd();
    for (let i = 0; i < attachmentPaths.length; i++) {
      const filePath = attachmentPaths[i];
      if (!filePath) continue;
      const absPath = path.isAbsolute(filePath) ? filePath : path.resolve(effectiveCwd, filePath);
      const filename = attachmentNames[i] || path.basename(filePath);
      const mime = detectMimeType(absPath);
      const uri = absPath.startsWith("file://") ? absPath : `file://${absPath}`;
      promptFiles.push({ uri, name: filename, mime });
      fileParts.push({ type: "file", mime, filename, url: uri });
    }

    let effectivePrompt = args.prompt;
    if (promptFiles.length > 0) {
      const fileAnnotations = promptFiles
        .map((f) => `[Attached file: ${f.name} (${f.uri})]`)
        .join("\n");
      effectivePrompt = `${args.prompt}\n\n${fileAnnotations}`;
    }

    const now = Date.now();
    const userEntry: TranscriptMessageEntry = {
      kind: "message",
      id: `user-${now}-${Math.random().toString(36).slice(2, 7)}`,
      role: "user",
      content: args.prompt,
      richText: args.richText || (promptFiles.length > 0 ? effectivePrompt : undefined),
      isStreaming: false,
      clientNonce: args.clientNonce,
      timestampMs: now,
    };

    binding.entries.push(userEntry);
    this.broadcaster({
      type: "appended",
      agentId: binding.agent.id,
      entry: { ...userEntry },
      ordered: this.nextSequence(binding),
    });

    const assistantEntry: TranscriptMessageEntry = {
      kind: "message",
      id: `asst-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      role: "assistant",
      content: "",
      isStreaming: true,
      timestampMs: Date.now(),
    };

    binding.entries.push(assistantEntry);
    this.broadcaster({
      type: "appended",
      agentId: binding.agent.id,
      entry: { ...assistantEntry },
      ordered: this.nextSequence(binding),
    });

    const ac = new AbortController();
    binding.abortController = ac;

    // Start background stream consumption
    this.streamAssistantTurn(binding, assistantEntry, ac).catch((err) => {
      console.error("[opencode-agent-manager] turn error:", err);
    });

    // Dispatch prompt
    await this.dispatchPromptToOpenCode(binding, effectivePrompt, assistantEntry, ac, {
      promptFiles,
      fileParts,
    });

    return { accepted: true };
  }

  private async dispatchPromptToOpenCode(
    binding: AgentSessionBinding,
    promptText: string,
    assistantEntry: TranscriptMessageEntry,
    ac: AbortController,
    attachments?: { promptFiles: PromptFileAttachment[]; fileParts: any[] }
  ): Promise<void> {
    const sessionId = binding.sessionId;
    let activeModel = binding.agent.model;
    if (!activeModel || activeModel.includes("argon")) {
      activeModel = await this.getActiveModel();
      binding.agent.model = activeModel;
    }
    const { providerID, modelID } = this.parseModelString(activeModel);
    const modelPayload = { id: modelID, modelID, providerID };
    const workingDir = binding.cwd || this.getWorkspaceDirectory();

    const promptInput = {
      text: promptText,
      files: attachments?.promptFiles?.length ? attachments.promptFiles : undefined,
    };
    const parts = [
      { type: "text", text: promptText },
      ...(attachments?.fileParts ?? []),
    ];

    try {
      const api = this.getApiBase();
      if (api && sessionId) {
        const url = new URL(`${api.baseUrl}/api/session/${sessionId}/prompt`);
        if (workingDir) {
          url.searchParams.set("directory", workingDir);
        }
        const reqHeaders = new Headers();
        for (const [k, v] of Object.entries(api.headers)) {
          reqHeaders.set(k, v);
        }
        reqHeaders.set("content-type", "application/json");
        if (workingDir) {
          reqHeaders.set("x-opencode-directory", encodeURIComponent(workingDir));
        }
        const res = await fetch(url.toString(), {
          method: "POST",
          headers: reqHeaders,
          body: JSON.stringify({
            text: promptText,
            prompt: promptInput,
            parts,
            model: modelPayload,
            files: attachments?.promptFiles?.length ? attachments.promptFiles : undefined,
          }),
          signal: ac.signal,
        });
        if (!res.ok) {
          const errText = await res.text().catch(() => "");
          throw new Error(`OpenCode prompt failed (${res.status}): ${errText}`);
        }
      } else if (typeof (this.client as any).v2?.session?.prompt === "function") {
        const res = await (this.client as any).v2.session.prompt(
          {
            sessionID: sessionId,
            prompt: promptInput,
            query: { directory: workingDir },
          },
          {
            signal: ac.signal,
            headers: {
              "x-opencode-directory": encodeURIComponent(workingDir),
            },
          }
        );
        if (res?.error) {
          throw new Error(`OpenCode prompt error: ${res.error.message || JSON.stringify(res.error)}`);
        }
      } else if (typeof (this.client as any).session?.promptAsync === "function") {
        await (this.client as any).session.promptAsync({
          sessionID: sessionId,
          parts,
          path: { sessionID: sessionId },
          body: { parts, model: modelPayload },
          query: { directory: workingDir },
        });
      }
    } catch (err: any) {
      if (!ac.signal.aborted) {
        console.error("[opencode-agent-manager] prompt dispatch error:", err);
        assistantEntry.content = `Error: ${err?.message || "Failed to dispatch prompt"}`;
        assistantEntry.isStreaming = false;
        this.broadcaster({
          type: "updated",
          agentId: binding.agent.id,
          entry: { ...assistantEntry },
          ordered: this.nextSequence(binding),
        });
        ac.abort();
      }
    }
  }

  private async streamAssistantTurn(
    binding: AgentSessionBinding,
    assistantEntry: TranscriptMessageEntry,
    ac: AbortController
  ): Promise<void> {
    const sessionId = binding.sessionId;
    let currentThinkingEntry: TranscriptThinkingEntry | null = null;
    let currentToolEntry: TranscriptToolCallEntry | null = null;

    // Lightweight bounded polling fallback every 800ms to guarantee completion
    let pollTimer: ReturnType<typeof setInterval> | null = null;
    if (sessionId) {
      pollTimer = setInterval(async () => {
        if (ac.signal.aborted || !assistantEntry.isStreaming) {
          if (pollTimer) clearInterval(pollTimer);
          return;
        }
        try {
          const api = this.getApiBase();
          if (api) {
            const res = await fetch(`${api.baseUrl}/api/session/${sessionId}/message`, {
              headers: api.headers,
              signal: ac.signal,
            });
            if (res.ok) {
              const json: any = await res.json();
              const list: any[] = json?.data ?? [];
              if (list.length > 0) {
                const latest = list[0];
                if (latest?.type === "idle" || latest?.outcome === "succeeded" || latest?.outcome === "failed") {
                  if (pollTimer) clearInterval(pollTimer);
                  const asstMsg = list.find((m) => m?.type === "assistant" || m?.role === "assistant");
                  if (asstMsg) {
                    if (asstMsg.error) {
                      const msg = asstMsg.error.message || "Execution error";
                      if (!assistantEntry.content) assistantEntry.content = `Error: ${msg}`;
                    } else if (Array.isArray(asstMsg.content)) {
                      const textPart = asstMsg.content.find((p: any) => p.type === "text");
                      if (textPart?.text && !assistantEntry.content) {
                        assistantEntry.content = textPart.text;
                      }
                    } else if (typeof asstMsg.text === "string" && !assistantEntry.content) {
                      assistantEntry.content = asstMsg.text;
                    }
                  }
                  if (currentThinkingEntry && currentThinkingEntry.isStreaming) {
                    currentThinkingEntry.isStreaming = false;
                    this.broadcaster({
                      type: "updated",
                      agentId: binding.agent.id,
                      entry: { ...currentThinkingEntry },
                      ordered: this.nextSequence(binding),
                    });
                  }
                  assistantEntry.isStreaming = false;
                  this.broadcaster({
                    type: "updated",
                    agentId: binding.agent.id,
                    entry: { ...assistantEntry },
                    ordered: this.nextSequence(binding),
                  });
                  ac.abort();
                }
              }
            }
          }
        } catch {}
      }, 800);
    }

    try {
      // Connect to event stream
      let stream: any = null;
      try {
        if ((this.client as any).v2?.event?.subscribe) {
          const eventsRes = await (this.client as any).v2.event.subscribe({ signal: ac.signal });
          stream = eventsRes?.stream;
        } else if ((this.client as any).event?.subscribe) {
          const eventsRes = await (this.client as any).event.subscribe({ signal: ac.signal });
          stream = eventsRes?.stream;
        }
      } catch (subErr) {
        console.warn("[opencode-agent-manager] event subscribe error:", subErr);
      }

      if (stream) {
        for await (const rawEv of stream) {
          if (ac.signal.aborted) {
            break;
          }

          const type = rawEv?.type ?? rawEv?.data?.type;
          const data = rawEv?.data ?? rawEv?.properties ?? {};
          const evSessionId = data?.sessionID ?? rawEv?.durable?.aggregateID;

          if (evSessionId && evSessionId !== sessionId) {
            continue;
          }

          // Handle message.part.updated (OpenCode v2 part streaming)
          if (type === "message.part.updated" || type === "part.updated") {
            const part = data?.part ?? data;
            if (part?.type === "text") {
              const delta = part.delta ?? "";
              if (delta) {
                assistantEntry.content += delta;
              } else if (part.text && !assistantEntry.content) {
                assistantEntry.content = part.text;
              }
              this.broadcaster({
                type: "updated",
                agentId: binding.agent.id,
                entry: { ...assistantEntry },
                ordered: this.nextSequence(binding),
              });
            } else if (part?.type === "reasoning") {
              if (!currentThinkingEntry) {
                currentThinkingEntry = {
                  kind: "thinking",
                  id: part.id ?? `thinking-${Date.now()}`,
                  text: "",
                  isStreaming: true,
                  timestampMs: Date.now(),
                };
                binding.entries.push(currentThinkingEntry);
                this.broadcaster({
                  type: "appended",
                  agentId: binding.agent.id,
                  entry: { ...currentThinkingEntry },
                  ordered: this.nextSequence(binding),
                });
              }
              currentThinkingEntry.text += part.delta ?? part.text ?? "";
              this.broadcaster({
                type: "updated",
                agentId: binding.agent.id,
                entry: { ...currentThinkingEntry },
                ordered: this.nextSequence(binding),
              });
            } else if (part?.type === "tool") {
              if (part.state === "running" && !currentToolEntry) {
                currentToolEntry = {
                  kind: "tool-call",
                  id: part.callID ?? `tool-${Date.now()}`,
                  name: part.tool ?? part.name ?? "tool",
                  status: "running",
                  input: part.input,
                  timestampMs: Date.now(),
                };
                binding.entries.push(currentToolEntry);
                this.broadcaster({
                  type: "appended",
                  agentId: binding.agent.id,
                  entry: { ...currentToolEntry },
                  ordered: this.nextSequence(binding),
                });
              } else if (part.state === "completed" || part.state === "failed") {
                if (currentToolEntry) {
                  currentToolEntry.status = part.state;
                  currentToolEntry.output = part.output ?? part.result;
                  this.broadcaster({
                    type: "updated",
                    agentId: binding.agent.id,
                    entry: { ...currentToolEntry },
                    ordered: this.nextSequence(binding),
                  });
                  currentToolEntry = null;
                }
              }
            }
          } else if (type === "message.updated") {
            const info = data?.info ?? {};
            if (info.type === "assistant" || info.role === "assistant") {
              if (info.error) {
                const errMsg = info.error.message || "Upstream execution error";
                if (!assistantEntry.content) {
                  assistantEntry.content = `Error: ${errMsg}`;
                } else if (!assistantEntry.content.includes(errMsg)) {
                  assistantEntry.content += `\n\n[Error: ${errMsg}]`;
                }
                assistantEntry.isStreaming = false;
                this.broadcaster({
                  type: "updated",
                  agentId: binding.agent.id,
                  entry: { ...assistantEntry },
                  ordered: this.nextSequence(binding),
                });
                break;
              }
              if (info.finish === "stop" || info.finish === "completed") {
                if (Array.isArray(info.content)) {
                  for (const part of info.content) {
                    if (part.type === "text" && part.text && !assistantEntry.content) {
                      assistantEntry.content = part.text;
                    }
                  }
                }
                assistantEntry.isStreaming = false;
                this.broadcaster({
                  type: "updated",
                  agentId: binding.agent.id,
                  entry: { ...assistantEntry },
                  ordered: this.nextSequence(binding),
                });
                break;
              }
            }
          } else if (type === "session.text.delta" || type === "session.next.text.delta") {
            const delta = data?.delta ?? "";
            assistantEntry.content += delta;
            this.broadcaster({
              type: "updated",
              agentId: binding.agent.id,
              entry: { ...assistantEntry },
              ordered: this.nextSequence(binding),
            });
          } else if (type === "session.reasoning.delta" || type === "session.next.reasoning.delta") {
            const delta = data?.delta ?? "";
            if (!currentThinkingEntry) {
              currentThinkingEntry = {
                kind: "thinking",
                id: `thinking-${Date.now()}`,
                text: "",
                isStreaming: true,
                timestampMs: Date.now(),
              };
              binding.entries.push(currentThinkingEntry);
              this.broadcaster({
                type: "appended",
                agentId: binding.agent.id,
                entry: { ...currentThinkingEntry },
                ordered: this.nextSequence(binding),
              });
            }
            currentThinkingEntry.text += delta;
            this.broadcaster({
              type: "updated",
              agentId: binding.agent.id,
              entry: { ...currentThinkingEntry },
              ordered: this.nextSequence(binding),
            });
          } else if (type === "session.text.ended") {
            if (data?.text && !assistantEntry.content) {
              assistantEntry.content = data.text;
            }
            this.broadcaster({
              type: "updated",
              agentId: binding.agent.id,
              entry: { ...assistantEntry },
              ordered: this.nextSequence(binding),
            });
          } else if (
            type === "session.step.failed" ||
            type === "session.execution.failed" ||
            type === "session.error"
          ) {
            const msg = data?.error?.message ?? data?.message ?? "Execution failed";
            if (!assistantEntry.content) {
              assistantEntry.content = `Error: ${msg}`;
            } else if (!assistantEntry.content.includes(msg)) {
              assistantEntry.content += `\n\n[Error: ${msg}]`;
            }
            assistantEntry.isStreaming = false;
            this.broadcaster({
              type: "updated",
              agentId: binding.agent.id,
              entry: { ...assistantEntry },
              ordered: this.nextSequence(binding),
            });
            break;
          } else if (
            type === "session.step.ended" ||
            type === "session.execution.succeeded" ||
            type === "session.idle"
          ) {
            if (currentThinkingEntry && currentThinkingEntry.isStreaming) {
              currentThinkingEntry.isStreaming = false;
              this.broadcaster({
                type: "updated",
                agentId: binding.agent.id,
                entry: { ...currentThinkingEntry },
                ordered: this.nextSequence(binding),
              });
            }
            assistantEntry.isStreaming = false;
            this.broadcaster({
              type: "updated",
              agentId: binding.agent.id,
              entry: { ...assistantEntry },
              ordered: this.nextSequence(binding),
            });
            break;
          } else if (type === "session.tool.called" || type === "session.next.tool.called") {
            const toolCallId = data?.callID ?? data?.callId ?? `tool-${Date.now()}`;
            currentToolEntry = {
              kind: "tool-call",
              id: toolCallId,
              name: data?.name ?? data?.tool ?? "tool",
              status: "running",
              input: data?.input ?? data?.arguments ?? {},
              timestampMs: Date.now(),
            };
            binding.entries.push(currentToolEntry);
            this.broadcaster({
              type: "appended",
              agentId: binding.agent.id,
              entry: { ...currentToolEntry },
              ordered: this.nextSequence(binding),
            });
          } else if (
            type === "session.tool.success" ||
            type === "session.tool.failed" ||
            type === "session.next.tool.success" ||
            type === "session.next.tool.failed"
          ) {
            if (currentToolEntry) {
              currentToolEntry.status =
                type.includes("success") ? "completed" : "failed";
              if (data?.result !== undefined || data?.output !== undefined) {
                currentToolEntry.output = data.result ?? data.output;
              }
              this.broadcaster({
                type: "updated",
                agentId: binding.agent.id,
                entry: { ...currentToolEntry },
                ordered: this.nextSequence(binding),
              });
              currentToolEntry = null;
            }
          } else if (type === "session.permission.request" || type === "permission.ask") {
            // Auto-approve permission requests so turns do not hang indefinitely
            const permId = data?.id ?? data?.requestID;
            if (permId) {
              try {
                if (typeof (this.client as any).v2?.session?.permission?.reply === "function") {
                  await (this.client as any).v2.session.permission.reply({
                    requestID: permId,
                    reply: "allow",
                  });
                } else if (typeof (this.client as any).permission?.reply === "function") {
                  await (this.client as any).permission.reply({
                    id: permId,
                    response: "allow",
                  });
                }
              } catch {}
            }
          }
        }
      }
    } catch (err: any) {
      if (!ac.signal.aborted) {
        console.error("[opencode-agent-manager] turn error:", err);
      }
    } finally {
      if (pollTimer) {
        clearInterval(pollTimer);
      }
      if (currentThinkingEntry && currentThinkingEntry.isStreaming) {
        currentThinkingEntry.isStreaming = false;
        this.broadcaster({
          type: "updated",
          agentId: binding.agent.id,
          entry: { ...currentThinkingEntry },
          ordered: this.nextSequence(binding),
        });
      }
      assistantEntry.isStreaming = false;
      this.broadcaster({
        type: "updated",
        agentId: binding.agent.id,
        entry: { ...assistantEntry },
        ordered: this.nextSequence(binding),
      });
      binding.abortController = null;
    }
  }

  public async interruptAgentRun(agentId: string): Promise<{ status: "ok" }> {
    const binding = this.sessions.get(agentId) ?? this.sessions.get(this.defaultAgentId);
    if (binding) {
      binding.abortController?.abort();
      try {
        if (typeof (this.client as any).session?.abort === "function") {
          await (this.client as any).session.abort({
            sessionID: binding.sessionId,
            path: { sessionID: binding.sessionId },
          });
        } else if (typeof (this.client as any).v2?.session?.interrupt === "function") {
          await (this.client as any).v2.session.interrupt({ sessionID: binding.sessionId });
        }
      } catch (err) {
        console.warn("[opencode-agent-manager] interrupt error:", err);
      }

      // Immediately mark in-flight assistant entries not streaming
      for (const entry of binding.entries) {
        if (entry.kind === "message" && entry.isStreaming) {
          entry.isStreaming = false;
          this.broadcaster({
            type: "updated",
            agentId: binding.agent.id,
            entry: { ...entry },
            ordered: this.nextSequence(binding),
          });
        } else if (entry.kind === "tool-call" && entry.status === "running") {
          entry.status = "failed";
          entry.output = "Interrupted by user";
          this.broadcaster({
            type: "updated",
            agentId: binding.agent.id,
            entry: { ...entry },
            ordered: this.nextSequence(binding),
          });
        } else if (entry.kind === "thinking" && entry.isStreaming) {
          entry.isStreaming = false;
          this.broadcaster({
            type: "updated",
            agentId: binding.agent.id,
            entry: { ...entry },
            ordered: this.nextSequence(binding),
          });
        }
      }
    }
    return { status: "ok" };
  }
}
