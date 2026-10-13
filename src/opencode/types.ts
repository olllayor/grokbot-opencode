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
      name: string;
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
  status: "running" | "completed" | "failed";
  input?: unknown;
  output?: unknown;
  timestampMs: number;
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
  | TranscriptNoticeEntry;

export interface TranscriptSnapshotEvent {
  type: "snapshot";
  activeAgentId: string;
  entries: TranscriptEntry[];
  ordered: { sequence: number };
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
  ordered: { sequence: number };
}

export interface TranscriptUpdatedEvent {
  type: "updated";
  agentId: string;
  entry: TranscriptEntry;
  ordered?: { sequence: number };
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
}
