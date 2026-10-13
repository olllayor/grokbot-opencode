import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import * as fs from 'node:fs';
import * as fsp from 'node:fs/promises';
import crypto from 'node:crypto';
import http from 'node:http';
import os from 'node:os';
import path from 'node:path';
import { parse } from '@babel/parser';
import { build } from 'esbuild';

const require = createRequire(import.meta.url);
const root = path.resolve('.');
const tree = parse(await fsp.readFile('rea/recovered/dist/electron-main/main-app.cjs', 'utf8'), { sourceType: 'script' });
const functions = new Map(tree.program.body.filter(n => n.type === 'FunctionDeclaration').map(n => [n.id.name, n]));
const original = await fsp.readFile('rea/recovered/dist/electron-main/main-app.cjs', 'utf8');
const names = ['agr','sgr','yot','_ot','Eot','bot','Mot','dgr','ugr','pgr','fgr','mgr','Pot','ggr','Agr','yw','wot','Sw','tie'];
const selected = names.map(name => { const node = functions.get(name); assert.ok(node, name); return original.slice(node.start,node.end); });
const classNode = tree.program.body.filter(n=>n.type==='VariableDeclaration').flatMap(n=>n.declarations).find(n=>n.id.name==='A1');
selected.push('var A1 = ' + original.slice(classNode.init.start, classNode.init.end));
await fsp.mkdir('rea/evidence/rea-input/update', {recursive:true});
await fsp.writeFile('rea/evidence/rea-input/update/update.cjs', selected.join('\n'));
await fsp.writeFile('rea/evidence/rea-input/update/provenance.json',JSON.stringify({artifact:'dist/electron-main/main-app.cjs',sha256:crypto.createHash('sha256').update(original).digest('hex'),ranges:names.map(name=>({symbol:name,start:functions.get(name).start,end:functions.get(name).end})),limitations:['Only selected inert functions; imports/other services outside scope.']},null,2));
const fakePolicy=()=>({schedule:()=>({elapsed:Promise.resolve(),dispose(){}})});
class DownloadError extends Error {name='SandUpdateDownloadError'}
class IntegrityError extends DownloadError {name='SandUpdateIntegrityError'}
const errors=[];
const dependencies={createRetryPolicy:fakePolicy,elapsedMs:(start,end)=>Math.max(0,end-start),realClock:{monotonicNow:()=>0},findSystemErrno:e=>e?.code,isMissingPathError:e=>e?.code==='ENOENT',DownloadError,IntegrityError,reportDesktopEdgeFailure:(...args)=>errors.push(args)};
const context=vm.createContext({require,process,console,URL,Date,Promise,Error,Set,fetch,Response,Headers,
  Sot:600,eie:{errorLogTag:String},Tot:crypto,y1:fs,Ps:fsp,Fm:dependencies,Rot:dependencies,_w:dependencies,__:DownloadError,E_:IntegrityError,kot:15,cgr:60000,lgr:new Set(['EPERM','EBUSY','EACCES']),h1:fs,Cot:http,vot:{invariant(c,m){assert.ok(c,m)}},Iot:{SAND_PRODUCT_DISPLAY_NAME:'Grok Bot'},});
// Source fixture imports are inert; only the explicitly selected declarations run in the VM.
vm.runInContext(selected.join('\n')+'\nthis.original={'+names.join(',')+',A1};',context);
const shipped=context.original;
async function compiled(entry) {
 const result=await build({entryPoints:[entry],bundle:true,write:false,platform:'node',format:'cjs'});
 const module={exports:{}};vm.runInNewContext(result.outputFiles[0].text,{require,module,exports:module.exports,process,console,Buffer,URL,Response,Headers,fetch,setTimeout,clearTimeout});return module.exports;
}
import { createRequire } from 'node:module';

const idle=await compiled('src/update/idle.ts');
const download=await compiled('src/update/download.ts');
const feed=await compiled('src/update/feed-server.ts');
const normalize=value=>JSON.parse(JSON.stringify(value));
test('idle update gates and periodic lifecycle match shipped code',async()=>{
 for(const auto of [false,true]) for(const staged of [false,true]) for(const screenLocked of [false,true]) for(const screensaverActive of [false,true]) for(const seconds of [0,599,600,601]) for(const kind of ['confirmed-idle','busy','unavailable']) {
  const state={autoUpdateWhenIdle:auto,updateStaged:staged,screenLocked,screensaverActive,systemIdleSeconds:seconds,idleThresholdSeconds:600,hostIdle:{kind}};
  assert.equal(idle.canApplyIdleUpdate(state),shipped.yot(state));
 }
 for(const outcome of ['skipped','relaunched','error']) {
  async function run(fn){let calls=[];await fn({applyWhenIdle:async()=>{calls.push('apply');if(outcome==='error')throw Error('bad');return outcome},cancelRearm:()=>calls.push('cancel'),isDisposed:()=>false,refreshFeed:async()=>calls.push('refresh'),log:m=>calls.push(m)},String);return calls;}
  assert.deepEqual(await run(idle.periodicUpdateCheck),await run(shipped.Eot));
 }
});
test('response validators and Content-Range parsing match shipped code',()=>{
 for(const range of [null,'bytes 3-5/6','bytes 3-5/*','bytes 3-5/x','bytes 1-0/2']) assert.deepEqual(normalize(download.parseContentRange(range)),normalize(shipped.Agr(range)));
 for(const headers of [{},{etag:'W/"weak"','last-modified':'yesterday'},{etag:'"strong"'},{'last-modified':'yesterday'}])assert.equal(download.responseValidator(new Headers(headers)),shipped.ggr(new Headers(headers)));
});
test('fresh and resumed downloads match bytes, hash, progress, requests and cleanup',async()=>{
 for(const resumed of [false,true]) {
  async function run(fn){const dir=await fsp.mkdtemp(path.join(os.tmpdir(),'grokbot-download-'));const partialPath=path.join(dir,'partial'),destinationPath=path.join(dir,'final');const requests=[],progress=[];
   try{if(resumed){await fsp.writeFile(partialPath,'abc');await fsp.writeFile(partialPath+'.resume','https://update.invalid/app\n"abc"');}
    const options={url:'https://update.invalid/app',partialPath,destinationPath,onProgress:p=>progress.push(normalize(p)),fetchImpl:async(_url,init)=>{requests.push(normalize(init.headers??{}));return new Response(resumed?'def':'abcdef',{status:resumed?206:200,headers:resumed?{'content-range':'bytes 3-5/6'}:{'content-length':'6',etag:'"abc"'}})}};
    const result=await fn(options,dependencies);return {result:normalize(result),bytes:await fsp.readFile(destinationPath,'utf8'),progress,requests,files:await fsp.readdir(dir)};
   }finally{await fsp.rm(dir,{recursive:true,force:true});}}
  assert.deepEqual(await run(download.downloadUpdate),await run(shipped.Mot));
 }
});
test('integrity and unexpected range failures preserve shipped cleanup/error semantics',async()=>{
 for(const scenario of ['hash','range']) {
  async function run(fn){const dir=await fsp.mkdtemp(path.join(os.tmpdir(),'grokbot-download-negative-'));const partialPath=path.join(dir,'partial'),destinationPath=path.join(dir,'final');try{
   const options={url:'https://update.invalid/app',partialPath,destinationPath,...(scenario==='hash'?{sha256:'0'.repeat(64)}:{}),fetchImpl:async()=>new Response('abcdef',{status:scenario==='range'?206:200,headers:{'content-range':'bytes 9-14/15',etag:'"abc"'}})};
   try{await fn(options,dependencies);assert.fail('expected rejection')}catch(error){return {name:error.name,message:error.message,files:await fsp.readdir(dir)}};
  }finally{await fsp.rm(dir,{recursive:true,force:true});}}
  assert.deepEqual(await run(download.downloadUpdate),await run(shipped.Mot));
 }
});
test('windows placement retries only transient errors with matching policy',async()=>{
 async function run(fn){let count=0,scheduled=[];const deps={...dependencies,createRetryPolicy:options=>{scheduled.push(options.name);return {schedule:n=>{scheduled.push(n);return {elapsed:Promise.resolve(),dispose(){}}}}}};
 const options={partialPath:'from',destinationPath:'to',platform:'win32',rename:async()=>{if(++count<3)throw Object.assign(Error('busy'),{code:'EBUSY'})}};
 await fn(options,deps);return {count,scheduled};}
 // The original lexical retry dependency is replaceable in the isolated fixture.
 let count=0,scheduled=[];context.Fm={...dependencies,createRetryPolicy:options=>{scheduled.push(options.name);return {schedule:n=>{scheduled.push(n);return {elapsed:Promise.resolve(),dispose(){}}}}}};
 await shipped.fgr({partialPath:'from',destinationPath:'to',platform:'win32',rename:async()=>{if(++count<3)throw Object.assign(Error('busy'),{code:'EBUSY'})}});
 assert.deepEqual(await run(download.placeDownload),{count,scheduled});
});
test('Squirrel feed route/status/ZIP behavior matches shipped server',async()=>{
 const dir=await fsp.mkdtemp(path.join(os.tmpdir(),'grokbot-feed-'));const zipPath=path.join(dir,'update.zip');await fsp.writeFile(zipPath,'zip-fixture');
 async function run(Server){const instance=new Server({productName:'Grok Bot',invariant:(c,m)=>assert.ok(c,m)});try{const url=await instance.start({zipPath,version:'0.66.0',pubDate:'2026-10-01'});const response=await fetch(url+'?x=1');const body=await response.json();const zip=await fetch(body.url);const wrongMethod=await fetch(url,{method:'POST'});const missing=await fetch(new URL('/missing',url));return {status:response.status,cache:response.headers.get('cache-control'),body:{...body,url:new URL(body.url).pathname},zip:await zip.text(),length:zip.headers.get('content-length'),wrongMethod:wrongMethod.status,missing:missing.status};}finally{instance.stop();}}
 try{assert.deepEqual(await run(feed.UpdateFeedServer),await run(shipped.A1));}finally{await fsp.rm(dir,{recursive:true,force:true});}
});
