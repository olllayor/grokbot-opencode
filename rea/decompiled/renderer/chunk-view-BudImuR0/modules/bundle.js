import { c as c_1, j as j_1, T as T_1, r as r_1, p as p_1, u as u_1, i as i_1, _, k as k_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { b7, bP, bA, jR, bO, ec, jS, jT, jU, jV, aV, aP as Jl, a_, s as Ei1, j2, a$, D as D_1, aU, N, ad, fB, fd, r as r_2, jW, cu, jX, jY, eP, jG, dc, jZ, b9, bT, j_, j$, k0, ay, e5, e6, e7, k1 as connector, k2, ee as ee_1, k3, ej, k4, V as V_1, jh, k5, b8, k6, aT, k7, cq, aK, e4, k8, k9, ka as ka_1, kb, kc, bB, ei, ef, kd, eg, ed, ke as ke_1, cr, fh, kf, c$, kg, cs, c_, cZ, cS, ff, kh, cv, f6 as accountKey, ek as pollIntervalMs, dm as Fi, ki } from "./index.eager-app-Cj5f8Gby.js";
import { g as Rs1, B, W as W_1, bx as Vi, z as Fs, p as At, m as Ui, r as Qt1, L, U, Q, cN, cO, t as Oe, bV, x as x_1, bc as Zi, D as D_2 } from "./index-ZYxf-aBb.js";
import { i as i_2, u as u_2, a_ as Aa1, aY as Ze, x as x_2, j as j_2, c as c_2 } from "./index.eager-platform-Dcfeegfw.js";
import { u as u_3 } from "./chunk-use-active-option-scroll-B1hXdW5d.js";
import { u as u_4, W as W_2 } from "./chunk-wipe-navigation-B3wgZxtA.js";
import { S as S_1, a as Ft1 } from "./chunk-pane-header-DzXd4Vgr.js";
import { S as S_2 } from "./chunk-scroll-pane-CoxKzaOs.js";
import { u as u_5, f as f_1, I, s, a as a_1, b, l, c as c_3, d, g, m, h, i as i_3, L as L_1, M, j as j_3, k as k_2, n as n_1, o, F as pluginLimit, q, P, v as v_1, w, x as x_3, y as y_1, z as z_1, A, B as B_1, C as C_1, D as D_3 } from "./chunk-marketplace-browse-model-DoOY91TS.js";
import { T as T_2, P as P_1, S as S_3, C as C_2, a as Tn, d as Jt1, c as Id, A as A_1, b as _d, G } from "./chunk-plugins-rows-2d0UrD7L.js";
import { J } from "./index.eager-common-CdCvBQNJ.js";
import { a as a_2 } from "./chunk-provider-listener-integrations-CR9f28xA.js";
import { u as u_6 } from "./chunk-native-plugin-state-AwCLFZLB.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "31fbc446-62e4-4eb4-b813-09869f97b2c5";
            e._sentryDebugIdIdentifier = "sentry-dbid-31fbc446-62e4-4eb4-b813-09869f97b2c5";
        }
    } catch (e) {}
})();
const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f || (m.f = [
    "./chunk-plugin-detail-view-tZskkHRA.js",
    "./index.eager-vendor-Qbf9YA6n.js",
    "./index.eager-app-Cj5f8Gby.js",
    "./index.eager-platform-Dcfeegfw.js",
    "./index.eager-common-CdCvBQNJ.js",
    "./chunk-finance-CSw6gjXN.js",
    "./index-ZYxf-aBb.js",
    "./index-B9V4agTc.css",
    "./chunk-provider-listener-integrations-CR9f28xA.js",
    "./chunk-plugins-rows-2d0UrD7L.js",
    "./chunk-mcp-connector-status-DhhAF8A6.js",
    "./chunk-marketplace-browse-model-DoOY91TS.js",
    "./chunk-use-active-option-scroll-B1hXdW5d.js",
    "./chunk-wipe-navigation-B3wgZxtA.js",
    "./chunk-pane-header-DzXd4Vgr.js",
    "./chunk-scroll-pane-CoxKzaOs.js",
    "./chunk-native-plugin-state-AwCLFZLB.js",
    "./chunk-provider-credentials-yP7QsOsy.js",
    "./chunk-native-plugin-detail-CoiLPvZP.js",
    "./chunk-settings-row-I8ggwIzt.js"
]))=>i.map((i)=>d[i]);
function Ra() {
    const n = c_1.c(3);
    const botMarketplace = b7().botMarketplace;
    const state = bP(botMarketplace.snapshots);
    let a;
    if (n[0] !== state || n[1] !== botMarketplace.retry) {
        a = {
            state,
            retry: botMarketplace.retry
        };
        n[0] = state;
        n[1] = botMarketplace.retry;
        n[2] = a;
    } else {
        a = n[2];
    }
    return a;
}
function TtComponent(n) {
    TtComponent.d = 882;
    const e = c_1.c(23);
    const { server, isBusy, idleLabel, onAuthenticate } = n;
    const l = bA();
    const c = jR(server.serverIdentifier);
    const i = a_2();
    if (server.status !== "needsAuth") {
        return null;
    }
    if (server.cursorScmProvider != null) {
        const g = server.cursorScmProvider;
        const providerName = bO(g)?.displayName ?? server.name;
        const y = isBusy || i.isPending;
        let h;
        if (e[0] !== g || e[1] !== i) {
            h = ()=>{
                i.connect(g);
            };
            e[0] = g;
            e[1] = i;
            e[2] = h;
        } else {
            h = e[2];
        }
        let k;
        if (e[3] !== providerName) {
            k = <T_1 id="trIsPs" values={{
                providerName
            }}/>;
            e[3] = providerName;
            e[4] = k;
        } else {
            k = e[4];
        }
        let b;
        if (e[5] !== y || e[6] !== h || e[7] !== k) {
            b = <Rs1 disabled={y} onClick={h} size="sm" type="button" variant="secondary">{k}</Rs1>;
            e[5] = y;
            e[6] = h;
            e[7] = k;
            e[8] = b;
        } else {
            b = e[8];
        }
        return b;
    }
    let o;
    e: {
        if (c == null) {
            let p;
            if (e[9] !== idleLabel) {
                p = idleLabel ?? <T_1 id="OX6vme"/>;
                e[9] = idleLabel;
                e[10] = p;
            } else {
                p = e[10];
            }
            o = p;
            break e;
        }
        if (c.status === "waiting") {
            let p;
            if (e[11] === Symbol.for("react.memo_cache_sentinel")) {
                p = <T_1 id="M7SqjM"/>;
                e[11] = p;
            } else {
                p = e[11];
            }
            o = p;
            break e;
        }
        let g;
        if (e[12] === Symbol.for("react.memo_cache_sentinel")) {
            g = <T_1 id="6gRgw8"/>;
            e[12] = g;
        } else {
            g = e[12];
        }
        o = g;
    }
    const u = o;
    let f;
    if (e[13] !== c?.status || e[14] !== onAuthenticate || e[15] !== l || e[16] !== server.id || e[17] !== server.serverIdentifier) {
        f = ()=>{
            if (c?.status === "waiting") {
                return ec(server.serverIdentifier, l, ()=>onAuthenticate(server.id));
            }
            return onAuthenticate(server.id);
        };
        e[13] = c?.status;
        e[14] = onAuthenticate;
        e[15] = l;
        e[16] = server.id;
        e[17] = server.serverIdentifier;
        e[18] = f;
    } else {
        f = e[18];
    }
    let m;
    if (e[19] !== isBusy || e[20] !== u || e[21] !== f) {
        m = <Rs1 disabled={isBusy} onClick={f} size="sm" type="button" variant="secondary">{u}</Rs1>;
        e[19] = isBusy;
        e[20] = u;
        e[21] = f;
        e[22] = m;
    } else {
        m = e[22];
    }
    return m;
}
function ca(listing) {
    return listing.slug === "seed-a91e4c";
}
const qd = "grok-bot-team";
function Md(n) {
    return n.trim().toLocaleLowerCase("en-US").split(/[\s_]+/u).join("-");
}
function Cd(n) {
    return Md(n) === qd;
}
function Td(listing) {
    const e = new Set;
    const s = [];
    const a = listing.categories.length > 0 ? listing.categories : [
        listing.category
    ];
    for (const d of a){
        const r = d.trim();
        if (!(r.length === 0 || e.has(r))) {
            e.add(r);
            s.push(r);
        }
    }
    return s;
}
const ua = new Set;
const fa = {
    root: {
        kVAEAm: "sand-1n2onr6",
        k1xSpc: "sand-3nfvp2",
        kmuXW: "sand-2lah0s",
        kaIpWk: "sand-149ho13",
        kVQacm: "sand-b3r6kr",
        $$css: true
    },
    size: (n)=>[
            {
                kzqmXN: n != null ? "sand-5lhr3w" : n,
                kZKoxP: n != null ? "sand-16ye13r" : n,
                $$css: true
            },
            {
                "--x-width": ((e)=>{
                    if (typeof e === "number") {
                        return `${e}px`;
                    }
                    return e ?? undefined;
                })(n),
                "--x-height": ((e)=>{
                    if (typeof e === "number") {
                        return `${e}px`;
                    }
                    return e ?? undefined;
                })(n)
            }
        ]
};
function KaComponent(n) {
    KaComponent.d = 1134;
    const e = c_1.c(19);
    const { sizePx, src } = n;
    let d;
    if (e[0] !== src) {
        d = ()=>{
            if (ua.has(src)) {
                return src;
            }
            return null;
        };
        e[0] = src;
        e[1] = d;
    } else {
        d = e[1];
    }
    const [r, setR] = r_1.useState(d);
    const c = r === src;
    let i;
    if (e[2] !== src) {
        i = ()=>{
            ua.add(src);
            setR((h)=>{
                if (h === src) {
                    return h;
                }
                return src;
            });
        };
        e[2] = src;
        e[3] = i;
    } else {
        i = e[3];
    }
    const onLoad = i;
    let u;
    if (e[4] !== onLoad) {
        u = (h)=>{
            if (h?.complete === true && h.naturalWidth > 0) {
                onLoad();
            }
        };
        e[4] = onLoad;
        e[5] = u;
    } else {
        u = e[5];
    }
    const f = u;
    let m;
    if (e[6] !== sizePx) {
        m = p_1(fa.root, fa.size(sizePx));
        e[6] = sizePx;
        e[7] = m;
    } else {
        m = e[7];
    }
    let g;
    if (e[8] !== sizePx) {
        g = <B icon="person" ring={false} sizePx={sizePx}/>;
        e[8] = sizePx;
        e[9] = g;
    } else {
        g = e[9];
    }
    let p;
    if (e[10] !== f || e[11] !== c || e[12] !== onLoad || e[13] !== src) {
        p = src.length === 0 ? null : <img alt="" draggable={false} onLoad={onLoad} ref={f} src={src} {...{
            0: {
                className: "sand-10l6tqk sand-10a8y8t sand-h8yej3 sand-5yr21d sand-149ho13 sand-l1xv1r sand-g01cxk sand-19991ni sand-7pq1vu sand-6tor67"
            },
            1: {
                className: "sand-10l6tqk sand-10a8y8t sand-h8yej3 sand-5yr21d sand-149ho13 sand-l1xv1r sand-19991ni sand-7pq1vu sand-6tor67 sand-1hc1fzr"
            }
        }[!!c << 0]}/>;
        e[10] = f;
        e[11] = c;
        e[12] = onLoad;
        e[13] = src;
        e[14] = p;
    } else {
        p = e[14];
    }
    let y;
    if (e[15] !== m || e[16] !== g || e[17] !== p) {
        y = <span aria-hidden {...m}>{g}{p}</span>;
        e[15] = m;
        e[16] = g;
        e[17] = p;
        e[18] = y;
    } else {
        y = e[18];
    }
    return y;
}
const Bd = {
    mark: {
        kMwMTN: "sand-n3e42v",
        $$css: true
    }
};
function EaComponent(n) {
    EaComponent.d = 1135;
    const e = c_1.c(8);
    const { categories } = n;
    const { _ } = u_1();
    if (!categories.some(Cd)) {
        return null;
    }
    let d;
    if (e[0] !== _) {
        d = _({
            id: "Qcynxc"
        });
        e[0] = _;
        e[1] = d;
    } else {
        d = e[1];
    }
    const content = d;
    let l;
    if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        l = {
            className: "sand-3nfvp2 sand-2lah0s"
        };
        e[2] = l;
    } else {
        l = e[2];
    }
    let c;
    if (e[3] !== content) {
        c = <span {...l}><W_1 aria-label={content} name="check-circle" rootStyle={Bd.mark} size={12} title=""/></span>;
        e[3] = content;
        e[4] = c;
    } else {
        c = e[4];
    }
    let i;
    if (e[5] !== content || e[6] !== c) {
        i = <Vi content={content}>{c}</Vi>;
        e[5] = content;
        e[6] = c;
        e[7] = i;
    } else {
        i = e[7];
    }
    return i;
}
const La = [
    "instructions",
    "memories",
    "skills",
    "routines",
    "integrations"
];
const ls = {
    instructions: {
        label: {
            id: "NxHkkp"
        },
        description: {
            id: "qKxciE"
        }
    },
    memories: {
        label: {
            id: "QCEzof"
        },
        description: {
            id: "zm5NjC"
        }
    },
    skills: {
        label: {
            id: "PCSkw2"
        },
        description: {
            id: "2BI6+v"
        }
    },
    routines: {
        label: {
            id: "dmYV6f"
        },
        description: {
            id: "en+L+E"
        }
    },
    integrations: {
        label: {
            id: "nbfdhU"
        },
        description: {
            id: "okHDuo"
        }
    }
};
function $d() {
    const n = c_1.c(41);
    const { _ } = u_1();
    let s;
    if (n[0] !== _) {
        s = _(ls.instructions.label);
        n[0] = _;
        n[1] = s;
    } else {
        s = n[1];
    }
    let a;
    if (n[2] !== _) {
        a = _(ls.instructions.description);
        n[2] = _;
        n[3] = a;
    } else {
        a = n[3];
    }
    let instructions;
    if (n[4] !== s || n[5] !== a) {
        instructions = {
            label: s,
            description: a
        };
        n[4] = s;
        n[5] = a;
        n[6] = instructions;
    } else {
        instructions = n[6];
    }
    let r;
    if (n[7] !== _) {
        r = _(ls.memories.label);
        n[7] = _;
        n[8] = r;
    } else {
        r = n[8];
    }
    let l;
    if (n[9] !== _) {
        l = _(ls.memories.description);
        n[9] = _;
        n[10] = l;
    } else {
        l = n[10];
    }
    let memories;
    if (n[11] !== r || n[12] !== l) {
        memories = {
            label: r,
            description: l
        };
        n[11] = r;
        n[12] = l;
        n[13] = memories;
    } else {
        memories = n[13];
    }
    let i;
    if (n[14] !== _) {
        i = _(ls.skills.label);
        n[14] = _;
        n[15] = i;
    } else {
        i = n[15];
    }
    let o;
    if (n[16] !== _) {
        o = _(ls.skills.description);
        n[16] = _;
        n[17] = o;
    } else {
        o = n[17];
    }
    let u;
    if (n[18] !== i || n[19] !== o) {
        u = {
            label: i,
            description: o
        };
        n[18] = i;
        n[19] = o;
        n[20] = u;
    } else {
        u = n[20];
    }
    let f;
    if (n[21] !== _) {
        f = _(ls.routines.label);
        n[21] = _;
        n[22] = f;
    } else {
        f = n[22];
    }
    let m;
    if (n[23] !== _) {
        m = _(ls.routines.description);
        n[23] = _;
        n[24] = m;
    } else {
        m = n[24];
    }
    let routines;
    if (n[25] !== m || n[26] !== f) {
        routines = {
            label: f,
            description: m
        };
        n[25] = m;
        n[26] = f;
        n[27] = routines;
    } else {
        routines = n[27];
    }
    let p;
    if (n[28] !== _) {
        p = _(ls.integrations.label);
        n[28] = _;
        n[29] = p;
    } else {
        p = n[29];
    }
    let y;
    if (n[30] !== _) {
        y = _(ls.integrations.description);
        n[30] = _;
        n[31] = y;
    } else {
        y = n[31];
    }
    let integrations;
    if (n[32] !== p || n[33] !== y) {
        integrations = {
            label: p,
            description: y
        };
        n[32] = p;
        n[33] = y;
        n[34] = integrations;
    } else {
        integrations = n[34];
    }
    let k;
    if (n[35] !== routines || n[36] !== integrations || n[37] !== instructions || n[38] !== memories || n[39] !== u) {
        k = {
            instructions,
            memories,
            skills: u,
            routines,
            integrations
        };
        n[35] = routines;
        n[36] = integrations;
        n[37] = instructions;
        n[38] = memories;
        n[39] = u;
        n[40] = k;
    } else {
        k = n[40];
    }
    return k;
}
const De = {
    headerDivider: {
        kzqmXN: "sand-14atkfc",
        k71WvV: "sand-bmvrgn",
        keTefX: "sand-1diwwjn",
        $$css: true
    },
    title: {
        kogj98: "sand-1ghz6dp",
        kMwMTN: "sand-tyxrsu",
        kLWn49: "sand-101yacv",
        $$css: true
    },
    byline: {
        k1xSpc: "sand-78zum5",
        kGNEyG: "sand-6s0dn4",
        kOIVth: "sand-1jnr06f",
        kMwMTN: "sand-1o0liin",
        $$css: true
    },
    description: {
        kogj98: "sand-1ghz6dp",
        kzqmXN: "sand-h8yej3",
        kMwMTN: "sand-tyxrsu",
        $$css: true
    },
    sectionRailScroll: {
        kSGwAc: "sand-kh2ocl",
        kmuXW: "sand-2lah0s",
        kzqmXN: "sand-ehuqhz",
        kAzted: "sand-2lwn1j",
        $$css: true
    },
    sectionRow: {
        kAzted: "sand-2lwn1j",
        kLKAdn: "sand-889kno",
        kwRFfy: "sand-pdmqnj",
        kGO01o: "sand-1a8lsjc",
        kZCmMZ: "sand-1g0dm76",
        kaIpWk: "sand-ixl9f9",
        kWkggS: "sand-jbqb8w sand-l29flr",
        $$css: true
    },
    sectionRowSelected: {
        kWkggS: "sand-8c2ked sand-kv5z0a",
        $$css: true
    },
    contentScroll: {
        kzQI83: "sand-1iyjqo2",
        kmuXW: "sand-s83m0k",
        kCS8Yb: "sand-dl72j9",
        k7Eaqz: "sand-euugli",
        kAzted: "sand-2lwn1j",
        $$css: true
    },
    item: {
        kLKAdn: "sand-exx8yu",
        kwRFfy: "sand-yri2b",
        kGO01o: "sand-18d9i69",
        kZCmMZ: "sand-1c1uobl",
        $$css: true
    },
    memoryItem: {
        kogj98: "sand-1ghz6dp",
        kMwMTN: "sand-1o0liin",
        khDVqt: "sand-126k92a",
        kHjlTd: "sand-1mzt3pk",
        $$css: true
    },
    instructions: {
        kogj98: "sand-1ghz6dp",
        kMwMTN: "sand-1o0liin",
        kLWn49: "sand-1qoy3rc",
        khDVqt: "sand-126k92a",
        kHjlTd: "sand-1mzt3pk",
        $$css: true
    },
    status: {
        k1xSpc: "sand-78zum5",
        kzQI83: "sand-1iyjqo2",
        kXwgrk: "sand-dt5ytf",
        kGNEyG: "sand-6s0dn4",
        kjj79g: "sand-l56j7k",
        kOIVth: "sand-1v2ro7d",
        kMwMTN: "sand-1o0liin",
        $$css: true
    },
    shareButton: {
        kVAEAm: "sand-10l6tqk",
        k87sOh: "sand-1eu8d0j",
        kt4wiu: "sand-pjqbc8",
        kY2c9j: "sand-zkaem6",
        $$css: true
    }
};
function Fa(n, template) {
    switch(n){
        case "instructions":
            if (template.description.trim().length > 0) {
                return 1;
            }
            return 0;
        case "memories":
            return template.memory?.length ?? 0;
        case "skills":
            return template.skills?.length ?? 0;
        case "routines":
            return template.routines?.length ?? 0;
        case "integrations":
            return template.plugins?.length ?? 0;
    }
}
function DaComponent(n) {
    DaComponent.d = 1175;
    const e = c_1.c(63);
    const { listing, avatarSrc, shareUrl, onAdd, titleRef } = n;
    const { _: __1 } = u_1();
    let i;
    let o;
    let u;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        i = {
            className: "sand-1n2onr6 sand-78zum5 sand-dt5ytf sand-2lah0s sand-ou54vl sand-euugli sand-pdmqnj sand-1g0dm76"
        };
        o = {
            className: "sand-1n2onr6 sand-2lah0s sand-29ncy0 sand-y75621"
        };
        u = {
            className: "sand-10l6tqk sand-1o0tod sand-13vifvy"
        };
        e[0] = i;
        e[1] = o;
        e[2] = u;
    } else {
        i = e[0];
        o = e[1];
        u = e[2];
    }
    let f;
    if (e[3] !== avatarSrc || e[4] !== listing.avatar.kind) {
        f = <span {...u}>{listing.avatar.kind === "default" ? <B aria-hidden bare sizePx={64} src={avatarSrc}/> : <B aria-hidden ring={false} sizePx={64} src={avatarSrc}/>}</span>;
        e[3] = avatarSrc;
        e[4] = listing.avatar.kind;
        e[5] = f;
    } else {
        f = e[5];
    }
    let m;
    if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
        m = {
            className: "sand-10l6tqk sand-yx8ycp sand-117b58n sand-78zum5 sand-6s0dn4 sand-l56j7k sand-100vrsf sand-1vqgdyp"
        };
        e[6] = m;
    } else {
        m = e[6];
    }
    let g;
    if (e[7] === Symbol.for("react.memo_cache_sentinel")) {
        g = <span aria-hidden className="sand-10l6tqk sand-10a8y8t sand-149ho13 sand-10e981r sand-47corl"/>;
        e[7] = g;
    } else {
        g = e[7];
    }
    let p;
    if (e[8] !== listing.creator.profilePhotoUrl) {
        p = <span {...m}>{g}<KaComponent sizePx={36} src={listing.creator.profilePhotoUrl}/></span>;
        e[8] = listing.creator.profilePhotoUrl;
        e[9] = p;
    } else {
        p = e[9];
    }
    let y;
    if (e[10] !== f || e[11] !== p) {
        y = <div {...o}>{f}{p}</div>;
        e[10] = f;
        e[11] = p;
        e[12] = y;
    } else {
        y = e[12];
    }
    let h;
    let k;
    let b;
    let I;
    if (e[13] === Symbol.for("react.memo_cache_sentinel")) {
        I = {
            className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-1v2ro7d sand-h8yej3 sand-euugli"
        };
        h = {
            className: "sand-78zum5 sand-dt5ytf sand-195vfkc sand-euugli"
        };
        k = {
            className: "sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-h8yej3 sand-euugli"
        };
        b = {
            className: "sand-1n2onr6 sand-78zum5 sand-6s0dn4 sand-euugli sand-1xr8qbc sand-jodmca"
        };
        e[13] = h;
        e[14] = k;
        e[15] = b;
        e[16] = I;
    } else {
        h = e[13];
        k = e[14];
        b = e[15];
        I = e[16];
    }
    let S;
    if (e[17] !== listing) {
        S = ca(listing) ? j2(listing.name) : undefined;
        e[17] = listing;
        e[18] = S;
    } else {
        S = e[18];
    }
    let j;
    if (e[19] === Symbol.for("react.memo_cache_sentinel")) {
        j = p_1(a_.heading2, a$.medium, De.title);
        e[19] = j;
    } else {
        j = e[19];
    }
    let N;
    if (e[20] !== listing.name || e[21] !== S || e[22] !== titleRef) {
        N = <h2 aria-label={S} ref={titleRef} tabIndex={-1} {...j}>{listing.name}</h2>;
        e[20] = listing.name;
        e[21] = S;
        e[22] = titleRef;
        e[23] = N;
    } else {
        N = e[23];
    }
    let x;
    if (e[24] !== __1 || e[25] !== shareUrl) {
        x = shareUrl == null ? null : <span className="sand-10l6tqk sand-2hswfz sand-78zum5 sand-6s0dn4 sand-dwrcjd"><Ui label={__1({
            id: "ZjAU9n"
        })} url={shareUrl} variant="secondary"/></span>;
        e[24] = __1;
        e[25] = shareUrl;
        e[26] = x;
    } else {
        x = e[26];
    }
    let _;
    if (e[27] !== N || e[28] !== x) {
        _ = <div {...b}>{N}{x}</div>;
        e[27] = N;
        e[28] = x;
        e[29] = _;
    } else {
        _ = e[29];
    }
    let z;
    if (e[30] === Symbol.for("react.memo_cache_sentinel")) {
        z = {
            className: "sand-78zum5 sand-2lah0s sand-vc5jky"
        };
        e[30] = z;
    } else {
        z = e[30];
    }
    const w = onAdd == null;
    let q;
    if (e[31] === Symbol.for("react.memo_cache_sentinel")) {
        q = <T_1 id="7++OwZ"/>;
        e[31] = q;
    } else {
        q = e[31];
    }
    let A;
    if (e[32] !== onAdd || e[33] !== w) {
        A = <span {...z}><Fs disabled={w} onClick={onAdd} size="lg">{q}</Fs></span>;
        e[32] = onAdd;
        e[33] = w;
        e[34] = A;
    } else {
        A = e[34];
    }
    let T;
    if (e[35] !== _ || e[36] !== A) {
        T = <div {...k}>{_}{A}</div>;
        e[35] = _;
        e[36] = A;
        e[37] = T;
    } else {
        T = e[37];
    }
    let M;
    if (e[38] === Symbol.for("react.memo_cache_sentinel")) {
        M = p_1(a_.body2, De.byline);
        e[38] = M;
    } else {
        M = e[38];
    }
    let P;
    if (e[39] !== listing.creator.name) {
        P = <T_1 id="aavdrC" values={{
            0: listing.creator.name
        }}/>;
        e[39] = listing.creator.name;
        e[40] = P;
    } else {
        P = e[40];
    }
    let K;
    if (e[41] !== listing) {
        K = Td(listing);
        e[41] = listing;
        e[42] = K;
    } else {
        K = e[42];
    }
    let C;
    if (e[43] !== K) {
        C = <EaComponent categories={K}/>;
        e[43] = K;
        e[44] = C;
    } else {
        C = e[44];
    }
    let D;
    if (e[45] !== listing) {
        D = ca(listing) ? <span aria-hidden><D_1/></span> : null;
        e[45] = listing;
        e[46] = D;
    } else {
        D = e[46];
    }
    let F;
    if (e[47] !== P || e[48] !== C || e[49] !== D) {
        F = <span {...M}>{P}{C}{D}</span>;
        e[47] = P;
        e[48] = C;
        e[49] = D;
        e[50] = F;
    } else {
        F = e[50];
    }
    let G;
    if (e[51] !== T || e[52] !== F) {
        G = <div {...h}>{T}{F}</div>;
        e[51] = T;
        e[52] = F;
        e[53] = G;
    } else {
        G = e[53];
    }
    let W;
    if (e[54] === Symbol.for("react.memo_cache_sentinel")) {
        W = p_1(a_.body1, De.description);
        e[54] = W;
    } else {
        W = e[54];
    }
    let Z;
    if (e[55] !== listing.description) {
        Z = <p {...W}>{listing.description}</p>;
        e[55] = listing.description;
        e[56] = Z;
    } else {
        Z = e[56];
    }
    let O;
    if (e[57] !== G || e[58] !== Z) {
        O = <div {...I}>{G}{Z}</div>;
        e[57] = G;
        e[58] = Z;
        e[59] = O;
    } else {
        O = e[59];
    }
    let L;
    if (e[60] !== O || e[61] !== y) {
        L = <div {...i}>{y}{O}</div>;
        e[60] = O;
        e[61] = y;
        e[62] = L;
    } else {
        L = e[62];
    }
    return L;
}
function VaComponent(n) {
    VaComponent.d = 1174;
    const e = c_1.c(14);
    const { template, selected, onSelect } = n;
    const r = $d();
    let l;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        l = {
            className: "sand-78zum5 sand-dt5ytf sand-2lah0s sand-ehuqhz sand-1nn3v0j sand-1120s5i"
        };
        e[0] = l;
    } else {
        l = e[0];
    }
    let c;
    if (e[1] !== r || e[2] !== onSelect || e[3] !== selected || e[4] !== template) {
        let o;
        if (e[6] !== template) {
            o = (f)=>Fa(f, template) > 0;
            e[6] = template;
            e[7] = o;
        } else {
            o = e[7];
        }
        let u;
        if (e[8] !== r || e[9] !== onSelect || e[10] !== selected) {
            u = (f)=><L key={f} data-marketplace-section={f} description={r[f].description} isSelected={f === selected} label={r[f].label} onClick={()=>onSelect(f)} size="lg" style={[
                    De.sectionRow,
                    f === selected && De.sectionRowSelected
                ]}/>;
            e[8] = r;
            e[9] = onSelect;
            e[10] = selected;
            e[11] = u;
        } else {
            u = e[11];
        }
        c = La.filter(o).map(u);
        e[1] = r;
        e[2] = onSelect;
        e[3] = selected;
        e[4] = template;
        e[5] = c;
    } else {
        c = e[5];
    }
    let i;
    if (e[12] !== c) {
        i = <nav {...l}>{c}</nav>;
        e[12] = c;
        e[13] = i;
    } else {
        i = e[13];
    }
    return i;
}
function UaComponent(n) {
    UaComponent.d = 1173;
    const e = c_1.c(19);
    const { section, template } = n;
    if (section === "instructions") {
        let l;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = p_1(a_.body1, De.instructions);
            e[0] = l;
        } else {
            l = e[0];
        }
        let c;
        if (e[1] !== template.description) {
            c = <p {...l}>{template.description}</p>;
            e[1] = template.description;
            e[2] = c;
        } else {
            c = e[2];
        }
        return c;
    }
    if (section === "memories") {
        let l;
        if (e[3] !== template.memory) {
            l = template.memory ?? [];
            e[3] = template.memory;
            e[4] = l;
        } else {
            l = e[4];
        }
        let c;
        if (e[5] !== l) {
            c = l.map(EdComponent);
            e[5] = l;
            e[6] = c;
        } else {
            c = e[6];
        }
        return c;
    }
    if (section === "skills") {
        let l;
        if (e[7] !== template.skills) {
            l = template.skills ?? [];
            e[7] = template.skills;
            e[8] = l;
        } else {
            l = e[8];
        }
        let c;
        if (e[9] !== l) {
            c = l.map(KdComponent);
            e[9] = l;
            e[10] = c;
        } else {
            c = e[10];
        }
        return c;
    }
    if (section === "routines") {
        let l;
        if (e[11] !== template.routines) {
            l = template.routines ?? [];
            e[11] = template.routines;
            e[12] = l;
        } else {
            l = e[12];
        }
        let c;
        if (e[13] !== l) {
            c = l.map(RdComponent);
            e[13] = l;
            e[14] = c;
        } else {
            c = e[14];
        }
        return c;
    }
    let d;
    if (e[15] !== template.plugins) {
        d = template.plugins ?? [];
        e[15] = template.plugins;
        e[16] = d;
    } else {
        d = e[16];
    }
    let r;
    if (e[17] !== d) {
        r = d.map(OdComponent);
        e[17] = d;
        e[18] = r;
    } else {
        r = e[18];
    }
    return r;
}
function OdComponent(n) {
    return <Qt1 key={n.pluginId} label={n.name} size="lg" style={De.item} {...n.description == null ? {} : {
        description: n.description
    }}/>;
}
function RdComponent(n) {
    return <Qt1 key={n.slug} description={n.description} label={n.name} size="lg" style={De.item}/>;
}
function KdComponent(n) {
    return <Qt1 key={n.name} description={n.description} label={n.name} size="lg" style={De.item}/>;
}
function EdComponent(n, e) {
    return <p key={`${e}:${n.content}`} dir="auto" {...p_1(a_.body1, De.memoryItem)}>{n.content}</p>;
}
function BnComponent(n) {
    BnComponent.d = 1172;
    const e = c_1.c(28);
    const { template, contentScrollRef } = n;
    let d;
    if (e[0] !== template) {
        d = (j)=>Fa(j, template) > 0;
        e[0] = template;
        e[1] = d;
    } else {
        d = e[1];
    }
    const r = La.filter(d);
    const [l, setL] = r_1.useState(null);
    const [i, setI] = r_1.useState(false);
    const u = l != null && r.includes(l) ? l : r[0] ?? null;
    if (u == null) {
        return null;
    }
    let f;
    if (e[2] !== contentScrollRef || e[3] !== u || e[4] !== setI || e[5] !== setL) {
        f = (j)=>{
            if (j !== u) {
                setL(j);
                setI(true);
                contentScrollRef.current?.scrollToTop();
            }
        };
        e[2] = contentScrollRef;
        e[3] = u;
        e[4] = setI;
        e[5] = setL;
        e[6] = f;
    } else {
        f = e[6];
    }
    const m = f;
    let g;
    if (e[7] === Symbol.for("react.memo_cache_sentinel")) {
        g = {
            className: "sand-78zum5 sand-1iyjqo2 sand-s83m0k sand-dl72j9 sand-1cy8zhl sand-1665zp3 sand-h8yej3 sand-euugli sand-2lwn1j sand-b3r6kr"
        };
        e[7] = g;
    } else {
        g = e[7];
    }
    let p;
    if (e[8] !== m || e[9] !== u || e[10] !== template) {
        p = <Aa1 rootStyle={De.sectionRailScroll} scrollbarVisibility="hover"><VaComponent onSelect={m} selected={u} template={template}/></Aa1>;
        e[8] = m;
        e[9] = u;
        e[10] = template;
        e[11] = p;
    } else {
        p = e[11];
    }
    let y;
    if (e[12] === Symbol.for("react.memo_cache_sentinel")) {
        y = {
            className: "sand-78zum5 sand-1iyjqo2 sand-dt5ytf sand-kh2ocl sand-euugli sand-2lwn1j sand-mz0i5r sand-b3r6kr sand-ixl9f9 sand-s6r99b"
        };
        e[12] = y;
    } else {
        y = e[12];
    }
    let h;
    if (e[13] !== i) {
        h = ({
            0: {
                className: "sand-78zum5 sand-1iyjqo2 sand-dt5ytf sand-ou54vl sand-yamay9 sand-1x5flf6 sand-1l90r2v sand-wn43p0"
            },
            1: {
                className: "sand-78zum5 sand-1iyjqo2 sand-dt5ytf sand-ou54vl sand-yamay9 sand-1x5flf6 sand-1l90r2v sand-wn43p0 sand-r1vbnl sand-gyzkii sand-1yruv16 sand-1u6ievf"
            }
        })[!!i << 0];
        e[13] = i;
        e[14] = h;
    } else {
        h = e[14];
    }
    let k;
    if (e[15] !== u || e[16] !== template) {
        k = <UaComponent section={u} template={template}/>;
        e[15] = u;
        e[16] = template;
        e[17] = k;
    } else {
        k = e[17];
    }
    let b;
    if (e[18] !== u || e[19] !== h || e[20] !== k) {
        b = <div key={u} {...h}>{k}</div>;
        e[18] = u;
        e[19] = h;
        e[20] = k;
        e[21] = b;
    } else {
        b = e[21];
    }
    let I;
    if (e[22] !== contentScrollRef || e[23] !== b) {
        I = <div {...y}><Aa1 ref={contentScrollRef} rootStyle={De.contentScroll} scrollbarVisibility="hover">{b}</Aa1></div>;
        e[22] = contentScrollRef;
        e[23] = b;
        e[24] = I;
    } else {
        I = e[24];
    }
    let S;
    if (e[25] !== p || e[26] !== I) {
        S = <div {...g}>{p}{I}</div>;
        e[25] = p;
        e[26] = I;
        e[27] = S;
    } else {
        S = e[27];
    }
    return S;
}
function GaComponent(n) {
    GaComponent.d = 1176;
    const e = c_1.c(23);
    const { state, retry, contentScrollRef } = n;
    if (state.status === "ready") {
        let o;
        if (e[0] !== state.value) {
            o = jU(state.value);
            e[0] = state.value;
            e[1] = o;
        } else {
            o = e[1];
        }
        let u;
        if (e[2] !== contentScrollRef || e[3] !== o) {
            u = <BnComponent contentScrollRef={contentScrollRef} template={o}/>;
            e[2] = contentScrollRef;
            e[3] = o;
            e[4] = u;
        } else {
            u = e[4];
        }
        return u;
    }
    if (state.status === "loading" && state.previous != null) {
        let o;
        if (e[5] !== state.previous) {
            o = jU(state.previous);
            e[5] = state.previous;
            e[6] = o;
        } else {
            o = e[6];
        }
        let u;
        if (e[7] !== contentScrollRef || e[8] !== o) {
            u = <BnComponent contentScrollRef={contentScrollRef} template={o}/>;
            e[7] = contentScrollRef;
            e[8] = o;
            e[9] = u;
        } else {
            u = e[9];
        }
        return u;
    }
    if (state.status === "failed" && state.previous != null) {
        let o;
        if (e[10] !== state.previous) {
            o = jU(state.previous);
            e[10] = state.previous;
            e[11] = o;
        } else {
            o = e[11];
        }
        let u;
        if (e[12] !== contentScrollRef || e[13] !== o) {
            u = <BnComponent contentScrollRef={contentScrollRef} template={o}/>;
            e[12] = contentScrollRef;
            e[13] = o;
            e[14] = u;
        } else {
            u = e[14];
        }
        return u;
    }
    if (state.status === "loading") {
        let o;
        if (e[15] === Symbol.for("react.memo_cache_sentinel")) {
            o = {
                className: "sand-78zum5 sand-1iyjqo2 sand-dt5ytf sand-6s0dn4 sand-l56j7k sand-1v2ro7d sand-1o0liin"
            };
            e[15] = o;
        } else {
            o = e[15];
        }
        let u;
        if (e[16] === Symbol.for("react.memo_cache_sentinel")) {
            u = <div {...o} role="status"><Jl size={20}/></div>;
            e[16] = u;
        } else {
            u = e[16];
        }
        return u;
    }
    if (state.status === "empty") {
        let o;
        if (e[17] === Symbol.for("react.memo_cache_sentinel")) {
            o = <p {...p_1(a_.body1, De.status)}><T_1 id="MRYMge"/></p>;
            e[17] = o;
        } else {
            o = e[17];
        }
        return o;
    }
    let r;
    if (e[18] === Symbol.for("react.memo_cache_sentinel")) {
        r = {
            className: "sand-78zum5 sand-1iyjqo2 sand-dt5ytf sand-6s0dn4 sand-l56j7k sand-1v2ro7d sand-1o0liin"
        };
        e[18] = r;
    } else {
        r = e[18];
    }
    let l;
    if (e[19] === Symbol.for("react.memo_cache_sentinel")) {
        l = <T_1 id="szUMIH"/>;
        e[19] = l;
    } else {
        l = e[19];
    }
    let c;
    if (e[20] === Symbol.for("react.memo_cache_sentinel")) {
        c = <T_1 id="qJb6G2"/>;
        e[20] = c;
    } else {
        c = e[20];
    }
    let i;
    if (e[21] !== retry) {
        i = <div {...r} role="alert">{l}<Fs onClick={retry} size="sm" variant="secondary">{c}</Fs></div>;
        e[21] = retry;
        e[22] = i;
    } else {
        i = e[22];
    }
    return i;
}
function WaComponent(n) {
    WaComponent.d = 1171;
    const e = c_1.c(16);
    const { shareId } = n;
    const { _ } = u_1();
    const { load } = jS();
    let r;
    if (e[0] !== load || e[1] !== shareId) {
        r = ()=>{
            load(shareId);
            return Ld;
        };
        e[0] = load;
        e[1] = shareId;
        e[2] = r;
    } else {
        r = e[2];
    }
    i_2(r);
    const l = jT(shareId);
    let c;
    if (e[3] !== l.state.status || e[4] !== l.state.value) {
        const h = l.state.status === "ready" ? jU(l.state.value) : undefined;
        c = h == null ? null : jV(h);
        e[3] = l.state.status;
        e[4] = l.state.value;
        e[5] = c;
    } else {
        c = e[5];
    }
    const i = c;
    const [o, u] = aV();
    if (i == null) {
        return null;
    }
    let f;
    if (e[6] !== _ || e[7] !== o) {
        f = _(o ? {
            id: "6V3Ea3"
        } : {
            id: "Z8lGw6"
        });
        e[6] = _;
        e[7] = o;
        e[8] = f;
    } else {
        f = e[8];
    }
    const m = f;
    const g = o ? "check" : "arrow-bracket-from-up";
    let p;
    if (e[9] !== u || e[10] !== i) {
        p = ()=>u(i);
        e[9] = u;
        e[10] = i;
        e[11] = p;
    } else {
        p = e[11];
    }
    let y;
    if (e[12] !== m || e[13] !== g || e[14] !== p) {
        y = <At aria-label={m} icon={g} onClick={p} shape="circle" size="md" style={De.shareButton} title={m} variant="ghost"/>;
        e[12] = m;
        e[13] = g;
        e[14] = p;
        e[15] = y;
    } else {
        y = e[15];
    }
    return y;
}
function Ld() {}
function HaComponent(n) {
    HaComponent.d = 1170;
    const e = c_1.c(25);
    const { listing, avatarSrc, onAdd, titleRef } = n;
    const { load } = jS();
    let c;
    if (e[0] !== listing.shareId || e[1] !== load) {
        c = ()=>{
            load(listing.shareId);
            return Fd;
        };
        e[0] = listing.shareId;
        e[1] = load;
        e[2] = c;
    } else {
        c = e[2];
    }
    i_2(c);
    const i = jT(listing.shareId);
    const oRef = r_1.useRef(null);
    const uRef = r_1.useRef(true);
    let onAdd_1;
    let m;
    if (e[3] !== listing.shareId || e[4] !== onAdd || e[5] !== i.state.status || e[6] !== i.state.value) {
        const S = i.state.status === "ready" ? jU(i.state.value) : undefined;
        onAdd_1 = onAdd != null && S != null ? ()=>onAdd(listing.shareId) : undefined;
        m = S == null ? null : jV(S);
        e[3] = listing.shareId;
        e[4] = onAdd;
        e[5] = i.state.status;
        e[6] = i.state.value;
        e[7] = onAdd_1;
        e[8] = m;
    } else {
        onAdd_1 = e[7];
        m = e[8];
    }
    const shareUrl = m;
    let p;
    if (e[9] !== titleRef) {
        p = ()=>{
            if (uRef.current) {
                uRef.current = false;
                titleRef.current?.focus({
                    preventScroll: true
                });
            }
        };
        e[9] = titleRef;
        e[10] = p;
    } else {
        p = e[10];
    }
    u_2(p);
    let y;
    if (e[11] === Symbol.for("react.memo_cache_sentinel")) {
        y = {
            className: "sand-9f619 sand-78zum5 sand-1iyjqo2 sand-s83m0k sand-dl72j9 sand-dt5ytf sand-1665zp3 sand-h8yej3 sand-2lwn1j sand-5yr21d sand-mz0i5r sand-b3r6kr sand-1iorvi4 sand-sfy40s sand-1gan7if sand-1mfogq2"
        };
        e[11] = y;
    } else {
        y = e[11];
    }
    let h;
    if (e[12] !== onAdd_1 || e[13] !== avatarSrc || e[14] !== listing || e[15] !== shareUrl || e[16] !== titleRef) {
        h = <DaComponent avatarSrc={avatarSrc} listing={listing} onAdd={onAdd_1} shareUrl={shareUrl} titleRef={titleRef}/>;
        e[12] = onAdd_1;
        e[13] = avatarSrc;
        e[14] = listing;
        e[15] = shareUrl;
        e[16] = titleRef;
        e[17] = h;
    } else {
        h = e[17];
    }
    let k;
    if (e[18] === Symbol.for("react.memo_cache_sentinel")) {
        k = <Ei1 style={De.headerDivider}/>;
        e[18] = k;
    } else {
        k = e[18];
    }
    let b;
    if (e[19] !== i.retry || e[20] !== i.state) {
        b = <GaComponent contentScrollRef={oRef} retry={i.retry} state={i.state}/>;
        e[19] = i.retry;
        e[20] = i.state;
        e[21] = b;
    } else {
        b = e[21];
    }
    let I;
    if (e[22] !== h || e[23] !== b) {
        I = <div {...y}>{h}{k}{b}</div>;
        e[22] = h;
        e[23] = b;
        e[24] = I;
    } else {
        I = e[24];
    }
    return I;
}
function Fd() {}
const ma = {
    status: {
        k1xSpc: "sand-78zum5",
        kXwgrk: "sand-dt5ytf",
        kGNEyG: "sand-1cy8zhl",
        kOIVth: "sand-1v2ro7d",
        kMwMTN: "sand-19aaqeu",
        $$css: true
    }
};
function Dd(listing) {
    if (listing.avatar.kind === "image") {
        return listing.avatar.url;
    }
    const e = {
        id: listing.slug,
        avatarShape: listing.avatar.shape,
        avatarColor: listing.avatar.color
    };
    return N(listing.slug, {
        shape: U(e),
        color: Q(e)
    });
}
function pa(n, botSlug) {
    for (const s of [
        ...n.featuredListings,
        ...n.listings
    ]){
        if (s.slug === botSlug) {
            return s;
        }
    }
    return null;
}
function Ya(state, botSlug) {
    if (state.status === "ready") {
        const s = pa(state.value, botSlug);
        if (s == null) {
            return {
                kind: "missing"
            };
        }
        return {
            kind: "found",
            listing: s
        };
    }
    if (state.status === "loading" || state.status === "failed") {
        const s = state.status === "failed" ? {
            kind: "failed"
        } : {
            kind: "wait"
        };
        if (state.previous == null) {
            return s;
        }
        const a = pa(state.previous, botSlug);
        if (a == null) {
            return s;
        }
        return {
            kind: "found",
            listing: a
        };
    }
    return {
        kind: "missing"
    };
}
function ZaComponent(n) {
    ZaComponent.d = 1136;
    const e = c_1.c(5);
    const { botSlug } = n;
    const { botMarketplace } = b7();
    aU(botMarketplace.preload);
    const d = Ra();
    let r;
    if (e[0] !== botSlug || e[1] !== d.state) {
        r = Ya(d.state, botSlug);
        e[0] = botSlug;
        e[1] = d.state;
        e[2] = r;
    } else {
        r = e[2];
    }
    const l = r;
    if (l.kind !== "found") {
        return null;
    }
    let c;
    if (e[3] !== l.listing.shareId) {
        c = <WaComponent shareId={l.listing.shareId}/>;
        e[3] = l.listing.shareId;
        e[4] = c;
    } else {
        c = e[4];
    }
    return c;
}
function QaComponent(n) {
    QaComponent.d = 1137;
    const e = c_1.c(17);
    const { botSlug, onAdd } = n;
    const { botMarketplace } = b7();
    aU(botMarketplace.preload);
    const r = Ra();
    const l = Ya(r.state, botSlug);
    const cRef = r_1.useRef(null);
    if (l.kind === "failed") {
        let g;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            g = p_1(a_.body1, ma.status);
            e[0] = g;
        } else {
            g = e[0];
        }
        let p;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            p = <T_1 id="TKw27L"/>;
            e[1] = p;
        } else {
            p = e[1];
        }
        let y;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            y = <T_1 id="qJb6G2"/>;
            e[2] = y;
        } else {
            y = e[2];
        }
        let h;
        if (e[3] !== r.retry) {
            h = <div {...g} role="alert">{p}<Fs onClick={r.retry} size="sm" variant="secondary">{y}</Fs></div>;
            e[3] = r.retry;
            e[4] = h;
        } else {
            h = e[4];
        }
        return h;
    }
    if (l.kind !== "found") {
        let g;
        if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
            g = p_1(a_.body1, ma.status);
            e[5] = g;
        } else {
            g = e[5];
        }
        const p = l.kind === "missing" ? <T_1 id="MRYMge"/> : <T_1 id="Q5EvQ+"/>;
        let y;
        if (e[6] !== p) {
            y = <div {...g} role="status">{p}</div>;
            e[6] = p;
            e[7] = y;
        } else {
            y = e[7];
        }
        return y;
    }
    let i;
    if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
        i = {
            className: "sand-9f619 sand-78zum5 sand-1iyjqo2 sand-s83m0k sand-dl72j9 sand-dt5ytf sand-2lwn1j sand-5yr21d sand-b3r6kr"
        };
        e[8] = i;
    } else {
        i = e[8];
    }
    const O = HaComponent;
    const avatarSrc = Dd(l.listing);
    let f;
    if (e[9] !== O || e[10] !== onAdd || e[11] !== l.listing || e[12] !== avatarSrc) {
        f = <O avatarSrc={avatarSrc} listing={l.listing} onAdd={onAdd} titleRef={cRef}/>;
        e[9] = O;
        e[10] = onAdd;
        e[11] = l.listing;
        e[12] = avatarSrc;
        e[13] = f;
    } else {
        f = e[13];
    }
    let m;
    if (e[14] !== i || e[15] !== f) {
        m = <div {...i}>{f}</div>;
        e[14] = i;
        e[15] = f;
        e[16] = m;
    } else {
        m = e[16];
    }
    return m;
}
const St = {
    title: {
        kogj98: "sand-1ghz6dp",
        kwRFfy: "sand-pdmqnj",
        kZCmMZ: "sand-1g0dm76",
        kMwMTN: "sand-1wd3ewq",
        k63SB2: "sand-1rhlpx6",
        $$css: true
    },
    groupTitle: {
        kogj98: "sand-1ghz6dp",
        kLKAdn: "sand-1y1aw1k",
        kwRFfy: "sand-f159sx",
        kGO01o: "sand-10b6aqq",
        kZCmMZ: "sand-1g0dm76",
        kMwMTN: "sand-1wd3ewq",
        k63SB2: "sand-1rhlpx6",
        $$css: true
    },
    pageTitle: {
        kLKAdn: "sand-1iorvi4",
        kGO01o: "sand-sag5q8",
        $$css: true
    }
};
function XaComponent(n) {
    XaComponent.d = 1138;
    const e = c_1.c(21);
    const { groups, title, titleTrailing, headingId, searchInNav, hidePageSearch, onSearchLifted, search } = n;
    const u = searchInNav === undefined ? false : searchInNav;
    const f = hidePageSearch === undefined ? false : hidePageSearch;
    let m;
    if (e[0] !== onSearchLifted) {
        m = (S)=>{
            if (S == null || onSearchLifted == null || typeof IntersectionObserver === "undefined") {
                return;
            }
            const j = new IntersectionObserver(([x])=>{
                onSearchLifted(x != null && !x.isIntersecting);
            });
            j.observe(S);
            return ()=>j.disconnect();
        };
        e[0] = onSearchLifted;
        e[1] = m;
    } else {
        m = e[1];
    }
    const g = m;
    let p;
    if (e[2] !== title) {
        p = ({
            0: {
                className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-euugli"
            },
            1: {
                className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-euugli sand-1gzmo1b"
            }
        })[(title != null) << 0];
        e[2] = title;
        e[3] = p;
    } else {
        p = e[3];
    }
    let y;
    if (e[4] !== headingId || e[5] !== title || e[6] !== titleTrailing) {
        y = title == null ? null : <div className="sand-1n2onr6 sand-euugli sand-1c436fg"><h2 id={headingId} {...p_1(a_.heading3, St.title)}>{title}</h2>{titleTrailing == null ? null : <div className="sand-10l6tqk sand-tijo5x sand-wa60dl sand-1cb1t30">{titleTrailing}</div>}</div>;
        e[4] = headingId;
        e[5] = title;
        e[6] = titleTrailing;
        e[7] = y;
    } else {
        y = e[7];
    }
    let h;
    if (e[8] !== f || e[9] !== search || e[10] !== u || e[11] !== g) {
        h = f ? null : <div aria-hidden={u || undefined} inert={u || undefined} className="sand-9f619 sand-78zum5 sand-dt5ytf sand-xhr3t sand-euugli sand-ieb3on"><div ref={g}>{search}</div></div>;
        e[8] = f;
        e[9] = search;
        e[10] = u;
        e[11] = g;
        e[12] = h;
    } else {
        h = e[12];
    }
    let k;
    if (e[13] === Symbol.for("react.memo_cache_sentinel")) {
        k = {
            className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-1665zp3 sand-euugli"
        };
        e[13] = k;
    } else {
        k = e[13];
    }
    let b;
    if (e[14] !== groups) {
        b = <div {...k}>{groups}</div>;
        e[14] = groups;
        e[15] = b;
    } else {
        b = e[15];
    }
    let I;
    if (e[16] !== p || e[17] !== y || e[18] !== h || e[19] !== b) {
        I = <div {...p}>{y}{h}{b}</div>;
        e[16] = p;
        e[17] = y;
        e[18] = h;
        e[19] = b;
        e[20] = I;
    } else {
        I = e[20];
    }
    return I;
}
function JaComponent(n) {
    JaComponent.d = 1140;
    const e = c_1.c(6);
    const { search, showSearch } = n;
    let d;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        d = {
            className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-167g77z sand-sdox4t sand-889kno sand-15zmtp0 sand-1a8lsjc sand-16mx7xq"
        };
        e[0] = d;
    } else {
        d = e[0];
    }
    let r;
    if (e[1] !== search || e[2] !== showSearch) {
        r = showSearch ? <div className="sand-1iyjqo2 sand-s83m0k sand-1r8uery sand-euugli sand-r1vbnl sand-1aquc0h sand-cvozgj sand-a3vuyk">{search}</div> : null;
        e[1] = search;
        e[2] = showSearch;
        e[3] = r;
    } else {
        r = e[3];
    }
    let l;
    if (e[4] !== r) {
        l = <div {...d}>{r}</div>;
        e[4] = r;
        e[5] = l;
    } else {
        l = e[5];
    }
    return l;
}
function El1Component(n) {
    El1Component.d = 1141;
    const e = c_1.c(12);
    const { search, onBack } = n;
    const { _ } = u_1();
    let r;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        r = {
            className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-167g77z sand-sdox4t sand-889kno sand-15zmtp0 sand-1a8lsjc sand-e2zdcy"
        };
        e[0] = r;
    } else {
        r = e[0];
    }
    let l;
    if (e[1] !== _) {
        l = _({
            id: "iH8pgl"
        });
        e[1] = _;
        e[2] = l;
    } else {
        l = e[2];
    }
    let c;
    if (e[3] !== onBack || e[4] !== l) {
        c = <At aria-label={l} icon="chevron-left" onClick={onBack} shape="circle" size="md" variant="ghost"/>;
        e[3] = onBack;
        e[4] = l;
        e[5] = c;
    } else {
        c = e[5];
    }
    let i;
    if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
        i = {
            className: "sand-1iyjqo2 sand-s83m0k sand-1r8uery sand-euugli"
        };
        e[6] = i;
    } else {
        i = e[6];
    }
    let o;
    if (e[7] !== search) {
        o = <div {...i}>{search}</div>;
        e[7] = search;
        e[8] = o;
    } else {
        o = e[8];
    }
    let u;
    if (e[9] !== c || e[10] !== o) {
        u = <div {...r}>{c}{o}</div>;
        e[9] = c;
        e[10] = o;
        e[11] = u;
    } else {
        u = e[11];
    }
    return u;
}
function UsComponent(n) {
    UsComponent.d = 1139;
    const e = c_1.c(10);
    const { action, asPageTitle, children, title, titleId } = n;
    const c = asPageTitle === undefined ? false : asPageTitle;
    const I = c ? "h1" : "h3";
    let o;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        o = {
            className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-167g77z sand-euugli"
        };
        e[0] = o;
    } else {
        o = e[0];
    }
    let u;
    if (e[1] !== I || e[2] !== action || e[3] !== c || e[4] !== title || e[5] !== titleId) {
        u = title == null ? null : <div className="sand-9f619 sand-78zum5 sand-1pha0wt sand-1qughib sand-167g77z sand-euugli"><I data-detail-hero-title="" id={titleId} {...p_1(c ? a_.heading2 : a_.body1, St.groupTitle, c && St.pageTitle)}>{title}</I>{action}</div>;
        e[1] = I;
        e[2] = action;
        e[3] = c;
        e[4] = title;
        e[5] = titleId;
        e[6] = u;
    } else {
        u = e[6];
    }
    let f;
    if (e[7] !== children || e[8] !== u) {
        f = <section {...o}>{u}{children}</section>;
        e[7] = children;
        e[8] = u;
        e[9] = f;
    } else {
        f = e[9];
    }
    return f;
}
function useVd(n) {
    const e = c_1.c(8);
    const { compact, paneKey, paneSettled, rootRef } = n;
    const [l, setL] = r_1.useState(compact);
    if (!compact && l) {
        setL(false);
    } else if (compact && paneSettled && !l) {
        setL(true);
    }
    const [i, setI] = r_1.useState(false);
    const [u, setU] = r_1.useState("unmeasured");
    const [m, setM] = r_1.useState(paneKey);
    if (m !== paneKey) {
        setM(paneKey);
        setI(false);
        setU("unmeasured");
    }
    let p;
    if (e[0] !== rootRef || e[1] !== compact) {
        p = ()=>{
            if (!compact) {
                return Wd;
            }
            const rootRef_current = rootRef.current;
            if (rootRef_current == null) {
                return Gd;
            }
            const S = (j)=>{
                const j_target = j.target;
                !(j_target instanceof HTMLElement) || !rootRef_current.contains(j_target) || j_target.closest("[aria-hidden='true']") == null && setI(j_target.scrollTop > 0);
            };
            rootRef_current.addEventListener("scroll", S, {
                capture: true,
                passive: true
            });
            return ()=>rootRef_current.removeEventListener("scroll", S, true);
        };
        e[0] = rootRef;
        e[1] = compact;
        e[2] = p;
    } else {
        p = e[2];
    }
    i_2(p);
    let y;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        y = (I)=>{
            const root = I?.viewportElement;
            if (root == null) {
                return;
            }
            const j = ()=>root.closest("[aria-hidden='true']") != null;
            if (j()) {
                return;
            }
            const N = root.querySelector("[data-detail-hero-title]");
            if (N == null) {
                setU("none");
                return;
            }
            setU(Ud);
            const x = new IntersectionObserver((_)=>{
                if (j()) {
                    return;
                }
                const z = _.at(-1);
                if (z != null) {
                    setU(z.isIntersecting ? "visible" : "hidden");
                }
            }, {
                root
            });
            x.observe(N);
            return ()=>x.disconnect();
        };
        e[3] = y;
    } else {
        y = e[3];
    }
    const observeHeroTitle = y;
    const lifted = compact && i;
    let b;
    if (e[4] !== l || e[5] !== u || e[6] !== lifted) {
        b = {
            compact: l,
            lifted,
            heroTitle: u,
            observeHeroTitle
        };
        e[4] = l;
        e[5] = u;
        e[6] = lifted;
        e[7] = b;
    } else {
        b = e[7];
    }
    return b;
}
function Ud(n) {
    if (n === "visible" || n === "hidden") {
        return n;
    }
    return "visible";
}
function Gd() {}
function Wd() {}
function Sl1Component(n) {
    Sl1Component.d = 1142;
    const e = c_1.c(11);
    const { children, compact, lifted } = n;
    const r = compact === undefined ? false : compact;
    const l = lifted === undefined ? false : lifted;
    let c;
    if (e[0] !== r || e[1] !== l) {
        c = ({
            0: {
                className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-1c4vz4f sand-2lah0s sand-1nhvcw1 sand-1x0gksc sand-1f83pxg sand-1n2onr6 sand-htitgo sand-10e981r"
            },
            2: {
                className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-1c4vz4f sand-2lah0s sand-1nhvcw1 sand-1n2onr6 sand-htitgo sand-10e981r sand-sdox4t sand-1wxaq2x sand-1hkp6id sand-1q0q8m5 sand-16stqrj sand-shfolx sand-1cowwpj sand-12w9bfk"
            },
            1: {
                className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-1c4vz4f sand-2lah0s sand-1nhvcw1 sand-1x0gksc sand-1f83pxg sand-1n2onr6 sand-htitgo sand-10e981r sand-19145p9"
            },
            3: {
                className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-1c4vz4f sand-2lah0s sand-1nhvcw1 sand-1n2onr6 sand-htitgo sand-10e981r sand-sdox4t sand-1wxaq2x sand-1hkp6id sand-1q0q8m5 sand-shfolx sand-1cowwpj sand-12w9bfk sand-19145p9"
            }
        })[!!r << 1 | !!l << 0];
        e[0] = r;
        e[1] = l;
        e[2] = c;
    } else {
        c = e[2];
    }
    let i;
    if (e[3] !== r) {
        i = ({
            0: {
                className: "sand-78zum5 sand-dt5ytf sand-1iyjqo2 sand-s83m0k sand-2lwn1j"
            },
            1: {
                className: "sand-78zum5 sand-dt5ytf sand-1iyjqo2 sand-s83m0k sand-2lwn1j sand-1jbbfn2 sand-1aquc0h sand-hmfl4z sand-a3vuyk sand-1u6ievf"
            }
        })[!!r << 0];
        e[3] = r;
        e[4] = i;
    } else {
        i = e[4];
    }
    let o;
    if (e[5] !== children || e[6] !== i) {
        o = <div {...i}>{children}</div>;
        e[5] = children;
        e[6] = i;
        e[7] = o;
    } else {
        o = e[7];
    }
    let u;
    if (e[8] !== c || e[9] !== o) {
        u = <div {...c}>{o}</div>;
        e[8] = c;
        e[9] = o;
        e[10] = u;
    } else {
        u = e[10];
    }
    return u;
}
const pt = {
    icon: {
        kMwMTN: "sand-169k319",
        $$css: true
    },
    clear: {
        kzQI83: "sand-1c4vz4f",
        kmuXW: "sand-2lah0s",
        $$css: true
    },
    input: {
        kB7OPa: "sand-9f619",
        kzQI83: "sand-1iyjqo2",
        kmuXW: "sand-s83m0k",
        kCS8Yb: "sand-dl72j9",
        k7Eaqz: "sand-euugli",
        kMzoRj: "sand-c342km",
        ksu8eU: "sand-ng3xce",
        k3XXqK: "sand-1t137rt",
        kWkggS: "sand-jbqb8w",
        kMwMTN: "sand-1wd3ewq",
        kMv6JI: "sand-jb2p0i",
        k8Qsv1: "sand-ltfok3",
        $$css: true
    }
};
function nl(listboxId, e) {
    return `${listboxId}-option-${e}`;
}
function Hd({ activeIndex, count, direction }) {
    if (activeIndex < 0) {
        return 0;
    }
    return ad(activeIndex, count, direction);
}
function Tl1Component(n) {
    Tl1Component.d = 1146;
    const e = c_1.c(50);
    const { query, label, placeholder, compact, dropdown, dropdownOpen, inputRef, suggestions, onQueryChange, onClear, onDismiss, onFocus, onKeyDown, onSubmit } = n;
    const h = compact === undefined ? false : compact;
    const k = dropdownOpen === undefined ? false : dropdownOpen;
    const { _: __1 } = u_1();
    const [I, setI] = r_1.useState(false);
    const j = I && query.length > 0;
    const N = k ? suggestions : undefined;
    const activeIndex = N == null || N.activeIndex >= N.count ? -1 : N.activeIndex;
    let _;
    if (e[0] !== onQueryChange) {
        _ = (E)=>{
            onQueryChange(E.currentTarget.value);
        };
        e[0] = onQueryChange;
        e[1] = _;
    } else {
        _ = e[1];
    }
    const z = _;
    let w;
    if (e[2] !== onDismiss) {
        w = (E)=>{
            if (!(E.relatedTarget instanceof Node && E.currentTarget.contains(E.relatedTarget))) {
                setI(false);
                onDismiss?.();
            }
        };
        e[2] = onDismiss;
        e[3] = w;
    } else {
        w = e[3];
    }
    const onBlurCapture = w;
    let A;
    if (e[4] !== onClear || e[5] !== onQueryChange) {
        A = ()=>{
            onQueryChange("");
            onClear?.();
        };
        e[4] = onClear;
        e[5] = onQueryChange;
        e[6] = A;
    } else {
        A = e[6];
    }
    const T = A;
    const M = Yd;
    let P;
    if (e[7] !== activeIndex || e[8] !== N || e[9] !== onKeyDown || e[10] !== onSubmit) {
        P = (E)=>{
            if (N != null && N.count > 0 && (E.key === "ArrowDown" || E.key === "ArrowUp")) {
                E.preventDefault();
                N.markKeyboardNavigation();
                N.onHighlight(Hd({
                    activeIndex,
                    count: N.count,
                    direction: E.key === "ArrowDown" ? 1 : -1
                }));
                return;
            }
            if (N != null && activeIndex >= 0 && E.key === "Enter" && !E.nativeEvent.isComposing) {
                E.preventDefault();
                N.onActivate(activeIndex);
                return;
            }
            onKeyDown?.(E);
            if (!(E.defaultPrevented || E.key !== "Enter" || E.nativeEvent.isComposing)) {
                E.preventDefault();
                onSubmit?.();
            }
        };
        e[7] = activeIndex;
        e[8] = N;
        e[9] = onKeyDown;
        e[10] = onSubmit;
        e[11] = P;
    } else {
        P = e[11];
    }
    const onKeyDown_1 = P;
    let onFocusCapture;
    let D;
    if (e[12] === Symbol.for("react.memo_cache_sentinel")) {
        onFocusCapture = ()=>setI(true);
        D = {
            className: "sand-1n2onr6 sand-euugli"
        };
        e[12] = onFocusCapture;
        e[13] = D;
    } else {
        onFocusCapture = e[12];
        D = e[13];
    }
    let F;
    if (e[14] !== h || e[15] !== j) {
        F = ({
            0: {
                className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-10w6t97 sand-euugli sand-exx8yu sand-f159sx sand-18d9i69 sand-1g0dm76 sand-qjedn3 sand-1y0btm7 sand-q03nf1 sand-5obw34 sand-149ho13 sand-1tiofj7"
            },
            2: {
                className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-euugli sand-exx8yu sand-f159sx sand-18d9i69 sand-1g0dm76 sand-qjedn3 sand-1y0btm7 sand-q03nf1 sand-5obw34 sand-149ho13 sand-1tiofj7 sand-1fgtraw"
            },
            1: {
                className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-10w6t97 sand-euugli sand-exx8yu sand-18d9i69 sand-1g0dm76 sand-qjedn3 sand-1y0btm7 sand-q03nf1 sand-5obw34 sand-149ho13 sand-1tiofj7 sand-1im30kd"
            },
            3: {
                className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-euugli sand-exx8yu sand-18d9i69 sand-1g0dm76 sand-qjedn3 sand-1y0btm7 sand-q03nf1 sand-5obw34 sand-149ho13 sand-1tiofj7 sand-1fgtraw sand-1im30kd"
            }
        })[!!h << 1 | !!j << 0];
        e[14] = h;
        e[15] = j;
        e[16] = F;
    } else {
        F = e[16];
    }
    let G;
    if (e[17] === Symbol.for("react.memo_cache_sentinel")) {
        G = <W_1 name="search" rootStyle={pt.icon} size={14}/>;
        e[17] = G;
    } else {
        G = e[17];
    }
    let W;
    if (e[18] !== activeIndex || e[19] !== N) {
        W = N != null && activeIndex >= 0 ? nl(N.listboxId, activeIndex) : undefined;
        e[18] = activeIndex;
        e[19] = N;
        e[20] = W;
    } else {
        W = e[20];
    }
    const Z = suggestions == null ? undefined : "list";
    const O = suggestions?.listboxId;
    const L = suggestions == null ? undefined : k;
    const role = suggestions == null ? undefined : "combobox";
    let V;
    if (e[21] === Symbol.for("react.memo_cache_sentinel")) {
        V = p_1(a_.body1, pt.input);
        e[21] = V;
    } else {
        V = e[21];
    }
    let R;
    if (e[22] !== z || e[23] !== onKeyDown_1 || e[24] !== inputRef || e[25] !== label || e[26] !== onFocus || e[27] !== placeholder || e[28] !== query || e[29] !== W || e[30] !== Z || e[31] !== O || e[32] !== L || e[33] !== role) {
        R = <input aria-activedescendant={W} aria-autocomplete={Z} aria-controls={O} aria-expanded={L} aria-label={label} role={role} {...V} onChange={z} onFocus={onFocus} onKeyDown={onKeyDown_1} placeholder={placeholder} ref={inputRef} spellCheck={false} type="text" value={query}/>;
        e[22] = z;
        e[23] = onKeyDown_1;
        e[24] = inputRef;
        e[25] = label;
        e[26] = onFocus;
        e[27] = placeholder;
        e[28] = query;
        e[29] = W;
        e[30] = Z;
        e[31] = O;
        e[32] = L;
        e[33] = role;
        e[34] = R;
    } else {
        R = e[34];
    }
    let Y;
    if (e[35] !== __1 || e[36] !== T || e[37] !== j) {
        Y = j ? <Rs1 onClick={T} onMouseDown={M} rootStyle={pt.clear} shape="pill" size="xs" type="button" variant="ghost">{__1({
            id: "xCJdfg"
        })}</Rs1> : null;
        e[35] = __1;
        e[36] = T;
        e[37] = j;
        e[38] = Y;
    } else {
        Y = e[38];
    }
    let le;
    if (e[39] !== R || e[40] !== Y || e[41] !== F) {
        le = <div {...F}>{G}{R}{Y}</div>;
        e[39] = R;
        e[40] = Y;
        e[41] = F;
        e[42] = le;
    } else {
        le = e[42];
    }
    let te;
    if (e[43] !== dropdown || e[44] !== k) {
        te = k && dropdown != null ? <div className="sand-10l6tqk sand-wwefxd sand-17y0mx6 sand-htitgo sand-9f619 sand-78zum5 sand-dt5ytf sand-ixl9f9 sand-10e981r sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-1z0g938 sand-b3r6kr sand-3ecgy1 sand-1aquc0h sand-1ijlv18 sand-rmiu4m">{dropdown}</div> : null;
        e[43] = dropdown;
        e[44] = k;
        e[45] = te;
    } else {
        te = e[45];
    }
    let ae;
    if (e[46] !== onBlurCapture || e[47] !== le || e[48] !== te) {
        ae = <div onBlurCapture={onBlurCapture} onFocusCapture={onFocusCapture} {...D}>{le}{te}</div>;
        e[46] = onBlurCapture;
        e[47] = le;
        e[48] = te;
        e[49] = ae;
    } else {
        ae = e[49];
    }
    return ae;
}
function Yd(n) {
    n.preventDefault();
}
const Zd = 8;
const Os = {
    row: {
        kysU6D: "sand-jyslct",
        k1xSpc: "sand-78zum5",
        kGNEyG: "sand-6s0dn4",
        kOIVth: "sand-167g77z",
        kzqmXN: "sand-h8yej3",
        kB7OPa: "sand-9f619",
        kAzted: "sand-u0aao5",
        kLKAdn: "sand-1yrsyyn",
        kwRFfy: "sand-f159sx",
        kGO01o: "sand-10b6aqq",
        kZCmMZ: "sand-mzvs34",
        kMzoRj: "sand-c342km",
        ksu8eU: "sand-ng3xce",
        kaIpWk: "sand-ur7f20",
        kWkggS: "sand-jbqb8w sand-10sgm2k",
        kMwMTN: "sand-tyxrsu",
        k9WMMc: "sand-1yc453h",
        kkrTdU: "sand-1ypdohk",
        kMv6JI: "sand-jb2p0i",
        $$css: true
    },
    rowMeta: {
        kmuXW: "sand-2lah0s",
        kMwMTN: "sand-169k319",
        $$css: true
    },
    groupLabel: {
        kLKAdn: "sand-1y1aw1k",
        kg3NbH: "sand-dqyycr",
        kGO01o: "sand-1120s5i",
        kMwMTN: "sand-169k319",
        $$css: true
    },
    groupLabelFirst: {
        kLKAdn: "sand-1nn3v0j",
        $$css: true
    },
    rowActive: {
        kWkggS: "sand-luhinc",
        $$css: true
    }
};
const al = {
    className: "sand-1iyjqo2 sand-s83m0k sand-euugli sand-tyxrsu sand-b3r6kr sand-lyipyv sand-uxw1ft"
};
function Qd(n) {
    n.preventDefault();
}
function Ll1Component(n) {
    Ll1Component.d = 1145;
    const e = c_1.c(8);
    const { entry } = n;
    const d = u_5(entry) == null ? entry.marketplace : undefined;
    let r;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        r = {
            className: "sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-1iyjqo2 sand-s83m0k sand-euugli"
        };
        e[0] = r;
    } else {
        r = e[0];
    }
    let l;
    if (e[1] !== entry.displayName) {
        l = <span {...al}>{entry.displayName}</span>;
        e[1] = entry.displayName;
        e[2] = l;
    } else {
        l = e[2];
    }
    let c;
    if (e[3] !== d) {
        c = d == null ? null : <T_2 title={d.displayName}/>;
        e[3] = d;
        e[4] = c;
    } else {
        c = e[4];
    }
    let i;
    if (e[5] !== l || e[6] !== c) {
        i = <span {...r}>{l}{c}</span>;
        e[5] = l;
        e[6] = c;
        e[7] = i;
    } else {
        i = e[7];
    }
    return i;
}
function Xd(n) {
    switch(n.kind){
        case "category":
            return n.category.key;
        case "plugin":
            return `plugin:${n.entry.id}`;
    }
}
function Jd({ catalog, categories, query, locale }) {
    const d = query.trim();
    const r = d.length === 0 ? categories : categories.filter((c)=>fB(c.label, locale).includes(fB(d, locale)));
    return [
        ...(d.length === 0 ? [] : cN(catalog, d)).slice(0, Zd).map((entry)=>({
                kind: "plugin",
                entry
            })),
        ...r.map((c)=>({
                kind: "category",
                category: c
            }))
    ];
}
function Il1Component(n) {
    Il1Component.d = 1144;
    const e = c_1.c(28);
    const { rows, query, listboxId, activeIndex, activeOptionRef, onActivate, onHighlight } = n;
    const { _: __1 } = u_1();
    const { ToolIcon, catalogEntryIcon } = fd();
    let m;
    if (e[0] !== query) {
        m = query.trim();
        e[0] = query;
        e[1] = m;
    } else {
        m = e[1];
    }
    const g = m;
    const p = activeIndex >= rows.length ? -1 : activeIndex;
    let plugin;
    if (e[2] !== __1) {
        plugin = __1({
            id: "ohUJJM"
        });
        e[2] = __1;
        e[3] = plugin;
    } else {
        plugin = e[3];
    }
    let h;
    if (e[4] !== __1) {
        h = __1({
            id: "NUrY9o"
        });
        e[4] = __1;
        e[5] = h;
    } else {
        h = e[5];
    }
    let k;
    if (e[6] !== plugin || e[7] !== h) {
        k = {
            plugin,
            category: h
        };
        e[6] = plugin;
        e[7] = h;
        e[8] = k;
    } else {
        k = e[8];
    }
    const b = k;
    let I;
    if (e[9] === Symbol.for("react.memo_cache_sentinel")) {
        I = {
            className: "sand-78zum5 sand-dt5ytf sand-2lwn1j"
        };
        e[9] = I;
    } else {
        I = e[9];
    }
    let S;
    if (e[10] !== __1) {
        S = __1({
            id: "S4qZX0"
        });
        e[10] = __1;
        e[11] = S;
    } else {
        S = e[11];
    }
    let j;
    if (e[12] === Symbol.for("react.memo_cache_sentinel")) {
        j = {
            className: "sand-78zum5 sand-dt5ytf sand-195vfkc sand-e8ttls sand-1jcbksy sand-1odjw0f sand-6ikm8r sand-1597r2g sand-xvpt3r"
        };
        e[12] = j;
    } else {
        j = e[12];
    }
    let N;
    if (e[13] !== ToolIcon || e[14] !== activeOptionRef || e[15] !== catalogEntryIcon || e[16] !== b || e[17] !== listboxId || e[18] !== onActivate || e[19] !== onHighlight || e[20] !== rows || e[21] !== p || e[22] !== g) {
        N = rows.map((_, z)=>{
            const w = z === p;
            const q = (g.length > 0 || _.kind === "category") && (z === 0 || rows[z - 1]?.kind !== _.kind);
            const A = b[_.kind];
            return <r_1.Fragment key={Xd(_)}>{q ? <div {...p_1(a_.label, Os.groupLabel, z === 0 && Os.groupLabelFirst)}>{A}</div> : null}<button aria-selected={w} data-search-index={z} id={nl(listboxId, z)} onClick={()=>onActivate(_)} onMouseDown={Qd} onMouseEnter={()=>onHighlight(z)} ref={w ? activeOptionRef : undefined} role="option" tabIndex={-1} type="button" {...p_1(a_.body2, Os.row, w && Os.rowActive)}>{_.kind === "category" ? <span {...al}>{_.category.label}</span> : <><span className="sand-78zum5 sand-6s0dn4 sand-l56j7k sand-vy4d1p sand-xk0z11 sand-2lah0s"><ToolIcon {...catalogEntryIcon(_.entry)} name={_.entry.displayName} size={24}/></span><Ll1Component entry={_.entry}/></>}<W_1 aria-hidden name="chevron-right" rootStyle={Os.rowMeta} size={12}/></button></r_1.Fragment>;
        });
        e[13] = ToolIcon;
        e[14] = activeOptionRef;
        e[15] = catalogEntryIcon;
        e[16] = b;
        e[17] = listboxId;
        e[18] = onActivate;
        e[19] = onHighlight;
        e[20] = rows;
        e[21] = p;
        e[22] = g;
        e[23] = N;
    } else {
        N = e[23];
    }
    let x;
    if (e[24] !== listboxId || e[25] !== S || e[26] !== N) {
        x = <div {...I}><div aria-label={S} id={listboxId} role="listbox" {...j}>{N}</div></div>;
        e[24] = listboxId;
        e[25] = S;
        e[26] = N;
        e[27] = x;
    } else {
        x = e[27];
    }
    return x;
}
const dl = {
    text: "",
    highlight: -1,
    isOpen: false
};
function eo(text) {
    return {
        text,
        highlight: -1,
        isOpen: text.trim().length > 0
    };
}
function so(n, highlight) {
    if (n.highlight === highlight) {
        return n;
    }
    return {
        ...n,
        highlight
    };
}
function Cn(n, text) {
    return {
        ...n,
        text,
        isOpen: false
    };
}
function no(n) {
    if (n.isOpen) {
        return n;
    }
    return {
        ...n,
        isOpen: true
    };
}
function to(n) {
    if (n.isOpen) {
        return {
            ...n,
            isOpen: false
        };
    }
    return n;
}
function wt(n) {
    if (n.isOpen || n.highlight !== -1) {
        return {
            ...n,
            highlight: -1,
            isOpen: false
        };
    }
    return n;
}
const ao = [];
function NComponent(n) {
    NComponent.d = 1143;
    const e = c_1.c(37);
    const { search, label, placeholder, canOpen, compact, inputRef, suggest, onClear, onFocus, onKeyDown, onSubmit } = n;
    const { i18n } = u_1();
    const i18n_locale = i18n.locale;
    const y = suggest?.corpus ?? null;
    const h = r_1.useSyncExternalStore(search.subscribe, search.get, search.get);
    const dropdownOpen = canOpen && suggest != null && h.isOpen;
    let b;
    if (e[0] !== y || e[1] !== h.text || e[2] !== dropdownOpen || e[3] !== i18n_locale) {
        b = dropdownOpen && y != null ? Jd({
            ...y,
            query: h.text,
            locale: i18n_locale
        }) : ao;
        e[0] = y;
        e[1] = h.text;
        e[2] = dropdownOpen;
        e[3] = i18n_locale;
        e[4] = b;
    } else {
        b = e[4];
    }
    const rows = b;
    let S;
    if (e[5] !== search) {
        S = (q)=>{
            search.update((A)=>so(A, q));
        };
        e[5] = search;
        e[6] = S;
    } else {
        S = e[6];
    }
    const onHighlight = S;
    let dropdown;
    if (e[7] !== h.highlight || e[8] !== h.text || e[9] !== onHighlight || e[10] !== rows || e[11] !== suggest) {
        dropdown = suggest == null ? undefined : <Il1Component activeIndex={h.highlight} activeOptionRef={suggest.activeOptionRef} listboxId={suggest.listboxId} onActivate={suggest.onActivate} onHighlight={onHighlight} query={h.text} rows={rows}/>;
        e[7] = h.highlight;
        e[8] = h.text;
        e[9] = onHighlight;
        e[10] = rows;
        e[11] = suggest;
        e[12] = dropdown;
    } else {
        dropdown = e[12];
    }
    let x;
    if (e[13] !== search) {
        x = ()=>search.update(wt);
        e[13] = search;
        e[14] = x;
    } else {
        x = e[14];
    }
    let onQueryChange;
    if (e[15] !== search) {
        onQueryChange = (q)=>search.set(eo(q));
        e[15] = search;
        e[16] = onQueryChange;
    } else {
        onQueryChange = e[16];
    }
    let suggestions;
    if (e[17] !== h.highlight || e[18] !== onHighlight || e[19] !== rows || e[20] !== suggest) {
        suggestions = suggest == null ? undefined : {
            listboxId: suggest.listboxId,
            count: rows.length,
            activeIndex: h.highlight,
            onHighlight,
            onActivate: (q)=>{
                const A = rows[q];
                if (A != null) {
                    suggest.onActivate(A);
                }
            },
            markKeyboardNavigation: suggest.markKeyboardNavigation
        };
        e[17] = h.highlight;
        e[18] = onHighlight;
        e[19] = rows;
        e[20] = suggest;
        e[21] = suggestions;
    } else {
        suggestions = e[21];
    }
    let w;
    if (e[22] !== compact || e[23] !== h.text || e[24] !== dropdownOpen || e[25] !== inputRef || e[26] !== label || e[27] !== onClear || e[28] !== onFocus || e[29] !== onKeyDown || e[30] !== onSubmit || e[31] !== placeholder || e[32] !== dropdown || e[33] !== x || e[34] !== onQueryChange || e[35] !== suggestions) {
        w = <Tl1Component compact={compact} dropdown={dropdown} dropdownOpen={dropdownOpen} inputRef={inputRef} label={label} onClear={onClear} onDismiss={x} onFocus={onFocus} onKeyDown={onKeyDown} onQueryChange={onQueryChange} onSubmit={onSubmit} placeholder={placeholder} query={h.text} suggestions={suggestions}/>;
        e[22] = compact;
        e[23] = h.text;
        e[24] = dropdownOpen;
        e[25] = inputRef;
        e[26] = label;
        e[27] = onClear;
        e[28] = onFocus;
        e[29] = onKeyDown;
        e[30] = onSubmit;
        e[31] = placeholder;
        e[32] = dropdown;
        e[33] = x;
        e[34] = onQueryChange;
        e[35] = suggestions;
        e[36] = w;
    } else {
        w = e[36];
    }
    return w;
}
const lo = 4;
function BtComponent(n) {
    BtComponent.d = 1147;
    const e = c_1.c(25);
    const { installedItems, resolveServerIcon, onOpen } = n;
    const { _ } = u_1();
    const { ToolIcon, catalogEntryIcon } = fd();
    let i;
    if (e[0] !== catalogEntryIcon || e[1] !== installedItems || e[2] !== resolveServerIcon) {
        let I;
        if (e[4] !== catalogEntryIcon || e[5] !== resolveServerIcon) {
            I = (x)=>{
                if (x.kind === "plugin") {
                    return {
                        key: `plugin-${x.entry.id}`,
                        name: x.entry.displayName,
                        icon: catalogEntryIcon(x.entry)
                    };
                }
                return {
                    key: x.server.id,
                    name: x.server.name,
                    icon: resolveServerIcon(x.server.name, x.server.url) ?? {}
                };
            };
            e[4] = catalogEntryIcon;
            e[5] = resolveServerIcon;
            e[6] = I;
        } else {
            I = e[6];
        }
        const S = installedItems.map(I);
        const j = [];
        const N = [];
        for (const x of S){
            if (x.icon.iconUrl != null || x.icon.iconId != null) {
                j.push(x);
            } else {
                N.push(x);
            }
        }
        i = [
            ...j,
            ...N
        ].slice(0, lo);
        e[0] = catalogEntryIcon;
        e[1] = installedItems;
        e[2] = resolveServerIcon;
        e[3] = i;
    } else {
        i = e[3];
    }
    const o = i;
    let u;
    if (e[7] !== _ || e[8] !== installedItems.length) {
        u = _({
            id: "OtZro4",
            values: {
                0: installedItems.length
            }
        });
        e[7] = _;
        e[8] = installedItems.length;
        e[9] = u;
    } else {
        u = e[9];
    }
    const f = u;
    let m;
    if (e[10] !== _) {
        m = _({
            id: "KtaVdF"
        });
        e[10] = _;
        e[11] = m;
    } else {
        m = e[11];
    }
    let g;
    if (e[12] === Symbol.for("react.memo_cache_sentinel")) {
        g = r_2("sand-plugins__installed-preview", "sand-9f619 sand-78zum5 sand-6s0dn4 sand-qcrz7y sand-167g77z sand-euugli sand-1iorvi4 sand-f159sx sand-jkvuk6 sand-135b78x sand-c342km sand-ng3xce sand-1qmwy7c sand-jbqb8w sand-aalx5g sand-1o0liin sand-jb2p0i sand-1wm8ruf sand-1d3mw78 sand-12oo3zp sand-1ypdohk sand-1t137rt sand-9v5kkp sand-1k57tk5 sand-784prv sand-1uczgqu sand-1iolv91");
        e[12] = g;
    } else {
        g = e[12];
    }
    let p;
    if (e[13] !== ToolIcon || e[14] !== o) {
        p = o.length > 0 ? <span aria-hidden className={r_2("sand-9f619 sand-78zum5 sand-6s0dn4 sand-1c4vz4f sand-2lah0s sand-dl72j9")}>{o.map((I, S)=><span key={I.key} className={r_2({
                0: {
                    className: "sand-9f619 sand-1n2onr6 sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-w4jnvo sand-1qx5ct2 sand-mkeg23 sand-1y0btm7 sand-1lt80kd sand-t9pb60 sand-10e981r sand-b3r6kr"
                },
                1: {
                    className: "sand-9f619 sand-1n2onr6 sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-w4jnvo sand-1qx5ct2 sand-mkeg23 sand-1y0btm7 sand-1lt80kd sand-t9pb60 sand-10e981r sand-b3r6kr sand-w01apr"
                }
            }[(S > 0) << 0].className)}><ToolIcon iconId={I.icon.iconId} iconUrl={I.icon.iconUrl} name={I.name} size={18}/></span>)}</span> : null;
        e[13] = ToolIcon;
        e[14] = o;
        e[15] = p;
    } else {
        p = e[15];
    }
    let y;
    if (e[16] === Symbol.for("react.memo_cache_sentinel")) {
        y = r_2("sand-9f619 sand-b3r6kr sand-lyipyv sand-uxw1ft");
        e[16] = y;
    } else {
        y = e[16];
    }
    let h;
    if (e[17] !== f) {
        h = <span className={y}>{f}</span>;
        e[17] = f;
        e[18] = h;
    } else {
        h = e[18];
    }
    let k;
    if (e[19] === Symbol.for("react.memo_cache_sentinel")) {
        k = <W_1 className="sand-9f619 sand-169k319" name="chevron-right" size={12}/>;
        e[19] = k;
    } else {
        k = e[19];
    }
    let b;
    if (e[20] !== onOpen || e[21] !== m || e[22] !== p || e[23] !== h) {
        b = <button aria-label={m} className={g} onClick={onOpen} type="button">{p}{h}{k}</button>;
        e[20] = onOpen;
        e[21] = m;
        e[22] = p;
        e[23] = h;
        e[24] = b;
    } else {
        b = e[24];
    }
    return b;
}
function Ol1Component(n) {
    Ol1Component.d = 1165;
    const e = c_1.c(24);
    const { options, selectedKey, onSelect } = n;
    const { _ } = u_1();
    if (options.length === 0) {
        return null;
    }
    let l;
    if (e[0] !== _) {
        l = _({
            id: "jj4zKl"
        });
        e[0] = _;
        e[1] = l;
    } else {
        l = e[1];
    }
    let c;
    if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        c = r_2("sand-plugins__chips", "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1a02dak sand-167g77z sand-euugli sand-l8qfz3 sand-1odjw0f");
        e[2] = c;
    } else {
        c = e[2];
    }
    const i = selectedKey == null;
    let o;
    if (e[3] !== selectedKey) {
        o = r_2("sand-plugins__chip", {
            0: {
                className: "sand-9f619 sand-3nfvp2 sand-6s0dn4 sand-2lah0s sand-d7y6wv sand-f159sx sand-mzvs34 sand-qjedn3 sand-1y0btm7 sand-q03nf1 sand-149ho13 sand-jbqb8w sand-aalx5g sand-tyxrsu sand-jb2p0i sand-11wthnw sand-d4r4e8 sand-12oo3zp sand-uxw1ft sand-1ypdohk sand-1t137rt sand-9v5kkp sand-1k57tk5 sand-784prv sand-1uczgqu sand-1iolv91"
            },
            1: {
                className: "sand-9f619 sand-3nfvp2 sand-6s0dn4 sand-2lah0s sand-d7y6wv sand-f159sx sand-mzvs34 sand-qjedn3 sand-1y0btm7 sand-149ho13 sand-tyxrsu sand-jb2p0i sand-11wthnw sand-d4r4e8 sand-12oo3zp sand-uxw1ft sand-1ypdohk sand-1t137rt sand-9v5kkp sand-1k57tk5 sand-784prv sand-1uczgqu sand-1iolv91 sand-9r1u3d sand-1tiofj7 sand-4hlgfw"
            }
        }[(selectedKey == null) << 0].className);
        e[3] = selectedKey;
        e[4] = o;
    } else {
        o = e[4];
    }
    let u;
    if (e[5] !== onSelect) {
        u = ()=>onSelect(null);
        e[5] = onSelect;
        e[6] = u;
    } else {
        u = e[6];
    }
    let f;
    if (e[7] === Symbol.for("react.memo_cache_sentinel")) {
        f = <T_1 id="N40H+G"/>;
        e[7] = f;
    } else {
        f = e[7];
    }
    let m;
    if (e[8] !== i || e[9] !== o || e[10] !== u) {
        m = <button aria-pressed={i} className={o} onClick={u} type="button">{f}</button>;
        e[8] = i;
        e[9] = o;
        e[10] = u;
        e[11] = m;
    } else {
        m = e[11];
    }
    let g;
    if (e[12] !== onSelect || e[13] !== options || e[14] !== selectedKey) {
        let y;
        if (e[16] !== onSelect || e[17] !== selectedKey) {
            y = (h)=><button key={h.key} aria-pressed={selectedKey === h.key} className={r_2("sand-plugins__chip", {
                    0: {
                        className: "sand-9f619 sand-3nfvp2 sand-6s0dn4 sand-2lah0s sand-d7y6wv sand-f159sx sand-mzvs34 sand-qjedn3 sand-1y0btm7 sand-q03nf1 sand-149ho13 sand-jbqb8w sand-aalx5g sand-tyxrsu sand-jb2p0i sand-11wthnw sand-d4r4e8 sand-12oo3zp sand-uxw1ft sand-1ypdohk sand-1t137rt sand-9v5kkp sand-1k57tk5 sand-784prv sand-1uczgqu sand-1iolv91"
                    },
                    1: {
                        className: "sand-9f619 sand-3nfvp2 sand-6s0dn4 sand-2lah0s sand-d7y6wv sand-f159sx sand-mzvs34 sand-qjedn3 sand-1y0btm7 sand-149ho13 sand-tyxrsu sand-jb2p0i sand-11wthnw sand-d4r4e8 sand-12oo3zp sand-uxw1ft sand-1ypdohk sand-1t137rt sand-9v5kkp sand-1k57tk5 sand-784prv sand-1uczgqu sand-1iolv91 sand-9r1u3d sand-1tiofj7 sand-4hlgfw"
                    }
                }[(selectedKey === h.key) << 0].className)} onClick={()=>onSelect(selectedKey === h.key ? null : h.key)} type="button">{h.label}</button>;
            e[16] = onSelect;
            e[17] = selectedKey;
            e[18] = y;
        } else {
            y = e[18];
        }
        g = options.map(y);
        e[12] = onSelect;
        e[13] = options;
        e[14] = selectedKey;
        e[15] = g;
    } else {
        g = e[15];
    }
    let p;
    if (e[19] !== l || e[20] !== c || e[21] !== m || e[22] !== g) {
        p = <div aria-label={l} className={c} role="group">{m}{g}</div>;
        e[19] = l;
        e[20] = c;
        e[21] = m;
        e[22] = g;
        e[23] = p;
    } else {
        p = e[23];
    }
    return p;
}
const ha = {
    backChevron: {
        kMwMTN: "sand-169k319",
        $$css: true
    },
    searchIcon: {
        kMwMTN: "sand-169k319",
        $$css: true
    }
};
function Rl1Component(n) {
    Rl1Component.d = 1148;
    const e = c_1.c(40);
    const { headingId, title, isYoursOpen, installedItems, query, searchInputRef, sectionOptions, selectedSectionKey, resolveServerIcon, onOpenYours, onBackToMarketplace, onQueryChange, onSearchKeyDown, onSelectSection } = n;
    const { _: __1 } = u_1();
    let k;
    if (e[0] !== headingId || e[1] !== title) {
        k = <S_1 headingId={headingId} title={title}/>;
        e[0] = headingId;
        e[1] = title;
        e[2] = k;
    } else {
        k = e[2];
    }
    let b;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        b = {
            className: "sand-9f619 sand-78zum5 sand-1c4vz4f sand-2lah0s sand-dl72j9 sand-dt5ytf sand-1qjc9v5 sand-1v2ro7d sand-yinxu5 sand-sfy40s sand-10b6aqq sand-1mfogq2"
        };
        e[3] = b;
    } else {
        b = e[3];
    }
    let I;
    if (e[4] !== __1 || e[5] !== installedItems || e[6] !== isYoursOpen || e[7] !== onBackToMarketplace || e[8] !== onOpenYours || e[9] !== resolveServerIcon) {
        I = isYoursOpen ? <button onClick={onBackToMarketplace} type="button" className="sand-9f619 sand-78zum5 sand-6s0dn4 sand-qcrz7y sand-17d4w8g sand-10w6t97 sand-euugli sand-1iorvi4 sand-f159sx sand-jkvuk6 sand-135b78x sand-c342km sand-ng3xce sand-1qmwy7c sand-jbqb8w sand-aalx5g sand-1o0liin sand-jb2p0i sand-1wm8ruf sand-1d3mw78 sand-12oo3zp sand-1ypdohk sand-1t137rt sand-9v5kkp sand-1k57tk5 sand-784prv sand-1uczgqu sand-1iolv91"><W_1 name="chevron-left" rootStyle={ha.backChevron} size={12}/>{__1({
            id: "R7wvKw"
        })}</button> : <BtComponent installedItems={installedItems} onOpen={onOpenYours} resolveServerIcon={resolveServerIcon}/>;
        e[4] = __1;
        e[5] = installedItems;
        e[6] = isYoursOpen;
        e[7] = onBackToMarketplace;
        e[8] = onOpenYours;
        e[9] = resolveServerIcon;
        e[10] = I;
    } else {
        I = e[10];
    }
    let S;
    let j;
    let N;
    if (e[11] === Symbol.for("react.memo_cache_sentinel")) {
        S = {
            className: "sand-9f619 sand-78zum5 sand-1c4vz4f sand-2lah0s sand-dl72j9 sand-6s0dn4 sand-167g77z sand-euugli"
        };
        j = {
            className: "sand-9f619 sand-78zum5 sand-1iyjqo2 sand-s83m0k sand-dl72j9 sand-6s0dn4 sand-1jnr06f sand-10w6t97 sand-euugli sand-exx8yu sand-11lfxj5 sand-18d9i69 sand-mzvs34 sand-qjedn3 sand-1y0btm7 sand-q03nf1 sand-5obw34 sand-149ho13 sand-1tiofj7"
        };
        N = <W_1 name="search" rootStyle={ha.searchIcon} size={14}/>;
        e[11] = S;
        e[12] = j;
        e[13] = N;
    } else {
        S = e[11];
        j = e[12];
        N = e[13];
    }
    let x;
    if (e[14] !== __1) {
        x = __1({
            id: "S4qZX0"
        });
        e[14] = __1;
        e[15] = x;
    } else {
        x = e[15];
    }
    let _;
    if (e[16] !== onQueryChange) {
        _ = (P)=>onQueryChange(P.currentTarget.value);
        e[16] = onQueryChange;
        e[17] = _;
    } else {
        _ = e[17];
    }
    let z;
    if (e[18] !== __1) {
        z = __1({
            id: "S4qZX0"
        });
        e[18] = __1;
        e[19] = z;
    } else {
        z = e[19];
    }
    let w;
    if (e[20] === Symbol.for("react.memo_cache_sentinel")) {
        w = {
            className: "sand-9f619 sand-1iyjqo2 sand-s83m0k sand-dl72j9 sand-euugli sand-c342km sand-ng3xce sand-1t137rt sand-jbqb8w sand-1wd3ewq sand-jb2p0i sand-fc7y3v sand-12oo3zp sand-ltfok3"
        };
        e[20] = w;
    } else {
        w = e[20];
    }
    let q;
    if (e[21] !== onSearchKeyDown || e[22] !== query || e[23] !== searchInputRef || e[24] !== x || e[25] !== _ || e[26] !== z) {
        q = <div {...S}><div {...j}>{N}<input aria-label={x} onChange={_} onKeyDown={onSearchKeyDown} placeholder={z} ref={searchInputRef} spellCheck={false} type="text" value={query} {...w}/></div></div>;
        e[21] = onSearchKeyDown;
        e[22] = query;
        e[23] = searchInputRef;
        e[24] = x;
        e[25] = _;
        e[26] = z;
        e[27] = q;
    } else {
        q = e[27];
    }
    let A;
    if (e[28] !== isYoursOpen || e[29] !== onSelectSection || e[30] !== sectionOptions || e[31] !== selectedSectionKey) {
        A = isYoursOpen ? null : <Ol1Component onSelect={onSelectSection} options={sectionOptions} selectedKey={selectedSectionKey}/>;
        e[28] = isYoursOpen;
        e[29] = onSelectSection;
        e[30] = sectionOptions;
        e[31] = selectedSectionKey;
        e[32] = A;
    } else {
        A = e[32];
    }
    let T;
    if (e[33] !== q || e[34] !== A || e[35] !== I) {
        T = <div {...b}>{I}{q}{A}</div>;
        e[33] = q;
        e[34] = A;
        e[35] = I;
        e[36] = T;
    } else {
        T = e[36];
    }
    let M;
    if (e[37] !== k || e[38] !== T) {
        M = <>{k}{T}</>;
        e[37] = k;
        e[38] = T;
        e[39] = M;
    } else {
        M = e[39];
    }
    return M;
}
const Gs = ()=>null;
function cl(catalog, e) {
    const s = new Set;
    for (const a of catalog){
        if (a.native != null && e(a) === true) {
            s.add(a.id);
        }
    }
    return s;
}
function ga(n) {
    if (n.isTeamServer || n.isRequired === true || n.managedByTeamPluginPolicy === true) {
        return "team-required";
    }
    return "user";
}
function ya(n) {
    switch(n.installMode){
        case "team-required":
            return "team-required";
        case "team-default":
            return "team-default";
        case "user":
        case "unknown":
            return "user";
    }
}
const io = new Set;
function ul(n, catalog, s = [], a = io) {
    const d = new Map;
    for (const i of s){
        d.set(i.pluginId, i);
    }
    const r = jW(n);
    const l = [];
    const c = new Map;
    for (const i of n){
        if (i.cursorScmProvider != null && !cu(i)) {
            continue;
        }
        const o = f_1(i, catalog);
        const u = o == null ? undefined : d.get(o.id);
        if (o != null && i.servedBy === "grok" && jX(o, n, r, d).grokTwin?.id === i.id) {
            continue;
        }
        if (o == null || i.servedBy === "grok" || i.pluginId !== o.id && !i.isTeamServer && i.cursorScmProvider == null || u != null && !jY(u)) {
            l.push({
                kind: "connector",
                server: i,
                installMode: ga(i)
            });
            continue;
        }
        const f = u;
        const m = c.get(o.id);
        if (m == null) {
            const y = {
                kind: "plugin",
                entry: o,
                installMode: f != null ? ya(f) : ga(i),
                pluginId: o.id,
                connectors: [
                    i
                ],
                configuredVariables: null,
                configuredVariableKeys: f?.configuredVariableKeys ?? []
            };
            c.set(o.id, y);
            l.push(y);
            continue;
        }
        const connectors = i.isTeamServer ? [
            ...m.connectors,
            i
        ] : [
            i,
            ...m.connectors
        ];
        const p = {
            ...m,
            connectors,
            installMode: f != null || i.isTeamServer ? m.installMode : "user"
        };
        c.set(o.id, p);
        l[l.indexOf(m)] = p;
    }
    for (const i of d.values()){
        if (!jY(i) || c.has(i.pluginId)) {
            continue;
        }
        const o = catalog.find((u)=>u.id === i.pluginId);
        if (o != null) {
            l.push({
                kind: "plugin",
                entry: o,
                installMode: ya(i),
                pluginId: i.pluginId,
                connectors: [],
                configuredVariables: null,
                configuredVariableKeys: i.configuredVariableKeys ?? []
            });
        }
    }
    for (const i of catalog){
        if (!(i.native == null || !a.has(i.id))) {
            l.push({
                kind: "plugin",
                entry: i,
                installMode: "user",
                pluginId: i.id,
                connectors: [],
                configuredVariables: null,
                configuredVariableKeys: []
            });
        }
    }
    return l;
}
function oo(n, trimmedQuery, locale) {
    if (n.kind === "connector" || n.connectors.length > 0) {
        return true;
    }
    const a = fB(trimmedQuery, locale);
    return fB(n.entry.displayName, locale).includes(a) || fB(n.entry.name, locale).includes(a);
}
function ro(installedItems, e) {
    for (const s of installedItems){
        if (s.kind === "plugin" && s.entry.id === e) {
            return s;
        }
    }
}
function co(n) {
    switch(n){
        case "team-required":
            return {
                id: "q1LJYo"
            };
        case "team-default":
            return {
                id: "MoPMW6"
            };
        case "user":
            return null;
    }
}
function vr(n) {
    switch(n){
        case "team-required":
            return [];
        case "team-default":
            return [
                {
                    id: "remove",
                    label: {
                        id: "t/YqKh"
                    }
                }
            ];
        case "user":
            return [
                {
                    id: "uninstall",
                    label: {
                        id: "fo0VXg"
                    }
                }
            ];
    }
}
const ht = {
    title: {
        kogj98: "sand-1ghz6dp",
        kMwMTN: "sand-1wd3ewq",
        k63SB2: "sand-1rhlpx6",
        $$css: true
    },
    bannerTitle: {
        kMwMTN: "sand-vak8d5",
        $$css: true
    },
    bannerDetail: {
        kMwMTN: "sand-19aaqeu",
        $$css: true
    }
};
function useUo(n) {
    const e = c_1.c(12);
    const { roster, launcher } = b7();
    const { sendPrompt } = eP();
    const selectAgent = jG();
    const agents = dc();
    const isRosterComplete = jZ();
    const [i, setI] = r_1.useState(false);
    const { onOpened, onFailure } = n;
    let m;
    if (e[0] !== agents || e[1] !== isRosterComplete || e[2] !== launcher || e[3] !== onFailure || e[4] !== onOpened || e[5] !== roster || e[6] !== selectAgent || e[7] !== sendPrompt) {
        m = ()=>{
            setI(true);
            b.launch({
                agents,
                isRosterComplete,
                launchNewAgent: (y)=>l(y, {
                        beginCreation: launcher.beginCreation,
                        createAgent: roster.createAgent,
                        selectAgent,
                        sendPrompt
                    }),
                selectAgent
            }).then((y)=>{
                setI(false);
                if (y.agentId != null) {
                    onOpened();
                }
            }, (y)=>{
                setI(false);
                onFailure(J(y));
            });
        };
        e[0] = agents;
        e[1] = isRosterComplete;
        e[2] = launcher;
        e[3] = onFailure;
        e[4] = onOpened;
        e[5] = roster;
        e[6] = selectAgent;
        e[7] = sendPrompt;
        e[8] = m;
    } else {
        m = e[8];
    }
    const fix = m;
    let p;
    if (e[9] !== fix || e[10] !== i) {
        p = {
            isLaunching: i,
            fix
        };
        e[9] = fix;
        e[10] = i;
        e[11] = p;
    } else {
        p = e[11];
    }
    return p;
}
function fo(n, e) {
    const provenance = e.source === "plugin" ? n({
        id: "u3wRF+"
    }) : n({
        id: "bA96vw"
    });
    const hint = e.description.length > 0 ? e.description : n({
        id: "OZJeTZ"
    });
    return n({
        id: "DDJfVt",
        values: {
            provenance,
            hint
        }
    });
}
function mo(n, e) {
    if (e.entry.native != null) {
        return e.entry.description;
    }
    return c_3(n, {
        ...d(e.entry),
        commands: null
    });
}
function Fl1Component(n) {
    Fl1Component.d = 1166;
    const e = c_1.c(81);
    const { agentId, servers, catalog, effectivePlugins, skills, query, isBusy, isInstalledExpanded, authBlocked, showTitle, resolveServerIcon, resolveServerSubtitle, nativeInstalled, onOpenSkill, onOpenServer, onOpenPlugin, onAuthenticate, onExpandInstalled, onFixHandedOff, onFixFailed } = n;
    const N = showTitle === undefined ? false : showTitle;
    const x = nativeInstalled === undefined ? Gs : nativeInstalled;
    const { _ } = u_1();
    const { i18n, _: __1 } = u_1();
    let q;
    if (e[0] !== onFixFailed || e[1] !== onFixHandedOff) {
        q = {
            onOpened: onFixHandedOff,
            onFailure: onFixFailed
        };
        e[0] = onFixFailed;
        e[1] = onFixHandedOff;
        e[2] = q;
    } else {
        q = e[2];
    }
    const A = useUo(q);
    const T = r_1.useId();
    const M = r_1.useId();
    const { ToolIcon, catalogEntryIcon } = fd();
    let C;
    let D;
    let F;
    let G;
    let W;
    let Z;
    let O;
    let L;
    if (e[3] !== ToolIcon || e[4] !== _ || e[5] !== __1 || e[6] !== agentId || e[7] !== authBlocked || e[8] !== catalog || e[9] !== catalogEntryIcon || e[10] !== effectivePlugins || e[11] !== i18n || e[12] !== T || e[13] !== isBusy || e[14] !== isInstalledExpanded || e[15] !== x || e[16] !== onAuthenticate || e[17] !== onExpandInstalled || e[18] !== onOpenPlugin || e[19] !== onOpenServer || e[20] !== onOpenSkill || e[21] !== A || e[22] !== M || e[23] !== query || e[24] !== resolveServerIcon || e[25] !== resolveServerSubtitle || e[26] !== servers || e[27] !== N || e[28] !== skills) {
        const trimmedQuery = query.trim();
        const Y = trimmedQuery.length > 0;
        const le = ul(cO(servers, query), catalog, effectivePlugins, cl(catalog, x));
        const te = Y ? le.filter((ie)=>oo(ie, trimmedQuery, i18n.locale)) : le;
        const ae = !Y && te.length > I;
        const E = ae ? te.slice(0, I) : te;
        const ve = ae ? te.slice(I) : [];
        const ue = isInstalledExpanded;
        const Ce = s(skills);
        const qe = fB(trimmedQuery, i18n.locale);
        const re = Y ? Ce.filter((ie)=>fB(ie.name, i18n.locale).includes(qe)) : Ce;
        let Pe;
        if (e[37] !== ToolIcon || e[38] !== _ || e[39] !== catalogEntryIcon || e[40] !== i18n || e[41] !== isBusy || e[42] !== onAuthenticate || e[43] !== onOpenPlugin || e[44] !== onOpenServer || e[45] !== resolveServerIcon || e[46] !== resolveServerSubtitle) {
            Pe = (ie)=>{
                const fe = ie.kind === "plugin" ? ie.connectors[0] : ie.server;
                const be = fe == null ? null : fe.status === "needsAuth" ? <TtComponent isBusy={isBusy} onAuthenticate={onAuthenticate} server={fe}/> : <C_2 server={fe}/>;
                const Me = co(ie.installMode);
                const badge = Me != null ? <T_2 title={i18n._(Me)}/> : null;
                if (ie.kind === "plugin") {
                    const Ke = catalogEntryIcon(ie.entry);
                    return <Tn key={`plugin-${ie.entry.id}`} badge={badge} icon=<ToolIcon iconId={Ke.iconId} iconUrl={Ke.iconUrl} name={ie.entry.displayName} size={40}/> name={ie.entry.displayName} onOpen={()=>onOpenPlugin(ie.entry.id)} subtitle={mo(_, ie)} trailing={be}/>;
                }
                const { server } = ie;
                const Te = resolveServerIcon(server.name, server.url);
                return <Tn key={server.id} badge={badge} icon=<ToolIcon iconId={Te?.iconId} iconUrl={Te?.iconUrl} name={server.name} size={40}/> name={server.name} onOpen={()=>onOpenServer(server.id)} subtitle={resolveServerSubtitle(server)} trailing={be}/>;
            };
            e[37] = ToolIcon;
            e[38] = _;
            e[39] = catalogEntryIcon;
            e[40] = i18n;
            e[41] = isBusy;
            e[42] = onAuthenticate;
            e[43] = onOpenPlugin;
            e[44] = onOpenServer;
            e[45] = resolveServerIcon;
            e[46] = resolveServerSubtitle;
            e[47] = Pe;
        } else {
            Pe = e[47];
        }
        const de = Pe;
        if (e[48] === Symbol.for("react.memo_cache_sentinel")) {
            Z = r_2("sand-plugins__yours", "sand-9f619 sand-78zum5 sand-dt5ytf sand-1665zp3");
            e[48] = Z;
        } else {
            Z = e[48];
        }
        if (e[49] !== __1 || e[50] !== N) {
            O = N ? <header className="sand-9f619 sand-78zum5 sand-dt5ytf sand-euugli sand-f159sx sand-mzvs34"><h1 data-detail-hero-title="" {...p_1(a_.heading3, ht.title)}>{__1({
                id: "ZoHizH"
            })}</h1></header> : null;
            e[49] = __1;
            e[50] = N;
            e[51] = O;
        } else {
            O = e[51];
        }
        if (e[52] !== __1 || e[53] !== authBlocked || e[54] !== A) {
            L = authBlocked.length > 0 ? <section aria-label={__1({
                id: "q0LYU5"
            })} className="sand-9f619 sand-78zum5 sand-6s0dn4 sand-ou54vl sand-2lah0s sand-889kno sand-2vl965 sand-1a8lsjc sand-1g0dm76 sand-1q4ynmn sand-1xv9fit sand-1o5m0de" role="status"><span className="sand-78zum5 sand-dt5ytf sand-195vfkc sand-1iyjqo2 sand-s83m0k sand-euugli"><span className={p_1(a_.label, ht.bannerTitle).className}><T_1 id="NRJNSR"/></span><span className={p_1(a_.body2, ht.bannerDetail).className}>{a_1(authBlocked)}</span></span><Rs1 disabled={A.isLaunching} onClick={()=>A.fix()} size="sm" type="button" variant="secondary">{A.isLaunching ? __1({
                id: "598XO1"
            }) : __1({
                id: "JCCOLE"
            })}</Rs1></section> : null;
            e[52] = __1;
            e[53] = authBlocked;
            e[54] = A;
            e[55] = L;
        } else {
            L = e[55];
        }
        let ge;
        if (e[56] !== __1) {
            ge = __1({
                id: "eQkgKV"
            });
            e[56] = __1;
            e[57] = ge;
        } else {
            ge = e[57];
        }
        const ke = te.length === 0 ? <Ze as="p" className="sand-9f619 sand-f159sx sand-1g0dm76" color="tertiary" size="xs">{__1(Y ? {
            id: "+Pji+h",
            values: {
                trimmedQuery
            }
        } : {
            id: "ZyWE2h"
        })}</Ze> : <><P_1 labelledBy={T}>{E.map(de)}</P_1>{ve.length === 0 ? null : <div aria-hidden={ue ? undefined : true} inert={ue ? undefined : true} {...{
            0: {
                className: "sand-rvj5dj sand-ihq33y sand-g01cxk sand-1bvilyr sand-uupxpy sand-47corl sand-icbapw sand-1ympp8d sand-idyk7z sand-1cxnnaq sand-1e6nqfh"
            },
            1: {
                className: "sand-rvj5dj sand-icbapw sand-1ympp8d sand-idyk7z sand-1cxnnaq sand-1e6nqfh sand-1tu4anv sand-1hc1fzr sand-nn1q72 sand-67bb7w"
            }
        }[!!ue << 0]}><div className="sand-2lwn1j sand-b3r6kr"><div className="sand-1nn3v0j"><P_1 labelledBy={T}>{ve.map(de)}</P_1></div></div></div>}{ve.length === 0 ? null : <div aria-hidden={ue || undefined} inert={ue || undefined} {...{
            0: {
                className: "sand-rvj5dj sand-ihq33y sand-g01cxk sand-47corl sand-1erjwpq sand-1ympp8d sand-idyk7z sand-1cxnnaq sand-1e6nqfh"
            },
            1: {
                className: "sand-rvj5dj sand-1erjwpq sand-1ympp8d sand-idyk7z sand-1cxnnaq sand-1e6nqfh sand-1tu4anv sand-1hc1fzr sand-67bb7w"
            }
        }[!ue << 0]}><div className="sand-2lwn1j sand-b3r6kr"><S_3 hiddenLabel={__1({
            id: "Wy8KR2",
            values: {
                0: te.length
            }
        })} onShowAll={onExpandInstalled}/></div></div>}</>;
        if (e[58] !== T || e[59] !== ge || e[60] !== ke) {
            D = <Jt1 title={ge} titleId={T}>{ke}</Jt1>;
            e[58] = T;
            e[59] = ge;
            e[60] = ke;
            e[61] = D;
        } else {
            D = e[61];
        }
        C = Jt1;
        if (e[62] !== __1) {
            F = __1({
                id: "glMsdy"
            });
            e[62] = __1;
            e[63] = F;
        } else {
            F = e[63];
        }
        G = M;
        e: {
            if (agentId == null) {
                let fe;
                if (e[64] === Symbol.for("react.memo_cache_sentinel")) {
                    fe = {
                        className: "sand-9f619 sand-f159sx sand-1g0dm76"
                    };
                    e[64] = fe;
                } else {
                    fe = e[64];
                }
                let be;
                if (e[65] === Symbol.for("react.memo_cache_sentinel")) {
                    be = <Ze as="p" className={fe.className} color="tertiary" size="xs"><T_1 id="RmL2Fy"/></Ze>;
                    e[65] = be;
                } else {
                    be = e[65];
                }
                W = be;
                break e;
            }
            if (re.length === 0) {
                let fe;
                if (e[66] === Symbol.for("react.memo_cache_sentinel")) {
                    fe = {
                        className: "sand-9f619 sand-f159sx sand-1g0dm76"
                    };
                    e[66] = fe;
                } else {
                    fe = e[66];
                }
                W = <Ze as="p" className={fe.className} color="tertiary" size="xs">{__1(Y ? {
                    id: "hvwZWn",
                    values: {
                        trimmedQuery
                    }
                } : {
                    id: "W0GRSo"
                })}</Ze>;
                break e;
            }
            let ie;
            if (e[67] !== _ || e[68] !== onOpenSkill) {
                ie = (fe)=><Tn key={fe.id} icon=<span className={r_2("sand-9f619 sand-78zum5 sand-6s0dn4 sand-l56j7k sand-100vrsf sand-1vqgdyp sand-2lah0s sand-1kogg8i sand-arj5zm")}><W_1 color="tertiary" name="file-list" size="sm"/></span> name={fe.name} onOpen={()=>onOpenSkill(fe.id)} subtitle={fo(_, fe)}/>;
                e[67] = _;
                e[68] = onOpenSkill;
                e[69] = ie;
            } else {
                ie = e[69];
            }
            W = <P_1 isFullWidth labelledBy={M}>{re.map(ie)}</P_1>;
        }
        e[3] = ToolIcon;
        e[4] = _;
        e[5] = __1;
        e[6] = agentId;
        e[7] = authBlocked;
        e[8] = catalog;
        e[9] = catalogEntryIcon;
        e[10] = effectivePlugins;
        e[11] = i18n;
        e[12] = T;
        e[13] = isBusy;
        e[14] = isInstalledExpanded;
        e[15] = x;
        e[16] = onAuthenticate;
        e[17] = onExpandInstalled;
        e[18] = onOpenPlugin;
        e[19] = onOpenServer;
        e[20] = onOpenSkill;
        e[21] = A;
        e[22] = M;
        e[23] = query;
        e[24] = resolveServerIcon;
        e[25] = resolveServerSubtitle;
        e[26] = servers;
        e[27] = N;
        e[28] = skills;
        e[29] = C;
        e[30] = D;
        e[31] = F;
        e[32] = G;
        e[33] = W;
        e[34] = Z;
        e[35] = O;
        e[36] = L;
    } else {
        C = e[29];
        D = e[30];
        F = e[31];
        G = e[32];
        W = e[33];
        Z = e[34];
        O = e[35];
        L = e[36];
    }
    let J;
    if (e[70] !== C || e[71] !== F || e[72] !== G || e[73] !== W) {
        J = <C title={F} titleId={G}>{W}</C>;
        e[70] = C;
        e[71] = F;
        e[72] = G;
        e[73] = W;
        e[74] = J;
    } else {
        J = e[74];
    }
    let V;
    if (e[75] !== D || e[76] !== J || e[77] !== Z || e[78] !== O || e[79] !== L) {
        V = <div className={Z}>{O}{L}{D}{J}</div>;
        e[75] = D;
        e[76] = J;
        e[77] = Z;
        e[78] = O;
        e[79] = L;
        e[80] = V;
    } else {
        V = e[80];
    }
    return V;
}
const Rn = "sand_marketplace_for_you_auth_aware";
function Ml1Component(n) {
    Ml1Component.d = 1150;
    const e = c_1.c(63);
    const { items, pluginLimit, isBusy, servers, installedByKey, effectivePluginsById, pendingAddKey, teamInstallCounts, nativeInstalled, onAdd, onAuthenticate, onOpenPlugin } = n;
    const p = nativeInstalled === undefined ? Gs : nativeInstalled;
    const { _: __1 } = u_1();
    const h = r_1.useId();
    const k = b9(Rn);
    const b = bT();
    let I;
    if (e[0] !== effectivePluginsById || e[1] !== installedByKey || e[2] !== items || e[3] !== p || e[4] !== servers) {
        let K;
        if (e[6] !== effectivePluginsById || e[7] !== installedByKey || e[8] !== p || e[9] !== servers) {
            K = (C)=>{
                if (p(C) != null) {
                    return false;
                }
                const D = jX(C, servers, installedByKey, effectivePluginsById);
                return D.isInstalled && D.server?.status === "needsAuth";
            };
            e[6] = effectivePluginsById;
            e[7] = installedByKey;
            e[8] = p;
            e[9] = servers;
            e[10] = K;
        } else {
            K = e[10];
        }
        I = items.some(K);
        e[0] = effectivePluginsById;
        e[1] = installedByKey;
        e[2] = items;
        e[3] = p;
        e[4] = servers;
        e[5] = I;
    } else {
        I = e[5];
    }
    const S = I;
    let j;
    if (e[11] !== b || e[12] !== S) {
        j = ()=>{
            if (S) {
                b(Rn);
            }
            return ho;
        };
        e[11] = b;
        e[12] = S;
        e[13] = j;
    } else {
        j = e[13];
    }
    i_2(j);
    const N = po;
    let x;
    let _;
    let z;
    let w;
    let q;
    let A;
    let T;
    if (e[14] !== __1 || e[15] !== effectivePluginsById || e[16] !== installedByKey || e[17] !== k || e[18] !== isBusy || e[19] !== items || e[20] !== p || e[21] !== onAdd || e[22] !== onAuthenticate || e[23] !== onOpenPlugin || e[24] !== pendingAddKey || e[25] !== pluginLimit || e[26] !== servers || e[27] !== teamInstallCounts || e[28] !== h) {
        T = Symbol.for("react.early_return_sentinel");
        e: {
            let isInstalled;
            if (e[36] !== effectivePluginsById || e[37] !== installedByKey || e[38] !== k || e[39] !== p || e[40] !== servers) {
                isInstalled = (F)=>{
                    const G = p(F);
                    if (G != null) {
                        return G;
                    }
                    const W = jX(F, servers, installedByKey, effectivePluginsById);
                    if (k) {
                        return k0(W);
                    }
                    return W.isInstalled;
                };
                e[36] = effectivePluginsById;
                e[37] = installedByKey;
                e[38] = k;
                e[39] = p;
                e[40] = servers;
                e[41] = isInstalled;
            } else {
                isInstalled = e[41];
            }
            const C = g({
                catalog: items,
                isInstalled,
                teamInstallCounts
            }, pluginLimit);
            if (C.length === 0) {
                T = null;
                break e;
            }
            _ = UsComponent;
            if (e[42] !== __1) {
                q = __1({
                    id: "GcibpE"
                });
                e[42] = __1;
                e[43] = q;
            } else {
                q = e[43];
            }
            A = h;
            x = P_1;
            z = h;
            let D;
            if (e[44] !== effectivePluginsById || e[45] !== installedByKey || e[46] !== isBusy || e[47] !== p || e[48] !== onAdd || e[49] !== onAuthenticate || e[50] !== onOpenPlugin || e[51] !== pendingAddKey || e[52] !== servers) {
                D = ({ entry, signal })=><WsComponent key={entry.id} effectivePluginsById={effectivePluginsById} entry={entry} installedByKey={installedByKey} isBusy={isBusy} nativeInstalled={p} onAdd={onAdd} onAuthenticate={onAuthenticate} onOpenPlugin={onOpenPlugin} pendingAddKey={pendingAddKey} servers={servers} subtitle={N(signal)}/>;
                e[44] = effectivePluginsById;
                e[45] = installedByKey;
                e[46] = isBusy;
                e[47] = p;
                e[48] = onAdd;
                e[49] = onAuthenticate;
                e[50] = onOpenPlugin;
                e[51] = pendingAddKey;
                e[52] = servers;
                e[53] = D;
            } else {
                D = e[53];
            }
            w = C.map(D);
        }
        e[14] = __1;
        e[15] = effectivePluginsById;
        e[16] = installedByKey;
        e[17] = k;
        e[18] = isBusy;
        e[19] = items;
        e[20] = p;
        e[21] = onAdd;
        e[22] = onAuthenticate;
        e[23] = onOpenPlugin;
        e[24] = pendingAddKey;
        e[25] = pluginLimit;
        e[26] = servers;
        e[27] = teamInstallCounts;
        e[28] = h;
        e[29] = x;
        e[30] = _;
        e[31] = z;
        e[32] = w;
        e[33] = q;
        e[34] = A;
        e[35] = T;
    } else {
        x = e[29];
        _ = e[30];
        z = e[31];
        w = e[32];
        q = e[33];
        A = e[34];
        T = e[35];
    }
    if (T !== Symbol.for("react.early_return_sentinel")) {
        return T;
    }
    let M;
    if (e[54] !== x || e[55] !== z || e[56] !== w) {
        M = j_1.jsx(x, {
            labelledBy: z,
            children: w
        });
        e[54] = x;
        e[55] = z;
        e[56] = w;
        e[57] = M;
    } else {
        M = e[57];
    }
    let P;
    if (e[58] !== _ || e[59] !== q || e[60] !== A || e[61] !== M) {
        P = <_ title={q} titleId={A}>{M}</_>;
        e[58] = _;
        e[59] = q;
        e[60] = A;
        e[61] = M;
        e[62] = P;
    } else {
        P = e[62];
    }
    return P;
}
function po(n) {
    switch(n.kind){
        case "team":
            return i_1._({
                id: "DKYhCi",
                values: {
                    0: n.teammateCount
                }
            });
        case "affinity":
            return;
    }
}
function ho() {}
function pl(n, e) {
    if (e.isLoading) {
        return n(j_);
    }
    const trimmed = e.query.trim();
    if (trimmed.length > 0) {
        return n({
            id: "mLyVIn",
            values: {
                trimmed
            }
        });
    }
    return n(j$);
}
function Hl1Component(n) {
    Hl1Component.d = 1152;
    const e = c_1.c(5);
    const { isLoading } = n;
    const { _ } = u_1();
    let d;
    if (e[0] !== _ || e[1] !== isLoading) {
        d = pl(_, {
            isLoading,
            query: ""
        });
        e[0] = _;
        e[1] = isLoading;
        e[2] = d;
    } else {
        d = e[2];
    }
    let r;
    if (e[3] !== d) {
        r = <Ze as="p" color="tertiary" role="status" size="sm">{d}</Ze>;
        e[3] = d;
        e[4] = r;
    } else {
        r = e[4];
    }
    return r;
}
function go(layout) {
    if (layout === "plugins") {
        return L_1;
    }
    return M;
}
function Gl1Component(n) {
    Gl1Component.d = 1149;
    const e = c_1.c(33);
    const { title, items, asPageTitle, isCollapsible, isFullWidth, layout, previewLimit, onViewAll, renderRow } = n;
    const asPageTitle_1 = asPageTitle === undefined ? false : asPageTitle;
    const { _: __1 } = u_1();
    const g = r_1.useId();
    let p;
    let action;
    let h;
    let k;
    let b;
    if (e[0] !== __1 || e[1] !== isCollapsible || e[2] !== isFullWidth || e[3] !== items || e[4] !== onViewAll || e[5] !== previewLimit || e[6] !== renderRow || e[7] !== g) {
        const { visible, hiddenCount } = i_3(items, !isCollapsible, previewLimit);
        let _;
        if (e[13] !== __1 || e[14] !== hiddenCount || e[15] !== onViewAll) {
            _ = hiddenCount > 0 && onViewAll != null ? <G label={__1({
                id: "N6Pxr9"
            })} onAction={onViewAll}/> : undefined;
            e[13] = __1;
            e[14] = hiddenCount;
            e[15] = onViewAll;
            e[16] = _;
        } else {
            _ = e[16];
        }
        action = _;
        p = P_1;
        h = isFullWidth;
        k = g;
        b = visible.map(renderRow);
        e[0] = __1;
        e[1] = isCollapsible;
        e[2] = isFullWidth;
        e[3] = items;
        e[4] = onViewAll;
        e[5] = previewLimit;
        e[6] = renderRow;
        e[7] = g;
        e[8] = p;
        e[9] = action;
        e[10] = h;
        e[11] = k;
        e[12] = b;
    } else {
        p = e[8];
        action = e[9];
        h = e[10];
        k = e[11];
        b = e[12];
    }
    let I;
    if (e[17] !== p || e[18] !== h || e[19] !== k || e[20] !== b) {
        I = j_1.jsx(p, {
            isFullWidth: h,
            labelledBy: k,
            children: b
        });
        e[17] = p;
        e[18] = h;
        e[19] = k;
        e[20] = b;
        e[21] = I;
    } else {
        I = e[21];
    }
    const S = I;
    if (layout === "marketplace-frame") {
        let N;
        if (e[22] !== action || e[23] !== asPageTitle_1 || e[24] !== S || e[25] !== title || e[26] !== g) {
            N = <UsComponent action={action} asPageTitle={asPageTitle_1} title={title} titleId={g}>{S}</UsComponent>;
            e[22] = action;
            e[23] = asPageTitle_1;
            e[24] = S;
            e[25] = title;
            e[26] = g;
            e[27] = N;
        } else {
            N = e[27];
        }
        return N;
    }
    let j;
    if (e[28] !== action || e[29] !== S || e[30] !== title || e[31] !== g) {
        j = <Jt1 action={action} title={title} titleId={g}>{S}</Jt1>;
        e[28] = action;
        e[29] = S;
        e[30] = title;
        e[31] = g;
        e[32] = j;
    } else {
        j = e[32];
    }
    return j;
}
function WsComponent(n) {
    WsComponent.d = 1151;
    const e = c_1.c(70);
    const { entry, isBusy, servers, installedByKey, effectivePluginsById, pendingAddKey, subtitle, nativeInstalled, onAdd, onAuthenticate, onOpenPlugin } = n;
    const g = nativeInstalled === undefined ? Gs : nativeInstalled;
    const { _: __1 } = u_1();
    const { ToolIcon, catalogEntryIcon } = fd();
    let k;
    if (e[0] !== catalogEntryIcon || e[1] !== entry) {
        k = catalogEntryIcon(entry);
        e[0] = catalogEntryIcon;
        e[1] = entry;
        e[2] = k;
    } else {
        k = e[2];
    }
    const b = k;
    let I;
    if (e[3] !== entry || e[4] !== g) {
        I = g(entry);
        e[3] = entry;
        e[4] = g;
        e[5] = I;
    } else {
        I = e[5];
    }
    const S = I;
    let j;
    if (e[6] !== effectivePluginsById || e[7] !== entry || e[8] !== installedByKey || e[9] !== servers) {
        j = jX(entry, servers, installedByKey, effectivePluginsById);
        e[6] = effectivePluginsById;
        e[7] = entry;
        e[8] = installedByKey;
        e[9] = servers;
        e[10] = j;
    } else {
        j = e[10];
    }
    const { isInstalled, server } = j;
    const _ = S == null && isInstalled && server?.status === "needsAuth";
    const z = b9(Rn);
    const w = bT();
    let q;
    if (e[11] !== _ || e[12] !== w) {
        q = ()=>{
            if (_) {
                w(Rn);
            }
            return yo;
        };
        e[11] = _;
        e[12] = w;
        e[13] = q;
    } else {
        q = e[13];
    }
    i_2(q);
    let A;
    if (e[14] !== ToolIcon || e[15] !== __1 || e[16] !== _ || e[17] !== entry || e[18] !== b.iconId || e[19] !== b.iconUrl || e[20] !== z || e[21] !== isBusy || e[22] !== isInstalled || e[23] !== S || e[24] !== onAdd || e[25] !== onAuthenticate || e[26] !== onOpenPlugin || e[27] !== pendingAddKey || e[28] !== server || e[29] !== subtitle) {
        const T = u_5(entry);
        const M = T == null ? entry.marketplace : undefined;
        let P;
        e: {
            if (S != null) {
                if (S) {
                    let R;
                    if (e[31] === Symbol.for("react.memo_cache_sentinel")) {
                        R = <Id/>;
                        e[31] = R;
                    } else {
                        R = e[31];
                    }
                    P = R;
                    break e;
                }
                let O;
                if (e[32] !== __1 || e[33] !== entry.displayName) {
                    O = __1({
                        id: "5ZzgbQ",
                        values: {
                            0: entry.displayName
                        }
                    });
                    e[32] = __1;
                    e[33] = entry.displayName;
                    e[34] = O;
                } else {
                    O = e[34];
                }
                let L;
                if (e[35] !== entry.id || e[36] !== onOpenPlugin) {
                    L = ()=>onOpenPlugin(entry.id);
                    e[35] = entry.id;
                    e[36] = onOpenPlugin;
                    e[37] = L;
                } else {
                    L = e[37];
                }
                let J;
                if (e[38] === Symbol.for("react.memo_cache_sentinel")) {
                    J = <T_1 id="iSLIjg"/>;
                    e[38] = J;
                } else {
                    J = e[38];
                }
                let V;
                if (e[39] !== O || e[40] !== L) {
                    V = <Rs1 aria-label={O} onClick={L} size="sm" type="button" variant="secondary">{J}</Rs1>;
                    e[39] = O;
                    e[40] = L;
                    e[41] = V;
                } else {
                    V = e[41];
                }
                P = V;
                break e;
            }
            if (_ && z && server != null) {
                let idleLabel;
                if (e[42] === Symbol.for("react.memo_cache_sentinel")) {
                    idleLabel = <T_1 id="iSLIjg"/>;
                    e[42] = idleLabel;
                } else {
                    idleLabel = e[42];
                }
                let L;
                if (e[43] !== isBusy || e[44] !== onAuthenticate || e[45] !== server) {
                    L = <TtComponent idleLabel={idleLabel} isBusy={isBusy} onAuthenticate={onAuthenticate} server={server}/>;
                    e[43] = isBusy;
                    e[44] = onAuthenticate;
                    e[45] = server;
                    e[46] = L;
                } else {
                    L = e[46];
                }
                P = L;
                break e;
            }
            if (isInstalled) {
                let O;
                if (e[47] === Symbol.for("react.memo_cache_sentinel")) {
                    O = <A_1/>;
                    e[47] = O;
                } else {
                    O = e[47];
                }
                P = O;
                break e;
            }
            if (pendingAddKey === m(entry.id)) {
                let O;
                if (e[48] !== __1 || e[49] !== entry.displayName) {
                    O = __1({
                        id: "xcwvFe",
                        values: {
                            0: entry.displayName
                        }
                    });
                    e[48] = __1;
                    e[49] = entry.displayName;
                    e[50] = O;
                } else {
                    O = e[50];
                }
                let L;
                if (e[51] !== O) {
                    L = <_d label={O}/>;
                    e[51] = O;
                    e[52] = L;
                } else {
                    L = e[52];
                }
                P = L;
                break e;
            }
            let G;
            if (e[53] !== entry || e[54] !== onAdd) {
                G = ()=>onAdd(entry);
                e[53] = entry;
                e[54] = onAdd;
                e[55] = G;
            } else {
                G = e[55];
            }
            let W;
            if (e[56] === Symbol.for("react.memo_cache_sentinel")) {
                W = <T_1 id="m16xKo"/>;
                e[56] = W;
            } else {
                W = e[56];
            }
            let Z;
            if (e[57] !== isBusy || e[58] !== G) {
                Z = <Rs1 disabled={isBusy} onClick={G} size="sm" type="button" variant="secondary">{W}</Rs1>;
                e[57] = isBusy;
                e[58] = G;
                e[59] = Z;
            } else {
                Z = e[59];
            }
            P = Z;
        }
        const K = P;
        let badge;
        if (e[60] !== M) {
            badge = M != null ? <T_2 title={M.displayName}/> : undefined;
            e[60] = M;
            e[61] = badge;
        } else {
            badge = e[61];
        }
        let D;
        if (e[62] !== ToolIcon || e[63] !== entry.displayName || e[64] !== b.iconId || e[65] !== b.iconUrl) {
            D = <ToolIcon iconId={b.iconId} iconUrl={b.iconUrl} name={entry.displayName} size={40}/>;
            e[62] = ToolIcon;
            e[63] = entry.displayName;
            e[64] = b.iconId;
            e[65] = b.iconUrl;
            e[66] = D;
        } else {
            D = e[66];
        }
        let onOpen;
        if (e[67] !== entry.id || e[68] !== onOpenPlugin) {
            onOpen = ()=>onOpenPlugin(entry.id);
            e[67] = entry.id;
            e[68] = onOpenPlugin;
            e[69] = onOpen;
        } else {
            onOpen = e[69];
        }
        A = <Tn badge={badge} icon={D} name={entry.displayName} onOpen={onOpen} subtitle={subtitle ?? entry.description} trailing={K} {...T != null ? {
            byline: __1({
                id: "t490IT",
                values: {
                    0: T.displayName
                }
            })
        } : {}}/>;
        e[14] = ToolIcon;
        e[15] = __1;
        e[16] = _;
        e[17] = entry;
        e[18] = b.iconId;
        e[19] = b.iconUrl;
        e[20] = z;
        e[21] = isBusy;
        e[22] = isInstalled;
        e[23] = S;
        e[24] = onAdd;
        e[25] = onAuthenticate;
        e[26] = onOpenPlugin;
        e[27] = pendingAddKey;
        e[28] = server;
        e[29] = subtitle;
        e[30] = A;
    } else {
        A = e[30];
    }
    return A;
}
function yo() {}
function Yl1Component(n) {
    Yl1Component.d = 1153;
    const e = c_1.c(39);
    const { items, query, isLoading, isBusy, selectedSectionKey, servers, installedByKey, effectivePluginsById, pendingAddKey, layout, namedSection, nativeInstalled, onAdd, onAuthenticate, onOpenPlugin, onSelectSection } = n;
    const layout_1 = layout === undefined ? "plugins" : layout;
    const I = nativeInstalled === undefined ? Gs : nativeInstalled;
    const { _: __1 } = u_1();
    const { _: __2 } = u_1();
    let N;
    if (e[0] !== query) {
        N = query.trim();
        e[0] = query;
        e[1] = N;
    } else {
        N = e[1];
    }
    const x = N.length > 0;
    if (items.length === 0) {
        let M;
        if (e[2] !== __1 || e[3] !== isLoading || e[4] !== query) {
            M = pl(__1, {
                isLoading,
                query
            });
            e[2] = __1;
            e[3] = isLoading;
            e[4] = query;
            e[5] = M;
        } else {
            M = e[5];
        }
        let P;
        if (e[6] !== M) {
            P = <Ze as="p" color="tertiary" size="sm">{M}</Ze>;
            e[6] = M;
            e[7] = P;
        } else {
            P = e[7];
        }
        return P;
    }
    let _;
    if (e[8] !== effectivePluginsById || e[9] !== installedByKey || e[10] !== isBusy || e[11] !== I || e[12] !== onAdd || e[13] !== onAuthenticate || e[14] !== onOpenPlugin || e[15] !== pendingAddKey || e[16] !== servers) {
        _ = (M)=><WsComponent key={M.id} effectivePluginsById={effectivePluginsById} entry={M} installedByKey={installedByKey} isBusy={isBusy} nativeInstalled={I} onAdd={onAdd} onAuthenticate={onAuthenticate} onOpenPlugin={onOpenPlugin} pendingAddKey={pendingAddKey} servers={servers}/>;
        e[8] = effectivePluginsById;
        e[9] = installedByKey;
        e[10] = isBusy;
        e[11] = I;
        e[12] = onAdd;
        e[13] = onAuthenticate;
        e[14] = onOpenPlugin;
        e[15] = pendingAddKey;
        e[16] = servers;
        e[17] = _;
    } else {
        _ = e[17];
    }
    const renderRow = _;
    const w = selectedSectionKey != null;
    let q;
    let A;
    if (e[18] !== __1 || e[19] !== __2 || e[20] !== x || e[21] !== w || e[22] !== items || e[23] !== layout_1 || e[24] !== namedSection || e[25] !== onSelectSection || e[26] !== renderRow) {
        const M = __2(layout_1 === "marketplace-frame" ? {
            id: "ohUJJM"
        } : {
            id: "kx0s+n"
        });
        let P;
        if (namedSection != null && !x) {
            P = [
                {
                    sectionKey: namedSection.key,
                    category: namedSection.title,
                    items
                }
            ];
        } else if (x) {
            P = [
                {
                    sectionKey: "results",
                    category: M,
                    items
                }
            ];
        } else {
            P = h(__1, items);
        }
        if (e[29] === Symbol.for("react.memo_cache_sentinel")) {
            q = r_2("sand-plugins__marketplace", "sand-9f619 sand-78zum5 sand-dt5ytf sand-1665zp3");
            e[29] = q;
        } else {
            q = e[29];
        }
        let K;
        if (e[30] !== x || e[31] !== w || e[32] !== layout_1 || e[33] !== onSelectSection || e[34] !== renderRow) {
            K = (C)=><Gl1Component key={C.sectionKey} asPageTitle={w && !x} isCollapsible={!x && !w} isFullWidth={w && !x} items={C.items} layout={layout_1} previewLimit={go(layout_1)} renderRow={renderRow} title={C.category} {...x || w ? {} : {
                    onViewAll: ()=>onSelectSection(C.sectionKey)
                }}/>;
            e[30] = x;
            e[31] = w;
            e[32] = layout_1;
            e[33] = onSelectSection;
            e[34] = renderRow;
            e[35] = K;
        } else {
            K = e[35];
        }
        A = P.map(K);
        e[18] = __1;
        e[19] = __2;
        e[20] = x;
        e[21] = w;
        e[22] = items;
        e[23] = layout_1;
        e[24] = namedSection;
        e[25] = onSelectSection;
        e[26] = renderRow;
        e[27] = q;
        e[28] = A;
    } else {
        q = e[27];
        A = e[28];
    }
    let T;
    if (e[36] !== q || e[37] !== A) {
        T = <div className={q}>{A}</div>;
        e[36] = q;
        e[37] = A;
        e[38] = T;
    } else {
        T = e[38];
    }
    return T;
}
function ko(n, filterKey) {
    if (filterKey == null) {
        return true;
    }
    if (n.marketplace != null) {
        return false;
    }
    return j_3(n).some((s)=>k_2(s) === filterKey);
}
function Kl1Component(n) {
    Kl1Component.d = 1169;
    const e = c_1.c(52);
    const { catalog, effectivePluginsById, filterKey, installedByKey, isBusy, nativeInstalled, pendingAddKey, query, servers, onAdd, onAuthenticate, onOpenPlugin } = n;
    const p = nativeInstalled === undefined ? Gs : nativeInstalled;
    const { i18n, _: __1 } = u_1();
    const k = r_1.useId();
    let b;
    let I;
    let S;
    let j;
    let N;
    let x;
    let _;
    let z;
    if (e[0] !== __1 || e[1] !== catalog || e[2] !== effectivePluginsById || e[3] !== filterKey || e[4] !== i18n.locale || e[5] !== installedByKey || e[6] !== isBusy || e[7] !== p || e[8] !== onAdd || e[9] !== onAuthenticate || e[10] !== onOpenPlugin || e[11] !== pendingAddKey || e[12] !== query || e[13] !== servers || e[14] !== k) {
        z = Symbol.for("react.early_return_sentinel");
        e: {
            let A;
            if (e[23] !== filterKey) {
                A = (P)=>ko(P, filterKey);
                e[23] = filterKey;
                e[24] = A;
            } else {
                A = e[24];
            }
            const T = cN(catalog, query, i18n.locale).filter(A);
            if (T.length === 0) {
                let P;
                if (e[25] !== __1 || e[26] !== query) {
                    P = query.trim().length > 0 ? __1({
                        id: "32lqFC",
                        values: {
                            0: query.trim()
                        }
                    }) : __1({
                        id: "Ev2r9A"
                    });
                    e[25] = __1;
                    e[26] = query;
                    e[27] = P;
                } else {
                    P = e[27];
                }
                let K;
                if (e[28] !== P) {
                    K = <Ze as="p" color="tertiary" size="sm">{P}</Ze>;
                    e[28] = P;
                    e[29] = K;
                } else {
                    K = e[29];
                }
                z = K;
                break e;
            }
            I = UsComponent;
            if (e[30] !== __1) {
                x = __1({
                    id: "kx0s+n"
                });
                e[30] = __1;
                e[31] = x;
            } else {
                x = e[31];
            }
            _ = k;
            b = P_1;
            S = false;
            j = k;
            let M;
            if (e[32] !== effectivePluginsById || e[33] !== installedByKey || e[34] !== isBusy || e[35] !== p || e[36] !== onAdd || e[37] !== onAuthenticate || e[38] !== onOpenPlugin || e[39] !== pendingAddKey || e[40] !== servers) {
                M = (P)=><WsComponent key={P.id} effectivePluginsById={effectivePluginsById} entry={P} installedByKey={installedByKey} isBusy={isBusy} nativeInstalled={p} onAdd={onAdd} onAuthenticate={onAuthenticate} onOpenPlugin={onOpenPlugin} pendingAddKey={pendingAddKey} servers={servers}/>;
                e[32] = effectivePluginsById;
                e[33] = installedByKey;
                e[34] = isBusy;
                e[35] = p;
                e[36] = onAdd;
                e[37] = onAuthenticate;
                e[38] = onOpenPlugin;
                e[39] = pendingAddKey;
                e[40] = servers;
                e[41] = M;
            } else {
                M = e[41];
            }
            N = T.map(M);
        }
        e[0] = __1;
        e[1] = catalog;
        e[2] = effectivePluginsById;
        e[3] = filterKey;
        e[4] = i18n.locale;
        e[5] = installedByKey;
        e[6] = isBusy;
        e[7] = p;
        e[8] = onAdd;
        e[9] = onAuthenticate;
        e[10] = onOpenPlugin;
        e[11] = pendingAddKey;
        e[12] = query;
        e[13] = servers;
        e[14] = k;
        e[15] = b;
        e[16] = I;
        e[17] = S;
        e[18] = j;
        e[19] = N;
        e[20] = x;
        e[21] = _;
        e[22] = z;
    } else {
        b = e[15];
        I = e[16];
        S = e[17];
        j = e[18];
        N = e[19];
        x = e[20];
        _ = e[21];
        z = e[22];
    }
    if (z !== Symbol.for("react.early_return_sentinel")) {
        return z;
    }
    let w;
    if (e[42] !== b || e[43] !== S || e[44] !== j || e[45] !== N) {
        w = j_1.jsx(b, {
            isFullWidth: S,
            labelledBy: j,
            children: N
        });
        e[42] = b;
        e[43] = S;
        e[44] = j;
        e[45] = N;
        e[46] = w;
    } else {
        w = e[46];
    }
    let q;
    if (e[47] !== I || e[48] !== x || e[49] !== _ || e[50] !== w) {
        q = <I title={x} titleId={_}>{w}</I>;
        e[47] = I;
        e[48] = x;
        e[49] = _;
        e[50] = w;
        e[51] = q;
    } else {
        q = e[51];
    }
    return q;
}
function EsComponent(n) {
    EsComponent.d = 1167;
    const e = c_1.c(17);
    const { items, namedSection, layout, query, isLoading, selectedSectionKey, rows, onSelectSection } = n;
    let u;
    if (e[0] !== isLoading || e[1] !== items || e[2] !== layout || e[3] !== namedSection || e[4] !== onSelectSection || e[5] !== query || e[6] !== rows.effectivePluginsById || e[7] !== rows.installedByKey || e[8] !== rows.isBusy || e[9] !== rows.nativeInstalled || e[10] !== rows.onAdd || e[11] !== rows.onAuthenticate || e[12] !== rows.onOpenPlugin || e[13] !== rows.pendingAddKey || e[14] !== rows.servers || e[15] !== selectedSectionKey) {
        u = <Yl1Component effectivePluginsById={rows.effectivePluginsById} installedByKey={rows.installedByKey} isBusy={rows.isBusy} isLoading={isLoading} items={items} layout={layout} namedSection={namedSection} nativeInstalled={rows.nativeInstalled} onAdd={rows.onAdd} onAuthenticate={rows.onAuthenticate} onOpenPlugin={rows.onOpenPlugin} onSelectSection={onSelectSection} pendingAddKey={rows.pendingAddKey} query={query} selectedSectionKey={selectedSectionKey} servers={rows.servers}/>;
        e[0] = isLoading;
        e[1] = items;
        e[2] = layout;
        e[3] = namedSection;
        e[4] = onSelectSection;
        e[5] = query;
        e[6] = rows.effectivePluginsById;
        e[7] = rows.installedByKey;
        e[8] = rows.isBusy;
        e[9] = rows.nativeInstalled;
        e[10] = rows.onAdd;
        e[11] = rows.onAuthenticate;
        e[12] = rows.onOpenPlugin;
        e[13] = rows.pendingAddKey;
        e[14] = rows.servers;
        e[15] = selectedSectionKey;
        e[16] = u;
    } else {
        u = e[16];
    }
    return u;
}
function Vl1Component(n) {
    Vl1Component.d = 1168;
    const e = c_1.c(81);
    const { model, catalog, isCatalogLoading, query, rows, teamInstallCounts, onSelectCategory, onSelectSection } = n;
    const { _: __1 } = u_1();
    const { _: __2 } = u_1();
    if (model.isUnifiedSearch) {
        const filterKey = model.page?.kind === "category-filter" ? model.page.filterKey : null;
        let A;
        if (e[0] !== catalog || e[1] !== query || e[2] !== rows.effectivePluginsById || e[3] !== rows.installedByKey || e[4] !== rows.isBusy || e[5] !== rows.nativeInstalled || e[6] !== rows.onAdd || e[7] !== rows.onAuthenticate || e[8] !== rows.onOpenPlugin || e[9] !== rows.pendingAddKey || e[10] !== rows.servers || e[11] !== filterKey) {
            A = <Kl1Component catalog={catalog} effectivePluginsById={rows.effectivePluginsById} filterKey={filterKey} installedByKey={rows.installedByKey} isBusy={rows.isBusy} nativeInstalled={rows.nativeInstalled} onAdd={rows.onAdd} onAuthenticate={rows.onAuthenticate} onOpenPlugin={rows.onOpenPlugin} pendingAddKey={rows.pendingAddKey} query={query} servers={rows.servers}/>;
            e[0] = catalog;
            e[1] = query;
            e[2] = rows.effectivePluginsById;
            e[3] = rows.installedByKey;
            e[4] = rows.isBusy;
            e[5] = rows.nativeInstalled;
            e[6] = rows.onAdd;
            e[7] = rows.onAuthenticate;
            e[8] = rows.onOpenPlugin;
            e[9] = rows.pendingAddKey;
            e[10] = rows.servers;
            e[11] = filterKey;
            e[12] = A;
        } else {
            A = e[12];
        }
        return A;
    }
    let m;
    if (e[13] !== __1) {
        m = n_1(__1, q);
        e[13] = __1;
        e[14] = m;
    } else {
        m = e[14];
    }
    let g;
    if (e[15] !== m) {
        g = {
            key: q,
            title: m
        };
        e[15] = m;
        e[16] = g;
    } else {
        g = e[16];
    }
    const p = g;
    let y;
    if (e[17] !== __1) {
        y = n_1(__1, P);
        e[17] = __1;
        e[18] = y;
    } else {
        y = e[18];
    }
    let h;
    if (e[19] !== y) {
        h = {
            key: P,
            title: y
        };
        e[19] = y;
        e[20] = h;
    } else {
        h = e[20];
    }
    const k = h;
    let b;
    if (e[21] !== isCatalogLoading || e[22] !== model.selectedSectionKey || e[23] !== onSelectSection || e[24] !== query || e[25] !== rows) {
        b = {
            isLoading: isCatalogLoading,
            layout: "marketplace-frame",
            onSelectSection,
            query,
            rows,
            selectedSectionKey: model.selectedSectionKey
        };
        e[21] = isCatalogLoading;
        e[22] = model.selectedSectionKey;
        e[23] = onSelectSection;
        e[24] = query;
        e[25] = rows;
        e[26] = b;
    } else {
        b = e[26];
    }
    const I = b;
    let S;
    let j;
    let N;
    let x;
    let _;
    let z;
    if (e[27] !== __1 || e[28] !== __2 || e[29] !== catalog || e[30] !== p || e[31] !== isCatalogLoading || e[32] !== model.hoistedTeamItems || e[33] !== model.homepagePluginItems || e[34] !== model.isHomepage || e[35] !== model.isPopularSection || e[36] !== model.popularPlugins || e[37] !== model.showsPluginCatalogStatus || e[38] !== model.showsTrailingBrowse || e[39] !== model.trailingBrowseItems || e[40] !== onSelectCategory || e[41] !== k || e[42] !== rows || e[43] !== I || e[44] !== teamInstallCounts) {
        const q = o(__1, catalog);
        let A;
        if (model.isHomepage) {
            A = p;
        } else if (model.isPopularSection) {
            A = k;
        } else {
            A = undefined;
        }
        if (e[51] !== catalog || e[52] !== model.isHomepage || e[53] !== rows || e[54] !== teamInstallCounts) {
            N = model.isHomepage ? <Ml1Component effectivePluginsById={rows.effectivePluginsById} installedByKey={rows.installedByKey} isBusy={rows.isBusy} items={catalog} nativeInstalled={rows.nativeInstalled} onAdd={rows.onAdd} onAuthenticate={rows.onAuthenticate} onOpenPlugin={rows.onOpenPlugin} pendingAddKey={rows.pendingAddKey} pluginLimit={pluginLimit} servers={rows.servers} teamInstallCounts={teamInstallCounts}/> : null;
            e[51] = catalog;
            e[52] = model.isHomepage;
            e[53] = rows;
            e[54] = teamInstallCounts;
            e[55] = N;
        } else {
            N = e[55];
        }
        if (e[56] !== model.homepagePluginItems || e[57] !== model.isHomepage || e[58] !== model.showsTrailingBrowse || e[59] !== model.trailingBrowseItems || e[60] !== I || e[61] !== A) {
            x = model.showsTrailingBrowse ? <EsComponent {...I} items={model.isHomepage ? model.homepagePluginItems : model.trailingBrowseItems} namedSection={A}/> : null;
            e[56] = model.homepagePluginItems;
            e[57] = model.isHomepage;
            e[58] = model.showsTrailingBrowse;
            e[59] = model.trailingBrowseItems;
            e[60] = I;
            e[61] = A;
            e[62] = x;
        } else {
            x = e[62];
        }
        if (e[63] !== model.hoistedTeamItems || e[64] !== I) {
            _ = model.hoistedTeamItems.length > 0 ? <EsComponent {...I} items={model.hoistedTeamItems}/> : null;
            e[63] = model.hoistedTeamItems;
            e[64] = I;
            e[65] = _;
        } else {
            _ = e[65];
        }
        if (e[66] !== model.isHomepage || e[67] !== model.popularPlugins || e[68] !== k || e[69] !== I) {
            z = model.isHomepage && model.popularPlugins.length > 0 ? <EsComponent {...I} items={model.popularPlugins} namedSection={k}/> : null;
            e[66] = model.isHomepage;
            e[67] = model.popularPlugins;
            e[68] = k;
            e[69] = I;
            e[70] = z;
        } else {
            z = e[70];
        }
        if (e[71] !== isCatalogLoading || e[72] !== model.showsPluginCatalogStatus) {
            S = model.showsPluginCatalogStatus ? <Hl1Component isLoading={isCatalogLoading}/> : null;
            e[71] = isCatalogLoading;
            e[72] = model.showsPluginCatalogStatus;
            e[73] = S;
        } else {
            S = e[73];
        }
        j = model.isHomepage ? q.map((T)=><UsComponent key={T.category.key} action={T.plugins.length > M ? <G label={__2({
                id: "N6Pxr9"
            })} onAction={()=>onSelectCategory(T.category)}/> : undefined} title={T.category.label} titleId={T.category.key}><P_1 labelledBy={T.category.key}>{T.plugins.slice(0, M).map((M)=><WsComponent key={M.id} effectivePluginsById={rows.effectivePluginsById} entry={M} installedByKey={rows.installedByKey} isBusy={rows.isBusy} nativeInstalled={rows.nativeInstalled} onAdd={rows.onAdd} onAuthenticate={rows.onAuthenticate} onOpenPlugin={rows.onOpenPlugin} pendingAddKey={rows.pendingAddKey} servers={rows.servers}/>)}</P_1></UsComponent>) : null;
        e[27] = __1;
        e[28] = __2;
        e[29] = catalog;
        e[30] = p;
        e[31] = isCatalogLoading;
        e[32] = model.hoistedTeamItems;
        e[33] = model.homepagePluginItems;
        e[34] = model.isHomepage;
        e[35] = model.isPopularSection;
        e[36] = model.popularPlugins;
        e[37] = model.showsPluginCatalogStatus;
        e[38] = model.showsTrailingBrowse;
        e[39] = model.trailingBrowseItems;
        e[40] = onSelectCategory;
        e[41] = k;
        e[42] = rows;
        e[43] = I;
        e[44] = teamInstallCounts;
        e[45] = S;
        e[46] = j;
        e[47] = N;
        e[48] = x;
        e[49] = _;
        e[50] = z;
    } else {
        S = e[45];
        j = e[46];
        N = e[47];
        x = e[48];
        _ = e[49];
        z = e[50];
    }
    let w;
    if (e[74] !== S || e[75] !== j || e[76] !== N || e[77] !== x || e[78] !== _ || e[79] !== z) {
        w = <>{N}{x}{_}{z}{S}{j}</>;
        e[74] = S;
        e[75] = j;
        e[76] = N;
        e[77] = x;
        e[78] = _;
        e[79] = z;
        e[80] = w;
    } else {
        w = e[80];
    }
    return w;
}
const $t = ay(()=>_(()=>import("./chunk-plugin-detail-view-tZskkHRA.js"), __vite__mapDeps([
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17
    ]), import.meta.url));
const Vo1 = $t.component((n)=>n.PluginDetailView);
const Bo1 = $t.component((n)=>n.InstalledServerDetailView);
$t.preload;
function Bl1Component(n) {
    Bl1Component.d = 1188;
    const e = c_1.c(2);
    let s;
    if (e[0] !== n) {
        s = <Vo1 {...n}/>;
        e[0] = n;
        e[1] = s;
    } else {
        s = e[1];
    }
    return s;
}
function Xl1Component(n) {
    Xl1Component.d = 1187;
    const e = c_1.c(2);
    let s;
    if (e[0] !== n) {
        s = <Bo1 {...n}/>;
        e[0] = n;
        e[1] = s;
    } else {
        s = e[1];
    }
    return s;
}
function jl(failureDetail, e) {
    const s = failureDetail?.trim() ?? "";
    if (s.length === 0 || s === "PermissionDenied") {
        return e;
    }
    return s;
}
function xo(n, e) {
    if (n.status === "started" || n.status === "already-authenticated") {
        return null;
    }
    if (n.status === "not-configured") {
        return e;
    }
    return ej(n);
}
function jo(n) {
    return n.serverIdentifier === connector || n.serverId === k2;
}
function So(n) {
    return `${n.serverId}|${n.serverIdentifier ?? ""}|${n.outcome ?? ""}|${n.accountKey}`;
}
function WoComponent(n) {
    WoComponent.d = 1186;
    const e = c_1.c(28);
    const { isBusy } = n;
    const { _: __1 } = u_1();
    const { authenticate, isPending } = e5();
    const { remove, isPending: isPending_1 } = e6();
    const i = bA();
    const o = e7();
    const [u, setU] = r_1.useState(null);
    const [m, setM] = r_1.useState(null);
    const [p, setP] = r_1.useState(null);
    let h;
    let k;
    if (e[0] !== __1 || e[1] !== o || e[2] !== m) {
        k = __1({
            id: "TZFIGB"
        });
        const P = o.filter(jo).at(-1) ?? null;
        h = P == null ? null : So(P);
        if (h != null && h !== m && P != null) {
            setM(h);
            if (P.outcome === "cancelled") {
                setU(false);
                setP(jl(P.failureDetail, k));
            } else {
                setP(null);
                setU(true);
            }
        }
        e[0] = __1;
        e[1] = o;
        e[2] = m;
        e[3] = h;
        e[4] = k;
    } else {
        h = e[3];
        k = e[4];
    }
    let b;
    if (e[5] !== authenticate || e[6] !== k) {
        b = ()=>{
            let P = false;
            authenticate(k2, ee_1, undefined, undefined, false).then((K)=>{
                if (P) {
                    return;
                }
                const C = K.status === "already-authenticated";
                setU(C);
                if (C) {
                    setP(null);
                }
            }).catch(()=>{
                if (!P) {
                    setU(false);
                    setP(k);
                }
            });
            return ()=>{
                P = true;
            };
        };
        e[5] = authenticate;
        e[6] = k;
        e[7] = b;
    } else {
        b = e[7];
    }
    const I = x_2(b);
    i_2(I);
    let S;
    if (e[8] !== authenticate || e[9] !== k || e[10] !== i) {
        S = ()=>{
            setP(null);
            authenticate(k2, ee_1, undefined, undefined, true).then((P)=>{
                const K = xo(P, k);
                if (K != null) {
                    setU(false);
                    setP(K);
                    return;
                }
                if (P.status === "already-authenticated") {
                    setU(true);
                    return;
                }
                if (P.status === "started") {
                    k3({
                        connector,
                        displayName: "SharePoint",
                        authorizationUrl: P.authorizationUrl
                    }, i);
                }
            }).catch(()=>{
                setU(false);
                setP(k);
            });
        };
        e[8] = authenticate;
        e[9] = k;
        e[10] = i;
        e[11] = S;
    } else {
        S = e[11];
    }
    const j = S;
    let N;
    if (e[12] !== h || e[13] !== remove) {
        N = ()=>{
            remove({
                serverId: k2,
                accountKey: ee_1
            }).then(()=>{
                setM(h);
                setP(null);
                setU(false);
            });
        };
        e[12] = h;
        e[13] = remove;
        e[14] = N;
    } else {
        N = e[14];
    }
    const x = N;
    const _ = isBusy || isPending || isPending_1;
    let z;
    let w;
    if (e[15] === Symbol.for("react.memo_cache_sentinel")) {
        z = {
            className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-1jnr06f sand-1iorvi4 sand-1pic42t sand-sag5q8 sand-1onr9mi"
        };
        w = {
            className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-167g77z"
        };
        e[15] = z;
        e[16] = w;
    } else {
        z = e[15];
        w = e[16];
    }
    let q;
    if (e[17] === Symbol.for("react.memo_cache_sentinel")) {
        q = <Ze color="tertiary" size="sm"><T_1 id="1fP5uI"/></Ze>;
        e[17] = q;
    } else {
        q = e[17];
    }
    let A;
    if (e[18] !== j || e[19] !== u || e[20] !== _ || e[21] !== x) {
        A = <span {...w}>{q}{u === true ? <Fs disabled={_} onClick={x} size="sm" type="button" variant="secondary"><T_1 id="cO9+2L"/></Fs> : <Fs disabled={_ || u == null} onClick={j} size="sm" type="button" variant="secondary"><T_1 id="PaQ3df"/></Fs>}</span>;
        e[18] = j;
        e[19] = u;
        e[20] = _;
        e[21] = x;
        e[22] = A;
    } else {
        A = e[22];
    }
    let T;
    if (e[23] !== p) {
        T = p != null ? <span role="alert" className="sand-9f619 sand-1wm8ruf sand-1d3mw78 sand-1jh5svw sand-j0a0fe sand-1hx0egp">{p}</span> : null;
        e[23] = p;
        e[24] = T;
    } else {
        T = e[24];
    }
    let M;
    if (e[25] !== A || e[26] !== T) {
        M = <span {...z}>{A}{T}</span>;
        e[25] = A;
        e[26] = T;
        e[27] = M;
    } else {
        M = e[27];
    }
    return M;
}
const ka = "••••••••";
const Io = {
    intro: {
        kB7OPa: "sand-9f619",
        keoZOQ: "sand-dj266r",
        k71WvV: "sand-14z9mp",
        k1K539: "sand-at24cr",
        keTefX: "sand-1lziwak",
        kMwMTN: "sand-19aaqeu",
        $$css: true
    }
};
function No(fields, initialValues, s = []) {
    const a = new Set(s);
    const d = {};
    for (const r of fields){
        const l = initialValues[r.key];
        if (l !== undefined) {
            d[r.key] = l;
            continue;
        }
        if (r.defaultValue !== undefined && !a.has(r.key)) {
            d[r.key] = r.defaultValue;
        } else if (r.type === "boolean") {
            d[r.key] = false;
        } else {
            d[r.key] = "";
        }
    }
    return d;
}
function _o(n) {
    if (typeof n === "string") {
        return n.trim().length === 0;
    }
    return n === undefined;
}
function zo(fields, e) {
    return fields.filter((s)=>s.isRequired === true && s.type !== "boolean" && _o(e[s.key]));
}
function Po(fields, e) {
    return fields.filter((s)=>{
        if (s.type !== "number" && s.type !== "integer" || s.options != null) {
            return false;
        }
        const a = e[s.key];
        if (typeof a !== "string" || a.trim().length === 0) {
            return false;
        }
        const d = Number(a);
        return !Number.isFinite(d) || s.type === "integer" && !Number.isInteger(d);
    });
}
function Ao(fields, e) {
    const s = {};
    for (const a of fields){
        const d = e[a.key];
        if (a.type === "boolean") {
            if (typeof d === "boolean") {
                s[a.key] = d;
            }
            continue;
        }
        if (!(typeof d !== "string" || d.trim().length === 0)) {
            if (a.options != null) {
                const r = jh(d);
                if (typeof r === "string" || typeof r === "number" || typeof r === "boolean") {
                    s[a.key] = r;
                }
                continue;
            }
            if (a.type === "string") {
                s[a.key] = d.trim();
                continue;
            }
            s[a.key] = Number(d);
        }
    }
    return s;
}
function SlComponent(n) {
    SlComponent.d = 1203;
    const e = c_1.c(57);
    const { title, intro, fields, unsupportedFieldKeys, initialValues, configuredKeys, submitLabel, isBusy, onSubmit } = n;
    const { _: __1 } = u_1();
    const m = r_1.useId();
    let g;
    if (e[0] !== configuredKeys || e[1] !== fields || e[2] !== initialValues) {
        g = ()=>No(fields, initialValues, configuredKeys);
        e[0] = configuredKeys;
        e[1] = fields;
        e[2] = initialValues;
        e[3] = g;
    } else {
        g = e[3];
    }
    const [p, setP] = r_1.useState(g);
    const [h, setH] = r_1.useState(false);
    let b;
    let I;
    let S;
    let j;
    let N;
    let x;
    let _;
    let z;
    if (e[4] !== __1 || e[5] !== configuredKeys || e[6] !== fields || e[7] !== m || e[8] !== intro || e[9] !== onSubmit || e[10] !== h || e[11] !== title || e[12] !== unsupportedFieldKeys || e[13] !== p) {
        const T = zo(fields, p);
        const M = Po(fields, p);
        const P = new Set(T.map(Co));
        const K = new Set(M.map(Mo));
        let C;
        if (e[22] !== configuredKeys) {
            C = configuredKeys ?? [];
            e[22] = configuredKeys;
            e[23] = C;
        } else {
            C = e[23];
        }
        let D;
        if (e[24] !== C) {
            D = new Set(C);
            e[24] = C;
            e[25] = D;
        } else {
            D = e[25];
        }
        const F = D;
        let G;
        if (e[26] === Symbol.for("react.memo_cache_sentinel")) {
            G = (R, Y)=>{
                setP((le)=>({
                        ...le,
                        [R]: Y
                    }));
            };
            e[26] = G;
        } else {
            G = e[26];
        }
        const W = G;
        const Z = (R)=>{
            R.preventDefault();
            if (T.length > 0 || M.length > 0) {
                setH(true);
                return;
            }
            onSubmit(Ao(fields, p));
        };
        if (e[27] === Symbol.for("react.memo_cache_sentinel")) {
            S = {
                className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-ou54vl sand-1hx0egp"
            };
            e[27] = S;
        } else {
            S = e[27];
        }
        j = Z;
        if (e[28] !== title) {
            N = <V_1 as="h3">{title}</V_1>;
            e[28] = title;
            e[29] = N;
        } else {
            N = e[29];
        }
        let O;
        if (e[30] === Symbol.for("react.memo_cache_sentinel")) {
            O = p_1(a_.body1, Io.intro);
            e[30] = O;
        } else {
            O = e[30];
        }
        let L;
        if (e[31] !== F.size) {
            L = F.size > 0 ? <> <T_1 id="+CwemP"/></> : null;
            e[31] = F.size;
            e[32] = L;
        } else {
            L = e[32];
        }
        if (e[33] !== intro || e[34] !== L) {
            x = <p {...O}>{intro}{L}</p>;
            e[33] = intro;
            e[34] = L;
            e[35] = x;
        } else {
            x = e[35];
        }
        let J;
        if (e[36] === Symbol.for("react.memo_cache_sentinel")) {
            J = {
                className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-1af02g3"
            };
            e[36] = J;
        } else {
            J = e[36];
        }
        const V = fields.map((R)=>{
            const Y = `${m}-${R.key}`;
            const le = h && (P.has(R.key) || K.has(R.key));
            const te = F.has(R.key);
            const ae = p[R.key];
            let E;
            if (R.type === "boolean") {
                E = <input checked={ae === true} id={Y} onChange={(ue)=>W(R.key, ue.currentTarget.checked)} type="checkbox" className="sand-9f619 sand-qcrz7y sand-1kky2od sand-lup9mm sand-r9ek0c sand-4xkrpc"/>;
            } else if (R.options != null) {
                E = <select aria-invalid={le || undefined} id={Y} onChange={(ue)=>W(R.key, ue.currentTarget.value)} value={typeof ae === "string" ? ae : ""} {...{
                    0: {
                        className: "sand-9f619 sand-10w6t97 sand-exx8yu sand-2vl965 sand-18d9i69 sand-e2zdcy sand-mkeg23 sand-1y0btm7 sand-9r1u3d sand-fh79wh sand-ur7f20 sand-1t137rt sand-i07v4r sand-1wd3ewq sand-jb2p0i sand-11wthnw sand-12oo3zp sand-ltfok3"
                    },
                    1: {
                        className: "sand-9f619 sand-10w6t97 sand-exx8yu sand-2vl965 sand-18d9i69 sand-e2zdcy sand-mkeg23 sand-1y0btm7 sand-ur7f20 sand-1t137rt sand-i07v4r sand-1wd3ewq sand-jb2p0i sand-11wthnw sand-12oo3zp sand-ltfok3 sand-yerb3"
                    }
                }[!!le << 0]}><option value="">{te ? ka : __1({
                    id: "02ePaq",
                    values: {
                        0: R.label
                    }
                })}</option>{R.options.map(QoComponent)}</select>;
            } else {
                let ue = "text";
                if (R.type === "number" || R.type === "integer") {
                    ue = "number";
                } else if (R.isSecret === true) {
                    ue = "password";
                }
                E = <input aria-invalid={le || undefined} id={Y} onChange={(Ce)=>W(R.key, Ce.currentTarget.value)} placeholder={te ? ka : R.placeholder ?? R.key} spellCheck={false} type={ue} value={typeof ae === "string" ? ae : ""} {...{
                    0: {
                        className: "sand-9f619 sand-10w6t97 sand-exx8yu sand-2vl965 sand-18d9i69 sand-e2zdcy sand-mkeg23 sand-1y0btm7 sand-9r1u3d sand-fh79wh sand-ur7f20 sand-1t137rt sand-i07v4r sand-1wd3ewq sand-jb2p0i sand-11wthnw sand-12oo3zp sand-ltfok3"
                    },
                    1: {
                        className: "sand-9f619 sand-10w6t97 sand-exx8yu sand-2vl965 sand-18d9i69 sand-e2zdcy sand-mkeg23 sand-1y0btm7 sand-ur7f20 sand-1t137rt sand-i07v4r sand-1wd3ewq sand-jb2p0i sand-11wthnw sand-12oo3zp sand-ltfok3 sand-yerb3"
                    }
                }[!!le << 0]}/>;
            }
            let ve = null;
            if (h && P.has(R.key)) {
                ve = <p className="sand-9f619 sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-1wm8ruf sand-1d3mw78 sand-pmgbkh"><T_1 id="MbjbEk" values={{
                    0: R.label
                }}/></p>;
            } else if (h && K.has(R.key)) {
                ve = <p className="sand-9f619 sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-1wm8ruf sand-1d3mw78 sand-pmgbkh">{R.type === "integer" ? <T_1 id="zbchr9" values={{
                    0: R.label
                }}/> : <T_1 id="mUusO3" values={{
                    0: R.label
                }}/>}</p>;
            } else if (R.hint != null) {
                ve = <p title={R.hint} className="sand-9f619 sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-j0a0fe sand-1wm8ruf sand-1d3mw78 sand-4b2ntj">{R.hint}</p>;
            }
            return <div key={R.key} className="sand-9f619 sand-78zum5 sand-dt5ytf sand-1jnr06f"><label htmlFor={Y} className="sand-9f619 sand-11wthnw sand-d4r4e8 sand-12oo3zp sand-1rhlpx6 sand-1wd3ewq">{R.label}{R.isRequired === true ? null : <span className="sand-4b2ntj sand-1k6tqyu"> <T_1 id="NzluOx"/></span>}</label>{E}{ve}</div>;
        });
        if (e[37] !== V) {
            _ = <div {...J}>{V}</div>;
            e[37] = V;
            e[38] = _;
        } else {
            _ = e[38];
        }
        if (e[39] !== unsupportedFieldKeys) {
            z = unsupportedFieldKeys != null && unsupportedFieldKeys.length > 0 ? <p className="sand-9f619 sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-j0a0fe sand-1wm8ruf sand-1d3mw78 sand-4b2ntj"><T_1 id="Xjpu13" values={{
                0: k4(unsupportedFieldKeys)
            }}/></p> : null;
            e[39] = unsupportedFieldKeys;
            e[40] = z;
        } else {
            z = e[40];
        }
        if (e[41] === Symbol.for("react.memo_cache_sentinel")) {
            b = {
                className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-13a6bvl sand-167g77z"
            };
            e[41] = b;
        } else {
            b = e[41];
        }
        I = T.length > 0 && h ? <Ze as="span" color="tertiary" size="sm">{__1({
            id: "Cu9Y0x",
            values: {
                0: T.length
            }
        })}</Ze> : null;
        e[4] = __1;
        e[5] = configuredKeys;
        e[6] = fields;
        e[7] = m;
        e[8] = intro;
        e[9] = onSubmit;
        e[10] = h;
        e[11] = title;
        e[12] = unsupportedFieldKeys;
        e[13] = p;
        e[14] = b;
        e[15] = I;
        e[16] = S;
        e[17] = j;
        e[18] = N;
        e[19] = x;
        e[20] = _;
        e[21] = z;
    } else {
        b = e[14];
        I = e[15];
        S = e[16];
        j = e[17];
        N = e[18];
        x = e[19];
        _ = e[20];
        z = e[21];
    }
    let w;
    if (e[42] !== isBusy || e[43] !== submitLabel) {
        w = <Rs1 disabled={isBusy} size="sm" type="submit" variant="primary">{submitLabel}</Rs1>;
        e[42] = isBusy;
        e[43] = submitLabel;
        e[44] = w;
    } else {
        w = e[44];
    }
    let q;
    if (e[45] !== w || e[46] !== b || e[47] !== I) {
        q = <div {...b}>{I}{w}</div>;
        e[45] = w;
        e[46] = b;
        e[47] = I;
        e[48] = q;
    } else {
        q = e[48];
    }
    let A;
    if (e[49] !== q || e[50] !== S || e[51] !== j || e[52] !== N || e[53] !== x || e[54] !== _ || e[55] !== z) {
        A = <form {...S} onSubmit={j}>{N}{x}{_}{z}{q}</form>;
        e[49] = q;
        e[50] = S;
        e[51] = j;
        e[52] = N;
        e[53] = x;
        e[54] = _;
        e[55] = z;
        e[56] = A;
    } else {
        A = e[56];
    }
    return A;
}
function QoComponent(n) {
    return <option key={n.rawValue} value={n.rawValue}>{n.label}</option>;
}
function Mo(n) {
    return n.key;
}
function Co(n) {
    return n.key;
}
async function To(n) {
    try {
        const e = await n();
        if (e.teams.length > 0) {
            return {
                kind: "ready",
                teams: e.teams
            };
        }
        return {
            kind: "unavailable",
            reason: k7({
                fallback: e.unavailableReason ?? i_1._({
                    id: "02pDMA"
                }),
                ...e.unavailableReasonKind === undefined ? {} : {
                    kind: e.unavailableReasonKind
                }
            })
        };
    } catch (error) {
        return {
            kind: "unavailable",
            reason: error instanceof Error ? error.message : String(error)
        };
    }
}
function Wl1Component(n) {
    Wl1Component.d = 1207;
    const e = c_1.c(75);
    const { skill, agentId, isEnabled, onNotice, onSkillMoved, onClosed } = n;
    const { _: __1 } = u_1();
    const o = k5();
    const u = b8(o.publishSkill);
    const f = b8(o.resyncPublishedSkill);
    const m = b8(o.unpublishSkill);
    const g = b8(o.skillPublishTargets);
    const p = k6();
    const { status, copy } = aT();
    let k;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        k = {
            kind: "loading"
        };
        e[0] = k;
    } else {
        k = e[0];
    }
    const [b, setB] = r_1.useState(k);
    let S;
    if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
        S = {
            durationMs: 2000
        };
        e[1] = S;
    } else {
        S = e[1];
    }
    const [j, N] = j_2(S);
    if (!isEnabled) {
        return null;
    }
    const isPublished = skill.source === "plugin" && skill.publishedByCurrentUser;
    const skill_pluginId = skill.pluginId;
    let busyLabel = null;
    if (u.isPending) {
        let E;
        if (e[2] !== __1) {
            E = __1({
                id: "baaWCJ"
            });
            e[2] = __1;
            e[3] = E;
        } else {
            E = e[3];
        }
        busyLabel = E;
    } else if (f.isPending) {
        let E;
        if (e[4] !== __1) {
            E = __1({
                id: "ZDY7Fy"
            });
            e[4] = __1;
            e[5] = E;
        } else {
            E = e[5];
        }
        busyLabel = E;
    } else if (m.isPending) {
        let E;
        if (e[6] !== __1) {
            E = __1({
                id: "jvDsYK"
            });
            e[6] = __1;
            e[7] = E;
        } else {
            E = e[7];
        }
        busyLabel = E;
    }
    const w = busyLabel != null;
    let q;
    if (e[8] !== skill.description) {
        q = skill.description.trim();
        e[8] = skill.description;
        e[9] = q;
    } else {
        q = e[9];
    }
    const isDescriptionMissing = q.length === 0;
    let T;
    if (e[10] !== __1) {
        T = __1({
            id: "y1eoq1"
        });
        e[10] = __1;
        e[11] = T;
    } else {
        T = e[11];
    }
    let M = T;
    if (status === "copied") {
        let E;
        if (e[12] !== __1) {
            E = __1({
                id: "6V3Ea3"
            });
            e[12] = __1;
            e[13] = E;
        } else {
            E = e[13];
        }
        M = E;
    } else if (status === "error") {
        let E;
        if (e[14] !== __1) {
            E = __1({
                id: "9sj0G8"
            });
            e[14] = __1;
            e[15] = E;
        } else {
            E = e[15];
        }
        M = E;
    }
    let P;
    if (e[16] !== g) {
        P = async ()=>{
            setB({
                kind: "loading"
            });
            setB(await To(()=>g.run()));
        };
        e[16] = g;
        e[17] = P;
    } else {
        P = e[17];
    }
    const K = P;
    let C;
    if (e[18] !== isDescriptionMissing || e[19] !== isPublished || e[20] !== K) {
        C = (E)=>{
            if (E && !isPublished && !isDescriptionMissing) {
                K();
            }
        };
        e[18] = isDescriptionMissing;
        e[19] = isPublished;
        e[20] = K;
        e[21] = C;
    } else {
        C = e[21];
    }
    const D = C;
    let F;
    if (e[22] !== __1 || e[23] !== agentId || e[24] !== onNotice || e[25] !== onSkillMoved || e[26] !== u || e[27] !== p || e[28] !== skill.id || e[29] !== skill.name) {
        F = async (teamId)=>{
            onNotice(null);
            await bV(async ()=>{
                const ve = await u.run({
                    agentId,
                    workflowId: skill.id,
                    teamId
                });
                await p();
                if (ve.promotedWorkflowId != null) {
                    onSkillMoved?.(ve.promotedWorkflowId);
                    return;
                }
                onNotice({
                    kind: "error",
                    text: __1({
                        id: "Gd7j9e",
                        values: {
                            0: skill.name
                        }
                    })
                });
            }, onNotice);
        };
        e[22] = __1;
        e[23] = agentId;
        e[24] = onNotice;
        e[25] = onSkillMoved;
        e[26] = u;
        e[27] = p;
        e[28] = skill.id;
        e[29] = skill.name;
        e[30] = F;
    } else {
        F = e[30];
    }
    const onPublish = F;
    let W;
    if (e[31] !== agentId || e[32] !== N || e[33] !== onNotice || e[34] !== f || e[35] !== skill.id) {
        W = async ()=>{
            onNotice(null);
            await bV(async ()=>{
                await f.run({
                    agentId,
                    workflowId: skill.id
                });
                N();
            }, onNotice);
        };
        e[31] = agentId;
        e[32] = N;
        e[33] = onNotice;
        e[34] = f;
        e[35] = skill.id;
        e[36] = W;
    } else {
        W = e[36];
    }
    const Z = W;
    let O;
    if (e[37] !== agentId || e[38] !== onClosed || e[39] !== onNotice || e[40] !== onSkillMoved || e[41] !== p || e[42] !== skill.id || e[43] !== m) {
        O = async ()=>{
            onNotice(null);
            await bV(async ()=>{
                const E = await m.run({
                    agentId,
                    workflowId: skill.id
                });
                await p();
                if (E.restoredWorkflowId != null) {
                    onSkillMoved?.(E.restoredWorkflowId);
                    return;
                }
                onClosed?.();
            }, onNotice);
        };
        e[37] = agentId;
        e[38] = onClosed;
        e[39] = onNotice;
        e[40] = onSkillMoved;
        e[41] = p;
        e[42] = skill.id;
        e[43] = m;
        e[44] = O;
    } else {
        O = e[44];
    }
    const L = O;
    let J;
    if (e[45] !== busyLabel || e[46] !== isPublished || e[47] !== j) {
        J = <IlComponent busyLabel={busyLabel} isPublished={isPublished} isSyncConfirmed={j}/>;
        e[45] = busyLabel;
        e[46] = isPublished;
        e[47] = j;
        e[48] = J;
    } else {
        J = e[48];
    }
    let V;
    if (e[49] !== w || e[50] !== J) {
        V = <Rs1 aria-busy={w} disabled={w} size="sm" type="button" variant="outline">{J}</Rs1>;
        e[49] = w;
        e[50] = J;
        e[51] = V;
    } else {
        V = e[51];
    }
    let R;
    if (e[52] !== w || e[53] !== V) {
        R = <Oe.Trigger disabled={w}>{V}</Oe.Trigger>;
        e[52] = w;
        e[53] = V;
        e[54] = R;
    } else {
        R = e[54];
    }
    let Y;
    if (e[55] !== __1) {
        Y = __1({
            id: "rYZrJD"
        });
        e[55] = __1;
        e[56] = Y;
    } else {
        Y = e[56];
    }
    let le;
    if (e[57] !== __1 || e[58] !== copy || e[59] !== M || e[60] !== onPublish || e[61] !== Z || e[62] !== L || e[63] !== isDescriptionMissing || e[64] !== isPublished || e[65] !== skill_pluginId || e[66] !== b) {
        le = isPublished && skill_pluginId != null ? <Oe.Section><Oe.Item description={__1({
            id: "eFMPR0"
        })} leading=<W_1 name="refresh" size="base"/> onSelect={()=>{
            Z();
        }}><T_1 id="Nu4DdT"/></Oe.Item><Oe.Item closeOnSelect={false} leading=<W_1 name="copy" size="base"/> onSelect={()=>copy(v_1(skill_pluginId))}>{M}</Oe.Item><Oe.Item leading=<W_1 name="lock" size="base"/> onSelect={()=>{
            L();
        }}><T_1 id="4DLZUa"/></Oe.Item></Oe.Section> : <NlComponent isDescriptionMissing={isDescriptionMissing} onPublish={onPublish} targets={b}/>;
        e[57] = __1;
        e[58] = copy;
        e[59] = M;
        e[60] = onPublish;
        e[61] = Z;
        e[62] = L;
        e[63] = isDescriptionMissing;
        e[64] = isPublished;
        e[65] = skill_pluginId;
        e[66] = b;
        e[67] = le;
    } else {
        le = e[67];
    }
    let te;
    if (e[68] !== Y || e[69] !== le) {
        te = <Oe.Content aria-label={Y} minWidth={240} size="md">{le}</Oe.Content>;
        e[68] = Y;
        e[69] = le;
        e[70] = te;
    } else {
        te = e[70];
    }
    let ae;
    if (e[71] !== D || e[72] !== R || e[73] !== te) {
        ae = <Oe onOpenChange={D} placement="bottom-end">{R}{te}</Oe>;
        e[71] = D;
        e[72] = R;
        e[73] = te;
        e[74] = ae;
    } else {
        ae = e[74];
    }
    return ae;
}
function IlComponent(n) {
    IlComponent.d = 1206;
    const e = c_1.c(11);
    const { busyLabel, isSyncConfirmed, isPublished } = n;
    const { _ } = u_1();
    if (busyLabel != null) {
        let u;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            u = <W_1 aria-hidden modifier="spin" name="loading" size="xs"/>;
            e[0] = u;
        } else {
            u = e[0];
        }
        let f;
        if (e[1] !== busyLabel) {
            f = <>{u}{busyLabel}</>;
            e[1] = busyLabel;
            e[2] = f;
        } else {
            f = e[2];
        }
        return f;
    }
    if (isSyncConfirmed) {
        let u;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            u = <><W_1 aria-hidden name="check" size="xs"/><T_1 id="N2FcBE"/></>;
            e[3] = u;
        } else {
            u = e[3];
        }
        return u;
    }
    let l;
    if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
        l = <W_1 aria-hidden name="link" size="xs"/>;
        e[4] = l;
    } else {
        l = e[4];
    }
    let c;
    if (e[5] !== _ || e[6] !== isPublished) {
        c = _(isPublished ? {
            id: "u3wRF+"
        } : {
            id: "EEYbdt"
        });
        e[5] = _;
        e[6] = isPublished;
        e[7] = c;
    } else {
        c = e[7];
    }
    let i;
    if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
        i = <W_1 aria-hidden name="chevron-down" size="xs"/>;
        e[8] = i;
    } else {
        i = e[8];
    }
    let o;
    if (e[9] !== c) {
        o = <>{l}{c}{i}</>;
        e[9] = c;
        e[10] = o;
    } else {
        o = e[10];
    }
    return o;
}
function NlComponent(n) {
    NlComponent.d = 1205;
    const e = c_1.c(28);
    const { targets, isDescriptionMissing, onPublish } = n;
    const { _ } = u_1();
    if (isDescriptionMissing) {
        let f;
        if (e[0] !== _) {
            f = _({
                id: "cX+3Oq"
            });
            e[0] = _;
            e[1] = f;
        } else {
            f = e[1];
        }
        let m;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            m = <T_1 id="lz2dGc"/>;
            e[2] = m;
        } else {
            m = e[2];
        }
        let g;
        if (e[3] !== f) {
            g = <Oe.Section><Oe.Item description={f} disabled>{m}</Oe.Item></Oe.Section>;
            e[3] = f;
            e[4] = g;
        } else {
            g = e[4];
        }
        return g;
    }
    if (targets.kind === "loading") {
        let f;
        if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
            f = <Oe.Section><Oe.LoadingState/></Oe.Section>;
            e[5] = f;
        } else {
            f = e[5];
        }
        return f;
    }
    if (targets.kind === "unavailable") {
        let f;
        if (e[6] !== targets.reason) {
            f = <Oe.Section><Oe.Item disabled>{targets.reason}</Oe.Item></Oe.Section>;
            e[6] = targets.reason;
            e[7] = f;
        } else {
            f = e[7];
        }
        return f;
    }
    const [l, ...c] = targets.teams;
    if (l != null && c.length === 0) {
        let f;
        if (e[8] !== _) {
            f = _({
                id: "Z8YJXX"
            });
            e[8] = _;
            e[9] = f;
        } else {
            f = e[9];
        }
        let leading;
        if (e[10] === Symbol.for("react.memo_cache_sentinel")) {
            leading = <W_1 name="share" size="base"/>;
            e[10] = leading;
        } else {
            leading = e[10];
        }
        let g;
        if (e[11] !== onPublish || e[12] !== l.teamId) {
            g = ()=>{
                onPublish(l.teamId);
            };
            e[11] = onPublish;
            e[12] = l.teamId;
            e[13] = g;
        } else {
            g = e[13];
        }
        let p;
        if (e[14] === Symbol.for("react.memo_cache_sentinel")) {
            p = <T_1 id="EEYbdt"/>;
            e[14] = p;
        } else {
            p = e[14];
        }
        let y;
        if (e[15] !== f || e[16] !== g) {
            y = <Oe.Section><Oe.Item description={f} leading={leading} onSelect={g}>{p}</Oe.Item></Oe.Section>;
            e[15] = f;
            e[16] = g;
            e[17] = y;
        } else {
            y = e[17];
        }
        return y;
    }
    let i;
    if (e[18] !== _) {
        i = _({
            id: "VmT3pr"
        });
        e[18] = _;
        e[19] = i;
    } else {
        i = e[19];
    }
    let o;
    if (e[20] !== onPublish || e[21] !== targets.teams) {
        let f;
        if (e[23] !== onPublish) {
            f = (m)=><Oe.Item key={m.teamId} leading=<W_1 name="people" size="base"/> onSelect={()=>{
                    onPublish(m.teamId);
                }}>{m.name}</Oe.Item>;
            e[23] = onPublish;
            e[24] = f;
        } else {
            f = e[24];
        }
        o = targets.teams.map(f);
        e[20] = onPublish;
        e[21] = targets.teams;
        e[22] = o;
    } else {
        o = e[22];
    }
    let u;
    if (e[25] !== i || e[26] !== o) {
        u = <Oe.Section title={i}>{o}</Oe.Section>;
        e[25] = i;
        e[26] = o;
        e[27] = u;
    } else {
        u = e[27];
    }
    return u;
}
const As = {
    deleteDanger: {
        kWkggS: "sand-6y9aml sand-tly4hf",
        kMwMTN: "sand-6rl5ky",
        $$css: true
    },
    description: {
        kB7OPa: "sand-9f619",
        keoZOQ: "sand-dj266r",
        k71WvV: "sand-14z9mp",
        k1K539: "sand-at24cr",
        keTefX: "sand-1lziwak",
        kMwMTN: "sand-19aaqeu",
        $$css: true
    },
    input: {
        kB7OPa: "sand-9f619",
        kzqmXN: "sand-h8yej3",
        kLKAdn: "sand-z9dl7a",
        kwRFfy: "sand-v54qhq",
        kGO01o: "sand-sag5q8",
        kZCmMZ: "sand-f7dkkf",
        kMzoRj: "sand-mkeg23",
        ksu8eU: "sand-1y0btm7",
        kVAM5u: "sand-9r1u3d sand-fh79wh",
        kaIpWk: "sand-ixl9f9",
        k3XXqK: "sand-1t137rt",
        kWkggS: "sand-i07v4r",
        kMwMTN: "sand-1wd3ewq",
        kMv6JI: "sand-jb2p0i",
        $$css: true
    },
    textarea: {
        kB7OPa: "sand-9f619",
        kzqmXN: "sand-h8yej3",
        kOwNse: "sand-5f5z56",
        kAzted: "sand-jgen18",
        kskxy: "sand-1sslpiy",
        kHenm0: "sand-tt52l0",
        kORKVm: "sand-1odjw0f",
        kLKAdn: "sand-z9dl7a",
        kwRFfy: "sand-v54qhq",
        kGO01o: "sand-sag5q8",
        kZCmMZ: "sand-f7dkkf",
        kMzoRj: "sand-mkeg23",
        ksu8eU: "sand-1y0btm7",
        kVAM5u: "sand-9r1u3d sand-fh79wh",
        kaIpWk: "sand-ixl9f9",
        k3XXqK: "sand-1t137rt",
        kWkggS: "sand-i07v4r",
        kMwMTN: "sand-1wd3ewq",
        kMv6JI: "sand-jb2p0i",
        kGuDYH: "sand-fc7y3v",
        kLWn49: "sand-1fc57z9",
        kb6lSQ: "sand-12oo3zp",
        $$css: true
    },
    footerRule: {
        kEafiO: "sand-t8cgyo",
        kPef9Z: "sand-13fuv20",
        kLZC3w: "sand-s351rv",
        $$css: true
    }
};
function LComponent(n) {
    LComponent.d = 1204;
    const e = c_1.c(135);
    const { skill, agentId, onNotice, onClosed, onSkillMoved } = n;
    const { _: __1 } = u_1();
    const i = cq();
    const o = k5();
    const isEnabled = b9("publish_user_skills");
    const id = r_1.useId();
    const m = b8(o.update);
    const g = b8(o.remove);
    const [p, setP] = r_1.useState(skill.name);
    const [h, setH] = r_1.useState(skill.description);
    const [b, setB] = r_1.useState(skill.body);
    const [S, setS] = r_1.useState(false);
    const NRef = r_1.useRef(0);
    let x;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        x = ()=>{
            NRef.current = NRef.current + 1;
            setS(false);
        };
        e[0] = x;
    } else {
        x = e[0];
    }
    const _ = x;
    const [z, setZ] = r_1.useState(skill);
    if (skill !== z) {
        setZ(skill);
        if (skill.name !== z.name || skill.description !== z.description || skill.body !== z.body) {
            setP(skill.name);
            setH(skill.description);
            setB(skill.body);
        }
    }
    const q = p !== skill.name || h !== skill.description || b !== skill.body;
    const A = m.isPending || g.isPending;
    const T = skill.source === "plugin";
    const readOnly = skill.source === "managed";
    let P;
    if (e[1] !== __1) {
        P = __1({
            id: "V1Vjra"
        });
        e[1] = __1;
        e[2] = P;
    } else {
        P = e[2];
    }
    let K = P;
    if (readOnly) {
        let he;
        if (e[3] !== __1) {
            he = __1({
                id: "7eKKjp"
            });
            e[3] = __1;
            e[4] = he;
        } else {
            he = e[4];
        }
        K = he;
    } else if (T) {
        let he;
        if (e[5] !== __1) {
            he = __1({
                id: "quCEII"
            });
            e[5] = __1;
            e[6] = he;
        } else {
            he = e[6];
        }
        K = he;
    }
    let C;
    if (e[7] !== h) {
        C = h.trim();
        e[7] = h;
        e[8] = C;
    } else {
        C = e[8];
    }
    const D = C.length === 0;
    let F;
    if (e[9] !== agentId || e[10] !== b || e[11] !== A || e[12] !== D || e[13] !== q || e[14] !== readOnly || e[15] !== p) {
        F = !readOnly && agentId != null && q && p.trim().length > 0 && !D && b.trim().length > 0 && !A;
        e[9] = agentId;
        e[10] = b;
        e[11] = A;
        e[12] = D;
        e[13] = q;
        e[14] = readOnly;
        e[15] = p;
        e[16] = F;
    } else {
        F = e[16];
    }
    const G = F;
    let W;
    if (e[17] !== agentId || e[18] !== b || e[19] !== h || e[20] !== p || e[21] !== onNotice || e[22] !== m || e[23] !== skill.id || e[24] !== skill.sourceRef || e[25] !== skill.trigger) {
        W = async ()=>{
            if (agentId == null) {
                return;
            }
            const he = p.trim();
            const vs = h.trim();
            const NRef_current = NRef.current;
            onNotice(null);
            await bV(async ()=>{
                await m.run({
                    agentId,
                    workflowId: skill.id,
                    spec: {
                        name: he,
                        description: vs,
                        body: b,
                        trigger: skill.trigger,
                        sourceRef: skill.sourceRef
                    }
                });
                if (NRef.current === NRef_current) {
                    setP(he);
                    setH(vs);
                    setS(true);
                }
            }, onNotice);
        };
        e[17] = agentId;
        e[18] = b;
        e[19] = h;
        e[20] = p;
        e[21] = onNotice;
        e[22] = m;
        e[23] = skill.id;
        e[24] = skill.sourceRef;
        e[25] = skill.trigger;
        e[26] = W;
    } else {
        W = e[26];
    }
    const Z = W;
    let O;
    if (e[27] === Symbol.for("react.memo_cache_sentinel")) {
        O = <T_1 id="tfDRzk"/>;
        e[27] = O;
    } else {
        O = e[27];
    }
    let L = O;
    if (m.isPending) {
        let he;
        if (e[28] === Symbol.for("react.memo_cache_sentinel")) {
            he = <T_1 id="uF9ruK"/>;
            e[28] = he;
        } else {
            he = e[28];
        }
        L = he;
    } else if (S) {
        let he;
        if (e[29] === Symbol.for("react.memo_cache_sentinel")) {
            he = <T_1 id="idD8Ev"/>;
            e[29] = he;
        } else {
            he = e[29];
        }
        L = he;
    }
    let J;
    if (e[30] !== __1 || e[31] !== agentId || e[32] !== i || e[33] !== onClosed || e[34] !== onNotice || e[35] !== g || e[36] !== skill.id || e[37] !== skill.name) {
        J = async ()=>{
            if (agentId != null) {
                onNotice(null);
                await i({
                    title: __1({
                        id: "9fF32Y"
                    }),
                    description: __1({
                        id: "U99rVM"
                    }),
                    confirmLabel: __1({
                        id: "rvJGTw"
                    }),
                    cancelLabel: __1({
                        id: "dEgA5A"
                    }),
                    destructive: true,
                    perform: async ()=>{
                        await g.run({
                            agentId,
                            workflowId: skill.id
                        });
                        onNotice({
                            kind: "success",
                            text: __1({
                                id: "NHHKzo",
                                values: {
                                    0: skill.name
                                }
                            })
                        });
                        onClosed?.();
                        return null;
                    }
                });
            }
        };
        e[30] = __1;
        e[31] = agentId;
        e[32] = i;
        e[33] = onClosed;
        e[34] = onNotice;
        e[35] = g;
        e[36] = skill.id;
        e[37] = skill.name;
        e[38] = J;
    } else {
        J = e[38];
    }
    const V = J;
    let R;
    if (e[39] === Symbol.for("react.memo_cache_sentinel")) {
        R = r_2("sand-plugins-skill-detail", "sand-9f619 sand-78zum5 sand-1iyjqo2 sand-s83m0k sand-dl72j9 sand-dt5ytf sand-2lwn1j");
        e[39] = R;
    } else {
        R = e[39];
    }
    let Y;
    let le;
    let te;
    if (e[40] === Symbol.for("react.memo_cache_sentinel")) {
        te = r_2("sand-9f619 sand-78zum5 sand-dt5ytf sand-1665zp3");
        Y = r_2("sand-9f619 sand-78zum5 sand-dt5ytf sand-1v2ro7d");
        le = r_2("sand-9f619 sand-78zum5 sand-6s0dn4 sand-1v2ro7d");
        e[40] = Y;
        e[41] = le;
        e[42] = te;
    } else {
        Y = e[40];
        le = e[41];
        te = e[42];
    }
    let ae;
    let E;
    if (e[43] === Symbol.for("react.memo_cache_sentinel")) {
        ae = <span aria-hidden className={r_2("sand-9f619 sand-78zum5 sand-6s0dn4 sand-l56j7k sand-15yg21f sand-nnlda6 sand-2lah0s sand-4hv7ue sand-1y0btm7 sand-qz0629 sand-1kogg8i sand-r7npkh")}><W_1 color="primary" name="file-list" size={18}/></span>;
        E = r_2("sand-9f619 sand-78zum5 sand-1iyjqo2 sand-s83m0k sand-dl72j9 sand-dt5ytf sand-195vfkc sand-euugli");
        e[43] = ae;
        e[44] = E;
    } else {
        ae = e[43];
        E = e[44];
    }
    let ve;
    if (e[45] === Symbol.for("react.memo_cache_sentinel")) {
        ve = r_2("sand-9f619 sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-19d36u7 sand-1o2sk6j sand-1deyeav sand-1rhlpx6 sand-1wd3ewq");
        e[45] = ve;
    } else {
        ve = e[45];
    }
    let ue;
    if (e[46] !== skill.name) {
        ue = <Ze as="h3" className={ve}>{skill.name}</Ze>;
        e[46] = skill.name;
        e[47] = ue;
    } else {
        ue = e[47];
    }
    let Ce;
    if (e[48] === Symbol.for("react.memo_cache_sentinel")) {
        Ce = r_2("sand-9f619 sand-11wthnw sand-1d3mw78 sand-19aaqeu");
        e[48] = Ce;
    } else {
        Ce = e[48];
    }
    let qe;
    if (e[49] !== K) {
        qe = <span className={Ce}>{K}</span>;
        e[49] = K;
        e[50] = qe;
    } else {
        qe = e[50];
    }
    let re;
    if (e[51] !== ue || e[52] !== qe) {
        re = <div className={E}>{ue}{qe}</div>;
        e[51] = ue;
        e[52] = qe;
        e[53] = re;
    } else {
        re = e[53];
    }
    let Pe;
    if (e[54] === Symbol.for("react.memo_cache_sentinel")) {
        Pe = r_2("sand-9f619 sand-78zum5 sand-6s0dn4 sand-2lah0s sand-167g77z");
        e[54] = Pe;
    } else {
        Pe = e[54];
    }
    let de;
    if (e[55] !== agentId || e[56] !== isEnabled || e[57] !== readOnly || e[58] !== onClosed || e[59] !== onNotice || e[60] !== onSkillMoved || e[61] !== skill) {
        de = readOnly ? null : <Wl1Component agentId={agentId} isEnabled={isEnabled} onNotice={onNotice} onClosed={onClosed} onSkillMoved={onSkillMoved} skill={skill}/>;
        e[55] = agentId;
        e[56] = isEnabled;
        e[57] = readOnly;
        e[58] = onClosed;
        e[59] = onNotice;
        e[60] = onSkillMoved;
        e[61] = skill;
        e[62] = de;
    } else {
        de = e[62];
    }
    let ge;
    if (e[63] !== agentId || e[64] !== V || e[65] !== A || e[66] !== T || e[67] !== readOnly || e[68] !== g) {
        ge = agentId != null && !T && !readOnly ? <Rs1 aria-busy={g.isPending} disabled={A} onClick={()=>{
            V();
        }} rootStyle={As.deleteDanger} size="sm" type="button" variant="secondary"><T_1 id="rvJGTw"/></Rs1> : null;
        e[63] = agentId;
        e[64] = V;
        e[65] = A;
        e[66] = T;
        e[67] = readOnly;
        e[68] = g;
        e[69] = ge;
    } else {
        ge = e[69];
    }
    let ke;
    if (e[70] !== de || e[71] !== ge) {
        ke = <div className={Pe}>{de}{ge}</div>;
        e[70] = de;
        e[71] = ge;
        e[72] = ke;
    } else {
        ke = e[72];
    }
    let ie;
    if (e[73] !== re || e[74] !== ke) {
        ie = <header className={le}>{ae}{re}{ke}</header>;
        e[73] = re;
        e[74] = ke;
        e[75] = ie;
    } else {
        ie = e[75];
    }
    let fe;
    if (e[76] !== skill.description) {
        fe = skill.description.length > 0 ? <p className={r_2(p_1(a_.body1, As.description).className)}>{skill.description}</p> : null;
        e[76] = skill.description;
        e[77] = fe;
    } else {
        fe = e[77];
    }
    let be;
    if (e[78] !== ie || e[79] !== fe) {
        be = <div className={Y}>{ie}{fe}</div>;
        e[78] = ie;
        e[79] = fe;
        e[80] = be;
    } else {
        be = e[80];
    }
    let Me;
    if (e[81] === Symbol.for("react.memo_cache_sentinel")) {
        Me = r_2("sand-9f619 sand-78zum5 sand-dt5ytf sand-ou54vl");
        e[81] = Me;
    } else {
        Me = e[81];
    }
    let Ae;
    if (e[82] === Symbol.for("react.memo_cache_sentinel")) {
        Ae = r_2("sand-9f619 sand-1lliihq sand-1y1aw1k sand-f159sx sand-10b6aqq sand-mzvs34");
        e[82] = Ae;
    } else {
        Ae = e[82];
    }
    let xe;
    let Te;
    let Ke;
    if (e[83] === Symbol.for("react.memo_cache_sentinel")) {
        xe = <Ze as="span" className={Ae} color="tertiary" size="sm"><T_1 id="6YtxFj"/></Ze>;
        Te = r_2(p_1(a_.body1, As.input).className);
        Ke = (he)=>{
            _();
            setP(he.currentTarget.value);
        };
        e[83] = xe;
        e[84] = Te;
        e[85] = Ke;
    } else {
        xe = e[83];
        Te = e[84];
        Ke = e[85];
    }
    let Ee;
    if (e[86] !== readOnly || e[87] !== p) {
        Ee = <label>{xe}<input className={Te} onChange={Ke} readOnly={readOnly} spellCheck={false} type="text" value={p}/></label>;
        e[86] = readOnly;
        e[87] = p;
        e[88] = Ee;
    } else {
        Ee = e[88];
    }
    let Be;
    if (e[89] === Symbol.for("react.memo_cache_sentinel")) {
        Be = r_2("sand-9f619 sand-78zum5 sand-dt5ytf");
        e[89] = Be;
    } else {
        Be = e[89];
    }
    let es;
    if (e[90] === Symbol.for("react.memo_cache_sentinel")) {
        es = r_2("sand-9f619 sand-1lliihq sand-1y1aw1k sand-f159sx sand-10b6aqq sand-mzvs34");
        e[90] = es;
    } else {
        es = e[90];
    }
    let Qe;
    if (e[91] === Symbol.for("react.memo_cache_sentinel")) {
        Qe = <Ze as="span" className={es} color="tertiary" size="sm"><T_1 id="Nu4oKW"/></Ze>;
        e[91] = Qe;
    } else {
        Qe = e[91];
    }
    const Ue = D ? id : undefined;
    let Ge;
    let Ve;
    if (e[92] === Symbol.for("react.memo_cache_sentinel")) {
        Ge = r_2(p_1(a_.body1, As.input).className);
        Ve = (he)=>{
            _();
            setH(he.currentTarget.value);
        };
        e[92] = Ge;
        e[93] = Ve;
    } else {
        Ge = e[92];
        Ve = e[93];
    }
    let Fe;
    if (e[94] !== __1) {
        Fe = __1({
            id: "BbUcGY"
        });
        e[94] = __1;
        e[95] = Fe;
    } else {
        Fe = e[95];
    }
    let _e;
    if (e[96] !== h || e[97] !== readOnly || e[98] !== Ue || e[99] !== Fe) {
        _e = <label>{Qe}<input aria-describedby={Ue} className={Ge} onChange={Ve} placeholder={Fe} readOnly={readOnly} type="text" value={h}/></label>;
        e[96] = h;
        e[97] = readOnly;
        e[98] = Ue;
        e[99] = Fe;
        e[100] = _e;
    } else {
        _e = e[100];
    }
    let ye;
    if (e[101] !== id || e[102] !== D || e[103] !== readOnly) {
        ye = D && !readOnly ? <Ze as="span" className={r_2("sand-9f619 sand-1lliihq sand-1yrsyyn sand-f159sx sand-18d9i69 sand-mzvs34")} color="tertiary" id={id} size="sm"><T_1 id="5ijqLV"/></Ze> : null;
        e[101] = id;
        e[102] = D;
        e[103] = readOnly;
        e[104] = ye;
    } else {
        ye = e[104];
    }
    let $e;
    if (e[105] !== _e || e[106] !== ye) {
        $e = <div className={Be}>{_e}{ye}</div>;
        e[105] = _e;
        e[106] = ye;
        e[107] = $e;
    } else {
        $e = e[107];
    }
    let We;
    if (e[108] === Symbol.for("react.memo_cache_sentinel")) {
        We = r_2("sand-9f619 sand-1lliihq sand-1y1aw1k sand-f159sx sand-10b6aqq sand-mzvs34");
        e[108] = We;
    } else {
        We = e[108];
    }
    let He;
    let ss;
    let $;
    if (e[109] === Symbol.for("react.memo_cache_sentinel")) {
        He = <Ze as="span" className={We} color="tertiary" size="sm"><T_1 id="NxHkkp"/></Ze>;
        ss = r_2(p_1(As.textarea, aK.thinScrollbar).className);
        $ = (he)=>{
            _();
            setB(he.currentTarget.value);
        };
        e[109] = He;
        e[110] = ss;
        e[111] = $;
    } else {
        He = e[109];
        ss = e[110];
        $ = e[111];
    }
    let U;
    if (e[112] !== __1) {
        U = __1({
            id: "2Boc9B"
        });
        e[112] = __1;
        e[113] = U;
    } else {
        U = e[113];
    }
    let ee;
    if (e[114] !== b || e[115] !== readOnly || e[116] !== U) {
        ee = <label>{He}<textarea className={ss} onChange={$} placeholder={U} readOnly={readOnly} spellCheck={false} value={b}/></label>;
        e[114] = b;
        e[115] = readOnly;
        e[116] = U;
        e[117] = ee;
    } else {
        ee = e[117];
    }
    let se;
    if (e[118] !== Ee || e[119] !== $e || e[120] !== ee) {
        se = <div className={Me}>{Ee}{$e}{ee}</div>;
        e[118] = Ee;
        e[119] = $e;
        e[120] = ee;
        e[121] = se;
    } else {
        se = e[121];
    }
    let pe;
    if (e[122] !== be || e[123] !== se) {
        pe = <S_2><div className={te}>{be}{se}</div></S_2>;
        e[122] = be;
        e[123] = se;
        e[124] = pe;
    } else {
        pe = e[124];
    }
    let ze;
    if (e[125] !== G || e[126] !== Z || e[127] !== readOnly || e[128] !== S || e[129] !== L || e[130] !== m.isPending) {
        ze = readOnly ? null : <x_1.ActionBar style={As.footerRule}><x_1.Action disabled={!G || S} onClick={()=>{
            Z();
        }} pending={m.isPending} variant="primary" {...m.isPending ? {
            leadingIcon: {
                name: "spinner",
                modifier: "spin"
            }
        } : {}}>{L}</x_1.Action></x_1.ActionBar>;
        e[125] = G;
        e[126] = Z;
        e[127] = readOnly;
        e[128] = S;
        e[129] = L;
        e[130] = m.isPending;
        e[131] = ze;
    } else {
        ze = e[131];
    }
    let Xe;
    if (e[132] !== pe || e[133] !== ze) {
        Xe = <div className={R}>{pe}{ze}</div>;
        e[132] = pe;
        e[133] = ze;
        e[134] = Xe;
    } else {
        Xe = e[134];
    }
    return Xe;
}
const zl = ay(()=>_(()=>import("./chunk-native-plugin-detail-CoiLPvZP.js"), __vite__mapDeps([
        18,
        1,
        3,
        4,
        2,
        6,
        7,
        17,
        19,
        16,
        9,
        10,
        0,
        5,
        8,
        11,
        12,
        13,
        14,
        15
    ]), import.meta.url));
const Bo = zl.component((n)=>n.NativePluginDetail);
zl.preload;
function PlComponent(n) {
    PlComponent.d = 1210;
    const e = c_1.c(2);
    let s;
    if (e[0] !== n) {
        s = <Bo {...n}/>;
        e[0] = n;
        e[1] = s;
    } else {
        s = e[1];
    }
    return s;
}
function It(n) {
    switch(n.status){
        case "already-authenticated":
            return {
                kind: "success",
                text: i_1._({
                    id: "JYlWRx"
                })
            };
        case "not-configured":
            return {
                kind: "error",
                text: i_1._({
                    id: "E0z8bW"
                })
            };
        case "not-supported":
            return {
                kind: "error",
                text: ej(n)
            };
        case "unreachable":
            return {
                kind: "error",
                text: ej(n)
            };
        case "started":
            return {
                kind: "success",
                text: i_1._({
                    id: "Ea8un6"
                })
            };
        default:
            return n;
    }
}
function $o(displayName, e) {
    if (e.errorMessage != null || e.failed.length > 0) {
        const detail = e.errorMessage ?? i_1._({
            id: "dvqHOH",
            values: {
                0: k4(e.failed)
            }
        });
        return {
            kind: "error",
            text: i_1._({
                id: "Y9wjq9",
                values: {
                    displayName,
                    detail
                }
            })
        };
    }
    if (e.added > 0) {
        return {
            kind: "success",
            text: i_1._({
                id: "DgU3Gy",
                values: {
                    0: e.added,
                    displayName
                }
            })
        };
    }
    return {
        kind: "success",
        text: i_1._({
            id: "7JUrva",
            values: {
                displayName
            }
        })
    };
}
function Oo(n, e) {
    switch(e.status){
        case "already-authenticated":
            return n;
        case "started":
            if (n.kind === "error") {
                return n;
            }
            return It(e);
        case "not-configured":
        case "not-supported":
        case "unreachable":
            return It(e);
        default:
            return e;
    }
}
function va(n, e) {
    if (e.removed) {
        return {
            kind: "success",
            text: i_1._({
                id: "zP4Hk3",
                values: {
                    name: n
                }
            })
        };
    }
    if (e.reason === "team-server") {
        return {
            kind: "error",
            text: i_1._({
                id: "Qrm3GU",
                values: {
                    name: n
                }
            })
        };
    }
    return {
        kind: "error",
        text: i_1._({
            id: "FTYeAo",
            values: {
                name: n
            }
        })
    };
}
function Ro(n) {
    if (n.keepsPrivateCopy) {
        return i_1._({
            id: "E/PejD"
        });
    }
    if (n.isPublishedByViewer) {
        return i_1._({
            id: "ED7EQ5"
        });
    }
    return i_1._({
        id: "gBQ0E6"
    });
}
async function ba(install, e, onNotice, a) {
    const d = [];
    await bV(async ()=>{
        d.push(await install({
            entryId: e,
            values: {},
            ...a === true ? {
                hasTeamConfiguredVariables: true
            } : {}
        }));
    }, onNotice);
    return d[0] ?? null;
}
async function Ko(n, e) {
    try {
        return {
            added: (await n()).filter((a)=>a.pluginId === e).length,
            failed: [],
            errorMessage: null
        };
    } catch (error) {
        return {
            added: 0,
            failed: [],
            errorMessage: error instanceof Error ? error.message : String(error)
        };
    }
}
async function Eo(n, e) {
    try {
        await n(e);
        return {
            ok: true
        };
    } catch (error) {
        return {
            ok: false,
            error
        };
    }
}
async function Lo(n) {
    try {
        await n();
        return {
            ok: true
        };
    } catch (error) {
        return {
            ok: false,
            error
        };
    }
}
async function Fo(n, e, setY) {
    setY(e);
    try {
        await n();
    } finally{
        setY(null);
    }
}
function useDo(n) {
    const e = c_1.c(114);
    const { agentId, catalog, servers, accountGroups, effectivePluginsById, skills, refetchServers, onNotice, onOpenSetup, onCloseDetail } = n;
    const { _: __1 } = u_1();
    const [g, setG] = r_1.useState(null);
    const [y, setY] = r_1.useState(null);
    const { install, isPending } = e4();
    const { update, isPending: isPending_1 } = k8();
    const { authenticate, isPending: isPending_2 } = e5();
    const { remove, isPending: isPending_3 } = k9();
    const { rename, isPending: isPending_4 } = ka_1();
    const { remove: remove_1, isPending: isPending_5 } = e6();
    const { uninstall, isPending: isPending_6 } = kb();
    const { reconcile, isPending: isPending_7 } = kc();
    const C = cq();
    const D = bA();
    const F = k5();
    const G = b8(F.syncPluginSkills);
    const W = b8(F.unpublishPluginListing);
    const Z = b8(F.hasRestorablePluginListingCopy);
    const isBusy = isPending || isPending_1 || isPending_2 || isPending_3 || isPending_4 || isPending_5 || isPending_6 || W.isPending || Z.isPending || isPending_7 || G.isPending;
    let L;
    if (e[0] !== agentId || e[1] !== F || e[2] !== skills) {
        L = async ($)=>{
            if (agentId == null || $ == null) {
                return;
            }
            const U = new Set(($.skills ?? []).flatMap(Vo));
            if (U.size === 0) {
                return;
            }
            const ee = skills.filter((pe)=>pe.sourceRef != null && U.has(pe.sourceRef));
            const se = await Promise.all(ee.map((pe)=>Eo((ze)=>F.remove(ze), {
                    agentId,
                    workflowId: pe.id
                })));
            for (const pe of se){
                if (!pe.ok) {
                    bB(pe.error);
                }
            }
        };
        e[0] = agentId;
        e[1] = F;
        e[2] = skills;
        e[3] = L;
    } else {
        L = e[3];
    }
    const J = L;
    let V;
    if (e[4] !== agentId || e[5] !== J || e[6] !== G) {
        V = async ($)=>{
            await J($);
            return Ko(()=>G.run(agentId), $.id);
        };
        e[4] = agentId;
        e[5] = J;
        e[6] = G;
        e[7] = V;
    } else {
        V = e[7];
    }
    const R = V;
    let Y;
    if (e[8] !== authenticate || e[9] !== D || e[10] !== refetchServers) {
        Y = async ($, U, ee)=>{
            const se = await authenticate($.id, ee);
            if (se.status === "started") {
                const pe = U.find((ze)=>ze.accountKey === ee);
                k3({
                    connector: pe?.serverIdentifier ?? ef($.rowServerIdentifier, ee),
                    displayName: ei($.name, ee),
                    authorizationUrl: se.authorizationUrl,
                    ...se.portConflictDetail == null ? {} : {
                        portConflictDetail: se.portConflictDetail
                    }
                }, D);
            }
            refetchServers();
            return se;
        };
        e[8] = authenticate;
        e[9] = D;
        e[10] = refetchServers;
        e[11] = Y;
    } else {
        Y = e[11];
    }
    const le = Y;
    let te;
    if (e[12] !== onNotice || e[13] !== le || e[14] !== R) {
        te = async ($, U)=>{
            const ee = $o($.displayName, await R($));
            onNotice(ee);
            const se = kd($, U.servers);
            if (se != null) {
                eg({
                    serverName: se.name,
                    serverId: se.id
                });
                await bV(async ()=>{
                    const pe = await le(se, [
                        se
                    ], se.accountKey);
                    onNotice(Oo(ee, pe));
                }, onNotice);
            }
        };
        e[12] = onNotice;
        e[13] = le;
        e[14] = R;
        e[15] = te;
    } else {
        te = e[15];
    }
    const ae = te;
    let E;
    if (e[16] !== __1 || e[17] !== agentId || e[18] !== effectivePluginsById || e[19] !== ae || e[20] !== install || e[21] !== onNotice || e[22] !== onOpenSetup || e[23] !== R) {
        const $ = async (U)=>{
            onNotice(null);
            const ee = effectivePluginsById.get(U.id);
            const se = ee?.hasTeamConfiguredVariables === true;
            if (d(U).connectors === 0) {
                if (agentId == null) {
                    onNotice({
                        kind: "error",
                        text: __1({
                            id: "3IrDfA"
                        })
                    });
                    return;
                }
                if (await ba(install, U.id, onNotice, se) == null) {
                    return;
                }
                const Xe = await R(U);
                if (Xe.errorMessage != null) {
                    onNotice({
                        kind: "error",
                        text: __1({
                            id: "4ZEFvP",
                            values: {
                                0: U.displayName,
                                1: Xe.errorMessage
                            }
                        })
                    });
                    return;
                }
                onNotice({
                    kind: "success",
                    text: Xe.added > 0 ? i_1._({
                        id: "MunE46",
                        values: {
                            0: Xe.added,
                            1: U.displayName,
                            2: U.displayName
                        }
                    }) : __1({
                        id: "e5wMU/",
                        values: {
                            0: U.displayName
                        }
                    })
                });
                return;
            }
            const fields = U.fields ?? [];
            if (w(U, ee)) {
                setG({
                    entryId: U.id,
                    mode: "install",
                    fields,
                    unsupportedFieldKeys: U.unsupportedFieldKeys ?? [],
                    initialValues: {},
                    configuredKeys: []
                });
                onOpenSetup(U.id);
                return;
            }
            const ze = await ba(install, U.id, onNotice, se);
            if (ze != null) {
                await ae(U, ze);
            }
        };
        E = (U)=>{
            Fo(()=>$(U), m(U.id), setY);
        };
        e[16] = __1;
        e[17] = agentId;
        e[18] = effectivePluginsById;
        e[19] = ae;
        e[20] = install;
        e[21] = onNotice;
        e[22] = onOpenSetup;
        e[23] = R;
        e[24] = E;
    } else {
        E = e[24];
    }
    const add = E;
    let ue;
    if (e[25] !== onNotice || e[26] !== onOpenSetup) {
        ue = ($)=>{
            onNotice(null);
            const fields = $.entry.fields ?? [];
            if (fields.length !== 0) {
                setG({
                    entryId: $.entry.id,
                    mode: "edit",
                    fields,
                    unsupportedFieldKeys: $.entry.unsupportedFieldKeys ?? [],
                    initialValues: $.configuredVariables ?? {},
                    configuredKeys: $.configuredVariableKeys
                });
                onOpenSetup($.entry.id);
            }
        };
        e[25] = onNotice;
        e[26] = onOpenSetup;
        e[27] = ue;
    } else {
        ue = e[27];
    }
    const editSetup = ue;
    let qe;
    if (e[28] !== __1 || e[29] !== catalog || e[30] !== ae || e[31] !== install || e[32] !== onCloseDetail || e[33] !== onNotice || e[34] !== g || e[35] !== update) {
        qe = async (values)=>{
            const U = g;
            if (U == null) {
                return;
            }
            const ee = catalog.find((pe)=>pe.id === U.entryId);
            const displayName = ee?.displayName;
            onNotice(null);
            await bV(async ()=>{
                if (U.mode === "install") {
                    const pe = await install({
                        entryId: U.entryId,
                        values
                    });
                    if (ee != null) {
                        await ae(ee, pe);
                    } else {
                        onNotice({
                            kind: "success",
                            text: __1({
                                id: "8geUw2"
                            })
                        });
                    }
                } else {
                    await update({
                        pluginId: U.entryId,
                        values
                    });
                    onNotice({
                        kind: "success",
                        text: displayName == null ? __1({
                            id: "tfCmB4"
                        }) : __1({
                            id: "equGn7",
                            values: {
                                displayName
                            }
                        })
                    });
                }
                setG(null);
                onCloseDetail();
            }, onNotice);
        };
        e[28] = __1;
        e[29] = catalog;
        e[30] = ae;
        e[31] = install;
        e[32] = onCloseDetail;
        e[33] = onNotice;
        e[34] = g;
        e[35] = update;
        e[36] = qe;
    } else {
        qe = e[36];
    }
    const re = qe;
    let Pe;
    if (e[37] !== accountGroups || e[38] !== onNotice || e[39] !== servers || e[40] !== le) {
        Pe = async ($, U)=>{
            const ee = U === undefined ? ee_1 : U;
            const se = accountGroups.get($) ?? [];
            const pe = se[0] ?? servers.find((ze)=>ze.id === $);
            eg({
                serverName: pe?.name,
                serverId: $
            });
            if (pe != null) {
                onNotice(null);
                await bV(async ()=>{
                    onNotice(It(await le(pe, se, ee)));
                }, onNotice);
            }
        };
        e[37] = accountGroups;
        e[38] = onNotice;
        e[39] = servers;
        e[40] = le;
        e[41] = Pe;
    } else {
        Pe = e[41];
    }
    const de = Pe;
    let ge;
    if (e[42] !== __1 || e[43] !== onNotice || e[44] !== rename) {
        ge = async ($)=>{
            onNotice(null);
            await bV(async ()=>{
                await rename($);
                onNotice({
                    kind: "success",
                    text: __1({
                        id: "S/M1/r",
                        values: {
                            0: ed($.newAccountKey)
                        }
                    })
                });
            }, onNotice);
        };
        e[42] = __1;
        e[43] = onNotice;
        e[44] = rename;
        e[45] = ge;
    } else {
        ge = e[45];
    }
    const ke = ge;
    let ie;
    if (e[46] !== __1 || e[47] !== onNotice || e[48] !== remove_1 || e[49] !== servers) {
        ie = async ($)=>{
            onNotice(null);
            const U = servers.find((ee)=>ee.id === $.serverId && ee.servedBy === "grok");
            await bV(async ()=>{
                await remove_1($);
                if (U != null) {
                    const ee = U.name;
                    onNotice({
                        kind: "success",
                        text: __1({
                            id: "SVNn3I",
                            values: {
                                name: ee
                            }
                        })
                    });
                    return;
                }
                onNotice({
                    kind: "success",
                    text: __1({
                        id: "3qCh1E",
                        values: {
                            0: ed($.accountKey)
                        }
                    })
                });
            }, onNotice);
        };
        e[46] = __1;
        e[47] = onNotice;
        e[48] = remove_1;
        e[49] = servers;
        e[50] = ie;
    } else {
        ie = e[50];
    }
    const fe = ie;
    let onAuthenticate;
    let onAddAccount;
    if (e[51] !== de) {
        onAuthenticate = ($)=>{
            de($.serverId, $.accountKey);
        };
        onAddAccount = ($)=>{
            de($.serverId, $.label);
        };
        e[51] = de;
        e[52] = onAuthenticate;
        e[53] = onAddAccount;
    } else {
        onAuthenticate = e[52];
        onAddAccount = e[53];
    }
    let onRenameAccount;
    if (e[54] !== ke) {
        onRenameAccount = ($)=>{
            ke($);
        };
        e[54] = ke;
        e[55] = onRenameAccount;
    } else {
        onRenameAccount = e[55];
    }
    let onRemoveAccount;
    if (e[56] !== fe) {
        onRemoveAccount = ($)=>{
            fe($);
        };
        e[56] = fe;
        e[57] = onRemoveAccount;
    } else {
        onRemoveAccount = e[57];
    }
    let Te;
    if (e[58] !== onAuthenticate || e[59] !== onAddAccount || e[60] !== onRenameAccount || e[61] !== onRemoveAccount) {
        Te = {
            onAuthenticate,
            onAddAccount,
            onRenameAccount,
            onRemoveAccount
        };
        e[58] = onAuthenticate;
        e[59] = onAddAccount;
        e[60] = onRenameAccount;
        e[61] = onRemoveAccount;
        e[62] = Te;
    } else {
        Te = e[62];
    }
    const accountActions = Te;
    let Ee;
    if (e[63] !== agentId || e[64] !== J || e[65] !== G) {
        Ee = async ($)=>{
            if ($ == null) {
                return;
            }
            await J($);
            const U = await Lo(()=>G.run(agentId));
            if (!U.ok) {
                bB(U.error);
            }
        };
        e[63] = agentId;
        e[64] = J;
        e[65] = G;
        e[66] = Ee;
    } else {
        Ee = e[66];
    }
    const Be = Ee;
    let es;
    if (e[67] !== catalog || e[68] !== Be || e[69] !== onCloseDetail || e[70] !== onNotice || e[71] !== remove || e[72] !== servers) {
        es = async ($)=>{
            const U = servers.find((ee)=>ee.id === $);
            if (U != null) {
                onNotice(null);
                await bV(async ()=>{
                    const ee = await remove($);
                    onNotice(va(U.name, ee));
                    const se = f_1(U, catalog);
                    if (se != null && ke_1(ee)) {
                        await Be(se);
                    }
                    if (ee.removed && se == null) {
                        onCloseDetail();
                    }
                }, onNotice);
            }
        };
        e[67] = catalog;
        e[68] = Be;
        e[69] = onCloseDetail;
        e[70] = onNotice;
        e[71] = remove;
        e[72] = servers;
        e[73] = es;
    } else {
        es = e[73];
    }
    const Qe = es;
    let Ue;
    if (e[74] !== __1 || e[75] !== catalog || e[76] !== Be || e[77] !== effectivePluginsById || e[78] !== onNotice || e[79] !== uninstall) {
        Ue = async ($)=>{
            const U = catalog.find((se)=>se.id === $);
            const ee = U?.displayName ?? effectivePluginsById.get($)?.displayName ?? __1({
                id: "QMBQ8e"
            });
            onNotice(null);
            await bV(async ()=>{
                const se = await uninstall($);
                onNotice(va(ee, se));
                if (ke_1(se)) {
                    await Be(U);
                }
            }, onNotice);
        };
        e[74] = __1;
        e[75] = catalog;
        e[76] = Be;
        e[77] = effectivePluginsById;
        e[78] = onNotice;
        e[79] = uninstall;
        e[80] = Ue;
    } else {
        Ue = e[80];
    }
    const Ge = Ue;
    let Ve;
    if (e[81] !== __1 || e[82] !== agentId || e[83] !== C || e[84] !== Be || e[85] !== effectivePluginsById || e[86] !== onCloseDetail || e[87] !== onNotice || e[88] !== Z || e[89] !== reconcile || e[90] !== W) {
        Ve = async ($)=>{
            const U = effectivePluginsById.get($.id);
            const teamId = U?.unpublishableFromTeamId;
            if (teamId != null) {
                onNotice(null);
                await bV(async ()=>{
                    const keepsPrivateCopy = await Z.run($.id);
                    if (await C(cr({
                        title: __1({
                            id: "1RsNQ8",
                            values: {
                                0: $.displayName
                            }
                        }),
                        description: Ro({
                            keepsPrivateCopy,
                            isPublishedByViewer: U?.isPublishedByViewer === true
                        }),
                        confirmLabel: __1({
                            id: "4DLZUa"
                        }),
                        cancelLabel: __1({
                            id: "dEgA5A"
                        }),
                        initialFocus: "cancel"
                    }))) {
                        await W.run({
                            agentId,
                            pluginId: $.id,
                            teamId
                        });
                        try {
                            await reconcile($.id);
                        } catch (error) {
                            bB(error);
                        }
                        onNotice({
                            kind: "success",
                            text: __1({
                                id: "V6Kdrn",
                                values: {
                                    0: $.displayName
                                }
                            })
                        });
                        onCloseDetail();
                        await Be($);
                    }
                }, onNotice);
            }
        };
        e[81] = __1;
        e[82] = agentId;
        e[83] = C;
        e[84] = Be;
        e[85] = effectivePluginsById;
        e[86] = onCloseDetail;
        e[87] = onNotice;
        e[88] = Z;
        e[89] = reconcile;
        e[90] = W;
        e[91] = Ve;
    } else {
        Ve = e[91];
    }
    const Fe = Ve;
    let submitSetup;
    if (e[92] !== re) {
        submitSetup = ($)=>{
            re($);
        };
        e[92] = re;
        e[93] = submitSetup;
    } else {
        submitSetup = e[93];
    }
    let authenticate_1;
    if (e[94] !== de) {
        authenticate_1 = ($)=>{
            de($);
        };
        e[94] = de;
        e[95] = authenticate_1;
    } else {
        authenticate_1 = e[95];
    }
    let uninstall_1;
    if (e[96] !== Qe) {
        uninstall_1 = ($)=>{
            Qe($);
        };
        e[96] = Qe;
        e[97] = uninstall_1;
    } else {
        uninstall_1 = e[97];
    }
    let uninstallPlugin;
    if (e[98] !== Ge) {
        uninstallPlugin = ($)=>{
            Ge($);
        };
        e[98] = Ge;
        e[99] = uninstallPlugin;
    } else {
        uninstallPlugin = e[99];
    }
    let unpublishPlugin;
    if (e[100] !== Fe) {
        unpublishPlugin = ($)=>{
            Fe($);
        };
        e[100] = Fe;
        e[101] = unpublishPlugin;
    } else {
        unpublishPlugin = e[101];
    }
    let ss;
    if (e[102] !== accountActions || e[103] !== add || e[104] !== editSetup || e[105] !== isBusy || e[106] !== y || e[107] !== g || e[108] !== submitSetup || e[109] !== authenticate_1 || e[110] !== uninstall_1 || e[111] !== uninstallPlugin || e[112] !== unpublishPlugin) {
        ss = {
            isBusy,
            pendingAddKey: y,
            stagedSetup: g,
            accountActions,
            add,
            editSetup,
            submitSetup,
            authenticate: authenticate_1,
            uninstall: uninstall_1,
            uninstallPlugin,
            unpublishPlugin
        };
        e[102] = accountActions;
        e[103] = add;
        e[104] = editSetup;
        e[105] = isBusy;
        e[106] = y;
        e[107] = g;
        e[108] = submitSetup;
        e[109] = authenticate_1;
        e[110] = uninstall_1;
        e[111] = uninstallPlugin;
        e[112] = unpublishPlugin;
        e[113] = ss;
    } else {
        ss = e[113];
    }
    return ss;
}
function Vo(n) {
    if (n.sourceUrl != null) {
        return [
            n.sourceUrl
        ];
    }
    return [];
}
const Uo = {
    stage: {
        k1xSpc: "sand-78zum5",
        kzQI83: "sand-1iyjqo2",
        kmuXW: "sand-s83m0k",
        kCS8Yb: "sand-dl72j9",
        kXwgrk: "sand-dt5ytf",
        kAzted: "sand-2lwn1j",
        $$css: true
    }
};
function gt(n) {
    if (n.kind === "detail") {
        return `detail:${n.depth}:${n.target.kind}:${A(n.target)}`;
    }
    return n.kind;
}
function Go(n, catalog) {
    switch(n.kind){
        case "id":
            return n.pluginId;
        case "name":
            return catalog.find((s)=>s.isPublicListed === true && s.pluginName === n.pluginName)?.id ?? null;
    }
}
function Wo(n, isLoading, s) {
    const a = c_1.c(10);
    const { _ } = u_1();
    let r;
    if (a[0] !== n || a[1] !== isLoading) {
        r = isLoading ? n.filter(Ho) : n;
        a[0] = n;
        a[1] = isLoading;
        a[2] = r;
    } else {
        r = a[2];
    }
    const catalog = r;
    let c;
    if (a[3] !== _ || a[4] !== catalog || a[5] !== s) {
        c = s ? B_1(_, catalog) : [];
        a[3] = _;
        a[4] = catalog;
        a[5] = s;
        a[6] = c;
    } else {
        c = a[6];
    }
    let i;
    if (a[7] !== catalog || a[8] !== c) {
        i = {
            catalog,
            categories: c
        };
        a[7] = catalog;
        a[8] = c;
        a[9] = i;
    } else {
        i = a[9];
    }
    return i;
}
function Ho(n) {
    return n.native == null;
}
function AlComponent(n) {
    AlComponent.d = 1215;
    const e = c_1.c(189);
    const { agentId, headingId, title, focusSkillId, focusServerId, focusBrowseQuery, focusPlugin, focusBot, browseLayout, onAddBot, onNotice, onCloseSettings } = n;
    const p = focusSkillId === undefined ? null : focusSkillId;
    const y = focusServerId === undefined ? null : focusServerId;
    const h = focusBrowseQuery === undefined ? null : focusBrowseQuery;
    const k = focusPlugin === undefined ? null : focusPlugin;
    const b = focusBot === undefined ? null : focusBot;
    const I = browseLayout === undefined ? "section" : browseLayout;
    const { _ } = u_1();
    const { _: __1 } = u_1();
    const N = e7();
    const [x, setX] = r_1.useState(null);
    const z = N.filter(tr).at(-1) ?? null;
    if (z != null) {
        const v = `${z.serverId}|${z.failureDetail ?? ""}|${z.accountKey}`;
        if (v !== x) {
            setX(v);
            onNotice({
                kind: "error",
                text: jl(z.failureDetail, __1({
                    id: "TZFIGB"
                }))
            });
        }
    }
    const w = I === "marketplace-frame";
    const [q, setQ] = r_1.useState(false);
    const [T, setT] = r_1.useState(false);
    const [P, setP] = r_1.useState("");
    const [C, setC] = r_1.useState(nr);
    const [F, setF] = r_1.useState(null);
    let W;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        W = [];
        e[0] = W;
    } else {
        W = e[0];
    }
    const [Z, setZ] = r_1.useState(W);
    const LRef = r_1.useRef(new Map);
    const JRef = r_1.useRef(null);
    const V = Z.at(-1) ?? null;
    const R = V != null && x_3(V) ? V : null;
    const Y = R?.kind === "search";
    const le = w && q && V == null;
    if (!q && T) {
        setT(false);
    }
    let current;
    if (V == null) {
        if (le) {
            current = {
                kind: "manage"
            };
        } else {
            current = {
                kind: "front"
            };
        }
    } else {
        current = {
            kind: "detail",
            target: V,
            depth: Z.length
        };
    }
    const navigation = u_4({
        current,
        paneKey: gt,
        resolveFocus
    });
    const paneSettled = navigation.transition == null;
    let ve;
    if (e[1] !== w || e[2] !== q) {
        ve = (v)=>{
            if (v.kind === "front") {
                return `list:${w ? false : q}`;
            }
            if (v.kind === "manage") {
                return "list:true";
            }
            if (v.target.kind === "search") {
                return `search:${v.target.query}`;
            }
            return gt(v);
        };
        e[1] = w;
        e[2] = q;
        e[3] = ve;
    } else {
        ve = e[3];
    }
    const ue = ve;
    const Ce = ue(current);
    let qe;
    if (e[4] !== navigation) {
        qe = (v)=>{
            navigation.navigate({
                direction: "push",
                landing: {
                    kind: "none"
                }
            });
            setZ((B)=>[
                    ...B,
                    v
                ]);
        };
        e[4] = navigation;
        e[5] = qe;
    } else {
        qe = e[5];
    }
    const re = qe;
    const Pe = (target)=>{
        if (ue({
            kind: "detail",
            target,
            depth: Z.length
        }) !== Ce) {
            LRef.current.delete(Ce);
        }
        setZ((X)=>{
            if (X.length === 0) {
                return X;
            }
            return [
                ...X.slice(0, -1),
                target
            ];
        });
    };
    const de = ()=>{
        LRef.current.delete(Ce);
        navigation.navigate({
            direction: "pop",
            landing: {
                kind: "none"
            }
        });
        if (R?.kind === "category-filter" && R.returnSearch != null) {
            setP(R.returnSearch.query);
            C.set(Cn(C.get(), R.returnSearch.draft));
        }
        if (R?.kind === "search") {
            setP("");
            C.set(Cn(C.get(), ""));
        }
        setZ(er);
    };
    const ge = (v)=>{
        LRef.current.delete("list:true");
        if (w && V == null) {
            navigation.navigate({
                direction: v ? "push" : "pop",
                landing: {
                    kind: "none"
                }
            });
        }
        setQ(v);
    };
    const keRef = r_1.useRef(null);
    const ieRef = r_1.useRef(false);
    const [fe, setFe] = r_1.useState(false);
    const MeRef = r_1.useRef(false);
    let Ae;
    if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
        Ae = (v)=>{
            MeRef.current = keRef.current != null && document.activeElement === keRef.current;
            setFe(v);
        };
        e[6] = Ae;
    } else {
        Ae = e[6];
    }
    const xe = Ae;
    let Te;
    if (e[7] === Symbol.for("react.memo_cache_sentinel")) {
        Te = ()=>{
            if (MeRef.current) {
                MeRef.current = false;
                keRef.current?.focus({
                    preventScroll: true
                });
            }
        };
        e[7] = Te;
    } else {
        Te = e[7];
    }
    u_2(Te);
    let Ke;
    if (e[8] !== Y) {
        Ke = ()=>{
            if (!(!Y || !ieRef.current)) {
                ieRef.current = false;
                keRef.current?.focus({
                    preventScroll: true
                });
            }
        };
        e[8] = Y;
        e[9] = Ke;
    } else {
        Ke = e[9];
    }
    u_2(Ke);
    let Ee;
    if (e[10] === Symbol.for("react.memo_cache_sentinel")) {
        Ee = ()=>{
            const keRef_current = keRef.current;
            if (keRef_current != null) {
                keRef_current.focus();
                keRef_current.select();
            }
        };
        e[10] = Ee;
    } else {
        Ee = e[10];
    }
    const Be = Ee;
    const { platform } = fh();
    const Qe = platform === "darwin";
    let Ue;
    if (e[11] !== Qe) {
        Ue = kf("mod+f", Qe);
        e[11] = Qe;
        e[12] = Ue;
    } else {
        Ue = e[12];
    }
    let Ge;
    let Ve;
    let Fe;
    if (e[13] === Symbol.for("react.memo_cache_sentinel")) {
        Ge = (v)=>{
            v.preventDefault();
            Be();
        };
        Ve = {
            enableOnFormTags: true,
            preventDefault: true
        };
        Fe = [
            Be
        ];
        e[13] = Ge;
        e[14] = Ve;
        e[15] = Fe;
    } else {
        Ge = e[13];
        Ve = e[14];
        Fe = e[15];
    }
    k_1(Ue, Ge, Ve, Fe);
    const _e = (v)=>{
        if (v.key !== "Escape") {
            return;
        }
        v.preventDefault();
        v.stopPropagation();
        const B = C.get();
        if (w && B.isOpen) {
            C.update(to);
            return;
        }
        if (Y) {
            de();
            return;
        }
        if (P.length > 0 || B.text.length > 0) {
            setP("");
            C.set(Cn(B, ""));
            return;
        }
        keRef.current?.blur();
    };
    const { catalog, isLoading } = c$();
    const [We, setWe] = r_1.useState(null);
    if (p != null && We !== p) {
        setWe(p);
        setQ(true);
        setZ([
            {
                kind: "skill",
                workflowId: p
            }
        ]);
    }
    const [ss, setSs] = r_1.useState(null);
    if (y != null && ss !== y) {
        setSs(y);
        setQ(true);
        setZ([
            {
                kind: "installed",
                serverId: y
            }
        ]);
    }
    const [U, setU] = r_1.useState(null);
    if (h != null && U !== h) {
        setU(h);
        setQ(false);
        setP(h);
        setC(c_2(Cn(C.get(), h)));
        setF(null);
        setZ([]);
    }
    const [se, setSe] = r_1.useState(null);
    const ze = k == null ? null : Go(k, catalog);
    if (k != null && ze != null && se !== k.arrival) {
        setSe(k.arrival);
        setQ(false);
        setZ([
            {
                kind: "plugin",
                entryId: ze,
                startConnecting: k.kind === "id" && k.startConnecting === true
            }
        ]);
    }
    const [Xe, setXe] = r_1.useState(null);
    if (b != null && Xe !== b.arrival) {
        setXe(b.arrival);
        setQ(false);
        setZ([
            {
                kind: "bot",
                botSlug: b.botSlug
            }
        ]);
    }
    const { mcp, credentials, grokBotEmailInbox } = b7();
    let Hs;
    if (e[16] !== mcp) {
        Hs = ()=>mcp.retainServers({
                pollIntervalMs,
                reuseFreshRead: true
            });
        e[16] = mcp;
        e[17] = Hs;
    } else {
        Hs = e[17];
    }
    i_2(Hs);
    aU(credentials.load);
    const Dn = bT();
    let Ys;
    if (e[18] !== Dn) {
        Ys = ()=>{
            for (const v of Object.values(kg)){
                Dn(v);
            }
            return Jo;
        };
        e[18] = Dn;
        e[19] = Ys;
    } else {
        Ys = e[19];
    }
    i_2(Ys);
    const Vn = b9(kg.email);
    let Zs;
    if (e[20] !== grokBotEmailInbox || e[21] !== Vn) {
        Zs = ()=>{
            if (Vn) {
                grokBotEmailInbox.load();
            }
            return Xo;
        };
        e[20] = grokBotEmailInbox;
        e[21] = Vn;
        e[22] = Zs;
    } else {
        Zs = e[22];
    }
    i_2(Zs);
    const Un = u_6();
    const { state, refetch } = cs();
    const bs = c_(cZ(agentId), []);
    const Tl = fd();
    const { plugins } = cS();
    const { counts } = ff();
    const authBlocked = kh();
    const corpus = Wo(catalog, isLoading, w);
    const Qs_catalog = corpus.catalog;
    const $l = state?.servers ?? [];
    const Wn = new Map;
    for (const v of $l){
        const B = Wn.get(v.id);
        if (B == null || B.accountKey !== ee_1 && v.accountKey === ee_1) {
            Wn.set(v.id, v);
        }
    }
    const servers = [
        ...Wn.values()
    ];
    const Xs = new Map;
    for (const v of state?.servers ?? []){
        const B = Xs.get(v.id);
        if (B == null) {
            Xs.set(v.id, [
                v
            ]);
        } else {
            B.push(v);
        }
    }
    for (const v of Xs.values()){
        v.sort(Qo);
    }
    const accountGroups = Xs;
    const Rt = new Map;
    for (const v of plugins){
        Rt.set(v.pluginId, v);
    }
    const effectivePluginsById = Rt;
    const installedByKey = jW(servers);
    const Je = y_1(_, {
        catalog: Qs_catalog,
        teamInstallCounts: counts,
        query: P,
        detail: V,
        legacySectionKey: F,
        isUnified: w
    });
    const installedItems = ul(servers, catalog, plugins, cl(catalog, Un));
    const resolveServerIcon = Tl.buildServerIconResolver(catalog);
    let en;
    if (e[23] !== _ || e[24] !== catalog) {
        en = (v)=>D_3(_, v, catalog);
        e[23] = _;
        e[24] = catalog;
        e[25] = en;
    } else {
        en = e[25];
    }
    const resolveServerSubtitle = en;
    let onOpenSetup;
    if (e[26] !== re) {
        onOpenSetup = (v)=>re({
                kind: "setup",
                entryId: v
            });
        e[26] = re;
        e[27] = onOpenSetup;
    } else {
        onOpenSetup = e[27];
    }
    const ns = useDo({
        agentId,
        catalog,
        servers,
        accountGroups,
        effectivePluginsById,
        skills: bs,
        refetchServers: refetch,
        onNotice,
        onOpenSetup,
        onCloseDetail: de
    });
    const { isBusy, pendingAddKey, stagedSetup, accountActions } = ns;
    let nn;
    if (e[28] !== re) {
        nn = (v)=>{
            re({
                kind: "plugin",
                entryId: v
            });
        };
        e[28] = re;
        e[29] = nn;
    } else {
        nn = e[29];
    }
    const onOpenPlugin = nn;
    let tn;
    if (e[30] !== re) {
        tn = (serverId)=>{
            re({
                kind: "installed",
                serverId
            });
        };
        e[30] = re;
        e[31] = tn;
    } else {
        tn = e[31];
    }
    const onOpenServer = tn;
    if (V?.kind === "skill") {
        const v = bs.find((B)=>B.id === V.workflowId);
        if (v != null && !z_1(v)) {
            setZ((B)=>B.filter((X)=>X !== V));
        }
    }
    const rows = {
        servers,
        installedByKey,
        effectivePluginsById,
        nativeInstalled: Un,
        isBusy,
        pendingAddKey,
        onAdd: ns.add,
        onAuthenticate: ns.authenticate,
        onOpenPlugin
    };
    const DtComponent = (v, B, X)=>{
        const startConnecting = X === undefined ? false : X;
        const nativeId = cv(v.native);
        if (nativeId != null) {
            return <PlComponent entry={v} nativeId={nativeId} onNotice={onNotice} startConnecting={startConnecting}/>;
        }
        const je = ro(installedItems, v.id);
        const Se = jX(v, servers, installedByKey, effectivePluginsById);
        const Se_grokTwin = Se.grokTwin;
        const rt = B != null && B.id === Se_grokTwin?.id ? Se.server : B ?? Se.server;
        const Mn = Se.server ?? B;
        const Dl = B != null && B.id === Mn?.id;
        const installedServer = Mn?.servedBy === "grok" || !Se.isInstalled && !Dl && Mn?.cursorScmProvider == null ? undefined : Mn;
        const Yt = rt == null ? [] : accountGroups.get(rt.id) ?? [
            rt
        ];
        const accountSlots = (Se_grokTwin == null ? Yt : [
            ...Yt,
            {
                ...Se_grokTwin,
                accountKey
            }
        ]).filter(Zo);
        const Zt = effectivePluginsById.get(v.id);
        const Qt = Zt?.unpublishableFromTeamId != null;
        const isPublishedByViewer = Qt && (Zt?.isPublishedByViewer === true || bs.some((ct)=>ct.source === "plugin" && ct.pluginId === v.id && ct.publishedByCurrentUser));
        return <Bl1Component accountActions={accountActions} accountSlots={accountSlots} entry={v} installedPlugin={Se.plugin} installedServer={installedServer} installMode={Se.plugin != null ? null : je?.installMode ?? null} isAddPending={pendingAddKey === m(v.id)} isBusy={isBusy} isPublishedByViewer={isPublishedByViewer} onAdd={ns.add} onUninstall={ns.uninstall} onUninstallPlugin={ns.uninstallPlugin} {...je != null && (v.fields?.length ?? 0) > 0 ? {
            onEditSetup: ()=>ns.editSetup(je)
        } : {}} {...Qt ? {
            onUnpublish: ()=>ns.unpublishPlugin(v)
        } : {}}/>;
    };
    const VtComponent = (v)=>{
        switch(v.kind){
            case "search":
            case "category-filter":
            case "plugin-section":
                return null;
            case "bot":
                return <QaComponent botSlug={v.botSlug} onAdd={onAddBot}/>;
            case "plugin":
                {
                    const B = catalog.find((X)=>X.id === v.entryId);
                    if (B == null) {
                        return null;
                    }
                    return DtComponent(B, undefined, v.startConnecting === true);
                }
            case "installed":
                {
                    const B = servers.find((Ie)=>Ie.id === v.serverId);
                    if (B == null) {
                        return null;
                    }
                    const X = f_1(B, catalog);
                    if (X != null) {
                        return DtComponent(X, B);
                    }
                    return <Xl1Component accountActions={accountActions} accountSlots={accountGroups.get(B.id) ?? [
                        B
                    ]} icon={resolveServerIcon(B.name, B.url)} isBusy={isBusy} onUninstall={ns.uninstall} server={B}/>;
                }
            case "setup":
                {
                    if (stagedSetup == null || stagedSetup.entryId !== v.entryId) {
                        return null;
                    }
                    const B = catalog.find((X)=>X.id === v.entryId);
                    if (B == null) {
                        return null;
                    }
                    return <SlComponent title={B.displayName} configuredKeys={stagedSetup.configuredKeys} fields={stagedSetup.fields} unsupportedFieldKeys={stagedSetup.unsupportedFieldKeys} initialValues={stagedSetup.initialValues} intro={stagedSetup.mode === "install" ? __1({
                        id: "lI611B",
                        values: {
                            0: B.displayName
                        }
                    }) : __1({
                        id: "xjb7gZ",
                        values: {
                            0: B.displayName
                        }
                    })} isBusy={isBusy} onSubmit={ns.submitSetup} submitLabel={stagedSetup.mode === "install" ? __1({
                        id: "3nLdaX",
                        values: {
                            0: B.displayName
                        }
                    }) : __1({
                        id: "NQPY4Z"
                    })}/>;
                }
            case "skill":
                {
                    const skill = bs.find((X)=>X.id === v.workflowId);
                    if (skill == null || !z_1(skill)) {
                        return null;
                    }
                    return <LComponent agentId={agentId} onClosed={de} onNotice={onNotice} onSkillMoved={(X)=>Pe({
                            kind: "skill",
                            workflowId: X
                        })} skill={skill}/>;
                }
        }
    };
    const Kl = V == null ? null : VtComponent(V);
    const Ut = V != null && (Kl != null || R != null);
    const El = (serverId)=>{
        const B = servers.find((X)=>X.id === serverId);
        if (B == null) {
            return null;
        }
        return f_1(B, catalog)?.displayName ?? B.name;
    };
    const Ll = (v)=>{
        switch(v.kind){
            case "search":
            case "category-filter":
            case "plugin-section":
                return C_1(v);
            case "bot":
                return null;
            case "plugin":
            case "setup":
                return catalog.find((B)=>B.id === v.entryId)?.displayName ?? null;
            case "installed":
                return El(v.serverId);
            case "skill":
                return bs.find((B)=>B.id === v.workflowId)?.name ?? null;
        }
    };
    const Yn = V == null ? null : Ll(V);
    const Fl = w && !q && (V == null || Y);
    const compact = Ut || Fl || le;
    const Zn = gt(current);
    let an;
    if (e[32] !== compact || e[33] !== paneSettled || e[34] !== Zn) {
        an = {
            compact,
            paneKey: Zn,
            paneSettled,
            rootRef: JRef
        };
        e[32] = compact;
        e[33] = paneSettled;
        e[34] = Zn;
        e[35] = an;
    } else {
        an = e[35];
    }
    const ts = useVd(an);
    const { observeHeroTitle } = ts;
    let ln;
    if (e[36] !== observeHeroTitle || e[37] !== LRef) {
        ln = (v, B)=>(X)=>{
                const Ie = X?.viewportElement;
                if (Ie == null) {
                    return;
                }
                const LRef_current = LRef.current;
                Ie.scrollTop = LRef_current.get(v) ?? 0;
                const je = B.hero ? observeHeroTitle(X) : undefined;
                if (!B.track) {
                    return je;
                }
                const Se = ()=>{
                    LRef_current.set(v, Ie.scrollTop);
                };
                Ie.addEventListener("scroll", Se, {
                    passive: true
                });
                return ()=>{
                    Ie.removeEventListener("scroll", Se);
                    je?.();
                };
            };
        e[36] = observeHeroTitle;
        e[37] = LRef;
        e[38] = ln;
    } else {
        ln = e[38];
    }
    const dn = ln;
    let on;
    if (e[39] !== _ || e[40] !== w || e[41] !== Je || e[42] !== re) {
        on = (sectionKey)=>{
            if (!w) {
                setF(sectionKey);
                return;
            }
            re({
                kind: "plugin-section",
                sectionKey,
                title: n_1(_, sectionKey, Je.sectionOptions)
            });
        };
        e[39] = _;
        e[40] = w;
        e[41] = Je;
        e[42] = re;
        e[43] = on;
    } else {
        on = e[43];
    }
    const onSelectSection = on;
    let rn;
    if (e[44] !== Y || e[45] !== de || e[46] !== re || e[47] !== Pe || e[48] !== C) {
        rn = ()=>{
            const text = C.get().text;
            const query = text.trim();
            setP(text);
            C.update(wt);
            if (query.length === 0) {
                if (Y) {
                    de();
                }
                return;
            }
            const X = {
                kind: "search",
                query
            };
            if (Y) {
                Pe(X);
            } else {
                ieRef.current = true;
                re(X);
            }
        };
        e[44] = Y;
        e[45] = de;
        e[46] = re;
        e[47] = Pe;
        e[48] = C;
        e[49] = rn;
    } else {
        rn = e[49];
    }
    const Xn = rn;
    let cn;
    if (e[50] !== Y || e[51] !== re || e[52] !== P || e[53] !== C) {
        cn = (v)=>{
            keRef.current?.blur();
            const returnSearch = Y ? {
                query: P,
                draft: P
            } : undefined;
            C.set(dl);
            setP("");
            re({
                kind: "category-filter",
                filterKey: v.key,
                title: v.label,
                ...returnSearch == null ? {} : {
                    returnSearch
                }
            });
        };
        e[50] = Y;
        e[51] = re;
        e[52] = P;
        e[53] = C;
        e[54] = cn;
    } else {
        cn = e[54];
    }
    const onSelectCategory = cn;
    let fn;
    if (e[55] !== onOpenPlugin || e[56] !== onSelectCategory || e[57] !== C) {
        fn = (v)=>{
            if (v.kind === "category") {
                onSelectCategory(v.category);
                return;
            }
            keRef.current?.blur();
            C.update(wt);
            onOpenPlugin(v.entry.id);
        };
        e[55] = onOpenPlugin;
        e[56] = onSelectCategory;
        e[57] = C;
        e[58] = fn;
    } else {
        fn = e[58];
    }
    const onActivate = fn;
    const et = u_3();
    const listboxId = r_1.useId();
    let js;
    if (e[59] !== __1) {
        js = __1({
            id: "S4qZX0"
        });
        e[59] = __1;
        e[60] = js;
    } else {
        js = e[60];
    }
    let Ss;
    if (e[61] !== __1) {
        Ss = __1({
            id: "S4qZX0"
        });
        e[61] = __1;
        e[62] = Ss;
    } else {
        Ss = e[62];
    }
    let onClear;
    if (e[63] !== Y || e[64] !== de) {
        onClear = ()=>{
            if (Y) {
                de();
                return;
            }
            setP("");
        };
        e[63] = Y;
        e[64] = de;
        e[65] = onClear;
    } else {
        onClear = e[65];
    }
    let onFocus;
    if (e[66] !== Y || e[67] !== P || e[68] !== C) {
        onFocus = ()=>{
            const v = C.get().text.trim();
            v.length !== 0 && (Y && v === P.trim() || C.update(no));
        };
        e[66] = Y;
        e[67] = P;
        e[68] = C;
        e[69] = onFocus;
    } else {
        onFocus = e[69];
    }
    let mn;
    if (e[70] !== _e || e[71] !== C || e[72] !== Xn || e[73] !== js || e[74] !== Ss || e[75] !== onClear || e[76] !== onFocus) {
        mn = {
            search: C,
            label: js,
            placeholder: Ss,
            onClear,
            onFocus,
            onKeyDown: _e,
            onSubmit: Xn
        };
        e[70] = _e;
        e[71] = C;
        e[72] = Xn;
        e[73] = js;
        e[74] = Ss;
        e[75] = onClear;
        e[76] = onFocus;
        e[77] = mn;
    } else {
        mn = e[77];
    }
    const is = mn;
    let pn;
    if (e[78] !== onActivate || e[79] !== listboxId || e[80] !== corpus || e[81] !== et) {
        pn = {
            ...et,
            corpus,
            listboxId,
            onActivate
        };
        e[78] = onActivate;
        e[79] = listboxId;
        e[80] = corpus;
        e[81] = et;
        e[82] = pn;
    } else {
        pn = e[82];
    }
    const suggest = pn;
    const ms = V == null && fe;
    let hn;
    if (e[83] !== is || e[84] !== suggest) {
        hn = <NComponent {...is} canOpen compact inputRef={keRef} suggest={suggest}/>;
        e[83] = is;
        e[84] = suggest;
        e[85] = hn;
    } else {
        hn = e[85];
    }
    const search = hn;
    const canOpen = !ms;
    const inputRef = ms ? undefined : keRef;
    let gn;
    if (e[86] !== is || e[87] !== suggest || e[88] !== canOpen || e[89] !== inputRef) {
        gn = <NComponent {...is} canOpen={canOpen} compact={false} inputRef={inputRef} suggest={suggest}/>;
        e[86] = is;
        e[87] = suggest;
        e[88] = canOpen;
        e[89] = inputRef;
        e[90] = gn;
    } else {
        gn = e[90];
    }
    const at = gn;
    let yn;
    if (e[91] !== is) {
        yn = <NComponent {...is} canOpen={false} compact={false} inputRef={undefined} suggest={undefined}/>;
        e[91] = is;
        e[92] = yn;
    } else {
        yn = e[92];
    }
    const lt = yn;
    let gs;
    e: {
        if (V?.kind === "bot") {
            let oe;
            if (e[93] !== headingId || e[94] !== de) {
                oe = <Ft1 headingId={headingId} onBack={de} title={null}/>;
                e[93] = headingId;
                e[94] = de;
                e[95] = oe;
            } else {
                oe = e[95];
            }
            let je;
            if (e[96] !== V.botSlug) {
                je = <ZaComponent botSlug={V.botSlug}/>;
                e[96] = V.botSlug;
                e[97] = je;
            } else {
                je = e[97];
            }
            let Se;
            if (e[98] !== oe || e[99] !== je) {
                Se = <>{oe}{je}</>;
                e[98] = oe;
                e[99] = je;
                e[100] = Se;
            } else {
                Se = e[100];
            }
            gs = Se;
            break e;
        }
        if (Y && w) {
            let oe;
            if (e[101] !== search || e[102] !== de) {
                oe = <El1Component onBack={de} search={search}/>;
                e[101] = search;
                e[102] = de;
                e[103] = oe;
            } else {
                oe = e[103];
            }
            gs = oe;
            break e;
        }
        if (V != null && Ut) {
            const oe = V.kind === "skill" || ts.heroTitle === "none" ? undefined : ts.heroTitle === "hidden";
            let je;
            if (e[104] !== Yn || e[105] !== headingId || e[106] !== de || e[107] !== oe) {
                je = <Ft1 headingId={headingId} isTitleVisible={oe} onBack={de} title={Yn}/>;
                e[104] = Yn;
                e[105] = headingId;
                e[106] = de;
                e[107] = oe;
                e[108] = je;
            } else {
                je = e[108];
            }
            gs = je;
            break e;
        }
        if (le) {
            let backLabel;
            if (e[109] !== __1) {
                backLabel = __1({
                    id: "Zt5PUS"
                });
                e[109] = __1;
                e[110] = backLabel;
            } else {
                backLabel = e[110];
            }
            const je = ts.heroTitle === "hidden";
            let onBack;
            if (e[111] !== ge) {
                onBack = ()=>ge(false);
                e[111] = ge;
                e[112] = onBack;
            } else {
                onBack = e[112];
            }
            let as;
            if (e[113] !== __1) {
                as = __1({
                    id: "wckWOP"
                });
                e[113] = __1;
                e[114] = as;
            } else {
                as = e[114];
            }
            let $s;
            if (e[115] !== headingId || e[116] !== backLabel || e[117] !== je || e[118] !== onBack || e[119] !== as) {
                $s = <Ft1 backLabel={backLabel} headingId={headingId} isTitleVisible={je} onBack={onBack} title={as}/>;
                e[115] = headingId;
                e[116] = backLabel;
                e[117] = je;
                e[118] = onBack;
                e[119] = as;
                e[120] = $s;
            } else {
                $s = e[120];
            }
            gs = $s;
            break e;
        }
        if (w) {
            let oe;
            if (e[121] !== search || e[122] !== ms) {
                oe = <JaComponent search={search} showSearch={ms}/>;
                e[121] = search;
                e[122] = ms;
                e[123] = oe;
            } else {
                oe = e[123];
            }
            gs = oe;
            break e;
        }
        let onBackToMarketplace;
        let onOpenYours;
        if (e[124] !== ge) {
            onBackToMarketplace = ()=>ge(false);
            onOpenYours = ()=>ge(true);
            e[124] = ge;
            e[125] = onBackToMarketplace;
            e[126] = onOpenYours;
        } else {
            onBackToMarketplace = e[125];
            onOpenYours = e[126];
        }
        let X;
        if (e[127] !== __1 || e[128] !== title) {
            X = title ?? __1({
                id: "ohUJJM"
            });
            e[127] = __1;
            e[128] = title;
            e[129] = X;
        } else {
            X = e[129];
        }
        let Ie;
        if (e[130] !== _e || e[131] !== headingId || e[132] !== installedItems || e[133] !== q || e[134] !== Je.sectionOptions || e[135] !== Je.selectedSectionKey || e[136] !== P || e[137] !== resolveServerIcon || e[138] !== onBackToMarketplace || e[139] !== onOpenYours || e[140] !== X) {
            Ie = <Rl1Component headingId={headingId} installedItems={installedItems} isYoursOpen={q} onBackToMarketplace={onBackToMarketplace} onOpenYours={onOpenYours} onQueryChange={setP} onSearchKeyDown={_e} onSelectSection={setF} query={P} resolveServerIcon={resolveServerIcon} searchInputRef={keRef} sectionOptions={Je.sectionOptions} selectedSectionKey={Je.selectedSectionKey} title={X}/>;
            e[130] = _e;
            e[131] = headingId;
            e[132] = installedItems;
            e[133] = q;
            e[134] = Je.sectionOptions;
            e[135] = Je.selectedSectionKey;
            e[136] = P;
            e[137] = resolveServerIcon;
            e[138] = onBackToMarketplace;
            e[139] = onOpenYours;
            e[140] = X;
            e[141] = Ie;
        } else {
            Ie = e[141];
        }
        gs = Ie;
    }
    const kn = gs;
    let onExpandInstalled;
    if (e[142] === Symbol.for("react.memo_cache_sentinel")) {
        onExpandInstalled = ()=>setT(true);
        e[142] = onExpandInstalled;
    } else {
        onExpandInstalled = e[142];
    }
    let onFixFailed;
    if (e[143] !== __1 || e[144] !== onNotice) {
        onFixFailed = (message)=>onNotice({
                kind: "error",
                text: __1({
                    id: "BGZNuY",
                    values: {
                        message
                    }
                })
            });
        e[143] = __1;
        e[144] = onNotice;
        e[145] = onFixFailed;
    } else {
        onFixFailed = e[145];
    }
    let onFixHandedOff;
    if (e[146] !== onCloseSettings) {
        onFixHandedOff = ()=>onCloseSettings?.();
        e[146] = onCloseSettings;
        e[147] = onFixHandedOff;
    } else {
        onFixHandedOff = e[147];
    }
    let onOpenSkill;
    if (e[148] !== re) {
        onOpenSkill = (v)=>re({
                kind: "skill",
                workflowId: v
            });
        e[148] = re;
        e[149] = onOpenSkill;
    } else {
        onOpenSkill = e[149];
    }
    const Wt = <Fl1Component agentId={agentId} authBlocked={authBlocked} catalog={catalog} effectivePlugins={plugins} isBusy={isBusy} isInstalledExpanded={T} nativeInstalled={Un} onAuthenticate={ns.authenticate} onExpandInstalled={onExpandInstalled} onFixFailed={onFixFailed} onFixHandedOff={onFixHandedOff} onOpenPlugin={onOpenPlugin} onOpenServer={onOpenServer} onOpenSkill={onOpenSkill} query={P} resolveServerIcon={resolveServerIcon} resolveServerSubtitle={resolveServerSubtitle} servers={servers} showTitle={w} skills={bs}/>;
    let Sn;
    if (e[150] !== Z || e[151] !== w || e[152] !== P) {
        Sn = w && Z.some(Yo) ? "" : P;
        e[150] = Z;
        e[151] = w;
        e[152] = P;
        e[153] = Sn;
    } else {
        Sn = e[153];
    }
    const wn = Sn;
    let In;
    if (e[154] !== wn) {
        In = (v)=>{
            if (v == null) {
                return wn;
            }
            if (v.kind === "search") {
                return v.query;
            }
            return "";
        };
        e[154] = wn;
        e[155] = In;
    } else {
        In = e[155];
    }
    const Nn = In;
    let _n;
    if (e[156] !== _ || e[157] !== Qs_catalog || e[158] !== V || e[159] !== w || e[160] !== F || e[161] !== Je || e[162] !== Nn || e[163] !== counts) {
        _n = (detail)=>{
            if (detail === V) {
                return Je;
            }
            return y_1(_, {
                catalog: Qs_catalog,
                teamInstallCounts: counts,
                query: Nn(detail),
                detail,
                legacySectionKey: F,
                isUnified: w
            });
        };
        e[156] = _;
        e[157] = Qs_catalog;
        e[158] = V;
        e[159] = w;
        e[160] = F;
        e[161] = Je;
        e[162] = Nn;
        e[163] = counts;
        e[164] = _n;
    } else {
        _n = e[164];
    }
    const it = _n;
    const ZnComponent = (model, query)=><Vl1Component catalog={Qs_catalog} isCatalogLoading={isLoading} model={model} onSelectCategory={onSelectCategory} onSelectSection={onSelectSection} query={query} rows={rows} teamInstallCounts={counts}/>;
    let Pn;
    if (e[165] !== __1 || e[166] !== xe || e[167] !== headingId || e[168] !== installedItems || e[169] !== lt || e[170] !== at || e[171] !== ZnComponent || e[172] !== resolveServerIcon || e[173] !== ms || e[174] !== ge || e[175] !== title) {
        Pn = (v, B, X, Ie)=><XaComponent groups={ZnComponent(X, Ie)} headingId={v ? headingId : undefined} hidePageSearch={!v} onSearchLifted={v && B ? xe : undefined} search={B ? at : lt} searchInNav={ms} title={v ? title ?? __1({
                id: "ohUJJM"
            }) : undefined} titleTrailing={v ? <BtComponent installedItems={installedItems} onOpen={()=>ge(true)} resolveServerIcon={resolveServerIcon}/> : undefined}/>;
        e[165] = __1;
        e[166] = xe;
        e[167] = headingId;
        e[168] = installedItems;
        e[169] = lt;
        e[170] = at;
        e[171] = ZnComponent;
        e[172] = resolveServerIcon;
        e[173] = ms;
        e[174] = ge;
        e[175] = title;
        e[176] = Pn;
    } else {
        Pn = e[176];
    }
    const Ht = Pn;
    const dt = (v)=>{
        const B = it(null);
        let X;
        if (w) {
            X = Ht(true, v, B, wn);
        } else if (q) {
            X = Wt;
        } else {
            X = <EsComponent isLoading={isLoading} items={B.browseItems} layout="plugins" onSelectSection={onSelectSection} query={P} rows={rows} selectedSectionKey={B.selectedSectionKey}/>;
        }
        return <S_2 key={ue({
            kind: "front"
        })} ref={dn(ue({
            kind: "front"
        }), {
            track: v,
            hero: false
        })}>{X}</S_2>;
    };
    const OtComponent = (v, B)=>{
        if (v.kind === "manage") {
            return <S_2 key="list:true" ref={dn("list:true", {
                track: B,
                hero: true
            })}>{Wt}</S_2>;
        }
        if (v.kind === "detail") {
            const X = VtComponent(v.target);
            if (v.target.kind === "skill" || v.target.kind === "bot") {
                return X ?? dt(B);
            }
            const Ie = ue(v);
            if (v.target.kind === "search" && w) {
                return <S_2 key={Ie} ref={dn(Ie, {
                    track: B,
                    hero: false
                })}>{Ht(false, B, it(v.target), v.target.query)}</S_2>;
            }
            const oe = X ?? (x_3(v.target) ? ZnComponent(it(v.target), Nn(v.target)) : null);
            if (oe == null) {
                return dt(B);
            }
            return <S_2 key={Ie} ref={dn(Ie, {
                track: B,
                hero: true
            })}>{oe}</S_2>;
        }
        return dt(B);
    };
    let An;
    if (e[177] === Symbol.for("react.memo_cache_sentinel")) {
        An = r_2("sand-plugins", "sand-9f619 sand-78zum5 sand-1iyjqo2 sand-s83m0k sand-dl72j9 sand-dt5ytf sand-2lwn1j");
        e[177] = An;
    } else {
        An = e[177];
    }
    let zs;
    if (e[178] !== ts.compact || e[179] !== ts.lifted || e[180] !== kn || e[181] !== compact) {
        zs = compact ? <Sl1Component compact={ts.compact} lifted={ts.lifted}>{kn}</Sl1Component> : kn;
        e[178] = ts.compact;
        e[179] = ts.lifted;
        e[180] = kn;
        e[181] = compact;
        e[182] = zs;
    } else {
        zs = e[182];
    }
    let Ps;
    if (e[183] !== navigation || e[184] !== OtComponent) {
        Ps = <W_2 navigation={navigation} renderPane={OtComponent} style={Uo.stage} variant="crossfade"/>;
        e[183] = navigation;
        e[184] = OtComponent;
        e[185] = Ps;
    } else {
        Ps = e[185];
    }
    let qn;
    if (e[186] !== zs || e[187] !== Ps) {
        qn = <div className={An} ref={JRef}>{zs}{Ps}</div>;
        e[186] = zs;
        e[187] = Ps;
        e[188] = qn;
    } else {
        qn = e[188];
    }
    return qn;
}
function Yo(n) {
    return n.kind === "search";
}
function Zo(n) {
    return n.rowServerIdentifier !== connector && n.id !== k2;
}
function Qo(n, e) {
    return (n.accountKey === ee_1 ? 0 : 1) - (e.accountKey === ee_1 ? 0 : 1);
}
function Xo() {}
function Jo() {}
function er(n) {
    return n.slice(0, -1);
}
function resolveFocus() {
    return null;
}
function nr() {
    return c_2(dl);
}
function tr(n) {
    return (n.serverIdentifier === connector || n.serverId === k2) && n.outcome === "cancelled";
}
const ar = {
    closeFloating: {
        kVAEAm: "sand-10l6tqk",
        k87sOh: "sand-1eu8d0j",
        kt4wiu: "sand-o2ifbc",
        kY2c9j: "sand-zkaem6",
        $$css: true
    }
};
const headingId = "sand-plugins-modal-heading";
function Ql1Component(n) {
    Ql1Component.d = 1214;
    const e = c_1.c(41);
    const { agentId, presentation, isOpen, focusSkillId, focusServerId, focusBrowseQuery, focusPlugin, marketplaceFocus, onAddBot, onClose } = n;
    const m = focusSkillId === undefined ? null : focusSkillId;
    const g = focusServerId === undefined ? null : focusServerId;
    const p = focusBrowseQuery === undefined ? null : focusBrowseQuery;
    const y = focusPlugin === undefined ? null : focusPlugin;
    const h = marketplaceFocus === undefined ? null : marketplaceFocus;
    const { _: __1 } = u_1();
    const bRef = r_1.useRef(null);
    const [I, setI] = r_1.useState(null);
    let j;
    if (e[0] !== h) {
        j = h?.kind === "plugin" ? {
            kind: "name",
            pluginName: h.pluginName,
            arrival: h.arrival
        } : null;
        e[0] = h;
        e[1] = j;
    } else {
        j = e[1];
    }
    const x = y ?? j;
    const _ = m != null || g != null || p != null;
    const focusBot = h?.kind === "bot" ? h : null;
    let w;
    if (e[2] !== onClose) {
        w = (J)=>{
            if (!J) {
                onClose();
            }
        };
        e[2] = onClose;
        e[3] = w;
    } else {
        w = e[3];
    }
    const q = w;
    let A;
    if (e[4] !== __1) {
        A = __1({
            id: "Zt5PUS"
        });
        e[4] = __1;
        e[5] = A;
    } else {
        A = e[5];
    }
    let T;
    if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
        T = r_2("sand-plugins-dialog", "sand-h6vr4k sand-1gy1zxj sand-1717udv");
        e[6] = T;
    } else {
        T = e[6];
    }
    let M;
    if (e[7] === Symbol.for("react.memo_cache_sentinel")) {
        M = r_2("sand-plugins-layout", "sand-9f619 sand-1n2onr6 sand-78zum5 sand-dt5ytf sand-z03ioa sand-2lwn1j sand-7giv3");
        e[7] = M;
    } else {
        M = e[7];
    }
    let P;
    if (e[8] !== __1) {
        P = __1({
            id: "yz7wBu"
        });
        e[8] = __1;
        e[9] = P;
    } else {
        P = e[9];
    }
    let K;
    if (e[10] !== onClose || e[11] !== P) {
        K = <At aria-label={P} className="sand-plugins-dialog__close" icon="close" onClick={onClose} shape="circle" size="md" style={ar.closeFloating}/>;
        e[10] = onClose;
        e[11] = P;
        e[12] = K;
    } else {
        K = e[12];
    }
    const browseLayout = _ ? "section" : "marketplace-frame";
    let D;
    if (e[13] !== __1) {
        D = __1({
            id: "Zt5PUS"
        });
        e[13] = __1;
        e[14] = D;
    } else {
        D = e[14];
    }
    let F;
    if (e[15] !== agentId || e[16] !== x || e[17] !== focusBot || e[18] !== p || e[19] !== g || e[20] !== m || e[21] !== onAddBot || e[22] !== onClose || e[23] !== browseLayout || e[24] !== D) {
        F = <AlComponent agentId={agentId} browseLayout={browseLayout} focusBot={focusBot} focusBrowseQuery={p} focusPlugin={x} focusServerId={g} focusSkillId={m} headingId={headingId} onAddBot={onAddBot} onCloseSettings={onClose} onNotice={setI} title={D}/>;
        e[15] = agentId;
        e[16] = x;
        e[17] = focusBot;
        e[18] = p;
        e[19] = g;
        e[20] = m;
        e[21] = onAddBot;
        e[22] = onClose;
        e[23] = browseLayout;
        e[24] = D;
        e[25] = F;
    } else {
        F = e[25];
    }
    let G;
    if (e[26] === Symbol.for("react.memo_cache_sentinel")) {
        G = ()=>setI(null);
        e[26] = G;
    } else {
        G = e[26];
    }
    let W;
    if (e[27] !== I) {
        W = <Zi notice={I} onDismiss={G}/>;
        e[27] = I;
        e[28] = W;
    } else {
        W = e[28];
    }
    let Z;
    if (e[29] !== K || e[30] !== F || e[31] !== W) {
        Z = <div className={M}>{K}{F}{W}</div>;
        e[29] = K;
        e[30] = F;
        e[31] = W;
        e[32] = Z;
    } else {
        Z = e[32];
    }
    let O;
    if (e[33] !== q || e[34] !== isOpen || e[35] !== Z || e[36] !== A) {
        O = <D_2 aria-label={A} className={T} initialFocus={bRef} onOpenChange={q} open={isOpen} ref={bRef} size="xxl">{Z}</D_2>;
        e[33] = q;
        e[34] = isOpen;
        e[35] = Z;
        e[36] = A;
        e[37] = O;
    } else {
        O = e[37];
    }
    let L;
    if (e[38] !== presentation || e[39] !== O) {
        L = <Fi presentation={presentation}>{O}</Fi>;
        e[38] = presentation;
        e[39] = O;
        e[40] = L;
    } else {
        L = e[40];
    }
    return L;
}
function MlComponent(n) {
    MlComponent.d = 1213;
    const e = c_1.c(8);
    const { params } = n;
    const a = ki();
    const d = params.marketplaceFocus?.arrival ?? "plugins";
    const r = params.focusBrowseQuery ?? null;
    const l = params.focusPlugin ?? null;
    const c = params.focusServerId ?? null;
    const i = params.focusSkillId ?? null;
    const marketplaceFocus = params.marketplaceFocus ?? null;
    let u;
    if (e[0] !== a || e[1] !== d || e[2] !== r || e[3] !== l || e[4] !== c || e[5] !== i || e[6] !== marketplaceFocus) {
        u = <Ql1Component {...a} isOpen key={d} focusBrowseQuery={r} focusPlugin={l} focusServerId={c} focusSkillId={i} marketplaceFocus={marketplaceFocus}/>;
        e[0] = a;
        e[1] = d;
        e[2] = r;
        e[3] = l;
        e[4] = c;
        e[5] = i;
        e[6] = marketplaceFocus;
        e[7] = u;
    } else {
        u = e[7];
    }
    return u;
}
const br = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: MlComponent
}, Symbol.toStringTag, {
    value: "Module"
}));
export { TtComponent as C, WoComponent as S, vr as a, ga as f, co as i, ya as p, br as v };
