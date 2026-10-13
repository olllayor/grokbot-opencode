import { c as c_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { r as r_1 } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import { ah, a5 as J, a6 as S } from "./index-ZYxf-aBb.js";
import { C } from "./chunk-connector-card-DAiBo2ga.js";
import { g, G } from "./chunk-group-chat-connect-waiting-Cu67aNHe.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./chunk-finance-CSw6gjXN.js";
import "./chunk-connector-card-view-fPUuNO3n.js";
import "./chunk-mcp-connector-status-DhhAF8A6.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "b553baaa-bc2f-4a6f-a403-55cb434b725b";
            e._sentryDebugIdIdentifier = "sentry-dbid-b553baaa-bc2f-4a6f-a403-55cb434b725b";
        }
    } catch (e) {}
})();
function M(m) {
    const t = new Set;
    const e = [];
    for (const r of m){
        const n = r.toLowerCase().replace(/[^a-z0-9]/g, "");
        if (!(n.length === 0 || t.has(n))) {
            t.add(n);
            e.push(r);
        }
    }
    return e;
}
function YComponent(m) {
    YComponent.d = 891;
    const t = c_1.c(25);
    let e;
    let r;
    let n;
    let o;
    let i;
    if (t[0] !== m) {
        ({ connectors: r, className: e, style: i, ref: n, ...o } = m);
        t[0] = m;
        t[1] = e;
        t[2] = r;
        t[3] = n;
        t[4] = o;
        t[5] = i;
    } else {
        e = t[1];
        r = t[2];
        n = t[3];
        o = t[4];
        i = t[5];
    }
    let a;
    let className;
    let ref;
    let style;
    let u;
    let p;
    if (t[6] !== e || t[7] !== r || t[8] !== n || t[9] !== o || t[10] !== i) {
        p = Symbol.for("react.early_return_sentinel");
        t: {
            const g = M(r);
            if (g.length === 0) {
                p = null;
                break t;
            }
            a = o;
            if (t[17] !== e) {
                className = r_1("sand-connector-list", "sand-78zum5 sand-dt5ytf sand-167g77z sand-euugli", e);
                t[17] = e;
                t[18] = className;
            } else {
                className = t[18];
            }
            ref = n;
            style = i;
            u = g.map(NComponent);
        }
        t[6] = e;
        t[7] = r;
        t[8] = n;
        t[9] = o;
        t[10] = i;
        t[11] = a;
        t[12] = className;
        t[13] = ref;
        t[14] = style;
        t[15] = u;
        t[16] = p;
    } else {
        a = t[11];
        className = t[12];
        ref = t[13];
        style = t[14];
        u = t[15];
        p = t[16];
    }
    if (p !== Symbol.for("react.early_return_sentinel")) {
        return p;
    }
    let d;
    if (t[19] !== a || t[20] !== className || t[21] !== ref || t[22] !== style || t[23] !== u) {
        d = <div {...a} className={className} ref={ref} style={style}>{u}</div>;
        t[19] = a;
        t[20] = className;
        t[21] = ref;
        t[22] = style;
        t[23] = u;
        t[24] = d;
    } else {
        d = t[24];
    }
    return d;
}
function NComponent(m) {
    return <C key={m} connector={m} variant="connect"/>;
}
function Component(m) {
    Component.d = 314;
    const t = c_1.c(14);
    const { entry, adjacency } = m;
    const { viewerAuthId } = ah();
    let o;
    if (t[0] !== entry.targeted || t[1] !== viewerAuthId) {
        o = g(entry.targeted, viewerAuthId);
        t[0] = entry.targeted;
        t[1] = viewerAuthId;
        t[2] = o;
    } else {
        o = t[2];
    }
    const i = o;
    if (i !== undefined) {
        let l;
        if (t[3] !== i) {
            l = <G name={i}/>;
            t[3] = i;
            t[4] = l;
        } else {
            l = t[4];
        }
        return l;
    }
    let a;
    if (t[5] !== entry.message.connectors) {
        a = <YComponent connectors={entry.message.connectors}/>;
        t[5] = entry.message.connectors;
        t[6] = a;
    } else {
        a = t[6];
    }
    let s;
    if (t[7] !== adjacency.isGroupStart || t[8] !== entry.timestampMs || t[9] !== a) {
        s = <J className="sand-connector-list-wrap" isGroupStart={adjacency.isGroupStart} timestampMs={entry.timestampMs} variant="question">{a}</J>;
        t[7] = adjacency.isGroupStart;
        t[8] = entry.timestampMs;
        t[9] = a;
        t[10] = s;
    } else {
        s = t[10];
    }
    let c;
    if (t[11] !== entry || t[12] !== s) {
        c = <S entry={entry}>{s}</S>;
        t[11] = entry;
        t[12] = s;
        t[13] = c;
    } else {
        c = t[13];
    }
    return c;
}
export { Component as default };
