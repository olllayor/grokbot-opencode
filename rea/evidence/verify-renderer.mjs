import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {parse} from '@babel/parser';
import {transform} from 'esbuild';
async function loadTS(file) {
  const {code} = await transform(fs.readFileSync(file, 'utf8'), {loader: 'ts', format: 'cjs', target: 'es2022'});
  const module = {exports: {}};
  vm.runInNewContext(code, {module, exports: module.exports, Set, Map, Error, JSON, encodeURIComponent, decodeURIComponent});
  return module.exports;
}
function shipped(file, names, prelude = '') {
  const source = fs.readFileSync(file, 'utf8');
  const ast = parse(source, {sourceType:'module'});
  const functions = ast.program.body.filter(node => node.type === 'FunctionDeclaration' && names.includes(node.id?.name));
  assert.equal(functions.length, names.length);
  return vm.runInNewContext(`${prelude}\n${functions.map(node => source.slice(node.start, node.end)).join('\n')}\n({${names.join(',')}})`, {Error, JSON, encodeURIComponent, decodeURIComponent});
}
const startupFile='rea/recovered/dist/renderer/assets/index-ZYxf-aBb.js', appFile='rea/recovered/dist/renderer/assets/index.eager-app-Cj5f8Gby.js';
const boot=await loadTS('src/renderer/boot-presentation.ts');
const originalBoot=shipped(startupFile,['x6','BRe','GRe','VRe']);
const normalize=value=>JSON.parse(JSON.stringify(value));
let bootCases=0;
for (const status of ['restoring','ready','starting']) for (const generation of [1,2]) for (const firstBoxPhase of ['reached','restored-roster','connectivity-failure','grace-elapsed','waiting']) for (const firstRunPhase of ['checking','probing','shell','connecting']) for (let bits=0;bits<256;bits++) {
 const state={boot:{status,generation},bootStatus:status,isLocaleSettled:!!(bits&1),isAccountAuthorizedForAppView:!!(bits&2),hasAccountSlot:!!(bits&4),isShowingRestoredRoster:!!(bits&8),isPrivacyBlocked:!!(bits&16),isClientPaused:!!(bits&32),isComputerRebuildLocked:!!(bits&64),previewState:bits&128?'retired':'available',firstBoxPhase,firstRunPhase,rosterLoadState:'loading',rosterFailure:null,boxHostPhase:'ready'};
 assert.equal(boot.shouldShowFirstBoxFailure(state),originalBoot.x6(state));
 assert.equal(boot.canRevealAppView(state),originalBoot.BRe(state));
 assert.deepEqual(normalize(boot.resolveBootPresentation(state,1)),normalize(originalBoot.GRe(state,1)));
 assert.equal(boot.resolveBootBusyLabel(state),originalBoot.VRe(state));
 bootCases++;
}
const keys=await loadTS('src/renderer/persistence-keys.ts');
const originalKeys=shipped(appFile,['kp','YL','Pb','Hs','el','ZL','ly','wd','QL'],`const Aa='sand.client.slice.',To='account'; function st(x,msg){if(!x)throw new Error(msg());} function fe(x){return typeof x==='object'&&x!==null&&!Array.isArray(x)} function ni(x){try{return JSON.parse(x)}catch{return undefined}}`);
for(const value of ['a.b','name@example.com','space value','%2E','日本語','']) {
 assert.equal(keys.encodeKeyPart(value),originalKeys.Pb(value));
 assert.equal(keys.accountPrefix(value),originalKeys.el(value));
 assert.equal(keys.decodeSubKey(value),originalKeys.ly(value));
 for(const sensitive of [true,false]) {
  const definition={slice:'composer-drafts',schemaVersion:1,scope:'client-persisted',accountSensitive:sensitive};
  if(sensitive&&value==='') {assert.throws(()=>keys.sliceKey(definition,value));continue;}
  assert.equal(keys.sliceKey(definition,value),originalKeys.Hs(definition,value));
 }
}
for(const raw of [null,undefined,'bad','null','[]','{}','{"schemaVersion":1,"value":null}','{"schemaVersion":2,"value":[1]}','{"schemaVersion":"1","value":0}']) assert.deepEqual(normalize(keys.parseEnvelope(raw)),normalize(originalKeys.wd(raw)));
for(const policy of [{include:['sand.'],exclude:['sand.client.slice.account.']},{include:['sand.','sand.client.slice.account.a.'],exclude:['sand.client.slice.account.','sand.client.slice.account.a.transcript.replicas.']}]) for(const key of ['sand.','sand.client.slice.account.','sand.client.slice.account.a.','sand.client.slice.account.a.transcript.replicas.x','other']) {
 assert.equal(keys.matchesStagePolicy(policy,key),originalKeys.kp(policy,key));
 assert.equal(keys.includesWholePrefix(policy,key),originalKeys.YL(policy,key));
}
for(const error of [new Error('ENOSPC disk full'),new Error('ordinary'),Object.assign(new Error('x'),{name:'QuotaExceededError'}),{message:'ENOSPC'}]) assert.equal(keys.isQuotaFailure(error),originalKeys.QL(error));
const deferred=await loadTS('src/renderer/deferred-startup.ts');
const originalDeferred=shipped(appFile,['xFe']);
function simulate(factory){const jobs=[],calls=[]; const clock={schedule:(delay,task)=>{const job={delay,task,disposed:false};jobs.push(job);return {dispose(){job.disposed=true;}}}}; const handle=factory({clock,settleMs:100,rootNeverPopulatedFallbackMs:3000,tasks:[()=>calls.push('first'),()=>calls.push('second')]});handle.noteRootPopulated();handle.noteRootPopulated();for(const job of jobs)if(!job.disposed)job.task();handle.noteRootPopulated();return {jobs:jobs.map(({delay,disposed})=>({delay,disposed})),calls};}
assert.deepEqual(simulate(deferred.deferStartupTasks),simulate(originalDeferred.xFe));
console.log(`Renderer differential verification passed: ${bootCases} boot states, persistence key/envelope/stage/quota cases, deferred startup lifecycle.`);
const {build}=await import('esbuild');
const registryBundle=await build({entryPoints:['src/renderer/persistence-registry.ts'],bundle:true,write:false,platform:'node',format:'cjs',target:'es2022'});
const registryModule={exports:{}};
vm.runInNewContext(registryBundle.outputFiles[0].text,{module:registryModule,exports:registryModule.exports,Set,Map,Error,JSON,encodeURIComponent,decodeURIComponent});
const appSource=fs.readFileSync(appFile,'utf8');
const registryClass=parse(appSource,{sourceType:'module'}).program.body.find(node=>node.type==='ClassDeclaration'&&node.id.name==='JL');
const originalRegistry=vm.runInNewContext(`${appSource.slice(registryClass.start,registryClass.end)}\nJL`,{
 Map,Set,Error,JSON,Promise,st:(value,message)=>{if(!value)throw new Error(message());},gd:value=>['composer-drafts'].includes(value)?value:'other',fs:{clientSliceCorrupt:()=>({code:'SAND-E0700'}),clientSliceIoError:({errno})=>({code:'SAND-E0701',errno}),clientSliceQuotaExceeded:()=>({code:'SAND-E0702'})},cy:()=>({code:'SAND-E0701',errno:'E_OTHER'}),QL:originalKeys.QL,wd:originalKeys.wd,Hs:originalKeys.Hs,ZL:originalKeys.ZL,ly:originalKeys.ly,el:originalKeys.el,To:'account',Aa:'sand.client.slice.',oy:'sand.',XL:['transcript.replicas'],iy:['transcript.cloud-agent-peers'],ay:slice=>({slice,schemaVersion:1,scope:'client-persisted',accountSensitive:true})
});
async function registryScenario(Registry){const data=new Map(),reports=[],stages=[];const port={read:async key=>data.get(key)??null,write:async(key,value)=>{data.set(key,value)},remove:async key=>{data.delete(key)},listKeys:async prefix=>[...data.keys()].filter(key=>key.startsWith(prefix)),stage:policy=>{stages.push(policy);return 'staged'}};const registry=new Registry(port,result=>reports.push(result));const slice=registry.register({slice:'composer-drafts',schemaVersion:3,scope:'client-persisted',accountSensitive:true});await slice.write({accountSlot:'user.a',value:{text:'draft'}});const receipt=await slice.read('user.a');receipt.receipt.classify('ok');receipt.receipt.classify('corrupt');await slice.readOrAbsent('other');const map=registry.registerMap({slice:'transcript.cloud-agent-peers',schemaVersion:1,scope:'client-persisted',accountSensitive:true});await map.writeSub({accountSlot:'user.a',subKey:'agent.1',value:{x:1}});await map.writeSub({accountSlot:'user.a',subKey:'agent%2',value:{x:2}});const subKeys=await map.listSubKeys('user.a'),read=await map.readSub({accountSlot:'user.a',subKey:'agent.1'});registry.stage('user.a');const retained=await registry.retireSegments('user.a',async()=>false),retired=await registry.retireSegments('user.a');await registry.invalidateAccountSlot('user.a');return normalize({data:[...data],reports,stages,subKeys,read,retained,retired});}
assert.deepEqual(await registryScenario(registryModule.exports.PersistenceRegistry),await registryScenario(originalRegistry));
console.log('Renderer persistence registry differential lifecycle passed.');
const account=await loadTS('src/renderer/account-boot.ts');
const originalAccount=shipped(appFile,['nn','Qhe','fce','pce'],`const ER={schemaVersion:1};`);
for(const kind of ['logged-in','logged-out','logging-in'])for(const authId of [undefined,null,'','id'])for(const email of [undefined,null,'','mail']){
 const state={kind,authId,email}; assert.equal(account.resolveAuthAccountSlot(state),originalAccount.nn(state)); assert.deepEqual(normalize(account.resolveAccountIdentity(state)),normalize(originalAccount.Qhe(state)));
}
for(const kind of ['absent','corrupt','envelope'])for(const value of [null,'','slot',123,{}])for(const schemaVersion of [1,2]){
 const make=()=>{const classifications=[];return {classifications,result:{kind,envelope:{value,schemaVersion},receipt:{classify:classification=>classifications.push(classification)}}};};
 const ts=make(),js=make();assert.deepEqual(normalize(account.readPersistedAccountSlot(ts.result)),normalize(originalAccount.fce(js.result))); assert.deepEqual(ts.classifications,js.classifications);assert.equal(account.isPersistedAccountSlotCurrent(ts.result,'slot'),originalAccount.pce(js.result,'slot'));
}
const voice=await loadTS('src/renderer/voice-settings.ts');
const originalVoice=shipped(appFile,['USe'],`const Uh={inputDeviceId:null};`);
for(const value of [null,undefined,{},[],{inputDeviceId:null},{inputDeviceId:''},{inputDeviceId:'mic'},{inputDeviceId:123}])assert.deepEqual(normalize(voice.parseVoiceSettings(value)),normalize(originalVoice.USe(value)));
const rawVoice=shipped(appFile,['GSe','USe'],`const Rv={slice:'voice-settings',schemaVersion:1,scope:'client-persisted',accountSensitive:false};const Uh={inputDeviceId:null}; function ke(seed){return __snapshots(seed)} function sn(){return __queue()}`);
// Evaluate factory again with injected shipped snapshot/queue adapters.
const voiceDecl=parse(appSource,{sourceType:'module'}).program.body.filter(node=>node.type==='FunctionDeclaration'&&['GSe','USe'].includes(node.id.name)).map(node=>appSource.slice(node.start,node.end)).join('\n');
function voiceHarness(){const writes=[],clears=[],classifications=[],changes=[];let value;return {writes,clears,classifications,changes,createSnapshots(seed){value=seed;return {get:()=>value,set:next=>{value=next;changes.push(next)},subscribe:()=>()=>{}}},createQueue(){return {post:task=>task(),settled:async()=>{}}},registry:{register:()=>({read:async()=>({kind:'envelope',envelope:{schemaVersion:1,value:{inputDeviceId:'restored'}},receipt:{classify:status=>classifications.push(status)}}),write:async args=>{writes.push(args)},clear:async slot=>{clears.push(slot)}})}};}
const vh1=voiceHarness(),vh2=voiceHarness();
const shippedFactory=vm.runInNewContext(`const Rv={slice:'voice-settings',schemaVersion:1,scope:'client-persisted',accountSensitive:false};const Uh={inputDeviceId:null};${voiceDecl};GSe`,{ke:vh2.createSnapshots,sn:vh2.createQueue});
const typedVoice=voice.createVoiceSettings(vh1),shippedVoice=shippedFactory(vh2);
for(const model of [typedVoice,shippedVoice]){await model.restore();model.setInputDeviceId('chosen');model.setInputDeviceId('chosen');model.dispose();model.setInputDeviceId('ignored');await model.restore();}
assert.deepEqual(normalize({writes:vh1.writes,clears:vh1.clears,classifications:vh1.classifications,changes:vh1.changes}),normalize({writes:vh2.writes,clears:vh2.clears,classifications:vh2.classifications,changes:vh2.changes}));
console.log('Account boot and voice settings differential verification passed.');
