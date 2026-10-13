import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { build } from 'esbuild';
const require = createRequire(import.meta.url);
const originalSource = fs.readFileSync(new URL('../rea/evidence/main-readable.cjs', import.meta.url), 'utf8');
const original = vm.runInNewContext(`${originalSource.slice(0, originalSource.indexOf('var et ='))}\n({parse:me,resolve:F,errorCode:y,status:Je,atomicWrite:V,prune:Ze,start:te,load:ee});`, { require: name => name === 'electron' ? {} : require(name), process, console, Buffer, Error, Promise, Set, Map });
async function importTS(name) {
  const result = await build({ entryPoints: [path.resolve(`src/electron-main/${name}.ts`)], bundle: true, platform: 'node', format: 'esm', write: false });
  return import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);
}
const userData = await importTS('user-data'), cache = await importTS('code-cache'), atomic = await importTS('atomic-write'), startup = await importTS('startup');
const plain = value => JSON.parse(JSON.stringify(value));
test('user-data parsing matches shipped bootstrap across precedence and malformed arguments', () => {
  for (const args of [[], ['--user-data-dir'], ['--user-data-dir','--foo'], ['--user-data-dir',''], ['--user-data-dir='], ['--user-data-dir= ../data '], ['--user-data-dir','/a','--user-data-dir=/b']]) {
    for (const env of [{}, { SAND_USER_DATA_DIR: ' relative ' }, { SAND_USER_DATA_DIR: '/absolute' }]) {
      assert.equal(userData.parseUserDataArgument(args), original.parse(args));
      assert.equal(userData.resolveUserDataDirectory(args, env, '/tmp/work'), original.resolve(args, env, '/tmp/work'));
    }
  }
});
test('cache read classifications match shipped code, including chained and cyclic errors', () => {
  const cyclic = { code: 'INVALID' }; cyclic.cause = cyclic;
  for (const read of [{ ok: true, value: Buffer.alloc(0) }, ...[{ code:'ENOENT' }, { cause:{code:'EACCES'} }, new TypeError('x'), 'error', cyclic].map(error => ({ok:false,error}))]) {
    for (const rejected of [true,false,undefined]) assert.deepEqual(cache.cacheReadStatus(read,rejected),plain(original.status(read,rejected)));
  }
});
test('atomic write matches symlink-following, permissions and serialized final contents', async () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(),'grok-bootstrap-'));
  try {
    for (const [label, writer] of [['original',original.atomicWrite],['rebuilt',atomic.atomicWrite]]) {
      const dir = path.join(root,label); fs.mkdirSync(dir);
      const target = path.join(dir,'target'); fs.writeFileSync(target,'before',{mode:0o640});
      const link = path.join(dir,'link'); fs.symlinkSync(target,link);
      await writer(link,'after'); assert.equal(fs.readFileSync(target,'utf8'),'after'); assert.ok(fs.lstatSync(link).isSymbolicLink()); assert.equal(fs.statSync(target).mode & 0o777,0o640);
      await Promise.all(['one','two','three'].map(value=>writer(target,value))); assert.equal(fs.readFileSync(target,'utf8'),'three');
      await assert.rejects(writer(link,'refused',{noFollow:{root:dir}}),error=>error.reason==='target-link');
      const parentLink = path.join(dir,'parent'); fs.symlinkSync(dir,parentLink);
      await assert.rejects(writer(path.join(parentLink,'child'),'refused',{noFollow:{root:dir}}),error=>error.reason==='parent-link');
      await assert.rejects(writer(dir,'refused',{noFollow:{root:dir}}),error=>error.name==='RangeError');
      const privateFile = path.join(dir,'nested','private'); await writer(privateFile,'private',{noFollow:{root:dir}}); assert.equal(fs.statSync(privateFile).mode & 0o777,0o600);
      assert.deepEqual(fs.readdirSync(path.dirname(privateFile)),['private']);
    }
  } finally { fs.rmSync(root,{recursive:true,force:true}); }
});
test('cache pruning keeps current plus two old caches and only removes stale own temporary files', async () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(),'grok-cache-'));
  try {
    const remaining=[];
    for(const [label,prune] of [['original',original.prune],['rebuilt',cache.pruneCodeCache]]) {
      const dir=path.join(root,label);fs.mkdirSync(dir);
      for(const [index,name] of ['main-current.v8','main-a.v8','main-b.v8','main-c.v8','main-old.v8.123','main-recent.v8.456','other-old.v8.123','unrelated'].entries()) {
        const file=path.join(dir,name);fs.writeFileSync(file,'cache');const age=name.includes('recent')?0:7200+index;fs.utimesSync(file,new Date(Date.now()-age*1000),new Date(Date.now()-age*1000));
      }
      await prune(dir,'main','main-current.v8');remaining.push(fs.readdirSync(dir));
    }
    assert.deepEqual(remaining[0],remaining[1]);assert.deepEqual(remaining[1],['main-a.v8','main-b.v8','main-current.v8','main-recent.v8.456','other-old.v8.123','unrelated']);
  } finally {fs.rmSync(root,{recursive:true,force:true});}
});
test('startup waits for core and reports both cache handles; app failures reach core failure hook', async () => {
  for(const start of [original.start,startup.startMain]) {
    let release;const remainderDue=new Promise(resolve=>release=resolve);const calls=[];const errors=[];
    const coreCache={read:{kind:'absent'},persist:async()=>0},appCache={read:{kind:'hit'},persist:async()=>0};
    const result=start({runBundle:name=>{calls.push(name);return name==='main-core'?{exports:{remainderDue,noteStartupFailed:error=>errors.push(error)},codeCache:coreCache}:{exports:{reportMainCodeCache:value=>calls.push(value)},codeCache:appCache};}});
    assert.deepEqual(calls,['main-core']);release();await result;assert.deepEqual(calls,['main-core','main-app',coreCache,appCache]);assert.deepEqual(errors,[]);
    const failure=new Error('app failure');await start({runBundle:name=>{if(name==='main-app')throw failure;return{exports:{remainderDue:Promise.resolve(),noteStartupFailed:error=>errors.push(error)},codeCache:coreCache};}});assert.equal(errors[0],failure);
  }
});
test('CommonJS loader executes exports and persists reusable V8 cache', async () => {
  const root=fs.mkdtempSync(path.join(os.tmpdir(),'grok-loader-'));
  try {
    for(const [label,load] of [['original',original.load],['rebuilt',cache.loadCachedBundle]]) {
      const dir=path.join(root,label);fs.mkdirSync(dir);const bundlePath=path.join(dir,'bundle.cjs'),cacheDir=path.join(dir,'cache');
      fs.writeFileSync(bundlePath,"module.exports = { value: require('node:path').basename(__filename), dirname: __dirname, loadedDuringExecution: module.loaded };");
      const cold=load({bundlePath,cacheDir,buildId:'build'});assert.deepEqual(plain(cold.exports),{value:'bundle.cjs',dirname:dir,loadedDuringExecution:false});assert.deepEqual(plain(cold.codeCache.read),{kind:'absent'});
      const bytes=await cold.codeCache.persist(cacheDir);assert.ok(bytes>0);
      const hot=load({bundlePath,cacheDir,buildId:'build'});assert.deepEqual(plain(hot.codeCache.read),{kind:'hit'});
      fs.writeFileSync(path.join(cacheDir,'bundle-build.v8'),Buffer.alloc(2));
      fs.writeFileSync(bundlePath, `module.exports = 'changed source for rejection ${label}';`);
      assert.deepEqual(plain(load({bundlePath,cacheDir,buildId:'build'}).codeCache.read),{kind:'rejected'});
    }
  } finally {fs.rmSync(root,{recursive:true,force:true});}
});
