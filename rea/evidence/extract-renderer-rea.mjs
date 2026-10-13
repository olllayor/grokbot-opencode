import fs from 'node:fs';
import {parse} from '@babel/parser';
import {createHash} from 'node:crypto';
const selections={
'rea/recovered/dist/renderer/assets/index-ZYxf-aBb.js':['x6','BRe','GRe','VRe'],
'rea/recovered/dist/renderer/assets/index.eager-app-Cj5f8Gby.js':['kp','YL','Pb','Hs','el','ZL','ly','wd','QL','JL','xFe','nn','Qhe','fce','pce'],
};
const provenance=[];
for (const [file,names] of Object.entries(selections)) {
 const source=fs.readFileSync(file,'utf8'); const ast=parse(source,{sourceType:'module'});
 const nodes=ast.program.body.filter(node=>['FunctionDeclaration','ClassDeclaration'].includes(node.type)&&names.includes(node.id?.name));
 if(nodes.length!==names.length)throw Error('missing selection');
 for(const node of nodes){const text=source.slice(node.start,node.end), output=`rea/evidence/rea-input/renderer/${node.id.name}.js`;fs.writeFileSync(output,`// Inert shipped declaration. Original: ${file} offsets ${node.start}-${node.end}\n${text}\n`);provenance.push({symbol:node.id.name,original:file,start:node.start,end:node.end,sha256:createHash('sha256').update(text).digest('hex'),output});}
}
fs.writeFileSync('rea/evidence/rea-input/renderer/provenance.json',JSON.stringify(provenance,null,2)+'\n');
console.log(`${provenance.length} inert declarations extracted.`);
