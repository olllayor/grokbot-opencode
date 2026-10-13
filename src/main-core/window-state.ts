export interface Bounds{x:number;y:number;width:number;height:number}
export interface WindowState{version:1;normalBounds:Bounds;isMaximized:boolean}
export const MINIMUM_WINDOW_SIZE={width:512,height:520};
export function parseWindowState(value:unknown):WindowState|null{
  if(typeof value!=='object'||value===null)return null;
  const record=value as Record<string,unknown>,bounds=record.normalBounds;
  if(record.version!==1||typeof record.isMaximized!=='boolean'||typeof bounds!=='object'||bounds===null)return null;
  const candidate=bounds as Record<string,unknown>;
  for(const key of ['x','y','width','height'])if(typeof candidate[key]!=='number'||!Number.isFinite(candidate[key])||!Number.isInteger(candidate[key]))return null;
  if((candidate.width as number)<=0||(candidate.height as number)<=0)return null;
  return{version:1,normalBounds:{x:candidate.x as number,y:candidate.y as number,width:candidate.width as number,height:candidate.height as number},isMaximized:record.isMaximized};
}
export function restoreWindowBounds({persisted,workAreas}:{persisted:WindowState|null;workAreas:readonly Bounds[]}):{bounds:Bounds|null;maximize:boolean}{
  if(persisted===null||workAreas.length===0)return{bounds:null,maximize:false};
  let selected:{workArea:Bounds;overlapWidth:number;overlapHeight:number;area:number}|null=null;
  for(const area of workAreas){const overlapWidth=Math.max(0,Math.min(persisted.normalBounds.x+persisted.normalBounds.width,area.x+area.width)-Math.max(persisted.normalBounds.x,area.x)),overlapHeight=Math.max(0,Math.min(persisted.normalBounds.y+persisted.normalBounds.height,area.y+area.height)-Math.max(persisted.normalBounds.y,area.y)),overlap=overlapWidth*overlapHeight;if(selected===null||overlap>selected.area)selected={workArea:area,overlapWidth,overlapHeight,area:overlap};}
  if(selected===null||selected.overlapWidth<100||selected.overlapHeight<40||selected.workArea.width<512||selected.workArea.height<520)return{bounds:null,maximize:persisted.isMaximized};
  const width=Math.min(Math.max(persisted.normalBounds.width,512),selected.workArea.width),height=Math.min(Math.max(persisted.normalBounds.height,520),selected.workArea.height),x=Math.min(Math.max(persisted.normalBounds.x,selected.workArea.x),selected.workArea.x+selected.workArea.width-width),y=Math.min(Math.max(persisted.normalBounds.y,selected.workArea.y),selected.workArea.y+selected.workArea.height-height);
  return{bounds:{x,y,width,height},maximize:persisted.isMaximized};
}
export interface WindowStateIO{readTextFile():string|null;writeTextFile(text:string):unknown;reportFailure(operation:'parse'|'write',error:unknown):void}
export class WindowStateStore{
  private unwrittenText:string|null=null;
  private readonly flushLater:()=>void;
  constructor(private readonly io:WindowStateIO,policy?:{wrap(callback:()=>void):()=>void}){
    let timer:ReturnType<typeof setTimeout>|undefined;
    this.flushLater=policy?.wrap(()=>this.flush())??(()=>{if(timer!==undefined)clearTimeout(timer);timer=setTimeout(()=>{timer=undefined;this.flush();},300);timer.unref();});
  }
  load():WindowState|null{const text=this.io.readTextFile();if(text===null)return null;try{const state=parseWindowState(JSON.parse(text));if(state===null)this.io.reportFailure('parse',new Error('schema validation failed'));return state;}catch(error){this.io.reportFailure('parse',error);return null;}}
  note(state:WindowState):void{this.unwrittenText=JSON.stringify(state,null,2);this.flushLater();}
  flush():void{const text=this.unwrittenText;if(text===null)return;this.unwrittenText=null;try{this.io.writeTextFile(text);}catch(error){this.io.reportFailure('write',error);}}
}
export interface RestorableWindow{
  isDestroyed():boolean;isMaximized():boolean;isFullScreen():boolean;
  getContentBounds():Bounds;getBounds():Bounds;getNormalBounds():Bounds;
  setContentBounds(bounds:Bounds):void;maximize():void;
  on(event:string,callback:()=>void):unknown;
}
export function trackWindowState(window:RestorableWindow,initialBounds:Bounds|null|undefined,store:Pick<WindowStateStore,'note'|'flush'>):void{
  let normal=initialBounds??window.getContentBounds();
  const normalGeometry=()=>{if(window.isMaximized()||window.isFullScreen())return false;const bounds=window.getBounds(),restore=window.getNormalBounds();return bounds.x===restore.x&&bounds.y===restore.y&&bounds.width===restore.width&&bounds.height===restore.height;};
  const save=()=>{if(window.isDestroyed())return;if(normalGeometry())normal=window.getContentBounds();store.note({version:1,normalBounds:normal,isMaximized:window.isMaximized()});};
  for(const event of ['resize','move','maximize','unmaximize'])window.on(event,save);
  window.on('close',()=>{save();store.flush();});
}
export function applyWindowRestore(window:RestorableWindow,restore:{bounds:Bounds|null;persistedNormalBounds:Bounds|null;maximize:boolean},store:Pick<WindowStateStore,'note'|'flush'>):void{
  if(restore.bounds!==null)window.setContentBounds(restore.bounds);trackWindowState(window,restore.bounds??restore.persistedNormalBounds,store);if(restore.maximize)window.maximize();
}
