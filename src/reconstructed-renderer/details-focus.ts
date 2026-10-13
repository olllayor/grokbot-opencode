import { registerDebugId } from "./debug-metadata.js";
registerDebugId("3f153a89-e6d3-45bb-8ff0-56bc5e98ac2e");
export interface FocusDestination { kind: string; paneKey?: string }
export interface FocusTargets { incoming?: ParentNode | null; back?: HTMLElement | null; title?: HTMLElement | null; fallback: HTMLElement | null }
export function r(destination: FocusDestination, targets: FocusTargets): HTMLElement | null {
  if (destination.kind === "row" && targets.incoming != null) {
    for (const element of targets.incoming.querySelectorAll("[data-details-pane]")) {
      if (element instanceof HTMLElement && element.getAttribute("data-details-pane") === destination.paneKey) return element;
    }
  }
  return targets.back ?? targets.title ?? targets.fallback;
}
