import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { parse } from '@babel/parser';
const manifest = JSON.parse(await readFile('src/reconstructed-renderer/entry-manifest.json', 'utf8'));
const sentinel = Symbol.for('react.memo_cache_sentinel');
let caches = new Map();
let state;
let sourceClassification;
let ref;
let hookStates = [];
let stateCursor = 0;
let credentials;
let listenerIntegrations;
let credentialEvents=[];
let stageStore;
const defaults = { default: true };
globalThis.__rendererFixture = {
 c: { c(size) { if (!caches.has(size)) caches.set(size, Array(size).fill(sentinel)); return caches.get(size); } },
 r: { useRef(value) { return ref ??= { current: value }; },
  useSyncExternalStore(_subscribe,get) { return get(); },
  useState(initial) { const index=stateCursor++; if(!(index in hookStates)) hookStates[index]=typeof initial==='function'?initial():initial;return [hookStates[index],value=>{hookStates[index]=value;credentialEvents.push(['setState',index,value]);}]; } },
 u: () => ({ _: descriptor => JSON.stringify(descriptor) }),
 b7: () => ({ teamPolicy: { snapshots: {} }, credentials, listenerIntegrations }),
 bg: (store,select) => select(store.get()),
 bh: snapshot => snapshot.status==='ready'?snapshot.value:snapshot.previous,
 bi: () => stageStore,
 b8: command => command,
 bP: store => typeof store?.get === 'function' ? store.get() : state,
 bQ: defaults,
 bR: defaults,
 b0: 'label-text',
 C: 'checkbox',
 ce: () => sourceClassification,
 j: { jsx: (type, props) => ({ type, props }), jsxs: (type, props) => ({ type, props }) }
};
class FakeElement {
 constructor(key) { this.key = key; }
 getAttribute() { return this.key; }
}
globalThis.HTMLElement = FakeElement;
let moduleCounter = 0;
async function load(path) {
 const result = await build({ entryPoints: [path], write: false, bundle: true, format: 'esm', platform: 'browser', target: 'es2023', plugins: [{ name: 'fixture-imports', setup(api) {
  api.onResolve({ filter: /^\.\// }, args => args.kind === 'entry-point' || args.path.endsWith('debug-metadata.js') ? undefined : { path: args.path, namespace: 'fixture' });
  api.onLoad({ filter: /.*/, namespace: 'fixture' }, () => ({ contents: Object.keys(globalThis.__rendererFixture).map(key => `export const ${key} = globalThis.__rendererFixture.${key};`).join('\n') }));
 } }] });
 return import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text + `\n// ${++moduleCounter}`).toString('base64')}`);
}
const reset = () => { caches = new Map(); ref = undefined; hookStates=[];stateCursor=0;credentialEvents=[]; }; 
let assertions = 0;
const compare = (actual, expected) => { assert.deepEqual(actual, expected); assertions++; };
for (const entry of manifest.entries) {
 const original = await load(`${manifest.targetRoot}/${entry.file}`);
 const rebuilt = await load(entry.typescript);
 compare(Object.keys(rebuilt).sort(), Object.keys(original).sort());
 switch (entry.file) {
  case 'chunk-provider-listener-integrations-CR9f28xA.js': {
   for(const snapshot of [{status:'empty'},{status:'loading'},{status:'failed',failure:'error'},{status:'loading',previous:true},{status:'failed',previous:false},{status:'ready',value:true}]) {
    const store={get:()=>snapshot,subscribe:()=>()=>{}};listenerIntegrations={snapshots:store,slackLink:{snapshots:store},repoAccess:()=>({snapshots:store})};
    for(const key of ['u','c']) {const run=module=>{reset();const first=module[key]();assert.equal(first,module[key]());return first;};compare(run(rebuilt),run(original));}
    for(const repository of [undefined,null,'','repo']) {reset();const expected=original.b(repository);reset();compare(rebuilt.b(repository),expected);}
   }
   for(const pending of [false,true]) {const run=module=>{reset();const events=[];listenerIntegrations={connectPlatform:{isPending:pending,run:(...args)=>events.push(['connect',...args])},disconnectPlatform:{isPending:false,run:(...args)=>events.push(['disconnect',...args])}};const actions=module.a();assert.equal(actions,module.a());actions.connect('slack');actions.reconnect('slack');actions.disconnect('slack');return {events,isPending:actions.isPending};};compare(run(rebuilt),run(original));}
   break;
  }
  case 'chunk-provider-credentials-yP7QsOsy.js': {
   for(const error of [null, {}, 'x', {code:'permission'}, {code:'cancelled'}, {code:'denied'}, {code:'unexpected'}]) compare(rebuilt.d(error),original.d(error));
   for(const snapshot of [{status:'empty'},{status:'loading'},{status:'failed',failure:'oops'},{status:'ready',value:{connected:true}},{status:'loading',previous:{connected:false}}]) {
    const store={get:()=>snapshot,subscribe:()=>()=>{}};
    credentials={statusSnapshots:store,directorySnapshots:store,refresh:()=>Promise.resolve(),approve:()=>{},deny:()=>{}};
    for(const key of ['e','a']) {
     const run=module=>{reset();const first=module[key]();const second=module[key]();assert.equal(first,second);const {refresh,...view}=first;return view;};
     compare(run(rebuilt),run(original));
    }
    compare(rebuilt.u(),original.u());
   }
   for(const mode of ['success','outcome-error','reject']) for(const action of ['c','f']) for(const token of [undefined,'token']) {
    const run=async module=>{
     reset();let stage=null;
     stageStore={subscribe:()=>()=>{},read:()=>stage,set:value=>{stage=value;credentialEvents.push(['stage',value]);},holdConnected:callback=>{credentialEvents.push(['hold']);callback();}};
     const command={isPending:false,run:()=>{}};
     const store={get:()=>({status:'ready',value:{ready:true}}),subscribe:()=>()=>{}};
     credentials={readinessSnapshots:store,sync:command,disconnect:command,connectOAuth:command,cancelOAuth:()=>{},refreshReadiness:()=>{},refresh:()=>{credentialEvents.push(['refresh']);return Promise.resolve();},startMint:request=>{credentialEvents.push(['mint',request]);return mode==='reject'?Promise.reject(new Error('network')):Promise.resolve(mode==='outcome-error'?{ok:false,message:'denied',code:'permission'}:{ok:true,result:'result'});}};
     const controller=action==='c'?module.c(undefined,{onSuccessHoldChange:value=>credentialEvents.push(['held',value]),onSuccessComplete:()=>credentialEvents.push(['complete'])}):module.f();
     let outcome;
     try {outcome=action==='c'?await controller.start({connectionId:'connection'}):await controller.renew({connectionId:'connection',accountUuid:'account',vaultName:'vault',accountEmail:null,accountUrl:'url'},token);}catch(error){outcome={message:error.message,code:error.code};}
     await Promise.resolve();return {outcome,events:credentialEvents};
    };
    compare(await run(rebuilt),await run(original));
   }
   break;
  }
  case 'chunk-grok-bot-secret-problem-text-DKm2VrEb.js': {
   for (const name of ['', 'A', 'lower', '_BAD', 'PATH', 'CURSOR_KEY', 'XCURSOR_SANDBOX', 'SAND_TEST', 'A'.repeat(128), 'A'.repeat(129)]) compare(rebuilt.v(name), original.v(name));
   for (const value of ['', '1234567', '12345678', 'a'.repeat(4096), 'a'.repeat(4097), 'é'.repeat(2048), 'é'.repeat(2049)]) compare(rebuilt.b(value), original.b(value));
   for (const name of ['','PATH','CURSOR_KEY','lower','A'.repeat(129),'XCURSOR_SANDBOX']) { const problem = original.v(name); compare(rebuilt.u().name(problem), original.u().name(problem)); }
   for (const value of ['', 'short', 'x'.repeat(4097)]) { const problem = original.b(value); compare(rebuilt.u().value(problem), original.u().value(problem)); }
   for (const key of ['G','a','c','d']) compare(rebuilt[key], original[key]);
   break;
  }
  case 'chunk-mcp-connector-status-DhhAF8A6.js':
   for (const status of ['connected','disconnected','error','initializing','needsAuth','needsGrant','disabledByTeamAdminPolicy','future','constructor','toString']) { compare(rebuilt.a(JSON.stringify,status), original.a(JSON.stringify,status)); compare(rebuilt.g(status),original.g(status)); } break;
  case 'chunk-bot-template-details-focus-BkZ83BHB.js': {
   const first = new FakeElement('one'), second = new FakeElement('two');
   const incoming = { querySelectorAll: () => [first, {}, second] };
   for (const destination of [{kind:'row',paneKey:'two'},{kind:'row',paneKey:'absent'},{kind:'header'}]) for (const back of [first, null]) for (const title of [second, null]) compare(rebuilt.r(destination,{incoming,back,title,fallback:first}), original.r(destination,{incoming,back,title,fallback:first}));
   compare(rebuilt.r({kind:'row'},{fallback:null}),original.r({kind:'row'},{fallback:null})); break;
  }
  case 'chunk-load-failure-copy-g-dfAdrV.js': compare(rebuilt.u(),original.u()); break;
  case 'chunk-cloud-agent-artifact-open-telemetry-Dl7Oj7Oq.js':
   for (sourceClassification of [null,{bcId:'original',kind:'file'}]) for (const id of [null,'mapped']) {
    const run = module => { const events=[]; module.reportCloudAgentArtifactStage({source:{},stage:'open',agentId:'agent',knownRunId: () => id,report: event => events.push(event)}); return events; };
    compare(run(rebuilt),run(original));
   } break;
  case 'chunk-provider-team-policy-CBjUAi-4.js':
   for (state of [{status:'empty'},{status:'unavailable'},{status:'loading'},{status:'failed'}, ...[false,true].flatMap(localEgressAllowed => [false,true].flatMap(autoReviewTeamEnforced => ['ready','loading','failed'].map(status => ({status,[status==='ready'?'value':'previous']:{localEgressAllowed,autoReviewTeamEnforced,autoReviewTeamRules:['rule'],localToolPermissionCeiling:'ceiling'}}))))]) {
    const run = module => { reset(); const first=module.c(); const second=module.c(); assert.equal(first,second); return [module.u(),module.a(),module.b(),first]; };
    compare(run(rebuilt),run(original));
   } break;
  case 'chunk-team-agent-rows-BhWKSjqA.js': {
   const rows=[{teamRank:2,createdAt:1,viewerIsOwner:true},{teamRank:1,createdAt:2,viewerIsOwner:false,ownerDisplayName:'  Ada Lovelace  ',title:' Hi ',description:'NOTE'},{createdAt:4,viewerIsOwner:false,ownerDisplayName:'Jean e\u0301mile 123'},{createdAt:3,ownerDisplayName:'Unknown'},{createdAt:2,viewerIsOwner:false,ownerDisplayName:'    '}];
   compare(rebuilt.o(rows),original.o(rows));
   for (const row of rows) { compare(rebuilt.b(row),original.b(row)); compare(rebuilt.t(row),original.t(row)); for (const includeTitle of [false,true]) { compare(rebuilt.a(row,includeTitle),original.a(row,includeTitle)); for (const query of ['','HI',' lovelace ','note','none']) compare(rebuilt.m(row,query,()=>'Agent',includeTitle),original.m(row,query,()=>'Agent',includeTitle)); } } break;
  }
  case 'chunk-use-active-option-scroll-B1hXdW5d.js': {
   const run = module => { reset(); const events=[]; const controller=module.u(); assert.equal(controller,module.u()); const element={scrollIntoView: x=>events.push(x)}; controller.activeOptionRef(element); controller.markKeyboardNavigation(); controller.activeOptionRef(null); controller.activeOptionRef(element); controller.activeOptionRef(element); controller.markKeyboardNavigation(); controller.activeOptionRef(element); return events; }; compare(run(rebuilt),run(original)); break;
  }
  case 'chunk-card-check-row-BW31sDfY.js': {
   const run = module => { reset(); const props={id:'check',name:'name',label:'Label',isChecked:true}; const first=module.C(props); assert.equal(first,module.C(props)); return [first,module.C({...props,isRequired:true}),module.C({...props,isDisabled:true}),module.C.d]; }; compare(run(rebuilt),run(original)); break;
  }
 }
}
console.log(`Renderer TypeScript: ${manifest.entries.length} exact export surfaces; ${assertions} differential comparisons passed.`);
