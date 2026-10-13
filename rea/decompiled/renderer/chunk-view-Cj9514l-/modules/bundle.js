import { c as c_1, u as u_1, p as p_1, T as T_1, r as r_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { ba, z as G, E, bW, b$, bZ as Ys } from "./index-ZYxf-aBb.js";
import { S as S_1 } from "./chunk-scroll-pane-CoxKzaOs.js";
import { aY as S, bf, x, i as i_1 } from "./index.eager-platform-Dcfeegfw.js";
import { eY, gu, gv, gw, gx, gy, dl, a$, a_, gz, gA, gB, gC, gD, gE, gF, gG, gH, gI, gJ, bA, gK, gL, gM, gN, d0, gO, g8, gP, gQ, b7, gR, dc, gS, bc, gT, b9, bT, eW, gU, gV, gW, gX, gY, r as r_2, gZ, g_, g$, cc, cq, h0, bz, h1, h2, h3, f as Bt } from "./index.eager-app-Cj5f8Gby.js";
import { G as G_1, a as Ke } from "./chunk-settings-row-I8ggwIzt.js";
import { S as S_2 } from "./chunk-SegmentedControl-Bj94OhnT.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "00ff32a6-dd14-4dd4-a2ca-b4afb5c439ab";
            e._sentryDebugIdIdentifier = "sentry-dbid-00ff32a6-dd14-4dd4-a2ca-b4afb5c439ab";
        }
    } catch (e) {}
})();
function Ue(s, e = eY()) {
    if (!gu(s) || gv(s)) {
        return {
            kind: "enable"
        };
    }
    const n = gw(s);
    const i = gx(s);
    return {
        kind: "balance",
        balanceLabel: gy(s.balance, e),
        monthlyUsageLabel: gy(s.autoTopUpSpentThisPeriod, e),
        monthlyLimitLabel: n === null ? null : gy(n, e),
        autoTopUp: i === null ? null : {
            amountLabel: gy(i.amount, e),
            thresholdLabel: gy(i.threshold, e)
        }
    };
}
const Ce = {
    balanceFigure: {
        kMwMTN: "sand-tyxrsu",
        kcqcaj: "sand-ss6m8b",
        $$css: true
    },
    detailLabel: {
        kzQI83: "sand-1iyjqo2",
        k7Eaqz: "sand-euugli",
        $$css: true
    },
    secondaryHairline: {
        kGVxlE: "sand-1ahgo13",
        $$css: true
    }
};
function Ft(state) {
    switch(state.status){
        case "ready":
            return {
                kind: "wallet",
                model: Ue(state.value),
                isRefreshFailed: false
            };
        case "loading":
            if (state.previous == null) {
                return {
                    kind: "loading"
                };
            }
            return {
                kind: "wallet",
                model: Ue(state.previous),
                isRefreshFailed: false
            };
        case "failed":
            if (state.previous == null) {
                return {
                    kind: "failed"
                };
            }
            return {
                kind: "wallet",
                model: Ue(state.previous),
                isRefreshFailed: true
            };
        case "empty":
        case "unavailable":
            return {
                kind: "wallet",
                model: {
                    kind: "enable"
                },
                isRefreshFailed: false
            };
    }
}
function Gs1Component() {
    Gs1Component.d = 1267;
    const s = c_1.c(12);
    const { _ } = u_1();
    let n;
    if (s[0] === Symbol.for("react.memo_cache_sentinel")) {
        n = {
            className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-137clkk sand-euugli"
        };
        s[0] = n;
    } else {
        n = s[0];
    }
    let i;
    if (s[1] !== _) {
        i = _({
            id: "BtFLI4"
        });
        s[1] = _;
        s[2] = i;
    } else {
        i = s[2];
    }
    let l;
    if (s[3] !== i) {
        l = <S as="span" color="primary" size="md">{i}</S>;
        s[3] = i;
        s[4] = l;
    } else {
        l = s[4];
    }
    let a;
    if (s[5] !== _) {
        a = _({
            id: "7gDRxo"
        });
        s[5] = _;
        s[6] = a;
    } else {
        a = s[6];
    }
    let r;
    if (s[7] !== a) {
        r = <S as="span" color="secondary" size="sm">{a}</S>;
        s[7] = a;
        s[8] = r;
    } else {
        r = s[8];
    }
    let d;
    if (s[9] !== l || s[10] !== r) {
        d = <div {...n}>{l}{r}</div>;
        s[9] = l;
        s[10] = r;
        s[11] = d;
    } else {
        d = s[11];
    }
    return d;
}
function Bs1Component(s) {
    Bs1Component.d = 1264;
    const e = c_1.c(58);
    const { presentation, onOpen, onRetry, isRetrying } = s;
    const { _ } = u_1();
    switch(presentation.kind){
        case "loading":
            {
                let h;
                if (e[0] !== _) {
                    h = _({
                        id: "4e7BUl"
                    });
                    e[0] = _;
                    e[1] = h;
                } else {
                    h = e[1];
                }
                let x;
                if (e[2] !== h) {
                    x = <S as="span" color="tertiary" size="sm">{h}</S>;
                    e[2] = h;
                    e[3] = x;
                } else {
                    x = e[3];
                }
                return x;
            }
        case "failed":
            {
                let h;
                if (e[4] !== _) {
                    h = _({
                        id: "L6YIkL"
                    });
                    e[4] = _;
                    e[5] = h;
                } else {
                    h = e[5];
                }
                let x;
                if (e[6] !== h) {
                    x = <S as="span" color="red" role="alert" size="sm">{h}</S>;
                    e[6] = h;
                    e[7] = x;
                } else {
                    x = e[7];
                }
                let y;
                if (e[8] !== _) {
                    y = _({
                        id: "6gRgw8"
                    });
                    e[8] = _;
                    e[9] = y;
                } else {
                    y = e[9];
                }
                let p;
                if (e[10] !== isRetrying || e[11] !== onRetry || e[12] !== y) {
                    p = <G disabled={isRetrying} onClick={onRetry} size="sm" style={Ce.secondaryHairline} variant="secondary">{y}</G>;
                    e[10] = isRetrying;
                    e[11] = onRetry;
                    e[12] = y;
                    e[13] = p;
                } else {
                    p = e[13];
                }
                let j;
                if (e[14] !== x || e[15] !== p) {
                    j = <>{x}{p}</>;
                    e[14] = x;
                    e[15] = p;
                    e[16] = j;
                } else {
                    j = e[16];
                }
                return j;
            }
    }
    const { model } = presentation;
    if (model.kind === "enable") {
        let h;
        if (e[17] !== onOpen) {
            h = ()=>onOpen("add");
            e[17] = onOpen;
            e[18] = h;
        } else {
            h = e[18];
        }
        let x;
        if (e[19] !== _) {
            x = _({
                id: "PaQ3df"
            });
            e[19] = _;
            e[20] = x;
        } else {
            x = e[20];
        }
        let y;
        if (e[21] !== h || e[22] !== x) {
            y = <G onClick={h} sentiment="accent" size="sm" variant="primary">{x}</G>;
            e[21] = h;
            e[22] = x;
            e[23] = y;
        } else {
            y = e[23];
        }
        return y;
    }
    if (model.autoTopUp !== null) {
        let h;
        if (e[24] !== onOpen) {
            h = ()=>onOpen("add");
            e[24] = onOpen;
            e[25] = h;
        } else {
            h = e[25];
        }
        let x;
        if (e[26] !== _) {
            x = _({
                id: "hdhvTn"
            });
            e[26] = _;
            e[27] = x;
        } else {
            x = e[27];
        }
        let y;
        if (e[28] !== h || e[29] !== x) {
            y = <G onClick={h} sentiment="accent" size="sm" variant="secondary">{x}</G>;
            e[28] = h;
            e[29] = x;
            e[30] = y;
        } else {
            y = e[30];
        }
        let p;
        if (e[31] !== onOpen) {
            p = ()=>onOpen("auto-top-up");
            e[31] = onOpen;
            e[32] = p;
        } else {
            p = e[32];
        }
        let j;
        if (e[33] !== _) {
            j = _({
                id: "dPJjXt"
            });
            e[33] = _;
            e[34] = j;
        } else {
            j = e[34];
        }
        let k;
        if (e[35] !== p || e[36] !== j) {
            k = <G onClick={p} size="sm" style={Ce.secondaryHairline} variant="secondary">{j}</G>;
            e[35] = p;
            e[36] = j;
            e[37] = k;
        } else {
            k = e[37];
        }
        let z;
        if (e[38] !== y || e[39] !== k) {
            z = <>{y}{k}</>;
            e[38] = y;
            e[39] = k;
            e[40] = z;
        } else {
            z = e[40];
        }
        return z;
    }
    let o;
    if (e[41] !== onOpen) {
        o = ()=>onOpen("add");
        e[41] = onOpen;
        e[42] = o;
    } else {
        o = e[42];
    }
    let c;
    if (e[43] !== _) {
        c = _({
            id: "hdhvTn"
        });
        e[43] = _;
        e[44] = c;
    } else {
        c = e[44];
    }
    let f;
    if (e[45] !== o || e[46] !== c) {
        f = <G onClick={o} sentiment="accent" size="sm" variant="secondary">{c}</G>;
        e[45] = o;
        e[46] = c;
        e[47] = f;
    } else {
        f = e[47];
    }
    let u;
    if (e[48] !== onOpen) {
        u = ()=>onOpen("auto-top-up");
        e[48] = onOpen;
        e[49] = u;
    } else {
        u = e[49];
    }
    let g;
    if (e[50] !== _) {
        g = _({
            id: "uWzGN1"
        });
        e[50] = _;
        e[51] = g;
    } else {
        g = e[51];
    }
    let m;
    if (e[52] !== u || e[53] !== g) {
        m = <G onClick={u} size="sm" variant="primary">{g}</G>;
        e[52] = u;
        e[53] = g;
        e[54] = m;
    } else {
        m = e[54];
    }
    let b;
    if (e[55] !== f || e[56] !== m) {
        b = <>{f}{m}</>;
        e[55] = f;
        e[56] = m;
        e[57] = b;
    } else {
        b = e[57];
    }
    return b;
}
function We1Component(s) {
    We1Component.d = 1265;
    const e = c_1.c(9);
    const { label, children } = s;
    let l;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        l = {
            className: "sand-9f619 sand-78zum5 sand-1pha0wt sand-1qughib sand-1oot3zn"
        };
        e[0] = l;
    } else {
        l = e[0];
    }
    let a;
    if (e[1] !== label) {
        a = <S as="span" color="tertiary" rootStyle={Ce.detailLabel} size="md">{label}</S>;
        e[1] = label;
        e[2] = a;
    } else {
        a = e[2];
    }
    let r;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        r = {
            className: "sand-3nfvp2 sand-1pha0wt sand-137clkk sand-uxw1ft sand-ss6m8b"
        };
        e[3] = r;
    } else {
        r = e[3];
    }
    let d;
    if (e[4] !== children) {
        d = <span {...r}>{children}</span>;
        e[4] = children;
        e[5] = d;
    } else {
        d = e[5];
    }
    let o;
    if (e[6] !== a || e[7] !== d) {
        o = <div {...l}>{a}{d}</div>;
        e[6] = a;
        e[7] = d;
        e[8] = o;
    } else {
        o = e[8];
    }
    return o;
}
function Ys1Component(s) {
    Ys1Component.d = 1262;
    const e = c_1.c(34);
    const { model } = s;
    const { _ } = u_1();
    const model_balanceLabel = model.balanceLabel;
    let a;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        a = {
            className: "sand-9f619 sand-78zum5 sand-1pha0wt sand-11twubx sand-uxw1ft"
        };
        e[0] = a;
    } else {
        a = e[0];
    }
    let r;
    if (e[1] !== model_balanceLabel) {
        r = {
            balanceLabel: model_balanceLabel
        };
        e[1] = model_balanceLabel;
        e[2] = r;
    } else {
        r = e[2];
    }
    let d;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        d = {
            0: <span {...p_1(a_.heading2, a$.semibold, Ce.balanceFigure)}/>
        };
        e[3] = d;
    } else {
        d = e[3];
    }
    let o;
    if (e[4] !== r) {
        o = <div data-sand-credits-balance {...a}><S as="span" color="tertiary" size="md"><T_1 id="wNtDEH" values={r} components={d}/></S></div>;
        e[4] = r;
        e[5] = o;
    } else {
        o = e[5];
    }
    let c;
    if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
        c = {
            className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-pkkfsy"
        };
        e[6] = c;
    } else {
        c = e[6];
    }
    let f;
    if (e[7] !== _) {
        f = _({
            id: "YGR4dd"
        });
        e[7] = _;
        e[8] = f;
    } else {
        f = e[8];
    }
    let u;
    if (e[9] !== model.monthlyUsageLabel) {
        u = <S as="span" color="primary" size="md">{model.monthlyUsageLabel}</S>;
        e[9] = model.monthlyUsageLabel;
        e[10] = u;
    } else {
        u = e[10];
    }
    let g;
    if (e[11] !== f || e[12] !== u) {
        g = <We1Component label={f}>{u}</We1Component>;
        e[11] = f;
        e[12] = u;
        e[13] = g;
    } else {
        g = e[13];
    }
    let m;
    if (e[14] !== _) {
        m = _({
            id: "vnD7OD"
        });
        e[14] = _;
        e[15] = m;
    } else {
        m = e[15];
    }
    let b;
    if (e[16] !== _ || e[17] !== model.monthlyLimitLabel) {
        b = model.monthlyLimitLabel ?? _({
            id: "NIuIk1"
        });
        e[16] = _;
        e[17] = model.monthlyLimitLabel;
        e[18] = b;
    } else {
        b = e[18];
    }
    let h;
    if (e[19] !== b) {
        h = <S as="span" color="primary" size="md">{b}</S>;
        e[19] = b;
        e[20] = h;
    } else {
        h = e[20];
    }
    let x;
    if (e[21] !== h || e[22] !== m) {
        x = <We1Component label={m}>{h}</We1Component>;
        e[21] = h;
        e[22] = m;
        e[23] = x;
    } else {
        x = e[23];
    }
    let y;
    if (e[24] !== _ || e[25] !== model.autoTopUp) {
        y = model.autoTopUp === null ? null : <We1Component label={_({
            id: "sqGaDF"
        })}><Js1Component amountLabel={model.autoTopUp.amountLabel} thresholdLabel={model.autoTopUp.thresholdLabel}/></We1Component>;
        e[24] = _;
        e[25] = model.autoTopUp;
        e[26] = y;
    } else {
        y = e[26];
    }
    let p;
    if (e[27] !== x || e[28] !== y || e[29] !== g) {
        p = <div {...c}>{g}{x}{y}</div>;
        e[27] = x;
        e[28] = y;
        e[29] = g;
        e[30] = p;
    } else {
        p = e[30];
    }
    let j;
    if (e[31] !== p || e[32] !== o) {
        j = <>{o}{p}</>;
        e[31] = p;
        e[32] = o;
        e[33] = j;
    } else {
        j = e[33];
    }
    return j;
}
function Js1Component(s) {
    Js1Component.d = 1261;
    const e = c_1.c(6);
    const { amountLabel, thresholdLabel } = s;
    let l;
    if (e[0] !== amountLabel || e[1] !== thresholdLabel) {
        l = {
            amountLabel,
            thresholdLabel
        };
        e[0] = amountLabel;
        e[1] = thresholdLabel;
        e[2] = l;
    } else {
        l = e[2];
    }
    let a;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        a = {
            0: <S as="span" color="primary" size="md"/>
        };
        e[3] = a;
    } else {
        a = e[3];
    }
    let r;
    if (e[4] !== l) {
        r = <S as="span" color="tertiary" size="md"><T_1 id="RClSp+" values={l} components={a}/></S>;
        e[4] = l;
        e[5] = r;
    } else {
        r = e[5];
    }
    return r;
}
function Vs1Component(s) {
    Vs1Component.d = 1266;
    const e = c_1.c(14);
    const { onRetry, isRetrying } = s;
    const { _ } = u_1();
    let a;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        a = {
            className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-ehausa"
        };
        e[0] = a;
    } else {
        a = e[0];
    }
    let r;
    if (e[1] !== _) {
        r = _({
            id: "B0l+H4"
        });
        e[1] = _;
        e[2] = r;
    } else {
        r = e[2];
    }
    let d;
    if (e[3] !== r) {
        d = <S as="span" color="red" role="alert" size="sm">{r}</S>;
        e[3] = r;
        e[4] = d;
    } else {
        d = e[4];
    }
    let o;
    if (e[5] !== _) {
        o = _({
            id: "6gRgw8"
        });
        e[5] = _;
        e[6] = o;
    } else {
        o = e[6];
    }
    let c;
    if (e[7] !== isRetrying || e[8] !== onRetry || e[9] !== o) {
        c = <G disabled={isRetrying} onClick={onRetry} size="sm" style={Ce.secondaryHairline} variant="secondary">{o}</G>;
        e[7] = isRetrying;
        e[8] = onRetry;
        e[9] = o;
        e[10] = c;
    } else {
        c = e[10];
    }
    let f;
    if (e[11] !== d || e[12] !== c) {
        f = <div data-sand-credits-refresh-failed {...a}>{d}{c}</div>;
        e[11] = d;
        e[12] = c;
        e[13] = f;
    } else {
        f = e[13];
    }
    return f;
}
function Ks1Component(s) {
    Ks1Component.d = 1263;
    const e = c_1.c(22);
    const { state, onOpen, onRetry, isRetrying } = s;
    ba("on-demand");
    let r;
    if (e[0] !== state) {
        r = Ft(state);
        e[0] = state;
        e[1] = r;
    } else {
        r = e[1];
    }
    const presentation = r;
    const model = presentation.kind === "wallet" && presentation.model.kind === "balance" ? presentation.model : null;
    const c = presentation.kind === "wallet" && presentation.isRefreshFailed;
    let f;
    let u;
    let g;
    let m;
    if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        f = dl("on-demand");
        u = {
            className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-1oot3zn sand-1t8xvyj sand-1n9uuka sand-usxwy5 sand-cssynl"
        };
        g = {
            className: "sand-9f619 sand-78zum5 sand-1cy8zhl sand-1qughib sand-ehausa"
        };
        m = <Gs1Component/>;
        e[2] = f;
        e[3] = u;
        e[4] = g;
        e[5] = m;
    } else {
        f = e[2];
        u = e[3];
        g = e[4];
        m = e[5];
    }
    let b;
    if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
        b = {
            className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-2lah0s sand-ehausa"
        };
        e[6] = b;
    } else {
        b = e[6];
    }
    let h;
    if (e[7] !== isRetrying || e[8] !== onOpen || e[9] !== onRetry || e[10] !== presentation) {
        h = <div {...g}>{m}<div data-sand-usage-row-controls {...b}><Bs1Component isRetrying={isRetrying} onOpen={onOpen} onRetry={onRetry} presentation={presentation}/></div></div>;
        e[7] = isRetrying;
        e[8] = onOpen;
        e[9] = onRetry;
        e[10] = presentation;
        e[11] = h;
    } else {
        h = e[11];
    }
    let x;
    if (e[12] !== model) {
        x = model === null ? null : <Ys1Component model={model}/>;
        e[12] = model;
        e[13] = x;
    } else {
        x = e[13];
    }
    let y;
    if (e[14] !== c || e[15] !== isRetrying || e[16] !== onRetry) {
        y = c ? <Vs1Component isRetrying={isRetrying} onRetry={onRetry}/> : null;
        e[14] = c;
        e[15] = isRetrying;
        e[16] = onRetry;
        e[17] = y;
    } else {
        y = e[17];
    }
    let p;
    if (e[18] !== h || e[19] !== x || e[20] !== y) {
        p = <div data-sand-usage-row="credits" id={f} {...u}>{h}{x}{y}</div>;
        e[18] = h;
        e[19] = x;
        e[20] = y;
        e[21] = p;
    } else {
        p = e[21];
    }
    return p;
}
const Ot = Date.parse("2025-11-20T08:00:00Z");
const Ss = 1440 * 60 * 1000;
const _s = gz((s)=>new Intl.DateTimeFormat(s, {
        month: "short",
        day: "numeric",
        timeZone: "UTC"
    }));
function ve(s) {
    return new Date(s).toISOString().slice(0, 10);
}
function ss({ timestampMs, deltaMonths }) {
    const n = new Date(timestampMs);
    const i = n.getUTCDate();
    n.setUTCDate(1);
    n.setUTCMonth(n.getUTCMonth() + deltaMonths);
    const l = new Date(Date.UTC(n.getUTCFullYear(), n.getUTCMonth() + 1, 0)).getUTCDate();
    n.setUTCDate(Math.min(i, l));
    return n.getTime();
}
function Re({ dailySpend, periodStartMs, periodEndMs, nowMs, maxPointCount }) {
    const r = new Map;
    for (const u of dailySpend){
        const g = ve(u.dayMs);
        r.set(g, (r.get(g) ?? 0) + u.spendCents);
    }
    const d = [];
    for(let u = periodStartMs; u < periodEndMs; u += Ss){
        d.push(ve(u));
    }
    const o = ve(nowMs);
    const c = maxPointCount !== undefined ? d.slice(0, maxPointCount) : d.filter((u)=>u <= o);
    let totalCents = 0;
    return c.map((dayKey)=>{
        totalCents += r.get(dayKey) ?? 0;
        return {
            dayKey,
            label: _s().format(new Date(`${dayKey}T00:00:00Z`)),
            totalCents
        };
    });
}
function qt({ grokBotDailySpend, totalDailySpend, ...rest }) {
    const l = Re({
        dailySpend: grokBotDailySpend,
        ...rest
    });
    const a = Re({
        dailySpend: totalDailySpend,
        ...rest
    });
    return l.map((r, d)=>{
        const r_totalCents = r.totalCents;
        const cursor = Math.max(0, (a[d]?.totalCents ?? 0) - r_totalCents);
        return {
            dayKey: r.dayKey,
            label: r.label,
            totalCents: r_totalCents + cursor,
            centsByProduct: {
                "grok-bot": r_totalCents,
                cursor
            }
        };
    });
}
function ts({ points, xForIndex, yForCents }) {
    return points.map((l, a)=>`${a === 0 ? "M" : "L"} ${xForIndex(a)} ${yForCents(l.totalCents)}`).join(" ");
}
function Wt({ points, upperCentsOf, lowerCentsOf, xForIndex, yForCents }) {
    const r = points.map((o, c)=>`${c === 0 ? "M" : "L"} ${xForIndex(c)} ${yForCents(upperCentsOf(o))}`);
    const d = points.map((o, c)=>`L ${xForIndex(c)} ${yForCents(lowerCentsOf(o))}`).reverse();
    return [
        ...r,
        ...d,
        "Z"
    ].join(" ");
}
function ns(s) {
    if (s <= 0) {
        return 1;
    }
    const e = s / 4;
    let n = 1;
    while(n * 10 <= e){
        n *= 10;
    }
    while(n > e){
        n /= 10;
    }
    const i = e / n;
    if (i <= 1) {
        return n;
    }
    if (i <= 2) {
        return 2 * n;
    }
    if (i <= 5) {
        return 5 * n;
    }
    return 10 * n;
}
function Ls(s) {
    const e = Math.max(0, ...s);
    const n = ns(e);
    const maxCents = Math.max(n * 4, Math.ceil(e / n) * n, 4);
    const l = Math.max(1, ns(maxCents));
    const a = Math.max(1, Math.round(maxCents / l));
    return {
        maxCents,
        ticks: Array.from({
            length: a + 1
        }, (r, d)=>d * l)
    };
}
const Gt = new Set([
    "link-supergrok-heavy-for-grok-bot",
    "link-supergrok-heavy-for-ultra",
    "link-supergrok-plus-or-heavy",
    "link-supergrok-for-grok-bot"
]);
function Cs(cta) {
    return cta.kind != null && Gt.has(cta.kind);
}
const Ht = {
    "upgrade-to-pro": {
        id: "2POOFK"
    },
    "upgrade-to-pro-plus-for-more-usage": {
        id: "3fPjUY"
    },
    "upgrade-to-ultra-for-more-usage": {
        id: "PB5HQ4"
    }
};
function ws({ grokPlanLabel }) {
    if (grokPlanLabel != null && grokPlanLabel.length > 0 && grokPlanLabel !== gF) {
        return grokPlanLabel;
    }
    return null;
}
function Vt(s, e) {
    const n = ws(e);
    if (n != null) {
        return n;
    }
    if (e.isSandTrial) {
        return s({
            id: "lhkaAC"
        });
    }
    for (const i of e.upgradeCtas){
        const l = i.kind == null ? undefined : Ht[i.kind];
        if (l != null) {
            return s(l);
        }
    }
    return null;
}
function zs(s) {
    return new Intl.DateTimeFormat(eY(), {
        month: "short",
        day: "numeric"
    }).format(new Date(s));
}
function Kt(s, e) {
    const n = zs(e);
    return s({
        id: "jG3nCu",
        values: {
            date: n
        }
    });
}
function Yt(s, e, cta) {
    const e_sandUsageResetTimestampMs = e.sandUsageResetTimestampMs;
    if (!e.hasNonZeroIncludedLimit || e_sandUsageResetTimestampMs == null) {
        return null;
    }
    if (e.isSandTrial) {
        return Kt(s, e_sandUsageResetTimestampMs);
    }
    if (Cs(cta) || cta.kind === gG) {
        return null;
    }
    const l = zs(e_sandUsageResetTimestampMs);
    return s({
        id: "uhnBIQ",
        values: {
            date: l
        }
    });
}
function Zt(s, usage, nowMs) {
    if (usage.periodStartMs < Ot) {
        return {
            kind: "before-chart-history",
            notice: s({
                id: "YJ8Dol"
            })
        };
    }
    const currentPoints = qt({
        grokBotDailySpend: usage.currentGrokBotDailySpend,
        totalDailySpend: usage.currentTotalDailySpend,
        periodStartMs: usage.periodStartMs,
        periodEndMs: usage.periodEndMs,
        nowMs
    });
    const previousPoints = usage.previousTotalDailySpend === null ? null : Re({
        dailySpend: usage.previousTotalDailySpend,
        periodStartMs: ss({
            timestampMs: usage.periodStartMs,
            deltaMonths: -1
        }),
        periodEndMs: ss({
            timestampMs: usage.periodEndMs,
            deltaMonths: -1
        }),
        nowMs,
        maxPointCount: currentPoints.length
    });
    const spendingLimitCents = usage.spendingLimitCents !== null && usage.spendingLimitCents > 0 ? usage.spendingLimitCents : null;
    const footnotes = [
        s({
            id: "AIjPv9"
        })
    ];
    if (usage.isRequestBasedPricing) {
        footnotes.push(s({
            id: "64Kn/w"
        }));
    }
    if (spendingLimitCents !== null) {
        footnotes.push(s({
            id: "41vP8h"
        }));
    }
    return {
        kind: "chart",
        chart: {
            title: s({
                id: "ro3+Jh"
            }),
            subtitle: s({
                id: "gfPiiz"
            }),
            currentPoints,
            previousPoints,
            spendingLimitCents,
            footnotes
        }
    };
}
function as(s) {
    return Math.min(Math.max(s, 0), 100);
}
function Xt(s, e) {
    if (e.hasNonZeroIncludedLimit) {
        return null;
    }
    if (e.hasAvailableUsage && e.sandUsagePercent != null && e.sandUsagePercent < 100) {
        return s({
            id: "SULP36"
        });
    }
    if (e.isSandTrial) {
        return s({
            id: "3DJO6C"
        });
    }
    if (e.hasEndedSandTrial) {
        return s({
            id: "azzy61"
        });
    }
    return null;
}
function Qt(cta) {
    if (cta.kind != null) {
        return `kind:${cta.kind}`;
    }
    const s_action = cta.action;
    if (s_action.kind === "open-url") {
        return `url:${s_action.url}`;
    }
    return `action:${s_action.action}`;
}
function Jt(s, e) {
    if (e == null) {
        return s({
            id: "A+zoTy"
        });
    }
    return s({
        id: "hM5IZe",
        values: {
            planName: e
        }
    });
}
function en(s, summary) {
    let n = Xt(s, summary);
    const i = new Map;
    return summary.upgradeCtas.map((cta, a)=>{
        const r = a === 0;
        const d = r ? Vt(s, summary) : null;
        const planDescription = r ? Yt(s, summary, cta) : null;
        const supportingText = cta.supportingText ?? n;
        if (cta.supportingText === null) {
            n = null;
        }
        const f = Qt(cta);
        const u = i.get(f) ?? 0;
        i.set(f, u + 1);
        return {
            key: u === 0 ? f : `${f}#${u}`,
            cta,
            rowLabel: r ? Jt(s, d) : null,
            planName: d,
            planDescription,
            supportingText,
            isSuperGrokLink: Cs(cta)
        };
    });
}
function ls(s, summary) {
    if (ws(summary) == null) {
        return s({
            id: "URP9it"
        });
    }
    return s({
        id: "+Mizp6"
    });
}
function sn(s, billingBrand) {
    return s(billingBrand === "grok" ? {
        id: "cMBy0b"
    } : {
        id: "URP9it"
    });
}
function is(s, summary) {
    if (summary.isSandTrial) {
        return gE({
            includedUsageKind: "trial",
            planId: null
        });
    }
    return s({
        id: "9x0ld9"
    });
}
function tn(s, summary) {
    if (summary.isSandTrial) {
        return null;
    }
    return s({
        id: "oshY9g"
    });
}
function nn({ onDemandSettings }) {
    return onDemandSettings != null && onDemandSettings.visible && onDemandSettings.eligible && !onDemandSettings.enabled;
}
const an = gz((s)=>new Intl.NumberFormat(s, {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    }));
const ln = gz((s)=>new Intl.NumberFormat(s, {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }));
const rn = gz((s)=>new Intl.NumberFormat(s, {
        style: "currency",
        currency: "USD",
        notation: "compact",
        minimumFractionDigits: 0,
        maximumFractionDigits: 1
    }));
const dn = 100000;
function X(s) {
    const e = s / 100;
    return (Number.isInteger(e) ? an() : ln()).format(e);
}
function Ns(s) {
    if (s >= dn) {
        return rn().format(s / 100);
    }
    return X(s);
}
function on(s, summary, nowMs) {
    if (summary.enterpriseTeamId != null) {
        return {
            enterpriseTeamId: summary.enterpriseTeamId,
            weekly: null,
            includedUsageTitle: is(s, summary),
            includedUsageDescription: null,
            onDemand: null,
            spendLimit: null,
            onDemandEnablePending: false,
            manageBillingLabel: ls(s, summary),
            upgradeRows: [],
            canCancelTrial: false
        };
    }
    let weekly = null;
    if (summary.sandUsagePercent != null) {
        const r = {
            nextResetMs: summary.sandUsageResetTimestampMs,
            nowMs
        };
        const resetLabel = summary.isSandTrial ? gA(s, r) : gB(s, {
            ...r,
            allowUnphasedDefault: summary.hasNonZeroIncludedLimit
        });
        weekly = {
            valueLabel: gC(summary.sandUsagePercent),
            barPercent: as(summary.sandUsagePercent),
            resetLabel
        };
    }
    const e_onDemand = summary.onDemand;
    let onDemand = null;
    e_onDemand != null && (e_onDemand.limitCents == null ? onDemand = {
        valueLabel: X(e_onDemand.usedCents),
        barPercent: null,
        resetLabel: gD(s, {
            nextResetMs: e_onDemand.resetTimestampMs,
            nowMs
        }),
        hasSpend: e_onDemand.usedCents > 0
    } : onDemand = {
        valueLabel: `${X(e_onDemand.usedCents)} / ${X(e_onDemand.limitCents)}`,
        barPercent: as(e_onDemand.usedCents / e_onDemand.limitCents * 100),
        resetLabel: gD(s, {
            nextResetMs: e_onDemand.resetTimestampMs,
            nowMs
        })
    });
    return {
        enterpriseTeamId: null,
        weekly,
        includedUsageTitle: is(s, summary),
        includedUsageDescription: tn(s, summary),
        onDemand,
        spendLimit: cn(summary.spendLimit),
        onDemandEnablePending: nn(summary),
        manageBillingLabel: ls(s, summary),
        upgradeRows: en(s, summary),
        canCancelTrial: summary.isSandTrial && summary.canCancelSandTrial
    };
}
function cn(spendLimit) {
    if (spendLimit == null) {
        return null;
    }
    return {
        savedMode: spendLimit.mode,
        savedLimitDollars: spendLimit.mode === "fixed" ? spendLimit.limitDollars : null
    };
}
const un = /^(?:\d+|\d{1,3}(?:,\d{3})+)$/;
function Ts(s) {
    const e = s.trim().replace(/^\$/, "");
    if (!un.test(e)) {
        return null;
    }
    const n = Number(e.replaceAll(",", ""));
    if (!Number.isSafeInteger(n) || n <= 0 || n >= gH) {
        return null;
    }
    return n;
}
function fn(mode, e) {
    if (mode !== "fixed") {
        return {
            mode
        };
    }
    const limitDollars = Ts(e);
    if (limitDollars === null) {
        return null;
    }
    return {
        mode: "fixed",
        limitDollars
    };
}
function mn(spendLimit, e, n) {
    if (e !== spendLimit.savedMode) {
        return true;
    }
    if (e !== "fixed") {
        return false;
    }
    return Ts(n) !== spendLimit.savedLimitDollars;
}
const Le = [
    {
        product: "grok-bot",
        ink: "#4C72B0",
        label: {
            id: "vwB47p"
        }
    },
    {
        product: "cursor",
        ink: "#5BA37A",
        label: {
            id: "D7/LAN"
        }
    }
];
const oe = {
    previous: "#9AA0A6",
    limit: "#FF6430"
};
const hn = 640;
const he = 260;
const Y = {
    top: 18,
    right: 24,
    bottom: 40
};
const pn = 56;
const rs = 8;
const xn = 8;
const gn = 72;
const ds = 20;
const bn = 0.28;
const yn = 0.72;
const os = 8;
const jn = {
    swatchLabel: {
        k1xSpc: "sand-78zum5",
        kGNEyG: "sand-6s0dn4",
        kOIVth: "sand-ehausa",
        $$css: true
    }
};
function Pe1Component(s) {
    Pe1Component.d = 1281;
    const e = c_1.c(15);
    const { color, shape, muted, label } = s;
    let r;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        r = p_1(jn.swatchLabel);
        e[0] = r;
    } else {
        r = e[0];
    }
    let d;
    if (e[1] !== muted || e[2] !== shape) {
        d = ({
            0: {
                className: "sand-qtp20y sand-6jxa94 sand-amhcws sand-13fuv20"
            },
            4: {
                className: "sand-170jfvy sand-1fsd2vl sand-1dhlr3c sand-1bl94mz"
            },
            2: {
                className: "sand-qtp20y sand-6jxa94 sand-amhcws sand-lya59e"
            },
            6: {
                className: "sand-170jfvy sand-1fsd2vl sand-1dhlr3c sand-1bl94mz sand-lya59e"
            },
            1: {
                className: "sand-qtp20y sand-6jxa94 sand-amhcws sand-13fuv20 sand-wq05k6"
            },
            5: {
                className: "sand-170jfvy sand-1fsd2vl sand-1dhlr3c sand-1bl94mz sand-wq05k6"
            },
            3: {
                className: "sand-qtp20y sand-6jxa94 sand-amhcws sand-lya59e sand-wq05k6"
            },
            7: {
                className: "sand-170jfvy sand-1fsd2vl sand-1dhlr3c sand-1bl94mz sand-lya59e sand-wq05k6"
            }
        })[(shape === "square") << 2 | (shape === "dashed-line") << 1 | (muted === true) << 0];
        e[1] = muted;
        e[2] = shape;
        e[3] = d;
    } else {
        d = e[3];
    }
    let o;
    if (e[4] !== color || e[5] !== shape) {
        o = shape === "square" ? {
            backgroundColor: color
        } : {
            borderTopColor: color
        };
        e[4] = color;
        e[5] = shape;
        e[6] = o;
    } else {
        o = e[6];
    }
    let c;
    if (e[7] !== d || e[8] !== o) {
        c = <span {...d} style={o}/>;
        e[7] = d;
        e[8] = o;
        e[9] = c;
    } else {
        c = e[9];
    }
    let f;
    if (e[10] !== label) {
        f = <S as="span" color="secondary" size="xs">{label}</S>;
        e[10] = label;
        e[11] = f;
    } else {
        f = e[11];
    }
    let u;
    if (e[12] !== c || e[13] !== f) {
        u = <span {...r}>{c}{f}</span>;
        e[12] = c;
        e[13] = f;
        e[14] = u;
    } else {
        u = e[14];
    }
    return u;
}
function Pe(s, e) {
    let n = 0;
    for (const { product } of Le.slice(0, e)){
        n += s.centsByProduct[product];
    }
    return n;
}
function useDs(s) {
    const e = c_1.c(5);
    const [n, setN] = r_1.useState(0);
    let l;
    if (e[0] !== s) {
        l = ()=>(d)=>{
                const o = ()=>setN(s(d));
                o();
                const c = new ResizeObserver(o);
                c.observe(d);
                return ()=>c.disconnect();
            };
        e[0] = s;
        e[1] = l;
    } else {
        l = e[1];
    }
    const [a] = r_1.useState(l);
    let r;
    if (e[2] !== a || e[3] !== n) {
        r = {
            attach: a,
            width: n
        };
        e[2] = a;
        e[3] = n;
        e[4] = r;
    } else {
        r = e[4];
    }
    return r;
}
function vn(s) {
    return Math.round(s.clientWidth);
}
function kn(s) {
    return Math.ceil(s.getBBox().width);
}
function $e() {
    return useDs(vn);
}
function Ms() {
    return useDs(kn);
}
function Sn({ anchorPx, tooltipWidthPx, plotWidthPx }) {
    const l = os - anchorPx;
    const a = plotWidthPx - os - tooltipWidthPx - anchorPx;
    return Math.round(Math.max(l, Math.min(-12, a)));
}
function UsComponent(s) {
    UsComponent.d = 1280;
    const e = c_1.c(56);
    const { chart } = s;
    const { i18n, _: __1 } = u_1();
    const [a, setA] = r_1.useState(null);
    const { attach, width } = $e();
    const { attach: attach_1, width: width_1 } = $e();
    const { attach: attach_2, width: width_2 } = Ms();
    const { currentPoints, previousPoints, spendingLimitCents } = chart;
    let x;
    if (e[0] !== currentPoints || e[1] !== previousPoints) {
        x = currentPoints.some(Tn) || (previousPoints ?? []).some(Nn);
        e[0] = currentPoints;
        e[1] = previousPoints;
        e[2] = x;
    } else {
        x = e[2];
    }
    const y = x;
    let p;
    let j;
    let k;
    let z;
    if (e[3] !== __1 || e[4] !== attach_2 || e[5] !== attach || e[6] !== attach_1 || e[7] !== width_2 || e[8] !== chart.subtitle || e[9] !== chart.title || e[10] !== currentPoints || e[11] !== y || e[12] !== a || e[13] !== i18n || e[14] !== width || e[15] !== previousPoints || e[16] !== spendingLimitCents || e[17] !== width_1) {
        const I = Ls([
            ...currentPoints.map(zn),
            ...(previousPoints ?? []).map(wn),
            spendingLimitCents ?? 0
        ]);
        const L = I.ticks.map(Cn);
        const C = width > 0 ? width : hn;
        const T = Math.max(pn, width_2 + rs);
        const B = Math.max(C - T - Y.right, 1);
        const _ = he - Y.top - Y.bottom;
        const U = currentPoints.length - 1;
        const $ = Math.max(1, Math.ceil(currentPoints.length / Math.max(2, Math.floor(B / gn))));
        let A;
        if (e[22] !== currentPoints.length || e[23] !== U || e[24] !== T || e[25] !== B) {
            A = (P)=>{
                if (currentPoints.length <= 1) {
                    return T + B / 2;
                }
                return T + P / U * B;
            };
            e[22] = currentPoints.length;
            e[23] = U;
            e[24] = T;
            e[25] = B;
            e[26] = A;
        } else {
            A = e[26];
        }
        const xForIndex = A;
        const yForCents = (P)=>Y.top + (1 - P / I.maxCents) * _;
        const M = currentPoints.at(-1)?.totalCents ?? 0;
        const q = spendingLimitCents !== null && (a !== null || M >= spendingLimitCents * yn);
        const F = a === null ? undefined : currentPoints[a];
        const O = a === null || previousPoints === null ? undefined : previousPoints[a];
        let ne;
        let anchorPx;
        if (e[27] !== C || e[28] !== a || e[29] !== width_1 || e[30] !== xForIndex) {
            anchorPx = a === null ? 0 : xForIndex(a);
            ne = Sn({
                anchorPx,
                tooltipWidthPx: width_1,
                plotWidthPx: C
            });
            e[27] = C;
            e[28] = a;
            e[29] = width_1;
            e[30] = xForIndex;
            e[31] = ne;
            e[32] = anchorPx;
        } else {
            ne = e[31];
            anchorPx = e[32];
        }
        const ge = ne;
        let de;
        if (e[33] !== __1) {
            de = __1({
                id: "72c5Qo"
            });
            e[33] = __1;
            e[34] = de;
        } else {
            de = e[34];
        }
        const ae = de;
        let le;
        if (e[35] !== __1) {
            le = __1({
                id: "UGQdzC"
            });
            e[35] = __1;
            e[36] = le;
        } else {
            le = e[36];
        }
        const be = le;
        let ie;
        if (e[37] !== __1) {
            ie = __1({
                id: "TxeDDP"
            });
            e[37] = __1;
            e[38] = ie;
        } else {
            ie = e[38];
        }
        const me = ie;
        if (e[39] === Symbol.for("react.memo_cache_sentinel")) {
            p = {
                className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-1oot3zn sand-y3j6vt sand-2f45yy"
            };
            e[39] = p;
        } else {
            p = e[39];
        }
        j = "enterprise-usage-chart";
        let re;
        if (e[40] === Symbol.for("react.memo_cache_sentinel")) {
            re = {
                className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-11twubx sand-usxwy5"
            };
            e[40] = re;
        } else {
            re = e[40];
        }
        let J;
        if (e[41] !== chart.title) {
            J = <S as="span" color="primary" size="md">{chart.title}</S>;
            e[41] = chart.title;
            e[42] = J;
        } else {
            J = e[42];
        }
        let ee;
        if (e[43] !== chart.subtitle) {
            ee = <S as="span" color="secondary" size="sm">{chart.subtitle}</S>;
            e[43] = chart.subtitle;
            e[44] = ee;
        } else {
            ee = e[44];
        }
        if (e[45] !== J || e[46] !== ee) {
            k = <div {...re}>{J}{ee}</div>;
            e[45] = J;
            e[46] = ee;
            e[47] = k;
        } else {
            k = e[47];
        }
        z = y ? <><div className="sand-1n2onr6 sand-h8yej3 sand-b3r6kr" onMouseLeave={()=>setA(null)} ref={attach}><svg className="sand-1lliihq sand-dwzuf7 sand-h8yej3" aria-label={chart.title} height={he} role="img" viewBox={`0 0 ${C} ${he}`} width={C}>{L.map(({ cents })=><line key={cents} opacity={0.45} stroke={bf["--cursor-stroke-tertiary"]} strokeWidth={1} x1={T} x2={C - Y.right} y1={yForCents(cents)} y2={yForCents(cents)}/>)}<g key={L.map(Ln).join(`
`)} ref={attach_2}>{L.map(({ cents, label })=><text key={cents} fill={bf["--cursor-text-secondary"]} fontSize={11} textAnchor="end" x={T - rs} y={yForCents(cents) + 4}>{label}</text>)}</g>{Le.map((P, R)=>{
            const upperCentsOf = (V)=>Pe(V, R + 1);
            return <g key={P.product}><path d={Wt({
                points: currentPoints,
                upperCentsOf,
                lowerCentsOf: (V)=>Pe(V, R),
                xForIndex,
                yForCents
            })} fill={P.ink} fillOpacity={bn}/><path d={ts({
                points: currentPoints.map((V)=>({
                        ...V,
                        totalCents: upperCentsOf(V)
                    })),
                xForIndex,
                yForCents
            })} fill="none" stroke={P.ink} strokeLinecap="round" strokeWidth={2}/></g>;
        })}{previousPoints !== null ? <path d={ts({
            points: previousPoints,
            xForIndex,
            yForCents
        })} fill="none" opacity={0.95} stroke={oe.previous} strokeDasharray="6 6" strokeLinecap="round" strokeWidth={2}/> : null}{spendingLimitCents !== null ? <g><line opacity={0.34} stroke={oe.limit} strokeWidth={2.5} x1={T} x2={C - Y.right} y1={yForCents(spendingLimitCents)} y2={yForCents(spendingLimitCents)}/>{q ? <text fill={oe.limit} fontSize={10} opacity={0.82} textAnchor="end" x={C - Y.right} y={yForCents(spendingLimitCents) - 6}>{__1({
            id: "sEahJQ",
            values: {
                0: X(spendingLimitCents)
            }
        })}</text> : null}</g> : null}{a !== null && F !== undefined ? <g><line opacity={0.45} stroke={bf["--cursor-text-primary"]} strokeWidth={1} x1={xForIndex(a)} x2={xForIndex(a)} y1={Y.top} y2={he - Y.bottom}/>{Le.map((P, R)=><circle key={P.product} cx={xForIndex(a)} cy={yForCents(Pe(F, R + 1))} fill={P.ink} r={4} stroke={bf["--cursor-bg-primary"]} strokeWidth={1.5}/>)}{O !== undefined ? <circle cx={xForIndex(a)} cy={yForCents(O.totalCents)} fill={oe.previous} r={3.5} stroke={bf["--cursor-bg-primary"]} strokeWidth={1.5}/> : null}</g> : null}<line stroke={bf["--cursor-stroke-tertiary"]} strokeWidth={1} x1={T} x2={C - Y.right} y1={he - Y.bottom} y2={he - Y.bottom}/>{currentPoints.map((P, R)=>{
            const x_1 = R === 0 ? T : (xForIndex(R - 1) + xForIndex(R)) / 2;
            const V = R === U ? C - Y.right : (xForIndex(R + 1) + xForIndex(R)) / 2;
            return <g key={P.dayKey}><rect fill="transparent" height={_} onFocus={()=>setA(R)} onMouseEnter={()=>setA(R)} width={Math.max(V - x_1, xn)} x={x_1} y={Y.top}/>{R % $ === 0 ? <text fill={bf["--cursor-text-secondary"]} fontSize={11} textAnchor="middle" x={Math.min(Math.max(xForIndex(R), T + ds), C - Y.right - ds)} y={he - 14}>{P.label}</text> : null}</g>;
        })}</svg>{F !== undefined ? <div className="sand-47corl sand-10l6tqk sand-e6tamo sand-1vjfegm sand-78zum5 sand-dt5ytf sand-11twubx sand-fb3i0g sand-ezivpi sand-13ly8rp sand-t1q3vd sand-1xlntvz sand-8fiw5y sand-1043rbw sand-mkeg23 sand-1y0btm7 sand-qz0629 sand-3dhcaw sand-1ep8fdt" data-component="enterprise-usage-tooltip" ref={attach_1} style={{
            left: `${anchorPx}px`,
            transform: `translateX(${ge}px)`,
            visibility: width_1 > 0 ? "visible" : "hidden"
        }}><S as="span" color="primary" size="sm">{F.label}</S>{Le.map((P)=><div key={P.product} className="sand-78zum5 sand-6s0dn4 sand-1qughib sand-1jlwbde sand-uxw1ft"><Pe1Component color={P.ink} label={i18n._(P.label)} shape="square"/><S as="span" color="primary" size="xs">{X(F.centsByProduct[P.product])}</S></div>)}<div className="sand-78zum5 sand-6s0dn4 sand-1qughib sand-1jlwbde sand-uxw1ft"><span className="sand-78zum5 sand-6s0dn4 sand-ehausa"><span className="sand-qtp20y sand-6jxa94 sand-amhcws sand-13fuv20 sand-lshs6z"/><S as="span" color="primary" size="xs">{ae}</S></span><S as="span" color="primary" size="xs">{X(F.totalCents)}</S></div>{O !== undefined ? <div className="sand-78zum5 sand-6s0dn4 sand-1qughib sand-1jlwbde sand-uxw1ft"><Pe1Component color={oe.previous} label={be} shape="dashed-line"/><S as="span" color="primary" size="xs">{X(O.totalCents)}</S></div> : null}{spendingLimitCents !== null ? <div className="sand-78zum5 sand-6s0dn4 sand-1qughib sand-1jlwbde sand-uxw1ft"><Pe1Component color={oe.limit} label={me} muted shape="line"/><S as="span" color="primary" size="xs">{X(spendingLimitCents)}</S></div> : null}</div> : null}</div><div className="sand-78zum5 sand-1a02dak sand-6s0dn4 sand-1jlwbde">{Le.map((P)=><Pe1Component key={P.product} color={P.ink} label={i18n._(P.label)} shape="square"/>)}{previousPoints !== null ? <Pe1Component color={oe.previous} label={be} shape="dashed-line"/> : null}{spendingLimitCents !== null ? <Pe1Component color={oe.limit} label={me} muted shape="line"/> : null}</div></> : <div className="sand-9f619 sand-78zum5 sand-1ymw6g sand-6s0dn4 sand-l56j7k"><S as="span" color="tertiary" size="sm">{__1({
            id: "ABjeYi"
        })}</S></div>;
        e[3] = __1;
        e[4] = attach_2;
        e[5] = attach;
        e[6] = attach_1;
        e[7] = width_2;
        e[8] = chart.subtitle;
        e[9] = chart.title;
        e[10] = currentPoints;
        e[11] = y;
        e[12] = a;
        e[13] = i18n;
        e[14] = width;
        e[15] = previousPoints;
        e[16] = spendingLimitCents;
        e[17] = width_1;
        e[18] = p;
        e[19] = j;
        e[20] = k;
        e[21] = z;
    } else {
        p = e[18];
        j = e[19];
        k = e[20];
        z = e[21];
    }
    let w;
    if (e[48] !== chart.footnotes) {
        w = chart.footnotes.length > 0 ? <div className="sand-78zum5 sand-dt5ytf sand-11twubx">{chart.footnotes.map(NComponent)}</div> : null;
        e[48] = chart.footnotes;
        e[49] = w;
    } else {
        w = e[49];
    }
    let N;
    if (e[50] !== p || e[51] !== j || e[52] !== k || e[53] !== z || e[54] !== w) {
        N = <div {...p} data-component={j}>{k}{z}{w}</div>;
        e[50] = p;
        e[51] = j;
        e[52] = k;
        e[53] = z;
        e[54] = w;
        e[55] = N;
    } else {
        N = e[55];
    }
    return N;
}
function NComponent(s) {
    return <S key={s} as="span" color="tertiary" size="sm">{s}</S>;
}
function Ln({ label }) {
    return label;
}
function Cn(s) {
    return {
        cents: s,
        label: Ns(s)
    };
}
function wn(s) {
    return s.totalCents;
}
function zn(s) {
    return s.totalCents;
}
function Nn(s) {
    return s.totalCents > 0;
}
function Tn(s) {
    return s.totalCents > 0;
}
const Dn = {
    none: {
        id: "EdQY6l"
    },
    fixed: {
        id: "TpqW74"
    },
    unlimited: {
        id: "NIuIk1"
    }
};
const Mn = 100;
const Ie = {
    limitSelect: {
        kAzted: "sand-21xpn4",
        kaIpWk: "sand-1qmwy7c",
        kZCmMZ: "sand-e2zdcy",
        kwRFfy: "sand-f159sx",
        $$css: true
    },
    footerNotice: {
        k71WvV: "sand-11t971q",
        $$css: true
    },
    secondaryHairline: {
        kGVxlE: "sand-1ahgo13",
        $$css: true
    }
};
function Ae(s) {
    return new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 0
    }).format(s);
}
function YeComponent() {
    YeComponent.d = 1298;
    const s = c_1.c(12);
    const { _ } = u_1();
    let n;
    if (s[0] === Symbol.for("react.memo_cache_sentinel")) {
        n = {
            className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-137clkk sand-euugli"
        };
        s[0] = n;
    } else {
        n = s[0];
    }
    let i;
    if (s[1] !== _) {
        i = _({
            id: "jrbHD9"
        });
        s[1] = _;
        s[2] = i;
    } else {
        i = s[2];
    }
    let l;
    if (s[3] !== i) {
        l = <S as="span" color="primary" size="md">{i}</S>;
        s[3] = i;
        s[4] = l;
    } else {
        l = s[4];
    }
    let a;
    if (s[5] !== _) {
        a = _({
            id: "/9Papq"
        });
        s[5] = _;
        s[6] = a;
    } else {
        a = s[6];
    }
    let r;
    if (s[7] !== a) {
        r = <S as="span" color="secondary" size="sm">{a}</S>;
        s[7] = a;
        s[8] = r;
    } else {
        r = s[8];
    }
    let d;
    if (s[9] !== l || s[10] !== r) {
        d = <div {...n}>{l}{r}</div>;
        s[9] = l;
        s[10] = r;
        s[11] = d;
    } else {
        d = s[11];
    }
    return d;
}
function PsComponent(s) {
    PsComponent.d = 1297;
    const e = c_1.c(13);
    const { dashboardUrl } = s;
    ba("on-demand");
    const { _ } = u_1();
    const l = bA();
    let a;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        a = dl("on-demand");
        e[0] = a;
    } else {
        a = e[0];
    }
    let r;
    let d;
    let o;
    let c;
    if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
        r = {
            className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-883omv sand-1t8xvyj sand-1n9uuka sand-usxwy5 sand-cssynl"
        };
        d = {
            className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-ehausa"
        };
        o = <YeComponent/>;
        c = {
            className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-2lah0s sand-pkkfsy"
        };
        e[1] = r;
        e[2] = d;
        e[3] = o;
        e[4] = c;
    } else {
        r = e[1];
        d = e[2];
        o = e[3];
        c = e[4];
    }
    let f;
    if (e[5] !== dashboardUrl || e[6] !== l) {
        f = ()=>{
            l(dashboardUrl);
        };
        e[5] = dashboardUrl;
        e[6] = l;
        e[7] = f;
    } else {
        f = e[7];
    }
    let u;
    if (e[8] !== _) {
        u = _({
            id: "PaQ3df"
        });
        e[8] = _;
        e[9] = u;
    } else {
        u = e[9];
    }
    let g;
    if (e[10] !== f || e[11] !== u) {
        g = <div id={a} data-sand-usage-row="on-demand" {...r}><div {...d}>{o}<div {...c}><G onClick={f} sentiment="accent" size="sm" variant="primary">{u}</G></div></div></div>;
        e[10] = f;
        e[11] = u;
        e[12] = g;
    } else {
        g = e[12];
    }
    return g;
}
function Un(setM) {
    const e = c_1.c(8);
    const n = bA();
    const { invoke, isPending } = gK();
    let a;
    if (e[0] !== invoke || e[1] !== isPending || e[2] !== setM || e[3] !== n) {
        a = (o)=>{
            if (!isPending) {
                invoke(gN(o)).then((c)=>{
                    if (c.openUrl !== undefined) {
                        n(c.openUrl);
                        setM({
                            kind: "checkout-opened"
                        });
                        return;
                    }
                    setM({
                        kind: "settled",
                        ok: c.ok,
                        message: c.message
                    });
                }, (c)=>{
                    d0(c, {
                        tags: {
                            sand_area: "settings-usage"
                        }
                    });
                    setM({
                        kind: "settled",
                        ok: false,
                        message: null
                    });
                });
            }
        };
        e[0] = invoke;
        e[1] = isPending;
        e[2] = setM;
        e[3] = n;
        e[4] = a;
    } else {
        a = e[4];
    }
    const addPaymentMethod = a;
    let d;
    if (e[5] !== addPaymentMethod || e[6] !== isPending) {
        d = {
            addPaymentMethod,
            isOpening: isPending
        };
        e[5] = addPaymentMethod;
        e[6] = isPending;
        e[7] = d;
    } else {
        d = e[7];
    }
    return d;
}
function Pn(s) {
    const e = c_1.c(7);
    const n = gL();
    const { refresh, isPending } = gM();
    let a;
    if (e[0] !== isPending || e[1] !== refresh) {
        a = ()=>{
            if (!isPending) {
                refresh();
            }
        };
        e[0] = isPending;
        e[1] = refresh;
        e[2] = a;
    } else {
        a = e[2];
    }
    const r = x(a);
    let d;
    if (e[3] !== s || e[4] !== r || e[5] !== n) {
        d = ()=>{
            if (s) {
                return n(r);
            }
            return In;
        };
        e[3] = s;
        e[4] = r;
        e[5] = n;
        e[6] = d;
    } else {
        d = e[6];
    }
    i_1(d);
}
function In() {}
function IsComponent(s) {
    IsComponent.d = 1299;
    const e = c_1.c(94);
    const { spendLimit, meter } = s;
    ba("on-demand");
    const { i18n, _: __1 } = u_1();
    const { setSpendLimit, isPending } = gI();
    const [o, setO] = r_1.useState(spendLimit.savedMode);
    let f;
    if (e[0] !== spendLimit.savedLimitDollars) {
        f = spendLimit.savedLimitDollars != null ? Ae(spendLimit.savedLimitDollars) : "";
        e[0] = spendLimit.savedLimitDollars;
        e[1] = f;
    } else {
        f = e[1];
    }
    const [u, setU] = r_1.useState(f);
    const [m, setM] = r_1.useState(null);
    const { addPaymentMethod, isOpening } = Un(setM);
    Pn(m?.kind === "checkout-opened");
    const y = m?.kind === "refused" && m.refusal === "payment-method-required";
    const p = isPending || isOpening;
    let j;
    if (e[2] !== __1) {
        j = (O)=>{
            if (typeof O !== "string") {
                return O.server;
            }
            switch(O){
                case "payment-method-required":
                    return __1({
                        id: "GpCliH"
                    });
                case "invalid-update":
                    return __1({
                        id: "gw+r9w"
                    });
                case "signed-out":
                    return __1({
                        id: "j4rm4L"
                    });
                case "failed":
                    return __1({
                        id: "6VjcJ+"
                    });
            }
        };
        e[2] = __1;
        e[3] = j;
    } else {
        j = e[3];
    }
    const k = j;
    let z;
    if (e[4] !== __1 || e[5] !== k) {
        z = (O)=>{
            switch(O.kind){
                case "refused":
                    return {
                        text: k(O.refusal),
                        tone: O.refusal === "payment-method-required" ? "status" : "alert"
                    };
                case "checkout-opened":
                    return {
                        text: __1({
                            id: "qN2rKx"
                        }),
                        tone: "status"
                    };
                case "settled":
                    if (O.ok) {
                        if (O.message === null) {
                            return null;
                        }
                        return {
                            text: O.message,
                            tone: "status"
                        };
                    }
                    return {
                        text: O.message ?? __1({
                            id: "Lr/LAl"
                        }),
                        tone: "alert"
                    };
            }
        };
        e[4] = __1;
        e[5] = k;
        e[6] = z;
    } else {
        z = e[6];
    }
    const w = z;
    let N;
    if (e[7] !== m || e[8] !== w) {
        N = m === null ? null : w(m);
        e[7] = m;
        e[8] = w;
        e[9] = N;
    } else {
        N = e[9];
    }
    const I = N;
    let L;
    let C;
    let T;
    let B;
    let _;
    let U;
    let $;
    let A;
    let D;
    let v;
    if (e[10] !== __1 || e[11] !== u || e[12] !== o || e[13] !== i18n || e[14] !== p || e[15] !== isPending || e[16] !== meter || e[17] !== setSpendLimit || e[18] !== spendLimit) {
        const title = __1({
            id: "jrbHD9"
        });
        let ne;
        if (e[29] !== u || e[30] !== o || e[31] !== spendLimit) {
            ne = mn(spendLimit, o, u);
            e[29] = u;
            e[30] = o;
            e[31] = spendLimit;
            e[32] = ne;
        } else {
            ne = e[32];
        }
        B = ne;
        let se;
        if (e[33] !== u || e[34] !== o) {
            se = fn(o, u);
            e[33] = u;
            e[34] = o;
            e[35] = se;
        } else {
            se = e[35];
        }
        L = se;
        _ = L !== null && L.mode !== "none" ? L : null;
        let ge;
        if (e[36] !== i18n) {
            ge = gJ.map((K)=>({
                    value: K,
                    label: i18n._(Dn[K])
                }));
            e[36] = i18n;
            e[37] = ge;
        } else {
            ge = e[37];
        }
        const options = ge;
        const ae = meter != null && spendLimit.savedMode !== "none" && (meter.barPercent != null || meter.hasSpend === true) ? meter : null;
        let le;
        if (e[38] !== u || e[39] !== spendLimit.savedLimitDollars) {
            le = (K)=>{
                setM(null);
                setO(K);
                if (K === "fixed" && u === "") {
                    setU(Ae(spendLimit.savedLimitDollars ?? Mn));
                }
            };
            e[38] = u;
            e[39] = spendLimit.savedLimitDollars;
            e[40] = le;
        } else {
            le = e[40];
        }
        const be = le;
        let ie;
        if (e[41] !== spendLimit.savedLimitDollars || e[42] !== spendLimit.savedMode) {
            ie = ()=>{
                setM(null);
                setO(spendLimit.savedMode);
                setU(spendLimit.savedLimitDollars != null ? Ae(spendLimit.savedLimitDollars) : "");
            };
            e[41] = spendLimit.savedLimitDollars;
            e[42] = spendLimit.savedMode;
            e[43] = ie;
        } else {
            ie = e[43];
        }
        C = ie;
        let me;
        if (e[44] !== L || e[45] !== isPending || e[46] !== setSpendLimit) {
            me = ()=>{
                if (!(L === null || isPending)) {
                    setM(null);
                    setSpendLimit(L).then((K)=>{
                        if (!K.ok) {
                            setM({
                                kind: "refused",
                                refusal: K.refusal
                            });
                        }
                    }, (K)=>{
                        d0(K, {
                            tags: {
                                sand_area: "settings-usage"
                            }
                        });
                        setM({
                            kind: "refused",
                            refusal: "failed"
                        });
                    });
                }
            };
            e[44] = L;
            e[45] = isPending;
            e[46] = setSpendLimit;
            e[47] = me;
        } else {
            me = e[47];
        }
        T = me;
        if (e[48] === Symbol.for("react.memo_cache_sentinel")) {
            U = dl("on-demand");
            e[48] = U;
        } else {
            U = e[48];
        }
        $ = "on-demand";
        let re;
        let J;
        if (e[49] === Symbol.for("react.memo_cache_sentinel")) {
            A = {
                className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-883omv sand-1t8xvyj sand-1n9uuka sand-usxwy5 sand-cssynl"
            };
            re = {
                className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-ehausa"
            };
            J = <YeComponent/>;
            e[49] = re;
            e[50] = J;
            e[51] = A;
        } else {
            re = e[49];
            J = e[50];
            A = e[51];
        }
        let ee;
        if (e[52] === Symbol.for("react.memo_cache_sentinel")) {
            ee = {
                className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-2lah0s sand-pkkfsy"
            };
            e[52] = ee;
        } else {
            ee = e[52];
        }
        let P;
        if (e[53] !== __1 || e[54] !== u || e[55] !== o || e[56] !== p) {
            P = o === "fixed" ? <label className="sand-9f619 sand-3nfvp2 sand-6s0dn4 sand-12mrbbr sand-1fu8urw sand-10w6t97 sand-196pc8s sand-22095l sand-1qmwy7c sand-mkeg23 sand-1y0btm7 sand-fnq37j sand-vvtkfd"><S as="span" color="primary" size="md">$</S><input className="sand-9f619 sand-1iyjqo2 sand-euugli sand-h8yej3 sand-1717udv sand-c342km sand-1a2a7pz sand-jbqb8w sand-1wd3ewq sand-11wthnw sand-d4r4e8 sand-jb2p0i" aria-label={__1({
                id: "8ZB9hg"
            })} disabled={p} inputMode="numeric" onChange={(K)=>{
                setM(null);
                setU(K.currentTarget.value);
            }} spellCheck={false} type="text" value={u}/></label> : null;
            e[53] = __1;
            e[54] = u;
            e[55] = o;
            e[56] = p;
            e[57] = P;
        } else {
            P = e[57];
        }
        let R;
        if (e[58] !== __1) {
            R = __1({
                id: "jrbHD9"
            });
            e[58] = __1;
            e[59] = R;
        } else {
            R = e[59];
        }
        let Z;
        if (e[60] !== be) {
            Z = (K)=>{
                if (K !== null) {
                    be(K);
                }
            };
            e[60] = be;
            e[61] = Z;
        } else {
            Z = e[61];
        }
        let V;
        if (e[62] !== o || e[63] !== p || e[64] !== options || e[65] !== R || e[66] !== Z) {
            V = <E aria-label={R} disabled={p} onValueChange={Z} options={options} placement="bottom-end" rootStyle={Ie.limitSelect} size="lg" value={o} variant="ghost"/>;
            e[62] = o;
            e[63] = p;
            e[64] = options;
            e[65] = R;
            e[66] = Z;
            e[67] = V;
        } else {
            V = e[67];
        }
        if (e[68] !== P || e[69] !== V) {
            D = <div {...re}>{J}<div data-sand-usage-row-controls {...ee}>{P}{V}</div></div>;
            e[68] = P;
            e[69] = V;
            e[70] = D;
        } else {
            D = e[70];
        }
        v = ae != null ? <div className="sand-9f619 sand-78zum5 sand-dt5ytf sand-pkkfsy">{ae.barPercent != null ? <div aria-label={__1({
            id: "5OJby0",
            values: {
                0: ae.valueLabel,
                title
            }
        })} aria-valuemax={100} aria-valuemin={0} aria-valuenow={ae.barPercent} role="meter" className="sand-9f619 sand-qu0tyb sand-b3r6kr sand-149ho13 sand-25lytf"><div className="sand-9f619 sand-5yr21d sand-149ho13 sand-db05xe" style={{
            width: `${ae.barPercent}%`
        }}/></div> : null}<div className="sand-9f619 sand-78zum5 sand-1pha0wt sand-1qughib sand-883omv"><S as="span" color="secondary" size="xs">{ae.resetLabel ?? ""}</S><S as="span" color="secondary" size="xs">{ae.valueLabel}</S></div></div> : null;
        e[10] = __1;
        e[11] = u;
        e[12] = o;
        e[13] = i18n;
        e[14] = p;
        e[15] = isPending;
        e[16] = meter;
        e[17] = setSpendLimit;
        e[18] = spendLimit;
        e[19] = L;
        e[20] = C;
        e[21] = T;
        e[22] = B;
        e[23] = _;
        e[24] = U;
        e[25] = $;
        e[26] = A;
        e[27] = D;
        e[28] = v;
    } else {
        L = e[19];
        C = e[20];
        T = e[21];
        B = e[22];
        _ = e[23];
        U = e[24];
        $ = e[25];
        A = e[26];
        D = e[27];
        v = e[28];
    }
    let M;
    if (e[71] !== U || e[72] !== $ || e[73] !== A || e[74] !== D || e[75] !== v) {
        M = <div id={U} data-sand-usage-row={$} {...A}>{D}{v}</div>;
        e[71] = U;
        e[72] = $;
        e[73] = A;
        e[74] = D;
        e[75] = v;
        e[76] = M;
    } else {
        M = e[76];
    }
    let q;
    if (e[77] !== __1 || e[78] !== addPaymentMethod || e[79] !== L || e[80] !== C || e[81] !== T || e[82] !== p || e[83] !== B || e[84] !== isOpening || e[85] !== isPending || e[86] !== m || e[87] !== y || e[88] !== _ || e[89] !== I) {
        q = B || m !== null ? <div className="sand-9f619 sand-78zum5 sand-6s0dn4 sand-13a6bvl sand-ehausa sand-1t8xvyj sand-t1q3vd sand-usxwy5 sand-7ru5ko">{I !== null ? <S as="span" color={I.tone === "status" ? "secondary" : "red"} role={I.tone} rootStyle={Ie.footerNotice} size="sm">{I.text}</S> : null}<G disabled={p} onClick={C} size="sm" style={Ie.secondaryHairline} variant="secondary">{__1({
            id: "dEgA5A"
        })}</G>{y ? <G disabled={isOpening || _ === null} onClick={()=>{
            if (_ !== null) {
                addPaymentMethod(_);
            }
        }} size="sm" trailingIcon="arrow-right-up" variant="primary">{__1(isOpening ? {
            id: "598XO1"
        } : {
            id: "lRpmgk"
        })}</G> : <G disabled={isPending || L === null || !B} onClick={T} size="sm" variant="primary">{__1(isPending ? {
            id: "K/F6pa"
        } : {
            id: "tfDRzk"
        })}</G>}</div> : null;
        e[77] = __1;
        e[78] = addPaymentMethod;
        e[79] = L;
        e[80] = C;
        e[81] = T;
        e[82] = p;
        e[83] = B;
        e[84] = isOpening;
        e[85] = isPending;
        e[86] = m;
        e[87] = y;
        e[88] = _;
        e[89] = I;
        e[90] = q;
    } else {
        q = e[90];
    }
    let F;
    if (e[91] !== M || e[92] !== q) {
        F = <>{M}{q}</>;
        e[91] = M;
        e[92] = q;
        e[93] = F;
    } else {
        F = e[93];
    }
    return F;
}
const An = 560;
const ye = 200;
const te = {
    top: 12,
    right: 12,
    bottom: 28
};
const En = 48;
const cs = 8;
const Rn = 0.32;
const $n = 64;
const Bn = 64;
const Fn = {
    swatchLabel: {
        k1xSpc: "sand-78zum5",
        kGNEyG: "sand-6s0dn4",
        kOIVth: "sand-ehausa",
        k7Eaqz: "sand-euugli",
        $$css: true
    }
};
function BeComponent(s) {
    BeComponent.d = 1322;
    const e = c_1.c(9);
    const { series } = s;
    let i;
    let l;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        i = p_1(Fn.swatchLabel);
        l = {
            className: "sand-2lah0s sand-170jfvy sand-1fsd2vl sand-1bl94mz"
        };
        e[0] = i;
        e[1] = l;
    } else {
        i = e[0];
        l = e[1];
    }
    let a;
    if (e[2] !== series.ink) {
        a = <span {...l} style={{
            backgroundColor: series.ink
        }}/>;
        e[2] = series.ink;
        e[3] = a;
    } else {
        a = e[3];
    }
    let r;
    if (e[4] !== series.label) {
        r = <S as="span" color="secondary" size="xs" truncate>{series.label}</S>;
        e[4] = series.label;
        e[5] = r;
    } else {
        r = e[5];
    }
    let d;
    if (e[6] !== a || e[7] !== r) {
        d = <span {...i}>{a}{r}</span>;
        e[6] = a;
        e[7] = r;
        e[8] = d;
    } else {
        d = e[8];
    }
    return d;
}
function FeComponent(s) {
    FeComponent.d = 1321;
    const e = c_1.c(15);
    const { label, chart } = s;
    const { _: __1 } = u_1();
    const [a, setA] = r_1.useState(null);
    const { attach, width } = $e();
    const { attach: attach_1, width: width_1 } = Ms();
    const { days, series } = chart;
    let m;
    if (e[0] !== __1 || e[1] !== attach || e[2] !== attach_1 || e[3] !== width_1 || e[4] !== chart.totalCents || e[5] !== days || e[6] !== a || e[7] !== label || e[8] !== width || e[9] !== series) {
        const b = [];
        let h = days.map(Wn);
        for (const v of series){
            h = h.map((M, q)=>M + (v.cents[q] ?? 0));
            b.push(h);
        }
        const x = h;
        const y = Ls(x);
        const p = y.ticks.map(qn);
        const j = width > 0 ? width : An;
        const k = Math.max(En, width_1 + cs);
        const z = Math.max(j - k - te.right, 1);
        const w = ye - te.top - te.bottom;
        const N = z / Math.max(days.length, 1);
        const I = Math.max(1, Math.ceil($n / N));
        let L;
        if (e[11] !== N || e[12] !== k) {
            L = (v)=>k + N * (v + 0.5);
            e[11] = N;
            e[12] = k;
            e[13] = L;
        } else {
            L = e[13];
        }
        const C = L;
        const T = (v)=>te.top + (1 - v / y.maxCents) * w;
        const B = (v, M)=>b[v]?.[M] ?? 0;
        const _ = (v)=>days.map((M, q)=>`${q === 0 ? "M" : "L"} ${C(q)} ${T(B(v, q))}`).join(" ");
        const U = (v)=>{
            const M = days.map((q, F)=>`L ${C(F)} ${T(B(v - 1, F))}`).reverse();
            return [
                _(v),
                ...M,
                "Z"
            ].join(" ");
        };
        const $ = a === null ? undefined : days[a];
        const A = a === null ? 0 : C(a) / j * 100;
        let D;
        if (e[14] === Symbol.for("react.memo_cache_sentinel")) {
            D = {
                className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-1oot3zn sand-y3j6vt sand-2f45yy"
            };
            e[14] = D;
        } else {
            D = e[14];
        }
        m = <div {...D} data-component="usage-breakdown-chart">{chart.totalCents <= 0 ? <div className="sand-78zum5 sand-1wkxgih sand-6s0dn4 sand-l56j7k"><S as="span" color="tertiary" size="sm">{__1({
            id: "HT8qbw"
        })}</S></div> : <><div className="sand-1n2onr6 sand-h8yej3" onMouseLeave={()=>setA(null)} ref={attach}><svg className="sand-1lliihq sand-1m3v4wt sand-h8yej3" aria-label={label} height={ye} role="img" viewBox={`0 0 ${j} ${ye}`} width={j}>{p.map(({ cents })=><line key={cents} opacity={0.45} stroke={bf["--cursor-stroke-tertiary"]} strokeWidth={1} x1={k} x2={j - te.right} y1={T(cents)} y2={T(cents)}/>)}<g key={p.map(On).join(`
`)} ref={attach_1}>{p.map(({ cents, label })=><text key={cents} fill={bf["--cursor-text-secondary"]} fontSize={11} textAnchor="end" x={k - cs} y={T(cents) + 4}>{label}</text>)}</g>{a !== null ? <rect fill={bf["--cursor-text-primary"]} height={w} opacity={0.05} width={N} x={k + N * a} y={te.top}/> : null}{series.map((v, M)=><g key={v.key}><path d={U(M)} fill={v.ink} fillOpacity={Rn}/><path d={_(M)} fill="none" stroke={v.ink} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></g>)}{a !== null ? series.map((v, M)=><circle key={v.key} cx={C(a)} cy={T(B(M, a))} fill={v.ink} r={3.5} stroke={gO["--sand-bg-elevated"]} strokeWidth={1.5}/>) : null}<line stroke={bf["--cursor-stroke-tertiary"]} strokeWidth={1} x1={k} x2={j - te.right} y1={ye - te.bottom} y2={ye - te.bottom}/>{days.map((v, M)=><g key={v.key}><rect fill="transparent" height={w} onMouseEnter={()=>setA(M)} width={N} x={k + N * M} y={te.top}/>{M % I === 0 ? <text fill={bf["--cursor-text-secondary"]} fontSize={11} textAnchor="middle" x={C(M)} y={ye - 10}>{v.label}</text> : null}</g>)}</svg>{a !== null && $ !== undefined ? <div className="sand-47corl sand-10l6tqk sand-1epp9v1 sand-1vjfegm sand-78zum5 sand-dt5ytf sand-11twubx sand-hs4bwn sand-ezivpi sand-12ffz05 sand-1m31zm8 sand-1043rbw sand-mkeg23 sand-1y0btm7 sand-q03nf1 sand-10e981r sand-1z0g938" style={{
            left: `${A}%`,
            transform: A > Bn ? "translateX(calc(-100% - 12px))" : "translateX(12px)"
        }}><S as="span" color="primary" size="sm">{$.label}</S>{[
            ...series
        ].reverse().map((v)=><div key={v.key} className="sand-78zum5 sand-6s0dn4 sand-1qughib sand-1jlwbde sand-uxw1ft"><BeComponent series={v}/><S as="span" color="primary" size="xs">{X(v.cents[a] ?? 0)}</S></div>)}<div className="sand-78zum5 sand-6s0dn4 sand-1qughib sand-1jlwbde sand-uxw1ft"><S as="span" color="primary" size="xs">{__1({
            id: "72c5Qo"
        })}</S><S as="span" color="primary" size="xs">{X(x[a] ?? 0)}</S></div></div> : null}</div><div className="sand-78zum5 sand-1a02dak sand-1pzdu40 sand-fbz45d">{series.map((v)=><div key={v.key} className="sand-78zum5 sand-6s0dn4 sand-ehausa sand-euugli"><BeComponent series={v}/><S as="span" color="tertiary" size="xs">{__1({
                id: "2UOALe",
                values: {
                    0: X(v.totalCents),
                    1: g8(v.totalCents / chart.totalCents)
                }
            })}</S></div>)}</div></>}</div>;
        e[0] = __1;
        e[1] = attach;
        e[2] = attach_1;
        e[3] = width_1;
        e[4] = chart.totalCents;
        e[5] = days;
        e[6] = a;
        e[7] = label;
        e[8] = width;
        e[9] = series;
        e[10] = m;
    } else {
        m = e[10];
    }
    return m;
}
function On({ label }) {
    return label;
}
function qn(s) {
    return {
        cents: s,
        label: Ns(s)
    };
}
function Wn() {
    return 0;
}
const xe = [
    "#4C72B0",
    "#DD8452",
    "#55A868",
    "#C44E52",
    "#8172B3",
    "#937860",
    "#DA8BC3",
    "#CCB974"
];
const xe_length = xe.length;
const fs = "#9AA0A6";
const Gn = "#5BA37A";
const ms = {
    user: {
        ink: xe[0],
        label: {
            id: "kWJmRL"
        }
    },
    automation: {
        ink: xe[1],
        label: {
            id: "dmYV6f"
        }
    },
    agent: {
        ink: xe[2],
        label: {
            id: "6xFP/2"
        }
    },
    group: {
        ink: xe[4],
        label: {
            id: "GoNgIy"
        }
    }
};
function Ze(s) {
    let e = 0;
    for (const n of s){
        e += n;
    }
    return e;
}
function _e(key, e, ink, i) {
    return {
        key,
        label: e,
        ink,
        cents: i,
        totalCents: Ze(i)
    };
}
function Ee(days, e) {
    const n = e.filter((i)=>i.totalCents > 0);
    return {
        days,
        series: n,
        totalCents: Ze(n.map((i)=>i.totalCents))
    };
}
function Hn(s, breakdown) {
    const n = [];
    const i = Date.parse(`${ve(breakdown.periodStartMs)}T00:00:00Z`);
    for(let p = i; p < breakdown.periodEndMs; p += Ss){
        n.push({
            key: ve(p),
            label: _s().format(p)
        });
    }
    const l = new Map(n.map((p, j)=>[
            p.key,
            j
        ]));
    const a = ()=>n.map(()=>0);
    const r = {
        user: a(),
        automation: a(),
        agent: a(),
        group: a()
    };
    const d = a();
    const o = a();
    const c = new Map;
    for (const p of breakdown.days){
        const j = l.get(ve(p.dayMs));
        if (j !== undefined) {
            o[j] = (o[j] ?? 0) + p.cursorCents;
            for (const k of gP){
                const z = p.centsByFlow[k] ?? 0;
                r[k][j] = (r[k][j] ?? 0) + z;
                d[j] = (d[j] ?? 0) + z;
            }
            for (const [k, z] of Object.entries(p.centsByBotId)){
                let w = c.get(k);
                if (w === undefined) {
                    w = a();
                    c.set(k, w);
                }
                w[j] = (w[j] ?? 0) + z;
            }
        }
    }
    const byApp = Ee(n, [
        _e("grok-bot", s({
            id: "vwB47p"
        }), xe[0], d),
        _e("cursor", s({
            id: "D7/LAN"
        }), Gn, o)
    ]);
    const byFlow = Ee(n, gP.map((p)=>_e(p, s(ms[p].label), ms[p].ink, r[p])));
    const g = new Map(breakdown.bots.map((p)=>[
            p.id,
            p.name
        ]));
    const m = c.get(gQ) ?? a();
    c.delete(gQ);
    const b = [
        ...c.entries()
    ].map(([botId, j])=>({
            botId,
            cents: j,
            total: Ze(j)
        })).sort((p, j)=>j.total - p.total);
    for (const { cents } of b.slice(xe_length)){
        cents.forEach((j, k)=>{
            m[k] = (m[k] ?? 0) + j;
        });
    }
    const byBot = Ee(n, [
        ...b.slice(0, xe_length).map(({ botId, cents }, k)=>_e(`bot:${botId}`, g.get(botId) ?? s({
                id: "QhN1/E"
            }), xe[k] ?? fs, cents)),
        _e("other-bots", s({
            id: "BlY2tE"
        }), fs, m)
    ]);
    const firstDay = n[0]?.label ?? "";
    const lastDay = n.at(-1)?.label ?? "";
    return {
        periodLabel: s({
            id: "bz099p",
            values: {
                firstDay,
                lastDay
            }
        }),
        byApp,
        byFlow,
        byBot
    };
}
function OeComponent(s) {
    OeComponent.d = 1323;
    const e = c_1.c(14);
    const { chart, periodLabel, accessory } = s;
    let a;
    let r;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        a = {
            className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-1oot3zn sand-y3j6vt sand-2f45yy"
        };
        r = {
            className: "sand-78zum5 sand-dt5ytf sand-137clkk"
        };
        e[0] = a;
        e[1] = r;
    } else {
        a = e[0];
        r = e[1];
    }
    let d;
    if (e[2] !== chart.totalCents) {
        d = X(chart.totalCents);
        e[2] = chart.totalCents;
        e[3] = d;
    } else {
        d = e[3];
    }
    let o;
    if (e[4] !== d) {
        o = <S as="span" color="primary" size="md">{d}</S>;
        e[4] = d;
        e[5] = o;
    } else {
        o = e[5];
    }
    let c;
    if (e[6] !== periodLabel) {
        c = <S as="span" color="secondary" size="sm">{periodLabel}</S>;
        e[6] = periodLabel;
        e[7] = c;
    } else {
        c = e[7];
    }
    let f;
    if (e[8] !== o || e[9] !== c) {
        f = <div {...r}>{o}{c}</div>;
        e[8] = o;
        e[9] = c;
        e[10] = f;
    } else {
        f = e[10];
    }
    let u;
    if (e[11] !== accessory || e[12] !== f) {
        u = <div {...a}>{f}{accessory}</div>;
        e[11] = accessory;
        e[12] = f;
        e[13] = u;
    } else {
        u = e[13];
    }
    return u;
}
function AsComponent(s) {
    AsComponent.d = 1324;
    const e = c_1.c(13);
    const { includeCredits } = s;
    const load = b7().usageBreakdown.load;
    let l;
    if (e[0] !== includeCredits || e[1] !== load) {
        l = ()=>{
            load({
                includeCredits
            });
            return Kn;
        };
        e[0] = includeCredits;
        e[1] = load;
        e[2] = l;
    } else {
        l = e[2];
    }
    i_1(l);
    const a = gR();
    const r = dc();
    const { refresh, isPending } = gS();
    let c = null;
    if (a.status === "ready") {
        c = a.value;
    } else if (a.status === "loading" || a.status === "failed") {
        c = a.previous ?? null;
    }
    if (c == null) {
        if (a.status === "empty" || a.status === "unavailable") {
            return null;
        }
        let m;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            m = {
                className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-1oot3zn sand-y3j6vt sand-2f45yy"
            };
            e[3] = m;
        } else {
            m = e[3];
        }
        let b;
        if (e[4] !== isPending || e[5] !== refresh || e[6] !== a.status) {
            b = <G_1 title={null}><div {...m}>{a.status === "failed" ? <><S as="span" color="red" size="sm"><T_1 id="QtkApk"/></S><G disabled={isPending} onClick={refresh} size="sm" variant="secondary"><T_1 id="6gRgw8"/></G></> : <S as="span" color="tertiary" size="sm"><T_1 id="zfTucZ"/></S>}</div></G_1>;
            e[4] = isPending;
            e[5] = refresh;
            e[6] = a.status;
            e[7] = b;
        } else {
            b = e[7];
        }
        return b;
    }
    const f = c;
    let bots;
    if (e[8] !== r) {
        bots = r.map(Vn);
        e[8] = r;
        e[9] = bots;
    } else {
        bots = e[9];
    }
    let g;
    if (e[10] !== c || e[11] !== bots) {
        const breakdown = {
            ...f,
            bots
        };
        g = <EsComponent breakdown={breakdown}/>;
        e[10] = c;
        e[11] = bots;
        e[12] = g;
    } else {
        g = e[12];
    }
    return g;
}
function Vn(s) {
    return {
        id: s.id,
        name: bc(s)
    };
}
function Kn() {}
function EsComponent(s) {
    EsComponent.d = 1325;
    const e = c_1.c(44);
    const { breakdown } = s;
    const { _ } = u_1();
    const { _: __1 } = u_1();
    const [a, setA] = r_1.useState("source");
    let d;
    if (e[0] !== _ || e[1] !== breakdown) {
        d = Hn(_, breakdown);
        e[0] = _;
        e[1] = breakdown;
        e[2] = d;
    } else {
        d = e[2];
    }
    const o = d;
    const chart = a === "source" ? o.byFlow : o.byBot;
    let f;
    if (e[3] !== __1) {
        f = __1({
            id: "7FaY4u"
        });
        e[3] = __1;
        e[4] = f;
    } else {
        f = e[4];
    }
    let u;
    if (e[5] !== o.byApp || e[6] !== o.periodLabel) {
        u = <OeComponent chart={o.byApp} periodLabel={o.periodLabel}/>;
        e[5] = o.byApp;
        e[6] = o.periodLabel;
        e[7] = u;
    } else {
        u = e[7];
    }
    const o_byApp = o.byApp;
    let m;
    if (e[8] !== __1) {
        m = __1({
            id: "kEy2T9"
        });
        e[8] = __1;
        e[9] = m;
    } else {
        m = e[9];
    }
    let b;
    if (e[10] !== o.byApp || e[11] !== m) {
        b = <FeComponent chart={o_byApp} label={m}/>;
        e[10] = o.byApp;
        e[11] = m;
        e[12] = b;
    } else {
        b = e[12];
    }
    let h;
    if (e[13] !== f || e[14] !== u || e[15] !== b) {
        h = <G_1 title={f}>{u}{b}</G_1>;
        e[13] = f;
        e[14] = u;
        e[15] = b;
        e[16] = h;
    } else {
        h = e[16];
    }
    let x;
    if (e[17] !== __1) {
        x = __1({
            id: "8bzf/+"
        });
        e[17] = __1;
        e[18] = x;
    } else {
        x = e[18];
    }
    let y;
    if (e[19] !== __1) {
        y = __1({
            id: "iiaLNM"
        });
        e[19] = __1;
        e[20] = y;
    } else {
        y = e[20];
    }
    let p;
    if (e[21] === Symbol.for("react.memo_cache_sentinel")) {
        p = (T)=>setA(T === "bot" ? "bot" : "source");
        e[21] = p;
    } else {
        p = e[21];
    }
    let j;
    if (e[22] === Symbol.for("react.memo_cache_sentinel")) {
        j = <S_2.Item value="source"><T_1 id="b8Yvxe"/></S_2.Item>;
        e[22] = j;
    } else {
        j = e[22];
    }
    let k;
    if (e[23] === Symbol.for("react.memo_cache_sentinel")) {
        k = <S_2.Item value="bot"><T_1 id="gjJ/kl"/></S_2.Item>;
        e[23] = k;
    } else {
        k = e[23];
    }
    let accessory;
    if (e[24] !== y || e[25] !== a) {
        accessory = <S_2 aria-label={y} onValueChange={p} size="sm" value={a}>{j}{k}</S_2>;
        e[24] = y;
        e[25] = a;
        e[26] = accessory;
    } else {
        accessory = e[26];
    }
    let w;
    if (e[27] !== chart || e[28] !== o.periodLabel || e[29] !== accessory) {
        w = <OeComponent accessory={accessory} chart={chart} periodLabel={o.periodLabel}/>;
        e[27] = chart;
        e[28] = o.periodLabel;
        e[29] = accessory;
        e[30] = w;
    } else {
        w = e[30];
    }
    let N;
    if (e[31] !== __1 || e[32] !== a) {
        N = __1(a === "source" ? {
            id: "b8Yvxe"
        } : {
            id: "gjJ/kl"
        });
        e[31] = __1;
        e[32] = a;
        e[33] = N;
    } else {
        N = e[33];
    }
    let I;
    if (e[34] !== chart || e[35] !== N) {
        I = <FeComponent chart={chart} label={N}/>;
        e[34] = chart;
        e[35] = N;
        e[36] = I;
    } else {
        I = e[36];
    }
    let L;
    if (e[37] !== w || e[38] !== I || e[39] !== x) {
        L = <G_1 title={x}>{w}{I}</G_1>;
        e[37] = w;
        e[38] = I;
        e[39] = x;
        e[40] = L;
    } else {
        L = e[40];
    }
    let C;
    if (e[41] !== L || e[42] !== h) {
        C = <>{h}{L}</>;
        e[41] = L;
        e[42] = h;
        e[43] = C;
    } else {
        C = e[43];
    }
    return C;
}
const qe = {
    secondaryHairline: {
        kGVxlE: "sand-1ahgo13",
        $$css: true
    },
    invertFlatBlackMarkForDark: {
        ku685b: "sand-1dftt0s",
        $$css: true
    }
};
const ke = {
    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-1v2ro7d sand-1t8xvyj sand-1n9uuka sand-usxwy5 sand-cssynl"
};
function WeComponent(s) {
    WeComponent.d = 1332;
    const e = c_1.c(21);
    const { anchorId, title, description, meter, emptyHint } = s;
    ba(anchorId);
    const { _ } = u_1();
    let o;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        o = r_2("sand-usage-meter", "sand-9f619 sand-78zum5 sand-dt5ytf sand-883omv sand-1t8xvyj sand-1n9uuka sand-usxwy5 sand-cssynl");
        e[0] = o;
    } else {
        o = e[0];
    }
    let c;
    if (e[1] !== anchorId) {
        c = dl(anchorId);
        e[1] = anchorId;
        e[2] = c;
    } else {
        c = e[2];
    }
    let f;
    let u;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        f = r_2("sand-usage-meter__header", "sand-9f619 sand-78zum5 sand-6s0dn4 sand-ehausa");
        u = {
            className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-137clkk sand-euugli"
        };
        e[3] = f;
        e[4] = u;
    } else {
        f = e[3];
        u = e[4];
    }
    let g;
    if (e[5] !== title) {
        g = <S as="span" color="primary" size="md">{title}</S>;
        e[5] = title;
        e[6] = g;
    } else {
        g = e[6];
    }
    let m;
    if (e[7] !== description) {
        m = description == null ? null : <S as="span" color="secondary" size="sm">{description}</S>;
        e[7] = description;
        e[8] = m;
    } else {
        m = e[8];
    }
    let b;
    if (e[9] !== g || e[10] !== m) {
        b = <div className={f}><div {...u}>{g}{m}</div></div>;
        e[9] = g;
        e[10] = m;
        e[11] = b;
    } else {
        b = e[11];
    }
    let h;
    if (e[12] !== _ || e[13] !== emptyHint || e[14] !== meter || e[15] !== title) {
        h = meter == null ? <S as="span" color="tertiary" size="sm">{emptyHint ?? _({
            id: "0BvlbM"
        })}</S> : <div className="sand-9f619 sand-78zum5 sand-dt5ytf sand-pkkfsy">{meter.barPercent != null ? <div aria-label={_({
            id: "5OJby0",
            values: {
                0: meter.valueLabel,
                title
            }
        })} aria-valuemax={100} aria-valuemin={0} aria-valuenow={meter.barPercent} className={r_2("sand-usage-meter__track", "sand-9f619 sand-qu0tyb sand-b3r6kr sand-1i4c3av sand-25lytf")} role="meter"><div className={r_2("sand-usage-meter__fill", "sand-9f619 sand-5yr21d sand-1i4c3av sand-db05xe")} style={{
            width: `${meter.barPercent}%`
        }}/></div> : null}<div className="sand-9f619 sand-78zum5 sand-1pha0wt sand-1qughib sand-883omv"><S as="span" color="secondary" size="xs">{meter.resetLabel ?? ""}</S><S as="span" color="secondary" size="xs">{meter.valueLabel}</S></div></div>;
        e[12] = _;
        e[13] = emptyHint;
        e[14] = meter;
        e[15] = title;
        e[16] = h;
    } else {
        h = e[16];
    }
    let x;
    if (e[17] !== c || e[18] !== b || e[19] !== h) {
        x = <div className={o} id={c}>{b}{h}</div>;
        e[17] = c;
        e[18] = b;
        e[19] = h;
        e[20] = x;
    } else {
        x = e[20];
    }
    return x;
}
function RsComponent(s) {
    RsComponent.d = 1330;
    const e = c_1.c(38);
    const { cta, rowLabel, planName, planDescription, supportingText, isSuperGrokLink, anchorId } = s;
    const { _: __1 } = u_1();
    const { handleClick, isPending, notice } = b$(cta);
    const m = bz();
    let b;
    if (e[0] !== __1 || e[1] !== cta) {
        b = h1(__1, cta);
        e[0] = __1;
        e[1] = cta;
        e[2] = b;
    } else {
        b = e[2];
    }
    const h = b;
    let x;
    if (e[3] !== __1 || e[4] !== cta || e[5] !== planDescription || e[6] !== supportingText) {
        x = planDescription ?? h2(__1, cta) ?? supportingText;
        e[3] = __1;
        e[4] = cta;
        e[5] = planDescription;
        e[6] = supportingText;
        e[7] = x;
    } else {
        x = e[7];
    }
    const y = x;
    let p;
    if (e[8] !== cta) {
        p = h3(cta);
        e[8] = cta;
        e[9] = p;
    } else {
        p = e[9];
    }
    const j = p;
    const k = isSuperGrokLink || j;
    const description = notice?.tone === "error" ? null : notice?.text ?? y;
    let extraCopy;
    if (e[10] !== notice) {
        extraCopy = notice?.tone === "error" ? <S as="span" color="red" size="sm">{notice.text}</S> : null;
        e[10] = notice;
        e[11] = extraCopy;
    } else {
        extraCopy = e[11];
    }
    const N = rowLabel ?? h;
    let labelToken;
    if (e[12] !== planName) {
        labelToken = planName == null ? undefined : {
            text: planName,
            dir: "auto"
        };
        e[12] = planName;
        e[13] = labelToken;
    } else {
        labelToken = e[13];
    }
    let settingName;
    if (e[14] !== __1 || e[15] !== rowLabel) {
        settingName = rowLabel == null ? undefined : __1({
            id: "A+zoTy"
        });
        e[14] = __1;
        e[15] = rowLabel;
        e[16] = settingName;
    } else {
        settingName = e[16];
    }
    const C = cta.disabled || isPending;
    const T = k ? qe.secondaryHairline : undefined;
    const variant = k ? "secondary" : "primary";
    let _;
    if (e[17] !== j) {
        _ = j ? {
            trailingIcon: "arrow-right-up"
        } : {};
        e[17] = j;
        e[18] = _;
    } else {
        _ = e[18];
    }
    let U;
    if (e[19] !== isSuperGrokLink || e[20] !== h || e[21] !== m) {
        U = isSuperGrokLink ? <span className="sand-9f619 sand-3nfvp2 sand-6s0dn4 sand-pkkfsy"><Bt name="grok" sizePx={12} style={m.resolved === "dark" ? qe.invertFlatBlackMarkForDark : undefined}/>{h}</span> : h;
        e[19] = isSuperGrokLink;
        e[20] = h;
        e[21] = m;
        e[22] = U;
    } else {
        U = e[22];
    }
    let $;
    if (e[23] !== handleClick || e[24] !== T || e[25] !== variant || e[26] !== _ || e[27] !== U || e[28] !== C) {
        $ = <G disabled={C} onClick={handleClick} size="sm" style={T} variant={variant} {..._}>{U}</G>;
        e[23] = handleClick;
        e[24] = T;
        e[25] = variant;
        e[26] = _;
        e[27] = U;
        e[28] = C;
        e[29] = $;
    } else {
        $ = e[29];
    }
    let A;
    if (e[30] !== anchorId || e[31] !== $ || e[32] !== description || e[33] !== extraCopy || e[34] !== N || e[35] !== labelToken || e[36] !== settingName) {
        A = <Ke anchorId={anchorId} description={description} extraCopy={extraCopy} label={N} labelToken={labelToken} settingName={settingName} variant="card">{$}</Ke>;
        e[30] = anchorId;
        e[31] = $;
        e[32] = description;
        e[33] = extraCopy;
        e[34] = N;
        e[35] = labelToken;
        e[36] = settingName;
        e[37] = A;
    } else {
        A = e[37];
    }
    return A;
}
function SComponent(s) {
    SComponent.d = 1329;
    const e = c_1.c(11);
    const { label, dashboardUrl } = s;
    const { _ } = u_1();
    const a = bA();
    let r;
    if (e[0] !== dashboardUrl || e[1] !== a) {
        r = ()=>{
            a(dashboardUrl);
        };
        e[0] = dashboardUrl;
        e[1] = a;
        e[2] = r;
    } else {
        r = e[2];
    }
    let d;
    if (e[3] !== _) {
        d = _({
            id: "53hao2"
        });
        e[3] = _;
        e[4] = d;
    } else {
        d = e[4];
    }
    let o;
    if (e[5] !== r || e[6] !== d) {
        o = <G onClick={r} size="sm" style={qe.secondaryHairline} trailingIcon="arrow-right-up" variant="secondary">{d}</G>;
        e[5] = r;
        e[6] = d;
        e[7] = o;
    } else {
        o = e[7];
    }
    let c;
    if (e[8] !== label || e[9] !== o) {
        c = <Ke anchorId="billing" label={label} variant="card">{o}</Ke>;
        e[8] = label;
        e[9] = o;
        e[10] = c;
    } else {
        c = e[10];
    }
    return c;
}
const je = {
    title: {
        id: "N8yesn"
    },
    description: {
        id: "L41f29"
    },
    confirmLabel: {
        id: "oV3urV"
    },
    pendingLabel: {
        id: "UsfSPG"
    },
    cancelLabel: {
        id: "4lZvVR"
    },
    destructive: true
};
function BsComponent() {
    BsComponent.d = 1326;
    const s = c_1.c(16);
    const { i18n, _ } = u_1();
    const i = cq();
    const { cancel, isPending } = h0();
    let r;
    if (s[0] !== _) {
        r = (m)=>{
            if (typeof m !== "string") {
                return m.server;
            }
            switch(m){
                case "signed-out":
                    return _({
                        id: "j4rm4L"
                    });
                case "failed":
                    return _({
                        id: "Q5HBNA"
                    });
            }
        };
        s[0] = _;
        s[1] = r;
    } else {
        r = s[1];
    }
    const d = r;
    let o;
    if (s[2] !== i || s[3] !== cancel || s[4] !== i18n || s[5] !== d) {
        o = async ()=>{
            await i({
                title: i18n._(je.title),
                description: i18n._(je.description),
                confirmLabel: i18n._(je.confirmLabel),
                pendingLabel: i18n._(je.pendingLabel),
                cancelLabel: i18n._(je.cancelLabel),
                destructive: je.destructive,
                perform: async ()=>{
                    const m = await cancel();
                    if (m.ok) {
                        return null;
                    }
                    return d(m.refusal);
                }
            });
        };
        s[2] = i;
        s[3] = cancel;
        s[4] = i18n;
        s[5] = d;
        s[6] = o;
    } else {
        o = s[6];
    }
    const c = o;
    let f;
    if (s[7] !== c) {
        f = ()=>{
            c();
        };
        s[7] = c;
        s[8] = f;
    } else {
        f = s[8];
    }
    let u;
    if (s[9] !== _ || s[10] !== isPending) {
        u = _(isPending ? {
            id: "UsfSPG"
        } : {
            id: "oV3urV"
        });
        s[9] = _;
        s[10] = isPending;
        s[11] = u;
    } else {
        u = s[11];
    }
    let g;
    if (s[12] !== isPending || s[13] !== f || s[14] !== u) {
        g = <G className="sand-usage-cancel-trial" disabled={isPending} onClick={f} size="sm" variant="tertiary">{u}</G>;
        s[12] = isPending;
        s[13] = f;
        s[14] = u;
        s[15] = g;
    } else {
        g = s[15];
    }
    return g;
}
function FsComponent(s) {
    FsComponent.d = 1331;
    const e = c_1.c(9);
    const { message, onRetry, isRetrying } = s;
    let a;
    if (e[0] !== message) {
        a = <S as="span" color="red" size="sm">{message}</S>;
        e[0] = message;
        e[1] = a;
    } else {
        a = e[1];
    }
    let r;
    if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        r = <T_1 id="6gRgw8"/>;
        e[2] = r;
    } else {
        r = e[2];
    }
    let d;
    if (e[3] !== isRetrying || e[4] !== onRetry) {
        d = <G disabled={isRetrying} onClick={onRetry} size="sm" variant="secondary">{r}</G>;
        e[3] = isRetrying;
        e[4] = onRetry;
        e[5] = d;
    } else {
        d = e[5];
    }
    let o;
    if (e[6] !== a || e[7] !== d) {
        o = <div {...ke}>{a}{d}</div>;
        e[6] = a;
        e[7] = d;
        e[8] = o;
    } else {
        o = e[8];
    }
    return o;
}
function OsComponent(s) {
    OsComponent.d = 1327;
    const e = c_1.c(8);
    const { usage, nowMs } = s;
    const { _ } = u_1();
    let a;
    if (e[0] !== _ || e[1] !== nowMs || e[2] !== usage) {
        a = Zt(_, usage, nowMs);
        e[0] = _;
        e[1] = nowMs;
        e[2] = usage;
        e[3] = a;
    } else {
        a = e[3];
    }
    const r = a;
    if (r.kind === "chart") {
        let o;
        if (e[4] !== r.chart) {
            o = <UsComponent chart={r.chart}/>;
            e[4] = r.chart;
            e[5] = o;
        } else {
            o = e[5];
        }
        return o;
    }
    let d;
    if (e[6] !== r.notice) {
        d = <div {...ke}><S as="span" color="tertiary" size="sm">{r.notice}</S></div>;
        e[6] = r.notice;
        e[7] = d;
    } else {
        d = e[7];
    }
    return d;
}
function Qs1Component(s) {
    Qs1Component.d = 1328;
    const e = c_1.c(25);
    const { teamId, nowMs } = s;
    const { _ } = u_1();
    const a = b7();
    let r;
    if (e[0] !== a.enterpriseUsage || e[1] !== teamId) {
        r = ()=>{
            a.enterpriseUsage.load(teamId);
            return Yn;
        };
        e[0] = a.enterpriseUsage;
        e[1] = teamId;
        e[2] = r;
    } else {
        r = e[2];
    }
    i_1(r);
    const d = g_(teamId);
    const { refresh, isPending } = g$();
    let usage = null;
    if (d.status === "ready") {
        usage = d.value;
    } else if (d.status === "loading" || d.status === "failed") {
        usage = d.previous ?? null;
    }
    let u;
    if (e[3] !== _) {
        u = _({
            id: "zGp/h9"
        });
        e[3] = _;
        e[4] = u;
    } else {
        u = e[4];
    }
    let g;
    if (e[5] !== nowMs || e[6] !== usage) {
        g = usage != null ? <OsComponent nowMs={nowMs} usage={usage}/> : null;
        e[5] = nowMs;
        e[6] = usage;
        e[7] = g;
    } else {
        g = e[7];
    }
    let m;
    if (e[8] !== d.status || e[9] !== usage) {
        m = usage == null && d.status === "loading" ? <div {...ke}><S as="span" color="tertiary" size="sm"><T_1 id="zfTucZ"/></S></div> : null;
        e[8] = d.status;
        e[9] = usage;
        e[10] = m;
    } else {
        m = e[10];
    }
    let b;
    if (e[11] !== d.status || e[12] !== usage) {
        b = usage == null && (d.status === "empty" || d.status === "unavailable") ? <div {...ke}><S as="span" color="tertiary" size="sm"><T_1 id="HRBK9O"/></S></div> : null;
        e[11] = d.status;
        e[12] = usage;
        e[13] = b;
    } else {
        b = e[13];
    }
    let h;
    if (e[14] !== isPending || e[15] !== refresh || e[16] !== d.status || e[17] !== usage) {
        h = d.status === "failed" ? <FsComponent isRetrying={isPending} message={usage == null ? <T_1 id="9jIX+6"/> : <T_1 id="hCwN14"/>} onRetry={refresh}/> : null;
        e[14] = isPending;
        e[15] = refresh;
        e[16] = d.status;
        e[17] = usage;
        e[18] = h;
    } else {
        h = e[18];
    }
    let x;
    if (e[19] !== u || e[20] !== g || e[21] !== m || e[22] !== b || e[23] !== h) {
        x = <G_1 title={u}>{g}{m}{b}{h}</G_1>;
        e[19] = u;
        e[20] = g;
        e[21] = m;
        e[22] = b;
        e[23] = h;
        e[24] = x;
    } else {
        x = e[24];
    }
    return x;
}
function Yn() {}
function WsComponent() {
    WsComponent.d = 1333;
    const s = c_1.c(60);
    const { _: __1 } = u_1();
    const { _: __2 } = u_1();
    const i = b7();
    const l = gT();
    const { refresh, isPending } = gM();
    const nowMs = bW();
    const o = b9("sand_on_demand_settings");
    const unifiedSkuBillingUiGateOn = b9("unified_sku_billing_ui");
    const f = bT();
    const { status } = eW();
    const state = gU();
    const { refresh: refresh_1, isPending: isPending_1 } = gV();
    const onOpen = gW();
    const x = gX();
    let summary = null;
    if (l.status === "ready") {
        summary = l.value;
    } else if (l.status === "loading" || l.status === "failed") {
        summary = l.previous ?? null;
    }
    const p = summary?.isUnified === true && summary.enterpriseTeamId == null;
    let j;
    if (s[0] !== summary || s[1] !== unifiedSkuBillingUiGateOn) {
        j = summary != null && gY({
            summary,
            unifiedSkuBillingUiGateOn
        });
        s[0] = summary;
        s[1] = unifiedSkuBillingUiGateOn;
        s[2] = j;
    } else {
        j = s[2];
    }
    const k = j;
    const load = i.unifiedCredits.load;
    let w;
    if (s[3] !== f || s[4] !== k || s[5] !== p || s[6] !== load) {
        w = ()=>{
            if (p) {
                f("unified_sku_billing_ui");
            }
            if (k) {
                load();
            }
            return Xn;
        };
        s[3] = f;
        s[4] = k;
        s[5] = p;
        s[6] = load;
        s[7] = w;
    } else {
        w = s[7];
    }
    i_1(w);
    if (summary == null && (l.status === "empty" || l.status === "unavailable")) {
        return null;
    }
    if (summary == null) {
        let _;
        if (s[8] === Symbol.for("react.memo_cache_sentinel")) {
            _ = r_2("sand-usage-section", "sand-9f619 sand-78zum5 sand-dt5ytf sand-1m87ff3");
            s[8] = _;
        } else {
            _ = s[8];
        }
        let U;
        if (s[9] === Symbol.for("react.memo_cache_sentinel")) {
            U = r_2("sand-usage-state", ke.className);
            s[9] = U;
        } else {
            U = s[9];
        }
        let $;
        if (s[10] !== isPending || s[11] !== refresh || s[12] !== l.status) {
            $ = <G_1 title={null}><div className={U}>{l.status === "failed" ? <><S as="span" color="red" size="sm"><T_1 id="QtkApk"/></S><G disabled={isPending} onClick={refresh} size="sm" variant="secondary"><T_1 id="6gRgw8"/></G></> : <S as="span" color="tertiary" size="sm"><T_1 id="zfTucZ"/></S>}</div></G_1>;
            s[10] = isPending;
            s[11] = refresh;
            s[12] = l.status;
            s[13] = $;
        } else {
            $ = s[13];
        }
        let A;
        if (s[14] !== _ || s[15] !== $) {
            A = <div className={_}>{$}</div>;
            s[14] = _;
            s[15] = $;
            s[16] = A;
        } else {
            A = s[16];
        }
        return A;
    }
    let N;
    let I;
    let L;
    let C;
    if (s[17] !== __1 || s[18] !== __2 || s[19] !== status || s[20] !== state || s[21] !== isPending_1 || s[22] !== k || s[23] !== nowMs || s[24] !== o || s[25] !== onOpen || s[26] !== refresh_1 || s[27] !== summary || s[28] !== x.enabled || s[29] !== x.includeCredits) {
        const _ = on(__1, summary, nowMs);
        const U = summary.onDemandSettings;
        const $ = o && _.enterpriseTeamId == null && U != null && U.visible && U.eligible;
        let A;
        if (s[34] !== status || s[35] !== U?.dashboardUrl) {
            A = U?.dashboardUrl ?? gZ(status.kind === "logged-in" ? status.authId : undefined);
            s[34] = status;
            s[35] = U?.dashboardUrl;
            s[36] = A;
        } else {
            A = s[36];
        }
        const dashboardUrl = A;
        let v = null;
        if (k) {
            let F;
            if (s[37] !== state || s[38] !== isPending_1 || s[39] !== onOpen || s[40] !== refresh_1) {
                F = <Ks1Component isRetrying={isPending_1} onOpen={onOpen} onRetry={refresh_1} state={state}/>;
                s[37] = state;
                s[38] = isPending_1;
                s[39] = onOpen;
                s[40] = refresh_1;
                s[41] = F;
            } else {
                F = s[41];
            }
            v = F;
        } else if (_.spendLimit != null) {
            v = <IsComponent key={`${_.spendLimit.savedMode}:${_.spendLimit.savedLimitDollars ?? ""}`} meter={_.onDemand} spendLimit={_.spendLimit}/>;
        } else if ($ && _.onDemandEnablePending) {
            let F;
            if (s[42] !== dashboardUrl) {
                F = <PsComponent dashboardUrl={dashboardUrl}/>;
                s[42] = dashboardUrl;
                s[43] = F;
            } else {
                F = s[43];
            }
            v = F;
        } else if (_.onDemand != null) {
            const meter = _.onDemand;
            let O;
            if (s[44] !== __2) {
                O = __2({
                    id: "fqkvA1"
                });
                s[44] = __2;
                s[45] = O;
            } else {
                O = s[45];
            }
            v = <WeComponent anchorId="on-demand" meter={meter} title={O}/>;
        }
        const M = $ || k;
        const q = _.upgradeRows.length > 0 || _.canCancelTrial || M;
        if (s[46] === Symbol.for("react.memo_cache_sentinel")) {
            N = r_2("sand-usage-section", "sand-9f619 sand-78zum5 sand-dt5ytf sand-1m87ff3");
            s[46] = N;
        } else {
            N = s[46];
        }
        I = _.enterpriseTeamId != null ? <Qs1Component nowMs={nowMs} teamId={_.enterpriseTeamId}/> : <><G_1 title={null}><WeComponent anchorId="usage" description={_.includedUsageDescription} emptyHint={summary.hasNonZeroIncludedLimit ? undefined : __2({
            id: "e5AdX2"
        })} meter={_.weekly} title={_.includedUsageTitle}/></G_1>{v != null ? <G_1 title={null}>{v}</G_1> : null}</>;
        if (s[47] !== x.enabled || s[48] !== x.includeCredits) {
            L = x.enabled ? <AsComponent includeCredits={x.includeCredits}/> : null;
            s[47] = x.enabled;
            s[48] = x.includeCredits;
            s[49] = L;
        } else {
            L = s[49];
        }
        C = q ? <G_1 title={__2({
            id: "UDsdr3"
        })}>{_.upgradeRows.map(ZnComponent)}{M ? <SComponent dashboardUrl={k ? summary.unifiedBillingUrl ?? dashboardUrl : dashboardUrl} label={k ? sn(__1, summary.billingBrand) : _.manageBillingLabel}/> : null}{_.canCancelTrial ? <Ke anchorId="cancel-trial" variant="card"><BsComponent/></Ke> : null}</G_1> : null;
        s[17] = __1;
        s[18] = __2;
        s[19] = status;
        s[20] = state;
        s[21] = isPending_1;
        s[22] = k;
        s[23] = nowMs;
        s[24] = o;
        s[25] = onOpen;
        s[26] = refresh_1;
        s[27] = summary;
        s[28] = x.enabled;
        s[29] = x.includeCredits;
        s[30] = N;
        s[31] = I;
        s[32] = L;
        s[33] = C;
    } else {
        N = s[30];
        I = s[31];
        L = s[32];
        C = s[33];
    }
    let T;
    if (s[50] !== isPending || s[51] !== refresh || s[52] !== l.status) {
        T = l.status === "failed" ? <div className={r_2("sand-usage-state", ke.className)}><S as="span" color="red" size="sm"><T_1 id="hCwN14"/></S><G disabled={isPending} onClick={refresh} size="sm" variant="secondary"><T_1 id="6gRgw8"/></G></div> : null;
        s[50] = isPending;
        s[51] = refresh;
        s[52] = l.status;
        s[53] = T;
    } else {
        T = s[53];
    }
    let B;
    if (s[54] !== N || s[55] !== I || s[56] !== L || s[57] !== C || s[58] !== T) {
        B = <div className={N}>{I}{L}{C}{T}</div>;
        s[54] = N;
        s[55] = I;
        s[56] = L;
        s[57] = C;
        s[58] = T;
        s[59] = B;
    } else {
        B = s[59];
    }
    return B;
}
function ZnComponent(s, e) {
    return <RsComponent key={s.key} anchorId={e === 0 ? "plan" : cc} cta={s.cta} isSuperGrokLink={s.isSuperGrokLink} planDescription={s.planDescription} planName={s.planName} rowLabel={s.rowLabel} supportingText={s.supportingText}/>;
}
function Xn() {}
function GsComponent() {
    GsComponent.d = 1227;
    const s = c_1.c(1);
    let e;
    if (s[0] === Symbol.for("react.memo_cache_sentinel")) {
        e = <S_1><WsComponent/></S_1>;
        s[0] = e;
    } else {
        e = s[0];
    }
    return e;
}
function QnComponent(s) {
    QnComponent.d = 1228;
    const e = c_1.c(3);
    const { params } = s;
    const focus = params.focusSetting ?? null;
    let l;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        l = <GsComponent/>;
        e[0] = l;
    } else {
        l = e[0];
    }
    let a;
    if (e[1] !== focus) {
        a = <Ys focus={focus}>{l}</Ys>;
        e[1] = focus;
        e[2] = a;
    } else {
        a = e[2];
    }
    return a;
}
export { QnComponent as default };
