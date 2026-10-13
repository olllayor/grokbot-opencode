/** Public desktop adapters reconstructed from shipped argument mappings. */
import * as electron from "electron";
import type { MainRequests } from "./contracts.js";
import {
  boot,
  mainRpc,
  coordinator,
  platformOptional,
  stageFile,
  booleanOrNull,
  isDev,
  usesProductionBackend,
  reportTelemetryFailure,
  turnTelemetry,
  RENDERER_ALIVE,
  BOOT_GATE_LANDED,
  type Listener,
} from "./runtime.js";
const attachProdBox = {
    async getStatus() {
      return await mainRpc.attachProdBoxStatus();
    },
    async setEnabled(
      enabled: MainRequests["setAttachProdBoxEnabled"]["enabled"],
      secondary: {
        isRestartMainApp?: unknown;
      },
    ) {
      return await mainRpc.setAttachProdBoxEnabled({
        enabled: enabled,
        isRestartMainApp: secondary?.isRestartMainApp,
      });
    },
  },
  chromeCookies = platformOptional(process.platform, {
    async listCookieAllowItems() {
      return await mainRpc.listChromeCookieAllowItems();
    },
    async import(input: {
      cookies: Array<{
        profileId: string;
        domain: string;
        name: string;
        path: string;
      }>;
    }) {
      return await mainRpc.importChromeCookies(input);
    },
  }),
  cookieOriginGrants = platformOptional(process.platform, {
    async list() {
      return await mainRpc.listCookieOriginGrants();
    },
    async put(input: {
      grants: Array<{
        profileId: string;
        origin: string;
      }>;
    }) {
      return await mainRpc.putCookieOriginGrants(input);
    },
  }),
  attachmentStager = {
    diskPathOf: (input: unknown) =>
      (input instanceof File && electron.webUtils.getPathForFile(input)) ||
      null,
    stagePath: (input: { filename: string; sourcePath: string }) =>
      mainRpc.stageAttachmentPath(input),
    stageBytes: (
      filename: MainRequests["stageAttachmentBytes"]["filename"],
      bytes: MainRequests["stageAttachmentBytes"]["bytes"],
    ) => mainRpc.stageAttachmentBytes({ filename: filename, bytes: bytes }),
  },
  desktop = {
    async resolveAttachmentMedia(
      source: MainRequests["resolveAttachmentMedia"]["source"],
      inline: MainRequests["resolveAttachmentMedia"]["inline"],
      rendition: MainRequests["resolveAttachmentMedia"]["rendition"],
      context: {
        inRoom?: unknown;
        preview?: unknown;
      },
    ) {
      return await mainRpc.resolveAttachmentMedia({
        source: source,
        inline: inline,
        rendition: rendition,
        inRoom: context?.inRoom,
        preview: context?.preview,
      });
    },
    async readAttachmentText(
      path: MainRequests["readAttachmentText"]["path"],
      agentId: MainRequests["readAttachmentText"]["agentId"],
    ) {
      return await mainRpc.readAttachmentText({ path: path, agentId: agentId });
    },
    async readAttachmentBytes(
      path: MainRequests["readAttachmentBytes"]["path"],
      maxBytes: MainRequests["readAttachmentBytes"]["maxBytes"],
      agentId: MainRequests["readAttachmentBytes"]["agentId"],
    ) {
      return await mainRpc.readAttachmentBytes({
        path: path,
        maxBytes: maxBytes,
        agentId: agentId,
      });
    },
    async downloadAttachment(
      path: MainRequests["downloadAttachment"]["path"],
      suggestedName: MainRequests["downloadAttachment"]["suggestedName"],
    ) {
      return await mainRpc.downloadAttachment({
        path: path,
        suggestedName: suggestedName,
      });
    },
    async getLinkMetadata(
      url: MainRequests["getLinkMetadata"]["url"],
      image: MainRequests["getLinkMetadata"]["image"],
    ) {
      return await mainRpc.getLinkMetadata({ url: url, image: image });
    },
    async stageMcpAppDocument(input: {
      html: string;
      csp?: {
        connectDomains: Array<string>;
        resourceDomains: Array<string>;
        frameDomains: Array<string>;
        baseUriDomains: Array<string>;
      };
    }) {
      return await mainRpc.stageMcpAppDocument(input);
    },
    async openExternal(url: MainRequests["openExternal"]["url"]) {
      await mainRpc.openExternal({ url: url });
    },
    async listMeetings() {
      return await mainRpc.listMeetings();
    },
    async meetingCensus() {
      return await mainRpc.meetingCensus();
    },
    onMeetingsChanged(listener: Listener) {
      return mainRpc.subscribe({ "meetings-changed": listener });
    },
    async leaveMeeting(input: {
      meetingId: string;
      host: "desktop" | "server";
    }) {
      await mainRpc.leaveMeeting(input);
    },
    async getCanvasShare(locator: MainRequests["getCanvasShare"]["locator"]) {
      return await mainRpc.getCanvasShare({ locator: locator });
    },
    async getDocument(input: { groupChatId?: unknown; locator?: unknown }) {
      return await mainRpc.getDocument(
        input.groupChatId === void 0
          ? { locator: input.locator }
          : { locator: input.locator, groupChatId: input.groupChatId },
      );
    },
    async getDocumentEditRight(
      locator: MainRequests["getDocumentEditRight"]["locator"],
    ) {
      return await mainRpc.getDocumentEditRight({ locator: locator });
    },
    async saveDocument(locator: {
      locator?: MainRequests["saveDocument"]["locator"];
      source?: MainRequests["saveDocument"]["source"];
    }) {
      return await mainRpc.saveDocument({
        locator: locator.locator,
        source: locator.source,
      });
    },
    async resolveLibraryPages(refs: {
      refs?: MainRequests["resolveLibraryPages"]["refs"];
      includeDocuments?: MainRequests["resolveLibraryPages"]["includeDocuments"];
    }) {
      return await mainRpc.resolveLibraryPages({
        refs: refs.refs,
        includeDocuments: refs.includeDocuments,
      });
    },
    async listLibraryDocs(agentId: {
      agentId?: MainRequests["listLibraryDocs"]["agentId"];
    }) {
      return await mainRpc.listLibraryDocs({ agentId: agentId.agentId });
    },
    async setDocumentVisibility(
      locator: MainRequests["setDocumentVisibility"]["locator"],
      visibility: MainRequests["setDocumentVisibility"]["visibility"],
    ) {
      return await mainRpc.setDocumentVisibility({
        locator: locator,
        visibility: visibility,
      });
    },
    async getDocumentAssets(input: {
      groupChatId?: unknown;
      locator?: unknown;
      names?: unknown;
    }) {
      return await mainRpc.getDocumentAssets(
        input.groupChatId === void 0
          ? { locator: input.locator, names: input.names }
          : {
              locator: input.locator,
              names: input.names,
              groupChatId: input.groupChatId,
            },
      );
    },
    async setCanvasVisibility(
      locator: MainRequests["setCanvasVisibility"]["locator"],
      visibility: MainRequests["setCanvasVisibility"]["visibility"],
    ) {
      return await mainRpc.setCanvasVisibility({
        locator: locator,
        visibility: visibility,
      });
    },
    async openCloudAgent(
      bcId: MainRequests["openCloudAgent"]["bcId"],
      target: MainRequests["openCloudAgent"]["target"],
    ) {
      await mainRpc.openCloudAgent({ bcId: bcId, target: target });
    },
    async checkMessagesPermissions(input: {
      prompt?: "automation" | "fullDiskAccess" | "contacts";
    }) {
      return await mainRpc.checkMessagesPermissions(input);
    },
    async getCurrentMachineMessagesEnabled() {
      return await mainRpc.getCurrentMachineMessagesEnabled();
    },
    async updateCurrentMachineMessagesEnabled(
      messagesEnabled: MainRequests["updateCurrentMachineMessagesEnabled"]["messagesEnabled"],
    ) {
      return await mainRpc.updateCurrentMachineMessagesEnabled({
        messagesEnabled: messagesEnabled,
      });
    },
    async listMessagesAllowedRecipients() {
      return await mainRpc.listMessagesAllowedRecipients();
    },
    async revokeMessagesAllowedRecipient(
      recipient: MainRequests["revokeMessagesAllowedRecipient"]["recipient"],
    ) {
      return await mainRpc.revokeMessagesAllowedRecipient({
        recipient: recipient,
      });
    },
    async stageAttachmentFile(filename: string, file: File) {
      return await stageFile(attachmentStager, filename, file);
    },
    async commitStagedAttachments(input: {
      agentId: string;
      paths: Array<string>;
      filenames: Array<string>;
    }) {
      return await mainRpc.commitStagedAttachments(input);
    },
    async discardStagedAttachment(
      path: MainRequests["discardStagedAttachment"]["path"],
    ) {
      await mainRpc.discardStagedAttachment({ path: path });
    },
    async precaptionStagedAttachment(input: {
      path: string;
      agentId: string;
      draftText: string;
      priorUserMessages: Array<string>;
    }) {
      await mainRpc.precaptionStagedAttachment(input);
    },
    mcp: {
      async list() {
        return await mainRpc.getMcpState();
      },
      async grokBotAgentServers(
        agentId: MainRequests["getGrokBotAgentMcpServers"]["agentId"],
      ) {
        return await mainRpc.getGrokBotAgentMcpServers({ agentId: agentId });
      },
      async effectivePlugins() {
        return await mainRpc.getEffectivePlugins();
      },
      async catalog() {
        return await mainRpc.getMcpCatalog();
      },
      async refreshCatalog() {
        return await mainRpc.refreshMcpCatalog();
      },
      async teamPopularity() {
        return await mainRpc.getMcpTeamPopularity();
      },
      async pluginLogo(url: MainRequests["getMcpPluginLogo"]["url"]) {
        return await mainRpc.getMcpPluginLogo({ url: url });
      },
      async install(input: {
        entryId: string;
        values?: Record<string, string | number | boolean>;
        hasTeamConfiguredVariables?: boolean;
      }) {
        return await mainRpc.installEntry(input);
      },
      async updatePluginInstall(input: {
        pluginId: string;
        values: Record<string, string | number | boolean>;
      }) {
        return await mainRpc.updatePluginInstall(input);
      },
      async remove(serverId: MainRequests["removeMcpServer"]["serverId"]) {
        return await mainRpc.removeMcpServer({ serverId: serverId });
      },
      async uninstallPlugin(
        pluginId: MainRequests["uninstallPlugin"]["pluginId"],
      ) {
        return await mainRpc.uninstallPlugin({ pluginId: pluginId });
      },
      async reconcileUnpublishedPlugin(
        pluginId: MainRequests["reconcileUnpublishedPlugin"]["pluginId"],
      ) {
        return await mainRpc.reconcileUnpublishedPlugin({ pluginId: pluginId });
      },
      async authenticate(
        serverId: MainRequests["authenticateMcpServer"]["serverId"],
        secondary: unknown,
        options: unknown,
        context: unknown,
        extra: unknown,
      ) {
        return await mainRpc.authenticateMcpServer({
          serverId: serverId,
          ...(secondary != null ? { accountKey: secondary } : {}),
          ...(options != null ? { trigger: options } : {}),
          ...(context != null ? { forceReauth: context } : {}),
          ...(extra != null ? { grokBotAgentId: extra } : {}),
        });
      },
      async renameAccount(input: {
        serverId: string;
        accountKey: string;
        newAccountKey: string;
      }) {
        return await mainRpc.renameMcpAccount(input);
      },
      async removeAccount(input: { serverId: string; accountKey: string }) {
        return await mainRpc.removeMcpAccount(input);
      },
      async setCustomInstructions(input: {
        serverId: string;
        instructions: string;
      }) {
        return await mainRpc.setMcpCustomInstructions(input);
      },
      async listServerTools(input: unknown, secondary: unknown) {
        return await mainRpc.listMcpServerTools(
          secondary === void 0
            ? { serverId: input }
            : { serverId: input, demand: secondary },
        );
      },
      async toggleToolDisabled(input: { serverId: string; toolName: string }) {
        return await mainRpc.toggleMcpToolDisabled(input);
      },
      async financeOverview() {
        return await mainRpc.getFinanceOverview();
      },
      async deleteFinanceConnection(
        connectionId: MainRequests["deleteFinanceConnection"]["connectionId"],
      ) {
        await mainRpc.deleteFinanceConnection({ connectionId: connectionId });
      },
      async startFinanceLink(
        input: {
          repairLinkedBank?: boolean;
        } = {},
      ) {
        return await mainRpc.startFinanceLink(input);
      },
      onAuthCompleted(listener: Listener) {
        return mainRpc.subscribe({ "mcp-auth-completed": listener });
      },
      onServersUpdated(listener: Listener) {
        return mainRpc.subscribe({ "mcp-servers-updated": listener });
      },
    },
    async forceGatewayReconnect() {
      await mainRpc.forceReconnectGateway();
    },
    async runNetworkDiagnostics() {
      return await mainRpc.runNetworkDiagnostics();
    },
    async pickAvatarSource() {
      return await mainRpc.pickAvatarSource();
    },
    async pickAvatarFile() {
      return await mainRpc.pickAvatarFile();
    },
    async generateAgentAvatarImage(
      description: MainRequests["generateAgentAvatarImage"]["description"],
    ) {
      return await mainRpc.generateAgentAvatarImage({
        description: description,
      });
    },
    onFocusAgent(listener: Listener) {
      return mainRpc.subscribe({ "focus-agent": listener });
    },
    onDeepLink(listener: Listener) {
      return mainRpc.subscribe({ "deep-link": listener });
    },
    async deepLinksReady() {
      await mainRpc.markDeepLinksReady();
    },
    noteRendererAlive() {
      electron.ipcRenderer.send(RENDERER_ALIVE);
    },
    noteBootGateLanded() {
      electron.ipcRenderer.send(BOOT_GATE_LANDED);
    },
    async getBoxMigrationStatus() {
      return await mainRpc.getBoxMigrationStatus();
    },
    onBoxMigration(listener: Listener) {
      return mainRpc.subscribe({ "box-migration": listener });
    },
    async getBoxHostPhase() {
      return await mainRpc.getBoxHostPhase();
    },
    onBoxHostPhase(listener: Listener) {
      return mainRpc.subscribe({ "box-host-phase": listener });
    },
    onDevBoxRebuild(listener: Listener) {
      return mainRpc.subscribe({ "dev-box-rebuild": listener });
    },
    onOpenFeedback(listener: Listener) {
      return mainRpc.subscribe({ "open-feedback": () => listener() });
    },
    onOpenAbout(listener: Listener) {
      return mainRpc.subscribe({ "open-about": () => listener() });
    },
    onOpenSettings(listener: Listener) {
      return mainRpc.subscribe({ "open-settings": () => listener() });
    },
    onWindowFocus(listener: Listener) {
      return mainRpc.subscribe({ "window-focus": () => listener() });
    },
    async submitFeedback(input: unknown) {
      return await mainRpc.submitFeedback(input);
    },
    onWidgetGallery(listener: Listener) {
      return mainRpc.subscribe({ "widget-gallery": listener });
    },
    onForceOnboarding(listener: Listener) {
      return mainRpc.subscribe({ "force-onboarding": () => listener() });
    },
    async transcribeAudio(
      audio: MainRequests["transcribeAudio"]["audio"],
      mimeType: MainRequests["transcribeAudio"]["mimeType"],
      language: MainRequests["transcribeAudio"]["language"],
    ) {
      return await mainRpc.transcribeAudio({
        audio: audio,
        mimeType: mimeType,
        language: language,
      });
    },
    async synthesizeSpeech({
      text: text,
      voiceId: voiceId,
    }: {
      text: unknown;
      voiceId: unknown;
    }) {
      return await mainRpc.synthesizeSpeech({ text: text, voiceId: voiceId });
    },
    cursorAccount: {
      async getStatus() {
        return await mainRpc.getCursorAuthStatus();
      },
      async login() {
        return await mainRpc.loginCursor();
      },
      async addAccount() {
        return await mainRpc.addCursorAccount();
      },
      async listAccounts() {
        return await mainRpc.listCursorAccounts();
      },
      async switchAccount(
        accountId: MainRequests["switchCursorAccount"]["accountId"],
      ) {
        return await mainRpc.switchCursorAccount({ accountId: accountId });
      },
      async removeAccount(
        accountId: MainRequests["removeCursorAccount"]["accountId"],
      ) {
        return await mainRpc.removeCursorAccount({ accountId: accountId });
      },
      async getLoginFlight() {
        return await mainRpc.getCursorLoginFlight();
      },
      async cancelLoginFlight() {
        return await mainRpc.cancelCursorLoginFlight();
      },
      async logout() {
        return await mainRpc.logoutCursor();
      },
      async updateName(name: MainRequests["updateCursorAccountName"]["name"]) {
        return await mainRpc.updateCursorAccountName({ name: name });
      },
      async updateProfilePhoto(
        photo: MainRequests["updateCursorProfilePhoto"]["photo"],
      ) {
        return await mainRpc.updateCursorProfilePhoto({ photo: photo });
      },
      async getAvatar() {
        return await mainRpc.getCursorAvatar();
      },
      async getMachines() {
        return await mainRpc.getSandMachines();
      },
      async updateMachineLabel(input: { machineId: string; label: string }) {
        return await mainRpc.updateSandMachineLabel(input);
      },
      async getWeeklyUsage() {
        return await mainRpc.getCursorWeeklyUsage();
      },
      async getUsageSummary() {
        return await mainRpc.getCursorUsageSummary();
      },
      async listGrokBotEmailInboxes() {
        return await mainRpc.listGrokBotEmailInboxes();
      },
      async createGrokBotEmailInbox(input: {
        username: string;
        displayName: string;
      }) {
        return await mainRpc.createGrokBotEmailInbox(input);
      },
      async getEnterpriseUsage(
        teamId: MainRequests["getCursorEnterpriseUsage"]["teamId"],
      ) {
        return await mainRpc.getCursorEnterpriseUsage({ teamId: teamId });
      },
      async getUsageBreakdown(includeCredits: {
        includeCredits?: MainRequests["getCursorUsageBreakdown"]["includeCredits"];
      }) {
        return await mainRpc.getCursorUsageBreakdown({
          includeCredits: includeCredits.includeCredits,
        });
      },
      async getPrReviewPreferences() {
        return await mainRpc.getCursorPrReviewPreferences();
      },
      async getOriginPrStatus(
        prUrl: MainRequests["getCursorOriginPrStatus"]["prUrl"],
      ) {
        return await mainRpc.getCursorOriginPrStatus({ prUrl: prUrl });
      },
      async getPrivacyModeEnabled() {
        return await mainRpc.getCursorPrivacyModeEnabled();
      },
      async getSandAccess() {
        return await mainRpc.getSandAccess();
      },
      async getSandAccessFresh() {
        return await mainRpc.getSandAccessFresh();
      },
      async getGrokBotTermsRecord() {
        return await mainRpc.getGrokBotTermsRecord();
      },
      async markGrokBotTermsSeen() {
        return await mainRpc.markGrokBotTermsSeen();
      },
      async clearGrokBotConnectorPreferences() {
        return await mainRpc.clearGrokBotConnectorPreferences();
      },
      async mintVoiceCallCredential() {
        return await mainRpc.mintVoiceCallCredential();
      },
      async mintXaiCommerceBearer() {
        return await mainRpc.mintXaiCommerceBearer();
      },
      async voiceCallHarnessSession(input: {
        dial:
          | {
              kind: "backend";
            }
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
      }) {
        return await mainRpc.voiceCallHarnessSession(input);
      },
      async voiceCallHarnessTool(input: {
        dial:
          | {
              kind: "backend";
            }
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
      }) {
        return await mainRpc.voiceCallHarnessTool(input);
      },
      async invokeDashboardAction(input: {
        action: string;
        args: Record<string, string>;
      }) {
        return await mainRpc.invokeCursorDashboardAction(input);
      },
      async cancelTrial() {
        return await mainRpc.cancelCursorSandTrial();
      },
      async setSpendLimit(input: unknown) {
        return await mainRpc.setCursorSpendLimit(input);
      },
      async prepareScmConnect(
        provider: MainRequests["prepareCursorScmConnect"]["provider"],
        secondary: {
          forceOauth?: unknown;
        },
      ) {
        return await mainRpc.prepareCursorScmConnect({
          provider: provider,
          ...(secondary?.forceOauth === !0 ? { forceOauth: !0 } : {}),
        });
      },
      async completeScmConnect(input: {
        state: string;
        code?: string;
        installationId?: string;
        setupAction?: string;
        error?: string;
      }) {
        return await mainRpc.completeCursorScmConnect(input);
      },
      async getGithubRepoAccess(
        repoSlug: MainRequests["getCursorGithubRepoAccess"]["repoSlug"],
      ) {
        return await mainRpc.getCursorGithubRepoAccess({ repoSlug: repoSlug });
      },
      onStatusChanged(listener: Listener) {
        return mainRpc.subscribe({ "cursor-auth-changed": listener });
      },
      onLoginFlightChanged(listener: Listener) {
        return mainRpc.subscribe({ "cursor-login-flight-changed": listener });
      },
      async getSelectedTeam() {
        return await mainRpc.getCursorSelectedTeam();
      },
      async listTeamMemberships() {
        return await mainRpc.listCursorTeamMemberships();
      },
      async listTeamMembers(
        teamId: MainRequests["listCursorTeamMembers"]["teamId"],
      ) {
        return await mainRpc.listCursorTeamMembers({ teamId: teamId });
      },
      async ackTeamFallback(
        notice: MainRequests["ackCursorTeamFallback"]["notice"],
      ) {
        await mainRpc.ackCursorTeamFallback({ notice: notice });
      },
      onSelectedTeamChanged(listener: Listener) {
        return mainRpc.subscribe({ "cursor-team-changed": listener });
      },
    },
    passkey: {
      async startEnrollment() {
        return await mainRpc.startPasskeyEnrollment();
      },
      async verifyEnrollmentCode(
        code: MainRequests["verifyPasskeyEnrollmentCode"]["code"],
      ) {
        return await mainRpc.verifyPasskeyEnrollmentCode({ code: code });
      },
      async beginRegistration(
        enrollmentTicket: MainRequests["beginPasskeyRegistration"]["enrollmentTicket"],
      ) {
        return await mainRpc.beginPasskeyRegistration({
          enrollmentTicket: enrollmentTicket,
        });
      },
      async list() {
        return await mainRpc.listPasskeys();
      },
      async revoke(
        credentialId: MainRequests["revokePasskey"]["credentialId"],
      ) {
        await mainRpc.revokePasskey({ credentialId: credentialId });
      },
    },
    experiments: {
      initialSnapshot: boot.experiments,
      async getSnapshot() {
        return await mainRpc.getExperimentsSnapshot();
      },
      async exposeFeatureGate(name: MainRequests["exposeFeatureGate"]["name"]) {
        await mainRpc.exposeFeatureGate({ name: name });
      },
      async peekUsageWarningAssignment() {
        return await mainRpc.peekUsageWarningAssignment();
      },
      async exposeUsageWarningExperiment(
        percentUsed: MainRequests["exposeUsageWarningExperiment"]["percentUsed"],
      ) {
        return await mainRpc.exposeUsageWarningExperiment({
          percentUsed: percentUsed,
        });
      },
      async logComposerTriggerExperimentExposure(
        trigger: MainRequests["logComposerTriggerExperimentExposure"]["trigger"],
      ) {
        await mainRpc.logComposerTriggerExperimentExposure({
          trigger: trigger,
        });
      },
      async logGroupChatDiscouragementExperimentExposure() {
        await mainRpc.logGroupChatDiscouragementExperimentExposure();
      },
      async logOnboardingJobRoleExperimentExposure() {
        await mainRpc.logOnboardingJobRoleExperimentExposure();
      },
      async logOnboardingRoleUseCaseBotsExperimentExposure() {
        await mainRpc.logOnboardingRoleUseCaseBotsExperimentExposure();
      },
      async applyFeatureFlagOverride(
        command: MainRequests["applyFeatureFlagOverride"]["command"],
      ) {
        await mainRpc.applyFeatureFlagOverride({ command: command });
      },
      async refresh() {
        await mainRpc.refreshFeatureFlags();
      },
      async applyExperimentOverride(
        command: MainRequests["applyExperimentOverride"]["command"],
      ) {
        await mainRpc.applyExperimentOverride({ command: command });
      },
      async startRpcTraceWindow() {
        return (await mainRpc.startRpcTraceWindow()) === !0;
      },
      onChanged(listener: Listener) {
        return mainRpc.subscribe({ "experiments-changed": listener });
      },
    },
    platform: process.platform,
    isDev: isDev,
    usesProductionBackend: usesProductionBackend(),
    devVoiceHarness:
      process.env.SAND_VOICE_HARNESS === "backend" ? "backend" : "package",
    async getWindowState() {
      return await mainRpc.getWindowState();
    },
    onWindowStateEvent(listener: Listener) {
      return mainRpc.subscribe({ "window-state": listener });
    },
    onScrollGestureEvent(listener: Listener) {
      return mainRpc.subscribe({ "scroll-gesture": listener });
    },
    onMouseHistoryNavigation(listener: Listener) {
      return mainRpc.subscribe({
        "mouse-history-navigation": ({
          direction: direction,
        }: {
          direction?: unknown;
        }) => {
          (direction === -1 || direction === 1) && listener(direction);
        },
      });
    },
    getZoomFactor() {
      return electron.webFrame.getZoomFactor();
    },
    onZoomFactorEvent(listener: Listener) {
      return mainRpc.subscribe({
        "zoom-factor-changed": ({ factor: factor }: { factor?: unknown }) =>
          listener(factor),
      });
    },
    onNotificationSound(listener: Listener) {
      return mainRpc.subscribe({
        "notification-sound": (input: { sound?: unknown }) =>
          listener(input.sound),
      });
    },
    assistiveTech: {
      initial: boot.isAssistiveTechEnabled === true,
      onChanged(listener: Listener) {
        return mainRpc.subscribe({ "assistive-tech-changed": listener });
      },
    },
    windowControls: {
      async minimize() {
        await mainRpc.minimizeWindow();
      },
      async focus() {
        await mainRpc.focusWindow();
      },
      async toggleMaximize() {
        await mainRpc.toggleMaximizeWindow();
      },
      async close() {
        await mainRpc.closeWindow();
      },
      async setTitleBarOverlayTone(
        isOverlayTone: MainRequests["setTitleBarOverlayTone"]["isOverlayTone"],
      ) {
        await mainRpc.setTitleBarOverlayTone({ isOverlayTone: isOverlayTone });
      },
      async setViewingAgent(
        agentId: MainRequests["setViewingAgent"]["agentId"],
      ) {
        await mainRpc.setViewingAgent({ agentId: agentId });
      },
      async setComposingAgent(
        agentId: MainRequests["setComposingAgent"]["agentId"],
        composing: MainRequests["setComposingAgent"]["composing"],
      ) {
        await mainRpc.setComposingAgent({
          agentId: agentId,
          composing: composing,
        });
      },
      async setComputerViewOpen(
        isOpen: MainRequests["setComputerViewOpen"]["isOpen"],
      ) {
        await mainRpc.setComputerViewOpen({ isOpen: isOpen });
      },
      async resizeWidth(
        deltaWidth: MainRequests["resizeWindowWidth"]["deltaWidth"],
      ) {
        return await mainRpc.resizeWindowWidth({ deltaWidth: deltaWidth });
      },
    },
    foreverBox: {
      async forceRecreate() {
        return await mainRpc.forceRecreateComputer();
      },
      async update(input: {
        id: string;
        requestId: string;
        acknowledgeTerminalUpgradeSchedule?: boolean;
      }) {
        return await mainRpc.updateComputer(input);
      },
      upgradeSchedule: {
        async get() {
          return await mainRpc.getComputerUpgradeSchedule();
        },
        async schedule(input: unknown) {
          return await mainRpc.scheduleComputerUpgrade(input);
        },
        async reschedule(input: unknown) {
          return await mainRpc.rescheduleComputerUpgrade(input);
        },
        async cancel(input: unknown) {
          return await mainRpc.cancelComputerUpgrade(input);
        },
      },
      onUpdateDispatched(listener: Listener) {
        return mainRpc.subscribe({ "update-computer-dispatched": listener });
      },
      onDevBoxPullProgress(listener: Listener) {
        return mainRpc.subscribe({ "dev-box-pull-progress": listener });
      },
      egressTunnel: {
        initial: boot.isEgressTunnelEnabled === true,
        async get() {
          return (await mainRpc.getEgressTunnelEnabled()) === !0;
        },
        async set(enabled: MainRequests["setEgressTunnelEnabled"]["enabled"]) {
          return (
            (await mainRpc.setEgressTunnelEnabled({ enabled: enabled })) === !0
          );
        },
        onChanged(listener: Listener) {
          return mainRpc.subscribe({
            "egress-tunnel-changed": (input: unknown) => {
              listener(input === !0);
            },
          });
        },
        initialStatus: boot.egressTunnelStatus,
        async getStatus() {
          return await mainRpc.getEgressTunnelStatus();
        },
        onStatusChanged(listener: Listener) {
          return mainRpc.subscribe({
            "egress-tunnel-status-changed": listener,
          });
        },
        async claim() {
          await mainRpc.claimEgressTunnel();
        },
      },
      webauthnProxy: {
        initial: boot.isWebauthnProxyEnabled === true,
        async get() {
          return (await mainRpc.getWebauthnProxyEnabled()) === !0;
        },
        async set(enabled: MainRequests["setWebauthnProxyEnabled"]["enabled"]) {
          return (
            (await mainRpc.setWebauthnProxyEnabled({ enabled: enabled })) === !0
          );
        },
        onChanged(listener: Listener) {
          return mainRpc.subscribe({
            "webauthn-proxy-changed": (input: unknown) => {
              listener(input === !0);
            },
          });
        },
      },
    },
    onboarding: {
      async getSeen() {
        return await mainRpc.getOnboardingSeen();
      },
      async setSeen(seen: MainRequests["setOnboardingSeen"]["seen"]) {
        await mainRpc.setOnboardingSeen({ seen: seen });
      },
      onSkip(listener: Listener) {
        return mainRpc.subscribe({ "skip-onboarding": () => listener() });
      },
    },
    passkeyCeremony: {
      async run(input: {
        ceremonyId: string;
        path: string;
        token: string;
        challengeId?: string;
      }) {
        await mainRpc.runPasskeyCeremony(input);
      },
      async cancel(
        ceremonyId: MainRequests["cancelPasskeyCeremony"]["ceremonyId"],
      ) {
        await mainRpc.cancelPasskeyCeremony({ ceremonyId: ceremonyId });
      },
    },
    telemetry: {
      reportAgentLoad(input: unknown) {
        mainRpc.reportAgentLoad(input).catch(reportTelemetryFailure);
      },
      reportBoxVisibility(input: unknown) {
        mainRpc.reportBoxVisibility(input).catch(reportTelemetryFailure);
      },
      reportSendLatency(input: unknown) {
        mainRpc.reportSendLatency(input).catch(reportTelemetryFailure);
      },
      reportHeapMetrics(input: unknown) {
        mainRpc.reportHeapMetrics(input).catch(reportTelemetryFailure);
      },
      reportSendAck(input: unknown) {
        mainRpc.reportSendAck(input).catch(reportTelemetryFailure);
      },
      ...turnTelemetry(),
      reportReactionAck(input: unknown) {
        mainRpc.reportReactionAck(input).catch(reportTelemetryFailure);
      },
      reportRenderTtfr(input: unknown) {
        mainRpc.reportRenderTtfr(input).catch(reportTelemetryFailure);
      },
      reportRenderStream(input: unknown) {
        mainRpc.reportRenderStream(input).catch(reportTelemetryFailure);
      },
      reportAgentsUnreachable(input: unknown) {
        mainRpc.reportAgentsUnreachable(input).catch(reportTelemetryFailure);
      },
      reportAccessBlocked(input: unknown) {
        mainRpc.reportAccessBlocked(input).catch(reportTelemetryFailure);
      },
      reportRecoveryAction(input: unknown) {
        mainRpc.reportRecoveryAction(input).catch(reportTelemetryFailure);
      },
      reportRebuildLifecycle(input: unknown) {
        mainRpc.reportRebuildLifecycle(input).catch(reportTelemetryFailure);
      },
      reportReconciliation(input: unknown) {
        mainRpc.reportReconciliation(input).catch(reportTelemetryFailure);
      },
      reportVncSession(input: unknown) {
        mainRpc.reportVncSession(input).catch(reportTelemetryFailure);
      },
      reportVncLiveness(input: unknown) {
        mainRpc.reportVncLiveness(input).catch(reportTelemetryFailure);
      },
      reportOpenComputer(input: unknown) {
        mainRpc.reportOpenComputer(input).catch(reportTelemetryFailure);
      },
      reportUpdatePrompt(input: unknown) {
        mainRpc.reportUpdatePrompt(input).catch(reportTelemetryFailure);
      },
      reportUsageWarning(input: unknown) {
        mainRpc.reportUsageWarning(input).catch(reportTelemetryFailure);
      },
      reportSidebarAction(input: unknown) {
        mainRpc.reportSidebarAction(input).catch(reportTelemetryFailure);
      },
      reportArtifactEngagement(input: unknown) {
        mainRpc.reportArtifactEngagement(input).catch(reportTelemetryFailure);
      },
      reportCloudAgentArtifact(input: unknown) {
        mainRpc.reportCloudAgentArtifact(input).catch(reportTelemetryFailure);
      },
      reportSigninGate(input: unknown) {
        mainRpc.reportSigninGate(input).catch(reportTelemetryFailure);
      },
      reportOnboardingStep(input: unknown) {
        mainRpc.reportOnboardingStep(input).catch(reportTelemetryFailure);
      },
      reportOnboardingCompleted(input: unknown) {
        mainRpc.reportOnboardingCompleted(input).catch(reportTelemetryFailure);
      },
      reportClientFailure(input: unknown) {
        mainRpc.reportClientFailure(input).catch(reportTelemetryFailure);
      },
      noteSentryConversation(input: unknown) {
        mainRpc.noteSentryConversation(input).catch(reportTelemetryFailure);
      },
    },
    timeZone: {
      async get() {
        return await mainRpc.getTimeZone();
      },
      async setOverride(
        timeZone: MainRequests["setTimeZoneOverride"]["timeZone"],
      ) {
        return await mainRpc.setTimeZoneOverride({ timeZone: timeZone });
      },
    },
    hardwareAcceleration: {
      async get() {
        return await mainRpc.getHardwareAcceleration();
      },
      async setEnabled(
        enabled: MainRequests["setHardwareAccelerationEnabled"]["enabled"],
      ) {
        return await mainRpc.setHardwareAccelerationEnabled({
          enabled: enabled,
        });
      },
      async relaunch() {
        await mainRpc.relaunchDesktop();
      },
    },
    spellCheck: {
      async get() {
        return await mainRpc.getSpellCheckEnabled();
      },
      async setEnabled(
        enabled: MainRequests["setSpellCheckEnabled"]["enabled"],
      ) {
        return await mainRpc.setSpellCheckEnabled({ enabled: enabled });
      },
    },
    notificationPreferences: {
      async get() {
        return await mainRpc.getDesktopNotificationPreferences();
      },
      async set(
        preferences: MainRequests["setDesktopNotificationPreferences"]["preferences"],
      ) {
        return await mainRpc.setDesktopNotificationPreferences({
          preferences: preferences,
        });
      },
    },
    autoReviewInstructions: {
      async get() {
        return await mainRpc.getAutoReviewInstructions();
      },
      async set(
        instructions: MainRequests["setAutoReviewInstructions"]["instructions"],
      ) {
        return await mainRpc.setAutoReviewInstructions({
          instructions: instructions,
        });
      },
    },
    teamPolicy: {
      async get() {
        return await mainRpc.getTeamMemberPolicy();
      },
      onChanged(listener: Listener) {
        return mainRpc.subscribe({ "team-member-policy-changed": listener });
      },
    },
    localToolPermission: {
      async get() {
        return await mainRpc.getLocalToolPermission();
      },
      async set(
        permission: MainRequests["setLocalToolPermission"]["permission"],
        secondary: unknown,
      ) {
        return await mainRpc.setLocalToolPermission({
          permission: permission,
          ...(secondary !== void 0 ? { machineId: secondary } : {}),
        });
      },
      async messagesAppIcon() {
        return await mainRpc.getMessagesAppIcon();
      },
      async recordApproval(
        approvalId: MainRequests["recordLocalToolApproval"]["approvalId"],
        action: MainRequests["recordLocalToolApproval"]["action"],
        target: MainRequests["recordLocalToolApproval"]["target"],
        context: unknown,
      ) {
        await mainRpc.recordLocalToolApproval({
          approvalId: approvalId,
          action: action,
          target: target,
          ...(context !== void 0 ? { machineId: context } : {}),
        });
      },
      async clearApprovals() {
        await mainRpc.clearLocalToolApprovals();
      },
      async recordStandingGrant(action: {
        action?: MainRequests["recordLocalToolStandingGrant"]["action"];
        recipient?: MainRequests["recordLocalToolStandingGrant"]["recipient"];
        machineId?: unknown;
      }) {
        return await mainRpc.recordLocalToolStandingGrant({
          action: action.action,
          recipient: action.recipient,
          ...(action.machineId !== void 0
            ? { machineId: action.machineId }
            : {}),
        });
      },
      async getActionGrant(
        action: MainRequests["getLocalToolActionGrant"]["action"],
      ) {
        return await mainRpc.getLocalToolActionGrant({ action: action });
      },
      async setActionGrant(
        action: MainRequests["setLocalToolActionGrant"]["action"],
        granted: MainRequests["setLocalToolActionGrant"]["granted"],
      ) {
        return await mainRpc.setLocalToolActionGrant({
          action: action,
          granted: granted,
        });
      },
    },
    theme: {
      initial: boot.theme,
      async get() {
        return await mainRpc.getThemeState();
      },
      async set(preference: MainRequests["setThemePreference"]["preference"]) {
        return await mainRpc.setThemePreference({ preference: preference });
      },
      onChanged(listener: Listener) {
        return mainRpc.subscribe({ "theme-changed": listener });
      },
    },
    botColorInChat: {
      initial: booleanOrNull(boot.isBotColorInChatEnabled),
      async get() {
        return booleanOrNull(await mainRpc.getBotColorInChatEnabled());
      },
      async set(enabled: MainRequests["setBotColorInChatEnabled"]["enabled"]) {
        return booleanOrNull(
          await mainRpc.setBotColorInChatEnabled({ enabled: enabled }),
        );
      },
    },
    language: {
      initial: boot.language,
      async get() {
        return await mainRpc.getLanguageState();
      },
      async set(
        preference: MainRequests["setLanguagePreference"]["preference"],
      ) {
        return await mainRpc.setLanguagePreference({ preference: preference });
      },
      onChanged(listener: Listener) {
        return mainRpc.subscribe({ "language-changed": listener });
      },
    },
    secrets: {
      async list() {
        return await mainRpc.listSecrets();
      },
    },
    scmConnections: {
      async disconnect(
        platform: MainRequests["disconnectScmConnection"]["platform"],
      ) {
        await mainRpc.disconnectScmConnection({ platform: platform });
      },
      async isSlackLinked() {
        return await mainRpc.isSlackLinked();
      },
      async slackLinkUrl() {
        return await mainRpc.getSlackLinkUrl();
      },
    },
    credentials: {
      async state() {
        return await mainRpc.getCredentialsState();
      },
      async sync() {
        await mainRpc.syncCredentialProvider();
      },
      onChanged(listener: Listener) {
        return mainRpc.subscribe({ "credentials-changed": listener });
      },
      async disconnect(
        connectionId: MainRequests["disconnectCredentialProvider"]["connectionId"],
      ) {
        await mainRpc.disconnectCredentialProvider({
          connectionId: connectionId,
        });
      },
      async approve(input: {
        entryId: string;
        agentId: string;
        credentialId: string;
        connectionId: string;
        catalogRevision: string;
        targetSite: string;
        harness: "box" | "temporal";
      }) {
        return await mainRpc.approveCredentialRequest(input);
      },
      async deny(input: {
        entryId: string;
        agentId: string;
        harness: "box" | "temporal";
      }) {
        return await mainRpc.denyCredentialRequest(input);
      },
      mint: {
        async detect() {
          return await mainRpc.detectCredentialMint();
        },
        async start(
          input:
            | {
                accountUuid: string;
                vaultName: string;
                accountUrl?: string;
                accountEmail?: string;
                connectionId?: string;
              }
            | {
                serviceAccountToken: string;
                connectionId?: string;
              },
        ) {
          return await mainRpc.startCredentialMint(input);
        },
      },
      oauth: {
        async connect(input: { connectionId?: string }) {
          return await mainRpc.connectCredentialProviderOAuth(input);
        },
        async cancel() {
          await mainRpc.cancelCredentialProviderOAuth();
        },
      },
    },
    agent: {
      initialRosterPhotoAccess: boot.rosterPhotos ?? null,
      async getPinnedAgents() {
        return await mainRpc.getHostPinnedAgents();
      },
      async setPinnedAgents(
        pinnedAgentIds: MainRequests["setHostPinnedAgents"]["pinnedAgentIds"],
      ) {
        return await mainRpc.setHostPinnedAgents({
          pinnedAgentIds: pinnedAgentIds,
        });
      },
      async getSidebarSections() {
        return await mainRpc.getHostSidebarSections();
      },
      async setSidebarSections(
        sections: MainRequests["setHostSidebarSections"]["sections"],
      ) {
        return await mainRpc.setHostSidebarSections({ sections: sections });
      },
      async readTranscriptStoreTail(input: unknown) {
        return await mainRpc.readTranscriptStoreTail(input);
      },
      async getPublicBotTemplate(
        shareId: MainRequests["getPublicBotTemplate"]["shareId"],
      ) {
        return await mainRpc.getPublicBotTemplate({ shareId: shareId });
      },
      async listPublicBotMarketplace() {
        return await mainRpc.listPublicBotMarketplace();
      },
      async getGrokBotSlackInstallState(
        agentId: MainRequests["getGrokBotSlackInstallState"]["agentId"],
      ) {
        return await mainRpc.getGrokBotSlackInstallState({ agentId: agentId });
      },
      async startGrokBotSlackConnect(
        agentId: MainRequests["startGrokBotSlackConnect"]["agentId"],
      ) {
        return await mainRpc.startGrokBotSlackConnect({ agentId: agentId });
      },
      async installGrokBotSlackApp(
        agentId: MainRequests["installGrokBotSlackApp"]["agentId"],
        slackTeamId: MainRequests["installGrokBotSlackApp"]["slackTeamId"],
        replaceExistingApp: MainRequests["installGrokBotSlackApp"]["replaceExistingApp"],
      ) {
        return await mainRpc.installGrokBotSlackApp({
          agentId: agentId,
          slackTeamId: slackTeamId,
          replaceExistingApp: replaceExistingApp,
        });
      },
      async reinstallGrokBotSlackApp(
        agentId: MainRequests["reinstallGrokBotSlackApp"]["agentId"],
        automatic: MainRequests["reinstallGrokBotSlackApp"]["automatic"],
      ) {
        return await mainRpc.reinstallGrokBotSlackApp({
          agentId: agentId,
          automatic: automatic,
        });
      },
      async uninstallGrokBotSlackApp(
        agentId: MainRequests["uninstallGrokBotSlackApp"]["agentId"],
        forgetIfUnreachable: MainRequests["uninstallGrokBotSlackApp"]["forgetIfUnreachable"],
      ) {
        return await mainRpc.uninstallGrokBotSlackApp({
          agentId: agentId,
          forgetIfUnreachable: forgetIfUnreachable,
        });
      },
      async listGrokBotTeamAgents() {
        return await mainRpc.listGrokBotTeamAgents();
      },
      async listGrokBotAgentSessions(
        agentId: MainRequests["listGrokBotAgentSessions"]["agentId"],
      ) {
        return await mainRpc.listGrokBotAgentSessions({ agentId: agentId });
      },
      async setGrokBotAgentVisibility(
        agentId: MainRequests["setGrokBotAgentVisibility"]["agentId"],
        visibility: MainRequests["setGrokBotAgentVisibility"]["visibility"],
      ) {
        return await mainRpc.setGrokBotAgentVisibility({
          agentId: agentId,
          visibility: visibility,
        });
      },
      async cloneGrokBotAgentToTeam(input: {
        agentId: string;
        offerEntryId: string;
      }) {
        return await mainRpc.cloneGrokBotAgentToTeam(input);
      },
      async setGrokBotAgentVoice(
        agentId: MainRequests["setGrokBotAgentVoice"]["agentId"],
        secondary: {
          voiceId?: unknown;
          voiceSpeed?: unknown;
          voiceLanguage?: unknown;
        },
      ) {
        await mainRpc.setGrokBotAgentVoice({
          agentId: agentId,
          ...(secondary.voiceId !== void 0
            ? { voiceId: secondary.voiceId }
            : {}),
          ...(secondary.voiceSpeed !== void 0
            ? { voiceSpeed: secondary.voiceSpeed }
            : {}),
          ...(secondary.voiceLanguage !== void 0
            ? { voiceLanguage: secondary.voiceLanguage }
            : {}),
        });
      },
      async updateGrokBotAgent(
        serverId: MainRequests["updateGrokBotAgent"]["serverId"],
        secondary: Record<string, unknown>,
      ) {
        return await mainRpc.updateGrokBotAgent({
          serverId: serverId,
          ...secondary,
        });
      },
      async listGrokBotAgentManagers(
        serverId: MainRequests["listGrokBotAgentManagers"]["serverId"],
      ) {
        return await mainRpc.listGrokBotAgentManagers({ serverId: serverId });
      },
      async addGrokBotAgentManager(
        serverId: MainRequests["addGrokBotAgentManager"]["serverId"],
        userId: MainRequests["addGrokBotAgentManager"]["userId"],
      ) {
        await mainRpc.addGrokBotAgentManager({
          serverId: serverId,
          userId: userId,
        });
      },
      async removeGrokBotAgentManager(
        serverId: MainRequests["removeGrokBotAgentManager"]["serverId"],
        userId: MainRequests["removeGrokBotAgentManager"]["userId"],
      ) {
        await mainRpc.removeGrokBotAgentManager({
          serverId: serverId,
          userId: userId,
        });
      },
      async publishGrokBotAgent(
        agentId: MainRequests["publishGrokBotAgent"]["agentId"],
      ) {
        return await mainRpc.publishGrokBotAgent({ agentId: agentId });
      },
      async unpublishGrokBotAgent(
        agentId: MainRequests["unpublishGrokBotAgent"]["agentId"],
      ) {
        return await mainRpc.unpublishGrokBotAgent({ agentId: agentId });
      },
      async setGrokBotAgentSidebarHidden(
        agentId: MainRequests["setGrokBotAgentSidebarHidden"]["agentId"],
        isHidden: MainRequests["setGrokBotAgentSidebarHidden"]["isHidden"],
      ) {
        await mainRpc.setGrokBotAgentSidebarHidden({
          agentId: agentId,
          isHidden: isHidden,
        });
      },
      async addGrokBotRoomPeople(
        agentId: MainRequests["addGrokBotRoomPeople"]["agentId"],
        userIds: MainRequests["addGrokBotRoomPeople"]["userIds"],
      ) {
        return await mainRpc.addGrokBotRoomPeople({
          agentId: agentId,
          userIds: userIds,
        });
      },
      async removeGrokBotRoomPeople(
        agentId: MainRequests["removeGrokBotRoomPeople"]["agentId"],
        userIds: MainRequests["removeGrokBotRoomPeople"]["userIds"],
      ) {
        return await mainRpc.removeGrokBotRoomPeople({
          agentId: agentId,
          userIds: userIds,
        });
      },
      async getGrokBotAgentPlugins(
        agentId: MainRequests["getGrokBotAgentPlugins"]["agentId"],
      ) {
        return await mainRpc.getGrokBotAgentPlugins({ agentId: agentId });
      },
      async setGrokBotAgentPlugins(
        agentId: MainRequests["setGrokBotAgentPlugins"]["agentId"],
        plugins: MainRequests["setGrokBotAgentPlugins"]["plugins"],
      ) {
        return await mainRpc.setGrokBotAgentPlugins({
          agentId: agentId,
          plugins: plugins,
        });
      },
      async setGrokBotAgentPluginVariables(
        agentId: MainRequests["setGrokBotAgentPluginVariables"]["agentId"],
        pluginId: MainRequests["setGrokBotAgentPluginVariables"]["pluginId"],
        variables: MainRequests["setGrokBotAgentPluginVariables"]["variables"],
      ) {
        return await mainRpc.setGrokBotAgentPluginVariables({
          agentId: agentId,
          pluginId: pluginId,
          variables: variables,
        });
      },
      async addGrokBotAgentSkill(
        agentId: MainRequests["addGrokBotAgentSkill"]["agentId"],
        content: {
          content?: MainRequests["addGrokBotAgentSkill"]["content"];
          name?: unknown;
          description?: unknown;
          files?: unknown;
        },
      ) {
        return await mainRpc.addGrokBotAgentSkill({
          agentId: agentId,
          ...(content.name !== void 0 ? { name: content.name } : {}),
          ...(content.description !== void 0
            ? { description: content.description }
            : {}),
          content: content.content,
          ...(content.files !== void 0 ? { files: content.files } : {}),
        });
      },
      async updateGrokBotAgentSkill(
        agentId: MainRequests["updateGrokBotAgentSkill"]["agentId"],
        name: {
          name?: MainRequests["updateGrokBotAgentSkill"]["name"];
          content?: MainRequests["updateGrokBotAgentSkill"]["content"];
          description?: unknown;
          files?: unknown;
        },
      ) {
        return await mainRpc.updateGrokBotAgentSkill({
          agentId: agentId,
          name: name.name,
          content: name.content,
          ...(name.description !== void 0
            ? { description: name.description }
            : {}),
          ...(name.files !== void 0 ? { files: name.files } : {}),
        });
      },
      async removeGrokBotAgentSkill(
        agentId: MainRequests["removeGrokBotAgentSkill"]["agentId"],
        name: MainRequests["removeGrokBotAgentSkill"]["name"],
      ) {
        return await mainRpc.removeGrokBotAgentSkill({
          agentId: agentId,
          name: name,
        });
      },
      async listGrokBotUserBotMemories(
        agentId: MainRequests["listGrokBotUserBotMemories"]["agentId"],
      ) {
        return await mainRpc.listGrokBotUserBotMemories({ agentId: agentId });
      },
      async promoteGrokBotMemoriesToTeam(
        agentId: MainRequests["promoteGrokBotMemoriesToTeam"]["agentId"],
        factIds: MainRequests["promoteGrokBotMemoriesToTeam"]["factIds"],
      ) {
        return await mainRpc.promoteGrokBotMemoriesToTeam({
          agentId: agentId,
          factIds: factIds,
        });
      },
      async listGrokBotSecrets(
        serverId: MainRequests["listGrokBotSecrets"]["serverId"],
      ) {
        return await mainRpc.listGrokBotSecrets({ serverId: serverId });
      },
      async putGrokBotSecret(
        serverId: MainRequests["putGrokBotSecret"]["serverId"],
        secondary: Record<string, unknown>,
      ) {
        return await mainRpc.putGrokBotSecret({
          serverId: serverId,
          ...secondary,
        });
      },
      async deleteGrokBotSecret(input: { serverId: string; name: string }) {
        await mainRpc.deleteGrokBotSecret(input);
      },
      async carryUserSecretsToGrokBot(input: {
        serverId: string;
        names: Array<string>;
      }) {
        return await mainRpc.carryUserSecretsToGrokBot(input);
      },
      clientPersistence: {
        async read(key: MainRequests["readClientPersistence"]["key"]) {
          return await mainRpc.readClientPersistence({ key: key });
        },
        async readMany(input: {
          include: Array<string>;
          exclude: Array<string>;
        }) {
          return await mainRpc.readManyClientPersistence(input);
        },
        async write(
          key: MainRequests["writeClientPersistence"]["key"],
          value: MainRequests["writeClientPersistence"]["value"],
        ) {
          await mainRpc.writeClientPersistence({ key: key, value: value });
        },
        async remove(key: MainRequests["removeClientPersistence"]["key"]) {
          await mainRpc.removeClientPersistence({ key: key });
        },
        async listKeys(
          prefix: MainRequests["listClientPersistenceKeys"]["prefix"],
        ) {
          return await mainRpc.listClientPersistenceKeys({ prefix: prefix });
        },
        async hasMigratedFromLocalStorage() {
          return await mainRpc.hasMigratedClientPersistence();
        },
        async migrateFromLocalStorage(
          entries: MainRequests["migrateClientPersistence"]["entries"],
        ) {
          return await mainRpc.migrateClientPersistence({ entries: entries });
        },
      },
    },
    update: {
      async getStatus() {
        return await mainRpc.getUpdateStatus();
      },
      async check() {
        return await mainRpc.checkForUpdates();
      },
      async setTrack(track: MainRequests["setUpdateTrack"]["track"]) {
        return await mainRpc.setUpdateTrack({ track: track });
      },
      async quitAndInstall(
        expectedVersion: MainRequests["quitAndInstallUpdate"]["expectedVersion"],
      ) {
        return await mainRpc.quitAndInstallUpdate({
          expectedVersion: expectedVersion,
        });
      },
      async setAutoUpdateWhenIdle(
        enabled: MainRequests["setAutoUpdateWhenIdle"]["enabled"],
      ) {
        return await mainRpc.setAutoUpdateWhenIdle({ enabled: enabled });
      },
      onStatusEvent(listener: Listener) {
        return mainRpc.subscribe({ "update-status": listener });
      },
    },
    ...(chromeCookies == null ? {} : { chromeCookies: chromeCookies }),
    ...(cookieOriginGrants == null
      ? {}
      : { cookieOriginGrants: cookieOriginGrants }),
    attachProdBox: attachProdBox,
  },
  coordinatorPort = coordinator.bridge;
export { desktop, coordinatorPort };
