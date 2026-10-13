import { c as c_1, u, r } from "./index.eager-vendor-Qbf9YA6n.js";
import { bt, b$, d0, aZ as Ae, aK, b9 } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import { t as Q, z as We, b9 as Ge, ag as Le, I as I_1, an, ah, a5 as Oe, a6 as Ze } from "./index-ZYxf-aBb.js";
import { a, b as De } from "./chunk-group-chat-connect-waiting-Cu67aNHe.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "5d36d6b3-9b81-40b8-a26b-4bc21c9a902b";
            e._sentryDebugIdIdentifier = "sentry-dbid-5d36d6b3-9b81-40b8-a26b-4bc21c9a902b";
        }
    } catch (e) {}
})();
const Re = {
    id: "sSMHtl"
};
const qe = {
    kind: "idle"
};
const Fe = {
    kind: "failed"
};
const Ue = {
    splitChevron: {
        kZCmMZ: "sand-25sj25",
        kwRFfy: "sand-1icxu4v",
        $$css: true
    }
};
function XeComponent(de) {
    XeComponent.d = 474;
    const e = c_1.c(136);
    const { entryId, ask, agentId, groupChat } = de;
    const { i18n, _ } = u();
    const { resolveConnectorGrant } = bt();
    const Y = b$(agentId);
    const sessionId = groupChat?.sessionId ?? Y;
    const waitingOn = groupChat?.waitingOn;
    const [f, setF] = r.useState(qe);
    const [l, setL] = r.useState("always_this_bot");
    const N = ask.status === "pending";
    const d = N && f.kind !== "submitting" && agentId != null && waitingOn === undefined;
    let p;
    if (e[0] !== _ || e[1] !== waitingOn) {
        p = waitingOn === undefined ? {} : {
            tooltip: _({
                id: "wiJDLs",
                values: {
                    waitingOn
                }
            })
        };
        e[0] = _;
        e[1] = waitingOn;
        e[2] = p;
    } else {
        p = e[2];
    }
    const c = p;
    let ee;
    if (e[3] !== agentId || e[4] !== ask.requestId || e[5] !== d || e[6] !== entryId || e[7] !== resolveConnectorGrant || e[8] !== sessionId) {
        ee = (resolution)=>{
            if (!(!d || agentId == null)) {
                setF({
                    kind: "submitting",
                    resolution
                });
                resolveConnectorGrant({
                    entryId,
                    requestId: ask.requestId,
                    resolution,
                    agentId,
                    ...sessionId.length > 0 ? {
                        sessionId
                    } : {}
                }).catch((V)=>{
                    d0(V, {
                        tags: {
                            sand_area: "connector-grant"
                        }
                    });
                    setF(Fe);
                });
            }
        };
        e[3] = agentId;
        e[4] = ask.requestId;
        e[5] = d;
        e[6] = entryId;
        e[7] = resolveConnectorGrant;
        e[8] = sessionId;
        e[9] = ee;
    } else {
        ee = e[9];
    }
    const n = ee;
    if (!N) {
        let u;
        const interrupter = ask.interruptedBy?.name;
        if (ask.status === "skipped") {
            let a;
            if (e[10] !== _ || e[11] !== ask.serverName) {
                a = _({
                    id: "ZDcAvU",
                    values: {
                        0: ask.serverName
                    }
                });
                e[10] = _;
                e[11] = ask.serverName;
                e[12] = a;
            } else {
                a = e[12];
            }
            u = a;
        } else if (ask.status !== "allowed") {
            let a;
            if (e[13] !== _ || e[14] !== ask.serverName || e[15] !== interrupter) {
                a = _(interrupter === undefined ? {
                    id: "w0CbH9",
                    values: {
                        0: ask.serverName
                    }
                } : {
                    id: "xOEYeg",
                    values: {
                        0: ask.serverName,
                        interrupter
                    }
                });
                e[13] = _;
                e[14] = ask.serverName;
                e[15] = interrupter;
                e[16] = a;
            } else {
                a = e[16];
            }
            u = a;
        } else if (ask.remembered === "this_bot") {
            let a;
            if (e[17] !== _ || e[18] !== ask.serverName) {
                a = _({
                    id: "wflxKA",
                    values: {
                        0: ask.serverName
                    }
                });
                e[17] = _;
                e[18] = ask.serverName;
                e[19] = a;
            } else {
                a = e[19];
            }
            u = a;
        } else if (ask.remembered === "all_team_bots") {
            let a;
            if (e[20] !== _ || e[21] !== ask.serverName) {
                a = _({
                    id: "xu4cS5",
                    values: {
                        0: ask.serverName
                    }
                });
                e[20] = _;
                e[21] = ask.serverName;
                e[22] = a;
            } else {
                a = e[22];
            }
            u = a;
        } else {
            let a;
            if (e[23] !== _ || e[24] !== ask.serverName) {
                a = _({
                    id: "jgmJhH",
                    values: {
                        0: ask.serverName
                    }
                });
                e[23] = _;
                e[24] = ask.serverName;
                e[25] = a;
            } else {
                a = e[25];
            }
            u = a;
        }
        let oe;
        if (e[26] !== u) {
            oe = <Le><Ae isTruncating title={u}>{u}</Ae></Le>;
            e[26] = u;
            e[27] = oe;
        } else {
            oe = e[27];
        }
        return oe;
    }
    let te;
    if (e[28] !== _) {
        te = _({
            id: "NoKBgy"
        });
        e[28] = _;
        e[29] = te;
    } else {
        te = e[29];
    }
    const y = te;
    let se;
    if (e[30] === Symbol.for("react.memo_cache_sentinel")) {
        se = {
            className: "sand-3nfvp2 sand-1qjc9v5"
        };
        e[30] = se;
    } else {
        se = e[30];
    }
    const ce = !d;
    let w;
    if (e[31] !== l || e[32] !== n) {
        w = ()=>n(l);
        e[31] = l;
        e[32] = n;
        e[33] = w;
    } else {
        w = e[33];
    }
    let C;
    if (e[34] !== y || e[35] !== ce || e[36] !== w) {
        C = <We disabled={ce} onClick={w} style={aK.splitControlLeading} type="button" variant="primary">{y}</We>;
        e[34] = y;
        e[35] = ce;
        e[36] = w;
        e[37] = C;
    } else {
        C = e[37];
    }
    let x;
    if (e[38] !== _ || e[39] !== ask.serverName) {
        x = _({
            id: "t8B0wp",
            values: {
                0: ask.serverName
            }
        });
        e[38] = _;
        e[39] = ask.serverName;
        e[40] = x;
    } else {
        x = e[40];
    }
    const me = !d;
    let style;
    if (e[41] === Symbol.for("react.memo_cache_sentinel")) {
        style = [
            aK.splitControlTrailing,
            Ue.splitChevron
        ];
        e[41] = style;
    } else {
        style = e[41];
    }
    let le;
    if (e[42] === Symbol.for("react.memo_cache_sentinel")) {
        le = <I_1 aria-hidden name="chevron-down" size="sm"/>;
        e[42] = le;
    } else {
        le = e[42];
    }
    let I;
    if (e[43] !== x || e[44] !== me) {
        I = <Q.Trigger><We aria-label={x} disabled={me} style={style} type="button" variant="primary">{le}</We></Q.Trigger>;
        e[43] = x;
        e[44] = me;
        e[45] = I;
    } else {
        I = e[45];
    }
    let S;
    if (e[46] !== _ || e[47] !== ask.serverName) {
        S = _({
            id: "zyu01W",
            values: {
                0: ask.serverName
            }
        });
        e[46] = _;
        e[47] = ask.serverName;
        e[48] = S;
    } else {
        S = e[48];
    }
    let j;
    if (e[49] !== n) {
        j = ()=>{
            setL("always_this_bot");
            n("always_this_bot");
        };
        e[49] = n;
        e[50] = j;
    } else {
        j = e[50];
    }
    const ue = l === "always_this_bot";
    let k;
    if (e[51] !== l) {
        k = l === "always_this_bot" ? <I_1 name="check" size="md"/> : null;
        e[51] = l;
        e[52] = k;
    } else {
        k = e[52];
    }
    let A;
    if (e[53] !== _) {
        A = _({
            id: "xI/7Jw"
        });
        e[53] = _;
        e[54] = A;
    } else {
        A = e[54];
    }
    let E;
    if (e[55] !== j || e[56] !== ue || e[57] !== k || e[58] !== A) {
        E = <Q.Item onSelect={j} radioChecked={ue} trailing={k}>{A}</Q.Item>;
        e[55] = j;
        e[56] = ue;
        e[57] = k;
        e[58] = A;
        e[59] = E;
    } else {
        E = e[59];
    }
    let G;
    if (e[60] !== n) {
        G = ()=>{
            setL("always_all_team_bots");
            n("always_all_team_bots");
        };
        e[60] = n;
        e[61] = G;
    } else {
        G = e[61];
    }
    const ve = l === "always_all_team_bots";
    let L;
    if (e[62] !== l) {
        L = l === "always_all_team_bots" ? <I_1 name="check" size="md"/> : null;
        e[62] = l;
        e[63] = L;
    } else {
        L = e[63];
    }
    let T;
    if (e[64] !== _) {
        T = _({
            id: "D2LRHl"
        });
        e[64] = _;
        e[65] = T;
    } else {
        T = e[65];
    }
    let M;
    if (e[66] !== G || e[67] !== ve || e[68] !== L || e[69] !== T) {
        M = <Q.Item onSelect={G} radioChecked={ve} trailing={L}>{T}</Q.Item>;
        e[66] = G;
        e[67] = ve;
        e[68] = L;
        e[69] = T;
        e[70] = M;
    } else {
        M = e[70];
    }
    let O;
    if (e[71] !== S || e[72] !== E || e[73] !== M) {
        O = <Q.Content aria-label={S} minWidth={240} size="md">{E}{M}</Q.Content>;
        e[71] = S;
        e[72] = E;
        e[73] = M;
        e[74] = O;
    } else {
        O = e[74];
    }
    let z;
    if (e[75] !== I || e[76] !== O) {
        z = <Q placement="bottom-start">{I}{O}</Q>;
        e[75] = I;
        e[76] = O;
        e[77] = z;
    } else {
        z = e[77];
    }
    let ie;
    if (e[78] !== z || e[79] !== C) {
        ie = <span {...se}>{C}{z}</span>;
        e[78] = z;
        e[79] = C;
        e[80] = ie;
    } else {
        ie = e[80];
    }
    const control = ie;
    let B;
    if (e[81] !== l || e[82] !== n) {
        B = ()=>n(l);
        e[81] = l;
        e[82] = n;
        e[83] = B;
    } else {
        B = e[83];
    }
    const pe = !d;
    let D;
    if (e[84] !== control || e[85] !== y || e[86] !== c || e[87] !== B || e[88] !== pe) {
        D = {
            label: y,
            onClick: B,
            disabled: pe,
            variant: "primary",
            control,
            ...c
        };
        e[84] = control;
        e[85] = y;
        e[86] = c;
        e[87] = B;
        e[88] = pe;
        e[89] = D;
    } else {
        D = e[89];
    }
    let R;
    if (e[90] !== _) {
        R = _({
            id: "pFfO26"
        });
        e[90] = _;
        e[91] = R;
    } else {
        R = e[91];
    }
    let q;
    if (e[92] !== n) {
        q = ()=>n("allowed");
        e[92] = n;
        e[93] = q;
    } else {
        q = e[93];
    }
    const ge = !d;
    let F;
    if (e[94] !== c || e[95] !== R || e[96] !== q || e[97] !== ge) {
        F = {
            label: R,
            onClick: q,
            disabled: ge,
            ...c
        };
        e[94] = c;
        e[95] = R;
        e[96] = q;
        e[97] = ge;
        e[98] = F;
    } else {
        F = e[98];
    }
    let U;
    if (e[99] !== _) {
        U = _({
            id: "6Uau97"
        });
        e[99] = _;
        e[100] = U;
    } else {
        U = e[100];
    }
    let $;
    if (e[101] !== n) {
        $ = ()=>n("skipped");
        e[101] = n;
        e[102] = $;
    } else {
        $ = e[102];
    }
    const he = !d;
    let H;
    if (e[103] !== c || e[104] !== U || e[105] !== $ || e[106] !== he) {
        H = {
            label: U,
            onClick: $,
            disabled: he,
            ...c
        };
        e[103] = c;
        e[104] = U;
        e[105] = $;
        e[106] = he;
        e[107] = H;
    } else {
        H = e[107];
    }
    let re;
    if (e[108] !== D || e[109] !== F || e[110] !== H) {
        re = [
            D,
            F,
            H
        ];
        e[108] = D;
        e[109] = F;
        e[110] = H;
        e[111] = re;
    } else {
        re = e[111];
    }
    const actions = re;
    let ariaLabel;
    if (e[112] !== _ || e[113] !== ask.serverName) {
        ariaLabel = _({
            id: "l75dBG",
            values: {
                0: ask.serverName
            }
        });
        e[112] = _;
        e[113] = ask.serverName;
        e[114] = ariaLabel;
    } else {
        ariaLabel = e[114];
    }
    let Z;
    if (e[115] !== _ || e[116] !== ask.serverName) {
        Z = _({
            id: "uzODrR",
            values: {
                0: ask.serverName
            }
        });
        e[115] = _;
        e[116] = ask.serverName;
        e[117] = Z;
    } else {
        Z = e[117];
    }
    let description;
    if (e[118] !== _ || e[119] !== ask.serverName || e[120] !== waitingOn) {
        description = _(waitingOn === undefined ? {
            id: "Pz7Lcp",
            values: {
                0: ask.serverName,
                1: ask.serverName
            }
        } : {
            id: "DnmsLb",
            values: {
                0: ask.serverName,
                waitingOn
            }
        });
        e[118] = _;
        e[119] = ask.serverName;
        e[120] = waitingOn;
        e[121] = description;
    } else {
        description = e[121];
    }
    let K;
    if (e[122] !== i18n || e[123] !== f.kind) {
        K = f.kind === "failed" ? {
            failureNote: i18n._(Re)
        } : {};
        e[122] = i18n;
        e[123] = f.kind;
        e[124] = K;
    } else {
        K = e[124];
    }
    let answeredNote;
    if (e[125] !== _ || e[126] !== waitingOn) {
        answeredNote = waitingOn === undefined ? undefined : _({
            id: "wShbj+",
            values: {
                waitingOn
            }
        });
        e[125] = _;
        e[126] = waitingOn;
        e[127] = answeredNote;
    } else {
        answeredNote = e[127];
    }
    let ne;
    if (e[128] !== actions || e[129] !== entryId || e[130] !== ariaLabel || e[131] !== Z || e[132] !== description || e[133] !== K || e[134] !== answeredNote) {
        ne = <Ge ariaLabel={ariaLabel} entryId={entryId} title={Z} description={description} {...K} answeredNote={answeredNote} actions={actions}/>;
        e[128] = actions;
        e[129] = entryId;
        e[130] = ariaLabel;
        e[131] = Z;
        e[132] = description;
        e[133] = K;
        e[134] = answeredNote;
        e[135] = ne;
    } else {
        ne = e[135];
    }
    return ne;
}
function EComponent(de) {
    EComponent.d = 312;
    const e = c_1.c(21);
    const { entry, adjacency } = de;
    const g = an();
    const { isReadOnly, viewerAuthId } = ah();
    const t = b9("grok_bot_group_chats");
    const { ask } = entry.message;
    const transcriptAgentId = g ?? undefined;
    let v;
    if (e[0] !== entry.targeted || e[1] !== transcriptAgentId || e[2] !== viewerAuthId) {
        v = a({
            targeted: entry.targeted,
            viewerAuthId,
            transcriptAgentId
        });
        e[0] = entry.targeted;
        e[1] = transcriptAgentId;
        e[2] = viewerAuthId;
        e[3] = v;
    } else {
        v = e[3];
    }
    const r = v;
    const f = r.groupChat?.waitingOn;
    if (t && ask.status === "pending" && f !== undefined) {
        let c;
        if (e[4] !== ask.serverName || e[5] !== f) {
            c = <De name={f} serverName={ask.serverName}/>;
            e[4] = ask.serverName;
            e[5] = f;
            e[6] = c;
        } else {
            c = e[6];
        }
        return c;
    }
    const agentId = isReadOnly ? undefined : r.agentId;
    let l;
    if (e[7] !== r.groupChat) {
        l = r.groupChat === undefined ? {} : {
            groupChat: r.groupChat
        };
        e[7] = r.groupChat;
        e[8] = l;
    } else {
        l = e[8];
    }
    let b;
    if (e[9] !== ask || e[10] !== entry.id || e[11] !== agentId || e[12] !== l) {
        b = <XeComponent agentId={agentId} ask={ask} entryId={entry.id} {...l}/>;
        e[9] = ask;
        e[10] = entry.id;
        e[11] = agentId;
        e[12] = l;
        e[13] = b;
    } else {
        b = e[13];
    }
    const N = b;
    if (ask.status !== "pending") {
        return N;
    }
    let d;
    if (e[14] !== adjacency.isGroupStart || e[15] !== entry.timestampMs || e[16] !== N) {
        d = <Oe isGroupStart={adjacency.isGroupStart} timestampMs={entry.timestampMs} variant="widget">{N}</Oe>;
        e[14] = adjacency.isGroupStart;
        e[15] = entry.timestampMs;
        e[16] = N;
        e[17] = d;
    } else {
        d = e[17];
    }
    let p;
    if (e[18] !== entry || e[19] !== d) {
        p = <Ze entry={entry}>{d}</Ze>;
        e[18] = entry;
        e[19] = d;
        e[20] = p;
    } else {
        p = e[20];
    }
    return p;
}
export { EComponent as default };
