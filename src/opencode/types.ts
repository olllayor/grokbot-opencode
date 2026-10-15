export type DrOutcome<T = unknown> =
  | { status: "ok"; value: T }
  | { status: "failed"; failure: { code: string; message: string } };

export type DrFrame =
  | {
      kind: "request";
      requestId: string;
      method: string;
      args: unknown;
      demand?: "person" | "background";
    }
  | {
      kind: "reply";
      requestId: string;
      outcome: DrOutcome;
    }
  | {
      kind: "event";
      family: string;
      name?: string;
      payload: unknown;
    }
  | {
      kind: "lifecycle";
      phase: "hello" | "ready" | "shutdown";
      protocolVersion?: number;
      reason?: string;
      detail?: string;
    };

export interface TranscriptMessageEntry {
  kind: "message";
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  isStreaming: boolean;
  clientNonce?: string;
  timestampMs: number;
  richText?: string;
  replyTo?: string;
  taskId?: string;
}

export interface TranscriptToolCallEntry {
  kind: "tool-call";
  id: string;
  name: string;
  status: "running" | "completed" | "failed" | "pending";
  summary?: string;
  input?: unknown;
  output?: unknown;
  timestampMs: number;
}

export interface TranscriptThinkingEntry {
  kind: "thinking";
  id: string;
  text: string;
  isStreaming: boolean;
  timestampMs: number;
  durationMs?: number;
}

export interface TranscriptNoticeEntry {
  kind: "notice";
  id: string;
  text: string;
  timestampMs: number;
}

export type TranscriptEntry =
  | TranscriptMessageEntry
  | TranscriptToolCallEntry
  | TranscriptThinkingEntry
  | TranscriptNoticeEntry;

export interface TranscriptOrderedStamp {
  replicaKey: string;
  epoch: string;
  sequence: number;
}

export interface TranscriptSnapshotEvent {
  type: "snapshot";
  activeAgentId: string;
  entries: TranscriptEntry[];
  ordered: TranscriptOrderedStamp;
  coverage: {
    kind: "transcript-live-range";
    fromSequence: number;
    throughSequence: number;
  };
}

export interface TranscriptAppendedEvent {
  type: "appended";
  agentId: string;
  entry: TranscriptEntry;
  ordered: TranscriptOrderedStamp;
}

export interface TranscriptUpdatedEvent {
  type: "updated";
  agentId: string;
  entry: TranscriptEntry;
  ordered?: TranscriptOrderedStamp;
}

export type TranscriptFeedEvent =
  | TranscriptSnapshotEvent
  | TranscriptAppendedEvent
  | TranscriptUpdatedEvent;

export interface AgentDescriptor {
  id: string;
  name: string;
  harness: "temporal" | "box";
  role?: string;
  model?: string;
  cwd?: string;
  memberIds?: string[];
  memberAgentIds?: string[];
  isGroup?: boolean;
}

export interface SendPromptArgs {
  agentId: string;
  prompt: string;
  clientNonce: string;
  attachmentPaths?: string[];
  attachmentNames?: string[];
  richText?: string;
  replyToId?: string;
  sessionId?: string;
  cwd?: string;
  directory?: string;
  workingDirectory?: string;
}

export interface PromptFileAttachment {
  uri: string;
  mime?: string;
  name?: string;
  description?: string;
}

export interface SkillDescriptor {
  name: string;
  description: string;
  content?: string;
}

export interface McpServerDescriptor {
  id?: string;
  serverIdentifier?: string;
  name: string;
  status?: "connected" | "connecting" | "error" | "disabled";
  tools?: Array<{ name: string; description?: string }>;
}

