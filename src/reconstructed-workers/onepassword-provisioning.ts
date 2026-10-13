import type { OperationErrorConstructor } from "./onepassword-policy.js";
import type {
  CliInspection,
  ProcessRunner,
  ProcessResult,
} from "./onepassword-cli-runtime.js";
export interface ProvisioningAccount {
  accountUuid: string;
  email: string;
  url: string;
}
export interface ProvisioningVault {
  vaultId: string;
  vaultName: string;
}
export interface ProvisioningRuntime {
  inspect(signal: AbortSignal): Promise<CliInspection>;
  resolveVerifiedLauncherPath(signal: AbortSignal): Promise<string>;
  prepareManaged(signal: AbortSignal): Promise<unknown>;
}
export interface ProvisioningSink {
  availability: string;
  accept(
    input: {
      accountUuid: string;
      accountUrl: string;
      vaultId: string;
      vaultName: string;
      serviceAccountName: string;
      expiresInSeconds?: number;
      token: string;
    },
    signal: AbortSignal,
  ): Promise<unknown>;
}
export interface ProvisioningOptions {
  runtime: ProvisioningRuntime;
  childProcessEnvironment: unknown;
  sink?: ProvisioningSink;
  executor?: ProcessRunner;
  prepareManagedCli?: boolean;
}
export interface ProvisioningDependencies {
  OperationError: OperationErrorConstructor;
  unavailableSink: ProvisioningSink;
  createExecutor: () => ProcessRunner;
  translateRuntimeError: (error: unknown) => unknown;
  translateProcessError: (error: unknown) => unknown;
  chooseSupported: (
    inspection: CliInspection,
  ) => { source: string; path: string; version: string } | null;
  identifier: (value: unknown, label: string) => string;
  name: (value: unknown, label: string) => string;
  expiration: (value: unknown) => number;
  accounts: (value: unknown) => ProvisioningAccount[];
  vaults: (value: unknown) => ProvisioningVault[];
  vault: (value: unknown) => ProvisioningVault;
  token: (value: string) => string;
  boundedString: (value: unknown, limit: number) => string | null;
  environment: (input: unknown) => Record<string, string | undefined>;
  delay: (milliseconds: number, signal: AbortSignal) => Promise<unknown>;
  readTimeout: number;
  mutationTimeout: number;
  deliveryTimeout: number;
  jsonBytes: number;
  tokenBytes: number;
  consumerReferenceLength: number;
}
type Readiness =
  | { state: "ready"; source: string; path: string; version: string }
  | { state: "missing-cli" | "unsupported-platform" }
  | { state: "unsupported-version"; version?: string };
export function createOnePasswordProvisioningBridgeClass(
  dependencies: ProvisioningDependencies,
) {
  return class OnePasswordDesktopProvisioningBridge {
    readonly runtime: ProvisioningRuntime;
    readonly childProcessEnvironment: unknown;
    readonly sink: ProvisioningSink;
    readonly executor: ProcessRunner;
    readonly prepareManagedCli: boolean;
    mutationInProgress = false;
    deliveryIndeterminate = false;
    constructor(options: ProvisioningOptions) {
      this.runtime = options.runtime;
      this.childProcessEnvironment = options.childProcessEnvironment;
      this.sink = options.sink ?? dependencies.unavailableSink;
      this.executor = options.executor ?? dependencies.createExecutor();
      this.prepareManagedCli = options.prepareManagedCli ?? true;
    }
    async inspectReadiness(signal: AbortSignal): Promise<Readiness> {
      const inspection = await this.runtime.inspect(signal).catch((error) => {
        throw dependencies.translateRuntimeError(error);
      });
      if (!inspection.platformSupported)
        return { state: "unsupported-platform" };
      const selected = dependencies.chooseSupported(inspection);
      if (selected !== null)
        return {
          state: "ready",
          source: selected.source,
          path: selected.path,
          version: selected.version,
        };
      return inspection.selected === null
        ? { state: "missing-cli" }
        : {
            state: "unsupported-version",
            version: inspection.selected.version,
          };
    }
    async listAccounts(signal: AbortSignal) {
      return dependencies.accounts(
        await this.runJson(
          ["account", "list", "--format=json"],
          dependencies.readTimeout,
          signal,
        ),
      );
    }
    async listVaults(input: { accountUuid: string }, signal: AbortSignal) {
      const id = dependencies.identifier(
        input.accountUuid,
        "1Password account identifier",
      );
      return dependencies.vaults(
        await this.runJson(
          ["vault", "list", "--account", id, "--format=json"],
          dependencies.readTimeout,
          signal,
        ),
      );
    }
    async findVault(
      input: { accountUuid: string; vaultName: string },
      signal: AbortSignal,
    ) {
      const name = dependencies.name(input.vaultName, "vault name"),
        matches = (await this.listVaults(input, signal)).filter(
          (vault) => vault.vaultName === name,
        );
      if (matches.length > 1)
        throw new dependencies.OperationError(
          "conflict",
          "More than one 1Password vault has the requested name.",
        );
      return matches[0] ?? null;
    }
    async createVault(
      input: { accountUuid: string; vaultName: string },
      signal: AbortSignal,
    ) {
      this.assertSinkAvailable();
      const account = dependencies.identifier(
          input.accountUuid,
          "1Password account identifier",
        ),
        name = dependencies.name(input.vaultName, "vault name");
      return await this.runMutation(signal, async (mutationSignal) =>
        dependencies.vault(
          await this.runJson(
            ["vault", "create", name, "--account", account, "--format=json"],
            dependencies.mutationTimeout,
            mutationSignal,
          ),
        ),
      );
    }
    async mintAndDeliver(
      input: {
        accountUuid: string;
        vaultId: string;
        serviceAccountName: string;
        expiresInSeconds?: number;
      },
      signal: AbortSignal,
    ) {
      this.assertSinkAvailable();
      const accountId = dependencies.identifier(
          input.accountUuid,
          "1Password account identifier",
        ),
        vaultId = dependencies.identifier(
          input.vaultId,
          "1Password vault identifier",
        ),
        name = dependencies.name(
          input.serviceAccountName,
          "service-account name",
        ),
        expiration =
          input.expiresInSeconds == null
            ? undefined
            : dependencies.expiration(input.expiresInSeconds);
      return await this.runMutation(signal, async (mutationSignal) => {
        const account = (await this.listAccounts(mutationSignal)).find(
          (account) => account.accountUuid === accountId,
        );
        if (account == null)
          throw new dependencies.OperationError(
            "invalid-input",
            "The selected 1Password account is unavailable.",
          );
        const vault = (
          await this.listVaults({ accountUuid: accountId }, mutationSignal)
        ).find((vault) => vault.vaultId === vaultId);
        if (vault == null)
          throw new dependencies.OperationError(
            "permission",
            "The selected 1Password vault is unavailable to this account.",
          );
        const output = await this.runOp(
          [
            "service-account",
            "create",
            name,
            "--account",
            accountId,
            "--vault",
            `${vaultId}:read_items`,
            ...(expiration == null ? [] : ["--expires-in", `${expiration}s`]),
            "--raw",
          ],
          dependencies.mutationTimeout,
          dependencies.tokenBytes,
          mutationSignal,
        ).catch((error) => {
          throw error instanceof dependencies.OperationError &&
            error.code === "permission"
            ? new dependencies.OperationError(
                "permission",
                "This 1Password account can't create service accounts. Ask a 1Password administrator to enable service-account creation and grant Manage Vault access.",
              )
            : error instanceof dependencies.OperationError &&
                error.code === "op-error"
              ? new dependencies.OperationError(
                  "op-error",
                  "1Password couldn't create the service account. Check service-account permissions, vault eligibility, and account limits, then try again.",
                )
              : error;
        });
        const token = dependencies.token(output.stdout),
          deliveryController = new AbortController(),
          timeoutController = new AbortController();
        let receipt: unknown;
        try {
          const acceptance = this.sink.accept(
              {
                accountUuid: accountId,
                accountUrl: account.url,
                vaultId,
                vaultName: vault.vaultName,
                serviceAccountName: name,
                ...(expiration == null ? {} : { expiresInSeconds: expiration }),
                token,
              },
              deliveryController.signal,
            ),
            timeout = dependencies
              .delay(dependencies.deliveryTimeout, timeoutController.signal)
              .then(async () => {
                if (timeoutController.signal.aborted) return await acceptance;
                deliveryController.abort(
                  new DOMException(
                    "Provisioning sink timed out",
                    "TimeoutError",
                  ),
                );
                throw new DOMException(
                  "Provisioning sink timed out",
                  "TimeoutError",
                );
              });
          receipt = await Promise.race([acceptance, timeout]);
        } catch {
          this.deliveryIndeterminate = true;
          throw new dependencies.OperationError(
            "delivery-indeterminate",
            "The credential delivery outcome is unknown and must be reconciled before provisioning again.",
          );
        } finally {
          timeoutController.abort();
        }
        const reference = isRecord(receipt)
          ? dependencies.boundedString(
              receipt.consumerReference,
              dependencies.consumerReferenceLength,
            )
          : null;
        if (reference === null) {
          this.deliveryIndeterminate = true;
          throw new dependencies.OperationError(
            "delivery-indeterminate",
            "The credential delivery outcome is unknown and must be reconciled before provisioning again.",
          );
        }
        return {
          consumerReference: reference,
          ...(expiration == null ? {} : { expiresInSeconds: expiration }),
        };
      });
    }
    assertSinkAvailable() {
      if (this.sink.availability !== "available")
        throw new dependencies.OperationError(
          "sink-unavailable",
          "1Password provisioning is unavailable until a credential consumer is configured.",
        );
    }
    async runMutation<T>(
      signal: AbortSignal,
      operation: (signal: AbortSignal) => Promise<T>,
    ): Promise<T> {
      if (this.deliveryIndeterminate)
        throw new dependencies.OperationError(
          "delivery-indeterminate",
          "The previous credential delivery must be reconciled before provisioning again.",
        );
      if (this.mutationInProgress)
        throw new dependencies.OperationError(
          "busy",
          "A 1Password provisioning operation is already running.",
        );
      this.mutationInProgress = true;
      try {
        if (signal.aborted)
          throw new dependencies.OperationError(
            "cancelled",
            "The 1Password operation was canceled.",
          );
        return await operation(signal);
      } finally {
        this.mutationInProgress = false;
      }
    }
    async runJson(
      arguments_: string[],
      timeout: number,
      signal: AbortSignal,
    ): Promise<unknown> {
      const output = await this.runOp(
        arguments_,
        timeout,
        dependencies.jsonBytes,
        signal,
      );
      try {
        return JSON.parse(output.stdout);
      } catch {
        throw new dependencies.OperationError(
          "invalid-output",
          "1Password returned malformed JSON.",
        );
      }
    }
    async runOp(
      arguments_: string[],
      timeout: number,
      bytes: number,
      signal: AbortSignal,
    ): Promise<ProcessResult> {
      const cli = await this.resolveSupportedPath(signal);
      let launcher: string;
      try {
        launcher = await this.runtime.resolveVerifiedLauncherPath(signal);
      } catch (error) {
        throw dependencies.translateRuntimeError(error);
      }
      try {
        return await this.executor(launcher, [cli, ...arguments_], {
          signal,
          timeoutMs: timeout,
          maxBufferBytes: bytes,
          env: dependencies.environment(this.childProcessEnvironment),
        });
      } catch (error) {
        throw dependencies.translateProcessError(error);
      }
    }
    async resolveSupportedPath(signal: AbortSignal): Promise<string> {
      let readiness = await this.inspectReadiness(signal);
      if (readiness.state === "ready") return readiness.path;
      if (
        (readiness.state === "missing-cli" ||
          readiness.state === "unsupported-version") &&
        this.prepareManagedCli &&
        !signal.aborted
      ) {
        try {
          await this.runtime.prepareManaged(signal);
        } catch (error) {
          throw dependencies.translateRuntimeError(error);
        }
        readiness = await this.inspectReadiness(signal);
        if (readiness.state === "ready") return readiness.path;
      }
      throw readiness.state === "unsupported-platform"
        ? new dependencies.OperationError(
            "unsupported-platform",
            "1Password desktop provisioning is supported on macOS only.",
          )
        : readiness.state === "unsupported-version"
          ? new dependencies.OperationError(
              "unsupported-version",
              "The detected 1Password CLI does not support expiring service accounts.",
            )
          : new dependencies.OperationError(
              "missing-cli",
              "No verified 1Password CLI is ready.",
            );
    }
  };
}
function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
