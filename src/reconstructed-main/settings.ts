import type {SettingsDependencies} from './settings-contracts.js';
import {createSettingsStoreClass} from './settings-store.js';
import * as policy from './settings-policy.js';
export * from './settings-contracts.js';
export * from './settings-policy.js';
export * from './settings-store.js';
/** File I/O and schema library remain host capabilities; all store transitions and normalization execute typed code. */
export function createDesktopSettingsBase(deps:Pick<SettingsDependencies,'createIO'|'schema'|'isMissingFile'|'unreadableError'|'errorMessage'|'legacyInstruction'|'defaultTheme'|'defaultLanguage'|'defaultSpellCheck'|'defaultNotificationPreferences'|'defaultNotificationConfig'|'defaultReview'>) {
 return createSettingsStoreClass({...deps,...policy,normalizeInstructions:values=>{const result:Record<string,string>={};for(const [key,value] of Object.entries(values)){const clipped=policy.clipInstruction(value);if(clipped.trim().length>0)result[key]=clipped;else if(deps.legacyInstruction(key).length>0)result[key]='';}return result;}});
}
export * from './settings-io.js';
export * from './settings-schema.js';
export * from './preferences.js';
