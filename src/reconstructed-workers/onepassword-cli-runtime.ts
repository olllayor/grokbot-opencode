import * as fs from "node:fs";
import * as path from "node:path";
import { randomUUID } from "node:crypto";
export interface ProcessResult {
  stdout: string;
  stderr?: string;
}
export interface ProcessOptions {
  signal: AbortSignal;
  timeoutMs: number;
  maxBufferBytes: number;
  env?: Record<string, string | undefined>;
}
export type ProcessRunner = (
  executable: string,
  arguments_: string[],
  options: ProcessOptions,
) => Promise<ProcessResult>;
export interface CliCandidate {
  source: string;
  path: string;
  state: string;
  version?: string;
  signature?: string;
}
export interface CliInspection {
  platformSupported: boolean;
  selected: CliCandidate | null;
  candidates: CliCandidate[];
  detail: string;
}
export interface CliOptions {
  installRoot: string;
  launcherPath: string;
  launcherVerification?: string;
  childProcessEnvironment: unknown;
  platform?: string;
  arch?: string;
  systemPaths?: string[];
  download?: (url: string, signal: AbortSignal) => Promise<Uint8Array>;
  runProcess?: ProcessRunner;
}
export interface CliDependencies {
  CliError: new (message: string) => Error;
  systemPaths: string[];
  download: (url: string, signal: AbortSignal) => Promise<Uint8Array>;
  runProcess: ProcessRunner;
  environment: (input: unknown) => Record<string, string | undefined>;
  parseVersion: (output: string) => string | null;
  extractArchive: (archive: Uint8Array) => Buffer;
  delay: (milliseconds: number, signal: AbortSignal) => Promise<unknown>;
  reportFailure: (scope: string, event: string, error: unknown) => void;
  missingError: (error: unknown) => boolean;
  version: string;
  productionLauncherRequirement: string;
  developmentLauncherRequirement: string;
  cliSignatureRequirement: string;
  verificationTimeout: number;
  processBufferBytes: number;
  versionTimeout: number;
  downloadTimeout: number;
  filesystem?: typeof fs;
  pid?: number;
  randomUUID?: () => string;
}
export function createOnePasswordCliRuntimeClass(
  dependencies: CliDependencies,
) {
  const filesystem = dependencies.filesystem ?? fs;
  return class SandOnePasswordCliRuntime {
    readonly platform: string;
    readonly arch: string;
    readonly systemPaths: string[];
    readonly download: CliDependencies["download"];
    readonly runProcess: ProcessRunner;
    constructor(readonly options: CliOptions) {
      this.platform = options.platform ?? process.platform;
      this.arch = options.arch ?? process.arch;
      this.systemPaths = options.systemPaths ?? dependencies.systemPaths;
      this.download = options.download ?? dependencies.download;
      this.runProcess = options.runProcess ?? dependencies.runProcess;
    }
    async resolveVerifiedLauncherPath(signal: AbortSignal) {
      if (this.platform !== "darwin")
        throw new dependencies.CliError(
          "The secure 1Password launcher is supported on macOS only.",
        );
      await filesystem.promises.access(
        this.options.launcherPath,
        filesystem.constants.X_OK,
      );
      const resolved = await filesystem.promises.realpath(
          this.options.launcherPath,
        ),
        requirement =
          this.options.launcherVerification === "development"
            ? dependencies.developmentLauncherRequirement
            : dependencies.productionLauncherRequirement;
      await this.runProcess(
        "/usr/bin/codesign",
        ["--verify", "--strict", "--verbose=4", `-R=${requirement}`, resolved],
        {
          signal,
          timeoutMs: dependencies.verificationTimeout,
          maxBufferBytes: dependencies.processBufferBytes,
        },
      );
      return resolved;
    }
    get managedPath() {
      return path.join(
        this.options.installRoot,
        `v${dependencies.version}`,
        this.artifactArch(),
        "op",
      );
    }
    async inspect(signal: AbortSignal): Promise<CliInspection> {
      if (this.platform !== "darwin")
        return {
          platformSupported: false,
          selected: null,
          candidates: [],
          detail: "Managed 1Password CLI is supported on macOS only",
        };
      const launcher = await this.resolveVerifiedLauncherPath(signal);
      const candidates = await Promise.all(
        [
          ...this.systemPaths.map(
            (candidate) => [candidate, "system"] as const,
          ),
          [this.managedPath, "managed"] as const,
        ].map(
          async ([candidate, source]) =>
            await this.inspectCandidate(candidate, source, launcher, signal),
        ),
      );
      const ready = candidates.filter(
          (candidate) => candidate.state === "ready",
        ),
        selected =
          ready.find((candidate) => candidate.source === "system") ??
          ready.find((candidate) => candidate.source === "managed") ??
          null;
      return {
        platformSupported: true,
        selected,
        candidates,
        detail:
          selected !== null
            ? `${selected.source === "system" ? "System" : "Managed"} CLI ready`
            : "No verified 1Password CLI is ready",
      };
    }
    async prepareManaged(signal: AbortSignal) {
      const installed = await this.ensureManagedInstalled(signal);
      return await this.inspect(
        installed.committed ? new AbortController().signal : signal,
      );
    }
    async resolveVerifiedPath(
      signal: AbortSignal,
      options: { prepareManaged: boolean },
    ) {
      const inspection = await this.inspect(signal);
      if (inspection.selected !== null) return inspection.selected.path;
      if (!options.prepareManaged)
        throw new dependencies.CliError("No verified 1Password CLI is ready.");
      return (await this.ensureManagedInstalled(signal)).path;
    }
    async verify(candidate: string, signal: AbortSignal) {
      if (this.platform !== "darwin")
        throw new dependencies.CliError(
          "Managed 1Password CLI is supported on macOS only.",
        );
      const resolved = await filesystem.promises.realpath(candidate);
      await this.runProcess(
        "/usr/bin/codesign",
        [
          "--verify",
          "--strict",
          "--verbose=4",
          `-R=${dependencies.cliSignatureRequirement}`,
          resolved,
        ],
        {
          signal,
          timeoutMs: dependencies.verificationTimeout,
          maxBufferBytes: dependencies.processBufferBytes,
        },
      );
    }
    async inspectCandidate(
      candidate: string,
      source: string,
      launcher: string,
      signal: AbortSignal,
    ): Promise<CliCandidate> {
      try {
        await filesystem.promises.access(candidate, filesystem.constants.X_OK);
      } catch (error) {
        if (!dependencies.missingError(error))
          dependencies.reportFailure("onepassword", "candidate-access", error);
        return { source, path: candidate, state: "missing" };
      }
      try {
        const version = await this.readVersion({
          path: candidate,
          launcherPath: launcher,
          signal,
        });
        return version === null ||
          (source === "managed" && version !== dependencies.version)
          ? { source, path: candidate, state: "invalid" }
          : {
              source,
              path: candidate,
              state: "ready",
              version,
              signature: "verified",
            };
      } catch (error) {
        if (signal.aborted) throw error;
        return { source, path: candidate, state: "invalid" };
      }
    }
    async readVersion(input: {
      path: string;
      launcherPath: string;
      signal: AbortSignal;
    }) {
      const resolved = await filesystem.promises.realpath(input.path),
        result = await this.runProcess(
          input.launcherPath,
          [resolved, "--version"],
          {
            signal: input.signal,
            timeoutMs: dependencies.versionTimeout,
            maxBufferBytes: dependencies.processBufferBytes,
            env: dependencies.environment(this.options.childProcessEnvironment),
          },
        );
      return dependencies.parseVersion(result.stdout);
    }
    async ensureManagedInstalled(
      signal: AbortSignal,
    ): Promise<{ path: string; committed: boolean }> {
      const target = this.managedPath,
        launcher = await this.resolveVerifiedLauncherPath(signal);
      try {
        await filesystem.promises.access(target, filesystem.constants.X_OK);
        await this.verify(target, signal);
        if (
          (await this.readVersion({
            path: target,
            launcherPath: launcher,
            signal,
          })) === dependencies.version
        )
          return { path: target, committed: false };
      } catch (error) {
        if (signal.aborted) throw error;
      }
      const directory = path.dirname(target);
      await filesystem.promises.mkdir(directory, {
        recursive: true,
        mode: 448,
      });
      await filesystem.promises.chmod(this.options.installRoot, 448);
      await filesystem.promises.chmod(directory, 448);
      const downloadController = new AbortController(),
        timeoutController = new AbortController();
      const download = this.download(
        this.artifactUrl(this.artifactArch()),
        AbortSignal.any([signal, downloadController.signal]),
      ).then(
        (archive) => ({ kind: "download" as const, archive }),
        (error) => ({ kind: "error" as const, error }),
      );
      const timeout = dependencies
        .delay(dependencies.downloadTimeout, timeoutController.signal)
        .then(() => ({ kind: "timeout" as const }));
      const outcome = await Promise.race([download, timeout]).finally(() =>
        timeoutController.abort(),
      );
      if (outcome.kind === "timeout") {
        const error = new DOMException(
          "1Password CLI download timed out",
          "TimeoutError",
        );
        downloadController.abort(error);
        throw error;
      }
      if (outcome.kind === "error") throw outcome.error;
      const executable = dependencies.extractArchive(outcome.archive),
        temporary = path.join(
          directory,
          `.op-${dependencies.pid ?? process.pid}-${(dependencies.randomUUID ?? randomUUID)()}`,
        );
      try {
        const file = await filesystem.promises.open(temporary, "wx", 448);
        try {
          await file.writeFile(executable);
          await file.sync();
        } finally {
          await file.close();
        }
        await filesystem.promises.chmod(temporary, 448);
        await this.verify(temporary, signal);
        if (
          (await this.readVersion({
            path: temporary,
            launcherPath: launcher,
            signal,
          })) !== dependencies.version
        )
          throw new dependencies.CliError(
            `The managed 1Password CLI did not report version ${dependencies.version}.`,
          );
        signal.throwIfAborted();
        await filesystem.promises.rename(temporary, target);
        const committedSignal = new AbortController().signal;
        await filesystem.promises.chmod(target, 448);
        await this.verify(target, committedSignal);
        return { path: target, committed: true };
      } finally {
        await filesystem.promises.rm(temporary, { force: true });
      }
    }
    artifactArch() {
      if (this.platform !== "darwin")
        throw new dependencies.CliError(
          "Managed 1Password CLI is supported on macOS only.",
        );
      if (this.arch === "arm64") return "arm64";
      if (this.arch === "x64") return "amd64";
      throw new dependencies.CliError("Unsupported macOS architecture.");
    }
    artifactUrl(architecture: string) {
      return `https://cache.agilebits.com/dist/1P/op2/pkg/v${dependencies.version}/op_darwin_${architecture}_v${dependencies.version}.zip`;
    }
  };
}
