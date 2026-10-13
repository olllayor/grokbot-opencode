export interface OnePasswordOperationError extends Error {
  code: string;
}
export type OperationErrorConstructor = new (
  code: string,
  message: string,
) => OnePasswordOperationError;
export function createOnePasswordPolicy(
  OperationError: OperationErrorConstructor,
) {
  function invalidSetup() {
    return new OperationError("invalid-input", "1Password setup failed");
  }
  function connectionErrorDetail(error: unknown): string | undefined {
    if (!(error instanceof Error) || error.name !== "ConnectError") return;
    if ("details" in error && Array.isArray(error.details))
      for (const detail of error.details) {
        if (
          !isRecord(detail) ||
          !isRecord(detail.debug) ||
          !isRecord(detail.debug.details) ||
          typeof detail.debug.details.detail !== "string"
        )
          continue;
        const value = detail.debug.details.detail.trim();
        if (value.length > 0) return value;
      }
    const raw =
      "rawMessage" in error && typeof error.rawMessage === "string"
        ? error.rawMessage.trim()
        : "";
    return raw.length === 0 || raw === "Error" ? undefined : raw;
  }
  function parseServiceAccountToken(token: string): string {
    const value = token.trim();
    if (
      value.length === 0 ||
      Buffer.byteLength(value, "utf8") > 4096 ||
      !/^ops_[A-Za-z0-9_-]+$/.test(value)
    )
      throw new OperationError(
        "invalid-token",
        "That doesn't look like a 1Password service account token. Paste the whole token, which starts with “ops_”.",
      );
    return value;
  }
  function classifyOutcome(code: string): "cancelled" | "timeout" | "failed" {
    return code === "cancelled" || code === "denied"
      ? "cancelled"
      : code === "timeout"
        ? "timeout"
        : "failed";
  }
  function projectError(error: unknown): { code: string; message: string } {
    if (error instanceof OperationError) {
      let code: string;
      switch (error.code) {
        case "missing-cli":
        case "unsupported-platform":
          code = "missing-cli";
          break;
        case "integration-off":
        case "app-unreachable":
        case "denied":
        case "permission":
        case "cancelled":
        case "timeout":
        case "invalid-token":
          code = error.code;
          break;
        case "conflict":
          code = "name-conflict";
          break;
        default:
          code = "op-error";
      }
      return { code, message: error.message };
    }
    const detail = connectionErrorDetail(error);
    return {
      code: "op-error",
      message:
        detail !== undefined
          ? detail
          : error instanceof Error
            ? error.message
            : "1Password setup failed",
    };
  }
  return {
    invalidSetup,
    connectionErrorDetail,
    parseServiceAccountToken,
    classifyOutcome,
    projectError,
  };
}
function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
