// Inert shipped declaration. Original: recovered/dist/renderer/assets/index.eager-app-Cj5f8Gby.js offsets 1536958-1537220
function xFe({clock:e,settleMs:t,rootNeverPopulatedFallbackMs:n,tasks:s}){let r=!1,o=()=>{};const i=new Promise(c=>{o=c}),a=()=>{if(!r){r=!0;for(const c of s)c();o()}},l=e.schedule(n,a);return{released:i,noteRootPopulated:()=>{r||(l.dispose(),e.schedule(t,a))}}}
