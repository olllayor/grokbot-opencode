import fs from 'node:fs';import path from 'node:path';import type {SettingsIO} from './settings-contracts.js';
export interface SettingsFileDependencies {
 openReadWithinRoot(filename:string,options:{root:string}):number;
 atomicWrite(filename:string,text:string,options:{mode:number|undefined}):void;
 isUnsafePath(error:unknown):boolean;
 errno(error:unknown):string|undefined;
}
export function readSettingsBackup(filename:string,root:string,deps:Pick<SettingsFileDependencies,'openReadWithinRoot'>):Buffer {
 const descriptor=deps.openReadWithinRoot(filename,{root});try{return fs.readFileSync(descriptor);}finally{fs.closeSync(descriptor);}
}
export function sameSettingsBackup(filename:string,bytes:Buffer,root:string,deps:SettingsFileDependencies):boolean {
 try{return readSettingsBackup(filename,root,deps).equals(bytes);}catch(error){if(deps.isUnsafePath(error)||deps.errno(error)!==undefined)return false;throw error;}
}
export function createSettingsBackup(filename:string,bytes:Buffer,deps:Pick<SettingsFileDependencies,'errno'>):boolean {
 let descriptor:number;try{descriptor=fs.openSync(filename,fs.constants.O_WRONLY|fs.constants.O_CREAT|fs.constants.O_EXCL|(fs.constants.O_NOFOLLOW??0),0o600);}catch(error){if(deps.errno(error)==='EEXIST')return false;throw error;}
 try{try{fs.writeFileSync(descriptor,bytes);fs.fsyncSync(descriptor);}finally{fs.closeSync(descriptor);}}catch(error){fs.rmSync(filename,{force:true});throw error;}return true;
}
/** Shipped xT durable I/O: exact content deduplication and exclusive nofollow corruption backups. */
export function createSettingsIO(filename:string,clock:{now():number}={now:()=>Date.now()},mode:number|undefined,deps:SettingsFileDependencies):SettingsIO {
 return {readText:()=>fs.existsSync(filename)?fs.readFileSync(filename,'utf-8'):undefined,
 writeText:text=>deps.atomicWrite(filename,text,{mode}),
 keepDamagedCopy:()=>{
  const directory=path.dirname(filename),prefix=`${path.basename(filename)}.corrupt-`,bytes=fs.readFileSync(filename);
  if(fs.readdirSync(directory).filter(item=>item.startsWith(prefix)&&/^\d+$/.test(item.slice(prefix.length))).some(item=>sameSettingsBackup(path.join(directory,item),bytes,directory,deps)))return;
  let timestamp=clock.now();while(!createSettingsBackup(path.join(directory,`${prefix}${timestamp}`),bytes,deps))timestamp+=1;
 }};
}
