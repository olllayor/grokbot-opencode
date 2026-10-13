import { c as c_1, p, T } from "./index.eager-vendor-Qbf9YA6n.js";
import { a$, a_, bc } from "./index.eager-app-Cj5f8Gby.js";
import { a3 as _ } from "./index-ZYxf-aBb.js";
import "./index.eager-platform-Dcfeegfw.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "4f53a21f-8556-4a31-acce-2404bd3bf4eb";
            e._sentryDebugIdIdentifier = "sentry-dbid-4f53a21f-8556-4a31-acce-2404bd3bf4eb";
        }
    } catch (e) {}
})();
const g = {
    title: {
        kogj98: "sand-1ghz6dp",
        k9WMMc: "sand-2b8uid",
        kMwMTN: "sand-tyxrsu",
        $$css: true
    },
    description: {
        kogj98: "sand-1ghz6dp",
        k9WMMc: "sand-2b8uid",
        kMwMTN: "sand-1o0liin",
        k1xSpc: "sand-104kibb",
        kgKLqz: "sand-1ua5tub",
        kJFfOR: "sand-1gzmk7r",
        kVQacm: "sand-b3r6kr",
        kHjlTd: "sand-j0a0fe",
        $$css: true
    },
    byline: {
        k9WMMc: "sand-2b8uid",
        kMwMTN: "sand-169k319",
        $$css: true
    }
};
export function TeamBotTeammateIntro(M) {
    TeamBotTeammateIntro.d = 1056;
    const s = c_1.c(26);
    const { agent } = M;
    let c;
    if (s[0] !== agent.description) {
        c = agent.description.trim();
        s[0] = agent.description;
        s[1] = c;
    } else {
        c = s[1];
    }
    const title = c;
    let m;
    if (s[2] !== agent.ownerDisplayName) {
        m = agent.ownerDisplayName?.trim() ?? "";
        s[2] = agent.ownerDisplayName;
        s[3] = m;
    } else {
        m = s[3];
    }
    const ownerName = m;
    let f;
    let u;
    if (s[4] === Symbol.for("react.memo_cache_sentinel")) {
        f = {
            className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-1iyjqo2 sand-2lwn1j sand-euugli sand-n2ks54 sand-wxc41k sand-4l9tsp sand-1odjw0f"
        };
        u = {
            className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-33pbmt sand-h8yej3 sand-1j9u4d2 sand-1nkss2m"
        };
        s[4] = f;
        s[5] = u;
    } else {
        f = s[4];
        u = s[5];
    }
    let j;
    if (s[6] === Symbol.for("react.memo_cache_sentinel")) {
        j = {
            className: "sand-78zum5 sand-2lah0s sand-6s0dn4 sand-l56j7k"
        };
        s[6] = j;
    } else {
        j = s[6];
    }
    let n;
    if (s[7] !== agent) {
        n = <div aria-hidden {...j}><_ agent={agent} size="xl"/></div>;
        s[7] = agent;
        s[8] = n;
    } else {
        n = s[8];
    }
    let h;
    if (s[9] === Symbol.for("react.memo_cache_sentinel")) {
        h = {
            className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-167g77z sand-h8yej3"
        };
        s[9] = h;
    } else {
        h = s[9];
    }
    let k;
    if (s[10] === Symbol.for("react.memo_cache_sentinel")) {
        k = p(a_.heading1, a$.medium, g.title);
        s[10] = k;
    } else {
        k = s[10];
    }
    let t;
    if (s[11] !== agent) {
        t = bc(agent);
        s[11] = agent;
        s[12] = t;
    } else {
        t = s[12];
    }
    let d;
    if (s[13] !== t) {
        d = <h2 dir="auto" {...k}>{t}</h2>;
        s[13] = t;
        s[14] = d;
    } else {
        d = s[14];
    }
    let i;
    if (s[15] !== title) {
        i = title.length > 0 ? <p dir="auto" title={title} {...p(a_.body1, g.description)}>{title}</p> : null;
        s[15] = title;
        s[16] = i;
    } else {
        i = s[16];
    }
    let l;
    if (s[17] !== ownerName) {
        l = ownerName.length > 0 ? <span {...p(a_.body2, g.byline)}><T id="Mj5jM2" values={{
            ownerName
        }}/></span> : null;
        s[17] = ownerName;
        s[18] = l;
    } else {
        l = s[18];
    }
    let r;
    if (s[19] !== d || s[20] !== i || s[21] !== l) {
        r = <div {...h}>{d}{i}{l}</div>;
        s[19] = d;
        s[20] = i;
        s[21] = l;
        s[22] = r;
    } else {
        r = s[22];
    }
    let y;
    if (s[23] !== r || s[24] !== n) {
        y = <div {...f}><div {...u}>{n}{r}</div></div>;
        s[23] = r;
        s[24] = n;
        s[25] = y;
    } else {
        y = s[25];
    }
    return y;
}
