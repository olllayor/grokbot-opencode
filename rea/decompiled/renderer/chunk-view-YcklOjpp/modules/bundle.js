import { c as c_1, u, p, r as r_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { i, aY as H } from "./index.eager-platform-Dcfeegfw.js";
import { b9, b7, bv, bw, bx, by, bz, bA, bB, bC, bD as maxHeight, bE, bF as method, bG } from "./index.eager-app-Cj5f8Gby.js";
import { a5 as K, a6 as Q, g as Ee } from "./index-ZYxf-aBb.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "d04b4a45-cf37-4fa4-b018-99356fc5df2e";
            e._sentryDebugIdIdentifier = "sentry-dbid-d04b4a45-cf37-4fa4-b018-99356fc5df2e";
        }
    } catch (e) {}
})();
const _ = {
    surface: {
        kB7OPa: "sand-9f619",
        kVQacm: "sand-b3r6kr",
        kzqmXN: "sand-h8yej3",
        kaIpWk: "sand-hojbe8",
        kWkggS: "sand-13l7odt",
        $$css: true
    },
    bordered: {
        kMzoRj: "sand-qjedn3",
        ksu8eU: "sand-1y0btm7",
        kVAM5u: "sand-fnq37j",
        $$css: true
    },
    frame: {
        kWkggS: "sand-jbqb8w",
        kMzoRj: "sand-c342km",
        k1xSpc: "sand-1lliihq",
        kzqmXN: "sand-h8yej3",
        $$css: true
    },
    height: (a)=>[
            {
                kZKoxP: a != null ? "sand-16ye13r" : a,
                $$css: true
            },
            {
                "--x-height": ((e)=>{
                    if (typeof e === "number") {
                        return `${e}px`;
                    }
                    return e ?? undefined;
                })(a)
            }
        ]
};
function TeComponent(a) {
    TeComponent.d = 301;
    const e = c_1.c(22);
    const { entry, adjacency, agentId } = a;
    const l = b9("sand_mcp_apps");
    const { mcpApps } = b7();
    const n = bv();
    const resourceUri = l ? entry.resourceUri : "";
    const agentId_1 = agentId ?? n ?? "";
    let x;
    if (e[0] !== entry.serverIdentifier || e[1] !== resourceUri || e[2] !== agentId_1) {
        x = {
            serverIdentifier: entry.serverIdentifier,
            resourceUri,
            agentId: agentId_1
        };
        e[0] = entry.serverIdentifier;
        e[1] = resourceUri;
        e[2] = agentId_1;
        e[3] = x;
    } else {
        x = e[3];
    }
    const d = x;
    const state = bw(d);
    let k;
    if (e[4] !== mcpApps || e[5] !== d) {
        k = ()=>{
            if (bx(d)) {
                return mcpApps.document(d).retain();
            }
            return se;
        };
        e[4] = mcpApps;
        e[5] = d;
        e[6] = k;
    } else {
        k = e[6];
    }
    i(k);
    if (!l) {
        return null;
    }
    let m;
    if (e[7] !== mcpApps || e[8] !== d) {
        m = ()=>{
            if (bx(d)) {
                mcpApps.document(d).refresh();
            }
        };
        e[7] = mcpApps;
        e[8] = d;
        e[9] = m;
    } else {
        m = e[9];
    }
    const onRetry = m;
    let b;
    if (e[10] !== entry || e[11] !== onRetry || e[12] !== state) {
        b = <RComponent entry={entry} state={state} onRetry={onRetry}/>;
        e[10] = entry;
        e[11] = onRetry;
        e[12] = state;
        e[13] = b;
    } else {
        b = e[13];
    }
    let c;
    if (e[14] !== adjacency.isGroupStart || e[15] !== entry.resourceUri || e[16] !== entry.timestampMs || e[17] !== b) {
        c = <K data-mcp-app={entry.resourceUri} isGroupStart={adjacency.isGroupStart} timestampMs={entry.timestampMs} variant="mcpApp">{b}</K>;
        e[14] = adjacency.isGroupStart;
        e[15] = entry.resourceUri;
        e[16] = entry.timestampMs;
        e[17] = b;
        e[18] = c;
    } else {
        c = e[18];
    }
    let j;
    if (e[19] !== entry || e[20] !== c) {
        j = <Q entry={entry}>{c}</Q>;
        e[19] = entry;
        e[20] = c;
        e[21] = j;
    } else {
        j = e[21];
    }
    return j;
}
function se() {}
function RComponent(a) {
    RComponent.d = 300;
    const e = c_1.c(15);
    const { entry, state, onRetry } = a;
    const { _: __1 } = u();
    if (state.status === "ready") {
        let n;
        if (e[0] !== entry || e[1] !== state.value) {
            n = <Q1Component app={state.value} entry={entry}/>;
            e[0] = entry;
            e[1] = state.value;
            e[2] = n;
        } else {
            n = e[2];
        }
        return n;
    }
    if (state.status === "failed") {
        let n;
        if (e[3] !== __1 || e[4] !== entry.serverName) {
            n = __1({
                id: "EHxqRb",
                values: {
                    0: entry.serverName
                }
            });
            e[3] = __1;
            e[4] = entry.serverName;
            e[5] = n;
        } else {
            n = e[5];
        }
        let r;
        if (e[6] !== onRetry || e[7] !== n) {
            r = <EComponent text={n} onRetry={onRetry}/>;
            e[6] = onRetry;
            e[7] = n;
            e[8] = r;
        } else {
            r = e[8];
        }
        return r;
    }
    if (state.status === "unavailable" || state.status === "empty") {
        let n;
        if (e[9] !== __1 || e[10] !== entry.serverName) {
            n = __1({
                id: "u98B5U",
                values: {
                    0: entry.serverName
                }
            });
            e[9] = __1;
            e[10] = entry.serverName;
            e[11] = n;
        } else {
            n = e[11];
        }
        let r;
        if (e[12] !== n) {
            r = <EComponent text={n}/>;
            e[12] = n;
            e[13] = r;
        } else {
            r = e[13];
        }
        return r;
    }
    let o;
    if (e[14] === Symbol.for("react.memo_cache_sentinel")) {
        o = <div aria-hidden {...p(_.surface, _.bordered, _.height(by))}/>;
        e[14] = o;
    } else {
        o = e[14];
    }
    return o;
}
function EComponent(a) {
    EComponent.d = 303;
    const e = c_1.c(9);
    const { text, onRetry } = a;
    const { _ } = u();
    let l;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        l = {
            className: "sand-9f619 sand-b3r6kr sand-h8yej3 sand-hojbe8 sand-13l7odt sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-6s0dn4 sand-78zum5 sand-167g77z sand-1qughib sand-1vvogim sand-1awh872"
        };
        e[0] = l;
    } else {
        l = e[0];
    }
    let o;
    if (e[1] !== text) {
        o = <H color="tertiary" size="sm">{text}</H>;
        e[1] = text;
        e[2] = o;
    } else {
        o = e[2];
    }
    let n;
    if (e[3] !== _ || e[4] !== onRetry) {
        n = onRetry == null ? null : <Ee onClick={onRetry} size="xs" tone="monochrome" variant="ghost">{_({
            id: "6gRgw8"
        })}</Ee>;
        e[3] = _;
        e[4] = onRetry;
        e[5] = n;
    } else {
        n = e[5];
    }
    let r;
    if (e[6] !== o || e[7] !== n) {
        r = <div {...l}>{o}{n}</div>;
        e[6] = o;
        e[7] = n;
        e[8] = r;
    } else {
        r = e[8];
    }
    return r;
}
function Q1Component(a) {
    Q1Component.d = 302;
    const e = c_1.c(23);
    const { app, entry } = a;
    const i = bz().resolved === "dark" ? "dark" : "light";
    const [l, setL] = r_1.useState(null);
    const n = bA();
    let r;
    if (e[0] !== n) {
        r = (f, id, g)=>{
            n(g).then(()=>w(f, {
                    id,
                    result: {}
                }), (M)=>{
                bB(M);
                w(f, bG(id));
            });
        };
        e[0] = n;
        e[1] = r;
    } else {
        r = e[1];
    }
    const y = r;
    let x;
    if (e[2] !== entry || e[3] !== y || e[4] !== i) {
        x = (f, A)=>{
            const f_contentWindow = f.contentWindow;
            const defaultView = f.ownerDocument.defaultView;
            if (f_contentWindow == null || defaultView == null) {
                return;
            }
            const I = bC(A, {
                hostContext: T(entry, i),
                userActivation: defaultView.navigator.userActivation,
                ...entry.toolArgumentsJson == null ? {} : {
                    toolArgumentsJson: entry.toolArgumentsJson
                },
                ...entry.toolResultJson == null ? {} : {
                    toolResultJson: entry.toolResultJson
                }
            });
            for (const u of I){
                e: switch(u.kind){
                    case "resize":
                        {
                            setL(u.heightPx);
                            break e;
                        }
                    case "wheel":
                        {
                            ne(f, u);
                            break e;
                        }
                    case "notify":
                        {
                            w(f_contentWindow, {
                                method: u.method,
                                params: u.params
                            });
                            break e;
                        }
                    case "respond":
                        {
                            w(f_contentWindow, {
                                id: u.id,
                                result: u.result
                            });
                            break e;
                        }
                    case "open-link":
                        {
                            y(f_contentWindow, u.id, u.url);
                            break e;
                        }
                    case "reject":
                        w(f_contentWindow, {
                            id: u.id,
                            error: {
                                code: u.code,
                                message: u.message
                            }
                        });
                }
            }
        };
        e[2] = entry;
        e[3] = y;
        e[4] = i;
        e[5] = x;
    } else {
        x = e[5];
    }
    const d = x;
    let v;
    if (e[6] !== entry || e[7] !== d || e[8] !== i) {
        v = (f)=>{
            const defaultView = f.ownerDocument.defaultView;
            const g = (M)=>{
                if (!ae(M, f)) {
                    return;
                }
                const I = bE(M.data);
                if (I != null) {
                    d(f, I);
                }
            };
            defaultView?.addEventListener("message", g);
            re(f, entry, i);
            return ()=>{
                defaultView?.removeEventListener("message", g);
            };
        };
        e[6] = entry;
        e[7] = d;
        e[8] = i;
        e[9] = v;
    } else {
        v = e[9];
    }
    const ref = v;
    let m;
    if (e[10] !== app.prefersBorder) {
        m = ({
            0: {
                className: "sand-9f619 sand-b3r6kr sand-h8yej3 sand-hojbe8 sand-13l7odt"
            },
            1: {
                className: "sand-9f619 sand-b3r6kr sand-h8yej3 sand-hojbe8 sand-13l7odt sand-qjedn3 sand-1y0btm7 sand-fnq37j"
            }
        })[!!app.prefersBorder << 0];
        e[10] = app.prefersBorder;
        e[11] = m;
    } else {
        m = e[11];
    }
    let h;
    if (e[12] !== l) {
        h = p(_.frame, _.height(l ?? by));
        e[12] = l;
        e[13] = h;
    } else {
        h = e[13];
    }
    const title = `${entry.serverName} ${entry.toolName}`;
    let c;
    if (e[14] !== app.allow || e[15] !== app.frameUrl || e[16] !== ref || e[17] !== h || e[18] !== title) {
        c = <iframe {...h} allow={app.allow} ref={ref} sandbox="allow-scripts" src={app.frameUrl} title={title}/>;
        e[14] = app.allow;
        e[15] = app.frameUrl;
        e[16] = ref;
        e[17] = h;
        e[18] = title;
        e[19] = c;
    } else {
        c = e[19];
    }
    let j;
    if (e[20] !== m || e[21] !== c) {
        j = <div {...m}>{c}</div>;
        e[20] = m;
        e[21] = c;
        e[22] = j;
    } else {
        j = e[22];
    }
    return j;
}
function T(entry, theme) {
    return {
        theme,
        displayMode: "inline",
        availableDisplayModes: [
            "inline"
        ],
        containerDimensions: {
            maxHeight
        },
        locale: navigator.language,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        platform: "desktop",
        userAgent: "grok-bot",
        toolInfo: {
            id: entry.toolCallId,
            tool: {
                name: entry.toolName,
                inputSchema: {
                    type: "object"
                }
            }
        }
    };
}
function ne(a, e) {
    const defaultView = a.ownerDocument.defaultView;
    if (defaultView != null) {
        a.dispatchEvent(new defaultView.WheelEvent("wheel", {
            bubbles: true,
            cancelable: true,
            deltaMode: e.deltaMode,
            deltaX: e.deltaX,
            deltaY: e.deltaY
        }));
    }
}
function ae(a, e) {
    return a.source != null && a.source === e.contentWindow;
}
function re({ contentWindow }, entry, t) {
    if (contentWindow != null) {
        w(contentWindow, {
            method,
            params: T(entry, t)
        });
    }
}
function w(a, e) {
    a.postMessage({
        jsonrpc: "2.0",
        ...e
    }, "*");
}
export { TeComponent as default };
