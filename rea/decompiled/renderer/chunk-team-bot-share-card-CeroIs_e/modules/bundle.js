import { c as c_1, u as u_1, r as r_1, T as T_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { cf, cg, b9, aV, co, cp, X, aK, b0 as Q1 } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import { ay, aV as aV_1, aC, g as F, aW as Y } from "./index-ZYxf-aBb.js";
import { B as B_1, s as s_1 } from "./chunk-bot-template-share-card-frame-gOKZUO-a.js";
import { u as u_2 } from "./chunk-team-bot-details-pane-CISL5cWF.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "bfce1aa0-bf75-4ce1-bdff-65536f976ea1";
            e._sentryDebugIdIdentifier = "sentry-dbid-bfce1aa0-bf75-4ce1-bdff-65536f976ea1";
        }
    } catch (e) {}
})();
function se(agent, e) {
    const t = c_1.c(10);
    const s = cf(agent.id);
    const a = ay(e.secrets ? agent.serverId : null);
    let i;
    if (t[0] !== s.plugins) {
        i = cg(s.plugins);
        t[0] = s.plugins;
        t[1] = i;
    } else {
        i = t[1];
    }
    const r = i;
    let plugins;
    if (t[2] !== e.plugins || t[3] !== s.plugins) {
        plugins = e.plugins ? aV_1(s.plugins).length : 0;
        t[2] = e.plugins;
        t[3] = s.plugins;
        t[4] = plugins;
    } else {
        plugins = t[4];
    }
    const skills = e.skills ? r.librarySkills.length : 0;
    const files = e.files ? r.fileSkills.length : 0;
    const f = e.secrets ? a?.secrets.length ?? 0 : 0;
    let u;
    if (t[5] !== plugins || t[6] !== skills || t[7] !== files || t[8] !== f) {
        u = {
            plugins,
            skills,
            files,
            secrets: f
        };
        t[5] = plugins;
        t[6] = skills;
        t[7] = files;
        t[8] = f;
        t[9] = u;
    } else {
        u = t[9];
    }
    return u;
}
const le = /^[([]+|[.,;:!?)\]]+$/g;
const ne = {
    summary: {
        kqGvvJ: "sand-10im51j",
        kMwMTN: "sand-1o0liin",
        $$css: true
    }
};
function ae(l, e) {
    return l.split(/[^\x21-\x7e]+/).some((t)=>t.replace(le, "") === e);
}
const ie = /\s*Teammates can open me here:\s*$/i;
function ye({ content, href }) {
    if (ae(content, href)) {
        return content;
    }
    const t = content.replace(ie, "");
    if (t.length === 0) {
        return content;
    }
    return t;
}
const re = {
    plugins: false,
    skills: false,
    files: false,
    secrets: false
};
function oe(entries, closingEntryId) {
    const t = entries.findIndex((s)=>s.id === closingEntryId);
    for(let s = (t < 0 ? entries.length : t) - 1; s >= 0; s -= 1){
        const a = entries[s];
        if (a?.kind === "event" && a.event.type === "team-shared" && a.event.setup === true) {
            return cp(a.event);
        }
    }
    return re;
}
const RContext = r_1.createContext(false);
function CeComponent(l) {
    CeComponent.d = 610;
    const e = c_1.c(2);
    const { children } = l;
    let s;
    if (e[0] !== children) {
        s = <RContext value>{children}</RContext>;
        e[0] = children;
        e[1] = s;
    } else {
        s = e[1];
    }
    return s;
}
function UeComponent(l) {
    UeComponent.d = 611;
    const e = c_1.c(2);
    const { href } = l;
    if (r_1.use(RContext)) {
        return null;
    }
    let s;
    if (e[0] !== href) {
        s = <span data-sand-copy-url={href} dir="ltr">{href}</span>;
        e[0] = href;
        e[1] = s;
    } else {
        s = e[1];
    }
    return s;
}
function W1Component(l) {
    W1Component.d = 608;
    const e = c_1.c(19);
    const { summary } = l;
    const { _ } = u_1();
    let a;
    if (e[0] !== _ || e[1] !== summary.plugins) {
        a = summary.plugins > 0 ? [
            _({
                id: "yxF19Y",
                values: {
                    0: summary.plugins
                }
            })
        ] : [];
        e[0] = _;
        e[1] = summary.plugins;
        e[2] = a;
    } else {
        a = e[2];
    }
    let i;
    if (e[3] !== _ || e[4] !== summary.skills) {
        i = summary.skills > 0 ? [
            _({
                id: "nXrLxC",
                values: {
                    0: summary.skills
                }
            })
        ] : [];
        e[3] = _;
        e[4] = summary.skills;
        e[5] = i;
    } else {
        i = e[5];
    }
    let r;
    if (e[6] !== _ || e[7] !== summary.files) {
        r = summary.files > 0 ? [
            _({
                id: "jlT89F",
                values: {
                    0: summary.files
                }
            })
        ] : [];
        e[6] = _;
        e[7] = summary.files;
        e[8] = r;
    } else {
        r = e[8];
    }
    let n;
    if (e[9] !== _ || e[10] !== summary.secrets) {
        n = summary.secrets > 0 ? [
            _({
                id: "QEKoL8",
                values: {
                    0: summary.secrets
                }
            })
        ] : [];
        e[9] = _;
        e[10] = summary.secrets;
        e[11] = n;
    } else {
        n = e[11];
    }
    let c;
    if (e[12] !== a || e[13] !== i || e[14] !== r || e[15] !== n) {
        c = [
            ...a,
            ...i,
            ...r,
            ...n
        ];
        e[12] = a;
        e[13] = i;
        e[14] = r;
        e[15] = n;
        e[16] = c;
    } else {
        c = e[16];
    }
    const p = c;
    if (p.length === 0) {
        return null;
    }
    const f = p.join(" · ");
    let u;
    if (e[17] !== f) {
        u = <Q1 as="p" dir="auto" level="body2" style={ne.summary}>{f}</Q1>;
        e[17] = f;
        e[18] = u;
    } else {
        u = e[18];
    }
    return u;
}
function PeComponent(l) {
    PeComponent.d = 609;
    const e = c_1.c(42);
    const { agent, href, closingEntryId } = l;
    const { _: __1 } = u_1();
    const r = b9("grok_bot_multiplayer");
    const n = u_2(agent);
    const c = r && n == null;
    const [p, f] = aV();
    const [u, setU] = r_1.useState(false);
    const _ = co(agent.id);
    let v;
    if (e[0] !== closingEntryId || e[1] !== _.entries) {
        v = oe(_.entries, closingEntryId);
        e[0] = closingEntryId;
        e[1] = _.entries;
        e[2] = v;
    } else {
        v = e[2];
    }
    const summary = se(agent, v);
    const listing = cf(r ? agent.id : null);
    const L = ay(c ? agent.serverId : null);
    let j;
    if (e[3] !== agent || e[4] !== href || e[5] !== listing) {
        j = aC({
            agent,
            listing,
            shareUrl: href
        });
        e[3] = agent;
        e[4] = href;
        e[5] = listing;
        e[6] = j;
    } else {
        j = e[6];
    }
    const template = j;
    const leadingIcon = p ? "check" : "link";
    let onClick;
    if (e[7] !== f || e[8] !== href) {
        onClick = ()=>f(href);
        e[7] = f;
        e[8] = href;
        e[9] = onClick;
    } else {
        onClick = e[9];
    }
    let title;
    if (e[10] !== __1) {
        title = __1({
            id: "a83GDF"
        });
        e[10] = __1;
        e[11] = title;
    } else {
        title = e[11];
    }
    let h;
    if (e[12] !== p) {
        h = <X isCopied={p}/>;
        e[12] = p;
        e[13] = h;
    } else {
        h = e[13];
    }
    let D;
    if (e[14] !== leadingIcon || e[15] !== onClick || e[16] !== title || e[17] !== h) {
        D = <F leadingIcon={leadingIcon} onClick={onClick} rootStyle={aK.askCardButton} size="md" title={title} tone="monochrome" variant="primary">{h}</F>;
        e[14] = leadingIcon;
        e[15] = onClick;
        e[16] = title;
        e[17] = h;
        e[18] = D;
    } else {
        D = e[18];
    }
    const action = D;
    let x;
    if (e[19] !== r || e[20] !== n) {
        x = r ? <F onClick={n ?? (()=>setU(true))} rootStyle={[
            aK.askCardButton,
            s_1.actionSecondary
        ]} size="md" variant="outline"><T_1 id="SZw9tS"/></F> : null;
        e[19] = r;
        e[20] = n;
        e[21] = x;
    } else {
        x = e[21];
    }
    let footer;
    if (e[22] !== action || e[23] !== x) {
        footer = <>{action}{x}</>;
        e[22] = action;
        e[23] = x;
        e[24] = footer;
    } else {
        footer = e[24];
    }
    let meta;
    if (e[25] !== summary) {
        meta = <W1Component summary={summary}/>;
        e[25] = summary;
        e[26] = meta;
    } else {
        meta = e[26];
    }
    let S;
    if (e[27] !== agent.avatarDataUrl || e[28] !== footer || e[29] !== meta || e[30] !== template) {
        S = <B_1 footer={footer} isPublished meta={meta} photoUrl={agent.avatarDataUrl} template={template}/>;
        e[27] = agent.avatarDataUrl;
        e[28] = footer;
        e[29] = meta;
        e[30] = template;
        e[31] = S;
    } else {
        S = e[31];
    }
    let B;
    if (e[32] !== agent || e[33] !== action || e[34] !== u || e[35] !== c || e[36] !== L || e[37] !== template) {
        B = c ? <Y action={action} agent={agent} isOpen={u} onClose={()=>setU(false)} secrets={L} template={template}/> : null;
        e[32] = agent;
        e[33] = action;
        e[34] = u;
        e[35] = c;
        e[36] = L;
        e[37] = template;
        e[38] = B;
    } else {
        B = e[38];
    }
    let I;
    if (e[39] !== S || e[40] !== B) {
        I = <>{S}{B}</>;
        e[39] = S;
        e[40] = B;
        e[41] = I;
    } else {
        I = e[41];
    }
    return I;
}
export { CeComponent as T, PeComponent as a, UeComponent as b, ae as h, ye as s };
