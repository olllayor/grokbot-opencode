import path from 'node:path';
export function preloadFilename({isPackaged,devCapability}:{isPackaged:boolean;devCapability:boolean}):string{return!isPackaged&&devCapability?'preload-sand-dev.cjs':'preload.cjs';}
export function windowIcon({platform,isPackaged,resourcesPath,devIconPath}:{platform:string;isPackaged:boolean;resourcesPath:string;devIconPath?:string}):string|undefined{if(!isPackaged)return devIconPath;if(platform==='linux')return path.join(resourcesPath,'icon.png');}
export function v8CachePolicy(install:{kind:string}|null|undefined):'none'|'bypassHeatCheck'{return install?.kind==='appimage'?'none':'bypassHeatCheck';}
export function sameDocumentLocation(first:string,second:string):boolean{const a=URL.parse(first),b=URL.parse(second);return a!==null&&b!==null&&a.origin===b.origin&&a.pathname===b.pathname;}
export async function loadMainWindow(window:{loadURL(url:string):Promise<unknown>;loadFile(file:string):Promise<unknown>},devServerUrl:string|null|undefined,rendererFile:string):Promise<void>{if(devServerUrl!=null)await window.loadURL(devServerUrl);else await window.loadFile(rendererFile);}
