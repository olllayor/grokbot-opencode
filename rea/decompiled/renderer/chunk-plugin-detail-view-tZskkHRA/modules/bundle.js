import { c as c_1, u as u_1, j as j_1, T as T_1, r as r_1, p as p_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { cq, cs as cs_1, bO, f5, b9, bA, e9, eb, f6, r as r_2, ed, ec, ea, bj, f7, ee as accountKey, f8, f9, e8, fa, fb, fc, fd, fe, ff, a_, cu, fg, fh, aK, aT } from "./index.eager-app-Cj5f8Gby.js";
import { i, a as a_1 } from "./chunk-finance-CSw6gjXN.js";
import { aY as Us1 } from "./index.eager-platform-Dcfeegfw.js";
import { z as X, W, g as Es, H, m as Dn1, bx as Cn1 } from "./index-ZYxf-aBb.js";
import { a as a_2 } from "./chunk-provider-listener-integrations-CR9f28xA.js";
import { C as C_1, b as Un1 } from "./chunk-plugins-rows-2d0UrD7L.js";
import { C as C_2, S as S_1, f as f_1, p as p_2, i as i_2, a as a_3 } from "./chunk-view-BudImuR0.js";
import { t, r as r_3, e, p as p_3 } from "./chunk-marketplace-browse-model-DoOY91TS.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./chunk-mcp-connector-status-DhhAF8A6.js";
import "./chunk-use-active-option-scroll-B1hXdW5d.js";
import "./chunk-wipe-navigation-B3wgZxtA.js";
import "./chunk-pane-header-DzXd4Vgr.js";
import "./chunk-scroll-pane-CoxKzaOs.js";
import "./chunk-native-plugin-state-AwCLFZLB.js";
import "./chunk-provider-credentials-yP7QsOsy.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "bfa6f54f-7d5f-40ad-9b69-022db2fb3eee";
            e._sentryDebugIdIdentifier = "sentry-dbid-bfa6f54f-7d5f-40ad-9b69-022db2fb3eee";
        }
    } catch (e) {}
})();
function Ne1Component(l) {
    Ne1Component.d = 898;
    const s = c_1.c(35);
    const { server, isBusy } = l;
    const { _ } = u_1();
    const server_cursorScmProvider = server.cursorScmProvider;
    const d = a_2();
    const r = cq();
    const { refetch } = cs_1();
    if (server_cursorScmProvider == null || server.credentialIsCursorAccount === true) {
        return null;
    }
    const providerName = bO(server_cursorScmProvider)?.displayName ?? server.name;
    const x = isBusy || d.isPending;
    if (server.status === "needsAuth") {
        let j;
        if (s[0] !== server_cursorScmProvider || s[1] !== d) {
            j = ()=>{
                d.connect(server_cursorScmProvider);
            };
            s[0] = server_cursorScmProvider;
            s[1] = d;
            s[2] = j;
        } else {
            j = s[2];
        }
        let k;
        if (s[3] !== providerName) {
            k = <T_1 id="trIsPs" values={{
                providerName
            }}/>;
            s[3] = providerName;
            s[4] = k;
        } else {
            k = s[4];
        }
        let w;
        if (s[5] !== x || s[6] !== j || s[7] !== k) {
            w = <X disabled={x} onClick={j} size="lg" type="button" variant="secondary">{k}</X>;
            s[5] = x;
            s[6] = j;
            s[7] = k;
            s[8] = w;
        } else {
            w = s[8];
        }
        return w;
    }
    let f;
    if (s[9] !== _ || s[10] !== r || s[11] !== server_cursorScmProvider || s[12] !== providerName || s[13] !== refetch || s[14] !== d) {
        f = ()=>{
            r({
                title: _({
                    id: "8U6a8X",
                    values: {
                        providerName
                    }
                }),
                description: _({
                    id: "/rs6zp",
                    values: {
                        providerName
                    }
                }),
                confirmLabel: _({
                    id: "+K0AvT"
                }),
                cancelLabel: _({
                    id: "dEgA5A"
                }),
                destructive: true,
                perform: async ()=>{
                    await d.disconnect(server_cursorScmProvider);
                    refetch();
                    return null;
                }
            });
        };
        s[9] = _;
        s[10] = r;
        s[11] = server_cursorScmProvider;
        s[12] = providerName;
        s[13] = refetch;
        s[14] = d;
        s[15] = f;
    } else {
        f = s[15];
    }
    const p = f;
    let u;
    if (s[16] !== x || s[17] !== server_cursorScmProvider || s[18] !== d) {
        u = server_cursorScmProvider === "github" ? <X disabled={x} onClick={()=>{
            d.connect(server_cursorScmProvider);
        }} size="lg" type="button" variant="secondary"><T_1 id="dJNmzF"/></X> : null;
        s[16] = x;
        s[17] = server_cursorScmProvider;
        s[18] = d;
        s[19] = u;
    } else {
        u = s[19];
    }
    let b;
    if (s[20] !== server_cursorScmProvider || s[21] !== d) {
        b = ()=>{
            d.reconnect(server_cursorScmProvider);
        };
        s[20] = server_cursorScmProvider;
        s[21] = d;
        s[22] = b;
    } else {
        b = s[22];
    }
    let h;
    if (s[23] === Symbol.for("react.memo_cache_sentinel")) {
        h = <T_1 id="gcoiFh"/>;
        s[23] = h;
    } else {
        h = s[23];
    }
    let y;
    if (s[24] !== x || s[25] !== b) {
        y = <X disabled={x} onClick={b} size="lg" type="button" variant="secondary">{h}</X>;
        s[24] = x;
        s[25] = b;
        s[26] = y;
    } else {
        y = s[26];
    }
    let v;
    if (s[27] === Symbol.for("react.memo_cache_sentinel")) {
        v = <T_1 id="+K0AvT"/>;
        s[27] = v;
    } else {
        v = s[27];
    }
    let N;
    if (s[28] !== p || s[29] !== x) {
        N = <X disabled={x} onClick={p} sentiment="danger" size="lg" type="button" variant="secondary">{v}</X>;
        s[28] = p;
        s[29] = x;
        s[30] = N;
    } else {
        N = s[30];
    }
    let o;
    if (s[31] !== u || s[32] !== y || s[33] !== N) {
        o = <>{u}{y}{N}</>;
        s[31] = u;
        s[32] = y;
        s[33] = N;
        s[34] = o;
    } else {
        o = s[34];
    }
    return o;
}
function ye(entry) {
    if (entry.marketplace?.ownership === "user") {
        return null;
    }
    const s = f5(entry.id);
    if (s == null) {
        return null;
    }
    if (entry.isPublicListed === true) {
        return `https://x.ai/bot/plugin/${entry.id}`;
    }
    return s;
}
function vn(accountKey) {
    return ed(accountKey);
}
function Nn(server) {
    return server.accountKey !== accountKey || server.status !== "needsAuth";
}
function gn(server) {
    return server.servedBy === "grok" && (server.accountKey === accountKey || server.accountKey === f6);
}
function Ve1Component(l) {
    Ve1Component.d = 1178;
    const s = c_1.c(88);
    const { slots, isBusy, onAuthenticate, onAddAccount, onRenameAccount, onRemoveAccount } = l;
    const { i18n, _: __1 } = u_1();
    const x = b9("mcp_multi_account");
    const f = bA();
    const p = e9();
    const [u, setU] = r_1.useState(null);
    const [h, setH] = r_1.useState(null);
    const [v, setV] = r_1.useState(null);
    const o = slots[0];
    if (o == null) {
        return null;
    }
    const serverId = o.id;
    const k = x && o.url != null && o.servedBy !== "grok" && o.cursorScmProvider == null;
    const o_rowServerIdentifier = o.rowServerIdentifier;
    let A;
    if (s[0] !== slots) {
        A = new Set(slots.map(wn));
        s[0] = slots;
        s[1] = A;
    } else {
        A = s[1];
    }
    const T = A;
    let R;
    if (s[2] !== slots) {
        R = new Set(slots.map(kn));
        s[2] = slots;
        s[3] = R;
    } else {
        R = s[3];
    }
    const C = R;
    let S;
    let P;
    let D;
    let L;
    let E;
    let O;
    if (s[4] !== __1 || s[5] !== h || s[6] !== k || s[7] !== v || s[8] !== u || s[9] !== p || s[10] !== i18n || s[11] !== isBusy || s[12] !== onAddAccount || s[13] !== onAuthenticate || s[14] !== onRemoveAccount || s[15] !== onRenameAccount || s[16] !== f || s[17] !== o_rowServerIdentifier || s[18] !== serverId || s[19] !== C || s[20] !== T || s[21] !== slots) {
        const F = [];
        const Z = `${o_rowServerIdentifier}--`;
        for (const [q, z] of p){
            if (!q.startsWith(Z) || T.has(q) || z.status !== "waiting") {
                continue;
            }
            const M = q.slice(Z.length);
            if (!C.has(M)) {
                F.push({
                    key: q,
                    label: M
                });
            }
        }
        let es;
        if (s[28] !== u) {
            es = u != null && eb(u.draft) === f6 && eb(u.draft) !== u.accountKey;
            s[28] = u;
            s[29] = es;
        } else {
            es = s[29];
        }
        const Q = es;
        let J;
        if (s[30] !== h) {
            J = h != null && eb(h) === f6;
            s[30] = h;
            s[31] = J;
        } else {
            J = s[31];
        }
        S = J;
        let ls;
        if (s[32] !== u || s[33] !== onRenameAccount || s[34] !== serverId) {
            ls = ()=>{
                if (u == null) {
                    return;
                }
                const newAccountKey = eb(u.draft);
                if (newAccountKey.length === 0 || newAccountKey === u.accountKey) {
                    setU(null);
                    return;
                }
                if (newAccountKey !== f6) {
                    setU(null);
                    onRenameAccount({
                        serverId,
                        accountKey: u.accountKey,
                        newAccountKey
                    });
                }
            };
            s[32] = u;
            s[33] = onRenameAccount;
            s[34] = serverId;
            s[35] = ls;
        } else {
            ls = s[35];
        }
        const Y = ls;
        let cs;
        if (s[36] !== h || s[37] !== S || s[38] !== onAddAccount || s[39] !== onAuthenticate || s[40] !== serverId || s[41] !== C) {
            cs = ()=>{
                if (h == null || S) {
                    return;
                }
                const q = eb(h);
                if (q.length !== 0) {
                    setH(null);
                    if (C.has(q)) {
                        onAuthenticate({
                            serverId,
                            accountKey: q
                        });
                        return;
                    }
                    onAddAccount({
                        serverId,
                        label: q
                    });
                }
            };
            s[36] = h;
            s[37] = S;
            s[38] = onAddAccount;
            s[39] = onAuthenticate;
            s[40] = serverId;
            s[41] = C;
            s[42] = cs;
        } else {
            cs = s[42];
        }
        P = cs;
        let G;
        if (s[43] === Symbol.for("react.memo_cache_sentinel")) {
            G = r_2("sand-9f619 sand-1y1aw1k sand-1pic42t sand-10b6aqq sand-1onr9mi");
            s[43] = G;
        } else {
            G = s[43];
        }
        let ns;
        if (s[44] === Symbol.for("react.memo_cache_sentinel")) {
            ns = <T_1 id="bPwFdf"/>;
            s[44] = ns;
        } else {
            ns = s[44];
        }
        if (s[45] !== G) {
            O = <Us1 as="h3" className={G} color="tertiary" size="sm">{ns}</Us1>;
            s[45] = G;
            s[46] = O;
        } else {
            O = s[46];
        }
        if (s[47] === Symbol.for("react.memo_cache_sentinel")) {
            D = r_2("sand-plugins-detail__accounts", "sand-9f619 sand-ixl9f9 sand-i07v4r");
            s[47] = D;
        } else {
            D = s[47];
        }
        if (s[48] !== __1 || s[49] !== k || s[50] !== v || s[51] !== u || s[52] !== i18n || s[53] !== isBusy || s[54] !== Q || s[55] !== onAuthenticate || s[56] !== onRemoveAccount || s[57] !== serverId || s[58] !== slots || s[59] !== Y) {
            let q;
            if (s[61] !== __1 || s[62] !== k || s[63] !== v || s[64] !== u || s[65] !== i18n || s[66] !== isBusy || s[67] !== Q || s[68] !== onAuthenticate || s[69] !== onRemoveAccount || s[70] !== serverId || s[71] !== Y) {
                q = (server, M)=>{
                    const as = server.servedBy === "grok";
                    const ss = gn(server);
                    const _ = ss ? __1({
                        id: "dlHT84"
                    }) : vn(server.accountKey);
                    const V = !as && u?.accountKey === server.accountKey ? u : null;
                    const ps = bj(server.statusDetail, i18n);
                    const fs = ss && server.rowServerIdentifier === f7 && server.status === "connected";
                    return <div key={server.serverIdentifier}>{M > 0 ? <div aria-hidden className={r_2("sand-9f619 sand-28ko6u sand-1diwwjn sand-bmvrgn sand-1m4ooaa")}/> : null}<div className={r_2({
                        0: {
                            className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-167g77z sand-z9dl7a sand-1pic42t sand-sag5q8 sand-1onr9mi"
                        },
                        1: {
                            className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-167g77z sand-z9dl7a sand-1pic42t sand-1onr9mi sand-18d9i69"
                        }
                    }[!!fs << 0].className)}><span className={r_2("sand-9f619 sand-78zum5 sand-dt5ytf sand-12mrbbr sand-euugli")}><span className={r_2("sand-9f619 sand-78zum5 sand-6s0dn4 sand-1nejdyq sand-euugli")}>{V != null ? <input aria-label={__1({
                        id: "BJ7R7v",
                        values: {
                            label: _
                        }
                    })} autoFocus className={r_2("sand-9f619 sand-5f5z56 sand-15kz4h8 sand-193iq5w sand-1717udv sand-c342km sand-ng3xce sand-jbqb8w sand-1wd3ewq sand-jb2p0i sand-11wthnw sand-d4r4e8 sand-12oo3zp sand-1t137rt")} onChange={(os)=>setU({
                            ...V,
                            draft: os.target.value
                        })} onKeyDown={(os)=>{
                        if (os.key === "Enter") {
                            Y();
                        }
                        if (os.key === "Escape") {
                            setU(null);
                        }
                    }} type="text" value={V.draft}/> : <span className={r_2({
                        0: {
                            className: "sand-9f619 sand-b3r6kr sand-11wthnw sand-d4r4e8 sand-12oo3zp sand-1wd3ewq sand-lyipyv sand-uxw1ft"
                        },
                        1: {
                            className: "sand-2lah0s sand-4b2ntj sand-1wm8ruf sand-1d3mw78 sand-uxw1ft"
                        }
                    }[!!ss << 0].className)}>{_}</span>}{k && !as ? <button aria-expanded={V != null} aria-label={V != null ? __1({
                        id: "xzJ6xV",
                        values: {
                            label: _
                        }
                    }) : __1({
                        id: "tT4tWM",
                        values: {
                            label: _
                        }
                    })} className={r_2("sand-9f619 sand-3nfvp2 sand-6s0dn4 sand-1c4vz4f sand-2lah0s sand-dl72j9 sand-1717udv sand-c342km sand-ng3xce sand-jbqb8w sand-4b2ntj sand-7gh5u8 sand-1ypdohk")} disabled={isBusy} onClick={()=>{
                        if (V != null) {
                            Y();
                            return;
                        }
                        setU({
                            accountKey: server.accountKey,
                            draft: server.accountKey,
                            isConfirmingRemove: false
                        });
                    }} type="button"><W aria-hidden name={V != null ? "check" : "pencil-square"} size="xs"/></button> : null}</span>{V != null && Q ? <span className="sand-9f619 sand-1wm8ruf sand-1d3mw78 sand-12oo3zp sand-1jh5svw"><T_1 id="wLsCed"/></span> : null}{server.status === "error" && ps != null ? <span className={r_2("sand-plugins-detail__account-error", "sand-9f619 sand-1wm8ruf sand-1d3mw78 sand-12oo3zp sand-19aaqeu sand-j0a0fe sand-eaf4i8 sand-1hx0egp sand-1ed109x")}>{ps}</span> : null}</span><span className={r_2("sand-9f619 sand-3nfvp2 sand-6s0dn4 sand-167g77z sand-1c4vz4f sand-2lah0s sand-dl72j9")}>{V == null ? <><C_1 server={server}/><C_2 isBusy={isBusy} onAuthenticate={(serverId)=>onAuthenticate({
                            serverId,
                            accountKey: as ? accountKey : server.accountKey
                        })} server={server}/>{f8(server) ? <NeComponent isBusy={isBusy} isConfirming={v === server.serverIdentifier} onConfirm={()=>{
                        setV(null);
                        onRemoveAccount({
                            serverId,
                            accountKey
                        });
                    }} onStart={()=>setV(server.serverIdentifier)} title={server.name}/> : null}</> : Nn(server) ? V.isConfirmingRemove ? <X aria-label={__1({
                        id: "XjTWWS",
                        values: {
                            label: _
                        }
                    })} disabled={isBusy} onClick={()=>{
                        setU(null);
                        onRemoveAccount({
                            serverId,
                            accountKey: server.accountKey
                        });
                    }} sentiment="danger" size="sm" type="button"><T_1 id="tIBXVv"/></X> : <X aria-label={__1({
                        id: "Z+kvAO",
                        values: {
                            label: _
                        }
                    })} disabled={isBusy} onClick={()=>setU({
                            ...V,
                            isConfirmingRemove: true
                        })} sentiment="danger" size="sm" type="button" variant="secondary"><T_1 id="t/YqKh"/></X> : null}</span></div>{fs ? <S_1 isBusy={isBusy}/> : null}</div>;
                };
                s[61] = __1;
                s[62] = k;
                s[63] = v;
                s[64] = u;
                s[65] = i18n;
                s[66] = isBusy;
                s[67] = Q;
                s[68] = onAuthenticate;
                s[69] = onRemoveAccount;
                s[70] = serverId;
                s[71] = Y;
                s[72] = q;
            } else {
                q = s[72];
            }
            L = slots.map(q);
            s[48] = __1;
            s[49] = k;
            s[50] = v;
            s[51] = u;
            s[52] = i18n;
            s[53] = isBusy;
            s[54] = Q;
            s[55] = onAuthenticate;
            s[56] = onRemoveAccount;
            s[57] = serverId;
            s[58] = slots;
            s[59] = Y;
            s[60] = L;
        } else {
            L = s[60];
        }
        E = F.map(({ key, label })=><div key={key}><div aria-hidden className={r_2("sand-9f619 sand-28ko6u sand-1diwwjn sand-bmvrgn sand-1m4ooaa")}/><div className={r_2("sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-167g77z sand-z9dl7a sand-1pic42t sand-sag5q8 sand-1onr9mi")}><span className={r_2("sand-9f619 sand-b3r6kr sand-11wthnw sand-d4r4e8 sand-12oo3zp sand-1wd3ewq sand-lyipyv sand-uxw1ft")}>{ed(label)}</span><span className={r_2("sand-9f619 sand-3nfvp2 sand-6s0dn4 sand-167g77z sand-1c4vz4f sand-2lah0s sand-dl72j9")}><W aria-hidden modifier="spin" name="loading" size="sm"/><Es disabled={isBusy} onClick={()=>ec(key, f, ()=>onAddAccount({
                        serverId,
                        label
                    }))} size="sm" type="button" variant="secondary"><T_1 id="M7SqjM"/></Es></span></div></div>);
        s[4] = __1;
        s[5] = h;
        s[6] = k;
        s[7] = v;
        s[8] = u;
        s[9] = p;
        s[10] = i18n;
        s[11] = isBusy;
        s[12] = onAddAccount;
        s[13] = onAuthenticate;
        s[14] = onRemoveAccount;
        s[15] = onRenameAccount;
        s[16] = f;
        s[17] = o_rowServerIdentifier;
        s[18] = serverId;
        s[19] = C;
        s[20] = T;
        s[21] = slots;
        s[22] = S;
        s[23] = P;
        s[24] = D;
        s[25] = L;
        s[26] = E;
        s[27] = O;
    } else {
        S = s[22];
        P = s[23];
        D = s[24];
        L = s[25];
        E = s[26];
        O = s[27];
    }
    let $;
    if (s[73] !== __1 || s[74] !== h || s[75] !== k || s[76] !== isBusy || s[77] !== S || s[78] !== P) {
        $ = k ? <><div aria-hidden className={r_2("sand-9f619 sand-28ko6u sand-1diwwjn sand-bmvrgn sand-1m4ooaa")}/>{h == null ? <button className={r_2("sand-plugins-detail__add-account", "sand-9f619 sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-h8yej3 sand-z9dl7a sand-1pic42t sand-sag5q8 sand-1onr9mi sand-c342km sand-ng3xce sand-jbqb8w sand-19aaqeu sand-7gh5u8 sand-jb2p0i sand-11wthnw sand-12oo3zp sand-1yc453h sand-1ypdohk")} disabled={isBusy} onClick={()=>setH("")} type="button"><W aria-hidden name="plus" size="xs"/><T_1 id="FGnQEW"/></button> : <div className={r_2("sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-167g77z sand-z9dl7a sand-1pic42t sand-sag5q8 sand-1onr9mi")}><span className="sand-9f619 sand-78zum5 sand-dt5ytf sand-12mrbbr sand-euugli sand-1iyjqo2 sand-s83m0k sand-dl72j9"><input aria-label={__1({
            id: "R2hekE"
        })} autoFocus className={r_2("sand-9f619 sand-1iyjqo2 sand-s83m0k sand-dl72j9 sand-1i9suas sand-1fgtraw sand-mzvs34 sand-f159sx sand-ur7f20 sand-mkeg23 sand-1y0btm7 sand-qz0629 sand-18gyud7 sand-1wd3ewq sand-jb2p0i sand-1wm8ruf sand-1t137rt")} onChange={(F)=>setH(F.target.value)} onKeyDown={(F)=>{
            if (F.key === "Enter") {
                P();
            }
            if (F.key === "Escape") {
                setH(null);
            }
        }} placeholder={__1({
            id: "mwTfIH"
        })} type="text" value={h}/>{S ? <span className="sand-9f619 sand-1wm8ruf sand-1d3mw78 sand-12oo3zp sand-1jh5svw"><T_1 id="wLsCed"/></span> : null}</span><Es disabled={isBusy} onClick={P} size="sm" type="button"><T_1 id="yIVrHZ"/></Es><Es onClick={()=>setH(null)} size="sm" type="button" variant="ghost"><T_1 id="dEgA5A"/></Es></div>}</> : null;
        s[73] = __1;
        s[74] = h;
        s[75] = k;
        s[76] = isBusy;
        s[77] = S;
        s[78] = P;
        s[79] = $;
    } else {
        $ = s[79];
    }
    let K;
    if (s[80] !== D || s[81] !== L || s[82] !== E || s[83] !== $) {
        K = <div className={D}>{L}{E}{$}</div>;
        s[80] = D;
        s[81] = L;
        s[82] = E;
        s[83] = $;
        s[84] = K;
    } else {
        K = s[84];
    }
    let rs;
    if (s[85] !== O || s[86] !== K) {
        rs = <div>{O}{K}</div>;
        s[85] = O;
        s[86] = K;
        s[87] = rs;
    } else {
        rs = s[87];
    }
    return rs;
}
function kn(l) {
    return l.accountKey;
}
function wn(l) {
    return ea(l.serverIdentifier);
}
function NeComponent(l) {
    NeComponent.d = 1177;
    const s = c_1.c(16);
    const { title, isBusy, isConfirming, onStart, onConfirm } = l;
    const { _ } = u_1();
    if (isConfirming) {
        let f;
        if (s[0] !== _ || s[1] !== title) {
            f = _({
                id: "2Du68H",
                values: {
                    title
                }
            });
            s[0] = _;
            s[1] = title;
            s[2] = f;
        } else {
            f = s[2];
        }
        let p;
        if (s[3] === Symbol.for("react.memo_cache_sentinel")) {
            p = <T_1 id="Ddq3zT"/>;
            s[3] = p;
        } else {
            p = s[3];
        }
        let u;
        if (s[4] !== isBusy || s[5] !== onConfirm || s[6] !== f) {
            u = <X aria-label={f} disabled={isBusy} onClick={onConfirm} sentiment="danger" size="sm" type="button">{p}</X>;
            s[4] = isBusy;
            s[5] = onConfirm;
            s[6] = f;
            s[7] = u;
        } else {
            u = s[7];
        }
        return u;
    }
    let m;
    if (s[8] !== _ || s[9] !== title) {
        m = _({
            id: "W1vIjE",
            values: {
                title
            }
        });
        s[8] = _;
        s[9] = title;
        s[10] = m;
    } else {
        m = s[10];
    }
    let c;
    if (s[11] === Symbol.for("react.memo_cache_sentinel")) {
        c = <T_1 id="+K0AvT"/>;
        s[11] = c;
    } else {
        c = s[11];
    }
    let x;
    if (s[12] !== isBusy || s[13] !== onStart || s[14] !== m) {
        x = <X aria-label={m} disabled={isBusy} onClick={onStart} sentiment="danger" size="sm" type="button" variant="secondary">{c}</X>;
        s[12] = isBusy;
        s[13] = onStart;
        s[14] = m;
        s[15] = x;
    } else {
        x = s[15];
    }
    return x;
}
const zn = {
    sectionLabel: {
        kB7OPa: "sand-9f619",
        kLKAdn: "sand-1y1aw1k",
        kwRFfy: "sand-1pic42t",
        kGO01o: "sand-10b6aqq",
        kZCmMZ: "sand-1onr9mi",
        $$css: true
    }
};
const Sn = {
    className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-167g77z"
};
const ae = {
    className: "sand-9f619 sand-ixl9f9 sand-i07v4r"
};
const te = {
    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-167g77z sand-z9dl7a sand-1pic42t sand-sag5q8 sand-1onr9mi"
};
const Ys = {
    className: "sand-9f619 sand-28ko6u sand-1diwwjn sand-bmvrgn sand-1m4ooaa"
};
const _n = {
    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-167g77z sand-z9dl7a sand-1pic42t sand-sag5q8 sand-1onr9mi sand-11wthnw sand-d4r4e8 sand-19aaqeu"
};
const Cn = {
    className: "sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-11wthnw sand-d4r4e8 sand-1jh5svw"
};
const ge = {
    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-167g77z sand-z9dl7a sand-1pic42t sand-sag5q8 sand-1onr9mi sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-11wthnw sand-d4r4e8 sand-1jh5svw"
};
const In = {
    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-883omv sand-euugli"
};
const An = {
    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-1td3qas sand-10w6t97 sand-ur7f20 sand-b3r6kr sand-59yu97 sand-19aaqeu"
};
const ue = {
    className: "sand-h8yej3 sand-5yr21d sand-19kjcj4"
};
const Pn = {
    className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-12mrbbr sand-euugli"
};
const Ln = {
    className: "sand-b3r6kr sand-11wthnw sand-d4r4e8 sand-1rhlpx6 sand-1wd3ewq sand-lyipyv sand-uxw1ft"
};
const Rn = {
    className: "sand-1wm8ruf sand-1d3mw78 sand-1jh5svw"
};
const qn = {
    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-883omv sand-euugli"
};
const Tn = {
    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-gd8bvy sand-1fgtraw sand-u4hgxq sand-59yu97 sand-19aaqeu"
};
const Dn = {
    className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-12mrbbr sand-euugli"
};
const Fn = {
    className: "sand-b3r6kr sand-11wthnw sand-d4r4e8 sand-1wd3ewq sand-lyipyv sand-uxw1ft"
};
const En = {
    className: "sand-b3r6kr sand-1wm8ruf sand-1d3mw78 sand-4b2ntj sand-lyipyv sand-uxw1ft"
};
const Bn = {
    className: "sand-2lah0s sand-11wthnw sand-d4r4e8 sand-1wd3ewq sand-ss6m8b"
};
const On = {
    cash: {
        id: "/rHUhS"
    },
    investment: {
        id: "gpF4nE"
    },
    liability: {
        id: "plszrw"
    },
    unknown: {
        id: "AeXO77"
    }
};
const $n = {
    cash: "banknote",
    investment: "chart-line",
    liability: "credit-card",
    unknown: "wallet"
};
function ke(mask) {
    return `··${mask}`;
}
function Un(i18n, { amount, currency }) {
    if (amount == null) {
        return null;
    }
    const t = Number(amount);
    if (!Number.isFinite(t)) {
        return null;
    }
    if (currency == null) {
        return amount;
    }
    try {
        return i18n.number(t, {
            style: "currency",
            currency
        });
    } catch  {
        return `${amount} ${currency}`;
    }
}
function Kn(account, s) {
    if (account.name != null) {
        return account.name;
    }
    const e = [
        account.subtype,
        account.mask == null ? undefined : ke(account.mask)
    ].filter((a)=>a != null);
    if (e.length > 0) {
        return e.join(" · ");
    }
    return s;
}
function Mn(account, s) {
    return [
        s,
        account.mask == null ? undefined : ke(account.mask),
        account.subtype
    ].filter((e)=>e != null).join(" · ");
}
function Gn(connection, s) {
    return connection.institutionName ?? connection.accounts[0]?.name ?? s;
}
function Hn(connection) {
    return connection.status === "error" || connection.status === "disconnected";
}
async function Vn({ remove, connectionId, setFailed }) {
    setFailed(false);
    try {
        await remove(connectionId);
    } catch  {
        setFailed(true);
    }
}
async function Wn({ start, setFailed }) {
    setFailed(false);
    try {
        const e = await start();
        setFailed(e.status !== "started");
    } catch  {
        setFailed(true);
    }
}
function We1Component(l) {
    We1Component.d = 1185;
    const s = c_1.c(5);
    const { connection } = l;
    if (connection.institutionLogo != null) {
        const src = `data:image/png;base64,${connection.institutionLogo}`;
        let i;
        if (s[0] !== src) {
            i = <img alt="" src={src} {...ue}/>;
            s[0] = src;
            s[1] = i;
        } else {
            i = s[1];
        }
        return i;
    }
    if (connection.institutionIconUrl != null) {
        let t;
        if (s[2] !== connection.institutionIconUrl) {
            t = <img alt="" src={connection.institutionIconUrl} {...ue}/>;
            s[2] = connection.institutionIconUrl;
            s[3] = t;
        } else {
            t = s[3];
        }
        return t;
    }
    let a;
    if (s[4] === Symbol.for("react.memo_cache_sentinel")) {
        a = <W aria-hidden name="building" size={16}/>;
        s[4] = a;
    } else {
        a = s[4];
    }
    return a;
}
function Ze1Component(l) {
    Ze1Component.d = 1179;
    const s = c_1.c(33);
    const { account } = l;
    const { i18n } = u_1();
    let t;
    let i;
    let d;
    let r;
    let m;
    let c;
    let x;
    let f;
    if (s[0] !== account || s[1] !== i18n) {
        const v = i18n._(On[account.accountClass]);
        let N;
        if (s[10] !== account.currency || s[11] !== account.currentBalance || s[12] !== i18n) {
            N = Un(i18n, {
                amount: account.currentBalance,
                currency: account.currency
            });
            s[10] = account.currency;
            s[11] = account.currentBalance;
            s[12] = i18n;
            s[13] = N;
        } else {
            N = s[13];
        }
        t = N;
        f = te;
        c = qn;
        const o = $n[account.accountClass];
        if (s[14] !== o) {
            x = <span aria-hidden {...Tn}><W name={o} size={14}/></span>;
            s[14] = o;
            s[15] = x;
        } else {
            x = s[15];
        }
        r = Dn;
        m = <span {...Fn}>{Kn(account, v)}</span>;
        i = En;
        d = Mn(account, v);
        s[0] = account;
        s[1] = i18n;
        s[2] = t;
        s[3] = i;
        s[4] = d;
        s[5] = r;
        s[6] = m;
        s[7] = c;
        s[8] = x;
        s[9] = f;
    } else {
        t = s[2];
        i = s[3];
        d = s[4];
        r = s[5];
        m = s[6];
        c = s[7];
        x = s[8];
        f = s[9];
    }
    let p;
    if (s[16] !== i || s[17] !== d) {
        p = <span {...i}>{d}</span>;
        s[16] = i;
        s[17] = d;
        s[18] = p;
    } else {
        p = s[18];
    }
    let u;
    if (s[19] !== r || s[20] !== m || s[21] !== p) {
        u = <span {...r}>{m}{p}</span>;
        s[19] = r;
        s[20] = m;
        s[21] = p;
        s[22] = u;
    } else {
        u = s[22];
    }
    let b;
    if (s[23] !== c || s[24] !== x || s[25] !== u) {
        b = <span {...c}>{x}{u}</span>;
        s[23] = c;
        s[24] = x;
        s[25] = u;
        s[26] = b;
    } else {
        b = s[26];
    }
    let h;
    if (s[27] !== t) {
        h = t != null ? <span {...Bn}>{t}</span> : null;
        s[27] = t;
        s[28] = h;
    } else {
        h = s[28];
    }
    let y;
    if (s[29] !== b || s[30] !== h || s[31] !== f) {
        y = <div {...f}>{b}{h}</div>;
        s[29] = b;
        s[30] = h;
        s[31] = f;
        s[32] = y;
    } else {
        y = s[32];
    }
    return y;
}
function SeComponent(l) {
    SeComponent.d = 1180;
    const s = c_1.c(38);
    const { connection, isBusy } = l;
    const { _ } = u_1();
    const { remove, isPending } = fa();
    const [r, setR] = r_1.useState(false);
    const [c, setC] = r_1.useState(false);
    let f;
    if (s[0] !== _ || s[1] !== connection) {
        f = Gn(connection, _({
            id: "yOxJ0/"
        }));
        s[0] = _;
        s[1] = connection;
        s[2] = f;
    } else {
        f = s[2];
    }
    const title = f;
    let u;
    if (s[3] !== connection) {
        u = <span aria-hidden {...An}><We1Component connection={connection}/></span>;
        s[3] = connection;
        s[4] = u;
    } else {
        u = s[4];
    }
    let b;
    if (s[5] !== title) {
        b = <span {...Ln}>{title}</span>;
        s[5] = title;
        s[6] = b;
    } else {
        b = s[6];
    }
    let h;
    if (s[7] !== connection) {
        h = Hn(connection) ? <span {...Rn}><T_1 id="NMW5sD"/></span> : null;
        s[7] = connection;
        s[8] = h;
    } else {
        h = s[8];
    }
    let y;
    if (s[9] !== b || s[10] !== h) {
        y = <span {...Pn}>{b}{h}</span>;
        s[9] = b;
        s[10] = h;
        s[11] = y;
    } else {
        y = s[11];
    }
    let v;
    if (s[12] !== u || s[13] !== y) {
        v = <span {...In}>{u}{y}</span>;
        s[12] = u;
        s[13] = y;
        s[14] = v;
    } else {
        v = s[14];
    }
    let N;
    if (s[15] !== _ || s[16] !== connection.connectionId || s[17] !== isBusy || s[18] !== r || s[19] !== isPending || s[20] !== remove || s[21] !== title) {
        N = r ? <X aria-label={_({
            id: "2Du68H",
            values: {
                title
            }
        })} disabled={isBusy || isPending} onClick={()=>{
            setR(false);
            Vn({
                remove,
                connectionId: connection.connectionId,
                setFailed: setC
            });
        }} sentiment="danger" size="sm" type="button"><T_1 id="Ddq3zT"/></X> : <X aria-label={_({
            id: "W1vIjE",
            values: {
                title
            }
        })} disabled={isBusy || isPending} onClick={()=>setR(true)} sentiment="danger" size="sm" type="button" variant="secondary"><T_1 id="+K0AvT"/></X>;
        s[15] = _;
        s[16] = connection.connectionId;
        s[17] = isBusy;
        s[18] = r;
        s[19] = isPending;
        s[20] = remove;
        s[21] = title;
        s[22] = N;
    } else {
        N = s[22];
    }
    let o;
    if (s[23] !== v || s[24] !== N) {
        o = <div {...te}>{v}{N}</div>;
        s[23] = v;
        s[24] = N;
        s[25] = o;
    } else {
        o = s[25];
    }
    let j;
    if (s[26] !== connection.accounts) {
        j = connection.accounts.map(ZnComponent);
        s[26] = connection.accounts;
        s[27] = j;
    } else {
        j = s[27];
    }
    let k;
    if (s[28] !== connection.accounts.length || s[29] !== connection.hasSynced) {
        k = connection.accounts.length === 0 ? <><div aria-hidden {...Ys}/><div {..._n}>{connection.hasSynced ? <T_1 id="0yjW5y"/> : <T_1 id="BOcHTG"/>}</div></> : null;
        s[28] = connection.accounts.length;
        s[29] = connection.hasSynced;
        s[30] = k;
    } else {
        k = s[30];
    }
    let w;
    if (s[31] !== c) {
        w = c ? <><div aria-hidden {...Ys}/><p role="alert" {...ge}><T_1 id="mkcO2d"/></p></> : null;
        s[31] = c;
        s[32] = w;
    } else {
        w = s[32];
    }
    let A;
    if (s[33] !== k || s[34] !== w || s[35] !== o || s[36] !== j) {
        A = <div {...ae}>{o}{j}{k}{w}</div>;
        s[33] = k;
        s[34] = w;
        s[35] = o;
        s[36] = j;
        s[37] = A;
    } else {
        A = s[37];
    }
    return A;
}
function ZnComponent(account) {
    return <div key={account.accountId}><div aria-hidden {...Ys}/><Ze1Component account={account}/></div>;
}
function EComponent(l) {
    EComponent.d = 1182;
    const s = c_1.c(4);
    const { onRetry } = l;
    let a;
    if (s[0] === Symbol.for("react.memo_cache_sentinel")) {
        a = <span {...Cn}><T_1 id="r2LrGR"/></span>;
        s[0] = a;
    } else {
        a = s[0];
    }
    let t;
    if (s[1] === Symbol.for("react.memo_cache_sentinel")) {
        t = <T_1 id="qJb6G2"/>;
        s[1] = t;
    } else {
        t = s[1];
    }
    let i;
    if (s[2] !== onRetry) {
        i = <div {...ae}><div role="alert" {...te}>{a}<Es onClick={onRetry} size="sm" type="button" variant="secondary">{t}</Es></div></div>;
        s[2] = onRetry;
        s[3] = i;
    } else {
        i = s[3];
    }
    return i;
}
function CeComponent(l) {
    CeComponent.d = 1181;
    const s = c_1.c(25);
    const { overview, isBusy, hasFailed, onRetry } = l;
    const { _ } = u_1();
    const { start, isPending } = e8();
    const [c, setC] = r_1.useState(false);
    let f;
    if (s[0] === Symbol.for("react.memo_cache_sentinel")) {
        f = <Us1 as="h3" color="tertiary" rootStyle={zn.sectionLabel} size="sm"><T_1 id="bPwFdf"/></Us1>;
        s[0] = f;
    } else {
        f = s[0];
    }
    let p;
    if (s[1] !== isBusy || s[2] !== overview.connections) {
        let k;
        if (s[4] !== isBusy) {
            k = (connection)=><SeComponent key={connection.connectionId} connection={connection} isBusy={isBusy}/>;
            s[4] = isBusy;
            s[5] = k;
        } else {
            k = s[5];
        }
        p = overview.connections.map(k);
        s[1] = isBusy;
        s[2] = overview.connections;
        s[3] = p;
    } else {
        p = s[3];
    }
    let u;
    if (s[6] !== hasFailed || s[7] !== onRetry) {
        u = hasFailed ? <EComponent onRetry={onRetry}/> : null;
        s[6] = hasFailed;
        s[7] = onRetry;
        s[8] = u;
    } else {
        u = s[8];
    }
    let b;
    if (s[9] !== c) {
        b = c ? <div {...ae}><p role="alert" {...ge}><T_1 id="Bjts9t"/></p></div> : null;
        s[9] = c;
        s[10] = b;
    } else {
        b = s[10];
    }
    let h;
    if (s[11] !== _) {
        h = _({
            id: "MPPZ54"
        });
        s[11] = _;
        s[12] = h;
    } else {
        h = s[12];
    }
    const y = isBusy || isPending;
    let v;
    if (s[13] !== start) {
        v = ()=>{
            Wn({
                start,
                setFailed: setC
            });
        };
        s[13] = start;
        s[14] = v;
    } else {
        v = s[14];
    }
    let N;
    if (s[15] === Symbol.for("react.memo_cache_sentinel")) {
        N = <T_1 id="5a1gAl"/>;
        s[15] = N;
    } else {
        N = s[15];
    }
    let o;
    if (s[16] !== h || s[17] !== y || s[18] !== v) {
        o = <div><Es aria-label={h} disabled={y} onClick={v} size="sm" type="button" variant="secondary">{N}</Es></div>;
        s[16] = h;
        s[17] = y;
        s[18] = v;
        s[19] = o;
    } else {
        o = s[19];
    }
    let j;
    if (s[20] !== p || s[21] !== u || s[22] !== b || s[23] !== o) {
        j = <div>{f}<div {...Sn}>{p}{u}{b}{o}</div></div>;
        s[20] = p;
        s[21] = u;
        s[22] = b;
        s[23] = o;
        s[24] = j;
    } else {
        j = s[24];
    }
    return j;
}
const Jn = {
    connections: [],
    pendingLinkSessions: 0
};
function IeComponent(l) {
    IeComponent.d = 1184;
    const s = c_1.c(5);
    const { isBusy } = l;
    const { overview, hasFailed, refetch } = f9();
    const overview_1 = overview ?? Jn;
    let r;
    if (s[0] !== hasFailed || s[1] !== isBusy || s[2] !== refetch || s[3] !== overview_1) {
        r = <CeComponent hasFailed={hasFailed} isBusy={isBusy} onRetry={refetch} overview={overview_1}/>;
        s[0] = hasFailed;
        s[1] = isBusy;
        s[2] = refetch;
        s[3] = overview_1;
        s[4] = r;
    } else {
        r = s[4];
    }
    return r;
}
function Le1Component(l) {
    Le1Component.d = 1183;
    const s = c_1.c(8);
    let e;
    let a;
    let t;
    if (s[0] !== l) {
        ({ financeKeys: e, ...a } = l);
        t = a.slots.find(i);
        s[0] = l;
        s[1] = e;
        s[2] = a;
        s[3] = t;
    } else {
        e = s[1];
        a = s[2];
        t = s[3];
    }
    if ((t ?? (e?.some(a_1) === true ? a.slots[0] : undefined)) != null) {
        let m;
        if (s[4] !== a) {
            m = <IeComponent {...a}/>;
            s[4] = a;
            s[5] = m;
        } else {
            m = s[5];
        }
        return m;
    }
    let r;
    if (s[6] !== a) {
        r = <Ve1Component {...a}/>;
        s[6] = a;
        s[7] = r;
    } else {
        r = s[7];
    }
    return r;
}
const ds = {
    description: {
        kB7OPa: "sand-9f619",
        keoZOQ: "sand-dj266r",
        k71WvV: "sand-14z9mp",
        k1K539: "sand-at24cr",
        keTefX: "sand-1lziwak",
        kMwMTN: "sand-19aaqeu",
        $$css: true
    },
    sectionLabel: {
        kB7OPa: "sand-9f619",
        kLKAdn: "sand-1y1aw1k",
        kwRFfy: "sand-1pic42t",
        kGO01o: "sand-10b6aqq",
        kZCmMZ: "sand-1onr9mi",
        $$css: true
    },
    detailsRow: {
        kB7OPa: "sand-9f619",
        k1xSpc: "sand-78zum5",
        kGNEyG: "sand-6s0dn4",
        kjj79g: "sand-1qughib",
        kOIVth: "sand-167g77z",
        kLKAdn: "sand-z9dl7a",
        kwRFfy: "sand-1pic42t",
        kGO01o: "sand-sag5q8",
        kZCmMZ: "sand-1onr9mi",
        $$css: true
    },
    summaryRow: {
        kysU6D: "sand-jyslct",
        k3lkva: "sand-1lugfcp",
        kzqmXN: "sand-h8yej3",
        keoZOQ: "sand-dj266r",
        k71WvV: "sand-14z9mp",
        k1K539: "sand-at24cr",
        keTefX: "sand-1lziwak",
        kMzoRj: "sand-c342km",
        ksu8eU: "sand-ng3xce",
        kaIpWk: "sand-ixl9f9",
        kMv6JI: "sand-jb2p0i",
        kGuDYH: "sand-1qlqyl8",
        k9WMMc: "sand-1yc453h",
        kkrTdU: "sand-1ypdohk",
        $$css: true
    },
    summaryRowExpanded: {
        kVL7Gh: "sand-biv7yw",
        kT0f0o: "sand-16uus16",
        $$css: true
    },
    revealMoreRow: {
        kjj79g: "sand-13a6bvl",
        krdFHd: "sand-15mokao",
        kfmiAY: "sand-1ga7v0g",
        $$css: true
    }
};
const Xn = "—";
const Qn = 5;
const Us = {
    className: "sand-9f619 sand-28ko6u sand-1diwwjn sand-bmvrgn sand-1m4ooaa"
};
const Xs = {
    className: "sand-9f619 sand-2lah0s sand-thy2uy sand-b3r6kr sand-uxw1ft sand-lyipyv sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-11wthnw sand-d4r4e8 sand-12oo3zp sand-1wd3ewq"
};
const Ae = {
    className: "sand-9f619 sand-dj266r sand-2fvf9 sand-at24cr sand-1lziwak sand-b3r6kr sand-11wthnw sand-d4r4e8 sand-12oo3zp sand-4b2ntj sand-p4054r sand-lyipyv sand-uxw1ft"
};
const Yn = {
    className: "sand-9f619 sand-ixl9f9 sand-i07v4r"
};
const sa = {
    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-167g77z sand-z9dl7a sand-1pic42t sand-sag5q8 sand-1onr9mi sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-11wthnw sand-d4r4e8 sand-12oo3zp sand-19aaqeu"
};
export function DetailsList(l) {
    DetailsList.d = 1190;
    const s = c_1.c(10);
    const { label, rows } = l;
    let t;
    if (s[0] !== label) {
        t = <Us1 as="h3" color="tertiary" rootStyle={ds.sectionLabel} size="sm">{label}</Us1>;
        s[0] = label;
        s[1] = t;
    } else {
        t = s[1];
    }
    let i;
    if (s[2] === Symbol.for("react.memo_cache_sentinel")) {
        i = {
            className: "sand-ixl9f9 sand-i07v4r sand-9f619 sand-78zum5 sand-dt5ytf sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak"
        };
        s[2] = i;
    } else {
        i = s[2];
    }
    let d;
    if (s[3] !== rows) {
        d = rows.map(EaComponent);
        s[3] = rows;
        s[4] = d;
    } else {
        d = s[4];
    }
    let r;
    if (s[5] !== d) {
        r = <dl {...i}>{d}</dl>;
        s[5] = d;
        s[6] = r;
    } else {
        r = s[6];
    }
    let m;
    if (s[7] !== t || s[8] !== r) {
        m = <div>{t}{r}</div>;
        s[7] = t;
        s[8] = r;
        s[9] = m;
    } else {
        m = s[9];
    }
    return m;
}
function EaComponent(l, s) {
    return <r_1.Fragment key={l.term}>{s > 0 ? <div aria-hidden {...Us}/> : null}<div className="sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-167g77z sand-z9dl7a sand-1pic42t sand-sag5q8 sand-1onr9mi"><dt {...Xs}>{l.term}</dt><dd title={l.value ?? undefined} {...Ae}>{l.value ?? Xn}</dd></div></r_1.Fragment>;
}
const na = {
    http: {
        id: "LUTGt0"
    },
    sse: {
        id: "bdyjwx"
    },
    stdio: {
        id: "sjVfrA"
    }
};
const Pe = "/dashboard/integrations?view=finance";
const Le = "https://cursor.com";
const aa = "http://localhost:4000";
export const FINANCE_INTEGRATIONS_DASHBOARD_URL = `${Le}${Pe}`;
export function financeIntegrationsDashboardUrl(l = true) {
    return `${l ? Le : aa}${Pe}`;
}
function la(entry, accountSlots, installedServer) {
    if (a_1(entry.name) || a_1(entry.displayName) || a_1(entry.pluginName) || installedServer != null && i(installedServer)) {
        return true;
    }
    return accountSlots.some(i);
}
function De1Component() {
    De1Component.d = 1192;
    const l = c_1.c(6);
    const s = bA();
    const { usesProductionBackend } = fh();
    const a = usesProductionBackend === undefined ? true : usesProductionBackend;
    let t;
    if (l[0] !== s || l[1] !== a) {
        t = ()=>{
            s(financeIntegrationsDashboardUrl(a));
        };
        l[0] = s;
        l[1] = a;
        l[2] = t;
    } else {
        t = l[2];
    }
    let i;
    if (l[3] === Symbol.for("react.memo_cache_sentinel")) {
        i = <T_1 id="iAL9tI"/>;
        l[3] = i;
    } else {
        i = l[3];
    }
    let d;
    if (l[4] !== t) {
        d = <X onClick={t} size="lg" type="button" variant="secondary">{i}</X>;
        l[4] = t;
        l[5] = d;
    } else {
        d = l[5];
    }
    return d;
}
function OsComponent(l) {
    OsComponent.d = 1193;
    const s = c_1.c(3);
    const { children } = l;
    let a;
    if (s[0] === Symbol.for("react.memo_cache_sentinel")) {
        a = {
            className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-167g77z sand-1c4vz4f sand-2lah0s sand-dl72j9"
        };
        s[0] = a;
    } else {
        a = s[0];
    }
    let t;
    if (s[1] !== children) {
        t = <div {...a}>{children}</div>;
        s[1] = children;
        s[2] = t;
    } else {
        t = s[2];
    }
    return t;
}
function Ce1Component(l) {
    Ce1Component.d = 1194;
    const s = c_1.c(21);
    const { mode, isBusy, shareButton, afterLabel, removalBlockedReason, onAction } = l;
    const { i18n } = u_1();
    let c;
    let x;
    let f;
    let p;
    if (s[0] !== afterLabel || s[1] !== i18n || s[2] !== isBusy || s[3] !== mode || s[4] !== onAction || s[5] !== removalBlockedReason || s[6] !== shareButton) {
        const b = i_2(mode);
        const h = a_3(mode);
        c = b != null ? <X disabled size="lg" type="button" variant="tertiary">{i18n._(b)}</X> : null;
        x = afterLabel;
        f = shareButton;
        let y;
        if (s[11] !== i18n || s[12] !== isBusy || s[13] !== onAction || s[14] !== removalBlockedReason) {
            y = (v)=>{
                const N = <X disabled={isBusy || removalBlockedReason != null} onClick={()=>onAction(v.id)} size="lg" type="button" variant="secondary">{i18n._(v.label)}</X>;
                if (removalBlockedReason == null) {
                    return <r_1.Fragment key={v.id}>{N}</r_1.Fragment>;
                }
                return <Cn1 key={v.id} content={removalBlockedReason} openDelay={0}><span className="sand-3nfvp2">{N}</span></Cn1>;
            };
            s[11] = i18n;
            s[12] = isBusy;
            s[13] = onAction;
            s[14] = removalBlockedReason;
            s[15] = y;
        } else {
            y = s[15];
        }
        p = h.map(y);
        s[0] = afterLabel;
        s[1] = i18n;
        s[2] = isBusy;
        s[3] = mode;
        s[4] = onAction;
        s[5] = removalBlockedReason;
        s[6] = shareButton;
        s[7] = c;
        s[8] = x;
        s[9] = f;
        s[10] = p;
    } else {
        c = s[7];
        x = s[8];
        f = s[9];
        p = s[10];
    }
    let u;
    if (s[16] !== c || s[17] !== x || s[18] !== f || s[19] !== p) {
        u = <>{c}{x}{f}{p}</>;
        s[16] = c;
        s[17] = x;
        s[18] = f;
        s[19] = p;
        s[20] = u;
    } else {
        u = s[20];
    }
    return u;
}
function ReComponent(l) {
    ReComponent.d = 1199;
    const s = c_1.c(13);
    const { url } = l;
    const { _ } = u_1();
    const { status, copy } = aT();
    let d;
    if (s[0] !== _) {
        d = _({
            id: "Z8lGw6"
        });
        s[0] = _;
        s[1] = d;
    } else {
        d = s[1];
    }
    let r = d;
    if (status === "copied") {
        let f;
        if (s[2] !== _) {
            f = _({
                id: "6V3Ea3"
            });
            s[2] = _;
            s[3] = f;
        } else {
            f = s[3];
        }
        r = f;
    } else if (status === "error") {
        let f;
        if (s[4] !== _) {
            f = _({
                id: "9sj0G8"
            });
            s[4] = _;
            s[5] = f;
        } else {
            f = s[5];
        }
        r = f;
    }
    const leadingIcon = status === "copied" ? "check" : "link";
    let c;
    if (s[6] !== copy || s[7] !== url) {
        c = ()=>copy(url);
        s[6] = copy;
        s[7] = url;
        s[8] = c;
    } else {
        c = s[8];
    }
    let x;
    if (s[9] !== r || s[10] !== leadingIcon || s[11] !== c) {
        x = <X leadingIcon={leadingIcon} onClick={c} size="lg" type="button" variant="secondary">{r}</X>;
        s[9] = r;
        s[10] = leadingIcon;
        s[11] = c;
        s[12] = x;
    } else {
        x = s[12];
    }
    return x;
}
function QeComponent(l) {
    QeComponent.d = 1191;
    const s = c_1.c(32);
    const { label, summary, cardClassName, children } = l;
    const [d, setD] = r_1.useState(false);
    const m = r_1.useId();
    let c;
    if (s[0] !== label) {
        c = <Us1 as="h3" color="tertiary" rootStyle={ds.sectionLabel} size="sm">{label}</Us1>;
        s[0] = label;
        s[1] = c;
    } else {
        c = s[1];
    }
    let x;
    if (s[2] !== cardClassName) {
        x = r_2(cardClassName, "sand-9f619 sand-ixl9f9 sand-i07v4r");
        s[2] = cardClassName;
        s[3] = x;
    } else {
        x = s[3];
    }
    const f = d ? m : undefined;
    let p;
    if (s[4] !== d) {
        p = r_2(p_1(ds.detailsRow, ds.summaryRow, d && ds.summaryRowExpanded, aK.interactive, aK.keyboardFocus).className);
        s[4] = d;
        s[5] = p;
    } else {
        p = s[5];
    }
    let u;
    if (s[6] === Symbol.for("react.memo_cache_sentinel")) {
        u = ()=>setD(ia);
        s[6] = u;
    } else {
        u = s[6];
    }
    let b;
    if (s[7] === Symbol.for("react.memo_cache_sentinel")) {
        b = r_2(Xs.className);
        s[7] = b;
    } else {
        b = s[7];
    }
    let h;
    if (s[8] !== summary) {
        h = <span className={b}>{summary}</span>;
        s[8] = summary;
        s[9] = h;
    } else {
        h = s[9];
    }
    let y;
    if (s[10] !== d) {
        y = r_2({
            0: {
                className: "sand-9f619 sand-3nfvp2 sand-6s0dn4 sand-4b2ntj sand-11xpdln sand-1firant sand-wji4o3"
            },
            1: {
                className: "sand-9f619 sand-3nfvp2 sand-6s0dn4 sand-4b2ntj sand-11xpdln sand-1firant sand-wji4o3 sand-19jd1h0"
            }
        }[!!d << 0].className);
        s[10] = d;
        s[11] = y;
    } else {
        y = s[11];
    }
    let v;
    if (s[12] === Symbol.for("react.memo_cache_sentinel")) {
        v = <W name="chevron-down" size="xs"/>;
        s[12] = v;
    } else {
        v = s[12];
    }
    let N;
    if (s[13] !== y) {
        N = <span aria-hidden className={y}>{v}</span>;
        s[13] = y;
        s[14] = N;
    } else {
        N = s[14];
    }
    let o;
    if (s[15] !== d || s[16] !== N || s[17] !== f || s[18] !== p || s[19] !== h) {
        o = <button aria-controls={f} aria-expanded={d} className={p} onClick={u} type="button">{h}{N}</button>;
        s[15] = d;
        s[16] = N;
        s[17] = f;
        s[18] = p;
        s[19] = h;
        s[20] = o;
    } else {
        o = s[20];
    }
    let j;
    if (s[21] !== m || s[22] !== children || s[23] !== d) {
        j = d ? <div id={m}>{children}</div> : null;
        s[21] = m;
        s[22] = children;
        s[23] = d;
        s[24] = j;
    } else {
        j = s[24];
    }
    let k;
    if (s[25] !== o || s[26] !== j || s[27] !== x) {
        k = <div className={x}>{o}{j}</div>;
        s[25] = o;
        s[26] = j;
        s[27] = x;
        s[28] = k;
    } else {
        k = s[28];
    }
    let w;
    if (s[29] !== c || s[30] !== k) {
        w = <div>{c}{k}</div>;
        s[29] = c;
        s[30] = k;
        s[31] = w;
    } else {
        w = s[31];
    }
    return w;
}
function ia(l) {
    return !l;
}
async function da({ toggle, serverId, toolName, applyOptimisticToggle, setToggleFailure }) {
    applyOptimisticToggle(toolName);
    try {
        await toggle({
            serverId,
            toolName
        });
        setToggleFailure(null);
    } catch (error) {
        setToggleFailure(error instanceof Error ? error.message : String(error));
    }
}
export function PluginToolsSection(l) {
    PluginToolsSection.d = 1200;
    const s = c_1.c(22);
    const { serverId } = l;
    const { _ } = u_1();
    const { tools } = fb(serverId);
    const { toggle } = fc();
    const [d, setD] = r_1.useState(null);
    const [optimisticT, setOptimisticT] = r_1.useOptimistic(tools, ra);
    const [, startTransition] = r_1.useTransition();
    if (optimisticT.length === 0) {
        return null;
    }
    let f;
    let cardClassName;
    let u;
    let summary;
    let h;
    if (s[0] !== _ || s[1] !== setOptimisticT || s[2] !== optimisticT || s[3] !== serverId || s[4] !== startTransition || s[5] !== toggle) {
        const enabledCount = optimisticT.filter(ca).length;
        const o = t(optimisticT);
        f = QeComponent;
        cardClassName = "sand-plugins-detail__tools";
        if (s[11] !== _) {
            u = _({
                id: "xdA/+p"
            });
            s[11] = _;
            s[12] = u;
        } else {
            u = s[12];
        }
        summary = _({
            id: "bWyJ+b",
            values: {
                0: optimisticT.length,
                enabledCount
            }
        });
        h = optimisticT.map((j)=><r_1.Fragment key={j.name}><div aria-hidden className={r_2(Us.className)}/><div className={r_2(p_1(ds.detailsRow).className)}><span className={r_2(Xs.className)} title={j.description}>{o.get(j.name) ?? j.name}</span><H isChecked={!j.isDisabled} label={j.isDisabled ? _({
                id: "FZtBeR",
                values: {
                    0: o.get(j.name) ?? j.name
                }
            }) : _({
                id: "y5UgU8",
                values: {
                    0: o.get(j.name) ?? j.name
                }
            })} onToggle={()=>{
                startTransition(()=>da({
                        toggle,
                        serverId,
                        toolName: j.name,
                        applyOptimisticToggle: setOptimisticT,
                        setToggleFailure: setD
                    }));
            }}/></div></r_1.Fragment>);
        s[0] = _;
        s[1] = setOptimisticT;
        s[2] = optimisticT;
        s[3] = serverId;
        s[4] = startTransition;
        s[5] = toggle;
        s[6] = f;
        s[7] = cardClassName;
        s[8] = u;
        s[9] = summary;
        s[10] = h;
    } else {
        f = s[6];
        cardClassName = s[7];
        u = s[8];
        summary = s[9];
        h = s[10];
    }
    let y;
    if (s[13] !== d) {
        y = d != null ? <><div aria-hidden className={r_2(Us.className)}/><p className={r_2("sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-167g77z sand-z9dl7a sand-1pic42t sand-sag5q8 sand-1onr9mi sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-11wthnw sand-d4r4e8 sand-12oo3zp sand-pmgbkh")} role="alert">{d}</p></> : null;
        s[13] = d;
        s[14] = y;
    } else {
        y = s[14];
    }
    let v;
    if (s[15] !== f || s[16] !== cardClassName || s[17] !== u || s[18] !== summary || s[19] !== h || s[20] !== y) {
        v = j_1.jsxs(f, {
            cardClassName,
            label: u,
            summary,
            children: [
                h,
                y
            ]
        });
        s[15] = f;
        s[16] = cardClassName;
        s[17] = u;
        s[18] = summary;
        s[19] = h;
        s[20] = y;
        s[21] = v;
    } else {
        v = s[21];
    }
    return v;
}
function ca(l) {
    return !l.isDisabled;
}
function ra(l, s) {
    return l.map((e)=>{
        if (e.name === s) {
            return {
                ...e,
                isDisabled: !e.isDisabled
            };
        }
        return e;
    });
}
function Se1Component(l) {
    Se1Component.d = 1189;
    const s = c_1.c(43);
    const { label, noun, cardClassName, items, isDisabled } = l;
    const r = isDisabled === undefined ? false : isDisabled;
    const { _ } = u_1();
    const [c, setC] = r_1.useState(false);
    const f = r_1.useId();
    if (items.length === 0) {
        return null;
    }
    let p;
    if (s[0] !== _ || s[1] !== noun) {
        p = _(noun === "connector" ? {
            id: "cQpGeE"
        } : {
            id: "OZJeTZ"
        });
        s[0] = _;
        s[1] = noun;
        s[2] = p;
    } else {
        p = s[2];
    }
    const u = p;
    let b;
    if (s[3] !== c || s[4] !== items) {
        b = c ? items : items.slice(0, Qn);
        s[3] = c;
        s[4] = items;
        s[5] = b;
    } else {
        b = s[5];
    }
    const h = b;
    const hiddenCount = items.length - h.length;
    const v = r || undefined;
    let N;
    if (s[6] !== r) {
        N = ({
            0: {},
            1: {
                className: "sand-byyjgo"
            }
        })[!!r << 0];
        s[6] = r;
        s[7] = N;
    } else {
        N = s[7];
    }
    let o;
    if (s[8] === Symbol.for("react.memo_cache_sentinel")) {
        o = r_2("sand-9f619 sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-1y1aw1k sand-1pic42t sand-10b6aqq sand-1onr9mi");
        s[8] = o;
    } else {
        o = s[8];
    }
    let j;
    if (s[9] !== label) {
        j = <Us1 as="h3" color="primary" size="sm">{label}</Us1>;
        s[9] = label;
        s[10] = j;
    } else {
        j = s[10];
    }
    let k;
    if (s[11] === Symbol.for("react.memo_cache_sentinel")) {
        k = r_2("sand-4b2ntj");
        s[11] = k;
    } else {
        k = s[11];
    }
    let w;
    if (s[12] !== items.length || s[13] !== k) {
        w = <Us1 as="span" className={k} size="sm">{items.length}</Us1>;
        s[12] = items.length;
        s[13] = k;
        s[14] = w;
    } else {
        w = s[14];
    }
    let A;
    if (s[15] !== o || s[16] !== j || s[17] !== w) {
        A = <div className={o}>{j}{w}</div>;
        s[15] = o;
        s[16] = j;
        s[17] = w;
        s[18] = A;
    } else {
        A = s[18];
    }
    let T;
    if (s[19] !== cardClassName) {
        T = r_2(cardClassName, "sand-9f619 sand-ixl9f9 sand-i07v4r");
        s[19] = cardClassName;
        s[20] = T;
    } else {
        T = s[20];
    }
    let R;
    if (s[21] !== noun || s[22] !== u || s[23] !== h) {
        let D;
        if (s[25] !== noun || s[26] !== u) {
            D = (L, E)=><r_1.Fragment key={L.name}>{E > 0 ? <div aria-hidden className={r_2(Us.className)}/> : null}<div className={r_2("sand-9f619 sand-78zum5 sand-6s0dn4 sand-167g77z sand-z9dl7a sand-1pic42t sand-sag5q8 sand-1onr9mi sand-1nhvcw1")}><span className={r_2("sand-78zum5 sand-2lah0s sand-4b2ntj")}><W aria-hidden name={noun === "connector" ? "plug" : "cube"} size={16}/></span><span className={r_2("sand-78zum5 sand-dt5ytf sand-euugli")}><span className={r_2("sand-b3r6kr sand-1wd3ewq sand-11wthnw sand-d4r4e8 sand-lyipyv sand-uxw1ft")}>{L.name}</span><span className={r_2("sand-b3r6kr sand-4b2ntj sand-1wm8ruf sand-1d3mw78 sand-lyipyv sand-uxw1ft")} title={L.description}>{L.description.length > 0 ? L.description : u}</span></span></div></r_1.Fragment>;
            s[25] = noun;
            s[26] = u;
            s[27] = D;
        } else {
            D = s[27];
        }
        R = h.map(D);
        s[21] = noun;
        s[22] = u;
        s[23] = h;
        s[24] = R;
    } else {
        R = s[24];
    }
    let C;
    if (s[28] !== _ || s[29] !== hiddenCount || s[30] !== r || s[31] !== f) {
        C = hiddenCount > 0 ? <><div aria-hidden className={r_2(Us.className)}/><button aria-controls={f} aria-expanded={false} className={r_2(p_1(ds.detailsRow, ds.summaryRow, ds.revealMoreRow, aK.interactive, aK.keyboardFocus).className)} disabled={r} onClick={()=>setC(true)} type="button"><span className={r_2(Ae.className)}>{_({
            id: "UhKOdj",
            values: {
                hiddenCount
            }
        })}</span></button></> : null;
        s[28] = _;
        s[29] = hiddenCount;
        s[30] = r;
        s[31] = f;
        s[32] = C;
    } else {
        C = s[32];
    }
    let S;
    if (s[33] !== f || s[34] !== T || s[35] !== R || s[36] !== C) {
        S = <div className={T} id={f}>{R}{C}</div>;
        s[33] = f;
        s[34] = T;
        s[35] = R;
        s[36] = C;
        s[37] = S;
    } else {
        S = s[37];
    }
    let P;
    if (s[38] !== A || s[39] !== S || s[40] !== v || s[41] !== N) {
        P = <div aria-disabled={v} {...N}>{A}{S}</div>;
        s[38] = A;
        s[39] = S;
        s[40] = v;
        s[41] = N;
        s[42] = P;
    } else {
        P = s[42];
    }
    return P;
}
function TeComponent(l) {
    TeComponent.d = 1201;
    const s = c_1.c(8);
    const { isBusy, onEditSetup } = l;
    let t;
    let i;
    let d;
    let r;
    if (s[0] === Symbol.for("react.memo_cache_sentinel")) {
        t = <Us1 as="h3" color="tertiary" rootStyle={ds.sectionLabel} size="sm"><T_1 id="RDjuBN"/></Us1>;
        i = r_2("sand-plugins-detail__setup", "sand-9f619 sand-ixl9f9 sand-i07v4r");
        d = r_2(p_1(ds.detailsRow).className);
        r = <span className={r_2(Xs.className)}><T_1 id="mrRDVU"/></span>;
        s[0] = t;
        s[1] = i;
        s[2] = d;
        s[3] = r;
    } else {
        t = s[0];
        i = s[1];
        d = s[2];
        r = s[3];
    }
    let m;
    if (s[4] === Symbol.for("react.memo_cache_sentinel")) {
        m = <T_1 id="kDCdbL"/>;
        s[4] = m;
    } else {
        m = s[4];
    }
    let c;
    if (s[5] !== isBusy || s[6] !== onEditSetup) {
        c = <div>{t}<div className={i}><div className={d}>{r}<Es disabled={isBusy} onClick={onEditSetup} size="sm" type="button" variant="secondary">{m}</Es></div></div></div>;
        s[5] = isBusy;
        s[6] = onEditSetup;
        s[7] = c;
    } else {
        c = s[7];
    }
    return c;
}
function DeComponent() {
    DeComponent.d = 1202;
    const l = c_1.c(2);
    let s;
    if (l[0] === Symbol.for("react.memo_cache_sentinel")) {
        s = <Us1 as="h3" color="tertiary" rootStyle={ds.sectionLabel} size="sm"><T_1 id="bPwFdf"/></Us1>;
        l[0] = s;
    } else {
        s = l[0];
    }
    let e;
    if (l[1] === Symbol.for("react.memo_cache_sentinel")) {
        e = <div>{s}<div {...Yn}><p {...sa}><T_1 id="9IIGQU"/></p></div></div>;
        l[1] = e;
    } else {
        e = l[1];
    }
    return e;
}
export function InstalledServerDetailView(l) {
    InstalledServerDetailView.d = 1195;
    const s = c_1.c(113);
    const { server, accountSlots, isBusy, accountActions, icon, onUninstall } = l;
    const { i18n, _: __1 } = u_1();
    const { ToolIcon } = fd();
    const f = server.cursorScmProvider != null;
    let p;
    if (s[0] !== server.cursorScmProvider || s[1] !== server.url) {
        p = server.cursorScmProvider != null ? fe(server.cursorScmProvider) ?? null : r_3(undefined, server.url);
        s[0] = server.cursorScmProvider;
        s[1] = server.url;
        s[2] = p;
    } else {
        p = s[2];
    }
    const u = p;
    const { tools } = fb(server.id);
    let h;
    let y;
    let v;
    let N;
    let o;
    let j;
    let k;
    let w;
    let A;
    let T;
    if (s[3] !== ToolIcon || s[4] !== __1 || s[5] !== accountActions || s[6] !== accountSlots || s[7] !== u || s[8] !== i18n || s[9] !== icon?.iconId || s[10] !== icon?.iconUrl || s[11] !== f || s[12] !== isBusy || s[13] !== onUninstall || s[14] !== server || s[15] !== tools) {
        const enabledToolCount = tools.filter(ua).length;
        let L;
        if (s[26] !== server) {
            L = f_1(server);
            s[26] = server;
            s[27] = L;
        } else {
            L = s[27];
        }
        const E = L;
        let O;
        if (s[28] !== __1) {
            O = __1({
                id: "hO1TWp"
            });
            s[28] = __1;
            s[29] = O;
        } else {
            O = s[29];
        }
        let $ = O;
        if (f) {
            let _;
            if (s[30] !== __1) {
                _ = __1({
                    id: "+7fBMP"
                });
                s[30] = __1;
                s[31] = _;
            } else {
                _ = s[31];
            }
            $ = _;
        } else if (server.servedBy === "grok") {
            let _;
            if (s[32] !== __1) {
                _ = __1({
                    id: "dlHT84"
                });
                s[32] = __1;
                s[33] = _;
            } else {
                _ = s[33];
            }
            $ = _;
        } else if (server.isTeamServer) {
            let _;
            if (s[34] !== __1) {
                _ = __1({
                    id: "vhSOwR"
                });
                s[34] = __1;
                s[35] = _;
            } else {
                _ = s[35];
            }
            $ = _;
        }
        let K;
        if (s[36] !== __1 || s[37] !== server.command || s[38] !== server.url) {
            K = server.url != null ? {
                term: __1({
                    id: "IagCbF"
                }),
                value: server.url
            } : {
                term: __1({
                    id: "sjVfrA"
                }),
                value: server.command ?? null
            };
            s[36] = __1;
            s[37] = server.command;
            s[38] = server.url;
            s[39] = K;
        } else {
            K = s[39];
        }
        const rs = K;
        let F;
        if (s[40] !== server) {
            F = i(server) ? <De1Component/> : null;
            s[40] = server;
            s[41] = F;
        } else {
            F = s[41];
        }
        let Z;
        if (s[42] !== onUninstall || s[43] !== server.id) {
            Z = (_)=>{
                switch(_){
                    case "uninstall":
                        {
                            onUninstall(server.id);
                            return;
                        }
                    case "remove":
                        return;
                    default:
                        return _;
                }
            };
            s[42] = onUninstall;
            s[43] = server.id;
            s[44] = Z;
        } else {
            Z = s[44];
        }
        let es;
        if (s[45] !== isBusy || s[46] !== E || s[47] !== F || s[48] !== Z) {
            es = <Ce1Component afterLabel={F} isBusy={isBusy} mode={E} removalBlockedReason={null} shareButton={null} onAction={Z}/>;
            s[45] = isBusy;
            s[46] = E;
            s[47] = F;
            s[48] = Z;
            s[49] = es;
        } else {
            es = s[49];
        }
        const Q = es;
        let J = Q;
        if (f) {
            let _;
            if (s[50] !== isBusy || s[51] !== server) {
                _ = <Ne1Component isBusy={isBusy} server={server}/>;
                s[50] = isBusy;
                s[51] = server;
                s[52] = _;
            } else {
                _ = s[52];
            }
            J = _;
        } else if (i(server)) {
            let _;
            if (s[53] !== Q) {
                _ = <OsComponent>{Q}</OsComponent>;
                s[53] = Q;
                s[54] = _;
            } else {
                _ = s[54];
            }
            J = _;
        } else {
            if (server.servedBy === "grok") {
                J = null;
            }
        }
        let ls;
        if (s[55] === Symbol.for("react.memo_cache_sentinel")) {
            w = r_2("sand-plugins-detail", "sand-9f619 sand-78zum5 sand-dt5ytf sand-1665zp3");
            ls = r_2("sand-plugins-detail__header", "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-1xr8qbc sand-jodmca");
            s[55] = ls;
            s[56] = w;
        } else {
            ls = s[55];
            w = s[56];
        }
        const iconId = icon?.iconId;
        const iconUrl = icon?.iconUrl;
        let G;
        if (s[57] !== ToolIcon || s[58] !== server.name || s[59] !== iconId || s[60] !== iconUrl) {
            G = <ToolIcon iconId={iconId} iconUrl={iconUrl} name={server.name} size={56}/>;
            s[57] = ToolIcon;
            s[58] = server.name;
            s[59] = iconId;
            s[60] = iconUrl;
            s[61] = G;
        } else {
            G = s[61];
        }
        let ns;
        if (s[62] === Symbol.for("react.memo_cache_sentinel")) {
            ns = r_2("sand-9f619 sand-78zum5 sand-1iyjqo2 sand-s83m0k sand-dl72j9 sand-dt5ytf sand-195vfkc sand-euugli");
            s[62] = ns;
        } else {
            ns = s[62];
        }
        let q;
        if (s[63] === Symbol.for("react.memo_cache_sentinel")) {
            q = r_2("sand-19d36u7 sand-1o2sk6j sand-1deyeav sand-1rhlpx6");
            s[63] = q;
        } else {
            q = s[63];
        }
        let z;
        if (s[64] !== server.name) {
            z = <Us1 as="h3" className={q}>{server.name}</Us1>;
            s[64] = server.name;
            s[65] = z;
        } else {
            z = s[65];
        }
        let M;
        if (s[66] !== u) {
            M = u != null ? <span className={r_2("sand-9f619 sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-euugli sand-b3r6kr sand-11wthnw sand-d4r4e8 sand-12oo3zp sand-19aaqeu sand-uxw1ft")}><span className={r_2("sand-9f619 sand-euugli sand-b3r6kr sand-lyipyv")}>{u}</span></span> : null;
            s[66] = u;
            s[67] = M;
        } else {
            M = s[67];
        }
        let as;
        if (s[68] !== z || s[69] !== M) {
            as = <div className={ns}>{z}{M}</div>;
            s[68] = z;
            s[69] = M;
            s[70] = as;
        } else {
            as = s[70];
        }
        if (s[71] !== J || s[72] !== G || s[73] !== as) {
            A = <header className={ls}>{G}{as}{J}</header>;
            s[71] = J;
            s[72] = G;
            s[73] = as;
            s[74] = A;
        } else {
            A = s[74];
        }
        if (s[75] !== accountActions || s[76] !== accountSlots || s[77] !== isBusy) {
            T = <Le1Component isBusy={isBusy} slots={accountSlots} {...accountActions}/>;
            s[75] = accountActions;
            s[76] = accountSlots;
            s[77] = isBusy;
            s[78] = T;
        } else {
            T = s[78];
        }
        if (s[79] !== server.id) {
            y = <PluginToolsSection serverId={server.id}/>;
            s[79] = server.id;
            s[80] = y;
        } else {
            y = s[80];
        }
        h = DetailsList;
        if (s[81] !== __1) {
            k = __1({
                id: "URmyfc"
            });
            s[81] = __1;
            s[82] = k;
        } else {
            k = s[82];
        }
        let ss;
        if (s[83] !== __1) {
            ss = __1({
                id: "wdxz7K"
            });
            s[83] = __1;
            s[84] = ss;
        } else {
            ss = s[84];
        }
        if (s[85] !== $ || s[86] !== ss) {
            o = {
                term: ss,
                value: $
            };
            s[85] = $;
            s[86] = ss;
            s[87] = o;
        } else {
            o = s[87];
        }
        if (s[88] !== __1 || s[89] !== i18n || s[90] !== f || s[91] !== rs || s[92] !== server.transport) {
            j = f ? [] : [
                {
                    term: __1({
                        id: "bv4cFj"
                    }),
                    value: i18n._(na[server.transport])
                },
                rs
            ];
            s[88] = __1;
            s[89] = i18n;
            s[90] = f;
            s[91] = rs;
            s[92] = server.transport;
            s[93] = j;
        } else {
            j = s[93];
        }
        if (s[94] !== __1) {
            v = __1({
                id: "xdA/+p"
            });
            s[94] = __1;
            s[95] = v;
        } else {
            v = s[95];
        }
        N = tools.length > 0 ? __1({
            id: "CzixCu",
            values: {
                0: tools.length,
                enabledToolCount
            }
        }) : String(server.toolCount);
        s[3] = ToolIcon;
        s[4] = __1;
        s[5] = accountActions;
        s[6] = accountSlots;
        s[7] = u;
        s[8] = i18n;
        s[9] = icon?.iconId;
        s[10] = icon?.iconUrl;
        s[11] = f;
        s[12] = isBusy;
        s[13] = onUninstall;
        s[14] = server;
        s[15] = tools;
        s[16] = h;
        s[17] = y;
        s[18] = v;
        s[19] = N;
        s[20] = o;
        s[21] = j;
        s[22] = k;
        s[23] = w;
        s[24] = A;
        s[25] = T;
    } else {
        h = s[16];
        y = s[17];
        v = s[18];
        N = s[19];
        o = s[20];
        j = s[21];
        k = s[22];
        w = s[23];
        A = s[24];
        T = s[25];
    }
    let R;
    if (s[96] !== v || s[97] !== N) {
        R = {
            term: v,
            value: N
        };
        s[96] = v;
        s[97] = N;
        s[98] = R;
    } else {
        R = s[98];
    }
    let C;
    if (s[99] !== R || s[100] !== o || s[101] !== j) {
        C = [
            o,
            ...j,
            R
        ];
        s[99] = R;
        s[100] = o;
        s[101] = j;
        s[102] = C;
    } else {
        C = s[102];
    }
    let S;
    if (s[103] !== h || s[104] !== C || s[105] !== k) {
        S = j_1.jsx(h, {
            label: k,
            rows: C
        });
        s[103] = h;
        s[104] = C;
        s[105] = k;
        s[106] = S;
    } else {
        S = s[106];
    }
    let P;
    if (s[107] !== y || s[108] !== S || s[109] !== w || s[110] !== A || s[111] !== T) {
        P = <div className={w}>{A}{T}{y}{S}</div>;
        s[107] = y;
        s[108] = S;
        s[109] = w;
        s[110] = A;
        s[111] = T;
        s[112] = P;
    } else {
        P = s[112];
    }
    return P;
}
function ua(l) {
    return !l.isDisabled;
}
export function pluginAvailabilityLabel(l, s) {
    if (s.builtinServerIdentifier != null) {
        return l({
            id: "+7fBMP"
        });
    }
    if (s.marketplace?.ownership === "team") {
        return l({
            id: "vhSOwR"
        });
    }
    if (s.isPublicListed === true) {
        return l({
            id: "7d1a0d"
        });
    }
    return null;
}
export function PluginDetailLayout(l) {
    PluginDetailLayout.d = 1197;
    const s = c_1.c(7);
    const { header, children } = l;
    let t;
    if (s[0] === Symbol.for("react.memo_cache_sentinel")) {
        t = r_2("sand-plugins-detail", "sand-9f619 sand-78zum5 sand-dt5ytf sand-1665zp3");
        s[0] = t;
    } else {
        t = s[0];
    }
    let i;
    if (s[1] === Symbol.for("react.memo_cache_sentinel")) {
        i = r_2("sand-9f619 sand-78zum5 sand-dt5ytf sand-ou54vl");
        s[1] = i;
    } else {
        i = s[1];
    }
    let d;
    if (s[2] !== children) {
        d = <div className={i}>{children}</div>;
        s[2] = children;
        s[3] = d;
    } else {
        d = s[3];
    }
    let r;
    if (s[4] !== header || s[5] !== d) {
        r = <div className={t}>{header}{d}</div>;
        s[4] = header;
        s[5] = d;
        s[6] = r;
    } else {
        r = s[6];
    }
    return r;
}
export function PluginDetailHeader(l) {
    PluginDetailHeader.d = 1196;
    const s = c_1.c(46);
    const { entry, action } = l;
    const { _ } = u_1();
    const { ToolIcon, catalogEntryIcon, externalLinkHandlers } = fd();
    const m = bA();
    const { counts } = ff();
    let x;
    if (s[0] !== catalogEntryIcon || s[1] !== entry) {
        x = catalogEntryIcon(entry);
        s[0] = catalogEntryIcon;
        s[1] = entry;
        s[2] = x;
    } else {
        x = s[2];
    }
    const f = x;
    const p = entry.marketplace?.displayName;
    let u;
    if (s[3] !== _) {
        u = (rs)=>_({
                id: "bCbNMB",
                values: {
                    count: rs
                }
            });
        s[3] = _;
        s[4] = u;
    } else {
        u = s[4];
    }
    const b = u;
    const h = counts[entry.id];
    const y = h != null && h > 0;
    const href = entry.builtinServerIdentifier == null ? entry.repositoryUrl : undefined;
    let N;
    if (s[5] !== entry) {
        N = ye(entry);
        s[5] = entry;
        s[6] = N;
    } else {
        N = s[6];
    }
    const o = N;
    let j;
    let k;
    if (s[7] === Symbol.for("react.memo_cache_sentinel")) {
        j = r_2("sand-9f619 sand-78zum5 sand-dt5ytf sand-1v2ro7d");
        k = r_2("sand-plugins-detail__header", "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-1xr8qbc sand-jodmca");
        s[7] = j;
        s[8] = k;
    } else {
        j = s[7];
        k = s[8];
    }
    let w;
    if (s[9] !== ToolIcon || s[10] !== entry.displayName || s[11] !== f.iconId || s[12] !== f.iconUrl) {
        w = <ToolIcon iconId={f.iconId} iconUrl={f.iconUrl} name={entry.displayName} size={56}/>;
        s[9] = ToolIcon;
        s[10] = entry.displayName;
        s[11] = f.iconId;
        s[12] = f.iconUrl;
        s[13] = w;
    } else {
        w = s[13];
    }
    let A;
    let T;
    if (s[14] === Symbol.for("react.memo_cache_sentinel")) {
        A = r_2("sand-9f619 sand-78zum5 sand-1iyjqo2 sand-s83m0k sand-dl72j9 sand-dt5ytf sand-195vfkc sand-euugli");
        T = r_2("sand-9f619 sand-78zum5 sand-6s0dn4 sand-1jnr06f sand-euugli");
        s[14] = A;
        s[15] = T;
    } else {
        A = s[14];
        T = s[15];
    }
    let R;
    if (s[16] === Symbol.for("react.memo_cache_sentinel")) {
        R = r_2("sand-19d36u7 sand-1o2sk6j sand-1deyeav sand-1rhlpx6");
        s[16] = R;
    } else {
        R = s[16];
    }
    let C;
    if (s[17] !== entry.displayName) {
        C = <Us1 as="h3" className={R}>{entry.displayName}</Us1>;
        s[17] = entry.displayName;
        s[18] = C;
    } else {
        C = s[18];
    }
    let S;
    if (s[19] !== _ || s[20] !== o) {
        S = o != null ? <Dn1 label={_({
            id: "bXJKzj"
        })} url={o}/> : null;
        s[19] = _;
        s[20] = o;
        s[21] = S;
    } else {
        S = s[21];
    }
    let P;
    if (s[22] !== C || s[23] !== S) {
        P = <div className={T} data-detail-hero-title="">{C}{S}</div>;
        s[22] = C;
        s[23] = S;
        s[24] = P;
    } else {
        P = s[24];
    }
    let D;
    if (s[25] !== externalLinkHandlers || s[26] !== y || s[27] !== p || s[28] !== m || s[29] !== href || s[30] !== h || s[31] !== b) {
        D = p != null || y || href != null ? <span className={r_2("sand-9f619 sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-euugli sand-b3r6kr sand-11wthnw sand-d4r4e8 sand-12oo3zp sand-19aaqeu sand-uxw1ft")}>{p != null ? <span className={r_2("sand-9f619 sand-euugli sand-b3r6kr sand-lyipyv")}>{p}</span> : null}{p != null && y ? <span aria-hidden className={r_2("sand-9f619 sand-1c4vz4f sand-2lah0s sand-dl72j9")}>·</span> : null}{y ? <span className={r_2("sand-9f619 sand-1c4vz4f sand-2lah0s sand-dl72j9")}>{b(h)}</span> : null}{(p != null || y) && href != null ? <span aria-hidden className={r_2("sand-9f619 sand-1c4vz4f sand-2lah0s sand-dl72j9")}>·</span> : null}{href != null ? <a {...externalLinkHandlers(href, m)} className={r_2("sand-3nfvp2 sand-6s0dn4 sand-1jnr06f sand-19aaqeu sand-7gh5u8 sand-11wthnw sand-d4r4e8 sand-12oo3zp sand-krqix3 sand-1ypdohk sand-9f619 sand-1c4vz4f sand-2lah0s sand-dl72j9")} href={href} rel="noopener noreferrer" target="_blank"><T_1 id="HMUxPu"/><W name="arrow-right-up" size={13}/></a> : null}</span> : null;
        s[25] = externalLinkHandlers;
        s[26] = y;
        s[27] = p;
        s[28] = m;
        s[29] = href;
        s[30] = h;
        s[31] = b;
        s[32] = D;
    } else {
        D = s[32];
    }
    let L;
    if (s[33] !== P || s[34] !== D) {
        L = <div className={A}>{P}{D}</div>;
        s[33] = P;
        s[34] = D;
        s[35] = L;
    } else {
        L = s[35];
    }
    let E;
    if (s[36] !== action || s[37] !== L || s[38] !== w) {
        E = <header className={k}>{w}{L}{action}</header>;
        s[36] = action;
        s[37] = L;
        s[38] = w;
        s[39] = E;
    } else {
        E = s[39];
    }
    let O;
    if (s[40] === Symbol.for("react.memo_cache_sentinel")) {
        O = r_2("sand-plugins-detail__desc", p_1(a_.body1, ds.description).className);
        s[40] = O;
    } else {
        O = s[40];
    }
    let $;
    if (s[41] !== entry.description) {
        $ = <p className={O}>{entry.description}</p>;
        s[41] = entry.description;
        s[42] = $;
    } else {
        $ = s[42];
    }
    let K;
    if (s[43] !== E || s[44] !== $) {
        K = <div className={j}>{E}{$}</div>;
        s[43] = E;
        s[44] = $;
        s[45] = K;
    } else {
        K = s[45];
    }
    return K;
}
export function PluginDetailView(l) {
    PluginDetailView.d = 1198;
    const s = c_1.c(164);
    const { entry, installedServer, accountSlots, installedPlugin, installMode, isBusy, isAddPending, isPublishedByViewer, accountActions, onAdd, onUninstall, onUninstallPlugin, onEditSetup, onUnpublish } = l;
    const y = installMode === undefined ? null : installMode;
    const v = isAddPending === undefined ? false : isAddPending;
    const { _: __1 } = u_1();
    const { _: __2 } = u_1();
    const { counts } = ff();
    const { state } = cs_1();
    let w;
    if (s[0] !== __2) {
        w = (U)=>__2({
                id: "bCbNMB",
                values: {
                    count: U
                }
            });
        s[0] = __2;
        s[1] = w;
    } else {
        w = s[1];
    }
    const A = w;
    const T = counts[entry.id];
    let R;
    let C;
    let S;
    let P;
    let D;
    let L;
    let E;
    if (s[2] !== __2 || s[3] !== entry) {
        R = e(entry);
        C = entry.skills ?? [];
        S = entry.publisher?.displayName ?? null;
        let U;
        if (s[11] !== entry.websiteUrl) {
            U = r_3(entry.websiteUrl);
            s[11] = entry.websiteUrl;
            s[12] = U;
        } else {
            U = s[12];
        }
        E = U;
        P = entry.builtinServerIdentifier != null;
        D = R.length > 0 ? __2({
            id: "VdObnj",
            values: {
                0: R.length
            }
        }) : null;
        L = C.length > 0 ? __2({
            id: "Yb5NVb",
            values: {
                0: C.length
            }
        }) : null;
        s[2] = __2;
        s[3] = entry;
        s[4] = R;
        s[5] = C;
        s[6] = S;
        s[7] = P;
        s[8] = D;
        s[9] = L;
        s[10] = E;
    } else {
        R = s[4];
        C = s[5];
        S = s[6];
        P = s[7];
        D = s[8];
        L = s[9];
        E = s[10];
    }
    let O;
    if (s[13] !== D || s[14] !== L) {
        O = [
            D,
            L
        ].filter(ja);
        s[13] = D;
        s[14] = L;
        s[15] = O;
    } else {
        O = s[15];
    }
    const $ = O.join(", ");
    let K;
    s: {
        if (installedPlugin != null) {
            let U;
            if (s[16] !== installedPlugin) {
                U = p_2(installedPlugin);
                s[16] = installedPlugin;
                s[17] = U;
            } else {
                U = s[17];
            }
            K = U;
            break s;
        }
        if (installedServer != null) {
            let U;
            if (s[18] !== installedServer) {
                U = f_1(installedServer);
                s[18] = installedServer;
                s[19] = U;
            } else {
                U = s[19];
            }
            K = U;
            break s;
        }
        K = null;
    }
    const F = y ?? K;
    const Z = installedServer != null && (installedServer.cursorScmProvider == null || cu(installedServer)) ? installedServer : undefined;
    let es;
    if (s[20] !== accountSlots || s[21] !== Z) {
        es = Z ?? accountSlots.find(pa);
        s[20] = accountSlots;
        s[21] = Z;
        s[22] = es;
    } else {
        es = s[22];
    }
    const Q = es;
    let J;
    if (s[23] !== accountSlots || s[24] !== F) {
        J = F == null && accountSlots.some(ha);
        s[23] = accountSlots;
        s[24] = F;
        s[25] = J;
    } else {
        J = s[25];
    }
    const isDisabled = J;
    let Y;
    if (s[26] !== accountSlots.length || s[27] !== entry || s[28] !== state || s[29] !== F) {
        Y = F != null && state != null && accountSlots.length === 0 && fg(entry);
        s[26] = accountSlots.length;
        s[27] = entry;
        s[28] = state;
        s[29] = F;
        s[30] = Y;
    } else {
        Y = s[30];
    }
    const cs = Y;
    let G;
    if (s[31] !== entry) {
        G = ye(entry);
        s[31] = entry;
        s[32] = G;
    } else {
        G = s[32];
    }
    const ns = G;
    let q;
    if (s[33] !== ns) {
        q = ns != null ? <ReComponent url={ns}/> : null;
        s[33] = ns;
        s[34] = q;
    } else {
        q = s[34];
    }
    const shareButton = q;
    let M;
    if (s[35] !== isBusy || s[36] !== onUnpublish) {
        M = onUnpublish != null ? <div className="sand-9f619 sand-78zum5 sand-1nhvcw1 sand-1y1aw1k"><X disabled={isBusy} onClick={onUnpublish} sentiment="danger" size="lg" type="button" variant="secondary"><T_1 id="4DLZUa"/></X></div> : null;
        s[35] = isBusy;
        s[36] = onUnpublish;
        s[37] = M;
    } else {
        M = s[37];
    }
    const as = M;
    let ss;
    if (s[38] !== accountSlots || s[39] !== entry || s[40] !== installedServer || s[41] !== F) {
        ss = F != null && la(entry, accountSlots, installedServer);
        s[38] = accountSlots;
        s[39] = entry;
        s[40] = installedServer;
        s[41] = F;
        s[42] = ss;
    } else {
        ss = s[42];
    }
    const _ = ss;
    let V;
    if (s[43] !== _) {
        V = _ ? <De1Component/> : null;
        s[43] = _;
        s[44] = V;
    } else {
        V = s[44];
    }
    const ps = V;
    let fs;
    s: {
        if (installedServer?.cursorScmProvider != null) {
            let H;
            if (s[45] !== installedServer || s[46] !== isBusy) {
                H = <Ne1Component isBusy={isBusy} server={installedServer}/>;
                s[45] = installedServer;
                s[46] = isBusy;
                s[47] = H;
            } else {
                H = s[47];
            }
            fs = H;
            break s;
        }
        if (F != null) {
            let removalBlockedReason;
            if (s[48] !== __2 || s[49] !== isPublishedByViewer) {
                removalBlockedReason = isPublishedByViewer ? __2({
                    id: "Kvsbal"
                }) : null;
                s[48] = __2;
                s[49] = isPublishedByViewer;
                s[50] = removalBlockedReason;
            } else {
                removalBlockedReason = s[50];
            }
            let is;
            if (s[51] !== installedPlugin || s[52] !== installedServer || s[53] !== onUninstall || s[54] !== onUninstallPlugin) {
                is = (oe)=>{
                    switch(oe){
                        case "uninstall":
                        case "remove":
                            {
                                installedPlugin != null ? onUninstallPlugin?.(installedPlugin.pluginId) : installedServer != null && onUninstall(installedServer.id);
                                return;
                            }
                        default:
                            return oe;
                    }
                };
                s[51] = installedPlugin;
                s[52] = installedServer;
                s[53] = onUninstall;
                s[54] = onUninstallPlugin;
                s[55] = is;
            } else {
                is = s[55];
            }
            let ms;
            if (s[56] !== ps || s[57] !== isBusy || s[58] !== F || s[59] !== shareButton || s[60] !== removalBlockedReason || s[61] !== is) {
                ms = <OsComponent><Ce1Component afterLabel={ps} isBusy={isBusy} mode={F} removalBlockedReason={removalBlockedReason} shareButton={shareButton} onAction={is}/></OsComponent>;
                s[56] = ps;
                s[57] = isBusy;
                s[58] = F;
                s[59] = shareButton;
                s[60] = removalBlockedReason;
                s[61] = is;
                s[62] = ms;
            } else {
                ms = s[62];
            }
            fs = ms;
            break s;
        }
        if (v) {
            let H;
            if (s[63] !== __2 || s[64] !== entry.displayName) {
                H = __2({
                    id: "xcwvFe",
                    values: {
                        0: entry.displayName
                    }
                });
                s[63] = __2;
                s[64] = entry.displayName;
                s[65] = H;
            } else {
                H = s[65];
            }
            let is;
            if (s[66] !== H) {
                is = <Un1 label={H}/>;
                s[66] = H;
                s[67] = is;
            } else {
                is = s[67];
            }
            let ms;
            if (s[68] !== shareButton || s[69] !== is) {
                ms = <OsComponent>{shareButton}{is}</OsComponent>;
                s[68] = shareButton;
                s[69] = is;
                s[70] = ms;
            } else {
                ms = s[70];
            }
            fs = ms;
            break s;
        }
        let U;
        if (s[71] !== entry || s[72] !== onAdd) {
            U = ()=>onAdd(entry);
            s[71] = entry;
            s[72] = onAdd;
            s[73] = U;
        } else {
            U = s[73];
        }
        let Gs;
        if (s[74] === Symbol.for("react.memo_cache_sentinel")) {
            Gs = <T_1 id="m16xKo"/>;
            s[74] = Gs;
        } else {
            Gs = s[74];
        }
        let Fs;
        if (s[75] !== isBusy || s[76] !== U) {
            Fs = <X disabled={isBusy} onClick={U} size="lg" type="button" variant="primary">{Gs}</X>;
            s[75] = isBusy;
            s[76] = U;
            s[77] = Fs;
        } else {
            Fs = s[77];
        }
        let Hs;
        if (s[78] !== shareButton || s[79] !== Fs) {
            Hs = <OsComponent>{shareButton}{Fs}</OsComponent>;
            s[78] = shareButton;
            s[79] = Fs;
            s[80] = Hs;
        } else {
            Hs = s[80];
        }
        fs = Hs;
    }
    const action = fs;
    let header;
    if (s[81] !== action || s[82] !== entry) {
        header = <PluginDetailHeader action={action} entry={entry}/>;
        s[81] = action;
        s[82] = entry;
        s[83] = header;
    } else {
        header = s[83];
    }
    let xs;
    if (s[84] !== accountActions || s[85] !== accountSlots || s[86] !== Z || s[87] !== entry.displayName || s[88] !== entry.name || s[89] !== entry.pluginName || s[90] !== installedServer || s[91] !== isBusy) {
        xs = accountSlots.length > 0 && (installedServer == null || Z != null) ? <Le1Component financeKeys={[
            entry.name,
            entry.displayName,
            entry.pluginName
        ]} isBusy={isBusy} slots={accountSlots} {...accountActions}/> : null;
        s[84] = accountActions;
        s[85] = accountSlots;
        s[86] = Z;
        s[87] = entry.displayName;
        s[88] = entry.name;
        s[89] = entry.pluginName;
        s[90] = installedServer;
        s[91] = isBusy;
        s[92] = xs;
    } else {
        xs = s[92];
    }
    let bs;
    if (s[93] !== cs) {
        bs = cs ? <DeComponent/> : null;
        s[93] = cs;
        s[94] = bs;
    } else {
        bs = s[94];
    }
    let ys;
    if (s[95] !== Q) {
        ys = Q != null ? <PluginToolsSection serverId={Q.id}/> : null;
        s[95] = Q;
        s[96] = ys;
    } else {
        ys = s[96];
    }
    let vs;
    if (s[97] !== installedPlugin || s[98] !== installedServer || s[99] !== isBusy || s[100] !== onEditSetup) {
        vs = (installedPlugin != null || installedServer != null) && onEditSetup != null ? <TeComponent isBusy={isBusy} onEditSetup={onEditSetup}/> : null;
        s[97] = installedPlugin;
        s[98] = installedServer;
        s[99] = isBusy;
        s[100] = onEditSetup;
        s[101] = vs;
    } else {
        vs = s[101];
    }
    let Ns;
    if (s[102] !== __2) {
        Ns = __2({
            id: "VDvaN2"
        });
        s[102] = __2;
        s[103] = Ns;
    } else {
        Ns = s[103];
    }
    let gs;
    if (s[104] !== R || s[105] !== Ns) {
        gs = <Se1Component cardClassName="sand-plugins-detail__connectors" items={R} label={Ns} noun="connector"/>;
        s[104] = R;
        s[105] = Ns;
        s[106] = gs;
    } else {
        gs = s[106];
    }
    let ks;
    if (s[107] !== __2) {
        ks = __2({
            id: "PCSkw2"
        });
        s[107] = __2;
        s[108] = ks;
    } else {
        ks = s[108];
    }
    let ws;
    if (s[109] !== C || s[110] !== isDisabled || s[111] !== ks) {
        ws = <Se1Component cardClassName="sand-plugins-detail__skills" items={C} isDisabled={isDisabled} label={ks} noun="skill"/>;
        s[109] = C;
        s[110] = isDisabled;
        s[111] = ks;
        s[112] = ws;
    } else {
        ws = s[112];
    }
    let zs;
    if (s[113] !== __2) {
        zs = __2({
            id: "nSkB8g"
        });
        s[113] = __2;
        s[114] = zs;
    } else {
        zs = s[114];
    }
    let Ss;
    if (s[115] !== __2) {
        Ss = __2({
            id: "Qx7DM7"
        });
        s[115] = __2;
        s[116] = Ss;
    } else {
        Ss = s[116];
    }
    const Qs = $.length > 0 ? $ : null;
    let _s;
    if (s[117] !== Ss || s[118] !== Qs) {
        _s = {
            term: Ss,
            value: Qs
        };
        s[117] = Ss;
        s[118] = Qs;
        s[119] = _s;
    } else {
        _s = s[119];
    }
    let Cs;
    if (s[120] !== __2 || s[121] !== S || s[122] !== P) {
        Cs = S == null || P ? [] : [
            {
                term: __2({
                    id: "7aDnUb"
                }),
                value: S
            }
        ];
        s[120] = __2;
        s[121] = S;
        s[122] = P;
        s[123] = Cs;
    } else {
        Cs = s[123];
    }
    let Is;
    if (s[124] !== __1 || s[125] !== __2 || s[126] !== entry || s[127] !== P) {
        Is = P ? [] : [
            {
                term: __2({
                    id: "K7tIrx"
                }),
                value: p_3(__1, entry)
            }
        ];
        s[124] = __1;
        s[125] = __2;
        s[126] = entry;
        s[127] = P;
        s[128] = Is;
    } else {
        Is = s[128];
    }
    let As;
    if (s[129] !== __2 || s[130] !== T || s[131] !== A) {
        As = T != null && T > 0 ? [
            {
                term: __2({
                    id: "20QE6w"
                }),
                value: A(T)
            }
        ] : [];
        s[129] = __2;
        s[130] = T;
        s[131] = A;
        s[132] = As;
    } else {
        As = s[132];
    }
    let Ps;
    if (s[133] !== __2 || s[134] !== E) {
        Ps = E == null ? [] : [
            {
                term: __2({
                    id: "On0aF2"
                }),
                value: E
            }
        ];
        s[133] = __2;
        s[134] = E;
        s[135] = Ps;
    } else {
        Ps = s[135];
    }
    let Ls;
    if (s[136] !== __2) {
        Ls = __2({
            id: "lXkUEV"
        });
        s[136] = __2;
        s[137] = Ls;
    } else {
        Ls = s[137];
    }
    let Rs;
    if (s[138] !== __1 || s[139] !== entry) {
        Rs = pluginAvailabilityLabel(__1, entry);
        s[138] = __1;
        s[139] = entry;
        s[140] = Rs;
    } else {
        Rs = s[140];
    }
    let qs;
    if (s[141] !== Ls || s[142] !== Rs) {
        qs = {
            term: Ls,
            value: Rs
        };
        s[141] = Ls;
        s[142] = Rs;
        s[143] = qs;
    } else {
        qs = s[143];
    }
    let Ts;
    if (s[144] !== _s || s[145] !== Cs || s[146] !== Is || s[147] !== As || s[148] !== Ps || s[149] !== qs) {
        Ts = [
            _s,
            ...Cs,
            ...Is,
            ...As,
            ...Ps,
            qs
        ];
        s[144] = _s;
        s[145] = Cs;
        s[146] = Is;
        s[147] = As;
        s[148] = Ps;
        s[149] = qs;
        s[150] = Ts;
    } else {
        Ts = s[150];
    }
    let Ds;
    if (s[151] !== zs || s[152] !== Ts) {
        Ds = <DetailsList label={zs} rows={Ts}/>;
        s[151] = zs;
        s[152] = Ts;
        s[153] = Ds;
    } else {
        Ds = s[153];
    }
    let Ms;
    if (s[154] !== header || s[155] !== xs || s[156] !== bs || s[157] !== ys || s[158] !== vs || s[159] !== gs || s[160] !== ws || s[161] !== Ds || s[162] !== as) {
        Ms = <PluginDetailLayout header={header}>{xs}{bs}{ys}{vs}{gs}{ws}{Ds}{as}</PluginDetailLayout>;
        s[154] = header;
        s[155] = xs;
        s[156] = bs;
        s[157] = ys;
        s[158] = vs;
        s[159] = gs;
        s[160] = ws;
        s[161] = Ds;
        s[162] = as;
        s[163] = Ms;
    } else {
        Ms = s[163];
    }
    return Ms;
}
function ha(l) {
    return l.servedBy === "grok";
}
function pa(l) {
    return l.servedBy === "grok";
}
function ja(l) {
    return l != null;
}
