import fs from 'node:fs';
import {parse} from '@babel/parser';
import {createHash} from 'node:crypto';
const file='rea/recovered/dist/renderer/assets/index-ZYxf-aBb.js',source=fs.readFileSync(file,'utf8'),nodes=parse(source,{sourceType:'module'}).program.body;
const text=node=>source.slice(node.start,node.end);
const find=prefix=>nodes.find(n=>text(n).startsWith(prefix));
const first=find('performance.mark("sand.boot.entry")'),last=find('Vc.noteRendererAlive()');
const between=(firstPrefix,lastPrefix)=>{const a=nodes.indexOf(find(firstPrefix)),b=nodes.indexOf(find(lastPrefix));if(a<0||b<a)throw Error(firstPrefix);return nodes.slice(a,b+1).map(text).join('\n');};
const tracing=nodes.find(n=>n.type==='BlockStatement'&&text(n).includes('sa.tracing'));
const mount=find('SW.createRoot');
const afterWaking=between('i0e(xn)','Ole({');
const firstRunAndHeap=between('Fle(xn.firstRun','Ble(Vc.telemetry');
const declarations='let fB,mB,JRe,w6,Vc,Ba,pB,rf,fp,eEe,xn,_6,hB;';
const adapter=`${declarations}
const recoveredStartup = bootstrapRenderer({
 window, performance, clock: li,
 createTelemetryLoader: w => (fB = rle(w)),
 deferredTasks: [R$,u3e,MCe,B5e,N7e,Kke,lfe,cRe],
 loadAnimationFeatures: eie,
 installInvariantReporter: bie,
 assert: js,
 createCapability: () => (Vc = dle()),
 createDesktop: capability => (Ba = ule(capability)),
 installFailureReporter: desktop => fle(new tie(value => Vy(desktop.reportClientFailure(value)))),
 installEntrypointDiagnostics: () => yie(nie),
 setPlatform: mle,
 playNotificationSound: ple,
 createPortBridge: gle,
 createIdentityTransport: options => (rf = hle(options)),
 installReactionAck: options => { fp = options.scheduleTimeout; sie(options); },
 createPersistence: options => (eEe = yle(options)),
 wrapSource: source => xle(source,aie(lie)),
 createClient: options => (xn = kle(options)),
 voiceCallTransport: Zle,
 loadUnifiedBilling: () => Bt(() => import('./chunk-index-DYBNJbIk.js'),__vite__mapDeps([136,1]),import.meta.url),
 openCredits: view => sa.runtime.actions.open(Gy.link({view})),
 createVoicePreviewPlayer: ble,
 createVoiceMemoClip: Yle,
 resolveAccountSlot: Xle,
 onSendQueuedFlush: Kle,
 reportPersistence: Qle,
 report: es,
 installDraftPersistence: vle,
 initializeClient: Sle,
 initializeAccountFlow: client => jle(client,xie(),Ffe),
 isDeepLink: value => Fy.isDeepLink(value),
 isScmConnectLink: wle,
 scmConnectPayload: _le,
 reportScmFailure: $s,
 dispatchDeepLink: DTe,
 installClientObservers: Cle,
 applyTheme: Jle,
 activateLocale: Nle,
 currentLocale: Ile,
 initializeSelectionTelemetry: (client,telemetry,capability) => Tle(client.selection.snapshots,Ale(telemetry.setTag,capability.telemetry)),
 initializeExperimentBindings: client => JIe({experiments:client.experiments.snapshots,roster:client.roster.snapshots,team:client.team.snapshots,teamMemberships:t_(client),teamPolicy:client.teamPolicy.snapshots,usageSummary:client.usageSummary.snapshots,unifiedBillingDevScenario:client.unifiedBilling.isDevScenarioArmed}),
 devPort: window.sandDev,
 connectDevPort: Ple,
 connectRenderTracing: client => { const xn = client; ${text(tracing)} },
 beforeWaking: Rle,
 createWakingHandle: (client,scheduleTimeout) => (hB = o0e(client,scheduleTimeout,{isDocumentVisible:()=>document.visibilityState==='visible',subscribeWindowFocus:client.desktopWindow.subscribeWindowFocus},{onWakingReport:value=>Vy(Ba.reportAgentsUnreachable(value))})),
 initializeAfterWaking: (client,waking,scheduleTimeout) => {const xn=client,hB=waking,fp=scheduleTimeout;${afterWaking}},
 clearNonReadyState: () => {Dle();qle();},
 resetRestoringState: Lle,
 noteAccountChange: waking => waking.noteAccountChange(),
 initializeFirstRunAndHeap: (client,capability) => {const xn=client,Vc=capability;${firstRunAndHeap}},
 observeRootPopulation: Gle,
 mountApp: (root,client,waking,features) => {const w6=root,xn=client,hB=waking,JRe=features;${text(mount)}}
});
({telemetry:fB,deferred:mB,animationFeatures:JRe,root:w6,capability:Vc,desktop:Ba,setZoomFactor:pB,transport:rf,scheduleTimeout:fp,persistence:eEe,client:xn,updateTheme:_6,waking:hB}=recoveredStartup);
`;
fs.writeFileSync('rea/evidence/renderer-startup-adapter.js',adapter);
const region=source.slice(first.start,last.end);
fs.mkdirSync('rea/evidence/rea-input/renderer-startup',{recursive:true});
fs.writeFileSync('rea/evidence/rea-input/renderer-startup/entry.js',`// Inert entrypoint block extracted from ${file}\n${region}\n`);
fs.writeFileSync('rea/evidence/rea-input/renderer-startup/provenance.json',JSON.stringify({original:file,start:first.start,end:last.end,sha256:createHash('sha256').update(region).digest('hex'),integration:'rea/evidence/renderer-startup-adapter.js'},null,2)+'\n');
console.log(JSON.stringify({start:first.start,end:last.end,bytes:region.length,adapterBytes:adapter.length}));
