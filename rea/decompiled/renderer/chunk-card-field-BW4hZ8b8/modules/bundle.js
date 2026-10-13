import { c as c_1, p } from "./index.eager-vendor-Qbf9YA6n.js";
import { a_, b0 as B } from "./index.eager-app-Cj5f8Gby.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "eb2e3d8f-e894-474a-99e5-111e01f5a5a3";
            e._sentryDebugIdIdentifier = "sentry-dbid-eb2e3d8f-e894-474a-99e5-111e01f5a5a3";
        }
    } catch (e) {}
})();
export const c = {
    control: {
        k1xSpc: "sand-1lliihq",
        kzQI83: "sand-1iyjqo2",
        kmuXW: "sand-s83m0k",
        kCS8Yb: "sand-1r8uery",
        k7Eaqz: "sand-euugli",
        kB7OPa: "sand-9f619",
        kLKAdn: "sand-123j3cw",
        kwRFfy: "sand-2vl965",
        kGO01o: "sand-s9asl8",
        kZCmMZ: "sand-e2zdcy",
        ksu8eU: "sand-ng3xce",
        kaIpWk: "sand-1qmwy7c",
        kWkggS: "sand-jbqb8w",
        kMwMTN: "sand-tyxrsu",
        kMv6JI: "sand-jb2p0i",
        kGuDYH: "sand-1qlqyl8",
        kLWn49: "sand-15bjb6t",
        kb6lSQ: "sand-4gjf66",
        k3XXqK: "sand-1t137rt",
        k8Qsv1: "sand-1h7ufjq",
        $$css: true
    }
};
const u = {
    root: {
        k1xSpc: "sand-78zum5",
        kGNEyG: "sand-1qjc9v5",
        k7Eaqz: "sand-euugli",
        kAzted: "sand-21xpn4",
        kB7OPa: "sand-9f619",
        kMzoRj: "sand-mkeg23",
        ksu8eU: "sand-1y0btm7",
        kVAM5u: "sand-fnq37j sand-5obw34",
        kaIpWk: "sand-1qmwy7c",
        kWkggS: "sand-vvtkfd",
        k1ekBW: "sand-shfolx",
        kIyJzY: "sand-1firant",
        kAMwcw: "sand-wji4o3",
        $$css: true
    },
    label: {
        kMwMTN: "sand-1o0liin",
        $$css: true
    }
};
export function C(o) {
    C.d = 1393;
    const s = c_1.c(5);
    const { children, style } = o;
    let a;
    if (s[0] !== style) {
        a = p(u.root, a_.body1, style);
        s[0] = style;
        s[1] = a;
    } else {
        a = s[1];
    }
    let d;
    if (s[2] !== children || s[3] !== a) {
        d = <div {...a}>{children}</div>;
        s[2] = children;
        s[3] = a;
        s[4] = d;
    } else {
        d = s[4];
    }
    return d;
}
function JComponent(o) {
    JComponent.d = 1394;
    const s = c_1.c(7);
    const { label: label_1, isRequired, children } = o;
    const d = isRequired === undefined ? false : isRequired;
    let l;
    if (s[0] === Symbol.for("react.memo_cache_sentinel")) {
        l = {
            className: "sand-78zum5 sand-dt5ytf sand-1jnr06f sand-euugli"
        };
        s[0] = l;
    } else {
        l = s[0];
    }
    const c = d ? " *" : null;
    let t;
    if (s[1] !== label_1 || s[2] !== c) {
        t = <B level="body2" style={u.label}>{label_1}{c}</B>;
        s[1] = label_1;
        s[2] = c;
        s[3] = t;
    } else {
        t = s[3];
    }
    let k;
    if (s[4] !== children || s[5] !== t) {
        k = <label {...l}>{t}{children}</label>;
        s[4] = children;
        s[5] = t;
        s[6] = k;
    } else {
        k = s[6];
    }
    return k;
}
export { JComponent as a };
