import { c as c_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { aB, r } from "./index.eager-app-Cj5f8Gby.js";
import "./index-ZYxf-aBb.js";
import { aY as Y } from "./index.eager-platform-Dcfeegfw.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "09d7307f-b28b-45c4-b7df-083c039253cc";
            e._sentryDebugIdIdentifier = "sentry-dbid-09d7307f-b28b-45c4-b7df-083c039253cc";
        }
    } catch (e) {}
})();
function XComponent(d) {
    XComponent.d = 308;
    const t = c_1.c(9);
    const { entry } = d;
    const n = {
        className: "sand-amitd3 sand-1yrsyyn sand-pdmqnj sand-10b6aqq sand-1g0dm76 sand-2b8uid"
    };
    let o;
    if (t[0] !== entry.copy || t[1] !== entry.text) {
        o = {
            content: entry.text,
            copy: entry.copy
        };
        t[0] = entry.copy;
        t[1] = entry.text;
        t[2] = o;
    } else {
        o = t[2];
    }
    const c = aB(o);
    const className = r("sand-notice", n.className);
    let e;
    if (t[3] !== c) {
        e = <Y color="tertiary" size="sm">{c}</Y>;
        t[3] = c;
        t[4] = e;
    } else {
        e = t[4];
    }
    let a;
    if (t[5] !== n.style || t[6] !== className || t[7] !== e) {
        a = <div className={className} style={n.style}>{e}</div>;
        t[5] = n.style;
        t[6] = className;
        t[7] = e;
        t[8] = a;
    } else {
        a = t[8];
    }
    return a;
}
export { XComponent as default };
