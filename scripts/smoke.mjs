import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const profile=path.join(root,'build',`smoke-profile-${Date.now()}`);
const executable=path.join(root,'node_modules','electron','dist','Electron.app','Contents','MacOS','Electron');
await mkdir(profile,{recursive:true});
const env={...process.env,SAND_USER_DATA_DIR:profile};
delete env.ELECTRON_RUN_AS_NODE;
const child=spawn(executable,[path.join(root,'build','application'),`--user-data-dir=${profile}`],{env,detached:true,stdio:['ignore','pipe','pipe']});
const output=[];
child.stdout.on('data',chunk=>output.push(String(chunk)));
child.stderr.on('data',chunk=>output.push(String(chunk)));
let ended=null;
const exit=new Promise(resolve=>child.once('exit',(code,signal)=>{ended={code,signal};resolve();}));
await Promise.race([exit,new Promise(resolve=>setTimeout(resolve,12000))]);
const alive=ended===null;
if(alive) {
  try {process.kill(-child.pid,'SIGTERM');}catch{}
  await Promise.race([exit,new Promise(resolve=>setTimeout(resolve,3000))]);
  try {process.kill(-child.pid,'SIGKILL');}catch{}
}
const log=output.join('');
await mkdir(path.join(root,'rea/evidence'),{recursive:true});
await writeFile(path.join(root,'rea/evidence','smoke.log'),log);
const failures=log.split('\n').filter(line=>/uncaught|ReferenceError|SyntaxError|TypeError|Error in sandboxed preload|Unable to load preload|Cannot find module/.test(line));
const result={executable,profile,aliveAfter12Seconds:alive,exit:ended,failures,limitation:'Development runtime process smoke; avoids packaged move-to-Applications gate. No signed-in backend or packaged UI acceptance.'};
await writeFile(path.join(root,'rea/evidence','smoke-result.json'),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result,null,2));
if(!alive||failures.length)process.exitCode=1;
