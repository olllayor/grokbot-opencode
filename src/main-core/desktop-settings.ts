export interface DesktopSettingsSnapshot{localToolPermission:unknown;activeAccountScope?:unknown;messagesEnabled:boolean}
export interface SettingsStoreBase{
 load():DesktopSettingsSnapshot;persist(settings:DesktopSettingsSnapshot):void;
 scopeToAccount(account:unknown):void;setLocalToolPermission(permission:unknown):void;
 setLocalToolPermissionCeiling(permission:unknown):void;getLocalToolPermission():unknown;
}
export type SettingsStoreConstructor=new(path:string,io?:unknown,refusedWriteLog?:(message:string)=>void,fileOwner?:unknown)=>SettingsStoreBase;
export interface DesktopSettingsOptions{
 io?:unknown;refusedWriteLog?:(message:string)=>void;fileOwner?:unknown;
 onLocalToolPermissionNever?:()=>Promise<unknown>;
 onMessagesEnabledChanged?:(enabled:boolean)=>Promise<unknown>;
}
export interface DesktopSettingsDependencies{
 createIO(path:string,argument:undefined,mode:number):unknown;
 reportFailure(domain:'local-tool-standing-grants'|'local-tool-approvals',operation:'clear',error:unknown):void;
}
/** Shipped Bm layer over Dm: generations and permission-change cleanup ownership. */
export function createDesktopSettingsClass(Base:SettingsStoreConstructor,deps:DesktopSettingsDependencies){
 return class DesktopSettingsStore extends Base{
  private writeGeneration=0;
  private permissionGeneration=0;
  private previousPermission:{permission:unknown;accountScope:unknown}|undefined;
  private previousMessages:boolean|undefined;
  private readonly clearApprovals:(()=>Promise<unknown>)|undefined;
  private readonly messagesChanged:((enabled:boolean)=>Promise<unknown>)|undefined;
  constructor(path:string,options:DesktopSettingsOptions={}){
   super(path,options.io??deps.createIO(path,undefined,0o600),options.refusedWriteLog,options.fileOwner);
   this.clearApprovals=options.onLocalToolPermissionNever;this.messagesChanged=options.onMessagesEnabledChanged;
  }
  getWriteGeneration():number{return this.writeGeneration;}
  getLocalToolPermissionGeneration():number{return this.permissionGeneration;}
  override load():DesktopSettingsSnapshot{const settings=super.load();this.previousPermission={permission:settings.localToolPermission,accountScope:settings.activeAccountScope};this.previousMessages=settings.messagesEnabled;return settings;}
  override persist(settings:DesktopSettingsSnapshot):void{
   super.persist(settings);this.writeGeneration++;
   const previous=this.previousPermission,current={permission:settings.localToolPermission,accountScope:settings.activeAccountScope};
   if(previous!==undefined&&(current.permission!==previous.permission||current.accountScope!==previous.accountScope))this.permissionGeneration++;
   this.previousPermission=current;
   const messages=this.previousMessages;this.previousMessages=settings.messagesEnabled;
   if(messages!==undefined&&messages!==settings.messagesEnabled)this.notifyMessagesChange(settings.messagesEnabled);
  }
  private notifyMessagesChange(enabled:boolean):void{this.messagesChanged?.(enabled).catch(error=>deps.reportFailure('local-tool-standing-grants','clear',error));}
  override scopeToAccount(account:unknown):void{super.scopeToAccount(account);this.clearIfNever();}
  override setLocalToolPermission(permission:unknown):void{const same=this.load().localToolPermission===permission;super.setLocalToolPermission(permission);if(same)this.permissionGeneration++;this.clearIfNever();}
  override setLocalToolPermissionCeiling(permission:unknown):void{super.setLocalToolPermissionCeiling(permission);this.clearIfNever();}
  private clearIfNever():void{if(this.clearApprovals!==undefined&&this.getLocalToolPermission()==='never')this.clearApprovals().catch(error=>deps.reportFailure('local-tool-approvals','clear',error));}
 };
}
