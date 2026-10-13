export type AsyncSnapshot<T> = { status: 'ready'; value: T } | { status: 'loading'; previous?: T } | { status: 'failed'; failure: unknown; previous?: T } | { status: 'empty' | 'unavailable' };
export interface Observable<T> { get(): T; subscribe(callback: () => void): () => void }
export interface StageStore { subscribe(callback: () => void): () => void; read(): string | null; set(stage: string | null): void; holdConnected(callback: () => void): void }
export interface CredentialStatus { connected?: boolean }
export interface CredentialDirectoryEntry { [field: string]: unknown }
export interface MintRequest { connectionId: string; accountUuid?: string; vaultName?: string; accountEmail?: string; accountUrl?: string; serviceAccountToken?: string }
export type MintOutcome = { ok: true; result: unknown } | { ok: false; message: string; code: string };
export interface Command<Args extends unknown[] = unknown[]> { readonly __arguments?: Args }
export interface CredentialsService {
 statusSnapshots: Observable<AsyncSnapshot<CredentialStatus>>;
 directorySnapshots: Observable<AsyncSnapshot<readonly CredentialDirectoryEntry[]>>;
 readinessSnapshots: Observable<AsyncSnapshot<unknown>>;
 refresh(): Promise<unknown>;
 refreshReadiness(): unknown;
 startMint(request: MintRequest): Promise<MintOutcome>;
 approve: (request: unknown) => unknown;
 deny: (request: unknown) => unknown;
 sync: Command;
 disconnect: Command;
 connectOAuth: Command;
 cancelOAuth: () => unknown;
}
export interface CommandState<Args extends unknown[]> { isPending: boolean; run(...args: Args): unknown }
