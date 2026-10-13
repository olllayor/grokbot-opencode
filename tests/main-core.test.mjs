import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import {parse} from '@babel/parser';
import generateModule from '@babel/generator';
import {build} from 'esbuild';
const generate=generateModule.default??generateModule;
const tree=parse(fs.readFileSync('rea/recovered/dist/electron-main/main-core.cjs','utf8'),{sourceType:'script'});
const selected=['RU','TU','PM','aM','iM','sM','e0','n0','Ym','WM','ZM','QM'];
const source=tree.program.body.filter(node=>node.type==='FunctionDeclaration'&&selected.includes(node.id.name)).map(node=>generate(node).code).join('\n');
const original=vm.runInNewContext(`${source}\n({${selected.join(',')}})`,{Promise,Set,URL,Math,ho:{width:512,height:520},ya:'sand.desktop.startup.',Lne:/\s(?:src|href)="\.\/(assets\/[^"]+\.(?:css|js))"/g,Mne:-3,$T:'preload-sand-dev.cjs',Ane:'preload.cjs',jM:{default:path},kne:'icon.png',Kt:(value)=>{if(!value)throw new Error('invariant');},Ya:({clock})=>({settled:()=>new Promise(done=>clock.schedule(0,done))}),Ie:{desktopStartupFailed:({phase})=>({phase,code:'SAND-E0601'}),desktopStartupStuck:({phase})=>({phase,code:'SAND-E0602'})},kn:value=>({error_code:value.code,error_domain:'desktop',error_retryable:value.code==='SAND-E0602'?'true':'false',phase:value.phase})});
async function module(name){const result=await build({entryPoints:[`src/main-core/${name}.ts`],bundle:true,platform:'node',format:'esm',write:false});return import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);}
const startup=await module('desktop-startup'),remainder=await module('remainder'),hardware=await module('hardware'),state=await module('window-state'),policy=await module('window-policy');
const plain=value=>JSON.parse(JSON.stringify(value));
test('window geometry restoration matches shipped overlap/clamping decisions',()=>{
 for(const bounds of [{x:0,y:0,width:1040,height:760},{x:-2000,y:0,width:100,height:20},{x:1000,y:600,width:2000,height:2000}])for(const workAreas of [[],[{x:0,y:0,width:1440,height:900}],[{x:-1440,y:0,width:1440,height:900},{x:0,y:0,width:1440,height:900}]])for(const isMaximized of [true,false]){const input={persisted:{version:1,normalBounds:bounds,isMaximized},workAreas};assert.deepEqual(state.restoreWindowBounds(input),plain(original.PM(input)));}
 assert.equal(state.parseWindowState({version:1,normalBounds:{x:0,y:0,width:0,height:5},isMaximized:false}),null);
 assert.deepEqual(state.parseWindowState({version:1,normalBounds:{x:0,y:0,width:5,height:5,extra:3},isMaximized:false,extra:3}),{version:1,normalBounds:{x:0,y:0,width:5,height:5},isMaximized:false});
});
test('hardware and window policy match shipped platform defaults',()=>{
 for(const platform of ['darwin','win32','linux'])for(const storedPreference of [undefined,null,true,false])assert.equal(hardware.hardwareAccelerationEnabled({platform,storedPreference}),original.aM({platform,storedPreference}));
 for(const isPackaged of [true,false])for(const devCapability of [true,false])assert.equal(policy.preloadFilename({isPackaged,devCapability}),original.Ym({isPackaged,devCapability}));
 for(const install of [null,{kind:'appimage'},{kind:'other'}])assert.equal(policy.v8CachePolicy(install),original.ZM(install));
 for(const urls of [['https://a/path?x=1','https://a/path#hash'],['bad','bad'],['https://a/path','https://b/path']])assert.equal(policy.sameDocumentLocation(...urls),original.QM(...urls));
});
test('desktop startup lifecycle telemetry and failure/stuck arbitration match shipped functions',async()=>{
 async function run(create,scenario){let now=0,watchdog;const log=[];const deps={monotonicNow:()=>now,report:(...args)=>log.push(args),captureFailure:(...args)=>log.push(['capture',...args]),markTimeline:name=>log.push(['mark',name]),scheduleStuck:callback=>watchdog=callback,translated:'false',bootCohort:()=>({hwAccel:'true',osSandbox:'true'}),bootLanguage:()=>({preference:'en',resolved:'en'}),certificateRecoveryStarted:()=>false};const controller=create(deps);controller.markPhase('window');controller.armStuckWatchdog();controller.armStuckWatchdog();now=50;
 if(scenario==='ready'){await controller.trackWindowLoad(Promise.resolve());controller.noteReady();watchdog();controller.noteRendererAlive();controller.noteFailed('late');}
 if(scenario==='failed'){await controller.trackWindowLoad(Promise.reject('load failure'));controller.noteReady();watchdog();}
 if(scenario==='cancel'){controller.cancel();controller.noteReady();watchdog();}
 return log;}
 for(const scenario of ['ready','failed','cancel'])assert.deepEqual(await run(startup.createDesktopStartup,scenario),plain(await run(original.RU,scenario)));
});
test('remainder gating matches shipped asset/document/quit behavior',async()=>{
 assert.deepEqual(remainder.startupAssets('<script src="./assets/a.js"></script><link href="./assets/a.css"><img src="./assets/a.png">'),plain(original.e0('<script src="./assets/a.js"></script><link href="./assets/a.css"><img src="./assets/a.png">')));
 for(const create of [original.n0,remainder.waitForRemainder])for(const scenario of ['assets','document','failure','quit']){const callbacks={},queued=[];const window={onResponseCompleted:callback=>callbacks.response=callback,onceDocumentSettled:callback=>callbacks.document=callback,onDocumentLoadFailed:callback=>callbacks.failure=callback,onceClosed:callback=>callbacks.closed=callback};const due=create({window,app:{onceBeforeQuit:callback=>callbacks.quit=callback},startupAssets:['assets/a.js','assets/a.css'],clock:{schedule:(_,callback)=>queued.push(callback)}});if(scenario==='assets'){callbacks.response('https://a/assets/a.js');assert.equal(queued.length,0);callbacks.response('https://a/assets/a.css');}if(scenario==='document')callbacks.document();if(scenario==='failure'){callbacks.failure({isMainFrame:true,errorCode:-3});assert.equal(queued.length,0);callbacks.failure({isMainFrame:true,errorCode:-2});}if(scenario==='quit')callbacks.quit();queued.forEach(callback=>callback());assert.equal(await due,scenario==='quit'?'quitting':'due');}
});
