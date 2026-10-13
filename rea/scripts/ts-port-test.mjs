import assert from 'node:assert/strict';
import vm from 'node:vm';
import {portSource,eraseTypes,assertErasure} from './ts-port-generate.mjs';
import {checkSource} from './ts-port-check.mjs';
const cases=[
 `var out=[];for(let k in {1:1,2:2}){k|=0;out.push(k)}module.exports=out;`,
 `class A{*[Symbol.iterator](){yield 2;yield 3;}}var a=new A,out=[];if(a instanceof A)for(const n of a)out.push(n);module.exports=out;`,
 `var events=[];var o={get x(){events.push("get")}};module.exports=[o.x,events];`,
 `var o={get x(){throw new Error("getter")}};try{o.x}catch(e){module.exports=e.message}`,

 `class A{static{for(var key in {a:1}){}this.key=key;}}module.exports=[A.key,typeof key];`,
 `var f=()=>{for(var k in {a:1}){}return k;};module.exports=f();`,
 `for(var key in {a:1}){}module.exports=[key,Object.prototype.hasOwnProperty.call(globalThis,"key")];`,
 `function f(e){for(var n in e){}var n=[2];return n[0];}module.exports=f({a:1});`,
 `function F(a,b){this.a=a;this.b=b;}F.prototype.sum=function(){return this.a+this.b};var f=new F(2,3);module.exports=[F.length,f.sum(),F.prototype.sum.length];`,
 `var log=[];class A{get x(){log.push('get');return 2;}m(a){return this.x+a;}}class B extends A{#x=3;constructor(a){super();this.a=a;}m(a){return super.m(a)+this.#x;}}var b=new B(4);module.exports=[b.m(1),log,B.length,Object.keys(b)];`,
 `var a=1,b=2;function fn(){return this.tag;}var o={tag:3,fn};module.exports=[o.fn(),(0,o.fn)(),a&&(b&&3),(0,3)];`,
 `var x={a:1,b:2},sum=0;for(var k in x)sum+=x[k];for(var n of [3,4])sum+=n;try{throw 5}catch(e){sum+=e}module.exports=sum;`,
 `function f(){return 1;}f=function(){return 2;};module.exports=[f(),f.length];`,
 `var log=[];class A{static x=(log.push('static'),1);y=(log.push('field'),2);constructor(){log.push('ctor');this.z=3;}}module.exports=[log,new A(),log];`,
 `function f(){return eval('1 + 2')}module.exports=f();`,
];
for(const [i,source]of cases.entries()){const result=portSource(source,`fixture-${i}.cjs`);assertErasure(source,result.code);const check=checkSource(result.code,`fixture-${i}.cts`);assert.equal(check.diagnostics.length,0,JSON.stringify(check.diagnostics));const run=s=>{const context={module:{exports:{}},console};vm.runInNewContext(s,context);return JSON.stringify(context.module.exports)};assert.equal(run(eraseTypes(result.code)),run(source));}
assert.throws(()=>portSource(`var e;try{throw {a:1}}catch(e){for(var e in e){}}`),/catch parameter alias/);
assert.throws(()=>assertErasure(`var calls=0;for(var k=(calls++,5) in {}){}module.exports=calls;`,`declare var module:any;var calls:any=0;var k:any;for(k in {}){}module.exports=calls;`),/initializer/);
assert.throws(()=>portSource(`var calls=0;for(var k=(calls++,5) in {}){}module.exports=calls;`),/initializer/);
console.log(`TypeScript source port: ${cases.length} strict, AST-equivalent runtime fixtures passed.`);
