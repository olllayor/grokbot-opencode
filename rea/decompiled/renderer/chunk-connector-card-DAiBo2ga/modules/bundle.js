import { c as c_1, u as u_1, r as r_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { i } from "./index.eager-platform-Dcfeegfw.js";
import { bd, bl, b7, cs, e3, c$, e4, e5, e6, e7, bA, be, bf, b9, e8, e9, ea, eb, ec, ed, ee as ee_1, ef, eg, eh, ei, ej, ek as pollIntervalMs, el } from "./index.eager-app-Cj5f8Gby.js";
import { i as i_1 } from "./chunk-finance-CSw6gjXN.js";
import { ak } from "./index-ZYxf-aBb.js";
import { r as r_2, i as i_2, n, c as c_2, f as f_1, a, C as C_1, b, e as e_1 } from "./chunk-connector-card-view-fPUuNO3n.js";
import { a as a_1 } from "./chunk-mcp-connector-status-DhhAF8A6.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "7a83a076-873c-456b-8c78-e9cfcaccf986";
            e._sentryDebugIdIdentifier = "sentry-dbid-7a83a076-873c-456b-8c78-e9cfcaccf986";
        }
    } catch (e) {}
})();
const wt = {
    kind: "account"
};
function Rt(t) {
    if (t?.harness === "temporal" && t.visibility === "team") {
        return {
            kind: "grok-bot-team",
            agentId: t.id
        };
    }
    return wt;
}
function Lt(t, e) {
    if (e.length === 0) {
        return t;
    }
    const s = new Set(t.map((c)=>c.serverIdentifier));
    return [
        ...t,
        ...e.filter((c)=>!s.has(c.serverIdentifier))
    ];
}
class E extends Error {
    constructor(e, s = null){
        super(e);
        this.detail = s;
    }
    detail;
}
function ln(t) {
    if (t?.status === "waiting" || t?.status === "openFailed") {
        return t.status;
    }
    return "stalled";
}
function Nt(t, e) {
    switch(e){
        case "authorize":
            return t({
                id: "yIVrHZ"
            });
        case "manage":
            return t({
                id: "wckWOP"
            });
        case "install":
        case "browse":
            return t({
                id: "m16xKo"
            });
    }
}
const fn = {
    kind: "idle"
};
function rn(t) {
    return t.servedBy === "grok" && i_1(t);
}
function Dt(t) {
    if (!(t.status === "started" || t.status === "already-authenticated")) {
        throw new E(t.status, t.status === "not-configured" ? null : ej(t));
    }
}
async function Et(t, target, wnRef, setR) {
    if (!wnRef.current) {
        wnRef.current = true;
        setR({
            kind: "running",
            target
        });
        try {
            await t();
            setR(fn);
        } catch (error) {
            setR({
                kind: "failed",
                target,
                detail: error instanceof E ? error.detail : null
            });
        } finally{
            wnRef.current = false;
        }
    }
}
async function Ft(start) {
    try {
        const cause = await start();
        if (cause.status === "started") {
            return {
                kind: "started"
            };
        }
        return {
            kind: "failed",
            cause
        };
    } catch (cause) {
        return {
            kind: "failed",
            cause
        };
    }
}
function Mn1Component(t) {
    Mn1Component.d = 883;
    const e = c_1.c(49);
    const { connector, serverId, variant, reason, suggestions } = t;
    const { _: __1 } = u_1();
    const { i18n } = u_1();
    const F = bd();
    const de = bl();
    let O;
    if (e[0] !== de) {
        O = Rt(de);
        e[0] = de;
        e[1] = O;
    } else {
        O = e[1];
    }
    const G = O;
    const fe = G.kind === "grok-bot-team" ? G.agentId : null;
    const { mcp } = b7();
    let $;
    if (e[2] !== mcp) {
        $ = ()=>mcp.retainServers({
                pollIntervalMs
            });
        e[2] = mcp;
        e[3] = $;
    } else {
        $ = e[3];
    }
    i($);
    const { state, refetch } = cs();
    const Ye = e3(fe);
    const { catalog, isLoading } = c$();
    const { install, isPending } = e4();
    const { authenticate, isPending: isPending_1 } = e5();
    const { remove } = e6();
    const M = e7();
    const openExternal = bA();
    const confirm = ak();
    const g = be();
    const ye = bf();
    const In = b9("mcp_multi_account");
    const { start, isPending: isPending_2 } = e8();
    const [Sn, setSn] = r_1.useState(null);
    const [V, setV] = r_1.useState(null);
    const wnRef = r_1.useRef(false);
    const [r, setR] = r_1.useState(fn);
    const Y = r.kind === "running" ? r.target : null;
    let Z;
    if (e[4] !== r.detail || e[5] !== r.kind || e[6] !== r.target) {
        Z = r.kind === "failed" && r.target != null ? {
            accountKey: r.target.accountKey,
            detail: r.detail
        } : null;
        e[4] = r.detail;
        e[5] = r.kind;
        e[6] = r.target;
        e[7] = Z;
    } else {
        Z = e[7];
    }
    const authorizeFailure = Z;
    const ke = Lt(state?.servers ?? [], Ye.state?.servers ?? []);
    let Ce;
    e: {
        if (serverId != null) {
            const n = r_2(ke, serverId);
            if (n.kind !== "missing") {
                Ce = n;
                break e;
            }
        }
        Ce = r_2(ke, connector);
    }
    const y = Ce;
    let U;
    e: {
        if (y.kind === "resolved") {
            U = [
                y.target
            ];
            break e;
        }
        if (y.kind !== "ambiguous") {
            U = undefined;
            break e;
        }
        if (i_2(y.targets)) {
            U = y.targets;
            break e;
        }
        U = n(y.targets);
    }
    const d = U;
    const q = d != null && d.length === 1 ? d[0] : undefined;
    const u = y.kind === "ambiguous" && d == null ? y : undefined;
    const f = d != null && d.length > 1 ? d : undefined;
    let J;
    e: {
        if (u == null) {
            J = undefined;
            break e;
        }
        if (u.preferredTarget.status !== "disabledByTeamAdminPolicy") {
            J = u.preferredTarget;
            break e;
        }
        J = u.targets.find(Pt) ?? u.preferredTarget;
    }
    const he = J;
    const C = q ?? (g == null ? he : undefined);
    const m = q ?? he ?? f?.[0];
    const Je = (n, o)=>{
        if (o === n.accountKey) {
            return n.serverIdentifier;
        }
        const i = d?.find((z)=>z.accountKey === o);
        if (i != null) {
            return i.serverIdentifier;
        }
        const a = n.accountKey === ee_1 ? n.serverIdentifier : d?.find(zt)?.serverIdentifier ?? n.serverIdentifier;
        return ef(a, o);
    };
    const [Ln, setLn] = r_1.useState(null);
    const ve = (f != null ? Ln : null) ?? C?.serverIdentifier ?? m?.serverIdentifier ?? connector;
    const Ae = e9();
    let Q;
    if (e[8] !== Ae) {
        Q = (n)=>Ae.get(ea(n));
        e[8] = Ae;
        e[9] = Q;
    } else {
        Q = e[9];
    }
    const Qe = Q;
    const v = f != null && f.some((n)=>ea(n.serverIdentifier) === ea(ve)) ? undefined : Qe(ve);
    const X = xt;
    const I = Bt;
    let _;
    if (e[10] !== M) {
        _ = (n)=>M.some((o)=>o.outcome !== "cancelled" && I(o, n));
        e[10] = M;
        e[11] = _;
    } else {
        _ = e[11];
    }
    const ee = _;
    const Dn = M.some((n)=>{
        if (n.outcome === "cancelled") {
            return false;
        }
        const o = u != null && u.targets.some((a)=>I(n, a)) && u.targets.every((a)=>I(n, a) || X(a));
        const i = f != null && f.some((a)=>I(n, a)) && f.every((a)=>I(n, a) || X(a) || ee(a));
        return C != null && I(n, C) || o || i || y.kind === "missing" && c_2(n.serverName, connector);
    });
    const En = M.some((n)=>n.outcome === "cancelled" && y.kind === "missing" && c_2(n.serverName, connector));
    const Xe = serverId != null && m != null ? m.name : connector;
    const h = f_1(catalog, Xe);
    const isTeam = m?.isTeamServer === true;
    const S = h?.displayName ?? m?.name ?? connector;
    const Fn = F.buildServerIconResolver(catalog);
    const icon = h != null ? F.resolveCatalogEntryIcon(h) : Fn(S, m?.url) ?? {};
    const Kn = isPending || isPending_1 || isPending_2;
    const Mn = y.kind === "missing" && (fe != null && Ye.isLoading || h == null && isLoading);
    const isActionPending = Kn || Mn;
    const ne = async (n, accountKey)=>{
        eg({
            serverName: n.name,
            serverId: n.id
        });
        if (rn(n)) {
            const N = await start({
                repairLinkedBank: true
            });
            refetch();
            Dt(N);
            return;
        }
        const i = accountKey ?? n.accountKey;
        const a = await authenticate(n.id, i, "connector_card", fe ?? undefined);
        if (a.status === "started") {
            const connector_1 = Je(n, i);
            const D = await eh({
                connector: connector_1,
                displayName: ei(S, i),
                authorizationUrl: a.authorizationUrl,
                ...a.portConflictDetail == null ? {} : {
                    portConflictDetail: a.portConflictDetail
                },
                consent: {
                    connectorName: S,
                    icon
                }
            }, {
                openExternal,
                confirm
            });
            if (D === "opened" && f != null) {
                setLn(connector_1);
            }
            const jn = accountKey != null && accountKey !== ee_1 && d?.some(($e)=>$e.accountKey === accountKey) !== true;
            if (D === "declined" && jn) {
                await remove({
                    serverId: n.id,
                    accountKey
                }).catch(($e)=>{
                    refetch();
                    throw $e;
                });
            }
            return;
        }
        if (a.status === "already-authenticated") {
            refetch();
            return;
        }
        refetch();
        const z = a.status === "not-configured" ? null : ej(a);
        throw new E(a.status, z);
    };
    const Un = async (n)=>{
        if (g != null && e_1(n)) {
            g({
                kind: "mcp-install",
                name: n.displayName
            }, n.displayName);
            return;
        }
        const i = (await install({
            entryId: n.id,
            values: {}
        })).servers.find((a)=>c_2(a.name, n.displayName) || c_2(a.name, n.name));
        if (i?.status === "needsAuth") {
            await ne(i);
        }
    };
    const we = (n, o)=>Et(n, o === undefined ? null : o, wnRef, setR);
    let te;
    if (e[12] !== ye) {
        te = ()=>{
            ye?.();
        };
        e[12] = ye;
        e[13] = te;
    } else {
        te = e[13];
    }
    const onBrowseMore = te;
    const onReopen = ()=>{
        ec(ve, openExternal, onRetry);
    };
    const Tn = q?.status === "connected" || g == null && C?.status === "connected" || u != null && u.targets.every(X) && u.targets.some(Tt) || f != null && f.every((n)=>X(n) || ee(n)) && f.some((n)=>n.status === "connected" || ee(n));
    const isAdminDisabled = q?.status === "disabledByTeamAdminPolicy" || (u?.targets.every(Ut) ?? false);
    const ae = !isAdminDisabled && (variant === "connected" || Tn || Dn);
    const en = g != null && u != null;
    const Bn = C != null;
    let w;
    e: {
        if (en) {
            w = "manage";
            break e;
        }
        if (Bn) {
            w = "authorize";
            break e;
        }
        if (G.kind === "grok-bot-team") {
            w = "authorize";
            break e;
        }
        if (h == null) {
            w = "browse";
            break e;
        }
        w = "install";
    }
    const Le = w;
    let B;
    e: {
        if (V == null) {
            B = null;
            break e;
        }
        const slot = C ?? d?.find(Mt) ?? d?.[0];
        if (slot == null) {
            B = null;
            break e;
        }
        const label = eb(V);
        if (label.length === 0) {
            B = null;
            break e;
        }
        B = {
            slot,
            label,
            key: Je(slot, label)
        };
    }
    const nn = B;
    const onSubmit = ()=>{
        if (nn == null) {
            return;
        }
        const { slot, label, key } = nn;
        we(async ()=>{
            await ne(slot, label);
            setV(null);
        }, {
            accountKey: key,
            fromLabelRow: true
        });
    };
    const onRetry = ()=>{
        we(()=>{
            if (en) {
                const n = he;
                if (n == null) {
                    throw new E("Ambiguous connector is unavailable");
                }
                g?.({
                    kind: "mcp-server",
                    serverId: n.id
                }, n.name);
                return;
            }
            if (C != null) {
                return ne(C);
            }
            if (G.kind === "grok-bot-team") {
                refetch();
                throw new E(`No marketplace row to authorize for ${connector}`);
            }
            if (h != null) {
                return Un(h);
            }
            if (g != null) {
                g({
                    kind: "mcp-install",
                    name: connector
                }, connector);
                return;
            }
            throw new E(`No connector available to add for ${connector}`);
        });
    };
    const zn = new Set(ke.map(Kt));
    const Pn = a(catalog, zn, Xe, suggestions ?? []);
    let ie;
    if (e[14] !== reason) {
        ie = reason?.trim();
        e[14] = reason;
        e[15] = ie;
    } else {
        ie = e[15];
    }
    const Ne = ie;
    const description = Ne != null && Ne.length > 0 ? Ne : h?.description;
    const accountFooter = f?.map((n)=>{
        const o = n.status === "connected" || ee(n);
        const i = o ? undefined : Qe(n.serverIdentifier);
        const status = ln(i);
        const z = i?.failureDetail == null ? {} : {
            failureDetail: i.failureDetail
        };
        const N = i?.portConflictDetail == null ? {} : {
            portConflictDetail: i.portConflictDetail
        };
        const D = ()=>{
            we(()=>ne(n), {
                accountKey: n.serverIdentifier,
                fromLabelRow: false
            });
        };
        return {
            key: n.serverIdentifier,
            label: n.accountKey === ee_1 ? i18n._({
                id: "Bn9+El"
            }) : ed(n.accountKey),
            isConnected: o,
            statusLabel: a_1(__1, n.status),
            onAuthorize: D,
            ...i == null ? {} : {
                handoff: {
                    status,
                    ...z,
                    ...N,
                    onReopen: ()=>ec(n.serverIdentifier, openExternal, D),
                    onRetry: D
                }
            }
        };
    });
    const Ee = In && accountFooter != null && m != null && m.url != null && !m.isTeamServer;
    const Hn = m != null && rn(m);
    let le;
    if (e[16] !== start) {
        le = async ()=>{
            setSn(null);
            setSn(await Ft(start));
        };
        e[16] = start;
        e[17] = le;
    } else {
        le = e[17];
    }
    const On = le;
    const Gn = v?.failureDetail == null ? {} : {
        failureDetail: v.failureDetail
    };
    const $n = v?.portConflictDetail == null ? {} : {
        portConflictDetail: v.portConflictDetail
    };
    const failureDetail = r.kind === "failed" && r.target == null ? r.detail : null;
    let x;
    e: {
        if (ae) {
            x = null;
            break e;
        }
        if (failureDetail != null) {
            x = {
                status: "stalled",
                failureDetail,
                onReopen,
                onRetry
            };
            break e;
        }
        if (En || v == null) {
            x = null;
            break e;
        }
        x = {
            status: ln(v),
            ...Gn,
            ...$n,
            signInUrl: v.authorizationUrl,
            onReopen,
            onRetry
        };
    }
    const handoff = x;
    const Ke = C_1;
    const Me = accountFooter == null ? {} : {
        accountFooter
    };
    const Ue = Hn ? {
        addBank: {
            isBusy: isPending_2,
            hasFailed: Sn?.kind === "failed",
            onAdd: ()=>{
                On();
            }
        }
    } : {};
    let R;
    if (e[18] !== __1 || e[19] !== r.kind || e[20] !== Le) {
        R = r.kind === "failed" ? __1({
            id: "6gRgw8"
        }) : Nt(__1, Le);
        e[18] = __1;
        e[19] = r.kind;
        e[20] = Le;
        e[21] = R;
    } else {
        R = e[21];
    }
    const Te = description == null ? {} : {
        description
    };
    const Be = icon.iconId == null ? {} : {
        iconId: icon.iconId
    };
    const xe = icon.iconUrl == null ? {} : {
        iconUrl: icon.iconUrl
    };
    const labelInput = V == null ? null : {
        value: V,
        isBusy: Y?.fromLabelRow === true,
        isDisabled: Y != null && !Y.fromLabelRow,
        onChange: setV,
        onSubmit,
        onCancel: ()=>setV(null)
    };
    const onAction = onRetry;
    let L;
    if (e[22] !== Ee) {
        L = Ee ? {
            onAddAccount: ()=>setV("")
        } : {};
        e[22] = Ee;
        e[23] = L;
    } else {
        L = e[23];
    }
    const pendingAccountKey = Y?.accountKey ?? null;
    let re;
    if (e[24] !== F || e[25] !== g) {
        re = (n)=>{
            const o = F.resolveCatalogEntryIcon(n);
            return {
                key: n.id,
                displayName: n.displayName,
                ...o.iconId == null ? {} : {
                    iconId: o.iconId
                },
                ...o.iconUrl == null ? {} : {
                    iconUrl: o.iconUrl
                },
                onOpen: ()=>g?.({
                        kind: "mcp-install",
                        name: n.displayName
                    }, n.displayName)
            };
        };
        e[24] = F;
        e[25] = g;
        e[26] = re;
    } else {
        re = e[26];
    }
    const suggestions_1 = Pn.map(re);
    const toolCount = m?.toolCount ?? 0;
    let ce;
    if (e[27] !== Ke || e[28] !== authorizeFailure || e[29] !== handoff || e[30] !== S || e[31] !== onBrowseMore || e[32] !== isActionPending || e[33] !== isAdminDisabled || e[34] !== ae || e[35] !== isTeam || e[36] !== Me || e[37] !== Ue || e[38] !== R || e[39] !== Te || e[40] !== Be || e[41] !== xe || e[42] !== labelInput || e[43] !== onAction || e[44] !== L || e[45] !== pendingAccountKey || e[46] !== suggestions_1 || e[47] !== toolCount) {
        ce = <Ke {...Me} {...Ue} actionLabel={R} authorizeFailure={authorizeFailure} {...Te} displayName={S} handoff={handoff} {...Be} {...xe} isActionPending={isActionPending} isAdminDisabled={isAdminDisabled} isConnected={ae} isTeam={isTeam} labelInput={labelInput} onAction={onAction} {...L} onBrowseMore={onBrowseMore} pendingAccountKey={pendingAccountKey} suggestions={suggestions_1} toolCount={toolCount}/>;
        e[27] = Ke;
        e[28] = authorizeFailure;
        e[29] = handoff;
        e[30] = S;
        e[31] = onBrowseMore;
        e[32] = isActionPending;
        e[33] = isAdminDisabled;
        e[34] = ae;
        e[35] = isTeam;
        e[36] = Me;
        e[37] = Ue;
        e[38] = R;
        e[39] = Te;
        e[40] = Be;
        e[41] = xe;
        e[42] = labelInput;
        e[43] = onAction;
        e[44] = L;
        e[45] = pendingAccountKey;
        e[46] = suggestions_1;
        e[47] = toolCount;
        e[48] = ce;
    } else {
        ce = e[48];
    }
    return ce;
}
function Kt(t) {
    return b(t.name);
}
function Mt(t) {
    return t.accountKey === ee_1;
}
function Ut(t) {
    return t.status === "disabledByTeamAdminPolicy";
}
function Tt(t) {
    return t.status === "connected";
}
function Bt(t, e) {
    return t.serverId === e.id && t.accountKey === e.accountKey;
}
function xt(t) {
    return t.status === "connected" || t.status === "disabledByTeamAdminPolicy";
}
function zt(t) {
    return t.accountKey === ee_1;
}
function Pt(t) {
    return t.status !== "disabledByTeamAdminPolicy";
}
function A() {}
function HtComponent(t) {
    HtComponent.d = 888;
    const e = c_1.c(8);
    const { _ } = u_1();
    const c = el();
    let p;
    if (e[0] !== _ || e[1] !== t.connector || e[2] !== c) {
        p = Symbol.for("react.early_return_sentinel");
        e: {
            const l = c.get(t.connector);
            if (l != null) {
                let b;
                if (e[4] !== _) {
                    b = _({
                        id: "m16xKo"
                    });
                    e[4] = _;
                    e[5] = b;
                } else {
                    b = e[5];
                }
                p = <C_1 {...l.accountFooter == null ? {} : {
                    accountFooter: l.accountFooter.map(Gt)
                }} actionLabel={b} {...l.description == null ? {} : {
                    description: l.description
                }} displayName={l.displayName} handoff={l.oauth != null ? {
                    status: l.oauth,
                    onReopen: A,
                    onRetry: A
                } : null} {...l.iconId == null ? {} : {
                    iconId: l.iconId
                }} {...l.iconUrl == null ? {} : {
                    iconUrl: l.iconUrl
                }} isActionPending={false} isAdminDisabled={false} isConnected={l.isConnected} isTeam={false} onAction={A} {...l.canAddAccount === true ? {
                    onAddAccount: A
                } : {}} onBrowseMore={A} suggestions={(l.suggestions ?? []).map(Ot)} toolCount={l.toolCount ?? 0}/>;
                break e;
            }
        }
        e[0] = _;
        e[1] = t.connector;
        e[2] = c;
        e[3] = p;
    } else {
        p = e[3];
    }
    if (p !== Symbol.for("react.early_return_sentinel")) {
        return p;
    }
    let k;
    if (e[6] !== t) {
        k = <Mn1Component {...t}/>;
        e[6] = t;
        e[7] = k;
    } else {
        k = e[7];
    }
    return k;
}
function Ot(t) {
    return {
        key: t.displayName,
        displayName: t.displayName,
        ...t.iconId == null ? {} : {
            iconId: t.iconId
        },
        ...t.iconUrl == null ? {} : {
            iconUrl: t.iconUrl
        },
        onOpen: A
    };
}
function Gt(t) {
    return {
        key: t.label,
        label: t.label,
        isConnected: t.isConnected,
        statusLabel: t.statusLabel,
        onAuthorize: A
    };
}
export { HtComponent as C };
