import { eY, fB, eT, eU, eZ } from "./index.eager-app-Cj5f8Gby.js";
import { i as i_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { bO } from "./index-ZYxf-aBb.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "ab5f3af5-286e-458f-8200-084f9ac7e1bf";
            e._sentryDebugIdIdentifier = "sentry-dbid-ab5f3af5-286e-458f-8200-084f9ac7e1bf";
        }
    } catch (e) {}
})();
const R = {
    team: 0,
    affinity: 1
};
const Q = 0.5;
function v(e, t) {
    return fB(e.category.trim(), t);
}
function J(catalog, isInstalled, n) {
    const i = new Map;
    for (const o of catalog){
        if (!isInstalled(o)) {
            continue;
        }
        const s = v(o, n);
        if (s.length !== 0) {
            i.set(s, (i.get(s) ?? 0) + 1);
        }
    }
    return i;
}
function ee(entry, t, n, i) {
    const o = v(entry, i);
    return {
        entry,
        teammateCount: t.teamInstallCounts[entry.id] ?? 0,
        affinityStrength: o.length === 0 ? 0 : n.get(o) ?? 0
    };
}
function te(e, t) {
    const n = eY();
    const i = new Intl.Collator(n);
    const o = (r, c)=>i.compare(r.entry.displayName, c.entry.displayName);
    const s = J(e.catalog, e.isInstalled, n);
    const l = e.catalog.filter((r)=>!e.isInstalled(r)).map((r)=>ee(r, e, s, n));
    const a = l.filter((r)=>r.teammateCount > 0).sort((r, c)=>c.teammateCount - r.teammateCount || o(r, c));
    const A = l.filter((r)=>r.affinityStrength > 0).sort((r, c)=>c.affinityStrength - r.affinityStrength || c.teammateCount - r.teammateCount || o(r, c));
    const p = new Set;
    const u = [];
    const m = (r, signal)=>{
        if (!(p.has(r.entry.id) || u.length === t)) {
            p.add(r.entry.id);
            u.push({
                entry: r.entry,
                signal
            });
        }
    };
    const h = Math.max(1, Math.floor(t * Q));
    for (const r of a.slice(0, h)){
        m(r, {
            kind: "team",
            teammateCount: r.teammateCount
        });
    }
    for (const r of A){
        m(r, {
            kind: "affinity"
        });
    }
    for (const r of a){
        m(r, {
            kind: "team",
            teammateCount: r.teammateCount
        });
    }
    return u.sort((r, c)=>R[r.signal.kind] - R[c.signal.kind]);
}
const E = {
    FEATURED: {
        id: "FkMol5"
    },
    INFRASTRUCTURE: {
        id: "Mo77P4"
    },
    DATA_ANALYTICS: {
        id: "svH45G"
    },
    PRODUCTIVITY: {
        id: "N42ane"
    },
    PAYMENTS: {
        id: "H0ShEF"
    },
    AGENT_ORCHESTRATION: {
        id: "byAjqm"
    },
    CANVAS: {
        id: "Zty/IJ"
    },
    INBOX_AND_COLLABORATION: {
        id: "IzFMeN"
    },
    SCHEDULING: {
        id: "DbZMYM"
    },
    DOCUMENTS_AND_FILES: {
        id: "gDShYL"
    },
    SALES: {
        id: "mUv9U4"
    },
    CUSTOMER_SUPPORT: {
        id: "n+xLOH"
    },
    FINANCE_AND_LEGAL: {
        id: "hxm6On"
    },
    RESEARCH: {
        id: "bdztP2"
    },
    DESIGN: {
        id: "f8fH8W"
    },
    LOGIN_AND_CREDENTIAL_MANAGEMENT: {
        id: "3Ia71M"
    }
};
function ne(e) {
    switch(e.kind){
        case "search":
        case "category-filter":
        case "plugin-section":
            return true;
        case "plugin":
        case "installed":
        case "skill":
        case "setup":
        case "bot":
            return false;
    }
}
function Ke(e) {
    if (e.kind === "search") {
        return e.query;
    }
    return e.title;
}
function He(e) {
    switch(e.kind){
        case "search":
            return "search";
        case "category-filter":
            return e.filterKey;
        case "plugin-section":
            return e.sectionKey;
        case "plugin":
        case "setup":
            return e.entryId;
        case "installed":
            return e.serverId;
        case "bot":
            return e.botSlug;
        case "skill":
            return e.workflowId;
    }
}
const ie = "featured";
const y = "team-plugins";
const w = "popular-plugins";
export const q = "category:featured";
const P = {
    id: "qMEYke"
};
const oe = {
    id: "f8rAaL"
};
const D = {
    id: "8mCD93"
};
function Ye(e, t, n = []) {
    if (t === q) {
        return e(P);
    }
    if (t === w) {
        return e(oe);
    }
    if (t === y) {
        return e(D);
    }
    return n.find((i)=>i.key === t)?.label ?? e({
        id: "Zt5PUS"
    });
}
function xe(e) {
    const e_publisher = e.publisher;
    if (e_publisher == null || !e_publisher.isUserOwned || e.marketplace == null) {
        return null;
    }
    return e_publisher;
}
function G(e) {
    const t = eY();
    return e.replace(/\S+/g, (n)=>n.charAt(0).toLocaleUpperCase(t) + n.slice(1));
}
function b(e, t) {
    if (t.marketplace != null) {
        return {
            key: y,
            title: e(D),
            rank: 1
        };
    }
    const t_categoryKey = t.categoryKey;
    if (eT(E, t_categoryKey)) {
        return {
            key: `category:${t_categoryKey.toLowerCase()}`,
            title: e(t_categoryKey === "FEATURED" ? P : E[t_categoryKey]),
            rank: t_categoryKey === "FEATURED" ? 0 : 2
        };
    }
    const i = t.category.toLowerCase() === ie;
    const title = i ? e(P) : G(t.category);
    return {
        key: `category:${t.category.toLowerCase()}`,
        title,
        rank: i ? 0 : 2
    };
}
function Be(e, t) {
    const t_categoryKey = t.categoryKey;
    if (eT(E, t_categoryKey)) {
        return e(E[t_categoryKey]);
    }
    const i = t.category.trim();
    if (i.length === 0) {
        return null;
    }
    return G(i);
}
function S(e, t) {
    return b(e, t).key;
}
export function h(e, t) {
    const n = new Map;
    for (const i of t){
        const o = b(e, i);
        const s = n.get(o.key);
        if (s == null) {
            n.set(o.key, {
                title: o.title,
                rank: o.rank,
                items: [
                    i
                ]
            });
        } else {
            s.items.push(i);
        }
    }
    return [
        ...n
    ].sort(([, i], [, o])=>i.rank - o.rank || i.title.localeCompare(o.title, eY())).map(([sectionKey, o])=>({
            sectionKey,
            category: o.title,
            items: o.items
        }));
}
function re(e, catalog, teamInstallCounts) {
    return catalog.filter((i)=>{
        const o = S(e, i);
        return o !== q && o !== y && (teamInstallCounts[i.id] ?? 0) > 0;
    }).sort((i, o)=>(teamInstallCounts[o.id] ?? 0) - (teamInstallCounts[i.id] ?? 0) || i.displayName.localeCompare(o.displayName, eY()));
}
function se(catalog, teamInstallCounts) {
    return catalog.filter((n)=>n.marketplace != null).sort((n, i)=>(teamInstallCounts[i.id] ?? 0) - (teamInstallCounts[n.id] ?? 0) || n.displayName.localeCompare(i.displayName, eY()));
}
function ae(e, catalog) {
    return h(e, catalog).map((n)=>({
            key: n.sectionKey,
            label: n.category
        }));
}
function Ve(e) {
    return e.filter((t)=>K(t)).sort((t, n)=>t.name.localeCompare(n.name, eY(), {
            sensitivity: "base"
        }));
}
function K(e) {
    if (e.source === "workflow") {
        return true;
    }
    return e.source === "plugin" && e.publishedByCurrentUser;
}
function qe(e) {
    return K(e) || e.source === "managed";
}
const ce = "https://cursor.com/marketplace";
function ze(e) {
    const t = new URL(ce);
    t.searchParams.set("pluginId", e);
    return t.toString();
}
const Xe = 6;
const le = 4;
const je = 6;
const ue = 20;
function We(e) {
    return `entry:${e}`;
}
function de(visible, t, n) {
    if (t || visible.length <= n) {
        return {
            visible,
            hiddenCount: 0
        };
    }
    return {
        visible: visible.slice(0, n),
        hiddenCount: visible.length - n
    };
}
function Ze(e, t) {
    for (const n of [
        e,
        t
    ]){
        if (!(n == null || n.length === 0)) {
            try {
                return new URL(n).hostname;
            } catch  {}
        }
    }
    return null;
}
function fe(e, t) {
    if (e.cursorScmProvider != null) {
        return t.find((o)=>o.builtinServerIdentifier === e.rowServerIdentifier);
    }
    const n = t.filter((o)=>o.builtinServerIdentifier == null);
    if (e.pluginId != null) {
        const o = n.find((s)=>s.id === e.pluginId);
        if (o != null) {
            return o;
        }
    }
    const i = e.name.toLowerCase();
    return n.find((o)=>o.name.toLowerCase() === i || o.displayName.toLowerCase() === i);
}
function $e(e, t) {
    return !((e.fields ?? []).length === 0 || t?.hasTeamConfiguredVariables === true);
}
function ge(e) {
    return e.connectors ?? [
        {
            name: e.name,
            description: ""
        }
    ];
}
function pe(e) {
    return {
        connectors: ge(e).length,
        skills: e.skills?.length ?? null
    };
}
function T(e, t) {
    switch(t){
        case "connector":
            return i_1._({
                id: "d5N5Il",
                values: {
                    count: e
                }
            });
        case "skill":
            return i_1._({
                id: "m+pG3Q",
                values: {
                    count: e
                }
            });
        case "command":
            return i_1._({
                id: "MKRcMS",
                values: {
                    count: e
                }
            });
    }
}
function me(e, t) {
    const n = [];
    if (t.connectors > 0) {
        n.push(T(t.connectors, "connector"));
    }
    if (t.skills != null && t.skills > 0) {
        n.push(T(t.skills, "skill"));
    }
    if (t.commands != null && t.commands > 0) {
        n.push(T(t.commands, "command"));
    }
    if (n.length > 0) {
        return eZ(n);
    }
    return e({
        id: "31tnaC"
    });
}
function Qe(e, t, n) {
    const i = fe(t, n);
    const o = i != null ? pe(i) : {
        connectors: 1,
        skills: null
    };
    return me(e, {
        ...o,
        commands: null
    });
}
function he(e) {
    if (e.length < 2) {
        return "";
    }
    let t = 0;
    const n = e[0] ?? "";
    while(t < n.length && e.every((l)=>l[t] === n[t])){
        t += 1;
    }
    const i = n.slice(0, t);
    const o = Math.max(i.lastIndexOf("-"), i.lastIndexOf("_"), i.lastIndexOf("."));
    if (o < 0) {
        return "";
    }
    const s = i.slice(0, o + 1);
    if (e.every((l)=>l.length > s.length)) {
        return s;
    }
    return "";
}
function ye(e) {
    const t = e.replace(/[-_.]+/g, " ").trim();
    if (t.length === 0) {
        return e;
    }
    return t.charAt(0).toLocaleUpperCase(eY()) + t.slice(1);
}
function Je(e) {
    const t = he(e.map((n)=>n.name));
    return new Map(e.map((n)=>[
            n.name,
            n.title ?? ye(n.name.slice(t.length))
        ]));
}
const Ae = {
    id: "Hc3Gxt"
};
const purpose = "plugin-auth";
const Se = {
    id: "uUsUEv"
};
const request = "Some of my installed plugins can't be fetched. Their content lives in a private git repository, and your computer — the machine Shell and Read act on, not mine — has no credentials to read it. Set that up on your computer: run `gh auth login` there, then `gh auth setup-git` so git itself uses the credential. When a step needs me (a device code, a password, 2FA, an OAuth approval), hand your computer over with request_box_help instead of guessing. Then verify with a read-only `git ls-remote` against one of those plugin repositories and tell me whether it worked. Don't change my repositories or any other credentials.";
function Ie(agents) {
    return agents.find((t)=>t.purpose === purpose)?.id ?? null;
}
async function et(e, t) {
    const n = t.beginCreation({
        name: e.name,
        expectsContent: true,
        kind: "plugin-auth"
    });
    try {
        const { agent } = await t.createAgent({
            clientNonce: n.clientNonce,
            name: e.name,
            description: e.description,
            purpose: e.purpose,
            isIntroductionSuppressed: true
        });
        n.setAgentId(agent.id);
        if (n.isCurrentAccount()) {
            if (!n.isAbandoned()) {
                t.selectAgent(agent.id);
            }
            n.noteSendingFirstMessage();
            await t.sendPrompt({
                agentId: agent.id,
                prompt: e.request,
                initiator: "plugin_setup"
            });
            return agent.id;
        }
        return null;
    } catch (error) {
        n.fail();
        throw error;
    }
}
function _e() {
    let e = null;
    return {
        launch: (t)=>{
            if (e != null) {
                return e;
            }
            const agentId = Ie(t.agents);
            if (agentId != null) {
                t.selectAgent(agentId);
                return Promise.resolve({
                    agentId
                });
            }
            if (!t.isRosterComplete) {
                return Promise.resolve({
                    agentId: null
                });
            }
            const i = t.launchNewAgent({
                name: i_1._(Ae),
                description: i_1._(Se),
                request,
                purpose
            }).then((agentId)=>({
                    agentId
                }));
            e = i;
            const o = ()=>{
                if (e === i) {
                    e = null;
                }
            };
            i.then(o, o);
            return i;
        }
    };
}
const tt = _e();
function nt(e) {
    const t = e.map((i)=>i.pluginName).filter((i)=>i.length > 0);
    if (t.length === 0 || t.length > 3) {
        const i = e.length;
        return i_1._({
            id: "nX8uII",
            values: {
                count: i
            }
        });
    }
    const joinedNames = eU(t);
    return i_1._({
        id: "tK2iFA",
        values: {
            0: t.length,
            joinedNames
        }
    });
}
const Ce = [
    "credentials",
    "productivity",
    "communication",
    "design",
    "code",
    "data",
    "sales",
    "finance",
    "research",
    "support"
];
const Le = {
    LOGIN_AND_CREDENTIAL_MANAGEMENT: "credentials",
    PRODUCTIVITY: "productivity",
    INBOX_AND_COLLABORATION: "communication",
    SCHEDULING: "communication",
    SALES: "sales",
    CUSTOMER_SUPPORT: "support",
    PAYMENTS: "finance",
    FINANCE_AND_LEGAL: "finance",
    DATA_ANALYTICS: "data",
    DESIGN: "design",
    CANVAS: "design",
    DOCUMENTS_AND_FILES: "productivity",
    INFRASTRUCTURE: "code",
    RESEARCH: "research"
};
const Ne = {
    marketing: "sales",
    sales: "sales",
    design: "design",
    engineering: "code",
    product: "productivity",
    operations: "productivity",
    "recruiting & people": "productivity",
    productivity: "productivity",
    research: "research"
};
const Te = {
    slack: [
        "communication"
    ],
    notion: [
        "productivity"
    ],
    "notion-workspace": [
        "productivity"
    ],
    linear: [
        "productivity"
    ],
    figma: [
        "design"
    ],
    tldraw: [
        "design"
    ],
    github: [
        "code"
    ],
    "github-plugin": [
        "code"
    ],
    runlayer: [
        "code"
    ],
    langfuse: [
        "data"
    ],
    parallel: [
        "research",
        "data"
    ],
    superpowers: [
        "code"
    ],
    "compound-engineering": [
        "code"
    ],
    "create-plugin": [
        "code"
    ],
    "context7-plugin": [
        "research"
    ],
    context7: [
        "research"
    ]
};
const Pe = "marketplace:category:";
function Y(e) {
    return e.toLocaleLowerCase("en-US");
}
function ke(e) {
    return e.trim().toUpperCase().replace(/&/gu, " AND ").replace(/[^A-Z0-9]+/gu, "_").replace(/^_+|_+$/gu, "");
}
function x(e) {
    return [
        ...new Set(e)
    ];
}
function Ue(e) {
    for (const t of [
        e.pluginName,
        e.name
    ]){
        if (t === undefined) {
            continue;
        }
        const n = Te[Y(t.trim())];
        if (n !== undefined) {
            return n;
        }
    }
}
function Oe(e) {
    const t = new Set;
    const n = [];
    const i = e.categories.length > 0 ? e.categories : [
        e.category
    ];
    for (const o of i){
        const s = o.trim();
        if (!(s.length === 0 || t.has(s))) {
            t.add(s);
            n.push(s);
        }
    }
    return n;
}
function B(e) {
    return `${Pe}${e}`;
}
function it(e) {
    return B(e);
}
function Re(e) {
    const t = Ue(e);
    if (t !== undefined) {
        return t;
    }
    const n = e.categoryKeys ?? (e.categoryKey === undefined ? [
        e.category
    ] : [
        e.categoryKey
    ]);
    return x(n.flatMap((i)=>{
        const o = Le[ke(i)];
        if (o === undefined) {
            return [];
        }
        return [
            o
        ];
    }));
}
function Me(e) {
    return x(Oe(e).flatMap((t)=>{
        const n = Ne[Y(t.trim())];
        if (n === undefined) {
            return [];
        }
        return [
            n
        ];
    }));
}
function ve(e, t) {
    const n = new Map;
    const i = new Map;
    for (const o of t){
        for (const s of Me(o)){
            const l = i.get(s) ?? [];
            l.push(o);
            i.set(s, l);
        }
    }
    for (const o of e){
        if (o.marketplace === undefined) {
            for (const s of Re(o)){
                const l = n.get(s) ?? [];
                l.push(o);
                n.set(s, l);
            }
        }
    }
    return Ce.flatMap((id)=>{
        if (n.has(id) || i.has(id)) {
            return [
                {
                    id,
                    filterKey: B(id),
                    plugins: n.get(id) ?? [],
                    bots: i.get(id) ?? []
                }
            ];
        }
        return [];
    });
}
const we = {
    credentials: {
        id: "3Ia71M"
    },
    productivity: {
        id: "N42ane"
    },
    communication: {
        id: "hZotg6"
    },
    design: {
        id: "f8fH8W"
    },
    code: {
        id: "EWPtMO"
    },
    data: {
        id: "HKH+W+"
    },
    sales: {
        id: "mUv9U4"
    },
    finance: {
        id: "8V6XO3"
    },
    research: {
        id: "bdztP2"
    },
    support: {
        id: "XYLcNv"
    }
};
function V(e, t) {
    return ve(t, []).map((n)=>({
            category: {
                key: n.filterKey,
                label: e(we[n.id])
            },
            plugins: n.plugins
        }));
}
function ot(e, t) {
    return V(e, t).map((n)=>n.category);
}
export const F = 4;
function deriveMarketplaceBrowseModel(e, { catalog, teamInstallCounts, query, detail, legacySectionKey, isUnified }) {
    const page = detail != null && ne(detail) ? detail : null;
    const sectionOptions = ae(e, catalog);
    const p = page?.kind === "plugin-section" ? page.sectionKey : legacySectionKey;
    const isPopularSection = p === w;
    const popularPlugins = re(e, catalog, teamInstallCounts);
    const teamPlugins = se(catalog, teamInstallCounts);
    const selectedSectionKey = isPopularSection || sectionOptions.some((d)=>d.key === p) ? p : null;
    let c;
    if (isPopularSection) {
        c = popularPlugins.slice(0, ue);
    } else if (selectedSectionKey === y) {
        c = teamPlugins;
    } else if (selectedSectionKey == null) {
        c = catalog;
    } else {
        c = catalog.filter((d)=>S(e, d) === selectedSectionKey);
    }
    const I = query.trim().length > 0;
    const isUnifiedSearch = isUnified && (I || page?.kind === "category-filter");
    const browseItems = isUnifiedSearch ? [] : bO(c, query);
    const hoistedTeamItems = selectedSectionKey == null && !I ? teamPlugins : [];
    const trailingBrowseItems = hoistedTeamItems.length === 0 ? browseItems : browseItems.filter((d)=>S(e, d) !== y);
    const isHomepage = detail == null && selectedSectionKey == null && !I;
    const homepagePluginItems = trailingBrowseItems.filter((d)=>S(e, d) === q);
    const showsTrailingBrowse = !(hoistedTeamItems.length > 0 && trailingBrowseItems.length === 0) && !(isHomepage && homepagePluginItems.length === 0);
    return {
        page,
        sectionOptions,
        popularPlugins,
        teamPlugins,
        selectedSectionKey,
        isPopularSection,
        isHomepage,
        isUnifiedSearch,
        browseItems,
        hoistedTeamItems,
        trailingBrowseItems,
        homepagePluginItems,
        showsTrailingBrowse,
        showsPluginCatalogStatus: isUnified && isHomepage && catalog.length === 0
    };
}
function marketplaceHomepageLogoUrls(e, t) {
    const { catalog, teamInstallCounts } = t;
    const o = deriveMarketplaceBrowseModel(e, {
        catalog,
        teamInstallCounts,
        query: "",
        detail: null,
        legacySectionKey: null,
        isUnified: true
    });
    const s = (a)=>de(a, false, le).visible;
    const l = [
        ...te(t, F).map(({ entry })=>entry),
        ...s(o.homepagePluginItems),
        ...h(e, o.hoistedTeamItems).flatMap((a)=>s(a.items)),
        ...s(o.popularPlugins),
        ...V(e, catalog).flatMap((a)=>s(a.plugins))
    ];
    return [
        ...new Set(l.flatMap((a)=>{
            if (a.iconUrl) {
                return [
                    a.iconUrl
                ];
            }
            return [];
        }))
    ];
}
const rt = Object.freeze(Object.defineProperty({
    __proto__: null,
    FOR_YOU_ROW_LIMIT: F,
    deriveMarketplaceBrowseModel,
    marketplaceHomepageLogoUrls
}, Symbol.toStringTag, {
    value: "Module"
}));
export { He as A, ot as B, Ke as C, Qe as D, rt as E, Xe as I, je as L, le as M, w as P, nt as a, tt as b, me as c, pe as d, ge as e, fe as f, te as g, de as i, Re as j, it as k, et as l, We as m, Ye as n, V as o, Be as p, Ze as r, Ve as s, Je as t, xe as u, ze as v, $e as w, ne as x, deriveMarketplaceBrowseModel as y, qe as z };
