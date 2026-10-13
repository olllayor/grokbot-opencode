import { c, u as u_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { I } from "./index-ZYxf-aBb.js";
import "./index.eager-platform-Dcfeegfw.js";
import { aZ as F, aY as B } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "d59223ae-ec32-4c64-b36f-0721e5aab5d7";
            e._sentryDebugIdIdentifier = "sentry-dbid-d59223ae-ec32-4c64-b36f-0721e5aab5d7";
        }
    } catch (e) {}
})();
function YComponent(d) {
    YComponent.d = 75;
    const e = c.c(17);
    const { entry, description, actionVerb, onOpenAutomation } = d;
    const { _ } = u_1();
    const { automationName } = entry.event;
    let n;
    if (e[0] !== _ || e[1] !== actionVerb || e[2] !== description) {
        n = actionVerb == null ? <F isTruncating title={description}>{description}</F> : <F>{_({
            id: "O6ISxp",
            values: {
                actionVerb
            }
        })}</F>;
        e[0] = _;
        e[1] = actionVerb;
        e[2] = description;
        e[3] = n;
    } else {
        n = e[3];
    }
    let s;
    if (e[4] !== _ || e[5] !== automationName) {
        s = _({
            id: "f/4KUJ",
            values: {
                automationName
            }
        });
        e[4] = _;
        e[5] = automationName;
        e[6] = s;
    } else {
        s = e[6];
    }
    let leading;
    if (e[7] === Symbol.for("react.memo_cache_sentinel")) {
        leading = <I name="clock" size="sm"/>;
        e[7] = leading;
    } else {
        leading = e[7];
    }
    let onClick;
    if (e[8] !== onOpenAutomation) {
        onClick = (h)=>{
            h.stopPropagation();
            onOpenAutomation?.();
        };
        e[8] = onOpenAutomation;
        e[9] = onClick;
    } else {
        onClick = e[9];
    }
    let a;
    if (e[10] !== automationName || e[11] !== s || e[12] !== onClick) {
        a = <B aria-label={s} leading={leading} onClick={onClick} title={automationName}>{automationName}</B>;
        e[10] = automationName;
        e[11] = s;
        e[12] = onClick;
        e[13] = a;
    } else {
        a = e[13];
    }
    let u;
    if (e[14] !== n || e[15] !== a) {
        u = <>{n}{a}</>;
        e[14] = n;
        e[15] = a;
        e[16] = u;
    } else {
        u = e[16];
    }
    return u;
}
export { YComponent as default };
