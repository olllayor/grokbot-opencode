import { c as c_1, T, u as u_1, p as p_1, r as r_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { cq, a_, a$, h as W, cr, s as Se1 } from "./index.eager-app-Cj5f8Gby.js";
import { aY as Ae } from "./index.eager-platform-Dcfeegfw.js";
import { x as x_1, z as V, L, q as De, I, P as P_1 } from "./index-ZYxf-aBb.js";
import { T as T_2 } from "./chunk-team-setup-pills-7uDu4vf1.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "1571d660-520c-4036-a047-52b4ee1c2ba1";
            e._sentryDebugIdIdentifier = "sentry-dbid-1571d660-520c-4036-a047-52b4ee1c2ba1";
        }
    } catch (e) {}
})();
function qe(d, count) {
    if (d === "loading") {
        return {
            kind: "loading"
        };
    }
    if (d === "failed") {
        return {
            kind: "failed"
        };
    }
    if (count === 0) {
        return {
            kind: "empty"
        };
    }
    return {
        kind: "count",
        count
    };
}
function ze({ isPublished, isPublishable }) {
    if (isPublished) {
        return "published";
    }
    if (isPublishable === null) {
        return null;
    }
    if (isPublishable) {
        return "ready";
    }
    return "not_ready";
}
function ce(step) {
    switch(step.kind){
        case "installing":
            return "connecting";
        case "updating":
            return "updating";
        case "disconnecting":
            return "removing";
        case "pending_admin_approval":
        case "pending_reinstall_approval":
            if (step.approvalRequestFiled) {
                return "pending";
            }
            return "request_unsent";
        case "approval_denied":
            return "declined";
        case "connected":
            if (step.needsManifestUpdate === true) {
                return "needs_update";
            }
            return "connected";
        case "removed_in_slack":
            return "removed";
        case "recreate_required":
            return "failed";
        case "connection_lost":
        case "workspace_mismatch":
            return "reconnect";
        case "loading":
        case "unavailable":
        case "not_connected":
        case "ready":
        case "choose_workspace":
        case "awaiting_workspace":
        case "reconnect_required":
        case "cursor_approval_required":
        case "connect_failed":
        case "blocked":
        case "failed":
            return null;
    }
}
function oe(step) {
    switch(step.kind){
        case "awaiting_workspace":
            if (step.intent.kind === "install") {
                return "connecting";
            }
            return null;
        case "reconnect_required":
            if (step.intent.kind === "install") {
                return "reconnect";
            }
            return null;
        case "cursor_approval_required":
            if (step.intent.kind === "install") {
                return "failed";
            }
            return null;
        case "connect_failed":
            if (step.intent.kind === "install" && step.failure !== "cancelled") {
                return "failed";
            }
            return null;
        case "blocked":
        case "failed":
            if (step.retry.kind === "install_app" || step.retry.kind === "move_app") {
                return "failed";
            }
            return null;
        case "loading":
        case "unavailable":
        case "not_connected":
        case "ready":
        case "choose_workspace":
        case "installing":
        case "pending_admin_approval":
        case "pending_reinstall_approval":
        case "approval_denied":
        case "connected":
        case "updating":
        case "disconnecting":
        case "recreate_required":
        case "connection_lost":
        case "workspace_mismatch":
        case "removed_in_slack":
            return null;
    }
}
function re(serverStatus) {
    return serverStatus === "connected" || serverStatus === "needs_update";
}
function Se({ serverStatus, isPublished, isAutoUpdating, step }) {
    if (!isPublished) {
        return "not_published";
    }
    if (isAutoUpdating) {
        return "updating";
    }
    if (step == null) {
        return serverStatus;
    }
    const a = re(serverStatus) ? null : oe(step);
    return ce(step) ?? a ?? serverStatus;
}
function ue(d) {
    return d === "connecting" || d === "updating" || d === "removing";
}
const size = 24;
const x = {
    slackTitle: {
        kogj98: "sand-1ghz6dp",
        kMwMTN: "sand-tyxrsu",
        $$css: true
    },
    slackText: {
        kogj98: "sand-1ghz6dp",
        kMwMTN: "sand-1o0liin",
        $$css: true
    },
    slackChevron: {
        kmuXW: "sand-2lah0s",
        kMwMTN: "sand-1o0liin",
        $$css: true
    },
    detailsRow: {
        kAzted: "sand-3sc9yq",
        kZKoxP: "sand-t7dq6l",
        kLKAdn: "sand-889kno",
        kwRFfy: "sand-2vl965",
        kGO01o: "sand-1a8lsjc",
        kZCmMZ: "sand-e2zdcy",
        $$css: true
    },
    rowChevron: {
        kmuXW: "sand-2lah0s",
        $$css: true
    },
    listIntro: {
        keoZOQ: "sand-dj266r",
        k71WvV: "sand-14z9mp",
        k1K539: "sand-1yztbdb",
        keTefX: "sand-1lziwak",
        k9WMMc: "sand-2b8uid",
        kMwMTN: "sand-1o0liin",
        $$css: true
    },
    ghostCancel: {
        kGVxlE: "sand-1gnnqk1",
        kMwMTN: "sand-1o0liin",
        $$css: true
    },
    listCount: {
        keoZOQ: "sand-dj266r",
        k71WvV: "sand-14z9mp",
        k1K539: "sand-1e56ztr",
        keTefX: "sand-1lziwak",
        kMwMTN: "sand-1o0liin",
        $$css: true
    },
    manageName: {
        kzQI83: "sand-1iyjqo2",
        k7Eaqz: "sand-euugli",
        kVQacm: "sand-b3r6kr",
        kg5iWk: "sand-lyipyv",
        khDVqt: "sand-uxw1ft",
        $$css: true
    },
    manageDescription: {
        k1xSpc: "sand-104kibb",
        kgKLqz: "sand-1ua5tub",
        kJFfOR: "sand-1h7i4cw",
        kdZRtv: "sand-1l13ptj",
        kVQacm: "sand-b3r6kr",
        kMwMTN: "sand-1o0liin",
        kHjlTd: "sand-j0a0fe",
        $$css: true
    },
    manageRemove: {
        kVAEAm: "sand-1n2onr6",
        kY2c9j: "sand-1vjfegm",
        kSiTet: "sand-g01cxk sand-25t5g8",
        kMwMTN: "sand-1o0liin",
        $$css: true
    },
    manageRemoveVisible: {
        kSiTet: "sand-1hc1fzr",
        $$css: true
    },
    actionBar: {
        kLKAdn: "sand-889kno",
        kGO01o: "sand-sag5q8",
        kEafiO: "sand-1hc762m",
        kPef9Z: "sand-13fuv20",
        kLZC3w: "sand-t8lcch",
        $$css: true
    }
};
function KComponent(d) {
    KComponent.d = 997;
    const e = c_1.c(2);
    const { children } = d;
    let n;
    if (e[0] !== children) {
        n = <x_1.ActionBar style={x.actionBar}>{children}</x_1.ActionBar>;
        e[0] = children;
        e[1] = n;
    } else {
        n = e[1];
    }
    return n;
}
function UComponent(d) {
    UComponent.d = 999;
    const e = c_1.c(9);
    const { children, surface } = d;
    const a = surface === undefined ? "filled" : surface;
    let l;
    let c;
    if (e[0] !== children || e[1] !== a) {
        const o = r_1.Children.toArray(children);
        if (e[4] !== a) {
            l = ({
                0: {
                    className: "sand-78zum5 sand-dt5ytf sand-euugli sand-1iorvi4 sand-11lfxj5 sand-jkvuk6 sand-135b78x sand-hojbe8 sand-1b8i4yy sand-b3r6kr"
                },
                1: {
                    className: "sand-78zum5 sand-dt5ytf sand-euugli sand-1iorvi4 sand-11lfxj5 sand-jkvuk6 sand-135b78x sand-hojbe8 sand-b3r6kr sand-4hv7ue sand-1y0btm7 sand-fnq37j sand-jbqb8w"
                }
            })[(a === "outlined") << 0];
            e[4] = a;
            e[5] = l;
        } else {
            l = e[5];
        }
        c = o.map(FeComponent);
        e[0] = children;
        e[1] = a;
        e[2] = l;
        e[3] = c;
    } else {
        l = e[2];
        c = e[3];
    }
    let i;
    if (e[6] !== l || e[7] !== c) {
        i = <div {...l}>{c}</div>;
        e[6] = l;
        e[7] = c;
        e[8] = i;
    } else {
        i = e[8];
    }
    return i;
}
function FeComponent(d, e) {
    return <r_1.Fragment key={e}>{e > 0 ? <div className="sand-f159sx sand-mzvs34"><Se1/></div> : null}{d}</r_1.Fragment>;
}
function XComponent(d) {
    XComponent.d = 1000;
    const e = c_1.c(21);
    const { label, icon, leading, status, isDisabled, onOpen, paneKey } = d;
    const r = isDisabled === undefined ? false : isDisabled;
    const u = r || onOpen == null;
    let f;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        f = {
            className: "sand-78zum5 sand-6s0dn4 sand-13a6bvl sand-17d4w8g sand-1iyjqo2 sand-s83m0k sand-1r8uery sand-euugli sand-b3r6kr"
        };
        e[0] = f;
    } else {
        f = e[0];
    }
    let g;
    if (e[1] !== status) {
        g = <De size="body">{status}</De>;
        e[1] = status;
        e[2] = g;
    } else {
        g = e[2];
    }
    let h;
    if (e[3] !== r || e[4] !== onOpen) {
        h = onOpen == null || r ? null : <I aria-hidden name="chevron-right" size="xs" style={x.rowChevron}/>;
        e[3] = r;
        e[4] = onOpen;
        e[5] = h;
    } else {
        h = e[5];
    }
    let trailing;
    if (e[6] !== g || e[7] !== h) {
        trailing = <span {...f}>{g}{h}</span>;
        e[6] = g;
        e[7] = h;
        e[8] = trailing;
    } else {
        trailing = e[8];
    }
    let p;
    if (e[9] !== icon) {
        p = icon == null ? {} : {
            icon
        };
        e[9] = icon;
        e[10] = p;
    } else {
        p = e[10];
    }
    let m;
    if (e[11] !== leading) {
        m = leading == null ? {} : {
            leading
        };
        e[11] = leading;
        e[12] = m;
    } else {
        m = e[12];
    }
    let j;
    if (e[13] !== label || e[14] !== onOpen || e[15] !== paneKey || e[16] !== u || e[17] !== trailing || e[18] !== p || e[19] !== m) {
        j = <L data-details-pane={paneKey} disabled={u} label={label} size="lg" style={x.detailsRow} onClick={onOpen} trailing={trailing} {...p} {...m}/>;
        e[13] = label;
        e[14] = onOpen;
        e[15] = paneKey;
        e[16] = u;
        e[17] = trailing;
        e[18] = p;
        e[19] = m;
        e[20] = j;
    } else {
        j = e[20];
    }
    return j;
}
function HeComponent(d) {
    HeComponent.d = 1004;
    const e = c_1.c(8);
    const { name, pluginId, resolve } = d;
    let l;
    if (e[0] !== name || e[1] !== pluginId || e[2] !== resolve) {
        l = resolve(name) ?? resolve(pluginId);
        e[0] = name;
        e[1] = pluginId;
        e[2] = resolve;
        e[3] = l;
    } else {
        l = e[3];
    }
    const c = l;
    const iconId = c?.iconId;
    const iconUrl = c?.iconUrl;
    let r;
    if (e[4] !== name || e[5] !== iconId || e[6] !== iconUrl) {
        r = <P_1 iconId={iconId} iconUrl={iconUrl} monoFallback="plug" name={name} size={size}/>;
        e[4] = name;
        e[5] = iconId;
        e[6] = iconUrl;
        e[7] = r;
    } else {
        r = e[7];
    }
    return r;
}
function KeComponent(d) {
    KeComponent.d = 1001;
    const e = c_1.c(3);
    const { name } = d;
    let n;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        n = {
            className: "sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-vy4d1p sand-xk0z11 sand-1o0liin"
        };
        e[0] = n;
    } else {
        n = e[0];
    }
    let a;
    if (e[1] !== name) {
        a = <span {...n}><I aria-hidden name={name} size="lg"/></span>;
        e[1] = name;
        e[2] = a;
    } else {
        a = e[2];
    }
    return a;
}
function GComponent(d) {
    GComponent.d = 1002;
    const e = c_1.c(43);
    const { item, isPending, removesWithTrash, onOpen, onRemove, leading } = d;
    const { _: __1 } = u_1();
    const [r, setR] = r_1.useState(false);
    const [f, setF] = r_1.useState(false);
    const showsTrash = r || f;
    const item_title = item.title;
    let p;
    if (e[0] !== item.description) {
        p = item.description?.trim() ?? "";
        e[0] = item.description;
        e[1] = p;
    } else {
        p = e[1];
    }
    const m = p;
    let j;
    if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        j = p_1(a_.body1, a$.regular, x.manageName);
        e[2] = j;
    } else {
        j = e[2];
    }
    let _;
    if (e[3] !== item.title) {
        _ = <span {...j}>{item.title}</span>;
        e[3] = item.title;
        e[4] = _;
    } else {
        _ = e[4];
    }
    const w = _;
    let v;
    if (e[5] !== m || e[6] !== w) {
        v = m.length === 0 ? w : <span className="sand-78zum5 sand-dt5ytf sand-1iyjqo2 sand-euugli">{w}<span {...p_1(a_.body2, x.manageDescription)}>{m}</span></span>;
        e[5] = m;
        e[6] = w;
        e[7] = v;
    } else {
        v = e[7];
    }
    let C;
    if (e[8] !== leading || e[9] !== v) {
        C = <>{leading}{v}</>;
        e[8] = leading;
        e[9] = v;
        e[10] = C;
    } else {
        C = e[10];
    }
    const M = C;
    let q;
    if (e[11] !== m.length) {
        q = ({
            0: {
                className: "sand-1n2onr6 sand-78zum5 sand-6s0dn4 sand-167g77z sand-9f619 sand-euugli sand-c9qbxq sand-u0aao5 sand-1yrsyyn sand-f159sx sand-10b6aqq sand-mzvs34 sand-1qmwy7c sand-jbqb8w sand-aalx5g"
            },
            1: {
                className: "sand-1n2onr6 sand-78zum5 sand-6s0dn4 sand-167g77z sand-9f619 sand-euugli sand-u0aao5 sand-f159sx sand-mzvs34 sand-1qmwy7c sand-jbqb8w sand-aalx5g sand-t7dq6l sand-1y1aw1k sand-wib8y2"
            }
        })[(m.length > 0) << 0];
        e[11] = m.length;
        e[12] = q;
    } else {
        q = e[12];
    }
    let onMouseLeave;
    let onBlur;
    let onFocus;
    let onMouseEnter;
    if (e[13] === Symbol.for("react.memo_cache_sentinel")) {
        onBlur = (Z)=>{
            if (!Z.currentTarget.contains(Z.relatedTarget)) {
                setF(false);
            }
        };
        onFocus = ()=>setF(true);
        onMouseEnter = ()=>setR(true);
        onMouseLeave = ()=>setR(false);
        e[13] = onMouseLeave;
        e[14] = onBlur;
        e[15] = onFocus;
        e[16] = onMouseEnter;
    } else {
        onMouseLeave = e[13];
        onBlur = e[14];
        onFocus = e[15];
        onMouseEnter = e[16];
    }
    let z;
    if (e[17] !== __1 || e[18] !== item.key || e[19] !== M || e[20] !== item_title || e[21] !== onOpen) {
        z = onOpen == null ? M : <button aria-label={__1({
            id: "T9mwDN",
            values: {
                name: item_title
            }
        })} onClick={()=>onOpen(item.key)} type="button" className="sand-78zum5 sand-6s0dn4 sand-167g77z sand-1iyjqo2 sand-euugli sand-1717udv sand-c342km sand-jbqb8w sand-1heor9g sand-jb2p0i sand-1yc453h sand-1ypdohk sand-1t137rt sand-1s928wv sand-1j6awrg sand-arstr8 sand-7cl8nr sand-9cqkzs">{M}</button>;
        e[17] = __1;
        e[18] = item.key;
        e[19] = M;
        e[20] = item_title;
        e[21] = onOpen;
        e[22] = z;
    } else {
        z = e[22];
    }
    let S;
    if (e[23] !== showsTrash || e[24] !== isPending || e[25] !== item.key || e[26] !== item.title || e[27] !== onRemove || e[28] !== removesWithTrash) {
        S = onRemove != null && removesWithTrash ? <span className="sand-1n2onr6 sand-1vjfegm sand-3nfvp2 sand-2lah0s"><T_2 disabled={isPending} name={item.title} onDelete={()=>onRemove(item.key)} showsTrash={showsTrash}/></span> : null;
        e[23] = showsTrash;
        e[24] = isPending;
        e[25] = item.key;
        e[26] = item.title;
        e[27] = onRemove;
        e[28] = removesWithTrash;
        e[29] = S;
    } else {
        S = e[29];
    }
    let N;
    if (e[30] !== __1 || e[31] !== showsTrash || e[32] !== isPending || e[33] !== item.key || e[34] !== item.title || e[35] !== onRemove || e[36] !== removesWithTrash) {
        N = onRemove == null || removesWithTrash ? null : <V aria-label={__1({
            id: "w61W3L",
            values: {
                0: item.title
            }
        })} disabled={isPending} onClick={()=>onRemove(item.key)} size="sm" style={[
            x.manageRemove,
            showsTrash && x.manageRemoveVisible
        ]} type="button" variant="tertiary"><T id="t/YqKh"/></V>;
        e[30] = __1;
        e[31] = showsTrash;
        e[32] = isPending;
        e[33] = item.key;
        e[34] = item.title;
        e[35] = onRemove;
        e[36] = removesWithTrash;
        e[37] = N;
    } else {
        N = e[37];
    }
    let D;
    if (e[38] !== z || e[39] !== S || e[40] !== N || e[41] !== q) {
        D = <div {...q} onBlur={onBlur} onFocus={onFocus} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{z}{S}{N}</div>;
        e[38] = z;
        e[39] = S;
        e[40] = N;
        e[41] = q;
        e[42] = D;
    } else {
        D = e[42];
    }
    return D;
}
function PeComponent(d) {
    PeComponent.d = 1003;
    const e = c_1.c(33);
    const { items, intro, actions, leadingOf, removesWithTrash } = d;
    const removesWithTrash_1 = removesWithTrash === undefined ? false : removesWithTrash;
    const { _: __1 } = u_1();
    let r;
    let u;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        r = {
            className: "sand-78zum5 sand-dt5ytf sand-euugli"
        };
        u = p_1(a_.body2, x.listIntro);
        e[0] = r;
        e[1] = u;
    } else {
        r = e[0];
        u = e[1];
    }
    let f;
    if (e[2] !== intro) {
        f = <p {...u}>{intro}</p>;
        e[2] = intro;
        e[3] = f;
    } else {
        f = e[3];
    }
    let g;
    if (e[4] !== actions.dropZone) {
        g = actions.dropZone == null ? null : <div className="sand-1yztbdb">{actions.dropZone}</div>;
        e[4] = actions.dropZone;
        e[5] = g;
    } else {
        g = e[5];
    }
    let h;
    if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
        h = p_1(a_.body2, x.listCount);
        e[6] = h;
    } else {
        h = e[6];
    }
    let k;
    if (e[7] !== __1 || e[8] !== items.length) {
        k = items.length === 0 ? <T id="Vq6/r4"/> : __1({
            id: "kRr3s3",
            values: {
                0: items.length
            }
        });
        e[7] = __1;
        e[8] = items.length;
        e[9] = k;
    } else {
        k = e[9];
    }
    let p;
    if (e[10] !== k) {
        p = <p {...h}>{k}</p>;
        e[10] = k;
        e[11] = p;
    } else {
        p = e[11];
    }
    let m;
    if (e[12] !== actions.isPending || e[13] !== actions.onOpen || e[14] !== actions.onRemove || e[15] !== items || e[16] !== leadingOf || e[17] !== removesWithTrash_1) {
        let w;
        if (e[19] !== actions.isPending || e[20] !== actions.onOpen || e[21] !== actions.onRemove || e[22] !== leadingOf || e[23] !== removesWithTrash_1) {
            w = (item)=><GComponent key={item.key} isPending={actions.isPending === true} item={item} leading={leadingOf?.(item) ?? null} removesWithTrash={removesWithTrash_1} {...actions.onOpen == null ? {} : {
                    onOpen: actions.onOpen
                }} {...actions.onRemove == null ? {} : {
                    onRemove: actions.onRemove
                }}/>;
            e[19] = actions.isPending;
            e[20] = actions.onOpen;
            e[21] = actions.onRemove;
            e[22] = leadingOf;
            e[23] = removesWithTrash_1;
            e[24] = w;
        } else {
            w = e[24];
        }
        m = items.map(w);
        e[12] = actions.isPending;
        e[13] = actions.onOpen;
        e[14] = actions.onRemove;
        e[15] = items;
        e[16] = leadingOf;
        e[17] = removesWithTrash_1;
        e[18] = m;
    } else {
        m = e[18];
    }
    let j;
    if (e[25] !== actions.writeFailed) {
        j = actions.writeFailed === true ? <div className="sand-1y1aw1k sand-f159sx sand-18d9i69 sand-mzvs34"><Ae as="p" color="red" role="alert" size="sm"><T id="D2AZQg"/></Ae></div> : null;
        e[25] = actions.writeFailed;
        e[26] = j;
    } else {
        j = e[26];
    }
    let _;
    if (e[27] !== j || e[28] !== f || e[29] !== g || e[30] !== p || e[31] !== m) {
        _ = <div {...r}>{f}{g}{p}{m}{j}</div>;
        e[27] = j;
        e[28] = f;
        e[29] = g;
        e[30] = p;
        e[31] = m;
        e[32] = _;
    } else {
        _ = e[32];
    }
    return _;
}
export function D(d) {
    D.d = 998;
    const e = c_1.c(6);
    const { onClick, disabled, label } = d;
    const l = disabled === undefined ? false : disabled;
    let c;
    if (e[0] !== label) {
        c = label ?? <T id="dEgA5A"/>;
        e[0] = label;
        e[1] = c;
    } else {
        c = e[1];
    }
    let i;
    if (e[2] !== l || e[3] !== onClick || e[4] !== c) {
        i = <x_1.Action disabled={l} onClick={onClick} style={x.ghostCancel} variant="tertiary">{c}</x_1.Action>;
        e[2] = l;
        e[3] = onClick;
        e[4] = c;
        e[5] = i;
    } else {
        i = e[5];
    }
    return i;
}
function GeComponent(d) {
    GeComponent.d = 996;
    const e = c_1.c(10);
    const { onAddMore, onCancel, label, variant } = d;
    const variant_1 = variant === undefined ? "secondary" : variant;
    let i;
    if (e[0] !== onCancel) {
        i = onCancel == null ? null : <D onClick={onCancel}/>;
        e[0] = onCancel;
        e[1] = i;
    } else {
        i = e[1];
    }
    let o;
    if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        o = <x_1.ActionSpacer/>;
        e[2] = o;
    } else {
        o = e[2];
    }
    let r;
    if (e[3] !== label || e[4] !== onAddMore || e[5] !== variant_1) {
        r = <x_1.Action onClick={onAddMore} variant={variant_1}>{label}</x_1.Action>;
        e[3] = label;
        e[4] = onAddMore;
        e[5] = variant_1;
        e[6] = r;
    } else {
        r = e[6];
    }
    let u;
    if (e[7] !== i || e[8] !== r) {
        u = <KComponent>{i}{o}{r}</KComponent>;
        e[7] = i;
        e[8] = r;
        e[9] = u;
    } else {
        u = e[9];
    }
    return u;
}
function HComponent(d) {
    HComponent.d = 1008;
    const e = c_1.c(13);
    const { status } = d;
    switch(status){
        case "none":
            {
                let n;
                if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
                    n = <T id="iSLIjg"/>;
                    e[0] = n;
                } else {
                    n = e[0];
                }
                return n;
            }
        case "request_unsent":
            {
                let n;
                if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
                    n = <T id="w3griw"/>;
                    e[1] = n;
                } else {
                    n = e[1];
                }
                return n;
            }
        case "pending":
            {
                let n;
                if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
                    n = <T id="a+Esqm"/>;
                    e[2] = n;
                } else {
                    n = e[2];
                }
                return n;
            }
        case "declined":
            {
                let n;
                if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
                    n = <T id="vE/BXC"/>;
                    e[3] = n;
                } else {
                    n = e[3];
                }
                return n;
            }
        case "connected":
            {
                let n;
                if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
                    n = <T id="QHcLEN"/>;
                    e[4] = n;
                } else {
                    n = e[4];
                }
                return n;
            }
        case "needs_update":
            {
                let n;
                if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
                    n = <T id="M/YmjX"/>;
                    e[5] = n;
                } else {
                    n = e[5];
                }
                return n;
            }
        case "updating":
            {
                let n;
                if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
                    n = <T id="Jqe+Dc"/>;
                    e[6] = n;
                } else {
                    n = e[6];
                }
                return n;
            }
        case "not_published":
            {
                let n;
                if (e[7] === Symbol.for("react.memo_cache_sentinel")) {
                    n = <T id="rDxVOJ"/>;
                    e[7] = n;
                } else {
                    n = e[7];
                }
                return n;
            }
        case "connecting":
            {
                let n;
                if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
                    n = <T id="JrFTcr"/>;
                    e[8] = n;
                } else {
                    n = e[8];
                }
                return n;
            }
        case "failed":
            {
                let n;
                if (e[9] === Symbol.for("react.memo_cache_sentinel")) {
                    n = <T id="FGWsd4"/>;
                    e[9] = n;
                } else {
                    n = e[9];
                }
                return n;
            }
        case "reconnect":
            {
                let n;
                if (e[10] === Symbol.for("react.memo_cache_sentinel")) {
                    n = <T id="XsIxsL"/>;
                    e[10] = n;
                } else {
                    n = e[10];
                }
                return n;
            }
        case "removed":
            {
                let n;
                if (e[11] === Symbol.for("react.memo_cache_sentinel")) {
                    n = <T id="N1pR+j"/>;
                    e[11] = n;
                } else {
                    n = e[11];
                }
                return n;
            }
        case "removing":
            {
                let n;
                if (e[12] === Symbol.for("react.memo_cache_sentinel")) {
                    n = <T id="APfagk"/>;
                    e[12] = n;
                } else {
                    n = e[12];
                }
                return n;
            }
    }
}
function JComponent(d) {
    JComponent.d = 1006;
    const e = c_1.c(13);
    const { paneKey, surface, onOpen } = d;
    const l = surface === "outlined";
    const c = onOpen == null;
    let i;
    if (e[0] !== l || e[1] !== onOpen) {
        i = ({
            0: {
                className: "sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-h8yej3 sand-9f619 sand-yinxu5 sand-1pic42t sand-1g2khh7 sand-1onr9mi sand-c342km sand-hojbe8 sand-1b8i4yy sand-10sgm2k sand-1heor9g sand-jb2p0i sand-1yc453h sand-1ypdohk"
            },
            4: {
                className: "sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-h8yej3 sand-9f619 sand-yinxu5 sand-1pic42t sand-1g2khh7 sand-1onr9mi sand-c342km sand-hojbe8 sand-1heor9g sand-jb2p0i sand-1yc453h sand-1b8i4yy sand-urtx8w sand-t0e3qv"
            },
            2: {
                className: "sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-h8yej3 sand-9f619 sand-yinxu5 sand-1pic42t sand-1g2khh7 sand-1onr9mi sand-hojbe8 sand-1heor9g sand-jb2p0i sand-1yc453h sand-1ypdohk sand-4hv7ue sand-1y0btm7 sand-fnq37j sand-jbqb8w sand-aalx5g"
            },
            6: {
                className: "sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-h8yej3 sand-9f619 sand-yinxu5 sand-1pic42t sand-1g2khh7 sand-1onr9mi sand-hojbe8 sand-1heor9g sand-jb2p0i sand-1yc453h sand-t0e3qv sand-4hv7ue sand-1y0btm7 sand-fnq37j sand-jbqb8w sand-aalx5g"
            },
            1: {
                className: "sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-h8yej3 sand-9f619 sand-yinxu5 sand-1pic42t sand-1g2khh7 sand-1onr9mi sand-c342km sand-hojbe8 sand-1heor9g sand-jb2p0i sand-1yc453h sand-1ypdohk sand-jbqb8w sand-1n5bzlp"
            },
            5: {
                className: "sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-h8yej3 sand-9f619 sand-yinxu5 sand-1pic42t sand-1g2khh7 sand-1onr9mi sand-c342km sand-hojbe8 sand-1heor9g sand-jb2p0i sand-1yc453h sand-t0e3qv sand-jbqb8w sand-1n5bzlp"
            },
            3: {
                className: "sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-h8yej3 sand-9f619 sand-yinxu5 sand-1pic42t sand-1g2khh7 sand-1onr9mi sand-hojbe8 sand-1heor9g sand-jb2p0i sand-1yc453h sand-1ypdohk sand-4hv7ue sand-1y0btm7 sand-fnq37j sand-jbqb8w sand-1n5bzlp"
            },
            7: {
                className: "sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-h8yej3 sand-9f619 sand-yinxu5 sand-1pic42t sand-1g2khh7 sand-1onr9mi sand-hojbe8 sand-1heor9g sand-jb2p0i sand-1yc453h sand-t0e3qv sand-4hv7ue sand-1y0btm7 sand-fnq37j sand-jbqb8w sand-1n5bzlp"
            }
        })[(onOpen == null) << 2 | !!l << 1 | !!(l && onOpen == null) << 0];
        e[0] = l;
        e[1] = onOpen;
        e[2] = i;
    } else {
        i = e[2];
    }
    let o;
    let r;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        o = <span className="sand-qcrz7y sand-2lah0s sand-4p5aij"><W sizePx={20}/></span>;
        r = <span className="sand-78zum5 sand-dt5ytf sand-195vfkc sand-1iyjqo2 sand-euugli"><span {...p_1(a_.body1, a$.regular, x.slackTitle)}><T id="CVtI2N"/></span><span {...p_1(a_.body2, x.slackText)}><T id="qNfVdp"/></span></span>;
        e[3] = o;
        e[4] = r;
    } else {
        o = e[3];
        r = e[4];
    }
    let u;
    if (e[5] !== onOpen) {
        u = onOpen == null ? null : <I aria-hidden name="chevron-right" size="xs" style={x.slackChevron}/>;
        e[5] = onOpen;
        e[6] = u;
    } else {
        u = e[6];
    }
    let f;
    if (e[7] !== onOpen || e[8] !== paneKey || e[9] !== c || e[10] !== i || e[11] !== u) {
        f = <button data-details-pane={paneKey} disabled={c} onClick={onOpen} type="button" {...i}>{o}{r}{u}</button>;
        e[7] = onOpen;
        e[8] = paneKey;
        e[9] = c;
        e[10] = i;
        e[11] = u;
        e[12] = f;
    } else {
        f = e[12];
    }
    return f;
}
function YComponent() {
    YComponent.d = 1005;
    const d = c_1.c(1);
    let e;
    if (d[0] === Symbol.for("react.memo_cache_sentinel")) {
        e = <W sizePx={20}/>;
        d[0] = e;
    } else {
        e = d[0];
    }
    return e;
}
function BeComponent(d) {
    BeComponent.d = 1007;
    const e = c_1.c(22);
    const { status, paneKey, surface, onOpen } = d;
    const surface_1 = surface === undefined ? "filled" : surface;
    const { _ } = u_1();
    let o;
    if (e[0] !== onOpen) {
        o = onOpen == null ? {} : {
            onOpen
        };
        e[0] = onOpen;
        e[1] = o;
    } else {
        o = e[1];
    }
    const r = o;
    if (status === "none") {
        let m;
        if (e[2] !== r || e[3] !== paneKey || e[4] !== surface_1) {
            m = <JComponent paneKey={paneKey} surface={surface_1} {...r}/>;
            e[2] = r;
            e[3] = paneKey;
            e[4] = surface_1;
            e[5] = m;
        } else {
            m = e[5];
        }
        return m;
    }
    let isDisabled;
    if (e[6] !== status) {
        isDisabled = status === "not_published" || ue(status);
        e[6] = status;
        e[7] = isDisabled;
    } else {
        isDisabled = e[7];
    }
    let label;
    if (e[8] !== _) {
        label = _({
            id: "lyjq5X"
        });
        e[8] = _;
        e[9] = label;
    } else {
        label = e[9];
    }
    let leading;
    if (e[10] === Symbol.for("react.memo_cache_sentinel")) {
        leading = <YComponent/>;
        e[10] = leading;
    } else {
        leading = e[10];
    }
    let status_1;
    if (e[11] !== status) {
        status_1 = <HComponent status={status}/>;
        e[11] = status;
        e[12] = status_1;
    } else {
        status_1 = e[12];
    }
    let k;
    if (e[13] !== r || e[14] !== paneKey || e[15] !== isDisabled || e[16] !== label || e[17] !== status_1) {
        k = <XComponent isDisabled={isDisabled} label={label} leading={leading} paneKey={paneKey} status={status_1} {...r}/>;
        e[13] = r;
        e[14] = paneKey;
        e[15] = isDisabled;
        e[16] = label;
        e[17] = status_1;
        e[18] = k;
    } else {
        k = e[18];
    }
    let p;
    if (e[19] !== surface_1 || e[20] !== k) {
        p = <UComponent surface={surface_1}>{k}</UComponent>;
        e[19] = surface_1;
        e[20] = k;
        e[21] = p;
    } else {
        p = e[21];
    }
    return p;
}
function JeComponent(d) {
    JeComponent.d = 1009;
    const e = c_1.c(12);
    const { unpublish } = d;
    const { _ } = u_1();
    const a = cq();
    let l;
    if (e[0] !== _ || e[1] !== a || e[2] !== unpublish) {
        l = async ()=>{
            if (await a(cr({
                title: _({
                    id: "MEelZJ"
                }),
                description: _({
                    id: "lgxknF"
                }),
                confirmLabel: _({
                    id: "4DLZUa"
                }),
                cancelLabel: _({
                    id: "dEgA5A"
                })
            }))) {
                unpublish.onUnpublish();
            }
        };
        e[0] = _;
        e[1] = a;
        e[2] = unpublish;
        e[3] = l;
    } else {
        l = e[3];
    }
    const c = l;
    let onClick;
    if (e[4] !== c) {
        onClick = ()=>{
            c();
        };
        e[4] = c;
        e[5] = onClick;
    } else {
        onClick = e[5];
    }
    let o;
    if (e[6] !== unpublish.isPending) {
        o = unpublish.isPending ? <T id="jvDsYK"/> : <T id="4DLZUa"/>;
        e[6] = unpublish.isPending;
        e[7] = o;
    } else {
        o = e[7];
    }
    let r;
    if (e[8] !== onClick || e[9] !== o || e[10] !== unpublish.isPending) {
        r = <V disabled={unpublish.isPending} onClick={onClick} sentiment="danger" size="lg" variant="tertiary">{o}</V>;
        e[8] = onClick;
        e[9] = o;
        e[10] = unpublish.isPending;
        e[11] = r;
    } else {
        r = e[11];
    }
    return r;
}
export { GeComponent as A, PeComponent as M, HeComponent as P, JeComponent as T, qe as a, Se as b, HComponent as c, BeComponent as d, KeComponent as e, KComponent as f, ue as i, ze as t };
