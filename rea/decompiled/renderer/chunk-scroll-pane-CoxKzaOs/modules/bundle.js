import { c, j } from "./index.eager-vendor-Qbf9YA6n.js";
import { r } from "./index.eager-app-Cj5f8Gby.js";
import "./index-ZYxf-aBb.js";
import { a_ } from "./index.eager-platform-Dcfeegfw.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "d4cbdcca-0504-4535-b9b3-404ef1609cc5";
            e._sentryDebugIdIdentifier = "sentry-dbid-d4cbdcca-0504-4535-b9b3-404ef1609cc5";
        }
    } catch (e) {}
})();
export function S(p) {
    S.d = 1233;
    const s = c.c(18);
    const { children, ref } = p;
    let l;
    let t;
    let a;
    let e;
    let ref_1;
    let scrollbarVisibility;
    if (s[0] !== ref) {
        t = {
            className: "sand-9f619 sand-1xy6bms sand-1s169rl sand-84yb8i sand-16mx7xq"
        };
        l = a_;
        if (s[7] === Symbol.for("react.memo_cache_sentinel")) {
            e = r("sand-settings-scroll", "sand-9f619 sand-1iyjqo2 sand-s83m0k sand-dl72j9 sand-2lwn1j");
            s[7] = e;
        } else {
            e = s[7];
        }
        ref_1 = ref;
        scrollbarVisibility = "hover";
        a = r("sand-settings-pane", t.className);
        s[0] = ref;
        s[1] = l;
        s[2] = t;
        s[3] = a;
        s[4] = e;
        s[5] = ref_1;
        s[6] = scrollbarVisibility;
    } else {
        l = s[1];
        t = s[2];
        a = s[3];
        e = s[4];
        ref_1 = s[5];
        scrollbarVisibility = s[6];
    }
    let children_1;
    if (s[8] !== children || s[9] !== t.style || s[10] !== a) {
        children_1 = <div className={a} style={t.style}>{children}</div>;
        s[8] = children;
        s[9] = t.style;
        s[10] = a;
        s[11] = children_1;
    } else {
        children_1 = s[11];
    }
    let o;
    if (s[12] !== l || s[13] !== e || s[14] !== ref_1 || s[15] !== scrollbarVisibility || s[16] !== children_1) {
        o = j.jsx(l, {
            className: e,
            ref: ref_1,
            scrollbarVisibility,
            children: children_1
        });
        s[12] = l;
        s[13] = e;
        s[14] = ref_1;
        s[15] = scrollbarVisibility;
        s[16] = children_1;
        s[17] = o;
    } else {
        o = s[17];
    }
    return o;
}
