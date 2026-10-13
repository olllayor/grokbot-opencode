import { c } from "./index.eager-vendor-Qbf9YA6n.js";
import { C } from "./index-ZYxf-aBb.js";
import { b0 as J } from "./index.eager-app-Cj5f8Gby.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "fefaaaa3-9ee4-416a-99b2-1d34c0fd3300";
            e._sentryDebugIdIdentifier = "sentry-dbid-fefaaaa3-9ee4-416a-99b2-1d34c0fd3300";
        }
    } catch (e) {}
})();
function RComponent(h) {
    RComponent.d = 1392;
    const e = c.c(14);
    const { id, name, label: label_1, isChecked, isDisabled, isRequired, onChange } = h;
    const isDisabled_1 = isDisabled === undefined ? false : isDisabled;
    const isRequired_1 = isRequired === undefined ? false : isRequired;
    let l;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        l = {
            className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-euugli"
        };
        e[0] = l;
    } else {
        l = e[0];
    }
    let s;
    if (e[1] !== id || e[2] !== isChecked || e[3] !== isDisabled_1 || e[4] !== isRequired_1 || e[5] !== name || e[6] !== onChange) {
        s = <C id={id} isChecked={isChecked} isDisabled={isDisabled_1} isRequired={isRequired_1} name={name} onChange={onChange}/>;
        e[1] = id;
        e[2] = isChecked;
        e[3] = isDisabled_1;
        e[4] = isRequired_1;
        e[5] = name;
        e[6] = onChange;
        e[7] = s;
    } else {
        s = e[7];
    }
    const f = isRequired_1 ? " *" : null;
    let t;
    if (e[8] !== label_1 || e[9] !== f) {
        t = <J>{label_1}{f}</J>;
        e[8] = label_1;
        e[9] = f;
        e[10] = t;
    } else {
        t = e[10];
    }
    let o;
    if (e[11] !== s || e[12] !== t) {
        o = <label {...l}>{s}{t}</label>;
        e[11] = s;
        e[12] = t;
        e[13] = o;
    } else {
        o = e[13];
    }
    return o;
}
export { RComponent as C };
