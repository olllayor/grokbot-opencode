import { c as c_1, u as u_1, r as r_1, p as p_1, T as T_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { b7, aU, b9, bN as Ne1, bd, u as u_2, bO, r as r_2, aK, j as j_1, n as Je } from "./index.eager-app-Cj5f8Gby.js";
import { aY as W } from "./index.eager-platform-Dcfeegfw.js";
import { u as u_3, a, b } from "./chunk-provider-listener-integrations-CR9f28xA.js";
import { ak, i as Be, W as W_1, j as j_2, al, k as k_1, g as Ke } from "./index-ZYxf-aBb.js";
import { C as C_1 } from "./chunk-connector-card-view-fPUuNO3n.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "75523828-d687-4f59-b5df-43aa91af2e23";
            e._sentryDebugIdIdentifier = "sentry-dbid-75523828-d687-4f59-b5df-43aa91af2e23";
        }
    } catch (e) {}
})();
const re = {
    card: {
        k1xSpc: "sand-78zum5",
        kGNEyG: "sand-1cy8zhl",
        kOIVth: "sand-883omv",
        kzqmXN: "sand-wl9fdd",
        ks0D6T: "sand-193iq5w",
        kLKAdn: "sand-z9dl7a",
        kGO01o: "sand-sag5q8",
        kZCmMZ: "sand-1g0dm76",
        kwRFfy: "sand-pdmqnj",
        kMzoRj: "sand-mkeg23",
        ksu8eU: "sand-1y0btm7",
        kVAM5u: "sand-qz0629",
        kaIpWk: "sand-ixl9f9",
        $$css: true
    },
    cardCentered: {
        kGNEyG: "sand-6s0dn4",
        $$css: true
    }
};
function ze(d, platform, displayName) {
    return d(platform === "slack" ? {
        id: "IQDXxM"
    } : platform === "github" || platform === "origin" ? {
        id: "qthRAP",
        values: {
            displayName
        }
    } : {
        id: "SVaREQ",
        values: {
            displayName
        }
    });
}
function AeComponent(d) {
    AeComponent.d = 894;
    const e = c_1.c(76);
    const { platform, reason } = d;
    const { _: __1 } = u_1();
    const { _: __2 } = u_1();
    const q = bd();
    const { view, isLoading } = u_3();
    aU(b7().listenerIntegrations.load);
    const { connect, isPending } = a();
    const D = ak();
    const x = r_1.useId();
    const G = u_2(x);
    let C;
    let p;
    let i;
    let y;
    let id;
    let c;
    let ref;
    let size;
    let weight;
    let R;
    let m;
    let k;
    let u;
    let o;
    if (e[0] !== __1 || e[1] !== __2 || e[2] !== G || e[3] !== q || e[4] !== D || e[5] !== connect || e[6] !== isLoading || e[7] !== isPending || e[8] !== platform || e[9] !== reason || e[10] !== x || e[11] !== view) {
        c = Symbol.for("react.early_return_sentinel");
        e: {
            const B = bO(platform);
            if (B == null) {
                c = null;
                break e;
            }
            let I;
            if (e[26] !== platform || e[27] !== view.integrations) {
                let T;
                if (e[29] !== platform) {
                    T = (O)=>O.platform === platform;
                    e[29] = platform;
                    e[30] = T;
                } else {
                    T = e[30];
                }
                I = view.integrations.find(T);
                e[26] = platform;
                e[27] = view.integrations;
                e[28] = I;
            } else {
                I = e[28];
            }
            const $ = I;
            i = $?.isConnected === true;
            const N = async ()=>{
                if (await D(al(platform, B.displayName))) {
                    await connect(platform);
                }
            };
            const H = $ != null || !isLoading;
            p = reason != null && reason.length > 0 ? __1({
                id: "T2bXh+",
                values: {
                    0: B.displayName,
                    reason
                }
            }) : ze(__1, platform, B.displayName);
            let V;
            s: {
                if (i) {
                    let v;
                    let P;
                    if (e[31] === Symbol.for("react.memo_cache_sentinel")) {
                        v = r_2("sand-78zum5 sand-6s0dn4 sand-1nejdyq sand-2lah0s sand-134ynso");
                        P = <W_1 aria-hidden color="green" name="check-circle" size="sm"/>;
                        e[31] = v;
                        e[32] = P;
                    } else {
                        v = e[31];
                        P = e[32];
                    }
                    let X;
                    if (e[33] === Symbol.for("react.memo_cache_sentinel")) {
                        X = <W size="xs" weight="medium"><T_1 id="QHcLEN"/></W>;
                        e[33] = X;
                    } else {
                        X = e[33];
                    }
                    let F;
                    if (e[34] !== v) {
                        F = <span className={v}>{P}{X}</span>;
                        e[34] = v;
                        e[35] = F;
                    } else {
                        F = e[35];
                    }
                    V = F;
                    break s;
                }
                if (!H) {
                    let v;
                    if (e[36] !== __2) {
                        v = __2({
                            id: "QwpUXp"
                        });
                        e[36] = __2;
                        e[37] = v;
                    } else {
                        v = e[37];
                    }
                    let P;
                    if (e[38] === Symbol.for("react.memo_cache_sentinel")) {
                        P = r_2("sand-78zum5 sand-6s0dn4 sand-l56j7k sand-xk0z11 sand-e2zdcy sand-2vl965 sand-2lah0s");
                        e[38] = P;
                    } else {
                        P = e[38];
                    }
                    let X;
                    if (e[39] !== q) {
                        X = q.renderSpinner(14);
                        e[39] = q;
                        e[40] = X;
                    } else {
                        X = e[40];
                    }
                    let F;
                    if (e[41] !== v || e[42] !== P || e[43] !== X) {
                        F = <span aria-label={v} className={P}>{X}</span>;
                        e[41] = v;
                        e[42] = P;
                        e[43] = X;
                        e[44] = F;
                    } else {
                        F = e[44];
                    }
                    V = F;
                    break s;
                }
                let T;
                if (e[45] === Symbol.for("react.memo_cache_sentinel")) {
                    T = r_2("sand-2lah0s");
                    e[45] = T;
                } else {
                    T = e[45];
                }
                let O;
                if (e[46] === Symbol.for("react.memo_cache_sentinel")) {
                    O = <T_1 id="iSLIjg"/>;
                    e[46] = O;
                } else {
                    O = e[46];
                }
                V = <Ke className={T} tone="monochrome" disabled={isPending} onClick={()=>{
                    N();
                }} size="sm" variant="primary">{O}</Ke>;
            }
            y = V;
            k = x;
            if (e[47] !== i) {
                u = r_2("sand-listener-connect-card", p_1(aK.transcriptWidget, re.card, i && re.cardCentered).className);
                e[47] = i;
                e[48] = u;
            } else {
                u = e[48];
            }
            let s;
            if (e[49] === Symbol.for("react.memo_cache_sentinel")) {
                s = r_2("sand-78zum5 sand-6s0dn4 sand-l56j7k sand-1849jeq sand-1gnnpzl sand-2lah0s sand-ur7f20 sand-arj5zm");
                e[49] = s;
            } else {
                s = e[49];
            }
            let L;
            if (e[50] !== platform) {
                L = <Ne1 platform={platform} size={18}/>;
                e[50] = platform;
                e[51] = L;
            } else {
                L = e[51];
            }
            if (e[52] !== s || e[53] !== L) {
                o = <span className={s}>{L}</span>;
                e[52] = s;
                e[53] = L;
                e[54] = o;
            } else {
                o = e[54];
            }
            if (e[55] === Symbol.for("react.memo_cache_sentinel")) {
                m = r_2("sand-78zum5 sand-dt5ytf sand-1ed6fcf sand-1iyjqo2 sand-s83m0k sand-euugli");
                e[55] = m;
            } else {
                m = e[55];
            }
            C = W;
            id = x;
            ref = G;
            size = "sm";
            weight = "semibold";
            R = __1(i ? {
                id: "h6Jkfm",
                values: {
                    0: B.displayName
                }
            } : {
                id: "5ZzgbQ",
                values: {
                    0: B.displayName
                }
            });
        }
        e[0] = __1;
        e[1] = __2;
        e[2] = G;
        e[3] = q;
        e[4] = D;
        e[5] = connect;
        e[6] = isLoading;
        e[7] = isPending;
        e[8] = platform;
        e[9] = reason;
        e[10] = x;
        e[11] = view;
        e[12] = C;
        e[13] = p;
        e[14] = i;
        e[15] = y;
        e[16] = id;
        e[17] = c;
        e[18] = ref;
        e[19] = size;
        e[20] = weight;
        e[21] = R;
        e[22] = m;
        e[23] = k;
        e[24] = u;
        e[25] = o;
    } else {
        C = e[12];
        p = e[13];
        i = e[14];
        y = e[15];
        id = e[16];
        c = e[17];
        ref = e[18];
        size = e[19];
        weight = e[20];
        R = e[21];
        m = e[22];
        k = e[23];
        u = e[24];
        o = e[25];
    }
    if (c !== Symbol.for("react.early_return_sentinel")) {
        return c;
    }
    let S;
    if (e[56] !== C || e[57] !== id || e[58] !== ref || e[59] !== size || e[60] !== weight || e[61] !== R) {
        S = <C id={id} ref={ref} size={size} weight={weight}>{R}</C>;
        e[56] = C;
        e[57] = id;
        e[58] = ref;
        e[59] = size;
        e[60] = weight;
        e[61] = R;
        e[62] = S;
    } else {
        S = e[62];
    }
    let A;
    if (e[63] !== p || e[64] !== i) {
        A = i ? null : <W className={r_2("sand-euugli sand-1w2vvpw sand-13faqbe")} color="secondary" size="sm">{p}</W>;
        e[63] = p;
        e[64] = i;
        e[65] = A;
    } else {
        A = e[65];
    }
    let h;
    if (e[66] !== S || e[67] !== A || e[68] !== m) {
        h = <span className={m}>{S}{A}</span>;
        e[66] = S;
        e[67] = A;
        e[68] = m;
        e[69] = h;
    } else {
        h = e[69];
    }
    let M;
    if (e[70] !== y || e[71] !== h || e[72] !== k || e[73] !== u || e[74] !== o) {
        M = <article aria-labelledby={k} className={u}>{o}{h}{y}</article>;
        e[70] = y;
        e[71] = h;
        e[72] = k;
        e[73] = u;
        e[74] = o;
        e[75] = M;
    } else {
        M = e[75];
    }
    return M;
}
const we = [
    "github",
    "gitlab",
    "bitbucket",
    "azure-devops"
];
const _e = {
    card: {
        kzqmXN: "sand-wl9fdd",
        ks0D6T: "sand-193iq5w",
        $$css: true
    }
};
function fe(d) {
    if (d.reason == null || d.reason.length === 0) {
        return false;
    }
    if (d.sentAtMs === undefined || d.connectedAtMs === undefined) {
        return true;
    }
    return d.connectedAtMs <= d.sentAtMs;
}
function ReComponent(d) {
    ReComponent.d = 895;
    const e = c_1.c(65);
    const { provider, intent, reason, repo, sentAtMs } = d;
    const { _: __1 } = u_1();
    const { view } = u_3();
    const { listenerIntegrations } = b7();
    aU(listenerIntegrations.load);
    const { connect, isPending } = a();
    const x = ak();
    const titleId = r_1.useId();
    const C = b9("sand_desktop_scm_connect");
    const p = C && intent === "access" ? repo : undefined;
    let i;
    if (e[0] !== listenerIntegrations || e[1] !== p) {
        i = p == null ? onBrowseMore : listenerIntegrations.repoAccess(p).load;
        e[0] = listenerIntegrations;
        e[1] = p;
        e[2] = i;
    } else {
        i = e[2];
    }
    aU(i);
    const y = b(p) === true;
    let j;
    if (e[3] !== C || e[4] !== repo || e[5] !== view || e[6] !== y) {
        j = C ? y : Ie(view, repo);
        e[3] = C;
        e[4] = repo;
        e[5] = view;
        e[6] = y;
        e[7] = j;
    } else {
        j = e[7];
    }
    const repoGranted = j;
    const sentAtMs_1 = C ? sentAtMs : undefined;
    if (provider != null) {
        let h;
        if (e[8] !== intent || e[9] !== provider || e[10] !== reason || e[11] !== sentAtMs_1 || e[12] !== repoGranted) {
            h = <UeComponent intent={intent} provider={provider} reason={reason} repoGranted={repoGranted} sentAtMs={sentAtMs_1}/>;
            e[8] = intent;
            e[9] = provider;
            e[10] = reason;
            e[11] = sentAtMs_1;
            e[12] = repoGranted;
            e[13] = h;
        } else {
            h = e[13];
        }
        return h;
    }
    const r = intent === "access";
    let _;
    let R;
    let m;
    let k;
    let style;
    let o;
    if (e[14] !== __1 || e[15] !== x || e[16] !== connect || e[17] !== r || e[18] !== isPending || e[19] !== reason || e[20] !== sentAtMs_1 || e[21] !== repoGranted || e[22] !== titleId || e[23] !== view) {
        let h;
        if (e[30] !== r || e[31] !== reason || e[32] !== sentAtMs_1 || e[33] !== view) {
            h = (platform)=>{
                const L = bO(platform);
                if (L == null) {
                    return [];
                }
                const T = view.integrations.find((P)=>P.platform === platform);
                const isConnected = T?.isConnected === true;
                const needsReconnect = !r && fe({
                    reason,
                    sentAtMs: sentAtMs_1,
                    connectedAtMs: T?.connectedAtMs
                });
                return [
                    {
                        platform,
                        displayName: L.displayName,
                        isConnected,
                        needsReconnect
                    }
                ];
            };
            e[30] = r;
            e[31] = reason;
            e[32] = sentAtMs_1;
            e[33] = view;
            e[34] = h;
        } else {
            h = e[34];
        }
        const M = we.flatMap(h);
        const B = !r && reason != null && reason.length > 0 && M.every(Me);
        let title;
        if (r) {
            if (repoGranted) {
                let s;
                if (e[37] !== __1) {
                    s = __1({
                        id: "VgmSvp"
                    });
                    e[37] = __1;
                    e[38] = s;
                } else {
                    s = e[38];
                }
                title = s;
            } else {
                let s;
                if (e[39] !== __1) {
                    s = __1({
                        id: "NLXecH"
                    });
                    e[39] = __1;
                    e[40] = s;
                } else {
                    s = e[40];
                }
                title = s;
            }
        } else {
            let s;
            if (e[35] !== __1) {
                s = __1({
                    id: "xDeR2v"
                });
                e[35] = __1;
                e[36] = s;
            } else {
                s = e[36];
            }
            title = s;
        }
        let subtitle;
        if (r) {
            let s;
            if (e[41] !== __1 || e[42] !== repoGranted) {
                s = __1(repoGranted ? {
                    id: "7KByAE"
                } : {
                    id: "NWocBB"
                });
                e[41] = __1;
                e[42] = repoGranted;
                e[43] = s;
            } else {
                s = e[43];
            }
            subtitle = s;
        } else if (B) {
            let s;
            if (e[44] !== __1 || e[45] !== reason) {
                s = __1({
                    id: "f2FSdn",
                    values: {
                        reason
                    }
                });
                e[44] = __1;
                e[45] = reason;
                e[46] = s;
            } else {
                s = e[46];
            }
            subtitle = s;
        } else {
            let s;
            if (e[47] !== __1) {
                s = __1({
                    id: "pm4BbY"
                });
                e[47] = __1;
                e[48] = s;
            } else {
                s = e[48];
            }
            subtitle = s;
        }
        const N = M.some(ve);
        let H;
        if (e[49] !== x || e[50] !== connect) {
            H = async (s)=>{
                if (s.isConnected || await x(al(s.platform, s.displayName))) {
                    await connect(s.platform);
                }
            };
            e[49] = x;
            e[50] = connect;
            e[51] = H;
        } else {
            H = e[51];
        }
        const V = H;
        R = j_1;
        k = titleId;
        style = _e.card;
        if (e[52] !== subtitle || e[53] !== title || e[54] !== titleId) {
            o = <Je subtitle={subtitle} title={title} titleId={titleId}/>;
            e[52] = subtitle;
            e[53] = title;
            e[54] = titleId;
            e[55] = o;
        } else {
            o = e[55];
        }
        _ = k_1;
        m = M.map((s)=>{
            const L = !s.needsReconnect && s.isConnected && (!r || repoGranted);
            const T = {
                className: "sand-78zum5 sand-6s0dn4 sand-1nejdyq sand-2lah0s sand-134ynso"
            };
            return <Be key={s.platform} disabled={isPending || L} label={s.displayName} leading=<span {...p_1(j_2.rowLeading)}><Ne1 platform={s.platform} size={18}/></span> onClick={()=>{
                if (!L) {
                    V(s);
                }
            }} {...N ? {
                trailing: <span {...p_1(j_2.rowTrailing)}>{L ? <span {...T}><W_1 aria-hidden color="green" name="check-circle" size="sm"/><W size="sm"><T_1 id="QHcLEN"/></W></span> : <><W size="sm">{s.isConnected && !s.needsReconnect ? <T_1 id="dJNmzF"/> : <T_1 id="iSLIjg"/>}</W><W_1 aria-hidden name="arrow-right-up" size="sm"/></>}</span>
            } : {}}/>;
        });
        e[14] = __1;
        e[15] = x;
        e[16] = connect;
        e[17] = r;
        e[18] = isPending;
        e[19] = reason;
        e[20] = sentAtMs_1;
        e[21] = repoGranted;
        e[22] = titleId;
        e[23] = view;
        e[24] = _;
        e[25] = R;
        e[26] = m;
        e[27] = k;
        e[28] = style;
        e[29] = o;
    } else {
        _ = e[24];
        R = e[25];
        m = e[26];
        k = e[27];
        style = e[28];
        o = e[29];
    }
    let S;
    if (e[56] !== _ || e[57] !== m) {
        S = <_>{m}</_>;
        e[56] = _;
        e[57] = m;
        e[58] = S;
    } else {
        S = e[58];
    }
    let A;
    if (e[59] !== R || e[60] !== k || e[61] !== style || e[62] !== o || e[63] !== S) {
        A = <R aria-labelledby={k} style={style}>{o}{S}</R>;
        e[59] = R;
        e[60] = k;
        e[61] = style;
        e[62] = o;
        e[63] = S;
        e[64] = A;
    } else {
        A = e[64];
    }
    return A;
}
function ve(d) {
    return d.isConnected;
}
function Me(d) {
    return d.needsReconnect || !d.isConnected;
}
function onBrowseMore() {}
function Ie(view, repo) {
    if (repo == null || repo.length === 0) {
        return false;
    }
    const n = repo.toLowerCase();
    return view.integrations.find((g)=>g.platform === "github")?.grantedRepos?.some((g)=>g.toLowerCase() === n) === true;
}
function UeComponent(d) {
    UeComponent.d = 896;
    const e = c_1.c(56);
    const { provider, intent, reason, repoGranted, sentAtMs } = d;
    const { _: __1 } = u_1();
    const { view } = u_3();
    aU(b7().listenerIntegrations.load);
    const { connect, isPending } = a();
    const D = ak();
    const [x, setX] = r_1.useState(false);
    let C;
    let p;
    let i;
    let y;
    let isConnected;
    let c;
    let f;
    if (e[0] !== __1 || e[1] !== D || e[2] !== connect || e[3] !== intent || e[4] !== x || e[5] !== provider || e[6] !== reason || e[7] !== repoGranted || e[8] !== sentAtMs || e[9] !== view) {
        f = Symbol.for("react.early_return_sentinel");
        e: {
            y = bO(provider);
            if (y == null) {
                f = null;
                break e;
            }
            i = intent === "access";
            let h;
            if (e[17] !== connect || e[18] !== provider) {
                h = async ()=>{
                    await connect(provider);
                    setX(true);
                };
                e[17] = connect;
                e[18] = provider;
                e[19] = h;
            } else {
                h = e[19];
            }
            c = h;
            let M;
            let B;
            if (e[20] !== i || e[21] !== provider || e[22] !== reason || e[23] !== sentAtMs || e[24] !== view.integrations) {
                let N;
                if (e[27] !== provider) {
                    N = (H)=>H.platform === provider;
                    e[27] = provider;
                    e[28] = N;
                } else {
                    N = e[28];
                }
                M = view.integrations.find(N);
                B = !i && fe({
                    reason,
                    sentAtMs,
                    connectedAtMs: M?.connectedAtMs
                });
                e[20] = i;
                e[21] = provider;
                e[22] = reason;
                e[23] = sentAtMs;
                e[24] = view.integrations;
                e[25] = M;
                e[26] = B;
            } else {
                M = e[25];
                B = e[26];
            }
            const I = B;
            const $ = M?.isConnected === true;
            C = async ()=>{
                if ($ || await D(al(provider, y.displayName))) {
                    await (i ? connect(provider) : c());
                }
            };
            isConnected = i && repoGranted || !i && !I && $;
            if (x && isConnected) {
                setX(false);
            }
            if (i) {
                let N;
                if (e[29] !== __1 || e[30] !== repoGranted) {
                    N = __1(repoGranted ? {
                        id: "7KByAE"
                    } : {
                        id: "NLXecH"
                    });
                    e[29] = __1;
                    e[30] = repoGranted;
                    e[31] = N;
                } else {
                    N = e[31];
                }
                p = N;
            } else if (I) {
                p = __1({
                    id: "T2bXh+",
                    values: {
                        0: y.displayName,
                        reason
                    }
                });
            } else {
                let N;
                if (e[32] !== __1) {
                    N = __1({
                        id: "hPP8ld"
                    });
                    e[32] = __1;
                    e[33] = N;
                } else {
                    N = e[33];
                }
                p = N;
            }
        }
        e[0] = __1;
        e[1] = D;
        e[2] = connect;
        e[3] = intent;
        e[4] = x;
        e[5] = provider;
        e[6] = reason;
        e[7] = repoGranted;
        e[8] = sentAtMs;
        e[9] = view;
        e[10] = C;
        e[11] = p;
        e[12] = i;
        e[13] = y;
        e[14] = isConnected;
        e[15] = c;
        e[16] = f;
    } else {
        C = e[10];
        p = e[11];
        i = e[12];
        y = e[13];
        isConnected = e[14];
        c = e[15];
        f = e[16];
    }
    if (f !== Symbol.for("react.early_return_sentinel")) {
        return f;
    }
    let actionLabel;
    if (e[34] !== __1 || e[35] !== i) {
        actionLabel = __1(i ? {
            id: "dJNmzF"
        } : {
            id: "iSLIjg"
        });
        e[34] = __1;
        e[35] = i;
        e[36] = actionLabel;
    } else {
        actionLabel = e[36];
    }
    const description = p;
    const y_displayName = y.displayName;
    let handoff;
    if (e[37] !== i || e[38] !== x || e[39] !== c) {
        handoff = x && !i ? {
            status: "waiting",
            onReopen: ()=>{
                c();
            },
            onRetry: ()=>{
                c();
            }
        } : null;
        e[37] = i;
        e[38] = x;
        e[39] = c;
        e[40] = handoff;
    } else {
        handoff = e[40];
    }
    let k;
    if (e[41] === Symbol.for("react.memo_cache_sentinel")) {
        k = {
            className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-1849jeq sand-1gnnpzl sand-2lah0s sand-ur7f20 sand-arj5zm"
        };
        e[41] = k;
    } else {
        k = e[41];
    }
    let icon;
    if (e[42] !== provider) {
        icon = <span {...k}><Ne1 platform={provider} size={20}/></span>;
        e[42] = provider;
        e[43] = icon;
    } else {
        icon = e[43];
    }
    let onAction;
    if (e[44] !== C) {
        onAction = ()=>{
            C();
        };
        e[44] = C;
        e[45] = onAction;
    } else {
        onAction = e[45];
    }
    let suggestions;
    if (e[46] === Symbol.for("react.memo_cache_sentinel")) {
        suggestions = [];
        e[46] = suggestions;
    } else {
        suggestions = e[46];
    }
    let A;
    if (e[47] !== p || e[48] !== isPending || e[49] !== y.displayName || e[50] !== isConnected || e[51] !== actionLabel || e[52] !== handoff || e[53] !== icon || e[54] !== onAction) {
        A = <C_1 actionLabel={actionLabel} description={description} displayName={y_displayName} handoff={handoff} icon={icon} isActionPending={isPending} isAdminDisabled={false} isConnected={isConnected} isTeam={false} onAction={onAction} onBrowseMore={onBrowseMore} suggestions={suggestions} toolCount={0}/>;
        e[47] = p;
        e[48] = isPending;
        e[49] = y.displayName;
        e[50] = isConnected;
        e[51] = actionLabel;
        e[52] = handoff;
        e[53] = icon;
        e[54] = onAction;
        e[55] = A;
    } else {
        A = e[55];
    }
    return A;
}
export { AeComponent as L, ReComponent as S };
