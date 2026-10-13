import { c as memo, r as hooks } from './index.eager-vendor-Qbf9YA6n.js';
import { bg as useSelectedSnapshot, b7 as useServices, bh as retainedValue, b8 as useCommand, bi as createStageStore } from './index.eager-app-Cj5f8Gby.js';
import { registerDebugId } from './debug-metadata.js';
import type { Observable, AsyncSnapshot, CredentialStatus, MintOutcome, MintRequest, CredentialsService } from './credentials-contracts.js';
registerDebugId('cee7ef77-5090-4076-a027-2c99d2e759a9');
function useObservable<T>(store: Observable<T>): T { return hooks.useSyncExternalStore(store.subscribe, store.get, store.get); }
export function u(): boolean { return useSelectedSnapshot(useServices().credentials.statusSnapshots, state => retainedValue(state)?.connected === true); }
export interface CredentialView<T> { data: T | null | undefined; error: unknown; isFetching: boolean; refresh(): void }
function useCredentialView<T>(service: CredentialsService, store: Observable<AsyncSnapshot<T>>, emptyAsNull: boolean): CredentialView<T> {
 const cache = memo.c(9);
 const state = useObservable(store);
 if (cache[0] !== state) { cache[0] = state; cache[1] = emptyAsNull && state.status === 'empty' ? null : retainedValue(state); }
 const data = cache[1] as T | null | undefined;
 const error = state.status === 'failed' ? state.failure : null;
 const isFetching = state.status === 'loading';
 if (cache[2] !== service) { cache[2] = service; cache[3] = () => { service.refresh(); }; }
 const refresh = cache[3] as () => void;
 if (cache[4] !== data || cache[5] !== error || cache[6] !== isFetching || cache[7] !== refresh) {
  cache[8] = { data, error, isFetching, refresh } satisfies CredentialView<T>;
  [cache[4],cache[5],cache[6],cache[7]] = [data,error,isFetching,refresh];
 }
 return cache[8] as CredentialView<T>;
}
export function e(): CredentialView<CredentialStatus> { const service = useServices().credentials; return useCredentialView(service,service.statusSnapshots,false); }
export function a(): CredentialView<readonly import('./credentials-contracts.js').CredentialDirectoryEntry[]> { const service = useServices().credentials; return useCredentialView(service,service.directorySnapshots,true); }
export function b(): Pick<CredentialsService,'approve'|'deny'> {
 const cache = memo.c(3); const service=useServices().credentials;
 if (cache[0] !== service.approve || cache[1] !== service.deny) { cache[0]=service.approve; cache[1]=service.deny; cache[2]={approve:service.approve,deny:service.deny}; }
 return cache[2] as Pick<CredentialsService,'approve'|'deny'>;
}
export function d(error: unknown): 'permission'|'cancelled'|'denied'|null {
 if (typeof error !== 'object' || error == null || !('code' in error)) return null;
 return error.code === 'permission' || error.code === 'cancelled' || error.code === 'denied' ? error.code : null;
}
function unwrapMint(outcome: MintOutcome): unknown {
 if (!outcome.ok) throw Object.assign(new Error(outcome.message),{code:outcome.code});
 return outcome.result;
}
export interface MintOptions { onSuccessHoldChange?: (held:boolean)=>void; onSuccessComplete?: ()=>void }
export interface MintController { readiness: unknown; isCheckingReadiness: boolean; refreshReadiness(): void; start(request:MintRequest): Promise<unknown>; stage:string|null; isMinting:boolean }
export function c(_unused:unknown, options:MintOptions): MintController {
 const cache=memo.c(16);
 const {onSuccessHoldChange,onSuccessComplete}=options;
 const {credentials}=useServices();
 const [stageStore]=hooks.useState(createStageStore);
 const [pending,setPending]=hooks.useState(false);
 const readinessState=useObservable(credentials.readinessSnapshots);
 const stage=hooks.useSyncExternalStore(stageStore.subscribe,stageStore.read,stageStore.read);
 if(cache[0]!==credentials||cache[1]!==onSuccessComplete||cache[2]!==onSuccessHoldChange||cache[3]!==stageStore){
  cache[4]=async(request:MintRequest)=>{
   setPending(true);stageStore.set('checking');
   return await credentials.startMint(request).then(outcome=>{
    const result=unwrapMint(outcome);onSuccessHoldChange?.(true);
    stageStore.holdConnected(()=>{credentials.refresh().finally(()=>{onSuccessComplete?.();onSuccessHoldChange?.(false);stageStore.set(null);});});
    return result;
   },error=>{stageStore.set(null);onSuccessHoldChange?.(false);credentials.refresh();throw error;}).finally(()=>setPending(false));
  };
  [cache[0],cache[1],cache[2],cache[3]]=[credentials,onSuccessComplete,onSuccessHoldChange,stageStore];
 }
 const start=cache[4] as MintController['start'];
 if(cache[5]!==readinessState){cache[5]=readinessState;cache[6]=retainedValue(readinessState);}
 const readiness=cache[6];const isCheckingReadiness=readinessState.status==='loading';
 if(cache[7]!==credentials){cache[7]=credentials;cache[8]=()=>{credentials.refreshReadiness();};}
 const refreshReadiness=cache[8] as ()=>void;
 const isMinting=pending||stage==='connected';
 if(cache[9]!==stage||cache[10]!==start||cache[11]!==readiness||cache[12]!==isCheckingReadiness||cache[13]!==refreshReadiness||cache[14]!==isMinting){
  cache[15]={readiness,isCheckingReadiness,refreshReadiness,start,stage,isMinting} satisfies MintController;
  [cache[9],cache[10],cache[11],cache[12],cache[13],cache[14]]=[stage,start,readiness,isCheckingReadiness,refreshReadiness,isMinting];
 }
 return cache[15] as MintController;
}
export interface RenewalDetails { accountUuid:string; vaultName:string; connectionId:string; accountEmail?:string|null; accountUrl?:string|null }
export interface CredentialActions { sync(...args:unknown[]):unknown; disconnect(...args:unknown[]):unknown; renew(details:RenewalDetails,serviceAccountToken?:string|null):Promise<unknown>; connectOAuth(...args:unknown[]):unknown; cancelOAuth():unknown; isConnectingOAuth:boolean; isPending:boolean }
export function f():CredentialActions {
 const cache=memo.c(10);const {credentials}=useServices();
 const sync=useCommand(credentials.sync);const disconnect=useCommand(credentials.disconnect);
 const [renewing,setRenewing]=hooks.useState(false);
 if(cache[0]!==credentials){
  cache[0]=credentials;
  cache[1]=async(details:RenewalDetails,serviceAccountToken?:string|null)=>{
   setRenewing(true);
   const request:MintRequest=serviceAccountToken==null?{accountUuid:details.accountUuid,vaultName:details.vaultName,connectionId:details.connectionId,...details.accountEmail==null?{}:{accountEmail:details.accountEmail},...details.accountUrl==null?{}:{accountUrl:details.accountUrl}}:{serviceAccountToken,connectionId:details.connectionId};
   return await credentials.startMint(request).then(outcome=>{const result=unwrapMint(outcome);credentials.refresh();return result;},error=>{credentials.refresh();throw error;}).finally(()=>setRenewing(false));
  };
 }
 const renew=cache[1] as CredentialActions['renew'];const oauth=useCommand(credentials.connectOAuth);
 const isPending=sync.isPending||disconnect.isPending||renewing||oauth.isPending;
 if(cache[2]!==oauth.isPending||cache[3]!==oauth.run||cache[4]!==credentials.cancelOAuth||cache[5]!==disconnect.run||cache[6]!==renew||cache[7]!==sync.run||cache[8]!==isPending){
  cache[9]={sync:sync.run,disconnect:disconnect.run,renew,connectOAuth:oauth.run,cancelOAuth:credentials.cancelOAuth,isConnectingOAuth:oauth.isPending,isPending} satisfies CredentialActions;
  [cache[2],cache[3],cache[4],cache[5],cache[6],cache[7],cache[8]]=[oauth.isPending,oauth.run,credentials.cancelOAuth,disconnect.run,renew,sync.run,isPending];
 }
 return cache[9] as CredentialActions;
}
