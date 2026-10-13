import { c as c_1, r as r_1, u as u_1, p } from "./index.eager-vendor-Qbf9YA6n.js";
import { b7, be, h4, c_, cZ, h5, h6, h7, h8, h9, ha, hb, hc, bm, hd, he, dc, hf, r as r_2, hg, hh, hi, hj, hk, eE, hl, g as g_1, hm, hn, ho, hp, hq, hr, hs, ht as ht_1, bb as urlTransform, hu as Xn1, hv } from "./index.eager-app-Cj5f8Gby.js";
import { i as i_1, ba } from "./index.eager-platform-Dcfeegfw.js";
import { R, Z as Z_1, as, b4, c0, c1, ah, c2, c3, c4, c5 as In, c6, c7 as Rn, c8 as Cn, a2 as E, c9, I as I_1, ca, cb, $, cc as Pn, cd as An, a0 as En, a1 as On, ce as Zn1, af as Qn1, cf as Dn, cg, ch, ci, an } from "./index-ZYxf-aBb.js";
import { b as Fn } from "./chunk-team-bot-share-card-CeroIs_e.js";
import { r as r_3, a, c as c_2, d, g as g_2, M as M_1 } from "./chunk-markdown-math-D9a2zKdp.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./chunk-bot-template-share-card-frame-gOKZUO-a.js";
import "./chunk-team-bot-details-pane-CISL5cWF.js";
import "./chunk-index-C0dBjfzC.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "844d7733-0b0b-4668-a0bd-ea018c5bd262";
            e._sentryDebugIdIdentifier = "sentry-dbid-844d7733-0b0b-4668-a0bd-ea018c5bd262";
        }
    } catch (e) {}
})();
function useXn(canonicalOriginUrl) {
    const e = c_1.c(3);
    const n = b7();
    let s;
    if (e[0] !== canonicalOriginUrl || e[1] !== n.originPrStatus) {
        s = n.originPrStatus.stateFor(canonicalOriginUrl);
        e[0] = canonicalOriginUrl;
        e[1] = n.originPrStatus;
        e[2] = s;
    } else {
        s = e[2];
    }
    const a = s;
    const l = r_1.useSyncExternalStore(a.subscribe, a.get, a.get);
    if (l.status === "ready") {
        return l.value;
    }
    return null;
}
function Ue1Component(t) {
    Ue1Component.d = 1339;
    const e = c_1.c(2);
    const { workflowId, label, agentId } = t;
    const { i18n, _ } = u_1();
    const o = be();
    const c = h4();
    const i = c_(cZ(agentId), []);
    let u;
    if (e[0] !== workflowId) {
        u = (k)=>k.id === workflowId;
        e[0] = workflowId;
        e[1] = u;
    } else {
        u = e[1];
    }
    const h = i.find(u)?.name ?? (label != null && label.length > 0 ? label : _({
        id: "OZJeTZ"
    }));
    const m = h5({
        id: workflowId,
        label: h
    }, i18n);
    const onClick = (x)=>{
        x.preventDefault();
        o?.({
            kind: "skill",
            workflowId
        }, m);
    };
    if (c == null) {
        return <button className="sand-pill sand-pill--skill" onClick={onClick} type="button">{m}</button>;
    }
    return c.renderReferencePill({
        iconName: "cube",
        iconSize: "prose",
        label: m,
        onClick,
        title: _({
            id: "kn2XvK"
        }),
        variantClassName: "sand-pill--skill"
    });
}
const Qn = [
    "/tmp/",
    "/workspace/",
    "/home/",
    "/root/"
];
const Yn = [
    "/sand-data/",
    "/agent-data/",
    "/.grokbot/",
    "/.cursor/sand"
];
const Jn = /[\s"'<>|]/;
function et(t) {
    if (!URL.canParse(t)) {
        return null;
    }
    const e = new URL(t);
    if (e.protocol !== "file:" || e.username.length > 0 || e.password.length > 0 || e.hostname.length > 0 && e.hostname !== "localhost" || e.pathname.length === 0) {
        return null;
    }
    return e.pathname;
}
function nt(t) {
    return Yn.some((e)=>t.includes(e));
}
function fe(t) {
    const e = t.trim();
    if (e.length === 0 || e.length > 4096 || e.includes("\0") || e.includes(`
`) || e.includes("\r")) {
        return null;
    }
    const n = /^file:/i.test(e) ? et(e) : e;
    if (n == null || !n.startsWith("/") || n.includes("\\")) {
        return null;
    }
    const s = n.split("/");
    if (s.length < 3 || s.some((l, r)=>r > 0 && (l.length === 0 || l === "." || l === ".."))) {
        return null;
    }
    const a = `/${s.slice(1).join("/")}`;
    if (!Qn.some((l)=>a.startsWith(l)) || nt(a) || h6(a) === "unknown") {
        return null;
    }
    return a;
}
function tt(t) {
    if (t.length < 2) {
        return t;
    }
    const e = t[0];
    const n = t[t.length - 1];
    if ((e === '"' || e === "'" || e === "`") && e === n) {
        return t.slice(1, -1);
    }
    return t;
}
function st(t) {
    return t.replace(/[).,;:\]]+$/u, "");
}
function at(t, e) {
    const n = t.slice(e);
    const s = /(?:^|[\s"'`(])((?:file:\/\/\/|\/(?:tmp|workspace|home|root)\/))/u.exec(n);
    if (s == null || s.index < 0 || s[1] == null) {
        return -1;
    }
    return e + s.index + (s[0].length - s[1].length);
}
function lt(t, e) {
    let n = e;
    while(n < t.length && !Jn.test(t[n] ?? "")){
        n += 1;
    }
    const s = t.slice(e, n);
    const a = st(s);
    const l = fe(a);
    if (l == null || a.length === 0) {
        return null;
    }
    return {
        end: e + a.length,
        path: l
    };
}
function O(t, e) {
    if (e.length === 0) {
        return;
    }
    const n = t[t.length - 1];
    if (n != null && n.kind === "text") {
        t[t.length - 1] = {
            kind: "text",
            text: n.text + e
        };
        return;
    }
    t.push({
        kind: "text",
        text: e
    });
}
function pe(t) {
    const e = t.trim();
    const n = tt(e);
    const s = fe(n);
    if (s != null && (n === e || n.length + 2 === e.length)) {
        return [
            {
                kind: "path",
                path: s,
                text: n
            }
        ];
    }
    const a = [];
    let l = 0;
    while(l < t.length){
        const r = at(t, l);
        if (r < 0) {
            O(a, t.slice(l));
            break;
        }
        if (r > l) {
            O(a, t.slice(l, r));
        }
        const o = lt(t, r);
        if (o == null) {
            O(a, t.slice(r, r + 1));
            l = r + 1;
            continue;
        }
        a.push({
            kind: "path",
            path: o.path,
            text: t.slice(r, o.end)
        });
        l = o.end;
    }
    return a;
}
function rt(t) {
    return pe(t).some((e)=>e.kind === "path");
}
const F = /^[A-Za-z0-9_.-]+$/;
const it = new Set([
    "cursor.com",
    "staging.cursor.com"
]);
function ot({ portalHost, owner, repo, prNumberSegment }) {
    if (!F.test(owner) || !F.test(repo)) {
        return null;
    }
    const a = Number.parseInt(prNumberSegment, 10);
    if (!(a > 0) || String(a) !== prNumberSegment) {
        return null;
    }
    return {
        prNumber: a,
        canonicalOriginUrl: `https://${portalHost}/codebase/${owner.toLowerCase()}/${repo.toLowerCase()}/pull/${a}`
    };
}
function ct(href) {
    if (href == null || !URL.canParse(href)) {
        return null;
    }
    const e = new URL(href);
    if (e.protocol !== "http:" && e.protocol !== "https:") {
        return null;
    }
    const portalHost = e.hostname.toLowerCase();
    const s = e.pathname.split("/").filter((a)=>a.length > 0);
    if (!it.has(portalHost) || e.protocol !== "https:" || e.port !== "") {
        return null;
    }
    if (s.length === 5 && s[0] === "codebase" && s[3] === "pull") {
        return ot({
            portalHost,
            owner: s[1] ?? "",
            repo: s[2] ?? "",
            prNumberSegment: s[4] ?? ""
        });
    }
    return null;
}
function Me1Component(t) {
    Me1Component.d = 587;
    const e = c_1.c(12);
    const { bcId } = t;
    const { _ } = u_1();
    const { name } = h7(bcId);
    const l = h8();
    let r;
    if (e[0] !== _ || e[1] !== name) {
        r = name.length > 0 ? name : _({
            id: "jozt9B"
        });
        e[0] = _;
        e[1] = name;
        e[2] = r;
    } else {
        r = e[2];
    }
    const o = r;
    let c;
    if (e[3] !== bcId || e[4] !== l) {
        c = (m)=>{
            m.preventDefault();
            l({
                bcId
            });
        };
        e[3] = bcId;
        e[4] = l;
        e[5] = c;
    } else {
        c = e[5];
    }
    const i = c;
    let u;
    if (e[6] !== _) {
        u = _({
            id: "T1AZp3"
        });
        e[6] = _;
        e[7] = u;
    } else {
        u = e[7];
    }
    let p;
    if (e[8] !== o || e[9] !== i || e[10] !== u) {
        p = <R iconName="agent" label={o} onClick={i} title={u} variantClassName="sand-pill--cursor-agent"/>;
        e[8] = o;
        e[9] = i;
        e[10] = u;
        e[11] = p;
    } else {
        p = e[11];
    }
    return p;
}
const dt = {
    open: {
        name: "git-pull-request",
        color: "git-added"
    },
    draft: {
        name: "git-pull-request-draft",
        color: "tertiary"
    },
    merged: {
        name: "git-merge",
        color: "purple"
    },
    closed: {
        name: "git-pull-request-closed",
        color: "git-removed"
    }
};
const ut = {
    name: "git-pull-request",
    color: "secondary"
};
function He1Component(t) {
    He1Component.d = 603;
    const e = c_1.c(16);
    const { href, prLink } = t;
    const { _ } = u_1();
    const l = h9();
    const r = b7();
    let o;
    if (e[0] !== r.originPrStatus || e[1] !== prLink.canonicalOriginUrl) {
        o = ()=>{
            r.originPrStatus.load(prLink.canonicalOriginUrl);
            return ft;
        };
        e[0] = r.originPrStatus;
        e[1] = prLink.canonicalOriginUrl;
        e[2] = o;
    } else {
        o = e[2];
    }
    i_1(o);
    const c = useXn(prLink.canonicalOriginUrl);
    const i = c == null ? ut : dt[c.status];
    const u = c == null ? `#${prLink.prNumber}` : `#${prLink.prNumber} · ${c.title}`;
    const p = c?.status;
    const { color, name } = i;
    let f;
    if (e[3] !== href || e[4] !== l) {
        f = (T)=>{
            T.preventDefault();
            l(href);
        };
        e[3] = href;
        e[4] = l;
        e[5] = f;
    } else {
        f = e[5];
    }
    let k;
    if (e[6] !== _) {
        k = _({
            id: "aigYxz"
        });
        e[6] = _;
        e[7] = k;
    } else {
        k = e[7];
    }
    let x;
    if (e[8] !== u || e[9] !== href || e[10] !== i.color || e[11] !== i.name || e[12] !== p || e[13] !== f || e[14] !== k) {
        x = <R data-pr-status={p} data-sand-copy-url={href} iconColor={color} iconName={name} iconVariant="filled" label={u} onClick={f} title={k} variantClassName="sand-pill--origin-pr" weight="semibold"/>;
        e[8] = u;
        e[9] = href;
        e[10] = i.color;
        e[11] = i.name;
        e[12] = p;
        e[13] = f;
        e[14] = k;
        e[15] = x;
    } else {
        x = e[15];
    }
    return x;
}
function ft() {}
const K = 48;
function z(t) {
    const e = t.replace(/\s+/g, " ").trim();
    if (e.length <= K) {
        return e;
    }
    return `${e.slice(0, K - 1).trimEnd()}\u2026`;
}
function ge(t, e) {
    switch(e.kind){
        case "user-text":
        case "assistant-text":
            {
                const s = z(hf(e.text));
                if (s.length > 0) {
                    return s;
                }
                return t({
                    id: "ncwQad"
                });
            }
        case "image":
            return t({
                id: "qa9cy4"
            });
        case "file":
            return z(e.name != null && e.name.length > 0 ? e.name : c4(e.url));
        case "link":
            return z(c3(e.url));
        case "missing":
            return t({
                id: "nfGMXM"
            });
    }
    return e;
}
function P(t) {
    return t.length === 0 || hb(t) || hc(t) != null;
}
function pt(t, label, entry) {
    const s = label.replace(/\s+/g, " ").trim();
    if (entry == null || !c0(entry)) {
        if (P(s)) {
            return {
                kind: "none"
            };
        }
        return {
            kind: "text",
            text: s
        };
    }
    return {
        kind: "chip",
        label: P(s) ? ge(t, c1(entry)) : s,
        entry
    };
}
function mt(t, entry, n) {
    const s = n ?? t({
        id: "ixkTse"
    });
    switch(entry.kind){
        case "message":
            if (entry.fromAgent != null) {
                return entry.fromAgent.name;
            }
            if (entry.role === "user") {
                return t({
                    id: "kWJmRL"
                });
            }
            return s;
        case "send-message":
            return entry.author?.name ?? s;
        case "user-attachment":
        case "voice-call":
            return t({
                id: "kWJmRL"
            });
        case "tool-call":
        case "mcp-app":
        case "notice":
        case "event":
        case "feedback":
            return s;
    }
    return entry;
}
function Ke1Component(t) {
    Ke1Component.d = 749;
    const e = c_1.c(26);
    const { authorName, timestampMs, preview } = t;
    const { _ } = u_1();
    let r;
    let o;
    let c;
    let i;
    let style;
    if (e[0] !== _ || e[1] !== authorName || e[2] !== timestampMs) {
        const k = hg(timestampMs);
        let x;
        if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
            x = {
                className: "sand-78zum5 sand-dt5ytf sand-1jnr06f sand-euugli"
            };
            i = r_2("sand-message-ref-preview", x.className);
            e[8] = x;
            e[9] = i;
        } else {
            x = e[8];
            i = e[9];
        }
        style = x.style;
        let T;
        if (e[10] === Symbol.for("react.memo_cache_sentinel")) {
            T = {
                className: "sand-78zum5 sand-1pha0wt sand-167g77z sand-euugli"
            };
            e[10] = T;
        } else {
            T = e[10];
        }
        r = T.className;
        let j;
        if (e[11] === Symbol.for("react.memo_cache_sentinel")) {
            j = {
                className: "sand-euugli sand-b3r6kr sand-lyipyv sand-uxw1ft sand-1iyjqo2 sand-1wd3ewq sand-1wm8ruf sand-spwq11 sand-xzm5a7"
            };
            e[11] = j;
        } else {
            j = e[11];
        }
        if (e[12] !== authorName) {
            o = <span className={j.className}>{authorName}</span>;
            e[12] = authorName;
            e[13] = o;
        } else {
            o = e[13];
        }
        c = k != null ? <span className="sand-2lah0s sand-4b2ntj sand-y5h43f sand-spwq11 sand-uxw1ft">{c6(_, k)}</span> : null;
        e[0] = _;
        e[1] = authorName;
        e[2] = timestampMs;
        e[3] = r;
        e[4] = o;
        e[5] = c;
        e[6] = i;
        e[7] = style;
    } else {
        r = e[3];
        o = e[4];
        c = e[5];
        i = e[6];
        style = e[7];
    }
    let p;
    if (e[14] !== r || e[15] !== o || e[16] !== c) {
        p = <div className={r}>{o}{c}</div>;
        e[14] = r;
        e[15] = o;
        e[16] = c;
        e[17] = p;
    } else {
        p = e[17];
    }
    let h;
    if (e[18] === Symbol.for("react.memo_cache_sentinel")) {
        h = {
            className: "sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-euugli sand-19aaqeu sand-1wm8ruf sand-spwq11"
        };
        e[18] = h;
    } else {
        h = e[18];
    }
    let m;
    if (e[19] !== preview) {
        m = <div className={h.className}><Rn preview={preview} variant="quote"/></div>;
        e[19] = preview;
        e[20] = m;
    } else {
        m = e[20];
    }
    let f;
    if (e[21] !== i || e[22] !== style || e[23] !== p || e[24] !== m) {
        f = <div className={i} style={style}>{p}{m}</div>;
        e[21] = i;
        e[22] = style;
        e[23] = p;
        e[24] = m;
        e[25] = f;
    } else {
        f = e[25];
    }
    return f;
}
function Xe1Component(t) {
    Xe1Component.d = 750;
    const e = c_1.c(21);
    const { entry, label } = t;
    const { _ } = u_1();
    const { _: __1 } = u_1();
    const { scrollToEntry, revealEntry, agentId } = ah();
    const { isEntryInScope } = c2();
    const u = dc();
    let p;
    if (e[0] !== agentId || e[1] !== u) {
        p = u.find((w)=>w.id === agentId)?.name ?? null;
        e[0] = agentId;
        e[1] = u;
        e[2] = p;
    } else {
        p = e[2];
    }
    const h = p;
    let m;
    if (e[3] !== entry.id || e[4] !== isEntryInScope || e[5] !== revealEntry || e[6] !== scrollToEntry) {
        m = (w)=>{
            w.preventDefault();
            if (isEntryInScope(entry.id)) {
                scrollToEntry(entry.id);
            } else {
                revealEntry(entry.id);
            }
        };
        e[3] = entry.id;
        e[4] = isEntryInScope;
        e[5] = revealEntry;
        e[6] = scrollToEntry;
        e[7] = m;
    } else {
        m = e[7];
    }
    const f = m;
    let k;
    if (e[8] !== _) {
        k = _({
            id: "22I5dk"
        });
        e[8] = _;
        e[9] = k;
    } else {
        k = e[9];
    }
    let content;
    if (e[10] !== __1 || e[11] !== h || e[12] !== entry) {
        content = ()=><Ke1Component authorName={mt(__1, entry, h)} preview={c1(entry)} timestampMs={entry.timestampMs}/>;
        e[10] = __1;
        e[11] = h;
        e[12] = entry;
        e[13] = content;
    } else {
        content = e[13];
    }
    let T;
    if (e[14] !== f || e[15] !== label) {
        T = <R iconName="arrow-u-up-left" label={label} onClick={f} title="" variantClassName="sand-pill--message-ref"/>;
        e[14] = f;
        e[15] = label;
        e[16] = T;
    } else {
        T = e[16];
    }
    let j;
    if (e[17] !== k || e[18] !== content || e[19] !== T) {
        j = <In aria-label={k} content={content} width={248}>{T}</In>;
        e[17] = k;
        e[18] = content;
        e[19] = T;
        e[20] = j;
    } else {
        j = e[20];
    }
    return j;
}
function ht(t, label, n, s) {
    const a = label.replace(/\s+/g, " ").trim();
    if (P(a)) {
        if (n != null && c0(n)) {
            return ge(t, c1(n));
        }
        return s ?? t({
            id: "pwZVlK"
        });
    }
    return a;
}
function NeComponent(t) {
    NeComponent.d = 751;
    const e = c_1.c(11);
    const { agentId, taskId, address, label } = t;
    const { _ } = u_1();
    const { openThread } = bm();
    const c = b4()?.resolveEntry(address);
    let i;
    if (e[0] !== taskId) {
        i = (k)=>k.id === taskId;
        e[0] = taskId;
        e[1] = i;
    } else {
        i = e[1];
    }
    const u = c_(hd(agentId), []).find(i);
    const p = he(agentId, taskId);
    const h = ht(_, label, c, (u ?? p)?.name);
    let m;
    if (e[2] !== address || e[3] !== agentId || e[4] !== openThread || e[5] !== taskId) {
        m = (k)=>{
            k.preventDefault();
            k.stopPropagation();
            openThread({
                agentId,
                taskId,
                focusEntryId: address
            });
        };
        e[2] = address;
        e[3] = agentId;
        e[4] = openThread;
        e[5] = taskId;
        e[6] = m;
    } else {
        m = e[6];
    }
    let f;
    if (e[7] !== address || e[8] !== h || e[9] !== m) {
        f = <R data-thread-message-ref={address} iconName="arrow-u-up-left" label={h} onClick={m} title="" variantClassName="sand-pill--message-ref"/>;
        e[7] = address;
        e[8] = h;
        e[9] = m;
        e[10] = f;
    } else {
        f = e[10];
    }
    return f;
}
function Ye1Component(t) {
    Ye1Component.d = 748;
    const e = c_1.c(10);
    const { address, label } = t;
    let a;
    if (e[0] !== address) {
        a = ha(address);
        e[0] = address;
        e[1] = a;
    } else {
        a = e[1];
    }
    const taskId = a;
    const r = Z_1()?.agentId;
    const o = as();
    if (taskId === undefined) {
        let i;
        if (e[2] !== address || e[3] !== label) {
            i = <TeComponent address={address} label={label}/>;
            e[2] = address;
            e[3] = label;
            e[4] = i;
        } else {
            i = e[4];
        }
        return i;
    }
    if (r == null || o != null) {
        if (P(label.trim())) {
            return null;
        }
        return label;
    }
    let c;
    if (e[5] !== address || e[6] !== r || e[7] !== label || e[8] !== taskId) {
        c = <NeComponent address={address} agentId={r} label={label} taskId={taskId}/>;
        e[5] = address;
        e[6] = r;
        e[7] = label;
        e[8] = taskId;
        e[9] = c;
    } else {
        c = e[9];
    }
    return c;
}
function TeComponent(t) {
    TeComponent.d = 747;
    const e = c_1.c(8);
    const { address, label } = t;
    const { _ } = u_1();
    const l = b4();
    let r;
    if (e[0] !== _ || e[1] !== address || e[2] !== label || e[3] !== l) {
        r = pt(_, label, l?.resolveEntry(address));
        e[0] = _;
        e[1] = address;
        e[2] = label;
        e[3] = l;
        e[4] = r;
    } else {
        r = e[4];
    }
    const o = r;
    switch(o.kind){
        case "none":
            return null;
        case "text":
            return o.text;
        case "chip":
            {
                let i;
                if (e[5] !== o.entry || e[6] !== o.label) {
                    i = <Xe1Component entry={o.entry} label={o.label}/>;
                    e[5] = o.entry;
                    e[6] = o.label;
                    e[7] = i;
                } else {
                    i = e[7];
                }
                return i;
            }
    }
    return o;
}
function gt(currentTarget) {
    const e = window.getSelection();
    if (e == null || e.isCollapsed || e.rangeCount === 0 || !(currentTarget instanceof Node)) {
        return false;
    }
    return e.getRangeAt(0).intersectsNode(currentTarget);
}
function Be1Component(t) {
    Be1Component.d = 612;
    const e = c_1.c(22);
    const { path, text } = t;
    const { _ } = u_1();
    const [l, setL] = r_1.useState(false);
    const displayName = text;
    let c;
    if (e[0] !== path) {
        c = hh(path);
        e[0] = path;
        e[1] = c;
    } else {
        c = e[1];
    }
    const i = c;
    let u;
    if (e[2] !== _ || e[3] !== displayName) {
        u = _({
            id: "BGZ26c",
            values: {
                displayName
            }
        });
        e[2] = _;
        e[3] = displayName;
        e[4] = u;
    } else {
        u = e[4];
    }
    let p;
    let onKeyDown;
    if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
        p = (w)=>{
            if (!gt(w.currentTarget)) {
                setL(true);
            }
        };
        onKeyDown = (w)=>{
            if (w.key === "Enter" || w.key === " ") {
                w.preventDefault();
                setL(true);
            }
        };
        e[5] = p;
        e[6] = onKeyDown;
    } else {
        p = e[5];
        onKeyDown = e[6];
    }
    let m;
    if (e[7] === Symbol.for("react.memo_cache_sentinel")) {
        m = {
            className: "sand-1ypdohk sand-krqix3 sand-1sur9pj"
        };
        e[7] = m;
    } else {
        m = e[7];
    }
    let f;
    if (e[8] !== u || e[9] !== text) {
        f = <span aria-label={u} dir="ltr" onClick={p} onKeyDown={onKeyDown} role="button" tabIndex={0} {...m}>{text}</span>;
        e[8] = u;
        e[9] = text;
        e[10] = f;
    } else {
        f = e[10];
    }
    let kind;
    if (e[11] !== path) {
        kind = h6(path);
        e[11] = path;
        e[12] = kind;
    } else {
        kind = e[12];
    }
    let onClose;
    if (e[13] === Symbol.for("react.memo_cache_sentinel")) {
        onClose = ()=>setL(false);
        e[13] = onClose;
    } else {
        onClose = e[13];
    }
    let T;
    if (e[14] !== i || e[15] !== l || e[16] !== path || e[17] !== kind) {
        T = <Cn downloadName={i} isOpen={l} kind={kind} name={i} onClose={onClose} source={path}/>;
        e[14] = i;
        e[15] = l;
        e[16] = path;
        e[17] = kind;
        e[18] = T;
    } else {
        T = e[18];
    }
    let j;
    if (e[19] !== f || e[20] !== T) {
        j = <>{f}{T}</>;
        e[19] = f;
        e[20] = T;
        e[21] = j;
    } else {
        j = e[21];
    }
    return j;
}
function Je1Component(t) {
    Je1Component.d = 613;
    const e = c_1.c(4);
    const { runs } = t;
    let s;
    if (e[0] !== runs) {
        s = runs.map(KtComponent);
        e[0] = runs;
        e[1] = s;
    } else {
        s = e[1];
    }
    let a;
    if (e[2] !== s) {
        a = <>{s}</>;
        e[2] = s;
        e[3] = a;
    } else {
        a = e[3];
    }
    return a;
}
function KtComponent(t, e) {
    if (t.kind === "path") {
        return <Be1Component key={`${e}:${t.path}`} path={t.path} text={t.text}/>;
    }
    return t.text;
}
const we = String.raw`[\p{scx=Han}\p{scx=Hiragana}\p{scx=Katakana}\p{scx=Hangul}\u3000-\u303f\uff00-\uffef]`;
const xt = new RegExp(we, "u");
const Nt = new RegExp(String.raw`(?<=\.[a-z\d-]+)${we}[^.]*$`, "iu");
const yt = /^((?:https?:\/\/)?)([\p{L}\p{N}\p{M}._-]*)/iu;
const W = new RegExp("(?<![a-z])https?:\\/\\/(?=[\\p{L}\\p{N}\\p{M}])|(?<=[(*_~[\\]])www\\.(?=[\\p{L}\\p{N}\\p{M}])", "giu");
const Tt = /^https?:\/\//i;
const bt = `!"'*,.:;<?]_~`;
function G(t, e) {
    return t.split(e).length - 1;
}
function jt(t) {
    const [, e = "", n = ""] = yt.exec(t) ?? [];
    const s = e.length + n.length;
    const a = Nt.exec(n);
    const l = xt.exec(t.slice(s));
    let t_length = t.length;
    if (a !== null) {
        t_length = e.length + a.index;
    } else if (l !== null) {
        t_length = s + l.index;
    }
    const o = t.slice(0, t_length);
    let c = G(o, ")") - G(o, "(");
    while(t_length > 0){
        const i = t.charAt(t_length - 1);
        if (i === ")" && c > 0) {
            c -= 1;
        } else if (!bt.includes(i)) {
            break;
        }
        t_length -= 1;
    }
    return t_length;
}
function Se(t, e, start) {
    const s = jt(t);
    const a = t.slice(0, s);
    W.lastIndex = s;
    const l = W.exec(t)?.index ?? t.length;
    const r = {
        url: e + a,
        label: a,
        after: t.slice(s, l),
        start
    };
    if (l === t.length) {
        return [
            r
        ];
    }
    const o = t.slice(l);
    return [
        r,
        ...Se(o, Tt.test(o) ? "" : "http://", start + l)
    ];
}
function Z({ line, column, offset }, s) {
    return {
        line,
        column: column + s,
        offset: offset === undefined ? undefined : offset + s
    };
}
function V({ after }) {
    if (after === "") {
        return [];
    }
    return [
        {
            type: "text",
            value: after
        }
    ];
}
function wt(t) {
    const [e, ...n] = t.children ?? [];
    const { url, position } = t;
    if (e?.type !== "text" || e.value === undefined || n.length > 0) {
        return [
            t
        ];
    }
    if (url === undefined || !url.endsWith(e.value)) {
        return [
            t
        ];
    }
    if (position !== undefined) {
        const { start, end } = position;
        if (start.offset === undefined || end.offset === undefined) {
            return [
                t
            ];
        }
        if (end.offset - start.offset !== e.value.length) {
            return [
                t
            ];
        }
    }
    const l = url.slice(0, url.length - e.value.length);
    const [r, ...o] = Se(e.value, l, 0);
    e.value = r.label;
    t.url = r.url;
    return [
        t,
        ...V(r),
        ...o.flatMap((c)=>[
                {
                    type: "link",
                    url: c.url,
                    position: position && {
                        start: Z(position.start, c.start),
                        end: Z(position.start, c.start + c.label.length)
                    },
                    children: [
                        {
                            type: "text",
                            value: c.label
                        }
                    ]
                },
                ...V(c)
            ])
    ];
}
function _e(t) {
    const e = t.children ?? [];
    for(let n = 0; n < e.length; n += 1){
        const s = e[n];
        if (s === undefined) {
            continue;
        }
        if (s.type !== "link") {
            _e(s);
            continue;
        }
        const a = wt(s);
        const l = a.at(-1);
        const r = e[n + 1];
        if (l?.type === "text" && r?.type === "text") {
            r.value = (l.value ?? "") + (r.value ?? "");
            a.pop();
        }
        e.splice(n, 1, ...a);
        n += a.length - 1;
    }
}
function St() {
    return (t)=>{
        _e(t);
    };
}
function Ie({ children }) {
    for(let n = 0; n < children.length; n += 1){
        const child = children[n];
        if (child === undefined || child.type !== "element" || (Ie(child), child.tagName !== "br")) {
            continue;
        }
        const a = children[n + 1];
        a?.type !== "text" || !a.value.startsWith(`
`) || (a.value === `
` ? children.splice(n + 1, 1) : a.value = a.value.slice(1));
    }
}
function _t() {
    return Ie;
}
const It = /^<(\/?)([a-zA-Z]+)\s*(\/)?>$/;
function Lt(t) {
    if (t.type !== "raw") {
        return null;
    }
    const e = It.exec(t.value);
    const tag = e?.[2]?.toLowerCase();
    if (tag === undefined) {
        return null;
    }
    const canonicalTag = hi.get(tag);
    if (canonicalTag === undefined) {
        return null;
    }
    const isClose = e?.[1] === "/";
    const l = e?.[3] === "/";
    const isVoid = hj.has(tag);
    if (l && (isClose || !isVoid)) {
        return null;
    }
    return {
        isClose,
        isVoid,
        tag,
        canonicalTag
    };
}
function Le(children) {
    const e = [];
    let index = 0;
    while(true){
        const s = children[index];
        if (s === undefined) {
            break;
        }
        const a = Lt(s);
        if (a === null) {
            index += 1;
            continue;
        }
        if (a.isVoid) {
            if (!a.isClose) {
                children.splice(index, 1, {
                    type: "element",
                    tagName: a.canonicalTag,
                    properties: {},
                    children: []
                });
                index += 1;
                continue;
            }
            children.splice(index, 1);
            continue;
        }
        if (!a.isClose) {
            e.push({
                tag: a.tag,
                index
            });
            index += 1;
            continue;
        }
        const l = e.at(-1);
        if (l === undefined || l.tag !== a.tag) {
            index += 1;
            continue;
        }
        e.pop();
        children.splice(l.index, index - l.index + 1, {
            type: "element",
            tagName: a.canonicalTag,
            properties: {},
            children: children.slice(l.index + 1, index)
        });
        index = l.index + 1;
    }
    for (const s of children){
        if (s.type === "element") {
            Le(s.children);
        }
    }
}
function Rt(t) {
    return typeof t === "object" && t !== null && "type" in t && t.type === "root" && "children" in t && Array.isArray(t.children);
}
function Ct() {
    return (e)=>{
        if (Rt(e)) {
            Le(e.children);
        }
    };
}
const Re = /^ {0,3}(?:`{3,}|~{3,})/;
const vt = /^ {0,3}(\d{1,9})[.)](?: |\t|$)/;
const $t = /^ {0,3}(?:[-*+]|\d{1,9}[.)])(?: |\t|$)/;
const X = /^(?: {2,}|\t)/;
const Mt = /^( {0,3})[\u2022\u25E6\u25AA](?=[ \t])/;
function Pt(content) {
    if (!/(?:^|\n) {0,3}[\u2022\u25E6\u25AA][ \t]/.test(content)) {
        return content;
    }
    const e = [];
    let n = false;
    for (const s of content.split(`
`)){
        if (Re.test(s)) {
            n = !n;
            e.push(s);
            continue;
        }
        e.push(n ? s : s.replace(Mt, "$1-"));
    }
    return e.join(`
`);
}
function At(t) {
    if (!/\n {0,3}\d{1,9}[.)](?: |\t|\n|$)/.test(t)) {
        return t;
    }
    const e = t.split(`
`);
    const n = [];
    let s = false;
    let a = false;
    let l = true;
    for (const r of e){
        if (Re.test(r)) {
            s = !s;
            if (!X.test(r)) {
                a = false;
            }
            l = !s;
            n.push(r);
            continue;
        }
        if (s) {
            l = false;
            n.push(r);
            continue;
        }
        if (r.trim() === "") {
            l = true;
            n.push(r);
            continue;
        }
        if (!$t.test(r)) {
            if (l && !X.test(r)) {
                a = false;
            }
            l = false;
            n.push(r);
            continue;
        }
        const o = vt.exec(r);
        if (o !== null && Number(o[1]) >= 2 && !a && !l) {
            n.push("");
        }
        a = true;
        l = false;
        n.push(r);
    }
    return n.join(`
`);
}
const Q = 18;
const M = {
    anchor: {
        kMwMTN: "sand-1heor9g",
        k63SB2: "sand-1rhlpx6",
        kMnn75: "sand-krqix3",
        $$css: true
    },
    tile: {
        k1xSpc: "sand-1lliihq",
        kB7OPa: "sand-9f619",
        kzqmXN: "sand-1xp8n7a",
        kZKoxP: "sand-mix8c7",
        kaIpWk: "sand-1sxf85j",
        kWkggS: "sand-83z2og",
        $$css: true
    },
    image: {
        kVIFPx: "sand-19kjcj4",
        kfzvcC: "sand-47corl",
        kfSwDN: "sand-87ps6o",
        $$css: true
    },
    faviconInset: {
        kmVPX3: "sand-1i3ajwb",
        $$css: true
    },
    globe: {
        k1xSpc: "sand-78zum5",
        kB7OPa: "sand-9f619",
        kzqmXN: "sand-1xp8n7a",
        kZKoxP: "sand-mix8c7",
        kmVPX3: "sand-yf9f8g",
        kMwMTN: "sand-169k319",
        $$css: true
    }
};
function Et(href) {
    if (URL.canParse(href)) {
        return new URL(href).hostname.toLowerCase();
    }
    return null;
}
function HComponent(t) {
    HComponent.d = 654;
    const e = c_1.c(9);
    const { src, insetStyle, onUnusable } = t;
    let onLoad;
    if (e[0] !== onUnusable) {
        onLoad = (c)=>{
            const { naturalWidth, naturalHeight } = c.currentTarget;
            (naturalWidth <= 1 || naturalHeight <= 1) && onUnusable?.();
        };
        e[0] = onUnusable;
        e[1] = onLoad;
    } else {
        onLoad = e[1];
    }
    let r;
    if (e[2] !== insetStyle) {
        r = p(M.tile, M.image, insetStyle);
        e[2] = insetStyle;
        e[3] = r;
    } else {
        r = e[3];
    }
    let o;
    if (e[4] !== onUnusable || e[5] !== src || e[6] !== onLoad || e[7] !== r) {
        o = <img alt="" aria-hidden draggable={false} height={Q} onError={onUnusable} onLoad={onLoad} src={src} width={Q} {...r}/>;
        e[4] = onUnusable;
        e[5] = src;
        e[6] = onLoad;
        e[7] = r;
        e[8] = o;
    } else {
        o = e[8];
    }
    return o;
}
function CeComponent(t) {
    CeComponent.d = 653;
    const e = c_1.c(15);
    const { href } = t;
    const { data } = eE(href);
    const a = hl();
    const [l, setL] = r_1.useState(null);
    const o = data?.faviconDataUrl;
    let c;
    if (e[0] !== href || e[1] !== a) {
        const f = Et(href);
        c = a && f != null ? g_1(f) : null;
        e[0] = href;
        e[1] = a;
        e[2] = c;
    } else {
        c = e[2];
    }
    const i = c;
    let u;
    if (o != null && o !== l) {
        let onUnusable;
        if (e[3] !== o) {
            onUnusable = ()=>setL(o);
            e[3] = o;
            e[4] = onUnusable;
        } else {
            onUnusable = e[4];
        }
        let k;
        if (e[5] !== o || e[6] !== onUnusable) {
            k = <HComponent insetStyle={M.faviconInset} onUnusable={onUnusable} src={o}/>;
            e[5] = o;
            e[6] = onUnusable;
            e[7] = k;
        } else {
            k = e[7];
        }
        u = k;
    } else if (o == null && i != null) {
        let f;
        if (e[8] !== i) {
            f = <HComponent src={i}/>;
            e[8] = i;
            e[9] = f;
        } else {
            f = e[9];
        }
        u = f;
    } else {
        let f;
        if (e[10] === Symbol.for("react.memo_cache_sentinel")) {
            f = <I_1 aria-hidden name="globe" size="lg" style={M.globe}/>;
            e[10] = f;
        } else {
            f = e[10];
        }
        u = f;
    }
    let p;
    let h;
    if (e[11] === Symbol.for("react.memo_cache_sentinel")) {
        p = {
            [hm]: ""
        };
        h = {
            className: "sand--default-marker sand-1rg5ohu sand-b3r6kr sand-1xp8n7a sand-mix8c7 sand-snsww1 sand-43o282"
        };
        e[11] = p;
        e[12] = h;
    } else {
        p = e[11];
        h = e[12];
    }
    let m;
    if (e[13] !== u) {
        m = <span aria-hidden {...p} {...h}>{u}</span>;
        e[13] = u;
        e[14] = m;
    } else {
        m = e[14];
    }
    return m;
}
function Ot({ href, linkSyntax, children }) {
    if (linkSyntax === "autolink" || c9(children).trim() === href.trim()) {
        return hk(href);
    }
    return children;
}
function Ve1Component(t) {
    Ve1Component.d = 652;
    const e = c_1.c(26);
    let children;
    let s;
    let a;
    let linkSyntax;
    let r;
    if (e[0] !== t) {
        ({ href: s, linkSyntax, leafStyle: a, children, ...r } = t);
        e[0] = t;
        e[1] = children;
        e[2] = s;
        e[3] = a;
        e[4] = linkSyntax;
        e[5] = r;
    } else {
        children = e[1];
        s = e[2];
        a = e[3];
        linkSyntax = e[4];
        r = e[5];
    }
    let o;
    if (e[6] !== a) {
        o = [
            a,
            M.anchor
        ];
        e[6] = a;
        e[7] = o;
    } else {
        o = e[7];
    }
    let c;
    if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
        c = {
            className: "sand-uxw1ft"
        };
        e[8] = c;
    } else {
        c = e[8];
    }
    let i;
    if (e[9] !== s) {
        i = <CeComponent href={s}/>;
        e[9] = s;
        e[10] = i;
    } else {
        i = e[10];
    }
    let u;
    if (e[11] === Symbol.for("react.memo_cache_sentinel")) {
        u = {
            className: "sand-eaf4i8 sand-ujl8zx sand-6ur5ct sand-yi4chj sand-da060z sand-193ixag sand-9ojkr9 sand-nzelb4"
        };
        e[11] = u;
    } else {
        u = e[11];
    }
    let p;
    if (e[12] !== children || e[13] !== s || e[14] !== linkSyntax) {
        p = Ot({
            href: s,
            linkSyntax,
            children
        });
        e[12] = children;
        e[13] = s;
        e[14] = linkSyntax;
        e[15] = p;
    } else {
        p = e[15];
    }
    let h;
    if (e[16] !== p) {
        h = <span {...u}>{p}</span>;
        e[16] = p;
        e[17] = h;
    } else {
        h = e[17];
    }
    let m;
    if (e[18] !== i || e[19] !== h) {
        m = <span {...c}>{i}{h}</span>;
        e[18] = i;
        e[19] = h;
        e[20] = m;
    } else {
        m = e[20];
    }
    let f;
    if (e[21] !== s || e[22] !== r || e[23] !== o || e[24] !== m) {
        f = <E {...r} anchorStyle={o} href={s}>{m}</E>;
        e[21] = s;
        e[22] = r;
        e[23] = o;
        e[24] = m;
        e[25] = f;
    } else {
        f = e[25];
    }
    return f;
}
const g = {
    leaf: {
        keoZOQ: "sand-dj266r",
        k1K539: "sand-at24cr",
        $$css: true
    },
    proseBlock: {
        ks0D6T: "sand-10y958y",
        $$css: true
    },
    listText: {
        khDVqt: "sand-eaf4i8",
        $$css: true
    },
    heading: {
        kMwMTN: "sand-1heor9g",
        k63SB2: "sand-xzm5a7",
        $$css: true
    },
    heading1: {
        kGuDYH: "sand-1i1m3gp",
        kLWn49: "sand-gif2c7",
        kb6lSQ: "sand-1hi0czg",
        $$css: true
    },
    heading2: {
        kGuDYH: "sand-19d36u7",
        kLWn49: "sand-1o2sk6j",
        kb6lSQ: "sand-1deyeav",
        keoZOQ: "sand-1e66mq1 sand-14l7nz5",
        $$css: true
    },
    headingMinor: {
        kGuDYH: "sand-1qlqyl8",
        keoZOQ: "sand-1e66mq1 sand-14l7nz5",
        $$css: true
    },
    list: {
        kZCmMZ: "sand-92arao",
        kLWn49: "sand-1rlwhtf",
        kpqbRz: "sand-43c9pm",
        $$css: true
    },
    nestedList: {
        keoZOQ: "sand-1om1abp",
        kZCmMZ: "sand-7ru5ko",
        $$css: true
    },
    wideMarkerGutter: (t)=>[
            {
                kZCmMZ: t != null ? "sand-nvo3vl" : t,
                $$css: true
            },
            {
                "--x-paddingInlineStart": ((e)=>{
                    if (typeof e === "number") {
                        return `${e}px`;
                    }
                    return e ?? undefined;
                })(t)
            }
        ],
    unorderedListDisc: {
        kH6xsr: "sand-taz4m5",
        $$css: true
    },
    unorderedListCircle: {
        kH6xsr: "sand-rylv2j",
        $$css: true
    },
    unorderedListSquare: {
        kH6xsr: "sand-152237o",
        $$css: true
    },
    orderedList: {
        kH6xsr: "sand-3yw8vx",
        $$css: true
    },
    orderedListAlpha: {
        kH6xsr: "sand-1rrqm6h",
        $$css: true
    },
    orderedListRoman: {
        kH6xsr: "sand-19k9dhg",
        $$css: true
    },
    listItem: {
        kguItW: "sand-1xnkbjl",
        $$css: true
    },
    followingListItem: {
        keoZOQ: "sand-1om1abp",
        $$css: true
    },
    link: {
        kMwMTN: "sand-l1v4ol",
        kMnn75: "sand-krqix3 sand-1sur9pj",
        $$css: true
    },
    pre: {
        k8WAf4: "sand-12ffz05",
        kg3NbH: "sand-1m31zm8",
        kaIpWk: "sand-ur7f20",
        kWkggS: "sand-1ciwos8",
        kMwMTN: "sand-19aaqeu",
        kLWn49: "sand-1fc57z9",
        $$css: true
    },
    codeFallback: {
        k8WAf4: "sand-xndluk",
        kg3NbH: "sand-1m31zm8",
        kaIpWk: "sand-ur7f20",
        kWkggS: "sand-1ciwos8",
        kMwMTN: "sand-19aaqeu",
        kMv6JI: "sand-67nlm8",
        kGuDYH: "sand-1wm8ruf",
        kLWn49: "sand-1ja60sm",
        $$css: true
    },
    image: {
        ks0D6T: "sand-193iq5w",
        kZKoxP: "sand-t7dq6l",
        kaIpWk: "sand-12oqio5",
        $$css: true
    },
    taskList: {
        kZCmMZ: "sand-tw3t59",
        kH6xsr: "sand-3ct3a4",
        kGuDYH: "sand-11wthnw",
        kLWn49: "sand-d4r4e8",
        $$css: true
    },
    followingTaskItem: {
        keoZOQ: "sand-1e66mq1",
        $$css: true
    }
};
function EComponent(t) {
    EComponent.d = 689;
    const e = c_1.c(4);
    const { workflowId, label } = t;
    const a = an();
    let l;
    if (e[0] !== a || e[1] !== label || e[2] !== workflowId) {
        l = <Ue1Component agentId={a} label={label} workflowId={workflowId}/>;
        e[0] = a;
        e[1] = label;
        e[2] = workflowId;
        e[3] = l;
    } else {
        l = e[3];
    }
    return l;
}
function MeComponent(t) {
    MeComponent.d = 685;
    const e = c_1.c(7);
    const { href, linkAgentId, children, anchorProps } = t;
    if (an() === linkAgentId) {
        let i;
        if (e[0] !== href) {
            i = <Fn href={href}/>;
            e[0] = href;
            e[1] = i;
        } else {
            i = e[1];
        }
        return i;
    }
    let o;
    if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        o = [
            g.leaf,
            g.link
        ];
        e[2] = o;
    } else {
        o = e[2];
    }
    let c;
    if (e[3] !== anchorProps || e[4] !== children || e[5] !== href) {
        c = <E anchorStyle={o} href={href} {...anchorProps}>{children}</E>;
        e[3] = anchorProps;
        e[4] = children;
        e[5] = href;
        e[6] = c;
    } else {
        c = e[6];
    }
    return c;
}
function Pe(href) {
    const origin = ct(href);
    if (origin != null) {
        return {
            kind: "origin",
            origin
        };
    }
    const n = href == null ? undefined : ht_1(href);
    if (n == null || n.suffix !== "" && n.suffix !== "/") {
        return null;
    }
    const s = ch(n.prNumber);
    if (s == null) {
        return null;
    }
    return {
        kind: "github",
        prNumber: s
    };
}
export function staticLinkCardTitle({ linkText, href }) {
    if (ca(href) == null || hn(href) != null || ho(href) != null || hp(href) != null || Pe(href) != null || hq(href) != null) {
        return null;
    }
    return cb({
        title: linkText,
        url: href
    }) ?? null;
}
const AeContext = r_1.createContext(null);
function RComponent(t) {
    RComponent.d = 663;
    const e = c_1.c(3);
    const { children } = t;
    const s = r_1.useContext(AeContext);
    let a;
    if (e[0] !== children || e[1] !== s) {
        a = s == null ? children : ci(children, s);
        e[0] = children;
        e[1] = s;
        e[2] = a;
    } else {
        a = e[2];
    }
    return a;
}
function C(t, e) {
    return ({ node, children, className, ...rest })=>{
        g_2(node);
        const o = p(g.leaf, g.proseBlock, g.heading, e);
        return r_1.createElement(t, {
            ...rest,
            className: r_2(className, o.className),
            style: o.style
        }, <RComponent>{children}</RComponent>);
    };
}
function qt(t) {
    switch(t){
        case 0:
            return g.orderedList;
        case 1:
            return g.orderedListAlpha;
        default:
            return g.orderedListRoman;
    }
}
const Dt = 2;
export function orderedMarkerExtraCh(t, e) {
    const n = Math.max(t + e - 1, 1);
    return Math.max(String(n).length - Dt, 0);
}
function Bt(unordered) {
    switch(unordered){
        case 0:
            return g.unorderedListDisc;
        case 1:
            return g.unorderedListCircle;
        default:
            return g.unorderedListSquare;
    }
}
function Ee(t) {
    if (t.type === "text") {
        return t.value;
    }
    if (t.type === "element") {
        return t.children.map(Ee).join("");
    }
    return "";
}
function Oe(t) {
    return t.children.filter((e)=>e.type !== "text" || e.value.trim().length > 0);
}
export function classifyTranscriptProseCard(t) {
    if (t.tagName !== "p") {
        return null;
    }
    const e = Oe(t);
    if (e.length !== 1) {
        return null;
    }
    const n = e[0];
    if (n == null || n.type !== "element" || n.tagName !== "a") {
        return null;
    }
    const s = typeof n.properties.href === "string" ? n.properties.href : undefined;
    if (s == null) {
        return null;
    }
    const a = staticLinkCardTitle({
        linkText: n.children.map(Ee).join(""),
        href: s
    });
    if (a == null) {
        return null;
    }
    return {
        url: s,
        title: a
    };
}
function ze(t) {
    t.position = undefined;
    if ("children" in t) {
        t.children.forEach(ze);
    }
}
function Ft() {
    return ze;
}
function qe(t) {
    return [
        Ct,
        _t,
        [
            d,
            {
                classifyProseCard: t ? classifyTranscriptProseCard : undefined
            }
        ],
        hr,
        Ft
    ];
}
export const TRANSCRIPT_MARKDOWN_REHYPE_PLUGINS = qe(true);
const rehypePlugins = qe(false);
export const TRANSCRIPT_MARKDOWN_REMARK_PLUGINS = [
    [
        r_3,
        {
            singleTilde: false
        }
    ],
    St,
    ...a
];
const h1 = C("h1", g.heading1);
const h2 = C("h2", g.heading2);
const h3 = C("h3", g.headingMinor);
const h4_1 = C("h4", g.headingMinor);
const h5_1 = C("h5", g.headingMinor);
const h6_1 = C("h6", g.headingMinor);
function BeComponent(t) {
    BeComponent.d = 686;
    const e = c_1.c(28);
    let n;
    let s;
    let a;
    let l;
    if (e[0] !== t) {
        ({ node: a, children: n, className: s, ...l } = t);
        e[0] = t;
        e[1] = n;
        e[2] = s;
        e[3] = a;
        e[4] = l;
    } else {
        n = e[1];
        s = e[2];
        a = e[3];
        l = e[4];
    }
    const r = cg();
    let o;
    if (e[5] !== a) {
        o = g_2(a);
        e[5] = a;
        e[6] = o;
    } else {
        o = e[6];
    }
    const c = o;
    let i;
    let runs;
    let p;
    let h;
    if (e[7] !== n || e[8] !== s || e[9] !== r || e[10] !== l || e[11] !== c.parentTag) {
        i = ({
            0: {
                className: "sand-dj266r sand-at24cr sand-67nlm8 sand-1gojbwh sand-12oo3zp"
            },
            2: {
                className: "sand-dj266r sand-at24cr sand-67nlm8 sand-1gojbwh sand-12oo3zp sand-4on0b6 sand-1tiofj7 sand-yh5bb9 sand-1e1y6u3 sand-mpze1h"
            },
            1: {
                className: "sand-dj266r sand-at24cr sand-67nlm8 sand-12oo3zp sand-11wthnw sand-1fc57z9"
            },
            3: {
                className: "sand-dj266r sand-at24cr sand-67nlm8 sand-12oo3zp sand-4on0b6 sand-1tiofj7 sand-yh5bb9 sand-1e1y6u3 sand-mpze1h sand-11wthnw sand-1fc57z9"
            }
        })[(c.parentTag !== "pre") << 1 | (c.parentTag === "pre") << 0];
        let k;
        if (e[16] !== n || e[17] !== r || e[18] !== c.parentTag) {
            const x = c9(n);
            k = r && c.parentTag !== "pre" && rt(x) ? pe(x) : null;
            e[16] = n;
            e[17] = r;
            e[18] = c.parentTag;
            e[19] = k;
        } else {
            k = e[19];
        }
        runs = k;
        p = l;
        h = r_2(s, i.className);
        e[7] = n;
        e[8] = s;
        e[9] = r;
        e[10] = l;
        e[11] = c.parentTag;
        e[12] = i;
        e[13] = runs;
        e[14] = p;
        e[15] = h;
    } else {
        i = e[12];
        runs = e[13];
        p = e[14];
        h = e[15];
    }
    let m;
    if (e[20] !== n || e[21] !== runs) {
        m = runs == null ? n : <Je1Component runs={runs}/>;
        e[20] = n;
        e[21] = runs;
        e[22] = m;
    } else {
        m = e[22];
    }
    let f;
    if (e[23] !== i.style || e[24] !== p || e[25] !== h || e[26] !== m) {
        f = <code {...p} className={h} dir="ltr" style={i.style}>{m}</code>;
        e[23] = i.style;
        e[24] = p;
        e[25] = h;
        e[26] = m;
        e[27] = f;
    } else {
        f = e[27];
    }
    return f;
}
export const TRANSCRIPT_MARKDOWN_COMPONENTS = {
    a ({ node, children, href, ...rest }) {
        TRANSCRIPT_MARKDOWN_COMPONENTS.a.d = 665;
        const a = g_2(node);
        if (href != null && hs(href)) {
            return <Zn1 href={href} label={c9(children)}/>;
        }
        const bcId = hn(href);
        if (bcId != null) {
            return <Me1Component bcId={bcId}/>;
        }
        const workflowId = ho(href);
        if (workflowId != null) {
            return <EComponent label={c9(children)} workflowId={workflowId}/>;
        }
        const address = hc(href);
        if (address != null) {
            return <Ye1Component address={address} label={c9(children)}/>;
        }
        const c = hp(href);
        if (c != null) {
            const h = typeof children === "string" ? children : undefined;
            return <Qn1 href={c} label={h} placement="prose"/>;
        }
        const i = Pe(href);
        if (href != null && i != null) {
            if (i.kind === "origin") {
                return <He1Component href={href} prLink={i.origin}/>;
            }
            return <Dn prNumber={i.prNumber} url={href}/>;
        }
        const linkAgentId = href == null ? null : hq(href);
        if (href != null && linkAgentId != null) {
            return <MeComponent anchorProps={rest} href={href} linkAgentId={linkAgentId}>{children}</MeComponent>;
        }
        const p = ca(href);
        if (p != null) {
            return <Ve1Component {...rest} href={p} leafStyle={g.leaf} linkSyntax={a.linkSyntax}>{children}</Ve1Component>;
        }
        return <E anchorStyle={[
            g.leaf,
            g.link
        ]} href={href} {...rest}>{children}</E>;
    },
    blockquote ({ node, children, ...rest }) {
        TRANSCRIPT_MARKDOWN_COMPONENTS.blockquote.d = 666;
        g_2(node);
        return <blockquote {...rest} className="sand-dj266r sand-at24cr sand-10y958y sand-1n2onr6 sand-78zum5 sand-dt5ytf sand-pkkfsy sand-rxpjvj sand-11jd7i5 sand-1czcfko sand-8fiw5y sand-1o0liin sand-1cpjm7i sand-1hmns74 sand-2x245j sand-ltjwvw sand-juy2up sand-vl6qna sand-14qx2bj">{children}</blockquote>;
    },
    br ({ node, ...rest }) {
        TRANSCRIPT_MARKDOWN_COMPONENTS.br.d = 667;
        g_2(node);
        return <br {...rest} className="sand-dj266r sand-at24cr"/>;
    },
    code: BeComponent,
    del ({ node, children, ...rest }) {
        TRANSCRIPT_MARKDOWN_COMPONENTS.del.d = 668;
        g_2(node);
        return <del {...rest} className="sand-dj266r sand-at24cr sand-4b2ntj">{children}</del>;
    },
    em ({ node, children, ...rest }) {
        TRANSCRIPT_MARKDOWN_COMPONENTS.em.d = 669;
        g_2(node);
        return <em {...rest} className="sand-dj266r sand-at24cr">{children}</em>;
    },
    h1,
    h2,
    h3,
    h4: h4_1,
    h5: h5_1,
    h6: h6_1,
    hr ({ node, ...rest }) {
        TRANSCRIPT_MARKDOWN_COMPONENTS.hr.d = 670;
        g_2(node);
        return <hr {...rest} className="sand-dj266r sand-at24cr sand-10y958y sand-178xt8z sand-13fuv20 sand-2kampu sand-18oe1m7 sand-1sy0etr sand-stzfhl"/>;
    },
    img ({ node, src, alt }) {
        TRANSCRIPT_MARKDOWN_COMPONENTS.img.d = 671;
        g_2(node);
        if (typeof src !== "string" || src.length === 0) {
            return null;
        }
        return <On accessibleName={alt} imageStyle={[
            g.leaf,
            g.image
        ]} rootStyle={[
            g.leaf,
            g.proseBlock
        ]} url={src}/>;
    },
    input ({ node, ...rest }) {
        TRANSCRIPT_MARKDOWN_COMPONENTS.input.d = 672;
        const n = g_2(node);
        if (n.task.kind === "checkbox") {
            return <En isChecked={n.task.checked}/>;
        }
        return <input {...rest} className="sand-dj266r sand-at24cr"/>;
    },
    li ({ node, children, className, ...rest }) {
        TRANSCRIPT_MARKDOWN_COMPONENTS.li.d = 673;
        const a = g_2(node);
        const l = !a.elementSibling.isFirst && (a.parentTag === "ul" || a.parentTag === "ol");
        const r = p(g.leaf, g.listText, g.listItem, l && (a.task.kind === "item" ? g.followingTaskItem : g.followingListItem));
        return <li {...rest} className={r_2(className, r.className)} style={r.style}><RComponent>{children}</RComponent></li>;
    },
    ol ({ node, children, className, start, ...rest }) {
        TRANSCRIPT_MARKDOWN_COMPONENTS.ol.d = 674;
        const l = g_2(node);
        const r = l.listDepth.total - l.listDepth.unordered;
        const o = l.parentTag === "li";
        const c = node === undefined ? 0 : node.children.filter((p)=>p.type === "element" && p.tagName === "li").length;
        const i = r === 0 ? orderedMarkerExtraCh(typeof start === "number" ? start : 1, c) : 0;
        const u = p(g.leaf, g.proseBlock, g.list, qt(r), o && g.nestedList, i > 0 && g.wideMarkerGutter(`calc(${o ? ba["--cursor-spacing-4"] : ba["--cursor-spacing-5"]} + ${i}ch)`));
        return <ol {...rest} className={r_2(className, u.className)} start={start} style={u.style}>{children}</ol>;
    },
    p ({ node, children, className, ...rest }) {
        TRANSCRIPT_MARKDOWN_COMPONENTS.p.d = 675;
        const a = g_2(node);
        if (a.proseCard.kind === "card") {
            const { card, run } = a.proseCard;
            return <Pn run={run} title={card.title} url={card.url}/>;
        }
        const l = node === undefined ? [] : Oe(node);
        const r = l.length > 0 && l.every((i)=>i.type === "element" && i.tagName === "img");
        if (l.length > 0 && l.every((i)=>i.type === "element" && i.tagName === "a" && hp(typeof i.properties.href === "string" ? i.properties.href : undefined) != null)) {
            return <>{children}</>;
        }
        if (r) {
            const i = r_1.Children.toArray(children).filter(r_1.isValidElement);
            if (i.length >= 2) {
                return <An host="prose">{i}</An>;
            }
            return <>{i}</>;
        }
        const c = {
            0: {
                className: "sand-dj266r sand-at24cr sand-10y958y sand-126k92a"
            },
            1: {
                className: "sand-dj266r sand-at24cr sand-10y958y sand-eaf4i8"
            }
        }[(a.parentTag === "li") << 0];
        return <p {...rest} className={r_2(className, c.className)} style={c.style}><RComponent>{children}</RComponent></p>;
    },
    pre ({ node, ...rest }) {
        TRANSCRIPT_MARKDOWN_COMPONENTS.pre.d = 676;
        g_2(node);
        return <$ {...rest} codeBlockStyle={[
            g.leaf,
            g.proseBlock
        ]} fallbackStyle={[
            g.leaf,
            g.codeFallback
        ]} node={node} preStyle={[
            g.leaf,
            g.pre
        ]}/>;
    },
    span: c_2,
    strong ({ node, children, ...rest }) {
        TRANSCRIPT_MARKDOWN_COMPONENTS.strong.d = 677;
        g_2(node);
        return <strong {...rest} className="sand-dj266r sand-at24cr sand-xzm5a7">{children}</strong>;
    },
    table ({ node, children, ...rest }) {
        TRANSCRIPT_MARKDOWN_COMPONENTS.table.d = 678;
        g_2(node);
        return <div className="sand-dj266r sand-at24cr sand-193iq5w sand-w2csxc sand-493x5y" dir={rest.dir}><table {...rest} className="sand-ezivpi sand-gqtt45 sand-r426mx sand-1mwwwfo sand-11wthnw sand-d4r4e8">{children}</table></div>;
    },
    tbody ({ node, children, ...rest }) {
        TRANSCRIPT_MARKDOWN_COMPONENTS.tbody.d = 679;
        g_2(node);
        return <tbody {...rest} className="sand-dj266r sand-at24cr">{children}</tbody>;
    },
    td ({ node, children, ...rest }) {
        TRANSCRIPT_MARKDOWN_COMPONENTS.td.d = 680;
        const s = g_2(node);
        return <td {...rest} {...{
            0: {
                className: "sand-dj266r sand-at24cr sand-17ak5pl sand-so031l sand-1q0q8m5 sand-19145p9 sand-1yc453h sand-16dsc37 sand-1mzt3pk"
            },
            1: {
                className: "sand-dj266r sand-at24cr sand-17ak5pl sand-19145p9 sand-1yc453h sand-16dsc37 sand-1mzt3pk sand-1qhh985 sand-1sy0etr"
            }
        }[!!s.isFinalBodyRow << 0]}><RComponent>{children}</RComponent></td>;
    },
    th ({ node, children, ...rest }) {
        TRANSCRIPT_MARKDOWN_COMPONENTS.th.d = 681;
        const s = g_2(node);
        return <th {...rest} {...{
            0: {
                className: "sand-dj266r sand-at24cr sand-17ak5pl sand-so031l sand-1q0q8m5 sand-19145p9 sand-1yc453h sand-16dsc37 sand-1mzt3pk sand-1rhlpx6"
            },
            1: {
                className: "sand-dj266r sand-at24cr sand-17ak5pl sand-19145p9 sand-1yc453h sand-16dsc37 sand-1mzt3pk sand-1rhlpx6 sand-1qhh985 sand-1sy0etr"
            }
        }[!!s.isBlankTableHeaderCell << 0]}><RComponent>{children}</RComponent></th>;
    },
    thead ({ node, children, ...rest }) {
        TRANSCRIPT_MARKDOWN_COMPONENTS.thead.d = 682;
        g_2(node);
        return <thead {...rest} className="sand-dj266r sand-at24cr">{children}</thead>;
    },
    tr ({ node, children, ...rest }) {
        TRANSCRIPT_MARKDOWN_COMPONENTS.tr.d = 683;
        g_2(node);
        return <tr {...rest} className="sand-dj266r sand-at24cr">{children}</tr>;
    },
    ul ({ node, children, className, ...rest }) {
        TRANSCRIPT_MARKDOWN_COMPONENTS.ul.d = 684;
        const a = g_2(node);
        const l = p(g.leaf, g.proseBlock, g.list, Bt(a.listDepth.unordered), a.parentTag === "li" && g.nestedList, a.task.kind === "list" && g.taskList);
        return <ul {...rest} className={r_2(className, l.className)} style={l.style}>{children}</ul>;
    }
};
const M_1_1 = M_1;
const Yt = 200;
const Y = 1024 * 1024;
const I = new Map;
let q = 0;
function Jt({ content, promoteStandaloneLinks, isCacheable }) {
    const s = isCacheable && content.length <= Y ? `${promoteStandaloneLinks ? "p" : "-"}\0${content}` : null;
    if (s != null) {
        const l = I.get(s);
        if (l !== undefined) {
            I.delete(s);
            I.set(s, l);
            return l;
        }
    }
    const a = M_1_1({
        components: TRANSCRIPT_MARKDOWN_COMPONENTS,
        rehypePlugins: promoteStandaloneLinks ? TRANSCRIPT_MARKDOWN_REHYPE_PLUGINS : rehypePlugins,
        remarkPlugins: TRANSCRIPT_MARKDOWN_REMARK_PLUGINS,
        urlTransform,
        children: At(Pt(content))
    });
    if (s != null && a !== undefined) {
        I.set(s, a);
        for(q += s.length; I.size > Yt || q > Y;){
            const l = I.keys().next().value;
            if (l === undefined) {
                break;
            }
            I.delete(l);
            q -= l.length;
        }
    }
    return a;
}
export function TranscriptMarkdown(t) {
    TranscriptMarkdown.d = 688;
    const e = c_1.c(10);
    const { content, matcher, promoteStandaloneLinks, isStreaming } = t;
    const promoteStandaloneLinks_1 = promoteStandaloneLinks === undefined ? true : promoteStandaloneLinks;
    const o = isStreaming === undefined ? false : isStreaming;
    const isCacheable = !o;
    let i;
    if (e[0] !== content || e[1] !== promoteStandaloneLinks_1 || e[2] !== isCacheable) {
        i = Jt({
            content,
            promoteStandaloneLinks: promoteStandaloneLinks_1,
            isCacheable
        });
        e[0] = content;
        e[1] = promoteStandaloneLinks_1;
        e[2] = isCacheable;
        e[3] = i;
    } else {
        i = e[3];
    }
    const u = i;
    const isStable = !o;
    let h;
    if (e[4] !== u || e[5] !== isStable) {
        h = <Xn1 isStable={isStable}>{u}</Xn1>;
        e[4] = u;
        e[5] = isStable;
        e[6] = h;
    } else {
        h = e[6];
    }
    let m;
    if (e[7] !== matcher || e[8] !== h) {
        m = <AeContext.Provider value={matcher}>{h}</AeContext.Provider>;
        e[7] = matcher;
        e[8] = h;
        e[9] = m;
    } else {
        m = e[9];
    }
    return m;
}
const allowedElements = [
    "a",
    "br",
    "code",
    "del",
    "em",
    "strong"
];
const components = {
    ...TRANSCRIPT_MARKDOWN_COMPONENTS,
    a ({ node, children, href, ...rest }) {
        components.a.d = 664;
        g_2(node);
        if (hv(href) == null) {
            return children;
        }
        return <E anchorStyle={[
            g.leaf,
            g.link
        ]} href={href} {...rest}>{children}</E>;
    }
};
export function TranscriptInlineMarkdown({ content }) {
    TranscriptInlineMarkdown.d = 687;
    return M_1_1({
        allowedElements,
        components,
        rehypePlugins,
        remarkPlugins: TRANSCRIPT_MARKDOWN_REMARK_PLUGINS,
        unwrapDisallowed: true,
        urlTransform,
        children: content
    });
}
export { hn as extractCloudAgentLinkId, ho as extractSkillRefId, urlTransform as markdownUrlTransform };
