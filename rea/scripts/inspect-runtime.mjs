import { spawn } from 'node:child_process';
import { createReaSession } from './rea-session.mjs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const session=await createReaSession();
const root=path.dirname(path.dirname(path.dirname(fileURLToPath(import.meta.url))));
const profile=path.join(root,'build',`inspection-profile-${Date.now()}`);
await mkdir(profile,{recursive:true});
const env={...process.env,SAND_USER_DATA_DIR:profile};
delete env.ELECTRON_RUN_AS_NODE;
const child=spawn(path.join(root,'node_modules','electron','dist','Electron.app','Contents','MacOS','Electron'),[path.join(root,'build','application'),`--user-data-dir=${profile}`,'--remote-debugging-address=127.0.0.1','--remote-debugging-port=0'],{detached:true,env,stdio:['ignore','pipe','pipe']});
let log='',exit=null;
child.stdout.on('data',part=>log+=String(part));child.stderr.on('data',part=>log+=String(part));
const exited=new Promise(resolve=>child.on('exit',(code,signal)=>{exit={code,signal};resolve();}));
function evidence(wrapper){const result=wrapper.result;return result.structuredContent??JSON.parse(result.content.find(item=>item.type==='text').text);};
async function call(tool,args,file){const result=await session.call(tool,args);const wrapper={server:session.identity.serverInfo,tool,arguments:args,result};await writeFile(path.join(root,'rea/evidence',file),JSON.stringify(wrapper,null,2)+'\n');const data=evidence(wrapper);if(result.isError)throw Error(`${tool}: ${data.error?.message??JSON.stringify(data)}`);return data;}
try{
 let endpoint;
 for(let attempt=0;attempt<60;attempt++){
  const match=/DevTools listening on ws:\/\/127\.0\.0\.1:(\d+)\//.exec(log);
  if(match){endpoint=`http://127.0.0.1:${match[1]}`;break;}
  if(exit)throw new Error(`Application exited before CDP (${JSON.stringify(exit)})`);
  await new Promise(resolve=>setTimeout(resolve,250));
 }
 if(!endpoint)throw new Error('No isolated-app CDP endpoint appeared');
 let discovery=[];
 for(let attempt=0;attempt<60;attempt++){
  discovery=await fetch(`${endpoint}/json/list`,{signal:AbortSignal.timeout(10000)}).then(response=>response.json());
  if(discovery.length||exit)break;
  await new Promise(resolve=>setTimeout(resolve,500));
 }
 await writeFile(path.join(root,'rea/evidence','runtime-cdp-discovery.json'),JSON.stringify(discovery,null,2)+'\n');
 console.log(`Isolated CDP endpoint reports ${discovery.length} page targets.`);
 const inventory=await call('list_electron_targets',{cdp_endpoint:endpoint},'rea-runtime-targets.json');
 const targets=inventory.normalized_result?.targets??[];
 const target=targets.find(item=>item.file_path.includes('/grokbot/build/application/')&&item.file_path.endsWith('/dist/renderer/index.html'));
 if(!target)throw new Error(`Rebuilt renderer target missing (${targets.length} local pages)`);
 if(process.argv.includes('--web-bundle')){
  const bundle=await call('analyze_web_bundle',{cdp_endpoint:endpoint,target_id:target.target_id,observation_ms:1000,include_script_sources:true,fetch_source_maps:false},'rea-web-bundle.json');
  console.log(JSON.stringify({operation:bundle.operation,evidenceId:bundle.evidence_id,limitations:bundle.limitations},null,2));
 }
 await new Promise(resolve=>setTimeout(resolve,3000));
 const observation=await call('inspect_electron_page',{cdp_endpoint:endpoint,target_id:target.target_id,observation_ms:1000,include_script_sources:false},'rea-runtime-page.json');
 const page=observation.normalized_result;
 const compiled=page.scripts?.items?.filter(item=>item.file_path.includes('reconstructed-renderer'))??[];
 const result={evidenceId:observation.evidence_id,target:page.target,domNodes:page.dom?.total_nodes,reconstructedRendererScripts:compiled.map(item=>item.file_path),completeness:page.completeness,limitations:observation.limitations};
 await writeFile(path.join(root,'rea/evidence','runtime-inspection-result.json'),JSON.stringify(result,null,2)+'\n');
 console.log(JSON.stringify({evidenceId:result.evidenceId,domNodes:result.domNodes,reconstructedRendererScripts:result.reconstructedRendererScripts,completeness:result.completeness.status},null,2));
 if(!compiled.length||!page.dom?.total_nodes)throw new Error('Typed renderer execution/load not established by passive inspection');
}finally{
 session.close();
 await writeFile(path.join(root,'rea/evidence','runtime-inspection.log'),log);
 try{process.kill(-child.pid,'SIGTERM');}catch{}
 await Promise.race([exited,new Promise(resolve=>setTimeout(resolve,2000))]);
 try{process.kill(-child.pid,'SIGKILL');}catch{}
 child.stdout.destroy();child.stderr.destroy();child.unref();
}
