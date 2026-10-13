import { c as c_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { i as i_1 } from "./index.eager-platform-Dcfeegfw.js";
import { b9, bT, b7, bU } from "./index.eager-app-Cj5f8Gby.js";
import { an, ah, ao as R, a5 as T, a6 as K } from "./index-ZYxf-aBb.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "6cbc830d-b313-4881-9c55-9fc42a60803d";
            e._sentryDebugIdIdentifier = "sentry-dbid-6cbc830d-b313-4881-9c55-9fc42a60803d";
        }
    } catch (e) {}
})();
function WComponent(S) {
    WComponent.d = 322;
    const s = c_1.c(26);
    const { entry, adjacency } = S;
    const x = an();
    const { isReadOnly } = ah();
    const G = b9("grok_bot_publish_confirm_card");
    const d = bT();
    let n;
    if (s[0] !== d || s[1] !== isReadOnly) {
        n = ()=>{
            if (!isReadOnly) {
                d("grok_bot_publish_confirm_card");
            }
            return q;
        };
        s[0] = d;
        s[1] = isReadOnly;
        s[2] = n;
    } else {
        n = s[2];
    }
    i_1(n);
    const e = isReadOnly || !G;
    const { publish } = b7().cloudAgents;
    const bcId = entry.message.approval.bcId;
    let i;
    if (s[3] !== bcId || s[4] !== entry.message.approval.proposalId || s[5] !== e || s[6] !== publish) {
        i = ()=>{
            if (e) {
                return O;
            }
            return publish.attach(bcId, entry.message.approval.proposalId);
        };
        s[3] = bcId;
        s[4] = entry.message.approval.proposalId;
        s[5] = e;
        s[6] = publish;
        s[7] = i;
    } else {
        i = s[7];
    }
    i_1(i);
    const b = e ? null : x;
    let p;
    if (s[8] !== entry.message.approval || s[9] !== b) {
        p = {
            agentId: b,
            snapshot: entry.message.approval
        };
        s[8] = entry.message.approval;
        s[9] = b;
        s[10] = p;
    } else {
        p = s[10];
    }
    const l = bU(p, !e);
    const access = G ? "not_owner" : "off";
    let c;
    if (s[11] !== access || s[12] !== e || s[13] !== l) {
        c = e ? {
            ...l,
            access
        } : l;
        s[11] = access;
        s[12] = e;
        s[13] = l;
        s[14] = c;
    } else {
        c = s[14];
    }
    const view = c;
    const v = e ? null : x;
    let a;
    if (s[15] !== entry.id || s[16] !== v || s[17] !== view) {
        a = <R agentId={v} entryId={entry.id} view={view}/>;
        s[15] = entry.id;
        s[16] = v;
        s[17] = view;
        s[18] = a;
    } else {
        a = s[18];
    }
    let o;
    if (s[19] !== adjacency.isGroupStart || s[20] !== entry.timestampMs || s[21] !== a) {
        o = <T isGroupStart={adjacency.isGroupStart} timestampMs={entry.timestampMs} variant="question">{a}</T>;
        s[19] = adjacency.isGroupStart;
        s[20] = entry.timestampMs;
        s[21] = a;
        s[22] = o;
    } else {
        o = s[22];
    }
    let u;
    if (s[23] !== entry || s[24] !== o) {
        u = <K entry={entry}>{o}</K>;
        s[23] = entry;
        s[24] = o;
        s[25] = u;
    } else {
        u = s[25];
    }
    return u;
}
function O() {}
function q() {}
export { WComponent as default };
