import type {ReleaseTrack,SettingsOwner} from './settings-contracts.js';
export type ThemePreference='system'|'dark'|'light';
export interface ThemeState {preference:ThemePreference;resolved:'dark'|'light';systemAccentColor?:string}
export interface NativeTheme {themeSource:ThemePreference;shouldUseDarkColors:boolean;on(event:'updated',handler:()=>void):unknown}
export interface SystemPreferences {on(event:'accent-color-changed',handler:()=>void):unknown;getAccentColor():string;subscribeNotification(name:'AppleColorPreferencesChangedNotification',handler:()=>void):unknown}
export interface DeferredTheme {wrap(operation:()=>void):()=>void}
export interface ThemeSettings {getThemePreference():ThemePreference;setThemePreference(preference:ThemePreference):void}
export interface ThemeDependencies {nativeTheme:NativeTheme;systemPreferences:SystemPreferences;createDeferred(options:{name:string;delayMs:number}):DeferredTheme;attemptWrite(operation:()=>void,reason:string):Error|undefined;reportFailure(domain:'theme',operation:'read',error:unknown):void;windowBackground(theme:'light'|'dark'):string;platform:string}
export function createThemeServiceClass(deps:ThemeDependencies){return class ThemeService{
 private lastBroadcast:ThemeState|undefined;
 private readonly followExplicitThemeLater:()=>void;
 constructor(private readonly settingsStore:ThemeSettings,private readonly broadcastState:(state:ThemeState)=>void,private readonly theme:NativeTheme=deps.nativeTheme,private readonly system:SystemPreferences=deps.systemPreferences,deferred:DeferredTheme=deps.createDeferred({name:'sand-explicit-theme-source',delayMs:500})){
  this.followExplicitThemeLater=deferred.wrap(()=>{const preference=this.settingsStore.getThemePreference();if(preference!=='system')this.theme.themeSource=preference;});
  this.theme.themeSource=this.settingsStore.getThemePreference();this.theme.on('updated',this.handleNativeThemeUpdated);this.system.on('accent-color-changed',this.handleNativeThemeUpdated);
  if(deps.platform==='darwin')this.system.subscribeNotification('AppleColorPreferencesChangedNotification',this.handleNativeThemeUpdated);
 }
 getState():ThemeState {const accent=this.resolveSystemAccentColor();return {preference:this.settingsStore.getThemePreference(),resolved:this.resolveTheme(),...(accent===undefined?{}:{systemAccentColor:accent})};}
 setPreference(preference:ThemePreference):ThemeState {const error=deps.attemptWrite(()=>this.settingsStore.setThemePreference(preference),'theme-preference');if(error!==undefined)throw error;if(preference==='system')this.theme.themeSource=preference;else this.followExplicitThemeLater();const state=this.getState();this.broadcast(state);return state;}
 getWindowBackgroundColor():string {return deps.windowBackground(this.resolveTheme());}
 handleNativeThemeUpdated=():void=>{this.broadcast(this.getState());};
 broadcast(state:ThemeState):void {const previous=this.lastBroadcast;if(previous?.preference===state.preference&&previous.resolved===state.resolved&&previous.systemAccentColor===state.systemAccentColor)return;this.lastBroadcast=state;this.broadcastState(state);}
 resolveSystemAccentColor():string|undefined {let color='';try{color=this.system.getAccentColor().trim().replace(/^#/,'').toLowerCase();}catch(error){deps.reportFailure('theme','read',error);}return /^[0-9a-f]{6}([0-9a-f]{2})?$/.test(color)?`#${color.slice(0,6)}`:undefined;}
 resolveTheme():'light'|'dark' {const preference=this.settingsStore.getThemePreference();return preference==='system'?(this.theme.shouldUseDarkColors?'dark':'light'):preference;}
};}
export interface LanguageState {resolved:string;[property:string]:unknown}
export interface LanguageSettings {getLanguagePreference():string;setLanguagePreference(value:string):void}
export interface LanguageDependencies {resolve(preference:string,systemLanguages:string[]):LanguageState;normalize(language:string):string;activate(language:string):void;attemptWrite(operation:()=>void,reason:string):Error|undefined}
export function createLanguageServiceClass(deps:LanguageDependencies){return class LanguageService{
 constructor(private readonly settingsStore:LanguageSettings,private readonly onChanged:(state:LanguageState)=>void,private readonly systemLanguages:()=>string[]){}
 getState():LanguageState {const state=deps.resolve(this.settingsStore.getLanguagePreference(),this.systemLanguages());const resolved=deps.normalize(state.resolved);return resolved===state.resolved?state:{...state,resolved};}
 setPreference(preference:string):LanguageState {const error=deps.attemptWrite(()=>this.settingsStore.setLanguagePreference(preference),'language-preference');if(error!==undefined)throw error;deps.activate(this.getState().resolved);const state=this.getState();this.onChanged(state);return state;}
};}
const tracks:ReleaseTrack[]=['stable','nightly','dogfood'];
export function isReleaseTrack(value:unknown):value is ReleaseTrack{return value==='stable'||value==='nightly'||value==='dogfood';}
export function isInternalTrack(value:string):boolean{return value==='dogfood';}
export function availableReleaseTracks(unlocked:boolean):ReleaseTrack[]{return tracks.filter(track=>track!=='nightly'&&(!isInternalTrack(track)||unlocked));}
export function visibleReleaseTracks(options:{unlockInternalTracks:boolean;effectiveTrack:ReleaseTrack}):ReleaseTrack[]{const available=availableReleaseTracks(options.unlockInternalTracks);return tracks.filter(track=>available.includes(track)||track===options.effectiveTrack);}
export function managedReleaseTrack(value:unknown):ReleaseTrack|undefined{if(typeof value!=='string')return;const track=value.trim();return isReleaseTrack(track)&&track!=='nightly'?track:undefined;}
export function managedReleasePolicy(value:{releaseTrack?:unknown;unlockInternalTracks?:unknown}):{managedTrack:ReleaseTrack|undefined;unlockInternalTracks:boolean}{return {managedTrack:managedReleaseTrack(value.releaseTrack),unlockInternalTracks:value.unlockInternalTracks===true};}
export function effectiveReleaseTrack(value:{managedTrack?:ReleaseTrack;userOverride?:ReleaseTrack;buildDefault?:ReleaseTrack}):ReleaseTrack {const track=value.managedTrack??value.userOverride??value.buildDefault??'stable';return track==='nightly'?'stable':track;}
export interface DurableOwner extends Omit<SettingsOwner,'onDamage'> {onDamage(event:{path:string;cause:unknown;copyPath:string|null}):void;onDiscard(event:{path:string;copyPath:string}):void}
export function createDurableFileOwner(options:{log(message:string):void;report?(event:'damaged'|'unsupported-version'|'write-failed'|'discarded',reason:string):void},formatError:(error:unknown)=>string):DurableOwner {
 const seen=new Set<string>();const basename=(filename:string)=>filename.slice(Math.max(filename.lastIndexOf('/'),filename.lastIndexOf('\\'))+1);
 const report=(filename:string,event:'damaged'|'unsupported-version'|'write-failed'|'discarded',reason:string,message:string)=>{const key=JSON.stringify([filename,event,reason]);if(seen.has(key))return;seen.add(key);options.log(message);options.report?.(event,reason);};
 return {onDamage({path,cause,copyPath}){const reason=formatError(cause);report(path,'damaged',reason,`durable file damaged path=${basename(path)} cause=${reason} copy=${copyPath===null?'none':basename(copyPath)}`);},onUnsupportedVersion({path,version}){report(path,'unsupported-version','unsupported-version',`durable file unsupported path=${basename(path)} version=${version}`);},onWriteFailed(path,error){const reason=formatError(error);report(path,'write-failed',reason,`durable file write failed path=${basename(path)} cause=${reason}`);},onDiscard({path,copyPath}){report(path,'discarded','discarded',`durable file discarded path=${basename(path)} copy=${basename(copyPath)}`);}};
}
