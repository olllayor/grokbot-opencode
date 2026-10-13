import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {parse} from '@babel/parser';
import traversePackage from '@babel/traverse';
import {build} from 'esbuild';
const traverse=traversePackage.default;
const entry=fs.readFileSync('rea/evidence/rea-input/renderer-startup/entry.js','utf8');
const adapter=fs.readFileSync('rea/evidence/renderer-startup-adapter.js','utf8');
const built=await build({entryPoints:['src/renderer/renderer-startup.ts'],bundle:true,write:false,platform:'node',format:'cjs',target:'es2022'});
const module={exports:{}};vm.runInNewContext(built.outputFiles[0].text,{module,exports:module.exports,URL,Blob,Uint8Array,Audio:function Audio(){}});
const normalize=value=>JSON.parse(JSON.stringify(value,(_key,value)=>typeof value==='function'?'function':value));
function harness(){
 const log=[],windowListeners={},documentListeners={},desktopListeners={},subscriptions={},scheduled=[];let options,focus;
 const store=(name,value)=>({get:()=>value,set:next=>{value=next},subscribe:listener=>{subscriptions[name]=listener;log.push(['subscribe',name]);}});
 const root={id:'root'};
 const document={visibilityState:'visible',getElementById:id=>{log.push(['root',id]);return root},documentElement:{style:{setProperty:(key,value)=>log.push(['css',key,value])}},addEventListener:(name,listener)=>{documentListeners[name]=listener},removeEventListener:(name,listener)=>{if(documentListeners[name]===listener)delete documentListeners[name]}};
 const window={document,navigator:{onLine:true},localStorage:{},sandDev:{},location:{reload:()=>log.push(['reload'])},addEventListener:(name,listener)=>{windowListeners[name]=listener},removeEventListener:(name,listener)=>{if(windowListeners[name]===listener)delete windowListeners[name]}};
 const clock={schedule:(delay,task)=>{const job={delay,task,disposed:false};scheduled.push(job);log.push(['schedule',delay]);return{dispose(){job.disposed=true;log.push(['disposeTimer',delay])}}}};
 const capability={telemetry:{},noteRendererAlive:()=>log.push(['rendererAlive'])};
 const desktop={initialEnvironment:{platform:'darwin'},initialZoomFactor:1.25,subscribe:listeners=>{Object.assign(desktopListeners,listeners);log.push(['desktopSubscribe',Object.keys(listeners)])},reportClientFailure:async()=>{},reportReactionAck:async()=>{},getCursorAuthStatus:async()=>({kind:'logged-in'}),reportAgentsUnreachable:async()=>{}};
 const transport={source:{},beginIdentityChange:()=>log.push(['identity','begin']),failIdentityChange:()=>log.push(['identity','failed']),completeIdentityChange:value=>log.push(['identity','complete',value])};
 const client={theme:{snapshots:store('theme',{resolved:'dark',systemAccentColor:'blue'})},experiments:{snapshots:store('experiments',{featureGates:{sand_xvf_typeface:true}})},language:{snapshots:store('language',{resolved:'en'})},boot:store('boot',{status:'restoring',generation:1}),desktopWindow:{subscribeWindowFocus:listener=>{focus=listener;log.push(['windowFocusSubscribe'])}},computerRebuild:{lockSnapshots:store('lock',{isLocked:false,kind:'unlocked'})},listenerIntegrations:{completeScmConnect:async value=>{log.push(['scmConnect',value])}},start:()=>log.push(['start']),noteWindowFocus:()=>log.push(['focus']),selection:{snapshots:{}},roster:{snapshots:{},createAgent:async()=>({agent:{id:'x'}})},team:{snapshots:{}},teamPolicy:{snapshots:{}},usageSummary:{snapshots:{}},unifiedBilling:{isDevScenarioArmed:false},foreverBox:{diskPressureSnapshots:store('disk',null)},mcp:{serverSnapshots:store('mcp',{status:'loading'}),authCompletionsSnapshots:store('auth',[])},firstRun:{snapshots:{}},transcript:{loadedAgentCount:()=>0,loadedTranscriptEntryCount:()=>0},updatePrompt:{},updateStatus:{snapshots:{}}};
 const telemetry={load:()=>log.push(['telemetryLoad']),setTag:()=>{}};
 const waking={noteAccountChange:()=>log.push(['accountChanged'])};
 const context={window,document,navigator:window.navigator,performance:{mark:name=>log.push(['mark',name])},URL,Blob,Uint8Array,Audio:function Audio(){},Promise,Map,Error,console,importMeta:{url:'file:///renderer/assets/index-ZYxf-aBb.js'},__vite__mapDeps:values=>values,ZRe:100,QRe:3000,li:clock};
 const ast=parse(entry,{sourceType:'module'});
 traverse(ast,{ReferencedIdentifier(path){if(!path.scope.hasBinding(path.node.name)&&!(path.node.name in context))context[path.node.name]=(...args)=>{log.push([path.node.name,...normalize(args)]);};}});
 Object.assign(context,{tie:function tie(){},rle:()=>{log.push(['rle']);return telemetry},cle:options=>{log.push(['cle']);return {released:Promise.resolve(),noteRootPopulated:()=>log.push(['noteRootPopulated'])}},dle:()=>{log.push(['dle']);return capability},ule:()=>{log.push(['ule']);return desktop},hle:()=>{log.push(['hle']);return transport},yle:()=>{log.push(['yle']);return {}},kle:value=>{options=value;log.push(['kle']);return client},o0e:()=>{log.push(['o0e']);return waking},sa:{tracing:null,runtime:{actions:{open:()=>{}},store:{}}},o:{jsx:(type,props)=>({type:String(type),props}),jsxs:(type,props)=>({type:String(type),props})},I:{StrictMode:'StrictMode'},SW:{createRoot:()=>({render:()=>log.push(['render'])})},Ple:()=>{log.push(['Ple']);return()=>log.push(['devDispose'])},Nle:locale=>{log.push(['Nle',locale]);return Promise.resolve()},Ile:()=> 'en',Fy:{isDeepLink:()=>true},wle:()=>true,_le:()=>({scm:true}),$s:()=>{},Zr:Error,js:(condition,message)=>{assert(condition,message)},Gle:()=>log.push(['Gle'])});
 // Normalize adapters whose args contain root/client cyclic or methods and own call logging.
 for(const name of ['vle','Sle','jle','Cle','Tle','JIe','Rle','i0e','Ele','zle','$le','Ole','Fle','Ble','sie','fle','yie','mle','bie'])context[name]=(...args)=>{log.push([name]);};
 return {context,log,windowListeners,documentListeners,desktopListeners,subscriptions,scheduled,client,transport,getOptions:()=>options,getFocus:()=>focus};
}
const original=harness(),recovered=harness();
// Original cle is already replaced by recovered deferred startup at integration time.
for(const h of [original,recovered]) h.context.cle=options=>{let released=false,resolve;const promise=new Promise(done=>resolve=done);const release=()=>{if(!released){released=true;for(const task of options.tasks)task();resolve();}};const fallback=h.context.li.schedule(options.rootNeverPopulatedFallbackMs,release);return{released:promise,noteRootPopulated:()=>{if(!released){fallback.dispose();h.context.li.schedule(options.settleMs,release);}}};};
vm.runInNewContext(entry.replaceAll('import.meta.url','importMeta.url'),original.context);
recovered.context.bootstrapRenderer=module.exports.bootstrapRenderer;
vm.runInNewContext(adapter.replaceAll('import.meta.url','importMeta.url'),recovered.context);
assert.deepEqual(normalize(original.log),normalize(recovered.log));
function exercise(h){const options=h.getOptions(),values=[];const removeOnline=options.connectivity.subscribe(value=>values.push(['online',value])),removeVisible=options.visibility.subscribe(value=>values.push(['visible',value]));h.windowListeners.online();h.windowListeners.offline();h.context.document.visibilityState='hidden';h.documentListeners.visibilitychange();removeOnline();removeVisible();assert(!h.windowListeners.online&&!h.windowListeners.offline&&!h.documentListeners.visibilitychange);options.onIdentityRestoreBegin();options.onIdentityRestoreFailed();options.onIdentityRestoreComplete({accountSlot:null});options.onIdentityRestoreComplete({accountSlot:'account'});options.onRestoreStage('account-slot');h.desktopListeners['zoom-factor-changed']({factor:2});h.desktopListeners['notification-sound']({sound:'ping'});h.getFocus()();h.client.computerRebuild.lockSnapshots.set({isLocked:true,kind:'locked'});h.getFocus()();h.client.computerRebuild.lockSnapshots.set({isLocked:true,kind:'reconnecting'});h.getFocus()();h.subscriptions.boot();h.windowListeners.pagehide({persisted:true});h.windowListeners.pagehide({persisted:false});h.client.language.snapshots.set({resolved:'fr'});h.subscriptions.language();h.subscriptions.theme();h.subscriptions.experiments();return values;}
assert.deepEqual(exercise(original),exercise(recovered));
assert.deepEqual(normalize(original.log),normalize(recovered.log));
console.log('Renderer entrypoint differential lifecycle passed: startup ordering, browser subscriptions/unsubscription, identity restoration, zoom/sound, focus locks, boot, dev pagehide, locale and theme.');
