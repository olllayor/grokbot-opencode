export interface RemainderWindow {
  onResponseCompleted(callback: ((url: string) => void) | null): void;
  onceDocumentSettled(callback: () => void): void;
  onDocumentLoadFailed(callback: (failure: { isMainFrame: boolean; errorCode: number }) => void): void;
  onceClosed(callback: () => void): void;
}
export interface RemainderClock { schedule(delay: number, callback: () => void): unknown }
const defaultClock: RemainderClock = {schedule(delay,callback){ const timer=setTimeout(callback,delay);timer.unref();return timer; }};
export function startupAssets(html: string): string[] {
  return Array.from(html.matchAll(/\s(?:src|href)="\.\/(assets\/[^"]+\.(?:css|js))"/g)).flatMap(match=>match[1]??[]);
}
export function waitForRemainder({window,app,startupAssets:assets,clock=defaultClock}:{window:RemainderWindow;app:{onceBeforeQuit(callback:()=>void):void};startupAssets:readonly string[];clock?:RemainderClock}):Promise<'quitting'|'due'> {
  const pending=new Set(assets);
  return new Promise(resolve=>{
    let settled=false,quitting=false;
    app.onceBeforeQuit(()=>{quitting=true;resolve('quitting');});
    const settle=()=>{if(settled||quitting)return;settled=true;window.onResponseCompleted(null);resolve(new Promise<'quitting'|'due'>(done=>clock.schedule(0,()=>done(quitting?'quitting':'due'))));};
    window.onResponseCompleted(url=>{const asset=assets.find(value=>url.endsWith(`/${value}`));if(asset!==undefined&&pending.delete(asset)&&pending.size===0)settle();});
    window.onceDocumentSettled(settle);
    window.onDocumentLoadFailed(({isMainFrame,errorCode})=>{if(isMainFrame&&errorCode!==-3)settle();});
    window.onceClosed(settle);
  });
}
