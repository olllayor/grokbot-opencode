function wn(){return{}}
function k0t(e){let t=e["~standard"];return typeof t=="object"&&t!==null&&t.version===1&&typeof t.validate=="function"}
function w(){return{noArgs:{schema:null},args:e=>{if(k0t(e))return{schema:e};for(let[t,r]of Object.entries(e))if(typeof r?.check!="function")throw new JN(t);return{schema:(0,RRe.rpcObject)(e)}}}}
function Po(e,t){return Object.freeze({kind:"rpc-edge",edge:e,methods:t.methods,hasEvents:t.events!=null})}
function f4(e){return(t,r)=>new ar({code:t,detail:r})}
function m4(e,t){return t instanceof ar}
function Sl(){return(e,t)=>{let r={};for(let[n,o]of Object.entries(t))r[n]={trust:e,run:o};return r}}
function w0t(e,t){return`dune-rpc:${e}:m:${t}`}
function NRe(e,t){return`dune-rpc:${e}:e:${t}`}
function T0t(e){return`dune-rpc:${e}:probe`}
function g4(e,t){return e.length<=t?e:`${e.slice(0,t)}\u2026`}
function R0t(e){if(!Array.isArray(e))return"args";let t="args";for(let r of e){let n=typeof r=="object"&&r!==null?r.key:r;if(t+=typeof n=="number"?`[${n}]`:`.${String(n)}`,t.length>MRe)break}return g4(t,MRe)}
function x0t(e,t){let[r]=t;if(typeof r!="object"||r===null)return null;let n=r.message;if(typeof n!="string")return null;let o=R0t(r.path),i=t.length>1?` (+${t.length-1} more)`:"";return`${e}: ${o}: ${g4(n,LRe)}${i}`}
function xh(e,t){let r=t==="threw"?`${e}: the args validator threw`:`${e}: the args validator returned a malformed result`;return{ok:!1,failure:{code:DRe,detail:r}}}
async function M0t(e,t,r){let n;try{n=await t(r)}catch{return xh(e,"threw")}try{if(typeof n!="object"||n===null)return xh(e,"malformed");let o=n.issues;if(o==null)return Object.hasOwn(n,"value")?{ok:!0,value:n.value}:xh(e,"malformed");if(!Array.isArray(o)||o.length===0)return xh(e,"malformed");let i=x0t(e,o);return i===null?xh(e,"malformed"):{ok:!1,failure:{code:p4,detail:i}}}catch{return xh(e,"malformed")}}
function P0t(e,t,r){return typeof r!="string"?{ok:!1,failure:{code:p4,detail:"probe: the payload must be a method name."}}:t.has(r)?{ok:!0,value:!0}:{ok:!1,failure:{code:BRe,detail:`${g4(r,LRe)}: the ${e} edge does not serve this method.`}}}
function B0t(e,t,r){let n={fail:(l,d)=>new ar({code:l,detail:d})},o=[];for(let{method:l,validate:d}of t){let u=r.handlers[l];if(u==null)throw new xC({edge:e,method:l,trust:"<missing handler>"});let m=r.trust[u.trust];if(m==null)throw new xC({edge:e,method:l,trust:u.trust});let A=w0t(e,l);o.push(A),r.transport.handle(A,async(h,y)=>{if(m.kind==="require"&&!m.test(h))return r.report?.({method:l,trust:u.trust}),{ok:!1,failure:{code:ORe,detail:m.denial}};let _=y;if(d!=null){let b=await M0t(l,d,y);if(!b.ok)return{ok:!1,failure:b.failure};_=b.value}try{return{ok:!0,value:await u.run(_,h,n)}}catch(b){if(b instanceof ar)return{ok:!1,failure:{code:b.code,detail:b.detail}};let I=b instanceof Error?b.message:String(b);return{ok:!1,failure:{code:ZN,detail:I}}}})}let i=new Set(t.map(l=>l.method)),a=T0t(e);o.push(a),r.transport.handle(a,async(l,d)=>P0t(e,i,d));let c=!1;return{emit:(l,d)=>{r.transport.broadcast(NRe(e,l),d)},dispose:()=>{if(!c){c=!0;for(let l of o)r.transport.removeHandler(l)}}}}
function D0t(e){return Object.entries(e.methods).map(([t,{schema:r}])=>({method:t,validate:(r??O0t)["~standard"].validate}))}
function _l(e,t){let r=B0t(e.edge,D0t(e),t);return ch()?.register({kind:"rpc-edge",role:"serve",declaration:e,trust:Object.keys(t.trust)}),r}