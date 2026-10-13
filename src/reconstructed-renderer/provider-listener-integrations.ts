import { c as memo } from './index.eager-vendor-Qbf9YA6n.js';
import { bP as useSnapshot, b7 as useServices, bh as retainedValue, bQ as defaultView, b8 as useCommand } from './index.eager-app-Cj5f8Gby.js';
import { registerDebugId } from './debug-metadata.js';
import type { AsyncSnapshot, Observable } from './credentials-contracts.js';
import type { ListenerIntegrationView } from './listener-contracts.js';
registerDebugId('52b5bf0e-9f3e-4a9b-8440-a347e786741a');
export interface IntegrationView { view: ListenerIntegrationView; isLoading: boolean }
export function u(): IntegrationView {
 const cache=memo.c(5);const state=useSnapshot(useServices().listenerIntegrations.snapshots);
 if(cache[0]!==state){cache[0]=state;cache[1]=retainedValue(state)??defaultView;}
 const view=cache[1] as ListenerIntegrationView;
 const isLoading=(state.status==='loading'||state.status==='failed')&&state.previous==null;
 if(cache[2]!==view||cache[3]!==isLoading){cache[2]=view;cache[3]=isLoading;cache[4]={view,isLoading};}
 return cache[4] as IntegrationView;
}
export interface SlackLinkState { isLinked:boolean; isLoading:boolean }
export function c(): SlackLinkState {
 const cache=memo.c(5);const state=useSnapshot(useServices().listenerIntegrations.slackLink.snapshots);
 if(cache[0]!==state){cache[0]=state;cache[1]=retainedValue(state);}
 const isLinked=cache[1]===true;const isLoading=state.status==='loading'&&state.previous==null;
 if(cache[2]!==isLinked||cache[3]!==isLoading){cache[2]=isLinked;cache[3]=isLoading;cache[4]={isLinked,isLoading};}
 return cache[4] as SlackLinkState;
}
const unavailableRepository: AsyncSnapshot<boolean>={status:'ready',value:false};
const unavailableRepositoryStore: Observable<AsyncSnapshot<boolean>>={get:()=>unavailableRepository,subscribe:()=>()=>{}};
export function b(repository: string|null|undefined): boolean|undefined {
 const cache=memo.c(5);const services=useServices();
 if(cache[0]!==services||cache[1]!==repository){cache[0]=services;cache[1]=repository;cache[2]=repository==null||repository.length===0?unavailableRepositoryStore:services.listenerIntegrations.repoAccess(repository).snapshots;}
 const state=useSnapshot(cache[2] as Observable<AsyncSnapshot<boolean>>);
 if(cache[3]!==state){cache[3]=state;cache[4]=retainedValue(state);}
 return cache[4] as boolean|undefined;
}
export interface IntegrationActions { connect(platform:string):unknown; reconnect(platform:string):unknown; disconnect(platform:string):unknown; isPending:boolean }
export function a():IntegrationActions {
 const cache=memo.c(8);const {listenerIntegrations}=useServices();
 const connectCommand=useCommand(listenerIntegrations.connectPlatform);const disconnectCommand=useCommand(listenerIntegrations.disconnectPlatform);
 if(cache[0]!==connectCommand){cache[0]=connectCommand;cache[1]=(platform:string)=>connectCommand.run(platform);cache[2]=(platform:string)=>connectCommand.run(platform,{forceOauth:true});}
 const connect=cache[1] as IntegrationActions['connect'];const reconnect=cache[2] as IntegrationActions['reconnect'];
 const isPending=connectCommand.isPending||disconnectCommand.isPending;
 if(cache[3]!==disconnectCommand.run||cache[4]!==connect||cache[5]!==reconnect||cache[6]!==isPending){
  cache[7]={connect,reconnect,disconnect:disconnectCommand.run,isPending};
  [cache[3],cache[4],cache[5],cache[6]]=[disconnectCommand.run,connect,reconnect,isPending];
 }
 return cache[7] as IntegrationActions;
}
