import fs from 'node:fs';
import path from 'node:path';
import {attempt,systemErrorCode} from '../electron-main/errors.js';
const marker='.grokbot-user-data-v1';
export type RootSettlement={route:'unchanged';reason:string}|{route:'canonical'|'legacy';reason:string;root:string};
export interface UserDataMigration{platform:string;isPackaged:boolean;isLabBuild:boolean;hasIsolatedUserData:boolean;isUpdatedLaunch:boolean;appDataDir:string;canonicalUserDataDir:string;removeEmpty?:(directory:string)=>boolean;rename?:(from:string,to:string)=>void}
export function userDataRoots(appData:string,join:typeof path.join=path.join):{legacy:string;canonical:string}{return{legacy:join(appData,'Sand'),canonical:join(appData,'Grok Bot')};}
export function directoryKind(directory:string):'directory'|'unsafe'|'absent'{const stat=attempt(()=>fs.lstatSync(directory));return stat.ok?(stat.value.isDirectory()&&!stat.value.isSymbolicLink()?'directory':'unsafe'):systemErrorCode(stat.error)==='ENOENT'?'absent':'unsafe';}
export function hasUserDataMarker(directory:string):boolean{const stat=attempt(()=>fs.lstatSync(path.join(directory,marker)));return stat.ok&&stat.value.isFile();}
export function markUserDataRoot(directory:string):boolean{const result=attempt(()=>{fs.mkdirSync(directory,{recursive:true,mode:0o700});fs.writeFileSync(path.join(directory,marker),'{"version":1}\n',{flag:'wx',mode:0o600});});return result.ok||(systemErrorCode(result.error)==='EEXIST'&&hasUserDataMarker(directory));}
export function removeEmptyDirectory(directory:string):boolean{const result=attempt(()=>fs.readdirSync(directory).length!==0?false:(fs.rmdirSync(directory),true));return result.ok&&result.value;}
export function directoryIsEmpty(directory:string):boolean|null{const result=attempt(()=>fs.readdirSync(directory));return result.ok?result.value.length===0:null;}
export function sameWindowsPath(first:string,second:string):boolean{return path.resolve(first).toLowerCase()===path.resolve(second).toLowerCase();}
export function migrateUserDataRoots(input:{legacy:string;canonical:string;rename:(from:string,to:string)=>void}):RootSettlement{
 if(!markUserDataRoot(input.legacy))return{route:'legacy',reason:'migration-failed',root:input.legacy};
 if(attempt(()=>input.rename(input.legacy,input.canonical)).ok)return{route:'canonical',reason:'migrated',root:input.canonical};
 return directoryKind(input.legacy)==='absent'&&directoryKind(input.canonical)==='directory'&&hasUserDataMarker(input.canonical)?{route:'canonical',reason:'migrated-by-peer',root:input.canonical}:{route:'legacy',reason:'migration-failed',root:input.legacy};
}
export function settleUserDataRoot(input:UserDataMigration):RootSettlement{
 for(const [condition,reason] of [[input.platform!=='win32','nonwindows'],[!input.isPackaged,'unpackaged'],[input.isLabBuild,'lab'],[input.hasIsolatedUserData,'isolated-user-data']] as const)if(condition)return{route:'unchanged',reason};
 const roots=userDataRoots(input.appDataDir);if(!sameWindowsPath(roots.canonical,input.canonicalUserDataDir))return{route:'unchanged',reason:'nondefault-user-data'};
 const legacy=directoryKind(roots.legacy),canonical=directoryKind(roots.canonical);
 if(legacy==='absent')return canonical==='absent'&&markUserDataRoot(roots.canonical)?{route:'canonical',reason:'canonical-fresh',root:roots.canonical}:{route:'canonical',reason:'canonical-existing',root:roots.canonical};
 if(legacy==='unsafe')return{route:'legacy',reason:'legacy-unsafe',root:roots.legacy};
 if(canonical==='directory'&&hasUserDataMarker(roots.canonical))return{route:'canonical',reason:'canonical-marked',root:roots.canonical};
 if(canonical==='unsafe')return{route:'legacy',reason:'canonical-unsafe',root:roots.legacy};
 if(canonical==='directory'){const empty=directoryIsEmpty(roots.canonical);if(empty===null)return{route:'legacy',reason:'canonical-unsafe',root:roots.legacy};if(!empty)return{route:'canonical',reason:'conflict-preserved',root:roots.canonical};if(!input.isUpdatedLaunch)return{route:'legacy',reason:'awaiting-update',root:roots.legacy};if(!(input.removeEmpty??removeEmptyDirectory)(roots.canonical))return{route:'legacy',reason:'canonical-unsafe',root:roots.legacy};}
 return input.isUpdatedLaunch?migrateUserDataRoots({...roots,rename:input.rename??fs.renameSync}):{route:'legacy',reason:'awaiting-update',root:roots.legacy};
}
export function applyUserDataSettlement(input:UserDataMigration&{setPath(name:'userData'|'sessionData',directory:string):void}):RootSettlement{const result=settleUserDataRoot(input);if(result.route!=='unchanged'){input.setPath('userData',result.root);input.setPath('sessionData',result.root);}return result;}
