import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {parse} from '@babel/parser';
import traverseModule from '@babel/traverse';
import generatorModule from '@babel/generator';
import * as t from '@babel/types';
import ts from 'typescript';
import {transformSync} from 'esbuild';
const traverse=traverseModule.default??traverseModule;
const generate=generatorModule.default??generatorModule;
const any=()=>t.tsAnyKeyword();
const asAny=node=>t.parenthesizedExpression(t.tsAsExpression(node,any()));
const annotation=()=>t.tsTypeAnnotation(any());
const hash=s=>crypto.createHash('sha256').update(s).digest('hex');
export function portSource(source,filename='input.js') {
 const ast=parse(source,{sourceType:'unambiguous',allowReturnOutsideFunction:true});
 let dynamic=0,primitive=0;const declarations=new WeakMap();traverse(ast,{VariableDeclarator(p){if(t.isIdentifier(p.node.id)){const binding=p.scope.getBinding(p.node.id.name);if(binding)declarations.set(binding,(declarations.get(binding)??0)+1);}}});
 function annotate(pattern,optional=false) {
  if(t.isAssignmentPattern(pattern))return annotate(pattern.left);
  if(t.isRestElement(pattern)){pattern.typeAnnotation=annotation();dynamic++;return;}
  if(t.isIdentifier(pattern)||t.isObjectPattern(pattern)||t.isArrayPattern(pattern)) {
   pattern.typeAnnotation=annotation();if(optional&&t.isIdentifier(pattern))pattern.optional=true;dynamic++;
  }
 }
 const hoisted=new Map();traverse(ast,{ForInStatement(p){const declaration=p.node.left;if(!t.isVariableDeclaration(declaration,{kind:'var'}))return;const entry=declaration.declarations[0];if(entry.init)throw new Error('for-in var initializer requires explicit semantic reconstruction');if(!t.isIdentifier(entry.id))return;if(p.findParent(q=>q.isCatchClause()&&t.isIdentifier(q.node.param,{name:entry.id.name})))throw new Error('for-in catch parameter alias requires explicit semantic reconstruction');const owner=p.findParent(q=>q.isFunction()||q.isStaticBlock()||q.isProgram());const names=hoisted.get(owner.node)??new Set();names.add(entry.id.name);hoisted.set(owner.node,names);p.node.left=t.identifier(entry.id.name);}});for(const [owner,names]of hoisted){const body=t.isProgram(owner)||t.isStaticBlock(owner)?owner.body:owner.body.body;body.unshift(t.variableDeclaration('var',[...names].map(name=>t.variableDeclarator(t.identifier(name)))));}
 traverse(ast,{
  Function(p){if(p.node.kind==='get'){let returns=false;p.traverse({ReturnStatement(q){if(q.getFunctionParent()===p)returns=true;}});if(!returns&&!t.isThrowStatement(p.node.body.body.at(-1)))p.node.body.body.push(t.returnStatement(t.unaryExpression('void',t.numericLiteral(0))));}if(t.isFunctionExpression(p.node)||t.isFunctionDeclaration(p.node)){const self=t.identifier('this');self.typeAnnotation=annotation();p.node.params.unshift(self);dynamic++;}p.node.params.forEach(n=>annotate(n,false));if(!t.isClassMethod(p.node,{kind:'constructor'})&&!t.isClassPrivateMethod(p.node,{kind:'constructor'})&&p.node.kind!=='set') {p.node.returnType=t.tsTypeAnnotation(p.node.generator?t.tsTypeReference(t.identifier(p.node.async?'AsyncGenerator':'Generator'),t.tsTypeParameterInstantiation([any(),any(),any()])):p.node.async?t.tsTypeReference(t.identifier('Promise'),t.tsTypeParameterInstantiation([any()])):any());dynamic++;}},
  VariableDeclarator(p){if(p.node.init&&p.scope.getBinding(p.node.id.name)?.constant&&p.scope.getBinding(p.node.id.name)?.path.isVariableDeclarator()&&declarations.get(p.scope.getBinding(p.node.id.name))===1&&t.isIdentifier(p.node.id)&&(t.isStringLiteral(p.node.init)||t.isNumericLiteral(p.node.init)||t.isBooleanLiteral(p.node.init))){p.node.id.typeAnnotation=t.tsTypeAnnotation(t.isStringLiteral(p.node.init)?t.tsStringKeyword():t.isNumericLiteral(p.node.init)?t.tsNumberKeyword():t.tsBooleanKeyword());primitive++;return;}if(p.parentPath.parentPath.isForInStatement()||p.parentPath.parentPath.isForOfStatement())return;if(t.isIdentifier(p.node.id)){p.node.id.typeAnnotation=annotation();dynamic++;}else annotate(p.node.id);},
  CatchClause(p){if(p.node.param)annotate(p.node.param);},
  Class(p){
   if(p.node.superClass)p.node.superClass=asAny(p.node.superClass);
   const signature=t.tsIndexSignature([Object.assign(t.identifier('key'),{typeAnnotation:t.tsTypeAnnotation(t.tsStringKeyword())})],annotation());p.node.body.body.unshift(signature);dynamic++;
   const present=new Set(p.node.body.body.filter(n=>!n.computed).map(n=>n.key?.name));
   p.traverse({AssignmentExpression(q){if(q.getFunctionParent()?.findParent(n=>n.isClass())!==p)return;const left=q.node.left;if(t.isMemberExpression(left)&&t.isThisExpression(left.object)&&!left.computed&&t.isIdentifier(left.property)&&!present.has(left.property.name)){const field=t.classProperty(t.identifier(left.property.name),null,annotation());field.declare=true;p.node.body.body.unshift(field);present.add(left.property.name);dynamic++;}}});
  },
  SequenceExpression(p){p.node.expressions=p.node.expressions.map((n,i)=>i<p.node.expressions.length-1&&(t.isNumericLiteral(n)||t.isStringLiteral(n)||t.isBooleanLiteral(n)||t.isNullLiteral(n)||t.isIdentifier(n))?t.unaryExpression('void',n):n);},
  ClassProperty(p){p.node.typeAnnotation=annotation();dynamic++;},
  ClassPrivateProperty(p){p.node.typeAnnotation=annotation();dynamic++;},
  BinaryExpression:{exit(p){if(!['in','instanceof'].includes(p.node.operator)){p.node.left=asAny(p.node.left);p.node.right=asAny(p.node.right);dynamic+=2;}}},
  AssignmentExpression:{exit(p){if(p.node.operator!=='='&&t.isIdentifier(p.node.left)){const binding=p.scope.getBinding(p.node.left.name);if(binding?.path.isVariableDeclarator()&&binding.path.parentPath.parentPath.isForInStatement()){p.node.left=asAny(p.node.left);dynamic++;return;}}if(t.isIdentifier(p.node.left)&&p.scope.getBinding(p.node.left.name)?.path.isFunctionDeclaration()){p.node.left=asAny(p.node.left);dynamic++;}}},
  CallExpression:{exit(p){if(!t.isSuper(p.node.callee)&&!t.isImport(p.node.callee)){p.node.callee=asAny(p.node.callee);dynamic++;}}},
  NewExpression:{exit(p){p.node.callee=asAny(p.node.callee);dynamic++;}},
  MemberExpression:{exit(p){if(t.isIdentifier(p.node.object,{name:'Symbol'})&&!p.scope.getBinding('Symbol')&&t.isIdentifier(p.node.property)&&['iterator','asyncIterator'].includes(p.node.property.name)&&p.parentPath.isClassMethod()&&p.parent.key===p.node)return;if(!t.isSuper(p.node.object)&&!t.isPrivateName(p.node.property)){p.node.object=asAny(p.node.object);dynamic++;}}},
 });
 const unknown=new Set();traverse(ast,{ReferencedIdentifier(p){if(!p.findParent(q=>q.isTSType())&&!p.scope.hasBinding(p.node.name)&&p.node.name!=='arguments')unknown.add(p.node.name);}});
 const globals=[...unknown].sort().map(name=>`declare var ${name}: any;`).join('\n');
 const printed=generate(ast,{comments:true,compact:false}).code;
 const code=(printed.startsWith('#!')?printed.slice(0,printed.indexOf('\n')+1)+globals+'\n'+printed.slice(printed.indexOf('\n')+1):globals+'\n'+printed)+'\n';
 return {code,dynamic:dynamic+unknown.size,primitive,ambientGlobals:[...unknown].sort(),sourceHash:hash(source),filename};
}
export function eraseTypes(code){return transformSync(code,{loader:'ts',target:'esnext',tsconfigRaw:{compilerOptions:{verbatimModuleSyntax:true}}}).code;}
export function semanticAst(code){const original=parse(code,{sourceType:'unambiguous',allowReturnOutsideFunction:true});traverse(original,{ForInStatement(p){if(t.isVariableDeclaration(p.node.left)&&p.node.left.declarations.some(d=>d.init))throw new Error('for-in initializer cannot be normalized');}});code=transformSync(code,{loader:'js',target:'esnext',tsconfigRaw:{compilerOptions:{verbatimModuleSyntax:true}}}).code;const ast=parse(code,{sourceType:'unambiguous',allowReturnOutsideFunction:true});const varBindings=new Map();traverse(ast,{Function(p){if(p.node.kind==='get'){const last=p.node.body.body.at(-1);if(t.isReturnStatement(last)&&t.isUnaryExpression(last.argument,{operator:'void'})&&t.isNumericLiteral(last.argument.argument))p.node.body.body.pop();}},VariableDeclaration(p){if(p.node.kind!=='var')return;const owner=(p.findParent(q=>q.isFunction()||q.isStaticBlock()||q.isProgram()))?.node;if(!owner)return;const names=varBindings.get(owner)??new Set();for(const d of p.node.declarations)if(t.isIdentifier(d.id))names.add(d.id.name);varBindings.set(owner,names);}});for(const [owner,names]of varBindings)owner.portVarBindings=[...names].sort();traverse(ast,{ForInStatement(p){if(t.isVariableDeclaration(p.node.left,{kind:'var'})&&p.node.left.declarations.some(d=>d.init))throw new Error('for-in initializer cannot be normalized');if(t.isVariableDeclaration(p.node.left,{kind:'var'})&&p.node.left.declarations.length===1&&t.isIdentifier(p.node.left.declarations[0].id))p.node.left=p.node.left.declarations[0].id;},VariableDeclaration(p){if(p.node.kind!=='var'||p.parentPath.isForOfStatement())return;p.node.declarations=p.node.declarations.filter(d=>d.init!==null||!t.isIdentifier(d.id));if(!p.node.declarations.length){if(p.parentPath.isForStatement())p.parent.init=null;else p.remove();}},IfStatement:{exit(p){for(const key of ['consequent','alternate']){const node=p.node[key];if(t.isBlockStatement(node)&&node.body.length===1&&node.directives.length===0&&(t.isIfStatement(node.body[0])||t.isForOfStatement(node.body[0])||t.isForInStatement(node.body[0])||t.isForStatement(node.body[0])||t.isWhileStatement(node.body[0])||t.isDoWhileStatement(node.body[0])))p.node[key]=node.body[0];}}},LogicalExpression:{exit(p){const operator=p.node.operator,parts=[];function collect(n){if(t.isLogicalExpression(n,{operator})){collect(n.left);collect(n.right);}else parts.push(n);}collect(p.node);let result=parts.shift();for(const part of parts)result=t.logicalExpression(operator,result,part);p.node.left=result.left;p.node.right=result.right;}},SequenceExpression(p){p.node.expressions=p.node.expressions.map((n,i)=>i<p.node.expressions.length-1&&t.isUnaryExpression(n,{operator:'void'})?n.argument:n);}});const clean=JSON.parse(JSON.stringify(ast,(key,value)=>['start','end','loc','extra','comments','leadingComments','trailingComments','innerComments','tokens','errors'].includes(key)?undefined:value));return clean.program;}
export function semanticFingerprint(code){return hash(JSON.stringify(semanticAst(code),(_key,value)=>value&&!Array.isArray(value)&&typeof value==='object'?Object.fromEntries(Object.entries(value).sort(([a],[b])=>a.localeCompare(b))):value));}
export function assertErasure(source,code){const original=semanticFingerprint(source),erased=semanticFingerprint(eraseTypes(code));if(original!==erased)throw new Error('Erased AST mismatch');return original;}
if(process.argv[1]&&path.resolve(process.argv[1])===path.resolve(new URL(import.meta.url).pathname)) {
 const input=process.argv[2],output=process.argv[3];if(!input||!output)throw new Error('Usage: node rea/scripts/ts-port-generate.mjs INPUT.js OUTPUT.ts');
 const source=fs.readFileSync(input,'utf8');const result=portSource(source,input);result.erasedAstHash=assertErasure(source,result.code);fs.mkdirSync(path.dirname(output),{recursive:true});fs.writeFileSync(output,result.code);delete result.code;console.log(JSON.stringify(result));
}
