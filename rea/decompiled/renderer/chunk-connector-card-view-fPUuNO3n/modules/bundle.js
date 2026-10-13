import { c as c_1, u as u_1, T as T_1, r as r_1, p } from "./index.eager-vendor-Qbf9YA6n.js";
import { r as r_2, bd, u as u_2, aT, aK } from "./index.eager-app-Cj5f8Gby.js";
import { W as W_1, g as Bs1 } from "./index-ZYxf-aBb.js";
import { aY as _ } from "./index.eager-platform-Dcfeegfw.js";
import { a } from "./chunk-mcp-connector-status-DhhAF8A6.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "c9d87d1b-ab7d-4b58-9dfd-71f23fa51390";
            e._sentryDebugIdIdentifier = "sentry-dbid-c9d87d1b-ab7d-4b58-9dfd-71f23fa51390";
        }
    } catch (e) {}
})();
function gs(i) {
    return i.toLowerCase().replace(/[^a-z0-9]/g, "");
}
function is(i, s) {
    const e = gs(i);
    return e.length > 0 && e === gs(s);
}
function Rs(i, s, e, r) {
    const target = i.find(e);
    if (target != null) {
        return {
            kind: "resolved",
            target
        };
    }
    const l = i.filter((d)=>is(d.name, s));
    const [h] = l;
    if (h == null) {
        return {
            kind: "missing"
        };
    }
    if (l.length === 1) {
        return {
            kind: "resolved",
            target: h
        };
    }
    return {
        kind: "ambiguous",
        targets: l,
        preferredTarget: l.find(r) ?? h
    };
}
function Ys(i, s) {
    const e = i.find((l)=>l.serverIdentifier === s);
    if (e != null) {
        const l = i.filter((h)=>h.id === e.id);
        if (l.length > 1) {
            return {
                kind: "ambiguous",
                targets: l,
                preferredTarget: e
            };
        }
        return {
            kind: "resolved",
            target: e
        };
    }
    const r = i.filter((l)=>l.id === s);
    const [c] = r;
    if (c != null) {
        if (r.length === 1) {
            return {
                kind: "resolved",
                target: c
            };
        }
        return {
            kind: "ambiguous",
            targets: r,
            preferredTarget: r.find((l)=>!l.isTeamServer) ?? c
        };
    }
    return Rs(i, s, ()=>false, (l)=>!l.isTeamServer);
}
function sa(i) {
    const s = i[0];
    return s != null && i.length > 1 && i.every((e)=>e.id === s.id);
}
function Es(i) {
    return i.some((s)=>s.status !== "connected" && s.status !== "disabledByTeamAdminPolicy");
}
function aa(i) {
    const s = new Map;
    for (const r of i){
        const c = s.get(r.id);
        if (c == null) {
            s.set(r.id, [
                r
            ]);
        } else {
            c.push(r);
        }
    }
    if (s.size < 2) {
        return;
    }
    const e = [
        ...s.values()
    ].filter(Es);
    if (e.length === 1) {
        return e[0];
    }
}
const $s = 4;
function Ks(i, s) {
    return i.find((e)=>e.native == null && (is(e.displayName, s) || is(e.name, s)));
}
function ea(i) {
    return i.fields != null && i.fields.length > 0;
}
function na(i, s, e, r) {
    const c = [];
    const l = new Set;
    for (const h of r){
        const d = Ks(i, h);
        if (d != null && !(is(d.displayName, e) || is(d.name, e)) && !(s.has(gs(d.displayName)) || s.has(gs(d.name))) && !l.has(d.id) && (l.add(d.id), c.push(d), c.length >= $s)) {
            break;
        }
    }
    return c;
}
function AsComponent(i) {
    AsComponent.d = 884;
    const s = c_1.c(16);
    const { chrome, onBrowseMore, suggestions } = i;
    const { _: __1 } = u_1();
    let h;
    if (s[0] === Symbol.for("react.memo_cache_sentinel")) {
        h = r_2("sand-connector-card__discovery", "sand-78zum5 sand-6s0dn4 sand-1a02dak sand-17d4w8g");
        s[0] = h;
    } else {
        h = s[0];
    }
    let d;
    if (s[1] !== __1 || s[2] !== chrome || s[3] !== suggestions) {
        let v;
        if (s[5] !== __1 || s[6] !== chrome) {
            v = (y)=><button key={y.key} className={r_2("sand-connector-card__chip", "sand-3nfvp2 sand-6s0dn4 sand-17d4w8g sand-1iorvi4 sand-jkvuk6 sand-25sj25 sand-f159sx sand-mkeg23 sand-1y0btm7 sand-qz0629 sand-149ho13 sand-1ua6jya sand-ch1371 sand-19aaqeu sand-1ypdohk sand-jb2p0i sand-1t137rt sand-js6kxj sand-15406qy sand-1firant sand-wji4o3")} onClick={y.onOpen} title={__1({
                    id: "XuVQrE",
                    values: {
                        0: y.displayName
                    }
                })} type="button">{chrome.renderConnectorIcon({
                    ...y.iconId == null ? {} : {
                        iconId: y.iconId
                    },
                    ...y.iconUrl == null ? {} : {
                        iconUrl: y.iconUrl
                    }
                }, y.displayName, 18)}<_ className={r_2("sand-1yqkkiu sand-b3r6kr sand-lyipyv sand-uxw1ft")} size="xs" weight="medium">{y.displayName}</_><W_1 aria-hidden className={r_2("sand-4b2ntj sand-2lah0s")} name="plus" size="xs"/></button>;
            s[5] = __1;
            s[6] = chrome;
            s[7] = v;
        } else {
            v = s[7];
        }
        d = suggestions.map(v);
        s[1] = __1;
        s[2] = chrome;
        s[3] = suggestions;
        s[4] = d;
    } else {
        d = s[4];
    }
    let x;
    if (s[8] === Symbol.for("react.memo_cache_sentinel")) {
        x = r_2("sand-connector-card__browse-more", "sand-3nfvp2 sand-6s0dn4 sand-1ed6fcf sand-vc5jky sand-1iorvi4 sand-jkvuk6 sand-yiysdx sand-14vy60q sand-jbqb8w sand-ng3xce sand-4b2ntj sand-1buwdsh sand-1ypdohk sand-jb2p0i sand-1t137rt sand-t3l3uh sand-1firant sand-wji4o3");
        s[8] = x;
    } else {
        x = s[8];
    }
    let j;
    let q;
    if (s[9] === Symbol.for("react.memo_cache_sentinel")) {
        j = <span className={r_2("sand-1wm8ruf sand-1rhlpx6 sand-1heor9g")}><T_1 id="Lrv2Lo"/></span>;
        q = <W_1 aria-hidden name="arrow-right" size="xs"/>;
        s[9] = j;
        s[10] = q;
    } else {
        j = s[9];
        q = s[10];
    }
    let u;
    if (s[11] !== onBrowseMore) {
        u = <button className={x} onClick={onBrowseMore} type="button">{j}{q}</button>;
        s[11] = onBrowseMore;
        s[12] = u;
    } else {
        u = s[12];
    }
    let N;
    if (s[13] !== d || s[14] !== u) {
        N = <div className={h}>{d}{u}</div>;
        s[13] = d;
        s[14] = u;
        s[15] = N;
    } else {
        N = s[15];
    }
    return N;
}
const D = {
    card: {
        k1xSpc: "sand-78zum5",
        kXwgrk: "sand-dt5ytf",
        kOIVth: "sand-883omv",
        kzqmXN: "sand-h8yej3",
        k7Eaqz: "sand-euugli",
        kmVPX3: "sand-c7ga6q",
        kaIpWk: "sand-gqmno8",
        kfSwDN: "sand-1hx0egp",
        $$css: true
    },
    action: {
        kmuXW: "sand-2lah0s",
        $$css: true
    },
    actionPill: {
        kZKoxP: "sand-10w6t97",
        kwRFfy: "sand-pdmqnj",
        kZCmMZ: "sand-1g0dm76",
        $$css: true
    },
    accountPill: {
        k1xSpc: "sand-3nfvp2",
        kGNEyG: "sand-6s0dn4",
        kOIVth: "sand-17d4w8g",
        kZKoxP: "sand-t7dq6l",
        kLKAdn: "sand-123j3cw",
        kGO01o: "sand-s9asl8",
        kZCmMZ: "sand-e2zdcy",
        kwRFfy: "sand-2vl965",
        kMzoRj: "sand-mkeg23",
        ksu8eU: "sand-1y0btm7",
        kVAM5u: "sand-qz0629",
        kaIpWk: "sand-149ho13",
        kWkggS: "sand-1ua6jya",
        kMwMTN: "sand-19aaqeu",
        kMv6JI: "sand-jb2p0i",
        $$css: true
    },
    accountPillAction: {
        kWkggS: "sand-1ua6jya sand-13awvlr",
        k3XXqK: "sand-1t137rt",
        kGVxlE: "sand-js6kxj",
        k1ekBW: "sand-15406qy",
        kIyJzY: "sand-1firant",
        kAMwcw: "sand-wji4o3",
        $$css: true
    }
};
const Vs = {
    className: "sand-jm9jq1 sand-18xomjl sand-bcz3fp sand-iw1gut"
};
const Us = {
    className: "sand-78zum5 sand-6s0dn4 sand-1a02dak sand-17d4w8g"
};
const Ws = {
    className: "sand-3nfvp2 sand-6s0dn4 sand-1ed6fcf sand-vc5jky sand-1nn3v0j sand-1120s5i sand-yiysdx sand-14vy60q sand-jbqb8w sand-ng3xce sand-4b2ntj sand-1xms8e4 sand-1ypdohk sand-1s07b3s sand-1hc1fzr sand-uhm2yv sand-jb2p0i sand-1t137rt sand-t3l3uh sand-1firant sand-wji4o3"
};
const Gs = {
    className: "sand-1wm8ruf sand-1rhlpx6 sand-1heor9g"
};
function TsComponent(i) {
    TsComponent.d = 885;
    const s = c_1.c(7);
    const { glyph, glyphColor, isBusy } = i;
    let l;
    if (s[0] === Symbol.for("react.memo_cache_sentinel")) {
        l = r_2("sand-3nfvp2 sand-2lah0s sand-4b2ntj");
        s[0] = l;
    } else {
        l = s[0];
    }
    const className = l;
    if (isBusy || glyph === "loading") {
        let j;
        if (s[1] === Symbol.for("react.memo_cache_sentinel")) {
            j = <W_1 aria-hidden className={className} modifier="spin" name="loading" size="xs"/>;
            s[1] = j;
        } else {
            j = s[1];
        }
        return j;
    }
    if (glyph == null) {
        return null;
    }
    let d;
    if (s[2] !== glyphColor) {
        d = glyphColor == null ? {} : {
            color: glyphColor
        };
        s[2] = glyphColor;
        s[3] = d;
    } else {
        d = s[3];
    }
    let x;
    if (s[4] !== glyph || s[5] !== d) {
        x = <W_1 aria-hidden className={className} {...d} name={glyph} size="xs"/>;
        s[4] = glyph;
        s[5] = d;
        s[6] = x;
    } else {
        x = s[6];
    }
    return x;
}
function Ls1Component(i) {
    Ls1Component.d = 886;
    const s = c_1.c(24);
    const { ariaLabel, glyph, glyphColor, isBusy, isDisabled, label, onClick, title, treatment } = i;
    const u = treatment === "account";
    let N;
    if (s[0] !== ariaLabel) {
        N = ariaLabel == null ? {} : {
            "aria-label": ariaLabel
        };
        s[0] = ariaLabel;
        s[1] = N;
    } else {
        N = s[1];
    }
    const v = isBusy || undefined;
    let y;
    if (s[2] !== u) {
        y = u ? {
            className: "sand-connector-card__account"
        } : {};
        s[2] = u;
        s[3] = y;
    } else {
        y = s[3];
    }
    const disabled = isDisabled || isBusy;
    let rootStyle;
    if (s[4] !== u) {
        rootStyle = u ? [
            D.accountPill,
            D.accountPillAction
        ] : [
            D.action,
            aK.askCardButtonTinted,
            D.actionPill
        ];
        s[4] = u;
        s[5] = rootStyle;
    } else {
        rootStyle = s[5];
    }
    const size = u ? "sm" : "md";
    let B;
    if (s[6] !== title) {
        B = title == null ? {} : {
            title
        };
        s[6] = title;
        s[7] = B;
    } else {
        B = s[7];
    }
    let p;
    if (s[8] !== glyph || s[9] !== glyphColor || s[10] !== u || s[11] !== isBusy || s[12] !== label) {
        p = u ? <><_ className={r_2("sand-1f0l55g sand-b3r6kr sand-lyipyv sand-uxw1ft")} size="sm" weight="medium">{label}</_><TsComponent glyph={glyph} glyphColor={glyphColor} isBusy={isBusy}/></> : <span className={r_2("sand-wz0xwf sand-1ku5rj1")}><span className={r_2({
            0: {
                className: "sand-1agbcgv sand-crlgei"
            },
            1: {
                className: "sand-1agbcgv sand-crlgei sand-lshs6z"
            }
        }[!!isBusy << 0].className)}>{label}</span>{isBusy ? <W_1 className={r_2("sand-1agbcgv sand-crlgei sand-3nfvp2")} modifier="spin" name="loading" size="sm"/> : null}</span>;
        s[8] = glyph;
        s[9] = glyphColor;
        s[10] = u;
        s[11] = isBusy;
        s[12] = label;
        s[13] = p;
    } else {
        p = s[13];
    }
    let I;
    if (s[14] !== onClick || s[15] !== N || s[16] !== v || s[17] !== y || s[18] !== disabled || s[19] !== rootStyle || s[20] !== size || s[21] !== B || s[22] !== p) {
        I = <Bs1 {...N} aria-busy={v} {...y} disabled={disabled} onClick={onClick} rootStyle={rootStyle} shape="pill" size={size} {...B} type="button" variant="outline">{p}</Bs1>;
        s[14] = onClick;
        s[15] = N;
        s[16] = v;
        s[17] = y;
        s[18] = disabled;
        s[19] = rootStyle;
        s[20] = size;
        s[21] = B;
        s[22] = p;
        s[23] = I;
    } else {
        I = s[23];
    }
    return I;
}
function XsComponent(i) {
    XsComponent.d = 887;
    const s = c_1.c(111);
    const { displayName, iconId, iconUrl, icon, isTeam, description, toolCount, isConnected, connectedLabel, isAdminDisabled, actionLabel, isActionPending, onAction, handoff, accountFooter, pendingAccountKey, authorizeFailure, labelInput, onAddAccount, addBank, suggestions, onBrowseMore } = i;
    const ds = pendingAccountKey === undefined ? null : pendingAccountKey;
    const ts = authorizeFailure === undefined ? null : authorizeFailure;
    const { _: __1 } = u_1();
    const { _: __2 } = u_1();
    const chrome = bd();
    const id = r_1.useId();
    const ref = u_2(id);
    const cs = aT();
    let os;
    if (s[0] !== __2 || s[1] !== toolCount) {
        os = toolCount > 0 ? __2({
            id: "RIjnws",
            values: {
                toolCount
            }
        }) : null;
        s[0] = __2;
        s[1] = toolCount;
        s[2] = os;
    } else {
        os = s[2];
    }
    const us = os;
    const M = !isAdminDisabled && labelInput != null;
    const ws = !isConnected && !isAdminDisabled && !M && handoff != null;
    const L = handoff?.status === "openFailed" ? handoff.signInUrl : undefined;
    let P = null;
    let V = handoff?.failureDetail ?? handoff?.portConflictDetail ?? null;
    if (handoff?.status === "waiting") {
        let n;
        if (s[3] !== __1 || s[4] !== displayName) {
            n = __1({
                id: "wfJAKj",
                values: {
                    displayName
                }
            });
            s[3] = __1;
            s[4] = displayName;
            s[5] = n;
        } else {
            n = s[5];
        }
        P = n;
        V = handoff.portConflictDetail ?? null;
    } else if (handoff?.status === "openFailed") {
        let n;
        if (s[6] !== __1 || s[7] !== displayName) {
            n = __1({
                id: "08fv1/",
                values: {
                    displayName
                }
            });
            s[6] = __1;
            s[7] = displayName;
            s[8] = n;
        } else {
            n = s[8];
        }
        P = n;
        let f;
        if (s[9] !== __1 || s[10] !== L) {
            f = L == null ? null : __1({
                id: "nVjuaq"
            });
            s[9] = __1;
            s[10] = L;
            s[11] = f;
        } else {
            f = s[11];
        }
        V = f;
    } else if (handoff?.failureDetail != null) {
        let n;
        if (s[12] !== __1 || s[13] !== displayName) {
            n = __1({
                id: "8BWxKJ",
                values: {
                    displayName
                }
            });
            s[12] = __1;
            s[13] = displayName;
            s[14] = n;
        } else {
            n = s[14];
        }
        P = n;
    } else if (handoff != null) {
        let n;
        if (s[15] !== __1 || s[16] !== displayName) {
            n = __1({
                id: "j7klSo",
                values: {
                    displayName
                }
            });
            s[15] = __1;
            s[16] = displayName;
            s[17] = n;
        } else {
            n = s[17];
        }
        P = n;
    }
    const R = !isAdminDisabled && accountFooter != null;
    const zs = !isConnected && !isAdminDisabled && handoff == null && !M && !R && suggestions.length > 0;
    const _s = R && !M && onAddAccount != null;
    const Cs = isConnected && !isAdminDisabled && !R && addBank != null;
    const qs = isActionPending || undefined;
    let ms;
    let fs;
    let hs;
    if (s[18] === Symbol.for("react.memo_cache_sentinel")) {
        ms = r_2("sand-connector-card", p(aK.transcriptWidget, D.card).className);
        fs = r_2("sand-connector-card__header", "sand-78zum5 sand-6s0dn4 sand-1v2ro7d");
        hs = r_2("sand-2lah0s sand-78zum5");
        s[18] = ms;
        s[19] = fs;
        s[20] = hs;
    } else {
        ms = s[18];
        fs = s[19];
        hs = s[20];
    }
    let U;
    if (s[21] !== chrome || s[22] !== displayName || s[23] !== icon || s[24] !== iconId || s[25] !== iconUrl) {
        U = icon ?? chrome.renderConnectorIcon({
            ...iconId == null ? {} : {
                iconId
            },
            ...iconUrl == null ? {} : {
                iconUrl
            }
        }, displayName, 40);
        s[21] = chrome;
        s[22] = displayName;
        s[23] = icon;
        s[24] = iconId;
        s[25] = iconUrl;
        s[26] = U;
    } else {
        U = s[26];
    }
    let W;
    if (s[27] !== U) {
        W = <span className={hs}>{U}</span>;
        s[27] = U;
        s[28] = W;
    } else {
        W = s[28];
    }
    let ys;
    let ps;
    if (s[29] === Symbol.for("react.memo_cache_sentinel")) {
        ys = r_2("sand-connector-card__text", "sand-78zum5 sand-dt5ytf sand-1iyjqo2 sand-s83m0k sand-1r8uery sand-euugli");
        ps = r_2("sand-78zum5 sand-6s0dn4 sand-1jnr06f sand-euugli");
        s[29] = ys;
        s[30] = ps;
    } else {
        ys = s[29];
        ps = s[30];
    }
    let js;
    if (s[31] === Symbol.for("react.memo_cache_sentinel")) {
        js = r_2("sand-euugli sand-1wd3ewq sand-b3r6kr sand-lyipyv sand-uxw1ft");
        s[31] = js;
    } else {
        js = s[31];
    }
    let G;
    if (s[32] !== ref || s[33] !== displayName || s[34] !== id) {
        G = <_ className={js} id={id} ref={ref} size="md" weight="medium">{displayName}</_>;
        s[32] = ref;
        s[33] = displayName;
        s[34] = id;
        s[35] = G;
    } else {
        G = s[35];
    }
    let X;
    if (s[36] !== isTeam) {
        X = isTeam ? <span className={r_2("sand-connector-card__team", "sand-2lah0s sand-4p5aij sand-1j85h84 sand-25sj25 sand-1icxu4v sand-149ho13 sand-mkeg23 sand-1y0btm7 sand-qz0629 sand-4b2ntj sand-1k6wstc sand-xzm5a7 sand-1xxsxie sand-16q24ku sand-tvhhri")}><T_1 id="KM6m8p"/></span> : null;
        s[36] = isTeam;
        s[37] = X;
    } else {
        X = s[37];
    }
    let O;
    if (s[38] !== G || s[39] !== X) {
        O = <div className={ps}>{G}{X}</div>;
        s[38] = G;
        s[39] = X;
        s[40] = O;
    } else {
        O = s[40];
    }
    let Z;
    if (s[41] !== description) {
        Z = description != null && description.length > 0 ? <_ className={r_2("sand-euugli sand-b3r6kr sand-lyipyv sand-uxw1ft")} color="secondary" size="md" title={description}>{description}</_> : null;
        s[41] = description;
        s[42] = Z;
    } else {
        Z = s[42];
    }
    let J;
    if (s[43] !== us) {
        J = us != null ? <_ className={r_2("sand-euugli sand-b3r6kr sand-lyipyv sand-uxw1ft")} color="tertiary" size="sm">{us}</_> : null;
        s[43] = us;
        s[44] = J;
    } else {
        J = s[44];
    }
    let H;
    if (s[45] !== O || s[46] !== Z || s[47] !== J) {
        H = <div className={ys}>{O}{Z}{J}</div>;
        s[45] = O;
        s[46] = Z;
        s[47] = J;
        s[48] = H;
    } else {
        H = s[48];
    }
    let E;
    s: {
        if (isConnected) {
            let f;
            if (s[49] === Symbol.for("react.memo_cache_sentinel")) {
                f = r_2("sand-connector-card__status", "sand-3nfvp2 sand-6s0dn4 sand-2lah0s sand-1jnr06f sand-1yrsyyn sand-pdmqnj sand-10b6aqq sand-1g0dm76 sand-149ho13 sand-1buh4up sand-1w5rjie");
                s[49] = f;
            } else {
                f = s[49];
            }
            let b;
            if (s[50] === Symbol.for("react.memo_cache_sentinel")) {
                b = <W_1 aria-hidden name="check" size="sm"/>;
                s[50] = b;
            } else {
                b = s[50];
            }
            let k;
            if (s[51] !== connectedLabel) {
                k = connectedLabel ?? <T_1 id="hp8OtS"/>;
                s[51] = connectedLabel;
                s[52] = k;
            } else {
                k = s[52];
            }
            let g;
            if (s[53] !== k) {
                g = <_ color="green" size="lg" weight="medium">{k}</_>;
                s[53] = k;
                s[54] = g;
            } else {
                g = s[54];
            }
            let T;
            if (s[55] !== f || s[56] !== g) {
                T = <span className={f} role="status">{b}{g}</span>;
                s[55] = f;
                s[56] = g;
                s[57] = T;
            } else {
                T = s[57];
            }
            E = T;
            break s;
        }
        if (isAdminDisabled) {
            let f;
            if (s[58] === Symbol.for("react.memo_cache_sentinel")) {
                f = r_2("sand-connector-card__status", "sand-3nfvp2 sand-6s0dn4 sand-2lah0s sand-1jnr06f sand-1yrsyyn sand-pdmqnj sand-10b6aqq sand-1g0dm76 sand-149ho13 sand-59yu97 sand-4b2ntj");
                s[58] = f;
            } else {
                f = s[58];
            }
            let b;
            if (s[59] !== __1) {
                b = a(__1, "disabledByTeamAdminPolicy");
                s[59] = __1;
                s[60] = b;
            } else {
                b = s[60];
            }
            let k;
            if (s[61] !== b) {
                k = <_ color="tertiary" size="lg" weight="medium">{b}</_>;
                s[61] = b;
                s[62] = k;
            } else {
                k = s[62];
            }
            let g;
            if (s[63] !== f || s[64] !== k) {
                g = <span className={f} role="status">{k}</span>;
                s[63] = f;
                s[64] = k;
                s[65] = g;
            } else {
                g = s[65];
            }
            E = g;
            break s;
        }
        if (handoff != null || M || R) {
            E = null;
            break s;
        }
        let n;
        if (s[66] !== actionLabel || s[67] !== isActionPending || s[68] !== onAction) {
            n = <Ls1Component glyph={null} isBusy={isActionPending} isDisabled={false} label={actionLabel} onClick={onAction} treatment="primary"/>;
            s[66] = actionLabel;
            s[67] = isActionPending;
            s[68] = onAction;
            s[69] = n;
        } else {
            n = s[69];
        }
        E = n;
    }
    let Q;
    if (s[70] !== H || s[71] !== E || s[72] !== W) {
        Q = <div className={fs}>{W}{H}{E}</div>;
        s[70] = H;
        s[71] = E;
        s[72] = W;
        s[73] = Q;
    } else {
        Q = s[73];
    }
    let Y;
    if (s[74] !== L || s[75] !== handoff || s[76] !== V || s[77] !== P || s[78] !== ws || s[79] !== cs) {
        Y = ws ? <div className={r_2("sand-connector-card__handoff", "sand-78zum5 sand-6s0dn4 sand-167g77z sand-euugli")}>{handoff.status === "waiting" ? <W_1 aria-hidden className={r_2("sand-2lah0s")} modifier="spin" name="loading" size="sm"/> : <W_1 aria-hidden className={r_2("sand-2lah0s")} color="yellow" name="exclamation-circle" size="sm"/>}<div className={r_2("sand-1iyjqo2 sand-s83m0k sand-euugli sand-13faqbe")}><_ as="div" color="secondary" size="sm">{P}</_>{V != null ? <_ as="div" color="tertiary" size="xs">{V}</_> : null}</div>{L != null ? <Bs1 onClick={()=>cs.copy(L)} rootStyle={D.action} size="sm" type="button" variant="secondary">{cs.status === "copied" ? <T_1 id="6V3Ea3"/> : <T_1 id="y1eoq1"/>}</Bs1> : null}{handoff.status === "waiting" ? <Bs1 onClick={handoff.onReopen} rootStyle={D.action} size="sm" type="button" variant="secondary"><T_1 id="M7SqjM"/></Bs1> : <Bs1 onClick={handoff.onRetry} rootStyle={D.action} size="sm" type="button" variant="secondary"><T_1 id="6gRgw8"/></Bs1>}</div> : null;
        s[74] = L;
        s[75] = handoff;
        s[76] = V;
        s[77] = P;
        s[78] = ws;
        s[79] = cs;
        s[80] = Y;
    } else {
        Y = s[80];
    }
    let ss;
    if (s[81] !== __2 || s[82] !== labelInput || s[83] !== M) {
        ss = M && labelInput != null ? <div className={r_2("sand-connector-card__label-input", "sand-78zum5 sand-6s0dn4 sand-167g77z sand-euugli")}><input aria-label={__2({
            id: "XHpefl"
        })} autoFocus className={r_2("sand-1iyjqo2 sand-s83m0k sand-euugli sand-1fgtraw sand-mzvs34 sand-f159sx sand-ur7f20 sand-mkeg23 sand-1y0btm7 sand-qz0629 sand-1ua6jya sand-1wd3ewq sand-jb2p0i sand-1wm8ruf sand-1t137rt")} disabled={labelInput.isBusy} onChange={(n)=>labelInput.onChange(n.target.value)} onKeyDown={(n)=>{
            if (n.key === "Enter" && !labelInput.isDisabled) {
                labelInput.onSubmit();
            }
            if (n.key === "Escape") {
                labelInput.onCancel();
            }
        }} placeholder={__2({
            id: "ngp/Wy"
        })} type="text" value={labelInput.value}/><Ls1Component glyph={null} isBusy={labelInput.isBusy} isDisabled={labelInput.isDisabled} label={__2({
            id: "yIVrHZ"
        })} onClick={labelInput.onSubmit} treatment="primary"/></div> : null;
        s[81] = __2;
        s[82] = labelInput;
        s[83] = M;
        s[84] = ss;
    } else {
        ss = s[84];
    }
    let as;
    if (s[85] !== __1 || s[86] !== __2 || s[87] !== accountFooter || s[88] !== ts || s[89] !== onAddAccount || s[90] !== ds || s[91] !== R || s[92] !== _s) {
        as = R && accountFooter != null ? <><div aria-hidden className={r_2("sand-connector-card__divider", "sand-jm9jq1 sand-18xomjl sand-bcz3fp sand-iw1gut")}/><div className={r_2("sand-connector-card__accounts", "sand-78zum5 sand-6s0dn4 sand-1a02dak sand-17d4w8g")}>{accountFooter.map((n)=>{
            if (n.isConnected) {
                return <span key={n.key} className={r_2("sand-connector-card__account", "sand-3nfvp2 sand-6s0dn4 sand-17d4w8g sand-t7dq6l sand-123j3cw sand-s9asl8 sand-e2zdcy sand-2vl965 sand-mkeg23 sand-1y0btm7 sand-qz0629 sand-149ho13 sand-1ua6jya sand-19aaqeu sand-jb2p0i")} role="status" title={__2({
                    id: "QHcLEN"
                })}><_ className={r_2("sand-1f0l55g sand-b3r6kr sand-lyipyv sand-uxw1ft")} size="sm" weight="medium">{n.label}</_><span className={r_2("sand-3nfvp2 sand-2lah0s sand-1w5rjie")}><W_1 aria-hidden name="check" size="xs"/></span></span>;
            }
            const f = ts != null && ts.accountKey === n.key ? ts : null;
            const b = f == null && n.handoff?.status === "waiting";
            const k = !b;
            const isBusy = ds === n.key;
            const isDisabled = k && !isBusy && ds != null;
            if (f != null) {
                return <Ls1Component key={n.key} ariaLabel={__1({
                    id: "Vvllg0",
                    values: {
                        0: n.label
                    }
                })} glyph="exclamation-circle" glyphColor="danger" isBusy={isBusy} isDisabled={isDisabled} label={n.label} onClick={n.onAuthorize} title={f.detail ?? __1({
                    id: "eifFQq"
                })} treatment="account"/>;
            }
            if (n.handoff != null) {
                return <Ls1Component ariaLabel={__1(b ? {
                    id: "3jCYwT",
                    values: {
                        0: n.label
                    }
                } : {
                    id: "Vvllg0",
                    values: {
                        0: n.label
                    }
                })} glyph={b ? "loading" : "exclamation-circle"} {...b ? {} : {
                    glyphColor: "yellow"
                }} isBusy={isBusy} isDisabled={isDisabled} key={n.key} label={n.label} onClick={b ? n.handoff.onReopen : n.handoff.onRetry} title={b ? n.handoff.portConflictDetail ?? __1({
                    id: "9EUU+T"
                }) : n.handoff.status === "openFailed" ? __1({
                    id: "Cm4nAb"
                }) : n.handoff.failureDetail ?? n.handoff.portConflictDetail ?? __1({
                    id: "0FVrvJ"
                })} treatment="account"/>;
            }
            return <Ls1Component key={n.key} ariaLabel={__1({
                id: "t4Dt8N",
                values: {
                    0: n.label
                }
            })} glyph="plus" isBusy={isBusy} isDisabled={isDisabled} label={n.label} onClick={n.onAuthorize} title={n.statusLabel} treatment="account"/>;
        })}{_s ? <button className={r_2("sand-connector-card__add-account", "sand-3nfvp2 sand-6s0dn4 sand-1ed6fcf sand-vc5jky sand-1nn3v0j sand-1120s5i sand-yiysdx sand-14vy60q sand-jbqb8w sand-ng3xce sand-4b2ntj sand-1xms8e4 sand-1ypdohk sand-1s07b3s sand-1hc1fzr sand-uhm2yv sand-jb2p0i sand-1t137rt sand-t3l3uh sand-1firant sand-wji4o3")} disabled={ds != null} onClick={onAddAccount} type="button"><W_1 aria-hidden name="plus" size="xs"/><span className={r_2("sand-1wm8ruf sand-1rhlpx6 sand-1heor9g")}><T_1 id="O5JHbm"/></span></button> : null}</div></> : null;
        s[85] = __1;
        s[86] = __2;
        s[87] = accountFooter;
        s[88] = ts;
        s[89] = onAddAccount;
        s[90] = ds;
        s[91] = R;
        s[92] = _s;
        s[93] = as;
    } else {
        as = s[93];
    }
    let es;
    if (s[94] !== addBank || s[95] !== Cs) {
        es = Cs ? <><div aria-hidden {...Vs}/><div {...Us}>{addBank.hasFailed ? <_ color="secondary" role="alert" size="sm"><T_1 id="Bjts9t"/></_> : null}<button {...Ws} disabled={addBank.isBusy} onClick={addBank.onAdd} type="button"><W_1 aria-hidden {...addBank.isBusy ? {
            modifier: "spin"
        } : {}} name={addBank.isBusy ? "loading" : "plus"} size="xs"/><span {...Gs}><T_1 id="bau/Kl"/></span></button></div></> : null;
        s[94] = addBank;
        s[95] = Cs;
        s[96] = es;
    } else {
        es = s[96];
    }
    let ns;
    if (s[97] !== chrome || s[98] !== onBrowseMore || s[99] !== zs || s[100] !== suggestions) {
        ns = zs ? <><div aria-hidden className={r_2("sand-connector-card__divider", "sand-jm9jq1 sand-18xomjl sand-bcz3fp sand-iw1gut")}/><AsComponent chrome={chrome} onBrowseMore={onBrowseMore} suggestions={suggestions}/></> : null;
        s[97] = chrome;
        s[98] = onBrowseMore;
        s[99] = zs;
        s[100] = suggestions;
        s[101] = ns;
    } else {
        ns = s[101];
    }
    let xs;
    if (s[102] !== Q || s[103] !== Y || s[104] !== ss || s[105] !== as || s[106] !== es || s[107] !== ns || s[108] !== qs || s[109] !== id) {
        xs = <article aria-busy={qs} aria-labelledby={id} className={ms}>{Q}{Y}{ss}{as}{es}{ns}</article>;
        s[102] = Q;
        s[103] = Y;
        s[104] = ss;
        s[105] = as;
        s[106] = es;
        s[107] = ns;
        s[108] = qs;
        s[109] = id;
        s[110] = xs;
    } else {
        xs = s[110];
    }
    return xs;
}
export { XsComponent as C, na as a, gs as b, is as c, ea as e, Ks as f, sa as i, aa as n, Ys as r };
