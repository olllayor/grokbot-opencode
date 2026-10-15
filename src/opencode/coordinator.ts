import type { MessagePort } from "node:worker_threads";
import { OpenCodeServerManager } from "./server-process.ts";
import { OpenCodeAgentManager } from "./agent-manager.ts";
import type { DrFrame, DrOutcome, TranscriptFeedEvent } from "./types.ts";

const coordinatorHostSettings: Record<string, any> = {
  hasSeenOnboarding: true,
  pinnedAgentIds: [],
  sidebarSections: [],
  webauthnProxyEnabled: false,
  messagesEnabled: true,
};

export function extractWorkspaceDirectory(config: any): string | undefined {
  if (!config || typeof config !== "object") return undefined;
  for (const key of [
    "workspaceDir",
    "workspaceDirectory",
    "workspace",
    "projectDirectory",
    "projectDir",
    "directory",
    "cwd",
    "workingDirectory",
  ]) {
    const v = config[key];
    if (typeof v === "string" && v.length > 0) return v;
  }
  return undefined;
}

export async function dispatchCoordinatorMethod(
  method: string,
  args: any,
  agentManager: OpenCodeAgentManager
): Promise<DrOutcome> {
  try {
    let value: unknown;
    switch (method) {
      // 1. Roster & Agents
      case "getMainAgent":
        value = await agentManager.getMainAgent();
        break;
      case "setMainAgent":
        value = {};
        break;
      case "ensureDefaultMainAgent":
        value = await agentManager.ensureDefaultAgent();
        break;
      case "getServerAgentRoster":
        value = await agentManager.getServerAgentRoster();
        break;
      case "listAgents":
        value = await agentManager.listAgents();
        break;
      case "countAgents":
        value = (await agentManager.listAgents()).length;
        break;
      case "searchAgents": {
        const allAgents = await agentManager.listAgents();
        const query = typeof args?.query === "string" ? args.query.toLowerCase() : "";
        value = query
          ? allAgents.filter(
              (a) =>
                a.name.toLowerCase().includes(query) ||
                (a.role ? a.role.toLowerCase().includes(query) : false)
            )
          : allAgents;
        break;
      }
      case "createAgent":
      case "createAgentFromTemplate":
        value = { agent: await agentManager.createAgent(args) };
        break;
      case "resolveAgentCreation":
        value = { kind: "box" };
        break;
      case "createGroup": {
        const grpId = args?.id || `group-${Date.now()}`;
        value = {
          agent: {
            id: grpId,
            name: args?.name || "Group",
            harness: "temporal",
            role: "Group",
            memberIds: Array.isArray(args?.memberAgentIds) ? args.memberAgentIds : [],
            memberAgentIds: Array.isArray(args?.memberAgentIds) ? args.memberAgentIds : [],
            isGroup: true,
          },
        };
        break;
      }
      case "setGroupMembers":
      case "kickstartAgent":
        value = null;
        break;
      case "updateAgent":
        value = await agentManager.updateAgent(args);
        break;
      case "setWorkspaceDirectory":
      case "setActiveProjectDirectory":
      case "setProjectDirectory":
      case "setCurrentWorkspace":
      case "updateWorkspaceDirectory":
      case "setWorkingDirectory":
      case "setCwd": {
        const directory =
          typeof args === "string"
            ? args
            : typeof args?.workspaceDirectory === "string"
            ? args.workspaceDirectory
            : typeof args?.workspace === "string"
            ? args.workspace
            : typeof args?.projectDirectory === "string"
            ? args.projectDirectory
            : typeof args?.projectDir === "string"
            ? args.projectDir
            : typeof args?.directory === "string"
            ? args.directory
            : typeof args?.cwd === "string"
            ? args.cwd
            : typeof args?.workingDirectory === "string"
            ? args.workingDirectory
            : undefined;
        if (directory) {
          agentManager.setWorkspaceDirectory(directory);
        }
        value = { directory: directory ?? agentManager.getWorkspaceDirectory() };
        break;
      }
      case "seedConversationName":
      case "broadcastToAgents":
        value = {};
        break;
      case "deleteAgents": {
        const ids = Array.isArray(args?.ids)
          ? args.ids
          : Array.isArray(args)
          ? args
          : [];
        value = agentManager.deleteAgents(ids);
        break;
      }

      // 2. Transcript & Runs
      case "openAgentTail":
      case "getAgentTranscriptTail":
        value = await agentManager.openAgentTail(args?.id, args?.limit, args?.beforeSeq);
        break;
      case "sendPrompt":
        value = await agentManager.sendPrompt(args);
        break;
      case "interruptAgentRun":
        value = await agentManager.interruptAgentRun(args?.id);
        break;
      case "promptAcceptanceStatus":
        value = { outcome: "accepted", status: "accepted" };
        break;
      case "sendDraft":
      case "discardDraft":
        value = {};
        break;

      // 3. UI State, Notifications & Presence (Void replies)
      case "restoreTemporalAgentRouting":
      case "noteMountedAgent":
      case "setWindowFocused":
      case "setAgentUnread":
      case "setAgentHiddenFromSidebar":
      case "setAgentNotifyOnUpdates":
      case "setAgentNotificationsEnabled":
      case "setAgentDraftingDisabled":
      case "setAgentVoice":
      case "handBackForeverBox":
      case "dismissTray":
      case "clearTrays":
      case "runAgentAutomationNow":
      case "runAgentWorkflowNow":
      case "recordVoiceCall":
      case "setVoiceCallPresence":
      case "stopCloudAgent":
      case "submitSecret":
      case "submitUserForm":
      case "dismissUserForm":
      case "reactToMessage":
      case "voteFeedback":
      case "deleteBotTemplate":
      case "resolveAutoReviewApproval":
      case "resolveLocalToolPermission":
      case "resolveConnectorGrant":
      case "resolveMessagesGrants":
        value = undefined;
        break;

      // 4. Widgets, Approvals & Financial
      case "respondToWidget":
        value = null;
        break;
      case "dismissWidget":
        value = {};
        break;
      case "resolveVirtualCardApproval":
        value = { approved: true };
        break;
      case "beginSpendApproval":
        value = { status: "not_required" };
        break;
      case "listVirtualCardPaymentMethods":
        value = { status: "unavailable" };
        break;

      // 5. Bot Templates & Sharing
      case "publishBotTemplate":
      case "getBotTemplateVersion":
      case "setBotTemplateVisibility":
        value = {};
        break;
      case "getBotTemplateForSourceAgent":
        value = null;
        break;
      case "getBotTemplateExportPolicy":
        value = { policy: "none" };
        break;

      // 6. Host & Environment
      case "getHostStatus":
        value = {
          hostVersion: "1.0.0",
          latestHostVersion: "1.0.0",
          hostUpdateAvailable: false,
          isBusy: false,
        };
        break;
      case "updateHostNow":
        value = {};
        break;
      case "getHostSettings":
        value = { ...coordinatorHostSettings };
        break;
      case "setHostSettings":
        if (args && typeof args === "object") {
          Object.assign(coordinatorHostSettings, args);
          const dir = extractWorkspaceDirectory(args);
          if (dir) {
            process.env.OPENCODE_PROJECT_DIR = dir;
            agentManager.setWorkspaceDirectory(dir);
          }
        }
        value = { ...coordinatorHostSettings };
        break;
      case "isEgressTunnelAvailable":
      case "hasRestorablePluginListingCopy":
        value = false;
        break;
      case "getForeverBoxStatus":
      case "ensureForeverBox":
        value = null;
        break;

      // 7. Skills & MCP
      case "skillsCatalog":
        value = await agentManager.getSkillsCatalog();
        break;
      case "syncPluginSkills":
        value = [];
        break;
      case "getPluginSyncStatus":
        value = { authBlocked: [], plugins: [], status: "synced" };
        break;
      case "getSkillPublishTargets":
        value = { targets: [] };
        break;
      case "publishSkill":
      case "resyncPublishedSkill":
      case "unpublishSkill":
      case "unpublishPluginListing":
      case "removeMcpServer":
      case "authenticateMcpServer":
      case "renameMcpAccount":
      case "removeMcpAccount":
      case "setMcpCustomInstructions":
        value = {};
        break;
      case "listBoxMcpServers":
        value = await agentManager.listMcpServers();
        break;
      case "getMcpState":
        value = await agentManager.getMcpState();
        break;
      case "getMcpCatalog":
        // opencode 2.0.28 exposes no MCP catalog endpoint; graceful empty.
        value = [];
        break;
      case "listMcpServerTools": {
        const serverId =
          typeof args?.serverId === "string"
            ? args.serverId
            : typeof args?.serverIdentifier === "string"
            ? args.serverIdentifier
            : undefined;
        value = await agentManager.listMcpServerTools(serverId);
        break;
      }
      case "toggleMcpToolDisabled":
        value = [];
        break;
      case "getMcpPluginLogo":
        value = null;
        break;
      case "readMcpAppResource":
        value = {};
        break;

      // 8. Cloud Agents
      case "getCloudAgentInfo":
      case "getCloudAgentConversation":
        value = null;
        break;
      case "ensureCloudAgentArtifacts":
        value = [];
        break;
      case "getCloudAgentPublishProposals":
        value = { kind: "listed", proposals: [] };
        break;
      case "confirmCloudAgentPublishProposal":
      case "dismissCloudAgentPublishProposal":
      case "updateCloudAgentPublishApp":
        value = {};
        break;

      // 9. Listeners & GitHub
      case "getListenerIntegrations":
        value = { integrations: [] };
        break;
      case "getListenerConnectUrl":
        value = { url: "" };
        break;
      case "completeGithubConnect":
        value = {};
        break;

      // 10. Workflows & Automations
      case "getAgentWorkflows":
      case "createAgentWorkflow":
      case "updateAgentWorkflow":
      case "deleteAgentWorkflow":
      case "getConversationOutline":
      case "getSubagents":
      case "getAsyncTasks":
      case "getTrays":
      case "listAllAutomations":
      case "getAgentAutomations":
      case "getAgentTasks":
      case "markAgentTaskRead":
      case "setAgentAutomationEnabled":
      case "createAgentAutomation":
      case "updateAgentAutomation":
      case "deleteAgentAutomation":
        value = [];
        break;
      case "importAgentWorkflowText":
      case "importAgentWorkflowUrl":
        value = { workflows: [] };
        break;
      case "getAutomationWebhookCredential":
        value = { url: "", key: "" };
        break;

      // 11. Channels & Secrets
      case "getAgentChannels":
      case "connectChannel":
      case "disconnectChannel":
      case "refreshChannel":
        value = { manifests: [], connections: [] };
        break;
      case "getBoxSecretsStatus":
        value = { keys: [], isApplied: true, lastAppliedAtMs: null };
        break;

      // 12. Media, Voice & Teach
      case "clearGeneratedRoomNameStamps":
      case "previewVoice":
      case "getAgentAvatar":
      case "generateAgentAvatarImage":
      case "nudgeVoiceCall":
      case "readMainAgentContext":
        value = {};
        break;
      case "setAgentAvatarBytes":
      case "getVoiceCall":
      case "requestDiskSaverAudit":
        value = null;
        break;
      case "transcribeAudio":
        value = { text: "" };
        break;
      case "searchMedia":
        value = [];
        break;
      case "getTeachRecordingStatus":
      case "startTeachRecording":
      case "stopTeachRecording":
        value = { status: "idle" };
        break;

      default:
        console.warn(`[opencode-coordinator] unhandled method: ${method}`);
        value = {};
        break;
    }
    return { status: "ok", value };
  } catch (err: any) {
    console.error(`[opencode-coordinator] method ${method} failed:`, err);
    return {
      status: "failed",
      failure: {
        code: "COORDINATOR_METHOD_FAILED",
        message: err?.message ?? String(err),
      },
    };
  }
}

async function main() {
  console.log("[opencode-coordinator] initializing OpenCode server manager...");
  const serverManager = new OpenCodeServerManager();

  let agentManager: OpenCodeAgentManager | null = null;
  let rendererPort: MessagePort | null = null;
  let serverPromise: Promise<{ client: any; url: string }> | null = null;
  // Active workspace pushed from Electron main (project folder selection)
  // or coordinator bootstrap processConfig. Falls back to env/cwd.
  let pendingWorkspaceDirectory: string | undefined =
    process.env.OPENCODE_PROJECT_DIR || process.env.WORKSPACE_DIR || undefined;

  const applyWorkspaceDirectory = (directory: string | undefined) => {
    if (typeof directory !== "string" || directory.length === 0) return;
    pendingWorkspaceDirectory = directory;
    process.env.OPENCODE_PROJECT_DIR = directory;
    agentManager?.setWorkspaceDirectory(directory);
  };

  const broadcastEvent = (event: TranscriptFeedEvent) => {
    if (rendererPort) {
      try {
        rendererPort.postMessage({
          kind: "event",
          family: "transcript",
          payload: event,
        });
      } catch (err) {
        console.error("[opencode-coordinator] failed to post event:", err);
      }
    }
  };

  const getAgentManager = async (): Promise<OpenCodeAgentManager> => {
    if (agentManager) return agentManager;
    if (!serverPromise) {
      serverPromise = serverManager.start();
    }
    const conn = await serverPromise;
    if (!agentManager) {
      agentManager = new OpenCodeAgentManager(conn.client, broadcastEvent, {
        workspaceDirectory: pendingWorkspaceDirectory,
      });
    }
    if (pendingWorkspaceDirectory) {
      agentManager.setWorkspaceDirectory(pendingWorkspaceDirectory);
    }
    return agentManager;
  };

  const WORKSPACE_METHODS = new Set([
    "setWorkspaceDirectory",
    "setActiveProjectDirectory",
    "setProjectDirectory",
    "setCurrentWorkspace",
    "updateWorkspaceDirectory",
    "setWorkingDirectory",
    "setCwd",
  ]);

  const handleRequest = async (
    port: MessagePort,
    requestId: string,
    method: string,
    args: any
  ) => {
    try {
      // Workspace sync from Electron main / UI lands here over mainPort.
      if (WORKSPACE_METHODS.has(method)) {
        const directory =
          typeof args === "string"
            ? args
            : extractWorkspaceDirectory(args) ?? pendingWorkspaceDirectory;
        const mgr = await getAgentManager();
        if (directory) {
          applyWorkspaceDirectory(directory);
          mgr.setWorkspaceDirectory(directory);
        }
        port.postMessage({
          kind: "reply",
          requestId,
          outcome: { status: "ok", value: { directory: directory ?? null } },
        });
        return;
      }
      const mgr = await getAgentManager();
      console.log(`[opencode-coordinator] request: ${method} (id=${requestId})`);
      const outcome = await dispatchCoordinatorMethod(method, args, mgr);
      port.postMessage({
        kind: "reply",
        requestId,
        outcome,
      });
    } catch (err: any) {
      console.error(`[opencode-coordinator] request ${method} failed:`, err);
      try {
        port.postMessage({
          kind: "reply",
          requestId,
          outcome: {
            status: "failed",
            failure: {
              code: "COORDINATOR_METHOD_FAILED",
              message: err?.message ?? String(err),
            },
          },
        });
      } catch {}
    }
  };

  const bindDataPort = (port: MessagePort, isRenderer = false) => {
    port.on("message", (raw: any) => {
      const msg: DrFrame = raw && typeof raw === "object" && "data" in raw ? raw.data : raw;
      if (!msg) return;

      if (msg.kind === "lifecycle" && msg.phase === "hello") {
        try {
          port.postMessage({
            kind: "lifecycle",
            phase: "ready",
            protocolVersion: 3,
          });
          if (isRenderer) {
            port.postMessage({
              kind: "event",
              family: "coordinator-transport-state",
              payload: { state: "connected" },
            });
            port.postMessage({
              kind: "event",
              family: "coordinator-transcript-source",
              payload: { source: "server" },
            });
          }
        } catch (err) {
          console.error("[opencode-coordinator] failed to post ready frame:", err);
        }
        return;
      }

      if (msg.kind === "request") {
        handleRequest(port, msg.requestId, msg.method, msg.args);
      }
    });
    port.start?.();
  };

  const bindControlPort = (controlPort: MessagePort) => {
    controlPort.on("message", (raw: any) => {
      const msg: DrFrame = raw && typeof raw === "object" && "data" in raw ? raw.data : raw;
      if (!msg || typeof msg !== "object") return;
      // Workspace updates may also arrive over the control port.
      if (msg.kind === "request" && WORKSPACE_METHODS.has((msg as any).method)) {
        const directory =
          typeof (msg as any).args === "string"
            ? (msg as any).args
            : extractWorkspaceDirectory((msg as any).args);
        applyWorkspaceDirectory(directory);
        try {
          controlPort.postMessage({
            kind: "reply",
            requestId: (msg as any).requestId,
            outcome: { status: "ok", value: { directory: directory ?? null } },
          });
        } catch {}
        return;
      }
      if (msg.kind === "event" && (msg as any).family === "workspace") {
        const payload = (msg as any).payload;
        const directory =
          typeof payload === "string" ? payload : extractWorkspaceDirectory(payload);
        applyWorkspaceDirectory(directory);
        return;
      }
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
      bindDataPort(rPort, true);
    }
    if (mainPort) {
      bindDataPort(mainPort, false);
    }

    // Pre-warm server connection asynchronously
    getAgentManager()
      .then(() => {
        if (rendererPort) {
          rendererPort.postMessage({
            kind: "event",
            family: "coordinator-transport-state",
            payload: { state: "connected" },
          });
        }
      })
      .catch((err) => {
        console.error("[opencode-coordinator] failed to prewarm OpenCode:", err);
        if (rendererPort) {
          rendererPort.postMessage({
            kind: "event",
            family: "coordinator-transport-state",
            payload: { state: "down" },
          });
        }
      });
  };

  // Electron Utility Process parentPort
  const parentPort: any = (process as any).parentPort;
  if (parentPort) {
    parentPort.on("message", (event: any) => {
      // Main posts { bootstrap: { processConfig } } with the transferred ports.
      const bootstrap =
        event?.data?.bootstrap ?? event?.bootstrap ?? event?.data ?? null;
      const processConfig = bootstrap?.bootstrap?.processConfig ?? bootstrap?.processConfig;
      applyWorkspaceDirectory(extractWorkspaceDirectory(processConfig));
      if (event?.ports && event.ports.length >= 3) {
        adoptHandoff(event.ports);
      } else if (Array.isArray(event) && event.length >= 3 && event[0]?.postMessage) {
        adoptHandoff(event as MessagePort[]);
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

const isMain =
  typeof (process as any).parentPort !== "undefined" ||
  (Boolean(process.argv[1]) &&
    (process.argv[1].endsWith("coordinator.ts") ||
      process.argv[1].endsWith("coordinator.js") ||
      process.argv[1].endsWith("node-agent-coordinator/main.cjs")));

if (isMain) {
  main().catch((err) => {
    console.error("[opencode-coordinator] fatal error:", err);
    process.exit(1);
  });
}
