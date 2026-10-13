import { c as c_1, p as p_1, T, u as u_1, r } from "./index.eager-vendor-Qbf9YA6n.js";
import { i } from "./index.eager-platform-Dcfeegfw.js";
import { a_, cj, bc, ck, cl, cm, r as r_2, Z as Z_1, aj, V, S, cn, L } from "./index.eager-app-Cj5f8Gby.js";
import { a3 as Es1, aD, aE, aF, g as En, I as I_1, B as B_1, aG, aH as Dn, aI, aJ, aK, aL as Vs, aM, aN, aO, aP, aQ, aR, aS, aT, U, aU as Vn } from "./index-ZYxf-aBb.js";
import { M } from "./chunk-member-chip-SDE-oMC0.js";
import { u as u_2 } from "./chunk-use-active-option-scroll-B1hXdW5d.js";
import { t as t_1, a, o, m } from "./chunk-team-agent-rows-BhWKSjqA.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "bd84a891-15f7-444f-8bd0-cacf25630816";
            e._sentryDebugIdIdentifier = "sentry-dbid-bd84a891-15f7-444f-8bd0-cacf25630816";
        }
    } catch (e) {}
})();
const sizePx = 32;
const fillPx = sizePx;
const Xe = {
    name: {
        k7Eaqz: "sand-euugli",
        kVQacm: "sand-b3r6kr",
        kg5iWk: "sand-lyipyv",
        khDVqt: "sand-uxw1ft",
        kMwMTN: "sand-tyxrsu",
        $$css: true
    },
    byline: {
        kmuXW: "sand-2lah0s",
        khDVqt: "sand-uxw1ft",
        kMwMTN: "sand-169k319",
        $$css: true
    },
    secondaryLine: {
        kVQacm: "sand-b3r6kr",
        kg5iWk: "sand-lyipyv",
        khDVqt: "sand-uxw1ft",
        kMwMTN: "sand-1o0liin",
        $$css: true
    },
    emptyState: {
        kLKAdn: "sand-yinxu5",
        kGO01o: "sand-1g2khh7",
        k9WMMc: "sand-2b8uid",
        kMwMTN: "sand-169k319",
        $$css: true
    }
};
function Jn(t) {
    return t.map((agent)=>({
            kind: "agent",
            agent
        }));
}
function Xs(t, e) {
    return `${t}-team-option-${e}`;
}
function QsComponent(t) {
    QsComponent.d = 1345;
    const e = c_1.c(22);
    const { options, listboxId, highlight, hasQuery, hasTeamAgents, canCreate, onActivate, onHover, activeOptionRef } = t;
    let p;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        p = <T id="D6NKnp"/>;
        e[0] = p;
    } else {
        p = e[0];
    }
    let y = p;
    if (hasTeamAgents && hasQuery) {
        let k;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            k = <T id="12i8o8"/>;
            e[1] = k;
        } else {
            k = e[1];
        }
        y = k;
    } else if (canCreate) {
        let k;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            k = <T id="o8ztiZ"/>;
            e[2] = k;
        } else {
            k = e[2];
        }
        y = k;
    }
    let x;
    if (e[3] !== activeOptionRef || e[4] !== highlight || e[5] !== listboxId || e[6] !== onActivate || e[7] !== onHover || e[8] !== options) {
        let k;
        if (e[10] !== activeOptionRef || e[11] !== highlight || e[12] !== listboxId || e[13] !== onActivate || e[14] !== onHover) {
            k = (N, g)=>{
                const S = g === highlight;
                return <button key={N.agent.id} aria-selected={S} id={Xs(listboxId, g)} onClick={()=>onActivate(g)} onMouseDown={Yn} onMouseMove={()=>onHover(g)} ref={S ? activeOptionRef : null} role="option" tabIndex={-1} type="button" {...{
                    0: {
                        className: "sand-jyslct sand-78zum5 sand-6s0dn4 sand-h8yej3 sand-9f619 sand-2lah0s sand-u0aao5 sand-1bf2k6n sand-1hc27l4 sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-c342km sand-ng3xce sand-1qmwy7c sand-jbqb8w sand-tyxrsu sand-1yc453h sand-1ypdohk sand-jb2p0i sand-1v2ro7d sand-1y1aw1k sand-pdmqnj sand-wib8y2 sand-1g0dm76"
                    },
                    1: {
                        className: "sand-jyslct sand-78zum5 sand-6s0dn4 sand-h8yej3 sand-9f619 sand-2lah0s sand-u0aao5 sand-1bf2k6n sand-1hc27l4 sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-c342km sand-ng3xce sand-1qmwy7c sand-tyxrsu sand-1yc453h sand-1ypdohk sand-jb2p0i sand-1v2ro7d sand-1y1aw1k sand-pdmqnj sand-wib8y2 sand-1g0dm76 sand-luhinc"
                    }
                }[!!S << 0]}><ZsComponent agent={N.agent}/></button>;
            };
            e[10] = activeOptionRef;
            e[11] = highlight;
            e[12] = listboxId;
            e[13] = onActivate;
            e[14] = onHover;
            e[15] = k;
        } else {
            k = e[15];
        }
        x = options.map(k);
        e[3] = activeOptionRef;
        e[4] = highlight;
        e[5] = listboxId;
        e[6] = onActivate;
        e[7] = onHover;
        e[8] = options;
        e[9] = x;
    } else {
        x = e[9];
    }
    let b;
    if (e[16] !== y || e[17] !== options.length) {
        b = options.length === 0 ? <div aria-live="polite" {...p_1(Xe.emptyState, a_.body2)} role="presentation">{y}</div> : null;
        e[16] = y;
        e[17] = options.length;
        e[18] = b;
    } else {
        b = e[18];
    }
    let v;
    if (e[19] !== x || e[20] !== b) {
        v = <>{x}{b}</>;
        e[19] = x;
        e[20] = b;
        e[21] = v;
    } else {
        v = e[21];
    }
    return v;
}
function Yn(t) {
    return t.preventDefault();
}
function ZsComponent(t) {
    ZsComponent.d = 1344;
    const e = c_1.c(31);
    const { agent } = t;
    const { _ } = u_1();
    const i = cj();
    let o;
    if (e[0] !== _ || e[1] !== agent) {
        const owner = t_1(agent);
        o = null;
        if (owner === "you") {
            let q;
            if (e[3] !== _) {
                q = _({
                    id: "ZZvRDK"
                });
                e[3] = _;
                e[4] = q;
            } else {
                q = e[4];
            }
            o = q;
        } else {
            if (owner !== null) {
                o = _({
                    id: "FiSaDn",
                    values: {
                        owner
                    }
                });
            }
        }
        e[0] = _;
        e[1] = agent;
        e[2] = o;
    } else {
        o = e[2];
    }
    let c;
    if (e[5] !== agent || e[6] !== i) {
        c = agent.description.trim() || a(agent, i);
        e[5] = agent;
        e[6] = i;
        e[7] = c;
    } else {
        c = e[7];
    }
    const title = c;
    let u;
    if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
        u = {
            className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-1td3qas sand-10w6t97 sand-2lah0s"
        };
        e[8] = u;
    } else {
        u = e[8];
    }
    let h;
    if (e[9] !== agent) {
        h = <span {...u}><Es1 agent={agent} fillPx={fillPx} isStatic size="lg"/></span>;
        e[9] = agent;
        e[10] = h;
    } else {
        h = e[10];
    }
    let m;
    let p;
    let y;
    if (e[11] === Symbol.for("react.memo_cache_sentinel")) {
        m = {
            className: "sand-78zum5 sand-dt5ytf sand-1iyjqo2 sand-s83m0k sand-euugli"
        };
        p = {
            className: "sand-78zum5 sand-1pha0wt sand-1jnr06f sand-euugli"
        };
        y = p_1(Xe.name, a_.body2);
        e[11] = m;
        e[12] = p;
        e[13] = y;
    } else {
        m = e[11];
        p = e[12];
        y = e[13];
    }
    let x;
    if (e[14] !== agent) {
        x = bc(agent);
        e[14] = agent;
        e[15] = x;
    } else {
        x = e[15];
    }
    let b;
    if (e[16] !== x) {
        b = <span {...y}>{x}</span>;
        e[16] = x;
        e[17] = b;
    } else {
        b = e[17];
    }
    let v;
    if (e[18] !== o) {
        v = o === null ? null : <span {...p_1(Xe.byline, a_.body2)}>{o}</span>;
        e[18] = o;
        e[19] = v;
    } else {
        v = e[19];
    }
    let k;
    if (e[20] !== b || e[21] !== v) {
        k = <span {...p}>{b}{v}</span>;
        e[20] = b;
        e[21] = v;
        e[22] = k;
    } else {
        k = e[22];
    }
    let N;
    if (e[23] !== title) {
        N = title.length === 0 ? null : <span {...p_1(Xe.secondaryLine, a_.body2)} title={title}>{title}</span>;
        e[23] = title;
        e[24] = N;
    } else {
        N = e[24];
    }
    let g;
    if (e[25] !== k || e[26] !== N) {
        g = <span {...m}>{k}{N}</span>;
        e[25] = k;
        e[26] = N;
        e[27] = g;
    } else {
        g = e[27];
    }
    let S;
    if (e[28] !== g || e[29] !== h) {
        S = <>{h}{g}</>;
        e[28] = g;
        e[29] = h;
        e[30] = S;
    } else {
        S = e[30];
    }
    return S;
}
const ea = {
    kmuXW: "sand-2lah0s",
    kZKoxP: "sand-16ye13r",
    $$css: true
};
const sa = {
    k87sOh: "sand-wgvhgk",
    kLqNvP: "sand-y959b9",
    kzqmXN: "sand-1kl0l3y",
    kZKoxP: "sand-158ke7r",
    kJcbqH: "sand-16fucec",
    kn1fP1: "sand-3b2oae",
    $$css: true
};
const na = 400;
const aa = 384;
const leadingOffsetPx = 6;
const Js = 36;
const Ys = 2;
const rowPitchPx = Js + Ys;
const en = 9;
const ks = typeof navigator !== "undefined" && navigator.platform.includes("Mac");
const da = ks ? "⌘" : "Ctrl";
const Fs = ks ? "Meta" : "Control";
const oa = 3;
const sn = 18;
const ringPx = 1.5;
const _ = {
    toLabel: {
        kmuXW: "sand-2lah0s",
        keoZOQ: "sand-1gslohp",
        kMwMTN: "sand-169k319",
        kfSwDN: "sand-87ps6o",
        $$css: true
    },
    input: {
        kzQI83: "sand-1iyjqo2",
        kmuXW: "sand-s83m0k",
        k7Eaqz: "sand-1d77m7x",
        kysU6D: "sand-jyslct",
        k3lkva: "sand-1lugfcp",
        kMzoRj: "sand-c342km",
        ksu8eU: "sand-ng3xce",
        kMeerF: "sand-1k57tk5",
        k3XXqK: "sand-1t137rt",
        kWkggS: "sand-jbqb8w",
        kMwMTN: "sand-tyxrsu",
        kMv6JI: "sand-jb2p0i",
        kLKAdn: "sand-exx8yu",
        kwRFfy: "sand-yri2b",
        kGO01o: "sand-18d9i69",
        kZCmMZ: "sand-1c1uobl",
        k8Qsv1: "sand-1h7ufjq",
        $$css: true
    },
    rowSpacer: (t)=>[
            ea,
            {
                "--x-height": ((e)=>{
                    if (typeof e === "number") {
                        return `${e}px`;
                    }
                    return e ?? undefined;
                })(t * rowPitchPx - Ys)
            }
        ],
    rowName: {
        kzQI83: "sand-1iyjqo2",
        kmuXW: "sand-s83m0k",
        k7Eaqz: "sand-euugli",
        kMwMTN: "sand-tyxrsu",
        kVQacm: "sand-b3r6kr",
        kg5iWk: "sand-lyipyv",
        khDVqt: "sand-uxw1ft",
        $$css: true
    },
    rowNameFit: {
        kzQI83: "sand-1c4vz4f",
        $$css: true
    },
    rowHint: {
        kmuXW: "sand-2lah0s",
        kMwMTN: "sand-169k319",
        khDVqt: "sand-uxw1ft",
        $$css: true
    },
    rowDimmed: {
        kSiTet: "sand-byyjgo",
        $$css: true
    },
    sectionNote: {
        k1xSpc: "sand-78zum5",
        kGNEyG: "sand-6s0dn4",
        kOIVth: "sand-167g77z",
        kLKAdn: "sand-1y1aw1k",
        kwRFfy: "sand-f159sx",
        kGO01o: "sand-jkvuk6",
        kZCmMZ: "sand-mzvs34",
        kMwMTN: "sand-169k319",
        $$css: true
    },
    emptyState: {
        kLKAdn: "sand-yinxu5",
        kGO01o: "sand-1g2khh7",
        k9WMMc: "sand-2b8uid",
        kMwMTN: "sand-169k319",
        $$css: true
    },
    recipientChip: {
        kZKoxP: "sand-1fgtraw",
        kZCmMZ: "sand-25sj25",
        kwRFfy: "sand-11lfxj5",
        $$css: true
    },
    teamPill: {
        kZKoxP: "sand-d7y6wv",
        kZCmMZ: "sand-e2zdcy",
        kwRFfy: "sand-2vl965",
        kaIpWk: "sand-t9pb60",
        $$css: true
    },
    footerMarkSurface: {
        kVAEAm: "sand-10l6tqk",
        kfzvcC: "sand-47corl",
        kWkggS: "sand-13l7odt",
        kKwaWg: "sand-18o3ruo",
        $$css: true
    },
    footerMarkSurfaceActive: {
        kKwaWg: "sand-q09rwa",
        $$css: true
    },
    footerMarkShapeRing: (t)=>[
            sa,
            {
                kX1K2I: t != null ? "sand-wjwp01" : t,
                $$css: true
            },
            {
                "--x-maskImage": t ?? undefined
            }
        ],
    footerLabel: {
        kzQI83: "sand-1iyjqo2",
        kmuXW: "sand-s83m0k",
        k7Eaqz: "sand-euugli",
        $$css: true
    }
};
const Gs = new Map;
function la(agent) {
    const shape = U(agent);
    const n = Gs.get(shape);
    if (n != null) {
        return n;
    }
    const d = L({
        shape,
        sizePx: sn,
        ringPx
    });
    Gs.set(shape, d);
    return d;
}
function Nn1Component(t) {
    Nn1Component.d = 1075;
    const e = c_1.c(12);
    const { agent, overlapped, surfaceActive } = t;
    const o = (agent.avatarDataUrl ?? "").length > 0;
    let c;
    if (e[0] !== overlapped) {
        c = ({
            0: {
                className: "sand-1n2onr6 sand-1vjfegm sand-78zum5 sand-2lah0s"
            },
            1: {
                className: "sand-1n2onr6 sand-1vjfegm sand-78zum5 sand-2lah0s sand-4h0osi"
            }
        })[!!overlapped << 0];
        e[0] = overlapped;
        e[1] = c;
    } else {
        c = e[1];
    }
    let r;
    if (e[2] !== agent || e[3] !== o || e[4] !== surfaceActive) {
        r = o ? <span aria-hidden data-sand-footer-mark-plate {...{
            0: {
                className: "sand-10l6tqk sand-47corl sand-13l7odt sand-18o3ruo sand-18f1m0x sand-149ho13"
            },
            1: {
                className: "sand-10l6tqk sand-47corl sand-13l7odt sand-q09rwa sand-18f1m0x sand-149ho13"
            }
        }[!!surfaceActive << 0]}/> : <span aria-hidden data-sand-footer-mark-ring {...p_1(_.footerMarkSurface, surfaceActive && _.footerMarkSurfaceActive, _.footerMarkShapeRing(la(agent)))}/>;
        e[2] = agent;
        e[3] = o;
        e[4] = surfaceActive;
        e[5] = r;
    } else {
        r = e[5];
    }
    let u;
    if (e[6] !== agent) {
        u = <Es1 agent={agent} fillPx={sn} isStatic size="xs"/>;
        e[6] = agent;
        e[7] = u;
    } else {
        u = e[7];
    }
    let h;
    if (e[8] !== c || e[9] !== r || e[10] !== u) {
        h = <span {...c}>{r}{u}</span>;
        e[8] = c;
        e[9] = r;
        e[10] = u;
        e[11] = h;
    } else {
        h = e[11];
    }
    return h;
}
function An1Component(t) {
    An1Component.d = 1076;
    const e = c_1.c(14);
    const { agents, surfaceActive } = t;
    let i;
    let o;
    let c;
    let r;
    if (e[0] !== agents || e[1] !== surfaceActive) {
        r = Symbol.for("react.early_return_sentinel");
        e: {
            const h = agents.slice(0, oa);
            if (h.length === 0) {
                let p;
                if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
                    p = <I_1 name="people" size="sm"/>;
                    e[6] = p;
                } else {
                    p = e[6];
                }
                r = p;
                break e;
            }
            i = true;
            if (e[7] === Symbol.for("react.memo_cache_sentinel")) {
                o = {
                    className: "sand-78zum5 sand-6s0dn4 sand-2lah0s"
                };
                e[7] = o;
            } else {
                o = e[7];
            }
            let m;
            if (e[8] !== surfaceActive) {
                m = (p, y)=><Nn1Component key={p.id} agent={p} overlapped={y > 0} surfaceActive={surfaceActive}/>;
                e[8] = surfaceActive;
                e[9] = m;
            } else {
                m = e[9];
            }
            c = h.map(m);
        }
        e[0] = agents;
        e[1] = surfaceActive;
        e[2] = i;
        e[3] = o;
        e[4] = c;
        e[5] = r;
    } else {
        i = e[2];
        o = e[3];
        c = e[4];
        r = e[5];
    }
    if (r !== Symbol.for("react.early_return_sentinel")) {
        return r;
    }
    let u;
    if (e[10] !== i || e[11] !== o || e[12] !== c) {
        u = <span aria-hidden={i} {...o}>{c}</span>;
        e[10] = i;
        e[11] = o;
        e[12] = c;
        e[13] = u;
    } else {
        u = e[13];
    }
    return u;
}
async function ra(ieRef, e) {
    await aj.whenInteractive("main");
    if (ieRef.current === e) {
        e.focus();
    }
}
export function NewChatBar(t) {
    NewChatBar.d = 1070;
    const e = c_1.c(60);
    const { agents, recipients, isCreationPending, isGroupMode, menuOpenRequest, groupChat, teamAgents, onAddRecipient, onRemoveRecipient, onEnterGroupMode, onCreateTeamBot, onCommit, onClose } = t;
    const v = menuOpenRequest === undefined ? 0 : menuOpenRequest;
    const { _: __1 } = u_1();
    const { _: __2 } = u_1();
    const [g, setG] = r.useState("");
    const [D, setD] = r.useState(0);
    const [I, setI] = r.useState(true);
    const [ne, setNe] = r.useState(v);
    const [key, setKey] = r.useState(0);
    if (ne !== v) {
        setNe(v);
        if (!isCreationPending && !I) {
            setI(true);
            setKey(ka);
        }
    }
    const [isShortcutShown, setIsShortcutShown] = r.useState(false);
    let U;
    if (e[0] !== onCreateTeamBot) {
        U = ()=>onCreateTeamBot != null;
        e[0] = onCreateTeamBot;
        e[1] = U;
    } else {
        U = e[1];
    }
    const [G, setG_1] = r.useState(U);
    const te = ck();
    let J;
    if (e[2] !== te) {
        J = ()=>te;
        e[2] = te;
        e[3] = J;
    } else {
        J = e[3];
    }
    const [de] = r.useState(J);
    const w = cl();
    const TRef = r.useRef(false);
    const [O, setO] = r.useState(false);
    const [ns, setNs] = r.useState(0);
    const rn = O ? ns === 0 : D === 0;
    if (!G && onCreateTeamBot != null && g.length === 0 && rn) {
        setG_1(true);
    }
    const [K, setK] = r.useState(false);
    const [cn, setCn] = r.useState(null);
    let je;
    if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
        je = {
            resultKeys: "",
            pickableKeys: [],
            windowKeys: [],
            visibleKeys: [],
            carriedKeys: [],
            anchorKeys: [],
            unanchoredKeys: [],
            remounts
        };
        e[4] = je;
    } else {
        je = e[4];
    }
    const [H, setH] = r.useState(je);
    const ieRef = r.useRef(null);
    const Y = r.useId();
    const B = I && !isCreationPending;
    const isTeamBotSearchEnabled = teamAgents != null;
    const R = B && isTeamBotSearchEnabled && O;
    let ve;
    if (e[5] !== teamAgents?.agents || e[6] !== teamAgents?.areAgentTitlesEnabled) {
        ve = (s)=>Jn(o(teamAgents?.agents ?? []).filter((l)=>m(l, s, bc, teamAgents?.areAgentTitlesEnabled ?? false)));
        e[5] = teamAgents?.agents;
        e[6] = teamAgents?.areAgentTitlesEnabled;
        e[7] = ve;
    } else {
        ve = e[7];
    }
    const options = ve(g);
    const L = options.length === 0 ? 0 : Math.min(ns, options.length - 1);
    if (options.length > 0 && L !== ns) {
        setNs(L);
    }
    const isRecipientSelected = recipients.length > 0;
    const isGroupCompose = isGroupMode || isRecipientSelected;
    const Ne = {
        isGroupCompose,
        isRecipientSelected
    };
    const ts = groupChat?.people == null ? undefined : Na(groupChat.people);
    const teamMembers = ts?.members.filter((s)=>s.userId !== ts.selfUserId) ?? [];
    const bs = (s, l, f)=>aG(agents, s, l, {
            isGroupMode: f === undefined ? isGroupMode : f,
            ...groupChat == null ? {} : {
                groupChatTeamId: groupChat.teamId,
                teamMembers
            },
            isTeamBotSearchEnabled
        });
    const me = (...s)=>aD(bs(...s), de);
    const ws = bs(recipients, g);
    const hn = B && de !== undefined && ws.some(ya);
    i(()=>{
        if (hn && !TRef.current) {
            TRef.current = true;
            w();
        }
        return pa;
    });
    const j = aD(ws, de);
    const z = Sa(j, D);
    if (j.length > 0 && z !== D) {
        setD(z);
    }
    const js = (s)=>s == null || !aJ(s, Ne) || aP(recipients, aQ(s));
    const ds = j.findIndex(aE);
    const Q = ds === -1 ? j.length : ds;
    const Se = ds === -1 ? j.length : j.findLastIndex(aE) + 1;
    const fe = cm({
        scrollEl: R ? null : cn,
        rowCount: Q,
        rowPitchPx,
        leadingOffsetPx,
        initialViewportPx: isTeamBotSearchEnabled ? aa : na
    });
    const resultKeys = j.map(Z).join(`
`);
    const pickableKeys = j.slice(0, Q).map(Z);
    const windowKeys = j.slice(fe.start, fe.end).map(Z);
    const visibleKeys = j.slice(fe.visibleStart, fe.visibleEnd).map(Z);
    const xe = resultKeys !== H.resultKeys;
    if (xe || visibleKeys.join(`
`) !== H.visibleKeys.join(`
`)) {
        const s = z < Q ? j[z] : undefined;
        let remounts_1 = H.remounts;
        const f = xe ? xa(H, pickableKeys) : [];
        if (f.length > 0) {
            const M = new Map(remounts_1);
            for (const le of f){
                M.set(le, (M.get(le) ?? 0) + 1);
            }
            remounts_1 = M;
        }
        setH({
            resultKeys,
            pickableKeys,
            windowKeys,
            visibleKeys,
            carriedKeys: xe ? H.visibleKeys : [],
            anchorKeys: xe ? H.visibleKeys.filter((M)=>!f.includes(M)) : [],
            unanchoredKeys: xe ? [] : ba(H, visibleKeys, s).filter((M)=>!H.anchorKeys.includes(M)),
            remounts: remounts_1
        });
    }
    const ze = new Set;
    for(let s = fe.start; s < fe.end; s = s + 1, s){
        ze.add(s);
    }
    if (z < Q) {
        ze.add(z);
    }
    for (const s of H.carriedKeys){
        const l = j.findIndex((f)=>Z(f) === s);
        if (l !== -1 && l < Q) {
            ze.add(l);
        }
    }
    let Me;
    if (e[8] !== H.remounts) {
        Me = (s)=>{
            const l = Z(s);
            const f = H.remounts.get(l);
            if (f == null) {
                return l;
            }
            return `${l}#${f}`;
        };
        e[8] = H.remounts;
        e[9] = Me;
    } else {
        Me = e[9];
    }
    const yn = Me;
    let Re;
    if (e[10] !== K || e[11] !== z) {
        Re = (s)=>{
            if (K) {
                setK(false);
            }
            if (s !== z) {
                setD(s);
            }
        };
        e[10] = K;
        e[11] = z;
        e[12] = Re;
    } else {
        Re = e[12];
    }
    const onHover = Re;
    const SsComponent = (result, l)=><Ln1Component key={yn(result)} id={`${Y}-option-${l}`} index={l} isGroupCompose={isGroupCompose} isHighlighted={l === z && !K} isRecipientSelected={isRecipientSelected} isShortcutShown={isShortcutShown} onActivate={As} onHover={onHover} overflowAnchor={H.unanchoredKeys.includes(Z(result)) ? "none" : "auto"} ref={l === z ? activeOptionRef_1 : null} result={result} setSize={j.length}/>;
    let _e;
    if (e[13] !== agents || e[14] !== groupChat || e[15] !== isGroupMode || e[16] !== recipients) {
        _e = groupChat != null && aF(agents, recipients, {
            isGroupMode,
            groupChatTeamId: groupChat.teamId
        });
        e[13] = agents;
        e[14] = groupChat;
        e[15] = isGroupMode;
        e[16] = recipients;
        e[17] = _e;
    } else {
        _e = e[17];
    }
    const is = _e && groupChat?.people != null && ts == null;
    const zs = is && groupChat?.people?.status === "failed";
    let Ae;
    if (e[18] === Symbol.for("react.memo_cache_sentinel")) {
        Ae = (s, l)=>{
            const f = aT(s, l);
            setD(f);
        };
        e[18] = Ae;
    } else {
        Ae = e[18];
    }
    const he = Ae;
    let Te;
    if (e[19] === Symbol.for("react.memo_cache_sentinel")) {
        Te = (s)=>{
            ieRef.current = s;
            if (s != null) {
                if (!aj.isHidden("main")) {
                    s.focus();
                    return;
                }
                ra(ieRef, s);
            }
        };
        e[19] = Te;
    } else {
        Te = e[19];
    }
    const ref = Te;
    const { activeOptionRef, markKeyboardNavigation } = u_2();
    const activeOptionRef_1 = activeOptionRef;
    const rs = (s)=>{
        if (!aJ(s, Ne) || !js(s)) {
            return;
        }
        const l = aQ(s);
        onAddRecipient(l);
        setG("");
        setI(true);
        he(me([
            ...recipients,
            l
        ], "", true), "");
        ieRef.current?.focus();
    };
    const Ms = (s)=>{
        if (!isCreationPending) {
            onRemoveRecipient(s);
            he(me(recipients.filter((l, f)=>f !== s), g), g);
        }
    };
    const Rs = ()=>{
        onEnterGroupMode();
        setG("");
        setI(true);
        he(me(recipients, "", true), "");
        ieRef.current?.focus();
    };
    const _s = (s)=>{
        onCommit(s);
        ieRef.current?.focus();
    };
    const As = (s)=>{
        const highlighted = j[s];
        if (highlighted != null) {
            if (highlighted.kind === "create-group") {
                Rs();
                return;
            }
            if (aN(highlighted, Ne)) {
                const f = aO({
                    recipients,
                    highlighted,
                    isGroupChatsEnabled: groupChat != null
                });
                if (f != null) {
                    _s(f);
                }
                return;
            }
            rs(highlighted);
        }
    };
    const xn = ()=>{
        const s = aR({
            recipients,
            query: g,
            highlighted: js(j[z]) ? j[z] : undefined,
            isGroupMode,
            isGroupChatsEnabled: groupChat != null
        });
        if (s.type === "enter-group-mode") {
            Rs();
            return;
        }
        if (s.type === "add") {
            rs(s.result);
            return;
        }
        if (s.type === "commit") {
            _s(s.launch);
        }
    };
    const Ts = ()=>{
        setO(true);
        setI(true);
        setK(false);
        setG("");
        setNs(0);
        ieRef.current?.focus();
    };
    const qs = ()=>{
        setO(false);
        setK(false);
        setG("");
        he(me(recipients, ""), "");
    };
    const onRemove = ()=>{
        qs();
        ieRef.current?.focus();
    };
    const Cs = (s)=>{
        const l = options[s];
        if (!(l == null || teamAgents == null)) {
            onClose();
            teamAgents.onOpenAgent(l.agent.id);
        }
    };
    const bn = (s)=>{
        if (s.key === "ArrowDown" || s.key === "ArrowUp") {
            s.preventDefault();
            s.stopPropagation();
            if (!I) {
                setI(true);
                return;
            }
            const l = s.key === "ArrowDown" ? 1 : -1;
            if (K) {
                if (l === -1 && options.length > 0) {
                    setK(false);
                    markKeyboardNavigation();
                }
                return;
            }
            const f = L >= options.length - 1;
            if (l === 1 && f && G) {
                setK(true);
                return;
            }
            if (options.length === 0) {
                return;
            }
            const M = Math.min(Math.max(L + l, 0), options.length - 1);
            if (M !== L) {
                markKeyboardNavigation();
            }
            setNs(M);
            return;
        }
        if (s.key === "Enter") {
            s.preventDefault();
            s.stopPropagation();
            if (K) {
                onCreateTeamBot?.();
                return;
            }
            Cs(L);
            return;
        }
        if (s.key === "Backspace" && g.length === 0) {
            s.preventDefault();
            s.stopPropagation();
            onRemove();
            return;
        }
        if (s.key === "Escape") {
            s.preventDefault();
            s.stopPropagation();
            if (g.length > 0) {
                setG("");
                setK(false);
                setNs(0);
                return;
            }
            onRemove();
        }
    };
    const wn = (s)=>{
        if (isCreationPending) {
            return;
        }
        if (R) {
            bn(s);
            return;
        }
        if (s.key === "ArrowDown" || s.key === "ArrowUp") {
            s.preventDefault();
            s.stopPropagation();
            if (!I) {
                setI(true);
                return;
            }
            const f = s.key === "ArrowDown" ? 1 : -1;
            if (isTeamBotSearchEnabled && K) {
                if (f === -1) {
                    setK(false);
                    markKeyboardNavigation();
                }
                return;
            }
            const M = ps(j, z, f);
            if (isTeamBotSearchEnabled && f === 1 && M === z) {
                setK(true);
                return;
            }
            if (M !== z) {
                markKeyboardNavigation();
            }
            setD(M);
            return;
        }
        if (s.key === "Enter" && isTeamBotSearchEnabled && K && B) {
            s.preventDefault();
            s.stopPropagation();
            setK(false);
            Ts();
            return;
        }
        if (s.key === "Tab" || s.key === ",") {
            const f = j[z];
            if (B && f != null && aJ(f, Ne)) {
                s.preventDefault();
                s.stopPropagation();
                rs(f);
            }
            return;
        }
        if (s.key === "Backspace" && g.length === 0 && recipients.length > 0) {
            s.preventDefault();
            s.stopPropagation();
            Ms(recipients.length - 1);
            return;
        }
        if (s.key === "Enter") {
            s.preventDefault();
            s.stopPropagation();
            xn();
            return;
        }
        if (s.key === "Escape") {
            s.preventDefault();
            s.stopPropagation();
            if (g.length > 0) {
                setG("");
                he(me(recipients, ""), "");
                return;
            }
            if (B) {
                setI(false);
                return;
            }
            onClose();
            return;
        }
        const l = ks ? s.metaKey : s.ctrlKey;
        if (B && l && !s.shiftKey && !s.altKey && s.key >= "1" && s.key <= "9") {
            const f = Number(s.key) - 1;
            if (f < j.length && f < en) {
                s.preventDefault();
                s.stopPropagation();
                As(f);
            }
        }
    };
    const onBlur = (s)=>{
        setIsShortcutShown(false);
        const s_relatedTarget = s.relatedTarget;
        if (!(s_relatedTarget instanceof Node && s.currentTarget.contains(s_relatedTarget))) {
            setI(false);
            setK(false);
            if (O) {
                qs();
            }
        }
    };
    let Ce;
    if (e[20] === Symbol.for("react.memo_cache_sentinel")) {
        Ce = (s)=>{
            if (s.key === Fs) {
                setIsShortcutShown(true);
            }
        };
        e[20] = Ce;
    } else {
        Ce = e[20];
    }
    const vn = Ce;
    let $e;
    if (e[21] === Symbol.for("react.memo_cache_sentinel")) {
        $e = (s)=>{
            if (s.key === Fs) {
                setIsShortcutShown(false);
            }
        };
        e[21] = $e;
    } else {
        $e = e[21];
    }
    const onKeyUp = $e;
    let Ee;
    if (e[22] === Symbol.for("react.memo_cache_sentinel")) {
        Ee = p_1(_.toLabel, a_.body1);
        e[22] = Ee;
    } else {
        Ee = e[22];
    }
    const $s = Ee;
    const Es = p_1(_.input, a_.body1);
    let us;
    if (R) {
        if (!K && options[L] != null) {
            let s;
            if (e[23] !== Y || e[24] !== L) {
                s = Xs(Y, L);
                e[23] = Y;
                e[24] = L;
                e[25] = s;
            } else {
                s = e[25];
            }
            us = s;
        }
    } else {
        if (B && j[z] != null) {
            us = `${Y}-option-${z}`;
        }
    }
    let Pe;
    if (e[26] !== R || e[27] !== __1) {
        Pe = __1(R ? {
            id: "rekS+N"
        } : {
            id: "pa8w8y"
        });
        e[26] = R;
        e[27] = __1;
        e[28] = Pe;
    } else {
        Pe = e[28];
    }
    const placeholder = Pe;
    let ms = null;
    if (is && !zs) {
        let s;
        if (e[29] === Symbol.for("react.memo_cache_sentinel")) {
            s = p_1(_.sectionNote, a_.caption);
            e[29] = s;
        } else {
            s = e[29];
        }
        let l;
        if (e[30] === Symbol.for("react.memo_cache_sentinel")) {
            l = <div {...s} aria-live="polite" role="presentation"><T id="yQE2r9"/></div>;
            e[30] = l;
        } else {
            l = e[30];
        }
        ms = l;
    } else if (zs) {
        let s;
        if (e[31] === Symbol.for("react.memo_cache_sentinel")) {
            s = p_1(_.sectionNote, a_.caption);
            e[31] = s;
        } else {
            s = e[31];
        }
        let l;
        if (e[32] === Symbol.for("react.memo_cache_sentinel")) {
            l = <T id="ochb2l"/>;
            e[32] = l;
        } else {
            l = e[32];
        }
        let f;
        if (e[33] !== groupChat) {
            f = ()=>groupChat?.onRetryPeople?.();
            e[33] = groupChat;
            e[34] = f;
        } else {
            f = e[34];
        }
        let M;
        if (e[35] === Symbol.for("react.memo_cache_sentinel")) {
            M = <T id="6gRgw8"/>;
            e[35] = M;
        } else {
            M = e[35];
        }
        let le;
        if (e[36] !== f) {
            le = <div {...s} aria-live="polite" role="presentation">{l}<En onClick={f} size="sm" type="button" variant="secondary">{M}</En></div>;
            e[36] = f;
            e[37] = le;
        } else {
            le = e[37];
        }
        ms = le;
    }
    const De = B && !R && j.length === 0 && !is;
    let Ke;
    if (e[38] !== g) {
        Ke = g.trim().length === 0 ? <T id="r32WRY"/> : <T id="12i8o8"/>;
        e[38] = g;
        e[39] = Ke;
    } else {
        Ke = e[39];
    }
    const Ie = Ke;
    const Oe = [];
    let firstRow = 0;
    for (const s of [
        ...ze
    ].sort(ha)){
        const l = j[s];
        if (l != null) {
            if (s > firstRow) {
                Oe.push(<Ys1Component key={`spacer-before-${Z(l)}`} firstRow={firstRow} onHover={onHover} rowCount={s - firstRow}/>);
            }
            Oe.push(SsComponent(l, s));
            firstRow = s + 1;
        }
    }
    if (Q > firstRow) {
        const s = Q - firstRow;
        let l;
        if (e[40] !== onHover || e[41] !== s || e[42] !== firstRow) {
            l = <Ys1Component key="spacer-end" firstRow={firstRow} onHover={onHover} rowCount={s}/>;
            e[40] = onHover;
            e[41] = s;
            e[42] = firstRow;
            e[43] = l;
        } else {
            l = e[43];
        }
        Oe.push(l);
    }
    let He;
    if (e[44] === Symbol.for("react.memo_cache_sentinel")) {
        He = r_2("sand-new-chat-bar", "sand-1n2onr6 sand-78zum5 sand-1cy8zhl sand-kh2ocl sand-17d4w8g sand-1iyjqo2 sand-s83m0k sand-euugli sand-1wxaq2x sand-9f619 sand-889kno sand-1a8lsjc sand-135b78x sand-lvsv26");
        e[44] = He;
    } else {
        He = e[44];
    }
    let Fe;
    let Ge;
    if (e[45] === Symbol.for("react.memo_cache_sentinel")) {
        Fe = <span className={$s.className} style={$s.style}><T id="ZxkdRe"/></span>;
        Ge = {
            className: "sand-78zum5 sand-6s0dn4 sand-c26acl sand-mixu3c sand-w09woa sand-1a02dak sand-1iyjqo2 sand-s83m0k sand-euugli sand-e0p6wg"
        };
        e[45] = Fe;
        e[46] = Ge;
    } else {
        Fe = e[45];
        Ge = e[46];
    }
    let onFocus;
    if (e[47] === Symbol.for("react.memo_cache_sentinel")) {
        onFocus = ()=>{
            setI(true);
        };
        e[47] = onFocus;
    } else {
        onFocus = e[47];
    }
    let pe;
    if (e[48] !== __2) {
        pe = __2({
            id: "CceQuV"
        });
        e[48] = __2;
        e[49] = pe;
    } else {
        pe = e[49];
    }
    let Ue;
    if (e[50] === Symbol.for("react.memo_cache_sentinel")) {
        Ue = r_2("sand-new-chat-bar__close", "sand-jyslct sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-w4jnvo sand-1qx5ct2 sand-2lah0s sand-1gslohp sand-14z9mp sand-at24cr sand-1lziwak sand-exx8yu sand-yri2b sand-18d9i69 sand-1c1uobl sand-c342km sand-ng3xce sand-149ho13 sand-jbqb8w sand-aalx5g sand-1o0liin sand-1ypdohk");
        e[50] = Ue;
    } else {
        Ue = e[50];
    }
    let Ve;
    if (e[51] === Symbol.for("react.memo_cache_sentinel")) {
        Ve = <I_1 name="close" size="sm"/>;
        e[51] = Ve;
    } else {
        Ve = e[51];
    }
    let We;
    if (e[52] !== onClose || e[53] !== pe) {
        We = <button aria-label={pe} className={Ue} onClick={onClose} type="button">{Ve}</button>;
        e[52] = onClose;
        e[53] = pe;
        e[54] = We;
    } else {
        We = e[54];
    }
    let ye;
    if (e[55] !== Ie || e[56] !== De) {
        ye = De ? <V>{Ie}</V> : null;
        e[55] = Ie;
        e[56] = De;
        e[57] = ye;
    } else {
        ye = e[57];
    }
    let Be;
    if (e[58] !== ye) {
        Be = <S>{ye}</S>;
        e[58] = ye;
        e[59] = Be;
    } else {
        Be = e[59];
    }
    return <div aria-busy={isCreationPending || undefined} className={He} onBlur={onBlur} onKeyDown={vn} onKeyUp={onKeyUp}>{Fe}<div className={Ge.className}>{recipients.map((recipient, l)=>{
        let f = `new-${l}`;
        if (recipient.kind === "agent") {
            f = recipient.id;
        } else if (recipient.kind === "human") {
            f = `human-${recipient.userId}`;
        }
        return <Dn1Component key={f} onRemove={()=>Ms(l)} recipient={recipient}/>;
    })}{R ? <Tn1Component onRemove={onRemove}/> : null}<input key={key} aria-activedescendant={us} aria-autocomplete="list" aria-controls={Y} aria-expanded={B} aria-label={placeholder} className={r_2("sand-new-chat-bar__input", Es.className)} onChange={(s)=>{
        const value = s.target.value;
        setG(value);
        setI(true);
        if (O && isTeamBotSearchEnabled) {
            setK(false);
            setNs(0);
            return;
        }
        he(me(recipients, value), value);
    }} onFocus={onFocus} onKeyDown={wn} placeholder={placeholder} ref={ref} role="combobox" spellCheck={false} style={Es.style} value={g}/></div>{We}{Be}{B ? <div className={r_2("sand-new-chat-menu", "sand-10l6tqk sand-qzfmfr sand-qpl54q sand-ufbo1o sand-78zum5 sand-dt5ytf sand-ixl9f9 sand-13l7odt sand-4hv7ue sand-1y0btm7 sand-fnq37j sand-1s7mxt7 sand-b3r6kr sand-3ecgy1 sand-1aquc0h sand-1ijlv18 sand-rmiu4m")}><div aria-label={__2(R ? {
        id: "8Ri8tN"
    } : {
        id: "yPrbsy"
    })} className={({
        0: {
            className: "sand-78zum5 sand-dt5ytf sand-195vfkc sand-1yrsyyn sand-1icxu4v sand-10b6aqq sand-25sj25 sand-1phlbz0 sand-1odjw0f sand-6ikm8r sand-1597r2g sand-xvpt3r"
        },
        2: {
            className: "sand-78zum5 sand-dt5ytf sand-195vfkc sand-1yrsyyn sand-1icxu4v sand-25sj25 sand-1odjw0f sand-6ikm8r sand-1597r2g sand-xvpt3r sand-1pom53b sand-18d9i69"
        },
        1: {
            className: "sand-78zum5 sand-dt5ytf sand-195vfkc sand-1yrsyyn sand-1icxu4v sand-25sj25 sand-1phlbz0 sand-1odjw0f sand-6ikm8r sand-1597r2g sand-xvpt3r sand-1120s5i"
        },
        3: {
            className: "sand-78zum5 sand-dt5ytf sand-195vfkc sand-1yrsyyn sand-1icxu4v sand-25sj25 sand-1odjw0f sand-6ikm8r sand-1597r2g sand-xvpt3r sand-1pom53b sand-1120s5i"
        }
    })[!!(isTeamBotSearchEnabled && !R) << 1 | !!(R && G) << 0].className} id={Y} ref={setCn} role="listbox">{R ? <QsComponent activeOptionRef={activeOptionRef_1} canCreate={G} hasQuery={g.trim().length > 0} hasTeamAgents={(teamAgents?.agents.length ?? 0) > 0} highlight={K ? -1 : L} listboxId={Y} onActivate={Cs} onHover={(s)=>{
        if (K) {
            setK(false);
        }
        if (s !== L) {
            setNs(s);
        }
    }} options={options}/> : null}{De ? <div aria-hidden {...p_1(_.emptyState, a_.body2)}>{Ie}</div> : null}{R ? null : Oe}{!R && Q < Se ? <div {...p_1(_.sectionNote, a_.caption)} role="presentation">{recipients.some(fa) ? <T id="oekzJB"/> : <T id="kiANar"/>}</div> : null}{(R ? [] : j.slice(Q, Se)).map((s, l)=>{
        const f = Q + l;
        if (s.kind === "agent") {
            return <On1Component key={Z(s)} agent={s.agent} id={`${Y}-option-${f}`} index={f} ref={f === z ? activeOptionRef_1 : null} setSize={j.length}/>;
        }
        return null;
    })}{R ? null : j.slice(Se).map((s, l)=>SsComponent(s, Se + l))}{R ? null : ms}</div>{isTeamBotSearchEnabled && !R ? <button aria-expanded={false} data-sand-team-footer onClick={Ts} onMouseDown={ma} onMouseEnter={()=>setK(true)} onMouseLeave={()=>setK(false)} type="button" {...{
        0: {
            className: "sand-jyslct sand-1n2onr6 sand-1vjfegm sand-78zum5 sand-6s0dn4 sand-167g77z sand-h8yej3 sand-9f619 sand-1wxaq2x sand-exx8yu sand-1pic42t sand-18d9i69 sand-1onr9mi sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-1hc762m sand-13fuv20 sand-t8lcch sand-uxrje7 sand-1qhh985 sand-kgv12d sand-1sy0etr sand-13l7odt sand-18o3ruo sand-tyxrsu sand-1yc453h sand-1ypdohk sand-jb2p0i"
        },
        1: {
            className: "sand-jyslct sand-1n2onr6 sand-1vjfegm sand-78zum5 sand-6s0dn4 sand-167g77z sand-h8yej3 sand-9f619 sand-1wxaq2x sand-exx8yu sand-1pic42t sand-18d9i69 sand-1onr9mi sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-1hc762m sand-13fuv20 sand-t8lcch sand-uxrje7 sand-1qhh985 sand-kgv12d sand-1sy0etr sand-13l7odt sand-tyxrsu sand-1yc453h sand-1ypdohk sand-jb2p0i sand-q09rwa"
        }
    }[!!K << 0]}><An1Component agents={o(teamAgents?.agents ?? [])} surfaceActive={K}/><span {...p_1(_.footerLabel, a_.body2)}><T id="8Ri8tN"/></span><span className="sand-2lah0s sand-169k319"><I_1 name="chevron-right" size="sm"/></span></button> : null}{R && G ? <button data-sand-team-create onClick={()=>onCreateTeamBot?.()} onMouseDown={ua} onMouseEnter={()=>setK(true)} onMouseLeave={()=>setK(false)} type="button" {...{
        0: {
            className: "sand-jyslct sand-1n2onr6 sand-1vjfegm sand-78zum5 sand-6s0dn4 sand-h8yej3 sand-9f619 sand-1wxaq2x sand-exx8yu sand-18d9i69 sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-1hc762m sand-13fuv20 sand-t8lcch sand-uxrje7 sand-1qhh985 sand-kgv12d sand-1sy0etr sand-13l7odt sand-18o3ruo sand-tyxrsu sand-1yc453h sand-1ypdohk sand-jb2p0i sand-1v2ro7d sand-1x5flf6 sand-wn43p0"
        },
        1: {
            className: "sand-jyslct sand-1n2onr6 sand-1vjfegm sand-78zum5 sand-6s0dn4 sand-h8yej3 sand-9f619 sand-1wxaq2x sand-exx8yu sand-18d9i69 sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-1hc762m sand-13fuv20 sand-t8lcch sand-uxrje7 sand-1qhh985 sand-kgv12d sand-1sy0etr sand-13l7odt sand-tyxrsu sand-1yc453h sand-1ypdohk sand-jb2p0i sand-1v2ro7d sand-1x5flf6 sand-wn43p0 sand-q09rwa"
        }
    }[!!K << 0]}><B_1 aria-hidden icon="building" sizePx={sizePx}/><span {...p_1(_.footerLabel, a_.body2)}><T id="Wy9Ium"/></span></button> : null}</div> : null}</div>;
}
function ua(t) {
    return t.preventDefault();
}
function ma(t) {
    return t.preventDefault();
}
function fa(t) {
    return t.kind === "human";
}
function ha(t, e) {
    return t - e;
}
function pa() {}
function ya(t) {
    return t.kind === "create-group";
}
function ka(t) {
    return t + 1;
}
function Tn1Component(t) {
    Tn1Component.d = 1077;
    const e = c_1.c(8);
    const { onRemove } = t;
    const { _: __1 } = u_1();
    let i;
    if (e[0] !== __1) {
        i = __1({
            id: "8Ri8tN"
        });
        e[0] = __1;
        e[1] = i;
    } else {
        i = e[1];
    }
    let o;
    if (e[2] !== __1) {
        o = __1({
            id: "2lVk4O"
        });
        e[2] = __1;
        e[3] = o;
    } else {
        o = e[3];
    }
    let c;
    if (e[4] !== onRemove || e[5] !== i || e[6] !== o) {
        c = <M label={i} labelStyle={a_.body2} onRemove={onRemove} removeLabel={o} removeReveal="hover" size="sm" style={_.teamPill}/>;
        e[4] = onRemove;
        e[5] = i;
        e[6] = o;
        e[7] = c;
    } else {
        c = e[7];
    }
    return c;
}
function Dn1Component(t) {
    Dn1Component.d = 1071;
    const e = c_1.c(15);
    const { recipient, onRemove } = t;
    const { _: __1 } = u_1();
    let o;
    if (recipient.kind === "agent") {
        let m;
        if (e[0] !== recipient.id) {
            m = <Dn id={recipient.id} isStatic size="xs"/>;
            e[0] = recipient.id;
            e[1] = m;
        } else {
            m = e[1];
        }
        o = m;
    } else if (recipient.kind === "human") {
        let m;
        if (e[2] !== recipient) {
            m = <Vs person={recipient} sizePx={aM.xs}/>;
            e[2] = recipient;
            e[3] = m;
        } else {
            m = e[3];
        }
        o = m;
    } else {
        let m;
        if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
            m = <B_1 aria-hidden icon="plus" sizePx={aM.xs}/>;
            e[4] = m;
        } else {
            m = e[4];
        }
        o = m;
    }
    const avatar = o;
    let r;
    if (e[5] !== recipient) {
        r = aI(recipient);
        e[5] = recipient;
        e[6] = r;
    } else {
        r = e[6];
    }
    let u;
    if (e[7] !== __1 || e[8] !== recipient) {
        u = __1({
            id: "Y47eWa",
            values: {
                0: aI(recipient)
            }
        });
        e[7] = __1;
        e[8] = recipient;
        e[9] = u;
    } else {
        u = e[9];
    }
    let h;
    if (e[10] !== o || e[11] !== onRemove || e[12] !== r || e[13] !== u) {
        h = <M avatar={avatar} className="sand-new-chat-chip" label={r} onRemove={onRemove} removeLabel={u} size="sm" style={_.recipientChip}/>;
        e[10] = o;
        e[11] = onRemove;
        e[12] = r;
        e[13] = u;
        e[14] = h;
    } else {
        h = e[14];
    }
    return h;
}
const remounts = new Map;
function xa(t, next) {
    const n = wa({
        previous: t.pickableKeys,
        next
    });
    return t.visibleKeys.filter((d)=>n.has(d));
}
function ba(t, visibleKeys, n) {
    const d = new Set([
        ...t.windowKeys,
        ...t.carriedKeys
    ]);
    if (n != null) {
        d.add(Z(n));
    }
    const i = visibleKeys.findIndex((o)=>!d.has(o));
    if (i === -1) {
        return [];
    }
    return visibleKeys.slice(i + 1).filter((o)=>d.has(o));
}
function wa({ previous, next }) {
    const n = new Map(previous.map((o, c)=>[
            o,
            c
        ]));
    const d = new Set;
    let i = -1;
    for (const o of next){
        const c = n.get(o);
        c != null && (c < i ? d.add(o) : i = c);
    }
    return d;
}
function Z(t) {
    if (t.kind === "agent") {
        return t.agent.id;
    }
    if (t.kind === "human") {
        return `human-${t.member.userId}`;
    }
    return t.kind;
}
function ja(t, result, isRecipientSelected) {
    if (result.kind === "agent") {
        return bc(result.agent);
    }
    if (result.kind === "human") {
        return aS(result.member);
    }
    if (result.kind === "create-group") {
        return t({
            id: "hRyPRc"
        });
    }
    if (result.kind === "create") {
        return t(isRecipientSelected ? {
            id: "ykS238",
            values: {
                0: result.name
            }
        } : {
            id: "5J3xAb",
            values: {
                0: result.name
            }
        });
    }
    return t({
        id: "6X9ton"
    });
}
function va(t, result, isGroupCompose) {
    if (result.kind === "human") {
        return t({
            id: "zeQMAX"
        });
    }
    if (result.kind !== "agent" || result.agent.isGroup) {
        return null;
    }
    return t(isGroupCompose ? {
        id: "zeQMAX"
    } : {
        id: "hIQkLb"
    });
}
function Na(people) {
    switch(people.status){
        case "ready":
            return people.value;
        case "loading":
        case "failed":
            return people.previous;
        default:
            return;
    }
}
function ps(t, e, n) {
    for(let d = e + n; d >= 0 && d < t.length; d += n){
        const i = t[d];
        if (i != null && !aE(i)) {
            return d;
        }
    }
    return e;
}
function Sa(t, e) {
    if (t.length === 0) {
        return 0;
    }
    const n = Math.min(e, t.length - 1);
    const d = t[n];
    if (d == null || !aE(d)) {
        return n;
    }
    const i = ps(t, n, 1);
    if (i === n) {
        return ps(t, n, -1);
    }
    return i;
}
function Ys1Component(t) {
    Ys1Component.d = 1074;
    const e = c_1.c(9);
    const { firstRow, onHover, rowCount } = t;
    let o;
    if (e[0] !== firstRow || e[1] !== onHover || e[2] !== rowCount) {
        o = (u)=>{
            const h = u.clientY - u.currentTarget.getBoundingClientRect().top;
            const m = Math.floor(h / rowPitchPx);
            if (!(m < 0 || m >= rowCount || h - m * rowPitchPx >= Js)) {
                onHover(firstRow + m);
            }
        };
        e[0] = firstRow;
        e[1] = onHover;
        e[2] = rowCount;
        e[3] = o;
    } else {
        o = e[3];
    }
    let c;
    if (e[4] !== rowCount) {
        c = p_1(_.rowSpacer(rowCount));
        e[4] = rowCount;
        e[5] = c;
    } else {
        c = e[5];
    }
    let r;
    if (e[6] !== o || e[7] !== c) {
        r = <div aria-hidden onMouseMove={o} {...c}/>;
        e[6] = o;
        e[7] = c;
        e[8] = r;
    } else {
        r = e[8];
    }
    return r;
}
function Gs1Component(t) {
    Gs1Component.d = 1073;
    const e = c_1.c(16);
    const { agent, isDimmed, children } = t;
    const o = isDimmed === undefined ? false : isDimmed;
    let c;
    let r;
    if (e[0] !== agent || e[1] !== o) {
        c = agent != null && cn(agent);
        r = p_1(_.rowName, a_.body2, c && _.rowNameFit, o && !c && _.rowDimmed);
        e[0] = agent;
        e[1] = o;
        e[2] = c;
        e[3] = r;
    } else {
        c = e[2];
        r = e[3];
    }
    const u = r;
    let h;
    if (e[4] !== children || e[5] !== u.className || e[6] !== u.style) {
        h = <span className={u.className} style={u.style}>{children}</span>;
        e[4] = children;
        e[5] = u.className;
        e[6] = u.style;
        e[7] = h;
    } else {
        h = e[7];
    }
    const m = h;
    if (!c) {
        return m;
    }
    let p;
    if (e[8] !== o) {
        p = ({
            0: {
                className: "sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-1iyjqo2 sand-s83m0k sand-euugli"
            },
            1: {
                className: "sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-1iyjqo2 sand-s83m0k sand-euugli sand-byyjgo"
            }
        })[!!o << 0];
        e[8] = o;
        e[9] = p;
    } else {
        p = e[9];
    }
    let y;
    if (e[10] !== agent) {
        y = <Vn agent={agent}/>;
        e[10] = agent;
        e[11] = y;
    } else {
        y = e[11];
    }
    let x;
    if (e[12] !== m || e[13] !== p || e[14] !== y) {
        x = <span {...p}>{m}{y}</span>;
        e[12] = m;
        e[13] = p;
        e[14] = y;
        e[15] = x;
    } else {
        x = e[15];
    }
    return x;
}
function On1Component(t) {
    On1Component.d = 1078;
    const e = c_1.c(16);
    const { agent, id, index, ref, setSize } = t;
    let r;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        r = {
            className: "sand-jyslct sand-78zum5 sand-6s0dn4 sand-167g77z sand-h8yej3 sand-9f619 sand-u0aao5 sand-1bf2k6n sand-1hc27l4 sand-1yrsyyn sand-f159sx sand-10b6aqq sand-mzvs34 sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-c342km sand-ng3xce sand-ur7f20 sand-jbqb8w sand-tyxrsu sand-1yc453h sand-jb2p0i sand-t0e3qv"
        };
        e[0] = r;
    } else {
        r = e[0];
    }
    const u = index + 1;
    let h;
    if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
        h = {
            className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-vy4d1p sand-xk0z11 sand-2lah0s sand-byyjgo"
        };
        e[1] = h;
    } else {
        h = e[1];
    }
    let m;
    if (e[2] !== agent) {
        m = <span {...h}><Es1 agent={agent} isStatic size="sm"/></span>;
        e[2] = agent;
        e[3] = m;
    } else {
        m = e[3];
    }
    let p;
    if (e[4] !== agent) {
        p = bc(agent);
        e[4] = agent;
        e[5] = p;
    } else {
        p = e[5];
    }
    let y;
    if (e[6] !== agent || e[7] !== p) {
        y = <Gs1Component agent={agent} isDimmed>{p}</Gs1Component>;
        e[6] = agent;
        e[7] = p;
        e[8] = y;
    } else {
        y = e[8];
    }
    let x;
    if (e[9] !== id || e[10] !== ref || e[11] !== setSize || e[12] !== u || e[13] !== m || e[14] !== y) {
        x = <div {...r} aria-disabled aria-posinset={u} aria-setsize={setSize} id={id} ref={ref} role="option">{m}{y}</div>;
        e[9] = id;
        e[10] = ref;
        e[11] = setSize;
        e[12] = u;
        e[13] = m;
        e[14] = y;
        e[15] = x;
    } else {
        x = e[15];
    }
    return x;
}
function Ln1Component(t) {
    Ln1Component.d = 1072;
    const e = c_1.c(70);
    const { result, id, index, setSize, isGroupCompose, isHighlighted, isRecipientSelected, isShortcutShown, onActivate, onHover, overflowAnchor, ref } = t;
    const { _: __1 } = u_1();
    let v;
    let k;
    let N;
    let g;
    let S;
    let D;
    let q;
    let I;
    if (e[0] !== __1 || e[1] !== index || e[2] !== isGroupCompose || e[3] !== isHighlighted || e[4] !== isShortcutShown || e[5] !== overflowAnchor || e[6] !== result || e[7] !== setSize) {
        N = ({
            0: {
                className: "sand-jyslct sand-78zum5 sand-6s0dn4 sand-167g77z sand-h8yej3 sand-9f619 sand-u0aao5 sand-1bf2k6n sand-1hc27l4 sand-1yrsyyn sand-f159sx sand-10b6aqq sand-mzvs34 sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-c342km sand-ng3xce sand-ur7f20 sand-jbqb8w sand-tyxrsu sand-1yc453h sand-1ypdohk sand-jb2p0i"
            },
            2: {
                className: "sand-jyslct sand-78zum5 sand-6s0dn4 sand-167g77z sand-h8yej3 sand-9f619 sand-u0aao5 sand-1bf2k6n sand-1hc27l4 sand-1yrsyyn sand-f159sx sand-10b6aqq sand-mzvs34 sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-c342km sand-ng3xce sand-ur7f20 sand-tyxrsu sand-1yc453h sand-1ypdohk sand-jb2p0i sand-luhinc"
            },
            1: {
                className: "sand-jyslct sand-78zum5 sand-6s0dn4 sand-167g77z sand-h8yej3 sand-9f619 sand-u0aao5 sand-1bf2k6n sand-1hc27l4 sand-1yrsyyn sand-f159sx sand-10b6aqq sand-mzvs34 sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-c342km sand-ng3xce sand-ur7f20 sand-jbqb8w sand-tyxrsu sand-1yc453h sand-1ypdohk sand-jb2p0i sand-1xzczws"
            },
            3: {
                className: "sand-jyslct sand-78zum5 sand-6s0dn4 sand-167g77z sand-h8yej3 sand-9f619 sand-u0aao5 sand-1bf2k6n sand-1hc27l4 sand-1yrsyyn sand-f159sx sand-10b6aqq sand-mzvs34 sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-c342km sand-ng3xce sand-ur7f20 sand-tyxrsu sand-1yc453h sand-1ypdohk sand-jb2p0i sand-luhinc sand-1xzczws"
            }
        })[!!isHighlighted << 1 | (overflowAnchor === "none") << 0];
        let te;
        if (e[16] !== __1 || e[17] !== isGroupCompose || e[18] !== isHighlighted || e[19] !== result) {
            te = isHighlighted ? va(__1, result, isGroupCompose) : null;
            e[16] = __1;
            e[17] = isGroupCompose;
            e[18] = isHighlighted;
            e[19] = result;
            e[20] = te;
        } else {
            te = e[20];
        }
        const J = te;
        let de;
        if (e[21] !== result.kind || e[22] !== result.member) {
            de = result.kind === "human" ? aK(result.member) : null;
            e[21] = result.kind;
            e[22] = result.member;
            e[23] = de;
        } else {
            de = e[23];
        }
        k = de;
        if (result.kind === "agent") {
            let w;
            if (e[24] !== result.agent) {
                w = <Es1 agent={result.agent} isStatic size="sm"/>;
                e[24] = result.agent;
                e[25] = w;
            } else {
                w = e[25];
            }
            v = w;
        } else if (result.kind === "human") {
            let w;
            if (e[26] !== result.member) {
                w = <Vs person={result.member} sizePx={aM.sm}/>;
                e[26] = result.member;
                e[27] = w;
            } else {
                w = e[27];
            }
            v = w;
        } else {
            const w = result.kind === "create-group" ? "people" : "plus";
            let T;
            if (e[28] === Symbol.for("react.memo_cache_sentinel")) {
                T = {
                    className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-vy4d1p sand-xk0z11 sand-2lah0s sand-149ho13 sand-1tiofj7 sand-1o0liin"
                };
                e[28] = T;
            } else {
                T = e[28];
            }
            let O;
            if (e[29] !== w) {
                O = <span className={T.className}><I_1 name={w} size="sm"/></span>;
                e[29] = w;
                e[30] = O;
            } else {
                O = e[30];
            }
            v = O;
        }
        I = null;
        if (isShortcutShown && index < en) {
            let w;
            if (e[31] === Symbol.for("react.memo_cache_sentinel")) {
                w = {
                    className: "sand-3nfvp2 sand-6s0dn4 sand-195vfkc"
                };
                e[31] = w;
            } else {
                w = e[31];
            }
            let T;
            if (e[32] === Symbol.for("react.memo_cache_sentinel")) {
                T = <Z_1>{da}</Z_1>;
                e[32] = T;
            } else {
                T = e[32];
            }
            const O = index + 1;
            let oe;
            if (e[33] !== O) {
                oe = <span className={w.className}>{T}<Z_1>{O}</Z_1></span>;
                e[33] = O;
                e[34] = oe;
            } else {
                oe = e[34];
            }
            I = oe;
        } else if (J != null) {
            let w;
            if (e[35] === Symbol.for("react.memo_cache_sentinel")) {
                w = p_1(_.rowHint, a_.caption);
                e[35] = w;
            } else {
                w = e[35];
            }
            let T;
            if (e[36] !== J) {
                T = <span aria-hidden {...w}>{J}</span>;
                e[36] = J;
                e[37] = T;
            } else {
                T = e[37];
            }
            I = T;
        }
        g = index + 1;
        S = isHighlighted;
        D = setSize;
        q = r_2("sand-new-chat-row", N.className);
        e[0] = __1;
        e[1] = index;
        e[2] = isGroupCompose;
        e[3] = isHighlighted;
        e[4] = isShortcutShown;
        e[5] = overflowAnchor;
        e[6] = result;
        e[7] = setSize;
        e[8] = v;
        e[9] = k;
        e[10] = N;
        e[11] = g;
        e[12] = S;
        e[13] = D;
        e[14] = q;
        e[15] = I;
    } else {
        v = e[8];
        k = e[9];
        N = e[10];
        g = e[11];
        S = e[12];
        D = e[13];
        q = e[14];
        I = e[15];
    }
    let A;
    if (e[38] !== index || e[39] !== onActivate) {
        A = ()=>onActivate(index);
        e[38] = index;
        e[39] = onActivate;
        e[40] = A;
    } else {
        A = e[40];
    }
    let ne;
    if (e[41] !== index || e[42] !== onHover) {
        ne = ()=>onHover(index);
        e[41] = index;
        e[42] = onHover;
        e[43] = ne;
    } else {
        ne = e[43];
    }
    const N_style = N.style;
    let re;
    if (e[44] === Symbol.for("react.memo_cache_sentinel")) {
        re = {
            className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-vy4d1p sand-xk0z11 sand-2lah0s"
        };
        e[44] = re;
    } else {
        re = e[44];
    }
    let ae;
    if (e[45] !== v) {
        ae = <span className={re.className}>{v}</span>;
        e[45] = v;
        e[46] = ae;
    } else {
        ae = e[46];
    }
    const ge = result.kind === "agent" ? result.agent : null;
    let W;
    if (e[47] !== __1 || e[48] !== isRecipientSelected || e[49] !== result) {
        W = ja(__1, result, isRecipientSelected);
        e[47] = __1;
        e[48] = isRecipientSelected;
        e[49] = result;
        e[50] = W;
    } else {
        W = e[50];
    }
    let U;
    if (e[51] !== k) {
        U = k == null ? null : <> <span className="sand-169k319">{k}</span></>;
        e[51] = k;
        e[52] = U;
    } else {
        U = e[52];
    }
    let G;
    if (e[53] !== ge || e[54] !== W || e[55] !== U) {
        G = <Gs1Component agent={ge}>{W}{U}</Gs1Component>;
        e[53] = ge;
        e[54] = W;
        e[55] = U;
        e[56] = G;
    } else {
        G = e[56];
    }
    let ce;
    if (e[57] !== id || e[58] !== ref || e[59] !== N.style || e[60] !== g || e[61] !== G || e[62] !== S || e[63] !== D || e[64] !== q || e[65] !== A || e[66] !== ne || e[67] !== ae || e[68] !== I) {
        ce = <button aria-posinset={g} aria-selected={S} aria-setsize={D} className={q} id={id} onClick={A} onMouseDown={za} onMouseMove={ne} ref={ref} role="option" style={N_style} tabIndex={-1} type="button">{ae}{G}{I}</button>;
        e[57] = id;
        e[58] = ref;
        e[59] = N.style;
        e[60] = g;
        e[61] = G;
        e[62] = S;
        e[63] = D;
        e[64] = q;
        e[65] = A;
        e[66] = ne;
        e[67] = ae;
        e[68] = I;
        e[69] = ce;
    } else {
        ce = e[69];
    }
    return ce;
}
function za(t) {
    return t.preventDefault();
}
