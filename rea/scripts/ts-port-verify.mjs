import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {listArtifacts} from './ts-port-tree.mjs';
import {assertErasure} from './ts-port-generate.mjs';
import {checkSource} from './ts-port-check.mjs';
const hash=s=>crypto.createHash('sha256').update(s).digest('hex');
const [input='rea/recovered',output='src/ported',mode='full']=process.argv.slice(2);
const manifest=JSON.parse(fs.readFileSync(path.join(output,'port-manifest.json'),'utf8'));
const listed=listArtifacts(input),records=new Map(manifest.artifacts.map(record=>[record.source,record]));
if(listed.length!==records.size||listed.some(file=>!records.has(file)))throw new Error('Manifest does not cover exact executable reference inventory.');
let dynamic=0,primitive=0;
for(const file of listed){const record=records.get(file),source=fs.readFileSync(path.join(input,file),'utf8'),code=fs.readFileSync(path.join(output,record.destination),'utf8');if(hash(source)!==record.sourceHash||hash(code)!==record.tsHash)throw new Error(`${file}: hash mismatch`);if(!record.strictChecked)throw new Error(`${file}: no strict check`);if(mode==='full'){const erased=assertErasure(source,code);if(erased!==record.erasedAstHash)throw new Error(`${file}: erasure fingerprint mismatch`);const result=checkSource(code,path.resolve(output,record.destination));if(result.diagnostics.length)throw new Error(`${file}: ${JSON.stringify(result.diagnostics.slice(0,10))}`);}dynamic+=record.dynamic;primitive+=record.primitive;}
console.log(JSON.stringify({files:listed.length,mode,hashesVerified:true,allStrictChecked:mode==='full'?'rechecked':'recorded',erasure:mode==='full'?'rechecked':'recorded',dynamic,primitive}));
