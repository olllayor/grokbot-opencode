import {readFile,writeFile,mkdir} from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {transform} from 'esbuild';
import {semanticFingerprint} from '../rea/scripts/ts-port-generate.mjs';
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
export async function compileSourcePort({root,output,manifest}){
 const report=JSON.parse(await readFile(path.join(root,'src/ported/port-manifest.json'),'utf8'));
 if(report.status!=='typescript-source-port'||report.artifacts.length!==540||report.artifacts.some(entry=>!entry.strictChecked))throw Error('Source port strict verification is not complete');
 const entries=[];
 const domain=JSON.parse(await readFile(path.join(root,'src/ported/domain/port-manifest.json'),'utf8'));
 if(hash(await readFile(path.join(root,'src/ported/domain/domain-adapter.cts')))!==domain.tsHash||hash(await readFile(path.join(root,'src/rpc/domain-adapter.cjs')))!==domain.sourceHash)throw Error('Domain adapter port requires reverification');
 for(const record of report.artifacts){
  const entry={...record,input:`rea/recovered/${record.source}`,output:`src/ported/${record.destination}`,artifact:record.source,outputSha256:record.tsHash};
  const source=await readFile(path.join(root,entry.output),'utf8');
  if(hash(source)!==entry.outputSha256)throw Error('Modified TS port must be reverified: '+entry.output);
  const original=await readFile(path.join(root,entry.input));
  if(hash(original)!==entry.sourceHash)throw Error('Original reference changed: '+entry.input);
  const destination=path.join(output,entry.artifact);
  await mkdir(path.dirname(destination),{recursive:true});
  const result=await transform(source,{loader:'ts',target:'esnext',sourcefile:path.relative(path.dirname(destination),path.join(root,entry.output)),sourcemap:'external',tsconfigRaw:{compilerOptions:{verbatimModuleSyntax:true}}});
  if(semanticFingerprint(result.code)!==entry.erasedAstHash)throw Error('Emitted port AST differs: '+entry.input);
  await writeFile(destination,result.code);await writeFile(destination+'.map',result.map);
  entries.push({input:entry.input,source:entry.output,artifact:entry.artifact,inputSha256:entry.sourceHash,sourceSha256:entry.outputSha256,outputSha256:hash(result.code),erasedAstHash:entry.erasedAstHash,dynamic:entry.dynamic,primitive:entry.primitive});
 }
 manifest.sourcePort={status:report.status,units:entries.length,additionalDomainAdapter:{source:'src/ported/domain/domain-adapter.cts',sourceSha256:domain.tsHash,referenceSha256:domain.sourceHash,dynamic:domain.dynamic,primitive:domain.primitive},entries,dynamicBoundaries:entries.reduce((sum,entry)=>sum+entry.dynamic,0),primitiveAnnotations:entries.reduce((sum,entry)=>sum+entry.primitive,0),typeRecovery:'Inferred primitives and explicit dynamic types; original upstream types unavailable. Cross-module dynamic contracts are recorded in the source manifest.'};
 console.log(`Compiled ${entries.length} strictly checked TypeScript source-port units with erased AST parity.`);
}
