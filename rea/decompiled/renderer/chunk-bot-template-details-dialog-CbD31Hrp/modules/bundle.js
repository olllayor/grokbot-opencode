import { c as c_1, u as u_1, j, T, r as r_1, p, i } from "./index.eager-vendor-Qbf9YA6n.js";
import { eP, b8, cq, eQ, bY, eR, eS, eT, eU, aP as Ce, da, eV, db, c$, eW, eX, eY, a_, a$, Q, eZ, s as $s } from "./index.eager-app-Cj5f8Gby.js";
import { aY as Ee, a_ as As } from "./index.eager-platform-Dcfeegfw.js";
import { z as _e, b5, b7, bv, J, p as Pe, x, b8 as b8_1, Q as Q_1, U, y as y_1, r as Es, L, I, P } from "./index-ZYxf-aBb.js";
import { u as u_2, W as W_1 } from "./chunk-wipe-navigation-B3wgZxtA.js";
import { r as r_2 } from "./chunk-bot-template-details-focus-BkZ83BHB.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "6b193885-ad5c-493b-a2e4-c49b732dbd43";
            e._sentryDebugIdIdentifier = "sentry-dbid-6b193885-ad5c-493b-a2e4-c49b732dbd43";
        }
    } catch (e) {}
})();
const Se = {
    description: {
        k9WMMc: "sand-2b8uid",
        $$css: true
    },
    action: {
        kjj79g: "sand-l56j7k",
        kzqmXN: "sand-h8yej3",
        $$css: true
    }
};
function DeComponent(n) {
    DeComponent.d = 142;
    const e = c_1.c(26);
    const { template, onDeleted } = n;
    const { _: __1 } = u_1();
    const { sendPrompt } = eP();
    const i = b8(sendPrompt);
    const l = cq();
    const c = eQ();
    const template_sourceAgentId = template.sourceAgentId;
    const u = bY(template_sourceAgentId ?? null);
    let f;
    if (e[0] !== u) {
        f = u == null || !eR(u);
        e[0] = u;
        e[1] = f;
    } else {
        f = e[1];
    }
    const m = f;
    let k;
    if (e[2] !== __1 || e[3] !== i || e[4] !== template_sourceAgentId) {
        k = ()=>{
            if (template_sourceAgentId != null) {
                i.dispatch({
                    agentId: template_sourceAgentId,
                    prompt: __1({
                        id: "sfB+W/"
                    }),
                    initiator: "template_share"
                });
            }
        };
        e[2] = __1;
        e[3] = i;
        e[4] = template_sourceAgentId;
        e[5] = k;
    } else {
        k = e[5];
    }
    const p = k;
    let y;
    if (e[6] !== onDeleted || e[7] !== c || e[8] !== l || e[9] !== template.name || e[10] !== template.shareId) {
        y = ()=>{
            l(eS({
                name: template.name,
                remove: async ()=>{
                    await c.run({
                        shareId: template.shareId
                    });
                    onDeleted();
                }
            }));
        };
        e[6] = onDeleted;
        e[7] = c;
        e[8] = l;
        e[9] = template.name;
        e[10] = template.shareId;
        e[11] = y;
    } else {
        y = e[11];
    }
    const h = y;
    let v;
    if (e[12] === Symbol.for("react.memo_cache_sentinel")) {
        v = {
            className: "sand-78zum5 sand-dt5ytf sand-1665zp3"
        };
        e[12] = v;
    } else {
        v = e[12];
    }
    let x;
    if (e[13] !== m || e[14] !== i || e[15] !== template_sourceAgentId || e[16] !== p) {
        x = template_sourceAgentId == null || !m ? null : <_e leadingIcon="refresh" onClick={p} pending={i.isPending} size="lg" style={Se.action} type="button" variant="secondary"><T id="Cwavou"/></_e>;
        e[13] = m;
        e[14] = i;
        e[15] = template_sourceAgentId;
        e[16] = p;
        e[17] = x;
    } else {
        x = e[17];
    }
    let j;
    if (e[18] === Symbol.for("react.memo_cache_sentinel")) {
        j = {
            className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d"
        };
        e[18] = j;
    } else {
        j = e[18];
    }
    let N;
    if (e[19] === Symbol.for("react.memo_cache_sentinel")) {
        N = <Ee color="secondary" rootStyle={Se.description} size="md"><T id="q3y8Bg"/></Ee>;
        e[19] = N;
    } else {
        N = e[19];
    }
    let I;
    if (e[20] === Symbol.for("react.memo_cache_sentinel")) {
        I = <T id="DFjdv0"/>;
        e[20] = I;
    } else {
        I = e[20];
    }
    let _;
    if (e[21] !== h) {
        _ = <div {...j}>{N}<_e leadingIcon="trash" onClick={h} sentiment="danger" size="lg" style={Se.action} type="button" variant="primary">{I}</_e></div>;
        e[21] = h;
        e[22] = _;
    } else {
        _ = e[22];
    }
    let z;
    if (e[23] !== x || e[24] !== _) {
        z = <div {...v}>{x}{_}</div>;
        e[23] = x;
        e[24] = _;
        e[25] = z;
    } else {
        z = e[25];
    }
    return z;
}
const Y = {
    instructions: {
        head: {
            id: "NxHkkp"
        },
        tail: {
            id: "nsWW87"
        }
    },
    memories: {
        head: {
            id: "QCEzof"
        },
        tail: {
            id: "9wcfqX"
        }
    },
    skills: {
        head: {
            id: "PCSkw2"
        },
        tail: {
            id: "gPdJ1+"
        }
    }
};
const Ne = {
    context: {
        id: "M73whl"
    },
    routines: {
        id: "dmYV6f"
    },
    integrations: {
        id: "nbfdhU"
    }
};
function Us() {
    const n = c_1.c(25);
    const { _ } = u_1();
    let s;
    if (n[0] !== _) {
        s = _(Y.instructions.head);
        n[0] = _;
        n[1] = s;
    } else {
        s = n[1];
    }
    let t;
    if (n[2] !== _) {
        t = _(Y.instructions.tail);
        n[2] = _;
        n[3] = t;
    } else {
        t = n[3];
    }
    let instructions;
    if (n[4] !== s || n[5] !== t) {
        instructions = {
            head: s,
            tail: t
        };
        n[4] = s;
        n[5] = t;
        n[6] = instructions;
    } else {
        instructions = n[6];
    }
    let a;
    if (n[7] !== _) {
        a = _(Y.memories.head);
        n[7] = _;
        n[8] = a;
    } else {
        a = n[8];
    }
    let i;
    if (n[9] !== _) {
        i = _(Y.memories.tail);
        n[9] = _;
        n[10] = i;
    } else {
        i = n[10];
    }
    let memories;
    if (n[11] !== a || n[12] !== i) {
        memories = {
            head: a,
            tail: i
        };
        n[11] = a;
        n[12] = i;
        n[13] = memories;
    } else {
        memories = n[13];
    }
    let c;
    if (n[14] !== _) {
        c = _(Y.skills.head);
        n[14] = _;
        n[15] = c;
    } else {
        c = n[15];
    }
    let r;
    if (n[16] !== _) {
        r = _(Y.skills.tail);
        n[16] = _;
        n[17] = r;
    } else {
        r = n[17];
    }
    let skills;
    if (n[18] !== c || n[19] !== r) {
        skills = {
            head: c,
            tail: r
        };
        n[18] = c;
        n[19] = r;
        n[20] = skills;
    } else {
        skills = n[20];
    }
    let f;
    if (n[21] !== instructions || n[22] !== memories || n[23] !== skills) {
        f = {
            instructions,
            memories,
            skills
        };
        n[21] = instructions;
        n[22] = memories;
        n[23] = skills;
        n[24] = f;
    } else {
        f = n[24];
    }
    return f;
}
function Ke() {
    const n = c_1.c(10);
    const { _ } = u_1();
    let context;
    if (n[0] !== _) {
        context = _(Ne.context);
        n[0] = _;
        n[1] = context;
    } else {
        context = n[1];
    }
    let routines;
    if (n[2] !== _) {
        routines = _(Ne.routines);
        n[2] = _;
        n[3] = routines;
    } else {
        routines = n[3];
    }
    let integrations;
    if (n[4] !== _) {
        integrations = _(Ne.integrations);
        n[4] = _;
        n[5] = integrations;
    } else {
        integrations = n[5];
    }
    let a;
    if (n[6] !== context || n[7] !== routines || n[8] !== integrations) {
        a = {
            context,
            routines,
            integrations
        };
        n[6] = context;
        n[7] = routines;
        n[8] = integrations;
        n[9] = a;
    } else {
        a = n[9];
    }
    return a;
}
function ke(n) {
    return (n ?? []).length > 0;
}
function We(n) {
    return n.replace(/\s+/g, " ").trim().length > 0;
}
const Gs = {
    instructions: (n)=>We(n.description),
    memories: (n)=>ke(n.memory),
    skills: (n)=>ke(n.skills)
};
const Qs = {
    context: (n)=>Ie(n).length > 0,
    routines: (n)=>ke(n.routines),
    integrations: (n)=>ke(n.plugins)
};
function Fe(n, e) {
    const s = [];
    for (const t of Object.keys(n)){
        if (eT(n, t) && n[t](e)) {
            s.push(t);
        }
    }
    return s;
}
function Ie(n) {
    return Fe(Gs, n);
}
function Ys(template) {
    return Fe(Qs, template);
}
function Hs(n, e) {
    return eU(n.map((s, t)=>{
        if (t === 0) {
            return e[s].head;
        }
        return e[s].tail;
    }));
}
function Js(n, e) {
    const s = n[0];
    if (s == null) {
        return "";
    }
    const t = n.length - 1;
    if (t === 0) {
        return s;
    }
    return e(s, t);
}
function en(template) {
    return (template.routines ?? []).map((e)=>e.name);
}
function sn(template) {
    return (template.plugins ?? []).map((e)=>e.name);
}
function Ze1Component(n) {
    Ze1Component.d = 270;
    const e = c_1.c(21);
    const { mode } = n;
    let t;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        t = {
            className: "sand-wz0xwf sand-6s0dn4 sand-1o2pa38"
        };
        e[0] = t;
    } else {
        t = e[0];
    }
    let d;
    if (e[1] !== mode) {
        d = ({
            0: {
                className: "sand-1agbcgv sand-crlgei sand-3nfvp2 sand-6s0dn4 sand-17d4w8g"
            },
            1: {
                className: "sand-1agbcgv sand-crlgei sand-3nfvp2 sand-6s0dn4 sand-17d4w8g sand-lshs6z"
            }
        })[(mode !== "publish") << 0];
        e[1] = mode;
        e[2] = d;
    } else {
        d = e[2];
    }
    let a;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        a = <T id="EEYbdt"/>;
        e[3] = a;
    } else {
        a = e[3];
    }
    let i;
    if (e[4] !== d) {
        i = <span {...d}>{a}</span>;
        e[4] = d;
        e[5] = i;
    } else {
        i = e[5];
    }
    let l;
    if (e[6] !== mode) {
        l = ({
            0: {
                className: "sand-1agbcgv sand-crlgei sand-3nfvp2 sand-6s0dn4 sand-17d4w8g"
            },
            1: {
                className: "sand-1agbcgv sand-crlgei sand-3nfvp2 sand-6s0dn4 sand-17d4w8g sand-lshs6z"
            }
        })[(mode !== "publishing") << 0];
        e[6] = mode;
        e[7] = l;
    } else {
        l = e[7];
    }
    let c;
    let r;
    if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
        c = <Ce borderWidth={1.5} inheritColor size={14}/>;
        r = <T id="ABCjd9"/>;
        e[8] = c;
        e[9] = r;
    } else {
        c = e[8];
        r = e[9];
    }
    let u;
    if (e[10] !== l) {
        u = <span {...l}>{c}{r}</span>;
        e[10] = l;
        e[11] = u;
    } else {
        u = e[11];
    }
    let f;
    if (e[12] !== mode) {
        f = ({
            0: {
                className: "sand-1agbcgv sand-crlgei sand-3nfvp2 sand-6s0dn4 sand-17d4w8g"
            },
            1: {
                className: "sand-1agbcgv sand-crlgei sand-3nfvp2 sand-6s0dn4 sand-17d4w8g sand-lshs6z"
            }
        })[(mode !== "copy-link") << 0];
        e[12] = mode;
        e[13] = f;
    } else {
        f = e[13];
    }
    let m;
    if (e[14] === Symbol.for("react.memo_cache_sentinel")) {
        m = <T id="y1eoq1"/>;
        e[14] = m;
    } else {
        m = e[14];
    }
    let k;
    if (e[15] !== f) {
        k = <span {...f}>{m}</span>;
        e[15] = f;
        e[16] = k;
    } else {
        k = e[16];
    }
    let p;
    if (e[17] !== k || e[18] !== i || e[19] !== u) {
        p = <span {...t}>{i}{u}{k}</span>;
        e[17] = k;
        e[18] = i;
        e[19] = u;
        e[20] = p;
    } else {
        p = e[20];
    }
    return p;
}
const sizePx = 80;
const size = 36;
const w = {
    surface: {
        kZKoxP: "sand-1tihs1c",
        $$css: true
    },
    body: {
        k1xSpc: "sand-78zum5",
        kXwgrk: "sand-dt5ytf",
        kAzted: "sand-2lwn1j",
        kzQI83: "sand-1iyjqo2",
        kLKAdn: "sand-exx8yu",
        kwRFfy: "sand-yri2b",
        kGO01o: "sand-18d9i69",
        kZCmMZ: "sand-1c1uobl",
        kXHlph: "sand-6ikm8r",
        kORKVm: "sand-10wlt62",
        $$css: true
    },
    mark: {
        k3nNDw: "sand-tj8gnn",
        k3aq6I: "sand-vvkyix",
        k1ekBW: "sand-11xpdln sand-4wkmsb",
        kIyJzY: "sand-q8ykup sand-12w9bfk",
        kAMwcw: "sand-1554a8d",
        $$css: true
    },
    markCompact: {
        k3aq6I: "sand-1ov92gx",
        $$css: true
    },
    title: {
        k9WMMc: "sand-2b8uid",
        kMwMTN: "sand-tyxrsu",
        $$css: true
    },
    mainViewScroll: {
        k7Eaqz: "sand-euugli",
        kAzted: "sand-2lwn1j",
        kzQI83: "sand-1iyjqo2",
        $$css: true
    },
    creator: {
        kMwMTN: "sand-1o0liin",
        k9WMMc: "sand-2b8uid",
        $$css: true
    },
    description: {
        keoZOQ: "sand-dj266r",
        k71WvV: "sand-14z9mp",
        k1K539: "sand-at24cr",
        keTefX: "sand-1lziwak",
        k9WMMc: "sand-2b8uid",
        kMwMTN: "sand-1o0liin",
        k1xSpc: "sand-104kibb",
        kJFfOR: "sand-1gzmk7r",
        kgKLqz: "sand-1ua5tub",
        kXHlph: "sand-6ikm8r",
        kORKVm: "sand-10wlt62",
        kTgw9: "sand-13faqbe",
        $$css: true
    },
    sectionLabel: {
        kB7OPa: "sand-9f619",
        k7Eaqz: "sand-euugli",
        kZKoxP: "sand-1gnnpzl",
        kLKAdn: "sand-1y1aw1k",
        kwRFfy: "sand-f159sx",
        kGO01o: "sand-10b6aqq",
        kZCmMZ: "sand-mzvs34",
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
    footer: {
        kLKAdn: "sand-889kno",
        kGO01o: "sand-sag5q8",
        kEafiO: "sand-1hc762m",
        kPef9Z: "sand-13fuv20",
        kLZC3w: "sand-t8lcch",
        $$css: true
    },
    shareFooter: {
        k1xSpc: "sand-78zum5",
        kXwgrk: "sand-dt5ytf",
        kGNEyG: "sand-1qjc9v5",
        kjj79g: "sand-1nhvcw1",
        kOIVth: "sand-167g77z",
        kLKAdn: "sand-889kno",
        kGO01o: "sand-sag5q8",
        kEafiO: "sand-1hc762m",
        kPef9Z: "sand-13fuv20",
        kLZC3w: "sand-t8lcch",
        $$css: true
    },
    subviewTitleLabel: {
        kg5iWk: "sand-lyipyv",
        k9WMMc: "sand-2b8uid",
        khDVqt: "sand-uxw1ft",
        $$css: true
    },
    textCardBody: {
        keoZOQ: "sand-dj266r",
        k71WvV: "sand-14z9mp",
        k1K539: "sand-at24cr",
        keTefX: "sand-1lziwak",
        k7Eaqz: "sand-euugli",
        khDVqt: "sand-126k92a",
        kHjlTd: "sand-1mzt3pk",
        kMwMTN: "sand-tyxrsu",
        $$css: true
    }
};
function Ze(content, e) {
    return `${e}:${content}`;
}
function Xe(template, key) {
    return (template.memory ?? []).find((s, t)=>Ze(s.content, t) === key);
}
function Ue(template, key) {
    return (template.skills ?? []).find((s)=>s.name === key);
}
function Ge(template, key) {
    return (template.routines ?? []).find((s)=>s.slug === key);
}
function PComponent(n) {
    PComponent.d = 250;
    const e = c_1.c(9);
    const { padded, children } = n;
    const d = padded === undefined ? false : padded;
    let a;
    let i;
    if (e[0] !== children || e[1] !== d) {
        const c = r_1.Children.toArray(children);
        if (e[4] !== d) {
            a = ({
                0: {
                    className: "sand-78zum5 sand-dt5ytf sand-euugli sand-hojbe8 sand-1b8i4yy sand-b3r6kr"
                },
                1: {
                    className: "sand-78zum5 sand-dt5ytf sand-euugli sand-hojbe8 sand-1b8i4yy sand-b3r6kr sand-1iorvi4 sand-11lfxj5 sand-jkvuk6 sand-135b78x"
                }
            })[!!d << 0];
            e[4] = d;
            e[5] = a;
        } else {
            a = e[5];
        }
        i = c.map(AnComponent);
        e[0] = children;
        e[1] = d;
        e[2] = a;
        e[3] = i;
    } else {
        a = e[2];
        i = e[3];
    }
    let l;
    if (e[6] !== a || e[7] !== i) {
        l = <div {...a}>{i}</div>;
        e[6] = a;
        e[7] = i;
        e[8] = l;
    } else {
        l = e[8];
    }
    return l;
}
function AnComponent(n, e) {
    return <r_1.Fragment key={e}>{e > 0 ? <div className="sand-f159sx sand-mzvs34"><$s/></div> : null}{n}</r_1.Fragment>;
}
function JComponent(n) {
    JComponent.d = 251;
    const e = c_1.c(16);
    const { label, description, leading, onOpen, paneKey } = n;
    let l;
    if (e[0] !== description) {
        l = description == null ? {} : {
            description
        };
        e[0] = description;
        e[1] = l;
    } else {
        l = e[1];
    }
    let c;
    if (e[2] !== leading) {
        c = leading == null ? {} : {
            leading
        };
        e[2] = leading;
        e[3] = c;
    } else {
        c = e[3];
    }
    let r;
    if (e[4] !== l || e[5] !== c) {
        r = {
            ...l,
            ...c
        };
        e[4] = l;
        e[5] = c;
        e[6] = r;
    } else {
        r = e[6];
    }
    const u = r;
    if (onOpen == null) {
        let k;
        if (e[7] !== label || e[8] !== u) {
            k = <Es label={label} size="lg" style={w.detailsRow} {...u}/>;
            e[7] = label;
            e[8] = u;
            e[9] = k;
        } else {
            k = e[9];
        }
        return k;
    }
    let trailing;
    if (e[10] === Symbol.for("react.memo_cache_sentinel")) {
        trailing = <I aria-hidden name="chevron-right" size="xs"/>;
        e[10] = trailing;
    } else {
        trailing = e[10];
    }
    let m;
    if (e[11] !== label || e[12] !== onOpen || e[13] !== u || e[14] !== paneKey) {
        m = <L data-details-pane={paneKey} label={label} size="lg" style={w.detailsRow} onClick={onOpen} trailing={trailing} {...u}/>;
        e[11] = label;
        e[12] = onOpen;
        e[13] = u;
        e[14] = paneKey;
        e[15] = m;
    } else {
        m = e[15];
    }
    return m;
}
function EComponent(n) {
    EComponent.d = 266;
    const e = c_1.c(8);
    const { value, tall } = n;
    const d = tall === undefined ? false : tall;
    let a;
    if (e[0] !== d) {
        a = ({
            0: {
                className: "sand-9f619 sand-h8yej3 sand-889kno sand-2vl965 sand-1a8lsjc sand-e2zdcy sand-6ikm8r sand-1odjw0f"
            },
            1: {
                className: "sand-9f619 sand-h8yej3 sand-889kno sand-2vl965 sand-1a8lsjc sand-e2zdcy sand-6ikm8r sand-1odjw0f sand-7v6ubd"
            }
        })[!!d << 0];
        e[0] = d;
        e[1] = a;
    } else {
        a = e[1];
    }
    let i;
    if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        i = p(a_.body1, w.textCardBody);
        e[2] = i;
    } else {
        i = e[2];
    }
    let l;
    if (e[3] !== value) {
        l = <p {...i}>{value}</p>;
        e[3] = value;
        e[4] = l;
    } else {
        l = e[4];
    }
    let c;
    if (e[5] !== a || e[6] !== l) {
        c = <PComponent padded><div {...a}>{l}</div></PComponent>;
        e[5] = a;
        e[6] = l;
        e[7] = c;
    } else {
        c = e[7];
    }
    return c;
}
function QeComponent(n) {
    QeComponent.d = 262;
    const e = c_1.c(8);
    const { name, pluginId, resolve } = n;
    let a;
    if (e[0] !== name || e[1] !== pluginId || e[2] !== resolve) {
        a = resolve(name) ?? resolve(pluginId);
        e[0] = name;
        e[1] = pluginId;
        e[2] = resolve;
        e[3] = a;
    } else {
        a = e[3];
    }
    const i = a;
    const iconId = i?.iconId;
    const iconUrl = i?.iconUrl;
    let r;
    if (e[4] !== name || e[5] !== iconId || e[6] !== iconUrl) {
        r = <P iconId={iconId} iconUrl={iconUrl} name={name} size={size}/>;
        e[4] = name;
        e[5] = iconId;
        e[6] = iconUrl;
        e[7] = r;
    } else {
        r = e[7];
    }
    return r;
}
function ln(n) {
    return Js(n, (lead, restCount)=>i._({
            id: "ysihpT",
            values: {
                restCount,
                lead
            }
        }));
}
function dn(n, template, s) {
    switch(n){
        case "context":
            return Hs(Ie(template), s);
        case "routines":
            return ln(en(template));
        default:
            return eZ(sn(template));
    }
}
function Ye(status) {
    return status.kind === "logged-in" && status.displayName?.trim() || undefined;
}
function He(n) {
    const e = n.creatorName?.trim() || undefined;
    if (n.sourceAgentId != null && n.signedInName != null && (e == null || e === n.signedInName)) {
        if (n.updatedOn == null) {
            return undefined;
        }
        return {
            kind: "updated",
            updatedOn: n.updatedOn
        };
    }
    if (e != null) {
        return {
            kind: "by",
            name: e,
            updatedOn: n.updatedOn
        };
    }
}
function Pe1Component(n) {
    Pe1Component.d = 256;
    const e = c_1.c(2);
    const { updatedOn } = n;
    let t;
    if (e[0] !== updatedOn) {
        t = <T id="FJvi2S" values={{
            updatedOn
        }}/>;
        e[0] = updatedOn;
        e[1] = t;
    } else {
        t = e[1];
    }
    return t;
}
function JeComponent(n) {
    JeComponent.d = 265;
    const e = c_1.c(11);
    const { lead } = n;
    if (lead.kind === "updated") {
        let c;
        if (e[0] !== lead.updatedOn) {
            c = <Pe1Component updatedOn={lead.updatedOn}/>;
            e[0] = lead.updatedOn;
            e[1] = c;
        } else {
            c = e[1];
        }
        return c;
    }
    let t;
    if (e[2] !== lead.name) {
        t = {
            creatorName: lead.name
        };
        e[2] = lead.name;
        e[3] = t;
    } else {
        t = e[3];
    }
    const d = t;
    let a;
    if (e[4] !== d.creatorName) {
        a = <T id="aavdrC" values={{
            0: d.creatorName
        }}/>;
        e[4] = d.creatorName;
        e[5] = a;
    } else {
        a = e[5];
    }
    let i;
    if (e[6] !== lead.updatedOn) {
        i = lead.updatedOn == null ? null : <><span aria-hidden> · </span><Pe1Component updatedOn={lead.updatedOn}/></>;
        e[6] = lead.updatedOn;
        e[7] = i;
    } else {
        i = e[7];
    }
    let l;
    if (e[8] !== a || e[9] !== i) {
        l = <>{a}{i}</>;
        e[8] = a;
        e[9] = i;
        e[10] = l;
    } else {
        l = e[10];
    }
    return l;
}
function Es1Component(n) {
    Es1Component.d = 258;
    const e = c_1.c(18);
    const { template, description } = n;
    const { status } = eW();
    let a;
    if (e[0] !== status || e[1] !== template.createdAtMs || e[2] !== template.creatorName || e[3] !== template.sourceAgentId || e[4] !== template.updatedAtMs) {
        const updatedOn = eX(template.updatedAtMs ?? template.createdAtMs, eY());
        a = He({
            creatorName: template.creatorName,
            sourceAgentId: template.sourceAgentId,
            signedInName: Ye(status),
            updatedOn
        });
        e[0] = status;
        e[1] = template.createdAtMs;
        e[2] = template.creatorName;
        e[3] = template.sourceAgentId;
        e[4] = template.updatedAtMs;
        e[5] = a;
    } else {
        a = e[5];
    }
    const lead = a;
    let l;
    if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
        l = {
            className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-195vfkc sand-1y1aw1k sand-wib8y2"
        };
        e[6] = l;
    } else {
        l = e[6];
    }
    let c;
    if (e[7] === Symbol.for("react.memo_cache_sentinel")) {
        c = [
            a_.heading3,
            a$.medium,
            w.title
        ];
        e[7] = c;
    } else {
        c = e[7];
    }
    let r;
    if (e[8] !== template.name) {
        r = <x.Title style={c}>{template.name}</x.Title>;
        e[8] = template.name;
        e[9] = r;
    } else {
        r = e[9];
    }
    let u;
    if (e[10] !== lead) {
        u = lead == null ? null : <div {...p(a_.body2, w.creator)}><JeComponent lead={lead}/></div>;
        e[10] = lead;
        e[11] = u;
    } else {
        u = e[11];
    }
    let f;
    if (e[12] !== description) {
        f = description.length > 0 ? <div className="sand-2lah0s sand-1iorvi4"><x.Description style={[
            a_.body1,
            w.description
        ]}>{description}</x.Description></div> : null;
        e[12] = description;
        e[13] = f;
    } else {
        f = e[13];
    }
    let m;
    if (e[14] !== r || e[15] !== u || e[16] !== f) {
        m = <div {...l}>{r}{u}{f}</div>;
        e[14] = r;
        e[15] = u;
        e[16] = f;
        e[17] = m;
    } else {
        m = e[17];
    }
    return m;
}
function Ss1Component(n) {
    Ss1Component.d = 257;
    const e = c_1.c(17);
    const { onOpen, template } = n;
    const d = Us();
    const a = Ke();
    let i;
    let padded;
    let children;
    let r;
    let u;
    if (e[0] !== d || e[1] !== onOpen || e[2] !== template || e[3] !== a) {
        u = Symbol.for("react.early_return_sentinel");
        e: {
            const k = Ys(template);
            if (k.length === 0) {
                u = null;
                break e;
            }
            if (e[9] === Symbol.for("react.memo_cache_sentinel")) {
                r = {
                    className: "sand-yamay9"
                };
                e[9] = r;
            } else {
                r = e[9];
            }
            i = PComponent;
            padded = true;
            children = k.map((p)=><JComponent key={p} description={dn(p, template, d)} label={a[p]} onOpen={()=>onOpen(p)} paneKey={p}/>);
        }
        e[0] = d;
        e[1] = onOpen;
        e[2] = template;
        e[3] = a;
        e[4] = i;
        e[5] = padded;
        e[6] = children;
        e[7] = r;
        e[8] = u;
    } else {
        i = e[4];
        padded = e[5];
        children = e[6];
        r = e[7];
        u = e[8];
    }
    if (u !== Symbol.for("react.early_return_sentinel")) {
        return u;
    }
    let f;
    if (e[10] !== i || e[11] !== padded || e[12] !== children) {
        f = j.jsx(i, {
            padded,
            children
        });
        e[10] = i;
        e[11] = padded;
        e[12] = children;
        e[13] = f;
    } else {
        f = e[13];
    }
    let m;
    if (e[14] !== r || e[15] !== f) {
        m = <div {...r}>{f}</div>;
        e[14] = r;
        e[15] = f;
        e[16] = m;
    } else {
        m = e[16];
    }
    return m;
}
function Ee1Component(n) {
    Ee1Component.d = 263;
    const e = c_1.c(7);
    const { label, children } = n;
    let d;
    let a;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        d = {
            className: "sand-78zum5 sand-dt5ytf"
        };
        a = p(a_.label, w.sectionLabel);
        e[0] = d;
        e[1] = a;
    } else {
        d = e[0];
        a = e[1];
    }
    let i;
    if (e[2] !== label) {
        i = <div {...a}>{label}</div>;
        e[2] = label;
        e[3] = i;
    } else {
        i = e[3];
    }
    let l;
    if (e[4] !== children || e[5] !== i) {
        l = <div {...d}>{i}{children}</div>;
        e[4] = children;
        e[5] = i;
        e[6] = l;
    } else {
        l = e[6];
    }
    return l;
}
function Ns1Component(n) {
    Ns1Component.d = 249;
    const e = c_1.c(6);
    const { onOpenMemory, onOpenSkill, template } = n;
    let a;
    if (e[0] !== onOpenMemory || e[1] !== onOpenSkill || e[2] !== template) {
        a = Ie(template).map((c)=><Ts1Component key={c} onOpenMemory={onOpenMemory} onOpenSkill={onOpenSkill} part={c} template={template}/>);
        e[0] = onOpenMemory;
        e[1] = onOpenSkill;
        e[2] = template;
        e[3] = a;
    } else {
        a = e[3];
    }
    let i;
    if (e[4] !== a) {
        i = <>{a}</>;
        e[4] = a;
        e[5] = i;
    } else {
        i = e[5];
    }
    return i;
}
function Ts1Component(n) {
    Ts1Component.d = 248;
    const e = c_1.c(23);
    const { part, template, onOpenMemory, onOpenSkill } = n;
    if (part === "instructions") {
        const f = template.description.replace(/\s+/g, " ").trim();
        if (!We(f)) {
            return null;
        }
        let m;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            m = <T id="NxHkkp"/>;
            e[0] = m;
        } else {
            m = e[0];
        }
        let k;
        if (e[1] !== template.description) {
            k = <Ee1Component label={m}><EComponent tall value={template.description}/></Ee1Component>;
            e[1] = template.description;
            e[2] = k;
        } else {
            k = e[2];
        }
        return k;
    }
    if (part === "memories") {
        let f;
        if (e[3] !== template.memory) {
            f = template.memory ?? [];
            e[3] = template.memory;
            e[4] = f;
        } else {
            f = e[4];
        }
        const m = f;
        if (m.length === 0) {
            return null;
        }
        let k;
        if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
            k = <T id="QCEzof"/>;
            e[5] = k;
        } else {
            k = e[5];
        }
        let p;
        if (e[6] !== m || e[7] !== onOpenMemory) {
            let h;
            if (e[9] !== onOpenMemory) {
                h = (v, x)=>{
                    const j = Ze(v.content, x);
                    return <JComponent key={j} label={v.content} onOpen={()=>onOpenMemory(j)} paneKey={paneKey({
                        kind: "memory",
                        key: j
                    })}/>;
                };
                e[9] = onOpenMemory;
                e[10] = h;
            } else {
                h = e[10];
            }
            p = m.map(h);
            e[6] = m;
            e[7] = onOpenMemory;
            e[8] = p;
        } else {
            p = e[8];
        }
        let y;
        if (e[11] !== p) {
            y = <Ee1Component label={k}><PComponent padded>{p}</PComponent></Ee1Component>;
            e[11] = p;
            e[12] = y;
        } else {
            y = e[12];
        }
        return y;
    }
    let i;
    if (e[13] !== template.skills) {
        i = template.skills ?? [];
        e[13] = template.skills;
        e[14] = i;
    } else {
        i = e[14];
    }
    const l = i;
    if (l.length === 0) {
        return null;
    }
    let c;
    if (e[15] === Symbol.for("react.memo_cache_sentinel")) {
        c = <T id="PCSkw2"/>;
        e[15] = c;
    } else {
        c = e[15];
    }
    let r;
    if (e[16] !== onOpenSkill || e[17] !== l) {
        let f;
        if (e[19] !== onOpenSkill) {
            f = (m)=><JComponent key={m.name} label={m.name} onOpen={()=>onOpenSkill(m.name)} paneKey={paneKey({
                    kind: "skill",
                    key: m.name
                })}/>;
            e[19] = onOpenSkill;
            e[20] = f;
        } else {
            f = e[20];
        }
        r = l.map(f);
        e[16] = onOpenSkill;
        e[17] = l;
        e[18] = r;
    } else {
        r = e[18];
    }
    let u;
    if (e[21] !== r) {
        u = <Ee1Component label={c}><PComponent padded>{r}</PComponent></Ee1Component>;
        e[21] = r;
        e[22] = u;
    } else {
        u = e[22];
    }
    return u;
}
function As1Component(n) {
    As1Component.d = 260;
    const e = c_1.c(9);
    const { items, onOpen, rowPaneKey } = n;
    let a;
    if (e[0] !== items || e[1] !== onOpen || e[2] !== rowPaneKey) {
        let l;
        if (e[4] !== onOpen || e[5] !== rowPaneKey) {
            l = (c)=><JComponent key={c.key} label={c.title} {...c.description == null ? {} : {
                    description: c.description
                }} {...onOpen == null ? {} : {
                    onOpen: ()=>onOpen(c.key)
                }} {...rowPaneKey == null ? {} : {
                    paneKey: rowPaneKey(c.key)
                }}/>;
            e[4] = onOpen;
            e[5] = rowPaneKey;
            e[6] = l;
        } else {
            l = e[6];
        }
        a = items.map(l);
        e[0] = items;
        e[1] = onOpen;
        e[2] = rowPaneKey;
        e[3] = a;
    } else {
        a = e[3];
    }
    let i;
    if (e[7] !== a) {
        i = <PComponent padded>{a}</PComponent>;
        e[7] = a;
        e[8] = i;
    } else {
        i = e[8];
    }
    return i;
}
function Ls1Component(n) {
    Ls1Component.d = 253;
    const e = c_1.c(7);
    const { items, resolve } = n;
    let d;
    if (e[0] !== items || e[1] !== resolve) {
        let i;
        if (e[3] !== resolve) {
            i = (l)=><JComponent key={l.key} label={l.title} leading=<QeComponent name={l.title} pluginId={l.key} resolve={resolve}/> {...l.description == null ? {} : {
                    description: l.description
                }}/>;
            e[3] = resolve;
            e[4] = i;
        } else {
            i = e[4];
        }
        d = items.map(i);
        e[0] = items;
        e[1] = resolve;
        e[2] = d;
    } else {
        d = e[2];
    }
    let a;
    if (e[5] !== d) {
        a = <PComponent padded>{d}</PComponent>;
        e[5] = d;
        e[6] = a;
    } else {
        a = e[6];
    }
    return a;
}
function He1Component(n) {
    He1Component.d = 252;
    const e = c_1.c(5);
    const { label, value } = n;
    let d;
    if (e[0] !== value) {
        d = <EComponent value={value}/>;
        e[0] = value;
        e[1] = d;
    } else {
        d = e[1];
    }
    let a;
    if (e[2] !== label || e[3] !== d) {
        a = <Ee1Component label={label}>{d}</Ee1Component>;
        e[2] = label;
        e[3] = d;
        e[4] = a;
    } else {
        a = e[4];
    }
    return a;
}
function OeComponent(n) {
    OeComponent.d = 254;
    const e = c_1.c(8);
    const { description, content } = n;
    let d;
    if (e[0] !== description) {
        d = description != null && description.length > 0 ? <He1Component label=<T id="Nu4oKW"/> value={description}/> : null;
        e[0] = description;
        e[1] = d;
    } else {
        d = e[1];
    }
    let a;
    if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        a = <T id="4b3oEV"/>;
        e[2] = a;
    } else {
        a = e[2];
    }
    let i;
    if (e[3] !== content) {
        i = <He1Component label={a} value={content}/>;
        e[3] = content;
        e[4] = i;
    } else {
        i = e[4];
    }
    let l;
    if (e[5] !== d || e[6] !== i) {
        l = <>{d}{i}</>;
        e[5] = d;
        e[6] = i;
        e[7] = l;
    } else {
        l = e[7];
    }
    return l;
}
function Is1Component(n) {
    Is1Component.d = 255;
    const e = c_1.c(15);
    const { pane, template } = n;
    if (pane.kind === "memory") {
        let l;
        if (e[0] !== pane.key || e[1] !== template) {
            l = Xe(template, pane.key);
            e[0] = pane.key;
            e[1] = template;
            e[2] = l;
        } else {
            l = e[2];
        }
        const c = l;
        let r;
        if (e[3] !== c) {
            r = c == null ? null : <He1Component label=<T id="4b3oEV"/> value={c.content}/>;
            e[3] = c;
            e[4] = r;
        } else {
            r = e[4];
        }
        return r;
    }
    if (pane.kind === "skill") {
        let l;
        if (e[5] !== pane.key || e[6] !== template) {
            l = Ue(template, pane.key);
            e[5] = pane.key;
            e[6] = template;
            e[7] = l;
        } else {
            l = e[7];
        }
        const c = l;
        let r;
        if (e[8] !== c) {
            r = c == null ? null : <OeComponent content={c.content} description={c.description}/>;
            e[8] = c;
            e[9] = r;
        } else {
            r = e[9];
        }
        return r;
    }
    let d;
    if (e[10] !== pane.key || e[11] !== template) {
        d = Ge(template, pane.key);
        e[10] = pane.key;
        e[11] = template;
        e[12] = d;
    } else {
        d = e[12];
    }
    const a = d;
    let i;
    if (e[13] !== a) {
        i = a == null ? null : <OeComponent content={a.content} description={a.description}/>;
        e[13] = a;
        e[14] = i;
    } else {
        i = e[14];
    }
    return i;
}
function Ds1Component(n) {
    Ds1Component.d = 264;
    const e = c_1.c(24);
    const { pane, template, resolve, onDeleted, onOpenMemory, onOpenSkill, onOpenAutomation } = n;
    if (pane.kind === "settings") {
        let u;
        if (e[0] !== onDeleted || e[1] !== template) {
            u = <DeComponent onDeleted={onDeleted} template={template}/>;
            e[0] = onDeleted;
            e[1] = template;
            e[2] = u;
        } else {
            u = e[2];
        }
        return u;
    }
    if (pane.kind === "context") {
        let u;
        if (e[3] !== onOpenMemory || e[4] !== onOpenSkill || e[5] !== template) {
            u = <Ns1Component onOpenMemory={onOpenMemory} onOpenSkill={onOpenSkill} template={template}/>;
            e[3] = onOpenMemory;
            e[4] = onOpenSkill;
            e[5] = template;
            e[6] = u;
        } else {
            u = e[6];
        }
        return u;
    }
    if (pane.kind === "routines") {
        let u;
        if (e[7] !== template.routines) {
            u = template.routines ?? [];
            e[7] = template.routines;
            e[8] = u;
        } else {
            u = e[8];
        }
        let f;
        if (e[9] !== u) {
            f = u.map(cn);
            e[9] = u;
            e[10] = f;
        } else {
            f = e[10];
        }
        let m;
        if (e[11] !== onOpenAutomation || e[12] !== f) {
            m = <As1Component items={f} onOpen={onOpenAutomation} rowPaneKey={rowPaneKey}/>;
            e[11] = onOpenAutomation;
            e[12] = f;
            e[13] = m;
        } else {
            m = e[13];
        }
        return m;
    }
    if (pane.kind === "integrations") {
        let u;
        if (e[14] !== template.plugins) {
            u = template.plugins ?? [];
            e[14] = template.plugins;
            e[15] = u;
        } else {
            u = e[15];
        }
        let f;
        if (e[16] !== u) {
            f = u.map(on);
            e[16] = u;
            e[17] = f;
        } else {
            f = e[17];
        }
        let m;
        if (e[18] !== resolve || e[19] !== f) {
            m = <Ls1Component items={f} resolve={resolve}/>;
            e[18] = resolve;
            e[19] = f;
            e[20] = m;
        } else {
            m = e[20];
        }
        return m;
    }
    let r;
    if (e[21] !== pane || e[22] !== template) {
        r = <Is1Component pane={pane} template={template}/>;
        e[21] = pane;
        e[22] = template;
        e[23] = r;
    } else {
        r = e[23];
    }
    return r;
}
function on(n) {
    return {
        key: n.pluginId,
        title: n.name,
        ...n.description == null ? {} : {
            description: n.description
        }
    };
}
function rowPaneKey(n) {
    return paneKey({
        kind: "automation",
        key: n
    });
}
function cn(n) {
    return {
        key: n.slug,
        title: n.name
    };
}
function Os1Component(n) {
    Os1Component.d = 245;
    const e = c_1.c(17);
    const { share } = n;
    const { _ } = u_1();
    if (share.isPublished) {
        const onClick = share.copyLink;
        let m;
        if (e[0] !== _) {
            m = _({
                id: "/OV88s"
            });
            e[0] = _;
            e[1] = m;
        } else {
            m = e[1];
        }
        let k;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            k = <Ze1Component mode="copy-link"/>;
            e[2] = k;
        } else {
            k = e[2];
        }
        let p;
        if (e[3] !== share.copyLink || e[4] !== m) {
            p = <x.Action onClick={onClick} title={m} variant="primary">{k}</x.Action>;
            e[3] = share.copyLink;
            e[4] = m;
            e[5] = p;
        } else {
            p = e[5];
        }
        return p;
    }
    if (!share.isAvailable) {
        return null;
    }
    const share_isPublishing = share.isPublishing;
    let a;
    if (e[6] !== share) {
        a = ()=>{
            share.publish();
        };
        e[6] = share;
        e[7] = a;
    } else {
        a = e[7];
    }
    const share_isPublishing_1 = share.isPublishing;
    let l;
    if (e[8] !== _) {
        l = _({
            id: "eORZUT"
        });
        e[8] = _;
        e[9] = l;
    } else {
        l = e[9];
    }
    const mode = share.isPublishing ? "publishing" : "publish";
    let r;
    if (e[10] !== mode) {
        r = <Ze1Component mode={mode}/>;
        e[10] = mode;
        e[11] = r;
    } else {
        r = e[11];
    }
    let u;
    if (e[12] !== share.isPublishing || e[13] !== a || e[14] !== l || e[15] !== r) {
        u = <_e disabled={share_isPublishing} onClick={a} pending={share_isPublishing_1} title={l} type="button" variant="primary">{r}</_e>;
        e[12] = share.isPublishing;
        e[13] = a;
        e[14] = l;
        e[15] = r;
        e[16] = u;
    } else {
        u = e[16];
    }
    return u;
}
function Rs1Component(n) {
    Rs1Component.d = 247;
    const e = c_1.c(7);
    const { leading, share } = n;
    let d;
    let a;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        d = {
            className: "sand-78zum5 sand-dt5ytf sand-167g77z sand-1qjc9v5 sand-euugli sand-h8yej3"
        };
        a = {
            className: "sand-78zum5 sand-6s0dn4 sand-13a6bvl sand-167g77z sand-euugli"
        };
        e[0] = d;
        e[1] = a;
    } else {
        d = e[0];
        a = e[1];
    }
    let i;
    if (e[2] !== share) {
        i = <div {...a}><Os1Component share={share}/></div>;
        e[2] = share;
        e[3] = i;
    } else {
        i = e[3];
    }
    let l;
    if (e[4] !== leading || e[5] !== i) {
        l = <x.ActionBar style={w.shareFooter}><div data-testid="sand-bot-template-details-footer" {...d}>{i}{leading}</div></x.ActionBar>;
        e[4] = leading;
        e[5] = i;
        e[6] = l;
    } else {
        l = e[6];
    }
    return l;
}
function Cs1Component(n) {
    Cs1Component.d = 259;
    const e = c_1.c(27);
    const { template, compact, share } = n;
    let a;
    let color;
    let isFollowingPointer;
    let isPaused;
    let shape;
    let u;
    if (e[0] !== share?.isMarkLive || e[1] !== template.avatarColor || e[2] !== template.avatarShape || e[3] !== template.shareId) {
        const v = {
            id: template.shareId,
            avatarShape: template.avatarShape,
            avatarColor: template.avatarColor
        };
        const isMarkLive = share?.isMarkLive ?? false;
        let j;
        if (e[10] !== isMarkLive) {
            j = b8_1({
                parkUntilLive: false,
                isMarkLive
            });
            e[10] = isMarkLive;
            e[11] = j;
        } else {
            j = e[11];
        }
        const N = j;
        if (e[12] === Symbol.for("react.memo_cache_sentinel")) {
            u = {
                className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-h8yej3 sand-euugli"
            };
            e[12] = u;
        } else {
            u = e[12];
        }
        a = Q;
        color = Q_1(v);
        isFollowingPointer = N.isFollowingPointer;
        isPaused = N.isPaused;
        shape = U(v);
        e[0] = share?.isMarkLive;
        e[1] = template.avatarColor;
        e[2] = template.avatarShape;
        e[3] = template.shareId;
        e[4] = a;
        e[5] = color;
        e[6] = isFollowingPointer;
        e[7] = isPaused;
        e[8] = shape;
        e[9] = u;
    } else {
        a = e[4];
        color = e[5];
        isFollowingPointer = e[6];
        isPaused = e[7];
        shape = e[8];
        u = e[9];
    }
    const spinSignal = share?.spinSignal ?? 0;
    const state = share?.markState ?? "idle";
    const k = compact && w.markCompact;
    let p;
    if (e[13] !== k) {
        p = [
            w.mark,
            k
        ];
        e[13] = k;
        e[14] = p;
    } else {
        p = e[14];
    }
    let y;
    if (e[15] !== a || e[16] !== color || e[17] !== isFollowingPointer || e[18] !== isPaused || e[19] !== shape || e[20] !== spinSignal || e[21] !== state || e[22] !== p) {
        y = j.jsx(a, {
            color,
            isFollowingPointer,
            isPaused,
            shape,
            sizePx,
            spinSignal,
            state,
            style: p
        });
        e[15] = a;
        e[16] = color;
        e[17] = isFollowingPointer;
        e[18] = isPaused;
        e[19] = shape;
        e[20] = spinSignal;
        e[21] = state;
        e[22] = p;
        e[23] = y;
    } else {
        y = e[23];
    }
    let h;
    if (e[24] !== y || e[25] !== u) {
        h = <div {...u}>{y}</div>;
        e[24] = y;
        e[25] = u;
        e[26] = h;
    } else {
        h = e[26];
    }
    return h;
}
function un(n, template, s, t) {
    if (n.kind === "root") {
        return template.name;
    }
    if (n.kind === "settings") {
        return t;
    }
    if (n.kind === "context" || n.kind === "routines" || n.kind === "integrations") {
        return s[n.kind];
    }
    if (n.kind === "memory") {
        return Xe(template, n.key)?.content ?? s.context;
    }
    if (n.kind === "skill") {
        return Ue(template, n.key)?.name ?? s.context;
    }
    return Ge(template, n.key)?.name ?? s.routines;
}
function Ae(n) {
    return n.kind === "settings" || n.kind === "context" || n.kind === "routines" || n.kind === "integrations";
}
function fn(n) {
    return n.kind === "root" || Ae(n);
}
function paneKey(n) {
    if ("key" in n) {
        return `${n.kind}:${n.key}`;
    }
    return n.kind;
}
function Us1Component(n) {
    Us1Component.d = 261;
    const e = c_1.c(31);
    const { pane, template, isLoading, description, resolve, onPush, onDeleted } = n;
    const r = y_1();
    if (pane.kind === "root") {
        let h;
        if (e[0] !== r) {
            h = ({
                0: {
                    className: "sand-78zum5 sand-dt5ytf sand-9f619 sand-euugli sand-1y1aw1k sand-v54qhq sand-x6bls6 sand-f7dkkf"
                },
                1: {
                    className: "sand-78zum5 sand-dt5ytf sand-9f619 sand-euugli sand-1y1aw1k sand-x6bls6 sand-92arao sand-1bk0ktj"
                }
            })[!!r << 0];
            e[0] = r;
            e[1] = h;
        } else {
            h = e[1];
        }
        let v;
        if (e[2] !== description || e[3] !== template) {
            v = <Es1Component description={description} template={template}/>;
            e[2] = description;
            e[3] = template;
            e[4] = v;
        } else {
            v = e[4];
        }
        let x;
        if (e[5] !== isLoading || e[6] !== onPush || e[7] !== template) {
            x = isLoading ? <div className="sand-78zum5 sand-6s0dn4 sand-l56j7k sand-1iyjqo2 sand-1db3i3o"><Ce borderWidth={1.5} size={20}/></div> : <Ss1Component onOpen={(kind)=>onPush({
                    kind
                })} template={template}/>;
            e[5] = isLoading;
            e[6] = onPush;
            e[7] = template;
            e[8] = x;
        } else {
            x = e[8];
        }
        let j;
        if (e[9] !== h || e[10] !== v || e[11] !== x) {
            j = <div {...h}>{v}{x}</div>;
            e[9] = h;
            e[10] = v;
            e[11] = x;
            e[12] = j;
        } else {
            j = e[12];
        }
        return j;
    }
    let u;
    if (e[13] !== r || e[14] !== pane) {
        u = ({
            0: {
                className: "sand-78zum5 sand-dt5ytf sand-9f619 sand-euugli sand-ou54vl sand-1h8t67q sand-v54qhq sand-x6bls6 sand-f7dkkf"
            },
            2: {
                className: "sand-78zum5 sand-dt5ytf sand-9f619 sand-euugli sand-ou54vl sand-v54qhq sand-x6bls6 sand-f7dkkf sand-7sb2j6"
            },
            1: {
                className: "sand-78zum5 sand-dt5ytf sand-9f619 sand-euugli sand-ou54vl sand-1h8t67q sand-x6bls6 sand-92arao sand-1bk0ktj"
            },
            3: {
                className: "sand-78zum5 sand-dt5ytf sand-9f619 sand-euugli sand-ou54vl sand-x6bls6 sand-7sb2j6 sand-92arao sand-1bk0ktj"
            }
        })[!!Ae(pane) << 1 | !!r << 0];
        e[13] = r;
        e[14] = pane;
        e[15] = u;
    } else {
        u = e[15];
    }
    let onOpenMemory;
    let onOpenAutomation;
    let onOpenSkill;
    if (e[16] !== onPush) {
        onOpenMemory = (h)=>onPush({
                kind: "memory",
                key: h
            });
        onOpenAutomation = (h)=>onPush({
                kind: "automation",
                key: h
            });
        onOpenSkill = (h)=>onPush({
                kind: "skill",
                key: h
            });
        e[16] = onPush;
        e[17] = onOpenMemory;
        e[18] = onOpenAutomation;
        e[19] = onOpenSkill;
    } else {
        onOpenMemory = e[17];
        onOpenAutomation = e[18];
        onOpenSkill = e[19];
    }
    let p;
    if (e[20] !== onDeleted || e[21] !== pane || e[22] !== resolve || e[23] !== onOpenMemory || e[24] !== onOpenAutomation || e[25] !== onOpenSkill || e[26] !== template) {
        p = <Ds1Component onDeleted={onDeleted} onOpenMemory={onOpenMemory} onOpenAutomation={onOpenAutomation} onOpenSkill={onOpenSkill} pane={pane} resolve={resolve} template={template}/>;
        e[20] = onDeleted;
        e[21] = pane;
        e[22] = resolve;
        e[23] = onOpenMemory;
        e[24] = onOpenAutomation;
        e[25] = onOpenSkill;
        e[26] = template;
        e[27] = p;
    } else {
        p = e[27];
    }
    let y;
    if (e[28] !== u || e[29] !== p) {
        y = <div {...u}>{p}</div>;
        e[28] = u;
        e[29] = p;
        e[30] = y;
    } else {
        y = e[30];
    }
    return y;
}
function Qe1Component(n) {
    Qe1Component.d = 246;
    const e = c_1.c(88);
    const { template, instructions, isLoading, onClose, action, share, embedded } = n;
    const r = embedded === undefined ? false : embedded;
    const { _: __1 } = u_1();
    const f = Ke();
    const mRef = r_1.useRef(null);
    const kRef = r_1.useRef(null);
    const pRef = r_1.useRef(null);
    const yRef = r_1.useRef(null);
    const hRef = r_1.useRef(null);
    bv();
    const v = db();
    const { catalog } = c$();
    let j;
    if (e[0] !== catalog) {
        j = J(catalog);
        e[0] = catalog;
        e[1] = j;
    } else {
        j = e[1];
    }
    const resolve = j;
    let I;
    if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        I = [
            {
                kind: "root"
            }
        ];
        e[2] = I;
    } else {
        I = e[2];
    }
    const [_, set_] = r_1.useState(I);
    const current = _[_.length - 1] ?? {
        kind: "root"
    };
    let te;
    if (e[3] !== instructions || e[4] !== template) {
        te = instructions === undefined ? template : {
            ...template,
            description: instructions
        };
        e[3] = instructions;
        e[4] = template;
        e[5] = te;
    } else {
        te = e[5];
    }
    const ge = te;
    const navigation = u_2({
        current,
        paneKey,
        resolveFocus: (b, incoming)=>r_2(b, {
                back: pRef.current,
                incoming,
                title: yRef.current,
                fallback: kRef.current
            })
    });
    let ae;
    if (e[6] !== template.description) {
        ae = template.description.replace(/\s+/g, " ").trim();
        e[6] = template.description;
        e[7] = ae;
    } else {
        ae = e[7];
    }
    const description = ae;
    const O = current.kind !== "root";
    const xe = fn(current);
    const compact = Ae(current);
    const be = un(current, template, f, __1({
        id: "Tz0i8g"
    }));
    const { status } = eW();
    let le;
    let C;
    if (e[8] !== status || e[9] !== template.createdAtMs || e[10] !== template.creatorName || e[11] !== template.sourceAgentId || e[12] !== template.updatedAtMs) {
        C = eX(template.updatedAtMs ?? template.createdAtMs, eY());
        le = He({
            creatorName: template.creatorName,
            sourceAgentId: template.sourceAgentId,
            signedInName: Ye(status),
            updatedOn: C
        });
        e[8] = status;
        e[9] = template.createdAtMs;
        e[10] = template.creatorName;
        e[11] = template.sourceAgentId;
        e[12] = template.updatedAtMs;
        e[13] = le;
        e[14] = C;
    } else {
        le = e[13];
        C = e[14];
    }
    const Me = le;
    const ms = !O && (Me?.kind === "updated" || Me?.updatedOn != null);
    const ie = action != null && C != null && !ms ? C : undefined;
    let de;
    if (e[15] !== navigation || e[16] !== set_) {
        de = (b)=>{
            const q = hRef.current?.viewportElement;
            if (q != null) {
                q.scrollTop = 0;
            }
            navigation.navigate({
                direction: "push",
                landing: {
                    kind: "back"
                }
            });
            set_((ks)=>[
                    ...ks,
                    b
                ]);
        };
        e[15] = navigation;
        e[16] = set_;
        e[17] = de;
    } else {
        de = e[17];
    }
    const onPush = de;
    let oe;
    if (e[18] !== navigation || e[19] !== current || e[20] !== set_ || e[21] !== _.length) {
        oe = ()=>{
            if (_.length <= 1) {
                return;
            }
            const b = hRef.current?.viewportElement;
            if (b != null) {
                b.scrollTop = 0;
            }
            navigation.navigate({
                direction: "pop",
                landing: {
                    kind: "row",
                    paneKey: paneKey(current)
                }
            });
            set_(mn);
        };
        e[18] = navigation;
        e[19] = current;
        e[20] = set_;
        e[21] = _.length;
        e[22] = oe;
    } else {
        oe = e[22];
    }
    const we = oe;
    let re;
    if (e[23] !== ie) {
        re = ie == null ? null : <Ee color="secondary" size="sm"><Pe1Component updatedOn={ie}/></Ee>;
        e[23] = ie;
        e[24] = re;
    } else {
        re = e[24];
    }
    const leading = re;
    let B = null;
    if (current.kind === "settings") {
        B = null;
    } else if (action != null) {
        let b;
        if (e[25] === Symbol.for("react.memo_cache_sentinel")) {
            b = <x.ActionSpacer/>;
            e[25] = b;
        } else {
            b = e[25];
        }
        let q;
        if (e[26] !== action || e[27] !== leading) {
            q = <x.ActionBar style={w.footer}>{leading}{b}{action}</x.ActionBar>;
            e[26] = action;
            e[27] = leading;
            e[28] = q;
        } else {
            q = e[28];
        }
        B = q;
    } else if (share != null && (share.isAvailable || v && share.isPublished)) {
        let b;
        if (e[29] !== leading || e[30] !== share) {
            b = <Rs1Component leading={leading} share={share}/>;
            e[29] = leading;
            e[30] = share;
            e[31] = b;
        } else {
            b = e[31];
        }
        B = b;
    }
    let ce;
    if (e[32] === Symbol.for("react.memo_cache_sentinel")) {
        ce = {
            className: "sand-1n2onr6 sand-78zum5 sand-dt5ytf sand-euugli sand-2lwn1j sand-1iyjqo2 sand-6ikm8r"
        };
        e[32] = ce;
    } else {
        ce = e[32];
    }
    let V;
    if (e[33] !== __1 || e[34] !== action || e[35] !== r || e[36] !== O || e[37] !== onPush || e[38] !== share?.isPublished) {
        V = action == null && share?.isPublished === true && !O ? <div {...{
            0: {
                className: "sand-10l6tqk sand-1tk7jg1 sand-o2ifbc sand-zkaem6"
            },
            1: {
                className: "sand-10l6tqk sand-1tk7jg1 sand-zkaem6 sand-1wpkksf"
            }
        }[!r << 0]}><Pe aria-label={__1({
            id: "Tz0i8g"
        })} icon="settings-gear" onClick={()=>onPush({
                kind: "settings"
            })}/></div> : null;
        e[33] = __1;
        e[34] = action;
        e[35] = r;
        e[36] = O;
        e[37] = onPush;
        e[38] = share?.isPublished;
        e[39] = V;
    } else {
        V = e[39];
    }
    let E;
    if (e[40] !== r || e[41] !== O) {
        E = ({
            0: {
                className: "sand-10l6tqk sand-13vifvy sand-1o0tod sand-tijo5x sand-htitgo sand-78zum5 sand-6s0dn4 sand-9f619 sand-euugli sand-dd8jsf sand-ou54vl sand-z9dl7a sand-2vl965 sand-sag5q8 sand-f7dkkf sand-10e981r sand-1hkp6id sand-1q0q8m5 sand-19145p9 sand-105ttfm sand-11xpdln sand-4wkmsb sand-q8ykup sand-12w9bfk sand-1554a8d"
            },
            2: {
                className: "sand-10l6tqk sand-13vifvy sand-1o0tod sand-tijo5x sand-htitgo sand-78zum5 sand-6s0dn4 sand-9f619 sand-euugli sand-dd8jsf sand-ou54vl sand-z9dl7a sand-2vl965 sand-sag5q8 sand-f7dkkf sand-10e981r sand-1hkp6id sand-1q0q8m5 sand-19145p9 sand-11xpdln sand-4wkmsb sand-q8ykup sand-12w9bfk sand-1554a8d sand-nn1q72"
            },
            1: {
                className: "sand-10l6tqk sand-13vifvy sand-1o0tod sand-tijo5x sand-htitgo sand-78zum5 sand-6s0dn4 sand-9f619 sand-euugli sand-dd8jsf sand-ou54vl sand-z9dl7a sand-2vl965 sand-sag5q8 sand-10e981r sand-1hkp6id sand-1q0q8m5 sand-19145p9 sand-105ttfm sand-11xpdln sand-4wkmsb sand-q8ykup sand-12w9bfk sand-1554a8d sand-92arao"
            },
            3: {
                className: "sand-10l6tqk sand-13vifvy sand-1o0tod sand-tijo5x sand-htitgo sand-78zum5 sand-6s0dn4 sand-9f619 sand-euugli sand-dd8jsf sand-ou54vl sand-z9dl7a sand-2vl965 sand-sag5q8 sand-10e981r sand-1hkp6id sand-1q0q8m5 sand-19145p9 sand-11xpdln sand-4wkmsb sand-q8ykup sand-12w9bfk sand-1554a8d sand-nn1q72 sand-92arao"
            }
        })[!!O << 1 | !r << 0];
        e[40] = r;
        e[41] = O;
        e[42] = E;
    } else {
        E = e[42];
    }
    let D;
    if (e[43] !== __1 || e[44] !== pRef || e[45] !== be || e[46] !== O || e[47] !== we || e[48] !== yRef) {
        D = O ? <><Pe aria-label={__1({
            id: "iH8pgl"
        })} icon="chevron-left" onClick={we} ref={pRef}/><div ref={yRef} tabIndex={-1} className="sand-1iyjqo2 sand-euugli sand-b3r6kr"><x.Title style={[
            a_.body1,
            a$.medium,
            w.subviewTitleLabel
        ]}>{be}</x.Title></div><div className="sand-gd8bvy sand-1fgtraw sand-2lah0s"/></> : null;
        e[43] = __1;
        e[44] = pRef;
        e[45] = be;
        e[46] = O;
        e[47] = we;
        e[48] = yRef;
        e[49] = D;
    } else {
        D = e[49];
    }
    let K;
    if (e[50] !== E || e[51] !== D) {
        K = <div {...E}>{D}</div>;
        e[50] = E;
        e[51] = D;
        e[52] = K;
    } else {
        K = e[52];
    }
    let W;
    if (e[53] !== r) {
        W = r ? null : <div className="sand-10l6tqk sand-13vifvy sand-tijo5x sand-zkaem6"><x.CloseButton/></div>;
        e[53] = r;
        e[54] = W;
    } else {
        W = e[54];
    }
    let F;
    if (e[55] !== compact || e[56] !== r || e[57] !== share || e[58] !== xe || e[59] !== template) {
        F = xe ? <div {...{
            0: {
                className: "sand-1n2onr6 sand-1vjfegm sand-78zum5 sand-dt5ytf sand-2lah0s sand-9f619 sand-euugli sand-1miatn0 sand-v54qhq sand-18d9i69 sand-f7dkkf"
            },
            1: {
                className: "sand-1n2onr6 sand-1vjfegm sand-78zum5 sand-dt5ytf sand-2lah0s sand-9f619 sand-euugli sand-1miatn0 sand-18d9i69 sand-92arao sand-1bk0ktj"
            }
        }[!r << 0]}><Cs1Component compact={compact} share={share} template={template}/></div> : null;
        e[55] = compact;
        e[56] = r;
        e[57] = share;
        e[58] = xe;
        e[59] = template;
        e[60] = F;
    } else {
        F = e[60];
    }
    let renderPane;
    if (e[61] !== description || e[62] !== ge || e[63] !== isLoading || e[64] !== onClose || e[65] !== onPush || e[66] !== resolve) {
        renderPane = (pane)=><Us1Component description={description} isLoading={isLoading} onDeleted={onClose} onPush={onPush} pane={pane} resolve={resolve} template={ge}/>;
        e[61] = description;
        e[62] = ge;
        e[63] = isLoading;
        e[64] = onClose;
        e[65] = onPush;
        e[66] = resolve;
        e[67] = renderPane;
    } else {
        renderPane = e[67];
    }
    let X;
    if (e[68] !== navigation || e[69] !== renderPane) {
        X = <W_1 navigation={navigation} renderPane={renderPane}/>;
        e[68] = navigation;
        e[69] = renderPane;
        e[70] = X;
    } else {
        X = e[70];
    }
    let U;
    if (e[71] !== F || e[72] !== X) {
        U = <As ref={hRef} rootStyle={w.mainViewScroll} scrollbarVisibility="hover">{F}{X}</As>;
        e[71] = F;
        e[72] = X;
        e[73] = U;
    } else {
        U = e[73];
    }
    let G;
    if (e[74] !== kRef || e[75] !== V || e[76] !== K || e[77] !== W || e[78] !== U) {
        G = <x.Body style={w.body}><div ref={kRef} tabIndex={-1} {...ce}>{V}{K}{W}{U}</div></x.Body>;
        e[74] = kRef;
        e[75] = V;
        e[76] = K;
        e[77] = W;
        e[78] = U;
        e[79] = G;
    } else {
        G = e[79];
    }
    let ue;
    if (e[80] !== B || e[81] !== G) {
        ue = <>{G}{B}</>;
        e[80] = B;
        e[81] = G;
        e[82] = ue;
    } else {
        ue = e[82];
    }
    const fe = ue;
    if (r) {
        return fe;
    }
    let onOpenChange;
    if (e[83] !== onClose) {
        onOpenChange = (b)=>{
            if (!b) {
                onClose();
            }
        };
        e[83] = onClose;
        e[84] = onOpenChange;
    } else {
        onOpenChange = e[84];
    }
    let me;
    if (e[85] !== fe || e[86] !== onOpenChange) {
        me = <x.Root initialFocus={mRef} onOpenChange={onOpenChange} open ref={mRef} surfaceStyle={w.surface} variant="rich" width="wide">{fe}</x.Root>;
        e[85] = fe;
        e[86] = onOpenChange;
        e[87] = me;
    } else {
        me = e[87];
    }
    return me;
}
function mn(n) {
    return n.slice(0, -1);
}
function FsComponent(n) {
    FsComponent.d = 244;
    const e = c_1.c(11);
    const { template, onClose, action, sourceAgentId } = n;
    let i;
    if (e[0] !== template) {
        i = da(template);
        e[0] = template;
        e[1] = i;
    } else {
        i = e[1];
    }
    const l = i;
    b5(l.shareId, l.version);
    const { view, isLoading } = eV(template);
    let u;
    if (e[2] !== sourceAgentId || e[3] !== view) {
        u = sourceAgentId == null || view.sourceAgentId === sourceAgentId ? view : {
            ...view,
            sourceAgentId
        };
        e[2] = sourceAgentId;
        e[3] = view;
        e[4] = u;
    } else {
        u = e[4];
    }
    const f = u;
    const share = b7(f);
    let k;
    if (e[5] !== action || e[6] !== isLoading || e[7] !== onClose || e[8] !== share || e[9] !== f) {
        k = <Qe1Component action={action} isLoading={isLoading} onClose={onClose} share={share} template={f}/>;
        e[5] = action;
        e[6] = isLoading;
        e[7] = onClose;
        e[8] = share;
        e[9] = f;
        e[10] = k;
    } else {
        k = e[10];
    }
    return k;
}
const jn = Object.freeze(Object.defineProperty({
    __proto__: null,
    BotTemplateDetailsDialog: FsComponent,
    BotTemplateDetailsView: Qe1Component
}, Symbol.toStringTag, {
    value: "Module"
}));
export { FsComponent as B, Ze1Component as a, jn as b };
