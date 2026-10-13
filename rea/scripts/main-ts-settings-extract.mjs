import fs from 'node:fs';
import {parse} from '@babel/parser';
import generator from '@babel/generator';
import traversal from '@babel/traverse';
const generate=generator.default??generator,traverse=traversal.default??traversal;
const source=fs.readFileSync('rea/recovered/dist/electron-main/main-core.cjs','utf8');
const ast=parse(source);let declaration;
traverse(ast,{VariableDeclarator(p){if(p.node.id.name==='Dm')declaration=p.node.init}});
if(!declaration)throw Error('Dm unavailable');
const globals={xT:'createIO',hw:'schema',qee:'unsupportedVersion',rn:'isMissingFile',km:'unreadableError',on:'errorMessage',Ew:'defaultSettings',RT:'accountSettings',yw:'omitAccountSettings',Dl:'normalizeInstructions',wl:'normalizeServerInstructions',Ll:'normalizeDisabledTools',Pl:'normalizeReview',lc:'normalizePermission',Nm:'normalizeTrack',cc:'clipInstruction',kl:'legacyInstruction',Fl:'trimOptional',nw:'defaultTheme',VN:'defaultLanguage',ow:'defaultSpellCheck',xm:'defaultNotificationPreferences',mw:'defaultNotificationConfig',ZD:'defaultReview'};
const signatures={constructor:'t:string, n:SettingsIO = deps.createIO(t), r:(message:string)=>void = () => {}, o?:SettingsOwner',reportUnreadable:'t:unknown,n:unknown',logRefusalOnce:'t:string',overwritingUnreadable:'t:boolean,n:()=>void',persist:'t:Settings',canOverwrite:'t:string|undefined',setHasSeenOnboarding:'t:boolean',setSelectedTeam:'t:Settings["selectedTeam"]',setAutoUpdateWhenIdle:'t:boolean',setThemePreference:'t:Settings["themePreference"]',setLanguagePreference:'t:string',setEgressTunnelEnabled:'t:boolean',setWebauthnProxyEnabled:'t:boolean',setBotColorInChatEnabled:'t:boolean',setMessagesEnabled:'t:boolean',setMeetingsEnabled:'t:boolean',setHardwareAccelerationEnabled:'t:boolean',setSpellCheckEnabled:'t:boolean',setDesktopNotificationPreferences:'t:DesktopNotificationPreferences',setComputerUseModel:'t:ComputerUseModel|undefined',setUpdateTrackOverride:'t:ReleaseTrack|null|undefined',setMcpCustomInstructions:'t:Record<string,string>',scopeToAccount:'t:string',forgetAccountScope:'t:string',setMcpCustomInstructionsByServerId:'t:Record<string,string>',setMcpDisabledToolsByServerId:'t:Record<string,string[]>',setUserTimeZone:'t?:string',setUserTimeZoneOverride:'t?:string',setMcpBoxServers:'t:string[]',getRawMcpCustomInstruction:'t:string',getRawMcpCustomInstructionByServerId:'t:string',setMcpCustomInstructionByServerId:'t:{serverId:string;displayName:string;value:string;mirrorLegacyName:boolean}',migrateMcpCustomInstructionToServerId:'t:{serverId:string;displayName:string}',deleteMcpCustomInstructionByServerId:'t:{serverId:string;displayName:string;deleteLegacyName:boolean}',setMcpCustomInstruction:'t:string,n:string',setNotificationConfig:'t:NotificationConfig',deleteMcpCustomInstruction:'t:string',setAutoReviewInstructions:'t:Partial<AutoReviewInstructions>',setLocalToolPermission:'t:LocalToolPermission',setLocalToolPermissionCeiling:'t?:LocalToolPermission',setLocalEgressAllowed:'t?:boolean',setBoxRosterCensus:'t?:Settings["boxRosterCensus"]',getLocalToolPermissionForMachine:'t:string',setLocalToolPermissionForMachine:'t:string,n:LocalToolPermission',setLocalToolPermissionsForMachines:'t:Record<string,LocalToolPermission>',setPinnedAgentIds:'t:string[]',storable:'{ sections: t, stored: n }: {sections:SidebarSection[];stored?:SidebarSection[]}',setSidebarSections:'t:SidebarSection[]'};
let transformed=generate(declaration,{comments:false}).code;
for(const [old,key] of Object.entries(globals))transformed=transformed.replace(new RegExp(`\\b${old}\\b`,'g'),`deps.${key}`);
transformed=transformed.replace(/class e \{/,'class DesktopSettings {').replaceAll('e.storable','DesktopSettings.storable').replaceAll('Bl.carryFolds','deps.carryFolds').replaceAll('Pm.parse({})','deps.accountDefaults()').replaceAll('wm','1').replaceAll('Uee(','onboardingForAccount(').replaceAll('AT(','withoutOnboarding(').replaceAll('bT(','stableJSON(').replaceAll('pr(t)','parseJSON(t)');
const cls2=parse(transformed).program.body[0];
for(const method of [...cls2.body.body].reverse())if(method.type==='ClassMethod'){
 const sig=signatures[method.key.name];if(sig){const start=transformed.indexOf('(',method.start),end=method.body.start;transformed=transformed.slice(0,start+1)+sig+') '+transformed.slice(end);}
}
transformed=transformed.replace(/  settingsPath;[\s\S]*?  constructor\(/,`  settingsPath:string;
  io:SettingsIO;
  unreadable = false;
  writesOverUnreadable = false;
  refusedWriteLog:(message:string)=>void;
  refusalsLogged = new Set<string>();
  owner:SettingsOwner|undefined;
  constructor(`);
transformed=transformed.replace('  load() {','  load():Settings {').replace('    let n, r;','    let n:unknown, r:unknown;').replace('      let a = {','      let a:Settings = {');
fs.writeFileSync('src/reconstructed-main/settings-store.ts',`import type {Settings,SettingsIO,SettingsOwner,SettingsDependencies,DesktopNotificationPreferences,ComputerUseModel,ReleaseTrack,NotificationConfig,AutoReviewInstructions,LocalToolPermission,SidebarSection} from './settings-contracts.js';\nimport {onboardingForAccount,withoutOnboarding,stableJSON,parseJSON} from './settings-policy.js';\n/** Dm durable settings semantics reconstructed from the shipped class, with explicit typed closure dependencies. */\nexport function createSettingsStoreClass(deps:SettingsDependencies){\nreturn ${transformed};\n}\n`);
