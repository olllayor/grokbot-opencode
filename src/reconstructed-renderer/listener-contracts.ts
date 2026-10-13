import type { AsyncSnapshot, Observable, Command } from './credentials-contracts.js';
export interface ListenerIntegrationView { readonly [field: string]: unknown }
export interface ListenerIntegrationServices {
 snapshots: Observable<AsyncSnapshot<ListenerIntegrationView>>;
 slackLink: { snapshots: Observable<AsyncSnapshot<boolean>> };
 repoAccess(repository: string): { snapshots: Observable<AsyncSnapshot<boolean>> };
 connectPlatform: Command<[platform: string, options?: { forceOauth: true }]>;
 disconnectPlatform: Command<[platform: string]>;
}
