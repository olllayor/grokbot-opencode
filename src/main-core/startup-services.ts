import {resolveUserDataDirectory} from '../electron-main/user-data.js';
import {dataRootOverride} from './data-paths.js';
import {applyUserDataSettlement,type RootSettlement} from './user-data-migration.js';
export interface UserDataApp{
 isPackaged:boolean;getPath(name:'appData'|'userData'):string;getVersion():string;
 setPath(name:'userData'|'sessionData',directory:string):void;
}
export interface StartupRootDependencies{
 app:UserDataApp;platform:string;argv:readonly string[];
 isUpdatedLaunch(input:{argv:readonly string[];appDataDir:string;runningVersion:string}):boolean;
 report(domain:'startup',operation:'user-data-settlement'|'data-root-settlement',reason:string):void;
 log(message:string):void;
}
const userDataWarnings=new Set(['canonical-marked','canonical-unsafe','conflict-preserved','legacy-unsafe','migration-failed']);
const dataRootWarnings=new Set(['canonical-conflict','canonical-marked','legacy-unsafe','live-legacy-host','migration-failed','unknown-legacy-writer']);
export function initializeUserData(input:{isLabBuild:boolean;env:NodeJS.ProcessEnv},deps:StartupRootDependencies):string|null{
 const isolated=resolveUserDataDirectory(deps.argv,input.env);
 if(isolated!==null){input.env.SAND_USER_DATA_DIR=isolated;deps.app.setPath('userData',isolated);deps.app.setPath('sessionData',isolated);deps.log(`[sand] using isolated user-data dir: ${isolated}`);return isolated;}
 const result=applyUserDataSettlement({platform:deps.platform,isPackaged:deps.app.isPackaged,isLabBuild:input.isLabBuild,hasIsolatedUserData:false,isUpdatedLaunch:deps.platform==='win32'&&deps.isUpdatedLaunch({argv:deps.argv,appDataDir:deps.app.getPath('appData'),runningVersion:deps.app.getVersion()}),appDataDir:deps.app.getPath('appData'),canonicalUserDataDir:deps.app.getPath('userData'),setPath:(name,value)=>deps.app.setPath(name,value)});
 if(userDataWarnings.has(result.reason))deps.report('startup','user-data-settlement',result.reason);return null;
}
export interface DataRootInput{isPrimaryInstance:boolean;isLabBuild:boolean;hasIsolatedUserData:boolean;attachProdBox:boolean;env:NodeJS.ProcessEnv}
export function initializeDataRoot(input:DataRootInput,deps:{isPackaged:boolean;existingProductionRoot():string;settle(input:{isPackaged:boolean;isLabBuild:boolean;hasIsolatedUserData:boolean;env:NodeJS.ProcessEnv}):RootSettlement;report:StartupRootDependencies['report']}):RootSettlement|null{
 if(!input.isPrimaryInstance)return null;
 if(!deps.isPackaged&&input.attachProdBox&&!input.hasIsolatedUserData&&dataRootOverride(input.env)===null){input.env.SAND_DATA_ROOT=deps.existingProductionRoot();return null;}
 const result=deps.settle({isPackaged:deps.isPackaged,isLabBuild:input.isLabBuild,hasIsolatedUserData:input.hasIsolatedUserData,env:input.env});if(dataRootWarnings.has(result.reason))deps.report('startup','data-root-settlement',result.reason);return result;
}
export interface FocusableMainWindow{isDestroyed():boolean;isMinimized():boolean;restore():void;show():void;focus():void;webContents:{send(channel:string):void}}
export function focusStartupWindow(input:{lateFocus?:()=>void;window?:FocusableMainWindow}):void{if(input.lateFocus!==undefined){input.lateFocus();return;}const window=input.window;if(window==null||window.isDestroyed())return;if(window.isMinimized())window.restore();window.show();window.focus();}
export function markMainEdge(input:{isServed():boolean;setServed():void;window?:FocusableMainWindow;channel:string}):void{if(input.isServed())return;input.setServed();const window=input.window;if(window!=null&&!window.isDestroyed())window.webContents.send(input.channel);}
export function startupFailed(error:unknown,input:{noteFailed(error:unknown):void;markMainEdgeServed():void}):void{input.noteFailed(error);input.markMainEdgeServed();}
