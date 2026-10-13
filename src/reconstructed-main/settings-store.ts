import type {Settings,SettingsIO,SettingsOwner,SettingsDependencies,DesktopNotificationPreferences,ComputerUseModel,ReleaseTrack,NotificationConfig,AutoReviewInstructions,LocalToolPermission,SidebarSection} from './settings-contracts.js';
import {onboardingForAccount,withoutOnboarding,stableJSON,parseJSON} from './settings-policy.js';
/** Dm durable settings semantics reconstructed from the shipped class, with explicit typed closure dependencies. */
export function createSettingsStoreClass(deps:SettingsDependencies){
return class DesktopSettings {
  settingsPath:string;
  io:SettingsIO;
  unreadable = false;
  writesOverUnreadable = false;
  refusedWriteLog:(message:string)=>void;
  refusalsLogged = new Set<string>();
  owner:SettingsOwner|undefined;
  constructor(t:string, n:SettingsIO = deps.createIO(t), r:(message:string)=>void = () => {}, o?:SettingsOwner) {
    this.settingsPath = t, this.io = n, this.refusedWriteLog = r, this.owner = o;
  }
  reportUnreadable(t:unknown,n:unknown) {
    if (this.owner === void 0) return;
    let r = deps.unsupportedVersion(n);
    r !== void 0 ? this.owner.onUnsupportedVersion({
      path: this.settingsPath,
      version: r
    }) : this.owner.onDamage({
      path: this.settingsPath,
      cause: t,
      copyPath: null
    });
  }
  logRefusalOnce(t:string) {
    this.refusalsLogged.has(t) || (this.refusalsLogged.add(t), this.refusedWriteLog(`settings write refused: ${t} (SandSettingsUnreadableError)`));
  }
  refusal() {
    return new deps.unreadableError(t => this.logRefusalOnce(t));
  }
  readText() {
    try {
      return this.io.readText();
    } catch (t) {
      throw deps.isMissingFile(t) || this.owner?.onDamage({
        path: this.settingsPath,
        cause: t,
        copyPath: null
      }), t;
    }
  }
  load():Settings {
    this.unreadable = !1;
    let t = this.readText();
    if (t === void 0) return this.refusalsLogged.clear(), deps.defaultSettings();
    let n:unknown, r:unknown;
    try {
      n = JSON.parse(t);
      let o = deps.schema.safeParse(n);
      if (o.success) {
        let a:Settings = {
          version: 1,
          mcpBoxServers: [...new Set(o.data.mcpBoxServers)],
          ...(o.data.hasSeenOnboarding !== void 0 ? {
            hasSeenOnboarding: o.data.hasSeenOnboarding
          } : {}),
          ...(o.data.hasSeenOnboardingAccountScope !== void 0 ? {
            hasSeenOnboardingAccountScope: o.data.hasSeenOnboardingAccountScope
          } : {}),
          ...(o.data.selectedTeam !== void 0 ? {
            selectedTeam: o.data.selectedTeam
          } : {}),
          autoUpdateWhenIdle: o.data.autoUpdateWhenIdle,
          egressTunnelEnabled: o.data.egressTunnelEnabled,
          ...(o.data.egressTunnelPreference !== void 0 ? {
            egressTunnelPreference: o.data.egressTunnelPreference
          } : {}),
          webauthnProxyEnabled: o.data.webauthnProxyEnabled,
          botColorInChatEnabled: o.data.botColorInChatEnabled,
          ...(o.data.botColorInChatPreference !== void 0 ? {
            botColorInChatPreference: o.data.botColorInChatPreference
          } : {}),
          messagesEnabled: o.data.messagesEnabled,
          meetingsEnabled: o.data.meetingsEnabled,
          ...(o.data.hardwareAccelerationEnabled !== void 0 ? {
            hardwareAccelerationEnabled: o.data.hardwareAccelerationEnabled
          } : {}),
          ...(o.data.isSpellCheckEnabled !== void 0 ? {
            isSpellCheckEnabled: o.data.isSpellCheckEnabled
          } : {}),
          ...deps.accountSettings(o.data),
          mcpCustomInstructions: deps.normalizeInstructions(o.data.mcpCustomInstructions),
          mcpCustomInstructionsByServerId: deps.normalizeServerInstructions(o.data.mcpCustomInstructionsByServerId),
          mcpDisabledToolsByServerId: deps.normalizeDisabledTools(o.data.mcpDisabledToolsByServerId),
          ...(o.data.activeAccountScope !== void 0 ? {
            activeAccountScope: o.data.activeAccountScope
          } : {}),
          ...(o.data.updateTrackOverride !== void 0 ? {
            updateTrackOverride: o.data.updateTrackOverride
          } : {}),
          ...(o.data.themePreference !== void 0 ? {
            themePreference: o.data.themePreference
          } : {}),
          ...(o.data.languagePreference !== void 0 ? {
            languagePreference: o.data.languagePreference
          } : {}),
          ...(o.data.notifications !== void 0 ? {
            notifications: o.data.notifications
          } : {}),
          ...(o.data.desktopNotificationPreferences !== void 0 ? {
            desktopNotificationPreferences: o.data.desktopNotificationPreferences
          } : {}),
          ...(o.data.userTimeZone !== void 0 ? {
            userTimeZone: o.data.userTimeZone
          } : {}),
          ...(o.data.userTimeZoneOverride !== void 0 ? {
            userTimeZoneOverride: o.data.userTimeZoneOverride
          } : {}),
          ...(o.data.autoReviewInstructions !== void 0 ? {
            autoReviewInstructions: (() => {
              let i = deps.normalizeReview(o.data.autoReviewInstructions);
              return {
                isEnabled: i.isEnabled,
                allowInstructions: [...i.allowInstructions],
                blockInstructions: [...i.blockInstructions]
              };
            })()
          } : {}),
          ...(o.data.pinnedAgentIds !== void 0 ? {
            pinnedAgentIds: [...new Set(o.data.pinnedAgentIds)]
          } : {}),
          ...(o.data.localToolPermissionByMachineId !== void 0 ? {
            localToolPermissionByMachineId: o.data.localToolPermissionByMachineId
          } : {}),
          ...(o.data.sidebarSections !== void 0 ? {
            sidebarSections: DesktopSettings.storable({
              sections: o.data.sidebarSections
            })
          } : {}),
          accountScopes: o.data.accountScopes
        };
        return this.refusalsLogged.clear(), a;
      }
      r = o.error;
    } catch (o) {
      r = o;
    }
    return this.unreadable = !0, this.reportUnreadable(r, n), deps.defaultSettings();
  }
  loadForWrite() {
    let t = this.load();
    if (!this.unreadable) return t;
    if (!this.writesOverUnreadable) throw this.refusal();
    try {
      this.io.keepDamagedCopy?.();
    } catch (n) {
      this.refusedWriteLog(`settings file damaged; bytes not kept (${deps.errorMessage(n)})`);
    }
    return t;
  }
  overwritingUnreadable(t:boolean,n:()=>void) {
    if (!t) {
      n();
      return;
    }
    this.writesOverUnreadable = !0;
    try {
      n();
    } finally {
      this.writesOverUnreadable = !1;
    }
  }
  assertWritable() {
    this.loadForWrite();
  }
  persist(t:Settings) {
    let n = this.readText();
    if (!this.writesOverUnreadable && !this.canOverwrite(n)) throw this.refusal();
    let r = JSON.stringify(stableJSON(t), null, 2);
    if (r !== n) try {
      this.io.writeText(r);
    } catch (o) {
      throw this.owner?.onWriteFailed(this.settingsPath, o), o;
    }
  }
  canOverwrite(t:string|undefined) {
    return t === void 0 ? !0 : deps.schema.safeParse(parseJSON(t)).success;
  }
  getHasSeenOnboarding() {
    return this.load().hasSeenOnboarding;
  }
  getHasSeenOnboardingAccountScope() {
    return this.load().hasSeenOnboardingAccountScope;
  }
  setHasSeenOnboarding(t:boolean) {
    let {
      hasSeenOnboardingAccountScope: n,
      ...r
    } = this.loadForWrite();
    this.persist({
      ...r,
      hasSeenOnboarding: t,
      ...(r.activeAccountScope !== void 0 ? {
        hasSeenOnboardingAccountScope: r.activeAccountScope
      } : {})
    });
  }
  clearHasSeenOnboarding() {
    let t = this.loadForWrite();
    if (t.hasSeenOnboarding === void 0 && t.hasSeenOnboardingAccountScope === void 0) return;
    let {
      hasSeenOnboarding: n,
      hasSeenOnboardingAccountScope: r,
      ...o
    } = t;
    this.persist(o);
  }
  getSelectedTeam() {
    return this.load().selectedTeam;
  }
  setSelectedTeam(t:Settings["selectedTeam"]) {
    let {
      selectedTeam: n,
      ...r
    } = this.loadForWrite();
    this.persist({
      ...r,
      ...(t !== void 0 ? {
        selectedTeam: t
      } : {})
    });
  }
  getAutoUpdateWhenIdle() {
    return this.load().autoUpdateWhenIdle;
  }
  setAutoUpdateWhenIdle(t:boolean) {
    this.persist({
      ...this.loadForWrite(),
      autoUpdateWhenIdle: t
    });
  }
  getThemePreference() {
    return this.load().themePreference ?? deps.defaultTheme;
  }
  setThemePreference(t:Settings["themePreference"]) {
    this.persist({
      ...this.loadForWrite(),
      themePreference: t
    });
  }
  getLanguagePreference() {
    return this.load().languagePreference ?? deps.defaultLanguage;
  }
  setLanguagePreference(t:string) {
    this.persist({
      ...this.loadForWrite(),
      languagePreference: t
    });
  }
  getEgressTunnelEnabled() {
    return this.load().egressTunnelEnabled;
  }
  getEgressTunnelPreference() {
    let {
      egressTunnelPreference: t,
      egressTunnelEnabled: n
    } = this.load();
    return t ?? (n ? !0 : void 0);
  }
  setEgressTunnelEnabled(t:boolean) {
    this.overwritingUnreadable(!t, () => this.persist({
      ...this.loadForWrite(),
      egressTunnelEnabled: t,
      egressTunnelPreference: t
    }));
  }
  getWebauthnProxyEnabled() {
    return this.load().webauthnProxyEnabled;
  }
  setWebauthnProxyEnabled(t:boolean) {
    this.overwritingUnreadable(!t, () => this.persist({
      ...this.loadForWrite(),
      webauthnProxyEnabled: t
    }));
  }
  getBotColorInChatEnabled() {
    let {
      botColorInChatPreference: t,
      botColorInChatEnabled: n
    } = this.load();
    return t ?? (n ? !0 : null);
  }
  setBotColorInChatEnabled(t:boolean) {
    this.persist({
      ...this.loadForWrite(),
      botColorInChatEnabled: t,
      botColorInChatPreference: t
    });
  }
  getMessagesEnabled() {
    return this.load().messagesEnabled;
  }
  setMessagesEnabled(t:boolean) {
    this.overwritingUnreadable(!t, () => this.persist({
      ...this.loadForWrite(),
      messagesEnabled: t
    }));
  }
  getMeetingsEnabled() {
    return this.load().meetingsEnabled;
  }
  setMeetingsEnabled(t:boolean) {
    this.loadForWrite().meetingsEnabled !== t && this.persist({
      ...this.loadForWrite(),
      meetingsEnabled: t
    });
  }
  getHardwareAccelerationEnabled() {
    return this.load().hardwareAccelerationEnabled;
  }
  setHardwareAccelerationEnabled(t:boolean) {
    this.persist({
      ...this.loadForWrite(),
      hardwareAccelerationEnabled: t
    });
  }
  getSpellCheckEnabled() {
    return this.load().isSpellCheckEnabled ?? deps.defaultSpellCheck;
  }
  setSpellCheckEnabled(t:boolean) {
    this.persist({
      ...this.loadForWrite(),
      isSpellCheckEnabled: t
    });
  }
  getDesktopNotificationPreferences() {
    return this.load().desktopNotificationPreferences ?? deps.defaultNotificationPreferences;
  }
  setDesktopNotificationPreferences(t:DesktopNotificationPreferences) {
    this.persist({
      ...this.loadForWrite(),
      desktopNotificationPreferences: t
    });
  }
  getComputerUseModel() {
    return this.load().computerUseModel;
  }
  setComputerUseModel(t:ComputerUseModel|undefined) {
    let {
      computerUseModel: n,
      ...r
    } = this.loadForWrite();
    this.persist(t === void 0 ? r : {
      ...r,
      computerUseModel: {
        modelId: t.modelId,
        maxMode: t.maxMode,
        parameters: t.parameters.map(o => ({
          id: o.id,
          value: o.value
        }))
      }
    });
  }
  getUpdateTrackOverride() {
    let t = this.load().updateTrackOverride ?? null;
    if (t == null) return null;
    let n = deps.normalizeTrack(t);
    if (n !== t) try {
      this.setUpdateTrackOverride(n);
    } catch {}
    return n;
  }
  setUpdateTrackOverride(t:ReleaseTrack|null|undefined) {
    let {
      updateTrackOverride: n,
      ...r
    } = this.loadForWrite();
    this.persist(t == null ? r : {
      ...r,
      updateTrackOverride: t
    });
  }
  getMcpCustomInstructions() {
    return this.load().mcpCustomInstructions;
  }
  setMcpCustomInstructions(t:Record<string,string>) {
    this.persist({
      ...this.loadForWrite(),
      mcpCustomInstructions: deps.normalizeInstructions(t)
    });
  }
  getMcpCustomInstructionsByServerId() {
    return this.load().mcpCustomInstructionsByServerId;
  }
  getActiveAccountScope() {
    return this.load().activeAccountScope;
  }
  getHeldAccountScopes() {
    let t = this.load(),
      n = Object.keys(t.accountScopes);
    return t.activeAccountScope === void 0 || n.includes(t.activeAccountScope) ? n : [...n, t.activeAccountScope];
  }
  scopeToAccount(t:string) {
    let n = this.loadForWrite(),
      r = onboardingForAccount(n, t);
    if (n.activeAccountScope === t) {
      n.hasSeenOnboardingAccountScope !== r.hasSeenOnboardingAccountScope && this.persist({
        ...withoutOnboarding(n),
        ...r
      });
      return;
    }
    let {
        [t]: o,
        ...a
      } = n.accountScopes,
      i = n.activeAccountScope,
      c = i === void 0 ? a : {
        ...a,
        [i]: deps.accountSettings(n)
      };
    if (i === void 0 && o === void 0) {
      this.persist({
        ...withoutOnboarding(n),
        ...r,
        activeAccountScope: t,
        accountScopes: c
      });
      return;
    }
    let d = deps.omitAccountSettings(withoutOnboarding(n));
    this.persist({
      ...d,
      ...r,
      activeAccountScope: t,
      accountScopes: c,
      ...(o ?? deps.accountDefaults())
    });
  }
  clearAccountScope() {
    let {
      activeAccountScope: t,
      ...n
    } = deps.omitAccountSettings(this.loadForWrite());
    this.persist({
      ...n,
      ...deps.accountDefaults()
    });
  }
  parkAccountScope() {
    let t = this.loadForWrite(),
      n = t.activeAccountScope;
    n !== void 0 && this.persist({
      ...t,
      accountScopes: {
        ...t.accountScopes,
        [n]: deps.accountSettings(t)
      }
    }), this.clearAccountScope();
  }
  forgetAccountScope(t:string) {
    let n = this.loadForWrite();
    if (n.accountScopes[t] === void 0) return;
    let {
      [t]: r,
      ...o
    } = n.accountScopes;
    this.persist({
      ...n,
      accountScopes: o
    });
  }
  setMcpCustomInstructionsByServerId(t:Record<string,string>) {
    this.persist({
      ...this.loadForWrite(),
      mcpCustomInstructionsByServerId: deps.normalizeServerInstructions(t)
    });
  }
  getMcpDisabledToolsByServerId() {
    return this.load().mcpDisabledToolsByServerId;
  }
  setMcpDisabledToolsByServerId(t:Record<string,string[]>) {
    let n = deps.normalizeDisabledTools(t);
    this.overwritingUnreadable(Object.keys(n).length > 0, () => this.persist({
      ...this.loadForWrite(),
      mcpDisabledToolsByServerId: n
    }));
  }
  getUserTimeZone() {
    let t = this.load();
    return t.userTimeZoneOverride ?? t.userTimeZone;
  }
  getDetectedUserTimeZone() {
    return this.load().userTimeZone;
  }
  getUserTimeZoneOverride() {
    return this.load().userTimeZoneOverride;
  }
  setUserTimeZone(t?:string) {
    let {
        userTimeZone: n,
        ...r
      } = this.loadForWrite(),
      o = deps.trimOptional(t);
    this.persist(o === void 0 ? r : {
      ...r,
      userTimeZone: o
    });
  }
  setUserTimeZoneOverride(t?:string) {
    let {
        userTimeZoneOverride: n,
        ...r
      } = this.loadForWrite(),
      o = deps.trimOptional(t);
    this.persist(o === void 0 ? r : {
      ...r,
      userTimeZoneOverride: o
    });
  }
  getMcpBoxServers() {
    return this.load().mcpBoxServers;
  }
  setMcpBoxServers(t:string[]) {
    this.persist({
      ...this.loadForWrite(),
      mcpBoxServers: [...new Set(t)]
    });
  }
  getRawMcpCustomInstruction(t:string) {
    return this.load().mcpCustomInstructions[t];
  }
  getRawMcpCustomInstructionByServerId(t:string) {
    return this.load().mcpCustomInstructionsByServerId[t];
  }
  setMcpCustomInstructionByServerId(t:{serverId:string;displayName:string;value:string;mirrorLegacyName:boolean}) {
    let {
        serverId: n,
        displayName: r,
        value: o,
        mirrorLegacyName: a
      } = t,
      i = this.loadForWrite(),
      c = {
        ...i.mcpCustomInstructionsByServerId
      };
    c[n] = deps.clipInstruction(o);
    let d = {
      ...i.mcpCustomInstructions
    };
    if (a) {
      let l = deps.clipInstruction(o);
      l.trim().length > 0 || deps.legacyInstruction(r).length > 0 ? d[r] = l : delete d[r];
    } else delete d[r];
    this.persist({
      ...i,
      mcpCustomInstructionsByServerId: c,
      mcpCustomInstructions: d
    });
  }
  migrateMcpCustomInstructionToServerId(t:{serverId:string;displayName:string}) {
    let {
        serverId: n,
        displayName: r
      } = t,
      o = this.loadForWrite();
    if (o.mcpCustomInstructionsByServerId[n] !== void 0) return;
    let a = o.mcpCustomInstructions[r];
    a !== void 0 && this.persist({
      ...o,
      mcpCustomInstructionsByServerId: {
        ...o.mcpCustomInstructionsByServerId,
        [n]: a
      }
    });
  }
  deleteMcpCustomInstructionByServerId(t:{serverId:string;displayName:string;deleteLegacyName:boolean}) {
    let {
        serverId: n,
        displayName: r,
        deleteLegacyName: o
      } = t,
      a = this.loadForWrite(),
      i = {
        ...a.mcpCustomInstructionsByServerId
      };
    delete i[n];
    let c = {
      ...a.mcpCustomInstructions
    };
    o && delete c[r], this.persist({
      ...a,
      mcpCustomInstructionsByServerId: i,
      mcpCustomInstructions: c
    });
  }
  setMcpCustomInstruction(t:string,n:string) {
    let r = this.loadForWrite(),
      o = {
        ...r.mcpCustomInstructions
      },
      a = deps.clipInstruction(n);
    a.trim().length === 0 ? deps.legacyInstruction(t).length > 0 ? o[t] = "" : delete o[t] : o[t] = a, this.persist({
      ...r,
      mcpCustomInstructions: o
    });
  }
  getNotificationConfig() {
    let t = this.load();
    return this.unreadable ? this.logRefusalOnce("notification-config-seed") : (t.notifications?.isEnabled !== !1 || Object.keys(t.notifications).length !== 1) && this.persist({
      ...t,
      notifications: {
        isEnabled: !1
      }
    }), deps.defaultNotificationConfig;
  }
  setNotificationConfig(t:NotificationConfig) {
    this.persist({
      ...this.loadForWrite(),
      notifications: {
        isEnabled: !1
      }
    });
  }
  deleteMcpCustomInstruction(t:string) {
    let n = this.loadForWrite();
    if (!(t in n.mcpCustomInstructions)) return;
    let r = {
      ...n.mcpCustomInstructions
    };
    delete r[t], this.persist({
      ...n,
      mcpCustomInstructions: r
    });
  }
  getAutoReviewInstructions() {
    return this.load().autoReviewInstructions ?? deps.defaultReview;
  }
  setAutoReviewInstructions(t:Partial<AutoReviewInstructions>) {
    let n = deps.normalizeReview(t),
      r = n.isEnabled && n.allowInstructions.length === 0 && n.blockInstructions.length > 0;
    this.overwritingUnreadable(r, () => {
      let {
        autoReviewInstructions: o,
        ...a
      } = this.loadForWrite();
      if (n.isEnabled && n.allowInstructions.length === 0 && n.blockInstructions.length === 0) {
        this.persist(a);
        return;
      }
      this.persist({
        ...a,
        autoReviewInstructions: {
          isEnabled: n.isEnabled,
          allowInstructions: [...n.allowInstructions],
          blockInstructions: [...n.blockInstructions]
        }
      });
    });
  }
  getLocalToolPermission() {
    let t = this.load();
    return deps.normalizePermission(t.localToolPermission ?? "ask", t.localToolPermissionCeiling);
  }
  getLocalToolPermissionChoice() {
    return this.load().localToolPermission ?? "ask";
  }
  getLocalToolPermissionCeiling() {
    return this.load().localToolPermissionCeiling;
  }
  setLocalToolPermission(t:LocalToolPermission) {
    this.overwritingUnreadable(t === "never", () => this.persist({
      ...this.loadForWrite(),
      localToolPermission: t
    }));
  }
  setLocalToolPermissionCeiling(t?:LocalToolPermission) {
    this.overwritingUnreadable(deps.normalizePermission("always", t) !== "always", () => {
      let {
        localToolPermissionCeiling: n,
        ...r
      } = this.loadForWrite();
      this.persist(t === void 0 ? r : {
        ...r,
        localToolPermissionCeiling: t
      });
    });
  }
  getLocalEgressAllowed() {
    return this.load().localEgressAllowed;
  }
  setLocalEgressAllowed(t?:boolean) {
    this.overwritingUnreadable(t === !1, () => {
      let {
        localEgressAllowed: n,
        ...r
      } = this.loadForWrite();
      this.persist(t === void 0 ? r : {
        ...r,
        localEgressAllowed: t
      });
    });
  }
  getBoxRosterCensus() {
    return this.load().boxRosterCensus;
  }
  setBoxRosterCensus(t?:Settings["boxRosterCensus"]) {
    let n = this.loadForWrite();
    if (n.boxRosterCensus === t) return;
    let {
      boxRosterCensus: r,
      ...o
    } = n;
    this.persist(t === void 0 ? o : {
      ...o,
      boxRosterCensus: t
    });
  }
  getLocalToolPermissionByMachineId() {
    return this.load().localToolPermissionByMachineId ?? {};
  }
  getLocalToolPermissionForMachine(t:string) {
    let n = this.load(),
      r = n.localToolPermissionByMachineId?.[t];
    return r === void 0 ? void 0 : deps.normalizePermission(r, n.localToolPermissionCeiling);
  }
  setLocalToolPermissionForMachine(t:string,n:LocalToolPermission) {
    this.setLocalToolPermissionsForMachines({
      [t]: n
    });
  }
  setLocalToolPermissionsForMachines(t:Record<string,LocalToolPermission>) {
    let n = Object.entries(t).filter(([r]) => r.length > 0);
    n.length !== 0 && this.overwritingUnreadable(n.every(([, r]) => r === "never"), () => {
      let r = this.loadForWrite();
      this.persist({
        ...r,
        localToolPermissionByMachineId: {
          ...r.localToolPermissionByMachineId,
          ...Object.fromEntries(n)
        }
      });
    });
  }
  getPinnedAgentIds() {
    return this.load().pinnedAgentIds;
  }
  setPinnedAgentIds(t:string[]) {
    this.persist({
      ...this.loadForWrite(),
      pinnedAgentIds: [...new Set(t)]
    });
  }
  static storable({ sections: t, stored: n }: {sections:SidebarSection[];stored?:SidebarSection[]}) {
    return deps.carryFolds({
      sections: t,
      stored: n
    }).map(r => ({
      id: r.id,
      name: r.name,
      agentIds: [...r.agentIds],
      isCollapsed: r.isCollapsed
    }));
  }
  getSidebarSections() {
    let t = this.load().sidebarSections;
    return t === void 0 ? void 0 : deps.carryFolds({
      sections: t
    });
  }
  setSidebarSections(t:SidebarSection[]) {
    let n = this.loadForWrite();
    this.persist({
      ...n,
      sidebarSections: DesktopSettings.storable({
        sections: t,
        stored: n.sidebarSections
      })
    });
  }
};
}
