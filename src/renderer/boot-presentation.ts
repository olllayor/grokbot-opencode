/** Recovered from index-ZYxf-aBb.js: x6, BRe, GRe, VRe. */
export interface FirstBoxGate {
  isAccountAuthorizedForAppView: boolean;
  firstBoxPhase: string;
  isShowingRestoredRoster: boolean;
  isComputerRebuildLocked: boolean;
  isPrivacyBlocked: boolean;
}
export function shouldShowFirstBoxFailure(state: FirstBoxGate): boolean {
  if (
    !state.isAccountAuthorizedForAppView ||
    state.isComputerRebuildLocked ||
    state.isShowingRestoredRoster ||
    state.isPrivacyBlocked
  )
    return false;
  return (
    state.firstBoxPhase === "connectivity-failure" ||
    state.firstBoxPhase === "grace-elapsed"
  );
}
export interface Boot {
  status: string;
  generation: number;
}
export interface AppViewGate extends FirstBoxGate {
  isLocaleSettled: boolean;
  bootStatus: string;
  hasAccountSlot: boolean;
  rosterLoadState: string;
}
export function canRevealAppView(state: AppViewGate): boolean {
  if (!state.isLocaleSettled || state.bootStatus !== "ready") return false;
  if (
    !state.isAccountAuthorizedForAppView ||
    !state.hasAccountSlot ||
    state.rosterLoadState !== "loading" ||
    state.isShowingRestoredRoster
  )
    return true;
  return shouldShowFirstBoxFailure({
    isAccountAuthorizedForAppView: state.isAccountAuthorizedForAppView,
    firstBoxPhase: state.firstBoxPhase,
    isShowingRestoredRoster: false,
    isComputerRebuildLocked: false,
    isPrivacyBlocked: false,
  });
}
export interface PreviewGate extends Omit<AppViewGate, "bootStatus"> {
  boot: Boot;
  previewState: string;
  isClientPaused: boolean;
  rosterFailure: unknown;
  boxHostPhase: string;
  firstRunPhase: string;
}
export type BootPresentation =
  | { kind: "held" }
  | { kind: "chrome" }
  | { kind: "children"; boot: Boot };
export function resolveBootPresentation(
  state: PreviewGate,
  revealedGeneration: number | null,
): BootPresentation {
  const boot = state.boot;
  const ordinary: BootPresentation =
    boot.status === "ready" &&
    canRevealAppView({ ...state, bootStatus: boot.status })
      ? { kind: "children", boot }
      : { kind: "held" };
  if (
    state.previewState === "retired" ||
    boot.generation !== 1 ||
    !state.isLocaleSettled ||
    !state.isAccountAuthorizedForAppView ||
    state.isPrivacyBlocked ||
    state.isClientPaused ||
    state.isComputerRebuildLocked ||
    state.rosterFailure != null ||
    state.rosterLoadState === "failed" ||
    state.boxHostPhase === "creating" ||
    (state.firstBoxPhase !== "restored-roster" &&
      state.firstBoxPhase !== "reached") ||
    (state.firstRunPhase !== "checking" &&
      state.firstRunPhase !== "probing" &&
      state.firstRunPhase !== "shell")
  )
    return ordinary;
  if (boot.status === "restoring")
    return state.isShowingRestoredRoster ? { kind: "chrome" } : ordinary;
  return ordinary.kind === "children" &&
    state.hasAccountSlot &&
    (state.firstRunPhase !== "shell" ||
      revealedGeneration !== ordinary.boot.generation)
    ? { kind: "chrome" }
    : ordinary;
}
export function resolveBootBusyLabel(
  state: Pick<
    AppViewGate,
    | "isLocaleSettled"
    | "bootStatus"
    | "isAccountAuthorizedForAppView"
    | "hasAccountSlot"
    | "isComputerRebuildLocked"
  > & { boxHostPhase: string; firstRunPhase: string },
): "setting-up" | "connecting" | null {
  if (
    !state.isLocaleSettled ||
    state.bootStatus !== "ready" ||
    !state.isAccountAuthorizedForAppView ||
    !state.hasAccountSlot ||
    state.isComputerRebuildLocked
  )
    return null;
  return state.boxHostPhase === "creating"
    ? "setting-up"
    : state.firstRunPhase === "connecting"
      ? "connecting"
      : null;
}
