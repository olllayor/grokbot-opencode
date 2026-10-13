import type {Settings, AccountSettings, AutoReviewInstructions, SidebarSection, StoredSidebarSection, ReleaseTrack} from './settings-contracts.js';
export function parseJSON(text:string):unknown {try{return JSON.parse(text) as unknown;}catch{return undefined;}}
export function stableJSON(value:unknown):unknown {
 if(Array.isArray(value))return value.map(stableJSON);
 if(value===null||typeof value!=='object')return value;
 return Object.fromEntries(Object.entries(value).sort(([a],[b])=>a<b?-1:a>b?1:0).map(([key,item])=>[key,stableJSON(item)]));
}
export function onboardingForAccount(settings:Settings,account:string):Pick<Settings,'hasSeenOnboarding'|'hasSeenOnboardingAccountScope'> {
 if(settings.hasSeenOnboarding===undefined)return {};
 if(settings.hasSeenOnboardingAccountScope!==undefined&&settings.hasSeenOnboardingAccountScope!==account)return {};
 return {hasSeenOnboarding:settings.hasSeenOnboarding,hasSeenOnboardingAccountScope:account};
}
export function withoutOnboarding(settings:Settings):Settings {const {hasSeenOnboarding,hasSeenOnboardingAccountScope,...rest}=settings;return rest;}
export function defaultSettings():Settings {return {version:1,mcpBoxServers:[],autoUpdateWhenIdle:true,egressTunnelEnabled:false,webauthnProxyEnabled:true,botColorInChatEnabled:false,messagesEnabled:false,meetingsEnabled:false,mcpCustomInstructions:{},mcpCustomInstructionsByServerId:{},mcpDisabledToolsByServerId:{},accountScopes:{}};}
export function unsupportedVersion(value:unknown):number|undefined {if(typeof value!=='object'||value===null||!('version' in value))return;return typeof value.version==='number'&&value.version!==1?value.version:undefined;}
const accountKeys=['mcpCustomInstructions','mcpCustomInstructionsByServerId','mcpDisabledToolsByServerId','autoReviewInstructions','computerUseModel','localToolPermission','localToolPermissionCeiling','localEgressAllowed','boxRosterCensus'] as const;
export function accountDefaults():AccountSettings {return {mcpCustomInstructions:{},mcpCustomInstructionsByServerId:{},mcpDisabledToolsByServerId:{}};}
export function accountSettings(settings:AccountSettings):AccountSettings {return {...accountDefaults(),...Object.fromEntries(accountKeys.filter(key=>settings[key]!==undefined).map(key=>[key,settings[key]]))};}
export function omitAccountSettings(settings:Settings):Settings {const copy={...settings};for(const key of accountKeys)delete (copy as Partial<AccountSettings>)[key];return copy;}
export function normalizeReview(value?:Partial<AutoReviewInstructions>):AutoReviewInstructions {
 const normalize=(items:unknown):string[]=>{if(!Array.isArray(items))return [];const result:string[]=[];const seen=new Set<string>();for(const item of items){if(typeof item!=='string')continue;const cleaned=item.trim().slice(0,1000);if(!cleaned||seen.has(cleaned))continue;seen.add(cleaned);result.push(cleaned);if(result.length>=20)break;}return result;};
 return {isEnabled:value?.isEnabled!==false,allowInstructions:normalize(value?.allowInstructions),blockInstructions:normalize(value?.blockInstructions)};
}
export function normalizeServerInstructions(value:Record<string,string>):Record<string,string>{return Object.fromEntries(Object.entries(value).filter(([id])=>/^-?[1-9]\d*$/.test(id)).map(([id,text])=>[id,text.slice(0,500)]));}
export function normalizeDisabledTools(value:Record<string,string[]>):Record<string,string[]>{const result:Record<string,string[]>={};for(const [id,tools] of Object.entries(value)){if(!/^-?[1-9]\d*$/.test(id))continue;const unique=[...new Set(tools.filter(tool=>tool.length>0))];if(unique.length)result[id]=unique;}return result;}
export function normalizeTrack(track:ReleaseTrack):ReleaseTrack{return track==='nightly'?'stable':track;}
export function trimOptional(value?:string):string|undefined{return value?.trim()||undefined;}
export function carryFolds({sections,stored=[]}:{sections:SidebarSection[];stored?:SidebarSection[]}):StoredSidebarSection[]{
 const folds=new Map<string,boolean>();for(const section of [...stored,...sections])if(section.isCollapsed!==undefined)folds.set(section.id.trim(),section.isCollapsed);
 const ids=new Set<string>(),agents=new Set<string>();const normalized:StoredSidebarSection[]=[];
 for(const section of sections){const id=section.id.trim();if(!id||ids.has(id))continue;ids.add(id);if(id==='__agents__')continue;const agentIds:string[]=[];for(const agent of section.agentIds){if(!agent||agents.has(agent))continue;agents.add(agent);agentIds.push(agent);}normalized.push({id,name:section.name,agentIds,isCollapsed:folds.get(id)??false});}
 if(normalized.length)normalized.push({id:'__agents__',name:'Unassigned',agentIds:[],isCollapsed:folds.get('__agents__')??false});return normalized;
}
export function normalizePermission(permission:import('./settings-contracts.js').LocalToolPermission,ceiling?:import('./settings-contracts.js').LocalToolPermission):import('./settings-contracts.js').LocalToolPermission {const rank={never:0,ask:1,always:2};return ceiling===undefined||rank[permission]<=rank[ceiling]?permission:ceiling;}
export function clipInstruction(value:string):string {return value.slice(0,500);}
