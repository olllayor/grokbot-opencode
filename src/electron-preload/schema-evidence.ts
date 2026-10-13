/** Exact schema expressions and their variable initializers. These are inspection data, not executable validators. */
export const recoveredSchemaEvidence = {
  main: {
    openExternal: {
      authority: "shipped-expression",
      expression: "{ url: s() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    getCanvasShare: {
      authority: "shipped-expression",
      expression: "{ locator: _i }",
      bindings: {
        _i: 'I(\n    m({ kind: p("store"), storeId: s(), canvasId: s() }),\n    m({ kind: p("active-user-store"), canvasId: s() }),\n  )',
      },
      runtimeValidation: "not-reconstructed",
    },
    setCanvasVisibility: {
      authority: "shipped-expression",
      expression: "{ locator: _i, visibility: Kc }",
      bindings: {
        _i: 'I(\n    m({ kind: p("store"), storeId: s(), canvasId: s() }),\n    m({ kind: p("active-user-store"), canvasId: s() }),\n  )',
        Kc: 'I(p("private"), p("team-view"))',
      },
      runtimeValidation: "not-reconstructed",
    },
    getDocument: {
      authority: "shipped-expression",
      expression: "{ locator: Ne, groupChatId: c(g) }",
      bindings: {
        Ne: "m({ storeId: s(), documentId: s() })",
        g: 'f("non-empty string", (e) => typeof e == "string" && e.length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    getDocumentEditRight: {
      authority: "shipped-expression",
      expression: "{ locator: Ne }",
      bindings: {
        Ne: "m({ storeId: s(), documentId: s() })",
      },
      runtimeValidation: "not-reconstructed",
    },
    saveDocument: {
      authority: "shipped-expression",
      expression: "{ locator: Ne, source: s() }",
      bindings: {
        Ne: "m({ storeId: s(), documentId: s() })",
      },
      runtimeValidation: "not-reconstructed",
    },
    resolveLibraryPages: {
      authority: "shipped-expression",
      expression: "{ refs: R(Wc), includeDocuments: y() }",
      bindings: {
        Wc: 'I(\n    m({ kind: p("canvas"), storeId: g, canvasId: Ei }),\n    m({ kind: p("active-user-store-canvas"), canvasId: Ei }),\n    m({\n      kind: p("document"),\n      storeId: g,\n      documentId: f("document id", (e) => typeof e == "string" && Zt(e)),\n    }),\n  )',
        g: 'f("non-empty string", (e) => typeof e == "string" && e.length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
        Ei: 'te("canvas id (bare UUID)", (e) => {\n    if (typeof e != "string") return { success: !1 };\n    let n = hn(e);\n    return n.ok ? { success: !0, data: n.value } : { success: !1 };\n  })',
        n: "e.ports[0]",
      },
      runtimeValidation: "not-reconstructed",
    },
    listLibraryDocs: {
      authority: "shipped-expression",
      expression: "{ agentId: g }",
      bindings: {
        g: 'f("non-empty string", (e) => typeof e == "string" && e.length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    setDocumentVisibility: {
      authority: "shipped-expression",
      expression: "{ locator: Ne, visibility: jc }",
      bindings: {
        Ne: "m({ storeId: s(), documentId: s() })",
        jc: 'I(p("private"), p("team-view"))',
      },
      runtimeValidation: "not-reconstructed",
    },
    getDocumentAssets: {
      authority: "shipped-expression",
      expression:
        "{\n        locator: Ne,\n        names: R(s()),\n        groupChatId: c(g),\n      }",
      bindings: {
        Ne: "m({ storeId: s(), documentId: s() })",
        g: 'f("non-empty string", (e) => typeof e == "string" && e.length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    submitFeedback: {
      authority: "shipped-expression",
      expression: "Fc",
      bindings: {
        Fc: 'te("feedback report", (e) => {\n    let n = ar(e);\n    return n === null ? { success: !1 } : { success: !0, data: n };\n  })',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
        n: "e.ports[0]",
      },
      runtimeValidation: "not-reconstructed",
    },
    getWindowState: null,
    minimizeWindow: null,
    focusWindow: null,
    toggleMaximizeWindow: null,
    closeWindow: null,
    resizeWindowWidth: {
      authority: "shipped-expression",
      expression: "{ deltaWidth: P() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    setTitleBarOverlayTone: {
      authority: "shipped-expression",
      expression: "{ isOverlayTone: y() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    setViewingAgent: {
      authority: "shipped-expression",
      expression: "{ agentId: W(s()) }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    setComposingAgent: {
      authority: "shipped-expression",
      expression: "{ agentId: s(), composing: y() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    setComputerViewOpen: {
      authority: "shipped-expression",
      expression: "{ isOpen: y() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    getThemeState: null,
    setThemePreference: {
      authority: "shipped-expression",
      expression: '{ preference: f("theme preference", nr) }',
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    getBotColorInChatEnabled: null,
    setBotColorInChatEnabled: {
      authority: "shipped-expression",
      expression: "ye",
      bindings: {
        ye: "{ enabled: y() }",
      },
      runtimeValidation: "not-reconstructed",
    },
    getHardwareAcceleration: null,
    setHardwareAccelerationEnabled: {
      authority: "shipped-expression",
      expression: "ye",
      bindings: {
        ye: "{ enabled: y() }",
      },
      runtimeValidation: "not-reconstructed",
    },
    getSpellCheckEnabled: null,
    setSpellCheckEnabled: {
      authority: "shipped-expression",
      expression: "ye",
      bindings: {
        ye: "{ enabled: y() }",
      },
      runtimeValidation: "not-reconstructed",
    },
    getDesktopNotificationPreferences: null,
    setDesktopNotificationPreferences: {
      authority: "shipped-expression",
      expression:
        '{\n        preferences: f("notification-preferences", tr),\n      }',
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    relaunchDesktop: null,
    getLanguageState: null,
    setLanguagePreference: {
      authority: "shipped-expression",
      expression:
        '{\n        preference: f("language preference", ir),\n      }',
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    getEgressTunnelEnabled: null,
    setEgressTunnelEnabled: {
      authority: "shipped-expression",
      expression: "ye",
      bindings: {
        ye: "{ enabled: y() }",
      },
      runtimeValidation: "not-reconstructed",
    },
    getEgressTunnelStatus: null,
    claimEgressTunnel: null,
    getWebauthnProxyEnabled: null,
    setWebauthnProxyEnabled: {
      authority: "shipped-expression",
      expression: "ye",
      bindings: {
        ye: "{ enabled: y() }",
      },
      runtimeValidation: "not-reconstructed",
    },
    runNetworkDiagnostics: null,
    getUpdateStatus: null,
    checkForUpdates: null,
    setUpdateTrack: {
      authority: "shipped-expression",
      expression: '{ track: W(f("update track", Xo)) }',
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    quitAndInstallUpdate: {
      authority: "shipped-expression",
      expression: "{ expectedVersion: s() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    setAutoUpdateWhenIdle: {
      authority: "shipped-expression",
      expression: "ye",
      bindings: {
        ye: "{ enabled: y() }",
      },
      runtimeValidation: "not-reconstructed",
    },
    getBoxMigrationStatus: null,
    getBoxHostPhase: null,
    markDeepLinksReady: null,
    getOnboardingSeen: null,
    setOnboardingSeen: {
      authority: "shipped-expression",
      expression: "{ seen: y() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    getTimeZone: null,
    setTimeZoneOverride: {
      authority: "shipped-expression",
      expression: "{ timeZone: W(Dc) }",
      bindings: {
        Dc: 'f("IANA time zone", (e) => typeof e == "string" && he(e))',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    getAutoReviewInstructions: null,
    setAutoReviewInstructions: {
      authority: "shipped-expression",
      expression:
        "{\n        instructions: m({\n          isEnabled: y(),\n          allowInstructions: R(s()),\n          blockInstructions: R(s()),\n        }),\n      }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    getLocalToolPermission: null,
    getMessagesAppIcon: null,
    getTeamMemberPolicy: null,
    setLocalToolPermission: {
      authority: "shipped-expression",
      expression:
        '{\n        permission: f("local tool permission", ci),\n        machineId: c(u),\n      }',
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    recordLocalToolApproval: {
      authority: "shipped-expression",
      expression:
        '{\n        approvalId: g,\n        action: f("local tool action", Ie),\n        target: s(),\n        machineId: c(s()),\n      }',
      bindings: {
        g: 'f("non-empty string", (e) => typeof e == "string" && e.length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    clearLocalToolApprovals: null,
    recordLocalToolStandingGrant: {
      authority: "shipped-expression",
      expression:
        '{\n        action: f("local tool action", Ie),\n        recipient: g,\n        machineId: c(s()),\n      }',
      bindings: {
        g: 'f("non-empty string", (e) => typeof e == "string" && e.length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    getLocalToolActionGrant: {
      authority: "shipped-expression",
      expression: '{ action: f("local tool action", Ie) }',
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    setLocalToolActionGrant: {
      authority: "shipped-expression",
      expression:
        '{\n        action: f("local tool action", Ie),\n        granted: y(),\n      }',
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    pickAvatarSource: null,
    pickAvatarFile: null,
    generateAgentAvatarImage: {
      authority: "shipped-expression",
      expression: "{ description: s() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    resolveAttachmentMedia: {
      authority: "shipped-expression",
      expression:
        '{\n        source: s(),\n        inline: c(y()),\n        rendition: c(f("image rendition", sr)),\n        inRoom: c(y()),\n        preview: c(De()),\n      }',
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    readAttachmentText: {
      authority: "shipped-expression",
      expression: "{ path: s(), agentId: c(s()) }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    readAttachmentBytes: {
      authority: "shipped-expression",
      expression:
        "{\n        path: s(),\n        maxBytes: c(P()),\n        agentId: c(s()),\n      }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    stageAttachmentBytes: {
      authority: "shipped-expression",
      expression: "{ filename: s(), bytes: De() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    stageAttachmentPath: {
      authority: "shipped-expression",
      expression: "{ filename: s(), sourcePath: s() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    downloadAttachment: {
      authority: "shipped-expression",
      expression: "{ path: s(), suggestedName: c(s()) }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    commitStagedAttachments: {
      authority: "shipped-expression",
      expression:
        "{\n        agentId: g,\n        paths: R(s()),\n        filenames: R(s()),\n      }",
      bindings: {
        g: 'f("non-empty string", (e) => typeof e == "string" && e.length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    discardStagedAttachment: {
      authority: "shipped-expression",
      expression: "{ path: s() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    precaptionStagedAttachment: {
      authority: "shipped-expression",
      expression:
        "{\n        path: s(),\n        agentId: s(),\n        draftText: s(),\n        priorUserMessages: R(s()),\n      }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    forceRecreateComputer: null,
    updateComputer: {
      authority: "shipped-expression",
      expression:
        "{\n        id: s(),\n        requestId: g,\n        acknowledgeTerminalUpgradeSchedule: c(y()),\n      }",
      bindings: {
        g: 'f("non-empty string", (e) => typeof e == "string" && e.length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    getComputerUpgradeSchedule: null,
    scheduleComputerUpgrade: {
      authority: "shipped-expression",
      expression: "fi",
      bindings: {
        fi: 'f("computer upgrade schedule args (local time, IANA time zone)", Qt)',
      },
      runtimeValidation: "not-reconstructed",
    },
    rescheduleComputerUpgrade: {
      authority: "shipped-expression",
      expression: "fi",
      bindings: {
        fi: 'f("computer upgrade schedule args (local time, IANA time zone)", Qt)',
      },
      runtimeValidation: "not-reconstructed",
    },
    cancelComputerUpgrade: {
      authority: "shipped-expression",
      expression: 'f("computer upgrade cancellation args", er)',
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    forceReconnectGateway: null,
    getExperimentsSnapshot: null,
    exposeFeatureGate: {
      authority: "shipped-expression",
      expression: "{ name: s() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    peekUsageWarningAssignment: null,
    exposeUsageWarningExperiment: {
      authority: "shipped-expression",
      expression: "{ percentUsed: P() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    logComposerTriggerExperimentExposure: {
      authority: "shipped-expression",
      expression: '{ trigger: p("at") }',
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    logGroupChatDiscouragementExperimentExposure: null,
    logOnboardingJobRoleExperimentExposure: null,
    logOnboardingRoleUseCaseBotsExperimentExposure: null,
    applyFeatureFlagOverride: {
      authority: "shipped-expression",
      expression:
        '{\n        command: I(\n          m({ kind: p("set"), name: s(), value: y() }),\n          m({ kind: p("clear"), name: s() }),\n          m({ kind: p("clear-all") }),\n          m({ kind: p("set-all-bundled") }),\n        ),\n      }',
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    refreshFeatureFlags: null,
    applyExperimentOverride: {
      authority: "shipped-expression",
      expression:
        '{\n        command: I(\n          m({ kind: p("set"), experiment: s(), param: s(), value: wc }),\n          m({ kind: p("clear"), experiment: s(), param: s() }),\n          m({ kind: p("clear-experiment"), experiment: s() }),\n          m({ kind: p("clear-all") }),\n        ),\n      }',
      bindings: {
        wc: 'f("JSON value", Ee)',
      },
      runtimeValidation: "not-reconstructed",
    },
    startRpcTraceWindow: null,
    readTranscriptStoreTail: {
      authority: "shipped-expression",
      expression:
        'f("transcript store read args (agent id, positive limit, reason)", pi)',
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    getPublicBotTemplate: {
      authority: "shipped-expression",
      expression:
        '{\n        shareId: f("share id", (e) => typeof e == "string" && Jt.test(e)),\n      }',
      bindings: {
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
        Jt: "/^[A-Za-z0-9_-]{21}$/",
      },
      runtimeValidation: "not-reconstructed",
    },
    listPublicBotMarketplace: null,
    getGrokBotSlackInstallState: {
      authority: "shipped-expression",
      expression: "{ agentId: u }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    startGrokBotSlackConnect: {
      authority: "shipped-expression",
      expression: "{ agentId: u }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    installGrokBotSlackApp: {
      authority: "shipped-expression",
      expression:
        "{\n        agentId: u,\n        slackTeamId: W(u),\n        replaceExistingApp: c(y()),\n      }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    reinstallGrokBotSlackApp: {
      authority: "shipped-expression",
      expression: "{ agentId: u, automatic: y() }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    uninstallGrokBotSlackApp: {
      authority: "shipped-expression",
      expression:
        "{\n        agentId: u,\n        forgetIfUnreachable: c(y()),\n      }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    listGrokBotTeamAgents: null,
    listGrokBotAgentSessions: {
      authority: "shipped-expression",
      expression: "{ agentId: u }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    setGrokBotAgentVisibility: {
      authority: "shipped-expression",
      expression:
        '{\n        agentId: u,\n        visibility: En("Grok Bot agent visibility", ["owner", "team"]),\n      }',
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    cloneGrokBotAgentToTeam: {
      authority: "shipped-expression",
      expression: "{ agentId: u, offerEntryId: u }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    setGrokBotAgentVoice: {
      authority: "shipped-expression",
      expression:
        "{\n        agentId: u,\n        voiceId: c(W(s())),\n        voiceSpeed: c(P()),\n        voiceLanguage: c(s()),\n      }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    updateGrokBotAgent: {
      authority: "shipped-expression",
      expression:
        "{\n        serverId: u,\n        name: c(s()),\n        description: c(s()),\n        title: c(s()),\n        avatarShape: c(s()),\n        avatarColor: c(s()),\n        avatarPngBase64: c(W(s())),\n      }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    publishGrokBotAgent: {
      authority: "shipped-expression",
      expression: "{ agentId: u }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    unpublishGrokBotAgent: {
      authority: "shipped-expression",
      expression: "{ agentId: u }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    setGrokBotAgentSidebarHidden: {
      authority: "shipped-expression",
      expression: "{ agentId: u, isHidden: y() }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    addGrokBotRoomPeople: {
      authority: "shipped-expression",
      expression: "{ agentId: u, userIds: R(P()) }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    removeGrokBotRoomPeople: {
      authority: "shipped-expression",
      expression: "{ agentId: u, userIds: R(P()) }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    listGrokBotAgentManagers: {
      authority: "shipped-expression",
      expression: "{ serverId: u }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    addGrokBotAgentManager: {
      authority: "shipped-expression",
      expression: "{ serverId: u, userId: P() }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    removeGrokBotAgentManager: {
      authority: "shipped-expression",
      expression: "{ serverId: u, userId: P() }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    getGrokBotAgentPlugins: {
      authority: "shipped-expression",
      expression: "{ agentId: u }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    setGrokBotAgentPlugins: {
      authority: "shipped-expression",
      expression:
        '{\n        agentId: u,\n        plugins: R(\n          I(\n            m({ kind: p("plugin"), pluginId: u }),\n            m({ kind: p("config-update"), pluginId: u, mcpConfigJson: u }),\n            m({\n              kind: p("inline"),\n              name: u,\n              displayName: s(),\n              description: s(),\n              mcpConfigJson: u,\n            }),\n          ),\n        ),\n      }',
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    setGrokBotAgentPluginVariables: {
      authority: "shipped-expression",
      expression:
        "{\n        agentId: u,\n        pluginId: u,\n        variables: se(I(s(), P(), y())),\n      }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    addGrokBotAgentSkill: {
      authority: "shipped-expression",
      expression:
        "{\n        agentId: u,\n        name: c(s()),\n        description: c(s()),\n        content: u,\n        files: c(yi),\n      }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
        yi: "R(m({ path: u, content: s() }))",
      },
      runtimeValidation: "not-reconstructed",
    },
    updateGrokBotAgentSkill: {
      authority: "shipped-expression",
      expression:
        "{\n        agentId: u,\n        name: u,\n        description: c(s()),\n        content: u,\n        files: c(yi),\n      }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
        yi: "R(m({ path: u, content: s() }))",
      },
      runtimeValidation: "not-reconstructed",
    },
    removeGrokBotAgentSkill: {
      authority: "shipped-expression",
      expression: "{ agentId: u, name: u }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    listGrokBotUserBotMemories: {
      authority: "shipped-expression",
      expression: "{ agentId: u }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    promoteGrokBotMemoriesToTeam: {
      authority: "shipped-expression",
      expression: "{ agentId: u, factIds: R(u) }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    listGrokBotEmailInboxes: null,
    createGrokBotEmailInbox: {
      authority: "shipped-expression",
      expression: "{ username: s(), displayName: s() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    listGrokBotSecrets: {
      authority: "shipped-expression",
      expression: "{ serverId: u }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    putGrokBotSecret: {
      authority: "shipped-expression",
      expression:
        "{\n        serverId: u,\n        name: u,\n        description: s(),\n        value: g,\n      }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
        g: 'f("non-empty string", (e) => typeof e == "string" && e.length > 0)',
      },
      runtimeValidation: "not-reconstructed",
    },
    deleteGrokBotSecret: {
      authority: "shipped-expression",
      expression: "{ serverId: u, name: u }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    carryUserSecretsToGrokBot: {
      authority: "shipped-expression",
      expression: "{ serverId: u, names: R(u) }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    getHostPinnedAgents: null,
    setHostPinnedAgents: {
      authority: "shipped-expression",
      expression: "{ pinnedAgentIds: R(s()) }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    getHostSidebarSections: null,
    setHostSidebarSections: {
      authority: "shipped-expression",
      expression:
        "{\n        sections: R(m({ id: s(), name: s(), agentIds: R(s()) })),\n      }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    transcribeAudio: {
      authority: "shipped-expression",
      expression: "{ audio: Bc, mimeType: s(), language: c(s()) }",
      bindings: {
        Bc: 'te("non-empty audio bytes", (e) => {\n    let n = null;\n    return (\n      e instanceof Uint8Array\n        ? (n = e)\n        : e instanceof ArrayBuffer && (n = new Uint8Array(e)),\n      n == null || n.length === 0 ? { success: !1 } : { success: !0, data: n }\n    );\n  })',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
        n: "e.ports[0]",
      },
      runtimeValidation: "not-reconstructed",
    },
    synthesizeSpeech: {
      authority: "shipped-expression",
      expression: "{ text: Gc, voiceId: c(s()) }",
      bindings: {
        Gc: 'f(\n    `non-blank text of at most ${Tn} characters`,\n    (e) => typeof e == "string" && dr(e) === "ok",\n  )',
        Tn: "1500",
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    getCursorAuthStatus: null,
    loginCursor: null,
    getCursorLoginFlight: null,
    cancelCursorLoginFlight: null,
    logoutCursor: null,
    listCursorAccounts: null,
    addCursorAccount: null,
    switchCursorAccount: {
      authority: "shipped-expression",
      expression: "{ accountId: s() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    removeCursorAccount: {
      authority: "shipped-expression",
      expression: "{ accountId: s() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    updateCursorAccountName: {
      authority: "shipped-expression",
      expression: "{ name: s() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    getCursorAvatar: null,
    updateCursorProfilePhoto: {
      authority: "shipped-expression",
      expression: "{ photo: Vc }",
      bindings: {
        Vc: 'te("profile photo: PNG, JPEG, or WebP bytes of at most 2 MB", (e) => {\n    if (!l(e)) return { success: !1 };\n    let { contentType: n, bytes: o } = e;\n    return typeof n != "string" ||\n      !Rn(n) ||\n      !(o instanceof Uint8Array) ||\n      Yt({ contentType: n, byteLength: o.byteLength }) !== null\n      ? { success: !1 }\n      : { success: !0, data: { contentType: n, bytes: o } };\n  })',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
        n: "e.ports[0]",
        o: "null",
      },
      runtimeValidation: "not-reconstructed",
    },
    getSandMachines: null,
    updateSandMachineLabel: {
      authority: "shipped-expression",
      expression: "{ machineId: s(), label: s() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    startPasskeyEnrollment: null,
    verifyPasskeyEnrollmentCode: {
      authority: "shipped-expression",
      expression: "{ code: Mc }",
      bindings: {
        Mc: "f(`${6}-digit enrollment code`, $t)",
      },
      runtimeValidation: "not-reconstructed",
    },
    beginPasskeyRegistration: {
      authority: "shipped-expression",
      expression: "{ enrollmentTicket: u }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    listPasskeys: null,
    revokePasskey: {
      authority: "shipped-expression",
      expression: "{ credentialId: u }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    getCursorSelectedTeam: null,
    listCursorTeamMemberships: null,
    listCursorTeamMembers: {
      authority: "shipped-expression",
      expression: "{ teamId: P() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    ackCursorTeamFallback: {
      authority: "shipped-expression",
      expression:
        "{\n        notice: m({\n          fromTeamId: P(),\n          fromTeamName: W(s()),\n          toTeam: W(m({ id: P(), name: s() })),\n        }),\n      }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    getCursorWeeklyUsage: null,
    getCursorUsageSummary: null,
    getCursorEnterpriseUsage: {
      authority: "shipped-expression",
      expression: "{ teamId: P() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    getCursorUsageBreakdown: {
      authority: "shipped-expression",
      expression: "{ includeCredits: y() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    getCursorPrReviewPreferences: null,
    getCursorOriginPrStatus: {
      authority: "shipped-expression",
      expression: "{ prUrl: s() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    getCursorPrivacyModeEnabled: null,
    getSandAccess: null,
    getSandAccessFresh: null,
    getGrokBotTermsRecord: null,
    markGrokBotTermsSeen: null,
    clearGrokBotConnectorPreferences: null,
    mintVoiceCallCredential: null,
    mintXaiCommerceBearer: null,
    voiceCallHarnessSession: {
      authority: "shipped-expression",
      expression:
        "{\n        dial: Ai,\n        args: m({\n          agentId: s(),\n          agentName: s(),\n          userName: c(Hc),\n          description: c(s()),\n          spokenLanguage: c(s()),\n        }),\n      }",
      bindings: {
        Ai: 'I(\n    m({ kind: p("backend") }),\n    m({\n      kind: p("package"),\n      loop: I(p("box"), p("temporal")),\n      hasStaySilent: y(),\n      hasOverheard: y(),\n    }),\n  )',
        Hc: 'f(\n    "caller name: string, null, or absent",\n    (e) => e == null || typeof e == "string",\n  )',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    voiceCallHarnessTool: {
      authority: "shipped-expression",
      expression:
        "{\n        dial: Ai,\n        invocation: m({\n          agentId: s(),\n          callId: s(),\n          name: s(),\n          input: ln(),\n          line: m({\n            theyJustTalked: y(),\n            newsOwed: y(),\n            receiptOwed: y(),\n            alreadySpokeThisTurn: y(),\n          }),\n        }),\n      }",
      bindings: {
        Ai: 'I(\n    m({ kind: p("backend") }),\n    m({\n      kind: p("package"),\n      loop: I(p("box"), p("temporal")),\n      hasStaySilent: y(),\n      hasOverheard: y(),\n    }),\n  )',
      },
      runtimeValidation: "not-reconstructed",
    },
    invokeCursorDashboardAction: {
      authority: "shipped-expression",
      expression: "{ action: s(), args: se(s()) }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    cancelCursorSandTrial: null,
    prepareCursorScmConnect: {
      authority: "shipped-expression",
      expression:
        '{\n        provider: En("SCM connect provider", zt),\n        forceOauth: c(y()),\n      }',
      bindings: {
        zt: '["github", "gitlab", "bitbucket", "azure-devops"]',
      },
      runtimeValidation: "not-reconstructed",
    },
    completeCursorScmConnect: {
      authority: "shipped-expression",
      expression:
        "{\n        state: u,\n        code: c(s()),\n        installationId: c(s()),\n        setupAction: c(s()),\n        error: c(s()),\n      }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    getCursorGithubRepoAccess: {
      authority: "shipped-expression",
      expression: "{ repoSlug: u }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    runPasskeyCeremony: {
      authority: "shipped-expression",
      expression:
        "{\n        ceremonyId: u,\n        path: Lc,\n        token: u,\n        challengeId: c(u),\n      }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
        Lc: 'f(`relative path under ${Qe}`, (e) => typeof e == "string" && li(e))',
        Qe: '"/grok-bot/passkey/"',
      },
      runtimeValidation: "not-reconstructed",
    },
    cancelPasskeyCeremony: {
      authority: "shipped-expression",
      expression: "{ ceremonyId: u }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    setCursorSpendLimit: {
      authority: "shipped-expression",
      expression: 'f("spend limit update", Xt)',
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    reportAgentLoad: {
      authority: "shipped-expression",
      expression: "A(ca, la)",
      bindings: {
        la: "{\n    durationMs: !0,\n    openRpcMs: !0,\n    queueMs: !0,\n    renderMs: !0,\n    cold: !0,\n    stale: !0,\n    boxState: !0,\n    outcome: !0,\n  }",
      },
      runtimeValidation: "not-reconstructed",
    },
    reportAccessBlocked: {
      authority: "shipped-expression",
      expression: "A(pa, ua)",
      bindings: {
        ua: "{ edge: !0, cause: !0, accessReason: !0, msBlocked: !0 }",
      },
      runtimeValidation: "not-reconstructed",
    },
    reportAgentsUnreachable: {
      authority: "shipped-expression",
      expression: "A(Sa, ma)",
      bindings: {
        ma: "{\n    phase: !0,\n    isManual: !0,\n    errorClass: !0,\n    msSinceLastReachedMs: !0,\n    outcome: !0,\n    reason: !0,\n    durationMs: !0,\n    heldMs: !0,\n  }",
      },
      runtimeValidation: "not-reconstructed",
    },
    reportRecoveryAction: {
      authority: "shipped-expression",
      expression: "A(ga, ya)",
      bindings: {
        ya: "{ action: !0, failureClass: !0, consecutiveIdentical: !0 }",
      },
      runtimeValidation: "not-reconstructed",
    },
    reportRebuildLifecycle: {
      authority: "shipped-expression",
      expression: "A(_a, fa)",
      bindings: {
        fa: "(e) => vd[e.kind]",
      },
      runtimeValidation: "not-reconstructed",
    },
    reportReconciliation: {
      authority: "shipped-expression",
      expression: "A(Aa, Ea)",
      bindings: {
        Ea: "(e) => $d[e.kind]",
      },
      runtimeValidation: "not-reconstructed",
    },
    reportBoxVisibility: {
      authority: "shipped-expression",
      expression: "A(Ra, ha)",
      bindings: {
        ha: "{\n  event: !0,\n  phase: !0,\n  trigger: !0,\n  outcome: !0,\n  operationId: !0,\n  kind: !0,\n  surface: !0,\n  stage: !0,\n  migrationPhase: !0,\n  fromStage: !0,\n  stageElapsedMs: !0,\n}",
      },
      runtimeValidation: "not-reconstructed",
    },
    reportSendLatency: {
      authority: "shipped-expression",
      expression: "A(ba, Ta)",
      bindings: {
        Ta: "{\n  durationMs: !0,\n  commitMs: !0,\n  attachmentCount: !0,\n  isFork: !0,\n  traceId: !0,\n  spanId: !0,\n  conversationId: !0,\n}",
      },
      runtimeValidation: "not-reconstructed",
    },
    reportSendAck: {
      authority: "shipped-expression",
      expression: "A(ka, Ca)",
      bindings: {
        Ca: "{\n    ackMs: !0,\n    outcome: !0,\n    enterEpochMs: !0,\n    traceparent: !0,\n    traceId: !0,\n    spanId: !0,\n    clientNonce: !0,\n    conversationId: !0,\n    isFork: !0,\n    attachmentCount: !0,\n    commitOffsetMs: !0,\n    commitMs: !0,\n    clientOnlineAtTimeout: !0,\n    didReachDeadline: !0,\n  }",
      },
      runtimeValidation: "not-reconstructed",
    },
    reportTurnClientStart: {
      authority: "shipped-expression",
      expression: "A(Oa, Ia)",
      bindings: {
        Ia: "{\n  clientNonce: !0,\n  conversationId: !0,\n  enterEpochMs: !0,\n  isFork: !0,\n  attachmentCount: !0,\n  hasMessageText: !0,\n  traceId: !0,\n  spanId: !0,\n}",
      },
      runtimeValidation: "not-reconstructed",
    },
    reportTurnClientOutcome: {
      authority: "shipped-expression",
      expression: "A(xa, Na)",
      bindings: {
        Na: "{\n    outcome: !0,\n    errorType: !0,\n    errorCode: !0,\n    registryCode: !0,\n    errorDomain: !0,\n    errorRetryable: !0,\n    siteBlockFamily: !0,\n    siteBlockConfidence: !0,\n    userAction: !0,\n    settleBasis: !0,\n    reconnected: !0,\n    durationMs: !0,\n    clientNonce: !0,\n    conversationId: !0,\n    isFork: !0,\n    traceId: !0,\n    spanId: !0,\n  }",
      },
      runtimeValidation: "not-reconstructed",
    },
    reportReactionAck: {
      authority: "shipped-expression",
      expression: "A(wa, Pa)",
      bindings: {
        Pa: "{ ackMs: !0, outcome: !0, conversationId: !0, emoji: !0 }",
      },
      runtimeValidation: "not-reconstructed",
    },
    reportRenderTtfr: {
      authority: "shipped-expression",
      expression: "A(Ba, Ua)",
      bindings: {
        Ua: "{\n    ttfrMs: !0,\n    outcome: !0,\n    chunkType: !0,\n    enterEpochMs: !0,\n    traceparent: !0,\n    traceId: !0,\n    spanId: !0,\n    clientNonce: !0,\n    conversationId: !0,\n    isFork: !0,\n  }",
      },
      runtimeValidation: "not-reconstructed",
    },
    reportRenderStream: {
      authority: "shipped-expression",
      expression: "A(Ga, Va)",
      bindings: {
        Va: "{\n  outcome: !0,\n  chunkCount: !0,\n  maxGapMs: !0,\n  stalledMs: !0,\n  stallCount: !0,\n  streamMs: !0,\n  traceId: !0,\n  spanId: !0,\n  clientNonce: !0,\n  conversationId: !0,\n  isFork: !0,\n}",
      },
      runtimeValidation: "not-reconstructed",
    },
    reportVncSession: {
      authority: "shipped-expression",
      expression: "A(La, Da)",
      bindings: {
        Da: "{\n    surface: !0,\n    phase: !0,\n    vncHost: !0,\n    display: !0,\n    durationMs: !0,\n    sinceOpenMs: !0,\n    failCode: !0,\n    clean: !0,\n    focusOwner: !0,\n    focusLanded: !0,\n  }",
      },
      runtimeValidation: "not-reconstructed",
    },
    reportVncLiveness: {
      authority: "shipped-expression",
      expression: "A(Si, mi)",
      bindings: {
        mi: "{\n  phase: !0,\n  stallMs: !0,\n  keys: !0,\n  clicks: !0,\n  moves: !0,\n  inBytes: !0,\n}",
      },
      runtimeValidation: "not-reconstructed",
    },
    reportOpenComputer: {
      authority: "shipped-expression",
      expression: "A(va, Ma)",
      bindings: {
        Ma: "{ trigger: !0, hadVncUrl: !0, monitorFocused: !0 }",
      },
      runtimeValidation: "not-reconstructed",
    },
    reportUpdatePrompt: {
      authority: "shipped-expression",
      expression: "A(Ha, Fa)",
      bindings: {
        Fa: "{ surface: !0, action: !0, kind: !0, targetVersion: !0 }",
      },
      runtimeValidation: "not-reconstructed",
    },
    reportUsageWarning: {
      authority: "shipped-expression",
      expression: "A(ja, Ka)",
      bindings: {
        Ka: "{ action: !0, thresholdPercent: !0, policy: !0 }",
      },
      runtimeValidation: "not-reconstructed",
    },
    reportSidebarAction: {
      authority: "shipped-expression",
      expression: "A(za, Xa)",
      bindings: {
        Xa: "{ action: !0, entrypoint: !0 }",
      },
      runtimeValidation: "not-reconstructed",
    },
    reportArtifactEngagement: {
      authority: "shipped-expression",
      expression: "A(qa, $a)",
      bindings: {
        $a: "(e) => Rl[e.action]",
      },
      runtimeValidation: "not-reconstructed",
    },
    reportCloudAgentArtifact: {
      authority: "shipped-expression",
      expression: "A(Ya, Wa)",
      bindings: {
        Wa: "{ stage: !0, agentId: !0, bcId: !0, kind: !0 }",
      },
      runtimeValidation: "not-reconstructed",
    },
    reportSigninGate: {
      authority: "shipped-expression",
      expression: "A(Qa, Za)",
      bindings: {
        Za: "(e) => Ol[Ja(e)]",
      },
      runtimeValidation: "not-reconstructed",
    },
    reportOnboardingStep: {
      authority: "shipped-expression",
      expression: "A(ni, ei)",
      bindings: {
        ei: "{ step: !0, stepIndex: !0, direction: !0 }",
      },
      runtimeValidation: "not-reconstructed",
    },
    reportOnboardingCompleted: {
      authority: "shipped-expression",
      expression: "A(ri, ti)",
      bindings: {
        ti: "{ role: !0, tools: !0 }",
      },
      runtimeValidation: "not-reconstructed",
    },
    reportClientFailure: {
      authority: "shipped-expression",
      expression: "A(ii, ai)",
      bindings: {
        ai: "(e) => bc[e.kind]",
      },
      runtimeValidation: "not-reconstructed",
    },
    reportHeapMetrics: {
      authority: "shipped-expression",
      expression: "Vt",
      bindings: {
        Vt: 'te("heap metrics report", (e) => {\n  let n = Mt(e);\n  return n === null ? { success: !1 } : { success: !0, data: n };\n})',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
        n: "e.ports[0]",
      },
      runtimeValidation: "not-reconstructed",
    },
    noteSentryConversation: {
      authority: "shipped-expression",
      expression: "A(di, si)",
      bindings: {
        si: "{ agentId: !0 }",
      },
      runtimeValidation: "not-reconstructed",
    },
    openCloudAgent: {
      authority: "shipped-expression",
      expression:
        '{\n        bcId: Ue,\n        target: c(I(p("default"), p("web"))),\n      }',
      bindings: {
        Ue: 'te("non-empty string", (e) => {\n    if (typeof e != "string") return { success: !1 };\n    let n = e.trim();\n    return n.length > 0 ? { success: !0, data: n } : { success: !1 };\n  })',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
        n: "e.ports[0]",
      },
      runtimeValidation: "not-reconstructed",
    },
    getLinkMetadata: {
      authority: "shipped-expression",
      expression:
        '{\n        url: s(),\n        image: c(I(p("card"), p("source"))),\n      }',
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    stageMcpAppDocument: {
      authority: "shipped-expression",
      expression: "{ html: s(), csp: c(vc) }",
      bindings: {
        vc: "m({\n    connectDomains: en,\n    resourceDomains: en,\n    frameDomains: en,\n    baseUriDomains: en,\n  })",
        en: "c(R(s()))",
      },
      runtimeValidation: "not-reconstructed",
    },
    listSecrets: null,
    readClientPersistence: {
      authority: "shipped-expression",
      expression: "{ key: s() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    readManyClientPersistence: {
      authority: "shipped-expression",
      expression: "{ include: R(s()), exclude: R(s()) }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    writeClientPersistence: {
      authority: "shipped-expression",
      expression: "{ key: s(), value: s() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    removeClientPersistence: {
      authority: "shipped-expression",
      expression: "{ key: s() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    listClientPersistenceKeys: {
      authority: "shipped-expression",
      expression: "{ prefix: s() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    hasMigratedClientPersistence: null,
    migrateClientPersistence: {
      authority: "shipped-expression",
      expression:
        "{\n        entries: R(m({ key: s(), value: s() })),\n      }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    getCredentialsState: null,
    syncCredentialProvider: null,
    disconnectCredentialProvider: {
      authority: "shipped-expression",
      expression: "{ connectionId: g }",
      bindings: {
        g: 'f("non-empty string", (e) => typeof e == "string" && e.length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    disconnectScmConnection: {
      authority: "shipped-expression",
      expression: "{ platform: g }",
      bindings: {
        g: 'f("non-empty string", (e) => typeof e == "string" && e.length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    isSlackLinked: null,
    getSlackLinkUrl: null,
    approveCredentialRequest: {
      authority: "shipped-expression",
      expression:
        "{\n        entryId: g,\n        agentId: g,\n        credentialId: g,\n        connectionId: g,\n        catalogRevision: g,\n        targetSite: g,\n        harness: gi,\n      }",
      bindings: {
        g: 'f("non-empty string", (e) => typeof e == "string" && e.length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
        gi: 'c(I(p("box"), p("temporal")))',
      },
      runtimeValidation: "not-reconstructed",
    },
    denyCredentialRequest: {
      authority: "shipped-expression",
      expression: "{ entryId: g, agentId: g, harness: gi }",
      bindings: {
        g: 'f("non-empty string", (e) => typeof e == "string" && e.length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
        gi: 'c(I(p("box"), p("temporal")))',
      },
      runtimeValidation: "not-reconstructed",
    },
    detectCredentialMint: null,
    startCredentialMint: {
      authority: "shipped-expression",
      expression: "Uc",
      bindings: {
        Uc: "I(\n    m({\n      accountUuid: g,\n      vaultName: g,\n      accountUrl: c(s()),\n      accountEmail: c(s()),\n      connectionId: c(g),\n    }),\n    m({ serviceAccountToken: g, connectionId: c(g) }),\n  )",
        g: 'f("non-empty string", (e) => typeof e == "string" && e.length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    connectCredentialProviderOAuth: {
      authority: "shipped-expression",
      expression: "{ connectionId: c(g) }",
      bindings: {
        g: 'f("non-empty string", (e) => typeof e == "string" && e.length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    cancelCredentialProviderOAuth: null,
    getMcpState: null,
    getGrokBotAgentMcpServers: {
      authority: "shipped-expression",
      expression: "{ agentId: s() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    getEffectivePlugins: null,
    getMcpCatalog: null,
    refreshMcpCatalog: null,
    getMcpTeamPopularity: null,
    getMcpPluginLogo: {
      authority: "shipped-expression",
      expression: "{ url: s() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    installEntry: {
      authority: "shipped-expression",
      expression:
        "{\n        entryId: s(),\n        values: c(se(I(s(), P(), y()))),\n        hasTeamConfiguredVariables: c(y()),\n      }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    updatePluginInstall: {
      authority: "shipped-expression",
      expression:
        "{\n        pluginId: s(),\n        values: se(I(s(), P(), y())),\n      }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    removeMcpServer: {
      authority: "shipped-expression",
      expression: "{ serverId: s() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    uninstallPlugin: {
      authority: "shipped-expression",
      expression: "{ pluginId: s() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    reconcileUnpublishedPlugin: {
      authority: "shipped-expression",
      expression: "{ pluginId: s() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    authenticateMcpServer: {
      authority: "shipped-expression",
      expression:
        '{\n        serverId: s(),\n        accountKey: c(s()),\n        trigger: c(p("connector_card")),\n        forceReauth: c(y()),\n        grokBotAgentId: c(s()),\n      }',
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    renameMcpAccount: {
      authority: "shipped-expression",
      expression:
        "{\n        serverId: s(),\n        accountKey: s(),\n        newAccountKey: s(),\n      }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    removeMcpAccount: {
      authority: "shipped-expression",
      expression: "{ serverId: s(), accountKey: s() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    setMcpCustomInstructions: {
      authority: "shipped-expression",
      expression: "{ serverId: s(), instructions: s() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    listMcpServerTools: {
      authority: "shipped-expression",
      expression:
        '{\n        serverId: s(),\n        demand: c(p("background")),\n      }',
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    toggleMcpToolDisabled: {
      authority: "shipped-expression",
      expression: "{ serverId: s(), toolName: s() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    getFinanceOverview: null,
    deleteFinanceConnection: {
      authority: "shipped-expression",
      expression: "{ connectionId: s() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    startFinanceLink: {
      authority: "shipped-expression",
      expression: "{ repairLinkedBank: c(y()) }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    attachProdBoxStatus: null,
    setAttachProdBoxEnabled: {
      authority: "shipped-expression",
      expression:
        "{\n        enabled: y(),\n        isRestartMainApp: c(y()),\n      }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    checkMessagesPermissions: {
      authority: "shipped-expression",
      expression:
        '{\n        prompt: c(I(p("automation"), p("fullDiskAccess"), p("contacts"))),\n      }',
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    getCurrentMachineMessagesEnabled: null,
    updateCurrentMachineMessagesEnabled: {
      authority: "shipped-expression",
      expression: "{ messagesEnabled: y() }",
      bindings: {},
      runtimeValidation: "not-reconstructed",
    },
    listMessagesAllowedRecipients: null,
    revokeMessagesAllowedRecipient: {
      authority: "shipped-expression",
      expression: "{ recipient: g }",
      bindings: {
        g: 'f("non-empty string", (e) => typeof e == "string" && e.length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    listChromeCookieAllowItems: null,
    importChromeCookies: {
      authority: "shipped-expression",
      expression:
        "{\n        cookies: R(m({ profileId: g, domain: g, name: g, path: g })),\n      }",
      bindings: {
        g: 'f("non-empty string", (e) => typeof e == "string" && e.length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    listCookieOriginGrants: null,
    putCookieOriginGrants: {
      authority: "shipped-expression",
      expression:
        "{\n        grants: R(m({ profileId: u, origin: u })),\n      }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    listMeetings: null,
    meetingCensus: null,
    leaveMeeting: {
      authority: "shipped-expression",
      expression:
        '{\n        meetingId: g,\n        host: I(p("desktop"), p("server")),\n      }',
      bindings: {
        g: 'f("non-empty string", (e) => typeof e == "string" && e.length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
  },
  "desktop-mount": {
    mount: {
      authority: "shipped-expression",
      expression: "{ agentId: u, name: u, markSvgDataUrl: ms }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
        ms: 'f("svg data url", pn)',
      },
      runtimeValidation: "not-reconstructed",
    },
    unmount: null,
    offerChoices: {
      authority: "shipped-expression",
      expression: "{ choices: Ss }",
      bindings: {
        Ss: "f(`at most ${mn} mount targets`, Pt)",
        mn: "64",
      },
      runtimeValidation: "not-reconstructed",
    },
    read: null,
    readChoices: null,
    submitPrompt: {
      authority: "shipped-expression",
      expression: "{ prompt: Ue }",
      bindings: {
        Ue: 'te("non-empty string", (e) => {\n    if (typeof e != "string") return { success: !1 };\n    let n = e.trim();\n    return n.length > 0 ? { success: !0, data: n } : { success: !1 };\n  })',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
        n: "e.ports[0]",
      },
      runtimeValidation: "not-reconstructed",
    },
    switchTo: {
      authority: "shipped-expression",
      expression: "{ agentId: u }",
      bindings: {
        u: 'f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0)',
        e: "process.env.SAND_BACKEND_URL ?? process.env.CURSOR_API_BASE_URL",
      },
      runtimeValidation: "not-reconstructed",
    },
    reachForMenu: {
      authority: "shipped-expression",
      expression: "{ heightPx: ys }",
      bindings: {
        ys: "f(`integer from 0 to ${Sn}`, wt)",
        Sn: "640",
      },
      runtimeValidation: "not-reconstructed",
    },
    movePanel: {
      authority: "shipped-expression",
      expression: "{ dx: Gt, dy: Gt }",
      bindings: {
        Gt: "f(`integer from -${ve} to ${ve}`, Dt)",
        ve: "16384",
      },
      runtimeValidation: "not-reconstructed",
    },
    endPanelMove: null,
  },
} as const;
