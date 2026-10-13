import { c, u } from "./index.eager-vendor-Qbf9YA6n.js";
import { ag as F } from "./index-ZYxf-aBb.js";
import "./index.eager-platform-Dcfeegfw.js";
import { aZ as M } from "./index.eager-app-Cj5f8Gby.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "b923ad13-c576-4af6-823c-9e44aadb2f77";
            e._sentryDebugIdIdentifier = "sentry-dbid-b923ad13-c576-4af6-823c-9e44aadb2f77";
        }
    } catch (e) {}
})();
export function g(s, t) {
    if (!(s === undefined || s.forUser.authId === t)) {
        return s.forUser.name;
    }
}
export function a({ targeted, viewerAuthId, transcriptAgentId }) {
    if (targeted === undefined) {
        return {
            agentId: transcriptAgentId
        };
    }
    return {
        agentId: targeted.answerAt.agentId,
        groupChat: {
            sessionId: targeted.answerAt.sessionId,
            waitingOn: g(targeted, viewerAuthId)
        }
    };
}
function LComponent(s) {
    LComponent.d = 496;
    const t = c.c(2);
    const { label } = s;
    let i;
    if (t[0] !== label) {
        i = <F><M isTruncating title={label}>{label}</M></F>;
        t[0] = label;
        t[1] = i;
    } else {
        i = t[1];
    }
    return i;
}
export function G(s) {
    G.d = 493;
    const t = c.c(5);
    const { name } = s;
    const { _ } = u();
    let e;
    if (t[0] !== _ || t[1] !== name) {
        e = _({
            id: "C9DhJs",
            values: {
                name
            }
        });
        t[0] = _;
        t[1] = name;
        t[2] = e;
    } else {
        e = t[2];
    }
    let r;
    if (t[3] !== e) {
        r = <LComponent label={e}/>;
        t[3] = e;
        t[4] = r;
    } else {
        r = t[4];
    }
    return r;
}
export function b(s) {
    b.d = 494;
    const t = c.c(6);
    const { name, serverName } = s;
    const { _ } = u();
    let r;
    if (t[0] !== _ || t[1] !== name || t[2] !== serverName) {
        r = _({
            id: "1B27rj",
            values: {
                name,
                serverName
            }
        });
        t[0] = _;
        t[1] = name;
        t[2] = serverName;
        t[3] = r;
    } else {
        r = t[3];
    }
    let o;
    if (t[4] !== r) {
        o = <LComponent label={r}/>;
        t[4] = r;
        t[5] = o;
    } else {
        o = t[5];
    }
    return o;
}
function HComponent(s) {
    HComponent.d = 495;
    const t = c.c(5);
    const { name } = s;
    const { _ } = u();
    let e;
    if (t[0] !== _ || t[1] !== name) {
        e = _({
            id: "GZbbNk",
            values: {
                name
            }
        });
        t[0] = _;
        t[1] = name;
        t[2] = e;
    } else {
        e = t[2];
    }
    let r;
    if (t[3] !== e) {
        r = <LComponent label={e}/>;
        t[3] = e;
        t[4] = r;
    } else {
        r = t[4];
    }
    return r;
}
export { HComponent as c };
