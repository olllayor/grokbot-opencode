import {homedir} from 'node:os';
import {isAbsolute,join,relative,resolve} from 'node:path';
import {resolveUserDataDirectory} from '../electron-main/user-data.js';
export function isBelowRoot(root:string,target:string,options:{isInclusive?:boolean}={}):boolean{const rel=relative(resolve(root),resolve(target));return rel===''?(options.isInclusive??false):!rel.startsWith('..')&&!isAbsolute(rel);}
export function fileURLPath(value:string):string|null{try{const url=new URL(value);return url.protocol!=='file:'?null:decodeURIComponent(url.pathname);}catch{return null;}}
export function applicationVariant(packaged:boolean,lab:boolean):'sand'|'sand-lab'|'sand-dev'{return packaged?(lab?'sand-lab':'sand'):'sand-dev';}
export function canonicalDataRoot(home=homedir()):string{return join(home,'.grokbot');}
export function legacyDataRoot(home=homedir()):string{return join(home,'.cursor','sand');}
export function dataRootOverride(env:NodeJS.ProcessEnv=process.env):string|null{const value=env.SAND_DATA_ROOT?.trim();return value!=null&&value.length>0&&isAbsolute(value)?value:null;}
export function dataRoot(home=homedir()):string{const override=dataRootOverride();if(override!==null)return override;const isolated=resolveUserDataDirectory([],process.env);if(isolated!==null)return join(isolated,'sand-data');const variant=applicationVariant(process.env.SAND_PACKAGED==='1',process.env.SAND_LAB==='1');return variant==='sand'?canonicalDataRoot(home):join(home,'.cursor',variant);}
export function portablePathSuffix(value:string,options:{acceptBoxModelVisibleAlias?:boolean}):string|null{const match=/(?:[/\\]\.cursor[/\\]sand(?:-[^/\\]+)?|[/\\]\.grokbot)[/\\](.+)$/.exec(value);if(match?.[1]!=null)return match[1];if(options.acceptBoxModelVisibleAlias!==true||!isBelowRoot('/home/box/agent-data',value))return null;const rel=relative('/home/box/agent-data',value);return rel.length===0?null:rel;}
export function rebaseDataPath(value:string,options:{acceptBoxModelVisibleAlias?:boolean}={}):string{const root=dataRoot();if(isBelowRoot(root,value,{isInclusive:true}))return value;const suffix=portablePathSuffix(value,options);if(suffix===null)return value;const parts=suffix.split(/[/\\]+/);return parts.some(part=>part==='.'||part==='..')?value:join(root,...parts);}
export const computerUseRoot=(home=homedir()):string=>join(dataRoot(home),'computer-use');
export const hostTokenPath=(home=homedir()):string=>join(dataRoot(home),'host-token.json');
export const localToolApprovalsPath=(home=homedir()):string=>join(dataRoot(home),'local-tool-approvals.json');
export const localToolStandingGrantsPath=(home=homedir()):string=>join(dataRoot(home),'local-tool-standing-grants.v1.json');
