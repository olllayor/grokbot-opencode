/** Request shapes recovered from the shipped preload validators. Custom transforms remain unknown. */
export interface MainRequests {
  openExternal: { url: string };
  getCanvasShare: {
    locator:
      | { kind: "store"; storeId: string; canvasId: string }
      | { kind: "active-user-store"; canvasId: string };
  };
  setCanvasVisibility: {
    locator:
      | { kind: "store"; storeId: string; canvasId: string }
      | { kind: "active-user-store"; canvasId: string };
    visibility: "private" | "team-view";
  };
  getDocument: {
    locator: { storeId: string; documentId: string };
    groupChatId?: string;
  };
  getDocumentEditRight: { locator: { storeId: string; documentId: string } };
  saveDocument: {
    locator: { storeId: string; documentId: string };
    source: string;
  };
  resolveLibraryPages: {
    refs: Array<
      | { kind: "canvas"; storeId: string; canvasId: unknown }
      | { kind: "active-user-store-canvas"; canvasId: unknown }
      | { kind: "document"; storeId: string; documentId: string }
    >;
    includeDocuments: boolean;
  };
  listLibraryDocs: { agentId: string };
  setDocumentVisibility: {
    locator: { storeId: string; documentId: string };
    visibility: "private" | "team-view";
  };
  getDocumentAssets: {
    locator: { storeId: string; documentId: string };
    names: Array<string>;
    groupChatId?: string;
  };
  submitFeedback: unknown;
  getWindowState: undefined;
  minimizeWindow: undefined;
  focusWindow: undefined;
  toggleMaximizeWindow: undefined;
  closeWindow: undefined;
  resizeWindowWidth: { deltaWidth: number };
  setTitleBarOverlayTone: { isOverlayTone: boolean };
  setViewingAgent: { agentId: string | null };
  setComposingAgent: { agentId: string; composing: boolean };
  setComputerViewOpen: { isOpen: boolean };
  getThemeState: undefined;
  setThemePreference: { preference: unknown };
  getBotColorInChatEnabled: undefined;
  setBotColorInChatEnabled: { enabled: boolean };
  getHardwareAcceleration: undefined;
  setHardwareAccelerationEnabled: { enabled: boolean };
  getSpellCheckEnabled: undefined;
  setSpellCheckEnabled: { enabled: boolean };
  getDesktopNotificationPreferences: undefined;
  setDesktopNotificationPreferences: { preferences: unknown };
  relaunchDesktop: undefined;
  getLanguageState: undefined;
  setLanguagePreference: { preference: unknown };
  getEgressTunnelEnabled: undefined;
  setEgressTunnelEnabled: { enabled: boolean };
  getEgressTunnelStatus: undefined;
  claimEgressTunnel: undefined;
  getWebauthnProxyEnabled: undefined;
  setWebauthnProxyEnabled: { enabled: boolean };
  runNetworkDiagnostics: undefined;
  getUpdateStatus: undefined;
  checkForUpdates: undefined;
  setUpdateTrack: { track: unknown | null };
  quitAndInstallUpdate: { expectedVersion: string };
  setAutoUpdateWhenIdle: { enabled: boolean };
  getBoxMigrationStatus: undefined;
  getBoxHostPhase: undefined;
  markDeepLinksReady: undefined;
  getOnboardingSeen: undefined;
  setOnboardingSeen: { seen: boolean };
  getTimeZone: undefined;
  setTimeZoneOverride: { timeZone: string | null };
  getAutoReviewInstructions: undefined;
  setAutoReviewInstructions: {
    instructions: {
      isEnabled: boolean;
      allowInstructions: Array<string>;
      blockInstructions: Array<string>;
    };
  };
  getLocalToolPermission: undefined;
  getMessagesAppIcon: undefined;
  getTeamMemberPolicy: undefined;
  setLocalToolPermission: { permission: unknown; machineId?: string };
  recordLocalToolApproval: {
    approvalId: string;
    action: unknown;
    target: string;
    machineId?: string;
  };
  clearLocalToolApprovals: undefined;
  recordLocalToolStandingGrant: {
    action: unknown;
    recipient: string;
    machineId?: string;
  };
  getLocalToolActionGrant: { action: unknown };
  setLocalToolActionGrant: { action: unknown; granted: boolean };
  pickAvatarSource: undefined;
  pickAvatarFile: undefined;
  generateAgentAvatarImage: { description: string };
  resolveAttachmentMedia: {
    source: string;
    inline?: boolean;
    rendition?: unknown;
    inRoom?: boolean;
    preview?: Uint8Array;
  };
  readAttachmentText: { path: string; agentId?: string };
  readAttachmentBytes: { path: string; maxBytes?: number; agentId?: string };
  stageAttachmentBytes: { filename: string; bytes: Uint8Array };
  stageAttachmentPath: { filename: string; sourcePath: string };
  downloadAttachment: { path: string; suggestedName?: string };
  commitStagedAttachments: {
    agentId: string;
    paths: Array<string>;
    filenames: Array<string>;
  };
  discardStagedAttachment: { path: string };
  precaptionStagedAttachment: {
    path: string;
    agentId: string;
    draftText: string;
    priorUserMessages: Array<string>;
  };
  forceRecreateComputer: undefined;
  updateComputer: {
    id: string;
    requestId: string;
    acknowledgeTerminalUpgradeSchedule?: boolean;
  };
  getComputerUpgradeSchedule: undefined;
  scheduleComputerUpgrade: unknown;
  rescheduleComputerUpgrade: unknown;
  cancelComputerUpgrade: unknown;
  forceReconnectGateway: undefined;
  getExperimentsSnapshot: undefined;
  exposeFeatureGate: { name: string };
  peekUsageWarningAssignment: undefined;
  exposeUsageWarningExperiment: { percentUsed: number };
  logComposerTriggerExperimentExposure: { trigger: "at" };
  logGroupChatDiscouragementExperimentExposure: undefined;
  logOnboardingJobRoleExperimentExposure: undefined;
  logOnboardingRoleUseCaseBotsExperimentExposure: undefined;
  applyFeatureFlagOverride: {
    command:
      | { kind: "set"; name: string; value: boolean }
      | { kind: "clear"; name: string }
      | { kind: "clear-all" }
      | { kind: "set-all-bundled" };
  };
  refreshFeatureFlags: undefined;
  applyExperimentOverride: {
    command:
      | { kind: "set"; experiment: string; param: string; value: unknown }
      | { kind: "clear"; experiment: string; param: string }
      | { kind: "clear-experiment"; experiment: string }
      | { kind: "clear-all" };
  };
  startRpcTraceWindow: undefined;
  readTranscriptStoreTail: unknown;
  getPublicBotTemplate: { shareId: string };
  listPublicBotMarketplace: undefined;
  getGrokBotSlackInstallState: { agentId: string };
  startGrokBotSlackConnect: { agentId: string };
  installGrokBotSlackApp: {
    agentId: string;
    slackTeamId: string | null;
    replaceExistingApp?: boolean;
  };
  reinstallGrokBotSlackApp: { agentId: string; automatic: boolean };
  uninstallGrokBotSlackApp: { agentId: string; forgetIfUnreachable?: boolean };
  listGrokBotTeamAgents: undefined;
  listGrokBotAgentSessions: { agentId: string };
  setGrokBotAgentVisibility: { agentId: string; visibility: unknown };
  cloneGrokBotAgentToTeam: { agentId: string; offerEntryId: string };
  setGrokBotAgentVoice: {
    agentId: string;
    voiceId?: string | null;
    voiceSpeed?: number;
    voiceLanguage?: string;
  };
  updateGrokBotAgent: {
    serverId: string;
    name?: string;
    description?: string;
    title?: string;
    avatarShape?: string;
    avatarColor?: string;
    avatarPngBase64?: string | null;
  };
  publishGrokBotAgent: { agentId: string };
  unpublishGrokBotAgent: { agentId: string };
  setGrokBotAgentSidebarHidden: { agentId: string; isHidden: boolean };
  addGrokBotRoomPeople: { agentId: string; userIds: Array<number> };
  removeGrokBotRoomPeople: { agentId: string; userIds: Array<number> };
  listGrokBotAgentManagers: { serverId: string };
  addGrokBotAgentManager: { serverId: string; userId: number };
  removeGrokBotAgentManager: { serverId: string; userId: number };
  getGrokBotAgentPlugins: { agentId: string };
  setGrokBotAgentPlugins: {
    agentId: string;
    plugins: Array<
      | { kind: "plugin"; pluginId: string }
      | { kind: "config-update"; pluginId: string; mcpConfigJson: string }
      | {
          kind: "inline";
          name: string;
          displayName: string;
          description: string;
          mcpConfigJson: string;
        }
    >;
  };
  setGrokBotAgentPluginVariables: {
    agentId: string;
    pluginId: string;
    variables: Record<string, string | number | boolean>;
  };
  addGrokBotAgentSkill: {
    agentId: string;
    name?: string;
    description?: string;
    content: string;
    files?: Array<{ path: string; content: string }>;
  };
  updateGrokBotAgentSkill: {
    agentId: string;
    name: string;
    description?: string;
    content: string;
    files?: Array<{ path: string; content: string }>;
  };
  removeGrokBotAgentSkill: { agentId: string; name: string };
  listGrokBotUserBotMemories: { agentId: string };
  promoteGrokBotMemoriesToTeam: { agentId: string; factIds: Array<string> };
  listGrokBotEmailInboxes: undefined;
  createGrokBotEmailInbox: { username: string; displayName: string };
  listGrokBotSecrets: { serverId: string };
  putGrokBotSecret: {
    serverId: string;
    name: string;
    description: string;
    value: string;
  };
  deleteGrokBotSecret: { serverId: string; name: string };
  carryUserSecretsToGrokBot: { serverId: string; names: Array<string> };
  getHostPinnedAgents: undefined;
  setHostPinnedAgents: { pinnedAgentIds: Array<string> };
  getHostSidebarSections: undefined;
  setHostSidebarSections: {
    sections: Array<{ id: string; name: string; agentIds: Array<string> }>;
  };
  transcribeAudio: { audio: unknown; mimeType: string; language?: string };
  synthesizeSpeech: { text: string; voiceId?: string };
  getCursorAuthStatus: undefined;
  loginCursor: undefined;
  getCursorLoginFlight: undefined;
  cancelCursorLoginFlight: undefined;
  logoutCursor: undefined;
  listCursorAccounts: undefined;
  addCursorAccount: undefined;
  switchCursorAccount: { accountId: string };
  removeCursorAccount: { accountId: string };
  updateCursorAccountName: { name: string };
  getCursorAvatar: undefined;
  updateCursorProfilePhoto: { photo: unknown };
  getSandMachines: undefined;
  updateSandMachineLabel: { machineId: string; label: string };
  startPasskeyEnrollment: undefined;
  verifyPasskeyEnrollmentCode: { code: unknown };
  beginPasskeyRegistration: { enrollmentTicket: string };
  listPasskeys: undefined;
  revokePasskey: { credentialId: string };
  getCursorSelectedTeam: undefined;
  listCursorTeamMemberships: undefined;
  listCursorTeamMembers: { teamId: number };
  ackCursorTeamFallback: {
    notice: {
      fromTeamId: number;
      fromTeamName: string | null;
      toTeam: { id: number; name: string } | null;
    };
  };
  getCursorWeeklyUsage: undefined;
  getCursorUsageSummary: undefined;
  getCursorEnterpriseUsage: { teamId: number };
  getCursorUsageBreakdown: { includeCredits: boolean };
  getCursorPrReviewPreferences: undefined;
  getCursorOriginPrStatus: { prUrl: string };
  getCursorPrivacyModeEnabled: undefined;
  getSandAccess: undefined;
  getSandAccessFresh: undefined;
  getGrokBotTermsRecord: undefined;
  markGrokBotTermsSeen: undefined;
  clearGrokBotConnectorPreferences: undefined;
  mintVoiceCallCredential: undefined;
  mintXaiCommerceBearer: undefined;
  voiceCallHarnessSession: {
    dial:
      | { kind: "backend" }
      | {
          kind: "package";
          loop: "box" | "temporal";
          hasStaySilent: boolean;
          hasOverheard: boolean;
        };
    args: {
      agentId: string;
      agentName: string;
      userName?: string;
      description?: string;
      spokenLanguage?: string;
    };
  };
  voiceCallHarnessTool: {
    dial:
      | { kind: "backend" }
      | {
          kind: "package";
          loop: "box" | "temporal";
          hasStaySilent: boolean;
          hasOverheard: boolean;
        };
    invocation: {
      agentId: string;
      callId: string;
      name: string;
      input: unknown;
      line: {
        theyJustTalked: boolean;
        newsOwed: boolean;
        receiptOwed: boolean;
        alreadySpokeThisTurn: boolean;
      };
    };
  };
  invokeCursorDashboardAction: { action: string; args: Record<string, string> };
  cancelCursorSandTrial: undefined;
  prepareCursorScmConnect: { provider: unknown; forceOauth?: boolean };
  completeCursorScmConnect: {
    state: string;
    code?: string;
    installationId?: string;
    setupAction?: string;
    error?: string;
  };
  getCursorGithubRepoAccess: { repoSlug: string };
  runPasskeyCeremony: {
    ceremonyId: string;
    path: string;
    token: string;
    challengeId?: string;
  };
  cancelPasskeyCeremony: { ceremonyId: string };
  setCursorSpendLimit: unknown;
  reportAgentLoad: unknown;
  reportAccessBlocked: unknown;
  reportAgentsUnreachable: unknown;
  reportRecoveryAction: unknown;
  reportRebuildLifecycle: unknown;
  reportReconciliation: unknown;
  reportBoxVisibility: unknown;
  reportSendLatency: unknown;
  reportSendAck: unknown;
  reportTurnClientStart: unknown;
  reportTurnClientOutcome: unknown;
  reportReactionAck: unknown;
  reportRenderTtfr: unknown;
  reportRenderStream: unknown;
  reportVncSession: unknown;
  reportVncLiveness: unknown;
  reportOpenComputer: unknown;
  reportUpdatePrompt: unknown;
  reportUsageWarning: unknown;
  reportSidebarAction: unknown;
  reportArtifactEngagement: unknown;
  reportCloudAgentArtifact: unknown;
  reportSigninGate: unknown;
  reportOnboardingStep: unknown;
  reportOnboardingCompleted: unknown;
  reportClientFailure: unknown;
  reportHeapMetrics: unknown;
  noteSentryConversation: unknown;
  openCloudAgent: { bcId: unknown; target?: "default" | "web" };
  getLinkMetadata: { url: string; image?: "card" | "source" };
  stageMcpAppDocument: {
    html: string;
    csp?: {
      connectDomains: Array<string>;
      resourceDomains: Array<string>;
      frameDomains: Array<string>;
      baseUriDomains: Array<string>;
    };
  };
  listSecrets: undefined;
  readClientPersistence: { key: string };
  readManyClientPersistence: { include: Array<string>; exclude: Array<string> };
  writeClientPersistence: { key: string; value: string };
  removeClientPersistence: { key: string };
  listClientPersistenceKeys: { prefix: string };
  hasMigratedClientPersistence: undefined;
  migrateClientPersistence: { entries: Array<{ key: string; value: string }> };
  getCredentialsState: undefined;
  syncCredentialProvider: undefined;
  disconnectCredentialProvider: { connectionId: string };
  disconnectScmConnection: { platform: string };
  isSlackLinked: undefined;
  getSlackLinkUrl: undefined;
  approveCredentialRequest: {
    entryId: string;
    agentId: string;
    credentialId: string;
    connectionId: string;
    catalogRevision: string;
    targetSite: string;
    harness: "box" | "temporal";
  };
  denyCredentialRequest: {
    entryId: string;
    agentId: string;
    harness: "box" | "temporal";
  };
  detectCredentialMint: undefined;
  startCredentialMint:
    | {
        accountUuid: string;
        vaultName: string;
        accountUrl?: string;
        accountEmail?: string;
        connectionId?: string;
      }
    | { serviceAccountToken: string; connectionId?: string };
  connectCredentialProviderOAuth: { connectionId?: string };
  cancelCredentialProviderOAuth: undefined;
  getMcpState: undefined;
  getGrokBotAgentMcpServers: { agentId: string };
  getEffectivePlugins: undefined;
  getMcpCatalog: undefined;
  refreshMcpCatalog: undefined;
  getMcpTeamPopularity: undefined;
  getMcpPluginLogo: { url: string };
  installEntry: {
    entryId: string;
    values?: Record<string, string | number | boolean>;
    hasTeamConfiguredVariables?: boolean;
  };
  updatePluginInstall: {
    pluginId: string;
    values: Record<string, string | number | boolean>;
  };
  removeMcpServer: { serverId: string };
  uninstallPlugin: { pluginId: string };
  reconcileUnpublishedPlugin: { pluginId: string };
  authenticateMcpServer: {
    serverId: string;
    accountKey?: string;
    trigger?: "connector_card";
    forceReauth?: boolean;
    grokBotAgentId?: string;
  };
  renameMcpAccount: {
    serverId: string;
    accountKey: string;
    newAccountKey: string;
  };
  removeMcpAccount: { serverId: string; accountKey: string };
  setMcpCustomInstructions: { serverId: string; instructions: string };
  listMcpServerTools: { serverId: string; demand?: "background" };
  toggleMcpToolDisabled: { serverId: string; toolName: string };
  getFinanceOverview: undefined;
  deleteFinanceConnection: { connectionId: string };
  startFinanceLink: { repairLinkedBank?: boolean };
  attachProdBoxStatus: undefined;
  setAttachProdBoxEnabled: { enabled: boolean; isRestartMainApp?: boolean };
  checkMessagesPermissions: {
    prompt?: "automation" | "fullDiskAccess" | "contacts";
  };
  getCurrentMachineMessagesEnabled: undefined;
  updateCurrentMachineMessagesEnabled: { messagesEnabled: boolean };
  listMessagesAllowedRecipients: undefined;
  revokeMessagesAllowedRecipient: { recipient: string };
  listChromeCookieAllowItems: undefined;
  importChromeCookies: {
    cookies: Array<{
      profileId: string;
      domain: string;
      name: string;
      path: string;
    }>;
  };
  listCookieOriginGrants: undefined;
  putCookieOriginGrants: {
    grants: Array<{ profileId: string; origin: string }>;
  };
  listMeetings: undefined;
  meetingCensus: undefined;
  leaveMeeting: { meetingId: string; host: "desktop" | "server" };
}
export interface MountRequests {
  mount: { agentId: string; name: string; markSvgDataUrl: unknown };
  unmount: undefined;
  offerChoices: { choices: unknown };
  read: undefined;
  readChoices: undefined;
  submitPrompt: { prompt: unknown };
  switchTo: { agentId: string };
  reachForMenu: { heightPx: unknown };
  movePanel: { dx: unknown; dy: unknown };
  endPanelMove: undefined;
}
export const mainNoArgumentMethods = new Set([
  "getWindowState",
  "minimizeWindow",
  "focusWindow",
  "toggleMaximizeWindow",
  "closeWindow",
  "getThemeState",
  "getBotColorInChatEnabled",
  "getHardwareAcceleration",
  "getSpellCheckEnabled",
  "getDesktopNotificationPreferences",
  "relaunchDesktop",
  "getLanguageState",
  "getEgressTunnelEnabled",
  "getEgressTunnelStatus",
  "claimEgressTunnel",
  "getWebauthnProxyEnabled",
  "runNetworkDiagnostics",
  "getUpdateStatus",
  "checkForUpdates",
  "getBoxMigrationStatus",
  "getBoxHostPhase",
  "markDeepLinksReady",
  "getOnboardingSeen",
  "getTimeZone",
  "getAutoReviewInstructions",
  "getLocalToolPermission",
  "getMessagesAppIcon",
  "getTeamMemberPolicy",
  "clearLocalToolApprovals",
  "pickAvatarSource",
  "pickAvatarFile",
  "forceRecreateComputer",
  "getComputerUpgradeSchedule",
  "forceReconnectGateway",
  "getExperimentsSnapshot",
  "peekUsageWarningAssignment",
  "logGroupChatDiscouragementExperimentExposure",
  "logOnboardingJobRoleExperimentExposure",
  "logOnboardingRoleUseCaseBotsExperimentExposure",
  "refreshFeatureFlags",
  "startRpcTraceWindow",
  "listPublicBotMarketplace",
  "listGrokBotTeamAgents",
  "listGrokBotEmailInboxes",
  "getHostPinnedAgents",
  "getHostSidebarSections",
  "getCursorAuthStatus",
  "loginCursor",
  "getCursorLoginFlight",
  "cancelCursorLoginFlight",
  "logoutCursor",
  "listCursorAccounts",
  "addCursorAccount",
  "getCursorAvatar",
  "getSandMachines",
  "startPasskeyEnrollment",
  "listPasskeys",
  "getCursorSelectedTeam",
  "listCursorTeamMemberships",
  "getCursorWeeklyUsage",
  "getCursorUsageSummary",
  "getCursorPrReviewPreferences",
  "getCursorPrivacyModeEnabled",
  "getSandAccess",
  "getSandAccessFresh",
  "getGrokBotTermsRecord",
  "markGrokBotTermsSeen",
  "clearGrokBotConnectorPreferences",
  "mintVoiceCallCredential",
  "mintXaiCommerceBearer",
  "cancelCursorSandTrial",
  "listSecrets",
  "hasMigratedClientPersistence",
  "getCredentialsState",
  "syncCredentialProvider",
  "isSlackLinked",
  "getSlackLinkUrl",
  "detectCredentialMint",
  "cancelCredentialProviderOAuth",
  "getMcpState",
  "getEffectivePlugins",
  "getMcpCatalog",
  "refreshMcpCatalog",
  "getMcpTeamPopularity",
  "getFinanceOverview",
  "attachProdBoxStatus",
  "getCurrentMachineMessagesEnabled",
  "listMessagesAllowedRecipients",
  "listChromeCookieAllowItems",
  "listCookieOriginGrants",
  "listMeetings",
  "meetingCensus",
]);
export const mountNoArgumentMethods = new Set([
  "unmount",
  "read",
  "readChoices",
  "endPanelMove",
]);

export const mainMethodNames = [
  "openExternal",
  "getCanvasShare",
  "setCanvasVisibility",
  "getDocument",
  "getDocumentEditRight",
  "saveDocument",
  "resolveLibraryPages",
  "listLibraryDocs",
  "setDocumentVisibility",
  "getDocumentAssets",
  "submitFeedback",
  "getWindowState",
  "minimizeWindow",
  "focusWindow",
  "toggleMaximizeWindow",
  "closeWindow",
  "resizeWindowWidth",
  "setTitleBarOverlayTone",
  "setViewingAgent",
  "setComposingAgent",
  "setComputerViewOpen",
  "getThemeState",
  "setThemePreference",
  "getBotColorInChatEnabled",
  "setBotColorInChatEnabled",
  "getHardwareAcceleration",
  "setHardwareAccelerationEnabled",
  "getSpellCheckEnabled",
  "setSpellCheckEnabled",
  "getDesktopNotificationPreferences",
  "setDesktopNotificationPreferences",
  "relaunchDesktop",
  "getLanguageState",
  "setLanguagePreference",
  "getEgressTunnelEnabled",
  "setEgressTunnelEnabled",
  "getEgressTunnelStatus",
  "claimEgressTunnel",
  "getWebauthnProxyEnabled",
  "setWebauthnProxyEnabled",
  "runNetworkDiagnostics",
  "getUpdateStatus",
  "checkForUpdates",
  "setUpdateTrack",
  "quitAndInstallUpdate",
  "setAutoUpdateWhenIdle",
  "getBoxMigrationStatus",
  "getBoxHostPhase",
  "markDeepLinksReady",
  "getOnboardingSeen",
  "setOnboardingSeen",
  "getTimeZone",
  "setTimeZoneOverride",
  "getAutoReviewInstructions",
  "setAutoReviewInstructions",
  "getLocalToolPermission",
  "getMessagesAppIcon",
  "getTeamMemberPolicy",
  "setLocalToolPermission",
  "recordLocalToolApproval",
  "clearLocalToolApprovals",
  "recordLocalToolStandingGrant",
  "getLocalToolActionGrant",
  "setLocalToolActionGrant",
  "pickAvatarSource",
  "pickAvatarFile",
  "generateAgentAvatarImage",
  "resolveAttachmentMedia",
  "readAttachmentText",
  "readAttachmentBytes",
  "stageAttachmentBytes",
  "stageAttachmentPath",
  "downloadAttachment",
  "commitStagedAttachments",
  "discardStagedAttachment",
  "precaptionStagedAttachment",
  "forceRecreateComputer",
  "updateComputer",
  "getComputerUpgradeSchedule",
  "scheduleComputerUpgrade",
  "rescheduleComputerUpgrade",
  "cancelComputerUpgrade",
  "forceReconnectGateway",
  "getExperimentsSnapshot",
  "exposeFeatureGate",
  "peekUsageWarningAssignment",
  "exposeUsageWarningExperiment",
  "logComposerTriggerExperimentExposure",
  "logGroupChatDiscouragementExperimentExposure",
  "logOnboardingJobRoleExperimentExposure",
  "logOnboardingRoleUseCaseBotsExperimentExposure",
  "applyFeatureFlagOverride",
  "refreshFeatureFlags",
  "applyExperimentOverride",
  "startRpcTraceWindow",
  "readTranscriptStoreTail",
  "getPublicBotTemplate",
  "listPublicBotMarketplace",
  "getGrokBotSlackInstallState",
  "startGrokBotSlackConnect",
  "installGrokBotSlackApp",
  "reinstallGrokBotSlackApp",
  "uninstallGrokBotSlackApp",
  "listGrokBotTeamAgents",
  "listGrokBotAgentSessions",
  "setGrokBotAgentVisibility",
  "cloneGrokBotAgentToTeam",
  "setGrokBotAgentVoice",
  "updateGrokBotAgent",
  "publishGrokBotAgent",
  "unpublishGrokBotAgent",
  "setGrokBotAgentSidebarHidden",
  "addGrokBotRoomPeople",
  "removeGrokBotRoomPeople",
  "listGrokBotAgentManagers",
  "addGrokBotAgentManager",
  "removeGrokBotAgentManager",
  "getGrokBotAgentPlugins",
  "setGrokBotAgentPlugins",
  "setGrokBotAgentPluginVariables",
  "addGrokBotAgentSkill",
  "updateGrokBotAgentSkill",
  "removeGrokBotAgentSkill",
  "listGrokBotUserBotMemories",
  "promoteGrokBotMemoriesToTeam",
  "listGrokBotEmailInboxes",
  "createGrokBotEmailInbox",
  "listGrokBotSecrets",
  "putGrokBotSecret",
  "deleteGrokBotSecret",
  "carryUserSecretsToGrokBot",
  "getHostPinnedAgents",
  "setHostPinnedAgents",
  "getHostSidebarSections",
  "setHostSidebarSections",
  "transcribeAudio",
  "synthesizeSpeech",
  "getCursorAuthStatus",
  "loginCursor",
  "getCursorLoginFlight",
  "cancelCursorLoginFlight",
  "logoutCursor",
  "listCursorAccounts",
  "addCursorAccount",
  "switchCursorAccount",
  "removeCursorAccount",
  "updateCursorAccountName",
  "getCursorAvatar",
  "updateCursorProfilePhoto",
  "getSandMachines",
  "updateSandMachineLabel",
  "startPasskeyEnrollment",
  "verifyPasskeyEnrollmentCode",
  "beginPasskeyRegistration",
  "listPasskeys",
  "revokePasskey",
  "getCursorSelectedTeam",
  "listCursorTeamMemberships",
  "listCursorTeamMembers",
  "ackCursorTeamFallback",
  "getCursorWeeklyUsage",
  "getCursorUsageSummary",
  "getCursorEnterpriseUsage",
  "getCursorUsageBreakdown",
  "getCursorPrReviewPreferences",
  "getCursorOriginPrStatus",
  "getCursorPrivacyModeEnabled",
  "getSandAccess",
  "getSandAccessFresh",
  "getGrokBotTermsRecord",
  "markGrokBotTermsSeen",
  "clearGrokBotConnectorPreferences",
  "mintVoiceCallCredential",
  "mintXaiCommerceBearer",
  "voiceCallHarnessSession",
  "voiceCallHarnessTool",
  "invokeCursorDashboardAction",
  "cancelCursorSandTrial",
  "prepareCursorScmConnect",
  "completeCursorScmConnect",
  "getCursorGithubRepoAccess",
  "runPasskeyCeremony",
  "cancelPasskeyCeremony",
  "setCursorSpendLimit",
  "reportAgentLoad",
  "reportAccessBlocked",
  "reportAgentsUnreachable",
  "reportRecoveryAction",
  "reportRebuildLifecycle",
  "reportReconciliation",
  "reportBoxVisibility",
  "reportSendLatency",
  "reportSendAck",
  "reportTurnClientStart",
  "reportTurnClientOutcome",
  "reportReactionAck",
  "reportRenderTtfr",
  "reportRenderStream",
  "reportVncSession",
  "reportVncLiveness",
  "reportOpenComputer",
  "reportUpdatePrompt",
  "reportUsageWarning",
  "reportSidebarAction",
  "reportArtifactEngagement",
  "reportCloudAgentArtifact",
  "reportSigninGate",
  "reportOnboardingStep",
  "reportOnboardingCompleted",
  "reportClientFailure",
  "reportHeapMetrics",
  "noteSentryConversation",
  "openCloudAgent",
  "getLinkMetadata",
  "stageMcpAppDocument",
  "listSecrets",
  "readClientPersistence",
  "readManyClientPersistence",
  "writeClientPersistence",
  "removeClientPersistence",
  "listClientPersistenceKeys",
  "hasMigratedClientPersistence",
  "migrateClientPersistence",
  "getCredentialsState",
  "syncCredentialProvider",
  "disconnectCredentialProvider",
  "disconnectScmConnection",
  "isSlackLinked",
  "getSlackLinkUrl",
  "approveCredentialRequest",
  "denyCredentialRequest",
  "detectCredentialMint",
  "startCredentialMint",
  "connectCredentialProviderOAuth",
  "cancelCredentialProviderOAuth",
  "getMcpState",
  "getGrokBotAgentMcpServers",
  "getEffectivePlugins",
  "getMcpCatalog",
  "refreshMcpCatalog",
  "getMcpTeamPopularity",
  "getMcpPluginLogo",
  "installEntry",
  "updatePluginInstall",
  "removeMcpServer",
  "uninstallPlugin",
  "reconcileUnpublishedPlugin",
  "authenticateMcpServer",
  "renameMcpAccount",
  "removeMcpAccount",
  "setMcpCustomInstructions",
  "listMcpServerTools",
  "toggleMcpToolDisabled",
  "getFinanceOverview",
  "deleteFinanceConnection",
  "startFinanceLink",
  "attachProdBoxStatus",
  "setAttachProdBoxEnabled",
  "checkMessagesPermissions",
  "getCurrentMachineMessagesEnabled",
  "updateCurrentMachineMessagesEnabled",
  "listMessagesAllowedRecipients",
  "revokeMessagesAllowedRecipient",
  "listChromeCookieAllowItems",
  "importChromeCookies",
  "listCookieOriginGrants",
  "putCookieOriginGrants",
  "listMeetings",
  "meetingCensus",
  "leaveMeeting",
];

export const mountMethodNames = [
  "mount",
  "unmount",
  "offerChoices",
  "read",
  "readChoices",
  "submitPrompt",
  "switchTo",
  "reachForMenu",
  "movePanel",
  "endPanelMove",
];
