import {sameDocumentLocation} from './window-policy.js';
export function isMcpAppURL(value:string):boolean{const url=URL.parse(value);return url?.protocol==='sand-mcp-app:'&&url.host==='app';}
export function blocksMcpFrameNavigation(value:string,parent:string|null|undefined):boolean{return parent!=null&&URL.parse(parent)?.protocol==='sand-mcp-app:'&&!isMcpAppURL(value);}
export function isHtmlPreviewURL(value:string):boolean{return URL.parse(value)?.protocol==='sand-html-preview:';}
export function isCanvasURL(value:string):boolean{return URL.parse(value)?.protocol==='sand-canvas:';}
export function isCanvasInitialNavigation(value:string,parent:string|null|undefined):boolean{return isCanvasURL(value)&&(parent==null||parent===''||parent==='about:blank');}
export function isExternalHttpURL(value:string):boolean{try{const url=new URL(value);return url.protocol==='http:'||url.protocol==='https:';}catch{return false;}}
export function shouldOpenPreviewExternally(value:string,parent:string|null|undefined):boolean{return parent!=null&&isHtmlPreviewURL(parent)&&isExternalHttpURL(value);}
export interface PrivilegedScheme{scheme:string;privileges:{standard:boolean;secure?:boolean;supportFetchAPI?:boolean;stream?:boolean;codeCache?:boolean}}
export function registerSecureSchemes(protocol:{registerSchemesAsPrivileged(schemes:PrivilegedScheme[]):void}):void{
 protocol.registerSchemesAsPrivileged([
  {scheme:'sand-media',privileges:{standard:true,secure:true,supportFetchAPI:true,stream:true}},
  ...['sand-canvas','sand-html-preview','sand-avatar','sand-mcp-app'].map(scheme=>({scheme,privileges:{standard:true,secure:true}})),
  {scheme:'file',privileges:{standard:true,codeCache:true}},
 ]);
}
export interface NavigationEvent{preventDefault():void}
export interface FrameNavigationEvent extends NavigationEvent{isMainFrame:boolean;url:string;frame?:{url:string}}
export interface NavigableWebContents{
 setWindowOpenHandler(handler:(details:{url:string})=>{action:'deny'}):void;
 getURL():string;
 on(event:'will-navigate',handler:(event:NavigationEvent,url:string)=>void):unknown;
 on(event:'will-frame-navigate',handler:(event:FrameNavigationEvent)=>void):unknown;
}
export function guardWindowNavigation(contents:NavigableWebContents,{openExternalUrl}:{openExternalUrl(url:string):unknown}):void{
 contents.setWindowOpenHandler(({url})=>{openExternalUrl(url);return{action:'deny'};});
 contents.on('will-navigate',(event,url)=>{if(!sameDocumentLocation(url,contents.getURL())){event.preventDefault();openExternalUrl(url);}});
 contents.on('will-frame-navigate',event=>{
  if(event.isMainFrame)return;
  if(blocksMcpFrameNavigation(event.url,event.frame?.url)){event.preventDefault();return;}
  if(!isHtmlPreviewURL(event.url)&&!isCanvasInitialNavigation(event.url,event.frame?.url)&&!isMcpAppURL(event.url)&&!sameDocumentLocation(event.url,contents.getURL())){event.preventDefault();if(shouldOpenPreviewExternally(event.url,event.frame?.url))openExternalUrl(event.url);}
 });
}
