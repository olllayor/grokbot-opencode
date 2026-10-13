import { randomUUID } from "node:crypto";
import {
  createOnePasswordPolicy,
  type OperationErrorConstructor,
} from "./onepassword-policy.js";
export interface ConnectedAccount {
  connectionId: string;
  accountUuid: string;
  accountEmail?: string;
  accountUrl?: string;
  vaultId: string;
  vaultName: string;
  credentialGeneration: number;
}
export interface ConnectionState {
  accounts: ConnectedAccount[];
  directory: unknown;
}
export interface BeginResult {
  mintTicket: string;
  expectedGeneration: number;
  connectionId?: string;
  vaultId?: string;
  providerExpiresInSeconds?: number;
  expirationMode?: string;
}
export interface CompleteRequest {
  mintTicket: string;
  token: string;
  accountUuid: string;
  accountEmail?: string;
  accountUrl?: string;
}
export interface ConnectionBackend {
  get(signal: AbortSignal): Promise<ConnectionState>;
  sync(reason: string, signal: AbortSignal): Promise<ConnectionState>;
  disconnect(id: string, signal: AbortSignal): Promise<ConnectionState>;
  approve(request: unknown): Promise<unknown>;
  deny(request: unknown): Promise<unknown>;
  begin(
    request: {
      connectionId?: string;
      vaultId?: string;
      serviceAccountToken?: string;
    },
    signal: AbortSignal,
  ): Promise<BeginResult>;
  complete(
    request: CompleteRequest,
    signal: AbortSignal,
  ): Promise<ConnectionState>;
}
export interface DeliveredToken {
  accountUuid: string;
  vaultId: string;
  accountUrl?: string;
  token: string;
}
export interface DeliverySink {
  availability: "available";
  accept(
    token: DeliveredToken,
    signal: AbortSignal,
  ): Promise<{ consumerReference: string }>;
}
export interface Vault {
  vaultId: string;
  vaultName: string;
}
export interface MintBridge {
  inspectReadiness(
    signal: AbortSignal,
  ): Promise<{ state: string; version?: string }>;
  listAccounts(signal: AbortSignal): Promise<unknown>;
  findVault(
    request: { accountUuid: string; vaultName: string },
    signal: AbortSignal,
  ): Promise<Vault | null>;
  createVault(
    request: { accountUuid: string; vaultName: string },
    signal: AbortSignal,
  ): Promise<Vault>;
  mintAndDeliver(
    request: {
      accountUuid: string;
      vaultId: string;
      serviceAccountName: string;
      expiresInSeconds?: number;
    },
    signal: AbortSignal,
  ): Promise<unknown>;
}
export interface ConnectionOptions {
  backend: ConnectionBackend;
  reportConnectorAuth?: (event: Record<string, unknown>) => void;
  createBridge(sink: DeliverySink): Promise<MintBridge> | MintBridge;
}
export interface OperationBudget {
  run<T>(operation: (signal: AbortSignal) => Promise<T>): Promise<T>;
}
export interface ConnectionDependencies {
  OperationError: OperationErrorConstructor;
  backendBudget: OperationBudget;
  mintBudget: OperationBudget;
  reportFailure: (scope: string, event: string, error: unknown) => void;
  setupNotReady: (input: { reason: string }) => unknown;
  setupFailed: (input: { reason: string }) => unknown;
  randomUUID?: () => string;
  now?: () => Date;
}
export interface MintRequest {
  connectionId?: string;
  accountUuid: string;
  accountEmail?: string;
  accountUrl?: string;
  vaultName: string;
  serviceAccountToken?: string;
}
interface Flow {
  reauth?: boolean;
  serverId?: string;
  delivered: boolean;
}
export interface MintResult {
  status: { connected: boolean; accounts: ConnectedAccount[] };
  vaultName: string;
  vaultCreated: boolean;
  serviceAccountName?: string;
  connectionId: string;
  credentialGeneration: number;
}
export function createOnePasswordConnectionServiceClass(
  dependencies: ConnectionDependencies,
) {
  const policy = createOnePasswordPolicy(dependencies.OperationError);
  return class OnePasswordConnectionService {
    bridgePromise: Promise<MintBridge> | null = null;
    state: ConnectionState = { accounts: [], directory: null };
    activeMint: AbortController | null = null;
    activeDelivery: DeliverySink["accept"] | null = null;
    constructor(readonly options: ConnectionOptions) {}
    getBridge(): Promise<MintBridge> {
      return (this.bridgePromise ??= Promise.resolve(
        this.options.createBridge({
          availability: "available",
          accept: async (token, signal) => {
            if (this.activeDelivery === null)
              throw new dependencies.OperationError(
                "sink-unavailable",
                "No 1Password delivery is active.",
              );
            return await this.activeDelivery(token, signal);
          },
        }),
      ));
    }
    applyState(state: ConnectionState) {
      this.state = state;
    }
    async refresh() {
      this.applyState(
        await dependencies.backendBudget.run((signal) =>
          this.options.backend.get(signal),
        ),
      );
    }
    projectStatus() {
      return {
        connected: this.state.accounts.length > 0,
        accounts: this.state.accounts,
      };
    }
    async getState() {
      await this.refresh();
      return { status: this.projectStatus(), directory: this.state.directory };
    }
    async sync(reason = "manual") {
      this.applyState(
        await dependencies.backendBudget.run((signal) =>
          this.options.backend.sync(reason, signal),
        ),
      );
    }
    async disconnect(id: string) {
      this.applyState(
        await dependencies.backendBudget.run((signal) =>
          this.options.backend.disconnect(id, signal),
        ),
      );
    }
    async approve(request: unknown) {
      return await this.options.backend.approve(request);
    }
    async deny(request: unknown) {
      return await this.options.backend.deny(request);
    }
    report(event: Record<string, unknown>) {
      const report = this.options.reportConnectorAuth;
      if (report !== undefined)
        try {
          report({ ...event, serverName: "1password" });
        } catch (error) {
          dependencies.reportFailure(
            "onepassword",
            "connector-auth-report",
            error,
          );
        }
    }
    reportFlow(flow: Flow, event: Record<string, unknown>) {
      this.report({ ...event, reauth: flow.reauth, serverId: flow.serverId });
    }
    async detectMint() {
      const readiness = await this.probeMintReadiness();
      this.report(
        readiness.state === "ready"
          ? { phase: "clicked", outcome: "ok" }
          : {
              phase: "clicked",
              outcome: "failed",
              error: dependencies.setupNotReady({ reason: readiness.state }),
            },
      );
      return readiness;
    }
    async probeMintReadiness(): Promise<{
      state: string;
      detail?: string;
      version?: string;
      accounts?: unknown;
    }> {
      try {
        const bridge = await this.getBridge();
        return await dependencies.mintBudget.run(async (signal) => {
          let readiness = await bridge.inspectReadiness(signal);
          if (readiness.state === "unsupported-platform")
            return { state: "missing-cli" };
          let accounts: unknown;
          if (
            readiness.state === "missing-cli" ||
            readiness.state === "unsupported-version"
          ) {
            accounts = await bridge.listAccounts(signal);
            readiness = await bridge.inspectReadiness(signal);
          }
          return readiness.state === "unsupported-platform" ||
            readiness.state === "missing-cli"
            ? { state: "missing-cli" }
            : readiness.state === "unsupported-version"
              ? {
                  state: "error",
                  detail: `1Password CLI ${readiness.version} does not support expiring service accounts`,
                }
              : {
                  state: "ready",
                  version: readiness.version,
                  accounts: accounts ?? (await bridge.listAccounts(signal)),
                };
        });
      } catch (error) {
        const projected = policy.projectError(error);
        return projected.code === "missing-cli"
          ? { state: "missing-cli" }
          : projected.code === "integration-off"
            ? { state: "integration-off" }
            : projected.code === "app-unreachable"
              ? { state: "app-unreachable" }
              : { state: "error", detail: projected.message };
      }
    }
    async startMint(
      request: MintRequest,
    ): Promise<
      | { ok: true; result: MintResult }
      | { ok: false; code: string; message: string }
    > {
      if (this.activeMint !== null)
        return {
          ok: false,
          code: "op-error",
          message: "1Password setup is already running",
        };
      const controller = new AbortController();
      this.activeMint = controller;
      const flow: Flow = {
        reauth: request.connectionId == null ? undefined : true,
        serverId: request.connectionId,
        delivered: false,
      };
      try {
        this.reportFlow(flow, { phase: "flow_started", outcome: "ok" });
        const result = await dependencies.mintBudget.run((signal) => {
          const combined = AbortSignal.any([controller.signal, signal]);
          return "serviceAccountToken" in request
            ? this.connectWithToken(request, flow, combined)
            : this.connect(request, flow, combined);
        });
        flow.serverId = result.connectionId;
        this.reportFlow(flow, { phase: "token_stored", outcome: "ok" });
        return { ok: true, result };
      } catch (error) {
        const projected = policy.projectError(error);
        this.reportFlow(flow, {
          phase: flow.delivered ? "token_stored" : "callback_received",
          outcome: policy.classifyOutcome(projected.code),
          error: dependencies.setupFailed({ reason: projected.code }),
        });
        return { ok: false, ...projected };
      } finally {
        if (this.activeMint === controller) this.activeMint = null;
        this.activeDelivery = null;
      }
    }
    async connectWithToken(
      request: MintRequest,
      flow: Flow,
      signal: AbortSignal,
    ): Promise<MintResult> {
      const token = policy.parseServiceAccountToken(
        request.serviceAccountToken!,
      );
      flow.delivered = true;
      this.reportFlow(flow, { phase: "callback_received", outcome: "ok" });
      let accountUuid = "service-account-token",
        accountEmail: string | undefined,
        accountUrl: string | undefined,
        vaultId: string | undefined;
      if (request.connectionId != null) {
        await this.refresh();
        const account = this.state.accounts.find(
          (item) => item.connectionId === request.connectionId,
        );
        if (account == null) throw policy.invalidSetup();
        accountUuid = account.accountUuid;
        accountEmail = account.accountEmail;
        accountUrl = account.accountUrl;
        vaultId = account.vaultId;
      }
      const begin = await this.options.backend.begin(
        request.connectionId == null
          ? { serviceAccountToken: token }
          : { connectionId: request.connectionId },
        signal,
      );
      if (
        request.connectionId != null &&
        begin.connectionId !== request.connectionId
      )
        throw policy.invalidSetup();
      flow.reauth = begin.expectedGeneration > 0;
      flow.serverId = begin.connectionId ?? flow.serverId;
      const expectedVault = begin.vaultId ?? vaultId;
      if (expectedVault == null) throw policy.invalidSetup();
      const state = await this.options.backend.complete(
        {
          mintTicket: begin.mintTicket,
          token,
          accountUuid,
          ...(accountEmail == null ? {} : { accountEmail }),
          ...(accountUrl == null ? {} : { accountUrl }),
        },
        signal,
      );
      this.applyState(state);
      const account = state.accounts.find(
        (item) =>
          item.vaultId === expectedVault &&
          item.credentialGeneration === begin.expectedGeneration + 1,
      );
      if (account == null) throw policy.invalidSetup();
      return {
        status: this.projectStatus(),
        vaultName: account.vaultName,
        vaultCreated: false,
        connectionId: account.connectionId,
        credentialGeneration: account.credentialGeneration,
      };
    }
    async connect(
      request: MintRequest,
      flow: Flow,
      signal: AbortSignal,
    ): Promise<MintResult> {
      const bridge = await this.getBridge();
      let accountUuid = request.accountUuid,
        accountEmail = request.accountEmail,
        accountUrl = request.accountUrl,
        vault: Vault,
        vaultCreated = false;
      if (request.connectionId != null) {
        await this.refresh();
        const account = this.state.accounts.find(
          (item) => item.connectionId === request.connectionId,
        );
        if (account == null) throw policy.invalidSetup();
        accountUuid = account.accountUuid;
        accountEmail = account.accountEmail;
        accountUrl = account.accountUrl;
        vault = { vaultId: account.vaultId, vaultName: account.vaultName };
      } else {
        const existing = await bridge.findVault(
          { accountUuid, vaultName: request.vaultName },
          signal,
        );
        if (existing == null) {
          vault = await bridge.createVault(
            { accountUuid, vaultName: request.vaultName },
            signal,
          );
          vaultCreated = true;
        } else vault = existing;
      }
      const begin = await this.options.backend.begin(
        request.connectionId == null
          ? { vaultId: vault.vaultId }
          : { connectionId: request.connectionId },
        signal,
      );
      if (
        request.connectionId != null &&
        begin.connectionId !== request.connectionId
      )
        throw policy.invalidSetup();
      flow.reauth = begin.expectedGeneration > 0;
      flow.serverId = begin.connectionId ?? flow.serverId;
      const expiration = begin.providerExpiresInSeconds;
      if (begin.expirationMode === "enforce" && expiration == null)
        throw policy.invalidSetup();
      const serviceAccountName = `Grok Bot agents ${(dependencies.now ?? (() => new Date()))().toISOString().slice(0, 10)} ${(dependencies.randomUUID ?? randomUUID)().slice(0, 4)}`;
      const delivered: { state?: ConnectionState } = {};
      this.activeDelivery = async (token, deliverySignal) => {
        if (
          token.accountUuid !== accountUuid ||
          token.vaultId !== vault.vaultId
        )
          throw policy.invalidSetup();
        flow.delivered = true;
        this.reportFlow(flow, { phase: "callback_received", outcome: "ok" });
        const state = await this.options.backend.complete(
          {
            mintTicket: begin.mintTicket,
            token: token.token,
            accountUuid,
            ...(accountEmail == null ? {} : { accountEmail }),
            accountUrl: accountUrl ?? token.accountUrl,
          },
          AbortSignal.any([signal, deliverySignal]),
        );
        delivered.state = state;
        const account = state.accounts.find(
          (item) =>
            item.vaultId === vault.vaultId &&
            item.credentialGeneration === begin.expectedGeneration + 1,
        );
        if (account == null) throw policy.invalidSetup();
        return { consumerReference: account.connectionId };
      };
      await bridge.mintAndDeliver(
        {
          accountUuid,
          vaultId: vault.vaultId,
          serviceAccountName,
          ...(expiration == null ? {} : { expiresInSeconds: expiration }),
        },
        signal,
      );
      const state = delivered.state;
      if (state == null) throw policy.invalidSetup();
      this.applyState(state);
      const account = state.accounts.find(
        (item) =>
          item.vaultId === vault.vaultId &&
          item.credentialGeneration === begin.expectedGeneration + 1,
      );
      if (account == null) throw policy.invalidSetup();
      return {
        status: this.projectStatus(),
        vaultName: account.vaultName,
        vaultCreated,
        serviceAccountName,
        connectionId: account.connectionId,
        credentialGeneration: account.credentialGeneration,
      };
    }
  };
}

export interface DefaultConnectionOptions {
  backend: ConnectionBackend;
  reportConnectorAuth?: ConnectionOptions["reportConnectorAuth"];
  dataDir: string;
  launcherPath: string;
  childProcessEnvironment: unknown;
  launcherVerification?: string;
}
export interface DefaultConnectionFactories {
  ConnectionService: new (options: ConnectionOptions) => object;
  loadRuntime(): Promise<{
    SandOnePasswordCliRuntime: new (options: {
      installRoot: string;
      launcherPath: string;
      childProcessEnvironment: unknown;
      launcherVerification?: string;
    }) => unknown;
  }>;
  loadBridge(): Promise<{
    OnePasswordDesktopProvisioningBridge: new (options: {
      runtime: unknown;
      childProcessEnvironment: unknown;
      sink: DeliverySink;
    }) => MintBridge;
  }>;
  join(...paths: string[]): string;
}
export function createDefaultOnePasswordConnectionFactory(
  factories: DefaultConnectionFactories,
) {
  return function createDefaultOnePasswordConnectionService(
    options: DefaultConnectionOptions,
  ) {
    return new factories.ConnectionService({
      backend: options.backend,
      reportConnectorAuth: options.reportConnectorAuth,
      createBridge: async (sink) => {
        const [
          { SandOnePasswordCliRuntime },
          { OnePasswordDesktopProvisioningBridge },
        ] = await Promise.all([
          factories.loadRuntime(),
          factories.loadBridge(),
        ]);
        const runtime = new SandOnePasswordCliRuntime({
          installRoot: factories.join(options.dataDir, "onepassword-cli"),
          launcherPath: options.launcherPath,
          childProcessEnvironment: options.childProcessEnvironment,
          launcherVerification: options.launcherVerification,
        });
        return new OnePasswordDesktopProvisioningBridge({
          runtime,
          childProcessEnvironment: options.childProcessEnvironment,
          sink,
        });
      },
    });
  };
}
