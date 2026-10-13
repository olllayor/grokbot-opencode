import { c as memo, r as hooks } from "./index.eager-vendor-Qbf9YA6n.js";
import { registerDebugId } from "./debug-metadata.js";
registerDebugId("09f4e8de-e14d-48e2-9028-d1aebc190d57");
export interface OptionScrollController { activeOptionRef(element: Pick<Element, "scrollIntoView"> | null): void; markKeyboardNavigation(): void }
export function u(): OptionScrollController {
  const cache = memo.c(2);
  const keyboardNavigation = hooks.useRef(false);
  if (cache[0] === Symbol.for("react.memo_cache_sentinel")) cache[0] = () => { keyboardNavigation.current = true; };
  const markKeyboardNavigation = cache[0] as () => void;
  if (cache[1] === Symbol.for("react.memo_cache_sentinel")) {
    cache[1] = { markKeyboardNavigation, activeOptionRef(element: Pick<Element, "scrollIntoView"> | null) {
      if (element != null && keyboardNavigation.current) { keyboardNavigation.current = false; element.scrollIntoView({ block: "nearest" }); }
    } } satisfies OptionScrollController;
  }
  return cache[1] as OptionScrollController;
}
