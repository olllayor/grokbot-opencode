import { c, r, T } from "./index.eager-vendor-Qbf9YA6n.js";
import { dc, b7, b8 } from "./index.eager-app-Cj5f8Gby.js";
import { aY as C } from "./index.eager-platform-Dcfeegfw.js";
import { g as R } from "./index-ZYxf-aBb.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "e3eb3efa-f1ab-410b-8fa9-04b067c57393";
            e._sentryDebugIdIdentifier = "sentry-dbid-e3eb3efa-f1ab-410b-8fa9-04b067c57393";
        }
    } catch (e) {}
})();
export function D(a) {
    D.d = 491;
    const e = c.c(11);
    const { agentId } = a;
    const o = dc().find((i)=>i.id === agentId);
    const { drafting } = b7();
    const { dispatch, failure, isPending } = b8(drafting.setDisabled);
    const [x, setX] = r.useState(false);
    if (o == null || o.isGroup || o.viewerIsOwner === false) {
        return null;
    }
    if (x && !isPending && failure == null) {
        let i;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = {
                className: "sand-2vl965 sand-e2zdcy"
            };
            e[0] = i;
        } else {
            i = e[0];
        }
        let d;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            d = <span {...i} role="status"><C color="tertiary" size="sm"><T id="iQ0tBZ"/></C></span>;
            e[1] = d;
        } else {
            d = e[1];
        }
        return d;
    }
    let onClick;
    if (e[2] !== agentId || e[3] !== dispatch) {
        onClick = ()=>{
            setX(true);
            dispatch(agentId, true);
        };
        e[2] = agentId;
        e[3] = dispatch;
        e[4] = onClick;
    } else {
        onClick = e[4];
    }
    let n;
    if (e[5] !== failure) {
        n = failure == null ? <T id="F+h5UJ"/> : <T id="QqKsGg"/>;
        e[5] = failure;
        e[6] = n;
    } else {
        n = e[6];
    }
    let u;
    if (e[7] !== isPending || e[8] !== onClick || e[9] !== n) {
        u = <R disabled={isPending} onClick={onClick} size="sm" type="button" variant="ghost">{n}</R>;
        e[7] = isPending;
        e[8] = onClick;
        e[9] = n;
        e[10] = u;
    } else {
        u = e[10];
    }
    return u;
}
const b = 72;
const L = 8;
function y(a, e) {
    return a.split(`
`).reduce((acc, item)=>acc + Math.max(1, Math.ceil(item.length / e)), 0);
}
export function i(a) {
    return y(a, b) > L;
}
