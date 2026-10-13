import type { OpencodeClient } from "@opencode-ai/sdk/v2";
import type {
  AgentDescriptor,
  SendPromptArgs,
  TranscriptEntry,
  TranscriptFeedEvent,
  TranscriptMessageEntry,
  TranscriptToolCallEntry,
} from "./types.js";

export type EventBroadcaster = (event: TranscriptFeedEvent) => void;

interface AgentSessionBinding {
  agent: AgentDescriptor;
  sessionId: string;
  entries: TranscriptEntry[];
  sequenceCounter: number;
  abortController: AbortController | null;
}

export class OpenCodeAgentManager {
  private client: OpencodeClient;
  private broadcaster: EventBroadcaster;
  private sessions = new Map<string, AgentSessionBinding>();
  private defaultAgentId = "main-opencode-agent";

  constructor(client: OpencodeClient, broadcaster: EventBroadcaster) {
    this.client = client;
    this.broadcaster = broadcaster;
  }

  public setBroadcaster(broadcaster: EventBroadcaster): void {
    this.broadcaster = broadcaster;
  }

  private nextSequence(binding: AgentSessionBinding): { sequence: number } {
    binding.sequenceCounter += 1;
    return { sequence: binding.sequenceCounter };
  }

  public async ensureDefaultAgent(): Promise<AgentDescriptor> {
    const existing = this.sessions.get(this.defaultAgentId);
    if (existing) {
      return existing.agent;
    }

    // Create session in OpenCode
    const sessRes = await this.client.v2.session.create({ agent: "general" });
    const sessionId = (sessRes.data as any)?.data?.id ?? `ses_${Date.now()}`;

    const agent: AgentDescriptor = {
      id: this.defaultAgentId,
      name: "OpenCode Assistant",
      harness: "temporal",
      role: "General Software Engineer",
    };

    const binding: AgentSessionBinding = {
      agent,
      sessionId,
      entries: [],
      sequenceCounter: 0,
      abortController: null,
    };

    this.sessions.set(this.defaultAgentId, binding);
    return agent;
  }

  public async getMainAgent(): Promise<{ agentId: string | null }> {
    const agent = await this.ensureDefaultAgent();
    return { agentId: agent.id };
  }

  public async getServerAgentRoster(): Promise<{ status: "ready"; agents: AgentDescriptor[] }> {
    const defaultAgent = await this.ensureDefaultAgent();
    return {
      status: "ready",
      agents: [defaultAgent],
    };
  }

  public async openAgentTail(
    agentId: string,
    limit = 50
  ): Promise<{ entries: TranscriptEntry[]; hasMore: boolean; unreadBoundarySeq: number }> {
    let binding = this.sessions.get(agentId);
    if (!binding) {
      await this.ensureDefaultAgent();
      binding = this.sessions.get(this.defaultAgentId);
    }
    if (!binding) {
      return { entries: [], hasMore: false, unreadBoundarySeq: 0 };
    }

    const sliced = binding.entries.slice(-limit);
    return {
      entries: sliced,
      hasMore: false,
      unreadBoundarySeq: 0,
    };
  }

  public async sendPrompt(args: SendPromptArgs): Promise<{ status: "ok" }> {
    let binding = this.sessions.get(args.agentId);
    if (!binding) {
      await this.ensureDefaultAgent();
      binding = this.sessions.get(this.defaultAgentId)!;
    }

    const now = Date.now();
    const userEntry: TranscriptMessageEntry = {
      kind: "message",
      id: `user-${now}-${Math.random().toString(36).slice(2, 7)}`,
      role: "user",
      content: args.prompt,
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

    // Start streaming assistant turn
    this.streamAssistantTurn(binding, args.prompt).catch((err) => {
      console.error("[opencode-agent-manager] turn error:", err);
    });

    return { status: "ok" };
  }

  private async streamAssistantTurn(
    binding: AgentSessionBinding,
    promptText: string
  ): Promise<void> {
    const sessionId = binding.sessionId;
    const ac = new AbortController();
    binding.abortController = ac;

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

    let currentToolEntry: TranscriptToolCallEntry | null = null;

    try {
      // Connect to SSE stream
      const { stream } = await this.client.v2.session.events({ sessionID: sessionId });

      // Dispatch prompt asynchronously
      this.client.v2.session
        .prompt({
          sessionID: sessionId,
          prompt: { text: promptText },
        })
        .catch((err) => {
          console.error("[opencode-agent-manager] prompt dispatch error:", err);
        });

      for await (const ev of stream as any) {
        if (ac.signal.aborted) {
          break;
        }

        const type = ev?.type;
        const data = ev?.data;

        if (type === "session.next.text.delta") {
          const delta = data?.delta ?? "";
          assistantEntry.content += delta;
          this.broadcaster({
            type: "updated",
            agentId: binding.agent.id,
            entry: { ...assistantEntry },
            ordered: this.nextSequence(binding),
          });
        } else if (type === "session.next.tool.called") {
          const toolCallId = data?.callId ?? `tool-${Date.now()}`;
          currentToolEntry = {
            kind: "tool-call",
            id: toolCallId,
            name: data?.name ?? "tool",
            status: "running",
            input: data?.arguments ?? {},
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
          type === "session.next.tool.success" ||
          type === "session.next.tool.failed" ||
          type === "session.next.tool.progress"
        ) {
          if (currentToolEntry) {
            currentToolEntry.status =
              type === "session.next.tool.success"
                ? "completed"
                : type === "session.next.tool.failed"
                ? "failed"
                : "running";
            if (data?.result !== undefined) {
              currentToolEntry.output = data.result;
            }
            this.broadcaster({
              type: "updated",
              agentId: binding.agent.id,
              entry: { ...currentToolEntry },
              ordered: this.nextSequence(binding),
            });
          }
        } else if (type === "session.idle") {
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
    } catch (err: any) {
      if (!ac.signal.aborted) {
        console.error("[opencode-agent-manager] SSE error:", err);
      }
    } finally {
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
        await this.client.v2.session.interrupt({ sessionID: binding.sessionId });
      } catch (err) {
        console.warn("[opencode-agent-manager] interrupt error:", err);
      }
    }
    return { status: "ok" };
  }
}
