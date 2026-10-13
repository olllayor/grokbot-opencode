import { c as c_1, u, j as j_1, p, r } from "./index.eager-vendor-Qbf9YA6n.js";
import { b9 as Ze1, W as W_1, bl, bm, aA, ag as Xe, an, ah, a5 as Tt1, a6 as It1 } from "./index-ZYxf-aBb.js";
import { aK, bt as bt_1, b$, em, b7, aU, en, eo, ep, aZ as Ge, eq, cb, d0, er, bB, y } from "./index.eager-app-Cj5f8Gby.js";
import { aY as Je1 } from "./index.eager-platform-Dcfeegfw.js";
import { b as b_1, S } from "./chunk-settled-message-card-BSNKlGh6.js";
import { u as u_1, a } from "./chunk-provider-team-policy-CBjUAi-4.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "70995af2-86f9-4933-911d-baf019877517";
            e._sentryDebugIdIdentifier = "sentry-dbid-70995af2-86f9-4933-911d-baf019877517";
        }
    } catch (e) {}
})();
const fill = "#278eff";
const Le = {
    recipient: {
        k1xSpc: "sand-3nfvp2",
        kGNEyG: "sand-6s0dn4",
        kAzted: "sand-jwf9q1",
        k7Eaqz: "sand-euugli",
        kg3NbH: "sand-dqyycr",
        kaIpWk: "sand-149ho13",
        kWkggS: "sand-1tiofj7",
        kHjlTd: "sand-j0a0fe",
        $$css: true
    },
    handle: {
        k7Eaqz: "sand-euugli",
        kHjlTd: "sand-j0a0fe",
        $$css: true
    },
    bubbleText: {
        kskxy: "sand-1sspnmo",
        k8WAf4: "sand-ifx94n",
        kORKVm: "sand-1odjw0f",
        $$css: true
    }
};
function UeComponent() {
    UeComponent.d = 511;
    const i = c_1.c(1);
    let e;
    if (i[0] === Symbol.for("react.memo_cache_sentinel")) {
        e = <svg aria-hidden height={16} viewBox="310.933 62.5814 27.927 19.6526" width={23} className="sand-10l6tqk sand-8knxv4 sand-1ey2m1c sand-13niomq sand-fr5ud3"><path d="M330.229 66.3282C330.463 65.1153 330.586 63.8627 330.586 62.5814H310.933V82.234C315.692 82.234 320.056 80.5425 323.456 77.7278C326.849 79.9878 332.288 82.1361 338.86 80.9411C337.05 80.1654 330.068 75.5108 330.327 66.2017C330.296 66.2448 330.263 66.287 330.229 66.3282Z" fill={fill}/></svg>;
        i[0] = e;
    } else {
        e = i[0];
    }
    return e;
}
function OeComponent(i) {
    OeComponent.d = 512;
    const e = c_1.c(4);
    const { url } = i;
    if (url === null) {
        let I;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            I = <W_1 aria-hidden color="green" name="chat-bubble" size="base"/>;
            e[0] = I;
        } else {
            I = e[0];
        }
        return I;
    }
    let t;
    if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
        t = {
            className: "sand-1lliihq sand-2lah0s sand-w4jnvo sand-1qx5ct2 sand-19kjcj4"
        };
        e[1] = t;
    } else {
        t = e[1];
    }
    let l;
    if (e[2] !== url) {
        l = <img alt="" draggable={false} height={20} src={url} width={20} {...t}/>;
        e[2] = url;
        e[3] = l;
    } else {
        l = e[3];
    }
    return l;
}
function FeComponent(i) {
    FeComponent.d = 514;
    const e = c_1.c(29);
    const { appIconUrl, target, recipientName, alwaysAllowed } = i;
    const b = alwaysAllowed === undefined ? false : alwaysAllowed;
    const { _ } = u();
    let o;
    let recipient;
    let v;
    let showStatusDot;
    let status;
    let a;
    if (e[0] !== _ || e[1] !== appIconUrl || e[2] !== recipientName || e[3] !== target.recipient || e[4] !== target.text) {
        const firstLine = b_1(target.text);
        recipient = recipientName ?? target.recipient;
        o = S;
        if (e[11] !== appIconUrl) {
            v = <OeComponent url={appIconUrl}/>;
            e[11] = appIconUrl;
            e[12] = v;
        } else {
            v = e[12];
        }
        showStatusDot = true;
        if (e[13] !== _) {
            status = _({
                id: "h69WC6"
            });
            e[13] = _;
            e[14] = status;
        } else {
            status = e[14];
        }
        a = _({
            id: "p0Rg3/",
            values: {
                0: recipientName ?? target.recipient,
                firstLine
            }
        });
        e[0] = _;
        e[1] = appIconUrl;
        e[2] = recipientName;
        e[3] = target.recipient;
        e[4] = target.text;
        e[5] = o;
        e[6] = recipient;
        e[7] = v;
        e[8] = showStatusDot;
        e[9] = status;
        e[10] = a;
    } else {
        o = e[5];
        recipient = e[6];
        v = e[7];
        showStatusDot = e[8];
        status = e[9];
        a = e[10];
    }
    let g;
    if (e[15] !== _ || e[16] !== b || e[17] !== recipient) {
        g = b ? {
            note: _({
                id: "ONZQOq",
                values: {
                    recipient
                }
            })
        } : {};
        e[15] = _;
        e[16] = b;
        e[17] = recipient;
        e[18] = g;
    } else {
        g = e[18];
    }
    let f;
    if (e[19] !== _) {
        f = _({
            id: "t7TeQU"
        });
        e[19] = _;
        e[20] = f;
    } else {
        f = e[20];
    }
    let k;
    if (e[21] !== o || e[22] !== v || e[23] !== showStatusDot || e[24] !== status || e[25] !== a || e[26] !== g || e[27] !== f) {
        k = j_1.jsx(o, {
            leading: v,
            showStatusDot,
            status,
            summary: a,
            ...g,
            title: f,
            tone: "success"
        });
        e[21] = o;
        e[22] = v;
        e[23] = showStatusDot;
        e[24] = status;
        e[25] = a;
        e[26] = g;
        e[27] = f;
        e[28] = k;
    } else {
        k = e[28];
    }
    return k;
}
function EComponent(i) {
    EComponent.d = 513;
    const e = c_1.c(69);
    const { appIconUrl, entryId, target, recipientName, origin, send, alwaysAllow, dontSend, policyNote, failureNote, rootRef } = i;
    const { _: __1 } = u();
    let g;
    e: switch(origin.kind){
        case "this-computer":
            {
                let D;
                if (e[0] !== __1) {
                    D = __1({
                        id: "K/nVBm"
                    });
                    e[0] = __1;
                    e[1] = D;
                } else {
                    D = e[1];
                }
                g = D;
                break e;
            }
        case "machine":
            {
                const machineLabel = origin.label;
                let ee;
                if (e[2] !== __1 || e[3] !== machineLabel) {
                    ee = __1({
                        id: "6SnR1w",
                        values: {
                            machineLabel
                        }
                    });
                    e[2] = __1;
                    e[3] = machineLabel;
                    e[4] = ee;
                } else {
                    ee = e[4];
                }
                g = ee;
                break e;
            }
    }
    let f;
    if (e[5] !== __1) {
        f = __1({
            id: "+zYUxF"
        });
        e[5] = __1;
        e[6] = f;
    } else {
        f = e[6];
    }
    let k;
    if (e[7] !== dontSend || e[8] !== f) {
        k = {
            label: f,
            ...dontSend
        };
        e[7] = dontSend;
        e[8] = f;
        e[9] = k;
    } else {
        k = e[9];
    }
    const V = k;
    let ie;
    if (e[10] !== __1) {
        ie = __1({
            id: "JlFcis"
        });
        e[10] = __1;
        e[11] = ie;
    } else {
        ie = e[11];
    }
    let se;
    if (e[12] !== send || e[13] !== ie) {
        se = {
            label: ie,
            variant: "primary",
            ...send
        };
        e[12] = send;
        e[13] = ie;
        e[14] = se;
    } else {
        se = e[14];
    }
    let re;
    if (e[15] !== alwaysAllow) {
        re = alwaysAllow === undefined ? [] : [
            alwaysAllow
        ];
        e[15] = alwaysAllow;
        e[16] = re;
    } else {
        re = e[16];
    }
    let R;
    if (e[17] !== V || e[18] !== se || e[19] !== re) {
        R = [
            se,
            ...re,
            V
        ];
        e[17] = V;
        e[18] = se;
        e[19] = re;
        e[20] = R;
    } else {
        R = e[20];
    }
    let w;
    if (e[21] !== policyNote) {
        w = policyNote === undefined ? {} : {
            answeredNote: policyNote
        };
        e[21] = policyNote;
        e[22] = w;
    } else {
        w = e[22];
    }
    let ne;
    if (e[23] !== __1) {
        ne = __1({
            id: "qM5wI6"
        });
        e[23] = __1;
        e[24] = ne;
    } else {
        ne = e[24];
    }
    let P;
    let _;
    if (e[25] === Symbol.for("react.memo_cache_sentinel")) {
        _ = {
            className: "sand-78zum5 sand-dt5ytf sand-167g77z sand-9f619 sand-h8yej3 sand-euugli sand-7z7khe sand-mkeg23 sand-1y0btm7 sand-q03nf1 sand-4pepcl sand-13l7odt"
        };
        P = {
            className: "sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-euugli"
        };
        e[25] = P;
        e[26] = _;
    } else {
        P = e[25];
        _ = e[26];
    }
    let W;
    if (e[27] !== __1) {
        W = __1({
            id: "/jQctM"
        });
        e[27] = __1;
        e[28] = W;
    } else {
        W = e[28];
    }
    let L;
    if (e[29] !== W) {
        L = <Je1 color="secondary" size="md">{W}</Je1>;
        e[29] = W;
        e[30] = L;
    } else {
        L = e[30];
    }
    let y;
    if (e[31] !== recipientName || e[32] !== target.recipient) {
        y = recipientName === undefined ? <Je1 rootStyle={Le.recipient} size="sm" weight="medium"><bdi dir="ltr">{target.recipient}</bdi></Je1> : <><Je1 rootStyle={Le.recipient} size="sm" weight="medium"><bdi>{recipientName}</bdi></Je1><Je1 color="secondary" rootStyle={Le.handle} size="sm"><bdi dir="ltr">{target.recipient}</bdi></Je1></>;
        e[31] = recipientName;
        e[32] = target.recipient;
        e[33] = y;
    } else {
        y = e[33];
    }
    let j;
    if (e[34] !== L || e[35] !== y) {
        j = <div {...P}>{L}{y}</div>;
        e[34] = L;
        e[35] = y;
        e[36] = j;
    } else {
        j = e[36];
    }
    let q;
    if (e[37] !== target.text) {
        q = target.text.length === 0 ? null : <div className="sand-78zum5 sand-13a6bvl sand-1im30kd"><div className="sand-1n2onr6 sand-c8icb0 sand-r6dmxw sand-aope02 sand-gqmno8 sand-1g2026g sand-fungia sand-fc7y3v sand-uy8w9f sand-1k6tqyu sand-126k92a sand-j0a0fe"><div dir="auto" {...p(Le.bubbleText, aK.thinScrollbar)}>{target.text}</div><UeComponent/></div></div>;
        e[37] = target.text;
        e[38] = q;
    } else {
        q = e[38];
    }
    let body;
    if (e[39] !== j || e[40] !== q) {
        body = <div {..._}>{j}{q}</div>;
        e[39] = j;
        e[40] = q;
        e[41] = body;
    } else {
        body = e[41];
    }
    let h;
    if (e[42] !== g) {
        h = g === undefined ? {} : {
            description: g
        };
        e[42] = g;
        e[43] = h;
    } else {
        h = e[43];
    }
    let Y;
    if (e[44] !== __1) {
        Y = __1({
            id: "93lvUi"
        });
        e[44] = __1;
        e[45] = Y;
    } else {
        Y = e[45];
    }
    let x;
    if (e[46] !== V || e[47] !== Y) {
        x = {
            ...V,
            tooltip: Y
        };
        e[46] = V;
        e[47] = Y;
        e[48] = x;
    } else {
        x = e[48];
    }
    let J;
    if (e[49] !== failureNote) {
        J = failureNote === undefined ? {} : {
            failureNote
        };
        e[49] = failureNote;
        e[50] = J;
    } else {
        J = e[50];
    }
    let c;
    if (e[51] !== appIconUrl) {
        c = <OeComponent url={appIconUrl}/>;
        e[51] = appIconUrl;
        e[52] = c;
    } else {
        c = e[52];
    }
    let X;
    if (e[53] !== rootRef) {
        X = rootRef === undefined ? {} : {
            rootRef
        };
        e[53] = rootRef;
        e[54] = X;
    } else {
        X = e[54];
    }
    let Z;
    if (e[55] !== __1) {
        Z = __1({
            id: "rRtbxf"
        });
        e[55] = __1;
        e[56] = Z;
    } else {
        Z = e[56];
    }
    let G;
    if (e[57] !== entryId || e[58] !== body || e[59] !== h || e[60] !== x || e[61] !== J || e[62] !== c || e[63] !== X || e[64] !== Z || e[65] !== R || e[66] !== w || e[67] !== ne) {
        G = <Ze1 actions={R} {...w} ariaLabel={ne} body={body} {...h} dismiss={x} entryId={entryId} {...J} hideBadge leading={c} {...X} title={Z}/>;
        e[57] = entryId;
        e[58] = body;
        e[59] = h;
        e[60] = x;
        e[61] = J;
        e[62] = c;
        e[63] = X;
        e[64] = Z;
        e[65] = R;
        e[66] = w;
        e[67] = ne;
        e[68] = G;
    } else {
        G = e[68];
    }
    return G;
}
const vt = {
    id: "svTEGM"
};
const bt = {
    id: "a9tTHW"
};
const De = {
    id: "2ltcq2"
};
const St = {
    id: "2pfonj"
};
const wt = {
    id: "TDaQFx"
};
const It = {
    id: "rek4Fs"
};
const Tt = {
    id: "g3D+vR"
};
const Be = {
    id: "sSMHtl"
};
const xt = {
    id: "QqKsGg"
};
const kt = {
    kind: "idle"
};
const At = {
    kind: "failed"
};
function Me(status) {
    return status === "denied" || status === "never" || status === "expired";
}
function He(ask) {
    return ask.action === "send-imessage" && ask.status !== "pending" && !Me(ask.status);
}
function Et(ask) {
    return ask.standingGrant?.kind === "offered";
}
function jt(i, e) {
    if (i !== "global") {
        return "offered";
    }
    if (e.ready) {
        if (cb("always", e.value)) {
            return "forbidden-by-team";
        }
        return "offered";
    }
    return "pending-team-policy";
}
function Lt(i, reason) {
    switch(reason){
        case "team-policy":
            return i({
                id: "ABBYa1"
            });
        case "group-chat":
            return i({
                id: "sluTWr"
            });
        case "invalid-recipient":
        case "machine-unsupported":
        case "harness-cannot-persist":
            return;
    }
}
function Nt(target) {
    return target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement;
}
function _t(i, action, text) {
    if (text.trim().length !== 0) {
        return {
            label: i(action === "run-command" ? {
                id: "oWoQSS"
            } : {
                id: "OStQrX"
            }),
            detail: {
                kind: "text",
                text
            }
        };
    }
}
function Mt(i, e) {
    const s = e.description?.replace(/\s+/g, " ").trim();
    if (s !== undefined && s.length > 0) {
        return s.replace(/[.!?]+$/u, "");
    }
    const t = e.target.replace(/\s+/g, " ").trim();
    switch(e.action){
        case "run-command":
            return;
        case "send-input":
            return i({
                id: "tH+U6E"
            });
        case "read-file":
        case "read-ai-tool-setup":
            if (t.length > 0) {
                return i({
                    id: "kQzX+T",
                    values: {
                        target: t
                    }
                });
            }
            return i({
                id: "RK5AcV"
            });
        case "list-directory":
            if (t.length > 0) {
                return i({
                    id: "KbFZpy",
                    values: {
                        target: t
                    }
                });
            }
            return i({
                id: "BKLcD+"
            });
        case "write-file":
            if (t.length > 0) {
                return i({
                    id: "j0vvBP",
                    values: {
                        target: t
                    }
                });
            }
            return i({
                id: "EF1t/Y"
            });
        case "read-messages":
            return i({
                id: "Htzxqs"
            });
        case "send-imessage":
            return i({
                id: "RmCL2p"
            });
    }
}
function Ct(ask, e) {
    if (e !== undefined) {
        return {
            kind: "machine",
            label: e
        };
    }
    if (ask.machineId === undefined) {
        return {
            kind: "this-computer"
        };
    }
    return {
        kind: "unnamed-machine"
    };
}
function Ot(action) {
    switch(eo(action)){
        case "global":
            return {
                title: vt,
                description: bt
            };
        case "setting":
            return {
                title: De,
                description: St
            };
        case "subject":
            return {
                title: De,
                description: wt
            };
    }
}
function Pt(i, ask) {
    if (eo(ask.action) !== "global") {
        if (ask.status === "always") {
            return i({
                id: "UJAP1D"
            });
        }
        if (ask.status === "never") {
            return i({
                id: "oxUMTM"
            });
        }
        if (Me(ask.status)) {
            return i({
                id: "cdGXuM"
            });
        }
        return i({
            id: "f9pa67"
        });
    }
    if (ask.status === "always") {
        return i({
            id: "0dyBiF"
        });
    }
    if (ask.status === "never") {
        return i({
            id: "HHczaN"
        });
    }
    if (Me(ask.status)) {
        return i({
            id: "2PF7X0"
        });
    }
    return i({
        id: "U3KtfK"
    });
}
async function qt(i) {
    const { ask } = i;
    const s = eo(ask.action);
    let i_resolution = i.resolution;
    let standingSaveFailed = false;
    if (s === "subject" && i_resolution === "always" && !Et(ask)) {
        i_resolution = "allow-once";
    }
    if (s !== "global" && i_resolution === "never") {
        i_resolution = er;
    }
    if (s === "global" && (i_resolution === "always" || i_resolution === "never")) {
        try {
            if (await i.setPermission(i_resolution, ask.machineId) !== i_resolution) {
                i_resolution = i_resolution === "always" ? "allow-once" : er;
            }
        } catch (error) {
            bB(error);
            i_resolution = i_resolution === "always" ? "allow-once" : er;
            standingSaveFailed = true;
        }
    }
    if (s === "subject" && i_resolution === "always" && ask.standingGrant?.kind === "offered") {
        if (!i.recordApprovalLocally) {
            i_resolution = "allow-once";
        } else {
            try {
                const { stored } = await i.recordStandingGrant({
                    action: ask.action,
                    recipient: ask.standingGrant.recipient,
                    ...ask.machineId === undefined ? {} : {
                        machineId: ask.machineId
                    }
                });
                if (!stored) {
                    i_resolution = "allow-once";
                }
            } catch (error) {
                bB(error);
                i_resolution = "allow-once";
            }
        }
    }
    (i_resolution === "allow-once" || i_resolution === "always" && s === "subject") && i.recordApprovalLocally && (ask.machineId === undefined ? await i.recordApproval(ask.requestId, ask.action, ask.target) : await i.recordApproval(ask.requestId, ask.action, ask.target, ask.machineId));
    await i.resolveLocalToolPermission({
        entryId: i.entryId,
        requestId: ask.requestId,
        resolution: i_resolution,
        agentId: i.agentId,
        ...i.sessionId.length > 0 ? {
            sessionId: i.sessionId
        } : {}
    });
    return {
        sent: i_resolution,
        standingSaveFailed
    };
}
function Gt(ask, e) {
    if (e.kind !== "answered" || eo(ask.action) !== "global") {
        return false;
    }
    if (e.standingSaveFailed) {
        return true;
    }
    return e.sent === "always" && ask.machineId !== undefined && ask.status === "allowed";
}
function CeComponent(i) {
    CeComponent.d = 497;
    const e = c_1.c(215);
    const { entryId, ask, agentId, isEscapeTarget } = i;
    const b = isEscapeTarget === undefined ? false : isEscapeTarget;
    const { i18n, _: __1 } = u();
    const { _: __2 } = u();
    const { resolveLocalToolPermission } = bt_1();
    const sessionId = b$(agentId);
    const recordApproval = bl();
    const recordStandingGrant = bm();
    const { setPermission } = aA();
    const f = em();
    const k = b7();
    const V = ask.status === "pending";
    aU(V ? k.teamPolicy.refresh : k.teamPolicy.load);
    const ie = u_1();
    const ready = a();
    aU(k.localToolPermission.loadMessagesAppIcon);
    const re = en();
    const appIconUrl = re.status === "ready" ? re.value : null;
    const [w, setW] = r.useState(kt);
    const P = V && (w.kind === "idle" || w.kind === "failed") && agentId != null;
    let _ = f.status === "ready" ? f.value : undefined;
    if (f.status === "loading" || f.status === "failed") {
        _ = f.previous;
    }
    let W;
    if (e[0] !== _) {
        W = _?.find(Rt);
        e[0] = _;
        e[1] = W;
    } else {
        W = e[1];
    }
    const L = W;
    const recordApprovalLocally = ask.machineId === undefined || L?.machineId === ask.machineId;
    const j = P;
    const q = P;
    let Q;
    if (e[2] !== ask.machineId || e[3] !== ask.machineLabel || e[4] !== _) {
        Q = ask.machineLabel ?? _?.find((u)=>u.machineId === ask.machineId)?.label;
        e[2] = ask.machineId;
        e[3] = ask.machineLabel;
        e[4] = _;
        e[5] = Q;
    } else {
        Q = e[5];
    }
    const h = Q;
    let Y;
    if (e[6] !== ask.action || e[7] !== ie || e[8] !== ready) {
        Y = jt(eo(ask.action), {
            ready,
            value: ie
        });
        e[6] = ask.action;
        e[7] = ie;
        e[8] = ready;
        e[9] = Y;
    } else {
        Y = e[9];
    }
    const x = Y;
    let J;
    if (e[10] !== agentId || e[11] !== x || e[12] !== ask || e[13] !== j || e[14] !== q || e[15] !== P || e[16] !== entryId || e[17] !== recordApprovalLocally || e[18] !== recordApproval || e[19] !== recordStandingGrant || e[20] !== resolveLocalToolPermission || e[21] !== sessionId || e[22] !== setPermission) {
        J = (resolution)=>{
            let p = j;
            if (resolution === er) {
                p = P;
            } else if (resolution === "allow-once") {
                p = q;
            }
            !(!p || agentId == null) && (resolution === "always" && x !== "offered" || (setW({
                kind: "submitting",
                resolution
            }), qt({
                setPermission,
                recordApproval,
                recordStandingGrant,
                resolveLocalToolPermission,
                entryId,
                agentId,
                sessionId,
                ask,
                recordApprovalLocally,
                resolution
            }).then((r)=>setW({
                    kind: "answered",
                    ...r
                }), (r)=>{
                d0(r, {
                    tags: {
                        sand_area: "local-tool-permission"
                    }
                });
                setW(At);
            })));
        };
        e[10] = agentId;
        e[11] = x;
        e[12] = ask;
        e[13] = j;
        e[14] = q;
        e[15] = P;
        e[16] = entryId;
        e[17] = recordApprovalLocally;
        e[18] = recordApproval;
        e[19] = recordStandingGrant;
        e[20] = resolveLocalToolPermission;
        e[21] = sessionId;
        e[22] = setPermission;
        e[23] = J;
    } else {
        J = e[23];
    }
    const c = J;
    let X;
    if (e[24] !== agentId || e[25] !== c) {
        X = (u)=>{
            if (u == null || agentId == null) {
                return;
            }
            const p = (r)=>{
                r.key !== "Escape" || r.repeat || r.defaultPrevented || r.metaKey || r.ctrlKey || r.altKey || r.shiftKey || Nt(r.target) || (u.checkVisibility?.({
                    visibilityProperty: true
                }) ?? true) && (y() || (r.preventDefault(), r.stopPropagation(), c(er)));
            };
            window.addEventListener("keydown", p, {
                capture: true
            });
            return ()=>window.removeEventListener("keydown", p, {
                    capture: true
                });
        };
        e[24] = agentId;
        e[25] = c;
        e[26] = X;
    } else {
        X = e[26];
    }
    const Z = X;
    if (!V) {
        if (He(ask)) {
            const alwaysAllowed = ask.status === "always";
            let O;
            if (e[27] !== ask.target) {
                O = ep(ask.target);
                e[27] = ask.target;
                e[28] = O;
            } else {
                O = e[28];
            }
            let A;
            if (e[29] !== ask.recipientName) {
                A = ask.recipientName === undefined ? {} : {
                    recipientName: ask.recipientName
                };
                e[29] = ask.recipientName;
                e[30] = A;
            } else {
                A = e[30];
            }
            let E;
            if (e[31] !== appIconUrl || e[32] !== alwaysAllowed || e[33] !== O || e[34] !== A) {
                E = <FeComponent alwaysAllowed={alwaysAllowed} appIconUrl={appIconUrl} target={O} {...A}/>;
                e[31] = appIconUrl;
                e[32] = alwaysAllowed;
                e[33] = O;
                e[34] = A;
                e[35] = E;
            } else {
                E = e[35];
            }
            return E;
        }
        let u;
        if (e[36] !== __2 || e[37] !== ask) {
            u = Pt(__2, ask);
            e[36] = __2;
            e[37] = ask;
            e[38] = u;
        } else {
            u = e[38];
        }
        const p = u;
        let r;
        if (e[39] !== p) {
            r = <Ge isTruncating title={p}>{p}</Ge>;
            e[39] = p;
            e[40] = r;
        } else {
            r = e[40];
        }
        let M;
        if (e[41] !== ask || e[42] !== i18n || e[43] !== w) {
            M = Gt(ask, w) ? <Ge tone="tertiary">{i18n._(xt)}</Ge> : null;
            e[41] = ask;
            e[42] = i18n;
            e[43] = w;
            e[44] = M;
        } else {
            M = e[44];
        }
        let N;
        if (e[45] !== r || e[46] !== M) {
            N = <Xe className="sand-local-tool-permission-outcome">{r}{M}</Xe>;
            e[45] = r;
            e[46] = M;
            e[47] = N;
        } else {
            N = e[47];
        }
        return N;
    }
    if (ask.action === "send-imessage") {
        let u;
        if (e[48] !== ask || e[49] !== h) {
            u = Ct(ask, h);
            e[48] = ask;
            e[49] = h;
            e[50] = u;
        } else {
            u = e[50];
        }
        const origin = u;
        const r = ask.standingGrant;
        const grantRecipient = r?.kind === "offered" ? ask.recipientName ?? r.recipient : undefined;
        let N;
        if (e[51] !== L || e[52] !== recordApprovalLocally || e[53] !== origin) {
            N = !recordApprovalLocally && L !== undefined && origin.kind === "machine" ? {
                tooltip: origin.label
            } : {};
            e[51] = L;
            e[52] = recordApprovalLocally;
            e[53] = origin;
            e[54] = N;
        } else {
            N = e[54];
        }
        const C = N;
        let O;
        if (e[55] !== __2 || e[56] !== r) {
            O = r?.kind === "unavailable" ? Lt(__2, r.reason) : undefined;
            e[55] = __2;
            e[56] = r;
            e[57] = O;
        } else {
            O = e[57];
        }
        const policyNote = O;
        let E;
        if (e[58] !== ask.target) {
            E = ep(ask.target);
            e[58] = ask.target;
            e[59] = E;
        } else {
            E = e[59];
        }
        let B;
        if (e[60] !== ask.recipientName) {
            B = ask.recipientName === undefined ? {} : {
                recipientName: ask.recipientName
            };
            e[60] = ask.recipientName;
            e[61] = B;
        } else {
            B = e[61];
        }
        let ae;
        if (e[62] !== c) {
            ae = ()=>c("allow-once");
            e[62] = c;
            e[63] = ae;
        } else {
            ae = e[63];
        }
        const le = !q;
        let send;
        if (e[64] !== C || e[65] !== ae || e[66] !== le) {
            send = {
                onClick: ae,
                disabled: le,
                ...C
            };
            e[64] = C;
            e[65] = ae;
            e[66] = le;
            e[67] = send;
        } else {
            send = e[67];
        }
        let K;
        if (e[68] !== __1 || e[69] !== j || e[70] !== grantRecipient || e[71] !== recordApprovalLocally || e[72] !== _ || e[73] !== C || e[74] !== c) {
            K = grantRecipient === undefined ? {} : {
                alwaysAllow: {
                    label: __1({
                        id: "iPJV+y",
                        values: {
                            grantRecipient
                        }
                    }),
                    onClick: ()=>c("always"),
                    disabled: !j || _ === undefined || !recordApprovalLocally,
                    ...C
                }
            };
            e[68] = __1;
            e[69] = j;
            e[70] = grantRecipient;
            e[71] = recordApprovalLocally;
            e[72] = _;
            e[73] = C;
            e[74] = c;
            e[75] = K;
        } else {
            K = e[75];
        }
        let U;
        if (e[76] !== c) {
            U = ()=>c(er);
            e[76] = c;
            e[77] = U;
        } else {
            U = e[77];
        }
        const he = !P;
        let dontSend;
        if (e[78] !== U || e[79] !== he) {
            dontSend = {
                onClick: U,
                disabled: he
            };
            e[78] = U;
            e[79] = he;
            e[80] = dontSend;
        } else {
            dontSend = e[80];
        }
        let $;
        if (e[81] !== policyNote) {
            $ = policyNote === undefined ? {} : {
                policyNote
            };
            e[81] = policyNote;
            e[82] = $;
        } else {
            $ = e[82];
        }
        let failureNote;
        if (e[83] !== i18n || e[84] !== w.kind) {
            failureNote = w.kind === "failed" ? i18n._(Be) : undefined;
            e[83] = i18n;
            e[84] = w.kind;
            e[85] = failureNote;
        } else {
            failureNote = e[85];
        }
        const oe = b ? Z : undefined;
        let te;
        if (e[86] !== entryId || e[87] !== appIconUrl || e[88] !== origin || e[89] !== E || e[90] !== B || e[91] !== send || e[92] !== K || e[93] !== dontSend || e[94] !== $ || e[95] !== failureNote || e[96] !== oe) {
            te = <EComponent appIconUrl={appIconUrl} entryId={entryId} target={E} {...B} origin={origin} send={send} {...K} dontSend={dontSend} {...$} failureNote={failureNote} rootRef={oe}/>;
            e[86] = entryId;
            e[87] = appIconUrl;
            e[88] = origin;
            e[89] = E;
            e[90] = B;
            e[91] = send;
            e[92] = K;
            e[93] = dontSend;
            e[94] = $;
            e[95] = failureNote;
            e[96] = oe;
            e[97] = te;
        } else {
            te = e[97];
        }
        return te;
    }
    let disclosure;
    let D;
    if (e[98] !== __2 || e[99] !== ask) {
        const u = eq(ask);
        disclosure = _t(__2, ask.action, u);
        D = Mt(__2, {
            action: ask.action,
            target: u
        });
        e[98] = __2;
        e[99] = ask;
        e[100] = disclosure;
        e[101] = D;
    } else {
        disclosure = e[100];
        D = e[101];
    }
    const ee = D;
    let be;
    let Se;
    let de;
    let ce;
    let fe;
    let ue;
    let pe;
    let entryId_1;
    let hideBadge;
    let me;
    let Te;
    let ge;
    let ye;
    if (e[102] !== __1 || e[103] !== x || e[104] !== ask.action || e[105] !== j || e[106] !== q || e[107] !== P || e[108] !== L || e[109] !== disclosure || e[110] !== entryId || e[111] !== i18n || e[112] !== recordApprovalLocally || e[113] !== c || e[114] !== w.kind || e[115] !== ee || e[116] !== h) {
        const u = Ot(ask.action);
        let p;
        if (e[130] !== __1) {
            p = __1({
                id: "NoKBgy"
            });
            e[130] = __1;
            e[131] = p;
        } else {
            p = e[131];
        }
        let r;
        if (e[132] !== c) {
            r = ()=>c("always");
            e[132] = c;
            e[133] = r;
        } else {
            r = e[133];
        }
        const M = !j || x === "pending-team-policy";
        let N;
        if (e[134] !== __1 || e[135] !== x) {
            N = x === "pending-team-policy" ? {
                tooltip: __1({
                    id: "31dM0K"
                })
            } : {};
            e[134] = __1;
            e[135] = x;
            e[136] = N;
        } else {
            N = e[136];
        }
        let C;
        if (e[137] !== p || e[138] !== r || e[139] !== M || e[140] !== N) {
            C = {
                label: p,
                onClick: r,
                disabled: M,
                ...N,
                variant: "primary"
            };
            e[137] = p;
            e[138] = r;
            e[139] = M;
            e[140] = N;
            e[141] = C;
        } else {
            C = e[141];
        }
        const O = C;
        be = Ze1;
        let A;
        if (e[142] !== O || e[143] !== x) {
            A = x === "forbidden-by-team" ? [] : [
                O
            ];
            e[142] = O;
            e[143] = x;
            e[144] = A;
        } else {
            A = e[144];
        }
        let E;
        if (e[145] !== __1) {
            E = __1({
                id: "pFfO26"
            });
            e[145] = __1;
            e[146] = E;
        } else {
            E = e[146];
        }
        let B;
        if (e[147] !== c) {
            B = ()=>c("allow-once");
            e[147] = c;
            e[148] = B;
        } else {
            B = e[148];
        }
        const ae = !q;
        let le;
        if (e[149] !== L || e[150] !== recordApprovalLocally || e[151] !== h) {
            le = !recordApprovalLocally && L !== undefined && h !== undefined ? {
                tooltip: h
            } : {};
            e[149] = L;
            e[150] = recordApprovalLocally;
            e[151] = h;
            e[152] = le;
        } else {
            le = e[152];
        }
        let z;
        if (e[153] !== E || e[154] !== B || e[155] !== ae || e[156] !== le) {
            z = {
                label: E,
                onClick: B,
                disabled: ae,
                ...le
            };
            e[153] = E;
            e[154] = B;
            e[155] = ae;
            e[156] = le;
            e[157] = z;
        } else {
            z = e[157];
        }
        let K;
        if (e[158] !== __1) {
            K = __1({
                id: "qqeAJM"
            });
            e[158] = __1;
            e[159] = K;
        } else {
            K = e[159];
        }
        let U;
        if (e[160] !== c) {
            U = ()=>c("never");
            e[160] = c;
            e[161] = U;
        } else {
            U = e[161];
        }
        const he = !j;
        let F;
        if (e[162] !== recordApprovalLocally || e[163] !== h) {
            F = !recordApprovalLocally && h !== undefined ? {
                tooltip: h
            } : {};
            e[162] = recordApprovalLocally;
            e[163] = h;
            e[164] = F;
        } else {
            F = e[164];
        }
        let $;
        if (e[165] !== K || e[166] !== U || e[167] !== he || e[168] !== F) {
            $ = {
                label: K,
                onClick: U,
                disabled: he,
                ...F
            };
            e[165] = K;
            e[166] = U;
            e[167] = he;
            e[168] = F;
            e[169] = $;
        } else {
            $ = e[169];
        }
        if (e[170] !== A || e[171] !== z || e[172] !== $) {
            ge = [
                ...A,
                z,
                $
            ];
            e[170] = A;
            e[171] = z;
            e[172] = $;
            e[173] = ge;
        } else {
            ge = e[173];
        }
        if (e[174] !== __1) {
            ye = __1({
                id: "qM5wI6"
            });
            e[174] = __1;
            e[175] = ye;
        } else {
            ye = e[175];
        }
        Se = i18n._(u.description);
        if (e[176] !== h) {
            de = h === undefined ? {} : {
                location: h
            };
            e[176] = h;
            e[177] = de;
        } else {
            de = e[177];
        }
        if (e[178] !== ee) {
            ce = ee === undefined ? {} : {
                summary: ee
            };
            e[178] = ee;
            e[179] = ce;
        } else {
            ce = e[179];
        }
        if (e[180] !== disclosure) {
            fe = disclosure === undefined ? {} : {
                disclosure
            };
            e[180] = disclosure;
            e[181] = fe;
        } else {
            fe = e[181];
        }
        if (e[182] !== i18n || e[183] !== w.kind) {
            ue = w.kind === "failed" ? {
                failureNote: i18n._(Be)
            } : {};
            e[182] = i18n;
            e[183] = w.kind;
            e[184] = ue;
        } else {
            ue = e[184];
        }
        let H;
        if (e[185] !== i18n) {
            H = i18n._(It);
            e[185] = i18n;
            e[186] = H;
        } else {
            H = e[186];
        }
        let oe;
        if (e[187] !== i18n) {
            oe = i18n._(Tt);
            e[187] = i18n;
            e[188] = oe;
        } else {
            oe = e[188];
        }
        let te;
        if (e[189] !== c) {
            te = ()=>c(er);
            e[189] = c;
            e[190] = te;
        } else {
            te = e[190];
        }
        const _e = !P;
        if (e[191] !== H || e[192] !== oe || e[193] !== te || e[194] !== _e) {
            pe = {
                label: H,
                tooltip: oe,
                onClick: te,
                disabled: _e
            };
            e[191] = H;
            e[192] = oe;
            e[193] = te;
            e[194] = _e;
            e[195] = pe;
        } else {
            pe = e[195];
        }
        entryId_1 = entryId;
        hideBadge = true;
        if (e[196] === Symbol.for("react.memo_cache_sentinel")) {
            me = <W_1 aria-hidden color="orange" name="exclamation-triangle" size="base"/>;
            e[196] = me;
        } else {
            me = e[196];
        }
        Te = i18n._(u.title);
        e[102] = __1;
        e[103] = x;
        e[104] = ask.action;
        e[105] = j;
        e[106] = q;
        e[107] = P;
        e[108] = L;
        e[109] = disclosure;
        e[110] = entryId;
        e[111] = i18n;
        e[112] = recordApprovalLocally;
        e[113] = c;
        e[114] = w.kind;
        e[115] = ee;
        e[116] = h;
        e[117] = be;
        e[118] = Se;
        e[119] = de;
        e[120] = ce;
        e[121] = fe;
        e[122] = ue;
        e[123] = pe;
        e[124] = entryId_1;
        e[125] = hideBadge;
        e[126] = me;
        e[127] = Te;
        e[128] = ge;
        e[129] = ye;
    } else {
        be = e[117];
        Se = e[118];
        de = e[119];
        ce = e[120];
        fe = e[121];
        ue = e[122];
        pe = e[123];
        entryId_1 = e[124];
        hideBadge = e[125];
        me = e[126];
        Te = e[127];
        ge = e[128];
        ye = e[129];
    }
    let xe;
    if (e[197] !== Z || e[198] !== b) {
        xe = b ? {
            rootRef: Z
        } : {};
        e[197] = Z;
        e[198] = b;
        e[199] = xe;
    } else {
        xe = e[199];
    }
    let Ee;
    if (e[200] !== be || e[201] !== Se || e[202] !== de || e[203] !== ce || e[204] !== fe || e[205] !== ue || e[206] !== pe || e[207] !== entryId_1 || e[208] !== hideBadge || e[209] !== me || e[210] !== Te || e[211] !== xe || e[212] !== ge || e[213] !== ye) {
        Ee = j_1.jsx(be, {
            actions: ge,
            ariaLabel: ye,
            description: Se,
            ...de,
            ...ce,
            ...fe,
            ...ue,
            dismiss: pe,
            entryId: entryId_1,
            hideBadge,
            leading: me,
            title: Te,
            ...xe
        });
        e[200] = be;
        e[201] = Se;
        e[202] = de;
        e[203] = ce;
        e[204] = fe;
        e[205] = ue;
        e[206] = pe;
        e[207] = entryId_1;
        e[208] = hideBadge;
        e[209] = me;
        e[210] = Te;
        e[211] = xe;
        e[212] = ge;
        e[213] = ye;
        e[214] = Ee;
    } else {
        Ee = e[214];
    }
    return Ee;
}
function Rt(i) {
    return i.isCurrent;
}
function DtComponent(i) {
    DtComponent.d = 320;
    const e = c_1.c(19);
    const { entry, adjacency, isKeyboardTarget } = i;
    const I = an();
    const { isReadOnly } = ah();
    const { ask } = entry.message;
    const o = ask.status === "pending";
    if (o || He(ask)) {
        const variant = o ? "widget" : "question";
        const S = isReadOnly ? undefined : I ?? undefined;
        let a;
        if (e[0] !== isKeyboardTarget) {
            a = isKeyboardTarget === undefined ? {} : {
                isEscapeTarget: isKeyboardTarget
            };
            e[0] = isKeyboardTarget;
            e[1] = a;
        } else {
            a = e[1];
        }
        let g;
        if (e[2] !== ask || e[3] !== entry.id || e[4] !== S || e[5] !== a) {
            g = <CeComponent agentId={S} ask={ask} entryId={entry.id} {...a}/>;
            e[2] = ask;
            e[3] = entry.id;
            e[4] = S;
            e[5] = a;
            e[6] = g;
        } else {
            g = e[6];
        }
        let f;
        if (e[7] !== adjacency.isGroupStart || e[8] !== entry.timestampMs || e[9] !== variant || e[10] !== g) {
            f = <Tt1 isGroupStart={adjacency.isGroupStart} timestampMs={entry.timestampMs} variant={variant}>{g}</Tt1>;
            e[7] = adjacency.isGroupStart;
            e[8] = entry.timestampMs;
            e[9] = variant;
            e[10] = g;
            e[11] = f;
        } else {
            f = e[11];
        }
        let k;
        if (e[12] !== entry || e[13] !== f) {
            k = <It1 entry={entry}>{f}</It1>;
            e[12] = entry;
            e[13] = f;
            e[14] = k;
        } else {
            k = e[14];
        }
        return k;
    }
    const m = isReadOnly ? undefined : I ?? undefined;
    let v;
    if (e[15] !== ask || e[16] !== entry.id || e[17] !== m) {
        v = <CeComponent agentId={m} ask={ask} entryId={entry.id}/>;
        e[15] = ask;
        e[16] = entry.id;
        e[17] = m;
        e[18] = v;
    } else {
        v = e[18];
    }
    return v;
}
export { DtComponent as default };
