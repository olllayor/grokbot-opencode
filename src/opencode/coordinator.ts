import type { MessagePort } from "node:worker_threads";
import { OpenCodeServerManager } from "./server-process.js";
import { OpenCodeAgentManager } from "./agent-manager.js";
import type { DrFrame, DrOutcome, TranscriptFeedEvent } from "./types.js";

async function main() {
  console.log("[opencode-coordinator] initializing OpenCode server manager...");
  const serverManager = new OpenCodeServerManager();
  
  let agentManager: OpenCodeAgentManager | null = null;
  let rendererPort: MessagePort | null = null;

  const broadcastEvent = (event: TranscriptFeedEvent) => {
    if (rendererPort) {
      try {
        rendererPort.postMessage({
          kind: "event",
          name: "transcript",
          payload: event,
        });
      } catch (err) {
        console.error("[opencode-coordinator] failed to post event:", err);
      }
    }
  };

  const handleRequest = async (
    port: MessagePort,
    requestId: string,
    method: string,
    args: any
  ) => {
    if (!agentManager) {
      const conn = await serverManager.start();
      agentManager = new OpenCodeAgentManager(conn.client, broadcastEvent);
    }

    let outcome: DrOutcome;

    try {
      let value: unknown;
      switch (method) {
        case "getMainAgent":
          value = await agentManager.getMainAgent();
          break;
        case "ensureDefaultMainAgent":
          value = await agentManager.ensureDefaultAgent();
          break;
        case "getServerAgentRoster":
          value = await agentManager.getServerAgentRoster();
          break;
        case "openAgentTail":
          value = await agentManager.openAgentTail(args?.id, args?.limit);
          break;
        case "sendPrompt":
          value = await agentManager.sendPrompt(args);
          break;
        case "interruptAgentRun":
          value = await agentManager.interruptAgentRun(args?.id);
          break;
        case "promptAcceptanceStatus":
          value = { status: "accepted" };
          break;
        case "listVirtualCardPaymentMethods":
          value = { status: "unavailable" };
          break;
        case "beginSpendApproval":
          value = { status: "not_required" };
          break;
        case "getAgentAutomations":
          value = { automations: [] };
          break;
        case "getAgentTasks":
          value = { tasks: [] };
          break;
        case "setAgentUnread":
        case "setAgentHiddenFromSidebar":
        case "setAgentNotifyOnUpdates":
        case "setAgentDraftingDisabled":
        case "markAgentTaskRead":
          value = { status: "ok" };
          break;
        default:
          console.warn(`[opencode-coordinator] unhandled method: ${method}`);
          value = {};
          break;
      }
      outcome = { status: "ok", value };
    } catch (err: any) {
      console.error(`[opencode-coordinator] method ${method} failed:`, err);
      outcome = {
        status: "failed",
        failure: {
          code: "COORDINATOR_METHOD_FAILED",
          message: err?.message ?? String(err),
        },
      };
    }

    try {
      port.postMessage({
        kind: "reply",
        requestId,
        outcome,
      });
    } catch (err) {
      console.error("[opencode-coordinator] failed to post reply:", err);
    }
  };

  const bindDataPort = (port: MessagePort) => {
    port.on("message", (msg: DrFrame) => {
      if (msg && msg.kind === "request") {
        handleRequest(port, msg.requestId, msg.method, msg.args);
      }
    });
    port.start?.();
  };

  const bindControlPort = (controlPort: MessagePort) => {
    controlPort.on("message", (msg: DrFrame) => {
      if (msg && msg.kind === "lifecycle") {
        if (msg.phase === "shutdown") {
          console.log("[opencode-coordinator] shutdown received on control port");
          serverManager.stop().finally(() => process.exit(0));
        }
      }
    });
    controlPort.start?.();

    // Handshake
    controlPort.postMessage({
      kind: "lifecycle",
      phase: "hello",
      protocolVersion: 1,
    });
  };

  const adoptHandoff = (ports: MessagePort[]) => {
    const [controlPort, rPort, mainPort] = ports;
    rendererPort = rPort;

    if (controlPort) {
      bindControlPort(controlPort);
    }
    if (rPort) {
      bindDataPort(rPort);
    }
    if (mainPort) {
      bindDataPort(mainPort);
    }

    // Pre-warm server connection
    serverManager
      .start()
      .then((conn) => {
        console.log("[opencode-coordinator] connected to OpenCode at", conn.url);
        if (!agentManager) {
          agentManager = new OpenCodeAgentManager(conn.client, broadcastEvent);
        }
      })
      .catch((err) => {
        console.error("[opencode-coordinator] failed to prewarm OpenCode:", err);
      });
  };

  // Electron Utility Process parentPort
  const parentPort: any = (process as any).parentPort;
  if (parentPort) {
    parentPort.on("message", (event: any) => {
      if (event?.ports && event.ports.length >= 3) {
        adoptHandoff(event.ports);
      }
    });
    parentPort.start?.();
  } else {
    console.log("[opencode-coordinator] running in standalone mode (no parentPort)");
  }

  process.on("SIGINT", () => {
    serverManager.stop().finally(() => process.exit(0));
  });
  process.on("SIGTERM", () => {
    serverManager.stop().finally(() => process.exit(0));
  });
}

main().catch((err) => {
  console.error("[opencode-coordinator] fatal error:", err);
  process.exit(1);
});
