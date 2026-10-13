/** Runtime settings contract evidenced by Mee/hw and every Dm consumer in 0.66.0. */
export type ReleaseTrack = 'stable'|'nightly'|'dogfood';
export type LocalToolPermission = 'always'|'ask'|'never';
export interface AutoReviewInstructions { isEnabled:boolean; allowInstructions:string[]; blockInstructions:string[] }
export interface ComputerUseModel { modelId:string; maxMode:boolean; parameters:{id:string;value:string}[] }
export interface SidebarSection {id:string;name:string;agentIds:string[];isCollapsed?:boolean}
export interface StoredSidebarSection extends SidebarSection {isCollapsed:boolean}
export interface NotificationConfig {isEnabled?:boolean;allowedApps?:string[];minIntervalMs?:number;maxPerWindow?:number;windowMs?:number}
export interface DesktopNotificationPreferences {playSound:boolean;sound:string}
export interface AccountSettings {
 mcpCustomInstructions:Record<string,string>;
 mcpCustomInstructionsByServerId:Record<string,string>;
 mcpDisabledToolsByServerId:Record<string,string[]>;
 autoReviewInstructions?:AutoReviewInstructions;
 computerUseModel?:ComputerUseModel;
 localToolPermission?:LocalToolPermission;
 localToolPermissionCeiling?:LocalToolPermission;
 localEgressAllowed?:boolean;
 boxRosterCensus?:'all-temporal'|'has-box-agent';
}
export interface Settings extends AccountSettings {
 version:1;mcpBoxServers:string[];autoUpdateWhenIdle:boolean;
 egressTunnelEnabled:boolean;egressTunnelPreference?:boolean;webauthnProxyEnabled:boolean;
 botColorInChatEnabled:boolean;botColorInChatPreference?:boolean;messagesEnabled:boolean;meetingsEnabled:boolean;
 hasSeenOnboarding?:boolean;hasSeenOnboardingAccountScope?:string;activeAccountScope?:string;
 selectedTeam?:{teamId:number;accountScope:string};
 hardwareAccelerationEnabled?:boolean;isSpellCheckEnabled?:boolean;
 updateTrackOverride?:ReleaseTrack;themePreference?:'system'|'light'|'dark';languagePreference?:string;
 notifications?:NotificationConfig;desktopNotificationPreferences?:DesktopNotificationPreferences;
 userTimeZone?:string;userTimeZoneOverride?:string;pinnedAgentIds?:string[];
 localToolPermissionByMachineId?:Record<string,LocalToolPermission>;
 sidebarSections?:StoredSidebarSection[];accountScopes:Record<string,AccountSettings>;
}
export interface SettingsIO {readText():string|undefined;writeText(text:string):void;keepDamagedCopy?():void}
export interface SettingsOwner {
 onUnsupportedVersion(event:{path:string;version:number}):void;
 onDamage(event:{path:string;cause:unknown;copyPath:null}):void;
 onWriteFailed(path:string,cause:unknown):void;
}
export type ParseResult<T>={success:true;data:T}|{success:false;error:unknown};
export interface SettingsSchema {safeParse(value:unknown):ParseResult<Settings>}
export interface SettingsDependencies {
 createIO(path:string):SettingsIO;
 schema:SettingsSchema;
 unsupportedVersion(value:unknown):number|undefined;
 isMissingFile(error:unknown):boolean;
 unreadableError:new(log:(message:string)=>void)=>Error;
 errorMessage(error:unknown):string;
 defaultSettings():Settings;
 accountSettings(settings:AccountSettings):AccountSettings;
 accountDefaults():AccountSettings;
 omitAccountSettings(settings:Settings):Settings;
 normalizeInstructions(value:Record<string,string>):Record<string,string>;
 normalizeServerInstructions(value:Record<string,string>):Record<string,string>;
 normalizeDisabledTools(value:Record<string,string[]>):Record<string,string[]>;
 normalizeReview(value?:Partial<AutoReviewInstructions>):AutoReviewInstructions;
 normalizePermission(permission:LocalToolPermission,ceiling?:LocalToolPermission):LocalToolPermission;
 normalizeTrack(track:ReleaseTrack):ReleaseTrack;
 clipInstruction(instruction:string):string;
 legacyInstruction(name:string):string;
 trimOptional(value?:string):string|undefined;
 carryFolds(options:{sections:SidebarSection[];stored?:SidebarSection[]}):StoredSidebarSection[];
 defaultTheme:'system'|'light'|'dark';defaultLanguage:string;defaultSpellCheck:boolean;
 defaultNotificationPreferences:DesktopNotificationPreferences;
 defaultNotificationConfig:NotificationConfig;defaultReview:AutoReviewInstructions;
}
