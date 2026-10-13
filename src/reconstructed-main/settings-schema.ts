import type {Settings,SettingsSchema,ComputerUseModel} from './settings-contracts.js';
/** Structural vendor-schema boundary. Zod is reused; application schema declarations are authored TypeScript. */
export interface VendorSchema {
 optional():VendorSchema;default(value:unknown):VendorSchema;catch(value:unknown):VendorSchema;
 min(value:number):VendorSchema;int():VendorSchema;positive():VendorSchema;safe():VendorSchema;
 partial():VendorSchema;extend(fields:Record<string,VendorSchema>):VendorSchema;
 transform(fn:(value:Record<string,unknown>)=>Record<string,unknown>):VendorSchema;
 safeParse(value:unknown):{success:true;data:unknown}|{success:false;error:unknown};
 parse(value:unknown):unknown;
}
export interface SchemaLibrary {
 object(fields:Record<string,VendorSchema>):VendorSchema;
 record(key:VendorSchema,value:VendorSchema):VendorSchema;
 array(item:VendorSchema):VendorSchema;string():VendorSchema;number():VendorSchema;
 boolean():VendorSchema;enum(values:readonly string[]):VendorSchema;literal(value:unknown):VendorSchema;
}
export interface SettingsSchemaDomain {
 computerUseModel:VendorSchema;
 permissions:readonly string[];themes:readonly string[];languages:readonly string[];
 sounds:readonly string[];rosterCensus:readonly string[];releaseTracks:readonly string[];
}
export function createAccountSchema(library:SchemaLibrary,domain:Pick<SettingsSchemaDomain,'computerUseModel'|'permissions'|'rosterCensus'>):VendorSchema {
 return library.object(accountFields(library,domain));
}
function accountFields(A:SchemaLibrary,domain:Pick<SettingsSchemaDomain,'computerUseModel'|'permissions'|'rosterCensus'>):Record<string,VendorSchema>{
 const review=A.object({isEnabled:A.boolean().default(true),allowInstructions:A.array(A.string()).default([]),blockInstructions:A.array(A.string()).default([])});
 return {mcpCustomInstructions:A.record(A.string(),A.string()).default({}),mcpCustomInstructionsByServerId:A.record(A.string(),A.string()).default({}),mcpDisabledToolsByServerId:A.record(A.string(),A.array(A.string())).default({}),autoReviewInstructions:review.optional(),computerUseModel:domain.computerUseModel.optional().catch(undefined),localToolPermission:A.enum(domain.permissions).optional(),localToolPermissionCeiling:A.enum(domain.permissions).optional(),localEgressAllowed:A.boolean().optional(),boxRosterCensus:A.enum(domain.rosterCensus).optional().catch(undefined)};
}
export function createSettingsSchemas(A:SchemaLibrary,domain:SettingsSchemaDomain):{settings:VendorSchema;migrating:SettingsSchema} {
 const account=A.object(accountFields(A,domain));
 const settings=A.object({
  version:A.literal(1),mcpBoxServers:A.array(A.string().min(1)).default([]),
  hasSeenOnboarding:A.boolean().optional(),hasSeenOnboardingAccountScope:A.string().min(1).optional(),
  selectedTeam:A.object({teamId:A.number().int().positive().safe(),accountScope:A.string().min(1)}).optional().catch(undefined),
  autoUpdateWhenIdle:A.boolean().default(true),updateTrackOverride:A.enum(domain.releaseTracks).optional(),...accountFields(A,domain),
  activeAccountScope:A.string().min(1).optional(),themePreference:A.enum(domain.themes).optional(),languagePreference:A.enum(domain.languages).optional(),
  egressTunnelEnabled:A.boolean().default(false),egressTunnelPreference:A.boolean().optional(),webauthnProxyEnabled:A.boolean().default(true),botColorInChatEnabled:A.boolean().default(false),botColorInChatPreference:A.boolean().optional(),messagesEnabled:A.boolean().default(false),meetingsEnabled:A.boolean().default(false),hardwareAccelerationEnabled:A.boolean().optional(),isSpellCheckEnabled:A.boolean().optional(),
  notifications:A.object({isEnabled:A.boolean(),allowedApps:A.array(A.string()),minIntervalMs:A.number(),maxPerWindow:A.number(),windowMs:A.number()}).partial().optional(),
  desktopNotificationPreferences:A.object({playSound:A.boolean(),sound:A.enum(domain.sounds)}).optional(),
  userTimeZone:A.string().min(1).optional(),userTimeZoneOverride:A.string().min(1).optional(),pinnedAgentIds:A.array(A.string().min(1)).optional(),localToolPermissionByMachineId:A.record(A.string(),A.enum(domain.permissions)).optional(),sidebarSections:A.array(A.object({id:A.string().min(1),name:A.string(),agentIds:A.array(A.string().min(1)),isCollapsed:A.boolean()})).optional(),accountScopes:A.record(A.string(),account).default({})
 });
 const migrating=settings.extend({mcpCustomInstructionsAccountScope:A.string().min(1).optional()}).transform(value=>{
  const {mcpCustomInstructionsAccountScope,...rest}=value;
  return rest.activeAccountScope===undefined&&mcpCustomInstructionsAccountScope!==undefined?{...rest,activeAccountScope:mcpCustomInstructionsAccountScope}:rest;
 });
 return {settings,migrating:{safeParse(value){const result=migrating.safeParse(value);if(!result.success)return result;return {success:true,data:result.data as Settings};}}};
}
/** bm schema body; refine remains a vendor capability with a typed contract. */
export interface RefinableSchema extends VendorSchema {refine(predicate:(value:ComputerUseModel)=>boolean,options:{path:string[]}):VendorSchema}
export function createComputerUseModelSchema(A:SchemaLibrary):VendorSchema {
 const model=A.object({modelId:A.string().min(1),maxMode:A.boolean(),parameters:A.array(A.object({id:A.string().min(1),value:A.string()}))}) as RefinableSchema;
 return model.refine(value=>value.modelId.trim().length>0,{path:['modelId']});
}
