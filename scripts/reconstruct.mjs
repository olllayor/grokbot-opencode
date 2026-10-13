import { build } from 'esbuild';
import { compileSourcePort } from './build-source-port.mjs';
import { cp, mkdir, readFile, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { parse } from '@babel/parser';
import traverseModule from '@babel/traverse';
import generateModule from '@babel/generator';
import * as t from '@babel/types';
const traverse = traverseModule.default ?? traverseModule;
const generate = generateModule.default ?? generateModule;
const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const output = path.join(root, 'build', 'application');
await mkdir(output, { recursive: true });
await cp(path.join(root, 'rea/recovered'), output, { recursive: true, verbatimSymlinks: true });
const manifest = { status: 'complete-typescript-source-port', upstreamTypesRecovered: false, recoveredArtifact: '/Applications/Grok Bot.app/Contents/Resources/app.asar', replacements: [], residuals: ['Native helpers and Electron runtime are reused', 'Dynamic cross-module contracts remain explicit unknown boundaries; upstream TypeScript types are unavailable'], sourceMaps: 'Absent in shipped artifact; original TypeScript types/names unrecoverable' };
await compileSourcePort({ root, output, manifest });
const digest = text => createHash('sha256').update(text).digest('hex');
async function compile(entry, outfile, format = 'cjs', platform = 'node') {
 await mkdir(path.dirname(outfile), { recursive: true });
 await build({ entryPoints: [path.join(root, entry)], outfile, bundle: true, format, platform, target: 'es2023', external: ['electron'], sourcemap: true });
 manifest.replacements.push({ kind: 'typescript-entrypoint', source: entry, output: path.relative(output,outfile), sourceSha256:digest(await readFile(path.join(root,entry))), outputSha256:digest(await readFile(outfile)) });
}
await compile('src/electron-main/main.ts', path.join(output,'dist/electron-main/main.cjs'));
await compile('src/electron-preload/preload.ts', path.join(output,'dist/electron-preload/preload.cjs'));
for (const name of ['preload-meeting-avatar','preload-desktop-mount-panel','preload-webview','preload-vnc','preload-meeting']) {
 try { await access(path.join(root,`src/auxiliary-preloads/${name}.ts`)); }
 catch { continue; }
 await compile(`src/auxiliary-preloads/${name}.ts`,path.join(output,`dist/electron-preload/${name}.cjs`));
}
async function aggregate(label, paths, relativeDirectory, format='cjs', platform='node') {
 const filename=path.join(root,'build',`${label}-entry.ts`);
 await writeFile(filename,paths.map(p=>`export * from ${JSON.stringify(path.join(root,p))};`).join('\n')+'\n');
 const outfile=path.join(output,relativeDirectory,`${label}.${format==='esm'?'js':'cjs'}`);
 await build({entryPoints:[filename],outfile,bundle:true,format,platform,target:'es2023',external:['electron'],sourcemap:true});
 const sourceHashes={};
 for(const source of paths) sourceHashes[source]=digest(await readFile(path.join(root,source)));
 manifest.replacements.push({kind:'typescript-aggregate',source:path.relative(root,filename),sources:paths,sourceHashes,output:path.relative(output,outfile),sourceSha256:digest(await readFile(filename)),outputSha256:digest(await readFile(outfile))});
 return outfile;
}
const core = await aggregate('reconstructed-core',['src/main-core/desktop-startup.ts','src/main-core/remainder.ts','src/main-core/hardware.ts','src/main-core/window-state.ts','src/main-core/window-policy.ts','src/main-core/data-paths.ts','src/main-core/user-data-migration.ts','src/main-core/protocol-security.ts','src/main-core/desktop-settings.ts','src/main-core/startup-services.ts','src/main-core/data-root-migration.ts'],'dist/electron-main');
const settings = await aggregate('reconstructed-main-settings',['src/reconstructed-main/settings.ts'],'dist/electron-main');
const workers = await aggregate('reconstructed-worker-services',['src/reconstructed-workers/index.ts'],'dist/electron-main');
const update = await aggregate('reconstructed-update',['src/update/idle.ts','src/update/feed-server.ts','src/update/download.ts'],'dist/electron-main');
const rpc = await aggregate('reconstructed-rpc',['src/rpc/server.ts','src/rpc/schema.ts'],'dist/electron-main');
const auth = await aggregate('reconstructed-auth',['src/auth/local-auth.ts'],'dist/electron-main');
const renderer = await aggregate('reconstructed-renderer',['src/renderer/boot-presentation.ts','src/renderer/persistence-keys.ts','src/renderer/persistence-registry.ts','src/renderer/deferred-startup.ts','src/renderer/account-boot.ts','src/renderer/voice-settings.ts','src/renderer/renderer-startup.ts'],'dist/renderer/assets','esm','browser');

// Replace only program-scope bindings identified in the shipped evidence. Keep closure
// dependencies explicit at each adapter; never change unrelated minified identifiers.
async function patch(relativeFile, imports, replacements) {
 const file=path.join(output,relativeFile);
 const originalCode=await readFile(file,'utf8');
 const code=originalCode;
 const ast=parse(code,{sourceType:relativeFile.endsWith('.cjs')?'script':'module'});
 if(relativeFile==='dist/renderer/assets/index-ZYxf-aBb.js') {
  const nodes=ast.program.body;
  const first=nodes.find(node=>code.slice(node.start,node.end).startsWith('performance.mark("sand.boot.entry")'));
  const last=nodes.find(node=>code.slice(node.start,node.end).startsWith('Vc.noteRendererAlive()'));
  if(!first||!last||first.start>=last.end)throw new Error('Missing renderer startup span');
  const adapter=await readFile(path.join(root,'rea/evidence','renderer-startup-adapter.js'),'utf8');
  manifest.replacements.push({kind:'typescript-entrypoint-lifecycle',source:'src/renderer/renderer-startup.ts',artifact:relativeFile,originalStart:first.start,originalEnd:last.end,originalSha256:digest(code.slice(first.start,last.end))});
  const inserted=parse(adapter,{sourceType:'module'}).program.body.map(node=>t.removePropertiesDeep(node));
  nodes.splice(nodes.indexOf(first),nodes.indexOf(last)-nodes.indexOf(first)+1,...inserted);
 }
 const matched=new Set();
 traverse(ast,{Program(program){
  for(const [name,expression] of Object.entries(replacements)) {
   const binding=program.scope.getBinding(name);
   if(!binding)throw new Error(`Missing shipped program binding ${relativeFile}:${name}`);
   const expr=t.removePropertiesDeep(parse(`(${expression})`,{sourceType:'script'}).program.body[0].expression);
   if(binding.path.isFunctionDeclaration()) {
    binding.path.node.params=[t.restElement(t.identifier('__grokbotArgs'))];
    binding.path.node.body=t.blockStatement([t.returnStatement(t.callExpression(expr,[t.spreadElement(t.identifier('__grokbotArgs'))]))]);
    binding.path.node.async=false;
   } else if(binding.path.isClassDeclaration() && t.isClassExpression(expr)) {
    binding.path.node.superClass = expr.superClass;
    binding.path.node.body = expr.body;
   } else if(binding.path.isClassDeclaration()) {
    // A class declaration initializes at this statement (and has a TDZ), so a
    // factory-backed const preserves ordering while replacing its implementation.
    binding.path.replaceWith(t.variableDeclaration('const',[t.variableDeclarator(t.identifier(name),expr)]));
   } else if(binding.path.isVariableDeclarator()&&binding.path.node.init) {
    binding.path.node.init=expr;
   } else {
    let assignments=0;
    program.traverse({AssignmentExpression(candidate){
     if(t.isIdentifier(candidate.node.left,{name})&&candidate.scope.getBinding(name)===binding){candidate.node.right=t.cloneNode(expr,true);assignments++;}
    }});
    if(assignments!==1)throw new Error(`Expected one initialization of ${name}, got ${assignments}`);
   }
   matched.add(name);
  }
  const prelude=parse(imports,{sourceType:relativeFile.endsWith('.cjs')?'script':'module'}).program.body.map(node=>t.removePropertiesDeep(node));
  program.node.body.unshift(...prelude);
  program.stop();
 }});
 const inputSourceMap=JSON.parse(await readFile(file+'.map','utf8'));
 const generated=generate(ast,{comments:true,compact:false,sourceMaps:true,inputSourceMap,sourceFileName:path.basename(file)},code);
 if(!generated.map) throw new Error(`Failed to compose source map for ${relativeFile}`);
 generated.map.file=path.basename(file);
 const patched=generated.code+'\n//# sourceMappingURL='+path.basename(file)+'.map\n';
 await writeFile(file,patched);
 await writeFile(file+'.map',JSON.stringify(generated.map)+'\n');
 manifest.replacements.push({kind:'artifact-binding-replacement',artifact:relativeFile,originalSha256:digest(code),outputSha256:digest(patched),bindings:[...matched],sourceMap:'Composed with strictly checked TypeScript source-port input; inserted adapters have no invented original locations',sourceMapSha256:digest(await readFile(file+'.map'))});
}
await patch('dist/electron-main/main-core.cjs',`const __grokbotCore = require('./${path.basename(core)}');\nconst __grokbotMain = require('./${path.basename(settings)}');`,{
 ...(JSON.parse(await readFile(path.join(root,'src/reconstructed-main/integration.json'),'utf8')).bindings),
 RU:'__grokbotCore.createDesktopStartup',TU:'__grokbotCore.translationStatus',e0:'__grokbotCore.startupAssets',n0:'__grokbotCore.waitForRemainder',
 aM:'__grokbotCore.hardwareAccelerationEnabled',iM:'__grokbotCore.applyHardwareAcceleration',sM:'__grokbotCore.hardwareAccelerationState',
 Ine:'__grokbotCore.parseWindowState',PM:'__grokbotCore.restoreWindowBounds',zm:'__grokbotCore.WindowStateStore',
 Ym:'__grokbotCore.preloadFilename',WM:'__grokbotCore.windowIcon',ZM:'__grokbotCore.v8CachePolicy',QM:'__grokbotCore.sameDocumentLocation',
 Dne:'(window,bounds)=>__grokbotCore.trackWindowState(window,bounds,zT)',
 JM:'(window,restore)=>__grokbotCore.applyWindowRestore(window,restore,zT)',
 Zm:'(window,devServer)=>__grokbotCore.loadMainWindow(window,devServer,wne)',
 rl:'__grokbotCore.isBelowRoot',Cf:'__grokbotCore.fileURLPath',cy:'__grokbotCore.applicationVariant',Pf:'__grokbotCore.canonicalDataRoot',uy:'__grokbotCore.legacyDataRoot',ol:'__grokbotCore.dataRootOverride',Je:'__grokbotCore.dataRoot',Z9:'__grokbotCore.portablePathSuffix',kf:'__grokbotCore.rebaseDataPath',XC:'__grokbotCore.computerUseRoot',JC:'__grokbotCore.hostTokenPath',Df:'__grokbotCore.localToolApprovalsPath',ZC:'__grokbotCore.localToolStandingGrantsPath',
 eM:'__grokbotCore.userDataRoots',Km:'__grokbotCore.directoryKind',jT:'__grokbotCore.hasUserDataMarker',tM:'__grokbotCore.markUserDataRoot',dne:'__grokbotCore.removeEmptyDirectory',lne:'__grokbotCore.directoryIsEmpty',une:'__grokbotCore.sameWindowsPath',pne:'__grokbotCore.migrateUserDataRoots',fne:'__grokbotCore.settleUserDataRoot',nM:'__grokbotCore.applyUserDataSettlement',
 jy:'__grokbotCore.isMcpAppURL',Nk:'__grokbotCore.blocksMcpFrameNavigation',oT:'__grokbotCore.isHtmlPreviewURL',_Z:'__grokbotCore.isCanvasURL',oD:'__grokbotCore.isCanvasInitialNavigation',aD:'__grokbotCore.shouldOpenPreviewExternally',gl:'__grokbotCore.isExternalHttpURL',Qm:'__grokbotCore.guardWindowNavigation',rD:'()=>__grokbotCore.registerSecureSchemes(nD.protocol)',
 Bm:'__grokbotCore.createDesktopSettingsClass(Dm,{createIO:xT,reportFailure:H})',
 rM:'input=>__grokbotCore.initializeUserData(input,{app:zn.app,platform:process.platform,argv:process.argv,isUpdatedLaunch:QL,report:rt,log:console.log})',
 oM:'input=>__grokbotCore.initializeDataRoot(input,{isPackaged:zn.app.isPackaged,existingProductionRoot:IL,settle:OL,report:rt})',
 GCe:'()=>__grokbotCore.focusStartupWindow({lateFocus:$o.focusMainWindow,window:SE})',
 Ez:'()=>__grokbotCore.markMainEdge({isServed:()=>CI,setServed:()=>{CI=true},window:SE,channel:UN})',
 NI:'error=>__grokbotCore.startupFailed(error,{noteFailed:error=>Wo.noteFailed(error),markMainEdgeServed:Ez})',
 xte:'__grokbotCore.processCommand',bL:'__grokbotCore.isSandHostProcess',Ite:'__grokbotCore.isProcessAlive',Wm:'__grokbotCore.hasDataRootMarker',UT:'__grokbotCore.markDataRoot',Cte:'__grokbotCore.isDaemonRecord',Nte:'__grokbotCore.legacyDaemonStatus',Pte:'__grokbotCore.legacyHostStatus',kte:'__grokbotCore.classifyDataRootContents',Dte:'__grokbotCore.settleCanonicalDataRoot',wte:'__grokbotCore.migrateDataRoots',Lte:'__grokbotCore.settleDataRoot',IL:'__grokbotCore.existingProductionRoot',OL:'__grokbotCore.applyDataRootSettlement',ma:'__grokbotCore.directoryKind',Ote:'__grokbotCore.removeEmptyDirectory',
});
const downloadDeps=`{createRetryPolicy:Fm.createRetryPolicy,realClock:Fm.realClock,elapsedMs:Fm.elapsedMs,findSystemErrno:_w.findSystemErrno,isMissingPathError:_w.isMissingPathError,DownloadError:__,IntegrityError:E_,reportDesktopEdgeFailure:Rot.reportDesktopEdgeFailure}`;
await patch('dist/electron-main/main-app.cjs',`const __grokbotUpdate = require('./${path.basename(update)}');\nconst __grokbotRpc = require('./${path.basename(rpc)}');\nconst __grokbotAuth = require('./${path.basename(auth)}');`,{
 agr:'__grokbotUpdate.hostIsIdle',sgr:'__grokbotUpdate.systemIsIdle',yot:'__grokbotUpdate.canApplyIdleUpdate',_ot:'__grokbotUpdate.applyUpdateWhenIdle',
 Eot:'options=>__grokbotUpdate.periodicUpdateCheck(options,eie.errorLogTag)',
 A1:'class extends __grokbotUpdate.UpdateFeedServer {constructor(){super({productName:Iot.SAND_PRODUCT_DISPLAY_NAME,invariant:vot.invariant});}}',
 Mot:`options=>__grokbotUpdate.downloadUpdate(options,${downloadDeps})`,
 dgr:`options=>__grokbotUpdate.downloadAttempt(options,${downloadDeps})`,
 ugr:`(options,response,resume)=>__grokbotUpdate.resolveResponse(options,response,resume,${downloadDeps})`,
 pgr:`(options,total)=>__grokbotUpdate.verifyAndPlace(options,total,${downloadDeps})`,
 fgr:`options=>__grokbotUpdate.placeDownload(options,${downloadDeps})`,
 mgr:`options=>__grokbotUpdate.resumeRange(options,${downloadDeps})`,
 Pot:`partial=>__grokbotUpdate.readResume(partial,${downloadDeps})`,
 ggr:'__grokbotUpdate.responseValidator',Agr:'__grokbotUpdate.parseContentRange',yw:'__grokbotUpdate.resumePath',wot:'__grokbotUpdate.finishWrite',
 Sw:`partial=>__grokbotUpdate.cleanupPartial(partial,${downloadDeps})`,tie:`file=>__grokbotUpdate.cleanupFile(file,${downloadDeps})`,
 f4:'__grokbotRpc.failureFactory',m4:'__grokbotRpc.isEdgeFailure',Sl:'__grokbotRpc.trustHandlerFactory',
 w0t:'__grokbotRpc.methodChannel',NRe:'__grokbotRpc.eventChannel',T0t:'__grokbotRpc.probeChannel',
 M0t:'__grokbotRpc.validateArguments',P0t:'__grokbotRpc.probeMethod',B0t:'__grokbotRpc.serveMethods',_l:'__grokbotRpc.serveEdge',
 ar:'__grokbotRpc.EdgeCallFailure',xC:'__grokbotRpc.EdgeTrustPolicyMissingError',
 KY:'__grokbotAuth.SandCursorAuthService',
});
const rendererImport=`import * as __grokbotRenderer from './${path.basename(renderer)}'; const bootstrapRenderer=__grokbotRenderer.bootstrapRenderer;`;
await patch('dist/renderer/assets/index-ZYxf-aBb.js',rendererImport,{
 x6:'__grokbotRenderer.shouldShowFirstBoxFailure',BRe:'__grokbotRenderer.canRevealAppView',GRe:'__grokbotRenderer.resolveBootPresentation',VRe:'__grokbotRenderer.resolveBootBusyLabel',
});
await patch('dist/renderer/assets/index.eager-app-Cj5f8Gby.js',rendererImport,{
 kp:'__grokbotRenderer.matchesStagePolicy',YL:'__grokbotRenderer.includesWholePrefix',Pb:'__grokbotRenderer.encodeKeyPart',
 Hs:'(definition,slot)=>__grokbotRenderer.sliceKey(definition,slot,st)',el:'__grokbotRenderer.accountPrefix',ZL:'__grokbotRenderer.encodeKeyPart',ly:'__grokbotRenderer.decodeSubKey',wd:'__grokbotRenderer.parseEnvelope',QL:'__grokbotRenderer.isQuotaFailure',
 JL:'class extends __grokbotRenderer.PersistenceRegistry{constructor(port,outcome){super(port,outcome,st);}}',
 xFe:'__grokbotRenderer.deferStartupTasks',nn:'__grokbotRenderer.resolveAuthAccountSlot',Qhe:'__grokbotRenderer.resolveAccountIdentity',fce:'__grokbotRenderer.readPersistedAccountSlot',pce:'__grokbotRenderer.isPersistedAccountSlotCurrent',
 USe:'__grokbotRenderer.parseVoiceSettings',GSe:'options=>__grokbotRenderer.createVoiceSettings({...options,createSnapshots:ke,createQueue:sn})',
});
// Full typed helper entrypoint and explicit typed service composition overrides.
const workerMap=JSON.parse(await readFile(path.join(root,'src/reconstructed-workers/source-output-map.json'),'utf8'));
for(const entry of workerMap.entrypoints) await compile(entry.source,path.join(output,entry.output),entry.format,entry.platform);
const workerBindings=new Map();
for(const replacement of workerMap.bindingReplacements){
 const bindings=workerBindings.get(replacement.bundle)??{};
 if(replacement.binding){
  bindings[replacement.binding]=`__grokbotWorkers.${replacement.expression}`;
 }else for(const [binding,method] of Object.entries(replacement.bindings)){
  bindings[binding]=replacement.factory?`(...args)=>__grokbotWorkers.${replacement.factory}.${method}(...args)`:`__grokbotWorkers.${method}`;
 }
 workerBindings.set(replacement.bundle,bindings);
}
for(const [bundle,bindings] of workerBindings) await patch(bundle,`const __grokbotWorkers = require('./${path.basename(workers)}');`,bindings);
// Preserve runtime asset module identities while bundling authored metadata internally.
const rendererMap=JSON.parse(await readFile(path.join(root,'src/reconstructed-renderer/entry-manifest.json'),'utf8'));
for(const entry of rendererMap.entries){
 const outfile=path.join(output,'dist/renderer/assets',entry.file);
 const original=await readFile(path.join(root,'rea/recovered/dist/renderer/assets',entry.file));
 if(digest(original)!==entry.sha256) throw new Error(`Renderer reference changed: ${entry.file}`);
 await build({entryPoints:[path.join(root,entry.typescript)],outfile,bundle:true,format:'esm',platform:'browser',target:'es2023',sourcemap:true,plugins:[{name:'preserve-runtime-assets',setup(api){api.onResolve({filter:/^\.\//},args=>args.kind==='entry-point'||args.path.endsWith('debug-metadata.js')?undefined:{path:args.path,external:true});}}]});
 manifest.replacements.push({kind:'typescript-renderer-entrypoint',source:entry.typescript,output:path.relative(output,outfile),originalSha256:digest(original),sourceSha256:digest(await readFile(path.join(root,entry.typescript))),outputSha256:digest(await readFile(outfile)),exports:entry.exports});
}
await writeFile(path.join(root,'build','reconstruction-manifest.json'),JSON.stringify(manifest,null,2)+'\n');
console.log(`Compiled ${manifest.replacements.filter(r=>r.kind==='typescript-entrypoint').length} native/preload TS entrypoints and ${rendererMap.entries.length} renderer asset replacements; replaced ${manifest.replacements.flatMap(r=>r.bindings??[]).length} shipped bindings. Source-port coverage and dynamic contract boundaries are listed in reconstruction-manifest.json.`);
