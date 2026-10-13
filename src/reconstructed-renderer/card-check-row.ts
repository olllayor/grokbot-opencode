import { c as memo, j as jsx, type UIElement, type UINode } from "./index.eager-vendor-Qbf9YA6n.js";
import { C as Checkbox } from "./index-ZYxf-aBb.js";
import { b0 as LabelText } from "./index.eager-app-Cj5f8Gby.js";
import { registerDebugId } from "./debug-metadata.js";
registerDebugId("fefaaaa3-9ee4-416a-99b2-1d34c0fd3300");
export interface CardCheckRowProps { id?: string; name?: string; label: UINode; isChecked: boolean; isDisabled?: boolean; isRequired?: boolean; onChange?: (checked: boolean) => void }
function CardCheckRow(props: CardCheckRowProps): UIElement {
  CardCheckRow.d = 1392;
  const cache = memo.c(14);
  const { id, name, label, isChecked, onChange, isDisabled = false, isRequired = false } = props;
  if (cache[0] === Symbol.for("react.memo_cache_sentinel")) cache[0] = { className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-euugli" };
  if (cache[1] !== id || cache[2] !== isChecked || cache[3] !== isDisabled || cache[4] !== isRequired || cache[5] !== name || cache[6] !== onChange) {
    cache[7] = jsx.jsx(Checkbox, { id, isChecked, isDisabled, isRequired, name, onChange });
    [cache[1], cache[2], cache[3], cache[4], cache[5], cache[6]] = [id, isChecked, isDisabled, isRequired, name, onChange];
  }
  const suffix = isRequired ? " *" : null;
  if (cache[8] !== label || cache[9] !== suffix) {
    cache[10] = jsx.jsxs(LabelText, { children: [label, suffix] });
    cache[8] = label; cache[9] = suffix;
  }
  if (cache[11] !== cache[7] || cache[12] !== cache[10]) {
    cache[13] = jsx.jsxs("label", { ...(cache[0] as { className: string }), children: [cache[7], cache[10]] });
    cache[11] = cache[7]; cache[12] = cache[10];
  }
  return cache[13] as UIElement;
}
namespace CardCheckRow { export let d: number; }
export { CardCheckRow as C };
